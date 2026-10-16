/**
 * src/lib/bmsAccessControl.ts
 *
 * Centralized Entitlement & Access Control for the BMS Chapter Library.
 *
 * Access Rules:
 * - In BMS (Biology, Chemistry, Physics, Mathematics), exactly ONE chapter per subject
 *   is 100% free and fully accessible:
 *     1. Biology: "bio-01-zelle" ("Die menschliche Zelle")
 *     2. Chemistry: "chem-01-atombau" ("Atombau & Periodensystem")
 *     3. Physics: "phys-01-groessen-einheiten" ("Größen und Einheiten")
 *     4. Mathematics: "math-01-zehnerpotenzen" ("Zehnerpotenzen")
 *   Total Free BMS Chapters: Exactly 4.
 *
 * - All other 31 BMS chapters require Pro access.
 * - Non-BMS sections (TV, KFF, SEK, MF) are NEVER restricted by BMS locking.
 */

import { CHAPTERS, CHAPTER_ALIASES, resolveChapterId, type NormalizedQuestion } from "../dashboard/practiceData";
import type { UserProfile } from "../dashboard/practiceContext";

/**
 * The exact 4 canonical free BMS chapters (one per subject).
 */
export const FREE_BMS_CHAPTER_IDS = new Set<string>([
  "bio-01-zelle",
  "chem-01-atombau",
  "phys-01-groessen-einheiten",
  "math-01-zehnerpotenzen",
]);

/**
 * Mapping of each BMS subject to its single free preview chapter.
 */
export const FREE_BMS_CHAPTER_BY_SUBJECT: Readonly<Record<string, string>> = {
  bio: "bio-01-zelle",
  chem: "chem-01-atombau",
  phys: "phys-01-groessen-einheiten",
  math: "math-01-zehnerpotenzen",
};

/**
 * Checks whether a given chapter belongs to the BMS section.
 */
export function isBmsChapter(chapterId: string): boolean {
  if (!chapterId) return false;
  const resolved = resolveChapterId(chapterId);
  const ch = CHAPTERS[resolved] || CHAPTERS[chapterId];
  if (ch && ch.section) {
    return ch.section === "BMS";
  }
  return (
    resolved.startsWith("bio-") ||
    resolved.startsWith("chem-") ||
    resolved.startsWith("phys-") ||
    resolved.startsWith("math-")
  );
}

/**
 * Checks whether a chapter is one of the 4 designated free preview BMS chapters.
 */
export function isBmsFreeChapter(chapterId: string): boolean {
  if (!chapterId) return false;
  const resolved = resolveChapterId(chapterId);
  return FREE_BMS_CHAPTER_IDS.has(resolved) || FREE_BMS_CHAPTER_IDS.has(chapterId);
}

/**
 * Determines whether a user currently has Pro access.
 * Checks user profile flags, active tiers, expiry timestamps, and local storage fallbacks.
 */
export function isUserPro(user?: Partial<UserProfile> | null): boolean {
  // 1. Authoritative check on user profile
  if (user) {
    if (user.proExpiresAt) {
      const exp = Date.parse(user.proExpiresAt);
      if (!isNaN(exp) && Date.now() > exp) return false;
    }

    if (user.isPro === true) return true;
    if (
      user.subscriptionTier === "premium" ||
      user.subscriptionTier === "pro" ||
      user.subscriptionTier === "intensiv"
    ) {
      return true;
    }

    // Explicitly non-pro user profile
    if (user.isPro === false && (user.subscriptionTier === "free" || !user.subscriptionTier)) {
      return false;
    }
  }

  // 2. LocalStorage persistence fallback (when offline or before profile hydration)
  if (typeof window !== "undefined") {
    try {
      const localPro = localStorage.getItem("medat_is_pro");
      if (localPro === "true") return true;

      const localTier = localStorage.getItem("medat_subscription_tier");
      if (localTier === "premium" || localTier === "pro" || localTier === "intensiv") {
        return true;
      }
    } catch {
      // ignore
    }
  }

  return false;
}

export type AccessCheckResult = {
  allowed: boolean;
  reason: "not_bms" | "free_preview" | "pro_member" | "pro_required";
  chapterId: string;
  isBms: boolean;
  isFree: boolean;
};

/**
 * Evaluates whether a user can access a specific chapter.
 */
export function canAccessBmsChapter(
  user: Partial<UserProfile> | null | undefined,
  chapterId: string
): AccessCheckResult {
  const resolvedId = resolveChapterId(chapterId);
  const bms = isBmsChapter(resolvedId);

  // Non-BMS sections (TV, KFF, SEK, MF) are never blocked
  if (!bms) {
    return {
      allowed: true,
      reason: "not_bms",
      chapterId: resolvedId,
      isBms: false,
      isFree: true,
    };
  }

  // One of the 4 designated free preview chapters
  const free = isBmsFreeChapter(resolvedId);
  if (free) {
    return {
      allowed: true,
      reason: "free_preview",
      chapterId: resolvedId,
      isBms: true,
      isFree: true,
    };
  }

  // Pro users have access to all chapters
  if (isUserPro(user)) {
    return {
      allowed: true,
      reason: "pro_member",
      chapterId: resolvedId,
      isBms: true,
      isFree: false,
    };
  }

  // Locked BMS chapter requiring Pro upgrade
  return {
    allowed: false,
    reason: "pro_required",
    chapterId: resolvedId,
    isBms: true,
    isFree: false,
  };
}

/**
 * Entitlement rules for Textverständnis (TV):
 * - Exactly Simulation 1 (setOrder === 1 or "tv-scipass-set-1") is 100% free preview.
 * - Simulations 2, 3, 4, 5 require Pro / Vollzugang.
 */
export const FREE_TV_SIMULATION_ORDER = 1;
export const FREE_TV_SET_ID = "tv-scipass-set-1";

export function isTvSimulation(setOrderOrId: number | string): boolean {
  if (typeof setOrderOrId === "number") return true;
  return setOrderOrId.startsWith("tv-") || setOrderOrId.includes("tv-scipass");
}

export function isTvFreeSimulation(setOrderOrId: number | string): boolean {
  if (typeof setOrderOrId === "number") {
    return setOrderOrId === 1;
  }
  if (setOrderOrId === "tv-scipass-set-1" || setOrderOrId.endsWith("-set-1")) {
    return true;
  }
  const match = setOrderOrId.match(/-set-(\d+)/);
  if (match) {
    return parseInt(match[1], 10) === 1;
  }
  return false;
}

export function canAccessTvSimulation(
  user: Partial<UserProfile> | null | undefined,
  setOrderOrId: number | string
): AccessCheckResult {
  const isFree = isTvFreeSimulation(setOrderOrId);
  const resolvedChapterId = "tv-scipass";

  if (isFree) {
    return {
      allowed: true,
      reason: "free_preview",
      chapterId: resolvedChapterId,
      isBms: false,
      isFree: true,
    };
  }

  if (isUserPro(user)) {
    return {
      allowed: true,
      reason: "pro_member",
      chapterId: resolvedChapterId,
      isBms: false,
      isFree: false,
    };
  }

  return {
    allowed: false,
    reason: "pro_required",
    chapterId: resolvedChapterId,
    isBms: false,
    isFree: false,
  };
}

/**
 * Entitlement rules for KFF (Kognitive Fähigkeiten und Fertigkeiten):
 * - Subtests: FZ, ZF, WF, GM, IE (MedAT-H).
 * - Exactly Simulation 1 (setOrder === 1 or ending with "-set-1") is 100% free preview.
 * - Simulations 2, 3, 4, 5 of every KFF subtest require Pro / Vollzugang.
 */
export function isKffChapter(chapterId: string): boolean {
  if (!chapterId) return false;
  const resolved = resolveChapterId(chapterId);
  const ch = CHAPTERS[resolved] || CHAPTERS[chapterId];
  if (ch && ch.section) {
    return ch.section === "KFF";
  }
  return resolved.startsWith("kff-") || chapterId.startsWith("kff-");
}

export function isKffFreeSimulation(setOrderOrId: number | string): boolean {
  if (typeof setOrderOrId === "number") {
    return setOrderOrId === 1;
  }
  if (setOrderOrId.endsWith("-set-1") || setOrderOrId.endsWith("-s1")) {
    return true;
  }
  const match = setOrderOrId.match(/-set-(\d+)/);
  if (match) {
    return parseInt(match[1], 10) === 1;
  }
  return false;
}

export function canAccessKffSimulation(
  user: Partial<UserProfile> | null | undefined,
  chapterId: string,
  setOrderOrId: number | string
): AccessCheckResult {
  const resolvedChapterId = resolveChapterId(chapterId);
  const isFree = isKffFreeSimulation(setOrderOrId);

  if (isFree) {
    return {
      allowed: true,
      reason: "free_preview",
      chapterId: resolvedChapterId,
      isBms: false,
      isFree: true,
    };
  }

  if (isUserPro(user)) {
    return {
      allowed: true,
      reason: "pro_member",
      chapterId: resolvedChapterId,
      isBms: false,
      isFree: false,
    };
  }

  return {
    allowed: false,
    reason: "pro_required",
    chapterId: resolvedChapterId,
    isBms: false,
    isFree: false,
  };
}

/**
 * Entitlement rules for SEK (Sozial-emotionale Kompetenzen):
 * - Subtests: EE (Emotionen erkennen), ER (Emotionen regulieren), SE (Soziales Entscheiden).
 * - Exactly Simulation 1 (setOrder === 1 or ending with "-set-1" / "-s1") is 100% free preview.
 * - Simulations 2, 3, 4, 5 of every SEK subtest require Pro / Vollzugang.
 */
export function isSekChapter(chapterId: string): boolean {
  if (!chapterId) return false;
  const resolved = resolveChapterId(chapterId);
  const ch = CHAPTERS[resolved] || CHAPTERS[chapterId];
  if (ch && ch.section) {
    return ch.section === "SEK";
  }
  return (
    resolved.startsWith("sek-") ||
    chapterId.startsWith("sek-") ||
    resolved.startsWith("ee-") ||
    chapterId.startsWith("ee-") ||
    resolved.startsWith("er-") ||
    chapterId.startsWith("er-") ||
    resolved.startsWith("se-") ||
    chapterId.startsWith("se-")
  );
}

export function isSekFreeSimulation(setOrderOrId: number | string): boolean {
  if (typeof setOrderOrId === "number") {
    return setOrderOrId === 1;
  }
  if (setOrderOrId.endsWith("-set-1") || setOrderOrId.endsWith("-s1")) {
    return true;
  }
  const match = setOrderOrId.match(/-set-(\d+)/);
  if (match) {
    return parseInt(match[1], 10) === 1;
  }
  return false;
}

export function canAccessSekSimulation(
  user: Partial<UserProfile> | null | undefined,
  chapterId: string,
  setOrderOrId: number | string
): AccessCheckResult {
  const resolvedChapterId = resolveChapterId(chapterId);
  const isFree = isSekFreeSimulation(setOrderOrId);

  if (isFree) {
    return {
      allowed: true,
      reason: "free_preview",
      chapterId: resolvedChapterId,
      isBms: false,
      isFree: true,
    };
  }

  if (isUserPro(user)) {
    return {
      allowed: true,
      reason: "pro_member",
      chapterId: resolvedChapterId,
      isBms: false,
      isFree: false,
    };
  }

  return {
    allowed: false,
    reason: "pro_required",
    chapterId: resolvedChapterId,
    isBms: false,
    isFree: false,
  };
}

/**
 * Flagship MedAT-H Generalprobe #1 is the designated free mock exam.
 */
export const FREE_GENERALPROBE_ID = "mock-full-medat-h-1";

/**
 * Checks whether an exam or chapter ID corresponds to a full Generalprobe or Mock Exam.
 */
export function isGeneralprobe(examOrChapterId: string): boolean {
  if (!examOrChapterId) return false;
  return (
    examOrChapterId.startsWith("mock-") ||
    examOrChapterId.startsWith("qm-") ||
    examOrChapterId.includes("generalprobe")
  );
}

/**
 * Checks whether a given mock exam / Generalprobe is free.
 * Exactly "mock-full-medat-h-1" (and qm-bms-bio as speed sprint preview) is free.
 */
export function isGeneralprobeFree(examId: string): boolean {
  if (!examId) return false;
  return (
    examId === FREE_GENERALPROBE_ID ||
    examId === "generalprobe-1" ||
    examId === "generalprobe-h-1" ||
    examId === "gp-1" ||
    examId === "qm-bms-bio"
  );
}

/**
 * Access check for a Generalprobe / Mock exam.
 */
export function canAccessGeneralprobe(
  user: Partial<UserProfile> | null | undefined,
  examId: string
): AccessCheckResult {
  const isFree = isGeneralprobeFree(examId);
  if (isFree) {
    return {
      allowed: true,
      reason: "free_preview",
      chapterId: examId,
      isBms: false,
      isFree: true,
    };
  }

  if (isUserPro(user)) {
    return {
      allowed: true,
      reason: "pro_member",
      chapterId: examId,
      isBms: false,
      isFree: false,
    };
  }

  return {
    allowed: false,
    reason: "pro_required",
    chapterId: examId,
    isBms: false,
    isFree: false,
  };
}

/**
 * Checks whether a question can be accessed under the user's current subscription.
 */
export function canAccessQuestion(
  user: Partial<UserProfile> | null | undefined,
  question: Pick<NormalizedQuestion, "id" | "chapterId"> & { section?: string; setOrder?: number }
): boolean {
  if (!question) return true;
  const chapterId = question.chapterId || question.id;
  const resolved = resolveChapterId(chapterId);
  if (isGeneralprobe(resolved) || question.section === "MOCK" || question.section === "GENERALPROBE") {
    return canAccessGeneralprobe(user, resolved).allowed;
  }
  if (resolved === "tv-scipass" || question.section === "TV") {
    const order = question.setOrder || 1;
    return canAccessTvSimulation(user, order).allowed;
  }
  if (isKffChapter(resolved) || question.section === "KFF") {
    const order = question.setOrder || 1;
    return canAccessKffSimulation(user, resolved, order).allowed;
  }
  if (isSekChapter(resolved) || question.section === "SEK") {
    const order = question.setOrder || 1;
    return canAccessSekSimulation(user, resolved, order).allowed;
  }
  return canAccessBmsChapter(user, chapterId).allowed;
}

/**
 * Helper to explicitly grant or revoke local test Pro status.
 */
export function setLocalProStatus(isPro: boolean, tier: "free" | "premium" = isPro ? "premium" : "free") {
  if (typeof window === "undefined") return;
  try {
    if (isPro) {
      localStorage.setItem("medat_is_pro", "true");
      localStorage.setItem("medat_subscription_tier", tier);
    } else {
      localStorage.removeItem("medat_is_pro");
      localStorage.setItem("medat_subscription_tier", "free");
    }
  } catch {}
}

/**
 * Returns summary statistics of the BMS catalog for verification and reporting.
 */
export function getBmsCatalogSummary() {
  const allChapterIds = Object.keys(CHAPTERS).filter(
    (id) => !id.includes("-alias-") && !CHAPTER_ALIASES[id]
  );
  const bmsChapters = allChapterIds.filter((id) => isBmsChapter(id));
  const freeChapters = bmsChapters.filter((id) => isBmsFreeChapter(id));
  const lockedChapters = bmsChapters.filter((id) => !isBmsFreeChapter(id));

  const bySubject: Record<string, { total: number; free: number; locked: number; chapters: string[] }> = {};

  bmsChapters.forEach((id) => {
    const ch = CHAPTERS[id];
    const sub = ch?.subjectId || id.split("-")[0];
    if (!bySubject[sub]) {
      bySubject[sub] = { total: 0, free: 0, locked: 0, chapters: [] };
    }
    bySubject[sub].total += 1;
    bySubject[sub].chapters.push(id);
    if (isBmsFreeChapter(id)) {
      bySubject[sub].free += 1;
    } else {
      bySubject[sub].locked += 1;
    }
  });

  return {
    totalBmsChapters: bmsChapters.length,
    freeBmsChapters: freeChapters.length,
    lockedBmsChapters: lockedChapters.length,
    freeChapterIds: Array.from(FREE_BMS_CHAPTER_IDS),
    bySubject,
  };
}
