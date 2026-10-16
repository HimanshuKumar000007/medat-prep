import type { StoredQuestion } from "../types";
import { optionKeyToIndex } from "../types";
import type { ZfQuestionData } from "./types";
import { ZF_SIMULATION_1_QUESTIONS } from "./zfSimulation1";
import { ZF_SIMULATION_2_QUESTIONS } from "./zfSimulation2";
import { ZF_SIMULATION_3_QUESTIONS } from "./zfSimulation3";
import { ZF_SIMULATION_4_QUESTIONS } from "./zfSimulation4";
import { ZF_SIMULATION_5_QUESTIONS } from "./zfSimulation5";
import { ZF_SIMULATION_6_QUESTIONS } from "./zfSimulation6";
import { ZF_SIMULATION_7_QUESTIONS } from "./zfSimulation7";
import { ZF_SIMULATION_8_QUESTIONS } from "./zfSimulation8";
import { ZF_SIMULATION_9_QUESTIONS } from "./zfSimulation9";
import { ZF_SIMULATION_10_QUESTIONS } from "./zfSimulation10";
import { ZF_SIMULATION_11_QUESTIONS } from "./zfSimulation11";

export * from "./types";
export * from "./zfSimulation1";
export * from "./zfSimulation2";
export * from "./zfSimulation3";
export * from "./zfSimulation4";
export * from "./zfSimulation5";
export * from "./zfSimulation6";
export * from "./zfSimulation7";
export * from "./zfSimulation8";
export * from "./zfSimulation9";
export * from "./zfSimulation10";
export * from "./zfSimulation11";

export const ALL_ZF_QUESTIONS: ZfQuestionData[] = [
  ...ZF_SIMULATION_1_QUESTIONS,
  ...ZF_SIMULATION_1_QUESTIONS.map((q, idx) => ({
    ...q,
    id: `KFF-ZF-${String(idx + 1).padStart(3, "0")}`,
    legacyId: q.id,
  })),
  ...ZF_SIMULATION_2_QUESTIONS,
  ...ZF_SIMULATION_2_QUESTIONS.map((q, idx) => ({
    ...q,
    id: `KFF-ZF-GP2-${String(idx + 1).padStart(3, "0")}`,
    legacyId: q.id,
  })),
  ...ZF_SIMULATION_3_QUESTIONS,
  ...ZF_SIMULATION_4_QUESTIONS,
  ...ZF_SIMULATION_5_QUESTIONS,
  ...ZF_SIMULATION_6_QUESTIONS,
  ...ZF_SIMULATION_7_QUESTIONS,
  ...ZF_SIMULATION_8_QUESTIONS,
  ...ZF_SIMULATION_9_QUESTIONS,
  ...ZF_SIMULATION_10_QUESTIONS,
  ...ZF_SIMULATION_11_QUESTIONS,
];

/**
 * Convert ZF question data into unified StoredQuestion format
 */
export function zfQuestionToStoredQuestion(zf: ZfQuestionData): StoredQuestion {
  const match = zf.simulationId?.match(/zf-sim(\d+)/);
  const simNum = match ? parseInt(match[1], 10) : 1;
  const seqStr = zf.sequence.join(" | ");

  const formatOption = (val: [number, number] | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine Antwort ist richtig";
    }
    return `${val[0]} / ${val[1]}`;
  };

  return {
    id: zf.id,
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-num",
    chapterId: "kff-num-arith",
    topic: "Zahlenfolgen",
    concept: "Zahlenfolgen",
    difficulty: zf.difficulty,
    questionText:
      zf.questionText ||
      `Welche zwei Zahlen setzen die Reihe logisch fort?\n\n${seqStr} | ? | ?`,
    options: [
      formatOption(zf.options.A, "A"),
      formatOption(zf.options.B, "B"),
      formatOption(zf.options.C, "C"),
      formatOption(zf.options.D, "D"),
      formatOption(zf.options.E, "E"),
    ],
    correctAnswer: optionKeyToIndex(zf.correctAnswer),
    explanation: zf.explanation,
    tags: ["KFF", "Zahlenfolgen", zf.ruleType, `Simulation ${simNum}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: simNum,
    zfData: zf,
  };
}

export const ZF_STORED_QUESTIONS: StoredQuestion[] = ALL_ZF_QUESTIONS.map(zfQuestionToStoredQuestion);
