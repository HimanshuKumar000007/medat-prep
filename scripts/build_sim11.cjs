/**
 * Generator and Validator for MedAT FZ Simulation 11
 * Theme: Titan-Simulation: Polykristalline Schnitte, Facetten-Heptagone & Symmetrie-Illusionen
 * 15 Aufgaben, 20 Min. Prüfungszeit (~80s pro Aufgabe)
 * Distribution: 4 Leicht, 6 Mittel, 5 Schwer
 * Balanced Key: 3 A, 3 B, 3 C, 3 D, 3 E (Genuine E: Q02, Q08, Q13)
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
// Q01: Leicht (3 pieces), Ans: A
// Theme: Parallelogramm mit 45°-Neigung
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p3_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  // Total area = 1200 + 450 + 450 = 2100
  const target_pts = [[0, 0], [70, 0], [100, 30], [30, 30]]; // Parallelogramm, area 2100

  const p1_canvas = transformPoints(p1_pts, 0, 35, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 155, 45);
  const p3_canvas = transformPoints(p3_pts, 180, 280, 75);

  const optA_pts = target_pts; // Parallelogramm (Correct)
  const optB_pts = [[0, 0], [100, 0], [70, 30], [30, 30]]; // Symmetrisches Trapez = 2100
  const optC_pts = [[0, 0], [70, 0], [70, 30], [0, 30]]; // Rechteck = 2100
  const optD_pts = [[0, 0], [60, 0], [60, 30], [30, 30], [30, 60], [0, 60]]; // L-Polygon = 2700

  questions.push({
    id: "fz-sim11-q01",
    simulationId: "fz-sim11",
    questionNumber: 1,
    difficulty: "Leicht",
    correctAnswer: "A",
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 180, translation: [100, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet das Zentrum von x = 30 bis 70. Links schließt Teilstück p2 (Dreieck 30 × 30, Fläche 450) an, dessen Hypotenuse von (0, 0) nach (30, 30) ansteigt. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) um 180° rotiert an, dessen Hypotenuse parallel von (70, 0) nach (100, 30) verläuft. Beide Schrägkanten sind gleichsinnig 45° geneigt. Das Resultat ist ein Parallelogramm mit Grundseite 70 und Höhe 30. Gesamtfläche: 1200 + 450 + 450 = 2100 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein symmetrisches Trapez mit gegensinnigen Schrägen. Figur C ist ein schlichtes Rechteck. Figur D ist ein rechtwinkliges L-Polygon.",
    metadata: { pieceCount: 3, shapeFamily: "Parallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: E (Genuine Option E)
// Theme: Höhenüberschuss und Kanteninkompatibilität
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600, hyp 50
  const p3_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  // Total piece area = 900 + 600 + 300 = 1800
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 140, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 250, 45);

  const optA_pts = [[0, 0], [80, 0], [60, 30], [20, 30]]; // Symmetrisches Trapez = 2100
  const optB_pts = [[0, 0], [50, 0], [70, 30], [20, 30]]; // Parallelogramm = 1500
  const optC_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30 = 1800
  const optD_pts = [[0, 0], [60, 0], [60, 20], [30, 20], [30, 50], [0, 50]]; // Treppe = 2100

  questions.push({
    id: "fz-sim11-q02",
    simulationId: "fz-sim11",
    questionNumber: 2,
    difficulty: "Leicht",
    correctAnswer: "E",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1_pts, canvasPoints: p1_canvas, area: polygonArea(p1_pts) },
      { id: "p2", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p3", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
    ],
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target), area: polygonArea(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [],
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt 900 + 600 + 300 = 1800 Einheiten. Teilstück p2 besitzt Katheten von 30 und 40. Figur C besitzt zwar dieselbe Fläche (60 × 30 = 1800), verlangt jedoch eine Maximalhöhe von 30 Einheiten: Teilstück p2 ragt mit seiner 40er-Kathete unweigerlich über das Rechteck hinaus oder lässt bei Rotation Lücken mit dem Quadrat 30 × 30 offen. Figuren A und D verlangen eine Fläche von 2100, Figur B von 1500. Keine der Antwortfiguren A–D lässt sich exakt und lückenlos bilden. Option E ist zwingend richtig.\n\nAusschluss: A (2100 ≠ 1800), B (1500 ≠ 1800), C (Höhenüberhang 40 > 30), D (2100 ≠ 1800).",
    metadata: { pieceCount: 3, shapeFamily: "Fangfrage", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q03: Leicht (3 pieces), Ans: C
// Theme: Asymmetrisches Keil-Polygon mit gerader Flanke
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  // Total area = 1800 + 900 + 450 = 3150
  const target_pts = [[0, 0], [120, 0], [90, 30], [0, 30]]; // Keil-Trapez, area 3150

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 150, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 260, 45);

  const optA_pts = [[0, 0], [105, 0], [105, 30], [0, 30]]; // Rechteck 105x30 = 3150
  const optB_pts = [[0, 0], [120, 0], [105, 30], [15, 30]]; // Symmetrisches Trapez = 3150
  const optC_pts = target_pts; // Keil-Trapez (Correct)
  const optD_pts = [[0, 0], [90, 0], [90, 25], [45, 25], [45, 50], [0, 50]]; // Treppe = 3375

  questions.push({
    id: "fz-sim11-q03",
    simulationId: "fz-sim11",
    questionNumber: 3,
    difficulty: "Leicht",
    correctAnswer: "C",
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
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [90, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 30, Fläche 1800) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen einen rechteckigen Grundkörper von 90 × 30 (Fläche 2700) von x = 0 bis 90. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) an, dessen Kathete von (90, 0) bis (120, 0) reicht und dessen Hypotenuse von (90, 30) nach (120, 0) abfällt. Gesamtfläche: (120 + 90) / 2 × 30 = 3150 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist beidseitig symmetrisch abgeschrägt. Figur D ist eine stufenförmige Zikkurat.",
    metadata: { pieceCount: 3, shapeFamily: "Keil-Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: B
// Theme: Pfeilspitzen-Pentagon (Pointed Arrowhead Pentagon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p2_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200
  const p4_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  // Total area = 1600 + 800 + 200 + 200 = 2800
  const target_pts = [[20, 0], [80, 0], [80, 40], [20, 40], [0, 20]]; // Pfeilspitzen-Pentagon, area 2800

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 120, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 205, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 295, 65);

  const optA_pts = [[0, 0], [70, 0], [70, 40], [0, 40]]; // Rechteck 70x40 = 2800
  const optB_pts = target_pts; // Pfeilspitzen-Pentagon (Correct)
  const optC_pts = [[0, 0], [80, 0], [65, 40], [15, 40]]; // Symmetrisches Trapez = 2600
  const optD_pts = [[0, 20], [30, 0], [30, 10], [80, 10], [80, 30], [30, 30], [30, 40]]; // Pfeil = 2000

  questions.push({
    id: "fz-sim11-q04",
    simulationId: "fz-sim11",
    questionNumber: 4,
    difficulty: "Leicht",
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
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 180, translation: [20, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) und Teilstück p2 (Rechteck 20 × 40, Fläche 800) bilden einen rechteckigen Block von 60 × 40 (Fläche 2400) von x = 20 bis 80. Links setzen sich die beiden Dreiecke p3 und p4 (je 200 Fläche) zu einer nach links vorspringenden Dreiecksspitze mit Scheitelpunkt bei (0, 20) zusammen. Resultat ist ein horizontales Pentagon. Gesamtfläche: 2400 + 400 = 2800 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Rechteck ohne Spitze. Figur C ist ein beidseitig abgeschrägtes Trapez. Figur D ist ein klassischer Pfeil mit separatem Schaft.",
    metadata: { pieceCount: 4, shapeFamily: "Pfeilspitzen-Pentagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: D
// Theme: Symmetrischer T-Träger mit Versteifungskeilen (Gusset T-Beam)
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 20], [0, 20]]; // Rechteck 60x20, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  const p4_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200
  // Total area = 1200 + 600 + 200 + 200 = 2200
  const target_pts = [[20, 0], [40, 0], [40, 10], [60, 30], [60, 50], [0, 50], [0, 30], [20, 10]]; // Gusset T-Beam, area 2200

  const p1_canvas = transformPoints(p1_pts, 0, 25, 50);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 205, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 65);

  const optA_pts = [[20, 0], [40, 0], [40, 30], [60, 30], [60, 50], [0, 50], [0, 30], [20, 30]]; // Reines T = 2200
  const optB_pts = [[0, 0], [60, 0], [60, 40], [40, 40], [40, 20], [20, 20], [20, 40], [0, 40]]; // U-Kanal = 2000
  const optC_pts = [[10, 0], [50, 0], [60, 40], [0, 40]]; // Trapez = 2000
  const optD_pts = target_pts; // T-Träger mit Versteifungskeilen (Correct)

  questions.push({
    id: "fz-sim11-q05",
    simulationId: "fz-sim11",
    questionNumber: 5,
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
      { pieceId: "p2", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 10], isReflection: false },
      { pieceId: "p3", rotationDeg: 180, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p2 (Rechteck 20 × 30, Fläche 600) bildet den zentralen vertikalen Pfosten von x = 20 bis 40 (y = 0 bis 30). Oben schließt Teilstück p1 (Rechteck 60 × 20, Fläche 1200) als durchgehender Querbalken von y = 30 bis 50 an. Die Dreiecke p3 und p4 (je 200 Fläche) sitzen beidseitig unter dem Querbalken als diagonale Versteifungskeile mit 45°-Schrägen von (0, 30) nach (20, 10) bzw. von (60, 30) nach (40, 10). Gesamtfläche: 1200 + 600 + 200 + 200 = 2200 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein rein rechtwinkliges T-Polygon ohne Versteifungsschrägen. Figur B ist ein nach oben offener U-Kanal. Figur C ist ein simples Trapez.",
    metadata: { pieceCount: 4, shapeFamily: "T-Träger", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: A
// Theme: Asymmetrisches Kirchen-Polygon mit Dachschulter
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 20]]; // Dreieck 30x20, area 300
  const p4_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck 30x20, area 300
  // Total area = 1200 + 900 + 300 + 300 = 2700
  const target_pts = [[0, 0], [70, 0], [70, 30], [40, 50], [10, 30], [0, 30]]; // Kirchen-Polygon, area 2700

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 275, 50);

  const optA_pts = target_pts; // Kirchen-Polygon (Correct)
  const optB_pts = [[0, 0], [70, 0], [70, 30], [35, 55], [0, 30]]; // Symmetrisches Haus = 2975
  const optC_pts = [[0, 0], [80, 0], [60, 40], [10, 40]]; // Großtrapez = 2600
  const optD_pts = [[0, 0], [70, 0], [70, 30], [30, 30], [30, 60], [0, 60]]; // L-Polygon = 3000

  questions.push({
    id: "fz-sim11-q06",
    simulationId: "fz-sim11",
    questionNumber: 6,
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
      { pieceId: "p2", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [10, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [40, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen das rechteckige Fundament von 70 × 30 (Fläche 2100). Auf der Oberkante bei y = 30 sitzt von x = 10 bis 70 ein Giebeldach mit Breite 60 und Höhe 20, gebildet aus den beiden Dreiecken p3 und p4 (je 300 Fläche), mit Dachfirst bei (40, 50). Links bleibt eine Flachdach-Schulter von x = 0 bis 10 frei. Gesamtfläche: 2100 + 600 = 2700 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein vollständig symmetrisches Haus ohne Schulter. Figur C ist ein einzelnes Großtrapez. Figur D ist ein rein rechtwinkliges L-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "Kirchen-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: C
// Theme: Pultdach-Monument mit Stufenflanke
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p3_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck 30x20, area 300
  const p4_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200
  // Total area = 1500 + 400 + 300 + 200 = 2400
  const target_pts = [[0, 0], [80, 0], [50, 20], [50, 30], [40, 30], [20, 50], [0, 50]]; // Pultdach-Monument, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 120, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 275, 45);

  const optA_pts = [[0, 0], [70, 0], [60, 30], [45, 50], [25, 50], [10, 30]]; // Monument = 2650
  const optB_pts = [[0, 0], [80, 0], [60, 40], [15, 40]]; // Großtrapez = 2500
  const optC_pts = target_pts; // Pultdach-Monument (Correct)
  const optD_pts = [[0, 0], [70, 0], [70, 20], [50, 20], [50, 35], [25, 35], [25, 50], [0, 50]]; // Treppe = 2475

  questions.push({
    id: "fz-sim11-q07",
    simulationId: "fz-sim11",
    questionNumber: 7,
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [40, 50], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [50, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 30, Fläche 1500) bildet den Rumpf von (0, 0) bis (50, 30). Oben links sitzt Quadrat p2 (20 × 20, Fläche 400) von y = 30 bis 50, ergänzt durch Dreieck p4 (20 × 20, Fläche 200) mit Schräge von (20, 50) nach (40, 30). Rechts am Rumpf schließt Dreieck p3 (30 × 20, Fläche 300) von x = 50 bis 80 mit Schräge von (50, 20) nach (80, 0) an, während darüber bei y = 20 bis 30 eine Stufe zurückbleibt. Gesamtfläche: 1500 + 400 + 200 + 300 = 2400 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein symmetrisches Monument. Figur B ist ein einfaches Großtrapez. Figur D ist ein stufenförmiges Polygon ohne Schrägen.",
    metadata: { pieceCount: 4, shapeFamily: "Pultdach-Monument", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q08: Mittel (5 pieces), Ans: E (Genuine Option E)
// Theme: Echte Option-E: Diagonalschnitt-Winkelfalle
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p3_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck 30x20, area 300, Steigung 20/30
  const p4_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200, Steigung 1.0
  const p5_pts = [[0, 0], [40, 0], [0, 20]]; // Dreieck 40x20, area 400, Steigung 20/40
  // Total piece area = 1200 + 600 + 300 + 200 + 400 = 2700
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 250, 50);
  const p5_canvas = transformPoints(p5_pts, 180, 330, 65);

  const optA_pts = [[0, 0], [90, 0], [70, 35], [20, 35]]; // Symmetrisches Großtrapez = 2800
  const optB_pts = [[0, 0], [60, 0], [80, 45], [20, 45]]; // Parallelogramm = 2700 (Winkelfalle)
  const optC_pts = [[15, 0], [65, 0], [80, 30], [65, 60], [15, 60], [0, 30]]; // Sechseck = 3000
  const optD_pts = [[0, 0], [70, 0], [70, 25], [45, 25], [45, 50], [0, 50]]; // Treppe = 2375

  questions.push({
    id: "fz-sim11-q08",
    simulationId: "fz-sim11",
    questionNumber: 8,
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
    assembly: [],
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt 1200 + 600 + 300 + 200 + 400 = 2700 Einheiten. Figur B besitzt zwar dieselbe Fläche (60 × 45 = 2700), erfordert als Parallelogramm jedoch zwingend zwei identische gegenseitige Neigungswinkel an den Flanken. Die vorhandenen drei Dreiecke besitzen aber drei grundverschiedene Flankensteigungen: p3 = 20/30 (33,7°), p4 = 20/20 (45,0°) und p5 = 20/40 (26,6°). Es existiert kein zweites Teilstück mit identischer Schräge, um parallele Seitenkanten zu schließen. Figuren A, C und D weichen flächenmäßig ab (2800, 3000, 2375). Daher ist Option E zwingend richtig.\n\nAusschluss: A (2800 ≠ 2700), B (Winkelfalle: keine identischen Flankenschrägen vorhanden), C (3000 ≠ 2700), D (2375 ≠ 2700).",
    metadata: { pieceCount: 5, shapeFamily: "Fangfrage", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q09: Mittel (5 pieces), Ans: B
// Theme: Giebel-Heptagon mit symmetrischem Rumpf
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  const p5_pts = [[0, 0], [30, 0], [15, 20]]; // Dreieck 30x20, area 300
  // Total area = 1200 + 900 + 300 + 300 + 300 = 3000
  const target_pts = [[0, 0], [110, 0], [90, 30], [70, 30], [55, 50], [40, 30], [20, 30]]; // Giebel-Heptagon, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 245, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 315, 50);

  const optA_pts = [[0, 0], [100, 0], [100, 30], [50, 55], [0, 30]]; // Symmetrisches Haus = 3250
  const optB_pts = target_pts; // Giebel-Heptagon (Correct)
  const optC_pts = [[0, 0], [110, 0], [80, 40], [30, 40]]; // Großtrapez = 3200
  const optD_pts = [[0, 0], [90, 0], [90, 25], [60, 25], [60, 45], [30, 45], [30, 25], [0, 25]]; // Monument = 2850

  questions.push({
    id: "fz-sim11-q09",
    simulationId: "fz-sim11",
    questionNumber: 9,
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
      { pieceId: "p4", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [90, 0], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [40, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p4 (Dreieck 20 × 30), p1 (Rechteck 40 × 30), p2 (Quadrat 30 × 30) und p3 (Dreieck 20 × 30) bilden zusammen ein symmetrisches Großtrapez mit Grundseite 110, Deckseite 70 und Höhe 30 (Fläche 2700). Auf der oberen Deckseite sitzt zentriert von x = 40 bis 70 das Dreieck p5 (30 × 20, Fläche 300) mit Firstspitze bei (55, 50). Gesamtfläche: 2700 + 300 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Haus mit geraden Außenwänden ohne basale Schrägen. Figur C ist ein Trapez ohne Dachaufbau. Figur D ist ein treppenförmiges Monument.",
    metadata: { pieceCount: 5, shapeFamily: "Giebel-Heptagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q10: Mittel (5 pieces), Ans: D
// Theme: Symmetrischer Meißel-Pfeil (Chisel Arrow Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  const p5_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200
  // Total area = 800 + 800 + 400 + 200 + 200 = 2400
  const target_pts = [[0, 20], [80, 20], [80, 0], [100, 20], [100, 40], [80, 60], [80, 40], [0, 40]]; // Chisel Arrow, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 90, 265, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 335, 65);

  const optA_pts = [[0, 20], [70, 20], [70, 0], [100, 30], [70, 60], [70, 40], [0, 40]]; // Spitzpfeil = 2400
  const optB_pts = [[0, 10], [40, 10], [60, 0], [80, 10], [80, 50], [60, 60], [40, 50], [0, 50]]; // Doppeltrapez = 2800
  const optC_pts = [[0, 0], [60, 0], [60, 20], [40, 20], [40, 40], [20, 40], [20, 60], [0, 60]]; // Treppe = 2400
  const optD_pts = target_pts; // Meißel-Pfeil mit abgeflachter Stirn (Correct)

  questions.push({
    id: "fz-sim11-q10",
    simulationId: "fz-sim11",
    questionNumber: 10,
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [80, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [80, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [100, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 und p2 (je 40 × 20, Fläche je 800) bilden zusammen einen Pfeilschaft von 80 × 20 (Fläche 1600) von x = 0 bis 80 (y = 20 bis 40). Rechts schließt der Pfeilkopf an: Quadrat p3 (20 × 20, Fläche 400) bildet den Kern von x = 80 bis 100. Darunter sitzt Dreieck p5 (Fläche 200) mit Schräge von (80, 0) nach (100, 20), darüber Dreieck p4 (Fläche 200) mit Schräge von (80, 60) nach (100, 40). Die vorderste Spitze bildet eine vertikale Kante von 20 Einheiten Länge bei x = 100 (Meißel-Kopf). Gesamtfläche: 1600 + 400 + 200 + 200 = 2400 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A läuft vorne in einer einzigen spitzen Ecke bei (100, 30) aus. Figur B ist ein symmetrisches Doppeltrapez. Figur C ist eine treppenförmige Zikkurat.",
    metadata: { pieceCount: 5, shapeFamily: "Meißel-Pfeil", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: B
// Theme: Symmetrisches Doppelspitz-Hexagon mit breitem Mittelblock
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 60], [0, 60]]; // Rechteck 40x60, area 2400
  const p2_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  const p5_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30, area 300
  // Total area = 2400 + 4 * 300 = 3600
  const target_pts = [[30, 0], [70, 0], [90, 30], [70, 60], [30, 60], [10, 30]]; // Doppelspitz-Hexagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 25, 30);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 245, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 325, 65);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = target_pts; // Doppelspitz-Hexagon (Correct)
  const optC_pts = [[50, 0], [90, 45], [50, 90], [10, 45]]; // Raute = 3600
  const optD_pts = [[20, 0], [80, 0], [90, 35], [60, 60], [10, 60], [0, 30]]; // Asymmetrisch = 3400

  questions.push({
    id: "fz-sim11-q11",
    simulationId: "fz-sim11",
    questionNumber: 11,
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
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [10, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 180, translation: [30, 60], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [70, 0], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [90, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 60, Fläche 2400) bildet das massive Zentrum von x = 30 bis 70 (y = 0 bis 60). Links formen die Dreiecke p2 und p3 (je 300 Fläche) eine nach links zeigende Spitze bei (10, 30). Rechts formen die Dreiecke p4 und p5 (je 300 Fläche) eine nach rechts zeigende Spitze bei (90, 30). Das Resultat ist ein punktsymmetrisches Doppelspitz-Hexagon mit horizontalen Kanten oben und unten von 40 Einheiten Länge. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur C ist eine geneigte Raute ohne horizontale Grund- und Deckkanten. Figur D ist ein asymmetrisches Heptagon.",
    metadata: { pieceCount: 5, shapeFamily: "Doppelspitz-Hexagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: A
// Theme: Burg-Monument mit zwei bekrönten Ecktürmen
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 20], [0, 20]]; // Rechteck 60x20, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [20, 0], [10, 20]]; // Dreieck 20x20, area 200
  const p5_pts = [[0, 0], [20, 0], [10, 20]]; // Dreieck 20x20, area 200
  // Total area = 1200 + 600 + 600 + 200 + 200 = 2800
  const target_pts = [[0, 0], [60, 0], [60, 50], [50, 70], [40, 50], [40, 20], [20, 20], [20, 50], [10, 70], [0, 50]]; // Burg-Monument, area 2800

  const p1_canvas = transformPoints(p1_pts, 0, 20, 50);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 245, 50);
  const p5_canvas = transformPoints(p5_pts, 0, 315, 50);

  const optA_pts = target_pts; // Burg-Monument (Correct)
  const optB_pts = [[0, 0], [60, 0], [60, 30], [40, 30], [40, 60], [30, 80], [20, 60], [20, 30], [0, 30]]; // Einzelturm = 2600
  const optC_pts = [[0, 0], [80, 0], [65, 45], [15, 45]]; // Großtrapez = 2925
  const optD_pts = [[0, 0], [60, 0], [60, 50], [40, 50], [40, 20], [20, 20], [20, 50], [0, 50]]; // U-Kanal = 2400

  questions.push({
    id: "fz-sim11-q12",
    simulationId: "fz-sim11",
    questionNumber: 12,
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 50], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [40, 50], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 20, Fläche 1200) bildet das durchgehende Fundament. Links sitzt der Turmschaft p2 (20 × 30, Fläche 600) bekrönt von Dreieck p4 (20 × 20, Fläche 200) mit Firstspitze bei (10, 70). Rechts sitzt spiegelbildlich der Turmschaft p3 (20 × 30, Fläche 600) bekrönt von Dreieck p5 (20 × 20, Fläche 200) mit Firstspitze bei (50, 70). Dazwischen liegt von x = 20 bis 40 auf Höhe y = 20 ein vertiefter Burghof. Gesamtfläche: 1200 + 2 × 600 + 2 × 200 = 2800 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B besitzt nur einen einzelnen Mittelturm. Figur C ist ein schlichtes Großtrapez. Figur D ist ein U-Kanal ohne spitze Turmdächer.",
    metadata: { pieceCount: 5, shapeFamily: "Burg-Monument", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: E (Genuine Option E)
// Theme: Echte Option-E: Steigungs- und Kanteninkompatibilität bei Parallelogramm
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [15, 0], [0, 30]]; // Dreieck Katheten 15x30, area 225
  const p4_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck Katheten 25x30, area 375
  const p5_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck Katheten 30x20, area 300
  // Total piece area = 900 + 1200 + 225 + 375 + 300 = 3000
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 90, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 180, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 245, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 325, 65);

  const optA_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Hexagon = 3600
  const optB_pts = [[0, 0], [90, 0], [70, 35], [20, 35]]; // Symmetrisches Trapez = 2800
  const optC_pts = [[0, 0], [75, 0], [95, 40], [20, 40]]; // Parallelogramm = 3000 (Steigungsfalle)
  const optD_pts = [[0, 0], [70, 0], [70, 30], [45, 30], [45, 60], [0, 60]]; // Treppe = 3450

  questions.push({
    id: "fz-sim11-q13",
    simulationId: "fz-sim11",
    questionNumber: 13,
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
    assembly: [],
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt 900 + 1200 + 225 + 375 + 300 = 3000 Einheiten. Das Parallelogramm in Figur C besitzt zwar dieselbe Fläche (75 × 40 = 3000), verlangt jedoch an beiden Flanken identische Neigungswinkel mit Steigung 2,0 (Höhe 40 auf 20 horizontalen Versatz). Unter den Teilstücken existiert mit p3 (30/15 = 2,0) nur ein einziges Teilstück mit diesem Steigungsverhältnis; die anderen beiden Dreiecke p4 (30/25 = 1,2) und p5 (20/30 = 0,67) besitzen völlig inkompatible Winkel. Ein Parallelogramm lässt sich daher geometrisch unmöglich schließen. Figuren A (3600), B (2800) und D (3450) scheiden über die Fläche aus. Option E ist die einzig korrekte Antwort.\n\nAusschluss: A (3600 ≠ 3000), B (2800 ≠ 3000), C (Winkelinkompatibilität: Parallelogrammflanken verlangen zweimal Steigung 2,0), D (3450 ≠ 3000).",
    metadata: { pieceCount: 5, shapeFamily: "Fangfrage", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q14: Schwer (6 pieces), Ans: C
// Theme: Asymmetrisches Kathedralen-Polygon aus 6 Elementen
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p5_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  const p6_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck 30x20, area 300
  // Total area = 900 + 600 + 600 + 600 + 300 + 300 = 3300
  const target_pts = [[20, 0], [50, 0], [50, 20], [70, 20], [50, 50], [50, 70], [20, 90], [20, 50], [0, 50], [0, 20], [20, 20]]; // Kathedrale, area 3300

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 80, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 140, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 200, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 260, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 330, 65);

  const optA_pts = [[20, 0], [50, 0], [50, 20], [70, 20], [70, 50], [50, 50], [50, 70], [20, 70], [20, 50], [0, 50], [0, 20], [20, 20]]; // Kreuz = 3300
  const optB_pts = [[0, 0], [70, 0], [70, 30], [50, 30], [50, 60], [20, 60], [20, 30], [0, 30]]; // Stufenturm = 3000
  const optC_pts = target_pts; // Kathedralen-Polygon (Correct)
  const optD_pts = [[0, 0], [80, 0], [60, 50], [15, 50]]; // Großtrapez = 3250

  questions.push({
    id: "fz-sim11-q14",
    simulationId: "fz-sim11",
    questionNumber: 14,
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
      { id: "p6", points: p6_pts, canvasPoints: p6_canvas, area: polygonArea(p6_pts) },
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
      { pieceId: "p2", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 50], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [70, 50], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [20, 70], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Das vertikale Mittelschiff wird aus p2 (30 × 20), p1 (30 × 30) und p3 (30 × 20) zu einer Säule von 30 × 70 (Fläche 2100) von x = 20 bis 50 zusammengesetzt. Links ragt das rechteckige Querschiff p4 (20 × 30, Fläche 600) von x = 0 bis 20 hervor. Rechts bildet Dreieck p5 (20 × 30, Fläche 300) eine schräge Stützflanke von (70, 20) nach (50, 50). Oben schließt Dreieck p6 (30 × 20, Fläche 300) als Pultdachspitze mit Scheitelpunkt bei (20, 90) ab. Gesamtfläche: 2100 + 600 + 300 + 300 = 3300 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rein rechtwinkliges Kreuz ohne Schrägkanten. Figur B ist ein Stufenturm. Figur D ist ein einzelnes Großtrapez.",
    metadata: { pieceCount: 6, shapeFamily: "Kathedralen-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q15: Schwer (6 pieces), Ans: D
// Theme: Großes rechtwinkliges Dreieck aus 6 Teilstücken (Continuous Slant)
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p4_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p5_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p6_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  // Total area = 900 + 900 + 4 * 450 = 3600
  const target_pts = [[0, 0], [120, 0], [60, 60]]; // Großes gleichschenklig-rechtwinkliges Dreieck, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 75, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 140, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 210, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 275, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 65);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = [[0, 0], [100, 0], [80, 40], [20, 40]]; // Symmetrisches Trapez = 3600
  const optC_pts = [[0, 0], [80, 0], [110, 40], [30, 40]]; // Parallelogramm = 3200
  const optD_pts = target_pts; // Großes rechtwinkliges Dreieck (Correct)

  questions.push({
    id: "fz-sim11-q15",
    simulationId: "fz-sim11",
    questionNumber: 15,
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
      { id: "p6", points: p6_pts, canvasPoints: p6_canvas, area: polygonArea(p6_pts) },
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
      { pieceId: "p4", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [90, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [90, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die 6 Teilstücke formen ein großes gleichschenkliges Dreieck mit Grundlinie 120 (von x = 0 bis 120 auf y = 0) und Scheitelhöhe 60 bei (60, 60). Das zentrale Basisband bilden die Quadrate p1 und p2 (je 900 Fläche) von x = 30 bis 90. Links schließt Dreieck p4 (Fläche 450) von (0, 0) bis (30, 30) an, rechts Dreieck p6 (Fläche 450) von (90, 30) bis (120, 0). Den oberen First von y = 30 bis 60 formen die Dreiecke p3 und p5 (je 450 Fläche). Die beiden Seitenflanken verlaufen als perfekte, durchgehende 45°-Geraden von (0, 0) nach (60, 60) bzw. von (60, 60) nach (120, 0). Gesamtfläche: 120 × 60 / 2 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Quadrat ohne Dreiecksspitze. Figur B ist ein symmetrisches Trapez mit abgestumpfter Deckfläche. Figur C ist ein schräges Parallelogramm.",
    metadata: { pieceCount: 6, shapeFamily: "Großdreieck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Verification & Output Generation
// =========================================================================

console.log(`Generated ${questions.length} questions.`);

// 1. Check Answer Count
const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
questions.forEach((q) => counts[q.correctAnswer]++);
console.log("Answer count:", counts);

if (counts.A !== 3 || counts.B !== 3 || counts.C !== 3 || counts.D !== 3 || counts.E !== 3) {
  console.error("FAIL: Non-balanced answer keys!");
  process.exit(1);
}

// 2. Check Difficulty Count
const diffCounts = { Leicht: 0, Mittel: 0, Schwer: 0 };
questions.forEach((q) => diffCounts[q.difficulty]++);
console.log("Difficulty count:", diffCounts);

if (diffCounts.Leicht !== 4 || diffCounts.Mittel !== 6 || diffCounts.Schwer !== 5) {
  console.error("FAIL: Incorrect difficulty distribution!");
  process.exit(1);
}

// 3. Mathematical Area Verification
questions.forEach((q) => {
  const sumPiece = q.pieces.reduce((acc, p) => acc + p.area, 0);
  const targetArea = polygonArea(q.targetFigure.polygon);

  if (q.correctAnswer !== "E") {
    const diff = Math.abs(sumPiece - targetArea);
    if (diff > 0.01) {
      console.error(`FAIL: Area mismatch in ${q.id}: pieces=${sumPiece}, target=${targetArea}`);
      process.exit(1);
    }
  }
});

console.log("ALL 15 QUESTIONS MATHEMATICALLY VALID!");

// 4. Output to fzSimulation11.ts
const outputPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation11.ts");
const tsContent = `import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_11_QUESTIONS: FzQuestionData[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log("Written to", outputPath);
