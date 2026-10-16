import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 9
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_9_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim9-q01",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "L",
      "A",
      "C",
      "E",
      "B",
      "O",
      "P"
    ],
    "scrambledLetters": "L · A · C · E · B · O · P",
    "targetWord": "PLACEBO",
    "correctInitial": "P",
    "options": {
      "A": "L",
      "B": "P",
      "C": "A",
      "D": "C",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, C, E, L, O, P bildet sich das deutsche Substantiv 'PLACEBO'. Der gesuchte Anfangsbuchstabe ist 'P' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pharmakologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim9-q02",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "R",
      "O",
      "P",
      "F",
      "E",
      "N",
      "T"
    ],
    "scrambledLetters": "R · O · P · F · E · N · T",
    "targetWord": "TROPFEN",
    "correctInitial": "T",
    "options": {
      "A": "T",
      "B": "R",
      "C": "O",
      "D": "P",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, F, N, O, P, R, T bildet sich das deutsche Substantiv 'TROPFEN'. Der gesuchte Anfangsbuchstabe ist 'T' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Galenik",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim9-q03",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "E",
      "R",
      "B",
      "A",
      "N",
      "D",
      "V"
    ],
    "scrambledLetters": "E · R · B · A · N · D · V",
    "targetWord": "VERBAND",
    "correctInitial": "V",
    "options": {
      "A": "E",
      "B": "R",
      "C": "B",
      "D": "V",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, D, E, N, R, V bildet sich das deutsche Substantiv 'VERBAND'. Der gesuchte Anfangsbuchstabe ist 'V' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chirurgie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim9-q04",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "N",
      "T",
      "I",
      "D",
      "O",
      "T",
      "A"
    ],
    "scrambledLetters": "N · T · I · D · O · T · A",
    "targetWord": "ANTIDOT",
    "correctInitial": "A",
    "options": {
      "A": "N",
      "B": "T",
      "C": "I",
      "D": "D",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'ANTIDOT'. Der Anfangsbuchstabe ist 'A'. Da 'A' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Toxikologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim9-q05",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "I",
      "G",
      "A",
      "T",
      "U",
      "R",
      "L"
    ],
    "scrambledLetters": "I · G · A · T · U · R · L",
    "targetWord": "LIGATUR",
    "correctInitial": "L",
    "options": {
      "A": "I",
      "B": "G",
      "C": "L",
      "D": "A",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, G, I, L, R, T, U bildet sich das deutsche Substantiv 'LIGATUR'. Der gesuchte Anfangsbuchstabe ist 'L' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chirurgie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim9-q06",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "E",
      "D",
      "A",
      "T",
      "I",
      "O",
      "N",
      "S"
    ],
    "scrambledLetters": "E · D · A · T · I · O · N · S",
    "targetWord": "SEDATION",
    "correctInitial": "S",
    "options": {
      "A": "E",
      "B": "D",
      "C": "A",
      "D": "S",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, D, E, I, N, O, S, T bildet sich das deutsche Substantiv 'SEDATION'. Der gesuchte Anfangsbuchstabe ist 'S' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anästhesie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim9-q07",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "F",
      "L",
      "A",
      "S",
      "T",
      "E",
      "R",
      "P"
    ],
    "scrambledLetters": "F · L · A · S · T · E · R · P",
    "targetWord": "PFLASTER",
    "correctInitial": "P",
    "options": {
      "A": "F",
      "B": "P",
      "C": "L",
      "D": "A",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, F, L, P, R, S, T bildet sich das deutsche Substantiv 'PFLASTER'. Der gesuchte Anfangsbuchstabe ist 'P' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Wundversorgung",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim9-q08",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "A",
      "B",
      "L",
      "E",
      "T",
      "T",
      "E",
      "T"
    ],
    "scrambledLetters": "A · B · L · E · T · T · E · T",
    "targetWord": "TABLETTE",
    "correctInitial": "T",
    "options": {
      "A": "T",
      "B": "A",
      "C": "B",
      "D": "L",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, E, E, L, T, T, T bildet sich das deutsche Substantiv 'TABLETTE'. Der gesuchte Anfangsbuchstabe ist 'T' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pharmakologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim9-q09",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "U",
      "N",
      "K",
      "T",
      "I",
      "O",
      "N",
      "P"
    ],
    "scrambledLetters": "U · N · K · T · I · O · N · P",
    "targetWord": "PUNKTION",
    "correctInitial": "P",
    "options": {
      "A": "U",
      "B": "N",
      "C": "K",
      "D": "T",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'PUNKTION'. Der Anfangsbuchstabe ist 'P'. Da 'P' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Intervention",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim9-q10",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "M",
      "P",
      "L",
      "A",
      "N",
      "T",
      "A",
      "T",
      "I"
    ],
    "scrambledLetters": "M · P · L · A · N · T · A · T · I",
    "targetWord": "IMPLANTAT",
    "correctInitial": "I",
    "options": {
      "A": "M",
      "B": "P",
      "C": "I",
      "D": "L",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, I, L, M, N, P, T, T bildet sich das deutsche Substantiv 'IMPLANTAT'. Der gesuchte Anfangsbuchstabe ist 'I' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Prothetik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim9-q11",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "E",
      "S",
      "E",
      "K",
      "T",
      "I",
      "O",
      "N",
      "R"
    ],
    "scrambledLetters": "E · S · E · K · T · I · O · N · R",
    "targetWord": "RESEKTION",
    "correctInitial": "R",
    "options": {
      "A": "E",
      "B": "R",
      "C": "S",
      "D": "K",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, I, K, N, O, R, S, T bildet sich das deutsche Substantiv 'RESEKTION'. Der gesuchte Anfangsbuchstabe ist 'R' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chirurgie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim9-q12",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "E",
      "S",
      "I",
      "S",
      "T",
      "E",
      "N",
      "Z",
      "R"
    ],
    "scrambledLetters": "E · S · I · S · T · E · N · Z · R",
    "targetWord": "RESISTENZ",
    "correctInitial": "R",
    "options": {
      "A": "E",
      "B": "S",
      "C": "I",
      "D": "R",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, I, N, R, S, S, T, Z bildet sich das deutsche Substantiv 'RESISTENZ'. Der gesuchte Anfangsbuchstabe ist 'R' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Mikrobiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim9-q13",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "N",
      "H",
      "I",
      "B",
      "I",
      "T",
      "O",
      "R",
      "I"
    ],
    "scrambledLetters": "N · H · I · B · I · T · O · R · I",
    "targetWord": "INHIBITOR",
    "correctInitial": "I",
    "options": {
      "A": "I",
      "B": "N",
      "C": "H",
      "D": "B",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, H, I, I, I, N, O, R, T bildet sich das deutsche Substantiv 'INHIBITOR'. Der gesuchte Anfangsbuchstabe ist 'I' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pharmakologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim9-q14",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "N",
      "T",
      "U",
      "B",
      "A",
      "T",
      "I",
      "O",
      "N",
      "I"
    ],
    "scrambledLetters": "N · T · U · B · A · T · I · O · N · I",
    "targetWord": "INTUBATION",
    "correctInitial": "I",
    "options": {
      "A": "N",
      "B": "T",
      "C": "U",
      "D": "B",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'INTUBATION'. Der Anfangsbuchstabe ist 'I'. Da 'I' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Notfallmedizin",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim9-q15",
    "simulationId": "wf-sim9",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "R",
      "A",
      "N",
      "S",
      "F",
      "U",
      "S",
      "I",
      "O",
      "N",
      "T"
    ],
    "scrambledLetters": "R · A · N · S · F · U · S · I · O · N · T",
    "targetWord": "TRANSFUSION",
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
    "explanation": "Aus den Buchstaben A, F, I, N, N, O, R, S, S, T, U bildet sich das deutsche Substantiv 'TRANSFUSION'. Der gesuchte Anfangsbuchstabe ist 'T' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Hämatologie",
      "Schwer"
    ]
  }
];
