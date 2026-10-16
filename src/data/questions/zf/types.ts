/**
 * Types for MedAT Zahlenfolgen (ZF) — KFF Subtest
 * Strictly 7 given numbers, determining the 8th and 9th numbers.
 * Basic arithmetic (+, -, *, /) and pattern recognition only.
 */

export type ZfDifficulty = "Leicht" | "Mittel" | "Schwer";

export type ZfRuleType =
  | "arithmetic"
  | "geometric"
  | "alternating"
  | "increasing_differences"
  | "decreasing_differences"
  | "interleaved"
  | "recursive"
  | "mixed_basic_operations";

export type ZfOptionKey = "A" | "B" | "C" | "D" | "E";

export interface ZfQuestionData {
  id: string;
  simulationId: string;
  questionNumber: number;
  subtest: "ZF";
  /** Exactly 7 given numbers */
  sequence: number[];
  /** Options A–D have [num8, num9]; Option E is null (signifying "Keine Antwort ist richtig") */
  options: {
    A: [number, number] | null;
    B: [number, number] | null;
    C: [number, number] | null;
    D: [number, number] | null;
    E: [number, number] | null;
  };
  correctAnswer: ZfOptionKey;
  /** The deterministic mathematical 8th and 9th values */
  expectedNextValues: [number, number];
  /** Human-readable short rule */
  rule: string;
  ruleType: ZfRuleType;
  difficulty: ZfDifficulty;
  estimatedTime: number; // in seconds, typically 60–90
  /** Detailed step-by-step arithmetic chain */
  explanation: string;
  questionText?: string;
}
