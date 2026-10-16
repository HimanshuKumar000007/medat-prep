/**
 * Generator and Validator for MedAT FZ Simulation 10
 * Theme: Apex-Simulation: Kristalline Schnitte, Tangram-Polygone & Mehrfachschrägen
 * 15 Aufgaben, 20 Min. Prüfungszeit (~80s pro Aufgabe)
 * Distribution: 4 Leicht, 6 Mittel, 5 Schwer
 * Balanced Key: 3 A, 3 B, 3 C, 3 D, 3 E (Genuine E: Q03, Q07, Q12)
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
// Q01: Leicht (3 pieces), Ans: B
// Theme: Symmetrisches Großtrapez aus Rechteck und 2 Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  // Total area = 1200 + 450 + 450 = 2100
  const target_pts = [[0, 0], [100, 0], [70, 30], [30, 30]]; // Symmetrisches Trapez, area 2100

  const p1_canvas = transformPoints(p1_pts, 0, 35, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 155, 45);
  const p3_canvas = transformPoints(p3_pts, 180, 280, 75);

  const optA_pts = [[0, 0], [70, 0], [70, 30], [0, 30]]; // Rechteck 70x30 = 2100
  const optB_pts = target_pts; // Trapez (Correct)
  const optC_pts = [[0, 0], [70, 0], [100, 30], [30, 30]]; // Parallelogramm = 2100
  const optD_pts = [[0, 0], [90, 0], [70, 30], [20, 30]]; // Asymmetrisches Trapez = 2100

  questions.push({
    id: "fz-sim10-q01",
    simulationId: "fz-sim10",
    questionNumber: 1,
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
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [70, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet das Zentrum von x = 30 bis 70. Links schließt Teilstück p2 (Dreieck 30 × 30, Fläche 450) mit Hypotenuse von (0, 0) bis (30, 30) an. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) mit Hypotenuse von (70, 30) bis (100, 0) an. Das Resultat ist ein symmetrisches Trapez mit Grundseite 100, Deckseite 40 und Höhe 30. Gesamtfläche: 1200 + 450 + 450 = 2100 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist asymmetrisch.",
    metadata: { pieceCount: 3, shapeFamily: "Symmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: D
// Theme: Asymmetrisches Keil-Trapez
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p3_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  // Total area = 900 + 1500 + 300 = 2700
  const target_pts = [[0, 0], [100, 0], [80, 30], [0, 30]]; // Keil-Trapez, area 2700

  const p1_canvas = transformPoints(p1_pts, 0, 35, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 140, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 275, 45);

  const optA_pts = [[0, 0], [90, 0], [90, 30], [0, 30]]; // Rechteck 90x30 = 2700
  const optB_pts = [[0, 0], [100, 0], [90, 30], [10, 30]]; // Symmetrisches Trapez = 2700
  const optC_pts = [[0, 0], [80, 0], [80, 20], [40, 20], [40, 40], [0, 40]]; // Treppe
  const optD_pts = target_pts; // Keil-Trapez (Correct)

  questions.push({
    id: "fz-sim10-q02",
    simulationId: "fz-sim10",
    questionNumber: 2,
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
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [80, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Quadrat 30 × 30, Fläche 900) und Teilstück p2 (Rechteck 50 × 30, Fläche 1500) bilden zusammen einen rechteckigen Block von 80 × 30 (Fläche 2400) von x = 0 bis 80. Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Kathete von (80, 0) bis (100, 0) reicht und dessen Hypotenuse von (80, 30) nach (100, 0) abfällt. Gesamtfläche: 900 + 1500 + 300 = 2700 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A besitzt keine Schräge. Figur B ist beidseitig symmetrisch abgeschrägt. Figur C ist ein gestuftes Polygon ohne Diagonalkante.",
    metadata: { pieceCount: 3, shapeFamily: "Keil-Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q03: Leicht (3 pieces), Ans: E (Genuine Option E)
// Theme: Hypotenusen-Fehlschnitt (Hypotenuse Incompatibility)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, area 600, hyp 50
  const p2_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, area 600, hyp 50
  const p3_pts = [[0, 0], [50, 0], [50, 20], [0, 20]]; // Rechteck 50x20, area 1000
  // Total piece area = 600 + 600 + 1000 = 2200
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 150, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 250, 50);

  const optA_pts = [[0, 0], [100, 0], [80, 30], [20, 30]]; // Symmetrisches Trapez = 2700
  const optB_pts = [[0, 0], [80, 0], [100, 30], [20, 30]]; // Parallelogramm = 2400
  const optC_pts = [[0, 0], [60, 0], [60, 30], [30, 50], [0, 30]]; // Haus-Polygon = 2100
  const optD_pts = [[0, 0], [80, 0], [80, 30], [0, 15]]; // Keil = 1800

  questions.push({
    id: "fz-sim10-q03",
    simulationId: "fz-sim10",
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
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt 600 + 600 + 1000 = 2200 Einheiten. Die beiden Dreiecke besitzen die Katheten 40 und 30 sowie eine Hypotenuse von 50. Figur A erfordert eine Fläche von 2700, Figur B 2400, Figur C 2100 und Figur D 1800. Keine der Antwortfiguren A–D besitzt die exakte Fläche von 2200 Einheiten oder kompatible Kantenlängen, um die Teile lückenlos und überlappungsfrei aufzunehmen. Daher ist Option E zwingend richtig.\n\nAusschluss: A (2700 ≠ 2200), B (2400 ≠ 2200), C (2100 ≠ 2200), D (1800 ≠ 2200).",
    metadata: { pieceCount: 3, shapeFamily: "Fangfrage", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: A
// Theme: L-Winkel aus Quadrat, Rechteck und zwei Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  // Total area = 900 + 1200 + 450 + 450 = 3000
  const target_pts = [[0, 0], [70, 0], [70, 30], [30, 30], [30, 60], [0, 60]]; // L-Winkel, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 215, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 320, 75);

  const optA_pts = target_pts; // L-Winkel (Correct)
  const optB_pts = [[20, 0], [50, 0], [50, 30], [70, 30], [70, 60], [0, 60], [0, 30], [20, 30]]; // T-Polygon
  const optC_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50 = 3000
  const optD_pts = [[0, 0], [60, 0], [60, 40], [40, 40], [40, 20], [20, 20], [20, 40], [0, 40]]; // U-Polygon

  questions.push({
    id: "fz-sim10-q04",
    simulationId: "fz-sim10",
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [30, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Quadrat 30 × 30, Fläche 900) bildet die untere Ecke. Nach rechts schließt Teilstück p2 (Rechteck 40 × 30, Fläche 1200) an, was einen horizontalen Schenkel von 70 × 30 (Fläche 2100) ergibt. Nach oben schließen die beiden Dreiecke p3 und p4 (je 450 Fläche) zusammengefügt als Quadrat 30 × 30 von y = 30 bis 60 an. Resultat ist ein rechtwinkliger L-Winkel mit den Außenkanten 70 × 60. Gesamtfläche: 900 + 1200 + 450 + 450 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein T-Polygon. Figur C ist ein kompaktes Rechteck. Figur D ist ein U-förmiger Kanal.",
    metadata: { pieceCount: 4, shapeFamily: "L-Winkel", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: C
// Theme: Stufenkrone / Dreizinnen-Turm (3-Tier Battlement)
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 20], [0, 20]]; // Rechteck 60x20, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  // Total area = 1200 + 400 + 400 + 600 = 2600
  const target_pts = [[0, 0], [60, 0], [60, 40], [40, 40], [40, 50], [20, 50], [20, 40], [0, 40]]; // Stufenkrone, area 2600

  const p1_canvas = transformPoints(p1_pts, 0, 25, 50);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 50);
  const p3_canvas = transformPoints(p3_pts, 0, 195, 50);
  const p4_canvas = transformPoints(p4_pts, 90, 280, 50);

  const optA_pts = [[0, 0], [60, 0], [60, 50], [40, 50], [40, 20], [20, 20], [20, 50], [0, 50]]; // U-Kanal
  const optB_pts = [[0, 0], [60, 0], [60, 20], [40, 20], [40, 40], [20, 40], [20, 60], [0, 60]]; // Treppe
  const optC_pts = target_pts; // Stufenkrone (Correct)
  const optD_pts = [[0, 0], [65, 0], [65, 40], [0, 40]]; // Rechteck 65x40 = 2600

  questions.push({
    id: "fz-sim10-q05",
    simulationId: "fz-sim10",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [20, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 20, Fläche 1200) bildet das durchgehende Fundament von y = 0 bis 20. Darauf sitzen drei vertikale Aufbauten: Links Quadrat p2 (20 × 20, Höhe bis y = 40), rechts Quadrat p3 (20 × 20, Höhe bis y = 40) und in der Mitte das höhere Rechteck p4 (20 × 30, Höhe bis y = 50). Dies formt eine symmetrische Dreizinnen-Krone mit erhöhtem Mittelturm. Gesamtfläche: 1200 + 400 + 400 + 600 = 2600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein nach oben offener U-Kanal mit vertiefter Mitte. Figur B ist eine einseitig ansteigende 3-Stufen-Treppe. Figur D ist ein einfaches Rechteck ohne Zinnen.",
    metadata: { pieceCount: 4, shapeFamily: "Stufenkrone", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: B
// Theme: Asymmetrisches Kirchen-Polygon mit Dachschräge links
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [25, 0], [25, 30]]; // Dreieck Katheten 25x30, area 375
  const p3_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck Katheten 25x30, area 375
  const p4_pts = [[0, 0], [50, 0], [25, 20]]; // Dreieck 50x20, area 500
  // Total area = 1500 + 375 + 375 + 500 = 2750
  const target_pts = [[0, 0], [75, 0], [75, 30], [50, 30], [25, 50], [0, 30]]; // Asymmetrisches Kirchen-Polygon, area 2750

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 200, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 280, 50);

  const optA_pts = [[0, 0], [70, 0], [70, 30], [35, 50], [0, 30]]; // Symmetrisches Haus = 2800
  const optB_pts = target_pts; // Asymmetrisches Kirchen-Polygon (Correct)
  const optC_pts = [[0, 0], [80, 0], [60, 40], [0, 40]]; // Trapez = 2800
  const optD_pts = [[0, 0], [75, 0], [75, 30], [35, 30], [35, 60], [0, 60]]; // L-Polygon = 3300

  questions.push({
    id: "fz-sim10-q06",
    simulationId: "fz-sim10",
    questionNumber: 6,
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
      { pieceId: "p2", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 180, translation: [75, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (50 × 30, Fläche 1500) bildet den linken Rumpf. Rechts fügen sich p2 und p3 (je 375 Fläche) zu einem Rechteck von 25 × 30 zusammen, sodass ein Basisblock von 75 × 30 (Fläche 2250) entsteht. Auf der linken Seite von x = 0 bis 50 sitzt oben Teilstück p4 (Dreieck 50 × 20, Fläche 500) mit Firstspitze bei (25, 50). Von x = 50 bis 75 schließt das Flachdach auf Höhe y = 30 ab. Gesamtfläche: 1500 + 375 + 375 + 500 = 2750 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein symmetrisches Haus. Figur C ist ein rein diagonales Trapez. Figur D ist ein L-Polygon ohne Dachschräge.",
    metadata: { pieceCount: 4, shapeFamily: "Kirchen-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: E (Genuine Option E)
// Theme: Kantenlängen-Inkompatibilität bei symmetrischem Sechseck
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck Katheten 30x20, area 300
  const p3_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck Katheten 30x20, area 300
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  // Total piece area = 1200 + 300 + 300 + 400 = 2200
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 140, 45);
  const p3_canvas = transformPoints(p3_pts, 180, 240, 65);
  const p4_canvas = transformPoints(p4_pts, 0, 320, 50);

  const optA_pts = [[15, 0], [45, 0], [60, 25], [45, 50], [15, 50], [0, 25]]; // Hexagon = 2250
  const optB_pts = [[0, 0], [70, 0], [55, 30], [15, 30]]; // Symmetrisches Trapez = 1875
  const optC_pts = [[0, 0], [60, 0], [75, 35], [15, 35]]; // Parallelogramm = 2100
  const optD_pts = [[15, 0], [35, 0], [35, 15], [50, 15], [50, 35], [35, 35], [35, 50], [15, 50], [15, 35], [0, 35], [0, 15], [15, 15]]; // Kreuz = 2000

  questions.push({
    id: "fz-sim10-q07",
    simulationId: "fz-sim10",
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
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt 1200 + 300 + 300 + 400 = 2200 Einheiten. Die Dreiecke p2 und p3 besitzen die Katheten 30 und 20. Figur A erfordert eine Fläche von 2250 und symmetrische 25-Höhen-Flanken, die mit den 20er-Katheten nicht gebildet werden können. Figur B besitzt Fläche 1875, Figur C Fläche 2100 und Figur D Fläche 2000. Keine der Antwortfiguren A–D lässt sich exakt und ohne Überlappung aus den Teilen bilden. Daher ist Option E zwingend richtig.\n\nAusschluss: A (2250 ≠ 2200), B (1875 ≠ 2200), C (2100 ≠ 2200), D (2000 ≠ 2200).",
    metadata: { pieceCount: 4, shapeFamily: "Fangfrage", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q08: Mittel (5 pieces), Ans: A
// Theme: Asymmetrisches Schiff-Polygon (Boat Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck Katheten 20x30, area 300
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck Katheten 30x30, area 450
  const p5_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck Katheten 20x30, area 300
  // Total area = 1200 + 900 + 300 + 450 + 300 = 3150
  const target_pts = [[20, 0], [60, 0], [80, 30], [50, 60], [20, 60], [20, 30], [0, 30]]; // Schiff, area 3150

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 240, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 335, 75);

  const optA_pts = target_pts; // Schiff (Correct)
  const optB_pts = [[15, 0], [65, 0], [80, 30], [55, 60], [25, 60], [0, 30]]; // Symmetrisches Schiff = 3150
  const optC_pts = [[0, 0], [90, 0], [75, 40], [15, 40]]; // Großtrapez = 3000
  const optD_pts = [[0, 0], [70, 0], [70, 30], [50, 30], [50, 50], [20, 50], [20, 30], [0, 30]]; // Treppen-Turm = 2900

  questions.push({
    id: "fz-sim10-q08",
    simulationId: "fz-sim10",
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [80, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Der untere Rumpf wird aus Teilstück p3 (Dreieck 20 × 30), Teilstück p1 (Rechteck 40 × 30) und Teilstück p5 (Dreieck 20 × 30) als symmetrisches Trapez von (0, 30) bis (80, 30) gebildet (Fläche 1800). Auf dem Deck sitzt von x = 20 bis 50 das Quadrat p2 (30 × 30, Fläche 900) und rechts davon das Dreieck p4 (30 × 30, Fläche 450), dessen Schräge von (50, 60) nach (80, 30) abfällt. Links bleibt das Deck von x = 0 bis 20 frei. Gesamtfläche: 1800 + 900 + 450 = 3150 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B besitzt einen zentrierten symmetrischen Aufbau. Figur C ist ein schlichtes Großtrapez. Figur D ist ein stufenförmiger Turm ohne 45°-Schräge.",
    metadata: { pieceCount: 5, shapeFamily: "Schiff-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q09: Mittel (5 pieces), Ans: D
// Theme: Schwalbenschwanz-Heptagon (Swallowtail / Ear Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p2_pts = [[0, 0], [20, 0], [0, 40]]; // Dreieck 20x40, area 400
  const p3_pts = [[0, 0], [20, 0], [20, 40]]; // Dreieck 20x40, area 400
  const p4_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200
  const p5_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  // Total area = 1600 + 400 + 400 + 200 + 200 = 2800
  const target_pts = [[0, 0], [80, 0], [60, 40], [60, 60], [40, 40], [20, 60], [20, 40]]; // Schwalbenschwanz-Heptagon, area 2800

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 250, 50);
  const p5_canvas = transformPoints(p5_pts, 180, 325, 70);

  const optA_pts = [[0, 0], [80, 0], [80, 40], [60, 60], [40, 40], [20, 60], [0, 40]]; // Krone mit 3 Spitzen = 3200
  const optB_pts = [[0, 0], [80, 0], [65, 45], [15, 45]]; // Symmetrisches Trapez = 2925
  const optC_pts = [[20, 0], [60, 0], [60, 30], [80, 30], [40, 60], [0, 30], [20, 30]]; // Pfeil = 2400
  const optD_pts = target_pts; // Schwalbenschwanz-Heptagon (Correct)

  questions.push({
    id: "fz-sim10-q09",
    simulationId: "fz-sim10",
    questionNumber: 9,
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [20, 40], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [40, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) bildet zusammen mit Teilstück p2 (links, Fläche 400) und Teilstück p3 (rechts, Fläche 400) ein symmetrisches Basis-Trapez mit Grundseite 80, Deckseite 40 und Höhe 40 (Fläche 2400). Auf der oberen Kante sitzen die beiden Dreiecke p4 und p5 (je 200 Fläche) als nach oben zeigende 'Ohren': links von x = 20 bis 40 mit Spitze bei (20, 60), rechts von x = 40 bis 60 mit Spitze bei (60, 60), dazwischen ein V-Einschnitt bis (40, 40). Gesamtfläche: 1600 + 400 + 400 + 200 + 200 = 2800 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A besitzt drei Spitzen mit vertikalen Außenkanten. Figur B ist ein geschlossenes Trapez ohne Ohren. Figur C ist ein klassischer Pfeil mit anderer Flächenverteilung.",
    metadata: { pieceCount: 5, shapeFamily: "Schwalbenschwanz", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q10: Mittel (5 pieces), Ans: C
// Theme: Asymmetrisches Z-Polygon (Staggered Z-Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  const p5_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200
  // Total area = 800 + 800 + 600 + 200 + 200 = 2600
  const target_pts = [[20, 0], [60, 0], [60, 50], [100, 50], [80, 70], [40, 70], [40, 20], [0, 20]]; // Z-Polygon, area 2600

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 265, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 335, 65);

  const optA_pts = [[0, 0], [50, 0], [50, 30], [80, 30], [80, 60], [30, 60], [30, 30], [0, 30]]; // Z = 2700
  const optB_pts = [[0, 0], [60, 0], [60, 20], [40, 20], [40, 40], [20, 40], [20, 60], [0, 60]]; // Treppe = 2400
  const optC_pts = target_pts; // Z-Polygon mit abgeschrägten Enden (Correct)
  const optD_pts = [[0, 0], [70, 0], [70, 50], [50, 50], [50, 25], [20, 25], [20, 50], [0, 50]]; // U-Kanal = 2750

  questions.push({
    id: "fz-sim10-q10",
    simulationId: "fz-sim10",
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
      { pieceId: "p4", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 50], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [100, 70], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 20, Fläche 800) bildet den unteren Schenkel von x = 20 bis 60, abgeschlossen durch Dreieck p4 (Fläche 200) mit Schräge von (0, 20) nach (20, 0). Der vertikale Steg p3 (20 × 30, Fläche 600) verbindet von y = 20 bis 50 bei x = 40 bis 60 mit dem oberen Schenkel p2 (40 × 20, Fläche 800) von x = 40 bis 80. Das Dreieck p5 (Fläche 200) schließt den oberen Schenkel mit einer Schräge von (80, 70) nach (100, 50) ab. Gesamtfläche: 800 + 800 + 600 + 200 + 200 = 2600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rein rechtwinkliges Z-Polygon ohne Gehrungsenden. Figur B ist eine abfallende Treppe. Figur D ist ein U-Kanal.",
    metadata: { pieceCount: 5, shapeFamily: "Z-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: A
// Theme: Doppelgiebel-Polygon (Twin Gable Heptagon)
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40, area 2400
  const p2_pts = [[0, 0], [15, 0], [15, 20]]; // Dreieck 15x20, area 150
  const p3_pts = [[0, 0], [15, 0], [0, 20]]; // Dreieck 15x20, area 150
  const p4_pts = [[0, 0], [15, 0], [15, 20]]; // Dreieck 15x20, area 150
  const p5_pts = [[0, 0], [15, 0], [0, 20]]; // Dreieck 15x20, area 150
  // Total area = 2400 + 4 * 150 = 3000
  const target_pts = [[0, 0], [60, 0], [60, 40], [45, 60], [30, 40], [15, 60], [0, 40]]; // Doppelgiebel, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 185, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 250, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 320, 65);

  const optA_pts = target_pts; // Doppelgiebel (Correct)
  const optB_pts = [[0, 0], [60, 0], [60, 40], [30, 70], [0, 40]]; // Einzelgiebel = 3300
  const optC_pts = [[0, 0], [60, 0], [60, 60], [45, 30], [30, 60], [15, 30], [0, 60]]; // M-Krone = 2700
  const optD_pts = [[0, 0], [80, 0], [60, 50], [20, 50]]; // Großtrapez = 3000

  questions.push({
    id: "fz-sim10-q11",
    simulationId: "fz-sim10",
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [15, 40], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 40], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [45, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 40, Fläche 2400) bildet das massive Fundament. Auf der Oberkante bei y = 40 sitzen zwei identische Giebeldächer mit je 30 Breite und 20 Höhe: Der linke Giebel wird von p2 und p3 (je 150 Fläche) mit First bei (15, 60) gebildet, der rechte Giebel von p4 und p5 (je 150 Fläche) mit First bei (45, 60). Dazwischen liegt die Kehle bei (30, 40). Gesamtfläche: 2400 + 4 × 150 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Haus mit nur einem zentralen Dachfirst. Figur C ist eine M-förmige Krone mit invertierten Zinnen. Figur D ist ein einzelnes Großtrapez ohne Giebel.",
    metadata: { pieceCount: 5, shapeFamily: "Doppelgiebel", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: E (Genuine Option E)
// Theme: Asymmetrischer Scherbenschnitt mit Steigungsdisparität
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p3_pts = [[0, 0], [30, 0], [0, 20]]; // Dreieck 30x20, area 300, slope 20/30
  const p4_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20, area 200, slope 1
  const p5_pts = [[0, 0], [40, 0], [0, 15]]; // Dreieck 40x15, area 300, slope 15/40
  // Total piece area = 1200 + 400 + 300 + 200 + 300 = 2400
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 250, 50);
  const p5_canvas = transformPoints(p5_pts, 180, 330, 65);

  const optA_pts = [[15, 0], [55, 0], [70, 30], [55, 60], [15, 60], [0, 30]]; // Hexagon = 2700
  const optB_pts = [[0, 0], [60, 0], [60, 30], [50, 50], [10, 50], [0, 30]]; // Bastion = 2200
  const optC_pts = [[0, 0], [60, 0], [80, 40], [20, 40]]; // Parallelogramm = 2400
  const optD_pts = [[0, 0], [70, 0], [50, 40], [20, 40]]; // Trapez = 2000

  questions.push({
    id: "fz-sim10-q12",
    simulationId: "fz-sim10",
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
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt 1200 + 400 + 300 + 200 + 300 = 2400 Einheiten. Die Schrägkanten weisen drei völlig inkompatible Steigungen auf: p4 hat Steigung 1.0 (20/20), p3 hat Steigung 0.67 (20/30) und p5 hat Steigung 0.375 (15/40). Das Parallelogramm in Figur C verlangt identische gegenüberliegende Flankensteigungen von 2.0 (Höhe 40 auf 20 Versatz), was mit den drei unterschiedlichen Flachkeilen unmöglich ohne Lücken oder Überlappung darstellbar ist. Figur A hat Fläche 2700, Figur B 2200 und Figur D 2000. Folglich ist Option E die einzig korrekte Lösung.\n\nAusschluss: A (2700 ≠ 2400), B (2200 ≠ 2400), C (Winkel-/Steigungsdisparität der Flanken), D (2000 ≠ 2400).",
    metadata: { pieceCount: 5, shapeFamily: "Fangfrage", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q13: Schwer (6 pieces), Ans: B
// Theme: Symmetrisches Doppelspitz-Hexagon mit breitem Rumpf
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  const p5_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30, area 300
  const p6_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  // Total area = 1200 + 1200 + 4 * 300 = 3600
  const target_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Doppelspitz-Hexagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 80, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 150, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 215, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 275, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 65);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = target_pts; // Doppelspitz-Hexagon (Correct)
  const optC_pts = [[40, 0], [80, 45], [40, 90], [0, 45]]; // Raute = 3600
  const optD_pts = [[20, 0], [70, 0], [80, 30], [50, 60], [10, 60], [0, 30]]; // Asymmetrisches Heptagon = 3300

  questions.push({
    id: "fz-sim10-q13",
    simulationId: "fz-sim10",
    questionNumber: 13,
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [20, 60], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [80, 30], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke p1 und p2 (je 40 × 30, Fläche je 1200) bilden übereinander gestapelt einen zentralen Rumpf von 40 × 60 (Fläche 2400) von x = 20 bis 60. An den Flanken formen die Dreiecke p3 und p4 links eine nach links weisende Spitze bei (0, 30) (Fläche 600) und die Dreiecke p5 und p6 rechts eine symmetrische Spitze bei (80, 30) (Fläche 600). Das Resultat ist ein punktsymmetrisches, horizontal gestrecktes Doppelspitz-Hexagon mit horizontalen Kanten oben und unten von 40 Einheiten Länge. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur C ist eine Raute mit 45°-Seitenkanten ohne horizontale Deckflächen. Figur D ist asymmetrisch.",
    metadata: { pieceCount: 6, shapeFamily: "Doppelspitz-Hexagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q14: Schwer (6 pieces), Ans: C
// Theme: Doppelspitz-Hexagon aus 2 Quadraten und 4 Dreiecken (Tangram-Verbund)
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p4_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p5_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p6_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  // Total area = 900 + 900 + 4 * 450 = 3600
  const target_pts = [[30, 0], [60, 0], [90, 30], [60, 60], [30, 60], [0, 30]]; // Doppelspitz-Hexagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 75, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 145, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 215, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 280, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 350, 65);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = [[0, 0], [90, 0], [75, 45], [15, 45]]; // Symmetrisches Trapez = 3375
  const optC_pts = target_pts; // Doppelspitz-Hexagon (Correct)
  const optD_pts = [[20, 0], [80, 0], [90, 35], [55, 60], [15, 60], [0, 30]]; // Asymmetrisches Sechseck = 3300

  questions.push({
    id: "fz-sim10-q14",
    simulationId: "fz-sim10",
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
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [30, 60], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [90, 30], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Quadrate p1 und p2 (je 30 × 30, Fläche je 900) formen eine vertikale Säule von 30 × 60 (Fläche 1800) von x = 30 bis 60. Links formen die Dreiecke p3 und p4 (je 450 Fläche) zusammen ein nach links gerichtetes Dreieck mit Spitze bei (0, 30). Rechts formen die Dreiecke p5 und p6 (je 450 Fläche) ein identisches Dreieck mit Spitze bei (90, 30). Das Resultat ist ein punktsymmetrisches Doppelspitz-Hexagon mit horizontalen Ober- und Unterkanten von 30 Einheiten Länge. Gesamtfläche: 1800 + 900 + 900 = 3600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur B ist ein symmetrisches Trapez mit abweichender Fläche (3375). Figur D ist ein asymmetrisches Sechseck.",
    metadata: { pieceCount: 6, shapeFamily: "Doppelspitz-Hexagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q15: Schwer (6 pieces), Ans: D
// Theme: Großtrapez mit durchgehender 45°-Diagonale aus 6 Teilstücken
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 20], [0, 20]]; // Rechteck 60x20, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p4_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  const p5_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  const p6_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20, area 200
  // Total area = 1200 + 800 + 400 + 3 * 200 = 3000
  const target_pts = [[0, 0], [60, 0], [60, 20], [0, 80]]; // Großtrapez mit 45°-Diagonale, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 20, 50);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 50);
  const p3_canvas = transformPoints(p3_pts, 0, 160, 50);
  const p4_canvas = transformPoints(p4_pts, 90, 215, 50);
  const p5_canvas = transformPoints(p5_pts, 0, 275, 50);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 70);

  const optA_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50 = 3000
  const optB_pts = [[0, 0], [60, 0], [60, 25], [40, 25], [40, 50], [20, 50], [20, 75], [0, 75]]; // Treppe = 3000
  const optC_pts = [[0, 0], [70, 0], [70, 25], [35, 60], [0, 60]]; // Fünfeck = 3325
  const optD_pts = target_pts; // Großtrapez (Correct)

  questions.push({
    id: "fz-sim10-q15",
    simulationId: "fz-sim10",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [40, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [20, 40], isReflection: false },
      { pieceId: "p6", rotationDeg: 0, translation: [0, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die Teilstücke fügen sich zu einem rechtwinkligen Trapez mit vertikaler Basiskante von 80 Einheiten (x = 0 von y = 0 bis 80), horizontaler Unterkante von 60 Einheiten (y = 0 von x = 0 bis 60) und rechter Kante von 20 Einheiten (x = 60 von y = 0 bis 20). Teilstück p1 (60 × 20, Fläche 1200) bildet das Fundament. Darüber liegt p2 (40 × 20, Fläche 800) ergänzt durch Dreieck p4 (20 × 20, Fläche 200). Darüber liegt p3 (20 × 20, Fläche 400) ergänzt durch Dreieck p5 (20 × 20, Fläche 200). Die Spitze wird durch Dreieck p6 (20 × 20, Fläche 200) abgeschlossen. Die drei Dreiecke p4, p5, p6 bilden zusammen eine exakt geradlinige, kontinuierliche 45°-Schräge von (60, 20) bis (0, 80). Gesamtfläche: (80 + 20) / 2 × 60 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist eine abgetreppte Zikkurat ohne geschlossene Schrägkante. Figur C ist ein Fünfeck mit gebrochener Dachlinie.",
    metadata: { pieceCount: 6, shapeFamily: "Großtrapez", requiresRotation: true, isEAnswer: false },
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

// 4. Output to fzSimulation10.ts
const outputPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation10.ts");
const tsContent = `import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_10_QUESTIONS: FzQuestionData[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log("Written to", outputPath);
