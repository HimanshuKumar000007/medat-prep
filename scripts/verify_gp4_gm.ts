/**
 * Comprehensive Quality Assurance & Factual Verification Suite
 * MedAT Gedächtnis und Merkfähigkeit (GM) — Generalprobe #4 (8 Cards, 25 Questions)
 */

import {
  RAW_GENERALPROBE_4_GM_CARDS,
  GENERALPROBE_4_GM_CARDS,
  RAW_GENERALPROBE_4_GM_QUESTIONS,
  GENERALPROBE_4_GM_STORED_QUESTIONS,
  GENERALPROBE_4_GM_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe4GmQuestions";
import {
  RAW_GENERALPROBE_3_GM_CARDS,
  GENERALPROBE_3_GM_CARDS,
  RAW_GENERALPROBE_3_GM_QUESTIONS,
  GENERALPROBE_3_GM_STORED_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3GmQuestions";
import {
  RAW_GENERALPROBE_2_GM_CARDS,
  GENERALPROBE_2_GM_CARDS,
  RAW_GENERALPROBE_2_GM_QUESTIONS,
  GENERALPROBE_2_GM_STORED_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2GmQuestions";
import {
  RAW_GENERALPROBE_1_GM_CARDS,
  GENERALPROBE_1_GM_CARDS,
  RAW_GENERALPROBE_1_GM_QUESTIONS,
  GENERALPROBE_1_GM_STORED_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1GmQuestions";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
  buildGeneralprobe3Dataset,
  buildGeneralprobe4Dataset,
  buildGmSimulationCards,
  buildGmSimulationQuestions,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT GM QUALITY ASSURANCE & VERIFICATION SUITE — GENERALPROBE #4");
console.log("================================================================================\n");

let errorCount = 0;
function assert(cond: boolean, msg: string) {
  if (cond) {
    console.log(`  [PASS] ${msg}`);
  } else {
    console.error(`  [FAIL] ${msg}`);
    errorCount++;
  }
}

const cards = GENERALPROBE_4_GM_CARDS;
const rawQuestions = RAW_GENERALPROBE_4_GM_QUESTIONS;
const storedQuestions = GENERALPROBE_4_GM_STORED_QUESTIONS;

// 1. Card Counts & Identification
console.log("--- 1. Card Counts & Unique Identifiers ---");
assert(cards.length === 8, `Exactly 8 canonical cards (found: ${cards.length})`);

const cardIds = new Set<string>();
const cardNumbers = new Set<number>();
const cardNames = new Set<string>();
const idNumbers = new Set<string>();
const birthDates = new Set<string>();
const photos = new Set<string>();

cards.forEach((card, idx) => {
  const cardNum = idx + 1;
  const expectedId = `KFF-GM-GP4-CARD-${String(cardNum).padStart(3, "0")}`;

  assert(card.id === expectedId, `Card ${cardNum} has exact ID ${expectedId} (actual: ${card.id})`);
  assert(!cardIds.has(card.id), `Card ID ${card.id} is unique`);
  cardIds.add(card.id);

  assert(card.cardNumber === cardNum, `Card ${cardNum} has cardNumber ${cardNum}`);
  assert(!cardNumbers.has(card.cardNumber), `Card number ${card.cardNumber} is unique`);
  cardNumbers.add(card.cardNumber);

  assert(typeof card.name === "string" && card.name.split(" ").length === 2, `Card ${cardNum} has two-part name "${card.name}"`);
  assert(!cardNames.has(card.name), `Card name "${card.name}" is unique`);
  cardNames.add(card.name);

  assert(/^\d{2}\.\d{2}\.$/.test(card.birthDate), `Card ${cardNum} has valid birthDate "${card.birthDate}"`);
  assert(!birthDates.has(card.birthDate), `Birthdate "${card.birthDate}" is unique`);
  birthDates.add(card.birthDate);

  assert(typeof card.medication === "boolean", `Card ${cardNum} medication is boolean (${card.medication})`);
  assert(["A", "B", "AB", "0"].includes(card.bloodGroup), `Card ${cardNum} has valid bloodGroup "${card.bloodGroup}"`);
  assert(Array.isArray(card.allergies), `Card ${cardNum} allergies is an array`);

  assert(/^\d{5}$/.test(card.idNumber), `Card ${cardNum} has 5-digit idNumber "${card.idNumber}"`);
  assert(!idNumbers.has(card.idNumber), `idNumber "${card.idNumber}" is unique`);
  idNumbers.add(card.idNumber);

  assert(typeof card.country === "string" && card.country.length > 3, `Card ${cardNum} has valid country "${card.country}"`);

  assert(/^avatar-0[1-8]$/.test(card.photo), `Card ${cardNum} uses valid synthetic avatar "${card.photo}"`);
  assert(!photos.has(card.photo), `Avatar photo "${card.photo}" is unique across cards`);
  photos.add(card.photo);

  assert(card.gender === "female" || card.gender === "male", `Card ${cardNum} has valid gender "${card.gender}"`);
  assert(!!card.visualTraits, `Card ${cardNum} has visualTraits`);
});

// Card balance check
const bgCounts: Record<string, number> = { A: 0, B: 0, AB: 0, "0": 0 };
let medTrue = 0;
let medFalse = 0;
cards.forEach(c => {
  bgCounts[c.bloodGroup]++;
  if (c.medication) medTrue++;
  else medFalse++;
});
assert(bgCounts.A === 2 && bgCounts.B === 2 && bgCounts.AB === 2 && bgCounts["0"] === 2, "Blood groups balanced: 2 A, 2 B, 2 AB, 2 0");
assert(medTrue === 4 && medFalse === 4, "Medication balanced: 4 Ja, 4 Nein");

// 2. Recall Questions Count & Identifiers
console.log("\n--- 2. Recall Questions Count & Format ---");
assert(rawQuestions.length === 25, `Raw questions count is exactly 25 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 25, `Stored questions count is exactly 25 (found: ${storedQuestions.length})`);

const qIds = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const expectedId = `KFF-GM-GP4-${String(qNum).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${qNum} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!qIds.has(q.id), `Question ID ${q.id} is unique`);
  qIds.add(q.id);

  assert(q.questionNumber === qNum, `Question ${qNum} has questionNumber ${qNum}`);
});

storedQuestions.forEach((sq, idx) => {
  const expectedId = `KFF-GM-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(sq.id === expectedId, `Stored question ${idx + 1} matches ID ${expectedId}`);
});

// 3. Difficulty Distribution (Required: exactly 5 Leicht, 15 Mittel, 5 Schwer)
console.log("\n--- 3. Difficulty Distribution ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log(diffDist);
assert(diffDist.Leicht === 5, `Leicht count is exactly 5 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 15, `Mittel count is exactly 15 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 5, `Schwer count is exactly 5 (actual: ${diffDist.Schwer})`);

// 4. Answer Key Balance (Required: exactly 5 A, 5 B, 5 C, 5 D, 5 E)
console.log("\n--- 4. Answer Key Distribution ---");
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log(ansDist);
assert(ansDist.A === 5, `Option A count is exactly 5 (actual: ${ansDist.A})`);
assert(ansDist.B === 5, `Option B count is exactly 5 (actual: ${ansDist.B})`);
assert(ansDist.C === 5, `Option C count is exactly 5 (actual: ${ansDist.C})`);
assert(ansDist.D === 5, `Option D count is exactly 5 (actual: ${ansDist.D})`);
assert(ansDist.E === 5, `Option E count is exactly 5 (actual: ${ansDist.E})`);

// 4b. Anti-Pattern & Non-Periodic Answer Key Verification
console.log("\n--- 4b. Answer Key Pattern Analysis ---");
const keySequence = rawQuestions.map((q) => q.correctAnswer);
console.log(`Key sequence: ${keySequence.join(", ")}`);

// Check: No cyclic A, B, C, D, E pattern
const isCyclic = keySequence.every((k, i) => k === ["A", "B", "C", "D", "E"][i % 5]);
assert(!isCyclic, "Answer key is NOT in predictable cyclic pattern (A, B, C, D, E, ...)");

// Check: E positions are NOT multiples of 5
const eIndices = keySequence
  .map((k, idx) => (k === "E" ? idx + 1 : null))
  .filter((idx): idx is number => idx !== null);
console.log(`E positions (1-based): ${eIndices.join(", ")}`);
const hasMultipleOf5E = eIndices.some((pos) => pos % 5 === 0);
assert(!hasMultipleOf5E, `E answers do NOT occur on multiples of 5 (actual positions: ${eIndices.join(", ")})`);

// Check: Zero consecutive identical answers
let consecutiveCount = 0;
for (let i = 0; i < keySequence.length - 1; i++) {
  if (keySequence[i] === keySequence[i + 1]) consecutiveCount++;
}
assert(consecutiveCount === 0, `Zero consecutive identical answers (found: ${consecutiveCount})`);

// Check: Trigram uniqueness / max frequency
const trigramCounts = new Map<string, number>();
for (let i = 0; i < keySequence.length - 2; i++) {
  const tri = keySequence.slice(i, i + 3).join("");
  trigramCounts.set(tri, (trigramCounts.get(tri) || 0) + 1);
}
const maxTriFreq = Math.max(...Array.from(trigramCounts.values()));
assert(maxTriFreq <= 1, `Zero repeated trigrams in answer sequence (max frequency: ${maxTriFreq})`);

// Check: Card issuingCountry field & Question wording
cards.forEach((card, idx) => {
  assert(typeof card.issuingCountry === "string" && card.issuingCountry.length > 2, `Card ${idx + 1} has issuingCountry "${card.issuingCountry}"`);
});

// 5. Canonical Factual Verification Against Cards
console.log("\n--- 5. Canonical Factual Verification of All 25 Questions ---");
const cardMap = new Map(cards.map((c) => [c.id, c]));

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const sourceCard = cardMap.get(q.sourceCardId);
  assert(!!sourceCard, `Q${qNum} references valid source card ${q.sourceCardId}`);

  // Options structure
  assert(!!q.options.A, `Q${qNum} has Option A`);
  assert(!!q.options.B, `Q${qNum} has Option B`);
  assert(!!q.options.C, `Q${qNum} has Option C`);
  assert(!!q.options.D, `Q${qNum} has Option D`);
  assert(
    q.options.E === "Keine der Antwortmöglichkeiten ist richtig",
    `Q${qNum} Option E is standardized text`
  );

  const distinctOptions = new Set([q.options.A, q.options.B, q.options.C, q.options.D]);
  assert(distinctOptions.size === 4, `Q${qNum} options A-D are 4 distinct choices`);

  // Explanation check
  assert(
    typeof q.explanation === "string" && q.explanation.length > 100,
    `Q${qNum} has comprehensive explanation (${q.explanation.length} chars)`
  );
  assert(
    q.explanation.includes("Gedächtnis-Wahrheit") && q.explanation.includes("Distraktoren-Analyse"),
    `Q${qNum} explanation includes Gedächtnis-Wahrheit and Distraktoren-Analyse`
  );

  // Question specific factual checks
  if (sourceCard) {
    if (qNum === 1) {
      // Q1: Blood group of Darius Lorenz (A)
      assert(sourceCard.bloodGroup === "A", "Darius Lorenz has blood group A");
      assert(q.options[q.correctAnswer] === "A", "Q1 correct option provides 'A'");
    } else if (qNum === 2) {
      // Q2: Medication for Selma Grimm (Nein)
      assert(!sourceCard.medication, "Selma Grimm medication is false");
      assert(q.options[q.correctAnswer].includes("Nein"), "Q2 correct option provides 'Nein'");
    } else if (qNum === 3) {
      // Q3: Country of Matteo Brand (Schweiz)
      assert(sourceCard.country === "Schweiz", "Matteo Brand country is Schweiz");
      assert(q.options[q.correctAnswer] === "Schweiz", "Q3 correct option provides 'Schweiz'");
    } else if (qNum === 4) {
      // Q4: Allergies of Elena Stauffer (Penicillin, Latex) -> Omitted from A-D -> Correct: E
      assert(sourceCard.allergies.includes("Penicillin") && sourceCard.allergies.includes("Latex"), "Elena Stauffer allergies");
      assert(q.correctAnswer === "E", "Q4 correct answer is E");
      assert(
        !Array.from(distinctOptions).some(opt => opt.includes("Penicillin") || opt.includes("Latex")),
        "Q4 true allergens are omitted from options A-D"
      );
    } else if (qNum === 5) {
      // Q5: Visual traits of Kilian Rupp (kurzes graues Haar, eckige Brille)
      assert(sourceCard.visualTraits?.glasses && sourceCard.visualTraits?.hairColor === "grau", "Kilian Rupp traits");
      assert(q.options[q.correctAnswer].includes("graues Haar") && q.options[q.correctAnswer].includes("Brille"), "Q5 correct option provides traits");
    } else if (qNum === 6) {
      // Q6: Month of Noemi Bacher (09.07. -> Juli)
      assert(sourceCard.birthDate === "09.07.", "Noemi Bacher born 09.07.");
      assert(q.options[q.correctAnswer] === "Juli", "Q6 correct option provides 'Juli'");
    } else if (qNum === 7) {
      // Q7: ID number of Tizian Wald (95187)
      assert(sourceCard.idNumber === "95187", "Tizian Wald ID is 95187");
      assert(q.options[q.correctAnswer] === "95187", "Q7 correct option provides '95187'");
    } else if (qNum === 8) {
      // Q8: Allergies of Livia Hecht (no allergies)
      assert(sourceCard.allergies.length === 0, "Livia Hecht has no allergies");
      assert(q.options[q.correctAnswer].includes("keine bekannten Allergien"), "Q8 correct option provides 'keine bekannten Allergien'");
    } else if (qNum === 9) {
      // Q9: Kilian Rupp (Österreich, A, Hausstaubmilben) -> Omitted from A-D -> Correct: E
      assert(q.correctAnswer === "E", "Q9 correct answer is E");
      assert(!Array.from(distinctOptions).some(opt => opt.includes("Kilian Rupp")), "Q9 Kilian Rupp omitted from A-D");
    } else if (qNum === 10) {
      // Q10: End digit of Darius Lorenz (39174 -> 4)
      assert(sourceCard.idNumber.endsWith("4"), "Darius Lorenz ID ends with 4");
      assert(q.options[q.correctAnswer] === "4", "Q10 correct option provides '4'");
    } else if (qNum === 11) {
      // Q11: Birth date of Elena Stauffer (15. Mai)
      assert(sourceCard.birthDate === "15.05.", "Elena Stauffer born 15.05.");
      assert(q.options[q.correctAnswer] === "15. Mai", "Q11 correct option provides '15. Mai'");
    } else if (qNum === 12) {
      // Q12: Country of Noemi Bacher (Deutschland)
      assert(sourceCard.country === "Deutschland", "Noemi Bacher country is Deutschland");
      assert(q.options[q.correctAnswer] === "Deutschland", "Q12 correct option provides 'Deutschland'");
    } else if (qNum === 13) {
      // Q13: Blood group of Tizian Wald (0) -> Omitted from A-D -> Correct: E
      assert(sourceCard.bloodGroup === "0", "Tizian Wald blood group is 0");
      assert(q.correctAnswer === "E", "Q13 correct answer is E");
      assert(!distinctOptions.has("0"), "Q13 blood group '0' omitted from A-D");
    } else if (qNum === 14) {
      // Q14: Name Matteo Brand
      assert(sourceCard.name === "MATTEO BRAND", "Card 3 name is MATTEO BRAND");
      assert(q.options[q.correctAnswer] === "MATTEO BRAND", "Q14 correct option provides 'MATTEO BRAND'");
    } else if (qNum === 15) {
      // Q15: Allergies of Selma Grimm (Erdnuss)
      assert(sourceCard.allergies.includes("Erdnuss"), "Selma Grimm has Erdnuss");
      assert(q.options[q.correctAnswer] === "Erdnuss", "Q15 correct option provides 'Erdnuss'");
    } else if (qNum === 16) {
      // Q16: Start digit of Elena Stauffer (84296 -> 8)
      assert(sourceCard.idNumber.startsWith("8"), "Elena Stauffer ID starts with 8");
      assert(q.options[q.correctAnswer] === "8", "Q16 correct option provides '8'");
    } else if (qNum === 17) {
      // Q17: Photo of Livia Hecht (Bob, gerader Pony)
      assert(sourceCard.photo === "avatar-07", "Livia Hecht is avatar-07");
      assert(q.options[q.correctAnswer].includes("Bob-Frisur mit geradem Pony"), "Q17 correct option provides bob traits");
    } else if (qNum === 18) {
      // Q18: Birth month of Matteo Brand (06.12. -> Dezember) -> Omitted from A-D -> Correct: E
      assert(sourceCard.birthDate === "06.12.", "Matteo Brand born in December");
      assert(q.correctAnswer === "E", "Q18 correct answer is E");
      assert(!Array.from(distinctOptions).some(opt => opt.includes("Dezember")), "Q18 month 'Dezember' omitted from A-D");
    } else if (qNum === 19) {
      // Q19: Person with B, Med: Nein, Tierhaare (Noemi Bacher)
      assert(sourceCard.name === "NOEMI BACHER", "Card 6 is NOEMI BACHER");
      assert(q.options[q.correctAnswer] === "Noemi Bacher", "Q19 correct option provides 'Noemi Bacher'");
    } else if (qNum === 20) {
      // Q20: Food allergies of Tizian Wald (Soja und Hühnerei)
      assert(sourceCard.allergies.includes("Soja") && sourceCard.allergies.includes("Hühnerei"), "Tizian Wald food allergies");
      assert(q.options[q.correctAnswer] === "Soja und Hühnerei", "Q20 correct option provides 'Soja und Hühnerei'");
    } else if (qNum === 21) {
      // Q21: Pair with Österreich (Darius Lorenz and Kilian Rupp)
      const atCards = cards.filter(c => c.country === "Österreich");
      assert(atCards.length === 2, "Exactly 2 cards from Österreich");
      assert(q.options[q.correctAnswer].includes("Darius Lorenz") && q.options[q.correctAnswer].includes("Kilian Rupp"), "Q21 provides Darius Lorenz und Kilian Rupp");
    } else if (qNum === 22) {
      // Q22: Pair with blood group AB (Matteo Brand and Livia Hecht)
      const abCards = cards.filter(c => c.bloodGroup === "AB");
      assert(abCards.length === 2, "Exactly 2 cards with blood group AB");
      assert(q.options[q.correctAnswer].includes("Matteo Brand") && q.options[q.correctAnswer].includes("Livia Hecht"), "Q22 provides Matteo Brand und Livia Hecht");
    } else if (qNum === 23) {
      // Q23: Count of people taking medication (4) -> Omitted from A-D -> Correct: E
      const medCount = cards.filter(c => c.medication).length;
      assert(medCount === 4, "Exactly 4 people take medication");
      assert(q.correctAnswer === "E", "Q23 correct answer is E");
      assert(!Array.from(distinctOptions).some(opt => opt.includes("4")), "Q23 count '4' omitted from A-D");
    } else if (qNum === 24) {
      // Q24: Count of people wearing glasses (2)
      const glassesCount = cards.filter(c => c.visualTraits?.glasses).length;
      assert(glassesCount === 2, "Exactly 2 people wear glasses");
      assert(q.options[q.correctAnswer].includes("Genau 2 Personen"), "Q24 correct option provides 'Genau 2 Personen'");
    } else if (qNum === 25) {
      // Q25: Comparison Selma Grimm & Kilian Rupp (both wear glasses, different blood groups B vs A)
      assert(q.options.A.includes("beide Personen tragen auf ihrem Ausweisfoto eine Brille") || q.options.A.includes("Beide Personen tragen"), "Q25 option A wording");
      assert(q.correctAnswer === "A", "Q25 correct answer is A");
    }
  }
});

// 6. Non-Regression & Cross-Simulation Collision Audit (GP1, GP2, GP3)
console.log("\n--- 6. GP1, GP2 & GP3 Non-Regression & Collision Audit ---");
assert(RAW_GENERALPROBE_1_GM_CARDS.length === 8, "GP1 has exactly 8 cards");
assert(RAW_GENERALPROBE_1_GM_QUESTIONS.length === 25, "GP1 has exactly 25 questions");
assert(RAW_GENERALPROBE_2_GM_CARDS.length === 8, "GP2 has exactly 8 cards");
assert(RAW_GENERALPROBE_2_GM_QUESTIONS.length === 25, "GP2 has exactly 25 questions");
assert(RAW_GENERALPROBE_3_GM_CARDS.length === 8, "GP3 has exactly 8 cards");
assert(RAW_GENERALPROBE_3_GM_QUESTIONS.length === 25, "GP3 has exactly 25 questions");

const gp1Names = new Set(RAW_GENERALPROBE_1_GM_CARDS.map((c) => c.name));
const gp1IdNumbers = new Set(RAW_GENERALPROBE_1_GM_CARDS.map((c) => c.idNumber));
const gp1BirthDates = new Set(RAW_GENERALPROBE_1_GM_CARDS.map((c) => c.birthDate));

const gp2Names = new Set(RAW_GENERALPROBE_2_GM_CARDS.map((c) => c.name));
const gp2IdNumbers = new Set(RAW_GENERALPROBE_2_GM_CARDS.map((c) => c.idNumber));
const gp2BirthDates = new Set(RAW_GENERALPROBE_2_GM_CARDS.map((c) => c.birthDate));

const gp3Names = new Set(RAW_GENERALPROBE_3_GM_CARDS.map((c) => c.name));
const gp3IdNumbers = new Set(RAW_GENERALPROBE_3_GM_CARDS.map((c) => c.idNumber));
const gp3BirthDates = new Set(RAW_GENERALPROBE_3_GM_CARDS.map((c) => c.birthDate));

cards.forEach((c) => {
  assert(!gp1Names.has(c.name), `Card "${c.name}" is completely distinct from GP1`);
  assert(!gp1IdNumbers.has(c.idNumber), `Card idNumber "${c.idNumber}" does not collide with GP1`);
  assert(!gp1BirthDates.has(c.birthDate), `Card birthDate "${c.birthDate}" does not collide with GP1`);

  assert(!gp2Names.has(c.name), `Card "${c.name}" is completely distinct from GP2`);
  assert(!gp2IdNumbers.has(c.idNumber), `Card idNumber "${c.idNumber}" does not collide with GP2`);
  assert(!gp2BirthDates.has(c.birthDate), `Card birthDate "${c.birthDate}" does not collide with GP2`);

  assert(!gp3Names.has(c.name), `Card "${c.name}" is completely distinct from GP3`);
  assert(!gp3IdNumbers.has(c.idNumber), `Card idNumber "${c.idNumber}" does not collide with GP3`);
  assert(!gp3BirthDates.has(c.birthDate), `Card birthDate "${c.birthDate}" does not collide with GP3`);
});

// 7. Generalprobe Dataset Factory Integration
console.log("\n--- 7. Generalprobe Dataset Factory Integration ---");
const gp1Dataset = buildGeneralprobe1Dataset();
const gp2Dataset = buildGeneralprobe2Dataset();
const gp3Dataset = buildGeneralprobe3Dataset();
const gp4Dataset = buildGeneralprobe4Dataset();

assert(gp4Dataset.gmCards.length === 8, "GP4 dataset has 8 gmCards");
assert(gp4Dataset.gmRecallQuestions.length === 25, "GP4 dataset has 25 gmRecallQuestions");
assert(gp4Dataset.gmStoredQuestions.length === 25, "GP4 dataset has 25 gmStoredQuestions");

const gmCards4 = buildGmSimulationCards(4);
const gmQuestions4 = buildGmSimulationQuestions(4);
assert(gmCards4.length === 8, "buildGmSimulationCards(4) returns 8 cards");
assert(gmQuestions4.length === 25, "buildGmSimulationQuestions(4) returns 25 questions");

const fetchedGp4 = getGeneralprobeDataset("generalprobe-4");
assert(fetchedGp4.id === "generalprobe-4", 'getGeneralprobeDataset("generalprobe-4") returns GP4');
assert(fetchedGp4.gmCards.length === 8, "Fetched GP4 has 8 gmCards");
assert(fetchedGp4.gmStoredQuestions.length === 25, "Fetched GP4 has 25 gmStoredQuestions");

// Check that cards attached to StoredQuestions in GP4 are the canonical GP4 cards
gp4Dataset.gmStoredQuestions.forEach((sq, idx) => {
  assert(sq.gmAllCards?.length === 8, `Stored question ${idx + 1} has 8 canonical cards attached`);
  assert(!!sq.gmCardData, `Stored question ${idx + 1} has gmCardData attached`);
  assert(sq.options.length === 5, `Stored question ${idx + 1} has 5 options`);
  assert(sq.correctAnswer >= 0 && sq.correctAnswer <= 4, `Stored question ${idx + 1} correctAnswer is valid index`);
});

// Total scored tasks across GP4
const totalScoredGp4 =
  gp4Dataset.bmsQuestions.length +
  gp4Dataset.tvQuestions.length +
  gp4Dataset.fzQuestions.length +
  gp4Dataset.zfQuestions.length +
  gp4Dataset.wfQuestions.length +
  gp4Dataset.gmRecallQuestions.length +
  gp4Dataset.ieQuestions.length +
  gp4Dataset.erQuestions.length +
  gp4Dataset.eeQuestions.length +
  gp4Dataset.seQuestions.length;

console.log(`\nGP4 Total Scored Tasks: ${totalScoredGp4}`);
assert(totalScoredGp4 === 221, "GP4 dataset contains exactly 221 scored tasks");

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("🎉 ALL QUALITY ASSURANCE CHECKS PASSED WITH ZERO ERRORS! [100% SUCCESS] ✅");
} else {
  console.error(`❌ QA FAILED WITH ${errorCount} ERRORS!`);
  process.exit(1);
}
console.log("================================================================================\n");
