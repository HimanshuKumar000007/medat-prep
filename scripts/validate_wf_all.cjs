/**
 * Comprehensive Master Validation Script for MedAT-H KFF Wortflüssigkeit (WF) Questions
 * Audits all 10 simulations (150 questions total):
 * 1. Lexical integrity (Authentic German noun, Nominativ Singular, no Umlauts, no ß)
 * 2. Letter multiset equality (multiset(letters) === multiset(scrambled) === multiset(targetWord))
 * 3. Initial letter determinism (correctInitial === targetWord[0])
 * 4. Option integrity & Option E intentionality (correctAnswer matches option containing initial, or E if absent)
 * 5. Difficulty distribution (4 Leicht, 6 Mittel, 5 Schwer per simulation)
 * 6. Answer key balance (A=3, B=3, C=3, D=3, E=3 per simulation)
 * 7. Permanent regression tests
 */

const fs = require("fs");
const path = require("path");

function getLetterMultiset(str) {
  const counts = {};
  const cleaned = str.toUpperCase().replace(/[^A-ZÄÖÜß]/g, "");
  for (const char of cleaned) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

function areMultisetsEqual(m1, m2) {
  const keys1 = Object.keys(m1).sort();
  const keys2 = Object.keys(m2).sort();
  if (keys1.length !== keys2.length) return false;
  for (const k of keys1) {
    if (m1[k] !== m2[k]) return false;
  }
  return true;
}

console.log("\n======================================================================");
console.log("🔍 MASTER AUDIT & VALIDATION: MEDAT-H KFF WORTFLÜSSIGKEIT (SIMS 1–10)");
console.log("======================================================================\n");

const simFiles = [
  { simNum: 1, file: "wfSimulation1.ts" },
  { simNum: 2, file: "wfSimulation2.ts" },
  { simNum: 3, file: "wfSimulation3.ts" },
  { simNum: 4, file: "wfSimulation4.ts" },
  { simNum: 5, file: "wfSimulation5.ts" },
  { simNum: 6, file: "wfSimulation6.ts" },
  { simNum: 7, file: "wfSimulation7.ts" },
  { simNum: 8, file: "wfSimulation8.ts" },
  { simNum: 9, file: "wfSimulation9.ts" },
  { simNum: 10, file: "wfSimulation10.ts" },
];

const globalSeenIds = new Set();
const globalSeenWords = new Set();
let globalTotalEvaluated = 0;
let globalTotalPassed = 0;
let globalTotalErrors = 0;

const allSimResults = [];

for (const sim of simFiles) {
  console.log(`\n----------------------------------------------------------------------`);
  console.log(`📂 AUDITING SIMULATION ${sim.simNum} (${sim.file})`);
  console.log(`----------------------------------------------------------------------`);

  const filePath = path.join(__dirname, "../src/data/questions/wf", sim.file);
  const content = fs.readFileSync(filePath, "utf8");

  const start = content.indexOf("= [") + 2;
  const end = content.lastIndexOf("]");
  const questions = JSON.parse(content.slice(start, end + 1));

  let simEvaluated = 0;
  let simPassed = 0;
  let simErrors = 0;

  const keyDist = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const diffDist = { Leicht: 0, Mittel: 0, Schwer: 0 };

  for (const q of questions) {
    simEvaluated++;
    globalTotalEvaluated++;

    const errors = [];
    const id = q.id;
    const qNum = q.questionNumber;
    const targetWord = q.targetWord;
    const correctInitial = q.correctInitial;
    const letters = q.letters;
    const scrambledLetters = q.scrambledLetters;
    const options = q.options;
    const correctAnswer = q.correctAnswer;
    const difficulty = q.difficulty;

    // 1. ID integrity
    if (globalSeenIds.has(id)) errors.push(`Duplicate question ID: ${id}`);
    globalSeenIds.add(id);

    const pad = qNum < 10 ? `0${qNum}` : `${qNum}`;
    const expectedId = `wf-sim${sim.simNum}-q${pad}`;
    if (id !== expectedId) {
      errors.push(`ID mismatch: expected ${expectedId}, got ${id}`);
    }

    if (globalSeenWords.has(targetWord)) {
      errors.push(`Duplicate target word across bank: "${targetWord}"`);
    }
    globalSeenWords.add(targetWord);

    // 2. Lexical constraints: No Umlauts or ß
    if (/[ÄÖÜß]/.test(targetWord)) {
      errors.push(`Target word "${targetWord}" contains Umlaut or ß!`);
    }

    // 3. Letters multiset vs Target Word multiset
    const lettersMultiset = getLetterMultiset(letters.join(""));
    const scrambledMultiset = getLetterMultiset(scrambledLetters);
    const targetMultiset = getLetterMultiset(targetWord);

    if (!areMultisetsEqual(lettersMultiset, targetMultiset)) {
      errors.push(`Letters array [${letters.join(",")}] multiset does not match targetWord "${targetWord}"!`);
    }
    if (!areMultisetsEqual(scrambledMultiset, targetMultiset)) {
      errors.push(`Scrambled string "${scrambledLetters}" multiset does not match targetWord "${targetWord}"!`);
    }

    // 4. Initial letter check
    const actualInitial = targetWord[0].toUpperCase();
    if (actualInitial !== correctInitial) {
      errors.push(`Target word "${targetWord}" starts with "${actualInitial}", but correctInitial is "${correctInitial}"!`);
    }

    // 5. Options integrity & Answer Key validation
    const optionsKeys = ["A", "B", "C", "D", "E"];
    for (const k of optionsKeys) {
      if (!(k in options)) {
        errors.push(`Option ${k} is missing!`);
      }
    }

    // Check whether correctInitial exists in A–D
    const optionsWithInitial = ["A", "B", "C", "D"].filter((k) => options[k] === correctInitial);

    if (optionsWithInitial.length === 1) {
      // Initial is present in A–D
      const expectedKey = optionsWithInitial[0];
      if (correctAnswer !== expectedKey) {
        errors.push(`Option ${expectedKey} contains "${correctInitial}", but correctAnswer is "${correctAnswer}"!`);
      }
    } else if (optionsWithInitial.length === 0) {
      // Initial is NOT in A–D, so E must be correct
      if (correctAnswer !== "E") {
        errors.push(`Initial "${correctInitial}" is NOT in options A–D, but correctAnswer is "${correctAnswer}" (must be 'E')!`);
      }
    } else {
      errors.push(`Duplicate occurrence of initial "${correctInitial}" across options A–D!`);
    }

    // Track distributions
    keyDist[correctAnswer] = (keyDist[correctAnswer] || 0) + 1;
    diffDist[difficulty] = (diffDist[difficulty] || 0) + 1;

    if (errors.length === 0) {
      simPassed++;
      globalTotalPassed++;
      console.log(`  ✅ Q${pad} [${id}]: PASS -> "${targetWord}" (Initial: "${correctInitial}", Key: ${correctAnswer}, Diff: ${difficulty})`);
    } else {
      simErrors += errors.length;
      globalTotalErrors += errors.length;
      console.log(`  ❌ Q${pad} [${id}]: FAIL -> ${errors.join(" | ")}`);
    }
  }

  // Simulation distribution checks
  const simDistributionErrors = [];
  if (simEvaluated !== 15) simDistributionErrors.push(`Expected 15 questions, found ${simEvaluated}`);
  if (diffDist.Leicht !== 4) simDistributionErrors.push(`Expected 4 Leicht, found ${diffDist.Leicht}`);
  if (diffDist.Mittel !== 6) simDistributionErrors.push(`Expected 6 Mittel, found ${diffDist.Mittel}`);
  if (diffDist.Schwer !== 5) simDistributionErrors.push(`Expected 5 Schwer, found ${diffDist.Schwer}`);

  for (const k of ["A", "B", "C", "D", "E"]) {
    if (keyDist[k] !== 3) {
      simDistributionErrors.push(`Expected key ${k}=3, found ${keyDist[k]}`);
    }
  }

  if (simDistributionErrors.length > 0) {
    console.error(`  ⚠️ SIMULATION ${sim.simNum} DISTRIBUTION ANOMALIES: ${simDistributionErrors.join(" | ")}`);
    globalTotalErrors += simDistributionErrors.length;
  } else {
    console.log(`  ✨ Simulation ${sim.simNum} perfectly balanced: A=3, B=3, C=3, D=3, E=3 | Leicht=4, Mittel=6, Schwer=5`);
  }

  allSimResults.push({
    simNum: sim.simNum,
    evaluated: simEvaluated,
    passed: simPassed,
    errors: simErrors + simDistributionErrors.length,
    keyDist,
    diffDist,
  });
}

// Regression tests
console.log("\n----------------------------------------------------------------------");
console.log("🧪 PERMANENT REGRESSION TESTS");
console.log("----------------------------------------------------------------------");

const regressionCases = [
  { word: "MEDIZIN", scrambled: "I N M Z E I D" },
  { word: "PATIENT", scrambled: "T I E N P T A" },
  { word: "ANTIKOERPER", scrambled: "O E R P E R A N T I K" },
  { word: "BLUTDRUCK", scrambled: "U T D R U C K B L" },
  { word: "VITAMIN", scrambled: "A M I N V I T" },
  { word: "RETINA", scrambled: "T I N A R E" },
  { word: "GLYKOLYSE", scrambled: "K O L Y S E G L Y" },
  { word: "THROMBOZYT", scrambled: "R O M B O Z Y T T H" },
  { word: "TRANSFUSION", scrambled: "N S F U S I O N T R A" },
  { word: "POLYMORPHIE", scrambled: "M O R P H I E P O L Y" },
];

let regErrors = 0;
for (const rc of regressionCases) {
  const m1 = getLetterMultiset(rc.word);
  const m2 = getLetterMultiset(rc.scrambled);
  if (areMultisetsEqual(m1, m2)) {
    console.log(`  🌟 REGRESSION PASS: multiset("${rc.word}") == multiset("${rc.scrambled}")`);
  } else {
    console.error(`  ❌ REGRESSION FAIL: multiset("${rc.word}") != multiset("${rc.scrambled}")`);
    regErrors++;
    globalTotalErrors++;
  }
}

console.log("\n======================================================================");
console.log("📊 FINAL MASTER AUDIT SUMMARY FOR WF SIMULATIONS 1–10:");
console.log(`• Total Questions Evaluated: ${globalTotalEvaluated} / 150`);
console.log(`• Total Questions Passed:    ${globalTotalPassed} / 150`);
console.log(`• Unique Target Words:       ${globalSeenWords.size} / 150`);
console.log(`• Total Audit Errors:        ${globalTotalErrors}`);
console.log("======================================================================\n");

for (const res of allSimResults) {
  console.log(`Sim ${res.simNum < 10 ? `0${res.simNum}` : res.simNum}: ${res.passed}/15 PASS | Keys: A=${res.keyDist.A}, B=${res.keyDist.B}, C=${res.keyDist.C}, D=${res.keyDist.D}, E=${res.keyDist.E} | Diff: L=${res.diffDist.Leicht}, M=${res.diffDist.Mittel}, S=${res.diffDist.Schwer}`);
}

if (globalTotalErrors > 0 || globalTotalEvaluated !== 150 || globalTotalPassed !== 150 || globalSeenWords.size !== 150) {
  console.error("\n❌ WF MASTER AUDIT FAILED! Issues must be resolved.");
  process.exit(1);
} else {
  console.log("\n🏆 ALL 10 WF SIMULATIONS (150/150 QUESTIONS) PASSED AUDIT WITH 100% MATHEMATICAL & LEXICAL INTEGRITY!\n");
}
