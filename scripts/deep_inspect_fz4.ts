import { FZ_SIMULATION_1_QUESTIONS } from "../src/data/questions/fz/fzSimulation1";
import { FZ_SIMULATION_2_QUESTIONS } from "../src/data/questions/fz/fzSimulation2";
import { FZ_SIMULATION_3_QUESTIONS } from "../src/data/questions/fz/fzSimulation3";
import { FZ_SIMULATION_4_QUESTIONS } from "../src/data/questions/fz/fzSimulation4";
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

function polygonArea(pts: FzPolygon): number {
  return Math.abs(polygonSignedArea(pts));
}

function normalizePolygonSignature(pts: FzPolygon): string {
  if (!pts || pts.length === 0) return "";
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

import { RAW_GENERALPROBE_1_FZ_QUESTIONS } from "../src/data/generalprobe/generalprobe1FzQuestions";
import { RAW_GENERALPROBE_2_FZ_QUESTIONS } from "../src/data/generalprobe/generalprobe2FzQuestions";
import { RAW_GENERALPROBE_3_FZ_QUESTIONS } from "../src/data/generalprobe/generalprobe3FzQuestions";

console.log('GP1 keys:', RAW_GENERALPROBE_1_FZ_QUESTIONS.map(q => q.correctAnswer).join(', '));
console.log('GP2 keys:', RAW_GENERALPROBE_2_FZ_QUESTIONS.map(q => q.correctAnswer).join(', '));
console.log('GP3 keys:', RAW_GENERALPROBE_3_FZ_QUESTIONS.map(q => q.correctAnswer).join(', '));
console.log('Sim4 keys:', FZ_SIMULATION_4_QUESTIONS.map(q => q.correctAnswer).join(', '));

let errors = 0;

console.log(`FZ_SIMULATION_4_QUESTIONS length: ${FZ_SIMULATION_4_QUESTIONS.length}`);

FZ_SIMULATION_4_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  console.log(`\n--- Q${qNum}: ${q.id} (${q.metadata?.shapeFamily || 'FZ'}) ---`);
  console.log(`Difficulty: ${q.difficulty}, Correct Answer: ${q.correctAnswer}, Pieces: ${q.pieces.length}`);

  // Check pieces
  let totalPieceArea = 0;
  q.pieces.forEach((p, pIdx) => {
    const sTarget = polygonSignedArea(p.points);
    const sCanvas = polygonSignedArea(p.canvasPoints);
    const aTarget = Math.abs(sTarget);
    const aCanvas = Math.abs(sCanvas);

    // Orientation check (det = +1)
    const sameSign = (sTarget > 0 && sCanvas > 0) || (sTarget < 0 && sCanvas < 0);
    if (!sameSign) {
      console.error(`  [FAIL] Piece ${p.id} (P${pIdx+1}) has mirrored orientation! targetSign=${Math.sign(sTarget)}, canvasSign=${Math.sign(sCanvas)}`);
      errors++;
    }

    if (Math.abs(aTarget - aCanvas) > 0.5) {
      console.error(`  [FAIL] Piece ${p.id} area mismatch: target=${aTarget}, canvas=${aCanvas}`);
      errors++;
    }

    totalPieceArea += aTarget;
  });

  const targetArea = polygonArea(q.targetFigure.polygon);
  console.log(`  Total piece area: ${totalPieceArea}, Target figure area: ${targetArea}`);

  if (q.correctAnswer !== "E") {
    const diff = Math.abs(totalPieceArea - targetArea);
    if (diff > 0.5) {
      console.error(`  [FAIL] Piece area sum does not match target figure! diff=${diff}`);
      errors++;
    } else {
      console.log(`  [PASS] Exact area conservation satisfied (diff=${diff.toFixed(2)})`);
    }

    const correctOpt = q.options[q.correctAnswer];
    if (!correctOpt || !correctOpt.polygon) {
      console.error(`  [FAIL] Correct option ${q.correctAnswer} has no polygon!`);
      errors++;
    } else {
      const optArea = polygonArea(correctOpt.polygon);
      if (Math.abs(optArea - targetArea) > 0.5) {
        console.error(`  [FAIL] Correct option area (${optArea}) does not match target (${targetArea})!`);
        errors++;
      } else {
        console.log(`  [PASS] Correct option ${q.correctAnswer} polygon area matches target.`);
      }
    }
  } else {
    console.log(`  [INFO] Question is Option E (Keine). Validating distractors A-D:`);
    (["A", "B", "C", "D"] as const).forEach((key) => {
      const opt = q.options[key];
      if (opt.polygon) {
        const optArea = polygonArea(opt.polygon);
        console.log(`    Option ${key}: area=${optArea} vs target=${targetArea} (areaDiff=${(optArea - targetArea).toFixed(1)})`);
      }
    });
  }

  // Check assembly metadata
  if (q.assembly) {
    q.assembly.forEach((asm) => {
      if (asm.isReflection) {
        console.error(`  [FAIL] Assembly metadata specifies reflection for piece ${asm.pieceId}`);
        errors++;
      }
    });
  }
});

console.log("\n================================================================================");
console.log("ORIGINALITY AUDIT AGAINST GP1, GP2, & GP3");
console.log("================================================================================\n");

const gp1Targets = FZ_SIMULATION_1_QUESTIONS.map(q => ({ id: q.id, poly: q.targetFigure.polygon, area: polygonArea(q.targetFigure.polygon), sig: normalizePolygonSignature(q.targetFigure.polygon) }));
const gp2Targets = FZ_SIMULATION_2_QUESTIONS.map(q => ({ id: q.id, poly: q.targetFigure.polygon, area: polygonArea(q.targetFigure.polygon), sig: normalizePolygonSignature(q.targetFigure.polygon) }));
const gp3Targets = FZ_SIMULATION_3_QUESTIONS.map(q => ({ id: q.id, poly: q.targetFigure.polygon, area: polygonArea(q.targetFigure.polygon), sig: normalizePolygonSignature(q.targetFigure.polygon) }));

FZ_SIMULATION_4_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  const area4 = polygonArea(q.targetFigure.polygon);
  const sig4 = normalizePolygonSignature(q.targetFigure.polygon);

  gp1Targets.forEach(g1 => {
    if (g1.area > 50 && g1.sig === sig4 && Math.abs(g1.area - area4) < 0.5) {
      console.warn(`  [COLLISION GP1] Q${qNum} (${q.id}) target matches GP1 ${g1.id}`);
      errors++;
    }
  });

  gp2Targets.forEach(g2 => {
    if (g2.area > 50 && g2.sig === sig4 && Math.abs(g2.area - area4) < 0.5) {
      console.warn(`  [COLLISION GP2] Q${qNum} (${q.id}) target matches GP2 ${g2.id}`);
      errors++;
    }
  });

  gp3Targets.forEach(g3 => {
    if (g3.area > 50 && g3.sig === sig4 && Math.abs(g3.area - area4) < 0.5) {
      console.warn(`  [COLLISION GP3] Q${qNum} (${q.id}) target matches GP3 ${g3.id}`);
      errors++;
    }
  });
});

console.log(`\nDeep audit completed with ${errors} errors.`);
