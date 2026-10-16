import type { StoredQuestion } from "../types";

export type IeQuantifier = "ALL" | "NO" | "SOME" | "SOME_NOT";

export type IeRuleType =
  | "modus_barbara"
  | "modus_celarent"
  | "modus_darii"
  | "modus_ferio"
  | "modus_camestres"
  | "modus_cesare"
  | "modus_baroco"
  | "modus_festino"
  | "modus_disamis"
  | "modus_datisi"
  | "modus_bocardo"
  | "modus_ferison"
  | "contraposition"
  | "fallacy_converse"
  | "fallacy_undistributed_middle"
  | "fallacy_illicit_process"
  | "fallacy_negative_premises"
  | "no_valid_conclusion";

export type IeDifficulty = "Leicht" | "Mittel" | "Schwer";

export type IeOptionKey = "A" | "B" | "C" | "D" | "E";

export interface IeQuestionData {
  id: string;
  simulationId: string;
  subtest: "IE";
  questionNumber: number;
  premises: [string, string];
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string; // Always: "Keine Schlussfolgerung ist richtig."
  };
  correctAnswer: IeOptionKey;
  difficulty: IeDifficulty;
  ruleType: IeRuleType;
  explanation: string;
}

export interface IeSimulationData {
  simulationId: string;
  simNumber: number;
  title: string;
  subtitle: string;
  timeLimitSeconds: number; // 600s = 10 minutes
  questions: IeQuestionData[];
}

export const IE_OPTION_KEYS: IeOptionKey[] = ["A", "B", "C", "D", "E"];

/**
 * Adapter function to convert an IeQuestionData item into the unified platform StoredQuestion format.
 */
export function ieQuestionToStoredQuestion(
  q: IeQuestionData,
  sim: IeSimulationData
): StoredQuestion {
  const correctIdx = IE_OPTION_KEYS.indexOf(q.correctAnswer);

  return {
    id: q.id,
    exam: "MEDAT-H", // Strictly MedAT-H exclusive
    section: "KFF",
    subjectId: "kff-imp",
    chapterId: "kff-imp-syll",
    topic: "Implikationen erkennen (IE)",
    concept: q.ruleType,
    difficulty: q.difficulty,
    questionText: `Prämisse 1: ${q.premises[0]}\nPrämisse 2: ${q.premises[1]}\n\nWelche Schlussfolgerung ist logisch gültig?`,
    options: [
      q.options.A,
      q.options.B,
      q.options.C,
      q.options.D,
      q.options.E,
    ],
    correctAnswer: correctIdx >= 0 ? correctIdx : 4,
    explanation: q.explanation,
    tags: ["KFF", "IE", "Implikationen", "Logik", "MedAT-H", q.ruleType],
    source: "medat-original",
    version: "2026.1",
    setOrder: sim.simNumber,
    ieData: q,
  } as StoredQuestion & { ieData: IeQuestionData };
}
