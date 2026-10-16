import type { StoredQuestion } from "./types";

export const MANUAL_SKILLS_QUESTIONS: StoredQuestion[] = [
  // --- Drahtbiegen (mf-wire) ---
  {
    id: "mf-wire-001",
    exam: "MEDAT-Z",
    section: "MF",
    subjectId: "mf-wire",
    chapterId: "mf-wire-tech",
    topic: "Orthodontisches Drahtbiegen",
    difficulty: "Mittel",
    questionText:
      "Beim MedAT-Z Drahtbiegen müssen zwei vorgegebene Figuren aus Edelstahl-Biegedraht nach 1:1-Vorlage geformt werden. Was führt zur höchsten Punktabwertung?",
    options: [
      "Biegen ohne Schutzhandschuhe.",
      "Abweichung von der Vorlage über die Toleranzgrenze (z. B. >1 mm), Knicke und Torsionsverwindungen.",
      "Verwendung der Flachzange statt der Rundzange für 90°-Winkel.",
      "Zu schnelles Fertigstellen vor Ablauf der 49 Minuten.",
      "Biegen des Drahts in einem Zug ohne Pause.",
    ],
    correctAnswer: 1,
    explanation:
      "Die Bewertung im MedAT-Z erfolgt millimetergenau per Schablone: Formtreue, Einhaltung der Schenkellängen, Planlage (Verwindungsfreiheit) und knickfreie Übergänge sind die entscheidenden Bewertungskriterien.",
    tags: ["MF", "Drahtbiegen", "MedAT-Z"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Formen spiegeln (mf-mirror) ---
  {
    id: "mf-mirror-001",
    exam: "MEDAT-Z",
    section: "MF",
    subjectId: "mf-mirror",
    chapterId: "mf-mirror-symm",
    topic: "Formen spiegeln an Diagonalachsen",
    difficulty: "Mittel",
    questionText:
      "Eine geometrische Figur in einem 10x10-Raster soll an einer um 45° geneigten Diagonalachse gespiegelt werden. Welcher Punkt (x, y) entspricht dem gespiegelten Punkt (2, 7) an der Achse y = x?",
    options: ["(7, 2)", "(-2, -7)", "(-7, -2)", "(2, -7)", "(7, -2)"],
    correctAnswer: 0,
    explanation:
      "Bei der Spiegelung an der 1. Winkelhalbierenden (y = x) vertauschen sich die Koordinaten: Aus (x, y) wird (y, x). Der Punkt (2, 7) wird somit auf (7, 2) abgebildet.",
    tags: ["MF", "Formen spiegeln", "MedAT-Z", "Symmetrie"],
    source: "medat-original",
    version: "2026.1",
  },
];
