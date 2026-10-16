import type { GmSimulationData } from "./types";

/**
 * MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) — Simulation 4
 * 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten Merkphase
 * 25 Abfragefragen in 15 Minuten Prüfungszeit
 */
export const GM_SIMULATION_4_DATA: GmSimulationData = {
  "simulationId": "gm-sim4",
  "simNumber": 4,
  "title": "Simulation 4 — Gedächtnis & Merkfähigkeit",
  "subtitle": "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
  "cards": [
    {
      "id": "gm-sim4-card01",
      "simulationId": "gm-sim4",
      "cardNumber": 1,
      "name": "RUBEN SCHMIDT",
      "birthDate": "07.02.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Milch"
      ],
      "idNumber": "18942",
      "country": "Deutschland",
      "photo": "avatar-04"
    },
    {
      "id": "gm-sim4-card02",
      "simulationId": "gm-sim4",
      "cardNumber": 2,
      "name": "MAELIN EGGER",
      "birthDate": "19.10.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Birke",
        "Erle"
      ],
      "idNumber": "53186",
      "country": "Österreich",
      "photo": "avatar-01"
    },
    {
      "id": "gm-sim4-card03",
      "simulationId": "gm-sim4",
      "cardNumber": 3,
      "name": "CORIN BRUNNER",
      "birthDate": "31.05.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Hausstaub"
      ],
      "idNumber": "84729",
      "country": "Schweiz",
      "photo": "avatar-02"
    },
    {
      "id": "gm-sim4-card04",
      "simulationId": "gm-sim4",
      "cardNumber": 4,
      "name": "YLVI KOFLER",
      "birthDate": "14.12.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [
        "Haselnuss"
      ],
      "idNumber": "29615",
      "country": "Italien",
      "photo": "avatar-03"
    },
    {
      "id": "gm-sim4-card05",
      "simulationId": "gm-sim4",
      "cardNumber": 5,
      "name": "JANNO PICHLER",
      "birthDate": "23.04.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Katzen"
      ],
      "idNumber": "76350",
      "country": "Spanien",
      "photo": "avatar-08"
    },
    {
      "id": "gm-sim4-card06",
      "simulationId": "gm-sim4",
      "cardNumber": 6,
      "name": "SVEA LERCH",
      "birthDate": "08.09.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Erdnuss",
        "Soja"
      ],
      "idNumber": "42807",
      "country": "Deutschland",
      "photo": "avatar-05"
    },
    {
      "id": "gm-sim4-card07",
      "simulationId": "gm-sim4",
      "cardNumber": 7,
      "name": "DAMIAN HOCH",
      "birthDate": "16.01.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Penicillin"
      ],
      "idNumber": "95173",
      "country": "Österreich",
      "photo": "avatar-06"
    },
    {
      "id": "gm-sim4-card08",
      "simulationId": "gm-sim4",
      "cardNumber": 8,
      "name": "NELIA STURM",
      "birthDate": "28.08.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [],
      "idNumber": "61498",
      "country": "Frankreich",
      "photo": "avatar-07"
    }
  ],
  "questions": [
    {
      "id": "gm-sim4-q01",
      "simulationId": "gm-sim4",
      "questionNumber": 1,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe besitzt RUBEN SCHMIDT (Ausweis 1)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "0",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim4-card01",
      "explanation": "RUBEN SCHMIDT hat Blutgruppe A (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q02",
      "simulationId": "gm-sim4",
      "questionNumber": 2,
      "category": "medication",
      "questionText": "Nimmt MAELIN EGGER (Ausweis 2) Medikamente ein?",
      "options": {
        "A": "Ja",
        "B": "Nein",
        "C": "Gelegentlich",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim4-card02",
      "explanation": "MAELIN EGGER nimmt keine Medikamente (Nein) (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q03",
      "simulationId": "gm-sim4",
      "questionNumber": 3,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von CORIN BRUNNER (Ausweis 3) ausgestellt?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim4-card03",
      "explanation": "CORIN BRUNNERs Ausweis stammt aus der Schweiz (Option C).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q04",
      "simulationId": "gm-sim4",
      "questionNumber": 4,
      "category": "idNumber",
      "questionText": "Wie lautet die Ausweisnummer von YLVI KOFLER (Ausweis 4)?",
      "options": {
        "A": "18942",
        "B": "53186",
        "C": "84729",
        "D": "29615",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim4-card04",
      "explanation": "Die Ausweisnummer von YLVI KOFLER lautet 29615 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q05",
      "simulationId": "gm-sim4",
      "questionNumber": 5,
      "category": "birthDate",
      "questionText": "An welchem Datum hat JANNO PICHLER (Ausweis 5) Geburtstag?",
      "options": {
        "A": "07.02.",
        "B": "19.10.",
        "C": "31.05.",
        "D": "14.12.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim4-card05",
      "explanation": "JANNO PICHLER hat am 23.04. Geburtstag. Da dieses Datum in A–D fehlt, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q06",
      "simulationId": "gm-sim4",
      "questionNumber": 6,
      "category": "allergies",
      "questionText": "Gegen welche Nahrungsmittel ist SVEA LERCH (Ausweis 6) allergisch?",
      "options": {
        "A": "Erdnuss & Soja",
        "B": "Milch & Weizen",
        "C": "Haselnuss",
        "D": "Fisch",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim4-card06",
      "explanation": "SVEA LERCH ist allergisch gegen Erdnuss und Soja (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q07",
      "simulationId": "gm-sim4",
      "questionNumber": 7,
      "category": "name",
      "questionText": "Welche Person hat die Ausweisnummer 95173?",
      "options": {
        "A": "RUBEN SCHMIDT",
        "B": "DAMIAN HOCH",
        "C": "CORIN BRUNNER",
        "D": "NELIA STURM",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim4-card07",
      "explanation": "Die Nummer 95173 gehört zu DAMIAN HOCH (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q08",
      "simulationId": "gm-sim4",
      "questionNumber": 8,
      "category": "allergies",
      "questionText": "Welche Allergien hat NELIA STURM (Ausweis 8)?",
      "options": {
        "A": "Milch",
        "B": "Birke",
        "C": "Keine bekannten Allergien",
        "D": "Penicillin",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim4-card08",
      "explanation": "NELIA STURM hat keine bekannten Allergien (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q09",
      "simulationId": "gm-sim4",
      "questionNumber": 9,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe ist für DAMIAN HOCH (Ausweis 7) vermerkt?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "0",
        "D": "AB",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim4-card07",
      "explanation": "DAMIAN HOCH hat Blutgruppe AB (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q10",
      "simulationId": "gm-sim4",
      "questionNumber": 10,
      "category": "country",
      "questionText": "Aus welchem Land stammt der Ausweis von JANNO PICHLER (Ausweis 5)?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim4-card05",
      "explanation": "JANNO PICHLERs Ausweis stammt aus Spanien. Da Spanien nicht aufgeführt ist, ist E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q11",
      "simulationId": "gm-sim4",
      "questionNumber": 11,
      "category": "birthDate",
      "questionText": "Wann hat RUBEN SCHMIDT (Ausweis 1) Geburtstag?",
      "options": {
        "A": "07.02.",
        "B": "19.10.",
        "C": "08.09.",
        "D": "28.08.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim4-card01",
      "explanation": "RUBEN SCHMIDT hat am 07.02. Geburtstag (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q12",
      "simulationId": "gm-sim4",
      "questionNumber": 12,
      "category": "medication",
      "questionText": "Nimmt CORIN BRUNNER (Ausweis 3) laut Ausweis Medikamente ein?",
      "options": {
        "A": "Nein",
        "B": "Ja",
        "C": "Nur bei Allergie",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim4-card03",
      "explanation": "CORIN BRUNNER nimmt Medikamente (Ja) (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q13",
      "simulationId": "gm-sim4",
      "questionNumber": 13,
      "category": "allergies",
      "questionText": "Gegen welches Allergen ist YLVI KOFLER (Ausweis 4) allergisch?",
      "options": {
        "A": "Erdnuss",
        "B": "Birke",
        "C": "Haselnuss",
        "D": "Milch",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim4-card04",
      "explanation": "YLVI KOFLER ist allergisch gegen Haselnuss (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q14",
      "simulationId": "gm-sim4",
      "questionNumber": 14,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu SVEA LERCH (Ausweis 6)?",
      "options": {
        "A": "18942",
        "B": "53186",
        "C": "84729",
        "D": "42807",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim4-card06",
      "explanation": "SVEA LERCHs Ausweisnummer lautet 42807 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q15",
      "simulationId": "gm-sim4",
      "questionNumber": 15,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe besitzt YLVI KOFLER (Ausweis 4)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "A+",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim4-card04",
      "explanation": "YLVI KOFLER hat Blutgruppe 0. Da '0' nicht in A–D steht, ist Option E korrekt.",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q16",
      "simulationId": "gm-sim4",
      "questionNumber": 16,
      "category": "name",
      "questionText": "Welche Person hat am 19.10. Geburtstag?",
      "options": {
        "A": "MAELIN EGGER",
        "B": "YLVI KOFLER",
        "C": "SVEA LERCH",
        "D": "NELIA STURM",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim4-card02",
      "explanation": "Am 19.10. hat MAELIN EGGER Geburtstag (Option A).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q17",
      "simulationId": "gm-sim4",
      "questionNumber": 17,
      "category": "photo",
      "questionText": "Welches Merkmal trägt RUBEN SCHMIDT auf dem Ausweisfoto?",
      "options": {
        "A": "Lange blonde Haare",
        "B": "Auburn/rötliches Haar & Vollbart",
        "C": "Graues Haar mit Brille",
        "D": "Dutt und Brille",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim4-card01",
      "explanation": "RUBEN SCHMIDT (Avatar 4) hat rötliches Haar und einen Bart (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q18",
      "simulationId": "gm-sim4",
      "questionNumber": 18,
      "category": "idNumber",
      "questionText": "Wie lautet die Ausweisnummer von MAELIN EGGER (Ausweis 2)?",
      "options": {
        "A": "18942",
        "B": "84729",
        "C": "53186",
        "D": "29615",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim4-card02",
      "explanation": "Die Ausweisnummer von MAELIN EGGER lautet 53186 (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q19",
      "simulationId": "gm-sim4",
      "questionNumber": 19,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von YLVI KOFLER (Ausweis 4) ausgestellt?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim4-card04",
      "explanation": "YLVI KOFLERs Ausweis stammt aus Italien (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim4-q20",
      "simulationId": "gm-sim4",
      "questionNumber": 20,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu NELIA STURM (Ausweis 8)?",
      "options": {
        "A": "18942",
        "B": "53186",
        "C": "84729",
        "D": "29615",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim4-card08",
      "explanation": "NELIA STURM hat die Ausweisnummer 61498. Da diese in A–D fehlt, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim4-q21",
      "simulationId": "gm-sim4",
      "questionNumber": 21,
      "category": "cross_card",
      "questionText": "Welche Person hat die Blutgruppe A und leidet an einer Milchallergie?",
      "options": {
        "A": "RUBEN SCHMIDT",
        "B": "JANNO PICHLER",
        "C": "MAELIN EGGER",
        "D": "DAMIAN HOCH",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim4-card01",
      "explanation": "RUBEN SCHMIDT hat Blutgruppe A und eine Milchallergie (Option A).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim4-q22",
      "simulationId": "gm-sim4",
      "questionNumber": 22,
      "category": "cross_card",
      "questionText": "Welche Person hat Blutgruppe AB und leidet an einer Penicillin-Allergie?",
      "options": {
        "A": "CORIN BRUNNER",
        "B": "DAMIAN HOCH",
        "C": "RUBEN SCHMIDT",
        "D": "SVEA LERCH",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim4-card07",
      "explanation": "DAMIAN HOCH hat Blutgruppe AB und eine Penicillin-Allergie (Option B).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim4-q23",
      "simulationId": "gm-sim4",
      "questionNumber": 23,
      "category": "cross_card",
      "questionText": "In welchem Land wurde der Ausweis der Person ausgestellt, die am 31.05. Geburtstag hat?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Spanien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim4-card03",
      "explanation": "Am 31.05. hat Corin Brunner Geburtstag. Ihr Ausstellungsland ist die Schweiz (Option C).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim4-q24",
      "simulationId": "gm-sim4",
      "questionNumber": 24,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe B stammt aus Österreich?",
      "options": {
        "A": "SVEA LERCH",
        "B": "RUBEN SCHMIDT",
        "C": "DAMIAN HOCH",
        "D": "MAELIN EGGER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim4-card02",
      "explanation": "Blutgruppe B haben Maelin Egger (Österreich) und Svea Lerch (Deutschland). Aus Österreich stammt MAELIN EGGER (Option D).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim4-q25",
      "simulationId": "gm-sim4",
      "questionNumber": 25,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?",
      "options": {
        "A": "YLVI KOFLER",
        "B": "NELIA STURM",
        "C": "SVEA LERCH",
        "D": "MAELIN EGGER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim4-card08",
      "explanation": "Blutgruppe 0 haben Ylvi Kofler (Nein) und Nelia Sturm (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente, daher ist E korrekt.",
      "difficulty": "Schwer"
    }
  ]
};
