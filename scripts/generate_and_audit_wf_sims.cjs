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
    a = t;
  }
  return a;
}

// Scramble with a deterministic permutation that guarantees the scramble doesn't start with the word's first letter
function scrambleLetters(word) {
  const letters = word.toUpperCase().split("");
  const len = letters.length;
  // Find a stride strictly coprime with len
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
  // Verify multiset match
  if (!areMultisetsEqual(getLetterMultiset(scrambled.join("")), getLetterMultiset(word))) {
    throw new Error(`Scramble multiset mismatch for word ${word}!`);
  }
  return scrambled;
}

const SIMULATIONS_DATA = [
  // --- Simulation 1 ---
  {
    simNum: 1,
    title: "Simulation 1 — Wortflüssigkeit",
    questions: [
      {
        word: "PATIENT",
        diff: "Leicht",
        opts: { A: "T", B: "P", C: "N", D: "I" },
        key: "B",
        cat: "Klinik",
      },
      {
        word: "KNOCHEN",
        diff: "Leicht",
        opts: { A: "K", B: "N", C: "O", D: "H" },
        key: "A",
        cat: "Anatomie",
      },
      {
        word: "MUSKEL",
        diff: "Leicht",
        opts: { A: "S", B: "L", C: "K", D: "M" },
        key: "D",
        cat: "Anatomie",
      },
      {
        word: "GEHIRN",
        diff: "Leicht",
        opts: { A: "H", B: "R", C: "N", D: "E" },
        key: "E",
        cat: "Neuroanatomie",
      },
      {
        word: "MEDIZIN",
        diff: "Mittel",
        opts: { A: "D", B: "Z", C: "M", D: "N" },
        key: "C",
        cat: "Wissenschaft",
      },
      {
        word: "ARTERIE",
        diff: "Mittel",
        opts: { A: "R", B: "T", C: "E", D: "A" },
        key: "D",
        cat: "Anatomie",
      },
      {
        word: "SPENDER",
        diff: "Mittel",
        opts: { A: "P", B: "S", C: "D", D: "R" },
        key: "B",
        cat: "Klinik",
      },
      {
        word: "PRODUKT",
        diff: "Mittel",
        opts: { A: "P", B: "R", C: "D", D: "K" },
        key: "A",
        cat: "Allgemein",
      },
      {
        word: "HORMON",
        diff: "Mittel",
        opts: { A: "M", B: "O", C: "R", D: "N" },
        key: "E",
        cat: "Endokrinologie",
      },
      {
        word: "KREISLAUF",
        diff: "Mittel",
        opts: { A: "R", B: "F", C: "K", D: "S" },
        key: "C",
        cat: "Physiologie",
      },
      {
        word: "BLUTDRUCK",
        diff: "Schwer",
        opts: { A: "D", B: "B", C: "K", D: "T" },
        key: "B",
        cat: "Kardiologie",
      },
      {
        word: "DIAGNOSE",
        diff: "Schwer",
        opts: { A: "G", B: "S", C: "N", D: "D" },
        key: "D",
        cat: "Klinik",
      },
      {
        word: "SCHLAGADER",
        diff: "Schwer",
        opts: { A: "S", B: "G", C: "A", D: "L" },
        key: "A",
        cat: "Anatomie",
      },
      {
        word: "ZELLKERN",
        diff: "Schwer",
        opts: { A: "K", B: "L", C: "R", D: "E" },
        key: "E",
        cat: "Zellbiologie",
      },
      {
        word: "IMMUNSYSTEM",
        diff: "Schwer",
        opts: { A: "M", B: "S", C: "I", D: "Y" },
        key: "C",
        cat: "Immunologie",
      },
    ],
  },
  // --- Simulation 2 ---
  {
    simNum: 2,
    title: "Simulation 2 — Wortflüssigkeit",
    questions: [
      {
        word: "VENTIL",
        diff: "Leicht",
        opts: { A: "N", B: "V", C: "T", D: "L" },
        key: "B",
        cat: "Technik/Physiologie",
      },
      {
        word: "REZEPT",
        diff: "Leicht",
        opts: { A: "R", B: "Z", C: "P", D: "T" },
        key: "A",
        cat: "Pharmazie",
      },
      {
        word: "KAPSEL",
        diff: "Leicht",
        opts: { A: "P", B: "S", C: "L", D: "K" },
        key: "D",
        cat: "Pharmazie/Anatomie",
      },
      {
        word: "FIEBER",
        diff: "Leicht",
        opts: { A: "B", B: "R", C: "E", D: "I" },
        key: "E",
        cat: "Symptome",
      },
      {
        word: "SYNAPSE",
        diff: "Mittel",
        opts: { A: "Y", B: "N", C: "S", D: "P" },
        key: "C",
        cat: "Neurobiologie",
      },
      {
        word: "ANTIGEN",
        diff: "Mittel",
        opts: { A: "N", B: "T", C: "G", D: "A" },
        key: "D",
        cat: "Immunologie",
      },
      {
        word: "BIOPSIE",
        diff: "Mittel",
        opts: { A: "P", B: "B", C: "S", D: "O" },
        key: "B",
        cat: "Pathologie",
      },
      {
        word: "GLUKOSE",
        diff: "Mittel",
        opts: { A: "G", B: "L", C: "K", D: "S" },
        key: "A",
        cat: "Biochemie",
      },
      {
        word: "NEURON",
        diff: "Mittel",
        opts: { A: "R", B: "O", C: "U", D: "E" },
        key: "E",
        cat: "Neuroanatomie",
      },
      {
        word: "PROTEIN",
        diff: "Mittel",
        opts: { A: "R", B: "T", C: "P", D: "N" },
        key: "C",
        cat: "Biochemie",
      },
      {
        word: "BAKTERIE",
        diff: "Schwer",
        opts: { A: "K", B: "B", C: "T", D: "R" },
        key: "B",
        cat: "Mikrobiologie",
      },
      {
        word: "INFUSION",
        diff: "Schwer",
        opts: { A: "N", B: "F", C: "S", D: "I" },
        key: "D",
        cat: "Klinik",
      },
      {
        word: "SUBSTANZ",
        diff: "Schwer",
        opts: { A: "S", B: "B", C: "T", D: "Z" },
        key: "A",
        cat: "Chemie",
      },
      {
        word: "THERAPIE",
        diff: "Schwer",
        opts: { A: "H", B: "R", C: "P", D: "E" },
        key: "E",
        cat: "Klinik",
      },
      {
        word: "CHROMOSOM",
        diff: "Schwer",
        opts: { A: "H", B: "R", C: "C", D: "M" },
        key: "C",
        cat: "Genetik",
      },
    ],
  },
  // --- Simulation 3 ---
  {
    simNum: 3,
    title: "Simulation 3 — Wortflüssigkeit",
    questions: [
      {
        word: "WIRBEL",
        diff: "Leicht",
        opts: { A: "I", B: "W", C: "R", D: "B" },
        key: "B",
        cat: "Anatomie",
      },
      {
        word: "REFLEX",
        diff: "Leicht",
        opts: { A: "R", B: "F", C: "L", D: "X" },
        key: "A",
        cat: "Physiologie",
      },
      {
        word: "TRAUMA",
        diff: "Leicht",
        opts: { A: "R", B: "A", C: "U", D: "T" },
        key: "D",
        cat: "Chirurgie",
      },
      {
        word: "PLASMA",
        diff: "Leicht",
        opts: { A: "L", B: "A", C: "S", D: "M" },
        key: "E",
        cat: "Hämatologie",
      },
      {
        word: "VITAMIN",
        diff: "Mittel",
        opts: { A: "T", B: "M", C: "V", D: "N" },
        key: "C",
        cat: "Ernährung",
      },
      {
        word: "KALZIUM",
        diff: "Mittel",
        opts: { A: "A", B: "L", C: "Z", D: "K" },
        key: "D",
        cat: "Biochemie",
      },
      {
        word: "INSULIN",
        diff: "Mittel",
        opts: { A: "N", B: "I", C: "S", D: "L" },
        key: "B",
        cat: "Endokrinologie",
      },
      {
        word: "SEGMENT",
        diff: "Mittel",
        opts: { A: "S", B: "G", C: "M", D: "N" },
        key: "A",
        cat: "Anatomie",
      },
      {
        word: "NATRIUM",
        diff: "Mittel",
        opts: { A: "A", B: "T", C: "R", D: "M" },
        key: "E",
        cat: "Biochemie",
      },
      {
        word: "CHLORID",
        diff: "Mittel",
        opts: { A: "H", B: "L", C: "C", D: "R" },
        key: "C",
        cat: "Chemie",
      },
      {
        word: "THROMBUS",
        diff: "Schwer",
        opts: { A: "H", B: "T", C: "R", D: "B" },
        key: "B",
        cat: "Kardiologie",
      },
      {
        word: "ALLERGEN",
        diff: "Schwer",
        opts: { A: "L", B: "R", C: "G", D: "A" },
        key: "D",
        cat: "Immunologie",
      },
      {
        word: "MUTATION",
        diff: "Schwer",
        opts: { A: "M", B: "U", C: "T", D: "N" },
        key: "A",
        cat: "Genetik",
      },
      {
        word: "KATHETER",
        diff: "Schwer",
        opts: { A: "A", B: "T", C: "H", D: "R" },
        key: "E",
        cat: "Klinik",
      },
      {
        word: "INJEKTION",
        diff: "Schwer",
        opts: { A: "N", B: "J", C: "I", D: "K" },
        key: "C",
        cat: "Klinik",
      },
    ],
  },
  // --- Simulation 4 ---
  {
    simNum: 4,
    title: "Simulation 4 — Wortflüssigkeit",
    questions: [
      {
        word: "PULVER",
        diff: "Leicht",
        opts: { A: "U", B: "P", C: "L", D: "V" },
        key: "B",
        cat: "Pharmazie",
      },
      {
        word: "SCHMERZ",
        diff: "Leicht",
        opts: { A: "S", B: "C", C: "H", D: "M" },
        key: "A",
        cat: "Symptome",
      },
      {
        word: "IMPFUNG",
        diff: "Leicht",
        opts: { A: "M", B: "P", C: "F", D: "I" },
        key: "D",
        cat: "Immunologie",
      },
      {
        word: "NARKOSE",
        diff: "Leicht",
        opts: { A: "A", B: "R", C: "K", D: "S" },
        key: "E",
        cat: "Anästhesie",
      },
      {
        word: "MEMBRAN",
        diff: "Mittel",
        opts: { A: "E", B: "B", C: "M", D: "R" },
        key: "C",
        cat: "Zellbiologie",
      },
      {
        word: "VESIKEL",
        diff: "Mittel",
        opts: { A: "E", B: "S", C: "I", D: "V" },
        key: "D",
        cat: "Zellbiologie",
      },
      {
        word: "RIBOSOM",
        diff: "Mittel",
        opts: { A: "I", B: "R", C: "B", D: "O" },
        key: "B",
        cat: "Zellbiologie",
      },
      {
        word: "NUKLEUS",
        diff: "Mittel",
        opts: { A: "N", B: "U", C: "K", D: "L" },
        key: "A",
        cat: "Zellbiologie",
      },
      {
        word: "SPRITZE",
        diff: "Mittel",
        opts: { A: "P", B: "R", C: "I", D: "T" },
        key: "E",
        cat: "Klinik",
      },
      {
        word: "AMPULLE",
        diff: "Mittel",
        opts: { A: "M", B: "P", C: "A", D: "L" },
        key: "C",
        cat: "Pharmazie",
      },
      {
        word: "SKALPELL",
        diff: "Schwer",
        opts: { A: "K", B: "S", C: "A", D: "L" },
        key: "B",
        cat: "Chirurgie",
      },
      {
        word: "PINZETTE",
        diff: "Schwer",
        opts: { A: "I", B: "N", C: "Z", D: "P" },
        key: "D",
        cat: "Chirurgie",
      },
      {
        word: "DRAINAGE",
        diff: "Schwer",
        opts: { A: "D", B: "R", C: "A", D: "G" },
        key: "A",
        cat: "Chirurgie",
      },
      {
        word: "EPIDEMIE",
        diff: "Schwer",
        opts: { A: "P", B: "I", C: "D", D: "M" },
        key: "E",
        cat: "Epidemiologie",
      },
      {
        word: "SELEKTION",
        diff: "Schwer",
        opts: { A: "E", B: "L", C: "S", D: "K" },
        key: "C",
        cat: "Evolution",
      },
    ],
  },
  // --- Simulation 5 ---
  {
    simNum: 5,
    title: "Simulation 5 — Wortflüssigkeit",
    questions: [
      {
        word: "BEFUND",
        diff: "Leicht",
        opts: { A: "E", B: "B", C: "F", D: "U" },
        key: "B",
        cat: "Diagnostik",
      },
      {
        word: "BERICHT",
        diff: "Leicht",
        opts: { A: "B", B: "E", C: "R", D: "I" },
        key: "A",
        cat: "Klinik",
      },
      {
        word: "METHODE",
        diff: "Leicht",
        opts: { A: "E", B: "T", C: "H", D: "M" },
        key: "D",
        cat: "Wissenschaft",
      },
      {
        word: "TECHNIK",
        diff: "Leicht",
        opts: { A: "E", B: "C", C: "H", D: "N" },
        key: "E",
        cat: "Wissenschaft",
      },
      {
        word: "STATION",
        diff: "Mittel",
        opts: { A: "T", B: "A", C: "S", D: "I" },
        key: "C",
        cat: "Klinik",
      },
      {
        word: "VOLUMEN",
        diff: "Mittel",
        opts: { A: "O", B: "L", C: "U", D: "V" },
        key: "D",
        cat: "Physik/Physiologie",
      },
      {
        word: "GEWICHT",
        diff: "Mittel",
        opts: { A: "E", B: "G", C: "W", D: "I" },
        key: "B",
        cat: "Physiologie",
      },
      {
        word: "ABSTAND",
        diff: "Mittel",
        opts: { A: "A", B: "B", C: "S", D: "T" },
        key: "A",
        cat: "Allgemein",
      },
      {
        word: "KLINIKUM",
        diff: "Mittel",
        opts: { A: "L", B: "I", C: "N", D: "M" },
        key: "E",
        cat: "Klinik",
      },
      {
        word: "INSTITUT",
        diff: "Mittel",
        opts: { A: "N", B: "S", C: "I", D: "T" },
        key: "C",
        cat: "Wissenschaft",
      },
      {
        word: "FREQUENZ",
        diff: "Schwer",
        opts: { A: "R", B: "F", C: "E", D: "Q" },
        key: "B",
        cat: "Physiologie",
      },
      {
        word: "SYNTHESE",
        diff: "Schwer",
        opts: { A: "Y", B: "N", C: "T", D: "S" },
        key: "D",
        cat: "Biochemie",
      },
      {
        word: "SPEKTRUM",
        diff: "Schwer",
        opts: { A: "S", B: "P", C: "E", D: "K" },
        key: "A",
        cat: "Physik/Diagnostik",
      },
      {
        word: "DIFFUSION",
        diff: "Schwer",
        opts: { A: "I", B: "F", C: "U", D: "S" },
        key: "E",
        cat: "Zellbiologie",
      },
      {
        word: "TRANSPORT",
        diff: "Schwer",
        opts: { A: "R", B: "A", C: "T", D: "N" },
        key: "C",
        cat: "Physiologie",
      },
    ],
  },
];

// Perform complete rigorous audit and build file contents
console.log("Starting full validation across all 5 simulations...");

for (const sim of SIMULATIONS_DATA) {
  console.log(`\n--- Validating Simulation ${sim.simNum} (${sim.questions.length} questions) ---`);
  const keysCount = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const diffCount = { Leicht: 0, Mittel: 0, Schwer: 0 };
  const itemsOutput = [];

  sim.questions.forEach((q, idx) => {
    const qNum = idx + 1;
    const qId = `wf-sim${sim.simNum}-q${qNum < 10 ? `0${qNum}` : qNum}`;
    const word = q.word.toUpperCase();
    const initial = word[0];

    // 1. Scramble
    const scrambledArray = scrambleLetters(word);
    const scrambledStr = scrambledArray.join(" · ");

    // 2. Multiset verification
    const mWord = getLetterMultiset(word);
    const mScramble = getLetterMultiset(scrambledArray.join(""));
    if (!areMultisetsEqual(mWord, mScramble)) {
      throw new Error(`Multiset mismatch in ${qId} for word ${word}!`);
    }

    // 3. Option mapping & Key verification
    const optObj = {
      A: q.opts.A,
      B: q.opts.B,
      C: q.opts.C,
      D: q.opts.D,
      E: null,
    };

    if (q.key === "E") {
      // Ensure initial is NOT in A–D
      const matchingOpts = Object.entries(q.opts).filter(([k, v]) => v === initial);
      if (matchingOpts.length > 0) {
        throw new Error(`In ${qId}, key is E but initial ${initial} is present in option ${matchingOpts[0][0]}!`);
      }
    } else {
      // Ensure initial IS in the option indicated by key
      if (q.opts[q.key] !== initial) {
        throw new Error(`In ${qId}, key is ${q.key} but option has ${q.opts[q.key]}, expected ${initial}!`);
      }
      // Ensure no duplicate of initial in other options
      const otherMatches = Object.entries(q.opts).filter(([k, v]) => k !== q.key && v === initial);
      if (otherMatches.length > 0) {
        throw new Error(`In ${qId}, duplicate initial ${initial} found in ${otherMatches[0][0]}!`);
      }
    }

    keysCount[q.key] = (keysCount[q.key] || 0) + 1;
    diffCount[q.diff] = (diffCount[q.diff] || 0) + 1;

    // Build explanation
    const sortedLetters = [...scrambledArray].sort().join(", ");
    let explanation;
    if (q.key === "E") {
      explanation = `Aus den Buchstaben ${sortedLetters} bildet sich das deutsche Substantiv '${word}'. Der Anfangsbuchstabe ist '${initial}'. Da '${initial}' nicht unter den Optionen A bis D aufgeführt ist, ist Antwort E ('Keine Antwort ist richtig') korrekt.`;
    } else {
      explanation = `Aus den Buchstaben ${sortedLetters} bildet sich das deutsche Substantiv '${word}'. Der richtige Anfangsbuchstabe ist '${initial}' (Option ${q.key}).`;
    }

    itemsOutput.push({
      id: qId,
      simulationId: `wf-sim${sim.simNum}`,
      subtest: "WF",
      questionNumber: qNum,
      letters: scrambledArray,
      scrambledLetters: scrambledStr,
      targetWord: word,
      correctInitial: initial,
      options: optObj,
      correctAnswer: q.key,
      difficulty: q.diff,
      estimatedTime: 80,
      explanation,
      tags: ["KFF", "Wortflüssigkeit", q.cat, q.diff, ...(q.key === "E" ? ["Option-E"] : [])],
    });

    console.log(`  ✅ Q${qNum < 10 ? `0${qNum}` : qNum} [${qId}]: ${word} (Initial: ${initial}, Key: ${q.key}, Diff: ${q.diff})`);
  });

  console.log(`  📊 Sim ${sim.simNum} Keys: A=${keysCount.A}, B=${keysCount.B}, C=${keysCount.C}, D=${keysCount.D}, E=${keysCount.E}`);
  console.log(`  📊 Sim ${sim.simNum} Diff: Leicht=${diffCount.Leicht}, Mittel=${diffCount.Mittel}, Schwer=${diffCount.Schwer}`);

  // Generate file content
  const fileContent = `import type { WfQuestionData } from "./types";

/**
 * MedAT-H KFF Wortflüssigkeit (WF) — Simulation ${sim.simNum}
 * 15 Aufgaben in 20 Minuten (~80 s pro Aufgabe)
 * Schwierigkeitsgrad: 4 Leicht, 6 Mittel, 5 Schwer
 * Alle Wörter sind echte, grammatikalisch korrekte deutsche Substantive (Nominativ Singular).
 */
export const WF_SIMULATION_${sim.simNum}_QUESTIONS: WfQuestionData[] = ${JSON.stringify(itemsOutput, null, 2)};
`;

  const targetPath = path.join(__dirname, `../src/data/questions/wf/wfSimulation${sim.simNum}.ts`);
  fs.writeFileSync(targetPath, fileContent, "utf8");
  console.log(`  💾 Written: ${targetPath}`);
}

console.log("\n======================================================================");
console.log("🏆 ALL 5 SIMULATIONS (75 QUESTIONS) GENERATED AND VERIFIED SUCCESSFULLY!");
console.log("======================================================================\n");
