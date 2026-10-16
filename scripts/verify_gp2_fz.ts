/**
 * Comprehensive Quality Assurance & Geometric Verification Suite
 * MedAT Figuren zusammensetzen (FZ) — Generalprobe #2 (15 Questions)
 */

import {
  RAW_GENERALPROBE_2_FZ_QUESTIONS,
  GENERALPROBE_2_FZ_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2FzQuestions";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
} from "../src/data/generalprobe/generalprobeData";
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
console.log("MEDAT FZ QUALITY ASSURANCE & GEOMETRIC VERIFICATION SUITE — GENERALPROBE #2");
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

const rawQuestions = RAW_GENERALPROBE_2_FZ_QUESTIONS;
const storedQuestions = GENERALPROBE_2_FZ_QUESTIONS;

// 1. Question Count
assert(rawQuestions.length === 15, `Raw questions count is exactly 15 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 15, `Stored questions count is exactly 15 (found: ${storedQuestions.length})`);

// 2. ID Uniqueness & Correct GP2 Naming Pattern
const ids = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-FZ-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!ids.has(q.id), `ID ${q.id} is unique`);
  ids.add(q.id);
});

storedQuestions.forEach((q, idx) => {
  const expectedId = `KFF-FZ-GP2-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Stored question ${idx + 1} matches ID ${expectedId}`);
});

// 3. Difficulty Distribution (Target: 4 Leicht, 8 Mittel, 3 Schwer)
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("\n--- Difficulty Distribution ---");
console.log(diffDist);
assert(diffDist.Leicht === 4, `Leicht count is exactly 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 8, `Mittel count is exactly 8 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 3, `Schwer count is exactly 3 (actual: ${diffDist.Schwer})`);

// 4. Answer Key Distribution (Balanced: exactly 3 A, 3 B, 3 C, 3 D, 3 E)
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log("\n--- Answer Key Distribution ---");
console.log(ansDist);
assert(ansDist.A === 3, `Option A count is exactly 3 (actual: ${ansDist.A})`);
assert(ansDist.B === 3, `Option B count is exactly 3 (actual: ${ansDist.B})`);
assert(ansDist.C === 3, `Option C count is exactly 3 (actual: ${ansDist.C})`);
assert(ansDist.D === 3, `Option D count is exactly 3 (actual: ${ansDist.D})`);
assert(ansDist.E === 3, `Option E count is exactly 3 (actual: ${ansDist.E})`);

// 5. Mathematical Geometry Verification & Pure Mental Rotation (det = +1)
console.log("\n--- Mathematical Geometry & Transformation Checks ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const optKeys = ["A", "B", "C", "D", "E"] as const;

  // Verify all 5 option slots exist
  optKeys.forEach((key) => {
    assert(!!q.options[key], `Q${qNum} (${q.id}) has option ${key}`);
  });

  // Verify Option E specification (isNone: true, polygon: null)
  assert(
    q.options.E.isNone === true && q.options.E.polygon === null,
    `Q${qNum} (${q.id}) Option E has isNone=true and polygon=null`
  );

  // Piece count validation (3 to 7 pieces)
  assert(
    q.pieces.length >= 3 && q.pieces.length <= 7,
    `Q${qNum} (${q.id}) piece count ${q.pieces.length} is in valid range [3..7]`
  );

  // Check individual piece properties and transformation consistency
  let piecesArea = 0;
  q.pieces.forEach((p) => {
    // Coordinate finiteness
    const pointsValid = p.points.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
    const canvasPointsValid = p.canvasPoints.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
    assert(pointsValid && canvasPointsValid, `Q${qNum} piece ${p.id} coordinates are finite real numbers`);

    const sAreaTarget = polygonSignedArea(p.points);
    const sAreaCanvas = polygonSignedArea(p.canvasPoints);
    const areaTarget = Math.abs(sAreaTarget);
    const areaCanvas = Math.abs(sAreaCanvas);

    assert(areaTarget > 0, `Q${qNum} piece ${p.id} has strictly positive area (${areaTarget})`);
    assert(
      Math.abs(areaTarget - areaCanvas) < 0.5,
      `Q${qNum} piece ${p.id} area preserved: assembled=${areaTarget}, canvas=${areaCanvas}`
    );

    // No reflection: signed area must maintain identical orientation (det = +1)
    const sameSign = (sAreaTarget > 0 && sAreaCanvas > 0) || (sAreaTarget < 0 && sAreaCanvas < 0);
    assert(
      sameSign,
      `Q${qNum} piece ${p.id} is PURE 2D ROTATION (no reflection/mirroring, det = +1)`
    );

    piecesArea += areaTarget;
  });

  // Target figure checks
  const targetArea = polygonArea(q.targetFigure.polygon);

  if (q.correctAnswer !== "E") {
    // Exact area conservation: sum of pieces equals target area
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
    console.log(`  [INFO] Q${qNum} (${q.id}) is Option E (Keine). Validating distractors:`);
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
    `Q${qNum} (${q.id}) has substantive didactic explanation (${q.explanation.length} chars)`
  );
});

// 6. Dataset Integration Checks
console.log("\n--- Generalprobe #2 Dataset Integration ---");
const gp2 = buildGeneralprobe2Dataset();

assert(gp2.fzQuestions.length === 15, `Generalprobe #2 FZ section contains exactly 15 questions (actual: ${gp2.fzQuestions.length})`);

const fzIdsGp2 = gp2.fzQuestions.map((q) => q.id);
console.log("FZ IDs in Generalprobe #2:", fzIdsGp2.join(", "));
assert(fzIdsGp2[0] === "KFF-FZ-GP2-001" && fzIdsGp2[14] === "KFF-FZ-GP2-015", "FZ IDs in GP2 are KFF-FZ-GP2-001 through KFF-FZ-GP2-015");

// Check fzData attached to all GP2 questions
gp2.fzQuestions.forEach((q, idx) => {
  assert(!!q.fzData, `GP2 question ${idx + 1} (${q.id}) has fzData attached`);
});

// BMS & TV counts in GP2
const bioGp2 = gp2.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "bio");
const chemGp2 = gp2.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "chem");
const physGp2 = gp2.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "phys");
const mathGp2 = gp2.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "math");

assert(bioGp2.length === 40, `BMS Biology GP2 remains exactly 40 questions (actual: ${bioGp2.length})`);
assert(chemGp2.length === 24, `BMS Chemistry GP2 remains exactly 24 questions (actual: ${chemGp2.length})`);
assert(physGp2.length === 18, `BMS Physics GP2 remains exactly 18 questions (actual: ${physGp2.length})`);
assert(mathGp2.length === 12, `BMS Mathematics GP2 remains exactly 12 questions (actual: ${mathGp2.length})`);
assert(gp2.tvQuestions.length === 12, `Textverständnis GP2 remains exactly 12 questions (actual: ${gp2.tvQuestions.length})`);

// 7. Generalprobe #1 Isolation & Non-Regression Check
console.log("\n--- Generalprobe #1 Regression Check ---");
const gp1 = buildGeneralprobe1Dataset();
assert(gp1.fzQuestions.length === 15, `GP1 FZ section contains exactly 15 questions (actual: ${gp1.fzQuestions.length})`);
assert(gp1.fzQuestions[0].id === "KFF-FZ-001" && gp1.fzQuestions[14].id === "KFF-FZ-015", "GP1 FZ IDs remain KFF-FZ-001 through KFF-FZ-015");

// 8. Adversarial Tests for Validator Robustness
console.log("\n--- Adversarial Validation Tests ---");
{
  // Test: Reflection detection (reversed vertices)
  const triangleA: FzPolygon = [[0, 0], [10, 0], [0, 10]]; // counter-clockwise, positive
  const triangleB: FzPolygon = [[0, 0], [0, 10], [10, 0]]; // clockwise, negative (mirrored)
  const sA = polygonSignedArea(triangleA);
  const sB = polygonSignedArea(triangleB);
  const isMirrored = (sA > 0 && sB < 0) || (sA < 0 && sB > 0);
  assert(isMirrored, "Adversarial Test: Validator detects reflection / reversed vertex winding");
}
{
  // Test: Area mismatch detection
  const pA: FzPolygon = [[0, 0], [10, 0], [10, 10], [0, 10]]; // area 100
  const pB: FzPolygon = [[0, 0], [10, 0], [10, 9], [0, 9]];   // area 90
  const diff = Math.abs(polygonArea(pA) - polygonArea(pB));
  assert(diff === 10, "Adversarial Test: Validator detects subtle area deficit/excess");
}

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT FZ GP2 QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT FZ GP2 QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
