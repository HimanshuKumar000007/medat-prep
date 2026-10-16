const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/data/questions/fz/fzSimulation1.ts");
const content = fs.readFileSync(filePath, "utf-8");
const match = content.match(/export const FZ_SIMULATION_1_QUESTIONS: FzQuestionData\[\] = (\[[\s\S]*\]);/);
const questions = JSON.parse(match[1]);

console.log(`Loaded ${questions.length} questions from fzSimulation1.ts\n`);

questions.forEach((q, i) => {
  console.log(`Q${i + 1} (${q.id}): Correct Answer: ${q.correctAnswer}, Difficulty: ${q.difficulty}, Pieces: ${q.pieces.length}`);
  console.log(`   Assembly steps: ${q.assembly ? q.assembly.length : 0}`);
  if (q.assembly) {
    q.assembly.forEach(a => {
      console.log(`      piece ${a.pieceId}: rot ${a.rotationDeg} deg, trans [${a.translation[0]}, ${a.translation[1]}], isRefl: ${a.isReflection}`);
    });
  }
  console.log(`   Target Area: ${q.targetFigure.area}`);
  let piecesArea = q.pieces.reduce((sum, p) => sum + p.area, 0);
  console.log(`   Pieces Total Area: ${piecesArea}`);
  ["A", "B", "C", "D", "E"].forEach(opt => {
    const o = q.options[opt];
    console.log(`      Option ${opt}: isNone=${!!o.isNone}, area=${o.area}, pts=${o.polygon ? o.polygon.length : 0}`);
  });
  console.log("-------------------------------------------------------------------");
});
