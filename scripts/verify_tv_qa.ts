/**
 * Automated Verification & Quality Assurance Suite for MedAT-H Textverständnis (TV) Generalprobe #1
 */

import {
  GENERALPROBE_1_TV_QUESTIONS,
  RAW_GENERALPROBE_1_TV_QUESTIONS,
  GENERALPROBE_1_TV_PASSAGES,
} from "../src/data/generalprobe/generalprobe1TvQuestions";

import {
  buildBmsSimulationQuestions,
  buildTvSimulationQuestions,
  buildGeneralprobe1Dataset,
} from "../src/data/generalprobe/generalprobeData";

import { buildQuestionsForSet } from "../src/dashboard/practiceData";
import { TV_QUESTIONS } from "../src/data/questions/loader";

let failed = false;
function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${msg}`);
    failed = true;
  } else {
    console.log(`✅ PASSED: ${msg}`);
  }
}

console.log("=== 1. VERIFYING TV QUESTION COUNT & IDS ===");
assert(GENERALPROBE_1_TV_QUESTIONS.length === 12, `Must have exactly 12 TV questions (got ${GENERALPROBE_1_TV_QUESTIONS.length})`);
assert(RAW_GENERALPROBE_1_TV_QUESTIONS.length === 12, `Must have exactly 12 raw TV questions (got ${RAW_GENERALPROBE_1_TV_QUESTIONS.length})`);

const expectedIds = Array.from({ length: 12 }, (_, i) => `TV-MEDAT-${String(i + 1).padStart(3, "0")}`);
GENERALPROBE_1_TV_QUESTIONS.forEach((q, idx) => {
  assert(q.id === expectedIds[idx], `Question index ${idx} ID must be ${expectedIds[idx]} (got ${q.id})`);
});

console.log("\n=== 2. VERIFYING PASSAGES ===");
assert(GENERALPROBE_1_TV_PASSAGES.length === 4, `Must have exactly 4 passages (got ${GENERALPROBE_1_TV_PASSAGES.length})`);
const passageMap = new Map(GENERALPROBE_1_TV_PASSAGES.map((p) => [p.id, p]));

GENERALPROBE_1_TV_PASSAGES.forEach((p) => {
  assert(p.title.length > 5, `Passage ${p.id} must have descriptive title`);
  assert(p.text.length > 500, `Passage ${p.id} must have substantial text (>500 chars, got ${p.text.length})`);
  assert(p.paragraphs.length >= 4, `Passage ${p.id} must have >= 4 paragraphs (got ${p.paragraphs.length})`);
  assert(p.questionIds.length === 3, `Passage ${p.id} must have exactly 3 questions (got ${p.questionIds.length})`);
});

console.log("\n=== 3. VERIFYING OPTIONS, ANSWER KEYS & DISTRACTORS ===");
const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const keySequence: string[] = [];

RAW_GENERALPROBE_1_TV_QUESTIONS.forEach((rq, idx) => {
  const sq = GENERALPROBE_1_TV_QUESTIONS[idx];
  
  // Options check
  const optionKeys = ["A", "B", "C", "D", "E"] as const;
  assert(Object.keys(rq.options).length === 5, `${rq.id}: exactly 5 options`);
  optionKeys.forEach((k) => {
    assert(typeof rq.options[k] === "string" && rq.options[k].trim().length > 0, `${rq.id} Option ${k} must not be empty`);
  });

  // StoredQuestion options check
  assert(sq.options.length === 5, `${sq.id}: StoredQuestion options array length must be 5`);
  assert(sq.options.every((opt) => typeof opt === "string" && opt.length > 0), `${sq.id}: all options non-empty strings`);

  // Correct answer check
  assert(["A", "B", "C", "D", "E"].includes(rq.correct_answer), `${rq.id}: correct_answer must be A-E`);
  const expectedIndex = ["A", "B", "C", "D", "E"].indexOf(rq.correct_answer);
  assert(sq.correctAnswer === expectedIndex, `${sq.id}: StoredQuestion correctAnswer index must match (${expectedIndex} vs ${sq.correctAnswer})`);

  keyCounts[rq.correct_answer]++;
  keySequence.push(rq.correct_answer);

  // Passage association
  assert(passageMap.has(rq.passageId), `${rq.id}: must reference valid passage ID ${rq.passageId}`);
  assert(sq.passage === rq.passageText, `${sq.id}: StoredQuestion must contain full passage text`);

  // Explanation checks
  assert(rq.explanation_correct.trim().length > 30, `${rq.id}: explanation_correct must be detailed`);
  const incorrectKeys = Object.keys(rq.explanations_incorrect);
  assert(incorrectKeys.length === 4, `${rq.id}: must have exactly 4 distractor explanations (got ${incorrectKeys.length})`);
  assert(!incorrectKeys.includes(rq.correct_answer), `${rq.id}: distractor explanations must not include correct key ${rq.correct_answer}`);

  optionKeys.filter((k) => k !== rq.correct_answer).forEach((k) => {
    assert(
      typeof rq.explanations_incorrect[k] === "string" && rq.explanations_incorrect[k].trim().length > 15,
      `${rq.id}: Distractor explanation for Option ${k} must be comprehensive`
    );
  });

  // StoredQuestion full explanation contains both correct and distractor analyses
  assert(sq.explanation.includes(rq.explanation_correct), `${sq.id}: full explanation must include explanation_correct`);
  assert(sq.explanation.includes("Distraktor-Analyse"), `${sq.id}: full explanation must include distractor section`);
});

console.log("\n=== 4. VERIFYING ANSWER KEY DISTRIBUTION & SEQUENCE ===");
console.log("Key Counts:", keyCounts);
console.log("Key Sequence:", keySequence.join(" -> "));

assert(keyCounts.A === 2, `Key A count must be 2 (got ${keyCounts.A})`);
assert(keyCounts.B === 3, `Key B count must be 3 (got ${keyCounts.B})`);
assert(keyCounts.C === 2, `Key C count must be 2 (got ${keyCounts.C})`);
assert(keyCounts.D === 3, `Key D count must be 3 (got ${keyCounts.D})`);
assert(keyCounts.E === 2, `Key E count must be 2 (got ${keyCounts.E})`);

// Ensure no consecutive identical keys
for (let i = 0; i < keySequence.length - 1; i++) {
  assert(keySequence[i] !== keySequence[i + 1], `No consecutive duplicate answers: Q${i + 1} (${keySequence[i]}) vs Q${i + 2} (${keySequence[i + 1]})`);
}

console.log("\n=== 5. VERIFYING DIFFICULTY DISTRIBUTION ===");
const diffCounts = { Leicht: 0, Mittel: 0, Schwer: 0 };
GENERALPROBE_1_TV_QUESTIONS.forEach((q) => {
  diffCounts[q.difficulty]++;
});
console.log("Difficulty Counts:", diffCounts);
assert(diffCounts.Leicht === 3, `Must have exactly 3 Leicht questions (got ${diffCounts.Leicht})`);
assert(diffCounts.Mittel === 6, `Must have exactly 6 Mittel questions (got ${diffCounts.Mittel})`);
assert(diffCounts.Schwer === 3, `Must have exactly 3 Schwer questions (got ${diffCounts.Schwer})`);

console.log("\n=== 6. VERIFYING SIMULATION & DATASET INTEGRATION ===");
const simTv = buildTvSimulationQuestions(1);
assert(simTv.length === 12, `buildTvSimulationQuestions(1) must return 12 questions (got ${simTv.length})`);
assert(simTv[0].id === "TV-MEDAT-001", `First question ID must be TV-MEDAT-001`);
assert(simTv[11].id === "TV-MEDAT-012", `Last question ID must be TV-MEDAT-012`);

const dataset = buildGeneralprobe1Dataset();
assert(dataset.tvQuestions.length === 12, `GENERALPROBE_1_DATASET must contain 12 TV questions (got ${dataset.tvQuestions.length})`);
assert(dataset.bmsQuestions.length === 94, `BMS questions must remain exactly 94 (got ${dataset.bmsQuestions.length})`);

// Verify BMS sub-counts
const bms = buildBmsSimulationQuestions(1);
const bioCount = bms.filter((q) => q.subjectId === "bio").length;
const chemCount = bms.filter((q) => q.subjectId === "chem").length;
const physCount = bms.filter((q) => q.subjectId === "phys").length;
const mathCount = bms.filter((q) => q.subjectId === "math").length;
assert(bioCount === 40, `Bio must remain 40 (got ${bioCount})`);
assert(chemCount === 24, `Chem must remain 24 (got ${chemCount})`);
assert(physCount === 18, `Phys must remain 18 (got ${physCount})`);
assert(mathCount === 12, `Math must remain 12 (got ${mathCount})`);

// Verify Total scored tasks in Generalprobe #1
const totalScored =
  dataset.bmsQuestions.length + // 94
  dataset.tvQuestions.length +  // 12
  dataset.fzQuestions.length +  // 15
  dataset.zfQuestions.length +  // 10
  dataset.wfQuestions.length +  // 15
  dataset.gmRecallQuestions.length + // 25
  dataset.ieQuestions.length +  // 10
  dataset.erQuestions.length +  // 12
  dataset.eeQuestions.length +  // 14
  dataset.seQuestions.length;   // 14
assert(totalScored === 221, `Total scored Generalprobe 1 tasks must be 221 (got ${totalScored})`);
assert(dataset.gmCards.length === 8, `Total GM memory cards must be 8 (got ${dataset.gmCards.length})`);

// Verify Practice Set loader
const practiceSet1 = buildQuestionsForSet("tv-scipass", 1, TV_QUESTIONS);
assert(practiceSet1.length === 12, `Practice set 1 for tv-scipass must return 12 questions (got ${practiceSet1.length})`);
assert(practiceSet1[0].id === "TV-MEDAT-001", `Practice set 1 first question must be TV-MEDAT-001`);

console.log("\n==========================================");
if (failed) {
  console.error("❌ TV QA VALIDATION FAILED! See errors above.");
  process.exit(1);
} else {
  console.log("🎉 ALL TV QA VALIDATION TESTS PASSED PERFECTLY!");
  process.exit(0);
}
