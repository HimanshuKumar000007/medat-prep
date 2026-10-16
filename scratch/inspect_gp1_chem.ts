import {
  RAW_GENERALPROBE_1_CHEM_QUESTIONS,
  GENERALPROBE_1_CHEM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1ChemistryQuestions";

console.log("Total GP1 Chem Questions:", RAW_GENERALPROBE_1_CHEM_QUESTIONS.length);
const ansCounts: Record<string, number> = {};
const diffCounts: Record<string, number> = {};
const chCounts: Record<string, number> = {};

RAW_GENERALPROBE_1_CHEM_QUESTIONS.forEach((q, idx) => {
  const sq = GENERALPROBE_1_CHEM_QUESTIONS[idx];
  ansCounts[q.correct_answer] = (ansCounts[q.correct_answer] || 0) + 1;
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
  const ch = sq.chapterId || "unknown";
  chCounts[ch] = (chCounts[ch] || 0) + 1;

  console.log(
    `Q${idx + 1} (${q.id}): [${ch}] ${q.primary_topic} / ${q.subtopic} | Diff: ${q.difficulty} | Ans: ${q.correct_answer}`
  );
  console.log(`   ${q.stem.substring(0, 95)}...`);
});

console.log("\nAnswers:", ansCounts);
console.log("Difficulties:", diffCounts);
console.log("Chapters:", chCounts);
