const fs = require("fs");
const path = require("path");

function getLetterMultiset(str) {
  const counts = {};
  const cleaned = str.toUpperCase().replace(/[^A-Z]/g, "");
  for (const char of cleaned) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

function areMultisetsEqual(m1, m2) {
  const keys1 = Object.keys(m1).sort();
  const keys2 = Object.keys(m2).sort();
  if (keys1.length !== keys2.length) return false;
  for (const k of keys1) {
    if (m1[k] !== m2[k]) return false;
  }
  return true;
}

function gcd(a, b) {
  while (b) {
    let t = b;
    b = a % b;
  }
  return a;
}

function scrambleLetters(word) {
  const letters = word.toUpperCase().split("");
  const len = letters.length;
  const strides = [5, 7, 11, 13, 17, 19, 23];
  let stride = strides.find((s) => gcd(s, len) === 1) || 1;
  let scrambled = [];
  for (let i = 0; i < len; i++) {
    scrambled.push(letters[(i * stride + 1) % len]);
  }
  // Ensure scrambled[0] is not the initial letter of word
  if (scrambled[0] === word[0].toUpperCase()) {
    const swapIdx = Math.floor(len / 2);
    const tmp = scrambled[0];
    scrambled[0] = scrambled[swapIdx];
    scrambled[swapIdx] = tmp;
  }
  // If still same, swap with last
  if (scrambled[0] === word[0].toUpperCase()) {
    const swapIdx = len - 1;
    const tmp = scrambled[0];
    scrambled[0] = scrambled[swapIdx];
    scrambled[swapIdx] = tmp;
  }
  // Verify multiset match
  if (!areMultisetsEqual(getLetterMultiset(scrambled.join("")), getLetterMultiset(word))) {
    throw new Error(`Scramble multiset mismatch for word ${word}!`);
  }
  return scrambled;
}

const SIMULATIONS_6_TO_10 = [
  // --- Simulation 6 ---
  {
    simNum: 6,
    title: "Simulation 6 — Wortflüssigkeit",
    questions: [
      { word: "RETINA", diff: "Leicht", opts: { A: "E", B: "R", C: "T", D: "N" }, key: "B", cat: "Anatomie" },
      { word: "SKLERA", diff: "Leicht", opts: { A: "S", B: "K", C: "L", D: "R" }, key: "A", cat: "Ophthalmologie" },
      { word: "THYMUS", diff: "Leicht", opts: { A: "M", B: "U", C: "S", D: "T" }, key: "D", cat: "Immunologie" },
      { word: "PUPILLE", diff: "Leicht", opts: { A: "U", B: "I", C: "L", D: "E" }, key: "E", cat: "Sinnesorgane" },
      { word: "EPITHEL", diff: "Mittel", opts: { A: "P", B: "T", C: "E", D: "H" }, key: "C", cat: "Histologie" },
      { word: "PHARYNX", diff: "Mittel", opts: { A: "H", B: "A", C: "R", D: "P" }, key: "D", cat: "Anatomie" },
      { word: "PANKREAS", diff: "Mittel", opts: { A: "A", B: "P", C: "N", D: "K" }, key: "B", cat: "Gastroenterologie" },
      { word: "BRONCHUS", diff: "Mittel", opts: { A: "B", B: "R", C: "O", D: "N" }, key: "A", cat: "Pneumologie" },
      { word: "NEPHRON", diff: "Mittel", opts: { A: "E", B: "P", C: "H", D: "R" }, key: "E", cat: "Nephrologie" },
      { word: "MYOKARD", diff: "Mittel", opts: { A: "Y", B: "O", C: "M", D: "K" }, key: "C", cat: "Kardiologie" },
      { word: "ENDOTHEL", diff: "Schwer", opts: { A: "N", B: "E", C: "D", D: "O" }, key: "B", cat: "Angiologie" },
      { word: "PERIKARD", diff: "Schwer", opts: { A: "E", B: "R", C: "I", D: "P" }, key: "D", cat: "Kardiologie" },
      { word: "ORGANELLE", diff: "Schwer", opts: { A: "O", B: "R", C: "G", D: "A" }, key: "A", cat: "Zytologie" },
      { word: "HISTOLOGIE", diff: "Schwer", opts: { A: "I", B: "S", C: "T", D: "O" }, key: "E", cat: "Mikroskopie" },
      { word: "ZYTOPLASMA", diff: "Schwer", opts: { A: "Y", B: "T", C: "Z", D: "O" }, key: "C", cat: "Zytologie" },
    ],
  },
  // --- Simulation 7 ---
  {
    simNum: 7,
    title: "Simulation 7 — Wortflüssigkeit",
    questions: [
      { word: "PEPTID", diff: "Leicht", opts: { A: "E", B: "P", C: "T", D: "I" }, key: "B", cat: "Biochemie" },
      { word: "LAKTAT", diff: "Leicht", opts: { A: "L", B: "A", C: "K", D: "T" }, key: "A", cat: "Stoffwechsel" },
      { word: "STEROID", diff: "Leicht", opts: { A: "T", B: "E", C: "R", D: "S" }, key: "D", cat: "Endokrinologie" },
      { word: "ALBUMIN", diff: "Leicht", opts: { A: "L", B: "B", C: "U", D: "M" }, key: "E", cat: "Proteine" },
      { word: "FERMENT", diff: "Mittel", opts: { A: "E", B: "R", C: "F", D: "M" }, key: "C", cat: "Enzymologie" },
      { word: "POLYMER", diff: "Mittel", opts: { A: "O", B: "L", C: "Y", D: "P" }, key: "D", cat: "Chemie" },
      { word: "MONOMER", diff: "Mittel", opts: { A: "O", B: "M", C: "N", D: "E" }, key: "B", cat: "Chemie" },
      { word: "LIPOSOM", diff: "Mittel", opts: { A: "L", B: "I", C: "P", D: "O" }, key: "A", cat: "Zytologie" },
      { word: "GLYKOGEN", diff: "Mittel", opts: { A: "L", B: "Y", C: "K", D: "O" }, key: "E", cat: "Stoffwechsel" },
      { word: "SUBSTRAT", diff: "Mittel", opts: { A: "U", B: "B", C: "S", D: "T" }, key: "C", cat: "Kinetik" },
      { word: "METABOLIT", diff: "Schwer", opts: { A: "E", B: "M", C: "T", D: "A" }, key: "B", cat: "Stoffwechsel" },
      { word: "OXIDATION", diff: "Schwer", opts: { A: "X", B: "I", C: "D", D: "O" }, key: "D", cat: "Biochemie" },
      { word: "REDUKTION", diff: "Schwer", opts: { A: "R", B: "E", C: "D", D: "U" }, key: "A", cat: "Biochemie" },
      { word: "GLYKOLYSE", diff: "Schwer", opts: { A: "L", B: "Y", C: "K", D: "O" }, key: "E", cat: "Biochemie" },
      { word: "KATALYSATOR", diff: "Schwer", opts: { A: "A", B: "T", C: "K", D: "L" }, key: "C", cat: "Katalyse" },
    ],
  },
  // --- Simulation 8 ---
  {
    simNum: 8,
    title: "Simulation 8 — Wortflüssigkeit",
    questions: [
      { word: "ANGINA", diff: "Leicht", opts: { A: "N", B: "A", C: "G", D: "I" }, key: "B", cat: "Kardiologie" },
      { word: "SPUTUM", diff: "Leicht", opts: { A: "S", B: "P", C: "U", D: "T" }, key: "A", cat: "Diagnostik" },
      { word: "TREMOR", diff: "Leicht", opts: { A: "R", B: "E", C: "M", D: "T" }, key: "D", cat: "Neurologie" },
      { word: "SEPSIS", diff: "Leicht", opts: { A: "E", B: "P", C: "I", D: "T" }, key: "E", cat: "Infektiologie" },
      { word: "SYMPTOM", diff: "Mittel", opts: { A: "Y", B: "M", C: "S", D: "P" }, key: "C", cat: "Diagnostik" },
      { word: "SYNKOPE", diff: "Mittel", opts: { A: "Y", B: "N", C: "K", D: "S" }, key: "D", cat: "Kardiologie" },
      { word: "EMBOLIE", diff: "Mittel", opts: { A: "M", B: "E", C: "B", D: "O" }, key: "B", cat: "Gefäßchirurgie" },
      { word: "CHOLERA", diff: "Mittel", opts: { A: "C", B: "H", C: "O", D: "L" }, key: "A", cat: "Infektiologie" },
      { word: "TETANUS", diff: "Mittel", opts: { A: "E", B: "A", C: "N", D: "U" }, key: "E", cat: "Mikrobiologie" },
      { word: "ABSTRICH", diff: "Mittel", opts: { A: "B", B: "S", C: "A", D: "T" }, key: "C", cat: "Labor" },
      { word: "BIOCHEMIE", diff: "Schwer", opts: { A: "I", B: "B", C: "O", D: "C" }, key: "B", cat: "Labor" },
      { word: "KATARAKT", diff: "Schwer", opts: { A: "A", B: "T", C: "R", D: "K" }, key: "D", cat: "Augenheilkunde" },
      { word: "STETHOSKOP", diff: "Schwer", opts: { A: "S", B: "T", C: "E", D: "H" }, key: "A", cat: "Untersuchung" },
      { word: "NARKOTIKUM", diff: "Schwer", opts: { A: "A", B: "R", C: "K", D: "O" }, key: "E", cat: "Anästhesie" },
      { word: "THROMBOZYT", diff: "Schwer", opts: { A: "H", B: "R", C: "T", D: "O" }, key: "C", cat: "Hämatologie" },
    ],
  },
  // --- Simulation 9 ---
  {
    simNum: 9,
    title: "Simulation 9 — Wortflüssigkeit",
    questions: [
      { word: "PLACEBO", diff: "Leicht", opts: { A: "L", B: "P", C: "A", D: "C" }, key: "B", cat: "Pharmakologie" },
      { word: "TROPFEN", diff: "Leicht", opts: { A: "T", B: "R", C: "O", D: "P" }, key: "A", cat: "Galenik" },
      { word: "VERBAND", diff: "Leicht", opts: { A: "E", B: "R", C: "B", D: "V" }, key: "D", cat: "Chirurgie" },
      { word: "ANTIDOT", diff: "Leicht", opts: { A: "N", B: "T", C: "I", D: "D" }, key: "E", cat: "Toxikologie" },
      { word: "LIGATUR", diff: "Mittel", opts: { A: "I", B: "G", C: "L", D: "A" }, key: "C", cat: "Chirurgie" },
      { word: "SEDATION", diff: "Mittel", opts: { A: "E", B: "D", C: "A", D: "S" }, key: "D", cat: "Anästhesie" },
      { word: "PFLASTER", diff: "Mittel", opts: { A: "F", B: "P", C: "L", D: "A" }, key: "B", cat: "Wundversorgung" },
      { word: "TABLETTE", diff: "Mittel", opts: { A: "T", B: "A", C: "B", D: "L" }, key: "A", cat: "Pharmakologie" },
      { word: "PUNKTION", diff: "Mittel", opts: { A: "U", B: "N", C: "K", D: "T" }, key: "E", cat: "Intervention" },
      { word: "IMPLANTAT", diff: "Mittel", opts: { A: "M", B: "P", C: "I", D: "L" }, key: "C", cat: "Prothetik" },
      { word: "RESEKTION", diff: "Schwer", opts: { A: "E", B: "R", C: "S", D: "K" }, key: "B", cat: "Chirurgie" },
      { word: "RESISTENZ", diff: "Schwer", opts: { A: "E", B: "S", C: "I", D: "R" }, key: "D", cat: "Mikrobiologie" },
      { word: "INHIBITOR", diff: "Schwer", opts: { A: "I", B: "N", C: "H", D: "B" }, key: "A", cat: "Pharmakologie" },
      { word: "INTUBATION", diff: "Schwer", opts: { A: "N", B: "T", C: "U", D: "B" }, key: "E", cat: "Notfallmedizin" },
      { word: "TRANSFUSION", diff: "Schwer", opts: { A: "R", B: "A", C: "T", D: "N" }, key: "C", cat: "Hämatologie" },
    ],
  },
  // --- Simulation 10 ---
  {
    simNum: 10,
    title: "Simulation 10 — Wortflüssigkeit",
    questions: [
      { word: "MITOSE", diff: "Leicht", opts: { A: "I", B: "M", C: "T", D: "O" }, key: "B", cat: "Zytologie" },
      { word: "MEIOSE", diff: "Leicht", opts: { A: "M", B: "E", C: "I", D: "O" }, key: "A", cat: "Genetik" },
      { word: "VEKTOR", diff: "Leicht", opts: { A: "E", B: "K", C: "T", D: "V" }, key: "D", cat: "Gentechnik" },
      { word: "ZYGOTE", diff: "Leicht", opts: { A: "Y", B: "G", C: "O", D: "T" }, key: "E", cat: "Embryologie" },
      { word: "PLASMID", diff: "Mittel", opts: { A: "L", B: "A", C: "P", D: "S" }, key: "C", cat: "Genetik" },
      { word: "TELOMER", diff: "Mittel", opts: { A: "E", B: "L", C: "O", D: "T" }, key: "D", cat: "Zytogenetik" },
      { word: "GENLOKUS", diff: "Mittel", opts: { A: "E", B: "G", C: "N", D: "L" }, key: "B", cat: "Genetik" },
      { word: "ANATOMIE", diff: "Mittel", opts: { A: "A", B: "N", C: "T", D: "O" }, key: "A", cat: "Morphologie" },
      { word: "EVOLUTION", diff: "Mittel", opts: { A: "V", B: "O", C: "L", D: "U" }, key: "E", cat: "Evolutionsbiologie" },
      { word: "HOMOLOGIE", diff: "Mittel", opts: { A: "O", B: "M", C: "H", D: "L" }, key: "C", cat: "Phylogenetik" },
      { word: "VERERBUNG", diff: "Schwer", opts: { A: "E", B: "V", C: "R", D: "B" }, key: "B", cat: "Genetik" },
      { word: "NUKLEOTID", diff: "Schwer", opts: { A: "U", B: "K", C: "L", D: "N" }, key: "D", cat: "Molekularbiologie" },
      { word: "ZENTROMER", diff: "Schwer", opts: { A: "Z", B: "E", C: "N", D: "T" }, key: "A", cat: "Zytogenetik" },
      { word: "TRANSPOSON", diff: "Schwer", opts: { A: "R", B: "A", C: "N", D: "S" }, key: "E", cat: "Molekulargenetik" },
      { word: "POLYMORPHIE", diff: "Schwer", opts: { A: "O", B: "L", C: "P", D: "Y" }, key: "C", cat: "Populationsgenetik" },
    ],
  },
];

console.log("Generating and auditing WF Simulations 6–10...");

const targetDir = path.join(__dirname, "../src/data/questions/wf");

for (const sim of SIMULATIONS_6_TO_10) {
  const simNum = sim.simNum;
  const questionsData = [];

  for (let idx = 0; idx < sim.questions.length; idx++) {
    const qSpec = sim.questions[idx];
    const qNum = idx + 1;
    const pad = qNum < 10 ? `0${qNum}` : `${qNum}`;
    const id = `wf-sim${simNum}-q${pad}`;

    const targetWord = qSpec.word.toUpperCase();
    const correctInitial = targetWord[0];
    const scrambledArray = scrambleLetters(targetWord);
    const scrambledString = scrambledArray.join(" · ");

    // Ensure options object has A, B, C, D and E: null
    const options = {
      A: qSpec.opts.A,
      B: qSpec.opts.B,
      C: qSpec.opts.C,
      D: qSpec.opts.D,
      E: null,
    };

    // Verify key logic
    if (qSpec.key === "E") {
      const inOpts = Object.values(qSpec.opts).filter((v) => v === correctInitial);
      if (inOpts.length > 0) {
        throw new Error(`Sim ${simNum} Q${qNum}: Key is E but ${correctInitial} is present in options!`);
      }
    } else {
      if (options[qSpec.key] !== correctInitial) {
        throw new Error(`Sim ${simNum} Q${qNum}: Key is ${qSpec.key} but option is ${options[qSpec.key]} !== ${correctInitial}!`);
      }
      // Check no duplicates in A-D
      const matches = ["A", "B", "C", "D"].filter((k) => options[k] === correctInitial);
      if (matches.length !== 1) {
        throw new Error(`Sim ${simNum} Q${qNum}: Initial ${correctInitial} found ${matches.length} times in A-D!`);
      }
    }

    // Explanation
    let explanation = "";
    const sortedLetters = targetWord.split("").sort().join(", ");
    if (qSpec.key === "E") {
      explanation = `Aus den ungeordneten Buchstaben bildet sich das deutsche Substantiv '${targetWord}'. Der Anfangsbuchstabe ist '${correctInitial}'. Da '${correctInitial}' in den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') zwingend korrekt.`;
    } else {
      explanation = `Aus den Buchstaben ${sortedLetters} bildet sich das deutsche Substantiv '${targetWord}'. Der gesuchte Anfangsbuchstabe ist '${correctInitial}' (Option ${qSpec.key}).`;
    }

    questionsData.push({
      id,
      simulationId: `wf-sim${simNum}`,
      subtest: "WF",
      questionNumber: qNum,
      letters: scrambledArray,
      scrambledLetters: scrambledString,
      targetWord,
      correctInitial,
      options,
      correctAnswer: qSpec.key,
      difficulty: qSpec.diff,
      estimatedTime: 80,
      explanation,
      tags: ["KFF", "Wortflüssigkeit", qSpec.cat, qSpec.diff],
    });
  }

  const filePath = path.join(targetDir, `wfSimulation${simNum}.ts`);
  const fileContent = `import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation ${simNum}
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_${simNum}_QUESTIONS: WfQuestionData[] = ${JSON.stringify(questionsData, null, 2)};
`;

  fs.writeFileSync(filePath, fileContent, "utf8");
  console.log(`✅ Written: wfSimulation${simNum}.ts (15 questions)`);
}

console.log("All 5 simulations (6 to 10) generated successfully!");
