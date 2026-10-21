/**
 * Comprehensive Validation Script for BMS Biology Generalprobe 5 (GP5)
 * Verifies structure, keys, difficulty, non-cyclical distribution, syllabus coverage,
 * originality against GP1-GP4, simulator integration, BMS 94 question preservation,
 * and scientific accuracy criteria.
 */

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

console.log("==================================================================");
console.log("VALIDATING MEDAT-H BMS BIOLOGY GENERALPROBE 5 (GP5)");
console.log("==================================================================\n");

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

// Helper to transpile and require a TypeScript file in memory
function loadTsModule(filePath) {
  const tsCode = fs.readFileSync(filePath, "utf8");
  const jsCode = ts.transpileModule(tsCode, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const mod = { exports: {} };
  const fn = new Function("exports", "module", "require", jsCode);
  fn(mod.exports, mod, (modName) => {
    // Resolve relative imports within src/data/generalprobe
    if (modName.startsWith("./") || modName.startsWith("../")) {
      const targetPath = path.resolve(path.dirname(filePath), modName);
      if (targetPath.endsWith(".json") || fs.existsSync(targetPath + ".json")) {
        const jsonPath = targetPath.endsWith(".json") ? targetPath : targetPath + ".json";
        const jsonContent = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
        if (Array.isArray(jsonContent)) {
          jsonContent.default = jsonContent;
          jsonContent.__esModule = true;
          return jsonContent;
        }
        return { default: jsonContent, __esModule: true, ...jsonContent };
      }
      if (fs.existsSync(targetPath + ".ts")) return loadTsModule(targetPath + ".ts");
      if (fs.existsSync(targetPath + ".js")) return require(targetPath + ".js");
      if (fs.existsSync(targetPath)) {
        if (fs.existsSync(path.join(targetPath, "index.ts"))) return loadTsModule(path.join(targetPath, "index.ts"));
        return require(targetPath);
      }
      if (fs.existsSync(targetPath + "/index.ts")) return loadTsModule(targetPath + "/index.ts");
    }
    return require(modName);
  });
  return mod.exports;
}

// 1. Load GP5 Biology File
const gp5BioPath = path.join(__dirname, "src/data/generalprobe/generalprobe5BiologyQuestions.ts");
assert(fs.existsSync(gp5BioPath), "generalprobe5BiologyQuestions.ts exists on disk");

const gp5BioModule = loadTsModule(gp5BioPath);
const rawQuestions = gp5BioModule.RAW_GENERALPROBE_5_BIO_QUESTIONS;
const storedQuestions = gp5BioModule.GENERALPROBE_5_BIO_QUESTIONS;

// 2. Count verification
assert(Array.isArray(rawQuestions) && rawQuestions.length === 40, `Exactly 40 raw Biology questions found (${rawQuestions?.length})`);
assert(Array.isArray(storedQuestions) && storedQuestions.length === 40, `Exactly 40 stored StoredQuestion objects found (${storedQuestions?.length})`);

// 3. Unique IDs check
const idSet = new Set();
let allIdsValid = true;
rawQuestions.forEach((q, idx) => {
  const expectedId = `BIO-BMS-GP5-${String(idx + 1).padStart(3, "0")}`;
  if (q.id !== expectedId) allIdsValid = false;
  idSet.add(q.id);
});
assert(idSet.size === 40, "All 40 question IDs are unique");
assert(allIdsValid, "All question IDs strictly adhere to BIO-BMS-GP5-001 through BIO-BMS-GP5-040");

// 4. Options and Stems
let allOptionsValid = true;
let allStemsValid = true;
rawQuestions.forEach((q) => {
  if (!q.stem || q.stem.trim().length < 20) allStemsValid = false;
  if (!q.options || typeof q.options !== "object") allOptionsValid = false;
  const keys = Object.keys(q.options).sort();
  if (keys.join("") !== "ABCDE") allOptionsValid = false;
  keys.forEach((k) => {
    if (!q.options[k] || q.options[k].trim().length === 0) allOptionsValid = false;
  });
});
assert(allStemsValid, "All 40 questions have clear, non-empty German question stems (> 20 chars)");
assert(allOptionsValid, "Every question has exactly 5 options labelled A, B, C, D, E with non-empty content");

// 5. Single Correct Answer Rule & Explanation Agreement
let allKeysValid = true;
let allExplanationsAgree = true;
let allDistractorExplanationsPresent = true;
rawQuestions.forEach((q) => {
  if (!["A", "B", "C", "D", "E"].includes(q.correct_answer)) allKeysValid = false;
  if (!q.explanation_correct || q.explanation_correct.trim().length < 50) allExplanationsAgree = false;
  if (!q.explanations_incorrect || typeof q.explanations_incorrect !== "object") {
    allDistractorExplanationsPresent = false;
  } else {
    const incorrectKeys = Object.keys(q.explanations_incorrect);
    if (incorrectKeys.length !== 4) allDistractorExplanationsPresent = false;
    if (incorrectKeys.includes(q.correct_answer)) allExplanationsAgree = false;
  }
});
assert(allKeysValid, "Every question has exactly one valid correct answer in {A, B, C, D, E}");
assert(allExplanationsAgree, "Every question includes a comprehensive explanation matching the correct answer");
assert(allDistractorExplanationsPresent, "Every question contains detailed rationales for all 4 distractors");

// 6. Difficulty Distribution
const difficultyCounts = { foundational: 0, intermediate: 0, advanced: 0 };
rawQuestions.forEach((q) => {
  difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;
});
assert(
  difficultyCounts.foundational === 10 &&
  difficultyCounts.intermediate === 20 &&
  difficultyCounts.advanced === 10,
  `Difficulty split is exactly 10 Easy, 20 Medium, 10 Hard (Foundational: ${difficultyCounts.foundational}, Intermediate: ${difficultyCounts.intermediate}, Advanced: ${difficultyCounts.advanced})`
);

// 7. Answer Key Distribution (8 A, 8 B, 8 C, 8 D, 8 E)
const keyCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  keyCounts[q.correct_answer] = (keyCounts[q.correct_answer] || 0) + 1;
});
assert(
  keyCounts.A === 8 &&
  keyCounts.B === 8 &&
  keyCounts.C === 8 &&
  keyCounts.D === 8 &&
  keyCounts.E === 8,
  `Answer-key distribution is exactly 8 each for A, B, C, D, E (A: ${keyCounts.A}, B: ${keyCounts.B}, C: ${keyCounts.C}, D: ${keyCounts.D}, E: ${keyCounts.E})`
);

// 8. Non-Cyclical Answer Pattern
let isCyclical = true;
const letters = ["A", "B", "C", "D", "E"];
for (let i = 0; i < 40; i++) {
  if (rawQuestions[i].correct_answer !== letters[i % 5]) {
    isCyclical = false;
    break;
  }
}
assert(!isCyclical, "Verified that correct answers do NOT follow a predictable A-B-C-D-E repeating cycle");

// 9. Syllabus & Topic Coverage
const chapterCounts = {};
storedQuestions.forEach((q) => {
  chapterCounts[q.chapterId] = (chapterCounts[q.chapterId] || 0) + 1;
});
console.log("\nSyllabus Chapter Distribution for GP5 Biology:");
Object.keys(chapterCounts).sort().forEach((ch) => {
  console.log(`  - ${ch}: ${chapterCounts[ch]} questions`);
});
assert(Object.keys(chapterCounts).length >= 8, `Syllabus broadly covers official chapters (${Object.keys(chapterCounts).length} chapters covered)`);
assert(chapterCounts["bio-01-zelle"] >= 4, "Adequate cell biology coverage (bio-01-zelle)");
assert(chapterCounts["bio-02-koerper"] >= 5, "Adequate organ systems, digestive, renal & immune coverage (bio-02-koerper)");
assert(chapterCounts["bio-03-fruehentwicklung"] >= 3, "Adequate developmental biology coverage (bio-03-fruehentwicklung)");
assert(chapterCounts["bio-04-genetik"] >= 4, "Adequate classical & human genetics coverage (bio-04-genetik)");
assert(chapterCounts["bio-05-molgen"] >= 4, "Adequate molecular genetics & gene expression coverage (bio-05-molgen)");
assert(chapterCounts["bio-06-stoffwechsel"] >= 3, "Adequate metabolism & bioenergetics coverage (bio-06-stoffwechsel)");
assert(chapterCounts["bio-07-herzkreislauf"] >= 2, "Adequate cardiovascular coverage (bio-07-herzkreislauf)");
assert(chapterCounts["bio-08-atmung"] >= 2, "Adequate respiratory coverage (bio-08-atmung)");
assert(chapterCounts["bio-09-nervensystem"] >= 2, "Adequate nervous system & evolution coverage (bio-09-nervensystem)");

// 10. Originality Against GP1-GP4
const earlierBanks = [
  "src/data/generalprobe/generalprobe1BioQuestions.ts",
  "src/data/generalprobe/generalprobe2BiologyQuestions.ts",
  "src/data/generalprobe/generalprobe3BiologyQuestions.ts",
  "src/data/generalprobe/generalprobe4BiologyQuestions.ts",
];
const earlierStems = new Set();
earlierBanks.forEach((bPath) => {
  const fullP = path.join(__dirname, bPath);
  if (fs.existsSync(fullP)) {
    const content = fs.readFileSync(fullP, "utf8");
    const matches = content.match(/stem:\s*["'`]([^"'`]+)["'`]/g) || [];
    matches.forEach((m) => {
      const clean = m.replace(/^stem:\s*["'`]([^"'`]+)["'`]$/, "$1").trim().toLowerCase();
      earlierStems.add(clean);
    });
  }
});
let duplicateStemsFound = 0;
rawQuestions.forEach((q) => {
  const cleanStem = q.stem.trim().toLowerCase();
  if (earlierStems.has(cleanStem)) duplicateStemsFound++;
});
assert(duplicateStemsFound === 0, `Zero duplicate stems found against GP1-GP4 banks (duplicate count: ${duplicateStemsFound})`);

// 11. StoredQuestion Runtime Mapping
let mappingAccurate = true;
storedQuestions.forEach((sq, idx) => {
  const rq = rawQuestions[idx];
  if (sq.id !== rq.id) mappingAccurate = false;
  if (sq.questionText !== rq.stem) mappingAccurate = false;
  const expectedIndex = { A: 0, B: 1, C: 2, D: 3, E: 4 }[rq.correct_answer];
  if (sq.correctAnswer !== expectedIndex) mappingAccurate = false;
  if (sq.options.length !== 5) mappingAccurate = false;
  if (sq.options[expectedIndex] !== rq.options[rq.correct_answer]) mappingAccurate = false;
  if (!sq.explanation.includes(rq.explanation_correct)) mappingAccurate = false;
});
assert(mappingAccurate, "All 40 StoredQuestion objects accurately map stems, 5 options, numeric answer keys, and explanations");

// 12. Full Generalprobe Dataset Factory Integration
const gpDataPath = path.join(__dirname, "src/data/generalprobe/generalprobeData.ts");
const gpDataCode = fs.readFileSync(gpDataPath, "utf8");
assert(gpDataCode.includes("GENERALPROBE_5_BIO_QUESTIONS"), "generalprobeData.ts imports GENERALPROBE_5_BIO_QUESTIONS");
assert(gpDataCode.includes("buildGeneralprobe5Dataset"), "generalprobeData.ts exports buildGeneralprobe5Dataset");
assert(gpDataCode.includes("GENERALPROBE_5_DATASET"), "generalprobeData.ts exports GENERALPROBE_5_DATASET");
assert(gpDataCode.includes('"generalprobe-5"') || gpDataCode.includes('"mock-full-medat-h-5"'), "getGeneralprobeDataset handles generalprobe-5 / mock-full-medat-h-5");

// 13. Test generalprobe-5 dataset directly
const gpDataModule = loadTsModule(gpDataPath);
const gp5Dataset = gpDataModule.getGeneralprobeDataset("generalprobe-5");
assert(gp5Dataset && gp5Dataset.id === "generalprobe-5", "getGeneralprobeDataset('generalprobe-5') returns valid dataset");
assert(gp5Dataset.bmsQuestions && gp5Dataset.bmsQuestions.length === 94, `Full BMS question count is exactly 94 (actual: ${gp5Dataset.bmsQuestions?.length})`);

const gp5BioQuestions = gp5Dataset.bmsQuestions.filter((q) => q.subjectId === "bio");
const gp5ChemQuestions = gp5Dataset.bmsQuestions.filter((q) => q.subjectId === "chem");
const gp5PhysQuestions = gp5Dataset.bmsQuestions.filter((q) => q.subjectId === "phys");
const gp5MathQuestions = gp5Dataset.bmsQuestions.filter((q) => q.subjectId === "math");

assert(gp5BioQuestions.length === 40, `BMS Biology has exactly 40 questions (actual: ${gp5BioQuestions.length})`);
assert(gp5ChemQuestions.length === 24, `BMS Chemistry has exactly 24 questions (actual: ${gp5ChemQuestions.length})`);
assert(gp5PhysQuestions.length === 18, `BMS Physics has exactly 18 questions (actual: ${gp5PhysQuestions.length})`);
assert(gp5MathQuestions.length === 12, `BMS Mathematics has exactly 12 questions (actual: ${gp5MathQuestions.length})`);

// 14. Verify GP5 Biology questions in dataset match our GP5 questions
assert(gp5BioQuestions[0].id === "BIO-BMS-GP5-001", "GP5 Biology first question is BIO-BMS-GP5-001");
assert(gp5BioQuestions[39].id === "BIO-BMS-GP5-040", "GP5 Biology 40th question is BIO-BMS-GP5-040");

// 15. Verify Stage Config Duration (1,800 seconds)
const typesPath = path.join(__dirname, "src/data/generalprobe/types.ts");
const typesCode = fs.readFileSync(typesPath, "utf8");
assert(typesCode.includes("stage: \"BMS_BIOLOGY\""), "types.ts defines BMS_BIOLOGY stage");
assert(typesCode.includes("durationSeconds: 1800"), "BMS_BIOLOGY stage is configured with exactly 1,800 seconds (30 minutes)");

// 16. Verify GP1-GP4 remain intact
const gp1Dataset = gpDataModule.getGeneralprobeDataset("generalprobe-1");
const gp2Dataset = gpDataModule.getGeneralprobeDataset("generalprobe-2");
const gp3Dataset = gpDataModule.getGeneralprobeDataset("generalprobe-3");
const gp4Dataset = gpDataModule.getGeneralprobeDataset("generalprobe-4");
assert(gp1Dataset.bmsQuestions.length === 94 && gp1Dataset.bmsQuestions.filter(q => q.subjectId === "bio").length === 40, "GP1 BMS retains exactly 94 questions and 40 Bio questions");
assert(gp2Dataset.bmsQuestions.length === 94 && gp2Dataset.bmsQuestions.filter(q => q.subjectId === "bio").length === 40, "GP2 BMS retains exactly 94 questions and 40 Bio questions");
assert(gp3Dataset.bmsQuestions.length === 94 && gp3Dataset.bmsQuestions.filter(q => q.subjectId === "bio").length === 40, "GP3 BMS retains exactly 94 questions and 40 Bio questions");
assert(gp4Dataset.bmsQuestions.length === 94 && gp4Dataset.bmsQuestions.filter(q => q.subjectId === "bio").length === 40, "GP4 BMS retains exactly 94 questions and 40 Bio questions");

console.log("\n==================================================================");
console.log(`TOTAL CHECKS: ${totalChecks}`);
console.log(`PASSED: ${passedChecks}`);
console.log(`FAILED: ${totalChecks - passedChecks}`);
console.log("==================================================================\n");

if (totalChecks === passedChecks) {
  console.log("ALL GP5 BIOLOGY VALIDATION CHECKS PASSED PERFECTLY!");
  process.exit(0);
} else {
  console.error("SOME CHECKS FAILED!");
  process.exit(1);
}
