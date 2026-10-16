/**
 * Frontend Master Question Store (NEST / IISER Question Architecture)
 * Unified access to all MedAT questions loaded directly from clean JSON data files.
 */

import type { ExamType, SectionCode } from "../../content/medat/config";
import type { StoredQuestion } from "./types";
import {
  BIOLOGY_QUESTIONS,
  CHEMISTRY_QUESTIONS,
  PHYSICS_QUESTIONS,
  MATHEMATICS_QUESTIONS,
  KFF_QUESTIONS,
  TV_QUESTIONS,
  SEK_QUESTIONS,
  MANUAL_SKILLS_QUESTIONS,
} from "./loader";

export * from "./types";
export * from "./loader";
export * from "./seedSupabase";
export * from "./ie";

export const ALL_FRONTEND_QUESTIONS: StoredQuestion[] = [
  ...BIOLOGY_QUESTIONS,
  ...CHEMISTRY_QUESTIONS,
  ...PHYSICS_QUESTIONS,
  ...MATHEMATICS_QUESTIONS,
  ...KFF_QUESTIONS,
  ...TV_QUESTIONS,
  ...SEK_QUESTIONS,
  ...MANUAL_SKILLS_QUESTIONS,
];

/**
 * Filter questions for a specific exam track (MEDAT-H vs MEDAT-Z)
 */
export function getQuestionsForExam(examType: ExamType): StoredQuestion[] {
  return ALL_FRONTEND_QUESTIONS.filter((q) => {
    if (q.exam === "BOTH") return true;
    return q.exam === examType;
  });
}

/**
 * Get all questions belonging to a specific chapter
 */
export function getQuestionsByChapter(chapterId: string, examType?: ExamType): StoredQuestion[] {
  return ALL_FRONTEND_QUESTIONS.filter((q) => {
    if (q.chapterId !== chapterId) return false;
    if (!examType) return true;
    if (q.exam === "BOTH") return true;
    return q.exam === examType;
  });
}

/**
 * Get all questions belonging to a specific subtest/subject
 */
export function getQuestionsBySubject(subjectId: string, examType?: ExamType): StoredQuestion[] {
  return ALL_FRONTEND_QUESTIONS.filter((q) => {
    if (q.subjectId !== subjectId) return false;
    if (!examType) return true;
    if (q.exam === "BOTH") return true;
    return q.exam === examType;
  });
}

/**
 * Get all questions belonging to a specific section (BMS, TV, KFF, SEK, MF)
 */
export function getQuestionsBySection(section: SectionCode, examType?: ExamType): StoredQuestion[] {
  return ALL_FRONTEND_QUESTIONS.filter((q) => {
    if (q.section !== section) return false;
    if (!examType) return true;
    if (q.exam === "BOTH") return true;
    return q.exam === examType;
  });
}

/**
 * Lookup question by ID
 */
export function getQuestionById(id: string): StoredQuestion | undefined {
  return ALL_FRONTEND_QUESTIONS.find((q) => q.id === id);
}
