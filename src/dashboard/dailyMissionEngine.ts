/**
 * dailyMissionEngine.ts
 *
 * Single Source of Truth linking the Journey Map (long-term direction)
 * to Today's Mission (daily execution layer).
 *
 * PRODUCTION-GRADE 3-MISSION SYSTEM:
 * 1. Exactly 3 curated daily missions:
 *    - Slot 1: Kern-Lernpfad Station (Follows active learning unit)
 *    - Slot 2: Methoden- & Fertigkeiten-Drill (KFF / MF / TV)
 *    - Slot 3: Schwerpunkt-Vertiefung & Wissens-Check (BMS / Mistakes / SEK)
 * 2. Smart Rollover Mechanism:
 *    - Incomplete missions carry over to the next day.
 *    - Completed missions are replaced with fresh daily tasks.
 *    - Active missions are always maintained at exactly 3.
 * 3. Real-Time Verification:
 *    - Live count tracking against genuine questions and sets solved today.
 *    - Ticks green (✓ Abgeschlossen) immediately upon reaching target.
 */

import type { UserProfile, SetAttempt, LearningUnit, SetWithStatus, ChapterStats } from "./practiceContext";
import { CHAPTERS, SUBJECTS, getSectionFromQuestionId, type NormalizedQuestion, type Chapter } from "./practiceData";
import type { MockAttemptRecord } from "../data/generalprobe";
import { saveDailyMissionToSupabase } from "../lib/dbSync";
import { getViennaDateString, getTodayViennaString, isSameDayVienna } from "../lib/dateService";

export interface PersistedMissionItemTemplate {
  id: string;
  type: "journey_set" | "bms_practice" | "kff_practice" | "weakness_drill" | "mistake_review" | "tv_practice" | "sek_practice" | "mock_review";
  referenceId: string; // chapterId or section
  title: string;
  subLabel: string;
  estimatedMinutes: number;
  targetCount: number;
  category: "set" | "lesson" | "bms" | "kff" | "mistakes" | "mock" | "tv" | "sek";
  priority: number;
  navTarget: {
    screen: "practice" | "mocks" | "plan";
    seed?: Record<string, any>;
  };
  isCarriedOver?: boolean;
  assignedDate?: string; // YYYY-MM-DD
  completed?: boolean;
  completedAt?: number;
}

export interface PersistedDailyMission {
  id: string;
  userId: string;
  missionDate: string; // YYYY-MM-DD
  targetMinutes: number;
  studyDaysPerWeek: number;
  createdAt: number;
  isCreated: boolean; // Explicit flag for State A vs State B
  items: PersistedMissionItemTemplate[];
}

export interface EvaluatedDailyMissionItem extends PersistedMissionItemTemplate {
  currentCount: number;
  completed: boolean;
}

export interface EvaluatedDailyMission {
  isCreatedToday: boolean;
  missionDate: string;
  targetMinutes: number;
  studyDaysPerWeek: number;
  completedTasks: number;
  totalTasks: number;
  completionPercent: number;
  items: EvaluatedDailyMissionItem[];
}

export interface MissionEngineContext {
  userProfile: UserProfile;
  activeUnit: (LearningUnit & { activeSet: SetWithStatus }) | null;
  attemptHistory: Record<string, { selected: number; correct: boolean; timestamp: number; section?: string; chapterId?: string }>;
  setAttempts: Record<string, SetAttempt[]>;
  questions: NormalizedQuestion[];
  wrong: Set<string>;
  answers: Record<string, number>;
  weakAreas: { chapter: Chapter; stats: ChapterStats }[];
  mockHistory: MockAttemptRecord[];
  todayDateStr?: string; // Optional override for testing YYYY-MM-DD
}

/**
 * Helper to get clean YYYY-MM-DD local date string standardized to Europe/Vienna
 */
export function getLocalDateString(d: Date = new Date()): string {
  return getViennaDateString(d);
}

/**
 * Generate exactly 3 curated daily missions tailored to user preferences and exam type.
 * Slot 1: Kern-Lernpfad Station (Follows active unit / syllabus)
 * Slot 2: Methoden- & Fertigkeiten-Drill (KFF / MF / TV)
 * Slot 3: Schwerpunkt-Vertiefung & Wissens-Check (BMS / Mistakes / SEK)
 */
export function generateDailyMissionTemplate(
  ctx: MissionEngineContext,
  dateStr: string,
  isCreated: boolean = true
): PersistedDailyMission {
  const { userProfile, activeUnit, wrong, weakAreas } = ctx;
  const isMedATZ = userProfile.examType === "MEDAT-Z";

  // Target minutes from preferences
  const dailyMins = userProfile.dailyMinutes || (
    userProfile.dailyStudyTime === "under_1h" ? 30 :
    userProfile.dailyStudyTime === "2_4h" ? 90 :
    userProfile.dailyStudyTime === "4h_plus" ? 120 : 60
  );
  const studyDays = userProfile.studyDaysPerWeek || 5;

  // Focus areas flags
  const focusAreas: string[] = userProfile.focusAreas?.length ? userProfile.focusAreas : ["BMS"];
  const wantBMS = focusAreas.includes("BMS");
  const wantKFF = isMedATZ
    ? focusAreas.includes("MF") || focusAreas.includes("KFF")
    : focusAreas.includes("KFF");
  const wantTV = !isMedATZ && focusAreas.includes("TV");
  const wantSEK = !isMedATZ && focusAreas.includes("SEK");

  // Determine focus chapter for Slot 1
  const defaultChapterId = wantBMS
    ? "bio-01-zelle"
    : wantSEK
    ? "sek-rec-face"
    : wantTV
    ? "tv-scipass"
    : wantKFF
    ? (isMedATZ ? "mf-mirror-symm" : "kff-fig-l1")
    : "bio-01-zelle";

  const focusChapterId = activeUnit ? activeUnit.chapterId : defaultChapterId;
  const chDef = CHAPTERS[focusChapterId];
  const focusTitle = activeUnit ? activeUnit.title : (chDef?.title || (wantSEK ? "Emotionen erkennen (EE)" : "Zellbiologie"));
  const focusSetTitle = activeUnit ? activeUnit.activeSet.title : (wantSEK ? "Simulation 1 — Emotionen erkennen" : "Set 1 — Grundlagen");
  const setMins = dailyMins <= 30 ? 15 : dailyMins >= 90 ? 25 : 20;

  const items: PersistedMissionItemTemplate[] = [];

  // ====================================================
  // SLOT 1: Kern-Lernpfad Station (Follows active unit)
  // ====================================================
  items.push({
    id: `task-slot-1-set-${dateStr}`,
    type: "journey_set",
    referenceId: focusChapterId,
    title: focusTitle,
    subLabel: `${focusSetTitle} · ~${setMins} Min`,
    estimatedMinutes: setMins,
    targetCount: 1,
    category: "set",
    priority: 1,
    assignedDate: dateStr,
    navTarget: {
      screen: "practice",
      seed: { chapterId: focusChapterId, section: chDef?.section },
    },
  });

  // ====================================================
  // SLOT 2: Kognitive Fertigkeiten & Methoden-Drill
  // ====================================================
  const kffTarget = dailyMins <= 30 ? 5 : dailyMins >= 90 ? 15 : 10;
  const kffMins = dailyMins <= 30 ? 10 : dailyMins >= 90 ? 20 : 15;

  if (isMedATZ) {
    const useMf = focusAreas.includes("MF") || !focusAreas.includes("KFF");
    const mfTarget = 10;
    const mfMins = 15;
    items.push({
      id: `task-slot-2-mf-${dateStr}`,
      type: "kff_practice",
      referenceId: useMf ? "mf-mirror-symm" : "kff-fig-l1",
      title: useMf ? `${mfTarget} MF · Formen spiegeln trainieren` : `${kffTarget} KFF · Figuren zusammensetzen`,
      subLabel: useMf ? `Manuelle Fertigkeiten (30%) · ~${mfMins} Min` : `Kognitive Fertigkeiten · ~${kffMins} Min`,
      estimatedMinutes: mfMins,
      targetCount: mfTarget,
      category: "kff",
      priority: 2,
      assignedDate: dateStr,
      navTarget: {
        screen: "practice",
        seed: { section: useMf ? "MF" : "KFF", chapterId: useMf ? "mf-mirror-symm" : "kff-fig-l1" },
      },
    });
  } else if (wantTV && !wantKFF) {
    items.push({
      id: `task-slot-2-tv-${dateStr}`,
      type: "tv_practice",
      referenceId: "tv-scipass",
      title: "1 TV-Simulation bearbeiten",
      subLabel: "Wissenschaftliches Textverständnis · ~15 Min",
      estimatedMinutes: 15,
      targetCount: 1,
      category: "tv",
      priority: 2,
      assignedDate: dateStr,
      navTarget: {
        screen: "practice",
        seed: { chapterId: "tv-scipass" },
      },
    });
  } else {
    const kffWeakness = weakAreas.find(
      (w) => w.chapter.section === "KFF" && w.stats.answeredCount >= 5 && w.stats.accuracy < 75
    );
    const kffTitle = kffWeakness
      ? `${kffTarget} KFF · ${kffWeakness.chapter.title}`
      : `${kffTarget} KFF-Aufgaben trainieren`;
    const kffSub = kffWeakness
      ? `Größte Reserve (${kffWeakness.stats.accuracy}%) · ~${kffMins} Min`
      : `Zahlenfolgen & Figuren · ~${kffMins} Min`;
    const kffSeed = kffWeakness
      ? { section: "KFF", chapterId: kffWeakness.chapter.id }
      : { section: "KFF" };

    items.push({
      id: `task-slot-2-kff-${dateStr}`,
      type: kffWeakness ? "weakness_drill" : "kff_practice",
      referenceId: kffWeakness ? kffWeakness.chapter.id : "kff",
      title: kffTitle,
      subLabel: kffSub,
      estimatedMinutes: kffMins,
      targetCount: kffTarget,
      category: "kff",
      priority: 2,
      assignedDate: dateStr,
      navTarget: {
        screen: "practice",
        seed: kffSeed,
      },
    });
  }

  // ====================================================
  // SLOT 3: Schwerpunkt-Vertiefung & Wissens-Check
  // ====================================================
  const bmsTarget = dailyMins <= 30 ? 10 : dailyMins >= 120 ? 25 : dailyMins >= 90 ? 20 : 15;
  const bmsMins = dailyMins <= 30 ? 10 : dailyMins >= 90 ? 25 : 15;
  const wrongCount = wrong.size;

  if (wrongCount > 0) {
    const reviewTarget = Math.min(wrongCount, 5);
    items.push({
      id: `task-slot-3-mistakes-${dateStr}`,
      type: "mistake_review",
      referenceId: "mistakes",
      title: `${reviewTarget} Fehler wiederholen & festigen`,
      subLabel: `Fehleranalyse (${wrongCount} offen) · ~10 Min`,
      estimatedMinutes: 10,
      targetCount: reviewTarget,
      category: "mistakes",
      priority: 3,
      assignedDate: dateStr,
      navTarget: {
        screen: "practice",
        seed: { mode: "mistakes", statusFilter: "falsch" },
      },
    });
  } else if (wantSEK && !isMedATZ) {
    const isSlot1SameSek = focusChapterId === "sek-rec-face";
    const sekChapterId = isSlot1SameSek ? "sek-reg-stress" : "sek-rec-face";
    const sekTitle = isSlot1SameSek
      ? "10 SEK-Aufgaben (Emotionen regulieren)"
      : "10 SEK-Aufgaben trainieren";
    const sekSub = isSlot1SameSek
      ? "Strategien zur Emotionsregulation · ~15 Min"
      : "Sozial-emotionale Kompetenzen · ~15 Min";

    items.push({
      id: `task-slot-3-sek-${dateStr}`,
      type: "sek_practice",
      referenceId: sekChapterId,
      title: sekTitle,
      subLabel: sekSub,
      estimatedMinutes: 15,
      targetCount: 10,
      category: "sek",
      priority: 3,
      assignedDate: dateStr,
      navTarget: {
        screen: "practice",
        seed: { section: "SEK", chapterId: sekChapterId },
      },
    });
  } else {
    const bmsWeakness = weakAreas.find(
      (w) => w.chapter.section === "BMS" && w.stats.answeredCount >= 5 && w.stats.accuracy < 75
    );
    const bmsTitle = bmsWeakness
      ? `${bmsTarget} BMS-Fragen (${bmsWeakness.chapter.title})`
      : `${bmsTarget} BMS-Trainingsfragen lösen`;
    const bmsSub = bmsWeakness
      ? `Fokus-Reserve (${bmsWeakness.stats.accuracy}%) · ~${bmsMins} Min`
      : `Biologie & Chemie Festigung · ~${bmsMins} Min`;
    const bmsChapter = CHAPTERS[focusChapterId]?.section === "BMS" ? focusChapterId : "bio-01-zelle";
    const bmsSeed = bmsWeakness
      ? { section: "BMS", chapterId: bmsWeakness.chapter.id }
      : { section: "BMS", chapterId: bmsChapter };

    items.push({
      id: `task-slot-3-bms-${dateStr}`,
      type: bmsWeakness ? "weakness_drill" : "bms_practice",
      referenceId: bmsSeed.chapterId || "bio-01-zelle",
      title: bmsTitle,
      subLabel: bmsSub,
      estimatedMinutes: bmsMins,
      targetCount: bmsTarget,
      category: "bms",
      priority: 3,
      assignedDate: dateStr,
      navTarget: {
        screen: "practice",
        seed: bmsSeed,
      },
    });
  }

  return {
    id: `mission_${userProfile.name || "user"}_${dateStr}`,
    userId: userProfile.name || "user",
    missionDate: dateStr,
    targetMinutes: dailyMins,
    studyDaysPerWeek: studyDays,
    createdAt: Date.now(),
    isCreated,
    items: items.slice(0, 3), // Strictly 3 missions
  };
}

/**
 * Smart Rollover Engine:
 * When advancing to a new day:
 * - Incomplete missions (completed === false) CARRY OVER to today.
 * - Completed missions (completed === true) are REPLACED with fresh tasks for the new day.
 * - Exactly 3 active missions are preserved.
 */
export function applyDailyMissionRollover(
  previousMission: PersistedDailyMission,
  todayDateStr: string,
  ctx: MissionEngineContext
): PersistedDailyMission {
  const freshTemplate = generateDailyMissionTemplate(ctx, todayDateStr, true);
  const previousItems = Array.isArray(previousMission.items) ? previousMission.items : [];
  const newItems: PersistedMissionItemTemplate[] = [];

  for (let slotIdx = 0; slotIdx < 3; slotIdx++) {
    const prevItem = previousItems[slotIdx];
    const freshItem = freshTemplate.items[slotIdx] || freshTemplate.items[0];

    if (prevItem && prevItem.completed) {
      // Completed mission is replaced with a fresh task for today
      newItems.push({
        ...freshItem,
        isCarriedOver: false,
        assignedDate: todayDateStr,
        completed: false,
      });
    } else if (prevItem) {
      // Uncompleted mission CARRIES OVER to today!
      newItems.push({
        ...prevItem,
        isCarriedOver: true,
      });
    } else {
      newItems.push({
        ...freshItem,
        isCarriedOver: false,
        assignedDate: todayDateStr,
        completed: false,
      });
    }
  }

  return {
    id: `mission_${ctx.userProfile.name || "user"}_${todayDateStr}`,
    userId: ctx.userProfile.name || "user",
    missionDate: todayDateStr,
    targetMinutes: previousMission.targetMinutes || freshTemplate.targetMinutes,
    studyDaysPerWeek: previousMission.studyDaysPerWeek || freshTemplate.studyDaysPerWeek,
    createdAt: Date.now(),
    isCreated: true,
    items: newItems.slice(0, 3),
  };
}

export function getDailyMissionStorageKey(userProfile: { email?: string; name?: string; examType: string; userId?: string }, dateStr: string): string {
  let uIdent = "";
  if (typeof window !== "undefined" && window.localStorage) {
    const uid = localStorage.getItem("medat_current_user_id");
    if (uid) uIdent = uid.replace(/[^a-zA-Z0-9]/g, "_");
  }
  if (!uIdent && (userProfile as any)?.userId) {
    uIdent = ((userProfile as any).userId as string).replace(/[^a-zA-Z0-9]/g, "_");
  }
  if (!uIdent && userProfile.email) {
    uIdent = userProfile.email.replace(/[^a-zA-Z0-9]/g, "_");
  }
  if (!uIdent) {
    uIdent = (userProfile.name || "user").replace(/[^a-zA-Z0-9]/g, "_");
  }
  return `medat_daily_mission_${uIdent}_${userProfile.examType}_${dateStr}`;
}

/**
 * Find the newest saved mission for this user from localStorage
 */
export function findLatestSavedMission(
  userProfile: { email?: string; name?: string; examType: string; userId?: string },
  todayDateStr: string
): { mission: PersistedDailyMission; isFromEarlierDay: boolean } | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  try {
    let uIdent = "";
    const uid = localStorage.getItem("medat_current_user_id") || (userProfile as any)?.userId;
    if (uid) uIdent = uid.replace(/[^a-zA-Z0-9]/g, "_");
    if (!uIdent && userProfile.email) {
      uIdent = userProfile.email.replace(/[^a-zA-Z0-9]/g, "_");
    }
    if (!uIdent) {
      uIdent = (userProfile.name || "user").replace(/[^a-zA-Z0-9]/g, "_");
    }
    const prefix = `medat_daily_mission_${uIdent}_${userProfile.examType}_`;

    // 1. Direct check for today's canonical key
    const todayRaw = localStorage.getItem(`${prefix}${todayDateStr}`);
    if (todayRaw) {
      const parsed = JSON.parse(todayRaw);
      if (parsed && Array.isArray(parsed.items) && parsed.items.length === 3) {
        return { mission: parsed, isFromEarlierDay: false };
      }
    }

    // Fallback: check legacy email or name based key for today if uid is set, and migrate
    if (uid && userProfile.email) {
      const legacyIdent = userProfile.email.replace(/[^a-zA-Z0-9]/g, "_");
      const legacyKey = `medat_daily_mission_${legacyIdent}_${userProfile.examType}_${todayDateStr}`;
      const legacyRaw = localStorage.getItem(legacyKey);
      if (legacyRaw) {
        try {
          const parsed = JSON.parse(legacyRaw);
          if (parsed && Array.isArray(parsed.items) && parsed.items.length === 3) {
            localStorage.setItem(`${prefix}${todayDateStr}`, legacyRaw);
            return { mission: parsed, isFromEarlierDay: false };
          }
        } catch {}
      }
    }

    // 2. Scan for earlier saved missions
    const candidates: { date: string; mission: PersistedDailyMission }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) {
        const dStr = k.substring(prefix.length);
        const raw = localStorage.getItem(k);
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.items) && parsed.items.length > 0) {
              candidates.push({ date: dStr, mission: parsed });
            }
          } catch {}
        }
      }
    }

    if (candidates.length > 0) {
      candidates.sort((a, b) => b.date.localeCompare(a.date));
      const newest = candidates[0];
      return {
        mission: newest.mission,
        isFromEarlierDay: newest.date < todayDateStr,
      };
    }
  } catch {}
  return null;
}

/**
 * Load or generate the daily mission blueprint, and evaluate its live progress.
 * Supports smart rollover across days and clean State A (planning/preview) when not yet created.
 */
export function getOrGenerateDailyMission(ctx: MissionEngineContext): EvaluatedDailyMission {
  const { userProfile, setAttempts, attemptHistory, questions, answers, wrong, todayDateStr } = ctx;
  const dateStr = todayDateStr || getLocalDateString();
  const storageKey = getDailyMissionStorageKey(userProfile, dateStr);

  let missionTemplate: PersistedDailyMission | null = null;
  let isCreatedToday = false;

  // 1. Check for saved mission in localStorage
  const found = findLatestSavedMission(userProfile, dateStr);

  if (found) {
    if (!found.isFromEarlierDay && found.mission.items.length === 3) {
      missionTemplate = found.mission;
      isCreatedToday = found.mission.isCreated !== false;
    } else if (found.isFromEarlierDay) {
      // Smart Rollover: carry over incomplete, replace completed!
      missionTemplate = applyDailyMissionRollover(found.mission, dateStr, ctx);
      isCreatedToday = true;
      if (typeof window !== "undefined" && window.localStorage) {
        try {
          localStorage.setItem(storageKey, JSON.stringify(missionTemplate));
          saveDailyMissionToSupabase(missionTemplate).catch(() => {});
        } catch {}
      }
    }
  }

  // 2. If no persisted mission exists at all, generate preview template in State A (Planning mode)
  // CRITICAL: Do NOT auto-save to Supabase! Cloud write occurs only when the student clicks "Tagesmission erstellen".
  if (!missionTemplate) {
    missionTemplate = generateDailyMissionTemplate(ctx, dateStr, false);
    isCreatedToday = false;
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(missionTemplate));
      } catch {}
    }
  }

  // 3. Evaluate live completion status against activity strictly on today's calendar date (Europe/Vienna)
  // Sets completed today
  const anySetCompletedToday = Object.values(setAttempts).some((attempts) =>
    attempts.some((a) => isSameDayVienna(a.completedAt, dateStr))
  );

  // Questions answered today by section (strictly on dateStr)
  let bmsAnsweredToday = 0;
  let kffAnsweredToday = 0;
  let tvAnsweredToday = 0;
  let sekAnsweredToday = 0;
  let totalAnsweredToday = 0;
  let correctAnswersToday = 0;

  Object.entries(attemptHistory).forEach(([qId, att]) => {
    if (isSameDayVienna(att.timestamp, dateStr)) {
      totalAnsweredToday++;
      if (att.correct) correctAnswersToday++;
      const baseId = qId.replace(/-s\d+-\d+$/, "");
      const q = questions.find((item) => item.id === qId || item.id === baseId);
      const section = att.section || q?.section || getSectionFromQuestionId(qId, questions);
      if (section === "BMS") bmsAnsweredToday++;
      else if (section === "KFF" || section === "MF") kffAnsweredToday++;
      else if (section === "TV") tvAnsweredToday++;
      else if (section === "SEK") sekAnsweredToday++;
    }
  });

  let hasNewlyCompletedItem = false;

  // Evaluate each item in the blueprint
  const evaluatedItems: EvaluatedDailyMissionItem[] = missionTemplate.items.map((item) => {
    let isDone = false;
    let currentCount = 0;

    if (item.category === "set") {
      // Must be a set for THIS SPECIFIC chapter completed TODAY (on dateStr)
      const chapterSetCompletedToday = Object.entries(setAttempts).some(([setId, atts]) =>
        atts.some((a) => {
          const matchesChapter = a.chapterId === item.referenceId || setId.startsWith(item.referenceId);
          if (!matchesChapter) return false;
          return isSameDayVienna(a.completedAt, dateStr);
        })
      );
      isDone = chapterSetCompletedToday;
      currentCount = isDone ? 1 : 0;
    } else if (item.category === "bms") {
      currentCount = bmsAnsweredToday;
      isDone = bmsAnsweredToday >= item.targetCount;
    } else if (item.category === "kff") {
      currentCount = kffAnsweredToday;
      isDone = kffAnsweredToday >= item.targetCount;
    } else if (item.category === "tv") {
      const tvSimsCompleted = Object.entries(setAttempts).reduce((count, [sId, atts]) => {
        const isTv = sId.startsWith("tv-") || atts.some((a) => a.chapterId === "tv-scipass");
        if (!isTv) return count;
        return atts.some((a) => isSameDayVienna(a.completedAt, dateStr)) ? count + 1 : count;
      }, 0);
      isDone = tvSimsCompleted >= item.targetCount || tvAnsweredToday >= item.targetCount * 10;
      currentCount = isDone ? item.targetCount : Math.min(item.targetCount, Math.max(tvSimsCompleted, tvAnsweredToday >= 6 ? 1 : 0));
    } else if (item.category === "sek") {
      currentCount = sekAnsweredToday;
      isDone = sekAnsweredToday >= item.targetCount;
    } else if (item.category === "mistakes") {
      const allTimeAnswered = Object.keys(answers).length;
      if (allTimeAnswered === 0 || wrong.size === 0) {
        isDone = false;
        currentCount = 0;
      } else {
        currentCount = Math.min(correctAnswersToday, item.targetCount);
        isDone = correctAnswersToday >= item.targetCount;
      }
    }

    // Preserve previously recorded completion ONLY if backed by genuine completion on dateStr
    if (!isDone && item.completed) {
      if (item.completedAt && isSameDayVienna(item.completedAt, dateStr)) {
        isDone = true;
        currentCount = item.targetCount;
      }
    }

    if (isDone && !item.completed) {
      item.completed = true;
      item.completedAt = Date.now();
      hasNewlyCompletedItem = true;
    } else if (!isDone && item.completed) {
      item.completed = false;
      item.completedAt = undefined;
    }

    return {
      ...item,
      currentCount: Math.min(currentCount, item.targetCount),
      completed: isDone,
    };
  });

  // If any item changed state (completed or reset), persist back immediately (only for active/created missions)
  const hasStateChanged = evaluatedItems.some((e, idx) => {
    const orig = missionTemplate!.items[idx];
    return orig && orig.completed !== e.completed;
  });

  if (isCreatedToday && (hasNewlyCompletedItem || hasStateChanged) && typeof window !== "undefined" && window.localStorage) {
    try {
      const updatedTemplate: PersistedDailyMission = {
        ...missionTemplate,
        items: evaluatedItems.map((e) => ({
          ...e,
          completed: e.completed,
          completedAt: e.completed ? (e.completedAt || Date.now()) : undefined,
        })),
      };
      localStorage.setItem(storageKey, JSON.stringify(updatedTemplate));
      saveDailyMissionToSupabase(updatedTemplate).catch(() => {});
    } catch {}
  }

  const completedTasks = evaluatedItems.filter((i) => i.completed).length;
  const totalTasks = evaluatedItems.length;
  const completionPercent = Math.round((completedTasks / Math.max(totalTasks, 1)) * 100);

  return {
    isCreatedToday,
    missionDate: dateStr,
    targetMinutes: missionTemplate.targetMinutes,
    studyDaysPerWeek: missionTemplate.studyDaysPerWeek,
    completedTasks,
    totalTasks,
    completionPercent,
    items: evaluatedItems,
  };
}

/**
 * Explicitly plan and create today's mission.
 * Saves to localStorage with isCreated: true and syncs to Supabase.
 */
export function createDailyMission(
  ctx: MissionEngineContext,
  chosenMinutes?: number
): EvaluatedDailyMission {
  const { userProfile, todayDateStr } = ctx;
  const dateStr = todayDateStr || getLocalDateString();
  const storageKey = getDailyMissionStorageKey(userProfile, dateStr);

  const effectiveCtx: MissionEngineContext = chosenMinutes
    ? {
        ...ctx,
        userProfile: {
          ...ctx.userProfile,
          dailyMinutes: chosenMinutes,
        },
      }
    : ctx;

  const missionTemplate = generateDailyMissionTemplate(effectiveCtx, dateStr, true);

  if (typeof window !== "undefined" && window.localStorage) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(missionTemplate));
    } catch (e) {
      console.warn("Could not save daily mission:", e);
    }
  }

  saveDailyMissionToSupabase(missionTemplate).catch((err) => {
    console.warn("Async Supabase mission save failed:", err);
  });

  return getOrGenerateDailyMission(effectiveCtx);
}

/**
 * Reset today's mission back to State A (Planning mode)
 */
export function resetDailyMission(ctx: MissionEngineContext): void {
  const { userProfile, todayDateStr } = ctx;
  const dateStr = todayDateStr || getLocalDateString();
  const storageKey = getDailyMissionStorageKey(userProfile, dateStr);

  if (typeof window !== "undefined" && window.localStorage) {
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {
      console.warn("Could not remove daily mission:", e);
    }
  }

  saveDailyMissionToSupabase({
    id: `mission_${userProfile.name || "user"}_${dateStr}`,
    userId: userProfile.name || "user",
    missionDate: dateStr,
    targetMinutes: userProfile.dailyMinutes || 60,
    studyDaysPerWeek: userProfile.studyDaysPerWeek || 5,
    createdAt: Date.now(),
    isCreated: false,
    items: [],
  }).catch((err) => {
    console.warn("Async Supabase mission reset failed:", err);
  });
}

export interface WeeklyMissionConsistency {
  weeklyCompletedDays: number;
  weeklyTargetDays: number;
  weeklyProgressPercent: number;
  weekDaysActivity: {
    dayLabel: string;
    dayNumber: number;
    isStudyDay: boolean;
    isCompleted: boolean;
    isToday: boolean;
  }[];
}

/**
 * Computes weekly study consistency and calendar day completion
 * strictly derived from genuine activity dates, set attempts, and question history.
 */
export function computeWeeklyMissionConsistency(
  activityDates: string[] = [],
  studyDaysPerWeek: number = 5,
  attemptHistory: Record<string, { timestamp: number }> = {},
  setAttempts: Record<string, { completedAt: number }[]> = {}
): WeeklyMissionConsistency {
  const todayViennaStr = getTodayViennaString();
  const [y, m, d] = todayViennaStr.split("-").map(Number);
  
  // Use midday UTC to be strictly immune to local browser timezone offsets
  const viennaMidday = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  const dayOfWeek = (viennaMidday.getUTCDay() + 6) % 7; // 0: Mo, 1: Di, ..., 6: So
  const mondayMidday = new Date(viennaMidday.getTime() - dayOfWeek * 86400000);

  const studyDayIndices = new Set(
    studyDaysPerWeek === 3 ? [0, 2, 4] :
    studyDaysPerWeek === 6 ? [0, 1, 2, 3, 4, 5] :
    studyDaysPerWeek === 7 ? [0, 1, 2, 3, 4, 5, 6] :
    [0, 1, 2, 3, 4] // default 5: Mo..Fr
  );

  const weekLabels = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  
  // Canonical Vienna date string for each day of the current week (Mo..So)
  const weekDateStrings: string[] = [];
  for (let i = 0; i < 7; i++) {
    const curDate = new Date(mondayMidday.getTime() + i * 86400000);
    weekDateStrings.push(getViennaDateString(curDate));
  }
  const thisWeekDateSet = new Set(weekDateStrings);
  // Check if today has genuine activity (attempts or set completions today)
  const hasActivityToday =
    Object.values(attemptHistory).some(
      (att) => att && typeof att.timestamp === "number" && isSameDayVienna(att.timestamp, todayViennaStr)
    ) ||
    Object.values(setAttempts)
      .flat()
      .some(
        (att) => att && typeof att.completedAt === "number" && isSameDayVienna(att.completedAt, todayViennaStr)
      );

  const thisWeekActiveDates = new Set<string>();

  // Add recorded activityDates from this week (past dates are kept; today strictly requires genuine questions/sets)
  activityDates.forEach((dateStr) => {
    if (thisWeekDateSet.has(dateStr)) {
      if (dateStr === todayViennaStr) {
        if (hasActivityToday) {
          thisWeekActiveDates.add(dateStr);
        }
      } else {
        thisWeekActiveDates.add(dateStr);
      }
    }
  });

  // Check attempt timestamps
  Object.values(attemptHistory).forEach((att) => {
    if (att && typeof att.timestamp === "number") {
      const dateStr = getViennaDateString(att.timestamp);
      if (thisWeekDateSet.has(dateStr)) {
        thisWeekActiveDates.add(dateStr);
      }
    }
  });

  // Check set attempt timestamps
  Object.values(setAttempts).flat().forEach((att) => {
    if (att && typeof att.completedAt === "number") {
      const dateStr = getViennaDateString(att.completedAt);
      if (thisWeekDateSet.has(dateStr)) {
        thisWeekActiveDates.add(dateStr);
      }
    }
  });

  const weekDaysActivity = weekLabels.map((dayLabel, idx) => {
    const dateStr = weekDateStrings[idx];
    const dayDate = new Date(mondayMidday.getTime() + idx * 86400000);
    const isCompleted = thisWeekActiveDates.has(dateStr);
    const isToday = idx === dayOfWeek;
    const isStudyDay = studyDayIndices.has(idx);

    return {
      dayLabel,
      dayNumber: dayDate.getUTCDate(),
      isStudyDay,
      isCompleted,
      isToday,
    };
  });

  const weeklyCompletedDays = thisWeekActiveDates.size;
  const weeklyTargetDays = Math.max(1, studyDaysPerWeek);
  const weeklyProgressPercent = Math.min(100, Math.round((weeklyCompletedDays / weeklyTargetDays) * 100));

  return {
    weeklyCompletedDays,
    weeklyTargetDays,
    weeklyProgressPercent,
    weekDaysActivity,
  };
}
