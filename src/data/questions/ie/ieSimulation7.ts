import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 7
 * 10 Aufgaben · 10 Minuten · Hormone, Aminosäuren, Blutgerinnung
 * Schlüsselverteilung: A=2, B=2, C=2, D=2, E=2
 */
export const IE_SIMULATION_7_DATA: IeSimulationData = {
  simulationId: "ie-sim7",
  simNumber: 7,
  title: "Simulation 7 — Implikationen erkennen",
  subtitle:
    "10 Aufgaben in 10 Minuten · Darii, Disamis, Camestres & Scheinschlüsse",
  timeLimitSeconds: 10 * 60,
  questions: [
    // ── Q01 · Leicht · Modus Darii (A-I-I, 1. Figur) ── correctAnswer: C
    {
      id: "ie-sim7-q01",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Alle Steroidhormone werden in der Leber metabolisiert.",
        "Einige Sexualhormone sind Steroidhormone.",
      ],
      options: {
        A: "Alle in der Leber metabolisierten Substanzen sind Steroidhormone.",
        B: "Kein Sexualhormon wird in der Leber metabolisiert.",
        C: "Einige Sexualhormone werden in der Leber metabolisiert.",
        D: "Alle Sexualhormone werden in der Leber metabolisiert.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Darii (A-I-I, 1. Figur): Mittelbegriff = Steroidhormone. Obersatz: Alle Steroidhormone werden in der Leber metabolisiert (A). Untersatz: Einige Sexualhormone sind Steroidhormone (I). Schluss: Einige Sexualhormone werden in der Leber metabolisiert (I). D verallgemeinert unzulässig; A ist die unerlaubte Konverse des Obersatzes.",
    },
    // ── Q02 · Leicht · Modus Camestres (A-E-E, 2. Figur) ── correctAnswer: B
    {
      id: "ie-sim7-q02",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_camestres",
      premises: [
        "Alle essenziellen Aminosäuren müssen mit der Nahrung aufgenommen werden.",
        "Kein Glutamin muss mit der Nahrung aufgenommen werden.",
      ],
      options: {
        A: "Alle nicht-essenziellen Aminosäuren sind Glutamin.",
        B: "Glutamin ist keine essenzielle Aminosäure.",
        C: "Kein Glutamin ist eine Aminosäure.",
        D: "Einige essenzielle Aminosäuren müssen nicht mit der Nahrung aufgenommen werden.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Camestres (A-E-E, 2. Figur): Mittelbegriff = mit der Nahrung aufgenommen werden müssen. Obersatz: Alle essenziellen AS müssen mit Nahrung aufgenommen werden (A). Untersatz: Kein Glutamin muss mit Nahrung aufgenommen werden (E). Schluss: Glutamin ist keine essenzielle Aminosäure (E). D widerspricht dem Obersatz direkt.",
    },
    // ── Q03 · Leicht · Modus Ferio (E-I-O, 1. Figur) ── correctAnswer: D
    {
      id: "ie-sim7-q03",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_ferio",
      premises: [
        "Kein irreversibler Enzyminhibitor kann durch Substratüberschuss verdrängt werden.",
        "Einige Organophosphate sind irreversible Enzyminhibitoren.",
      ],
      options: {
        A: "Alle Organophosphate können durch Substratüberschuss verdrängt werden.",
        B: "Kein Organophosphat ist ein Enzyminhibitor.",
        C: "Alle durch Substratüberschuss verdrängbaren Inhibitoren sind Organophosphate.",
        D: "Einige Organophosphate können nicht durch Substratüberschuss verdrängt werden.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferio (E-I-O, 1. Figur): Mittelbegriff = irreversible Enzyminhibitoren. Obersatz: Kein irreversibler Inhibitor kann verdrängt werden (E). Untersatz: Einige Organophosphate sind irreversible Inhibitoren (I). Schluss: Einige Organophosphate können nicht verdrängt werden (O). A behauptet das Gegenteil; B verneint die Inhibitor-Eigenschaft unbegründet.",
    },
    // ── Q04 · Mittel · Modus Disamis (I-A-I, 3. Figur) ── correctAnswer: A
    {
      id: "ie-sim7-q04",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_disamis",
      premises: [
        "Einige Gerinnungsfaktoren werden in der Leber synthetisiert.",
        "Alle Gerinnungsfaktoren sind Glykoproteine.",
      ],
      options: {
        A: "Einige Glykoproteine werden in der Leber synthetisiert.",
        B: "Alle in der Leber synthetisierten Proteine sind Glykoproteine.",
        C: "Kein Glykoprotein wird in der Leber synthetisiert.",
        D: "Alle Gerinnungsfaktoren werden in der Leber synthetisiert.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Disamis (I-A-I, 3. Figur): Mittelbegriff = Gerinnungsfaktoren. Obersatz: Einige Gerinnungsfaktoren werden in der Leber synthetisiert (I). Untersatz: Alle Gerinnungsfaktoren sind Glykoproteine (A). Schluss: Einige Glykoproteine werden in der Leber synthetisiert (I). B verallgemeinert über alle Leberproteine hinaus; D übersteigt die Aussagekraft des I-Satzes.",
    },
    // ── Q05 · Mittel · Modus Cesare (E-A-E, 2. Figur) ── correctAnswer: E
    {
      id: "ie-sim7-q05",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "fallacy_converse",
      premises: [
        "Alle Neurotoxine blockieren die Signalübertragung.",
        "Einige Analgetika blockieren die Signalübertragung.",
      ],
      options: {
        A: "Einige Analgetika sind Neurotoxine.",
        B: "Alle Analgetika sind Neurotoxine.",
        C: "Kein Analgetikum ist ein Neurotoxin.",
        D: "Alle Neurotoxine sind Analgetika.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – undistribuierter Mittelbegriff (2. Figur): Beide Prämissen benutzen 'Signalübertragung blockieren' als Prädikat, aber der Mittelbegriff erscheint in keiner Prämisse als universell distribuiertes Subjekt. Aus A-I in der 2. Figur lässt sich kein gültiger Schluss ableiten. A erscheint plausibel, ist aber logisch nicht erzwingbar.",
    },
    // ── Q06 · Mittel · Modus Bocardo (O-A-O, 3. Figur) ── correctAnswer: B
    {
      id: "ie-sim7-q06",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_bocardo",
      premises: [
        "Einige Proteasen des Pankreas werden nicht im aktiven Zustand sezerniert.",
        "Alle Proteasen des Pankreas sind Verdauungsenzyme.",
      ],
      options: {
        A: "Alle Verdauungsenzyme werden im aktiven Zustand sezerniert.",
        B: "Einige Verdauungsenzyme werden nicht im aktiven Zustand sezerniert.",
        C: "Kein Verdauungsenzym wird im aktiven Zustand sezerniert.",
        D: "Alle im inaktiven Zustand sezernierten Enzyme sind Pankreasproteasen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Bocardo (O-A-O, 3. Figur): Mittelbegriff = Proteasen des Pankreas. Obersatz: Einige Pankreasproteasen werden nicht aktiv sezerniert (O). Untersatz: Alle Pankreasproteasen sind Verdauungsenzyme (A). Schluss: Einige Verdauungsenzyme werden nicht aktiv sezerniert (O). A und C sind durch die Prämissen nicht gedeckt.",
    },
    // ── Q07 · Mittel · Modus Baroco (A-O-O, 2. Figur) ── correctAnswer: C
    {
      id: "ie-sim7-q07",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_baroco",
      premises: [
        "Alle Vitamin-K-abhängigen Proteine benötigen Carboxylierung.",
        "Einige Hämostase-Proteine benötigen keine Carboxylierung.",
      ],
      options: {
        A: "Alle Hämostase-Proteine sind Vitamin-K-abhängig.",
        B: "Kein Hämostase-Protein ist Vitamin-K-abhängig.",
        C: "Einige Hämostase-Proteine sind nicht Vitamin-K-abhängig.",
        D: "Alle nicht carboxylierten Proteine sind Hämostase-Proteine.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Baroco (A-O-O, 2. Figur): Mittelbegriff = Carboxylierung benötigen. Obersatz: Alle Vitamin-K-abhängigen Proteine benötigen Carboxylierung (A). Untersatz: Einige Hämostase-Proteine benötigen KEINE Carboxylierung (O). Schluss: Einige Hämostase-Proteine sind NICHT Vitamin-K-abhängig (O). B verallgemeinert zu stark; A widerspricht dem Untersatz.",
    },
    // ── Q08 · Schwer · Modus Festino (E-I-O, 2. Figur) ── correctAnswer: D
    {
      id: "ie-sim7-q08",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_festino",
      premises: [
        "Kein Parasympathomimetikum erhöht die Herzfrequenz.",
        "Einige cholinerge Agonisten sind Parasympathomimetika.",
      ],
      options: {
        A: "Alle cholinergen Agonisten erhöhen die Herzfrequenz.",
        B: "Kein cholinerger Agonist erhöht die Herzfrequenz.",
        C: "Alle herzfrequenzsteigernden Mittel sind cholinerge Agonisten.",
        D: "Einige cholinerge Agonisten erhöhen die Herzfrequenz nicht.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Festino (E-I-O, 2. Figur): Mittelbegriff = Parasympathomimetika. Obersatz: Kein Parasympathomimetikum erhöht die Herzfrequenz (E). Untersatz: Einige cholinerge Agonisten sind Parasympathomimetika (I). Schluss: Einige cholinerge Agonisten erhöhen die Herzfrequenz nicht (O). B übersteigt den Schluss und negiert universell.",
    },
    // ── Q09 · Schwer · Modus Ferison (E-I-O, 3. Figur) ── correctAnswer: A
    {
      id: "ie-sim7-q09",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_ferison",
      premises: [
        "Kein Membran-Glykolipid ist ein Protein.",
        "Einige Membran-Glykolipide sind Bestandteile des Blutgruppensystems.",
      ],
      options: {
        A: "Einige Bestandteile des Blutgruppensystems sind keine Proteine.",
        B: "Alle Bestandteile des Blutgruppensystems sind Proteine.",
        C: "Kein Bestandteil des Blutgruppensystems ist ein Lipid.",
        D: "Einige Proteine sind Bestandteile des Blutgruppensystems.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Ferison (E-I-O, 3. Figur): Mittelbegriff = Membran-Glykolipide. Obersatz: Kein Membran-Glykolipid ist ein Protein (E). Untersatz: Einige Membran-Glykolipide sind Blutgruppenbestandteile (I). Schluss: Einige Blutgruppenbestandteile sind keine Proteine (O). B behauptet das Gegenteil; D widerspricht dem Obersatz.",
    },
    // ── Q10 · Schwer · Fallacy: two negative premises ── correctAnswer: E
    {
      id: "ie-sim7-q10",
      simulationId: "ie-sim7",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_negative_premises",
      premises: [
        "Kein Schilddrüsenhormon hemmt die Schilddrüse direkt.",
        "Kein TSH hemmt die Schilddrüse direkt.",
      ],
      options: {
        A: "Alle Substanzen, die die Schilddrüse hemmen, sind weder Schilddrüsenhormone noch TSH.",
        B: "Einige Schilddrüsenhormone sind TSH.",
        C: "Kein TSH ist ein Schilddrüsenhormon.",
        D: "Einige hemmenden Substanzen sind Schilddrüsenhormone.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – zwei negative Prämissen: Ein gültiger kategorischer Syllogismus darf nicht aus zwei negativen Prämissen bestehen (syllogistische Grundregel ex mere negativis nihil sequitur). Beide Prämissen sind E-Sätze; über die Beziehung zwischen Schilddrüsenhormonen und TSH lässt sich formal nichts schlussfolgern. Option E ist korrekt.",
    },
  ],
};
