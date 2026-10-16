import { RAW_GENERALPROBE_1_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe1ZfQuestions";
import { RAW_GENERALPROBE_2_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe2ZfQuestions";
import { RAW_GENERALPROBE_3_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe3ZfQuestions";

console.log("=== GP1 ZF ===");
RAW_GENERALPROBE_1_ZF_QUESTIONS.forEach(q => {
  console.log(`${q.id} | ${q.difficulty} | Key: ${q.correctAnswer} | Seq: [${q.sequence.join(", ")}] -> [${q.expectedNextValues.join(", ")}] | Rule: ${q.rule}`);
});

console.log("\n=== GP2 ZF ===");
RAW_GENERALPROBE_2_ZF_QUESTIONS.forEach(q => {
  console.log(`${q.id} | ${q.difficulty} | Key: ${q.correctAnswer} | Seq: [${q.sequence.join(", ")}] -> [${q.expectedNextValues.join(", ")}] | Rule: ${q.rule}`);
});

console.log("\n=== GP3 ZF ===");
RAW_GENERALPROBE_3_ZF_QUESTIONS.forEach(q => {
  console.log(`${q.id} | ${q.difficulty} | Key: ${q.correctAnswer} | Seq: [${q.sequence.join(", ")}] -> [${q.expectedNextValues.join(", ")}] | Rule: ${q.rule}`);
});
