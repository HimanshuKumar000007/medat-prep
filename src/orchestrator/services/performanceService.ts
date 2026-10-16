/**
 * src/orchestrator/services/performanceService.ts
 *
 * Performance Service: Canonical calculation engine for Chapter, Subject,
 * and Section KPIs, MedAT Readiness Index, and genuine student Weak Areas.
 */

import type {
  UserProfile,
  AttemptRecord,
  SetAttempt,
  ChapterStats,
  SubjectStats,
  SectionStats,
} from "../../dashboard/practiceContext";
import {
  CHAPTERS,
  CHAPTER_MASTERY_THRESHOLD,
  resolveChapterId,
  SUBJECTS,
  type Chapter,
  type NormalizedQuestion,
  type PracticeSection,
  type PracticeStatus,
} from "../../dashboard/practiceData";
import {
  calculateMedATReadiness,
  getSectionsForExam,
  type SectionCode,
} from "../../content/medat/config";
import { journeyService } from "./journeyService";
import type { CanonicalReadiness } from "../types";

export class PerformanceService {
  /**
   * Calculates comprehensive Chapter statistics strictly from genuine attempts.
   */
  public getChapterStats(
    rawChapterId: string,
    questions: NormalizedQuestion[],
    attemptHistory: Record<string, AttemptRecord>,
    wrong: Set<string>,
    setAttempts: Record<string, SetAttempt[]>,
    completedSetIds: Set<string>
  ): ChapterStats {
    const chapterId = resolveChapterId(rawChapterId);
    const fallbackSection = (chapterId.startsWith("kff-") || chapterId.startsWith("fz-") || chapterId.startsWith("zf-") || chapterId.startsWith("wf-") || chapterId.startsWith("gm-") || chapterId.startsWith("ie-")
      ? "KFF"
      : chapterId.startsWith("tv-")
      ? "TV"
      : chapterId.startsWith("sek-") || chapterId.startsWith("ee-") || chapterId.startsWith("er-") || chapterId.startsWith("se-")
      ? "SEK"
      : chapterId.startsWith("mf-")
      ? "MF"
      : "BMS") as PracticeSection;

    const chapter = CHAPTERS[chapterId] || {
      id: chapterId,
      subjectId: fallbackSection === "KFF" ? "kff-fig" : fallbackSection === "TV" ? "tv-main" : fallbackSection === "SEK" ? "sek-emo-rec" : "bio",
      section: fallbackSection,
      title: "Kapitel",
      subtitle: "",
      description: "",
      learningObjectives: [],
      estimatedMinutes: 30,
      tags: [],
      totalEstimatedCount: 80,
    };

    // Build quick lookup for normalized attempts to handle any synthetic variant IDs
    const normalizedAttempts: Record<string, AttemptRecord> = { ...attemptHistory };
    for (const [key, val] of Object.entries(attemptHistory)) {
      const baseId = key.replace(/-s\d+-\d+$/, "");
      if (baseId !== key && !normalizedAttempts[baseId]) {
        normalizedAttempts[baseId] = val;
      }
    }

    const chapterQuestions = questions.filter(
      (q) =>
        (q.chapterId === rawChapterId || q.chapterId === chapterId || resolveChapterId(q.chapterId) === chapterId) &&
        (!chapter.section || q.section === chapter.section)
    );
    const answered = chapterQuestions.filter((q) => normalizedAttempts[q.id] !== undefined);
    const correct = answered.filter((q) => normalizedAttempts[q.id]?.correct);
    const mistakes = chapterQuestions.filter((q) => {
      if (wrong.has(q.id)) return true;
      for (const w of wrong) {
        if (w.replace(/-s\d+-\d+$/, "") === q.id) return true;
      }
      return false;
    });
    const accuracy = answered.length > 0 ? Math.round((correct.length / answered.length) * 100) : 0;

    const sets = journeyService.getChapterSetsWithStatus(chapterId, setAttempts, completedSetIds);
    const completedSets = sets.filter((s) => s.status === "completed");
    const activeSet = journeyService.getActiveSetForChapter(chapterId, setAttempts, completedSetIds);
    const set5 = sets.find((s) => s.order === 5);
    const isMastered = set5?.status === "completed" && (set5.bestScore || 0) >= CHAPTER_MASTERY_THRESHOLD * 100;

    let status: PracticeStatus = "not_started";
    if (isMastered) {
      status = "mastered";
    } else if (completedSets.length > 0 || answered.length > 0) {
      status = "in_progress";
    }

    const progressPct = Math.round((completedSets.length / Math.max(sets.length, 1)) * 100);

    return {
      chapter,
      totalQuestions: chapterQuestions.length || chapter.totalEstimatedCount,
      answeredCount: answered.length,
      correctCount: correct.length,
      accuracy,
      status,
      masteryScore: set5?.bestScore,
      mistakesCount: mistakes.length,
      progressPct,
      totalSets: sets.length,
      completedSetsCount: completedSets.length,
      activeSetId: activeSet.id,
    };
  }

  /**
   * Calculates Subject group statistics (e.g. Bio, Chem, Phys, Math).
   */
  public getSubjectStats(
    subjectId: string,
    questions: NormalizedQuestion[],
    attemptHistory: Record<string, AttemptRecord>,
    wrong: Set<string>,
    setAttempts: Record<string, SetAttempt[]>,
    completedSetIds: Set<string>
  ): SubjectStats {
    const subject = SUBJECTS.find((s) => s.id === subjectId);
    if (!subject) {
      return {
        subject: { id: subjectId, section: "BMS" as PracticeSection, title: subjectId, subtitle: "", description: "", chapterIds: [], totalEstimatedCount: 0 },
        totalQuestions: 0,
        answeredCount: 0,
        correctCount: 0,
        accuracy: 0,
        totalChapters: 0,
        completedChapters: 0,
        reviewChapters: 0,
        progressPct: 0,
      };
    }
    const chaptersInSub = subject.chapterIds.map((cid) =>
      this.getChapterStats(cid, questions, attemptHistory, wrong, setAttempts, completedSetIds)
    );

    const answeredCount = chaptersInSub.reduce((sum, ch) => sum + ch.answeredCount, 0);
    const correctCount = chaptersInSub.reduce((sum, ch) => sum + ch.correctCount, 0);
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const completedChapters = chaptersInSub.filter((ch) => ch.status === "mastered").length;
    const reviewChapters = chaptersInSub.filter((ch) => ch.status === "needs_review").length;
    const progressPct = Math.round((completedChapters / Math.max(subject.chapterIds.length, 1)) * 100);

    return {
      subject,
      totalQuestions: subject.totalEstimatedCount,
      answeredCount,
      correctCount,
      accuracy,
      totalChapters: subject.chapterIds.length,
      completedChapters,
      reviewChapters,
      progressPct,
    };
  }

  /**
   * Calculates overall Section statistics (BMS, TV, KFF, SEK, MF).
   */
  public getSectionStats(
    section: PracticeSection,
    questions: NormalizedQuestion[],
    attemptHistory: Record<string, AttemptRecord>,
    wrong: Set<string>,
    setAttempts: Record<string, SetAttempt[]>,
    completedSetIds: Set<string>
  ): SectionStats {
    const subjects = SUBJECTS.filter((s) => s.section === section);
    const subStats = subjects.map((sub) =>
      this.getSubjectStats(sub.id, questions, attemptHistory, wrong, setAttempts, completedSetIds)
    );

    const answeredCount = subStats.reduce((sum, s) => sum + s.answeredCount, 0);
    const correctCount = subStats.reduce((sum, s) => sum + s.correctCount, 0);
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const totalChapters = subStats.reduce((sum, s) => sum + s.totalChapters, 0);
    const completedChapters = subStats.reduce((sum, s) => sum + s.completedChapters, 0);
    const progressPct = Math.round((completedChapters / Math.max(totalChapters, 1)) * 100);

    return {
      section,
      totalQuestions: subStats.reduce((sum, s) => sum + s.totalQuestions, 0),
      answeredCount,
      correctCount,
      accuracy,
      totalChapters,
      completedChapters,
      progressPct,
    };
  }

  /**
   * Computes the official weighted MedAT Readiness Index and section breakdown.
   */
  public getMedATReadiness(
    userProfile: UserProfile,
    questions: NormalizedQuestion[],
    attemptHistory: Record<string, AttemptRecord>,
    wrong: Set<string>,
    setAttempts: Record<string, SetAttempt[]>,
    completedSetIds: Set<string>
  ): CanonicalReadiness {
    const sections = getSectionsForExam(userProfile.examType);
    const accuracies: Partial<Record<SectionCode, number>> = {};

    for (const sec of sections) {
      const stats = this.getSectionStats(sec.code, questions, attemptHistory, wrong, setAttempts, completedSetIds);
      if (stats.answeredCount >= 3) {
        accuracies[sec.code] = stats.accuracy;
      }
    }

    const { readinessIndex, hasEnoughData } = calculateMedATReadiness(userProfile.examType, accuracies);

    const breakdown = {
      bms: accuracies.BMS ?? null,
      tv: accuracies.TV ?? null,
      kff: accuracies.KFF ?? null,
      sek: accuracies.SEK ?? null,
    };

    let confidence: "low" | "medium" | "high" = "low";
    const evaluatedSectionsCount = Object.keys(accuracies).length;
    if (evaluatedSectionsCount >= 3) confidence = "high";
    else if (evaluatedSectionsCount >= 2) confidence = "medium";

    let label = "Noch zu wenige Daten";
    if (readinessIndex !== null) {
      if (readinessIndex >= 80) label = "Hervorragend · Sehr gute Chancen";
      else if (readinessIndex >= 70) label = "Solide Basis · Im Zielkorridor";
      else if (readinessIndex >= 60) label = "Guter Aufbau · Steigerungspotenzial";
      else label = "Frühe Vorbereitung · Weiter trainieren";
    }

    return {
      readinessIndex,
      hasEnoughData,
      confidence,
      label,
      breakdown,
      trend: null,
      trendText: "Stabil",
    };
  }

  /**
   * Ranks the genuine top 3 Weak Areas (lowest accuracy where questions were answered).
   */
  public getWeakAreas(
    userProfile: UserProfile,
    questions: NormalizedQuestion[],
    attemptHistory: Record<string, AttemptRecord>,
    wrong: Set<string>,
    setAttempts: Record<string, SetAttempt[]>,
    completedSetIds: Set<string>
  ): { chapter: Chapter; stats: ChapterStats }[] {
    const activeSections = getSectionsForExam(userProfile.examType);
    const candidateChapters = activeSections
      .flatMap((sec) => SUBJECTS.filter((sub) => sub.section === sec.code))
      .flatMap((sub) => sub.chapterIds);

    const statsList = candidateChapters
      .map((cid) => ({
        chapter: CHAPTERS[cid],
        stats: this.getChapterStats(cid, questions, attemptHistory, wrong, setAttempts, completedSetIds),
      }))
      .filter(({ stats }) => stats.answeredCount >= 2 && stats.accuracy < 75);

    return statsList.sort((a, b) => a.stats.accuracy - b.stats.accuracy).slice(0, 3);
  }
}

export const performanceService = new PerformanceService();
