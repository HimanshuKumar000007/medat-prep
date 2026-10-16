import type { StoredQuestion } from "../types";
import { optionKeyToIndex } from "../types";
import type { FzQuestionData } from "./types";
import { FZ_SIMULATION_1_QUESTIONS } from "./fzSimulation1";
import { FZ_SIMULATION_2_QUESTIONS } from "./fzSimulation2";
import { FZ_SIMULATION_3_QUESTIONS } from "./fzSimulation3";
import { FZ_SIMULATION_4_QUESTIONS } from "./fzSimulation4";
import { FZ_SIMULATION_5_QUESTIONS } from "./fzSimulation5";
import { FZ_SIMULATION_6_QUESTIONS } from "./fzSimulation6";
import { FZ_SIMULATION_7_QUESTIONS } from "./fzSimulation7";
import { FZ_SIMULATION_8_QUESTIONS } from "./fzSimulation8";
import { FZ_SIMULATION_9_QUESTIONS } from "./fzSimulation9";
import { FZ_SIMULATION_10_QUESTIONS } from "./fzSimulation10";
import { FZ_SIMULATION_11_QUESTIONS } from "./fzSimulation11";

export * from "./types";
export * from "./fzSimulation1";
export * from "./fzSimulation2";
export * from "./fzSimulation3";
export * from "./fzSimulation4";
export * from "./fzSimulation5";
export * from "./fzSimulation6";
export * from "./fzSimulation7";
export * from "./fzSimulation8";
export * from "./fzSimulation9";
export * from "./fzSimulation10";
export * from "./fzSimulation11";

export const ALL_FZ_QUESTIONS: FzQuestionData[] = [
  ...FZ_SIMULATION_1_QUESTIONS,
  ...FZ_SIMULATION_1_QUESTIONS.map((q, idx) => ({
    ...q,
    id: `KFF-FZ-${String(idx + 1).padStart(3, "0")}`,
    legacyId: q.id,
  })),
  ...FZ_SIMULATION_2_QUESTIONS,
  ...FZ_SIMULATION_2_QUESTIONS.map((q, idx) => ({
    ...q,
    id: `KFF-FZ-GP2-${String(idx + 1).padStart(3, "0")}`,
    legacyId: q.id,
  })),
  ...FZ_SIMULATION_3_QUESTIONS,
  ...FZ_SIMULATION_4_QUESTIONS,
  ...FZ_SIMULATION_5_QUESTIONS,
  ...FZ_SIMULATION_6_QUESTIONS,
  ...FZ_SIMULATION_7_QUESTIONS,
  ...FZ_SIMULATION_8_QUESTIONS,
  ...FZ_SIMULATION_9_QUESTIONS,
  ...FZ_SIMULATION_10_QUESTIONS,
  ...FZ_SIMULATION_11_QUESTIONS,
];

/**
 * Convert FZ question data into StoredQuestion format
 */
export function fzQuestionToStoredQuestion(fz: FzQuestionData): StoredQuestion {
  const match = fz.simulationId?.match(/fz-sim(\d+)/);
  const simNum = match ? parseInt(match[1], 10) : 1;
  const shapeFamily = fz.metadata?.shapeFamily || "Figuren zusammensetzen";
  return {
    id: fz.id,
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig",
    chapterId: "kff-fig-l1",
    topic: shapeFamily,
    concept: "Figuren zusammensetzen",
    difficulty: fz.difficulty,
    questionText: fz.questionText,
    options: [
      "Figur A",
      "Figur B",
      "Figur C",
      "Figur D",
      "Keine der Antwortmöglichkeiten ist richtig",
    ],
    correctAnswer: optionKeyToIndex(fz.correctAnswer),
    explanation: fz.explanation,
    tags: ["KFF", "Figuren zusammensetzen", shapeFamily, `Simulation ${simNum}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: simNum,
    fzData: fz,
  };
}

export const FZ_STORED_QUESTIONS: StoredQuestion[] = ALL_FZ_QUESTIONS.map(fzQuestionToStoredQuestion);

