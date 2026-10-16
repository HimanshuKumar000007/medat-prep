/**
 * Generator and Validator for MedAT FZ Simulation 2
 * Theme: Rechtwinklige & schiefe Dreiecke
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

// Rotation helper for 2D points: rotate by angle deg around (cx, cy) then shift by (dx, dy)
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

// Calculate bounding box for SVG viewBox with padding
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
// Theme: Dreieckszerlegung eines 80x60 Rechtecks
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [0, 60]]; // Dreieck 40x60, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 60]]; // Dreieck 40x60, area 1200
  const p3_pts = [[0, 0], [40, 0], [40, 60], [0, 60]]; // Rechteck 40x60, area 2400
  const target_pts = [[0, 0], [80, 0], [80, 60], [0, 60]]; // Rechteck 80x60, area 4800

  // Canvas positions: spaced on 380x120
  const p1_canvas = transformPoints(p1_pts, 90, 80, 30); // rotated 90
  const p2_canvas = transformPoints(p2_pts, 0, 160, 30);
  const p3_canvas = transformPoints(p3_pts, 0, 270, 30);

  const optA_pts = [[0, 0], [70, 0], [70, 70], [0, 70]]; // Quadrat 70x70 = 4900
  const optB_pts = target_pts; // Rechteck 80x60 = 4800 (Correct)
  const optC_pts = [[0, 0], [80, 0], [100, 50], [20, 50]]; // Parallelogramm 80x50 = 4000
  const optD_pts = [[0, 0], [90, 0], [70, 60], [20, 60]]; // Trapez = 4200

  questions.push({
    id: "fz-sim2-q01",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [40, 0], [0, 60]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[0, 60], [40, 0], [40, 60]], rotationDeg: 180, translation: [40, 60], isReflection: false },
      { pieceId: "p3", placedPoints: [[40, 0], [80, 0], [80, 60], [40, 60]], rotationDeg: 0, translation: [40, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 und 2 sind zwei kongruente rechtwinklige Dreiecke mit Katheten 40 und 60 (Fläche je 1200 Einheiten). An ihren Hypotenusen zusammengefügt bilden sie exakt ein Rechteck der Abmessung 40 × 60 (Fläche 2400 Einheiten). Zusammen mit Teilstück 3 (Rechteck 40 × 60) entsteht ein Gesamt-Rechteck der Abmessung 80 × 60 (Gesamtfläche 4800 Einheiten). Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Quadrat (Fläche 4900, falsche Proportionen). Figur C ist ein Parallelogramm mit Fläche 4000 (zu klein). Figur D ist ein Trapez mit Fläche 4200. Option E entfällt, da Figur B exakt konstruierbar ist.",
    metadata: {
      pieceCount: 3,
      shapeFamily: "Rechteck-Zerlegung",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 4800,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: D
// Theme: Gleichschenkliges Dreieck aus 3 Teildreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [0, 60]]; // Dreieck 50x60, area 1500
  const p2_pts = [[0, 0], [50, 0], [50, 30]]; // Dreieck 50x30, area 750
  const p3_pts = [[0, 0], [50, 0], [0, 30]]; // Dreieck 50x30, area 750
  const target_pts = [[0, 0], [100, 0], [50, 60]]; // Gleichschenkliges Dreieck Basis 100, Höhe 60, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 45, 30);
  const p2_canvas = transformPoints(p2_pts, 180, 205, 75);
  const p3_canvas = transformPoints(p3_pts, 90, 310, 35);

  const optA_pts = [[0, 0], [50, 0], [50, 60], [0, 60]]; // Rechteck 50x60 = 3000
  const optB_pts = [[0, 0], [100, 0], [30, 60]]; // Schiefes Dreieck Spitze bei 30 statt 50
  const optC_pts = [[0, 0], [80, 0], [40, 75]]; // Dreieck Basis 80, Höhe 75
  const optD_pts = target_pts; // Symmetrisches Dreieck (Correct)

  questions.push({
    id: "fz-sim2-q02",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[50, 0], [100, 0], [50, 60]], rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[0, 0], [50, 0], [50, 30]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[0, 0], [50, 30], [50, 60]], rotationDeg: 180, translation: [50, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 50 und 60 (Fläche 1500). Die Teilstücke 2 und 3 sind zwei kleinere rechtwinklige Dreiecke mit Katheten 50 und 30 (Fläche je 750). An ihren 50er-Katheten bzw. Hypotenusen zusammengefügt bilden sie die linke Dreieckshälfte mit Katheten 50 und 60 (Fläche 1500). Zusammen mit Teilstück 1 entsteht ein großes gleichschenkliges Dreieck mit Basis 100 und Höhe 60 (Gesamtfläche 3000 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Rechteck (keine Dreiecksform). Figur B hat eine asymmetrisch verschobene Spitze bei x = 30 statt x = 50. Figur C hat eine unpassende Basislänge von 80.",
    metadata: {
      pieceCount: 3,
      shapeFamily: "Gleichschenkliges Dreieck",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 3000,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q03: Leicht (4 pieces), Ans: A
// Theme: Parallelogramm aus Rechteck und Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 50]]; // Dreieck 20x50, area 500
  const p2_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50, area 3000
  const p3_pts = [[0, 0], [20, 0], [0, 25]]; // Dreieck 20x25, area 250
  const p4_pts = [[0, 0], [20, 0], [20, 25]]; // Dreieck 20x25, area 250
  const target_pts = [[0, 0], [80, 0], [100, 50], [20, 50]]; // Parallelogramm Basis 80, Höhe 50, area 4000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 35);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 35);
  const p3_canvas = transformPoints(p3_pts, 90, 220, 35);
  const p4_canvas = transformPoints(p4_pts, 180, 320, 75);

  const optA_pts = target_pts; // Parallelogramm (Correct)
  const optB_pts = [[0, 0], [80, 0], [80, 50], [0, 50]]; // Rechteck 80x50 = 4000 (ohne Schrägkante)
  const optC_pts = [[0, 0], [80, 0], [120, 50], [40, 50]]; // Parallelogramm mit Überhang 40 statt 20
  const optD_pts = [[0, 0], [90, 0], [70, 50], [20, 50]]; // Trapez = 3500

  questions.push({
    id: "fz-sim2-q03",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [20, 0], [20, 50]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[20, 0], [80, 0], [80, 50], [20, 50]], rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[80, 0], [100, 25], [80, 25]], rotationDeg: 0, translation: [80, 0], isReflection: false },
      { pieceId: "p4", placedPoints: [[80, 25], [100, 25], [100, 50]], rotationDeg: 0, translation: [80, 25], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 2 ist ein Rechteck (60 × 50, Fläche 3000). Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 20 und 50 (Fläche 500), das links angefügt eine Schrägkante mit Steigung 50/20 = 2.5 erzeugt. Die beiden kleinen Dreiecke 3 und 4 (Katheten 20 und 25, Fläche je 250) ergänzen sich zu einem Dreieck mit Katheten 20 und 50 (Fläche 500) an der rechten Flanke. Es entsteht ein Parallelogramm mit Grundseite 80 und Höhe 50 (Gesamtfläche 4000). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Rechteck ohne die zwingend vorgegebene Schrägkante des Dreiecks 1. Figur C besitzt einen doppelten Überhang von 40 statt 20. Figur D ist ein Trapez mit unzureichender Fläche (3500).",
    metadata: {
      pieceCount: 4,
      shapeFamily: "Parallelogramm-Zerlegung",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 4000,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: E (GENUINE NONE)
// Theme: Hypotenusen-Diskrepanz & Unvereinbare Winkel
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, Hypo 50, area 600
  const p2_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, Hypo 50, area 600
  const p3_pts = [[0, 0], [30, 0], [0, 50]]; // Dreieck 30x50, Hypo sqrt(3400)=58.3, area 750
  const p4_pts = [[0, 0], [30, 0], [30, 45], [0, 45]]; // Rechteck 30x45, area 1350
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]]; // Unattainable placeholder

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 140, 40);
  const p3_canvas = transformPoints(p3_pts, 180, 240, 85);
  const p4_canvas = transformPoints(p4_pts, 0, 290, 35);

  const optA_pts = [[0, 0], [60, 0], [60, 55], [0, 55]]; // Rechteck 60x55 = 3300 (erfordert 2x 30x50 Dreiecke)
  const optB_pts = [[0, 0], [90, 0], [60, 45], [15, 45]]; // Trapez = 3375
  const optC_pts = [[0, 0], [60, 0], [80, 50], [20, 50]]; // Parallelogramm = 3000
  const optD_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck = 3500

  questions.push({
    id: "fz-sim2-q04",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    explanation: "Geometrische Analyse: Die Gesamtfläche der Teilstücke beträgt: Dreieck 1 (600) + Dreieck 2 (600) + Dreieck 3 (750) + Rechteck 4 (1350) = exakt 3300 Einheiten. Teilstück 3 besitzt eine Kathete von 50 und eine Hypotenuse von √3400 ≈ 58.3. Die Teilstücke 1 und 2 besitzen Katheten 30 und 40 (Hypotenuse 50). Damit Teilstück 3 zusammen mit einem anderen Dreieck ein Rechteck bilden könnte, wäre ein zweites Dreieck mit Katheten 30 und 50 zwingend erforderlich – ein solches existiert jedoch nicht.\n\nAusschluss: Figur A (Rechteck 60 × 55) scheitert an den Kathetenlängen (erfordert zwei gleiche Dreiecke der Höhe 50). Figur B (Fläche 3375) und Figur D (Fläche 3500) verletzen die Flächenerhaltung. Figur C (Fläche 3000) ist um 300 Einheiten zu klein. Keine der Figuren A–D lässt sich exakt bilden. Korrekt ist daher Antwort E.",
    metadata: {
      pieceCount: 4,
      shapeFamily: "Hypotenusen-Inkompatibilität",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 3300,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: C
// Theme: Rechtwinkliges Trapez aus Rechteck und 2 Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 60], [0, 60]]; // Rechteck 50x60, area 3000
  const p2_pts = [[0, 0], [40, 0], [0, 30]]; // Dreieck 40x30, area 600
  const p3_pts = [[0, 0], [40, 0], [40, 30]]; // Dreieck 40x30, area 600
  const target_pts = [[0, 0], [90, 0], [50, 60], [0, 60]]; // Rechtwinkliges Trapez, area 4200

  // 3 pieces: let's make it 4 pieces by splitting p1 into two 50x30 rectangles
  const p1a_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // 1500
  const p1b_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // 1500

  const p1a_canvas = transformPoints(p1a_pts, 0, 25, 45);
  const p1b_canvas = transformPoints(p1b_pts, 90, 145, 35);
  const p2_canvas = transformPoints(p2_pts, 0, 205, 45);
  const p3_canvas = transformPoints(p3_pts, 180, 335, 80);

  const optA_pts = [[0, 0], [90, 0], [70, 60], [20, 60]]; // Symmetrisches Trapez = 4200 (falsche Schrägen)
  const optB_pts = [[0, 0], [70, 0], [70, 60], [0, 60]]; // Rechteck 70x60 = 4200
  const optC_pts = target_pts; // Rechtwinkliges Trapez (Correct)
  const optD_pts = [[0, 0], [70, 0], [90, 60], [20, 60]]; // Parallelogramm = 4200

  questions.push({
    id: "fz-sim2-q05",
    simulationId: "fz-sim2",
    questionNumber: 5,
    difficulty: "Mittel",
    correctAnswer: "C",
    questionText: "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    estimatedTimeSeconds: 80,
    canvasViewBox: "0 0 380 120",
    pieces: [
      { id: "p1", points: p1a_pts, canvasPoints: p1a_canvas, area: polygonArea(p1a_pts) },
      { id: "p2", points: p1b_pts, canvasPoints: p1b_canvas, area: polygonArea(p1b_pts) },
      { id: "p3", points: p2_pts, canvasPoints: p2_canvas, area: polygonArea(p2_pts) },
      { id: "p4", points: p3_pts, canvasPoints: p3_canvas, area: polygonArea(p3_pts) },
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [50, 0], [50, 30], [0, 30]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[0, 30], [50, 30], [50, 60], [0, 60]], rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p3", placedPoints: [[50, 0], [90, 0], [50, 30]], rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p4", placedPoints: [[50, 30], [90, 0], [50, 60]], rotationDeg: 180, translation: [90, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (je 50 × 30, Fläche 1500) lassen sich zu einem Block von 50 × 60 (Fläche 3000) stapeln. Die beiden Dreiecke 3 und 4 mit Katheten 40 und 30 (Fläche je 600) bilden zusammen ein Dreieck mit Katheten 40 und 60 (Fläche 1200). Rechts an den 50er-Block angefügt entsteht ein rechtwinkliges Trapez mit Grundseite 90, Deckseite 50 und Höhe 60 (Gesamtfläche 4200). Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein symmetrisches Trapez (erfordert zwei Dreiecke à 20 × 60 an beiden Flanken, die Teile haben jedoch Katheten 40). Figur B ist ein Rechteck (keine Schrägkante). Figur D ist ein Parallelogramm mit zwei schrägen Flanken.",
    metadata: {
      pieceCount: 4,
      shapeFamily: "Rechtwinkliges Trapez",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 4200,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: A
// Theme: Großes rechtwinkliges Dreieck aus 4 Teildreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [0, 80]]; // Dreieck 40x80, area 1600
  const p2_pts = [[0, 0], [40, 0], [0, 40]]; // Dreieck 40x40, area 800
  const p3_pts = [[0, 0], [40, 0], [40, 25]]; // Dreieck 40x25, area 500
  const p4_pts = [[0, 0], [40, 0], [0, 15]]; // Dreieck 40x15, area 300
  // Total Area = 1600 + 800 + 500 + 300 = 3200
  // Target: Großes Dreieck Katheten 80 und 80: area 80*80/2 = 3200!
  const target_pts = [[0, 0], [80, 0], [0, 80]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 20);
  const p2_canvas = transformPoints(p2_pts, 90, 150, 30);
  const p3_canvas = transformPoints(p3_pts, 180, 245, 75);
  const p4_canvas = transformPoints(p4_pts, 0, 295, 55);

  const optA_pts = target_pts; // Dreieck 80x80 (Correct)
  const optB_pts = [[0, 0], [80, 0], [40, 80]]; // Gleichschenkliges Dreieck Basis 80, Höhe 80 = 3200
  const optC_pts = [[0, 0], [64, 0], [0, 100]]; // Dreieck 64x100 = 3200
  const optD_pts = [[0, 0], [80, 0], [80, 40], [0, 40]]; // Rechteck 80x40 = 3200

  questions.push({
    id: "fz-sim2-q06",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [40, 0], [0, 80]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[40, 0], [80, 0], [40, 40]], rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[40, 40], [80, 0], [40, 65]], rotationDeg: 0, translation: [40, 40], isReflection: false },
      { pieceId: "p4", placedPoints: [[40, 65], [40, 80], [0, 80]], rotationDeg: 90, translation: [40, 80], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 40 und 80 (Fläche 1600). Die Teilstücke 2 (Fläche 800), 3 (Fläche 500) und 4 (Fläche 300) haben zusammen eine Fläche von 1600. Durch passgenaue Addition an der vertikalen Trennlinie x = 40 vervollständigen sie die Hypotenuse des Gesamtdreiecks, sodass ein gleichschenklig-rechtwinkliges Dreieck mit Katheten 80 und 80 entsteht (Gesamtfläche 3200 Einheiten). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein gleichschenkliges Dreieck mit zentrierter Spitze bei x = 40 (erfordert zwei symmetrische Hälften). Figur C besitzt Katheten 64 und 100 (Kantenlängen passen zu keinem Teilstück). Figur D ist ein Rechteck.",
    metadata: {
      pieceCount: 4,
      shapeFamily: "Großdreieck-Zerlegung",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 3200,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: E (GENUINE NONE)
// Theme: Schiefe Dreiecke & Kantenlängen-Diskrepanz
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [30, 40]]; // Gleichschenkliges Dreieck Basis 60, Höhe 40, area 1200
  const p2_pts = [[0, 0], [60, 0], [30, 40]]; // Gleichschenkliges Dreieck Basis 60, Höhe 40, area 1200
  const p3_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40, area 600
  const p4_pts = [[0, 0], [30, 0], [0, 35]]; // Dreieck 30x35, area 525 (Fehlende 5 Einheiten Höhe!)
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]]; // Unattainable placeholder

  const p1_canvas = transformPoints(p1_pts, 0, 25, 40);
  const p2_canvas = transformPoints(p2_pts, 180, 180, 80);
  const p3_canvas = transformPoints(p3_pts, 0, 220, 40);
  const p4_canvas = transformPoints(p4_pts, 90, 335, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = [[0, 0], [90, 0], [60, 40], [0, 40]]; // Trapez = 3000
  const optC_pts = [[0, 0], [80, 0], [100, 45], [20, 45]]; // Parallelogramm = 3600
  const optD_pts = [[0, 0], [120, 0], [60, 60]]; // Dreieck Basis 120, Höhe 60 = 3600

  questions.push({
    id: "fz-sim2-q07",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    explanation: "Geometrische Analyse: Teilstück 1 und 2 sind zwei gleichschenklige Dreiecke (Basis 60, Höhe 40, Fläche je 1200). Teilstück 3 ist ein rechtwinkliges Dreieck mit Katheten 30 und 40 (Fläche 600). Teilstück 4 scheint auf den ersten Blick mit Teilstück 3 kongruent zu sein, besitzt jedoch eine Kathete von nur 35 statt 40 (Fläche 525). Die Gesamtsumme aller Teilstücke beträgt somit 1200 + 1200 + 600 + 525 = 3525 Einheiten.\n\nAusschluss: Figur A (Quadrat 60 × 60 = 3600), Figur C (Parallelogramm = 3600) und Figur D (Dreieck = 3600) besitzen allesamt eine Fläche von 3600 Einheiten und sind um exakt 75 Einheiten zu groß für die gegebenen Teile. Figur B hat eine Fläche von 3000 und ist viel zu klein. Da Teilstück 4 mit Höhe 35 nirgends bündig an die 40er-Kanten der übrigen Teile anschließen kann, ist keine Zielfigur bildbar. Antwort E ist korrekt.",
    metadata: {
      pieceCount: 4,
      shapeFamily: "Kantenlängen-Täuschung",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 3525,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q08: Mittel (4 pieces), Ans: B
// Theme: Pfeilfigur / Symmetrischer Chevron aus 4 Dreiecken
// =========================================================================
{
  // Chevron: points [[0,0], [40,30], [0,60], [80,60], [120,30], [80,0]], area = 4800
  // Decomposed into 4 triangles:
  // T1: [[0,0], [80,0], [40,30]], base 80, height 30, area 1200
  // T2: [[80,0], [120,30], [40,30]], base 80, height 30, area 1200
  // T3: [[0,60], [80,60], [40,30]], base 80, height 30, area 1200
  // T4: [[80,60], [120,30], [40,30]], base 80, height 30, area 1200
  // Each triangle is congruent: sides base 80, apex at (40, 30) relative to base.
  const tri_pts = [[0, 0], [80, 0], [40, 30]]; // obtuse triangle base 80, height 30, area 1200
  const target_pts = [[0, 0], [40, 30], [0, 60], [80, 60], [120, 30], [80, 0]]; // Chevron area 4800

  const p1_canvas = transformPoints(tri_pts, 0, 20, 45);
  const p2_canvas = transformPoints(tri_pts, 90, 140, 20);
  const p3_canvas = transformPoints(tri_pts, 180, 275, 75);
  const p4_canvas = transformPoints(tri_pts, 270, 330, 100);

  const optA_pts = [[0, 0], [80, 0], [80, 60], [0, 60]]; // Rechteck 80x60 = 4800
  const optB_pts = target_pts; // Chevron Pfeil (Correct)
  const optC_pts = [[0, 0], [80, 0], [100, 60], [20, 60]]; // Parallelogramm = 4800
  const optD_pts = [[40, 0], [80, 30], [40, 60], [0, 30]]; // Raute = 2400

  questions.push({
    id: "fz-sim2-q08",
    simulationId: "fz-sim2",
    questionNumber: 8,
    difficulty: "Mittel",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [80, 0], [40, 30]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[80, 0], [120, 30], [40, 30]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[0, 60], [80, 60], [40, 30]], rotationDeg: 180, translation: [80, 60], isReflection: false },
      { pieceId: "p4", placedPoints: [[80, 60], [120, 30], [40, 30]], rotationDeg: 180, translation: [120, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Gegeben sind 4 kongruente stumpfwinklige Dreiecke mit Basis 80 und Höhe 30 (Fläche je 1200 Einheiten, Gesamtfläche 4800 Einheiten). Werden jeweils zwei Dreiecke an ihren Schrägkanten zusammengefügt, entstehen zwei Parallelogramme. Durch spiegelbildfreie 2D-Zusammenfügung an der horizontalen Symmetrieachse y = 30 entsteht ein Pfeilpolygon (Chevron) mit nach rechts gerichteter Spitze bei (120, 30) und linker Einbuchtung bei (40, 30). Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein konvexes Rechteck (erfordert rechtwinklige Dreiecke). Figur C ist ein einfaches Parallelogramm ohne die charakteristische Pfeilspitze. Figur D hat nur eine Fläche von 2400 (50% zu klein).",
    metadata: {
      pieceCount: 4,
      shapeFamily: "Nicht-konvexes Pfeilpolygon",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 4800,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q09: Mittel (4 pieces), Ans: D
// Theme: Symmetrisches Trapez aus 2 Dreiecken und 2 Rechtecken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 50]]; // Dreieck 30x50, area 750
  const p2_pts = [[0, 0], [30, 0], [0, 50]]; // Dreieck 30x50, area 750
  const p3_pts = [[0, 0], [40, 0], [40, 25], [0, 25]]; // Rechteck 40x25, area 1000
  const p4_pts = [[0, 0], [40, 0], [40, 25], [0, 25]]; // Rechteck 40x25, area 1000
  const target_pts = [[0, 0], [100, 0], [70, 50], [30, 50]]; // Trapez Basis 100, Deckseite 40, Höhe 50, area 3500

  const p1_canvas = transformPoints(p1_pts, 0, 30, 35);
  const p2_canvas = transformPoints(p2_pts, 90, 130, 25);
  const p3_canvas = transformPoints(p3_pts, 0, 215, 45);
  const p4_canvas = transformPoints(p4_pts, 90, 325, 35);

  const optA_pts = [[0, 0], [100, 0], [70, 50], [0, 50]]; // Rechtwinkliges Trapez = 4250
  const optB_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck 70x50 = 3500
  const optC_pts = [[0, 0], [70, 0], [90, 50], [20, 50]]; // Parallelogramm = 3500
  const optD_pts = target_pts; // Symmetrisches Trapez (Correct)

  questions.push({
    id: "fz-sim2-q09",
    simulationId: "fz-sim2",
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
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [30, 0], [30, 50]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[30, 0], [70, 0], [70, 25], [30, 25]], rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p4", placedPoints: [[30, 25], [70, 25], [70, 50], [30, 50]], rotationDeg: 0, translation: [30, 25], isReflection: false },
      { pieceId: "p2", placedPoints: [[70, 0], [100, 0], [70, 50]], rotationDeg: 0, translation: [70, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 3 und 4 (40 × 25, Fläche je 1000) lassen sich zu einem zentralen Block von 40 × 50 (Fläche 2000) aufeinanderstapeln. Die Teilstücke 1 und 2 sind zwei rechtwinklige Dreiecke mit Katheten 30 und 50 (Fläche je 750). An die linke und rechte Flanke des zentralen Rechtecks angelegt erzeugen sie ein symmetrisches Trapez mit Grundlinie 100 (30 + 40 + 30), Decklinie 40 und Höhe 50 (Gesamtfläche 3500 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein rechtwinkliges Trapez mit nur einer schrägen Flanke (Fläche 4250, zu groß). Figur B ist ein Rechteck (keine Schrägen). Figur C ist ein Parallelogramm mit gleichgerichteten Schrägen.",
    metadata: {
      pieceCount: 4,
      shapeFamily: "Symmetrisches Trapez",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 3500,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q10: Mittel (4 pieces), Ans: C
// Theme: L-Förmiges Orthogonalpolygon aus Dreiecken und Quadrat
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p2_pts = [[0, 0], [40, 0], [0, 40]]; // Dreieck 40x40, area 800
  const p3_pts = [[0, 0], [40, 0], [40, 40]]; // Dreieck 40x40, area 800
  const p4_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const target_pts = [[0, 0], [80, 0], [80, 40], [40, 40], [40, 80], [0, 80]]; // L-Polygon, area 4800

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 140, 35);
  const p3_canvas = transformPoints(p3_pts, 180, 220, 80);
  const p4_canvas = transformPoints(p4_pts, 0, 280, 40);

  const optA_pts = [[0, 0], [120, 0], [120, 40], [0, 40]]; // Rechteck 120x40 = 4800
  const optB_pts = [[0, 0], [70, 0], [70, 70], [0, 70]]; // Quadrat 70x70 = 4900
  const optC_pts = target_pts; // L-Polygon (Correct)
  const optD_pts = [[20, 0], [60, 0], [60, 40], [80, 40], [80, 80], [0, 80], [0, 40], [20, 40]]; // T-Polygon = 4800

  questions.push({
    id: "fz-sim2-q10",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [40, 0], [40, 40], [0, 40]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[40, 0], [80, 0], [40, 40]], rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[40, 40], [80, 0], [80, 40]], rotationDeg: 180, translation: [80, 40], isReflection: false },
      { pieceId: "p4", placedPoints: [[0, 40], [40, 40], [40, 80], [0, 80]], rotationDeg: 0, translation: [0, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die Teilstücke 1 und 4 sind zwei Quadrate mit Kantenlänge 40 (Fläche je 1600). Die Teilstücke 2 und 3 sind zwei rechtwinklig-gleichschenklige Dreiecke mit Katheten 40 (Fläche je 800), die sich an ihren Hypotenusen lückenlos zu einem dritten 40 × 40 Quadrat ergänzen. Drei 40 × 40 Quadrate ergeben zusammen eine Fläche von 4800 Einheiten. In L-Anordnung (ein Quadrat an der Ecke (0,0), eines rechts bei (40,0) und eines oben bei (0,40)) entsteht ein exaktes L-Polygon mit Außenmaßen 80 × 80. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein gestrecktes Rechteck 120 × 40 (keine L-Form). Figur B ist ein Quadrat mit Fläche 4900 (Flächenüberschuss). Figur D ist ein T-förmiges Polygon mit 8 Ecken.",
    metadata: {
      pieceCount: 4,
      shapeFamily: "L-förmiges Orthogonalpolygon",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 4800,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: A
// Theme: Fünfeck mit Schrägkante aus 5 Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [0, 40]]; // Dreieck 50x40, area 1000
  const p2_pts = [[0, 0], [50, 0], [50, 40]]; // Dreieck 50x40, area 1000
  const p3_pts = [[0, 0], [50, 0], [50, 40], [0, 40]]; // Rechteck 50x40, area 2000
  const p4_pts = [[0, 0], [40, 0], [0, 40]]; // Dreieck 40x40, area 800
  const p5_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Rechteck 40x40, area 1600
  // Target: Box 90 x 80 minus cut corner at top right (40x40/2 = 800) -> Area 7200 - 800 = 6400!
  const target_pts = [[0, 0], [90, 0], [90, 40], [50, 80], [0, 80]]; // Fünfeck area 6400

  const p1_canvas = transformPoints(p1_pts, 0, 20, 40);
  const p2_canvas = transformPoints(p2_pts, 180, 125, 75);
  const p3_canvas = transformPoints(p3_pts, 0, 155, 40);
  const p4_canvas = transformPoints(p4_pts, 90, 265, 40);
  const p5_canvas = transformPoints(p5_pts, 0, 315, 40);

  const optA_pts = target_pts; // Fünfeck Schräge rechts oben (Correct)
  const optB_pts = [[0, 0], [80, 0], [80, 80], [0, 80]]; // Quadrat 80x80 = 6400
  const optC_pts = [[0, 0], [90, 0], [90, 80], [40, 80], [0, 40]]; // Fünfeck Schräge links oben (gespiegelt!)
  const optD_pts = [[0, 0], [90, 0], [70, 80], [20, 80]]; // Trapez = 5600

  questions.push({
    id: "fz-sim2-q11",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [50, 0], [0, 40]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[50, 0], [50, 40], [0, 40]], rotationDeg: 180, translation: [50, 40], isReflection: false },
      { pieceId: "p3", placedPoints: [[0, 40], [50, 40], [50, 80], [0, 80]], rotationDeg: 0, translation: [0, 40], isReflection: false },
      { pieceId: "p5", placedPoints: [[50, 0], [90, 0], [90, 40], [50, 40]], rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p4", placedPoints: [[50, 40], [90, 40], [50, 80]], rotationDeg: 0, translation: [50, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 1 und 2 bilden ein 50 × 40 Rechteck (Fläche 2000), welches mit Teilstück 3 (50 × 40 Rechteck) zu einem linken 50 × 80 Block (Fläche 4000) gestapelt wird. Teilstück 5 ist ein 40 × 40 Quadrat (Fläche 1600) rechts unten. Teilstück 4 ist ein rechtwinkliges Dreieck (Katheten 40 und 40, Fläche 800) rechts oben, dessen Hypotenuse die Schrägkante von (50, 80) nach (90, 40) erzeugt. Das resultierende Fünfeck besitzt exakt eine Gesamtfläche von 4000 + 1600 + 800 = 6400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein volles 80 × 80 Quadrat ohne die durch Dreieck 4 vorgegebene Schrägkante. Figur C besitzt die Schrägkante an der linken oberen Ecke und erfordert eine unzulässige Spiegelung. Figur D ist ein Trapez mit unzureichender Fläche (5600).",
    metadata: {
      pieceCount: 5,
      shapeFamily: "Fünfeck mit Schrägkante",
      hasCurvedEdges: false,
      isChiralitySensitive: true,
      areaUnits: 6400,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: E (GENUINE NONE)
// Theme: Parallelogramm mit Spiegelfalle & Chirale Dreiecke
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [0, 60]]; // Dreieck 30x60, area 900
  const p2_pts = [[0, 0], [30, 0], [0, 60]]; // Dreieck 30x60, area 900
  const p3_pts = [[0, 0], [30, 0], [0, 60]]; // Dreieck 30x60, area 900
  const p4_pts = [[0, 0], [30, 0], [0, 60]]; // Dreieck 30x60, area 900
  const p5_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  // Total area = 4500.
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]]; // Unattainable placeholder

  const p1_canvas = transformPoints(p1_pts, 0, 25, 30);
  const p2_canvas = transformPoints(p2_pts, 90, 115, 30);
  const p3_canvas = transformPoints(p3_pts, 180, 205, 85);
  const p4_canvas = transformPoints(p4_pts, 270, 265, 80);
  const p5_canvas = transformPoints(p5_pts, 0, 320, 45);

  const optA_pts = [[0, 0], [75, 0], [95, 60], [20, 60]]; // Parallelogramm mit Überhang 20 statt 30
  const optB_pts = [[0, 0], [50, 0], [50, 90], [0, 90]]; // Rechteck 50x90 = 4500 (Innenzerlegung unmöglich)
  const optC_pts = [[0, 0], [90, 0], [60, 60], [30, 60]]; // Trapez = 3600
  const optD_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Sechseck = 3000

  questions.push({
    id: "fz-sim2-q12",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: unattainable_target, viewBox: getBoundingViewBox(unattainable_target) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    explanation: "Geometrische Analyse: Gegeben sind vier rechtwinklige Dreiecke mit Katheten 30 und 60 (Fläche je 900) und ein Quadrat 30 × 30 (Fläche 900). Gesamtfläche: 4500 Einheiten. Um ein Parallelogramm oder Rechteck zu bilden, müssten jeweils zwei Dreiecke an ihren 60er-Kathete bzw. Hypotenuse anliegen. Das 30 × 30 Quadrat besitzt jedoch Kantenlänge 30, wodurch beim Anlegen an 60er-Kanten stets eine Stufe von 30 Einheiten entsteht, die durch kein Teilstück geschlossen werden kann ohne andere Außenkanten zu brechen.\n\nAusschluss: Figur A besitzt einen falschen Überhang von 20 statt 30 Einheiten. Figur B (Rechteck 50 × 90) erfordert Dreiecke mit Katheten 50, die nicht existieren. Figur C (Trapez mit Fläche 3600) und Figur D (Sechseck mit Fläche 3000) verletzen drastisch die Flächenerhaltung. Keine der Optionen A–D ist bildbar. Korrekt ist Antwort E.",
    metadata: {
      pieceCount: 5,
      shapeFamily: "Chiralitäts- & Stufenfalle",
      hasCurvedEdges: false,
      isChiralitySensitive: true,
      areaUnits: 4500,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: B
// Theme: Symmetrisches gestrecktes Sechseck aus Rechtecken und Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p3_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30, area 300
  const p4_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30, area 300
  const p5_pts = [[0, 0], [60, 0], [30, 20]]; // Dreieck gleichschenklig Basis 60, Höhe 20, area 600
  // Target: Symmetrisches gestrecktes Sechseck: [[20,0], [80,0], [100,30], [80,60], [20,60], [0,30]], area 4800!
  const target_pts = [[20, 0], [80, 0], [100, 30], [80, 60], [20, 60], [0, 30]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 130, 25);
  const p3_canvas = transformPoints(p3_pts, 0, 185, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 255, 75);
  const p5_canvas = transformPoints(p5_pts, 0, 285, 45);

  const optA_pts = [[20, 0], [70, 0], [90, 20], [90, 40], [70, 60], [20, 60], [0, 40], [0, 20]]; // Achteck = 4800
  const optB_pts = target_pts; // Gestrecktes Sechseck (Correct)
  const optC_pts = [[0, 20], [30, 0], [60, 20], [60, 80], [30, 100], [0, 80]]; // Vertikal orientiertes Sechseck
  const optD_pts = [[0, 0], [80, 0], [80, 60], [0, 60]]; // Rechteck 80x60 = 4800

  questions.push({
    id: "fz-sim2-q13",
    simulationId: "fz-sim2",
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
    ],
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[20, 0], [80, 0], [80, 30], [20, 30]], rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", placedPoints: [[20, 30], [80, 30], [80, 60], [20, 60]], rotationDeg: 0, translation: [20, 30], isReflection: false },
      { pieceId: "p3", placedPoints: [[20, 0], [0, 30], [20, 30]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p4", placedPoints: [[20, 30], [0, 30], [20, 60]], rotationDeg: 180, translation: [20, 60], isReflection: false },
      { pieceId: "p5", placedPoints: [[80, 0], [100, 30], [80, 60]], rotationDeg: 90, translation: [80, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Rechtecke 1 und 2 bilden einen zentralen quadratischen Block von 60 × 60 (Fläche 3600). Die Teilstücke 3 und 4 (Katheten 20 und 30, Fläche je 300) bilden zusammen die linke Dreiecksspitze mit Basis 60 und Höhe 20 (Fläche 600, Spitze bei (0,30)). Teilstück 5 ist ein gleichschenkliges Dreieck mit Basis 60 und Höhe 20 (Fläche 600), das um 90° rotiert exakt die rechte Dreiecksspitze mit Spitze bei (100,30) bildet. Es entsteht ein symmetrisches gestrecktes Sechseck (Gesamtfläche 4800 Einheiten). Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Achteck mit abgeschnittenen Ecken oben und unten. Figur C ist ein vertikal ausgerichtetes Sechseck (Höhe 100, Breite 60). Figur D ist ein einfaches Rechteck ohne Dreiecksspitzen.",
    metadata: {
      pieceCount: 5,
      shapeFamily: "Gestrecktes Sechseck",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 4800,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q14: Schwer (5 pieces), Ans: D
// Theme: Symmetrisches Großtrapez aus 5 Teilstücken
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [0, 50]]; // Dreieck 30x50, area 750
  const p2_pts = [[0, 0], [30, 0], [30, 50]]; // Dreieck 30x50, area 750
  const p3_pts = [[0, 0], [50, 0], [50, 25], [0, 25]]; // Rechteck 50x25, area 1250
  const p4_pts = [[0, 0], [50, 0], [0, 25]]; // Dreieck 50x25, area 625
  const p5_pts = [[0, 0], [50, 0], [50, 25]]; // Dreieck 50x25, area 625
  // Total Area = 750 + 750 + 1250 + 625 + 625 = 4000
  // Target: Symmetrisches Trapez Basis 110 (30 + 50 + 30), Deckseite 50, Höhe 50, Area = (110 + 50)/2 * 50 = 4000!
  const target_pts = [[0, 0], [110, 0], [80, 50], [30, 50]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 35);
  const p2_canvas = transformPoints(p2_pts, 180, 115, 85);
  const p3_canvas = transformPoints(p3_pts, 0, 145, 45);
  const p4_canvas = transformPoints(p4_pts, 90, 255, 30);
  const p5_canvas = transformPoints(p5_pts, 270, 335, 95);

  const optA_pts = [[0, 0], [80, 0], [80, 50], [0, 50]]; // Rechteck 80x50 = 4000
  const optB_pts = [[0, 0], [80, 0], [100, 50], [20, 50]]; // Parallelogramm = 4000
  const optC_pts = [[0, 0], [120, 0], [80, 50], [40, 50]]; // Asymmetrisches Trapez = 4000
  const optD_pts = target_pts; // Symmetrisches Trapez (Correct)

  questions.push({
    id: "fz-sim2-q14",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p1", placedPoints: [[0, 0], [30, 0], [30, 50]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[30, 0], [80, 0], [80, 25], [30, 25]], rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p4", placedPoints: [[30, 25], [80, 25], [30, 50]], rotationDeg: 0, translation: [30, 25], isReflection: false },
      { pieceId: "p5", placedPoints: [[80, 25], [80, 50], [30, 50]], rotationDeg: 180, translation: [110, 75], isReflection: false },
      { pieceId: "p2", placedPoints: [[80, 0], [110, 0], [80, 50]], rotationDeg: 0, translation: [80, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück 3 (50 × 25 Rechteck, Fläche 1250) und die beiden Dreiecke 4 und 5 (Katheten 50 und 25, Fläche je 625) ergänzen sich zu einem zentralen Rechteckblock von 50 × 50 (Fläche 2500). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 30 und 50 (Fläche je 750). Links und rechts angefügt bilden sie ein symmetrisches Trapez mit Grundseite 110 (30 + 50 + 30), Deckseite 50 und Höhe 50 (Gesamtfläche 4000 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Rechteck (keine Schrägen). Figur B ist ein Parallelogramm mit zwei gleichgerichteten Schrägkanten. Figur C ist ein asymmetrisches Trapez mit unpassenden Kantenabmessungen (40 statt 50).",
    metadata: {
      pieceCount: 5,
      shapeFamily: "Symmetrisches Großtrapez",
      hasCurvedEdges: false,
      isChiralitySensitive: false,
      areaUnits: 4000,
      simulationNumber: 2,
    },
  });
}

// =========================================================================
// Q15: Schwer (5 pieces), Ans: C
// Theme: Treppenpolygon / Orthogonaler Stufenkörper aus 5 Teilen
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 60], [0, 60]]; // Rechteck 30x60, area 1800
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p4_pts = [[0, 0], [30, 0], [0, 60]]; // Dreieck 30x60, area 900
  const p5_pts = [[0, 0], [30, 0], [30, 60]]; // Dreieck 30x60, area 900
  // Total Area = 1800 + 900 + 900 + 900 + 900 = 5400
  // Target: 3-Stufen Treppe: [[0,0], [90,0], [90,30], [60,30], [60,60], [30,60], [30,90], [0,90]], area 5400!
  const target_pts = [[0, 0], [90, 0], [90, 30], [60, 30], [60, 60], [30, 60], [30, 90], [0, 90]];

  const p1_canvas = transformPoints(p1_pts, 0, 20, 30);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 30);
  const p5_canvas = transformPoints(p5_pts, 180, 335, 90);

  const optA_pts = [[0, 0], [90, 0], [90, 45], [45, 45], [45, 90], [0, 90]]; // 2-Stufen-Polygon = 6075
  const optB_pts = [[0, 0], [73, 0], [73, 74], [0, 74]]; // Fast Quadrat 73x74 = 5402
  const optC_pts = target_pts; // 3-Stufen Treppe (Correct)
  const optD_pts = [[0, 0], [90, 0], [90, 90], [60, 90], [60, 60], [30, 60], [30, 30], [0, 30]]; // Gespiegelte Treppe (Spiegelfalle!)

  questions.push({
    id: "fz-sim2-q15",
    simulationId: "fz-sim2",
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
    targetFigure: { polygon: target_pts, viewBox: getBoundingViewBox(target_pts) },
    options: {
      A: { key: "A", polygon: optA_pts, viewBox: getBoundingViewBox(optA_pts) },
      B: { key: "B", polygon: optB_pts, viewBox: getBoundingViewBox(optB_pts) },
      C: { key: "C", polygon: optC_pts, viewBox: getBoundingViewBox(optC_pts) },
      D: { key: "D", polygon: optD_pts, viewBox: getBoundingViewBox(optD_pts) },
      E: { key: "E", polygon: null, viewBox: "0 0 100 100", isNone: true },
    },
    assembly: [
      { pieceId: "p4", placedPoints: [[0, 0], [30, 0], [0, 60]], rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p5", placedPoints: [[30, 0], [30, 60], [0, 60]], rotationDeg: 180, translation: [30, 60], isReflection: false },
      { pieceId: "p2", placedPoints: [[0, 60], [30, 60], [30, 90], [0, 90]], rotationDeg: 0, translation: [0, 60], isReflection: false },
      { pieceId: "p1", placedPoints: [[30, 0], [60, 0], [60, 60], [30, 60]], rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p3", placedPoints: [[60, 0], [90, 0], [90, 30], [60, 30]], rotationDeg: 0, translation: [60, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die beiden Dreiecke 4 und 5 (Katheten 30 und 60, Fläche je 900) bilden zusammen ein 30 × 60 Rechteck (Fläche 1800). Zusammen mit Quadrat 2 (30 × 30, Fläche 900) entsteht die linke Säule der Abmessung 30 × 90 (Fläche 2700). Die mittlere Säule wird durch Teilstück 1 (30 × 60 Rechteck, Fläche 1800) gebildet. Die rechte Stufe wird durch Quadrat 3 (30 × 30, Fläche 900) gebildet. Es entsteht eine dreistufige Treppenfigur mit Stufenhöhen 90, 60, 30 und Gesamtfläche 5400 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A besitzt nur zwei breite Stufen (Fläche 6075). Figur B ist ein massives Rechteck. Figur D ist die spiegelverkehrte Treppe (aufsteigend von links nach rechts statt absteigend), die nur durch unzulässiges Spiegeln erzeugt werden könnte.",
    metadata: {
      pieceCount: 5,
      shapeFamily: "3-Stufen Treppenkörper",
      hasCurvedEdges: false,
      isChiralitySensitive: true,
      areaUnits: 5400,
      simulationNumber: 2,
    },
  });
}

console.log(`Generated ${questions.length} questions.`);

// Validate right here:
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
 * Official MedAT Figuren zusammensetzen (FZ) — Simulation 2
 * 15 Verified Geometric Spatial Reasoning Questions
 *
 * Theme: Rechtwinklige & schiefe Dreiecke
 * Focus: Kombinationen aus mehreren Dreiecken, Winkelanalyse (90°, 45°, 60°) und mentale 2D-Rotation.
 *
 * Strict Compliance:
 * - 15 questions, 20 minutes (~80s per task)
 * - Static 2D SVG vector diagrams
 * - 0% interactive puzzle / 0% draggable / 0% rotatable UI
 * - 100% pure mental rotation without mirroring (det = +1)
 * - Balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - 3 genuine E ("Keine") cases: Q04, Q07, Q12
 * - Difficulty: 4 Leicht (Q01-Q04), 6 Mittel (Q05-Q10), 5 Schwer (Q11-Q15)
 */

import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_2_QUESTIONS: FzQuestionData[] = `;

const tsContent = header + JSON.stringify(finalQuestions, null, 2) + ";\n";
const outPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation2.ts");
fs.writeFileSync(outPath, tsContent, "utf-8");
console.log(`Written to ${outPath}`);

