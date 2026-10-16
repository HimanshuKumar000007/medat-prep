import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 9
 * 10 Aufgaben · 10 Minuten · Physiologie, Pharmakologie & Neurologie
 * Schlüsselverteilung: A=2, B=2, C=2, D=2, E=2
 */
export const IE_SIMULATION_9_DATA: IeSimulationData = {
  simulationId: "ie-sim9",
  simNumber: 9,
  title: "Simulation 9 — Implikationen erkennen",
  subtitle:
    "10 Aufgaben in 10 Minuten · Physiologie, Pharmakologie & Scheinschluss-Meisterkurs",
  timeLimitSeconds: 10 * 60,
  questions: [
    // ── Q01 · Leicht · Modus Ferio (E-I-O, 1. Figur) ── correctAnswer: D
    {
      id: "ie-sim9-q01",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_ferio",
      premises: [
        "Kein Î²â‚-selektiver Blocker erhöht die Herzfrequenz.",
        "Einige Antihypertensiva sind Î²â‚-selektive Blocker.",
      ],
      options: {
        A: "Alle Antihypertensiva erhöhen die Herzfrequenz.",
        B: "Kein Antihypertensivum ist ein Î²â‚-selektiver Blocker.",
        C: "Alle herzfrequenzsteigernden Mittel sind Antihypertensiva.",
        D: "Einige Antihypertensiva erhöhen die Herzfrequenz nicht.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferio (E-I-O, 1. Figur): Mittelbegriff = Î²â‚-selektive Blocker. Obersatz: Kein Î²â‚-Blocker erhöht die Herzfrequenz (E). Untersatz: Einige Antihypertensiva sind Î²â‚-Blocker (I). Schluss: Einige Antihypertensiva erhöhen die Herzfrequenz nicht (O). A und C sind direkte Widersprüche zum Obersatz oder unbegründete Universalisierungen.",
    },
    // ── Q02 · Leicht · Modus Darii (A-I-I, 1. Figur) ── correctAnswer: C
    {
      id: "ie-sim9-q02",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Alle Neurotransmitter, die an ionotrope Rezeptoren binden, lösen schnelle synaptische Potenziale aus.",
        "Einige exzitatorische Aminosäuren binden an ionotrope Rezeptoren.",
      ],
      options: {
        A: "Alle exzitatorischen Aminosäuren lösen schnelle synaptische Potenziale aus.",
        B: "Kein ionotroper Rezeptor löst schnelle synaptische Potenziale aus.",
        C: "Einige exzitatorische Aminosäuren lösen schnelle synaptische Potenziale aus.",
        D: "Alle schnellen synaptischen Potenziale werden durch exzitatorische Aminosäuren ausgelöst.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Darii (A-I-I, 1. Figur): Obersatz: Alle Neurotransmitter an ionotropen Rezeptoren lösen schnelle Potenziale aus (A). Untersatz: Einige exzitatorische Aminosäuren binden an ionotrope Rezeptoren (I). Schluss: Einige exzitatorische Aminosäuren lösen schnelle Potenziale aus (I). A universalisiert unzulässig.",
    },
    // ── Q03 · Leicht · Modus Camestres (A-E-E, 2. Figur) ── correctAnswer: B
    {
      id: "ie-sim9-q03",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_camestres",
      premises: [
        "Alle Aminoglykoside hemmen die bakterielle Proteinsynthese.",
        "Kein Makrolid hemmt die bakterielle Proteinsynthese.",
      ],
      options: {
        A: "Alle Makrolide sind Aminoglykoside.",
        B: "Kein Makrolid ist ein Aminoglykosid.",
        C: "Einige Makrolide hemmen die bakterielle Proteinsynthese.",
        D: "Alle Hemmstoffe der bakteriellen Proteinsynthese sind Aminoglykoside.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Camestres (A-E-E, 2. Figur): Mittelbegriff = Hemmung der bakteriellen Proteinsynthese. Obersatz: Alle Aminoglykoside hemmen die bakterielle Proteinsynthese (A). Untersatz: Kein Makrolid hemmt die bakterielle Proteinsynthese (E). Schluss: Kein Makrolid ist ein Aminoglykosid (E). D ist die unzulässige Konverse des Obersatzes; C widerspricht dem Untersatz.",
    },
    // ── Q04 · Mittel · Modus Disamis (I-A-I, 3. Figur) ── correctAnswer: A
    {
      id: "ie-sim9-q04",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_disamis",
      premises: [
        "Einige Nozizeptoren adaptieren nicht an einen Dauerreiz.",
        "Alle Nozizeptoren sind sensorische Neuronen.",
      ],
      options: {
        A: "Einige sensorische Neuronen adaptieren nicht an einen Dauerreiz.",
        B: "Alle sensorischen Neuronen adaptieren nicht an einen Dauerreiz.",
        C: "Kein sensorisches Neuron adaptiert an einen Dauerreiz.",
        D: "Alle nicht-adaptierenden Neuronen sind Nozizeptoren.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Disamis (I-A-I, 3. Figur): Mittelbegriff = Nozizeptoren. Obersatz: Einige Nozizeptoren adaptieren nicht (I). Untersatz: Alle Nozizeptoren sind sensorische Neuronen (A). Schluss: Einige sensorische Neuronen adaptieren nicht (I). B und C verallgemeinern zu stark; D dreht die Beziehung unzulässig um.",
    },
    // ── Q05 · Mittel · Modus Bocardo (O-A-O, 3. Figur) ── correctAnswer: E
    {
      id: "ie-sim9-q05",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "no_valid_conclusion",
      premises: [
        "Einige Antiepileptika wirken über Natriumkanal-Blockade.",
        "Einige Natriumkanal-Blocker sind Lokalanästhetika.",
      ],
      options: {
        A: "Einige Antiepileptika sind Lokalanästhetika.",
        B: "Alle Antiepileptika sind Lokalanästhetika.",
        C: "Kein Antiepileptikum ist ein Lokalanästhetikum.",
        D: "Alle Lokalanästhetika sind Antiepileptika.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – zwei partikuläre Prämissen (I-I): Aus zwei I-Sätzen lässt sich gemäß den syllogistischen Grundregeln kein gültiger Schluss ziehen. Der Mittelbegriff 'Natriumkanal-Blocker' ist in keiner Prämisse distribuiert. A erscheint intuitiv plausibel, ist aber logisch nicht erzwingbar.",
    },
    // ── Q06 · Mittel · Modus Ferison (E-I-O, 3. Figur) ── correctAnswer: D
    {
      id: "ie-sim9-q06",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_ferison",
      premises: [
        "Kein humoraler Immunfaktor überquert die intakte Blut-Hirn-Schranke.",
        "Einige humorale Immunfaktoren sind proinflammatorische Zytokine.",
      ],
      options: {
        A: "Alle proinflammatorischen Zytokine überqueren die Blut-Hirn-Schranke.",
        B: "Kein Zytokin ist ein humoraler Immunfaktor.",
        C: "Alle Faktoren, die die Blut-Hirn-Schranke nicht überqueren, sind Zytokine.",
        D: "Einige proinflammatorische Zytokine überqueren die intakte Blut-Hirn-Schranke nicht.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferison (E-I-O, 3. Figur): Mittelbegriff = humorale Immunfaktoren. Obersatz: Kein humoraler Immunfaktor überquert die BHS (E). Untersatz: Einige humorale Immunfaktoren sind proinflammatorische Zytokine (I). Schluss: Einige proinflammatorische Zytokine überqueren die BHS nicht (O). A behauptet das Gegenteil; B negiert die Zugehörigkeit fälschlich.",
    },
    // ── Q07 · Mittel · Modus Cesare (E-A-E, 2. Figur) ── correctAnswer: C
    {
      id: "ie-sim9-q07",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_cesare",
      premises: [
        "Kein Depolarisationshemmer erhöht die Membranpermeabilität für Kâº.",
        "Alle Tetrodotoxin-analogen Substanzen sind Depolarisationshemmer.",
      ],
      options: {
        A: "Einige Tetrodotoxin-analoge Substanzen erhöhen die Membranpermeabilität für Kâº.",
        B: "Alle Membranpermeabilitätserhöher für Kâº sind Depolarisationshemmer.",
        C: "Keine Tetrodotoxin-analoge Substanz erhöht die Membranpermeabilität für Kâº.",
        D: "Kein Depolarisationshemmer ist eine Tetrodotoxin-analoge Substanz.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Cesare (E-A-E, 2. Figur): Mittelbegriff = Depolarisationshemmer. Obersatz: Kein Depolarisationshemmer erhöht die Kâº-Permeabilität (E). Untersatz: Alle TTX-analogen Substanzen sind Depolarisationshemmer (A). Schluss: Keine TTX-analoge Substanz erhöht die Kâº-Permeabilität (E). D dreht die Beziehung unzulässig um; B ist eine unerlaubte Konverse des Obersatzes.",
    },
    // ── Q08 · Schwer · Modus Datisi (A-I-I, 3. Figur) ── correctAnswer: B
    {
      id: "ie-sim9-q08",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_datisi",
      premises: [
        "Alle muskarinischen Rezeptoren sind metabotrope Rezeptoren.",
        "Einige muskarinische Rezeptoren befinden sich auf Herzmuskelzellen.",
      ],
      options: {
        A: "Alle Herzmuskelzellen tragen metabotrope Rezeptoren.",
        B: "Einige Herzmuskelzellen tragen metabotrope Rezeptoren.",
        C: "Kein metabotroper Rezeptor befindet sich auf Herzmuskelzellen.",
        D: "Alle metabotropen Rezeptoren sind muskarinisch.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Datisi (A-I-I, 3. Figur): Mittelbegriff = muskarinische Rezeptoren. Obersatz: Alle muskarinischen Rezeptoren sind metabotrop (A). Untersatz: Einige muskarinische Rezeptoren befinden sich auf Herzmuskelzellen (I). Schluss: Einige Herzmuskelzellen tragen metabotrope Rezeptoren (I). A universalisiert unzulässig; D dreht die Teilmengenbeziehung unzulässig um.",
    },
    // ── Q09 · Schwer · Modus Baroco (A-O-O, 2. Figur) ── correctAnswer: A
    {
      id: "ie-sim9-q09",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_baroco",
      premises: [
        "Alle neuroprotektiven Substanzen hemmen exzitotoxische Prozesse.",
        "Einige NMDA-Antagonisten hemmen keine exzitotoxischen Prozesse.",
      ],
      options: {
        A: "Einige NMDA-Antagonisten sind keine neuroprotektiven Substanzen.",
        B: "Alle NMDA-Antagonisten sind neuroprotektive Substanzen.",
        C: "Kein NMDA-Antagonist ist eine neuroprotektive Substanz.",
        D: "Einige neuroprotektive Substanzen hemmen keine exzitotoxischen Prozesse.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Baroco (A-O-O, 2. Figur): Mittelbegriff = exzitotoxische Prozesse hemmen. Obersatz: Alle neuroprotektiven Substanzen hemmen exzitotoxische Prozesse (A). Untersatz: Einige NMDA-Antagonisten hemmen KEINE exzitotoxischen Prozesse (O). Schluss: Einige NMDA-Antagonisten sind KEINE neuroprotektiven Substanzen (O). D widerspricht direkt dem Obersatz.",
    },
    // ── Q10 · Schwer · Fallacy: illicit minor (false converse) ── correctAnswer: E
    {
      id: "ie-sim9-q10",
      simulationId: "ie-sim9",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_converse",
      premises: [
        "Alle Cholinesterasehemmer erhöhen die Acetylcholinkonzentration im Synaptischen Spalt.",
        "Einige Alzheimer-Medikamente erhöhen die Acetylcholinkonzentration im Synaptischen Spalt.",
      ],
      options: {
        A: "Einige Alzheimer-Medikamente sind Cholinesterasehemmer.",
        B: "Alle Alzheimer-Medikamente sind Cholinesterasehemmer.",
        C: "Kein Alzheimer-Medikament ist ein Cholinesterasehemmer.",
        D: "Alle Cholinesterasehemmer sind Alzheimer-Medikamente.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – undistribuierter Mittelbegriff (2. Figur, A-I): Das gemeinsame Prädikat 'Acetylcholinkonzentration erhöhen' tritt in beiden Prämissen als Prädikat auf und ist damit nicht distribuiert. Aus A-I in der 2. Figur lässt sich kein gültiger Schluss ziehen. A klingt intuitiv plausibel, ist aber logisch nicht zwingend – die Acetylcholinerhöhung könnte durch andere Mechanismen erfolgen.",
    },
  ],
};
