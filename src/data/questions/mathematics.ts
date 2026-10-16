import type { StoredQuestion } from "./types";

export const MATHEMATICS_QUESTIONS: StoredQuestion[] = [
  // --- Algebra & Potenzen (math-alg) ---
  {
    id: "math-alg-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "math",
    chapterId: "math-01-zehnerpotenzen",
    topic: "Zehnerpotenzen & Bruchrechnung",
    difficulty: "Leicht",
    questionText:
      "Vereinfache den Ausdruck: (3 · 10^-3) · (4 · 10^5) / (6 · 10^4). Welcher Dezimalwert ergibt sich?",
    options: ["0,02", "0,2", "2", "20", "200"],
    correctAnswer: 0,
    explanation:
      "Zahlenfaktoren: (3 · 4) / 6 = 12 / 6 = 2. Zehnerpotenzen: 10^-3 · 10^5 / 10^4 = 10^(-3 + 5 - 4) = 10^-2. Gesamtergebnis: 2 · 10^-2 = 0,02.",
    tags: ["BMS", "Mathematik", "Potenzen"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "math-alg-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "math",
    chapterId: "math-05-funktionen",
    topic: "Logarithmen",
    difficulty: "Mittel",
    questionText:
      "Berechne ohne Taschenrechner: log10(0,001) + ln(e^4). Welcher Wert resultiert?",
    options: ["1", "-3", "4", "7", "-1"],
    correctAnswer: 0,
    explanation:
      "log10(0,001) = log10(10^-3) = -3. ln(e^4) = 4. Summe: -3 + 4 = 1.",
    tags: ["BMS", "Mathematik", "Logarithmus"],
    source: "medat-original",
    version: "2026.1",
  },
];
