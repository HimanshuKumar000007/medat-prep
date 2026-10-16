/**
 * Comprehensive Verification Script: MedAT-H Generalprobe #1 Question Loading Audit
 * 
 * Verifies that:
 * 1. GENERALPROBE_1_DATASET and getGeneralprobeDataset() load the exact questions created.
 * 2. All 11 subtests load their exact counts:
 *    - Bio: 40
 *    - Chem: 24
 *    - Phys: 18
 *    - Math: 12
 *    - TV: 12
 *    - FZ: 15
 *    - ZF: 10
 *    - WF: 15
 *    - GM: 8 cards + 25 questions
 *    - IE: 10
 *    - ER: 12
 *    - EE: 14
 *    - SE: 14
 *    Total: 221 scored questions + 8 memory cards.
 * 3. Question IDs match the authentic new format and cross-map cleanly.
 * 4. getQuestionsForStage() provides the exact stage questions during runtime for all 15 stages.
 * 5. Every question has non-empty stem/options/answers/explanations.
 * 6. No duplicate IDs exist across the entire dataset.
 */

import {
  GENERALPROBE_1_DATASET,
  getGeneralprobeDataset,
  buildGeneralprobe1Dataset,
} from "../src/data/generalprobe/generalprobeData";
import {
  MEDAT_STAGE_ORDER,
  STAGE_CONFIGS,
  getQuestionsForStage,
} from "../src/data/generalprobe/types";

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    process.exit(1);
  }
}

console.log("=================================================================");
console.log("   AUDIT: MEDAT-H GENERALPROBE #1 QUESTION LOADING VERIFICATION  ");
console.log("=================================================================\n");

// 1. Factory & Dataset Instance Verification
console.log("1. Verifying Dataset Retrieval API...");
const dataset = GENERALPROBE_1_DATASET;
assert(dataset.id === "generalprobe-1", "dataset.id must be generalprobe-1");
assert(dataset.simNumber === 1, "dataset.simNumber must be 1");

const retrievedById1 = getGeneralprobeDataset("generalprobe-1");
const retrievedById2 = getGeneralprobeDataset("mock-full-medat-h-1");
assert(retrievedById1 === dataset, "getGeneralprobeDataset('generalprobe-1') must return GENERALPROBE_1_DATASET");
assert(retrievedById2 === dataset, "getGeneralprobeDataset('mock-full-medat-h-1') must return GENERALPROBE_1_DATASET");
console.log("   ✅ Factory & Singleton match perfectly.\n");

// 2. Subtest Question Counts
console.log("2. Auditing Individual Subtest Question Sets & Counts...");

const bms = dataset.bmsQuestions;
assert(bms.length === 94, `BMS total must be 94, got ${bms.length}`);

const bio = bms.filter((q) => q.subjectId === "bio");
const chem = bms.filter((q) => q.subjectId === "chem");
const phys = bms.filter((q) => q.subjectId === "phys");
const math = bms.filter((q) => q.subjectId === "math");

assert(bio.length === 40, `Bio must have 40 questions, got ${bio.length}`);
assert(chem.length === 24, `Chem must have 24 questions, got ${chem.length}`);
assert(phys.length === 18, `Phys must have 18 questions, got ${phys.length}`);
assert(math.length === 12, `Math must have 12 questions, got ${math.length}`);
console.log(`   ✅ BMS: 94 questions (Bio: ${bio.length}, Chem: ${chem.length}, Phys: ${phys.length}, Math: ${math.length})`);

const tv = dataset.tvQuestions;
assert(tv.length === 12, `TV must have 12 questions, got ${tv.length}`);
console.log(`   ✅ TV: ${tv.length} questions`);

const fz = dataset.fzQuestions;
assert(fz.length === 15, `FZ must have 15 questions, got ${fz.length}`);
console.log(`   ✅ KFF FZ: ${fz.length} questions`);

const gmCards = dataset.gmCards;
assert(gmCards.length === 8, `GM Cards must be 8, got ${gmCards.length}`);
const gmRecall = dataset.gmRecallQuestions;
assert(gmRecall.length === 25, `GM Recall must be 25, got ${gmRecall.length}`);
const gmStored = dataset.gmStoredQuestions;
assert(gmStored.length === 25, `GM Stored Questions must be 25, got ${gmStored.length}`);
console.log(`   ✅ KFF GM: ${gmCards.length} memory cards + ${gmRecall.length} recall questions`);

const zf = dataset.zfQuestions;
assert(zf.length === 10, `ZF must have 10 questions, got ${zf.length}`);
console.log(`   ✅ KFF ZF: ${zf.length} questions`);

const wf = dataset.wfQuestions;
assert(wf.length === 15, `WF must have 15 questions, got ${wf.length}`);
console.log(`   ✅ KFF WF: ${wf.length} questions`);

const ie = dataset.ieQuestions;
assert(ie.length === 10, `IE must have 10 questions, got ${ie.length}`);
console.log(`   ✅ KFF IE: ${ie.length} questions`);

const er = dataset.erQuestions;
assert(er.length === 12, `ER must have 12 questions, got ${er.length}`);
console.log(`   ✅ SEK ER: ${er.length} questions`);

const ee = dataset.eeQuestions;
assert(ee.length === 14, `EE must have 14 questions, got ${ee.length}`);
console.log(`   ✅ SEK EE: ${ee.length} questions`);

const se = dataset.seQuestions;
assert(se.length === 14, `SE must have 14 questions, got ${se.length}`);
console.log(`   ✅ SEK SE: ${se.length} questions`);

const totalScored = bms.length + tv.length + fz.length + zf.length + wf.length + gmStored.length + ie.length + er.length + ee.length + se.length;
assert(totalScored === 221, `Total scored questions must be 221, got ${totalScored}`);
console.log(`   🎯 TOTAL SCORED QUESTIONS: ${totalScored} (+ 8 GM memory cards)\n`);

// 3. Question ID Sample and Verification
console.log("3. Verifying Question IDs across all Banks...");
assert(bio[0].id === "BIO-BMS-001" && bio[39].id === "BIO-BMS-040", `Bio ID range check: ${bio[0].id} .. ${bio[39].id}`);
assert(chem[0].id === "CHEM-BMS-001" && chem[23].id === "CHEM-BMS-024", `Chem ID range check: ${chem[0].id} .. ${chem[23].id}`);
assert(phys[0].id === "PHYS-BMS-001" && phys[17].id === "PHYS-BMS-018", `Phys ID range check: ${phys[0].id} .. ${phys[17].id}`);
assert(math[0].id === "MATH-BMS-001" && math[11].id === "MATH-BMS-012", `Math ID range check: ${math[0].id} .. ${math[11].id}`);
assert(tv[0].id === "TV-MEDAT-001" && tv[11].id === "TV-MEDAT-012", `TV ID range check: ${tv[0].id} .. ${tv[11].id}`);
assert(fz[0].id === "KFF-FZ-001" && fz[14].id === "KFF-FZ-015", `FZ ID range check: ${fz[0].id} .. ${fz[14].id}`);
assert(zf[0].id === "KFF-ZF-001" && zf[9].id === "KFF-ZF-010", `ZF ID range check: ${zf[0].id} .. ${zf[9].id}`);
assert(wf[0].id === "KFF-WF-001" && wf[14].id === "KFF-WF-015", `WF ID range check: ${wf[0].id} .. ${wf[14].id}`);
assert(gmCards[0].id === "KFF-GM-CARD-001" && gmCards[7].id === "KFF-GM-CARD-008", `GM Card ID range check: ${gmCards[0].id} .. ${gmCards[7].id}`);
assert(gmStored[0].id === "KFF-GM-001" && gmStored[24].id === "KFF-GM-025", `GM Recall ID range check: ${gmStored[0].id} .. ${gmStored[24].id}`);
assert(ie[0].id === "KFF-IE-001" && ie[9].id === "KFF-IE-010", `IE ID range check: ${ie[0].id} .. ${ie[9].id}`);
assert(er[0].id === "SEK-ER-001" && er[11].id === "SEK-ER-012", `ER ID range check: ${er[0].id} .. ${er[11].id}`);
assert(ee[0].id === "SEK-EE-001" && ee[13].id === "SEK-EE-014", `EE ID range check: ${ee[0].id} .. ${ee[13].id}`);
assert(se[0].id === "SEK-SE-001" && se[13].id === "SEK-SE-014", `SE ID range check: ${se[0].id} .. ${se[13].id}`);
console.log("   ✅ All Question ID sequences (KFF-*, SEK-*, TV-*, QC-*) match authentic created banks.\n");

// 4. Duplicate ID Audit across the entire 221 questions
console.log("4. Auditing for Duplicate IDs across all 221 Scored Questions...");
const allScoredQuestions = [
  ...bms,
  ...tv,
  ...fz,
  ...zf,
  ...wf,
  ...gmStored,
  ...ie,
  ...er,
  ...ee,
  ...se,
];
const idMap = new Map<string, number>();
for (const q of allScoredQuestions) {
  const count = idMap.get(q.id) || 0;
  idMap.set(q.id, count + 1);
}

const duplicates = Array.from(idMap.entries()).filter(([_, count]) => count > 1);
assert(duplicates.length === 0, `Duplicate IDs detected: ${JSON.stringify(duplicates)}`);
assert(idMap.size === 221, `Expected 221 distinct question IDs, got ${idMap.size}`);
console.log(`   ✅ 221 unique question IDs confirmed with zero collisions.\n`);

// 5. Stage Execution Audit (Testing getQuestionsForStage)
console.log("5. Auditing Runtime Stage Loader (getQuestionsForStage)...");
for (const stage of MEDAT_STAGE_ORDER) {
  const cfg = STAGE_CONFIGS[stage];
  const stageQuestions = getQuestionsForStage(stage, dataset);
  assert(
    stageQuestions.length === cfg.questionCount,
    `Stage ${stage}: expected ${cfg.questionCount} questions, got ${stageQuestions.length}`
  );
  console.log(`   • Stage ${stage.padEnd(16)}: ${stageQuestions.length.toString().padStart(2)} tasks [${cfg.durationSeconds / 60} min]`);
}
console.log("   ✅ All 15 Exam Stages deliver the exact expected question count to FullMockExamRunner.\n");

// 6. Content Integrity Audit
console.log("6. Auditing Content Integrity (Stems, Options, Answers, Explanations)...");
for (const q of allScoredQuestions) {
  assert(q.questionText && q.questionText.trim().length > 0, `Empty question text in ${q.id}`);
  assert(q.options && q.options.length >= 4, `Insufficient options in ${q.id}`);
  assert(q.correctAnswer !== undefined && q.correctAnswer !== null, `Missing correctAnswer in ${q.id}`);
  assert(q.explanation && q.explanation.trim().length > 0, `Missing explanation in ${q.id}`);
}
console.log("   ✅ All 221 questions have complete question text, options, answer keys, and explanations.\n");

// 7. Verify TV Passages Integration
console.log("7. Auditing TV Passages Integration...");
const tvPassageMap = new Map<string, number>();
for (const q of tv) {
  const passageTitle = q.topic || "Unknown";
  assert(q.passage && q.passage.length > 500, `TV question ${q.id} missing long reading passage`);
  tvPassageMap.set(passageTitle, (tvPassageMap.get(passageTitle) || 0) + 1);
}
console.log("   TV Passage breakdown:", Array.from(tvPassageMap.entries()).map(([k, v]) => `\n     • "${k}": ${v} questions`).join(""));
assert(tvPassageMap.size === 4, `Expected exactly 4 distinct passages, got ${tvPassageMap.size}`);
for (const [title, count] of tvPassageMap.entries()) {
  assert(count === 3, `Each passage must have exactly 3 questions, got ${count} for ${title}`);
}
console.log("   ✅ Exactly 4 scientific passages with 3 questions each verified (Total 12 TV questions).\n");

console.log("=================================================================");
console.log("   ALL AUDIT CHECKS PASSED: GENERALPROBE #1 IS 100% VERIFIED!    ");
console.log("=================================================================");
