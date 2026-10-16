/**
 * Comprehensive Quality Assurance & Lexical/Anagram Verification Suite
 * MedAT Wortflüssigkeit (WF) — Generalprobe #1 (15 Questions)
 */

import { RAW_GENERALPROBE_1_WF_QUESTIONS, GENERALPROBE_1_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe1WfQuestions";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT WF QUALITY ASSURANCE & ANAGRAM VERIFICATION SUITE — GENERALPROBE #1");
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
  const cleaned = str.toUpperCase().replace(/[^A-ZÄÖÜß]/g, "");
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

// 1. Question Count & Identification
assert(RAW_GENERALPROBE_1_WF_QUESTIONS.length === 15, `RAW questions count is exactly 15 (actual: ${RAW_GENERALPROBE_1_WF_QUESTIONS.length})`);
assert(GENERALPROBE_1_WF_QUESTIONS.length === 15, `GENERALPROBE_1_WF_QUESTIONS count is exactly 15 (actual: ${GENERALPROBE_1_WF_QUESTIONS.length})`);

const seenIds = new Set<string>();
RAW_GENERALPROBE_1_WF_QUESTIONS.forEach((q, idx) => {
  const expectedId = `KFF-WF-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!seenIds.has(q.id), `Question ID ${q.id} is unique`);
  seenIds.add(q.id);
});

// 2. Answer Key Distribution (Balanced: 3 A, 3 B, 3 C, 3 D, 3 E)
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
RAW_GENERALPROBE_1_WF_QUESTIONS.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("\n--- Answer Key Distribution ---");
console.log(ansDist);
assert(ansDist.A === 3, `Option A count is 3 (actual: ${ansDist.A})`);
assert(ansDist.B === 3, `Option B count is 3 (actual: ${ansDist.B})`);
assert(ansDist.C === 3, `Option C count is 3 (actual: ${ansDist.C})`);
assert(ansDist.D === 3, `Option D count is 3 (actual: ${ansDist.D})`);
assert(ansDist.E === 3, `Option E count is 3 (actual: ${ansDist.E})`);

// Check non-repeating consecutive keys
for (let i = 0; i < RAW_GENERALPROBE_1_WF_QUESTIONS.length - 1; i++) {
  const cur = RAW_GENERALPROBE_1_WF_QUESTIONS[i].correctAnswer;
  const nxt = RAW_GENERALPROBE_1_WF_QUESTIONS[i + 1].correctAnswer;
  assert(cur !== nxt, `No consecutive duplicate answer keys: Q${i + 1} (${cur}) vs Q${i + 2} (${nxt})`);
}

// 3. Difficulty Distribution (4 Leicht, 7 Mittel, 4 Schwer)
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
RAW_GENERALPROBE_1_WF_QUESTIONS.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("\n--- Difficulty Distribution ---");
console.log(diffDist);
assert(diffDist.Leicht === 4, `Leicht count is 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 7, `Mittel count is 7 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 4, `Schwer count is 4 (actual: ${diffDist.Schwer})`);

// 4. Lexical Integrity & Anagram Multiset Verification
console.log("\n--- Lexical & Anagram Logic Verification ---");
const seenWords = new Set<string>();

RAW_GENERALPROBE_1_WF_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  const word = q.targetWord;
  assert(!seenWords.has(word), `Q${qNum} (${q.id}) target word "${word}" is unique`);
  seenWords.add(word);

  // No Umlauts or ß
  const hasUmlauts = /[ÄÖÜßäöü]/.test(word);
  assert(!hasUmlauts, `Q${qNum} (${q.id}) target word "${word}" uses only standard A-Z characters`);

  // Length 6-10
  assert(word.length >= 6 && word.length <= 10, `Q${qNum} (${q.id}) word length ${word.length} is in range 6..10`);

  // Multiset equality
  const mWord = getLetterMultiset(word);
  const mScrambled = getLetterMultiset(q.scrambledLetters);
  const mLetters = getLetterMultiset(q.letters.join(""));

  assert(areMultisetsEqual(mWord, mScrambled), `Q${qNum} (${q.id}) scrambled letters multiset matches "${word}"`);
  assert(areMultisetsEqual(mWord, mLetters), `Q${qNum} (${q.id}) letters array multiset matches "${word}"`);

  // Scramble must not start with target word's initial
  assert(!q.scrambledLetters.startsWith(word[0]), `Q${qNum} (${q.id}) scramble does not start with initial letter '${word[0]}'`);

  // Initial letter
  const expectedInitial = word[0].toUpperCase();
  assert(q.correctInitial === expectedInitial, `Q${qNum} (${q.id}) correctInitial '${q.correctInitial}' matches word[0] '${expectedInitial}'`);

  // Check Options A–D distinctness
  const letterKeys = ["A", "B", "C", "D"] as const;
  const optLetters = letterKeys.map((k) => q.options[k]);
  const uniqueOptLetters = new Set(optLetters);
  assert(uniqueOptLetters.size === 4, `Q${qNum} (${q.id}) Options A–D are 4 distinct letters: [${optLetters.join(", ")}]`);

  // Check Option E representation
  assert(q.options.E === null, `Q${qNum} (${q.id}) Option E is null (represented as 'Keine der Antwortmöglichkeiten ist richtig')`);

  // Correct answer verification
  if (q.correctAnswer === "E") {
    // Initial must NOT appear in A–D
    const containsInitial = optLetters.includes(q.correctInitial);
    assert(!containsInitial, `Q${qNum} (${q.id}) Option E is correct: Initial '${q.correctInitial}' is absent from A–D [${optLetters.join(", ")}]`);
  } else {
    // Selected option must contain initial
    const chosenLetter = q.options[q.correctAnswer as "A" | "B" | "C" | "D"];
    assert(chosenLetter === q.correctInitial, `Q${qNum} (${q.id}) Option ${q.correctAnswer} ('${chosenLetter}') matches correct initial '${q.correctInitial}'`);
    // Other options must not contain initial
    letterKeys.filter((k) => k !== q.correctAnswer).forEach((k) => {
      assert(q.options[k] !== q.correctInitial, `Q${qNum} (${q.id}) Distractor ${k} ('${q.options[k]}') != correct initial`);
    });
  }

  // Explanation verification
  assert(q.explanation.includes("Wortfindung & Herleitung:"), `Q${qNum} (${q.id}) explanation has derivation header`);
  assert(q.explanation.includes("Buchstaben-Verifikation (Multimenge):"), `Q${qNum} (${q.id}) explanation has multiset verification`);
  assert(q.explanation.includes("Distraktoren-Analyse:"), `Q${qNum} (${q.id}) explanation has distractor analysis`);
  assert(q.explanation.includes("Option A"), `Q${qNum} (${q.id}) explains Option A`);
  assert(q.explanation.includes("Option B"), `Q${qNum} (${q.id}) explains Option B`);
  assert(q.explanation.includes("Option C"), `Q${qNum} (${q.id}) explains Option C`);
  assert(q.explanation.includes("Option D"), `Q${qNum} (${q.id}) explains Option D`);
  assert(q.explanation.includes("Option E"), `Q${qNum} (${q.id}) explains Option E`);
});

// 5. StoredQuestion Formatting Verification
console.log("\n--- StoredQuestion Format Verification ---");
GENERALPROBE_1_WF_QUESTIONS.forEach((sq, idx) => {
  const qNum = idx + 1;
  assert(sq.options.length === 5, `SQ Q${qNum} (${sq.id}) has exactly 5 options`);
  assert(sq.options[4] === "Keine der Antwortmöglichkeiten ist richtig", `SQ Q${qNum} (${sq.id}) Option 5 is 'Keine der Antwortmöglichkeiten ist richtig'`);
  assert(sq.correctAnswer >= 0 && sq.correctAnswer <= 4, `SQ Q${qNum} (${sq.id}) correctAnswer index ${sq.correctAnswer} is between 0 and 4`);
  assert(sq.subjectId === "kff-wf", `SQ Q${qNum} (${sq.id}) subjectId is 'kff-wf'`);
  assert(sq.chapterId === "kff-wf-basic", `SQ Q${qNum} (${sq.id}) chapterId is 'kff-wf-basic'`);
  assert(sq.section === "KFF", `SQ Q${qNum} (${sq.id}) section is 'KFF'`);
  assert(!!sq.wfData, `SQ Q${qNum} (${sq.id}) preserves wfData`);
});

// 6. Generalprobe #1 Integration Verification
console.log("\n--- Generalprobe #1 Full Dataset Integration Verification ---");
const gp1 = buildGeneralprobe1Dataset();

const totalScoredQuestions =
  gp1.bmsQuestions.length +
  gp1.tvQuestions.length +
  gp1.fzQuestions.length +
  gp1.zfQuestions.length +
  gp1.wfQuestions.length +
  gp1.gmStoredQuestions.length +
  gp1.ieQuestions.length +
  gp1.erQuestions.length +
  gp1.eeQuestions.length +
  gp1.seQuestions.length;

assert(totalScoredQuestions === 221, `Generalprobe #1 has exactly 221 scored questions (actual: ${totalScoredQuestions})`);
assert(gp1.gmCards.length === 8, `Generalprobe #1 has 8 GM cards (actual: ${gp1.gmCards.length})`);

// Breakdown check
assert(gp1.wfQuestions.length === 15, `Generalprobe #1 WF section contains exactly 15 questions (actual: ${gp1.wfQuestions.length})`);
assert(gp1.zfQuestions.length === 10, `Generalprobe #1 ZF section contains exactly 10 questions (actual: ${gp1.zfQuestions.length})`);
assert(gp1.fzQuestions.length === 15, `Generalprobe #1 FZ section contains exactly 15 questions (actual: ${gp1.fzQuestions.length})`);

// Check WF IDs
const wfIds = gp1.wfQuestions.map((q) => q.id);
console.log("WF IDs in Generalprobe #1:", wfIds.join(", "));
assert(wfIds[0] === "KFF-WF-001" && wfIds[14] === "KFF-WF-015", "WF IDs are KFF-WF-001 through KFF-WF-015");

const bioGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "bio");
const chemGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "chem");
const physGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "phys");
const mathGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "math");

assert(bioGp1.length === 40, `BMS Biology remains exactly 40 questions (actual: ${bioGp1.length})`);
assert(chemGp1.length === 24, `BMS Chemistry remains exactly 24 questions (actual: ${chemGp1.length})`);
assert(physGp1.length === 18, `BMS Physics remains exactly 18 questions (actual: ${physGp1.length})`);
assert(mathGp1.length === 12, `BMS Mathematics remains exactly 12 questions (actual: ${mathGp1.length})`);
assert(gp1.tvQuestions.length === 12, `Textverständnis remains exactly 12 questions (actual: ${gp1.tvQuestions.length})`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT WF QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT WF QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
