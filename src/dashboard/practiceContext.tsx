import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { isUserLoggedIn, markUserLoggedOut, toast } from "../lib/core";
import type {
  DailyStudyTime,
  ExamType,
  PreparationStage,
  SectionCode,
  TargetUniversity,
} from "../content/medat/config";
import {
  CANONICAL_QUESTIONS,
  CHAPTERS,
  CHAPTER_MASTERY_THRESHOLD,
  resolveChapterId,
  SUBJECTS,
  type Chapter,
  type NormalizedQuestion,
  type PracticeSection,
  type PracticeSet,
  type PracticeStatus,
  type SubjectGroup,
} from "./practiceData";
import { supabase } from "../lib/supabase";
import { dataOrchestrator } from "../orchestrator";
import { performanceService } from "../orchestrator/services/performanceService";
import { journeyService } from "../orchestrator/services/journeyService";
import { getTodayViennaString, getViennaOffsetDateString } from "../lib/dateService";
import { sanitizeUserProfile } from "../lib/profileUtils";

export interface UserProfile {
  name: string;
  email?: string;
  examType: ExamType;
  targetYear: number;
  targetUniversity: TargetUniversity;
  preparationStage: PreparationStage;
  dailyStudyTime: DailyStudyTime;
  dailyMinutes?: number; // 30, 60, 90, 120
  studyDaysPerWeek?: number; // 3, 5, 6, 7
  planConfigured?: boolean; // whether first-time study setup was completed or dismissed
  focusAreas: SectionCode[];
  onboarded: boolean;
  isPro?: boolean;
  subscriptionTier?: "free" | "premium" | "pro" | "intensiv";
  subscriptionStatus?: string;
  proExpiresAt?: string | null;
  userId?: string;
}

export interface AttemptRecord {
  selected: number;
  correct: boolean;
  timestamp: number;
  section?: SectionCode;
  chapterId?: string;
  timeSpentSeconds?: number;
  userId?: string;
}

export interface SetAttempt {
  id: string;
  setId: string;
  chapterId: string;
  completedAt: number;
  score: number; // 0..100 percentage
  correctCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  passed: boolean;
  userId?: string;
  section?: SectionCode;
  status?: "started" | "completed" | "abandoned";
}

export type SetProgressStatus = "completed" | "active" | "locked" | "needs_review";

export interface SetWithStatus extends PracticeSet {
  status: SetProgressStatus;
  bestScore?: number;
  latestScore?: number;
  attemptsCount: number;
  bestAttempt?: SetAttempt;
}

export interface ChapterStats {
  chapter: Chapter;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  accuracy: number;
  status: PracticeStatus;
  masteryScore?: number;
  mistakesCount: number;
  progressPct: number;
  totalSets: number;
  completedSetsCount: number;
  activeSetId: string;
}

export interface SubjectStats {
  subject: SubjectGroup;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  accuracy: number;
  totalChapters: number;
  completedChapters: number;
  reviewChapters: number;
  progressPct: number;
}

export interface SectionStats {
  section: PracticeSection;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  accuracy: number;
  totalChapters: number;
  completedChapters: number;
  progressPct: number;
}

export interface LearningUnit {
  id: string;
  phaseId: string;
  stepId: string;
  stepTitle: string;
  unitNumber: number;
  chapterId: string;
  title: string;
  questionTarget: number;
  estimatedMinutes: number;
  state: "done" | "active" | "locked";
}

export interface LearningPhase {
  id: string;
  title: string;
  dates: string;
  desc: string;
  badge?: string;
  locked: boolean;
  unlockHint?: string;
  steps: {
    id: string;
    title: string;
    units: LearningUnit[];
  }[];
}

interface PracticeContextType {
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  setExamType: (examType: ExamType) => void;
  finishOnboarding: (profile: Omit<UserProfile, "onboarded">) => void;
  questions: NormalizedQuestion[];
  answers: Record<string, number>;
  attemptHistory: Record<string, AttemptRecord>;
  setAttempts: Record<string, SetAttempt[]>;
  bookmarks: Set<string>;
  wrong: Set<string>;
  seen: Set<string>;
  currentStreak: number;
  recordAnswer: (questionId: string, selected: number) => boolean;
  recordBatchAnswers: (batch: { questionId: string; selected: number }[]) => void;
  toggleBookmark: (questionId: string) => void;
  getChapterQuestions: (chapterId: string) => NormalizedQuestion[];
  getChapterSetsWithStatus: (chapterId: string) => SetWithStatus[];
  getActiveSetForChapter: (chapterId: string) => SetWithStatus;
  submitSetAttempt: (
    setId: string,
    chapterId: string,
    correctCount: number,
    totalQuestions: number,
    timeSpentSeconds: number
  ) => { passed: boolean; chapterMastered: boolean; score: number };
  getChapterStats: (chapterId: string) => ChapterStats;
  getSubjectStats: (subjectId: string) => SubjectStats;
  getSectionStats: (section: PracticeSection) => SectionStats;
  getMedATReadiness: () => { readinessIndex: number | null; hasEnoughData: boolean };
  getWeakAreas: () => { chapter: Chapter; stats: ChapterStats }[];
  getActiveLearningUnit: () => LearningUnit & { activeSet: SetWithStatus };
  getLearningPlanPhases: () => LearningPhase[];
  resetAnswers: (questionIds?: string[]) => void;
  logout: () => Promise<void>;
  isResultPage: boolean;
  setIsResultPage: (isResult: boolean) => void;
  activityDates: string[];
  currentUserId: string | null;
  isLoggedIn: boolean;
  orchestrator: typeof dataOrchestrator;
}

const STORAGE_PREFIX = "medat_prep_v2";

// Clean up legacy un-scoped, mirror, or guest keys so no stale data pollutes any user
if (typeof window !== "undefined" && window.localStorage) {
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (
        k &&
        (k.startsWith("medat_v3_mirror_") ||
          k.startsWith(`${STORAGE_PREFIX}_guest_`) ||
          k.startsWith("medat_prep_prod_v1_"))
      ) {
        keysToRemove.push(k);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    sessionStorage.removeItem("medat_demo_preview");
  } catch {}
}

const getScopedKey = (userId: string | null | undefined, key: string) => {
  return userId ? `${STORAGE_PREFIX}_u_${userId}_${key}` : "";
};

/**
 * Strict loader that reads authenticated user-scoped key ONLY.
 * No guest fallback and no mirror fallback.
 */
function loadScopedData<T>(userId: string | null | undefined, key: string, fallback: T): T {
  if (!userId) return fallback;
  try {
    const keyName = getScopedKey(userId, key);
    if (!keyName) return fallback;
    const userSaved = localStorage.getItem(keyName);
    if (userSaved) return JSON.parse(userSaved);
  } catch (e) {}
  return fallback;
}

const DEFAULT_PROFILE: UserProfile = {
  name: "Student:in",
  examType: "MEDAT-H",
  targetYear: 2027,
  targetUniversity: "undecided",
  preparationStage: "just_starting",
  dailyStudyTime: "1_2h",
  dailyMinutes: 60,
  studyDaysPerWeek: 5,
  planConfigured: true,
  focusAreas: ["BMS"],
  onboarded: true,
  isPro: false,
  subscriptionTier: "free",
  proExpiresAt: null,
};

const PracticeContext = createContext<PracticeContextType | undefined>(undefined);

export const PracticeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState<string | null>(() => {
    try {
      if (localStorage.getItem("medat_user_logged_out") === "true") {
        return null;
      }
      const saved = localStorage.getItem("medat_current_user_id");
      if (saved && saved.trim().length > 0) return saved;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("sb-") && key.endsWith("-auth-token")) {
          const item = localStorage.getItem(key);
          if (item) {
            const parsed = JSON.parse(item);
            if (parsed?.user?.id) {
              localStorage.setItem("medat_current_user_id", parsed.user.id);
              return parsed.user.id;
            }
          }
        }
      }
    } catch {
      return null;
    }
    return null;
  });

  const [isResultPage, setIsResultPage] = useState<boolean>(false);

  // 1. User profile state
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = loadScopedData<UserProfile | null>(currentUserId, "profile", null);
      if (saved) {
        return sanitizeUserProfile(saved);
      }
    } catch (e) {
      console.warn("Could not load user profile:", e);
    }
    return sanitizeUserProfile(DEFAULT_PROFILE);
  });

  // 2. Questions state (Filtered dynamically by exam type: MEDAT-H vs MEDAT-Z)
  const questions = useMemo(() => {
    return CANONICAL_QUESTIONS.filter((q) => {
      if (q.exam === "BOTH" || (q.exam as string) === "MedAT") return true;
      return q.exam === userProfile.examType;
    });
  }, [userProfile.examType]);

  // 3. User Progress States (Scoped strictly to current user, resilient to refreshes)
  const [answers, setAnswers] = useState<Record<string, number>>(() =>
    loadScopedData(currentUserId, "answers", {})
  );

  const [attemptHistory, setAttemptHistory] = useState<Record<string, AttemptRecord>>(() =>
    loadScopedData(currentUserId, "attempts", {})
  );

  const [bookmarks, setBookmarks] = useState<Set<string>>(() =>
    new Set(loadScopedData<string[]>(currentUserId, "bookmarks", []))
  );

  const [wrong, setWrong] = useState<Set<string>>(() =>
    new Set(loadScopedData<string[]>(currentUserId, "wrong", []))
  );

  const [seen, setSeen] = useState<Set<string>>(() =>
    new Set(loadScopedData<string[]>(currentUserId, "seen", []))
  );

  const [setAttempts, setSetAttempts] = useState<Record<string, SetAttempt[]>>(() =>
    loadScopedData(currentUserId, "set_attempts", {})
  );

  const [completedSetIds, setCompletedSetIds] = useState<Set<string>>(() => {
    const rawCompleted = loadScopedData<string[]>(currentUserId, "completed_sets", []);
    const rawSets = loadScopedData<Record<string, SetAttempt[]>>(currentUserId, "set_attempts", {});
    return new Set(
      rawCompleted.filter(
        (id) =>
          Array.isArray(rawSets[id]) &&
          rawSets[id].length > 0 &&
          rawSets[id].some(
            (a) =>
              (typeof a.totalQuestions === "number" && a.totalQuestions > 0) ||
              (typeof a.score === "number" && a.score >= 0)
          )
      )
    );
  });

  const [activityDates, setActivityDates] = useState<string[]>(() =>
    loadScopedData(currentUserId, "activity_dates", [])
  );

  // Save to scoped localStorage on change with persistent mirrors
  useEffect(() => {
    try {
      localStorage.setItem(getScopedKey(currentUserId, "profile"), JSON.stringify(userProfile));
    } catch {}
  }, [userProfile, currentUserId]);

  useEffect(() => {
    try {
      const answersJson = JSON.stringify(answers);
      const attemptsJson = JSON.stringify(attemptHistory);
      const bookmarksJson = JSON.stringify(Array.from(bookmarks));
      const wrongJson = JSON.stringify(Array.from(wrong));
      const seenJson = JSON.stringify(Array.from(seen));
      const completedSetsJson = JSON.stringify(Array.from(completedSetIds));
      const setAttemptsJson = JSON.stringify(setAttempts);
      const activityDatesJson = JSON.stringify(activityDates);

      // Primary scoped writes (authenticated user only)
      if (currentUserId) {
        localStorage.setItem(getScopedKey(currentUserId, "answers"), answersJson);
        localStorage.setItem(getScopedKey(currentUserId, "attempts"), attemptsJson);
        localStorage.setItem(getScopedKey(currentUserId, "bookmarks"), bookmarksJson);
        localStorage.setItem(getScopedKey(currentUserId, "wrong"), wrongJson);
        localStorage.setItem(getScopedKey(currentUserId, "seen"), seenJson);
        localStorage.setItem(getScopedKey(currentUserId, "completed_sets"), completedSetsJson);
        localStorage.setItem(getScopedKey(currentUserId, "set_attempts"), setAttemptsJson);
        localStorage.setItem(getScopedKey(currentUserId, "activity_dates"), activityDatesJson);
      }
    } catch {}
  }, [answers, attemptHistory, bookmarks, wrong, seen, completedSetIds, setAttempts, activityDates, currentUserId]);

  // Full Hydration via Canonical Data Orchestrator
  const hydrateFromSupabase = useCallback(async () => {
    await dataOrchestrator.dispatch({ type: "HYDRATE_CLOUD_STATE" });
  }, []);

  // Single Auth & Hydration Pipeline: Subscribe to authoritative Data Orchestrator state
  useEffect(() => {
    // 1. Initial synchronization directly from authoritative orchestrator state
    const currentOrchState = dataOrchestrator.getState();
    setCurrentUserId(currentOrchState.userId);
    setUserProfile(currentOrchState.userProfile);
    setAnswers(currentOrchState.answers);
    setAttemptHistory(currentOrchState.attemptHistory);
    setSetAttempts(currentOrchState.setAttempts);
    setCompletedSetIds(currentOrchState.completedSetIds);
    setBookmarks(currentOrchState.bookmarks);
    setWrong(currentOrchState.wrong);
    setSeen(currentOrchState.seen);
    setActivityDates(currentOrchState.activityDates);

    // 2. React to all state changes emitted by Data Orchestrator
    const unsubscribe = dataOrchestrator.subscribe((orchState) => {
      setCurrentUserId(orchState.userId);
      setUserProfile(orchState.userProfile);
      setAnswers(orchState.answers);
      setAttemptHistory(orchState.attemptHistory);
      setSetAttempts(orchState.setAttempts);
      setCompletedSetIds(orchState.completedSetIds);
      setBookmarks(orchState.bookmarks);
      setWrong(orchState.wrong);
      setSeen(orchState.seen);
      setActivityDates(orchState.activityDates);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Record daily activity for streak calculation standardized to Europe/Vienna
  const recordActivityDate = useCallback(() => {
    if (!currentUserId) return;
    const today = getTodayViennaString();
    setActivityDates((prev) => {
      const next = prev.includes(today) ? prev : [...prev, today];
      try {
        const json = JSON.stringify(next);
        const keyName = getScopedKey(currentUserId, "activity_dates");
        if (keyName) localStorage.setItem(keyName, json);
      } catch {}
      return next;
    });
    dataOrchestrator.dispatch({ type: "RECORD_ACTIVITY_DATE", dateStr: today });
  }, [currentUserId]);


  // Compute real activity streak in Europe/Vienna timezone
  const currentStreak = useMemo(() => {
    if (activityDates.length === 0) return 0;
    const sorted = Array.from(new Set(activityDates)).sort().reverse();
    const today = getTodayViennaString();
    const yesterdayDate = getViennaOffsetDateString(-1);

    let streak = 0;
    let expectedDate = sorted[0] === today ? today : sorted[0] === yesterdayDate ? yesterdayDate : null;

    if (!expectedDate) return 0;

    for (const d of sorted) {
      if (d === expectedDate) {
        streak++;
        expectedDate = getViennaOffsetDateString(-1, expectedDate);
      } else {
        break;
      }
    }
    return streak;
  }, [activityDates]);

  // Profile update helpers (Single Entry through Orchestrator)
  const updateUserProfile = useCallback((partial: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      const updated = sanitizeUserProfile({ ...prev, ...partial });
      dataOrchestrator.dispatch({ type: "UPDATE_PROFILE", profile: updated });
      return updated;
    });
  }, []);

  const setExamType = useCallback((examType: ExamType) => {
    setUserProfile((prev) => {
      const updated = sanitizeUserProfile({ ...prev, examType });
      dataOrchestrator.dispatch({ type: "UPDATE_PROFILE", profile: updated });
      return updated;
    });
    toast(`Ansicht gewechselt: ${examType}`, "info");
  }, []);

  const finishOnboarding = useCallback((profile: Omit<UserProfile, "onboarded">) => {
    const updated: UserProfile = sanitizeUserProfile({ ...profile, onboarded: true });
    setUserProfile(updated);
    dataOrchestrator.dispatch({ type: "UPDATE_PROFILE", profile: updated });
  }, []);

  // Record question answer
  const recordAnswer = useCallback(
    (questionId: string, selected: number): boolean => {
      const baseId = questionId.replace(/-s\d+-\d+$/, "");
      const q = questions.find((item) => item.id === questionId || item.id === baseId);
      if (!q) return false;

      const isCorrect = selected === q.correct;
      const now = Date.now();

      setAnswers((prev) => {
        const next = { ...prev, [questionId]: selected, [baseId]: selected };
        try {
          const json = JSON.stringify(next);
          const key = getScopedKey(currentUserId, "answers");
          if (key) localStorage.setItem(key, json);
        } catch {}
        return next;
      });

      setAttemptHistory((prev) => {
        const next = {
          ...prev,
          [questionId]: { selected, correct: isCorrect, timestamp: now },
          [baseId]: { selected, correct: isCorrect, timestamp: now },
        };
        try {
          const json = JSON.stringify(next);
          const key = getScopedKey(currentUserId, "attempts");
          if (key) localStorage.setItem(key, json);
        } catch {}
        return next;
      });

      setSeen((prev) => {
        const next = new Set(prev);
        next.add(questionId);
        next.add(baseId);
        return next;
      });

      if (isCorrect) {
        setWrong((prev) => {
          const next = new Set(prev);
          next.delete(questionId);
          next.delete(baseId);
          return next;
        });
      } else {
        setWrong((prev) => {
          const next = new Set(prev);
          next.add(questionId);
          next.add(baseId);
          return next;
        });
      }

      recordActivityDate();
      dataOrchestrator.dispatch({
        type: "ANSWER_QUESTION",
        questionId,
        selected,
      });
      return isCorrect;
    },
    [questions, recordActivityDate, currentUserId]
  );

  const recordBatchAnswers = useCallback(
    (batch: { questionId: string; selected: number }[]) => {
      const now = Date.now();
      const newAnswers: Record<string, number> = {};
      const newHistory: Record<string, AttemptRecord> = {};
      const newSeen = new Set<string>();
      const correctIds = new Set<string>();
      const wrongIds = new Set<string>();

      batch.forEach(({ questionId, selected }) => {
        const baseId = questionId.replace(/-s\d+-\d+$/, "");
        const q = questions.find((item) => item.id === questionId || item.id === baseId);
        const isCorrect = q ? q.correct === selected : false;

        newAnswers[questionId] = selected;
        newAnswers[baseId] = selected;
        newHistory[questionId] = { selected, correct: isCorrect, timestamp: now };
        newHistory[baseId] = { selected, correct: isCorrect, timestamp: now };
        newSeen.add(questionId);
        newSeen.add(baseId);

        if (isCorrect) {
          correctIds.add(questionId);
          correctIds.add(baseId);
        } else {
          wrongIds.add(questionId);
          wrongIds.add(baseId);
        }
      });

      setAnswers((prev) => {
        const next = { ...prev, ...newAnswers };
        try {
          const json = JSON.stringify(next);
          const key = getScopedKey(currentUserId, "answers");
          if (key) localStorage.setItem(key, json);
        } catch {}
        return next;
      });

      setAttemptHistory((prev) => {
        const next = { ...prev, ...newHistory };
        try {
          const json = JSON.stringify(next);
          const key = getScopedKey(currentUserId, "attempts");
          if (key) localStorage.setItem(key, json);
        } catch {}
        return next;
      });

      setSeen((prev) => {
        const next = new Set(prev);
        newSeen.forEach((id) => next.add(id));
        return next;
      });

      setWrong((prev) => {
        const next = new Set(prev);
        correctIds.forEach((id) => next.delete(id));
        wrongIds.forEach((id) => next.add(id));
        return next;
      });

      recordActivityDate();
      dataOrchestrator.dispatch({
        type: "RECORD_BATCH_ANSWERS",
        batch,
      });
    },
    [questions, recordActivityDate, currentUserId]
  );


  const toggleBookmark = useCallback((questionId: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      const isNowBookmarked = !next.has(questionId);
      if (next.has(questionId)) {
        next.delete(questionId);
        toast("Lesezeichen entfernt", "info");
      } else {
        next.add(questionId);
        toast("Frage für Wiederholung gemerkt ⭐", "success");
      }
      dataOrchestrator.dispatch({
        type: "TOGGLE_BOOKMARK",
        questionId,
      });
      return next;
    });
  }, []);

  const getChapterQuestions = useCallback(
    (rawChapterId: string) => {
      const chapterId = resolveChapterId(rawChapterId);
      return questions.filter(
        (q) => q.chapterId === rawChapterId || q.chapterId === chapterId || resolveChapterId(q.chapterId) === chapterId
      );
    },
    [questions]
  );

  // 5-Set Sequential Progress Evaluation — Canonical Delegation to JourneyService
  const getChapterSetsWithStatus = useCallback(
    (rawChapterId: string): SetWithStatus[] => {
      return journeyService.getChapterSetsWithStatus(rawChapterId, setAttempts, completedSetIds);
    },
    [completedSetIds, setAttempts]
  );

  const getActiveSetForChapter = useCallback(
    (rawChapterId: string): SetWithStatus => {
      return journeyService.getActiveSetForChapter(rawChapterId, setAttempts, completedSetIds);
    },
    [completedSetIds, setAttempts]
  );

  const submitSetAttempt = useCallback(
    (
      setId: string,
      chapterId: string,
      correctCount: number,
      totalQuestions: number,
      timeSpentSeconds: number
    ) => {
      const scorePct = Math.round((correctCount / Math.max(totalQuestions, 1)) * 100);
      const isSet5 = setId.endsWith("-set-5");
      const passed = isSet5 ? scorePct >= CHAPTER_MASTERY_THRESHOLD * 100 : scorePct >= 60;

      const attempt: SetAttempt = {
        id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        setId,
        chapterId,
        completedAt: Date.now(),
        score: scorePct,
        correctCount,
        totalQuestions,
        timeSpentSeconds,
        passed,
      };

      setSetAttempts((prev) => {
        const next = {
          ...prev,
          [setId]: [...(prev[setId] || []), attempt],
        };
        try {
          const json = JSON.stringify(next);
          const key = getScopedKey(currentUserId, "set_attempts");
          if (key) localStorage.setItem(key, json);
        } catch {}
        return next;
      });

      setCompletedSetIds((prev) => {
        const next = new Set(prev).add(setId);
        try {
          const json = JSON.stringify(Array.from(next));
          const key = getScopedKey(currentUserId, "completed_sets");
          if (key) localStorage.setItem(key, json);
        } catch {}
        return next;
      });

      recordActivityDate();
      dataOrchestrator.dispatch({
        type: "SUBMIT_SET",
        setId,
        chapterId,
        correctCount,
        totalQuestions,
        timeSpentSeconds,
      });

      if (isSet5 && passed) {
        toast("🏆 Kapitel offiziell gemeistert!", "success");
        return { passed: true, chapterMastered: true, score: scorePct };
      } else if (passed) {
        toast(`Set abgeschlossen (${scorePct}%)! Nächstes Set freigeschaltet.`, "success");
        return { passed: true, chapterMastered: false, score: scorePct };
      } else {
        toast(`Set abgeschlossen (${scorePct}%). Nächstes Set freigeschaltet.`, "info");
        return { passed: false, chapterMastered: false, score: scorePct };
      }
    },
    [recordActivityDate, currentUserId]
  );

  // Statistics Computations — Canonical Delegation to PerformanceService
  const getChapterStats = useCallback(
    (rawChapterId: string): ChapterStats => {
      return performanceService.getChapterStats(
        rawChapterId,
        questions,
        attemptHistory,
        wrong,
        setAttempts,
        completedSetIds
      );
    },
    [questions, attemptHistory, wrong, setAttempts, completedSetIds]
  );

  const getSubjectStats = useCallback(
    (subjectId: string): SubjectStats => {
      return performanceService.getSubjectStats(
        subjectId,
        questions,
        attemptHistory,
        wrong,
        setAttempts,
        completedSetIds
      );
    },
    [questions, attemptHistory, wrong, setAttempts, completedSetIds]
  );

  const getSectionStats = useCallback(
    (section: PracticeSection): SectionStats => {
      return performanceService.getSectionStats(
        section,
        questions,
        attemptHistory,
        wrong,
        setAttempts,
        completedSetIds
      );
    },
    [questions, attemptHistory, wrong, setAttempts, completedSetIds]
  );

  const getMedATReadiness = useCallback(() => {
    return performanceService.getMedATReadiness(
      userProfile,
      questions,
      attemptHistory,
      wrong,
      setAttempts,
      completedSetIds
    );
  }, [userProfile, questions, attemptHistory, wrong, setAttempts, completedSetIds]);

  const getWeakAreas = useCallback(() => {
    return performanceService.getWeakAreas(
      userProfile,
      questions,
      attemptHistory,
      wrong,
      setAttempts,
      completedSetIds
    );
  }, [userProfile, questions, attemptHistory, wrong, setAttempts, completedSetIds]);

  // Dynamic Learning Plan Phases — Canonical Delegation to JourneyService
  const getLearningPlanPhases = useCallback((): LearningPhase[] => {
    return journeyService.getLearningPlanPhases(userProfile, answers, getChapterStats);
  }, [userProfile, answers, getChapterStats]);

  const getActiveLearningUnit = useCallback((): LearningUnit & { activeSet: SetWithStatus } => {
    return journeyService.getActiveLearningUnit(
      userProfile,
      answers,
      getChapterStats,
      getActiveSetForChapter
    );
  }, [userProfile, answers, getChapterStats, getActiveSetForChapter]);

  const resetAnswers = useCallback((questionIds?: string[]) => {
    if (!questionIds) {
      setAnswers({});
      setAttemptHistory({});
      setWrong(new Set());
      setSeen(new Set());
      setCompletedSetIds(new Set());
      setSetAttempts({});
      setActivityDates([]);
      if (currentUserId) {
        try {
          const prefix = `${STORAGE_PREFIX}_u_${currentUserId}`;
          localStorage.removeItem(`${prefix}_answers`);
          localStorage.removeItem(`${prefix}_attempts`);
          localStorage.removeItem(`${prefix}_bookmarks`);
          localStorage.removeItem(`${prefix}_wrong`);
          localStorage.removeItem(`${prefix}_seen`);
          localStorage.removeItem(`${prefix}_completed_sets`);
          localStorage.removeItem(`${prefix}_set_attempts`);
          localStorage.removeItem(`${prefix}_activity_dates`);
        } catch {}
      }
      dataOrchestrator.dispatch({
        type: "RESET_PROGRESS",
        questionIds,
      });
      toast("Übungsverlauf zurückgesetzt", "info");
    }
  }, [currentUserId]);

  const logout = useCallback(async () => {
    markUserLoggedOut();
    try {
      await supabase.auth.signOut({ scope: "local" });
    } catch {}
    setCurrentUserId(null);
    try {
      localStorage.removeItem("medat_current_user_id");
      localStorage.removeItem("medat_pending_sync_sets");
      localStorage.removeItem("medat_pending_sync_questions");
      sessionStorage.removeItem("medat_demo_preview");
      Object.keys(localStorage).forEach((k) => {
        if (
          (k.startsWith("sb-") && k.endsWith("-auth-token")) ||
          k.startsWith("medat_inprogress_") ||
          k.startsWith("medat_prep_v2_guest_")
        ) {
          localStorage.removeItem(k);
        }
      });
    } catch {}
    dataOrchestrator.setUserId(null);
    setUserProfile(DEFAULT_PROFILE);
    setAnswers({});
    setAttemptHistory({});
    setBookmarks(new Set());
    setWrong(new Set());
    setSeen(new Set());
    setCompletedSetIds(new Set());
    setSetAttempts({});
    setActivityDates([]);
    toast("Erfolgreich abgemeldet.", "info");
    window.location.hash = "#/";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PracticeContext.Provider
      value={{
        userProfile,
        updateUserProfile,
        setExamType,
        finishOnboarding,
        questions,
        answers,
        attemptHistory,
        setAttempts,
        bookmarks,
        wrong,
        seen,
        currentStreak,
        recordAnswer,
        recordBatchAnswers,
        toggleBookmark,
        getChapterQuestions,
        getChapterSetsWithStatus,
        getActiveSetForChapter,
        submitSetAttempt,
        getChapterStats,
        getSubjectStats,
        getSectionStats,
        getMedATReadiness,
        getWeakAreas,
        getActiveLearningUnit,
        getLearningPlanPhases,
        resetAnswers,
        logout,
        isResultPage,
        setIsResultPage,
        activityDates,
        currentUserId,
        isLoggedIn: Boolean(currentUserId) || isUserLoggedIn(),
        orchestrator: dataOrchestrator,
      }}
    >
      {children}
    </PracticeContext.Provider>
  );
};

export function usePractice() {
  const context = useContext(PracticeContext);
  if (!context) {
    throw new Error("usePractice must be used within a PracticeProvider");
  }
  return context;
}
