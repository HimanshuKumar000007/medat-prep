const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../src/data/questions/fz/fzSimulation1.ts");
const content = fs.readFileSync(filePath, "utf-8");
const match = content.match(/export const FZ_SIMULATION_1_QUESTIONS: FzQuestionData\[\] = (\[[\s\S]*\]);/);
const questions = JSON.parse(match[1]);

questions.forEach((q, i) => {
  console.log(`========================================`);
  console.log(`Q${i+1} (${q.id}): Correct = ${q.correctAnswer}`);
  console.log(`Explanation:`);
  console.log(q.explanation);
});
