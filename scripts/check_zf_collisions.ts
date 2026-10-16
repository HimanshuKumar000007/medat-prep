import { RAW_GENERALPROBE_1_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe1ZfQuestions";
import { RAW_GENERALPROBE_2_ZF_QUESTIONS } from "../src/data/generalprobe/generalprobe2ZfQuestions";

const gp3Seqs = [
  [8, 17, 26, 35, 44, 53, 62],
  [59, 53, 47, 41, 35, 29, 23],
  [4, 7, 13, 22, 34, 49, 67],
  [6, 12, 9, 18, 15, 30, 27],
  [92, 75, 60, 47, 36, 27, 20],
  [14, 22, 17, 25, 20, 28, 23],
  [1, 4, 5, 9, 14, 23, 37],
  [6, 5, 14, 10, 22, 20, 30],
  [3, 8, 16, 13, 18, 36, 33],
  [64, 7, 32, 20, 16, 33, 8],
];

let collisions = 0;
gp3Seqs.forEach((s3, i) => {
  const str3 = s3.join(",");
  RAW_GENERALPROBE_1_ZF_QUESTIONS.forEach((q1, j) => {
    if (q1.sequence.join(",") === str3) {
      console.error(`Collision with GP1 Q${j+1}:`, str3);
      collisions++;
    }
  });

  RAW_GENERALPROBE_2_ZF_QUESTIONS.forEach((q2, j) => {
    if (q2.sequence.join(",") === str3) {
      console.error(`Collision with GP2 Q${j+1}:`, str3);
      collisions++;
    }
  });
});

console.log("Collisions found:", collisions);
