/**
 * Comprehensive Quality Assurance & Social-Emotional Assessment Verification Suite
 * MedAT Emotionen erkennen (EE) — Generalprobe #1 (14 Questions, 70 Judgments)
 */

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
} from "../src/data/questions/ee/types";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT EE QUALITY ASSURANCE & EMOTION ASSESSMENT SUITE — GENERALPROBE #1");
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
  RAW_GENERALPROBE_1_EE_QUESTIONS.length === 14,
  `RAW questions count is exactly 14 (actual: ${RAW_GENERALPROBE_1_EE_QUESTIONS.length})`
);
assert(
  GENERALPROBE_1_EE_QUESTIONS.length === 14,
  `GENERALPROBE_1_EE_QUESTIONS count is exactly 14 (actual: ${GENERALPROBE_1_EE_QUESTIONS.length})`
);

// IDs
RAW_GENERALPROBE_1_EE_QUESTIONS.forEach((q, idx) => {
  const expectedId = `SEK-EE-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
});

// 2. Scenario & Person Specification
console.log("\n--- 2. Scenario & Person Specification ---");
RAW_GENERALPROBE_1_EE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.scenario && q.scenario.length > 50,
    `Q${qNum} (${q.id}) has substantial scenario text (${q.scenario.length} chars)`
  );
  assert(
    !!q.person && !!q.person.name && !!q.person.context,
    `Q${qNum} (${q.id}) has identified person: ${q.person?.name} (${q.person?.context})`
  );
});

// 3. 5 Distinct Emotions per Question & Valid Binary Classifications
console.log("\n--- 3. Emotions & Binary Classification Integrity ---");
let totalLikely = 0;
let totalUnlikely = 0;

RAW_GENERALPROBE_1_EE_QUESTIONS.forEach((q, idx) => {
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

console.log(`Total Judgments across 14 Questions (70 items): Likely = ${totalLikely}, Unlikely = ${totalUnlikely}`);
assert(
  totalLikely === 35 && totalUnlikely === 35,
  `Balanced judgments across all 70 items: 35 likely (50.0%) and 35 unlikely (50.0%) (actual: ${totalLikely} / ${totalUnlikely})`
);

// 4. Difficulty Distribution (Target: exactly 4 Leicht, 7 Mittel, 3 Schwer)
console.log("\n--- 4. Difficulty Distribution ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
RAW_GENERALPROBE_1_EE_QUESTIONS.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log(diffDist);
assert(diffDist.Leicht === 4, `Leicht count is 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 7, `Mittel count is 7 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 3, `Schwer count is 3 (actual: ${diffDist.Schwer})`);

// 5. Explanations & Rationales Completeness
console.log("\n--- 5. Explanations & Individual Rationales ---");
RAW_GENERALPROBE_1_EE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    !!q.explanation && q.explanation.length > 30,
    `Q${qNum} (${q.id}) has global explanation`
  );
  assert(
    !!q.rationaleByEmotion,
    `Q${qNum} (${q.id}) has rationaleByEmotion dictionary`
  );
  if (q.rationaleByEmotion) {
    const keys = ["A", "B", "C", "D", "E"] as const;
    keys.forEach((k) => {
      assert(
        !!q.rationaleByEmotion![k] && q.rationaleByEmotion![k].length > 10,
        `Q${qNum} (${q.id}) emotion ${k} has detailed individual rationale`
      );
    });
  }
});

// 6. Base-3 Encoding, Decoding & All-or-Nothing Scoring Verification
console.log("\n--- 6. Base-3 Encoding & Scoring Logic Verification ---");
RAW_GENERALPROBE_1_EE_QUESTIONS.forEach((q, idx) => {
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

  // Full score test: all 5 correct -> 1 point
  const evalFull = evaluateEeTaskDetail(correctCode, q);
  assert(evalFull.isTaskCorrect === true, `Q${qNum} (${q.id}) 5/5 correct yields isTaskCorrect === true`);
  assert(evalFull.correctEmotionCount === 5, `Q${qNum} (${q.id}) 5/5 correct yields correctEmotionCount === 5`);

  // Partial score test: 4 correct, 1 wrong -> 0 points (MedAT all-or-nothing rule)
  const flawedSelections = { ...decoded };
  const firstKey = q.emotions[0].id;
  flawedSelections[firstKey] = q.emotions[0].correctProbability === "likely" ? "unlikely" : "likely";
  const flawedCode = encodeEeSelections(flawedSelections);
  const evalFlawed = evaluateEeTaskDetail(flawedCode, q);
  assert(evalFlawed.isTaskCorrect === false, `Q${qNum} (${q.id}) 4/5 correct yields isTaskCorrect === false (0 points)`);
  assert(evalFlawed.correctEmotionCount === 4, `Q${qNum} (${q.id}) 4/5 correct yields correctEmotionCount === 4`);

  // Unanswered test: 0 points
  const unansEval = evaluateEeTaskDetail(0, q);
  assert(unansEval.isTaskCorrect === false, `Q${qNum} (${q.id}) unanswered yields isTaskCorrect === false (0 points)`);
});

// 7. Generalprobe #1 Integration Verification
console.log("\n--- 7. Generalprobe #1 Full Integration Verification ---");
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

assert(
  totalScoredQuestions === 221,
  `Generalprobe #1 has exactly 221 scored questions (actual: ${totalScoredQuestions})`
);
assert(gp1.gmCards.length === 8, `Generalprobe #1 has exactly 8 GM cards (actual: ${gp1.gmCards.length})`);
assert(gp1.eeQuestions.length === 14, `Generalprobe #1 has exactly 14 EE questions (actual: ${gp1.eeQuestions.length})`);

// Verify EE IDs in Generalprobe #1
const eeIds = gp1.eeQuestions.map((q) => q.id);
console.log("EE IDs in Generalprobe #1:", eeIds[0], "...", eeIds[13]);
assert(eeIds[0] === "SEK-EE-001" && eeIds[13] === "SEK-EE-014", "EE IDs are SEK-EE-001 through SEK-EE-014");

// Subtest invariant checks
const bioGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "bio");
const chemGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "chem");
const physGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "phys");
const mathGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "math");

assert(bioGp1.length === 40, `BMS Biology remains exactly 40 questions (actual: ${bioGp1.length})`);
assert(chemGp1.length === 24, `BMS Chemistry remains exactly 24 questions (actual: ${chemGp1.length})`);
assert(physGp1.length === 18, `BMS Physics remains exactly 18 questions (actual: ${physGp1.length})`);
assert(mathGp1.length === 12, `BMS Mathematics remains exactly 12 questions (actual: ${mathGp1.length})`);
assert(gp1.tvQuestions.length === 12, `Textverständnis remains exactly 12 questions (actual: ${gp1.tvQuestions.length})`);
assert(gp1.fzQuestions.length === 15, `FZ remains exactly 15 questions (actual: ${gp1.fzQuestions.length})`);
assert(gp1.zfQuestions.length === 10, `ZF remains exactly 10 questions (actual: ${gp1.zfQuestions.length})`);
assert(gp1.wfQuestions.length === 15, `WF remains exactly 15 questions (actual: ${gp1.wfQuestions.length})`);
assert(gp1.gmStoredQuestions.length === 25, `GM remains exactly 25 recall questions (actual: ${gp1.gmStoredQuestions.length})`);
assert(gp1.ieQuestions.length === 10, `IE remains exactly 10 questions (actual: ${gp1.ieQuestions.length})`);
assert(gp1.erQuestions.length === 12, `ER remains exactly 12 questions (actual: ${gp1.erQuestions.length})`);
assert(gp1.seQuestions.length === 14, `SE remains exactly 14 questions (actual: ${gp1.seQuestions.length})`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT EE QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT EE QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
