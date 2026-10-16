import type { GmSimulationData } from "./types";

/**
 * MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) — Simulation 2
 * 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten Merkphase
 * 25 Abfragefragen in 15 Minuten Prüfungszeit
 */
export const GM_SIMULATION_2_DATA: GmSimulationData = {
  "simulationId": "gm-sim2",
  "simNumber": 2,
  "title": "Simulation 2 — Gedächtnis & Merkfähigkeit",
  "subtitle": "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
  "cards": [
    {
      "id": "gm-sim2-card01",
      "simulationId": "gm-sim2",
      "cardNumber": 1,
      "name": "MALIK DORN",
      "birthDate": "05.01.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Birke"
      ],
      "idNumber": "41982",
      "country": "Österreich",
      "photo": "avatar-02"
    },
    {
      "id": "gm-sim2-card02",
      "simulationId": "gm-sim2",
      "cardNumber": 2,
      "name": "ELENI SOMMER",
      "birthDate": "18.06.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Milch",
        "Soja"
      ],
      "idNumber": "63204",
      "country": "Deutschland",
      "photo": "avatar-01"
    },
    {
      "id": "gm-sim2-card03",
      "simulationId": "gm-sim2",
      "cardNumber": 3,
      "name": "JONAS REITER",
      "birthDate": "29.04.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Haselnuss"
      ],
      "idNumber": "87519",
      "country": "Schweiz",
      "photo": "avatar-04"
    },
    {
      "id": "gm-sim2-card04",
      "simulationId": "gm-sim2",
      "cardNumber": 4,
      "name": "MIRNA KOCH",
      "birthDate": "11.12.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [
        "Hunde",
        "Katzen"
      ],
      "idNumber": "15438",
      "country": "Italien",
      "photo": "avatar-03"
    },
    {
      "id": "gm-sim2-card05",
      "simulationId": "gm-sim2",
      "cardNumber": 5,
      "name": "DENIZ WENZEL",
      "birthDate": "22.08.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Erdnuss"
      ],
      "idNumber": "79246",
      "country": "Spanien",
      "photo": "avatar-06"
    },
    {
      "id": "gm-sim2-card06",
      "simulationId": "gm-sim2",
      "cardNumber": 6,
      "name": "RINA MOSER",
      "birthDate": "15.03.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Penicillin"
      ],
      "idNumber": "32871",
      "country": "Österreich",
      "photo": "avatar-05"
    },
    {
      "id": "gm-sim2-card07",
      "simulationId": "gm-sim2",
      "cardNumber": 7,
      "name": "LEVIN BERG",
      "birthDate": "09.10.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Hausstaub",
        "Schimmel"
      ],
      "idNumber": "56193",
      "country": "Frankreich",
      "photo": "avatar-08"
    },
    {
      "id": "gm-sim2-card08",
      "simulationId": "gm-sim2",
      "cardNumber": 8,
      "name": "ALVA FUCHS",
      "birthDate": "27.07.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [],
      "idNumber": "94305",
      "country": "Deutschland",
      "photo": "avatar-07"
    }
  ],
  "questions": [
    {
      "id": "gm-sim2-q01",
      "simulationId": "gm-sim2",
      "questionNumber": 1,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe besitzt MALIK DORN (Ausweis 1)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "0",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim2-card01",
      "explanation": "MALIK DORN hat Blutgruppe A (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q02",
      "simulationId": "gm-sim2",
      "questionNumber": 2,
      "category": "medication",
      "questionText": "Nimmt ELENI SOMMER (Ausweis 2) Medikamente ein?",
      "options": {
        "A": "Ja",
        "B": "Nein",
        "C": "Regelmäßig",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim2-card02",
      "explanation": "ELENI SOMMER nimmt laut Ausweis keine Medikamente (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q03",
      "simulationId": "gm-sim2",
      "questionNumber": 3,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von JONAS REITER (Ausweis 3) ausgestellt?",
      "options": {
        "A": "Österreich",
        "B": "Deutschland",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim2-card03",
      "explanation": "JONAS REITERs Ausweis stammt aus der Schweiz (Option C).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q04",
      "simulationId": "gm-sim2",
      "questionNumber": 4,
      "category": "idNumber",
      "questionText": "Wie lautet die Ausweisnummer von MIRNA KOCH (Ausweis 4)?",
      "options": {
        "A": "41982",
        "B": "63204",
        "C": "87519",
        "D": "15438",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim2-card04",
      "explanation": "Die Ausweisnummer von MIRNA KOCH lautet 15438 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q05",
      "simulationId": "gm-sim2",
      "questionNumber": 5,
      "category": "birthDate",
      "questionText": "Wann hat DENIZ WENZEL (Ausweis 5) Geburtstag?",
      "options": {
        "A": "05.01.",
        "B": "18.06.",
        "C": "29.04.",
        "D": "11.12.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim2-card05",
      "explanation": "DENIZ WENZEL hat am 22.08. Geburtstag. Da dies nicht in A–D steht, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q06",
      "simulationId": "gm-sim2",
      "questionNumber": 6,
      "category": "allergies",
      "questionText": "Gegen welches Medikament liegt bei RINA MOSER (Ausweis 6) eine Allergie vor?",
      "options": {
        "A": "Penicillin",
        "B": "Aspirin",
        "C": "Ibuprofen",
        "D": "Paracetamol",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim2-card06",
      "explanation": "RINA MOSER ist allergisch gegen Penicillin (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q07",
      "simulationId": "gm-sim2",
      "questionNumber": 7,
      "category": "name",
      "questionText": "Welche Person besitzt die Ausweisnummer 56193?",
      "options": {
        "A": "MALIK DORN",
        "B": "LEVIN BERG",
        "C": "JONAS REITER",
        "D": "ALVA FUCHS",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim2-card07",
      "explanation": "Die Ausweisnummer 56193 gehört zu LEVIN BERG (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q08",
      "simulationId": "gm-sim2",
      "questionNumber": 8,
      "category": "allergies",
      "questionText": "Welche Allergien sind für ALVA FUCHS (Ausweis 8) dokumentiert?",
      "options": {
        "A": "Milch & Soja",
        "B": "Hausstaub",
        "C": "Keine bekannten Allergien",
        "D": "Birke",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim2-card08",
      "explanation": "ALVA FUCHS hat keine bekannten Allergien (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q09",
      "simulationId": "gm-sim2",
      "questionNumber": 9,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe hat JONAS REITER (Ausweis 3)?",
      "options": {
        "A": "0",
        "B": "B",
        "C": "A",
        "D": "AB",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim2-card03",
      "explanation": "JONAS REITER hat Blutgruppe AB (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q10",
      "simulationId": "gm-sim2",
      "questionNumber": 10,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von LEVIN BERG (Ausweis 7) ausgestellt?",
      "options": {
        "A": "Österreich",
        "B": "Deutschland",
        "C": "Schweiz",
        "D": "Spanien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim2-card07",
      "explanation": "LEVIN BERGs Ausweis stammt aus Frankreich. Da Frankreich nicht in A–D steht, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q11",
      "simulationId": "gm-sim2",
      "questionNumber": 11,
      "category": "birthDate",
      "questionText": "An welchem Datum hat MALIK DORN (Ausweis 1) Geburtstag?",
      "options": {
        "A": "05.01.",
        "B": "18.06.",
        "C": "22.08.",
        "D": "09.10.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim2-card01",
      "explanation": "MALIK DORN hat am 05.01. Geburtstag (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q12",
      "simulationId": "gm-sim2",
      "questionNumber": 12,
      "category": "medication",
      "questionText": "Nimmt DENIZ WENZEL (Ausweis 5) laut Ausweis Medikamente?",
      "options": {
        "A": "Nein",
        "B": "Ja",
        "C": "Bedarfsmedikation",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim2-card05",
      "explanation": "DENIZ WENZEL nimmt Medikamente (Ja) (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q13",
      "simulationId": "gm-sim2",
      "questionNumber": 13,
      "category": "allergies",
      "questionText": "Gegen welche Stoffe ist ELENI SOMMER (Ausweis 2) allergisch?",
      "options": {
        "A": "Haselnuss",
        "B": "Erdnuss",
        "C": "Milch & Soja",
        "D": "Katzen",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim2-card02",
      "explanation": "ELENI SOMMER ist allergisch gegen Milch und Soja (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q14",
      "simulationId": "gm-sim2",
      "questionNumber": 14,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu RINA MOSER (Ausweis 6)?",
      "options": {
        "A": "41982",
        "B": "63204",
        "C": "15438",
        "D": "32871",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim2-card06",
      "explanation": "RINA MOSERs Ausweisnummer lautet 32871 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q15",
      "simulationId": "gm-sim2",
      "questionNumber": 15,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe ist für ALVA FUCHS (Ausweis 8) vermerkt?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "A Rh+",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim2-card08",
      "explanation": "ALVA FUCHS hat Blutgruppe 0. Da 0 nicht in A–D aufgeführt ist, ist Antwort E korrekt.",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q16",
      "simulationId": "gm-sim2",
      "questionNumber": 16,
      "category": "name",
      "questionText": "Welche Person hat am 11.12. Geburtstag?",
      "options": {
        "A": "MIRNA KOCH",
        "B": "ELENI SOMMER",
        "C": "RINA MOSER",
        "D": "ALVA FUCHS",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim2-card04",
      "explanation": "Am 11.12. hat MIRNA KOCH Geburtstag (Option A).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q17",
      "simulationId": "gm-sim2",
      "questionNumber": 17,
      "category": "photo",
      "questionText": "Welches visuelle Merkmal zeichnet MIRNA KOCH (Ausweis 4) aus?",
      "options": {
        "A": "Runde Brille mit Dutt",
        "B": "Langes blondes Haar",
        "C": "Graues Haar mit Brille",
        "D": "Schwarze Lockenfrisur",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim2-card04",
      "explanation": "MIRNA KOCH (Avatar 3) zeichnet sich durch langes blondes Haar aus (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q18",
      "simulationId": "gm-sim2",
      "questionNumber": 18,
      "category": "idNumber",
      "questionText": "Wie lautet die Ausweisnummer von JONAS REITER (Ausweis 3)?",
      "options": {
        "A": "41982",
        "B": "63204",
        "C": "87519",
        "D": "79246",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim2-card03",
      "explanation": "JONAS REITER hat die Ausweisnummer 87519 (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q19",
      "simulationId": "gm-sim2",
      "questionNumber": 19,
      "category": "country",
      "questionText": "Aus welchem Land stammt der Ausweis von MALIK DORN (Ausweis 1)?",
      "options": {
        "A": "Deutschland",
        "B": "Schweiz",
        "C": "Italien",
        "D": "Österreich",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim2-card01",
      "explanation": "MALIK DORNs Ausweis stammt aus Österreich (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim2-q20",
      "simulationId": "gm-sim2",
      "questionNumber": 20,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu ALVA FUCHS (Ausweis 8)?",
      "options": {
        "A": "41982",
        "B": "63204",
        "C": "87519",
        "D": "32871",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim2-card08",
      "explanation": "ALVA FUCHS hat die Ausweisnummer 94305. Da 94305 nicht in A–D steht, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim2-q21",
      "simulationId": "gm-sim2",
      "questionNumber": 21,
      "category": "cross_card",
      "questionText": "Welche Person hat die Blutgruppe A und leidet an einer Birke-Allergie?",
      "options": {
        "A": "MALIK DORN",
        "B": "DENIZ WENZEL",
        "C": "RINA MOSER",
        "D": "JONAS REITER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim2-card01",
      "explanation": "Blutgruppe A haben Malik Dorn (Birke) und Deniz Wenzel (Erdnuss). Die Birke-Allergie hat MALIK DORN (Option A).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim2-q22",
      "simulationId": "gm-sim2",
      "questionNumber": 22,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe B stammt aus Österreich?",
      "options": {
        "A": "ELENI SOMMER",
        "B": "RINA MOSER",
        "C": "MALIK DORN",
        "D": "ALVA FUCHS",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim2-card06",
      "explanation": "Blutgruppe B haben Eleni Sommer (Deutschland) und Rina Moser (Österreich). Aus Österreich stammt RINA MOSER (Option B).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim2-q23",
      "simulationId": "gm-sim2",
      "questionNumber": 23,
      "category": "cross_card",
      "questionText": "Welche Person nimmt Medikamente ein und hat eine Hausstaub-Allergie?",
      "options": {
        "A": "DENIZ WENZEL",
        "B": "JONAS REITER",
        "C": "LEVIN BERG",
        "D": "MALIK DORN",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim2-card07",
      "explanation": "LEVIN BERG nimmt Medikamente (Ja) und leidet an Hausstaub- und Schimmelallergie (Option C).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim2-q24",
      "simulationId": "gm-sim2",
      "questionNumber": 24,
      "category": "cross_card",
      "questionText": "In welchem Land wurde der Ausweis der Person ausgestellt, die am 11.12. Geburtstag hat?",
      "options": {
        "A": "Deutschland",
        "B": "Schweiz",
        "C": "Spanien",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim2-card04",
      "explanation": "Am 11.12. hat Mirna Koch Geburtstag. Ihr Ausstellungsland ist Italien (Option D).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim2-q25",
      "simulationId": "gm-sim2",
      "questionNumber": 25,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?",
      "options": {
        "A": "MIRNA KOCH",
        "B": "ALVA FUCHS",
        "C": "ELENI SOMMER",
        "D": "RINA MOSER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim2-card08",
      "explanation": "Blutgruppe 0 haben Mirna Koch (Nein) und Alva Fuchs (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente ein, daher ist E korrekt.",
      "difficulty": "Schwer"
    }
  ]
};
