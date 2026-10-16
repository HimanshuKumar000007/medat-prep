const fs = require("fs");
const path = require("path");

const SIM_2_TO_5_SPECS = [
  // ==========================================
  // --- GM SIMULATION 2 ---
  // ==========================================
  {
    simNumber: 2,
    simulationId: "gm-sim2",
    title: "Simulation 2 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    cards: [
      { id: "gm-sim2-card01", simulationId: "gm-sim2", cardNumber: 1, name: "MALIK DORN", birthDate: "05.01.", medication: true, bloodGroup: "A", allergies: ["Birke"], idNumber: "41982", country: "Österreich", photo: "avatar-02" },
      { id: "gm-sim2-card02", simulationId: "gm-sim2", cardNumber: 2, name: "ELENI SOMMER", birthDate: "18.06.", medication: false, bloodGroup: "B", allergies: ["Milch", "Soja"], idNumber: "63204", country: "Deutschland", photo: "avatar-01" },
      { id: "gm-sim2-card03", simulationId: "gm-sim2", cardNumber: 3, name: "JONAS REITER", birthDate: "29.04.", medication: true, bloodGroup: "AB", allergies: ["Haselnuss"], idNumber: "87519", country: "Schweiz", photo: "avatar-04" },
      { id: "gm-sim2-card04", simulationId: "gm-sim2", cardNumber: 4, name: "MIRNA KOCH", birthDate: "11.12.", medication: false, bloodGroup: "0", allergies: ["Hunde", "Katzen"], idNumber: "15438", country: "Italien", photo: "avatar-03" },
      { id: "gm-sim2-card05", simulationId: "gm-sim2", cardNumber: 5, name: "DENIZ WENZEL", birthDate: "22.08.", medication: true, bloodGroup: "A", allergies: ["Erdnuss"], idNumber: "79246", country: "Spanien", photo: "avatar-06" },
      { id: "gm-sim2-card06", simulationId: "gm-sim2", cardNumber: 6, name: "RINA MOSER", birthDate: "15.03.", medication: false, bloodGroup: "B", allergies: ["Penicillin"], idNumber: "32871", country: "Österreich", photo: "avatar-05" },
      { id: "gm-sim2-card07", simulationId: "gm-sim2", cardNumber: 7, name: "LEVIN BERG", birthDate: "09.10.", medication: true, bloodGroup: "AB", allergies: ["Hausstaub", "Schimmel"], idNumber: "56193", country: "Frankreich", photo: "avatar-08" },
      { id: "gm-sim2-card08", simulationId: "gm-sim2", cardNumber: 8, name: "ALVA FUCHS", birthDate: "27.07.", medication: false, bloodGroup: "0", allergies: [], idNumber: "94305", country: "Deutschland", photo: "avatar-07" },
    ],
    questions: [
      { qNum: 1, cat: "bloodGroup", sourceCardId: "gm-sim2-card01", diff: "Leicht", q: "Welche Blutgruppe besitzt MALIK DORN (Ausweis 1)?", opts: { A: "A", B: "B", C: "AB", D: "0", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "MALIK DORN hat Blutgruppe A (Option A)." },
      { qNum: 2, cat: "medication", sourceCardId: "gm-sim2-card02", diff: "Leicht", q: "Nimmt ELENI SOMMER (Ausweis 2) Medikamente ein?", opts: { A: "Ja", B: "Nein", C: "Regelmäßig", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "ELENI SOMMER nimmt laut Ausweis keine Medikamente (Option B)." },
      { qNum: 3, cat: "country", sourceCardId: "gm-sim2-card03", diff: "Leicht", q: "In welchem Land wurde der Ausweis von JONAS REITER (Ausweis 3) ausgestellt?", opts: { A: "Österreich", B: "Deutschland", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "JONAS REITERs Ausweis stammt aus der Schweiz (Option C)." },
      { qNum: 4, cat: "idNumber", sourceCardId: "gm-sim2-card04", diff: "Mittel", q: "Wie lautet die Ausweisnummer von MIRNA KOCH (Ausweis 4)?", opts: { A: "41982", B: "63204", C: "87519", D: "15438", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Die Ausweisnummer von MIRNA KOCH lautet 15438 (Option D)." },
      { qNum: 5, cat: "birthDate", sourceCardId: "gm-sim2-card05", diff: "Mittel", q: "Wann hat DENIZ WENZEL (Ausweis 5) Geburtstag?", opts: { A: "05.01.", B: "18.06.", C: "29.04.", D: "11.12.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "DENIZ WENZEL hat am 22.08. Geburtstag. Da dies nicht in A–D steht, ist Option E korrekt." },
      { qNum: 6, cat: "allergies", sourceCardId: "gm-sim2-card06", diff: "Leicht", q: "Gegen welches Medikament liegt bei RINA MOSER (Ausweis 6) eine Allergie vor?", opts: { A: "Penicillin", B: "Aspirin", C: "Ibuprofen", D: "Paracetamol", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "RINA MOSER ist allergisch gegen Penicillin (Option A)." },
      { qNum: 7, cat: "name", sourceCardId: "gm-sim2-card07", diff: "Mittel", q: "Welche Person besitzt die Ausweisnummer 56193?", opts: { A: "MALIK DORN", B: "LEVIN BERG", C: "JONAS REITER", D: "ALVA FUCHS", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "Die Ausweisnummer 56193 gehört zu LEVIN BERG (Option B)." },
      { qNum: 8, cat: "allergies", sourceCardId: "gm-sim2-card08", diff: "Mittel", q: "Welche Allergien sind für ALVA FUCHS (Ausweis 8) dokumentiert?", opts: { A: "Milch & Soja", B: "Hausstaub", C: "Keine bekannten Allergien", D: "Birke", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "ALVA FUCHS hat keine bekannten Allergien (Option C)." },
      { qNum: 9, cat: "bloodGroup", sourceCardId: "gm-sim2-card03", diff: "Leicht", q: "Welche Blutgruppe hat JONAS REITER (Ausweis 3)?", opts: { A: "0", B: "B", C: "A", D: "AB", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "JONAS REITER hat Blutgruppe AB (Option D)." },
      { qNum: 10, cat: "country", sourceCardId: "gm-sim2-card07", diff: "Mittel", q: "In welchem Land wurde der Ausweis von LEVIN BERG (Ausweis 7) ausgestellt?", opts: { A: "Österreich", B: "Deutschland", C: "Schweiz", D: "Spanien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "LEVIN BERGs Ausweis stammt aus Frankreich. Da Frankreich nicht in A–D steht, ist Option E korrekt." },
      { qNum: 11, cat: "birthDate", sourceCardId: "gm-sim2-card01", diff: "Leicht", q: "An welchem Datum hat MALIK DORN (Ausweis 1) Geburtstag?", opts: { A: "05.01.", B: "18.06.", C: "22.08.", D: "09.10.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "MALIK DORN hat am 05.01. Geburtstag (Option A)." },
      { qNum: 12, cat: "medication", sourceCardId: "gm-sim2-card05", diff: "Leicht", q: "Nimmt DENIZ WENZEL (Ausweis 5) laut Ausweis Medikamente?", opts: { A: "Nein", B: "Ja", C: "Bedarfsmedikation", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "DENIZ WENZEL nimmt Medikamente (Ja) (Option B)." },
      { qNum: 13, cat: "allergies", sourceCardId: "gm-sim2-card02", diff: "Mittel", q: "Gegen welche Stoffe ist ELENI SOMMER (Ausweis 2) allergisch?", opts: { A: "Haselnuss", B: "Erdnuss", C: "Milch & Soja", D: "Katzen", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "ELENI SOMMER ist allergisch gegen Milch und Soja (Option C)." },
      { qNum: 14, cat: "idNumber", sourceCardId: "gm-sim2-card06", diff: "Mittel", q: "Welche Ausweisnummer gehört zu RINA MOSER (Ausweis 6)?", opts: { A: "41982", B: "63204", C: "15438", D: "32871", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "RINA MOSERs Ausweisnummer lautet 32871 (Option D)." },
      { qNum: 15, cat: "bloodGroup", sourceCardId: "gm-sim2-card08", diff: "Leicht", q: "Welche Blutgruppe ist für ALVA FUCHS (Ausweis 8) vermerkt?", opts: { A: "A", B: "B", C: "AB", D: "A Rh+", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "ALVA FUCHS hat Blutgruppe 0. Da 0 nicht in A–D aufgeführt ist, ist Antwort E korrekt." },
      { qNum: 16, cat: "name", sourceCardId: "gm-sim2-card04", diff: "Mittel", q: "Welche Person hat am 11.12. Geburtstag?", opts: { A: "MIRNA KOCH", B: "ELENI SOMMER", C: "RINA MOSER", D: "ALVA FUCHS", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "Am 11.12. hat MIRNA KOCH Geburtstag (Option A)." },
      { qNum: 17, cat: "photo", sourceCardId: "gm-sim2-card04", diff: "Mittel", q: "Welches visuelle Merkmal zeichnet MIRNA KOCH (Ausweis 4) aus?", opts: { A: "Runde Brille mit Dutt", B: "Langes blondes Haar", C: "Graues Haar mit Brille", D: "Schwarze Lockenfrisur", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "MIRNA KOCH (Avatar 3) zeichnet sich durch langes blondes Haar aus (Option B)." },
      { qNum: 18, cat: "idNumber", sourceCardId: "gm-sim2-card03", diff: "Mittel", q: "Wie lautet die Ausweisnummer von JONAS REITER (Ausweis 3)?", opts: { A: "41982", B: "63204", C: "87519", D: "79246", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "JONAS REITER hat die Ausweisnummer 87519 (Option C)." },
      { qNum: 19, cat: "country", sourceCardId: "gm-sim2-card01", diff: "Leicht", q: "Aus welchem Land stammt der Ausweis von MALIK DORN (Ausweis 1)?", opts: { A: "Deutschland", B: "Schweiz", C: "Italien", D: "Österreich", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "MALIK DORNs Ausweis stammt aus Österreich (Option D)." },
      { qNum: 20, cat: "idNumber", sourceCardId: "gm-sim2-card08", diff: "Mittel", q: "Welche Ausweisnummer gehört zu ALVA FUCHS (Ausweis 8)?", opts: { A: "41982", B: "63204", C: "87519", D: "32871", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "ALVA FUCHS hat die Ausweisnummer 94305. Da 94305 nicht in A–D steht, ist Option E korrekt." },
      { qNum: 21, cat: "cross_card", sourceCardId: "gm-sim2-card01", diff: "Schwer", q: "Welche Person hat die Blutgruppe A und leidet an einer Birke-Allergie?", opts: { A: "MALIK DORN", B: "DENIZ WENZEL", C: "RINA MOSER", D: "JONAS REITER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "Blutgruppe A haben Malik Dorn (Birke) und Deniz Wenzel (Erdnuss). Die Birke-Allergie hat MALIK DORN (Option A)." },
      { qNum: 22, cat: "cross_card", sourceCardId: "gm-sim2-card06", diff: "Schwer", q: "Welche Person mit Blutgruppe B stammt aus Österreich?", opts: { A: "ELENI SOMMER", B: "RINA MOSER", C: "MALIK DORN", D: "ALVA FUCHS", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "Blutgruppe B haben Eleni Sommer (Deutschland) und Rina Moser (Österreich). Aus Österreich stammt RINA MOSER (Option B)." },
      { qNum: 23, cat: "cross_card", sourceCardId: "gm-sim2-card07", diff: "Schwer", q: "Welche Person nimmt Medikamente ein und hat eine Hausstaub-Allergie?", opts: { A: "DENIZ WENZEL", B: "JONAS REITER", C: "LEVIN BERG", D: "MALIK DORN", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "LEVIN BERG nimmt Medikamente (Ja) und leidet an Hausstaub- und Schimmelallergie (Option C)." },
      { qNum: 24, cat: "cross_card", sourceCardId: "gm-sim2-card04", diff: "Schwer", q: "In welchem Land wurde der Ausweis der Person ausgestellt, die am 11.12. Geburtstag hat?", opts: { A: "Deutschland", B: "Schweiz", C: "Spanien", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Am 11.12. hat Mirna Koch Geburtstag. Ihr Ausstellungsland ist Italien (Option D)." },
      { qNum: 25, cat: "cross_card", sourceCardId: "gm-sim2-card08", diff: "Schwer", q: "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?", opts: { A: "MIRNA KOCH", B: "ALVA FUCHS", C: "ELENI SOMMER", D: "RINA MOSER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "Blutgruppe 0 haben Mirna Koch (Nein) und Alva Fuchs (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente ein, daher ist E korrekt." },
    ],
  },

  // ==========================================
  // --- GM SIMULATION 3 ---
  // ==========================================
  {
    simNumber: 3,
    simulationId: "gm-sim3",
    title: "Simulation 3 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    cards: [
      { id: "gm-sim3-card01", simulationId: "gm-sim3", cardNumber: 1, name: "KASPAR LEY", birthDate: "12.03.", medication: true, bloodGroup: "A", allergies: ["Pollen", "Gräser"], idNumber: "35128", country: "Deutschland", photo: "avatar-06" },
      { id: "gm-sim3-card02", simulationId: "gm-sim3", cardNumber: 2, name: "SELMA KERN", birthDate: "25.08.", medication: false, bloodGroup: "B", allergies: ["Haselnuss"], idNumber: "78492", country: "Österreich", photo: "avatar-03" },
      { id: "gm-sim3-card03", simulationId: "gm-sim3", cardNumber: 3, name: "FABIAN WOLF", birthDate: "03.11.", medication: true, bloodGroup: "AB", allergies: ["Penicillin", "Soja"], idNumber: "62914", country: "Schweiz", photo: "avatar-04" },
      { id: "gm-sim3-card04", simulationId: "gm-sim3", cardNumber: 4, name: "ANOUK BAUR", birthDate: "17.06.", medication: false, bloodGroup: "0", allergies: ["Birke"], idNumber: "91380", country: "Italien", photo: "avatar-05" },
      { id: "gm-sim3-card05", simulationId: "gm-sim3", cardNumber: 5, name: "DARIUS VETH", birthDate: "30.01.", medication: true, bloodGroup: "A", allergies: ["Erdnuss"], idNumber: "24675", country: "Spanien", photo: "avatar-08" },
      { id: "gm-sim3-card06", simulationId: "gm-sim3", cardNumber: 6, name: "LILITH MAYER", birthDate: "14.09.", medication: false, bloodGroup: "B", allergies: ["Wespen"], idNumber: "59803", country: "Deutschland", photo: "avatar-07" },
      { id: "gm-sim3-card07", simulationId: "gm-sim3", cardNumber: 7, name: "TIMUR GRAF", birthDate: "21.04.", medication: true, bloodGroup: "AB", allergies: ["Katzen", "Hunde"], idNumber: "83167", country: "Österreich", photo: "avatar-02" },
      { id: "gm-sim3-card08", simulationId: "gm-sim3", cardNumber: 8, name: "NORA KOVAL", birthDate: "09.12.", medication: false, bloodGroup: "0", allergies: [], idNumber: "47529", country: "Schweiz", photo: "avatar-01" },
    ],
    questions: [
      { qNum: 1, cat: "bloodGroup", sourceCardId: "gm-sim3-card01", diff: "Leicht", q: "Welche Blutgruppe ist für KASPAR LEY (Ausweis 1) vermerkt?", opts: { A: "A", B: "B", C: "AB", D: "0", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "KASPAR LEY hat Blutgruppe A (Option A)." },
      { qNum: 2, cat: "medication", sourceCardId: "gm-sim3-card02", diff: "Leicht", q: "Nimmt SELMA KERN (Ausweis 2) Medikamente?", opts: { A: "Ja", B: "Nein", C: "Bedarfsmedikation", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "SELMA KERN nimmt keine Medikamente (Nein) (Option B)." },
      { qNum: 3, cat: "country", sourceCardId: "gm-sim3-card03", diff: "Leicht", q: "In welchem Land wurde der Ausweis von FABIAN WOLF (Ausweis 3) ausgestellt?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "FABIAN WOLF stammt aus der Schweiz (Option C)." },
      { qNum: 4, cat: "idNumber", sourceCardId: "gm-sim3-card04", diff: "Mittel", q: "Welche Ausweisnummer gehört zu ANOUK BAUR (Ausweis 4)?", opts: { A: "35128", B: "78492", C: "62914", D: "91380", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Die Ausweisnummer von ANOUK BAUR ist 91380 (Option D)." },
      { qNum: 5, cat: "birthDate", sourceCardId: "gm-sim3-card05", diff: "Mittel", q: "Wann hat DARIUS VETH (Ausweis 5) Geburtstag?", opts: { A: "12.03.", B: "25.08.", C: "03.11.", D: "17.06.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "DARIUS VETH hat am 30.01. Geburtstag. Da dies nicht in A–D steht, ist Option E korrekt." },
      { qNum: 6, cat: "allergies", sourceCardId: "gm-sim3-card06", diff: "Leicht", q: "Gegen welches Insektengift ist LILITH MAYER (Ausweis 6) allergisch?", opts: { A: "Wespen", B: "Bienen", C: "Hornissen", D: "Mücken", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "LILITH MAYER hat eine Allergie gegen Wespen (Option A)." },
      { qNum: 7, cat: "name", sourceCardId: "gm-sim3-card07", diff: "Mittel", q: "Welche Person hat die Ausweisnummer 83167?", opts: { A: "KASPAR LEY", B: "TIMUR GRAF", C: "FABIAN WOLF", D: "DARIUS VETH", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "Die Ausweisnummer 83167 gehört zu TIMUR GRAF (Option B)." },
      { qNum: 8, cat: "allergies", sourceCardId: "gm-sim3-card08", diff: "Mittel", q: "Welche Allergien sind für NORA KOVAL (Ausweis 8) dokumentiert?", opts: { A: "Pollen & Gräser", B: "Haselnuss", C: "Keine bekannten Allergien", D: "Erdnuss", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "NORA KOVAL hat keine bekannten Allergien (Option C)." },
      { qNum: 9, cat: "bloodGroup", sourceCardId: "gm-sim3-card07", diff: "Leicht", q: "Welche Blutgruppe besitzt TIMUR GRAF (Ausweis 7)?", opts: { A: "A", B: "B", C: "0", D: "AB", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "TIMUR GRAF hat Blutgruppe AB (Option D)." },
      { qNum: 10, cat: "country", sourceCardId: "gm-sim3-card05", diff: "Mittel", q: "Aus welchem Land stammt der Ausweis von DARIUS VETH (Ausweis 5)?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "DARIUS VETHs Ausweis stammt aus Spanien. Da Spanien nicht aufgeführt ist, ist Option E korrekt." },
      { qNum: 11, cat: "birthDate", sourceCardId: "gm-sim3-card01", diff: "Leicht", q: "Wann hat KASPAR LEY (Ausweis 1) Geburtstag?", opts: { A: "12.03.", B: "25.08.", C: "14.09.", D: "09.12.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "KASPAR LEY hat am 12.03. Geburtstag (Option A)." },
      { qNum: 12, cat: "medication", sourceCardId: "gm-sim3-card03", diff: "Leicht", q: "Nimmt FABIAN WOLF (Ausweis 3) laut Ausweis Medikamente?", opts: { A: "Nein", B: "Ja", C: "Nur Schmerzmittel", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "FABIAN WOLF nimmt Medikamente (Ja) (Option B)." },
      { qNum: 13, cat: "allergies", sourceCardId: "gm-sim3-card02", diff: "Mittel", q: "Gegen welches Allergen ist SELMA KERN (Ausweis 2) allergisch?", opts: { A: "Erdnuss", B: "Birke", C: "Haselnuss", D: "Milch", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "SELMA KERN ist gegen Haselnuss allergisch (Option C)." },
      { qNum: 14, cat: "idNumber", sourceCardId: "gm-sim3-card06", diff: "Mittel", q: "Welche Ausweisnummer gehört zu LILITH MAYER (Ausweis 6)?", opts: { A: "35128", B: "78492", C: "62914", D: "59803", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "LILITH MAYER hat die Nummer 59803 (Option D)." },
      { qNum: 15, cat: "bloodGroup", sourceCardId: "gm-sim3-card04", diff: "Leicht", q: "Welche Blutgruppe hat ANOUK BAUR (Ausweis 4)?", opts: { A: "A", B: "B", C: "AB", D: "0 Rh+", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "ANOUK BAUR hat die Blutgruppe 0. Da '0' nicht in A–D steht, ist Option E korrekt." },
      { qNum: 16, cat: "name", sourceCardId: "gm-sim3-card02", diff: "Mittel", q: "Welche Person hat am 25.08. Geburtstag?", opts: { A: "SELMA KERN", B: "ANOUK BAUR", C: "LILITH MAYER", D: "NORA KOVAL", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "Am 25.08. hat SELMA KERN Geburtstag (Option A)." },
      { qNum: 17, cat: "photo", sourceCardId: "gm-sim3-card01", diff: "Mittel", q: "Welches optische Merkmal zeichnet KASPAR LEY (Ausweis 1) aus?", opts: { A: "Langes blondes Haar", B: "Graues Haar & rechteckige Brille", C: "Dunkler Bart & Brille", D: "Schwarzer Haarknoten", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "KASPAR LEY (Avatar 6) hat graues Haar und eine rechteckige Brille (Option B)." },
      { qNum: 18, cat: "idNumber", sourceCardId: "gm-sim3-card02", diff: "Mittel", q: "Wie lautet die Ausweisnummer von SELMA KERN (Ausweis 2)?", opts: { A: "35128", B: "62914", C: "78492", D: "91380", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "Die Ausweisnummer von SELMA KERN ist 78492 (Option C)." },
      { qNum: 19, cat: "country", sourceCardId: "gm-sim3-card04", diff: "Leicht", q: "In welchem Land wurde der Ausweis von ANOUK BAUR (Ausweis 4) ausgestellt?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "ANOUK BAURs Ausweis stammt aus Italien (Option D)." },
      { qNum: 20, cat: "idNumber", sourceCardId: "gm-sim3-card08", diff: "Mittel", q: "Welche Ausweisnummer gehört zu NORA KOVAL (Ausweis 8)?", opts: { A: "35128", B: "78492", C: "62914", D: "91380", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "NORA KOVALs Ausweisnummer ist 47529. Da diese nicht in A–D vorkommt, ist Option E korrekt." },
      { qNum: 21, cat: "cross_card", sourceCardId: "gm-sim3-card01", diff: "Schwer", q: "Welche Person hat die Blutgruppe A und stammt aus Deutschland?", opts: { A: "KASPAR LEY", B: "DARIUS VETH", C: "SELMA KERN", D: "TIMUR GRAF", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "Blutgruppe A besitzen Kaspar Ley (Deutschland) und Darius Veth (Spanien). Aus Deutschland stammt KASPAR LEY (Option A)." },
      { qNum: 22, cat: "cross_card", sourceCardId: "gm-sim3-card07", diff: "Schwer", q: "Welche Person hat Blutgruppe AB und leidet an Tierhaarallergien (Katzen/Hunde)?", opts: { A: "FABIAN WOLF", B: "TIMUR GRAF", C: "KASPAR LEY", D: "LILITH MAYER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "TIMUR GRAF hat Blutgruppe AB und Allergien gegen Katzen und Hunde (Option B)." },
      { qNum: 23, cat: "cross_card", sourceCardId: "gm-sim3-card03", diff: "Schwer", q: "Welche Person nimmt Medikamente ein und hat eine Penicillin-Allergie?", opts: { A: "KASPAR LEY", B: "TIMUR GRAF", C: "FABIAN WOLF", D: "DARIUS VETH", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "FABIAN WOLF nimmt Medikamente (Ja) und hat eine Penicillin-Allergie (Option C)." },
      { qNum: 24, cat: "cross_card", sourceCardId: "gm-sim3-card02", diff: "Schwer", q: "In welchem Land wurde der Ausweis der Person ausgestellt, die am 25.08. Geburtstag hat?", opts: { A: "Deutschland", B: "Schweiz", C: "Italien", D: "Österreich", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Am 25.08. hat Selma Kern Geburtstag. Ihr Ausstellungsland ist Österreich (Option D)." },
      { qNum: 25, cat: "cross_card", sourceCardId: "gm-sim3-card08", diff: "Schwer", q: "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?", opts: { A: "ANOUK BAUR", B: "NORA KOVAL", C: "SELMA KERN", D: "LILITH MAYER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "Blutgruppe 0 haben Anouk Baur (Nein) und Nora Koval (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente, daher ist E korrekt." },
    ],
  },

  // ==========================================
  // --- GM SIMULATION 4 ---
  // ==========================================
  {
    simNumber: 4,
    simulationId: "gm-sim4",
    title: "Simulation 4 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    cards: [
      { id: "gm-sim4-card01", simulationId: "gm-sim4", cardNumber: 1, name: "RUBEN SCHMIDT", birthDate: "07.02.", medication: true, bloodGroup: "A", allergies: ["Milch"], idNumber: "18942", country: "Deutschland", photo: "avatar-04" },
      { id: "gm-sim4-card02", simulationId: "gm-sim4", cardNumber: 2, name: "MAELIN EGGER", birthDate: "19.10.", medication: false, bloodGroup: "B", allergies: ["Birke", "Erle"], idNumber: "53186", country: "Österreich", photo: "avatar-01" },
      { id: "gm-sim4-card03", simulationId: "gm-sim4", cardNumber: 3, name: "CORIN BRUNNER", birthDate: "31.05.", medication: true, bloodGroup: "AB", allergies: ["Hausstaub"], idNumber: "84729", country: "Schweiz", photo: "avatar-02" },
      { id: "gm-sim4-card04", simulationId: "gm-sim4", cardNumber: 4, name: "YLVI KOFLER", birthDate: "14.12.", medication: false, bloodGroup: "0", allergies: ["Haselnuss"], idNumber: "29615", country: "Italien", photo: "avatar-03" },
      { id: "gm-sim4-card05", simulationId: "gm-sim4", cardNumber: 5, name: "JANNO PICHLER", birthDate: "23.04.", medication: true, bloodGroup: "A", allergies: ["Katzen"], idNumber: "76350", country: "Spanien", photo: "avatar-08" },
      { id: "gm-sim4-card06", simulationId: "gm-sim4", cardNumber: 6, name: "SVEA LERCH", birthDate: "08.09.", medication: false, bloodGroup: "B", allergies: ["Erdnuss", "Soja"], idNumber: "42807", country: "Deutschland", photo: "avatar-05" },
      { id: "gm-sim4-card07", simulationId: "gm-sim4", cardNumber: 7, name: "DAMIAN HOCH", birthDate: "16.01.", medication: true, bloodGroup: "AB", allergies: ["Penicillin"], idNumber: "95173", country: "Österreich", photo: "avatar-06" },
      { id: "gm-sim4-card08", simulationId: "gm-sim4", cardNumber: 8, name: "NELIA STURM", birthDate: "28.08.", medication: false, bloodGroup: "0", allergies: [], idNumber: "61498", country: "Frankreich", photo: "avatar-07" },
    ],
    questions: [
      { qNum: 1, cat: "bloodGroup", sourceCardId: "gm-sim4-card01", diff: "Leicht", q: "Welche Blutgruppe besitzt RUBEN SCHMIDT (Ausweis 1)?", opts: { A: "A", B: "B", C: "AB", D: "0", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "RUBEN SCHMIDT hat Blutgruppe A (Option A)." },
      { qNum: 2, cat: "medication", sourceCardId: "gm-sim4-card02", diff: "Leicht", q: "Nimmt MAELIN EGGER (Ausweis 2) Medikamente ein?", opts: { A: "Ja", B: "Nein", C: "Gelegentlich", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "MAELIN EGGER nimmt keine Medikamente (Nein) (Option B)." },
      { qNum: 3, cat: "country", sourceCardId: "gm-sim4-card03", diff: "Leicht", q: "In welchem Land wurde der Ausweis von CORIN BRUNNER (Ausweis 3) ausgestellt?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "CORIN BRUNNERs Ausweis stammt aus der Schweiz (Option C)." },
      { qNum: 4, cat: "idNumber", sourceCardId: "gm-sim4-card04", diff: "Mittel", q: "Wie lautet die Ausweisnummer von YLVI KOFLER (Ausweis 4)?", opts: { A: "18942", B: "53186", C: "84729", D: "29615", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Die Ausweisnummer von YLVI KOFLER lautet 29615 (Option D)." },
      { qNum: 5, cat: "birthDate", sourceCardId: "gm-sim4-card05", diff: "Mittel", q: "An welchem Datum hat JANNO PICHLER (Ausweis 5) Geburtstag?", opts: { A: "07.02.", B: "19.10.", C: "31.05.", D: "14.12.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "JANNO PICHLER hat am 23.04. Geburtstag. Da dieses Datum in A–D fehlt, ist Option E korrekt." },
      { qNum: 6, cat: "allergies", sourceCardId: "gm-sim4-card06", diff: "Leicht", q: "Gegen welche Nahrungsmittel ist SVEA LERCH (Ausweis 6) allergisch?", opts: { A: "Erdnuss & Soja", B: "Milch & Weizen", C: "Haselnuss", D: "Fisch", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "SVEA LERCH ist allergisch gegen Erdnuss und Soja (Option A)." },
      { qNum: 7, cat: "name", sourceCardId: "gm-sim4-card07", diff: "Mittel", q: "Welche Person hat die Ausweisnummer 95173?", opts: { A: "RUBEN SCHMIDT", B: "DAMIAN HOCH", C: "CORIN BRUNNER", D: "NELIA STURM", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "Die Nummer 95173 gehört zu DAMIAN HOCH (Option B)." },
      { qNum: 8, cat: "allergies", sourceCardId: "gm-sim4-card08", diff: "Mittel", q: "Welche Allergien hat NELIA STURM (Ausweis 8)?", opts: { A: "Milch", B: "Birke", C: "Keine bekannten Allergien", D: "Penicillin", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "NELIA STURM hat keine bekannten Allergien (Option C)." },
      { qNum: 9, cat: "bloodGroup", sourceCardId: "gm-sim4-card07", diff: "Leicht", q: "Welche Blutgruppe ist für DAMIAN HOCH (Ausweis 7) vermerkt?", opts: { A: "A", B: "B", C: "0", D: "AB", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "DAMIAN HOCH hat Blutgruppe AB (Option D)." },
      { qNum: 10, cat: "country", sourceCardId: "gm-sim4-card05", diff: "Mittel", q: "Aus welchem Land stammt der Ausweis von JANNO PICHLER (Ausweis 5)?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "JANNO PICHLERs Ausweis stammt aus Spanien. Da Spanien nicht aufgeführt ist, ist E korrekt." },
      { qNum: 11, cat: "birthDate", sourceCardId: "gm-sim4-card01", diff: "Leicht", q: "Wann hat RUBEN SCHMIDT (Ausweis 1) Geburtstag?", opts: { A: "07.02.", B: "19.10.", C: "08.09.", D: "28.08.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "RUBEN SCHMIDT hat am 07.02. Geburtstag (Option A)." },
      { qNum: 12, cat: "medication", sourceCardId: "gm-sim4-card03", diff: "Leicht", q: "Nimmt CORIN BRUNNER (Ausweis 3) laut Ausweis Medikamente ein?", opts: { A: "Nein", B: "Ja", C: "Nur bei Allergie", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "CORIN BRUNNER nimmt Medikamente (Ja) (Option B)." },
      { qNum: 13, cat: "allergies", sourceCardId: "gm-sim4-card04", diff: "Mittel", q: "Gegen welches Allergen ist YLVI KOFLER (Ausweis 4) allergisch?", opts: { A: "Erdnuss", B: "Birke", C: "Haselnuss", D: "Milch", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "YLVI KOFLER ist allergisch gegen Haselnuss (Option C)." },
      { qNum: 14, cat: "idNumber", sourceCardId: "gm-sim4-card06", diff: "Mittel", q: "Welche Ausweisnummer gehört zu SVEA LERCH (Ausweis 6)?", opts: { A: "18942", B: "53186", C: "84729", D: "42807", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "SVEA LERCHs Ausweisnummer lautet 42807 (Option D)." },
      { qNum: 15, cat: "bloodGroup", sourceCardId: "gm-sim4-card04", diff: "Leicht", q: "Welche Blutgruppe besitzt YLVI KOFLER (Ausweis 4)?", opts: { A: "A", B: "B", C: "AB", D: "A+", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "YLVI KOFLER hat Blutgruppe 0. Da '0' nicht in A–D steht, ist Option E korrekt." },
      { qNum: 16, cat: "name", sourceCardId: "gm-sim4-card02", diff: "Mittel", q: "Welche Person hat am 19.10. Geburtstag?", opts: { A: "MAELIN EGGER", B: "YLVI KOFLER", C: "SVEA LERCH", D: "NELIA STURM", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "Am 19.10. hat MAELIN EGGER Geburtstag (Option A)." },
      { qNum: 17, cat: "photo", sourceCardId: "gm-sim4-card01", diff: "Mittel", q: "Welches Merkmal trägt RUBEN SCHMIDT auf dem Ausweisfoto?", opts: { A: "Lange blonde Haare", B: "Auburn/rötliches Haar & Vollbart", C: "Graues Haar mit Brille", D: "Dutt und Brille", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "RUBEN SCHMIDT (Avatar 4) hat rötliches Haar und einen Bart (Option B)." },
      { qNum: 18, cat: "idNumber", sourceCardId: "gm-sim4-card02", diff: "Mittel", q: "Wie lautet die Ausweisnummer von MAELIN EGGER (Ausweis 2)?", opts: { A: "18942", B: "84729", C: "53186", D: "29615", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "Die Ausweisnummer von MAELIN EGGER lautet 53186 (Option C)." },
      { qNum: 19, cat: "country", sourceCardId: "gm-sim4-card04", diff: "Leicht", q: "In welchem Land wurde der Ausweis von YLVI KOFLER (Ausweis 4) ausgestellt?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "YLVI KOFLERs Ausweis stammt aus Italien (Option D)." },
      { qNum: 20, cat: "idNumber", sourceCardId: "gm-sim4-card08", diff: "Mittel", q: "Welche Ausweisnummer gehört zu NELIA STURM (Ausweis 8)?", opts: { A: "18942", B: "53186", C: "84729", D: "29615", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "NELIA STURM hat die Ausweisnummer 61498. Da diese in A–D fehlt, ist Option E korrekt." },
      { qNum: 21, cat: "cross_card", sourceCardId: "gm-sim4-card01", diff: "Schwer", q: "Welche Person hat die Blutgruppe A und leidet an einer Milchallergie?", opts: { A: "RUBEN SCHMIDT", B: "JANNO PICHLER", C: "MAELIN EGGER", D: "DAMIAN HOCH", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "RUBEN SCHMIDT hat Blutgruppe A und eine Milchallergie (Option A)." },
      { qNum: 22, cat: "cross_card", sourceCardId: "gm-sim4-card07", diff: "Schwer", q: "Welche Person hat Blutgruppe AB und leidet an einer Penicillin-Allergie?", opts: { A: "CORIN BRUNNER", B: "DAMIAN HOCH", C: "RUBEN SCHMIDT", D: "SVEA LERCH", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "DAMIAN HOCH hat Blutgruppe AB und eine Penicillin-Allergie (Option B)." },
      { qNum: 23, cat: "cross_card", sourceCardId: "gm-sim4-card03", diff: "Schwer", q: "In welchem Land wurde der Ausweis der Person ausgestellt, die am 31.05. Geburtstag hat?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Spanien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "Am 31.05. hat Corin Brunner Geburtstag. Ihr Ausstellungsland ist die Schweiz (Option C)." },
      { qNum: 24, cat: "cross_card", sourceCardId: "gm-sim4-card02", diff: "Schwer", q: "Welche Person mit Blutgruppe B stammt aus Österreich?", opts: { A: "SVEA LERCH", B: "RUBEN SCHMIDT", C: "DAMIAN HOCH", D: "MAELIN EGGER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Blutgruppe B haben Maelin Egger (Österreich) und Svea Lerch (Deutschland). Aus Österreich stammt MAELIN EGGER (Option D)." },
      { qNum: 25, cat: "cross_card", sourceCardId: "gm-sim4-card08", diff: "Schwer", q: "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?", opts: { A: "YLVI KOFLER", B: "NELIA STURM", C: "SVEA LERCH", D: "MAELIN EGGER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "Blutgruppe 0 haben Ylvi Kofler (Nein) und Nelia Sturm (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente, daher ist E korrekt." },
    ],
  },

  // ==========================================
  // --- GM SIMULATION 5 ---
  // ==========================================
  {
    simNumber: 5,
    simulationId: "gm-sim5",
    title: "Simulation 5 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    cards: [
      { id: "gm-sim5-card01", simulationId: "gm-sim5", cardNumber: 1, name: "MATIS LINDNER", birthDate: "16.02.", medication: true, bloodGroup: "A", allergies: ["Birke", "Haselnuss"], idNumber: "47219", country: "Österreich", photo: "avatar-08" },
      { id: "gm-sim5-card02", simulationId: "gm-sim5", cardNumber: 2, name: "RONJA KRAUS", birthDate: "02.11.", medication: false, bloodGroup: "B", allergies: ["Katzen"], idNumber: "83561", country: "Deutschland", photo: "avatar-05" },
      { id: "gm-sim5-card03", simulationId: "gm-sim5", cardNumber: 3, name: "TIAN WEBER", birthDate: "24.06.", medication: true, bloodGroup: "AB", allergies: ["Penicillin", "Erdnuss"], idNumber: "19472", country: "Schweiz", photo: "avatar-02" },
      { id: "gm-sim5-card04", simulationId: "gm-sim5", cardNumber: 4, name: "SMILLA ECK", birthDate: "10.04.", medication: false, bloodGroup: "0", allergies: ["Hunde"], idNumber: "65803", country: "Italien", photo: "avatar-07" },
      { id: "gm-sim5-card05", simulationId: "gm-sim5", cardNumber: 5, name: "BENT WALD", birthDate: "19.09.", medication: true, bloodGroup: "A", allergies: ["Hausstaub"], idNumber: "32958", country: "Spanien", photo: "avatar-04" },
      { id: "gm-sim5-card06", simulationId: "gm-sim5", cardNumber: 6, name: "FINJA MOOR", birthDate: "05.12.", medication: false, bloodGroup: "B", allergies: ["Milch"], idNumber: "74120", country: "Österreich", photo: "avatar-03" },
      { id: "gm-sim5-card07", simulationId: "gm-sim5", cardNumber: 7, name: "LORIS THIEL", birthDate: "13.07.", medication: true, bloodGroup: "AB", allergies: ["Wespen"], idNumber: "98345", country: "Deutschland", photo: "avatar-06" },
      { id: "gm-sim5-card08", simulationId: "gm-sim5", cardNumber: 8, name: "ENNA SAUER", birthDate: "28.03.", medication: false, bloodGroup: "0", allergies: [], idNumber: "51684", country: "Frankreich", photo: "avatar-01" },
    ],
    questions: [
      { qNum: 1, cat: "bloodGroup", sourceCardId: "gm-sim5-card01", diff: "Leicht", q: "Welche Blutgruppe hat MATIS LINDNER (Ausweis 1)?", opts: { A: "A", B: "B", C: "AB", D: "0", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "MATIS LINDNER hat Blutgruppe A (Option A)." },
      { qNum: 2, cat: "medication", sourceCardId: "gm-sim5-card02", diff: "Leicht", q: "Nimmt RONJA KRAUS (Ausweis 2) Medikamente ein?", opts: { A: "Ja", B: "Nein", C: "Bedarfsmedikation", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "RONJA KRAUS nimmt laut Ausweis keine Medikamente (Option B)." },
      { qNum: 3, cat: "country", sourceCardId: "gm-sim5-card03", diff: "Leicht", q: "In welchem Land wurde der Ausweis von TIAN WEBER (Ausweis 3) ausgestellt?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "TIAN WEBERs Ausweis stammt aus der Schweiz (Option C)." },
      { qNum: 4, cat: "idNumber", sourceCardId: "gm-sim5-card04", diff: "Mittel", q: "Welche Ausweisnummer gehört zu SMILLA ECK (Ausweis 4)?", opts: { A: "47219", B: "83561", C: "19472", D: "65803", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Die Ausweisnummer von SMILLA ECK lautet 65803 (Option D)." },
      { qNum: 5, cat: "birthDate", sourceCardId: "gm-sim5-card05", diff: "Mittel", q: "Wann hat BENT WALD (Ausweis 5) Geburtstag?", opts: { A: "16.02.", B: "02.11.", C: "24.06.", D: "10.04.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "BENT WALD hat am 19.09. Geburtstag. Da dieses Datum in A–D fehlt, ist Option E korrekt." },
      { qNum: 6, cat: "allergies", sourceCardId: "gm-sim5-card06", diff: "Leicht", q: "Gegen welches Nahrungsmittel ist FINJA MOOR (Ausweis 6) allergisch?", opts: { A: "Milch", B: "Erdnuss", C: "Soja", D: "Weizen", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "FINJA MOOR hat eine Allergie gegen Milch (Option A)." },
      { qNum: 7, cat: "name", sourceCardId: "gm-sim5-card07", diff: "Mittel", q: "Welche Person hat die Ausweisnummer 98345?", opts: { A: "MATIS LINDNER", B: "LORIS THIEL", C: "TIAN WEBER", D: "ENNA SAUER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "Die Ausweisnummer 98345 gehört zu LORIS THIEL (Option B)." },
      { qNum: 8, cat: "allergies", sourceCardId: "gm-sim5-card08", diff: "Mittel", q: "Welche Allergien sind für ENNA SAUER (Ausweis 8) vermerkt?", opts: { A: "Birke & Haselnuss", B: "Katzen", C: "Keine bekannten Allergien", D: "Wespen", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "ENNA SAUER hat keine bekannten Allergien (Option C)." },
      { qNum: 9, cat: "bloodGroup", sourceCardId: "gm-sim5-card07", diff: "Leicht", q: "Welche Blutgruppe hat LORIS THIEL (Ausweis 7)?", opts: { A: "A", B: "B", C: "0", D: "AB", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "LORIS THIEL hat Blutgruppe AB (Option D)." },
      { qNum: 10, cat: "country", sourceCardId: "gm-sim5-card05", diff: "Mittel", q: "Aus welchem Land stammt der Ausweis von BENT WALD (Ausweis 5)?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "BENT WALDs Ausweis stammt aus Spanien. Da Spanien in A–D nicht vorkommt, ist Option E korrekt." },
      { qNum: 11, cat: "birthDate", sourceCardId: "gm-sim5-card01", diff: "Leicht", q: "An welchem Datum hat MATIS LINDNER (Ausweis 1) Geburtstag?", opts: { A: "16.02.", B: "02.11.", C: "05.12.", D: "28.03.", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "MATIS LINDNER hat am 16.02. Geburtstag (Option A)." },
      { qNum: 12, cat: "medication", sourceCardId: "gm-sim5-card03", diff: "Leicht", q: "Nimmt TIAN WEBER (Ausweis 3) laut Ausweis Medikamente?", opts: { A: "Nein", B: "Ja", C: "Gelegentlich", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "TIAN WEBER nimmt Medikamente (Ja) (Option B)." },
      { qNum: 13, cat: "allergies", sourceCardId: "gm-sim5-card02", diff: "Mittel", q: "Gegen welches Allergen ist RONJA KRAUS (Ausweis 2) allergisch?", opts: { A: "Hunde", B: "Pferde", C: "Katzen", D: "Wespen", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "RONJA KRAUS ist allergisch gegen Katzen (Option C)." },
      { qNum: 14, cat: "idNumber", sourceCardId: "gm-sim5-card06", diff: "Mittel", q: "Welche Ausweisnummer gehört zu FINJA MOOR (Ausweis 6)?", opts: { A: "47219", B: "83561", C: "19472", D: "74120", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Die Ausweisnummer von FINJA MOOR ist 74120 (Option D)." },
      { qNum: 15, cat: "bloodGroup", sourceCardId: "gm-sim5-card04", diff: "Leicht", q: "Welche Blutgruppe besitzt SMILLA ECK (Ausweis 4)?", opts: { A: "A", B: "B", C: "AB", D: "A Rh+", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "SMILLA ECK hat die Blutgruppe 0. Da '0' nicht in A–D aufgeführt ist, ist Option E korrekt." },
      { qNum: 16, cat: "name", sourceCardId: "gm-sim5-card02", diff: "Mittel", q: "Welche Person hat am 02.11. Geburtstag?", opts: { A: "RONJA KRAUS", B: "SMILLA ECK", C: "FINJA MOOR", D: "ENNA SAUER", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "Am 02.11. hat RONJA KRAUS Geburtstag (Option A)." },
      { qNum: 17, cat: "photo", sourceCardId: "gm-sim5-card01", diff: "Mittel", q: "Welches Aussehen hat MATIS LINDNER (Ausweis 1)?", opts: { A: "Blonde Locken mit Brille", B: "Dunkles Haar & orangefarbener Pullover", C: "Graues Haar & Vollbart", D: "Schwarzer Haarknoten", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "MATIS LINDNER (Avatar 8) trägt dunkles, gewelltes Haar und einen orangefarbenen Pullover (Option B)." },
      { qNum: 18, cat: "idNumber", sourceCardId: "gm-sim5-card02", diff: "Mittel", q: "Wie lautet die Ausweisnummer von RONJA KRAUS (Ausweis 2)?", opts: { A: "47219", B: "19472", C: "83561", D: "65803", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "Die Ausweisnummer von RONJA KRAUS ist 83561 (Option C)." },
      { qNum: 19, cat: "country", sourceCardId: "gm-sim5-card04", diff: "Leicht", q: "In welchem Land wurde der Ausweis von SMILLA ECK (Ausweis 4) ausgestellt?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "SMILLA ECKs Ausweis stammt aus Italien (Option D)." },
      { qNum: 20, cat: "idNumber", sourceCardId: "gm-sim5-card08", diff: "Mittel", q: "Welche Ausweisnummer gehört zu ENNA SAUER (Ausweis 8)?", opts: { A: "47219", B: "83561", C: "19472", D: "65803", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "ENNA SAUERs Ausweisnummer lautet 51684. Da diese nicht in A–D steht, ist Option E korrekt." },
      { qNum: 21, cat: "cross_card", sourceCardId: "gm-sim5-card01", diff: "Schwer", q: "Welche Person hat Blutgruppe A und leidet an Birke- und Haselnussallergie?", opts: { A: "MATIS LINDNER", B: "BENT WALD", C: "TIAN WEBER", D: "LORIS THIEL", E: "Keine der gegebenen Antworten ist korrekt" }, key: "A", exp: "MATIS LINDNER hat Blutgruppe A und Allergien gegen Birke und Haselnuss (Option A)." },
      { qNum: 22, cat: "cross_card", sourceCardId: "gm-sim5-card07", diff: "Schwer", q: "Welche Person hat Blutgruppe AB und leidet an einer Wespenallergie?", opts: { A: "TIAN WEBER", B: "LORIS THIEL", C: "MATIS LINDNER", D: "FINJA MOOR", E: "Keine der gegebenen Antworten ist korrekt" }, key: "B", exp: "LORIS THIEL hat Blutgruppe AB und eine Wespenallergie (Option B)." },
      { qNum: 23, cat: "cross_card", sourceCardId: "gm-sim5-card03", diff: "Schwer", q: "In welchem Land wurde der Ausweis der Person ausgestellt, die am 24.06. Geburtstag hat?", opts: { A: "Deutschland", B: "Österreich", C: "Schweiz", D: "Spanien", E: "Keine der gegebenen Antworten ist korrekt" }, key: "C", exp: "Am 24.06. hat Tian Weber Geburtstag. Sein Ausstellungsland ist die Schweiz (Option C)." },
      { qNum: 24, cat: "cross_card", sourceCardId: "gm-sim5-card06", diff: "Schwer", q: "Welche Person mit Blutgruppe B stammt aus Österreich?", opts: { A: "RONJA KRAUS", B: "MATIS LINDNER", C: "LORIS THIEL", D: "FINJA MOOR", E: "Keine der gegebenen Antworten ist korrekt" }, key: "D", exp: "Blutgruppe B haben Ronja Kraus (Deutschland) und Finja Moor (Österreich). Aus Österreich stammt FINJA MOOR (Option D)." },
      { qNum: 25, cat: "cross_card", sourceCardId: "gm-sim5-card08", diff: "Schwer", q: "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?", opts: { A: "SMILLA ECK", B: "ENNA SAUER", C: "RONJA KRAUS", D: "FINJA MOOR", E: "Keine der gegebenen Antworten ist korrekt" }, key: "E", exp: "Blutgruppe 0 haben Smilla Eck (Nein) und Enna Sauer (Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente, daher ist E korrekt." },
    ],
  },
];

const targetDir = path.join(__dirname, "../src/data/questions/gm");

for (const sim of SIM_2_TO_5_SPECS) {
  const simNum = sim.simNumber;
  const simData = {
    simulationId: sim.simulationId,
    simNumber: simNum,
    title: sim.title,
    subtitle: sim.subtitle,
    cards: sim.cards,
    questions: sim.questions.map((q) => ({
      id: `gm-sim${simNum}-q${q.qNum < 10 ? `0${q.qNum}` : q.qNum}`,
      simulationId: sim.simulationId,
      questionNumber: q.qNum,
      category: q.cat,
      questionText: q.q,
      options: q.opts,
      correctAnswer: q.key,
      sourceCardId: q.sourceCardId,
      explanation: q.exp,
      difficulty: q.diff,
    })),
  };

  const filePath = path.join(targetDir, `gmSimulation${simNum}.ts`);
  const content = `import type { GmSimulationData } from "./types";

/**
 * MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) — Simulation ${simNum}
 * 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten Merkphase
 * 25 Abfragefragen in 15 Minuten Prüfungszeit
 */
export const GM_SIMULATION_${simNum}_DATA: GmSimulationData = ${JSON.stringify(simData, null, 2)};
`;

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Generated: gmSimulation${simNum}.ts`);
}

console.log("Simulations 2–5 generated successfully!");
