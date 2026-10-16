import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 6
 * 10 Aufgaben · 10 Minuten · Neue syllogistische Formen & biomedizinische Kontexte
 * Schlüsselverteilung: A=2, B=2, C=2, D=2, E=2
 */
export const IE_SIMULATION_6_DATA: IeSimulationData = {
  simulationId: "ie-sim6",
  simNumber: 6,
  title: "Simulation 6 — Implikationen erkennen",
  subtitle:
    "10 Aufgaben in 10 Minuten · Ferison, Bocardo, Datisi & Quantoren-Filtertraining",
  timeLimitSeconds: 10 * 60,
  questions: [
    // ── Q01 · Leicht · Modus Ferison (E-I-O, 3. Figur) ── correctAnswer: D
    {
      id: "ie-sim6-q01",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_ferison",
      premises: [
        "Kein Erythrozyt besitzt einen Zellkern.",
        "Einige kernlose Zellen sind Thrombozyten.",
      ],
      options: {
        A: "Alle Thrombozyten sind Erythrozyten.",
        B: "Kein Thrombozyt besitzt einen Zellkern.",
        C: "Alle Erythrozyten sind Thrombozyten.",
        D: "Einige Thrombozyten sind keine Erythrozyten.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferison (E-I-O, 3. Figur): Mittelbegriff = kernlose Zellen. Prämisse 1: Kein Erythrozyt ist kernlos (= E-Satz). Prämisse 2: Einige kernlose Zellen sind Thrombozyten (= I-Satz). Schluss: Einige Thrombozyten sind keine Erythrozyten (O-Satz). A, C sind unzulässige Konversen; B verallgemeinert unbegründet.",
    },
    // ── Q02 · Leicht · Modus Barbara (A-A-A) ── correctAnswer: B
    {
      id: "ie-sim6-q02",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle Glukokortikoide hemmen die Prostaglandinsynthese.",
        "Cortisol ist ein Glukokortikoid.",
      ],
      options: {
        A: "Alle Hemmstoffe der Prostaglandinsynthese sind Glukokortikoide.",
        B: "Cortisol hemmt die Prostaglandinsynthese.",
        C: "Einige Glukokortikoide hemmen die Prostaglandinsynthese nicht.",
        D: "Cortisol ist kein Glukokortikoid.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Barbara (A-A-A, 1. Figur): Cortisol âˆˆ Glukokortikoide âŠ† Hemmstoffe der Prostaglandinsynthese. Die Transitivität zweier universal-affirmativer Aussagen liefert zwingend: Cortisol hemmt die Prostaglandinsynthese. A ist die unzulässige Umkehrung des Obersatzes.",
    },
    // ── Q03 · Leicht · Modus Celarent (E-A-E) ── correctAnswer: A
    {
      id: "ie-sim6-q03",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Kein gesättigtes Lipid enthält Doppelbindungen.",
        "Alle Triglyceride mit ausschließlich gesättigten Fettsäuren sind gesättigte Lipide.",
      ],
      options: {
        A: "Kein Triglycerid mit ausschließlich gesättigten Fettsäuren enthält Doppelbindungen.",
        B: "Alle Lipide ohne Doppelbindungen sind Triglyceride.",
        C: "Einige Triglyceride enthalten Doppelbindungen.",
        D: "Kein Lipid enthält Doppelbindungen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Celarent (E-A-E, 1. Figur): Mittelbegriff = gesättigte Lipide. Obersatz: Kein gesättigtes Lipid enthält Doppelbindungen (E). Untersatz: Alle Triglyceride mit gesättigten FS sind gesättigte Lipide (A). Schluss: Kein Triglycerid mit gesättigten FS enthält Doppelbindungen (E). B ist eine unzulässige Umkehrung; D verallgemeinert auf alle Lipide.",
    },
    // ── Q04 · Mittel · Modus Camestres (A-E-E, 2. Figur) ── correctAnswer: E
    {
      id: "ie-sim6-q04",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Alle Mineralokortikoid-Rezeptoren binden Aldosteron.",
        "Einige Nierenkanal-Proteine binden Aldosteron.",
      ],
      options: {
        A: "Alle Nierenkanal-Proteine sind Mineralokortikoid-Rezeptoren.",
        B: "Kein Nierenkanal-Protein ist ein Mineralokortikoid-Rezeptor.",
        C: "Einige Mineralokortikoid-Rezeptoren sind Nierenkanal-Proteine.",
        D: "Alle Aldosteron-bindenden Moleküle sind Mineralokortikoid-Rezeptoren.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – undistribuierter Mittelbegriff: Beide Prämissen beziehen sich auf 'Aldosteron binden', aber der Mittelbegriff 'Aldosteron-bindende Strukturen' ist in keiner Prämisse universell distribuiert. Aus 'Alle M-R binden Aldosteron' und 'Einige NK-Proteine binden Aldosteron' folgt logisch nichts über die Beziehung zwischen M-R und NK-Proteinen. Option E ist korrekt.",
    },
    // ── Q05 · Mittel · Modus Datisi (A-I-I, 3. Figur) ── correctAnswer: C
    {
      id: "ie-sim6-q05",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "modus_datisi",
      premises: [
        "Alle purinergen Rezeptoren werden durch Adenosin aktiviert.",
        "Einige purinerge Rezeptoren sind G-Protein-gekoppelt.",
      ],
      options: {
        A: "Alle G-Protein-gekoppelten Rezeptoren werden durch Adenosin aktiviert.",
        B: "Kein G-Protein-gekoppelter Rezeptor wird durch Adenosin aktiviert.",
        C: "Einige G-Protein-gekoppelte Rezeptoren werden durch Adenosin aktiviert.",
        D: "Alle durch Adenosin aktivierten Rezeptoren sind G-Protein-gekoppelt.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Datisi (A-I-I, 3. Figur): Mittelbegriff = purinerge Rezeptoren. Obersatz: Alle purinergen Rezeptoren werden durch Adenosin aktiviert (A). Untersatz: Einige purinerge Rezeptoren sind G-Protein-gekoppelt (I). Schluss: Einige G-Protein-gekoppelte Rezeptoren werden durch Adenosin aktiviert (I). A und D sind unzulässige Universalisierungen.",
    },
    // ── Q06 · Mittel · Modus Bocardo (O-A-O, 3. Figur) ── correctAnswer: A
    {
      id: "ie-sim6-q06",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_bocardo",
      premises: [
        "Einige Enzyme des Zitratzyklus werden nicht durch Succinat gehemmt.",
        "Alle Enzyme des Zitratzyklus sind mitochondriale Proteine.",
      ],
      options: {
        A: "Einige mitochondriale Proteine werden nicht durch Succinat gehemmt.",
        B: "Alle mitochondrialen Proteine werden durch Succinat gehemmt.",
        C: "Kein mitochondriales Protein wird durch Succinat gehemmt.",
        D: "Alle durch Succinat gehemmten Proteine sind mitochondrial.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Bocardo (O-A-O, 3. Figur): Mittelbegriff = Enzyme des Zitratzyklus. Obersatz: Einige Zitratzyklus-Enzyme werden nicht durch Succinat gehemmt (O). Untersatz: Alle Zitratzyklus-Enzyme sind mitochondriale Proteine (A). Schluss: Einige mitochondriale Proteine werden nicht durch Succinat gehemmt (O). B und C sind falsche Universalisierungen.",
    },
    // ── Q07 · Mittel · Modus Festino (E-I-O, 2. Figur) ── correctAnswer: D
    {
      id: "ie-sim6-q07",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_festino",
      premises: [
        "Kein Carotinoide ist ein wasserlösliches Vitamin.",
        "Einige antioxidative Mikronährstoffe sind wasserlösliche Vitamine.",
      ],
      options: {
        A: "Alle antioxidativen Mikronährstoffe sind Carotinoide.",
        B: "Kein antioxidativer Mikronährstoff ist ein Carotinoid.",
        C: "Einige wasserlösliche Vitamine sind Carotinoide.",
        D: "Einige antioxidative Mikronährstoffe sind keine Carotinoide.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Festino (E-I-O, 2. Figur): Mittelbegriff = wasserlösliche Vitamine. Obersatz: Kein Carotinoid ist ein wasserlösliches Vitamin (E). Untersatz: Einige antioxidative Mikronährstoffe sind wasserlösliche Vitamine (I). Schluss: Einige antioxidative Mikronährstoffe sind keine Carotinoide (O). B verallgemeinert unzulässig; C konvertiert den E-Satz falsch.",
    },
    // ── Q08 · Schwer · Modus Baroco (A-O-O, 2. Figur) ── correctAnswer: B
    {
      id: "ie-sim6-q08",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_baroco",
      premises: [
        "Alle transmembranen Ionenkanäle werden durch Spannungsänderungen reguliert.",
        "Einige Membranproteine der Synapse werden nicht durch Spannungsänderungen reguliert.",
      ],
      options: {
        A: "Alle Membranproteine der Synapse sind transmembrane Ionenkanäle.",
        B: "Einige Membranproteine der Synapse sind keine transmembranen Ionenkanäle.",
        C: "Kein transmembraner Ionenkanal ist ein synaptisches Membranprotein.",
        D: "Einige transmembrane Ionenkanäle werden nicht durch Spannungsänderungen reguliert.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Baroco (A-O-O, 2. Figur): Mittelbegriff = durch Spannungsänderungen reguliert. Obersatz: Alle transmembranen Ionenkanäle werden durch Spannung reguliert (A). Untersatz: Einige synaptische Membranproteine werden NICHT durch Spannung reguliert (O). Schluss: Einige synaptische Membranproteine sind KEINE transmembranen Ionenkanäle (O). D widerspricht dem Obersatz direkt.",
    },
    // ── Q09 · Schwer · Modus Cesare (E-A-E, 2. Figur) ── correctAnswer: C
    {
      id: "ie-sim6-q09",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_cesare",
      premises: [
        "Kein anaerober Stoffwechselweg produziert direkt COâ‚‚.",
        "Alle Reaktionen der Glykolyse sind anaerobe Stoffwechselwege.",
      ],
      options: {
        A: "Einige Reaktionen der Glykolyse produzieren COâ‚‚.",
        B: "Alle COâ‚‚-produzierenden Wege sind aerob.",
        C: "Keine Reaktion der Glykolyse produziert direkt COâ‚‚.",
        D: "Kein aerober Stoffwechselweg produziert COâ‚‚.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Cesare (E-A-E, 2. Figur): Mittelbegriff = anaerobe Stoffwechselwege. Obersatz: Kein anaerober Weg produziert COâ‚‚ (E). Untersatz: Alle Glykolyse-Reaktionen sind anaerob (A). Schluss: Keine Glykolyse-Reaktion produziert direkt COâ‚‚ (E). B ist eine unzulässige Kontrapositions-Verallgemeinerung; D betrifft aerobe Wege und ist durch die Prämissen nicht gestützt.",
    },
    // ── Q10 · Schwer · Fallacy: illicit negative + undistributed ── correctAnswer: E
    {
      id: "ie-sim6-q10",
      simulationId: "ie-sim6",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_illicit_process",
      premises: [
        "Einige Neurotransmitter sind keine biogenen Amine.",
        "Einige biogene Amine sind vasoaktiv.",
      ],
      options: {
        A: "Einige Neurotransmitter sind vasoaktiv.",
        B: "Kein Neurotransmitter ist vasoaktiv.",
        C: "Alle vasoaktiven Substanzen sind biogene Amine.",
        D: "Einige vasoaktiven Substanzen sind Neurotransmitter.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – zwei partikuläre Prämissen: Aus zwei I- oder O-Sätzen lässt sich kein gültiger Schluss ziehen (syllogistische Grundregel). Zudem handelt es sich um zwei O- bzw. I-Sätze ohne gemeinsamen distribuierten Mittelbegriff. A und D erscheinen plausibel, sind aber logisch nicht erzwingbar. Option E ist korrekt.",
    },
  ],
};
