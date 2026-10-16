/**
 * Comprehensive Quality Assurance & Factual Verification Suite
 * MedAT Gedächtnis und Merkfähigkeit (GM) — Generalprobe #3 (8 Cards, 25 Questions)
 */

import {
  RAW_GENERALPROBE_3_GM_CARDS,
  GENERALPROBE_3_GM_CARDS,
  RAW_GENERALPROBE_3_GM_QUESTIONS,
  GENERALPROBE_3_GM_STORED_QUESTIONS,
  GENERALPROBE_3_GM_SIMULATION_DATA,
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
  buildGmSimulationCards,
  buildGmSimulationQuestions,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT GM QUALITY ASSURANCE & VERIFICATION SUITE — GENERALPROBE #3");
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

const cards = GENERALPROBE_3_GM_CARDS;
const rawQuestions = RAW_GENERALPROBE_3_GM_QUESTIONS;
const storedQuestions = GENERALPROBE_3_GM_STORED_QUESTIONS;

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
  const expectedId = `KFF-GM-GP3-CARD-${String(cardNum).padStart(3, "0")}`;

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

// 2. Recall Questions Count & Identifiers
console.log("\n--- 2. Recall Questions Count & Format ---");
assert(rawQuestions.length === 25, `Raw questions count is exactly 25 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 25, `Stored questions count is exactly 25 (found: ${storedQuestions.length})`);

const qIds = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const expectedId = `KFF-GM-GP3-${String(qNum).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${qNum} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!qIds.has(q.id), `Question ID ${q.id} is unique`);
  qIds.add(q.id);

  assert(q.questionNumber === qNum, `Question ${qNum} has questionNumber ${qNum}`);
});

storedQuestions.forEach((sq, idx) => {
  const expectedId = `KFF-GM-GP3-${String(idx + 1).padStart(3, "0")}`;
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
[3, 7, 15, 25].forEach((qNum) => {
  const q = rawQuestions[qNum - 1];
  assert(
    q.questionText.includes("Ausstellungsland") || q.explanation.includes("Ausstellungsland"),
    `Q${qNum} uses precise "Ausstellungsland" terminology`
  );
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

  // Category & Question specific factual checks
  if (sourceCard) {
    if (qNum === 2) {
      // Q2: Medication for Klara Venz (Nein) with unambiguous, non-overlapping choices
      assert(
        q.options[q.correctAnswer].includes("Nein") && !q.options[q.correctAnswer].includes("Ja"),
        `Q2 Option ${q.correctAnswer} correctly specifies "Nein"`
      );
      assert(
        !q.options.C.includes("akuten") && !q.options.A.includes("akuten"),
        `Q2 has eliminated ambiguous conditional phrasing ("akuten allergischen Schüben")`
      );
    } else if (qNum === 9) {
      // Q9: Name lookup by blood group 0 and medication Ja (Bodhi Zeidler) -> Omitted from A-D -> Correct: E
      const match = cards.filter((c) => c.bloodGroup === "0" && c.medication);
      assert(match.length === 1 && match[0].id === sourceCard.id, `Q9 matches exactly Bodhi Zeidler`);
      assert(q.correctAnswer === "E", "Q9 has correct answer E");
      assert(
        ![q.options.A, q.options.B, q.options.C, q.options.D].some((opt) => opt.toUpperCase() === sourceCard.name),
        `Q9 Bodhi Zeidler is omitted from A-D`
      );
    } else if (qNum === 10) {
      // Q10: Month lookup for Klara Venz (03.08. -> August)
      assert(sourceCard.birthDate === "03.08.", "Klara Venz born 03.08.");
      assert(q.options[q.correctAnswer] === "August", `Q10 Option ${q.correctAnswer} correctly provides month "August"`);
    } else if (qNum === 11) {
      // Q11: Last digit of ID number
      const lastDigit = sourceCard.idNumber.slice(-1);
      assert(q.options[q.correctAnswer] === lastDigit, `Q11 Option ${q.correctAnswer} correctly provides end-digit "${lastDigit}"`);
    } else if (qNum === 13) {
      // Q13: Count of people taking medication
      const medCount = cards.filter((c) => c.medication).length;
      assert(q.options[q.correctAnswer] === String(medCount), `Q13 Option ${q.correctAnswer} correctly provides medication count "${medCount}"`);
    } else if (qNum === 15) {
      // Q15: Pair with country Schweiz (Leonid Kopp & Ines Kauert)
      const swissCards = cards.filter((c) => c.country === "Schweiz");
      assert(swissCards.length === 2, "Exactly 2 cards have country Schweiz");
      assert(
        q.options[q.correctAnswer].includes("Leonid Kopp") && q.options[q.correctAnswer].includes("Ines Kauert"),
        `Q15 Option ${q.correctAnswer} provides pair Leonid Kopp und Ines Kauert`
      );
    } else if (qNum === 16) {
      // Q16: Reverse lookup: person born on 27.02.
      const match = cards.filter((c) => c.birthDate === "27.02.");
      assert(match.length === 1 && match[0].id === sourceCard.id, `Q16 matches exactly Mira Tischler`);
      assert(q.options[q.correctAnswer].toUpperCase() === sourceCard.name, `Q16 Option ${q.correctAnswer} provides name "${sourceCard.name}"`);
    } else if (qNum === 17) {
      // Q17: First digit of ID number for Valerie Rohr (18365 -> starts with 1, omitted from A-D -> E)
      const firstDigit = sourceCard.idNumber.slice(0, 1);
      assert(firstDigit === "1", "Valerie Rohr ID starts with 1");
      assert(q.correctAnswer === "E", "Q17 has correct answer E");
      assert(!distinctOptions.has(firstDigit), `Q17 Option E: true start-digit "${firstDigit}" is omitted from A-D`);
    } else if (qNum === 19) {
      // Q19: Pair with blood group B
      const bCards = cards.filter((c) => c.bloodGroup === "B");
      assert(bCards.length === 2, `Exactly 2 cards have blood group B`);
      assert(
        q.options[q.correctAnswer].includes("Klara Venz") && q.options[q.correctAnswer].includes("Quirin Faltin"),
        `Q19 Option ${q.correctAnswer} provides pair Klara Venz und Quirin Faltin`
      );
    } else if (qNum === 22) {
      // Q22: Precise grammatical & semantic wording
      assert(
        q.options.A === "Beide haben die Blutgruppe B, unterscheiden sich jedoch in der Angabe zur regelmäßigen Medikamenteneinnahme.",
        `Q22 Option A has precise, grammatically sound wording`
      );
      assert(q.correctAnswer === "A", "Q22 correct answer is A");
    } else if (q.category === "bloodGroup") {
      const trueBlood = sourceCard.bloodGroup;
      if (q.correctAnswer === "E") {
        assert(!distinctOptions.has(trueBlood), `Q${qNum} Option E: true blood group "${trueBlood}" is omitted from A-D`);
      } else {
        assert(q.options[q.correctAnswer] === trueBlood, `Q${qNum} Option ${q.correctAnswer} correctly provides blood group "${trueBlood}"`);
      }
    } else if (q.category === "medication") {
      const trueMed = sourceCard.medication ? "Ja" : "Nein";
      if (q.correctAnswer === "E") {
        assert(!distinctOptions.has(trueMed), `Q${qNum} Option E: true medication "${trueMed}" is omitted from A-D`);
      } else {
        assert(q.options[q.correctAnswer] === trueMed, `Q${qNum} Option ${q.correctAnswer} correctly provides medication "${trueMed}"`);
      }
    } else if (q.category === "country") {
      const trueCountry = sourceCard.country;
      if (q.correctAnswer === "E") {
        assert(!distinctOptions.has(trueCountry), `Q${qNum} Option E: true country "${trueCountry}" is omitted from A-D`);
      } else {
        assert(q.options[q.correctAnswer] === trueCountry, `Q${qNum} Option ${q.correctAnswer} correctly provides country "${trueCountry}"`);
      }
    } else if (q.category === "idNumber") {
      const trueId = sourceCard.idNumber;
      if (q.correctAnswer === "E") {
        assert(!distinctOptions.has(trueId), `Q${qNum} Option E: true idNumber "${trueId}" is omitted from A-D`);
      } else {
        assert(q.options[q.correctAnswer] === trueId, `Q${qNum} Option ${q.correctAnswer} correctly provides idNumber "${trueId}"`);
      }
    } else if (q.category === "birthDate") {
      const trueBirth = sourceCard.birthDate;
      if (q.correctAnswer === "E") {
        assert(!distinctOptions.has(trueBirth), `Q${qNum} Option E: true birthDate "${trueBirth}" is omitted from A-D`);
      } else {
        assert(q.options[q.correctAnswer] === trueBirth, `Q${qNum} Option ${q.correctAnswer} correctly provides birthDate "${trueBirth}"`);
      }
    } else if (q.category === "name") {
      const trueName = sourceCard.name;
      if (q.correctAnswer === "E") {
        assert(!distinctOptions.has(trueName), `Q${qNum} Option E: true name "${trueName}" is omitted from A-D`);
      } else {
        assert(q.options[q.correctAnswer].toUpperCase() === trueName, `Q${qNum} Option ${q.correctAnswer} correctly provides name "${trueName}"`);
      }
    }
  }
});

// 6. Non-Regression & Cross-Simulation Collision Audit (GP1, GP2, GP3)
console.log("\n--- 6. GP1 & GP2 Non-Regression & Collision Audit ---");
assert(RAW_GENERALPROBE_1_GM_CARDS.length === 8, "GP1 has exactly 8 cards");
assert(RAW_GENERALPROBE_1_GM_QUESTIONS.length === 25, "GP1 has exactly 25 questions");
assert(GENERALPROBE_1_GM_STORED_QUESTIONS.length === 25, "GP1 has exactly 25 stored questions");

assert(RAW_GENERALPROBE_2_GM_CARDS.length === 8, "GP2 has exactly 8 cards");
assert(RAW_GENERALPROBE_2_GM_QUESTIONS.length === 25, "GP2 has exactly 25 questions");
assert(GENERALPROBE_2_GM_STORED_QUESTIONS.length === 25, "GP2 has exactly 25 stored questions");

const gp1Names = new Set(RAW_GENERALPROBE_1_GM_CARDS.map((c) => c.name));
const gp1IdNumbers = new Set(RAW_GENERALPROBE_1_GM_CARDS.map((c) => c.idNumber));
const gp2Names = new Set(RAW_GENERALPROBE_2_GM_CARDS.map((c) => c.name));
const gp2IdNumbers = new Set(RAW_GENERALPROBE_2_GM_CARDS.map((c) => c.idNumber));

cards.forEach((c) => {
  assert(!gp1Names.has(c.name), `Card "${c.name}" is completely distinct from GP1`);
  assert(!gp1IdNumbers.has(c.idNumber), `Card idNumber "${c.idNumber}" does not collide with GP1`);
  assert(!gp2Names.has(c.name), `Card "${c.name}" is completely distinct from GP2`);
  assert(!gp2IdNumbers.has(c.idNumber), `Card idNumber "${c.idNumber}" does not collide with GP2`);
});

// 7. Generalprobe Dataset Factory Integration
console.log("\n--- 7. Generalprobe Dataset Factory Integration ---");
const gp1Dataset = buildGeneralprobe1Dataset();
const gp2Dataset = buildGeneralprobe2Dataset();
const gp3Dataset = buildGeneralprobe3Dataset();

assert(gp1Dataset.gmCards.length === 8, "GP1 dataset has 8 gmCards");
assert(gp1Dataset.gmRecallQuestions.length === 25, "GP1 dataset has 25 gmRecallQuestions");
assert(gp1Dataset.gmStoredQuestions.length === 25, "GP1 dataset has 25 gmStoredQuestions");

assert(gp2Dataset.gmCards.length === 8, "GP2 dataset has 8 gmCards");
assert(gp2Dataset.gmRecallQuestions.length === 25, "GP2 dataset has 25 gmRecallQuestions");
assert(gp2Dataset.gmStoredQuestions.length === 25, "GP2 dataset has 25 gmStoredQuestions");

assert(gp3Dataset.gmCards.length === 8, "GP3 dataset has 8 gmCards");
assert(gp3Dataset.gmRecallQuestions.length === 25, "GP3 dataset has 25 gmRecallQuestions");
assert(gp3Dataset.gmStoredQuestions.length === 25, "GP3 dataset has 25 gmStoredQuestions");

// Check helper functions
const gmCards3 = buildGmSimulationCards(3);
const gmQuestions3 = buildGmSimulationQuestions(3);
assert(gmCards3.length === 8, "buildGmSimulationCards(3) returns 8 cards");
assert(gmQuestions3.length === 25, "buildGmSimulationQuestions(3) returns 25 questions");

const fetchedGp3 = getGeneralprobeDataset("generalprobe-3");
assert(fetchedGp3.id === "generalprobe-3", 'getGeneralprobeDataset("generalprobe-3") returns GP3');
assert(fetchedGp3.gmCards.length === 8, "Fetched GP3 has 8 gmCards");
assert(fetchedGp3.gmStoredQuestions.length === 25, "Fetched GP3 has 25 gmStoredQuestions");

// Check that cards attached to StoredQuestions in GP3 are the canonical GP3 cards
gp3Dataset.gmStoredQuestions.forEach((sq, idx) => {
  assert(sq.gmAllCards?.length === 8, `Stored question ${idx + 1} has 8 canonical cards attached`);
  assert(!!sq.gmCardData, `Stored question ${idx + 1} has gmCardData attached`);
  assert(sq.options.length === 5, `Stored question ${idx + 1} has 5 options`);
  assert(sq.correctAnswer >= 0 && sq.correctAnswer <= 4, `Stored question ${idx + 1} correctAnswer is valid index`);
});

// Total scored tasks across GP3
const totalScoredGp3 =
  gp3Dataset.bmsQuestions.length +
  gp3Dataset.tvQuestions.length +
  gp3Dataset.fzQuestions.length +
  gp3Dataset.zfQuestions.length +
  gp3Dataset.wfQuestions.length +
  gp3Dataset.gmRecallQuestions.length +
  gp3Dataset.ieQuestions.length +
  gp3Dataset.erQuestions.length +
  gp3Dataset.eeQuestions.length +
  gp3Dataset.seQuestions.length;

console.log(`\nGP3 Total Scored Tasks: ${totalScoredGp3}`);
assert(totalScoredGp3 === 221, "GP3 dataset contains exactly 221 scored tasks");

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("🎉 ALL QUALITY ASSURANCE CHECKS PASSED WITH ZERO ERRORS!");
} else {
  console.error(`❌ QA FAILED WITH ${errorCount} ERRORS!`);
  process.exit(1);
}
console.log("================================================================================\n");
