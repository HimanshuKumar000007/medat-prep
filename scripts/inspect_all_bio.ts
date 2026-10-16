import { RAW_GENERALPROBE_1_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe1BioQuestions";
import { RAW_GENERALPROBE_2_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe2BiologyQuestions";
import { RAW_GENERALPROBE_3_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe3BiologyQuestions";

console.log(`GP1: ${RAW_GENERALPROBE_1_BIO_QUESTIONS.length}`);
console.log(`GP2: ${RAW_GENERALPROBE_2_BIO_QUESTIONS.length}`);
console.log(`GP3: ${RAW_GENERALPROBE_3_BIO_QUESTIONS.length}`);

console.log("\n=== GP1 TOPICS ===");
RAW_GENERALPROBE_1_BIO_QUESTIONS.forEach((q, i) => {
  console.log(`${q.id} | ${q.primary_topic} | ${q.subtopic} | ${q.difficulty} | Key: ${q.correct_answer}`);
});

console.log("\n=== GP2 TOPICS ===");
RAW_GENERALPROBE_2_BIO_QUESTIONS.forEach((q, i) => {
  console.log(`${q.id} | ${q.primary_topic} | ${q.subtopic} | ${q.difficulty} | Key: ${q.correct_answer}`);
});

console.log("\n=== GP3 TOPICS ===");
RAW_GENERALPROBE_3_BIO_QUESTIONS.forEach((q, i) => {
  console.log(`${q.id} | ${q.primary_topic} | ${q.subtopic} | ${q.difficulty} | Key: ${q.correct_answer}`);
});
