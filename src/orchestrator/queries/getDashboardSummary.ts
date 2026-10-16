/**
 * src/orchestrator/queries/getDashboardSummary.ts
 *
 * Canonical Read Query for the Dashboard / Home Screen.
 * Assembles all domain data into a single coherent snapshot without duplicate calculations.
 */

import type { DashboardData, DashboardTaskItem, RecentActivityItem, SectionPerformanceItem, WeakAreaItem } from "../../dashboard/useDashboardData";
import type { OrchestratorState } from "../types";
import { performanceService } from "../services/performanceService";
import { journeyService } from "../services/journeyService";
import { missionService } from "../services/missionService";
import { mockService } from "../services/mockService";
import { CANONICAL_QUESTIONS, CHAPTERS, SUBJECTS, getSectionFromQuestionId, type NormalizedQuestion } from "../../dashboard/practiceData";
import { getNextMedATDate, getSectionsForExam, UNIVERSITIES } from "../../content/medat/config";
import { getTodayViennaString, getViennaOffsetDateString } from "../../lib/dateService";

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

export function getDashboardSummary(
  state: OrchestratorState,
  questions: NormalizedQuestion[] = CANONICAL_QUESTIONS,
  callbacks?: {
    createDailyMission?: (minutes?: number) => void;
    resetDailyMission?: () => void;
    refresh?: () => void;
  }
): DashboardData {
  const { userProfile, answers, attemptHistory, setAttempts, completedSetIds, wrong, activityDates, mockHistory } = state;

  // 1. User meta
  const nextExam = getNextMedATDate(userProfile.targetYear);
  const uniMeta = UNIVERSITIES[userProfile.targetUniversity] || UNIVERSITIES.undecided;

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

  const todayDateFormatted = new Date().toLocaleDateString("de-AT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // 2. Sections performance
  const activeSectionMetas = getSectionsForExam(userProfile.examType);
  const sectionsPerformance: Record<string, SectionPerformanceItem> = {};
  const now = Date.now();
  const sevenDaysMs = 7 * 86400000;
  const fourteenDaysMs = 14 * 86400000;

  activeSectionMetas.forEach((sec) => {
    const stats = performanceService.getSectionStats(sec.code, questions, attemptHistory, wrong, setAttempts, completedSetIds);
    const weight = userProfile.examType === "MEDAT-Z" ? sec.weightMedATZ : sec.weightMedATH;

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
      const recentAcc = Math.round((recentAttempts.filter(Boolean).length / recentAttempts.length) * 100);
      const priorAcc = Math.round((priorAttempts.filter(Boolean).length / priorAttempts.length) * 100);
      const delta = recentAcc - priorAcc;
      if (delta > 0) trendText = `↑ +${delta}% letzte 7 Tage`;
      else if (delta < 0) trendText = `↓ ${delta}% letzte 7 Tage`;
      else trendText = `±0% letzte 7 Tage`;
    }

    sectionsPerformance[sec.code] = {
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

  const activeSectionsList = activeSectionMetas.map((m) => sectionsPerformance[m.code]).filter(Boolean);

  // 3. Mock Stats & Readiness
  const mockStats = mockService.getStats(mockHistory);
  const readinessRaw = performanceService.getMedATReadiness(userProfile, questions, attemptHistory, wrong, setAttempts, completedSetIds);

  const bmsSec = sectionsPerformance.BMS;
  const tvSec = userProfile.examType === "MEDAT-Z" ? sectionsPerformance.MF : sectionsPerformance.TV;
  const kffSec = sectionsPerformance.KFF;
  const sekSec = sectionsPerformance.SEK;

  const sectionsWithData = [bmsSec, tvSec, kffSec, sekSec].filter((s) => s && s.answeredCount >= 3);
  const hasEnough = readinessRaw.hasEnoughData && readinessRaw.readinessIndex !== null;

  let confidence: "low" | "medium" | "high" = "low";
  if (mockStats.completedFullMocks.length > 0) {
    confidence = "high";
  } else if (sectionsWithData.length >= 4 && Object.keys(answers).length >= 50) {
    confidence = "high";
  } else if (sectionsWithData.length >= 3) {
    confidence = "medium";
  }

  let readinessLabel = "Noch nicht genügend Daten";
  if (hasEnough) {
    const idx = readinessRaw.readinessIndex!;
    if (idx >= 78) readinessLabel = "Zielzone (MedAT-Zulassungszone)";
    else if (idx >= 65) readinessLabel = "Aufbauzone";
    else readinessLabel = "Basiszone";
  }

  // 4. Learning unit & Progress
  const activeUnit = journeyService.getActiveLearningUnit(
    userProfile,
    answers,
    (chId) => performanceService.getChapterStats(chId, questions, attemptHistory, wrong, setAttempts, completedSetIds),
    (chId) => journeyService.getActiveSetForChapter(chId, setAttempts, completedSetIds)
  );

  const learningProgress = (() => {
    if (!activeUnit) {
      return {
        hasStarted: false,
        stepTitle: "Schritt 1 — Einstieg",
        chapterTitle: "Zellbiologie",
        chapterId: "bio-01-zelle",
        activeSetTitle: "Set 1 — Grundlagen",
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
    const chStats = performanceService.getChapterStats(activeUnit.chapterId, questions, attemptHistory, wrong, setAttempts, completedSetIds);
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
  })();

  // 5. Weak areas
  const weakAreasRaw = performanceService.getWeakAreas(userProfile, questions, attemptHistory, wrong, setAttempts, completedSetIds);
  const weakAreasList: WeakAreaItem[] = weakAreasRaw.map(({ chapter, stats }) => ({
    id: chapter.id,
    chapterId: chapter.id,
    section: chapter.section,
    title: chapter.title,
    accuracy: stats.accuracy,
    mistakesCount: stats.mistakesCount,
    answeredCount: stats.answeredCount,
  }));

  // 6. Next Action
  const nextAction = (() => {
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
      const chStats = performanceService.getChapterStats(activeUnit.chapterId, questions, attemptHistory, wrong, setAttempts, completedSetIds);
      const recTasks = activeUnit.activeSet.questionCount || 15;
      return {
        section: activeUnit.stepTitle.includes("—")
          ? activeUnit.stepTitle.split("—")[1].trim()
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

    return {
      section: "BMS",
      topic: "Zellbiologie",
      chapterId: "bio-01-zelle",
      currentPerformance: null,
      reason: "Beginne mit den biologischen Grundlagen des BMS (40% Prüfungsrelevanz).",
      recommendationText: "→ 15 Aufgaben empfohlen",
    };
  })();

  // 7. Today Mission & Consistency
  const evaluatedMission = missionService.getEvaluatedMission({
    userProfile,
    activeUnit,
    attemptHistory,
    setAttempts,
    questions,
    wrong,
    answers,
    weakAreas: weakAreasRaw,
    mockHistory,
  });

  const weeklyConsistency = missionService.getWeeklyConsistency(
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
    navTarget: i.navTarget,
  }));

  const focusChapterId = activeUnit ? activeUnit.chapterId : nextAction.chapterId;
  const ch = CHAPTERS[focusChapterId] || CHAPTERS["bio-01-zelle"];
  const sub = SUBJECTS.find((s) => s.id === ch?.subjectId);

  // 8. Recent Activity
  const recentActivity: RecentActivityItem[] = [];
  Object.values(setAttempts).flat().forEach((att) => {
    const chItem = CHAPTERS[att.chapterId];
    const sub = SUBJECTS.find((s) => s.id === chItem?.subjectId);
    const section = chItem?.section || "KFF";
    const setNum = att.setId.includes("-set-") ? att.setId.split("-set-")[1] : "1";
    const isSim =
      att.chapterId.startsWith("kff-") ||
      att.chapterId.startsWith("tv-") ||
      att.chapterId.startsWith("sek-") ||
      att.chapterId.startsWith("mf-");
    const setLabel = isSim ? `Sim ${setNum}` : `Set ${setNum}`;
    const fullSetLabel = isSim ? `Simulation ${setNum}` : `Set ${setNum}`;

    let displayTitle = chItem?.title || att.chapterId;
    if (sub && sub.title) {
      const subClean = sub.title.replace(/\s*\([A-Z]+\)$/, "").trim();
      const chClean = (chItem?.title || "").replace(/\s*\([A-Z]+\)$/, "").trim();
      if (subClean.toLowerCase() === chClean.toLowerCase()) {
        displayTitle = subClean;
      } else {
        displayTitle = `${sub.title} · ${chItem?.title || ""}`;
      }
    }

    recentActivity.push({
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

  mockHistory.forEach((mock) => {
    recentActivity.push({
      id: mock.id,
      timestamp: mock.timestamp,
      timeLabel: getRelativeDateLabel(mock.timestamp),
      title: mock.examTitle,
      subtitle: mock.category === "full" ? "Generalprobe" : "Kurztest",
      section: "MedAT",
      setName: mock.category === "full" ? "Voll-Simulation" : "Test",
      correctCount: mock.correctCount,
      totalQuestions: mock.totalQuestions,
      scoreDisplay: `${mock.correctCount}/${mock.totalQuestions}`,
      percentage: Math.round(mock.score),
      type: "mock",
    });
  });

  recentActivity.sort((a, b) => b.timestamp - a.timestamp);
  const slicedRecent = recentActivity.slice(0, 5);

  // 9. Streak (Standardized to Europe/Vienna)
  const sortedDates = [...activityDates].sort().reverse();
  const todayStr = getTodayViennaString();
  const yestStr = getViennaOffsetDateString(-1);
  let streak = 0;
  let expDate = sortedDates[0] === todayStr ? todayStr : sortedDates[0] === yestStr ? yestStr : null;
  if (expDate) {
    for (const d of sortedDates) {
      if (d === expDate) {
        streak++;
        expDate = getViennaOffsetDateString(-1, expDate);
      } else break;
    }
  }

  return {
    user: {
      name: userProfile.name || "Student:in",
      examType: userProfile.examType,
      targetYear: userProfile.targetYear || 2027,
      targetUniversityName: uniMeta.name,
      targetUniversityShort: uniMeta.shortName,
      preparationStageLabel: stageLabelMap[userProfile.preparationStage] || "Einstiegsphase",
      dailyStudyTimeLabel: timeLabelMap[userProfile.dailyStudyTime] || "1–2 Std./Tag",
      focusAreasText: (userProfile.focusAreas || ["BMS"]).join(", "),
      currentStreak: streak,
      daysRemaining: nextExam.daysRemaining,
      todayFormatted: todayDateFormatted,
    },
    readiness: {
      score: hasEnough ? readinessRaw.readinessIndex : null,
      hasEnoughData: hasEnough,
      confidence,
      label: readinessLabel,
      breakdown: {
        bms: bmsSec && bmsSec.answeredCount >= 3 ? bmsSec.accuracy : null,
        tv: tvSec && tvSec.answeredCount >= 3 ? tvSec.accuracy : null,
        kff: kffSec && kffSec.answeredCount >= 3 ? kffSec.accuracy : null,
        sek: sekSec && sekSec.answeredCount >= 3 ? sekSec.accuracy : null,
      },
      trend: mockStats.improvement,
      trendText: mockStats.improvementText,
    },
    sections: sectionsPerformance,
    activeSectionsList,
    today: {
      isCreatedToday: evaluatedMission.isCreatedToday,
      focusTitle: ch?.title || "Zellbiologie",
      focusSubtitle: ch ? `${ch.section} · ${sub?.title || ch.title}` : "BMS · Biologie",
      focusSetTitle: activeUnit ? activeUnit.activeSet.title : "Set 1 — Grundlagen",
      focusDescription: ch?.description || "Wichtige physiologische Grundlagen für den BMS-Teil.",
      focusFocusArea: "Konzeptuelles Verständnis & Definitionen",
      focusChapterId,
      estimatedMinutes: evaluatedMission.targetMinutes,
      studyDaysPerWeek: evaluatedMission.studyDaysPerWeek,
      completedTasks: evaluatedMission.completedTasks,
      totalTasks: evaluatedMission.totalTasks,
      completionPercent: evaluatedMission.completionPercent,
      items: missionItems,
      createDailyMission: callbacks?.createDailyMission || (() => {}),
      resetDailyMission: callbacks?.resetDailyMission || (() => {}),
      weeklyCompletedDays: weeklyConsistency.weeklyCompletedDays,
      weeklyTargetDays: weeklyConsistency.weeklyTargetDays,
      weeklyProgressPercent: weeklyConsistency.weeklyProgressPercent,
      weekDaysActivity: weeklyConsistency.weekDaysActivity,
    },
    generalprobe: {
      attempted: mockStats.completedFullMocks.length > 0,
      totalCompleted: mockStats.completedFullMocks.length,
      averageScore: mockStats.averageScore,
      bestScore: mockStats.bestScore,
      latestScore: mockStats.latestScore,
      lastResult: mockStats.completedFullMocks[0]
        ? {
            id: mockStats.completedFullMocks[0].id,
            score: mockStats.completedFullMocks[0].score,
            date: mockStats.completedFullMocks[0].date,
            timestamp: mockStats.completedFullMocks[0].timestamp,
            bmsPercent: mockStats.completedFullMocks[0].bmsPercent || 0,
            tvPercent: mockStats.completedFullMocks[0].tvPercent || 0,
            kffPercent: mockStats.completedFullMocks[0].kffPercent || 0,
            sekPercent: mockStats.completedFullMocks[0].sekPercent || 0,
          }
        : undefined,
      nextRecommendation: mockStats.recommendations.primary,
    },
    nextAction,
    weakAreas: weakAreasList,
    learningProgress,
    recentActivity: slicedRecent,
    trend: {
      current: hasEnough ? readinessRaw.readinessIndex : null,
      previous: mockStats.completedFullMocks.length >= 2 ? mockStats.completedFullMocks[1].score : null,
      delta: mockStats.improvement,
      hasEnoughData: hasEnough,
      labelText: mockStats.improvementText,
    },
    isLoading: false,
    refresh: callbacks?.refresh || (() => {}),
  };
}
