import { RAW_GENERALPROBE_1_SE_QUESTIONS } from "../src/data/generalprobe/generalprobe1SeQuestions";
import { RAW_GENERALPROBE_2_SE_QUESTIONS } from "../src/data/generalprobe/generalprobe2SeQuestions";
import { RAW_GENERALPROBE_3_SE_QUESTIONS } from "../src/data/generalprobe/generalprobe3SeQuestions";

console.log("--- GP1 Scenarios ---");
RAW_GENERALPROBE_1_SE_QUESTIONS.forEach((q) =>
  console.log(`${q.id} | ${q.difficulty} | Rank 1: ${Object.entries(q.referenceRanking).find(([_, r]) => r === 1)?.[0]} | ${q.decisionContext || q.scenario.slice(0, 60)}...`)
);

console.log("\n--- GP2 Scenarios ---");
RAW_GENERALPROBE_2_SE_QUESTIONS.forEach((q) =>
  console.log(`${q.id} | ${q.difficulty} | Rank 1: ${Object.entries(q.referenceRanking).find(([_, r]) => r === 1)?.[0]} | ${q.decisionContext || q.scenario.slice(0, 60)}...`)
);

console.log("\n--- GP3 Scenarios ---");
RAW_GENERALPROBE_3_SE_QUESTIONS.forEach((q) =>
  console.log(`${q.id} | ${q.difficulty} | Rank 1: ${Object.entries(q.referenceRanking).find(([_, r]) => r === 1)?.[0]} | ${q.decisionContext || q.scenario.slice(0, 60)}...`)
);
