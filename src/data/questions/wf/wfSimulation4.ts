import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 4
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_4_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim4-q01",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "U",
      "P",
      "R",
      "E",
      "V",
      "L"
    ],
    "scrambledLetters": "U · P · R · E · V · L",
    "targetWord": "PULVER",
    "correctInitial": "P",
    "options": {
      "A": "U",
      "B": "P",
      "C": "L",
      "D": "V",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, L, P, R, U, V bildet sich das deutsche Substantiv 'PULVER'. Der richtige Anfangsbuchstabe ist 'P' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pharmazie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim4-q02",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "C",
      "Z",
      "E",
      "H",
      "S",
      "R",
      "M"
    ],
    "scrambledLetters": "C · Z · E · H · S · R · M",
    "targetWord": "SCHMERZ",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "C",
      "C": "H",
      "D": "M",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben C, E, H, M, R, S, Z bildet sich das deutsche Substantiv 'SCHMERZ'. Der richtige Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Symptome",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim4-q03",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "M",
      "G",
      "U",
      "P",
      "I",
      "N",
      "F"
    ],
    "scrambledLetters": "M · G · U · P · I · N · F",
    "targetWord": "IMPFUNG",
    "correctInitial": "I",
    "options": {
      "A": "M",
      "B": "P",
      "C": "F",
      "D": "I",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben F, G, I, M, N, P, U bildet sich das deutsche Substantiv 'IMPFUNG'. Der richtige Anfangsbuchstabe ist 'I' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Immunologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim4-q04",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "A",
      "E",
      "O",
      "R",
      "N",
      "S",
      "K"
    ],
    "scrambledLetters": "A · E · O · R · N · S · K",
    "targetWord": "NARKOSE",
    "correctInitial": "N",
    "options": {
      "A": "A",
      "B": "R",
      "C": "K",
      "D": "S",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, K, N, O, R, S bildet sich das deutsche Substantiv 'NARKOSE'. Der Anfangsbuchstabe ist 'N'. Da 'N' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anästhesie",
      "Leicht",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim4-q05",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "E",
      "N",
      "R",
      "M",
      "M",
      "A",
      "B"
    ],
    "scrambledLetters": "E · N · R · M · M · A · B",
    "targetWord": "MEMBRAN",
    "correctInitial": "M",
    "options": {
      "A": "E",
      "B": "B",
      "C": "M",
      "D": "R",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, E, M, M, N, R bildet sich das deutsche Substantiv 'MEMBRAN'. Der richtige Anfangsbuchstabe ist 'M' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zellbiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim4-q06",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "E",
      "L",
      "K",
      "S",
      "V",
      "E",
      "I"
    ],
    "scrambledLetters": "E · L · K · S · V · E · I",
    "targetWord": "VESIKEL",
    "correctInitial": "V",
    "options": {
      "A": "E",
      "B": "S",
      "C": "I",
      "D": "V",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, I, K, L, S, V bildet sich das deutsche Substantiv 'VESIKEL'. Der richtige Anfangsbuchstabe ist 'V' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zellbiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim4-q07",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "I",
      "M",
      "S",
      "B",
      "R",
      "O",
      "O"
    ],
    "scrambledLetters": "I · M · S · B · R · O · O",
    "targetWord": "RIBOSOM",
    "correctInitial": "R",
    "options": {
      "A": "I",
      "B": "R",
      "C": "B",
      "D": "O",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, I, M, O, O, R, S bildet sich das deutsche Substantiv 'RIBOSOM'. Der richtige Anfangsbuchstabe ist 'R' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zellbiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim4-q08",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "U",
      "S",
      "E",
      "K",
      "N",
      "U",
      "L"
    ],
    "scrambledLetters": "U · S · E · K · N · U · L",
    "targetWord": "NUKLEUS",
    "correctInitial": "N",
    "options": {
      "A": "N",
      "B": "U",
      "C": "K",
      "D": "L",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, K, L, N, S, U, U bildet sich das deutsche Substantiv 'NUKLEUS'. Der richtige Anfangsbuchstabe ist 'N' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zellbiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim4-q09",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "P",
      "E",
      "T",
      "R",
      "S",
      "Z",
      "I"
    ],
    "scrambledLetters": "P · E · T · R · S · Z · I",
    "targetWord": "SPRITZE",
    "correctInitial": "S",
    "options": {
      "A": "P",
      "B": "R",
      "C": "I",
      "D": "T",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, I, P, R, S, T, Z bildet sich das deutsche Substantiv 'SPRITZE'. Der Anfangsbuchstabe ist 'S'. Da 'S' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Mittel",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim4-q10",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "M",
      "E",
      "L",
      "P",
      "A",
      "L",
      "U"
    ],
    "scrambledLetters": "M · E · L · P · A · L · U",
    "targetWord": "AMPULLE",
    "correctInitial": "A",
    "options": {
      "A": "M",
      "B": "P",
      "C": "A",
      "D": "L",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, L, L, M, P, U bildet sich das deutsche Substantiv 'AMPULLE'. Der richtige Anfangsbuchstabe ist 'A' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pharmazie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim4-q11",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "K",
      "L",
      "L",
      "S",
      "E",
      "A",
      "L",
      "P"
    ],
    "scrambledLetters": "K · L · L · S · E · A · L · P",
    "targetWord": "SKALPELL",
    "correctInitial": "S",
    "options": {
      "A": "K",
      "B": "S",
      "C": "A",
      "D": "L",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, K, L, L, L, P, S bildet sich das deutsche Substantiv 'SKALPELL'. Der richtige Anfangsbuchstabe ist 'S' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chirurgie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim4-q12",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "I",
      "T",
      "Z",
      "P",
      "T",
      "N",
      "E",
      "E"
    ],
    "scrambledLetters": "I · T · Z · P · T · N · E · E",
    "targetWord": "PINZETTE",
    "correctInitial": "P",
    "options": {
      "A": "I",
      "B": "N",
      "C": "Z",
      "D": "P",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, I, N, P, T, T, Z bildet sich das deutsche Substantiv 'PINZETTE'. Der richtige Anfangsbuchstabe ist 'P' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chirurgie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim4-q13",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "R",
      "G",
      "I",
      "D",
      "A",
      "A",
      "E",
      "N"
    ],
    "scrambledLetters": "R · G · I · D · A · A · E · N",
    "targetWord": "DRAINAGE",
    "correctInitial": "D",
    "options": {
      "A": "D",
      "B": "R",
      "C": "A",
      "D": "G",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, D, E, G, I, N, R bildet sich das deutsche Substantiv 'DRAINAGE'. Der richtige Anfangsbuchstabe ist 'D' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chirurgie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim4-q14",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "P",
      "I",
      "D",
      "E",
      "M",
      "I",
      "E",
      "E"
    ],
    "scrambledLetters": "P · I · D · E · M · I · E · E",
    "targetWord": "EPIDEMIE",
    "correctInitial": "E",
    "options": {
      "A": "P",
      "B": "I",
      "C": "D",
      "D": "M",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, E, E, I, I, M, P bildet sich das deutsche Substantiv 'EPIDEMIE'. Der Anfangsbuchstabe ist 'E'. Da 'E' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Epidemiologie",
      "Schwer",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim4-q15",
    "simulationId": "wf-sim4",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "E",
      "I",
      "L",
      "O",
      "E",
      "N",
      "K",
      "S",
      "T"
    ],
    "scrambledLetters": "E · I · L · O · E · N · K · S · T",
    "targetWord": "SELEKTION",
    "correctInitial": "S",
    "options": {
      "A": "E",
      "B": "L",
      "C": "S",
      "D": "K",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, I, K, L, N, O, S, T bildet sich das deutsche Substantiv 'SELEKTION'. Der richtige Anfangsbuchstabe ist 'S' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Evolution",
      "Schwer"
    ]
  }
];
