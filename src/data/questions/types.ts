/**
 * Question Data Types & JSON Schema
 * Structured for Austrian MedAT (Humanmedizin & Zahnmedizin)
 */

import type { ExamType, SectionCode } from "../../content/medat/config";

export type QuestionDifficulty = "Leicht" | "Mittel" | "Schwer" | "easy" | "medium" | "hard";
export type QuestionOptionKey = "A" | "B" | "C" | "D" | "E";

export type ContentSource =
  | "medat-original"
  | "official-reference"
  | "development-example"
  | "curated-practice";

/**
 * Standard JSON Question Format (Used for content generation, AI agent datasets, and Supabase seeding)
 */
export interface JsonQuestion {
  id: string;
  chapter: string;
  topic: string;
  set?: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correct_answer: QuestionOptionKey;
  explanation: string;
  difficulty: QuestionDifficulty;
  concept?: string;
  passage?: string;
  tags?: string[];
  source?: string;
  exam?: "MEDAT-H" | "MEDAT-Z" | "BOTH";
  section?: SectionCode;
  subjectId?: string;
  chapterId?: string;
}

/**
 * Runtime Application Question Interface (Used by UI components, scoring engines, and CBT simulator)
 */
export interface StoredQuestion {
  id: string;
  legacyId?: string;
  exam: "MEDAT-H" | "MEDAT-Z" | "BOTH";
  section: SectionCode;
  subjectId: string;
  chapterId: string;
  topic: string;
  concept?: string;
  passage?: string;
  difficulty: "Leicht" | "Mittel" | "Schwer";
  questionText: string;
  options: [string, string, string, string, string] | string[];
  correctAnswer: number; // 0 = A, 1 = B, 2 = C, 3 = D, 4 = E
  explanation: string;
  tags: string[];
  source?: ContentSource;
  version?: string;
  setOrder?: number;
  fzData?: any;
  zfData?: any;
  wfData?: any;
  gmData?: any;
  gmCardData?: any;
  gmAllCards?: any;
  ieData?: any;
  erData?: any;
  eeData?: any;
  seData?: any;
}

/**
 * Map JSON letter key (A..E) to index (0..4)
 */
export function optionKeyToIndex(key: QuestionOptionKey | string): number {
  switch (key?.toUpperCase()) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
    case "D":
      return 3;
    case "E":
      return 4;
    default:
      return 0;
  }
}

/**
 * Map difficulty to standardized UI label
 */
export function normalizeDifficulty(diff: QuestionDifficulty): "Leicht" | "Mittel" | "Schwer" {
  if (diff === "easy" || diff === "Leicht") return "Leicht";
  if (diff === "hard" || diff === "Schwer") return "Schwer";
  return "Mittel";
}

/**
 * Convert JSON question to normalized runtime format
 */
export function normalizeJsonQuestion(jq: JsonQuestion): StoredQuestion {
  const optionsArr: [string, string, string, string, string] = [
    jq.options.A || "",
    jq.options.B || "",
    jq.options.C || "",
    jq.options.D || "",
    jq.options.E || "",
  ];

  return {
    id: jq.id,
    exam: jq.exam === "MEDAT-H" || jq.exam === "MEDAT-Z" ? jq.exam : "BOTH",
    section: jq.section || "BMS",
    subjectId: jq.subjectId || "bio",
    chapterId: jq.chapterId || "bio-01-zelle",
    topic: jq.topic || jq.concept || jq.chapter,
    concept: jq.concept,
    passage: jq.passage,
    difficulty: normalizeDifficulty(jq.difficulty),
    questionText: jq.question,
    options: optionsArr,
    correctAnswer: optionKeyToIndex(jq.correct_answer),
    explanation: jq.explanation,
    tags: jq.tags || [jq.chapter, jq.topic],
    source: (jq.source as ContentSource) || "medat-original",
    version: "2026.1",
    setOrder: jq.set || 1,
  };
}
