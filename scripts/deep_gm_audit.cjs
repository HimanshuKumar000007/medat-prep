const fs = require("fs");
const path = require("path");

const VALID_BLOOD_GROUPS = new Set(["A", "B", "AB", "0"]);
const VALID_COUNTRIES = new Set([
  "Österreich", "Deutschland", "Schweiz", "Italien", "Spanien",
  "Frankreich", "Niederlande", "Schweden", "Norwegen", "Dänemark",
  "Belgien", "Polen", "Portugal", "Griechenland", "Ungarn",
  "Tschechien", "Irland", "Finnland"
]);

const simFiles = [
  "gmSimulation1.ts",
  "gmSimulation2.ts",
  "gmSimulation3.ts",
  "gmSimulation4.ts",
  "gmSimulation5.ts",
];

const report = {
  totalCards: 0,
  totalQuestions: 0,
  cardErrors: [],
  questionErrors: [],
  crossCardAudits: [],
  distractorAudits: []
};

for (const sf of simFiles) {
  const filePath = path.join(__dirname, "../src/data/questions/gm", sf);
  const content = fs.readFileSync(filePath, "utf8");
  const start = content.indexOf("= {") + 2;
  const end = content.lastIndexOf("};");
  const sim = JSON.parse(content.slice(start, end + 1));

  const simId = sim.simulationId;
  const cards = sim.cards;
  const questions = sim.questions;

  report.totalCards += cards.length;
  report.totalQuestions += questions.length;

  const cardMap = new Map();
  const seenCardNumbers = new Set();
  const seenNames = new Set();
  const seenIds = new Set();
  const seenPhotos = new Set();

  // Audit cards
  cards.forEach((card, idx) => {
    cardMap.set(card.id, card);

    if (seenCardNumbers.has(card.cardNumber)) {
      report.cardErrors.push(`[${simId}] Duplicate card number: ${card.cardNumber}`);
    }
    seenCardNumbers.add(card.cardNumber);

    if (seenNames.has(card.name)) {
      report.cardErrors.push(`[${simId}] Duplicate card name: ${card.name}`);
    }
    seenNames.add(card.name);

    if (seenIds.has(card.idNumber)) {
      report.cardErrors.push(`[${simId}] Duplicate idNumber: ${card.idNumber}`);
    }
    seenIds.add(card.idNumber);

    if (seenPhotos.has(card.photo)) {
      report.cardErrors.push(`[${simId}] Duplicate photo: ${card.photo}`);
    }
    seenPhotos.add(card.photo);

    // Validate fields
    if (!/^\d{2}\.\d{2}\.$/.test(card.birthDate)) {
      report.cardErrors.push(`[${simId}] Card ${card.id}: Invalid birthDate format: ${card.birthDate}`);
    } else {
      const [d, m] = card.birthDate.replace(/\.$/, "").split(".").map(Number);
      if (d < 1 || d > 31 || m < 1 || m > 12) {
        report.cardErrors.push(`[${simId}] Card ${card.id}: Out of range birthDate: ${card.birthDate}`);
      }
    }

    if (typeof card.medication !== "boolean") {
      report.cardErrors.push(`[${simId}] Card ${card.id}: Medication must be boolean`);
    }

    if (!VALID_BLOOD_GROUPS.has(card.bloodGroup)) {
      report.cardErrors.push(`[${simId}] Card ${card.id}: Invalid bloodGroup: ${card.bloodGroup}`);
    }

    if (!/^\d{5}$/.test(card.idNumber)) {
      report.cardErrors.push(`[${simId}] Card ${card.id}: Invalid idNumber length: ${card.idNumber}`);
    }

    if (!VALID_COUNTRIES.has(card.country)) {
      report.cardErrors.push(`[${simId}] Card ${card.id}: Invalid country: ${card.country}`);
    }

    if (!Array.isArray(card.allergies)) {
      report.cardErrors.push(`[${simId}] Card ${card.id}: Allergies must be array`);
    }
  });

  // Audit questions
  const seenQuestionTexts = new Set();

  questions.forEach((q) => {
    if (seenQuestionTexts.has(q.questionText)) {
      report.questionErrors.push(`[${simId}] Duplicate question text: "${q.questionText}"`);
    }
    seenQuestionTexts.add(q.questionText);

    const card = cardMap.get(q.sourceCardId);
    if (!card) {
      report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Missing sourceCardId "${q.sourceCardId}"`);
      return;
    }

    const options = q.options;
    const optValues = [options.A, options.B, options.C, options.D];
    // Check uniqueness of options A-D
    const uniqueOpts = new Set(optValues);
    if (uniqueOpts.size !== optValues.length) {
      report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Duplicate options among A-D: ${JSON.stringify(options)}`);
    }

    // Verify factual alignment
    const correctOpt = q.correctAnswer;
    const correctVal = options[correctOpt];

    if (q.category === "bloodGroup") {
      if (correctOpt === "E") {
        if (optValues.some((v) => v === card.bloodGroup)) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct is E, but true bloodGroup "${card.bloodGroup}" is present in A-D!`);
        }
      } else {
        if (correctVal !== card.bloodGroup) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct answer "${correctVal}" doesn't match card bloodGroup "${card.bloodGroup}"`);
        }
      }
    } else if (q.category === "birthDate") {
      if (correctOpt === "E") {
        if (optValues.some((v) => v === card.birthDate)) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct is E, but true birthDate "${card.birthDate}" is present in A-D!`);
        }
      } else {
        if (correctVal !== card.birthDate) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct answer "${correctVal}" doesn't match card birthDate "${card.birthDate}"`);
        }
      }
    } else if (q.category === "medication") {
      const exp = card.medication ? "Ja" : "Nein";
      if (correctOpt === "E") {
        if (optValues.some((v) => v === exp)) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct is E, but true medication "${exp}" is present in A-D!`);
        }
      } else {
        if (correctVal !== exp) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct answer "${correctVal}" doesn't match card medication "${exp}"`);
        }
      }
    } else if (q.category === "idNumber") {
      if (correctOpt === "E") {
        if (optValues.some((v) => v === card.idNumber)) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct is E, but true idNumber "${card.idNumber}" is present in A-D!`);
        }
      } else {
        if (correctVal !== card.idNumber) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct answer "${correctVal}" doesn't match card idNumber "${card.idNumber}"`);
        }
      }
    } else if (q.category === "country") {
      if (correctOpt === "E") {
        if (optValues.some((v) => v === card.country)) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct is E, but true country "${card.country}" is present in A-D!`);
        }
      } else {
        if (correctVal !== card.country) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct answer "${correctVal}" doesn't match card country "${card.country}"`);
        }
      }
    } else if (q.category === "name") {
      if (correctOpt === "E") {
        if (optValues.some((v) => v === card.name)) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct is E, but true name "${card.name}" is present in A-D!`);
        }
      } else {
        if (correctVal !== card.name) {
          report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct answer "${correctVal}" doesn't match card name "${card.name}"`);
        }
      }
    } else if (q.category === "allergies") {
      if (correctOpt === "E") {
        // None of the card allergies should be in A-D
        for (const a of card.allergies) {
          if (optValues.some((v) => v.toLowerCase().includes(a.toLowerCase()))) {
            report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct is E, but allergy "${a}" found in options!`);
          }
        }
      } else {
        // The correct option should contain at least one of the card's allergies
        if (card.allergies.length > 0) {
          const matched = card.allergies.some((a) => correctVal.toLowerCase().includes(a.toLowerCase()));
          if (!matched && !correctVal.includes("Keine Allergien bekannt")) {
            report.questionErrors.push(`[${simId}] Q${q.questionNumber} [${q.id}]: Correct answer "${correctVal}" doesn't match any card allergy ${JSON.stringify(card.allergies)}`);
          }
        }
      }
    }
  });
}

console.log("=== DEEP GM AUDIT RESULTS ===");
console.log(`Evaluated Cards: ${report.totalCards}`);
console.log(`Evaluated Questions: ${report.totalQuestions}`);
console.log(`Card Errors (${report.cardErrors.length}):`, report.cardErrors);
console.log(`Question Errors (${report.questionErrors.length}):`, report.questionErrors);
