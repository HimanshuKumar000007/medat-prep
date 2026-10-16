import { RAW_GENERALPROBE_1_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe1ZfQuestions";
import { RAW_GENERALPROBE_2_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe2ZfQuestions";

console.log("GP1 ZF keys:", RAW_GENERALPROBE_1_ZF_QUESTIONS.map(q => q.correctAnswer));
console.log("GP2 ZF keys:", RAW_GENERALPROBE_2_ZF_QUESTIONS.map(q => q.correctAnswer));

console.log("GP1 difficulty:", RAW_GENERALPROBE_1_ZF_QUESTIONS.map(q => q.difficulty));
console.log("GP2 difficulty:", RAW_GENERALPROBE_2_ZF_QUESTIONS.map(q => q.difficulty));

console.log("GP1 rules:", RAW_GENERALPROBE_1_ZF_QUESTIONS.map(q => q.rule));
console.log("GP2 rules:", RAW_GENERALPROBE_2_ZF_QUESTIONS.map(q => q.rule));
