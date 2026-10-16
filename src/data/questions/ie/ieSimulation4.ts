import type { IeSimulationData } from "./types";

/**
 * MedAT-H KFF Implikationen erkennen (IE) — Simulation 4
 * 10 Aufgaben · 10 Minuten · Formale Deduktion & Syllogismen
 */
export const IE_SIMULATION_4_DATA: IeSimulationData = {
  simulationId: "ie-sim4",
  simNumber: 4,
  title: "Simulation 4 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Prädikat-Subjekt-Verknüpfung & Scheinschlüsse",
  timeLimitSeconds: 10 * 60,
  questions: [
    {
      id: "ie-sim4-q01",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 1,
      difficulty: "Leicht",
      ruleType: "modus_barbara",
      premises: [
        "Alle Vektoren gehorchen der Dreiecksungleichung.",
        "Alles, was der Dreiecksungleichung gehorcht, besitzt eine mathematische Norm.",
      ],
      options: {
        A: "Alle Vektoren besitzen eine mathematische Norm.",
        B: "Alles, was eine mathematische Norm besitzt, ist ein Vektor.",
        C: "Kein Vektor besitzt eine mathematische Norm.",
        D: "Einige Vektoren besitzen keine mathematische Norm.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Barbara: Vollständige Kettengültigkeit: Vektoren ⊆ gehorchen Dreiecksungleichung ⊆ besitzen Norm. Daher gilt zwingend: Alle Vektoren besitzen eine mathematische Norm.",
    },
    {
      id: "ie-sim4-q02",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 2,
      difficulty: "Leicht",
      ruleType: "modus_celarent",
      premises: [
        "Alle Säuren haben einen pH-Wert unter 7.",
        "Nichts mit einem pH-Wert unter 7 färbt den Indikator blau.",
      ],
      options: {
        A: "Alle Säuren färben den Indikator blau.",
        B: "Keine Säure färbt den Indikator blau.",
        C: "Einige Säuren färben den Indikator blau.",
        D: "Alles, was den Indikator nicht blau färbt, ist eine Säure.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Celarent: Säuren besitzen pH < 7. Da Stoffe mit pH < 7 den Indikator niemals blau färben, kann keine Säure den Indikator blau färben: Keine Säure färbt den Indikator blau.",
    },
    {
      id: "ie-sim4-q03",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 3,
      difficulty: "Leicht",
      ruleType: "modus_darii",
      premises: [
        "Einige Kardiolog:innen sind Chirurg:innen.",
        "Alle Chirurg:innen führen operative Eingriffe durch.",
      ],
      options: {
        A: "Alle Kardiolog:innen führen operative Eingriffe durch.",
        B: "Keine Kardiologin führt operative Eingriffe durch.",
        C: "Einige Kardiolog:innen führen operative Eingriffe durch.",
        D: "Alle Personen, die operative Eingriffe durchführen, sind Kardiolog:innen.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Darii: Mindestens eine Kardiologin ist Chirurgin. Da ausnahmslos alle Chirurg:innen operative Eingriffe durchführen, führen jene kardiologischen Chirurg:innen zwingend Operationen durch: Einige Kardiolog:innen führen operative Eingriffe durch.",
    },
    {
      id: "ie-sim4-q04",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 4,
      difficulty: "Mittel",
      ruleType: "modus_ferio",
      premises: [
        "Einige Neuronen sind motorische Nervenzellen.",
        "Keine motorische Nervenzelle empfängt Schmerzreize direkt.",
      ],
      options: {
        A: "Alle Neuronen empfangen Schmerzreize direkt.",
        B: "Kein Neuron empfängt Schmerzreize direkt.",
        C: "Alle Nervenzellen sind motorische Nervenzellen.",
        D: "Einige Neuronen empfangen Schmerzreize nicht direkt.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferio: Bestimmte Neuronen sind motorisch. Da keine motorische Nervenzelle Schmerzreize direkt empfängt, empfangen genau diese Neuronen keine Schmerzreize direkt: Einige Neuronen empfangen Schmerzreize nicht direkt.",
    },
    {
      id: "ie-sim4-q05",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 5,
      difficulty: "Mittel",
      ruleType: "fallacy_converse",
      premises: [
        "Alle Wale sind Säugetiere.",
        "Alle Säugetiere sind Warmblüter.",
      ],
      options: {
        A: "Alle Warmblüter sind Wale.",
        B: "Keine Warmblüter sind Säugetiere.",
        C: "Kein Wal ist ein Warmblüter.",
        D: "Alle Säugetiere sind Wale.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Konvers-Falle: Zwar folgt aus den Prämissen 'Alle Wale sind Warmblüter', aber genau diese gültige Schlussfolgerung wird in A bis D NICHT angeboten! Antwort A und D sind unzulässige Umkehrschlüsse (Konverse), B und C sind Widersprüche. Daher ist Option E ('Keine Schlussfolgerung ist richtig') zwingend korrekt.",
    },
    {
      id: "ie-sim4-q06",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 6,
      difficulty: "Mittel",
      ruleType: "modus_cesare",
      premises: [
        "Kein Narkosemittel ist völlig nebenwirkungsfrei.",
        "Alle Scheinpräparate sind völlig nebenwirkungsfrei.",
      ],
      options: {
        A: "Kein Narkosemittel ist ein Scheinpräparat.",
        B: "Alle Narkosemittel sind Scheinpräparate.",
        C: "Einige Narkosemittel sind Scheinpräparate.",
        D: "Alles, was nebenwirkungsfrei ist, ist ein Narkosemittel.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "A",
      explanation:
        "Modus Cesare: Narkosemittel schließen die Eigenschaft 'nebenwirkungsfrei' vollständig aus. Scheinpräparate besitzen diese Eigenschaft ausnahmslos. Beide Klassen sind daher disjunkt: Kein Narkosemittel ist ein Scheinpräparat.",
    },
    {
      id: "ie-sim4-q07",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 7,
      difficulty: "Mittel",
      ruleType: "modus_datisi",
      premises: [
        "Alle Antibiotika greifen spezifische Bakterien an.",
        "Einige Antibiotika hemmen die Zellwandsynthese.",
      ],
      options: {
        A: "Alle Stoffe, die Bakterien angreifen, hemmen die Zellwandsynthese.",
        B: "Einige Stoffe, die Bakterien angreifen, hemmen die Zellwandsynthese.",
        C: "Kein Stoff, der Bakterien angreift, hemmt die Zellwandsynthese.",
        D: "Alle Stoffe, die Zellwandsynthese hemmen, sind Antibiotika.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "B",
      explanation:
        "Modus Datisi: Es gibt Antibiotika, die die Zellwandsynthese hemmen. Da alle Antibiotika Bakterien angreifen, greifen diese zellwandhemmenden Stoffe zwingend Bakterien an: Einige Stoffe, die Bakterien angreifen, hemmen die Zellwandsynthese.",
    },
    {
      id: "ie-sim4-q08",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 8,
      difficulty: "Schwer",
      ruleType: "modus_baroco",
      premises: [
        "Alle primären Sinneszellen bilden ein echtes Aktionspotenzial.",
        "Einige Rezeptorzellen bilden kein echtes Aktionspotenzial.",
      ],
      options: {
        A: "Alle Rezeptorzellen sind primäre Sinneszellen.",
        B: "Keine Rezeptorzelle ist eine primäre Sinneszelle.",
        C: "Einige Rezeptorzellen sind keine primären Sinneszellen.",
        D: "Einige primäre Sinneszellen bilden kein Aktionspotenzial.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "C",
      explanation:
        "Modus Baroco: Jene Rezeptorzellen, die kein echtes Aktionspotenzial bilden, können keine primären Sinneszellen sein, weil primäre Sinneszellen zwingend Aktionspotenziale generieren. Somit folgt: Einige Rezeptorzellen sind keine primären Sinneszellen.",
    },
    {
      id: "ie-sim4-q09",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 9,
      difficulty: "Schwer",
      ruleType: "modus_ferison",
      premises: [
        "Keine malignen Tumore sind histologisch gutartig.",
        "Einige maligne Tumore wachsen extrem verlangsamt.",
      ],
      options: {
        A: "Alle langsam wachsenden Tumore sind histologisch gutartig.",
        B: "Kein langsam wachsender Tumor ist histologisch gutartig.",
        C: "Alle Tumore wachsen extrem verlangsamt.",
        D: "Einige extrem verlangsamt wachsende Tumore sind nicht histologisch gutartig.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "D",
      explanation:
        "Modus Ferison: Maligne Tumore sind per Prämisse 1 niemals gutartig. Da mindestens ein verlangsamt wachsender Tumor maligne ist, ist dieser verlangsamt wachsende Tumor garantiert nicht gutartig: Einige extrem verlangsamt wachsende Tumore sind nicht histologisch gutartig.",
    },
    {
      id: "ie-sim4-q10",
      simulationId: "ie-sim4",
      subtest: "IE",
      questionNumber: 10,
      difficulty: "Schwer",
      ruleType: "fallacy_undistributed_middle",
      premises: [
        "Alle Vögel haben Federn.",
        "Alle Pinguine haben Federn.",
      ],
      options: {
        A: "Alle Vögel sind Pinguine.",
        B: "Alle Pinguine sind Vögel.",
        C: "Einige Vögel sind keine Pinguine.",
        D: "Kein Vogel ist ein Pinguin.",
        E: "Keine Schlussfolgerung ist richtig.",
      },
      correctAnswer: "E",
      explanation:
        "Formaler Fehlschluss (Realitätswissen zwingend ignorieren!): Obwohl biologisch bekannt ist, dass Pinguine Vögel sind, folgt dies REIN FORMALLOGISCH nicht aus den beiden Prämissen! Beide Klassen (Vögel und Pinguine) teilen lediglich die Eigenschaft 'haben Federn'. Im Mengendiagramm können sie disjunkt, überlappend oder ineinander geschachtelt sein. Keine der Aussagen A bis D ist rein formal deduzierbar. Daher ist Option E ('Keine Schlussfolgerung ist richtig') die einzig korrekte Lösung!",
    },
  ],
};
