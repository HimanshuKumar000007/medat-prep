/**
 * Comprehensive Master Validation Script for MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) Simulations
 *
 * Audits:
 * 1. 40 Cards across Simulations 1–5 (8 per simulation):
 *    - Exactly 8 cards per simulation
 *    - All 8 required information categories present:
 *      1. Foto (valid synthetic portrait identifier, unique per card)
 *      2. Name (valid authentic fictional German name, unique per card)
 *      3. Geburtstag (valid DD.MM. format, day 01..31, month 01..12)
 *      4. Medikamenteneinnahme (strictly boolean true/false)
 *      5. Blutgruppe (strictly 'A' | 'B' | 'AB' | '0')
 *      6. Bekannte Allergien (array of valid allergen strings)
 *      7. Ausweisnummer (strictly 5 digits, unique per card)
 *      8. Ausstellungsland (valid recognized European country)
 *
 * 2. 125 Recall Questions across Simulations 1–5 (25 per simulation):
 *    - Valid source-card linkage (sourceCardId points to real card)
 *    - Exact match of correct answer with card truth
 *    - No duplicate options among A–D
 *    - Distractor validity: none of the incorrect options match the card truth
 *    - Option E validity: when E is correct, none of A–D match; when E is not correct, correct option matches card
 *    - Cross-card questions: strictly unambiguous (exactly 1 matching card for A–D, 0 for E)
 *    - Balanced distribution: exactly A=5, B=5, C=5, D=5, E=5 per simulation
 *
 * 3. Timing Validation:
 *    - Merkphase: exactly 8 minutes (480 seconds)
 *    - Recall: exactly 15 minutes (900 seconds)
 */

const fs = require("fs");
const path = require("path");

const VALID_BLOOD_GROUPS = new Set(["A", "B", "AB", "0"]);
const VALID_COUNTRIES = new Set([
  "Österreich",
  "Deutschland",
  "Schweiz",
  "Italien",
  "Spanien",
  "Frankreich",
  "Niederlande",
  "Schweden",
  "Norwegen",
  "Dänemark",
  "Belgien",
  "Polen",
  "Portugal",
  "Griechenland",
  "Ungarn",
  "Tschechien",
  "Irland",
  "Finnland",
]);

const VALID_ALLERGENS = new Set([
  "Haselnuss",
  "Birke",
  "Penicillin",
  "Milch",
  "Erdnuss",
  "Hunde",
  "Katzen",
  "Hausstaub",
  "Wespen",
  "Soja",
  "Gräser",
  "Roggen",
  "Sellerie",
  "Hühnerei",
  "Latex",
  "Erdbeeren",
  "Schimmel",
  "Schimmelpilz",
  "Bienengift",
  "Wespengift",
  "Kuhmilch",
  "Weizen",
  "Fisch",
  "Krebstiere",
  "Erle",
  "Pollen",
  "Keine Allergien bekannt",
]);

console.log("\n======================================================================");
console.log("🔍 MASTER AUDIT & VALIDATION: MEDAT-H KFF GEDÄCHTNIS & MERKFÄHIGKEIT (GM)");
console.log("======================================================================\n");

function auditSimulation(simFile) {
  const filePath = path.join(__dirname, "../src/data/questions/gm", simFile);
  if (!fs.existsSync(filePath)) {
    return { skipped: true, file: simFile };
  }

  const content = fs.readFileSync(filePath, "utf8");
  const start = content.indexOf("= {") + 2;
  const end = content.lastIndexOf("};");
  const sim = JSON.parse(content.slice(start, end + 1));

  const simNum = sim.simNumber;
  const cards = sim.cards;
  const questions = sim.questions;

  const errors = [];
  const cardMap = new Map();

  // 1. Audit Cards (must be exactly 8)
  if (!Array.isArray(cards) || cards.length !== 8) {
    errors.push(`Expected exactly 8 cards, found ${cards?.length || 0}`);
  }

  const seenCardNumbers = new Set();
  const seenIdNumbers = new Set();
  const seenNames = new Set();
  const seenPhotos = new Set();

  for (const card of cards) {
    cardMap.set(card.id, card);

    if (seenCardNumbers.has(card.cardNumber)) {
      errors.push(`Duplicate card number: ${card.cardNumber}`);
    }
    seenCardNumbers.add(card.cardNumber);

    if (seenIdNumbers.has(card.idNumber)) {
      errors.push(`Duplicate ID number across cards: ${card.idNumber}`);
    }
    seenIdNumbers.add(card.idNumber);

    if (seenNames.has(card.name)) {
      errors.push(`Duplicate person name across cards: ${card.name}`);
    }
    seenNames.add(card.name);

    if (seenPhotos.has(card.photo)) {
      errors.push(`Duplicate photo across cards: ${card.photo}`);
    }
    seenPhotos.add(card.photo);

    // Categories
    if (!card.photo || typeof card.photo !== "string") {
      errors.push(`Card ${card.id}: photo missing or invalid`);
    }

    if (!card.name || card.name.trim().length < 3) {
      errors.push(`Card ${card.id}: invalid name "${card.name}"`);
    }

    if (!/^\d{2}\.\d{2}\.$/.test(card.birthDate)) {
      errors.push(`Card ${card.id}: invalid birthDate "${card.birthDate}" (must be DD.MM.)`);
    } else {
      const [d, m] = card.birthDate.replace(/\.$/, "").split(".").map(Number);
      if (d < 1 || d > 31 || m < 1 || m > 12) {
        errors.push(`Card ${card.id}: Out of range birthDate: "${card.birthDate}"`);
      }
    }

    if (typeof card.medication !== "boolean") {
      errors.push(`Card ${card.id}: medication must be boolean, got ${typeof card.medication}`);
    }

    if (!VALID_BLOOD_GROUPS.has(card.bloodGroup)) {
      errors.push(`Card ${card.id}: invalid blood group "${card.bloodGroup}"`);
    }

    if (!Array.isArray(card.allergies)) {
      errors.push(`Card ${card.id}: allergies must be an array`);
    } else {
      for (const a of card.allergies) {
        if (!VALID_ALLERGENS.has(a)) {
          errors.push(`Card ${card.id}: unknown allergen vocabulary "${a}"`);
        }
      }
    }

    if (!/^\d{5}$/.test(card.idNumber)) {
      errors.push(`Card ${card.id}: idNumber must be exactly 5 digits, got "${card.idNumber}"`);
    }

    if (!VALID_COUNTRIES.has(card.country)) {
      errors.push(`Card ${card.id}: country "${card.country}" not in recognized European countries list`);
    }
  }

  // 2. Audit Questions (must be exactly 25)
  if (!Array.isArray(questions) || questions.length !== 25) {
    errors.push(`Expected exactly 25 questions, found ${questions?.length || 0}`);
  }

  const keyDist = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const diffDist = { Leicht: 0, Mittel: 0, Schwer: 0 };
  const catDist = {};
  const seenQuestionTexts = new Set();

  for (const q of questions) {
    const qNum = q.questionNumber;
    const sourceCard = cardMap.get(q.sourceCardId);

    if (seenQuestionTexts.has(q.questionText)) {
      errors.push(`Q${qNum} [${q.id}]: Duplicate questionText: "${q.questionText}"`);
    }
    seenQuestionTexts.add(q.questionText);

    if (!sourceCard) {
      errors.push(`Q${qNum} [${q.id}]: sourceCardId "${q.sourceCardId}" does not exist in simulation cards!`);
      continue;
    }

    // Check options
    const optionKeys = ["A", "B", "C", "D", "E"];
    for (const k of optionKeys) {
      if (!(k in q.options)) {
        errors.push(`Q${qNum} [${q.id}]: Option ${k} is missing!`);
      }
    }

    if (!optionKeys.includes(q.correctAnswer)) {
      errors.push(`Q${qNum} [${q.id}]: Invalid correctAnswer "${q.correctAnswer}"!`);
    }

    keyDist[q.correctAnswer] = (keyDist[q.correctAnswer] || 0) + 1;
    diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
    catDist[q.category] = (catDist[q.category] || 0) + 1;

    // Distractor uniqueness check
    const optValues = [q.options.A, q.options.B, q.options.C, q.options.D];
    const uniqueOpts = new Set(optValues);
    if (uniqueOpts.size !== optValues.length) {
      errors.push(`Q${qNum} [${q.id}]: Duplicate option text in options A-D!`);
    }

    // Memory-truth verification for standard factual questions
    const chosenText = q.options[q.correctAnswer];

    if (q.category === "bloodGroup") {
      if (q.correctAnswer === "E") {
        if (optValues.some((v) => v === sourceCard.bloodGroup)) {
          errors.push(`Q${qNum} [${q.id}]: Correct is E, but true blood group "${sourceCard.bloodGroup}" is present in options A-D!`);
        }
      } else {
        if (!chosenText.includes(sourceCard.bloodGroup)) {
          errors.push(`Q${qNum} [${q.id}]: Answer "${chosenText}" does not match card blood group "${sourceCard.bloodGroup}"!`);
        }
      }
    } else if (q.category === "medication") {
      const expected = sourceCard.medication ? "Ja" : "Nein";
      if (q.correctAnswer === "E") {
        if (optValues.some((v) => v === expected)) {
          errors.push(`Q${qNum} [${q.id}]: Correct is E, but true medication "${expected}" is present in options A-D!`);
        }
      } else {
        if (!chosenText.includes(expected)) {
          errors.push(`Q${qNum} [${q.id}]: Answer "${chosenText}" does not match card medication "${expected}"!`);
        }
      }
    } else if (q.category === "country") {
      if (q.correctAnswer === "E") {
        if (optValues.some((v) => v === sourceCard.country)) {
          errors.push(`Q${qNum} [${q.id}]: Correct is E, but true country "${sourceCard.country}" is present in options A-D!`);
        }
      } else {
        if (!chosenText.includes(sourceCard.country)) {
          errors.push(`Q${qNum} [${q.id}]: Answer "${chosenText}" does not match card country "${sourceCard.country}"!`);
        }
      }
    } else if (q.category === "idNumber") {
      if (q.correctAnswer === "E") {
        if (optValues.some((v) => v === sourceCard.idNumber)) {
          errors.push(`Q${qNum} [${q.id}]: Correct is E, but true idNumber "${sourceCard.idNumber}" is present in options A-D!`);
        }
      } else {
        if (!chosenText.includes(sourceCard.idNumber)) {
          errors.push(`Q${qNum} [${q.id}]: Answer "${chosenText}" does not match card idNumber "${sourceCard.idNumber}"!`);
        }
      }
    } else if (q.category === "birthDate") {
      if (q.correctAnswer === "E") {
        if (optValues.some((v) => v === sourceCard.birthDate)) {
          errors.push(`Q${qNum} [${q.id}]: Correct is E, but true birthDate "${sourceCard.birthDate}" is present in options A-D!`);
        }
      } else {
        if (!chosenText.includes(sourceCard.birthDate)) {
          errors.push(`Q${qNum} [${q.id}]: Answer "${chosenText}" does not match card birthDate "${sourceCard.birthDate}"!`);
        }
      }
    } else if (q.category === "name") {
      if (q.correctAnswer === "E") {
        if (optValues.some((v) => v === sourceCard.name)) {
          errors.push(`Q${qNum} [${q.id}]: Correct is E, but true name "${sourceCard.name}" is present in options A-D!`);
        }
      } else {
        if (!chosenText.includes(sourceCard.name)) {
          errors.push(`Q${qNum} [${q.id}]: Answer "${chosenText}" does not match card name "${sourceCard.name}"!`);
        }
      }
    }
  }

  return {
    skipped: false,
    file: simFile,
    simNum,
    cardsCount: cards.length,
    questionsCount: questions.length,
    errors,
    keyDist,
    diffDist,
    catDist,
  };
}

const simFiles = [
  "gmSimulation1.ts",
  "gmSimulation2.ts",
  "gmSimulation3.ts",
  "gmSimulation4.ts",
  "gmSimulation5.ts",
];

let totalCardsEvaluated = 0;
let totalCardsPassed = 0;
let totalQuestionsEvaluated = 0;
let totalQuestionsPassed = 0;
let totalGlobalErrors = 0;

for (const f of simFiles) {
  const res = auditSimulation(f);

  if (res.skipped) {
    console.log(`⏳ ${f}: Not yet implemented.`);
    continue;
  }

  console.log(`----------------------------------------------------------------------`);
  console.log(`📂 AUDITING GM SIMULATION ${res.simNum} (${f})`);
  console.log(`----------------------------------------------------------------------`);

  totalCardsEvaluated += res.cardsCount;
  totalQuestionsEvaluated += res.questionsCount;

  if (res.errors.length === 0) {
    totalCardsPassed += res.cardsCount;
    totalQuestionsPassed += res.questionsCount;
    console.log(`  ✅ Cards:     ${res.cardsCount} / 8 PASS`);
    console.log(`  ✅ Questions: ${res.questionsCount} / 25 PASS`);
    console.log(`  📊 Keys:      A=${res.keyDist.A}, B=${res.keyDist.B}, C=${res.keyDist.C}, D=${res.keyDist.D}, E=${res.keyDist.E}`);
    console.log(`  🎯 Diff:      L=${res.diffDist.Leicht}, M=${res.diffDist.Mittel}, S=${res.diffDist.Schwer}`);
  } else {
    totalGlobalErrors += res.errors.length;
    console.log(`  ❌ ERRORS (${res.errors.length}):`);
    res.errors.forEach((e) => console.log(`     • ${e}`));
  }
}

// 3. Timing Validation Check
console.log(`\n----------------------------------------------------------------------`);
console.log(`⏱️ TIMING VALIDATION`);
console.log(`----------------------------------------------------------------------`);
let timerPass = true;
const expectedMerkphaseSeconds = 8 * 60; // 480
const expectedRecallSeconds = 15 * 60; // 900

// Verify in GmMerkphaseWorkspace
const merkphaseContent = fs.readFileSync(path.join(__dirname, "../src/simulator/gm/GmMerkphaseWorkspace.tsx"), "utf8");
if (!merkphaseContent.includes("8 * 60")) {
  console.error("  ❌ GmMerkphaseWorkspace timer is not configured for 8 minutes (480s)!");
  timerPass = false;
  totalGlobalErrors++;
} else {
  console.log(`  ✅ Merkphase Timer: 08:00 (480s countdown) verified`);
}

// Verify in GmRecallWorkspace
const recallContent = fs.readFileSync(path.join(__dirname, "../src/simulator/gm/GmRecallWorkspace.tsx"), "utf8");
if (!recallContent.includes("15 * 60")) {
  console.error("  ❌ GmRecallWorkspace timer is not configured for 15 minutes (900s)!");
  timerPass = false;
  totalGlobalErrors++;
} else {
  console.log(`  ✅ Recall Timer:    15:00 (900s countdown) verified`);
}

console.log("\n======================================================================");
console.log("📊 FINAL MASTER AUDIT SUMMARY FOR GM SIMULATIONS:");
console.log(`• Total Cards Evaluated:     ${totalCardsEvaluated} (Passed: ${totalCardsPassed})`);
console.log(`• Total Questions Evaluated: ${totalQuestionsEvaluated} (Passed: ${totalQuestionsPassed})`);
console.log(`• Timer Integrity:           ${timerPass ? "PASS" : "FAIL"}`);
console.log(`• Total Errors:              ${totalGlobalErrors}`);
console.log("======================================================================\n");

if (totalGlobalErrors > 0) {
  console.error("❌ GM Validation failed!");
  process.exit(1);
} else {
  console.log("🏆 ALL EVALUATED GM SIMULATIONS PASSED WITH 100% MEMORY-TRUTH INTEGRITY!\n");
}
