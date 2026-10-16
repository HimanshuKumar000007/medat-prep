/**
 * Comprehensive Quality Assurance & Formal Logic Verification Suite
 * MedAT Implikationen erkennen (IE) — Generalprobe #2 (10 Questions)
 */

import {
  RAW_GENERALPROBE_2_IE_QUESTIONS,
  GENERALPROBE_2_IE_QUESTIONS,
  GENERALPROBE_2_IE_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe2IeQuestions";
import {
  RAW_GENERALPROBE_1_IE_QUESTIONS,
  GENERALPROBE_1_IE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1IeQuestions";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
} from "../src/data/generalprobe/generalprobeData";
import { IE_STORED_QUESTIONS } from "../src/data/questions/ie";

console.log("================================================================================");
console.log("MEDAT IE QUALITY ASSURANCE & FORMAL LOGIC VERIFICATION SUITE — GENERALPROBE #2");
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

const rawQuestions = RAW_GENERALPROBE_2_IE_QUESTIONS;
const storedQuestions = GENERALPROBE_2_IE_QUESTIONS;
const simData = GENERALPROBE_2_IE_SIMULATION_DATA;

// 1. Question Count & Metadata
console.log("--- 1. Question Count & Metadata ---");
assert(rawQuestions.length === 10, `Raw questions count is exactly 10 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 10, `Stored questions count is exactly 10 (found: ${storedQuestions.length})`);
assert(simData.questions.length === 10, `Simulation data questions count is exactly 10 (found: ${simData.questions.length})`);
assert(simData.timeLimitSeconds === 600, `Time limit is exactly 600s / 10 minutes (found: ${simData.timeLimitSeconds})`);

// 2. ID Uniqueness & Correct GP2 Naming Pattern
console.log("\n--- 2. ID Uniqueness & Naming Pattern ---");
const idSet = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-IE-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Raw Q${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!idSet.has(q.id), `ID ${q.id} is unique`);
  idSet.add(q.id);
});

storedQuestions.forEach((sq, idx) => {
  const expectedId = `KFF-IE-GP2-${String(idx + 1).padStart(3, "0")}`;
  const expectedLegacy = `ie-sim2-q${String(idx + 1).padStart(2, "0")}`;
  assert(sq.id === expectedId, `Stored Q${idx + 1} ID is ${expectedId} (actual: ${sq.id})`);
  assert(sq.legacyId === expectedLegacy, `Stored Q${idx + 1} legacyId is ${expectedLegacy} (actual: ${sq.legacyId})`);
  assert(sq.exam === "MEDAT-H", `Stored Q${idx + 1} exam is MEDAT-H (actual: ${sq.exam})`);
  assert(sq.section === "KFF", `Stored Q${idx + 1} section is KFF (actual: ${sq.section})`);
  assert(sq.subjectId === "kff-imp", `Stored Q${idx + 1} subjectId is kff-imp (actual: ${sq.subjectId})`);
  assert(sq.chapterId === "kff-imp-syll", `Stored Q${idx + 1} chapterId is kff-imp-syll (actual: ${sq.chapterId})`);
});

// 3. Answer Key Distribution (Balanced: exactly 2 A, 2 B, 2 C, 2 D, 2 E)
console.log("\n--- 3. Answer Key Distribution ---");
const keyDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  keyDist[q.correctAnswer] = (keyDist[q.correctAnswer] || 0) + 1;
});
console.log("  Answer Key Counts:", keyDist);
assert(keyDist.A === 2, `Option A count is 2 (actual: ${keyDist.A})`);
assert(keyDist.B === 2, `Option B count is 2 (actual: ${keyDist.B})`);
assert(keyDist.C === 2, `Option C count is 2 (actual: ${keyDist.C})`);
assert(keyDist.D === 2, `Option D count is 2 (actual: ${keyDist.D})`);
assert(keyDist.E === 2, `Option E count is 2 (actual: ${keyDist.E})`);

// Check non-consecutive repeating keys
for (let i = 0; i < rawQuestions.length - 1; i++) {
  const cur = rawQuestions[i].correctAnswer;
  const next = rawQuestions[i + 1].correctAnswer;
  assert(cur !== next, `No consecutive repeating keys: Q${i + 1} (${cur}) !== Q${i + 2} (${next})`);
}

// 4. Difficulty Calibration (Exactly 3 Leicht, 5 Mittel, 2 Schwer)
console.log("\n--- 4. Difficulty Calibration ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("  Difficulty Counts:", diffDist);
assert(diffDist.Leicht === 3, `Leicht count is exactly 3 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 5, `Mittel count is exactly 5 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 2, `Schwer count is exactly 2 (actual: ${diffDist.Schwer})`);

// 5. Formal Premise & Option Structure
console.log("\n--- 5. Formal Premise & Option Structure ---");
rawQuestions.forEach((q, idx) => {
  assert(q.premises.length === 2, `Q${idx + 1} has exactly 2 premises`);
  assert(q.premises[0].length > 10, `Q${idx + 1} Premise 1 is non-empty`);
  assert(q.premises[1].length > 10, `Q${idx + 1} Premise 2 is non-empty`);

  // Verify Options A-E
  assert(typeof q.options.A === "string" && q.options.A.startsWith("Alle "), `Q${idx + 1} Option A starts with 'Alle '`);
  assert(typeof q.options.B === "string" && q.options.B.startsWith("Alle "), `Q${idx + 1} Option B starts with 'Alle '`);
  assert(typeof q.options.B === "string" && q.options.B.includes(" keine "), `Q${idx + 1} Option B contains ' keine '`);
  assert(typeof q.options.C === "string" && q.options.C.startsWith("Einige "), `Q${idx + 1} Option C starts with 'Einige '`);
  assert(typeof q.options.D === "string" && q.options.D.startsWith("Einige "), `Q${idx + 1} Option D starts with 'Einige '`);
  assert(typeof q.options.D === "string" && q.options.D.includes(" keine "), `Q${idx + 1} Option D contains ' keine '`);
  assert(
    q.options.E === "Keine der Schlussfolgerungen A–D ist richtig.",
    `Q${idx + 1} Option E matches standard MedAT phrasing`
  );

  // StoredQuestion option index alignment
  const sq = storedQuestions[idx];
  const expectedIndex = ["A", "B", "C", "D", "E"].indexOf(q.correctAnswer);
  assert(sq.correctAnswer === expectedIndex, `Stored Q${idx + 1} correctAnswer index is ${expectedIndex} (actual: ${sq.correctAnswer})`);
  assert(sq.options[sq.correctAnswer] === q.options[q.correctAnswer], `Stored Q${idx + 1} options[correctAnswer] matches raw text`);
});

// 6. Syllogistic Moods and Formal Rule Types
console.log("\n--- 6. Syllogistic Moods & Logical Typology ---");
const expectedRules = [
  { q: 1, rule: "modus_barbara", key: "A", diff: "Leicht" },
  { q: 2, rule: "modus_celarent", key: "B", diff: "Leicht" },
  { q: 3, rule: "modus_darii", key: "C", diff: "Leicht" },
  { q: 4, rule: "modus_ferio", key: "D", diff: "Mittel" },
  { q: 5, rule: "fallacy_undistributed_middle", key: "E", diff: "Mittel" },
  { q: 6, rule: "modus_barbara", key: "A", diff: "Mittel" },
  { q: 7, rule: "modus_camestres", key: "B", diff: "Mittel" },
  { q: 8, rule: "modus_disamis", key: "C", diff: "Mittel" },
  { q: 9, rule: "modus_baroco", key: "D", diff: "Schwer" },
  { q: 10, rule: "fallacy_negative_premises", key: "E", diff: "Schwer" },
];

expectedRules.forEach((spec) => {
  const q = rawQuestions[spec.q - 1];
  assert(q.ruleType === spec.rule, `Q${spec.q} ruleType is ${spec.rule} (actual: ${q.ruleType})`);
  assert(q.correctAnswer === spec.key, `Q${spec.q} key is ${spec.key} (actual: ${q.correctAnswer})`);
  assert(q.difficulty === spec.diff, `Q${spec.q} difficulty is ${spec.diff} (actual: ${q.difficulty})`);
});

// 7. Explanations & Exhaustive Distractor Analysis
console.log("\n--- 7. Explanations & Distractor Analysis ---");
rawQuestions.forEach((q, idx) => {
  assert(q.explanation.length > 250, `Q${idx + 1} explanation is sufficiently detailed (${q.explanation.length} chars)`);
  assert(q.explanation.includes("Formale Analyse"), `Q${idx + 1} explanation includes Formale Analyse`);
  assert(q.explanation.includes("Distraktoren-Analyse"), `Q${idx + 1} explanation includes Distraktoren-Analyse`);
  assert(q.explanation.includes("Option A"), `Q${idx + 1} explanation covers Option A`);
  assert(q.explanation.includes("Option B"), `Q${idx + 1} explanation covers Option B`);
  assert(q.explanation.includes("Option C"), `Q${idx + 1} explanation covers Option C`);
  assert(q.explanation.includes("Option D"), `Q${idx + 1} explanation covers Option D`);
  assert(q.explanation.includes("Option E"), `Q${idx + 1} explanation covers Option E`);
});

// 8. Independence & Non-Regression with Generalprobe #1
console.log("\n--- 8. Independence & Non-Regression with Generalprobe #1 ---");
assert(RAW_GENERALPROBE_1_IE_QUESTIONS.length === 10, `GP1 raw count preserved at 10`);
assert(GENERALPROBE_1_IE_QUESTIONS.length === 10, `GP1 stored count preserved at 10`);

const gp1Premises = new Set<string>();
RAW_GENERALPROBE_1_IE_QUESTIONS.forEach((q) => {
  gp1Premises.add(q.premises.join(" | "));
});

rawQuestions.forEach((q, idx) => {
  const premisesStr = q.premises.join(" | ");
  assert(!gp1Premises.has(premisesStr), `Q${idx + 1} premises are completely new (no overlap with GP1)`);
});

const gp1Ids = new Set(RAW_GENERALPROBE_1_IE_QUESTIONS.map((q) => q.id));
rawQuestions.forEach((q) => {
  assert(!gp1Ids.has(q.id), `ID ${q.id} does not collide with GP1 IDs`);
});

// 9. Generalprobe #2 Full Dataset Integration
console.log("\n--- 9. Generalprobe #2 Full Dataset Integration ---");
const gp2 = buildGeneralprobe2Dataset();
assert(gp2.id === "generalprobe-2", `GP2 dataset ID is generalprobe-2`);
assert(gp2.ieQuestions.length === 10, `GP2 dataset has exactly 10 IE questions (found: ${gp2.ieQuestions.length})`);

gp2.ieQuestions.forEach((q, idx) => {
  const expectedId = `KFF-IE-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `GP2 dataset IE Q${idx + 1} ID is ${expectedId}`);
});

// Total scored questions in GP2
const bmsTotal = gp2.bmsQuestions.length;
const tvTotal = gp2.tvQuestions.length;
const kffTotal = gp2.fzQuestions.length + gp2.zfQuestions.length + gp2.wfQuestions.length + gp2.gmRecallQuestions.length + gp2.ieQuestions.length;
const sekTotal = gp2.erQuestions.length + gp2.eeQuestions.length + gp2.seQuestions.length;
const grandTotal = bmsTotal + tvTotal + kffTotal + sekTotal;

console.log(`  BMS Total: ${bmsTotal} (expected: 94)`);
console.log(`  TV Total: ${tvTotal} (expected: 12)`);
console.log(`  KFF Scored Total: ${kffTotal} (expected: 75)`);
console.log(`  SEK Total: ${sekTotal} (expected: 40)`);
console.log(`  Grand Total Scored: ${grandTotal} (expected: 221)`);

assert(bmsTotal === 94, `BMS total is 94`);
assert(tvTotal === 12, `TV total is 12`);
assert(gp2.fzQuestions.length === 15, `FZ count is 15`);
assert(gp2.zfQuestions.length === 10, `ZF count is 10`);
assert(gp2.wfQuestions.length === 15, `WF count is 15`);
assert(gp2.gmRecallQuestions.length === 25, `GM Recall count is 25`);
assert(gp2.gmCards.length === 8, `GM Cards count is 8`);
assert(gp2.ieQuestions.length === 10, `IE count is 10`);
assert(kffTotal === 75, `KFF scored total is 75`);
assert(sekTotal === 40, `SEK total is 40`);
assert(grandTotal === 221, `Grand total scored questions across GP2 is exactly 221`);

// 10. Question Store Resolution Check
console.log("\n--- 10. Question Store Resolution Check ---");
rawQuestions.forEach((q) => {
  const found = IE_STORED_QUESTIONS.find((item) => item.id === q.id);
  assert(found !== undefined, `Question ${q.id} is resolvable in IE_STORED_QUESTIONS`);
});

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("ALL TESTS PASSED! MedAT IE Generalprobe #2 is 100% verified and production-ready.");
} else {
  console.error(`FAILED with ${errorCount} errors!`);
  process.exitCode = 1;
}
console.log("================================================================================\n");
