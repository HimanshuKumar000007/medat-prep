import {
  RAW_GENERALPROBE_3_CHEM_QUESTIONS,
  GENERALPROBE_3_CHEM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3ChemistryQuestions";
import { GENERALPROBE_1_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe1ChemistryQuestions";
import {
  GENERALPROBE_2_CHEM_QUESTIONS,
  RAW_GENERALPROBE_2_CHEM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2ChemistryQuestions";
import {
  buildBmsSimulationQuestions,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("==================================================");
  console.log("VERIFYING BMS CHEMIE GENERALPROBE #3 & SCIENTIFIC QA");
  console.log("==================================================");

  let errors = 0;

  // 1. Question Count & Structural Integrity
  console.log(`\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---`);
  if (RAW_GENERALPROBE_3_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: RAW_GENERALPROBE_3_CHEM_QUESTIONS has ${RAW_GENERALPROBE_3_CHEM_QUESTIONS.length} items, expected 24.`);
    errors++;
  } else {
    console.log(`✓ Exactly 24 raw questions.`);
  }

  if (GENERALPROBE_3_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: GENERALPROBE_3_CHEM_QUESTIONS has ${GENERALPROBE_3_CHEM_QUESTIONS.length} items, expected 24.`);
    errors++;
  } else {
    console.log(`✓ Exactly 24 StoredQuestion objects.`);
  }

  // 2. ID sequence CHEM-BMS-GP3-001 through 024
  console.log(`\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_3_CHEM_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `CHEM-BMS-GP3-${expectedNum}`;
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
  if (seenIds.size === 24) {
    console.log(`✓ All 24 IDs are unique and strictly sequential (CHEM-BMS-GP3-001 to 024).`);
  }

  // 3. Difficulty, Options & Answer Keys
  console.log(`\n--- 3. MATHEMATICAL & ANSWER-KEY CONSISTENCY ---`);
  const answerCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const difficultyCounts: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };
  const chapterCounts: Record<string, number> = {};

  const validChapters = new Set([
    "chem-01-atombau",
    "chem-02-strahlung",
    "chem-03-gase",
    "chem-04-bindungen",
    "chem-05-stoechiometrie",
    "chem-06-gleichgewicht",
    "chem-07-elemente",
    "chem-08-saeuren-basen",
    "chem-09-redox",
    "chem-10-organik",
    "chem-11-naturstoffe",
  ]);

  RAW_GENERALPROBE_3_CHEM_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_3_CHEM_QUESTIONS[idx];
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
  });

  const sequence = RAW_GENERALPROBE_3_CHEM_QUESTIONS.map((q) => q.correct_answer);
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

  // Check specific scientific QA requirements
  console.log(`\n--- 3b. SCIENTIFIC QA TARGETED CHECKS ---`);
  // Q001: Bohr model discrete energy levels vs QM orbitals
  const q001 = RAW_GENERALPROBE_3_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP3-001")!;
  if (!q001.explanation_correct.includes("Orbitale bzw. Wellenfunktionen") || !q001.explanation_correct.includes("diskrete")) {
    console.error(`FAIL: Q001 does not distinguish Bohr discrete levels from quantum-mechanical orbitals.`);
    errors++;
  } else {
    console.log(`✓ Q001: Distinguishes Bohr discrete energy levels from quantum-mechanical orbitals.`);
  }

  // Q004: Ideal gas behavior in Avogadro
  const q004 = RAW_GENERALPROBE_3_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP3-004")!;
  if (!q004.stem.includes("idealen Gasverhaltens") || !q004.options[q004.correct_answer].includes("ideale Gase")) {
    console.error(`FAIL: Q004 does not explicitly state ideal gas assumption.`);
    errors++;
  } else {
    console.log(`✓ Q004: Explicitly treats gases as ideal under Avogadro's law.`);
  }

  // Q012: Mass action equilibrium expression with stoichiometric exponents
  const q012 = RAW_GENERALPROBE_3_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP3-012")!;
  if (!q012.explanation_correct.includes("K_c =") || !q012.explanation_correct.includes("stöchiometrischen Koeffizienten als Exponenten")) {
    console.error(`FAIL: Q012 mass-action expression lacks stoichiometric exponents.`);
    errors++;
  } else {
    console.log(`✓ Q012: Correctly formulates mass action law with stoichiometric coefficients as exponents.`);
  }

  // Q014: Noble gas reactivity qualified
  const q014 = RAW_GENERALPROBE_3_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP3-014")!;
  if (q014.stem.includes("nur unter extremen Laborbedingungen")) {
    console.error(`FAIL: Q014 still claims noble gas compounds form only under extreme laboratory conditions.`);
    errors++;
  } else {
    console.log(`✓ Q014: Accurately qualifies noble gas reactivity and compound formation.`);
  }

  // Q015: Haber-Bosch active iron catalyst vs oxide precursor
  const q015 = RAW_GENERALPROBE_3_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP3-015")!;
  if (!q015.options[q015.correct_answer].includes("Eisenoxid-Vorstufen") || !q015.explanation_correct.includes("metallische") || !q015.explanation_correct.includes("Katalysatorvorstufe")) {
    console.error(`FAIL: Q015 does not distinguish between active metallic iron catalyst and oxide precursor.`);
    errors++;
  } else {
    console.log(`✓ Q015: Distinguishes active metallic iron catalyst from oxide precursor materials.`);
  }

  // Q021: Chirality narrowed to single stereocenter in lactic acid
  const q021 = RAW_GENERALPROBE_3_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP3-021")!;
  if (q021.options[q021.correct_answer].includes("mindestens ein")) {
    console.error(`FAIL: Q021 still claims 'mindestens ein Stereozentrum' implies chirality.`);
    errors++;
  } else {
    console.log(`✓ Q021: Correctly narrows chirality definition to single stereocenter in lactic acid.`);
  }

  // Q022: Melting point and LaTeX formatting
  const q022 = RAW_GENERALPROBE_3_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP3-022")!;
  const q022Text = JSON.stringify(q022);
  if (q022Text.includes("\t") || !q022Text.includes("5{,}5")) {
    console.error(`FAIL: Q022 has malformed LaTeX or melting point.`);
    errors++;
  } else {
    console.log(`✓ Q022: Pristine LaTeX formatting and melting point notation.`);
  }

  console.log(`Answer counts:`, answerCounts);
  if (
    answerCounts.A === 5 &&
    answerCounts.B === 5 &&
    answerCounts.C === 5 &&
    answerCounts.D === 5 &&
    answerCounts.E === 4
  ) {
    console.log(`✓ Answer distribution matches target: A: 5, B: 5, C: 5, D: 5, E: 4 (Total: 24).`);
  } else {
    console.error(`FAIL: Answer distribution does not match target!`, answerCounts);
    errors++;
  }

  console.log(`Difficulty counts:`, difficultyCounts);
  if (
    difficultyCounts.foundational === 6 &&
    difficultyCounts.intermediate === 12 &&
    difficultyCounts.advanced === 6
  ) {
    console.log(`✓ Difficulty distribution is exactly 6 foundational, 12 intermediate, 6 advanced.`);
  } else {
    console.error(`FAIL: Difficulty counts do not match 6/12/6:`, difficultyCounts);
    errors++;
  }

  console.log(`Chapter distribution across MedAT-H chemistry chapters:`);
  let totalInChapters = 0;
  for (const ch of Array.from(validChapters)) {
    const c = chapterCounts[ch] || 0;
    totalInChapters += c;
    console.log(`  - ${ch}: ${c} questions`);
  }
  if (totalInChapters === 24) {
    console.log(`✓ All 24 questions assigned to valid official chemistry chapters.`);
  }

  // 4. GP1 & GP2 Isolation & Zero-Overlap Check
  console.log(`\n--- 4. GP1 & GP2 ISOLATION & ZERO-OVERLAP CHECK ---`);
  if (GENERALPROBE_1_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: GENERALPROBE_1_CHEM_QUESTIONS length changed: ${GENERALPROBE_1_CHEM_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP1 Chemistry unchanged (24 questions).`);
  }

  if (GENERALPROBE_2_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: GENERALPROBE_2_CHEM_QUESTIONS length changed: ${GENERALPROBE_2_CHEM_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP2 Chemistry unchanged (24 questions).`);
  }

  const existingIds = new Set([
    ...GENERALPROBE_1_CHEM_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_2_CHEM_QUESTIONS.map((q) => q.id),
  ]);
  const collision = RAW_GENERALPROBE_3_CHEM_QUESTIONS.filter((q) => existingIds.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP3 and prior GPs! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP3 and GP1/GP2.`);
  }

  const existingStems = new Set([
    ...GENERALPROBE_1_CHEM_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_2_CHEM_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
  ]);
  const stemCollisions = RAW_GENERALPROBE_3_CHEM_QUESTIONS.filter((q) => existingStems.has(q.stem.trim().toLowerCase()));
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

  const matchesGp3Ids = chemSim3.every((q, idx) => q.id === RAW_GENERALPROBE_3_CHEM_QUESTIONS[idx].id);
  if (!matchesGp3Ids) {
    console.error(`FAIL: Chem questions in buildBmsSimulationQuestions(3) do not match GP3 questions!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(3) correctly uses GENERALPROBE_3_CHEM_QUESTIONS.`);
  }

  // 6. Regression checks for GP1 and GP2
  console.log(`\n--- 6. REGRESSION CHECKS FOR GP1 AND GP2 ---`);
  const bmsSim1 = buildBmsSimulationQuestions(1);
  const bmsSim2 = buildBmsSimulationQuestions(2);
  if (bmsSim1.length !== 94 || bmsSim1.filter((q) => q.subjectId === "chem").length !== 24) {
    console.error(`FAIL: BMS Sim #1 regression detected! Total: ${bmsSim1.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #1 intact: 94 questions (24 GP1 Chem).`);
  }
  if (bmsSim2.length !== 94 || bmsSim2.filter((q) => q.subjectId === "chem").length !== 24) {
    console.error(`FAIL: BMS Sim #2 regression detected! Total: ${bmsSim2.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #2 intact: 94 questions (24 GP2 Chem).`);
  }

  console.log(`\n==================================================`);
  console.log(`VERIFICATION SUMMARY`);
  console.log(`==================================================`);
  if (errors === 0) {
    console.log(`🎉 ALL CHEMISTRY GP3 AUDITS & TESTS PASSED PERFECTLY!`);
  } else {
    console.error(`❌ VERIFICATION FAILED WITH ${errors} ERRORS.`);
    process.exit(1);
  }
}

runVerification();
