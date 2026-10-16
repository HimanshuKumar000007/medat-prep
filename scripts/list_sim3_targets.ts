import { FZ_SIMULATION_3_QUESTIONS } from "../src/data/questions/fz/fzSimulation3";
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

console.log("Sim 3 Targets:");
FZ_SIMULATION_3_QUESTIONS.forEach((q, i) => {
  console.log(`Q${i+1} (${q.id}): key=${q.correctAnswer}, area=${polygonArea(q.targetFigure.polygon)}, shape=${q.metadata?.shapeFamily}, pts=${JSON.stringify(q.targetFigure.polygon)}`);
});
