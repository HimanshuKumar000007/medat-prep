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

// ─── Q11 TEST (Key: B, Area: 5550) ───
const q11Pieces: { id: string; points: FzPolygon; canvasPoints: FzPolygon }[] = [
  {
    id: "p1",
    points: [[40, 40], [90, 40], [40, 70]], // triangle 50x30, area 750
    // Canvas: rotated 90 deg counter-clockwise: (x, y) -> (-y, x) -> shifted to (30, 30)
    canvasPoints: [[20, 35], [50, 85], [20, 85]],
  },
  {
    id: "p2",
    points: [[0, 40], [40, 40], [40, 70], [0, 70]], // rect 40x30, area 1200
    canvasPoints: [[80, 40], [120, 40], [120, 70], [80, 70]],
  },
  {
    id: "p3",
    points: [[0, 0], [40, 0], [40, 40], [0, 40]], // square 40x40, area 1600
    canvasPoints: [[150, 35], [190, 35], [190, 75], [150, 75]],
  },
  {
    id: "p4",
    points: [[40, 0], [90, 0], [90, 40]], // triangle 50x40, area 1000
    // Canvas: rotated 90 deg clockwise: (x, y) -> (y, -x)
    canvasPoints: [[225, 40], [265, 40], [225, 90]],
  },
  {
    id: "p5",
    points: [[40, 0], [90, 40], [40, 40]], // triangle 50x40, area 1000
    canvasPoints: [[310, 40], [360, 40], [310, 80]],
  },
];

const q11Target: FzPolygon = [[0, 0], [90, 0], [90, 40], [40, 70], [0, 70]];

console.log("=== TESTING Q11 ===");
let sum11 = 0;
q11Pieces.forEach(p => {
  const saT = polygonSignedArea(p.points);
  const saC = polygonSignedArea(p.canvasPoints);
  const aT = Math.abs(saT);
  const aC = Math.abs(saC);
  console.log(`Piece ${p.id}: targetArea=${aT}, canvasArea=${aC}, sameSign=${(saT > 0 && saC > 0) || (saT < 0 && saC < 0)}`);
  sum11 += aT;
});
console.log(`Q11 Sum pieces: ${sum11}, Target area: ${polygonArea(q11Target)}`);


// ─── Q15 TEST (Key: A, Area: 4900) ───
const q15Pieces: { id: string; points: FzPolygon; canvasPoints: FzPolygon }[] = [
  {
    id: "p1",
    points: [[0, 0], [30, 0], [30, 70]], // triangle 30x70, area 1050
    canvasPoints: [[20, 25], [50, 25], [50, 95]],
  },
  {
    id: "p2",
    points: [[70, 0], [100, 0], [70, 70]], // triangle 30x70, area 1050
    // Canvas: rotated 90 deg: (dx=70, dy=30)
    canvasPoints: [[140, 25], [140, 55], [70, 55]],
  },
  {
    id: "p3",
    points: [[30, 35], [70, 35], [70, 70], [30, 70]], // rect 40x35, area 1400
    canvasPoints: [[170, 40], [210, 40], [210, 75], [170, 75]],
  },
  {
    id: "p4",
    points: [[30, 0], [70, 0], [70, 35]], // triangle 40x35, area 700
    canvasPoints: [[240, 40], [280, 40], [280, 75]],
  },
  {
    id: "p5",
    points: [[30, 0], [70, 35], [30, 35]], // triangle 40x35, area 700
    canvasPoints: [[315, 40], [355, 75], [315, 75]],
  },
];

const q15Target: FzPolygon = [[0, 0], [100, 0], [70, 70], [30, 70]];

console.log("\n=== TESTING Q15 ===");
let sum15 = 0;
q15Pieces.forEach(p => {
  const saT = polygonSignedArea(p.points);
  const saC = polygonSignedArea(p.canvasPoints);
  const aT = Math.abs(saT);
  const aC = Math.abs(saC);
  console.log(`Piece ${p.id}: targetArea=${aT}, canvasArea=${aC}, sameSign=${(saT > 0 && saC > 0) || (saT < 0 && saC < 0)}`);
  sum15 += aT;
});
console.log(`Q15 Sum pieces: ${sum15}, Target area: ${polygonArea(q15Target)}`);
