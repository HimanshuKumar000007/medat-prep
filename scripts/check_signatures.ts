import { FZ_SIMULATION_1_QUESTIONS } from "../src/data/questions/fz/fzSimulation1";
import { FZ_SIMULATION_2_QUESTIONS } from "../src/data/questions/fz/fzSimulation2";
import { FZ_SIMULATION_3_QUESTIONS } from "../src/data/questions/fz/fzSimulation3";
import type { FzPolygon } from "../src/data/questions/fz/types";

function polygonSignedArea(pts: FzPolygon): number {
  if (!pts || pts.length < 3) return 0;
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const j = (i + 1) % pts.length;
    a += pts[i][0] * pts[j][1] - pts[j][0] * pts[i][1];
  }
  return a / 2;
}

function normalizePolygon(pts: FzPolygon): string {
  if (!pts || pts.length === 0) return "";
  // Compute side lengths and interior angles to create an isometric invariant signature
  const n = pts.length;
  const sideLengths: number[] = [];
  for (let i = 0; i < n; i++) {
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    sideLengths.push(Math.round(len * 10) / 10);
  }
  return `n=${n},sides=[${sideLengths.join(",")}]`;
}

console.log("=== FULL COMPARISON OF TARGET SILHOUETTES ===");

FZ_SIMULATION_3_QUESTIONS.forEach((q3, i) => {
  const sig3 = normalizePolygon(q3.targetFigure.polygon);
  const area3 = Math.abs(polygonSignedArea(q3.targetFigure.polygon));

  FZ_SIMULATION_1_QUESTIONS.forEach((q1, j) => {
    const sig1 = normalizePolygon(q1.targetFigure.polygon);
    const area1 = Math.abs(polygonSignedArea(q1.targetFigure.polygon));
    if (sig3 === sig1 && area3 === area1 && area3 > 150) {
      console.log(`Match between Sim3 Q${i+1} (${q3.id}) and GP1 Q${j+1} (${q1.id}): area=${area3}, sig=${sig3}`);
    }
  });

  FZ_SIMULATION_2_QUESTIONS.forEach((q2, j) => {
    const sig2 = normalizePolygon(q2.targetFigure.polygon);
    const area2 = Math.abs(polygonSignedArea(q2.targetFigure.polygon));
    if (sig3 === sig2 && area3 === area2 && area3 > 150) {
      console.log(`Match between Sim3 Q${i+1} (${q3.id}) and GP2 Q${j+1} (${q2.id}): area=${area3}, sig=${sig3}`);
    }
  });
});
