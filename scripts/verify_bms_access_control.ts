/**
 * scripts/verify_bms_access_control.ts
 *
 * Comprehensive Automated Verification Suite for BMS Free Preview & Pro Locking.
 * Tests all 15 core requirements from the specification.
 */

import {
  FREE_BMS_CHAPTER_IDS,
  FREE_BMS_CHAPTER_BY_SUBJECT,
  isBmsChapter,
  isBmsFreeChapter,
  isUserPro,
  canAccessBmsChapter,
  canAccessTvSimulation,
  canAccessKffSimulation,
  isKffChapter,
  isKffFreeSimulation,
  canAccessSekSimulation,
  isSekChapter,
  isSekFreeSimulation,
  FREE_GENERALPROBE_ID,
  isGeneralprobe,
  isGeneralprobeFree,
  canAccessGeneralprobe,
  canAccessQuestion,
  getBmsCatalogSummary,
} from "../src/lib/bmsAccessControl";
import { SUBJECTS, CHAPTERS, resolveChapterId } from "../src/dashboard/practiceData";
import { sanitizeUserProfile } from "../src/lib/profileUtils";
import type { UserProfile } from "../src/dashboard/practiceContext";

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

console.log("\n=======================================================");
console.log("  RUNNING BMS FREE PREVIEW & PRO LOCKING VERIFICATION");
console.log("=======================================================\n");

// --- TEST 1: Exactly 4 free BMS chapter IDs ---
console.log("--- 1. Verification of Canonical Free BMS Chapter IDs ---");
assert(FREE_BMS_CHAPTER_IDS.size === 4, "FREE_BMS_CHAPTER_IDS must contain exactly 4 chapters");
assert(FREE_BMS_CHAPTER_IDS.has("bio-01-zelle"), "bio-01-zelle must be in FREE_BMS_CHAPTER_IDS");
assert(FREE_BMS_CHAPTER_IDS.has("chem-01-atombau"), "chem-01-atombau must be in FREE_BMS_CHAPTER_IDS");
assert(FREE_BMS_CHAPTER_IDS.has("phys-01-groessen-einheiten"), "phys-01-groessen-einheiten must be in FREE_BMS_CHAPTER_IDS");
assert(FREE_BMS_CHAPTER_IDS.has("math-01-zehnerpotenzen"), "math-01-zehnerpotenzen must be in FREE_BMS_CHAPTER_IDS");

// --- TEST 2: Exactly 1 free chapter per BMS subject ---
console.log("\n--- 2. Subject Mapping & 1 Free Chapter Per Subject ---");
assert(FREE_BMS_CHAPTER_BY_SUBJECT.bio === "bio-01-zelle", "Biology free chapter must be bio-01-zelle");
assert(FREE_BMS_CHAPTER_BY_SUBJECT.chem === "chem-01-atombau", "Chemistry free chapter must be chem-01-atombau");
assert(FREE_BMS_CHAPTER_BY_SUBJECT.phys === "phys-01-groessen-einheiten", "Physics free chapter must be phys-01-groessen-einheiten");
assert(FREE_BMS_CHAPTER_BY_SUBJECT.math === "math-01-zehnerpotenzen", "Mathematics free chapter must be math-01-zehnerpotenzen");

// --- TEST 3: Catalog Breakdown Across All 4 Subjects ---
console.log("\n--- 3. Catalog Totals and Subject Counts ---");
const bmsSubjects = SUBJECTS.filter((s) => s.section === "BMS");
assert(bmsSubjects.length === 4, "There must be exactly 4 BMS subjects (Bio, Chem, Phys, Math)");

const bioSubject = bmsSubjects.find((s) => s.id === "bio")!;
const chemSubject = bmsSubjects.find((s) => s.id === "chem")!;
const physSubject = bmsSubjects.find((s) => s.id === "phys")!;
const mathSubject = bmsSubjects.find((s) => s.id === "math")!;

assert(bioSubject.chapterIds.length === 9, "Biology must have exactly 9 chapters");
assert(chemSubject.chapterIds.length === 13, "Chemistry must have exactly 13 chapters");
assert(physSubject.chapterIds.length === 7, "Physics must have exactly 7 chapters");
assert(mathSubject.chapterIds.length === 6, "Mathematics must have exactly 6 chapters");

const totalBmsChapters = bioSubject.chapterIds.length + chemSubject.chapterIds.length + physSubject.chapterIds.length + mathSubject.chapterIds.length;
assert(totalBmsChapters === 35, `Total BMS chapters must be exactly 35 (found: ${totalBmsChapters})`);

// Check free vs locked per subject
const bioFree = bioSubject.chapterIds.filter(isBmsFreeChapter);
const bioLocked = bioSubject.chapterIds.filter((id) => !isBmsFreeChapter(id));
assert(bioFree.length === 1 && bioFree[0] === "bio-01-zelle", "Bio must have exactly 1 free chapter");
assert(bioLocked.length === 8, "Bio must have exactly 8 locked chapters");

const chemFree = chemSubject.chapterIds.filter(isBmsFreeChapter);
const chemLocked = chemSubject.chapterIds.filter((id) => !isBmsFreeChapter(id));
assert(chemFree.length === 1 && chemFree[0] === "chem-01-atombau", "Chem must have exactly 1 free chapter");
assert(chemLocked.length === 12, "Chem must have exactly 12 locked chapters");

const physFree = physSubject.chapterIds.filter(isBmsFreeChapter);
const physLocked = physSubject.chapterIds.filter((id) => !isBmsFreeChapter(id));
assert(physFree.length === 1 && physFree[0] === "phys-01-groessen-einheiten", "Phys must have exactly 1 free chapter");
assert(physLocked.length === 6, "Phys must have exactly 6 locked chapters");

const mathFree = mathSubject.chapterIds.filter(isBmsFreeChapter);
const mathLocked = mathSubject.chapterIds.filter((id) => !isBmsFreeChapter(id));
assert(mathFree.length === 1 && mathFree[0] === "math-01-zehnerpotenzen", "Math must have exactly 1 free chapter");
assert(mathLocked.length === 5, "Math must have exactly 5 locked chapters");

const totalLocked = bioLocked.length + chemLocked.length + physLocked.length + mathLocked.length;
assert(totalLocked === 31, `Total locked BMS chapters must be exactly 31 (found: ${totalLocked})`);

// --- TEST 4: Non-Pro User Access Verification ---
console.log("\n--- 4. Non-Pro User Access Verification ---");
const freeUser: UserProfile = sanitizeUserProfile({
  name: "Basis User",
  isPro: false,
  subscriptionTier: "free",
});

// The 4 free chapters MUST be allowed
["bio-01-zelle", "chem-01-atombau", "phys-01-groessen-einheiten", "math-01-zehnerpotenzen"].forEach((chId) => {
  const result = canAccessBmsChapter(freeUser, chId);
  assert(result.allowed === true && result.reason === "free_preview", `Non-Pro user MUST be allowed into free chapter: ${chId}`);
});

// Sample of locked chapters MUST be blocked
["bio-02-koerper", "chem-04-bindungen", "phys-02-mechanik", "math-02-algebra"].forEach((chId) => {
  const result = canAccessBmsChapter(freeUser, chId);
  assert(result.allowed === false && result.reason === "pro_required", `Non-Pro user MUST be blocked from locked chapter: ${chId}`);
});

// All 31 locked chapters verified
let blockedCount = 0;
[...bioLocked, ...chemLocked, ...physLocked, ...mathLocked].forEach((chId) => {
  const result = canAccessBmsChapter(freeUser, chId);
  if (!result.allowed && result.reason === "pro_required") {
    blockedCount++;
  }
});
assert(blockedCount === 31, `Exactly 31 locked chapters must be blocked for freeUser (found: ${blockedCount})`);

// --- TEST 5: Pro User Access Verification ---
console.log("\n--- 5. Pro User Access Verification ---");
const proUser: UserProfile = sanitizeUserProfile({
  name: "Pro Candidate",
  isPro: true,
  subscriptionTier: "premium",
});

assert(isUserPro(proUser) === true, "isUserPro must return true for proUser");

// All 35 BMS chapters MUST be accessible for Pro user
let proAllowedCount = 0;
[...bioSubject.chapterIds, ...chemSubject.chapterIds, ...physSubject.chapterIds, ...mathSubject.chapterIds].forEach((chId) => {
  const result = canAccessBmsChapter(proUser, chId);
  if (result.allowed) {
    proAllowedCount++;
  }
});
assert(proAllowedCount === 35, `All 35 BMS chapters must be accessible to Pro user (found: ${proAllowedCount})`);

// --- TEST 6: Non-BMS Sections Never Restricted ---
console.log("\n--- 6. Non-BMS Sections Exemption (TV, KFF, SEK, MF) ---");
const nonBmsChapters = [
  "tv-scipass",
  "kff-fig-l1",
  "kff-num-arith",
  "kff-wf-basic",
  "kff-mem-pass",
  "kff-imp-syll",
  "sek-rec-face",
  "sek-reg-stress",
  "sek-dec-ethics",
  "mf-wire-tech",
  "mf-mirror-symm",
];

nonBmsChapters.forEach((chId) => {
  const result = canAccessBmsChapter(freeUser, chId);
  assert(result.allowed === true && result.reason === "not_bms", `Non-BMS chapter ${chId} must NEVER be restricted for freeUser`);
  assert(isBmsChapter(chId) === false, `${chId} must return isBmsChapter === false`);
});

// --- TEST 7: Question-Level Access Guard ---
console.log("\n--- 7. Question-Level Access Guard ---");
const qFree = { id: "bio-01-s1-1", chapterId: "bio-01-zelle" };
const qLocked = { id: "bio-02-s1-1", chapterId: "bio-02-koerper" };
const qKff = { id: "kff-zf-001", chapterId: "kff-num-arith" };

assert(canAccessQuestion(freeUser, qFree) === true, "Question in free chapter must be accessible to freeUser");
assert(canAccessQuestion(freeUser, qLocked) === false, "Question in locked chapter must NOT be accessible to freeUser");
assert(canAccessQuestion(proUser, qLocked) === true, "Question in locked chapter must be accessible to proUser");
assert(canAccessQuestion(freeUser, qKff) === true, "KFF Question must be accessible to freeUser");

// --- TEST 8: Alias & Legacy Resolution ---
console.log("\n--- 8. Legacy Alias Resolution ---");
assert(resolveChapterId("bio-cell") === "bio-01-zelle", "bio-cell must resolve to bio-01-zelle");
assert(canAccessBmsChapter(freeUser, "bio-cell").allowed === true, "Aliased free chapter bio-cell must be allowed");
assert(resolveChapterId("chem-atom") === "chem-01-atombau", "chem-atom must resolve to chem-01-atombau");
assert(canAccessBmsChapter(freeUser, "chem-atom").allowed === true, "Aliased free chapter chem-atom must be allowed");
assert(resolveChapterId("chem-bonds") === "chem-04-bindungen", "chem-bonds must resolve to chem-04-bindungen");
assert(canAccessBmsChapter(freeUser, "chem-bonds").allowed === false, "Aliased locked chapter chem-bonds must be blocked");

// --- TEST 9: Pro Expiration Logic ---
console.log("\n--- 9. Pro Expiration Verification ---");
const expiredProUser: UserProfile = sanitizeUserProfile({
  name: "Expired Student",
  isPro: true,
  subscriptionTier: "premium",
  proExpiresAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // expired yesterday
});

assert(isUserPro(expiredProUser) === false, "Expired Pro user must NOT have Pro access");
assert(canAccessBmsChapter(expiredProUser, "bio-02-koerper").allowed === false, "Expired Pro user must be blocked from locked chapters");

const activeProUser: UserProfile = sanitizeUserProfile({
  name: "Active Student",
  isPro: true,
  subscriptionTier: "premium",
  proExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(), // 30 days remaining
});
assert(isUserPro(activeProUser) === true, "Active Pro user with future expiry must have Pro access");
assert(canAccessBmsChapter(activeProUser, "bio-02-koerper").allowed === true, "Active Pro user must have access to locked chapters");

// --- TEST 10: Catalog Summary Utility ---
console.log("\n--- 10. Catalog Summary Output ---");
const summary = getBmsCatalogSummary();
assert(summary.totalBmsChapters === 35, `Summary totalBmsChapters must be 35 (got ${summary.totalBmsChapters})`);
assert(summary.freeBmsChapters === 4, `Summary freeBmsChapters must be 4 (got ${summary.freeBmsChapters})`);
assert(summary.lockedBmsChapters === 31, `Summary lockedBmsChapters must be 31 (got ${summary.lockedBmsChapters})`);
assert(summary.bySubject.bio.free === 1 && summary.bySubject.bio.locked === 8, "Bio summary must have 1 free, 8 locked");
assert(summary.bySubject.chem.free === 1 && summary.bySubject.chem.locked === 12, "Chem summary must have 1 free, 12 locked");
assert(summary.bySubject.phys.free === 1 && summary.bySubject.phys.locked === 6, "Phys summary must have 1 free, 6 locked");
assert(summary.bySubject.math.free === 1 && summary.bySubject.math.locked === 5, "Math summary must have 1 free, 5 locked");

// --- TEST 11: TV (Textverständnis) Simulation Access Control ---
console.log("\n--- 11. TV Simulation Locking (Sim 1 Free, Sims 2–5 Locked) ---");
assert(canAccessTvSimulation(freeUser, 1).allowed === true, "TV Simulation 1 MUST be accessible to freeUser");
assert(canAccessTvSimulation(freeUser, "tv-scipass-set-1").allowed === true, "tv-scipass-set-1 MUST be accessible to freeUser");
assert(canAccessTvSimulation(freeUser, 2).allowed === false, "TV Simulation 2 MUST be blocked for freeUser");
assert(canAccessTvSimulation(freeUser, 3).allowed === false, "TV Simulation 3 MUST be blocked for freeUser");
assert(canAccessTvSimulation(freeUser, 4).allowed === false, "TV Simulation 4 MUST be blocked for freeUser");
assert(canAccessTvSimulation(freeUser, 5).allowed === false, "TV Simulation 5 MUST be blocked for freeUser");

// Pro user access to all 5 TV simulations
for (let sim = 1; sim <= 5; sim++) {
  assert(canAccessTvSimulation(proUser, sim).allowed === true, `TV Simulation ${sim} MUST be accessible to proUser`);
}

// Question level checks for TV
const qTvSim1 = { id: "tv-s1-01", chapterId: "tv-scipass", section: "TV", setOrder: 1 };
const qTvSim2 = { id: "tv-s2-01", chapterId: "tv-scipass", section: "TV", setOrder: 2 };
assert(canAccessQuestion(freeUser, qTvSim1) === true, "TV Sim 1 question must be accessible to freeUser");
assert(canAccessQuestion(freeUser, qTvSim2) === false, "TV Sim 2 question must NOT be accessible to freeUser");
assert(canAccessQuestion(proUser, qTvSim2) === true, "TV Sim 2 question must be accessible to proUser");

// --- TEST 12: KFF (Kognitive Fähigkeiten und Fertigkeiten) Access Control ---
console.log("\n--- 12. KFF Simulation Locking (Sim 1 Free, Sims 2–5 Locked for FZ, ZF, WF, GM, IE) ---");
const kffSubtests = [
  { id: "kff-fig-l1", name: "Figuren zusammensetzen (FZ)" },
  { id: "kff-num-arith", name: "Zahlenfolgen (ZF)" },
  { id: "kff-wf-basic", name: "Wortflüssigkeit (WF)" },
  { id: "kff-mem-pass", name: "Gedächtnis & Merkfähigkeit (GM)" },
  { id: "kff-imp-syll", name: "Implikationen erkennen (IE)" },
];

for (const sub of kffSubtests) {
  assert(isKffChapter(sub.id) === true, `${sub.id} must be identified as KFF chapter`);

  // Simulation 1 must be accessible for freeUser
  assert(
    canAccessKffSimulation(freeUser, sub.id, 1).allowed === true,
    `${sub.name} Simulation 1 MUST be accessible to freeUser (Gratis-Simulation)`
  );
  assert(
    canAccessKffSimulation(freeUser, sub.id, `${sub.id}-set-1`).allowed === true,
    `${sub.name} set-1 ID string MUST be accessible to freeUser`
  );

  // Simulations 2 through 5 must be locked for freeUser
  for (let sim = 2; sim <= 5; sim++) {
    const check = canAccessKffSimulation(freeUser, sub.id, sim);
    assert(
      check.allowed === false,
      `${sub.name} Simulation ${sim} MUST be blocked for freeUser (Vollzugang required)`
    );
    assert(check.reason === "pro_required", `${sub.name} reason must be pro_required`);
  }

  // Simulations 1 through 5 must be completely accessible for proUser
  for (let sim = 1; sim <= 5; sim++) {
    const check = canAccessKffSimulation(proUser, sub.id, sim);
    assert(
      check.allowed === true,
      `${sub.name} Simulation ${sim} MUST be accessible to proUser`
    );
  }

  // Question-level access check
  const qKff1 = { id: `${sub.id}-q1`, chapterId: sub.id, section: "KFF", setOrder: 1 };
  const qKff2 = { id: `${sub.id}-q2`, chapterId: sub.id, section: "KFF", setOrder: 2 };
  assert(canAccessQuestion(freeUser, qKff1) === true, `${sub.name} Sim 1 question must be accessible to freeUser`);
  assert(canAccessQuestion(freeUser, qKff2) === false, `${sub.name} Sim 2 question must NOT be accessible to freeUser`);
  assert(canAccessQuestion(proUser, qKff2) === true, `${sub.name} Sim 2 question must be accessible to proUser`);
}

// --- TEST 13: SEK (Sozial-emotionale Kompetenzen) Access Control ---
console.log("\n--- 13. SEK Simulation Locking (Sim 1 Free, Sims 2–5 Locked for EE, ER, SE) ---");
const sekSubtests = [
  { id: "sek-rec-face", name: "Emotionen erkennen (EE)" },
  { id: "sek-reg-stress", name: "Emotionen regulieren (ER)" },
  { id: "sek-dec-ethics", name: "Soziales Entscheiden (SE)" },
];

for (const sub of sekSubtests) {
  assert(isSekChapter(sub.id) === true, `${sub.id} must be identified as SEK chapter`);

  // Simulation 1 must be accessible for freeUser
  assert(
    canAccessSekSimulation(freeUser, sub.id, 1).allowed === true,
    `${sub.name} Simulation 1 MUST be accessible to freeUser (Gratis-Simulation)`
  );
  assert(
    canAccessSekSimulation(freeUser, sub.id, `${sub.id}-set-1`).allowed === true,
    `${sub.name} set-1 ID string MUST be accessible to freeUser`
  );

  // Simulations 2 through 5 must be locked for freeUser
  for (let sim = 2; sim <= 5; sim++) {
    const check = canAccessSekSimulation(freeUser, sub.id, sim);
    assert(
      check.allowed === false,
      `${sub.name} Simulation ${sim} MUST be blocked for freeUser (Vollzugang required)`
    );
    assert(check.reason === "pro_required", `${sub.name} reason must be pro_required`);
  }

  // Simulations 1 through 5 must be completely accessible for proUser
  for (let sim = 1; sim <= 5; sim++) {
    const check = canAccessSekSimulation(proUser, sub.id, sim);
    assert(
      check.allowed === true,
      `${sub.name} Simulation ${sim} MUST be accessible to proUser`
    );
  }

  // Question-level access check
  const qSek1 = { id: `${sub.id}-q1`, chapterId: sub.id, section: "SEK", setOrder: 1 };
  const qSek2 = { id: `${sub.id}-q2`, chapterId: sub.id, section: "SEK", setOrder: 2 };
  assert(canAccessQuestion(freeUser, qSek1) === true, `${sub.name} Sim 1 question must be accessible to freeUser`);
  assert(canAccessQuestion(freeUser, qSek2) === false, `${sub.name} Sim 2 question must NOT be accessible to freeUser`);
  assert(canAccessQuestion(proUser, qSek2) === true, `${sub.name} Sim 2 question must be accessible to proUser`);
}

// --- TEST 14: Generalproben & Mock Exams Access Control ---
console.log("\n--- 14. Generalproben & Full Mock Exams Access Control ---");
assert(FREE_GENERALPROBE_ID === "mock-full-medat-h-1", "FREE_GENERALPROBE_ID must be mock-full-medat-h-1");
assert(isGeneralprobe("mock-full-medat-h-1") === true, "mock-full-medat-h-1 is Generalprobe");
assert(isGeneralprobe("mock-full-medat-h-2") === true, "mock-full-medat-h-2 is Generalprobe");
assert(isGeneralprobe("mock-full-medat-z-1") === true, "mock-full-medat-z-1 is Generalprobe");
assert(isGeneralprobe("mock-bms-diagnostic") === true, "mock-bms-diagnostic is Generalprobe");
assert(isGeneralprobe("mock-pyq-2025") === true, "mock-pyq-2025 is Generalprobe");
assert(isGeneralprobe("qm-bms-bio") === true, "qm-bms-bio is Quick Mock");
assert(isGeneralprobe("qm-bms-chem") === true, "qm-bms-chem is Quick Mock");

// Gratis-Generalprobe vs Vollzugang
assert(isGeneralprobeFree("mock-full-medat-h-1") === true, "mock-full-medat-h-1 MUST be free");
assert(isGeneralprobeFree("qm-bms-bio") === true, "qm-bms-bio MUST be free");
assert(isGeneralprobeFree("mock-full-medat-h-2") === false, "mock-full-medat-h-2 MUST be locked");
assert(isGeneralprobeFree("mock-full-medat-z-1") === false, "mock-full-medat-z-1 MUST be locked");
assert(isGeneralprobeFree("mock-bms-diagnostic") === false, "mock-bms-diagnostic MUST be locked");
assert(isGeneralprobeFree("mock-kff-full") === false, "mock-kff-full MUST be locked");
assert(isGeneralprobeFree("mock-tv-sek-full") === false, "mock-tv-sek-full MUST be locked");
assert(isGeneralprobeFree("mock-pyq-2025") === false, "mock-pyq-2025 MUST be locked");
assert(isGeneralprobeFree("mock-pyq-2024") === false, "mock-pyq-2024 MUST be locked");
assert(isGeneralprobeFree("qm-bms-chem") === false, "qm-bms-chem MUST be locked");

// Free User access
const gpFreeResult = canAccessGeneralprobe(freeUser, "mock-full-medat-h-1");
assert(gpFreeResult.allowed === true && gpFreeResult.reason === "free_preview", "FreeUser can access mock-full-medat-h-1");

const gpLockedResult1 = canAccessGeneralprobe(freeUser, "mock-full-medat-h-2");
assert(gpLockedResult1.allowed === false && gpLockedResult1.reason === "pro_required", "FreeUser blocked from mock-full-medat-h-2");

const gpLockedResult2 = canAccessGeneralprobe(freeUser, "mock-full-medat-z-1");
assert(gpLockedResult2.allowed === false && gpLockedResult2.reason === "pro_required", "FreeUser blocked from mock-full-medat-z-1");

const gpLockedResult3 = canAccessGeneralprobe(freeUser, "mock-bms-diagnostic");
assert(gpLockedResult3.allowed === false && gpLockedResult3.reason === "pro_required", "FreeUser blocked from mock-bms-diagnostic");

const gpLockedResult4 = canAccessGeneralprobe(freeUser, "mock-pyq-2025");
assert(gpLockedResult4.allowed === false && gpLockedResult4.reason === "pro_required", "FreeUser blocked from mock-pyq-2025");

const qmLockedResult = canAccessGeneralprobe(freeUser, "qm-bms-chem");
assert(qmLockedResult.allowed === false && qmLockedResult.reason === "pro_required", "FreeUser blocked from qm-bms-chem");

// Pro User access
const gpProResult1 = canAccessGeneralprobe(proUser, "mock-full-medat-h-1");
assert(gpProResult1.allowed === true, "ProUser can access mock-full-medat-h-1");

const gpProResult2 = canAccessGeneralprobe(proUser, "mock-full-medat-h-2");
assert(gpProResult2.allowed === true && gpProResult2.reason === "pro_member", "ProUser can access mock-full-medat-h-2");

const gpProResult3 = canAccessGeneralprobe(proUser, "mock-full-medat-z-1");
assert(gpProResult3.allowed === true && gpProResult3.reason === "pro_member", "ProUser can access mock-full-medat-z-1");

const gpProResult4 = canAccessGeneralprobe(proUser, "mock-bms-diagnostic");
assert(gpProResult4.allowed === true && gpProResult4.reason === "pro_member", "ProUser can access mock-bms-diagnostic");

const qmProResult = canAccessGeneralprobe(proUser, "qm-bms-chem");
assert(qmProResult.allowed === true && qmProResult.reason === "pro_member", "ProUser can access qm-bms-chem");

// Question-level access check for Generalproben
const qGp1 = { id: "gp1-q1", chapterId: "mock-full-medat-h-1", section: "MOCK" };
const qGp2 = { id: "gp2-q1", chapterId: "mock-full-medat-h-2", section: "MOCK" };
assert(canAccessQuestion(freeUser, qGp1) === true, "Generalprobe #1 question accessible to freeUser");
assert(canAccessQuestion(freeUser, qGp2) === false, "Generalprobe #2 question blocked for freeUser");
assert(canAccessQuestion(proUser, qGp2) === true, "Generalprobe #2 question accessible to proUser");

console.log("\n=======================================================");
console.log("  🎉 ALL 14 VERIFICATION CATEGORIES PASSED PERFECTLY!");
console.log("=======================================================\n");
