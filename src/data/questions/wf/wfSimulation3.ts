import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 3
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_3_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim3-q01",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "I",
      "W",
      "L",
      "E",
      "B",
      "R"
    ],
    "scrambledLetters": "I · W · L · E · B · R",
    "targetWord": "WIRBEL",
    "correctInitial": "W",
    "options": {
      "A": "I",
      "B": "W",
      "C": "R",
      "D": "B",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, E, I, L, R, W bildet sich das deutsche Substantiv 'WIRBEL'. Der richtige Anfangsbuchstabe ist 'W' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim3-q02",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "E",
      "R",
      "X",
      "E",
      "L",
      "F"
    ],
    "scrambledLetters": "E · R · X · E · L · F",
    "targetWord": "REFLEX",
    "correctInitial": "R",
    "options": {
      "A": "R",
      "B": "F",
      "C": "L",
      "D": "X",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, F, L, R, X bildet sich das deutsche Substantiv 'REFLEX'. Der richtige Anfangsbuchstabe ist 'R' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Physiologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim3-q03",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "R",
      "T",
      "A",
      "M",
      "U",
      "A"
    ],
    "scrambledLetters": "R · T · A · M · U · A",
    "targetWord": "TRAUMA",
    "correctInitial": "T",
    "options": {
      "A": "R",
      "B": "A",
      "C": "U",
      "D": "T",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, M, R, T, U bildet sich das deutsche Substantiv 'TRAUMA'. Der richtige Anfangsbuchstabe ist 'T' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chirurgie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim3-q04",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "L",
      "P",
      "A",
      "M",
      "S",
      "A"
    ],
    "scrambledLetters": "L · P · A · M · S · A",
    "targetWord": "PLASMA",
    "correctInitial": "P",
    "options": {
      "A": "L",
      "B": "A",
      "C": "S",
      "D": "M",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, L, M, P, S bildet sich das deutsche Substantiv 'PLASMA'. Der Anfangsbuchstabe ist 'P'. Da 'P' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Hämatologie",
      "Leicht",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim3-q05",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "I",
      "N",
      "M",
      "T",
      "V",
      "I",
      "A"
    ],
    "scrambledLetters": "I · N · M · T · V · I · A",
    "targetWord": "VITAMIN",
    "correctInitial": "V",
    "options": {
      "A": "T",
      "B": "M",
      "C": "V",
      "D": "N",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, I, I, M, N, T, V bildet sich das deutsche Substantiv 'VITAMIN'. Der richtige Anfangsbuchstabe ist 'V' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Ernährung",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim3-q06",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "A",
      "M",
      "I",
      "L",
      "K",
      "U",
      "Z"
    ],
    "scrambledLetters": "A · M · I · L · K · U · Z",
    "targetWord": "KALZIUM",
    "correctInitial": "K",
    "options": {
      "A": "A",
      "B": "L",
      "C": "Z",
      "D": "K",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, I, K, L, M, U, Z bildet sich das deutsche Substantiv 'KALZIUM'. Der richtige Anfangsbuchstabe ist 'K' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim3-q07",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "N",
      "N",
      "L",
      "S",
      "I",
      "I",
      "U"
    ],
    "scrambledLetters": "N · N · L · S · I · I · U",
    "targetWord": "INSULIN",
    "correctInitial": "I",
    "options": {
      "A": "N",
      "B": "I",
      "C": "S",
      "D": "L",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben I, I, L, N, N, S, U bildet sich das deutsche Substantiv 'INSULIN'. Der richtige Anfangsbuchstabe ist 'I' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Endokrinologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim3-q08",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "E",
      "T",
      "E",
      "G",
      "S",
      "N",
      "M"
    ],
    "scrambledLetters": "E · T · E · G · S · N · M",
    "targetWord": "SEGMENT",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "G",
      "C": "M",
      "D": "N",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, G, M, N, S, T bildet sich das deutsche Substantiv 'SEGMENT'. Der richtige Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim3-q09",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "A",
      "M",
      "I",
      "T",
      "N",
      "U",
      "R"
    ],
    "scrambledLetters": "A · M · I · T · N · U · R",
    "targetWord": "NATRIUM",
    "correctInitial": "N",
    "options": {
      "A": "A",
      "B": "T",
      "C": "R",
      "D": "M",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, I, M, N, R, T, U bildet sich das deutsche Substantiv 'NATRIUM'. Der Anfangsbuchstabe ist 'N'. Da 'N' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Mittel",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim3-q10",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "H",
      "D",
      "R",
      "L",
      "C",
      "I",
      "O"
    ],
    "scrambledLetters": "H · D · R · L · C · I · O",
    "targetWord": "CHLORID",
    "correctInitial": "C",
    "options": {
      "A": "H",
      "B": "L",
      "C": "C",
      "D": "R",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben C, D, H, I, L, O, R bildet sich das deutsche Substantiv 'CHLORID'. Der richtige Anfangsbuchstabe ist 'C' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chemie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim3-q11",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "H",
      "U",
      "O",
      "T",
      "B",
      "R",
      "S",
      "M"
    ],
    "scrambledLetters": "H · U · O · T · B · R · S · M",
    "targetWord": "THROMBUS",
    "correctInitial": "T",
    "options": {
      "A": "H",
      "B": "T",
      "C": "R",
      "D": "B",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, H, M, O, R, S, T, U bildet sich das deutsche Substantiv 'THROMBUS'. Der richtige Anfangsbuchstabe ist 'T' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Kardiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim3-q12",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "L",
      "E",
      "E",
      "A",
      "G",
      "L",
      "N",
      "R"
    ],
    "scrambledLetters": "L · E · E · A · G · L · N · R",
    "targetWord": "ALLERGEN",
    "correctInitial": "A",
    "options": {
      "A": "L",
      "B": "R",
      "C": "G",
      "D": "A",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, E, G, L, L, N, R bildet sich das deutsche Substantiv 'ALLERGEN'. Der richtige Anfangsbuchstabe ist 'A' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Immunologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim3-q13",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "U",
      "O",
      "A",
      "M",
      "I",
      "T",
      "N",
      "T"
    ],
    "scrambledLetters": "U · O · A · M · I · T · N · T",
    "targetWord": "MUTATION",
    "correctInitial": "M",
    "options": {
      "A": "M",
      "B": "U",
      "C": "T",
      "D": "N",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, I, M, N, O, T, T, U bildet sich das deutsche Substantiv 'MUTATION'. Der richtige Anfangsbuchstabe ist 'M' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Genetik",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim3-q14",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "A",
      "E",
      "H",
      "K",
      "T",
      "T",
      "R",
      "E"
    ],
    "scrambledLetters": "A · E · H · K · T · T · R · E",
    "targetWord": "KATHETER",
    "correctInitial": "K",
    "options": {
      "A": "A",
      "B": "T",
      "C": "H",
      "D": "R",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, E, H, K, R, T, T bildet sich das deutsche Substantiv 'KATHETER'. Der Anfangsbuchstabe ist 'K'. Da 'K' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Schwer",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim3-q15",
    "simulationId": "wf-sim3",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "N",
      "I",
      "J",
      "O",
      "E",
      "N",
      "K",
      "I",
      "T"
    ],
    "scrambledLetters": "N · I · J · O · E · N · K · I · T",
    "targetWord": "INJEKTION",
    "correctInitial": "I",
    "options": {
      "A": "N",
      "B": "J",
      "C": "I",
      "D": "K",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, I, I, J, K, N, N, O, T bildet sich das deutsche Substantiv 'INJEKTION'. Der richtige Anfangsbuchstabe ist 'I' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Schwer"
    ]
  }
];
