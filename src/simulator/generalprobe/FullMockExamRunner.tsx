import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import type {
  GeneralprobeDataset,
  GeneralprobeStage,
  GeneralprobeResult,
  GeneralprobeActiveSession,
} from "../../data/generalprobe/types";
import {
  STAGE_CONFIGS,
  MEDAT_STAGE_ORDER,
  getNextGeneralprobeStage,
  getQuestionsForStage,
  evaluateFullGeneralprobe,
} from "../../data/generalprobe/types";
import {
  MedatExamHeader,
  MedatQuestionWorkspace,
  MedatQuestionPalette,
  MedatPauseModal,
  MedatShortcutsModal,
  MedatScratchpadModal,
} from "../index";
import { GmMerkphaseWorkspace } from "../gm/GmMerkphaseWorkspace";
import { FullMockPreTestChecklistModal } from "./FullMockPreTestChecklistModal";
import { FullMockResultsView } from "./FullMockResultsView";
import { MedatReviewView, type ReviewItem } from "../MedatReviewView";
import { usePractice } from "../../dashboard/practiceContext";
import { dataOrchestrator } from "../../orchestrator";
import { decodeEeSelections } from "../../data/questions/ee/types";
import { calculateSeScore } from "../../data/questions/se/types";
import {
  IconClock,
  IconArrowRight,
  IconCheck,
  IconClose,
  IconTarget,
  IconBrain,
  IconHeart,
  IconPuzzle,
} from "../../lib/icons";
import { toast } from "../../lib/core";
import type { StoredQuestion } from "../../data/questions/types";

export interface FullMockExamRunnerProps {
  dataset: GeneralprobeDataset;
  onExit: () => void;
  onSaveResult?: (res: GeneralprobeResult) => void;
}

const STORAGE_KEY_ACTIVE = "medat_active_generalprobe_v1";

// Question cumulative offsets across the 15 stages (total: 221 scored questions)
const STAGE_QUESTION_OFFSETS: Partial<Record<GeneralprobeStage, number>> = {
  CHECKLIST: 0,
  BMS_BIOLOGY: 0, // 0..39 (40)
  BMS_CHEMISTRY: 40, // 40..63 (24)
  BMS_PHYSICS: 64, // 64..81 (18)
  BMS_MATH: 82, // 82..93 (12)
  TV: 94, // 94..105 (12)
  BREAK: 106,
  PAUSE: 106,
  FZ: 106, // 106..120 (15)
  KFF_FZ: 106,
  GM_MEMORY: 121,
  KFF_GM_MEM: 121,
  ZF: 121, // 121..130 (10)
  KFF_ZF: 121,
  WF: 131, // 131..145 (15)
  KFF_WF: 131,
  GM_RECALL: 146, // 146..170 (25)
  KFF_GM_RECALL: 146,
  IE: 171, // 171..180 (10)
  KFF_IE: 171,
  ER: 181, // 181..192 (12)
  SEK_ER: 181,
  EE: 193, // 193..206 (14)
  SEK_EE: 193,
  SE: 207, // 207..220 (14)
  SEK_SE: 207,
  TRANSITION_ER_TO_EE: 193,
  TRANSITION_EE_TO_SE: 207,
  RESULTS: 221,
};

export const FullMockExamRunner: React.FC<FullMockExamRunnerProps> = ({
  dataset,
  onExit,
  onSaveResult,
}) => {
  // Check development environment
  const isDevMode = Boolean((import.meta as any)?.env?.DEV);

  // 1. Session Restoration or Initial State
  const [session, setSession] = useState<GeneralprobeActiveSession>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE);
      if (saved) {
        const parsed = JSON.parse(saved) as GeneralprobeActiveSession;
        if (
          parsed &&
          (parsed.examId === dataset.id ||
            parsed.examId?.replace("mock-full-medat-h-", "generalprobe-") === dataset.id ||
            dataset.id?.replace("mock-full-medat-h-", "generalprobe-") === parsed.examId ||
            parsed.examId?.replace("generalprobe-", "mock-full-medat-h-") === dataset.id ||
            dataset.id?.replace("generalprobe-", "mock-full-medat-h-") === parsed.examId)
        ) {
          const now = Date.now();
          // If stage was checklist, advance to BMS_BIOLOGY
          if (parsed.stage === "CHECKLIST") {
            const firstDuration = STAGE_CONFIGS.BMS_BIOLOGY.durationSeconds;
            return {
              ...parsed,
              stage: "BMS_BIOLOGY",
              stageStartedAt: now,
              stageEndsAt: now + firstDuration * 1000,
              stageRemainingSeconds: firstDuration,
              gmMemorySet: parsed.gmMemorySet || parsed.gmCards || dataset.gmCards,
            };
          }
          // If stage was active and timer has not expired yet
          if (parsed.stageEndsAt && parsed.stageEndsAt > now) {
            return {
              ...parsed,
              gmMemorySet: parsed.gmMemorySet || parsed.gmCards || dataset.gmCards,
            };
          }
          // If timer expired while user was away, advance to next stage
          if (parsed.stageEndsAt && parsed.stageEndsAt <= now && parsed.stage !== "RESULTS") {
            const next = getNextGeneralprobeStage(parsed.stage);
            const nextCfg = STAGE_CONFIGS[next];
            const nextDurationSec = parsed.isDevSpeedEnabled ? 10 : (nextCfg?.durationSeconds || 60);
            return {
              ...parsed,
              stage: next,
              stageStartedAt: now,
              stageEndsAt: now + nextDurationSec * 1000,
              stageRemainingSeconds: nextDurationSec,
              currentQuestionIndex: 0,
              gmMemorySet: parsed.gmMemorySet || parsed.gmCards || dataset.gmCards,
            };
          }
        }
      }
    } catch (e) {}

    const now = Date.now();
    const firstStageDuration = STAGE_CONFIGS.BMS_BIOLOGY.durationSeconds;

    return {
      examId: dataset.id,
      stage: "BMS_BIOLOGY",
      stageStartedAt: now,
      stageEndsAt: now + firstStageDuration * 1000,
      stageRemainingSeconds: firstStageDuration,
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: [],
      visitedQuestionIds: [],
      gmMemorySet: dataset.gmCards, // The exact 8 cards are frozen once for this attempt
      startTimestamp: now,
      completedStages: [],
      isDevSpeedEnabled: false,
    };
  });

  const [isChecklistOpen, setIsChecklistOpen] = useState<boolean>(false);
  const [resultData, setResultData] = useState<GeneralprobeResult | null>(null);
  const [showSectionSubmitConfirm, setShowSectionSubmitConfirm] = useState<boolean>(false);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [reviewFilterSection, setReviewFilterSection] = useState<string | undefined>(undefined);

  const { setIsResultPage } = usePractice();
  useEffect(() => {
    const isResultOrReview = !!resultData || session.stage === "RESULTS" || isReviewMode;
    setIsResultPage(isResultOrReview);
    return () => {
      setIsResultPage(false);
    };
  }, [resultData, session.stage, isReviewMode, setIsResultPage]);

  // Aux Modals
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isMobileOverviewOpen, setIsMobileOverviewOpen] = useState(false);

  // Current stage configuration
  const stageConfig = STAGE_CONFIGS[session.stage];

  // 2. Persist Active Session to LocalStorage
  useEffect(() => {
    if (session.stage === "RESULTS" || resultData) {
      localStorage.removeItem(STORAGE_KEY_ACTIVE);
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(session));
    } catch (e) {}
  }, [session, resultData]);

  // 3. Resolve Current Question Set for Current Stage
  const currentQuestions: StoredQuestion[] = useMemo(() => {
    return getQuestionsForStage(session.stage, dataset);
  }, [session.stage, dataset]);

  // 4. Timestamp-Driven Timer Engine (survives rerenders, background tabs & reloads)
  useEffect(() => {
    // Only tick when inside an active timed stage (not checklist, not results, not during pause modal)
    if (
      session.stage === "CHECKLIST" ||
      session.stage === "RESULTS" ||
      isPauseModalOpen
    ) {
      return;
    }

    const checkTimer = () => {
      const now = Date.now();
      const diffSec = Math.max(0, Math.ceil((session.stageEndsAt - now) / 1000));

      setSession((prev) => {
        // If time expired, auto-advance
        if (now >= prev.stageEndsAt) {
          toast(`Zeit für ${stageConfig.title} ist abgelaufen. Sektion verriegelt.`, "info");
          return advanceStageInternal(prev);
        }
        if (prev.stageRemainingSeconds !== diffSec) {
          return { ...prev, stageRemainingSeconds: diffSec };
        }
        return prev;
      });
    };

    // Immediate check
    checkTimer();

    // Regular interval
    const interval = setInterval(checkTimer, 250);
    return () => clearInterval(interval);
  }, [session.stage, session.stageEndsAt, isPauseModalOpen, stageConfig.title]);

  // 5. Stage Advance Logic
  const advanceStageInternal = (curr: GeneralprobeActiveSession): GeneralprobeActiveSession => {
    const nextStage = getNextGeneralprobeStage(curr.stage);
    const now = Date.now();

    // Mark current stage as completed/locked
    const updatedCompletedStages = [...(curr.completedStages || [])];
    if (!updatedCompletedStages.includes(curr.stage)) {
      updatedCompletedStages.push(curr.stage);
    }

    // If entering RESULTS, compute evaluation
    if (nextStage === "RESULTS") {
      const elapsed = Math.floor((now - curr.startTimestamp) / 1000);
      const evalResult = evaluateFullGeneralprobe(dataset, curr.answers, elapsed);
      setResultData(evalResult);

      // Save to mock history
      try {
        const historyJson = localStorage.getItem("medat_mock_history_v4");
        const history = historyJson ? JSON.parse(historyJson) : [];
        const newRecord = {
          id: evalResult.id,
          attemptId: evalResult.id,
          mockId: dataset.id,
          simulationId: dataset.id,
          examTitle: dataset.title,
          simulationName: dataset.title,
          category: "full" as const,
          date: evalResult.dateStr,
          timestamp: evalResult.timestamp,
          startedAt: curr.startTimestamp,
          completedAt: evalResult.timestamp,
          duration: elapsed,
          score: evalResult.weightedScore,
          weightedScore: evalResult.weightedScore,
          correctCount:
            evalResult.bms.rawCorrect +
            evalResult.tv.rawCorrect +
            evalResult.kff.rawCorrect +
            Math.round(evalResult.sek.rawCorrect),
          totalQuestions: 221,
          timeSpentSeconds: elapsed,
          passed: evalResult.passed,
          status: "completed" as const,
          bmsRaw: evalResult.bms.rawCorrect,
          bmsPercent: evalResult.bms.percentage,
          tvRaw: evalResult.tv.rawCorrect,
          tvPercent: evalResult.tv.percentage,
          kffRaw: evalResult.kff.rawCorrect,
          kffPercent: evalResult.kff.percentage,
          sekRaw: evalResult.sek.rawCorrect,
          sekPercent: evalResult.sek.percentage,
          sectionBreakdown: {
            BMS: {
              total: 94,
              correct: evalResult.bms.rawCorrect,
              percentage: evalResult.bms.percentage,
            },
            TV: {
              total: 12,
              correct: evalResult.tv.rawCorrect,
              percentage: evalResult.tv.percentage,
            },
            KFF: {
              total: 75,
              correct: evalResult.kff.rawCorrect,
              percentage: evalResult.kff.percentage,
            },
            SEK: {
              total: 40,
              correct: Math.round(evalResult.sek.rawCorrect),
              percentage: evalResult.sek.percentage,
            },
          },
        };
        history.unshift(newRecord);
        localStorage.setItem("medat_mock_history_v4", JSON.stringify(history));
        localStorage.removeItem(STORAGE_KEY_ACTIVE);
        window.dispatchEvent(
          new CustomEvent("mprep:mock_completed", { detail: { record: newRecord } })
        );
        dataOrchestrator.dispatch({
          type: "SUBMIT_MOCK",
          record: newRecord,
        });
      } catch (e) {}

      if (onSaveResult) {
        onSaveResult(evalResult);
      }

      return {
        ...curr,
        stage: "RESULTS",
        stageRemainingSeconds: 0,
        completedStages: updatedCompletedStages,
      };
    }

    const nextCfg = STAGE_CONFIGS[nextStage];
    const durationSec = curr.isDevSpeedEnabled ? 10 : (nextCfg?.durationSeconds || 60);

    return {
      ...curr,
      stage: nextStage,
      stageStartedAt: now,
      stageEndsAt: now + durationSec * 1000,
      stageRemainingSeconds: durationSec,
      currentQuestionIndex: 0,
      markedForReview: [], // Review markers are scoped to the active section
      completedStages: updatedCompletedStages,
    };
  };

  const handleStartFromChecklist = () => {
    setIsChecklistOpen(false);
    const now = Date.now();
    const durationSec = session.isDevSpeedEnabled
      ? 10
      : STAGE_CONFIGS.BMS_BIOLOGY.durationSeconds;

    setSession((prev) => ({
      ...prev,
      stage: "BMS_BIOLOGY",
      stageStartedAt: now,
      stageEndsAt: now + durationSec * 1000,
      stageRemainingSeconds: durationSec,
      currentQuestionIndex: 0,
      markedForReview: [],
    }));
  };

  const handleManualStageSubmit = () => {
    setShowSectionSubmitConfirm(false);
    setSession((prev) => advanceStageInternal(prev));
  };

  // Option selection
  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setSession((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionIndex,
      },
    }));
  };

  const handleClearOption = (questionId: string) => {
    setSession((prev) => {
      const nextAns = { ...prev.answers };
      delete nextAns[questionId];
      return {
        ...prev,
        answers: nextAns,
      };
    });
  };

  const handleToggleMark = (questionId: string) => {
    setSession((prev) => {
      const isMarked = prev.markedForReview.includes(questionId);
      return {
        ...prev,
        markedForReview: isMarked
          ? prev.markedForReview.filter((id) => id !== questionId)
          : [...prev.markedForReview, questionId],
      };
    });
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Dev mode toggle helper
  const handleToggleDevSpeed = () => {
    setSession((prev) => {
      const nextSpeed = !prev.isDevSpeedEnabled;
      const now = Date.now();
      const currentCfg = STAGE_CONFIGS[prev.stage];
      const newDurationSec = nextSpeed ? 10 : (currentCfg?.durationSeconds || 60);
      toast(nextSpeed ? "⚡ Dev-Modus: 10s-Timer aktiviert!" : "Standardtimer aktiviert.", "info");
      return {
        ...prev,
        isDevSpeedEnabled: nextSpeed,
        stageEndsAt: now + newDurationSec * 1000,
        stageRemainingSeconds: newDurationSec,
      };
    });
  };

  // 6. Global Keyboard Shortcuts Listener
  useEffect(() => {
    if (
      session.stage === "CHECKLIST" ||
      session.stage === "RESULTS" ||
      session.stage === "BREAK" ||
      session.stage === "PAUSE" ||
      session.stage === "GM_MEMORY" ||
      session.stage === "KFF_GM_MEM" ||
      isPauseModalOpen ||
      isShortcutsModalOpen ||
      isScratchpadOpen ||
      showSectionSubmitConfirm
    ) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") {
        return;
      }

      const curQ = currentQuestions[session.currentQuestionIndex];
      if (!curQ) return;

      const key = e.key.toLowerCase();

      // Number keys 1..5 or letters a..e for option selection
      if (curQ.options && curQ.options.length > 0) {
        let optIdx = -1;
        if (key >= "1" && key <= "5") {
          optIdx = parseInt(key, 10) - 1;
        } else if (key >= "a" && key <= "e") {
          optIdx = key.charCodeAt(0) - "a".charCodeAt(0);
        }

        if (optIdx >= 0 && optIdx < curQ.options.length) {
          e.preventDefault();
          handleSelectOption(curQ.id, optIdx);
          return;
        }
      }

      // Arrow navigation
      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (session.currentQuestionIndex + 1 < currentQuestions.length) {
          setSession((prev) => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex + 1,
          }));
        }
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (session.currentQuestionIndex > 0) {
          setSession((prev) => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex - 1,
          }));
        }
        return;
      }

      // Bookmark / Mark for Review toggle
      if (key === "m" || key === "b") {
        e.preventDefault();
        handleToggleMark(curQ.id);
        return;
      }

      // Clear choice
      if (key === "c") {
        e.preventDefault();
        handleClearOption(curQ.id);
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    session.stage,
    session.currentQuestionIndex,
    currentQuestions,
    isPauseModalOpen,
    isShortcutsModalOpen,
    isScratchpadOpen,
    showSectionSubmitConfirm,
  ]);

  // 7. Memoized Review Items Aggregator for All 221 Scored Tasks
  const reviewItems: ReviewItem[] = useMemo(() => {
    if (!resultData) return [];
    const list: ReviewItem[] = [];

    const addItems = (
      questions: StoredQuestion[],
      section: string,
      subject: string
    ) => {
      questions.forEach((q) => {
        const userAns = session.answers[q.id];
        let selected: number | undefined = undefined;
        let isCorrect = false;

        if (typeof userAns === "number") {
          selected = userAns;
        }

        if (
          section === "BMS" ||
          section === "TV" ||
          subject === "Figuren zusammensetzen" ||
          subject === "Zahlenfolgen" ||
          subject === "Wortflüssigkeit" ||
          subject === "Implikationen erkennen" ||
          subject === "Emotionen regulieren"
        ) {
          const correctVal =
            q.correctAnswer !== undefined ? q.correctAnswer : (q as any).correct;
          isCorrect = userAns !== undefined && userAns === correctVal;
        } else if (subject === "Gedächtnis & Merkfähigkeit") {
          const keyMap = ["A", "B", "C", "D", "E"];
          let chosenKey: string | undefined = undefined;
          if (typeof userAns === "number") {
            chosenKey = keyMap[userAns];
            selected = userAns;
          } else if (typeof userAns === "string") {
            chosenKey = userAns;
            selected = keyMap.indexOf(userAns);
          }
          isCorrect = chosenKey !== undefined && chosenKey === (q as any).correctAnswer;
        } else if (subject === "Emotionen erkennen") {
          const eeData = (q as any).eeData;
          if (eeData && userAns !== undefined) {
            const selections =
              typeof userAns === "number" ? decodeEeSelections(userAns) : userAns;
            isCorrect = eeData.emotions.every(
              (emo: any) => selections[emo.id] === emo.correctProbability
            );
          } else if (
            userAns !== undefined &&
            (userAns === q.correctAnswer || userAns === (q as any).correct)
          ) {
            isCorrect = true;
          }
        } else if (subject === "Soziales Entscheiden") {
          const seData = (q as any).seData;
          if (seData && userAns !== undefined) {
            const evalRes = calculateSeScore(userAns, seData.referenceRanking);
            isCorrect = evalRes.isValid && evalRes.score >= 0.75;
          } else if (
            userAns !== undefined &&
            (userAns === q.correctAnswer || userAns === (q as any).correct)
          ) {
            isCorrect = true;
          }
        }

        // Attach matching allergy card for GM questions
        let gmCardData = (q as any).gmCardData;
        if (!gmCardData && subject === "Gedächtnis & Merkfähigkeit") {
          const cardId = (q as any).cardId || (q as any).gmData?.cardId;
          const memorySet = session.gmMemorySet || dataset.gmCards || [];
          gmCardData = memorySet.find(
            (c: any) =>
              c.id === cardId || c.cardId === cardId || c.name === (q as any).name
          );
        }

        list.push({
          question: {
            ...q,
            section,
            subjectId: subject,
            gmCardData,
          },
          selected,
          isCorrect,
        });
      });
    };

    // Add questions in exact test sequence:
    addItems(getQuestionsForStage("BMS_BIOLOGY", dataset), "BMS", "Biologie");
    addItems(getQuestionsForStage("BMS_CHEMISTRY", dataset), "BMS", "Chemie");
    addItems(getQuestionsForStage("BMS_PHYSICS", dataset), "BMS", "Physik");
    addItems(getQuestionsForStage("BMS_MATH", dataset), "BMS", "Mathematik");
    addItems(dataset.tvQuestions, "TV", "Textverständnis");
    addItems(dataset.fzQuestions, "KFF", "Figuren zusammensetzen");
    addItems(dataset.zfQuestions, "KFF", "Zahlenfolgen");
    addItems(dataset.wfQuestions, "KFF", "Wortflüssigkeit");
    addItems(dataset.gmStoredQuestions, "KFF", "Gedächtnis & Merkfähigkeit");
    addItems(dataset.ieQuestions, "KFF", "Implikationen erkennen");
    addItems(dataset.erQuestions, "SEK", "Emotionen regulieren");
    addItems(dataset.eeQuestions, "SEK", "Emotionen erkennen");
    addItems(dataset.seQuestions, "SEK", "Soziales Entscheiden");

    return list;
  }, [resultData, dataset, session.answers, session.gmMemorySet]);

  // 8. RENDER RESULTS OR DETAILED REVIEW VIEW
  if (session.stage === "RESULTS" && resultData) {
    if (isReviewMode) {
      return (
        <div className="fixed inset-0 z-50 w-screen h-screen flex flex-col overflow-y-auto bg-[#F8FAFC]">
          <MedatReviewView
            title={`${dataset.title} — Aufgabenanalyse`}
            items={reviewItems}
            bookmarks={new Set(session.markedForReview)}
            onToggleBookmark={handleToggleMark}
            onBackToResults={() => setIsReviewMode(false)}
            initialSection={reviewFilterSection}
          />
        </div>
      );
    }

    return (
      <div className="fixed inset-0 z-50 w-screen h-screen flex flex-col overflow-y-auto bg-[#F8FAFC]">
        <FullMockResultsView
          result={resultData}
          dataset={dataset}
          onReturnToOverview={onExit}
          onStartReview={(filter) => {
            setReviewFilterSection(filter);
            setIsReviewMode(true);
          }}
          onRepeatOrRestart={() => {
            localStorage.removeItem(STORAGE_KEY_ACTIVE);
            setResultData(null);
            setIsReviewMode(false);
            const now = Date.now();
            const firstDuration = STAGE_CONFIGS.BMS_BIOLOGY.durationSeconds;
            setSession({
              examId: dataset.id,
              stage: "BMS_BIOLOGY",
              stageStartedAt: now,
              stageEndsAt: now + firstDuration * 1000,
              stageRemainingSeconds: firstDuration,
              currentQuestionIndex: 0,
              answers: {},
              markedForReview: [],
              visitedQuestionIds: [],
              gmMemorySet: dataset.gmCards,
              startTimestamp: now,
              completedStages: [],
              isDevSpeedEnabled: false,
            });
            setIsChecklistOpen(false);
          }}
        />
      </div>
    );
  }

  // 9. RENDER CHECKLIST MODAL (Intro Phase)
  if (session.stage === "CHECKLIST" || isChecklistOpen) {
    return (
      <FullMockPreTestChecklistModal
        isOpen={true}
        onClose={onExit}
        onStart={handleStartFromChecklist}
      />
    );
  }

  // 10. RENDER 60-MINUTE MITTAGSPAUSE SCREEN
  if (session.stage === "BREAK" || session.stage === "PAUSE") {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 select-none overflow-y-auto animate-in fade-in duration-300">
        <div className="max-w-xl w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[12px] font-black uppercase tracking-wider">
            <IconClock className="w-4 h-4" />
            Offizielle Pause
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            MITTAGSPAUSE
          </h2>

          <div className="font-mono text-6xl sm:text-7xl font-black text-emerald-400 tracking-tight py-2">
            {formatTimer(session.stageRemainingSeconds)}
          </div>

          <p className="text-slate-300 text-[14px] sm:text-[15px] leading-relaxed">
            Die 60-minütige Mittagspause ist fester Bestandteil des offiziellen MedAT-Testtages.
            Nutzen Sie diese Zeit zur Regeneration und Verpflegung.
            Der Testteil Kognitive Fähigkeiten (KFF) mit Figuren zusammensetzen beginnt automatisch nach Ablauf des Timers.
          </p>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-[12px] text-slate-400 text-left space-y-2">
            <p className="font-bold text-slate-200">Status des Prüfungstages:</p>
            <p className="flex items-center gap-2 text-emerald-400">
              <IconCheck className="w-4 h-4 shrink-0" />
              <span>Vormittagsblock (BMS & Textverständnis: 106 Aufgaben) abgeschlossen & gesichert.</span>
            </p>
            <p className="text-slate-400">
              Während der Pause besteht kein Zugriff auf Prüfungsfragen oder zukünftige Testteile.
            </p>
          </div>

          {/* Pause Action Controls: Back button & Skip button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onExit}
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[13.5px] font-bold border border-slate-700 transition-all cursor-pointer hover:border-slate-600"
            >
              <span>← Zurück zur Übersicht</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSession((prev) => advanceStageInternal({ ...prev, pauseShortened: true }));
                toast("Pause beendet. KFF: Figuren zusammensetzen gestartet!", "info");
              }}
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-[13.5px] font-black shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Pause überspringen</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11.5px] text-slate-500">
            Ihr Fortschritt ist dauerhaft gespeichert. Sie können zur Übersicht zurückkehren oder die Pause jederzeit vorzeitig beenden.
          </p>
        </div>
      </div>
    );
  }

  // 11. RENDER GM MERKPHASE (Dedicated Memory Phase Workspace)
  if (session.stage === "GM_MEMORY" || session.stage === "KFF_GM_MEM") {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen flex flex-col overflow-hidden bg-[#0F172A]">
        <GmMerkphaseWorkspace
          cards={session.gmMemorySet}
          simTitle="MedAT-H Generalprobe — KFF Gedächtnis Merkphase"
          isTimed={true}
          onFinishMerkphase={() => {
            setSession((prev) => advanceStageInternal(prev));
          }}
          onAbort={onExit}
        />
      </div>
    );
  }

  // 12. RENDER ACTIVE SUBTEST WORKSPACE
  const curQ = currentQuestions[session.currentQuestionIndex];
  if (!curQ) {
    return null;
  }

  const selectedAnswer = session.answers[curQ.id];
  const isMarked = session.markedForReview.includes(curQ.id);

  // Section answered count
  const sectionAnsweredCount = currentQuestions.filter(
    (q) => session.answers[q.id] !== undefined
  ).length;
  const sectionUnansweredCount = currentQuestions.length - sectionAnsweredCount;
  const sectionMarkedCount = currentQuestions.filter((q) =>
    session.markedForReview.includes(q.id)
  ).length;

  // Cumulative global question progress calculation
  const stageOffset = STAGE_QUESTION_OFFSETS[session.stage] || 0;
  const globalQuestionNumber = stageOffset + session.currentQuestionIndex + 1;
  const globalProgressPct = Math.round((globalQuestionNumber / 221) * 100);

  // Active pillar identifier
  const currentPillar = stageConfig.sectionCode === "PAUSE" ? "BMS" : stageConfig.sectionCode;

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-[#F8FAFC]">
      {/* MedAT Exam Header */}
      <MedatExamHeader
        examType="MEDAT-H"
        sectionCode={currentPillar}
        subjectTitle={stageConfig.title}
        topicTitle={stageConfig.subtestName}
        examTitle={dataset.title}
        currentIndex={session.currentQuestionIndex}
        totalQuestions={currentQuestions.length}
        isBookmarked={isMarked}
        timeDisplay={formatTimer(session.stageRemainingSeconds)}
        isTimeWarning={session.stageRemainingSeconds <= 300 && session.stageRemainingSeconds > 60}
        isTimeCritical={session.stageRemainingSeconds <= 60}
        onToggleBookmark={() => handleToggleMark(curQ.id)}
        onPause={() => setIsPauseModalOpen(true)}
        onOpenShortcuts={() => setIsShortcutsModalOpen(true)}
        onOpenMobileOverview={() => setIsMobileOverviewOpen(true)}
        onOpenScratchpad={() => setIsScratchpadOpen(true)}
        onRequestSubmit={() => setShowSectionSubmitConfirm(true)}
      />

      {/* Stage Indicator & Pillar Progress Ribbon */}
      <div className="border-b border-slate-200/90 bg-white/95 backdrop-blur-xs px-2.5 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-1.5 sm:gap-3 text-[12px] shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          {/* 4 Pillars Pacing Ribbon */}
          <div className="flex items-center gap-1 sm:gap-1.5 font-bold overflow-x-auto scrollbar-none py-0.5">
            <span
              className={`px-1.5 xs:px-2.5 py-0.5 rounded-lg text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider shrink-0 ${
                currentPillar === "BMS"
                  ? "bg-blue-600 text-white shadow-2xs"
                  : session.completedStages?.some((s) => s.startsWith("BMS"))
                  ? "bg-slate-100 text-slate-600 border border-slate-200/80"
                  : "bg-slate-50 text-slate-400"
              }`}
            >
              <span className="hidden xs:inline">1. </span>BMS<span className="hidden sm:inline"> (94)</span>
            </span>
            <span className="text-slate-300 text-[10px]">›</span>
            <span
              className={`px-1.5 xs:px-2.5 py-0.5 rounded-lg text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider shrink-0 ${
                currentPillar === "TV"
                  ? "bg-emerald-600 text-white shadow-2xs"
                  : session.completedStages?.includes("TV")
                  ? "bg-slate-100 text-slate-600 border border-slate-200/80"
                  : "bg-slate-50 text-slate-400"
              }`}
            >
              <span className="hidden xs:inline">2. </span>TV<span className="hidden sm:inline"> (12)</span>
            </span>
            <span className="text-slate-300 text-[10px] hidden xs:inline">›</span>
            <span
              className={`px-1.5 xs:px-2 py-0.5 rounded-lg text-[9.5px] xs:text-[10.5px] font-bold text-slate-500 bg-slate-100/70 border border-slate-200/60 hidden sm:inline-block shrink-0`}
            >
              Pause
            </span>
            <span className="text-slate-300 text-[10px]">›</span>
            <span
              className={`px-1.5 xs:px-2.5 py-0.5 rounded-lg text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider shrink-0 ${
                currentPillar === "KFF"
                  ? "bg-violet-600 text-white shadow-2xs"
                  : session.completedStages?.some((s) => ["FZ", "GM_RECALL", "ZF", "WF", "IE"].includes(s))
                  ? "bg-slate-100 text-slate-600 border border-slate-200/80"
                  : "bg-slate-50 text-slate-400"
              }`}
            >
              <span className="hidden xs:inline">3. </span>KFF<span className="hidden sm:inline"> (75)</span>
            </span>
            <span className="text-slate-300 text-[10px]">›</span>
            <span
              className={`px-1.5 xs:px-2.5 py-0.5 rounded-lg text-[9.5px] xs:text-[10.5px] font-black uppercase tracking-wider shrink-0 ${
                currentPillar === "SEK"
                  ? "bg-rose-600 text-white shadow-2xs"
                  : session.completedStages?.some((s) => ["ER", "EE", "SE"].includes(s))
                  ? "bg-slate-100 text-slate-600 border border-slate-200/80"
                  : "bg-slate-50 text-slate-400"
              }`}
            >
              <span className="hidden xs:inline">4. </span>SEK<span className="hidden sm:inline"> (40)</span>
            </span>
          </div>

          <span className="hidden md:inline-block text-slate-300">|</span>

          {/* Subtest Pill */}
          <span className="font-bold text-slate-700 hidden md:inline-flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span className="truncate">{stageConfig.title}</span>
            <span className="text-slate-400 font-normal shrink-0">({currentQuestions.length} Aufgaben)</span>
          </span>
        </div>

        {/* Global Progress Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1 text-slate-600 font-semibold text-[11px] sm:text-[11.5px]">
            <span className="hidden sm:inline">Aufgabe </span>
            <strong className="text-slate-900 font-bold">{globalQuestionNumber}</strong>
            <span className="hidden sm:inline"> von </span>
            <span className="sm:hidden">/</span>
            <strong className="text-slate-900 font-bold">221</strong>
            <span className="text-slate-400 hidden xs:inline">({globalProgressPct}%)</span>
          </div>

          <div className="w-16 sm:w-28 bg-slate-200 h-1.5 rounded-full overflow-hidden hidden sm:block">
            <div
              className="h-full bg-red-600 rounded-full transition-all duration-300"
              style={{ width: `${globalProgressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Split Layout: Workspace + Palette */}
      <div className="flex-1 flex overflow-hidden">
        {/* Question Workspace */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <MedatQuestionWorkspace
            question={curQ}
            currentIndex={session.currentQuestionIndex}
            totalQuestions={currentQuestions.length}
            selectedOption={typeof selectedAnswer === "number" ? selectedAnswer : undefined}
            isMarked={isMarked}
            answeredCount={sectionAnsweredCount}
            sectionCode={currentPillar}
            subjectTitle={stageConfig.subtestName}
            onSelectOption={(optIdx) => handleSelectOption(curQ.id, optIdx)}
            onClearOption={() => handleClearOption(curQ.id)}
            onToggleMark={() => handleToggleMark(curQ.id)}
            onPrev={() => {
              if (session.currentQuestionIndex > 0) {
                setSession((prev) => ({
                  ...prev,
                  currentQuestionIndex: prev.currentQuestionIndex - 1,
                }));
              }
            }}
            onNext={() => {
              if (session.currentQuestionIndex + 1 < currentQuestions.length) {
                setSession((prev) => ({
                  ...prev,
                  currentQuestionIndex: prev.currentQuestionIndex + 1,
                }));
              }
            }}
            onRequestSubmit={() => setShowSectionSubmitConfirm(true)}
            onOpenMobileOverview={() => setIsMobileOverviewOpen(true)}
            onOpenScratchpad={() => setIsScratchpadOpen(true)}
          />
        </div>

        {/* Desktop Question Palette Sidebar */}
        <div className="hidden lg:block w-72 border-l border-slate-200 bg-white overflow-y-auto">
          <MedatQuestionPalette
            questions={currentQuestions}
            currentIndex={session.currentQuestionIndex}
            answers={session.answers}
            marked={new Set(session.markedForReview)}
            onSelectQuestion={(idx) => {
              setSession((prev) => ({
                ...prev,
                currentQuestionIndex: idx,
              }));
            }}
            onRequestSubmit={() => setShowSectionSubmitConfirm(true)}
          />
        </div>
      </div>

      {/* Mobile Palette Drawer */}
      {isMobileOverviewOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex lg:hidden">
          <div className="w-80 max-w-[85vw] bg-white h-full ml-auto shadow-2xl flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <span className="font-bold text-slate-900 text-[14px]">Aufgabenübersicht</span>
              <button
                onClick={() => setIsMobileOverviewOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <MedatQuestionPalette
                questions={currentQuestions}
                currentIndex={session.currentQuestionIndex}
                answers={session.answers}
                marked={new Set(session.markedForReview)}
                isOpenMobile={true}
                onCloseMobile={() => setIsMobileOverviewOpen(false)}
                onSelectQuestion={(idx) => {
                  setSession((prev) => ({
                    ...prev,
                    currentQuestionIndex: idx,
                  }));
                  setIsMobileOverviewOpen(false);
                }}
                onRequestSubmit={() => {
                  setIsMobileOverviewOpen(false);
                  setShowSectionSubmitConfirm(true);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal: Section Submission Confirmation */}
      {showSectionSubmitConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="space-y-1.5 text-center">
              <span className="inline-block p-3 rounded-2xl bg-amber-50 text-amber-600 mb-1">
                <IconClock className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-black text-slate-900">
                {stageConfig.title} abschließen?
              </h3>
              <p className="text-[13px] text-slate-600">
                Sie haben <strong>{sectionAnsweredCount}</strong> von{" "}
                <strong>{currentQuestions.length}</strong> Aufgaben in diesem Abschnitt bearbeitet.
              </p>
            </div>

            {/* Answered / Unanswered stats */}
            <div className="grid grid-cols-3 gap-2 text-center text-[12px]">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="block font-bold text-slate-900">{sectionAnsweredCount}</span>
                <span className="text-[10.5px] text-slate-500">Bearbeitet</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${sectionUnansweredCount > 0 ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-slate-50 border-slate-200 text-slate-700"}`}>
                <span className="block font-bold">{sectionUnansweredCount}</span>
                <span className="text-[10.5px]">Offen</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="block font-bold text-slate-900">{sectionMarkedCount}</span>
                <span className="text-[10.5px] text-slate-500">Markiert</span>
              </div>
            </div>

            {sectionUnansweredCount > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/90 text-[12px] text-amber-900 space-y-1">
                <p className="font-bold">⚠️ Unbeantwortete Aufgaben vorhanden:</p>
                <p>
                  Im MedAT gibt es keine Minuspunkte für falsche Antworten. Raten ist bei Zeitmangel immer besser als eine leere Antwort!
                </p>
              </div>
            )}

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11.5px] text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">⚠️ Strikte Testtag-Regel:</p>
              <p>
                Nach der Abgabe wird dieser Testteil dauerhaft verriegelt. Ein Zurückkehren ist nicht mehr möglich.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => setShowSectionSubmitConfirm(false)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-slate-700 text-[13px] font-bold hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Weiter bearbeiten
              </button>
              <button
                type="button"
                onClick={handleManualStageSubmit}
                className="flex-1 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[13px] font-black shadow-md shadow-red-600/25 transition-colors cursor-pointer"
              >
                Abschnitt abschließen →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dev-Only Fast Forward Floater (Strictly DEV mode) */}
      {isDevMode && (
        <div className="fixed bottom-4 left-4 z-40 bg-slate-900/90 text-white text-[11px] font-semibold px-3 py-2 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 backdrop-blur-xs">
          <span>🛠 DEV:</span>
          <button
            onClick={handleToggleDevSpeed}
            className={`px-2 py-1 rounded-md text-[10px] font-black uppercase ${
              session.isDevSpeedEnabled
                ? "bg-amber-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {session.isDevSpeedEnabled ? "10s Timer: AN" : "10s Timer: AUS"}
          </button>
          <button
            onClick={() => setSession((prev) => advanceStageInternal(prev))}
            className="px-2 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 text-[10px] font-bold"
          >
            Sektion überspringen →
          </button>
        </div>
      )}

      {/* Auxiliary Modals */}
      <MedatPauseModal
        isOpen={isPauseModalOpen}
        answeredCount={Object.keys(session.answers).length}
        totalCount={221}
        onResume={() => setIsPauseModalOpen(false)}
        onExitAndSave={onExit}
      />

      <MedatShortcutsModal
        isOpen={isShortcutsModalOpen}
        onClose={() => setIsShortcutsModalOpen(false)}
      />



      <MedatScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        taskTitle={stageConfig.subtestName}
        ruleNotice={
          session.stage === "ZF" || session.stage === "WF" || session.stage === "KFF_ZF" || session.stage === "KFF_WF"
            ? "⚠️ Offizielle MedAT-Regel: Während der Untertests Zahlenfolgen und Wortflüssigkeit sind Notizen oder Gedächtnisstützen zu den zuvor eingeprägten Allergieausweisen strengstens verboten! Der Notizblock darf hier ausschließlich für Nebenrechnungen der aktuellen Aufgaben genutzt werden."
            : session.stage === "GM_RECALL" || session.stage === "KFF_GM_RECALL"
            ? "ℹ️ Offizielle MedAT-Regel: In der Abrufphase (15 Min.) sind handschriftliche Notizen und Gedächtnisprotokolle zu den Allergieausweisen wieder gestattet."
            : undefined
        }
      />
    </div>
  );
};
