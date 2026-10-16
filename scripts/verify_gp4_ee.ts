/**
 * Comprehensive Quality Assurance & Social-Emotional Assessment Verification Suite
 * MedAT Emotionen erkennen (EE) — Generalprobe #4 (14 Scenarios, 70 Judgments)
 */

import {
  RAW_GENERALPROBE_4_EE_QUESTIONS,
  GENERALPROBE_4_EE_QUESTIONS,
  GENERALPROBE_4_EE_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe4EeQuestions";
import {
  RAW_GENERALPROBE_3_EE_QUESTIONS,
  GENERALPROBE_3_EE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3EeQuestions";
import {
  RAW_GENERALPROBE_2_EE_QUESTIONS,
  GENERALPROBE_2_EE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2EeQuestions";
import {
  RAW_GENERALPROBE_1_EE_QUESTIONS,
  GENERALPROBE_1_EE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1EeQuestions";
import {
  decodeEeSelections,
  encodeEeSelections,
  evaluateEeTaskDetail,
  getEeCorrectAnswerCode,
  isEeFullyAnswered,
  countEeAnsweredEmotions,
} from "../src/data/questions/ee/types";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
  buildGeneralprobe3Dataset,
  buildGeneralprobe4Dataset,
  buildEeSimulationQuestions,
} from "../src/data/generalprobe/generalprobeData";
import { EE_STORED_QUESTIONS } from "../src/data/questions/ee";

console.log("================================================================================");
console.log("MEDAT EE QUALITY ASSURANCE & EMOTION ASSESSMENT SUITE — GENERALPROBE #4");
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

const rawQuestions = RAW_GENERALPROBE_4_EE_QUESTIONS;
const storedQuestions = GENERALPROBE_4_EE_QUESTIONS;
const simData = GENERALPROBE_4_EE_SIMULATION_DATA;

// 1. Question Count & Identification
console.log("--- 1. Question Count & Identification ---");
assert(rawQuestions.length === 14, `Raw questions count is exactly 14 (actual: ${rawQuestions.length})`);
assert(storedQuestions.length === 14, `Stored questions count is exactly 14 (actual: ${storedQuestions.length})`);
assert(simData.questions.length === 14, `Simulation data questions count is exactly 14 (actual: ${simData.questions.length})`);
assert(simData.timeLimitSeconds === 1260, `Time limit is exactly 1260s / 21 minutes (actual: ${simData.timeLimitSeconds})`);

// IDs
const idSet = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `SEK-EE-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!idSet.has(q.id), `ID ${q.id} is unique`);
  idSet.add(q.id);
});

storedQuestions.forEach((sq, idx) => {
  const expectedId = `SEK-EE-GP4-${String(idx + 1).padStart(3, "0")}`;
  const expectedLegacy = `ee-sim4-q${String(idx + 1).padStart(2, "0")}`;
  assert(sq.id === expectedId, `Stored Q${idx + 1} ID is ${expectedId} (actual: ${sq.id})`);
  assert(sq.legacyId === expectedLegacy, `Stored Q${idx + 1} legacyId is ${expectedLegacy} (actual: ${sq.legacyId})`);
  assert(sq.exam === "BOTH", `Stored Q${idx + 1} exam is BOTH (actual: ${sq.exam})`);
  assert(sq.section === "SEK", `Stored Q${idx + 1} section is SEK (actual: ${sq.section})`);
  assert(sq.subjectId === "sek-emo-rec", `Stored Q${idx + 1} subjectId is sek-emo-rec (actual: ${sq.subjectId})`);
  assert(sq.chapterId === "sek-rec-face", `Stored Q${idx + 1} chapterId is sek-rec-face (actual: ${sq.chapterId})`);
});

// 2. Scenario & Person Specification
console.log("\n--- 2. Scenario & Person Specification ---");
const personNames = new Set<string>();
const previousNames = new Set<string>();
[
  ...RAW_GENERALPROBE_1_EE_QUESTIONS,
  ...RAW_GENERALPROBE_2_EE_QUESTIONS,
  ...RAW_GENERALPROBE_3_EE_QUESTIONS,
].forEach((q) => {
  if (q.person?.name) previousNames.add(q.person.name);
});

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.scenario && q.scenario.length > 80,
    `Q${qNum} (${q.id}) has substantial scenario text (${q.scenario.length} chars)`
  );
  assert(
    !!q.person && !!q.person.name && !!q.person.context,
    `Q${qNum} (${q.id}) has identified person: ${q.person?.name} (${q.person?.context})`
  );
  assert(!personNames.has(q.person.name), `Q${qNum} person name "${q.person.name}" is unique within GP4`);
  assert(!previousNames.has(q.person.name), `Q${qNum} person name "${q.person.name}" is distinct from GP1, GP2 & GP3`);
  personNames.add(q.person.name);
});

// 3. 5 Distinct Emotions per Question & Valid Binary Classifications
console.log("\n--- 3. Emotions & Binary Classification Integrity ---");
let totalLikely = 0;
let totalUnlikely = 0;

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    Array.isArray(q.emotions) && q.emotions.length === 5,
    `Q${qNum} (${q.id}) has exactly 5 emotions`
  );

  const labels = new Set<string>();
  const keys = ["A", "B", "C", "D", "E"] as const;

  q.emotions.forEach((emo, emoIdx) => {
    const expectedKey = keys[emoIdx];
    assert(
      emo.id === expectedKey,
      `Q${qNum} (${q.id}) emotion ${emoIdx + 1} key is ${expectedKey} (actual: ${emo.id})`
    );
    assert(
      !!emo.label && emo.label.trim().length > 0,
      `Q${qNum} (${q.id}) emotion ${expectedKey} has non-empty label: "${emo.label}"`
    );
    assert(
      !labels.has(emo.label.toLowerCase()),
      `Q${qNum} (${q.id}) emotion "${emo.label}" is unique within question`
    );
    labels.add(emo.label.toLowerCase());

    assert(
      emo.correctProbability === "likely" || emo.correctProbability === "unlikely",
      `Q${qNum} (${q.id}) emotion ${expectedKey} has valid classification: ${emo.correctProbability}`
    );

    if (emo.correctProbability === "likely") totalLikely++;
    if (emo.correctProbability === "unlikely") totalUnlikely++;
  });
});

console.log(`  Total Judgments across 14 Questions (70 items): Likely = ${totalLikely}, Unlikely = ${totalUnlikely}`);
assert(
  totalLikely === 35 && totalUnlikely === 35,
  `Balanced judgments across all 70 items: exactly 35 likely (50.0%) and 35 unlikely (50.0%) (actual: ${totalLikely} / ${totalUnlikely})`
);

// 4. Difficulty Distribution (Target: exactly 4 Leicht, 7 Mittel, 3 Schwer)
console.log("\n--- 4. Difficulty Distribution ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("  Difficulty Counts:", diffDist);
assert(diffDist.Leicht === 4, `Leicht count is exactly 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 7, `Mittel count is exactly 7 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 3, `Schwer count is exactly 3 (actual: ${diffDist.Schwer})`);

// 5. Explanations & Rationales Completeness
console.log("\n--- 5. Explanations & Individual Rationales ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.explanation && q.explanation.length > 50,
    `Q${qNum} (${q.id}) has global explanation (${q.explanation.length} chars)`
  );
  assert(
    !!q.rationaleByEmotion,
    `Q${qNum} (${q.id}) has rationaleByEmotion dictionary`
  );
  if (q.rationaleByEmotion) {
    const keys = ["A", "B", "C", "D", "E"] as const;
    keys.forEach((k) => {
      assert(
        !!q.rationaleByEmotion![k] && q.rationaleByEmotion![k].length > 15,
        `Q${qNum} (${q.id}) emotion ${k} has detailed individual rationale: "${q.rationaleByEmotion![k]}"`
      );
    });
  }
});

// 6. Base-3 Encoding, Decoding & All-or-Nothing Scoring Verification
console.log("\n--- 6. Base-3 Encoding & Scoring Logic Verification ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const correctCode = getEeCorrectAnswerCode(q);

  // Decoding verification
  const decoded = decodeEeSelections(correctCode);
  q.emotions.forEach((emo) => {
    assert(
      decoded[emo.id] === emo.correctProbability,
      `Q${qNum} (${q.id}) decoded[${emo.id}] matches correctProbability (${emo.correctProbability})`
    );
  });

  // Stored question alignment
  const sq = storedQuestions[idx];
  assert(sq.correctAnswer === correctCode, `Stored Q${qNum} correctAnswer matches correctCode (${correctCode})`);

  // Full score test: all 5 correct -> 1 point
  const evalFull = evaluateEeTaskDetail(correctCode, q);
  assert(evalFull.isTaskCorrect === true, `Q${qNum} (${q.id}) 5/5 correct yields isTaskCorrect === true (1 point)`);
  assert(evalFull.correctEmotionCount === 5, `Q${qNum} (${q.id}) 5/5 correct yields correctEmotionCount === 5`);

  // Partial score test: 4 correct, 1 wrong -> 0 points (MedAT strict all-or-nothing rule)
  const flawedSelections = { ...decoded };
  const firstKey = q.emotions[0].id;
  flawedSelections[firstKey] = q.emotions[0].correctProbability === "likely" ? "unlikely" : "likely";
  const flawedCode = encodeEeSelections(flawedSelections);
  const evalFlawed = evaluateEeTaskDetail(flawedCode, q);
  assert(evalFlawed.isTaskCorrect === false, `Q${qNum} (${q.id}) 4/5 correct yields isTaskCorrect === false (0 points)`);
  assert(evalFlawed.correctEmotionCount === 4, `Q${qNum} (${q.id}) 4/5 correct yields correctEmotionCount === 4`);

  // Three correct, two incorrect: 0 points
  const twoFlawedSelections = { ...flawedSelections };
  const secondKey = q.emotions[1].id;
  twoFlawedSelections[secondKey] = q.emotions[1].correctProbability === "likely" ? "unlikely" : "likely";
  const twoFlawedCode = encodeEeSelections(twoFlawedSelections);
  const evalTwoFlawed = evaluateEeTaskDetail(twoFlawedCode, q);
  assert(evalTwoFlawed.isTaskCorrect === false, `Q${qNum} (${q.id}) 3/5 correct yields isTaskCorrect === false (0 points)`);
  assert(evalTwoFlawed.correctEmotionCount === 3, `Q${qNum} (${q.id}) 3/5 correct yields correctEmotionCount === 3`);

  // All 5 incorrect test: 0 points
  const invertedSelections = {} as Record<"A" | "B" | "C" | "D" | "E", "likely" | "unlikely">;
  q.emotions.forEach((emo) => {
    invertedSelections[emo.id] = emo.correctProbability === "likely" ? "unlikely" : "likely";
  });
  const invertedCode = encodeEeSelections(invertedSelections);
  const evalInverted = evaluateEeTaskDetail(invertedCode, q);
  assert(evalInverted.isTaskCorrect === false, `Q${qNum} (${q.id}) 0/5 correct yields isTaskCorrect === false (0 points)`);
  assert(evalInverted.correctEmotionCount === 0, `Q${qNum} (${q.id}) 0/5 correct yields correctEmotionCount === 0`);

  // Unanswered test: 0 points
  const unansEval = evaluateEeTaskDetail(0, q);
  assert(unansEval.isTaskCorrect === false, `Q${qNum} (${q.id}) unanswered yields isTaskCorrect === false (0 points)`);
  assert(!isEeFullyAnswered(0), `Q${qNum} unanswered code is not fully answered`);

  // Incomplete test (e.g. 3 answered, 2 unselected)
  const partialSelections = { ...decoded };
  partialSelections["D"] = "unselected";
  partialSelections["E"] = "unselected";
  const partialCode = encodeEeSelections(partialSelections);
  assert(!isEeFullyAnswered(partialCode), `Q${qNum} partialCode is not fully answered`);
  assert(countEeAnsweredEmotions(partialCode) === 3, `Q${qNum} partialCode answered count is 3`);
  const partialEval = evaluateEeTaskDetail(partialCode, q);
  assert(partialEval.isTaskCorrect === false, `Q${qNum} incomplete selections yields isTaskCorrect === false`);
});

// 7. Independence & Non-Regression with Generalprobe #1, #2 & #3
console.log("\n--- 7. Independence & Non-Regression with Generalprobe #1, #2 & #3 ---");
assert(RAW_GENERALPROBE_1_EE_QUESTIONS.length === 14, `GP1 raw count preserved at 14`);
assert(GENERALPROBE_1_EE_QUESTIONS.length === 14, `GP1 stored count preserved at 14`);
assert(RAW_GENERALPROBE_2_EE_QUESTIONS.length === 14, `GP2 raw count preserved at 14`);
assert(GENERALPROBE_2_EE_QUESTIONS.length === 14, `GP2 stored count preserved at 14`);
assert(RAW_GENERALPROBE_3_EE_QUESTIONS.length === 14, `GP3 raw count preserved at 14`);
assert(GENERALPROBE_3_EE_QUESTIONS.length === 14, `GP3 stored count preserved at 14`);

const existingScenarios = new Set<string>();
RAW_GENERALPROBE_1_EE_QUESTIONS.forEach((q) => existingScenarios.add(q.scenario));
RAW_GENERALPROBE_2_EE_QUESTIONS.forEach((q) => existingScenarios.add(q.scenario));
RAW_GENERALPROBE_3_EE_QUESTIONS.forEach((q) => existingScenarios.add(q.scenario));

rawQuestions.forEach((q, idx) => {
  assert(!existingScenarios.has(q.scenario), `Q${idx + 1} scenario is completely new (zero overlap with GP1/GP2/GP3)`);
});

const existingIds = new Set([
  ...RAW_GENERALPROBE_1_EE_QUESTIONS.map((q) => q.id),
  ...RAW_GENERALPROBE_2_EE_QUESTIONS.map((q) => q.id),
  ...RAW_GENERALPROBE_3_EE_QUESTIONS.map((q) => q.id),
]);
rawQuestions.forEach((q) => {
  assert(!existingIds.has(q.id), `ID ${q.id} does not collide with GP1/GP2/GP3 IDs`);
});

// 8. Generalprobe #4 Full Integration Verification
console.log("\n--- 8. Generalprobe #4 Full Integration Verification ---");
const gp4 = buildGeneralprobe4Dataset();
assert(gp4.id === "generalprobe-4", `GP4 dataset ID is generalprobe-4`);
assert(gp4.eeQuestions.length === 14, `GP4 dataset has exactly 14 EE questions (found: ${gp4.eeQuestions.length})`);

gp4.eeQuestions.forEach((q, idx) => {
  const expectedId = `SEK-EE-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `GP4 dataset EE Q${idx + 1} ID is ${expectedId}`);
});

const helperEe = buildEeSimulationQuestions(4);
assert(helperEe.length === 14, `buildEeSimulationQuestions(4) returns exactly 14 questions`);

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
  const found = EE_STORED_QUESTIONS.find((item) => item.id === q.id);
  assert(found !== undefined, `Question ${q.id} is resolvable in EE_STORED_QUESTIONS`);
});

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("ALL TESTS PASSED! MedAT EE Generalprobe #4 is 100% verified and production-ready.");
} else {
  console.error(`FAILED with ${errorCount} errors!`);
  process.exitCode = 1;
}
console.log("================================================================================\n");
