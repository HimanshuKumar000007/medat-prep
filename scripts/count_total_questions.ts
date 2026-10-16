/**
 * Script to accurately calculate and breakdown the total question count in the platform
 */

import {
  ALL_FRONTEND_QUESTIONS,
  BIOLOGY_QUESTIONS,
  CHEMISTRY_QUESTIONS,
  PHYSICS_QUESTIONS,
  MATHEMATICS_QUESTIONS,
  TV_QUESTIONS,
  KFF_QUESTIONS,
  SEK_QUESTIONS,
  MANUAL_SKILLS_QUESTIONS,
} from "../src/data/questions/index";

import {
  RAW_BIOLOGY_JSON,
  RAW_CHEMISTRY_JSON,
  RAW_PHYSICS_JSON,
  RAW_MATHEMATICS_JSON,
  RAW_KFF_JSON,
  RAW_TV_JSON,
  RAW_SEK_JSON,
  RAW_MANUAL_SKILLS_JSON,
  ALL_RAW_JSON_QUESTIONS,
} from "../src/data/questions/loader";

import { ALL_FZ_QUESTIONS } from "../src/data/questions/fz";
import { ALL_ZF_QUESTIONS } from "../src/data/questions/zf";
import { ALL_WF_QUESTIONS } from "../src/data/questions/wf";
import { ALL_GM_SIMULATIONS } from "../src/data/questions/gm";
const ALL_GM_QUESTIONS = ALL_GM_SIMULATIONS.flatMap((s) => s.questions);
const ALL_GM_CARDS = ALL_GM_SIMULATIONS.flatMap((s) => s.cards);
import { ALL_IE_QUESTIONS } from "../src/data/questions/ie";
import { ALL_ER_QUESTIONS } from "../src/data/questions/er";
import { ALL_EE_QUESTIONS } from "../src/data/questions/ee";
import { ALL_SE_QUESTIONS } from "../src/data/questions/se";

import { GENERALPROBE_1_DATASET, GENERALPROBE_2_DATASET } from "../src/data/generalprobe/generalprobeData";

console.log("=================================================================");
console.log("            MEDAT PREPARATION PLATFORM QUESTION AUDIT            ");
console.log("=================================================================\n");

console.log("1. MASTER FRONTEND QUESTIONS (ALL_FRONTEND_QUESTIONS):");
console.log(`   Total Master Frontend Questions: ${ALL_FRONTEND_QUESTIONS.length}`);

// Unique IDs count
const uniqueFrontendIds = new Set(ALL_FRONTEND_QUESTIONS.map(q => q.id));
console.log(`   Unique IDs: ${uniqueFrontendIds.size}`);

console.log("\n   Breakdown by Section:");
console.log(`   - BMS (Biologie, Chemie, Physik, Mathe): ${BIOLOGY_QUESTIONS.length + CHEMISTRY_QUESTIONS.length + PHYSICS_QUESTIONS.length + MATHEMATICS_QUESTIONS.length}`);
console.log(`       * Biologie: ${BIOLOGY_QUESTIONS.length}`);
console.log(`       * Chemie: ${CHEMISTRY_QUESTIONS.length}`);
console.log(`       * Physik: ${PHYSICS_QUESTIONS.length}`);
console.log(`       * Mathematik: ${MATHEMATICS_QUESTIONS.length}`);
console.log(`   - TV (Textverständnis): ${TV_QUESTIONS.length}`);
console.log(`   - KFF (Kognitive Fähigkeiten & Fertigkeiten): ${KFF_QUESTIONS.length}`);
console.log(`   - SEK (Sozial-emotionale Kompetenzen): ${SEK_QUESTIONS.length}`);
console.log(`   - Manuelle Fertigkeiten (MedAT-Z): ${MANUAL_SKILLS_QUESTIONS.length}`);

console.log("\n2. SUBTEST BREAKDOWN IN KFF & SEK (MASTER FRONTEND):");
const kffSubjects = new Map<string, number>();
for (const q of KFF_QUESTIONS) {
  const subj = q.subjectId || "unknown";
  kffSubjects.set(subj, (kffSubjects.get(subj) || 0) + 1);
}
for (const [subj, count] of kffSubjects.entries()) {
  console.log(`   - KFF [${subj}]: ${count}`);
}

const sekSubjects = new Map<string, number>();
for (const q of SEK_QUESTIONS) {
  const subj = q.subjectId || "unknown";
  sekSubjects.set(subj, (sekSubjects.get(subj) || 0) + 1);
}
for (const [subj, count] of sekSubjects.entries()) {
  console.log(`   - SEK [${subj}]: ${count}`);
}

console.log("\n3. RAW JSON STORES (json/*.json):");
console.log(`   - biology.json: ${RAW_BIOLOGY_JSON.length}`);
console.log(`   - chemistry.json: ${RAW_CHEMISTRY_JSON.length}`);
console.log(`   - physics.json: ${RAW_PHYSICS_JSON.length}`);
console.log(`   - mathematics.json: ${RAW_MATHEMATICS_JSON.length}`);
console.log(`   - textverstaendnis.json: ${RAW_TV_JSON.length}`);
console.log(`   - kff.json: ${RAW_KFF_JSON.length}`);
console.log(`   - sek.json: ${RAW_SEK_JSON.length}`);
console.log(`   - manual_skills.json: ${RAW_MANUAL_SKILLS_JSON.length}`);
console.log(`   Total Raw JSON: ${ALL_RAW_JSON_QUESTIONS.length}`);

console.log("\n4. DEDICATED SIMULATION QUESTION POOLS:");
console.log(`   - Figuren zusammensetzen (FZ): ${ALL_FZ_QUESTIONS.length}`);
console.log(`   - Zahlenfolgen (ZF): ${ALL_ZF_QUESTIONS.length}`);
console.log(`   - Wortflüssigkeit (WF): ${ALL_WF_QUESTIONS.length}`);
console.log(`   - Gedächtnis & Merkfähigkeit (GM): ${ALL_GM_QUESTIONS.length} questions (+ ${ALL_GM_CARDS.length} memory cards)`);
console.log(`   - Implikationen erkennen (IE): ${ALL_IE_QUESTIONS.length}`);
console.log(`   - Emotionen regulieren (ER): ${ALL_ER_QUESTIONS.length}`);
console.log(`   - Emotionen erkennen (EE): ${ALL_EE_QUESTIONS.length}`);
console.log(`   - Soziales Entscheiden (SE): ${ALL_SE_QUESTIONS.length}`);

console.log("\n5. FULL GENERALPROBEN:");
console.log(`   - Generalprobe #1: ${GENERALPROBE_1_DATASET.bmsQuestions.length + GENERALPROBE_1_DATASET.tvQuestions.length + GENERALPROBE_1_DATASET.fzQuestions.length + GENERALPROBE_1_DATASET.zfQuestions.length + GENERALPROBE_1_DATASET.wfQuestions.length + GENERALPROBE_1_DATASET.gmStoredQuestions.length + GENERALPROBE_1_DATASET.ieQuestions.length + GENERALPROBE_1_DATASET.erQuestions.length + GENERALPROBE_1_DATASET.eeQuestions.length + GENERALPROBE_1_DATASET.seQuestions.length} scored questions (+ ${GENERALPROBE_1_DATASET.gmCards.length} GM memory cards)`);
console.log(`   - Generalprobe #2: ${GENERALPROBE_2_DATASET.bmsQuestions.length + GENERALPROBE_2_DATASET.tvQuestions.length + GENERALPROBE_2_DATASET.fzQuestions.length + GENERALPROBE_2_DATASET.zfQuestions.length + GENERALPROBE_2_DATASET.wfQuestions.length + GENERALPROBE_2_DATASET.gmStoredQuestions.length + GENERALPROBE_2_DATASET.ieQuestions.length + GENERALPROBE_2_DATASET.erQuestions.length + GENERALPROBE_2_DATASET.eeQuestions.length + GENERALPROBE_2_DATASET.seQuestions.length} scored questions (+ ${GENERALPROBE_2_DATASET.gmCards.length} GM memory cards)`);

// Grand Union of all unique question IDs in codebase
const allGlobalQuestionIds = new Set<string>();
ALL_FRONTEND_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_RAW_JSON_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_FZ_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_ZF_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_WF_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_GM_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_IE_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_ER_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_EE_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));
ALL_SE_QUESTIONS.forEach(q => allGlobalQuestionIds.add(q.id));

console.log("\n=================================================================");
console.log(`TOTAL UNIQUE QUESTION ENTITIES ACROSS PLATFORM: ${allGlobalQuestionIds.size}`);
console.log("=================================================================");
