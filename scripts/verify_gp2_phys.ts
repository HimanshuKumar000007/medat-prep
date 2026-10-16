import {
  RAW_GENERALPROBE_2_PHYS_QUESTIONS,
  GENERALPROBE_2_PHYS_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2PhysicsQuestions";
import { GENERALPROBE_1_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe1PhysQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe2Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("=== VERIFYING BMS PHYSIK GENERALPROBE #2 ===");

  let errors = 0;

  // 1. Question Count
  console.log(`Checking question counts...`);
  if (RAW_GENERALPROBE_2_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: RAW_GENERALPROBE_2_PHYS_QUESTIONS has ${RAW_GENERALPROBE_2_PHYS_QUESTIONS.length} items, expected 18.`);
    errors++;
  } else {
    console.log(`✓ Exactly 18 raw questions.`);
  }

  if (GENERALPROBE_2_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: GENERALPROBE_2_PHYS_QUESTIONS has ${GENERALPROBE_2_PHYS_QUESTIONS.length} items, expected 18.`);
    errors++;
  } else {
    console.log(`✓ Exactly 18 StoredQuestion objects.`);
  }

  // 2. ID sequence PHYS-BMS-GP2-001 through 018
  console.log(`Checking ID sequence PHYS-BMS-GP2-001 to 018...`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_2_PHYS_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `PHYS-BMS-GP2-${expectedNum}`;
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
    console.log(`✓ All 18 IDs are unique and strictly sequential.`);
  }

  // 3. Check Options & Answers
  console.log(`Checking options, answer keys, and distractors...`);
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

  RAW_GENERALPROBE_2_PHYS_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_2_PHYS_QUESTIONS[idx];
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
      console.error(`FAIL: ${sq.id} options array length is ${sq.options.length}, expected 5.`);
      errors++;
    }

    const correctIndex = ["A", "B", "C", "D", "E"].indexOf(q.correct_answer);
    if (sq.correctAnswer !== correctIndex) {
      console.error(`FAIL: ${sq.id} correctAnswer index ${sq.correctAnswer} does not match ${q.correct_answer} (${correctIndex}).`);
      errors++;
    }
  });

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
    console.error(`FAIL: Answer distribution does not match target:`, answerCounts);
    errors++;
  }

  console.log(`Difficulty counts:`, difficultyCounts);
  if (
    difficultyCounts.foundational === 4 &&
    difficultyCounts.intermediate === 9 &&
    difficultyCounts.advanced === 5
  ) {
    console.log(`✓ Difficulty distribution is exactly 4 foundational, 9 intermediate, 5 advanced.`);
  } else {
    console.error(`FAIL: Difficulty distribution does not match target:`, difficultyCounts);
    errors++;
  }

  console.log(`Chapter distribution across MedAT-H chapters:`, chapterCounts);
  Object.keys(chapterCounts).forEach((ch) => {
    console.log(`  - ${ch}: ${chapterCounts[ch]} questions`);
  });
  if (Object.keys(chapterCounts).length === 7) {
    console.log(`✓ All 7 official physics chapters represented.`);
  } else {
    console.error(`FAIL: Expected 7 chapters, found ${Object.keys(chapterCounts).length}.`);
    errors++;
  }

  // 4. Check GP1 integrity
  console.log(`Verifying GP1 integrity and isolation...`);
  if (GENERALPROBE_1_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: GP1 Physics has ${GENERALPROBE_1_PHYS_QUESTIONS.length} questions, expected 18.`);
    errors++;
  } else {
    console.log(`✓ GP1 Physics still contains exactly 18 questions.`);
  }

  const gp1Ids = new Set(GENERALPROBE_1_PHYS_QUESTIONS.map((q) => q.id));
  const collision = GENERALPROBE_2_PHYS_QUESTIONS.some((q) => gp1Ids.has(q.id));
  if (collision) {
    console.error(`FAIL: ID collision between GP1 and GP2 Physics!`);
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP1 and GP2.`);
  }

  // 5. Test buildBmsSimulationQuestions(2)
  console.log(`Testing buildBmsSimulationQuestions(2)...`);
  const sim2Bms = buildBmsSimulationQuestions(2);
  const sim2Phys = sim2Bms.filter((q) => q.subjectId === "phys");
  if (sim2Phys.length !== 18) {
    console.error(`FAIL: buildBmsSimulationQuestions(2) has ${sim2Phys.length} phys questions, expected 18.`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) has exactly 18 phys questions.`);
  }

  const gp2PhysIds = new Set(GENERALPROBE_2_PHYS_QUESTIONS.map((q) => q.id));
  const allMatch = sim2Phys.every((q) => gp2PhysIds.has(q.id));
  if (!allMatch) {
    console.error(`FAIL: buildBmsSimulationQuestions(2) did not load GENERALPROBE_2_PHYS_QUESTIONS!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) correctly uses GENERALPROBE_2_PHYS_QUESTIONS.`);
  }

  // 6. Test buildGeneralprobe2Dataset
  console.log(`Testing buildGeneralprobe2Dataset() and dataset lookup...`);
  const ds2 = buildGeneralprobe2Dataset();
  const ds2Phys = ds2.bmsQuestions.filter((q) => q.subjectId === "phys");
  if (ds2Phys.length !== 18 || ds2Phys[0].id !== "PHYS-BMS-GP2-001" || ds2Phys[17].id !== "PHYS-BMS-GP2-018") {
    console.error(`FAIL: buildGeneralprobe2Dataset() bmsQuestions phys mismatch!`);
    errors++;
  } else {
    console.log(`✓ buildGeneralprobe2Dataset() properly loads the 18 GP2 physics questions.`);
  }

  const bioCount = ds2.bmsQuestions.filter((q) => q.subjectId === "bio").length;
  const chemCount = ds2.bmsQuestions.filter((q) => q.subjectId === "chem").length;
  const physCount = ds2Phys.length;
  const mathCount = ds2.bmsQuestions.filter((q) => q.subjectId === "math").length;
  const totalBms = ds2.bmsQuestions.length;

  console.log(`Simulation 2 BMS subject breakdown:`);
  console.log(`  - Bio: ${bioCount} (expected 40)`);
  console.log(`  - Chem: ${chemCount} (expected 24)`);
  console.log(`  - Phys: ${physCount} (expected 18)`);
  console.log(`  - Math: ${mathCount} (expected 12)`);
  console.log(`  - Total BMS: ${totalBms} (expected 94)`);

  if (totalBms === 94 && bioCount === 40 && chemCount === 24 && physCount === 18 && mathCount === 12) {
    console.log(`✓ Exact 94 BMS questions configured for Generalprobe #2.`);
  } else {
    console.error(`FAIL: BMS total or subtest count incorrect in GP2!`);
    errors++;
  }

  const lookupDs1 = getGeneralprobeDataset("generalprobe-2");
  const lookupDs2 = getGeneralprobeDataset("mock-full-medat-h-2");
  if (lookupDs1 && lookupDs2 && lookupDs1.id === "generalprobe-2" && lookupDs2.id === "generalprobe-2") {
    console.log(`✓ getGeneralprobeDataset("generalprobe-2") and ("mock-full-medat-h-2") both resolve successfully.`);
  } else {
    console.error(`FAIL: Dataset lookup failed.`);
    errors++;
  }

  console.log(`=== VERIFICATION SUMMARY ===`);
  if (errors === 0) {
    console.log(`🎉 ALL PHYSICS VERIFICATION CHECKS PASSED PERFECTLY!`);
  } else {
    console.error(`❌ Verification finished with ${errors} error(s).`);
    process.exit(1);
  }
}

runVerification();
