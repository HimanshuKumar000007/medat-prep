/**
 * Official Validation Script for MedAT-H Mock Exam Center Real-Data Architecture
 * Verifies:
 * 1. Legacy dummy demo sanitization (strips hist-1, hist-2, hist-3, placeholder mocks)
 * 2. Zero-attempt state (empty state: 0, —, —, —, Historie (0))
 * 3. Single-attempt KPI calculations (no fictional trend)
 * 4. Multi-attempt trend evaluation in percentage points (pp)
 * 5. Isolation of incomplete, in-progress, and quick mocks
 * 6. Dynamic didactic recommendation engine based on 4-pillar scores
 * 7. Catalog metadata correctness (Full Mock = 221, KFF = 75, TV+SEK = 52)
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ts = require("typescript");

console.log("==================================================");
console.log("VALIDATING MEDAT-H MOCK EXAM CENTER REAL DATA");
console.log("==================================================\n");

// Transpile useMockExamData.ts on the fly to test production code directly
const tsCode = fs.readFileSync("src/data/generalprobe/useMockExamData.ts", "utf8");
const jsCode = ts.transpileModule(tsCode, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

const mockExports = {};
const mockModule = { exports: mockExports };
const sandbox = {
  exports: mockExports,
  module: mockModule,
  require: () => ({}),
  console,
  Date,
  Math,
  Array,
  Object,
  JSON,
  Map,
  Set,
};
vm.createContext(sandbox);
vm.runInContext(jsCode, sandbox);

const { calculateMockExamCenterStats, sanitizeMockHistory } = sandbox.module.exports;

let totalTests = 0;
let passedTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] ${testName}`);
  } else {
    console.error(`[FAIL] ${testName}`);
    process.exitCode = 1;
  }
}

// -----------------------------------------------------------------------------
// TEST SUITE 1: SANITIZATION & ANTI-CORRUPTION OF LEGACY DATA
// -----------------------------------------------------------------------------
console.log("--- 1. LEGACY DUMMY DATA SANITIZATION ---");
{
  const pollutedHistory = [
    { id: "hist-1", mockId: "mock-full-medat-h-1", score: 68 },
    { id: "hist-2", mockId: "mock-full-medat-h-2", score: 76 },
    { id: "hist-3", mockId: "qm-bms-bio", score: 55 },
    {
      id: "hist-legacy-demo",
      mockId: "mock-full-medat-h-1",
      score: 76,
      totalQuestions: 94,
      date: "Vor 2 Tagen",
    },
    {
      id: "real-att-1",
      mockId: "mock-full-medat-h-1",
      category: "full",
      score: 73.2,
      totalQuestions: 221,
      date: "03.10.2026",
      timestamp: 1790900000000,
    },
    null,
    "corrupted-string",
    { invalidObj: true },
  ];

  const sanitized = sanitizeMockHistory(pollutedHistory);
  assert(sanitized.length === 1, "Only genuine user records survive sanitization");
  assert(sanitized[0].id === "real-att-1", "Genuine user attempt is preserved");
  assert(!sanitized.some((r) => r.id === "hist-1"), "Dummy hist-1 is purged");
  assert(!sanitized.some((r) => r.id === "hist-2"), "Dummy hist-2 is purged");
  assert(!sanitized.some((r) => r.id === "hist-3"), "Dummy hist-3 is purged");
  assert(
    !sanitized.some((r) => r.totalQuestions === 94 && r.score === 76),
    "Legacy 94-question demo placeholder is purged"
  );
}

// -----------------------------------------------------------------------------
// TEST SUITE 2: ZERO ATTEMPTS (EMPTY STATE RULE)
// -----------------------------------------------------------------------------
console.log("\n--- 2. ZERO ATTEMPTS METRIC INTEGRITY ---");
{
  const stats = calculateMockExamCenterStats([], null);

  assert(stats.totalFullMocks === 0, "Tests Attempted is exactly 0");
  assert(stats.averageScore === null, "Average Score is null (UI renders '—')");
  assert(stats.bestScore === null, "Best Score is null (UI renders '—')");
  assert(stats.latestScore === null, "Latest Score is null (UI renders '—')");
  assert(stats.improvement === null, "Improvement is null (UI renders '—')");
  assert(stats.improvementText === "—", "Improvement text is '—'");
  assert(stats.historyCount === 0, "History count is 0");
  assert(stats.inProgressExamId === null, "No active session in progress");
  assert(
    stats.recommendations.primary.includes("Starte deine erste MedAT-H Generalprobe"),
    "Onboarding didactic recommendation provided for new candidates"
  );
}

// -----------------------------------------------------------------------------
// TEST SUITE 3: SINGLE ATTEMPT (FIRST REAL FULL MOCK)
// -----------------------------------------------------------------------------
console.log("\n--- 3. SINGLE ATTEMPT (1 COMPLETED FULL MOCK) ---");
{
  const singleAttempt = [
    {
      id: "att-1",
      mockId: "mock-full-medat-h-1",
      examTitle: "MedAT-H Generalprobe #1",
      category: "full",
      date: "03.10.2026",
      timestamp: 1000,
      score: 72.4,
      weightedScore: 72.4,
      correctCount: 160,
      totalQuestions: 221,
      timeSpentSeconds: 15400,
      passed: true,
      bmsPercent: 75.0,
      kffPercent: 72.0,
      tvPercent: 66.7,
      sekPercent: 70.0,
      status: "completed",
    },
  ];

  const stats = calculateMockExamCenterStats(singleAttempt, null);

  assert(stats.totalFullMocks === 1, "Tests Attempted is exactly 1");
  assert(stats.averageScore === 72.4, "Average Score equals attempt score (72.4%)");
  assert(stats.bestScore === 72.4, "Best Score equals attempt score (72.4%)");
  assert(stats.latestScore === 72.4, "Latest Score equals attempt score (72.4%)");
  assert(stats.improvement === null, "Improvement is null because at least 2 attempts are needed");
  assert(stats.improvementText === "—", "Improvement text is '—' for single attempt");
  assert(stats.historyCount === 1, "History count is 1");
  assert(stats.sectionAverages.bms === 75.0, "BMS section average matches");
  assert(stats.sectionAverages.kff === 72.0, "KFF section average matches");
  assert(stats.sectionAverages.tv === 66.7, "TV section average matches");
  assert(stats.sectionAverages.sek === 70.0, "SEK section average matches");
}

// -----------------------------------------------------------------------------
// TEST SUITE 4: MULTI-ATTEMPT EVOLUTION & PERCENTAGE POINTS TREND
// -----------------------------------------------------------------------------
console.log("\n--- 4. MULTI-ATTEMPT EVOLUTION & PERCENTAGE POINTS (pp) ---");
{
  // History is ordered newest-first: index 0 is latest (att-2), index 1 is first (att-1)
  const twoAttempts = [
    {
      id: "att-2",
      mockId: "mock-full-medat-h-2",
      examTitle: "MedAT-H Generalprobe #2",
      category: "full",
      date: "05.10.2026",
      timestamp: 2000,
      score: 75.5,
      weightedScore: 75.5,
      correctCount: 167,
      totalQuestions: 221,
      timeSpentSeconds: 15100,
      passed: true,
      bmsPercent: 78.0,
      kffPercent: 76.0,
      tvPercent: 75.0,
      sekPercent: 67.5,
      status: "completed",
    },
    {
      id: "att-1",
      mockId: "mock-full-medat-h-1",
      examTitle: "MedAT-H Generalprobe #1",
      category: "full",
      date: "01.10.2026",
      timestamp: 1000,
      score: 68.0,
      weightedScore: 68.0,
      correctCount: 150,
      totalQuestions: 221,
      timeSpentSeconds: 15400,
      passed: true,
      bmsPercent: 66.0,
      kffPercent: 70.0,
      tvPercent: 66.7,
      sekPercent: 70.0,
      status: "completed",
    },
  ];

  const stats2 = calculateMockExamCenterStats(twoAttempts, null);

  assert(stats2.totalFullMocks === 2, "Tests Attempted is 2");
  // Average = (75.5 + 68.0) / 2 = 143.5 / 2 = 71.75 -> 71.8
  assert(stats2.averageScore === 71.8, `Average Score is 71.8% (got ${stats2.averageScore})`);
  assert(stats2.bestScore === 75.5, "Best Score is 75.5%");
  assert(stats2.latestScore === 75.5, "Latest Score is 75.5%");
  // Improvement = 75.5 - 68.0 = +7.5 pp
  assert(stats2.improvement === 7.5, "Improvement numeric value is +7.5");
  assert(stats2.improvementText === "+7.5 pp", "Improvement formatted as '+7.5 pp' (percentage points)");

  // Three attempts with fluctuation
  const threeAttempts = [
    {
      id: "att-3",
      mockId: "mock-full-medat-h-1",
      category: "full",
      score: 72.0,
      timestamp: 3000,
      status: "completed",
    },
    {
      id: "att-2",
      mockId: "mock-full-medat-h-2",
      category: "full",
      score: 78.0,
      timestamp: 2000,
      status: "completed",
    },
    {
      id: "att-1",
      mockId: "mock-full-medat-h-1",
      category: "full",
      score: 62.0,
      timestamp: 1000,
      status: "completed",
    },
  ];

  const stats3 = calculateMockExamCenterStats(threeAttempts, null);
  assert(stats3.totalFullMocks === 3, "Tests Attempted is 3");
  // Average = (72 + 78 + 62) / 3 = 212 / 3 = 70.666... -> 70.7
  assert(stats3.averageScore === 70.7, `Average Score is 70.7% (got ${stats3.averageScore})`);
  assert(stats3.bestScore === 78.0, "Best Score is 78.0% (from attempt #2)");
  assert(stats3.latestScore === 72.0, "Latest Score is 72.0% (from attempt #3)");
  // Improvement = latest (72.0) - first (62.0) = +10 pp
  assert(stats3.improvement === 10.0, "Improvement from first to latest is +10.0");
  assert(stats3.improvementText === "+10 pp", "Improvement text is '+10 pp'");

  // Negative trend test
  const negativeTrend = [
    { id: "att-neg-2", mockId: "mock-full-medat-h-2", category: "full", score: 65.2, timestamp: 2000, status: "completed" },
    { id: "att-neg-1", mockId: "mock-full-medat-h-1", category: "full", score: 70.4, timestamp: 1000, status: "completed" },
  ];
  const statsNeg = calculateMockExamCenterStats(negativeTrend, null);
  assert(statsNeg.improvement === -5.2, "Negative improvement calculated correctly (-5.2)");
  assert(statsNeg.improvementText === "-5.2 pp", "Negative improvement text formatted as '-5.2 pp'");
}

// -----------------------------------------------------------------------------
// TEST SUITE 5: ISOLATION OF INCOMPLETE, ABANDONED & QUICK MOCKS
// -----------------------------------------------------------------------------
console.log("\n--- 5. ISOLATION OF INCOMPLETE & QUICK MOCKS ---");
{
  const mixedHistory = [
    {
      id: "qm-1",
      mockId: "qm-bms-bio",
      examTitle: "BMS Biologie Sprint",
      category: "quick",
      score: 80.0,
      totalQuestions: 15,
      timestamp: 4000,
      status: "completed",
    },
    {
      id: "in-prog-1",
      mockId: "mock-full-medat-h-1",
      examTitle: "MedAT-H Generalprobe #1",
      category: "full",
      score: 30.0,
      totalQuestions: 221,
      timestamp: 3000,
      status: "in_progress",
    },
    {
      id: "abandoned-1",
      mockId: "mock-full-medat-h-2",
      examTitle: "MedAT-H Generalprobe #2",
      category: "full",
      score: 15.0,
      totalQuestions: 221,
      timestamp: 2000,
      status: "abandoned",
    },
    {
      id: "full-comp-1",
      mockId: "mock-full-medat-h-1",
      examTitle: "MedAT-H Generalprobe #1",
      category: "full",
      score: 74.0,
      weightedScore: 74.0,
      totalQuestions: 221,
      timestamp: 1000,
      status: "completed",
    },
  ];

  const statsMixed = calculateMockExamCenterStats(mixedHistory, "mock-full-medat-h-1");

  assert(statsMixed.totalFullMocks === 1, "Only the 1 completed full mock is counted in full mocks");
  assert(statsMixed.averageScore === 74.0, "Average Score strictly ignores quick mock and abandoned mocks");
  assert(statsMixed.bestScore === 74.0, "Best Score strictly ignores quick mock and abandoned mocks");
  assert(statsMixed.improvement === null, "Improvement remains null (only 1 valid completed full mock)");
  assert(statsMixed.inProgressExamId === "mock-full-medat-h-1", "Active in-progress exam detected");
  // allCompletedMocks includes full-comp-1 and qm-1 (2 completed items, excluding in_progress and abandoned)
  assert(statsMixed.historyCount === 2, `History count is 2 (got ${statsMixed.historyCount})`);
  assert(statsMixed.completedQuickMocks.length === 1, "Completed quick mocks segregated");
}

// -----------------------------------------------------------------------------
// TEST SUITE 6: DYNAMIC DIDACTIC RECOMMENDATION ENGINE
// -----------------------------------------------------------------------------
console.log("\n--- 6. DYNAMIC DIDACTIC RECOMMENDATION ENGINE ---");
{
  // Test case A: BMS weakest
  const bmsWeak = [
    {
      id: "att-bms-weak",
      mockId: "mock-full-medat-h-1",
      category: "full",
      score: 68.0,
      bmsPercent: 55.0, // lowest
      kffPercent: 78.0,
      tvPercent: 83.3,
      sekPercent: 75.0,
      timestamp: 1000,
      status: "completed",
    },
  ];
  const statsBms = calculateMockExamCenterStats(bmsWeak, null);
  assert(statsBms.recommendations.weakestSection === "BMS", "Identified BMS as weakest pillar");
  assert(statsBms.recommendations.primary.includes("BMS"), "Primary advice targets BMS");
  assert(statsBms.recommendations.primary.includes("40%"), "Notes BMS 40% weighting leverage");

  // Test case B: KFF weakest
  const kffWeak = [
    {
      id: "att-kff-weak",
      mockId: "mock-full-medat-h-1",
      category: "full",
      score: 69.0,
      bmsPercent: 78.0,
      kffPercent: 54.0, // lowest
      tvPercent: 80.0,
      sekPercent: 75.0,
      timestamp: 1000,
      status: "completed",
    },
  ];
  const statsKff = calculateMockExamCenterStats(kffWeak, null);
  assert(statsKff.recommendations.weakestSection === "KFF", "Identified KFF as weakest pillar");
  assert(statsKff.recommendations.primary.includes("KFF"), "Primary advice targets KFF");
  assert(statsKff.recommendations.primary.includes("75 Aufgaben in 88 Min"), "Notes KFF 75 tasks time limit");

  // Test case C: SEK weakest
  const sekWeak = [
    {
      id: "att-sek-weak",
      mockId: "mock-full-medat-h-1",
      category: "full",
      score: 72.0,
      bmsPercent: 78.0,
      kffPercent: 76.0,
      tvPercent: 83.3,
      sekPercent: 50.0, // lowest
      timestamp: 1000,
      status: "completed",
    },
  ];
  const statsSek = calculateMockExamCenterStats(sekWeak, null);
  assert(statsSek.recommendations.weakestSection === "SEK", "Identified SEK as weakest pillar");
  assert(statsSek.recommendations.primary.includes("SEK"), "Primary advice targets SEK");
  assert(
    statsSek.recommendations.supporting.some((s) => s.includes("Emotionen erkennen verlangt 5/5")),
    "Advises on EE 5/5 all-or-nothing scoring rule"
  );
}

// -----------------------------------------------------------------------------
// TEST SUITE 7: CATALOG & CARD METADATA RIGOR
// -----------------------------------------------------------------------------
console.log("\n--- 7. CATALOG & CARD METADATA RIGOR ---");
{
  const mocksContent = fs.readFileSync("src/dashboard/Mocks.tsx", "utf8");

  // 1. Generalprobe #1 & #2 have 221 tasks
  assert(
    mocksContent.includes('sectionsText: "BMS (94) · TV (12) · KFF (75) · SEK (40)"'),
    "Generalprobe #1 has exact 221 tasks breakdown (BMS 94, TV 12, KFF 75, SEK 40)"
  );
  assert(
    mocksContent.includes("questionCount: 221"),
    "Generalprobe definition has questionCount: 221"
  );

  // 2. KFF Complete Test has 75 tasks
  assert(
    mocksContent.includes("FZ (15) · GM (25) · ZF (10) · WF (15) · IE (10)") &&
    mocksContent.includes("questionCount: 75"),
    "KFF Complete Test specifies exact 75 tasks breakdown (FZ 15, GM 25, ZF 10, WF 15, IE 10)"
  );

  // 3. TV + SEK Complete Test has 52 tasks
  assert(
    mocksContent.includes("TV (12) · SEK (40 Aufgaben: ER 12 · EE 14 · SE 14)") &&
    mocksContent.includes("questionCount: 52"),
    "TV + SEK Complete Test specifies exact 52 tasks breakdown (TV 12, SEK 40)"
  );

  // 4. No hardcoded INITIAL_MOCK_HISTORY demo metrics
  assert(
    !mocksContent.includes("INITIAL_MOCK_HISTORY"),
    "Demo INITIAL_MOCK_HISTORY is permanently removed from Mocks.tsx"
  );
  assert(
    !mocksContent.includes('"Absolviert (76%)"'),
    "Static 'Absolviert (76%)' badge is permanently removed"
  );
  assert(
    !mocksContent.includes('+22% seit Start'),
    "Static '+22% seit Start' trend is permanently removed"
  );
}

console.log("\n==================================================");
console.log(`VALIDATION RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
if (passedTests === totalTests) {
  console.log("STATUS: SUCCESS (Exit Code 0) ✅");
  console.log("==================================================");
  process.exit(0);
} else {
  console.error(`STATUS: FAILED (${totalTests - passedTests} failures) ❌`);
  console.log("==================================================");
  process.exit(1);
}
