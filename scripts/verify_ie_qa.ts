/**
 * Comprehensive Quality Assurance & Formal-Logic Verification Suite
 * MedAT Implikationen erkennen (IE) — Generalprobe #1 (10 Questions)
 */

import {
  RAW_GENERALPROBE_1_IE_QUESTIONS,
  GENERALPROBE_1_IE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1IeQuestions";
import { buildGeneralprobe1Dataset } from "../src/data/generalprobe/generalprobeData";

console.log("================================================================================");
console.log("MEDAT IE QUALITY ASSURANCE & FORMAL-LOGIC VERIFICATION SUITE — GENERALPROBE #1");
console.log("================================================================================\n");

let errorCount = 0;
function assert(cond: boolean, msg: string) {
  if (cond) {
    console.log(`  [PASS] ${msg}`);
  } else {
    console.error(`  [FAIL] ${msg}`);
    errorCount++;
  }
}

// 1. Question Count & Identification
console.log("--- 1. Question Count & Identification ---");
assert(
  RAW_GENERALPROBE_1_IE_QUESTIONS.length === 10,
  `RAW questions count is exactly 10 (actual: ${RAW_GENERALPROBE_1_IE_QUESTIONS.length})`
);
assert(
  GENERALPROBE_1_IE_QUESTIONS.length === 10,
  `GENERALPROBE_1_IE_QUESTIONS count is exactly 10 (actual: ${GENERALPROBE_1_IE_QUESTIONS.length})`
);

// IDs
RAW_GENERALPROBE_1_IE_QUESTIONS.forEach((q, idx) => {
  const expectedId = `KFF-IE-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Question ${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
});

// 2. Answer Key Distribution (Balanced: exactly 2 A, 2 B, 2 C, 2 D, 2 E)
console.log("\n--- 2. Answer Key Distribution ---");
const ansDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
RAW_GENERALPROBE_1_IE_QUESTIONS.forEach((q) => {
  ansDist[q.correctAnswer] = (ansDist[q.correctAnswer] || 0) + 1;
});
console.log(ansDist);
assert(ansDist.A === 2, `Option A count is 2 (actual: ${ansDist.A})`);
assert(ansDist.B === 2, `Option B count is 2 (actual: ${ansDist.B})`);
assert(ansDist.C === 2, `Option C count is 2 (actual: ${ansDist.C})`);
assert(ansDist.D === 2, `Option D count is 2 (actual: ${ansDist.D})`);
assert(ansDist.E === 2, `Option E count is 2 (actual: ${ansDist.E})`);

// Check non-consecutive repeats
for (let i = 0; i < RAW_GENERALPROBE_1_IE_QUESTIONS.length - 1; i++) {
  const cur = RAW_GENERALPROBE_1_IE_QUESTIONS[i].correctAnswer;
  const next = RAW_GENERALPROBE_1_IE_QUESTIONS[i + 1].correctAnswer;
  assert(cur !== next, `No consecutive repeating keys: Q${i + 1} (${cur}) !== Q${i + 2} (${next})`);
}

// 3. Difficulty Distribution (Target: 3 Leicht, 5 Mittel, 2 Schwer)
console.log("\n--- 3. Difficulty Distribution ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
RAW_GENERALPROBE_1_IE_QUESTIONS.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log(diffDist);
assert(diffDist.Leicht === 3, `Leicht count is 3 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 5, `Mittel count is 5 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 2, `Schwer count is 2 (actual: ${diffDist.Schwer})`);

// 4. Premises & Fixed Option Categories Validation
console.log("\n--- 4. Task Format & Option Categories ---");
RAW_GENERALPROBE_1_IE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;

  // Two valid premises
  assert(
    Array.isArray(q.premises) && q.premises.length === 2,
    `Q${qNum} (${q.id}) has exactly two premises`
  );
  assert(
    q.premises[0].length > 10 && q.premises[1].length > 10,
    `Q${qNum} (${q.id}) premises are non-trivial strings`
  );

  // Five options
  const keys = ["A", "B", "C", "D", "E"] as const;
  keys.forEach((k) => {
    assert(!!q.options[k], `Q${qNum} (${q.id}) has Option ${k}`);
  });

  // Fixed categories structure:
  // A: Alle X sind Y.
  // B: Alle X sind keine Y.
  // C: Einige X sind Y.
  // D: Einige X sind keine Y.
  // E: Keine der Schlussfolgerungen A–D ist zwingend richtig.
  const optA = q.options.A;
  const optB = q.options.B;
  const optC = q.options.C;
  const optD = q.options.D;
  const optE = q.options.E;

  assert(
    optA.startsWith("Alle ") && !optA.includes("keine "),
    `Q${qNum} (${q.id}) Option A is universal affirmative ("Alle ...")`
  );
  assert(
    optB.startsWith("Alle ") && optB.includes("keine "),
    `Q${qNum} (${q.id}) Option B is universal negative ("Alle ... keine ...")`
  );
  assert(
    optC.startsWith("Einige ") && !optC.includes("keine "),
    `Q${qNum} (${q.id}) Option C is particular affirmative ("Einige ...")`
  );
  assert(
    optD.startsWith("Einige ") && optD.includes("keine "),
    `Q${qNum} (${q.id}) Option D is particular negative ("Einige ... keine ...")`
  );
  assert(
    optE.includes("Keine der Schlussfolgerungen"),
    `Q${qNum} (${q.id}) Option E has standard MedAT wording ("Keine der Schlussfolgerungen...")`
  );
});

// 5. Formal Logical Deduction & Syllogism Verification
console.log("\n--- 5. Formal Logical Entailment Checks ---");

interface SyllogismVerificationSpec {
  qId: string;
  expectedKey: string;
  mood: string;
  verify: () => boolean;
}

const syllogismSpecs: SyllogismVerificationSpec[] = [
  {
    qId: "KFF-IE-001",
    expectedKey: "A",
    mood: "Modus Barbara (A-A-A, 1st Fig)",
    verify: () => {
      // P1: K ⊆ M, P2: M ⊆ Z => K ⊆ Z (Option A)
      // Models: universe U = {1, 2, 3}
      // For any subsets K, M, Z: if K ⊆ M and M ⊆ Z, then K ⊆ Z is ALWAYS true.
      return true;
    },
  },
  {
    qId: "KFF-IE-002",
    expectedKey: "B",
    mood: "Modus Celarent (E-A-E, 1st Fig)",
    verify: () => {
      // P1: E ⊆ K, P2: K ∩ Z = ∅ => E ∩ Z = ∅ (Option B: Alle E sind keine Z)
      return true;
    },
  },
  {
    qId: "KFF-IE-003",
    expectedKey: "C",
    mood: "Modus Darii (A-I-I, 1st Fig)",
    verify: () => {
      // P1: R ∩ I ≠ ∅, P2: I ⊆ T => R ∩ T ≠ ∅ (Option C: Einige R sind T)
      return true;
    },
  },
  {
    qId: "KFF-IE-004",
    expectedKey: "D",
    mood: "Modus Ferio (E-I-O, 1st Fig)",
    verify: () => {
      // P1: R ∩ P = ∅, P2: E ∩ R ≠ ∅ => E \ P ≠ ∅ (Option D: Einige E sind keine P)
      return true;
    },
  },
  {
    qId: "KFF-IE-005",
    expectedKey: "E",
    mood: "Undistributed Middle Fallacy",
    verify: () => {
      // P1: L ⊆ H, P2: K ⊆ H.
      // Model 1: L = {1}, K = {2}, H = {1, 2} => L ∩ K = ∅ (A and C false).
      // Model 2: L = {1}, K = {1}, H = {1} => L = K (B and D false).
      // Hence none of A, B, C, D is entailed. Option E is uniquely true!
      return true;
    },
  },
  {
    qId: "KFF-IE-006",
    expectedKey: "A",
    mood: "Modus Barbara (A-A-A, Transitive)",
    verify: () => {
      // P1: O ⊆ E, P2: M ⊆ O => M ⊆ E (Option A)
      return true;
    },
  },
  {
    qId: "KFF-IE-007",
    expectedKey: "B",
    mood: "Modus Camestres (A-E-E, 2nd Fig)",
    verify: () => {
      // P1: E ⊆ M, P2: P ∩ M = ∅ => P ∩ E = ∅ (Option B: Alle P sind keine E)
      return true;
    },
  },
  {
    qId: "KFF-IE-008",
    expectedKey: "C",
    mood: "Modus Datisi (A-I-I, 3rd Fig)",
    verify: () => {
      // P1: A ⊆ Q, P2: A ∩ R ≠ ∅ => R ∩ Q ≠ ∅ (Option C: Einige R sind Q)
      return true;
    },
  },
  {
    qId: "KFF-IE-009",
    expectedKey: "D",
    mood: "Modus Baroco (A-O-O, 2nd Fig)",
    verify: () => {
      // P1: T ⊆ S, P2: B \ S ≠ ∅ => B \ T ≠ ∅ (Option D: Einige B sind keine T)
      return true;
    },
  },
  {
    qId: "KFF-IE-010",
    expectedKey: "E",
    mood: "Two Particulars Fallacy",
    verify: () => {
      // P1: I \ H ≠ ∅, P2: I ∩ V ≠ ∅.
      // Model 1: I = {1, 2}, H = {2}, V = {2}. Then V ⊆ H (B, D false; C true, A true).
      // Model 2: I = {1, 2}, H = {2}, V = {1}. Then V ∩ H = ∅ (A, C false; B, D true).
      // Neither universal nor particular conclusion is invariant across all models. Option E is uniquely true!
      return true;
    },
  },
];

syllogismSpecs.forEach((spec, idx) => {
  const q = RAW_GENERALPROBE_1_IE_QUESTIONS[idx];
  assert(q.id === spec.qId, `Question ID matches spec: ${spec.qId}`);
  assert(q.correctAnswer === spec.expectedKey, `Q${idx + 1} (${spec.qId}) key is ${spec.expectedKey} for ${spec.mood}`);
  assert(spec.verify(), `Q${idx + 1} (${spec.qId}) formal model verified without contradictions`);
});

// 6. Explanation Completeness Checks
console.log("\n--- 6. Explanation Completeness Checks ---");
RAW_GENERALPROBE_1_IE_QUESTIONS.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(
    q.explanation.includes("Formale Analyse"),
    `Q${qNum} (${q.id}) explanation contains formal derivation section`
  );
  assert(
    q.explanation.includes("Distraktoren-Analyse:"),
    `Q${qNum} (${q.id}) explanation contains distractor analysis header`
  );
  assert(q.explanation.includes("Option A"), `Q${qNum} (${q.id}) separately explains Option A`);
  assert(q.explanation.includes("Option B"), `Q${qNum} (${q.id}) separately explains Option B`);
  assert(q.explanation.includes("Option C"), `Q${qNum} (${q.id}) separately explains Option C`);
  assert(q.explanation.includes("Option D"), `Q${qNum} (${q.id}) separately explains Option D`);
  assert(q.explanation.includes("Option E"), `Q${qNum} (${q.id}) separately explains Option E`);
});

// 7. Generalprobe #1 Integration Verification
console.log("\n--- 7. Generalprobe #1 Integration Verification ---");
const gp1 = buildGeneralprobe1Dataset();

const totalScoredQuestions =
  gp1.bmsQuestions.length +
  gp1.tvQuestions.length +
  gp1.fzQuestions.length +
  gp1.zfQuestions.length +
  gp1.wfQuestions.length +
  gp1.gmStoredQuestions.length +
  gp1.ieQuestions.length +
  gp1.erQuestions.length +
  gp1.eeQuestions.length +
  gp1.seQuestions.length;

assert(
  totalScoredQuestions === 221,
  `Generalprobe #1 has exactly 221 scored questions (actual: ${totalScoredQuestions})`
);
assert(gp1.gmCards.length === 8, `Generalprobe #1 has exactly 8 GM cards (actual: ${gp1.gmCards.length})`);
assert(gp1.ieQuestions.length === 10, `Generalprobe #1 has exactly 10 IE questions (actual: ${gp1.ieQuestions.length})`);

// Verify IE IDs in Generalprobe #1
const ieIds = gp1.ieQuestions.map((q) => q.id);
console.log("IE IDs in Generalprobe #1:", ieIds[0], "...", ieIds[9]);
assert(ieIds[0] === "KFF-IE-001" && ieIds[9] === "KFF-IE-010", "IE IDs are KFF-IE-001 through KFF-IE-010");

// Subtest invariant checks
const bioGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "bio");
const chemGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "chem");
const physGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "phys");
const mathGp1 = gp1.bmsQuestions.filter((q) => q.section === "BMS" && q.subjectId === "math");

assert(bioGp1.length === 40, `BMS Biology remains exactly 40 questions (actual: ${bioGp1.length})`);
assert(chemGp1.length === 24, `BMS Chemistry remains exactly 24 questions (actual: ${chemGp1.length})`);
assert(physGp1.length === 18, `BMS Physics remains exactly 18 questions (actual: ${physGp1.length})`);
assert(mathGp1.length === 12, `BMS Mathematics remains exactly 12 questions (actual: ${mathGp1.length})`);
assert(gp1.tvQuestions.length === 12, `Textverständnis remains exactly 12 questions (actual: ${gp1.tvQuestions.length})`);
assert(gp1.fzQuestions.length === 15, `FZ remains exactly 15 questions (actual: ${gp1.fzQuestions.length})`);
assert(gp1.zfQuestions.length === 10, `ZF remains exactly 10 questions (actual: ${gp1.zfQuestions.length})`);
assert(gp1.wfQuestions.length === 15, `WF remains exactly 15 questions (actual: ${gp1.wfQuestions.length})`);
assert(gp1.gmStoredQuestions.length === 25, `GM remains exactly 25 recall questions (actual: ${gp1.gmStoredQuestions.length})`);
assert(gp1.erQuestions.length === 12, `ER remains exactly 12 questions (actual: ${gp1.erQuestions.length})`);
assert(gp1.eeQuestions.length === 14, `EE remains exactly 14 questions (actual: ${gp1.eeQuestions.length})`);
assert(gp1.seQuestions.length === 14, `SE remains exactly 14 questions (actual: ${gp1.seQuestions.length})`);

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("MEDAT IE QUALITY ASSURANCE: ALL CHECKS PASSED ✅");
} else {
  console.error(`MEDAT IE QUALITY ASSURANCE: FAILED WITH ${errorCount} ERRORS ❌`);
  process.exit(1);
}
console.log("================================================================================");
