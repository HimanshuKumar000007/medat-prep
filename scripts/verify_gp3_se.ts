/**
 * Comprehensive Quality Assurance & Ethical Decision-Making Verification Suite
 * MedAT Soziales Entscheiden (SE) — Generalprobe #3 (14 Questions, 21 Minutes)
 */

import {
  RAW_GENERALPROBE_3_SE_QUESTIONS,
  GENERALPROBE_3_SE_QUESTIONS,
  GENERALPROBE_3_SE_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe3SeQuestions";
import {
  RAW_GENERALPROBE_2_SE_QUESTIONS,
  GENERALPROBE_2_SE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2SeQuestions";
import {
  RAW_GENERALPROBE_1_SE_QUESTIONS,
  GENERALPROBE_1_SE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1SeQuestions";
import {
  SE_CONSIDERATION_KEYS,
  type SeConsiderationKey,
  type SeRank,
  isSeRankingValid,
  encodeSeRanking,
  decodeSeRanking,
  calculateSeScore,
} from "../src/data/questions/se/types";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
  buildGeneralprobe3Dataset,
} from "../src/data/generalprobe/generalprobeData";
import { SE_STORED_QUESTIONS, SE_QUESTIONS_BY_ID } from "../src/data/questions/se";
import { STAGE_CONFIGS } from "../src/data/generalprobe/types";

console.log("================================================================================");
console.log("MEDAT SE QUALITY ASSURANCE & ETHICAL RANKING SUITE — GENERALPROBE #3");
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

const rawQuestions = RAW_GENERALPROBE_3_SE_QUESTIONS;
const storedQuestions = GENERALPROBE_3_SE_QUESTIONS;
const simData = GENERALPROBE_3_SE_SIMULATION_DATA;

// 1. Question Count & Identification
console.log("--- 1. Question Count & Identification ---");
assert(rawQuestions.length === 14, `Raw questions count is exactly 14 (actual: ${rawQuestions.length})`);
assert(storedQuestions.length === 14, `Stored questions count is exactly 14 (actual: ${storedQuestions.length})`);
assert(simData.questions.length === 14, `Simulation data questions count is exactly 14 (actual: ${simData.questions.length})`);
assert(simData.timeLimitSeconds === 1260, `Time limit is exactly 1260s / 21 minutes (actual: ${simData.timeLimitSeconds})`);
assert(STAGE_CONFIGS.SE.durationSeconds === 1260, `STAGE_CONFIGS.SE.durationSeconds is 1260s (actual: ${STAGE_CONFIGS.SE.durationSeconds})`);
assert(STAGE_CONFIGS.SE.questionCount === 14, `STAGE_CONFIGS.SE.questionCount is 14 (actual: ${STAGE_CONFIGS.SE.questionCount})`);

// IDs
const idSet = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `SEK-SE-GP3-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!idSet.has(q.id), `Question ID ${q.id} is globally unique`);
  idSet.add(q.id);
});

storedQuestions.forEach((sq, idx) => {
  const expectedId = `SEK-SE-GP3-${String(idx + 1).padStart(3, "0")}`;
  const expectedLegacy = `se-sim3-${String(idx + 1).padStart(2, "0")}`;
  assert(sq.id === expectedId, `Stored Q${idx + 1} ID is ${expectedId} (actual: ${sq.id})`);
  assert(sq.legacyId === expectedLegacy, `Stored Q${idx + 1} legacyId is ${expectedLegacy} (actual: ${sq.legacyId})`);
  assert(sq.exam === "BOTH", `Stored Q${idx + 1} exam is BOTH (actual: ${sq.exam})`);
  assert(sq.section === "SEK", `Stored Q${idx + 1} section is SEK (actual: ${sq.section})`);
  assert(sq.subjectId === "sek-soc-dec", `Stored Q${idx + 1} subjectId is sek-soc-dec (actual: ${sq.subjectId})`);
  assert(sq.chapterId === "sek-dec-ethics", `Stored Q${idx + 1} chapterId is sek-dec-ethics (actual: ${sq.chapterId})`);
});

// 2. Scenario, Dilemma & Context Specification
console.log("\n--- 2. Scenario, Dilemma & Context Specification ---");
const difficultyCounts = { Leicht: 0, Mittel: 0, Schwer: 0 };

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.scenario && q.scenario.length > 50,
    `Q${qNum} (${q.id}) has substantial scenario text (${q.scenario.length} chars)`
  );
  assert(
    !!q.decisionContext && q.decisionContext.length > 10,
    `Q${qNum} (${q.id}) defines clear decisionContext: "${q.decisionContext}"`
  );
  assert(
    !!q.explanation && q.explanation.length > 80,
    `Q${qNum} (${q.id}) has didactic explanation (${q.explanation.length} chars)`
  );
  assert(
    Array.isArray(q.competencyTags) && q.competencyTags.length >= 2,
    `Q${qNum} (${q.id}) provides competency tags (${q.competencyTags.join(", ")})`
  );
  difficultyCounts[q.difficulty]++;
});

assert(difficultyCounts.Leicht === 4, `Difficulty Leicht count is exactly 4 (got ${difficultyCounts.Leicht})`);
assert(difficultyCounts.Mittel === 7, `Difficulty Mittel count is exactly 7 (got ${difficultyCounts.Mittel})`);
assert(difficultyCounts.Schwer === 3, `Difficulty Schwer count is exactly 3 (got ${difficultyCounts.Schwer})`);

// 3. Five Considerations per Scenario
console.log("\n--- 3. Five Considerations per Scenario ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    q.considerations.length === 5,
    `Q${qNum} (${q.id}) has exactly five considerations`
  );

  const keys = q.considerations.map((c) => c.id);
  assert(
    keys.join("") === "ABCDE",
    `Q${qNum} (${q.id}) consideration IDs are in order A, B, C, D, E`
  );

  const texts = q.considerations.map((c) => c.text);
  const uniqueTexts = new Set(texts);
  assert(
    uniqueTexts.size === 5,
    `Q${qNum} (${q.id}) all five consideration texts are distinct`
  );

  q.considerations.forEach((c) => {
    assert(
      c.text.length > 25,
      `Q${qNum} (${q.id}) Consideration ${c.id} is sufficiently articulated (${c.text.length} chars)`
    );
  });
});

// 4. Reference Ranking & Bijective Permutation Validation
console.log("\n--- 4. Reference Ranking & Bijective Permutation Validation ---");
const rank1Positions: Record<SeConsiderationKey, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const rank5Positions: Record<SeConsiderationKey, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const ref = q.referenceRanking;
  assert(
    isSeRankingValid(ref),
    `Q${qNum} (${q.id}) referenceRanking is a valid bijective permutation of {1, 2, 3, 4, 5}`
  );

  // Check StoredQuestion correctAnswer integer encoding
  const sq = storedQuestions[idx];
  const expectedCode = encodeSeRanking(ref);
  assert(
    sq.correctAnswer === expectedCode,
    `Q${qNum} (${q.id}) StoredQuestion.correctAnswer (${sq.correctAnswer}) equals encoded ranking (${expectedCode})`
  );

  // Check decode
  const decoded = decodeSeRanking(sq.correctAnswer as number);
  SE_CONSIDERATION_KEYS.forEach((k) => {
    assert(
      decoded[k] === ref[k],
      `Q${qNum} (${q.id}) decoded rank for ${k} (${decoded[k]}) matches ref (${ref[k]})`
    );
    if (ref[k] === 1) rank1Positions[k]++;
    if (ref[k] === 5) rank5Positions[k]++;
  });

  // Check rationaleByRank
  assert(
    !!q.rationaleByRank,
    `Q${qNum} (${q.id}) provides rationaleByRank`
  );
  SE_CONSIDERATION_KEYS.forEach((k) => {
    const rat = q.rationaleByRank?.[k];
    assert(
      !!rat && rat.length > 15,
      `Q${qNum} (${q.id}) Rationale for ${k} is complete: "${rat?.slice(0, 40)}..."`
    );
  });

  // Check anti-guessing monotonic pattern
  const isAscending = ref.A === 1 && ref.B === 2 && ref.C === 3 && ref.D === 4 && ref.E === 5;
  const isDescending = ref.A === 5 && ref.B === 4 && ref.C === 3 && ref.D === 2 && ref.E === 1;
  assert(!isAscending && !isDescending, `Q${qNum} (${q.id}) is not a trivial monotonic sequence`);
});

// 5. Permutation Diversity & Anti-Guessing Checks
console.log("\n--- 5. Permutation Diversity & Anti-Guessing Checks ---");
console.log("  Rank 1 positions across A..E:", rank1Positions);
console.log("  Rank 5 positions across A..E:", rank5Positions);

SE_CONSIDERATION_KEYS.forEach((k) => {
  assert(
    rank1Positions[k] >= 2,
    `Rank 1 is assigned to option ${k} at least twice across GP3 (actual: ${rank1Positions[k]})`
  );
  assert(
    rank5Positions[k] >= 2,
    `Rank 5 is assigned to option ${k} at least twice across GP3 (actual: ${rank5Positions[k]})`
  );
});

// 6. Scoring Engine & Partial-Credit Verification
console.log("\n--- 6. Scoring Engine & Partial-Credit Verification ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const ref = q.referenceRanking;

  // Perfect match -> 1.0 (100%), D = 0
  const perfectScore = calculateSeScore(ref, ref);
  assert(
    perfectScore.isValid && perfectScore.score === 1.0 && perfectScore.scorePct === 100 && perfectScore.distance === 0,
    `Q${qNum} (${q.id}) Perfect match awards 1.0 (100%) with distance 0`
  );

  // Single adjacent swap -> distance 2 -> score = 1 - 2/40 = 0.95 (95%)
  const swapped = { ...ref };
  const keys = SE_CONSIDERATION_KEYS;
  const k1 = keys.find((k) => ref[k] === 1)!;
  const k2 = keys.find((k) => ref[k] === 2)!;
  swapped[k1] = 2;
  swapped[k2] = 1;
  const swappedScore = calculateSeScore(swapped, ref);
  assert(
    swappedScore.isValid && swappedScore.score === 0.95 && swappedScore.scorePct === 95 && swappedScore.distance === 2,
    `Q${qNum} (${q.id}) Single adjacent swap (R1/R2) correctly receives partial credit 0.95 (95%) with distance 2`
  );

  // Complete reversal -> distance 40 -> score = 0.0 (0%)
  const reversed: Record<SeConsiderationKey, SeRank> = {
    A: (6 - ref.A) as SeRank,
    B: (6 - ref.B) as SeRank,
    C: (6 - ref.C) as SeRank,
    D: (6 - ref.D) as SeRank,
    E: (6 - ref.E) as SeRank,
  };
  const reversedScore = calculateSeScore(reversed, ref);
  assert(
    reversedScore.isValid && reversedScore.score === 0.0 && reversedScore.distance === 40,
    `Q${qNum} (${q.id}) Complete inverted ranking receives 0.0 with distance 40`
  );

  // Incomplete / Invalid input -> isValid = false, score = 0
  const invalidIncomplete = calculateSeScore({ A: 1, B: 2, C: 3 }, ref);
  assert(
    !invalidIncomplete.isValid && invalidIncomplete.score === 0,
    `Q${qNum} (${q.id}) Incomplete ranking is flagged as invalid and receives 0`
  );

  const invalidDuplicates = calculateSeScore({ A: 1, B: 1, C: 2, D: 3, E: 4 }, ref);
  assert(
    !invalidDuplicates.isValid && invalidDuplicates.score === 0,
    `Q${qNum} (${q.id}) Duplicate rank ranking is flagged as invalid and receives 0`
  );
});

// 7. Independence & Non-Regression with Generalprobe #1 and #2
console.log("\n--- 7. Independence & Non-Regression with Generalprobe #1 & #2 ---");
assert(RAW_GENERALPROBE_1_SE_QUESTIONS.length === 14, "GP1 raw count preserved at 14");
assert(GENERALPROBE_1_SE_QUESTIONS.length === 14, "GP1 stored count preserved at 14");
assert(RAW_GENERALPROBE_2_SE_QUESTIONS.length === 14, "GP2 raw count preserved at 14");
assert(GENERALPROBE_2_SE_QUESTIONS.length === 14, "GP2 stored count preserved at 14");

const gp1Scenarios = new Set(RAW_GENERALPROBE_1_SE_QUESTIONS.map((q) => q.scenario));
const gp2Scenarios = new Set(RAW_GENERALPROBE_2_SE_QUESTIONS.map((q) => q.scenario));

rawQuestions.forEach((q, idx) => {
  assert(!gp1Scenarios.has(q.scenario), `Q${idx + 1} scenario does not overlap with GP1`);
  assert(!gp2Scenarios.has(q.scenario), `Q${idx + 1} scenario does not overlap with GP2`);
  assert(!q.id.startsWith("SEK-SE-0"), `ID ${q.id} does not collide with GP1 IDs`);
  assert(!q.id.startsWith("SEK-SE-GP2"), `ID ${q.id} does not collide with GP2 IDs`);
});

// 8. Generalprobe #3 Full Integration Verification
console.log("\n--- 8. Generalprobe #3 Full Integration Verification ---");
const gp3 = buildGeneralprobe3Dataset();
assert(gp3.id === "generalprobe-3", "GP3 dataset ID is generalprobe-3");
assert(gp3.seQuestions.length === 14, `GP3 dataset has exactly 14 SE questions (found: ${gp3.seQuestions.length})`);

gp3.seQuestions.forEach((q, idx) => {
  const expectedId = `SEK-SE-GP3-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `GP3 dataset SE Q${idx + 1} ID is ${expectedId}`);
});

// Test full mock counts
const bmsTotal = gp3.bmsQuestions.length;
const tvTotal = gp3.tvQuestions.length;
const fzTotal = gp3.fzQuestions.length;
const zfTotal = gp3.zfQuestions.length;
const wfTotal = gp3.wfQuestions.length;
const gmRecallTotal = gp3.gmRecallQuestions.length;
const ieTotal = gp3.ieQuestions.length;
const kffScoredTotal = fzTotal + zfTotal + wfTotal + gmRecallTotal + ieTotal;
const erTotal = gp3.erQuestions.length;
const eeTotal = gp3.eeQuestions.length;
const seTotal = gp3.seQuestions.length;
const sekTotal = erTotal + eeTotal + seTotal;
const grandTotalScored = bmsTotal + tvTotal + kffScoredTotal + sekTotal;

console.log(`  BMS Total: ${bmsTotal} (expected: 94)`);
console.log(`  TV Total: ${tvTotal} (expected: 12)`);
console.log(`  KFF Scored Total: ${kffScoredTotal} (expected: 75)`);
console.log(`  SEK Total: ${sekTotal} (expected: 40)`);
console.log(`  Grand Total Scored: ${grandTotalScored} (expected: 221)`);

assert(bmsTotal === 94, "BMS total is 94");
assert(tvTotal === 12, "TV total is 12");
assert(kffScoredTotal === 75, "KFF scored total is 75");
assert(erTotal === 12, "ER count is 12");
assert(eeTotal === 14, "EE count is 14");
assert(seTotal === 14, "SE count is 14");
assert(sekTotal === 40, "SEK total is 40");
assert(grandTotalScored === 221, "Grand total scored questions across GP3 is exactly 221");

// 9. Question Store Resolution Check
console.log("\n--- 9. Question Store Resolution Check ---");
rawQuestions.forEach((q) => {
  const byId = SE_QUESTIONS_BY_ID[q.id];
  assert(!!byId && byId.id === q.id, `Question ${q.id} is resolvable in SE_QUESTIONS_BY_ID`);
  const inStored = SE_STORED_QUESTIONS.find((sq) => sq.id === q.id);
  assert(!!inStored, `Question ${q.id} is resolvable in SE_STORED_QUESTIONS`);
});

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("ALL TESTS PASSED! MedAT SE Generalprobe #3 is 100% verified and production-ready.");
} else {
  console.error(`FAILED: ${errorCount} errors encountered during verification.`);
  process.exit(1);
}
console.log("================================================================================\n");
