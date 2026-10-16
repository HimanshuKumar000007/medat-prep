import type { GmSimulationData } from "./types";

/**
 * MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) — Simulation 5
 * 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten Merkphase
 * 25 Abfragefragen in 15 Minuten Prüfungszeit
 */
export const GM_SIMULATION_5_DATA: GmSimulationData = {
  "simulationId": "gm-sim5",
  "simNumber": 5,
  "title": "Simulation 5 — Gedächtnis & Merkfähigkeit",
  "subtitle": "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
  "cards": [
    {
      "id": "gm-sim5-card01",
      "simulationId": "gm-sim5",
      "cardNumber": 1,
      "name": "MATIS LINDNER",
      "birthDate": "16.02.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Birke",
        "Haselnuss"
      ],
      "idNumber": "47219",
      "country": "Österreich",
      "photo": "avatar-08"
    },
    {
      "id": "gm-sim5-card02",
      "simulationId": "gm-sim5",
      "cardNumber": 2,
      "name": "RONJA KRAUS",
      "birthDate": "02.11.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Katzen"
      ],
      "idNumber": "83561",
      "country": "Deutschland",
      "photo": "avatar-05"
    },
    {
      "id": "gm-sim5-card03",
      "simulationId": "gm-sim5",
      "cardNumber": 3,
      "name": "TIAN WEBER",
      "birthDate": "24.06.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Penicillin",
        "Erdnuss"
      ],
      "idNumber": "19472",
      "country": "Schweiz",
      "photo": "avatar-02"
    },
    {
      "id": "gm-sim5-card04",
      "simulationId": "gm-sim5",
      "cardNumber": 4,
      "name": "SMILLA ECK",
      "birthDate": "10.04.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [
        "Hunde"
      ],
      "idNumber": "65803",
      "country": "Italien",
      "photo": "avatar-07"
    },
    {
      "id": "gm-sim5-card05",
      "simulationId": "gm-sim5",
      "cardNumber": 5,
      "name": "BENT WALD",
      "birthDate": "19.09.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Hausstaub"
      ],
      "idNumber": "32958",
      "country": "Spanien",
      "photo": "avatar-04"
    },
    {
      "id": "gm-sim5-card06",
      "simulationId": "gm-sim5",
      "cardNumber": 6,
      "name": "FINJA MOOR",
      "birthDate": "05.12.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Milch"
      ],
      "idNumber": "74120",
      "country": "Österreich",
      "photo": "avatar-03"
    },
    {
      "id": "gm-sim5-card07",
      "simulationId": "gm-sim5",
      "cardNumber": 7,
      "name": "LORIS THIEL",
      "birthDate": "13.07.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Wespen"
      ],
      "idNumber": "98345",
      "country": "Deutschland",
      "photo": "avatar-06"
    },
    {
      "id": "gm-sim5-card08",
      "simulationId": "gm-sim5",
      "cardNumber": 8,
      "name": "ENNA SAUER",
      "birthDate": "28.03.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [],
      "idNumber": "51684",
      "country": "Frankreich",
      "photo": "avatar-01"
    }
  ],
  "questions": [
    {
      "id": "gm-sim5-q01",
      "simulationId": "gm-sim5",
      "questionNumber": 1,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe hat MATIS LINDNER (Ausweis 1)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "0",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim5-card01",
      "explanation": "MATIS LINDNER hat Blutgruppe A (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q02",
      "simulationId": "gm-sim5",
      "questionNumber": 2,
      "category": "medication",
      "questionText": "Nimmt RONJA KRAUS (Ausweis 2) Medikamente ein?",
      "options": {
        "A": "Ja",
        "B": "Nein",
        "C": "Bedarfsmedikation",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim5-card02",
      "explanation": "RONJA KRAUS nimmt laut Ausweis keine Medikamente (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q03",
      "simulationId": "gm-sim5",
      "questionNumber": 3,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von TIAN WEBER (Ausweis 3) ausgestellt?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim5-card03",
      "explanation": "TIAN WEBERs Ausweis stammt aus der Schweiz (Option C).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q04",
      "simulationId": "gm-sim5",
      "questionNumber": 4,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu SMILLA ECK (Ausweis 4)?",
      "options": {
        "A": "47219",
        "B": "83561",
        "C": "19472",
        "D": "65803",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim5-card04",
      "explanation": "Die Ausweisnummer von SMILLA ECK lautet 65803 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q05",
      "simulationId": "gm-sim5",
      "questionNumber": 5,
      "category": "birthDate",
      "questionText": "Wann hat BENT WALD (Ausweis 5) Geburtstag?",
      "options": {
        "A": "16.02.",
        "B": "02.11.",
        "C": "24.06.",
        "D": "10.04.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim5-card05",
      "explanation": "BENT WALD hat am 19.09. Geburtstag. Da dieses Datum in A–D fehlt, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q06",
      "simulationId": "gm-sim5",
      "questionNumber": 6,
      "category": "allergies",
      "questionText": "Gegen welches Nahrungsmittel ist FINJA MOOR (Ausweis 6) allergisch?",
      "options": {
        "A": "Milch",
        "B": "Erdnuss",
        "C": "Soja",
        "D": "Weizen",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim5-card06",
      "explanation": "FINJA MOOR hat eine Allergie gegen Milch (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q07",
      "simulationId": "gm-sim5",
      "questionNumber": 7,
      "category": "name",
      "questionText": "Welche Person hat die Ausweisnummer 98345?",
      "options": {
        "A": "MATIS LINDNER",
        "B": "LORIS THIEL",
        "C": "TIAN WEBER",
        "D": "ENNA SAUER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim5-card07",
      "explanation": "Die Ausweisnummer 98345 gehört zu LORIS THIEL (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q08",
      "simulationId": "gm-sim5",
      "questionNumber": 8,
      "category": "allergies",
      "questionText": "Welche Allergien sind für ENNA SAUER (Ausweis 8) vermerkt?",
      "options": {
        "A": "Birke & Haselnuss",
        "B": "Katzen",
        "C": "Keine bekannten Allergien",
        "D": "Wespen",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim5-card08",
      "explanation": "ENNA SAUER hat keine bekannten Allergien (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q09",
      "simulationId": "gm-sim5",
      "questionNumber": 9,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe hat LORIS THIEL (Ausweis 7)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "0",
        "D": "AB",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim5-card07",
      "explanation": "LORIS THIEL hat Blutgruppe AB (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q10",
      "simulationId": "gm-sim5",
      "questionNumber": 10,
      "category": "country",
      "questionText": "Aus welchem Land stammt der Ausweis von BENT WALD (Ausweis 5)?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim5-card05",
      "explanation": "BENT WALDs Ausweis stammt aus Spanien. Da Spanien in A–D nicht vorkommt, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q11",
      "simulationId": "gm-sim5",
      "questionNumber": 11,
      "category": "birthDate",
      "questionText": "An welchem Datum hat MATIS LINDNER (Ausweis 1) Geburtstag?",
      "options": {
        "A": "16.02.",
        "B": "02.11.",
        "C": "05.12.",
        "D": "28.03.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim5-card01",
      "explanation": "MATIS LINDNER hat am 16.02. Geburtstag (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q12",
      "simulationId": "gm-sim5",
      "questionNumber": 12,
      "category": "medication",
      "questionText": "Nimmt TIAN WEBER (Ausweis 3) laut Ausweis Medikamente?",
      "options": {
        "A": "Nein",
        "B": "Ja",
        "C": "Gelegentlich",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim5-card03",
      "explanation": "TIAN WEBER nimmt Medikamente (Ja) (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q13",
      "simulationId": "gm-sim5",
      "questionNumber": 13,
      "category": "allergies",
      "questionText": "Gegen welches Allergen ist RONJA KRAUS (Ausweis 2) allergisch?",
      "options": {
        "A": "Hunde",
        "B": "Pferde",
        "C": "Katzen",
        "D": "Wespen",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim5-card02",
      "explanation": "RONJA KRAUS ist allergisch gegen Katzen (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q14",
      "simulationId": "gm-sim5",
      "questionNumber": 14,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu FINJA MOOR (Ausweis 6)?",
      "options": {
        "A": "47219",
        "B": "83561",
        "C": "19472",
        "D": "74120",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim5-card06",
      "explanation": "Die Ausweisnummer von FINJA MOOR ist 74120 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q15",
      "simulationId": "gm-sim5",
      "questionNumber": 15,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe besitzt SMILLA ECK (Ausweis 4)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "A Rh+",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim5-card04",
      "explanation": "SMILLA ECK hat die Blutgruppe 0. Da '0' nicht in A–D aufgeführt ist, ist Option E korrekt.",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q16",
      "simulationId": "gm-sim5",
      "questionNumber": 16,
      "category": "name",
      "questionText": "Welche Person hat am 02.11. Geburtstag?",
      "options": {
        "A": "RONJA KRAUS",
        "B": "SMILLA ECK",
        "C": "FINJA MOOR",
        "D": "ENNA SAUER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim5-card02",
      "explanation": "Am 02.11. hat RONJA KRAUS Geburtstag (Option A).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q17",
      "simulationId": "gm-sim5",
      "questionNumber": 17,
      "category": "photo",
      "questionText": "Welches Aussehen hat MATIS LINDNER (Ausweis 1)?",
      "options": {
        "A": "Blonde Locken mit Brille",
        "B": "Dunkles Haar & orangefarbener Pullover",
        "C": "Graues Haar & Vollbart",
        "D": "Schwarzer Haarknoten",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim5-card01",
      "explanation": "MATIS LINDNER (Avatar 8) trägt dunkles, gewelltes Haar und einen orangefarbenen Pullover (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q18",
      "simulationId": "gm-sim5",
      "questionNumber": 18,
      "category": "idNumber",
      "questionText": "Wie lautet die Ausweisnummer von RONJA KRAUS (Ausweis 2)?",
      "options": {
        "A": "47219",
        "B": "19472",
        "C": "83561",
        "D": "65803",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim5-card02",
      "explanation": "Die Ausweisnummer von RONJA KRAUS ist 83561 (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q19",
      "simulationId": "gm-sim5",
      "questionNumber": 19,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von SMILLA ECK (Ausweis 4) ausgestellt?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim5-card04",
      "explanation": "SMILLA ECKs Ausweis stammt aus Italien (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim5-q20",
      "simulationId": "gm-sim5",
      "questionNumber": 20,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu ENNA SAUER (Ausweis 8)?",
      "options": {
        "A": "47219",
        "B": "83561",
        "C": "19472",
        "D": "65803",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim5-card08",
      "explanation": "ENNA SAUERs Ausweisnummer lautet 51684. Da diese nicht in A–D steht, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim5-q21",
      "simulationId": "gm-sim5",
      "questionNumber": 21,
      "category": "cross_card",
      "questionText": "Welche Person hat Blutgruppe A und leidet an Birke- und Haselnussallergie?",
      "options": {
        "A": "MATIS LINDNER",
        "B": "BENT WALD",
        "C": "TIAN WEBER",
        "D": "LORIS THIEL",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim5-card01",
      "explanation": "MATIS LINDNER hat Blutgruppe A und Allergien gegen Birke und Haselnuss (Option A).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim5-q22",
      "simulationId": "gm-sim5",
      "questionNumber": 22,
      "category": "cross_card",
      "questionText": "Welche Person hat Blutgruppe AB und leidet an einer Wespenallergie?",
      "options": {
        "A": "TIAN WEBER",
        "B": "LORIS THIEL",
        "C": "MATIS LINDNER",
        "D": "FINJA MOOR",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim5-card07",
      "explanation": "LORIS THIEL hat Blutgruppe AB und eine Wespenallergie (Option B).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim5-q23",
      "simulationId": "gm-sim5",
      "questionNumber": 23,
      "category": "cross_card",
      "questionText": "In welchem Land wurde der Ausweis der Person ausgestellt, die am 24.06. Geburtstag hat?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Spanien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim5-card03",
      "explanation": "Am 24.06. hat Tian Weber Geburtstag. Sein Ausstellungsland ist die Schweiz (Option C).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim5-q24",
      "simulationId": "gm-sim5",
      "questionNumber": 24,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe B stammt aus Österreich?",
      "options": {
        "A": "RONJA KRAUS",
        "B": "MATIS LINDNER",
        "C": "LORIS THIEL",
        "D": "FINJA MOOR",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim5-card06",
      "explanation": "Blutgruppe B haben Ronja Kraus (Deutschland) und Finja Moor (Österreich). Aus Österreich stammt FINJA MOOR (Option D).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim5-q25",
      "simulationId": "gm-sim5",
      "questionNumber": 25,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?",
      "options": {
        "A": "SMILLA ECK",
        "B": "ENNA SAUER",
        "C": "RONJA KRAUS",
        "D": "FINJA MOOR",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim5-card08",
      "explanation": "Blutgruppe 0 haben Smilla Eck (Nein) und Enna Sauer (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente, daher ist E korrekt.",
      "difficulty": "Schwer"
    }
  ]
};
