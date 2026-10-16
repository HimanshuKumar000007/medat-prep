import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 2
 * 10 Aufgaben · 10 Minuten · Formale Deduktion & Syllogismen
 */
export const IE_SIMULATION_2_DATA: IeSimulationData = {
  simulationId: "ie-sim2",
  simNumber: 2,
  title: "Simulation 2 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Negationen & Existenzquantoren",
  timeLimitSeconds: 10 * 60,
  questions: [
    {
      id: "ie-sim2-q01",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle Autos sind Fahrzeuge.",
        "Alle Fahrzeuge benötigen Energie.",
      ],
      options: {
        A: "Alle Autos benötigen Energie.",
        B: "Alle, die Energie benötigen, sind Autos.",
        C: "Kein Auto benötigt Energie.",
        D: "Einige Autos benötigen keine Energie.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Barbara: Da die Menge der Autos vollständig in der Menge der Fahrzeuge enthalten ist und alle Fahrzeuge Energie benötigen, folgt zwingend: Alle Autos benötigen Energie.",
    },
    {
      id: "ie-sim2-q02",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Alle Viren sind infektiös.",
        "Nichts Infektiöses ist völlig harmlos.",
      ],
      options: {
        A: "Alle Viren sind harmlos.",
        B: "Kein Virus ist völlig harmlos.",
        C: "Einige Viren sind völlig harmlos.",
        D: "Alles, was harmlos ist, ist ein Virus.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Celarent: Da alle Viren der Klasse der infektiösen Einheiten angehören und Infektiöses per Prämisse 2 mit 'völlig harmlos' disjunkt ist, gilt: Kein Virus ist völlig harmlos.",
    },
    {
      id: "ie-sim2-q03",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Einige Blumen sind Rosen.",
        "Alle Rosen haben Dornen.",
      ],
      options: {
        A: "Alle Blumen haben Dornen.",
        B: "Keine Blume hat Dornen.",
        C: "Einige Blumen haben Dornen.",
        D: "Alle Gewächse mit Dornen sind Rosen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Darii: Mindestens eine Blume ist eine Rose. Da alle Rosen Dornen haben, hat jene Teilmenge der Blumen, die aus Rosen besteht, zwingend Dornen: Einige Blumen haben Dornen.",
    },
    {
      id: "ie-sim2-q04",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_ferio",
      premises: [
        "Einige Medikamente sind Schmerzmittel.",
        "Kein Schmerzmittel ist wirkungslos.",
      ],
      options: {
        A: "Alle Medikamente sind wirkungsvoll.",
        B: "Kein Medikament ist wirkungsvoll.",
        C: "Alle Schmerzmittel sind Medikamente.",
        D: "Einige Medikamente sind nicht wirkungslos.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferio: Es gibt Medikamente, die Schmerzmittel sind. Da kein Schmerzmittel wirkungslos ist, sind jene Medikamente, die zu den Schmerzmitteln zählen, garantiert nicht wirkungslos: Einige Medikamente sind nicht wirkungslos.",
    },
    {
      id: "ie-sim2-q05",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "fallacy_negative_premises",
      premises: [
        "Keine Fische sind Vögel.",
        "Keine Vögel sind Säugetiere.",
      ],
      options: {
        A: "Keine Fische sind Säugetiere.",
        B: "Alle Fische sind Säugetiere.",
        C: "Einige Fische sind Säugetiere.",
        D: "Alle Säugetiere sind Fische.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Fehlschluss der zwei verneinenden Prämissen (Fallacy of Exclusive Premises): Aus zwei negativen Prämissen lässt sich keine gültige logische Beziehung zwischen den Außenbegriffen (Fische und Säugetiere) ableiten. Daher ist Option E ('Keine Schlussfolgerung ist richtig') korrekt.",
    },
    {
      id: "ie-sim2-q06",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_cesare",
      premises: [
        "Kein Dreieck ist ein Viereck.",
        "Alle Quadrate sind Vierecke.",
      ],
      options: {
        A: "Kein Dreieck ist ein Quadrat.",
        B: "Alle Dreiecke sind Quadrate.",
        C: "Einige Dreiecke sind Quadrate.",
        D: "Alle Vierecke sind Quadrate.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Cesare: Dreiecke und Vierecke besitzen keine gemeinsamen Elemente. Da alle Quadrate Teil der Vierecke sind, kann kein Dreieck jemals ein Quadrat sein: Kein Dreieck ist ein Quadrat.",
    },
    {
      id: "ie-sim2-q07",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_datisi",
      premises: [
        "Alle Diamanten sind Kohlenstoffkörper.",
        "Einige Diamanten sind geschliffen.",
      ],
      options: {
        A: "Alle Kohlenstoffkörper sind geschliffen.",
        B: "Einige Kohlenstoffkörper sind geschliffen.",
        C: "Kein Kohlenstoffkörper ist geschliffen.",
        D: "Alle geschliffenen Steine sind Diamanten.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Datisi: Es gibt geschliffene Diamanten. Da ausnahmslos alle Diamanten Kohlenstoffkörper sind, sind jene geschliffenen Diamanten zugleich Kohlenstoffkörper: Einige Kohlenstoffkörper sind geschliffen.",
    },
    {
      id: "ie-sim2-q08",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_baroco",
      premises: [
        "Alle chirurgischen Eingriffe erfordern sterile Instrumente.",
        "Einige medizinische Maßnahmen erfordern keine sterilen Instrumente.",
      ],
      options: {
        A: "Alle medizinischen Maßnahmen sind chirurgische Eingriffe.",
        B: "Keine medizinische Maßnahme ist ein chirurgischer Eingriff.",
        C: "Einige medizinische Maßnahmen sind keine chirurgischen Eingriffe.",
        D: "Einige sterile Instrumente sind keine medizinischen Maßnahmen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Baroco: Diejenigen medizinischen Maßnahmen, die keine sterilen Instrumente erfordern, können keinesfalls chirurgische Eingriffe sein, da jeder chirurgische Eingriff zwingend sterile Instrumente verlangt. Folglich gilt: Einige medizinische Maßnahmen sind keine chirurgischen Eingriffe.",
    },
    {
      id: "ie-sim2-q09",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_ferison",
      premises: [
        "Kein Reizgas ist geruchlos.",
        "Einige Reizgase sind synthetisch hergestellt.",
      ],
      options: {
        A: "Alle synthetischen Stoffe sind geruchsintensiv.",
        B: "Kein synthetischer Stoff ist geruchlos.",
        C: "Alle Reizgase sind synthetisch hergestellt.",
        D: "Einige synthetisch hergestellte Stoffe sind nicht geruchlos.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferison: Reizgase sind per Prämisse 1 niemals geruchlos. Da mindestens ein synthetisch hergestellter Stoff ein Reizgas ist, ist dieser synthetische Stoff garantiert nicht geruchlos: Einige synthetisch hergestellte Stoffe sind nicht geruchlos.",
    },
    {
      id: "ie-sim2-q10",
      simulationId: "ie-sim2",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_illicit_process",
      premises: [
        "Alle Chemiker:innen sind Naturwissenschaftler:innen.",
        "Keine Philosoph:innen sind Chemiker:innen.",
      ],
      options: {
        A: "Keine Philosoph:innen sind Naturwissenschaftler:innen.",
        B: "Alle Philosoph:innen sind Naturwissenschaftler:innen.",
        C: "Einige Naturwissenschaftler:innen sind Philosoph:innen.",
        D: "Alle Naturwissenschaftler:innen sind Chemiker:innen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Fehlschluss des unzulässigen Oberbegriffs (Illicit Major): Aus der Tatsache, dass Philosoph:innen keine Chemiker:innen sind, folgt keineswegs, dass sie keine Naturwissenschaftler:innen sein können (die Menge der Naturwissenschaftler:innen ist weiter gefasst als die der Chemiker:innen). Keine Aussage A–D folgt zwingend. Daher ist Option E korrekt.",
    },
  ],
};
