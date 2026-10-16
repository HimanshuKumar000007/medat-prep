import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 2
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_2_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim2-q01",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "E",
      "V",
      "L",
      "I",
      "T",
      "N"
    ],
    "scrambledLetters": "E · V · L · I · T · N",
    "targetWord": "VENTIL",
    "correctInitial": "V",
    "options": {
      "A": "N",
      "B": "V",
      "C": "T",
      "D": "L",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, I, L, N, T, V bildet sich das deutsche Substantiv 'VENTIL'. Der richtige Anfangsbuchstabe ist 'V' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Technik/Physiologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim2-q02",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "E",
      "R",
      "T",
      "P",
      "E",
      "Z"
    ],
    "scrambledLetters": "E · R · T · P · E · Z",
    "targetWord": "REZEPT",
    "correctInitial": "R",
    "options": {
      "A": "R",
      "B": "Z",
      "C": "P",
      "D": "T",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, E, P, R, T, Z bildet sich das deutsche Substantiv 'REZEPT'. Der richtige Anfangsbuchstabe ist 'R' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pharmazie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim2-q03",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "A",
      "K",
      "L",
      "E",
      "S",
      "P"
    ],
    "scrambledLetters": "A · K · L · E · S · P",
    "targetWord": "KAPSEL",
    "correctInitial": "K",
    "options": {
      "A": "P",
      "B": "S",
      "C": "L",
      "D": "K",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, K, L, P, S bildet sich das deutsche Substantiv 'KAPSEL'. Der richtige Anfangsbuchstabe ist 'K' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pharmazie/Anatomie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim2-q04",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "I",
      "F",
      "R",
      "E",
      "B",
      "E"
    ],
    "scrambledLetters": "I · F · R · E · B · E",
    "targetWord": "FIEBER",
    "correctInitial": "F",
    "options": {
      "A": "B",
      "B": "R",
      "C": "E",
      "D": "I",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, E, E, F, I, R bildet sich das deutsche Substantiv 'FIEBER'. Der Anfangsbuchstabe ist 'F'. Da 'F' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Symptome",
      "Leicht",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim2-q05",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "Y",
      "E",
      "P",
      "N",
      "S",
      "S",
      "A"
    ],
    "scrambledLetters": "Y · E · P · N · S · S · A",
    "targetWord": "SYNAPSE",
    "correctInitial": "S",
    "options": {
      "A": "Y",
      "B": "N",
      "C": "S",
      "D": "P",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, N, P, S, S, Y bildet sich das deutsche Substantiv 'SYNAPSE'. Der richtige Anfangsbuchstabe ist 'S' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Neurobiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim2-q06",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "N",
      "N",
      "G",
      "T",
      "A",
      "E",
      "I"
    ],
    "scrambledLetters": "N · N · G · T · A · E · I",
    "targetWord": "ANTIGEN",
    "correctInitial": "A",
    "options": {
      "A": "N",
      "B": "T",
      "C": "G",
      "D": "A",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, G, I, N, N, T bildet sich das deutsche Substantiv 'ANTIGEN'. Der richtige Anfangsbuchstabe ist 'A' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Immunologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim2-q07",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "I",
      "E",
      "S",
      "O",
      "B",
      "I",
      "P"
    ],
    "scrambledLetters": "I · E · S · O · B · I · P",
    "targetWord": "BIOPSIE",
    "correctInitial": "B",
    "options": {
      "A": "P",
      "B": "B",
      "C": "S",
      "D": "O",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, E, I, I, O, P, S bildet sich das deutsche Substantiv 'BIOPSIE'. Der richtige Anfangsbuchstabe ist 'B' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Pathologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim2-q08",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "L",
      "E",
      "O",
      "U",
      "G",
      "S",
      "K"
    ],
    "scrambledLetters": "L · E · O · U · G · S · K",
    "targetWord": "GLUKOSE",
    "correctInitial": "G",
    "options": {
      "A": "G",
      "B": "L",
      "C": "K",
      "D": "S",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, G, K, L, O, S, U bildet sich das deutsche Substantiv 'GLUKOSE'. Der richtige Anfangsbuchstabe ist 'G' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim2-q09",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "E",
      "N",
      "N",
      "O",
      "R",
      "U"
    ],
    "scrambledLetters": "E · N · N · O · R · U",
    "targetWord": "NEURON",
    "correctInitial": "N",
    "options": {
      "A": "R",
      "B": "O",
      "C": "U",
      "D": "E",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, N, N, O, R, U bildet sich das deutsche Substantiv 'NEURON'. Der Anfangsbuchstabe ist 'N'. Da 'N' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Neuroanatomie",
      "Mittel",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim2-q10",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "R",
      "N",
      "E",
      "O",
      "P",
      "I",
      "T"
    ],
    "scrambledLetters": "R · N · E · O · P · I · T",
    "targetWord": "PROTEIN",
    "correctInitial": "P",
    "options": {
      "A": "R",
      "B": "T",
      "C": "P",
      "D": "N",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, I, N, O, P, R, T bildet sich das deutsche Substantiv 'PROTEIN'. Der richtige Anfangsbuchstabe ist 'P' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Biochemie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim2-q11",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "A",
      "I",
      "T",
      "B",
      "R",
      "K",
      "E",
      "E"
    ],
    "scrambledLetters": "A · I · T · B · R · K · E · E",
    "targetWord": "BAKTERIE",
    "correctInitial": "B",
    "options": {
      "A": "K",
      "B": "B",
      "C": "T",
      "D": "R",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, E, E, I, K, R, T bildet sich das deutsche Substantiv 'BAKTERIE'. Der richtige Anfangsbuchstabe ist 'B' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Mikrobiologie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim2-q12",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "N",
      "O",
      "U",
      "I",
      "I",
      "F",
      "N",
      "S"
    ],
    "scrambledLetters": "N · O · U · I · I · F · N · S",
    "targetWord": "INFUSION",
    "correctInitial": "I",
    "options": {
      "A": "N",
      "B": "F",
      "C": "S",
      "D": "I",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben F, I, I, N, N, O, S, U bildet sich das deutsche Substantiv 'INFUSION'. Der richtige Anfangsbuchstabe ist 'I' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim2-q13",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "U",
      "N",
      "S",
      "S",
      "A",
      "B",
      "Z",
      "T"
    ],
    "scrambledLetters": "U · N · S · S · A · B · Z · T",
    "targetWord": "SUBSTANZ",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "B",
      "C": "T",
      "D": "Z",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, N, S, S, T, U, Z bildet sich das deutsche Substantiv 'SUBSTANZ'. Der richtige Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Chemie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim2-q14",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "H",
      "I",
      "R",
      "T",
      "P",
      "E",
      "E",
      "A"
    ],
    "scrambledLetters": "H · I · R · T · P · E · E · A",
    "targetWord": "THERAPIE",
    "correctInitial": "T",
    "options": {
      "A": "H",
      "B": "R",
      "C": "P",
      "D": "E",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, E, E, H, I, P, R, T bildet sich das deutsche Substantiv 'THERAPIE'. Der Anfangsbuchstabe ist 'T'. Da 'T' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Klinik",
      "Schwer",
      "Option-E"
    ]
  },
  {
    "id": "wf-sim2-q15",
    "simulationId": "wf-sim2",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "H",
      "S",
      "R",
      "O",
      "O",
      "M",
      "M",
      "C",
      "O"
    ],
    "scrambledLetters": "H · S · R · O · O · M · M · C · O",
    "targetWord": "CHROMOSOM",
    "correctInitial": "C",
    "options": {
      "A": "H",
      "B": "R",
      "C": "C",
      "D": "M",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben C, H, M, M, O, O, O, R, S bildet sich das deutsche Substantiv 'CHROMOSOM'. Der richtige Anfangsbuchstabe ist 'C' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Genetik",
      "Schwer"
    ]
  }
];
