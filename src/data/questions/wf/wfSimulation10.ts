import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 10
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_10_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim10-q01",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "I",
      "T",
      "O",
      "S",
      "E",
      "M"
    ],
    "scrambledLetters": "I · T · O · S · E · M",
    "targetWord": "MITOSE",
    "correctInitial": "M",
    "options": {
      "A": "I",
      "B": "M",
      "C": "T",
      "D": "O",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, I, M, O, S, T bildet sich das deutsche Substantiv 'MITOSE'. Der gesuchte Anfangsbuchstabe ist 'M' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zytologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim10-q02",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "E",
      "I",
      "O",
      "S",
      "E",
      "M"
    ],
    "scrambledLetters": "E · I · O · S · E · M",
    "targetWord": "MEIOSE",
    "correctInitial": "M",
    "options": {
      "A": "M",
      "B": "E",
      "C": "I",
      "D": "O",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, I, M, O, S bildet sich das deutsche Substantiv 'MEIOSE'. Der gesuchte Anfangsbuchstabe ist 'M' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Genetik",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim10-q03",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "E",
      "K",
      "T",
      "O",
      "R",
      "V"
    ],
    "scrambledLetters": "E · K · T · O · R · V",
    "targetWord": "VEKTOR",
    "correctInitial": "V",
    "options": {
      "A": "E",
      "B": "K",
      "C": "T",
      "D": "V",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, K, O, R, T, V bildet sich das deutsche Substantiv 'VEKTOR'. Der gesuchte Anfangsbuchstabe ist 'V' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Gentechnik",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim10-q04",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "Y",
      "G",
      "O",
      "T",
      "E",
      "Z"
    ],
    "scrambledLetters": "Y · G · O · T · E · Z",
    "targetWord": "ZYGOTE",
    "correctInitial": "Z",
    "options": {
      "A": "Y",
      "B": "G",
      "C": "O",
      "D": "T",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'ZYGOTE'. Der Anfangsbuchstabe ist 'Z'. Da 'Z' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Embryologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim10-q05",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "L",
      "A",
      "S",
      "M",
      "I",
      "D",
      "P"
    ],
    "scrambledLetters": "L · A · S · M · I · D · P",
    "targetWord": "PLASMID",
    "correctInitial": "P",
    "options": {
      "A": "L",
      "B": "A",
      "C": "P",
      "D": "S",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, D, I, L, M, P, S bildet sich das deutsche Substantiv 'PLASMID'. Der gesuchte Anfangsbuchstabe ist 'P' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Genetik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim10-q06",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "E",
      "L",
      "O",
      "M",
      "E",
      "R",
      "T"
    ],
    "scrambledLetters": "E · L · O · M · E · R · T",
    "targetWord": "TELOMER",
    "correctInitial": "T",
    "options": {
      "A": "E",
      "B": "L",
      "C": "O",
      "D": "T",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, L, M, O, R, T bildet sich das deutsche Substantiv 'TELOMER'. Der gesuchte Anfangsbuchstabe ist 'T' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zytogenetik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim10-q07",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "E",
      "N",
      "L",
      "O",
      "K",
      "U",
      "S",
      "G"
    ],
    "scrambledLetters": "E · N · L · O · K · U · S · G",
    "targetWord": "GENLOKUS",
    "correctInitial": "G",
    "options": {
      "A": "E",
      "B": "G",
      "C": "N",
      "D": "L",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, G, K, L, N, O, S, U bildet sich das deutsche Substantiv 'GENLOKUS'. Der gesuchte Anfangsbuchstabe ist 'G' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Genetik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim10-q08",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "N",
      "A",
      "T",
      "O",
      "M",
      "I",
      "E",
      "A"
    ],
    "scrambledLetters": "N · A · T · O · M · I · E · A",
    "targetWord": "ANATOMIE",
    "correctInitial": "A",
    "options": {
      "A": "A",
      "B": "N",
      "C": "T",
      "D": "O",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, E, I, M, N, O, T bildet sich das deutsche Substantiv 'ANATOMIE'. Der gesuchte Anfangsbuchstabe ist 'A' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Morphologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim10-q09",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "V",
      "O",
      "L",
      "U",
      "T",
      "I",
      "O",
      "N",
      "E"
    ],
    "scrambledLetters": "V · O · L · U · T · I · O · N · E",
    "targetWord": "EVOLUTION",
    "correctInitial": "E",
    "options": {
      "A": "V",
      "B": "O",
      "C": "L",
      "D": "U",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'EVOLUTION'. Der Anfangsbuchstabe ist 'E'. Da 'E' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Evolutionsbiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim10-q10",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "O",
      "M",
      "O",
      "L",
      "O",
      "G",
      "I",
      "E",
      "H"
    ],
    "scrambledLetters": "O · M · O · L · O · G · I · E · H",
    "targetWord": "HOMOLOGIE",
    "correctInitial": "H",
    "options": {
      "A": "O",
      "B": "M",
      "C": "H",
      "D": "L",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, G, H, I, L, M, O, O, O bildet sich das deutsche Substantiv 'HOMOLOGIE'. Der gesuchte Anfangsbuchstabe ist 'H' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Phylogenetik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim10-q11",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "E",
      "R",
      "E",
      "R",
      "B",
      "U",
      "N",
      "G",
      "V"
    ],
    "scrambledLetters": "E · R · E · R · B · U · N · G · V",
    "targetWord": "VERERBUNG",
    "correctInitial": "V",
    "options": {
      "A": "E",
      "B": "V",
      "C": "R",
      "D": "B",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, E, E, G, N, R, R, U, V bildet sich das deutsche Substantiv 'VERERBUNG'. Der gesuchte Anfangsbuchstabe ist 'V' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Genetik",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim10-q12",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "U",
      "K",
      "L",
      "E",
      "O",
      "T",
      "I",
      "D",
      "N"
    ],
    "scrambledLetters": "U · K · L · E · O · T · I · D · N",
    "targetWord": "NUKLEOTID",
    "correctInitial": "N",
    "options": {
      "A": "U",
      "B": "K",
      "C": "L",
      "D": "N",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben D, E, I, K, L, N, O, T, U bildet sich das deutsche Substantiv 'NUKLEOTID'. Der gesuchte Anfangsbuchstabe ist 'N' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Molekularbiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim10-q13",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "E",
      "N",
      "T",
      "R",
      "O",
      "M",
      "E",
      "R",
      "Z"
    ],
    "scrambledLetters": "E · N · T · R · O · M · E · R · Z",
    "targetWord": "ZENTROMER",
    "correctInitial": "Z",
    "options": {
      "A": "Z",
      "B": "E",
      "C": "N",
      "D": "T",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, M, N, O, R, R, T, Z bildet sich das deutsche Substantiv 'ZENTROMER'. Der gesuchte Anfangsbuchstabe ist 'Z' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Zytogenetik",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim10-q14",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "R",
      "A",
      "N",
      "S",
      "P",
      "O",
      "S",
      "O",
      "N",
      "T"
    ],
    "scrambledLetters": "R · A · N · S · P · O · S · O · N · T",
    "targetWord": "TRANSPOSON",
    "correctInitial": "T",
    "options": {
      "A": "R",
      "B": "A",
      "C": "N",
      "D": "S",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'TRANSPOSON'. Der Anfangsbuchstabe ist 'T'. Da 'T' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Molekulargenetik",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim10-q15",
    "simulationId": "wf-sim10",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "O",
      "L",
      "Y",
      "M",
      "O",
      "R",
      "P",
      "H",
      "I",
      "E",
      "P"
    ],
    "scrambledLetters": "O · L · Y · M · O · R · P · H · I · E · P",
    "targetWord": "POLYMORPHIE",
    "correctInitial": "P",
    "options": {
      "A": "O",
      "B": "L",
      "C": "P",
      "D": "Y",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, H, I, L, M, O, O, P, P, R, Y bildet sich das deutsche Substantiv 'POLYMORPHIE'. Der gesuchte Anfangsbuchstabe ist 'P' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Populationsgenetik",
      "Schwer"
    ]
  }
];
