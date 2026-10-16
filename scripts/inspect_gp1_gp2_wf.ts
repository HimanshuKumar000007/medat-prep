import { RAW_GENERALPROBE_1_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe1WfQuestions";
import { RAW_GENERALPROBE_2_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe2WfQuestions";

console.log("=== GP1 WORDS ===");
RAW_GENERALPROBE_1_WF_QUESTIONS.forEach(q => {
  console.log(`${q.id} | ${q.difficulty} | Key: ${q.correctAnswer} | Word: ${q.targetWord} (${q.targetWord.length}) | Scramble: ${q.scrambledLetters}`);
});

console.log("\n=== GP2 WORDS ===");
RAW_GENERALPROBE_2_WF_QUESTIONS.forEach(q => {
  console.log(`${q.id} | ${q.difficulty} | Key: ${q.correctAnswer} | Word: ${q.targetWord} (${q.targetWord.length}) | Scramble: ${q.scrambledLetters}`);
});
