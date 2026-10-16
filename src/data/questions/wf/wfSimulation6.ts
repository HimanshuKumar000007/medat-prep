import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 6
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_6_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim6-q01",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "E",
      "T",
      "I",
      "N",
      "A",
      "R"
    ],
    "scrambledLetters": "E · T · I · N · A · R",
    "targetWord": "RETINA",
    "correctInitial": "R",
    "options": {
      "A": "E",
      "B": "R",
      "C": "T",
      "D": "N",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, I, N, R, T bildet sich das deutsche Substantiv 'RETINA'. Der gesuchte Anfangsbuchstabe ist 'R' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim6-q02",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "K",
      "L",
      "E",
      "R",
      "A",
      "S"
    ],
    "scrambledLetters": "K · L · E · R · A · S",
    "targetWord": "SKLERA",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "K",
      "C": "L",
      "D": "R",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, K, L, R, S bildet sich das deutsche Substantiv 'SKLERA'. Der gesuchte Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Ophthalmologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim6-q03",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "H",
      "Y",
      "M",
      "U",
      "S",
      "T"
    ],
    "scrambledLetters": "H · Y · M · U · S · T",
    "targetWord": "THYMUS",
    "correctInitial": "T",
    "options": {
      "A": "M",
      "B": "U",
      "C": "S",
      "D": "T",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben H, M, S, T, U, Y bildet sich das deutsche Substantiv 'THYMUS'. Der gesuchte Anfangsbuchstabe ist 'T' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Immunologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim6-q04",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "U",
      "P",
      "I",
      "L",
      "L",
      "E",
      "P"
    ],
    "scrambledLetters": "U · P · I · L · L · E · P",
    "targetWord": "PUPILLE",
    "correctInitial": "P",
    "options": {
      "A": "U",
      "B": "I",
      "C": "L",
      "D": "E",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'PUPILLE'. Der Anfangsbuchstabe ist 'P'. Da 'P' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Sinnesorgane",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim6-q05",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "P",
      "I",
      "T",
      "H",
      "E",
      "L",
      "E"
    ],
    "scrambledLetters": "P · I · T · H · E · L · E",
    "targetWord": "EPITHEL",
    "correctInitial": "E",
    "options": {
      "A": "P",
      "B": "T",
      "C": "E",
      "D": "H",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, H, I, L, P, T bildet sich das deutsche Substantiv 'EPITHEL'. Der gesuchte Anfangsbuchstabe ist 'E' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Histologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim6-q06",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "H",
      "A",
      "R",
      "Y",
      "N",
      "X",
      "P"
    ],
    "scrambledLetters": "H · A · R · Y · N · X · P",
    "targetWord": "PHARYNX",
    "correctInitial": "P",
    "options": {
      "A": "H",
      "B": "A",
      "C": "R",
      "D": "P",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, H, N, P, R, X, Y bildet sich das deutsche Substantiv 'PHARYNX'. Der gesuchte Anfangsbuchstabe ist 'P' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anatomie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim6-q07",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "A",
      "N",
      "K",
      "R",
      "E",
      "A",
      "S",
      "P"
    ],
    "scrambledLetters": "A · N · K · R · E · A · S · P",
    "targetWord": "PANKREAS",
    "correctInitial": "P",
    "options": {
      "A": "A",
      "B": "P",
      "C": "N",
      "D": "K",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, E, K, N, P, R, S bildet sich das deutsche Substantiv 'PANKREAS'. Der gesuchte Anfangsbuchstabe ist 'P' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Gastroenterologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim6-q08",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "R",
      "O",
      "N",
      "C",
      "H",
      "U",
      "S",
      "B"
    ],
    "scrambledLetters": "R · O · N · C · H · U · S · B",
    "targetWord": "BRONCHUS",
    "correctInitial": "B",
    "options": {
      "A": "B",
      "B": "R",
      "C": "O",
      "D": "N",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, C, H, N, O, R, S, U bildet sich das deutsche Substantiv 'BRONCHUS'. Der gesuchte Anfangsbuchstabe ist 'B' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pneumologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim6-q09",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "E",
      "P",
      "H",
      "R",
      "O",
      "N",
      "N"
    ],
    "scrambledLetters": "E · P · H · R · O · N · N",
    "targetWord": "NEPHRON",
    "correctInitial": "N",
    "options": {
      "A": "E",
      "B": "P",
      "C": "H",
      "D": "R",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'NEPHRON'. Der Anfangsbuchstabe ist 'N'. Da 'N' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Nephrologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim6-q10",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "Y",
      "O",
      "K",
      "A",
      "R",
      "D",
      "M"
    ],
    "scrambledLetters": "Y · O · K · A · R · D · M",
    "targetWord": "MYOKARD",
    "correctInitial": "M",
    "options": {
      "A": "Y",
      "B": "O",
      "C": "M",
      "D": "K",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, D, K, M, O, R, Y bildet sich das deutsche Substantiv 'MYOKARD'. Der gesuchte Anfangsbuchstabe ist 'M' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Kardiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim6-q11",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "N",
      "D",
      "O",
      "T",
      "H",
      "E",
      "L",
      "E"
    ],
    "scrambledLetters": "N · D · O · T · H · E · L · E",
    "targetWord": "ENDOTHEL",
    "correctInitial": "E",
    "options": {
      "A": "N",
      "B": "E",
      "C": "D",
      "D": "O",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, E, H, L, N, O, T bildet sich das deutsche Substantiv 'ENDOTHEL'. Der gesuchte Anfangsbuchstabe ist 'E' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Angiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim6-q12",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "E",
      "R",
      "I",
      "K",
      "A",
      "R",
      "D",
      "P"
    ],
    "scrambledLetters": "E · R · I · K · A · R · D · P",
    "targetWord": "PERIKARD",
    "correctInitial": "P",
    "options": {
      "A": "E",
      "B": "R",
      "C": "I",
      "D": "P",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, D, E, I, K, P, R, R bildet sich das deutsche Substantiv 'PERIKARD'. Der gesuchte Anfangsbuchstabe ist 'P' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Kardiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim6-q13",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "R",
      "G",
      "A",
      "N",
      "E",
      "L",
      "L",
      "E",
      "O"
    ],
    "scrambledLetters": "R · G · A · N · E · L · L · E · O",
    "targetWord": "ORGANELLE",
    "correctInitial": "O",
    "options": {
      "A": "O",
      "B": "R",
      "C": "G",
      "D": "A",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, E, G, L, L, N, O, R bildet sich das deutsche Substantiv 'ORGANELLE'. Der gesuchte Anfangsbuchstabe ist 'O' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zytologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim6-q14",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "I",
      "S",
      "T",
      "O",
      "L",
      "O",
      "G",
      "I",
      "E",
      "H"
    ],
    "scrambledLetters": "I · S · T · O · L · O · G · I · E · H",
    "targetWord": "HISTOLOGIE",
    "correctInitial": "H",
    "options": {
      "A": "I",
      "B": "S",
      "C": "T",
      "D": "O",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'HISTOLOGIE'. Der Anfangsbuchstabe ist 'H'. Da 'H' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Mikroskopie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim6-q15",
    "simulationId": "wf-sim6",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "Y",
      "T",
      "O",
      "P",
      "L",
      "A",
      "S",
      "M",
      "A",
      "Z"
    ],
    "scrambledLetters": "Y · T · O · P · L · A · S · M · A · Z",
    "targetWord": "ZYTOPLASMA",
    "correctInitial": "Z",
    "options": {
      "A": "Y",
      "B": "T",
      "C": "Z",
      "D": "O",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, L, M, O, P, S, T, Y, Z bildet sich das deutsche Substantiv 'ZYTOPLASMA'. Der gesuchte Anfangsbuchstabe ist 'Z' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zytologie",
      "Schwer"
    ]
  }
];
