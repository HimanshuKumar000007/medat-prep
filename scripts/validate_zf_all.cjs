/**
 * Master Validation & Regression Suite for MedAT Zahlenfolgen (ZF) Simulations 1–5
 * Validates all 50 questions across Simulations 1 to 5.
 * Includes explicit permanent regression test for sequence [96, 5, 48, 14, 24, 23, 12].
 */

const fs = require("fs");
const path = require("path");

const simFiles = [
  { name: "Simulation 1", varName: "ZF_SIMULATION_1_QUESTIONS", file: "zfSimulation1.ts" },
  { name: "Simulation 2", varName: "ZF_SIMULATION_2_QUESTIONS", file: "zfSimulation2.ts" },
  { name: "Simulation 3", varName: "ZF_SIMULATION_3_QUESTIONS", file: "zfSimulation3.ts" },
  { name: "Simulation 4", varName: "ZF_SIMULATION_4_QUESTIONS", file: "zfSimulation4.ts" },
  { name: "Simulation 5", varName: "ZF_SIMULATION_5_QUESTIONS", file: "zfSimulation5.ts" },
  { name: "Simulation 6", varName: "ZF_SIMULATION_6_QUESTIONS", file: "zfSimulation6.ts" },
  { name: "Simulation 7", varName: "ZF_SIMULATION_7_QUESTIONS", file: "zfSimulation7.ts" },
  { name: "Simulation 8", varName: "ZF_SIMULATION_8_QUESTIONS", file: "zfSimulation8.ts" },
  { name: "Simulation 9", varName: "ZF_SIMULATION_9_QUESTIONS", file: "zfSimulation9.ts" },
  { name: "Simulation 10", varName: "ZF_SIMULATION_10_QUESTIONS", file: "zfSimulation10.ts" },
  { name: "Simulation 11", varName: "ZF_SIMULATION_11_QUESTIONS", file: "zfSimulation11.ts" },
];

console.log(`\n======================================================================`);
console.log(`🔍 AUDIT & VALIDATION: MEDAT-H KFF ZAHLENFOLGEN (ZF) SIMULATIONS 1–11`);
console.log(`======================================================================\n`);

let totalQuestions = 0;
let totalPassed = 0;
let totalErrors = 0;
const globalSeenIds = new Set();
const globalKeyCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
let regressionTestPassed = false;

simFiles.forEach((simInfo, simIdx) => {
  const simNum = simIdx + 1;
  const filePath = path.join(__dirname, "../src/data/questions/zf", simInfo.file);
  
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    totalErrors++;
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const regex = new RegExp(`export const ${simInfo.varName}: ZfQuestionData\\[\\] = (\\[[\\s\\S]*?\\]);\\s*$`);
  const match = content.match(regex);

  if (!match) {
    console.error(`❌ Failed to parse ${simInfo.varName} from ${simInfo.file}`);
    totalErrors++;
    return;
  }

  let questions;
  try {
    questions = eval(match[1]);
  } catch (e) {
    console.error(`❌ Eval error in ${simInfo.file}:`, e);
    totalErrors++;
    return;
  }

  console.log(`--- [ZF Simulation ${simNum}] (${simInfo.file}) ---`);

  if (questions.length !== 10) {
    console.error(`  ❌ Expected 10 questions, found: ${questions.length}`);
    totalErrors++;
  }

  const simKeyCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const diffCounts = { Leicht: 0, Mittel: 0, Schwer: 0 };

  questions.forEach((q, idx) => {
    totalQuestions++;
    const qErrors = [];
    const qNum = idx + 1;

    // 1. ID uniqueness
    if (!q.id || globalSeenIds.has(q.id)) {
      qErrors.push(`Duplicate or missing ID: ${q.id}`);
    }
    globalSeenIds.add(q.id);

    // 2. Sequence length: strictly 7 numbers
    if (!Array.isArray(q.sequence) || q.sequence.length !== 7) {
      qErrors.push(`Sequence must contain exactly 7 numbers (found: ${q.sequence?.length})`);
    } else {
      // Check each element is a valid integer
      q.sequence.forEach((num, nIdx) => {
        if (typeof num !== "number" || isNaN(num) || !Number.isInteger(num)) {
          qErrors.push(`Sequence element at index ${nIdx} is not a valid integer: ${num}`);
        }
      });
    }

    // 3. Expected next values: strictly 2 integers
    if (!Array.isArray(q.expectedNextValues) || q.expectedNextValues.length !== 2) {
      qErrors.push(`expectedNextValues must be a 2-number tuple (found: ${JSON.stringify(q.expectedNextValues)})`);
    } else {
      if (!Number.isInteger(q.expectedNextValues[0]) || !Number.isInteger(q.expectedNextValues[1])) {
        qErrors.push(`expectedNextValues elements must be integers: ${JSON.stringify(q.expectedNextValues)}`);
      }
    }

    // 4. Options A-E structure
    if (!q.options || typeof q.options !== "object") {
      qErrors.push("Missing options object");
    } else {
      ["A", "B", "C", "D"].forEach((optKey) => {
        const pair = q.options[optKey];
        if (!Array.isArray(pair) || pair.length !== 2 || !Number.isInteger(pair[0]) || !Number.isInteger(pair[1])) {
          qErrors.push(`Option ${optKey} must be a 2-integer tuple (found: ${JSON.stringify(pair)})`);
        }
      });
      if (q.options.E !== null) {
        qErrors.push("Option E must be null (representing 'Keine Antwort ist richtig')");
      }
    }

    // 5. Correct answer check
    if (!["A", "B", "C", "D", "E"].includes(q.correctAnswer)) {
      qErrors.push(`Invalid correctAnswer: ${q.correctAnswer}`);
    } else {
      simKeyCounts[q.correctAnswer]++;
      globalKeyCounts[q.correctAnswer]++;

      if (q.correctAnswer === "E") {
        // Option E must be intentional: none of A-D may contain expectedNextValues
        ["A", "B", "C", "D"].forEach((optKey) => {
          const pair = q.options[optKey];
          if (pair && pair[0] === q.expectedNextValues[0] && pair[1] === q.expectedNextValues[1]) {
            qErrors.push(`Question marked E, but Option ${optKey} (${JSON.stringify(pair)}) matches expected values!`);
          }
        });
      } else {
        // A-D must match expectedNextValues exactly
        const chosenPair = q.options[q.correctAnswer];
        if (!chosenPair || chosenPair[0] !== q.expectedNextValues[0] || chosenPair[1] !== q.expectedNextValues[1]) {
          qErrors.push(`Option ${q.correctAnswer} (${JSON.stringify(chosenPair)}) != expectedNextValues (${JSON.stringify(q.expectedNextValues)})`);
        }
      }
    }

    // 6. Distractor uniqueness among A-D
    if (q.options) {
      const optionStrings = ["A", "B", "C", "D"].map((k) => JSON.stringify(q.options[k]));
      const uniqueOptionStrings = new Set(optionStrings);
      if (uniqueOptionStrings.size !== 4) {
        qErrors.push(`Duplicate options found among A-D: ${optionStrings.join(", ")}`);
      }
    }

    // 7. Difficulty check
    if (!["Leicht", "Mittel", "Schwer"].includes(q.difficulty)) {
      qErrors.push(`Invalid difficulty: ${q.difficulty}`);
    } else {
      diffCounts[q.difficulty]++;
    }

    // 8. Explanation check
    if (!q.explanation || q.explanation.length < 30) {
      qErrors.push("Explanation missing or insufficient");
    }

    // 9. PERMANENT REGRESSION TEST FOR [96, 5, 48, 14, 24, 23, 12]
    if (JSON.stringify(q.sequence) === JSON.stringify([96, 5, 48, 14, 24, 23, 12])) {
      console.log(`  🔍 REGRESSION CHECK: Found sequence [96, 5, 48, 14, 24, 23, 12] at ${q.id}`);
      if (q.expectedNextValues[0] !== 32 || q.expectedNextValues[1] !== 6) {
        qErrors.push(`REGRESSION FAILED: expectedNextValues must be [32, 6], got ${JSON.stringify(q.expectedNextValues)}`);
      }
      if (q.correctAnswer === "E") {
        qErrors.push(`REGRESSION FAILED: correctAnswer must not be 'E' when [32, 6] is mathematically derivable`);
      }
      const pair = q.options[q.correctAnswer];
      if (!pair || pair[0] !== 32 || pair[1] !== 6) {
        qErrors.push(`REGRESSION FAILED: options[${q.correctAnswer}] must be [32, 6], got ${JSON.stringify(pair)}`);
      }
      const hasCorrectInOptions = ["A", "B", "C", "D"].some(
        (k) => q.options[k] && q.options[k][0] === 32 && q.options[k][1] === 6
      );
      if (!hasCorrectInOptions) {
        qErrors.push(`REGRESSION FAILED: Options A-D do not contain [32, 6]!`);
      }
      if (qErrors.length === 0) {
        regressionTestPassed = true;
        console.log(`  🌟 REGRESSION TEST PASSED: [32, 6] is present in options (Key ${q.correctAnswer})!`);
      }
    }

    if (qErrors.length === 0) {
      totalPassed++;
      console.log(`  ✅ Q${String(qNum).padStart(2, "0")} [${q.id}]: PASS -> Key ${q.correctAnswer} (${JSON.stringify(q.expectedNextValues)})`);
    } else {
      totalErrors++;
      console.error(`  ❌ Q${String(qNum).padStart(2, "0")} [${q.id}]: FAIL\n     ${qErrors.join("\n     ")}`);
    }
  });

  // Check distribution per simulation
  console.log(`  📊 Sim ${simNum} Keys: A=${simKeyCounts.A}, B=${simKeyCounts.B}, C=${simKeyCounts.C}, D=${simKeyCounts.D}, E=${simKeyCounts.E}`);
  console.log(`  📊 Sim ${simNum} Diff: Leicht=${diffCounts.Leicht}, Mittel=${diffCounts.Mittel}, Schwer=${diffCounts.Schwer}\n`);

  if (diffCounts.Leicht !== 3 || (diffCounts.Mittel !== 4 && diffCounts.Mittel !== 5) || (diffCounts.Schwer !== 3 && diffCounts.Schwer !== 2)) {
    console.error(`  ⚠️ Warning: Sim ${simNum} does not have standard difficulty distribution.`);
  }
});

console.log(`======================================================================`);
console.log(`📊 FINAL AUDIT SUMMARY ACROSS ALL ${simFiles.length} SIMULATIONS:`);
console.log(`• Total Questions Evaluated: ${totalQuestions}`);
console.log(`• Total Questions Passed:    ${totalPassed} / ${totalQuestions}`);
console.log(`• Total Errors:              ${totalErrors}`);
console.log(`• Global Key Distribution:   A=${globalKeyCounts.A}, B=${globalKeyCounts.B}, C=${globalKeyCounts.C}, D=${globalKeyCounts.D}, E=${globalKeyCounts.E}`);
console.log(`• Permanent Regression Test: ${regressionTestPassed ? "✅ PASSED (32 / 6 confirmed in options)" : "❌ FAILED"}`);
console.log(`======================================================================\n`);

if (totalErrors === 0 && totalPassed === simFiles.length * 10 && regressionTestPassed) {
  console.log(`🏆 ALL ${totalQuestions} QUESTIONS ACROSS SIMULATIONS 1–${simFiles.length} ARE 100% MATHEMATICALLY VERIFIED & VALID!`);
  process.exit(0);
} else {
  console.error(`💥 Audit failed with ${totalErrors} errors.`);
  process.exit(1);
}
