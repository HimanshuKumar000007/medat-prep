import type { StoredQuestion } from "./types";

export const SEK_QUESTIONS: StoredQuestion[] = [
  // --- Emotionen erkennen (sek-emo-rec) ---
  {
    id: "sek-rec-001",
    exam: "BOTH",
    section: "SEK",
    subjectId: "sek-emo-rec",
    chapterId: "sek-rec-face",
    topic: "Mikroexpressionen & Basisemotionen",
    difficulty: "Leicht",
    questionText:
      "Eine Person zieht die Oberlippe nach oben, rümpft die Nase und verengt die Augen leicht. Welche Basisemotion liegt vor?",
    options: ["Ekel", "Furcht", "Trauer", "Überraschung", "Freude"],
    correctAnswer: 0,
    explanation:
      "Das Kräuseln der Nase und das Hochziehen der Oberlippe sind das universelle, charakteristische Erkennungsmerkmal von Ekel nach der FACS-Klassifikation von Paul Ekman.",
    tags: ["SEK", "Emotionen", "Mimik"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "sek-rec-002",
    exam: "BOTH",
    section: "SEK",
    subjectId: "sek-emo-rec",
    chapterId: "sek-rec-face",
    topic: "Mimische Muster",
    difficulty: "Mittel",
    questionText:
      "Hochgezogene, zusammengeschobene Augenbrauen, weit geöffnete Augen und ein leicht geöffneter, entspannter Mund weisen auf welche Emotion hin?",
    options: ["Ärger", "Überraschung", "Verachtung", "Scham", "Wut"],
    correctAnswer: 1,
    explanation:
      "Gehobene Augenbrauen in Kombination mit geweiteten Augen und geöffnetem Mund sind das klassische Muster von Überraschung. Bei Ärger sind die Brauen gesenkt und zusammengezogen.",
    tags: ["SEK", "Emotionen", "Überraschung"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Emotionen regulieren (sek-emo-reg) ---
  {
    id: "sek-reg-001",
    exam: "BOTH",
    section: "SEK",
    subjectId: "sek-emo-reg",
    chapterId: "sek-reg-stress",
    topic: "Kognitive Neubewertung",
    difficulty: "Mittel",
    questionText:
      "Ein Medizinstudierender fühlt vor einer mündlichen Prüfung starke Anspannung und Herzklopfen. Welche Strategie ist zur langfristigen Emotionsregulation am effektivsten?",
    options: [
      "Die Nervosität als körpereigenes Signal der Wachheit und Leistungsbereitschaft interpretieren (kognitive Neubewertung).",
      "Alle Gedanken an die Prüfung vollständig verdrängen und sich ablenken.",
      "Die Prüfung kurzfristig absagen, um das Angstgefühl zu vermeiden.",
      "Sich selbst einreden, dass die Prüfung ohnehin keine Bedeutung hat.",
      "Koffein in hoher Dosis konsumieren, um die Nervosität zu überdecken.",
    ],
    correctAnswer: 0,
    explanation:
      "Kognitive Neubewertung (Reappraisal) wandelt bedrohliche physiologische Reaktionen in produktive Aktivierung um und gilt in der Emotionspsychologie als die adaptivste Regulationsstrategie.",
    tags: ["SEK", "Regulation", "Stress"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Soziales Entscheiden (sek-soc-dec) ---
  {
    id: "sek-dec-001",
    exam: "BOTH",
    section: "SEK",
    subjectId: "sek-soc-dec",
    chapterId: "sek-dec-ethics",
    topic: "Kollegiale Konfliktlösung",
    difficulty: "Mittel",
    questionText:
      "Deine Lernpartnerin sagt zum dritten Mal kurzfristig ein vereinbartes Vorbereitungstreffen ab, wirkt jedoch sichtlich überarbeitet. Was ist die sozial kompetenteste Reaktion?",
    options: [
      "Die Zusammenarbeit kommentarlos beenden.",
      "Ihr in der gemeinsamen Gruppe Vorwürfe machen.",
      "Das Gespräch unter vier Augen suchen, empathisch nachfragen und flexible Alternativen anbieten.",
      "Ebenfalls unzuverlässig reagieren, um ein Gleichgewicht herzustellen.",
      "Die Situation ignorieren und alleine weitermachen.",
    ],
    correctAnswer: 2,
    explanation:
      "Soziale Kompetenz im MedAT erfordert Perspektivenübernahme, lösungsorientierte Kommunikation und Empathie vor vorschnellen Sanktionen.",
    tags: ["SEK", "Entscheiden", "Kommunikation"],
    source: "medat-original",
    version: "2026.1",
  },
];
