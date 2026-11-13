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
      "Internet-Anmeldung voraussichtlich von 1. bis 31. März 2027, Testtag voraussichtlich am Freitag, 9. Juli 2027, Teilnahmegebühr 110 €. Wichtig: Die Anmeldung ist nur mit gültigem Lichtbildausweis und rechtzeitiger Zahlung vollständig — erfahrungsgemäß brechen 4–6 % der Anmeldungen an Formalfehlern.",
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
    a: "Der MedAT 2027 findet voraussichtlich am Freitag, 9. Juli 2027 statt, österreichweit am selben Tag von ca. 8 bis 17 Uhr. Die Internet-Anmeldung läuft voraussichtlich vom 1. bis 31. März 2027 über medizinstudieren.at, die Teilnahmegebühr beträgt 110 Euro. Unser Countdown oben zählt live runter.",
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
    a: "Der Basis-Zugang ist dauerhaft kostenlos: 200 Übungsfragen, 1 vollständiger Probetest, individueller Lernplan und Community-Forum. Premium kostet 39 € pro Jahr (39 €/Jahr) und schaltet alle 5.000+ Fragen, didaktische Erklärungen, alle 4 Probetests und den Schwachstellen-Drill frei.",
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
  anchorPrice?: string;
  subtext?: string;
}

export const PRICING: PricingTier[] = [
  {
    id: "free",
    name: "Basis",
    tagline: "Sofort starten — 100 % gratis, ohne Kreditkarte.",
    monthly: 0,
    once: 0,
    yearly: 0,
    unit: "free",
    subtext: "Dauerhaft kostenlos · Keine Zahlungsdaten nötig",
    features: [
      "200 originale Testfragen (4 volle BMS-Themengebiete)",
      "1 vollständiger Probetest (Generalprobe #1 mit Zeiterfassung)",
      "Persönlicher Einstiegs-Lernplan & Setup",
      "Community-Forum & Lerngruppen für Wien, Graz, Innsbruck & Linz",
      "Vollwertige PWA-App für Smartphone, Tablet & Laptop",
    ],
    cta: "Kostenlos starten (0 €)",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Die #1 Komplettlösung für deinen MedAT-Studienplatz.",
    monthly: 39,
    once: 39,
    yearly: 39,
    unit: "year",
    anchorPrice: "Statt 1.500 € Kurs",
    badge: "🔥 MEISTGEWÄHLT · 97 % ERSPARNIS",
    subtext: "Nur 3,25 € / Monat · Volle 12 Monate Zugriff bis zur Prüfung",
    features: [
      "Alle 5.000+ Fragen (BMS, KFF, TV & SEK) — 100 % VMC-konform",
      "Schritt-für-Schritt-Lösungswege & Rechenmethoden zu jeder Frage",
      "4 vollständige Generalproben unter realem Testtag-Zeitdruck",
      "Intelligenter Fehler-Hub: Schließt gezielt deine Wissenslücken",
      "Alle interaktiven KFF-Generatoren (Zahlenfolgen, Figuren, Gedächtnis)",
      "SEK-Intensivmodule (Emotionen regulieren & erkennen)",
      "Echtzeit-Punkteprognose & Grenzwerte für Wien, Graz, Innsbruck & Linz",
      "Volle 12 Monate uneingeschränkter Zugriff (MedAT-H & MedAT-Z)",
    ],
    cta: "Jetzt Premium freischalten (39 €)",
    featured: true,
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
  { value: 4, suffix: "", label: "Testteile (BMS, KFF, TV, SEK)", aria: "Vier offizielle Testteile: BMS, KFF, TV und SEK" },
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
