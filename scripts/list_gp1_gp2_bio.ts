import { RAW_GENERALPROBE_1_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe1BioQuestions";

console.log("=== GP1 Stems (1..31) ===");
RAW_GENERALPROBE_1_BIO_QUESTIONS.slice(0, 31).forEach((q, idx) => {
  console.log(`GP1-${idx + 1} (${q.id}): [${q.primary_topic} / ${q.subtopic}] ${q.stem.slice(0, 75)}...`);
});
