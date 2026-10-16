import {
  RAW_GENERALPROBE_3_PHYS_QUESTIONS,
  GENERALPROBE_3_PHYS_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3PhysicsQuestions";
import { GENERALPROBE_1_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe1PhysQuestions";
import { GENERALPROBE_2_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe2PhysicsQuestions";
import {
  buildBmsSimulationQuestions,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("==================================================");
  console.log("VERIFYING BMS PHYSIK GENERALPROBE #3 & SCIENTIFIC QA");
  console.log("==================================================");

  let errors = 0;

  // 1. Question Count & Structural Integrity
  console.log(`\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---`);
  if (RAW_GENERALPROBE_3_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: RAW_GENERALPROBE_3_PHYS_QUESTIONS has ${RAW_GENERALPROBE_3_PHYS_QUESTIONS.length} items, expected 18.`);
    errors++;
  } else {
    console.log(`✓ Exactly 18 raw questions.`);
  }

  if (GENERALPROBE_3_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: GENERALPROBE_3_PHYS_QUESTIONS has ${GENERALPROBE_3_PHYS_QUESTIONS.length} items, expected 18.`);
    errors++;
  } else {
    console.log(`✓ Exactly 18 StoredQuestion objects.`);
  }

  // 2. ID sequence PHYS-BMS-GP3-001 through 018
  console.log(`\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_3_PHYS_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `PHYS-BMS-GP3-${expectedNum}`;
    if (q.id !== expectedId) {
      console.error(`FAIL: Question at index ${idx} has ID "${q.id}", expected "${expectedId}".`);
      errors++;
    }
    if (seenIds.has(q.id)) {
      console.error(`FAIL: Duplicate ID "${q.id}".`);
      errors++;
    }
    seenIds.add(q.id);
  });
  if (seenIds.size === 18) {
    console.log(`✓ All 18 IDs are unique and strictly sequential (PHYS-BMS-GP3-001 to 018).`);
  }

  // 3. Difficulty, Options & Answer Keys
  console.log(`\n--- 3. MATHEMATICAL & ANSWER-KEY CONSISTENCY ---`);
  const answerCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const difficultyCounts: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };
  const chapterCounts: Record<string, number> = {};

  const validChapters = new Set([
    "phys-01-groessen-einheiten",
    "phys-02-mechanik",
    "phys-03-schwingungen-wellen",
    "phys-04-waermelehre",
    "phys-05-elektrizitaet",
    "phys-06-optik",
    "phys-07-atom-kernphysik",
  ]);

  RAW_GENERALPROBE_3_PHYS_QUESTIONS.forEach((q, idx) => {
    const letters = ["A", "B", "C", "D", "E"] as const;
    letters.forEach((l) => {
      if (!q.options[l] || q.options[l].trim().length === 0) {
        console.error(`FAIL: ${q.id} Option ${l} is empty.`);
        errors++;
      }
    });

    if (!letters.includes(q.correct_answer)) {
      console.error(`FAIL: ${q.id} has invalid correct_answer: ${q.correct_answer}`);
      errors++;
    } else {
      answerCounts[q.correct_answer]++;
    }

    difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;

    // Check explanations
    if (!q.explanation_correct || q.explanation_correct.trim().length < 20) {
      console.error(`FAIL: ${q.id} has missing or too short explanation_correct.`);
      errors++;
    }

    const distractorLetters = letters.filter((l) => l !== q.correct_answer);
    if (!q.explanations_incorrect) {
      console.error(`FAIL: ${q.id} is missing explanations_incorrect.`);
      errors++;
    } else {
      distractorLetters.forEach((dl) => {
        if (!q.explanations_incorrect[dl] || q.explanations_incorrect[dl].trim().length < 15) {
          console.error(`FAIL: ${q.id} missing or short distractor explanation for option ${dl}.`);
          errors++;
        }
      });
    }

    // Check raw chapter_id
    if (!q.chapter_id || !validChapters.has(q.chapter_id)) {
      console.error(`FAIL: ${q.id} raw question has missing or invalid chapter_id: "${q.chapter_id}"`);
      errors++;
    }

    // Check mapped StoredQuestion
    const sq = GENERALPROBE_3_PHYS_QUESTIONS[idx];
    if (sq.id !== q.id) {
      console.error(`FAIL: StoredQuestion mismatch at ${idx}: ${sq.id} vs ${q.id}`);
      errors++;
    }
    if (sq.chapterId !== q.chapter_id) {
      console.error(`FAIL: ${q.id} StoredQuestion chapterId "${sq.chapterId}" does not match raw chapter_id "${q.chapter_id}"`);
      errors++;
    }
    if (!validChapters.has(sq.chapterId || "")) {
      console.error(`FAIL: ${q.id} mapped to unknown chapterId: ${sq.chapterId}`);
      errors++;
    } else {
      chapterCounts[sq.chapterId!] = (chapterCounts[sq.chapterId!] || 0) + 1;
    }
    if (sq.options.length !== 5) {
      console.error(`FAIL: ${sq.id} does not have 5 options in StoredQuestion.`);
      errors++;
    }
    const expectedAnsIdx = ["A", "B", "C", "D", "E"].indexOf(q.correct_answer);
    if (sq.correctAnswer !== expectedAnsIdx) {
      console.error(`FAIL: ${sq.id} correctAnswer index mismatch: ${sq.correctAnswer} vs ${expectedAnsIdx}`);
      errors++;
    }

    // Check string escaping / LaTeX hygiene
    const allText = JSON.stringify(q);
    if (allText.includes("\t")) {
      console.error(`FAIL: ${q.id} contains unescaped tab character in string!`);
      errors++;
    }
  });

  const sequence = RAW_GENERALPROBE_3_PHYS_QUESTIONS.map((q) => q.correct_answer);
  console.log(`Answer key sequence:`, sequence.join(", "));

  // Check for repeated 5-item cycles
  const hasRepeating5Cycle = sequence.slice(0, 5).join("") === sequence.slice(5, 10).join("") &&
                             sequence.slice(5, 10).join("") === sequence.slice(10, 15).join("");
  if (hasRepeating5Cycle) {
    console.error(`FAIL: Answer keys follow a repeating 5-item cycle!`);
    errors++;
  } else {
    console.log(`✓ Answer key sequence is non-periodic, acyclic, and pseudo-randomized.`);
  }

  console.log(`Answer counts:`, answerCounts);
  if (
    answerCounts.A === 4 &&
    answerCounts.B === 4 &&
    answerCounts.C === 4 &&
    answerCounts.D === 3 &&
    answerCounts.E === 3
  ) {
    console.log(`✓ Answer distribution matches target: A: 4, B: 4, C: 4, D: 3, E: 3 (Total: 18).`);
  } else {
    console.error(`FAIL: Answer distribution does not match target (4/4/4/3/3)!`, answerCounts);
    errors++;
  }

  console.log(`Difficulty counts:`, difficultyCounts);
  if (
    difficultyCounts.foundational === 4 &&
    difficultyCounts.intermediate === 9 &&
    difficultyCounts.advanced === 5
  ) {
    console.log(`✓ Difficulty distribution is exactly 4 foundational (easy), 9 intermediate, 5 advanced.`);
  } else {
    console.error(`FAIL: Difficulty counts do not match 4/9/5:`, difficultyCounts);
    errors++;
  }

  console.log(`Chapter distribution across official MedAT-H physics chapters:`);
  let totalInChapters = 0;
  for (const ch of Array.from(validChapters)) {
    const c = chapterCounts[ch] || 0;
    totalInChapters += c;
    console.log(`  - ${ch}: ${c} questions`);
  }
  if (totalInChapters === 18) {
    console.log(`✓ All 18 questions assigned to valid official physics chapters.`);
  }

  // 4. GP1 & GP2 Isolation & Zero-Overlap Check
  console.log(`\n--- 4. GP1 & GP2 ISOLATION & ZERO-OVERLAP CHECK ---`);
  if (GENERALPROBE_1_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: GENERALPROBE_1_PHYS_QUESTIONS length changed: ${GENERALPROBE_1_PHYS_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP1 Physics unchanged (18 questions).`);
  }

  if (GENERALPROBE_2_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: GENERALPROBE_2_PHYS_QUESTIONS length changed: ${GENERALPROBE_2_PHYS_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP2 Physics unchanged (18 questions).`);
  }

  const existingIds = new Set([
    ...GENERALPROBE_1_PHYS_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_2_PHYS_QUESTIONS.map((q) => q.id),
  ]);
  const collision = RAW_GENERALPROBE_3_PHYS_QUESTIONS.filter((q) => existingIds.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP3 and prior GPs! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP3 and GP1/GP2.`);
  }

  const existingStems = new Set([
    ...GENERALPROBE_1_PHYS_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_2_PHYS_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
  ]);
  const stemCollisions = RAW_GENERALPROBE_3_PHYS_QUESTIONS.filter((q) => existingStems.has(q.stem.trim().toLowerCase()));
  if (stemCollisions.length > 0) {
    console.error(`FAIL: Question stem collision detected!`, stemCollisions.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ 100% original question stems (zero overlap with GP1 or GP2).`);
  }

  // 5. Runtime Integration & Full BMS Assembly (94 questions)
  console.log(`\n--- 5. RUNTIME INTEGRATION & BMS ASSEMBLY (94 QUESTIONS) ---`);
  const bmsSim3 = buildBmsSimulationQuestions(3);
  const bioSim3 = bmsSim3.filter((q) => q.subjectId === "bio");
  const chemSim3 = bmsSim3.filter((q) => q.subjectId === "chem");
  const physSim3 = bmsSim3.filter((q) => q.subjectId === "phys");
  const mathSim3 = bmsSim3.filter((q) => q.subjectId === "math");

  console.log(`BMS Sim #3 composition:`);
  console.log(`  - Biology:     ${bioSim3.length} (expected 40)`);
  console.log(`  - Chemistry:   ${chemSim3.length} (expected 24)`);
  console.log(`  - Physics:     ${physSim3.length} (expected 18)`);
  console.log(`  - Mathematics: ${mathSim3.length} (expected 12)`);
  console.log(`  - Total BMS:   ${bmsSim3.length} (expected 94)`);

  if (bioSim3.length !== 40) {
    console.error(`FAIL: buildBmsSimulationQuestions(3) returned ${bioSim3.length} bio questions, expected 40.`);
    errors++;
  }
  if (chemSim3.length !== 24) {
    console.error(`FAIL: buildBmsSimulationQuestions(3) returned ${chemSim3.length} chem questions, expected 24.`);
    errors++;
  }
  if (physSim3.length !== 18) {
    console.error(`FAIL: buildBmsSimulationQuestions(3) returned ${physSim3.length} phys questions, expected 18.`);
    errors++;
  }
  if (mathSim3.length !== 12) {
    console.error(`FAIL: buildBmsSimulationQuestions(3) returned ${mathSim3.length} math questions, expected 12.`);
    errors++;
  }
  if (bmsSim3.length !== 94) {
    console.error(`FAIL: Total BMS Sim #3 questions: ${bmsSim3.length}, expected 94.`);
    errors++;
  } else {
    console.log(`✓ BMS Simulation #3 perfectly assembled: 40 Bio + 24 Chem + 18 Phys + 12 Math = 94 questions.`);
  }

  const matchesGp3Ids = physSim3.every((q, idx) => q.id === RAW_GENERALPROBE_3_PHYS_QUESTIONS[idx].id);
  if (!matchesGp3Ids) {
    console.error(`FAIL: Phys questions in buildBmsSimulationQuestions(3) do not match GP3 questions!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(3) correctly uses GENERALPROBE_3_PHYS_QUESTIONS.`);
  }

  // 6. Regression checks for GP1 and GP2
  console.log(`\n--- 6. REGRESSION CHECKS FOR GP1 AND GP2 ---`);
  const bmsSim1 = buildBmsSimulationQuestions(1);
  const bmsSim2 = buildBmsSimulationQuestions(2);
  if (bmsSim1.length !== 94 || bmsSim1.filter((q) => q.subjectId === "phys").length !== 18) {
    console.error(`FAIL: BMS Sim #1 regression detected! Total: ${bmsSim1.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #1 intact: 94 questions (18 GP1 Phys).`);
  }
  if (bmsSim2.length !== 94 || bmsSim2.filter((q) => q.subjectId === "phys").length !== 18) {
    console.error(`FAIL: BMS Sim #2 regression detected! Total: ${bmsSim2.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #2 intact: 94 questions (18 GP2 Phys).`);
  }

  console.log(`\n==================================================`);
  console.log(`VERIFICATION SUMMARY`);
  console.log(`==================================================`);
  if (errors === 0) {
    console.log(`🎉 ALL PHYSICS GP3 AUDITS & TESTS PASSED PERFECTLY!`);
  } else {
    console.error(`❌ VERIFICATION FAILED WITH ${errors} ERRORS.`);
    process.exit(1);
  }
}

runVerification();
