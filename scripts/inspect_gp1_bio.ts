import { RAW_GENERALPROBE_1_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe1BioQuestions";

console.log("=== GP1 BIOLOGY QUESTIONS SUMMARY ===");
console.log("Total Count:", RAW_GENERALPROBE_1_BIO_QUESTIONS.length);

const answers: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const difficulties: Record<string, number> = { foundational: 0, intermediate: 0, advanced: 0 };
const chapters: Record<string, number> = {};

RAW_GENERALPROBE_1_BIO_QUESTIONS.forEach((q, idx) => {
  answers[q.correct_answer] = (answers[q.correct_answer] || 0) + 1;
  difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
  chapters[q.primary_topic] = (chapters[q.primary_topic] || 0) + 1;
  console.log(`${idx + 1}. [${q.id}] ${q.primary_topic} | ${q.subtopic} (${q.difficulty}) -> ${q.correct_answer}`);
  console.log(`   ${q.stem.slice(0, 90)}...`);
});

console.log("\nAnswers:", answers);
console.log("Difficulties:", difficulties);
console.log("Chapters:", chapters);
