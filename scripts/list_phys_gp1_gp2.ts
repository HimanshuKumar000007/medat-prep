import { RAW_GENERALPROBE_1_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe1PhysQuestions";
import { RAW_GENERALPROBE_2_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe2PhysicsQuestions";

console.log("=== GP1 PHYSICS QUESTIONS ===");
RAW_GENERALPROBE_1_PHYS_QUESTIONS.forEach((q) => {
  console.log(`${q.id} | ${q.difficulty} | ${q.primary_topic} :: ${q.subtopic}`);
  console.log(`  Stem: ${q.stem.slice(0, 90)}...`);
});

console.log("\n=== GP2 PHYSICS QUESTIONS ===");
RAW_GENERALPROBE_2_PHYS_QUESTIONS.forEach((q) => {
  console.log(`${q.id} | ${q.difficulty} | ${q.primary_topic} :: ${q.subtopic}`);
  console.log(`  Stem: ${q.stem.slice(0, 90)}...`);
});
