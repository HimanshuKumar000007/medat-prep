/**
 * Types for MedAT Wortflüssigkeit (WF) — KFF Subtest
 * Scrambled letters from real German nouns -> determine the initial letter.
 * Format: 15 tasks in 20 minutes (~80s per task).
 */

export type WfDifficulty = "Leicht" | "Mittel" | "Schwer";

export type WfOptionKey = "A" | "B" | "C" | "D" | "E";

export interface WfQuestionData {
  id: string;
  simulationId: string; // e.g. "wf-sim1"
  questionNumber: number; // 1 to 15
  subtest: "WF";
  /** The individual letters of the scrambled word */
  letters: string[];
  /** String representation of scrambled letters, e.g. "I · N · M · Z · E · I · D" */
  scrambledLetters: string;
  /** The intended German noun */
  targetWord: string;
  /** The deterministic first letter of the target word */
  correctInitial: string;
  /** Options A–D contain possible initial letters; Option E is null or "Keine Antwort ist richtig" */
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string | null;
  };
  correctAnswer: WfOptionKey;
  difficulty: WfDifficulty;
  estimatedTime: number; // in seconds, typically 80
  /** Detailed explanation showing the target word, letters, and initial */
  explanation: string;
  tags?: string[];
}
