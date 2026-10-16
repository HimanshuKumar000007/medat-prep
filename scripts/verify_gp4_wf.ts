/**
 * Comprehensive Quality Assurance & Lexical Verification Suite
 * MedAT Wortflüssigkeit (WF) — Generalprobe #4 (15 Questions)
 */

import {
  RAW_GENERALPROBE_4_WF_QUESTIONS,
  GENERALPROBE_4_WF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4WfQuestions";
import {
  RAW_GENERALPROBE_1_WF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1WfQuestions";
import {
  RAW_GENERALPROBE_2_WF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2WfQuestions";
import {
  RAW_GENERALPROBE_3_WF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3WfQuestions";
import {
  buildWfSimulationQuestions,
  buildGeneralprobe4Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";
import { WF_SIMULATION_1_QUESTIONS } from "../src/data/questions/wf/wfSimulation1";
import { WF_SIMULATION_2_QUESTIONS } from "../src/data/questions/wf/wfSimulation2";
import { WF_SIMULATION_3_QUESTIONS } from "../src/data/questions/wf/wfSimulation3";
import { WF_SIMULATION_4_QUESTIONS } from "../src/data/questions/wf/wfSimulation4";
import { WF_SIMULATION_5_QUESTIONS } from "../src/data/questions/wf/wfSimulation5";
import { WF_SIMULATION_6_QUESTIONS } from "../src/data/questions/wf/wfSimulation6";
import { WF_SIMULATION_7_QUESTIONS } from "../src/data/questions/wf/wfSimulation7";
import { WF_SIMULATION_8_QUESTIONS } from "../src/data/questions/wf/wfSimulation8";
import { WF_SIMULATION_9_QUESTIONS } from "../src/data/questions/wf/wfSimulation9";
import { WF_SIMULATION_10_QUESTIONS } from "../src/data/questions/wf/wfSimulation10";

console.log("================================================================================");
console.log("MEDAT WF QUALITY ASSURANCE & LEXICAL VERIFICATION SUITE — GENERALPROBE #4");
console.log("================================================================================\n");

let errorCount = 0;
function assert(cond: boolean, msg: string) {
  if (cond) {
    console.log(`  [PASS] ${msg}`);
  } else {
    console.error(`  [FAIL] ${msg}`);
    errorCount++;
  }
}

function getLetterMultiset(str: string): Record<string, number> {
  const counts: Record<string, number> = {};
  const cleaned = str.toUpperCase().replace(/[^A-Z]/g, "");
  for (const char of cleaned) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

function areMultisetsEqual(m1: Record<string, number>, m2: Record<string, number>): boolean {
  const keys1 = Object.keys(m1).sort();
  const keys2 = Object.keys(m2).sort();
  if (keys1.length !== keys2.length) return false;
  for (const k of keys1) {
    if (m1[k] !== m2[k]) return false;
  }
  return true;
}

const rawQuestions = RAW_GENERALPROBE_4_WF_QUESTIONS;
const storedQuestions = GENERALPROBE_4_WF_QUESTIONS;

// 1. Question Count
console.log("--- 1. Question Count ---");
assert(rawQuestions.length === 15, `Raw questions count is exactly 15 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 15, `Stored questions count is exactly 15 (found: ${storedQuestions.length})`);

// 2. ID Uniqueness & Correct GP4 Naming Pattern
console.log("\n--- 2. ID Uniqueness & Format ---");
const ids = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-WF-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!ids.has(q.id), `ID ${q.id} is unique`);
  ids.add(q.id);
});

storedQuestions.forEach((q, idx) => {
  const expectedId = `KFF-WF-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Stored question ${idx + 1} matches ID ${expectedId}`);
});

// 3. Difficulty Distribution (Required: exactly 4 Leicht, 8 Mittel, 3 Schwer)
console.log("\n--- 3. Difficulty Distribution ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("Difficulty Distribution:", diffDist);
assert(diffDist.Leicht === 4, `Leicht count is exactly 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 8, `Mittel count is exactly 8 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 3, `Schwer count is exactly 3 (actual: ${diffDist.Schwer})`);

// 4. Answer Key Distribution & Streak (Balanced: exactly 3 A, 3 B, 3 C, 3 D, 3 E)
console.log("\n--- 4. Answer Key Distribution & Streak ---");
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("Answer Distribution:", ansDist);
assert(ansDist.A === 3, `Option A count is exactly 3 (actual: ${ansDist.A})`);
assert(ansDist.B === 3, `Option B count is exactly 3 (actual: ${ansDist.B})`);
assert(ansDist.C === 3, `Option C count is exactly 3 (actual: ${ansDist.C})`);
assert(ansDist.D === 3, `Option D count is exactly 3 (actual: ${ansDist.D})`);
assert(ansDist.E === 3, `Option E count is exactly 3 (actual: ${ansDist.E})`);

let maxStreak = 1;
let currentStreak = 1;
for (let i = 1; i < rawQuestions.length; i++) {
  if (rawQuestions[i].correctAnswer === rawQuestions[i - 1].correctAnswer) {
    currentStreak++;
    if (currentStreak > maxStreak) maxStreak = currentStreak;
  } else {
    currentStreak = 1;
  }
}
assert(maxStreak === 1, `Max consecutive streak is 1 (actual: ${maxStreak})`);

// 5. Lexical & Multiset Integrity Checks
console.log("\n--- 5. Lexical & Multiset Verification ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const word = q.targetWord;
  const initial = q.correctInitial;

  // A-Z standard German letters only (no umlauts, no ß)
  const isAllAlpha = /^[A-Z]+$/.test(word);
  assert(isAllAlpha, `Q${qNum} (${q.id}) target word "${word}" uses strictly standard A-Z characters`);

  // Word length check (between 6 and 9 letters)
  assert(word.length >= 6 && word.length <= 9, `Q${qNum} (${q.id}) word length (${word.length}) is appropriate (6-9 letters)`);

  // Correct initial matches word[0]
  assert(initial === word[0], `Q${qNum} (${q.id}) correctInitial "${initial}" matches first letter of "${word}"`);

  // Multiset comparisons
  const mTarget = getLetterMultiset(word);
  const mLetters = getLetterMultiset(q.letters.join(""));
  const mScrambled = getLetterMultiset(q.scrambledLetters);

  assert(
    areMultisetsEqual(mTarget, mLetters),
    `Q${qNum} (${q.id}) multiset(letters) === multiset(targetWord) for "${word}"`
  );
  assert(
    areMultisetsEqual(mTarget, mScrambled),
    `Q${qNum} (${q.id}) multiset(scrambledLetters) === multiset(targetWord) for "${word}"`
  );

  // Scramble must not start with the target word's first letter
  assert(
    q.letters[0] !== initial,
    `Q${qNum} (${q.id}) scrambled letters do not start with target initial "${initial}"`
  );

  // Options validation
  const optA = q.options.A;
  const optB = q.options.B;
  const optC = q.options.C;
  const optD = q.options.D;
  const optE = q.options.E;

  assert(optE === null, `Q${qNum} (${q.id}) options.E is null (standard representation)`);

  const distinctOptions = new Set([optA, optB, optC, optD]);
  assert(distinctOptions.size === 4, `Q${qNum} (${q.id}) options A-D are 4 distinct letters (${optA}, ${optB}, ${optC}, ${optD})`);

  // Answer key check
  if (q.correctAnswer === "E") {
    assert(
      !distinctOptions.has(initial),
      `Q${qNum} (${q.id}) Option E is correct because true initial "${initial}" is omitted from options A-D`
    );
  } else {
    const chosenInitial = q.options[q.correctAnswer];
    assert(
      chosenInitial === initial,
      `Q${qNum} (${q.id}) Option ${q.correctAnswer} correctly provides true initial "${initial}"`
    );
  }

  // Explanation completeness
  assert(
    typeof q.explanation === "string" && q.explanation.length > 100,
    `Q${qNum} (${q.id}) explanation is comprehensive (${q.explanation.length} chars)`
  );
  assert(
    q.explanation.includes(word),
    `Q${qNum} (${q.id}) explanation explicitly mentions target word "${word}"`
  );
  assert(
    q.explanation.includes("Distraktoren-Analyse"),
    `Q${qNum} (${q.id}) explanation includes structured Distraktoren-Analyse`
  );
});

// 6. Non-regression with GP1, GP2, GP3, and other simulations
console.log("\n--- 6. Originality & Collision Audit against Existing Banks ---");
const gp1Words = new Set(RAW_GENERALPROBE_1_WF_QUESTIONS.map((q) => q.targetWord.toUpperCase()));
const gp2Words = new Set(RAW_GENERALPROBE_2_WF_QUESTIONS.map((q) => q.targetWord.toUpperCase()));
const gp3Words = new Set(RAW_GENERALPROBE_3_WF_QUESTIONS.map((q) => q.targetWord.toUpperCase()));
const gp4Words = new Set(rawQuestions.map((q) => q.targetWord.toUpperCase()));

assert(gp4Words.size === 15, "GP4 contains exactly 15 unique words");

const allExternalWords = new Set<string>();
[
  ...RAW_GENERALPROBE_1_WF_QUESTIONS,
  ...RAW_GENERALPROBE_2_WF_QUESTIONS,
  ...RAW_GENERALPROBE_3_WF_QUESTIONS,
  ...WF_SIMULATION_1_QUESTIONS,
  ...WF_SIMULATION_2_QUESTIONS,
  ...WF_SIMULATION_3_QUESTIONS,
  ...WF_SIMULATION_4_QUESTIONS,
  ...WF_SIMULATION_5_QUESTIONS,
  ...WF_SIMULATION_6_QUESTIONS,
  ...WF_SIMULATION_7_QUESTIONS,
  ...WF_SIMULATION_8_QUESTIONS,
  ...WF_SIMULATION_9_QUESTIONS,
  ...WF_SIMULATION_10_QUESTIONS,
].forEach(q => allExternalWords.add(q.targetWord.toUpperCase()));

let collisionFound = false;
for (const w of gp4Words) {
  if (allExternalWords.has(w)) {
    console.error(`  [COLLISION] Word "${w}" collides with existing question banks!`);
    collisionFound = true;
    errorCount++;
  }
}
assert(!collisionFound, "Zero target word collisions across GP1, GP2, GP3, and Simulations 1–10");

// 7. StoredQuestion Formatting & Schema Checks
console.log("\n--- 7. StoredQuestion Schema Verification ---");
storedQuestions.forEach((sq, idx) => {
  const expectedId = `KFF-WF-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(sq.id === expectedId, `Stored question ${idx + 1} has ID ${expectedId}`);
  assert(sq.options.length === 5, `Stored question ${idx + 1} has 5 options`);
  assert(sq.options[4] === "Keine der Antwortmöglichkeiten ist richtig", `Option E has standardized German text`);
  assert(sq.correctAnswer >= 0 && sq.correctAnswer <= 4, `CorrectAnswer index ${sq.correctAnswer} is between 0 and 4`);
  assert(sq.exam === "BOTH", "Exam is BOTH");
  assert(sq.section === "KFF", "Section is KFF");
  assert(sq.subjectId === "kff-wf", "SubjectId is kff-wf");
  assert(sq.chapterId === "kff-wf-basic", "ChapterId is kff-wf-basic");
  assert(sq.setOrder === 4, "setOrder is 4");
  assert(!!sq.wfData, `sq.wfData is populated`);
});

// 8. Simulator Integration via buildWfSimulationQuestions and datasets
console.log("\n--- 8. Simulator Integration ---");
const simQuestions = buildWfSimulationQuestions(4);
assert(simQuestions.length === 15, `buildWfSimulationQuestions(4) returns 15 questions (found: ${simQuestions.length})`);
assert(simQuestions.every((q, i) => q.id === `KFF-WF-GP4-${String(i + 1).padStart(3, "0")}`), "All returned questions have valid GP4 IDs");

const dataset4 = buildGeneralprobe4Dataset();
assert(dataset4.wfQuestions.length === 15, `buildGeneralprobe4Dataset().wfQuestions returns 15 questions`);
assert(dataset4.wfQuestions[0].id === "KFF-WF-GP4-001", `dataset4.wfQuestions starts with KFF-WF-GP4-001`);
assert(dataset4.wfQuestions[14].id === "KFF-WF-GP4-015", `dataset4.wfQuestions ends with KFF-WF-GP4-015`);

const directDataset4 = getGeneralprobeDataset("generalprobe-4");
assert(directDataset4.wfQuestions.length === 15, `getGeneralprobeDataset("generalprobe-4").wfQuestions returns 15 questions`);
assert(directDataset4.wfQuestions[0].id === "KFF-WF-GP4-001", `directDataset4.wfQuestions starts with KFF-WF-GP4-001`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("ALL WF GP4 VERIFICATION CHECKS PASSED WITH ZERO ERRORS! [100% SUCCESS] ✅");
} else {
  console.error(`QA FAILED WITH ${errorCount} ERRORS! ❌`);
  process.exit(1);
}
console.log("================================================================================\n");
