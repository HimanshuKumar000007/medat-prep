import type { GmSimulationData } from "./types";

/**
 * MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) — Simulation 3
 * 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten Merkphase
 * 25 Abfragefragen in 15 Minuten Prüfungszeit
 */
export const GM_SIMULATION_3_DATA: GmSimulationData = {
  "simulationId": "gm-sim3",
  "simNumber": 3,
  "title": "Simulation 3 — Gedächtnis & Merkfähigkeit",
  "subtitle": "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
  "cards": [
    {
      "id": "gm-sim3-card01",
      "simulationId": "gm-sim3",
      "cardNumber": 1,
      "name": "KASPAR LEY",
      "birthDate": "12.03.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Pollen",
        "Gräser"
      ],
      "idNumber": "35128",
      "country": "Deutschland",
      "photo": "avatar-06"
    },
    {
      "id": "gm-sim3-card02",
      "simulationId": "gm-sim3",
      "cardNumber": 2,
      "name": "SELMA KERN",
      "birthDate": "25.08.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Haselnuss"
      ],
      "idNumber": "78492",
      "country": "Österreich",
      "photo": "avatar-03"
    },
    {
      "id": "gm-sim3-card03",
      "simulationId": "gm-sim3",
      "cardNumber": 3,
      "name": "FABIAN WOLF",
      "birthDate": "03.11.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Penicillin",
        "Soja"
      ],
      "idNumber": "62914",
      "country": "Schweiz",
      "photo": "avatar-04"
    },
    {
      "id": "gm-sim3-card04",
      "simulationId": "gm-sim3",
      "cardNumber": 4,
      "name": "ANOUK BAUR",
      "birthDate": "17.06.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [
        "Birke"
      ],
      "idNumber": "91380",
      "country": "Italien",
      "photo": "avatar-05"
    },
    {
      "id": "gm-sim3-card05",
      "simulationId": "gm-sim3",
      "cardNumber": 5,
      "name": "DARIUS VETH",
      "birthDate": "30.01.",
      "medication": true,
      "bloodGroup": "A",
      "allergies": [
        "Erdnuss"
      ],
      "idNumber": "24675",
      "country": "Spanien",
      "photo": "avatar-08"
    },
    {
      "id": "gm-sim3-card06",
      "simulationId": "gm-sim3",
      "cardNumber": 6,
      "name": "LILITH MAYER",
      "birthDate": "14.09.",
      "medication": false,
      "bloodGroup": "B",
      "allergies": [
        "Wespen"
      ],
      "idNumber": "59803",
      "country": "Deutschland",
      "photo": "avatar-07"
    },
    {
      "id": "gm-sim3-card07",
      "simulationId": "gm-sim3",
      "cardNumber": 7,
      "name": "TIMUR GRAF",
      "birthDate": "21.04.",
      "medication": true,
      "bloodGroup": "AB",
      "allergies": [
        "Katzen",
        "Hunde"
      ],
      "idNumber": "83167",
      "country": "Österreich",
      "photo": "avatar-02"
    },
    {
      "id": "gm-sim3-card08",
      "simulationId": "gm-sim3",
      "cardNumber": 8,
      "name": "NORA KOVAL",
      "birthDate": "09.12.",
      "medication": false,
      "bloodGroup": "0",
      "allergies": [],
      "idNumber": "47529",
      "country": "Schweiz",
      "photo": "avatar-01"
    }
  ],
  "questions": [
    {
      "id": "gm-sim3-q01",
      "simulationId": "gm-sim3",
      "questionNumber": 1,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe ist für KASPAR LEY (Ausweis 1) vermerkt?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "0",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim3-card01",
      "explanation": "KASPAR LEY hat Blutgruppe A (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q02",
      "simulationId": "gm-sim3",
      "questionNumber": 2,
      "category": "medication",
      "questionText": "Nimmt SELMA KERN (Ausweis 2) Medikamente?",
      "options": {
        "A": "Ja",
        "B": "Nein",
        "C": "Bedarfsmedikation",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim3-card02",
      "explanation": "SELMA KERN nimmt keine Medikamente (Nein) (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q03",
      "simulationId": "gm-sim3",
      "questionNumber": 3,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von FABIAN WOLF (Ausweis 3) ausgestellt?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim3-card03",
      "explanation": "FABIAN WOLF stammt aus der Schweiz (Option C).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q04",
      "simulationId": "gm-sim3",
      "questionNumber": 4,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu ANOUK BAUR (Ausweis 4)?",
      "options": {
        "A": "35128",
        "B": "78492",
        "C": "62914",
        "D": "91380",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim3-card04",
      "explanation": "Die Ausweisnummer von ANOUK BAUR ist 91380 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q05",
      "simulationId": "gm-sim3",
      "questionNumber": 5,
      "category": "birthDate",
      "questionText": "Wann hat DARIUS VETH (Ausweis 5) Geburtstag?",
      "options": {
        "A": "12.03.",
        "B": "25.08.",
        "C": "03.11.",
        "D": "17.06.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim3-card05",
      "explanation": "DARIUS VETH hat am 30.01. Geburtstag. Da dies nicht in A–D steht, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q06",
      "simulationId": "gm-sim3",
      "questionNumber": 6,
      "category": "allergies",
      "questionText": "Gegen welches Insektengift ist LILITH MAYER (Ausweis 6) allergisch?",
      "options": {
        "A": "Wespen",
        "B": "Bienen",
        "C": "Hornissen",
        "D": "Mücken",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim3-card06",
      "explanation": "LILITH MAYER hat eine Allergie gegen Wespen (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q07",
      "simulationId": "gm-sim3",
      "questionNumber": 7,
      "category": "name",
      "questionText": "Welche Person hat die Ausweisnummer 83167?",
      "options": {
        "A": "KASPAR LEY",
        "B": "TIMUR GRAF",
        "C": "FABIAN WOLF",
        "D": "DARIUS VETH",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim3-card07",
      "explanation": "Die Ausweisnummer 83167 gehört zu TIMUR GRAF (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q08",
      "simulationId": "gm-sim3",
      "questionNumber": 8,
      "category": "allergies",
      "questionText": "Welche Allergien sind für NORA KOVAL (Ausweis 8) dokumentiert?",
      "options": {
        "A": "Pollen & Gräser",
        "B": "Haselnuss",
        "C": "Keine bekannten Allergien",
        "D": "Erdnuss",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim3-card08",
      "explanation": "NORA KOVAL hat keine bekannten Allergien (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q09",
      "simulationId": "gm-sim3",
      "questionNumber": 9,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe besitzt TIMUR GRAF (Ausweis 7)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "0",
        "D": "AB",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim3-card07",
      "explanation": "TIMUR GRAF hat Blutgruppe AB (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q10",
      "simulationId": "gm-sim3",
      "questionNumber": 10,
      "category": "country",
      "questionText": "Aus welchem Land stammt der Ausweis von DARIUS VETH (Ausweis 5)?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim3-card05",
      "explanation": "DARIUS VETHs Ausweis stammt aus Spanien. Da Spanien nicht aufgeführt ist, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q11",
      "simulationId": "gm-sim3",
      "questionNumber": 11,
      "category": "birthDate",
      "questionText": "Wann hat KASPAR LEY (Ausweis 1) Geburtstag?",
      "options": {
        "A": "12.03.",
        "B": "25.08.",
        "C": "14.09.",
        "D": "09.12.",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim3-card01",
      "explanation": "KASPAR LEY hat am 12.03. Geburtstag (Option A).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q12",
      "simulationId": "gm-sim3",
      "questionNumber": 12,
      "category": "medication",
      "questionText": "Nimmt FABIAN WOLF (Ausweis 3) laut Ausweis Medikamente?",
      "options": {
        "A": "Nein",
        "B": "Ja",
        "C": "Nur Schmerzmittel",
        "D": "Unbekannt",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim3-card03",
      "explanation": "FABIAN WOLF nimmt Medikamente (Ja) (Option B).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q13",
      "simulationId": "gm-sim3",
      "questionNumber": 13,
      "category": "allergies",
      "questionText": "Gegen welches Allergen ist SELMA KERN (Ausweis 2) allergisch?",
      "options": {
        "A": "Erdnuss",
        "B": "Birke",
        "C": "Haselnuss",
        "D": "Milch",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim3-card02",
      "explanation": "SELMA KERN ist gegen Haselnuss allergisch (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q14",
      "simulationId": "gm-sim3",
      "questionNumber": 14,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu LILITH MAYER (Ausweis 6)?",
      "options": {
        "A": "35128",
        "B": "78492",
        "C": "62914",
        "D": "59803",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim3-card06",
      "explanation": "LILITH MAYER hat die Nummer 59803 (Option D).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q15",
      "simulationId": "gm-sim3",
      "questionNumber": 15,
      "category": "bloodGroup",
      "questionText": "Welche Blutgruppe hat ANOUK BAUR (Ausweis 4)?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "0 Rh+",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim3-card04",
      "explanation": "ANOUK BAUR hat die Blutgruppe 0. Da '0' nicht in A–D steht, ist Option E korrekt.",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q16",
      "simulationId": "gm-sim3",
      "questionNumber": 16,
      "category": "name",
      "questionText": "Welche Person hat am 25.08. Geburtstag?",
      "options": {
        "A": "SELMA KERN",
        "B": "ANOUK BAUR",
        "C": "LILITH MAYER",
        "D": "NORA KOVAL",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim3-card02",
      "explanation": "Am 25.08. hat SELMA KERN Geburtstag (Option A).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q17",
      "simulationId": "gm-sim3",
      "questionNumber": 17,
      "category": "photo",
      "questionText": "Welches optische Merkmal zeichnet KASPAR LEY (Ausweis 1) aus?",
      "options": {
        "A": "Langes blondes Haar",
        "B": "Graues Haar & rechteckige Brille",
        "C": "Dunkler Bart & Brille",
        "D": "Schwarzer Haarknoten",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim3-card01",
      "explanation": "KASPAR LEY (Avatar 6) hat graues Haar und eine rechteckige Brille (Option B).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q18",
      "simulationId": "gm-sim3",
      "questionNumber": 18,
      "category": "idNumber",
      "questionText": "Wie lautet die Ausweisnummer von SELMA KERN (Ausweis 2)?",
      "options": {
        "A": "35128",
        "B": "62914",
        "C": "78492",
        "D": "91380",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim3-card02",
      "explanation": "Die Ausweisnummer von SELMA KERN ist 78492 (Option C).",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q19",
      "simulationId": "gm-sim3",
      "questionNumber": 19,
      "category": "country",
      "questionText": "In welchem Land wurde der Ausweis von ANOUK BAUR (Ausweis 4) ausgestellt?",
      "options": {
        "A": "Deutschland",
        "B": "Österreich",
        "C": "Schweiz",
        "D": "Italien",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim3-card04",
      "explanation": "ANOUK BAURs Ausweis stammt aus Italien (Option D).",
      "difficulty": "Leicht"
    },
    {
      "id": "gm-sim3-q20",
      "simulationId": "gm-sim3",
      "questionNumber": 20,
      "category": "idNumber",
      "questionText": "Welche Ausweisnummer gehört zu NORA KOVAL (Ausweis 8)?",
      "options": {
        "A": "35128",
        "B": "78492",
        "C": "62914",
        "D": "91380",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim3-card08",
      "explanation": "NORA KOVALs Ausweisnummer ist 47529. Da diese nicht in A–D vorkommt, ist Option E korrekt.",
      "difficulty": "Mittel"
    },
    {
      "id": "gm-sim3-q21",
      "simulationId": "gm-sim3",
      "questionNumber": 21,
      "category": "cross_card",
      "questionText": "Welche Person hat die Blutgruppe A und stammt aus Deutschland?",
      "options": {
        "A": "KASPAR LEY",
        "B": "DARIUS VETH",
        "C": "SELMA KERN",
        "D": "TIMUR GRAF",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "A",
      "sourceCardId": "gm-sim3-card01",
      "explanation": "Blutgruppe A besitzen Kaspar Ley (Deutschland) und Darius Veth (Spanien). Aus Deutschland stammt KASPAR LEY (Option A).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim3-q22",
      "simulationId": "gm-sim3",
      "questionNumber": 22,
      "category": "cross_card",
      "questionText": "Welche Person hat Blutgruppe AB und leidet an Tierhaarallergien (Katzen/Hunde)?",
      "options": {
        "A": "FABIAN WOLF",
        "B": "TIMUR GRAF",
        "C": "KASPAR LEY",
        "D": "LILITH MAYER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "B",
      "sourceCardId": "gm-sim3-card07",
      "explanation": "TIMUR GRAF hat Blutgruppe AB und Allergien gegen Katzen und Hunde (Option B).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim3-q23",
      "simulationId": "gm-sim3",
      "questionNumber": 23,
      "category": "cross_card",
      "questionText": "Welche Person nimmt Medikamente ein und hat eine Penicillin-Allergie?",
      "options": {
        "A": "KASPAR LEY",
        "B": "TIMUR GRAF",
        "C": "FABIAN WOLF",
        "D": "DARIUS VETH",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "C",
      "sourceCardId": "gm-sim3-card03",
      "explanation": "FABIAN WOLF nimmt Medikamente (Ja) und hat eine Penicillin-Allergie (Option C).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim3-q24",
      "simulationId": "gm-sim3",
      "questionNumber": 24,
      "category": "cross_card",
      "questionText": "In welchem Land wurde der Ausweis der Person ausgestellt, die am 25.08. Geburtstag hat?",
      "options": {
        "A": "Deutschland",
        "B": "Schweiz",
        "C": "Italien",
        "D": "Österreich",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "D",
      "sourceCardId": "gm-sim3-card02",
      "explanation": "Am 25.08. hat Selma Kern Geburtstag. Ihr Ausstellungsland ist Österreich (Option D).",
      "difficulty": "Schwer"
    },
    {
      "id": "gm-sim3-q25",
      "simulationId": "gm-sim3",
      "questionNumber": 25,
      "category": "cross_card",
      "questionText": "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?",
      "options": {
        "A": "ANOUK BAUR",
        "B": "NORA KOVAL",
        "C": "SELMA KERN",
        "D": "LILITH MAYER",
        "E": "Keine der gegebenen Antworten ist korrekt"
      },
      "correctAnswer": "E",
      "sourceCardId": "gm-sim3-card08",
      "explanation": "Blutgruppe 0 haben Anouk Baur (Nein) und Nora Koval (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente, daher ist E korrekt.",
      "difficulty": "Schwer"
    }
  ]
};
