import { RAW_GENERALPROBE_1_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe1WfQuestions";
import { RAW_GENERALPROBE_2_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe2WfQuestions";
import { RAW_GENERALPROBE_3_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe3WfQuestions";
import { WF_SIMULATION_1_QUESTIONS } from "../src/data/questions/wf/wfSimulation1";
import { WF_SIMULATION_2_QUESTIONS } from "../src/data/questions/wf/wfSimulation2";
import { WF_SIMULATION_3_QUESTIONS } from "../src/data/questions/wf/wfSimulation3";
import { WF_SIMULATION_4_QUESTIONS } from "../src/data/questions/wf/wfSimulation4";
import { WF_SIMULATION_5_QUESTIONS } from "../src/data/questions/wf/wfSimulation5";
import { WF_SIMULATION_6_QUESTIONS } from "../src/data/questions/wf/wfSimulation6";
import { WF_SIMULATION_7_QUESTIONS } from "../src/data/questions/wf/wfSimulation7";
import { WF_SIMULATION_8_QUESTIONS } from "../src/data/questions/wf/wfSimulation8";
import { WF_SIMULATION_9_QUESTIONS } from "../src/data/questions/wf/wfSimulation9";
import { WF_SIMULATION_10_QUESTIONS } from "../src/data/questions/wf/wfSimulation10";

function getLetterMultiset(str: string): Record<string, number> {
  const counts: Record<string, number> = {};
  const cleaned = str.toUpperCase().replace(/[^A-Z]/g, "");
  for (const char of cleaned) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

function areMultisetsEqual(m1: Record<string, number>, m2: Record<string, number>): boolean {
  const keys1 = Object.keys(m1).sort();
  const keys2 = Object.keys(m2).sort();
  if (keys1.length !== keys2.length) return false;
  for (const k of keys1) {
    if (m1[k] !== m2[k]) return false;
  }
  return true;
}

const gp4Candidates = [
  {
    id: "KFF-WF-GP4-001",
    targetWord: "RADIUS",
    initial: "R",
    scrambled: "D · S · A · U · I · R",
    letters: ["D", "S", "A", "U", "I", "R"],
    options: { A: "A", B: "D", C: "S", D: "R", E: null },
    key: "D",
    difficulty: "Leicht",
  },
  {
    id: "KFF-WF-GP4-002",
    targetWord: "CORTEX",
    initial: "C",
    scrambled: "O · X · E · T · R · C",
    letters: ["O", "X", "E", "T", "R", "C"],
    options: { A: "R", B: "C", C: "T", D: "X", E: null },
    key: "B",
    difficulty: "Leicht",
  },
  {
    id: "KFF-WF-GP4-003",
    targetWord: "PLEURA",
    initial: "P",
    scrambled: "L · R · A · U · E · P",
    letters: ["L", "R", "A", "U", "E", "P"],
    options: { A: "L", B: "R", C: "E", D: "U", E: null },
    key: "E",
    difficulty: "Leicht",
  },
  {
    id: "KFF-WF-GP4-004",
    targetWord: "ISOTOP",
    initial: "I",
    scrambled: "T · P · O · S · O · I",
    letters: ["T", "P", "O", "S", "O", "I"],
    options: { A: "I", B: "O", C: "S", D: "T", E: null },
    key: "A",
    difficulty: "Leicht",
  },
  {
    id: "KFF-WF-GP4-005",
    targetWord: "INFARKT",
    initial: "I",
    scrambled: "N · R · T · A · F · K · I",
    letters: ["N", "R", "T", "A", "F", "K", "I"],
    options: { A: "F", B: "N", C: "I", D: "K", E: null },
    key: "C",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-006",
    targetWord: "DENDRIT",
    initial: "D",
    scrambled: "N · T · I · R · D · E · D",
    letters: ["N", "T", "I", "R", "D", "E", "D"],
    options: { A: "R", B: "D", C: "T", D: "N", E: null },
    key: "B",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-007",
    targetWord: "STERNUM",
    initial: "S",
    scrambled: "T · N · U · M · E · R · S",
    letters: ["T", "N", "U", "M", "E", "R", "S"],
    options: { A: "T", B: "M", C: "R", D: "S", E: null },
    key: "D",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-008",
    targetWord: "PATELLA",
    initial: "P",
    scrambled: "A · L · T · L · E · A · P",
    letters: ["A", "L", "T", "L", "E", "A", "P"],
    options: { A: "L", B: "T", C: "E", D: "A", E: null },
    key: "E",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-009",
    targetWord: "CYSTEIN",
    initial: "C",
    scrambled: "Y · T · I · N · E · S · C",
    letters: ["Y", "T", "I", "N", "E", "S", "C"],
    options: { A: "C", B: "Y", C: "S", D: "T", E: null },
    key: "A",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-010",
    targetWord: "HUMERUS",
    initial: "H",
    scrambled: "U · R · S · E · M · U · H",
    letters: ["U", "R", "S", "E", "M", "U", "H"],
    options: { A: "M", B: "U", C: "H", D: "R", E: null },
    key: "C",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-011",
    targetWord: "PYRUVAT",
    initial: "P",
    scrambled: "Y · V · A · T · R · U · P",
    letters: ["Y", "V", "A", "T", "R", "U", "P"],
    options: { A: "V", B: "P", C: "Y", D: "R", E: null },
    key: "B",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-012",
    targetWord: "RESONANZ",
    initial: "R",
    scrambled: "E · N · Z · A · S · O · N · R",
    letters: ["E", "N", "Z", "A", "S", "O", "N", "R"],
    options: { A: "S", B: "Z", C: "N", D: "R", E: null },
    key: "D",
    difficulty: "Mittel",
  },
  {
    id: "KFF-WF-GP4-013",
    targetWord: "ANEURYSMA",
    initial: "A",
    scrambled: "N · R · Y · M · S · U · E · A · A",
    letters: ["N", "R", "Y", "M", "S", "U", "E", "A", "A"],
    options: { A: "A", B: "N", C: "R", D: "M", E: null },
    key: "A",
    difficulty: "Schwer",
  },
  {
    id: "KFF-WF-GP4-014",
    targetWord: "LABYRINTH",
    initial: "L",
    scrambled: "B · H · Y · N · T · R · I · A · L",
    letters: ["B", "H", "Y", "N", "T", "R", "I", "A", "L"],
    options: { A: "B", B: "R", C: "T", D: "H", E: null },
    key: "E",
    difficulty: "Schwer",
  },
  {
    id: "KFF-WF-GP4-015",
    targetWord: "METHIONIN",
    initial: "M",
    scrambled: "E · N · I · T · H · N · O · I · M",
    letters: ["E", "N", "I", "T", "H", "N", "O", "I", "M"],
    options: { A: "T", B: "N", C: "M", D: "H", E: null },
    key: "C",
    difficulty: "Schwer",
  },
];

let errors = 0;

// 1. Multiset & Scramble check
gp4Candidates.forEach((q, idx) => {
  const mTarget = getLetterMultiset(q.targetWord);
  const mScrambled = getLetterMultiset(q.scrambled);
  const mLetters = getLetterMultiset(q.letters.join(""));

  if (!areMultisetsEqual(mTarget, mScrambled)) {
    console.error(`FAIL Q${idx + 1}: multiset(targetWord) !== multiset(scrambled)`);
    errors++;
  }
  if (!areMultisetsEqual(mTarget, mLetters)) {
    console.error(`FAIL Q${idx + 1}: multiset(targetWord) !== multiset(letters)`);
    errors++;
  }
  if (q.letters[0] === q.initial) {
    console.error(`FAIL Q${idx + 1}: scrambled starts with target initial!`);
    errors++;
  }
  if (q.key === "E") {
    const opts = [q.options.A, q.options.B, q.options.C, q.options.D];
    if (opts.includes(q.initial)) {
      console.error(`FAIL Q${idx + 1}: Option E is key, but initial ${q.initial} is in options A-D!`);
      errors++;
    }
  } else {
    if (q.options[q.key as "A" | "B" | "C" | "D"] !== q.initial) {
      console.error(`FAIL Q${idx + 1}: Key ${q.key} does not match initial ${q.initial}!`);
      errors++;
    }
  }
});

// 2. Answer key balance & streak
const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
gp4Candidates.forEach(q => keyCounts[q.key]++);
console.log("Key counts:", keyCounts);
["A", "B", "C", "D", "E"].forEach(k => {
  if (keyCounts[k] !== 3) {
    console.error(`FAIL: Key ${k} count is ${keyCounts[k]}, expected 3!`);
    errors++;
  }
});

for (let i = 1; i < gp4Candidates.length; i++) {
  if (gp4Candidates[i].key === gp4Candidates[i - 1].key) {
    console.error(`FAIL: Consecutive duplicate key at ${i + 1}: ${gp4Candidates[i].key}`);
    errors++;
  }
}

// 3. Difficulties
const diffCounts: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
gp4Candidates.forEach(q => diffCounts[q.difficulty]++);
console.log("Difficulty counts:", diffCounts);
if (diffCounts.Leicht !== 4 || diffCounts.Mittel !== 8 || diffCounts.Schwer !== 3) {
  console.error("FAIL: Difficulty distribution mismatch!");
  errors++;
}

// 4. Collisions against existing
const allExisting = new Set<string>();
[
  ...RAW_GENERALPROBE_1_WF_QUESTIONS,
  ...RAW_GENERALPROBE_2_WF_QUESTIONS,
  ...RAW_GENERALPROBE_3_WF_QUESTIONS,
  ...WF_SIMULATION_1_QUESTIONS,
  ...WF_SIMULATION_2_QUESTIONS,
  ...WF_SIMULATION_3_QUESTIONS,
  ...WF_SIMULATION_4_QUESTIONS,
  ...WF_SIMULATION_5_QUESTIONS,
  ...WF_SIMULATION_6_QUESTIONS,
  ...WF_SIMULATION_7_QUESTIONS,
  ...WF_SIMULATION_8_QUESTIONS,
  ...WF_SIMULATION_9_QUESTIONS,
  ...WF_SIMULATION_10_QUESTIONS,
].forEach(q => allExisting.add(q.targetWord.toUpperCase()));

gp4Candidates.forEach(q => {
  if (allExisting.has(q.targetWord)) {
    console.error(`FAIL: Collision with existing word: ${q.targetWord}`);
    errors++;
  }
});

if (errors === 0) {
  console.log("ALL GP4 DRAFT CHECKS PASSED PERFECTLY! [100% SUCCESS]");
} else {
  console.error(`FAILED WITH ${errors} ERRORS`);
  process.exit(1);
}
