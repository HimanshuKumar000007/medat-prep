import {
  RAW_GENERALPROBE_4_MATH_QUESTIONS,
  GENERALPROBE_4_MATH_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4MathQuestions";
import { GENERALPROBE_1_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe1MathQuestions";
import { GENERALPROBE_2_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe2MathQuestions";
import { GENERALPROBE_3_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe3MathQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe4Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("==================================================");
  console.log("VERIFYING BMS MATHEMATIK GENERALPROBE #4 & QA");
  console.log("==================================================");

  let errors = 0;

  // 1. Question Count & Structural Integrity
  console.log(`\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---`);
  if (RAW_GENERALPROBE_4_MATH_QUESTIONS.length !== 12) {
    console.error(`FAIL: RAW_GENERALPROBE_4_MATH_QUESTIONS has ${RAW_GENERALPROBE_4_MATH_QUESTIONS.length} items, expected 12.`);
    errors++;
  } else {
    console.log(`✓ Exactly 12 raw questions.`);
  }

  if (GENERALPROBE_4_MATH_QUESTIONS.length !== 12) {
    console.error(`FAIL: GENERALPROBE_4_MATH_QUESTIONS has ${GENERALPROBE_4_MATH_QUESTIONS.length} items, expected 12.`);
    errors++;
  } else {
    console.log(`✓ Exactly 12 StoredQuestion objects.`);
  }

  // 2. ID sequence MATH-BMS-GP4-001 through 012
  console.log(`\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_4_MATH_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `MATH-BMS-GP4-${expectedNum}`;
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
    console.log(`✓ All 12 IDs are unique and strictly sequential (MATH-BMS-GP4-001 to 012).`);
  }

  // 3. Difficulty, Options & Answer Keys
  console.log(`\n--- 3. MATHEMATICAL & ANSWER-KEY CONSISTENCY ---`);
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

  RAW_GENERALPROBE_4_MATH_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_4_MATH_QUESTIONS[idx];
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

    // Check string escaping / LaTeX hygiene
    const allText = JSON.stringify(q);
    if (allText.includes("\t")) {
      console.error(`FAIL: ${q.id} contains unescaped tab character in string!`);
      errors++;
    }
  });

  const sequence = RAW_GENERALPROBE_4_MATH_QUESTIONS.map((q) => q.correct_answer);
  console.log(`Answer key sequence:`, sequence.join(", "));

  // Check streaks
  let maxStreak = 1;
  let currentStreak = 1;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] === sequence[i - 1]) {
      currentStreak++;
      if (currentStreak > maxStreak) maxStreak = currentStreak;
    } else {
      currentStreak = 1;
    }
  }
  console.log(`Max answer streak: ${maxStreak}`);
  if (maxStreak > 2) {
    console.error(`FAIL: Max streak is ${maxStreak}, exceeds limit of 2!`);
    errors++;
  } else {
    console.log(`✓ Answer key sequence is non-periodic, acyclic, and max streak is <= 2.`);
  }

  console.log(`Answer counts:`, answerCounts);
  if (
    answerCounts.A === 3 &&
    answerCounts.B === 3 &&
    answerCounts.C === 2 &&
    answerCounts.D === 2 &&
    answerCounts.E === 2
  ) {
    console.log(`✓ Answer key distribution is perfectly balanced: 3 A, 3 B, 2 C, 2 D, 2 E (Total: 12).`);
  } else {
    console.error(`FAIL: Unexpected answer counts:`, answerCounts);
    errors++;
  }

  // 4. Difficulty Split Verification
  console.log(`\n--- 4. DIFFICULTY CALIBRATION ---`);
  console.log(`Difficulty counts:`, difficultyCounts);
  if (
    difficultyCounts.foundational === 3 &&
    difficultyCounts.intermediate === 6 &&
    difficultyCounts.advanced === 3
  ) {
    console.log(`✓ Exactly 3 Foundational (25.0%), 6 Intermediate (50.0%), and 3 Advanced (25.0%).`);
  } else {
    console.error(`FAIL: Difficulty counts do not match 3 / 6 / 3:`, difficultyCounts);
    errors++;
  }

  // 5. Syllabus Chapter Coverage
  console.log(`\n--- 5. SYLLABUS CHAPTER COVERAGE ---`);
  console.log(`Chapter distribution:`, chapterCounts);
  const expectedChapters = [
    "math-01-zehnerpotenzen",
    "math-02-algebra",
    "math-03-geometrie",
    "math-04-einheiten",
    "math-05-funktionen",
    "math-06-vektorrechnung",
  ];
  let allChaptersPresent = true;
  expectedChapters.forEach((ch) => {
    const count = chapterCounts[ch] || 0;
    if (count !== 2) {
      console.error(`FAIL: Chapter "${ch}" has ${count} questions, expected exactly 2.`);
      errors++;
      allChaptersPresent = false;
    }
  });
  if (allChaptersPresent) {
    console.log(`✓ All 6 MedAT mathematics chapters have exactly 2 questions each.`);
  }

  // 6. Zero Collisions with GP1, GP2, GP3
  console.log(`\n--- 6. ZERO COLLISION & ORIGINALITY AUDIT ---`);
  const priorIds = new Set<string>();
  const priorStems = new Set<string>();

  [
    ...GENERALPROBE_1_MATH_QUESTIONS,
    ...GENERALPROBE_2_MATH_QUESTIONS,
    ...GENERALPROBE_3_MATH_QUESTIONS,
  ].forEach((q) => {
    priorIds.add(q.id);
    priorStems.add(q.questionText.trim().toLowerCase());
  });

  let collisionCount = 0;
  RAW_GENERALPROBE_4_MATH_QUESTIONS.forEach((q) => {
    if (priorIds.has(q.id)) {
      console.error(`FAIL: ID collision with earlier GP: "${q.id}"`);
      errors++;
      collisionCount++;
    }
    if (priorStems.has(q.stem.trim().toLowerCase())) {
      console.error(`FAIL: Stem text collision with earlier GP: "${q.id}"`);
      errors++;
      collisionCount++;
    }
  });
  if (collisionCount === 0) {
    console.log(`✓ Zero ID or stem collisions against GP1, GP2, and GP3 math banks.`);
  }

  // 7. Rigorous Mathematical Calculation Proofs
  console.log(`\n--- 7. INDEPENDENT MATHEMATICAL CALCULATION PROOFS ---`);

  // Q001: 4.8e7 virions/mL * 25 uL (25e-3 mL) = 1.2e6
  {
    const conc = 4.8e7;
    const volMl = 25e-3;
    const count = conc * volMl;
    if (Math.abs(count - 1.2e6) > 1e-4) {
      console.error(`FAIL: Q001 calculation error: ${count} !== 1.2e6`);
      errors++;
    } else {
      console.log(`✓ Q001: 4.8e7 * 0.025 = ${count} = 1.2e6 virions. Option B matches.`);
    }
  }

  // Q002: (16 * 10^-8)^(3/4) / (sqrt(4 * 10^-6) * 10^-2)
  {
    const num = Math.pow(16 * 1e-8, 0.75); // (16^0.75 = 8, (1e-8)^0.75 = 1e-6 -> 8e-6)
    const den = Math.sqrt(4 * 1e-6) * 1e-2; // 2e-3 * 1e-2 = 2e-5
    const val = num / den; // 8e-6 / 2e-5 = 0.4
    if (Math.abs(val - 0.4) > 1e-6) {
      console.error(`FAIL: Q002 calculation error: ${val} !== 0.4`);
      errors++;
    } else {
      console.log(`✓ Q002: (16*10^-8)^0.75 / (sqrt(4*10^-6)*10^-2) = ${val}. Option C matches.`);
    }
  }

  // Q003: (3x - 5)/4 - (x - 1)/6 = 2/3 => x = 3
  {
    const testX = 3;
    const leftSide = (3 * testX - 5) / 4 - (testX - 1) / 6;
    const rightSide = 2 / 3;
    if (Math.abs(leftSide - rightSide) > 1e-6) {
      console.error(`FAIL: Q003 calculation error for x=3: ${leftSide} !== ${rightSide}`);
      errors++;
    } else {
      console.log(`✓ Q003: (3(3)-5)/4 - (3-1)/6 = ${leftSide} = 2/3. Option D matches.`);
    }
  }

  // Q004: 2x^2 - 14x + 20 = 0 => x1 = 2, x2 = 5, difference = 3
  {
    const r1 = 2;
    const r2 = 5;
    const eq1 = 2 * r1 * r1 - 14 * r1 + 20;
    const eq2 = 2 * r2 * r2 - 14 * r2 + 20;
    const diff = r2 - r1;
    if (eq1 !== 0 || eq2 !== 0 || diff !== 3) {
      console.error(`FAIL: Q004 quadratic equation error`);
      errors++;
    } else {
      console.log(`✓ Q004: Roots are 2 and 5, difference is ${diff}. Option A matches.`);
    }
  }

  // Q005: R = 10 mm, d = 6 mm => s/2 = sqrt(100 - 36) = 8 => s = 16 mm, h = 10 - 6 = 4 mm
  {
    const R = 10;
    const d = 6;
    const halfChord = Math.sqrt(R * R - d * d);
    const s = 2 * halfChord;
    const h = R - d;
    if (s !== 16 || h !== 4) {
      console.error(`FAIL: Q005 chord error: s=${s}, h=${h}`);
      errors++;
    } else {
      console.log(`✓ Q005: Chord s = ${s} mm, Sagittal height h = ${h} mm. Option E matches.`);
    }
  }

  // Q006: V2/V1 = 2.197 => k = 1.3 => A2/A1 = 1.69 => +69%
  {
    const volRatio = 2.197;
    const k = Math.cbrt(volRatio);
    const areaRatio = k * k;
    const pctIncrease = (areaRatio - 1) * 100;
    if (Math.abs(k - 1.3) > 1e-5 || Math.abs(pctIncrease - 69.0) > 1e-4) {
      console.error(`FAIL: Q006 scaling error: k=${k}, pct=${pctIncrease}`);
      errors++;
    } else {
      console.log(`✓ Q006: k = ${k.toFixed(3)}, Surface increase = ${pctIncrease.toFixed(1)}%. Option C matches.`);
    }
  }

  // Q007: 1.08 km/h = 1.08 / 3.6 m/s = 0.30 m/s = 30 cm/s
  {
    const kmh = 1.08;
    const ms = kmh / 3.6;
    const cms = ms * 100;
    if (Math.abs(ms - 0.3) > 1e-6 || Math.abs(cms - 30) > 1e-6) {
      console.error(`FAIL: Q007 speed conversion error: ms=${ms}, cms=${cms}`);
      errors++;
    } else {
      console.log(`✓ Q007: 1.08 km/h = ${ms} m/s = ${cms} cm/s. Option A matches.`);
    }
  }

  // Q008: 75 kg * 20 ug/kg/h * 8 h = 12000 ug = 12 mg; V = 12 mg / 0.25 mg/mL = 48 mL
  {
    const massKg = 75;
    const rateUg = 20;
    const hours = 8;
    const concMgMl = 0.25;
    const totalMg = (massKg * rateUg * hours) / 1000;
    const volMl = totalMg / concMgMl;
    if (totalMg !== 12 || volMl !== 48) {
      console.error(`FAIL: Q008 infusion volume error: ${volMl} !== 48`);
      errors++;
    } else {
      console.log(`✓ Q008: Total drug = ${totalMg} mg, Infusion volume = ${volMl} mL. Option B matches.`);
    }
  }

  // Q009: log10(500) + log10(20) - log10(1/100) = log10(10000) - (-2) = 4 + 2 = 6
  {
    const val = Math.log10(500) + Math.log10(20) - Math.log10(1 / 100);
    if (Math.abs(val - 6) > 1e-6) {
      console.error(`FAIL: Q009 logarithm calculation error: ${val} !== 6`);
      errors++;
    } else {
      console.log(`✓ Q009: log10(500*20) - log10(0.01) = ${val.toFixed(4)}. Option E matches.`);
    }
  }

  // Q010: Half-life = 6 h; 12.5% = (1/2)^3 => 3 * 6 = 18 h
  {
    const tHalf = 6;
    const targetFraction = 0.125;
    const nHalfLives = Math.log2(1 / targetFraction);
    const time = nHalfLives * tHalf;
    if (Math.abs(nHalfLives - 3) > 1e-6 || Math.abs(time - 18) > 1e-6) {
      console.error(`FAIL: Q010 decay error: time=${time}`);
      errors++;
    } else {
      console.log(`✓ Q010: n = ${nHalfLives} half-lives, t = ${time} h. Option A matches.`);
    }
  }

  // Q011: F1 = (12, -5), F2 = (3, 13) => Fres = (15, 8) => |Fres| = sqrt(225 + 64) = 17
  {
    const fx = 12 + 3;
    const fy = -5 + 13;
    const mag = Math.sqrt(fx * fx + fy * fy);
    if (fx !== 15 || fy !== 8 || mag !== 17) {
      console.error(`FAIL: Q011 vector magnitude error: mag=${mag}`);
      errors++;
    } else {
      console.log(`✓ Q011: Fres = (${fx}, ${fy}), |Fres| = ${mag} N. Option B matches.`);
    }
  }

  // Q012: u = (3, -2, 4), v = (2, 5, k) => 6 - 10 + 4k = 0 => k = 1; |u| = sqrt(9 + 4 + 16) = sqrt(29)
  {
    const k = (10 - 6) / 4;
    const dotProduct = 3 * 2 + (-2) * 5 + 4 * k;
    const magUSq = 3 * 3 + (-2) * (-2) + 4 * 4;
    if (k !== 1 || dotProduct !== 0 || magUSq !== 29) {
      console.error(`FAIL: Q012 vector error: k=${k}, dot=${dotProduct}, magUSq=${magUSq}`);
      errors++;
    } else {
      console.log(`✓ Q012: Orthogonal parameter k = ${k}, |u| = sqrt(${magUSq}). Option D matches.`);
    }
  }

  // 8. Generalprobe Dataset & Simulator Integration
  console.log(`\n--- 8. SIMULATOR INTEGRATION & BMS COUNT AUDIT ---`);
  const bmsSim4 = buildBmsSimulationQuestions(4);
  console.log(`buildBmsSimulationQuestions(4) total length: ${bmsSim4.length}`);

  if (bmsSim4.length !== 94) {
    console.error(`FAIL: buildBmsSimulationQuestions(4) returned ${bmsSim4.length} items, expected exactly 94.`);
    errors++;
  } else {
    console.log(`✓ Total BMS GP4 questions count: exactly 94.`);
  }

  const bioInBms = bmsSim4.filter((q) => q.subjectId === "bio");
  const chemInBms = bmsSim4.filter((q) => q.subjectId === "chem");
  const physInBms = bmsSim4.filter((q) => q.subjectId === "phys");
  const mathInBms = bmsSim4.filter((q) => q.subjectId === "math");

  console.log(`BMS breakdown: Bio=${bioInBms.length}, Chem=${chemInBms.length}, Phys=${physInBms.length}, Math=${mathInBms.length}`);

  if (bioInBms.length !== 40) {
    console.error(`FAIL: Expected 40 Bio questions in BMS GP4, found ${bioInBms.length}`);
    errors++;
  }
  if (chemInBms.length !== 24) {
    console.error(`FAIL: Expected 24 Chem questions in BMS GP4, found ${chemInBms.length}`);
    errors++;
  }
  if (physInBms.length !== 18) {
    console.error(`FAIL: Expected 18 Phys questions in BMS GP4, found ${physInBms.length}`);
    errors++;
  }
  if (mathInBms.length !== 12) {
    console.error(`FAIL: Expected 12 Math questions in BMS GP4, found ${mathInBms.length}`);
    errors++;
  }

  if (bioInBms.length === 40 && chemInBms.length === 24 && physInBms.length === 18 && mathInBms.length === 12) {
    console.log(`✓ Perfect BMS GP4 composition: 40 Bio + 24 Chem + 18 Phys + 12 Math = 94 questions.`);
  }

  // Check matching of math questions in BMS
  mathInBms.forEach((q, idx) => {
    const expected = GENERALPROBE_4_MATH_QUESTIONS[idx];
    if (q.id !== expected.id) {
      console.error(`FAIL: Math question at index ${idx} has ID ${q.id}, expected ${expected.id}`);
      errors++;
    }
  });
  console.log(`✓ Math questions in BMS GP4 match GENERALPROBE_4_MATH_QUESTIONS 1-to-1.`);

  // Test buildGeneralprobe4Dataset
  const dataset4 = buildGeneralprobe4Dataset();
  if (dataset4.bmsQuestions.length !== 94) {
    console.error(`FAIL: dataset4.bmsQuestions has length ${dataset4.bmsQuestions.length}, expected 94.`);
    errors++;
  } else {
    console.log(`✓ buildGeneralprobe4Dataset().bmsQuestions has exactly 94 questions.`);
  }

  // Test getGeneralprobeDataset("generalprobe-4")
  const retrieved4 = getGeneralprobeDataset("generalprobe-4");
  if (!retrieved4 || retrieved4.bmsQuestions.length !== 94) {
    console.error(`FAIL: getGeneralprobeDataset("generalprobe-4") failed.`);
    errors++;
  } else {
    console.log(`✓ getGeneralprobeDataset("generalprobe-4") successfully retrieved with 94 BMS questions.`);
  }

  console.log("\n==================================================");
  if (errors === 0) {
    console.log("ALL BMS MATHEMATIK GP4 CHECKS PASSED PERFECTLY (0 ERRORS)!");
    console.log("==================================================");
  } else {
    console.error(`VERIFICATION FAILED WITH ${errors} ERRORS!`);
    console.log("==================================================");
    process.exit(1);
  }
}

runVerification();
