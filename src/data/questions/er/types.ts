import type { StoredQuestion } from "../types";

export type ErOptionKey = "A" | "B" | "C" | "D";

export type ErDifficulty = "Leicht" | "Mittel" | "Schwer";

export type ErStrategyType =
  | "emotional_reappraisal"
  | "pause_and_prioritize"
  | "constructive_communication"
  | "problem_focused_coping"
  | "perspective_taking"
  | "acceptance"
  | "emotional_expression"
  | "impulse_control"
  | "goal_preservation"
  | "social_support";

export interface ErQuestionData {
  id: string;
  legacyId?: string;
  simulationId: string;
  subtest: "ER";
  questionNumber: number;
  scenario: string;
  goal: string;
  emotion: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: ErOptionKey;
  difficulty: ErDifficulty;
  strategyType: ErStrategyType;
  explanation: string;
  explanationsIncorrect?: Record<ErOptionKey, string>;
  rationalesByOption?: Record<ErOptionKey, string>;
}

export interface ErSimulationData {
  simulationId: string;
  simNumber: number;
  title: string;
  subtitle: string;
  timeLimitSeconds: number; // 1080s = 18 minutes (~90s / task)
  questions: ErQuestionData[];
}

export const ER_OPTION_KEYS: ErOptionKey[] = ["A", "B", "C", "D"];

/**
 * Adapter function to convert an ErQuestionData item into the unified platform StoredQuestion format.
 */
export function erQuestionToStoredQuestion(
  q: ErQuestionData,
  sim: ErSimulationData
): StoredQuestion & { erData: ErQuestionData } {
  const correctIdx = ER_OPTION_KEYS.indexOf(q.correctAnswer);

  return {
    id: q.id,
    legacyId: q.legacyId,
    exam: "BOTH", // ER is strictly part of both MedAT-H and MedAT-Z
    section: "SEK",
    subjectId: "sek-emo-reg",
    chapterId: "sek-reg-stress",
    topic: "Emotionen regulieren (ER)",
    concept: q.strategyType,
    difficulty: q.difficulty,
    questionText: `Situation:\n${q.scenario}\n\nZiel:\n${q.goal}\n\nWelche Vorgehensweise ist am geeignetsten?`,
    options: [q.options.A, q.options.B, q.options.C, q.options.D],
    correctAnswer: correctIdx >= 0 ? correctIdx : 0,
    explanation: q.explanation,
    tags: ["SEK", "ER", "Regulation", q.strategyType, q.emotion, q.id],
    source: "medat-original",
    version: "2026.1",
    setOrder: sim.simNumber,
    erData: q,
  };
}
