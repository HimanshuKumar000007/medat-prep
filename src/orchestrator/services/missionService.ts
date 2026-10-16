/**
 * src/orchestrator/services/missionService.ts
 *
 * Mission Service: Manages the lifecycle of "Today's Mission" and Weekly Consistency.
 * Coordinates generation, explicit creation, resetting, and live evaluation against user progress.
 */

import type { UserProfile, SetAttempt, LearningUnit, SetWithStatus, ChapterStats } from "../../dashboard/practiceContext";
import type { NormalizedQuestion, Chapter } from "../../dashboard/practiceData";
import type { MockAttemptRecord } from "../../data/generalprobe/useMockExamData";
import {
  getOrGenerateDailyMission,
  createDailyMission as createEngineMission,
  resetDailyMission as resetEngineMission,
  computeWeeklyMissionConsistency,
  getLocalDateString,
  type EvaluatedDailyMission,
  type WeeklyMissionConsistency,
  type MissionEngineContext,
} from "../../dashboard/dailyMissionEngine";
import { saveDailyMissionToSupabase } from "../../lib/dbSync";
import { syncStateMachine } from "../sync/syncStateMachine";

export class MissionService {
  /**
   * Retrieves or computes today's evaluated mission given the current context.
   */
  public getEvaluatedMission(
    ctx: MissionEngineContext,
    dateStr?: string
  ): EvaluatedDailyMission {
    const effectiveCtx = dateStr ? { ...ctx, todayDateStr: dateStr } : ctx;
    return getOrGenerateDailyMission(effectiveCtx);
  }

  /**
   * Explicitly activates/creates today's mission (transitioning from State A to State B).
   */
  public async createMission(
    ctx: MissionEngineContext,
    targetMinutes?: number,
    dateStr?: string
  ): Promise<EvaluatedDailyMission> {
    const today = dateStr || ctx.todayDateStr || getLocalDateString();
    const effectiveCtx = { ...ctx, todayDateStr: today };
    createEngineMission(effectiveCtx, targetMinutes);

    // Re-evaluate to get updated state
    const evaluated = getOrGenerateDailyMission(effectiveCtx);

    // Cloud sync
    syncStateMachine.setSaving();
    try {
      await saveDailyMissionToSupabase({
        id: `mission_${ctx.userProfile.name || "user"}_${today}`,
        userId: ctx.userProfile.name || "user",
        missionDate: today,
        targetMinutes: evaluated.targetMinutes,
        studyDaysPerWeek: evaluated.studyDaysPerWeek,
        createdAt: Date.now(),
        isCreated: true,
        items: evaluated.items,
      });
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[MissionService] Mission save failed:", err);
      syncStateMachine.setPendingSync(err?.message);
    }

    return evaluated;
  }

  /**
   * Resets today's mission to allow reconfiguration.
   */
  public async resetMission(
    ctx: MissionEngineContext,
    dateStr?: string
  ): Promise<EvaluatedDailyMission> {
    const today = dateStr || ctx.todayDateStr || getLocalDateString();
    const effectiveCtx = { ...ctx, todayDateStr: today };
    resetEngineMission(effectiveCtx);

    const evaluated = getOrGenerateDailyMission(effectiveCtx);

    syncStateMachine.setSaving();
    try {
      await saveDailyMissionToSupabase({
        id: `mission_${ctx.userProfile.name || "user"}_${today}`,
        userId: ctx.userProfile.name || "user",
        missionDate: today,
        targetMinutes: evaluated.targetMinutes,
        studyDaysPerWeek: evaluated.studyDaysPerWeek,
        createdAt: Date.now(),
        isCreated: false,
        items: [],
      });
      syncStateMachine.setSynced();
    } catch (err: any) {
      console.warn("[MissionService] Mission reset sync failed:", err);
      syncStateMachine.setPendingSync(err?.message);
    }

    return evaluated;
  }

  /**
   * Computes weekly study consistency derived from genuine user activity dates.
   */
  public getWeeklyConsistency(
    activityDates: string[] = [],
    studyDaysPerWeek: number = 5,
    attemptHistory: Record<string, { timestamp: number }> = {},
    setAttempts: Record<string, { completedAt: number }[]> = {}
  ): WeeklyMissionConsistency {
    return computeWeeklyMissionConsistency(
      activityDates,
      studyDaysPerWeek,
      attemptHistory,
      setAttempts
    );
  }
}

export const missionService = new MissionService();
