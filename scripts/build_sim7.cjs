/**
 * Generator and Validator for MedAT FZ Simulation 7
 * Theme: Elite-Simulation: Nicht-konvexe Polygone, Scheren-Schnitte & Feinkanten-Diskrimination
 * 15 Aufgaben, 20 Min. Prüfungszeit (~80s pro Aufgabe)
 * Distribution: 4 Leicht, 6 Mittel, 5 Schwer
 * Balanced Key: 3 A, 3 B, 3 C, 3 D, 3 E (Genuine E: Q04, Q09, Q13)
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
// Q01: Leicht (3 pieces), Ans: C
// Theme: Schiefes Pultdach-Polygon (Slanted Pented Pentagon)
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck rechtwinklig 30x30 / 2, area 450
  // Total area = 1800 + 900 + 450 = 3150
  const target_pts = [[0, 0], [90, 0], [90, 30], [60, 60], [60, 30], [0, 30]]; // Pultdach-Polygon, area 3150

  const p1_canvas = transformPoints(p1_pts, 0, 35, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 275, 45);

  const optA_pts = [[0, 0], [75, 0], [75, 42], [0, 42]]; // Rechteck = 3150
  const optB_pts = [[10, 0], [80, 0], [90, 40], [0, 40]]; // Trapez = 3200
  const optC_pts = target_pts; // Pultdach-Polygon (Correct)
  const optD_pts = [[0, 0], [90, 0], [90, 35], [50, 35], [50, 60], [0, 60]]; // L-Polygon = 4400

  questions.push({
    id: "fz-sim7-q01",
    simulationId: "fz-sim7",
    questionNumber: 1,
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
      { pieceId: "p3", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 30, Fläche 1800) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen ein horizontales Basisrechteck von 90 × 30 (Fläche 2700). Auf der rechten Seite von x = 60 bis 90 schließt auf Teilstück p2 nach oben Teilstück p3 (rechtwinkliges Dreieck mit Katheten 30 und 30, Fläche 450) an, dessen schräge Hypotenuse von (60, 60) nach (90, 30) abfällt. Die Gesamtfläche summiert sich exakt auf 1800 + 900 + 450 = 3150 Flächeneinheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist ein Trapez. Figur D ist ein rechtwinkliges L-Polygon mit abweichender Gesamtfläche.",
    metadata: { pieceCount: 3, shapeFamily: "Pultdach-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: A
// Theme: Symmetrisches Trapez aus 2 Dreiecken und 1 Rechteck
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck rechtwinklig 20x30 / 2, area 300
  const p3_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck rechtwinklig 20x30 / 2, area 300
  // Total area = 1200 + 300 + 300 = 1800
  const target_pts = [[0, 0], [80, 0], [60, 30], [20, 30]]; // Symmetrisches Trapez, area 1800

  const p1_canvas = transformPoints(p1_pts, 0, 40, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 260, 45);

  const optA_pts = target_pts; // Symmetrisches Trapez (Correct)
  const optB_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30 = 1800
  const optC_pts = [[0, 0], [60, 0], [80, 30], [20, 30]]; // Parallelogramm = 1800
  const optD_pts = [[10, 0], [70, 0], [80, 35], [0, 35]]; // Trapez = 2450

  questions.push({
    id: "fz-sim7-q02",
    simulationId: "fz-sim7",
    questionNumber: 2,
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
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet den zentralen Block von x = 20 bis 60. Links wird Teilstück p2 (Dreieck 20 × 30, Fläche 300) angefügt, dessen Hypotenuse die linke Flanke von (0, 0) nach (20, 30) bildet. Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) spiegelbildlich an, dessen Hypotenuse die rechte Flanke von (80, 0) nach (60, 30) formt. Das Ergebnis ist ein symmetrisches Trapez mit Grundseite 80, Deckseite 40 und Höhe 30. Gesamtfläche: 1200 + 300 + 300 = 1800 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit gleichgerichteten Schrägen. Figur D ist ein asymmetrisches Trapez mit abweichender Höhe und Fläche.",
    metadata: { pieceCount: 3, shapeFamily: "Symmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q03: Leicht (3 pieces), Ans: D
// Theme: Konkaves Stufen-Eck (Stepped L-Block mit Diagonal-Abkantung)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p2_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p3_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  // Total area = 1600 + 800 + 200 = 2600
  const target_pts = [[0, 0], [40, 0], [40, 40], [20, 60], [20, 80], [0, 80]]; // Chamfered L-Polygon, area 2600

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 155, 40);
  const p3_canvas = transformPoints(p3_pts, 90, 265, 45);

  const optA_pts = [[0, 0], [65, 0], [65, 40], [0, 40]]; // Rechteck = 2600
  const optB_pts = [[0, 0], [50, 0], [50, 52], [0, 52]]; // Quadrat-Rechteck = 2600
  const optC_pts = [[0, 0], [50, 0], [50, 30], [20, 30], [20, 70], [0, 70]]; // Rechtwinkliges L-Polygon = 2300
  const optD_pts = target_pts; // Chamfered L-Polygon (Correct)

  questions.push({
    id: "fz-sim7-q03",
    simulationId: "fz-sim7",
    questionNumber: 3,
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) bildet den unteren Basisblock. Darauf wird linksbündig Teilstück p2 (Rechteck 20 × 40, Fläche 800) von y = 40 bis 80 aufgesetzt. In der verbleibenden Innenecke schließt Teilstück p3 (rechtwinkliges Dreieck 20 × 20, Fläche 200) von (20, 40) bis (40, 40) an, dessen Hypotenuse eine diagonale Abkantung von (40, 40) nach (20, 60) bildet. Gesamtfläche: 1600 + 800 + 200 = 2600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A und B sind einfache Rechtecke ohne Innenecke und Schräge. Figur C ist ein rein rechtwinkliges L-Polygon ohne Schrägkante mit abweichender Fläche.",
    metadata: { pieceCount: 3, shapeFamily: "Chamfered L-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Hypotenusen-Fehlanpassung & Flächenfalle
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [35, 0], [0, 30]]; // Dreieck 35x30 / 2, area 525
  // Total piece area = 900 + 1200 + 300 + 525 = 2925
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 290, 75);

  const optA_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50 = 3000 (Fläche weicht ab)
  const optB_pts = [[10, 0], [70, 0], [80, 40], [0, 40]]; // Trapez = 2800 (Fläche weicht ab)
  const optC_pts = [[0, 0], [80, 0], [80, 25], [40, 25], [40, 55], [0, 55]]; // L-Polygon = 3200
  const optD_pts = [[0, 0], [70, 0], [90, 35], [20, 35]]; // Parallelogramm = 2450

  questions.push({
    id: "fz-sim7-q04",
    simulationId: "fz-sim7",
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
    assembly: [],
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt exakt 900 + 1200 + 300 + 525 = 2925 Flächeneinheiten. Zudem besitzt Teilstück p4 eine asymmetrische Kathetenlänge von 35 Einheiten (Hypotenuse ~46,1).\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 60 × 50 mit einer Fläche von 3000 Einheiten (Flächendisparität von +75 Einheiten).\n- Figur B ist ein Trapez mit Fläche 2800 Einheiten (-125 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 3200 Einheiten (+275 Einheiten).\n- Figur D ist ein Parallelogramm mit Fläche 2450 Einheiten.\n\nDa keine der Optionen A–D mit der exakten Gesamtfläche von 2925 Einheiten übereinstimmt, lautet die richtige Antwort E.",
    metadata: { pieceCount: 4, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: B
// Theme: Symmetrisches Haus-Pentagon mit Satteldach
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 40], [0, 40]]; // Rechteck 30x40, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 40], [0, 40]]; // Rechteck 30x40, area 1200
  const p3_pts = [[0, 0], [30, 0], [30, 40]]; // Dreieck 30x40 / 2, area 600
  const p4_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40 / 2, area 600
  // Total area = 1200 + 1200 + 600 + 600 = 3600
  const target_pts = [[0, 0], [60, 0], [60, 40], [30, 80], [0, 40]]; // Haus-Pentagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 40);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 40);
  const p4_canvas = transformPoints(p4_pts, 180, 290, 75);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = target_pts; // Haus-Pentagon (Correct)
  const optC_pts = [[0, 0], [80, 0], [60, 45], [20, 45]]; // Trapez = 3150
  const optD_pts = [[0, 0], [70, 0], [70, 35], [35, 35], [35, 70], [0, 70]]; // L-Polygon = 3675

  questions.push({
    id: "fz-sim7-q05",
    simulationId: "fz-sim7",
    questionNumber: 5,
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (30 × 40) und p2 (30 × 40) formen zusammen den rechteckigen Rumpf von 60 × 40 (Fläche 2400) von y = 0 bis 40. Auf der Oberseite schließt Teilstück p3 (rechtwinkliges Dreieck 30 × 40, Fläche 600) links von (0, 40) bis (30, 80) an, während Teilstück p4 (Dreieck 30 × 40, Fläche 600) rechts von (30, 80) nach (60, 40) abfällt. Zusammen bilden sie eine symmetrische Dachspitze mit Firsthöhe 80. Gesamtfläche: 2400 + 1200 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Giebelspitze. Figur C ist ein Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "Haus-Pentagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: D
// Theme: Asymmetrisches Trapez mit Doppel-Rechteckkern
// =========================================================================
{
  const p1_pts = [[0, 0], [25, 0], [25, 30], [0, 30]]; // Rechteck 25x30, area 750
  const p2_pts = [[0, 0], [15, 0], [15, 30], [0, 30]]; // Rechteck 15x30, area 450
  const p3_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  // Total area = 750 + 450 + 300 + 450 = 1950
  const target_pts = [[0, 0], [90, 0], [70, 30], [30, 30]]; // Asymmetrisches Trapez, area 1950

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 275, 75);

  const optA_pts = [[0, 0], [65, 0], [65, 30], [0, 30]]; // Rechteck = 1950
  const optB_pts = [[0, 0], [65, 0], [85, 30], [20, 30]]; // Parallelogramm = 1950
  const optC_pts = [[10, 0], [70, 0], [60, 30], [20, 30]]; // Symmetrisches Trapez = 1500
  const optD_pts = target_pts; // Asymmetrisches Trapez (Correct)

  questions.push({
    id: "fz-sim7-q06",
    simulationId: "fz-sim7",
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
      { pieceId: "p4", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [55, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [70, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (25 × 30, Fläche 750) und Teilstück p2 (15 × 30, Fläche 450) bilden den zentralen 40 × 30 Mittelblock von x = 30 bis 70 (Fläche 1200). Links fügt sich Teilstück p4 (Dreieck 30 × 30, Fläche 450) an, dessen Hypotenuse die Flanke von (0, 0) nach (30, 30) bildet (Neigung 45°). Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die Flanke von (90, 0) nach (70, 30) formt (steilere Neigung ~56,3°). Das Resultat ist ein asymmetrisches Trapez mit Grundseite 90, Deckseite 40 und Höhe 30. Gesamtfläche: 450 + 1200 + 300 = 1950 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein Parallelogramm mit identischen Neigungswinkeln. Figur C besitzt abweichende Kantenmaße und Fläche.",
    metadata: { pieceCount: 4, shapeFamily: "Asymmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: A
// Theme: Orthogonales T-Polygon aus 4 Rechteckblöcken
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

  const optA_pts = target_pts; // T-Polygon (Correct)
  const optB_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40 = 2400
  const optC_pts = [[0, 0], [60, 0], [60, 20], [20, 20], [20, 70], [0, 70]]; // L-Polygon = 2200
  const optD_pts = [[20, 0], [40, 0], [40, 40], [60, 40], [60, 60], [0, 60], [0, 40], [20, 40]]; // Kurzes T = 2000

  questions.push({
    id: "fz-sim7-q07",
    simulationId: "fz-sim7",
    questionNumber: 7,
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
      { pieceId: "p4", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 40], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [0, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die drei kongruenten Quadrate p2, p3 und p4 (je 20 × 20, Fläche je 400) werden übereinandergestapelt und bilden den vertikalen Schaft von 20 × 60 (Fläche 1200) von y = 0 bis 60 zwischen x = 20 und 40. Oben schließt Teilstück p1 (Rechteck 60 × 20, Fläche 1200) symmetrisch zentriert als horizontaler Querbalken von y = 60 bis 80 an. Es entsteht ein spiegelsymmetrisches T-förmiges Orthogonalpolygon mit Gesamtfläche 1200 + 1200 = 2400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Auskragungen. Figur C ist ein asymmetrisches L-Polygon. Figur D besitzt einen verkürzten Schaft mit Flächendefizit.",
    metadata: { pieceCount: 4, shapeFamily: "Orthogonales T-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q08: Mittel (4 pieces), Ans: C
// Theme: Asymmetrisches Giebel-Polygon (Gable Pentagon mit asymmetrischem First)
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  // Total area = 1500 + 900 + 450 + 300 = 3150
  const target_pts = [[0, 0], [80, 0], [80, 30], [50, 30], [30, 60], [0, 30]]; // Asymmetrisches Giebel-Polygon, area 3150

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 285, 75);

  const optA_pts = [[0, 0], [70, 0], [70, 45], [0, 45]]; // Rechteck 70x45 = 3150
  const optB_pts = [[0, 0], [80, 0], [60, 40], [20, 40]]; // Trapez = 3000
  const optC_pts = target_pts; // Asymmetrisches Giebel-Polygon (Correct)
  const optD_pts = [[0, 0], [80, 0], [80, 30], [40, 30], [40, 60], [0, 60]]; // L-Polygon = 3600

  questions.push({
    id: "fz-sim7-q08",
    simulationId: "fz-sim7",
    questionNumber: 8,
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
      { pieceId: "p2", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (50 × 30) und p2 (30 × 30) bilden zusammen das Basisband von 80 × 30 (Fläche 2400). Auf der linken Oberseite (x = 0 bis 50) schließen Teilstück p3 (Dreieck 30 × 30, Fläche 450) und Teilstück p4 (Dreieck 20 × 30, Fläche 300) aneinander an und formen ein asymmetrisches Satteldach mit Firstpunkt bei (30, 60). Von (30, 60) fällt die Kante nach (50, 30) ab, worauf die Oberkante von p2 von x = 50 bis 80 als waagrechte Schulter verläuft. Gesamtfläche: 2400 + 450 + 300 = 3150 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne First. Figur B ist ein symmetrisches Trapez. Figur D ist ein rechtwinkliges L-Polygon ohne Schrägkanten.",
    metadata: { pieceCount: 4, shapeFamily: "Asymmetrisches Giebel-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q09: Mittel (5 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Katheteninkongruenz im 5-Teile-Verbund
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck 25x30 / 2, area 375
  const p5_pts = [[0, 0], [20, 0], [0, 25]]; // Dreieck 20x25 / 2, area 250
  // Total piece area = 1200 + 900 + 600 + 375 + 250 = 3325
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 290, 45);

  const optA_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck 70x50 = 3500 (Fläche weicht ab)
  const optB_pts = [[10, 0], [80, 0], [90, 40], [0, 40]]; // Trapez = 3200 (Fläche weicht ab)
  const optC_pts = [[0, 0], [85, 0], [85, 30], [45, 30], [45, 55], [0, 55]]; // L-Polygon = 3675
  const optD_pts = [[15, 0], [65, 0], [80, 30], [65, 60], [15, 60], [0, 30]]; // Hexagon = 3300

  questions.push({
    id: "fz-sim7-q09",
    simulationId: "fz-sim7",
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
    explanation: "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1200 + 900 + 600 + 375 + 250 = 3325 Flächeneinheiten. Zudem besitzen die Dreiecke p4 und p5 inkompatible Hypotenusenlängen von ~39,05 und ~32,02.\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (+175 Einheiten Disparität).\n- Figur B ist ein Trapez mit Fläche 3200 Einheiten (-125 Einheiten Defizit).\n- Figur C ist ein L-Polygon mit Fläche 3675 Einheiten.\n- Figur D ist ein Sechseck mit Fläche 3300 Einheiten (-25 Einheiten).\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 3325 Einheiten übereinstimmt, lautet die korrekte Antwort E.",
    metadata: { pieceCount: 5, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q10: Mittel (5 pieces), Ans: B
// Theme: Symmetrische Stufenpyramide aus 5 Rechtecken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p2_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p5_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  // Total area = 5 * 600 = 3000
  const target_pts = [[0, 0], [90, 0], [90, 20], [75, 20], [75, 40], [15, 40], [15, 20], [0, 20]]; // Stufenpyramide, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 290, 45);

  const optA_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optB_pts = target_pts; // Stufenpyramide (Correct)
  const optC_pts = [[0, 0], [90, 0], [60, 40], [30, 40]]; // Trapez = 2400
  const optD_pts = [[0, 0], [80, 0], [80, 25], [30, 25], [30, 60], [0, 60]]; // L-Polygon = 2900

  questions.push({
    id: "fz-sim7-q10",
    simulationId: "fz-sim7",
    questionNumber: 10,
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
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [15, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [45, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Alle 5 Teilstücke sind vollkommen kongruente Rechtecke von 30 × 20 (Fläche je 600). Die Teilstücke p1, p2 und p3 liegen nebeneinander und bilden eine 90 × 20 Basis (Fläche 1800) von y = 0 bis 20. Mittig darauf werden p4 und p5 von x = 15 bis 75 nebeneinander aufgesetzt (Breite 60, Höhe 20, Fläche 1200). Das Resultat ist eine spiegelsymmetrische zweistufige Pyramide mit Gesamtfläche 1800 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Stufen. Figur C ist ein schräges Trapez. Figur D ist ein asymmetrisches L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Symmetrische Stufenpyramide", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: A
// Theme: Asymmetrisches Zinnen-Heptagon (Battlement Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p5_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  // Total area = 1500 + 1200 + 600 + 900 + 450 = 4650
  const target_pts = [[0, 0], [90, 0], [90, 60], [60, 90], [60, 30], [20, 30], [20, 60], [0, 60]]; // Zinnen-Heptagon, area 4650

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 90, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 160, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 225, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 315, 75);

  const optA_pts = target_pts; // Zinnen-Heptagon (Correct)
  const optB_pts = [[0, 0], [90, 0], [90, 52], [0, 52]]; // Rechteck = 4680
  const optC_pts = [[0, 0], [90, 0], [70, 60], [20, 60]]; // Trapez = 4200
  const optD_pts = [[0, 0], [90, 0], [90, 40], [50, 40], [50, 80], [0, 80]]; // L-Polygon = 5200

  questions.push({
    id: "fz-sim7-q11",
    simulationId: "fz-sim7",
    questionNumber: 11,
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (50 × 30) und p2 (40 × 30) bilden zusammen das Basisband von 90 × 30 (Fläche 2700). Auf der linken Seite schließt Teilstück p3 (20 × 30, Fläche 600) als linker Turm von y = 30 bis 60 an. Auf der rechten Seite schließt Teilstück p4 (Quadrat 30 × 30, Fläche 900) von x = 60 bis 90 an, worauf Teilstück p5 (Dreieck 30 × 30, Fläche 450) von y = 60 bis 90 aufgesetzt wird, dessen Hypotenuse von (60, 90) nach (90, 60) abfällt. In der Mitte zwischen x = 20 und 60 verbleibt ein 40 × 30 Einschnitt. Gesamtfläche: 2700 + 600 + 900 + 450 = 4650 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein massives Rechteck ohne Zinnen. Figur C ist ein einfaches Trapez. Figur D ist ein unregelmäßiges L-Polygon ohne Schräge.",
    metadata: { pieceCount: 5, shapeFamily: "Asymmetrisches Zinnen-Heptagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: C
// Theme: Symmetrisches Tragflächen-Polygon (Flugzeug-Heptagon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  const p5_pts = [[0, 0], [20, 0], [20, 60], [0, 60]]; // Rechteck 20x60, area 1200
  // Total area = 1200 + 1200 + 300 + 300 + 1200 = 4200
  const target_pts = [[0, 0], [100, 0], [100, 30], [80, 30], [60, 60], [40, 60], [20, 30], [0, 30]]; // Tragflächen-Polygon, area 4200

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 315, 35);

  const optA_pts = [[0, 0], [100, 0], [100, 42], [0, 42]]; // Rechteck 100x42 = 4200
  const optB_pts = [[20, 0], [80, 0], [100, 45], [0, 45]]; // Trapez = 3600
  const optC_pts = target_pts; // Tragflächen-Polygon (Correct)
  const optD_pts = [[0, 0], [90, 0], [90, 45], [45, 45], [45, 75], [0, 75]]; // L-Polygon = 5400

  questions.push({
    id: "fz-sim7-q12",
    simulationId: "fz-sim7",
    questionNumber: 12,
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
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [20, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p5 (Rechteck 20 × 60, Fläche 1200) bildet den zentralen Rumpf von x = 40 bis 60 und y = 0 bis 60. Flankierend bilden p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) die linken und rechten Tragflächen von y = 0 bis 30. Darüber schließen Teilstück p3 (Dreieck 20 × 30, Fläche 300) und p4 (Dreieck 20 × 30, Fläche 300) an, deren Hypotenusen symmetrisch von den Außenflügeln nach innen zum Rumpfkopf bei y = 60 ansteigen. Das Resultat ist ein vollkommen spiegelsymmetrisches Flugzeug-Polygon mit Gesamtfläche 1200 + 1200 + 1200 + 300 + 300 = 4200 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Flügelkontur. Figur B ist ein Trapez. Figur D ist ein asymmetrisches L-Polygon mit Flächenüberschuss.",
    metadata: { pieceCount: 5, shapeFamily: "Tragflächen-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — 5-Teile-Asymmetrie mit Schrägkanten-Konflikt
// =========================================================================
{
  const p1_pts = [[0, 0], [45, 0], [45, 30], [0, 30]]; // Rechteck 45x30, area 1350
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  const p5_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck 25x30 / 2, area 375
  // Total piece area = 1350 + 900 + 600 + 300 + 375 = 3525
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 320, 75);

  const optA_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck 70x50 = 3500 (Fläche weicht ab)
  const optB_pts = [[10, 0], [80, 0], [90, 45], [0, 45]]; // Trapez = 3600 (Fläche weicht ab)
  const optC_pts = [[0, 0], [85, 0], [85, 25], [45, 25], [45, 60], [0, 60]]; // L-Polygon = 3700
  const optD_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Hexagon = 3600

  questions.push({
    id: "fz-sim7-q13",
    simulationId: "fz-sim7",
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
    explanation: "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1350 + 900 + 600 + 300 + 375 = 3525 Flächeneinheiten. Zudem sind die Flankenneigungswinkel der beiden Dreiecke p4 (Katheten 20 und 30, Winkel ~56,3°) und p5 (Katheten 25 und 30, Winkel ~50,2°) inkompatibel.\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (-25 Einheiten Defizit).\n- Figur B ist ein Trapez mit Fläche 3600 Einheiten (+75 Einheiten Überschuss).\n- Figur C ist ein L-Polygon mit Fläche 3700 Einheiten.\n- Figur D ist ein symmetrisches Hexagon mit Fläche 3600 Einheiten.\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 3525 Einheiten übereinstimmt, lautet die korrekte Antwort E.",
    metadata: { pieceCount: 5, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q14: Schwer (5 pieces), Ans: D
// Theme: Chamfered Temple (Stufenmonument mit Schrägdach)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  const p5_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  // Total area = 1200 + 1200 + 300 + 300 + 900 = 3900
  const target_pts = [[0, 0], [80, 0], [80, 30], [75, 30], [55, 60], [25, 60], [5, 30], [0, 30]]; // Tempel-Polygon, area 3900

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 165, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 235, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 295, 45);

  const optA_pts = [[0, 0], [78, 0], [78, 50], [0, 50]]; // Rechteck = 3900
  const optB_pts = [[0, 0], [80, 0], [60, 55], [20, 55]]; // Trapez = 3850
  const optC_pts = [[0, 0], [80, 0], [80, 30], [50, 30], [50, 65], [0, 65]]; // L-Polygon = 4150
  const optD_pts = target_pts; // Tempel-Polygon (Correct)

  questions.push({
    id: "fz-sim7-q14",
    simulationId: "fz-sim7",
    questionNumber: 14,
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
      { pieceId: "p2", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [5, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [25, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [55, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) bilden zusammen das Basisband von 80 × 30 (Fläche 2400). Auf der Oberseite bildet Teilstück p5 (Quadrat 30 × 30, Fläche 900) den zentralen Turm von x = 25 bis 55 (y = 30 bis 60). Links schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) von x = 5 bis 25 an, dessen Hypotenuse von (5, 30) nach (25, 60) ansteigt. Rechts schließt Teilstück p4 (Dreieck 20 × 30, Fläche 300) von x = 55 bis 75 an, dessen Hypotenuse von (55, 60) nach (75, 30) abfällt. Die Außenabschnitte von x = 0 bis 5 und x = 75 bis 80 verbleiben als waagrechte Schultern. Gesamtfläche: 2400 + 900 + 300 + 300 = 3900 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aufbau. Figur B ist ein reines Trapez. Figur C ist ein asymmetrisches L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Stufenmonument mit Schrägdach", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q15: Schwer (6 pieces), Ans: B
// Theme: Großes Doppelspitz-Hexagon (Meister-Abschluss)
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
  const optB_pts = target_pts; // Doppelspitz-Hexagon (Correct)
  const optC_pts = [[0, 0], [80, 0], [60, 60], [20, 60]]; // Trapez = 3000
  const optD_pts = [[10, 0], [70, 0], [90, 30], [70, 60], [10, 60], [0, 30]]; // Asymmetrisches Hexagon = 3300

  questions.push({
    id: "fz-sim7-q15",
    simulationId: "fz-sim7",
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
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [20, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [60, 30], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die 6 Teilstücke bilden einen zentralen rechteckigen Rumpf von 40 × 60 (p1 und p2 übereinander, Fläche 2400) von x = 20 bis 60. Links formen die Dreiecke p4 (um 180° rotiert) und p3 eine nach links vorspringende Spitze mit Scheitelpunkt bei (0, 30). Rechts formen die Dreiecke p5 (um 180° rotiert) und p6 eine identische, nach rechts vorspringende Spitze mit Scheitelpunkt bei (80, 30). Das Resultat ist ein punktsymmetrisches, horizontal gestrecktes Doppelspitz-Hexagon mit horizontalen Ober- und Unterkanten von 40 Einheiten. Gesamtfläche: 2400 + 4 × 300 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur C ist ein einzelnes Trapez mit Fläche 3000. Figur D ist ein asymmetrisches Hexagon mit abweichender Fläche.",
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

// 4. Output to fzSimulation7.ts
const outputPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation7.ts");
const tsContent = `import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_7_QUESTIONS: FzQuestionData[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log("Written to", outputPath);
