const fs = require("fs");
const path = require("path");

const CARDS_SIM_1 = [
  {
    id: "gm-sim1-card01",
    simulationId: "gm-sim1",
    cardNumber: 1,
    name: "NERIA KRAMM",
    birthDate: "14.07.",
    medication: true,
    bloodGroup: "A",
    allergies: ["Haselnuss", "Birke"],
    idNumber: "58321",
    country: "Österreich",
    photo: "avatar-01",
  },
  {
    id: "gm-sim1-card02",
    simulationId: "gm-sim1",
    cardNumber: 2,
    name: "MILAN VOGEL",
    birthDate: "23.09.",
    medication: true,
    bloodGroup: "B",
    allergies: ["Penicillin"],
    idNumber: "24915",
    country: "Deutschland",
    photo: "avatar-02",
  },
  {
    id: "gm-sim1-card03",
    simulationId: "gm-sim1",
    cardNumber: 3,
    name: "LAVIN HOFER",
    birthDate: "08.02.",
    medication: false,
    bloodGroup: "AB",
    allergies: ["Milch", "Erdnuss"],
    idNumber: "71642",
    country: "Schweiz",
    photo: "avatar-03",
  },
  {
    id: "gm-sim1-card04",
    simulationId: "gm-sim1",
    cardNumber: 4,
    name: "SARIN WEISS",
    birthDate: "30.11.",
    medication: false,
    bloodGroup: "0",
    allergies: ["Hunde"],
    idNumber: "38209",
    country: "Italien",
    photo: "avatar-04",
  },
  {
    id: "gm-sim1-card05",
    simulationId: "gm-sim1",
    cardNumber: 5,
    name: "KIRAN BRANDT",
    birthDate: "19.05.",
    medication: true,
    bloodGroup: "A",
    allergies: ["Hausstaub", "Birke"],
    idNumber: "93514",
    country: "Spanien",
    photo: "avatar-05",
  },
  {
    id: "gm-sim1-card06",
    simulationId: "gm-sim1",
    cardNumber: 6,
    name: "ELOR STEIN",
    birthDate: "04.10.",
    medication: false,
    bloodGroup: "B",
    allergies: ["Katzen"],
    idNumber: "46187",
    country: "Österreich",
    photo: "avatar-06",
  },
  {
    id: "gm-sim1-card07",
    simulationId: "gm-sim1",
    cardNumber: 7,
    name: "TARA WINTER",
    birthDate: "27.03.",
    medication: true,
    bloodGroup: "AB",
    allergies: ["Wespen", "Erdnuss"],
    idNumber: "82430",
    country: "Deutschland",
    photo: "avatar-07",
  },
  {
    id: "gm-sim1-card08",
    simulationId: "gm-sim1",
    cardNumber: 8,
    name: "JASIN HUBER",
    birthDate: "12.08.",
    medication: false,
    bloodGroup: "0",
    allergies: [],
    idNumber: "65793",
    country: "Frankreich",
    photo: "avatar-08",
  },
];

// 25 Recall Questions for Simulation 1
// Exactly 5 A, 5 B, 5 C, 5 D, 5 E keys
const QUESTIONS_SIM_1 = [
  // Q01 (Blutgruppe Card 1, Key A)
  {
    qNum: 1,
    cat: "bloodGroup",
    sourceCardId: "gm-sim1-card01",
    diff: "Leicht",
    q: "Welche Blutgruppe hat NERIA KRAMM (Ausweis 1)?",
    opts: { A: "A", B: "B", C: "AB", D: "0", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "A",
    exp: "Laut Allergieausweis 1 von NERIA KRAMM lautet die Blutgruppe A (Option A).",
  },
  // Q02 (Medikamente Card 2, Key B)
  {
    qNum: 2,
    cat: "medication",
    sourceCardId: "gm-sim1-card02",
    diff: "Leicht",
    q: "Nimmt MILAN VOGEL (Ausweis 2) regelmäßig Medikamente ein?",
    opts: { A: "Nein", B: "Ja", C: "Nur bei Bedarf", D: "Unbekannt", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "B",
    exp: "Auf dem Allergieausweis von MILAN VOGEL ist bei Medikamenten 'Ja' vermerkt (Option B).",
  },
  // Q03 (Land Card 3, Key C)
  {
    qNum: 3,
    cat: "country",
    sourceCardId: "gm-sim1-card03",
    diff: "Leicht",
    q: "In welchem Land wurde der Ausweis von LAVIN HOFER (Ausweis 3) ausgestellt?",
    opts: { A: "Österreich", B: "Deutschland", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "C",
    exp: "LAVIN HOFERs Allergieausweis wurde in der Schweiz ausgestellt (Option C).",
  },
  // Q04 (Ausweisnummer Card 4, Key D)
  {
    qNum: 4,
    cat: "idNumber",
    sourceCardId: "gm-sim1-card04",
    diff: "Mittel",
    q: "Welche Ausweisnummer gehört zu SARIN WEISS (Ausweis 4)?",
    opts: { A: "58321", B: "24915", C: "71642", D: "38209", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "D",
    exp: "Die Ausweisnummer von SARIN WEISS lautet 38209 (Option D).",
  },
  // Q05 (Geburtstag Card 5, Key E -> Actual 19.05.)
  {
    qNum: 5,
    cat: "birthDate",
    sourceCardId: "gm-sim1-card05",
    diff: "Mittel",
    q: "An welchem Datum hat KIRAN BRANDT (Ausweis 5) Geburtstag?",
    opts: { A: "14.07.", B: "23.09.", C: "08.02.", D: "30.11.", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "E",
    exp: "KIRAN BRANDT hat am 19.05. Geburtstag. Da dieses Datum in A–D nicht aufgeführt ist, ist Option E korrekt.",
  },
  // Q06 (Allergien Card 6, Key A)
  {
    qNum: 6,
    cat: "allergies",
    sourceCardId: "gm-sim1-card06",
    diff: "Leicht",
    q: "Gegen welches Allergen liegt bei ELOR STEIN (Ausweis 6) eine bekannte Allergie vor?",
    opts: { A: "Katzen", B: "Hunde", C: "Birke", D: "Haselnuss", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "A",
    exp: "ELOR STEIN hat eine bekannte Allergie gegen Katzen (Option A).",
  },
  // Q07 (Name by ID Card 7, Key B)
  {
    qNum: 7,
    cat: "name",
    sourceCardId: "gm-sim1-card07",
    diff: "Mittel",
    q: "Welche Person besitzt die Ausweisnummer 82430?",
    opts: { A: "NERIA KRAMM", B: "TARA WINTER", C: "LAVIN HOFER", D: "JASIN HUBER", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "B",
    exp: "Die Ausweisnummer 82430 gehört zu TARA WINTER (Option B).",
  },
  // Q08 (Allergien Card 8, Key C)
  {
    qNum: 8,
    cat: "allergies",
    sourceCardId: "gm-sim1-card08",
    diff: "Mittel",
    q: "Welche Allergien sind auf dem Ausweis von JASIN HUBER (Ausweis 8) dokumentiert?",
    opts: { A: "Erdnuss & Wespen", B: "Penicillin", C: "Keine bekannten Allergien", D: "Hausstaub", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "C",
    exp: "JASIN HUBER hat keine bekannten Allergien auf dem Ausweis vermerkt (Option C).",
  },
  // Q09 (Blutgruppe Card 2, Key D)
  {
    qNum: 9,
    cat: "bloodGroup",
    sourceCardId: "gm-sim1-card02",
    diff: "Leicht",
    q: "Welche Blutgruppe ist für MILAN VOGEL (Ausweis 2) vermerkt?",
    opts: { A: "0", B: "A", C: "AB", D: "B", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "D",
    exp: "MILAN VOGEL hat die Blutgruppe B (Option D).",
  },
  // Q10 (Land Card 5, Key E -> Actual Spanien)
  {
    qNum: 10,
    cat: "country",
    sourceCardId: "gm-sim1-card05",
    diff: "Mittel",
    q: "Aus welchem Land stammt der Allergieausweis von KIRAN BRANDT (Ausweis 5)?",
    opts: { A: "Österreich", B: "Deutschland", C: "Schweiz", D: "Italien", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "E",
    exp: "KIRAN BRANDTs Ausweis wurde in Spanien ausgestellt. Da Spanien in A–D nicht vorkommt, ist Option E korrekt.",
  },
  // Q11 (Geburtstag Card 3, Key A)
  {
    qNum: 11,
    cat: "birthDate",
    sourceCardId: "gm-sim1-card03",
    diff: "Leicht",
    q: "Welches Geburtsdatum steht auf dem Ausweis von LAVIN HOFER (Ausweis 3)?",
    opts: { A: "08.02.", B: "14.07.", C: "23.09.", D: "04.10.", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "A",
    exp: "LAVIN HOFER hat am 08.02. Geburtstag (Option A).",
  },
  // Q12 (Medikamente Card 4, Key B)
  {
    qNum: 12,
    cat: "medication",
    sourceCardId: "gm-sim1-card04",
    diff: "Leicht",
    q: "Nimmt SARIN WEISS (Ausweis 4) laut Ausweis Medikamente?",
    opts: { A: "Ja", B: "Nein", C: "Nur Schmerzmittel", D: "Gelegentlich", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "B",
    exp: "SARIN WEISS nimmt laut Ausweis keine Medikamente (Option B).",
  },
  // Q13 (Allergien Card 1, Key C)
  {
    qNum: 13,
    cat: "allergies",
    sourceCardId: "gm-sim1-card01",
    diff: "Mittel",
    q: "Gegen welche Stoffe ist NERIA KRAMM (Ausweis 1) allergisch?",
    opts: { A: "Milch & Erdnuss", B: "Penicillin", C: "Haselnuss & Birke", D: "Wespen & Erdnuss", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "C",
    exp: "NERIA KRAMM hat Allergien gegen Haselnuss und Birke (Option C).",
  },
  // Q14 (Ausweisnummer Card 6, Key D)
  {
    qNum: 14,
    cat: "idNumber",
    sourceCardId: "gm-sim1-card06",
    diff: "Mittel",
    q: "Wie lautet die 5-stellige Ausweisnummer von ELOR STEIN (Ausweis 6)?",
    opts: { A: "58321", B: "24915", C: "93514", D: "46187", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "D",
    exp: "Die Ausweisnummer von ELOR STEIN lautet 46187 (Option D).",
  },
  // Q15 (Blutgruppe Card 4, Key E -> Actual 0)
  {
    qNum: 15,
    cat: "bloodGroup",
    sourceCardId: "gm-sim1-card04",
    diff: "Leicht",
    q: "Welche Blutgruppe besitzt SARIN WEISS (Ausweis 4)?",
    opts: { A: "A", B: "B", C: "AB", D: "A Rh-", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "E",
    exp: "SARIN WEISS hat die Blutgruppe 0. Da '0' nicht in den Optionen A–D steht, ist Option E korrekt.",
  },
  // Q16 (Name by Birthday Card 2, Key A)
  {
    qNum: 16,
    cat: "name",
    sourceCardId: "gm-sim1-card02",
    diff: "Mittel",
    q: "Welche Person hat am 23.09. Geburtstag?",
    opts: { A: "MILAN VOGEL", B: "NERIA KRAMM", C: "TARA WINTER", D: "ELOR STEIN", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "A",
    exp: "Am 23.09. hat MILAN VOGEL Geburtstag (Option A).",
  },
  // Q17 (Porträt Card 1, Key B)
  {
    qNum: 17,
    cat: "photo",
    sourceCardId: "gm-sim1-card01",
    diff: "Mittel",
    q: "Welches auffällige visuelle Merkmal trägt NERIA KRAMM auf dem Passfoto?",
    opts: { A: "Dunkle Vollbart-Frisur", B: "Haarknoten (Dutt) & Brille", C: "Graues kurzes Haar", D: "Blonde lange Haare ohne Brille", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "B",
    exp: "NERIA KRAMM (Avatar 1) trägt einen markanten Haarknoten (Dutt) und eine runde Brille (Option B).",
  },
  // Q18 (Ausweisnummer Card 2, Key C)
  {
    qNum: 18,
    cat: "idNumber",
    sourceCardId: "gm-sim1-card02",
    diff: "Mittel",
    q: "Welche Ausweisnummer ist MILAN VOGEL (Ausweis 2) zugeordnet?",
    opts: { A: "58321", B: "71642", C: "24915", D: "38209", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "C",
    exp: "MILAN VOGELs Ausweisnummer ist 24915 (Option C).",
  },
  // Q19 (Land Card 7, Key D)
  {
    qNum: 19,
    cat: "country",
    sourceCardId: "gm-sim1-card07",
    diff: "Leicht",
    q: "In welchem Land wurde der Ausweis von TARA WINTER (Ausweis 7) ausgestellt?",
    opts: { A: "Österreich", B: "Schweiz", C: "Italien", D: "Deutschland", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "D",
    exp: "TARA WINTERs Ausweis stammt aus Deutschland (Option D).",
  },
  // Q20 (Ausweisnummer Card 8, Key E -> Actual 65793)
  {
    qNum: 20,
    cat: "idNumber",
    sourceCardId: "gm-sim1-card08",
    diff: "Mittel",
    q: "Welche Ausweisnummer gehört zu JASIN HUBER (Ausweis 8)?",
    opts: { A: "58321", B: "24915", C: "46187", D: "82430", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "E",
    exp: "JASIN HUBER hat die Ausweisnummer 65793. Da diese in A–D nicht gelistet ist, ist Option E korrekt.",
  },
  // Q21 (Kreuzabfrage Card 3 & Card 7, Key A)
  {
    qNum: 21,
    cat: "cross_card",
    sourceCardId: "gm-sim1-card03",
    diff: "Schwer",
    q: "Welche Person hat die Blutgruppe AB und kommt aus der Schweiz?",
    opts: { A: "LAVIN HOFER", B: "TARA WINTER", C: "SARIN WEISS", D: "MILAN VOGEL", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "A",
    exp: "Die Blutgruppe AB haben Lavin Hofer (Schweiz) und Tara Winter (Deutschland). Aus der Schweiz stammt LAVIN HOFER (Option A).",
  },
  // Q22 (Kreuzabfrage Card 5 & Card 1, Key B)
  {
    qNum: 22,
    cat: "cross_card",
    sourceCardId: "gm-sim1-card05",
    diff: "Schwer",
    q: "Welche Person hat die Blutgruppe A und leidet an einer Hausstaub-Allergie?",
    opts: { A: "NERIA KRAMM", B: "KIRAN BRANDT", C: "ELOR STEIN", D: "JASIN HUBER", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "B",
    exp: "Blutgruppe A besitzen Neria Kramm (Haselnuss, Birke) und Kiran Brandt (Hausstaub, Birke). Die Hausstaub-Allergie hat KIRAN BRANDT (Option B).",
  },
  // Q23 (Kreuzabfrage Card 7, Key C)
  {
    qNum: 23,
    cat: "cross_card",
    sourceCardId: "gm-sim1-card07",
    diff: "Schwer",
    q: "In welchem Land wurde der Ausweis der Person ausgestellt, die am 27.03. Geburtstag hat?",
    opts: { A: "Österreich", B: "Schweiz", C: "Deutschland", D: "Spanien", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "C",
    exp: "Am 27.03. hat Tara Winter Geburtstag. Ihr Ausstellungsland ist Deutschland (Option C).",
  },
  // Q24 (Kreuzabfrage Card 2, Key D)
  {
    qNum: 24,
    cat: "cross_card",
    sourceCardId: "gm-sim1-card02",
    diff: "Schwer",
    q: "Welche Person nimmt Medikamente ein und hat eine Penicillin-Allergie?",
    opts: { A: "KIRAN BRANDT", B: "TARA WINTER", C: "NERIA KRAMM", D: "MILAN VOGEL", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "D",
    exp: "Die Penicillin-Allergie mit Medikamenteneinnahme (Ja) gehört eindeutig zu MILAN VOGEL (Option D).",
  },
  // Q25 (Kreuzabfrage Impossible/Option E, Key E)
  {
    qNum: 25,
    cat: "cross_card",
    sourceCardId: "gm-sim1-card08",
    diff: "Schwer",
    q: "Welche Person mit Blutgruppe 0 nimmt laut Ausweis regelmäßig Medikamente ein?",
    opts: { A: "SARIN WEISS", B: "JASIN HUBER", C: "ELOR STEIN", D: "NERIA KRAMM", E: "Keine der gegebenen Antworten ist korrekt" },
    key: "E",
    exp: "Blutgruppe 0 haben Sarin Weiss (Medikamente: Nein) und Jasin Huber (Medikamente: Nein). Keine Person mit Blutgruppe 0 nimmt Medikamente ein, daher ist Antwort E zwingend korrekt.",
  },
];

console.log("Validating and generating GM Simulation 1...");

const sim1Data = {
  simulationId: "gm-sim1",
  simNumber: 1,
  title: "Simulation 1 — Gedächtnis & Merkfähigkeit",
  subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
  cards: CARDS_SIM_1,
  questions: QUESTIONS_SIM_1.map((q) => ({
    id: `gm-sim1-q${q.qNum < 10 ? `0${q.qNum}` : q.qNum}`,
    simulationId: "gm-sim1",
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

const targetFile = path.join(__dirname, "../src/data/questions/gm/gmSimulation1.ts");
const content = `import type { GmSimulationData } from "./types";

/**
 * MedAT-H KFF Gedächtnis & Merkfähigkeit (GM) — Simulation 1
 * 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten Merkphase
 * 25 Abfragefragen in 15 Minuten Prüfungszeit
 */
export const GM_SIMULATION_1_DATA: GmSimulationData = ${JSON.stringify(sim1Data, null, 2)};
`;

fs.writeFileSync(targetFile, content, "utf8");
console.log(`✅ Successfully generated: ${targetFile}`);
