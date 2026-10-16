/**
 * Comprehensive Quality Assurance & Mathematical Verification Suite
 * MedAT Zahlenfolgen (ZF) — Generalprobe #3 (10 Questions)
 */

import {
  RAW_GENERALPROBE_3_ZF_QUESTIONS,
  GENERALPROBE_3_ZF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3ZfQuestions";
import {
  RAW_GENERALPROBE_1_ZF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1ZfQuestions";
import {
  RAW_GENERALPROBE_2_ZF_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2ZfQuestions";
import {
  buildZfSimulationQuestions,
} from "../src/data/generalprobe/generalprobeData";
import {
  ZF_SIMULATION_3_QUESTIONS,
} from "../src/data/questions/zf/zfSimulation3";

console.log("================================================================================");
console.log("MEDAT ZF QUALITY ASSURANCE & MATHEMATICAL VERIFICATION SUITE — GENERALPROBE #3");
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

const rawQuestions = RAW_GENERALPROBE_3_ZF_QUESTIONS;
const storedQuestions = GENERALPROBE_3_ZF_QUESTIONS;

// 1. Question Count
console.log("--- 1. QUESTION COUNT ---");
assert(rawQuestions.length === 10, `Raw questions count is exactly 10 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 10, `Stored questions count is exactly 10 (found: ${storedQuestions.length})`);

// 2. ID Uniqueness & Correct GP3 Naming Pattern
console.log("\n--- 2. ID FORMAT & UNIQUENESS ---");
const ids = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-ZF-GP3-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!ids.has(q.id), `ID ${q.id} is unique`);
  ids.add(q.id);
});

storedQuestions.forEach((q, idx) => {
  const expectedId = `KFF-ZF-GP3-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Stored question ${idx + 1} matches ID ${expectedId}`);
});

// 3. Difficulty Distribution (Required: exactly 3 Leicht, 5 Mittel, 2 Schwer)
console.log("\n--- 3. DIFFICULTY DISTRIBUTION ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("Difficulty Distribution:", diffDist);
assert(diffDist.Leicht === 3, `Leicht count is exactly 3 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 5, `Mittel count is exactly 5 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 2, `Schwer count is exactly 2 (actual: ${diffDist.Schwer})`);

// 4. Answer Key Distribution (Balanced: exactly 2 A, 2 B, 2 C, 2 D, 2 E)
console.log("\n--- 4. ANSWER KEY DISTRIBUTION & STREAK ---");
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("Answer Distribution:", ansDist);
assert(ansDist.A === 2, `Option A count is exactly 2 (actual: ${ansDist.A})`);
assert(ansDist.B === 2, `Option B count is exactly 2 (actual: ${ansDist.B})`);
assert(ansDist.C === 2, `Option C count is exactly 2 (actual: ${ansDist.C})`);
assert(ansDist.D === 2, `Option D count is exactly 2 (actual: ${ansDist.D})`);
assert(ansDist.E === 2, `Option E count is exactly 2 (actual: ${ansDist.E})`);

// Maximum consecutive streak of identical answer keys = 1
let maxStreak = 1;
let currentStreak = 1;
for (let i = 1; i < rawQuestions.length; i++) {
  if (rawQuestions[i].correctAnswer === rawQuestions[i - 1].correctAnswer) {
    currentStreak++;
    if (currentStreak > maxStreak) maxStreak = currentStreak;
  } else {
    currentStreak = 1;
  }
}
assert(maxStreak === 1, `Max consecutive streak is 1 (actual: ${maxStreak})`);

// 5. Sequence Structure & Mathematical Derivation Checks
console.log("\n--- 5. SEQUENCE STRUCTURE & DERIVATIONS ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;

  // Exactly 7 given numbers
  assert(
    Array.isArray(q.sequence) && q.sequence.length === 7,
    `Q${qNum} (${q.id}) sequence contains exactly 7 numbers`
  );
  assert(
    q.sequence.every((n) => Number.isInteger(n) && n > 0),
    `Q${qNum} (${q.id}) all sequence elements are valid positive integers`
  );

  // Exactly two expected next values
  assert(
    Array.isArray(q.expectedNextValues) && q.expectedNextValues.length === 2,
    `Q${qNum} (${q.id}) expectedNextValues is a 2-number tuple`
  );
  assert(
    q.expectedNextValues.every((n) => Number.isInteger(n) && n > 0),
    `Q${qNum} (${q.id}) expectedNextValues are valid positive integers`
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
  if (q.correctAnswer === "E") {
    // None of A-D should match expectedNextValues
    optKeys.forEach((key) => {
      const pair = q.options[key];
      const match = pair && pair[0] === q.expectedNextValues[0] && pair[1] === q.expectedNextValues[1];
      assert(!match, `Q${qNum} Option ${key} does not match expectedNextValues (Option E is correct)`);
      // Also check reverse order to prevent accidental match
      const reverseMatch = pair && pair[0] === q.expectedNextValues[1] && pair[1] === q.expectedNextValues[0];
      if (reverseMatch) {
        console.log(`  [INFO] Q${qNum} Option ${key} is the reversed target pair (intentional order distractor)`);
      }
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

  // Substantive explanation & distractor analysis
  assert(
    typeof q.explanation === "string" && q.explanation.length > 150,
    `Q${qNum} (${q.id}) explanation is comprehensive (${q.explanation.length} chars)`
  );
  assert(
    q.explanation.includes("Distraktoren-Analyse:"),
    `Q${qNum} (${q.id}) explanation includes Distraktoren-Analyse`
  );
});

// 6. Explicit Mathematical Pattern Evaluation
console.log("\n--- 6. EXPLICIT MATHEMATICAL RULE VERIFICATION ---");
{
  // Q1: [8, 17, 26, 35, 44, 53, 62] -> +9 constant -> [71, 80]
  const q1 = rawQuestions[0];
  let curr = 8;
  const fullSeqQ1 = [8];
  for (let i = 0; i < 8; i++) {
    curr += 9;
    fullSeqQ1.push(curr);
  }
  assert(
    q1.sequence.every((n, i) => n === fullSeqQ1[i]) &&
    q1.expectedNextValues[0] === fullSeqQ1[7] &&
    q1.expectedNextValues[1] === fullSeqQ1[8],
    "Q1: (+9 constant) generates sequence [8..62] and next values [71, 80]"
  );
}

{
  // Q2: [59, 53, 47, 41, 35, 29, 23] -> -6 constant -> [17, 11]
  const q2 = rawQuestions[1];
  let curr = 59;
  const fullSeqQ2 = [59];
  for (let i = 0; i < 8; i++) {
    curr -= 6;
    fullSeqQ2.push(curr);
  }
  assert(
    q2.sequence.every((n, i) => n === fullSeqQ2[i]) &&
    q2.expectedNextValues[0] === fullSeqQ2[7] &&
    q2.expectedNextValues[1] === fullSeqQ2[8],
    "Q2: (-6 constant) generates sequence [59..23] and next values [17, 11]"
  );
}

{
  // Q3: [4, 7, 13, 22, 34, 49, 67] -> +3, +6, +9, +12, +15, +18, +21, +24 -> [88, 112]
  const q3 = rawQuestions[2];
  let curr = 4;
  const fullSeqQ3 = [4];
  for (let step = 1; step <= 8; step++) {
    curr += step * 3;
    fullSeqQ3.push(curr);
  }
  assert(
    q3.sequence.every((n, i) => n === fullSeqQ3[i]) &&
    q3.expectedNextValues[0] === fullSeqQ3[7] &&
    q3.expectedNextValues[1] === fullSeqQ3[8],
    "Q3: (increasing multiples of 3 diffs) generates sequence [4..67] and next values [88, 112]"
  );
}

{
  // Q4: [6, 12, 9, 18, 15, 30, 27] -> *2, -3 alternating -> [54, 51]
  const q4 = rawQuestions[3];
  let curr = 6;
  const fullSeqQ4 = [6];
  for (let cycle = 0; cycle < 4; cycle++) {
    curr *= 2;
    fullSeqQ4.push(curr);
    curr -= 3;
    fullSeqQ4.push(curr);
  }
  assert(
    q4.sequence.every((n, i) => n === fullSeqQ4[i]) &&
    q4.expectedNextValues[0] === fullSeqQ4[7] &&
    q4.expectedNextValues[1] === fullSeqQ4[8],
    "Q4: (*2, -3 alternating) generates sequence [6..27] and next values [54, 51]"
  );
}

{
  // Q5: [92, 75, 60, 47, 36, 27, 20] -> diffs: -17, -15, -13, -11, -9, -7, -5, -3 -> [15, 12]
  const q5 = rawQuestions[4];
  let curr = 92;
  const fullSeqQ5 = [92];
  const diffs = [17, 15, 13, 11, 9, 7, 5, 3];
  diffs.forEach((d) => {
    curr -= d;
    fullSeqQ5.push(curr);
  });
  assert(
    q5.sequence.every((n, i) => n === fullSeqQ5[i]) &&
    q5.expectedNextValues[0] === fullSeqQ5[7] &&
    q5.expectedNextValues[1] === fullSeqQ5[8],
    "Q5: (decreasing odd diffs) generates sequence [92..20] and next values [15, 12]"
  );
}

{
  // Q6: [14, 22, 17, 25, 20, 28, 23] -> +8, -5 alternating -> [31, 26]
  const q6 = rawQuestions[5];
  let curr = 14;
  const fullSeqQ6 = [14];
  for (let cycle = 0; cycle < 4; cycle++) {
    curr += 8;
    fullSeqQ6.push(curr);
    curr -= 5;
    fullSeqQ6.push(curr);
  }
  assert(
    q6.sequence.every((n, i) => n === fullSeqQ6[i]) &&
    q6.expectedNextValues[0] === fullSeqQ6[7] &&
    q6.expectedNextValues[1] === fullSeqQ6[8],
    "Q6: (+8, -5 alternating) generates sequence [14..23] and next values [31, 26]"
  );
}

{
  // Q7: [1, 4, 5, 9, 14, 23, 37] -> Fibonacci a_n = a_{n-1} + a_{n-2} -> [60, 97]
  const q7 = rawQuestions[6];
  const fullSeqQ7 = [1, 4];
  for (let i = 2; i < 9; i++) {
    fullSeqQ7.push(fullSeqQ7[i - 1] + fullSeqQ7[i - 2]);
  }
  assert(
    q7.sequence.every((n, i) => n === fullSeqQ7[i]) &&
    q7.expectedNextValues[0] === fullSeqQ7[7] &&
    q7.expectedNextValues[1] === fullSeqQ7[8],
    "Q7: (Fibonacci start 1, 4) generates sequence [1..37] and next values [60, 97]"
  );
}

{
  // Q8: [6, 5, 14, 10, 22, 20, 30] -> Interleaved: odd pos +8, even pos *2 -> [40, 38]
  const q8 = rawQuestions[7];
  // 1: 6 (+8) -> 3: 14 (+8) -> 5: 22 (+8) -> 7: 30 (+8) -> 9: 38
  // 2: 5 (*2) -> 4: 10 (*2) -> 6: 20 (*2) -> 8: 40
  const fullSeqQ8 = [6, 5, 14, 10, 22, 20, 30, 40, 38];
  assert(
    q8.sequence.every((n, i) => n === fullSeqQ8[i]) &&
    q8.expectedNextValues[0] === fullSeqQ8[7] &&
    q8.expectedNextValues[1] === fullSeqQ8[8],
    "Q8: (Interleaved +8 / *2) generates sequence [6..30] and next values [40, 38]"
  );
}

{
  // Q9: [3, 8, 16, 13, 18, 36, 33] -> 3-step cycle: +5, *2, -3 -> [38, 76]
  const q9 = rawQuestions[8];
  const fullSeqQ9 = [3];
  let curr = 3;
  const cycleOps = [(x: number) => x + 5, (x: number) => x * 2, (x: number) => x - 3];
  for (let i = 0; i < 8; i++) {
    curr = cycleOps[i % 3](curr);
    fullSeqQ9.push(curr);
  }
  assert(
    q9.sequence.every((n, i) => n === fullSeqQ9[i]) &&
    q9.expectedNextValues[0] === fullSeqQ9[7] &&
    q9.expectedNextValues[1] === fullSeqQ9[8],
    "Q9: (3-step cycle +5, *2, -3) generates sequence [3..33] and next values [38, 76]"
  );
}

{
  // Q10: [64, 7, 32, 20, 16, 33, 8] -> Interleaved: odd pos /2, even pos +13 -> [46, 4]
  const q10 = rawQuestions[9];
  // odd pos (1, 3, 5, 7, 9): 64, 32, 16, 8, 4 (/2)
  // even pos (2, 4, 6, 8): 7, 20, 33, 46 (+13)
  const fullSeqQ10 = [64, 7, 32, 20, 16, 33, 8, 46, 4];
  assert(
    q10.sequence.every((n, i) => n === fullSeqQ10[i]) &&
    q10.expectedNextValues[0] === fullSeqQ10[7] &&
    q10.expectedNextValues[1] === fullSeqQ10[8],
    "Q10: (Interleaved /2 and +13) generates sequence [64..8] and next values [46, 4]"
  );
}

// 7. StoredQuestion Transformation & Schema Checks
console.log("\n--- 7. STORED QUESTION FORMAT INTEGRITY ---");
storedQuestions.forEach((sq, idx) => {
  const qNum = idx + 1;
  const raw = rawQuestions[idx];

  assert(sq.id === raw.id, `Stored Q${qNum} ID matches raw ID (${sq.id})`);
  assert(sq.exam === "BOTH", `Stored Q${qNum} exam is BOTH`);
  assert(sq.section === "KFF", `Stored Q${qNum} section is KFF`);
  assert(sq.subjectId === "kff-num", `Stored Q${qNum} subjectId is kff-num`);
  assert(sq.chapterId === "kff-num-arith", `Stored Q${qNum} chapterId is kff-num-arith`);
  assert(sq.difficulty === raw.difficulty, `Stored Q${qNum} difficulty matches raw`);
  assert(sq.options.length === 5, `Stored Q${qNum} options array has length 5`);
  assert(sq.options[4] === "Keine der Antwortmöglichkeiten ist richtig", `Stored Q${qNum} Option E is standardized German string`);
  
  const expectedKeyIdx = ["A", "B", "C", "D", "E"].indexOf(raw.correctAnswer);
  assert(sq.correctAnswer === expectedKeyIdx, `Stored Q${qNum} correctAnswer index matches key ${raw.correctAnswer} (expected ${expectedKeyIdx}, actual: ${sq.correctAnswer})`);
  assert(sq.zfData !== undefined, `Stored Q${qNum} has zfData attached`);
});

// 8. Collision Check against GP1, GP2, and other simulations
console.log("\n--- 8. COLLISION DETECTION AGAINST EXISTING BANKS ---");
const existingSequences = [
  ...RAW_GENERALPROBE_1_ZF_QUESTIONS.map((q) => ({ id: q.id, seq: q.sequence.join(",") })),
  ...RAW_GENERALPROBE_2_ZF_QUESTIONS.map((q) => ({ id: q.id, seq: q.sequence.join(",") })),
  ...ZF_SIMULATION_3_QUESTIONS.map((q) => ({ id: q.id, seq: q.sequence.join(",") })),
];

rawQuestions.forEach((q, idx) => {
  const qSeq = q.sequence.join(",");
  const coll = existingSequences.find((es) => es.seq === qSeq);
  assert(!coll, `Q${idx + 1} (${q.id}) sequence has 0 collision with existing banks (collided with: ${coll?.id ?? "none"})`);
});

// 9. Simulator Integration Check
console.log("\n--- 9. SIMULATOR INTEGRATION ---");
const simQuestions = buildZfSimulationQuestions(3);
assert(simQuestions.length === 10, `buildZfSimulationQuestions(3) returns exactly 10 questions (actual: ${simQuestions.length})`);
assert(simQuestions.every((q, i) => q.id === `KFF-ZF-GP3-${String(i + 1).padStart(3, "0")}`), "All questions returned by buildZfSimulationQuestions(3) have correct GP3 IDs");

// Summary
console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("ALL ZF GP3 VERIFICATION CHECKS PASSED PERFECTLY! [100% SUCCESS] ✅");
} else {
  console.error(`VERIFICATION FAILED: ${errorCount} errors detected. ❌`);
  process.exitCode = 1;
}
console.log("================================================================================\n");
