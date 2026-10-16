import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 3
 * 10 Aufgaben · 10 Minuten · Formale Deduktion & Syllogismen
 */
export const IE_SIMULATION_3_DATA: IeSimulationData = {
  simulationId: "ie-sim3",
  simNumber: 3,
  title: "Simulation 3 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Umgekehrte Prämissen & Partikuläre Negationen",
  timeLimitSeconds: 10 * 60,
  questions: [
    {
      id: "ie-sim3-q01",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Alle Metalle sind elektrisch leitfähig.",
        "Nichts elektrisch Leitfähiges ist ein absoluter Isolator.",
      ],
      options: {
        A: "Kein Metall ist ein absoluter Isolator.",
        B: "Alle Metalle sind absolute Isolatoren.",
        C: "Einige absolute Isolatoren sind Metalle.",
        D: "Alle elektrisch leitfähigen Stoffe sind Metalle.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Celarent: Da alle Metalle der Menge der elektrisch Leitfähigen angehören und diese Menge vollständig disjunkt von den absoluten Isolatoren ist, kann kein Metall ein absoluter Isolator sein: Kein Metall ist ein absoluter Isolator.",
    },
    {
      id: "ie-sim3-q02",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle Schattenwesen sind Wesen der Nacht.",
        "Alle Wesen der Nacht können im Dunkeln sehen.",
      ],
      options: {
        A: "Alle Wesen, die im Dunkeln sehen können, sind Schattenwesen.",
        B: "Alle Schattenwesen können im Dunkeln sehen.",
        C: "Kein Schattenwesen kann im Dunkeln sehen.",
        D: "Einige Schattenwesen können nicht im Dunkeln sehen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Barbara: Kettenschluss zweier Allaussagen. Schattenwesen ⊆ Wesen der Nacht ⊆ Wesen, die im Dunkeln sehen können. Daher folgt zwingend: Alle Schattenwesen können im Dunkeln sehen.",
    },
    {
      id: "ie-sim3-q03",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Einige Algen sind Einzeller.",
        "Alle Einzeller besitzen eine Plasmamembran.",
      ],
      options: {
        A: "Alle Algen besitzen eine Plasmamembran.",
        B: "Keine Alge besitzt eine Plasmamembran.",
        C: "Einige Algen besitzen eine Plasmamembran.",
        D: "Alle Lebewesen mit Plasmamembran sind Algen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Darii: Mindestens eine Alge ist ein Einzeller. Da alle Einzeller eine Plasmamembran besitzen, hat jene Teilmenge der Algen zwingend eine Plasmamembran: Einige Algen besitzen eine Plasmamembran.",
    },
    {
      id: "ie-sim3-q04",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_ferio",
      premises: [
        "Einige Gase sind Edelgase.",
        "Kein Edelgas bildet spontan Moleküle.",
      ],
      options: {
        A: "Alle Gase bilden spontan Moleküle.",
        B: "Kein Gas bildet spontan Moleküle.",
        C: "Alle molekülbildenden Stoffe sind Gase.",
        D: "Einige Gase bilden nicht spontan Moleküle.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferio: Bestimmte Gase sind Edelgase. Da kein Edelgas spontan Moleküle bildet, bilden genau diese Edelgase keine Moleküle. Folglich gilt zwingend: Einige Gase bilden nicht spontan Moleküle.",
    },
    {
      id: "ie-sim3-q05",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Alle Vektoren besitzen einen Betrag.",
        "Alle Skalare besitzen einen Betrag.",
      ],
      options: {
        A: "Alle Vektoren sind Skalare.",
        B: "Einige Vektoren sind Skalare.",
        C: "Keine Vektoren sind Skalare.",
        D: "Alle Größen mit Betrag sind Vektoren.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Fehlschluss des unverteilten Mittelbegriffs: Beide Mengen liegen innerhalb der übergeordneten Menge 'besitzen einen Betrag'. Aus den Prämissen lässt sich rein formal nicht ableiten, ob Vektoren und Skalare überlappen oder disjunkt sind. Folglich ist keine der Aussagen A bis D logisch zwingend. Antwort E ist korrekt.",
    },
    {
      id: "ie-sim3-q06",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_camestres",
      premises: [
        "Alle Erythrozyten enthalten Hämoglobin.",
        "Keine Thrombozyten enthalten Hämoglobin.",
      ],
      options: {
        A: "Keine Erythrozyten sind Thrombozyten.",
        B: "Alle Thrombozyten sind Erythrozyten.",
        C: "Einige Thrombozyten sind Erythrozyten.",
        D: "Alle Blutzellen mit Hämoglobin sind Thrombozyten.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Camestres: Erythrozyten besitzen ausnahmslos Hämoglobin. Da Thrombozyten Hämoglobin vollständig ausschließen, können Erythrozyten und Thrombozyten keine gemeinsamen Elemente teilen: Keine Erythrozyten sind Thrombozyten.",
    },
    {
      id: "ie-sim3-q07",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_bocardo",
      premises: [
        "Einige Bakterien sind keine Krankheitserreger.",
        "Alle Bakterien sind Prokaryoten.",
      ],
      options: {
        A: "Alle Prokaryoten sind keine Krankheitserreger.",
        B: "Einige Prokaryoten sind keine Krankheitserreger.",
        C: "Kein Prokaryot ist ein Krankheitserreger.",
        D: "Alle Krankheitserreger sind Bakterien.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Bocardo: Diejenigen Bakterien, die keine Krankheitserreger sind, sind per Prämisse 2 zugleich Prokaryoten. Folglich existieren Prokaryoten, die keine Krankheitserreger sind: Einige Prokaryoten sind keine Krankheitserreger.",
    },
    {
      id: "ie-sim3-q08",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_disamis",
      premises: [
        "Einige Proteine sind Enzyme.",
        "Alle Proteine bestehen aus Aminosäuren.",
      ],
      options: {
        A: "Alle Moleküle aus Aminosäuren sind Enzyme.",
        B: "Kein Enzym besteht aus Aminosäuren.",
        C: "Einige Enzyme bestehen aus Aminosäuren.",
        D: "Alle Enzyme sind Proteine.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Disamis: Es gibt Proteine, die Enzyme sind. Da alle Proteine aus Aminosäuren bestehen, bestehen diese Enzyme zwingend aus Aminosäuren: Einige Enzyme bestehen aus Aminosäuren.",
    },
    {
      id: "ie-sim3-q09",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_festino",
      premises: [
        "Kein Wirbeltier besitzt ein Außenskelett.",
        "Einige Krebstiere besitzen ein Außenskelett.",
      ],
      options: {
        A: "Alle Krebstiere sind Wirbeltiere.",
        B: "Kein Krebstier ist ein Wirbeltier.",
        C: "Alle Außenskelette sind Krebstiere.",
        D: "Einige Krebstiere sind keine Wirbeltiere.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Festino: Einige Krebstiere besitzen ein Außenskelett. Da kein Wesen mit Außenskelett ein Wirbeltier sein kann, sind genau diese Krebstiere garantiert keine Wirbeltiere: Einige Krebstiere sind keine Wirbeltiere.",
    },
    {
      id: "ie-sim3-q10",
      simulationId: "ie-sim3",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Einige Säugetiere leben im Wasser.",
        "Einige Wassertiere haben Kiemen.",
      ],
      options: {
        A: "Einige Säugetiere haben Kiemen.",
        B: "Alle Säugetiere haben Kiemen.",
        C: "Keine Säugetiere haben Kiemen.",
        D: "Alle Wassertiere sind Säugetiere.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Fehlschluss aus zwei partikulären Prämissen (Two Particular Premises): Aus zwei 'Einige'-Aussagen lässt sich keine zwingende Verbindung zwischen den Außenbegriffen (Säugetiere und Kiemen) herstellen, da die jeweiligen Schnittmengen völlig disjunkt sein können. Keine der Aussagen A bis D ist zwingend. Daher ist Option E korrekt.",
    },
  ],
};
