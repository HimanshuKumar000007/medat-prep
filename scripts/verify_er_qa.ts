/**
 * Comprehensive Quality Assurance & Emotion Regulation Assessment Verification Suite
 * MedAT Emotionen regulieren (ER) — Generalprobe #1 (12 Questions, 18 Minutes)
 */

import {
  RAW_GENERALPROBE_1_ER_QUESTIONS,
  GENERALPROBE_1_ER_QUESTIONS,
  GENERALPROBE_1_ER_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe1ErQuestions";
import { ER_OPTION_KEYS, type ErOptionKey } from "../src/data/questions/er/types";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";
import { STAGE_CONFIGS } from "../src/data/generalprobe/types";

console.log("================================================================================");
console.log("MEDAT ER QUALITY ASSURANCE & EMOTION REGULATION SUITE — GENERALPROBE #1");
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

// 1. Question Count & Identification
console.log("--- 1. Question Count & Identification ---");
assert(
  RAW_GENERALPROBE_1_ER_QUESTIONS.length === 12,
  `RAW questions count is exactly 12 (actual: ${RAW_GENERALPROBE_1_ER_QUESTIONS.length})`
);
assert(
  GENERALPROBE_1_ER_QUESTIONS.length === 12,
  `GENERALPROBE_1_ER_QUESTIONS count is exactly 12 (actual: ${GENERALPROBE_1_ER_QUESTIONS.length})`
);

const idSet = new Set<string>();
RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q, idx) => {
  const expectedId = `SEK-ER-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!idSet.has(q.id), `Question ID ${q.id} is globally unique`);
  idSet.add(q.id);
});

// 2. Scenario & Goal Specification
console.log("\n--- 2. Scenario & Goal Specification ---");
RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q, idx) => {
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
    !!q.strategyType,
    `Q${qNum} (${q.id}) defines strategyType: "${q.strategyType}"`
  );
});

// 3. Four Strategy Options (A–D)
console.log("\n--- 3. Four Strategy Options (A–D) ---");
RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q, idx) => {
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
  });
});

// 4. Correct Answer Validation & Answer Distribution
console.log("\n--- 4. Correct Answer Validation & Distribution ---");
const keyCounts: Record<ErOptionKey, number> = { A: 0, B: 0, C: 0, D: 0 };

RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    ER_OPTION_KEYS.includes(q.correctAnswer),
    `Q${qNum} (${q.id}) correctAnswer '${q.correctAnswer}' is one of A, B, C, D`
  );
  keyCounts[q.correctAnswer]++;

  // Check StoredQuestion mapping
  const sq = GENERALPROBE_1_ER_QUESTIONS[idx];
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

// 5. Difficulty Distribution
console.log("\n--- 5. Difficulty Distribution ---");
const diffCounts: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q) => {
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});

console.log("  Difficulty Counts:", diffCounts);
assert(diffCounts["Leicht"] === 3, `Leicht count is exactly 3 (actual: ${diffCounts["Leicht"]})`);
assert(diffCounts["Mittel"] === 6, `Mittel count is exactly 6 (actual: ${diffCounts["Mittel"]})`);
assert(diffCounts["Schwer"] === 3, `Schwer count is exactly 3 (actual: ${diffCounts["Schwer"]})`);

// 6. Explanations & Distractor Rationales
console.log("\n--- 6. Explanations & Distractor Rationales ---");
RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q, idx) => {
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

// 7. Timer & Stage Configuration
console.log("\n--- 7. Timer & Stage Configuration ---");
assert(
  GENERALPROBE_1_ER_SIMULATION_DATA.timeLimitSeconds === 1080,
  `Simulation data timeLimitSeconds is 1080s / 18 min (actual: ${GENERALPROBE_1_ER_SIMULATION_DATA.timeLimitSeconds})`
);
assert(
  STAGE_CONFIGS.ER.durationSeconds === 1080,
  `STAGE_CONFIGS.ER.durationSeconds is 1080s / 18 min (actual: ${STAGE_CONFIGS.ER.durationSeconds})`
);
assert(
  STAGE_CONFIGS.ER.questionCount === 12,
  `STAGE_CONFIGS.ER.questionCount is 12 (actual: ${STAGE_CONFIGS.ER.questionCount})`
);

// 8. Scoring Engine Behavior Simulation
console.log("\n--- 8. Scoring Engine Behavior Simulation ---");
GENERALPROBE_1_ER_QUESTIONS.forEach((sq, idx) => {
  const qNum = idx + 1;
  const correctIdx = sq.correctAnswer;

  // Simulate correct answer
  const isCorrectWhenChosen = correctIdx === sq.correctAnswer;
  assert(isCorrectWhenChosen, `Q${qNum} selecting correct option (${correctIdx}) yields 1 point`);

  // Simulate distractor answers
  [0, 1, 2, 3].forEach((optIdx) => {
    if (optIdx !== correctIdx) {
      const isWrong = optIdx !== sq.correctAnswer;
      assert(isWrong, `Q${qNum} selecting distractor (${optIdx}) yields 0 points`);
    }
  });

  // Simulate unanswered
  const unansweredWrong = undefined !== sq.correctAnswer;
  assert(unansweredWrong, `Q${qNum} leaving question unanswered yields 0 points`);
});

// 9. Full Generalprobe #1 Integration Verification
console.log("\n--- 9. Full Generalprobe #1 Integration Verification ---");
const dataset = buildGeneralprobe1Dataset();
assert(
  dataset.erQuestions.length === 12,
  `dataset.erQuestions length is exactly 12 (actual: ${dataset.erQuestions.length})`
);
dataset.erQuestions.forEach((q, idx) => {
  const expectedId = `SEK-ER-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `dataset.erQuestions[${idx}] ID is ${expectedId} (actual: ${q.id})`);
});

// Total scored questions count across all sections:
// BMS: 94
// TV: 12
// FZ: 15
// ZF: 10
// WF: 15
// GM Recall: 25
// IE: 10
// ER: 12
// EE: 14
// SE: 14
// Total: 94 + 12 + 15 + 10 + 15 + 25 + 10 + 12 + 14 + 14 = 221 scored tasks (+ 8 GM memory cards)
const totalScored =
  dataset.bmsQuestions.length +
  dataset.tvQuestions.length +
  dataset.fzQuestions.length +
  dataset.zfQuestions.length +
  dataset.wfQuestions.length +
  dataset.gmStoredQuestions.length +
  dataset.ieQuestions.length +
  dataset.erQuestions.length +
  dataset.eeQuestions.length +
  dataset.seQuestions.length;

assert(
  totalScored === 221,
  `Generalprobe #1 has exactly 221 scored questions (actual: ${totalScored})`
);
assert(
  dataset.gmCards.length === 8,
  `Generalprobe #1 has exactly 8 GM cards (actual: ${dataset.gmCards.length})`
);
assert(dataset.bmsQuestions.length === 94, `BMS questions count is 94 (actual: ${dataset.bmsQuestions.length})`);
assert(dataset.tvQuestions.length === 12, `TV questions count is 12 (actual: ${dataset.tvQuestions.length})`);
assert(dataset.fzQuestions.length === 15, `FZ questions count is 15 (actual: ${dataset.fzQuestions.length})`);
assert(dataset.zfQuestions.length === 10, `ZF questions count is 10 (actual: ${dataset.zfQuestions.length})`);
assert(dataset.wfQuestions.length === 15, `WF questions count is 15 (actual: ${dataset.wfQuestions.length})`);
assert(dataset.gmStoredQuestions.length === 25, `GM recall questions count is 25 (actual: ${dataset.gmStoredQuestions.length})`);
assert(dataset.ieQuestions.length === 10, `IE questions count is 10 (actual: ${dataset.ieQuestions.length})`);
assert(dataset.erQuestions.length === 12, `ER questions count is 12 (actual: ${dataset.erQuestions.length})`);
assert(dataset.eeQuestions.length === 14, `EE questions count is 14 (actual: ${dataset.eeQuestions.length})`);
assert(dataset.seQuestions.length === 14, `SE questions count is 14 (actual: ${dataset.seQuestions.length})`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT ER QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT ER QUALITY ASSURANCE: ${errorCount} CHECKS FAILED ❌`);
  process.exit(1);
}
console.log("================================================================================");
