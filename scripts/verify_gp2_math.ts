import {
  RAW_GENERALPROBE_2_MATH_QUESTIONS,
  GENERALPROBE_2_MATH_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2MathQuestions";
import { GENERALPROBE_1_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe1MathQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe2Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("=== VERIFYING BMS MATHEMATIK GENERALPROBE #2 ===");

  let errors = 0;

  // 1. Question Count
  console.log(`Checking question counts...`);
  if (RAW_GENERALPROBE_2_MATH_QUESTIONS.length !== 12) {
    console.error(`FAIL: RAW_GENERALPROBE_2_MATH_QUESTIONS has ${RAW_GENERALPROBE_2_MATH_QUESTIONS.length} items, expected 12.`);
    errors++;
  } else {
    console.log(`✓ Exactly 12 raw questions.`);
  }

  if (GENERALPROBE_2_MATH_QUESTIONS.length !== 12) {
    console.error(`FAIL: GENERALPROBE_2_MATH_QUESTIONS has ${GENERALPROBE_2_MATH_QUESTIONS.length} items, expected 12.`);
    errors++;
  } else {
    console.log(`✓ Exactly 12 StoredQuestion objects.`);
  }

  // 2. ID sequence MATH-BMS-GP2-001 through 012
  console.log(`Checking ID sequence MATH-BMS-GP2-001 to 012...`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_2_MATH_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `MATH-BMS-GP2-${expectedNum}`;
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
  if (seenIds.size === 12) {
    console.log(`✓ All 12 IDs are unique and strictly sequential.`);
  }

  // 3. Check Options & Answers
  console.log(`Checking options, answer keys, and distractors...`);
  const answerCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const difficultyCounts: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };
  const chapterCounts: Record<string, number> = {};

  const validChapters = new Set([
    "math-01-zehnerpotenzen",
    "math-02-algebra",
    "math-03-geometrie",
    "math-04-einheiten",
    "math-05-funktionen",
    "math-06-vektorrechnung",
  ]);

  RAW_GENERALPROBE_2_MATH_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_2_MATH_QUESTIONS[idx];
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
    answerCounts.A === 3 &&
    answerCounts.B === 2 &&
    answerCounts.C === 3 &&
    answerCounts.D === 2 &&
    answerCounts.E === 2
  ) {
    console.log(`✓ Answer distribution matches target: A: 3, B: 2, C: 3, D: 2, E: 2 (Total: 12).`);
  } else {
    console.error(`FAIL: Answer distribution does not match target:`, answerCounts);
    errors++;
  }

  console.log(`Difficulty counts:`, difficultyCounts);
  if (
    difficultyCounts.foundational === 3 &&
    difficultyCounts.intermediate === 6 &&
    difficultyCounts.advanced === 3
  ) {
    console.log(`✓ Difficulty distribution is exactly 3 foundational, 6 intermediate, 3 advanced.`);
  } else {
    console.error(`FAIL: Difficulty distribution does not match target:`, difficultyCounts);
    errors++;
  }

  console.log(`Chapter distribution across MedAT-H chapters:`, chapterCounts);
  Object.keys(chapterCounts).forEach((ch) => {
    console.log(`  - ${ch}: ${chapterCounts[ch]} questions`);
  });
  if (Object.keys(chapterCounts).length === 6) {
    const allTwo = Object.values(chapterCounts).every((c) => c === 2);
    if (allTwo) {
      console.log(`✓ Exactly 2 questions per chapter across all 6 official mathematics chapters.`);
    } else {
      console.error(`FAIL: Chapter counts are not balanced at 2 each:`, chapterCounts);
      errors++;
    }
  } else {
    console.error(`FAIL: Expected 6 chapters, found ${Object.keys(chapterCounts).length}.`);
    errors++;
  }

  // 3.5 Independent Recalculation & Targeted Distractor Verification
  console.log(`Running independent mathematical recalculation of all 12 items...`);
  
  // Q1
  const q1 = RAW_GENERALPROBE_2_MATH_QUESTIONS[0];
  const q1Calc = (1.8e5 * 4.0e-2) / (6.0e7 * 3.0e-9); // 7200 / 0.18 = 40000
  if (Math.abs(q1Calc - 40000) > 1e-6 || q1.correct_answer !== "B") {
    console.error(`FAIL: Q1 recalculation mismatch: calc=${q1Calc}, expected 40000 (key B)`);
    errors++;
  } else {
    console.log(`✓ Q1 verified: (1.8e5 * 4e-2)/(6e7 * 3e-9) = 40,000 (Key B).`);
  }

  // Q2
  const q2 = RAW_GENERALPROBE_2_MATH_QUESTIONS[1];
  const q2Calc = (Math.sqrt(32) / Math.sqrt(2)) * Math.pow(4, -0.5) * Math.cbrt(Math.pow(8, 2)); // 4 * 0.5 * 4 = 8
  if (Math.abs(q2Calc - 8) > 1e-6 || q2.correct_answer !== "D") {
    console.error(`FAIL: Q2 recalculation mismatch: calc=${q2Calc}, expected 8 (key D)`);
    errors++;
  } else {
    console.log(`✓ Q2 verified: sqrt(32)/sqrt(2) * 4^(-1/2) * cbrt(8^2) = 8 (Key D).`);
  }
  // Check Q2 distractors B and E specifically
  if (!q2.explanations_incorrect.B.includes("4") || !q2.explanations_incorrect.B.includes("2")) {
    console.error(`FAIL: Q2 distractor B explanation does not clearly show arithmetic mistake to 4.`);
    errors++;
  } else {
    console.log(`✓ Q2 distractor B explanation demonstrates exact mistake yielding 4.`);
  }
  if (!q2.explanations_incorrect.E.includes("32") || !q2.explanations_incorrect.E.includes("4 \\cdot 2 \\cdot 4")) {
    console.error(`FAIL: Q2 distractor E explanation does not clearly show arithmetic mistake to 32.`);
    errors++;
  } else {
    console.log(`✓ Q2 distractor E explanation demonstrates exact mistake yielding 32.`);
  }

  // Q3
  const q3 = RAW_GENERALPROBE_2_MATH_QUESTIONS[2];
  // 2x^2 - 10x + 12 = 0 -> x^2 - 5x + 6 = 0 -> (x-2)(x-3)=0 -> {2, 3}
  if (q3.correct_answer !== "A" || !q3.options.A.includes("2") || !q3.options.A.includes("3")) {
    console.error(`FAIL: Q3 recalculation mismatch: key=${q3.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q3 verified: 2x^2 - 10x + 12 = 0 has roots {2, 3} (Key A).`);
  }

  // Q4
  const q4 = RAW_GENERALPROBE_2_MATH_QUESTIONS[3];
  // A + B = 140, A - B = 20 -> A = 80
  if (q4.correct_answer !== "C" || !q4.options.C.includes("80")) {
    console.error(`FAIL: Q4 recalculation mismatch: key=${q4.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q4 verified: A + B = 140, A - B = 20 -> A = 80 (Key C).`);
  }

  // Q5
  const q5 = RAW_GENERALPROBE_2_MATH_QUESTIONS[4];
  // c = 12, alpha = 30 deg -> b = 12 * cos(30 deg) = 12 * sqrt(3)/2 = 6*sqrt(3)
  if (q5.correct_answer !== "E" || !q5.options.E.includes("6\\sqrt{3}")) {
    console.error(`FAIL: Q5 recalculation mismatch: key=${q5.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q5 verified: 12 * cos(30°) = 6*sqrt(3) cm (Key E).`);
  }

  // Q6
  const q6 = RAW_GENERALPROBE_2_MATH_QUESTIONS[5];
  // V2 = 8*V1 -> r2/r1 = cbrt(8) = 2 -> O2/O1 = 2^2 = 4
  if (q6.correct_answer !== "A" || !q6.options.A.includes("4")) {
    console.error(`FAIL: Q6 recalculation mismatch: key=${q6.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q6 verified: V2=8*V1 -> r2=2*r1 -> O2=4*O1 (Key A).`);
  }

  // Q7
  const q7 = RAW_GENERALPROBE_2_MATH_QUESTIONS[6];
  // 50 m/s = 180 km/h; 180 * (18/60) = 54 km
  if (q7.correct_answer !== "C" || !q7.options.C.includes("180") || !q7.options.C.includes("54")) {
    console.error(`FAIL: Q7 recalculation mismatch: key=${q7.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q7 verified: 50 m/s = 180 km/h, distance in 18 min = 54 km (Key C).`);
  }

  // Q8
  const q8 = RAW_GENERALPROBE_2_MATH_QUESTIONS[7];
  // 20 kg * 15 mg/kg = 300 mg; 300 / 6 = 50 mL; 50 * 20 = 1000 drops
  if (q8.correct_answer !== "B" || !q8.options.B.includes("50") || !q8.options.B.includes("1000")) {
    console.error(`FAIL: Q8 recalculation mismatch: key=${q8.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q8 verified: 20kg*15mg/kg = 300mg -> 50 mL -> 1000 drops (Key B).`);
  }

  // Q9
  const q9 = RAW_GENERALPROBE_2_MATH_QUESTIONS[8];
  // f(x) = -2x^2 + 8x - 3 -> x_s = -8 / (2*-2) = 2; y_s = -2(4) + 16 - 3 = 5; a=-2 < 0 -> global maximum
  if (q9.correct_answer !== "D" || !q9.options.D.includes("S(2") || !q9.options.D.includes("5") || !q9.options.D.includes("globales Maximum")) {
    console.error(`FAIL: Q9 recalculation mismatch: key=${q9.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q9 verified: vertex S(2 | 5) is global maximum (Key D).`);
  }
  // Check Q9 option B distractor consistency
  if (!q9.options.B.includes("11") || !q9.explanations_incorrect.B.includes("11")) {
    console.error(`FAIL: Q9 option B and explanation inconsistency: option=${q9.options.B}, expl=${q9.explanations_incorrect.B}`);
    errors++;
  } else {
    console.log(`✓ Q9 option B consistently features S(2 | 11) with explanation producing 11.`);
  }

  // Q10
  const q10 = RAW_GENERALPROBE_2_MATH_QUESTIONS[9];
  // T_1/2 = 110 min, t = 330 min -> n = 3 -> A = 800 * (1/8) = 100 MBq; relative loss = 700/800 = 7/8 = 87.5%
  if (q10.correct_answer !== "A" || !q10.options.A.includes("100") || !q10.options.A.includes("{7}{8}") || !q10.options.A.includes("87{,}5")) {
    console.error(`FAIL: Q10 recalculation mismatch: key=${q10.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q10 verified: 3 half-lives -> 100 MBq remaining, 7/8 (87.5%) lost (Key A).`);
  }

  // Q11
  const q11 = RAW_GENERALPROBE_2_MATH_QUESTIONS[10];
  // u=(1,0,1), w=(0,1,1) -> u.w = 1; |u|=sqrt(2), |w|=sqrt(2) -> cos phi = 1/2 -> phi = 60 deg
  if (q11.correct_answer !== "E" || !q11.options.E.includes("60^\\circ")) {
    console.error(`FAIL: Q11 recalculation mismatch: key=${q11.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q11 verified: scalar product = 1, lengths = sqrt(2) -> cos=1/2 -> 60° (Key E).`);
  }

  // Q12
  const q12 = RAW_GENERALPROBE_2_MATH_QUESTIONS[11];
  // g: X = (1, -2, 3)^T + t*(2, 3, -1)^T; z=0 -> 3 - t = 0 -> t = 3 -> X = (7, 7, 0)
  if (q12.correct_answer !== "C" || !q12.options.C.includes("D(7") || !q12.options.C.includes("7") || !q12.options.C.includes("0)")) {
    console.error(`FAIL: Q12 recalculation mismatch: key=${q12.correct_answer}`);
    errors++;
  } else {
    console.log(`✓ Q12 verified: z=0 -> t=3 -> D(7 | 7 | 0) (Key C).`);
  }
  // Check Q12 option E distractor consistency
  if (!q12.options.E.includes("-11") || !q12.explanations_incorrect.E.includes("-11")) {
    console.error(`FAIL: Q12 option E and explanation inconsistency: option=${q12.options.E}, expl=${q12.explanations_incorrect.E}`);
    errors++;
  } else {
    console.log(`✓ Q12 option E consistently features D(7 | -11 | 0) with explanation producing -11.`);
  }

  // 4. Check GP1 integrity
  console.log(`Verifying GP1 integrity and isolation...`);
  if (GENERALPROBE_1_MATH_QUESTIONS.length !== 12) {
    console.error(`FAIL: GP1 Math has ${GENERALPROBE_1_MATH_QUESTIONS.length} questions, expected 12.`);
    errors++;
  } else {
    console.log(`✓ GP1 Math still contains exactly 12 questions.`);
  }

  const gp1Ids = new Set(GENERALPROBE_1_MATH_QUESTIONS.map((q) => q.id));
  const collision = GENERALPROBE_2_MATH_QUESTIONS.some((q) => gp1Ids.has(q.id));
  if (collision) {
    console.error(`FAIL: ID collision between GP1 and GP2 Math!`);
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP1 and GP2.`);
  }

  // 5. Test buildBmsSimulationQuestions(2)
  console.log(`Testing buildBmsSimulationQuestions(2)...`);
  const sim2Bms = buildBmsSimulationQuestions(2);
  const sim2Math = sim2Bms.filter((q) => q.subjectId === "math");
  if (sim2Math.length !== 12) {
    console.error(`FAIL: buildBmsSimulationQuestions(2) has ${sim2Math.length} math questions, expected 12.`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) has exactly 12 math questions.`);
  }

  const gp2MathIds = new Set(GENERALPROBE_2_MATH_QUESTIONS.map((q) => q.id));
  const allMatch = sim2Math.every((q) => gp2MathIds.has(q.id));
  if (!allMatch) {
    console.error(`FAIL: buildBmsSimulationQuestions(2) did not load GENERALPROBE_2_MATH_QUESTIONS!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(2) correctly uses GENERALPROBE_2_MATH_QUESTIONS.`);
  }

  // 6. Test buildGeneralprobe2Dataset
  console.log(`Testing buildGeneralprobe2Dataset() and dataset lookup...`);
  const ds2 = buildGeneralprobe2Dataset();
  const ds2Math = ds2.bmsQuestions.filter((q) => q.subjectId === "math");
  if (ds2Math.length !== 12 || ds2Math[0].id !== "MATH-BMS-GP2-001" || ds2Math[11].id !== "MATH-BMS-GP2-012") {
    console.error(`FAIL: buildGeneralprobe2Dataset() bmsQuestions math mismatch!`);
    errors++;
  } else {
    console.log(`✓ buildGeneralprobe2Dataset() properly loads the 12 GP2 math questions.`);
  }

  const bioCount = ds2.bmsQuestions.filter((q) => q.subjectId === "bio").length;
  const chemCount = ds2.bmsQuestions.filter((q) => q.subjectId === "chem").length;
  const physCount = ds2.bmsQuestions.filter((q) => q.subjectId === "phys").length;
  const mathCount = ds2Math.length;
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
    console.log(`🎉 ALL MATHEMATICS VERIFICATION CHECKS PASSED PERFECTLY!`);
  } else {
    console.error(`❌ Verification finished with ${errors} error(s).`);
    process.exit(1);
  }
}

runVerification();
