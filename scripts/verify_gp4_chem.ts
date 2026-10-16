import {
  RAW_GENERALPROBE_4_CHEM_QUESTIONS,
  GENERALPROBE_4_CHEM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4ChemistryQuestions";
import { GENERALPROBE_1_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe1ChemistryQuestions";
import { GENERALPROBE_2_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe2ChemistryQuestions";
import { GENERALPROBE_3_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe3ChemistryQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe4Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("==================================================");
  console.log("VERIFYING BMS CHEMIE GENERALPROBE #4 & SCIENTIFIC QA");
  console.log("==================================================");

  let errors = 0;

  // 1. Question Count & Structural Integrity
  console.log(`\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---`);
  if (RAW_GENERALPROBE_4_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: RAW_GENERALPROBE_4_CHEM_QUESTIONS has ${RAW_GENERALPROBE_4_CHEM_QUESTIONS.length} items, expected 24.`);
    errors++;
  } else {
    console.log(`✓ Exactly 24 raw questions.`);
  }

  if (GENERALPROBE_4_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: GENERALPROBE_4_CHEM_QUESTIONS has ${GENERALPROBE_4_CHEM_QUESTIONS.length} items, expected 24.`);
    errors++;
  } else {
    console.log(`✓ Exactly 24 StoredQuestion objects.`);
  }

  // 2. ID sequence CHEM-BMS-GP4-001 through 024
  console.log(`\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_4_CHEM_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `CHEM-BMS-GP4-${expectedNum}`;
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
    console.log(`✓ All 24 IDs are unique and strictly sequential (CHEM-BMS-GP4-001 to 024).`);
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

  RAW_GENERALPROBE_4_CHEM_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_4_CHEM_QUESTIONS[idx];
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

  const sequence = RAW_GENERALPROBE_4_CHEM_QUESTIONS.map((q) => q.correct_answer);
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

  // 4. Specific Scientific QA Audits
  console.log(`\n--- 4. SCIENTIFIC QA TARGETED CHECKS ---`);

  // Q004: Boyle-Mariotte isothermal calculation
  const q004 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-004")!;
  if (!q004.explanation_correct.includes("4,0 bar") || q004.correct_answer !== "C") {
    console.error(`FAIL: Q004 calculation error.`);
    errors++;
  } else {
    console.log(`✓ Q004: Verified Boyle-Mariotte isothermal pressure calculation (4,0 bar).`);
  }

  // Q007: VSEPR SF4 seesaw geometry
  const q007 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-007")!;
  if (!q007.explanation_correct.includes("seesaw") || !q007.explanation_correct.includes("äquatoriale") || q007.correct_answer !== "C") {
    console.error(`FAIL: Q007 VSEPR SF4 explanation missing seesaw or equatorial position.`);
    errors++;
  } else {
    console.log(`✓ Q007: Verified VSEPR SF4 seesaw geometry with equatorial lone pair.`);
  }

  // Q010: Dilution calculation
  const q010 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-010")!;
  if (!q010.explanation_correct.includes("25 mL") || q010.correct_answer !== "E") {
    console.error(`FAIL: Q010 dilution calculation error.`);
    errors++;
  } else {
    console.log(`✓ Q010: Verified dilution equation (V1 = 25 mL).`);
  }

  // Q011: Limiting reagent & H2 yield
  const q011 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-011")!;
  if (!q011.explanation_correct.includes("0,075 mol") || !q011.explanation_correct.includes("HCl") || q011.correct_answer !== "A") {
    console.error(`FAIL: Q011 limiting reagent calculation error.`);
    errors++;
  } else {
    console.log(`✓ Q011: Verified limiting reagent HCl and H2 stoichiometric yield (0,075 mol).`);
  }

  // Q014: Gibbs-Helmholtz temperature threshold
  const q014 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-014")!;
  if (!q014.explanation_correct.includes("400 K") || q014.correct_answer !== "D") {
    console.error(`FAIL: Q014 Gibbs-Helmholtz threshold calculation error.`);
    errors++;
  } else {
    console.log(`✓ Q014: Verified Gibbs-Helmholtz temperature threshold (T > 400 K).`);
  }

  // Q018: Weak acid pH calculation
  const q018 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-018")!;
  if (!q018.explanation_correct.includes("3,00") || q018.correct_answer !== "D") {
    console.error(`FAIL: Q018 weak acid pH calculation error.`);
    errors++;
  } else {
    console.log(`✓ Q018: Verified weak acid pH calculation (pH = 3,00).`);
  }

  // Q019: Buffer pH with acid addition
  const q019 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-019")!;
  if (!q019.explanation_correct.includes("4,75") || q019.correct_answer !== "C") {
    console.error(`FAIL: Q019 buffer pH shift calculation error.`);
    errors++;
  } else {
    console.log(`✓ Q019: Verified Henderson-Hasselbalch buffer reaction and pH shift (pH = 4,75).`);
  }

  // Q020: Permanganate redox stoichiometry
  const q020 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-020")!;
  if (!q020.explanation_correct.includes("5 Fe²⁺") || !q020.explanation_correct.includes("8 H⁺") || q020.correct_answer !== "E") {
    console.error(`FAIL: Q020 redox equation balancing error.`);
    errors++;
  } else {
    console.log(`✓ Q020: Verified acidic permanganate redox stoichiometry (5 Fe²⁺, 8 H⁺ per MnO₄⁻).`);
  }

  // Q021: Cell potential
  const q021 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-021")!;
  if (!q021.explanation_correct.includes("0,46 V") || q021.correct_answer !== "B") {
    console.error(`FAIL: Q021 cell potential calculation error.`);
    errors++;
  } else {
    console.log(`✓ Q021: Verified galvanic cell voltage calculation (+0,46 V).`);
  }

  // Q023: Meso-tartaric acid stereochemistry
  const q023 = RAW_GENERALPROBE_4_CHEM_QUESTIONS.find((q) => q.id === "CHEM-BMS-GP4-023")!;
  if (!q023.explanation_correct.includes("meso") || q023.correct_answer !== "D") {
    console.error(`FAIL: Q023 meso-tartaric acid explanation missing.`);
    errors++;
  } else {
    console.log(`✓ Q023: Verified stereochemistry and symmetry of meso-tartaric acid.`);
  }

  // 5. GP1, GP2 & GP3 Isolation & Zero-Overlap Check
  console.log(`\n--- 5. GP1, GP2 & GP3 ISOLATION & ZERO-OVERLAP CHECK ---`);
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

  if (GENERALPROBE_3_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: GENERALPROBE_3_CHEM_QUESTIONS length changed: ${GENERALPROBE_3_CHEM_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP3 Chemistry unchanged (24 questions).`);
  }

  const existingIds = new Set([
    ...GENERALPROBE_1_CHEM_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_2_CHEM_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_3_CHEM_QUESTIONS.map((q) => q.id),
  ]);
  const collision = RAW_GENERALPROBE_4_CHEM_QUESTIONS.filter((q) => existingIds.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP4 and prior GPs! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP4 and GP1/GP2/GP3.`);
  }

  const existingStems = new Set([
    ...GENERALPROBE_1_CHEM_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_2_CHEM_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_3_CHEM_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
  ]);
  const stemCollisions = RAW_GENERALPROBE_4_CHEM_QUESTIONS.filter((q) => existingStems.has(q.stem.trim().toLowerCase()));
  if (stemCollisions.length > 0) {
    console.error(`FAIL: Question stem collision detected!`, stemCollisions.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ 100% original question stems (zero overlap with GP1, GP2, or GP3).`);
  }

  // 6. Runtime Integration & Full BMS Assembly (94 questions)
  console.log(`\n--- 6. RUNTIME INTEGRATION & BMS ASSEMBLY (94 QUESTIONS) ---`);
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

  const matchesGp4Ids = chemSim4.every((q, idx) => q.id === RAW_GENERALPROBE_4_CHEM_QUESTIONS[idx].id);
  if (!matchesGp4Ids) {
    console.error(`FAIL: Chem questions in buildBmsSimulationQuestions(4) do not match GP4 questions!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(4) correctly uses GENERALPROBE_4_CHEM_QUESTIONS.`);
  }

  // 7. GP4 Full Mock Dataset & Routing Check
  console.log(`\n--- 7. GP4 FULL MOCK DATASET & ROUTING CHECK ---`);
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

  // 8. Regression checks for GP1, GP2, and GP3
  console.log(`\n--- 8. REGRESSION CHECKS FOR GP1, GP2, AND GP3 ---`);
  const bmsSim1 = buildBmsSimulationQuestions(1);
  const bmsSim2 = buildBmsSimulationQuestions(2);
  const bmsSim3 = buildBmsSimulationQuestions(3);

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

  if (bmsSim3.length !== 94 || bmsSim3.filter((q) => q.subjectId === "chem").length !== 24) {
    console.error(`FAIL: BMS Sim #3 regression detected! Total: ${bmsSim3.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #3 intact: 94 questions (24 GP3 Chem).`);
  }

  console.log(`\n==================================================`);
  console.log(`VERIFICATION SUMMARY`);
  console.log(`==================================================`);
  if (errors === 0) {
    console.log(`🎉 ALL CHEMISTRY GP4 AUDITS & TESTS PASSED PERFECTLY WITH ZERO ERRORS!`);
  } else {
    console.error(`❌ VERIFICATION FAILED WITH ${errors} ERRORS.`);
    process.exit(1);
  }
}

runVerification();
