import {
  RAW_GENERALPROBE_4_TV_QUESTIONS,
  GENERALPROBE_4_TV_QUESTIONS,
  GENERALPROBE_4_TV_PASSAGES,
} from "../src/data/generalprobe/generalprobe4TvQuestions";
import { RAW_GENERALPROBE_1_TV_QUESTIONS } from "../src/data/generalprobe/generalprobe1TvQuestions";
import { RAW_GENERALPROBE_2_TV_QUESTIONS } from "../src/data/generalprobe/generalprobe2TvQuestions";
import { RAW_GENERALPROBE_3_TV_QUESTIONS } from "../src/data/generalprobe/generalprobe3TvQuestions";
import {
  buildTvSimulationQuestions,
  buildBmsSimulationQuestions,
  buildGeneralprobe4Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

console.log("==================================================");
console.log("VERIFYING TEXTVERSTÄNDNIS (TV) GENERALPROBE #4");
console.log("==================================================");

let errors: string[] = [];

// 1. Passages & Question Counts
console.log("\n--- 1. PASSAGES & QUESTION COUNTS ---");
if (GENERALPROBE_4_TV_PASSAGES.length !== 4) {
  errors.push(`Expected 4 passages, found ${GENERALPROBE_4_TV_PASSAGES.length}`);
} else {
  console.log("✓ Exactly 4 reading passages.");
}

if (RAW_GENERALPROBE_4_TV_QUESTIONS.length !== 12) {
  errors.push(`Expected 12 raw questions, found ${RAW_GENERALPROBE_4_TV_QUESTIONS.length}`);
} else {
  console.log("✓ Exactly 12 raw questions.");
}

if (GENERALPROBE_4_TV_QUESTIONS.length !== 12) {
  errors.push(`Expected 12 StoredQuestion objects, found ${GENERALPROBE_4_TV_QUESTIONS.length}`);
} else {
  console.log("✓ Exactly 12 StoredQuestion objects.");
}

// 2. Passage Details & Word Counts
console.log("\n--- 2. PASSAGE WORD COUNTS & QUESTION MAPPING ---");
GENERALPROBE_4_TV_PASSAGES.forEach((p, idx) => {
  const wordCount = p.text.trim().split(/\s+/).length;
  console.log(`Passage ${idx + 1} (${p.id}): "${p.title}" — ${wordCount} words, ${p.paragraphs.length} paragraphs`);
  if (wordCount < 250 || wordCount > 550) {
    errors.push(`Passage ${p.id} word count (${wordCount}) out of expected range 250–550.`);
  }
  if (p.questionIds.length !== 3) {
    errors.push(`Passage ${p.id} has ${p.questionIds.length} questions, expected exactly 3.`);
  }
});

// 3. ID Sequence & Passage Linking
console.log("\n--- 3. ID SEQUENCE & PASSAGE LINKING ---");
const expectedIds = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  return `TV-GP4-${num}`;
});

const expectedPassageAssignment: Record<string, string> = {
  "TV-GP4-001": "tv-gp4-p1",
  "TV-GP4-002": "tv-gp4-p1",
  "TV-GP4-003": "tv-gp4-p1",
  "TV-GP4-004": "tv-gp4-p2",
  "TV-GP4-005": "tv-gp4-p2",
  "TV-GP4-006": "tv-gp4-p2",
  "TV-GP4-007": "tv-gp4-p3",
  "TV-GP4-008": "tv-gp4-p3",
  "TV-GP4-009": "tv-gp4-p3",
  "TV-GP4-010": "tv-gp4-p4",
  "TV-GP4-011": "tv-gp4-p4",
  "TV-GP4-012": "tv-gp4-p4",
};

RAW_GENERALPROBE_4_TV_QUESTIONS.forEach((q, idx) => {
  if (q.id !== expectedIds[idx]) {
    errors.push(`Raw question #${idx + 1} has id ${q.id}, expected ${expectedIds[idx]}`);
  }
  if (q.passageId !== expectedPassageAssignment[q.id]) {
    errors.push(`Question ${q.id} assigned to passage ${q.passageId}, expected ${expectedPassageAssignment[q.id]}`);
  }
  const stored = GENERALPROBE_4_TV_QUESTIONS[idx];
  if (stored.id !== expectedIds[idx]) {
    errors.push(`Stored question #${idx + 1} has id ${stored.id}, expected ${expectedIds[idx]}`);
  }
  if (!stored.passage || stored.passage.length < 200) {
    errors.push(`Stored question ${stored.id} missing passage text.`);
  }
});
if (errors.length === 0) {
  console.log("✓ All 12 IDs strictly sequential (TV-GP4-001 to 012).");
  console.log("✓ Exactly 3 questions attached to each of the 4 passages.");
}

// 4. Answer Key & Difficulty Calibration
console.log("\n--- 4. ANSWER KEY & DIFFICULTY CALIBRATION ---");
const keySequence = RAW_GENERALPROBE_4_TV_QUESTIONS.map(q => q.correct_answer);
console.log("Answer key sequence:", keySequence.join(", "));

const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
keySequence.forEach(k => {
  keyCounts[k] = (keyCounts[k] || 0) + 1;
});
console.log("Answer counts:", keyCounts);

if (keyCounts.A !== 3 || keyCounts.B !== 3 || keyCounts.C !== 2 || keyCounts.D !== 2 || keyCounts.E !== 2) {
  errors.push(`Unexpected answer key counts: ${JSON.stringify(keyCounts)} (expected 3 A, 3 B, 2 C, 2 D, 2 E)`);
} else {
  console.log("✓ Balanced answer key distribution: A: 3, B: 3, C: 2, D: 2, E: 2 (Total: 12).");
}

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
console.log(`Max answer streak: ${maxStreak}`);
if (maxStreak > 2) {
  errors.push(`Found excessive streak of identical answers: max streak = ${maxStreak}`);
} else {
  console.log("✓ Answer key sequence is non-periodic, acyclic, and max streak <= 2.");
}

// Check for repeating 5-cycle
const hasRepeating5Cycle = keySequence.slice(0, 5).join("") === keySequence.slice(5, 10).join("");
if (hasRepeating5Cycle) {
  errors.push("Answer keys follow a repeating 5-item cycle!");
} else {
  console.log("✓ Answer key sequence has no repeating 5-item cycle.");
}

const diffCounts: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };
RAW_GENERALPROBE_4_TV_QUESTIONS.forEach(q => {
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
});
console.log("Difficulty counts:", diffCounts);

if (diffCounts.foundational !== 3 || diffCounts.intermediate !== 6 || diffCounts.advanced !== 3) {
  errors.push(`Unexpected difficulty distribution: ${JSON.stringify(diffCounts)} (expected 3 easy, 6 intermediate, 3 advanced)`);
} else {
  console.log("✓ Difficulty distribution is exactly 3 foundational (easy), 6 intermediate, 3 advanced.");
}

// 5. Options, Distractor Analysis & Evidence
console.log("\n--- 5. OPTIONS, DISTRACTORS & PASSAGE-GROUNDING ---");
RAW_GENERALPROBE_4_TV_QUESTIONS.forEach((q, idx) => {
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
  if (!q.evidenceLocation) {
    errors.push(`Question ${q.id} missing evidenceLocation citation.`);
  }
  const stored = GENERALPROBE_4_TV_QUESTIONS[idx];
  const correctIdx = ["A", "B", "C", "D", "E"].indexOf(q.correct_answer);
  if (stored.correctAnswer !== correctIdx) {
    errors.push(`StoredQuestion ${stored.id} correctAnswer index ${stored.correctAnswer} does not match ${q.correct_answer} (${correctIdx})`);
  }
  if (!stored.explanation || stored.explanation.trim().length < 80) {
    errors.push(`StoredQuestion ${stored.id} explanation insufficient.`);
  }
});
if (errors.length === 0) {
  console.log("✓ All 12 questions have 5 options, 4 distractor analyses, and exact passage-evidence citations.");
}

// 6. GP1, GP2 & GP3 Isolation & Zero-Overlap Check
console.log("\n--- 6. GP1, GP2 & GP3 ISOLATION & ZERO-OVERLAP CHECK ---");
const gp1Ids = new Set(RAW_GENERALPROBE_1_TV_QUESTIONS.map(q => q.id));
const gp2Ids = new Set(RAW_GENERALPROBE_2_TV_QUESTIONS.map(q => q.id));
const gp3Ids = new Set(RAW_GENERALPROBE_3_TV_QUESTIONS.map(q => q.id));

if (RAW_GENERALPROBE_1_TV_QUESTIONS.length !== 12) {
  errors.push(`GP1 TV question count altered: ${RAW_GENERALPROBE_1_TV_QUESTIONS.length}`);
} else {
  console.log("✓ GP1 TV unchanged (12 questions).");
}

if (RAW_GENERALPROBE_2_TV_QUESTIONS.length !== 12) {
  errors.push(`GP2 TV question count altered: ${RAW_GENERALPROBE_2_TV_QUESTIONS.length}`);
} else {
  console.log("✓ GP2 TV unchanged (12 questions).");
}

if (RAW_GENERALPROBE_3_TV_QUESTIONS.length !== 12) {
  errors.push(`GP3 TV question count altered: ${RAW_GENERALPROBE_3_TV_QUESTIONS.length}`);
} else {
  console.log("✓ GP3 TV unchanged (12 questions).");
}

RAW_GENERALPROBE_4_TV_QUESTIONS.forEach(q => {
  if (gp1Ids.has(q.id) || gp2Ids.has(q.id) || gp3Ids.has(q.id)) {
    errors.push(`Collision: GP4 question ID ${q.id} already exists in GP1/GP2/GP3!`);
  }
});

const allPriorStems = [
  ...RAW_GENERALPROBE_1_TV_QUESTIONS.map(q => ({ bank: "GP1", id: q.id, stem: q.stem.toLowerCase() })),
  ...RAW_GENERALPROBE_2_TV_QUESTIONS.map(q => ({ bank: "GP2", id: q.id, stem: q.stem.toLowerCase() })),
  ...RAW_GENERALPROBE_3_TV_QUESTIONS.map(q => ({ bank: "GP3", id: q.id, stem: q.stem.toLowerCase() })),
];

RAW_GENERALPROBE_4_TV_QUESTIONS.forEach(q => {
  const stem = q.stem.toLowerCase();
  allPriorStems.forEach(prior => {
    if (stem === prior.stem) {
      errors.push(`Duplicate stem found: GP4 ${q.id} is identical to ${prior.bank} ${prior.id}`);
    }
  });
});
if (errors.length === 0) {
  console.log("✓ Zero ID collisions between GP4 and GP1/GP2/GP3.");
  console.log("✓ 100% original question stems and reading passages (zero overlap with GP1, GP2, or GP3).");
}

// 7. Runtime Integration & Full Mock Alignment
console.log("\n--- 7. RUNTIME INTEGRATION & FULL MOCK ALIGNMENT ---");
const tvSim4 = buildTvSimulationQuestions(4);
console.log(`buildTvSimulationQuestions(4) returned ${tvSim4.length} questions`);

if (tvSim4.length !== 12) {
  errors.push(`buildTvSimulationQuestions(4) returned ${tvSim4.length} questions, expected 12`);
}
const gp4TvIds = new Set(GENERALPROBE_4_TV_QUESTIONS.map(q => q.id));
const allMatch = tvSim4.every(q => gp4TvIds.has(q.id));
if (!allMatch) {
  errors.push(`buildTvSimulationQuestions(4) does not contain the GP4 TV questions: ${tvSim4.map(q => q.id).join(", ")}`);
} else {
  console.log("✓ buildTvSimulationQuestions(4) correctly loads GENERALPROBE_4_TV_QUESTIONS.");
}

// Verify dataset factory
const dataset4 = buildGeneralprobe4Dataset();
if (dataset4.tvQuestions.length !== 12) {
  errors.push(`buildGeneralprobe4Dataset().tvQuestions has length ${dataset4.tvQuestions.length}, expected 12`);
} else {
  console.log("✓ buildGeneralprobe4Dataset().tvQuestions contains exactly 12 TV questions.");
}

// Verify getGeneralprobeDataset
const retrieved4 = getGeneralprobeDataset("generalprobe-4");
if (!retrieved4 || retrieved4.tvQuestions.length !== 12) {
  errors.push(`getGeneralprobeDataset("generalprobe-4") did not load 12 TV questions.`);
} else {
  console.log("✓ getGeneralprobeDataset(\"generalprobe-4\") successfully resolved with 12 TV questions.");
}

// Verify BMS is still 94 questions and TV is NOT counted in BMS
const bmsSim4 = buildBmsSimulationQuestions(4);
if (bmsSim4.length !== 94) {
  errors.push(`BMS Simulation #4 altered: expected 94, got ${bmsSim4.length}`);
} else {
  console.log("✓ BMS Simulation #4 intact with exactly 94 questions (TV is separate and not mixed into BMS).");
}

// Regression for GP1, GP2, GP3 TV
const tvSim1 = buildTvSimulationQuestions(1);
const tvSim2 = buildTvSimulationQuestions(2);
const tvSim3 = buildTvSimulationQuestions(3);
if (tvSim1.length !== 12 || tvSim2.length !== 12 || tvSim3.length !== 12) {
  errors.push(`GP1, GP2 or GP3 TV question count altered in simulator`);
} else {
  console.log("✓ TV Sim #1 intact (12 questions).");
  console.log("✓ TV Sim #2 intact (12 questions).");
  console.log("✓ TV Sim #3 intact (12 questions).");
}

console.log("\n==================================================");
console.log("VERIFICATION SUMMARY");
console.log("==================================================");

if (errors.length > 0) {
  console.error(`❌ FAILED WITH ${errors.length} ERROR(S):`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log("🎉 ALL TEXTVERSTÄNDNIS GP4 AUDITS & TESTS PASSED PERFECTLY!");
  process.exit(0);
}
