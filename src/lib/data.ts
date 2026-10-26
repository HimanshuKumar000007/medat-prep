export interface ExamModule {
  id: string;
  code: string;
  name: string;
  weight: number;
  barColor: string;
  accent: string;
  accentSubtle: string;
  desc: string;
  topics: string[];
  icon: "molecule" | "puzzle" | "text" | "heart" | "wire";
}

export const MODULES_H: ExamModule[] = [
  {
    id: "bms",
    code: "BMS",
    name: "Basiskenntnistest für Medizinische Studien",
    weight: 40,
    barColor: "var(--color-bms)",
    accent: "#DC2626",
    accentSubtle: "#FEF2F2",
    desc: "Biologie, Chemie, Physik und Mathematik auf Matura-Niveau — das Fundament deines Gesamtscores.",
    topics: ["Biologie", "Chemie", "Physik", "Mathematik"],
    icon: "molecule",
  },
  {
    id: "kff",
    code: "KFF",
    name: "Kognitive Fähigkeiten & Fertigkeiten",
    weight: 40,
    barColor: "var(--color-kff)",
    accent: "#EF4444",
    accentSubtle: "#FEF2F2",
    desc: "Logik unter Zeitdruck: trainierbar wie ein Muskel — und genau hier holen die meisten Punkte.",
    topics: ["Figuren zusammensetzen", "Gedächtnis & Merkfähigkeit", "Zahlenfolgen", "Implikationen erkennen"],
    icon: "puzzle",
  },
  {
    id: "tv",
    code: "TV",
    name: "Textverständnis",
    weight: 10,
    barColor: "var(--color-tv)",
    accent: "#B45309",
    accentSubtle: "#FFF7ED",
    desc: "Wissenschaftliche Texte unter Zeitdruck lesen, Kernaussagen und Schlussfolgerungen sicher ableiten.",
    topics: ["Wissenschaftliche Texte", "Kernaussagen", "Schlussfolgerungen"],
    icon: "text",
  },
  {
    id: "sek",
    code: "SEK",
    name: "Sozial-emotionale Kompetenzen",
    weight: 10,
    barColor: "var(--color-sek)",
    accent: "#8B5CF6",
    accentSubtle: "#F5F3FF",
    desc: "Emotionen erkennen und soziale Entscheidungen bewerten — der Testteil, den viele unterschätzen.",
    topics: ["Emotionen erkennen", "Soziales Entscheiden"],
    icon: "heart",
  },
];

export const MODULES_Z: ExamModule[] = [
  MODULES_H[0],
  MODULES_H[1],
  MODULES_H[2],
  {
    id: "mf",
    code: "MF",
    name: "Manuelle Fertigkeiten",
    weight: 10,
    barColor: "var(--color-sek)",
    accent: "#8B5CF6",
    accentSubtle: "#F5F3FF",
    desc: "Drahtbiegen und Formen spiegeln: Feinmotorik unter Beobachtung — mit Checklisten trainierbar.",
    topics: ["Drahtbiegen", "Formen spiegeln"],
    icon: "wire",
  },
];

export const TICKER_ITEMS = [
  "Biologie",
  "Chemie",
  "Physik",
  "Mathematik",
  "Figuren zusammensetzen",
  "Gedächtnis & Merkfähigkeit",
  "Zahlenfolgen",
  "Implikationen erkennen",
  "Textverständnis",
  "Emotionen erkennen",
  "Soziales Entscheiden",
  "Drahtbiegen",
  "Formen spiegeln",
];

export interface QuizQuestion {
  module: string;
  moduleColor: string;
  moduleBg: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    module: "BMS · Biologie",
    moduleColor: "#DC2626",
    moduleBg: "#FEF2F2",
    question: "Welches Molekül ist primär für den Sauerstofftransport im menschlichen Blut verantwortlich?",
    options: ["Insulin", "Hämoglobin", "Cholesterin", "Adrenalin"],
    correct: 1,
    explanation:
      "Hämoglobin in den Erythrozyten bindet O₂ reversibel. Insulin reguliert den Blutzucker, Cholesterin ist ein Membranlipid, Adrenalin ein Stresshormon.",
  },
  {
    module: "KFF · Zahlenfolgen",
    moduleColor: "#EF4444",
    moduleBg: "#FEF2F2",
    question: "2 · 6 · 12 · 20 · 30 · … — Welche Zahl setzt die Folge fort?",
    options: ["36", "40", "42", "44"],
    correct: 2,
    explanation:
      "Die Differenzen wachsen um 2 (4, 6, 8, 10, 12) — also n·(n+1). Nach 30 kommt 42. Im Test hast du dafür ~45 Sekunden.",
  },
  {
    module: "BMS · Chemie",
    moduleColor: "#DC2626",
    moduleBg: "#FEF2F2",
    question: "Welcher pH-Wert kennzeichnet eine neutrale wässrige Lösung bei 25 °C?",
    options: ["0", "5", "7", "14"],
    correct: 2,
    explanation:
      "Bei 25 °C gilt: pH 7 = neutral ([H₃O⁺] = 10⁻⁷ mol/L). pH 0 ist stark sauer, pH 14 stark basisch — klassische Fangfragen-Kandidaten.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  metric: string;
  rotate: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ich habe drei Vorbereitungskurse verglichen — und mich dann für den KI-Lernplan entschieden. Er hat mir gezeigt, dass ich KFF komplett vernachlässigt habe. Nach acht Wochen: +11 Prozentpunkte.",
    name: "Lena K.",
    detail: "MedUni Wien · Humanmedizin, 1. Semester",
    metric: "74,8 % beim MedAT",
    rotate: "md:-rotate-2",
  },
  {
    quote:
      "Die Probetests unter Echtbedingungen waren der Gamechanger. Am Testtag selbst hat sich alles wie eine Wiederholung angefühlt — sogar die Pause um 11 Uhr.",
    name: "Jakob R.",
    detail: "MedUni Innsbruck · Humanmedizin",
    metric: "Top-12 % im Ranking",
    rotate: "md:rotate-1 md:translate-y-6",
  },
  {
    quote:
      "Für MedAT-Z gibt es kaum Material. Die Drahtbiegen-Checklisten und Formen-spiegeln-Druckvorlagen waren Gold wert. Und SEK-Bonus für alle: Das Emotionen-Training wirkt wirklich.",
    name: "Selin A.",
    detail: "JKU Linz · Zahnmedizin",
    metric: "Platz 34 von 412",
    rotate: "md:-rotate-1",
  },
];

export interface Article {
  index: string;
  category: string;
  title: string;
  meta: string;
  summary: string;
}

export const ARTICLES: Article[] = [
  {
    index: "01",
    category: "Termine",
    title: "MedAT 2027: Alle Fristen, Gebühren und Termine im Überblick",
    meta: "Aktualisiert Jänner 2027 · 6 Min. Lesezeit",
    summary:
      "Internet-Anmeldung von 1. bis 31. März 2027, Testtag am Freitag, 2. Juli 2027, Teilnahmegebühr 110 €. Wichtig: Die Anmeldung ist nur mit gültigem Lichtbildausweis und rechtzeitiger Zahlung vollständig — erfahrungsgemäß brechen 4–6 % der Anmeldungen an Formalfehlern.",
  },
  {
    index: "02",
    category: "Strategie",
    title: "Warum KFF deine schnellsten Punkte bringt — und wie du sie trainierst",
    meta: "Strategie-Guide · 8 Min. Lesezeit",
    summary:
      "KFF macht 40 % des Gesamtscores aus und ist der am schnellsten trainierbare Teil: Zahlenfolgen und Implikationen folgen wiederkehrenden Mustern. Wer 12 Wochen lang täglich 25 Minuten trainiert, verbessert sich im Median um 8–14 Prozentpunkte — deutlich mehr als durch reinen BMS-Fleiß.",
  },
  {
    index: "03",
    category: "Daten",
    title: "16.880 Anmeldungen, 1.950 Plätze: Was die Quoten wirklich bedeuten",
    meta: "Datenanalyse · 5 Min. Lesezeit",
    summary:
      "2026 haben sich 16.880 Kandidat:innen angemeldet, 13.248 sind tatsächlich angetreten. Über die 75-%-Quote für österreichische Maturant:innen konkurrierst du real mit rund 7–8 Personen pro Platz. Entscheidend ist nicht die Absolute Zahl, sondern dein relativer Rang — und der ist trainierbar.",
  },
];

export interface Faq {
  id: string;
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    id: "q1",
    q: "Was ist der MedAT genau?",
    a: "Der MedAT (Medizin-Aufnahmetest) ist das standardisierte Auswahlverfahren für alle Studienplätze in Human- und Zahnmedizin an den Medizinischen Universitäten Wien, Innsbruck und Graz sowie der Medizinischen Fakultät der JKU Linz. Er besteht aus dem Basiskenntnistest (BMS), den Kognitiven Fähigkeiten (KFF), Textverständnis (TV) und Sozial-emotionalen Kompetenzen (SEK) — bei Zahnmedizin aus manuellen Fertigkeiten statt SEK-Entscheidungsteilen.",
  },
  {
    id: "q2",
    q: "Wann findet der nächste MedAT statt?",
    a: "Der MedAT 2027 findet am Freitag, 2. Juli 2027 statt, österreichweit am selben Tag von ca. 8 bis 17 Uhr. Die Internet-Anmeldung läuft voraussichtlich vom 1. bis 31. März 2027 über medizinstudieren.at, die Teilnahmegebühr beträgt 110 Euro. Unser Countdown oben zählt live runter.",
  },
  {
    id: "q3",
    q: "Wie lange dauert der MedAT und wie ist er gewichtet?",
    a: "Die reine Testzeit beträgt rund 4,5 Stunden. BMS und KFF machen jeweils 40 % des Gesamtergebnisses aus, Textverständnis und SEK jeweils 10 %. Deshalb gilt: KFF zu vernachlässigen ist der häufigste — und teuerste — Vorbereitungsfehler.",
  },
  {
    id: "q4",
    q: "Kann ich mich ohne Kurs auf den MedAT vorbereiten?",
    a: "Ja — genau dafür ist MedAT Prep gebaut. Das geführte 5-Schritte-Setup erstellt deinen maßgeschneiderten KI-Lernplan in unter 2 Minuten, der 24/7 KI-Tutor liefert Schritt-für-Schritt-Erklärungen, und 5.000+ Übungsfragen ersetzen den teuren Präsenzkurs. Viele unserer Top-Kandidat:innen haben ausschließlich digital gelernt.",
  },
  {
    id: "q5",
    q: "Was kostet MedAT Prep?",
    a: "Der Basis-Zugang ist dauerhaft kostenlos: 200 Übungsfragen, 1 vollständiger Probetest, individueller KI-Lernplan und Community-Forum. Premium kostet 39 € pro Jahr (umgerechnet nur ca. 3,25 € pro Monat) und schaltet alle 5.000+ Fragen, den 24/7 MedAT KI-Tutor, alle 4 Probetests, den adaptiven KI-Lernplan und den Schwachstellen-Drill frei. Intensiv (349 € einmalig) ergänzt 1:1-Betreuung bis zum Testtag.",
  },
  {
    id: "q6",
    q: "Funktioniert MedAT Prep für Human- und Zahnmedizin?",
    a: "Ja. Beim Onboarding wählst du MedAT-H oder MedAT-Z — Lernplan, Probetests und Statistiken passen sich an. Für Zahnmedizin trainierst du zusätzlich Drahtbiegen und Formen spiegeln mit Schritt-für-Schritt-Anleitungen, Druckvorlagen und Bewertungs-Checklisten nach Originalkriterien.",
  },
  {
    id: "q7",
    q: "Wie funktioniert der adaptive Lernplan?",
    a: "Das System analysiert deine bearbeiteten Übungsaufgaben nach Themen und Fehlermustern. Daraus strukturiert es deinen Lernplan übersichtlich nach Prioritäten, damit du Wissenslücken gezielt vor dem Testtag schließt.",
  },
];

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  once: number;
  yearly?: number;
  unit: "year" | "month" | "once" | "free";
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

export const PRICING: PricingTier[] = [
  {
    id: "free",
    name: "Basis",
    tagline: "Starte heute — ohne Kreditkarte.",
    monthly: 0,
    once: 0,
    yearly: 0,
    unit: "free",
    features: [
      "200 kostenlose Fragen (4 volle BMS-Kapitel)",
      "1 vollständiger Probetest (Generalprobe #1)",
      "Persönlicher Lernplan & Vorbereitungs-Setup",
      "Community-Forum & Lerngruppen",
    ],
    cta: "Kostenlos starten",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Voller Zugang für das gesamte Vorbereitungsjahr.",
    monthly: 39,
    once: 39,
    yearly: 39,
    unit: "year",
    features: [
      "Alle 5.000+ Fragen (BMS, KFF, TV & SEK)",
      "Didaktische Lernhilfe: 24/7 Erklärungen & Rechenwege",
      "Adaptiver Lernplan, wöchentlich aktualisiert",
      "4 Probetests unter Echtbedingungen",
      "SEK- & KFF-Intensivtraining",
      "Gezieltes Schwachstellen-Training (Fehler-Hub)",
      "Historische Grenzwerte & Punkte-Vergleich",
      "Für MedAT-H und MedAT-Z",
      "Volle 12 Monate Zugriff (nur 3,25 € / Monat)",
    ],
    cta: "Premium wählen",
    featured: true,
    badge: "Am beliebtesten",
  },
  {
    id: "intensiv",
    name: "Intensiv",
    tagline: "1:1-Betreuung bis zum Testtag.",
    monthly: 349,
    once: 349,
    unit: "once",
    features: [
      "Alles aus Premium",
      "6 × 1:1-Session mit MedAT-Coach",
      "Persönliche Lernplan-Reviews",
      "Mündliche Testtag-Simulation",
      "Prioritäts-Support (< 4 h Antwort)",
    ],
    cta: "Intensiv anfragen",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  aria: string;
  decimals?: number;
}

export const STATS: Stat[] = [
  { value: 16880, suffix: "", label: "Anmeldungen MedAT 2026", aria: "16.880 Anmeldungen beim MedAT 2026" },
  { value: 1950, suffix: "", label: "Studienplätze gesamt", aria: "1.950 Studienplätze in Human- und Zahnmedizin" },
  { value: 5000, suffix: "+", label: "Fragen nach Stichwortkatalog", aria: "Über 5.000 Übungsfragen nach offiziellem Stichwortkatalog" },
  { value: 4.9, suffix: "/5", label: "aus 800+ Bewertungen", aria: "4,9 von 5 Sternen aus über 800 Bewertungen", decimals: 1 },
];

export const DROPDOWN_ITEMS = [
  { label: "Examens-Struktur", href: "#ueber-medat", desc: "BMS · KFF · TV · SEK" },
  { label: "BMS-Themen", href: "#ueber-medat", desc: "Bio, Chemie, Physik, Mathe" },
  { label: "KFF-Training", href: "#uebungsfragen", desc: "Logik unter Zeitdruck" },
  { label: "SEK-Modul", href: "#ueber-medat", desc: "Sozial-emotionale Kompetenzen" },
  { label: "Wichtige Termine", href: "#countdown", desc: "Testtag & Anmeldung" },
  { label: "Quoten & Kontingente", href: "#quoten", desc: "75 / 20 / 5 geregelt" },
];

export const NAV_LINKS = [
  { label: "Lernplan", href: "#lernplan" },
  { label: "Übungsfragen", href: "#uebungsfragen" },
  { label: "Probetests", href: "#probetests" },
  { label: "Blog", href: "/blog" },
  { label: "Über uns", href: "/about" },
  { label: "Kontakt", href: "/contact" },
];
