/**
 * src/orchestrator/services/mockService.ts
 *
 * Mock Service: Coordinates Generalprobe & simulation attempts,
 * cloud synchronization to `medat_mock_results`, and calculation of mock statistics.
 */

import {
  type MockAttemptRecord,
  type MockExamCenterStats,
  calculateMockExamCenterStats,
  sanitizeMockHistory,
  STORAGE_KEY_HISTORY,
} from "../../data/generalprobe/useMockExamData";
import { saveMockResultToSupabase, fetchMockResultsFromSupabase } from "../../lib/dbSync";
import { syncStateMachine } from "../sync/syncStateMachine";

export class MockService {
  /**
   * Loads sanitized mock history from local storage.
   */
  public loadLocalHistory(): MockAttemptRecord[] {
    if (typeof window === "undefined" || !window.localStorage) return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return sanitizeMockHistory(parsed);
    } catch {
      return [];
    }
  }

  /**
   * Persists mock history to local storage.
   */
  public saveLocalHistory(history: MockAttemptRecord[]): void {
    if (typeof window === "undefined" || !window.localStorage) return;
    try {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
    } catch (e) {
      console.warn("[MockService] Failed to save local mock history:", e);
    }
  }

  /**
   * Submits a completed mock exam result, updating local history and Supabase.
   */
  public async submitMockResult(
    record: MockAttemptRecord,
    currentHistory: MockAttemptRecord[]
  ): Promise<MockAttemptRecord[]> {
    const nextHistory = [record, ...currentHistory];
    this.saveLocalHistory(nextHistory);

    syncStateMachine.setSaving();
    try {
      await saveMockResultToSupabase(record);
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[MockService] Mock exam sync failed, saved locally:", err);
      syncStateMachine.setPendingSync(err?.message);
    }

    return nextHistory;
  }

  /**
   * Hydrates mock results from Supabase if available.
   */
  public async hydrateFromCloud(): Promise<MockAttemptRecord[] | null> {
    try {
      const cloudResults = await fetchMockResultsFromSupabase();
      if (cloudResults && cloudResults.length > 0) {
        const sanitized = sanitizeMockHistory(cloudResults);
        this.saveLocalHistory(sanitized);
        return sanitized;
      }
    } catch (err) {
      console.warn("[MockService] Cloud mock fetch error:", err);
    }
    return null;
  }

  /**
   * Computes mock statistics strictly derived from real attempts.
   */
  public getStats(history: MockAttemptRecord[], activeExamId: string | null = null): MockExamCenterStats {
    return calculateMockExamCenterStats(history, activeExamId);
  }
}

export const mockService = new MockService();
