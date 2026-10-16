/**
 * Comprehensive Quality Assurance & Emotion Regulation Assessment Verification Suite
 * MedAT Emotionen regulieren (ER) — Generalprobe #4 (12 Questions, 18 Minutes)
 */

import {
  RAW_GENERALPROBE_4_ER_QUESTIONS,
  GENERALPROBE_4_ER_QUESTIONS,
  GENERALPROBE_4_ER_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe4ErQuestions";
import {
  RAW_GENERALPROBE_3_ER_QUESTIONS,
  GENERALPROBE_3_ER_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3ErQuestions";
import {
  RAW_GENERALPROBE_2_ER_QUESTIONS,
  GENERALPROBE_2_ER_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2ErQuestions";
import {
  RAW_GENERALPROBE_1_ER_QUESTIONS,
  GENERALPROBE_1_ER_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1ErQuestions";
import { ER_OPTION_KEYS, type ErOptionKey } from "../src/data/questions/er/types";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
  buildGeneralprobe3Dataset,
  buildGeneralprobe4Dataset,
  buildErSimulationQuestions,
} from "../src/data/generalprobe/generalprobeData";
import { ER_STORED_QUESTIONS } from "../src/data/questions/er";
import { evaluateFullGeneralprobe } from "../src/data/generalprobe/types";

console.log("================================================================================");
console.log("MEDAT ER QUALITY ASSURANCE & EMOTION REGULATION SUITE — GENERALPROBE #4");
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

const rawQuestions = RAW_GENERALPROBE_4_ER_QUESTIONS;
const storedQuestions = GENERALPROBE_4_ER_QUESTIONS;
const simData = GENERALPROBE_4_ER_SIMULATION_DATA;

// 1. Question Count & Identification
console.log("--- 1. Question Count & Identification ---");
assert(rawQuestions.length === 12, `Raw questions count is exactly 12 (actual: ${rawQuestions.length})`);
assert(storedQuestions.length === 12, `Stored questions count is exactly 12 (actual: ${storedQuestions.length})`);
assert(simData.questions.length === 12, `Simulation data questions count is exactly 12 (actual: ${simData.questions.length})`);
assert(simData.timeLimitSeconds === 1080, `Time limit is exactly 1080s / 18 minutes (actual: ${simData.timeLimitSeconds})`);

// IDs
const idSet = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `SEK-ER-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!idSet.has(q.id), `Question ID ${q.id} is globally unique`);
  idSet.add(q.id);
});

storedQuestions.forEach((sq, idx) => {
  const expectedId = `SEK-ER-GP4-${String(idx + 1).padStart(3, "0")}`;
  const expectedLegacy = `er-sim4-q${String(idx + 1).padStart(2, "0")}`;
  assert(sq.id === expectedId, `Stored Q${idx + 1} ID is ${expectedId} (actual: ${sq.id})`);
  assert(sq.legacyId === expectedLegacy, `Stored Q${idx + 1} legacyId is ${expectedLegacy} (actual: ${sq.legacyId})`);
  assert(sq.exam === "BOTH", `Stored Q${idx + 1} exam is BOTH (actual: ${sq.exam})`);
  assert(sq.section === "SEK", `Stored Q${idx + 1} section is SEK (actual: ${sq.section})`);
  assert(sq.subjectId === "sek-emo-reg", `Stored Q${idx + 1} subjectId is sek-emo-reg (actual: ${sq.subjectId})`);
  assert(sq.chapterId === "sek-reg-stress", `Stored Q${idx + 1} chapterId is sek-reg-stress (actual: ${sq.chapterId})`);
});

// 2. Scenario, Goal, Emotion & Strategy Specification
console.log("\n--- 2. Scenario, Goal, Emotion & Strategy Specification ---");
const VALID_STRATEGIES = new Set([
  "emotional_reappraisal",
  "pause_and_prioritize",
  "constructive_communication",
  "problem_focused_coping",
  "perspective_taking",
  "acceptance",
  "emotional_expression",
  "impulse_control",
  "goal_preservation",
  "social_support",
]);

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.scenario && q.scenario.length > 50,
    `Q${qNum} (${q.id}) has substantial scenario text (${q.scenario.length} chars)`
  );
  assert(
    !!q.goal && q.goal.length > 15,
    `Q${qNum} (${q.id}) has explicit goal: "${q.goal}"`
  );
  assert(
    !!q.emotion && q.emotion.length > 5,
    `Q${qNum} (${q.id}) identifies core emotional challenge: "${q.emotion}"`
  );
  assert(
    VALID_STRATEGIES.has(q.strategyType),
    `Q${qNum} (${q.id}) defines valid strategyType: "${q.strategyType}"`
  );
});

// 3. Four Strategy Options (A–D) in First Person
console.log("\n--- 3. Four Strategy Options (A–D) in First Person ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const optKeys = Object.keys(q.options) as ErOptionKey[];
  assert(
    optKeys.length === 4 &&
      optKeys.includes("A") &&
      optKeys.includes("B") &&
      optKeys.includes("C") &&
      optKeys.includes("D"),
    `Q${qNum} (${q.id}) has exactly four options (A, B, C, D)`
  );

  const texts = Object.values(q.options);
  const uniqueTexts = new Set(texts);
  assert(
    uniqueTexts.size === 4,
    `Q${qNum} (${q.id}) has 4 distinct option texts without duplicates`
  );

  texts.forEach((txt, optIdx) => {
    const key = ER_OPTION_KEYS[optIdx];
    assert(
      txt.length > 20,
      `Q${qNum} (${q.id}) Option ${key} is contextually detailed (${txt.length} chars)`
    );
    assert(
      txt.startsWith("Ich ") || txt.startsWith("Mich "),
      `Q${qNum} (${q.id}) Option ${key} is written in first-person ("Ich ...")`
    );
  });
});

// 4. Correct Answer Validation & Answer Distribution
console.log("\n--- 4. Correct Answer Validation & Distribution ---");
const keyCounts: Record<ErOptionKey, number> = { A: 0, B: 0, C: 0, D: 0 };

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    ER_OPTION_KEYS.includes(q.correctAnswer),
    `Q${qNum} (${q.id}) correctAnswer '${q.correctAnswer}' is one of A, B, C, D`
  );
  keyCounts[q.correctAnswer]++;

  // Check StoredQuestion mapping
  const sq = storedQuestions[idx];
  const expectedIndex = ER_OPTION_KEYS.indexOf(q.correctAnswer);
  assert(
    sq.correctAnswer === expectedIndex,
    `Q${qNum} StoredQuestion.correctAnswer (${sq.correctAnswer}) matches option index for ${q.correctAnswer} (${expectedIndex})`
  );
  assert(
    sq.options[sq.correctAnswer] === q.options[q.correctAnswer],
    `Q${qNum} StoredQuestion.options[correctAnswer] points to the correct option text`
  );
});

console.log("  Answer Key Distribution:", keyCounts);
assert(keyCounts.A === 3, `Key A has exactly 3 questions (actual: ${keyCounts.A})`);
assert(keyCounts.B === 3, `Key B has exactly 3 questions (actual: ${keyCounts.B})`);
assert(keyCounts.C === 3, `Key C has exactly 3 questions (actual: ${keyCounts.C})`);
assert(keyCounts.D === 3, `Key D has exactly 3 questions (actual: ${keyCounts.D})`);

// Check non-consecutive repeating keys
for (let i = 0; i < rawQuestions.length - 1; i++) {
  const cur = rawQuestions[i].correctAnswer;
  const next = rawQuestions[i + 1].correctAnswer;
  assert(cur !== next, `No consecutive repeating keys: Q${i + 1} (${cur}) !== Q${i + 2} (${next})`);
}

// 5. Difficulty Distribution
console.log("\n--- 5. Difficulty Distribution ---");
const diffCounts: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});

console.log("  Difficulty Counts:", diffCounts);
assert(diffCounts["Leicht"] === 3, `Leicht count is exactly 3 (actual: ${diffCounts["Leicht"]})`);
assert(diffCounts["Mittel"] === 6, `Mittel count is exactly 6 (actual: ${diffCounts["Mittel"]})`);
assert(diffCounts["Schwer"] === 3, `Schwer count is exactly 3 (actual: ${diffCounts["Schwer"]})`);

// 6. Explanations & Distractor Rationales
console.log("\n--- 6. Explanations & Distractor Rationales ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.explanation && q.explanation.length > 50,
    `Q${qNum} (${q.id}) has substantial didactic explanation (${q.explanation.length} chars)`
  );
  assert(
    !!q.rationalesByOption,
    `Q${qNum} (${q.id}) provides rationalesByOption`
  );
  if (q.rationalesByOption) {
    ER_OPTION_KEYS.forEach((key) => {
      assert(
        !!q.rationalesByOption![key] && q.rationalesByOption![key].length > 15,
        `Q${qNum} (${q.id}) Option ${key} has detailed rationale (${q.rationalesByOption![key]?.length} chars)`
      );
    });
  }

  assert(
    !!q.explanationsIncorrect,
    `Q${qNum} (${q.id}) provides explanationsIncorrect`
  );
  if (q.explanationsIncorrect) {
    const distractors = ER_OPTION_KEYS.filter((k) => k !== q.correctAnswer);
    distractors.forEach((dKey) => {
      assert(
        !!q.explanationsIncorrect![dKey] && q.explanationsIncorrect![dKey].length > 15,
        `Q${qNum} (${q.id}) Distractor ${dKey} has explicit incorrect explanation`
      );
    });
  }
});

// 7. Independence & Non-Regression with Generalprobe #1, #2, #3
console.log("\n--- 7. Independence & Non-Regression with Generalprobe #1, #2, #3 ---");
assert(RAW_GENERALPROBE_1_ER_QUESTIONS.length === 12, `GP1 raw count preserved at 12`);
assert(GENERALPROBE_1_ER_QUESTIONS.length === 12, `GP1 stored count preserved at 12`);
assert(RAW_GENERALPROBE_2_ER_QUESTIONS.length === 12, `GP2 raw count preserved at 12`);
assert(GENERALPROBE_2_ER_QUESTIONS.length === 12, `GP2 stored count preserved at 12`);
assert(RAW_GENERALPROBE_3_ER_QUESTIONS.length === 12, `GP3 raw count preserved at 12`);
assert(GENERALPROBE_3_ER_QUESTIONS.length === 12, `GP3 stored count preserved at 12`);

const prevScenarios = new Set<string>();
RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q) => prevScenarios.add(q.scenario));
RAW_GENERALPROBE_2_ER_QUESTIONS.forEach((q) => prevScenarios.add(q.scenario));
RAW_GENERALPROBE_3_ER_QUESTIONS.forEach((q) => prevScenarios.add(q.scenario));

rawQuestions.forEach((q, idx) => {
  assert(!prevScenarios.has(q.scenario), `Q${idx + 1} scenario is completely new (no overlap with GP1/GP2/GP3)`);
});

const prevIds = new Set<string>([
  ...RAW_GENERALPROBE_1_ER_QUESTIONS.map((q) => q.id),
  ...RAW_GENERALPROBE_2_ER_QUESTIONS.map((q) => q.id),
  ...RAW_GENERALPROBE_3_ER_QUESTIONS.map((q) => q.id),
]);
rawQuestions.forEach((q) => {
  assert(!prevIds.has(q.id), `ID ${q.id} does not collide with GP1/GP2/GP3 IDs`);
});

// 8. Generalprobe #4 Full Integration Verification
console.log("\n--- 8. Generalprobe #4 Full Integration Verification ---");
const gp4 = buildGeneralprobe4Dataset();
assert(gp4.id === "generalprobe-4", `GP4 dataset ID is generalprobe-4`);
assert(gp4.erQuestions.length === 12, `GP4 dataset has exactly 12 ER questions (found: ${gp4.erQuestions.length})`);

gp4.erQuestions.forEach((q, idx) => {
  const expectedId = `SEK-ER-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `GP4 dataset ER Q${idx + 1} ID is ${expectedId}`);
});

const sim4Er = buildErSimulationQuestions(4);
assert(sim4Er.length === 12, `buildErSimulationQuestions(4) returns 12 questions`);
assert(sim4Er[0].id === "SEK-ER-GP4-001", `buildErSimulationQuestions(4)[0] is SEK-ER-GP4-001`);

const bmsTotal = gp4.bmsQuestions.length;
const tvTotal = gp4.tvQuestions.length;
const kffTotal =
  gp4.fzQuestions.length +
  gp4.zfQuestions.length +
  gp4.wfQuestions.length +
  gp4.gmRecallQuestions.length +
  gp4.ieQuestions.length;
const sekTotal = gp4.erQuestions.length + gp4.eeQuestions.length + gp4.seQuestions.length;
const grandTotal = bmsTotal + tvTotal + kffTotal + sekTotal;

console.log(`  BMS Total: ${bmsTotal} (expected: 94)`);
console.log(`  TV Total: ${tvTotal} (expected: 12)`);
console.log(`  KFF Scored Total: ${kffTotal} (expected: 75)`);
console.log(`  SEK Total: ${sekTotal} (expected: 40)`);
console.log(`  Grand Total Scored: ${grandTotal} (expected: 221)`);

assert(bmsTotal === 94, `BMS total is 94`);
assert(tvTotal === 12, `TV total is 12`);
assert(kffTotal === 75, `KFF scored total is 75`);
assert(gp4.erQuestions.length === 12, `ER count is 12`);
assert(gp4.eeQuestions.length === 14, `EE count is 14`);
assert(gp4.seQuestions.length === 14, `SE count is 14`);
assert(sekTotal === 40, `SEK total is 40`);
assert(grandTotal === 221, `Grand total scored questions across GP4 is exactly 221`);

// 9. Question Store Resolution Check
console.log("\n--- 9. Question Store Resolution Check ---");
rawQuestions.forEach((q) => {
  const found = ER_STORED_QUESTIONS.find((item) => item.id === q.id);
  assert(found !== undefined, `Question ${q.id} is resolvable in ER_STORED_QUESTIONS`);
});

// 10. Scoring Engine Integration
console.log("\n--- 10. Scoring Engine Integration Check ---");
// Perfect ER answers
const perfectAnswers: Record<string, number> = {};
gp4.erQuestions.forEach((q) => {
  perfectAnswers[q.id] = q.correctAnswer as number;
});
const evalPerfect = evaluateFullGeneralprobe(gp4, perfectAnswers, 3600);
assert(
  evalPerfect.subtests.er.rawCorrect === 12,
  `Perfect ER answers yield 12/12 points (actual: ${evalPerfect.subtests.er.rawCorrect})`
);

// Zero ER answers (wrong answers for all)
const wrongAnswers: Record<string, number> = {};
gp4.erQuestions.forEach((q) => {
  const correctIdx = q.correctAnswer as number;
  wrongAnswers[q.id] = (correctIdx + 1) % 4;
});
const evalZero = evaluateFullGeneralprobe(gp4, wrongAnswers, 3600);
assert(
  evalZero.subtests.er.rawCorrect === 0,
  `Incorrect ER answers yield 0/12 points (actual: ${evalZero.subtests.er.rawCorrect})`
);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("ALL TESTS PASSED! MedAT ER Generalprobe #4 is 100% verified and production-ready.");
} else {
  console.error(`FAILED with ${errorCount} errors!`);
  process.exitCode = 1;
}
console.log("================================================================================\n");
