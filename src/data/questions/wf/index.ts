import type { StoredQuestion } from "../types";
import { optionKeyToIndex } from "../types";
import type { WfQuestionData } from "./types";
import { WF_SIMULATION_1_QUESTIONS } from "./wfSimulation1";
import { WF_SIMULATION_2_QUESTIONS } from "./wfSimulation2";
import { WF_SIMULATION_3_QUESTIONS } from "./wfSimulation3";
import { WF_SIMULATION_4_QUESTIONS } from "./wfSimulation4";
import { WF_SIMULATION_5_QUESTIONS } from "./wfSimulation5";
import { WF_SIMULATION_6_QUESTIONS } from "./wfSimulation6";
import { WF_SIMULATION_7_QUESTIONS } from "./wfSimulation7";
import { WF_SIMULATION_8_QUESTIONS } from "./wfSimulation8";
import { WF_SIMULATION_9_QUESTIONS } from "./wfSimulation9";
import { WF_SIMULATION_10_QUESTIONS } from "./wfSimulation10";

export * from "./types";
export * from "./wfSimulation1";
export * from "./wfSimulation2";
export * from "./wfSimulation3";
export * from "./wfSimulation4";
export * from "./wfSimulation5";
export * from "./wfSimulation6";
export * from "./wfSimulation7";
export * from "./wfSimulation8";
export * from "./wfSimulation9";
export * from "./wfSimulation10";

export const ALL_WF_QUESTIONS: WfQuestionData[] = [
  ...WF_SIMULATION_1_QUESTIONS,
  ...WF_SIMULATION_1_QUESTIONS.map((q, idx) => ({
    ...q,
    id: `KFF-WF-${String(idx + 1).padStart(3, "0")}`,
    legacyId: q.id,
  })),
  ...WF_SIMULATION_2_QUESTIONS,
  ...WF_SIMULATION_2_QUESTIONS.map((q, idx) => ({
    ...q,
    id: `KFF-WF-GP2-${String(idx + 1).padStart(3, "0")}`,
    legacyId: q.id,
  })),
  ...WF_SIMULATION_3_QUESTIONS,
  ...WF_SIMULATION_4_QUESTIONS,
  ...WF_SIMULATION_5_QUESTIONS,
  ...WF_SIMULATION_6_QUESTIONS,
  ...WF_SIMULATION_7_QUESTIONS,
  ...WF_SIMULATION_8_QUESTIONS,
  ...WF_SIMULATION_9_QUESTIONS,
  ...WF_SIMULATION_10_QUESTIONS,
];

/**
 * Convert WF question data into unified StoredQuestion format
 */
export function wfQuestionToStoredQuestion(wf: WfQuestionData): StoredQuestion {
  const match = wf.simulationId?.match(/wf-sim(\d+)/);
  const simNum = match ? parseInt(match[1], 10) : 1;

  const formatOption = (val: string | null, key: string): string => {
    if (key === "E" || val === null || val === "Keine Antwort ist richtig") {
      return "Keine Antwort ist richtig";
    }
    return val;
  };

  return {
    id: wf.id,
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-wf",
    chapterId: "kff-wf-basic",
    topic: `Wortflüssigkeit Simulation ${simNum}`,
    difficulty: wf.difficulty,
    questionText: `Welcher Anfangsbuchstabe gehört zum gesuchten Wort?\n\nGegebene Buchstaben: ${wf.scrambledLetters}`,
    options: [
      formatOption(wf.options.A, "A"),
      formatOption(wf.options.B, "B"),
      formatOption(wf.options.C, "C"),
      formatOption(wf.options.D, "D"),
      formatOption(wf.options.E, "E"),
    ],
    correctAnswer: optionKeyToIndex(wf.correctAnswer),
    explanation: wf.explanation,
    tags: wf.tags || ["KFF", "Wortflüssigkeit", "Simulation", `Sim-${simNum}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: simNum,
    wfData: wf,
  };
}

export const WF_STORED_QUESTIONS: StoredQuestion[] = ALL_WF_QUESTIONS.map(wfQuestionToStoredQuestion);
