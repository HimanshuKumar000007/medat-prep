/**
 * MedAT KFF — Zahlenfolgen (ZF) — Generalprobe #4
 * Exactly 10 Deterministic, Calibrated Numerical Reasoning Questions
 * 
 * IDs: KFF-ZF-GP4-001 through KFF-ZF-GP4-010 (aliased to zf-sim4-q01 .. q10)
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

export const RAW_GENERALPROBE_4_ZF_QUESTIONS: ZfQuestionData[] = [
  {
    id: "KFF-ZF-GP4-001",
    simulationId: "generalprobe-4",
    questionNumber: 1,
    subtest: "ZF",
    sequence: [7, 18, 29, 40, 51, 62, 73],
    options: {
      A: [83, 94],
      B: [84, 95],
      C: [84, 94],
      D: [85, 96],
      E: null,
    },
    correctAnswer: "B",
    expectedNextValues: [84, 95],
    rule: "+11 konstant (Lineare arithmetische Folge mit zweistelliger Primzahl)",
    ruleType: "arithmetic",
    difficulty: "Leicht",
    estimatedTime: 50,
    explanation:
      "Regel & mathematische Herleitung:\nKonstante Addition von +11 bei jedem Folgeschritt:\n• 1. Zahl bis 2. Zahl: 7 + 11 = 18\n• 2. Zahl bis 3. Zahl: 18 + 11 = 29\n• 3. Zahl bis 4. Zahl: 29 + 11 = 40\n• 4. Zahl bis 5. Zahl: 40 + 11 = 51\n• 5. Zahl bis 6. Zahl: 51 + 11 = 62\n• 6. Zahl bis 7. Zahl: 62 + 11 = 73\n• 8. Zahl (gesucht): 73 + 11 = 84\n• 9. Zahl (gesucht): 84 + 11 = 95\n\nDas gesuchte Zahlenpaar lautet 84 / 95. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (83 / 94) ist falsch, da bei beiden Zahlen fälschlicherweise nur +10 statt +11 addiert wurde (73 + 10 = 83, 83 + 11 = 94).\n• Option C (84 / 94) ist falsch, da die 8. Zahl zwar korrekt ist (73 + 11 = 84), bei der 9. Zahl aber nur +10 addiert wurde (84 + 10 = 94).\n• Option D (85 / 96) ist falsch, da mit der falschen Schrittweite +12 gerechnet wurde (73 + 12 = 85, 85 + 11 = 96).\n• Option E ist falsch, da Option B das exakte Zahlenpaar (84 / 95) enthält.",
  },
  {
    id: "KFF-ZF-GP4-002",
    simulationId: "generalprobe-4",
    questionNumber: 2,
    subtest: "ZF",
    sequence: [83, 75, 67, 59, 51, 43, 35],
    options: {
      A: [28, 20],
      B: [27, 20],
      C: [26, 18],
      D: [27, 19],
      E: null,
    },
    correctAnswer: "D",
    expectedNextValues: [27, 19],
    rule: "-8 konstant (Lineare Subtraktionsfolge)",
    ruleType: "arithmetic",
    difficulty: "Leicht",
    estimatedTime: 50,
    explanation:
      "Regel & mathematische Herleitung:\nKonstante Subtraktion von 8 bei jedem Folgeschritt:\n• 1. Zahl bis 2. Zahl: 83 - 8 = 75\n• 2. Zahl bis 3. Zahl: 75 - 8 = 67\n• 3. Zahl bis 4. Zahl: 67 - 8 = 59\n• 4. Zahl bis 5. Zahl: 59 - 8 = 51\n• 5. Zahl bis 6. Zahl: 51 - 8 = 43\n• 6. Zahl bis 7. Zahl: 43 - 8 = 35\n• 8. Zahl (gesucht): 35 - 8 = 27\n• 9. Zahl (gesucht): 27 - 8 = 19\n\nDas gesuchte Zahlenpaar lautet 27 / 19. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (28 / 20) ist falsch, da durchgängig mit der falschen Schrittweite -7 gerechnet wurde (35 - 7 = 28, 28 - 8 = 20).\n• Option B (27 / 20) ist falsch, da zwar die 8. Zahl korrekt ist (35 - 8 = 27), bei der 9. Zahl aber nur -7 abgezogen wurde (27 - 7 = 20).\n• Option C (26 / 18) ist falsch, da fälschlicherweise -9 subtrahiert wurde (35 - 9 = 26, 26 - 8 = 18).\n• Option E ist falsch, da Option D das mathematisch exakte Zahlenpaar (27 / 19) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP4-003",
    simulationId: "generalprobe-4",
    questionNumber: 3,
    subtest: "ZF",
    sequence: [5, 9, 17, 29, 45, 65, 89],
    options: {
      A: [113, 141],
      B: [117, 145],
      C: [116, 148],
      D: [118, 150],
      E: null,
    },
    correctAnswer: "E",
    expectedNextValues: [117, 149],
    rule: "Steigende Vierer-Differenzen (+4, +8, +12, +16, +20, +24, danach +28, +32)",
    ruleType: "increasing_differences",
    difficulty: "Leicht",
    estimatedTime: 60,
    explanation:
      "Regel & mathematische Herleitung:\nDie Additionsschrittweite wächst bei jedem Schritt um genau +4 an (Vielfache von 4):\n• 1. Zahl bis 2. Zahl: 5 + 4 = 9 (+4)\n• 2. Zahl bis 3. Zahl: 9 + 8 = 17 (+8)\n• 3. Zahl bis 4. Zahl: 17 + 12 = 29 (+12)\n• 4. Zahl bis 5. Zahl: 29 + 16 = 45 (+16)\n• 5. Zahl bis 6. Zahl: 45 + 20 = 65 (+20)\n• 6. Zahl bis 7. Zahl: 65 + 24 = 89 (+24)\n• 8. Zahl (gesucht): 89 + 28 = 117 (+28)\n• 9. Zahl (gesucht): 117 + 32 = 149 (+32)\n\nDie mathematisch zwingenden Folgezahlen lauten 117 / 149.\nDa keines der Angebote A bis D dieses Zahlenpaar bereitstellt, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) korrekt.\n\nDistraktoren-Analyse:\n• Option A (113 / 141) ist falsch, da die Schrittweite +24 fälschlicherweise beibehalten wurde (89 + 24 = 113, 113 + 28 = 141).\n• Option B (117 / 145) ist falsch, da die 8. Zahl zwar korrekt ist (89 + 28 = 117), bei der 9. Zahl jedoch fälschlicherweise erneut +28 statt +32 addiert wurde (117 + 28 = 145).\n• Option C (116 / 148) ist falsch, da bei der 8. Zahl ein Rechenfehler vorliegt (89 + 27 = 116).\n• Option D (118 / 150) ist falsch, da bei beiden Zahlen jeweils 1 zu viel addiert wurde (89 + 29 = 118, 118 + 32 = 150).\n• Option E ist korrekt, da das zutreffende Zahlenpaar 117 / 149 unter A–D nicht angeboten wird.",
  },
  {
    id: "KFF-ZF-GP4-004",
    simulationId: "generalprobe-4",
    questionNumber: 4,
    subtest: "ZF",
    sequence: [8, 16, 11, 22, 17, 34, 29],
    options: {
      A: [58, 53],
      B: [53, 58],
      C: [58, 116],
      D: [56, 51],
      E: null,
    },
    correctAnswer: "A",
    expectedNextValues: [58, 53],
    rule: "Alternierender Zweischritt (×2, danach -5)",
    ruleType: "alternating",
    difficulty: "Mittel",
    estimatedTime: 70,
    explanation:
      "Regel & mathematische Herleitung:\nAlternierender Rhythmus aus Verdopplung und konstanter Subtraktion von 5:\n• 1. Zahl bis 2. Zahl: 8 × 2 = 16\n• 2. Zahl bis 3. Zahl: 16 - 5 = 11\n• 3. Zahl bis 4. Zahl: 11 × 2 = 22\n• 4. Zahl bis 5. Zahl: 22 - 5 = 17\n• 5. Zahl bis 6. Zahl: 17 × 2 = 34\n• 6. Zahl bis 7. Zahl: 34 - 5 = 29\n• 8. Zahl (gesucht): 29 × 2 = 58\n• 9. Zahl (gesucht): 58 - 5 = 53\n\nDas gesuchte Zahlenpaar lautet 58 / 53. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B (53 / 58) ist falsch, da die Reihenfolge der gesuchten Zahlen vertauscht wurde (9. Zahl vor 8. Zahl; klassische Reihenfolge-Falle).\n• Option C (58 / 116) ist falsch, da nach der Verdopplung fälschlicherweise erneut verdoppelt statt 5 subtrahiert wurde (58 × 2 = 116).\n• Option D (56 / 51) ist falsch, da bei der Multiplikation ein Rechenfehler unterlief (28 × 2 = 56 statt 29 × 2 = 58).\n• Option E ist falsch, da Option A die exakte Lösung (58 / 53) bietet.",
  },
  {
    id: "KFF-ZF-GP4-005",
    simulationId: "generalprobe-4",
    questionNumber: 5,
    subtest: "ZF",
    sequence: [110, 92, 76, 62, 50, 40, 32],
    options: {
      A: [24, 18],
      B: [26, 20],
      C: [26, 22],
      D: [25, 21],
      E: null,
    },
    correctAnswer: "C",
    expectedNextValues: [26, 22],
    rule: "Fallende Differenzen gerader Zahlen (-18, -16, -14, -12, -10, -8, danach -6, -4)",
    ruleType: "decreasing_differences",
    difficulty: "Mittel",
    estimatedTime: 75,
    explanation:
      "Regel & mathematische Herleitung:\nDie Subtraktionsschrittweite verringert sich bei jedem Schritt um genau 2:\n• 1. Zahl bis 2. Zahl: 110 - 18 = 92 (-18)\n• 2. Zahl bis 3. Zahl: 92 - 16 = 76 (-16)\n• 3. Zahl bis 4. Zahl: 76 - 14 = 62 (-14)\n• 4. Zahl bis 5. Zahl: 62 - 12 = 50 (-12)\n• 5. Zahl bis 6. Zahl: 50 - 10 = 40 (-10)\n• 6. Zahl bis 7. Zahl: 40 - 8 = 32 (-8)\n• 8. Zahl (gesucht): 32 - 6 = 26 (-6)\n• 9. Zahl (gesucht): 26 - 4 = 22 (-4)\n\nDas gesuchte Zahlenpaar lautet 26 / 22. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (24 / 18) ist falsch, da die Schrittweite -8 fälschlicherweise beibehalten wurde (32 - 8 = 24, 24 - 6 = 18).\n• Option B (26 / 20) ist falsch, da die 8. Zahl zwar korrekt ist (32 - 6 = 26), für die 9. Zahl aber erneut -6 statt -4 abgezogen wurde (26 - 6 = 20).\n• Option D (25 / 21) ist falsch, da ein Rechenfehler bei der Subtraktion vorliegt (32 - 7 = 25).\n• Option E ist falsch, da Option C das mathematisch exakte Zahlenpaar (26 / 22) bereitstellt.",
  },
  {
    id: "KFF-ZF-GP4-006",
    simulationId: "generalprobe-4",
    questionNumber: 6,
    subtest: "ZF",
    sequence: [15, 25, 22, 32, 29, 39, 36],
    options: {
      A: [45, 42],
      B: [43, 46],
      C: [46, 36],
      D: [46, 43],
      E: null,
    },
    correctAnswer: "D",
    expectedNextValues: [46, 43],
    rule: "Alternierender Zweischritt (+10, danach -3)",
    ruleType: "alternating",
    difficulty: "Mittel",
    estimatedTime: 70,
    explanation:
      "Regel & mathematische Herleitung:\nAlternierender Rhythmus aus Addition von 10 und Subtraktion von 3:\n• 1. Zahl bis 2. Zahl: 15 + 10 = 25\n• 2. Zahl bis 3. Zahl: 25 - 3 = 22\n• 3. Zahl bis 4. Zahl: 22 + 10 = 32\n• 4. Zahl bis 5. Zahl: 32 - 3 = 29\n• 5. Zahl bis 6. Zahl: 29 + 10 = 39\n• 6. Zahl bis 7. Zahl: 39 - 3 = 36\n• 8. Zahl (gesucht): 36 + 10 = 46\n• 9. Zahl (gesucht): 46 - 3 = 43\n\nDas gesuchte Zahlenpaar lautet 46 / 43. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (45 / 42) ist falsch, da mit einer fehlerhaften Schrittweite von +9 gerechnet wurde (36 + 9 = 45, 45 - 3 = 42).\n• Option B (43 / 46) ist falsch, da die Zahlenreihenfolge invertiert ist (9. Zahl vor 8. Zahl).\n• Option C (46 / 36) ist falsch, da bei der 9. Zahl fälschlicherweise -10 statt -3 gerechnet wurde (46 - 10 = 36).\n• Option E ist falsch, da Option D die exakte Lösung (46 / 43) enthält.",
  },
  {
    id: "KFF-ZF-GP4-007",
    simulationId: "generalprobe-4",
    questionNumber: 7,
    subtest: "ZF",
    sequence: [2, 1, 3, 4, 7, 11, 18],
    options: {
      A: [27, 45],
      B: [29, 47],
      C: [29, 48],
      D: [30, 48],
      E: null,
    },
    correctAnswer: "B",
    expectedNextValues: [29, 47],
    rule: "Rekursive Summenfolge (Lucas-Folge mit Startwerten 2 und 1: a_n = a_{n-1} + a_{n-2})",
    ruleType: "recursive",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Regel & mathematische Herleitung:\nJedes Glied ab der 3. Position ist die Summe der beiden unmittelbar vorangehenden Zahlen (Lucas-Rekursion a_n = a_{n-1} + a_{n-2}):\n• 1. + 2. Zahl: 2 + 1 = 3\n• 2. + 3. Zahl: 1 + 3 = 4\n• 3. + 4. Zahl: 3 + 4 = 7\n• 4. + 5. Zahl: 4 + 7 = 11\n• 5. + 6. Zahl: 7 + 11 = 18\n• 8. Zahl (gesucht): 11 + 18 = 29\n• 9. Zahl (gesucht): 18 + 29 = 47\n\nDas gesuchte Zahlenpaar lautet 29 / 47. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (27 / 45) ist falsch, da bei der Addition Rechenfehler vorliegen (11 + 16 = 27, 18 + 27 = 45).\n• Option C (29 / 48) ist falsch, da die 8. Zahl zwar korrekt ist (11 + 18 = 29), für die 9. Zahl jedoch fälschlicherweise 18 + 30 = 48 berechnet wurde.\n• Option D (30 / 48) ist falsch, da bereits die 8. Zahl um 1 zu hoch berechnet wurde (12 + 18 = 30).\n• Option E ist falsch, da Option B die korrekte Lösung (29 / 47) darstellt.",
  },
  {
    id: "KFF-ZF-GP4-008",
    simulationId: "generalprobe-4",
    questionNumber: 8,
    subtest: "ZF",
    sequence: [10, 4, 17, 12, 24, 36, 31],
    options: {
      A: [38, 108],
      B: [108, 37],
      C: [72, 38],
      D: [108, 39],
      E: null,
    },
    correctAnswer: "E",
    expectedNextValues: [108, 38],
    rule: "Zwei verschränkte Teilfolgen (ungerade Positionen: +7; gerade Positionen: ×3)",
    ruleType: "interleaved",
    difficulty: "Mittel",
    estimatedTime: 85,
    explanation:
      "Regel & mathematische Herleitung:\nZwei ineinander verschränkte Zahlenfolgen:\n• Ungerade Positionen (1, 3, 5, 7): 10, 17, 24, 31 (konstante Addition von +7: 10 + 7 = 17, 17 + 7 = 24, 24 + 7 = 31)\n• Gerade Positionen (2, 4, 6): 4, 12, 36 (konstante Multiplikation mit 3: ×3: 4 × 3 = 12, 12 × 3 = 36)\n\nFortführung für die gesuchten Positionen:\n• 8. Zahl (gerade Position 4): 36 × 3 = 108\n• 9. Zahl (ungerade Position 5): 31 + 7 = 38\n\nDas gesuchte Zahlenpaar lautet in chronologischer Reihenfolge 108 / 38.\nDa Option A die vertauschte Reihenfolge 38 / 108 zeigt und keine der Optionen B bis D das Paar 108 / 38 enthält, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) korrekt.\n\nDistraktoren-Analyse:\n• Option A (38 / 108) ist falsch, da die Reihenfolge der gesuchten Zahlen vertauscht ist (9. Zahl vor 8. Zahl; typische MedAT-Falle bei verschränkten Folgen).\n• Option B (108 / 37) ist falsch, da die 8. Zahl zwar korrekt ist (36 × 3 = 108), bei der 9. Zahl aber nur +6 statt +7 addiert wurde (31 + 6 = 37).\n• Option C (72 / 38) ist falsch, da bei der geraden Folge fälschlicherweise nur verdoppelt statt verdreifacht wurde (36 × 2 = 72).\n• Option D (108 / 39) ist falsch, da bei der 9. Zahl fälschlicherweise +8 addiert wurde (31 + 8 = 39).\n• Option E ist korrekt, da das zutreffende Zahlenpaar 108 / 38 unter A–D nicht angeboten wird.",
  },
  {
    id: "KFF-ZF-GP4-009",
    simulationId: "generalprobe-4",
    questionNumber: 9,
    subtest: "ZF",
    sequence: [4, 10, 20, 16, 22, 44, 40],
    options: {
      A: [46, 92],
      B: [46, 88],
      C: [44, 88],
      D: [46, 42],
      E: null,
    },
    correctAnswer: "A",
    expectedNextValues: [46, 92],
    rule: "Wiederkehrender Dreierschritt-Zyklus (+6, danach ×2, danach -4)",
    ruleType: "mixed_basic_operations",
    difficulty: "Schwer",
    estimatedTime: 90,
    explanation:
      "Regel & mathematische Herleitung:\nWiederkehrender dreistufiger Operationszyklus:\n• Schritt 1: +6\n• Schritt 2: ×2\n• Schritt 3: -4\n\nÜberprüfung der gegebenen Reihe:\n• 1. Zahl bis 2. Zahl (Schritt 1): 4 + 6 = 10\n• 2. Zahl bis 3. Zahl (Schritt 2): 10 × 2 = 20\n• 3. Zahl bis 4. Zahl (Schritt 3): 20 - 4 = 16\n• 4. Zahl bis 5. Zahl (Schritt 1): 16 + 6 = 22\n• 5. Zahl bis 6. Zahl (Schritt 2): 22 × 2 = 44\n• 6. Zahl bis 7. Zahl (Schritt 3): 44 - 4 = 40\n\nFortführung des Zyklus für die gesuchten Zahlen:\n• 8. Zahl (Schritt 1): 40 + 6 = 46\n• 9. Zahl (Schritt 2): 46 × 2 = 92\n\nDas gesuchte Zahlenpaar lautet 46 / 92. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B (46 / 88) ist falsch, da nach der korrekten 8. Zahl (40 + 6 = 46) bei Schritt 2 fälschlicherweise verdoppelt und -4 gerechnet wurde (46 × 2 - 4 = 88).\n• Option C (44 / 88) ist falsch, da Schritt 1 ausgelassen und stattdessen die vorherige Zahl 44 wiederholt wurde.\n• Option D (46 / 42) ist falsch, da nach der 8. Zahl irrtümlich Schritt 3 (-4) statt Schritt 2 (×2) angewendet wurde (46 - 4 = 42).\n• Option E ist falsch, da Option A das mathematisch exakte Zahlenpaar (46 / 92) enthält.",
  },
  {
    id: "KFF-ZF-GP4-010",
    simulationId: "generalprobe-4",
    questionNumber: 10,
    subtest: "ZF",
    sequence: [128, 9, 64, 24, 32, 39, 16],
    options: {
      A: [8, 54],
      B: [54, 4],
      C: [54, 8],
      D: [53, 8],
      E: null,
    },
    correctAnswer: "C",
    expectedNextValues: [54, 8],
    rule: "Zwei verschränkte Teilfolgen (ungerade Positionen: ÷2; gerade Positionen: +15)",
    ruleType: "interleaved",
    difficulty: "Schwer",
    estimatedTime: 95,
    explanation:
      "Regel & mathematische Herleitung:\nZwei ineinander verschränkte Zahlenfolgen:\n• Ungerade Positionen (1, 3, 5, 7): 128, 64, 32, 16 (fortlaufende Division durch 2: ÷2: 128 ÷ 2 = 64, 64 ÷ 2 = 32, 32 ÷ 2 = 16)\n• Gerade Positionen (2, 4, 6): 9, 24, 39 (konstante Addition von +15: 9 + 15 = 24, 24 + 15 = 39)\n\nFortführung für die gesuchten Positionen:\n• 8. Zahl (gerade Position 4): 39 + 15 = 54\n• 9. Zahl (ungerade Position 5): 16 ÷ 2 = 8\n\nDas gesuchte Zahlenpaar lautet in chronologischer Reihenfolge 54 / 8. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A (8 / 54) ist falsch, da die Reihenfolge der beiden Zahlen vertauscht ist (9. Zahl vor 8. Zahl angegeben; typische MedAT-Falle).\n• Option B (54 / 4) ist falsch, da die 8. Zahl zwar korrekt ist (39 + 15 = 54), bei der 9. Zahl jedoch fälschlicherweise durch 4 statt 2 geteilt wurde (16 ÷ 4 = 4).\n• Option D (53 / 8) ist falsch, da bei der 8. Zahl ein Additionsfehler vorliegt (39 + 14 = 53 statt 39 + 15 = 54).\n• Option E ist falsch, da Option C die exakte Lösung (54 / 8) bietet.",
  },
];

/**
 * Convert RAW_GENERALPROBE_4_ZF_QUESTIONS into StoredQuestion format for Generalprobe #4
 */
export const GENERALPROBE_4_ZF_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_ZF_QUESTIONS.map((zf, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");
  const seqStr = zf.sequence.join(" | ");

  const formatOption = (val: [number, number] | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine der Antwortmöglichkeiten ist richtig";
    }
    return `${val[0]} / ${val[1]}`;
  };

  return {
    id: `KFF-ZF-GP4-${numStr}`,
    legacyId: `zf-sim4-q${String(idx + 1).padStart(2, "0")}`,
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
    tags: ["KFF", "Zahlenfolgen", zf.ruleType, "Generalprobe #4", `KFF-ZF-GP4-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
    zfData: {
      ...zf,
      id: `KFF-ZF-GP4-${numStr}`,
      legacyId: `zf-sim4-q${String(idx + 1).padStart(2, "0")}`,
    } as any,
  };
});
