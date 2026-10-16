import fs from "fs";
import path from "path";
import { RAW_GENERALPROBE_3_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe3ChemistryQuestions";

const targetKeys: Record<string, "A" | "B" | "C" | "D" | "E"> = {
  "CHEM-BMS-GP3-001": "B", // was A
  "CHEM-BMS-GP3-002": "E", // was C
  "CHEM-BMS-GP3-003": "C", // was B
  "CHEM-BMS-GP3-004": "A", // was D
  "CHEM-BMS-GP3-005": "D", // was E
  "CHEM-BMS-GP3-006": "B", // was A
  "CHEM-BMS-GP3-007": "D", // was C
  "CHEM-BMS-GP3-008": "A", // was B
  "CHEM-BMS-GP3-009": "C", // was D
  "CHEM-BMS-GP3-010": "E", // was E
  "CHEM-BMS-GP3-011": "D", // was A
  "CHEM-BMS-GP3-012": "B", // was C
  "CHEM-BMS-GP3-013": "A", // was D
  "CHEM-BMS-GP3-014": "E", // was B
  "CHEM-BMS-GP3-015": "C", // was E
  "CHEM-BMS-GP3-016": "D", // was A
  "CHEM-BMS-GP3-017": "A", // was C
  "CHEM-BMS-GP3-018": "E", // was B
  "CHEM-BMS-GP3-019": "B", // was D
  "CHEM-BMS-GP3-020": "C", // was E
  "CHEM-BMS-GP3-021": "A", // was A
  "CHEM-BMS-GP3-022": "D", // was C
  "CHEM-BMS-GP3-023": "B", // was B
  "CHEM-BMS-GP3-024": "C", // was D
};

const chapterMapping: Record<string, string> = {
  "CHEM-BMS-GP3-001": "chem-01-atombau",
  "CHEM-BMS-GP3-002": "chem-01-atombau",
  "CHEM-BMS-GP3-003": "chem-02-strahlung",
  "CHEM-BMS-GP3-004": "chem-03-gase",
  "CHEM-BMS-GP3-005": "chem-03-gase",
  "CHEM-BMS-GP3-006": "chem-04-bindungen",
  "CHEM-BMS-GP3-007": "chem-04-bindungen",
  "CHEM-BMS-GP3-008": "chem-04-bindungen",
  "CHEM-BMS-GP3-009": "chem-05-stoechiometrie",
  "CHEM-BMS-GP3-010": "chem-05-stoechiometrie",
  "CHEM-BMS-GP3-011": "chem-05-stoechiometrie",
  "CHEM-BMS-GP3-012": "chem-06-gleichgewicht",
  "CHEM-BMS-GP3-013": "chem-06-gleichgewicht",
  "CHEM-BMS-GP3-014": "chem-07-elemente",
  "CHEM-BMS-GP3-015": "chem-07-elemente",
  "CHEM-BMS-GP3-016": "chem-08-saeuren-basen",
  "CHEM-BMS-GP3-017": "chem-08-saeuren-basen",
  "CHEM-BMS-GP3-018": "chem-08-saeuren-basen",
  "CHEM-BMS-GP3-019": "chem-09-redox",
  "CHEM-BMS-GP3-020": "chem-09-redox",
  "CHEM-BMS-GP3-021": "chem-10-organik",
  "CHEM-BMS-GP3-022": "chem-10-organik",
  "CHEM-BMS-GP3-023": "chem-11-naturstoffe",
  "CHEM-BMS-GP3-024": "chem-11-naturstoffe",
};

// Process each question
const updatedQuestions = RAW_GENERALPROBE_3_CHEM_QUESTIONS.map((original) => {
  const q = JSON.parse(JSON.stringify(original));
  const id = q.id;
  const oldKey = q.correct_answer as "A" | "B" | "C" | "D" | "E";
  const newKey = targetKeys[id];
  const chapterId = chapterMapping[id];

  // 1. Assign explicit chapter_id
  q.chapter_id = chapterId;

  // 2. Perform option transposition if oldKey !== newKey
  if (oldKey !== newKey) {
    const textOld = q.options[oldKey];
    const textNew = q.options[newKey];

    // Swap option contents
    q.options[newKey] = textOld;
    q.options[oldKey] = textNew;

    // Swap distractor explanation:
    // The distractor formerly at newKey moved to oldKey, so its explanation moves to oldKey
    const distractorExplAtNewKey = q.explanations_incorrect[newKey];
    delete q.explanations_incorrect[newKey];
    q.explanations_incorrect[oldKey] = distractorExplAtNewKey;

    q.correct_answer = newKey;
  }

  // 3. Specific content & scientific precision updates

  // Q001 — Bohr model & discrete energy levels vs QM orbitals
  if (id === "CHEM-BMS-GP3-001") {
    q.stem = "Welche Aussage beschreibt das Zustandekommen von Linienspektren beim Wasserstoffatom auf Basis diskreter Energieniveaus korrekt?";
    q.options[q.correct_answer] = "Elektromagnetische Strahlung einer diskreten Wellenlänge wird emittiert, wenn ein Elektron von einem diskreten höheren Energieniveau $n_2$ auf ein diskretes tieferes Niveau $n_1$ übergeht, wobei die Energie des emittierten Photons $\\Delta E = h \\cdot \\nu$ entspricht.";
    q.explanation_correct = "Bohr führte in seinem Atommodell diskrete, quantisierte Kreisbahnen und stationäre Energieniveaus mit den Hauptquantenzahlen $n = 1, 2, 3, \\dots$ ein, während die moderne Quantenmechanik Elektronen durch dreidimensionale Aufenthaltswahrscheinlichkeiten (Orbitale bzw. Wellenfunktionen $\\psi$) beschreibt. In beiden Modellen gilt jedoch übereinstimmend: Elektronen können nur bestimmte, diskrete Energieniveaus besetzen. Geht ein Elektron von einem angeregten Niveau ($n_2$) auf ein energetisch tieferes Niveau ($n_1$) über, wird die Energiedifferenz $\\Delta E = E(n_2) - E(n_1)$ als einzelnes Photon mit der diskreten Frequenz $\\nu$ emittiert ($E_{\\text{Photon}} = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}$). Dies erzeugt scharfe, diskrete Emissionslinien (Linienspektrum) anstelle eines kontinuierlichen Spektrums.";
  }

  // Q004 — Avogadro's law & ideal gas assumption
  if (id === "CHEM-BMS-GP3-004") {
    q.stem = "Zwei identische, starre Gasbehälter mit je $10\\,\\text{l}$ Volumen befinden sich bei gleichem Druck ($101{,}3\\,\\text{kPa}$) und gleicher Temperatur ($0\\,^\\circ\\text{C}$). Behälter 1 ist mit Helium ($\\text{He}$, $M = 4\\,\\text{g/mol}$) gefüllt, Behälter 2 mit Sauerstoffgas ($\\text{O}_2$, $M = 32\\,\\text{g/mol}$). Welche Aussage trifft unter der Annahme idealen Gasverhaltens nach dem Avogadroschen Gesetz exakt zu?";
    q.options[q.correct_answer] = "Werden beide Gase als ideale Gase modelliert, enthalten beide Behälter exakt die gleiche Anzahl an Gasteilchen (gleiche Stoffmenge $n$), jedoch ist die Masse des Gases in Behälter 2 achtmal so groß wie in Behälter 1.";
    q.explanation_correct = "Das Gesetz von Avogadro besagt, dass gleiche Volumina idealer Gase bei gleichem Druck und gleicher Temperatur exakt dieselbe Anzahl an Teilchen (dieselbe Stoffmenge $n$) enthalten. Bei $V = 10\\,\\text{l}$ unter Standardbedingungen ($T=0\\,^\\circ\\text{C}, p=101{,}3\\,\\text{kPa}$) beträgt die Stoffmenge bei idealem Verhalten $n = \\frac{V}{V_m} = \\frac{10\\,\\text{l}}{22{,}4\\,\\text{l/mol}} \\approx 0{,}446\\,\\text{mol}$. Da die molare Masse von $\\text{O}_2$ ($32\\,\\text{g/mol}$) achtmal so groß ist wie die von $\\text{He}$ ($4\\,\\text{g/mol}$), ist die Gasmasse in Behälter 2 ($m = n \\cdot M$) exakt achtmal so groß wie in Behälter 1 ($m_{\\text{O}_2} = 8 \\cdot m_{\\text{He}}$), woraus auch eine achtfach höhere Dichte resultiert.";
  }

  // Q012 — Equilibrium constant definition with stoichiometric coefficients
  if (id === "CHEM-BMS-GP3-012") {
    q.explanation_correct = "Die Temperatur ist der einzige Parameter, der den thermodynamischen Zahlenwert der Gleichgewichtskonstante $K$ verändert (van 't Hoffsche Reaktionsisobare: $\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{R \\cdot T^2}$). Für eine allgemeine reversible Gleichgewichtsreaktion $a\\,\\text{A} + b\\,\\text{B} \\rightleftharpoons c\\,\\text{C} + d\\,\\text{D}$ lautet das Massenwirkungsgesetz $K_c = \\frac{[\\text{C}]^c \\cdot [\\text{D}]^d}{[\\text{A}]^a \\cdot [\\text{B}]^b}$ mit den stöchiometrischen Koeffizienten als Exponenten (thermodynamisch streng über Aktivitäten definiert: $K = \\frac{a(\\text{C})^c \\cdot a(\\text{D})^d}{a(\\text{A})^a \\cdot a(\\text{B})^b}$). Nach dem Prinzip des kleinsten Zwanges (Le Chatelier) gilt: 1. Bei exothermen Reaktionen ($\\Delta H < 0$) wird Wärme freigesetzt; eine Temperaturerhöhung begünstigt die endotherme Rückreaktion, wodurch die Eduktkonzentrationen steigen und der Wert von $K$ sinkt. 2. Bei endothermen Reaktionen ($\\Delta H > 0$) wird Wärme aufgenommen; eine Temperaturerhöhung begünstigt die Vorwärtsreaktion, wodurch der Wert von $K$ ansteigt.";
  }

  // Q014 — Noble gases: low reactivity qualified circumstances
  if (id === "CHEM-BMS-GP3-014") {
    q.stem = "Warum liegen die Elemente der 8. Hauptgruppe (Edelgase: $\\text{He, Ne, Ar, Kr, Xe, Rn}$) unter Normalbedingungen als einatomige Gase vor und zeichnen sich durch eine allgemein sehr geringe chemische Reaktivität aus, sodass stabile chemische Verbindungen (vor allem der schwereren Edelgase wie Xenon) nur unter spezifischen Bedingungen mit stark elektronegativen Partnern wie Fluor oder Sauerstoff gebildet werden?";
    q.options[q.correct_answer] = "Weil sie eine vollständig besetzte Valenzschale (Elektronenoktett $s^2 p^6$, bei Helium Duplett $1s^2$) besitzen, was energetisch außergewöhnlich stabil ist und eine extrem hohe Ionisierungsenergie sowie eine vernachlässigbare Elektronenaffinität bedingt.";
    q.explanation_correct = "Edelgase besitzen im Grundzustand vollbesetzte äußere Elektronenschalen (Helium: Duplett $1s^2$; alle schwereren Edelgase: Valenzoktett $n s^2 n p^6$). Diese geschlossene Elektronenkonfiguration verleiht den Atomen eine außerordentlich hohe thermodynamische und kinetische Stabilität. Die Entfernung eines Elektrons erfordert sehr hohe Ionisierungsenergien (Helium: $2.372\\,\\text{kJ/mol}$, Xenon immerhin noch $1.170\\,\\text{kJ/mol}$), während die Elektronenaffinität $\\le 0$ ist (keine Neigung zur Aufnahme zusätzlicher Elektronen). Aus diesem Grund liegen Edelgase unter Standardbedingungen als einatomige Gase vor und wechselwirken nur über sehr schwache London-Dispersionskräfte. Während die leichten Edelgase (He, Ne, Ar) unter Normalbedingungen keine isolierbaren neutralen Verbindungen bilden, können die schwereren Edelgase mit geringerer Ionisierungsenergie (insbesondere Xenon, z. B. $\\text{XeF}_2, \\text{XeF}_4, \\text{XeO}_3$) bei gezielter Umsetzung mit hochgradig elektronegativen Elementen wie Fluor oder Sauerstoff thermodynamisch stabile Verbindungen eingehen.";
  }

  // Q015 — Haber-Bosch: iron catalyst vs oxide precursor
  if (id === "CHEM-BMS-GP3-015") {
    q.options[q.correct_answer] = "Die beiden Stickstoffatome sind über eine kovalente Dreifachbindung ($1\\,\\sigma + 2\\,\\pi$) mit einer enorm hohen Bindungsdissoziationsenergie (ca. $945\\,\\text{kJ/mol}$) verknüpft; im Haber-Bosch-Verfahren wird diese hohe Aktivierungsbarriere durch einen heterogenen Eisenkatalysator (gewonnen durch Reduktion von Eisenoxid-Vorstufen wie Magnetit), hohen Druck (ca. $150\\text{–}250\\,\\text{bar}$) und moderate Temperaturen ($400\\text{–}500\\,^\\circ\\text{C}$) überwunden.";
    q.explanation_correct = "Das $\\text{N}_2$-Molekül weist eine der stärksten kovalenten Dreifachbindungen auf ($:N \\equiv N:$, Dissoziationsenergie $945\\,\\text{kJ/mol}$). Im industriellen Haber-Bosch-Verfahren ($\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$, $\\Delta H = -92\\,\\text{kJ/mol}$) wird als Katalysatorvorstufe ein Gemisch aus Eisenoxiden (vor allem Magnetit $\\text{Fe}_3\\text{O}_4$) mit Struktur- und elektronischen Promotoren wie $\\text{Al}_2\\text{O}_3$ und $\\text{K}_2\\text{O}$ eingesetzt. Im Synthesereaktor wird dieses Oxid vor Beginn durch den Synthesegas-Wasserstoff zu porösem, metallischem $\\alpha$-Eisen reduziert. Erst dieses metallische Eisen stellt den eigentlichen aktiven Katalysator dar, an dessen Kristallflächen die dissoziative Chemisorption der $\\text{N}_2$-Moleküle bei $400\\text{–}500\\,^\\circ\\text{C}$ und $150\\text{–}250\\,\\text{bar}$ mit reduzierter Aktivierungsenergie abläuft.";
  }

  // Q021 — Chirality: single stereocenter in lactic acid
  if (id === "CHEM-BMS-GP3-021") {
    q.stem = "Welche strukturelle Eigenschaft begründet die optische Aktivität und Chiralität der 2-Hydroxypropansäure (Milchsäure), und wie verhalten sich ihre beiden reinen Enantiomere zueinander?";
    q.options[q.correct_answer] = "Milchsäure besitzt genau ein asymmetrisch substituiertes Kohlenstoffatom (Stereozentrum) mit vier verschiedenen Substituenten, wodurch das Molekül keine Spiegelebene aufweist und sich Bild und Spiegelbild nicht zur Deckung bringen lassen; die beiden reinen Enantiomere besitzen identische achirale physikalische Eigenschaften (wie Schmelzpunkt und Dichte), drehen jedoch linear polarisiertes Licht um denselben Betrag in entgegengesetzte Richtungen.";
    q.explanation_correct = "Ein Molekül ist chiral und optisch aktiv, wenn es keine Drehspiegelachse (insbesondere keine Spiegelebene $\\sigma$ und kein Inversionszentrum $i$) besitzt, sodass es nicht mit seinem Spiegelbild zur Deckung gebracht werden kann. Milchsäure ($\\text{CH}_3\\text{-C}^*\\text{H(OH)-COOH}$) trägt am zentralen $\\text{C}^*$-Atom vier verschiedene Substituenten ($-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, $-\\text{COOH}$). Moleküle mit genau einem solchen Stereozentrum sind stets chiral (im Gegensatz zu Verbindungen mit mehreren Stereozentren, die durch interne Spiegelebenen als achirale meso-Verbindungen vorliegen können). Die beiden Enantiomere ($R$- und $S$-Milchsäure) verhalten sich wie Bild und Spiegelbild. In achiraler Umgebung stimmen alle skalaren physikalischen Kennzahlen (Schmelzpunkt, Siedepunkt, Dichte, $pK_s$-Wert) exakt überein. In chiraler Umgebung (z. B. an Enzymen) sowie gegenüber linear polarisiertem Licht zeigen sie unterschiedliches Verhalten: Sie drehen die Schwingungsebene des polarisierten Lichts um denselben Winkelbetrag in entgegengesetzte Richtungen ($+$ bzw. $-$).";
  }

  // 4. Sanitize all string fields for LaTeX escaping issues (TAB from \t, etc.)
  const sanitize = (str: string): string => {
    return str
      .replace(/\t/g, "\\t") // in case literal tab was inside
      .replace(/\\text\{/g, "\\text{")
      .replace(/\btext\{/g, "\\text{"); // fix accidental text{
  };

  q.stem = sanitize(q.stem);
  (["A", "B", "C", "D", "E"] as const).forEach((l) => {
    q.options[l] = sanitize(q.options[l]);
  });
  q.explanation_correct = sanitize(q.explanation_correct);
  Object.keys(q.explanations_incorrect).forEach((k) => {
    q.explanations_incorrect[k] = sanitize(q.explanations_incorrect[k]);
  });

  // Ensure Q022 melting point and LaTeX are pristine
  if (id === "CHEM-BMS-GP3-022") {
    q.explanation_correct = "Benzol erfüllt die Hückel-Regel ($4n+2\\,\\pi$-Elektronen mit $n=1$, planar, zyklisch durchkonjugiert). Dieses delokalisierte Sextett verleiht dem Molekül eine außergewöhnliche thermodynamische Stabilität (Aromatisierungsenergie ca. $150\\,\\text{kJ/mol}$). Bei einer hypothetischen elektrophilen Addition von Brom würde das konjugierte System zerstört werden; es entstünde ein nicht-aromatisches Cyclohexadien-Derivat mit deutlich höherer Energie. Bei der elektrophilen aromatischen Substitution ($S_E\\text{Ar}$) greift ein starkes Elektrophil ($\\text{Br}^+$ via Lewis-Säure $\\text{FeBr}_3$) den Ring an und bildet das mesomeriestabilisierte Wheland-Intermediat (Arenium-Ion). Durch anschließende Deprotonierung (Abspaltung von $\\text{H}^+$) wird das voll aromatische Sextett sofort regeneriert.";
    if (q.explanations_incorrect.A) q.explanations_incorrect.A = "Benzol ist ein reiner Kohlenwasserstoff ($\\text{C}_6\\text{H}_6$) und enthält keinen Stickstoff.";
    if (q.explanations_incorrect.B) q.explanations_incorrect.B = "Wasserstoffatome werden nicht zerstört, sondern als Protonen ($\\text{H}^+$) abgespalten und bilden $\\text{HBr}$.";
    // Check whichever key holds distractor D text
    Object.keys(q.explanations_incorrect).forEach((k) => {
      if (q.explanations_incorrect[k].includes("Schmelzpunkt") || q.options[k].includes("Feststoff")) {
        q.explanations_incorrect[k] = "Benzol ist bei Raumtemperatur eine flüssige Substanz (Schmelzpunkt $5{,}5\\,^\\circ\\text{C}$, Siedepunkt $80\\,^\\circ\\text{C}$).";
      }
    });
  }

  // Ensure Q017, Q018, Q023 LaTeX are pristine
  if (id === "CHEM-BMS-GP3-017") {
    Object.keys(q.explanations_incorrect).forEach((k) => {
      q.explanations_incorrect[k] = q.explanations_incorrect[k]
        .replace(/Kochsalz \(\$ext\{NaCl\}\$\)/g, "Kochsalz ($\\text{NaCl}$)")
        .replace(/Ammoniak \(\$ext\{NH\}_3\$\)/g, "Ammoniak ($\\text{NH}_3$)");
    });
  }
  if (id === "CHEM-BMS-GP3-018") {
    Object.keys(q.explanations_incorrect).forEach((k) => {
      q.explanations_incorrect[k] = q.explanations_incorrect[k]
        .replace(/Sauren \(\$ext\{pH\} = 4\{,\}75\$\)/g, "Säuren ($\\text{pH} = 4{,}75$)");
    });
  }
  if (id === "CHEM-BMS-GP3-023") {
    (["A", "B", "C", "D", "E"] as const).forEach((l) => {
      q.options[l] = q.options[l]
        .replace(/\$ext\{C\}1\$/g, "$\\text{C}1$")
        .replace(/\$ext\{CH\}_2ext\{OH\}\$/g, "$\\text{CH}_2\\text{OH}$");
    });
  }

  return q;
});

// Format updated questions as TypeScript code
let fileContent = `/**
 * MedAT Chemie BMS — 24-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #3 (BMS Chemie-Testteil, exakt 24 Original-Aufgaben).
 * 
 * Fachlich und terminologisch präzise angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung:
 * - 6 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 12 Mittel (Intermediate) (50,0 %)
 * - 6 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel (ausgewogen und zyklusfrei):
 * - A: 5, B: 5, C: 5, D: 5, E: 4 (Gesamt: 24)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcChemGp3QuestionRaw {
  id: string;
  chapter_id: string;
  subject: string;
  section: string;
  primary_topic: string;
  subtopic: string;
  difficulty: "foundational" | "intermediate" | "advanced";
  stem: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correct_answer: "A" | "B" | "C" | "D" | "E";
  explanation_correct: string;
  explanations_incorrect: Record<string, string>;
  metadata: {
    author: string;
    status: string;
    version: string;
  };
}

export const RAW_GENERALPROBE_3_CHEM_QUESTIONS: QcChemGp3QuestionRaw[] = ${JSON.stringify(updatedQuestions, null, 2)};

function mapChapterId(primaryTopic: string, subtopic: string): string {
  switch (primaryTopic) {
    case "Atombau und Mikrokosmos":
      if (subtopic.toLowerCase().includes("zerfall") || subtopic.toLowerCase().includes("strahlung")) {
        return "chem-02-strahlung";
      }
      return "chem-01-atombau";
    case "Gasgesetze und Aggregatzustände":
      return "chem-03-gase";
    case "Periodensystem und chemische Bindungen":
      return "chem-04-bindungen";
    case "Stöchiometrie und chemische Reaktionen":
      return "chem-05-stoechiometrie";
    case "Chemisches Gleichgewicht und Kinetik":
      return "chem-06-gleichgewicht";
    case "Elemente und ihre Verbindungen":
      return "chem-07-elemente";
    case "Säuren, Basen und Salze":
      return "chem-08-saeuren-basen";
    case "Redox-Reaktionen und Elektrochemie":
      return "chem-09-redox";
    case "Organische Chemie":
      return "chem-10-organik";
    case "Biochemie und Naturstoffe":
      return "chem-11-naturstoffe";
    default:
      return "chem-01-atombau";
  }
}

function mapDifficulty(d: "foundational" | "intermediate" | "advanced"): "Leicht" | "Mittel" | "Schwer" {
  if (d === "foundational") return "Leicht";
  if (d === "advanced") return "Schwer";
  return "Mittel";
}

function optionKeyToIndex(k: "A" | "B" | "C" | "D" | "E"): number {
  switch (k) {
    case "A": return 0;
    case "B": return 1;
    case "C": return 2;
    case "D": return 3;
    case "E": return 4;
  }
}

function buildComprehensiveExplanation(correct: string, incorrect: Record<string, string>): string {
  const distractorKeys = Object.keys(incorrect).sort();
  if (distractorKeys.length === 0) return correct;

  const distractorRows = distractorKeys.map((k) => \`• **Option \${k}:** \${incorrect[k]}\`).join("\\n\\n");
  return \`\${correct}\\n\\n**Distraktor-Analyse & Begründung der Falschantworten:**\\n\\n\${distractorRows}\`;
}

/**
 * Normalisierte 24 StoredQuestion-Objekte für die MedAT-H Generalprobe #3 Runtime-Engine
 */
export const GENERALPROBE_3_CHEM_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_CHEM_QUESTIONS.map(
  (q, idx) => {
    const optionsArray: [string, string, string, string, string] = [
      q.options.A,
      q.options.B,
      q.options.C,
      q.options.D,
      q.options.E,
    ];

    const resolvedChapter = q.chapter_id || mapChapterId(q.primary_topic, q.subtopic);

    return {
      id: q.id,
      exam: "MEDAT-H",
      section: "BMS",
      subjectId: "chem",
      chapterId: resolvedChapter,
      topic: \`\${q.primary_topic} · \${q.subtopic}\`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Chemie", "Generalprobe #3", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "3.0_gp3",
      setOrder: idx + 1,
    };
  }
);
`;

const dest = path.resolve(process.cwd(), "src/data/generalprobe/generalprobe3ChemistryQuestions.ts");
fs.writeFileSync(dest, fileContent, "utf-8");
console.log(`Successfully updated ${dest}`);
