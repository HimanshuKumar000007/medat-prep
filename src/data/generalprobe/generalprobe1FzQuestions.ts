/**
 * MedAT KFF — Figuren zusammensetzen (FZ) — Generalprobe #1
 * Exactly 15 Mathematically Verified Geometric Spatial Reasoning Questions
 * 
 * IDs: KFF-FZ-001 through KFF-FZ-015 (aliased to fz-sim1-q01 .. q15 for simulation tracking)
 * 
 * Specifications:
 * - 15 Questions, 20 Minutes (~80s / question)
 * - Pure 2D vector geometry with SVG rendering
 * - Mental rotation only: no mirroring / reflection (det = +1)
 * - Area conservation & exact cover (no gaps, no overlaps)
 * - Candidate choices: 4 visual figures (A, B, C, D) + Option E ("Keine der Antwortmöglichkeiten ist richtig")
 * - Unpredictable, balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - Difficulty distribution: 4 Leicht, 6 Mittel, 5 Schwer
 * - Review mode: Includes complete geometric assembly reconstruction with piece-by-piece layout
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { FzQuestionData } from "../questions/fz/types";
import { FZ_SIMULATION_1_QUESTIONS } from "../questions/fz/fzSimulation1";

export const RAW_GENERALPROBE_1_FZ_QUESTIONS: FzQuestionData[] = FZ_SIMULATION_1_QUESTIONS.map((q, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");
  const newId = `KFF-FZ-${numStr}`;
  return {
    ...q,
    id: newId,
    simulationId: "generalprobe-1",
    questionNumber: idx + 1,
    legacyId: q.id,
  } as FzQuestionData & { legacyId?: string };
});

export const GENERALPROBE_1_FZ_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_FZ_QUESTIONS.map((fz, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");
  const shapeFamily = fz.metadata?.shapeFamily || "Figuren zusammensetzen";

  return {
    id: `KFF-FZ-${numStr}`,
    legacyId: (fz as any).legacyId || `fz-sim1-q${String(idx + 1).padStart(2, "0")}`,
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
    tags: ["KFF", "Figuren zusammensetzen", shapeFamily, "Generalprobe #1", `KFF-FZ-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
    fzData: fz,
  };
});
