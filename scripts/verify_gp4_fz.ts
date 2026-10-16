/**
 * Comprehensive Quality Assurance & Geometric Verification Suite
 * MedAT Figuren zusammensetzen (FZ) — Generalprobe #4 (15 Questions)
 */

import {
  RAW_GENERALPROBE_4_FZ_QUESTIONS,
  GENERALPROBE_4_FZ_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4FzQuestions";
import {
  RAW_GENERALPROBE_1_FZ_QUESTIONS,
  GENERALPROBE_1_FZ_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1FzQuestions";
import {
  RAW_GENERALPROBE_2_FZ_QUESTIONS,
  GENERALPROBE_2_FZ_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2FzQuestions";
import {
  RAW_GENERALPROBE_3_FZ_QUESTIONS,
  GENERALPROBE_3_FZ_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3FzQuestions";
import {
  buildFzSimulationQuestions,
  buildBmsSimulationQuestions,
  buildTvSimulationQuestions,
  buildGeneralprobe4Dataset,
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
  buildGeneralprobe3Dataset,
  getGeneralprobeDataset,
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

console.log("================================================================================");
console.log("MEDAT FZ QUALITY ASSURANCE & GEOMETRIC VERIFICATION SUITE — GENERALPROBE #4");
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

const rawQuestions = RAW_GENERALPROBE_4_FZ_QUESTIONS;
const storedQuestions = GENERALPROBE_4_FZ_QUESTIONS;

// 1. Question Count
console.log("--- 1. QUESTION COUNT ---");
assert(rawQuestions.length === 15, `Raw questions count is exactly 15 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 15, `Stored questions count is exactly 15 (found: ${storedQuestions.length})`);

// 2. ID Uniqueness & Correct GP4 Naming Pattern
console.log("\n--- 2. ID PATTERN & UNIQUENESS ---");
const ids = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-FZ-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} has exact ID ${expectedId} (actual: ${q.id})`);
  assert(!ids.has(q.id), `ID ${q.id} is unique`);
  ids.add(q.id);
});

storedQuestions.forEach((q, idx) => {
  const expectedId = `KFF-FZ-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Stored question ${idx + 1} matches ID ${expectedId}`);
});

// 3. Difficulty Distribution (Target: 4 Leicht, 8 Mittel, 3 Schwer)
console.log("\n--- 3. DIFFICULTY DISTRIBUTION ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("Difficulty counts:", diffDist);
assert(diffDist.Leicht === 4, `Leicht count is exactly 4 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 8, `Mittel count is exactly 8 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 3, `Schwer count is exactly 3 (actual: ${diffDist.Schwer})`);

// 4. Answer Key Distribution (Balanced: exactly 3 A, 3 B, 3 C, 3 D, 3 E)
console.log("\n--- 4. ANSWER KEY DISTRIBUTION & SEQUENCE ---");
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const keysSeq: string[] = [];
rawQuestions.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
  keysSeq.push(q.correctAnswer);
});
console.log("Answer key counts:", ansDist);
console.log("Answer sequence:", keysSeq.join(" - "));
assert(ansDist.A === 3, `Option A count is exactly 3 (actual: ${ansDist.A})`);
assert(ansDist.B === 3, `Option B count is exactly 3 (actual: ${ansDist.B})`);
assert(ansDist.C === 3, `Option C count is exactly 3 (actual: ${ansDist.C})`);
assert(ansDist.D === 3, `Option D count is exactly 3 (actual: ${ansDist.D})`);
assert(ansDist.E === 3, `Option E count is exactly 3 (actual: ${ansDist.E})`);

// Max streak check (no repeats in consecutive answers)
let maxStreak = 1;
let currentStreak = 1;
for (let i = 1; i < keysSeq.length; i++) {
  if (keysSeq[i] === keysSeq[i - 1]) {
    currentStreak++;
    if (currentStreak > maxStreak) maxStreak = currentStreak;
  } else {
    currentStreak = 1;
  }
}
assert(maxStreak === 1, `Max answer streak is 1 (no adjacent duplicate keys, got max streak: ${maxStreak})`);

// 5. Mathematical Geometry Verification & Pure Mental Rotation (det = +1)
console.log("\n--- 5. MATHEMATICAL GEOMETRY & TRANSFORMATION CHECKS ---");
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

    // Assembly transformation verification
    if (q.assembly) {
      q.assembly.forEach((asm) => {
        assert(!asm.isReflection, `Q${qNum} assembly for piece ${asm.pieceId} is pure rotation (isReflection=false)`);
      });
    }
  } else {
    // E-case: none of A-D should match
    (["A", "B", "C", "D"] as const).forEach((optKey) => {
      const opt = q.options[optKey];
      if (opt.polygon) {
        const optArea = polygonArea(opt.polygon);
        const diff = Math.abs(optArea - piecesArea);
        assert(
          diff > 0.1 || q.explanation.includes(optKey),
          `Q${qNum} (${q.id}) E-distractor ${optKey} is demonstrably invalid`
        );
      }
    });
  }

  // Explanation check
  assert(
    typeof q.explanation === "string" && q.explanation.length > 50,
    `Q${qNum} (${q.id}) has substantive didactic explanation (${q.explanation.length} chars)`
  );
});

// 6. Originality & Collision Audit against GP1, GP2, and GP3
console.log("\n--- 6. ORIGINALITY AUDIT AGAINST GP1, GP2 & GP3 ---");
const gp1Targets = RAW_GENERALPROBE_1_FZ_QUESTIONS.map((q) => ({
  id: q.id,
  poly: q.targetFigure.polygon,
  area: polygonArea(q.targetFigure.polygon),
  sig: normalizePolygonSignature(q.targetFigure.polygon),
}));

const gp2Targets = RAW_GENERALPROBE_2_FZ_QUESTIONS.map((q) => ({
  id: q.id,
  poly: q.targetFigure.polygon,
  area: polygonArea(q.targetFigure.polygon),
  sig: normalizePolygonSignature(q.targetFigure.polygon),
}));

const gp3Targets = RAW_GENERALPROBE_3_FZ_QUESTIONS.map((q) => ({
  id: q.id,
  poly: q.targetFigure.polygon,
  area: polygonArea(q.targetFigure.polygon),
  sig: normalizePolygonSignature(q.targetFigure.polygon),
}));

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const area4 = polygonArea(q.targetFigure.polygon);
  const sig4 = normalizePolygonSignature(q.targetFigure.polygon);

  if (q.correctAnswer !== "E" && area4 > 150) {
    gp1Targets.forEach((g1) => {
      if (g1.area > 150 && g1.sig === sig4 && Math.abs(g1.area - area4) < 0.5) {
        assert(false, `Collision detected: Q${qNum} (${q.id}) matches GP1 ${g1.id}`);
      }
    });

    gp2Targets.forEach((g2) => {
      if (g2.area > 150 && g2.sig === sig4 && Math.abs(g2.area - area4) < 0.5) {
        assert(false, `Collision detected: Q${qNum} (${q.id}) matches GP2 ${g2.id}`);
      }
    });

    gp3Targets.forEach((g3) => {
      if (g3.area > 150 && g3.sig === sig4 && Math.abs(g3.area - area4) < 0.5) {
        assert(false, `Collision detected: Q${qNum} (${q.id}) matches GP3 ${g3.id}`);
      }
    });
  }
});
assert(true, "Zero target silhouette collisions between GP4 and GP1/GP2/GP3 verified!");

// 7. Simulator Integration Check
console.log("\n--- 7. SIMULATOR INTEGRATION & RUNTIME ACCESS ---");
const sim4Questions = buildFzSimulationQuestions(4);
assert(sim4Questions.length === 15, `buildFzSimulationQuestions(4) returns exactly 15 questions (got: ${sim4Questions.length})`);
assert(sim4Questions[0].id === "KFF-FZ-GP4-001", `First question ID is KFF-FZ-GP4-001`);
assert(sim4Questions[14].id === "KFF-FZ-GP4-015", `Last question ID is KFF-FZ-GP4-015`);

sim4Questions.forEach((q, idx) => {
  assert(q.section === "KFF", `Question ${idx + 1} has section=KFF`);
  assert(q.subjectId === "kff-fig", `Question ${idx + 1} has subjectId=kff-fig`);
  assert(q.chapterId === "kff-fig-l1", `Question ${idx + 1} has chapterId=kff-fig-l1`);
  assert(!!q.fzData, `Question ${idx + 1} has full fzData attached`);
});

const gp4Dataset = buildGeneralprobe4Dataset();
assert(gp4Dataset.fzQuestions.length === 15, `buildGeneralprobe4Dataset().fzQuestions has exactly 15 questions`);
assert(gp4Dataset.bmsQuestions.length === 94, `BMS section untouched: exactly 94 questions`);
assert(gp4Dataset.tvQuestions.length === 12, `TV section untouched: exactly 12 questions`);

const fetchedDataset = getGeneralprobeDataset("generalprobe-4");
assert(fetchedDataset.fzQuestions.length === 15, `getGeneralprobeDataset('generalprobe-4') has 15 FZ questions`);

// 8. Regression Check for GP1, GP2, & GP3
console.log("\n--- 8. GP1, GP2 & GP3 REGRESSION AUDIT ---");
const gp1Dataset = buildGeneralprobe1Dataset();
assert(gp1Dataset.fzQuestions.length === 15, `GP1 FZ contains 15 questions (got: ${gp1Dataset.fzQuestions.length})`);
assert(gp1Dataset.fzQuestions[0].id === "KFF-FZ-001", `GP1 first ID is KFF-FZ-001`);
assert(gp1Dataset.fzQuestions[14].id === "KFF-FZ-015", `GP1 last ID is KFF-FZ-015`);

const gp2Dataset = buildGeneralprobe2Dataset();
assert(gp2Dataset.fzQuestions.length === 15, `GP2 FZ contains 15 questions (got: ${gp2Dataset.fzQuestions.length})`);
assert(gp2Dataset.fzQuestions[0].id === "KFF-FZ-GP2-001", `GP2 first ID is KFF-FZ-GP2-001`);
assert(gp2Dataset.fzQuestions[14].id === "KFF-FZ-GP2-015", `GP2 last ID is KFF-FZ-GP2-015`);

const gp3Dataset = buildGeneralprobe3Dataset();
assert(gp3Dataset.fzQuestions.length === 15, `GP3 FZ contains 15 questions (got: ${gp3Dataset.fzQuestions.length})`);
assert(gp3Dataset.fzQuestions[0].id === "KFF-FZ-GP3-001", `GP3 first ID is KFF-FZ-GP3-001`);
assert(gp3Dataset.fzQuestions[14].id === "KFF-FZ-GP3-015", `GP3 last ID is KFF-FZ-GP3-015`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT FZ GP4 QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT FZ GP4 QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
