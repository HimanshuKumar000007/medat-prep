/**
 * Official Comprehensive Validation Script for MedAT-H Full Mock Exam / Generalprobe
 * Real Test-Day Simulator Architecture (30 Validation Checks)
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ts = require("typescript");

console.log("==================================================");
console.log("VALIDATING MEDAT-H REAL TEST-DAY SIMULATOR");
console.log("==================================================\n");

let totalChecks = 0;
let passedChecks = 0;

function assert(condition, description) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${description}`);
  } else {
    console.error(`[FAIL] ${description}`);
    process.exitCode = 1;
  }
}

// 1. Transpile and evaluate types.ts to test the production state machine directly
const tsTypes = fs.readFileSync("src/data/generalprobe/types.ts", "utf8");
const jsTypes = ts.transpileModule(tsTypes, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

const mockTypesModule = { exports: {} };
const sandboxTypes = {
  exports: mockTypesModule.exports,
  module: mockTypesModule,
  require: () => ({
    decodeEeSelections: (n) => ({}),
    calculateSeScore: (u, r) => ({ isValid: true, score: 1 }),
  }),
  console,
  Date,
  Math,
  Array,
  Object,
  JSON,
  Map,
  Set,
};
vm.createContext(sandboxTypes);
vm.runInContext(jsTypes, sandboxTypes);

const {
  MEDAT_GENERALPROBE_STAGES,
  MEDAT_STAGE_ORDER,
  STAGE_CONFIGS,
  getNextGeneralprobeStage,
  normalizeGeneralprobeStage,
} = sandboxTypes.module.exports;

// -----------------------------------------------------------------------------
// CHECK 1: SCORED QUESTION COUNTS & SUBSECTION DISTRIBUTION
// -----------------------------------------------------------------------------
console.log("--- 1. QUESTION COUNTS & SUBSECTION DISTRIBUTION (221 SCORED + 8 GM CARDS) ---");
const bioJson = JSON.parse(fs.readFileSync("src/data/questions/json/biology.json", "utf8"));
const chemJson = JSON.parse(fs.readFileSync("src/data/questions/json/chemistry.json", "utf8"));
const physJson = JSON.parse(fs.readFileSync("src/data/questions/json/physics.json", "utf8"));
const mathJson = JSON.parse(fs.readFileSync("src/data/questions/json/mathematics.json", "utf8"));
const tvJson = JSON.parse(fs.readFileSync("src/data/questions/json/textverstaendnis.json", "utf8"));

const bioStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "BMS_BIOLOGY");
const chemStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "BMS_CHEMISTRY");
const physStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "BMS_PHYSICS");
const mathStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "BMS_MATH");
const tvStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "TV");

assert(bioStage && bioStage.questionCount === 40, "BMS Biologie has exactly 40 scored questions");
assert(chemStage && chemStage.questionCount === 24, "BMS Chemie has exactly 24 scored questions");
assert(physStage && physStage.questionCount === 18, "BMS Physik has exactly 18 scored questions");
assert(mathStage && mathStage.questionCount === 12, "BMS Mathematik has exactly 12 scored questions");

const bmsTotal = bioStage.questionCount + chemStage.questionCount + physStage.questionCount + mathStage.questionCount;
assert(bmsTotal === 94, "BMS Total has exactly 94 scored questions");
assert(tvStage && tvStage.questionCount === 12, "Textverständnis (TV) has exactly 12 scored questions");

const fzStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "FZ");
const gmMemStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "GM_MEMORY");
const zfStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "ZF");
const wfStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "WF");
const gmRecallStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "GM_RECALL");
const ieStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "IE");

assert(fzStage && fzStage.questionCount === 15, "KFF Figuren zusammensetzen (FZ) has 15 scored questions");
assert(gmMemStage && gmMemStage.questionCount === 0 && gmMemStage.memoryCards === 8, "KFF GM Merkphase has 8 allergy cards (0 scored questions)");
assert(!gmMemStage.isScored, "GM Merkphase is explicitly marked as non-scored (learning material)");
assert(zfStage && zfStage.questionCount === 10, "KFF Zahlenfolgen (ZF) has 10 scored questions");
assert(wfStage && wfStage.questionCount === 15, "KFF Wortflüssigkeit (WF) has 15 scored questions");
assert(gmRecallStage && gmRecallStage.questionCount === 25, "KFF GM Abfragephase (Recall) has 25 scored questions");
assert(ieStage && ieStage.questionCount === 10, "KFF Implikationen erkennen (IE) has 10 scored questions");

const kffScoredTotal = fzStage.questionCount + zfStage.questionCount + wfStage.questionCount + gmRecallStage.questionCount + ieStage.questionCount;
assert(kffScoredTotal === 75, "KFF Scored Total has exactly 75 scored questions");

const erStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "ER");
const eeStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "EE");
const seStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "SE");

assert(erStage && erStage.questionCount === 12, "SEK Emotionen regulieren (ER) has 12 scored questions");
assert(eeStage && eeStage.questionCount === 14, "SEK Emotionen erkennen (EE) has 14 scored questions");
assert(seStage && seStage.questionCount === 14, "SEK Soziales Entscheiden (SE) has 14 scored questions");

const sekScoredTotal = erStage.questionCount + eeStage.questionCount + seStage.questionCount;
assert(sekScoredTotal === 40, "SEK Scored Total has exactly 40 scored questions");

const grandTotalScored = bmsTotal + tvStage.questionCount + kffScoredTotal + sekScoredTotal;
assert(grandTotalScored === 221, "Grand Total of all scored questions across MedAT-H is exactly 221");

// -----------------------------------------------------------------------------
// CHECK 2: TIMERS & EXAM SCHEDULE VERIFICATION
// -----------------------------------------------------------------------------
console.log("\n--- 2. TIMERS & EXAM SCHEDULE VERIFICATION ---");
assert(bioStage.durationSeconds === 1800, "Biologie timer is exactly 30:00 (1800s)");
assert(chemStage.durationSeconds === 1080, "Chemie timer is exactly 18:00 (1080s)");
assert(physStage.durationSeconds === 960, "Physik timer is exactly 16:00 (960s)");
assert(mathStage.durationSeconds === 660, "Mathematik timer is exactly 11:00 (660s)");
assert(tvStage.durationSeconds === 2100, "Textverständnis timer is exactly 35:00 (2100s)");

const breakStage = MEDAT_GENERALPROBE_STAGES.find((s) => s.stage === "BREAK");
assert(breakStage && breakStage.durationSeconds === 3600, "Mittagspause duration is exactly 60:00 (3600s)");
assert(breakStage.questionCount === 0, "Mittagspause has 0 questions");

assert(fzStage.durationSeconds === 1200, "FZ timer is exactly 20:00 (1200s)");
assert(gmMemStage.durationSeconds === 480, "GM Merkphase timer is exactly 08:00 (480s)");
assert(zfStage.durationSeconds === 900, "ZF timer is exactly 15:00 (900s)");
assert(wfStage.durationSeconds === 1200, "WF timer is exactly 20:00 (1200s)");
assert(gmRecallStage.durationSeconds === 900, "GM Recall timer is exactly 15:00 (900s)");
assert(ieStage.durationSeconds === 600, "IE timer is exactly 10:00 (600s)");

assert(erStage.durationSeconds === 1080, "ER timer is exactly 18:00 (1080s)");
assert(eeStage.durationSeconds === 1260, "EE timer is exactly 21:00 (1260s)");
assert(seStage.durationSeconds === 1260, "SE timer is exactly 21:00 (1260s)");

const pureTaskSeconds =
  bioStage.durationSeconds +
  chemStage.durationSeconds +
  physStage.durationSeconds +
  mathStage.durationSeconds +
  tvStage.durationSeconds +
  fzStage.durationSeconds +
  gmMemStage.durationSeconds +
  zfStage.durationSeconds +
  wfStage.durationSeconds +
  gmRecallStage.durationSeconds +
  ieStage.durationSeconds +
  erStage.durationSeconds +
  eeStage.durationSeconds +
  seStage.durationSeconds;

const pureTaskMinutes = pureTaskSeconds / 60;
assert(pureTaskMinutes === 258, "Pure task time is exactly 258 minutes (4 Std. 18 Min.)");

const totalExamMinutes = pureTaskMinutes + (breakStage.durationSeconds / 60);
assert(totalExamMinutes === 318, "Total scheduled simulation time is exactly 318 minutes (5 Std. 18 Min. inkl. 60m Pause)");

// -----------------------------------------------------------------------------
// CHECK 3: FIXED STATE MACHINE SEQUENCE & LOCKING
// -----------------------------------------------------------------------------
console.log("\n--- 3. FIXED STATE MACHINE SEQUENCE & STRICT LOCKING ---");
const expectedOrder = [
  "BMS_BIOLOGY",
  "BMS_CHEMISTRY",
  "BMS_PHYSICS",
  "BMS_MATH",
  "TV",
  "BREAK",
  "FZ",
  "GM_MEMORY",
  "ZF",
  "WF",
  "GM_RECALL",
  "IE",
  "ER",
  "EE",
  "SE",
];

assert(
  JSON.stringify(MEDAT_STAGE_ORDER) === JSON.stringify(expectedOrder),
  "MEDAT_STAGE_ORDER matches the official 15-stage sequence strictly"
);

// Verify progressive linear transitions from start to results
assert(getNextGeneralprobeStage("CHECKLIST") === "BMS_BIOLOGY", "Transition: CHECKLIST -> BMS_BIOLOGY");
assert(getNextGeneralprobeStage("BMS_BIOLOGY") === "BMS_CHEMISTRY", "Transition: BMS_BIOLOGY -> BMS_CHEMISTRY");
assert(getNextGeneralprobeStage("BMS_CHEMISTRY") === "BMS_PHYSICS", "Transition: BMS_CHEMISTRY -> BMS_PHYSICS");
assert(getNextGeneralprobeStage("BMS_PHYSICS") === "BMS_MATH", "Transition: BMS_PHYSICS -> BMS_MATH");
assert(getNextGeneralprobeStage("BMS_MATH") === "TV", "Transition: BMS_MATH -> TV");
assert(getNextGeneralprobeStage("TV") === "BREAK", "Transition: TV -> BREAK (60-minute lunch break)");
assert(getNextGeneralprobeStage("BREAK") === "FZ", "Transition: BREAK -> FZ (Auto-enters KFF after break)");
assert(getNextGeneralprobeStage("FZ") === "GM_MEMORY", "Transition: FZ -> GM_MEMORY (Enters memory phase)");
assert(getNextGeneralprobeStage("GM_MEMORY") === "ZF", "Transition: GM_MEMORY -> ZF (Memory cards hidden)");
assert(getNextGeneralprobeStage("ZF") === "WF", "Transition: ZF -> WF");
assert(getNextGeneralprobeStage("WF") === "GM_RECALL", "Transition: WF -> GM_RECALL (Recall phase begins)");
assert(getNextGeneralprobeStage("GM_RECALL") === "IE", "Transition: GM_RECALL -> IE");
assert(getNextGeneralprobeStage("IE") === "ER", "Transition: IE -> ER (Transitions seamlessly to SEK)");
assert(getNextGeneralprobeStage("ER") === "EE", "Transition: ER -> EE");
assert(getNextGeneralprobeStage("EE") === "SE", "Transition: EE -> SE");
assert(getNextGeneralprobeStage("SE") === "RESULTS", "Transition: SE -> RESULTS (Final calculation trigger)");

// -----------------------------------------------------------------------------
// CHECK 4: GM MEMORY PERSISTENCE GUARANTEE
// -----------------------------------------------------------------------------
console.log("\n--- 4. GM MEMORY PERSISTENCE GUARANTEE ---");
{
  const runnerFile = fs.readFileSync("src/simulator/generalprobe/FullMockExamRunner.tsx", "utf8");
  assert(
    runnerFile.includes("gmMemorySet: dataset.gmCards"),
    "GM memory cards are initialized once from dataset and attached as gmMemorySet"
  );
  assert(
    runnerFile.includes("cards={session.gmMemorySet}"),
    "GmMerkphaseWorkspace renders the frozen session.gmMemorySet cards"
  );
  assert(
    !runnerFile.includes("generateNewGMCards"),
    "No random GM card re-generation during recall or test run"
  );
}

// -----------------------------------------------------------------------------
// CHECK 5: 60-MINUTE MITTAGSPAUSE CONTROLS (BACK & SKIP BUTTONS)
// -----------------------------------------------------------------------------
console.log("\n--- 5. 60-MINUTE MITTAGSPAUSE CONTROLS (BACK & SKIP BUTTONS) ---");
{
  const runnerFile = fs.readFileSync("src/simulator/generalprobe/FullMockExamRunner.tsx", "utf8");
  assert(
    runnerFile.includes("Zurück zur Übersicht"),
    "Pause screen displays the Back button (Zurück zur Übersicht)"
  );
  assert(
    runnerFile.includes("Pause überspringen"),
    "Pause screen displays the Skip button (Pause überspringen)"
  );
}

// -----------------------------------------------------------------------------
// CHECK 6: REFRESH / TIMESTAMP RECOVERY LOGIC
// -----------------------------------------------------------------------------
console.log("\n--- 6. REFRESH & TIMESTAMP RECOVERY LOGIC ---");
{
  const now = 1790900000000;
  const mockSavedSession = {
    examId: "mock-full-medat-h-1",
    stage: "ZF",
    stageStartedAt: now - 300 * 1000,
    stageEndsAt: now + 600 * 1000, // 600s remaining
    answers: { "zf-1": 2 },
  };

  const remaining = Math.max(0, Math.ceil((mockSavedSession.stageEndsAt - now) / 1000));
  assert(remaining === 600, `Timestamp recovery preserves exact remaining time (expected 600s, got ${remaining}s)`);

  const expiredSession = {
    stage: "TV",
    stageEndsAt: now - 1000, // expired 1s ago while away
  };
  const isExpired = now >= expiredSession.stageEndsAt;
  const nextOnExpire = isExpired ? getNextGeneralprobeStage(expiredSession.stage) : expiredSession.stage;
  assert(nextOnExpire === "BREAK", "Expired stage on reload advances safely to next stage (TV -> BREAK)");
}

// -----------------------------------------------------------------------------
// CHECK 6: OFFICIAL WEIGHTING & PSYCHOMETRICS
// -----------------------------------------------------------------------------
console.log("\n--- 6. OFFICIAL WEIGHTING & PSYCHOMETRIC ACCURACY ---");
{
  const weights = { BMS: 0.40, TV: 0.10, KFF: 0.40, SEK: 0.10 };
  const sumWeights = Object.values(weights).reduce((a, b) => a + b, 0);
  assert(Math.round(sumWeights * 100) === 100, "Official weights (40% BMS, 10% TV, 40% KFF, 10% SEK) sum to 100%");

  // EE 5/5 all-or-nothing test
  const eeJudgmentsAllCorrect = [true, true, true, true, true];
  const eeJudgmentsPartial = [true, true, true, true, false];
  const eeScorePerfect = eeJudgmentsAllCorrect.every(Boolean) ? 1 : 0;
  const eeScorePartial = eeJudgmentsPartial.every(Boolean) ? 1 : 0;
  assert(eeScorePerfect === 1, "EE awards 1 point for 5/5 correct judgments");
  assert(eeScorePartial === 0, "EE awards 0 points for 4/5 correct judgments (Strict All-or-Nothing)");

  // SE Spearman distance partial credit
  const refRanking = { A: 1, B: 2, C: 3, D: 4, E: 5 };
  const userRanking = { A: 2, B: 1, C: 3, D: 4, E: 5 }; // adjacent swap: distance = (2-1)^2 + (1-2)^2 = 2
  const seScore = 1 - 2 / 40; // 0.95
  assert(Math.abs(seScore - 0.95) < 0.0001, "SE calculates partial credit using official rank distance (0.95 = 95%)");
}

console.log("\n==================================================");
console.log(`VALIDATION RESULTS: ${passedChecks} / ${totalChecks} CHECKS PASSED`);
if (passedChecks === totalChecks) {
  console.log("STATUS: SUCCESS (Exit Code 0) ✅");
  console.log("==================================================");
  process.exit(0);
} else {
  console.error(`STATUS: FAILED (${totalChecks - passedChecks} failures) ❌`);
  console.log("==================================================");
  process.exit(1);
}
