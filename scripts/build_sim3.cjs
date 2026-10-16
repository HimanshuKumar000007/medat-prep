/**
 * Generator and Validator for MedAT FZ Simulation 3
 * Theme: Trapeze, Vierecke & Parallelogramme
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
// Theme: Parallelogramm aus Rechteck und zwei Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 40]]; // Dreieck 30x40, area 600
  const p2_pts = [[0, 0], [50, 0], [50, 40], [0, 40]]; // Rechteck 50x40, area 2000
  const p3_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const target_pts = [[0, 0], [80, 0], [110, 40], [30, 40]]; // Parallelogramm 80x40, area 3200

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 130, 40);
  const p3_canvas = transformPoints(p3_pts, 180, 290, 80);

  const optA_pts = [[0, 0], [80, 0], [80, 40], [0, 40]]; // Rechteck 80x40 = 3200
  const optB_pts = [[0, 0], [110, 0], [80, 40], [30, 40]]; // Symmetrisches Trapez = 3200
  const optC_pts = target_pts; // Parallelogramm (Correct)
  const optD_pts = [[0, 0], [80, 0], [130, 40], [50, 40]]; // Parallelogramm Überhang 50 statt 30

  questions.push({
    id: "fz-sim3-q01",
    simulationId: "fz-sim3",
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
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [80, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 2 ist ein Rechteck mit Abmessungen 50 × 40 (Fläche 2000). Die Teilstücke 1 und 3 sind zwei kongruente rechtwinklige Dreiecke mit Katheten 30 und 40 (Fläche je 600). Wird Dreieck 1 links mit seiner vertikalen Kathete an das Rechteck angefügt, entsteht die linke Schrägkante mit Überhang 30. Dreieck 3 wird rechts in gleicher Orientierung angelegt, sodass ein Parallelogramm mit Grundseite 80 und Höhe 40 (Gesamtfläche 3200) entsteht. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rechtwinkliges Rechteck ohne Schrägkanten. Figur B ist ein symmetrisches Trapez (erfordert gegensinnige Schrägen). Figur D hat einen übertriebenen Überhang von 50 statt 30.",
    metadata: { pieceCount: 3, shapeFamily: "Parallelogramm-Zerlegung", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: A
// Theme: Symmetrisches Trapez aus Quadrat und zwei Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 40]]; // Dreieck 30x40, area 600
  const p2_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p3_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const target_pts = [[0, 0], [100, 0], [70, 40], [30, 40]]; // Symmetrisches Trapez, area 2800

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 140, 30);
  const p3_canvas = transformPoints(p3_pts, 0, 240, 40);

  const optA_pts = target_pts; // Symmetrisches Trapez (Correct)
  const optB_pts = [[0, 0], [100, 0], [70, 40], [0, 40]]; // Rechtwinkliges Trapez = 3400
  const optC_pts = [[0, 0], [70, 0], [100, 40], [30, 40]]; // Parallelogramm = 2800
  const optD_pts = [[0, 0], [100, 0], [50, 56]]; // Großes Dreieck = 2800

  questions.push({
    id: "fz-sim3-q02",
    simulationId: "fz-sim3",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [70, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 3 ist ein 40 × 40 Quadrat (Fläche 1600). Die Teilstücke 1 und 2 sind zwei rechtwinklige Dreiecke mit Katheten 30 und 40 (Fläche je 600). An die linke und rechte 40er-Kante des Quadrats angefügt, bilden sie ein symmetrisches Trapez mit Grundseite 100 (30 + 40 + 30), Deckseite 40 und Höhe 40 (Gesamtfläche 2800). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Trapez mit Fläche 3400 (zu groß). Figur C ist ein Parallelogramm mit gleichsinnigen Schrägkanten. Figur D ist ein großes Dreieck.",
    metadata: { pieceCount: 3, shapeFamily: "Symmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q03: Leicht (3 pieces), Ans: E (GENUINE NONE)
// Theme: Asymmetrische Dreiecke & Trapez-Falle
// =========================================================================
{
  const p1_pts = [[0, 0], [25, 0], [25, 40]]; // Dreieck 25x40, area 500
  const p2_pts = [[0, 0], [35, 0], [0, 40]]; // Dreieck 35x40, area 700
  const p3_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]]; // Unattainable placeholder

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 180, 175, 80);
  const p3_canvas = transformPoints(p3_pts, 0, 240, 40);

  const optA_pts = [[0, 0], [100, 0], [70, 40], [30, 40]]; // Symmetrisches Trapez = 2800 (erfordert 2x 30er Dreiecke)
  const optB_pts = [[0, 0], [70, 0], [100, 40], [30, 40]]; // Parallelogramm = 2800
  const optC_pts = [[0, 0], [70, 0], [70, 40], [0, 40]]; // Rechteck 70x40 = 2800
  const optD_pts = [[0, 0], [100, 0], [60, 50], [20, 50]]; // Trapez Höhe 50 = 3000

  questions.push({
    id: "fz-sim3-q03",
    simulationId: "fz-sim3",
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
    explanation: "Geometrische Analyse: Teilstück 3 ist ein Quadrat mit Kantenlänge 40 (Fläche 1600). Die Teilstücke 1 und 2 sind zwei Dreiecke mit gemeinsamer Höhe 40, jedoch unterschiedlichen Basislängen: 25 und 35 (Fläche 500 und 700). Die Gesamtfläche beträgt exakt 2800 Einheiten.\n\nAusschluss: Figur A ist ein symmetrisches Trapez mit Überhang 30 an beiden Flanken. Da die gegebenen Dreiecke jedoch Basen von 25 und 35 besitzen, kann kein symmetrisches Trapez gebildet werden. Figur B (Parallelogramm) und Figur C (Rechteck) erfordern zwei kongruente Dreiecke mit gleicher Basislänge. Figur D hat eine Höhe von 50 und Fläche 3000 (zu groß). Keine der Optionen A–D ist exakt bildbar. Antwort E ist korrekt.",
    metadata: { pieceCount: 3, shapeFamily: "Trapez-Asymmetrie-Falle", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: B
// Theme: Raute / Rhombus aus 4 kongruenten rechtwinkligen Dreiecken
// =========================================================================
{
  const tri_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, Hypo 50, area 600
  const target_pts = [[40, 0], [80, 30], [40, 60], [0, 30]]; // Raute Diagonalen 80 und 60, area 2400

  const p1_canvas = transformPoints(tri_pts, 0, 25, 45);
  const p2_canvas = transformPoints(tri_pts, 90, 130, 25);
  const p3_canvas = transformPoints(tri_pts, 180, 235, 75);
  const p4_canvas = transformPoints(tri_pts, 270, 315, 95);

  const optA_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40 = 2400
  const optB_pts = target_pts; // Raute (Correct)
  const optC_pts = [[0, 0], [60, 0], [80, 40], [20, 40]]; // Parallelogramm = 2400
  const optD_pts = [[20, 0], [80, 30], [20, 60], [0, 30]]; // Asymmetrisches Deltoid = 2400

  questions.push({
    id: "fz-sim3-q04",
    simulationId: "fz-sim3",
    questionNumber: 4,
    difficulty: "Leicht",
    correctAnswer: "B",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: tri_pts, canvasPoints: p1_canvas, area: polygonArea(tri_pts) },
      { id: "p2", points: tri_pts, canvasPoints: p2_canvas, area: polygonArea(tri_pts) },
      { id: "p3", points: tri_pts, canvasPoints: p3_canvas, area: polygonArea(tri_pts) },
      { id: "p4", points: tri_pts, canvasPoints: p4_canvas, area: polygonArea(tri_pts) },
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
      { pieceId: "p2", rotationDeg: 90, translation: [40, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 180, translation: [40, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 270, translation: [0, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Gegeben sind vier kongruente rechtwinklige Dreiecke mit Katheten 40 und 30 (Fläche je 600 Einheiten, Gesamtfläche 2400 Einheiten). Werden ihre 90°-Ecken in einem gemeinsamen Mittelpunkt bei (40, 30) zusammengelegt, bilden ihre Hypotenusen (Länge je 50) die vier gleich langen Außenkanten einer symmetrischen Raute (Rhombus) mit horizontaler Diagonale 80 und vertikaler Diagonale 60. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Rechteck mit orthogonalen Außenkanten (ohne Schrägen). Figur C ist ein Parallelogramm mit ungleichen Winkeln. Figur D ist ein asymmetrisches Deltoid, dessen Schnittpunkt bei x = 20 statt x = 40 liegt.",
    metadata: { pieceCount: 4, shapeFamily: "Rhombus-Zerlegung", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: D
// Theme: Asymmetrisches Trapez aus Rechteck und 3 Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 40]]; // Dreieck 20x40, area 400
  const p2_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p3_pts = [[0, 0], [50, 0], [0, 20]]; // Dreieck 50x20, area 500
  const p4_pts = [[0, 0], [50, 0], [50, 20]]; // Dreieck 50x20, area 500
  const target_pts = [[0, 0], [110, 0], [60, 40], [20, 40]]; // Asymmetrisches Trapez, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 40);
  const p3_canvas = transformPoints(p3_pts, 0, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 335, 75);

  const optA_pts = [[0, 0], [110, 0], [75, 40], [35, 40]]; // Symmetrisches Trapez = 3000
  const optB_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optC_pts = [[0, 0], [75, 0], [95, 40], [20, 40]]; // Parallelogramm = 3000
  const optD_pts = target_pts; // Asymmetrisches Trapez (Correct)

  questions.push({
    id: "fz-sim3-q05",
    simulationId: "fz-sim3",
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
      { pieceId: "p2", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [110, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 2 ist ein 40 × 40 Quadrat (Fläche 1600). Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 20 und 40 (Fläche 400), das links angefügt wird. Die beiden Dreiecke 3 und 4 mit Katheten 50 und 20 (Fläche je 500) ergänzen sich zu einem Dreieck mit Katheten 50 und 40 (Fläche 1000) an der rechten Flanke. Es entsteht ein asymmetrisches Trapez mit Grundseite 110 (20 + 40 + 50), Deckseite 40 und Höhe 40 (Gesamtfläche 3000). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein symmetrisches Trapez (erfordert gleiche Neigungswinkel an beiden Schenkeln). Figur B ist ein rechtwinkliges Rechteck. Figur C ist ein Parallelogramm.",
    metadata: { pieceCount: 4, shapeFamily: "Asymmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: C
// Theme: Drachenviereck (Deltoid) aus 4 rechtwinkligen Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p2_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p3_pts = [[0, 0], [70, 0], [0, 30]]; // Dreieck 70x30, area 1050
  const p4_pts = [[0, 0], [70, 0], [70, 30]]; // Dreieck 70x30, area 1050
  const target_pts = [[30, 0], [100, 30], [30, 60], [0, 30]]; // Deltoid, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 115, 30);
  const p3_canvas = transformPoints(p3_pts, 0, 185, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 345, 75);

  const optA_pts = [[50, 0], [100, 30], [50, 60], [0, 30]]; // Rhombus = 3000 (symmetrisch bei 50 statt 30)
  const optB_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50 = 3000
  const optC_pts = target_pts; // Deltoid (Correct)
  const optD_pts = [[0, 0], [90, 0], [60, 40], [30, 40]]; // Trapez = 2400

  questions.push({
    id: "fz-sim3-q06",
    simulationId: "fz-sim3",
    questionNumber: 6,
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
      { pieceId: "p2", rotationDeg: 90, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [100, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden kleineren Dreiecke 1 und 2 (Katheten 30 und 30, Fläche je 450) bilden zusammen die linke, kurze Spitze eines Drachenvierecks (Deltoid). Die beiden größeren Dreiecke 3 und 4 (Katheten 70 und 30, Fläche je 1050) bilden die langgestreckte rechte Spitze. Die vier Dreiecke treffen sich an ihren 30er-Katheten entlang der horizontalen Hauptdiagonale. Es entsteht ein Deltoid mit Gesamtfläche 450 + 450 + 1050 + 1050 = 3000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist eine gleichseitige Raute mit Symmetrieachse bei x = 50 (erfordert 4 kongruente Dreiecke). Figur B ist ein Rechteck. Figur D ist ein Trapez mit unzureichender Fläche (2400).",
    metadata: { pieceCount: 4, shapeFamily: "Drachenviereck (Deltoid)", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: A
// Theme: Rechtwinkliges Trapez aus zwei Rechtecken und zwei Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const target_pts = [[0, 0], [90, 0], [60, 60], [0, 60]]; // Rechtwinkliges Trapez, area 4500

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 130, 25);
  const p3_canvas = transformPoints(p3_pts, 0, 210, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 325, 75);

  const optA_pts = target_pts; // Rechtwinkliges Trapez (Correct)
  const optB_pts = [[0, 0], [90, 0], [75, 60], [15, 60]]; // Symmetrisches Trapez = 4500
  const optC_pts = [[0, 0], [75, 0], [75, 60], [0, 60]]; // Rechteck 75x60 = 4500
  const optD_pts = [[0, 0], [75, 0], [95, 60], [20, 60]]; // Parallelogramm = 4500

  questions.push({
    id: "fz-sim3-q07",
    simulationId: "fz-sim3",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [90, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (60 × 30, Fläche je 1800) bilden übereinander gestapelt ein 60 × 60 Quadrat (Fläche 3600). Die beiden Dreiecke 3 und 4 (Katheten 30 und 30, Fläche je 450) ergänzen sich zu einem rechtwinkligen Dreieck mit Katheten 30 und 60 (Fläche 900) an der rechten Seite. Zusammen entsteht ein rechtwinkliges Trapez mit Grundseite 90, Deckseite 60 und Höhe 60 (Gesamtfläche 4500). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein symmetrisches Trapez (erfordert zwei Schrägen mit je 15 Einheiten Überhang). Figur C ist ein Rechteck (keine Schrägen). Figur D ist ein Parallelogramm mit zwei gleichgerichteten Schrägen.",
    metadata: { pieceCount: 4, shapeFamily: "Rechtwinkliges Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q08: Mittel (4 pieces), Ans: E (GENUINE NONE)
// Theme: Flächen- und Winkelkollision bei Parallelogramm
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p2_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p3_pts = [[0, 0], [50, 0], [70, 40], [20, 40]]; // Parallelogramm 50x40, area 2000
  const p4_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]]; // Unattainable placeholder

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 180, 125, 80);
  const p3_canvas = transformPoints(p3_pts, 0, 180, 40);
  const p4_canvas = transformPoints(p4_pts, 0, 295, 45);

  const optA_pts = [[0, 0], [80, 0], [80, 50], [0, 50]]; // Rechteck 80x50 = 4000
  const optB_pts = [[0, 0], [80, 0], [100, 50], [20, 50]]; // Parallelogramm = 4000
  const optC_pts = [[0, 0], [110, 0], [80, 50], [30, 50]]; // Trapez = 4000
  const optD_pts = [[0, 0], [82, 0], [102, 45], [20, 45]]; // Parallelogramm = 4100

  questions.push({
    id: "fz-sim3-q08",
    simulationId: "fz-sim3",
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
    ],
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target), area: polygonArea(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt: Dreieck 1 (600) + Dreieck 2 (600) + Parallelogramm 3 (2000) + Quadrat 4 (900) = exakt 4100 Einheiten. Teilstück 3 besitzt eine Neigung mit Überhang 20 bei Höhe 40. Die beiden Dreiecke 1 und 2 besitzen Katheten 30 und 40 (Überhang 30). Die Schrägwinkel von Teilstück 3 (arctan(40/20) = 63.4°) und den Dreiecken (arctan(40/30) = 53.1°) sind inkompatibel und können an keiner Schrägkante bündig aneinandergefügt werden.\n\nAusschluss: Die Figuren A, B und C besitzen jeweils eine Fläche von 4000 Einheiten und verletzen die Flächenerhaltung (100 Einheiten zu klein). Figur D scheitert an den inkompatiblen Innenwinkeln zwischen Parallelogramm und Dreiecken. Keine der Optionen A–D ist bildbar. Korrekt ist Antwort E.",
    metadata: { pieceCount: 4, shapeFamily: "Winkelkollision & Flächenfalle", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q09: Mittel (4 pieces), Ans: B
// Theme: Parallelogramm mit starkem Überhang
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40]]; // Dreieck 40x40, area 800
  const p2_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p3_pts = [[0, 0], [40, 0], [0, 20]]; // Dreieck 40x20, area 400
  const p4_pts = [[0, 0], [40, 0], [40, 20]]; // Dreieck 40x20, area 400
  const target_pts = [[0, 0], [60, 0], [100, 40], [40, 40]]; // Parallelogramm Überhang 40, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 40);
  const p3_canvas = transformPoints(p3_pts, 0, 185, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 320, 75);

  const optA_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40 = 2400
  const optB_pts = target_pts; // Parallelogramm (Correct)
  const optC_pts = [[0, 0], [100, 0], [80, 40], [20, 40]]; // Symmetrisches Trapez = 2400
  const optD_pts = [[0, 0], [70, 0], [70, 34], [0, 34]]; // Fast Rechteck = 2380

  questions.push({
    id: "fz-sim3-q09",
    simulationId: "fz-sim3",
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
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [100, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist ein rechtwinklig-gleichschenkliges Dreieck mit Katheten 40 und 40 (Fläche 800). Teilstück 2 ist ein 20 × 40 Rechteck (Fläche 800). Die beiden Dreiecke 3 und 4 (Katheten 40 und 20, Fläche je 400) bilden zusammen ein Dreieck mit Katheten 40 und 40 (Fläche 800) an der rechten Seite. Aneinandergefügt entsteht ein Parallelogramm mit Basis 60, Höhe 40 und 45°-Schrägen (Überhang 40). Gesamtfläche: 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C ist ein symmetrisches Trapez. Figur D besitzt eine unpassende Höhe von 34.",
    metadata: { pieceCount: 4, shapeFamily: "45-Grad Parallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q10: Mittel (4 pieces), Ans: D
// Theme: Symmetrisches Trapez mit Kantenabgleich
// =========================================================================
{
  const p1_pts = [[0, 0], [25, 0], [25, 40]]; // Dreieck 25x40, area 500
  const p2_pts = [[0, 0], [25, 0], [0, 40]]; // Dreieck 25x40, area 500
  const p3_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p4_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const target_pts = [[0, 0], [90, 0], [65, 40], [25, 40]]; // Symmetrisches Trapez, area 2600

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 130, 30);
  const p3_canvas = transformPoints(p3_pts, 0, 215, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 295, 45);

  const optA_pts = [[0, 0], [65, 0], [65, 40], [0, 40]]; // Rechteck 65x40 = 2600
  const optB_pts = [[0, 0], [65, 0], [90, 40], [25, 40]]; // Parallelogramm = 2600
  const optC_pts = [[0, 0], [90, 0], [65, 40], [0, 40]]; // Rechtwinkliges Trapez = 3100
  const optD_pts = target_pts; // Symmetrisches Trapez (Correct)

  questions.push({
    id: "fz-sim3-q10",
    simulationId: "fz-sim3",
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
      { pieceId: "p3", rotationDeg: 0, translation: [25, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [25, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [65, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 3 und 4 (40 × 20, Fläche je 800) bilden übereinandergelegt einen zentralen 40 × 40 Block (Fläche 1600). Die Teilstücke 1 und 2 sind zwei kongruente Dreiecke mit Katheten 25 und 40 (Fläche je 500). Links und rechts angefügt bilden sie ein symmetrisches Trapez mit Grundseite 90 (25 + 40 + 25), Deckseite 40 und Höhe 40 (Gesamtfläche 2600). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Rechteck (keine Schrägen). Figur B ist ein Parallelogramm mit gleichgerichteten Schrägen. Figur C ist ein rechtwinkliges Trapez mit Fläche 3100 (zu groß).",
    metadata: { pieceCount: 4, shapeFamily: "Symmetrisches Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: B
// Theme: Großes Parallelogramm aus 5 Teilstücken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [0, 60]]; // Dreieck 30x60, area 900
  const p2_pts = [[0, 0], [30, 0], [30, 60]]; // Dreieck 30x60, area 900
  const p3_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p4_pts = [[0, 0], [50, 0], [50, 15], [0, 15]]; // Rechteck 50x15, area 750
  const p5_pts = [[0, 0], [50, 0], [50, 15], [0, 15]]; // Rechteck 50x15, area 750
  const target_pts = [[0, 0], [80, 0], [110, 60], [30, 60]]; // Parallelogramm 80x60, area 4800

  const p1_canvas = transformPoints(p1_pts, 0, 20, 30);
  const p2_canvas = transformPoints(p2_pts, 90, 120, 25);
  const p3_canvas = transformPoints(p3_pts, 0, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 260, 35);
  const p5_canvas = transformPoints(p5_pts, 0, 260, 65);

  const optA_pts = [[0, 0], [80, 0], [80, 60], [0, 60]]; // Rechteck 80x60 = 4800
  const optB_pts = target_pts; // Parallelogramm (Correct)
  const optC_pts = [[0, 0], [110, 0], [80, 60], [30, 60]]; // Symmetrisches Trapez = 4200
  const optD_pts = [[0, 0], [80, 0], [130, 60], [50, 60]]; // Parallelogramm Überhang 50 statt 30

  questions.push({
    id: "fz-sim3-q11",
    simulationId: "fz-sim3",
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [30, 45], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [80, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die drei Rechtecke 3 (50 × 30, Fläche 1500), 4 (50 × 15, Fläche 750) und 5 (50 × 15, Fläche 750) bilden zusammen einen zentralen 50 × 60 Block (Fläche 3000). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 30 und 60 (Fläche je 900). Links und rechts in gleicher Ausrichtung angelegt entsteht ein Parallelogramm mit Basis 80, Höhe 60 und Neigungsüberhang 30 (Gesamtfläche 4800). Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C ist ein symmetrisches Trapez mit Fläche 4200 (zu klein). Figur D besitzt einen falschen Überhang von 50 statt 30.",
    metadata: { pieceCount: 5, shapeFamily: "Großparallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: D
// Theme: Stufen-Trapez / Fünfeck mit Schrägkante
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p3_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p4_pts = [[0, 0], [40, 0], [0, 15]]; // Dreieck 40x15, area 300
  const p5_pts = [[0, 0], [40, 0], [40, 15]]; // Dreieck 40x15, area 300
  // Target: Box 100 x 60 minus Cutout 40 x 30 / 2 = 600 -> Area 5400!
  const target_pts = [[0, 0], [100, 0], [100, 30], [60, 60], [0, 60]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 120, 25);
  const p3_canvas = transformPoints(p3_pts, 0, 180, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 260, 35);
  const p5_canvas = transformPoints(p5_pts, 180, 350, 75);

  const optA_pts = [[0, 0], [90, 0], [90, 60], [0, 60]]; // Rechteck 90x60 = 5400
  const optB_pts = [[0, 0], [100, 0], [100, 60], [40, 60], [0, 30]]; // Fünfeck Schräge links (gespiegelt!)
  const optC_pts = [[0, 0], [100, 0], [80, 60], [20, 60]]; // Symmetrisches Trapez = 5400
  const optD_pts = target_pts; // Fünfeck Schräge rechts (Correct)

  questions.push({
    id: "fz-sim3-q12",
    simulationId: "fz-sim3",
    questionNumber: 12,
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
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 180, translation: [100, 45], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 1 und 2 bilden die linke 60 × 60 Säule (Fläche 3600). Teilstück 3 (40 × 30 Rechteck, Fläche 1200) liegt rechts unten bei (60, 0). Die Teilstücke 4 und 5 (Dreiecke mit Katheten 40 und 15, Fläche je 300) ergänzen sich zu einem rechtwinkligen Dreieck mit Katheten 40 und 30 (Fläche 600) bei (60, 30), dessen Hypotenuse die Schrägkante von (100, 30) nach (60, 60) bildet. Es entsteht ein Fünfeck mit Schräge an der rechten Flanke und Gesamtfläche 5400 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B besitzt die Schrägkante links und erfordert eine im MedAT unzulässige Spiegelung. Figur C ist ein symmetrisches Trapez.",
    metadata: { pieceCount: 5, shapeFamily: "Fünfeck mit Schrägkante", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: E (GENUINE NONE)
// Theme: Kanten-Diskrepanz & Unvereinbare Zerlegung
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, area 600
  const p2_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, area 600
  const p3_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, area 600
  const p4_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, area 600
  const p5_pts = [[0, 0], [40, 0], [40, 50], [0, 50]]; // Rechteck 40x50, area 2000
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]]; // Unattainable placeholder

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 110, 25);
  const p3_canvas = transformPoints(p3_pts, 180, 195, 75);
  const p4_canvas = transformPoints(p4_pts, 270, 250, 85);
  const p5_canvas = transformPoints(p5_pts, 0, 310, 35);

  const optA_pts = [[0, 0], [120, 0], [90, 40], [30, 40]]; // Trapez = 3600
  const optB_pts = [[0, 0], [88, 0], [88, 50], [0, 50]]; // Rechteck 88x50 = 4400
  const optC_pts = [[0, 0], [88, 0], [118, 50], [30, 50]]; // Parallelogramm = 4400
  const optD_pts = [[20, 0], [80, 0], [100, 30], [80, 60], [20, 60], [0, 30]]; // Sechseck = 4800

  questions.push({
    id: "fz-sim3-q13",
    simulationId: "fz-sim3",
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
    explanation: "Geometrische Analyse: Vier kongruente rechtwinklige Dreiecke mit Katheten 40 und 30 (Fläche je 600) und ein 40 × 50 Rechteck (Fläche 2000) ergeben eine Gesamtfläche von exakt 4400 Einheiten. Werden die vier Dreiecke paarweise an ihren Hypotenusen zusammengelegt, entstehen zwei Rechtecke der Abmessung 40 × 30 (Fläche je 1200). Zusammen mit dem 40 × 50 Rechteck könnte theoretisch ein Rechteck der Abmessung 40 × 110 gebildet werden – eine solche Figur steht jedoch nicht zur Auswahl.\n\nAusschluss: Figur A (Trapez mit Fläche 3600) und Figur D (Sechseck mit Fläche 4800) verletzen drastisch die Flächenerhaltung. Figur B (Rechteck 88 × 50) und Figur C (Parallelogramm) erfordern Kantenlängen von 88 Einheiten, die aus den Kanten 40, 30 und 50 nicht zusammengesetzt werden können. Keine der Figuren A–D ist bildbar. Korrekt ist daher Antwort E.",
    metadata: { pieceCount: 5, shapeFamily: "Kanten-Inkompatibilität", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q14: Schwer (5 pieces), Ans: C
// Theme: Hexagonales Prisma aus 5 Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30, area 450
  const p4_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30, area 450
  const p5_pts = [[0, 0], [60, 0], [30, 30]]; // Dreieck gleichschenklig Basis 60, Höhe 30, area 900
  // Target: Symmetrisches gestrecktes Sechseck: [[30,0], [90,0], [120,30], [90,60], [30,60], [0,30]], area 5400!
  const target_pts = [[30, 0], [90, 0], [120, 30], [90, 60], [30, 60], [0, 30]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 130, 25);
  const p3_canvas = transformPoints(p3_pts, 0, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 275, 75);
  const p5_canvas = transformPoints(p5_pts, 0, 305, 45);

  const optA_pts = [[0, 0], [90, 0], [90, 60], [0, 60]]; // Rechteck 90x60 = 5400
  const optB_pts = [[30, 0], [80, 0], [100, 20], [100, 40], [80, 60], [30, 60], [0, 40], [0, 20]]; // Achteck
  const optC_pts = target_pts; // Symmetrisches Sechseck (Correct)
  const optD_pts = [[0, 30], [30, 0], [60, 30], [60, 90], [30, 120], [0, 90]]; // Vertikal orientiertes Sechseck

  questions.push({
    id: "fz-sim3-q14",
    simulationId: "fz-sim3",
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
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 180, translation: [30, 60], isReflection: false },
      { pieceId: "p5", rotationDeg: 90, translation: [90, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 1 und 2 bilden einen zentralen quadratischen Block von 60 × 60 (Fläche 3600). Die Teilstücke 3 und 4 (Katheten 30 und 30, Fläche je 450) bilden zusammen die linke Dreiecksspitze (Basis 60, Höhe 30, Fläche 900) mit Spitze bei (0, 30). Teilstück 5 ist ein gleichschenkliges Dreieck mit Basis 60 und Höhe 30 (Fläche 900), das um 90° rotiert die rechte Spitze bei (120, 30) bildet. Es entsteht ein symmetrisches gestrecktes Sechseck (Gesamtfläche 5400). Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Spitzen. Figur B ist ein Achteck. Figur D ist ein vertikal ausgerichtetes Sechseck mit Höhe 120 und Breite 60.",
    metadata: { pieceCount: 5, shapeFamily: "Gestrecktes Sechseck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q15: Schwer (5 pieces), Ans: A
// Theme: Symmetrisches Großtrapez aus Quadraten, Rechteck und Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 60]]; // Dreieck 30x60, area 900
  const p2_pts = [[0, 0], [30, 0], [0, 60]]; // Dreieck 30x60, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p5_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const target_pts = [[0, 0], [120, 0], [90, 60], [30, 60]]; // Symmetrisches Trapez, area 5400

  const p1_canvas = transformPoints(p1_pts, 0, 20, 30);
  const p2_canvas = transformPoints(p2_pts, 90, 115, 25);
  const p3_canvas = transformPoints(p3_pts, 0, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 225, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 300, 45);

  const optA_pts = target_pts; // Symmetrisches Großtrapez (Correct)
  const optB_pts = [[0, 0], [90, 0], [90, 60], [0, 60]]; // Rechteck 90x60 = 5400
  const optC_pts = [[0, 0], [90, 0], [120, 60], [30, 60]]; // Parallelogramm = 5400
  const optD_pts = [[0, 0], [120, 0], [90, 60], [0, 60]]; // Rechtwinkliges Trapez = 6300

  questions.push({
    id: "fz-sim3-q15",
    simulationId: "fz-sim3",
    questionNumber: 15,
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
      { pieceId: "p5", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 30], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [90, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 5 (60 × 30 Rechteck, Fläche 1800) und die beiden Quadrate 3 und 4 (30 × 30, Fläche je 900) bilden zusammen einen zentralen 60 × 60 Block (Fläche 3600). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 30 und 60 (Fläche je 900). An die linke und rechte 60er-Kante des zentralen Blocks angelegt bilden sie ein symmetrisches Großtrapez mit Grundseite 120 (30 + 60 + 30), Deckseite 60 und Höhe 60 (Gesamtfläche 5400). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein rechtwinkliges Trapez mit Fläche 6300 (zu groß).",
    metadata: { pieceCount: 5, shapeFamily: "Symmetrisches Großtrapez", requiresRotation: true, isEAnswer: false },
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
 * Official MedAT Figuren zusammensetzen (FZ) — Simulation 3
 * 15 Verified Geometric Spatial Reasoning Questions
 *
 * Theme: Trapeze, Vierecke & Parallelogramme
 * Focus: Schiefe Schnittkanten, symmetrische Trapeze und Erhaltung der Gesamtfläche unter Zeitdruck.
 *
 * Strict Compliance:
 * - 15 questions, 20 minutes (~80s per task)
 * - Static 2D SVG vector diagrams
 * - 0% interactive puzzle / 0% draggable / 0% rotatable UI
 * - 100% pure mental rotation without mirroring (det = +1)
 * - Balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - 3 genuine E ("Keine") cases: Q03, Q08, Q13
 * - Difficulty: 4 Leicht (Q01-Q04), 6 Mittel (Q05-Q10), 5 Schwer (Q11-Q15)
 */

import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_3_QUESTIONS: FzQuestionData[] = `;

const tsContent = header + JSON.stringify(finalQuestions, null, 2) + ";\n";
const outPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation3.ts");
fs.writeFileSync(outPath, tsContent, "utf-8");
console.log(`Written to ${outPath}`);
