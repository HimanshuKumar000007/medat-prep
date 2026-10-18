import type {
  DailyStudyTime,
  ExamType,
  PreparationStage,
  SectionCode,
  TargetUniversity,
} from "../content/medat/config";
import type { UserProfile } from "../dashboard/practiceContext";

export const VALID_EXAM_TYPES: readonly ExamType[] = ["MEDAT-H", "MEDAT-Z"] as const;
export const VALID_UNIVERSITIES: readonly TargetUniversity[] = [
  "wien",
  "innsbruck",
  "graz",
  "linz",
  "undecided",
] as const;
export const VALID_STAGES: readonly PreparationStage[] = [
  "just_starting",
  "started_studying",
  "preparing_while",
  "doing_mocks",
] as const;
export const VALID_STUDY_TIMES: readonly DailyStudyTime[] = [
  "under_1h",
  "1_2h",
  "2_4h",
  "4h_plus",
] as const;
export const VALID_SECTIONS: readonly SectionCode[] = [
  "BMS",
  "KFF",
  "TV",
  "SEK",
  "MF",
] as const;

export function getDailyStudyTimeFromMinutes(minutes: number): DailyStudyTime {
  if (minutes <= 30) return "under_1h";
  if (minutes <= 60) return "1_2h";
  if (minutes <= 120) return "2_4h";
  return "4h_plus";
}

export function getDailyMinutesFromStudyTime(studyTime?: string): number {
  switch (studyTime) {
    case "under_1h":
    case "30m":
      return 30;
    case "1h":
    case "1_2h":
      return 60;
    case "2_4h":
    case "2_3h":
      return 90;
    case "4h_plus":
    case "3h_plus":
      return 150;
    default:
      return 60;
  }
}

/**
 * Normalizes and guarantees valid types for all fields of a UserProfile.
 * Inspired by the IISER architecture:
 * 1. Resolves authentic student names from user metadata or email prefixes rather than defaulting to generic placeholders.
 * 2. Enforces strict schema constraints for numbers, booleans, and arrays (preventing .includes() / .map() crashes).
 */
export function sanitizeUserProfile(
  raw?: Partial<UserProfile> | Record<string, any> | null,
  authUser?: { email?: string; user_metadata?: Record<string, any> } | null
): UserProfile {
  const p = (raw || {}) as Record<string, any>;

  // 1. Resolve authentic name (IISER fallback pattern)
  const metaName =
    authUser?.user_metadata?.full_name ||
    authUser?.user_metadata?.name ||
    authUser?.user_metadata?.user_name;
  const emailPrefix = (p.email || authUser?.email || "").split("@")[0]?.trim();

  let resolvedName = "Student:in";
  if (typeof p.name === "string" && p.name.trim().length > 0 && p.name.trim() !== "Student:in") {
    resolvedName = p.name.trim();
  } else if (typeof metaName === "string" && metaName.trim().length > 0) {
    resolvedName = metaName.trim();
  } else if (emailPrefix && emailPrefix.length > 0) {
    resolvedName = emailPrefix;
  }

  // 2. Email
  const resolvedEmail = (typeof p.email === "string" && p.email.trim().length > 0)
    ? p.email.trim()
    : (authUser?.email || "");

  // 3. Exam Type
  const rawExam = p.examType || p.exam_type;
  const examType: ExamType = rawExam === "MEDAT-Z" ? "MEDAT-Z" : "MEDAT-H";

  // 4. Target Year (must be integer number)
  const rawYear = p.targetYear ?? p.target_year;
  const parsedYear = Number(rawYear);
  const targetYear = !isNaN(parsedYear) && parsedYear >= 0 ? parsedYear : 2027;

  // 5. Target University
  const rawUni = p.targetUniversity || p.target_university;
  let targetUniversity: TargetUniversity =
    VALID_UNIVERSITIES.includes(rawUni as TargetUniversity)
      ? (rawUni as TargetUniversity)
      : "undecided";
  // Linz only offers Humanmedizin (MedAT-H)
  if (targetUniversity === "linz" && examType === "MEDAT-Z") {
    targetUniversity = "wien";
  }

  // 6. Preparation Stage
  const rawStage = p.preparationStage || p.preparation_stage;
  const preparationStage: PreparationStage =
    VALID_STAGES.includes(rawStage as PreparationStage)
      ? (rawStage as PreparationStage)
      : "just_starting";

  // 7. Daily Minutes & Study Time
  const rawMinutes = p.dailyMinutes ?? p.daily_minutes;
  const rawTime = p.dailyStudyTime || p.daily_study_time;

  let dailyMinutes = 60;
  if (rawMinutes !== undefined && rawMinutes !== null && !isNaN(Number(rawMinutes))) {
    dailyMinutes = Math.max(15, Math.min(480, Number(rawMinutes)));
  } else if (rawTime) {
    dailyMinutes = getDailyMinutesFromStudyTime(String(rawTime));
  }

  const dailyStudyTime: DailyStudyTime =
    VALID_STUDY_TIMES.includes(rawTime as DailyStudyTime)
      ? (rawTime as DailyStudyTime)
      : getDailyStudyTimeFromMinutes(dailyMinutes);

  // 8. Study Days Per Week (1..7)
  const rawDays = p.studyDaysPerWeek ?? p.study_days_per_week;
  const parsedDays = Number(rawDays);
  const studyDaysPerWeek =
    !isNaN(parsedDays) && parsedDays >= 1 && parsedDays <= 7 ? Math.round(parsedDays) : 5;

  // 9. Focus Areas (Strict Array of valid SectionCodes)
  const rawFocus = p.focusAreas ?? p.focus_areas;
  let focusAreas: SectionCode[] = [];
  if (Array.isArray(rawFocus)) {
    focusAreas = rawFocus.filter((c): c is SectionCode =>
      typeof c === "string" && VALID_SECTIONS.includes(c as SectionCode)
    );
  } else if (typeof rawFocus === "string") {
    try {
      const parsed = JSON.parse(rawFocus);
      if (Array.isArray(parsed)) {
        focusAreas = parsed.filter((c): c is SectionCode =>
          typeof c === "string" && VALID_SECTIONS.includes(c as SectionCode)
        );
      }
    } catch {
      if (VALID_SECTIONS.includes(rawFocus as SectionCode)) {
        focusAreas = [rawFocus as SectionCode];
      }
    }
  }

  if (focusAreas.length === 0) {
    focusAreas = examType === "MEDAT-Z" ? ["BMS", "MF"] : ["BMS"];
  }

  // 10. Plan Configured & Onboarded (Strict Booleans)
  const rawConfigured = p.planConfigured ?? p.plan_configured;
  const rawOnboarded = p.onboarded;

  const planConfigured =
    rawConfigured === true ||
    (rawConfigured !== false && (p.onboarded === true || p.onboarded === undefined));
  const onboarded = rawOnboarded !== false;

  const resolvedUserId = p.userId || p.user_id || (authUser as any)?.id || undefined;

  // 11. Pro Subscription & Access Entitlement
  const rawIsPro = p.isPro ?? p.is_pro;
  const rawTier = p.subscriptionTier ?? p.subscription_tier;
  const rawStatus = p.subscriptionStatus ?? p.subscription_status;
  const rawExpires = p.proExpiresAt ?? p.pro_expires_at;

  let isPro = false;
  if (typeof rawIsPro === "boolean") {
    isPro = rawIsPro;
  } else if (rawIsPro === "true" || rawIsPro === 1) {
    isPro = true;
  } else if (rawTier === "premium" || rawTier === "pro" || rawTier === "intensiv") {
    isPro = true;
  } else if (resolvedUserId && typeof window !== "undefined") {
    try {
      const localScopedPro = localStorage.getItem(`medat_prep_v2_u_${resolvedUserId}_is_pro`);
      const localScopedTier = localStorage.getItem(`medat_prep_v2_u_${resolvedUserId}_subscription_tier`);
      if (
        localScopedPro === "true" ||
        localScopedTier === "premium" ||
        localScopedTier === "pro" ||
        localScopedTier === "intensiv"
      ) {
        isPro = true;
      }
    } catch {}
  }

  // Check expiration if specified
  let proExpiresAt: string | null = null;
  if (typeof rawExpires === "string" && rawExpires.trim().length > 0) {
    proExpiresAt = rawExpires.trim();
    const expiryTime = Date.parse(proExpiresAt);
    if (!isNaN(expiryTime) && Date.now() > expiryTime) {
      isPro = false;
    }
  }

  const subscriptionTier: "free" | "premium" | "pro" | "intensiv" = isPro
    ? rawTier === "intensiv"
      ? "intensiv"
      : "premium"
    : "free";

  const subscriptionStatus = isPro
    ? (typeof rawStatus === "string" && rawStatus ? rawStatus : "active")
    : (typeof rawStatus === "string" && rawStatus ? rawStatus : "none");

  // Keep user-scoped localStorage aligned & purge legacy unscoped keys
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem("medat_is_pro");
      localStorage.removeItem("medat_subscription_tier");
      if (resolvedUserId) {
        if (isPro) {
          localStorage.setItem(`medat_prep_v2_u_${resolvedUserId}_is_pro`, "true");
          localStorage.setItem(`medat_prep_v2_u_${resolvedUserId}_subscription_tier`, subscriptionTier);
        } else {
          localStorage.removeItem(`medat_prep_v2_u_${resolvedUserId}_is_pro`);
          localStorage.setItem(`medat_prep_v2_u_${resolvedUserId}_subscription_tier`, "free");
        }
      }
    } catch {}
  }

  return {
    name: resolvedName,
    email: resolvedEmail,
    examType,
    targetYear,
    targetUniversity,
    preparationStage,
    dailyStudyTime,
    dailyMinutes,
    studyDaysPerWeek,
    planConfigured,
    focusAreas,
    onboarded,
    isPro,
    subscriptionTier,
    subscriptionStatus,
    proExpiresAt,
    userId: resolvedUserId,
  };
}
