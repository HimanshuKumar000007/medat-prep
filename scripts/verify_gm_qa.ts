/**
 * Comprehensive Quality Assurance & Memory-Truth Verification Suite
 * MedAT Gedächtnis und Merkfähigkeit (GM) — Generalprobe #1 (8 Cards, 25 Questions)
 */

import {
  RAW_GENERALPROBE_1_GM_CARDS,
  RAW_GENERALPROBE_1_GM_QUESTIONS,
  GENERALPROBE_1_GM_STORED_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1GmQuestions";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT GM QUALITY ASSURANCE & MEMORY-TRUTH VERIFICATION SUITE — GENERALPROBE #1");
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

// 1. CARDS AUDIT (Lernphase: 8 Cards)
console.log("--- 1. Lernphase: 8 Allergieausweise (Cards) Audit ---");
assert(RAW_GENERALPROBE_1_GM_CARDS.length === 8, `Cards count is exactly 8 (actual: ${RAW_GENERALPROBE_1_GM_CARDS.length})`);

const seenCardIds = new Set<string>();
const seenNames = new Set<string>();
const seenIdNumbers = new Set<string>();
const seenPhotos = new Set<string>();
const cardMap = new Map<string, (typeof RAW_GENERALPROBE_1_GM_CARDS)[0]>();

RAW_GENERALPROBE_1_GM_CARDS.forEach((card, idx) => {
  const cNum = idx + 1;
  const expectedId = `KFF-GM-CARD-${String(cNum).padStart(3, "0")}`;
  assert(card.id === expectedId, `Card ${cNum} ID is ${expectedId} (actual: ${card.id})`);
  assert(!seenCardIds.has(card.id), `Card ID ${card.id} is unique`);
  seenCardIds.add(card.id);
  cardMap.set(card.id, card);

  // Name
  assert(card.name && card.name.length >= 5, `Card ${cNum} has valid name "${card.name}"`);
  assert(!seenNames.has(card.name), `Card ${cNum} name "${card.name}" is unique`);
  seenNames.add(card.name);

  // BirthDate
  assert(/^\d{2}\.\d{2}\.$/.test(card.birthDate), `Card ${cNum} birthDate "${card.birthDate}" is valid DD.MM. format`);

  // Medication
  assert(typeof card.medication === "boolean", `Card ${cNum} medication is boolean: ${card.medication}`);

  // BloodGroup
  assert(["A", "B", "AB", "0"].includes(card.bloodGroup), `Card ${cNum} bloodGroup "${card.bloodGroup}" is valid AB0`);

  // Allergies
  assert(Array.isArray(card.allergies), `Card ${cNum} allergies is an array`);

  // IdNumber
  assert(/^\d{5}$/.test(card.idNumber), `Card ${cNum} idNumber "${card.idNumber}" is exactly 5 digits`);
  assert(!seenIdNumbers.has(card.idNumber), `Card ${cNum} idNumber "${card.idNumber}" is unique`);
  seenIdNumbers.add(card.idNumber);

  // Country
  assert(["Österreich", "Deutschland", "Schweiz", "Italien", "Spanien", "Frankreich"].includes(card.country),
    `Card ${cNum} country "${card.country}" is recognized`
  );

  // Photo
  assert(/^avatar-\d{2}$/.test(card.photo), `Card ${cNum} photo "${card.photo}" is valid avatar format`);
  assert(!seenPhotos.has(card.photo), `Card ${cNum} photo "${card.photo}" is unique`);
  seenPhotos.add(card.photo);
});

// 2. QUESTIONS AUDIT (Prüfungsphase: 25 Questions)
console.log("\n--- 2. Prüfungsphase: 25 Recall Questions Audit ---");
assert(RAW_GENERALPROBE_1_GM_QUESTIONS.length === 25, `Questions count is exactly 25 (actual: ${RAW_GENERALPROBE_1_GM_QUESTIONS.length})`);
assert(GENERALPROBE_1_GM_STORED_QUESTIONS.length === 25, `Stored questions count is exactly 25 (actual: ${GENERALPROBE_1_GM_STORED_QUESTIONS.length})`);

const seenQIds = new Set<string>();
RAW_GENERALPROBE_1_GM_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  const expectedId = `KFF-GM-${String(qNum).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${qNum} ID is ${expectedId} (actual: ${q.id})`);
  assert(!seenQIds.has(q.id), `Question ID ${q.id} is unique`);
  seenQIds.add(q.id);
});

// 3. Answer Key Distribution (Balanced: 5 A, 5 B, 5 C, 5 D, 5 E)
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
RAW_GENERALPROBE_1_GM_QUESTIONS.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("\n--- Answer Key Distribution ---");
console.log(ansDist);
assert(ansDist.A === 5, `Option A count is 5 (actual: ${ansDist.A})`);
assert(ansDist.B === 5, `Option B count is 5 (actual: ${ansDist.B})`);
assert(ansDist.C === 5, `Option C count is 5 (actual: ${ansDist.C})`);
assert(ansDist.D === 5, `Option D count is 5 (actual: ${ansDist.D})`);
assert(ansDist.E === 5, `Option E count is 5 (actual: ${ansDist.E})`);

// Non-repeating consecutive keys check
for (let i = 0; i < RAW_GENERALPROBE_1_GM_QUESTIONS.length - 1; i++) {
  const cur = RAW_GENERALPROBE_1_GM_QUESTIONS[i].correctAnswer;
  const nxt = RAW_GENERALPROBE_1_GM_QUESTIONS[i + 1].correctAnswer;
  assert(cur !== nxt, `No consecutive duplicate answer keys: Q${i + 1} (${cur}) vs Q${i + 2} (${nxt})`);
}

// 4. Difficulty Distribution (Exactly 5 Leicht, 15 Mittel, 5 Schwer)
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
RAW_GENERALPROBE_1_GM_QUESTIONS.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("\n--- Difficulty Distribution ---");
console.log(diffDist);
assert(diffDist.Leicht === 5, `Leicht count is 5 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 15, `Mittel count is 15 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 5, `Schwer count is 5 (actual: ${diffDist.Schwer})`);

// 5. Memory-Truth & Fact Verification
console.log("\n--- 3. Memory-Truth & Source Card Verification ---");
const queriedCardIds = new Set<string>();

RAW_GENERALPROBE_1_GM_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  const sourceCard = cardMap.get(q.sourceCardId);
  assert(!!sourceCard, `Q${qNum} (${q.id}) sourceCardId "${q.sourceCardId}" resolves to a valid card`);
  if (sourceCard) {
    queriedCardIds.add(sourceCard.id);
  }

  // Options A-D distinctness
  const optKeys = ["A", "B", "C", "D"] as const;
  const optValues = optKeys.map((k) => q.options[k]);
  const uniqueOpts = new Set(optValues);
  assert(uniqueOpts.size === 4, `Q${qNum} (${q.id}) Options A-D are 4 distinct values: [${optValues.join(", ")}]`);

  // Option E text check
  assert(q.options.E.includes("Keine der"), `Q${qNum} (${q.id}) Option E has standard MedAT wording`);

  // Category specific ground-truth check
  if (sourceCard) {
    if (q.category === "bloodGroup") {
      if (q.correctAnswer === "E") {
        assert(!optValues.includes(sourceCard.bloodGroup), `Q${qNum} (${q.id}) Option E correct: card bloodGroup "${sourceCard.bloodGroup}" not in A-D`);
      } else {
        assert(q.options[q.correctAnswer] === sourceCard.bloodGroup, `Q${qNum} (${q.id}) Option ${q.correctAnswer} matches card bloodGroup "${sourceCard.bloodGroup}"`);
      }
    } else if (q.category === "medication") {
      const expectedMedStr = sourceCard.medication ? "Ja" : "Nein";
      if (q.correctAnswer === "E") {
        assert(!optValues.includes(expectedMedStr), `Q${qNum} (${q.id}) Option E correct: card medication not in A-D`);
      } else {
        assert(q.options[q.correctAnswer] === expectedMedStr, `Q${qNum} (${q.id}) Option ${q.correctAnswer} matches card medication "${expectedMedStr}"`);
      }
    } else if (q.category === "country") {
      if (q.correctAnswer === "E") {
        assert(!optValues.includes(sourceCard.country), `Q${qNum} (${q.id}) Option E correct: card country "${sourceCard.country}" not in A-D`);
      } else {
        assert(q.options[q.correctAnswer] === sourceCard.country, `Q${qNum} (${q.id}) Option ${q.correctAnswer} matches card country "${sourceCard.country}"`);
      }
    } else if (q.category === "birthDate") {
      if (q.correctAnswer === "E") {
        assert(!optValues.includes(sourceCard.birthDate), `Q${qNum} (${q.id}) Option E correct: card birthDate "${sourceCard.birthDate}" not in A-D`);
      } else {
        assert(q.options[q.correctAnswer] === sourceCard.birthDate, `Q${qNum} (${q.id}) Option ${q.correctAnswer} matches card birthDate "${sourceCard.birthDate}"`);
      }
    } else if (q.category === "idNumber") {
      if (q.correctAnswer === "E") {
        assert(!optValues.includes(sourceCard.idNumber), `Q${qNum} (${q.id}) Option E correct: card idNumber "${sourceCard.idNumber}" not in A-D`);
      } else {
        assert(q.options[q.correctAnswer] === sourceCard.idNumber, `Q${qNum} (${q.id}) Option ${q.correctAnswer} matches card idNumber "${sourceCard.idNumber}"`);
      }
    }
  }

  // Explanation check
  assert(q.explanation.includes("Gedächtnis-Wahrheit"), `Q${qNum} (${q.id}) explanation contains derivation`);
  assert(q.explanation.includes("Distraktoren-Analyse:"), `Q${qNum} (${q.id}) explanation contains distractor analysis`);
  assert(q.explanation.includes("Option A"), `Q${qNum} (${q.id}) explains Option A`);
  assert(q.explanation.includes("Option B"), `Q${qNum} (${q.id}) explains Option B`);
  assert(q.explanation.includes("Option C"), `Q${qNum} (${q.id}) explains Option C`);
  assert(q.explanation.includes("Option D"), `Q${qNum} (${q.id}) explains Option D`);
  assert(q.explanation.includes("Option E"), `Q${qNum} (${q.id}) explains Option E`);
});

assert(queriedCardIds.size === 8, `All 8 cards are referenced across the 25 recall questions (actual: ${queriedCardIds.size})`);

// 6. Generalprobe #1 Integration Verification
console.log("\n--- 4. Generalprobe #1 Full Dataset Integration Verification ---");
const gp1 = buildGeneralprobe1Dataset();

const totalScoredQuestions =
  gp1.bmsQuestions.length +
  gp1.tvQuestions.length +
  gp1.fzQuestions.length +
  gp1.zfQuestions.length +
  gp1.wfQuestions.length +
  gp1.gmStoredQuestions.length +
  gp1.ieQuestions.length +
  gp1.erQuestions.length +
  gp1.eeQuestions.length +
  gp1.seQuestions.length;

assert(totalScoredQuestions === 221, `Generalprobe #1 has exactly 221 scored questions (actual: ${totalScoredQuestions})`);
assert(gp1.gmCards.length === 8, `Generalprobe #1 has exactly 8 GM cards (actual: ${gp1.gmCards.length})`);
assert(gp1.gmRecallQuestions.length === 25, `Generalprobe #1 has exactly 25 GM recall questions (actual: ${gp1.gmRecallQuestions.length})`);
assert(gp1.gmStoredQuestions.length === 25, `Generalprobe #1 has exactly 25 GM stored questions (actual: ${gp1.gmStoredQuestions.length})`);

// Verify question IDs in Generalprobe #1
const gmIds = gp1.gmStoredQuestions.map((q) => q.id);
console.log("GM IDs in Generalprobe #1:", gmIds[0], "...", gmIds[24]);
assert(gmIds[0] === "KFF-GM-001" && gmIds[24] === "KFF-GM-025", "GM IDs are KFF-GM-001 through KFF-GM-025");

const bioGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "bio");
const chemGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "chem");
const physGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "phys");
const mathGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "math");

assert(bioGp1.length === 40, `BMS Biology remains exactly 40 questions (actual: ${bioGp1.length})`);
assert(chemGp1.length === 24, `BMS Chemistry remains exactly 24 questions (actual: ${chemGp1.length})`);
assert(physGp1.length === 18, `BMS Physics remains exactly 18 questions (actual: ${physGp1.length})`);
assert(mathGp1.length === 12, `BMS Mathematics remains exactly 12 questions (actual: ${mathGp1.length})`);
assert(gp1.tvQuestions.length === 12, `Textverständnis remains exactly 12 questions (actual: ${gp1.tvQuestions.length})`);
assert(gp1.fzQuestions.length === 15, `FZ remains exactly 15 questions (actual: ${gp1.fzQuestions.length})`);
assert(gp1.zfQuestions.length === 10, `ZF remains exactly 10 questions (actual: ${gp1.zfQuestions.length})`);
assert(gp1.wfQuestions.length === 15, `WF remains exactly 15 questions (actual: ${gp1.wfQuestions.length})`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT GM QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT GM QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
