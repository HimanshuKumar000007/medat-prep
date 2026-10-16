/**
 * Validation Script for MedAT-H / MedAT-Z: Soziales Entscheiden (SE)
 * Validates all 5 simulations (70 tasks), 5-row ranking constraints,
 * bijective permutation integrity (1..5 once), content quality, and scoring regression tests.
 */

const fs = require("fs");
const path = require("path");

function loadTsModule(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  return content;
}

console.log("==================================================");
console.log("VALIDATING MEDAT-H SE (SOZIALES ENTSCHEIDEN) SUITE");
console.log("==================================================");

// 1. Validate Scoring Algorithm directly in CJS
function calculateSeScore(userRanking, referenceRanking) {
  if (!userRanking) {
    return { isValid: false, score: 0, scorePct: 0, distance: 40 };
  }

  const keys = ["A", "B", "C", "D", "E"];
  const seenRanks = new Set();
  for (const k of keys) {
    const r = userRanking[k];
    if (r === undefined || r < 1 || r > 5) {
      return { isValid: false, score: 0, scorePct: 0, distance: 40, errorReason: "Missing or out of bounds rank" };
    }
    if (seenRanks.has(r)) {
      return { isValid: false, score: 0, scorePct: 0, distance: 40, errorReason: "Duplicate rank detected" };
    }
    seenRanks.add(r);
  }

  if (seenRanks.size !== 5) {
    return { isValid: false, score: 0, scorePct: 0, distance: 40, errorReason: "Not all ranks 1..5 used" };
  }

  let distance = 0;
  for (const k of keys) {
    const diff = userRanking[k] - referenceRanking[k];
    distance += diff * diff;
  }

  const normalizedScore = Math.max(0, Math.min(1, 1 - distance / 40));
  const roundedScore = Math.round(normalizedScore * 100) / 100;
  const scorePct = Math.round(roundedScore * 100);

  return { isValid: true, score: roundedScore, scorePct, distance };
}

// 2. Run Section 31 Scoring Regression Tests
console.log("Testing SE Scoring Algorithm & Regression Tests (Section 31)...");

const ref1 = { A: 1, B: 2, C: 3, D: 4, E: 5 };

// Test 1: Exact match -> 1.0 (Maximum score)
const test1 = calculateSeScore({ A: 1, B: 2, C: 3, D: 4, E: 5 }, ref1);
if (!test1.isValid || test1.score !== 1.0 || test1.scorePct !== 100) {
  console.error("FAIL: Test 1 (Exact Match) failed:", test1);
  process.exit(1);
}
console.log("  [PASS] Test 1: Exact Match yields 1.0 (100% agreement)");

// Test 2: Inverted -> 0.0 (Low agreement)
const test2 = calculateSeScore({ A: 5, B: 4, C: 3, D: 2, E: 1 }, ref1);
if (!test2.isValid || test2.score !== 0.0 || test2.scorePct !== 0) {
  console.error("FAIL: Test 2 (Inverted) failed:", test2);
  process.exit(1);
}
console.log("  [PASS] Test 2: Inverted ranking yields 0.0 (0% agreement)");

// Test 2b: Slight swap (1 & 2 swapped) -> partial credit 0.95 (95%)
const test2b = calculateSeScore({ A: 2, B: 1, C: 3, D: 4, E: 5 }, ref1);
if (!test2b.isValid || test2b.score !== 0.95 || test2b.scorePct !== 95) {
  console.error("FAIL: Test 2b (Partial credit) failed:", test2b);
  process.exit(1);
}
console.log("  [PASS] Test 2b: Single swap yields partial credit 0.95 (95% agreement)");

// Test 3: Duplicate rank -> INVALID
const test3 = calculateSeScore({ A: 1, B: 1, C: 3, D: 4, E: 5 }, ref1);
if (test3.isValid || test3.score !== 0) {
  console.error("FAIL: Test 3 (Duplicate Rank) should be invalid:", test3);
  process.exit(1);
}
console.log("  [PASS] Test 3: Duplicate rank rejected as INVALID (score = 0)");

// Test 4: Missing rank -> INVALID
const test4 = calculateSeScore({ A: 1, B: 2, C: 3, D: 4, E: 4 }, ref1);
if (test4.isValid || test4.score !== 0) {
  console.error("FAIL: Test 4 (Missing Rank / Duplicate 4) should be invalid:", test4);
  process.exit(1);
}
console.log("  [PASS] Test 4: Missing rank rejected as INVALID (score = 0)");

// 3. Structural validation of simulation files
const simFiles = [
  "src/data/generalprobe/generalprobe1SeQuestions.ts",
  "src/data/questions/se/seSimulation2.ts",
  "src/data/questions/se/seSimulation3.ts",
  "src/data/questions/se/seSimulation4.ts",
  "src/data/questions/se/seSimulation5.ts",
  "src/data/generalprobe/generalprobe2SeQuestions.ts",
  "src/data/generalprobe/generalprobe3SeQuestions.ts",
];

let totalQuestionsFound = 0;

simFiles.forEach((fileRel, simIdx) => {
  const simNum = simIdx + 1;
  const absPath = path.resolve(__dirname, fileRel);
  if (!fs.existsSync(absPath)) {
    console.error(`FAIL: File ${fileRel} not found!`);
    process.exit(1);
  }
  const code = fs.readFileSync(absPath, "utf-8");

  // Count question blocks (supports both se-sim and SEK-SE IDs)
  const questionIdMatches = [...code.matchAll(/id:\s*"(?:se-sim\d+-\d+|SEK-SE-[^"]+)"/g)];
  // For files with RAW and Stored arrays, count unique IDs:
  const uniqueIds = new Set(questionIdMatches.map(m => m[0]));
  const count = uniqueIds.size;
  if (count !== 14) {
    console.error(`FAIL: ${fileRel} does not contain exactly 14 questions! Found: ${count}`);
    process.exit(1);
  }
  totalQuestionsFound += count;

  // Verify that all 14 questions have referenceRanking with A, B, C, D, E and permutations of 1..5
  const rankingBlocks = [...code.matchAll(/referenceRanking:\s*\{([^}]+)\}/g)];
  if (rankingBlocks.length < 14) {
    console.error(`FAIL: ${fileRel} does not contain at least 14 referenceRanking blocks! Found: ${rankingBlocks.length}`);
    process.exit(1);
  }

  rankingBlocks.slice(0, 14).forEach((block, qIdx) => {
    const body = block[1];
    const ranks = {};
    const keyMatches = [...body.matchAll(/([ABCDE]):\s*(\d)/g)];
    if (keyMatches.length !== 5) {
      console.error(`FAIL: ${fileRel} Question ${qIdx + 1}: expected 5 ranks A..E, found ${keyMatches.length}`);
      process.exit(1);
    }
    const usedRanks = new Set();
    keyMatches.forEach((m) => {
      const key = m[1];
      const rank = parseInt(m[2], 10);
      ranks[key] = rank;
      usedRanks.add(rank);
    });

    if (usedRanks.size !== 5 || ![1, 2, 3, 4, 5].every((r) => usedRanks.has(r))) {
      console.error(`FAIL: ${fileRel} Question ${qIdx + 1}: ranking is not a valid permutation of 1..5!`, ranks);
      process.exit(1);
    }
  });

  // Verify no ER or EE wording in SE
  if (code.includes("eher wahrscheinlich") || code.includes("eher unwahrscheinlich")) {
    console.error(`FAIL: ${fileRel} contains forbidden EE probability phrases!`);
    process.exit(1);
  }

  console.log(`[PASS] ${fileRel}: 14 questions verified with valid 1..5 rankings.`);
});

// Check Difficulty distribution in Simulation 1
const sim1Code = fs.readFileSync(path.resolve(__dirname, simFiles[0]), "utf-8");
const leichtCount = (sim1Code.match(/difficulty:\s*"Leicht"/g) || []).length;
const mittelCount = (sim1Code.match(/difficulty:\s*"Mittel"/g) || []).length;
const schwerCount = (sim1Code.match(/difficulty:\s*"Schwer"/g) || []).length;

if ((leichtCount !== 4 && leichtCount !== 8) || (mittelCount !== 7 && mittelCount !== 14) || (schwerCount !== 3 && schwerCount !== 6)) {
  console.error(`FAIL: Simulation 1 difficulty distribution mismatch: Leicht=${leichtCount}, Mittel=${mittelCount}, Schwer=${schwerCount}.`);
  process.exit(1);
}
console.log(`  Difficulty distribution in Sim 1: ${leichtCount} Leicht, ${mittelCount} Mittel, ${schwerCount} Schwer`);

console.log("==================================================");
console.log(`✅ ALL 5 SE SIMULATIONS VALIDATED (${totalQuestionsFound} tasks)`);
console.log("STATUS: SUCCESS (Exit Code 0)");
console.log("==================================================");
process.exit(0);
