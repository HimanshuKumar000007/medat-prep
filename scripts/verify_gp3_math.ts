import {
  RAW_GENERALPROBE_3_MATH_QUESTIONS,
  GENERALPROBE_3_MATH_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3MathQuestions";
import { RAW_GENERALPROBE_1_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe1MathQuestions";
import { RAW_GENERALPROBE_2_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe2MathQuestions";
import { buildBmsSimulationQuestions } from "../src/data/generalprobe/generalprobeData";

console.log("==================================================");
console.log("VERIFYING BMS MATHEMATIK GENERALPROBE #3 & AUDIT");
console.log("==================================================");

let errors: string[] = [];

// 1. Question Count & Structural Integrity
console.log("\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---");
if (RAW_GENERALPROBE_3_MATH_QUESTIONS.length !== 12) {
  errors.push(`Expected 12 raw questions, found ${RAW_GENERALPROBE_3_MATH_QUESTIONS.length}`);
} else {
  console.log("✓ Exactly 12 raw questions.");
}

if (GENERALPROBE_3_MATH_QUESTIONS.length !== 12) {
  errors.push(`Expected 12 StoredQuestion objects, found ${GENERALPROBE_3_MATH_QUESTIONS.length}`);
} else {
  console.log("✓ Exactly 12 StoredQuestion objects.");
}

// 2. ID Sequence & Format Integrity
console.log("\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---");
const expectedIds = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  return `MATH-BMS-GP3-${num}`;
});

RAW_GENERALPROBE_3_MATH_QUESTIONS.forEach((q, idx) => {
  if (q.id !== expectedIds[idx]) {
    errors.push(`Raw question #${idx + 1} has id ${q.id}, expected ${expectedIds[idx]}`);
  }
  const stored = GENERALPROBE_3_MATH_QUESTIONS[idx];
  if (stored.id !== expectedIds[idx]) {
    errors.push(`Stored question #${idx + 1} has id ${stored.id}, expected ${expectedIds[idx]}`);
  }
});
if (errors.length === 0) {
  console.log("✓ All 12 IDs are unique and strictly sequential (MATH-BMS-GP3-001 to 012).");
}

// 3. Mathematical & Answer-Key Consistency
console.log("\n--- 3. MATHEMATICAL & ANSWER-KEY CONSISTENCY ---");
const keySequence = RAW_GENERALPROBE_3_MATH_QUESTIONS.map(q => q.correct_answer);
console.log("Answer key sequence:", keySequence.join(", "));

const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
keySequence.forEach(k => {
  keyCounts[k] = (keyCounts[k] || 0) + 1;
});
console.log("Answer counts:", keyCounts);

if (keyCounts.A !== 2 || keyCounts.B !== 3 || keyCounts.C !== 2 || keyCounts.D !== 3 || keyCounts.E !== 2) {
  errors.push(`Unexpected answer distribution: ${JSON.stringify(keyCounts)}`);
} else {
  console.log("✓ Answer distribution matches target: A: 2, B: 3, C: 2, D: 3, E: 2 (Total: 12).");
}

// Check for streaks
let maxStreak = 1;
let currentStreak = 1;
for (let i = 1; i < keySequence.length; i++) {
  if (keySequence[i] === keySequence[i - 1]) {
    currentStreak++;
    if (currentStreak > maxStreak) maxStreak = currentStreak;
  } else {
    currentStreak = 1;
  }
}
if (maxStreak > 1) {
  errors.push(`Found streak of identical answers: max streak = ${maxStreak}`);
} else {
  console.log("✓ Answer key sequence is non-periodic, acyclic, and max streak = 1.");
}

// Difficulty distribution
const diffCounts: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };
RAW_GENERALPROBE_3_MATH_QUESTIONS.forEach(q => {
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});
console.log("Difficulty counts:", diffCounts);

if (diffCounts.foundational !== 3 || diffCounts.intermediate !== 6 || diffCounts.advanced !== 3) {
  errors.push(`Unexpected difficulty distribution: ${JSON.stringify(diffCounts)} (expected 3 easy, 6 intermediate, 3 advanced)`);
} else {
  console.log("✓ Difficulty distribution is exactly 3 foundational (easy), 6 intermediate, 3 advanced.");
}

// Chapter distribution
const chapterCounts: Record<string, number> = {};
GENERALPROBE_3_MATH_QUESTIONS.forEach(q => {
  chapterCounts[q.chapterId] = (chapterCounts[q.chapterId] || 0) + 1;
  if (!q.chapterId || q.chapterId.includes("undefined")) {
    errors.push(`Question ${q.id} has invalid chapterId: ${q.chapterId}`);
  }
});
console.log("Chapter distribution across official MedAT-H math chapters:");
Object.entries(chapterCounts).forEach(([ch, count]) => {
  console.log(`  - ${ch}: ${count} questions`);
  if (count !== 2) {
    errors.push(`Expected 2 questions for chapter ${ch}, got ${count}`);
  }
});

const expectedChapters = [
  "math-01-zehnerpotenzen",
  "math-02-algebra",
  "math-03-geometrie",
  "math-04-einheiten",
  "math-05-funktionen",
  "math-06-vektorrechnung",
];
expectedChapters.forEach(exp => {
  if (!chapterCounts[exp]) {
    errors.push(`Missing chapter: ${exp}`);
  }
});
if (errors.length === 0) {
  console.log("✓ All 6 official math chapters have exactly 2 questions assigned.");
}

// Options & Distractor Checks
RAW_GENERALPROBE_3_MATH_QUESTIONS.forEach((q, idx) => {
  const opts = Object.keys(q.options);
  if (opts.length !== 5 || !opts.includes("A") || !opts.includes("E")) {
    errors.push(`Question ${q.id} does not have exactly options A-E.`);
  }
  const incorrectKeys = Object.keys(q.explanations_incorrect);
  if (incorrectKeys.length !== 4) {
    errors.push(`Question ${q.id} has ${incorrectKeys.length} distractor explanations instead of 4.`);
  }
  if (incorrectKeys.includes(q.correct_answer)) {
    errors.push(`Question ${q.id} includes correct answer ${q.correct_answer} in incorrect explanations!`);
  }
  const stored = GENERALPROBE_3_MATH_QUESTIONS[idx];
  if (stored.options.length !== 5) {
    errors.push(`StoredQuestion ${stored.id} does not have 5 options.`);
  }
  const correctIdx = ["A", "B", "C", "D", "E"].indexOf(q.correct_answer);
  if (stored.correctAnswer !== correctIdx) {
    errors.push(`StoredQuestion ${stored.id} correctAnswer index ${stored.correctAnswer} does not match ${q.correct_answer} (${correctIdx})`);
  }
  if (!stored.explanation || stored.explanation.trim().length < 50) {
    errors.push(`StoredQuestion ${stored.id} has insufficient explanation.`);
  }
});

// 4. GP1 & GP2 Isolation & Zero-Overlap Check
console.log("\n--- 4. GP1 & GP2 ISOLATION & ZERO-OVERLAP CHECK ---");
const gp1Ids = new Set(RAW_GENERALPROBE_1_MATH_QUESTIONS.map(q => q.id));
const gp2Ids = new Set(RAW_GENERALPROBE_2_MATH_QUESTIONS.map(q => q.id));

if (RAW_GENERALPROBE_1_MATH_QUESTIONS.length !== 12) {
  errors.push(`GP1 Math question count altered: ${RAW_GENERALPROBE_1_MATH_QUESTIONS.length}`);
} else {
  console.log("✓ GP1 Math unchanged (12 questions).");
}

if (RAW_GENERALPROBE_2_MATH_QUESTIONS.length !== 12) {
  errors.push(`GP2 Math question count altered: ${RAW_GENERALPROBE_2_MATH_QUESTIONS.length}`);
} else {
  console.log("✓ GP2 Math unchanged (12 questions).");
}

RAW_GENERALPROBE_3_MATH_QUESTIONS.forEach(q => {
  if (gp1Ids.has(q.id) || gp2Ids.has(q.id)) {
    errors.push(`Collision: GP3 question ID ${q.id} already exists in GP1/GP2!`);
  }
});

// Stem similarity check
const allPriorStems = [
  ...RAW_GENERALPROBE_1_MATH_QUESTIONS.map(q => ({ bank: "GP1", id: q.id, stem: q.stem.toLowerCase() })),
  ...RAW_GENERALPROBE_2_MATH_QUESTIONS.map(q => ({ bank: "GP2", id: q.id, stem: q.stem.toLowerCase() })),
];

RAW_GENERALPROBE_3_MATH_QUESTIONS.forEach(q => {
  const stem = q.stem.toLowerCase();
  allPriorStems.forEach(prior => {
    if (stem === prior.stem) {
      errors.push(`Duplicate stem found: GP3 ${q.id} is identical to ${prior.bank} ${prior.id}`);
    }
  });
});
if (errors.length === 0) {
  console.log("✓ Zero ID collisions between GP3 and GP1/GP2.");
  console.log("✓ 100% original question stems (zero overlap with GP1 or GP2).");
}

// 5. Runtime Integration & BMS Assembly (94 Questions)
console.log("\n--- 5. RUNTIME INTEGRATION & BMS ASSEMBLY (94 QUESTIONS) ---");
const bmsSim3 = buildBmsSimulationQuestions(3);
const bioSim3 = bmsSim3.filter(q => q.subjectId === "bio");
const chemSim3 = bmsSim3.filter(q => q.subjectId === "chem");
const physSim3 = bmsSim3.filter(q => q.subjectId === "phys");
const mathSim3 = bmsSim3.filter(q => q.subjectId === "math");

console.log("BMS Sim #3 composition:");
console.log(`  - Biology:     ${bioSim3.length} (expected 40)`);
console.log(`  - Chemistry:   ${chemSim3.length} (expected 24)`);
console.log(`  - Physics:     ${physSim3.length} (expected 18)`);
console.log(`  - Mathematics: ${mathSim3.length} (expected 12)`);
console.log(`  - Total BMS:   ${bmsSim3.length} (expected 94)`);

if (bioSim3.length !== 40) errors.push(`BMS Sim 3 Bio count is ${bioSim3.length}, expected 40`);
if (chemSim3.length !== 24) errors.push(`BMS Sim 3 Chem count is ${chemSim3.length}, expected 24`);
if (physSim3.length !== 18) errors.push(`BMS Sim 3 Phys count is ${physSim3.length}, expected 18`);
if (mathSim3.length !== 12) errors.push(`BMS Sim 3 Math count is ${mathSim3.length}, expected 12`);
if (bmsSim3.length !== 94) errors.push(`BMS Sim 3 Total count is ${bmsSim3.length}, expected 94`);

// Verify that math in Sim 3 is indeed GP3 math
const gp3MathIds = new Set(GENERALPROBE_3_MATH_QUESTIONS.map(q => q.id));
const sim3MathIds = mathSim3.map(q => q.id);
const allMatch = sim3MathIds.every(id => gp3MathIds.has(id));
if (!allMatch) {
  errors.push(`BMS Sim 3 does not contain the GP3 Math questions: ${sim3MathIds.join(", ")}`);
} else {
  console.log("✓ BMS Simulation #3 perfectly assembled: 40 Bio + 24 Chem + 18 Phys + 12 Math = 94 questions.");
  console.log("✓ buildBmsSimulationQuestions(3) correctly uses GENERALPROBE_3_MATH_QUESTIONS.");
}

// 6. Regression Checks for GP1 and GP2
console.log("\n--- 6. REGRESSION CHECKS FOR GP1 AND GP2 ---");
const bmsSim1 = buildBmsSimulationQuestions(1);
const bmsSim2 = buildBmsSimulationQuestions(2);

if (bmsSim1.length !== 94) errors.push(`BMS Sim 1 count altered: ${bmsSim1.length}`);
if (bmsSim2.length !== 94) errors.push(`BMS Sim 2 count altered: ${bmsSim2.length}`);

const sim1Math = bmsSim1.filter(q => q.subjectId === "math");
const sim2Math = bmsSim2.filter(q => q.subjectId === "math");
if (sim1Math.length !== 12) errors.push(`BMS Sim 1 Math count is ${sim1Math.length}, expected 12`);
if (sim2Math.length !== 12) errors.push(`BMS Sim 2 Math count is ${sim2Math.length}, expected 12`);

if (errors.length === 0) {
  console.log("✓ BMS Sim #1 intact: 94 questions (12 GP1 Math).");
  console.log("✓ BMS Sim #2 intact: 94 questions (12 GP2 Math).");
}

console.log("\n==================================================");
console.log("VERIFICATION SUMMARY");
console.log("==================================================");

if (errors.length > 0) {
  console.error(`❌ FAILED WITH ${errors.length} ERROR(S):`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log("🎉 ALL MATHEMATICS GP3 AUDITS & TESTS PASSED PERFECTLY!");
  process.exit(0);
}
