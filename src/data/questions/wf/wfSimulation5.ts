import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 5
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_5_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim5-q01",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "E",
      "B",
      "D",
      "N",
      "U",
      "F"
    ],
    "scrambledLetters": "E · B · D · N · U · F",
    "targetWord": "BEFUND",
    "correctInitial": "B",
    "options": {
      "A": "E",
      "B": "B",
      "C": "F",
      "D": "U",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, D, E, F, N, U bildet sich das deutsche Substantiv 'BEFUND'. Der richtige Anfangsbuchstabe ist 'B' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Diagnostik",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim5-q02",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "E",
      "T",
      "C",
      "R",
      "B",
      "H",
      "I"
    ],
    "scrambledLetters": "E · T · C · R · B · H · I",
    "targetWord": "BERICHT",
    "correctInitial": "B",
    "options": {
      "A": "B",
      "B": "E",
      "C": "R",
      "D": "I",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, C, E, H, I, R, T bildet sich das deutsche Substantiv 'BERICHT'. Der richtige Anfangsbuchstabe ist 'B' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim5-q03",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "E",
      "E",
      "O",
      "T",
      "M",
      "D",
      "H"
    ],
    "scrambledLetters": "E · E · O · T · M · D · H",
    "targetWord": "METHODE",
    "correctInitial": "M",
    "options": {
      "A": "E",
      "B": "T",
      "C": "H",
      "D": "M",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, E, H, M, O, T bildet sich das deutsche Substantiv 'METHODE'. Der richtige Anfangsbuchstabe ist 'M' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Wissenschaft",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim5-q04",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "E",
      "K",
      "N",
      "C",
      "T",
      "I",
      "H"
    ],
    "scrambledLetters": "E · K · N · C · T · I · H",
    "targetWord": "TECHNIK",
    "correctInitial": "T",
    "options": {
      "A": "E",
      "B": "C",
      "C": "H",
      "D": "N",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben C, E, H, I, K, N, T bildet sich das deutsche Substantiv 'TECHNIK'. Der Anfangsbuchstabe ist 'T'. Da 'T' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Wissenschaft",
      "Leicht",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim5-q05",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "T",
      "N",
      "I",
      "A",
      "S",
      "O",
      "T"
    ],
    "scrambledLetters": "T · N · I · A · S · O · T",
    "targetWord": "STATION",
    "correctInitial": "S",
    "options": {
      "A": "T",
      "B": "A",
      "C": "S",
      "D": "I",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, I, N, O, S, T, T bildet sich das deutsche Substantiv 'STATION'. Der richtige Anfangsbuchstabe ist 'S' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim5-q06",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "O",
      "N",
      "M",
      "L",
      "V",
      "E",
      "U"
    ],
    "scrambledLetters": "O · N · M · L · V · E · U",
    "targetWord": "VOLUMEN",
    "correctInitial": "V",
    "options": {
      "A": "O",
      "B": "L",
      "C": "U",
      "D": "V",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, L, M, N, O, U, V bildet sich das deutsche Substantiv 'VOLUMEN'. Der richtige Anfangsbuchstabe ist 'V' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Physik/Physiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim5-q07",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "E",
      "T",
      "C",
      "W",
      "G",
      "H",
      "I"
    ],
    "scrambledLetters": "E · T · C · W · G · H · I",
    "targetWord": "GEWICHT",
    "correctInitial": "G",
    "options": {
      "A": "E",
      "B": "G",
      "C": "W",
      "D": "I",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben C, E, G, H, I, T, W bildet sich das deutsche Substantiv 'GEWICHT'. Der richtige Anfangsbuchstabe ist 'G' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Physiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim5-q08",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "B",
      "D",
      "A",
      "S",
      "A",
      "N",
      "T"
    ],
    "scrambledLetters": "B · D · A · S · A · N · T",
    "targetWord": "ABSTAND",
    "correctInitial": "A",
    "options": {
      "A": "A",
      "B": "B",
      "C": "S",
      "D": "T",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, B, D, N, S, T bildet sich das deutsche Substantiv 'ABSTAND'. Der richtige Anfangsbuchstabe ist 'A' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Allgemein",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim5-q09",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "L",
      "U",
      "N",
      "K",
      "K",
      "I",
      "M",
      "I"
    ],
    "scrambledLetters": "L · U · N · K · K · I · M · I",
    "targetWord": "KLINIKUM",
    "correctInitial": "K",
    "options": {
      "A": "L",
      "B": "I",
      "C": "N",
      "D": "M",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben I, I, K, K, L, M, N, U bildet sich das deutsche Substantiv 'KLINIKUM'. Der Anfangsbuchstabe ist 'K'. Da 'K' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Mittel",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim5-q10",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "N",
      "U",
      "T",
      "I",
      "T",
      "S",
      "T",
      "I"
    ],
    "scrambledLetters": "N · U · T · I · T · S · T · I",
    "targetWord": "INSTITUT",
    "correctInitial": "I",
    "options": {
      "A": "N",
      "B": "S",
      "C": "I",
      "D": "T",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben I, I, N, S, T, T, T, U bildet sich das deutsche Substantiv 'INSTITUT'. Der richtige Anfangsbuchstabe ist 'I' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Wissenschaft",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim5-q11",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "R",
      "N",
      "Q",
      "F",
      "E",
      "E",
      "Z",
      "U"
    ],
    "scrambledLetters": "R · N · Q · F · E · E · Z · U",
    "targetWord": "FREQUENZ",
    "correctInitial": "F",
    "options": {
      "A": "R",
      "B": "F",
      "C": "E",
      "D": "Q",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, F, N, Q, R, U, Z bildet sich das deutsche Substantiv 'FREQUENZ'. Der richtige Anfangsbuchstabe ist 'F' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Physiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim5-q12",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "Y",
      "S",
      "T",
      "S",
      "E",
      "N",
      "E",
      "H"
    ],
    "scrambledLetters": "Y · S · T · S · E · N · E · H",
    "targetWord": "SYNTHESE",
    "correctInitial": "S",
    "options": {
      "A": "Y",
      "B": "N",
      "C": "T",
      "D": "S",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, H, N, S, S, T, Y bildet sich das deutsche Substantiv 'SYNTHESE'. Der richtige Anfangsbuchstabe ist 'S' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim5-q13",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "P",
      "U",
      "K",
      "S",
      "R",
      "E",
      "M",
      "T"
    ],
    "scrambledLetters": "P · U · K · S · R · E · M · T",
    "targetWord": "SPEKTRUM",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "P",
      "C": "E",
      "D": "K",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, K, M, P, R, S, T, U bildet sich das deutsche Substantiv 'SPEKTRUM'. Der richtige Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Physik/Diagnostik",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim5-q14",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "I",
      "I",
      "F",
      "O",
      "F",
      "N",
      "U",
      "D",
      "S"
    ],
    "scrambledLetters": "I · I · F · O · F · N · U · D · S",
    "targetWord": "DIFFUSION",
    "correctInitial": "D",
    "options": {
      "A": "I",
      "B": "F",
      "C": "U",
      "D": "S",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, F, F, I, I, N, O, S, U bildet sich das deutsche Substantiv 'DIFFUSION'. Der Anfangsbuchstabe ist 'D'. Da 'D' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zellbiologie",
      "Schwer",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim5-q15",
    "simulationId": "wf-sim5",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "R",
      "O",
      "A",
      "R",
      "N",
      "T",
      "S",
      "T",
      "P"
    ],
    "scrambledLetters": "R · O · A · R · N · T · S · T · P",
    "targetWord": "TRANSPORT",
    "correctInitial": "T",
    "options": {
      "A": "R",
      "B": "A",
      "C": "T",
      "D": "N",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, N, O, P, R, R, S, T, T bildet sich das deutsche Substantiv 'TRANSPORT'. Der richtige Anfangsbuchstabe ist 'T' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Physiologie",
      "Schwer"
    ]
  }
];
