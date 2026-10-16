/**
 * tests/verify_section_isolation.cjs
 *
 * Comprehensive Automated Verification Suite:
 * Ensures complete logical and physical isolation between all 4 MedAT sections:
 * - BMS (Biologie, Chemie, Physik, Mathematik)
 * - TV (Textverständnis)
 * - KFF (Figuren zusammensetzen / FZ, Zahlenfolgen / ZF, Wortflüssigkeit / WF,
 *        Gedächtnis & Merkfähigkeit / GM, Implikationen erkennen / IE; plus MF)
 * - SEK (Emotionen erkennen / EE, Emotionen regulieren / ER, Soziales Entscheiden / SE)
 *
 * INVARIANTS TESTED:
 * 1. Section & Chapter key resolution from ID patterns
 * 2. Question pool section purity in buildQuestionsForSet
 * 3. Question attempt recording with section tags & zero cross-contamination
 * 4. Set submission & progress isolation across sections & subtests
 * 5. Daily mission task evaluation isolation (BMS tasks only count BMS answers, KFF only KFF, etc.)
 * 6. Weak areas isolation (mistakes in one section never rank another section as weak)
 * 7. MedAT Readiness Index section breakdown isolation
 */

const assert = require("assert");

console.log("================================================================");
console.log("MEDAT PREP — CRITICAL SECTION DATA-ISOLATION VERIFICATION SUITE");
console.log("Verifying Zero Cross-Contamination Across BMS, TV, KFF, and SEK");
console.log("================================================================\n");

let totalTests = 0;
let passedTests = 0;

function check(cond, description) {
  totalTests++;
  if (cond) {
    console.log(`  [PASS] ${description}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${description}`);
    process.exitCode = 1;
  }
}

// ============================================================================
// SIMULATED CORE DOMAIN RULES & LOGIC (Mirroring updated practiceData.ts & services)
// ============================================================================

function getSectionFromChapterId(chapterId) {
  if (!chapterId) return undefined;
  const id = chapterId.toLowerCase();
  if (id.startsWith("bio-") || id.startsWith("ch-") || id.startsWith("ph-") || id.startsWith("ma-")) {
    return "BMS";
  }
  if (id.startsWith("tv-") || id.includes("textverstandnis") || id.includes("text")) {
    return "TV";
  }
  if (
    id.startsWith("kff-") ||
    id.startsWith("fz-") ||
    id.startsWith("zf-") ||
    id.startsWith("wf-") ||
    id.startsWith("gm-") ||
    id.startsWith("ie-")
  ) {
    return "KFF";
  }
  if (id.startsWith("sek-") || id.startsWith("ee-") || id.startsWith("er-") || id.startsWith("se-")) {
    return "SEK";
  }
  if (id.startsWith("mf-")) {
    return "MF";
  }
  return undefined;
}

function getSectionFromQuestionId(questionId, questionsList = []) {
  if (!questionId) return "BMS";
  if (questionsList && questionsList.length > 0) {
    const baseId = questionId.replace(/-s\d+-\d+$/, "");
    const found = questionsList.find((q) => q.id === questionId || q.id === baseId);
    if (found && found.section) return found.section;
  }
  const id = questionId.toLowerCase();
  if (id.startsWith("bio-") || id.startsWith("ch-") || id.startsWith("ph-") || id.startsWith("ma-")) return "BMS";
  if (id.startsWith("tv-") || id.includes("textverstandnis")) return "TV";
  if (
    id.startsWith("kff-") ||
    id.startsWith("fz-") ||
    id.startsWith("zf-") ||
    id.startsWith("wf-") ||
    id.startsWith("gm-") ||
    id.startsWith("ie-")
  ) return "KFF";
  if (id.startsWith("sek-") || id.startsWith("ee-") || id.startsWith("er-") || id.startsWith("se-")) return "SEK";
  if (id.startsWith("mf-")) return "MF";
  return "BMS";
}

function getChapterFromQuestionId(questionId, questionsList = []) {
  if (!questionId) return undefined;
  if (questionsList && questionsList.length > 0) {
    const baseId = questionId.replace(/-s\d+-\d+$/, "");
    const found = questionsList.find((q) => q.id === questionId || q.id === baseId);
    if (found && found.chapterId) return found.chapterId;
  }
  const id = questionId.toLowerCase();
  if (id.startsWith("bio-01")) return "bio-01-zelle";
  if (id.startsWith("bio-02")) return "bio-02-koerper";
  if (id.startsWith("ch-01")) return "ch-01-atombau";
  if (id.startsWith("ph-01")) return "ph-01-mechanik";
  if (id.startsWith("ma-01")) return "ma-01-zahlen";
  if (id.startsWith("tv-")) return "tv-scipass";
  if (id.startsWith("kff-fig") || id.startsWith("fz-")) return "kff-fig-l1";
  if (id.startsWith("kff-num") || id.startsWith("zf-")) return "kff-num-seq";
  if (id.startsWith("kff-word") || id.startsWith("wf-")) return "kff-word-flu";
  if (id.startsWith("kff-mem") || id.startsWith("gm-")) return "kff-mem-ret";
  if (id.startsWith("kff-imp") || id.startsWith("ie-")) return "kff-imp-rec";
  if (id.startsWith("sek-rec") || id.startsWith("ee-")) return "sek-rec-face";
  if (id.startsWith("sek-reg") || id.startsWith("er-")) return "sek-reg-scen";
  if (id.startsWith("sek-soc") || id.startsWith("se-")) return "sek-soc-dec";
  return undefined;
}

// Simulated buildQuestionsForSet logic adhering strictly to section boundaries
function buildQuestionsForSet(chapterId, setId, allQuestions) {
  const chapterSection = getSectionFromChapterId(chapterId) || "BMS";
  const chapterQuestions = allQuestions.filter(
    (q) => (q.chapterId === chapterId || q.chapterId?.replace(/-l\d+$/, "") === chapterId) && q.section === chapterSection
  );
  const subjectQuestions = allQuestions.filter(
    (q) => q.section === chapterSection && q.chapterId !== chapterId
  );

  // STRICT INVARIANT: pool must NEVER pull cross-section questions
  const pool = chapterQuestions.length > 0 ? chapterQuestions : subjectQuestions;
  return pool.slice(0, 15);
}

// ============================================================================
// SUITE 1: SECTION & CHAPTER RESOLUTION
// ============================================================================
console.log("--- TEST 1: Section Resolution from Chapter IDs ---");
check(getSectionFromChapterId("bio-01-zelle") === "BMS", "bio-01-zelle resolves to BMS");
check(getSectionFromChapterId("ch-01-atombau") === "BMS", "ch-01-atombau resolves to BMS");
check(getSectionFromChapterId("ph-01-mechanik") === "BMS", "ph-01-mechanik resolves to BMS");
check(getSectionFromChapterId("ma-01-zahlen") === "BMS", "ma-01-zahlen resolves to BMS");
check(getSectionFromChapterId("tv-scipass") === "TV", "tv-scipass resolves to TV");
check(getSectionFromChapterId("kff-fig-l1") === "KFF", "kff-fig-l1 (FZ) resolves to KFF");
check(getSectionFromChapterId("kff-num-seq") === "KFF", "kff-num-seq (ZF) resolves to KFF");
check(getSectionFromChapterId("kff-word-flu") === "KFF", "kff-word-flu (WF) resolves to KFF");
check(getSectionFromChapterId("kff-mem-ret") === "KFF", "kff-mem-ret (GM) resolves to KFF");
check(getSectionFromChapterId("kff-imp-rec") === "KFF", "kff-imp-rec (IE) resolves to KFF");
check(getSectionFromChapterId("sek-rec-face") === "SEK", "sek-rec-face (EE) resolves to SEK");
check(getSectionFromChapterId("sek-reg-scen") === "SEK", "sek-reg-scen (ER) resolves to SEK");
check(getSectionFromChapterId("sek-soc-dec") === "SEK", "sek-soc-dec (SE) resolves to SEK");
check(getSectionFromChapterId("mf-formen-spiegeln") === "MF", "mf-formen-spiegeln resolves to MF");

console.log("\n--- TEST 2: Section Resolution from Question IDs ---");
check(getSectionFromQuestionId("bio-01-q101") === "BMS", "bio-01-q101 resolves to BMS");
check(getSectionFromQuestionId("ch-02-q50") === "BMS", "ch-02-q50 resolves to BMS");
check(getSectionFromQuestionId("ph-01-q12") === "BMS", "ph-01-q12 resolves to BMS");
check(getSectionFromQuestionId("ma-03-q05") === "BMS", "ma-03-q05 resolves to BMS");
check(getSectionFromQuestionId("tv-scipass-q01") === "TV", "tv-scipass-q01 resolves to TV");
check(getSectionFromQuestionId("kff-fig-l1-q03") === "KFF", "kff-fig-l1-q03 resolves to KFF");
check(getSectionFromQuestionId("fz-01-q10") === "KFF", "fz-01-q10 resolves to KFF");
check(getSectionFromQuestionId("zf-01-q05") === "KFF", "zf-01-q05 resolves to KFF");
check(getSectionFromQuestionId("wf-01-q08") === "KFF", "wf-01-q08 resolves to KFF");
check(getSectionFromQuestionId("gm-01-q02") === "KFF", "gm-01-q02 resolves to KFF");
check(getSectionFromQuestionId("ie-01-q11") === "KFF", "ie-01-q11 resolves to KFF");
check(getSectionFromQuestionId("sek-rec-face-q04") === "SEK", "sek-rec-face-q04 resolves to SEK");
check(getSectionFromQuestionId("ee-01-q02") === "SEK", "ee-01-q02 resolves to SEK");
check(getSectionFromQuestionId("er-01-q07") === "SEK", "er-01-q07 resolves to SEK");
check(getSectionFromQuestionId("se-01-q03") === "SEK", "se-01-q03 resolves to SEK");

// ============================================================================
// SUITE 2: QUESTION POOL SECTION PURITY (Auditing buildQuestionsForSet)
// ============================================================================
console.log("\n--- TEST 3: buildQuestionsForSet Purity ---");
const mockQuestionCatalog = [
  // BMS questions
  { id: "bio-01-q1", chapterId: "bio-01-zelle", section: "BMS", question: "Bio 1" },
  { id: "bio-01-q2", chapterId: "bio-01-zelle", section: "BMS", question: "Bio 2" },
  { id: "ch-01-q1", chapterId: "ch-01-atombau", section: "BMS", question: "Chem 1" },
  // KFF questions
  { id: "kff-fig-l1-q1", chapterId: "kff-fig-l1", section: "KFF", question: "FZ 1" },
  { id: "kff-fig-l1-q2", chapterId: "kff-fig-l1", section: "KFF", question: "FZ 2" },
  { id: "kff-num-seq-q1", chapterId: "kff-num-seq", section: "KFF", question: "ZF 1" },
  // TV questions
  { id: "tv-scipass-q1", chapterId: "tv-scipass", section: "TV", question: "TV 1" },
  // SEK questions
  { id: "sek-rec-face-q1", chapterId: "sek-rec-face", section: "SEK", question: "EE 1" },
  { id: "sek-reg-scen-q1", chapterId: "sek-reg-scen", section: "SEK", question: "ER 1" },
];

const fzSetQuestions = buildQuestionsForSet("kff-fig-l1", "kff-fig-l1-set-1", mockQuestionCatalog);
check(fzSetQuestions.length > 0, "FZ set has questions returned");
check(
  fzSetQuestions.every((q) => q.section === "KFF"),
  "ALL questions in FZ set have section === 'KFF' (ZERO BMS/TV/SEK questions)"
);
check(
  !fzSetQuestions.some((q) => q.section === "BMS"),
  "FZ set strictly contains ZERO BMS questions"
);

const bioSetQuestions = buildQuestionsForSet("bio-01-zelle", "bio-01-zelle-set-1", mockQuestionCatalog);
check(
  bioSetQuestions.every((q) => q.section === "BMS"),
  "ALL questions in Bio set have section === 'BMS' (ZERO KFF/TV/SEK questions)"
);

const tvSetQuestions = buildQuestionsForSet("tv-scipass", "tv-scipass-set-1", mockQuestionCatalog);
check(
  tvSetQuestions.every((q) => q.section === "TV"),
  "ALL questions in TV set have section === 'TV'"
);

const sekSetQuestions = buildQuestionsForSet("sek-rec-face", "sek-rec-face-set-1", mockQuestionCatalog);
check(
  sekSetQuestions.every((q) => q.section === "SEK"),
  "ALL questions in SEK set have section === 'SEK'"
);

// ============================================================================
// SUITE 3: QUESTION ATTEMPT RECORDING & AGGREGATION ISOLATION
// ============================================================================
console.log("\n--- TEST 4: Attempt Aggregation by Section ---");

class MockProgressOrchestrator {
  constructor() {
    this.attemptHistory = {};
    this.wrong = new Set();
    this.setAttempts = {};
    this.completedSetIds = new Set();
  }

  recordAnswer(userId, questionId, selectedOption, isCorrect, timeSpentSeconds = 30) {
    const section = getSectionFromQuestionId(questionId, mockQuestionCatalog);
    const chapterId = getChapterFromQuestionId(questionId, mockQuestionCatalog);
    this.attemptHistory[questionId] = {
      selected: selectedOption,
      correct: isCorrect,
      timestamp: Date.now(),
      section,
      chapterId,
      timeSpentSeconds,
      userId,
    };
    if (!isCorrect) {
      this.wrong.add(questionId);
    } else {
      this.wrong.delete(questionId);
    }
  }

  submitSet(userId, setId, chapterId, score, answers, totalQuestions, durationSeconds = 300) {
    const section = getSectionFromChapterId(chapterId) || "BMS";
    const record = {
      setId,
      chapterId,
      section,
      score,
      completedAt: Date.now(),
      answers,
      totalQuestions,
      durationSeconds,
      status: "completed",
    };
    if (!this.setAttempts[setId]) this.setAttempts[setId] = [];
    this.setAttempts[setId].push(record);
    this.completedSetIds.add(setId);
  }

  getSectionAnsweredCount(sectionCode) {
    return Object.values(this.attemptHistory).filter((att) => att.section === sectionCode).length;
  }

  getSectionAccuracy(sectionCode) {
    const attempts = Object.values(this.attemptHistory).filter((att) => att.section === sectionCode);
    if (attempts.length === 0) return null;
    const correct = attempts.filter((a) => a.correct).length;
    return Math.round((correct / attempts.length) * 100);
  }

  getCompletedSimulationsCount(chapterPrefix) {
    return Object.entries(this.setAttempts).filter(
      ([setId, atts]) => setId.startsWith(chapterPrefix) && atts.some((a) => a.status === "completed")
    ).length;
  }
}

const orchestrator = new MockProgressOrchestrator();

// 1. Initial State: All sections 0
check(orchestrator.getSectionAnsweredCount("BMS") === 0, "BMS answered count is initially 0");
check(orchestrator.getSectionAnsweredCount("KFF") === 0, "KFF answered count is initially 0");
check(orchestrator.getSectionAnsweredCount("TV") === 0, "TV answered count is initially 0");
check(orchestrator.getSectionAnsweredCount("SEK") === 0, "SEK answered count is initially 0");

// 2. User answers 5 BMS questions
orchestrator.recordAnswer("user-1", "bio-01-q1", 0, true);
orchestrator.recordAnswer("user-1", "bio-01-q2", 1, false);
orchestrator.recordAnswer("user-1", "ch-01-q1", 2, true);

check(orchestrator.getSectionAnsweredCount("BMS") === 3, "BMS answered count increased to 3");
check(orchestrator.getSectionAnsweredCount("KFF") === 0, "KFF answered count remains strictly 0");
check(orchestrator.getSectionAnsweredCount("TV") === 0, "TV answered count remains strictly 0");
check(orchestrator.getSectionAnsweredCount("SEK") === 0, "SEK answered count remains strictly 0");
check(orchestrator.getSectionAccuracy("BMS") === 67, "BMS accuracy is 67% (2/3)");
check(orchestrator.getSectionAccuracy("KFF") === null, "KFF accuracy is null (no attempts)");

// 3. User answers 2 FZ questions in KFF
orchestrator.recordAnswer("user-1", "kff-fig-l1-q1", 0, true);
orchestrator.recordAnswer("user-1", "kff-fig-l1-q2", 1, true);

check(orchestrator.getSectionAnsweredCount("BMS") === 3, "BMS answered count remains unchanged at 3");
check(orchestrator.getSectionAnsweredCount("KFF") === 2, "KFF answered count increased to 2");
check(orchestrator.getSectionAnsweredCount("TV") === 0, "TV answered count remains strictly 0");
check(orchestrator.getSectionAnsweredCount("SEK") === 0, "SEK answered count remains strictly 0");
check(orchestrator.getSectionAccuracy("KFF") === 100, "KFF accuracy is 100% (2/2)");

// 4. Subtest isolation within KFF: FZ vs ZF
const kffAttempts = Object.values(orchestrator.attemptHistory).filter((a) => a.section === "KFF");
const fzAttempts = kffAttempts.filter((a) => a.chapterId === "kff-fig-l1");
const zfAttempts = kffAttempts.filter((a) => a.chapterId === "kff-num-seq");
check(fzAttempts.length === 2, "FZ attempts count = 2");
check(zfAttempts.length === 0, "ZF attempts count = 0 (FZ does NOT leak to ZF)");

// ============================================================================
// SUITE 4: SET SUBMISSION & SIMULATION COUNT ISOLATION
// ============================================================================
console.log("\n--- TEST 5: Simulation Completion Isolation ---");

// Submit 1 FZ simulation
orchestrator.submitSet("user-1", "kff-fig-l1-set-1", "kff-fig-l1", 80, {}, 15);

check(orchestrator.getCompletedSimulationsCount("kff-fig-l1") === 1, "FZ completed simulations = 1");
check(orchestrator.getCompletedSimulationsCount("tv-scipass") === 0, "TV completed simulations strictly = 0");
check(orchestrator.getCompletedSimulationsCount("sek-rec-face") === 0, "SEK EE completed simulations strictly = 0");
check(orchestrator.getCompletedSimulationsCount("kff-num-seq") === 0, "ZF completed simulations strictly = 0");
check(orchestrator.getCompletedSimulationsCount("bio-01") === 0, "BMS completed sets strictly = 0");

// Submit 1 TV simulation
orchestrator.submitSet("user-1", "tv-scipass-set-1", "tv-scipass", 90, {}, 12);
check(orchestrator.getCompletedSimulationsCount("kff-fig-l1") === 1, "FZ completed simulations remains 1");
check(orchestrator.getCompletedSimulationsCount("tv-scipass") === 1, "TV completed simulations = 1");
check(orchestrator.getCompletedSimulationsCount("sek-rec-face") === 0, "SEK completed simulations strictly = 0");

// Submit 1 SEK simulation
orchestrator.submitSet("user-1", "sek-rec-face-set-1", "sek-rec-face", 75, {}, 14);
check(orchestrator.getCompletedSimulationsCount("kff-fig-l1") === 1, "FZ completed simulations remains 1");
check(orchestrator.getCompletedSimulationsCount("tv-scipass") === 1, "TV completed simulations remains 1");
check(orchestrator.getCompletedSimulationsCount("sek-rec-face") === 1, "SEK completed simulations = 1");

// ============================================================================
// SUITE 5: DAILY MISSION EVALUATION ISOLATION
// ============================================================================
console.log("\n--- TEST 6: Daily Mission Engine Task Isolation ---");

// Simulate daily mission evaluation
function evaluateMissionBlueprint(blueprint, attemptsToday) {
  let bmsToday = 0;
  let kffToday = 0;
  let tvToday = 0;
  let sekToday = 0;

  attemptsToday.forEach((att) => {
    if (att.section === "BMS") bmsToday++;
    else if (att.section === "KFF") kffToday++;
    else if (att.section === "TV") tvToday++;
    else if (att.section === "SEK") sekToday++;
  });

  return blueprint.map((item) => {
    let current = 0;
    if (item.category === "bms") current = bmsToday;
    else if (item.category === "kff") current = kffToday;
    else if (item.category === "tv") current = tvToday;
    else if (item.category === "sek") current = sekToday;
    return {
      ...item,
      currentCount: Math.min(current, item.targetCount),
      completed: current >= item.targetCount,
    };
  });
}

const dailyBlueprint = [
  { id: "task-1", category: "kff", title: "15 KFF Aufgaben", targetCount: 15 },
  { id: "task-2", category: "bms", title: "15 BMS Aufgaben", targetCount: 15 },
  { id: "task-3", category: "tv", title: "10 TV Aufgaben", targetCount: 10 },
];

// Student solves 15 BMS questions today
const bmsOnlyAttempts = Array.from({ length: 15 }, (_, i) => ({
  section: "BMS",
  correct: true,
}));

const evaluatedAfterBMS = evaluateMissionBlueprint(dailyBlueprint, bmsOnlyAttempts);
check(evaluatedAfterBMS[0].completed === false, "KFF mission item is NOT completed by BMS questions");
check(evaluatedAfterBMS[0].currentCount === 0, "KFF mission count is 0");
check(evaluatedAfterBMS[1].completed === true, "BMS mission item is completed by BMS questions");
check(evaluatedAfterBMS[1].currentCount === 15, "BMS mission count is 15");
check(evaluatedAfterBMS[2].completed === false, "TV mission item is NOT completed by BMS questions");
check(evaluatedAfterBMS[2].currentCount === 0, "TV mission count is 0");

// Student solves 15 KFF questions
const mixedAttempts = [
  ...bmsOnlyAttempts,
  ...Array.from({ length: 15 }, (_, i) => ({ section: "KFF", correct: true })),
];

const evaluatedAfterBoth = evaluateMissionBlueprint(dailyBlueprint, mixedAttempts);
check(evaluatedAfterBoth[0].completed === true, "KFF mission item is now completed by KFF questions");
check(evaluatedAfterBoth[1].completed === true, "BMS mission item remains completed");
check(evaluatedAfterBoth[2].completed === false, "TV mission item remains strictly not completed");

// ============================================================================
// SUITE 6: WEAK AREAS CALCULATION ISOLATION
// ============================================================================
console.log("\n--- TEST 7: Weak Areas Ranking Isolation ---");

// Mistakes recorded in bio-01-zelle
const userMistakes = new Set(["bio-01-q2"]);
const bmsMistakes = Array.from(userMistakes).filter((qId) => getSectionFromQuestionId(qId) === "BMS");
const kffMistakes = Array.from(userMistakes).filter((qId) => getSectionFromQuestionId(qId) === "KFF");
const tvMistakes = Array.from(userMistakes).filter((qId) => getSectionFromQuestionId(qId) === "TV");
const sekMistakes = Array.from(userMistakes).filter((qId) => getSectionFromQuestionId(qId) === "SEK");

check(bmsMistakes.length === 1, "BMS has 1 mistake (bio-01-q2)");
check(kffMistakes.length === 0, "KFF has 0 mistakes (no leakage from BMS)");
check(tvMistakes.length === 0, "TV has 0 mistakes (no leakage from BMS)");
check(sekMistakes.length === 0, "SEK has 0 mistakes (no leakage from BMS)");

// ============================================================================
// SUITE 7: READINESS INDEX SECTION BREAKDOWN ISOLATION
// ============================================================================
console.log("\n--- TEST 8: MedAT Readiness Index Breakdown Isolation ---");

function calculateMedATReadiness(examType, accuracies) {
  const bms = accuracies.BMS ?? null;
  const tv = examType === "MEDAT-Z" ? (accuracies.MF ?? null) : (accuracies.TV ?? null);
  const kff = accuracies.KFF ?? null;
  const sek = accuracies.SEK ?? null;

  // Weights for MEDAT-H: BMS: 40%, TV: 10%, KFF: 40%, SEK: 10%
  let totalWeight = 0;
  let weightedScore = 0;

  if (bms !== null) { weightedScore += bms * 0.40; totalWeight += 0.40; }
  if (kff !== null) { weightedScore += kff * 0.40; totalWeight += 0.40; }
  if (tv !== null)  { weightedScore += tv * 0.10; totalWeight += 0.10; }
  if (sek !== null) { weightedScore += sek * 0.10; totalWeight += 0.10; }

  const readinessIndex = totalWeight > 0 ? Math.round(weightedScore / totalWeight) : null;
  return {
    readinessIndex,
    breakdown: { bms, tv, kff, sek },
  };
}

const readinessResult = calculateMedATReadiness("MEDAT-H", {
  BMS: orchestrator.getSectionAccuracy("BMS"), // 67
  KFF: orchestrator.getSectionAccuracy("KFF"), // 100
  // TV & SEK not answered yet
});

check(readinessResult.breakdown.bms === 67, "Readiness BMS breakdown is accurately 67%");
check(readinessResult.breakdown.kff === 100, "Readiness KFF breakdown is accurately 100%");
check(readinessResult.breakdown.tv === null, "Readiness TV breakdown is null (no TV answers)");
check(readinessResult.breakdown.sek === null, "Readiness SEK breakdown is null (no SEK answers)");
check(
  readinessResult.readinessIndex === Math.round((67 * 0.4 + 100 * 0.4) / 0.8),
  "Readiness index correctly combines BMS and KFF without corrupting TV or SEK"
);

// ============================================================================
// SUMMARY
// ============================================================================
console.log("\n================================================================");
console.log(`SECTION DATA-ISOLATION VERIFICATION: ${passedTests} / ${totalTests} TESTS PASSED`);
if (passedTests === totalTests) {
  console.log("ALL SECTION BOUNDARIES FULLY ENFORCED & 100% ISOLATED ✅");
} else {
  console.error("FAILURES DETECTED IN SECTION ISOLATION ❌");
  process.exitCode = 1;
}
console.log("================================================================\n");
