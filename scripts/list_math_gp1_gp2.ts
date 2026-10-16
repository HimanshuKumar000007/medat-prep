import { RAW_GENERALPROBE_1_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe1MathQuestions";
import { RAW_GENERALPROBE_2_MATH_QUESTIONS } from "../src/data/generalprobe/generalprobe2MathQuestions";

console.log("=== GP1 MATH (12 questions) ===");
RAW_GENERALPROBE_1_MATH_QUESTIONS.forEach(q => {
  console.log(`${q.id} | ${q.primary_topic} | ${q.subtopic} | ${q.difficulty} | Key: ${q.correct_answer} | Stem: ${q.stem.slice(0, 60)}...`);
});

console.log("\n=== GP2 MATH (12 questions) ===");
RAW_GENERALPROBE_2_MATH_QUESTIONS.forEach(q => {
  console.log(`${q.id} | ${q.primary_topic} | ${q.subtopic} | ${q.difficulty} | Key: ${q.correct_answer} | Stem: ${q.stem.slice(0, 60)}...`);
});
