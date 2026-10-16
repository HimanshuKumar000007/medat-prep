/**
 * useDashboardData.ts
 * Centralized Single Source of Truth for the MedAT-H Dashboard Homepage.
 *
 * Aggregates real user profile, practice attempts, question sets, mock exam results,
 * streaks, and activity history into a clean, unified, production-grade model.
 *
 * ABSOLUTE RULE: Zero fake data. Every metric is strictly calculated from genuine
 * application persistence (Local state + Supabase database sync).
 */

import { useMemo, useCallback, useState } from "react";
import { usePractice } from "./practiceContext";
import { useMockExamData, type MockAttemptRecord } from "../data/generalprobe";
import { CHAPTERS, SUBJECTS, getSectionFromQuestionId, type Chapter } from "./practiceData";
import {
  calculateMedATReadiness,
  getNextMedATDate,
  getSectionsForExam,
  UNIVERSITIES,
  type SectionCode,
} from "../content/medat/config";
import {
  getOrGenerateDailyMission,
  createDailyMission as createDailyMissionEngine,
  resetDailyMission as resetDailyMissionEngine,
  computeWeeklyMissionConsistency,
} from "./dailyMissionEngine";
import { getViennaDateString } from "../lib/dateService";

export interface DashboardTaskItem {
  id: string;
  label: string;
  subLabel?: string;
  estimatedMinutes?: number;
  category: "set" | "lesson" | "bms" | "kff" | "mistakes" | "mock" | "tv" | "sek";
  currentCount: number;
  targetCount: number;
  completed: boolean;
  isCarriedOver?: boolean;
  navTarget: {
    screen: "practice" | "mocks" | "plan";
    seed?: Record<string, any>;
  };
}

export interface SectionPerformanceItem {
  code: SectionCode;
  title: string;
  weight: number;
  accuracy: number | null; // null if 0 attempts
  answeredCount: number;
  totalAvailable: number;
  completedChapters: number;
  totalChapters: number;
  trendText: string | null; // e.g. "+4%" or "-2%" or null
  coveragePercent: number;
}

export interface WeakAreaItem {
  id: string;
  chapterId: string;
  section: SectionCode;
  title: string;
  accuracy: number;
  mistakesCount: number;
  answeredCount: number;
}

export interface RecentActivityItem {
  id: string;
  timestamp: number;
  timeLabel: string; // "Heute", "Gestern", "Vor 2 Tagen"
  title: string;
  subtitle?: string;
  section?: string; // "BMS" | "KFF" | "TV" | "SEK" | "MF" | "MedAT"
  setName?: string; // e.g. "Simulation 1", "Set 2"
  correctCount?: number;
  totalQuestions?: number;
  scoreDisplay: string; // e.g. "18 / 20 richtig"
  percentage: number;
  type: "set" | "mock" | "quick";
}

export interface DashboardData {
  user: {
    name: string;
    examType: "MEDAT-H" | "MEDAT-Z";
    targetYear: number;
    targetUniversityName: string;
    targetUniversityShort: string;
    preparationStageLabel: string;
    dailyStudyTimeLabel: string;
    focusAreasText: string;
    currentStreak: number;
    daysRemaining: number;
    todayFormatted: string;
  };

  readiness: {
    score: number | null; // e.g. 68 or null
    hasEnoughData: boolean;
    confidence: "low" | "medium" | "high";
    label: string;
    breakdown: {
      bms: number | null;
      tv: number | null;
      kff: number | null;
      sek: number | null;
    };
    trend: number | null; // delta
    trendText: string;
  };

  sections: Record<string, SectionPerformanceItem>;
  activeSectionsList: SectionPerformanceItem[];

  today: {
    isCreatedToday: boolean;
    focusTitle: string;
    focusSubtitle: string;
    focusSetTitle: string;
    focusDescription: string;
    focusFocusArea: string;
    focusChapterId: string;
    focusNavTarget?: {
      screen: "practice" | "mocks" | "plan";
      seed?: Record<string, any>;
    };
    focusButtonText?: string;
    estimatedMinutes: number;
    studyDaysPerWeek: number;
    completedTasks: number;
    totalTasks: number;
    completionPercent: number;
    items: DashboardTaskItem[];
    createDailyMission: (minutes?: number) => void;
    resetDailyMission: () => void;
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
  };

  generalprobe: {
    attempted: boolean;
    totalCompleted: number;
    averageScore: number | null;
    bestScore: number | null;
    latestScore: number | null;
    lastResult?: {
      id: string;
      score: number;
      date: string;
      timestamp: number;
      bmsPercent: number;
      tvPercent: number;
      kffPercent: number;
      sekPercent: number;
    };
    nextRecommendation: string;
  };

  nextAction: {
    section: string;
    topic: string;
    chapterId: string;
    currentPerformance: number | null;
    reason: string;
    recommendationText: string;
  };

  weakAreas: WeakAreaItem[];

  learningProgress: {
    hasStarted: boolean;
    stepTitle: string;
    chapterTitle: string;
    chapterId: string;
    activeSetTitle: string;
    activeSetOrder: number;
    activeSetQuestionsCount: number;
    activeSetMode: string;
    activeSetSubtitle?: string;
    completedSetsCount: number;
    totalSetsCount: number;
    answeredCount: number;
    totalCount: number;
    progressPercent: number;
    masteryScore?: number;
  };

  recentActivity: RecentActivityItem[];

  trend: {
    current: number | null;
    previous: number | null;
    delta: number | null;
    hasEnoughData: boolean;
    labelText: string;
  };

  isLoading: boolean;
  refresh: () => void;
}

/**
 * Format relative date label cleanly in German
 */
function getRelativeDateLabel(timestamp: number): string {
  const now = new Date();
  const date = new Date(timestamp);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const diffDays = Math.round((today - target) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Heute";
  if (diffDays === 1) return "Gestern";
  if (diffDays === 2) return "Vor 2 Tagen";
  if (diffDays > 2 && diffDays <= 7) return `Vor ${diffDays} Tagen`;
  return date.toLocaleDateString("de-AT", { day: "numeric", month: "short" });
}

export function useDashboardData(): DashboardData {
  const {
    userProfile,
    updateUserProfile,
    currentStreak,
    answers,
    attemptHistory,
    setAttempts,
    questions,
    wrong,
    getChapterStats,
    getSectionStats,
    getMedATReadiness,
    getWeakAreas,
    getActiveLearningUnit,
    getActiveSetForChapter,
    activityDates,
  } = usePractice();

  const [missionRevision, setMissionRevision] = useState(0);

  const { stats: mockStats, history: mockHistory, isLoading: isMockLoading, refresh: refreshMocks } =
    useMockExamData();

  // 1. User Meta & Schedule
  const nextExam = useMemo(
    () => getNextMedATDate(userProfile.targetYear),
    [userProfile.targetYear]
  );

  const uniMeta = useMemo(
    () => UNIVERSITIES[userProfile.targetUniversity] || UNIVERSITIES.undecided,
    [userProfile.targetUniversity]
  );

  const stageLabelMap: Record<string, string> = {
    just_starting: "Einstiegsphase",
    started_studying: "Basisaufbau",
    preparing_while: "Vertiefungsphase",
    doing_mocks: "Simulation & Feinschliff",
  };

  const timeLabelMap: Record<string, string> = {
    under_1h: "< 1 Std./Tag",
    "1_2h": "1–2 Std./Tag",
    "2_4h": "2–4 Std./Tag",
    "4h_plus": "4+ Std./Tag",
  };

  const todayDateFormatted = useMemo(() => {
    return new Date().toLocaleDateString("de-AT", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }, []);

  // 2. Section Performance Calculations (Strictly real data)
  const activeSectionMetas = useMemo(
    () => getSectionsForExam(userProfile.examType),
    [userProfile.examType]
  );

  const sectionsPerformance = useMemo(() => {
    const map: Record<string, SectionPerformanceItem> = {};
    const now = Date.now();
    const sevenDaysMs = 7 * 86400000;
    const fourteenDaysMs = 14 * 86400000;

    activeSectionMetas.forEach((sec) => {
      const stats = getSectionStats(sec.code);
      const weight = userProfile.examType === "MEDAT-Z" ? sec.weightMedATZ : sec.weightMedATH;

      // 7-day trend calculation for this section
      let trendText: string | null = null;
      const recentAttempts: boolean[] = [];
      const priorAttempts: boolean[] = [];

      Object.entries(attemptHistory).forEach(([qId, att]) => {
        const baseId = qId.replace(/-s\d+-\d+$/, "");
        const attSec = att.section || questions.find((item) => item.id === qId || item.id === baseId)?.section || getSectionFromQuestionId(qId, questions);
        if (attSec === sec.code) {
          const age = now - att.timestamp;
          if (age <= sevenDaysMs) {
            recentAttempts.push(att.correct);
          } else if (age <= fourteenDaysMs) {
            priorAttempts.push(att.correct);
          }
        }
      });

      if (recentAttempts.length >= 3 && priorAttempts.length >= 3) {
        const recentAcc =
          Math.round((recentAttempts.filter(Boolean).length / recentAttempts.length) * 100);
        const priorAcc =
          Math.round((priorAttempts.filter(Boolean).length / priorAttempts.length) * 100);
        const delta = recentAcc - priorAcc;
        if (delta > 0) trendText = `↑ +${delta}% letzte 7 Tage`;
        else if (delta < 0) trendText = `↓ ${delta}% letzte 7 Tage`;
        else trendText = `±0% letzte 7 Tage`;
      }

      map[sec.code] = {
        code: sec.code,
        title: sec.title,
        weight,
        accuracy: stats.answeredCount > 0 ? stats.accuracy : null,
        answeredCount: stats.answeredCount,
        totalAvailable: stats.totalQuestions,
        completedChapters: stats.completedChapters,
        totalChapters: stats.totalChapters,
        trendText,
        coveragePercent: stats.progressPct,
      };
    });

    return map;
  }, [activeSectionMetas, userProfile.examType, getSectionStats, attemptHistory, questions]);

  const activeSectionsList = useMemo(() => {
    return activeSectionMetas.map((m) => sectionsPerformance[m.code]).filter(Boolean);
  }, [activeSectionMetas, sectionsPerformance]);

  // 3. MedAT Readiness Calculation
  const readinessRaw = useMemo(() => {
    return getMedATReadiness ? getMedATReadiness() : { readinessIndex: null, hasEnoughData: false };
  }, [getMedATReadiness]);

  const readinessData = useMemo(() => {
    const bmsSec = sectionsPerformance.BMS;
    const tvSec = userProfile.examType === "MEDAT-Z" ? sectionsPerformance.MF : sectionsPerformance.TV;
    const kffSec = sectionsPerformance.KFF;
    const sekSec = sectionsPerformance.SEK;

    const sectionsWithData = [bmsSec, tvSec, kffSec, sekSec].filter(
      (s) => s && s.answeredCount >= 3
    );

    const hasEnough = readinessRaw.hasEnoughData && readinessRaw.readinessIndex !== null;

    let confidence: "low" | "medium" | "high" = "low";
    if (mockStats.completedFullMocks.length > 0) {
      confidence = "high";
    } else if (sectionsWithData.length >= 4 && Object.keys(answers).length >= 50) {
      confidence = "high";
    } else if (sectionsWithData.length >= 3) {
      confidence = "medium";
    }

    let label = "Noch nicht genügend Daten";
    if (hasEnough) {
      const idx = readinessRaw.readinessIndex!;
      if (idx >= 78) label = "Zielzone (MedAT-Zulassungszone)";
      else if (idx >= 65) label = "Aufbauzone";
      else label = "Basiszone";
    }

    return {
      score: hasEnough ? readinessRaw.readinessIndex : null,
      hasEnoughData: hasEnough,
      confidence,
      label,
      breakdown: {
        bms: bmsSec && bmsSec.answeredCount >= 3 ? bmsSec.accuracy : null,
        tv: tvSec && tvSec.answeredCount >= 3 ? tvSec.accuracy : null,
        kff: kffSec && kffSec.answeredCount >= 3 ? kffSec.accuracy : null,
        sek: sekSec && sekSec.answeredCount >= 3 ? sekSec.accuracy : null,
      },
      trend: mockStats.improvement,
      trendText: mockStats.improvementText,
    };
  }, [readinessRaw, sectionsPerformance, userProfile.examType, mockStats, answers]);

  // 4. Learning Unit & Progress
  const activeUnit = useMemo(() => {
    try {
      return getActiveLearningUnit();
    } catch {
      return null;
    }
  }, [getActiveLearningUnit]);

  const learningProgress = useMemo(() => {
    if (!activeUnit) {
      const focusAreas = userProfile.focusAreas || ["BMS"];
      const isMedATZ = userProfile.examType === "MEDAT-Z";
      const wantBMS = focusAreas.includes("BMS");
      const wantSEK = !isMedATZ && focusAreas.includes("SEK");
      const wantTV = !isMedATZ && focusAreas.includes("TV");
      const wantKFF = focusAreas.includes("KFF") || (isMedATZ && focusAreas.includes("MF"));

      const defChapterId = wantBMS
        ? "bio-01-zelle"
        : wantSEK
        ? "sek-rec-face"
        : wantTV
        ? "tv-scipass"
        : wantKFF
        ? (isMedATZ ? "mf-mirror-symm" : "kff-fig-l1")
        : "bio-01-zelle";

      const defTitle = wantBMS
        ? "Zellbiologie"
        : wantSEK
        ? "Emotionen erkennen (EE)"
        : wantTV
        ? "Textverständnis — Simulation"
        : wantKFF
        ? (isMedATZ ? "Formen spiegeln" : "Figuren zusammensetzen")
        : "Zellbiologie";

      const defSetTitle = wantSEK
        ? "Simulation 1 — Emotionen erkennen"
        : wantTV
        ? "Simulation 1 — Textverständnis"
        : "Set 1 — Grundlagen";

      return {
        hasStarted: false,
        stepTitle: "Schritt 1 — Einstieg",
        chapterTitle: defTitle,
        chapterId: defChapterId,
        activeSetTitle: defSetTitle,
        activeSetOrder: 1,
        activeSetQuestionsCount: 25,
        activeSetMode: "untimed",
        activeSetSubtitle: "Grundlagen-Check & Einstieg",
        completedSetsCount: 0,
        totalSetsCount: 5,
        answeredCount: 0,
        totalCount: 125,
        progressPercent: 0,
      };
    }

    const chStats = getChapterStats(activeUnit.chapterId);
    return {
      hasStarted: chStats.answeredCount > 0,
      stepTitle: activeUnit.stepTitle,
      chapterTitle: activeUnit.title,
      chapterId: activeUnit.chapterId,
      activeSetTitle: activeUnit.activeSet.title,
      activeSetOrder: activeUnit.activeSet.order,
      activeSetQuestionsCount: activeUnit.activeSet.questionCount,
      activeSetMode: activeUnit.activeSet.mode,
      activeSetSubtitle: activeUnit.activeSet.subtitle,
      completedSetsCount: chStats.completedSetsCount,
      totalSetsCount: chStats.totalSets || 5,
      answeredCount: chStats.answeredCount,
      totalCount: chStats.totalQuestions,
      progressPercent: chStats.progressPct,
      masteryScore: chStats.masteryScore,
    };
  }, [activeUnit, getChapterStats, userProfile.focusAreas, userProfile.examType]);

  // 5. Weak Areas Detection (Strict minimum attempt threshold & ranking)
  const weakAreasList = useMemo((): WeakAreaItem[] => {
    const rawWeak = getWeakAreas();
    return rawWeak.map(({ chapter, stats }) => ({
      id: chapter.id,
      chapterId: chapter.id,
      section: chapter.section,
      title: chapter.title,
      accuracy: stats.accuracy,
      mistakesCount: stats.mistakesCount,
      answeredCount: stats.answeredCount,
    }));
  }, [getWeakAreas]);

  // 6. Next Best Action (DEIN NÄCHSTER SCHRITT)
  const nextAction = useMemo(() => {
    if (weakAreasList.length > 0) {
      const weakest = weakAreasList[0];
      const recTasks = weakest.section === "KFF" ? 10 : 15;
      return {
        section: weakest.section,
        topic: weakest.title,
        chapterId: weakest.chapterId,
        currentPerformance: weakest.accuracy,
        reason: "Hier liegt aktuell dein größtes Verbesserungspotenzial (größte Leistungsreserve).",
        recommendationText: `→ ${recTasks} weitere Aufgaben empfohlen`,
      };
    }

    if (activeUnit) {
      const chStats = getChapterStats(activeUnit.chapterId);
      const recTasks = activeUnit.activeSet.questionCount || 15;
      return {
        section: activeUnit.stepTitle.includes("—")
          ? activeUnit.stepTitle.split("—")[1].trim()
          : activeUnit.stepTitle.includes("·")
          ? activeUnit.stepTitle.split("·")[0].trim()
          : "LERNPLAN",
        topic: activeUnit.title,
        chapterId: activeUnit.chapterId,
        currentPerformance: chStats.answeredCount > 0 ? chStats.accuracy : null,
        reason:
          chStats.answeredCount > 0
            ? "Wichtiges Kernmodul für deinen kontinuierlichen Fortschritt."
            : "Nächste reguläre Trainingseinheit in deinem strukturierten Lernplan.",
        recommendationText: `→ ${recTasks} Aufgaben empfohlen`,
      };
    }

    const focusAreas = userProfile.focusAreas || ["BMS"];
    const isMedATZ = userProfile.examType === "MEDAT-Z";
    const wantBMS = focusAreas.includes("BMS");
    const wantSEK = !isMedATZ && focusAreas.includes("SEK");
    const wantTV = !isMedATZ && focusAreas.includes("TV");
    const wantKFF = focusAreas.includes("KFF") || (isMedATZ && focusAreas.includes("MF"));

    const defaultChapterId = wantBMS
      ? "bio-01-zelle"
      : wantSEK
      ? "sek-rec-face"
      : wantTV
      ? "tv-scipass"
      : wantKFF
      ? (isMedATZ ? "mf-mirror-symm" : "kff-fig-l1")
      : "bio-01-zelle";

    const ch = CHAPTERS[defaultChapterId];
    const chStats = getChapterStats(defaultChapterId);
    return {
      section: ch?.section || (wantSEK ? "SEK" : wantTV ? "TV" : wantKFF ? (isMedATZ ? "MF" : "KFF") : "BMS"),
      topic: ch?.title || (wantSEK ? "Emotionen erkennen (EE)" : "Zellbiologie"),
      chapterId: defaultChapterId,
      currentPerformance: chStats.answeredCount > 0 ? chStats.accuracy : null,
      reason: wantSEK
        ? "Beginne mit dem Erkennen von Emotionen im sozial-emotionalen Teil."
        : wantTV
        ? "Beginne mit dem Textverständnis unter Prüfungsbedingungen."
        : wantKFF
        ? "Beginne mit den Mustern der kognitiven Fertigkeiten."
        : "Beginne mit den biologischen Grundlagen des BMS (40% Prüfungsrelevanz).",
      recommendationText: "→ 15 Aufgaben empfohlen",
    };
  }, [weakAreasList, activeUnit, getChapterStats, userProfile.focusAreas, userProfile.examType]);

  const handleCreateDailyMission = useCallback(
    (minutes?: number) => {
      const chosenMins = minutes || userProfile.dailyMinutes || 60;
      if (minutes && minutes !== userProfile.dailyMinutes) {
        updateUserProfile({ dailyMinutes: chosenMins });
      }
      createDailyMissionEngine(
        {
          userProfile: { ...userProfile, dailyMinutes: chosenMins },
          activeUnit,
          attemptHistory,
          setAttempts,
          questions,
          wrong,
          answers,
          weakAreas: getWeakAreas(),
          mockHistory,
        },
        chosenMins
      );
      setMissionRevision((r) => r + 1);
    },
    [
      userProfile,
      updateUserProfile,
      activeUnit,
      attemptHistory,
      setAttempts,
      questions,
      wrong,
      answers,
      getWeakAreas,
      mockHistory,
    ]
  );

  const handleResetDailyMission = useCallback(() => {
    resetDailyMissionEngine({
      userProfile,
      activeUnit,
      attemptHistory,
      setAttempts,
      questions,
      wrong,
      answers,
      weakAreas: getWeakAreas(),
      mockHistory,
    });
    setMissionRevision((r) => r + 1);
  }, [
    userProfile,
    activeUnit,
    attemptHistory,
    setAttempts,
    questions,
    wrong,
    answers,
    getWeakAreas,
    mockHistory,
  ]);

  // 7. Today's Focus & Today's Mission Checklist
  const todayMission = useMemo(() => {
    const evaluatedMission = getOrGenerateDailyMission({
      userProfile,
      activeUnit,
      attemptHistory,
      setAttempts,
      questions,
      wrong,
      answers,
      weakAreas: getWeakAreas(),
      mockHistory,
    });

    const weeklyConsistency = computeWeeklyMissionConsistency(
      activityDates,
      userProfile.studyDaysPerWeek || 5,
      attemptHistory,
      setAttempts
    );

    const missionItems: DashboardTaskItem[] = evaluatedMission.items.map((i) => ({
      id: i.id,
      label: i.title,
      subLabel: i.subLabel,
      estimatedMinutes: i.estimatedMinutes,
      category: i.category,
      currentCount: i.currentCount,
      targetCount: i.targetCount,
      completed: i.completed,
      isCarriedOver: i.isCarriedOver,
      navTarget: i.navTarget,
    }));

    // Identify current active (first incomplete) mission task
    const activeTask = evaluatedMission.items.find((i) => !i.completed) || evaluatedMission.items[0];
    const allCompleted = evaluatedMission.items.length > 0 && evaluatedMission.items.every((i) => i.completed);

    let focusTitle = "";
    let focusSubtitle = "";
    let focusSetTitle = "";
    let focusDescription = "";
    let focusFocusArea = "";
    let focusChapterId = "";
    let focusNavTarget: { screen: "practice" | "mocks" | "plan"; seed?: Record<string, any> } | undefined = undefined;
    let focusButtonText = "Set starten";

    if (allCompleted) {
      focusSubtitle = "TAGESZIEL ERREICHT";
      focusTitle = "Tagesmission abgeschlossen!";
      focusSetTitle = `${evaluatedMission.completedTasks} von ${evaluatedMission.totalTasks} Aufgaben erledigt 🎉`;
      focusDescription = "Großartige Leistung! Alle heutigen Lerneinheiten sind erfolgreich absolviert. Vertiefe dein Wissen oder starte eine Simulation.";
      focusFocusArea = "Tagesziel 100% gemeistert";
      focusChapterId = activeUnit?.chapterId || "bio-01-zelle";
      focusNavTarget = { screen: "practice" };
      focusButtonText = "Weiter üben";
    } else if (activeTask) {
      focusNavTarget = activeTask.navTarget;

      if (activeTask.category === "set") {
        focusChapterId = activeTask.referenceId || "bio-01-zelle";
        const ch = CHAPTERS[focusChapterId] || CHAPTERS["bio-01-zelle"];
        const sub = SUBJECTS.find((s) => s.id === ch?.subjectId);
        const activeSet = getActiveSetForChapter ? getActiveSetForChapter(focusChapterId) : null;
        focusTitle = ch?.title || activeTask.title;
        focusSubtitle = ch ? `${ch.section} · ${sub?.title || ch.title}` : "BMS · Biologie";
        focusSetTitle = activeSet ? activeSet.title : (activeTask.subLabel || "Set 1 — Grundlagen");
        focusDescription = activeSet?.description || "Wichtige physiologische Grundlagen für den BMS-Teil.";
        focusFocusArea = activeSet?.focus || "Konzeptuelles Verständnis & Definitionen";
        const hasAttempts = activeSet ? ((setAttempts[activeSet.id]?.length || 0) > 0) : false;
        focusButtonText = hasAttempts ? "Set fortsetzen" : `Set ${activeSet?.order || 1} starten`;
      } else if (activeTask.category === "kff") {
        focusChapterId = activeTask.referenceId === "kff" ? (userProfile.examType === "MEDAT-Z" ? "mf-mirror-symm" : "kff-fig-l1") : activeTask.referenceId;
        const ch = CHAPTERS[focusChapterId];
        focusTitle = ch?.title || activeTask.title;
        focusSubtitle = userProfile.examType === "MEDAT-Z" ? "MF · MANUELLE FERTIGKEITEN" : "KFF · KOGNITIVE FERTIGKEITEN";
        focusSetTitle = activeTask.subLabel || "Mustererkennung & Logik";
        focusDescription = "Löse kognitive Fertigkeiten unter Prüfungsbedingungen zur Festigung deiner Lösungsstrategie.";
        focusFocusArea = "Lösungsroutinen & Zeiteinteilung";
        focusButtonText = userProfile.examType === "MEDAT-Z" ? "MF trainieren" : "KFF trainieren";
      } else if (activeTask.category === "bms") {
        const isBmsRef = activeTask.referenceId && CHAPTERS[activeTask.referenceId]?.section === "BMS";
        focusChapterId = isBmsRef ? activeTask.referenceId : "bio-01-zelle";
        focusTitle = activeTask.title;
        focusSubtitle = "BMS · BASISKENNTNISSE MEDIZINSTUDIUM";
        focusSetTitle = activeTask.subLabel || "Biologie & Chemie Festigung";
        focusDescription = "Vertiefe deine biologischen und chemischen Grundlagen mit gezielten MedAT-Trainingsfragen.";
        focusFocusArea = "Theoriewissen & Faktenabgleich";
        focusButtonText = "BMS trainieren";
      } else if (activeTask.category === "tv") {
        focusChapterId = "tv-scipass";
        const ch = CHAPTERS["tv-scipass"];
        const activeSet = getActiveSetForChapter ? getActiveSetForChapter("tv-scipass") : null;
        focusTitle = ch?.title || "Textverständnis";
        focusSubtitle = "TV · TEXTVERSTÄNDNIS (TV) [NUR MEDAT-H]";
        focusSetTitle = activeSet ? activeSet.title : "Simulation 1 — Textverständnis";
        focusDescription = activeSet?.description || "Wissenschaftliche Texte strukturiert erfassen und Inferenzfragen beantworten.";
        focusFocusArea = activeSet?.focus || "Wirkungsgefüge & Hypothesen";
        const hasAttempts = activeSet ? ((setAttempts[activeSet.id]?.length || 0) > 0) : false;
        focusButtonText = hasAttempts ? "Simulation fortsetzen" : `Simulation ${activeSet?.order || 1} starten`;
      } else if (activeTask.category === "sek") {
        focusChapterId = "sek-rec-face";
        focusTitle = activeTask.title;
        focusSubtitle = "SEK · SOZIALE KOMPETENZEN";
        focusSetTitle = activeTask.subLabel || "Simulation — Emotionen erkennen";
        focusDescription = "MedAT-orientierte Simulationen zur Einschätzung von Emotionen und sozialem Entscheiden.";
        focusFocusArea = "Situative Wahrscheinlichkeitsanalyse & Ambivalenz";
        focusButtonText = "SEK trainieren";
      } else {
        focusChapterId = activeUnit?.chapterId || "bio-01-zelle";
        focusTitle = activeTask.title;
        focusSubtitle = "MEDAT-TRAINING";
        focusSetTitle = activeTask.subLabel || "Fokus-Einheit";
        focusDescription = "Gezieltes Training zur Schließung von Wissenslücken.";
        focusFocusArea = "Fehleranalyse & Vertiefung";
        focusButtonText = "Training starten";
      }
    } else {
      const defaultChapterId = "bio-01-zelle";
      const ch = CHAPTERS[defaultChapterId];
      focusChapterId = defaultChapterId;
      focusTitle = ch?.title || "Zellbiologie";
      focusSubtitle = "BMS · Biologie";
      focusSetTitle = "Set 1 — Grundlagen";
      focusDescription = "Wichtige physiologische Grundlagen für den BMS-Teil.";
      focusFocusArea = "Konzeptuelles Verständnis & Definitionen";
      focusButtonText = "Set starten";
    }

    return {
      isCreatedToday: evaluatedMission.isCreatedToday,
      focusTitle,
      focusSubtitle,
      focusSetTitle,
      focusDescription,
      focusFocusArea,
      focusChapterId,
      focusNavTarget,
      focusButtonText,
      estimatedMinutes: evaluatedMission.targetMinutes,
      studyDaysPerWeek: evaluatedMission.studyDaysPerWeek,
      completedTasks: evaluatedMission.completedTasks,
      totalTasks: evaluatedMission.totalTasks,
      completionPercent: evaluatedMission.completionPercent,
      items: missionItems,
      createDailyMission: handleCreateDailyMission,
      resetDailyMission: handleResetDailyMission,
      weeklyCompletedDays: weeklyConsistency.weeklyCompletedDays,
      weeklyTargetDays: weeklyConsistency.weeklyTargetDays,
      weeklyProgressPercent: weeklyConsistency.weeklyProgressPercent,
      weekDaysActivity: weeklyConsistency.weekDaysActivity,
    };
  }, [
    activeUnit,
    nextAction,
    attemptHistory,
    questions,
    userProfile,
    setAttempts,
    wrong,
    answers,
    getWeakAreas,
    getActiveSetForChapter,
    mockHistory,
    activityDates,
    handleCreateDailyMission,
    handleResetDailyMission,
    missionRevision,
  ]);

  // 8. Generalprobe / Full Mock Status
  const generalprobe = useMemo(() => {
    const completed = mockStats.completedFullMocks;
    const attempted = completed.length > 0;
    const latestAttempt = attempted ? completed[0] : undefined;

    let nextRecommendation = "Vor Beginn der Vertiefungsphase empfohlen.";
    if (attempted) {
      if (completed.length === 1) {
        nextRecommendation = "Empfohlen nach Bearbeitung deiner größten KFF- und BMS-Schwachstellen.";
      } else {
        nextRecommendation = "2–3 Wochen vor dem Prüfungstag für den finalen Testtag-Feinschliff.";
      }
    }

    return {
      attempted,
      totalCompleted: completed.length,
      averageScore: mockStats.averageScore,
      bestScore: mockStats.bestScore,
      latestScore: mockStats.latestScore,
      lastResult: latestAttempt
        ? {
            id: latestAttempt.id,
            score: latestAttempt.weightedScore ?? latestAttempt.score,
            date: latestAttempt.date,
            timestamp: latestAttempt.timestamp,
            bmsPercent:
              latestAttempt.bmsPercent ??
              latestAttempt.sectionBreakdown?.BMS?.percentage ??
              0,
            tvPercent:
              latestAttempt.tvPercent ??
              latestAttempt.sectionBreakdown?.TV?.percentage ??
              (latestAttempt.sectionBreakdown?.MF?.percentage ?? 0),
            kffPercent:
              latestAttempt.kffPercent ??
              latestAttempt.sectionBreakdown?.KFF?.percentage ??
              0,
            sekPercent:
              latestAttempt.sekPercent ??
              latestAttempt.sectionBreakdown?.SEK?.percentage ??
              0,
          }
        : undefined,
      nextRecommendation,
    };
  }, [mockStats]);

  // 9. Recent Activity List (Real events only)
  const recentActivity = useMemo((): RecentActivityItem[] => {
    const items: RecentActivityItem[] = [];

    // Practice Sets
    if (setAttempts) {
      Object.values(setAttempts)
        .flat()
        .forEach((att) => {
          const ch = CHAPTERS[att.chapterId];
          const sub = SUBJECTS.find((s) => s.id === ch?.subjectId);
          const section = ch?.section || "KFF";

          // Extract set or simulation label
          const setNum = att.setId.includes("-set-") ? att.setId.split("-set-")[1] : "1";
          const isSim =
            att.chapterId.startsWith("kff-") ||
            att.chapterId.startsWith("tv-") ||
            att.chapterId.startsWith("sek-") ||
            att.chapterId.startsWith("mf-");
          const setLabel = isSim ? `Sim ${setNum}` : `Set ${setNum}`;
          const fullSetLabel = isSim ? `Simulation ${setNum}` : `Set ${setNum}`;

          // Clean, non-redundant subject & topic formatting
          let displayTitle = ch?.title || att.chapterId;
          if (sub && sub.title) {
            const subClean = sub.title.replace(/\s*\([A-Z]+\)$/, "").trim();
            const chClean = (ch?.title || "").replace(/\s*\([A-Z]+\)$/, "").trim();
            if (subClean.toLowerCase() === chClean.toLowerCase()) {
              displayTitle = subClean;
            } else {
              displayTitle = `${sub.title} · ${ch?.title || ""}`;
            }
          }

          items.push({
            id: att.id,
            timestamp: att.completedAt,
            timeLabel: getRelativeDateLabel(att.completedAt),
            title: `${displayTitle} · ${setLabel}`,
            subtitle: `${fullSetLabel} · ${att.totalQuestions} Aufgaben`,
            section,
            setName: fullSetLabel,
            correctCount: att.correctCount,
            totalQuestions: att.totalQuestions,
            scoreDisplay: `${att.correctCount}/${att.totalQuestions}`,
            percentage: att.score,
            type: "set",
          });
        });
    }

    // Mock Exams
    if (mockHistory) {
      mockHistory.forEach((m) => {
        const ts = m.timestamp || new Date(m.date).getTime() || Date.now();
        items.push({
          id: m.id,
          timestamp: ts,
          timeLabel: getRelativeDateLabel(ts),
          title: m.examTitle,
          subtitle: m.category === "full" ? "Generalprobe" : "Kurztest",
          section: "MedAT",
          setName: m.category === "full" ? "Voll-Simulation" : "Test",
          correctCount: m.correctCount,
          totalQuestions: m.totalQuestions,
          scoreDisplay: `${m.correctCount}/${m.totalQuestions}`,
          percentage: m.score,
          type: m.category === "full" ? "mock" : "quick",
        });
      });
    }

    // Fallback question aggregation
    if (items.length === 0 && attemptHistory && Object.keys(attemptHistory).length > 0) {
      const byChapterDate: Record<
        string,
        { chapterId: string; timestamp: number; total: number; correct: number }
      > = {};
      Object.entries(attemptHistory).forEach(([qId, att]) => {
        const baseId = qId.replace(/-s\d+-\d+$/, "");
        const q = questions.find((item) => item.id === qId || item.id === baseId);
        if (!q) return;
        const dateKey = getViennaDateString(att.timestamp);
        const key = `${q.chapterId}_${dateKey}`;
        if (!byChapterDate[key]) {
          byChapterDate[key] = {
            chapterId: q.chapterId,
            timestamp: att.timestamp,
            total: 0,
            correct: 0,
          };
        }
        byChapterDate[key].total++;
        if (att.correct) byChapterDate[key].correct++;
        if (att.timestamp > byChapterDate[key].timestamp) {
          byChapterDate[key].timestamp = att.timestamp;
        }
      });

      Object.entries(byChapterDate).forEach(([key, group]) => {
        const ch = CHAPTERS[group.chapterId];
        const sub = SUBJECTS.find((s) => s.id === ch?.subjectId);
        const section = ch?.section || "BMS";
        const title = ch ? (sub && sub.title !== ch.title ? `${sub.title} · ${ch.title}` : ch.title) : group.chapterId;
        const score = Math.round((group.correct / Math.max(group.total, 1)) * 100);
        items.push({
          id: key,
          timestamp: group.timestamp,
          timeLabel: getRelativeDateLabel(group.timestamp),
          title: `${title} · Training`,
          subtitle: `Freies Training · ${group.total} Aufgaben`,
          section,
          setName: "Training",
          correctCount: group.correct,
          totalQuestions: group.total,
          scoreDisplay: `${group.correct}/${group.total}`,
          percentage: score,
          type: "set",
        });
      });
    }

    return items.sort((a, b) => b.timestamp - a.timestamp).slice(0, 4);
  }, [setAttempts, mockHistory, attemptHistory, questions]);

  // 10. Overall 7-Day Performance Trend
  const overallTrend = useMemo(() => {
    const now = Date.now();
    const sevenDaysMs = 7 * 86400000;
    const fourteenDaysMs = 14 * 86400000;

    const recentCorrect: boolean[] = [];
    const priorCorrect: boolean[] = [];

    Object.values(attemptHistory).forEach((att) => {
      const age = now - att.timestamp;
      if (age <= sevenDaysMs) {
        recentCorrect.push(att.correct);
      } else if (age <= fourteenDaysMs) {
        priorCorrect.push(att.correct);
      }
    });

    if (recentCorrect.length >= 5 && priorCorrect.length >= 5) {
      const cur = Math.round((recentCorrect.filter(Boolean).length / recentCorrect.length) * 100);
      const prev = Math.round((priorCorrect.filter(Boolean).length / priorCorrect.length) * 100);
      const delta = cur - prev;
      return {
        current: cur,
        previous: prev,
        delta,
        hasEnoughData: true,
        labelText: `${prev}% → ${cur}% (${delta >= 0 ? "+" : ""}${delta} pp)`,
      };
    }

    return {
      current: null,
      previous: null,
      delta: null,
      hasEnoughData: false,
      labelText: "Noch keine ausreichenden Verlaufsdaten",
    };
  }, [attemptHistory]);

  const refreshAll = useCallback(() => {
    refreshMocks();
  }, [refreshMocks]);

  return {
    user: {
      name: userProfile.name,
      examType: userProfile.examType,
      targetYear: userProfile.targetYear,
      targetUniversityName: uniMeta.name,
      targetUniversityShort: uniMeta.shortName,
      preparationStageLabel: stageLabelMap[userProfile.preparationStage || "just_starting"],
      dailyStudyTimeLabel: timeLabelMap[userProfile.dailyStudyTime || "1_2h"],
      focusAreasText: (Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.length
        ? userProfile.focusAreas.map((code) =>
            code === "BMS" ? "BMS (Basiswissen)" :
            code === "TV"  ? "Textverständnis" :
            code === "KFF" ? "Kognitive Fertigkeiten" :
            code === "SEK" ? "Sozio-emotionale Kompetenz" :
            code === "MF"  ? "Manuelle Fertigkeiten" : code
          ).join(" + ")
        : "BMS (Basiswissen)"),
      currentStreak,
      daysRemaining: nextExam.daysRemaining,
      todayFormatted: todayDateFormatted,
    },
    readiness: readinessData,
    sections: sectionsPerformance,
    activeSectionsList,
    today: todayMission,
    generalprobe,
    nextAction,
    weakAreas: weakAreasList,
    learningProgress,
    recentActivity,
    trend: overallTrend,
    isLoading: isMockLoading,
    refresh: refreshAll,
  };
}
