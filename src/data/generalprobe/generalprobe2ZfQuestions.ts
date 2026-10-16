/**
 * MedAT KFF — Zahlenfolgen (ZF) — Generalprobe #2
 * Exactly 10 Deterministic, Calibrated Numerical Reasoning Questions
 * 
 * IDs: KFF-ZF-GP2-001 through KFF-ZF-GP2-010 (aliased to zf-sim2-q01 .. q10)
 * 
 * Specifications:
 * - 10 Questions, 15 Minutes (~90s / question)
 * - Basic arithmetic (+, -, *, / resulting in integers)
 * - Two missing target numbers (8th and 9th values)
 * - Exactly 5 options per question (A–D pairs + Option E "Keine der Antwortmöglichkeiten ist richtig")
 * - Unpredictable, balanced answer distribution: exactly 2 A, 2 B, 2 C, 2 D, 2 E
 * - Exactly one correct answer per question
 * - Difficulty distribution: 3 Leicht, 5 Mittel, 2 Schwer
 * - Step-by-step arithmetic derivation and exhaustive distractor analysis for all 10 questions
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { ZfQuestionData } from "../questions/zf/types";

export const RAW_GENERALPROBE_2_ZF_QUESTIONS: ZfQuestionData[] = [
  {
    id: "KFF-ZF-GP2-001",
    simulationId: "generalprobe-2",
    questionNumber: 1,
    subtest: "ZF",
    sequence: [68, 61, 54, 47, 40, 33, 26],
    options: {
      A: [19, 12],
      B: [19, 11],
      C: [18, 12],
      D: [20, 13],
      E: null,
    },
    correctAnswer: "A",
    expectedNextValues: [19, 12],
    rule: "-7 konstant (Arithmetische Folge / lineare Subtraktion)",
    ruleType: "arithmetic",
    difficulty: "Leicht",
    estimatedTime: 50,
    explanation:
      "Regel & mathematische Herleitung:\nKonstante Subtraktion von 7 bei jedem Folgeschritt:\n• 1. Zahl bis 2. Zahl: 68 - 7 = 61\n• 2. Zahl bis 3. Zahl: 61 - 7 = 54\n• 3. Zahl bis 4. Zahl: 54 - 7 = 47\n• 4. Zahl bis 5. Zahl: 47 - 7 = 40\n• 5. Zahl bis 6. Zahl: 40 - 7 = 33\n• 6. Zahl bis 7. Zahl: 33 - 7 = 26\n• 8. Zahl (gesucht): 26 - 7 = 19\n• 9. Zahl (gesucht): 19 - 7 = 12\n\nDas gesuchte Zahlenpaar lautet 19 / 12. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B (19 / 11) ist falsch, da bei der 9. Zahl fälschlicherweise 8 statt 7 abgezogen wurde (19 - 8 = 11).\n• Option C (18 / 12) ist falsch, da bei der 8. Zahl 8 statt 7 abgezogen wurde (26 - 8 = 18).\n• Option D (20 / 13) ist falsch, da bei beiden Schritten fälschlich mit der Schrittweite -6 gerechnet wurde (26 - 6 = 20, 20 - 7 = 13).\n• Option E ist falsch, da Option A das mathematisch exakte Zahlenpaar (19 / 12) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP2-002",
    simulationId: "generalprobe-2",
    questionNumber: 2,
    subtest: "ZF",
    sequence: [768, 384, 192, 96, 48, 24, 12],
    options: {
      A: [6, 2],
      B: [4, 2],
      C: [6, 3],
      D: [8, 4],
      E: null,
    },
    correctAnswer: "C",
    expectedNextValues: [6, 3],
    rule: "÷2 konstant (Geometrische Folge / fortlaufende Halbierung)",
    ruleType: "geometric",
    difficulty: "Leicht",
    estimatedTime: 55,
    explanation:
      "Regel & mathematische Herleitung:\nKonstante Division durch 2 bei jedem Folgeschritt:\n• 1. Zahl bis 2. Zahl: 768 ÷ 2 = 384\n• 2. Zahl bis 3. Zahl: 384 ÷ 2 = 192\n• 3. Zahl bis 4. Zahl: 192 ÷ 2 = 96\n• 4. Zahl bis 5. Zahl: 96 ÷ 2 = 48\n• 5. Zahl bis 6. Zahl: 48 ÷ 2 = 24\n• 6. Zahl bis 7. Zahl: 24 ÷ 2 = 12\n• 8. Zahl (gesucht): 12 ÷ 2 = 6\n• 9. Zahl (gesucht): 6 ÷ 2 = 3\n\nDas gesuchte Zahlenpaar lautet 6 / 3. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (6 / 2) ist falsch, da bei der 9. Zahl fehlerhaft durch 3 statt 2 geteilt wurde (6 ÷ 3 = 2).\n• Option B (4 / 2) ist falsch, da bereits die 8. Zahl fälschlich durch 3 geteilt wurde (12 ÷ 3 = 4).\n• Option D (8 / 4) ist falsch, da eine Subtraktion (-4) statt Division angenommen wurde (12 - 4 = 8, 8 - 4 = 4).\n• Option E ist falsch, da Option C die exakte Lösung (6 / 3) bietet.",
  },
  {
    id: "KFF-ZF-GP2-003",
    simulationId: "generalprobe-2",
    questionNumber: 3,
    subtest: "ZF",
    sequence: [3, 5, 9, 15, 23, 33, 45],
    options: {
      A: [57, 73],
      B: [59, 75],
      C: [59, 73],
      D: [61, 77],
      E: null,
    },
    correctAnswer: "B",
    expectedNextValues: [59, 75],
    rule: "Steigende gerade Differenzen (+2, +4, +6, +8, +10, +12, danach +14, +16)",
    ruleType: "increasing_differences",
    difficulty: "Leicht",
    estimatedTime: 60,
    explanation:
      "Regel & mathematische Herleitung:\nDie Additionsschrittweite wächst bei jedem Schritt um genau 2 an (Folge der geraden Zahlen):\n• 1. Zahl bis 2. Zahl: 3 + 2 = 5 (+2)\n• 2. Zahl bis 3. Zahl: 5 + 4 = 9 (+4)\n• 3. Zahl bis 4. Zahl: 9 + 6 = 15 (+6)\n• 4. Zahl bis 5. Zahl: 15 + 8 = 23 (+8)\n• 5. Zahl bis 6. Zahl: 23 + 10 = 33 (+10)\n• 6. Zahl bis 7. Zahl: 33 + 12 = 45 (+12)\n• 8. Zahl (gesucht): 45 + 14 = 59 (+14)\n• 9. Zahl (gesucht): 59 + 16 = 75 (+16)\n\nDas gesuchte Zahlenpaar lautet 59 / 75. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (57, 73) ist falsch, da die Schrittweite +12 fälschlicherweise beibehalten wurde (45 + 12 = 57, 57 + 16 = 73).\n• Option C (59, 73) ist falsch, da die 8. Zahl zwar korrekt berechnet wurde (45 + 14 = 59), für die 9. Zahl aber fälschlich erneut +14 statt +16 addiert wurde (59 + 14 = 73).\n• Option D (61, 77) ist falsch, da die Schrittweite voreilig direkt auf +16 erhöht wurde (45 + 16 = 61).\n• Option E ist falsch, da Option B die korrekte Lösung (59 / 75) enthält.",
  },
  {
    id: "KFF-ZF-GP2-004",
    simulationId: "generalprobe-2",
    questionNumber: 4,
    subtest: "ZF",
    sequence: [11, 17, 14, 20, 17, 23, 20],
    options: {
      A: [26, 20],
      B: [24, 21],
      C: [23, 26],
      D: [26, 23],
      E: null,
    },
    correctAnswer: "D",
    expectedNextValues: [26, 23],
    rule: "Alternierender Zweischritt (+6, danach -3)",
    ruleType: "alternating",
    difficulty: "Mittel",
    estimatedTime: 70,
    explanation:
      "Regel & mathematische Herleitung:\nAlternierender Zweischritt-Rhythmus (+6, danach -3):\n• 1. Zahl bis 2. Zahl: 11 + 6 = 17 (+6)\n• 2. Zahl bis 3. Zahl: 17 - 3 = 14 (-3)\n• 3. Zahl bis 4. Zahl: 14 + 6 = 20 (+6)\n• 4. Zahl bis 5. Zahl: 20 - 3 = 17 (-3)\n• 5. Zahl bis 6. Zahl: 17 + 6 = 23 (+6)\n• 6. Zahl bis 7. Zahl: 23 - 3 = 20 (-3)\n• 8. Zahl (gesucht): 20 + 6 = 26 (+6)\n• 9. Zahl (gesucht): 26 - 3 = 23 (-3)\n\nDas gesuchte Zahlenpaar lautet 26 / 23. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (26 / 20) ist falsch, da nach +6 fehlerhaft -6 statt -3 gerechnet wurde (26 - 6 = 20).\n• Option B (24 / 21) ist falsch, da ungenau mit +4 und -3 gerechnet wurde.\n• Option C (23 / 26) ist falsch, da die Operationen vertauscht wurden (erst -3 gerechnet, dann +6; Positionsfalle).\n• Option E ist falsch, da Option D die exakte Lösung (26 / 23) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP2-005",
    simulationId: "generalprobe-2",
    questionNumber: 5,
    subtest: "ZF",
    sequence: [95, 80, 67, 56, 47, 40, 35],
    options: {
      A: [33, 31],
      B: [32, 30],
      C: [31, 32],
      D: [30, 27],
      E: null,
    },
    correctAnswer: "E",
    expectedNextValues: [32, 31],
    rule: "Fallende ungerade Differenzen (-15, -13, -11, -9, -7, -5, danach -3, -1)",
    ruleType: "decreasing_differences",
    difficulty: "Mittel",
    estimatedTime: 75,
    explanation:
      "Regel & mathematische Herleitung:\nDie Subtraktionsschrittweite verringert sich schrittweise um 2 (Folge der ungeraden Zahlen rückwärts):\n• 1. Zahl bis 2. Zahl: 95 - 15 = 80 (-15)\n• 2. Zahl bis 3. Zahl: 80 - 13 = 67 (-13)\n• 3. Zahl bis 4. Zahl: 67 - 11 = 56 (-11)\n• 4. Zahl bis 5. Zahl: 56 - 9 = 47 (-9)\n• 5. Zahl bis 6. Zahl: 47 - 7 = 40 (-7)\n• 6. Zahl bis 7. Zahl: 40 - 5 = 35 (-5)\n• 8. Zahl (gesucht): 35 - 3 = 32 (-3)\n• 9. Zahl (gesucht): 32 - 1 = 31 (-1)\n\nDas mathematisch exakte Folgepaar lautet zwingend 32 / 31.\nDa keines der Angebote A bis D dieses korrekte Zahlenpaar enthält, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) korrekt.\n\nDistraktoren-Analyse:\n• Option A (33 / 31) ist falsch, da bei der 8. Zahl nur 2 statt 3 abgezogen wurde (35 - 2 = 33).\n• Option B (32 / 30) ist falsch, da die 8. Zahl zwar korrekt ist (35 - 3 = 32), für die 9. Zahl aber fälschlich -2 statt -1 gerechnet wurde (32 - 2 = 30).\n• Option C (31 / 32) ist falsch, da die Reihenfolge der gesuchten Zahlen vertauscht ist (typische MedAT-Positionsfalle).\n• Option D (30 / 27) ist falsch, da fälschlich die Differenz -5 wiederholt wurde (35 - 5 = 30, 30 - 3 = 27).\n• Option E ist korrekt, da das richtige Zahlenpaar (32 / 31) unter A–D nicht angeboten wird.",
  },
  {
    id: "KFF-ZF-GP2-006",
    simulationId: "generalprobe-2",
    questionNumber: 6,
    subtest: "ZF",
    sequence: [5, 10, 6, 12, 8, 16, 12],
    options: {
      A: [22, 18],
      B: [24, 18],
      C: [20, 24],
      D: [24, 20],
      E: null,
    },
    correctAnswer: "D",
    expectedNextValues: [24, 20],
    rule: "Alternierender Zweischritt (×2, danach -4)",
    ruleType: "alternating",
    difficulty: "Mittel",
    estimatedTime: 70,
    explanation:
      "Regel & mathematische Herleitung:\nAlternierender Rhythmus aus Verdopplung und Subtraktion (×2, danach -4):\n• 1. Zahl bis 2. Zahl: 5 × 2 = 10 (×2)\n• 2. Zahl bis 3. Zahl: 10 - 4 = 6 (-4)\n• 3. Zahl bis 4. Zahl: 6 × 2 = 12 (×2)\n• 4. Zahl bis 5. Zahl: 12 - 4 = 8 (-4)\n• 5. Zahl bis 6. Zahl: 8 × 2 = 16 (×2)\n• 6. Zahl bis 7. Zahl: 16 - 4 = 12 (-4)\n• 8. Zahl (gesucht): 12 × 2 = 24 (×2)\n• 9. Zahl (gesucht): 24 - 4 = 20 (-4)\n\nDas gesuchte Zahlenpaar lautet 24 / 20. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (22 / 18) ist falsch, da bei der 8. Zahl eine Addition (+10) statt Multiplikation (×2) durchgeführt wurde (12 + 10 = 22).\n• Option B (24 / 18) ist falsch, da bei der 9. Zahl fehlerhaft -6 statt -4 abgezogen wurde (24 - 6 = 18).\n• Option C (20 / 24) ist falsch, da die beiden Zahlen vertauscht wurden (Positionsfalle).\n• Option E ist falsch, da Option D die exakte Lösung (24 / 20) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP2-007",
    simulationId: "generalprobe-2",
    questionNumber: 7,
    subtest: "ZF",
    sequence: [2, 4, 6, 10, 16, 26, 42],
    options: {
      A: [68, 108],
      B: [68, 110],
      C: [66, 108],
      D: [70, 112],
      E: null,
    },
    correctAnswer: "B",
    expectedNextValues: [68, 110],
    rule: "Rekursive Fibonacci-Addition (a_n = a_{n-1} + a_{n-2})",
    ruleType: "recursive",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Regel & mathematische Herleitung:\nJedes Glied ab der 3. Position ist die Summe der beiden vorangehenden Zahlen (Fibonacci-Prinzip):\n• 1. + 2. Zahl: 2 + 4 = 6\n• 2. + 3. Zahl: 4 + 6 = 10\n• 3. + 4. Zahl: 6 + 10 = 16\n• 4. + 5. Zahl: 10 + 16 = 26\n• 5. + 6. Zahl: 16 + 26 = 42\n• 6. + 7. Zahl: 26 + 42 = 68 (8. Zahl gesucht)\n• 7. + 8. Zahl: 42 + 68 = 110 (9. Zahl gesucht)\n\nDas gesuchte Zahlenpaar lautet 68 / 110. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (68 / 108) ist falsch, da bei der Addition der 9. Zahl ein Rechenfehler unterlief (42 + 66 = 108 statt 42 + 68 = 110).\n• Option C (66 / 108) ist falsch, da bereits die 8. Zahl fehlerhaft berechnet wurde (24 + 42 = 66).\n• Option D (70 / 112) ist falsch, da durch Übertragungsfehler beidseitig zu hohe Werte errechnet wurden.\n• Option E ist falsch, da Option B die mathematisch exakte Lösung (68 / 110) liefert.",
  },
  {
    id: "KFF-ZF-GP2-008",
    simulationId: "generalprobe-2",
    questionNumber: 8,
    subtest: "ZF",
    sequence: [4, 3, 9, 6, 14, 12, 19],
    options: {
      A: [24, 23],
      B: [23, 24],
      C: [24, 24],
      D: [22, 24],
      E: null,
    },
    correctAnswer: "C",
    expectedNextValues: [24, 24],
    rule: "Zwei verschränkte Teilfolgen (ungerade: +5; gerade: ×2)",
    ruleType: "interleaved",
    difficulty: "Mittel",
    estimatedTime: 85,
    explanation:
      "Regel & mathematische Herleitung:\nZwei ineinander verschränkte Zahlenstränge:\n• Ungerade Positionen (1, 3, 5, 7): 4, 9, 14, 19 (konstante Addition von +5: 4 + 5 = 9, 9 + 5 = 14, 14 + 5 = 19)\n• Gerade Positionen (2, 4, 6): 3, 6, 12 (fortlaufende Verdopplung ×2: 3 × 2 = 6, 6 × 2 = 12)\n\nFortführung für die gesuchten Positionen:\n• 8. Zahl (gerade Position): Fortführung des geraden Strangs: 12 × 2 = 24\n• 9. Zahl (ungerade Position): Fortführung des ungeraden Strangs: 19 + 5 = 24\n\nDas gesuchte Zahlenpaar lautet in exakter Reihenfolge 24 / 24. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (24 / 23) ist falsch, da im ungeraden Strang fälschlicherweise nur +4 addiert wurde (19 + 4 = 23).\n• Option B (23 / 24) ist falsch, da bei der 8. Zahl ein Rechenfehler vorliegt und die Werte vertauscht sind.\n• Option D (22 / 24) ist falsch, da im geraden Strang fälschlich +10 statt ×2 gerechnet wurde (12 + 10 = 22).\n• Option E ist falsch, da Option C die exakte Lösung (24 / 24) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP2-009",
    simulationId: "generalprobe-2",
    questionNumber: 9,
    subtest: "ZF",
    sequence: [2, 5, 10, 11, 14, 28, 29],
    options: {
      A: [32, 64],
      B: [32, 35],
      C: [30, 60],
      D: [31, 62],
      E: null,
    },
    correctAnswer: "A",
    expectedNextValues: [32, 64],
    rule: "Wiederkehrender Dreierschritt-Zyklus (+3, danach ×2, danach +1)",
    ruleType: "mixed_basic_operations",
    difficulty: "Schwer",
    estimatedTime: 95,
    explanation:
      "Regel & mathematische Herleitung:\nWiederkehrender Dreierschritt-Operationszyklus:\n• Schritt 1: +3\n• Schritt 2: ×2\n• Schritt 3: +1\n\nÜberprüfung der Reihe:\n• 1. bis 2. Zahl (Schritt 1): 2 + 3 = 5\n• 2. bis 3. Zahl (Schritt 2): 5 × 2 = 10\n• 3. bis 4. Zahl (Schritt 3): 10 + 1 = 11\n• 4. bis 5. Zahl (Schritt 1): 11 + 3 = 14\n• 5. bis 6. Zahl (Schritt 2): 14 × 2 = 28\n• 6. bis 7. Zahl (Schritt 3): 28 + 1 = 29\n\nNun beginnt der Zyklus erneut mit Schritt 1 (+3) und Schritt 2 (×2):\n• 8. Zahl (gesucht, Schritt 1): 29 + 3 = 32\n• 9. Zahl (gesucht, Schritt 2): 32 × 2 = 64\n\nDas gesuchte Zahlenpaar lautet 32 / 64. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B (32 / 35) ist falsch, da im zweiten gesuchten Schritt fälschlicherweise erneut +3 statt ×2 gerechnet wurde (32 + 3 = 35).\n• Option C (30 / 60) ist falsch, da Schritt 1 als +1 missverstanden wurde (29 + 1 = 30).\n• Option D (31 / 62) ist falsch, da Schritt 1 als +2 missverstanden wurde (29 + 2 = 31).\n• Option E ist falsch, da Option A das mathematisch exakte Zahlenpaar (32 / 64) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP2-010",
    simulationId: "generalprobe-2",
    questionNumber: 10,
    subtest: "ZF",
    sequence: [81, 10, 27, 17, 9, 24, 3],
    options: {
      A: [1, 31],
      B: [31, 3],
      C: [30, 1],
      D: [28, 1],
      E: null,
    },
    correctAnswer: "E",
    expectedNextValues: [31, 1],
    rule: "Zwei verschränkte Teilfolgen (ungerade: ÷3; gerade: +7)",
    ruleType: "interleaved",
    difficulty: "Schwer",
    estimatedTime: 95,
    explanation:
      "Regel & mathematische Herleitung:\nZwei ineinander verschränkte Zahlenfolgen:\n• Ungerade Positionen (1, 3, 5, 7): 81, 27, 9, 3 (fortlaufende Division durch 3: ÷3: 81 ÷ 3 = 27, 27 ÷ 3 = 9, 9 ÷ 3 = 3)\n• Gerade Positionen (2, 4, 6): 10, 17, 24 (konstante Addition von +7: 10 + 7 = 17, 17 + 7 = 24)\n\nFortführung für die gesuchten Positionen:\n• 8. Zahl (gerade Position): 24 + 7 = 31\n• 9. Zahl (ungerade Position): 3 ÷ 3 = 1\n\nDas mathematisch exakte Folgepaar lautet in chronologischer Reihenfolge 31 / 1.\nDa Option A die vertauschte Reihenfolge 1 / 31 angibt und keine der Optionen B bis D das Paar 31 / 1 enthält, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) zwingend korrekt.\n\nDistraktoren-Analyse:\n• Option A (1 / 31) ist falsch, da die Reihenfolge der beiden Zahlen vertauscht ist (1 / 31 statt 31 / 1; typische MedAT-Positionsfalle).\n• Option B (31 / 3) ist falsch, da die ungerade Teilfolge nicht weiter dividiert wurde (3 beibehalten).\n• Option C (30 / 1) ist falsch, da bei der 8. Zahl ein Additionsfehler vorliegt (24 + 6 = 30 statt 24 + 7 = 31).\n• Option D (28 / 1) ist falsch, da bei der 8. Zahl nur +4 addiert wurde (24 + 4 = 28).\n• Option E ist korrekt, da das zutreffende Zahlenpaar 31 / 1 unter A–D nicht angeboten wird.",
  },
];

/**
 * Convert RAW_GENERALPROBE_2_ZF_QUESTIONS into StoredQuestion format for Generalprobe #2
 */
export const GENERALPROBE_2_ZF_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_ZF_QUESTIONS.map((zf, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");
  const seqStr = zf.sequence.join(" | ");

  const formatOption = (val: [number, number] | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine der Antwortmöglichkeiten ist richtig";
    }
    return `${val[0]} / ${val[1]}`;
  };

  return {
    id: `KFF-ZF-GP2-${numStr}`,
    legacyId: `zf-sim2-q${String(idx + 1).padStart(2, "0")}`,
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-num",
    chapterId: "kff-num-arith",
    topic: "Zahlenfolgen",
    concept: "Zahlenfolgen",
    difficulty: zf.difficulty,
    questionText: `Welche zwei Zahlen setzen die Reihe logisch fort?\n\n${seqStr} | ? | ?`,
    options: [
      formatOption(zf.options.A, "A"),
      formatOption(zf.options.B, "B"),
      formatOption(zf.options.C, "C"),
      formatOption(zf.options.D, "D"),
      formatOption(zf.options.E, "E"),
    ],
    correctAnswer: optionKeyToIndex(zf.correctAnswer),
    explanation: zf.explanation,
    tags: ["KFF", "Zahlenfolgen", zf.ruleType, "Generalprobe #2", `KFF-ZF-GP2-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
    zfData: {
      ...zf,
      id: `KFF-ZF-GP2-${numStr}`,
      legacyId: `zf-sim2-q${String(idx + 1).padStart(2, "0")}`,
    } as any,
  };
});
