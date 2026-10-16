/**
 * src/orchestrator/services/progressService.ts
 *
 * Progress Service: Centralizes question answering, batch recording,
 * set submissions, bookmarks, and mistake tracking.
 * Guarantees idempotency and handles resilient dual-persistence (Local Cache + Supabase).
 */

import type { AttemptRecord, SetAttempt, UserProfile } from "../../dashboard/practiceContext";
import {
  CANONICAL_QUESTIONS,
  CHAPTER_MASTERY_THRESHOLD,
  resolveChapterId,
  getSectionFromChapterId,
  getSectionFromQuestionId,
  getChapterFromQuestionId,
  type NormalizedQuestion,
} from "../../dashboard/practiceData";
import {
  recordQuestionAttemptToSupabase,
  recordSetAttemptToSupabase,
  syncBookmarkToSupabase,
  logUserActivityToSupabase,
} from "../../lib/dbSync";
import { syncStateMachine } from "../sync/syncStateMachine";

const STORAGE_PREFIX = "medat_prep_v2";

export function getScopedKey(userId: string | null | undefined, key: string): string {
  return userId ? `${STORAGE_PREFIX}_u_${userId}_${key}` : "";
}

export function saveScopedData<T>(userId: string | null | undefined, key: string, data: T): void {
  if (typeof window === "undefined" || !window.localStorage || !userId) return;
  try {
    const keyName = getScopedKey(userId, key);
    if (keyName) {
      localStorage.setItem(keyName, JSON.stringify(data));
    }
  } catch (err) {
    console.warn(`[ProgressService] Failed to save scoped key ${key}:`, err);
  }
}

export interface SetSubmissionResult {
  passed: boolean;
  chapterMastered: boolean;
  score: number;
  attempt: SetAttempt;
  isDuplicate?: boolean;
}

export class ProgressService {
  private processedSetKeys: Set<string> = new Set();

  /**
   * Records a single question answer with idempotency and Supabase sync.
   */
  public async recordAnswer(
    userId: string | null,
    questionId: string,
    selected: number,
    timeSpentSeconds: number = 0,
    currentAnswers: Record<string, number>,
    currentAttempts: Record<string, AttemptRecord>,
    currentSeen: Set<string>,
    currentWrong: Set<string>,
    questionsList: NormalizedQuestion[] = CANONICAL_QUESTIONS
  ): Promise<{
    isCorrect: boolean;
    answers: Record<string, number>;
    attemptHistory: Record<string, AttemptRecord>;
    seen: Set<string>;
    wrong: Set<string>;
  }> {
    const baseId = questionId.replace(/-s\d+-\d+$/, "");
    const q = questionsList.find((item) => item.id === questionId || item.id === baseId);
    const isCorrect = q ? selected === q.correct : false;
    const now = Date.now();
    const section = q?.section || getSectionFromQuestionId(questionId, questionsList);
    const chapterId = q?.chapterId || getChapterFromQuestionId(questionId, questionsList);

    // 1. Update In-Memory State
    const nextAnswers = { ...currentAnswers, [questionId]: selected };
    const nextAttempts = {
      ...currentAttempts,
      [questionId]: {
        selected,
        correct: isCorrect,
        timestamp: now,
        section,
        chapterId,
        timeSpentSeconds,
        userId: userId || undefined,
      },
    };
    const nextSeen = new Set(currentSeen).add(questionId);
    const nextWrong = new Set(currentWrong);

    if (isCorrect) {
      nextWrong.delete(questionId);
      nextWrong.delete(baseId);
    } else {
      nextWrong.add(questionId);
    }

    // 2. Persist to LocalStorage Mirror
    saveScopedData(userId, "answers", nextAnswers);
    saveScopedData(userId, "attempts", nextAttempts);
    saveScopedData(userId, "seen", Array.from(nextSeen));
    saveScopedData(userId, "wrong", Array.from(nextWrong));

    // 3. Sync to Supabase
    syncStateMachine.setSaving();
    try {
      await recordQuestionAttemptToSupabase(
        questionId,
        selected,
        isCorrect,
        timeSpentSeconds,
        q?.chapterId,
        q?.section
      );
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[ProgressService] Question attempt queued offline:", err);
      syncStateMachine.setPendingSync(err?.message || "Queued offline");
    }

    return {
      isCorrect,
      answers: nextAnswers,
      attemptHistory: nextAttempts,
      seen: nextSeen,
      wrong: nextWrong,
    };
  }

  /**
   * Records a batch of answers (e.g. from rapid drills or timed subtests).
   */
  public async recordBatchAnswers(
    userId: string | null,
    batch: { questionId: string; selected: number; timeSpentSeconds?: number }[],
    currentAnswers: Record<string, number>,
    currentAttempts: Record<string, AttemptRecord>,
    currentSeen: Set<string>,
    currentWrong: Set<string>,
    questionsList: NormalizedQuestion[] = CANONICAL_QUESTIONS
  ): Promise<{
    answers: Record<string, number>;
    attemptHistory: Record<string, AttemptRecord>;
    seen: Set<string>;
    wrong: Set<string>;
  }> {
    const now = Date.now();
    const nextAnswers = { ...currentAnswers };
    const nextAttempts = { ...currentAttempts };
    const nextSeen = new Set(currentSeen);
    const nextWrong = new Set(currentWrong);

    const syncPromises: Promise<any>[] = [];

    batch.forEach(({ questionId, selected, timeSpentSeconds = 0 }) => {
      const baseId = questionId.replace(/-s\d+-\d+$/, "");
      const q = questionsList.find((item) => item.id === questionId || item.id === baseId);
      const isCorrect = q ? selected === q.correct : false;
      const section = q?.section || getSectionFromQuestionId(questionId, questionsList);
      const chapterId = q?.chapterId || getChapterFromQuestionId(questionId, questionsList);

      nextAnswers[questionId] = selected;
      nextAttempts[questionId] = {
        selected,
        correct: isCorrect,
        timestamp: now,
        section,
        chapterId,
        timeSpentSeconds,
        userId: userId || undefined,
      };
      nextSeen.add(questionId);

      if (isCorrect) {
        nextWrong.delete(questionId);
        nextWrong.delete(baseId);
      } else {
        nextWrong.add(questionId);
      }

      syncPromises.push(
        recordQuestionAttemptToSupabase(
          questionId,
          selected,
          isCorrect,
          timeSpentSeconds,
          chapterId,
          section
        )
      );
    });

    saveScopedData(userId, "answers", nextAnswers);
    saveScopedData(userId, "attempts", nextAttempts);
    saveScopedData(userId, "seen", Array.from(nextSeen));
    saveScopedData(userId, "wrong", Array.from(nextWrong));

    syncStateMachine.setSaving();
    try {
      await Promise.all(syncPromises);
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[ProgressService] Batch answers queued offline:", err);
      syncStateMachine.setPendingSync(err?.message || "Queued offline");
    }

    return {
      answers: nextAnswers,
      attemptHistory: nextAttempts,
      seen: nextSeen,
      wrong: nextWrong,
    };
  }

  /**
   * Submits a completed Practice Set with idempotency check and cloud sync.
   */
  public async submitSet(
    userId: string | null,
    setId: string,
    chapterId: string,
    correctCount: number,
    totalQuestions: number,
    timeSpentSeconds: number,
    currentSetAttempts: Record<string, SetAttempt[]>,
    currentCompletedSetIds: Set<string>,
    idempotencyKey?: string
  ): Promise<SetSubmissionResult> {
    const dedupKey = idempotencyKey || `${setId}_${correctCount}_${totalQuestions}_${Math.floor(Date.now() / 3000)}`;
    if (this.processedSetKeys.has(dedupKey)) {
      const existing = (currentSetAttempts[setId] || []).slice(-1)[0];
      if (existing) {
        return {
          passed: existing.passed,
          chapterMastered: setId.endsWith("-set-5") && existing.passed,
          score: existing.score,
          attempt: existing,
          isDuplicate: true,
        };
      }
    }
    this.processedSetKeys.add(dedupKey);

    const scorePct = Math.round((correctCount / Math.max(totalQuestions, 1)) * 100);
    const isSet5 = setId.endsWith("-set-5");
    const passed = isSet5 ? scorePct >= CHAPTER_MASTERY_THRESHOLD * 100 : scorePct >= 60;
    const resolvedChapter = resolveChapterId(chapterId);
    const section = getSectionFromChapterId(resolvedChapter);

    const attempt: SetAttempt = {
      id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      setId,
      chapterId: resolvedChapter,
      section,
      status: "completed",
      completedAt: Date.now(),
      score: scorePct,
      correctCount,
      totalQuestions,
      timeSpentSeconds,
      passed,
      userId: userId || undefined,
    };

    // 1. Update in-memory collections
    const nextSetAttempts = {
      ...currentSetAttempts,
      [setId]: [...(currentSetAttempts[setId] || []), attempt],
    };
    const nextCompletedSetIds = new Set(currentCompletedSetIds).add(setId);

    // 2. Persist to scoped storage
    saveScopedData(userId, "set_attempts", nextSetAttempts);
    saveScopedData(userId, "completed_sets", Array.from(nextCompletedSetIds));

    // 3. Mark daily activity
    await logUserActivityToSupabase();

    // 4. Cloud sync with offline queue fallback
    syncStateMachine.setSaving();
    try {
      await recordSetAttemptToSupabase(attempt);
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[ProgressService] Set attempt queued offline:", err);
      syncStateMachine.setPendingSync(err?.message || "Queued offline");
    }

    return {
      passed,
      chapterMastered: isSet5 && passed,
      score: scorePct,
      attempt,
    };
  }

  /**
   * Toggles a bookmark for a question.
   */
  public async toggleBookmark(
    userId: string | null,
    questionId: string,
    currentBookmarks: Set<string>
  ): Promise<{ bookmarks: Set<string>; isBookmarked: boolean }> {
    const nextBookmarks = new Set(currentBookmarks);
    const isNowBookmarked = !nextBookmarks.has(questionId);

    if (isNowBookmarked) {
      nextBookmarks.add(questionId);
    } else {
      nextBookmarks.delete(questionId);
    }

    saveScopedData(userId, "bookmarks", Array.from(nextBookmarks));

    syncStateMachine.setSaving();
    try {
      await syncBookmarkToSupabase(questionId, isNowBookmarked);
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[ProgressService] Bookmark sync failed:", err);
      syncStateMachine.setPendingSync(err?.message);
    }

    return {
      bookmarks: nextBookmarks,
      isBookmarked: isNowBookmarked,
    };
  }
}

export const progressService = new ProgressService();
