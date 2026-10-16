import { RAW_GENERALPROBE_1_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe1ChemistryQuestions";
import { RAW_GENERALPROBE_2_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe2ChemistryQuestions";

console.log("=== GP1 CHEMISTRY QUESTIONS ===");
RAW_GENERALPROBE_1_CHEM_QUESTIONS.forEach((q) => {
  console.log(`${q.id} | ${q.difficulty} | ${q.primary_topic} | ${q.subtopic} | ${q.stem.slice(0, 70)}...`);
});

console.log("\n=== GP2 CHEMISTRY QUESTIONS ===");
RAW_GENERALPROBE_2_CHEM_QUESTIONS.forEach((q) => {
  console.log(`${q.id} | ${q.difficulty} | ${q.primary_topic} | ${q.subtopic} | ${q.stem.slice(0, 70)}...`);
});
