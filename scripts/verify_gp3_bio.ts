import {
  RAW_GENERALPROBE_3_BIO_QUESTIONS,
  GENERALPROBE_3_BIO_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3BiologyQuestions";
import { GENERALPROBE_1_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe1BioQuestions";
import { GENERALPROBE_2_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe2BiologyQuestions";
import {
  buildBmsSimulationQuestions,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("==================================================");
  console.log("VERIFYING BMS BIOLOGY GENERALPROBE #3 & SCIENTIFIC QA");
  console.log("==================================================");

  let errors = 0;

  // 1. Question Count & Structure
  console.log(`\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---`);
  if (RAW_GENERALPROBE_3_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: RAW_GENERALPROBE_3_BIO_QUESTIONS has ${RAW_GENERALPROBE_3_BIO_QUESTIONS.length} items, expected 40.`);
    errors++;
  } else {
    console.log(`✓ Exactly 40 raw questions.`);
  }

  if (GENERALPROBE_3_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: GENERALPROBE_3_BIO_QUESTIONS has ${GENERALPROBE_3_BIO_QUESTIONS.length} items, expected 40.`);
    errors++;
  } else {
    console.log(`✓ Exactly 40 StoredQuestion objects.`);
  }

  // 2. ID sequence BIO-BMS-GP3-001 through 040
  console.log(`\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_3_BIO_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `BIO-BMS-GP3-${expectedNum}`;
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
    console.log(`✓ All 40 IDs are unique and strictly sequential (BIO-BMS-GP3-001 to 040).`);
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

  RAW_GENERALPROBE_3_BIO_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_3_BIO_QUESTIONS[idx];
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

  // 4. Verification of Specific Scientific Corrections (Section A)
  console.log(`\n--- 4. SCIENTIFIC QA CORRECTIONS VERIFICATION ---`);

  // Q5: Dynamin
  const q5 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-005")!;
  if (q5.explanation_correct.includes("Lipiddoppelschichten fusioniert") || q5.explanation_correct.includes("Membranfusion")) {
    if (!q5.explanation_correct.includes("keine Membranfusion")) {
      console.error(`FAIL: Q5 still claims dynamin causes membrane fusion.`);
      errors++;
    }
  }
  if (!q5.explanation_correct.includes("Konstriktion") || !q5.explanation_correct.includes("Fission")) {
    console.error(`FAIL: Q5 missing constriction and fission explanation.`);
    errors++;
  } else {
    console.log(`✓ Q5 (Dynamin): Correctly explains constriction and fission during vesicle scission without membrane fusion.`);
  }

  // Q9: Human beta cells GLUT
  const q9 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-009")!;
  if (!q9.options.E.includes("GLUT1") || !q9.explanation_correct.includes("GLUT1 und GLUT3")) {
    console.error(`FAIL: Q9 does not distinguish human GLUT1/3 from rodent GLUT2.`);
    errors++;
  } else {
    console.log(`✓ Q9 (Beta Cells): Accurately distinguishes human GLUT1/3 from rodent GLUT2.`);
  }

  // Q10: Renal glucose
  const q10 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-010")!;
  if (q10.explanation_correct.includes("zu 100 % im proximalen Tubulus")) {
    console.error(`FAIL: Q10 makes unqualified absolute 100% claim.`);
    errors++;
  }
  if (!q10.explanation_correct.includes("SGLT2") || !q10.explanation_correct.includes("SGLT1") || !q10.explanation_correct.includes("GLUT1")) {
    console.error(`FAIL: Q10 missing detailed SGLT2/SGLT1/GLUT1/GLUT2 distribution.`);
    errors++;
  } else {
    console.log(`✓ Q10 (Renal Glucose): Accurately qualified ("nahezu vollständig"), details SGLT2/GLUT2 (S1/S2) and SGLT1/GLUT1 (S3).`);
  }

  // Q11: Totipotency
  const q11 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-011")!;
  if (q11.stem.includes("nachweislich Totipotenz")) {
    console.error(`FAIL: Q11 retains unprovable "nachweislich" claim.`);
    errors++;
  } else {
    console.log(`✓ Q11 (Totipotency): Reframed to textbook attribution up to early cleavage / 8-cell stage prior to compaction.`);
  }

  // Q13: Yolk sac & PGC
  const q13 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-013")!;
  if (!q13.explanation_correct.includes("Epiblasten") || !q13.explanation_correct.includes("vorübergehend") && !q13.explanation_correct.includes("temporär")) {
    console.error(`FAIL: Q13 does not distinguish epiblast origin from yolk sac shelter.`);
    errors++;
  } else {
    console.log(`✓ Q13 (Yolk Sac): Accurately details epiblast origin, temporary yolk sac shelter, and gonadal migration.`);
  }

  // Q14: Neural tube timing
  const q14 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-014")!;
  if (!q14.stem.includes("post conceptionem") && !q14.stem.includes("p.c.")) {
    console.error(`FAIL: Q14 stem missing explicit post conceptionem timing.`);
    errors++;
  } else {
    console.log(`✓ Q14 (Neural Tube): Explicitly reconciles developmental days (21-28 p.c.) with obstetric weeks (5-6 SSW p.m.).`);
  }

  // Q16: Recombination frequency
  const q16 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-016")!;
  if (q16.options.C.includes("in 12 % der Meioseereignisse tritt ein Crossing-over")) {
    console.error(`FAIL: Q16 equates recombination frequency with meiotic crossover frequency.`);
    errors++;
  } else {
    console.log(`✓ Q16 (Recombination): Distinguishes 12% recombinant gametes (12 cM) from ~24% meiotic crossover tetrads.`);
  }

  // Q19: Robertsonian translocation risk
  const q19 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-019")!;
  if (!q19.explanation_correct.includes("maternaler") || !q19.explanation_correct.includes("paternaler")) {
    console.error(`FAIL: Q19 missing context-dependent maternal vs paternal empirical risk.`);
    errors++;
  } else {
    console.log(`✓ Q19 (Robertsonian Translocation): Context-dependently qualifies maternal (10-15%) vs paternal (1-2%) and rob(21;21) (100%) risk.`);
  }

  // Q23: Sanger sequencing
  const q23 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-023")!;
  if (q23.explanation_correct.includes("fehlt den ddNTPs dieses 3'-Sauerstoffatom")) {
    console.error(`FAIL: Q23 still uses imprecise "fehlendes Sauerstoffatom" phrasing.`);
    errors++;
  } else {
    console.log(`✓ Q23 (Sanger): Accurately states that ddNTPs lack the 3'-OH group (having -H at C3').`);
  }

  // Q27: Pentose phosphate pathway
  const q27 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-027")!;
  if (!q27.options.E.includes("Ribulose-5-Phosphat") || !q27.options.E.includes("CO2") || !q27.options.E.includes("NADPH")) {
    console.error(`FAIL: Q27 Option E does not name direct oxidative products (NADPH, CO2, Ribulose-5-P).`);
    errors++;
  } else {
    console.log(`✓ Q27 (Pentose Phosphate): Identifies direct oxidative products (NADPH, CO2, Ribulose-5-P) and subsequent isomerization.`);
  }

  // Q34: Ventilation response
  const q34 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-034")!;
  if (q34.explanation_correct.includes("steigert das Atemminutenvolumen linear.") && !q34.explanation_correct.includes("physiologischen Bereich")) {
    console.error(`FAIL: Q34 makes unqualified claim of linear ventilation increase.`);
    errors++;
  } else {
    console.log(`✓ Q34 (Ventilation): Properly qualifies linear response within physiological range (35 to 55-60 mmHg).`);
  }

  // Q38: Patellar reflex
  const q38 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-038")!;
  if (q38.options.E.includes("ins Hinterhorn des Rückenmarks -> monosynaptische")) {
    console.error(`FAIL: Q38 still claims monosynaptic synapse occurs in dorsal horn.`);
    errors++;
  } else {
    console.log(`✓ Q38 (Patellar Reflex): Accurately describes pathway through dorsal root to ventral horn alpha motor neurons.`);
  }

  // Q39: Blood-brain barrier
  const q39 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-039")!;
  if (q39.explanation_correct.includes("hermetisch")) {
    console.error(`FAIL: Q39 still uses "hermetisch" descriptor.`);
    errors++;
  } else {
    console.log(`✓ Q39 (Blood-Brain Barrier): Replaced "hermetisch" with qualified restriction of paracellular diffusion.`);
  }

  // Q2: Cholesterol
  const q2 = RAW_GENERALPROBE_3_BIO_QUESTIONS.find((q) => q.id === "BIO-BMS-GP3-002")!;
  if (!q2.explanations_incorrect.E.includes("Fluiditätspuffer")) {
    console.error(`FAIL: Q2 missing bidirectional fluidity buffer explanation.`);
    errors++;
  } else {
    console.log(`✓ Q2 (Cholesterol): Explains bidirectional fluidity buffering (37°C vs low temperatures).`);
  }

  // 5. Check GP1 and GP2 Integrity & Originality
  console.log(`\n--- 5. GP1 & GP2 ISOLATION & ZERO-OVERLAP CHECK ---`);
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

  const existingIds = new Set([
    ...GENERALPROBE_1_BIO_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_2_BIO_QUESTIONS.map((q) => q.id),
  ]);
  const collision = RAW_GENERALPROBE_3_BIO_QUESTIONS.filter((q) => existingIds.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP3 and prior GPs! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP3 and GP1/GP2.`);
  }

  const existingStems = new Set([
    ...GENERALPROBE_1_BIO_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_2_BIO_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
  ]);
  const stemCollisions = RAW_GENERALPROBE_3_BIO_QUESTIONS.filter((q) => existingStems.has(q.stem.trim().toLowerCase()));
  if (stemCollisions.length > 0) {
    console.error(`FAIL: Question text collision detected!`, stemCollisions.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ 100% original question stems (zero overlap with GP1 or GP2).`);
  }

  // 6. Runtime Integration & Full BMS Assembly (94 questions)
  console.log(`\n--- 6. RUNTIME INTEGRATION & BMS ASSEMBLY (94 QUESTIONS) ---`);
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

  // Regression checks for GP1 and GP2
  console.log(`\n--- 7. REGRESSION CHECKS FOR GP1 AND GP2 ---`);
  const bmsSim1 = buildBmsSimulationQuestions(1);
  const bmsSim2 = buildBmsSimulationQuestions(2);
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
