/**
 * MedAT KFF — Zahlenfolgen (ZF) — Generalprobe #3
 * Exactly 10 Deterministic, Calibrated Numerical Reasoning Questions
 * 
 * IDs: KFF-ZF-GP3-001 through KFF-ZF-GP3-010 (aliased to zf-sim3-q01 .. q10)
 * 
 * Specifications:
 * - 10 Questions, 15 Minutes (~90s / question)
 * - Basic arithmetic (+, -, *, / resulting in integers)
 * - Two missing target numbers (8th and 9th values)
 * - Exactly 5 options per question (A–D pairs + Option E "Keine der Antwortmöglichkeiten ist richtig")
 * - Unpredictable, balanced answer distribution: exactly 2 A, 2 B, 2 C, 2 D, 2 E
 * - Max streak = 1 (no two consecutive questions share the same answer key)
 * - Exactly one correct answer per question
 * - Difficulty distribution: 3 Leicht, 5 Mittel, 2 Schwer
 * - Step-by-step arithmetic derivation and exhaustive distractor analysis for all 10 questions
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { ZfQuestionData } from "../questions/zf/types";

export const RAW_GENERALPROBE_3_ZF_QUESTIONS: ZfQuestionData[] = [
  {
    id: "KFF-ZF-GP3-001",
    simulationId: "generalprobe-3",
    questionNumber: 1,
    subtest: "ZF",
    sequence: [8, 17, 26, 35, 44, 53, 62],
    options: {
      A: [70, 79],
      B: [71, 79],
      C: [71, 80],
      D: [72, 81],
      E: null,
    },
    correctAnswer: "C",
    expectedNextValues: [71, 80],
    rule: "+9 konstant (Arithmetische Folge mit ungerader Schrittweite)",
    ruleType: "arithmetic",
    difficulty: "Leicht",
    estimatedTime: 50,
    explanation:
      "Regel & mathematische Herleitung:\nKonstante Addition von +9 bei jedem Folgeschritt:\n• 1. Zahl bis 2. Zahl: 8 + 9 = 17\n• 2. Zahl bis 3. Zahl: 17 + 9 = 26\n• 3. Zahl bis 4. Zahl: 26 + 9 = 35\n• 4. Zahl bis 5. Zahl: 35 + 9 = 44\n• 5. Zahl bis 6. Zahl: 44 + 9 = 53\n• 6. Zahl bis 7. Zahl: 53 + 9 = 62\n• 8. Zahl (gesucht): 62 + 9 = 71\n• 9. Zahl (gesucht): 71 + 9 = 80\n\nDas gesuchte Zahlenpaar lautet 71 / 80. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (70 / 79) ist falsch, da bei beiden Zahlen jeweils 1 zu wenig addiert wurde (+8 statt +9; 62 + 8 = 70, 70 + 9 = 79).\n• Option B (71 / 79) ist falsch, da die 8. Zahl zwar korrekt ist (62 + 9 = 71), bei der 9. Zahl aber fälschlicherweise nur +8 addiert wurde (71 + 8 = 79).\n• Option D (72 / 81) ist falsch, da die Schrittweite fälschlicherweise als +10 angenommen wurde (62 + 10 = 72, 72 + 9 = 81).\n• Option E ist falsch, da Option C das mathematisch exakte Zahlenpaar (71 / 80) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP3-002",
    simulationId: "generalprobe-3",
    questionNumber: 2,
    subtest: "ZF",
    sequence: [59, 53, 47, 41, 35, 29, 23],
    options: {
      A: [17, 12],
      B: [17, 11],
      C: [16, 10],
      D: [18, 12],
      E: null,
    },
    correctAnswer: "B",
    expectedNextValues: [17, 11],
    rule: "-6 konstant (Lineare Subtraktionsfolge)",
    ruleType: "arithmetic",
    difficulty: "Leicht",
    estimatedTime: 50,
    explanation:
      "Regel & mathematische Herleitung:\nKonstante Subtraktion von 6 bei jedem Folgeschritt:\n• 1. Zahl bis 2. Zahl: 59 - 6 = 53\n• 2. Zahl bis 3. Zahl: 53 - 6 = 47\n• 3. Zahl bis 4. Zahl: 47 - 6 = 41\n• 4. Zahl bis 5. Zahl: 41 - 6 = 35\n• 5. Zahl bis 6. Zahl: 35 - 6 = 29\n• 6. Zahl bis 7. Zahl: 29 - 6 = 23\n• 8. Zahl (gesucht): 23 - 6 = 17\n• 9. Zahl (gesucht): 17 - 6 = 11\n\nDas gesuchte Zahlenpaar lautet 17 / 11. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (17 / 12) ist falsch, da die 8. Zahl zwar korrekt ist, bei der 9. Zahl jedoch nur -5 statt -6 subtrahiert wurde (17 - 5 = 12).\n• Option C (16 / 10) ist falsch, da bei beiden Folgeschritten fälschlicherweise -7 abgezogen wurde (23 - 7 = 16, 16 - 6 = 10).\n• Option D (18 / 12) ist falsch, da durchgängig mit der falschen Schrittweite -5 gerechnet wurde (23 - 5 = 18, 18 - 6 = 12).\n• Option E ist falsch, da Option B das exakte Zahlenpaar (17 / 11) enthält.",
  },
  {
    id: "KFF-ZF-GP3-003",
    simulationId: "generalprobe-3",
    questionNumber: 3,
    subtest: "ZF",
    sequence: [4, 7, 13, 22, 34, 49, 67],
    options: {
      A: [85, 106],
      B: [88, 109],
      C: [87, 111],
      D: [89, 115],
      E: null,
    },
    correctAnswer: "E",
    expectedNextValues: [88, 112],
    rule: "Steigende Dreier-Differenzen (+3, +6, +9, +12, +15, +18, danach +21, +24)",
    ruleType: "increasing_differences",
    difficulty: "Leicht",
    estimatedTime: 60,
    explanation:
      "Regel & mathematische Herleitung:\nDie Additionsschrittweite wächst bei jedem Schritt um genau +3 an (Vielfache von 3):\n• 1. Zahl bis 2. Zahl: 4 + 3 = 7 (+3)\n• 2. Zahl bis 3. Zahl: 7 + 6 = 13 (+6)\n• 3. Zahl bis 4. Zahl: 13 + 9 = 22 (+9)\n• 4. Zahl bis 5. Zahl: 22 + 12 = 34 (+12)\n• 5. Zahl bis 6. Zahl: 34 + 15 = 49 (+15)\n• 6. Zahl bis 7. Zahl: 49 + 18 = 67 (+18)\n• 8. Zahl (gesucht): 67 + 21 = 88 (+21)\n• 9. Zahl (gesucht): 88 + 24 = 112 (+24)\n\nDie mathematisch zwingenden Folgezahlen lauten 88 / 112.\nDa keines der Angebote A bis D dieses Zahlenpaar bereitstellt, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) korrekt.\n\nDistraktoren-Analyse:\n• Option A (85 / 106) ist falsch, da die Schrittweite +18 fälschlicherweise beibehalten wurde (67 + 18 = 85, 85 + 21 = 106).\n• Option B (88 / 109) ist falsch, da die 8. Zahl zwar korrekt ist (67 + 21 = 88), für die 9. Zahl aber fälschlicherweise erneut +21 statt +24 addiert wurde (88 + 21 = 109).\n• Option C (87 / 111) ist falsch, da bei der 8. Zahl ein Additionsfehler vorliegt (67 + 20 = 87).\n• Option D (89 / 115) ist falsch, da die Schrittweiten voreilig auf +22 und +26 vergrößert wurden (67 + 22 = 89, 89 + 26 = 115).\n• Option E ist korrekt, da das zutreffende Zahlenpaar 88 / 112 unter A–D nicht angeboten wird.",
  },
  {
    id: "KFF-ZF-GP3-004",
    simulationId: "generalprobe-3",
    questionNumber: 4,
    subtest: "ZF",
    sequence: [6, 12, 9, 18, 15, 30, 27],
    options: {
      A: [54, 51],
      B: [51, 54],
      C: [54, 108],
      D: [52, 49],
      E: null,
    },
    correctAnswer: "A",
    expectedNextValues: [54, 51],
    rule: "Alternierender Zweischritt (×2, danach -3)",
    ruleType: "alternating",
    difficulty: "Mittel",
    estimatedTime: 70,
    explanation:
      "Regel & mathematische Herleitung:\nAlternierender Zweischritt-Rechenrhythmus (Verdopplung ×2, danach Subtraktion -3):\n• 1. Zahl bis 2. Zahl: 6 × 2 = 12 (×2)\n• 2. Zahl bis 3. Zahl: 12 - 3 = 9 (-3)\n• 3. Zahl bis 4. Zahl: 9 × 2 = 18 (×2)\n• 4. Zahl bis 5. Zahl: 18 - 3 = 15 (-3)\n• 5. Zahl bis 6. Zahl: 15 × 2 = 30 (×2)\n• 6. Zahl bis 7. Zahl: 30 - 3 = 27 (-3)\n• 8. Zahl (gesucht): 27 × 2 = 54 (×2)\n• 9. Zahl (gesucht): 54 - 3 = 51 (-3)\n\nDas gesuchte Zahlenpaar lautet 54 / 51. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B (51 / 54) ist falsch, da die Reihenfolge der Rechenoperationen vertauscht wurde (-3 vor ×2; 27 - 3 = 24 bzw. unzulässige Umkehrung).\n• Option C (54 / 108) ist falsch, da fälschlicherweise zweimal hintereinander verdoppelt wurde (27 × 2 = 54, 54 × 2 = 108).\n• Option D (52 / 49) ist falsch, da bei der Verdopplung ein Rechenfehler von 2 unterlief (27 × 2 - 2 = 52, 52 - 3 = 49).\n• Option E ist falsch, da Option A die exakte Lösung (54 / 51) enthält.",
  },
  {
    id: "KFF-ZF-GP3-005",
    simulationId: "generalprobe-3",
    questionNumber: 5,
    subtest: "ZF",
    sequence: [92, 75, 60, 47, 36, 27, 20],
    options: {
      A: [13, 10],
      B: [15, 10],
      C: [16, 13],
      D: [15, 12],
      E: null,
    },
    correctAnswer: "D",
    expectedNextValues: [15, 12],
    rule: "Fallende Differenzen ungerader Zahlen (-17, -15, -13, -11, -9, -7, danach -5, -3)",
    ruleType: "decreasing_differences",
    difficulty: "Mittel",
    estimatedTime: 75,
    explanation:
      "Regel & mathematische Herleitung:\nDie Subtraktionsschrittweite verringert sich bei jedem Schritt um genau 2 (abnehmende ungerade Zahlen):\n• 1. Zahl bis 2. Zahl: 92 - 17 = 75 (-17)\n• 2. Zahl bis 3. Zahl: 75 - 15 = 60 (-15)\n• 3. Zahl bis 4. Zahl: 60 - 13 = 47 (-13)\n• 4. Zahl bis 5. Zahl: 47 - 11 = 36 (-11)\n• 5. Zahl bis 6. Zahl: 36 - 9 = 27 (-9)\n• 6. Zahl bis 7. Zahl: 27 - 7 = 20 (-7)\n• 8. Zahl (gesucht): 20 - 5 = 15 (-5)\n• 9. Zahl (gesucht): 15 - 3 = 12 (-3)\n\nDas gesuchte Zahlenpaar lautet 15 / 12. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (13 / 10) ist falsch, da bei der 8. Zahl fälschlicherweise erneut -7 statt -5 subtrahiert wurde (20 - 7 = 13, 13 - 3 = 10).\n• Option B (15 / 10) ist falsch, da die 8. Zahl zwar korrekt ist (20 - 5 = 15), für die 9. Zahl aber fälschlicherweise nochmals -5 statt -3 abgezogen wurde (15 - 5 = 10).\n• Option C (16 / 13) ist falsch, da die Schrittweite -4 statt -5 verwendet wurde (20 - 4 = 16, 16 - 3 = 13).\n• Option E ist falsch, da Option D die exakte Lösung (15 / 12) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP3-006",
    simulationId: "generalprobe-3",
    questionNumber: 6,
    subtest: "ZF",
    sequence: [14, 22, 17, 25, 20, 28, 23],
    options: {
      A: [26, 31],
      B: [31, 26],
      C: [31, 25],
      D: [30, 25],
      E: null,
    },
    correctAnswer: "B",
    expectedNextValues: [31, 26],
    rule: "Alternierender Zweischritt (+8, danach -5)",
    ruleType: "alternating",
    difficulty: "Mittel",
    estimatedTime: 70,
    explanation:
      "Regel & mathematische Herleitung:\nAlternierender Rechenrhythmus (+8, danach -5):\n• 1. Zahl bis 2. Zahl: 14 + 8 = 22 (+8)\n• 2. Zahl bis 3. Zahl: 22 - 5 = 17 (-5)\n• 3. Zahl bis 4. Zahl: 17 + 8 = 25 (+8)\n• 4. Zahl bis 5. Zahl: 25 - 5 = 20 (-5)\n• 5. Zahl bis 6. Zahl: 20 + 8 = 28 (+8)\n• 6. Zahl bis 7. Zahl: 28 - 5 = 23 (-5)\n• 8. Zahl (gesucht): 23 + 8 = 31 (+8)\n• 9. Zahl (gesucht): 31 - 5 = 26 (-5)\n\nDas gesuchte Zahlenpaar lautet 31 / 26. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (26 / 31) ist falsch, da die Reihenfolge der beiden Zahlen vertauscht ist (typische MedAT-Positionsfalle).\n• Option C (31 / 25) ist falsch, da die 8. Zahl zwar korrekt ist, bei der 9. Zahl aber -6 statt -5 gerechnet wurde (31 - 6 = 25).\n• Option D (30 / 25) ist falsch, da bei der 8. Zahl nur +7 gerechnet wurde (23 + 7 = 30, 30 - 5 = 25).\n• Option E ist falsch, da Option B die zutreffende Lösung (31 / 26) enthält.",
  },
  {
    id: "KFF-ZF-GP3-007",
    simulationId: "generalprobe-3",
    questionNumber: 7,
    subtest: "ZF",
    sequence: [1, 4, 5, 9, 14, 23, 37],
    options: {
      A: [60, 97],
      B: [60, 96],
      C: [59, 96],
      D: [61, 98],
      E: null,
    },
    correctAnswer: "A",
    expectedNextValues: [60, 97],
    rule: "Rekursive Summenfolge (Fibonacci-Addition mit Startwerten 1 und 4: a_n = a_{n-1} + a_{n-2})",
    ruleType: "recursive",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Regel & mathematische Herleitung:\nJedes Glied ab der 3. Position ist die exakte Summe der beiden unmittelbar vorangehenden Glieder (a_n = a_{n-1} + a_{n-2}):\n• 1. und 2. Zahl: 1 + 4 = 5 (3. Zahl)\n• 2. und 3. Zahl: 4 + 5 = 9 (4. Zahl)\n• 3. und 4. Zahl: 5 + 9 = 14 (5. Zahl)\n• 4. und 5. Zahl: 9 + 14 = 23 (6. Zahl)\n• 5. und 6. Zahl: 14 + 23 = 37 (7. Zahl)\n• 6. und 7. Zahl (gesucht): 23 + 37 = 60 (8. Zahl)\n• 7. und 8. Zahl (gesucht): 37 + 60 = 97 (9. Zahl)\n\nDas gesuchte Zahlenpaar lautet 60 / 97. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B (60 / 96) ist falsch, da die 8. Zahl zwar korrekt ist, bei der Addition der 9. Zahl jedoch ein Flüchtigkeitsfehler von 1 unterlief (37 + 59 = 96).\n• Option C (59 / 96) ist falsch, da bereits bei der 8. Zahl falsch addiert wurde (23 + 36 = 59, 37 + 59 = 96).\n• Option D (61 / 98) ist falsch, da bei beiden Additionen jeweils 1 zu viel addiert wurde (Rechenungenauigkeit).\n• Option E ist falsch, da Option A das mathematisch exakte Paar (60 / 97) enthält.",
  },
  {
    id: "KFF-ZF-GP3-008",
    simulationId: "generalprobe-3",
    questionNumber: 8,
    subtest: "ZF",
    sequence: [6, 5, 14, 10, 22, 20, 30],
    options: {
      A: [38, 40],
      B: [40, 36],
      C: [30, 38],
      D: [40, 40],
      E: null,
    },
    correctAnswer: "E",
    expectedNextValues: [40, 38],
    rule: "Zwei verschränkte Teilfolgen (ungerade Positionen: +8; gerade Positionen: ×2)",
    ruleType: "interleaved",
    difficulty: "Mittel",
    estimatedTime: 85,
    explanation:
      "Regel & mathematische Herleitung:\nZwei ineinander verschränkte Zahlenfolgen:\n• Ungerade Positionen (1, 3, 5, 7): 6, 14, 22, 30 (konstante Addition von +8: 6 + 8 = 14, 14 + 8 = 22, 22 + 8 = 30)\n• Gerade Positionen (2, 4, 6): 5, 10, 20 (fortlaufende Verdopplung ×2: 5 × 2 = 10, 10 × 2 = 20)\n\nFortführung für die gesuchten Positionen:\n• 8. Zahl (gerade Position 4): 20 × 2 = 40\n• 9. Zahl (ungerade Position 5): 30 + 8 = 38\n\nDas mathematisch exakte Folgepaar lautet in chronologischer Reihenfolge 40 / 38.\nDa Option A die vertauschte Reihenfolge 38 / 40 angibt und keine der Optionen B bis D das Paar 40 / 38 enthält, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) zwingend korrekt.\n\nDistraktoren-Analyse:\n• Option A (38 / 40) ist falsch, da die Reihenfolge der beiden Zahlen vertauscht ist (38 / 40 statt 40 / 38; klassische MedAT-Positionsfalle).\n• Option B (40 / 36) ist falsch, da die 8. Zahl zwar korrekt ist, bei der ungeraden Teilfolge aber fälschlicherweise nur +6 statt +8 gerechnet wurde (30 + 6 = 36).\n• Option C (30 / 38) ist falsch, da für die gerade Teilfolge fälschlich eine lineare Fortsetzung (+10) angenommen wurde (20 + 10 = 30).\n• Option D (40 / 40) ist falsch, da die 8. Zahl verdoppelt und die 9. Zahl fälschlich an die 8. Zahl angeglichen wurde.\n• Option E ist korrekt, da das zutreffende Zahlenpaar 40 / 38 unter A–D nicht angeboten wird.",
  },
  {
    id: "KFF-ZF-GP3-009",
    simulationId: "generalprobe-3",
    questionNumber: 9,
    subtest: "ZF",
    sequence: [3, 8, 16, 13, 18, 36, 33],
    options: {
      A: [38, 73],
      B: [35, 70],
      C: [38, 76],
      D: [76, 73],
      E: null,
    },
    correctAnswer: "C",
    expectedNextValues: [38, 76],
    rule: "Wiederkehrender Dreierschritt-Zyklus (+5, danach ×2, danach -3)",
    ruleType: "mixed_basic_operations",
    difficulty: "Schwer",
    estimatedTime: 90,
    explanation:
      "Regel & mathematische Herleitung:\nWiederkehrender Dreierschritt-Zyklus (+5, ×2, -3):\n• Schritt 1 (+5): 3 + 5 = 8\n• Schritt 2 (×2): 8 × 2 = 16\n• Schritt 3 (-3): 16 - 3 = 13\n• Schritt 1 (+5): 13 + 5 = 18\n• Schritt 2 (×2): 18 × 2 = 36\n• Schritt 3 (-3): 36 - 3 = 33\n• 8. Zahl (gesucht, Schritt 1): 33 + 5 = 38 (+5)\n• 9. Zahl (gesucht, Schritt 2): 38 × 2 = 76 (×2)\n\nDas gesuchte Zahlenpaar lautet 38 / 76. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (38 / 73) ist falsch, da die 8. Zahl zwar korrekt ist (33 + 5 = 38), bei der 9. Zahl jedoch fälschlich Schritt 3 (-3 bzw. nur Addition von 35) ausgeführt wurde (38 + 35 = 73).\n• Option B (35 / 70) ist falsch, da bei der 8. Zahl fälschlich nur +2 statt +5 gerechnet wurde (33 + 2 = 35, 35 × 2 = 70).\n• Option D (76 / 73) ist falsch, da Schritt 1 übersprungen und sofort multipliziert wurde (Reihenfolgefehler).\n• Option E ist falsch, da Option C die exakte Lösung (38 / 76) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP3-010",
    simulationId: "generalprobe-3",
    questionNumber: 10,
    subtest: "ZF",
    sequence: [64, 7, 32, 20, 16, 33, 8],
    options: {
      A: [4, 46],
      B: [46, 2],
      C: [45, 4],
      D: [46, 4],
      E: null,
    },
    correctAnswer: "D",
    expectedNextValues: [46, 4],
    rule: "Zwei verschränkte Teilfolgen (ungerade Positionen: ÷2; gerade Positionen: +13)",
    ruleType: "interleaved",
    difficulty: "Schwer",
    estimatedTime: 95,
    explanation:
      "Regel & mathematische Herleitung:\nZwei ineinander verschränkte Zahlenfolgen:\n• Ungerade Positionen (1, 3, 5, 7): 64, 32, 16, 8 (fortlaufende Division durch 2: ÷2: 64 ÷ 2 = 32, 32 ÷ 2 = 16, 16 ÷ 2 = 8)\n• Gerade Positionen (2, 4, 6): 7, 20, 33 (konstante Addition von +13: 7 + 13 = 20, 20 + 13 = 33)\n\nFortführung für die gesuchten Positionen:\n• 8. Zahl (gerade Position 4): 33 + 13 = 46\n• 9. Zahl (ungerade Position 5): 8 ÷ 2 = 4\n\nDas gesuchte Zahlenpaar lautet in chronologischer Reihenfolge 46 / 4. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (4 / 46) ist falsch, da die Reihenfolge der beiden Zahlen vertauscht ist (9. Zahl vor 8. Zahl angegeben; typische MedAT-Falle).\n• Option B (46 / 2) ist falsch, da die 8. Zahl zwar korrekt ist (33 + 13 = 46), bei der 9. Zahl jedoch fälschlicherweise durch 4 statt 2 geteilt wurde (8 ÷ 4 = 2).\n• Option C (45 / 4) ist falsch, da bei der 8. Zahl ein Additionsfehler vorliegt (33 + 12 = 45 statt 33 + 13 = 46).\n• Option E ist falsch, da Option D die exakte Lösung (46 / 4) bietet.",
  },
];

/**
 * Convert RAW_GENERALPROBE_3_ZF_QUESTIONS into StoredQuestion format for Generalprobe #3
 */
export const GENERALPROBE_3_ZF_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_ZF_QUESTIONS.map((zf, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");
  const seqStr = zf.sequence.join(" | ");

  const formatOption = (val: [number, number] | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine der Antwortmöglichkeiten ist richtig";
    }
    return `${val[0]} / ${val[1]}`;
  };

  return {
    id: `KFF-ZF-GP3-${numStr}`,
    legacyId: `zf-sim3-q${String(idx + 1).padStart(2, "0")}`,
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
    tags: ["KFF", "Zahlenfolgen", zf.ruleType, "Generalprobe #3", `KFF-ZF-GP3-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
    zfData: {
      ...zf,
      id: `KFF-ZF-GP3-${numStr}`,
      legacyId: `zf-sim3-q${String(idx + 1).padStart(2, "0")}`,
    } as any,
  };
});
