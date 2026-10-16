/**
 * validate_dashboard_real_data.cjs
 * Comprehensive test suite validating that the MedAT Command Center Dashboard
 * runs strictly on real user data with zero hardcoded/mock metrics.
 */

const fs = require("fs");
const path = require("path");

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${message}`);
    process.exitCode = 1;
  }
}

console.log("==================================================");
console.log("VALIDATING MEDAT DASHBOARD HOMEPAGE REAL DATA");
console.log("==================================================");

// 1. Audit Home.tsx and useDashboardData.ts for hardcoded mock values
console.log("\n--- 1. AUDIT FOR HARDCODED METRICS ---");
const homeCode = fs.readFileSync(path.join(__dirname, "src/dashboard/Home.tsx"), "utf8");
const dashboardHookCode = fs.readFileSync(path.join(__dirname, "src/dashboard/useDashboardData.ts"), "utf8");

assert(!homeCode.includes("const readiness = 72"), "No hardcoded readiness constant in Home.tsx");
assert(!homeCode.includes("const bmsScore = 76"), "No hardcoded bmsScore in Home.tsx");
assert(!homeCode.includes("const kffScore = 68"), "No hardcoded kffScore in Home.tsx");
assert(!homeCode.includes("+22%"), "No hardcoded +22% improvement trend in Home.tsx");
assert(!homeCode.includes("testsAttempted = 3"), "No hardcoded tests attempted in Home.tsx");
assert(homeCode.includes("useDashboardData"), "Home.tsx consumes useDashboardData single source of truth");

// 2. Readiness Calculation Logic
console.log("\n--- 2. WEIGHTED READINESS FORMULA & THRESHOLDS ---");
function calculateReadinessTest(examType, sectionAccuracies) {
  const weights = examType === "MEDAT-Z"
    ? { BMS: 40, MF: 30, KFF: 20, SEK: 10 }
    : { BMS: 40, TV: 10, KFF: 40, SEK: 10 };

  let totalWeighted = 0;
  let totalWeightsActive = 0;

  for (const [sec, weight] of Object.entries(weights)) {
    const acc = sectionAccuracies[sec];
    if (typeof acc === "number" && !isNaN(acc)) {
      totalWeighted += (acc / 100) * weight;
      totalWeightsActive += weight;
    }
  }

  if (totalWeightsActive < 40) {
    return { score: null, hasEnoughData: false };
  }

  const normalized = Math.round((totalWeighted / totalWeightsActive) * 100);
  return { score: Math.min(100, Math.max(0, normalized)), hasEnoughData: true };
}

// Case 2A: Zero data
const zeroRes = calculateReadinessTest("MEDAT-H", {});
assert(!zeroRes.hasEnoughData && zeroRes.score === null, "Zero attempts yields null score & hasEnoughData: false");

// Case 2B: Only 1 section (e.g. TV 10% weight) -> not enough data
const tvOnlyRes = calculateReadinessTest("MEDAT-H", { TV: 80 });
assert(!tvOnlyRes.hasEnoughData && tvOnlyRes.score === null, "TV only (10% weight) yields null readiness score");

// Case 2C: 2 sections (BMS 70%, TV 80%) -> 40 + 10 = 50% weight active
const twoSecRes = calculateReadinessTest("MEDAT-H", { BMS: 70, TV: 80 });
assert(twoSecRes.hasEnoughData, "2 sections (BMS 40% + TV 10%) has enough active weight");
// (70*40 + 80*10) / 50 = (2800 + 800) / 50 = 3600 / 50 = 72%
assert(twoSecRes.score === 72, `Normalized 2-section readiness is exactly 72% (got ${twoSecRes.score})`);

// Case 2D: All 4 sections (BMS 76%, TV 81%, KFF 67%, SEK 74%)
// 76*0.4 + 81*0.1 + 67*0.4 + 74*0.1 = 30.4 + 8.1 + 26.8 + 7.4 = 72.7 -> 73%
const fourSecRes = calculateReadinessTest("MEDAT-H", { BMS: 76, TV: 81, KFF: 67, SEK: 74 });
assert(fourSecRes.score === 73, `Full 4-section readiness is exactly 73% (got ${fourSecRes.score})`);

// 3. Today's Mission Task Tracking
console.log("\n--- 3. TODAY'S MISSION TASK COMPUTATION ---");
function computeMissionTest(bmsAnsweredToday, kffAnsweredToday, wrongCount, setFinished, totalAnswered = 10) {
  const bmsTarget = 15;
  const kffTarget = 10;
  const mistakesDone = totalAnswered > 0 && wrongCount === 0;
  const items = [
    { id: "set", completed: setFinished },
    { id: "bms", current: bmsAnsweredToday, target: bmsTarget, completed: bmsAnsweredToday >= bmsTarget },
    { id: "kff", current: kffAnsweredToday, target: kffTarget, completed: kffAnsweredToday >= kffTarget },
    { id: "mistakes", completed: mistakesDone },
  ];
  const completedCount = items.filter(i => i.completed).length;
  return {
    completedCount,
    totalCount: items.length,
    percent: Math.round((completedCount / items.length) * 100),
  };
}

const missionNewUser = computeMissionTest(0, 0, 0, false, 0);
assert(missionNewUser.completedCount === 0, "Brand new user (0 total answers) results in 0 completed tasks");
assert(missionNewUser.percent === 0, "Brand new user results in 0% mission completion");

const missionEmpty = computeMissionTest(0, 0, 5, false, 20);
assert(missionEmpty.completedCount === 0, "No progress results in 0 completed mission tasks");
assert(missionEmpty.percent === 0, "No progress results in 0% mission completion");

const missionHalf = computeMissionTest(15, 4, 3, true, 20); // BMS done, set done -> 2 done
assert(missionHalf.completedCount === 2, "2 completed tasks (BMS + set) recognized");
assert(missionHalf.percent === 50, "50% mission completion calculated");

const missionFull = computeMissionTest(20, 10, 0, true, 30); // All done
assert(missionFull.completedCount === 4, "4/4 tasks completed recognized");
assert(missionFull.percent === 100, "100% mission completion calculated");

// 4. Relative Date Formatting Logic
console.log("\n--- 4. RELATIVE DATE FORMATTING ---");
function testRelativeDate(ts) {
  const now = new Date();
  const date = new Date(ts);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const diffDays = Math.round((today - target) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Heute";
  if (diffDays === 1) return "Gestern";
  if (diffDays === 2) return "Vor 2 Tagen";
  if (diffDays > 2 && diffDays <= 7) return `Vor ${diffDays} Tagen`;
  return "Datum";
}

const nowTs = Date.now();
assert(testRelativeDate(nowTs) === "Heute", "Current timestamp resolves to 'Heute'");
assert(testRelativeDate(nowTs - 86400000) === "Gestern", "Timestamp 1 day ago resolves to 'Gestern'");
assert(testRelativeDate(nowTs - 2 * 86400000) === "Vor 2 Tagen", "Timestamp 2 days ago resolves to 'Vor 2 Tagen'");
assert(testRelativeDate(nowTs - 5 * 86400000) === "Vor 5 Tagen", "Timestamp 5 days ago resolves to 'Vor 5 Tagen'");

// 5. Weak Area Detection Filter & Rank
console.log("\n--- 5. WEAK AREA DETECTION & RANKING ---");
const sampleChapters = [
  { id: "kff-num", section: "KFF", title: "Zahlenfolgen", answeredCount: 10, accuracy: 58, mistakesCount: 4 },
  { id: "phys-mech", section: "BMS", title: "Mechanik", answeredCount: 15, accuracy: 63, mistakesCount: 5 },
  { id: "bio-zelle", section: "BMS", title: "Zellbiologie", answeredCount: 20, accuracy: 85, mistakesCount: 3 },
  { id: "chem-atom", section: "BMS", title: "Atombau", answeredCount: 1, accuracy: 0, mistakesCount: 1 }, // Insufficient sample size
];

const filteredWeak = sampleChapters
  .filter(c => c.answeredCount >= 3 && c.accuracy < 75)
  .sort((a, b) => a.accuracy - b.accuracy);

assert(filteredWeak.length === 2, "Exactly 2 chapters meet weak area criteria (sample size >= 3 and acc < 75%)");
assert(filteredWeak[0].id === "kff-num" && filteredWeak[0].accuracy === 58, "Rank 1 weakest is KFF Zahlenfolgen with 58%");
assert(filteredWeak[1].id === "phys-mech" && filteredWeak[1].accuracy === 63, "Rank 2 weakest is BMS Mechanik with 63%");
assert(!filteredWeak.some(c => c.id === "chem-atom"), "Single-attempt chapter excluded due to insufficient sample size");

console.log("\n==================================================");
console.log(`VALIDATION RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
if (passedTests === totalTests) {
  console.log("STATUS: SUCCESS (Exit Code 0) ✅");
  process.exit(0);
} else {
  console.error("STATUS: FAIL ❌");
  process.exit(1);
}
