/**
 * src/orchestrator/queries/getJourneyState.ts
 *
 * Canonical Read Query for the 5-Phase Journey Map (Plan Screen).
 */

import type { CanonicalJourneyState, OrchestratorState } from "../types";
import { journeyService } from "../services/journeyService";
import { performanceService } from "../services/performanceService";
import { CHAPTERS, CANONICAL_QUESTIONS, type NormalizedQuestion } from "../../dashboard/practiceData";

export function getJourneyState(
  state: OrchestratorState,
  questions: NormalizedQuestion[] = CANONICAL_QUESTIONS
): CanonicalJourneyState {
  const { userProfile, answers, attemptHistory, wrong, setAttempts, completedSetIds } = state;

  const phases = journeyService.getLearningPlanPhases(
    userProfile,
    answers,
    (chId) => performanceService.getChapterStats(chId, questions, attemptHistory, wrong, setAttempts, completedSetIds)
  );

  const activeUnit = journeyService.getActiveLearningUnit(
    userProfile,
    answers,
    (chId) => performanceService.getChapterStats(chId, questions, attemptHistory, wrong, setAttempts, completedSetIds),
    (chId) => journeyService.getActiveSetForChapter(chId, setAttempts, completedSetIds)
  );

  const allChapters = Object.values(CHAPTERS);
  const totalChapters = allChapters.length;

  const completedChaptersCount = allChapters.filter((ch) => {
    const stats = performanceService.getChapterStats(ch.id, questions, attemptHistory, wrong, setAttempts, completedSetIds);
    return stats.status === "mastered";
  }).length;

  const overallProgressPercent = Math.round((completedChaptersCount / Math.max(totalChapters, 1)) * 100);

  let currentPhaseIndex = 0;
  switch (userProfile.preparationStage) {
    case "started_studying":
      currentPhaseIndex = 1;
      break;
    case "preparing_while":
      currentPhaseIndex = 2;
      break;
    case "doing_mocks":
      currentPhaseIndex = 3;
      break;
    default:
      currentPhaseIndex = 0;
  }

  return {
    phases,
    activeUnit,
    totalChapters,
    completedChaptersCount,
    overallProgressPercent,
    currentPhaseIndex,
  };
}
