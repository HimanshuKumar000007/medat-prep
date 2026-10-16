import type { GmSimulationData } from "./types";

/**
 * MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) — Simulation 1
 * 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten Merkphase
 * 25 Abfragefragen in 15 Minuten Prüfungszeit
 */
export const GM_SIMULATION_1_DATA: GmSimulationData = {
  "simulationId": "gm-sim1",
  "simNumber": 1,
  "title": "Simulation 1 — Gedächtnis & Merkfähigkeit",
  "subtitle": "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
  "cards": [
    {
      "id": "gm-sim1-card01",
      "simulationId": "gm-sim1",
      "cardNumber": 1,
      "name": "NERIA KRAMM",
      "birthDate": "14.07.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Haselnuss",
        "Birke"
      ],
      "idNumber": "58321",
      "country": "Österreich",
      "photo": "avatar-01"
    },
    {
      "id": "gm-sim1-card02",
      "simulationId": "gm-sim1",
      "cardNumber": 2,
      "name": "MILAN VOGEL",
      "birthDate": "23.09.",
      "medication": true,
      "bloodGroup": "B",
      "allergies": [
        "Penicillin"
      ],
      "idNumber": "24915",
      "country": "Deutschland",
      "photo": "avatar-02"
    },
    {
      "id": "gm-sim1-card03",
      "simulationId": "gm-sim1",
      "cardNumber": 3,
      "name": "LAVIN HOFER",
      "birthDate": "08.02.",
      "medication": false,
      "bloodGroup": "AB",
      "allergies": [
        "Milch",
        "Erdnuss"
      ],
      "idNumber": "71642",
      "country": "Schweiz",
      "photo": "avatar-03"
    },
    {
      "id": "gm-sim1-card04",
      "simulationId": "gm-sim1",
      "cardNumber": 4,
      "name": "SARIN WEISS",
      "birthDate": "30.11.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [
        "Hunde"
      ],
      "idNumber": "38209",
      "country": "Italien",
      "photo": "avatar-04"
    },
    {
      "id": "gm-sim1-card05",
      "simulationId": "gm-sim1",
      "cardNumber": 5,
      "name": "KIRAN BRANDT",
      "birthDate": "19.05.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Hausstaub",
        "Birke"
      ],
      "idNumber": "93514",
      "country": "Spanien",
      "photo": "avatar-05"
    },
    {
      "id": "gm-sim1-card06",
      "simulationId": "gm-sim1",
      "cardNumber": 6,
      "name": "ELOR STEIN",
      "birthDate": "04.10.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Katzen"
      ],
      "idNumber": "46187",
      "country": "Österreich",
      "photo": "avatar-06"
    },
    {
      "id": "gm-sim1-card07",
      "simulationId": "gm-sim1",
      "cardNumber": 7,
      "name": "TARA WINTER",
      "birthDate": "27.03.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Wespen",
        "Erdnuss"
      ],
      "idNumber": "82430",
      "country": "Deutschland",
      "photo": "avatar-07"
    },
    {
      "id": "gm-sim1-card08",
      "simulationId": "gm-sim1",
      "cardNumber": 8,
      "name": "JASIN HUBER",
      "birthDate": "12.08.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [],
      "idNumber": "65793",
      "country": "Frankreich",
      "photo": "avatar-08"
    }
  ],
  "questions": [
    {
      "id": "gm-sim1-q01",
      "simulationId": "gm-sim1",
      "questionNumber": 1,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe hat NERIA KRAMM (Ausweis 1)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "0",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim1-card01",
      "explanation": "Laut Allergieausweis 1 von NERIA KRAMM lautet die Blutgruppe A (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q02",
      "simulationId": "gm-sim1",
      "questionNumber": 2,
      "category": "medication",
      "questionText": "Nimmt MILAN VOGEL (Ausweis 2) regelmäßig Medikamente ein?",
      "options": {
        "A": "Nein",
        "B": "Ja",
        "C": "Nur bei Bedarf",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim1-card02",
      "explanation": "Auf dem Allergieausweis von MILAN VOGEL ist bei Medikamenten 'Ja' vermerkt (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q03",
      "simulationId": "gm-sim1",
      "questionNumber": 3,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von LAVIN HOFER (Ausweis 3) ausgestellt?",
      "options": {
        "A": "Österreich",
        "B": "Deutschland",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim1-card03",
      "explanation": "LAVIN HOFERs Allergieausweis wurde in der Schweiz ausgestellt (Option C).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q04",
      "simulationId": "gm-sim1",
      "questionNumber": 4,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu SARIN WEISS (Ausweis 4)?",
      "options": {
        "A": "58321",
        "B": "24915",
        "C": "71642",
        "D": "38209",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim1-card04",
      "explanation": "Die Ausweisnummer von SARIN WEISS lautet 38209 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q05",
      "simulationId": "gm-sim1",
      "questionNumber": 5,
      "category": "birthDate",
      "questionText": "An welchem Datum hat KIRAN BRANDT (Ausweis 5) Geburtstag?",
      "options": {
        "A": "14.07.",
        "B": "23.09.",
        "C": "08.02.",
        "D": "30.11.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim1-card05",
      "explanation": "KIRAN BRANDT hat am 19.05. Geburtstag. Da dieses Datum in A–D nicht aufgeführt ist, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q06",
      "simulationId": "gm-sim1",
      "questionNumber": 6,
      "category": "allergies",
      "questionText": "Gegen welches Allergen liegt bei ELOR STEIN (Ausweis 6) eine bekannte Allergie vor?",
      "options": {
        "A": "Katzen",
        "B": "Hunde",
        "C": "Birke",
        "D": "Haselnuss",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim1-card06",
      "explanation": "ELOR STEIN hat eine bekannte Allergie gegen Katzen (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q07",
      "simulationId": "gm-sim1",
      "questionNumber": 7,
      "category": "name",
      "questionText": "Welche Person besitzt die Ausweisnummer 82430?",
      "options": {
        "A": "NERIA KRAMM",
        "B": "TARA WINTER",
        "C": "LAVIN HOFER",
        "D": "JASIN HUBER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim1-card07",
      "explanation": "Die Ausweisnummer 82430 gehört zu TARA WINTER (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q08",
      "simulationId": "gm-sim1",
      "questionNumber": 8,
      "category": "allergies",
      "questionText": "Welche Allergien sind auf dem Ausweis von JASIN HUBER (Ausweis 8) dokumentiert?",
      "options": {
        "A": "Erdnuss & Wespen",
        "B": "Penicillin",
        "C": "Keine bekannten Allergien",
        "D": "Hausstaub",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim1-card08",
      "explanation": "JASIN HUBER hat keine bekannten Allergien auf dem Ausweis vermerkt (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q09",
      "simulationId": "gm-sim1",
      "questionNumber": 9,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe ist für MILAN VOGEL (Ausweis 2) vermerkt?",
      "options": {
        "A": "0",
        "B": "A",
        "C": "AB",
        "D": "B",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim1-card02",
      "explanation": "MILAN VOGEL hat die Blutgruppe B (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q10",
      "simulationId": "gm-sim1",
      "questionNumber": 10,
      "category": "country",
      "questionText": "Aus welchem Land stammt der Allergieausweis von KIRAN BRANDT (Ausweis 5)?",
      "options": {
        "A": "Österreich",
        "B": "Deutschland",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim1-card05",
      "explanation": "KIRAN BRANDTs Ausweis wurde in Spanien ausgestellt. Da Spanien in A–D nicht vorkommt, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q11",
      "simulationId": "gm-sim1",
      "questionNumber": 11,
      "category": "birthDate",
      "questionText": "Welches Geburtsdatum steht auf dem Ausweis von LAVIN HOFER (Ausweis 3)?",
      "options": {
        "A": "08.02.",
        "B": "14.07.",
        "C": "23.09.",
        "D": "04.10.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim1-card03",
      "explanation": "LAVIN HOFER hat am 08.02. Geburtstag (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q12",
      "simulationId": "gm-sim1",
      "questionNumber": 12,
      "category": "medication",
      "questionText": "Nimmt SARIN WEISS (Ausweis 4) laut Ausweis Medikamente?",
      "options": {
        "A": "Ja",
        "B": "Nein",
        "C": "Nur Schmerzmittel",
        "D": "Gelegentlich",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim1-card04",
      "explanation": "SARIN WEISS nimmt laut Ausweis keine Medikamente (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q13",
      "simulationId": "gm-sim1",
      "questionNumber": 13,
      "category": "allergies",
      "questionText": "Gegen welche Stoffe ist NERIA KRAMM (Ausweis 1) allergisch?",
      "options": {
        "A": "Milch & Erdnuss",
        "B": "Penicillin",
        "C": "Haselnuss & Birke",
        "D": "Wespen & Erdnuss",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim1-card01",
      "explanation": "NERIA KRAMM hat Allergien gegen Haselnuss und Birke (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q14",
      "simulationId": "gm-sim1",
      "questionNumber": 14,
      "category": "idNumber",
      "questionText": "Wie lautet die 5-stellige Ausweisnummer von ELOR STEIN (Ausweis 6)?",
      "options": {
        "A": "58321",
        "B": "24915",
        "C": "93514",
        "D": "46187",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim1-card06",
      "explanation": "Die Ausweisnummer von ELOR STEIN lautet 46187 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q15",
      "simulationId": "gm-sim1",
      "questionNumber": 15,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe besitzt SARIN WEISS (Ausweis 4)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "A Rh-",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim1-card04",
      "explanation": "SARIN WEISS hat die Blutgruppe 0. Da '0' nicht in den Optionen A–D steht, ist Option E korrekt.",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q16",
      "simulationId": "gm-sim1",
      "questionNumber": 16,
      "category": "name",
      "questionText": "Welche Person hat am 23.09. Geburtstag?",
      "options": {
        "A": "MILAN VOGEL",
        "B": "NERIA KRAMM",
        "C": "TARA WINTER",
        "D": "ELOR STEIN",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim1-card02",
      "explanation": "Am 23.09. hat MILAN VOGEL Geburtstag (Option A).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q17",
      "simulationId": "gm-sim1",
      "questionNumber": 17,
      "category": "photo",
      "questionText": "Welches auffällige visuelle Merkmal trägt NERIA KRAMM auf dem Passfoto?",
      "options": {
        "A": "Dunkle Vollbart-Frisur",
        "B": "Haarknoten (Dutt) & Brille",
        "C": "Graues kurzes Haar",
        "D": "Blonde lange Haare ohne Brille",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim1-card01",
      "explanation": "NERIA KRAMM (Avatar 1) trägt einen markanten Haarknoten (Dutt) und eine runde Brille (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q18",
      "simulationId": "gm-sim1",
      "questionNumber": 18,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer ist MILAN VOGEL (Ausweis 2) zugeordnet?",
      "options": {
        "A": "58321",
        "B": "71642",
        "C": "24915",
        "D": "38209",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim1-card02",
      "explanation": "MILAN VOGELs Ausweisnummer ist 24915 (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q19",
      "simulationId": "gm-sim1",
      "questionNumber": 19,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von TARA WINTER (Ausweis 7) ausgestellt?",
      "options": {
        "A": "Österreich",
        "B": "Schweiz",
        "C": "Italien",
        "D": "Deutschland",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim1-card07",
      "explanation": "TARA WINTERs Ausweis stammt aus Deutschland (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim1-q20",
      "simulationId": "gm-sim1",
      "questionNumber": 20,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu JASIN HUBER (Ausweis 8)?",
      "options": {
        "A": "58321",
        "B": "24915",
        "C": "46187",
        "D": "82430",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim1-card08",
      "explanation": "JASIN HUBER hat die Ausweisnummer 65793. Da diese in A–D nicht gelistet ist, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim1-q21",
      "simulationId": "gm-sim1",
      "questionNumber": 21,
      "category": "cross_card",
      "questionText": "Welche Person hat die Blutgruppe AB und kommt aus der Schweiz?",
      "options": {
        "A": "LAVIN HOFER",
        "B": "TARA WINTER",
        "C": "SARIN WEISS",
        "D": "MILAN VOGEL",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim1-card03",
      "explanation": "Die Blutgruppe AB haben Lavin Hofer (Schweiz) und Tara Winter (Deutschland). Aus der Schweiz stammt LAVIN HOFER (Option A).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim1-q22",
      "simulationId": "gm-sim1",
      "questionNumber": 22,
      "category": "cross_card",
      "questionText": "Welche Person hat die Blutgruppe A und leidet an einer Hausstaub-Allergie?",
      "options": {
        "A": "NERIA KRAMM",
        "B": "KIRAN BRANDT",
        "C": "ELOR STEIN",
        "D": "JASIN HUBER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim1-card05",
      "explanation": "Blutgruppe A besitzen Neria Kramm (Haselnuss, Birke) und Kiran Brandt (Hausstaub, Birke). Die Hausstaub-Allergie hat KIRAN BRANDT (Option B).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim1-q23",
      "simulationId": "gm-sim1",
      "questionNumber": 23,
      "category": "cross_card",
      "questionText": "In welchem Land wurde der Ausweis der Person ausgestellt, die am 27.03. Geburtstag hat?",
      "options": {
        "A": "Österreich",
        "B": "Schweiz",
        "C": "Deutschland",
        "D": "Spanien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim1-card07",
      "explanation": "Am 27.03. hat Tara Winter Geburtstag. Ihr Ausstellungsland ist Deutschland (Option C).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim1-q24",
      "simulationId": "gm-sim1",
      "questionNumber": 24,
      "category": "cross_card",
      "questionText": "Welche Person nimmt Medikamente ein und hat eine Penicillin-Allergie?",
      "options": {
        "A": "KIRAN BRANDT",
        "B": "TARA WINTER",
        "C": "NERIA KRAMM",
        "D": "MILAN VOGEL",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim1-card02",
      "explanation": "Die Penicillin-Allergie mit Medikamenteneinnahme (Ja) gehört eindeutig zu MILAN VOGEL (Option D).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim1-q25",
      "simulationId": "gm-sim1",
      "questionNumber": 25,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?",
      "options": {
        "A": "SARIN WEISS",
        "B": "JASIN HUBER",
        "C": "ELOR STEIN",
        "D": "NERIA KRAMM",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim1-card08",
      "explanation": "Blutgruppe 0 haben Sarin Weiss (Medikamente: Nein) und Jasin Huber (Medikamente: Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente ein, daher ist Antwort E zwingend korrekt.",
      "difficulty": "Schwer"
    }
  ]
};
