/**
 * Comprehensive Quality Assurance & Lexical Verification Suite
 * MedAT Wortflüssigkeit (WF) — Generalprobe #2 (15 Questions)
 */

import {
  RAW_GENERALPROBE_2_WF_QUESTIONS,
  GENERALPROBE_2_WF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2WfQuestions";
import {
  RAW_GENERALPROBE_1_WF_QUESTIONS,
  GENERALPROBE_1_WF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1WfQuestions";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
} from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT WF QUALITY ASSURANCE & LEXICAL VERIFICATION SUITE — GENERALPROBE #2");
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

const rawQuestions = RAW_GENERALPROBE_2_WF_QUESTIONS;
const storedQuestions = GENERALPROBE_2_WF_QUESTIONS;

// 1. Question Count
console.log("--- 1. Question Count ---");
assert(rawQuestions.length === 15, `Raw questions count is exactly 15 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 15, `Stored questions count is exactly 15 (found: ${storedQuestions.length})`);

// 2. ID Uniqueness & Correct GP2 Naming Pattern
console.log("\n--- 2. ID Uniqueness & Format ---");
const ids = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-WF-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!ids.has(q.id), `ID ${q.id} is unique`);
  ids.add(q.id);
});

storedQuestions.forEach((q, idx) => {
  const expectedId = `KFF-WF-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Stored question ${idx + 1} matches ID ${expectedId}`);
});

// 3. Difficulty Distribution (Required: exactly 4 Leicht, 8 Mittel, 3 Schwer)
console.log("\n--- 3. Difficulty Distribution ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log(diffDist);
assert(diffDist.Leicht === 4, `Leicht count is exactly 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 8, `Mittel count is exactly 8 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 3, `Schwer count is exactly 3 (actual: ${diffDist.Schwer})`);

// 4. Answer Key Distribution (Balanced: exactly 3 A, 3 B, 3 C, 3 D, 3 E)
console.log("\n--- 4. Answer Key Distribution ---");
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log(ansDist);
assert(ansDist.A === 3, `Option A count is exactly 3 (actual: ${ansDist.A})`);
assert(ansDist.B === 3, `Option B count is exactly 3 (actual: ${ansDist.B})`);
assert(ansDist.C === 3, `Option C count is exactly 3 (actual: ${ansDist.C})`);
assert(ansDist.D === 3, `Option D count is exactly 3 (actual: ${ansDist.D})`);
assert(ansDist.E === 3, `Option E count is exactly 3 (actual: ${ansDist.E})`);

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

  // Options validation
  const optA = q.options.A;
  const optB = q.options.B;
  const optC = q.options.C;
  const optD = q.options.D;
  const optE = q.options.E;

  assert(optE === null, `Q${qNum} (${q.id}) options.E is null (rendered as "Keine Antwort...")`);

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

// 6. Non-regression with GP1 & Zero Target Word Overlap
console.log("\n--- 6. Generalprobe #1 Non-Regression & Word Overlap Audit ---");
assert(RAW_GENERALPROBE_1_WF_QUESTIONS.length === 15, "GP1 raw WF has exactly 15 questions");
assert(GENERALPROBE_1_WF_QUESTIONS.length === 15, "GP1 stored WF has exactly 15 questions");

const gp1Words = new Set(RAW_GENERALPROBE_1_WF_QUESTIONS.map((q) => q.targetWord));
const gp2Words = new Set(rawQuestions.map((q) => q.targetWord));

assert(gp1Words.size === 15, "GP1 has 15 unique words");
assert(gp2Words.size === 15, "GP2 has 15 unique words");

let collisionFound = false;
for (const w of gp2Words) {
  if (gp1Words.has(w)) {
    console.error(`  [COLLISION] Word "${w}" appears in both GP1 and GP2!`);
    collisionFound = true;
    errorCount++;
  }
}
assert(!collisionFound, "Zero target word collision between Generalprobe #1 and Generalprobe #2");

// 7. StoredQuestion Formatting & Dataset Integration
console.log("\n--- 7. StoredQuestion Formatting & Generalprobe Dataset Verification ---");
const gp1Dataset = buildGeneralprobe1Dataset();
const gp2Dataset = buildGeneralprobe2Dataset();

assert(gp1Dataset.wfQuestions.length === 15, `GP1 dataset contains 15 WF questions`);
assert(gp2Dataset.wfQuestions.length === 15, `GP2 dataset contains 15 WF questions`);

gp2Dataset.wfQuestions.forEach((sq, idx) => {
  const expectedId = `KFF-WF-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(sq.id === expectedId, `GP2 dataset WF Q${idx + 1} has ID ${expectedId}`);
  assert(sq.options.length === 5, `GP2 dataset WF Q${idx + 1} has 5 options`);
  assert(sq.options[4] === "Keine der Antwortmöglichkeiten ist richtig", `Option E has standardized text`);
  assert(sq.correctAnswer >= 0 && sq.correctAnswer <= 4, `CorrectAnswer index ${sq.correctAnswer} is between 0 and 4`);
  assert(!!sq.wfData, `sq.wfData is populated`);
});

// Calculate total scored tasks in GP2
const totalScoredGp2 =
  gp2Dataset.bmsQuestions.length +
  gp2Dataset.tvQuestions.length +
  gp2Dataset.fzQuestions.length +
  gp2Dataset.zfQuestions.length +
  gp2Dataset.wfQuestions.length +
  gp2Dataset.gmRecallQuestions.length +
  gp2Dataset.ieQuestions.length +
  gp2Dataset.erQuestions.length +
  gp2Dataset.eeQuestions.length +
  gp2Dataset.seQuestions.length;

console.log(`\nGP2 Total Scored Tasks: ${totalScoredGp2}`);
assert(totalScoredGp2 === 221, `GP2 dataset contains exactly 221 scored tasks (MedAT-H full exam specification)`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("🎉 ALL QUALITY ASSURANCE CHECKS PASSED WITH ZERO ERRORS!");
} else {
  console.error(`❌ QA FAILED WITH ${errorCount} ERRORS!`);
  process.exit(1);
}
console.log("================================================================================\n");
