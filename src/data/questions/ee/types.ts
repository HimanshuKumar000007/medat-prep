import type { StoredQuestion } from "../types";

export type EeEmotionKey = "A" | "B" | "C" | "D" | "E";

export type EeProbability = "likely" | "unlikely";

export type EeEmotionSelection = "unselected" | "likely" | "unlikely";

export type EeDifficulty = "Leicht" | "Mittel" | "Schwer";

export interface EeEmotionItem {
  id: EeEmotionKey;
  label: string; // e.g. "Freude", "Angst"
  correctProbability: EeProbability;
}

export interface EeQuestionData {
  id: string;
  simulationId: string;
  subtest: "EE";
  questionNumber: number;
  scenario: string;
  person: {
    name: string;
    context: string;
  };
  emotions: [
    EeEmotionItem,
    EeEmotionItem,
    EeEmotionItem,
    EeEmotionItem,
    EeEmotionItem
  ];
  difficulty: EeDifficulty;
  explanation: string;
  rationaleByEmotion?: Record<EeEmotionKey, string>;
}

export interface EeSimulationData {
  simulationId: string;
  simNumber: number;
  title: string;
  subtitle: string;
  timeLimitSeconds: number; // 1260s = 21 minutes (~90s / task)
  questions: EeQuestionData[];
}

export const EE_EMOTION_KEYS: EeEmotionKey[] = ["A", "B", "C", "D", "E"];

const POWERS_OF_3 = [1, 3, 9, 27, 81];

/**
 * Encodes a user's 5 ternary selections (unselected: 0, unlikely: 1, likely: 2)
 * into a single unique integer code in [0..242].
 */
export function encodeEeSelections(selections: Record<EeEmotionKey, EeEmotionSelection>): number {
  let code = 0;
  EE_EMOTION_KEYS.forEach((key, idx) => {
    const val = selections[key] === "likely" ? 2 : selections[key] === "unlikely" ? 1 : 0;
    code += val * POWERS_OF_3[idx];
  });
  return code;
}

/**
 * Decodes an integer code [0..242] back into the 5 ternary selections.
 */
export function decodeEeSelections(code: number | undefined): Record<EeEmotionKey, EeEmotionSelection> {
  const result: Record<EeEmotionKey, EeEmotionSelection> = {
    A: "unselected",
    B: "unselected",
    C: "unselected",
    D: "unselected",
    E: "unselected",
  };
  if (code === undefined || code < 0) return result;

  EE_EMOTION_KEYS.forEach((key, idx) => {
    const digit = Math.floor(code / POWERS_OF_3[idx]) % 3;
    result[key] = digit === 2 ? "likely" : digit === 1 ? "unlikely" : "unselected";
  });
  return result;
}

/**
 * Returns true if and only if all 5 emotions have been explicitly selected (either likely or unlikely).
 */
export function isEeFullyAnswered(code: number | undefined): boolean {
  if (code === undefined || code === 0) return false;
  const decoded = decodeEeSelections(code);
  return EE_EMOTION_KEYS.every((k) => decoded[k] !== "unselected");
}

/**
 * Counts how many emotions (0..5) have been answered in the given task code.
 */
export function countEeAnsweredEmotions(code: number | undefined): number {
  if (code === undefined || code === 0) return 0;
  const decoded = decodeEeSelections(code);
  return EE_EMOTION_KEYS.filter((k) => decoded[k] !== "unselected").length;
}

/**
 * Calculates the exact target integer code for an EE question (each emotion is strictly 1 or 2).
 */
export function getEeCorrectAnswerCode(q: EeQuestionData): number {
  let code = 0;
  q.emotions.forEach((emo, idx) => {
    const val = emo.correctProbability === "likely" ? 2 : 1;
    code += val * POWERS_OF_3[idx];
  });
  return code;
}

/**
 * Calculates diagnostic sub-score: how many of the 5 individual emotions match (0..5).
 */
export function evaluateEeTaskDetail(
  userCode: number | undefined,
  q: EeQuestionData
): {
  isTaskCorrect: boolean;
  correctEmotionCount: number;
  resultsByEmotion: Record<
    EeEmotionKey,
    {
      userSelection: EeEmotionSelection;
      correctProbability: EeProbability;
      isMatch: boolean;
    }
  >;
} {
  const decoded = decodeEeSelections(userCode);
  let correctEmotionCount = 0;
  const resultsByEmotion = {} as Record<
    EeEmotionKey,
    {
      userSelection: EeEmotionSelection;
      correctProbability: EeProbability;
      isMatch: boolean;
    }
  >;

  q.emotions.forEach((emo) => {
    const userSel = decoded[emo.id];
    const isMatch = userSel === emo.correctProbability;
    if (isMatch) correctEmotionCount++;

    resultsByEmotion[emo.id] = {
      userSelection: userSel,
      correctProbability: emo.correctProbability,
      isMatch,
    };
  });

  return {
    isTaskCorrect: correctEmotionCount === 5,
    correctEmotionCount,
    resultsByEmotion,
  };
}

/**
 * Adapter function to convert an EeQuestionData item into the unified platform StoredQuestion format.
 */
export function eeQuestionToStoredQuestion(
  q: EeQuestionData,
  sim: EeSimulationData
): StoredQuestion & { eeData: EeQuestionData } {
  const correctCode = getEeCorrectAnswerCode(q);

  return {
    id: q.id,
    exam: "BOTH", // EE is tested in both MedAT-H and MedAT-Z
    section: "SEK",
    subjectId: "sek-emo-rec",
    chapterId: "sek-rec-face",
    topic: "Emotionen erkennen (EE)",
    concept: "Situative Emotionswahrscheinlichkeit",
    difficulty: q.difficulty,
    questionText: `Situation:\n${q.scenario}\n\nWie wahrscheinlich sind die folgenden Emotionen für ${q.person.name} in dieser Situation?`,
    options: q.emotions.map((e) => `${e.id}: ${e.label}`),
    correctAnswer: correctCode,
    explanation: q.explanation,
    tags: ["SEK", "EE", "Emotionen erkennen", sim.simulationId],
    source: "curated-practice",
    version: "2026.1",
    eeData: q,
  };
}
