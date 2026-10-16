import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 1
 * 10 Aufgaben · 10 Minuten · Formale Deduktion & Syllogismen
 */
export const IE_SIMULATION_1_DATA: IeSimulationData = {
  simulationId: "ie-sim1",
  simNumber: 1,
  title: "Simulation 1 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Basis-Syllogismen & Quantoren-Logik",
  timeLimitSeconds: 10 * 60,
  questions: [
    {
      id: "ie-sim1-q01",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle Klaviere sind Tasteninstrumente.",
        "Alle Tasteninstrumente sind Musikinstrumente.",
      ],
      options: {
        A: "Alle Klaviere sind Musikinstrumente.",
        B: "Alle Musikinstrumente sind Klaviere.",
        C: "Kein Klavier ist ein Musikinstrument.",
        D: "Einige Musikinstrumente sind keine Tasteninstrumente.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Barbara (Kettenschluss): Da die Menge der Klaviere vollständig in der Menge der Tasteninstrumente liegt und diese wiederum vollständig in den Musikinstrumenten enthalten ist, folgt zwingend: Alle Klaviere sind Musikinstrumente.",
    },
    {
      id: "ie-sim1-q02",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Alle Reptilien sind Wirbeltiere.",
        "Kein Wirbeltier ist ein Insekt.",
      ],
      options: {
        A: "Alle Reptilien sind Insekten.",
        B: "Kein Reptil ist ein Insekt.",
        C: "Einige Insekten sind Reptilien.",
        D: "Alle Insekten sind Wirbeltiere.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Celarent: Da alle Reptilien zur Menge der Wirbeltiere gehören und die Menge der Wirbeltiere disjunkt (vollständig getrennt) von der Menge der Insekten ist, kann kein Reptil ein Insekt sein.",
    },
    {
      id: "ie-sim1-q03",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Einige Vögel sind Raubtiere.",
        "Alle Raubtiere sind Fleischfresser.",
      ],
      options: {
        A: "Alle Vögel sind Fleischfresser.",
        B: "Kein Vogel ist ein Fleischfresser.",
        C: "Einige Vögel sind Fleischfresser.",
        D: "Alle Fleischfresser sind Vögel.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Darii: Mindestens ein Vogel ist ein Raubtier. Da jedes Raubtier ein Fleischfresser ist, ist jener Teil der Vögel, der zu den Raubtieren gehört, notwendigerweise auch Fleischfresser: Einige Vögel sind Fleischfresser.",
    },
    {
      id: "ie-sim1-q04",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_ferio",
      premises: [
        "Einige Pilze sind Giftgewächse.",
        "Kein Giftgewächs ist essbar.",
      ],
      options: {
        A: "Alle Pilze sind essbar.",
        B: "Kein Pilz ist essbar.",
        C: "Einige essbare Gewächse sind Giftgewächse.",
        D: "Einige Pilze sind nicht essbar.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferio: Es gibt Pilze, die Giftgewächse sind. Da kein Giftgewächs essbar ist, können genau diese giftigen Pilze keinesfalls essbar sein. Daraus folgt zwingend: Einige Pilze sind nicht essbar.",
    },
    {
      id: "ie-sim1-q05",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Alle Ärzt:innen tragen weiße Kittel.",
        "Einige Laborant:innen tragen weiße Kittel.",
      ],
      options: {
        A: "Einige Ärzt:innen sind Laborant:innen.",
        B: "Alle Laborant:innen sind Ärzt:innen.",
        C: "Keine Laborantin ist eine Ärztin.",
        D: "Einige Laborant:innen sind keine Ärzt:innen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Fehlschluss des unverteilten Mittelbegriffs (Undistributed Middle): Beide Gruppen teilen lediglich eine Eigenschaft ('tragen weiße Kittel'). Es ist nicht zwingend vorgegeben, ob sich die Gruppen der Ärzt:innen und Laborant:innen überschneiden oder völlig disjunkt sind. Daher folgt keine der Aussagen A bis D zwingend.",
    },
    {
      id: "ie-sim1-q06",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_camestres",
      premises: [
        "Alle Säugetiere atmen Luft.",
        "Keine Fische atmen Luft.",
      ],
      options: {
        A: "Keine Säugetiere sind Fische.",
        B: "Alle Fische sind Säugetiere.",
        C: "Einige Fische sind Säugetiere.",
        D: "Alle Lebewesen, die Luft atmen, sind Säugetiere.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Camestres: Alle Säugetiere besitzen das Merkmal 'atmen Luft'. Da Fische dieses Merkmal vollständig ausschließen, können Säugetiere und Fische keine gemeinsamen Elemente haben: Keine Säugetiere sind Fische.",
    },
    {
      id: "ie-sim1-q07",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_disamis",
      premises: [
        "Einige Forscher:innen sind Nobelpreisträger:innen.",
        "Alle Forscher:innen sind Akademiker:innen.",
      ],
      options: {
        A: "Alle Akademiker:innen sind Nobelpreisträger:innen.",
        B: "Einige Nobelpreisträger:innen sind Akademiker:innen.",
        C: "Keine Nobelpreisträger:in ist Akademiker:in.",
        D: "Alle Nobelpreisträger:innen sind Forscher:innen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Disamis: Da mindestens eine Person sowohl Forscher:in als auch Nobelpreisträger:in ist und ausnahmslos alle Forscher:innen Akademiker:innen sind, muss dieser Nobelpreisträger zwingend auch Akademiker sein: Einige Nobelpreisträger:innen sind Akademiker:innen.",
    },
    {
      id: "ie-sim1-q08",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_baroco",
      premises: [
        "Alle Primaten sind Säugetiere.",
        "Einige Wassertiere sind keine Säugetiere.",
      ],
      options: {
        A: "Alle Wassertiere sind Primaten.",
        B: "Kein Wassertier ist ein Primat.",
        C: "Einige Wassertiere sind keine Primaten.",
        D: "Einige Primaten sind keine Säugetiere.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Baroco: Diejenigen Wassertiere, die keine Säugetiere sind, können unter keinen Umständen Primaten sein, da Primaten vollständig innerhalb der Säugetiere liegen. Folglich gilt zwingend: Einige Wassertiere sind keine Primaten.",
    },
    {
      id: "ie-sim1-q09",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_festino",
      premises: [
        "Keine Metalle sind Isolatoren.",
        "Einige Werkstoffe sind Isolatoren.",
      ],
      options: {
        A: "Alle Werkstoffe sind Metalle.",
        B: "Kein Werkstoff ist ein Metall.",
        C: "Alle Isolatoren sind Werkstoffe.",
        D: "Einige Werkstoffe sind keine Metalle.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Festino: Einige Werkstoffe sind Isolatoren. Da kein Isolator ein Metall sein kann, sind genau diese isolierenden Werkstoffe garantiert keine Metalle: Einige Werkstoffe sind keine Metalle.",
    },
    {
      id: "ie-sim1-q10",
      simulationId: "ie-sim1",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Alle Drachen sind Schuppentiere.",
        "Einige Schuppentiere können fliegen.",
      ],
      options: {
        A: "Alle Drachen können fliegen.",
        B: "Einige Drachen können fliegen.",
        C: "Kein Drache kann fliegen.",
        D: "Alle Schuppentiere sind Drachen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Formaler Fehlschluss: Die fliegenden Schuppentiere müssen sich nicht mit der Untermenge der Drachen überschneiden. Weder A, B, C noch D sind in allen Modellen zwingend wahr. Daher ist Option E ('Keine Schlussfolgerung ist richtig') die einzig korrekte Antwort.",
    },
  ],
};
