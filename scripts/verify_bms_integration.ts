import {
  BIOLOGY_QUESTIONS,
  CHEMISTRY_QUESTIONS,
  PHYSICS_QUESTIONS,
  MATHEMATICS_QUESTIONS,
  ALL_FRONTEND_QUESTIONS,
  getQuestionsBySection,
} from "../src/data/questions";
import {
  GENERALPROBE_1_BIO_QUESTIONS,
  GENERALPROBE_1_CHEM_QUESTIONS,
  GENERALPROBE_1_PHYS_QUESTIONS,
  GENERALPROBE_1_MATH_QUESTIONS,
  GENERALPROBE_1_DATASET,
  getGeneralprobeDataset,
  buildBmsSimulationQuestions,
} from "../src/data/generalprobe";

console.log("=== Verifying BMS Question Bank Integration ===");

// 1. Check Generalprobe 1 BMS questions count & order
const bmsSim1 = buildBmsSimulationQuestions(1);
if (bmsSim1.length !== 94) {
  throw new Error(`Expected 94 BMS questions in Sim 1, got ${bmsSim1.length}`);
}

const bioCount = bmsSim1.filter((q) => q.subjectId === "bio").length;
const chemCount = bmsSim1.filter((q) => q.subjectId === "chem").length;
const physCount = bmsSim1.filter((q) => q.subjectId === "phys").length;
const mathCount = bmsSim1.filter((q) => q.subjectId === "math").length;

console.log(`Sim 1 Counts: Bio=${bioCount}, Chem=${chemCount}, Phys=${physCount}, Math=${mathCount}`);
if (bioCount !== 40 || chemCount !== 24 || physCount !== 18 || mathCount !== 12) {
  throw new Error("BMS simulation question count distribution mismatch");
}

// 2. Check getGeneralprobeDataset IDs
const gp1 = getGeneralprobeDataset("mock-full-medat-h-1");
if (gp1.id !== "generalprobe-1") throw new Error("mock-full-medat-h-1 resolution failed");
const gp2 = getGeneralprobeDataset("mock-full-medat-h-2");
if (gp2.id !== "generalprobe-2") throw new Error("mock-full-medat-h-2 resolution failed");

// 3. Verify loader.ts master store inclusion
for (const b of GENERALPROBE_1_BIO_QUESTIONS) {
  if (!BIOLOGY_QUESTIONS.some((q) => q.id === b.id)) {
    throw new Error(`Bio question ${b.id} missing in BIOLOGY_QUESTIONS`);
  }
}
for (const c of GENERALPROBE_1_CHEM_QUESTIONS) {
  if (!CHEMISTRY_QUESTIONS.some((q) => q.id === c.id)) {
    throw new Error(`Chem question ${c.id} missing in CHEMISTRY_QUESTIONS`);
  }
}
for (const p of GENERALPROBE_1_PHYS_QUESTIONS) {
  if (!PHYSICS_QUESTIONS.some((q) => q.id === p.id)) {
    throw new Error(`Phys question ${p.id} missing in PHYSICS_QUESTIONS`);
  }
}
for (const m of GENERALPROBE_1_MATH_QUESTIONS) {
  if (!MATHEMATICS_QUESTIONS.some((q) => q.id === m.id)) {
    throw new Error(`Math question ${m.id} missing in MATHEMATICS_QUESTIONS`);
  }
}

// 4. Verify getQuestionsBySection("BMS")
const bmsAll = getQuestionsBySection("BMS");
console.log(`Total BMS questions available in master store: ${bmsAll.length}`);
const all94Ids = [
  ...GENERALPROBE_1_BIO_QUESTIONS.map((q) => q.id),
  ...GENERALPROBE_1_CHEM_QUESTIONS.map((q) => q.id),
  ...GENERALPROBE_1_PHYS_QUESTIONS.map((q) => q.id),
  ...GENERALPROBE_1_MATH_QUESTIONS.map((q) => q.id),
];
for (const id of all94Ids) {
  if (!bmsAll.some((q) => q.id === id)) {
    throw new Error(`Calibrated question ${id} not found in getQuestionsBySection('BMS')`);
  }
}

console.log("All 94 calibrated BMS questions successfully verified across all stores and datasets!");
