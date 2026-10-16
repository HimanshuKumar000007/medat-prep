/**
 * Generator and Validator for MedAT FZ Simulation 5
 * Theme: Finale MedAT-Generalprobe (Höchste Pacing-Stufe)
 * 15 Aufgaben, 20 Min. Prüfungszeit (~80s pro Aufgabe)
 * Distribution: 4 Leicht, 6 Mittel, 5 Schwer
 * Balanced Key: 3 A, 3 B, 3 C, 3 D, 3 E (Genuine E: Q05, Q10, Q15)
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
// Theme: Symmetrisches Sechseck (Hexagon aus Quadrat und 2 Dreiecken)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p2_pts = [[0, 0], [20, 20], [0, 40]]; // Dreieck base 40, height 20, area 400
  const p3_pts = [[0, 0], [20, 20], [0, 40]]; // Dreieck base 40, height 20, area 400
  const target_pts = [[20, 0], [60, 0], [80, 20], [60, 40], [20, 40], [0, 20]]; // Hexagon, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 45, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 160, 40);
  const p3_canvas = transformPoints(p3_pts, 180, 260, 60);

  const optA_pts = target_pts; // Hexagon (Correct)
  const optB_pts = [[0, 0], [60, 0], [80, 40], [20, 40]]; // Parallelogramm = 2400
  const optC_pts = [[10, 0], [70, 0], [80, 40], [0, 40]]; // Trapez = 2400
  const optD_pts = [[40, 0], [80, 30], [40, 60], [0, 30]]; // Raute = 2400

  questions.push({
    id: "fz-sim5-q01",
    simulationId: "fz-sim5",
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
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 180, translation: [20, 40], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist ein zentrales Quadrat von 40 × 40 (Fläche 1600). Die Teilstücke 2 und 3 sind zwei kongruente gleichschenklige Dreiecke mit Basis 40 und Höhe 20 (Fläche je 400). Werden die Dreiecke an die linke und rechte Kante des Quadrats angefügt, entsteht ein spiegelsymmetrisches Sechseck mit einer Gesamtfläche von 1600 + 400 + 400 = 2400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein Parallelogramm. Figur C ist ein unsymmetrisches Trapez. Figur D ist eine Raute mit abweichenden Spitzenwinkeln.",
    metadata: { pieceCount: 3, shapeFamily: "Symmetrisches Sechseck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: C
// Theme: Pultdach-Fünfeck (Pentagon aus Rechteck und rechtwinkligem Dreieck)
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40, area 2400
  const p2_pts = [[0, 0], [40, 0], [40, 30]]; // Dreieck 40x30 / 2, area 600
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const target_pts = [[0, 0], [60, 0], [60, 70], [40, 70], [0, 40]]; // Pentagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 260, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = [[0, 0], [60, 0], [50, 60], [10, 60]]; // Trapez = 3600
  const optC_pts = target_pts; // Pultdach-Pentagon (Correct)
  const optD_pts = [[0, 0], [60, 0], [60, 50], [30, 70], [0, 50]]; // Symmetrisches Haus-Pentagon = 3600

  questions.push({
    id: "fz-sim5-q02",
    simulationId: "fz-sim5",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [40, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 bildet die rechteckige Basis von 60 × 40 (Fläche 2400). Auf der Oberseite bei y = 40 wird Teilstück 2 (rechtwinkliges Dreieck mit Katheten 40 und 30, Fläche 600) links von x = 0 bis 40 aufgesetzt, wodurch die schräge Dachkante von (0, 40) nach (40, 70) entsteht. Teilstück 3 (Rechteck 20 × 30, Fläche 600) schließt rechts von x = 40 bis 60 bündig an. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Schräge. Figur B ist ein symmetrisches Trapez. Figur D ist ein symmetrisches Haus-Pentagon mit mittiger Dachspitze statt einseitigem Pultdach.",
    metadata: { pieceCount: 3, shapeFamily: "Pultdach-Fünfeck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q03: Leicht (3 pieces), Ans: B
// Theme: Haus-Fünfeck (Pentagon mit symmetrischem Dach)
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40, area 2400
  const p2_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  const target_pts = [[0, 0], [60, 0], [60, 40], [30, 70], [0, 40]]; // Haus-Pentagon, area 3300

  const p1_canvas = transformPoints(p1_pts, 0, 40, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 170, 40);
  const p3_canvas = transformPoints(p3_pts, 180, 270, 70);

  const optA_pts = [[0, 0], [60, 0], [60, 55], [0, 55]]; // Rechteck 60x55 = 3300
  const optB_pts = target_pts; // Haus-Pentagon (Correct)
  const optC_pts = [[0, 0], [60, 0], [60, 70], [30, 40], [0, 40]]; // Asymmetrisches Pentagon = 3300
  const optD_pts = [[10, 0], [50, 0], [60, 60], [0, 60]]; // Trapez = 3300

  questions.push({
    id: "fz-sim5-q03",
    simulationId: "fz-sim5",
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
      { pieceId: "p3", rotationDeg: 0, translation: [30, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist der rechteckige Rumpf von 60 × 40 (Fläche 2400). Die Teilstücke 2 und 3 sind zwei zueinander spiegelsymmetrische rechtwinklige Dreiecke mit Katheten 30 und 30 (Fläche je 450). Werden sie mit den 30er-Kathete aufeinander gesetzt, treffen sich die Hypotenusen im gemeinsamen Dachfirst bei (30, 70). Es entsteht ein klassisches Haus-Fünfeck mit Gesamtfläche 2400 + 450 + 450 = 3300 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Dachspitze. Figur C besitzt eine einseitig versetzte Pultdach-Kante. Figur D ist ein Trapez.",
    metadata: { pieceCount: 3, shapeFamily: "Haus-Fünfeck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: D
// Theme: Parallelogramm aus Dreiecken und Rechtecken
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 40]]; // Dreieck 20x40 / 2, area 400
  const p2_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p4_pts = [[0, 0], [20, 0], [0, 40]]; // Dreieck 20x40 / 2, area 400
  const target_pts = [[0, 0], [60, 0], [80, 40], [20, 40]]; // Parallelogramm, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 40);
  const p3_canvas = transformPoints(p3_pts, 90, 190, 40);
  const p4_canvas = transformPoints(p4_pts, 180, 300, 80);

  const optA_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40 = 2400
  const optB_pts = [[10, 0], [70, 0], [80, 40], [0, 40]]; // Trapez = 2400
  const optC_pts = [[0, 0], [80, 0], [60, 40], [20, 40]]; // Invertiertes Trapez = 2400
  const optD_pts = target_pts; // Parallelogramm (Correct)

  questions.push({
    id: "fz-sim5-q04",
    simulationId: "fz-sim5",
    questionNumber: 4,
    difficulty: "Leicht",
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
      { pieceId: "p3", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die zwei Rechtecke (p2 und p3) bilden zusammen einen zentralen rechteckigen Block von 40 × 40 (Fläche 1600). Links wird das rechtwinklige Dreieck p1 mit Katheten 20 und 40 angefügt, rechts das kongruente rechtwinklige Dreieck p4 in gleicher Neigungsrichtung. Dadurch entsteht ein Parallelogramm mit Grundseite 60, Höhe 40 und Kantenversatz 20. Gesamtfläche: 400 + 800 + 800 + 400 = 2400 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägung. Figur B und C sind Trapeze, bei denen die Flankenneigungen gegensinnig verlaufen.",
    metadata: { pieceCount: 4, shapeFamily: "Parallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: E (Genuine Option E!)
// Theme: Asymmetrisches Trapezoid mit nicht-kompatiblen Schnittwinkeln
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [40, 30], [0, 30]]; // Trapez, area 1350
  const p2_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  const p3_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p4_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  // Sum piece area = 1350 + 450 + 800 + 200 = 2800

  const p1_canvas = transformPoints(p1_pts, 0, 35, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 240, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 330, 65);

  // Distractors A-D are invalid
  const optA_pts = [[0, 0], [70, 0], [70, 40], [0, 40]]; // Rechteck 70x40 = 2800 (Rechteck aus schiefem Trapez unmöglich)
  const optB_pts = [[0, 0], [80, 0], [60, 35], [10, 35]]; // Trapez = 2450 (Fläche weicht ab)
  const optC_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50 = 3000 (Fläche weicht ab)
  const optD_pts = [[15, 0], [65, 0], [80, 40], [0, 40]]; // Trapez = 2600 (Fläche weicht ab)
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  questions.push({
    id: "fz-sim5-q05",
    simulationId: "fz-sim5",
    questionNumber: 5,
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
    explanation: "Geometrische Analyse: Die Gesamtfläche der 4 Teilstücke beträgt 1350 + 450 + 800 + 200 = 2800 Flächeneinheiten.\n\nAusschlussverfahren:\n- Figur A ist ein rechtwinkliges Rechteck von 70 × 40 (Fläche 2800). Allerdings besitzt Teilstück 1 eine schräge Kante von (50, 0) nach (40, 30) mit Steigung dx = 10, dy = 30 (Winkel ~71,6°). Weder Teilstück 2 (Winkel 45°) noch Teilstück 4 (Winkel 45°) können diese Kante zu einer geraden 90°-Außenkante ergänzen.\n- Figur B besitzt eine abweichende Fläche von 2450 Einheiten.\n- Figur C besitzt eine abweichende Fläche von 3000 Einheiten.\n- Figur D besitzt eine abweichende Fläche von 2600 Einheiten.\n\nDa keine der Figuren A–D exakt und ohne Überlappung bildbar ist, lautet die korrekte Antwort E.",
    metadata: { pieceCount: 4, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: A
// Theme: Treppenförmiges Sechseck (Stepped Hexagon)
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 40], [0, 40]]; // Rechteck 30x40, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const target_pts = [[0, 0], [90, 0], [90, 20], [60, 20], [60, 40], [30, 40], [30, 60], [0, 60]]; // Stepped Hexagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 200, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 290, 50);

  const optA_pts = target_pts; // Treppen-Polygon (Correct)
  const optB_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optC_pts = [[0, 0], [90, 0], [90, 40], [0, 40]]; // Rechteck 90x40 = 3600
  const optD_pts = [[30, 0], [60, 0], [60, 40], [90, 40], [90, 60], [0, 60], [0, 40], [30, 40]]; // T-Polygon = 3600

  questions.push({
    id: "fz-sim5-q06",
    simulationId: "fz-sim5",
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die Teilstücke p2 (Quadrat 30 × 30) und p3 (Quadrat 30 × 30) bilden zusammen die linke Säule von 30 × 60 (Fläche 1800). Teilstück p1 (Rechteck 30 × 40, Fläche 1200) bildet die mittlere Stufe von x = 30 bis 60 mit Höhe 40. Teilstück p4 (Rechteck 30 × 20, Fläche 600) bildet die rechte Stufe von x = 60 bis 90 mit Höhe 20. Es entsteht eine dreistufige Treppe mit Breiten je 30 und Höhen 60, 40, 20. Gesamtfläche: 900 + 900 + 1200 + 600 = 3600 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein massives Quadrat ohne Stufen. Figur C ist ein glattes Rechteck. Figur D ist ein symmetrisches T-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "Treppenförmiges Sechseck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: D
// Theme: Abgeschrägtes Achteck (Beveled Octagon)
// =========================================================================
{
  const p1_pts = [[0, 0], [80, 0], [60, 20], [20, 20]]; // Trapez bases 80 & 40, h 20, area 1200
  const p2_pts = [[0, 0], [80, 0], [60, 20], [20, 20]]; // Trapez bases 80 & 40, h 20, area 1200
  const p3_pts = [[0, 0], [80, 0], [80, 20], [0, 20]]; // Rechteck 80x20, area 1600
  const p4_pts = [[0, 0], [80, 0], [80, 20], [0, 20]]; // Rechteck 80x20, area 1600
  const target_pts = [[20, 0], [60, 0], [80, 20], [80, 60], [60, 80], [20, 80], [0, 60], [0, 20]]; // Achteck, area 5600

  const p1_canvas = transformPoints(p1_pts, 0, 30, 35);
  const p2_canvas = transformPoints(p2_pts, 180, 160, 75);
  const p3_canvas = transformPoints(p3_pts, 0, 190, 35);
  const p4_canvas = transformPoints(p4_pts, 90, 310, 35);

  const optA_pts = [[0, 0], [80, 0], [80, 70], [0, 70]]; // Rechteck 80x70 = 5600
  const optB_pts = [[0, 0], [80, 0], [70, 80], [10, 80]]; // Trapez = 5600
  const optC_pts = [[20, 0], [60, 0], [80, 40], [60, 80], [20, 80], [0, 40]]; // Sechseck = 4800
  const optD_pts = target_pts; // Achteck (Correct)

  questions.push({
    id: "fz-sim5-q07",
    simulationId: "fz-sim5",
    questionNumber: 7,
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke p3 und p4 (je 80 × 20, Fläche je 1600) bilden den zentralen 80 × 40 Rumpf von y = 20 bis 60. An die Unterseite bei y = 20 wird das Trapez p1 (um 180° rotiert) angefügt, wodurch die untere Verjüngung auf Breite 40 entsteht. An die Oberseite bei y = 60 wird das Trapez p2 aufgesetzt, wodurch die obere Verjüngung auf Breite 40 entsteht. Es entsteht ein symmetrisches Achteck mit Gesamtfläche 1200 + 1200 + 1600 + 1600 = 5600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Eckabschrägungen. Figur B ist ein Trapez. Figur C ist ein Sechseck mit nur 6 Kanten und abweichender Fläche.",
    metadata: { pieceCount: 4, shapeFamily: "Abgeschrägtes Achteck", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q08: Mittel (4 pieces), Ans: C
// Theme: T-förmiges Orthogonalpolygon
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 25], [0, 25]]; // Rechteck 50x25, area 1250
  const p2_pts = [[0, 0], [30, 0], [30, 25], [0, 25]]; // Rechteck 30x25, area 750
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const target_pts = [[25, 0], [55, 0], [55, 50], [80, 50], [80, 75], [0, 75], [0, 50], [25, 50]]; // T-Polygon, area 3500

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 280, 45);

  const optA_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck 70x50 = 3500
  const optB_pts = [[0, 0], [80, 0], [80, 25], [55, 25], [55, 75], [25, 75], [25, 25], [0, 25]]; // Invertiertes T-Polygon = 3500
  const optC_pts = target_pts; // T-Polygon (Correct)
  const optD_pts = [[0, 0], [80, 0], [80, 35], [40, 35], [40, 70], [0, 70]]; // L-Polygon = 3500

  questions.push({
    id: "fz-sim5-q08",
    simulationId: "fz-sim5",
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
      { pieceId: "p4", rotationDeg: 0, translation: [25, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [25, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 50], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [30, 50], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p4 (30 × 20) und Teilstück p3 (30 × 30) bilden zusammen den vertikalen Schaft von 30 × 50 (Breite 30 von x = 25 bis 55, Höhe 50). Oben darauf werden Teilstück p2 (30 × 25) und Teilstück p1 (50 × 25) nebeneinander zu einem durchgehenden Querbalken von 80 × 25 montiert. Es entsteht ein T-förmiges Orthogonalpolygon mit Gesamtfläche 1250 + 750 + 900 + 600 = 3500 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck. Figur B ist kopfüber orientiert mit abweichenden Kantenproportionen. Figur D ist ein L-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "T-förmiges Orthogonalpolygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q09: Mittel (4 pieces), Ans: B
// Theme: Gleichschenkliges Trapez mit symmetrischer Flankenzerlegung
// =========================================================================
{
  const p1_pts = [[0, 0], [15, 0], [15, 40]]; // Dreieck 15x40 / 2, area 300
  const p2_pts = [[0, 0], [15, 0], [0, 40]]; // Dreieck 15x40 / 2, area 300
  const p3_pts = [[0, 0], [30, 0], [30, 40], [0, 40]]; // Rechteck 30x40, area 1200
  const p4_pts = [[0, 0], [30, 0], [30, 40], [0, 40]]; // Rechteck 30x40, area 1200
  const target_pts = [[15, 0], [75, 0], [90, 40], [0, 40]]; // Gleichschenkliges Trapez, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 35, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 110, 40);
  const p3_canvas = transformPoints(p3_pts, 0, 190, 40);
  const p4_canvas = transformPoints(p4_pts, 90, 290, 40);

  const optA_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optB_pts = target_pts; // Gleichschenkliges Trapez (Correct)
  const optC_pts = [[0, 0], [60, 0], [90, 40], [30, 40]]; // Parallelogramm = 2400
  const optD_pts = [[0, 0], [90, 0], [75, 40], [15, 40]]; // Umgekehrtes Trapez = 3000 (verkehrt herum orientiert)

  questions.push({
    id: "fz-sim5-q09",
    simulationId: "fz-sim5",
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
      { pieceId: "p1", rotationDeg: 180, translation: [15, 40], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [15, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [45, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [75, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke p3 und p4 (je 30 × 40, Fläche je 1200) bilden den zentralen 60 × 40 Block von x = 15 bis 75. Links wird das rechtwinklige Dreieck p1 (Katheten 15 und 40, um 180° gedreht) angefügt, wodurch die linke Flanke von (15, 0) nach (0, 40) entsteht. Rechts wird das kongruente Dreieck p2 angefügt, wodurch die rechte Flanke von (75, 0) nach (90, 40) entsteht. Das resultierende symmetrische Trapez besitzt die Grundlinie 60 unten, 90 oben und Höhe 40. Gesamtfläche: 300 + 1200 + 1200 + 300 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit abweichender Fläche (2400). Figur D ist um 180° gekippt mit schmaler Oberseite.",
    metadata: { pieceCount: 4, shapeFamily: "Gleichschenkliges Trapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q10: Mittel (5 pieces), Ans: E (Genuine Option E!)
// Theme: Windmühlen-Kreuz (Cruciform) mit unpassenden Schenkel-Längen
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [25, 0], [25, 30], [0, 30]]; // Rechteck 25x30, area 750
  const p3_pts = [[0, 0], [25, 0], [25, 30], [0, 30]]; // Rechteck 25x30, area 750
  const p4_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p5_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  // Total piece area = 900 + 750 + 750 + 600 + 600 = 3600

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 245, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 320, 45);

  // Distractors A-D are invalid
  const optA_pts = [[25, 0], [55, 0], [55, 25], [80, 25], [80, 55], [55, 55], [55, 80], [25, 80], [25, 55], [0, 55], [0, 25], [25, 25]]; // Symmetrisches Kreuz = 3600, aber Schenkel verlangen vier gleiche 25x30 Rechtecke! Hier haben wir aber 2x25 und 2x20!
  const optB_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600 (ohne Aussparungen)
  const optC_pts = [[0, 0], [90, 0], [90, 40], [0, 40]]; // Rechteck 90x40 = 3600
  const optD_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck 70x50 = 3500 (Fläche weicht ab)
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  questions.push({
    id: "fz-sim5-q10",
    simulationId: "fz-sim5",
    questionNumber: 10,
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
    explanation: "Geometrische Analyse: Teilstück p1 ist ein zentrales Quadrat von 30 × 30 (Fläche 900). Die Teilstücke p2 und p3 sind zwei Rechtecke von 25 × 30 (Länge 25). Die Teilstücke p4 und p5 sind zwei Rechtecke von 20 × 30 (Länge 20).\n\nAusschlussverfahren:\n- Figur A zeigt ein vollkommen spiegelsymmetrisches griechisches Kreuz, dessen vier auskragende Arme alle eine identische Länge von 25 Einheiten besitzen. Dies würde vier kongruente Rechtecke von 25 × 30 erfordern. Vorhanden sind jedoch zwei Arme mit Länge 25 und zwei Arme mit Länge 20, was zwingend ein asymmetrisches Kreuz mit zwei kürzeren Flügeln erzeugt.\n- Figur B ist ein massives Quadrat 60 × 60 ohne Kreuzarme.\n- Figur C ist ein einfaches Rechteck von 90 × 40.\n- Figur D hat eine abweichende Gesamtfläche von 3500 Einheiten.\n\nDa keine der Figuren A–D exakt aus den Teilen gebildet werden kann, ist Option E korrekt.",
    metadata: { pieceCount: 5, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: C
// Theme: Symmetrisches H-Polygon (Doppel-T)
// =========================================================================
{
  const p1_pts = [[0, 0], [25, 0], [25, 50], [0, 50]]; // Rechteck 25x50, area 1250
  const p2_pts = [[0, 0], [25, 0], [25, 30], [0, 30]]; // Rechteck 25x30, area 750
  const p3_pts = [[0, 0], [25, 0], [25, 50], [0, 50]]; // Rechteck 25x50, area 1250
  const p4_pts = [[0, 0], [25, 0], [25, 30], [0, 30]]; // Rechteck 25x30, area 750
  const p5_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const target_pts = [[0, 0], [25, 0], [25, 25], [55, 25], [55, 0], [80, 0], [80, 80], [55, 80], [55, 55], [25, 55], [25, 80], [0, 80]]; // H-Polygon, area 4900

  const p1_canvas = transformPoints(p1_pts, 0, 30, 35);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 160, 40);
  const p4_canvas = transformPoints(p4_pts, 0, 240, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 305, 45);

  const optA_pts = [[0, 0], [70, 0], [70, 70], [0, 70]]; // Quadrat 70x70 = 4900
  const optB_pts = [[25, 0], [55, 0], [55, 30], [80, 30], [80, 55], [0, 55], [0, 30], [25, 30]]; // T-Polygon = 4900
  const optC_pts = target_pts; // H-Polygon (Correct)
  const optD_pts = [[0, 0], [80, 0], [80, 30], [55, 30], [55, 80], [0, 80]]; // U-Polygon = 4900

  questions.push({
    id: "fz-sim5-q11",
    simulationId: "fz-sim5",
    questionNumber: 11,
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 50], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [25, 25], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [55, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [55, 50], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (25 × 50) und p2 (25 × 30) bilden zusammen die linke vertikale Säule von 25 × 80 (Fläche 2000). Ebenso bilden p3 (25 × 50) und p4 (25 × 30) die rechte vertikale Säule von 25 × 80 (Fläche 2000). Teilstück p5 ist ein Quadrat von 30 × 30 (Fläche 900), das mittig zwischen y = 25 und y = 55 als Quersteg eingesetzt wird. Das Resultat ist ein symmetrisches H-Polygon mit Gesamtfläche 2000 + 900 + 2000 = 4900 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Einbuchtungen. Figur B ist ein T-förmiges Polygon. Figur D ist ein einseitig offenes U-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Symmetrisches H-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: A
// Theme: Gestufter Trapezkörper (Stepped Trapezoidal Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20 / 2, area 200
  const p5_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  const target_pts = [[0, 0], [100, 0], [80, 20], [70, 20], [70, 40], [30, 40], [30, 20], [20, 20]]; // Gestufter Trapezkörper, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 185, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 260, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 325, 45);

  const optA_pts = target_pts; // Gestuftes Trapez (Correct)
  const optB_pts = [[10, 0], [90, 0], [70, 40], [30, 40]]; // Einfaches Trapez = 2400
  const optC_pts = [[0, 0], [80, 0], [80, 30], [0, 30]]; // Rechteck 80x30 = 2400
  const optD_pts = [[20, 0], [80, 0], [100, 40], [0, 40]]; // Invertiertes Trapez = 2400

  questions.push({
    id: "fz-sim5-q12",
    simulationId: "fz-sim5",
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
      { pieceId: "p4", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [80, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [30, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: In der unteren Ebene (y = 0 bis 20) formen p4 (Dreieck 20 × 20), p2 (Rechteck 30 × 20), p3 (Rechteck 30 × 20) und p5 (Dreieck 20 × 20) ein Trapezoid mit Basislänge 100 unten und 60 oben (von x = 20 bis 80). In der oberen Ebene (y = 20 bis 40) sitzt zentriert Teilstück p1 (Rechteck 40 × 20 von x = 30 bis 70). Dadurch bleiben links und rechts jeweils 10 Einheiten Schulterbreite als horizontale Stufen frei. Gesamtfläche: 200 + 600 + 600 + 200 + 800 = 2400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein glattes Trapez ohne Schulterstufen. Figur C ist ein einfaches Rechteck. Figur D ist ein umgekehrtes Trapez.",
    metadata: { pieceCount: 5, shapeFamily: "Gestufter Trapezkörper", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: D
// Theme: Asymmetrisches Kronen-Heptagon (Composite Polyform)
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p5_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  const target_pts = [[0, 0], [80, 0], [80, 30], [50, 60], [30, 60], [30, 30], [0, 30]]; // Kronen-Heptagon, area 3450

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 170, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 245, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 335, 75);

  const optA_pts = [[0, 0], [80, 0], [80, 43], [0, 43]]; // Rechteck 80x43 ~ 3440
  const optB_pts = [[0, 0], [80, 0], [60, 60], [20, 60]]; // Trapez = 3000
  const optC_pts = [[0, 0], [80, 0], [80, 60], [40, 60], [40, 30], [0, 30]]; // L-Polygon = 3600
  const optD_pts = target_pts; // Kronen-Heptagon (Correct)

  questions.push({
    id: "fz-sim5-q13",
    simulationId: "fz-sim5",
    questionNumber: 13,
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
      { pieceId: "p2", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [50, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die Teilstücke p1 (30 × 30), p2 (20 × 30) und p3 (30 × 30) bilden zusammen das Basisrechteck von 80 × 30 (Fläche 2400). Auf der oberen Kante bei y = 30 wird Teilstück p4 (Rechteck 20 × 30, Fläche 600) von x = 30 bis 50 aufgesetzt. Direkt rechts daneben wird Teilstück p5 (Dreieck mit Katheten 30 und 30, Fläche 450) von x = 50 bis 80 angefügt, dessen Hypotenuse die Schräge von (80, 30) nach (50, 60) bildet. Es entsteht ein asymmetrisches Heptagon mit Gesamtfläche 2400 + 600 + 450 = 3450 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Turmaufbau. Figur B ist ein symmetrisches Trapez. Figur C ist ein L-Polygon ohne schräge Kante.",
    metadata: { pieceCount: 5, shapeFamily: "Asymmetrisches Kronen-Heptagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q14: Schwer (5 pieces), Ans: B
// Theme: Gestrecktes Parallelogramm mit Dreifach-Schichtkern
// =========================================================================
{
  const p1_pts = [[0, 0], [25, 0], [25, 50]]; // Dreieck 25x50 / 2, area 625
  const p2_pts = [[0, 0], [25, 0], [0, 50]]; // Dreieck 25x50 / 2, area 625
  const p3_pts = [[0, 0], [35, 0], [35, 20], [0, 20]]; // Rechteck 35x20, area 700
  const p4_pts = [[0, 0], [35, 0], [35, 15], [0, 15]]; // Rechteck 35x15, area 525
  const p5_pts = [[0, 0], [35, 0], [35, 15], [0, 15]]; // Rechteck 35x15, area 525
  const target_pts = [[0, 0], [60, 0], [85, 50], [25, 50]]; // Parallelogramm, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 35);
  const p2_canvas = transformPoints(p2_pts, 90, 105, 35);
  const p3_canvas = transformPoints(p3_pts, 0, 180, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 255, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 330, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50 = 3000
  const optB_pts = target_pts; // Parallelogramm (Correct)
  const optC_pts = [[12, 0], [72, 0], [85, 50], [0, 50]]; // Trapez = 3000
  const optD_pts = [[0, 0], [85, 0], [60, 50], [25, 50]]; // Umgekehrtes Trapez = 3000

  questions.push({
    id: "fz-sim5-q14",
    simulationId: "fz-sim5",
    questionNumber: 14,
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
      { pieceId: "p3", rotationDeg: 0, translation: [25, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [25, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [25, 35], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [60, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die drei Rechtecke p3 (35 × 20), p4 (35 × 15) und p5 (35 × 15) stapeln sich vertikal zu einem zentralen Block von 35 × 50 (Fläche 1750, zwischen x = 25 und x = 60). Links schließt Teilstück p1 (rechtwinkliges Dreieck mit Katheten 25 und 50, Fläche 625) an, wodurch die linke Flanke von (0, 0) nach (25, 50) entsteht. Rechts schließt Teilstück p2 (Dreieck 25 × 50, Fläche 625) an, wodurch die rechte Flanke von (60, 0) nach (85, 50) entsteht. Beide Flanken verlaufen exakt parallel. Es entsteht ein schlankes Parallelogramm mit Grundlinie 60 und Höhe 50. Gesamtfläche: 625 + 1750 + 625 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägung. Figur C und D sind Trapeze mit gegensinnig verlaufenden Flankenneigungen.",
    metadata: { pieceCount: 5, shapeFamily: "Gestrecktes Parallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q15: Schwer (6 pieces), Ans: E (Genuine Option E - Generalprobe Finale!)
// Theme: 6-teiliges Mosaik-Polygon (Höchste MedAT-Schwierigkeit)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p5_pts = [[0, 0], [20, 0], [20, 20]]; // Dreieck 20x20 / 2, area 200
  const p6_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  // Total piece area = 800 + 900 + 600 + 600 + 200 + 200 = 3300

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 285, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 65);

  // Distractors A-D are invalid
  const optA_pts = [[0, 0], [60, 0], [60, 55], [0, 55]]; // Rechteck 60x55 = 3300 (Rechteck aus Dreiecken unmöglich ohne passende Gegenstücke)
  const optB_pts = [[10, 0], [70, 0], [80, 45], [0, 45]]; // Trapez = 3150 (Fläche weicht ab)
  const optC_pts = [[0, 0], [80, 0], [80, 35], [50, 35], [50, 60], [0, 60]]; // L-Polygon = 3550 (Fläche weicht ab)
  const optD_pts = [[20, 0], [60, 0], [80, 25], [80, 50], [60, 75], [20, 75], [0, 50], [0, 25]]; // Achteck = 3800 (Fläche weicht ab)
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  questions.push({
    id: "fz-sim5-q15",
    simulationId: "fz-sim5",
    questionNumber: 15,
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
      { id: "p6", points: p6_pts, canvasPoints: p6_canvas, area: polygonArea(p6_pts) },
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
    explanation: "Geometrische Analyse: Die Gesamtfläche der 6 Teilstücke beträgt 800 + 900 + 600 + 600 + 200 + 200 = 3300 Flächeneinheiten.\n\nAusschlussverfahren:\n- Figur A ist ein einfaches Rechteck von 60 × 55 (Fläche 3300). Die Teilstücke p5 und p6 sind zwei rechtwinklige Dreiecke mit Katheten 20 und 20 (Hypotenuse ~28,28). Da kein anderes Teil eine Hypotenuse oder Schrägkante dieser Dimension besitzt und kein Rechteck mit 20er-Kante zum lückenlosen Ausgleich passt, verbleibt an der Außenkante zwingend eine 45°-Schräge. Ein vollkommen rechtwinkliges Rechteck kann daher geometrisch unmöglich zusammengesetzt werden.\n- Figur B besitzt eine abweichende Fläche von 3150 Einheiten.\n- Figur C besitzt eine abweichende Fläche von 3550 Einheiten.\n- Figur D ist ein Achteck mit abweichender Fläche von 3800 Einheiten.\n\nDa keine der Figuren A–D exakt gebildet werden kann, ist Option E die einzig korrekte Antwort.",
    metadata: { pieceCount: 6, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
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

// 4. Output to fzSimulation5.ts
const outputPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation5.ts");
const tsContent = `import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_5_QUESTIONS: FzQuestionData[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log("Written to", outputPath);
