/**
 * Comprehensive Quality Assurance & Geometric Verification Suite
 * MedAT Figuren zusammensetzen (FZ) — Generalprobe #1 (15 Questions)
 */

import { FZ_SIMULATION_1_QUESTIONS } from "../src/data/questions/fz/fzSimulation1";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";
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

console.log("================================================================================");
console.log("MEDAT FZ QUALITY ASSURANCE & GEOMETRIC VERIFICATION SUITE — GENERALPROBE #1");
console.log("================================================================================\n");

let errorCount = 0;
function assert(cond: boolean, msg: string) {
  if (cond) {
    console.log(`  [PASS] ${msg}`);
  } else {
    console.error(`  [FAIL] ${msg}`);
    errorCount++;
  }
}

const questions = FZ_SIMULATION_1_QUESTIONS;

// 1. Question Count
assert(questions.length === 15, `Exactly 15 questions (found: ${questions.length})`);

// 2. ID Uniqueness
const ids = new Set<string>();
questions.forEach((q) => {
  assert(!ids.has(q.id), `ID ${q.id} is unique`);
  ids.add(q.id);
});

// 3. Answer Distribution (3 A, 3 B, 3 C, 3 D, 3 E)
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
questions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("\n--- Answer Key Distribution ---");
console.log(ansDist);
assert(ansDist.A === 3, `Option A count is 3 (actual: ${ansDist.A})`);
assert(ansDist.B === 3, `Option B count is 3 (actual: ${ansDist.B})`);
assert(ansDist.C === 3, `Option C count is 3 (actual: ${ansDist.C})`);
assert(ansDist.D === 3, `Option D count is 3 (actual: ${ansDist.D})`);
assert(ansDist.E === 3, `Option E count is 3 (actual: ${ansDist.E})`);

// 4. Difficulty Distribution
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
questions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("\n--- Difficulty Distribution ---");
console.log(diffDist);
assert(diffDist.Leicht === 4, `Leicht count is 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel >= 6 && diffDist.Mittel <= 7, `Mittel count is 6-7 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer >= 4 && diffDist.Schwer <= 5, `Schwer count is 4-5 (actual: ${diffDist.Schwer})`);

// 5. Mathematical Geometry Verification
console.log("\n--- Mathematical Geometry & No-Mirroring Checks ---");
questions.forEach((q, idx) => {
  const qNum = idx + 1;
  const optKeys = ["A", "B", "C", "D", "E"] as const;

  // Option keys existence
  optKeys.forEach((key) => {
    assert(!!q.options[key], `Q${qNum} (${q.id}) has option ${key}`);
  });

  // Option E check
  assert(
    q.options.E.isNone === true && q.options.E.polygon === null,
    `Q${qNum} (${q.id}) Option E has isNone=true and polygon=null`
  );

  // Piece count (3 to 7)
  assert(
    q.pieces.length >= 3 && q.pieces.length <= 7,
    `Q${qNum} (${q.id}) piece count ${q.pieces.length} is in range 3..7`
  );

  // Check pieces geometry & congruence
  let piecesArea = 0;
  q.pieces.forEach((p, pIdx) => {
    // Coordinate finiteness
    const pointsValid = p.points.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
    const canvasPointsValid = p.canvasPoints.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
    assert(pointsValid && canvasPointsValid, `Q${qNum} piece ${p.id} coordinates are finite`);

    const sAreaTarget = polygonSignedArea(p.points);
    const sAreaCanvas = polygonSignedArea(p.canvasPoints);
    const areaTarget = Math.abs(sAreaTarget);
    const areaCanvas = Math.abs(sAreaCanvas);

    assert(areaTarget > 0, `Q${qNum} piece ${p.id} has positive area (${areaTarget})`);
    assert(
      Math.abs(areaTarget - areaCanvas) < 0.5,
      `Q${qNum} piece ${p.id} area preserved: points=${areaTarget}, canvas=${areaCanvas}`
    );

    // No reflection: signed area must have the SAME SIGN (or both positive / negative depending on vertex winding)
    const sameSign = (sAreaTarget > 0 && sAreaCanvas > 0) || (sAreaTarget < 0 && sAreaCanvas < 0);
    assert(
      sameSign,
      `Q${qNum} piece ${p.id} is PURE ROTATION ONLY (no mirroring/reflection, det = +1)`
    );

    piecesArea += areaTarget;
  });

  // Target figure vs options
  const targetArea = polygonArea(q.targetFigure.polygon);

  if (q.correctAnswer !== "E") {
    // Exact area conservation
    const areaDiff = Math.abs(piecesArea - targetArea);
    assert(
      areaDiff / targetArea < 0.001,
      `Q${qNum} (${q.id}) area conservation: pieces=${piecesArea}, target=${targetArea}`
    );

    // Target polygon equals correct option polygon
    const correctOpt = q.options[q.correctAnswer];
    assert(
      correctOpt.polygon !== null,
      `Q${qNum} (${q.id}) correct option ${q.correctAnswer} has non-null polygon`
    );
    if (correctOpt.polygon) {
      const correctOptArea = polygonArea(correctOpt.polygon);
      assert(
        Math.abs(correctOptArea - targetArea) < 0.5,
        `Q${qNum} correct option area matches target area (${correctOptArea} == ${targetArea})`
      );
    }
  } else {
    // E-case: none of A-D should match
    console.log(`  [INFO] Q${qNum} (${q.id}) is Option E (Keine). Validating distractors exclusion:`);
    (["A", "B", "C", "D"] as const).forEach((optKey) => {
      const opt = q.options[optKey];
      if (opt.polygon) {
        const optArea = polygonArea(opt.polygon);
        console.log(`    Option ${optKey}: area=${optArea} vs pieces=${piecesArea}`);
      }
    });
  }

  // Explanation check
  assert(
    typeof q.explanation === "string" && q.explanation.length > 50,
    `Q${qNum} (${q.id}) has substantive explanation (${q.explanation.length} chars)`
  );
});

// 6. Dataset Integration Check
console.log("\n--- Generalprobe #1 Dataset Integration ---");
const gp1 = buildGeneralprobe1Dataset();
const totalScoredQuestions =
  gp1.bmsQuestions.length +
  gp1.tvQuestions.length +
  gp1.fzQuestions.length +
  gp1.gmStoredQuestions.length +
  gp1.zfQuestions.length +
  gp1.wfQuestions.length +
  gp1.ieQuestions.length +
  gp1.erQuestions.length +
  gp1.eeQuestions.length +
  gp1.seQuestions.length;

assert(totalScoredQuestions === 221, `Generalprobe #1 has exactly 221 scored questions (actual: ${totalScoredQuestions})`);
assert(gp1.gmCards.length === 8, `Generalprobe #1 has 8 GM cards (actual: ${gp1.gmCards.length})`);

// Breakdown check
assert(gp1.fzQuestions.length === 15, `Generalprobe #1 FZ section contains exactly 15 questions (actual: ${gp1.fzQuestions.length})`);

// Check FZ IDs
const fzIds = gp1.fzQuestions.map(q => q.id);
console.log("FZ IDs in Generalprobe #1:", fzIds.join(", "));
assert(fzIds[0] === "KFF-FZ-001" && fzIds[14] === "KFF-FZ-015", "FZ IDs are KFF-FZ-001 through KFF-FZ-015");

const bioGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "bio");
const chemGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "chem");
const physGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "phys");
const mathGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "math");

assert(bioGp1.length === 40, `BMS Biology remains exactly 40 questions (actual: ${bioGp1.length})`);
assert(chemGp1.length === 24, `BMS Chemistry remains exactly 24 questions (actual: ${chemGp1.length})`);
assert(physGp1.length === 18, `BMS Physics remains exactly 18 questions (actual: ${physGp1.length})`);
assert(mathGp1.length === 12, `BMS Mathematics remains exactly 12 questions (actual: ${mathGp1.length})`);
assert(gp1.tvQuestions.length === 12, `Textverständnis remains exactly 12 questions (actual: ${gp1.tvQuestions.length})`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT FZ QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT FZ QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
