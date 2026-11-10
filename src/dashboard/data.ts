export type Section = "BMS" | "KFF" | "TV" | "SEK";
export type Difficulty = "Leicht" | "Mittel" | "Schwer";

export interface Q {
  id: string;
  section: Section;
  topic: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  tags: string[];
}

export const SECTION_TOPICS: Record<Section, string[]> = {
  BMS: [
    "Zellbiologie",
    "Genetik & Evolution",
    "Ökologie",
    "Humanbiologie",
    "Chemie: Atomaufbau",
    "Chemie: Bindungen",
    "Physik: Mechanik",
    "Mathematik",
  ],
  KFF: ["Figuren zusammensetzen", "Zahlenreihen", "Gedächtnis & Merkfähigkeit", "Implikationen erkennen"],
  TV: ["Textverständnis"],
  SEK: ["Emotionen erkennen", "Soziales Entscheiden"],
};

export const SECTION_META: Record<Section, { color: string; bg: string }> = {
  BMS: { color: "#DC2626", bg: "#FEF2F2" },
  KFF: { color: "#EF4444", bg: "#FEF2F2" },
  TV: { color: "#B45309", bg: "#FFF7ED" },
  SEK: { color: "#8B5CF6", bg: "#F5F3FF" },
};

export const QUESTIONS: Q[] = [
  {
    id: "q1",
    section: "BMS",
    topic: "Zellbiologie",
    difficulty: "Mittel",
    question:
      "Welche Organellen kommen ausschließlich in eukaryotischen Zellen vor und sind direkt an der ATP-Synthese beteiligt?",
    options: [
      "Ribosomen und Lysosomen",
      "Mitochondrien und Chloroplasten",
      "Mitochondrien und Zellkern",
      "Golgi-Apparat und endoplasmatisches Retikulum",
    ],
    correct: 1,
    explanation:
      "Mitochondrien (oxidative Phosphorylierung) und Chloroplasten (Photophosphorylierung) produzieren beide ATP und existieren nur in Eukaryoten. Ribosomen (A) kommen auch in Prokaryoten vor, der Zellkern (C) enthält DNA, ist aber nicht direkt an der ATP-Produktion beteiligt, Golgi/ER (D) synthetisieren kein ATP.",
    tags: ["BMS", "Zellbiologie", "Mitochondrien", "Mittel"],
  },
  {
    id: "q2",
    section: "BMS",
    topic: "Zellbiologie",
    difficulty: "Leicht",
    question: "Welche Struktur kommt typischerweise in tierischen Zellen vor, aber nicht in Pflanzenzellen?",
    options: ["Zellwand", "Zentriolen", "Chloroplasten", "Große Zentralvakuole"],
    correct: 1,
    explanation:
      "Zentriolen organisieren in tierischen Zellen den Spindelapparat während der Mitose. Pflanzenzellen besitzen stattdessen Zellwand, Chloroplasten und eine große Zentralvakuole — genau die anderen drei Antwortmöglichkeiten.",
    tags: ["BMS", "Zellbiologie", "Leicht"],
  },
  {
    id: "q3",
    section: "BMS",
    topic: "Genetik & Evolution",
    difficulty: "Leicht",
    question: "In der DNA-Doppelhelix paariert Adenin immer mit …",
    options: ["Guanin — über drei Wasserstoffbrücken", "Thymin — über zwei Wasserstoffbrücken", "Cytosin — über zwei Wasserstoffbrücken", "Uracil — über zwei Wasserstoffbrücken"],
    correct: 1,
    explanation:
      "Adenin bildet mit Thymin zwei Wasserstoffbrücken (A=T), Guanin mit Cytosin drei (G≡C). Uracil ersetzt Thymin nur in der RNA.",
    tags: ["BMS", "Genetik", "DNA", "Leicht"],
  },
  {
    id: "q4",
    section: "BMS",
    topic: "Ökologie",
    difficulty: "Mittel",
    question:
      "In einer Nahrungskette gehen pro Trophieebene im Schnitt etwa 90 % der Energie verloren. Welches Gesetz beschreibt diese Beobachtung am besten?",
    options: ["Das Hardy-Weinberg-Gesetz", "Die 10-%-Regel der Energieübertragung", "Das Minimumgesetz nach Liebig", "Die Bergmannsche Regel"],
    correct: 1,
    explanation:
      "Die 10-%-Regel besagt, dass nur rund 10 % der Energie einer Trophieebene in die nächste übergeht — der Rest wird als Wärme abgegeben oder für Stoffwechselprozesse verbraucht. Deshalb sind Nahrungsketten selten länger als 4–5 Glieder.",
    tags: ["BMS", "Ökologie", "Energiefluss", "Mittel"],
  },
  {
    id: "q5",
    section: "BMS",
    topic: "Chemie: Atomaufbau",
    difficulty: "Leicht",
    question: "Die Anzahl der Protonen im Atomkern entspricht …",
    options: ["der Massenzahl", "der Ordnungszahl", "der Anzahl der Neutronen", "der Anzahl der Nukleonen"],
    correct: 1,
    explanation:
      "Die Ordnungszahl (Kernladungszahl) gibt die Protonenzahl an und definiert das Element. Massenzahl = Protonen + Neutronen (Nukleonen).",
    tags: ["BMS", "Chemie", "Atomaufbau", "Leicht"],
  },
  {
    id: "q6",
    section: "BMS",
    topic: "Physik: Mechanik",
    difficulty: "Mittel",
    question:
      "Eine konstante Kraft F beschleunigt einen Körper der Masse m. Wird die Masse bei gleicher Kraft verdoppelt, dann …",
    options: ["verdoppelt sich die Beschleunigung", "halbiert sich die Beschleunigung", "bleibt die Beschleunigung gleich", "vervierfacht sich die Beschleunigung"],
    correct: 1,
    explanation:
      "Nach dem zweiten Newtonschen Gesetz gilt a = F/m. Bei konstanter Kraft ist die Beschleunigung umgekehrt proportional zur Masse — doppelte Masse, halbe Beschleunigung.",
    tags: ["BMS", "Physik", "Newton", "Mittel"],
  },
  {
    id: "q7",
    section: "KFF",
    topic: "Zahlenreihen",
    difficulty: "Mittel",
    question: "Welche Zahl setzt die Reihe fort: 3 · 5 · 9 · 17 · 33 · ?",
    options: ["49", "57", "65", "66"],
    correct: 2,
    explanation:
      "Jede Zahl ist das Doppelte der vorigen minus 1 (bzw. die Differenzen verdoppeln sich: +2, +4, +8, +16). Also 33 · 2 − 1 = 65.",
    tags: ["KFF", "Zahlenreihen", "Mittel"],
  },
  {
    id: "q8",
    section: "KFF",
    topic: "Zahlenreihen",
    difficulty: "Leicht",
    question: "Welche Zahl setzt die Reihe fort: 2 · 6 · 12 · 20 · 30 · ?",
    options: ["36", "40", "42", "44"],
    correct: 2,
    explanation:
      "Die Differenzen wachsen um 2: +4, +6, +8, +10, +12. Es handelt sich um n·(n+1): 1·2, 2·3, 3·4 … Also 6·7 = 42.",
    tags: ["KFF", "Zahlenreihen", "Leicht"],
  },
  {
    id: "q9",
    section: "KFF",
    topic: "Figuren zusammensetzen",
    difficulty: "Leicht",
    question:
      "Ein Quadrat wird um 90° im Uhrzeigersinn gedreht und anschließend an der vertikalen Achse gespiegelt. Wie sieht das Ergebnis aus?",
    options: [
      "Wie das Original — das Quadrat ist invariant",
      "Um 180° gedreht",
      "Nur gespiegelt",
      "Um 270° gedreht",
    ],
    correct: 0,
    explanation:
      "Ein Quadrat besitzt vierzählige Rotationssymmetrie und Spiegelsymmetrie: 90°-Drehung und Spiegelung bilden das Quadrat auf sich selbst ab. Solche Invarianz-Checks sparen im Test wertvolle Sekunden.",
    tags: ["KFF", "Figuren", "Rotation", "Leicht"],
  },
  {
    id: "q10",
    section: "KFF",
    topic: "Implikationen erkennen",
    difficulty: "Mittel",
    question:
      "„Alle Medizinstudierenden sind eingeschrieben. Einige Eingeschriebene wohnen im Heim.“ Was folgt logisch sicher?",
    options: [
      "Einige Medizinstudierende wohnen im Heim",
      "Kein Medizinstudierender wohnt im Heim",
      "Alle im Heim Wohnenden sind Medizinstudierende",
      "Es ist möglich, dass einige Medizinstudierende im Heim wohnen — sicher ist es nicht",
    ],
    correct: 3,
    explanation:
      "Die „Einige“-Prämisse überschneidet sich nicht zwingend mit der Teilmenge der Medizinstudierenden. Weder A noch B noch C ist zwingend — nur die Möglichkeitsaussage D ist logisch korrekt. Genau diese Falle stellt der MedAT gern.",
    tags: ["KFF", "Logik", "Syllogismus", "Mittel"],
  },
  {
    id: "q11",
    section: "TV",
    topic: "Textverständnis",
    difficulty: "Mittel",
    question:
      "Text: „Die Placeboantwort ist kein Einbildungseffekt, sondern eine messbare neurobiologische Reaktion. Erwartungshaltung und Konditionierung aktivieren endogene Opioidsysteme; Studien zeigen signifikante Schmerzreduktion auch ohne Wirkstoff.“ — Welche Aussage gibt die Position des Textes am besten wieder?",
    options: [
      "Placebos wirken nur, weil Patient:innen an sie glauben",
      "Die Placeboantwort hat eine reale physiologische Grundlage",
      "Schmerz ist primär psychologisch bedingt",
      "Placebostudien sind methodisch wertlos",
    ],
    correct: 1,
    explanation:
      "Der Text betont ausdrücklich die messbare neurobiologische Basis (endogene Opioide) und widerspricht damit der reinen „Einbildung“-These. A ist das Gegenteil der Textposition, C und D gehen weit über den Text hinaus.",
    tags: ["TV", "Placebo", "Textverständnis", "Mittel"],
  },
  {
    id: "q12",
    section: "TV",
    topic: "Textverständnis",
    difficulty: "Schwer",
    question:
      "Text: „Schlafentzug beeinträchtigt die hippocampale Gedächtniskonsolidierung. Probanden mit vier Stunden Schlaf zeigten beim Abruf um 40 % schlechtere Ergebnisse als die Kontrollgruppe mit acht Stunden.“ — Welche Schlussfolgerung ist durch den Text gedeckt?",
    options: [
      "Schlafmangel kann das Abspeichern neuer Erinnerungen erheblich verschlechtern",
      "Acht Stunden Schlaf garantieren perfekte Gedächtnisleistung",
      "Der Hippocampus ist für Motorik zuständig",
      "Vier Stunden Schlaf reichen für Studierende aus",
    ],
    correct: 0,
    explanation:
      "Der Text nennt einen kausalen Zusammenhang zwischen Schlafentzug und schlechterem Abruf (−40 %). Nur A bleibt im Rahmen der Evidenz; B, C und D sind Übergeneralisierungen bzw. falsch.",
    tags: ["TV", "Schlaf", "Gedächtnis", "Schwer"],
  },
  {
    id: "q13",
    section: "SEK",
    topic: "Emotionen erkennen",
    difficulty: "Leicht",
    question:
      "Hochgezogene Augenbrauen, weit geöffnete Augen, leicht geöffneter Mund — welcher Gesichtsausdruck wird beschrieben?",
    options: ["Ärger", "Überraschung", "Ekel", "Verachtung"],
    correct: 1,
    explanation:
      "Die Kombination aus gehobenen Brauen, geweiteten Augen und geöffnetem Mund ist das klassische Muster der Überraschung. Ärger zeigt gesenkte, zusammengezogene Brauen; Ekel eine gekräuselte Nase.",
    tags: ["SEK", "Emotionen", "Mimik", "Leicht"],
  },
  {
    id: "q14",
    section: "SEK",
    topic: "Soziales Entscheiden",
    difficulty: "Mittel",
    question:
      "Deine Lernpartnerin hat zum dritten Mal in Folge das Treffen abgesagt, wirkt aber gestresst. Was ist die sozial kompetenteste Reaktion?",
    options: [
      "Die Zusammenarbeit kommentarlos beenden",
      "Ihr öffentlich in der Lerngruppe Vorwürfe machen",
      "Nachfragen, ob sie Unterstützung braucht, und flexible Alternativen anbieten",
      "Dasselbe Verhalten zeigen, um Gleichgewicht herzustellen",
    ],
    correct: 2,
    explanation:
      "Soziale Kompetenz im MedAT meint: Perspektive übernehmen, Kommunikation anbieten, Lösungen statt Schuldzuweisungen. C kombiniert Empathie mit konkretem Handlungsangebot — die anderen Optionen eskalieren oder brechen ab.",
    tags: ["SEK", "Kommunikation", "Mittel"],
  },
];

/* Seeded progress state */
export const SEED_WRONG = ["q3", "q7", "q10"];
export const SEED_BOOKMARKS = ["q1", "q12"];

/* ---------------- Home ---------------- */
export interface TodayTask {
  id: string;
  section: Section;
  topic: string;
  title: string;
  time: string;
}

export const TODAY_TASKS: TodayTask[] = [
  { id: "t1", section: "BMS", topic: "Zellbiologie", title: "BMS: Zellbiologie — 25 Fragen", time: "~20 Min" },
  { id: "t2", section: "KFF", topic: "Figuren zusammensetzen", title: "KFF: Figuren — 15 Fragen", time: "~15 Min" },
  { id: "t3", section: "TV", topic: "Textverständnis", title: "TV: Simulation 1 — 12 Fragen", time: "35 Min" },
];

export const SECTION_PROGRESS: { section: Section; pct: number; status: string; statusColor: string }[] = [
  { section: "BMS", pct: 68, status: "Auf Kurs", statusColor: "#10B981" },
  { section: "KFF", pct: 45, status: "Achtung", statusColor: "#F59E0B" },
  { section: "TV", pct: 72, status: "Auf Kurs", statusColor: "#10B981" },
  { section: "SEK", pct: 81, status: "Stark", statusColor: "#10B981" },
];

export const WEEK_DAYS = [
  { label: "Mo", state: "done" as const },
  { label: "Di", state: "done" as const },
  { label: "Mi", state: "done" as const },
  { label: "Do", state: "done" as const },
  { label: "Fr", state: "done" as const },
  { label: "Sa", state: "today" as const },
  { label: "So", state: "future" as const },
];

/* ---------------- Lernplan ---------------- */
export interface PlanTask {
  label: string;
  count: string;
  state: "done" | "active" | "pending";
}

export interface PlanPhase {
  id: string;
  badge?: string;
  dates: string;
  title: string;
  desc: string;
  tasks?: PlanTask[];
  progress?: number;
  locked?: boolean;
  unlockHint?: string;
}

export const PLAN_PHASES: PlanPhase[] = [
  {
    id: "p1",
    badge: "Aktiv",
    dates: "Aug – Okt 2026 · Wochen 1–8",
    title: "BMS-Grundlagen & KFF-Einstieg",
    desc: "Wir schließen die größten Lücken in Bio, Chemie, Physik und Mathe. Parallel startest du mit einfachen KFF-Übungen — dein Einstufungstest hat hier Prioritäten gesetzt.",
    tasks: [
      { label: "Zellbiologie & Genetik", count: "120 Fragen", state: "done" },
      { label: "Organische Chemie", count: "80 Fragen", state: "active" },
      { label: "KFF-Figuren: Level 1–3", count: "60 Fragen", state: "pending" },
    ],
    progress: 35,
  },
  {
    id: "p2",
    dates: "Nov 2026 – Feb 2027 · Wochen 9–20",
    title: "BMS-Vertiefung & KFF-Intensiv",
    desc: "Vertiefung aller BMS-Themen auf MedAT-Niveau plus tägliches KFF-Training unter Zeitdruck.",
    locked: true,
    unlockHint: "Wird freigeschaltet, wenn Phase 1 zu 80 % abgeschlossen ist.",
  },
  {
    id: "p3",
    dates: "Mär – Jun 2027 · Wochen 21–30",
    title: "Mock Exams & Schwächen-Killer",
    desc: "Zweiwöchentliche Full-Mocks mit anschließender Fehleranalyse und gezieltem Nachtraining.",
    locked: true,
    unlockHint: "Wird freigeschaltet, wenn Phase 2 zu 80 % abgeschlossen ist.",
  },
  {
    id: "p4",
    dates: "Jun – Jul 2027 · Letzte 2 Wochen",
    title: "Letzte Repetition & Mental Preparation",
    desc: "Leichtes Volumen, hoher Fokus: Wiederholung markierter Fragen, Schlafroutine, Testtag-Simulation.",
    locked: true,
    unlockHint: "Wird am 21. Juni 2027 freigeschaltet.",
  },
];

/* ---------------- Mock Exams ---------------- */
export interface MockExam {
  id: string;
  title: string;
  premium: boolean;
  duration: string;
  sections: string;
  difficulty: string;
  bestFor: string;
}

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "m1",
    title: "Mini-Mock: BMS-Fokus",
    premium: false,
    duration: "60 Minuten",
    sections: "BMS only (40 Fragen)",
    difficulty: "Einstiegsniveau",
    bestFor: "Schnelle Übung zwischendurch",
  },
  {
    id: "m2",
    title: "Halber MedAT",
    premium: true,
    duration: "4 Stunden",
    sections: "BMS + KFF",
    difficulty: "Mittel",
    bestFor: "Wochenend-Simulation",
  },
  {
    id: "m3",
    title: "Voller MedAT — Standard",
    premium: true,
    duration: "8 Stunden",
    sections: "BMS + KFF + TV + SEK",
    difficulty: "MedAT-Niveau",
    bestFor: "Erste volle Simulation",
  },
  {
    id: "m4",
    title: "Voller MedAT — Intensiv",
    premium: true,
    duration: "8 Stunden",
    sections: "Alle Sektionen — härter als der echte Test",
    difficulty: "Schwerer als der MedAT",
    bestFor: "Letzte Woche vor dem Examen",
  },
];

export const MOCK_RESULTS = [
  { exam: "Mini-Mock BMS", date: "24.08.2026", total: "68 %", bms: "68 %", kff: "—", tv: "—", sek: "—", status: "Bestanden" as const },
  { exam: "Halber MedAT", date: "15.08.2026", total: "54 %", bms: "62 %", kff: "46 %", tv: "—", sek: "—", status: "Unter Ziel" as const },
];

/* ---------------- Statistiken ---------------- */
export const SCORE_MONTHS = ["Sep", "Okt", "Nov", "Dez", "Jän", "Feb", "Mär", "Apr", "Mai", "Jun"];
export const SCORE_SERIES: { key: Section; label: string; color: string; values: number[]; focus: string }[] = [
  { key: "BMS", label: "BMS", color: "#10B981", values: [42, 47, 50, 55, 58, 60, 63, 65, 66, 68], focus: "Fokus: Zellbiologie & Genetik" },
  { key: "KFF", label: "KFF", color: "#F59E0B", values: [35, 38, 41, 44, 47, 50, 49, 48, 46, 45], focus: "Fokus: Zahlenreihen" },
  { key: "TV", label: "TV", color: "#3B82F6", values: [50, 52, 55, 58, 61, 63, 66, 68, 70, 72], focus: "Fokus: Kernaussagen & Inferenz" },
  { key: "SEK", label: "SEK", color: "#8B5CF6", values: [55, 58, 62, 66, 70, 72, 75, 77, 80, 81], focus: "Fokus: Emotionen erkennen" },
];

export const TOPIC_BARS: { topic: string; pct: number }[] = [
  { topic: "Chemie: Atomaufbau", pct: 80 },
  { topic: "Zellbiologie", pct: 78 },
  { topic: "Humanbiologie", pct: 71 },
  { topic: "Genetik & Evolution", pct: 62 },
  { topic: "Physik: Mechanik", pct: 57 },
  { topic: "Ökologie", pct: 48 },
  { topic: "Chemie: Bindungen", pct: 44 },
];

export const TIME_SPLIT = [
  { section: "BMS", pct: 45, color: "#DC2626" },
  { section: "KFF", pct: 30, color: "#EF4444" },
  { section: "TV", pct: 15, color: "#FCA5A5" },
  { section: "SEK", pct: 10, color: "#FECACA" },
];

/* ============================================================
   Redesigned Home — mission-first information architecture
   ============================================================ */

export interface MissionTask {
  id: string;
  section: Section;
  title: string;
  meta: string;
  minutes: number;
  topic?: string;
}

export const MISSION_TASKS: MissionTask[] = [
  { id: "m1", section: "BMS", title: "BMS — Chemie", meta: "15 Fragen · Schwäche-Bereich", minutes: 20, topic: "Chemie: Bindungen" },
  { id: "m2", section: "KFF", title: "KFF — Zahlenreihen", meta: "10 Fragen", minutes: 15, topic: "Zahlenreihen" },
  { id: "m3", section: "TV", title: "TV — Simulation 1", meta: "12 Fragen · 35 Min.", minutes: 35, topic: "Textverständnis" },
  { id: "m4", section: "SEK", title: "SEK — Soziales Entscheiden", meta: "10 Fragen", minutes: 15, topic: "Soziales Entscheiden" },
];

export const READINESS = {
  overall: 72,
  delta: 6,
  sections: [
    { section: "BMS" as Section, pct: 78 },
    { section: "KFF" as Section, pct: 81 },
    { section: "TV" as Section, pct: 64 },
    { section: "SEK" as Section, pct: 69 },
  ],
  priority: "TV" as Section,
};

export interface ImproveArea {
  id: string;
  severity: "high" | "medium";
  title: string;
  pct: number;
  why: string;
  action: string;
  section: Section;
  topic?: string;
}

export const IMPROVE_AREAS: ImproveArea[] = [
  {
    id: "tv",
    severity: "high",
    title: "Textverständnis",
    pct: 61,
    why: "Du brauchst ~90 s pro Frage statt der Zielzeit von 60 s — die Kernaussage geht im Detaillesen unter.",
    action: "2 Passagen mit Skimming-Technik trainieren",
    section: "TV",
    topic: "Textverständnis",
  },
  {
    id: "chem",
    severity: "high",
    title: "Chemie",
    pct: 67,
    why: "8 deiner letzten 12 Fehler kamen aus Bindungslehre & Atomaufbau — die Konzepte sitzen noch nicht.",
    action: "Schlüsselkonzepte wiederholen + 15 Fragen üben",
    section: "BMS",
    topic: "Chemie: Bindungen",
  },
  {
    id: "sek",
    severity: "medium",
    title: "SEK — Soziales Entscheiden",
    pct: 71,
    why: "Bei mehrdeutigen Szenarien wählst du tendenziell die konfrontativste Option.",
    action: "10 SEK-Szenarien mit Begründungs-Analyse",
    section: "SEK",
    topic: "Soziales Entscheiden",
  },
];

export const CONTINUE_ITEMS = [
  {
    id: "c1",
    path: "Biologie → Genetik",
    title: "BMS — Genetik & Evolution",
    status: "Frage 19 von 30",
    pct: 63,
    cta: "Weitermachen",
    section: "BMS" as Section,
    topic: "Genetik & Evolution",
  },
  {
    id: "c2",
    path: "KFF → Figuren & Tabellen",
    title: "KFF — Figuren zusammensetzen",
    status: "Level 2 von 5",
    pct: 41,
    cta: "Üben",
    section: "KFF" as Section,
    topic: "Figuren zusammensetzen",
  },
  {
    id: "c3",
    path: "SEK → Emotionen",
    title: "SEK — Emotionen erkennen",
    status: "Fast geschafft",
    pct: 88,
    cta: "Abschließen",
    section: "SEK" as Section,
    topic: "Emotionen erkennen",
  },
];

export const PERF_WEEKS = ["KW 41", "KW 42", "KW 43", "KW 44", "KW 45", "KW 46", "KW 47", "KW 48"];

export const PERF_TRENDS: { key: string; label: string; unit: string; values: number[] }[] = [
  { key: "readiness", label: "Readiness", unit: "/100", values: [54, 57, 59, 62, 64, 67, 70, 72] },
  { key: "mock", label: "Mock-Score", unit: "%", values: [48, 55, 61, 58, 67, 72, 76, 78] },
  { key: "accuracy", label: "Trefferquote", unit: "%", values: [57, 60, 58, 63, 66, 64, 69, 71] },
  { key: "speed", label: "Tempo", unit: " F/Std", values: [22, 24, 25, 27, 26, 29, 31, 33] },
];

export const MOCK_SUMMARY = {
  avg: 78,
  best: 86,
  accuracy: 81,
  count: 5,
  recent: [
    { name: "Mini-Mock: BMS + KFF", date: "02.11.2026", score: 82, status: "bestanden" },
    { name: "Halber MedAT", date: "26.10.2026", score: 74, status: "bestanden" },
    { name: "Mini-Mock: BMS-Fokus", date: "19.10.2026", score: 68, status: "unter Ziel" },
  ],
};

export const PREP_PROGRESS: { section: Section; overall: number; items: { name: string; pct: number; topic?: string }[] }[] = [
  {
    section: "BMS",
    overall: 78,
    items: [
      { name: "Biologie", pct: 82, topic: "Zellbiologie" },
      { name: "Chemie", pct: 67, topic: "Chemie: Bindungen" },
      { name: "Physik", pct: 79, topic: "Physik: Mechanik" },
      { name: "Mathematik", pct: 84, topic: "Mathematik" },
    ],
  },
  {
    section: "KFF",
    overall: 81,
    items: [
      { name: "Figuren zusammensetzen", pct: 74, topic: "Figuren zusammensetzen" },
      { name: "Gedächtnis & Merkfähigkeit", pct: 83, topic: "Gedächtnis & Merkfähigkeit" },
      { name: "Zahlenreihen", pct: 58, topic: "Zahlenreihen" },
      { name: "Implikationen erkennen", pct: 77, topic: "Implikationen erkennen" },
    ],
  },
  {
    section: "TV",
    overall: 64,
    items: [
      { name: "Kernaussagen", pct: 66, topic: "Textverständnis" },
      { name: "Schlussfolgerungen", pct: 61, topic: "Textverständnis" },
    ],
  },
  {
    section: "SEK",
    overall: 69,
    items: [
      { name: "Emotionen erkennen", pct: 88, topic: "Emotionen erkennen" },
      { name: "Soziales Entscheiden", pct: 52, topic: "Soziales Entscheiden" },
    ],
  },
];

/* ---------------- Community ---------------- */
export interface Post {
  id: string;
  tab: "Diskussionen" | "Erfolgsgeschichten" | "Studienplatz-Updates" | "Hilfe";
  author: string;
  initials: string;
  color: string;
  time: string;
  title: string;
  preview: string;
  tags: string[];
  votes: number;
  answers: number;
}

export const POSTS: Post[] = [
  {
    id: "c1",
    tab: "Diskussionen",
    author: "Lena W.",
    initials: "LW",
    color: "#0F172A",
    time: "vor 2 Stunden",
    title: "Wie löst man KFF-Figuren am schnellsten?",
    preview:
      "Ich brauche für 10 Figuren-Fragen immer 15 Minuten. Das ist zu langsam für den MedAT. Hat jemand eine Strategie, die wirklich Zeit spart — besonders bei Rotationsaufgaben?",
    tags: ["KFF", "Strategie", "Zeitdruck"],
    votes: 24,
    answers: 12,
  },
  {
    id: "c2",
    tab: "Diskussionen",
    author: "Tobias R.",
    initials: "TR",
    color: "#DC2626",
    time: "vor 5 Stunden",
    title: "Chemie-Formelsammlung: Was muss wirklich sitzen?",
    preview:
      "Der BMS-Katalog ist riesig. Welche Formeln kommen gefühlt in jedem Jahrgang dran? Ich dachte an Stoffmenge, pH-Wert und Reaktionsgeschwindigkeit — fehlt was?",
    tags: ["BMS", "Chemie", "Formeln"],
    votes: 18,
    answers: 9,
  },
  {
    id: "c3",
    tab: "Diskussionen",
    author: "Amira K.",
    initials: "AK",
    color: "#8B5CF6",
    time: "gestern",
    title: "Lerngruppe Wien — wer ist dabei?",
    preview: "Suche 3–4 Leute für eine wöchentliche Mock-Session (Samstag Vormittag, Bibliothek MedUni Wien). Niveau: Phase 2. Bitte mit kurzer Vorstellung melden!",
    tags: ["Wien", "Lerngruppe", "Mock"],
    votes: 31,
    answers: 17,
  },
  {
    id: "c4",
    tab: "Erfolgsgeschichten",
    author: "Jonas M.",
    initials: "JM",
    color: "#10B981",
    time: "vor 3 Tagen",
    title: "Von 54 % auf 71 % in 8 Wochen — mein Protokoll",
    preview:
      "Ich habe im ersten Mock 54 % erreicht und fast aufgegeben. Dann: täglich 20 Min KFF, Fehlerjournal, ein Full-Mock pro Woche. Beim letzten Mock: 71 %. Hier ist, was wirklich den Unterschied gemacht hat …",
    tags: ["Motivation", "Protokoll"],
    votes: 87,
    answers: 34,
  },
  {
    id: "c5",
    tab: "Erfolgsgeschichten",
    author: "Sophie B.",
    initials: "SB",
    color: "#F59E0B",
    time: "vor 1 Woche",
    title: "Studienplatz in Innsbruck — Danke an diese Community",
    preview:
      "Letztes Jahr im Juli beim MedAT-Z angetreten, heute im ersten Semester Zahnmedizin. Die Probetests hier waren härter als der echte Test — genau das hat mich ruhig gemacht.",
    tags: ["Innsbruck", "MedAT-Z", "Erfolg"],
    votes: 142,
    answers: 51,
  },
  {
    id: "c6",
    tab: "Studienplatz-Updates",
    author: "MedAT Prep Team",
    initials: "MP",
    color: "#DC2626",
    time: "vor 1 Tag",
    title: "Anmeldung MedAT 2027: Fristen im Überblick",
    preview:
      "Internet-Anmeldung: voraussichtlich 1.–31. März 2027 · Testtag: voraussichtlich 9. Juli 2027 · Gebühr: 110 €. Alle Details und Links zu den vier Unis findet ihr in diesem Beitrag.",
    tags: ["Offiziell", "Fristen"],
    votes: 96,
    answers: 8,
  },
  {
    id: "c7",
    tab: "Studienplatz-Updates",
    author: "MedAT Prep Team",
    initials: "MP",
    color: "#DC2626",
    time: "vor 2 Wochen",
    title: "16.880 Anmeldungen für 2026 — was das für 2027 bedeutet",
    preview:
      "Die Anmeldezahlen steigen weiter leicht. Realistisch bleibt: Wer konstant über 65 % in den Full-Mocks liegt, hat in der Österreicher:innen-Quote sehr gute Karten.",
    tags: ["Offiziell", "Statistik"],
    votes: 73,
    answers: 12,
  },
];

/* ---------------- Shell ---------------- */
export interface Notification {
  id: string;
  kind: "streak" | "mock" | "reminder" | "community";
  title: string;
  body: string;
  time: string;
  unread: boolean;
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    kind: "streak",
    title: "Streak in Gefahr 🔥",
    body: "Noch 1 Einheit heute — dann hält dein 13-Tage-Streak.",
    time: "vor 25 Min",
    unread: true,
  },
  {
    id: "n2",
    kind: "mock",
    title: "Mock-Ergebnis da",
    body: "Mini-Mock BMS: 68 % — 4 Punkte über deinem Schnitt.",
    time: "vor 2 Std",
    unread: true,
  },
  {
    id: "n3",
    kind: "reminder",
    title: "Lern-Erinnerung",
    body: "Dein KFF-Block startet um 18:00. 15 Minuten reichen heute.",
    time: "vor 4 Std",
    unread: false,
  },
  {
    id: "n4",
    kind: "community",
    title: "Neue Antwort",
    body: "Lena W. hat auf „KFF-Figuren-Strategie“ geantwortet.",
    time: "gestern",
    unread: false,
  },
];

export const BADGES = [
  { id: "b1", label: "7-Tage-Streak", earned: true },
  { id: "b2", label: "100 Fragen", earned: true },
  { id: "b3", label: "Mock bestanden", earned: true },
  { id: "b4", label: "KFF-Stratege", earned: true },
  { id: "b5", label: "BMS-Meister", earned: false },
  { id: "b6", label: "Frühaufsteher", earned: false },
];

export const LEVELS = ["MedAT-Anfänger", "BMS-Experte", "KFF-Stratege", "MedAT-Champion"];
export const CURRENT_XP = 4820;
export const NEXT_LEVEL_XP = 6000;
