/**
 * Comprehensive Quality Assurance & Mathematical Verification Suite
 * MedAT Zahlenfolgen (ZF) — Generalprobe #1 (10 Questions)
 */

import { RAW_GENERALPROBE_1_ZF_QUESTIONS, GENERALPROBE_1_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe1ZfQuestions";
import { ZF_SIMULATION_1_QUESTIONS } from "../src/data/questions/zf/zfSimulation1";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT ZF QUALITY ASSURANCE & MATHEMATICAL VERIFICATION SUITE — GENERALPROBE #1");
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
assert(RAW_GENERALPROBE_1_ZF_QUESTIONS.length === 10, `RAW questions count is exactly 10 (actual: ${RAW_GENERALPROBE_1_ZF_QUESTIONS.length})`);
assert(GENERALPROBE_1_ZF_QUESTIONS.length === 10, `GENERALPROBE_1_ZF_QUESTIONS count is exactly 10 (actual: ${GENERALPROBE_1_ZF_QUESTIONS.length})`);
assert(ZF_SIMULATION_1_QUESTIONS.length === 10, `ZF_SIMULATION_1_QUESTIONS count is exactly 10 (actual: ${ZF_SIMULATION_1_QUESTIONS.length})`);

// IDs
RAW_GENERALPROBE_1_ZF_QUESTIONS.forEach((q, idx) => {
  const expectedId = `KFF-ZF-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
});

// 2. Answer Key Distribution (Balanced: 2 A, 2 B, 2 C, 2 D, 2 E)
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
RAW_GENERALPROBE_1_ZF_QUESTIONS.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("\n--- Answer Key Distribution ---");
console.log(ansDist);
assert(ansDist.A === 2, `Option A count is 2 (actual: ${ansDist.A})`);
assert(ansDist.B === 2, `Option B count is 2 (actual: ${ansDist.B})`);
assert(ansDist.C === 2, `Option C count is 2 (actual: ${ansDist.C})`);
assert(ansDist.D === 2, `Option D count is 2 (actual: ${ansDist.D})`);
assert(ansDist.E === 2, `Option E count is 2 (actual: ${ansDist.E})`);

// Consecutive keys: check there are no duplicate consecutive answers
for (let i = 0; i < RAW_GENERALPROBE_1_ZF_QUESTIONS.length - 1; i++) {
  const cur = RAW_GENERALPROBE_1_ZF_QUESTIONS[i].correctAnswer;
  const nxt = RAW_GENERALPROBE_1_ZF_QUESTIONS[i + 1].correctAnswer;
  assert(cur !== nxt, `No consecutive duplicate answer keys: Q${i + 1} (${cur}) vs Q${i + 2} (${nxt})`);
}

// 3. Difficulty Distribution (3 Leicht, 5 Mittel, 2 Schwer)
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
RAW_GENERALPROBE_1_ZF_QUESTIONS.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("\n--- Difficulty Distribution ---");
console.log(diffDist);
assert(diffDist.Leicht === 3, `Leicht count is 3 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 5, `Mittel count is 5 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 2, `Schwer count is 2 (actual: ${diffDist.Schwer})`);

// 4. Mathematical Sequence & Options Verification
console.log("\n--- Sequence & Option Logic Verification ---");
RAW_GENERALPROBE_1_ZF_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(q.sequence.length === 7, `Q${qNum} (${q.id}) has exactly 7 given terms (actual: ${q.sequence.length})`);
  assert(q.expectedNextValues.length === 2, `Q${qNum} (${q.id}) has exactly 2 expected terms`);

  // Ensure all sequence values and expected values are integers
  const allTerms = [...q.sequence, ...q.expectedNextValues];
  const allIntegers = allTerms.every(v => Number.isInteger(v));
  assert(allIntegers, `Q${qNum} (${q.id}) contains only integers: [${allTerms.join(", ")}]`);

  // Verify Options A-D have 2 integer elements each
  const letterKeys = ["A", "B", "C", "D"] as const;
  letterKeys.forEach(k => {
    const opt = q.options[k];
    assert(Array.isArray(opt) && opt.length === 2 && Number.isInteger(opt[0]) && Number.isInteger(opt[1]),
      `Q${qNum} (${q.id}) Option ${k} has 2 integers: [${opt?.join(", ")}]`
    );
  });

  // Verify Option E is null / represents "Keine der Antwortmöglichkeiten ist richtig"
  assert(q.options.E === null, `Q${qNum} (${q.id}) Option E is null (represented as 'Keine der Antwortmöglichkeiten ist richtig')`);

  // Verify correctness logic
  const [e1, e2] = q.expectedNextValues;
  if (q.correctAnswer === "E") {
    // None of A-D should match [e1, e2]
    const matchesAny = letterKeys.some(k => {
      const opt = q.options[k];
      return opt && opt[0] === e1 && opt[1] === e2;
    });
    assert(!matchesAny, `Q${qNum} (${q.id}) Answer E: True solution [${e1}, ${e2}] is NOT among options A-D`);
  } else {
    // Selected option MUST match [e1, e2]
    const chosenOpt = q.options[q.correctAnswer as "A" | "B" | "C" | "D"];
    assert(chosenOpt && chosenOpt[0] === e1 && chosenOpt[1] === e2,
      `Q${qNum} (${q.id}) Answer ${q.correctAnswer} [${chosenOpt?.join(", ")}] matches expected [${e1}, ${e2}]`
    );
    // Other options must not match [e1, e2]
    letterKeys.filter(k => k !== q.correctAnswer).forEach(k => {
      const opt = q.options[k];
      const match = opt && opt[0] === e1 && opt[1] === e2;
      assert(!match, `Q${qNum} (${q.id}) Distractor ${k} does not duplicate correct solution`);
    });
  }

  // Check explanation quality
  assert(q.explanation.includes("Regel & mathematische Herleitung:"), `Q${qNum} (${q.id}) contains rule & derivation header`);
  assert(q.explanation.includes("Distraktoren-Analyse:"), `Q${qNum} (${q.id}) contains distractor analysis header`);
  assert(q.explanation.includes("Option A"), `Q${qNum} (${q.id}) explains Option A`);
  assert(q.explanation.includes("Option B"), `Q${qNum} (${q.id}) explains Option B`);
  assert(q.explanation.includes("Option C"), `Q${qNum} (${q.id}) explains Option C`);
  assert(q.explanation.includes("Option D"), `Q${qNum} (${q.id}) explains Option D`);
  assert(q.explanation.includes("Option E"), `Q${qNum} (${q.id}) explains Option E`);
});

// 5. StoredQuestion Formatting Verification
console.log("\n--- StoredQuestion Format Verification ---");
GENERALPROBE_1_ZF_QUESTIONS.forEach((sq, idx) => {
  const qNum = idx + 1;
  assert(sq.options.length === 5, `SQ Q${qNum} (${sq.id}) has exactly 5 options`);
  assert(sq.options[4] === "Keine der Antwortmöglichkeiten ist richtig", `SQ Q${qNum} (${sq.id}) Option 5 is 'Keine der Antwortmöglichkeiten ist richtig'`);
  assert(sq.correctAnswer >= 0 && sq.correctAnswer <= 4, `SQ Q${qNum} (${sq.id}) correctAnswer index ${sq.correctAnswer} is between 0 and 4`);
  assert(sq.subjectId === "kff-num", `SQ Q${qNum} (${sq.id}) subjectId is 'kff-num'`);
  assert(sq.chapterId === "kff-num-arith", `SQ Q${qNum} (${sq.id}) chapterId is 'kff-num-arith'`);
  assert(sq.section === "KFF", `SQ Q${qNum} (${sq.id}) section is 'KFF'`);
  assert(!!sq.zfData, `SQ Q${qNum} (${sq.id}) preserves zfData`);
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
assert(gp1.zfQuestions.length === 10, `Generalprobe #1 ZF section contains exactly 10 questions (actual: ${gp1.zfQuestions.length})`);
assert(gp1.fzQuestions.length === 15, `Generalprobe #1 FZ section contains exactly 15 questions (actual: ${gp1.fzQuestions.length})`);

// Check ZF IDs
const zfIds = gp1.zfQuestions.map(q => q.id);
console.log("ZF IDs in Generalprobe #1:", zfIds.join(", "));
assert(zfIds[0] === "KFF-ZF-001" && zfIds[9] === "KFF-ZF-010", "ZF IDs are KFF-ZF-001 through KFF-ZF-010");

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
  console.log("MEDAT ZF QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT ZF QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
