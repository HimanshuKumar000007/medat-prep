/**
 * Validation Script for MedAT Zahlenfolgen (ZF) Simulation 1
 * Programmatic check of sequence lengths, deterministic answer derivations,
 * option validity, distractor uniqueness, and answer distribution.
 */

const fs = require("fs");
const path = require("path");

// Read zfSimulation1.ts directly or compile/parse
const sim1Path = path.join(__dirname, "../src/data/questions/zf/zfSimulation1.ts");
const content = fs.readFileSync(sim1Path, "utf8");

// Parse the questions array
const match = content.match(/export const ZF_SIMULATION_1_QUESTIONS: ZfQuestionData\[\] = (\[[\s\S]*?\]);\s*$/);
if (!match) {
  console.error("❌ Failed to parse ZF_SIMULATION_1_QUESTIONS from file.");
  process.exit(1);
}

// Safely evaluate JS object
let questions;
try {
  questions = eval(match[1]);
} catch (e) {
  console.error("❌ Eval error parsing questions:", e);
  process.exit(1);
}

console.log(`\n======================================================`);
console.log(`🔍 VALIDATING MEDAT-H KFF ZAHLENFOLGEN (ZF) SIMULATION 1`);
console.log(`======================================================\n`);

let passedCount = 0;
const seenIds = new Set();
const keyCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const difficultyCounts = { Leicht: 0, Mittel: 0, Schwer: 0 };
const ruleTypeCounts = {};

if (questions.length !== 10) {
  console.error(`❌ Expected exactly 10 questions, found: ${questions.length}`);
  process.exit(1);
}

questions.forEach((q, idx) => {
  const qNum = idx + 1;
  const errors = [];

  // 1. ID uniqueness
  if (!q.id || seenIds.has(q.id)) {
    errors.push(`Invalid or duplicate ID: ${q.id}`);
  }
  seenIds.add(q.id);

  // 2. Sequence length: strictly 7 given numbers
  if (!Array.isArray(q.sequence) || q.sequence.length !== 7) {
    errors.push(`Sequence must contain exactly 7 numbers (found: ${q.sequence?.length})`);
  }

  // 3. Expected next values: strictly 2 numbers
  if (!Array.isArray(q.expectedNextValues) || q.expectedNextValues.length !== 2) {
    errors.push(`expectedNextValues must be a 2-number tuple (found: ${JSON.stringify(q.expectedNextValues)})`);
  }

  // 4. Options A-E structure
  if (!q.options || typeof q.options !== "object") {
    errors.push("Missing options object");
  } else {
    ["A", "B", "C", "D"].forEach((optKey) => {
      const pair = q.options[optKey];
      if (!Array.isArray(pair) || pair.length !== 2) {
        errors.push(`Option ${optKey} must be a 2-number tuple`);
      }
    });
    if (q.options.E !== null) {
      errors.push("Option E must be null (representing 'Keine Antwort ist richtig')");
    }
  }

  // 5. Correct answer validation
  if (!["A", "B", "C", "D", "E"].includes(q.correctAnswer)) {
    errors.push(`Invalid correctAnswer: ${q.correctAnswer}`);
  } else {
    keyCounts[q.correctAnswer]++;

    if (q.correctAnswer === "E") {
      // E is correct only if none of A-D matches expectedNextValues
      ["A", "B", "C", "D"].forEach((optKey) => {
        const pair = q.options[optKey];
        if (pair && pair[0] === q.expectedNextValues[0] && pair[1] === q.expectedNextValues[1]) {
          errors.push(`Correct answer is marked E, but Option ${optKey} matches expectedNextValues!`);
        }
      });
    } else {
      // Correct option must match expectedNextValues
      const chosenPair = q.options[q.correctAnswer];
      if (!chosenPair || chosenPair[0] !== q.expectedNextValues[0] || chosenPair[1] !== q.expectedNextValues[1]) {
        errors.push(`Option ${q.correctAnswer} (${JSON.stringify(chosenPair)}) does not match expectedNextValues (${JSON.stringify(q.expectedNextValues)})`);
      }
    }
  }

  // 6. Distractor uniqueness (no duplicate answer options among A-D)
  const optionStrings = ["A", "B", "C", "D"].map((k) => JSON.stringify(q.options[k]));
  const uniqueOptionStrings = new Set(optionStrings);
  if (uniqueOptionStrings.size !== 4) {
    errors.push(`Duplicate options found among A-D: ${optionStrings.join(", ")}`);
  }

  // 7. Metadata
  if (!["Leicht", "Mittel", "Schwer"].includes(q.difficulty)) {
    errors.push(`Invalid difficulty: ${q.difficulty}`);
  } else {
    difficultyCounts[q.difficulty]++;
  }

  if (!q.ruleType || typeof q.ruleType !== "string") {
    errors.push(`Invalid ruleType: ${q.ruleType}`);
  } else {
    ruleTypeCounts[q.ruleType] = (ruleTypeCounts[q.ruleType] || 0) + 1;
  }

  if (!q.explanation || q.explanation.length < 20) {
    errors.push("Explanation is missing or too brief");
  }

  if (errors.length === 0) {
    passedCount++;
    console.log(`✅ Q${String(qNum).padStart(2, "0")} [${q.id}] (${q.difficulty}, ${q.ruleType}): PASS -> Key: ${q.correctAnswer} (${JSON.stringify(q.expectedNextValues)})`);
  } else {
    console.error(`❌ Q${String(qNum).padStart(2, "0")} [${q.id}]: FAIL\n   ${errors.join("\n   ")}`);
  }
});

console.log(`\n------------------------------------------------------`);
console.log(`📊 SUMMARY & DISTRIBUTION:`);
console.log(`• Total Passed: ${passedCount} / ${questions.length}`);
console.log(`• Answer Keys: A=${keyCounts.A}, B=${keyCounts.B}, C=${keyCounts.C}, D=${keyCounts.D}, E=${keyCounts.E}`);
console.log(`• Difficulty: Leicht=${difficultyCounts.Leicht}, Mittel=${difficultyCounts.Mittel}, Schwer=${difficultyCounts.Schwer}`);
console.log(`• Rule Types: ${JSON.stringify(ruleTypeCounts)}`);
console.log(`------------------------------------------------------\n`);

if (passedCount === questions.length) {
  console.log(`🏆 ALL 10 ZF SIMULATION 1 QUESTIONS ARE 100% VALID!`);
  process.exit(0);
} else {
  console.error(`💥 Validation failed: ${questions.length - passedCount} questions had errors.`);
  process.exit(1);
}
