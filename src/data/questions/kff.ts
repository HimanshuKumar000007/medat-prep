import type { StoredQuestion } from "./types";

export const KFF_QUESTIONS: StoredQuestion[] = [
  // --- Zahlenfolgen (kff-num) ---
  {
    id: "kff-num-001",
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-num",
    chapterId: "kff-num-arith",
    topic: "Arithmetische Zahlenreihen",
    difficulty: "Mittel",
    questionText:
      "Welche Zahl setzt die gegebene Reihe logisch fort: 4 · 7 · 13 · 25 · 49 · ?",
    options: ["85", "91", "97", "98", "101"],
    correctAnswer: 2,
    explanation:
      "Bildungsvorschrift: Die Differenzen verdoppeln sich (+3, +6, +12, +24, +48). Also 49 + 48 = 97 (bzw. 49 · 2 − 1 = 97).",
    tags: ["KFF", "Zahlenfolgen", "Reihen"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "kff-num-002",
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-num",
    chapterId: "kff-num-arith",
    topic: "Verschachtelte Zahlenfolgen",
    difficulty: "Mittel",
    questionText:
      "Welche Zahl folgt als nächstes: 3 · 18 · 6 · 15 · 12 · 12 · 24 · ?",
    options: ["6", "9", "12", "18", "48"],
    correctAnswer: 1,
    explanation:
      "Zwei alternierende Reihen:\nReihe 1 (ungerade Positionen): 3, 6, 12, 24 (immer · 2).\nReihe 2 (gerade Positionen): 18, 15, 12, ? (immer − 3).\nAlso: 12 − 3 = 9.",
    tags: ["KFF", "Zahlenfolgen", "Alternierend"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Figuren zusammensetzen (kff-fig) ---
  {
    id: "kff-fig-001",
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig",
    chapterId: "kff-fig-l1",
    topic: "Mentale Rotation & Kantenanalyse",
    difficulty: "Leicht",
    questionText:
      "Ein Quadrat wird um 90° im Uhrzeigersinn gedreht und anschließend an der vertikalen Achse gespiegelt. Welcher Zustand liegt vor?",
    options: [
      "Das Quadrat ist geometrisch invariant und deckungsgleich zum Ausgangszustand.",
      "Das Quadrat ist um 180° gedreht.",
      "Das Quadrat ist um 270° gedreht.",
      "Das Quadrat ist in eine Raute verzerrt.",
      "Das Quadrat ist um 45° gekippt.",
    ],
    correctAnswer: 0,
    explanation:
      "Ein Quadrat besitzt vierzählige Rotationssymmetrie und Spiegelsymmetrie bezüglich der Hauptachsen. Drehung um 90° und vertikale Spiegelung bilden das Quadrat wieder exakt auf sich selbst ab.",
    tags: ["KFF", "Figuren", "Rotation"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Wortflüssigkeit (kff-wf) ---
  {
    id: "kff-wf-001",
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-wf",
    chapterId: "kff-wf-basic",
    topic: "Anagramme & Wortfindung",
    difficulty: "Mittel",
    questionText:
      "Aus welchen Buchstaben lässt sich ein medizinisch relevanter Begriff bilden: A — E — G — K — L — N — R — T ?",
    options: ["GELENKART", "TRAEGLEN", "KLARTEXT", "NEKTARIN", "GRANULAT"],
    correctAnswer: 0,
    explanation:
      "Aus den Buchstaben A, E, G, K, L, N, R, T bildet sich das Wort 'GELENKART'.",
    tags: ["KFF", "Wortflüssigkeit", "Anagramm"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Gedächtnis & Merkfähigkeit (kff-mem) ---
  {
    id: "kff-mem-001",
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-mem",
    chapterId: "kff-mem-pass",
    topic: "Allergiepass-Faktenabruf",
    difficulty: "Mittel",
    questionText:
      "Steckbrief: 'Lukas Pichler, 24 Jahre, Blutgruppe AB+, Allergie: Penicillin, Ausweisnr.: 4819'. Welche Blutgruppe und Allergie hat Lukas?",
    options: [
      "Blutgruppe A+, Allergie: Hausstaub",
      "Blutgruppe AB+, Allergie: Penicillin",
      "Blutgruppe 0-, Allergie: Bienengift",
      "Blutgruppe B+, Allergie: Penicillin",
      "Blutgruppe AB-, Allergie: Pollen",
    ],
    correctAnswer: 1,
    explanation:
      "Der Faktenabruf fordert die exakte Reproduktion der eingeprägten Merkmale: Lukas Pichler besitzt Blutgruppe AB+ und ist allergisch gegen Penicillin.",
    tags: ["KFF", "Gedächtnis", "Allergiepass"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Implikationen erkennen (kff-imp) [Nur MedAT-H] ---
  {
    id: "kff-imp-001",
    exam: "MEDAT-H",
    section: "KFF",
    subjectId: "kff-imp",
    chapterId: "kff-imp-syll",
    topic: "Formale Logik & Quantoren",
    difficulty: "Mittel",
    questionText:
      "Gegeben sind zwei Prämissen:\n1. Alle Ärzt:innen haben ein Studium absolviert.\n2. Einige Personen, die ein Studium absolviert haben, forschen an Universitäten.\n\nWelche Schlussfolgerung ist zwingend logisch gültig?",
    options: [
      "Alle Ärzt:innen forschen an Universitäten.",
      "Einige Ärzt:innen forschen an Universitäten.",
      "Keine Ärzt:in forscht an einer Universität.",
      "Personen, die an Universitäten forschen, sind immer Ärzt:innen.",
      "Es lässt sich keine der Aussagen A bis D zwingend ableiten.",
    ],
    correctAnswer: 4,
    explanation:
      "Die Teilmenge der Forschenden überschneidet sich mit Studierten, muss sich aber nicht zwingend mit der Untergruppe der Ärzt:innen überschneiden. Da keine der Aussagen A bis D zwingend wahr sein muss, ist Antwort E korrekt.",
    tags: ["KFF", "Implikationen", "Logik", "MedAT-H"],
    source: "medat-original",
    version: "2026.1",
  },
];
