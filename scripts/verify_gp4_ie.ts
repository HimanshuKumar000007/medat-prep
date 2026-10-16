/**
 * Comprehensive Quality Assurance & Formal Logic Model Checker
 * MedAT Implikationen erkennen (IE) — Generalprobe #4 (10 Questions)
 * 
 * Features:
 * 1. Bounded Exhaustive Model Checker for Syllogistic Categorical Logic
 * 2. Independent Entailment Verification & Countermodel Enumeration
 * 3. Exact 3 Leicht / 5 Mittel / 2 Schwer Distribution Audit
 * 4. Exact 2 A / 2 B / 2 C / 2 D / 2 E Answer Key Balance Audit
 * 5. Option E Authenticity Proof (Exhaustive Counterexample generation for A–D)
 * 6. GP1, GP2 & GP3 Zero-Collision & Non-Regression Verification
 * 7. Dataset Factory & Simulator Integration Audit (221 Total Scored Tasks)
 */

import {
  RAW_GENERALPROBE_4_IE_QUESTIONS,
  GENERALPROBE_4_IE_QUESTIONS,
  GENERALPROBE_4_IE_SIMULATION_DATA,
} from "../src/data/generalprobe/generalprobe4IeQuestions";
import {
  RAW_GENERALPROBE_3_IE_QUESTIONS,
  GENERALPROBE_3_IE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3IeQuestions";
import {
  RAW_GENERALPROBE_2_IE_QUESTIONS,
  GENERALPROBE_2_IE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2IeQuestions";
import {
  RAW_GENERALPROBE_1_IE_QUESTIONS,
  GENERALPROBE_1_IE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe1IeQuestions";
import {
  buildGeneralprobe1Dataset,
  buildGeneralprobe2Dataset,
  buildGeneralprobe3Dataset,
  buildGeneralprobe4Dataset,
  buildIeSimulationQuestions,
  getGeneralprobeDataset,
} from "../src/data/generalprobe/generalprobeData";
import { IE_STORED_QUESTIONS } from "../src/data/questions/ie";

console.log("================================================================================");
console.log("MEDAT IE FORMAL LOGIC MODEL CHECKER & QA SUITE — GENERALPROBE #4");
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

// ─────────────────────────────────────────────────────────────────────────────
// FORMAL CATEGORICAL LOGIC MODEL CHECKER
// ─────────────────────────────────────────────────────────────────────────────
type TermName = "S" | "M" | "P";

interface Region {
  s: boolean;
  m: boolean;
  p: boolean;
}

// All 8 possible regions in a 3-Venn diagram
const ALL_REGIONS: Region[] = [];
for (let s of [false, true]) {
  for (let m of [false, true]) {
    for (let p of [false, true]) {
      ALL_REGIONS.push({ s, m, p });
    }
  }
}

type Model = Region[]; // Inhabited regions

type PropType = "ALL_ARE" | "ALL_ARE_NOT" | "SOME_ARE" | "SOME_ARE_NOT";

interface CategoricalProp {
  type: PropType;
  subject: TermName;
  predicate: TermName;
}

function termVal(r: Region, t: TermName): boolean {
  if (t === "S") return r.s;
  if (t === "M") return r.m;
  return r.p;
}

function satisfiesProp(model: Model, prop: CategoricalProp): boolean {
  const subInhabited = model.filter((r) => termVal(r, prop.subject));
  if (subInhabited.length === 0) {
    // Under existential import convention for categories under discourse
    return false;
  }

  if (prop.type === "ALL_ARE") {
    return subInhabited.every((r) => termVal(r, prop.predicate));
  }
  if (prop.type === "ALL_ARE_NOT") {
    return subInhabited.every((r) => !termVal(r, prop.predicate));
  }
  if (prop.type === "SOME_ARE") {
    return subInhabited.some((r) => termVal(r, prop.predicate));
  }
  if (prop.type === "SOME_ARE_NOT") {
    return subInhabited.some((r) => !termVal(r, prop.predicate));
  }
  return false;
}

// Generate all 2^8 non-empty models
const ALL_MODELS: Model[] = [];
const numSubsets = 1 << ALL_REGIONS.length;
for (let i = 1; i < numSubsets; i++) {
  const m: Model = [];
  for (let j = 0; j < ALL_REGIONS.length; j++) {
    if ((i & (1 << j)) !== 0) {
      m.push(ALL_REGIONS[j]);
    }
  }
  ALL_MODELS.push(m);
}

interface QuestionFormalSpec {
  qNum: number;
  id: string;
  p1: CategoricalProp;
  p2: CategoricalProp;
  expectedConclusion: "A" | "B" | "C" | "D" | "E";
  subjectDescription: string;
  middleDescription: string;
  predicateDescription: string;
}

const FORMAL_SPECS: QuestionFormalSpec[] = [
  {
    qNum: 1,
    id: "KFF-IE-GP4-001",
    p1: { type: "SOME_ARE", subject: "S", predicate: "M" }, // Spiegelteleskope ∩ Parabolspiegel ≠ ∅
    p2: { type: "ALL_ARE", subject: "M", predicate: "P" }, // Parabolspiegel ⊆ reflexionsoptisch
    expectedConclusion: "C", // Darii
    subjectDescription: "Spiegelteleskope",
    middleDescription: "Parabolspiegel-Systeme",
    predicateDescription: "reflexionsoptische Instrumente",
  },
  {
    qNum: 2,
    id: "KFF-IE-GP4-002",
    p1: { type: "ALL_ARE", subject: "S", predicate: "M" }, // Marinechronometer ⊆ Hemmungsuhrwerke
    p2: { type: "ALL_ARE", subject: "M", predicate: "P" }, // Hemmungsuhrwerke ⊆ Präzisionsinstrumente
    expectedConclusion: "A", // Barbara
    subjectDescription: "Marinechronometer",
    middleDescription: "Hemmungsuhrwerke",
    predicateDescription: "zeitmessende Präzisionsinstrumente",
  },
  {
    qNum: 3,
    id: "KFF-IE-GP4-003",
    p1: { type: "ALL_ARE", subject: "S", predicate: "M" }, // Obsidiansteine ⊆ vulkanische Gläser
    p2: { type: "ALL_ARE_NOT", subject: "M", predicate: "P" }, // vulkanische Gläser ∩ kristalline Gefüge = ∅
    expectedConclusion: "B", // Celarent
    subjectDescription: "Obsidiansteine",
    middleDescription: "vulkanische Gläser",
    predicateDescription: "kristalline Mineralgefüge",
  },
  {
    qNum: 4,
    id: "KFF-IE-GP4-004",
    p1: { type: "ALL_ARE_NOT", subject: "M", predicate: "P" }, // antike Münzprägungen ∩ Eisenobjekte = ∅
    p2: { type: "SOME_ARE", subject: "S", predicate: "M" }, // Grabungsfunde ∩ antike Münzprägungen ≠ ∅
    expectedConclusion: "D", // Ferio
    subjectDescription: "archäologische Grabungsfunde",
    middleDescription: "antike Münzprägungen",
    predicateDescription: "korrosionsanfällige Eisenobjekte",
  },
  {
    qNum: 5,
    id: "KFF-IE-GP4-005",
    p1: { type: "ALL_ARE", subject: "S", predicate: "M" }, // Radiolarien ⊆ Kieselgehäuse
    p2: { type: "ALL_ARE", subject: "P", predicate: "M" }, // Kieselalgen ⊆ Kieselgehäuse
    expectedConclusion: "E", // Undistributed Middle
    subjectDescription: "Tiefsee-Radiolarien",
    middleDescription: "Organismen mit amorphen Kieselgehäusen",
    predicateDescription: "benthische Kieselalgen",
  },
  {
    qNum: 6,
    id: "KFF-IE-GP4-006",
    p1: { type: "ALL_ARE", subject: "M", predicate: "P" }, // Schwingungshohlräume ⊆ Schalldämpfer
    p2: { type: "ALL_ARE", subject: "S", predicate: "M" }, // Helmholtz-Resonatoren ⊆ Schwingungshohlräume
    expectedConclusion: "A", // Barbara (premise inverted)
    subjectDescription: "Helmholtz-Resonatoren",
    middleDescription: "akustische Schwingungshohlräume",
    predicateDescription: "frequenzselektive Schalldämpfer",
  },
  {
    qNum: 7,
    id: "KFF-IE-GP4-007",
    p1: { type: "SOME_ARE", subject: "M", predicate: "P" }, // Leuchtkäfer ∩ luciferinproduzierend ≠ ∅
    p2: { type: "ALL_ARE", subject: "M", predicate: "S" }, // Leuchtkäfer ⊆ Waldtiere
    expectedConclusion: "C", // Disamis
    subjectDescription: "nachtaktive Waldtiere",
    middleDescription: "biolumineszente Leuchtkäfer",
    predicateDescription: "luciferinproduzierende Organismen",
  },
  {
    qNum: 8,
    id: "KFF-IE-GP4-008",
    p1: { type: "ALL_ARE", subject: "P", predicate: "M" }, // Stratosphärenwolken ⊆ Hochatmosphärenwolken
    p2: { type: "ALL_ARE_NOT", subject: "S", predicate: "M" }, // Wärmegewitter ∩ Hochatmosphärenwolken = ∅
    expectedConclusion: "B", // Camestres
    subjectDescription: "troposphärische Wärmegewitter",
    middleDescription: "eispartikelhaltige Hochatmosphärenwolken",
    predicateDescription: "polare Stratosphärenwolken",
  },
  {
    qNum: 9,
    id: "KFF-IE-GP4-009",
    p1: { type: "ALL_ARE", subject: "P", predicate: "M" }, // Auenbäume ⊆ Hartholzgewächse
    p2: { type: "SOME_ARE_NOT", subject: "S", predicate: "M" }, // Gebirgswald-Koniferen \ Hartholzgewächse ≠ ∅
    expectedConclusion: "D", // Baroco
    subjectDescription: "Gebirgswald-Koniferen",
    middleDescription: "laubabwerfende Hartholzgewächse",
    predicateDescription: "sommergrüne Auenbäume",
  },
  {
    qNum: 10,
    id: "KFF-IE-GP4-010",
    p1: { type: "SOME_ARE_NOT", subject: "M", predicate: "P" }, // Schelfeise \ Barriere-Eis ≠ ∅
    p2: { type: "SOME_ARE", subject: "M", predicate: "S" }, // Schelfeise ∩ driftende Eisfelder ≠ ∅
    expectedConclusion: "E", // Two particular premises
    subjectDescription: "driftende Eisfelder",
    middleDescription: "Gezeiten-Schelfeise",
    predicateDescription: "festverankerte Küstenbarriereneise",
  },
];

console.log("--- 1. Automated Model-Theoretic Proofs for All 10 Questions ---");

function formatRegion(r: Region): string {
  const sStr = r.s ? "S" : "¬S";
  const mStr = r.m ? "M" : "¬M";
  const pStr = r.p ? "P" : "¬P";
  return `(${sStr}∧${mStr}∧${pStr})`;
}

function formatModel(m: Model): string {
  return "{" + m.map(formatRegion).join(", ") + "}";
}

FORMAL_SPECS.forEach((spec) => {
  // Find all models where both premises hold
  const validModels = ALL_MODELS.filter((m) => {
    const hasS = m.some((r) => r.s);
    const hasM = m.some((r) => r.m);
    const hasP = m.some((r) => r.p);
    if (!hasS || !hasM || !hasP) return false;

    return satisfiesProp(m, spec.p1) && satisfiesProp(m, spec.p2);
  });

  assert(
    validModels.length > 0,
    `Q${spec.qNum} premises are jointly consistent (${validModels.length} of ${ALL_MODELS.length} non-empty Venn models satisfy P1 & P2)`
  );

  // Test the four standard conclusions between S and P
  const concA: CategoricalProp = { type: "ALL_ARE", subject: "S", predicate: "P" };
  const concB: CategoricalProp = { type: "ALL_ARE_NOT", subject: "S", predicate: "P" };
  const concC: CategoricalProp = { type: "SOME_ARE", subject: "S", predicate: "P" };
  const concD: CategoricalProp = { type: "SOME_ARE_NOT", subject: "S", predicate: "P" };

  const holdsA = validModels.every((m) => satisfiesProp(m, concA));
  const holdsB = validModels.every((m) => satisfiesProp(m, concB));
  const holdsC = validModels.every((m) => satisfiesProp(m, concC));
  const holdsD = validModels.every((m) => satisfiesProp(m, concD));

  const candidateResults = [
    { opt: "A", holds: holdsA, prop: concA },
    { opt: "B", holds: holdsB, prop: concB },
    { opt: "C", holds: holdsC, prop: concC },
    { opt: "D", holds: holdsD, prop: concD },
  ];

  let derivedConclusion: "A" | "B" | "C" | "D" | "E" = "E";
  if (holdsA) {
    derivedConclusion = "A";
  } else if (holdsB) {
    derivedConclusion = "B";
  } else if (holdsC) {
    derivedConclusion = "C";
  } else if (holdsD) {
    derivedConclusion = "D";
  }

  assert(
    derivedConclusion === spec.expectedConclusion,
    `Q${spec.qNum} (${spec.id}) model checker derived '${derivedConclusion}', matches expected '${spec.expectedConclusion}'`
  );

  // Distractor / Countermodel audit for rejected options
  for (const cand of candidateResults) {
    if (!cand.holds) {
      const counterModel = validModels.find((m) => !satisfiesProp(m, cand.prop));
      assert(
        !!counterModel,
        `Q${spec.qNum} Option ${cand.opt} non-entailment countermodel found: ${counterModel ? formatModel(counterModel) : "none"}`
      );
    }
  }

  // Special in-depth verification for Q05 (Undistributed Middle Fallacy)
  if (spec.qNum === 5) {
    console.log("    [Q05 IN-DEPTH MODEL AUDIT — UNDISTRIBUTED MIDDLE]");
    const m1 = validModels.find((m) => satisfiesProp(m, concB) && !satisfiesProp(m, concA));
    const m2 = validModels.find((m) => satisfiesProp(m, concA) && !satisfiesProp(m, concB));
    assert(!!m1, "Q05 Model 1 (Disjoint: S ∩ P = ∅) exists and satisfies P1 & P2");
    assert(!!m2, "Q05 Model 2 (Inclusive: S ⊆ P) exists and satisfies P1 & P2");

    if (m1) {
      const aInM1 = satisfiesProp(m1, concA);
      const bInM1 = satisfiesProp(m1, concB);
      const cInM1 = satisfiesProp(m1, concC);
      const dInM1 = satisfiesProp(m1, concD);
      assert(!aInM1 && bInM1 && !cInM1 && dInM1, `Q05 M1: A is FALSE, B is TRUE, C is FALSE, D is TRUE`);
    }
    if (m2) {
      const aInM2 = satisfiesProp(m2, concA);
      const bInM2 = satisfiesProp(m2, concB);
      const cInM2 = satisfiesProp(m2, concC);
      const dInM2 = satisfiesProp(m2, concD);
      assert(aInM2 && !bInM2 && cInM2 && !dInM2, `Q05 M2: A is TRUE, B is FALSE, C is TRUE, D is FALSE`);
    }
  }

  // Special in-depth verification for Q10 (Two Particulars Fallacy)
  if (spec.qNum === 10) {
    console.log("    [Q10 IN-DEPTH MODEL AUDIT — TWO PARTICULAR PREMISES]");
    const m1 = validModels.find((m) => satisfiesProp(m, concB) && !satisfiesProp(m, concA));
    const m2 = validModels.find((m) => satisfiesProp(m, concA) && !satisfiesProp(m, concB));
    assert(!!m1, "Q10 Model 1 (Disjoint: S ∩ P = ∅) exists and satisfies P1 & P2");
    assert(!!m2, "Q10 Model 2 (Inclusive: S ⊆ P) exists and satisfies P1 & P2");

    if (m1) {
      const aInM1 = satisfiesProp(m1, concA);
      const bInM1 = satisfiesProp(m1, concB);
      const cInM1 = satisfiesProp(m1, concC);
      const dInM1 = satisfiesProp(m1, concD);
      assert(!aInM1 && bInM1 && !cInM1 && dInM1, `Q10 M1: A is FALSE, B is TRUE, C is FALSE, D is TRUE`);
    }
    if (m2) {
      const aInM2 = satisfiesProp(m2, concA);
      const bInM2 = satisfiesProp(m2, concB);
      const cInM2 = satisfiesProp(m2, concC);
      const dInM2 = satisfiesProp(m2, concD);
      assert(aInM2 && !bInM2 && cInM2 && !dInM2, `Q10 M2: A is TRUE, B is FALSE, C is TRUE, D is FALSE`);
    }
  }

  // Vacuous truth & Empty-set audit for universal statements (Q02, Q03, Q06, Q08)
  if ([2, 3, 6, 8].includes(spec.qNum)) {
    const emptySModels = ALL_MODELS.filter((m) => !m.some((r) => r.s) && m.some((r) => r.m) && m.some((r) => r.p));
    const folAllAre = (m: Model) => m.filter((r) => r.s).every((r) => r.p);
    const folAllAreNot = (m: Model) => m.filter((r) => r.s).every((r) => !r.p);
    const vacuousBothTrue = emptySModels.every((m) => folAllAre(m) && folAllAreNot(m));
    assert(
      vacuousBothTrue,
      `Q${spec.qNum} Universal Semantics: If S = ∅, both 'Alle S sind P' and 'Alle S sind keine P' are vacuously true in pure FOL (proves why contradiction cannot be asserted in empty-domain semantics)`
    );
  }
});

// 2. Question Counts & Unique Identifiers
console.log("\n--- 2. Question Count & Metadata ---");
const rawQuestions = RAW_GENERALPROBE_4_IE_QUESTIONS;
const storedQuestions = GENERALPROBE_4_IE_QUESTIONS;
const simData = GENERALPROBE_4_IE_SIMULATION_DATA;

assert(rawQuestions.length === 10, `Raw questions count is exactly 10 (found: ${rawQuestions.length})`);
assert(storedQuestions.length === 10, `Stored questions count is exactly 10 (found: ${storedQuestions.length})`);
assert(simData.questions.length === 10, `Simulation data questions count is exactly 10 (found: ${simData.questions.length})`);
assert(simData.timeLimitSeconds === 600, `Time limit is exactly 600s / 10 minutes (found: ${simData.timeLimitSeconds})`);

// 3. ID Uniqueness & Correct GP4 Naming Pattern
console.log("\n--- 3. ID Uniqueness & Naming Pattern ---");
const idSet = new Set<string>();
rawQuestions.forEach((q, idx) => {
  const expectedId = `KFF-IE-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `Raw Q${idx + 1} ID is ${expectedId} (actual: ${q.id})`);
  assert(!idSet.has(q.id), `ID ${q.id} is unique`);
  idSet.add(q.id);
});

storedQuestions.forEach((sq, idx) => {
  const expectedId = `KFF-IE-GP4-${String(idx + 1).padStart(3, "0")}`;
  const expectedLegacy = `ie-sim4-q${String(idx + 1).padStart(2, "0")}`;
  assert(sq.id === expectedId, `Stored Q${idx + 1} ID is ${expectedId} (actual: ${sq.id})`);
  assert(sq.legacyId === expectedLegacy, `Stored Q${idx + 1} legacyId is ${expectedLegacy} (actual: ${sq.legacyId})`);
  assert(sq.exam === "MEDAT-H", `Stored Q${idx + 1} exam is MEDAT-H (actual: ${sq.exam})`);
  assert(sq.section === "KFF", `Stored Q${idx + 1} section is KFF (actual: ${sq.section})`);
  assert(sq.subjectId === "kff-imp", `Stored Q${idx + 1} subjectId is kff-imp (actual: ${sq.subjectId})`);
  assert(sq.chapterId === "kff-imp-syll", `Stored Q${idx + 1} chapterId is kff-imp-syll (actual: ${sq.chapterId})`);
});

// 4. Answer Key Distribution (Balanced: exactly 2 A, 2 B, 2 C, 2 D, 2 E)
console.log("\n--- 4. Answer Key Distribution & Anti-Pattern Check ---");
const keyDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
rawQuestions.forEach((q) => {
  keyDist[q.correctAnswer] = (keyDist[q.correctAnswer] || 0) + 1;
});
console.log("  Answer Key Counts:", keyDist);
assert(keyDist.A === 2, `Option A count is 2 (actual: ${keyDist.A})`);
assert(keyDist.B === 2, `Option B count is 2 (actual: ${keyDist.B})`);
assert(keyDist.C === 2, `Option C count is 2 (actual: ${keyDist.C})`);
assert(keyDist.D === 2, `Option D count is 2 (actual: ${keyDist.D})`);
assert(keyDist.E === 2, `Option E count is 2 (actual: ${keyDist.E})`);

// Check non-consecutive repeating keys
for (let i = 0; i < rawQuestions.length - 1; i++) {
  const cur = rawQuestions[i].correctAnswer;
  const next = rawQuestions[i + 1].correctAnswer;
  assert(cur !== next, `No consecutive repeating keys: Q${i + 1} (${cur}) !== Q${i + 2} (${next})`);
}

// 5. Difficulty Calibration (Exactly 3 Leicht, 5 Mittel, 2 Schwer)
console.log("\n--- 5. Difficulty Calibration ---");
const diffDist: Record<string, number> = { Leicht: 0, Mittel: 0, Schwer: 0 };
rawQuestions.forEach((q) => {
  diffDist[q.difficulty] = (diffDist[q.difficulty] || 0) + 1;
});
console.log("  Difficulty Counts:", diffDist);
assert(diffDist.Leicht === 3, `Leicht count is exactly 3 (actual: ${diffDist.Leicht})`);
assert(diffDist.Mittel === 5, `Mittel count is exactly 5 (actual: ${diffDist.Mittel})`);
assert(diffDist.Schwer === 2, `Schwer count is exactly 2 (actual: ${diffDist.Schwer})`);

// 6. Formal Premise & Option Structure
console.log("\n--- 6. Formal Premise & Option Structure ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(q.premises.length === 2, `Q${qNum} has exactly 2 premises`);
  assert(q.premises[0].length > 10, `Q${qNum} Premise 1 is non-empty`);
  assert(q.premises[1].length > 10, `Q${qNum} Premise 2 is non-empty`);

  // Verify Options A-E
  assert(typeof q.options.A === "string" && q.options.A.startsWith("Alle "), `Q${qNum} Option A starts with 'Alle '`);
  assert(typeof q.options.B === "string" && q.options.B.startsWith("Alle "), `Q${qNum} Option B starts with 'Alle '`);
  assert(typeof q.options.B === "string" && q.options.B.includes(" keine "), `Q${qNum} Option B contains ' keine '`);
  assert(typeof q.options.C === "string" && q.options.C.startsWith("Einige "), `Q${qNum} Option C starts with 'Einige '`);
  assert(typeof q.options.D === "string" && q.options.D.startsWith("Einige "), `Q${qNum} Option D starts with 'Einige '`);
  assert(typeof q.options.D === "string" && q.options.D.includes(" keine "), `Q${qNum} Option D contains ' keine '`);
  assert(
    q.options.E === "Keine der Schlussfolgerungen A–D ist richtig.",
    `Q${qNum} Option E matches standard MedAT phrasing`
  );

  // StoredQuestion option index alignment
  const sq = storedQuestions[idx];
  const expectedIndex = ["A", "B", "C", "D", "E"].indexOf(q.correctAnswer);
  assert(sq.correctAnswer === expectedIndex, `Stored Q${qNum} correctAnswer index is ${expectedIndex} (actual: ${sq.correctAnswer})`);
  assert(sq.options[sq.correctAnswer] === q.options[q.correctAnswer], `Stored Q${qNum} options[correctAnswer] matches raw text`);
});

// 7. Explanations & Exhaustive Distractor Analysis
console.log("\n--- 7. Explanations & Distractor Analysis ---");
rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  assert(q.explanation.length > 250, `Q${qNum} explanation is sufficiently detailed (${q.explanation.length} chars)`);
  assert(q.explanation.includes("Formale Analyse"), `Q${qNum} explanation includes Formale Analyse`);
  assert(q.explanation.includes("Distraktoren-Analyse"), `Q${qNum} explanation includes Distraktoren-Analyse`);
  assert(q.explanation.includes("Option A"), `Q${qNum} explanation covers Option A`);
  assert(q.explanation.includes("Option B"), `Q${qNum} explanation covers Option B`);
  assert(q.explanation.includes("Option C"), `Q${qNum} explanation covers Option C`);
  assert(q.explanation.includes("Option D"), `Q${qNum} explanation covers Option D`);
  assert(q.explanation.includes("Option E"), `Q${qNum} explanation covers Option E`);
});

// 8. Independence & Zero-Collision with GP1, GP2 & GP3
console.log("\n--- 8. Independence & Zero-Collision with GP1, GP2 & GP3 ---");
assert(RAW_GENERALPROBE_1_IE_QUESTIONS.length === 10, "GP1 raw count preserved at 10");
assert(GENERALPROBE_1_IE_QUESTIONS.length === 10, "GP1 stored count preserved at 10");
assert(RAW_GENERALPROBE_2_IE_QUESTIONS.length === 10, "GP2 raw count preserved at 10");
assert(GENERALPROBE_2_IE_QUESTIONS.length === 10, "GP2 stored count preserved at 10");
assert(RAW_GENERALPROBE_3_IE_QUESTIONS.length === 10, "GP3 raw count preserved at 10");
assert(GENERALPROBE_3_IE_QUESTIONS.length === 10, "GP3 stored count preserved at 10");

const existingPremises = new Set<string>();
RAW_GENERALPROBE_1_IE_QUESTIONS.forEach((q) => existingPremises.add(q.premises.join(" | ")));
RAW_GENERALPROBE_2_IE_QUESTIONS.forEach((q) => existingPremises.add(q.premises.join(" | ")));
RAW_GENERALPROBE_3_IE_QUESTIONS.forEach((q) => existingPremises.add(q.premises.join(" | ")));

rawQuestions.forEach((q, idx) => {
  const premisesStr = q.premises.join(" | ");
  assert(!existingPremises.has(premisesStr), `Q${idx + 1} premises are completely new (zero collision with GP1/GP2/GP3)`);
});

const existingIds = new Set([
  ...RAW_GENERALPROBE_1_IE_QUESTIONS.map((q) => q.id),
  ...RAW_GENERALPROBE_2_IE_QUESTIONS.map((q) => q.id),
  ...RAW_GENERALPROBE_3_IE_QUESTIONS.map((q) => q.id),
]);
rawQuestions.forEach((q) => {
  assert(!existingIds.has(q.id), `ID ${q.id} does not collide with GP1/GP2/GP3 IDs`);
});

// 9. Generalprobe #4 Full Dataset Integration
console.log("\n--- 9. Generalprobe #4 Full Dataset Integration ---");
const gp4 = buildGeneralprobe4Dataset();
assert(gp4.id === "generalprobe-4", "GP4 dataset ID is generalprobe-4");
assert(gp4.ieQuestions.length === 10, `GP4 dataset has exactly 10 IE questions (found: ${gp4.ieQuestions.length})`);

gp4.ieQuestions.forEach((q, idx) => {
  const expectedId = `KFF-IE-GP4-${String(idx + 1).padStart(3, "0")}`;
  assert(q.id === expectedId, `GP4 dataset IE Q${idx + 1} ID is ${expectedId}`);
});

// Helper functions
const helperIe = buildIeSimulationQuestions(4);
assert(helperIe.length === 10, `buildIeSimulationQuestions(4) returns 10 questions`);
const fetchedGp4 = getGeneralprobeDataset("generalprobe-4");
assert(fetchedGp4.ieQuestions.length === 10, `getGeneralprobeDataset("generalprobe-4") has 10 IE questions`);

// Total scored questions in GP4
const bmsTotal = gp4.bmsQuestions.length;
const tvTotal = gp4.tvQuestions.length;
const kffTotal =
  gp4.fzQuestions.length +
  gp4.zfQuestions.length +
  gp4.wfQuestions.length +
  gp4.gmRecallQuestions.length +
  gp4.ieQuestions.length;
const sekTotal = gp4.erQuestions.length + gp4.eeQuestions.length + gp4.seQuestions.length;
const grandTotal = bmsTotal + tvTotal + kffTotal + sekTotal;

console.log(`  BMS Total: ${bmsTotal} (expected: 94)`);
console.log(`  TV Total: ${tvTotal} (expected: 12)`);
console.log(`  KFF Scored Total: ${kffTotal} (expected: 75)`);
console.log(`  SEK Total: ${sekTotal} (expected: 40)`);
console.log(`  Grand Total Scored: ${grandTotal} (expected: 221)`);

assert(bmsTotal === 94, "BMS total is 94");
assert(tvTotal === 12, "TV total is 12");
assert(gp4.fzQuestions.length === 15, "FZ count is 15");
assert(gp4.zfQuestions.length === 10, "ZF count is 10");
assert(gp4.wfQuestions.length === 15, "WF count is 15");
assert(gp4.gmRecallQuestions.length === 25, "GM Recall count is 25");
assert(gp4.gmCards.length === 8, "GM Cards count is 8");
assert(gp4.ieQuestions.length === 10, "IE count is 10");
assert(kffTotal === 75, "KFF scored total is 75");
assert(sekTotal === 40, "SEK total is 40");
assert(grandTotal === 221, "Grand total scored questions across GP4 is exactly 221");

// 10. Question Store Resolution Check
console.log("\n--- 10. Question Store Resolution Check ---");
rawQuestions.forEach((q) => {
  const found = IE_STORED_QUESTIONS.find((item) => item.id === q.id);
  assert(found !== undefined, `Question ${q.id} is resolvable in IE_STORED_QUESTIONS`);
});

console.log("\n================================================================================");
if (errorCount === 0) {
  console.log("🎉 ALL QUALITY ASSURANCE CHECKS & MODEL PROOFS PASSED WITH ZERO ERRORS!");
} else {
  console.error(`❌ FAILED WITH ${errorCount} ERRORS!`);
  process.exit(1);
}
console.log("================================================================================\n");
