import type { StoredQuestion } from "./types";

export const PHYSICS_QUESTIONS: StoredQuestion[] = [
  // --- Mechanik (phys-02-mechanik) ---
  {
    id: "phys-mech-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "phys",
    chapterId: "phys-02-mechanik",
    topic: "Kinetische Energie & Bremsarbeit",
    difficulty: "Mittel",
    questionText:
      "Ein Fahrzeug der Masse m = 1.000 kg bremst gleichmäßig von v = 20 m/s auf den Stillstand ab. Welche Bremsarbeit muss dabei verrichtet werden?",
    options: ["100 kJ", "200 kJ", "400 kJ", "20 kJ", "10 kJ"],
    correctAnswer: 1,
    explanation:
      "E_kin = 1/2 · m · v^2 = 0,5 · 1.000 kg · (20 m/s)^2 = 0,5 · 1.000 · 400 = 200.000 J = 200 kJ.",
    tags: ["BMS", "Physik", "Mechanik", "Energie"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "phys-mech-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "phys",
    chapterId: "phys-02-mechanik",
    topic: "Newtonsches Grundgesetz (F = m · a)",
    difficulty: "Leicht",
    questionText:
      "Eine konstante Kraft F beschleunigt einen Körper der Masse m mit der Beschleunigung a. Wird bei gleicher Kraft die Masse verdoppelt, dann …",
    options: [
      "verdoppelt sich die Beschleunigung.",
      "halbiert sich die Beschleunigung.",
      "bleibt die Beschleunigung gleich.",
      "vervierfacht sich die Beschleunigung.",
      "fällt die Beschleunigung auf null ab.",
    ],
    correctAnswer: 1,
    explanation:
      "Nach dem 2. Newtonschen Gesetz gilt a = F / m. Bei konstanter Kraft F ist die Beschleunigung umgekehrt proportional zur Masse: Doppelte Masse führt zur halben Beschleunigung.",
    tags: ["BMS", "Physik", "Newton", "Kraft"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Wärmelehre (phys-04-waermelehre) ---
  {
    id: "phys-therm-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "phys",
    chapterId: "phys-04-waermelehre",
    topic: "Ideales Gasgesetz",
    difficulty: "Mittel",
    questionText:
      "Ein ideales Gas befindet sich in einem festen Behälter mit konstantem Volumen (isochor). Was passiert mit dem Druck p des Gases, wenn die absolute Temperatur T in Kelvin verdoppelt wird?",
    options: [
      "Der Druck verdoppelt sich.",
      "Der Druck halbiert sich.",
      "Der Druck bleibt unverändert.",
      "Der Druck vervierfacht sich.",
      "Der Druck sinkt auf null.",
    ],
    correctAnswer: 0,
    explanation:
      "Nach der idealen Gasgleichung (p · V = n · R · T bzw. Gesetz von Amontons bei V = const.) ist der Druck direkt proportional zur absoluten Temperatur: p / T = const. Verdopplung von T verdoppelt den Druck.",
    tags: ["BMS", "Physik", "Thermodynamik", "Gasgesetz"],
    source: "medat-original",
    version: "2026.1",
  },
];
