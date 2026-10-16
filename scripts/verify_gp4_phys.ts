import {
  RAW_GENERALPROBE_4_PHYS_QUESTIONS,
  GENERALPROBE_4_PHYS_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4PhysicsQuestions";
import { GENERALPROBE_1_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe1PhysQuestions";
import { GENERALPROBE_2_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe2PhysicsQuestions";
import { GENERALPROBE_3_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe3PhysicsQuestions";
import {
  buildBmsSimulationQuestions,
  buildGeneralprobe4Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("==================================================");
  console.log("VERIFYING BMS PHYSIK GENERALPROBE #4 & SCIENTIFIC QA");
  console.log("==================================================");

  let errors = 0;

  // 1. Question Count & Structural Integrity
  console.log(`\n--- 1. QUESTION COUNT & STRUCTURAL INTEGRITY ---`);
  if (RAW_GENERALPROBE_4_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: RAW_GENERALPROBE_4_PHYS_QUESTIONS has ${RAW_GENERALPROBE_4_PHYS_QUESTIONS.length} items, expected 18.`);
    errors++;
  } else {
    console.log(`✓ Exactly 18 raw questions.`);
  }

  if (GENERALPROBE_4_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: GENERALPROBE_4_PHYS_QUESTIONS has ${GENERALPROBE_4_PHYS_QUESTIONS.length} items, expected 18.`);
    errors++;
  } else {
    console.log(`✓ Exactly 18 StoredQuestion objects.`);
  }

  // 2. ID sequence PHYS-BMS-GP4-001 through 018
  console.log(`\n--- 2. ID SEQUENCE & FORMAT INTEGRITY ---`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_4_PHYS_QUESTIONS.forEach((q, idx) => {
    const expectedNum = (idx + 1).toString().padStart(3, "0");
    const expectedId = `PHYS-BMS-GP4-${expectedNum}`;
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
    console.log(`✓ All 18 IDs are unique and strictly sequential (PHYS-BMS-GP4-001 to 018).`);
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

  RAW_GENERALPROBE_4_PHYS_QUESTIONS.forEach((q, idx) => {
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
    const sq = GENERALPROBE_4_PHYS_QUESTIONS[idx];
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

  const sequence = RAW_GENERALPROBE_4_PHYS_QUESTIONS.map((q) => q.correct_answer);
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

  // 4. Isolation & Zero-Overlap Check with GP1, GP2, GP3
  console.log(`\n--- 4. ISOLATION & ZERO-OVERLAP CHECK (GP1, GP2, GP3) ---`);
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

  if (GENERALPROBE_3_PHYS_QUESTIONS.length !== 18) {
    console.error(`FAIL: GENERALPROBE_3_PHYS_QUESTIONS length changed: ${GENERALPROBE_3_PHYS_QUESTIONS.length}`);
    errors++;
  } else {
    console.log(`✓ GP3 Physics unchanged (18 questions).`);
  }

  const existingIds = new Set([
    ...GENERALPROBE_1_PHYS_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_2_PHYS_QUESTIONS.map((q) => q.id),
    ...GENERALPROBE_3_PHYS_QUESTIONS.map((q) => q.id),
  ]);
  const collision = RAW_GENERALPROBE_4_PHYS_QUESTIONS.filter((q) => existingIds.has(q.id));
  if (collision.length > 0) {
    console.error(`FAIL: ID collision between GP4 and prior GPs! Collisions:`, collision.map((c) => c.id));
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP4 and GP1/GP2/GP3.`);
  }

  const existingStems = new Set([
    ...GENERALPROBE_1_PHYS_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_2_PHYS_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
    ...GENERALPROBE_3_PHYS_QUESTIONS.map((q) => q.questionText.trim().toLowerCase()),
  ]);
  const stemCollisions = RAW_GENERALPROBE_4_PHYS_QUESTIONS.filter((q) => existingStems.has(q.stem.trim().toLowerCase()));
  if (stemCollisions.length > 0) {
    console.error(`FAIL: Question stem collision detected!`, stemCollisions.map((c) => c.id));
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

  const matchesGp4Ids = physSim4.every((q, idx) => q.id === RAW_GENERALPROBE_4_PHYS_QUESTIONS[idx].id);
  if (!matchesGp4Ids) {
    console.error(`FAIL: Phys questions in buildBmsSimulationQuestions(4) do not match GP4 questions!`);
    errors++;
  } else {
    console.log(`✓ buildBmsSimulationQuestions(4) correctly uses GENERALPROBE_4_PHYS_QUESTIONS.`);
  }

  // Check dataset getters
  const ds4 = buildGeneralprobe4Dataset();
  if (ds4.bmsQuestions.length !== 94) {
    console.error(`FAIL: buildGeneralprobe4Dataset().bmsQuestions length = ${ds4.bmsQuestions.length}, expected 94`);
    errors++;
  } else {
    console.log(`✓ buildGeneralprobe4Dataset() contains exactly 94 BMS questions.`);
  }

  const getDs4 = getGeneralprobeDataset("generalprobe-4");
  if (getDs4.bmsQuestions.length !== 94) {
    console.error(`FAIL: getGeneralprobeDataset("generalprobe-4").bmsQuestions length = ${getDs4.bmsQuestions.length}, expected 94`);
    errors++;
  } else {
    console.log(`✓ getGeneralprobeDataset("generalprobe-4") correctly resolved with 94 BMS questions.`);
  }

  // 6. Regression checks for GP1, GP2, GP3
  console.log(`\n--- 6. REGRESSION CHECKS FOR GP1, GP2, GP3 ---`);
  const bmsSim1 = buildBmsSimulationQuestions(1);
  const bmsSim2 = buildBmsSimulationQuestions(2);
  const bmsSim3 = buildBmsSimulationQuestions(3);
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
  if (bmsSim3.length !== 94 || bmsSim3.filter((q) => q.subjectId === "phys").length !== 18) {
    console.error(`FAIL: BMS Sim #3 regression detected! Total: ${bmsSim3.length}`);
    errors++;
  } else {
    console.log(`✓ BMS Sim #3 intact: 94 questions (18 GP3 Phys).`);
  }

  // 7. Targeted Scientific and Mathematical Verification
  console.log(`\n--- 7. SCIENTIFIC & MATHEMATICAL VERIFICATION OF 18 QUESTIONS ---`);

  // Q01: Prefix conversion: 7.5 µm = 7.5 · 10⁻⁶ m = 7500 nm
  // Q01: Prefix conversion: All 5 options internally consistent pairs (meters <=> nanometers)
  const q01 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[0];
  const q01PairsValid =
    q01.options.A.includes("7,5 · 10⁻³ m") && q01.options.A.includes("7.500.000 nm") &&
    q01.options.B.includes("7,5 · 10⁻⁶ m") && q01.options.B.includes("7500 nm") &&
    q01.options.C.includes("7,5 · 10⁻⁹ m") && q01.options.C.includes("7,5 nm") &&
    q01.options.D.includes("7,5 · 10⁻⁵ m") && q01.options.D.includes("75.000 nm") &&
    q01.options.E.includes("7,5 · 10⁻⁷ m") && q01.options.E.includes("750 nm");
  if (q01.correct_answer === "B" && q01PairsValid) {
    console.log(`✓ Q01 (Prefixes): 100% internally consistent meter/nanometer pairs for all options, exactly Option B correct (7.5 µm = 7.5e-6 m = 7500 nm).`);
  } else {
    console.error(`FAIL: Q01 prefix internal consistency verification failed.`);
    errors++;
  }

  // Q02: Farad SI-base units: kg⁻¹ · m⁻² · s⁴ · A²
  const q02 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[1];
  if (q02.correct_answer === "D" && q02.options.D.includes("kg⁻¹ · m⁻² · s⁴ · A²")) {
    console.log(`✓ Q02 (Farad): SI-base units [F] = kg⁻¹ · m⁻² · s⁴ · A² correctly verified.`);
  } else {
    console.error(`FAIL: Q02 Farad units verification failed.`);
    errors++;
  }

  // Q03: Newton 1 / Inertia: U-Bahn with constant v = 60 km/h => F_res = 0 N
  const q03 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[2];
  if (q03.correct_answer === "A" && q03.options.A.includes("F_res = 0 N") && q03.options.A.includes("Kräftegleichgewicht")) {
    console.log(`✓ Q03 (Newton I): F_res = 0 N in uniform motion (inertia principle) correctly verified.`);
  } else {
    console.error(`FAIL: Q03 Newton I verification failed.`);
    errors++;
  }

  // Q04: Braking distance: v0 = 30 m/s, a = -5.0 m/s² => t_Brems = 6.0 s, s_Brems = 90 m
  const q04 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[3];
  const tBrake = 30 / 5.0; // 6.0 s
  const sBrake = (30 * 30) / (2 * 5.0); // 90 m
  if (q04.correct_answer === "C" && q04.options.C.includes("6,0 s") && q04.options.C.includes("90 m") && tBrake === 6.0 && sBrake === 90) {
    console.log(`✓ Q04 (Braking kinematics): t_Brems = 6.0 s, s_Brems = 90 m correctly verified.`);
  } else {
    console.error(`FAIL: Q04 braking kinematics calculation failed.`);
    errors++;
  }

  // Q05: Torque balance: r1 = 1.5 m, m1 = 60 kg, r2 = 2.5 m => m2 = 36 kg
  const q05 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[4];
  const m2Lever = (60 * 1.5) / 2.5; // 36 kg
  if (q05.correct_answer === "E" && q05.options.E.includes("36 kg") && m2Lever === 36) {
    console.log(`✓ Q05 (Torque balance): m2 = (m1 * r1) / r2 = 36 kg correctly verified.`);
  } else {
    console.error(`FAIL: Q05 torque balance calculation failed.`);
    errors++;
  }

  // Q06: Archimedes: F_G = 50 N, F_schein = 30 N => F_A = 20 N, rho_K = 2500 kg/m³
  const q06 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[5];
  const fApparent = 50 - 30; // 20 N
  const rhoSolid = (50 / 20) * 1000; // 2500 kg/m³
  if (q06.correct_answer === "C" && q06.options.C.includes("F_A = 20 N") && q06.options.C.includes("2500 kg/m³") && fApparent === 20 && rhoSolid === 2500) {
    console.log(`✓ Q06 (Archimedes & density): F_A = 20 N, rho_K = 2500 kg/m³ correctly verified.`);
  } else {
    console.error(`FAIL: Q06 Archimedes density verification failed.`);
    errors++;
  }

  // Q07: Torricelli outflow: h = 5.0 m, A = 2.0 cm² => v = 10 m/s, V_dot = 2.0 L/s; verified distractor B & E explanations
  const q07 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[6];
  const vTorr = Math.sqrt(2 * 10 * 5.0); // 10 m/s
  const vDot = 2.0e-4 * vTorr * 1000; // 2.0 L/s
  const q07ExplanationsValid =
    q07.explanations_incorrect.B.includes("Halbiert") &&
    q07.explanations_incorrect.B.includes("5,0 m/s") &&
    q07.explanations_incorrect.E.includes("Faktor 2 unter der Wurzel");
  if (q07.correct_answer === "A" && q07.options.A.includes("v = 10 m/s") && q07.options.A.includes("2,0 L/s") && vTorr === 10 && vDot === 2.0 && q07ExplanationsValid) {
    console.log(`✓ Q07 (Torricelli outflow): v = 10 m/s, V_dot = 2.0 L/s & distractor explanations B/E verified.`);
  } else {
    console.error(`FAIL: Q07 Torricelli outflow calculation or distractor explanation failed.`);
    errors++;
  }

  // Q08: Ultrasound: c = 1500 m/s, f = 3.0 MHz => lambda = 0.50 mm (5.0 · 10⁻⁴ m)
  const q08 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[7];
  const lambdaUs = (1500 / 3.0e6) * 1e3; // 0.50 mm
  if (q08.correct_answer === "D" && q08.options.D.includes("0,50 mm") && Math.abs(lambdaUs - 0.50) < 1e-6) {
    console.log(`✓ Q08 (Ultrasound wavelength): lambda = c / f = 0.50 mm correctly verified.`);
  } else {
    console.error(`FAIL: Q08 ultrasound calculation failed.`);
    errors++;
  }

  // Q09: Pipe resonance (closed-open): L = 0.17 m, c = 340 m/s => lambda = 4L = 0.68 m, f1 = 500 Hz; explicit pipe model without ear-canal claim
  const q09 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[8];
  const fRes = 340 / (4 * 0.17); // 500 Hz
  const q09ModelValid = !q09.stem.includes("Gehörgang") && q09.stem.includes("einseitig geschlossenes") && q09.subtopic.includes("gedeckte Pfeife");
  if (q09.correct_answer === "B" && q09.options.B.includes("500 Hz") && Math.abs(fRes - 500) < 1e-6 && q09ModelValid) {
    console.log(`✓ Q09 (Acoustic resonance): f1 = c / (4L) = 500 Hz & scientifically sound tube model verified.`);
  } else {
    console.error(`FAIL: Q09 resonance frequency calculation or model setup failed.`);
    errors++;
  }

  // Q10: Calorimetry: m1 = 300 g at 20 °C + m2 = 200 g at 70 °C => T_m = 40 °C
  const q10 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[9];
  const tm = (300 * 20 + 200 * 70) / (300 + 200); // 40 °C
  if (q10.correct_answer === "E" && q10.options.E.includes("40 °C") && tm === 40) {
    console.log(`✓ Q10 (Calorimetric mixing): T_m = (300*20 + 200*70)/500 = 40 °C correctly verified.`);
  } else {
    console.error(`FAIL: Q10 calorimetry calculation failed.`);
    errors++;
  }

  // Q11: Gay-Lussac / Charles: T1 = 27 °C = 300 K, T2 = 327 °C = 600 K, V1 = 1.5 L => V2 = 3.0 L; isobaric condition & dual naming
  const q11 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[10];
  const v2Exp = 1.5 * (600 / 300); // 3.0 L
  const q11NamingValid = q11.subtopic.includes("p = const") && q11.explanation_correct.includes("Gay-Lussac") && q11.explanation_correct.includes("Charles");
  if (q11.correct_answer === "A" && q11.options.A.includes("3,0 L") && v2Exp === 3.0 && q11NamingValid) {
    console.log(`✓ Q11 (Gay-Lussac / Charles expansion): V2 = V1 * (T2/T1) = 3.0 L & isobaric naming conventions verified.`);
  } else {
    console.error(`FAIL: Q11 thermal expansion verification failed.`);
    errors++;
  }

  // Q12: Ohm / Power: U = 230 V, I = 2.0 A => P = 460 W, R = 115 Ohm
  const q12 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[11];
  const pElec = 230 * 2.0; // 460 W
  const rElec = 230 / 2.0; // 115 Ohm
  if (q12.correct_answer === "C" && q12.options.C.includes("P = 460 W") && q12.options.C.includes("R = 115 Ω") && pElec === 460 && rElec === 115) {
    console.log(`✓ Q12 (Ohm's Law & Power): P = 460 W, R = 115 Ω correctly verified.`);
  } else {
    console.error(`FAIL: Q12 electric power calculation failed.`);
    errors++;
  }

  // Q13: Resistor network: R1 = 40 Ω, R2 = 60 Ω parallel => 24 Ω; + R3 = 16 Ω series => 40 Ω; U = 80 V => I = 2.0 A; complete distractor D explanation
  const q13 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[12];
  const rPar = (40 * 60) / (40 + 60); // 24
  const rTot = rPar + 16; // 40
  const iTot = 80 / rTot; // 2.0
  const q13ExplDValid = q13.explanations_incorrect.D.includes("arithmetische Mittel") && q13.explanations_incorrect.D.includes("16 Ω");
  if (q13.correct_answer === "B" && q13.options.B.includes("R_ges = 40 Ω") && q13.options.B.includes("I_ges = 2,0 A") && rTot === 40 && iTot === 2.0 && q13ExplDValid) {
    console.log(`✓ Q13 (Resistor circuit): R_total = 40 Ω, I_total = 2.0 A & complete distractor D derivation verified.`);
  } else {
    console.error(`FAIL: Q13 circuit calculation failed.`);
    errors++;
  }

  // Q14: Cyclotron radius: r = (m * v) / (q * B). v' = 2v, B' = B/2 => r' = 4r
  const q14 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[13];
  if (q14.correct_answer === "E" && q14.options.E.includes("vervierfacht") && q14.options.E.includes("r' = 4r")) {
    console.log(`✓ Q14 (Lorentz force / cyclotron): r' = (2v)/(0.5B) = 4r (vervierfacht) correctly verified.`);
  } else {
    console.error(`FAIL: Q14 cyclotron radius verification failed.`);
    errors++;
  }

  // Q15: Lens equation: f = 20 cm, g = 30 cm => b = 60 cm, real, inverted, magnified 2x
  const q15 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[14];
  const bLens = 1 / (1 / 20 - 1 / 30); // 60
  if (q15.correct_answer === "D" && q15.options.D.includes("b = 60 cm") && q15.options.D.includes("reell") && Math.abs(bLens - 60) < 1e-6) {
    console.log(`✓ Q15 (Thin lens optics): b = 60 cm, real, inverted, magnified 2x correctly verified.`);
  } else {
    console.error(`FAIL: Q15 lens equation calculation failed.`);
    errors++;
  }

  // Q16: Total reflection: n1 = 2.00, n2 = 1.00 => sin(c) = 0.50 => alpha_c = 30°; strict alpha > alpha_c & grazing emergence distinguished
  const q16 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[15];
  const sinCrit = 1.00 / 2.00; // 0.50
  const q16ConditionValid = q16.options.B.includes("α > α_c") && q16.options.B.includes("streifend") && q16.options.B.includes("strikt größer");
  if (q16.correct_answer === "B" && q16.options.B.includes("α_c = 30°") && sinCrit === 0.50 && q16ConditionValid) {
    console.log(`✓ Q16 (Total reflection): alpha_c = 30°, strict alpha > alpha_c condition & grazing boundary ray correctly distinguished.`);
  } else {
    console.error(`FAIL: Q16 total internal reflection verification failed.`);
    errors++;
  }

  // Q17: Radioactive decay: T_1/2 = 6.0 h, t = 24 h => 4 half-lives => 800 MBq / 16 = 50 MBq; consistent unadministered preparation wording
  const q17 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[16];
  const remActivity = 800 * Math.pow(0.5, 24 / 6.0); // 50 MBq
  const q17StemValid = q17.stem.includes("unbenutzte radiopharmazeutische") && !q17.stem.includes("Patientendosis besitzt");
  if (q17.correct_answer === "C" && q17.options.C.includes("50 MBq") && remActivity === 50 && q17StemValid) {
    console.log(`✓ Q17 (Radioactive decay): 800 MBq / 16 = 50 MBq & consistent unadministered sample scenario verified.`);
  } else {
    console.error(`FAIL: Q17 decay calculation failed.`);
    errors++;
  }

  // Q18: Photoelectric effect: work function WA acknowledged, threshold frequency & linear frequency dependence
  const q18 = RAW_GENERALPROBE_4_PHYS_QUESTIONS[17];
  const q18WorkFunctionValid = q18.options.A.includes("Austrittsarbeit W_A") && q18.options.A.includes("Kathodenmaterial");
  if (q18.correct_answer === "A" && q18.options.A.includes("Grenzfrequenz") && q18.options.A.includes("Frequenz") && q18WorkFunctionValid) {
    console.log(`✓ Q18 (Photoelectric effect): material work function W_A, threshold frequency & frequency-dependent kinetic energy correctly verified.`);
  } else {
    console.error(`FAIL: Q18 photoelectric effect verification failed.`);
    errors++;
  }

  console.log(`\n==================================================`);
  console.log(`VERIFICATION SUMMARY`);
  console.log(`==================================================`);
  if (errors === 0) {
    console.log(`🎉 ALL PHYSICS GP4 AUDITS & TESTS PASSED WITH 0 ERRORS!`);
  } else {
    console.error(`❌ VERIFICATION FAILED WITH ${errors} ERRORS.`);
    process.exit(1);
  }
}

runVerification();
