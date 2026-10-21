/**
 * Supabase Database Sync Layer for MedAT Production Platform
 * Single Source of Truth: All user activity, progress, mistakes, and missions
 * are persisted to Supabase and hydrated seamlessly.
 */

import { supabase } from "./supabase";
import type { UserProfile, SetAttempt, AttemptRecord } from "../dashboard/practiceContext";
import type { PersistedDailyMission } from "../dashboard/dailyMissionEngine";
import type { MockAttemptRecord } from "../data/generalprobe/useMockExamData";
import { getTodayViennaString } from "./dateService";
import { sanitizeUserProfile } from "./profileUtils";
import {
  CANONICAL_QUESTIONS,
  resolveChapterId,
  getSectionFromChapterId,
  getSectionFromQuestionId,
  getChapterFromQuestionId,
} from "../dashboard/practiceData";

/**
 * Resolves currently authenticated user with session auto-refresh fallback.
 */
export async function getAuthenticatedUser() {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) return session.user;
    const { data: { user } } = await supabase.auth.getUser();
    return user ?? null;
  } catch {
    return null;
  }
}

// ----------------------------------------------------
// 1. User Profile Sync
// ----------------------------------------------------
export async function syncUserProfileToSupabase(profile: UserProfile): Promise<void> {
  const user = await getAuthenticatedUser();
  if (!user) return;

  const sanitized = sanitizeUserProfile(profile, user);

  if (typeof window !== "undefined" && sanitized.name) {
    try {
      localStorage.setItem("medat_user_name", sanitized.name);
    } catch {}
  }

  const { error } = await supabase.from("medat_user_profiles").upsert(
    {
      user_id: user.id,
      name: sanitized.name,
      email: sanitized.email || user.email || "",
      exam_type: sanitized.examType,
      target_year: sanitized.targetYear,
      target_university: sanitized.targetUniversity,
      preparation_stage: sanitized.preparationStage,
      daily_study_time: sanitized.dailyStudyTime,
      daily_minutes: sanitized.dailyMinutes,
      study_days_per_week: sanitized.studyDaysPerWeek,
      plan_configured: sanitized.planConfigured,
      focus_areas: sanitized.focusAreas,
      onboarded: sanitized.onboarded,
      is_pro: sanitized.isPro ?? false,
      subscription_tier: sanitized.subscriptionTier ?? "free",
      subscription_status: sanitized.subscriptionStatus ?? (sanitized.isPro ? "active" : "none"),
      pro_expires_at: sanitized.proExpiresAt ?? null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );

  if (error) {
    console.error("[dbSync] Failed to persist user profile to Supabase:", error);
    throw error;
  }

  // Also update Supabase Auth User metadata so user profile metadata remains in sync
  try {
    await supabase.auth.updateUser({
      data: { name: sanitized.name, full_name: sanitized.name },
    });
  } catch {
    // Ignore metadata update error if not permitted
  }
}

export async function fetchUserProfileFromSupabase(): Promise<UserProfile | null> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from("medat_user_profiles")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) {
      console.warn("[dbSync] Error fetching user profile from Supabase:", error);
      return null;
    }

    let profileData = data;

    if (!profileData) {
      // User exists in auth but has no profile row yet (e.g. fresh OAuth login)
      // Auto-bootstrap authentic cloud profile immediately
      const initialProfile = sanitizeUserProfile(null, user);
      try {
        await supabase.from("medat_user_profiles").upsert(
          {
            user_id: user.id,
            name: initialProfile.name,
            email: initialProfile.email || user.email || "",
            exam_type: initialProfile.examType,
            target_year: initialProfile.targetYear,
            target_university: initialProfile.targetUniversity,
            preparation_stage: initialProfile.preparationStage,
            daily_study_time: initialProfile.dailyStudyTime,
            daily_minutes: initialProfile.dailyMinutes,
            study_days_per_week: initialProfile.studyDaysPerWeek,
            plan_configured: initialProfile.planConfigured,
            focus_areas: initialProfile.focusAreas,
            onboarded: initialProfile.onboarded,
            is_pro: initialProfile.isPro ?? false,
            subscription_tier: initialProfile.subscriptionTier ?? "free",
            subscription_status: initialProfile.subscriptionStatus ?? "none",
            pro_expires_at: initialProfile.proExpiresAt ?? null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        );
      } catch (upsertErr) {
        console.warn("[dbSync] Auto-bootstrap initial profile failed:", upsertErr);
      }
      return initialProfile;
    }

    // Reconcile with medat_subscriptions if profile is not already marked pro
    if (!profileData.is_pro) {
      try {
        const { data: sub } = await supabase
          .from("medat_subscriptions")
          .select("status, current_period_end")
          .eq("user_id", user.id)
          .in("status", ["active", "trialing"])
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (sub && (!sub.current_period_end || new Date(sub.current_period_end).getTime() > Date.now())) {
          profileData.is_pro = true;
          profileData.subscription_tier = "premium";
          profileData.subscription_status = sub.status;
          profileData.pro_expires_at = sub.current_period_end;
        }
      } catch (subErr) {
        console.warn("[dbSync] Subscription reconciliation query warning:", subErr);
      }
    }

    // Reconcile with medat_payments if profile is not already marked pro (e.g. annual or one-time pass)
    if (!profileData.is_pro) {
      try {
        const { data: pay } = await supabase
          .from("medat_payments")
          .select("status, created_at")
          .eq("user_id", user.id)
          .in("status", ["completed", "paid"])
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (pay && pay.created_at) {
          const payDate = new Date(pay.created_at).getTime();
          const oneYearMs = 365 * 24 * 60 * 60 * 1000;
          if (Date.now() - payDate < oneYearMs) {
            profileData.is_pro = true;
            profileData.subscription_tier = "premium";
            profileData.subscription_status = "active";
            profileData.pro_expires_at = new Date(payDate + oneYearMs).toISOString();
          }
        }
      } catch (payErr) {
        console.warn("[dbSync] Payment reconciliation query warning:", payErr);
      }
    }

    return sanitizeUserProfile(profileData, user);
  } catch (err) {
    console.warn("Could not fetch user profile from Supabase:", err);
    return null;
  }
}

/**
 * Direct backend entitlement verification helper
 */
export async function checkUserEntitlement(userId?: string): Promise<{
  isPro: boolean;
  subscriptionTier: string;
  subscriptionStatus: string;
  proExpiresAt: string | null;
}> {
  try {
    const user = userId ? { id: userId } : await getAuthenticatedUser();
    if (!user?.id) {
      return { isPro: false, subscriptionTier: "free", subscriptionStatus: "none", proExpiresAt: null };
    }

    const { data: profile } = await supabase
      .from("medat_user_profiles")
      .select("is_pro, subscription_tier, subscription_status, pro_expires_at")
      .eq("user_id", user.id)
      .maybeSingle();

    const { data: sub } = await supabase
      .from("medat_subscriptions")
      .select("status, current_period_end")
      .eq("user_id", user.id)
      .in("status", ["active", "trialing"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    let isPro = Boolean(profile?.is_pro);
    let tier = profile?.subscription_tier || "free";
    let status = profile?.subscription_status || "none";
    let expiresAt = profile?.pro_expires_at || null;

    if (sub) {
      const notExpired = !sub.current_period_end || new Date(sub.current_period_end).getTime() > Date.now();
      if (notExpired) {
        isPro = true;
        tier = "premium";
        status = sub.status;
        expiresAt = sub.current_period_end;
      }
    }

    // Also check completed payments if not active from subscription
    if (!isPro) {
      try {
        const { data: pay } = await supabase
          .from("medat_payments")
          .select("status, created_at")
          .eq("user_id", user.id)
          .in("status", ["completed", "paid"])
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (pay && pay.created_at) {
          const payDate = new Date(pay.created_at).getTime();
          const oneYearMs = 365 * 24 * 60 * 60 * 1000;
          if (Date.now() - payDate < oneYearMs) {
            isPro = true;
            tier = "premium";
            status = "active";
            expiresAt = new Date(payDate + oneYearMs).toISOString();
          }
        }
      } catch (payErr) {
        console.warn("[dbSync] checkUserEntitlement payment fallback warning:", payErr);
      }
    }

    if (expiresAt && new Date(expiresAt).getTime() < Date.now()) {
      isPro = false;
      tier = "free";
      status = "expired";
    }

    return { isPro, subscriptionTier: tier, subscriptionStatus: status, proExpiresAt: expiresAt };
  } catch (e) {
    console.warn("[dbSync] checkUserEntitlement error:", e);
    return { isPro: false, subscriptionTier: "free", subscriptionStatus: "error", proExpiresAt: null };
  }
}

// Local Queue Persistence Keys for offline / pending sync (Scoped by User ID)
const PENDING_SETS_KEY = "medat_pending_sync_sets";
const PENDING_QUESTIONS_KEY = "medat_pending_sync_questions";

export function getScopedPendingSetsKey(userId?: string | null): string {
  const uid = userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
  return uid ? `medat_pending_sync_sets_${uid}` : PENDING_SETS_KEY;
}

export function getScopedPendingQuestionsKey(userId?: string | null): string {
  const uid = userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
  return uid ? `medat_pending_sync_questions_${uid}` : PENDING_QUESTIONS_KEY;
}

export interface PendingQuestionAttempt {
  questionId: string;
  selectedOption: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
  chapterId?: string;
  section?: string;
  timestamp: number;
  userId?: string;
}

export function getPendingSets(userId?: string | null): SetAttempt[] {
  try {
    const key = getScopedPendingSetsKey(userId);
    const raw = localStorage.getItem(key);
    let userSets: SetAttempt[] = raw ? JSON.parse(raw) : [];

    // Migrate any legacy unscoped items belonging to this user
    const uid = userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    if (uid && key !== PENDING_SETS_KEY) {
      const legacyRaw = localStorage.getItem(PENDING_SETS_KEY);
      if (legacyRaw) {
        const legacySets: SetAttempt[] = JSON.parse(legacyRaw);
        const matchingLegacy = legacySets.filter((s) => s.userId === uid);
        const remainingLegacy = legacySets.filter((s) => s.userId && s.userId !== uid);
        if (matchingLegacy.length > 0) {
          userSets = [...userSets, ...matchingLegacy];
          localStorage.setItem(key, JSON.stringify(userSets));
        }
        localStorage.setItem(PENDING_SETS_KEY, JSON.stringify(remainingLegacy));
      }
    }
    return userSets;
  } catch {
    return [];
  }
}

export function savePendingSets(sets: SetAttempt[], userId?: string | null) {
  try {
    const key = getScopedPendingSetsKey(userId);
    localStorage.setItem(key, JSON.stringify(sets));
  } catch {}
}

export function getPendingQuestions(userId?: string | null): PendingQuestionAttempt[] {
  try {
    const key = getScopedPendingQuestionsKey(userId);
    const raw = localStorage.getItem(key);
    let userQs: PendingQuestionAttempt[] = raw ? JSON.parse(raw) : [];

    // Migrate any legacy unscoped items belonging to this user
    const uid = userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    if (uid && key !== PENDING_QUESTIONS_KEY) {
      const legacyRaw = localStorage.getItem(PENDING_QUESTIONS_KEY);
      if (legacyRaw) {
        const legacyQs: PendingQuestionAttempt[] = JSON.parse(legacyRaw);
        const matchingLegacy = legacyQs.filter((q) => q.userId === uid);
        const remainingLegacy = legacyQs.filter((q) => q.userId && q.userId !== uid);
        if (matchingLegacy.length > 0) {
          userQs = [...userQs, ...matchingLegacy];
          localStorage.setItem(key, JSON.stringify(userQs));
        }
        localStorage.setItem(PENDING_QUESTIONS_KEY, JSON.stringify(remainingLegacy));
      }
    }
    return userQs;
  } catch {
    return [];
  }
}

export function savePendingQuestions(qs: PendingQuestionAttempt[], userId?: string | null) {
  try {
    const key = getScopedPendingQuestionsKey(userId);
    localStorage.setItem(key, JSON.stringify(qs));
  } catch {}
}

export function getPendingSyncCount(userId?: string | null): number {
  return getPendingSets(userId).length + getPendingQuestions(userId).length;
}

export function queuePendingSetAttempt(attempt: SetAttempt, userId?: string | null) {
  try {
    const effectiveUserId = userId || attempt.userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    const enrichedAttempt: SetAttempt = { ...attempt, userId: effectiveUserId || undefined };
    const list = getPendingSets(effectiveUserId);
    if (!list.some((a) => a.id === enrichedAttempt.id || (a.setId === enrichedAttempt.setId && a.completedAt === enrichedAttempt.completedAt))) {
      list.push(enrichedAttempt);
      savePendingSets(list, effectiveUserId);
    }
  } catch {}
}

export function queuePendingQuestionAttempt(pq: PendingQuestionAttempt, userId?: string | null) {
  try {
    const effectiveUserId = userId || pq.userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    const enrichedPq: PendingQuestionAttempt = { ...pq, userId: effectiveUserId || undefined };
    const list = getPendingQuestions(effectiveUserId);
    if (!list.some((q) => q.questionId === enrichedPq.questionId && q.timestamp === enrichedPq.timestamp)) {
      list.push(enrichedPq);
      savePendingQuestions(list, effectiveUserId);
    }
  } catch {}
}

/**
 * Flush any queued offline/pending attempts to Supabase when authenticated.
 * Strictly verifies item-level userId to prevent cross-account pollution.
 */
export async function flushPendingSyncQueue(targetUserId?: string): Promise<void> {
  try {
    const user = await getAuthenticatedUser();
    const effectiveUser = user || (targetUserId ? { id: targetUserId } : null);
    if (!effectiveUser) return;
    const uid = effectiveUser.id;

    // 1. Flush pending sets for current authenticated user
    const pendingSets = getPendingSets(uid);
    if (pendingSets.length > 0) {
      const remainingSets: SetAttempt[] = [];
      for (const att of pendingSets) {
        // Enforce user ownership verification: Must explicitly belong to this user
        if (!att.userId || att.userId !== uid) {
          if (att.userId) remainingSets.push(att);
          continue;
        }

        const { error } = await supabase.from("medat_set_attempts").insert({
          user_id: uid,
          set_id: att.setId,
          chapter_id: att.chapterId,
          score: att.score,
          correct_count: att.correctCount,
          total_questions: att.totalQuestions,
          time_spent_seconds: att.timeSpentSeconds,
          passed: att.passed,
          completed_at: new Date(att.completedAt).toISOString(),
        });
        if (error) {
          remainingSets.push(att);
        }
      }
      savePendingSets(remainingSets, uid);
    }

    // 2. Flush pending questions for current authenticated user
    const pendingQuestions = getPendingQuestions(uid);
    if (pendingQuestions.length > 0) {
      const remainingQuestions: PendingQuestionAttempt[] = [];
      for (const pq of pendingQuestions) {
        // Enforce user ownership verification: Must explicitly belong to this user
        if (!pq.userId || pq.userId !== uid) {
          if (pq.userId) remainingQuestions.push(pq);
          continue;
        }

        const { error } = await supabase.from("medat_question_attempts").insert({
          user_id: uid,
          question_id: pq.questionId,
          selected_option: pq.selectedOption,
          is_correct: pq.isCorrect,
          time_spent_seconds: pq.timeSpentSeconds,
          attempted_at: new Date(pq.timestamp).toISOString(),
        });
        if (error) {
          remainingQuestions.push(pq);
        }
      }
      savePendingQuestions(remainingQuestions, uid);
    }
  } catch (err) {
    console.warn("[dbSync] Error flushing pending sync queue:", err);
  }
}

// ----------------------------------------------------
// 2. Question Attempts & Mistakes Sync
// ----------------------------------------------------
export async function recordQuestionAttemptToSupabase(
  questionId: string,
  selectedOption: number,
  isCorrect: boolean,
  timeSpentSeconds = 0,
  chapterId?: string,
  section?: string,
  userId?: string | null
): Promise<void> {
  const timestamp = Date.now();
  const effectiveSection = section || getSectionFromQuestionId(questionId, CANONICAL_QUESTIONS);
  const effectiveChapterId = chapterId || getChapterFromQuestionId(questionId, CANONICAL_QUESTIONS);
  try {
    const user = await getAuthenticatedUser();
    const activeUserId = user?.id || userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    if (!user) {
      queuePendingQuestionAttempt({
        questionId,
        selectedOption,
        isCorrect,
        timeSpentSeconds,
        chapterId: effectiveChapterId,
        section: effectiveSection,
        timestamp,
        userId: activeUserId || undefined,
      }, activeUserId);
      return;
    }

    // 1. Insert granular question attempt
    const { error: insertError } = await supabase.from("medat_question_attempts").insert({
      user_id: user.id,
      question_id: questionId,
      selected_option: selectedOption,
      is_correct: isCorrect,
      time_spent_seconds: timeSpentSeconds,
      attempted_at: new Date(timestamp).toISOString(),
    });

    if (insertError) {
      console.warn("[dbSync] Could not save question attempt to Supabase, queuing locally:", insertError.message || insertError);
      queuePendingQuestionAttempt({
        questionId,
        selectedOption,
        isCorrect,
        timeSpentSeconds,
        chapterId: effectiveChapterId,
        section: effectiveSection,
        timestamp,
        userId: user.id,
      }, user.id);
    }

    // 2. Update dynamic mistakes table
    if (!isCorrect) {
      await supabase.from("medat_mistakes").upsert(
        {
          user_id: user.id,
          question_id: questionId,
          chapter_id: effectiveChapterId || null,
          section: effectiveSection || null,
          resolved: false,
          last_wrong_at: new Date().toISOString(),
        },
        { onConflict: "user_id,question_id" }
      );
    } else {
      // If user got it right, mark mistake as resolved
      await supabase
        .from("medat_mistakes")
        .update({
          resolved: true,
          resolved_at: new Date().toISOString(),
        })
        .eq("user_id", user.id)
        .eq("question_id", questionId);
    }

    // 3. Mark daily activity for streak
    await logUserActivityToSupabase();
  } catch (err) {
    console.warn("Could not record question attempt to Supabase:", err);
    const activeUserId = userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    queuePendingQuestionAttempt({
      questionId,
      selectedOption,
      isCorrect,
      timeSpentSeconds,
      chapterId: effectiveChapterId,
      section: effectiveSection,
      timestamp,
      userId: activeUserId || undefined,
    }, activeUserId);
  }
}

// ----------------------------------------------------
// 3. Set Attempts Sync (5-Set Sequence)
// ----------------------------------------------------
export async function recordSetAttemptToSupabase(attempt: SetAttempt, userId?: string | null): Promise<void> {
  try {
    const user = await getAuthenticatedUser();
    const activeUserId = user?.id || userId || attempt.userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    if (!user) {
      queuePendingSetAttempt({ ...attempt, userId: activeUserId || undefined }, activeUserId);
      return;
    }

    const { error } = await supabase.from("medat_set_attempts").insert({
      user_id: user.id,
      set_id: attempt.setId,
      chapter_id: attempt.chapterId,
      score: attempt.score,
      correct_count: attempt.correctCount,
      total_questions: attempt.totalQuestions,
      time_spent_seconds: attempt.timeSpentSeconds,
      passed: attempt.passed,
      completed_at: new Date(attempt.completedAt).toISOString(),
    });

    if (error) {
      console.warn("[dbSync] Could not save set attempt to Supabase, queuing locally:", error.message || error);
      queuePendingSetAttempt({ ...attempt, userId: user.id }, user.id);
    }

    await logUserActivityToSupabase();
  } catch (err) {
    console.warn("Could not record set attempt to Supabase:", err);
    const activeUserId = userId || attempt.userId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    queuePendingSetAttempt({ ...attempt, userId: activeUserId || undefined }, activeUserId);
  }
}

// ----------------------------------------------------
// 4. Bookmarks & Starred Questions Sync
// ----------------------------------------------------
export async function syncBookmarkToSupabase(questionId: string, isBookmarked: boolean): Promise<void> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return;

    if (isBookmarked) {
      await supabase.from("medat_bookmarks").upsert(
        {
          user_id: user.id,
          question_id: questionId,
          created_at: new Date().toISOString(),
        },
        { onConflict: "user_id,question_id" }
      );
    } else {
      await supabase
        .from("medat_bookmarks")
        .delete()
        .eq("user_id", user.id)
        .eq("question_id", questionId);
    }
  } catch (err) {
    console.warn("Could not sync bookmark to Supabase:", err);
  }
}

// ----------------------------------------------------
// 5. User Activity Dates & Streak Sync
// ----------------------------------------------------
export async function logUserActivityToSupabase(dateStr?: string, targetUserId?: string): Promise<void> {
  try {
    const user = await getAuthenticatedUser();
    const activeUserId = user?.id || targetUserId || (typeof window !== "undefined" ? localStorage.getItem("medat_current_user_id") : null);
    if (!activeUserId) return;

    const targetDate = dateStr || getTodayViennaString();
    const { error } = await supabase.from("medat_user_activity").upsert(
      {
        user_id: activeUserId,
        activity_date: targetDate,
      },
      { onConflict: "user_id,activity_date" }
    );
    if (error) {
      console.warn("[dbSync] Could not log user activity to Supabase:", error.message || error);
    }
  } catch (err) {
    console.warn("Could not log user activity to Supabase:", err);
  }
}

// ----------------------------------------------------
// 6. Daily Mission Cloud Persistence
// ----------------------------------------------------
export async function saveDailyMissionToSupabase(mission: PersistedDailyMission): Promise<void> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return;

    await supabase.from("medat_daily_missions").upsert(
      {
        user_id: user.id,
        mission_date: mission.missionDate,
        target_minutes: mission.targetMinutes,
        study_days_per_week: mission.studyDaysPerWeek,
        is_created: mission.isCreated,
        is_completed: Array.isArray(mission.items) && mission.items.length > 0 ? mission.items.every((it) => it.completed) : false,
        items: mission.items,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,mission_date" }
    );
  } catch (err) {
    console.warn("Could not save daily mission to Supabase:", err);
  }
}

export async function fetchDailyMissionFromSupabase(dateStr: string): Promise<PersistedDailyMission | null> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from("medat_daily_missions")
      .select("*")
      .eq("user_id", user.id)
      .eq("mission_date", dateStr)
      .maybeSingle();

    if (error || !data) return null;

    return {
      id: data.id,
      userId: data.user_id,
      missionDate: data.mission_date,
      targetMinutes: data.target_minutes || 60,
      studyDaysPerWeek: data.study_days_per_week || 5,
      createdAt: new Date(data.created_at).getTime(),
      isCreated: data.is_created ?? false,
      items: Array.isArray(data.items) ? data.items : [],
    };
  } catch (err) {
    console.warn("Could not fetch daily mission from Supabase:", err);
    return null;
  }
}


export async function fetchLatestDailyMissionFromSupabase(): Promise<PersistedDailyMission | null> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from("medat_daily_missions")
      .select("*")
      .eq("user_id", user.id)
      .order("mission_date", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data) return null;

    return {
      id: data.id,
      userId: data.user_id,
      missionDate: data.mission_date,
      targetMinutes: data.target_minutes || 60,
      studyDaysPerWeek: data.study_days_per_week || 5,
      createdAt: new Date(data.created_at).getTime(),
      isCreated: data.is_created ?? false,
      items: Array.isArray(data.items) ? data.items : [],
    };
  } catch (err) {
    console.warn("Could not fetch latest daily mission from Supabase:", err);
    return null;
  }
}

// ----------------------------------------------------
// 7. Mock Exam Results Cloud Sync
// ----------------------------------------------------
export async function saveMockResultToSupabase(record: MockAttemptRecord): Promise<void> {
  const user = await getAuthenticatedUser();
  if (!user) return;

  const { error } = await supabase.from("medat_mock_results").insert({
    user_id: user.id,
    mock_id: record.mockId,
    mock_title: record.examTitle,
    score: record.score,
    total_questions: record.totalQuestions,
    correct: record.correctCount,
    wrong: record.totalQuestions - record.correctCount,
    skipped: 0,
    time_taken_seconds: record.timeSpentSeconds,
    bms_percent: record.bmsPercent || 0,
    tv_percent: record.tvPercent || 0,
    kff_percent: record.kffPercent || 0,
    sek_percent: record.sekPercent || 0,
    subtest_scores: record.sectionBreakdown || {},
    completed_at: new Date(record.timestamp).toISOString(),
  });
  if (error) {
    console.warn("Could not save mock result to Supabase:", error);
    throw error;
  }
}

export async function fetchMockResultsFromSupabase(): Promise<MockAttemptRecord[] | null> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from("medat_mock_results")
      .select("*")
      .eq("user_id", user.id)
      .order("completed_at", { ascending: false });

    if (error || !data) return null;

    return data.map((sm) => ({
      id: sm.id,
      userId: sm.user_id,
      mockId: sm.mock_id,
      examTitle: sm.mock_title || "MedAT Simulation",
      category: "full",
      date: new Date(sm.completed_at).toLocaleDateString("de-AT"),
      timestamp: new Date(sm.completed_at).getTime(),
      score: Number(sm.score),
      weightedScore: Number(sm.score),
      correctCount: sm.correct || 0,
      totalQuestions: sm.total_questions || 221,
      timeSpentSeconds: sm.time_taken_seconds || 0,
      passed: Number(sm.score) >= 65,
      bmsPercent: sm.bms_percent ? Number(sm.bms_percent) : undefined,
      tvPercent: sm.tv_percent ? Number(sm.tv_percent) : undefined,
      kffPercent: sm.kff_percent ? Number(sm.kff_percent) : undefined,
      sekPercent: sm.sek_percent ? Number(sm.sek_percent) : undefined,
      sectionBreakdown: sm.subtest_scores || undefined,
    }));
  } catch (err) {
    console.warn("Could not fetch mock results from Supabase:", err);
    return null;
  }
}

// ----------------------------------------------------
// 8. Full User Data Hydration (Single Source of Truth)
// ----------------------------------------------------
export interface CompleteUserData {
  profile: UserProfile | null;
  answers: Record<string, number>;
  attemptHistory: Record<string, AttemptRecord>;
  setAttempts: Record<string, SetAttempt[]>;
  completedSetIds: string[];
  bookmarks: string[];
  wrong: string[];
  seen: string[];
  activityDates: string[];
  todayMission?: PersistedDailyMission | null;
  latestMission?: PersistedDailyMission | null;
}

export async function fetchCompleteUserDataFromSupabase(): Promise<CompleteUserData | null> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    const todayVienna = getTodayViennaString();

    // Parallel fetch for optimal load latency
    const [
      profileRes,
      attemptsRes,
      setAttemptsRes,
      mistakesRes,
      bookmarksRes,
      activityRes,
      todayMissionRes,
      latestMissionRes,
    ] = await Promise.all([
      supabase.from("medat_user_profiles").select("*").eq("user_id", user.id).maybeSingle(),
      supabase.from("medat_question_attempts").select("*").eq("user_id", user.id).order("attempted_at", { ascending: true }),
      supabase.from("medat_set_attempts").select("*").eq("user_id", user.id).order("completed_at", { ascending: true }),
      supabase.from("medat_mistakes").select("*").eq("user_id", user.id).eq("resolved", false),
      supabase.from("medat_bookmarks").select("question_id").eq("user_id", user.id),
      supabase.from("medat_user_activity").select("activity_date").eq("user_id", user.id).order("activity_date", { ascending: true }),
      supabase.from("medat_daily_missions").select("*").eq("user_id", user.id).eq("mission_date", todayVienna).maybeSingle(),
      supabase.from("medat_daily_missions").select("*").eq("user_id", user.id).order("mission_date", { ascending: false }).limit(1).maybeSingle(),
    ]);

    // PROTECT LOCAL DATA: If Supabase returns an error on attempts or set attempts (e.g. 401 permission denied),
    // NEVER treat it as "user has 0 attempts"! Return null to safely abort hydration!
    if (attemptsRes.error || setAttemptsRes.error) {
      console.warn(
        "[dbSync] Cloud query returned error, aborting hydration to preserve local state:",
        attemptsRes.error?.message || setAttemptsRes.error?.message
      );
      return null;
    }

    // Build Profile
    let profile: UserProfile | null = null;
    if (profileRes.data) {
      profile = sanitizeUserProfile(profileRes.data, user);
    } else if (!profileRes.error) {
      // Auto-bootstrap authentic cloud profile if authenticated user has no row yet
      profile = sanitizeUserProfile(null, user);
      (async () => {
        try {
          await supabase
            .from("medat_user_profiles")
            .upsert(
              {
                user_id: user.id,
                name: profile.name,
                email: profile.email || user.email || "",
                exam_type: profile.examType,
                target_year: profile.targetYear,
                target_university: profile.targetUniversity,
                preparation_stage: profile.preparationStage,
                daily_study_time: profile.dailyStudyTime,
                daily_minutes: profile.dailyMinutes,
                study_days_per_week: profile.studyDaysPerWeek,
                plan_configured: profile.planConfigured,
                focus_areas: profile.focusAreas,
                onboarded: profile.onboarded,
                updated_at: new Date().toISOString(),
              },
              { onConflict: "user_id" }
            );
        } catch {}
      })();
    }

    // Build Answers & Attempt History
    const answers: Record<string, number> = {};
    const attemptHistory: Record<string, AttemptRecord> = {};
    const seenSet = new Set<string>();

    const chaptersWithQuestions = new Set<string>();
    if (Array.isArray(attemptsRes.data)) {
      attemptsRes.data.forEach((att) => {
        answers[att.question_id] = att.selected_option;
        const section = getSectionFromQuestionId(att.question_id, CANONICAL_QUESTIONS);
        const chapterId = getChapterFromQuestionId(att.question_id, CANONICAL_QUESTIONS);
        attemptHistory[att.question_id] = {
          selected: att.selected_option,
          correct: att.is_correct,
          timestamp: new Date(att.attempted_at).getTime(),
          section,
          chapterId,
          timeSpentSeconds: att.time_spent_seconds || 0,
          userId: user.id,
        };
        seenSet.add(att.question_id);
        if (chapterId) {
          chaptersWithQuestions.add(chapterId);
          chaptersWithQuestions.add(resolveChapterId(chapterId));
        }
      });
    }

    // Build Set Attempts & Completed Sets
    const setAttempts: Record<string, SetAttempt[]> = {};
    const completedSetIds: string[] = [];

    if (Array.isArray(setAttemptsRes.data)) {
      for (const sa of setAttemptsRes.data) {
        // PHANTOM DETECTION: If an attempt has 0 score, 0 correct answers, and the user has NEVER answered any question in that chapter,
        // it is a phantom/leaked record from an unauthenticated session. Prune it and clean up Supabase.
        const chapterHasAnyAnswers =
          chaptersWithQuestions.has(sa.chapter_id) || chaptersWithQuestions.has(resolveChapterId(sa.chapter_id));
        if (Number(sa.score) === 0 && (sa.correct_count || 0) === 0 && !chapterHasAnyAnswers) {
          console.warn(
            `[dbSync] Pruning phantom set attempt ${sa.id} for set ${sa.set_id} with 0 score and 0 answered questions`
          );
          Promise.resolve(supabase.from("medat_set_attempts").delete().eq("id", sa.id)).catch(() => {});
          continue;
        }

        const resolvedCh = resolveChapterId(sa.chapter_id);
        const section = getSectionFromChapterId(resolvedCh);

        const attempt: SetAttempt = {
          id: sa.id,
          setId: sa.set_id,
          chapterId: sa.chapter_id,
          section,
          status: "completed",
          completedAt: new Date(sa.completed_at).getTime(),
          score: Number(sa.score),
          correctCount: sa.correct_count || 0,
          totalQuestions: sa.total_questions || 0,
          timeSpentSeconds: sa.time_spent_seconds || 0,
          passed: sa.passed || false,
          userId: user.id,
        };
        if (!setAttempts[sa.set_id]) {
          setAttempts[sa.set_id] = [];
        }
        setAttempts[sa.set_id].push(attempt);
        if (!completedSetIds.includes(sa.set_id)) {
          completedSetIds.push(sa.set_id);
        }
      }
    }

    // Build Unresolved Mistakes
    const wrongList: string[] = [];
    if (Array.isArray(mistakesRes.data)) {
      mistakesRes.data.forEach((m) => {
        wrongList.push(m.question_id);
      });
    }

    // Build Bookmarks
    const bookmarkList: string[] = [];
    if (Array.isArray(bookmarksRes.data)) {
      bookmarksRes.data.forEach((b) => {
        bookmarkList.push(b.question_id);
      });
    }

    // Build Activity Dates
    const activityDates: string[] = [];
    if (Array.isArray(activityRes.data)) {
      activityRes.data.forEach((a) => {
        activityDates.push(a.activity_date);
      });
    }


    // Build Today's Daily Mission and Latest Daily Mission
    let todayMission: PersistedDailyMission | null = null;
    if (todayMissionRes && todayMissionRes.data) {
      const tm = todayMissionRes.data;
      todayMission = {
        id: tm.id,
        userId: tm.user_id,
        missionDate: tm.mission_date,
        targetMinutes: tm.target_minutes || 60,
        studyDaysPerWeek: tm.study_days_per_week || 5,
        createdAt: new Date(tm.created_at).getTime(),
        isCreated: tm.is_created ?? false,
        items: Array.isArray(tm.items) ? tm.items : [],
      };
    }

    let latestMission: PersistedDailyMission | null = null;
    if (latestMissionRes && latestMissionRes.data) {
      const lm = latestMissionRes.data;
      latestMission = {
        id: lm.id,
        userId: lm.user_id,
        missionDate: lm.mission_date,
        targetMinutes: lm.target_minutes || 60,
        studyDaysPerWeek: lm.study_days_per_week || 5,
        createdAt: new Date(lm.created_at).getTime(),
        isCreated: lm.is_created ?? false,
        items: Array.isArray(lm.items) ? lm.items : [],
      };
    }

    return {
      profile,
      answers,
      attemptHistory,
      setAttempts,
      completedSetIds,
      bookmarks: bookmarkList,
      wrong: wrongList,
      seen: Array.from(seenSet),
      activityDates,
      todayMission,
      latestMission,
    };
  } catch (err) {
    console.warn("Could not fetch complete user data from Supabase:", err);
    return null;
  }
}

/**
 * Push local set attempts to Supabase if missing from cloud
 */
export async function syncLocalProgressToSupabase(localSetAttempts: Record<string, SetAttempt[]>): Promise<void> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return;

    // Check which sets already exist in cloud
    const { data: cloudSets, error } = await supabase
      .from("medat_set_attempts")
      .select("set_id, completed_at")
      .eq("user_id", user.id);

    if (error) {
      console.warn("[dbSync] Could not inspect cloud set attempts for sync:", error.message);
      return;
    }

    const cloudSetKeys = new Set(
      (cloudSets || []).map((s) => `${s.set_id}_${new Date(s.completed_at).getTime()}`)
    );

    for (const [setId, attempts] of Object.entries(localSetAttempts)) {
      for (const att of attempts) {
        const key = `${att.setId}_${att.completedAt}`;
        if (!cloudSetKeys.has(key)) {
          const { error: insErr } = await supabase.from("medat_set_attempts").insert({
            user_id: user.id,
            set_id: att.setId,
            chapter_id: att.chapterId,
            score: att.score,
            correct_count: att.correctCount,
            total_questions: att.totalQuestions,
            time_spent_seconds: att.timeSpentSeconds,
            passed: att.passed,
            completed_at: new Date(att.completedAt).toISOString(),
          });
          if (insErr) {
            console.warn("[dbSync] Failed to upload local set attempt:", insErr.message);
          }
        }
      }
    }
  } catch (e) {
    console.warn("[dbSync] Error syncing local progress to Supabase:", e);
  }
}

/**
 * Comprehensive push of all local user data to Supabase if missing from cloud.
 * Uploads question attempts (e.g. initial 13 questions), set attempts, activity dates (today + past), bookmarks, and profile.
 */
export async function syncAllLocalProgressToSupabase(params: {
  localSetAttempts?: Record<string, SetAttempt[]>;
  localAttemptHistory?: Record<string, AttemptRecord>;
  localActivityDates?: string[];
  localBookmarks?: string[];
  localWrong?: string[];
  localProfile?: Partial<UserProfile> | null;
  syncProfileExplicitly?: boolean;
}): Promise<void> {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return;
    const uid = user.id;

    // 1. Flush queued offline items first
    await flushPendingSyncQueue(uid);

    // 2. Sync genuine local activity dates to medat_user_activity
    const datesToSync = new Set<string>(params.localActivityDates || []);
    for (const d of datesToSync) {
      if (d && d.trim().length > 0) {
        await logUserActivityToSupabase(d, uid);
      }
    }

    // 3. Sync local question attempts (e.g. questions answered while offline or before login)
    if (params.localAttemptHistory && Object.keys(params.localAttemptHistory).length > 0) {
      try {
        const { data: cloudAttempts } = await supabase
          .from("medat_question_attempts")
          .select("question_id")
          .eq("user_id", uid);
        const existingCloudQuestionIds = new Set((cloudAttempts || []).map((q) => q.question_id));

        const attemptsToInsert = Object.entries(params.localAttemptHistory)
          .filter(([qId]) => !existingCloudQuestionIds.has(qId))
          .map(([questionId, rec]) => ({
            user_id: uid,
            question_id: questionId,
            selected_option: rec.selected,
            is_correct: rec.correct,
            time_spent_seconds: 0,
            attempted_at: new Date(rec.timestamp || Date.now()).toISOString(),
          }));

        if (attemptsToInsert.length > 0) {
          // Batch in chunks of 50
          for (let i = 0; i < attemptsToInsert.length; i += 50) {
            const chunk = attemptsToInsert.slice(i, i + 50);
            const { error: insErr } = await supabase.from("medat_question_attempts").insert(chunk);
            if (insErr) {
              console.warn("[dbSync] Could not batch insert question attempts to Supabase:", insErr.message);
            }
          }
        }
      } catch (err) {
        console.warn("[dbSync] Error syncing local question attempts:", err);
      }
    }

    // 4. Sync mistakes
    if (params.localWrong && params.localWrong.length > 0) {
      try {
        for (const wrongQId of params.localWrong) {
          await supabase.from("medat_mistakes").upsert(
            {
              user_id: uid,
              question_id: wrongQId,
              resolved: false,
              last_wrong_at: new Date().toISOString(),
            },
            { onConflict: "user_id,question_id" }
          );
        }
      } catch {}
    }

    // 5. Sync bookmarks
    if (params.localBookmarks && params.localBookmarks.length > 0) {
      try {
        for (const bId of params.localBookmarks) {
          await supabase.from("medat_bookmarks").upsert(
            {
              user_id: uid,
              question_id: bId,
              created_at: new Date().toISOString(),
            },
            { onConflict: "user_id,question_id" }
          );
        }
      } catch {}
    }

    // 6. Sync set attempts
    if (params.localSetAttempts) {
      await syncLocalProgressToSupabase(params.localSetAttempts);
    }

    // 7. Sync profile ONLY if explicitly requested by user action (never during hydration)
    if (params.syncProfileExplicitly && params.localProfile && params.localProfile.name) {
      await syncUserProfileToSupabase(params.localProfile as UserProfile);
    }
  } catch (err) {
    console.warn("[dbSync] Error syncing all local progress to Supabase:", err);
  }
}
