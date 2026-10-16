/**
 * MedAT KFF — Figuren zusammensetzen (FZ) — Generalprobe #4
 * Exactly 15 Mathematically Verified Geometric Spatial Reasoning Questions
 * 
 * IDs: KFF-FZ-GP4-001 through KFF-FZ-GP4-015 (aliased to fz-sim4-q01 .. q15 for simulation tracking)
 * 
 * Specifications:
 * - 15 Questions, 20 Minutes (~80s / question)
 * - Pure 2D vector geometry with SVG rendering
 * - Mental rotation only: no mirroring / reflection (det = +1)
 * - Area conservation & exact cover (no gaps, no overlaps)
 * - Candidate choices: 4 visual figures (A, B, C, D) + Option E ("Keine der Antwortmöglichkeiten ist richtig")
 * - Unpredictable, balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - Difficulty distribution: 4 Foundational (Leicht), 8 Intermediate (Mittel), 3 Advanced (Schwer)
 * - Review mode: Includes complete geometric assembly reconstruction with piece-by-piece layout
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { FzQuestionData, FzDifficulty } from "../questions/fz/types";
import { FZ_SIMULATION_4_QUESTIONS } from "../questions/fz/fzSimulation4";

export const RAW_GENERALPROBE_4_FZ_QUESTIONS: FzQuestionData[] = FZ_SIMULATION_4_QUESTIONS.map((q, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");
  const newId = `KFF-FZ-GP4-${numStr}`;
  
  // Established 4/8/3 difficulty distribution:
  // Q01-Q04: Leicht (4)
  // Q05-Q12: Mittel (8) - Q11 and Q12 are intermediate 5-piece assemblies
  // Q13-Q15: Schwer (3) - Complex multi-rotation high-symmetry assemblies
  let difficulty: FzDifficulty = q.difficulty;
  if (idx === 10 || idx === 11) {
    difficulty = "Mittel";
  }

  return {
    ...q,
    id: newId,
    simulationId: "generalprobe-4",
    questionNumber: idx + 1,
    difficulty,
    legacyId: q.id,
  } as FzQuestionData & { legacyId?: string };
});

export const GENERALPROBE_4_FZ_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_FZ_QUESTIONS.map((fz, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");
  const shapeFamily = fz.metadata?.shapeFamily || "Figuren zusammensetzen";

  return {
    id: `KFF-FZ-GP4-${numStr}`,
    legacyId: (fz as any).legacyId || `fz-sim4-q${String(idx + 1).padStart(2, "0")}`,
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig",
    chapterId: "kff-fig-l1",
    topic: shapeFamily,
    concept: "Figuren zusammensetzen",
    difficulty: fz.difficulty,
    questionText: fz.questionText || "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    options: [
      "Figur A",
      "Figur B",
      "Figur C",
      "Figur D",
      "Keine der Antwortmöglichkeiten ist richtig",
    ],
    correctAnswer: optionKeyToIndex(fz.correctAnswer),
    explanation: fz.explanation,
    tags: ["KFF", "Figuren zusammensetzen", shapeFamily, "Generalprobe #4", `KFF-FZ-GP4-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
    fzData: fz,
  };
});
