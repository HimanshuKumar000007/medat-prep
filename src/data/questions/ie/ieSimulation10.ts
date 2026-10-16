import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 10
 * 10 Aufgaben · 10 Minuten · Apex-Kurs: Biochemie, Genetik & Pharmakologie
 * Schlüsselverteilung: A=2, B=2, C=2, D=2, E=2
 */
export const IE_SIMULATION_10_DATA: IeSimulationData = {
  simulationId: "ie-sim10",
  simNumber: 10,
  title: "Simulation 10 — Implikationen erkennen",
  subtitle:
    "10 Aufgaben in 10 Minuten · Apex-Simulation: alle Schlussformen & maximale Scheinschluss-Dichte",
  timeLimitSeconds: 10 * 60,
  questions: [
    // ── Q01 · Leicht · Modus Celarent (E-A-E) ── correctAnswer: C
    {
      id: "ie-sim10-q01",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Kein kovalentes Enzym-Substrat-Intermediat ist reversibel.",
        "Alle Serin-Proteasen bilden kovalente Enzym-Substrat-Intermediate.",
      ],
      options: {
        A: "Einige Serin-Proteasen bilden reversible Intermediate.",
        B: "Alle reversiblen Intermediate sind Serin-Proteasen.",
        C: "Kein Serin-Protease-Intermediat ist reversibel.",
        D: "Alle Serin-Proteasen sind irreversible Inhibitoren.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Celarent (E-A-E, 1. Figur): Mittelbegriff = kovalente Enzym-Substrat-Intermediate. Obersatz: Kein kovalentes Intermediat ist reversibel (E). Untersatz: Alle Serin-Proteasen bilden kovalente Intermediate (A). Schluss: Kein Serin-Protease-Intermediat ist reversibel (E). A widerspricht dem Schluss; D ist eine unbegründete Erweiterung auf Inhibitoren.",
    },
    // ── Q02 · Leicht · Modus Darii (A-I-I, 1. Figur) ── correctAnswer: A
    {
      id: "ie-sim10-q02",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Alle Transkriptionsfaktoren mit Zinkfinger-Domäne binden spezifische DNA-Sequenzen.",
        "Einige nukleäre Hormonrezeptoren besitzen Zinkfinger-Domänen.",
      ],
      options: {
        A: "Einige nukleäre Hormonrezeptoren binden spezifische DNA-Sequenzen.",
        B: "Alle nukleären Hormonrezeptoren binden spezifische DNA-Sequenzen.",
        C: "Alle spezifischen DNA-Sequenz-Binder sind nukleäre Hormonrezeptoren.",
        D: "Kein nukleärer Hormonrezeptor bindet spezifische DNA-Sequenzen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Darii (A-I-I, 1. Figur): Mittelbegriff = Transkriptionsfaktoren mit Zinkfinger-Domäne. Obersatz: Alle Zinkfinger-TF binden spezifische DNA (A). Untersatz: Einige nukleäre Hormonrezeptoren haben Zinkfinger (I). Schluss: Einige nukleäre Hormonrezeptoren binden spezifische DNA (I). B verallgemeinert unzulässig.",
    },
    // ── Q03 · Leicht · Modus Barbara (A-A-A) ── correctAnswer: B
    {
      id: "ie-sim10-q03",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle Aminoacyl-tRNA-Synthetasen koppeln Aminosäuren an ihre tRNAs.",
        "Alle Klasse-I-Aminoacyl-tRNA-Synthetasen sind Aminoacyl-tRNA-Synthetasen.",
      ],
      options: {
        A: "Alle Aminosäure-koppelnden Enzyme sind Klasse-I-Synthetasen.",
        B: "Alle Klasse-I-Aminoacyl-tRNA-Synthetasen koppeln Aminosäuren an ihre tRNAs.",
        C: "Kein Klasse-I-Enzym koppelt Aminosäuren an tRNAs.",
        D: "Einige Klasse-I-Synthetasen koppeln keine Aminosäuren an ihre tRNAs.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Barbara (A-A-A, 1. Figur): Klasse-I-Synthetasen âŠ† aaRS âŠ† Aminosäure-Koppler. Die Transitivität zweier universal-affirmativer Aussagen liefert: Alle Klasse-I-aaRS koppeln Aminosäuren an ihre tRNAs. A ist unzulässige Konverse; D widerspricht dem Schluss.",
    },
    // ── Q04 · Mittel · Modus Bocardo (O-A-O, 3. Figur) ── correctAnswer: D
    {
      id: "ie-sim10-q04",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_bocardo",
      premises: [
        "Einige Membranrezeptoren internalisieren nicht nach Ligandenbindung.",
        "Alle Membranrezeptoren sind integrale Membranproteine.",
      ],
      options: {
        A: "Alle integralen Membranproteine internalisieren nach Ligandenbindung.",
        B: "Kein integrales Membranprotein internalisiert nach Ligandenbindung.",
        C: "Alle nach Ligandenbindung internalisierenden Proteine sind Membranrezeptoren.",
        D: "Einige integrale Membranproteine internalisieren nicht nach Ligandenbindung.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Bocardo (O-A-O, 3. Figur): Mittelbegriff = Membranrezeptoren. Obersatz: Einige Membranrezeptoren internalisieren nach Bindung nicht (O). Untersatz: Alle Membranrezeptoren sind integrale Membranproteine (A). Schluss: Einige integrale Membranproteine internalisieren nach Bindung nicht (O). A und B sind durch die Prämissen nicht gedeckt.",
    },
    // ── Q05 · Mittel · Modus Festino (E-I-O, 2. Figur) ── correctAnswer: E
    {
      id: "ie-sim10-q05",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Kein Antikoagulans hemmt die Thrombozyten-Aggregation direkt.",
        "Einige Antikoagulanzien werden bei Vorhofflimmern eingesetzt.",
      ],
      options: {
        A: "Kein bei Vorhofflimmern eingesetztes Mittel hemmt die Thrombozyten-Aggregation direkt.",
        B: "Einige bei Vorhofflimmern eingesetzte Mittel hemmen die Thrombozyten-Aggregation direkt.",
        C: "Alle bei Vorhofflimmern eingesetzten Mittel sind Antikoagulanzien.",
        D: "Kein Thrombozyten-Aggregationshemmer ist ein Antikoagulans.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Antwortfalle – übersteigerte Universalisierung: Der formal gültige Modus Festino (E-I-O, 2. Figur) würde als Schluss einen O-Satz liefern: 'Einige bei Vorhofflimmern eingesetzte Mittel hemmen die Thrombozyten-Aggregation direkt nicht'. Keiner der Optionen A–D gibt diesen O-Satz exakt wieder – Option A ('Kein …') entspricht einem universellen E-Satz, der über den zulässigen partikulären Schluss hinausgeht. Da kein Antwortkandidat die logisch korrekte Schlussfolgerung formuliert, ist Option E richtig.",
    },
    // ── Q06 · Mittel · Modus Baroco (A-O-O, 2. Figur) ── correctAnswer: B
    {
      id: "ie-sim10-q06",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_baroco",
      premises: [
        "Alle Chaperon-Proteine verhindern die Fehlfaltung von Proteinen.",
        "Einige Heat-Shock-Proteine verhindern keine Fehlfaltung von Proteinen.",
      ],
      options: {
        A: "Alle Heat-Shock-Proteine sind Chaperon-Proteine.",
        B: "Einige Heat-Shock-Proteine sind keine Chaperon-Proteine.",
        C: "Kein Heat-Shock-Protein ist ein Chaperon-Protein.",
        D: "Alle Chaperon-Proteine sind Heat-Shock-Proteine.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Baroco (A-O-O, 2. Figur): Mittelbegriff = Fehlfaltung verhindern. Obersatz: Alle Chaperon-Proteine verhindern Fehlfaltung (A). Untersatz: Einige HSP verhindern KEINE Fehlfaltung (O). Schluss: Einige HSP sind KEINE Chaperon-Proteine (O). A widerspricht dem Untersatz durch Implikation; D dreht die Teilmengenbeziehung um.",
    },
    // ── Q07 · Mittel · Modus Datisi (A-I-I, 3. Figur) ── correctAnswer: C
    {
      id: "ie-sim10-q07",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_datisi",
      premises: [
        "Alle mitotischen Checkpoints verhindern fehlerhafte Chromosomentrennung.",
        "Einige mitotische Checkpoints werden durch den Spindel-Assemblierungs-Komplex aktiviert.",
      ],
      options: {
        A: "Alle durch den Spindel-Assemblierungs-Komplex aktivierten Mechanismen verhindern fehlerhafte Chromosomentrennung.",
        B: "Kein durch SAC aktivierter Mechanismus verhindert fehlerhafte Chromosomentrennung.",
        C: "Einige durch den Spindel-Assemblierungs-Komplex aktivierten Mechanismen verhindern fehlerhafte Chromosomentrennung.",
        D: "Alle fehlerhafte Chromosomentrennung verhindernden Mechanismen werden durch SAC aktiviert.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Datisi (A-I-I, 3. Figur): Mittelbegriff = mitotische Checkpoints. Obersatz: Alle mitotischen Checkpoints verhindern fehlerhafte Chromosomentrennung (A). Untersatz: Einige mitotische Checkpoints werden durch SAC aktiviert (I). Schluss: Einige SAC-aktivierte Mechanismen verhindern fehlerhafte Chromosomentrennung (I). A universalisiert unzulässig.",
    },
    // ── Q08 · Schwer · Modus Camestres (A-E-E, 2. Figur) ── correctAnswer: D
    {
      id: "ie-sim10-q08",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_camestres",
      premises: [
        "Alle kompetitiven Enzymhemmer erhöhen den apparenten Km-Wert.",
        "Kein unkompetitiver Enzymhemmer erhöht den apparenten Km-Wert.",
      ],
      options: {
        A: "Einige unkompetitive Hemmer erhöhen den apparenten Km-Wert.",
        B: "Alle Enzymhemmer erhöhen den apparenten Km-Wert.",
        C: "Alle Substanzen, die den Km-Wert erhöhen, sind unkompetitive Hemmer.",
        D: "Kein unkompetitiver Enzymhemmer ist ein kompetitiver Enzymhemmer.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Camestres (A-E-E, 2. Figur): Mittelbegriff = apparenten Km-Wert erhöhen. Obersatz: Alle kompetitiven Hemmer erhöhen Km (A). Untersatz: Kein unkompetitiver Hemmer erhöht Km (E). Schluss: Kein unkompetitiver Hemmer ist ein kompetitiver Hemmer (E). C ist die unzulässige Umkehrung des Obersatzes; A widerspricht dem Untersatz.",
    },
    // ── Q09 · Schwer · Modus Ferison (E-I-O, 3. Figur) ── correctAnswer: A
    {
      id: "ie-sim10-q09",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_ferison",
      premises: [
        "Kein Liganden-gesteuerter Ionenkanal benötigt Second-Messenger-Kaskaden.",
        "Einige Liganden-gesteuerte Ionenkanäle sind GABA-A-Rezeptoren.",
      ],
      options: {
        A: "Einige GABA-A-Rezeptoren benötigen keine Second-Messenger-Kaskaden.",
        B: "Alle GABA-A-Rezeptoren benötigen Second-Messenger-Kaskaden.",
        C: "Kein GABA-A-Rezeptor ist ein Ionenkanal.",
        D: "Alle Ionenkanäle ohne Second-Messenger sind GABA-A-Rezeptoren.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Ferison (E-I-O, 3. Figur): Mittelbegriff = Liganden-gesteuerte Ionenkanäle. Obersatz: Kein Liganden-gesteuerter Ionenkanal benötigt Second-Messenger (E). Untersatz: Einige Liganden-gesteuerte Ionenkanäle sind GABA-A-Rezeptoren (I). Schluss: Einige GABA-A-Rezeptoren benötigen keine Second-Messenger-Kaskaden (O). B behauptet das Gegenteil; D dreht unzulässig um.",
    },
    // ── Q10 · Schwer · Fallacy: illicit major distribution ── correctAnswer: E
    {
      id: "ie-sim10-q10",
      simulationId: "ie-sim10",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_illicit_process",
      premises: [
        "Alle Proteasom-Inhibitoren blockieren den Ubiquitin-Proteasom-Weg.",
        "Einige Antitumoragenzien blockieren den Ubiquitin-Proteasom-Weg.",
      ],
      options: {
        A: "Einige Antitumoragenzien sind Proteasom-Inhibitoren.",
        B: "Alle Antitumoragenzien sind Proteasom-Inhibitoren.",
        C: "Kein Antitumoragenz ist ein Proteasom-Inhibitor.",
        D: "Alle Proteasom-Inhibitoren sind Antitumoragenzien.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – undistribuierter Mittelbegriff (2. Figur, A-I): Beide Prämissen haben 'Ubiquitin-Proteasom-Weg blockieren' als Prädikat; der Mittelbegriff ist in keiner Prämisse distribuiert. Aus A-I in der 2. Figur folgt kein gültiger Schluss. A klingt intuitiv korrekt, ist aber formal nicht erzwingbar — es könnten andere Mechanismen die Blockade vermitteln.",
    },
  ],
};
