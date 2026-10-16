import type { StoredQuestion } from "../types";

export type SeConsiderationKey = "A" | "B" | "C" | "D" | "E";

export type SeRank = 1 | 2 | 3 | 4 | 5;

export type SeUserRank = 0 | 1 | 2 | 3 | 4 | 5; // 0 = unselected

export type SeDifficulty = "Leicht" | "Mittel" | "Schwer";

export interface SeConsiderationItem {
  id: SeConsiderationKey;
  text: string;
}

export interface SeQuestionData {
  id: string;
  legacyId?: string;
  simulationId: string;
  subtest: "SE";
  questionNumber: number;
  scenario: string;
  decisionContext?: string;
  considerations: [
    SeConsiderationItem,
    SeConsiderationItem,
    SeConsiderationItem,
    SeConsiderationItem,
    SeConsiderationItem
  ];
  referenceRanking: Record<SeConsiderationKey, SeRank>;
  difficulty: SeDifficulty;
  competencyTags: string[];
  explanation: string;
  rationaleByRank?: Partial<Record<SeConsiderationKey, string>>;
}

export interface SeSimulationData {
  simulationId: string;
  simNumber: number;
  title: string;
  subtitle: string;
  timeLimitSeconds: number; // 1260s = 21 minutes (~90s / task)
  questions: SeQuestionData[];
}

export const SE_CONSIDERATION_KEYS: SeConsiderationKey[] = ["A", "B", "C", "D", "E"];
export const SE_RANKS: SeRank[] = [1, 2, 3, 4, 5];

/**
 * Encodes a user's 5 ranks (0..5 each for A, B, C, D, E)
 * into a single decimal integer: rA*10000 + rB*1000 + rC*100 + rD*10 + rE.
 * Example: A=1, B=4, C=5, D=2, E=3 -> 14523.
 */
export function encodeSeRanking(ranking: Partial<Record<SeConsiderationKey, number>>): number {
  const rA = ranking.A || 0;
  const rB = ranking.B || 0;
  const rC = ranking.C || 0;
  const rD = ranking.D || 0;
  const rE = ranking.E || 0;
  return rA * 10000 + rB * 1000 + rC * 100 + rD * 10 + rE;
}

/**
 * Decodes an integer code back into the 5 consideration ranks.
 */
export function decodeSeRanking(code: number | undefined): Record<SeConsiderationKey, number> {
  const result: Record<SeConsiderationKey, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };
  if (code === undefined || code <= 0) return result;

  result.A = Math.floor(code / 10000) % 10;
  result.B = Math.floor(code / 1000) % 10;
  result.C = Math.floor(code / 100) % 10;
  result.D = Math.floor(code / 10) % 10;
  result.E = code % 10;
  return result;
}

/**
 * Validates whether a ranking is a complete, bijective permutation of {1, 2, 3, 4, 5}.
 * Ranks must all be in 1..5, and each rank 1..5 must be used exactly once.
 */
export function isSeRankingValid(ranking: Record<SeConsiderationKey, number>): boolean {
  const seenRanks = new Set<number>();
  for (const k of SE_CONSIDERATION_KEYS) {
    const r = ranking[k];
    if (r < 1 || r > 5) return false;
    if (seenRanks.has(r)) return false;
    seenRanks.add(r);
  }
  return seenRanks.size === 5;
}

/**
 * Checks whether an integer answer code represents a fully answered, valid ranking.
 */
export function isSeFullyAnswered(code: number | undefined): boolean {
  if (code === undefined || code < 11111) return false;
  const decoded = decodeSeRanking(code);
  return isSeRankingValid(decoded);
}

/**
 * Counts how many considerations have an assigned rank in 1..5.
 */
export function countSeRankedConsiderations(code: number | undefined): number {
  if (code === undefined || code <= 0) return 0;
  const decoded = decodeSeRanking(code);
  return SE_CONSIDERATION_KEYS.filter((k) => decoded[k] >= 1 && decoded[k] <= 5).length;
}

export interface SeScoreResult {
  isValid: boolean;
  score: number;        // Normalized agreement score: 0.0 .. 1.0
  scorePct: number;     // 0 .. 100 %
  distance: number;     // Sum of squared rank differences D: 0 .. 40
  errorReason?: string;
}

/**
 * Calculates the ranking agreement score between user ranking and reference ranking.
 *
 * Psychometric Formula:
 * D = sum_{k in {A..E}} (r_user(k) - r_ref(k))^2
 * For n = 5 items, max D occurs on complete reverse permutation:
 * (1-5)^2 + (2-4)^2 + (3-3)^2 + (4-2)^2 + (5-1)^2 = 16 + 4 + 0 + 4 + 16 = 40.
 * Normalized agreement score:
 * score = 1 - (D / 40)
 *
 * Exact match (D = 0) -> 1.0 (100%)
 * Inverted (D = 40)   -> 0.0 (0%)
 * Two adjacent swaps  -> 0.90 (90%)
 * Invalid / duplicate / incomplete -> 0.0 (isValid = false)
 */
export function calculateSeScore(
  userRankingInput: Partial<Record<SeConsiderationKey, number>> | number | undefined,
  referenceRanking: Record<SeConsiderationKey, SeRank>
): SeScoreResult {
  if (userRankingInput === undefined) {
    return { isValid: false, score: 0, scorePct: 0, distance: 40, errorReason: "Keine Eingabe vorhanden." };
  }

  const userRanking: Record<SeConsiderationKey, number> =
    typeof userRankingInput === "number"
      ? decodeSeRanking(userRankingInput)
      : {
          A: userRankingInput.A || 0,
          B: userRankingInput.B || 0,
          C: userRankingInput.C || 0,
          D: userRankingInput.D || 0,
          E: userRankingInput.E || 0,
        };

  if (!isSeRankingValid(userRanking)) {
    return {
      isValid: false,
      score: 0,
      scorePct: 0,
      distance: 40,
      errorReason: "Ungültige Reihung: Alle Ränge von 1 bis 5 müssen genau einmal vergeben sein.",
    };
  }

  let distance = 0;
  for (const k of SE_CONSIDERATION_KEYS) {
    const u = userRanking[k];
    const r = referenceRanking[k];
    const diff = u - r;
    distance += diff * diff;
  }

  // Max squared distance for n=5 permutation is 40
  const normalizedScore = Math.max(0, Math.min(1, 1 - distance / 40));
  const roundedScore = Math.round(normalizedScore * 100) / 100;
  const scorePct = Math.round(roundedScore * 100);

  return {
    isValid: true,
    score: roundedScore,
    scorePct,
    distance,
  };
}

/**
 * Detailed diagnostic evaluation of an SE task for review display.
 */
export function evaluateSeTaskDetail(
  userCode: number | undefined,
  q: SeQuestionData
): {
  isValid: boolean;
  score: number;
  scorePct: number;
  userRanking: Record<SeConsiderationKey, number>;
  referenceRanking: Record<SeConsiderationKey, SeRank>;
  resultsByConsideration: Record<
    SeConsiderationKey,
    {
      text: string;
      userRank: number;
      refRank: number;
      delta: number;
      isExactMatch: boolean;
    }
  >;
} {
  const userRanking = decodeSeRanking(userCode);
  const scoreResult = calculateSeScore(userRanking, q.referenceRanking);

  const resultsByConsideration = {} as Record<
    SeConsiderationKey,
    {
      text: string;
      userRank: number;
      refRank: number;
      delta: number;
      isExactMatch: boolean;
    }
  >;

  q.considerations.forEach((item) => {
    const u = userRanking[item.id] || 0;
    const r = q.referenceRanking[item.id];
    resultsByConsideration[item.id] = {
      text: item.text,
      userRank: u,
      refRank: r,
      delta: u > 0 ? u - r : 0,
      isExactMatch: u === r,
    };
  });

  return {
    isValid: scoreResult.isValid,
    score: scoreResult.score,
    scorePct: scoreResult.scorePct,
    userRanking,
    referenceRanking: q.referenceRanking,
    resultsByConsideration,
  };
}

/**
 * Adapter function to convert a SeQuestionData item into the unified platform StoredQuestion format.
 */
export function toStoredQuestion(
  q: SeQuestionData,
  sim: SeSimulationData
): StoredQuestion & { seData: SeQuestionData } {
  const correctCode = encodeSeRanking(q.referenceRanking);

  return {
    id: q.id,
    legacyId: q.legacyId,
    exam: "BOTH", // SE is tested in both MedAT-H and MedAT-Z
    section: "SEK",
    subjectId: "sek-soc-dec",
    chapterId: "sek-dec-ethics",
    topic: "Soziales Entscheiden (SE)",
    concept: "Ethische Reihung von Handlungsprioritäten",
    difficulty: q.difficulty,
    questionText: `Situation:\n${q.scenario}\n\nWie wichtig sollten die folgenden Überlegungen für die Entscheidungsfindung sein? (1 = am wichtigsten, 5 = am wenigsten wichtig)`,
    options: q.considerations.map((c) => `${c.id}: ${c.text}`),
    correctAnswer: correctCode,
    explanation: q.explanation,
    tags: ["SEK", "SE", "Soziales Entscheiden", sim.simulationId, ...q.competencyTags],
    source: "curated-practice",
    version: "2026.1",
    seData: q,
  };
}
