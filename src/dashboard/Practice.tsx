import {
  MedatExamHeader,
  MedatQuestionWorkspace,
  MedatQuestionPalette,
  MedatSubmitModal,
  MedatPauseModal,
  MedatShortcutsModal,
  MedatScratchpadModal,
  MedatReviewView,
  PracticeResultView,
  MistakesHubView,
  MistakeDrillResultView,
  getTaskRules,
} from "../simulator";


import { useCallback, useEffect, useMemo, useState, useRef, type CSSProperties } from "react";

import { toast, track } from "../lib/core";
import {
  canAccessBmsChapter,
  canAccessTvSimulation,
  canAccessKffSimulation,
  isKffChapter,
  canAccessSekSimulation,
  isSekChapter,
  isBmsFreeChapter,
  isBmsChapter,
  FREE_BMS_CHAPTER_IDS,
} from "../lib/bmsAccessControl";
import BmsProUpgradeModal from "../components/BmsProUpgradeModal";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFlame,
  IconHeart,
  IconPuzzle,
  IconTarget,
} from "../lib/icons";
import {
  getSectionsForExam,
  type SectionCode,
} from "../content/medat/config";
import {
  DIconBookmark,
  DIconBookmarkFilled,
  DIconBook,
  DIconDna,
  DIconLock,
  DIconRefresh,
  DIconZap,
} from "./icons";
import { TvSectionHub } from "./TvSectionHub";
import { FzSectionHub } from "./FzSectionHub";
import { ZfSectionHub } from "./ZfSectionHub";
import { WfSectionHub } from "./WfSectionHub";
import { GmSectionHub } from "./GmSectionHub";
import { IeSectionHub } from "./IeSectionHub";
import { ErSectionHub } from "./ErSectionHub";
import { EeSectionHub } from "./EeSectionHub";
import { SeSectionHub } from "./SeSectionHub";
import { GmSimulationRunner } from "../simulator/gm/GmSimulationRunner";
import { GmResultView } from "../simulator/gm/GmResultView";
import { ALL_GM_SIMULATIONS } from "../data/questions/gm";
import { usePractice } from "./practiceContext";
import {
  CHAPTERS,
  CHAPTER_MASTERY_THRESHOLD,
  SUBJECTS,
  buildQuestionsForSet,
  type Chapter,
  type NormalizedQuestion,
  type PracticeSet,
} from "./practiceData";
import type { PracticeSeed, Screen } from "./Shell";

const SEC_ICONS: Record<SectionCode, (p: { className?: string }) => JSX.Element> = {
  BMS: DIconDna,
  KFF: IconPuzzle,
  TV: DIconBook,
  SEK: IconHeart,
  MF: IconTarget,
};

const SET_ICONS: Record<number, string> = {
  1: "🌱", // Grundlagen
  2: "🎯", // Core Practice
  3: "💡", // Application
  4: "⚡", // Timed Practice
  5: "👑", // Mastery Checkpoint
};

export default function Practice({
  seed,
  offline,
  onNav,
}: {
  seed?: PracticeSeed;
  offline?: boolean;
  onNav?: (s: Screen, seed?: PracticeSeed) => void;
}) {
  const {
    userProfile,
    questions,
    answers,
    attemptHistory,
    bookmarks,
    wrong,

    recordBatchAnswers,
    toggleBookmark,
    getChapterStats,
    getSubjectStats,
    getChapterSetsWithStatus,
    getActiveSetForChapter,
    submitSetAttempt,
    setIsResultPage,
  } = usePractice();

  // Active section filtered by exam type
  const availableSections = useMemo(
    () => getSectionsForExam(userProfile.examType),
    [userProfile.examType]
  );

  // Hub Navigation State
  const [activePracticeTab, setActivePracticeTab] = useState<
    "sections" | "bookmarks" | "mistakes"
  >("sections");
  const [activeSection, setActiveSection] = useState<SectionCode>(
    seed?.section || availableSections[0]?.code || "BMS"
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
    seed?.subjectId || null
  );
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(
    seed?.chapterId || null
  );

  // Active Practice Solving Session State
  const [activeSet, setActiveSet] = useState<PracticeSet | null>(null);
  const [activeQuestionList, setActiveQuestionList] = useState<NormalizedQuestion[] | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [visitedQuestions, setVisitedQuestions] = useState<Set<string>>(new Set());
  const [sessionStartTime, setSessionStartTime] = useState<number>(0);
  const [sessionElapsedSeconds, setSessionElapsedSeconds] = useState<number>(0);
  const [sessionMerkphaseSeconds, setSessionMerkphaseSeconds] = useState<number>(8 * 60);

  // Modals & Sub-Screens
  const [mobileOverviewOpen, setMobileOverviewOpen] = useState<boolean>(false);
  const [showScratchpadModal, setShowScratchpadModal] = useState<boolean>(false);
  const [showLeaveModal, setShowLeaveModal] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [showShortcutsModal, setShowShortcutsModal] = useState<boolean>(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState<boolean>(false);
  const [showQuestionPaperModal, setShowQuestionPaperModal] = useState<boolean>(false);
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);
  const [showReviewScreen, setShowReviewScreen] = useState<boolean>(false);
  const [showMistakesHub, setShowMistakesHub] = useState<boolean>(
    seed?.mode === "mistakes" || seed?.statusFilter === "falsch"
  );
  const [reviewFilter, setReviewFilter] = useState<"all" | "correct" | "incorrect" | "bookmarked">(
    "all"
  );
  const [reviewQIndex, setReviewQIndex] = useState<number>(0);

  // Pro Upgrade Modal State for Locked BMS Chapters
  const [lockedModalChapter, setLockedModalChapter] = useState<{
    id: string;
    title: string;
    subjectId?: string;
    section?: string;
  } | null>(null);

  // Timed Mode State (for Set 4/5 or timed practice)
  const [timerSeconds, setTimerSeconds] = useState<number>(45);
  const [isTimedMode, setIsTimedMode] = useState<boolean>(false);
  const [isUntimedOverride, setIsUntimedOverride] = useState<boolean>(false);
  const [timedOutQuestionIds, setTimedOutQuestionIds] = useState<Set<string>>(new Set());
  const hasAutoSubmittedTimeoutRef = useRef<boolean>(false);

  // Determine if active session is Textverständnis (TV)
  const isTvSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "tv-scipass" ||
      activeSet?.section === "TV" ||
      activeQuestionList?.[0]?.section === "TV"
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Figuren zusammensetzen (FZ)
  const isFzSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "kff-fig-l1" ||
      activeSet?.chapterId === "kff-fig" ||
      activeQuestionList?.[0]?.subjectId === "kff-fig" ||
      activeQuestionList?.[0]?.chapterId === "kff-fig-l1" ||
      activeQuestionList?.[0]?.concept === "Figuren zusammensetzen"
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Zahlenfolgen (ZF)
  const isZfSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "kff-num-arith" ||
      activeSet?.chapterId === "kff-num" ||
      activeSet?.chapterId === "kff-num-l1" ||
      activeQuestionList?.[0]?.subjectId === "kff-num" ||
      activeQuestionList?.[0]?.chapterId === "kff-num-arith" ||
      activeQuestionList?.[0]?.concept === "Zahlenfolgen" ||
      activeQuestionList?.[0]?.tags?.includes("Zahlenfolgen") ||
      Boolean((activeQuestionList?.[0] as any)?.zfData)
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Gedächtnis & Merkfähigkeit (GM)
  const isGmSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "kff-mem" ||
      activeSet?.chapterId === "kff-mem-pass" ||
      activeSet?.chapterId === "kff-mem-sim" ||
      activeQuestionList?.[0]?.subjectId === "kff-mem" ||
      activeQuestionList?.[0]?.chapterId === "kff-mem-pass" ||
      activeQuestionList?.[0]?.concept === "Gedächtnis & Merkfähigkeit" ||
      Boolean((activeQuestionList?.[0] as any)?.gmData)
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Wortflüssigkeit (WF)
  const isWfSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "kff-wf-basic" ||
      activeSet?.chapterId === "kff-wf" ||
      activeSet?.chapterId === "kff-wf-sim" ||
      activeQuestionList?.[0]?.subjectId === "kff-wf" ||
      activeQuestionList?.[0]?.chapterId === "kff-wf-basic" ||
      activeQuestionList?.[0]?.concept === "Wortflüssigkeit" ||
      Boolean((activeQuestionList?.[0] as any)?.wfData)
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Implikationen erkennen (IE) [Nur MedAT-H]
  const isIeSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "kff-imp-syll" ||
      activeSet?.chapterId === "kff-imp" ||
      activeSet?.chapterId === "kff-imp-sim" ||
      activeQuestionList?.[0]?.subjectId === "kff-imp" ||
      activeQuestionList?.[0]?.chapterId === "kff-imp-syll" ||
      Boolean((activeQuestionList?.[0] as any)?.ieData)
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Emotionen regulieren (ER) [MedAT-H & MedAT-Z]
  const isErSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "sek-emo-reg" ||
      activeSet?.chapterId === "sek-reg-stress" ||
      activeSet?.chapterId === "sek-er" ||
      activeQuestionList?.[0]?.subjectId === "sek-emo-reg" ||
      activeQuestionList?.[0]?.chapterId === "sek-reg-stress" ||
      Boolean((activeQuestionList?.[0] as any)?.erData)
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Emotionen erkennen (EE) [MedAT-H & MedAT-Z]
  const isEeSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "sek-emo-rec" ||
      activeSet?.chapterId === "sek-rec-face" ||
      activeSet?.chapterId === "sek-ee" ||
      activeQuestionList?.[0]?.subjectId === "sek-emo-rec" ||
      activeQuestionList?.[0]?.chapterId === "sek-rec-face" ||
      Boolean((activeQuestionList?.[0] as any)?.eeData)
    );
  }, [activeSet, activeQuestionList]);

  // Determine if active session is Soziales Entscheiden (SE) [MedAT-H & MedAT-Z]
  const isSeSession = useMemo(() => {
    return Boolean(
      activeSet?.chapterId === "sek-soc-dec" ||
      activeSet?.chapterId === "sek-dec-ethics" ||
      activeSet?.chapterId === "sek-se" ||
      activeQuestionList?.[0]?.subjectId === "sek-soc-dec" ||
      activeQuestionList?.[0]?.chapterId === "sek-dec-ethics" ||
      Boolean((activeQuestionList?.[0] as any)?.seData)
    );
  }, [activeSet, activeQuestionList]);

  // V2.0 Performance Intelligence Engine (100% accurate, derived from real session data)
  const practiceMetrics = useMemo(() => {
    const totalQuestionsInPool = questions.length;
    const totalAnswered = Object.keys(answers).length;
    const wrongCount = wrong.size;
    const correctCount = Math.max(0, totalAnswered - wrongCount);
    const poolCoveragePct = totalQuestionsInPool > 0 ? Math.round((totalAnswered / totalQuestionsInPool) * 100) : 0;
    const avgAccuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    const allChapterIds = Object.keys(CHAPTERS);
    const totalChapters = allChapterIds.length;
    let masteredCount = 0;
    let inProgressCount = 0;

    allChapterIds.forEach((cid) => {
      const stats = getChapterStats(cid);
      if (stats.status === "mastered") {
        masteredCount++;
      } else if (stats.completedSetsCount > 0 || stats.answeredCount > 0) {
        inProgressCount++;
      }
    });

    const openChaptersCount = Math.max(0, totalChapters - masteredCount - inProgressCount);
    const chapterMasteryPct = totalChapters > 0 ? Math.round((masteredCount / totalChapters) * 100) : 0;

    // Accuracy tier & delta against 75% MedAT Cutoff
    const accuracyTier = (() => {
      if (totalAnswered === 0) return { label: "KEINE DATEN", color: "slate", delta: "Ziel: ≥ 75%" };
      if (avgAccuracy >= 85) return { label: "EXZELLENT", color: "emerald", delta: `+${avgAccuracy - 75}% über Cutoff` };
      if (avgAccuracy >= 75) return { label: "ZULASSUNGSREIF", color: "emerald", delta: `+${avgAccuracy - 75}% über Cutoff` };
      if (avgAccuracy >= 60) return { label: "SOLIDE BASIS", color: "blue", delta: `${avgAccuracy - 75}% bis Cutoff` };
      return { label: "IM AUFBAU", color: "amber", delta: `${avgAccuracy - 75}% bis Cutoff` };
    })();

    // Count affected chapters with errors
    const affectedChapterIds = new Set<string>();
    wrong.forEach((qid) => {
      const q = questions.find((item) => item.id === qid);
      if (q?.chapterId) affectedChapterIds.add(q.chapterId);
    });

    return {
      totalQuestionsInPool,
      totalAnswered,
      wrongCount,
      correctCount,
      poolCoveragePct,
      avgAccuracy,
      accuracyTier,
      totalChapters,
      masteredCount,
      inProgressCount,
      openChaptersCount,
      chapterMasteryPct,
      affectedChaptersCount: affectedChapterIds.size,
    };
  }, [answers, wrong, questions, getChapterStats]);


  // Start practicing a set (25 questions for BMS, 12 questions for TV)
  const startPracticeSet = useCallback((set: PracticeSet, forceUntimed = false) => {
    // Pro access check for TV simulations (Only Simulation 1 is free, Simulations 2–5 require Vollzugang)
    if (set.chapterId === "tv-scipass" || set.id.startsWith("tv-") || set.section === "TV") {
      const tvAccess = canAccessTvSimulation(userProfile, set.order);
      if (!tvAccess.allowed) {
        track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "tv" });
        track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "tv" });
        setLockedModalChapter({
          id: set.id,
          title: set.title,
          subjectId: "tv",
          section: "TV",
        });
        toast("Diese TV-Simulation erfordert den MedAT-Vollzugang.", "info");
        return;
      }
    }

    // Pro access check for KFF simulations (Only Simulation 1 is free per subtest, Simulations 2–5 require Vollzugang)
    if (
      (set.chapterId && isKffChapter(set.chapterId)) ||
      set.chapterId?.startsWith("kff-") ||
      set.id.startsWith("kff-") ||
      set.section === "KFF"
    ) {
      const kffAccess = canAccessKffSimulation(userProfile, set.chapterId, set.order);
      if (!kffAccess.allowed) {
        track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: set.chapterId });
        track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: set.chapterId });
        setLockedModalChapter({
          id: set.id,
          title: set.title,
          subjectId: set.chapterId,
          section: "KFF",
        });
        toast("Diese KFF-Simulation erfordert den MedAT-Vollzugang.", "info");
        return;
      }
    }

    // Pro access check for SEK simulations (Only Simulation 1 is free per subtest, Simulations 2–5 require Vollzugang)
    if (
      (set.chapterId && isSekChapter(set.chapterId)) ||
      set.chapterId?.startsWith("sek-") ||
      set.id.startsWith("sek-") ||
      set.section === "SEK"
    ) {
      const sekAccess = canAccessSekSimulation(userProfile, set.chapterId, set.order);
      if (!sekAccess.allowed) {
        track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: set.chapterId });
        track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: set.chapterId });
        setLockedModalChapter({
          id: set.id,
          title: set.title,
          subjectId: set.chapterId,
          section: "SEK",
        });
        toast("Diese SEK-Simulation erfordert den MedAT-Vollzugang.", "info");
        return;
      }
    }

    // Pro access check for BMS chapters
    if (set.chapterId) {
      const access = canAccessBmsChapter(userProfile, set.chapterId);
      if (!access.allowed) {
        const ch = CHAPTERS[set.chapterId];
        track("bms_locked_chapter_clicked", { chapterId: set.chapterId, subjectId: ch?.subjectId });
        track("bms_pro_upgrade_viewed", { chapterId: set.chapterId, subjectId: ch?.subjectId });
        setLockedModalChapter({
          id: set.chapterId,
          title: ch?.title || set.title,
          subjectId: ch?.subjectId,
          section: ch?.section,
        });
        toast("Dieses BMS-Kapitel erfordert den MedAT-Vollzugang.", "info");
        return;
      }
    }

    const preparedQuestions = buildQuestionsForSet(set.chapterId, set.order, questions);

    // Check for saved draft
    let initialAnswers: Record<string, number> = {};
    let initialIndex = 0;
    let initialElapsed = 0;

    try {
      const savedDraftRaw = localStorage.getItem(`medat_inprogress_${set.id}`);
      if (savedDraftRaw) {
        const parsed = JSON.parse(savedDraftRaw);
        if (parsed.answers && typeof parsed.answers === "object") {
          const validIds = new Set(preparedQuestions.map((q) => q.id));
          const filteredAnswers: Record<string, number> = {};
          for (const [qid, ans] of Object.entries(parsed.answers)) {
            if (validIds.has(qid) && typeof ans === "number") {
              filteredAnswers[qid] = ans;
            }
          }
          if (Object.keys(filteredAnswers).length > 0) {
            initialAnswers = filteredAnswers;
            initialIndex = Math.min(parsed.lastIndex || 0, preparedQuestions.length - 1);
            initialElapsed = parsed.elapsed || 0;
            toast("Gespeicherten Übungsstand fortgesetzt.", "info");
          }
        }
      }
    } catch (e) {
      // ignore
    }

    const shouldBeTimed = !forceUntimed && set.mode === "timed";

    setActiveSet(set);
    setActiveQuestionList(preparedQuestions);
    setCurrentQIndex(initialIndex);
    setSessionAnswers(initialAnswers);
    setMarkedForReview(new Set());
    setTimedOutQuestionIds(new Set());
    setVisitedQuestions(new Set([preparedQuestions[initialIndex]?.id || ""]));
    setSessionStartTime(Date.now() - initialElapsed * 1000);
    setSessionElapsedSeconds(initialElapsed);
    hasAutoSubmittedTimeoutRef.current = false;
    setIsUntimedOverride(forceUntimed);
    setIsTimedMode(shouldBeTimed);
    setShowLeaveModal(false);
    setShowSubmitModal(false);
    setShowResultScreen(false);
    setShowReviewScreen(false);
  }, [questions, userProfile]);

  // Start targeted mistake review for a specific chapter
  const startMistakeReview = useCallback((chapterId: string) => {
    // Pro access check for BMS chapters
    const access = canAccessBmsChapter(userProfile, chapterId);
    if (!access.allowed) {
      const ch = CHAPTERS[chapterId];
      track("bms_locked_chapter_clicked", { chapterId, subjectId: ch?.subjectId });
      track("bms_pro_upgrade_viewed", { chapterId, subjectId: ch?.subjectId });
      setLockedModalChapter({
        id: chapterId,
        title: ch?.title || "Fehler-Wiederholung",
        subjectId: ch?.subjectId,
        section: ch?.section,
      });
      toast("Die Fehler-Wiederholung für dieses Kapitel erfordert den MedAT-Vollzugang.", "info");
      return;
    }

    const chapterQuestions = questions.filter(
      (q) =>
        (q.chapterId === chapterId || q.chapterId.startsWith(chapterId)) &&
        (wrong.has(q.id) || Array.from(wrong).some((wid) => wid.startsWith(q.id)))
    );
    if (chapterQuestions.length === 0) {
      toast("Keine offenen Fehler in diesem Kapitel vorhanden!", "success");
      return;
    }

    const reviewSet: PracticeSet = {
      id: `${chapterId}-mistakes`,
      chapterId,
      order: 0,
      title: "⚡ Fehler-Wiederholung",
      subtitle: `${chapterQuestions.length} offene Schwachstellen`,
      description: "Gezieltes Training deiner bisher falsch beantworteten Fragen.",
      mode: "untimed",
      questionCount: chapterQuestions.length,
      focus: "Schwachstellen-Beseitigung",
    };


    setActiveSet(reviewSet);
    setActiveQuestionList(chapterQuestions);
    setCurrentQIndex(0);
    setSessionAnswers({});
    setMarkedForReview(new Set());
    setTimedOutQuestionIds(new Set());
    setVisitedQuestions(new Set([chapterQuestions[0]?.id || ""]));
    setSessionStartTime(Date.now());
    setSessionElapsedSeconds(0);
    hasAutoSubmittedTimeoutRef.current = false;
    setShowLeaveModal(false);
    setShowSubmitModal(false);
    setShowResultScreen(false);
    setShowReviewScreen(false);
  }, [questions, wrong, userProfile]);

  // Start global mistake review across all chapters
  const startAllMistakesReview = useCallback(() => {
    const mistakeQuestions = questions.filter((q) => {
      const isMistake = wrong.has(q.id) || Array.from(wrong).some((wid) => wid.startsWith(q.id));
      if (!isMistake) return false;
      const chId = q.chapterId || "bio-01-zelle";
      return canAccessBmsChapter(userProfile, chId).allowed;
    });

    if (mistakeQuestions.length === 0) {
      const totalMistakesCount = questions.filter(
        (q) => wrong.has(q.id) || Array.from(wrong).some((wid) => wid.startsWith(q.id))
      ).length;

      if (totalMistakesCount > 0) {
        track("bms_locked_chapter_clicked", { chapterId: "all-mistakes", subjectId: "bms" });
        track("bms_pro_upgrade_viewed", { chapterId: "all-mistakes", subjectId: "bms" });
        setLockedModalChapter({
          id: "all-mistakes",
          title: "Fehler-Wiederholung (Gesperrte BMS-Kapitel)",
          subjectId: "bms",
          section: "BMS",
        });
        toast("Deine offenen Fehler liegen in gesperrten BMS-Kapiteln. Mit dem Vollzugang schaltest du alle frei!", "info");
        return;
      }

      toast("Keine offenen Fehler vorhanden! Alle Fragen gemeistert 🎉", "success");
      return;
    }


    const reviewSet: PracticeSet = {
      id: "global-mistakes",
      chapterId: mistakeQuestions[0]?.chapterId || "bio-01-zelle",
      order: 0,
      title: "⚡ Fehler-Wiederholung (Alle Fächer)",
      subtitle: `${mistakeQuestions.length} offene Schwachstellen`,
      description: "Gezieltes Training aller bisher falsch beantworteten Fragen.",
      mode: "untimed",
      questionCount: mistakeQuestions.length,
      focus: "Schwachstellen-Beseitigung",
    };

    setActiveSet(reviewSet);
    setActiveQuestionList(mistakeQuestions);
    setCurrentQIndex(0);
    setSessionAnswers({});
    setMarkedForReview(new Set());
    setTimedOutQuestionIds(new Set());
    setVisitedQuestions(new Set([mistakeQuestions[0]?.id || ""]));
    setSessionStartTime(Date.now());
    setSessionElapsedSeconds(0);
    hasAutoSubmittedTimeoutRef.current = false;
    setShowLeaveModal(false);
    setShowSubmitModal(false);
    setShowResultScreen(false);
    setShowReviewScreen(false);
  }, [questions, wrong, userProfile]);

  // Start single question targeted review
  const startSingleQuestionReview = useCallback((question: NormalizedQuestion) => {
    const reviewSet: PracticeSet = {
      id: `single-${question.id}`,
      chapterId: question.chapterId || "bio-01-zelle",
      order: 0,
      title: "⚡ Einzelfrage-Wiederholung",
      subtitle: question.topic || "Gezieltes Einzeltraining",
      description: "Gezieltes Training dieser Frage.",
      mode: "untimed",
      questionCount: 1,
      focus: "Schwachstellen-Beseitigung",
    };


    setActiveSet(reviewSet);
    setActiveQuestionList([question]);
    setCurrentQIndex(0);
    setSessionAnswers({});
    setMarkedForReview(new Set());
    setTimedOutQuestionIds(new Set());
    setVisitedQuestions(new Set([question.id]));
    setSessionStartTime(Date.now());
    setSessionElapsedSeconds(0);
    hasAutoSubmittedTimeoutRef.current = false;
    setShowLeaveModal(false);
    setShowSubmitModal(false);
    setShowResultScreen(false);
    setShowReviewScreen(false);
  }, []);

  // Sync incoming seed deep links
  useEffect(() => {
    if (!seed) return;

    if (seed.mode === "mistakes" || seed.statusFilter === "falsch") {
      setShowMistakesHub(true);
      return;
    }

    if (seed.section) setActiveSection(seed.section);
    if (seed.subjectId) setSelectedSubjectId(seed.subjectId);
    if (seed.chapterId) {
      const access = canAccessBmsChapter(userProfile, seed.chapterId);
      if (!access.allowed) {
        const ch = CHAPTERS[seed.chapterId];
        track("bms_locked_chapter_clicked", { chapterId: seed.chapterId, subjectId: ch?.subjectId });
        track("bms_pro_upgrade_viewed", { chapterId: seed.chapterId, subjectId: ch?.subjectId });
        setLockedModalChapter({
          id: seed.chapterId,
          title: ch?.title || "Gesperrtes Kapitel",
          subjectId: ch?.subjectId,
          section: ch?.section,
        });
        toast("Dieses BMS-Kapitel erfordert den MedAT-Vollzugang.", "info");
        return;
      }

      setSelectedChapterId(seed.chapterId);
      const ch = CHAPTERS[seed.chapterId];
      if (ch) {
        setActiveSection(ch.section);
        setSelectedSubjectId(ch.subjectId);
      }
    }
  }, [seed, userProfile]);



  // Sync result & review screen state with Shell header visibility
  useEffect(() => {
    const isResultOrReview = showResultScreen || showReviewScreen;
    setIsResultPage(isResultOrReview);
    return () => {
      setIsResultPage(false);
    };
  }, [showResultScreen, showReviewScreen, setIsResultPage]);

  // General Session Elapsed Timer
  useEffect(() => {
    if (!activeSet || showResultScreen || showReviewScreen || isGmSession) return;
    const interval = window.setInterval(() => {
      setSessionElapsedSeconds((s) => s + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [activeSet, showResultScreen, showReviewScreen, isGmSession]);

  // Track visited questions in live exam
  useEffect(() => {
    if (!activeSet || !activeQuestionList) return;
    const curQ = activeQuestionList[currentQIndex];
    if (curQ) {
      setVisitedQuestions((prev) => {
        const next = new Set(prev);
        next.add(curQ.id);
        return next;
      });
    }
  }, [currentQIndex, activeSet, activeQuestionList]);

  // Per-question countdown timer for timed mode (45s realistic MedAT pacing with strict lockout)
  // ONLY for BMS Timed Sprint (Set 4) - NOT for TV, FZ, ZF, WF, GM, IE or ER!
  useEffect(() => {
    if (isTvSession || isFzSession || isZfSession || isGmSession || isWfSession || isIeSession || isErSession || !isTimedMode || !activeQuestionList || showResultScreen || showReviewScreen) return;
    const interval = window.setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          const curQ = activeQuestionList[currentQIndex];
          if (curQ) {
            setTimedOutQuestionIds((prevSet) => {
              const nextSet = new Set(prevSet);
              nextSet.add(curQ.id);
              return nextSet;
            });
          }

          if (currentQIndex + 1 < activeQuestionList.length) {
            toast("⏱️ Zeit abgelaufen! Automatisch zur nächsten Frage.", "info");
            setCurrentQIndex((i) => i + 1);
            return 45;
          } else {
            toast("⏱️ Zeit abgelaufen! Prüfungsdurchlauf abgeschlossen.", "info");
            setShowSubmitModal(true);
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [isTvSession, isFzSession, isZfSession, isGmSession, isWfSession, isIeSession, isTimedMode, activeQuestionList, currentQIndex, showResultScreen, showReviewScreen]);

  // Section countdown for TV (35 minutes = 2100 seconds)
  useEffect(() => {
    if (!isTvSession || !isTimedMode || !activeSet || showResultScreen || showReviewScreen) return;
    if (sessionElapsedSeconds >= 35 * 60 && !hasAutoSubmittedTimeoutRef.current) {
      hasAutoSubmittedTimeoutRef.current = true;
      toast("⏱️ Die 35 Minuten für das Textverständnis sind abgelaufen! Prüfungsdurchlauf abgeschlossen.", "info");
      setShowSubmitModal(true);
    }
  }, [isTvSession, isTimedMode, activeSet, sessionElapsedSeconds, showResultScreen, showReviewScreen]);

  // Section countdown for FZ (20 minutes = 1200 seconds)
  useEffect(() => {
    if (!isFzSession || !isTimedMode || !activeSet || showResultScreen || showReviewScreen) return;
    if (sessionElapsedSeconds >= 20 * 60 && !hasAutoSubmittedTimeoutRef.current) {
      hasAutoSubmittedTimeoutRef.current = true;
      toast("⏱️ Die 20 Minuten für Figuren zusammensetzen sind abgelaufen! Prüfungsdurchlauf abgeschlossen.", "info");
      setShowSubmitModal(true);
    }
  }, [isFzSession, isTimedMode, activeSet, sessionElapsedSeconds, showResultScreen, showReviewScreen]);

  // Section countdown for ZF (15 minutes = 900 seconds)
  useEffect(() => {
    if (!isZfSession || !isTimedMode || !activeSet || showResultScreen || showReviewScreen) return;
    if (sessionElapsedSeconds >= 15 * 60 && !hasAutoSubmittedTimeoutRef.current) {
      hasAutoSubmittedTimeoutRef.current = true;
      toast("⏱️ Die 15 Minuten für Zahlenfolgen sind abgelaufen! Prüfungsdurchlauf abgeschlossen.", "info");
      setShowSubmitModal(true);
    }
  }, [isZfSession, isTimedMode, activeSet, sessionElapsedSeconds, showResultScreen, showReviewScreen]);

  // Section countdown for WF (20 minutes = 1200 seconds)
  useEffect(() => {
    if (!isWfSession || !isTimedMode || !activeSet || showResultScreen || showReviewScreen) return;
    if (sessionElapsedSeconds >= 20 * 60 && !hasAutoSubmittedTimeoutRef.current) {
      hasAutoSubmittedTimeoutRef.current = true;
      toast("⏱️ Die 20 Minuten für Wortflüssigkeit sind abgelaufen! Prüfungsdurchlauf abgeschlossen.", "info");
      setShowSubmitModal(true);
    }
  }, [isWfSession, isTimedMode, activeSet, sessionElapsedSeconds, showResultScreen, showReviewScreen]);

  // Section countdown for IE (10 minutes = 600 seconds)
  useEffect(() => {
    if (!isIeSession || !isTimedMode || !activeSet || showResultScreen || showReviewScreen) return;
    if (sessionElapsedSeconds >= 10 * 60 && !hasAutoSubmittedTimeoutRef.current) {
      hasAutoSubmittedTimeoutRef.current = true;
      toast("⏱️ Die 10 Minuten für Implikationen erkennen sind abgelaufen! Prüfungsdurchlauf abgeschlossen.", "info");
      setShowSubmitModal(true);
    }
  }, [isIeSession, isTimedMode, activeSet, sessionElapsedSeconds, showResultScreen, showReviewScreen]);

  // Section countdown for ER (18 minutes = 1080 seconds)
  useEffect(() => {
    if (!isErSession || !isTimedMode || !activeSet || showResultScreen || showReviewScreen) return;
    if (sessionElapsedSeconds >= 18 * 60 && !hasAutoSubmittedTimeoutRef.current) {
      hasAutoSubmittedTimeoutRef.current = true;
      toast("⏱️ Die 18 Minuten für Emotionen regulieren sind abgelaufen! Prüfungsdurchlauf abgeschlossen.", "info");
      setShowSubmitModal(true);
    }
  }, [isErSession, isTimedMode, activeSet, sessionElapsedSeconds, showResultScreen, showReviewScreen]);

  // Section countdown for EE & SE (21 minutes = 1260 seconds)
  useEffect(() => {
    if ((!isEeSession && !isSeSession) || !isTimedMode || !activeSet || showResultScreen || showReviewScreen) return;
    if (sessionElapsedSeconds >= 21 * 60 && !hasAutoSubmittedTimeoutRef.current) {
      hasAutoSubmittedTimeoutRef.current = true;
      const subName = isSeSession ? "Soziales Entscheiden" : "Emotionen erkennen";
      toast(`⏱️ Die 21 Minuten für ${subName} sind abgelaufen! Prüfungsdurchlauf abgeschlossen.`, "info");
      setShowSubmitModal(true);
    }
  }, [isEeSession, isSeSession, isTimedMode, activeSet, sessionElapsedSeconds, showResultScreen, showReviewScreen]);

  // Reset per-question timer when question index changes (for BMS Set 4 only)
  useEffect(() => {
    if (isTvSession || isFzSession || isZfSession || isGmSession || isWfSession || isIeSession || isErSession || isEeSession || isSeSession) return;
    if (activeSet?.mode === "timed" && !isUntimedOverride) {
      setIsTimedMode(true);
      const curQ = activeQuestionList?.[currentQIndex];
      const isCurTimedOut = curQ ? timedOutQuestionIds.has(curQ.id) : false;
      if (isCurTimedOut) {
        setTimerSeconds(0);
      } else {
        setTimerSeconds(45);
      }
    } else {
      setIsTimedMode(false);
    }
  }, [currentQIndex, activeSet, activeQuestionList, timedOutQuestionIds, isTvSession, isFzSession, isZfSession, isGmSession, isWfSession, isIeSession, isErSession, isEeSession, isSeSession, isUntimedOverride]);

  // Auto-save in-progress draft to localStorage
  useEffect(() => {
    if (!activeSet || showResultScreen || showReviewScreen || isGmSession) return;
    if (Object.keys(sessionAnswers).length > 0) {
      try {
        localStorage.setItem(
          `medat_inprogress_${activeSet.id}`,
          JSON.stringify({
            answers: sessionAnswers,
            lastIndex: currentQIndex,
            elapsed: sessionElapsedSeconds,
            timestamp: Date.now(),
          })
        );
      } catch (e) {
        // ignore storage errors
      }
    }
  }, [sessionAnswers, currentQIndex, sessionElapsedSeconds, activeSet, showResultScreen, showReviewScreen, isGmSession]);

  // Keyboard navigation during solving (A..E, 1..5, Arrow keys, M, Enter, ?)
  useEffect(() => {
    if (!activeQuestionList || showResultScreen || showReviewScreen || showSubmitModal || showLeaveModal || isGmSession) return;
    const onKey = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      const currentQ = activeQuestionList[currentQIndex];
      if (!currentQ) return;

      if (["1", "a", "A"].includes(e.key)) {
        handleSelectOption(currentQ.id, 0);
      } else if (["2", "b", "B"].includes(e.key)) {
        handleSelectOption(currentQ.id, 1);
      } else if (["3", "c", "C"].includes(e.key)) {
        handleSelectOption(currentQ.id, 2);
      } else if (["4", "d", "D"].includes(e.key)) {
        handleSelectOption(currentQ.id, 3);
      } else if (["5", "e", "E"].includes(e.key)) {
        if (!isErSession) {
          handleSelectOption(currentQ.id, 4);
        }
      } else if (e.key === "ArrowRight") {
        handleNextQuestion();
      } else if (e.key === "ArrowLeft") {
        handlePrevQuestion();
      } else if (e.key === "m" || e.key === "M") {
        toggleMarkForReview(currentQ.id);
      } else if (e.key === "Enter") {
        if (currentQIndex === activeQuestionList.length - 1) {
          setShowSubmitModal(true);
        } else {
          handleNextQuestion();
        }
      } else if (e.key === "?") {
        setShowShortcutsModal((prev) => !prev);
      } else if (e.key === "Escape") {
        setShowShortcutsModal(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeQuestionList, currentQIndex, showResultScreen, showReviewScreen, showSubmitModal, showLeaveModal, isTimedMode, timedOutQuestionIds, isGmSession, isErSession, isEeSession, isSeSession]);

  // Option selection
  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (isTimedMode && timedOutQuestionIds.has(questionId)) {
      toast("Zeit für diese Frage ist abgelaufen. Keine Änderung mehr möglich.", "info");
      return;
    }
    setSessionAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleClearOption = (questionId: string) => {
    setSessionAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const toggleMarkForReview = (questionId: string) => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
    toggleBookmark(questionId);
  };

  const handleMarkForReviewAndNext = (questionId: string) => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      next.add(questionId);
      return next;
    });
    toggleBookmark(questionId);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (!activeQuestionList) return;
    if (currentQIndex + 1 < activeQuestionList.length) {
      setCurrentQIndex((i) => i + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrevQuestion = () => {
    if (!isTvSession && !isErSession && !isEeSession && !isSeSession && !isIeSession && !isFzSession && !isZfSession && !isWfSession && (isTimedMode || activeSet?.order === 4 || activeSet?.mode === "timed")) {
      toast("Im Timed Sprint kann nicht zu vorherigen Fragen zurückgekehrt werden.", "info");
      return;
    }
    if (currentQIndex > 0) {
      setCurrentQIndex((i) => i - 1);
    }
  };


  // Final submission action
  const handleConfirmSubmit = () => {
    if (!activeSet || !activeQuestionList) return;

    setShowSubmitModal(false);

    // Calculate actual score from answers
    const batchToRecord: { questionId: string; selected: number }[] = [];
    let correctCount = 0;

    activeQuestionList.forEach((q) => {
      const selected = sessionAnswers[q.id];
      if (selected !== undefined) {
        batchToRecord.push({ questionId: q.id, selected });
        if (selected === q.correct) {
          correctCount++;
        }
      }
    });

    const totalCount = activeQuestionList.length;
    const timeSpent = Math.max(1, sessionElapsedSeconds);

    // Record all question attempts in batch to state & Supabase
    recordBatchAnswers(batchToRecord);

    // Submit set attempt
    if (activeSet.order > 0) {
      submitSetAttempt(activeSet.id, activeSet.chapterId, correctCount, totalCount, timeSpent);
    }

    // Clean up in-progress draft
    try {
      localStorage.removeItem(`medat_inprogress_${activeSet.id}`);
    } catch (e) {
      // ignore
    }

    setShowResultScreen(true);
  };

  // Calculated Results Summary for Active Set
  const sessionResultData = useMemo(() => {
    if (!activeSet || !activeQuestionList) return null;

    const total = activeQuestionList.length;
    let correct = 0;
    let answered = 0;
    const topicStats: Record<string, { total: number; correct: number }> = {};
    const questionReviewItems: {
      question: NormalizedQuestion;
      selected: number | undefined;
      isCorrect: boolean;
    }[] = [];

    let timedOutCount = 0;

    activeQuestionList.forEach((q) => {
      const selected = sessionAnswers[q.id];
      const isAns = selected !== undefined;
      if (isAns) answered++;
      const isRight = isAns && selected === q.correct;
      if (isRight) correct++;
      if (!isAns && timedOutQuestionIds.has(q.id)) timedOutCount++;

      const topicName = q.topic || "Allgemeines";
      if (!topicStats[topicName]) {
        topicStats[topicName] = { total: 0, correct: 0 };
      }
      topicStats[topicName].total++;
      if (isRight) topicStats[topicName].correct++;

      questionReviewItems.push({
        question: q,
        selected,
        isCorrect: isRight,
      });
    });

    const accuracy = Math.round((correct / Math.max(total, 1)) * 100);
    const incorrect = answered - correct; // only answered-but-wrong, not skipped

    const mins = Math.floor(sessionElapsedSeconds / 60);
    const secs = sessionElapsedSeconds % 60;
    const isMastery = activeSet.order >= 5;
    const passed = isMastery ? accuracy >= CHAPTER_MASTERY_THRESHOLD * 100 : accuracy >= 60;

    const strongTopics = Object.entries(topicStats)
      .filter(([_, s]) => s.total >= 1 && s.correct === s.total)
      .map(([name]) => name);

    const weakTopics = Object.entries(topicStats)
      .filter(([_, s]) => s.correct < s.total)
      .map(([name, s]) => ({ name, mistakes: s.total - s.correct }));

    return {
      total,
      answered,
      correct,
      incorrect,
      timedOutCount,
      accuracy,
      mins,
      secs,
      isMastery,
      passed,
      topicStats,
      strongTopics,
      weakTopics,
      questionReviewItems,
    };
  }, [activeSet, activeQuestionList, sessionAnswers, sessionElapsedSeconds, timedOutQuestionIds]);

  /* =================================================================
     RENDER 0: Mistakes Hub & Error Analysis (Fehler-Zentrale)
     ================================================================= */
  if (showMistakesHub && !activeQuestionList) {
    const wrongQuestions = questions.filter(
      (q) => wrong.has(q.id) || Array.from(wrong).some((wid) => wid.startsWith(q.id))
    );
    return (

      <MistakesHubView
        wrongQuestions={wrongQuestions}
        attemptHistory={attemptHistory}
        bookmarks={bookmarks}
        onToggleBookmark={toggleBookmark}
        onStartAllMistakes={() => {
          setShowMistakesHub(false);
          startAllMistakesReview();
        }}
        onStartChapterMistakes={(chapterId) => {
          setShowMistakesHub(false);
          startMistakeReview(chapterId);
        }}
        onStartSingleQuestion={(question) => {
          setShowMistakesHub(false);
          startSingleQuestionReview(question);
        }}
        onBack={() => {
          setShowMistakesHub(false);
          setSelectedChapterId(null);
        }}
      />
    );
  }

  /* =================================================================
     RENDER 1: Question Review Mode (Post-Submission Deep Dive)
     ================================================================= */

  if (showReviewScreen && activeSet && sessionResultData && activeQuestionList) {
    return (
      <MedatReviewView
        title={`${activeSet.title} (${CHAPTERS[activeSet.chapterId]?.title || "Kapitel"})`}
        items={sessionResultData.questionReviewItems}
        bookmarks={bookmarks}
        onToggleBookmark={toggleBookmark}
        onBackToResults={() => setShowReviewScreen(false)}
      />
    );
  }

  /* =================================================================
     RENDER 2: Set Result Screen / Dedicated Mistake Drill Results
     ================================================================= */
  if (showResultScreen && activeSet && sessionResultData) {
    // Dedicated GM Simulation Result View (Section 20 of MedAT specification)
    if (isGmSession && activeSet.order > 0) {
      return (
        <GmResultView
          simulationNumber={activeSet.order}
          simTitle={activeSet.title}
          correctCount={sessionResultData.correct}
          totalCount={sessionResultData.total}
          accuracyPct={sessionResultData.accuracy}
          elapsedSeconds={sessionElapsedSeconds}
          merkphaseSeconds={sessionMerkphaseSeconds}
          questionReviewItems={sessionResultData.questionReviewItems}
          onOpenReview={() => setShowReviewScreen(true)}
          onRepeat={() => {
            startPracticeSet(activeSet);
            setShowResultScreen(false);
          }}
          onBack={() => {
            setActiveQuestionList(null);
            setActiveSet(null);
            setShowResultScreen(false);
          }}
          onNextSim={
            activeSet.order < ALL_GM_SIMULATIONS.length
              ? () => {
                  const nextSets = getChapterSetsWithStatus("kff-mem-pass");
                  const nextSet = nextSets.find((s) => s.order === activeSet.order + 1);
                  if (nextSet) {
                    startPracticeSet(nextSet);
                    setShowResultScreen(false);
                  }
                }
              : undefined
          }
        />
      );
    }

    const chapterMeta = CHAPTERS[activeSet.chapterId];

    // DEDICATED ERROR DRILL RESULT SCREEN
    if (activeSet.order === 0 || activeSet.id.includes("mistakes") || activeSet.id.startsWith("single-")) {
      const remainingMistakes = sessionResultData.questionReviewItems.filter((item) => !item.isCorrect);

      return (
        <MistakeDrillResultView
          chapterTitle={chapterMeta?.title || activeSet.subtitle || "Thema"}
          totalErrors={sessionResultData.total}
          fixedCount={sessionResultData.correct}
          remainingCount={Math.max(0, sessionResultData.total - sessionResultData.correct)}
          elapsedSeconds={sessionElapsedSeconds}

          questionReviewItems={sessionResultData.questionReviewItems}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          onRepeatRemaining={() => {
            if (remainingMistakes.length > 0) {
              const remainingQuestions = remainingMistakes.map((item) => item.question);
              const retrySet: PracticeSet = {
                ...activeSet,
                id: `${activeSet.chapterId}-mistakes-retry-${Date.now()}`,
                questionCount: remainingQuestions.length,
                subtitle: `${remainingQuestions.length} verbleibende Fehler`,
              };
              setActiveSet(retrySet);
              setActiveQuestionList(remainingQuestions);
              setCurrentQIndex(0);
              setSessionAnswers({});
              setMarkedForReview(new Set());
              setVisitedQuestions(new Set([remainingQuestions[0]?.id || ""]));
              setSessionStartTime(Date.now());
              setSessionElapsedSeconds(0);
              setShowResultScreen(false);
              setShowReviewScreen(false);
            } else {
              toast("Alle Fehler erfolgreich behoben 🎉", "success");
              setShowResultScreen(false);
              setShowMistakesHub(true);
            }
          }}
          onRepeatAll={() => {
            startPracticeSet(activeSet);
            setShowResultScreen(false);
          }}
          onOpenReview={() => setShowReviewScreen(true)}
          onBackToMistakesHub={() => {
            setActiveQuestionList(null);
            setActiveSet(null);
            setShowResultScreen(false);
            setShowMistakesHub(true);
          }}
        />
      );
    }

    const isMastery = activeSet.order >= 5;
    const targetAccuracy = isMastery ? CHAPTER_MASTERY_THRESHOLD * 100 : 60;

    return (
      <PracticeResultView
        stats={{
          total: sessionResultData.total,
          correct: sessionResultData.correct,
          incorrect: sessionResultData.incorrect,
          answered: sessionResultData.answered,
          accuracy: sessionResultData.accuracy,
          elapsedSeconds: sessionElapsedSeconds,
          topicStats: sessionResultData.topicStats,
          section: (chapterMeta?.section as any) || "BMS",
          examType: userProfile.examType,
          setOrder: activeSet.order,
          setTitle: activeSet.title,
          chapterTitle: chapterMeta?.title || "Kapitel",
          isMastery,
          passed: sessionResultData.passed,
          targetAccuracy,
          timedOutCount: timedOutQuestionIds.size,
          questionReviewItems: sessionResultData.questionReviewItems,
        }}


        onOpenReview={() => setShowReviewScreen(true)}
        onRepeat={() => {
          // Re-start the same set
          startPracticeSet(activeSet);
          setShowResultScreen(false);
        }}
        onBack={() => {
          setActiveQuestionList(null);
          setActiveSet(null);
          setShowResultScreen(false);
        }}
      />
    );
  }



  /* =================================================================
     RENDER 3: Austrian / European Assessment Environment
     ================================================================= */
  if (activeQuestionList && activeSet) {
    // Dedicated 2-Phase GM Simulation Runner (Merkphase 8 Min -> Transition -> Recall 15 Min)
    if (isGmSession && activeSet.order >= 1 && activeSet.order <= ALL_GM_SIMULATIONS.length) {
      const simData = ALL_GM_SIMULATIONS[activeSet.order - 1];
      if (simData) {
        return (
          <GmSimulationRunner
            simulationData={simData}
            isTimed={isTimedMode}
            initialAnswers={sessionAnswers}
            onComplete={({ answers: recordedAnswers, elapsedSeconds, merkphaseElapsedSeconds }) => {
              setSessionAnswers(recordedAnswers);
              setSessionElapsedSeconds(elapsedSeconds);
              if (merkphaseElapsedSeconds !== undefined) {
                setSessionMerkphaseSeconds(merkphaseElapsedSeconds);
              }

              const batchToRecord: { questionId: string; selected: number }[] = [];
              let correctCount = 0;

              activeQuestionList.forEach((q) => {
                const selected = recordedAnswers[q.id];
                if (selected !== undefined) {
                  batchToRecord.push({ questionId: q.id, selected });
                  if (selected === q.correct) {
                    correctCount++;
                  }
                }
              });

              const totalCount = activeQuestionList.length;
              const timeSpent = Math.max(1, elapsedSeconds);

              recordBatchAnswers(batchToRecord);

              if (activeSet.order > 0 && isTimedMode && !isUntimedOverride) {
                submitSetAttempt(activeSet.id, activeSet.chapterId, correctCount, totalCount, timeSpent);
              } else if (isUntimedOverride) {
                toast("GM-Übungsmodus beendet", "info");
              }

              try {
                localStorage.removeItem(`medat_inprogress_${activeSet.id}`);
              } catch (e) {
                // ignore
              }

              setShowResultScreen(true);
            }}
            onAbort={() => {
              setActiveQuestionList(null);
              setActiveSet(null);
            }}
          />
        );
      }
    }

    const curQ = activeQuestionList[currentQIndex];
    if (!curQ) return null;

    const totalCount = activeQuestionList.length;
    const answeredCount = Object.keys(sessionAnswers).length;
    const markedCount = markedForReview.size;
    const isCurBookmarked = bookmarks.has(curQ.id) || markedForReview.has(curQ.id);

    const chapterMeta = CHAPTERS[activeSet.chapterId];
    const subjectName = SUBJECTS.find((s) => s.id === chapterMeta?.subjectId)?.title || "Biologie";

    // Time display calculation
    let activeTimeSeconds = sessionElapsedSeconds;
    let isWarning = false;
    let isCritical = false;
    let isCountUp = !isTimedMode;

    if (isTimedMode) {
      if (isTvSession) {
        // TV: 35 minutes countdown (2100 seconds)
        const remaining = Math.max(0, 35 * 60 - sessionElapsedSeconds);
        activeTimeSeconds = remaining;
        isWarning = remaining <= 300 && remaining > 60; // 5 min warning
        isCritical = remaining <= 60; // 1 min critical
        isCountUp = false;
      } else if (isFzSession) {
        // FZ: 20 minutes countdown (1200 seconds for 15 questions)
        const remaining = Math.max(0, 20 * 60 - sessionElapsedSeconds);
        activeTimeSeconds = remaining;
        isWarning = remaining <= 300 && remaining > 60; // 5 min warning
        isCritical = remaining <= 60; // 1 min critical
        isCountUp = false;
      } else if (isZfSession) {
        // ZF: 15 minutes countdown (900 seconds for 10 questions)
        const remaining = Math.max(0, 15 * 60 - sessionElapsedSeconds);
        activeTimeSeconds = remaining;
        isWarning = remaining <= 180 && remaining > 60;
        isCritical = remaining <= 60;
        isCountUp = false;
      } else if (isWfSession) {
        // WF: 20 minutes countdown (1200 seconds for 15 questions)
        const remaining = Math.max(0, 20 * 60 - sessionElapsedSeconds);
        activeTimeSeconds = remaining;
        isWarning = remaining <= 300 && remaining > 60;
        isCritical = remaining <= 60;
        isCountUp = false;
      } else if (isIeSession) {
        // IE: 10 minutes countdown (600 seconds for 10 tasks)
        const remaining = Math.max(0, 10 * 60 - sessionElapsedSeconds);
        activeTimeSeconds = remaining;
        isWarning = remaining <= 120 && remaining > 60; // 2 min warning
        isCritical = remaining <= 60; // 1 min critical
        isCountUp = false;
      } else if (isErSession) {
        // ER: 18 minutes countdown (1080 seconds for 12 tasks)
        const remaining = Math.max(0, 18 * 60 - sessionElapsedSeconds);
        activeTimeSeconds = remaining;
        isWarning = remaining <= 180 && remaining > 60; // 3 min warning
        isCritical = remaining <= 60; // 1 min critical
        isCountUp = false;
      } else {
        // BMS Set 4: 45s per-question sprint
        activeTimeSeconds = timerSeconds;
        isWarning = timerSeconds <= 15;
        isCritical = timerSeconds <= 5;
        isCountUp = false;
      }
    }

    const mins = Math.floor(activeTimeSeconds / 60);
    const secs = activeTimeSeconds % 60;
    const timeFormatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    return (
      <div className="fixed inset-0 z-50 bg-[#F8FAFC] text-slate-900 flex flex-col font-sans select-none overflow-hidden">
        <MedatExamHeader
          examType={userProfile.examType}
          sectionCode={curQ.section || chapterMeta?.section || (isTvSession ? "TV" : isFzSession || isZfSession || isWfSession || isGmSession || isIeSession ? "KFF" : "BMS")}
          subjectTitle={isTvSession ? "Textverständnis" : isFzSession ? "Figuren zusammensetzen" : isZfSession ? "Zahlenfolgen" : isWfSession ? "Wortflüssigkeit" : isGmSession ? "Gedächtnis & Merkfähigkeit" : isIeSession ? "Implikationen erkennen" : subjectName}
          topicTitle={curQ.topic || chapterMeta?.title || (isFzSession ? "Figuren zusammensetzen" : isZfSession ? "Zahlenfolgen" : isWfSession ? "Wortflüssigkeit" : isGmSession ? "Allergieausweise" : isIeSession ? "Implikationen erkennen" : "Textverständnis")}
          examTitle={activeSet.title}
          currentIndex={currentQIndex}
          totalQuestions={totalCount}
          isBookmarked={isCurBookmarked}
          timeDisplay={timeFormatted}
          isTimeWarning={isWarning}
          isTimeCritical={isCritical}
          isCountUp={isCountUp}
          taskRules={getTaskRules(
            isTvSession ? "TV" : isFzSession ? "KFF" : chapterMeta?.section,
            isTvSession ? "tv-main" : isFzSession ? "kff-fig" : chapterMeta?.subjectId
          )}
          onToggleBookmark={() => toggleMarkForReview(curQ.id)}
          onPause={() => setShowLeaveModal(true)}
          onOpenShortcuts={() => setShowShortcutsModal(true)}
          onOpenMobileOverview={() => setMobileOverviewOpen(true)}
          onOpenScratchpad={() => setShowScratchpadModal(true)}
          onRequestSubmit={() => setShowSubmitModal(true)}
        />

        <div className="flex-1 flex overflow-hidden">
          <MedatQuestionWorkspace
            question={curQ}
            currentIndex={currentQIndex}
            totalQuestions={totalCount}
            answeredCount={answeredCount}
            selectedOption={sessionAnswers[curQ.id]}
            isMarked={markedForReview.has(curQ.id)}
            isLocked={!isTvSession && !isFzSession && !isZfSession && !isWfSession && !isIeSession && !isErSession && !isEeSession && !isSeSession && isTimedMode && timedOutQuestionIds.has(curQ.id)}
            lockedReason="Zeit abgelaufen (45 s): Diese Frage ist fixiert und kann im Timed Sprint nicht mehr verändert werden."
            hidePrevButton={!isTvSession && !isFzSession && !isZfSession && !isWfSession && !isIeSession && !isErSession && !isEeSession && !isSeSession && (isTimedMode || activeSet.order === 4 || activeSet.mode === "timed")}
            sectionCode={curQ.section || chapterMeta?.section || (isTvSession ? "TV" : (isErSession || isEeSession || isSeSession) ? "SEK" : isFzSession ? "KFF" : undefined)}
            subjectTitle={isTvSession ? "Textverständnis" : isErSession ? "Emotionen regulieren (ER)" : isEeSession ? "Emotionen erkennen (EE)" : isSeSession ? "Soziales Entscheiden (SE)" : isFzSession ? "Figuren zusammensetzen" : subjectName}
            onSelectOption={(optIdx) => handleSelectOption(curQ.id, optIdx)}
            onClearOption={() => handleClearOption(curQ.id)}
            onToggleMark={() => toggleMarkForReview(curQ.id)}
            onPrev={handlePrevQuestion}
            onNext={handleNextQuestion}
            onRequestSubmit={() => setShowSubmitModal(true)}
            onOpenMobileOverview={() => setMobileOverviewOpen(true)}
            onOpenScratchpad={() => setShowScratchpadModal(true)}
          />

          <MedatQuestionPalette
            questions={activeQuestionList}
            currentIndex={currentQIndex}
            answers={sessionAnswers}
            marked={markedForReview}
            timedOutIds={timedOutQuestionIds}
            isOpenMobile={mobileOverviewOpen}
            onCloseMobile={() => setMobileOverviewOpen(false)}
            onSelectQuestion={(idx) => {
              if (!isTvSession && !isFzSession && !isZfSession && !isWfSession && !isIeSession && !isErSession && !isEeSession && !isSeSession && (isTimedMode || activeSet.order === 4)) {
                if (idx < currentQIndex) {
                  toast("Im Timed Sprint kann nicht zu vorherigen Fragen zurückgesprungen werden.", "info");
                  return;
                }
              }
              setCurrentQIndex(idx);
            }}
            onRequestSubmit={() => setShowSubmitModal(true)}
          />
        </div>


        <MedatSubmitModal
          isOpen={showSubmitModal}
          totalCount={totalCount}
          answeredCount={answeredCount}
          markedCount={markedCount}
          onCancel={() => setShowSubmitModal(false)}
          onConfirm={handleConfirmSubmit}
        />

        <MedatPauseModal
          isOpen={showLeaveModal}
          answeredCount={answeredCount}
          totalCount={totalCount}
          onResume={() => setShowLeaveModal(false)}
          onExitAndSave={() => {
            setActiveQuestionList(null);
            setActiveSet(null);
            setShowLeaveModal(false);
          }}
        />

        <MedatShortcutsModal
          isOpen={showShortcutsModal}
          onClose={() => setShowShortcutsModal(false)}
        />

        <MedatScratchpadModal
          isOpen={showScratchpadModal}
          onClose={() => setShowScratchpadModal(false)}
        />
      </div>
    );
  }

  /* =================================================================
     RENDER 4: Chapter Detail View with 5-Set Sequential Progression
     ================================================================= */
  if (selectedChapterId) {
    if (selectedChapterId === "tv-scipass") {
      const tvSets = getChapterSetsWithStatus("tv-scipass");
      const tvStats = getChapterStats("tv-scipass");
      const tvWrongQuestions = questions.filter(
        (q) => (q.chapterId === "tv-scipass" || q.section === "TV") && wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Textverständnis (TV)</span>
          </div>

          <TvSectionHub
            sets={tvSets}
            stats={tvStats}
            wrongCount={tvWrongQuestions.length}
            onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "tv" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "tv" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "tv",
                section: "TV",
              });
            }}
            onStartMistakes={() => startMistakeReview("tv-scipass")}
          />
        </div>
      );
    }

    if (selectedChapterId === "kff-fig-l1" || selectedChapterId === "kff-fig") {
      const fzSets = getChapterSetsWithStatus("kff-fig-l1");
      const fzStats = getChapterStats("kff-fig-l1");
      const fzWrongQuestions = questions.filter(
        (q) => (q.chapterId === "kff-fig-l1" || q.subjectId === "kff-fig") && wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Figuren zusammensetzen (FZ)</span>
          </div>

          <FzSectionHub
            sets={fzSets}
            stats={fzStats}
            wrongCount={fzWrongQuestions.length}
            onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-fig" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-fig" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "kff-fig",
                section: "KFF",
              });
            }}
            onStartMistakes={() => startMistakeReview("kff-fig-l1")}
          />
        </div>
      );
    }

    if (
      selectedChapterId === "kff-num-arith" ||
      selectedChapterId === "kff-num" ||
      selectedChapterId === "kff-num-l1"
    ) {
      const zfSets = getChapterSetsWithStatus("kff-num-arith");
      const zfStats = getChapterStats("kff-num-arith");
      const zfWrongQuestions = questions.filter(
        (q) =>
          (q.chapterId === "kff-num-arith" ||
            q.chapterId === "kff-num" ||
            q.subjectId === "kff-num") &&
          wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Zahlenfolgen (ZF)</span>
          </div>

          <ZfSectionHub
            sets={zfSets}
            stats={zfStats}
            wrongCount={zfWrongQuestions.length}
            onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-num" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-num" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "kff-num",
                section: "KFF",
              });
            }}
            onStartMistakes={() => startMistakeReview("kff-num-arith")}
          />
        </div>
      );
    }

    if (
      selectedChapterId === "kff-wf-basic" ||
      selectedChapterId === "kff-wf" ||
      selectedChapterId === "kff-wf-sim"
    ) {
      const wfSets = getChapterSetsWithStatus("kff-wf-basic");
      const wfStats = getChapterStats("kff-wf-basic");
      const wfWrongQuestions = questions.filter(
        (q) =>
          (q.chapterId === "kff-wf-basic" ||
            q.chapterId === "kff-wf" ||
            q.chapterId === "kff-wf-sim" ||
            q.subjectId === "kff-wf") &&
          wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Wortflüssigkeit (WF)</span>
          </div>

          <WfSectionHub
            sets={wfSets}
            stats={wfStats}
            wrongCount={wfWrongQuestions.length}
            onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-wf" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-wf" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "kff-wf",
                section: "KFF",
              });
            }}
            onStartMistakes={() => startMistakeReview("kff-wf-basic")}
          />
        </div>
      );
    }

    if (
      selectedChapterId === "kff-mem-pass" ||
      selectedChapterId === "kff-mem" ||
      selectedChapterId === "kff-mem-sim"
    ) {
      const gmSets = getChapterSetsWithStatus("kff-mem-pass");
      const gmStats = getChapterStats("kff-mem-pass");
      const gmWrongQuestions = questions.filter(
        (q) =>
          (q.chapterId === "kff-mem-pass" ||
            q.chapterId === "kff-mem" ||
            q.chapterId === "kff-mem-sim" ||
            q.subjectId === "kff-mem") &&
          wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Gedächtnis & Merkfähigkeit (GM)</span>
          </div>

          <GmSectionHub
            sets={gmSets}
            stats={gmStats}
            wrongCount={gmWrongQuestions.length}
            onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-mem" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-mem" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "kff-mem",
                section: "KFF",
              });
            }}
            onStartMistakes={() => startMistakeReview("kff-mem-pass")}
          />
        </div>
      );
    }

    if (
      selectedChapterId === "kff-imp-syll" ||
      selectedChapterId === "kff-imp" ||
      selectedChapterId === "kff-imp-sim"
    ) {
      const ieSets = getChapterSetsWithStatus("kff-imp-syll");
      const ieStats = getChapterStats("kff-imp-syll");
      const ieWrongQuestions = questions.filter(
        (q) =>
          (q.chapterId === "kff-imp-syll" ||
            q.chapterId === "kff-imp" ||
            q.chapterId === "kff-imp-sim" ||
            q.subjectId === "kff-imp") &&
          wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Implikationen erkennen (IE)</span>
          </div>

          <IeSectionHub
            sets={ieSets}
            stats={ieStats}
            wrongCount={ieWrongQuestions.length}
            onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-imp" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-imp" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "kff-imp",
                section: "KFF",
              });
            }}
            onStartMistakes={() => startMistakeReview("kff-imp-syll")}
          />
        </div>
      );
    }

    if (
      selectedChapterId === "sek-reg-stress" ||
      selectedChapterId === "sek-emo-reg" ||
      selectedChapterId === "sek-er"
    ) {
      const erSets = getChapterSetsWithStatus("sek-reg-stress");
      const erStats = getChapterStats("sek-reg-stress");
      const erWrongQuestions = questions.filter(
        (q) =>
          (q.chapterId === "sek-reg-stress" ||
            q.chapterId === "sek-emo-reg" ||
            q.chapterId === "sek-er" ||
            q.subjectId === "sek-emo-reg") &&
          wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <button
              onClick={() => {
                setSelectedChapterId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              SEK
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Emotionen regulieren (ER)</span>
          </div>

          <ErSectionHub
            sets={erSets}
            stats={erStats}
            wrongCount={erWrongQuestions.length}
            onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "sek-emo-reg" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "sek-emo-reg" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "sek-emo-reg",
                section: "SEK",
              });
            }}
            onStartMistakes={() => startMistakeReview("sek-reg-stress")}
          />
        </div>
      );
    }

    if (
      selectedChapterId === "sek-rec-face" ||
      selectedChapterId === "sek-emo-rec" ||
      selectedChapterId === "sek-ee"
    ) {
      const eeSets = getChapterSetsWithStatus("sek-rec-face");
      const eeStats = getChapterStats("sek-rec-face");
      const eeWrongQuestions = questions.filter(
        (q) =>
          (q.chapterId === "sek-rec-face" ||
            q.chapterId === "sek-emo-rec" ||
            q.chapterId === "sek-ee" ||
            q.subjectId === "sek-emo-rec") &&
          wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <button
              onClick={() => {
                setSelectedChapterId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              SEK
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Emotionen erkennen (EE)</span>
          </div>

          <EeSectionHub
            sets={eeSets}
            stats={eeStats}
            wrongCount={eeWrongQuestions.length}
            onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "sek-emo-rec" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "sek-emo-rec" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "sek-emo-rec",
                section: "SEK",
              });
            }}
            onStartMistakes={() => startMistakeReview("sek-rec-face")}
          />
        </div>
      );
    }

    if (
      selectedChapterId === "sek-dec-ethics" ||
      selectedChapterId === "sek-soc-dec" ||
      selectedChapterId === "sek-se"
    ) {
      const seSets = getChapterSetsWithStatus("sek-dec-ethics");
      const seStats = getChapterStats("sek-dec-ethics");
      const seWrongQuestions = questions.filter(
        (q) =>
          (q.chapterId === "sek-dec-ethics" ||
            q.chapterId === "sek-soc-dec" ||
            q.chapterId === "sek-se" ||
            q.subjectId === "sek-soc-dec") &&
          wrong.has(q.id)
      );

      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <button
              onClick={() => {
                setSelectedChapterId(null);
              }}
              className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
            >
              SEK
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">Soziales Entscheiden (SE)</span>
          </div>

          <SeSectionHub
            sets={seSets}
            stats={seStats}
            wrongCount={seWrongQuestions.length}
            onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
            onLockedSimulation={(set) => {
              track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "sek-soc-dec" });
              track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "sek-soc-dec" });
              setLockedModalChapter({
                id: set.id,
                title: set.title,
                subjectId: "sek-soc-dec",
                section: "SEK",
              });
            }}
            onStartMistakes={() => startMistakeReview("sek-dec-ethics")}
          />
        </div>
      );
    }

    const chapter = CHAPTERS[selectedChapterId];

    // Pro access check for direct BMS chapter view
    const bmsAccess = canAccessBmsChapter(userProfile, selectedChapterId);
    if (!bmsAccess.allowed) {
      return (
        <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <button
              onClick={() => {
                setSelectedChapterId(null);
                setSelectedSubjectId(null);
              }}
              className="hover:text-red-600 transition-colors cursor-pointer shrink-0"
            >
              Übungsfragen
            </button>
            <span>/</span>
            <button
              onClick={() => setSelectedChapterId(null)}
              className="hover:text-red-600 transition-colors cursor-pointer shrink-0"
            >
              {SUBJECTS.find((s) => s.id === chapter?.subjectId)?.title || "BMS"}
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold shrink-0">{chapter?.title || "Gesperrtes Kapitel"}</span>
          </div>

          {/* Locked Chapter Hero Banner */}
          <div className="rounded-2xl sm:rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50/70 via-white to-white p-5 xs:p-6 sm:p-12 text-center space-y-4 sm:space-y-5 shadow-sm">
            <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-amber-500/10 text-amber-600 border border-amber-200/80 shadow-xs">
              <svg className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div className="space-y-1.5 sm:space-y-2 max-w-lg mx-auto">
              <span className="inline-block rounded-full bg-amber-100 text-amber-800 border border-amber-300 px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-black uppercase tracking-wider">
                MedAT-Vollzugang
              </span>
              <h2 className="text-[22px] xs:text-[26px] sm:text-[32px] font-black text-slate-900 tracking-tight">
                {chapter?.title}
              </h2>
              <p className="text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
                {chapter?.subtitle || chapter?.description}
              </p>
            </div>

            <p className="text-[12px] sm:text-[13px] text-slate-500 max-w-md mx-auto">
              In der kostenlosen Basis-Version ist pro BMS-Fach genau 1 Kapitel frei zugänglich. Aktiviere den MedAT-Vollzugang, um dieses Kapitel und alle 35 Themenbereiche uneingeschränkt zu nutzen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 sm:pt-3 w-full">
              <button
                onClick={() => {
                  track("bms_locked_chapter_clicked", { chapterId: selectedChapterId, subjectId: chapter?.subjectId });
                  track("bms_pro_upgrade_viewed", { chapterId: selectedChapterId, subjectId: chapter?.subjectId });
                  setLockedModalChapter({
                    id: selectedChapterId,
                    title: chapter?.title || "Gesperrtes Kapitel",
                    subjectId: chapter?.subjectId,
                    section: chapter?.section,
                  });
                }}
                className="w-full sm:w-auto rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-extrabold px-6 sm:px-8 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] shadow-md shadow-red-600/20 transition-all cursor-pointer text-center"
              >
                Vollzugang freischalten (39 €) →
              </button>
              <button
                onClick={() => setSelectedChapterId(null)}
                className="w-full sm:w-auto rounded-xl sm:rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold px-5 sm:px-6 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] transition-colors cursor-pointer text-center"
              >
                Zurück zur Übersicht
              </button>
            </div>
          </div>
        </div>
      );
    }

    const stats = getChapterStats(selectedChapterId);
    const setsWithStatus = getChapterSetsWithStatus(selectedChapterId);
    const activeSetItem = getActiveSetForChapter(selectedChapterId);

    return (
      <div className="space-y-4 sm:space-y-7 pb-24 pt-1 sm:pt-2">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-[13px] font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
          <button
            onClick={() => {
              setSelectedChapterId(null);
              setSelectedSubjectId(null);
            }}
            className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
          >
            Übungsfragen
          </button>
          <span>/</span>
          <button
            onClick={() => setSelectedChapterId(null)}
            className="hover:text-red-600 transition-colors shrink-0 cursor-pointer"
          >
            {SUBJECTS.find((s) => s.id === chapter?.subjectId)?.title || "Fach"}
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold shrink-0">{chapter?.title}</span>
        </div>

        {/* Hero Chapter Banner */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 xs:p-5 sm:p-8 lg:p-10 shadow-sm space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 flex-1">
              <span className="inline-block rounded-xl bg-red-50 text-red-700 border border-red-200/70 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider shadow-2xs">
                {chapter?.section} · {SUBJECTS.find((s) => s.id === chapter?.subjectId)?.title}
              </span>
              <h1 className="text-[20px] xs:text-[24px] sm:text-[34px] lg:text-[38px] font-black text-slate-900 tracking-tight leading-tight">
                {chapter?.title}
              </h1>
              <p className="text-[13px] sm:text-[15px] font-medium leading-relaxed text-slate-600">
                {chapter?.subtitle || chapter?.description}
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full sm:w-auto shrink-0">
              <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/80 px-3 xs:px-4 sm:px-5 py-2.5 sm:py-3 text-center sm:min-w-[115px] shadow-2xs">
                <p className="font-mono text-[18px] xs:text-[20px] sm:text-[24px] font-black text-slate-900">{stats.completedSetsCount} / 5</p>
                <p className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 mt-0.5">Sets fertig</p>
              </div>
              <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/80 px-3 xs:px-4 sm:px-5 py-2.5 sm:py-3 text-center sm:min-w-[115px] shadow-2xs">
                <p
                  className={`font-mono text-[18px] xs:text-[20px] sm:text-[24px] font-black ${
                    stats.accuracy >= 80 ? "text-emerald-600" : stats.accuracy >= 60 ? "text-red-600" : "text-slate-900"
                  }`}
                >
                  {stats.answeredCount > 0 ? `${stats.accuracy}%` : "—"}
                </p>
                <p className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 mt-0.5">Genauigkeit</p>
              </div>
            </div>
          </div>

          {/* Chapter Progress Bar */}
          <div className="pt-3 sm:pt-4 border-t border-slate-100">
            <div className="flex justify-between text-[11.5px] sm:text-[12.5px] font-semibold text-slate-500">
              <span>Kapitel-Fortschritt</span>
              <span className="font-bold text-slate-800">
                {stats.completedSetsCount} von 5 Sets ({stats.progressPct}%)
              </span>
            </div>
            <div className="mt-1.5 sm:mt-2 h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-red-600 transition-all duration-500"
                style={{ width: `${stats.progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Primary Action Banner: Highlight Next Step */}
        {activeSetItem && activeSetItem.status !== "locked" && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 sm:gap-5 rounded-2xl sm:rounded-3xl border border-red-200 bg-red-50/40 p-4 xs:p-5 sm:p-7 shadow-sm">
            <div className="min-w-0 flex-1 space-y-1 sm:space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                <p className="text-[10.5px] sm:text-[11px] font-black uppercase tracking-widest text-red-700">Nächster Schritt</p>
              </div>
              <h3 className="text-[16px] xs:text-[18px] sm:text-[22px] font-black text-slate-900 tracking-tight leading-snug">
                {activeSetItem.title} — {activeSetItem.subtitle}
              </h3>
              <p className="text-[12px] sm:text-[13.5px] font-medium text-slate-600">
                {activeSetItem.questionCount} Fragen · Modus: <strong className="font-bold text-slate-900">{activeSetItem.mode}</strong> · Fokus: {activeSetItem.focus}
              </p>
            </div>
            <button
              onClick={() => startPracticeSet(activeSetItem)}
              className="w-full sm:w-auto shrink-0 rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] px-5 sm:px-7 py-3 sm:py-3.5 text-[13.5px] sm:text-[14.5px] font-black text-white shadow-sm transition-all text-center min-h-[44px] cursor-pointer"
            >
              {activeSetItem.status === "completed" ? "Set wiederholen →" : "Aktives Set starten →"}
            </button>
          </div>
        )}

        {/* 5 Sequential Sets List */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 sm:mb-4">
            <h2 className="text-[16px] sm:text-[20px] font-black tracking-tight text-slate-900">5 Sequenzielle Übungs-Sets</h2>
            <span className="text-[11px] sm:text-[12px] font-bold text-slate-400">Schrittweise Vorbereitung</span>
          </div>

          <div className="space-y-2.5 sm:space-y-3.5">
            {setsWithStatus.map((set) => {
              const isCompleted = set.status === "completed";
              const iconEmoji = SET_ICONS[set.order] || "📝";

              // Check if draft in progress
              let draftCount = 0;
              try {
                const draftRaw = localStorage.getItem(`medat_inprogress_${set.id}`);
                if (draftRaw) {
                  const p = JSON.parse(draftRaw);
                  if (p.answers) draftCount = Object.keys(p.answers).length;
                }
              } catch (e) {
                // ignore
              }

              return (
                <div
                  key={set.id}
                  className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border p-3.5 sm:p-6 transition-all ${
                    isCompleted
                      ? "border-emerald-200 bg-emerald-50/20 hover:border-emerald-300"
                      : "border-slate-200 bg-white hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                    <span
                      className={`flex h-9 w-9 xs:h-10 xs:w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-[15px] sm:text-[17px] font-black shadow-xs mt-0.5 sm:mt-0 ${
                        isCompleted
                          ? "bg-emerald-600 text-white"
                          : "border border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {isCompleted ? <IconCheck className="h-4 w-4 sm:h-5 sm:w-5" /> : iconEmoji}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h3 className="text-[14px] xs:text-[15px] sm:text-[17px] font-black text-slate-900 tracking-tight">
                          {set.title}
                        </h3>
                        {isCompleted && (
                          <span className="rounded-full bg-emerald-100 px-2 sm:px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-black text-emerald-800">
                            ✓ Abgeschlossen {set.bestScore !== undefined ? `(${set.bestScore}%)` : ""}
                          </span>
                        )}
                        {draftCount > 0 && !isCompleted && (
                          <span className="rounded-full bg-amber-100 px-2 sm:px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-bold text-amber-900">
                            Entwurf: {draftCount}/{set.questionCount}
                          </span>
                        )}
                      </div>
                      <p className="text-[11.5px] xs:text-[12px] sm:text-[13px] font-medium text-slate-500 mt-0.5 sm:mt-1 leading-relaxed">
                        <span className="font-semibold text-slate-700">{set.subtitle}</span> · {set.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold text-slate-500 bg-slate-100 border border-slate-200/80 px-2 sm:px-2.5 py-1 rounded-lg">
                      {set.questionCount} Fragen
                    </span>
                    <button
                      onClick={() => startPracticeSet(set)}
                      className={`flex-1 sm:flex-initial rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 text-[12.5px] sm:text-[13px] font-black transition-all text-center min-h-[40px] cursor-pointer ${
                        isCompleted
                          ? "border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-2xs active:scale-[0.98]"
                          : "bg-red-600 hover:bg-red-700 text-white shadow-sm active:scale-[0.98]"
                      }`}
                    >
                      {draftCount > 0 ? "Fortsetzen" : isCompleted ? "Wiederholen" : "Starten"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }


  /* =================================================================
     RENDER 5: Master Practice Hub (Section & Chapter Explorer)
     ================================================================= */
  const isMedAtZ = userProfile?.examType === "MEDAT-Z";
  const sectionSubjects = SUBJECTS.filter(
    (s) => s.section === activeSection && (!isMedAtZ || s.id !== "kff-imp")
  );
  const currentSubject = sectionSubjects.find((s) => s.id === selectedSubjectId) || sectionSubjects[0];
  const currentChapters = currentSubject
    ? currentSubject.chapterIds.map((id) => CHAPTERS[id]).filter(Boolean)
    : Object.values(CHAPTERS).filter((c) => c.section === activeSection);

  return (
    <div className="space-y-5 sm:space-y-8 pb-24 pt-1 sm:pt-2">
      {/* Primary Section Switcher Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 border-b border-slate-200 pb-2.5 sm:pb-4 overflow-x-auto no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
        {availableSections.map((sec) => {
          const isSelected = activeSection === sec.code;
          const SecIcon = SEC_ICONS[sec.code] || DIconDna;
          const weight = userProfile.examType === "MEDAT-Z" ? sec.weightMedATZ : sec.weightMedATH;

          return (
            <button
              key={sec.code}
              onClick={() => {
                setActiveSection(sec.code);
                setSelectedSubjectId(null);
                setSelectedChapterId(null);
              }}
              className={`shrink-0 flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                isSelected
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
              }`}
            >
              <SecIcon className="h-4 w-4 shrink-0" />
              <span className="sm:hidden">{sec.shortTitle}</span>
              <span className="hidden sm:inline">{sec.title}</span>
              <span
                className={`ml-1 text-[10px] sm:text-[10.5px] font-black rounded-md px-1.5 py-0.5 ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-200/90 text-slate-700"
                }`}
              >
                {weight}%
              </span>
            </button>
          );
        })}
      </div>

      {activeSection === "TV" ? (
        <TvSectionHub
          sets={getChapterSetsWithStatus("tv-scipass")}
          stats={getChapterStats("tv-scipass")}
          wrongCount={
            questions.filter(
              (q) => (q.chapterId === "tv-scipass" || q.section === "TV") && wrong.has(q.id)
            ).length
          }
          onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
          onLockedSimulation={(set) => {
            track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "tv" });
            track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "tv" });
            setLockedModalChapter({
              id: set.id,
              title: set.title,
              subjectId: "tv",
              section: "TV",
            });
          }}
          onStartMistakes={() => startMistakeReview("tv-scipass")}
        />
      ) : (
        <>
          {/* Sub-Subject Switcher for BMS & KFF */}
          {sectionSubjects.length > 1 && (
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1 -mx-3 px-3 sm:mx-0 sm:px-0">
              {sectionSubjects.map((sub) => {
                const isSubSelected = currentSubject?.id === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setSelectedSubjectId(sub.id);
                      setSelectedChapterId(null);
                    }}
                    className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                      isSubSelected
                        ? "bg-red-600 text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    {sub.title}
                  </button>
                );
              })}
            </div>
          )}

          {activeSection === "KFF" && (currentSubject?.id === "kff-fig" || (!selectedSubjectId && currentSubject?.id === "kff-fig")) ? (
            <FzSectionHub
              sets={getChapterSetsWithStatus("kff-fig-l1")}
              stats={getChapterStats("kff-fig-l1")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "kff-fig-l1" || q.chapterId === "kff-fig" || q.subjectId === "kff-fig") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-fig" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-fig" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "kff-fig",
                  section: "KFF",
                });
              }}
              onStartMistakes={() => startMistakeReview("kff-fig-l1")}
            />
          ) : activeSection === "KFF" && (currentSubject?.id === "kff-num" || selectedSubjectId === "kff-num") ? (
            <ZfSectionHub
              sets={getChapterSetsWithStatus("kff-num-arith")}
              stats={getChapterStats("kff-num-arith")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "kff-num-arith" || q.chapterId === "kff-num" || q.subjectId === "kff-num") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-num" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-num" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "kff-num",
                  section: "KFF",
                });
              }}
              onStartMistakes={() => startMistakeReview("kff-num-arith")}
            />
          ) : activeSection === "KFF" && (currentSubject?.id === "kff-wf" || selectedSubjectId === "kff-wf") ? (
            <WfSectionHub
              sets={getChapterSetsWithStatus("kff-wf-basic")}
              stats={getChapterStats("kff-wf-basic")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "kff-wf-basic" ||
                      q.chapterId === "kff-wf" ||
                      q.chapterId === "kff-wf-sim" ||
                      q.subjectId === "kff-wf") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-wf" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-wf" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "kff-wf",
                  section: "KFF",
                });
              }}
              onStartMistakes={() => startMistakeReview("kff-wf-basic")}
            />
          ) : activeSection === "KFF" && (currentSubject?.id === "kff-mem" || selectedSubjectId === "kff-mem") ? (
            <GmSectionHub
              sets={getChapterSetsWithStatus("kff-mem-pass")}
              stats={getChapterStats("kff-mem-pass")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "kff-mem-pass" ||
                      q.chapterId === "kff-mem" ||
                      q.chapterId === "kff-mem-sim" ||
                      q.subjectId === "kff-mem") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSimulation={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-mem" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-mem" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "kff-mem",
                  section: "KFF",
                });
              }}
              onStartMistakes={() => startMistakeReview("kff-mem-pass")}
            />
          ) : activeSection === "KFF" && (currentSubject?.id === "kff-imp" || selectedSubjectId === "kff-imp") ? (
            <IeSectionHub
              sets={getChapterSetsWithStatus("kff-imp-syll")}
              stats={getChapterStats("kff-imp-syll")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "kff-imp-syll" ||
                      q.chapterId === "kff-imp" ||
                      q.chapterId === "kff-imp-sim" ||
                      q.subjectId === "kff-imp") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "kff-imp" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "kff-imp" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "kff-imp",
                  section: "KFF",
                });
              }}
              onStartMistakes={() => startMistakeReview("kff-imp-syll")}
            />
          ) : activeSection === "SEK" && (currentSubject?.id === "sek-emo-rec" || selectedSubjectId === "sek-emo-rec") ? (
            <EeSectionHub
              sets={getChapterSetsWithStatus("sek-rec-face")}
              stats={getChapterStats("sek-rec-face")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "sek-rec-face" ||
                      q.chapterId === "sek-emo-rec" ||
                      q.chapterId === "sek-ee" ||
                      q.subjectId === "sek-emo-rec") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "sek-emo-rec" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "sek-emo-rec" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "sek-emo-rec",
                  section: "SEK",
                });
              }}
              onStartMistakes={() => startMistakeReview("sek-rec-face")}
            />
          ) : activeSection === "SEK" && (currentSubject?.id === "sek-emo-reg" || selectedSubjectId === "sek-emo-reg") ? (
            <ErSectionHub
              sets={getChapterSetsWithStatus("sek-reg-stress")}
              stats={getChapterStats("sek-reg-stress")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "sek-reg-stress" ||
                      q.chapterId === "sek-emo-reg" ||
                      q.chapterId === "sek-er" ||
                      q.subjectId === "sek-emo-reg") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "sek-emo-reg" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "sek-emo-reg" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "sek-emo-reg",
                  section: "SEK",
                });
              }}
              onStartMistakes={() => startMistakeReview("sek-reg-stress")}
            />
          ) : activeSection === "SEK" && (currentSubject?.id === "sek-soc-dec" || selectedSubjectId === "sek-soc-dec") ? (
            <SeSectionHub
              sets={getChapterSetsWithStatus("sek-dec-ethics")}
              stats={getChapterStats("sek-dec-ethics")}
              wrongCount={
                questions.filter(
                  (q) =>
                    (q.chapterId === "sek-dec-ethics" ||
                      q.chapterId === "sek-soc-dec" ||
                      q.chapterId === "sek-se" ||
                      q.subjectId === "sek-soc-dec") &&
                    wrong.has(q.id)
                ).length
              }
              onStartSet={(set, forceUntimed) => startPracticeSet(set, forceUntimed)}
              onLockedSimulation={(set) => {
                track("bms_locked_chapter_clicked", { chapterId: set.id, subjectId: "sek-soc-dec" });
                track("bms_pro_upgrade_viewed", { chapterId: set.id, subjectId: "sek-soc-dec" });
                setLockedModalChapter({
                  id: set.id,
                  title: set.title,
                  subjectId: "sek-soc-dec",
                  section: "SEK",
                });
              }}
              onStartMistakes={() => startMistakeReview("sek-dec-ethics")}
            />
          ) : (
            <>
              {/* ─── V2.0 PERFORMANCE METRIC CARDS ─── */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                {/* Card 1: Beantwortete Fragen */}
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3.5 xs:p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider text-slate-400 truncate">
                      BEANTWORTET
                    </p>
                    <span className="shrink-0 rounded-md bg-slate-100 border border-slate-200 px-1.5 xs:px-2 py-0.5 text-[9px] xs:text-[10px] font-bold text-slate-600">
                      {practiceMetrics.totalAnswered} <span className="hidden xs:inline">Gelöst</span>
                    </span>
                  </div>

                  <div>
                    <p className="font-mono text-[22px] xs:text-[26px] sm:text-[30px] font-black text-slate-900 leading-none">
                      {practiceMetrics.totalAnswered}
                      <span className="hidden xs:inline text-[12px] sm:text-[14px] font-normal text-slate-400 font-sans ml-1">
                        Fragen
                      </span>
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex gap-0.5">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${practiceMetrics.totalAnswered > 0 ? (practiceMetrics.correctCount / practiceMetrics.totalAnswered) * 100 : 0}%` }}
                      />
                      <div
                        className="h-full bg-red-500 rounded-full transition-all duration-500"
                        style={{ width: `${practiceMetrics.totalAnswered > 0 ? (practiceMetrics.wrongCount / practiceMetrics.totalAnswered) * 100 : 0}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] xs:text-[11px] font-semibold text-slate-500">
                      <span className="text-emerald-700 font-bold">{practiceMetrics.correctCount} <span className="hidden xs:inline">Richtig</span></span>
                      <span className="text-red-600 font-bold">{practiceMetrics.wrongCount} <span className="hidden xs:inline">Falsch</span></span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Durchschnitts-Genauigkeit */}
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3.5 xs:p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider text-slate-400 truncate">
                      QUOTE
                    </p>
                    <span className={`shrink-0 rounded-md border px-1.5 xs:px-2 py-0.5 text-[9px] xs:text-[10px] font-black uppercase tracking-wider ${
                      practiceMetrics.accuracyTier.color === "emerald"
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : practiceMetrics.accuracyTier.color === "blue"
                          ? "bg-blue-50 text-blue-800 border-blue-200"
                          : practiceMetrics.accuracyTier.color === "amber"
                            ? "bg-amber-50 text-amber-800 border-amber-200"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}>
                      {practiceMetrics.accuracyTier.label}
                    </span>
                  </div>

                  <div>
                    <p className={`font-mono text-[22px] xs:text-[26px] sm:text-[30px] font-black leading-none ${
                      practiceMetrics.avgAccuracy >= 75
                        ? "text-emerald-600"
                        : practiceMetrics.avgAccuracy >= 60
                          ? "text-blue-600"
                          : practiceMetrics.totalAnswered > 0
                            ? "text-slate-900"
                            : "text-slate-400"
                    }`}>
                      {practiceMetrics.totalAnswered > 0 ? `${practiceMetrics.avgAccuracy}%` : "—"}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          practiceMetrics.avgAccuracy >= 75 ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                        style={{ width: `${Math.min(100, (practiceMetrics.avgAccuracy / 75) * 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] xs:text-[11px] font-semibold text-slate-500">
                      <span>Ziel: 75%</span>
                      <span className={practiceMetrics.avgAccuracy >= 75 ? "text-emerald-700 font-bold" : "text-amber-700 font-bold"}>
                        {practiceMetrics.accuracyTier.delta}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Gemeisterte Kapitel */}
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3.5 xs:p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider text-slate-400 truncate">
                      KAPITEL
                    </p>
                    <span className="shrink-0 rounded-md bg-slate-100 border border-slate-200 px-1.5 xs:px-2 py-0.5 text-[9px] xs:text-[10px] font-bold text-slate-600">
                      {practiceMetrics.inProgressCount} <span className="hidden xs:inline">aktiv</span>
                    </span>
                  </div>

                  <div>
                    <p className="font-mono text-[22px] xs:text-[26px] sm:text-[30px] font-black text-slate-900 leading-none">
                      {practiceMetrics.masteredCount}
                      <span className="text-[12px] sm:text-[14px] font-normal text-slate-400 font-sans ml-1">
                        / {practiceMetrics.totalChapters}
                      </span>
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex gap-0.5">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${(practiceMetrics.masteredCount / practiceMetrics.totalChapters) * 100}%` }}
                      />
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${(practiceMetrics.inProgressCount / practiceMetrics.totalChapters) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] xs:text-[11px] font-semibold text-slate-500">
                      <span className="text-emerald-700 font-bold">{practiceMetrics.masteredCount} <span className="hidden xs:inline">Gemeistert</span></span>
                      <span className="text-slate-400 font-medium">{practiceMetrics.openChaptersCount} Offen</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Schwachstellen */}
                <div
                  onClick={() => {
                    if (practiceMetrics.wrongCount > 0) {
                      if (currentSubject?.chapterIds?.[0]) {
                        startMistakeReview(currentSubject.chapterIds[0]);
                      } else {
                        startAllMistakesReview();
                      }
                    }
                  }}
                  className={`group rounded-2xl sm:rounded-3xl border p-3.5 xs:p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-2.5 sm:space-y-3 transition-all ${
                    practiceMetrics.wrongCount > 0
                      ? "border-red-200 bg-red-50/40 hover:border-red-300 hover:shadow-sm cursor-pointer"
                      : "border-slate-200/90 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider text-slate-400 truncate">
                      FEHLER
                    </p>
                    {practiceMetrics.wrongCount > 0 ? (
                      <span className="shrink-0 rounded-md bg-red-100 border border-red-200 px-1.5 xs:px-2 py-0.5 text-[9px] xs:text-[10px] font-bold text-red-800 uppercase tracking-wider">
                        Offen
                      </span>
                    ) : (
                      <span className="shrink-0 rounded-md bg-emerald-100 border border-emerald-200 px-1.5 xs:px-2 py-0.5 text-[9px] xs:text-[10px] font-bold text-emerald-800">
                        0
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="font-mono text-[22px] xs:text-[26px] sm:text-[30px] font-black text-red-600 leading-none">
                      {practiceMetrics.wrongCount}
                      <span className="hidden xs:inline text-[12px] sm:text-[14px] font-medium text-red-700 font-sans ml-1">
                        Schwachstellen
                      </span>
                    </p>
                  </div>

                  <div className="pt-1 border-t border-slate-100 text-[10px] xs:text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                    <span className="truncate">
                      {practiceMetrics.affectedChaptersCount > 0
                        ? `${practiceMetrics.affectedChaptersCount} Kap.`
                        : "Fehlerfrei"}
                    </span>
                    {practiceMetrics.wrongCount > 0 && (
                      <span className="text-red-600 font-bold group-hover:underline shrink-0 ml-1">
                        Üben →
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Chapter Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                {currentChapters.map((ch) => {
                  const stats = getChapterStats(ch.id);
                  const isFzChapter = ch.id === "kff-fig-l1" || ch.id === "kff-fig";
                  const isZfChapter = ch.id === "kff-num-arith" || ch.id === "kff-num" || ch.id === "kff-num-l1";
                  const isWfChapter = ch.id === "kff-wf-basic" || ch.id === "kff-wf" || ch.id === "kff-wf-sim";
                  const isGmChapter = ch.id === "kff-mem-pass" || ch.id === "kff-mem" || ch.id === "kff-mem-sim";
                  const isSimChapter = isFzChapter || isZfChapter || isWfChapter || isGmChapter;

                  const bmsAccess = canAccessBmsChapter(userProfile, ch.id);
                  const isLocked = !bmsAccess.allowed;
                  const isFreeBms = isBmsFreeChapter(ch.id);

                  return (
                    <div
                      key={ch.id}
                      onClick={() => {
                        if (isLocked) {
                          track("bms_locked_chapter_clicked", { chapterId: ch.id, subjectId: ch.subjectId });
                          track("bms_pro_upgrade_viewed", { chapterId: ch.id, subjectId: ch.subjectId });
                          setLockedModalChapter({
                            id: ch.id,
                            title: ch.title,
                            subjectId: ch.subjectId,
                            section: ch.section,
                          });
                          return;
                        }
                        setSelectedChapterId(ch.id);
                      }}
                      className={`group cursor-pointer rounded-2xl border p-4 xs:p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                        isLocked
                          ? "border-slate-200/80 bg-slate-50/50 hover:border-amber-400 hover:bg-white"
                          : isGmChapter
                            ? "border-purple-300 ring-2 ring-purple-100/80 hover:ring-purple-200 hover:border-purple-400 bg-white"
                            : isWfChapter
                              ? "border-amber-300 ring-2 ring-amber-100/80 hover:ring-amber-200 hover:border-amber-400 bg-white"
                              : isZfChapter
                                ? "border-blue-300 ring-2 ring-blue-100/80 hover:ring-blue-200 hover:border-blue-400 bg-white"
                                : isFzChapter
                                  ? "border-red-300 ring-2 ring-red-100/80 hover:ring-red-200 hover:border-red-400 bg-white"
                                  : "border-slate-200 hover:border-red-400 bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          {isGmChapter ? (
                            <span className="rounded-full bg-purple-100 text-purple-800 border border-purple-200 px-2 xs:px-2.5 py-0.5 text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider">
                              <span className="sm:hidden">8 Ausweise · 25 Fragen</span>
                              <span className="hidden sm:inline">8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfragephase</span>
                            </span>
                          ) : isWfChapter ? (
                            <span className="rounded-full bg-amber-100 text-amber-800 border border-amber-200 px-2 xs:px-2.5 py-0.5 text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider">
                              <span className="sm:hidden">15 Aufg. · 15 Min</span>
                              <span className="hidden sm:inline">15 Aufgaben · 15 Min · Realbedingungen</span>
                            </span>
                          ) : isZfChapter ? (
                            <span className="rounded-full bg-blue-100 text-blue-800 border border-blue-200 px-2 xs:px-2.5 py-0.5 text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider">
                              <span className="sm:hidden">10 Aufg. · 15 Min</span>
                              <span className="hidden sm:inline">10 Aufgaben · 15 Min · Realbedingungen</span>
                            </span>
                          ) : isFzChapter ? (
                            <span className="rounded-full bg-red-100 text-red-800 border border-red-200 px-2 xs:px-2.5 py-0.5 text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider">
                              <span className="sm:hidden">15 Aufg. · 20 Min</span>
                              <span className="hidden sm:inline">15 Aufgaben · 20 Min · echte Prüfungsbedingungen</span>
                            </span>
                          ) : (
                            <div />
                          )}

                          {isLocked ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-amber-300 border border-slate-800 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-2xs">
                              <svg className="h-3 w-3 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                              </svg>
                              <span>Vollzugang</span>
                            </span>
                          ) : isFreeBms ? (
                            <div className="flex items-center gap-1.5">
                              <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                                Gratis-Kapitel
                              </span>
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10.5px] font-bold ${
                                  stats.status === "mastered"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : stats.status === "needs_review"
                                      ? "bg-amber-100 text-amber-800"
                                      : stats.status === "in_progress"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {stats.status === "mastered"
                                  ? "✓ Gemeistert"
                                  : stats.status === "needs_review"
                                    ? "Wiederholung"
                                    : stats.status === "in_progress"
                                      ? "In Bearbeitung"
                                      : "Offen"}
                              </span>
                            </div>
                          ) : (
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[10.5px] font-bold ${
                                stats.status === "mastered"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : stats.status === "needs_review"
                                    ? "bg-amber-100 text-amber-800"
                                    : stats.status === "in_progress"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              {stats.status === "mastered"
                                ? "✓ Gemeistert"
                                : stats.status === "needs_review"
                                  ? "Wiederholung"
                                  : stats.status === "in_progress"
                                    ? "In Bearbeitung"
                                    : "Offen"}
                            </span>
                          )}
                        </div>

                        <h3 className={`mt-3 text-[16px] xs:text-[17px] font-bold transition-colors ${
                          isLocked
                            ? "text-slate-900 group-hover:text-amber-700"
                            : isGmChapter
                              ? "text-slate-900 group-hover:text-purple-600"
                              : isWfChapter
                                ? "text-slate-900 group-hover:text-amber-600"
                                : isZfChapter
                                  ? "text-slate-900 group-hover:text-blue-600"
                                  : "text-slate-900 group-hover:text-red-600"
                        }`}>
                          {isGmChapter
                            ? "Gedächtnis & Merkfähigkeit (GM)"
                            : isWfChapter
                              ? "Wortflüssigkeit (WF)"
                              : isZfChapter
                                ? "Zahlenfolgen (ZF)"
                                : isFzChapter
                                  ? "Figuren zusammensetzen (FZ)"
                                  : ch.title}
                        </h3>
                        <p className="mt-1 text-[12.5px] xs:text-[13px] text-slate-500 line-clamp-2">
                          {isGmChapter
                            ? "MedAT-orientierte Gedächtnissimulationen mit Allergieausweisen: 8 Ausweise in 8 Minuten einprägen, danach 25 Fragen in 15 Minuten."
                            : isWfChapter
                              ? "MedAT-orientierte Prüfungssimulationen: 15 Aufgaben in 15 Minuten unter Realbedingungen."
                              : isZfChapter
                                ? "MedAT-orientierte Prüfungssimulationen: 10 Zahlenfolgen in 15 Minuten unter Realbedingungen."
                                : isFzChapter
                                  ? "MedAT-orientierte Prüfungssimulationen: 15 Aufgaben in 20 Minuten unter Realbedingungen."
                                  : ch.description}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 space-y-2.5 sm:space-y-3">
                        <div className="flex justify-between text-[11px] xs:text-[11.5px] font-semibold text-slate-500">
                          <span>
                            {isSimChapter
                              ? `Simulationen: ${stats.completedSetsCount} / 5`
                              : `Sets: ${stats.completedSetsCount} / 5`}
                          </span>
                          <span>{stats.answeredCount > 0 ? `${stats.accuracy}% Quote` : "0%"}</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              isLocked
                                ? "bg-amber-400"
                                : isGmChapter
                                  ? "bg-purple-600"
                                  : isWfChapter
                                    ? "bg-amber-600"
                                    : isZfChapter
                                      ? "bg-blue-600"
                                      : "bg-red-600"
                            }`}
                            style={{ width: `${stats.progressPct}%` }}
                          />
                        </div>
                        <div className={`pt-2 flex items-center justify-between text-[11.5px] xs:text-[12px] font-bold transition-colors ${
                          isLocked
                            ? "text-amber-800 group-hover:text-amber-900"
                            : isGmChapter
                              ? "text-purple-600 group-hover:text-purple-700"
                              : isWfChapter
                                ? "text-amber-600 group-hover:text-amber-700"
                                : isZfChapter
                                  ? "text-blue-600 group-hover:text-blue-700"
                                  : "text-slate-500 group-hover:text-red-600"
                        }`}>
                          <span className="flex items-center gap-1.5">
                            {isLocked && (
                              <svg className="h-3.5 w-3.5 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                              </svg>
                            )}
                            <span>
                              {isLocked
                                ? "Vollzugang freischalten"
                                : isGmChapter
                                  ? "Simulation starten →"
                                  : isSimChapter
                                    ? "Alle Simulationen öffnen"
                                    : "Sets öffnen"}
                            </span>
                          </span>
                          {isLocked ? (
                            <span className="text-[11px] font-extrabold text-amber-600 group-hover:translate-x-0.5 transition-transform">
                              Freischalten →
                            </span>
                          ) : (
                            <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}

      {/* BMS Pro Upgrade Modal */}
      <BmsProUpgradeModal
        isOpen={lockedModalChapter !== null}
        onClose={() => setLockedModalChapter(null)}
        chapter={lockedModalChapter}
        onNav={onNav}
      />
    </div>
  );
}
