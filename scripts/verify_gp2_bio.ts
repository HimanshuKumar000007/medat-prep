import {
  RAW_GENERALPROBE_2_BIO_QUESTIONS,
  GENERALPROBE_2_BIO_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2BiologyQuestions";
import { GENERALPROBE_1_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe1BioQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe2Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("=== VERIFYING BMS BIOLOGIE GENERALPROBE #2 ===");

  let errors = 0;

  // 1. Question Count
  console.log(`Checking question counts...`);
  if (RAW_GENERALPROBE_2_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: RAW_GENERALPROBE_2_BIO_QUESTIONS has ${RAW_GENERALPROBE_2_BIO_QUESTIONS.length} items, expected 40.`);
    errors++;
  } else {
    console.log(`✓ Exactly 40 raw questions.`);
  }

  if (GENERALPROBE_2_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: GENERALPROBE_2_BIO_QUESTIONS has ${GENERALPROBE_2_BIO_QUESTIONS.length} items, expected 40.`);
    errors++;
  } else {
    console.log(`✓ Exactly 40 StoredQuestion objects.`);
  }

  // 2. ID sequence BIO-BMS-GP2-001 through 040
  console.log(`Checking ID sequence BIO-BMS-GP2-001 to 040...`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_2_BIO_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `BIO-BMS-GP2-${expectedNum}`;
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
    console.log(`✓ All 40 IDs are unique and strictly sequential.`);
  }

  // 3. Check Options & Answers
  console.log(`Checking options, answer keys, and distractors...`);
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

  RAW_GENERALPROBE_2_BIO_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_2_BIO_QUESTIONS[idx];
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
    answerCounts.A === 8 &&
    answerCounts.B === 8 &&
    answerCounts.C === 8 &&
    answerCounts.D === 8 &&
    answerCounts.E === 8
  ) {
    console.log(`✓ Answer distribution is perfectly balanced: exactly 8 of each (A, B, C, D, E).`);
  } else {
    console.error(`FAIL: Answer distribution is not 8 each!`, answerCounts);
    errors++;
  }

  console.log(`Difficulty counts:`, difficultyCounts);
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

  console.log(`Chapter distribution across 9 MedAT-H chapters:`, chapterCounts);
  let totalInChapters = 0;
  for (const ch of validChapters) {
    const c = chapterCounts[ch] || 0;
    totalInChapters += c;
    console.log(`  - ${ch}: ${c} questions`);
    if (c === 0) {
      console.error(`FAIL: Chapter ${ch} has 0 questions assigned.`);
      errors++;
    }
  }
  if (totalInChapters === 40) {
    console.log(`✓ All 9 chapters represented, summing to 40 questions.`);
  }

  // 4. Check GP1 integrity and isolation
  console.log(`Verifying GP1 integrity and isolation...`);
  if (GENERALPROBE_1_BIO_QUESTIONS.length !== 40) {
    console.error(`FAIL: GENERALPROBE_1_BIO_QUESTIONS length changed: ${GENERALPROBE_1_BIO_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP1 Biology still contains exactly 40 questions.`);
  }
  const gp1Ids = new Set(GENERALPROBE_1_BIO_QUESTIONS.map((q) => q.id));
  const collision = RAW_GENERALPROBE_2_BIO_QUESTIONS.filter((q) => gp1Ids.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP1 and GP2! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP1 and GP2.`);
  }

  // 5. Check buildBmsSimulationQuestions(2)
  console.log(`Testing buildBmsSimulationQuestions(2)...`);
  const bmsSim2 = buildBmsSimulationQuestions(2);
  const bioSim2 = bmsSim2.filter((q) => q.subjectId === "bio");
  if (bioSim2.length !== 40) {
    console.error(`FAIL: buildBmsSimulationQuestions(2) returned ${bioSim2.length} bio questions, expected 40.`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) has exactly 40 bio questions.`);
  }

  const matchesGp2Ids = bioSim2.every((q, idx) => q.id === RAW_GENERALPROBE_2_BIO_QUESTIONS[idx].id);
  if (!matchesGp2Ids) {
    console.error(`FAIL: Bio questions in buildBmsSimulationQuestions(2) do not match GP2 questions!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) correctly uses GENERALPROBE_2_BIO_QUESTIONS.`);
  }

  // 6. Test buildGeneralprobe2Dataset() and getGeneralprobeDataset()
  console.log(`Testing buildGeneralprobe2Dataset() and dataset lookup...`);
  const ds2 = buildGeneralprobe2Dataset();
  const ds2Bio = ds2.bmsQuestions.filter((q) => q.subjectId === "bio");
  if (ds2Bio.length !== 40 || ds2Bio[0].id !== "BIO-BMS-GP2-001" || ds2Bio[39].id !== "BIO-BMS-GP2-040") {
    console.error(`FAIL: buildGeneralprobe2Dataset() bmsQuestions bio mismatch!`);
    errors++;
  } else {
    console.log(`✓ buildGeneralprobe2Dataset() properly loads the 40 GP2 biology questions.`);
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
    console.log(`🎉 ALL VERIFICATION CHECKS PASSED PERFECTLY!`);
  } else {
    console.error(`❌ VERIFICATION COMPLETED WITH ${errors} ERRORS.`);
    process.exit(1);
  }
}

runVerification();
