const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../src/data/questions/fz/fzSimulation1.ts");
const content = fs.readFileSync(filePath, "utf-8");
const match = content.match(/export const FZ_SIMULATION_1_QUESTIONS: FzQuestionData\[\] = (\[[\s\S]*\]);/);
const questions = JSON.parse(match[1]);

for (let i = 0; i < 4; i++) {
  const q = questions[i];
  console.log(`Q${i+1} (${q.id}):`);
  console.log("  Pieces:");
  q.pieces.forEach(p => {
    console.log(`    ${p.id}: points=${JSON.stringify(p.points)}, canvasPoints=${JSON.stringify(p.canvasPoints)}`);
  });
  console.log("  Assembly:", JSON.stringify(q.assembly));
}
