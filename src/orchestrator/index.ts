/**
 * src/orchestrator/index.ts
 *
 * Central Single Orchestration Layer for MedAT Prep.
 * Unifies state transitions, authoritative cloud persistence, resilient local cache/queue,
 * and canonical read queries across Dashboard, Journey Map, Mission, and Generalprobe.
 */

import { useEffect, useState, useSyncExternalStore } from "react";
import type {
  DomainCommand,
  CommandResult,
  OrchestratorState,
  SyncState,
  SyncStatus,
  CanonicalJourneyState,
} from "./types";
import type { UserProfile, SetAttempt, AttemptRecord } from "../dashboard/practiceContext";
import { CANONICAL_QUESTIONS, type NormalizedQuestion } from "../dashboard/practiceData";
import { supabase } from "../lib/supabase";
import {
  fetchCompleteUserDataFromSupabase,
  flushPendingSyncQueue,
  syncLocalProgressToSupabase,
  syncAllLocalProgressToSupabase,
  syncUserProfileToSupabase,
  logUserActivityToSupabase,
} from "../lib/dbSync";
import { getTodayViennaString } from "../lib/dateService";
import { sanitizeUserProfile } from "../lib/profileUtils";
import { getDailyMissionStorageKey, type PersistedDailyMission } from "../dashboard/dailyMissionEngine";
import { syncStateMachine } from "./sync/syncStateMachine";
import { progressService, getScopedKey, saveScopedData } from "./services/progressService";
import { missionService } from "./services/missionService";
import { journeyService } from "./services/journeyService";
import { performanceService } from "./services/performanceService";
import { mockService } from "./services/mockService";
import { getDashboardSummary } from "./queries/getDashboardSummary";
import { getJourneyState } from "./queries/getJourneyState";
import type { DashboardData } from "../dashboard/useDashboardData";

const DEFAULT_PROFILE: UserProfile = {
  name: "Student:in",
  examType: "MEDAT-H",
  targetYear: 2027,
  targetUniversity: "undecided",
  preparationStage: "just_starting",
  dailyStudyTime: "1_2h",
  dailyMinutes: 60,
  studyDaysPerWeek: 5,
  planConfigured: true,
  focusAreas: ["BMS"],
  onboarded: true,
};

function loadScopedDataSafe<T>(userId: string | null | undefined, key: string, fallback: T): T {
  if (typeof window === "undefined" || !window.localStorage || !userId) return fallback;
  try {
    const keyName = getScopedKey(userId, key);
    if (!keyName) return fallback;
    const userSaved = localStorage.getItem(keyName);
    if (userSaved) return JSON.parse(userSaved);
  } catch (e) {}
  return fallback;
}

export class DataOrchestrator {
  private state: OrchestratorState;
  private listeners: Set<(state: OrchestratorState) => void> = new Set();
  private isHydrating: boolean = false;

  constructor() {
    let initialUserId: string | null = null;
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        // Purge any legacy mirror or guest keys to prevent cross-account pollution
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (
            k &&
            (k.startsWith("medat_v3_mirror_") ||
              k.startsWith("medat_prep_v2_guest_") ||
              k.startsWith("medat_prep_prod_v1_"))
          ) {
            keysToRemove.push(k);
          }
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
        sessionStorage.removeItem("medat_demo_preview");

        const isLoggedOut = localStorage.getItem("medat_user_logged_out") === "true";
        if (!isLoggedOut) {
          initialUserId = localStorage.getItem("medat_current_user_id");
          if (!initialUserId) {
            for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              if (key && key.startsWith("sb-") && key.endsWith("-auth-token")) {
                const item = localStorage.getItem(key);
                if (item) {
                  const parsed = JSON.parse(item);
                  if (typeof parsed?.user?.id === "string") {
                    initialUserId = parsed.user.id;
                    localStorage.setItem("medat_current_user_id", parsed.user.id);
                    break;
                  }
                }
              }
            }
          }
        }
      } catch {}
    }

    const savedProfile = loadScopedDataSafe<UserProfile | null>(initialUserId, "profile", null);
    const answers = loadScopedDataSafe<Record<string, number>>(initialUserId, "answers", {});
    const attemptHistory = loadScopedDataSafe<Record<string, AttemptRecord>>(initialUserId, "attempts", {});
    const bookmarksList = loadScopedDataSafe<string[]>(initialUserId, "bookmarks", []);
    const wrongList = loadScopedDataSafe<string[]>(initialUserId, "wrong", []);
    const seenList = loadScopedDataSafe<string[]>(initialUserId, "seen", []);
    const completedSetsList = loadScopedDataSafe<string[]>(initialUserId, "completed_sets", []);
    const setAttempts = loadScopedDataSafe<Record<string, SetAttempt[]>>(initialUserId, "set_attempts", {});
    const validCompletedSets = completedSetsList.filter(
      (id) =>
        Array.isArray(setAttempts[id]) &&
        setAttempts[id].length > 0 &&
        setAttempts[id].some(
          (a) =>
            (typeof a.totalQuestions === "number" && a.totalQuestions > 0) ||
            (typeof a.score === "number" && a.score >= 0)
        )
    );
    const activityDates = loadScopedDataSafe<string[]>(initialUserId, "activity_dates", []);
    const mockHistory = mockService.loadLocalHistory();

    this.state = {
      userId: initialUserId,
      userProfile: savedProfile ? sanitizeUserProfile(savedProfile) : sanitizeUserProfile(DEFAULT_PROFILE),
      answers,
      attemptHistory,
      setAttempts,
      completedSetIds: new Set(validCompletedSets),
      bookmarks: new Set(bookmarksList),
      wrong: new Set(wrongList),
      seen: new Set(seenList),
      activityDates,
      mockHistory,
      syncState: syncStateMachine.getState(),
      isHydrated: false,
      lastHydratedAt: null,
      todayMission: null,
    };

    // Forward sync state transitions to orchestrator listeners
    syncStateMachine.subscribe((syncState) => {
      this.state.syncState = syncState;
      this.notify();
    });

    this.initAuthAndHydration();
  }

  // --------------------------------------------------
  // Auth & Cloud Hydration
  // --------------------------------------------------
  private initAuthAndHydration(): void {
    if (typeof window === "undefined") return;

    const isLoggedOut = () => {
      try {
        return localStorage.getItem("medat_user_logged_out") === "true";
      } catch {
        return false;
      }
    };

    const restoreAndHydrate = async (userId: string) => {
      if (isLoggedOut()) return;
      this.setUserId(userId);
      await this.hydrateFromSupabase();
    };

    // 1. Initial Session Check (refreshes expired access tokens automatically)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (isLoggedOut()) return;
      const uid = session?.user?.id;
      if (uid) {
        restoreAndHydrate(uid);
      } else {
        supabase.auth.getUser().then(({ data: { user } }) => {
          if (user?.id && !isLoggedOut()) {
            restoreAndHydrate(user.id);
          }
        });
      }
    });

    // 2. Auth State Change Listener
    supabase.auth.onAuthStateChange((event, session) => {
      const uid = session?.user?.id ?? null;
      if (event === "SIGNED_OUT") {
        this.setUserId(null);
        this.state = {
          ...this.state,
          userId: null,
          userProfile: DEFAULT_PROFILE,
          answers: {},
          attemptHistory: {},
          setAttempts: {},
          completedSetIds: new Set(),
          bookmarks: new Set(),
          wrong: new Set(),
          seen: new Set(),
          activityDates: [],
        };
        this.notify();
      } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "INITIAL_SESSION") {
        if (event === "INITIAL_SESSION" && isLoggedOut()) {
          return;
        }
        if (uid && !isLoggedOut()) {
          restoreAndHydrate(uid);
        }
      }
    });
  }

  public setUserId(userId: string | null): void {
    const prevUserId = this.state.userId;
    this.state.userId = userId;
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        if (userId) localStorage.setItem("medat_current_user_id", userId);
        else localStorage.removeItem("medat_current_user_id");
      } catch {}
    }
    // If transitioning to an authenticated user (or switching users), load user-scoped local data cleanly
    if (userId && userId !== prevUserId) {
      const userProfile = loadScopedDataSafe<UserProfile | null>(userId, "profile", null);
      const userAttempts = loadScopedDataSafe<Record<string, AttemptRecord>>(userId, "attempts", {});
      const userAnswers = loadScopedDataSafe<Record<string, number>>(userId, "answers", {});
      const userSets = loadScopedDataSafe<Record<string, SetAttempt[]>>(userId, "set_attempts", {});
      const userCompleted = loadScopedDataSafe<string[]>(userId, "completed_sets", []);
      const validCompleted = userCompleted.filter(
        (id) =>
          Array.isArray(userSets[id]) &&
          userSets[id].length > 0 &&
          userSets[id].some(
            (a) =>
              (typeof a.totalQuestions === "number" && a.totalQuestions > 0) ||
              (typeof a.score === "number" && a.score >= 0)
          )
      );
      const userDates = loadScopedDataSafe<string[]>(userId, "activity_dates", []);
      const userBookmarks = loadScopedDataSafe<string[]>(userId, "bookmarks", []);
      const userWrong = loadScopedDataSafe<string[]>(userId, "wrong", []);
      const userSeen = loadScopedDataSafe<string[]>(userId, "seen", []);

      this.state.userProfile = userProfile ? sanitizeUserProfile(userProfile) : sanitizeUserProfile(DEFAULT_PROFILE);
      this.state.attemptHistory = userAttempts;
      this.state.answers = userAnswers;
      this.state.setAttempts = userSets;
      this.state.completedSetIds = new Set(validCompleted);
      this.state.activityDates = userDates;
      this.state.bookmarks = new Set(userBookmarks);
      this.state.wrong = new Set(userWrong);
      this.state.seen = new Set(userSeen);
      this.state.isHydrated = false;
      this.state.todayMission = null;
      this.notify();
    } else if (!userId) {
      this.state.userProfile = DEFAULT_PROFILE;
      this.state.attemptHistory = {};
      this.state.answers = {};
      this.state.setAttempts = {};
      this.state.completedSetIds = new Set();
      this.state.activityDates = [];
      this.state.bookmarks = new Set();
      this.state.wrong = new Set();
      this.state.seen = new Set();
      this.state.isHydrated = false;
      this.state.todayMission = null;
      this.notify();
    }
  }

  public isHydrated(): boolean {
    return this.state.isHydrated;
  }

  public getLastHydratedAt(): number | null {
    return this.state.lastHydratedAt;
  }

  public getTodayMission(): PersistedDailyMission | null {
    return this.state.todayMission;
  }

  public async hydrateFromSupabase(): Promise<void> {
    if (this.isHydrating) return;
    this.isHydrating = true;

    try {
      syncStateMachine.setSaving();
      const cloudData = await fetchCompleteUserDataFromSupabase();

      if (cloudData) {
        // Lossless merge: ensure legitimate offline work is merged with cloud
        const mergedAnswers = { ...this.state.answers, ...cloudData.answers };
        const mergedHistory = { ...this.state.attemptHistory, ...cloudData.attemptHistory };

        const mergedSetAttempts: Record<string, SetAttempt[]> = { ...this.state.setAttempts };
        Object.entries(cloudData.setAttempts).forEach(([setId, cloudList]) => {
          const currentList = mergedSetAttempts[setId] || [];
          const existingKeys = new Set(currentList.map((a) => `${a.setId}_${a.completedAt}`));
          const uniqueNew = cloudList.filter((a) => !existingKeys.has(`${a.setId}_${a.completedAt}`));
          mergedSetAttempts[setId] = [...currentList, ...uniqueNew];
        });

        const validLocalCompleted = Array.from(this.state.completedSetIds).filter(
          (id) =>
            Array.isArray(mergedSetAttempts[id]) &&
            mergedSetAttempts[id].length > 0 &&
            mergedSetAttempts[id].some(
              (a) =>
                (typeof a.totalQuestions === "number" && a.totalQuestions > 0) ||
                (typeof a.score === "number" && a.score >= 0)
            )
        );
        const mergedCompletedSets = new Set([
          ...validLocalCompleted,
          ...cloudData.completedSetIds,
        ]);

        const mergedBookmarks = new Set([
          ...Array.from(this.state.bookmarks),
          ...cloudData.bookmarks,
        ]);

        const mergedWrong = new Set([
          ...Array.from(this.state.wrong),
          ...cloudData.wrong,
        ]);

        const mergedSeen = new Set([
          ...Array.from(this.state.seen),
          ...cloudData.seen,
        ]);

        const mergedActivity = Array.from(
          new Set([...this.state.activityDates, ...cloudData.activityDates])
        ).sort();

        // CANONICAL PROFILE: Cloud is authoritative for authenticated student profile
        const mergedProfile: UserProfile = cloudData.profile
          ? sanitizeUserProfile({ ...this.state.userProfile, ...cloudData.profile })
          : sanitizeUserProfile(this.state.userProfile);

        this.state = {
          ...this.state,
          userProfile: mergedProfile,
          answers: mergedAnswers,
          attemptHistory: mergedHistory,
          setAttempts: mergedSetAttempts,
          completedSetIds: mergedCompletedSets,
          bookmarks: mergedBookmarks,
          wrong: mergedWrong,
          seen: mergedSeen,
          activityDates: mergedActivity,
          isHydrated: true,
          lastHydratedAt: Date.now(),
        };

        // Resiliently cache merged data locally
        const uid = this.state.userId;
        saveScopedData(uid, "profile", mergedProfile);
        saveScopedData(uid, "answers", mergedAnswers);
        saveScopedData(uid, "attempts", mergedHistory);
        saveScopedData(uid, "set_attempts", mergedSetAttempts);
        saveScopedData(uid, "completed_sets", Array.from(mergedCompletedSets));
        saveScopedData(uid, "bookmarks", Array.from(mergedBookmarks));
        saveScopedData(uid, "wrong", Array.from(mergedWrong));
        saveScopedData(uid, "seen", Array.from(mergedSeen));
        saveScopedData(uid, "activity_dates", mergedActivity);

        // Hydrate today's mission (or latest mission for rollover) into local storage
        if (cloudData.todayMission) {
          const tm = cloudData.todayMission;
          this.state.todayMission = tm;
          const storageKey = getDailyMissionStorageKey(mergedProfile, tm.missionDate);
          try {
            localStorage.setItem(storageKey, JSON.stringify(tm));
          } catch {}
        } else if (cloudData.latestMission) {
          const lm = cloudData.latestMission;
          const storageKey = getDailyMissionStorageKey(mergedProfile, lm.missionDate);
          try {
            localStorage.setItem(storageKey, JSON.stringify(lm));
          } catch {}
        }

        // Comprehensive sync: Ensure unpersisted offline items are flushed.
        // CRITICAL: NEVER pass localProfile here to prevent overwriting cloud profile!
        await syncAllLocalProgressToSupabase({
          localSetAttempts: this.state.setAttempts,
          localAttemptHistory: this.state.attemptHistory,
          localActivityDates: this.state.activityDates,
          localBookmarks: Array.from(this.state.bookmarks),
          localWrong: Array.from(this.state.wrong),
        });
      } else {
        // Cloud query returned null (network failure, query error, or unauthenticated)
        // CRITICAL: Do NOT mark as hydrated or push empty defaults over existing cloud data!
        console.warn("[DataOrchestrator] Cloud query returned no data or failed; preserving local state");
        syncStateMachine.setPendingSync("Cloud query returned null or failed");
        return;
      }

      // Also hydrate mock results
      const cloudMocks = await mockService.hydrateFromCloud();
      if (cloudMocks) {
        this.state.mockHistory = cloudMocks;
      }

      // Flush any queued attempts
      await flushPendingSyncQueue();
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[DataOrchestrator] Hydration encountered non-fatal error:", err);
      syncStateMachine.setPendingSync(err?.message);
    } finally {
      this.isHydrating = false;
      this.notify();
    }
  }

  // --------------------------------------------------
  // Single Entry Dispatch Pipeline
  // --------------------------------------------------
  public async dispatch<T = any>(command: DomainCommand): Promise<CommandResult<T>> {
    const uid = this.state.userId;

    switch (command.type) {
      case "ANSWER_QUESTION": {
        const res = await progressService.recordAnswer(
          uid,
          command.questionId,
          command.selected,
          command.timeSpentSeconds || 0,
          this.state.answers,
          this.state.attemptHistory,
          this.state.seen,
          this.state.wrong,
          CANONICAL_QUESTIONS
        );
        this.state.answers = res.answers;
        this.state.attemptHistory = res.attemptHistory;
        this.state.seen = res.seen;
        this.state.wrong = res.wrong;
        this.recordActivityDateInternal();
        this.notify();
        return { success: true, data: res as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "RECORD_BATCH_ANSWERS": {
        const res = await progressService.recordBatchAnswers(
          uid,
          command.batch,
          this.state.answers,
          this.state.attemptHistory,
          this.state.seen,
          this.state.wrong,
          CANONICAL_QUESTIONS
        );
        this.state.answers = res.answers;
        this.state.attemptHistory = res.attemptHistory;
        this.state.seen = res.seen;
        this.state.wrong = res.wrong;
        this.recordActivityDateInternal();
        this.notify();
        return { success: true, data: res as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "SUBMIT_SET": {
        const res = await progressService.submitSet(
          uid,
          command.setId,
          command.chapterId,
          command.correctCount,
          command.totalQuestions,
          command.timeSpentSeconds,
          this.state.setAttempts,
          this.state.completedSetIds,
          command.idempotencyKey
        );
        if (!res.isDuplicate) {
          this.state.setAttempts = {
            ...this.state.setAttempts,
            [command.setId]: [...(this.state.setAttempts[command.setId] || []), res.attempt],
          };
          this.state.completedSetIds = new Set(this.state.completedSetIds).add(command.setId);
          this.recordActivityDateInternal();
        }
        this.notify();
        return { success: true, data: res as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "TOGGLE_BOOKMARK": {
        const res = await progressService.toggleBookmark(uid, command.questionId, this.state.bookmarks);
        this.state.bookmarks = res.bookmarks;
        this.notify();
        return { success: true, data: res as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "UPDATE_PROFILE": {
        const updated = sanitizeUserProfile({ ...this.state.userProfile, ...command.profile });
        this.state.userProfile = updated;
        saveScopedData(uid, "profile", updated);
        syncStateMachine.setSaving();
        syncUserProfileToSupabase(updated)
          .then(() => syncStateMachine.setSynced())
          .catch((e) => syncStateMachine.setPendingSync(e?.message));
        this.notify();
        return { success: true, data: updated as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "CREATE_DAILY_MISSION": {
        const missionCtx = this.buildMissionEngineContext();
        const evaluated = await missionService.createMission(missionCtx, command.targetMinutes);
        this.notify();
        return { success: true, data: evaluated as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "RESET_DAILY_MISSION": {
        const missionCtx = this.buildMissionEngineContext();
        const evaluated = await missionService.resetMission(missionCtx);
        this.notify();
        return { success: true, data: evaluated as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "SUBMIT_MOCK": {
        const nextHistory = await mockService.submitMockResult(command.record, this.state.mockHistory);
        this.state.mockHistory = nextHistory;
        this.recordActivityDateInternal();
        this.notify();
        return { success: true, data: nextHistory as any, syncStatus: syncStateMachine.getStatus() };
      }

      case "RECORD_ACTIVITY_DATE": {
        this.recordActivityDateInternal(command.dateStr);
        this.notify();
        return { success: true, syncStatus: syncStateMachine.getStatus() };
      }

      case "HYDRATE_CLOUD_STATE": {
        await this.hydrateFromSupabase();
        return { success: true, syncStatus: syncStateMachine.getStatus() };
      }

      case "FLUSH_PENDING_QUEUE": {
        await flushPendingSyncQueue();
        syncStateMachine.refreshPendingCount();
        this.notify();
        return { success: true, syncStatus: syncStateMachine.getStatus() };
      }

      case "RESET_PROGRESS": {
        this.state.answers = {};
        this.state.attemptHistory = {};
        this.state.wrong = new Set();
        this.state.seen = new Set();
        this.state.completedSetIds = new Set();
        this.state.setAttempts = {};
        saveScopedData(uid, "answers", {});
        saveScopedData(uid, "attempts", {});
        saveScopedData(uid, "wrong", []);
        saveScopedData(uid, "seen", []);
        saveScopedData(uid, "completed_sets", []);
        saveScopedData(uid, "set_attempts", {});
        this.notify();
        return { success: true, syncStatus: syncStateMachine.getStatus() };
      }

      default:
        return { success: false, error: "Unknown command", syncStatus: syncStateMachine.getStatus() };
    }
  }

  // --------------------------------------------------
  // Helper to record activity dates
  // --------------------------------------------------
  private recordActivityDateInternal(overrideDate?: string): void {
    const today = overrideDate || getTodayViennaString();
    if (!this.state.activityDates.includes(today)) {
      this.state.activityDates = [...this.state.activityDates, today];
      saveScopedData(this.state.userId, "activity_dates", this.state.activityDates);
      logUserActivityToSupabase().catch(() => {});
    }
  }

  // --------------------------------------------------
  // Canonical Read Queries
  // --------------------------------------------------
  public getState(): OrchestratorState {
    return {
      ...this.state,
      syncState: syncStateMachine.getState(),
    };
  }

  public getDashboardSummary(questions: NormalizedQuestion[] = CANONICAL_QUESTIONS): DashboardData {
    return getDashboardSummary(this.state, questions, {
      createDailyMission: (mins) => this.dispatch({ type: "CREATE_DAILY_MISSION", targetMinutes: mins }),
      resetDailyMission: () => this.dispatch({ type: "RESET_DAILY_MISSION" }),
      refresh: () => this.hydrateFromSupabase(),
    });
  }

  public getJourneyState(questions: NormalizedQuestion[] = CANONICAL_QUESTIONS): CanonicalJourneyState {
    return getJourneyState(this.state, questions);
  }

  public getSyncState(): SyncState {
    return syncStateMachine.getState();
  }

  public getSyncStatus(): SyncStatus {
    return syncStateMachine.getStatus();
  }

  // --------------------------------------------------
  // Pub/Sub Subscriber API
  // --------------------------------------------------
  public subscribe(listener: (state: OrchestratorState) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener(this.state);
      } catch (err) {
        console.error("[DataOrchestrator] Error in listener:", err);
      }
    });
  }

  private buildMissionEngineContext() {
    const questions = CANONICAL_QUESTIONS;
    const weakAreas = performanceService.getWeakAreas(
      this.state.userProfile,
      questions,
      this.state.attemptHistory,
      this.state.wrong,
      this.state.setAttempts,
      this.state.completedSetIds
    );
    const activeUnit = journeyService.getActiveLearningUnit(
      this.state.userProfile,
      this.state.answers,
      (chId) =>
        performanceService.getChapterStats(
          chId,
          questions,
          this.state.attemptHistory,
          this.state.wrong,
          this.state.setAttempts,
          this.state.completedSetIds
        ),
      (chId) => journeyService.getActiveSetForChapter(chId, this.state.setAttempts, this.state.completedSetIds)
    );

    return {
      userProfile: this.state.userProfile,
      activeUnit,
      attemptHistory: this.state.attemptHistory,
      setAttempts: this.state.setAttempts,
      questions,
      wrong: this.state.wrong,
      answers: this.state.answers,
      weakAreas,
      mockHistory: this.state.mockHistory,
    };
  }

  // Domain service accessors
  public readonly services = {
    progress: progressService,
    mission: missionService,
    journey: journeyService,
    performance: performanceService,
    mock: mockService,
    sync: syncStateMachine,
  };
}

export const dataOrchestrator = new DataOrchestrator();
export { syncStateMachine };

/**
 * React hook to connect any component directly to the Data Orchestration Layer
 */
export function useDataOrchestrator() {
  const [snapshot, setSnapshot] = useState<OrchestratorState>(() => dataOrchestrator.getState());

  useEffect(() => {
    return dataOrchestrator.subscribe(() => {
      setSnapshot(dataOrchestrator.getState());
    });
  }, []);

  return {
    state: snapshot,
    dispatch: (cmd: DomainCommand) => dataOrchestrator.dispatch(cmd),
    getDashboardSummary: (questions?: NormalizedQuestion[]) =>
      dataOrchestrator.getDashboardSummary(questions),
    getJourneyState: (questions?: NormalizedQuestion[]) =>
      dataOrchestrator.getJourneyState(questions),
    syncState: snapshot.syncState,
    orchestrator: dataOrchestrator,
  };
}
