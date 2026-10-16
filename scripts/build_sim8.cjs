/**
 * Generator and Validator for MedAT FZ Simulation 8
 * Theme: Grandmaster-Simulation: Diagonalschnitte, Schräganker & Symmetriebruch
 * 15 Aufgaben, 20 Min. Prüfungszeit (~80s pro Aufgabe)
 * Distribution: 4 Leicht, 6 Mittel, 5 Schwer
 * Balanced Key: 3 A, 3 B, 3 C, 3 D, 3 E (Genuine E: Q02, Q07, Q12)
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
// Theme: Abgetreppter Keil (Chamfered Block)
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 40], [0, 40]]; // Rechteck 50x40, area 2000
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p3_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  // Total area = 2000 + 400 + 200 = 2600
  const target_pts = [[0, 0], [70, 0], [70, 20], [50, 40], [0, 40]]; // Abgetreppter Keil, area 2600

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 265, 45);

  const optA_pts = [[0, 0], [65, 0], [65, 40], [0, 40]]; // Rechteck = 2600
  const optB_pts = [[0, 0], [70, 0], [50, 40], [10, 40]]; // Parallelogramm = 2000
  const optC_pts = [[0, 0], [70, 0], [70, 20], [35, 20], [35, 40], [0, 40]]; // L-Polygon = 2100
  const optD_pts = target_pts; // Abgetreppter Keil (Correct)

  questions.push({
    id: "fz-sim8-q01",
    simulationId: "fz-sim8",
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
      { pieceId: "p2", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [50, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 40, Fläche 2000) bildet den linken massiven Hauptblock von x = 0 bis 50. Rechts schließt im unteren Bereich von x = 50 bis 70 Teilstück p2 (Quadrat 20 × 20, Fläche 400) von y = 0 bis 20 an. Darüber wird Teilstück p3 (Dreieck 20 × 20, Fläche 200) aufgesetzt, dessen Hypotenuse eine diagonale Abschrägung von (70, 20) nach (50, 40) bildet. Gesamtfläche: 2000 + 400 + 200 = 2600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist ein Parallelogramm. Figur C ist ein rein rechtwinkliges L-Polygon ohne Schrägkante mit Flächendefizit.",
    metadata: { pieceCount: 3, shapeFamily: "Abgetreppter Keil", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Disparate Schrägungswinkel
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40, area 2400
  const p2_pts = [[0, 0], [25, 0], [25, 40]]; // Dreieck 25x40 / 2, area 500 (Winkel ~58,0°)
  const p3_pts = [[0, 0], [15, 0], [0, 40]]; // Dreieck 15x40 / 2, area 300 (Winkel ~69,4°)
  // Total piece area = 2400 + 500 + 300 = 3200
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 180, 260, 75);

  const optA_pts = [[20, 0], [80, 0], [100, 40], [0, 40]]; // Symmetrisches Trapez = 3200 (erfordert 2x identische Dreiecke!)
  const optB_pts = [[0, 0], [70, 0], [85, 40], [15, 40]]; // Parallelogramm = 2800 (erfordert identische Winkel)
  const optC_pts = [[0, 0], [80, 0], [80, 40], [0, 40]]; // Rechteck 80x40 = 3200 (Fläche stimmt, aber Dreiecke inkompatibel für Rechteck)
  const optD_pts = [[0, 0], [75, 0], [75, 30], [35, 30], [35, 60], [0, 60]]; // L-Polygon = 3300

  questions.push({
    id: "fz-sim8-q02",
    simulationId: "fz-sim8",
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
    explanation: "Geometrische Analyse: Teilstück p1 ist ein Rechteck von 60 × 40 (Fläche 2400). Teilstück p2 ist ein Dreieck mit Katheten 25 und 40 (Fläche 500, Hypotenuse ~47,17). Teilstück p3 ist ein Dreieck mit Katheten 15 und 40 (Fläche 300, Hypotenuse ~42,72). Die Gesamtfläche beträgt 3200 Einheiten.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 3200. Ein solches erfordert zwei identische Schrägflanken; p2 und p3 besitzen jedoch völlig unterschiedliche Neigungswinkel (~58,0° vs. ~69,4°).\n- Figur B ist ein Parallelogramm, welches zwei kongruente Dreiecke voraussetzt.\n- Figur C ist ein Rechteck von 80 × 40 (Fläche 3200). Um ein Rechteck zu bilden, müssten p2 und p3 an ihren Hypotenusen zusammengefügt ein Rechteck von 20 × 40 ergeben. Da ihre Hypotenusen (47,17 vs. 42,72) ungleich sind, ist ein fugenloses Aneinanderlegen unmöglich.\n- Figur D besitzt eine abweichende Fläche von 3300 Einheiten.\n\nFolglich lässt sich keine der Figuren A–D bilden; Option E ist richtig.",
    metadata: { pieceCount: 3, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q03: Leicht (4 pieces), Ans: B
// Theme: Symmetrisches Trapez aus 2 Rechtecken und 2 Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 600 + 600 + 300 + 300 = 1800
  const target_pts = [[0, 0], [80, 0], [60, 30], [20, 30]]; // Symmetrisches Trapez, area 1800

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 75);

  const optA_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30 = 1800
  const optB_pts = target_pts; // Symmetrisches Trapez (Correct)
  const optC_pts = [[0, 0], [60, 0], [80, 30], [20, 30]]; // Parallelogramm = 1800
  const optD_pts = [[10, 0], [70, 0], [80, 35], [0, 35]]; // Trapez = 2450

  questions.push({
    id: "fz-sim8-q03",
    simulationId: "fz-sim8",
    questionNumber: 3,
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (20 × 30) und p2 (20 × 30) bilden nebeneinander den 40 × 30 Mittelblock von x = 20 bis 60 (Fläche 1200). Links fügt sich Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die linke Flanke von (0, 0) nach (20, 30) bildet. Rechts schließt Teilstück p4 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die rechte Flanke von (80, 0) nach (60, 30) formt. Das Ergebnis ist ein symmetrisches Trapez mit Grundseite 80, Deckseite 40 und Höhe 30. Gesamtfläche: 1200 + 300 + 300 = 1800 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein unproportioniertes Trapez mit abweichender Fläche.",
    metadata: { pieceCount: 4, shapeFamily: "Symmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: A
// Theme: L-Polygon aus 4 kongruenten Quadraten (Tromino-Form)
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  // Total area = 4 * 900 = 3600
  const target_pts = [[0, 0], [90, 0], [90, 30], [30, 30], [30, 60], [0, 60]]; // L-Polygon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 170, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 240, 45);

  const optA_pts = target_pts; // L-Polygon (Correct)
  const optB_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optC_pts = [[20, 0], [40, 0], [40, 40], [60, 40], [60, 60], [0, 60], [0, 40], [20, 40]]; // T-Polygon = 3600
  const optD_pts = [[0, 0], [90, 0], [90, 40], [0, 40]]; // Rechteck 90x40 = 3600

  questions.push({
    id: "fz-sim8-q04",
    simulationId: "fz-sim8",
    questionNumber: 4,
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
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Alle 4 Teilstücke sind kongruente Quadrate von 30 × 30 (Fläche je 900). Drei Quadrate p1, p2 und p3 bilden den durchgehenden horizontalen Schenkel von 90 × 30 von y = 0 bis 30. Das vierte Quadrat p4 wird auf p1 bei x = 0 bis 30 aufgesetzt und formt den vertikalen Schenkel bis y = 60. Es entsteht ein rechtwinkliges L-Polygon mit Gesamtfläche 4 × 900 = 3600 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein 2x2 Quadrat. Figur C ist ein T-Polygon mit abweichender Armgeometrie. Figur D ist ein einfaches Rechteck.",
    metadata: { pieceCount: 4, shapeFamily: "Orthogonales L-Polygon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: C
// Theme: Schiefes Rhomboid-Polygon (Parallelogramm mit Diagonalkern)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const p4_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  // Total area = 1200 + 600 + 450 + 450 = 2700
  const target_pts = [[0, 0], [90, 0], [120, 30], [30, 30]]; // Parallelogramm, area 2700

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 290, 75);

  const optA_pts = [[0, 0], [90, 0], [90, 30], [0, 30]]; // Rechteck 90x30 = 2700
  const optB_pts = [[15, 0], [75, 0], [90, 30], [0, 30]]; // Trapez = 2250
  const optC_pts = target_pts; // Parallelogramm (Correct)
  const optD_pts = [[0, 0], [90, 0], [60, 30], [30, 30]]; // Trapez = 1800

  questions.push({
    id: "fz-sim8-q05",
    simulationId: "fz-sim8",
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [70, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 270, translation: [90, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (20 × 30, Fläche 600) formen zusammen einen rechteckigen Mittelblock von 60 × 30 (Fläche 1800) von x = 30 bis 90. Links schließt Teilstück p3 (Dreieck mit Katheten 30 und 30, Fläche 450) von x = 0 bis 30 an. Rechts fügt sich Teilstück p4 (Dreieck 30 × 30, Fläche 450) um 270° gedreht von x = 90 bis 120 an. Beide Schrägflanken verlaufen exakt parallel unter 45°. Das Resultat ist ein Parallelogramm mit Grundseite 90, Deckseite 90 und Höhe 30 mit einer Gesamtfläche von 450 + 1800 + 450 = 2700 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B und D sind Trapeze mit gegensinnig geneigten Flanken.",
    metadata: { pieceCount: 4, shapeFamily: "Rhomboid-Parallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: A
// Theme: Asymmetrisches Großtrapez mit zwei unterschiedlichen Schrägflanken
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  // Total area = 1200 + 900 + 300 + 450 = 2850
  const target_pts = [[0, 0], [120, 0], [90, 30], [20, 30]]; // Asymmetrisches Trapez, area 2850

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 75);

  const optA_pts = target_pts; // Asymmetrisches Großtrapez (Correct)
  const optB_pts = [[0, 0], [95, 0], [95, 30], [0, 30]]; // Rechteck 95x30 = 2850
  const optC_pts = [[10, 0], [100, 0], [90, 30], [20, 30]]; // Schiefes Parallelogramm = 2400
  const optD_pts = [[0, 0], [100, 0], [70, 35], [30, 35]]; // Symmetrisches Trapez = 2450

  questions.push({
    id: "fz-sim8-q06",
    simulationId: "fz-sim8",
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [90, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und Teilstück p2 (30 × 30, Fläche 900) formen zusammen einen rechteckigen Mittelblock von 70 × 30 von x = 20 bis 90. Links schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die Flanke von (0, 0) nach (20, 30) bildet (Neigung ~56,3°). Rechts schließt Teilstück p4 (Dreieck 30 × 30, Fläche 450) an, dessen Hypotenuse die Flanke von (120, 0) nach (90, 30) formt (Neigung 45°). Das Resultat ist ein asymmetrisches Großtrapez mit Grundseite 120, Deckseite 70 und Höhe 30. Gesamtfläche: 300 + 1200 + 900 + 450 = 2850 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit abweichender Fläche. Figur D ist ein symmetrisches Trapez.",
    metadata: { pieceCount: 4, shapeFamily: "Asymmetrisches Großtrapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Kantenüberstand & Hohlraum
// =========================================================================
{
  const p1_pts = [[0, 0], [35, 0], [35, 35], [0, 35]]; // Quadrat 35x35, area 1225
  const p2_pts = [[0, 0], [35, 0], [35, 25], [0, 25]]; // Rechteck 35x25, area 875
  const p3_pts = [[0, 0], [25, 0], [0, 35]]; // Dreieck 25x35 / 2, area 437.5
  const p4_pts = [[0, 0], [20, 0], [0, 35]]; // Dreieck 20x35 / 2, area 350
  // Total piece area = 1225 + 875 + 437.5 + 350 = 2887.5
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 75);

  const optA_pts = [[0, 0], [65, 0], [65, 45], [0, 45]]; // Rechteck 65x45 = 2925 (+37.5)
  const optB_pts = [[10, 0], [70, 0], [80, 40], [0, 40]]; // Trapez = 2800 (-87.5)
  const optC_pts = [[0, 0], [75, 0], [75, 30], [35, 30], [35, 60], [0, 60]]; // L-Polygon = 3300
  const optD_pts = [[0, 0], [70, 0], [85, 35], [15, 35]]; // Parallelogramm = 2450

  questions.push({
    id: "fz-sim8-q07",
    simulationId: "fz-sim8",
    questionNumber: 7,
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
    assembly: [],
    explanation: "Geometrische Analyse: Die Gesamtfläche der 4 Teilstücke summiert sich exakt auf 1225 + 875 + 437,5 + 350 = 2887,5 Flächeneinheiten. Zudem besitzen die Dreiecke p3 und p4 inkompatible Hypotenusen (~43,01 vs. ~40,31).\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 65 × 45 mit einer Fläche von 2925 Einheiten (Disparität: +37,5 Einheiten).\n- Figur B ist ein Trapez mit Fläche 2800 Einheiten (-87,5 Einheiten Defizit).\n- Figur C ist ein L-Polygon mit Fläche 3300 Einheiten.\n- Figur D ist ein Parallelogramm mit Fläche 2450 Einheiten.\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 2887,5 Einheiten übereinstimmt, ist Option E korrekt.",
    metadata: { pieceCount: 4, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q08: Mittel (4 pieces), Ans: D
// Theme: Kerb-Heptagon (Rechteck mit V-Ausschnitt an der Oberseite)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 1200 + 1200 + 300 + 300 = 3000
  const target_pts = [[0, 0], [80, 0], [80, 60], [60, 30], [20, 30], [0, 60]]; // Kerb-Heptagon, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 75);

  const optA_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optB_pts = [[0, 0], [80, 0], [60, 50], [20, 50]]; // Trapez = 3000
  const optC_pts = [[0, 0], [80, 0], [80, 30], [40, 30], [40, 60], [0, 60]]; // L-Polygon = 3600
  const optD_pts = target_pts; // Kerb-Heptagon (Correct)

  questions.push({
    id: "fz-sim8-q08",
    simulationId: "fz-sim8",
    questionNumber: 8,
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) formen zusammen das 80 × 30 Basisband von y = 0 bis 30 (Fläche 2400). Auf der linken Oberseite wird Teilstück p4 (Dreieck 20 × 30, Fläche 300) aufgesetzt, dessen Hypotenuse von (20, 30) nach (0, 60) ansteigt. Auf der rechten Oberseite wird Teilstück p3 (Dreieck 20 × 30, Fläche 300) aufgesetzt, dessen Hypotenuse von (60, 30) nach (80, 60) ansteigt. Zwischen x = 20 und 60 verbleibt ein v-förmig eingesenktes Tal. Gesamtfläche: 2400 + 300 + 300 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Einbuchtung. Figur B ist ein konvexes Trapez. Figur C ist ein asymmetrisches L-Polygon mit Flächenüberschuss.",
    metadata: { pieceCount: 4, shapeFamily: "Kerb-Heptagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q09: Mittel (5 pieces), Ans: B
// Theme: Lateinisches Kreuz aus 5 Elementen (Crosslet)
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p5_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  // Total area = 800 + 4 * 400 = 2400
  const target_pts = [[20, 0], [40, 0], [40, 30], [60, 30], [60, 50], [40, 50], [40, 80], [20, 80], [20, 50], [0, 50], [0, 30], [20, 30]]; // Lateinisches Kreuz, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 230, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 295, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40 = 2400
  const optB_pts = target_pts; // Lateinisches Kreuz (Correct)
  const optC_pts = [[20, 0], [40, 0], [40, 40], [60, 40], [60, 60], [0, 60], [0, 40], [20, 40]]; // T-Polygon = 2400
  const optD_pts = [[0, 0], [60, 0], [60, 20], [20, 20], [20, 80], [0, 80]]; // L-Polygon = 2400

  questions.push({
    id: "fz-sim8-q09",
    simulationId: "fz-sim8",
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
      { pieceId: "p5", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [20, 60], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [40, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p5 (20 × 20), p1 (20 × 40) und p4 (20 × 20) formen übereinandergestapelt den 20 × 80 Schaft von y = 0 bis 80 zwischen x = 20 und 40 (Fläche 1600). Links schließt Teilstück p2 (20 × 20, Fläche 400) von x = 0 bis 20 und y = 30 bis 50 an. Rechts schließt Teilstück p3 (20 × 20, Fläche 400) von x = 40 bis 60 und y = 30 bis 50 an. Es entsteht ein symmetrisches lateinisches Kreuz mit Gesamtfläche 1600 + 400 + 400 = 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Kreuzarme. Figur C ist ein T-förmiges Polygon. Figur D ist ein L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Lateinisches Kreuz", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q10: Mittel (5 pieces), Ans: C
// Theme: Doppelt gestuftes Z-Treppen-Polygon
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p2_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p5_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  // Total area = 5 * 600 = 3000
  const target_pts = [[0, 0], [60, 0], [60, 40], [90, 40], [90, 60], [30, 60], [30, 20], [0, 20]]; // Z-Treppe, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 290, 45);

  const optA_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optB_pts = [[0, 0], [90, 0], [90, 20], [60, 20], [60, 40], [30, 40], [30, 60], [0, 60]]; // Einfache Stufentreppe = 3600
  const optC_pts = target_pts; // Z-Treppen-Polygon (Correct)
  const optD_pts = [[15, 0], [45, 0], [45, 30], [75, 30], [75, 60], [0, 60], [0, 30], [15, 30]]; // T-Polygon = 3150

  questions.push({
    id: "fz-sim8-q10",
    simulationId: "fz-sim8",
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
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 40], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 und p2 (je 30 × 20) formen den horizontalen Basisbalken von 60 × 20 von y = 0 bis 20 (Fläche 1200). Teilstück p3 (30 × 20) verbindet als vertikale Stufe von x = 30 bis 60 und y = 20 bis 40 (Fläche 600). Oben schließen p4 und p5 (je 30 × 20) von x = 30 bis 90 und y = 40 bis 60 als oberer horizontaler Balken an (Fläche 1200). Das Resultat ist ein doppelt gestuftes, punktsymmetrisches Z-förmiges Polygon mit Gesamtfläche 1200 + 600 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Versatz. Figur B ist eine einseitig abfallende Treppe mit abweichender Fläche. Figur D ist ein unregelmäßiges T-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Z-Treppen-Polygon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: D
// Theme: Symmetrisches Krag-Trapez (Overhanging Cantilever Trapezoid)
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  const p5_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  // Total area = 900 + 900 + 300 + 300 + 1200 = 3600
  const target_pts = [[30, 0], [70, 0], [70, 30], [100, 30], [80, 60], [20, 60], [0, 30], [30, 30]]; // Krag-Trapez, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 290, 45);

  const optA_pts = [[0, 0], [80, 0], [80, 45], [0, 45]]; // Rechteck 80x45 = 3600
  const optB_pts = [[10, 0], [90, 0], [80, 40], [20, 40]]; // Einfaches Trapez = 3200
  const optC_pts = [[0, 0], [80, 0], [80, 30], [40, 30], [40, 60], [0, 60]]; // L-Polygon = 3600
  const optD_pts = target_pts; // Krag-Trapez (Correct)

  questions.push({
    id: "fz-sim8-q11",
    simulationId: "fz-sim8",
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
      { pieceId: "p5", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 30], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [50, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [80, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p5 (40 × 30, Fläche 1200) bildet den schmaleren zentralen Sockel von x = 30 bis 70 und y = 0 bis 30. Auf der Oberseite (y = 30 bis 60) ruht ein breiter Überhang von x = 0 bis 100, bestehend aus Teilstück p3 (Dreieck 20 × 30, Fläche 300) ganz links, den Quadraten p1 und p2 (je 30 × 30, Fläche je 900) in der Mitte und Teilstück p4 (Dreieck 20 × 30, Fläche 300) ganz rechts. Die beiden Dreiecke bilden die symmetrischen Schrägen von (0, 30) nach (20, 60) bzw. von (100, 30) nach (80, 60). Gesamtfläche: 1200 + 2400 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Kragarm. Figur B ist ein einfaches Trapez. Figur C ist ein L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Krag-Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Disparate Schrägkanten im 5-Teile-Verbund
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck 25x30 / 2, area 375
  const p5_pts = [[0, 0], [15, 0], [0, 30]]; // Dreieck 15x30 / 2, area 225
  // Total piece area = 1500 + 900 + 600 + 375 + 225 = 3600
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 320, 75);

  const optA_pts = [[20, 0], [100, 0], [120, 30], [0, 30]]; // Symmetrisches Trapez = 3600 (erfordert 2x identische Dreiecke!)
  const optB_pts = [[0, 0], [80, 0], [95, 35], [15, 35]]; // Parallelogramm = 2800 (erfordert identische Winkel)
  const optC_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck 70x50 = 3500 (Fläche weicht ab)
  const optD_pts = [[20, 0], [60, 0], [85, 30], [60, 60], [20, 60], [0, 30]]; // Hexagon = 3750

  questions.push({
    id: "fz-sim8-q12",
    simulationId: "fz-sim8",
    questionNumber: 12,
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
    explanation: "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1500 + 900 + 600 + 375 + 225 = 3600 Flächeneinheiten. Allerdings besitzen die beiden Dreiecke p4 und p5 inkompatible Katheten (25 und 15 bei Höhe 30) mit Hypotenusen von ~39,05 und ~33,54.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 3600. Es erfordert zwingend zwei kongruente Dreiecke mit identischer Kathetenlänge; p4 und p5 weisen jedoch verschiedene Neigungen (~50,2° vs. ~63,4°) auf.\n- Figur B ist ein Parallelogramm, welches zwei Dreiecke mit identischem Schrägungswinkel benötigt (Fläche 2800).\n- Figur C ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (Flächendefizit: 100 Einheiten).\n- Figur D ist ein Sechseck mit einer Fläche von 3750 Einheiten (Überschuss: 150 Einheiten).\n\nDa keine der Optionen A–D gebildet werden kann, ist Option E korrekt.",
    metadata: { pieceCount: 5, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: A
// Theme: Asymmetrisches Zinnen-Chalet (Chalet-Polygon mit Doppel-Schräge)
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const p5_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 1500 + 900 + 600 + 450 + 300 = 3750
  const target_pts = [[0, 0], [80, 0], [80, 30], [70, 30], [50, 60], [30, 60], [0, 30]]; // Chalet-Polygon, area 3750

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 315, 75);

  const optA_pts = target_pts; // Chalet-Polygon (Correct)
  const optB_pts = [[0, 0], [75, 0], [75, 50], [0, 50]]; // Rechteck 75x50 = 3750
  const optC_pts = [[0, 0], [80, 0], [60, 55], [20, 55]]; // Symmetrisches Trapez = 3850
  const optD_pts = [[0, 0], [80, 0], [80, 30], [45, 30], [45, 65], [0, 65]]; // L-Polygon = 4125

  questions.push({
    id: "fz-sim8-q13",
    simulationId: "fz-sim8",
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
      { pieceId: "p2", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [50, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (50 × 30, Fläche 1500) und p2 (30 × 30, Fläche 900) formen zusammen die 80 × 30 Basis von y = 0 bis 30 (Fläche 2400). Auf der Oberseite (y = 30 bis 60) schließt links Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt. In der Mitte bildet Teilstück p3 (Rechteck 20 × 30, Fläche 600) den Turmkörper von x = 30 bis 50. Rechts schließt Teilstück p5 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse von (50, 60) nach (70, 30) abfällt. Die Kante von (70, 30) bis (80, 30) verbleibt als waagrechte Schulter. Gesamtfläche: 2400 + 450 + 600 + 300 = 3750 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Dachaufbau. Figur C ist ein rein symmetrisches Trapez. Figur D ist ein L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Chalet-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q14: Schwer (5 pieces), Ans: C
// Theme: Dreistufige Symmetrische Stufenpyramide (Zikkurat)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p5_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  // Total area = 800 + 800 + 3 * 400 = 2800
  const target_pts = [[0, 0], [80, 0], [80, 20], [60, 20], [60, 40], [50, 40], [50, 60], [30, 60], [30, 40], [20, 40], [20, 20], [0, 20]]; // Zikkurat, area 2800

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 230, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 295, 45);

  const optA_pts = [[0, 0], [70, 0], [70, 40], [0, 40]]; // Rechteck 70x40 = 2800
  const optB_pts = [[0, 0], [80, 0], [60, 45], [20, 45]]; // Trapez = 3000
  const optC_pts = target_pts; // Dreistufige Zikkurat (Correct)
  const optD_pts = [[0, 0], [80, 0], [80, 20], [40, 20], [40, 50], [0, 50]]; // L-Polygon = 2800

  questions.push({
    id: "fz-sim8-q14",
    simulationId: "fz-sim8",
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
      { pieceId: "p3", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [30, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 20) und p2 (40 × 20) bilden nebeneinander die 80 × 20 Basis von y = 0 bis 20 (Fläche 1600). Mittig darauf bilden p3 und p4 (je 20 × 20) die zweite Stufe von 40 × 20 von x = 20 bis 60 und y = 20 bis 40 (Fläche 800). Den Abschluss bildet p5 (Quadrat 20 × 20, Fläche 400) mittig zentriert von x = 30 bis 50 und y = 40 bis 60. Es entsteht eine vollkommen spiegelsymmetrische dreistufige Stufenpyramide mit Gesamtfläche 1600 + 800 + 400 = 2800 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Abstufungen. Figur B ist ein Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Dreistufige Zikkurat", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q15: Schwer (6 pieces), Ans: B
// Theme: Großes Diagonalschnitt-Oktagon (Grandmaster Finale aus 6 Teilen)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p2_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20 / 2, area 200
  const p4_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  const p5_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20 / 2, area 200
  const p6_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  // Total area = 1600 + 800 + 4 * 200 = 3200
  const target_pts = [[20, 0], [60, 0], [80, 20], [60, 20], [60, 40], [80, 40], [60, 60], [20, 60], [0, 40], [20, 40], [20, 20], [0, 20]]; // Diagonalschnitt-Oktagon, area 3200

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 230, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 285, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 65);

  const optA_pts = [[0, 0], [80, 0], [80, 40], [0, 40]]; // Rechteck 80x40 = 3200
  const optB_pts = target_pts; // Diagonalschnitt-Oktagon (Correct)
  const optC_pts = [[0, 0], [80, 0], [60, 45], [20, 45]]; // Trapez = 3000
  const optD_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Symmetrisches Hexagon = 3600

  questions.push({
    id: "fz-sim8-q15",
    simulationId: "fz-sim8",
    questionNumber: 15,
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
      { pieceId: "p3", rotationDeg: 180, translation: [40, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [20, 40], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [60, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p2 (40 × 20) und p1 (40 × 40) formen übereinander den zentralen rechteckigen Kern von 40 × 60 (Fläche 2400) von x = 20 bis 60. An den vier äußeren Ecken schließen die vier rechtwinkligen Dreiecke p3, p4, p5 und p6 (je 20 × 20, Fläche je 200) an: zwei linksseitige Dreiecke mit Spitzen bei (0, 20) und (0, 40) sowie zwei rechtsseitige Dreiecke mit Spitzen bei (80, 20) und (80, 40). In der Taille verbleiben lichte Buchten. Gesamtfläche: 2400 + 4 × 200 = 3200 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Einkerbungen. Figur C ist ein Trapez. Figur D ist ein einfaches konvexes Sechseck.",
    metadata: { pieceCount: 6, shapeFamily: "Diagonalschnitt-Oktagon", requiresRotation: true, isEAnswer: false },
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

// 4. Output to fzSimulation8.ts
const outputPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation8.ts");
const tsContent = `import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_8_QUESTIONS: FzQuestionData[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log("Written to", outputPath);
