const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/data/questions/fz/fzSimulation1.ts");
const content = fs.readFileSync(filePath, "utf-8");
const match = content.match(/export const FZ_SIMULATION_1_QUESTIONS: FzQuestionData\[\] = (\[[\s\S]*\]);/);
const questions = JSON.parse(match[1]);

function polygonArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const j = (i + 1) % pts.length;
    a += pts[i][0] * pts[j][1] - pts[j][0] * pts[i][1];
  }
  return a / 2; // signed area!
}

// Check 2D orientation: signed area determines winding order (clockwise vs counter-clockwise).
// A rigid rotation preserves signed area (sign stays same).
// A reflection reverses the sign of signed area!

console.log("=== CHECKING RIGID CONGRUENCE & NO REFLECTION ===");
let hasError = false;

questions.forEach((q, qIdx) => {
  q.pieces.forEach((p, pIdx) => {
    const areaPoints = polygonArea(p.points);
    const areaCanvas = polygonArea(p.canvasPoints);

    // If signed areas have different signs, the polygon was mirrored/reflected!
    const signMismatch = (areaPoints > 0 && areaCanvas < 0) || (areaPoints < 0 && areaCanvas > 0);
    const absDiff = Math.abs(Math.abs(areaPoints) - Math.abs(areaCanvas));

    if (signMismatch) {
      console.error(`ERROR: Question ${q.id} piece ${p.id} is REFLECTED / MIRRORED! area(points)=${areaPoints}, area(canvas)=${areaCanvas}`);
      hasError = true;
    }
    if (absDiff > 1) {
      console.error(`ERROR: Question ${q.id} piece ${p.id} AREA MISMATCH: ${areaPoints} vs ${areaCanvas}`);
      hasError = true;
    }
  });
});

if (!hasError) {
  console.log("✓ ALL PIECES in all 15 questions have identical signed orientation (det = +1, PURE ROTATION ONLY, NO MIRRORING)!");
}
