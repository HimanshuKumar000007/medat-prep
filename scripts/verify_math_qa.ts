import { RAW_GENERALPROBE_1_MATH_QUESTIONS, GENERALPROBE_1_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe1MathQuestions";
import { buildBmsSimulationQuestions } from "../src/data/generalprobe/generalprobeData";

console.log("=== Running Final Mathematics QA Validation ===");

// 1. Math questions checks
if (RAW_GENERALPROBE_1_MATH_QUESTIONS.length !== 12) {
  throw new Error("Expected 12 raw questions, got " + RAW_GENERALPROBE_1_MATH_QUESTIONS.length);
}
if (GENERALPROBE_1_MATH_QUESTIONS.length !== 12) {
  throw new Error("Expected 12 stored questions, got " + GENERALPROBE_1_MATH_QUESTIONS.length);
}

const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const keysSeq: string[] = [];
const chapterCounts: Record<string, number> = {};
const diffCounts: Record<string, number> = {};

RAW_GENERALPROBE_1_MATH_QUESTIONS.forEach((q, idx) => {
  const expectedId = "MATH-BMS-" + String(idx + 1).padStart(3, "0");
  if (q.id !== expectedId) throw new Error("ID mismatch: " + q.id + " vs " + expectedId);

  const optKeys = Object.keys(q.options).sort();
  if (JSON.stringify(optKeys) !== JSON.stringify(["A", "B", "C", "D", "E"])) {
    throw new Error("Invalid options for " + q.id);
  }
  const optValues = Object.values(q.options);
  if (new Set(optValues).size !== 5) {
    throw new Error("Duplicate options in " + q.id);
  }
  for (const v of optValues) {
    if (!v || v.trim().length === 0) throw new Error("Empty option in " + q.id);
  }

  const expIncorrectKeys = ["A", "B", "C", "D", "E"].filter((k) => k !== q.correct_answer).sort();
  const actualIncorrectKeys = Object.keys(q.explanations_incorrect).sort();
  if (JSON.stringify(expIncorrectKeys) !== JSON.stringify(actualIncorrectKeys)) {
    throw new Error(
      "Mismatched distractor keys for " + q.id + ": expected " + expIncorrectKeys + ", got " + actualIncorrectKeys
    );
  }
  for (const k of expIncorrectKeys) {
    if (!q.explanations_incorrect[k] || q.explanations_incorrect[k].trim().length === 0) {
      throw new Error("Empty explanation for distractor " + k + " in " + q.id);
    }
  }

  keyCounts[q.correct_answer]++;
  keysSeq.push(q.correct_answer);
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;

  // Stored question check
  const sq = GENERALPROBE_1_MATH_QUESTIONS[idx];
  chapterCounts[sq.chapterId] = (chapterCounts[sq.chapterId] || 0) + 1;
  const letterToIdx: Record<string, number> = { A: 0, B: 1, C: 2, D: 3, E: 4 };
  if (sq.correctAnswer !== letterToIdx[q.correct_answer]) {
    throw new Error("StoredQuestion correctAnswer mismatch in " + q.id);
  }
  if (sq.options.length !== 5) {
    throw new Error("StoredQuestion options length !== 5 in " + q.id);
  }
});

console.log("Key counts:", keyCounts);
console.log("Key sequence:", keysSeq.join(", "));
console.log("Difficulty counts:", diffCounts);
console.log("Chapter counts:", chapterCounts);

// MATH-BMS-001 specific wording check
const q1 = RAW_GENERALPROBE_1_MATH_QUESTIONS[0];
if (!q1.stem.includes("um den Faktor $800$ verdünnt") && !q1.stem.includes("um den Faktor 800 verdünnt")) {
  throw new Error("Q1 does not contain factor 800 dilution text");
}
if (q1.stem.includes("im Verhältnis 1 : 800")) {
  throw new Error("Q1 still contains ambiguous ratio text");
}
console.log("Q1 wording verified:");
console.log("  Stem:", q1.stem);
console.log("  Explanation:", q1.explanation_correct);

// 2. Full BMS Simulation 1 check
const bms1 = buildBmsSimulationQuestions(1);
console.log("BMS Sim 1 total questions:", bms1.length);
if (bms1.length !== 94) {
  throw new Error("Expected 94 BMS questions, got " + bms1.length);
}
const bio = bms1.filter((q) => q.subjectId === "bio");
const chem = bms1.filter((q) => q.subjectId === "chem");
const phys = bms1.filter((q) => q.subjectId === "phys");
const math = bms1.filter((q) => q.subjectId === "math");
console.log(
  "Breakdown: Bio=" + bio.length + ", Chem=" + chem.length + ", Phys=" + phys.length + ", Math=" + math.length
);
if (bio.length !== 40 || chem.length !== 24 || phys.length !== 18 || math.length !== 12) {
  throw new Error("Incorrect BMS subject counts");
}

const allIds = bms1.map((q) => q.id);
if (new Set(allIds).size !== 94) {
  throw new Error("Duplicate IDs in BMS Sim 1");
}

console.log("All QA checks PASSED successfully!");
