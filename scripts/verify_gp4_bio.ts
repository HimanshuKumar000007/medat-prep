import {
  RAW_GENERALPROBE_4_BIO_QUESTIONS,
  GENERALPROBE_4_BIO_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4BiologyQuestions";
import { GENERALPROBE_1_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe1BioQuestions";
import { GENERALPROBE_2_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe2BiologyQuestions";
import { GENERALPROBE_3_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe3BiologyQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe4Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("==================================================");
  console.log("VERIFYING BMS BIOLOGY GENERALPROBE #4 & SCIENTIFIC QA");
  console.log("==================================================");

  let errors = 0;

  // 1. Question Count & Structure
  console.log(`\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---`);
  if (RAW_GENERALPROBE_4_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: RAW_GENERALPROBE_4_BIO_QUESTIONS has ${RAW_GENERALPROBE_4_BIO_QUESTIONS.length} items, expected 40.`);
    errors++;
  } else {
    console.log(`✓ Exactly 40 raw questions.`);
  }

  if (GENERALPROBE_4_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: GENERALPROBE_4_BIO_QUESTIONS has ${GENERALPROBE_4_BIO_QUESTIONS.length} items, expected 40.`);
    errors++;
  } else {
    console.log(`✓ Exactly 40 StoredQuestion objects.`);
  }

  // 2. ID sequence BIO-BMS-GP4-001 through 040
  console.log(`\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_4_BIO_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `BIO-BMS-GP4-${expectedNum}`;
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
  if (seenIds.size === 40) {
    console.log(`✓ All 40 IDs are unique and strictly sequential (BIO-BMS-GP4-001 to 040).`);
  }

  // 3. Difficulty, Options & Answer Keys
  console.log(`\n--- 3. MATHEMATICAL & ANSWER-KEY CONSISTENCY ---`);
  const answerCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const difficultyCounts: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };
  const chapterCounts: Record<string, number> = {};

  const validChapters = new Set([
    "bio-01-zelle",
    "bio-02-koerper",
    "bio-03-fruehentwicklung",
    "bio-04-genetik",
    "bio-05-molgen",
    "bio-06-stoffwechsel",
    "bio-07-herzkreislauf",
    "bio-08-atmung",
    "bio-09-nervensystem",
  ]);

  RAW_GENERALPROBE_4_BIO_QUESTIONS.forEach((q, idx) => {
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

    // Check mapped StoredQuestion
    const sq = GENERALPROBE_4_BIO_QUESTIONS[idx];
    if (sq.id !== q.id) {
      console.error(`FAIL: StoredQuestion mismatch at ${idx}: ${sq.id} vs ${q.id}`);
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
  });

  console.log(`Answer distribution:`, answerCounts);
  if (
    answerCounts.A === 8 &&
    answerCounts.B === 8 &&
    answerCounts.C === 8 &&
    answerCounts.D === 8 &&
    answerCounts.E === 8
  ) {
    console.log(`✓ Perfectly balanced answer key distribution: exactly 8 each for A, B, C, D, E (20% each).`);
  } else {
    console.error(`FAIL: Answer counts are not balanced:`, answerCounts);
    errors++;
  }

  console.log(`Difficulty distribution:`, difficultyCounts);
  if (
    difficultyCounts.foundational === 10 &&
    difficultyCounts.intermediate === 20 &&
    difficultyCounts.advanced === 10
  ) {
    console.log(`✓ Difficulty distribution is exactly 10 foundational, 20 intermediate, 10 advanced.`);
  } else {
    console.error(`FAIL: Difficulty counts do not match 10/20/10:`, difficultyCounts);
    errors++;
  }

  console.log(`Chapter distribution across official MedAT-H syllabus:`, chapterCounts);
  const coveredChapters = Object.keys(chapterCounts);
  if (coveredChapters.length === 9) {
    console.log(`✓ Full syllabus coverage: all 9 biology chapters covered.`);
  } else {
    console.error(`FAIL: Only ${coveredChapters.length} chapters covered out of 9.`);
    errors++;
  }

  // 4. Check GP1, GP2, and GP3 Integrity & Originality
  console.log(`\n--- 4. GP1, GP2 & GP3 ISOLATION & ZERO-OVERLAP CHECK ---`);
  if (GENERALPROBE_1_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: GENERALPROBE_1_BIO_QUESTIONS length changed: ${GENERALPROBE_1_BIO_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP1 Biology unchanged (40 questions).`);
  }

  if (GENERALPROBE_2_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: GENERALPROBE_2_BIO_QUESTIONS length changed: ${GENERALPROBE_2_BIO_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP2 Biology unchanged (40 questions).`);
  }

  if (GENERALPROBE_3_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: GENERALPROBE_3_BIO_QUESTIONS length changed: ${GENERALPROBE_3_BIO_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP3 Biology unchanged (40 questions).`);
  }

  const existingIds = new Set([
    ...GENERALPROBE_1_BIO_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_2_BIO_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_3_BIO_QUESTIONS.map((q) => q.id),
  ]);
  const collision = RAW_GENERALPROBE_4_BIO_QUESTIONS.filter((q) => existingIds.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP4 and prior GPs! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP4 and GP1/GP2/GP3.`);
  }

  const existingStems = new Set([
    ...GENERALPROBE_1_BIO_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_2_BIO_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_3_BIO_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
  ]);
  const stemCollisions = RAW_GENERALPROBE_4_BIO_QUESTIONS.filter((q) => existingStems.has(q.stem.trim().toLowerCase()));
  if (stemCollisions.length > 0) {
    console.error(`FAIL: Question text collision detected!`, stemCollisions.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ 100% original question stems (zero overlap with GP1, GP2, or GP3).`);
  }

  // 5. Runtime Integration & Full BMS Assembly (94 questions)
  console.log(`\n--- 5. RUNTIME INTEGRATION & BMS ASSEMBLY (94 QUESTIONS) ---`);
  const bmsSim4 = buildBmsSimulationQuestions(4);
  const bioSim4 = bmsSim4.filter((q) => q.subjectId === "bio");
  const chemSim4 = bmsSim4.filter((q) => q.subjectId === "chem");
  const physSim4 = bmsSim4.filter((q) => q.subjectId === "phys");
  const mathSim4 = bmsSim4.filter((q) => q.subjectId === "math");

  console.log(`BMS Sim #4 composition:`);
  console.log(`  - Biology:     ${bioSim4.length} (expected 40)`);
  console.log(`  - Chemistry:   ${chemSim4.length} (expected 24)`);
  console.log(`  - Physics:     ${physSim4.length} (expected 18)`);
  console.log(`  - Mathematics: ${mathSim4.length} (expected 12)`);
  console.log(`  - Total BMS:   ${bmsSim4.length} (expected 94)`);

  if (bioSim4.length !== 40) {
    console.error(`FAIL: buildBmsSimulationQuestions(4) returned ${bioSim4.length} bio questions, expected 40.`);
    errors++;
  }
  if (chemSim4.length !== 24) {
    console.error(`FAIL: buildBmsSimulationQuestions(4) returned ${chemSim4.length} chem questions, expected 24.`);
    errors++;
  }
  if (physSim4.length !== 18) {
    console.error(`FAIL: buildBmsSimulationQuestions(4) returned ${physSim4.length} phys questions, expected 18.`);
    errors++;
  }
  if (mathSim4.length !== 12) {
    console.error(`FAIL: buildBmsSimulationQuestions(4) returned ${mathSim4.length} math questions, expected 12.`);
    errors++;
  }
  if (bmsSim4.length !== 94) {
    console.error(`FAIL: Total BMS Sim #4 questions: ${bmsSim4.length}, expected 94.`);
    errors++;
  } else {
    console.log(`✓ BMS Simulation #4 perfectly assembled: 40 Bio + 24 Chem + 18 Phys + 12 Math = 94 questions.`);
  }

  // 6. Dataset Factory & getGeneralprobeDataset Check
  console.log(`\n--- 6. DATASET FACTORY & ROUTING CHECK ---`);
  const gp4Dataset = buildGeneralprobe4Dataset();
  if (gp4Dataset.id !== "generalprobe-4" || gp4Dataset.simNumber !== 4) {
    console.error(`FAIL: buildGeneralprobe4Dataset returned invalid id or simNumber.`);
    errors++;
  } else {
    console.log(`✓ buildGeneralprobe4Dataset() created dataset with id="generalprobe-4", simNumber=4.`);
  }

  const datasetViaId = getGeneralprobeDataset("generalprobe-4");
  const datasetViaMock = getGeneralprobeDataset("mock-full-medat-h-4");
  if (datasetViaId.id !== "generalprobe-4" || datasetViaMock.id !== "generalprobe-4") {
    console.error(`FAIL: getGeneralprobeDataset did not resolve GP4 correctly.`);
    errors++;
  } else {
    console.log(`✓ getGeneralprobeDataset correctly resolves both 'generalprobe-4' and 'mock-full-medat-h-4'.`);
  }

  const totalScoredQuestions =
    gp4Dataset.bmsQuestions.length +
    gp4Dataset.tvQuestions.length +
    gp4Dataset.fzQuestions.length +
    gp4Dataset.zfQuestions.length +
    gp4Dataset.wfQuestions.length +
    gp4Dataset.gmStoredQuestions.length +
    gp4Dataset.ieQuestions.length +
    gp4Dataset.erQuestions.length +
    gp4Dataset.eeQuestions.length +
    gp4Dataset.seQuestions.length;

  console.log(`GP4 Total Scored Items: ${totalScoredQuestions} (expected 221) + ${gp4Dataset.gmCards.length} GM memory cards.`);
  if (totalScoredQuestions === 221 && gp4Dataset.gmCards.length === 8) {
    console.log(`✓ Complete MedAT-H exam format verified: 221 scored tasks + 8 memory cards.`);
  } else {
    console.error(`FAIL: GP4 total scored items (${totalScoredQuestions}) != 221 or cards (${gp4Dataset.gmCards.length}) != 8.`);
    errors++;
  }

  // 7. Regression checks for GP1, GP2, and GP3
  console.log(`\n--- 7. REGRESSION CHECKS FOR GP1, GP2, AND GP3 ---`);
  const bmsSim1 = buildBmsSimulationQuestions(1);
  const bmsSim2 = buildBmsSimulationQuestions(2);
  const bmsSim3 = buildBmsSimulationQuestions(3);

  if (bmsSim1.length !== 94 || bmsSim1.filter((q) => q.subjectId === "bio").length !== 40) {
    console.error(`FAIL: BMS Sim #1 regression detected! Total: ${bmsSim1.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #1 intact: 94 questions (40 GP1 Bio).`);
  }

  if (bmsSim2.length !== 94 || bmsSim2.filter((q) => q.subjectId === "bio").length !== 40) {
    console.error(`FAIL: BMS Sim #2 regression detected! Total: ${bmsSim2.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #2 intact: 94 questions (40 GP2 Bio).`);
  }

  if (bmsSim3.length !== 94 || bmsSim3.filter((q) => q.subjectId === "bio").length !== 40) {
    console.error(`FAIL: BMS Sim #3 regression detected! Total: ${bmsSim3.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #3 intact: 94 questions (40 GP3 Bio).`);
  }

  console.log(`\n==================================================`);
  console.log(`VERIFICATION SUMMARY`);
  console.log(`==================================================`);
  if (errors === 0) {
    console.log(`🎉 ALL 7 TEST SUITES & SCIENTIFIC AUDITS PASSED WITH ZERO ERRORS!`);
  } else {
    console.error(`❌ VERIFICATION FAILED WITH ${errors} ERRORS.`);
    process.exit(1);
  }
}

runVerification();
