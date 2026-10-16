import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 7
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_7_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim7-q01",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "E",
      "P",
      "T",
      "I",
      "D",
      "P"
    ],
    "scrambledLetters": "E · P · T · I · D · P",
    "targetWord": "PEPTID",
    "correctInitial": "P",
    "options": {
      "A": "E",
      "B": "P",
      "C": "T",
      "D": "I",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, I, P, P, T bildet sich das deutsche Substantiv 'PEPTID'. Der gesuchte Anfangsbuchstabe ist 'P' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim7-q02",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "A",
      "K",
      "T",
      "A",
      "T",
      "L"
    ],
    "scrambledLetters": "A · K · T · A · T · L",
    "targetWord": "LAKTAT",
    "correctInitial": "L",
    "options": {
      "A": "L",
      "B": "A",
      "C": "K",
      "D": "T",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, K, L, T, T bildet sich das deutsche Substantiv 'LAKTAT'. Der gesuchte Anfangsbuchstabe ist 'L' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Stoffwechsel",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim7-q03",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "T",
      "E",
      "R",
      "O",
      "I",
      "D",
      "S"
    ],
    "scrambledLetters": "T · E · R · O · I · D · S",
    "targetWord": "STEROID",
    "correctInitial": "S",
    "options": {
      "A": "T",
      "B": "E",
      "C": "R",
      "D": "S",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, I, O, R, S, T bildet sich das deutsche Substantiv 'STEROID'. Der gesuchte Anfangsbuchstabe ist 'S' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Endokrinologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim7-q04",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "L",
      "B",
      "U",
      "M",
      "I",
      "N",
      "A"
    ],
    "scrambledLetters": "L · B · U · M · I · N · A",
    "targetWord": "ALBUMIN",
    "correctInitial": "A",
    "options": {
      "A": "L",
      "B": "B",
      "C": "U",
      "D": "M",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'ALBUMIN'. Der Anfangsbuchstabe ist 'A'. Da 'A' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Proteine",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim7-q05",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "E",
      "R",
      "M",
      "E",
      "N",
      "T",
      "F"
    ],
    "scrambledLetters": "E · R · M · E · N · T · F",
    "targetWord": "FERMENT",
    "correctInitial": "F",
    "options": {
      "A": "E",
      "B": "R",
      "C": "F",
      "D": "M",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, F, M, N, R, T bildet sich das deutsche Substantiv 'FERMENT'. Der gesuchte Anfangsbuchstabe ist 'F' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Enzymologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim7-q06",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "O",
      "L",
      "Y",
      "M",
      "E",
      "R",
      "P"
    ],
    "scrambledLetters": "O · L · Y · M · E · R · P",
    "targetWord": "POLYMER",
    "correctInitial": "P",
    "options": {
      "A": "O",
      "B": "L",
      "C": "Y",
      "D": "P",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, L, M, O, P, R, Y bildet sich das deutsche Substantiv 'POLYMER'. Der gesuchte Anfangsbuchstabe ist 'P' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chemie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim7-q07",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "O",
      "N",
      "O",
      "M",
      "E",
      "R",
      "M"
    ],
    "scrambledLetters": "O · N · O · M · E · R · M",
    "targetWord": "MONOMER",
    "correctInitial": "M",
    "options": {
      "A": "O",
      "B": "M",
      "C": "N",
      "D": "E",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, M, M, N, O, O, R bildet sich das deutsche Substantiv 'MONOMER'. Der gesuchte Anfangsbuchstabe ist 'M' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chemie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim7-q08",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "I",
      "P",
      "O",
      "S",
      "O",
      "M",
      "L"
    ],
    "scrambledLetters": "I · P · O · S · O · M · L",
    "targetWord": "LIPOSOM",
    "correctInitial": "L",
    "options": {
      "A": "L",
      "B": "I",
      "C": "P",
      "D": "O",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben I, L, M, O, O, P, S bildet sich das deutsche Substantiv 'LIPOSOM'. Der gesuchte Anfangsbuchstabe ist 'L' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zytologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim7-q09",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "L",
      "Y",
      "K",
      "O",
      "G",
      "E",
      "N",
      "G"
    ],
    "scrambledLetters": "L · Y · K · O · G · E · N · G",
    "targetWord": "GLYKOGEN",
    "correctInitial": "G",
    "options": {
      "A": "L",
      "B": "Y",
      "C": "K",
      "D": "O",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'GLYKOGEN'. Der Anfangsbuchstabe ist 'G'. Da 'G' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Stoffwechsel",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim7-q10",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "U",
      "B",
      "S",
      "T",
      "R",
      "A",
      "T",
      "S"
    ],
    "scrambledLetters": "U · B · S · T · R · A · T · S",
    "targetWord": "SUBSTRAT",
    "correctInitial": "S",
    "options": {
      "A": "U",
      "B": "B",
      "C": "S",
      "D": "T",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, R, S, S, T, T, U bildet sich das deutsche Substantiv 'SUBSTRAT'. Der gesuchte Anfangsbuchstabe ist 'S' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Kinetik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim7-q11",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "E",
      "T",
      "A",
      "B",
      "O",
      "L",
      "I",
      "T",
      "M"
    ],
    "scrambledLetters": "E · T · A · B · O · L · I · T · M",
    "targetWord": "METABOLIT",
    "correctInitial": "M",
    "options": {
      "A": "E",
      "B": "M",
      "C": "T",
      "D": "A",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, E, I, L, M, O, T, T bildet sich das deutsche Substantiv 'METABOLIT'. Der gesuchte Anfangsbuchstabe ist 'M' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Stoffwechsel",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim7-q12",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "X",
      "I",
      "D",
      "A",
      "T",
      "I",
      "O",
      "N",
      "O"
    ],
    "scrambledLetters": "X · I · D · A · T · I · O · N · O",
    "targetWord": "OXIDATION",
    "correctInitial": "O",
    "options": {
      "A": "X",
      "B": "I",
      "C": "D",
      "D": "O",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, D, I, I, N, O, O, T, X bildet sich das deutsche Substantiv 'OXIDATION'. Der gesuchte Anfangsbuchstabe ist 'O' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim7-q13",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "E",
      "D",
      "U",
      "K",
      "T",
      "I",
      "O",
      "N",
      "R"
    ],
    "scrambledLetters": "E · D · U · K · T · I · O · N · R",
    "targetWord": "REDUKTION",
    "correctInitial": "R",
    "options": {
      "A": "R",
      "B": "E",
      "C": "D",
      "D": "U",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, I, K, N, O, R, T, U bildet sich das deutsche Substantiv 'REDUKTION'. Der gesuchte Anfangsbuchstabe ist 'R' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim7-q14",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "L",
      "Y",
      "K",
      "O",
      "L",
      "Y",
      "S",
      "E",
      "G"
    ],
    "scrambledLetters": "L · Y · K · O · L · Y · S · E · G",
    "targetWord": "GLYKOLYSE",
    "correctInitial": "G",
    "options": {
      "A": "L",
      "B": "Y",
      "C": "K",
      "D": "O",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'GLYKOLYSE'. Der Anfangsbuchstabe ist 'G'. Da 'G' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim7-q15",
    "simulationId": "wf-sim7",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "A",
      "T",
      "A",
      "L",
      "Y",
      "S",
      "A",
      "T",
      "O",
      "R",
      "K"
    ],
    "scrambledLetters": "A · T · A · L · Y · S · A · T · O · R · K",
    "targetWord": "KATALYSATOR",
    "correctInitial": "K",
    "options": {
      "A": "A",
      "B": "T",
      "C": "K",
      "D": "L",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, A, K, L, O, R, S, T, T, Y bildet sich das deutsche Substantiv 'KATALYSATOR'. Der gesuchte Anfangsbuchstabe ist 'K' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Katalyse",
      "Schwer"
    ]
  }
];
