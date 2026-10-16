const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../src/data/questions/fz/fzSimulation1.ts");
const content = fs.readFileSync(filePath, "utf-8");
const match = content.match(/export const FZ_SIMULATION_1_QUESTIONS: FzQuestionData\[\] = (\[[\s\S]*\]);/);
const questions = JSON.parse(match[1]);

for (let i = 0; i < 4; i++) {
  const q = questions[i];
  console.log(`\nQ${i+1} Target Area: ${q.targetFigure.area}, Pieces Sum: ${q.pieces.reduce((s,p)=>s+p.area, 0)}`);
  ["A","B","C","D","E"].forEach(opt => {
    const o = q.options[opt];
    console.log(`  Opt ${opt}: area=${o.area}, poly=${JSON.stringify(o.polygon)}`);
  });
}
