import { RAW_GENERALPROBE_1_ER_QUESTIONS } from "../src/data/generalprobe/generalprobe1ErQuestions";
import { RAW_GENERALPROBE_2_ER_QUESTIONS } from "../src/data/generalprobe/generalprobe2ErQuestions";
import { RAW_GENERALPROBE_3_ER_QUESTIONS } from "../src/data/generalprobe/generalprobe3ErQuestions";

console.log("GP1 keys:", RAW_GENERALPROBE_1_ER_QUESTIONS.map((q) => q.correctAnswer).join(", "));
console.log("GP2 keys:", RAW_GENERALPROBE_2_ER_QUESTIONS.map((q) => q.correctAnswer).join(", "));
console.log("GP3 keys:", RAW_GENERALPROBE_3_ER_QUESTIONS.map((q) => q.correctAnswer).join(", "));

console.log("\n--- GP1 Scenarios ---");
RAW_GENERALPROBE_1_ER_QUESTIONS.forEach((q) =>
  console.log(`${q.id} | ${q.difficulty} | ${q.strategyType} | Key: ${q.correctAnswer} | Emotion: ${q.emotion} | Scenario: ${q.scenario.slice(0, 70)}...`)
);

console.log("\n--- GP2 Scenarios ---");
RAW_GENERALPROBE_2_ER_QUESTIONS.forEach((q) =>
  console.log(`${q.id} | ${q.difficulty} | ${q.strategyType} | Key: ${q.correctAnswer} | Emotion: ${q.emotion} | Scenario: ${q.scenario.slice(0, 70)}...`)
);

console.log("\n--- GP3 Scenarios ---");
RAW_GENERALPROBE_3_ER_QUESTIONS.forEach((q) =>
  console.log(`${q.id} | ${q.difficulty} | ${q.strategyType} | Key: ${q.correctAnswer} | Emotion: ${q.emotion} | Scenario: ${q.scenario.slice(0, 70)}...`)
);
