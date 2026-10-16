const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/data/questions/fz/fzSimulation1.ts");
const content = fs.readFileSync(filePath, "utf-8");
const match = content.match(/export const FZ_SIMULATION_1_QUESTIONS: FzQuestionData\[\] = (\[[\s\S]*\]);/);
const questions = JSON.parse(match[1]);

function polygonArea(pts) {
  if (!pts || pts.length < 3) return 0;
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const j = (i + 1) % pts.length;
    a += pts[i][0] * pts[j][1] - pts[j][0] * pts[i][1];
  }
  return Math.abs(a) / 2;
}

console.log("Detailed Analysis of 15 FZ Questions:");
questions.forEach((q, i) => {
  console.log(`\n==================================================`);
  console.log(`Question ${i + 1} (${q.id}) | Difficulty: ${q.difficulty} | Correct: ${q.correctAnswer}`);
  console.log(`Target Figure Area: ${q.targetFigure.area}`);
  console.log(`Pieces (${q.pieces.length}):`);
  let sumArea = 0;
  q.pieces.forEach((p, pi) => {
    const a = polygonArea(p.points);
    sumArea += a;
    console.log(`  Piece ${p.id}: ${p.points.length} vertices, area=${a}`);
  });
  console.log(`Total Pieces Area: ${sumArea} (Difference vs Target: ${sumArea - q.targetFigure.area})`);
  
  console.log(`Options:`);
  ["A", "B", "C", "D", "E"].forEach(opt => {
    const o = q.options[opt];
    if (o.isNone) {
      console.log(`  Option ${opt}: [None of the above]`);
    } else {
      const a = polygonArea(o.polygon);
      console.log(`  Option ${opt}: ${o.polygon ? o.polygon.length : 0} vertices, area=${a}, polygon=${JSON.stringify(o.polygon)}`);
    }
  });
});
