import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation 8
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_8_QUESTIONS: WfQuestionData[] = [
  {
    "id": "wf-sim8-q01",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 1,
    "letters": [
      "N",
      "G",
      "I",
      "N",
      "A",
      "A"
    ],
    "scrambledLetters": "N · G · I · N · A · A",
    "targetWord": "ANGINA",
    "correctInitial": "A",
    "options": {
      "A": "N",
      "B": "A",
      "C": "G",
      "D": "I",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, G, I, N, N bildet sich das deutsche Substantiv 'ANGINA'. Der gesuchte Anfangsbuchstabe ist 'A' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Kardiologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim8-q02",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 2,
    "letters": [
      "P",
      "U",
      "T",
      "U",
      "M",
      "S"
    ],
    "scrambledLetters": "P · U · T · U · M · S",
    "targetWord": "SPUTUM",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "P",
      "C": "U",
      "D": "T",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben M, P, S, T, U, U bildet sich das deutsche Substantiv 'SPUTUM'. Der gesuchte Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Diagnostik",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim8-q03",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 3,
    "letters": [
      "R",
      "E",
      "M",
      "O",
      "R",
      "T"
    ],
    "scrambledLetters": "R · E · M · O · R · T",
    "targetWord": "TREMOR",
    "correctInitial": "T",
    "options": {
      "A": "R",
      "B": "E",
      "C": "M",
      "D": "T",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, M, O, R, R, T bildet sich das deutsche Substantiv 'TREMOR'. Der gesuchte Anfangsbuchstabe ist 'T' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Neurologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim8-q04",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 4,
    "letters": [
      "E",
      "P",
      "S",
      "I",
      "S",
      "S"
    ],
    "scrambledLetters": "E · P · S · I · S · S",
    "targetWord": "SEPSIS",
    "correctInitial": "S",
    "options": {
      "A": "E",
      "B": "P",
      "C": "I",
      "D": "T",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Leicht",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'SEPSIS'. Der Anfangsbuchstabe ist 'S'. Da 'S' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Infektiologie",
      "Leicht"
    ]
  },
  {
    "id": "wf-sim8-q05",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 5,
    "letters": [
      "Y",
      "M",
      "P",
      "T",
      "O",
      "M",
      "S"
    ],
    "scrambledLetters": "Y · M · P · T · O · M · S",
    "targetWord": "SYMPTOM",
    "correctInitial": "S",
    "options": {
      "A": "Y",
      "B": "M",
      "C": "S",
      "D": "P",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben M, M, O, P, S, T, Y bildet sich das deutsche Substantiv 'SYMPTOM'. Der gesuchte Anfangsbuchstabe ist 'S' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Diagnostik",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim8-q06",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 6,
    "letters": [
      "Y",
      "N",
      "K",
      "O",
      "P",
      "E",
      "S"
    ],
    "scrambledLetters": "Y · N · K · O · P · E · S",
    "targetWord": "SYNKOPE",
    "correctInitial": "S",
    "options": {
      "A": "Y",
      "B": "N",
      "C": "K",
      "D": "S",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, K, N, O, P, S, Y bildet sich das deutsche Substantiv 'SYNKOPE'. Der gesuchte Anfangsbuchstabe ist 'S' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Kardiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim8-q07",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 7,
    "letters": [
      "M",
      "B",
      "O",
      "L",
      "I",
      "E",
      "E"
    ],
    "scrambledLetters": "M · B · O · L · I · E · E",
    "targetWord": "EMBOLIE",
    "correctInitial": "E",
    "options": {
      "A": "M",
      "B": "E",
      "C": "B",
      "D": "O",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, E, E, I, L, M, O bildet sich das deutsche Substantiv 'EMBOLIE'. Der gesuchte Anfangsbuchstabe ist 'E' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Gefäßchirurgie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim8-q08",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 8,
    "letters": [
      "H",
      "O",
      "L",
      "E",
      "R",
      "A",
      "C"
    ],
    "scrambledLetters": "H · O · L · E · R · A · C",
    "targetWord": "CHOLERA",
    "correctInitial": "C",
    "options": {
      "A": "C",
      "B": "H",
      "C": "O",
      "D": "L",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, C, E, H, L, O, R bildet sich das deutsche Substantiv 'CHOLERA'. Der gesuchte Anfangsbuchstabe ist 'C' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Infektiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim8-q09",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 9,
    "letters": [
      "E",
      "T",
      "A",
      "N",
      "U",
      "S",
      "T"
    ],
    "scrambledLetters": "E · T · A · N · U · S · T",
    "targetWord": "TETANUS",
    "correctInitial": "T",
    "options": {
      "A": "E",
      "B": "A",
      "C": "N",
      "D": "U",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'TETANUS'. Der Anfangsbuchstabe ist 'T'. Da 'T' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Mikrobiologie",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim8-q10",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 10,
    "letters": [
      "B",
      "S",
      "T",
      "R",
      "I",
      "C",
      "H",
      "A"
    ],
    "scrambledLetters": "B · S · T · R · I · C · H · A",
    "targetWord": "ABSTRICH",
    "correctInitial": "A",
    "options": {
      "A": "B",
      "B": "S",
      "C": "A",
      "D": "T",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Mittel",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, B, C, H, I, R, S, T bildet sich das deutsche Substantiv 'ABSTRICH'. Der gesuchte Anfangsbuchstabe ist 'A' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Labor",
      "Mittel"
    ]
  },
  {
    "id": "wf-sim8-q11",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 11,
    "letters": [
      "I",
      "O",
      "C",
      "H",
      "E",
      "M",
      "I",
      "E",
      "B"
    ],
    "scrambledLetters": "I · O · C · H · E · M · I · E · B",
    "targetWord": "BIOCHEMIE",
    "correctInitial": "B",
    "options": {
      "A": "I",
      "B": "B",
      "C": "O",
      "D": "C",
      "E": null
    },
    "correctAnswer": "B",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, C, E, E, H, I, I, M, O bildet sich das deutsche Substantiv 'BIOCHEMIE'. Der gesuchte Anfangsbuchstabe ist 'B' (Option B).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Labor",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim8-q12",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 12,
    "letters": [
      "A",
      "T",
      "A",
      "R",
      "A",
      "K",
      "T",
      "K"
    ],
    "scrambledLetters": "A · T · A · R · A · K · T · K",
    "targetWord": "KATARAKT",
    "correctInitial": "K",
    "options": {
      "A": "A",
      "B": "T",
      "C": "R",
      "D": "K",
      "E": null
    },
    "correctAnswer": "D",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben A, A, A, K, K, R, T, T bildet sich das deutsche Substantiv 'KATARAKT'. Der gesuchte Anfangsbuchstabe ist 'K' (Option D).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Augenheilkunde",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim8-q13",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 13,
    "letters": [
      "T",
      "E",
      "T",
      "H",
      "O",
      "S",
      "K",
      "O",
      "P",
      "S"
    ],
    "scrambledLetters": "T · E · T · H · O · S · K · O · P · S",
    "targetWord": "STETHOSKOP",
    "correctInitial": "S",
    "options": {
      "A": "S",
      "B": "T",
      "C": "E",
      "D": "H",
      "E": null
    },
    "correctAnswer": "A",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben E, H, K, O, O, P, S, S, T, T bildet sich das deutsche Substantiv 'STETHOSKOP'. Der gesuchte Anfangsbuchstabe ist 'S' (Option A).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Untersuchung",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim8-q14",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 14,
    "letters": [
      "A",
      "R",
      "K",
      "O",
      "T",
      "I",
      "K",
      "U",
      "M",
      "N"
    ],
    "scrambledLetters": "A · R · K · O · T · I · K · U · M · N",
    "targetWord": "NARKOTIKUM",
    "correctInitial": "N",
    "options": {
      "A": "A",
      "B": "R",
      "C": "K",
      "D": "O",
      "E": null
    },
    "correctAnswer": "E",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv 'NARKOTIKUM'. Der Anfangsbuchstabe ist 'N'. Da 'N' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Anästhesie",
      "Schwer"
    ]
  },
  {
    "id": "wf-sim8-q15",
    "simulationId": "wf-sim8",
    "subtest": "WF",
    "questionNumber": 15,
    "letters": [
      "H",
      "R",
      "O",
      "M",
      "B",
      "O",
      "Z",
      "Y",
      "T",
      "T"
    ],
    "scrambledLetters": "H · R · O · M · B · O · Z · Y · T · T",
    "targetWord": "THROMBOZYT",
    "correctInitial": "T",
    "options": {
      "A": "H",
      "B": "R",
      "C": "T",
      "D": "O",
      "E": null
    },
    "correctAnswer": "C",
    "difficulty": "Schwer",
    "estimatedTime": 80,
    "explanation": "Aus den Buchstaben B, H, M, O, O, R, T, T, Y, Z bildet sich das deutsche Substantiv 'THROMBOZYT'. Der gesuchte Anfangsbuchstabe ist 'T' (Option C).",
    "tags": [
      "KFF",
      "Wortflüssigkeit",
      "Hämatologie",
      "Schwer"
    ]
  }
];
