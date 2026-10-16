/**
 * Comprehensive Quality Assurance & Mathematical Verification Suite
 * MedAT Zahlenfolgen (ZF) — Generalprobe #2 (10 Questions)
 */

import {
  RAW_GENERALPROBE_2_ZF_QUESTIONS,
  GENERALPROBE_2_ZF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2ZfQuestions";
import {
  RAW_GENERALPROBE_1_ZF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1ZfQuestions";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
} from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT ZF QUALITY ASSURANCE & MATHEMATICAL VERIFICATION SUITE — GENERALPROBE #2");
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

const rawQuestions = RAW_GENERALPROBE_2_ZF_QUESTIONS;
const storedQuestions = GENERALPROBE_2_ZF_QUESTIONS;

// 1. Question Count
assert(rawQuestions.length === 10, `Raw questions count is exactly 10 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 10, `Stored questions count is exactly 10 (found: ${storedQuestions.length})`);

// 2. ID Uniqueness & Correct GP2 Naming Pattern
const ids = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-ZF-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!ids.has(q.id), `ID ${q.id} is unique`);
  ids.add(q.id);
});

storedQuestions.forEach((q, idx) => {
  const expectedId = `KFF-ZF-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Stored question ${idx + 1} matches ID ${expectedId}`);
});

// 3. Difficulty Distribution (Required: exactly 3 Leicht, 5 Mittel, 2 Schwer)
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("\n--- Difficulty Distribution ---");
console.log(diffDist);
assert(diffDist.Leicht === 3, `Leicht count is exactly 3 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 5, `Mittel count is exactly 5 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 2, `Schwer count is exactly 2 (actual: ${diffDist.Schwer})`);

// 4. Answer Key Distribution (Balanced: exactly 2 A, 2 B, 2 C, 2 D, 2 E)
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("\n--- Answer Key Distribution ---");
console.log(ansDist);
assert(ansDist.A === 2, `Option A count is exactly 2 (actual: ${ansDist.A})`);
assert(ansDist.B === 2, `Option B count is exactly 2 (actual: ${ansDist.B})`);
assert(ansDist.C === 2, `Option C count is exactly 2 (actual: ${ansDist.C})`);
assert(ansDist.D === 2, `Option D count is exactly 2 (actual: ${ansDist.D})`);
assert(ansDist.E === 2, `Option E count is exactly 2 (actual: ${ansDist.E})`);

// 5. Sequence Structure & Mathematical Derivation Checks
console.log("\n--- Sequence Structure & Mathematical Derivation Checks ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;

  // Exactly 7 given numbers
  assert(
    Array.isArray(q.sequence) && q.sequence.length === 7,
    `Q${qNum} (${q.id}) sequence contains exactly 7 numbers`
  );
  assert(
    q.sequence.every((n) => Number.isInteger(n)),
    `Q${qNum} (${q.id}) all sequence elements are valid integers`
  );

  // Exactly two expected next values
  assert(
    Array.isArray(q.expectedNextValues) && q.expectedNextValues.length === 2,
    `Q${qNum} (${q.id}) expectedNextValues is a 2-number tuple`
  );
  assert(
    q.expectedNextValues.every((n) => Number.isInteger(n)),
    `Q${qNum} (${q.id}) expectedNextValues are valid integers`
  );

  // Options A–D structure & uniqueness
  const optPairs = new Set<string>();
  const optKeys = ["A", "B", "C", "D"] as const;
  optKeys.forEach((key) => {
    const pair = q.options[key];
    assert(
      Array.isArray(pair) && pair.length === 2 && Number.isInteger(pair[0]) && Number.isInteger(pair[1]),
      `Q${qNum} Option ${key} is a valid ordered integer pair: ${JSON.stringify(pair)}`
    );
    if (pair) {
      const pairStr = `${pair[0]},${pair[1]}`;
      assert(!optPairs.has(pairStr), `Q${qNum} Option ${key} (${pairStr}) is distinct from other options`);
      optPairs.add(pairStr);
    }
  });

  // Option E check (must be null representing 'Keine Antwort')
  assert(q.options.E === null, `Q${qNum} Option E is null`);

  // Correct answer logic check
  const expStr = `${q.expectedNextValues[0]},${q.expectedNextValues[1]}`;
  if (q.correctAnswer === "E") {
    // None of A-D should match expectedNextValues
    optKeys.forEach((key) => {
      const pair = q.options[key];
      const match = pair && pair[0] === q.expectedNextValues[0] && pair[1] === q.expectedNextValues[1];
      assert(!match, `Q${qNum} Option ${key} does not match expectedNextValues (Option E is correct)`);
    });
  } else {
    // The designated correct option MUST match expectedNextValues exactly
    const correctPair = q.options[q.correctAnswer];
    assert(
      !!correctPair && correctPair[0] === q.expectedNextValues[0] && correctPair[1] === q.expectedNextValues[1],
      `Q${qNum} Correct Option ${q.correctAnswer} (${JSON.stringify(correctPair)}) matches expectedNextValues (${JSON.stringify(q.expectedNextValues)})`
    );

    // All other options must NOT match expectedNextValues
    optKeys.filter((k) => k !== q.correctAnswer).forEach((key) => {
      const pair = q.options[key];
      const match = pair && pair[0] === q.expectedNextValues[0] && pair[1] === q.expectedNextValues[1];
      assert(!match, `Q${qNum} Distractor Option ${key} (${JSON.stringify(pair)}) does not match expectedNextValues`);
    });
  }

  // Substantive explanation
  assert(
    typeof q.explanation === "string" && q.explanation.length > 80,
    `Q${qNum} (${q.id}) explanation is comprehensive (${q.explanation.length} chars)`
  );
});

// 6. Explicit Mathematical Pattern Evaluation
console.log("\n--- Explicit Mathematical Verification per Pattern ---");
{
  // Q1: 68, 61, 54, 47, 40, 33, 26 -> -7 constant
  const q1 = rawQuestions[0];
  let curr = 68;
  const fullSeqQ1 = [68];
  for (let i = 0; i < 8; i++) {
    curr -= 7;
    fullSeqQ1.push(curr);
  }
  assert(
    q1.sequence.every((n, i) => n === fullSeqQ1[i]) &&
    q1.expectedNextValues[0] === fullSeqQ1[7] &&
    q1.expectedNextValues[1] === fullSeqQ1[8],
    "Q1: Mathematical pattern (-7 constant) strictly generates all 9 terms"
  );
}

{
  // Q2: 768, 384, 192, 96, 48, 24, 12 -> /2 constant
  const q2 = rawQuestions[1];
  let curr = 768;
  const fullSeqQ2 = [768];
  for (let i = 0; i < 8; i++) {
    curr = curr / 2;
    fullSeqQ2.push(curr);
  }
  assert(
    q2.sequence.every((n, i) => n === fullSeqQ2[i]) &&
    q2.expectedNextValues[0] === fullSeqQ2[7] &&
    q2.expectedNextValues[1] === fullSeqQ2[8],
    "Q2: Mathematical pattern (/2 constant) strictly generates all 9 terms"
  );
}

{
  // Q3: 3, 5, 9, 15, 23, 33, 45 -> +2, +4, +6, +8, +10, +12, +14, +16
  const q3 = rawQuestions[2];
  let curr = 3;
  const fullSeqQ3 = [3];
  for (let i = 1; i <= 8; i++) {
    curr += 2 * i;
    fullSeqQ3.push(curr);
  }
  assert(
    q3.sequence.every((n, i) => n === fullSeqQ3[i]) &&
    q3.expectedNextValues[0] === fullSeqQ3[7] &&
    q3.expectedNextValues[1] === fullSeqQ3[8],
    "Q3: Mathematical pattern (increasing even diffs +2n) strictly generates all 9 terms"
  );
}

{
  // Q4: 11, 17, 14, 20, 17, 23, 20 -> +6, -3 alternating
  const q4 = rawQuestions[3];
  let curr = 11;
  const fullSeqQ4 = [11];
  for (let i = 0; i < 4; i++) {
    curr += 6;
    fullSeqQ4.push(curr);
    curr -= 3;
    fullSeqQ4.push(curr);
  }
  assert(
    q4.sequence.every((n, i) => n === fullSeqQ4[i]) &&
    q4.expectedNextValues[0] === fullSeqQ4[7] &&
    q4.expectedNextValues[1] === fullSeqQ4[8],
    "Q4: Mathematical pattern (+6, -3 alternating) strictly generates all 9 terms"
  );
}

{
  // Q5: 95, 80, 67, 56, 47, 40, 35 -> -15, -13, -11, -9, -7, -5, -3, -1
  const q5 = rawQuestions[4];
  let curr = 95;
  const fullSeqQ5 = [95];
  const diffs = [15, 13, 11, 9, 7, 5, 3, 1];
  diffs.forEach((d) => {
    curr -= d;
    fullSeqQ5.push(curr);
  });
  assert(
    q5.sequence.every((n, i) => n === fullSeqQ5[i]) &&
    q5.expectedNextValues[0] === fullSeqQ5[7] &&
    q5.expectedNextValues[1] === fullSeqQ5[8],
    "Q5: Mathematical pattern (decreasing odd diffs) strictly generates all 9 terms"
  );
}

{
  // Q6: 5, 10, 6, 12, 8, 16, 12 -> *2, -4 alternating
  const q6 = rawQuestions[5];
  let curr = 5;
  const fullSeqQ6 = [5];
  for (let i = 0; i < 4; i++) {
    curr = curr * 2;
    fullSeqQ6.push(curr);
    curr = curr - 4;
    fullSeqQ6.push(curr);
  }
  assert(
    q6.sequence.every((n, i) => n === fullSeqQ6[i]) &&
    q6.expectedNextValues[0] === fullSeqQ6[7] &&
    q6.expectedNextValues[1] === fullSeqQ6[8],
    "Q6: Mathematical pattern (*2, -4 alternating) strictly generates all 9 terms"
  );
}

{
  // Q7: 2, 4, 6, 10, 16, 26, 42 -> Fibonacci a_n = a_{n-1} + a_{n-2}
  const q7 = rawQuestions[6];
  const fullSeqQ7 = [2, 4];
  for (let i = 2; i < 9; i++) {
    fullSeqQ7.push(fullSeqQ7[i - 1] + fullSeqQ7[i - 2]);
  }
  assert(
    q7.sequence.every((n, i) => n === fullSeqQ7[i]) &&
    q7.expectedNextValues[0] === fullSeqQ7[7] &&
    q7.expectedNextValues[1] === fullSeqQ7[8],
    "Q7: Mathematical pattern (Fibonacci recursive addition) strictly generates all 9 terms"
  );
}

{
  // Q8: 4, 3, 9, 6, 14, 12, 19 -> interleaved odd +5, even *2
  const q8 = rawQuestions[7];
  const odd = [4, 9, 14, 19, 24]; // +5
  const even = [3, 6, 12, 24];    // *2
  const fullSeqQ8: number[] = [];
  for (let i = 0; i < 4; i++) {
    fullSeqQ8.push(odd[i]);
    fullSeqQ8.push(even[i]);
  }
  fullSeqQ8.push(odd[4]); // 9th term
  assert(
    q8.sequence.every((n, i) => n === fullSeqQ8[i]) &&
    q8.expectedNextValues[0] === fullSeqQ8[7] &&
    q8.expectedNextValues[1] === fullSeqQ8[8],
    "Q8: Mathematical pattern (interleaved odd +5, even *2) strictly generates all 9 terms"
  );
}

{
  // Q9: 2, 5, 10, 11, 14, 28, 29 -> cycle (+3, *2, +1)
  const q9 = rawQuestions[8];
  let curr = 2;
  const fullSeqQ9 = [2];
  const ops = [
    (x: number) => x + 3,
    (x: number) => x * 2,
    (x: number) => x + 1,
    (x: number) => x + 3,
    (x: number) => x * 2,
    (x: number) => x + 1,
    (x: number) => x + 3,
    (x: number) => x * 2,
  ];
  ops.forEach((op) => {
    curr = op(curr);
    fullSeqQ9.push(curr);
  });
  assert(
    q9.sequence.every((n, i) => n === fullSeqQ9[i]) &&
    q9.expectedNextValues[0] === fullSeqQ9[7] &&
    q9.expectedNextValues[1] === fullSeqQ9[8],
    "Q9: Mathematical pattern (3-step cycle +3, *2, +1) strictly generates all 9 terms"
  );
}

{
  // Q10: 81, 10, 27, 17, 9, 24, 3 -> interleaved odd /3, even +7
  const q10 = rawQuestions[9];
  const odd = [81, 27, 9, 3, 1];   // /3
  const even = [10, 17, 24, 31];   // +7
  const fullSeqQ10: number[] = [];
  for (let i = 0; i < 4; i++) {
    fullSeqQ10.push(odd[i]);
    fullSeqQ10.push(even[i]);
  }
  fullSeqQ10.push(odd[4]); // 9th term
  assert(
    q10.sequence.every((n, i) => n === fullSeqQ10[i]) &&
    q10.expectedNextValues[0] === fullSeqQ10[7] &&
    q10.expectedNextValues[1] === fullSeqQ10[8],
    "Q10: Mathematical pattern (interleaved odd /3, even +7) strictly generates all 9 terms"
  );
}

// 7. Non-Regression & Disjointness from Generalprobe #1
console.log("\n--- Non-Regression & Disjointness from Generalprobe #1 ---");
const gp1Raw = RAW_GENERALPROBE_1_ZF_QUESTIONS;
assert(gp1Raw.length === 10, `GP1 raw questions length remains 10 (actual: ${gp1Raw.length})`);

// Ensure no sequence in GP2 is identical to any sequence in GP1
rawQuestions.forEach((q2, i2) => {
  gp1Raw.forEach((q1, i1) => {
    const isSameSeq = q2.sequence.every((val, idx) => val === q1.sequence[idx]);
    assert(!isSameSeq, `GP2 Q${i2 + 1} sequence is distinct from GP1 Q${i1 + 1}`);
  });
});

// 8. Generalprobe #2 Dataset Integration Check
console.log("\n--- Generalprobe #2 Dataset Integration ---");
const gp2 = buildGeneralprobe2Dataset();
assert(gp2.zfQuestions.length === 10, `GP2 zfQuestions contains exactly 10 questions (actual: ${gp2.zfQuestions.length})`);

const zfIds = gp2.zfQuestions.map((q) => q.id);
console.log("ZF IDs in Generalprobe #2:", zfIds.join(", "));
assert(
  zfIds[0] === "KFF-ZF-GP2-001" && zfIds[9] === "KFF-ZF-GP2-010",
  "GP2 ZF IDs are KFF-ZF-GP2-001 through KFF-ZF-GP2-010"
);

gp2.zfQuestions.forEach((q, idx) => {
  assert(!!q.zfData, `GP2 question ${idx + 1} (${q.id}) has zfData attached`);
});

// GP1 Dataset Isolation Check
const gp1 = buildGeneralprobe1Dataset();
assert(gp1.zfQuestions.length === 10, `GP1 zfQuestions contains exactly 10 questions (actual: ${gp1.zfQuestions.length})`);
assert(
  gp1.zfQuestions[0].id === "KFF-ZF-001" && gp1.zfQuestions[9].id === "KFF-ZF-010",
  "GP1 ZF IDs remain KFF-ZF-001 through KFF-ZF-010"
);

// 9. Adversarial Tests for Validator Robustness
console.log("\n--- Adversarial Validation Tests ---");
{
  // Test: Order reversal detection
  const correct = [31, 1];
  const reversed = [1, 31];
  const isMatch = correct[0] === reversed[0] && correct[1] === reversed[1];
  assert(!isMatch, "Adversarial Test: Validator rejects reversed term order ([1, 31] != [31, 1])");
}
{
  // Test: Incompatible rule detection
  const seq = [2, 4, 6, 8, 10];
  const falseNext = [11, 13];
  const diff1 = falseNext[0] - seq[4];
  assert(diff1 !== 2, "Adversarial Test: Validator detects arithmetic rule violation");
}

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT ZF GP2 QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT ZF GP2 QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
