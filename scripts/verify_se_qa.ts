/**
 * Comprehensive Quality Assurance & Social-Emotional Assessment Verification Suite
 * MedAT Soziales Entscheiden (SE) — Generalprobe #1 (14 Questions, 21 Minutes)
 */

import {
  RAW_GENERALPROBE_1_SE_QUESTIONS,
  GENERALPROBE_1_SE_QUESTIONS,
  GENERALPROBE_1_SE_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe1SeQuestions";
import {
  calculateSeScore,
  decodeSeRanking,
  encodeSeRanking,
  isSeRankingValid,
  SE_CONSIDERATION_KEYS,
  SE_RANKS,
  type SeConsiderationKey,
} from "../src/data/questions/se/types";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";
import { STAGE_CONFIGS } from "../src/data/generalprobe/types";

console.log("================================================================================");
console.log("MEDAT SE QUALITY ASSURANCE & MORAL REASONING SUITE — GENERALPROBE #1");
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
  RAW_GENERALPROBE_1_SE_QUESTIONS.length === 14,
  `RAW questions count is exactly 14 (actual: ${RAW_GENERALPROBE_1_SE_QUESTIONS.length})`
);
assert(
  GENERALPROBE_1_SE_QUESTIONS.length === 14,
  `GENERALPROBE_1_SE_QUESTIONS count is exactly 14 (actual: ${GENERALPROBE_1_SE_QUESTIONS.length})`
);

const idSet = new Set<string>();
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q, idx) => {
  const expectedId = `SEK-SE-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!idSet.has(q.id), `Question ID ${q.id} is globally unique`);
  idSet.add(q.id);
});

// 2. Dilemma & Decision Context Specification
console.log("\n--- 2. Dilemma & Decision Context Specification ---");
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.scenario && q.scenario.length > 50,
    `Q${qNum} (${q.id}) has substantial scenario text (${q.scenario.length} chars)`
  );
  assert(
    !!q.decisionContext && q.decisionContext.length > 10,
    `Q${qNum} (${q.id}) has explicit decisionContext: "${q.decisionContext}"`
  );
  assert(
    !!q.competencyTags && q.competencyTags.length > 0,
    `Q${qNum} (${q.id}) defines competencyTags: ${q.competencyTags.join(", ")}`
  );
});

// 3. Five Considerations per Dilemma (A–E)
console.log("\n--- 3. Five Considerations per Dilemma (A–E) ---");
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    q.considerations.length === 5,
    `Q${qNum} (${q.id}) has exactly 5 considerations (actual: ${q.considerations.length})`
  );

  const keys = q.considerations.map((c) => c.id);
  assert(
    keys.join("") === "ABCDE",
    `Q${qNum} (${q.id}) considerations are strictly labeled A, B, C, D, E`
  );

  const texts = q.considerations.map((c) => c.text);
  const uniqueTexts = new Set(texts);
  assert(
    uniqueTexts.size === 5,
    `Q${qNum} (${q.id}) has 5 distinct consideration texts`
  );

  texts.forEach((txt, optIdx) => {
    const key = SE_CONSIDERATION_KEYS[optIdx];
    assert(
      txt.length > 20,
      `Q${qNum} (${q.id}) Consideration ${key} has substantial text (${txt.length} chars)`
    );
  });
});

// 4. Reference Ranking Integrity
console.log("\n--- 4. Reference Ranking Integrity ---");
let monotonicCount = 0;
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  const ref = q.referenceRanking;
  assert(
    isSeRankingValid(ref),
    `Q${qNum} (${q.id}) referenceRanking is a valid bijective permutation of {1, 2, 3, 4, 5}`
  );

  // Check each rank 1..5 is used
  const usedRanks = Object.values(ref);
  SE_RANKS.forEach((r) => {
    assert(
      usedRanks.includes(r),
      `Q${qNum} (${q.id}) referenceRanking includes Rank ${r}`
    );
  });

  // Check encoding matches StoredQuestion.correctAnswer
  const encodedCode = encodeSeRanking(ref);
  const sq = GENERALPROBE_1_SE_QUESTIONS[idx];
  assert(
    sq.correctAnswer === encodedCode,
    `Q${qNum} StoredQuestion.correctAnswer (${sq.correctAnswer}) matches encoded code (${encodedCode})`
  );

  const decoded = decodeSeRanking(sq.correctAnswer);
  SE_CONSIDERATION_KEYS.forEach((k) => {
    assert(
      decoded[k] === ref[k],
      `Q${qNum} decoded[${k}] (${decoded[k]}) matches ref[${k}] (${ref[k]})`
    );
  });

  // Check if it's the trivial 1-2-3-4-5
  if (ref.A === 1 && ref.B === 2 && ref.C === 3 && ref.D === 4 && ref.E === 5) {
    monotonicCount++;
  }
});

console.log(`  Trivial monotonic rankings (A=1, B=2, C=3, D=4, E=5): ${monotonicCount} of 14`);
assert(
  monotonicCount <= 2,
  `Reference rankings avoid predictable guessing artifact (monotonic count <= 2, actual: ${monotonicCount})`
);

// 5. Difficulty Distribution
console.log("\n--- 5. Difficulty Distribution ---");
const diffCounts: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q) => {
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});

console.log("  Difficulty Counts:", diffCounts);
assert(diffCounts["Leicht"] === 4, `Leicht count is exactly 4 (actual: ${diffCounts["Leicht"]})`);
assert(diffCounts["Mittel"] === 7, `Mittel count is exactly 7 (actual: ${diffCounts["Mittel"]})`);
assert(diffCounts["Schwer"] === 3, `Schwer count is exactly 3 (actual: ${diffCounts["Schwer"]})`);

// 6. Explanations & Rationale
console.log("\n--- 6. Explanations & Rationale ---");
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.explanation && q.explanation.length > 50,
    `Q${qNum} (${q.id}) has substantial didactic explanation (${q.explanation.length} chars)`
  );
  assert(
    !!q.rationaleByRank && Object.keys(q.rationaleByRank).length === 5,
    `Q${qNum} (${q.id}) provides rationaleByRank for all 5 considerations`
  );
});

// 7. Timer & Stage Configuration
console.log("\n--- 7. Timer & Stage Configuration ---");
assert(
  GENERALPROBE_1_SE_SIMULATION_DATA.timeLimitSeconds === 1260,
  `Simulation data timeLimitSeconds is 1260s / 21 min (actual: ${GENERALPROBE_1_SE_SIMULATION_DATA.timeLimitSeconds})`
);
assert(
  STAGE_CONFIGS.SE.durationSeconds === 1260,
  `STAGE_CONFIGS.SE.durationSeconds is 1260s / 21 min (actual: ${STAGE_CONFIGS.SE.durationSeconds})`
);
assert(
  STAGE_CONFIGS.SE.questionCount === 14,
  `STAGE_CONFIGS.SE.questionCount is 14 (actual: ${STAGE_CONFIGS.SE.questionCount})`
);

// 8. Scoring Engine Behavior Simulation
console.log("\n--- 8. Scoring Engine Behavior Simulation ---");
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  const ref = q.referenceRanking;

  // Exact match
  const exactRes = calculateSeScore(ref, ref);
  assert(exactRes.isValid && exactRes.score === 1.0, `Q${qNum} exact match yields score 1.0 (100%)`);

  // Small perturbation: swap rank 1 and 2
  const k1 = SE_CONSIDERATION_KEYS.find((k) => ref[k] === 1)!;
  const k2 = SE_CONSIDERATION_KEYS.find((k) => ref[k] === 2)!;
  const smallSwap = { ...ref, [k1]: 2, [k2]: 1 };
  const swapRes = calculateSeScore(smallSwap, ref);
  assert(
    swapRes.isValid && swapRes.score >= 0.75,
    `Q${qNum} adjacent swap yields passing score (score: ${swapRes.score}, distance: ${swapRes.distance})`
  );

  // Inverted permutation (worst case)
  const inverted = {
    A: (6 - ref.A) as any,
    B: (6 - ref.B) as any,
    C: (6 - ref.C) as any,
    D: (6 - ref.D) as any,
    E: (6 - ref.E) as any,
  };
  const invRes = calculateSeScore(inverted, ref);
  assert(
    invRes.isValid && invRes.score === 0.0 && invRes.distance === 40,
    `Q${qNum} fully inverted ranking yields score 0.0 (distance: 40)`
  );

  // Incomplete / duplicate
  const dupRanking = { ...ref, [k2]: 1 };
  const dupRes = calculateSeScore(dupRanking, ref);
  assert(!dupRes.isValid && dupRes.score === 0, `Q${qNum} duplicate rank is rejected (isValid: false, score: 0)`);
});

// 9. Full Generalprobe #1 Integration Verification
console.log("\n--- 9. Full Generalprobe #1 Integration Verification ---");
const dataset = buildGeneralprobe1Dataset();
assert(
  dataset.seQuestions.length === 14,
  `dataset.seQuestions length is exactly 14 (actual: ${dataset.seQuestions.length})`
);
dataset.seQuestions.forEach((q, idx) => {
  const expectedId = `SEK-SE-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `dataset.seQuestions[${idx}] ID is ${expectedId} (actual: ${q.id})`);
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
  console.log("MEDAT SE QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT SE QUALITY ASSURANCE: ${errorCount} CHECKS FAILED ❌`);
  process.exit(1);
}
console.log("================================================================================");
