import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 8
 * 10 Aufgaben · 10 Minuten · Genetik, Zellzyklus & Immunologie
 * Schlüsselverteilung: A=2, B=2, C=2, D=2, E=2
 */
export const IE_SIMULATION_8_DATA: IeSimulationData = {
  simulationId: "ie-sim8",
  simNumber: 8,
  title: "Simulation 8 — Implikationen erkennen",
  subtitle:
    "10 Aufgaben in 10 Minuten · Genetik, Zellzyklus, Immunzellen & Scheinschluss-Training",
  timeLimitSeconds: 10 * 60,
  questions: [
    // ── Q01 · Leicht · Modus Barbara (A-A-A) ── correctAnswer: A
    {
      id: "ie-sim8-q01",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle proliferierenden Zellen durchlaufen den Zellzyklus.",
        "Alle Krebszellen sind proliferierende Zellen.",
      ],
      options: {
        A: "Alle Krebszellen durchlaufen den Zellzyklus.",
        B: "Alle Zellen, die den Zellzyklus durchlaufen, sind Krebszellen.",
        C: "Keine Krebszelle proliferiert.",
        D: "Einige Krebszellen durchlaufen den Zellzyklus nicht.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Barbara (A-A-A, 1. Figur): Krebszellen âŠ† proliferierende Zellen âŠ† Zellen, die den Zellzyklus durchlaufen. Die Transitivität universal-affirmativer Aussagen liefert: Alle Krebszellen durchlaufen den Zellzyklus. B ist die unzulässige Umkehrung des Obersatzes.",
    },
    // ── Q02 · Leicht · Modus Celarent (E-A-E) ── correctAnswer: B
    {
      id: "ie-sim8-q02",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Kein haploider Organismus hat gepaarte Chromosomen.",
        "Alle Pollen sind haploid.",
      ],
      options: {
        A: "Alle Organismen ohne gepaarte Chromosomen sind Pollen.",
        B: "Kein Pollen hat gepaarte Chromosomen.",
        C: "Einige Pollen haben gepaarte Chromosomen.",
        D: "Alle Pollen sind diploide Organismen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Celarent (E-A-E, 1. Figur): Mittelbegriff = haploide Organismen. Obersatz: Kein haploider Organismus hat gepaarte Chromosomen (E). Untersatz: Alle Pollen sind haploid (A). Schluss: Kein Pollen hat gepaarte Chromosomen (E). A ist unzulässige Konverse; C und D widersprechen dem Schluss.",
    },
    // ── Q03 · Leicht · Modus Darii (A-I-I) ── correctAnswer: C
    {
      id: "ie-sim8-q03",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Alle MHC-Klasse-II-Moleküle präsentieren Peptide an CD4âº-T-Zellen.",
        "Einige dendritische Zellen exprimieren MHC-Klasse-II-Moleküle.",
      ],
      options: {
        A: "Alle dendritischen Zellen präsentieren Peptide an CD4âº-T-Zellen.",
        B: "Kein MHC-Klasse-II-Molekül ist auf dendritischen Zellen.",
        C: "Einige dendritische Zellen präsentieren Peptide an CD4âº-T-Zellen.",
        D: "Alle CD4âº-T-Zellen werden ausschließlich von dendritischen Zellen aktiviert.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Darii (A-I-I, 1. Figur): Obersatz: Alle MHC-II-Moleküle präsentieren Peptide an CD4âº-T-Zellen (A). Untersatz: Einige dendritische Zellen exprimieren MHC-II (I). Schluss: Einige dendritische Zellen präsentieren Peptide an CD4âº-T-Zellen (I). A verallgemeinert unzulässig.",
    },
    // ── Q04 · Mittel · Modus Datisi (A-I-I, 3. Figur) ── correctAnswer: D
    {
      id: "ie-sim8-q04",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_datisi",
      premises: [
        "Alle Onkogene fördern unkontrolliertes Zellwachstum.",
        "Einige Onkogene sind mutierte Protoonkogene.",
      ],
      options: {
        A: "Alle mutierten Protoonkogene fördern unkontrolliertes Zellwachstum.",
        B: "Kein mutiertes Protoonkogen fördert unkontrolliertes Zellwachstum.",
        C: "Alle Förderer unkontrollierten Zellwachstums sind Onkogene.",
        D: "Einige mutierte Protoonkogene fördern unkontrolliertes Zellwachstum.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Datisi (A-I-I, 3. Figur): Mittelbegriff = Onkogene. Obersatz: Alle Onkogene fördern unkontrolliertes Wachstum (A). Untersatz: Einige Onkogene sind mutierte Protoonkogene (I). Schluss: Einige mutierte Protoonkogene fördern unkontrolliertes Wachstum (I). A verallgemeinert über alle mutierten Protoonkogene – der I-Satz lässt das nicht zu.",
    },
    // ── Q05 · Mittel · Modus Camestres (A-E-E, 2. Figur) ── correctAnswer: E
    {
      id: "ie-sim8-q05",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Alle natürlichen Killerzellen töten virusinfizierte Zellen.",
        "Einige zytotoxische T-Zellen töten virusinfizierte Zellen.",
      ],
      options: {
        A: "Alle zytotoxischen T-Zellen sind natürliche Killerzellen.",
        B: "Einige natürliche Killerzellen sind zytotoxische T-Zellen.",
        C: "Kein zytotoxisches T-Zell ist eine natürliche Killerzelle.",
        D: "Alle virusinfizierten Zellen werden nur von NK-Zellen getötet.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – undistribuierter Mittelbegriff: Beide Prämissen verwenden 'virusinfizierte Zellen töten' als gemeinsames Prädikat, aber der Mittelbegriff ist in keiner Prämisse universell distribuiert (A im Prädikat, I-Satz). Aus A-I in der 2. Figur folgt nichts. Die scheinbar intuitive Schlussfolgerung A ist logisch nicht erzwingbar.",
    },
    // ── Q06 · Mittel · Modus Bocardo (O-A-O, 3. Figur) ── correctAnswer: A
    {
      id: "ie-sim8-q06",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_bocardo",
      premises: [
        "Einige DNA-Reparaturmechanismen erkennen keine Basenfehlpaarungen.",
        "Alle DNA-Reparaturmechanismen sind zelluläre Schutzsysteme.",
      ],
      options: {
        A: "Einige zelluläre Schutzsysteme erkennen keine Basenfehlpaarungen.",
        B: "Alle zellulären Schutzsysteme erkennen Basenfehlpaarungen.",
        C: "Kein zelluläres Schutzsystem erkennt Basenfehlpaarungen.",
        D: "Alle Basenfehlpaarungs-Erkennungssysteme sind zelluläre Schutzsysteme.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Bocardo (O-A-O, 3. Figur): Mittelbegriff = DNA-Reparaturmechanismen. Obersatz: Einige DNA-Reparaturmechanismen erkennen keine Basenfehlpaarungen (O). Untersatz: Alle DNA-Reparaturmechanismen sind zelluläre Schutzsysteme (A). Schluss: Einige zelluläre Schutzsysteme erkennen keine Basenfehlpaarungen (O). B und C sind durch die Prämissen nicht gedeckt.",
    },
    // ── Q07 · Mittel · Modus Cesare (E-A-E, 2. Figur) ── correctAnswer: B
    {
      id: "ie-sim8-q07",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_cesare",
      premises: [
        "Kein apoptotischer Prozess erhält die Zellmembranintegrität.",
        "Alle Caspase-3-abhängigen Prozesse sind apoptotische Prozesse.",
      ],
      options: {
        A: "Einige Caspase-3-abhängige Prozesse erhalten die Zellmembranintegrität.",
        B: "Kein Caspase-3-abhängiger Prozess erhält die Zellmembranintegrität.",
        C: "Alle Zellmembran-erhaltenden Prozesse sind Caspase-3-abhängig.",
        D: "Kein apoptotischer Prozess ist Caspase-3-abhängig.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Cesare (E-A-E, 2. Figur): Mittelbegriff = apoptotische Prozesse. Obersatz: Kein apoptotischer Prozess erhält die Zellmembranintegrität (E). Untersatz: Alle Caspase-3-abhängigen Prozesse sind apoptotisch (A). Schluss: Kein Caspase-3-abhängiger Prozess erhält die Zellmembranintegrität (E). A widerspricht dem Schluss; D widerspricht dem Untersatz.",
    },
    // ── Q08 · Schwer · Modus Baroco (A-O-O, 2. Figur) ── correctAnswer: C
    {
      id: "ie-sim8-q08",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_baroco",
      premises: [
        "Alle rekombinanten Proteine werden in Expressionssystemen produziert.",
        "Einige monoklonale Antikörper werden nicht in Expressionssystemen produziert.",
      ],
      options: {
        A: "Alle monoklonalen Antikörper sind rekombinante Proteine.",
        B: "Kein monoklonaler Antikörper ist ein rekombinantes Protein.",
        C: "Einige monoklonale Antikörper sind keine rekombinanten Proteine.",
        D: "Einige rekombinante Proteine werden nicht in Expressionssystemen produziert.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Baroco (A-O-O, 2. Figur): Mittelbegriff = in Expressionssystemen produziert. Obersatz: Alle rekombinanten Proteine werden in Expressionssystemen produziert (A). Untersatz: Einige monoklonale Antikörper werden NICHT in Expressionssystemen produziert (O). Schluss: Einige monoklonale Antikörper sind KEINE rekombinanten Proteine (O). D widerspricht direkt dem Obersatz.",
    },
    // ── Q09 · Schwer · Modus Ferison (E-I-O, 3. Figur) ── correctAnswer: D
    {
      id: "ie-sim8-q09",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_ferison",
      premises: [
        "Kein dominant-negativer Effekt verstärkt die Wildtyp-Proteinfunktion.",
        "Einige dominant-negative Effekte treten bei Tumorsuppressormutationen auf.",
      ],
      options: {
        A: "Alle bei Tumorsuppressormutationen auftretenden Effekte verstärken die Wildtyp-Proteinfunktion.",
        B: "Kein Tumorsuppressor hat dominant-negative Mutationen.",
        C: "Alle Verstärker der Wildtyp-Proteinfunktion sind Tumorsuppressormutationen.",
        D: "Einige bei Tumorsuppressormutationen auftretende Effekte verstärken die Wildtyp-Proteinfunktion nicht.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferison (E-I-O, 3. Figur): Mittelbegriff = dominant-negative Effekte. Obersatz: Kein dominant-negativer Effekt verstärkt die Wildtyp-Funktion (E). Untersatz: Einige dominant-negative Effekte treten bei Tumorsuppressormutationen auf (I). Schluss: Einige Effekte bei Tumorsuppressormutationen verstärken die Wildtyp-Funktion nicht (O). A behauptet das genaue Gegenteil.",
    },
    // ── Q10 · Schwer · Fallacy: two particular premises (I+I) ── correctAnswer: E
    {
      id: "ie-sim8-q10",
      simulationId: "ie-sim8",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "no_valid_conclusion",
      premises: [
        "Einige Tumorsuppressor-Mutationen führen zu dominant-negativen Effekten.",
        "Einige dominant-negative Effekte verhindern die Apoptose.",
      ],
      options: {
        A: "Einige Tumorsuppressor-Mutationen verhindern die Apoptose.",
        B: "Alle Tumorsuppressor-Mutationen verhindern die Apoptose.",
        C: "Kein dominant-negativer Effekt verhindert die Apoptose.",
        D: "Alle Apoptose-verhindernden Faktoren sind Tumorsuppressor-Mutationen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss – zwei partikuläre Prämissen (I+I): Aus zwei I-Sätzen lässt sich gemäß den syllogistischen Grundregeln kein gültiger Schluss ziehen. Der Mittelbegriff 'dominant-negative Effekte' ist in keiner Prämisse universell distribuiert — beide Prämissen sind partikular (Einige). A erscheint biologisch plausibel, ist aber formal nicht erzwingbar. Option E ist korrekt.",
    },
  ],
};
