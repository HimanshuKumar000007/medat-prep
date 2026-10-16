import {
  RAW_GENERALPROBE_2_CHEM_QUESTIONS,
  GENERALPROBE_2_CHEM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2ChemistryQuestions";
import { GENERALPROBE_1_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe1ChemistryQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe2Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("=== VERIFYING BMS CHEMIE GENERALPROBE #2 ===");

  let errors = 0;

  // 1. Question Count
  console.log(`Checking question counts...`);
  if (RAW_GENERALPROBE_2_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: RAW_GENERALPROBE_2_CHEM_QUESTIONS has ${RAW_GENERALPROBE_2_CHEM_QUESTIONS.length} items, expected 24.`);
    errors++;
  } else {
    console.log(`✓ Exactly 24 raw questions.`);
  }

  if (GENERALPROBE_2_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: GENERALPROBE_2_CHEM_QUESTIONS has ${GENERALPROBE_2_CHEM_QUESTIONS.length} items, expected 24.`);
    errors++;
  } else {
    console.log(`✓ Exactly 24 StoredQuestion objects.`);
  }

  // 2. ID sequence CHEM-BMS-GP2-001 through 024
  console.log(`Checking ID sequence CHEM-BMS-GP2-001 to 024...`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_2_CHEM_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `CHEM-BMS-GP2-${expectedNum}`;
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
    console.log(`✓ All 24 IDs are unique and strictly sequential.`);
  }

  // 3. Check Options & Answers
  console.log(`Checking options, answer keys, and distractors...`);
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
    "chem-12-integriert",
  ]);

  RAW_GENERALPROBE_2_CHEM_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_2_CHEM_QUESTIONS[idx];
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

  console.log(`Chapter distribution across MedAT-H chapters:`, chapterCounts);
  let totalInChapters = 0;
  for (const ch in chapterCounts) {
    totalInChapters += chapterCounts[ch];
    console.log(`  - ${ch}: ${chapterCounts[ch]} questions`);
  }
  if (totalInChapters === 24) {
    console.log(`✓ All 24 questions assigned to valid official chemistry chapters.`);
  }

  // 4. Check GP1 integrity and isolation
  console.log(`Verifying GP1 integrity and isolation...`);
  if (GENERALPROBE_1_CHEM_QUESTIONS.length !== 24) {
    console.error(`FAIL: GENERALPROBE_1_CHEM_QUESTIONS length changed: ${GENERALPROBE_1_CHEM_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP1 Chemistry still contains exactly 24 questions.`);
  }
  const gp1Ids = new Set(GENERALPROBE_1_CHEM_QUESTIONS.map((q) => q.id));
  const collision = RAW_GENERALPROBE_2_CHEM_QUESTIONS.filter((q) => gp1Ids.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP1 and GP2! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP1 and GP2.`);
  }

  // 5. Check buildBmsSimulationQuestions(2)
  console.log(`Testing buildBmsSimulationQuestions(2)...`);
  const bmsSim2 = buildBmsSimulationQuestions(2);
  const chemSim2 = bmsSim2.filter((q) => q.subjectId === "chem");
  if (chemSim2.length !== 24) {
    console.error(`FAIL: buildBmsSimulationQuestions(2) returned ${chemSim2.length} chem questions, expected 24.`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) has exactly 24 chem questions.`);
  }

  const matchesGp2Ids = chemSim2.every((q, idx) => q.id === RAW_GENERALPROBE_2_CHEM_QUESTIONS[idx].id);
  if (!matchesGp2Ids) {
    console.error(`FAIL: Chem questions in buildBmsSimulationQuestions(2) do not match GP2 questions!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) correctly uses GENERALPROBE_2_CHEM_QUESTIONS.`);
  }

  // 6. Test buildGeneralprobe2Dataset() and getGeneralprobeDataset()
  console.log(`Testing buildGeneralprobe2Dataset() and dataset lookup...`);
  const ds2 = buildGeneralprobe2Dataset();
  const ds2Chem = ds2.bmsQuestions.filter((q) => q.subjectId === "chem");
  if (ds2Chem.length !== 24 || ds2Chem[0].id !== "CHEM-BMS-GP2-001" || ds2Chem[23].id !== "CHEM-BMS-GP2-024") {
    console.error(`FAIL: buildGeneralprobe2Dataset() bmsQuestions chem mismatch!`);
    errors++;
  } else {
    console.log(`✓ buildGeneralprobe2Dataset() properly loads the 24 GP2 chemistry questions.`);
  }

  // Check overall BMS in GP2
  const ds2Bio = ds2.bmsQuestions.filter((q) => q.subjectId === "bio");
  console.log(`Simulation 2 BMS subject breakdown:`);
  console.log(`  - Bio: ${ds2Bio.length} (expected 40)`);
  console.log(`  - Chem: ${ds2Chem.length} (expected 24)`);
  console.log(`  - Phys: ${ds2.bmsQuestions.filter((q) => q.subjectId === "phys").length} (expected 18)`);
  console.log(`  - Math: ${ds2.bmsQuestions.filter((q) => q.subjectId === "math").length} (expected 12)`);
  console.log(`  - Total BMS: ${ds2.bmsQuestions.length} (expected 94)`);

  if (ds2.bmsQuestions.length !== 94) {
    console.error(`FAIL: Simulation 2 BMS total questions is ${ds2.bmsQuestions.length}, expected 94.`);
    errors++;
  } else {
    console.log(`✓ Exact 94 BMS questions configured for Generalprobe #2.`);
  }

  const dsById = getGeneralprobeDataset("generalprobe-2");
  const dsBySlug = getGeneralprobeDataset("mock-full-medat-h-2");
  if (dsById.id !== "generalprobe-2" || dsBySlug.id !== "generalprobe-2") {
    console.error(`FAIL: getGeneralprobeDataset() lookup failed for generalprobe-2.`);
    errors++;
  } else {
    console.log(`✓ getGeneralprobeDataset("generalprobe-2") and ("mock-full-medat-h-2") both resolve successfully.`);
  }

  console.log(`=== VERIFICATION SUMMARY ===`);
  if (errors === 0) {
    console.log(`🎉 ALL CHEMISTRY VERIFICATION CHECKS PASSED PERFECTLY!`);
  } else {
    console.error(`❌ VERIFICATION COMPLETED WITH ${errors} ERRORS.`);
    process.exit(1);
  }
}

runVerification();
