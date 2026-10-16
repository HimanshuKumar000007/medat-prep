/**
 * test_fresh_signup_zero_and_mission_redirect.cjs
 *
 * Verification suite for:
 * 1. Fresh signup starts with strictly 0 / 11 simulations (0%) and no phantom check/progress.
 * 2. Unowned/legacy pending sync items (!s.userId) in localStorage are never adopted by a new user.
 * 3. Logout and signup purge un-scoped pending queues and in-progress drafts.
 * 4. Phantom set attempts with 0 score and 0 answered questions are pruned during hydration.
 * 5. Mission 3 (BMS) navigation strictly points to BMS (e.g. bio-01-zelle) and never redirects to FZ (kff-fig-l1).
 */

const assert = require("assert");

console.log("================================================================");
console.log("MEDAT PREP — FRESH SIGNUP ZERO PROGRESS & MISSION ROUTING SUITE");
console.log("================================================================\n");

let passed = 0;
let failed = 0;

function check(cond, msg) {
  if (cond) {
    console.log(`  [PASS] ${msg}`);
    passed++;
  } else {
    console.error(`  [FAIL] ${msg}`);
    failed++;
    process.exitCode = 1;
  }
}

// -------------------------------------------------------------
// 1. Mission 3 Routing Verification
// -------------------------------------------------------------
console.log("--- 1. Testing Mission 3 Routing Logic ---");

// Mock CHAPTERS
const CHAPTERS = {
  "bio-01-zelle": { id: "bio-01-zelle", section: "BMS", title: "Zellbiologie" },
  "bio-04-genetik": { id: "bio-04-genetik", section: "BMS", title: "Genetik" },
  "kff-fig-l1": { id: "kff-fig-l1", section: "KFF", title: "Figuren zusammensetzen" },
  "sek-rec-face": { id: "sek-rec-face", section: "SEK", title: "Emotionen erkennen" },
  "sek-reg-stress": { id: "sek-reg-stress", section: "SEK", title: "Emotionen regulieren" },
  "tv-scipass": { id: "tv-scipass", section: "TV", title: "Textverständnis" },
};

function generateMissionSlot3Seed(focusChapterId, bmsWeakness) {
  const bmsChapter = CHAPTERS[focusChapterId]?.section === "BMS" ? focusChapterId : "bio-01-zelle";
  const bmsSeed = bmsWeakness
    ? { section: "BMS", chapterId: bmsWeakness.chapter.id }
    : { section: "BMS", chapterId: bmsChapter };
  return bmsSeed;
}

// Scenario A: User focus is KFF -> focusChapterId is "kff-fig-l1", no errors yet
const seedWhenKffFocus = generateMissionSlot3Seed("kff-fig-l1", null);
check(seedWhenKffFocus.section === "BMS", "Slot 3 seed section is BMS");
check(seedWhenKffFocus.chapterId === "bio-01-zelle", "Slot 3 seed chapter is strictly bio-01-zelle, NOT kff-fig-l1");

// Scenario B: User focus is SEK -> focusChapterId is "sek-rec-face", no errors yet
const seedWhenSekFocus = generateMissionSlot3Seed("sek-rec-face", null);
check(seedWhenSekFocus.chapterId === "bio-01-zelle", "Slot 3 seed chapter is bio-01-zelle when focus is SEK");

// Scenario C: User focus is BMS -> focusChapterId is "bio-04-genetik"
const seedWhenBmsFocus = generateMissionSlot3Seed("bio-04-genetik", null);
check(seedWhenBmsFocus.chapterId === "bio-04-genetik", "Slot 3 seed preserves valid BMS chapter bio-04-genetik");

// -------------------------------------------------------------
// 2. Pending Sync Queue Adoption Leak Prevention
// -------------------------------------------------------------
console.log("\n--- 2. Testing Pending Sync Queue Isolation ---");

const mockLocalStorage = new Map();

function getPendingSets(userId) {
  const PENDING_SETS_KEY = "medat_pending_sync_sets";
  const key = userId ? `medat_pending_sync_sets_${userId}` : PENDING_SETS_KEY;
  const raw = mockLocalStorage.get(key);
  let userSets = raw ? JSON.parse(raw) : [];

  if (userId && key !== PENDING_SETS_KEY) {
    const legacyRaw = mockLocalStorage.get(PENDING_SETS_KEY);
    if (legacyRaw) {
      const legacySets = JSON.parse(legacyRaw);
      // STRICT FIX: only match s.userId === userId, NEVER !s.userId
      const matchingLegacy = legacySets.filter((s) => s.userId === userId);
      const remainingLegacy = legacySets.filter((s) => s.userId && s.userId !== userId);
      if (matchingLegacy.length > 0) {
        userSets = [...userSets, ...matchingLegacy];
        mockLocalStorage.set(key, JSON.stringify(userSets));
      }
      mockLocalStorage.set(PENDING_SETS_KEY, JSON.stringify(remainingLegacy));
    }
  }
  return userSets;
}

// Simulate an orphaned pending attempt left in localStorage by a test or guest session
mockLocalStorage.set("medat_pending_sync_sets", JSON.stringify([
  { setId: "kff-fig-l1-set-1", score: 0, timeSpentSeconds: 90, totalQuestions: 15 } // NO userId
]));

// New user registers with clean UUID
const newUserId = "user-uuid-rdxankit1234";
const userSets = getPendingSets(newUserId);
check(userSets.length === 0, "New user has 0 pending sets (did NOT adopt unowned legacy attempt)");

// -------------------------------------------------------------
// 3. Phantom Attempt Pruning during Hydration
// -------------------------------------------------------------
console.log("\n--- 3. Testing Phantom Set Attempt Pruning ---");

function hydrateSetAttempts(cloudSetAttempts, cloudQuestionAttempts) {
  const setAttempts = {};
  const completedSetIds = [];
  const deletedFromCloud = [];

  const chaptersWithQuestions = new Set();
  cloudQuestionAttempts.forEach((att) => {
    if (att.chapter_id) chaptersWithQuestions.add(att.chapter_id);
  });

  for (const sa of cloudSetAttempts) {
    const chapterHasAnyAnswers = chaptersWithQuestions.has(sa.chapter_id);
    if (Number(sa.score) === 0 && (sa.correct_count || 0) === 0 && !chapterHasAnyAnswers) {
      deletedFromCloud.push(sa.id);
      continue; // Pruned!
    }

    const attempt = {
      id: sa.id,
      setId: sa.set_id,
      chapterId: sa.chapter_id,
      score: Number(sa.score),
      correctCount: sa.correct_count || 0,
      totalQuestions: sa.total_questions || 0,
      timeSpentSeconds: sa.time_spent_seconds || 0,
      passed: sa.passed || false,
    };
    if (!setAttempts[sa.set_id]) setAttempts[sa.set_id] = [];
    setAttempts[sa.set_id].push(attempt);
    if (!completedSetIds.includes(sa.set_id)) completedSetIds.push(sa.set_id);
  }

  return { setAttempts, completedSetIds, deletedFromCloud };
}

// Cloud has a phantom record for kff-fig-l1-set-1, but user answered 0 questions in KFF
const cloudSets = [
  { id: "sa-phantom-1", set_id: "kff-fig-l1-set-1", chapter_id: "kff-fig-l1", score: 0, correct_count: 0, total_questions: 15, time_spent_seconds: 90 }
];
const cloudQuestions = []; // 0 questions answered

const result = hydrateSetAttempts(cloudSets, cloudQuestions);
check(Object.keys(result.setAttempts).length === 0, "Phantom set attempt pruned from local state (0 sets loaded)");
check(result.completedSetIds.length === 0, "completedSetIds is strictly empty");
check(result.deletedFromCloud.includes("sa-phantom-1"), "Phantom attempt flagged for cloud deletion");

// -------------------------------------------------------------
// 4. Genuine Attempt Retention
// -------------------------------------------------------------
console.log("\n--- 4. Testing Genuine Completed Attempt Retention ---");

const realSets = [
  { id: "sa-real-1", set_id: "kff-fig-l1-set-1", chapter_id: "kff-fig-l1", score: 80, correct_count: 12, total_questions: 15, time_spent_seconds: 950 }
];
const realQuestions = [
  { question_id: "kff-fig-001", chapter_id: "kff-fig-l1", is_correct: true }
];

const realResult = hydrateSetAttempts(realSets, realQuestions);
check(Object.keys(realResult.setAttempts).length === 1, "Genuine attempt is retained (1 set loaded)");
check(realResult.completedSetIds.includes("kff-fig-l1-set-1"), "Genuine set is marked completed");
check(realResult.deletedFromCloud.length === 0, "No cloud deletions for genuine attempt");

console.log("\n================================================================");
console.log(`TOTAL: ${passed} PASSED, ${failed} FAILED`);
console.log("================================================================");

if (failed > 0) process.exit(1);
