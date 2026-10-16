/**
 * Automated Verification & Quality Assurance Suite for MedAT-H Textverständnis (TV) Generalprobe #2
 */

import {
  GENERALPROBE_2_TV_QUESTIONS,
  RAW_GENERALPROBE_2_TV_QUESTIONS,
  GENERALPROBE_2_TV_PASSAGES,
} from "../src/data/generalprobe/generalprobe2TvQuestions";

import {
  GENERALPROBE_1_TV_QUESTIONS,
  GENERALPROBE_1_TV_PASSAGES,
} from "../src/data/generalprobe/generalprobe1TvQuestions";

import {
  buildBmsSimulationQuestions,
  buildTvSimulationQuestions,
  buildGeneralprobe2Dataset,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

function runVerification() {
  console.log("=== VERIFYING TEXTVERSTÄNDNIS (TV) GENERALPROBE #2 ===");

  let errors = 0;

  // 1. Question Count & IDs
  console.log("Checking question counts and ID sequence...");
  if (RAW_GENERALPROBE_2_TV_QUESTIONS.length !== 12) {
    console.error(`FAIL: RAW_GENERALPROBE_2_TV_QUESTIONS has ${RAW_GENERALPROBE_2_TV_QUESTIONS.length} items, expected 12.`);
    errors++;
  } else {
    console.log(`✓ Exactly 12 raw TV questions.`);
  }

  if (GENERALPROBE_2_TV_QUESTIONS.length !== 12) {
    console.error(`FAIL: GENERALPROBE_2_TV_QUESTIONS has ${GENERALPROBE_2_TV_QUESTIONS.length} items, expected 12.`);
    errors++;
  } else {
    console.log(`✓ Exactly 12 StoredQuestion objects.`);
  }

  const expectedIds = Array.from({ length: 12 }, (_, i) => `TV-GP2-${String(i + 1).padStart(3, "0")}`);
  const seenIds = new Set<string>();
  RAW_GENERALPROBE_2_TV_QUESTIONS.forEach((q, idx) => {
    if (q.id !== expectedIds[idx]) {
      console.error(`FAIL: Question at index ${idx} has ID "${q.id}", expected "${expectedIds[idx]}".`);
      errors++;
    }
    if (seenIds.has(q.id)) {
      console.error(`FAIL: Duplicate ID "${q.id}".`);
      errors++;
    }
    seenIds.add(q.id);
  });
  if (seenIds.size === 12) {
    console.log(`✓ All 12 IDs match sequence TV-GP2-001 through TV-GP2-012 uniquely.`);
  }

  // 2. Passages Check
  console.log("Checking passages structure and association...");
  if (GENERALPROBE_2_TV_PASSAGES.length !== 4) {
    console.error(`FAIL: Expected 4 passages, got ${GENERALPROBE_2_TV_PASSAGES.length}.`);
    errors++;
  } else {
    console.log(`✓ Exactly 4 passages in GENERALPROBE_2_TV_PASSAGES.`);
  }

  const passageMap = new Map(GENERALPROBE_2_TV_PASSAGES.map((p) => [p.id, p]));
  GENERALPROBE_2_TV_PASSAGES.forEach((p) => {
    if (p.title.length < 5) {
      console.error(`FAIL: Passage ${p.id} title too short.`);
      errors++;
    }
    if (p.text.length < 500) {
      console.error(`FAIL: Passage ${p.id} text too short (<500 chars).`);
      errors++;
    }
    if (p.paragraphs.length < 4) {
      console.error(`FAIL: Passage ${p.id} has fewer than 4 paragraphs.`);
      errors++;
    }
    if (p.questionIds.length !== 3) {
      console.error(`FAIL: Passage ${p.id} has ${p.questionIds.length} questionIds, expected 3.`);
      errors++;
    }
  });

  // 3. Options, Answer Keys, Distractors & Explanations
  console.log("Checking options, answer keys, distractors and evidence...");
  const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const keySequence: string[] = [];
  const difficultyCounts: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };

  RAW_GENERALPROBE_2_TV_QUESTIONS.forEach((rq, idx) => {
    const sq = GENERALPROBE_2_TV_QUESTIONS[idx];
    const optionKeys = ["A", "B", "C", "D", "E"] as const;

    optionKeys.forEach((k) => {
      if (!rq.options[k] || rq.options[k].trim().length === 0) {
        console.error(`FAIL: ${rq.id} Option ${k} is empty.`);
        errors++;
      }
    });

    if (sq.options.length !== 5) {
      console.error(`FAIL: ${sq.id} StoredQuestion options array length is ${sq.options.length}, expected 5.`);
      errors++;
    }

    if (!optionKeys.includes(rq.correct_answer)) {
      console.error(`FAIL: ${rq.id} has invalid correct_answer: ${rq.correct_answer}`);
      errors++;
    } else {
      keyCounts[rq.correct_answer]++;
      keySequence.push(rq.correct_answer);
    }

    const expectedIndex = optionKeys.indexOf(rq.correct_answer);
    if (sq.correctAnswer !== expectedIndex) {
      console.error(`FAIL: ${sq.id} correctAnswer index ${sq.correctAnswer} does not match ${rq.correct_answer} (${expectedIndex}).`);
      errors++;
    }

    difficultyCounts[rq.difficulty] = (difficultyCounts[rq.difficulty] || 0) + 1;

    // Passage association
    if (!passageMap.has(rq.passageId)) {
      console.error(`FAIL: ${rq.id} references invalid passageId "${rq.passageId}".`);
      errors++;
    }
    if (sq.passage !== rq.passageText) {
      console.error(`FAIL: ${sq.id} StoredQuestion passage does not match raw passageText.`);
      errors++;
    }

    // Explanation & Evidence
    if (!rq.explanation_correct || rq.explanation_correct.trim().length < 30) {
      console.error(`FAIL: ${rq.id} explanation_correct is missing or too short.`);
      errors++;
    }

    if (!rq.evidenceLocation || rq.evidenceLocation.trim().length === 0) {
      console.error(`FAIL: ${rq.id} missing evidenceLocation.`);
      errors++;
    }

    const incorrectKeys = Object.keys(rq.explanations_incorrect);
    if (incorrectKeys.length !== 4) {
      console.error(`FAIL: ${rq.id} has ${incorrectKeys.length} distractor explanations, expected 4.`);
      errors++;
    }
    if (incorrectKeys.includes(rq.correct_answer)) {
      console.error(`FAIL: ${rq.id} distractor explanations include correct answer ${rq.correct_answer}.`);
      errors++;
    }

    optionKeys.filter((k) => k !== rq.correct_answer).forEach((k) => {
      if (!rq.explanations_incorrect[k] || rq.explanations_incorrect[k].trim().length < 15) {
        console.error(`FAIL: ${rq.id} distractor explanation for Option ${k} is missing or too short.`);
        errors++;
      }
    });

    if (!sq.explanation.includes(rq.explanation_correct)) {
      console.error(`FAIL: ${sq.id} StoredQuestion explanation missing explanation_correct.`);
      errors++;
    }
    if (!sq.explanation.includes("Distraktor-Analyse")) {
      console.error(`FAIL: ${sq.id} StoredQuestion explanation missing Distraktor-Analyse header.`);
      errors++;
    }
  });

  console.log("Answer key counts:", keyCounts);
  console.log("Answer key sequence:", keySequence.join(" -> "));
  if (
    keyCounts.A === 3 &&
    keyCounts.B === 2 &&
    keyCounts.C === 3 &&
    keyCounts.D === 2 &&
    keyCounts.E === 2
  ) {
    console.log(`✓ Answer key distribution matches target: A: 3, B: 2, C: 3, D: 2, E: 2 (Total: 12).`);
  } else {
    console.error(`FAIL: Answer key distribution does not match target:`, keyCounts);
    errors++;
  }

  // Check no consecutive duplicate keys
  let consecutiveDuplicates = 0;
  for (let i = 0; i < keySequence.length - 1; i++) {
    if (keySequence[i] === keySequence[i + 1]) {
      console.error(`FAIL: Consecutive duplicate keys at Q${i + 1} and Q${i + 2}: ${keySequence[i]}`);
      consecutiveDuplicates++;
      errors++;
    }
  }
  if (consecutiveDuplicates === 0) {
    console.log(`✓ Zero consecutive identical answer keys in sequence.`);
  }

  console.log("Difficulty counts:", difficultyCounts);
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

  // 4. GP1 Integrity & Isolation
  console.log("Verifying Generalprobe #1 integrity and isolation...");
  if (GENERALPROBE_1_TV_QUESTIONS.length !== 12) {
    console.error(`FAIL: GP1 TV has ${GENERALPROBE_1_TV_QUESTIONS.length} questions, expected 12.`);
    errors++;
  } else {
    console.log(`✓ GP1 TV still contains exactly 12 questions.`);
  }
  if (GENERALPROBE_1_TV_PASSAGES.length !== 4) {
    console.error(`FAIL: GP1 TV has ${GENERALPROBE_1_TV_PASSAGES.length} passages, expected 4.`);
    errors++;
  } else {
    console.log(`✓ GP1 TV still contains exactly 4 passages.`);
  }

  const gp1Ids = new Set(GENERALPROBE_1_TV_QUESTIONS.map((q) => q.id));
  const collision = GENERALPROBE_2_TV_QUESTIONS.some((q) => gp1Ids.has(q.id));
  if (collision) {
    console.error(`FAIL: ID collision between GP1 and GP2 TV!`);
    errors++;
  } else {
    console.log(`✓ Zero ID collisions between GP1 and GP2 TV.`);
  }

  // 5. Test buildTvSimulationQuestions(2)
  console.log("Testing buildTvSimulationQuestions(2)...");
  const sim2Tv = buildTvSimulationQuestions(2);
  if (sim2Tv.length !== 12) {
    console.error(`FAIL: buildTvSimulationQuestions(2) returned ${sim2Tv.length} questions, expected 12.`);
    errors++;
  } else {
    console.log(`✓ buildTvSimulationQuestions(2) returned exactly 12 questions.`);
  }
  const gp2TvIds = new Set(GENERALPROBE_2_TV_QUESTIONS.map((q) => q.id));
  const allMatch = sim2Tv.every((q) => gp2TvIds.has(q.id));
  if (!allMatch) {
    console.error(`FAIL: buildTvSimulationQuestions(2) did not load GENERALPROBE_2_TV_QUESTIONS!`);
    errors++;
  } else {
    console.log(`✓ buildTvSimulationQuestions(2) correctly uses GENERALPROBE_2_TV_QUESTIONS.`);
  }

  // 6. Test buildGeneralprobe2Dataset
  console.log("Testing buildGeneralprobe2Dataset() and dataset lookup...");
  const ds2 = buildGeneralprobe2Dataset();
  if (ds2.tvQuestions.length !== 12) {
    console.error(`FAIL: ds2.tvQuestions has ${ds2.tvQuestions.length} items, expected 12.`);
    errors++;
  } else {
    console.log(`✓ ds2.tvQuestions contains exactly 12 questions.`);
  }
  if (ds2.tvQuestions[0].id !== "TV-GP2-001" || ds2.tvQuestions[11].id !== "TV-GP2-012") {
    console.error(`FAIL: ds2.tvQuestions first or last question ID mismatch.`);
    errors++;
  } else {
    console.log(`✓ ds2.tvQuestions covers TV-GP2-001 through TV-GP2-012.`);
  }

  if (ds2.bmsQuestions.length !== 94) {
    console.error(`FAIL: ds2.bmsQuestions length is ${ds2.bmsQuestions.length}, expected 94.`);
    errors++;
  } else {
    console.log(`✓ ds2.bmsQuestions remains exactly 94.`);
  }

  const lookupDs1 = getGeneralprobeDataset("generalprobe-2");
  const lookupDs2 = getGeneralprobeDataset("mock-full-medat-h-2");
  if (lookupDs1 && lookupDs2 && lookupDs1.id === "generalprobe-2" && lookupDs2.id === "generalprobe-2") {
    console.log(`✓ getGeneralprobeDataset("generalprobe-2") and ("mock-full-medat-h-2") both resolve successfully.`);
  } else {
    console.error(`FAIL: Dataset lookup failed.`);
    errors++;
  }

  console.log("=== VERIFICATION SUMMARY ===");
  if (errors === 0) {
    console.log("🎉 ALL TEXTVERSTÄNDNIS VERIFICATION CHECKS PASSED PERFECTLY!");
  } else {
    console.error(`❌ Verification finished with ${errors} error(s).`);
    process.exit(1);
  }
}

runVerification();
