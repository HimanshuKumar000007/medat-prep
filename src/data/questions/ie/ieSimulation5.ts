import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 5
 * 10 Aufgaben · 10 Minuten · Apex-Simulation (Meisterstufe & komplexe Quantoren)
 */
export const IE_SIMULATION_5_DATA: IeSimulationData = {
  simulationId: "ie-sim5",
  simNumber: 5,
  title: "Simulation 5 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Apex-Syllogistik, Partikularschlüsse & Scheinschluss-Filter",
  timeLimitSeconds: 10 * 60,
  questions: [
    {
      id: "ie-sim5-q01",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle Myozyten besitzen Aktin- und Myosinfilamente.",
        "Alle Zellen mit Aktin- und Myosinfilamenten können kontrahieren.",
      ],
      options: {
        A: "Alle Zellen, die kontrahieren können, sind Myozyten.",
        B: "Keine Myozyten können kontrahieren.",
        C: "Alle Myozyten können kontrahieren.",
        D: "Einige Myozyten können nicht kontrahieren.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Barbara (A-A-A, 1. Figur): Myozyten ⊆ Zellen mit Filamenten ⊆ kontraktionsfähige Zellen. Die Transitivität universal-affirmativer Aussagen ist zwingend: Alle Myozyten können kontrahieren.",
    },
    {
      id: "ie-sim5-q02",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Kein Neutrophiler ist ein Lymphozyt.",
        "Alle Stabkernigen sind Neutrophile.",
      ],
      options: {
        A: "Alle Stabkernigen sind Lymphozyten.",
        B: "Einige Stabkernige sind Lymphozyten.",
        C: "Alle Nicht-Lymphozyten sind Stabkernige.",
        D: "Kein Stabkerniger ist ein Lymphozyt.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Celarent (E-A-E, 1. Figur): Neutrophile und Lymphozyten bilden disjunkte Mengen. Da alle Stabkernigen eine Teilmenge der Neutrophilen sind, müssen sie ebenfalls disjunkt zu Lymphozyten sein: Kein Stabkerniger ist ein Lymphozyt.",
    },
    {
      id: "ie-sim5-q03",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Alle Aminosäuren mit aromatischen Resten absorbieren UV-Licht bei 280 nm.",
        "Einige proteinogene Bausteine sind Aminosäuren mit aromatischen Resten.",
      ],
      options: {
        A: "Einige proteinogene Bausteine absorbieren UV-Licht bei 280 nm.",
        B: "Alle proteinogenen Bausteine absorbieren UV-Licht bei 280 nm.",
        C: "Kein proteinogener Baustein absorbiert UV-Licht bei 280 nm.",
        D: "Alles, was UV-Licht bei 280 nm absorbiert, ist ein aromatischer Baustein.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Darii (A-I-I, 1. Figur): Aromatische Reste ⊆ UV-Absorber. Einige proteinogene Bausteine gehören zur Menge der aromatischen Reste. Daher gilt für diese Elemente zwingend: Einige proteinogene Bausteine absorbieren UV-Licht bei 280 nm.",
    },
    {
      id: "ie-sim5-q04",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Alle Patienten mit Appendizitis zeigen einen positiven McBurney-Schmerz.",
        "Einige Patienten in der Notaufnahme zeigen einen positiven McBurney-Schmerz.",
      ],
      options: {
        A: "Alle Patienten in der Notaufnahme haben eine Appendizitis.",
        B: "Einige Patienten in der Notaufnahme haben eine Appendizitis.",
        C: "Kein Patient in der Notaufnahme hat eine Appendizitis.",
        D: "Alle Patienten mit McBurney-Schmerz sind in der Notaufnahme.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss des unverteilten Mittelbegriffs (Fallacy of the Undistributed Middle): Der gemeinsame Begriff 'positiver McBurney-Schmerz' ist in Prämisse 1 nur Prädikat einer All-Aussage und in Prämisse 2 partikulär. Es besteht keine mengentheoretische Gewähr, dass die Notaufnahmepatienten mit dem McBurney-Zeichen auch zur Teilmenge der Appendizitispatienten gehören. Keine Schlussfolgerung ist richtig.",
    },
    {
      id: "ie-sim5-q05",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "modus_camestres",
      premises: [
        "Alle Myelin bildenden Gliazellen des ZNS sind Oligodendrozyten.",
        "Keine Schwann-Zelle ist ein Oligodendrozyt.",
      ],
      options: {
        A: "Alle Schwann-Zellen sind Oligodendrozyten.",
        B: "Keine Schwann-Zelle ist eine Myelin bildende Gliazelle des ZNS.",
        C: "Einige Schwann-Zellen sind Myelin bildende Gliazellen des ZNS.",
        D: "Alle Oligodendrozyten sind Schwann-Zellen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Camestres (A-E-E, 2. Figur): Alle ZNS-Myelinbildner sind Oligodendrozyten. Da Schwann-Zellen und Oligodendrozyten vollständig disjunkt sind, kann keine Schwann-Zelle ein ZNS-Myelinbildner sein: Keine Schwann-Zelle ist eine Myelin bildende Gliazelle des ZNS.",
    },
    {
      id: "ie-sim5-q06",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_ferio",
      premises: [
        "Kein Prion enthält funktionelle Nukleinsäuren.",
        "Einige infektiöse Erreger sind Prionen.",
      ],
      options: {
        A: "Kein infektiöser Erreger enthält funktionelle Nukleinsäuren.",
        B: "Alle infektiösen Erreger enthalten funktionelle Nukleinsäuren.",
        C: "Einige infektiöse Erreger enthalten keine funktionellen Nukleinsäuren.",
        D: "Alles, was Nukleinsäuren enthält, ist kein infektiöser Erreger.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Ferio (E-I-O, 1. Figur): Die Menge der Prionen hat keine Schnittmenge mit Nukleinsäure-Trägern. Da einige infektiöse Erreger Prionen sind, besitzen diese speziellen Erreger garantiert keine Nukleinsäuren: Einige infektiöse Erreger enthalten keine funktionellen Nukleinsäuren.",
    },
    {
      id: "ie-sim5-q07",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_cesare",
      premises: [
        "Kein aerob lebender Organismus gedeiht in rein anoxischem Milieu.",
        "Alle obligat methanogenen Archaeen gedeihen in rein anoxischem Milieu.",
      ],
      options: {
        A: "Alle obligat methanogenen Archaeen sind aerobe Organismen.",
        B: "Einige obligat methanogene Archaeen leben aerob.",
        C: "Alle Organismen, die in anoxischem Milieu gedeihen, sind Archaeen.",
        D: "Kein obligat methanogenes Archaeon ist ein aerob lebender Organismus.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Cesare (E-A-E, 2. Figur): Aerob lebende Organismen schließen anoxisches Gedeihen kategorisch aus. Weil alle obligaten Methanogenen in diesem Milieu gedeihen, können sie keinesfalls aerobe Organismen sein: Kein obligat methanogenes Archaeon ist ein aerob lebender Organismus.",
    },
    {
      id: "ie-sim5-q08",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_disamis",
      premises: [
        "Einige allosterische Enzyme zeigen eine ausgeprägte Sigmoidalität der Kinetik.",
        "Alle allosterischen Enzyme unterliegen einer kooperativen Konformationsänderung.",
      ],
      options: {
        A: "Einige Enzyme mit kooperativer Konformationsänderung zeigen eine ausgeprägte Sigmoidalität der Kinetik.",
        B: "Alle Enzyme mit kooperativer Konformationsänderung zeigen eine ausgeprägte Sigmoidalität der Kinetik.",
        C: "Kein Enzym mit kooperativer Konformationsänderung zeigt eine ausgeprägte Sigmoidalität.",
        D: "Alle allosterischen Enzyme zeigen eine ausgeprägte Sigmoidalität.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Disamis (I-A-I, 3. Figur): Einige allosterische Enzyme haben sigmoide Kinetik. Da ausnahmslos alle allosterischen Enzyme kooperativ sind, sind jene allosterischen Enzyme mit sigmoider Kinetik gleichzeitig kooperativ: Einige Enzyme mit kooperativer Konformationsänderung zeigen eine ausgeprägte Sigmoidalität der Kinetik.",
    },
    {
      id: "ie-sim5-q09",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_baroco",
      premises: [
        "Alle steroidvermittelten Signalwege erfordern intrazelluläre Rezeptoren.",
        "Einige hormonelle Wirkmechanismen erfordern keine intrazellulären Rezeptoren.",
      ],
      options: {
        A: "Alle hormonellen Wirkmechanismen sind steroidvermittelte Signalwege.",
        B: "Einige hormonelle Wirkmechanismen sind keine steroidvermittelten Signalwege.",
        C: "Kein hormoneller Wirkmechanismus ist ein steroidvermittelter Signalweg.",
        D: "Alle Signalwege mit intrazellulären Rezeptoren sind steroidvermittelt.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Baroco (A-O-O, 2. Figur): Alle Steroidwege sind in der Menge der Wege mit intrazellulären Rezeptoren enthalten. Die hormonellen Wirkmechanismen, die diese Rezeptoren nachweislich nicht besitzen, können daher unmöglich Steroidwege sein: Einige hormonelle Wirkmechanismen sind keine steroidvermittelten Signalwege.",
    },
    {
      id: "ie-sim5-q10",
      simulationId: "ie-sim5",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_negative_premises",
      premises: [
        "Kein Autoimmunantikörper richtet sich gegen körperfremde Pathogene.",
        "Einige zirkulierende Immunkomplexe sind keine Autoimmunantikörper.",
      ],
      options: {
        A: "Kein zirkulierender Immunkomplex richtet sich gegen körperfremde Pathogene.",
        B: "Einige zirkulierende Immunkomplexe richten sich gegen körperfremde Pathogene.",
        C: "Alle zirkulierenden Immunkomplexe richten sich gegen körperfremde Pathogene.",
        D: "Einige zirkulierende Immunkomplexe richten sich nicht gegen körperfremde Pathogene.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Scheinschluss aus zwei verneinenden Prämissen (Fallacy of Exclusive Premises): Aus zwei negativen Prämissen ('Kein ...' und 'Einige ... sind keine ...') lässt sich kein zwingender logischer Zusammenhang zwischen den Außenbegriffen ableiten. Daher folgt keine der Aussagen A–D mit logischer Notwendigkeit: Keine Schlussfolgerung ist richtig.",
    },
  ],
};
