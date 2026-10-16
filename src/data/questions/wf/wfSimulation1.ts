import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 1
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_1_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim1-q01",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "A",
      "T",
      "E",
      "T",
      "P",
      "N",
      "I"
    ],
    "scrambledLetters": "A · T · E · T · P · N · I",
    "targetWord": "PATIENT",
    "correctInitial": "P",
    "options": {
      "A": "T",
      "B": "P",
      "C": "N",
      "D": "I",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, I, N, P, T, T bildet sich das deutsche Substantiv 'PATIENT'. Der richtige Anfangsbuchstabe ist 'P' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim1-q02",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "N",
      "N",
      "H",
      "O",
      "K",
      "E",
      "C"
    ],
    "scrambledLetters": "N · N · H · O · K · E · C",
    "targetWord": "KNOCHEN",
    "correctInitial": "K",
    "options": {
      "A": "K",
      "B": "N",
      "C": "O",
      "D": "H",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben C, E, H, K, N, N, O bildet sich das deutsche Substantiv 'KNOCHEN'. Der richtige Anfangsbuchstabe ist 'K' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim1-q03",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "U",
      "M",
      "L",
      "E",
      "K",
      "S"
    ],
    "scrambledLetters": "U · M · L · E · K · S",
    "targetWord": "MUSKEL",
    "correctInitial": "M",
    "options": {
      "A": "S",
      "B": "L",
      "C": "K",
      "D": "M",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, K, L, M, S, U bildet sich das deutsche Substantiv 'MUSKEL'. Der richtige Anfangsbuchstabe ist 'M' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim1-q04",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "E",
      "G",
      "N",
      "R",
      "I",
      "H"
    ],
    "scrambledLetters": "E · G · N · R · I · H",
    "targetWord": "GEHIRN",
    "correctInitial": "G",
    "options": {
      "A": "H",
      "B": "R",
      "C": "N",
      "D": "E",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, G, H, I, N, R bildet sich das deutsche Substantiv 'GEHIRN'. Der Anfangsbuchstabe ist 'G'. Da 'G' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Neuroanatomie",
      "Leicht",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim1-q05",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "E",
      "N",
      "Z",
      "D",
      "M",
      "I",
      "I"
    ],
    "scrambledLetters": "E · N · Z · D · M · I · I",
    "targetWord": "MEDIZIN",
    "correctInitial": "M",
    "options": {
      "A": "D",
      "B": "Z",
      "C": "M",
      "D": "N",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, I, I, M, N, Z bildet sich das deutsche Substantiv 'MEDIZIN'. Der richtige Anfangsbuchstabe ist 'M' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Wissenschaft",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim1-q06",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "R",
      "E",
      "R",
      "T",
      "A",
      "I",
      "E"
    ],
    "scrambledLetters": "R · E · R · T · A · I · E",
    "targetWord": "ARTERIE",
    "correctInitial": "A",
    "options": {
      "A": "R",
      "B": "T",
      "C": "E",
      "D": "A",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, E, I, R, R, T bildet sich das deutsche Substantiv 'ARTERIE'. Der richtige Anfangsbuchstabe ist 'A' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim1-q07",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "P",
      "R",
      "D",
      "E",
      "S",
      "E",
      "N"
    ],
    "scrambledLetters": "P · R · D · E · S · E · N",
    "targetWord": "SPENDER",
    "correctInitial": "S",
    "options": {
      "A": "P",
      "B": "S",
      "C": "D",
      "D": "R",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, E, N, P, R, S bildet sich das deutsche Substantiv 'SPENDER'. Der richtige Anfangsbuchstabe ist 'S' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim1-q08",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "R",
      "T",
      "U",
      "O",
      "P",
      "K",
      "D"
    ],
    "scrambledLetters": "R · T · U · O · P · K · D",
    "targetWord": "PRODUKT",
    "correctInitial": "P",
    "options": {
      "A": "P",
      "B": "R",
      "C": "D",
      "D": "K",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, K, O, P, R, T, U bildet sich das deutsche Substantiv 'PRODUKT'. Der richtige Anfangsbuchstabe ist 'P' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Allgemein",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim1-q09",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "O",
      "H",
      "N",
      "O",
      "M",
      "R"
    ],
    "scrambledLetters": "O · H · N · O · M · R",
    "targetWord": "HORMON",
    "correctInitial": "H",
    "options": {
      "A": "M",
      "B": "O",
      "C": "R",
      "D": "N",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben H, M, N, O, O, R bildet sich das deutsche Substantiv 'HORMON'. Der Anfangsbuchstabe ist 'H'. Da 'H' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Endokrinologie",
      "Mittel",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim1-q10",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "R",
      "A",
      "E",
      "U",
      "I",
      "F",
      "S",
      "K",
      "L"
    ],
    "scrambledLetters": "R · A · E · U · I · F · S · K · L",
    "targetWord": "KREISLAUF",
    "correctInitial": "K",
    "options": {
      "A": "R",
      "B": "F",
      "C": "K",
      "D": "S",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, F, I, K, L, R, S, U bildet sich das deutsche Substantiv 'KREISLAUF'. Der richtige Anfangsbuchstabe ist 'K' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Physiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim1-q11",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "L",
      "U",
      "U",
      "C",
      "T",
      "K",
      "D",
      "B",
      "R"
    ],
    "scrambledLetters": "L · U · U · C · T · K · D · B · R",
    "targetWord": "BLUTDRUCK",
    "correctInitial": "B",
    "options": {
      "A": "D",
      "B": "B",
      "C": "K",
      "D": "T",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, C, D, K, L, R, T, U, U bildet sich das deutsche Substantiv 'BLUTDRUCK'. Der richtige Anfangsbuchstabe ist 'B' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Kardiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim1-q12",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "I",
      "S",
      "G",
      "D",
      "O",
      "A",
      "E",
      "N"
    ],
    "scrambledLetters": "I · S · G · D · O · A · E · N",
    "targetWord": "DIAGNOSE",
    "correctInitial": "D",
    "options": {
      "A": "G",
      "B": "S",
      "C": "N",
      "D": "D",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, D, E, G, I, N, O, S bildet sich das deutsche Substantiv 'DIAGNOSE'. Der richtige Anfangsbuchstabe ist 'D' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim1-q13",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "C",
      "E",
      "G",
      "H",
      "R",
      "A",
      "L",
      "S",
      "D",
      "A"
    ],
    "scrambledLetters": "C · E · G · H · R · A · L · S · D · A",
    "targetWord": "SCHLAGADER",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "G",
      "C": "A",
      "D": "L",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, C, D, E, G, H, L, R, S bildet sich das deutsche Substantiv 'SCHLAGADER'. Der richtige Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim1-q14",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "E",
      "R",
      "L",
      "Z",
      "E",
      "L",
      "N",
      "K"
    ],
    "scrambledLetters": "E · R · L · Z · E · L · N · K",
    "targetWord": "ZELLKERN",
    "correctInitial": "Z",
    "options": {
      "A": "K",
      "B": "L",
      "C": "R",
      "D": "E",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, K, L, L, N, R, Z bildet sich das deutsche Substantiv 'ZELLKERN'. Der Anfangsbuchstabe ist 'Z'. Da 'Z' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zellbiologie",
      "Schwer",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim1-q15",
    "simulationId": "wf-sim1",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "M",
      "Y",
      "I",
      "S",
      "M",
      "N",
      "E",
      "U",
      "T",
      "M",
      "S"
    ],
    "scrambledLetters": "M · Y · I · S · M · N · E · U · T · M · S",
    "targetWord": "IMMUNSYSTEM",
    "correctInitial": "I",
    "options": {
      "A": "M",
      "B": "S",
      "C": "I",
      "D": "Y",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, I, M, M, M, N, S, S, T, U, Y bildet sich das deutsche Substantiv 'IMMUNSYSTEM'. Der richtige Anfangsbuchstabe ist 'I' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Immunologie",
      "Schwer"
    ]
  }
];
