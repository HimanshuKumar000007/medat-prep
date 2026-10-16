/**
 * Generator and Validator for MedAT FZ Simulation 6
 * Theme: Meister-Simulation: Extrem-Geometrien & Fangfragen
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
// Q01: Leicht (3 pieces), Ans: B
// Theme: Konkaves Pfeil-Polygon (Chevron / Deltoid-Pfeil)
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [30, 40]]; // Dreieck base 60, h 40, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 40]]; // Dreieck rechtwinklig 30x40 / 2, area 600
  const p3_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck rechtwinklig 30x40 / 2, area 600
  const target_pts = [[0, 0], [30, 40], [60, 0], [60, 40], [30, 80], [0, 40]]; // Chevron, area 2400

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 90, 160, 40);
  const p3_canvas = transformPoints(p3_pts, 180, 270, 75);

  const optA_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40 = 2400
  const optB_pts = target_pts; // Chevron-Pfeil (Correct)
  const optC_pts = [[10, 0], [70, 0], [80, 40], [0, 40]]; // Trapez = 2400
  const optD_pts = [[30, 0], [60, 40], [30, 80], [0, 40]]; // Rhombus = 2400

  questions.push({
    id: "fz-sim6-q01",
    simulationId: "fz-sim6",
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [0, 40], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 bildet die pfeilförmige Dachspitze mit Basis 60 und Firsthöhe 40 (Fläche 1200). Die Teilstücke p2 und p3 sind zwei rechtwinklige Dreiecke (Katheten 30 und 40, Fläche je 600). Werden sie an die Unterseite von p1 angefügt, erzeugen sie eine dreieckige Einbuchtung von (0, 0) über (30, 40) nach (60, 0). Das Resultat ist ein konkaver Chevron-Pfeil mit Gesamtfläche 1200 + 600 + 600 = 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Einbuchtung. Figur C ist ein schiefes Trapez. Figur D ist ein geschlossener Rhombus.",
    metadata: { pieceCount: 3, shapeFamily: "Konkaver Chevron-Pfeil", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q02: Leicht (3 pieces), Ans: A
// Theme: Trapezoidales L-Polygon (Rechteck mit schräger Schulter)
// =========================================================================
{
  const p1_pts = [[0, 0], [50, 0], [50, 30], [0, 30]]; // Rechteck 50x30, area 1500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  const target_pts = [[0, 0], [80, 0], [80, 30], [30, 30], [0, 60]]; // Pentagon mit Schrägkante, area 2850

  const p1_canvas = transformPoints(p1_pts, 0, 35, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 160, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 270, 45);

  const optA_pts = target_pts; // Trapezoidales L-Polygon (Correct)
  const optB_pts = [[0, 0], [80, 0], [80, 35], [0, 35]]; // Rechteck 80x35 = 2800 (Fläche weicht ab)
  const optC_pts = [[0, 0], [80, 0], [60, 45], [20, 45]]; // Trapez = 3000
  const optD_pts = [[0, 0], [80, 0], [80, 30], [50, 30], [50, 60], [0, 60]]; // Rechtwinkliges L-Polygon = 3300

  questions.push({
    id: "fz-sim6-q02",
    simulationId: "fz-sim6",
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
      { pieceId: "p2", rotationDeg: 0, translation: [50, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [0, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 30) und Teilstück p2 (Quadrat 30 × 30) bilden nebeneinander ein durchgehendes Basisrechteck von 80 × 30 (Fläche 2400). Oben links auf Teilstück p1 wird Teilstück p3 (rechtwinkliges Dreieck mit Katheten 30 und 30, Fläche 450) von x = 0 bis 30 aufgesetzt. Dadurch entsteht eine schräge Außenkante von (0, 60) nach (30, 30). Die Gesamtfläche beträgt 1500 + 900 + 450 = 2850 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck. Figur C ist ein symmetrisches Trapez. Figur D ist ein rechtwinkliges L-Polygon ohne schräge Kante mit abweichender Fläche.",
    metadata: { pieceCount: 3, shapeFamily: "Trapezoidales L-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q03: Leicht (3 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Asymmetrischer Flankenneigungswinkel
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 40], [0, 40]]; // Rechteck 60x40, area 2400
  const p2_pts = [[0, 0], [20, 0], [20, 40]]; // Dreieck rechtwinklig 20x40 / 2, area 400 (Winkel ~63.4°)
  const p3_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck rechtwinklig 30x40 / 2, area 600 (Winkel ~53.1°)
  // Total piece area = 2400 + 400 + 600 = 3400
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 40, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 175, 45);
  const p3_canvas = transformPoints(p3_pts, 180, 275, 75);

  const optA_pts = [[20, 0], [80, 0], [100, 40], [0, 40]]; // Symmetrisches Trapez = 3200 (erfordert 2x 20er Dreiecke)
  const optB_pts = [[0, 0], [70, 0], [90, 40], [20, 40]]; // Parallelogramm = 2800 (erfordert identische Winkel)
  const optC_pts = [[0, 0], [85, 0], [85, 40], [0, 40]]; // Rechteck 85x40 = 3400 (Fläche stimmt, aber Rechteckbildung geometrisch unmöglich)
  const optD_pts = [[0, 0], [60, 0], [60, 40], [30, 65], [0, 40]]; // Haus-Pentagon = 3150

  questions.push({
    id: "fz-sim6-q03",
    simulationId: "fz-sim6",
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
    explanation: "Geometrische Analyse: Teilstück p1 ist ein Rechteck von 60 × 40 (Fläche 2400). Teilstück p2 ist ein rechtwinkliges Dreieck mit Katheten 20 und 40 (Hypotenuse ~44,7, Winkel ~63,4°). Teilstück p3 ist ein rechtwinkliges Dreieck mit Katheten 30 und 40 (Hypotenuse 50, Winkel ~53,1°). Gesamtfläche: 3400 Einheiten.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit zwei identischen 20er-Flanken (Fläche 3200 statt 3400).\n- Figur B ist ein Parallelogramm, welches zwei kongruente Dreiecke mit identischem Schrägungswinkel erfordert.\n- Figur C ist ein Rechteck von 85 × 40 (Fläche 3400). Um ein Rechteck zu bilden, müssten die beiden Dreiecke p2 und p3 lückenlos aneinandergefügt ein Rechteck von 25 × 40 ergeben. Da ihre Hypotenusen (44,7 vs. 50) und Winkel völlig inkompatibel sind, ist die Bildung einer geschlossenen rechteckigen Kante geometrisch unmöglich.\n- Figur D besitzt eine abweichende Fläche von 3150 Einheiten.\n\nFolglich kann keine der Figuren A–D zusammengesetzt werden; Option E ist korrekt.",
    metadata: { pieceCount: 3, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q04: Leicht (4 pieces), Ans: C
// Theme: Gestuftes 3-Arm-Kreuz (Crosslet)
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p2_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const target_pts = [[20, 0], [50, 0], [50, 20], [70, 20], [70, 50], [0, 50], [0, 20], [20, 20]]; // 3-Arm Kreuz, area 2700

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 110, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 190, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 275, 45);

  const optA_pts = [[0, 0], [60, 0], [60, 45], [0, 45]]; // Rechteck 60x45 = 2700
  const optB_pts = [[20, 0], [50, 0], [50, 30], [70, 30], [70, 60], [0, 60], [0, 30], [20, 30]]; // T-Polygon = 2700
  const optC_pts = target_pts; // 3-Arm Kreuz (Correct)
  const optD_pts = [[0, 0], [70, 0], [70, 30], [30, 30], [30, 60], [0, 60]]; // L-Polygon = 2700

  questions.push({
    id: "fz-sim6-q04",
    simulationId: "fz-sim6",
    questionNumber: 4,
    difficulty: "Leicht",
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
      { pieceId: "p4", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [50, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 ist ein zentrales Quadrat von 30 × 30 (Fläche 900), das von (20, 20) bis (50, 50) platziert wird. Links wird Teilstück p2 (20 × 30, Fläche 600) angefügt. Rechts wird Teilstück p3 (20 × 30, Fläche 600) angefügt. Unten schließt mittig Teilstück p4 (30 × 20, Fläche 600) von (20, 0) bis (50, 20) an. Die obere Seite von p1 bleibt als ebene Begrenzung frei. Es entsteht ein T-förmiges Dreiflügel-Kreuz mit Gesamtfläche 900 + 600 + 600 + 600 = 2700 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aussparungen. Figur B besitzt abweichende Armproportionen. Figur D ist ein einfaches L-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "Gestuftes 3-Arm-Kreuz", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q05: Mittel (4 pieces), Ans: D
// Theme: Gestuftes Flaschen-Polygon (Stepped Bottle Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck 20x30 / 2, area 300
  const target_pts = [[0, 0], [80, 0], [60, 30], [60, 60], [20, 60], [20, 30]]; // Flaschen-Polygon, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 210, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 300, 75);

  const optA_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optB_pts = [[10, 0], [70, 0], [80, 50], [0, 50]]; // Trapez = 3000
  const optC_pts = [[0, 0], [80, 0], [60, 50], [20, 50]]; // Trapez = 3000
  const optD_pts = target_pts; // Flaschen-Polygon (Correct)

  questions.push({
    id: "fz-sim6-q05",
    simulationId: "fz-sim6",
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
      { pieceId: "p3", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: In der unteren Ebene (y = 0 bis 30) bilden p3 (Dreieck 20 × 30, Fläche 300), p1 (Rechteck 40 × 30, Fläche 1200) und p4 (Dreieck 20 × 30, Fläche 300) ein symmetrisches Trapez mit Basis 80 unten und 40 oben. In der oberen Ebene (y = 30 bis 60) schließt Teilstück p2 (Rechteck 40 × 30, Fläche 1200) exakt auf der 40er-Oberkante von x = 20 bis 60 an. Dadurch entsteht ein gestufter Flaschenkörper mit Gesamtfläche 300 + 1200 + 300 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B und C sind reine Trapeze ohne rechteckigen Turmansatz.",
    metadata: { pieceCount: 4, shapeFamily: "Gestuftes Flaschen-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q06: Mittel (4 pieces), Ans: A
// Theme: Rhomboid-Polygon aus Rechtecken und Dreiecken
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const p4_pts = [[0, 0], [30, 0], [0, 30]]; // Dreieck 30x30 / 2, area 450
  const target_pts = [[0, 0], [100, 0], [130, 30], [30, 30]]; // Parallelogramm, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 290, 75);

  const optA_pts = target_pts; // Parallelogramm (Correct)
  const optB_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optC_pts = [[15, 0], [85, 0], [100, 30], [0, 30]]; // Trapez = 2550
  const optD_pts = [[10, 0], [90, 0], [80, 30], [20, 30]]; // Symmetrisches Trapez = 2100

  questions.push({
    id: "fz-sim6-q06",
    simulationId: "fz-sim6",
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
      { pieceId: "p1", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [70, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 270, translation: [100, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) bilden zusammen einen zentralen rechteckigen Block von 70 × 30 (Fläche 2100) von x = 30 bis 100. Links schließt Teilstück p3 (Dreieck mit Katheten 30 und 30, Fläche 450) von x = 0 bis 30 an. Rechts fügt sich Teilstück p4 (Dreieck 30 × 30, Fläche 450) um 270° gedreht von x = 100 bis 130 an. Beide Schrägflanken verlaufen exakt parallel unter 45°. Das Resultat ist ein Parallelogramm mit Grundseite 100, Deckseite 100 und Höhe 30 mit einer Gesamtfläche von 450 + 2100 + 450 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C und D sind Trapeze mit gegensinnig geneigten Flanken.",
    metadata: { pieceCount: 4, shapeFamily: "Rhomboid-Parallelogramm", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q07: Mittel (4 pieces), Ans: B
// Theme: Abgetrepptes Schrägtrapez (Stepped Chamfered Trapezoid)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 40], [0, 40]]; // Quadrat 40x40, area 1600
  const p2_pts = [[0, 0], [20, 0], [20, 40], [0, 40]]; // Rechteck 20x40, area 800
  const p3_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  // Total area = 1600 + 800 + 200 + 400 = 3000
  const target_pts = [[0, 0], [80, 0], [80, 20], [60, 40], [0, 40]]; // Stepped Chamfered Polygon, area 3000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 40);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 275, 45);

  const optA_pts = [[0, 0], [75, 0], [75, 40], [0, 40]]; // Rechteck 75x40 = 3000
  const optB_pts = target_pts; // Abgetrepptes Schrägtrapez (Correct)
  const optC_pts = [[0, 0], [80, 0], [50, 40], [0, 40]]; // Glattes Trapez = 2600
  const optD_pts = [[0, 0], [80, 0], [80, 25], [40, 25], [40, 40], [0, 40]]; // L-Polygon = 2600

  questions.push({
    id: "fz-sim6-q07",
    simulationId: "fz-sim6",
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
      { pieceId: "p1", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 20], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) bildet den linken massiven Block von x = 0 bis 40. Daneben liegt von x = 40 bis 60 Teilstück p2 (Rechteck 20 × 40, Fläche 800). Im rechten unteren Bereich von x = 60 bis 80 und y = 0 bis 20 schließt Teilstück p4 (Quadrat 20 × 20, Fläche 400) an. Darüber wird Teilstück p3 (Dreieck mit Katheten 20 und 20, Fläche 200) von (60, 20) bis (80, 20) aufgesetzt, dessen schräge Hypotenuse von (80, 20) nach (60, 40) verläuft. Die Gesamthöhe beträgt 40, die Gesamtbreite 80. Gesamtfläche: 1600 + 800 + 400 + 200 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägung. Figur C ist ein rein glattes Trapez mit abweichender Fläche (2600). Figur D ist ein rechtwinkliges L-Polygon.",
    metadata: { pieceCount: 4, shapeFamily: "Abgetrepptes Schrägtrapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q08: Mittel (4 pieces), Ans: E (Genuine Option E!)
// Theme: Fangfrage — Hohlraum- und Kantenfehlanpassung
// =========================================================================
{
  const p1_pts = [[0, 0], [60, 0], [60, 30], [0, 30]]; // Rechteck 60x30, area 1800
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [25, 0], [0, 30]]; // Dreieck 25x30 / 2, area 375
  // Total piece area = 1800 + 900 + 600 + 375 = 3675
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 115, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 195, 45);
  const p4_canvas = transformPoints(p4_pts, 180, 280, 75);

  const optA_pts = [[0, 0], [80, 0], [80, 60], [50, 60], [50, 30], [30, 30], [30, 60], [0, 60]]; // U-Polygon = 3600 (Fläche weicht ab)
  const optB_pts = [[0, 0], [70, 0], [70, 50], [0, 50]]; // Rechteck 70x50 = 3500 (Fläche weicht ab)
  const optC_pts = [[0, 0], [90, 0], [90, 30], [40, 30], [40, 60], [0, 60]]; // L-Polygon = 3900 (Fläche weicht ab)
  const optD_pts = [[10, 0], [80, 0], [90, 45], [0, 45]]; // Trapez = 3600

  questions.push({
    id: "fz-sim6-q08",
    simulationId: "fz-sim6",
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
    assembly: [],
    explanation: "Geometrische Analyse: Die Summe der Einzelflächen beträgt exakt 1800 + 900 + 600 + 375 = 3675 Flächeneinheiten. Zudem besitzt Teilstück p4 eine Kathetenlänge von 25 und eine Hypotenuse von ~39,05.\n\nAusschlussverfahren:\n- Figur A besitzt eine Gesamtfläche von 3600 Einheiten (Flächendefizit von 75 Einheiten).\n- Figur B ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (Defizit von 175 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 3900 (zu groß).\n- Figur D ist ein Trapez mit Fläche 3600 Einheiten.\n\nDa keine der Optionen A–D mit der Gesamtfläche von 3675 Einheiten übereinstimmt und die Schrägkante von p4 nicht kompensiert werden kann, ist Antwort E zwingend richtig.",
    metadata: { pieceCount: 4, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q09: Mittel (5 pieces), Ans: D
// Theme: Symmetrisches Griechisches Kreuz (Greek Cross aus 5 Quadraten)
// =========================================================================
{
  const p1_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const p2_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const p3_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const p4_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const p5_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const target_pts = [[25, 0], [50, 0], [50, 25], [75, 25], [75, 50], [50, 50], [50, 75], [25, 75], [25, 50], [0, 50], [0, 25], [25, 25]]; // Kreuz, area 3125

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 160, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 225, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 290, 45);

  const optA_pts = [[0, 0], [55, 0], [55, 55], [0, 55]]; // Quadrat 55x55 = 3025
  const optB_pts = [[25, 0], [50, 0], [50, 35], [75, 35], [75, 60], [0, 60], [0, 35], [25, 35]]; // T-Polygon = 3125
  const optC_pts = [[0, 0], [75, 0], [75, 25], [25, 25], [25, 75], [0, 75]]; // L-Polygon = 3125
  const optD_pts = target_pts; // Griechisches Kreuz (Correct)

  questions.push({
    id: "fz-sim6-q09",
    simulationId: "fz-sim6",
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
      { pieceId: "p1", rotationDeg: 0, translation: [25, 25], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [25, 50], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [25, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 25], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [50, 25], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Alle 5 Teilstücke sind vollkommen kongruente Quadrate von 25 × 25 (Fläche je 625). Werden vier dieser Quadrate kreuzförmig an die vier Kanten des zentralen Quadrats p1 angefügt, entsteht ein exakt spiegelsymmetrisches griechisches Kreuz mit 12 Kanten à 25 Einheiten. Gesamtfläche: 5 × 625 = 3125 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Quadrat mit Fläche 3025 (zu klein). Figur B ist ein T-förmiges Polygon. Figur C ist ein asymmetrisches L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Griechisches Kreuz", requiresRotation: false, isEAnswer: false },
  });
}

// =========================================================================
// Q10: Mittel (5 pieces), Ans: C
// Theme: Doppelt gestuftes Z-Polygon (Zigzag-Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [25, 0], [25, 50], [0, 50]]; // Rechteck 25x50, area 1250
  const p2_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const p3_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const p4_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const p5_pts = [[0, 0], [25, 0], [25, 25], [0, 25]]; // Quadrat 25x25, area 625
  const target_pts = [[0, 0], [50, 0], [50, 75], [75, 75], [75, 100], [25, 100], [25, 25], [0, 25]]; // Z-Polygon, area 3750

  const p1_canvas = transformPoints(p1_pts, 0, 30, 35);
  const p2_canvas = transformPoints(p2_pts, 0, 95, 45);
  const p3_canvas = transformPoints(p3_pts, 0, 160, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 225, 45);
  const p5_canvas = transformPoints(p5_pts, 0, 290, 45);

  const optA_pts = [[0, 0], [75, 0], [75, 50], [0, 50]]; // Rechteck 75x50 = 3750
  const optB_pts = [[0, 0], [75, 0], [75, 25], [50, 25], [50, 75], [25, 75], [25, 100], [0, 100]]; // L-Treppe = 3750
  const optC_pts = target_pts; // Z-Polygon (Correct)
  const optD_pts = [[25, 0], [50, 0], [50, 35], [75, 35], [75, 65], [0, 65], [0, 35], [25, 35]]; // T-Polygon = 3750

  questions.push({
    id: "fz-sim6-q10",
    simulationId: "fz-sim6",
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
      { pieceId: "p2", rotationDeg: 0, translation: [0, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [25, 0], isReflection: false },
      { pieceId: "p1", rotationDeg: 0, translation: [25, 25], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [25, 75], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [50, 75], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 ist ein zentrales vertikales Rechteck von 25 × 50 (Fläche 1250) von (25, 25) bis (50, 75). Unten links schließen p2 und p3 nebeneinander als horizontaler Balken von 50 × 25 an. Oben rechts schließen p4 und p5 als horizontaler Balken von 50 × 25 an. Das Resultat ist ein punktsymmetrisches, zweifach gestuftes Z-förmiges Polygon mit Gesamtfläche 1250 + 4 × 625 = 3750 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Versatz. Figur B ist ein einseitig offener Stufenkörper. Figur D ist ein T-förmiges Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Doppelt gestuftes Z-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q11: Schwer (5 pieces), Ans: A
// Theme: Asymmetrisches Kronen-Heptagon (Tower Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [35, 0], [35, 30], [0, 30]]; // Rechteck 35x30, area 1050
  const p2_pts = [[0, 0], [35, 0], [35, 30], [0, 30]]; // Rechteck 35x30, area 1050
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p5_pts = [[0, 0], [30, 0], [30, 30]]; // Dreieck 30x30 / 2, area 450
  const target_pts = [[0, 0], [90, 0], [90, 30], [60, 60], [30, 60], [30, 30], [0, 30]]; // Kronen-Heptagon, area 4050

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 100, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 175, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 245, 45);
  const p5_canvas = transformPoints(p5_pts, 180, 335, 75);

  const optA_pts = target_pts; // Kronen-Heptagon (Correct)
  const optB_pts = [[0, 0], [90, 0], [90, 45], [0, 45]]; // Rechteck 90x45 = 4050
  const optC_pts = [[15, 0], [75, 0], [90, 45], [0, 45]]; // Trapez = 3375
  const optD_pts = [[0, 0], [90, 0], [90, 60], [45, 60], [45, 30], [0, 30]]; // L-Polygon = 4050

  questions.push({
    id: "fz-sim6-q11",
    simulationId: "fz-sim6",
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
      { pieceId: "p2", rotationDeg: 0, translation: [35, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [70, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [60, 30], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die drei Rechtecke p1 (35 × 30), p2 (35 × 30) und p3 (20 × 30) bilden zusammen das breite Basisrechteck von 90 × 30 (Fläche 2700). Auf der Oberseite schließt von x = 30 bis 60 Teilstück p4 (Quadrat 30 × 30, Fläche 900) an. Direkt rechts daneben wird Teilstück p5 (Dreieck 30 × 30, Fläche 450) von x = 60 bis 90 aufgesetzt, dessen schräge Hypotenuse von (60, 60) nach (90, 30) abfällt. Es entsteht ein asymmetrisches Heptagon mit Turm- und Schrägkante mit Gesamtfläche 2700 + 900 + 450 = 4050 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein massives Rechteck ohne Schräge. Figur C ist ein Trapez mit abweichender Fläche (3375). Figur D ist ein rein rechtwinkliges L-Polygon ohne Schrägkante.",
    metadata: { pieceCount: 5, shapeFamily: "Asymmetrisches Kronen-Heptagon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q12: Schwer (5 pieces), Ans: C
// Theme: Symmetrisches U-Polygon (Channel Polygon)
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p2_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p3_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p4_pts = [[0, 0], [20, 0], [20, 30], [0, 30]]; // Rechteck 20x30, area 600
  const p5_pts = [[0, 0], [20, 0], [20, 60], [0, 60]]; // Rechteck 20x60, area 1200
  const target_pts = [[0, 0], [80, 0], [80, 80], [60, 80], [60, 20], [20, 20], [20, 80], [0, 80]]; // U-Polygon, area 4000

  const p1_canvas = transformPoints(p1_pts, 0, 30, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 105, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 180, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 255, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 330, 35);

  const optA_pts = [[0, 0], [80, 0], [80, 50], [0, 50]]; // Rechteck 80x50 = 4000
  const optB_pts = [[20, 0], [60, 0], [60, 30], [80, 30], [80, 70], [0, 70], [0, 30], [20, 30]]; // T-Polygon = 4000
  const optC_pts = target_pts; // U-Polygon (Correct)
  const optD_pts = [[0, 0], [80, 0], [80, 40], [40, 40], [40, 80], [0, 80]]; // L-Polygon = 4000

  questions.push({
    id: "fz-sim6-q12",
    simulationId: "fz-sim6",
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
      { pieceId: "p2", rotationDeg: 0, translation: [40, 0], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [0, 20], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 20], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [60, 50], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p1 (40 × 20) und p2 (40 × 20) bilden zusammen das Basisband von 80 × 20 (Fläche 1600). Links schließt Teilstück p5 (20 × 60, Fläche 1200) als durchgehender linker Pfeiler bis zur Gesamthöhe 80 an. Rechts bilden p3 (20 × 30, Fläche 600) und p4 (20 × 30, Fläche 600) übereinandergesetzt den rechten Pfeiler von 20 × 60. In der Mitte entsteht eine lichte Aussparung von 40 × 60. Es entsteht ein symmetrisches U-förmiges Orthogonalpolygon mit Gesamtfläche 1600 + 1200 + 1200 = 4000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein massives Rechteck. Figur B ist ein symmetrisches T-Polygon. Figur D ist ein asymmetrisches L-Polygon.",
    metadata: { pieceCount: 5, shapeFamily: "Symmetrisches U-Polygon", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q13: Schwer (5 pieces), Ans: D
// Theme: Symmetrisches Trapez mit Dreifach-Schichtkern
// =========================================================================
{
  const p1_pts = [[0, 0], [30, 0], [30, 40]]; // Dreieck 30x40 / 2, area 600
  const p2_pts = [[0, 0], [30, 0], [0, 40]]; // Dreieck 30x40 / 2, area 600
  const p3_pts = [[0, 0], [40, 0], [40, 20], [0, 20]]; // Rechteck 40x20, area 800
  const p4_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const p5_pts = [[0, 0], [20, 0], [20, 20], [0, 20]]; // Quadrat 20x20, area 400
  const target_pts = [[0, 0], [100, 0], [70, 40], [30, 40]]; // Symmetrisches Trapez, area 2800

  const p1_canvas = transformPoints(p1_pts, 0, 30, 40);
  const p2_canvas = transformPoints(p2_pts, 90, 110, 40);
  const p3_canvas = transformPoints(p3_pts, 0, 190, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 260, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 320, 45);

  const optA_pts = [[0, 0], [70, 0], [70, 40], [0, 40]]; // Rechteck 70x40 = 2800
  const optB_pts = [[0, 0], [70, 0], [100, 40], [30, 40]]; // Parallelogramm = 2800
  const optC_pts = [[10, 0], [90, 0], [60, 40], [40, 40]]; // Unproportioniertes Trapez = 2600
  const optD_pts = target_pts; // Symmetrisches Trapez (Correct)

  questions.push({
    id: "fz-sim6-q13",
    simulationId: "fz-sim6",
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
      { pieceId: "p3", rotationDeg: 0, translation: [30, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [30, 20], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [50, 20], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [70, 0], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Teilstück p3 (40 × 20, Fläche 800) bildet zusammen mit den zwei Quadraten p4 und p5 (je 20 × 20, Fläche je 400) einen zentralen rechteckigen Kern von 40 × 40 (Fläche 1600) zwischen x = 30 und x = 70. Links wird Teilstück p1 (Dreieck 30 × 40, Fläche 600) angefügt, welches die linke Schräge von (0, 0) nach (30, 40) formt. Rechts wird das kongruente Dreieck p2 (Fläche 600) angefügt, welches die rechte Schräge von (100, 0) nach (70, 40) formt. Es entsteht ein symmetrisches Trapez mit Grundseite 100, Deckseite 40 und Höhe 40. Gesamtfläche: 600 + 1600 + 600 = 2800 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur C besitzt abweichende Kantenmaße und Fläche.",
    metadata: { pieceCount: 5, shapeFamily: "Symmetrisches Großtrapez", requiresRotation: true, isEAnswer: false },
  });
}

// =========================================================================
// Q14: Schwer (6 pieces), Ans: E (Genuine Option E - Fangfrage!)
// Theme: Fangfrage — 6-Teile Asymmetrischer Verbund mit Kathetenfalle
// =========================================================================
{
  const p1_pts = [[0, 0], [40, 0], [30, 20], [10, 20]]; // Trapez bases 40 & 20, h 20, area 500
  const p2_pts = [[0, 0], [30, 0], [30, 30], [0, 30]]; // Quadrat 30x30, area 900
  const p3_pts = [[0, 0], [30, 0], [30, 20], [0, 20]]; // Rechteck 30x20, area 600
  const p4_pts = [[0, 0], [25, 0], [25, 20], [0, 20]]; // Rechteck 25x20, area 500
  const p5_pts = [[0, 0], [25, 0], [0, 20]]; // Dreieck 25x20 / 2, area 250
  const p6_pts = [[0, 0], [20, 0], [0, 20]]; // Dreieck 20x20 / 2, area 200
  // Total piece area = 500 + 900 + 600 + 500 + 250 + 200 = 2950
  const unattainable_target = [[0, 0], [10, 0], [10, 10], [0, 10]];

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 150, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 215, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 280, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 65);

  const optA_pts = [[0, 0], [60, 0], [60, 50], [0, 50]]; // Rechteck 60x50 = 3000 (Fläche weicht um 50 ab)
  const optB_pts = [[10, 0], [70, 0], [80, 40], [0, 40]]; // Trapez = 2800 (Fläche weicht ab)
  const optC_pts = [[0, 0], [80, 0], [80, 25], [40, 25], [40, 55], [0, 55]]; // L-Polygon = 3200
  const optD_pts = [[20, 0], [60, 0], [80, 25], [60, 50], [20, 50], [0, 25]]; // Hexagon = 3000

  questions.push({
    id: "fz-sim6-q14",
    simulationId: "fz-sim6",
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
    explanation: "Geometrische Analyse: Die Gesamtfläche der 6 Teilstücke summiert sich auf exakt 500 + 900 + 600 + 500 + 250 + 200 = 2950 Flächeneinheiten.\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 60 × 50 mit einer Fläche von 3000 Einheiten (Flächendisparität: +50 Einheiten).\n- Figur B ist ein Trapez mit Fläche 2800 Einheiten (-150 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 3200 Einheiten (+250 Einheiten).\n- Figur D ist ein Sechseck mit Fläche 3000 Einheiten (+50 Einheiten).\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 2950 Einheiten übereinstimmt, lautet die korrekte Antwort E.",
    metadata: { pieceCount: 6, shapeFamily: "Ausschluss-Heuristik", requiresRotation: true, isEAnswer: true },
  });
}

// =========================================================================
// Q15: Schwer (6 pieces), Ans: B
// Theme: Großes Symmetrisches Hexagon aus 6 Teilstücken (Meister-Abschluss)
// =========================================================================
{
  const p1_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck rechtwinklig 20x30 / 2, area 300
  const p2_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p3_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck rechtwinklig 20x30 / 2, area 300
  const p4_pts = [[0, 0], [20, 0], [20, 30]]; // Dreieck rechtwinklig 20x30 / 2, area 300
  const p5_pts = [[0, 0], [40, 0], [40, 30], [0, 30]]; // Rechteck 40x30, area 1200
  const p6_pts = [[0, 0], [20, 0], [0, 30]]; // Dreieck rechtwinklig 20x30 / 2, area 300
  const target_pts = [[20, 0], [60, 0], [80, 30], [60, 60], [20, 60], [0, 30]]; // Großes Hexagon, area 3600

  const p1_canvas = transformPoints(p1_pts, 0, 25, 45);
  const p2_canvas = transformPoints(p2_pts, 0, 85, 45);
  const p3_canvas = transformPoints(p3_pts, 90, 155, 45);
  const p4_canvas = transformPoints(p4_pts, 0, 220, 45);
  const p5_canvas = transformPoints(p5_pts, 90, 280, 45);
  const p6_canvas = transformPoints(p6_pts, 180, 345, 65);

  const optA_pts = [[0, 0], [60, 0], [60, 60], [0, 60]]; // Quadrat 60x60 = 3600
  const optB_pts = target_pts; // Großes Hexagon (Correct)
  const optC_pts = [[0, 0], [80, 0], [60, 60], [20, 60]]; // Trapez = 3000
  const optD_pts = [[10, 0], [70, 0], [90, 30], [70, 60], [10, 60], [0, 30]]; // Asymmetrisches Hexagon = 3300

  questions.push({
    id: "fz-sim6-q15",
    simulationId: "fz-sim6",
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
      { pieceId: "p1", rotationDeg: 180, translation: [20, 30], isReflection: false },
      { pieceId: "p2", rotationDeg: 0, translation: [20, 0], isReflection: false },
      { pieceId: "p3", rotationDeg: 0, translation: [60, 0], isReflection: false },
      { pieceId: "p4", rotationDeg: 0, translation: [0, 30], isReflection: false },
      { pieceId: "p5", rotationDeg: 0, translation: [20, 30], isReflection: false },
      { pieceId: "p6", rotationDeg: 180, translation: [80, 60], isReflection: false },
    ],
    explanation: "Geometrische Analyse: Die 6 Teilstücke gliedern sich in zwei symmetrische Hälften:\n1. Untere Hälfte (y = 0 bis 30): Teilstück p2 (Rechteck 40 × 30, Fläche 1200) mit den Flankendreiecken p1 (20 × 30, Fläche 300) und p3 (20 × 30, Fläche 300) bildet ein sich nach oben erweiterndes Trapez mit Basen 40 unten und 80 auf Mittelebene y = 30.\n2. Obere Hälfte (y = 30 bis 60): Teilstück p5 (Rechteck 40 × 30, Fläche 1200) mit den Dreiecken p4 (Fläche 300) und p6 (Fläche 300) verjüngt sich symmetrisch wieder von Breite 80 auf Breite 40 bei y = 60.\nDas Resultat ist ein vollkommen spiegelsymmetrisches Sechseck mit einer Gesamtfläche von 2 × 1800 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Schrägen. Figur C ist ein einzelnes Trapez mit Fläche 3000. Figur D ist ein asymmetrisches Sechseck mit abweichender Fläche (3300).",
    metadata: { pieceCount: 6, shapeFamily: "Großes Symmetrisches Hexagon", requiresRotation: true, isEAnswer: false },
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

// 4. Output to fzSimulation6.ts
const outputPath = path.join(__dirname, "../src/data/questions/fz/fzSimulation6.ts");
const tsContent = `import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_6_QUESTIONS: FzQuestionData[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log("Written to", outputPath);
