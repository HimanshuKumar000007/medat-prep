import { FZ_SIMULATION_1_QUESTIONS } from "../src/data/questions/fz/fzSimulation1";
import { FZ_SIMULATION_2_QUESTIONS } from "../src/data/questions/fz/fzSimulation2";
import type { FzPolygon } from "../src/data/questions/fz/types";

function polygonArea(pts: FzPolygon): number {
  if (!pts || pts.length < 3) return 0;
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const j = (i + 1) % pts.length;
    a += pts[i][0] * pts[j][1] - pts[j][0] * pts[i][1];
  }
  return Math.abs(a) / 2;
}

console.log("GP1 Targets:");
FZ_SIMULATION_1_QUESTIONS.forEach((q, i) => {
  console.log(`Q${i+1}: area=${polygonArea(q.targetFigure.polygon)}, pts=${JSON.stringify(q.targetFigure.polygon)}`);
});

console.log("\nGP2 Targets:");
FZ_SIMULATION_2_QUESTIONS.forEach((q, i) => {
  console.log(`Q${i+1}: area=${polygonArea(q.targetFigure.polygon)}, pts=${JSON.stringify(q.targetFigure.polygon)}`);
});
