import { FZ_SIMULATION_1_QUESTIONS } from "../src/data/questions/fz/fzSimulation1";
import { FZ_SIMULATION_2_QUESTIONS } from "../src/data/questions/fz/fzSimulation2";
import { FZ_SIMULATION_3_QUESTIONS } from "../src/data/questions/fz/fzSimulation3";
import type { FzPolygon, FzPiece } from "../src/data/questions/fz/types";

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

console.log("================================================================================");
console.log("DEEP GEOMETRIC AUDIT OF FZ SIMULATION 3");
console.log("================================================================================\n");

let errors = 0;

FZ_SIMULATION_3_QUESTIONS.forEach((q, idx) => {
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
console.log("ORIGINALITY AUDIT AGAINST GP1 & GP2");
console.log("================================================================================\n");

// Check targetFigure similarities and piece similarities
const gp1Targets = FZ_SIMULATION_1_QUESTIONS.map(q => ({ id: q.id, poly: q.targetFigure.polygon, area: polygonArea(q.targetFigure.polygon), shape: q.metadata?.shapeFamily }));
const gp2Targets = FZ_SIMULATION_2_QUESTIONS.map(q => ({ id: q.id, poly: q.targetFigure.polygon, area: polygonArea(q.targetFigure.polygon), shape: q.metadata?.shapeFamily }));

FZ_SIMULATION_3_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  const area3 = polygonArea(q.targetFigure.polygon);
  const shape3 = q.metadata?.shapeFamily;

  // Check if any target in GP1 or GP2 has identical vertices
  gp1Targets.forEach(g1 => {
    if (JSON.stringify(g1.poly) === JSON.stringify(q.targetFigure.polygon)) {
      console.warn(`  [COLLISION] Q${qNum} (${q.id}) target matches GP1 ${g1.id}`);
      errors++;
    }
  });

  gp2Targets.forEach(g2 => {
    if (JSON.stringify(g2.poly) === JSON.stringify(q.targetFigure.polygon)) {
      console.warn(`  [COLLISION] Q${qNum} (${q.id}) target matches GP2 ${g2.id}`);
      errors++;
    }
  });
});

console.log(`\nAudit completed with ${errors} errors.`);
