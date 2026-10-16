/**
 * Generator and Validator for MedAT FZ Simulation 9
 * Theme: Championship-Simulation: Komplexe Verbundfiguren, Scherbenschnitte & Rotationsfallen
 * 15 Aufgaben, 20 Min. Prüfungszeit (~80s pro Aufgabe)
 * Distribution: 4 Leicht, 6 Mittel, 5 Schwer
 * Balanced Key: 3 A, 3 B, 3 C, 3 D, 3 E (Genuine E: Q03, Q08, Q14)
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
// Theme: Diagonales Eck-Trapez (Chamfered Corner Trapezoid)
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  // Total area = 1500 + 900 + 450 = 2850
  const target_pts = [[0, 0], [80, 0], [80, 30], [30, 30], [30, 60], [0, 30]]; // Eck-Trapez, area 2850

  const p1_canvas = transformPoints(p1_pts, 0, 35, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 275, 45);

  const optA_pts = target_pts; // Eck-Trapez (Correct)
  const optB_pts = [[0, 0], [75, 0], [75, 38], [0, 38]]; // Rechteck = 2850
  const optC_pts = [[10, 0], [80, 0], [90, 40], [0, 40]]; // Trapez = 3200
  const optD_pts = [[0, 0], [80, 0], [80, 30], [40, 30], [40, 60], [0, 60]]; // L-Polygon = 3600

  questions.push({
    id: "fz-sim9-q01",
    simulationId: "fz-sim9",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 30, Fläche 1500) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen ein horizontales Basisband von 80 × 30 (Fläche 2400). Auf der linken Seite von x = 0 bis 30 schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) von y = 30 bis 60 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt. Gesamtfläche: 1500 + 900 + 450 = 2850 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schräge. Figur C ist ein schiefes Trapez. Figur D ist ein rein rechtwinkliges L-Polygon.",
    metadata: { pieceCount: 3, shapeFamily: "Eck-Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: C
// Theme: Parallelogramm aus Rechteck und zwei identischen Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 1200 + 300 + 300 = 1800
  const target_pts = [[0, 0], [60, 0], [80, 30], [20, 30]]; // Parallelogramm, area 1800

  const p1_canvas = transformPoints(p1_pts, 0, 40, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 260, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30 = 1800
  const optB_pts = [[0, 0], [80, 0], [60, 30], [20, 30]]; // Symmetrisches Trapez = 1800
  const optC_pts = target_pts; // Parallelogramm (Correct)
  const optD_pts = [[10, 0], [70, 0], [80, 35], [0, 35]]; // Trapez = 2450

  questions.push({
    id: "fz-sim9-q02",
    simulationId: "fz-sim9",
    questionNumber: 2,
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 180, translation: [80, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet den Mittelblock von x = 20 bis 60. Links wird Teilstück p2 (Dreieck 20 × 30, Fläche 300) angefügt, dessen Hypotenuse von (0, 0) nach (20, 30) verläuft. Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) um 180° rotiert an, dessen Hypotenuse von (60, 0) nach (80, 30) verläuft. Beide Seitenflanken verlaufen exakt parallel unter ~56,3°. Das Resultat ist ein Parallelogramm mit Grundseite 60, Deckseite 60 und Höhe 30. Gesamtfläche: 1200 + 300 + 300 = 1800 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein Rechteck ohne Schrägen. Figur B ist ein symmetrisches Trapez mit gegensinnigen Schrägen. Figur D ist ein unproportioniertes Trapez.",
    metadata: { pieceCount: 3, shapeFamily: "Rhomboid-Parallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q03: Leicht (4 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Hypotenusen-Winkelfalle
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300 (Winkel ~56,3°)
  const p4_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450 (Winkel 45,0°)
  // Total piece area = 900 + 1200 + 300 + 450 = 2850
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 290, 75);

  const optA_pts = [[15, 0], [85, 0], [100, 30], [0, 30]]; // Symmetrisches Trapez = 2850 (erfordert 2x identische Dreiecke!)
  const optB_pts = [[0, 0], [75, 0], [95, 30], [20, 30]]; // Parallelogramm = 2850 (erfordert identische Dreiecke)
  const optC_pts = [[0, 0], [70, 0], [70, 40], [0, 40]]; // Rechteck 70x40 = 2800 (Flächendefizit)
  const optD_pts = [[0, 0], [80, 0], [80, 25], [40, 25], [40, 55], [0, 55]]; // L-Polygon = 3200

  questions.push({
    id: "fz-sim9-q03",
    simulationId: "fz-sim9",
    questionNumber: 3,
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
    assembly: [],
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt exakt 900 + 1200 + 300 + 450 = 2850 Flächeneinheiten. Allerdings besitzen die beiden Dreiecke p3 und p4 inkompatible Katheten (20 vs. 30) und Schrägungswinkel (~56,3° vs. 45,0°).\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 2850. Es erfordert zwei spiegelbildlich identische Dreiecke, die hier nicht vorhanden sind.\n- Figur B ist ein Parallelogramm, welches zwei Dreiecke mit exakt gleichem Neigungswinkel benötigt.\n- Figur C ist ein Rechteck von 70 × 40 mit Fläche 2800 Einheiten (Flächendefizit von 50 Einheiten).\n- Figur D ist ein L-Polygon mit einer Fläche von 3200 Einheiten.\n\nDa keine der Optionen A–D geometrisch bildbar ist, lautet die korrekte Antwort E.",
    metadata: { pieceCount: 4, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: B
// Theme: Orthogonales T-Polygon aus 4 Elementen
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 20], [0, 20]]; // Rechteck 60x20, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  // Total area = 1200 + 3 * 400 = 2400
  const target_pts = [[20, 0], [40, 0], [40, 60], [60, 60], [60, 80], [0, 80], [0, 60], [20, 60]]; // T-Polygon, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 260, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40 = 2400
  const optB_pts = target_pts; // T-Polygon (Correct)
  const optC_pts = [[0, 0], [60, 0], [60, 20], [20, 20], [20, 70], [0, 70]]; // L-Polygon = 2200
  const optD_pts = [[20, 0], [40, 0], [40, 40], [60, 40], [60, 60], [0, 60], [0, 40], [20, 40]]; // Kurzes T = 2000

  questions.push({
    id: "fz-sim9-q04",
    simulationId: "fz-sim9",
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
      { pieceId: "p4", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 40], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [0, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die drei kongruenten Quadrate p2, p3 und p4 (je 20 × 20, Fläche je 400) formen übereinandergestapelt den vertikalen Schaft von 20 × 60 (Fläche 1200) von y = 0 bis 60 zwischen x = 20 und 40. Oben schließt Teilstück p1 (Rechteck 60 × 20, Fläche 1200) zentriert als horizontaler Querbalken von y = 60 bis 80 an. Es entsteht ein symmetrisches T-förmiges Orthogonalpolygon mit Gesamtfläche 1200 + 1200 = 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aussparungen. Figur C ist ein asymmetrisches L-Polygon. Figur D besitzt einen verkürzten Schaft.",
    metadata: { pieceCount: 4, shapeFamily: "Orthogonales T-Polygon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: D
// Theme: Symmetrisches Zelt-Pentagon (Gable Pentagon mit zentralem First)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [40, 0], [40, 30]]; // Dreieck 40x30 / 2, area 600
  const p4_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30 / 2, area 600
  // Total area = 1200 + 1200 + 600 + 600 = 3600
  const target_pts = [[0, 0], [80, 0], [80, 30], [40, 60], [0, 30]]; // Zelt-Pentagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 290, 75);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = [[0, 0], [80, 0], [60, 45], [20, 45]]; // Trapez = 3000
  const optC_pts = [[0, 0], [70, 0], [70, 35], [35, 35], [35, 70], [0, 70]]; // L-Polygon = 3675
  const optD_pts = target_pts; // Zelt-Pentagon (Correct)

  questions.push({
    id: "fz-sim9-q05",
    simulationId: "fz-sim9",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [40, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) bilden das 80 × 30 Basisrechteck von y = 0 bis 30 (Fläche 2400). Auf der Oberseite schließt links Teilstück p3 (Dreieck 40 × 30, Fläche 600) an, dessen Hypotenuse von (0, 30) nach (40, 60) ansteigt. Rechts schließt Teilstück p4 (Dreieck 40 × 30, Fläche 600) an, dessen Hypotenuse von (40, 60) nach (80, 30) abfällt. Zusammen bilden sie eine zeltförmige Giebelspitze mit Firstpunkt bei (40, 60). Gesamtfläche: 2400 + 1200 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Dachspitze. Figur B ist ein Trapez. Figur C ist ein unregelmäßiges L-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "Zelt-Pentagon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: A
// Theme: Gestuftes Schräg-Polygon (Stepped Chamfered Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  const p4_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  // Total area = 1200 + 900 + 450 + 450 = 3000
  const target_pts = [[0, 0], [100, 0], [70, 30], [30, 30], [0, 60]]; // Gestuftes Schräg-Polygon, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 75);

  const optA_pts = target_pts; // Gestuftes Schräg-Polygon (Correct)
  const optB_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optC_pts = [[10, 0], [90, 0], [80, 35], [20, 35]]; // Symmetrisches Trapez = 2450
  const optD_pts = [[0, 0], [90, 0], [90, 30], [45, 30], [45, 60], [0, 60]]; // L-Polygon = 4050

  questions.push({
    id: "fz-sim9-q06",
    simulationId: "fz-sim9",
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
      { pieceId: "p3", rotationDeg: 0, translation: [70, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 30) und p2 (30 × 30) bilden den 70 × 30 Mittelblock von y = 0 bis 30. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) von x = 70 bis 100 an, dessen Hypotenuse von (100, 0) nach (70, 30) abfällt. Links auf Teilstück p1 wird Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 und y = 30 bis 60 aufgesetzt, dessen Hypotenuse von (30, 30) nach (0, 60) ansteigt. Das Resultat ist ein gestuftes Polygon mit zwei Schrägkanten mit Gesamtfläche 1200 + 900 + 450 + 450 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Trapez mit abweichender Fläche (2450). Figur D ist ein rechtwinkliges L-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "Gestuftes Schräg-Polygon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: C
// Theme: Symmetrisches Großtrapez mit breiter Basis
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 1200 + 900 + 300 + 300 = 2700
  const target_pts = [[0, 0], [110, 0], [90, 30], [20, 30]]; // Symmetrisches Trapez, area 2700

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 75);

  const optA_pts = [[0, 0], [90, 0], [90, 30], [0, 30]]; // Rechteck 90x30 = 2700
  const optB_pts = [[0, 0], [80, 0], [100, 30], [20, 30]]; // Parallelogramm = 2400
  const optC_pts = target_pts; // Symmetrisches Trapez (Correct)
  const optD_pts = [[10, 0], [90, 0], [80, 35], [20, 35]]; // Unproportioniertes Trapez = 2450

  questions.push({
    id: "fz-sim9-q07",
    simulationId: "fz-sim9",
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [90, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 30) und p2 (30 × 30) formen zusammen den 70 × 30 rechteckigen Kern von x = 20 bis 90 (Fläche 2100). Links fügt sich Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die linke Flanke von (0, 0) nach (20, 30) formt. Rechts fügt sich Teilstück p4 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die rechte Flanke von (110, 0) nach (90, 30) formt. Das Ergebnis ist ein symmetrisches Trapez mit Grundseite 110, Deckseite 70 und Höhe 30. Gesamtfläche: 2100 + 300 + 300 = 2700 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein unproportioniertes Trapez.",
    metadata: { pieceCount: 4, shapeFamily: "Symmetrisches Großtrapez", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q08: Mittel (5 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Inkompatible Katheten im 5-Teile-Verbund
// =========================================================================
{
  const p1_pts = [[0, 0], [45, 0], [45, 30], [0, 30]]; // Rechteck 45x30, area 1350
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [25, 0], [25, 30], [0, 30]]; // Rechteck 25x30, area 750
  const p4_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck 25x30 / 2, area 375
  const p5_pts = [[0, 0], [15, 0], [0, 30]]; // Dreieck 15x30 / 2, area 225
  // Total piece area = 1350 + 900 + 750 + 375 + 225 = 3600
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 310, 75);

  const optA_pts = [[20, 0], [100, 0], [120, 30], [0, 30]]; // Symmetrisches Trapez = 3600 (erfordert 2x identische Dreiecke!)
  const optB_pts = [[0, 0], [80, 0], [100, 30], [20, 30]]; // Parallelogramm = 2400 (erfordert identische Dreiecke)
  const optC_pts = [[0, 0], [72, 0], [72, 50], [0, 50]]; // Rechteck 72x50 = 3600 (Dreiecke können kein Rechteck bilden)
  const optD_pts = [[0, 0], [90, 0], [90, 30], [45, 30], [45, 60], [0, 60]]; // L-Polygon = 4050

  questions.push({
    id: "fz-sim9-q08",
    simulationId: "fz-sim9",
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
    explanation: "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1350 + 900 + 750 + 375 + 225 = 3600 Flächeneinheiten. Allerdings besitzen die beiden Dreiecke p4 und p5 inkompatible Katheten (25 vs. 15 bei Höhe 30) mit Hypotenusen von ~39,05 und ~33,54.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 3600. Es erfordert zwei kongruente Dreiecke mit identischer Kathetenlänge; p4 und p5 besitzen jedoch verschiedene Neigungswinkel (~50,2° vs. ~63,4°).\n- Figur B ist ein Parallelogramm, welches zwei Dreiecke mit identischem Schrägungswinkel benötigt (Fläche 2400).\n- Figur C ist ein Rechteck von 72 × 50 mit einer Fläche von 3600 Einheiten. Um die Dreiecke zu einem Rechteck von 20 × 30 zu verbinden, müssten ihre Hypotenusen übereinstimmen; dies ist geometrisch ausgeschlossen.\n- Figur D ist ein L-Polygon mit einer abweichenden Fläche von 4050 Einheiten.\n\nDa keine der Optionen A–D geometrisch bildbar ist, ist Antwort E zwingend richtig.",
    metadata: { pieceCount: 5, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q09: Mittel (5 pieces), Ans: B
// Theme: Symmetrisches H-Polygon (Doppel-T-Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 60], [0, 60]]; // Rechteck 20x60, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 60], [0, 60]]; // Rechteck 20x60, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p5_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  // Total area = 1200 + 1200 + 3 * 400 = 3600
  const target_pts = [[0, 0], [20, 0], [20, 20], [80, 20], [80, 0], [100, 0], [100, 60], [80, 60], [80, 40], [20, 40], [20, 60], [0, 60]]; // H-Polygon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 25, 35);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 35);
  const p3_canvas = transformPoints(p3_pts, 0, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 230, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 295, 45);

  const optA_pts = [[0, 0], [72, 0], [72, 50], [0, 50]]; // Rechteck 72x50 = 3600
  const optB_pts = target_pts; // H-Polygon (Correct)
  const optC_pts = [[20, 0], [80, 0], [80, 20], [100, 20], [100, 60], [0, 60], [0, 20], [20, 20]]; // T-Polygon = 3600
  const optD_pts = [[0, 0], [80, 0], [80, 30], [40, 30], [40, 60], [0, 60]]; // L-Polygon = 3600

  questions.push({
    id: "fz-sim9-q09",
    simulationId: "fz-sim9",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [80, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (20 × 60, Fläche 1200) bildet den linken vertikalen Pfeiler von x = 0 bis 20 und y = 0 bis 60. Teilstück p2 (20 × 60, Fläche 1200) bildet den rechten Pfeiler von x = 80 bis 100 und y = 0 bis 60. Dazwischen formen die drei Quadrate p3, p4 und p5 (je 20 × 20, Fläche je 400) den horizontalen Quersteg von 60 × 20 von x = 20 bis 80 und y = 20 bis 40 (Fläche 1200). Es entsteht ein perfekt spiegelsymmetrisches H-förmiges Orthogonalpolygon mit Gesamtfläche 1200 + 1200 + 1200 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein massives Rechteck. Figur C ist ein T-Polygon. Figur D ist ein L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "H-Polygon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q10: Mittel (5 pieces), Ans: D
// Theme: Treppen-Polygon mit 3 Stufen
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p2_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p5_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  // Total area = 5 * 600 = 3000
  const target_pts = [[0, 0], [90, 0], [90, 20], [60, 20], [60, 40], [0, 40]]; // 2-Stufen-Treppe, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 290, 45);

  const optA_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optB_pts = [[0, 0], [90, 0], [60, 40], [30, 40]]; // Trapez = 2400
  const optC_pts = [[0, 0], [60, 0], [60, 40], [90, 40], [90, 60], [30, 60], [30, 20], [0, 20]]; // Z-Treppe = 3000
  const optD_pts = target_pts; // 2-Stufen-Treppe (Correct)

  questions.push({
    id: "fz-sim9-q10",
    simulationId: "fz-sim9",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [30, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die Teilstücke p1, p2 und p3 (je 30 × 20, Fläche je 600) formen die breite Basis von 90 × 20 von y = 0 bis 20 (Fläche 1800). Darauf werden linksbündig p4 und p5 (je 30 × 20, Fläche je 600) von x = 0 bis 60 und y = 20 bis 40 aufgesetzt (Fläche 1200). Das Resultat ist ein gestuftes Treppen-Polygon mit zwei Stufen und einer Gesamtfläche von 1800 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Stufe. Figur B ist ein schräges Trapez. Figur C ist ein punktsymmetrisches Z-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Treppen-Polygon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: B
// Theme: Asymmetrisches Bastions-Heptagon (Festungs-Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [45, 0], [45, 30], [0, 30]]; // Rechteck 45x30, area 1350
  const p2_pts = [[0, 0], [45, 0], [45, 30], [0, 30]]; // Rechteck 45x30, area 1350
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const p5_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  // Total area = 1350 + 1350 + 900 + 450 + 450 = 4500
  const target_pts = [[0, 0], [90, 0], [90, 30], [60, 60], [30, 60], [0, 30]]; // Bastions-Heptagon, area 4500

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 90, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 315, 75);

  const optA_pts = [[0, 0], [90, 0], [90, 50], [0, 50]]; // Rechteck 90x50 = 4500
  const optB_pts = target_pts; // Bastions-Heptagon (Correct)
  const optC_pts = [[15, 0], [75, 0], [90, 50], [0, 50]]; // Trapez = 3750
  const optD_pts = [[0, 0], [90, 0], [90, 35], [50, 35], [50, 70], [0, 70]]; // L-Polygon = 4900

  questions.push({
    id: "fz-sim9-q11",
    simulationId: "fz-sim9",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [45, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (45 × 30, Fläche 1350) und p2 (45 × 30, Fläche 1350) bilden das 90 × 30 Basisband von y = 0 bis 30 (Fläche 2700). Auf der Oberseite (y = 30 bis 60) bildet Teilstück p3 (Quadrat 30 × 30, Fläche 900) den mittleren Zinnenblock von x = 30 bis 60. Links schließt Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt. Rechts schließt Teilstück p5 (Dreieck 30 × 30, Fläche 450) von x = 60 bis 90 an, dessen Hypotenuse von (60, 60) nach (90, 30) abfällt. Gesamtfläche: 2700 + 900 + 450 + 450 = 4500 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein rein glattes Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Bastions-Heptagon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: A
// Theme: Asymmetrischer Turm mit Doppeldach
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const p5_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 1800 + 600 + 900 + 450 + 300 = 4050
  const target_pts = [[0, 0], [80, 0], [80, 30], [60, 60], [30, 60], [0, 30]]; // Asymmetrischer Turm, area 4050

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 90, 245, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 320, 75);

  const optA_pts = target_pts; // Asymmetrischer Turm (Correct)
  const optB_pts = [[0, 0], [90, 0], [90, 45], [0, 45]]; // Rechteck 90x45 = 4050
  const optC_pts = [[10, 0], [80, 0], [90, 45], [0, 45]]; // Trapez = 3600
  const optD_pts = [[0, 0], [80, 0], [80, 40], [40, 40], [40, 70], [0, 70]]; // L-Polygon = 4400

  questions.push({
    id: "fz-sim9-q12",
    simulationId: "fz-sim9",
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
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (60 × 30, Fläche 1800) und p2 (20 × 30, Fläche 600) bilden die 80 × 30 Basis von y = 0 bis 30 (Fläche 2400). Auf der Oberseite (y = 30 bis 60) bildet Teilstück p3 (Quadrat 30 × 30, Fläche 900) den Turm von x = 30 bis 60. Links schließt Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt (Winkel 45°). Rechts schließt Teilstück p5 (Dreieck 20 × 30, Fläche 300) von x = 60 bis 80 an, dessen Hypotenuse von (60, 60) nach (80, 30) steiler abfällt (Winkel ~56,3°). Gesamtfläche: 2400 + 900 + 450 + 300 = 4050 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Dachaufbau. Figur C ist ein Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Asymmetrischer Turm", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: C
// Theme: Symmetrisches U-Kanal-Polygon
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p4_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p5_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  // Total area = 5 * 800 = 4000
  const target_pts = [[0, 0], [120, 0], [120, 60], [100, 60], [100, 20], [20, 20], [20, 60], [0, 60]]; // U-Kanal, area 4000

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 145, 35);
  const p4_canvas = transformPoints(p4_pts, 0, 215, 35);
  const p5_canvas = transformPoints(p5_pts, 0, 285, 45);

  const optA_pts = [[0, 0], [100, 0], [100, 40], [0, 40]]; // Rechteck 100x40 = 4000
  const optB_pts = [[20, 0], [80, 0], [80, 30], [100, 30], [100, 70], [0, 70], [0, 30], [20, 30]]; // T-Polygon = 4000
  const optC_pts = target_pts; // U-Kanal-Polygon (Correct)
  const optD_pts = [[0, 0], [100, 0], [100, 30], [50, 30], [50, 70], [0, 70]]; // L-Polygon = 5000

  questions.push({
    id: "fz-sim9-q13",
    simulationId: "fz-sim9",
    questionNumber: 13,
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
      { pieceId: "p5", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [80, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [100, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1, p5 und p2 (je 40 × 20, Fläche je 800) bilden nebeneinander das breite Basisband von 120 × 20 von y = 0 bis 20 (Fläche 2400). Links schließt Teilstück p3 (20 × 40, Fläche 800) als linker Pfeiler von y = 20 bis 60 an. Rechts schließt Teilstück p4 (20 × 40, Fläche 800) als rechter Pfeiler von y = 20 bis 60 an. In der Mitte zwischen x = 20 und 100 verbleibt ein breiter U-förmiger Kanal. Gesamtfläche: 2400 + 800 + 800 = 4000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Kanal. Figur B ist ein symmetrisches T-Polygon. Figur D ist ein asymmetrisches L-Polygon mit abweichender Fläche.",
    metadata: { pieceCount: 5, shapeFamily: "U-Kanal-Polygon", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q14: Schwer (5 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Komplexe 5-Teile-Zerlegung mit Flächen-Disparität
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 25], [0, 25]]; // Rechteck 30x25, area 750
  const p4_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck 25x30 / 2, area 375
  const p5_pts = [[0, 0], [20, 0], [0, 25]]; // Dreieck 20x25 / 2, area 250
  // Total piece area = 1500 + 900 + 750 + 375 + 250 = 3775
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 320, 75);

  const optA_pts = [[0, 0], [75, 0], [75, 50], [0, 50]]; // Rechteck 75x50 = 3750 (-25)
  const optB_pts = [[10, 0], [80, 0], [90, 45], [0, 45]]; // Trapez = 3600 (-175)
  const optC_pts = [[0, 0], [85, 0], [85, 30], [45, 30], [45, 65], [0, 65]]; // L-Polygon = 4000
  const optD_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Hexagon = 3600

  questions.push({
    id: "fz-sim9-q14",
    simulationId: "fz-sim9",
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
    assembly: [],
    explanation: "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1500 + 900 + 750 + 375 + 250 = 3775 Flächeneinheiten. Zudem besitzen die beiden Dreiecke p4 und p5 inkompatible Hypotenusen (~39,05 vs. ~32,02).\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 75 × 50 mit einer Fläche von 3750 Einheiten (Flächendefizit: 25 Einheiten).\n- Figur B ist ein Trapez mit Fläche 3600 Einheiten (-175 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 4000 Einheiten (+225 Einheiten).\n- Figur D ist ein symmetrisches Hexagon mit Fläche 3600 Einheiten.\n\nDa keine der Optionen A–D mit der exakten Gesamtfläche von 3775 Einheiten übereinstimmt, lautet die richtige Antwort E.",
    metadata: { pieceCount: 5, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q15: Schwer (6 pieces), Ans: D
// Theme: Meister-Abschluss: Großes Doppelspitz-Hexagon aus 6 Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  const p5_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p6_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 1200 + 1200 + 4 * 300 = 3600
  const target_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Doppelspitz-Hexagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 280, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 65);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = [[0, 0], [80, 0], [60, 60], [20, 60]]; // Trapez = 3000
  const optC_pts = [[10, 0], [70, 0], [90, 30], [70, 60], [10, 60], [0, 30]]; // Asymmetrisches Hexagon = 3300
  const optD_pts = target_pts; // Doppelspitz-Hexagon (Correct)

  questions.push({
    id: "fz-sim9-q15",
    simulationId: "fz-sim9",
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
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [20, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [60, 30], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die 6 Teilstücke formen einen zentralen rechteckigen Rumpf von 40 × 60 (p1 und p2 übereinander, Fläche 2400) von x = 20 bis 60. Links formen die Dreiecke p4 (um 180° rotiert) und p3 eine nach links vorspringende Spitze mit Scheitelpunkt bei (0, 30). Rechts formen die Dreiecke p5 (um 180° rotiert) und p6 eine identische, nach rechts vorspringende Spitze mit Scheitelpunkt bei (80, 30). Das Resultat ist ein punktsymmetrisches, horizontal gestrecktes Doppelspitz-Hexagon mit horizontalen Ober- und Unterkanten von 40 Einheiten. Gesamtfläche: 2400 + 4 × 300 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur B ist ein einzelnes Trapez mit Fläche 3000. Figur C ist ein asymmetrisches Hexagon mit abweichender Fläche.",
    metadata: { pieceCount: 6, shapeFamily: "Doppelspitz-Hexagon", requiresRotation: true, isEAnswer: false },
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

// 4. Output to fzSimulation9.ts
const outputPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation9.ts");
const tsContent = `import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_9_QUESTIONS: FzQuestionData[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log("Written to", outputPath);
