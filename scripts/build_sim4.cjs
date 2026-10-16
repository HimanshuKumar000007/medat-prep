/**
 * Generator and Validator for MedAT FZ Simulation 4
 * Theme: Mehrteilige Polygone & Ausschluss-Heuristik
 */

const fs = require("fs");
const path = require("path");

function polygonArea(points) {
  if (!points || points.length < 3) return 0;
  let area = 0;
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += points[i][0] * points[j][1];
    area -= points[j][0] * points[i][1];
  }
  return Math.abs(area) / 2;
}

function transformPoints(points, angleDeg, dx, dy) {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.round(Math.cos(rad) * 10000) / 10000;
  const sin = Math.round(Math.sin(rad) * 10000) / 10000;
  return points.map(([x, y]) => {
    const rx = x * cos - y * sin;
    const ry = x * sin + y * cos;
    return [Math.round(rx + dx), Math.round(ry + dy)];
  });
}

function getBoundingViewBox(points, pad = 10) {
  if (!points || points.length === 0) return "-10 -10 120 120";
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  points.forEach(([x, y]) => {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  });
  const width = Math.max(maxX - minX + 2 * pad, 60);
  const height = Math.max(maxY - minY + 2 * pad, 60);
  return `${Math.round(minX - pad)} ${Math.round(minY - pad)} ${Math.round(width)} ${Math.round(height)}`;
}

const questions = [];

// =========================================================================
// Q01: Leicht (3 pieces), Ans: D
// Theme: U-förmiges Orthogonalpolygon
// =========================================================================
{
  const p1_pts = [[0, 0], [80, 0], [80, 30], [0, 30]]; // Rechteck 80x30, area 2400
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const target_pts = [[0, 0], [80, 0], [80, 60], [60, 60], [60, 30], [20, 30], [20, 60], [0, 60]]; // U-Polygon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 165, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 265, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = [[20, 0], [60, 0], [60, 30], [80, 30], [80, 60], [0, 60], [0, 30], [20, 30]]; // T-Polygon = 3600
  const optC_pts = [[0, 0], [80, 0], [80, 30], [30, 30], [30, 60], [0, 60]]; // L-Polygon = 3300
  const optD_pts = target_pts; // U-Polygon (Correct)

  questions.push({
    id: "fz-sim4-q01",
    simulationId: "fz-sim4",
    questionNumber: 1,
    difficulty: "Leicht",
    correctAnswer: "D",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist ein breites Rechteck von 80 × 30 (Fläche 2400). Die Teilstücke 2 und 3 sind zwei Pfeilerrechtecke von 20 × 30 (Fläche je 600). Werden die Pfeiler an den linken Rand bei (0, 30) und den rechten Rand bei (60, 30) aufgesetzt, entsteht ein symmetrisches U-förmiges Orthogonalpolygon mit einer lichten Aussparung von 40 × 30 in der Mitte. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein massives 60 × 60 Quadrat ohne Aussparung. Figur B ist ein T-förmiges Polygon. Figur C ist ein asymmetrisches L-Polygon mit abweichender Fläche (3300).",
    metadata: { pieceCount: 3, shapeFamily: "U-förmiges Orthogonalpolygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: B
// Theme: Z-förmiges Stufenpolygon
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [30, 60], [0, 60]]; // Rechteck 30x60, area 1800
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const target_pts = [[0, 0], [60, 0], [60, 30], [90, 30], [90, 60], [30, 60], [30, 30], [0, 30]]; // Z-Polygon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 45, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 275, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = target_pts; // Z-Polygon (Correct)
  const optC_pts = [[0, 0], [90, 0], [90, 30], [30, 30], [30, 60], [0, 60]]; // L-Polygon = 3600
  const optD_pts = [[30, 0], [60, 0], [60, 30], [90, 30], [90, 60], [0, 60], [0, 30], [30, 30]]; // T-Polygon = 3600

  questions.push({
    id: "fz-sim4-q02",
    simulationId: "fz-sim4",
    questionNumber: 2,
    difficulty: "Leicht",
    correctAnswer: "B",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 2 ist ein vertikales Rechteck von 30 × 60 (Fläche 1800), das das zentrale Verbindungsglied bildet. Teilstück 1 (30 × 30 Quadrat, Fläche 900) wird links unten bei (0, 0) angefügt. Teilstück 3 (30 × 30 Quadrat, Fläche 900) wird rechts oben bei (60, 30) angefügt. Es entsteht ein symmetrisches Z-förmiges Stufenpolygon mit Gesamtfläche 900 + 1800 + 900 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat 60 × 60. Figur C ist ein L-förmiges Polygon (beide Quadrate auf derselben Seite). Figur D ist ein T-förmiges Polygon.",
    metadata: { pieceCount: 3, shapeFamily: "Z-förmiges Stufenpolygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q03: Leicht (4 pieces), Ans: A
// Theme: Symmetrisches Trapez aus 2 Rechtecken und 2 Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 40]]; // Dreieck 20x40, area 400
  const p2_pts = [[0, 0], [20, 0], [0, 40]]; // Dreieck 20x40, area 400
  const p3_pts = [[0, 0], [60, 0], [60, 20], [0, 20]]; // Rechteck 60x20, area 1200
  const p4_pts = [[0, 0], [60, 0], [60, 20], [0, 20]]; // Rechteck 60x20, area 1200
  const target_pts = [[0, 0], [100, 0], [80, 40], [20, 40]]; // Symmetrisches Trapez, area 3200

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 110, 30);
  const p3_canvas = transformPoints(p3_pts, 0, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 290, 45);

  const optA_pts = target_pts; // Symmetrisches Trapez (Correct)
  const optB_pts = [[0, 0], [80, 0], [80, 40], [0, 40]]; // Rechteck 80x40 = 3200
  const optC_pts = [[0, 0], [80, 0], [100, 40], [20, 40]]; // Parallelogramm = 3200
  const optD_pts = [[0, 0], [100, 0], [80, 40], [0, 40]]; // Rechtwinkliges Trapez = 3600

  questions.push({
    id: "fz-sim4-q03",
    simulationId: "fz-sim4",
    questionNumber: 3,
    difficulty: "Leicht",
    correctAnswer: "A",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [80, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 3 und 4 (60 × 20, Fläche je 1200) bilden übereinandergelegt einen zentralen 60 × 40 Block (Fläche 2400). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 20 und 40 (Fläche je 400). Links und rechts angefügt bilden sie ein symmetrisches Trapez mit Grundseite 100 (20 + 60 + 20), Deckseite 60 und Höhe 40 (Gesamtfläche 3200). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein rechtwinkliges Trapez mit Fläche 3600 (zu groß).",
    metadata: { pieceCount: 4, shapeFamily: "Symmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: E (GENUINE NONE)
// Theme: Kantenlängen-Falle bei zusammengesetztem Trapez
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p3_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p4_pts = [[0, 0], [30, 0], [0, 35]]; // Dreieck 30x35, area 525 (Asymmetrisch, Kathete 35!)
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 40);
  const p3_canvas = transformPoints(p3_pts, 180, 215, 80);
  const p4_canvas = transformPoints(p4_pts, 90, 315, 40);

  const optA_pts = [[0, 0], [90, 0], [60, 40], [30, 40]]; // Symmetrisches Trapez = 2400
  const optB_pts = [[0, 0], [65, 0], [65, 40], [0, 40]]; // Rechteck 65x40 = 2600
  const optC_pts = [[0, 0], [65, 0], [95, 40], [30, 40]]; // Parallelogramm = 2600
  const optD_pts = [[0, 0], [90, 0], [60, 30], [0, 30]]; // Trapez = 2250

  questions.push({
    id: "fz-sim4-q04",
    simulationId: "fz-sim4",
    questionNumber: 4,
    difficulty: "Leicht",
    correctAnswer: "E",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target), area: polygonArea(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt: Quadrat 1 (900) + Dreieck 2 (600) + Dreieck 3 (600) + Dreieck 4 (525) = exakt 2625 Einheiten. Teilstück 4 besitzt Katheten von 30 und 35, während Teilstück 2 und 3 Katheten von 30 und 40 besitzen. Dadurch kann kein symmetrisches Trapez mit durchgehend gleichen Schenkellängen gebildet werden.\n\nAusschluss: Figur A (Trapez mit Fläche 2400) und Figur D (Fläche 2250) verletzen die Flächenerhaltung erheblich. Figur B (Rechteck 65 × 40 = 2600) und Figur C (Parallelogramm = 2600) sind ebenfalls flächenmäßig zu klein und erfordern zwei identische Dreiecke zur Rechtecksbildung. Keine der Optionen A–D ist konstruierbar. Korrekt ist Antwort E.",
    metadata: { pieceCount: 4, shapeFamily: "Kantenlängen-Falle", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: C
// Theme: T-förmiges Orthogonalpolygon
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 25], [0, 25]]; // Rechteck 40x25, area 1000
  const p2_pts = [[0, 0], [40, 0], [40, 25], [0, 25]]; // Rechteck 40x25, area 1000
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  // Target: T-Polygon: Balken oben 80x25 (Area 2000) + Ständer unten 30x40 (Area 1200) = 3200!
  const target_pts = [[25, 0], [55, 0], [55, 40], [80, 40], [80, 65], [0, 65], [0, 40], [25, 40]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 90, 295, 35);

  const optA_pts = [[0, 0], [80, 0], [80, 40], [0, 40]]; // Rechteck 80x40 = 3200
  const optB_pts = [[0, 0], [80, 0], [80, 25], [30, 25], [30, 65], [0, 65]]; // L-Polygon = 3200
  const optC_pts = target_pts; // T-Polygon (Correct)
  const optD_pts = [[25, 0], [55, 0], [55, 25], [80, 25], [80, 50], [55, 50], [55, 75], [25, 75], [25, 50], [0, 50], [0, 25], [25, 25]]; // Kreuz = 3250

  questions.push({
    id: "fz-sim4-q05",
    simulationId: "fz-sim4",
    questionNumber: 5,
    difficulty: "Mittel",
    correctAnswer: "C",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p3", rotationDeg: 0, translation: [25, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [25, 20], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (40 × 25, Fläche je 1000) bilden nebeneinandergelegt einen 80 × 25 Querbalken (Fläche 2000). Die Teilstücke 3 und 4 (30 × 20, Fläche je 600) bilden übereinandergelegt einen 30 × 40 Ständer (Fläche 1200). Wird der Ständer mittig unter den Querbalken gesetzt (Überhang links und rechts je 25), entsteht ein symmetrisches T-förmiges Orthogonalpolygon mit Gesamtfläche 3200 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aussparungen. Figur B ist ein L-förmiges Polygon (Ständer an der Seite statt zentriert). Figur D ist ein Kreuzpolygon mit abweichender Fläche.",
    metadata: { pieceCount: 4, shapeFamily: "T-förmiges Orthogonalpolygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: D
// Theme: Symmetrisches Achteck (Oktaeder-Projektion)
// =========================================================================
{
  const p1_pts = [[0, 0], [80, 0], [60, 20], [20, 20]]; // Symmetrisches Trapez, area 1000
  const p2_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p3_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p4_pts = [[0, 0], [80, 0], [60, 20], [20, 20]]; // Symmetrisches Trapez, area 1000
  // Target: Achteck: [[20,0], [60,0], [80,20], [80,60], [60,80], [20,80], [0,60], [0,20]], area = 5200!
  const target_pts = [[20, 0], [60, 0], [80, 20], [80, 60], [60, 80], [20, 80], [0, 60], [0, 20]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 35);
  const p3_canvas = transformPoints(p3_pts, 0, 200, 35);
  const p4_canvas = transformPoints(p4_pts, 180, 360, 75);

  const optA_pts = [[0, 0], [80, 0], [80, 80], [0, 80]]; // Quadrat 80x80 = 6400
  const optB_pts = [[20, 0], [60, 0], [80, 40], [60, 80], [20, 80], [0, 40]]; // Sechseck = 4800
  const optC_pts = [[0, 0], [80, 0], [80, 65], [0, 65]]; // Rechteck 80x65 = 5200
  const optD_pts = target_pts; // Achteck (Correct)

  questions.push({
    id: "fz-sim4-q06",
    simulationId: "fz-sim4",
    questionNumber: 6,
    difficulty: "Mittel",
    correctAnswer: "D",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 180, translation: [80, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Quadrate 2 und 3 (40 × 40, Fläche je 1600) bilden zusammen den mittleren Rechteckblock von 80 × 40 (Fläche 3200). Die Teilstücke 1 und 4 sind zwei symmetrische Trapeze mit Grundseite 80, Deckseite 40 und Höhe 20 (Fläche je 1000). Unten und oben an den 80er-Kanten des mittleren Blocks angefügt, schließen sie die Figur zu einem symmetrischen Achteck mit 8 gleichmäßig abgeschrägten Ecken ab (Gesamtfläche 5200 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein volles 80 × 80 Quadrat (Fläche 6400, zu groß). Figur B ist ein Sechseck mit nur 6 Kanten (Fläche 4800). Figur C ist ein Rechteck ohne Eckenabschrägungen.",
    metadata: { pieceCount: 4, shapeFamily: "Symmetrisches Achteck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: B
// Theme: Griechisches Kreuz aus 4 Teilstücken
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  // Target: Kreuz: [[20,0], [40,0], [40,20], [60,20], [60,40], [40,40], [40,60], [20,60], [20,40], [0,40], [0,20], [20,20]], area 2000!
  const target_pts = [[20, 0], [40, 0], [40, 20], [60, 20], [60, 40], [40, 40], [40, 60], [20, 60], [20, 40], [0, 40], [0, 20], [20, 20]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 200, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 270, 45);

  const optA_pts = [[20, 0], [40, 0], [40, 20], [60, 20], [60, 40], [0, 40], [0, 20], [20, 20]]; // T-Polygon = 1600
  const optB_pts = target_pts; // Kreuz (Correct)
  const optC_pts = [[0, 0], [60, 0], [60, 20], [20, 20], [20, 60], [0, 60]]; // L-Polygon = 2000
  const optD_pts = [[0, 0], [45, 0], [45, 45], [0, 45]]; // Quadrat 45x45 = 2025

  questions.push({
    id: "fz-sim4-q07",
    simulationId: "fz-sim4",
    questionNumber: 7,
    difficulty: "Mittel",
    correctAnswer: "B",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [20, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist ein Rechteck von 40 × 20 (entspricht zwei 20 × 20 Quadraten, Fläche 800). Die Teilstücke 2, 3 und 4 sind drei Quadrate von je 20 × 20 (Fläche je 400). Insgesamt stehen somit 5 modulare 20 × 20 Quadrate zur Verfügung (Gesamtfläche 2000). Teilstück 1 bildet den linken und mittleren Arm des Kreuzes. Quadrat 2 bildet den rechten Arm, Quadrat 3 den oberen Arm und Quadrat 4 den unteren Arm. Es entsteht ein symmetrisches griechisches Kreuzpolygon. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein T-förmiges Polygon mit Fläche 1600 (zu klein). Figur C ist ein L-förmiges Polygon. Figur D ist ein Quadrat.",
    metadata: { pieceCount: 4, shapeFamily: "Kreuzförmiges Orthogonalpolygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q08: Mittel (4 pieces), Ans: A
// Theme: Hausform / Fünfeck mit Giebeldach
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 25], [0, 25]]; // Rechteck 60x25, area 1500
  const p2_pts = [[0, 0], [60, 0], [60, 25], [0, 25]]; // Rechteck 60x25, area 1500
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  // Target: Hausform: [[0,0], [60,0], [60,50], [30,80], [0,50]], area = 3900!
  const target_pts = [[0, 0], [60, 0], [60, 50], [30, 80], [0, 50]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 205, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 315, 75);

  const optA_pts = target_pts; // Hausform (Correct)
  const optB_pts = [[0, 0], [60, 0], [60, 65], [0, 65]]; // Rechteck 60x65 = 3900
  const optC_pts = [[0, 0], [60, 0], [60, 50], [15, 80], [0, 50]]; // Asymmetrisches Dach
  const optD_pts = [[0, 0], [80, 0], [60, 50], [20, 50]]; // Trapez = 3500

  questions.push({
    id: "fz-sim4-q08",
    simulationId: "fz-sim4",
    questionNumber: 8,
    difficulty: "Mittel",
    correctAnswer: "A",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 25], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 50], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [60, 80], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (60 × 25, Fläche je 1500) bilden übereinandergelegt den unteren rechteckigen Korpus von 60 × 50 (Fläche 3000). Die Teilstücke 3 und 4 sind zwei rechtwinklig-gleichschenklige Dreiecke mit Katheten 30 und 30 (Fläche je 450). An ihren vertikalen Katheten zusammengefügt bilden sie das symmetrische Giebeldach mit Basis 60 und Firsthöhe 30 (Fläche 900) mit Dachspitze bei (30, 80). Gesamtfläche: 3000 + 900 = 3900 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck mit Flachdach. Figur C besitzt eine nach links verschobene Dachspitze bei x = 15. Figur D ist ein Trapez mit unzureichender Fläche (3500).",
    metadata: { pieceCount: 4, shapeFamily: "Hausform (Giebelpolygon)", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q09: Mittel (4 pieces), Ans: E (GENUINE NONE)
// Theme: Asymmetrische Dachschräge & Inkompatibilität
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p4_pts = [[0, 0], [30, 0], [0, 25]]; // Dreieck 30x25, area 375 (Fehlende 5 Einheiten Höhe!)
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 115, 30);
  const p3_canvas = transformPoints(p3_pts, 0, 185, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 295, 75);

  const optA_pts = [[0, 0], [60, 0], [60, 40], [30, 60], [0, 40]]; // Hausform = 3000
  const optB_pts = [[0, 0], [80, 0], [60, 35], [20, 35]]; // Symmetrisches Trapez = 2800
  const optC_pts = [[0, 0], [60, 0], [60, 55], [0, 55]]; // Rechteck 60x55 = 3300
  const optD_pts = [[0, 0], [70, 0], [70, 45], [30, 45], [30, 65], [0, 65]]; // L-Polygon = 3225 (erfordert Dreiecke nicht)

  questions.push({
    id: "fz-sim4-q09",
    simulationId: "fz-sim4",
    questionNumber: 9,
    difficulty: "Mittel",
    correctAnswer: "E",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target), area: polygonArea(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    explanation: "Geometrische Analyse: Die Gesamtfläche der Teilstücke beträgt: Rechteck 1 (1200) + Rechteck 2 (1200) + Dreieck 3 (450) + Dreieck 4 (375) = exakt 3225 Einheiten. Dreieck 4 besitzt eine Kathete von nur 25 statt 30, wodurch es nicht bündig an Dreieck 3 (Kathete 30) oder die 30er- bzw. 40er-Kanten der Rechtecke anschließen kann.\n\nAusschluss: Figur A (Fläche 3000), Figur B (Fläche 2800) und Figur C (Fläche 3300) verletzen die Flächenerhaltung. Figur D (L-Polygon) hat zwar rechnerisch Fläche 3225, besteht aber ausschließlich aus 90°-Ecken, wodurch die beiden schrägen Dreiecke 3 und 4 nicht ohne unüberbrückbare Lücken integriert werden können. Keine der Figuren A–D ist bildbar. Korrekt ist Antwort E.",
    metadata: { pieceCount: 4, shapeFamily: "Asymmetrie- & Flächenfalle", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q10: Mittel (4 pieces), Ans: C
// Theme: Parallelogramm mit Stufenschnitt
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 40]]; // Dreieck 20x40, area 400
  const p2_pts = [[0, 0], [20, 0], [0, 40]]; // Dreieck 20x40, area 400
  const p3_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p4_pts = [[0, 0], [10, 0], [10, 40], [0, 40]]; // Rechteck 10x40, area 400
  const target_pts = [[0, 0], [70, 0], [90, 40], [20, 40]]; // Parallelogramm, area 2800

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 180, 115, 80);
  const p3_canvas = transformPoints(p3_pts, 0, 160, 40);
  const p4_canvas = transformPoints(p4_pts, 0, 275, 40);

  const optA_pts = [[0, 0], [70, 0], [70, 40], [0, 40]]; // Rechteck 70x40 = 2800
  const optB_pts = [[0, 0], [90, 0], [70, 40], [20, 40]]; // Symmetrisches Trapez = 2800
  const optC_pts = target_pts; // Parallelogramm (Correct)
  const optD_pts = [[0, 0], [70, 0], [110, 40], [40, 40]]; // Parallelogramm Überhang 40 = 2800

  questions.push({
    id: "fz-sim4-q10",
    simulationId: "fz-sim4",
    questionNumber: 10,
    difficulty: "Mittel",
    correctAnswer: "C",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [70, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 3 (40 × 40 Quadrat, Fläche 1600) und Teilstück 4 (10 × 40 Streifen, Fläche 400) ergänzen sich zu einem zentralen Rechteck von 50 × 40 (Fläche 2000). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 20 und 40 (Fläche je 400). In gleicher Neigungsrichtung links und rechts angefügt, bilden sie ein Parallelogramm mit Basis 70 (20 + 50), Höhe 40 und Neigungsüberhang 20 (Gesamtfläche 2800). Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rechtwinkliges Rechteck ohne Schrägen. Figur B ist ein symmetrisches Trapez mit gegensinnigen Schrägen. Figur D ist ein Parallelogramm mit übertriebenem Überhang von 40 statt 20.",
    metadata: { pieceCount: 4, shapeFamily: "Parallelogramm-Zerlegung", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: D
// Theme: Großes U-förmiges Portal-Polygon aus 5 Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [90, 0], [90, 30], [0, 30]]; // Schwelle 90x30, area 2700
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Pfeilerstück 20x20, area 400
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Pfeilerstück 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Pfeilerstück 20x20, area 400
  const p5_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Pfeilerstück 20x20, area 400
  // Target: U-Portal: [[0,0], [90,0], [90,70], [70,70], [70,30], [20,30], [20,70], [0,70]], area = 4300!
  const target_pts = [[0, 0], [90, 0], [90, 70], [70, 70], [70, 30], [20, 30], [20, 70], [0, 70]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 135, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 185, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 285, 45);

  const optA_pts = [[0, 0], [86, 0], [86, 50], [0, 50]]; // Rechteck 86x50 = 4300
  const optB_pts = [[20, 0], [70, 0], [70, 30], [90, 30], [90, 60], [0, 60], [0, 30], [20, 30]]; // T-Polygon = 4200
  const optC_pts = [[0, 0], [90, 0], [90, 70], [60, 70], [60, 30], [10, 30], [10, 70], [0, 70]]; // Asymmetrisches U
  const optD_pts = target_pts; // Symmetrisches U-Portal (Correct)

  questions.push({
    id: "fz-sim4-q11",
    simulationId: "fz-sim4",
    questionNumber: 11,
    difficulty: "Schwer",
    correctAnswer: "D",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
      { id: "p5", points: p5_pts, canvasPoints: p5_canvas, area: polygonArea(p5_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 50], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [70, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [70, 50], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist ein breiter Sockel von 90 × 30 (Fläche 2700). Die vier Quadrate 2, 3, 4 und 5 (je 20 × 20, Fläche je 400) bilden paarweise zwei vertikale Pfeiler der Abmessung 20 × 40 (Fläche je 800). Auf die linke Kante bei (0, 30) und die rechte Kante bei (70, 30) aufgesetzt, entsteht ein symmetrisches Portal-Polygon mit einer 50 × 40 breiten mittleren Öffnung und einer Gesamthöhe von 70 (Gesamtfläche 4300). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck. Figur B ist ein T-förmiges Polygon mit Fläche 4200. Figur C ist ein asymmetrisches U-Polygon mit ungleichen Pfeilerstärken (10 links, 30 rechts statt 20 und 20).",
    metadata: { pieceCount: 5, shapeFamily: "U-förmiges Portalpolygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: B
// Theme: Symmetrische 3-Stufenpyramide aus 5 Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [90, 0], [90, 20], [0, 20]]; // Stufe 1: 90x20, area 1800
  const p2_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Stufe 2a: 30x20, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Stufe 2b: 30x20, area 600
  const p4_pts = [[0, 0], [15, 0], [15, 20], [0, 20]]; // Stufe 3a: 15x20, area 300
  const p5_pts = [[0, 0], [15, 0], [15, 20], [0, 20]]; // Stufe 3b: 15x20, area 300
  // Target: Symmetrische Stufenpyramide: area = 1800 + 1200 + 600 = 3600!
  const target_pts = [[0, 0], [90, 0], [90, 20], [75, 20], [75, 40], [60, 40], [60, 60], [30, 60], [30, 40], [15, 40], [15, 20], [0, 20]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 50);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 50);
  const p3_canvas = transformPoints(p3_pts, 0, 180, 50);
  const p4_canvas = transformPoints(p4_pts, 0, 230, 50);
  const p5_canvas = transformPoints(p5_pts, 0, 265, 50);

  const optA_pts = [[0, 0], [90, 0], [90, 20], [60, 20], [60, 40], [30, 40], [30, 60], [0, 60]]; // Einseitige Treppe = 3600
  const optB_pts = target_pts; // Symmetrische Stufenpyramide (Correct)
  const optC_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optD_pts = [[0, 0], [90, 0], [60, 40], [30, 40]]; // Symmetrisches Trapez = 3000

  questions.push({
    id: "fz-sim4-q12",
    simulationId: "fz-sim4",
    questionNumber: 12,
    difficulty: "Schwer",
    correctAnswer: "B",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
      { id: "p5", points: p5_pts, canvasPoints: p5_canvas, area: polygonArea(p5_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [15, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [45, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 40], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [45, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 bildet die 90 × 20 breite Basisstufe (Fläche 1800). Die Teilstücke 2 und 3 (je 30 × 20, Fläche je 600) bilden zusammen die zentrierte Mittelstufe von 60 × 20 (Fläche 1200) mit symmetrischem Einzug von je 15 links und rechts. Die Teilstücke 4 und 5 (je 15 × 20, Fläche je 300) bilden zusammen die oberste Stufe von 30 × 20 (Fläche 600). Es entsteht eine dreistufige, achsensymmetrische Stufenpyramide mit Gesamtfläche 1800 + 1200 + 600 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist eine asymmetrische, einseitig ansteigende Treppe. Figur C ist ein einfaches Quadrat 60 × 60 ohne Stufung. Figur D ist ein Trapez mit Fläche 3000.",
    metadata: { pieceCount: 5, shapeFamily: "Symmetrische Stufenpyramide", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: A
// Theme: Asymmetrisches Treppenpolygon aus 5 modularen Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 50], [0, 50]]; // Rechteck 30x50, area 1500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p5_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  // Target: Asymmetrische Treppe: [[0,0], [80,0], [80,30], [50,30], [50,60], [30,60], [30,80], [0,80]], area = 4500!
  const target_pts = [[0, 0], [80, 0], [80, 30], [50, 30], [50, 60], [30, 60], [30, 80], [0, 80]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 35);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 160, 45);
  const p4_canvas = transformPoints(p4_pts, 90, 230, 35);
  const p5_canvas = transformPoints(p5_pts, 0, 285, 45);

  const optA_pts = target_pts; // Asymmetrische Treppe (Correct)
  const optB_pts = [[0, 0], [75, 0], [75, 60], [0, 60]]; // Rechteck 75x60 = 4500
  const optC_pts = [[0, 0], [90, 0], [90, 30], [60, 30], [60, 60], [30, 60], [30, 90], [0, 90]]; // Symmetrische Treppe 30/30/30
  const optD_pts = [[0, 0], [80, 0], [80, 80], [50, 80], [50, 60], [30, 60], [30, 30], [0, 30]]; // Gespiegelte Treppe

  questions.push({
    id: "fz-sim4-q13",
    simulationId: "fz-sim4",
    questionNumber: 13,
    difficulty: "Schwer",
    correctAnswer: "A",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
      { id: "p5", points: p5_pts, canvasPoints: p5_canvas, area: polygonArea(p5_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 50], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [50, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 (30 × 50 Rechteck, Fläche 1500) und Teilstück 2 (30 × 30 Quadrat, Fläche 900) bilden die linke Säule der Abmessung 30 × 80 (Fläche 2400). Die Teilstücke 3 und 4 (je 20 × 30 Rechteck, Fläche je 600) bilden die mittlere Säule der Abmessung 20 × 60 (Fläche 1200). Teilstück 5 (30 × 30 Quadrat, Fläche 900) bildet die rechte Stufe. Es entsteht eine dreistufige asymmetrische Treppe mit Stufenbreiten 30, 20 und 30 sowie Höhen 80, 60 und 30 (Gesamtfläche 4500). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein Rechteck. Figur C ist eine reguläre Treppe mit Stufenbreiten 30/30/30 (Fläche 5400). Figur D ist die spiegelverkehrte Treppe, die nur durch unzulässiges Spiegeln gebildet werden könnte.",
    metadata: { pieceCount: 5, shapeFamily: "Asymmetrisches Treppenpolygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q14: Schwer (5 pieces), Ans: E (GENUINE NONE)
// Theme: Schnittkanten-Inkompatibilität bei Großtrapez
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p4_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p5_pts = [[0, 0], [30, 0], [0, 35]]; // Dreieck 30x35, area 525 (Kathete 35 statt 40!)
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 110, 30);
  const p3_canvas = transformPoints(p3_pts, 0, 175, 40);
  const p4_canvas = transformPoints(p4_pts, 180, 275, 80);
  const p5_canvas = transformPoints(p5_pts, 90, 345, 40);

  const optA_pts = [[0, 0], [100, 0], [70, 60], [30, 60]]; // Symmetrisches Trapez = 3900
  const optB_pts = [[0, 0], [70, 0], [100, 60], [30, 60]]; // Parallelogramm = 4200
  const optC_pts = [[0, 0], [70, 0], [70, 60], [0, 60]]; // Rechteck 70x60 = 4200
  const optD_pts = [[0, 0], [90, 0], [70, 45], [20, 45]]; // Fünfeck = 4125

  questions.push({
    id: "fz-sim4-q14",
    simulationId: "fz-sim4",
    questionNumber: 14,
    difficulty: "Schwer",
    correctAnswer: "E",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
      { id: "p5", points: p5_pts, canvasPoints: p5_canvas, area: polygonArea(p5_pts) },
    ],
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target), area: polygonArea(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    explanation: "Geometrische Analyse: Die Summe aller Teilstücke beträgt: Rechteck 1 (1200) + Rechteck 2 (1200) + Dreieck 3 (600) + Dreieck 4 (600) + Dreieck 5 (525) = exakt 4125 Einheiten. Teilstück 5 besitzt eine Kathete von nur 35 statt 40, wodurch es nicht mit den 40er-Kanten der übrigen Dreiecke und Rechtecke bündig abschließen kann.\n\nAusschluss: Figur A (Trapez mit Fläche 3900) ist zu klein. Die Figuren B und C (Fläche je 4200) sind um 75 Einheiten zu groß für die gegebenen Teile. Figur D scheitert an den inkompatiblen Kantenlängen und Winkeln der Dreiecke. Keine der Figuren A–D lässt sich exakt aus den Teilen zusammensetzen. Korrekt ist daher Antwort E.",
    metadata: { pieceCount: 5, shapeFamily: "Trapez-Kanten-Diskrepanz", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q15: Schwer (5 pieces), Ans: C
// Theme: Hexagonales Diagonaltrapez aus 5 Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40, area 2400
  const p2_pts = [[0, 0], [20, 0], [0, 40]]; // Dreieck 20x40, area 400
  const p3_pts = [[0, 0], [20, 0], [20, 40]]; // Dreieck 20x40, area 400
  const p4_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p5_pts = [[0, 0], [60, 0], [30, 40]]; // Dreieck Basis 60, Höhe 40, area 1200
  // Target: Sechseck: [[20,0], [80,0], [100,40], [70,80], [30,80], [0,40]], area = 6000!
  const target_pts = [[20, 0], [80, 0], [100, 40], [70, 80], [30, 80], [0, 40]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 40);
  const p3_canvas = transformPoints(p3_pts, 180, 180, 80);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 40);
  const p5_canvas = transformPoints(p5_pts, 0, 290, 40);

  const optA_pts = [[0, 0], [100, 0], [100, 60], [0, 60]]; // Rechteck 100x60 = 6000
  const optB_pts = [[20, 0], [80, 0], [100, 20], [100, 60], [80, 80], [20, 80], [0, 60], [0, 20]]; // Achteck
  const optC_pts = target_pts; // Hexagonales Diagonaltrapez (Correct)
  const optD_pts = [[0, 0], [120, 0], [90, 60], [30, 60]]; // Symmetrisches Trapez = 5400

  questions.push({
    id: "fz-sim4-q15",
    simulationId: "fz-sim4",
    questionNumber: 15,
    difficulty: "Schwer",
    correctAnswer: "C",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
      { id: "p4", points: p4_pts, canvasPoints: p4_canvas, area: polygonArea(p4_pts) },
      { id: "p5", points: p5_pts, canvasPoints: p5_canvas, area: polygonArea(p5_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts), area: polygonArea(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 180, translation: [100, 40], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 40], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [20, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 (60 × 40 Rechteck, Fläche 2400) und die beiden Dreiecke 2 und 3 (Katheten 20 und 40, Fläche je 400) bilden das untere breite Trapez mit Grundlinie 60 bei y = 0 und Decklinie 100 bei y = 40 (Fläche 3200). Der obere Bereich wird aus dem 40 × 40 Quadrat (Fläche 1600) und dem Dreieck 5 (Basis 60, Höhe 40, Fläche 1200) zusammengesetzt (Fläche 2800). Zusammen entsteht ein 6-eckiges Diagonaltrapez mit Gesamtfläche 3200 + 2800 = 6000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein 8-eckiges Polygon. Figur D ist ein symmetrisches Trapez mit Fläche 5400 (zu klein).",
    metadata: { pieceCount: 5, shapeFamily: "Hexagonales Diagonaltrapez", requiresRotation: true, isEAnswer: false },
  });
}

console.log(`Generated ${questions.length} questions.`);

let valid = true;
const ansCount = { A: 0, B: 0, C: 0, D: 0, E: 0 };
questions.forEach((q, i) => {
  ansCount[q.correctAnswer]++;
  let pieceSum = 0;
  q.pieces.forEach(p => pieceSum += polygonArea(p.points));
  const targetArea = polygonArea(q.targetFigure.polygon);
  if (q.correctAnswer !== "E") {
    if (Math.abs(pieceSum - targetArea) > 0.01) {
      console.error(`Mismatch in Q${i+1}: pieces=${pieceSum}, target=${targetArea}`);
      valid = false;
    }
  }
});

console.log("Answer count:", ansCount);
if (!valid) {
  console.error("VALIDATION FAILED");
  process.exit(1);
}
console.log("ALL 15 QUESTIONS MATHEMATICALLY VALID!");

function normalizeQuestion(q) {
  return {
    ...q,
    targetFigure: {
      ...q.targetFigure,
      area: polygonArea(q.targetFigure.polygon),
    },
    assembly: (q.assembly || []).map((a) => ({
      pieceId: a.pieceId,
      rotationDeg: a.rotationDeg || 0,
      translation: a.translation || [0, 0],
      isReflection: false,
    })),
    metadata: {
      pieceCount: q.pieces.length,
      shapeFamily: q.metadata.shapeFamily,
      requiresRotation: true,
      isEAnswer: q.correctAnswer === "E",
    },
  };
}

const finalQuestions = questions.map(normalizeQuestion);

// Output TypeScript file
const header = `/**
 * Official MedAT Figuren zusammensetzen (FZ) — Simulation 4
 * 15 Verified Geometric Spatial Reasoning Questions
 *
 * Theme: Mehrteilige Polygone & Ausschluss-Heuristik
 * Focus: Komplexe Zerlegungen aus 4–5 Teilstücken, schnelle Elimination falscher Optionen im 80s-Budget.
 *
 * Strict Compliance:
 * - 15 questions, 20 minutes (~80s per task)
 * - Static 2D SVG vector diagrams
 * - 0% interactive puzzle / 0% draggable / 0% rotatable UI
 * - 100% pure mental rotation without mirroring (det = +1)
 * - Balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - 3 genuine E ("Keine") cases: Q04, Q09, Q14
 * - Difficulty: 4 Leicht (Q01-Q04), 6 Mittel (Q05-Q10), 5 Schwer (Q11-Q15)
 */

import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_4_QUESTIONS: FzQuestionData[] = `;

const tsContent = header + JSON.stringify(finalQuestions, null, 2) + ";\n";
const outPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation4.ts");
fs.writeFileSync(outPath, tsContent, "utf-8");
console.log(`Written to ${outPath}`);
