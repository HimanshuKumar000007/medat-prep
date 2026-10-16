import {
  CHAPTER_CATALOG,
  type ContentSource,
  type MedATChapter,
  type QuestionDifficulty,
} from "../content/medat/repository";
import {
  MEDAT_SECTIONS,
  type ExamType,
  type SectionCode,
  type TargetUniversity,
} from "../content/medat/config";
import { ALL_FRONTEND_QUESTIONS } from "../data/questions";

export type Difficulty = QuestionDifficulty;
export type Section = SectionCode;
export type PracticeSection = SectionCode;
export type PracticeStatus = "not_started" | "in_progress" | "needs_review" | "mastered";

export const CHAPTER_MASTERY_THRESHOLD = 0.8; // 80% accuracy needed for chapter mastery
export const MASTERY_THRESHOLD = 0.8;

export type SetTimingMode = "untimed" | "light-timed" | "timed";

export interface PracticeSet {
  id: string;
  chapterId: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  mode: SetTimingMode;
  questionCount: number;
  focus: string;
  targetAccuracy?: number;
  section?: PracticeSection;
}

export interface Chapter extends MedATChapter {
  subjectId: string;
  totalEstimatedCount: number;
}

export interface SubjectGroup {
  id: string;
  section: PracticeSection;
  title: string;
  subtitle: string;
  description: string;
  chapterIds: string[];
  totalEstimatedCount: number;
}

export interface NormalizedQuestion {
  id: string;
  exam: "MEDAT-H" | "MEDAT-Z" | "BOTH";
  section: PracticeSection;
  subjectId: string;
  chapterId: string;
  practiceSetId?: string;
  setOrder?: number;
  topic: string;
  concept?: string;
  passage?: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  tags: string[];
  source: ContentSource;
  version: string;
  fzData?: any;
  zfData?: any;
  wfData?: any;
  gmData?: any;
  gmCardData?: any;
  gmAllCards?: any;
  ieData?: any;
  erData?: any;
  eeData?: any;
  seData?: any;
}

/* =================================================================
   Canonical Subject & Chapter Catalog for MEDAT Preparation
   ================================================================= */

export const SUBJECTS: SubjectGroup[] = [
  // --- BMS Subjects ---
  {
    id: "bio",
    section: "BMS",
    title: "Biologie",
    subtitle: "Die 9 offiziellen BMS-Themenbereiche (40 Fragen)",
    description: "Offizieller MedAT-Stichwortkatalog: Zellbiologie, Anatomie/Physiologie, Frühentwicklung, Genetik, Humangenetik, Evolution, Ökologie und Immunbiologie.",
    chapterIds: [
      "bio-01-zelle",
      "bio-02-koerper",
      "bio-03-fruehentwicklung",
      "bio-04-genetik",
      "bio-05-molgen",
      "bio-06-stoffwechsel",
      "bio-07-herzkreislauf",
      "bio-08-atmung",
      "bio-09-nervensystem",
    ],
    totalEstimatedCount: 1125,
  },
  {
    id: "chem",
    section: "BMS",
    title: "Chemie",
    subtitle: "Atombau, Bindungen, Säuren/Basen, Stöchiometrie & Organik (24 Fragen)",
    description: "Allgemeine, anorganische und organische Chemie für medizinische Studiengänge (13 offizielle Kapitel).",
    chapterIds: [
      "chem-01-atombau",
      "chem-02-strahlung",
      "chem-03-gase",
      "chem-04-bindungen",
      "chem-05-stoechiometrie",
      "chem-06-gleichgewicht",
      "chem-07-elemente",
      "chem-08-saeuren-basen",
      "chem-09-redox",
      "chem-10-organik",
      "chem-11-naturstoffe",
      "chem-12-integriert",
      "chem-13-simulation",
    ],
    totalEstimatedCount: 1625,
  },
  {
    id: "phys",
    section: "BMS",
    title: "Physik",
    subtitle: "Die 7 offiziellen VMC-Themenbereiche (18 Fragen)",
    description: "Größen & Einheiten, Mechanik, Schwingungen & Wellen, Wärmelehre, Elektrizität, Optik und Atomphysik nach österreichischem Prüfungsstandard.",
    chapterIds: [
      "phys-01-groessen-einheiten",
      "phys-02-mechanik",
      "phys-03-schwingungen-wellen",
      "phys-04-waermelehre",
      "phys-05-elektrizitaet",
      "phys-06-optik",
      "phys-07-atom-kernphysik",
    ],
    totalEstimatedCount: 875,
  },
  {
    id: "math",
    section: "BMS",
    title: "Mathematik",
    subtitle: "Zehnerpotenzen, Algebra, Geometrie, Einheiten, Funktionen & Vektorrechnung (12 Fragen)",
    description: "Die 6 offiziellen VMC-Mathematik-Themen: Zehnerpotenzen, Algebra, Geometrie, Einheiten, Funktionen und Vektorrechnung ohne Taschenrechner.",
    chapterIds: [
      "math-01-zehnerpotenzen",
      "math-02-algebra",
      "math-03-geometrie",
      "math-04-einheiten",
      "math-05-funktionen",
      "math-06-vektorrechnung",
    ],
    totalEstimatedCount: 450,
  },

  // --- KFF Task Groups ---
  {
    id: "kff-fig",
    section: "KFF",
    title: "Figuren zusammensetzen (FZ)",
    subtitle: "2D-Formen, Schnitte & Zerlegungen (15 Aufgaben in 20 Min)",
    description: "Mentale Rotation und räumliches Vorstellungsvermögen unter Zeitdruck.",
    chapterIds: ["kff-fig-l1"],
    totalEstimatedCount: 320,
  },
  {
    id: "kff-num",
    section: "KFF",
    title: "Zahlenfolgen (ZF)",
    subtitle: "Arithmetische & geometrische Reihen (10 Aufgaben in 15 Min)",
    description: "Mustererkennung und schnelle mathematische Verknüpfungen.",
    chapterIds: ["kff-num-arith"],
    totalEstimatedCount: 280,
  },
  {
    id: "kff-wf",
    section: "KFF",
    title: "Wortflüssigkeit (WF)",
    subtitle: "MedAT-orientierte Simulationen: 15 Aufgaben in 20 Minuten",
    description: "MedAT-orientierte WF-Simulationen unter realistischen Prüfungsbedingungen: Schnelle lexikalische Rekonstruktion aus ungeordneten Buchstabenketten und Bestimmung des gesuchten Anfangsbuchstabens.",
    chapterIds: ["kff-wf-basic"],
    totalEstimatedCount: 75,
  },
  {
    id: "kff-mem",
    section: "KFF",
    title: "Gedächtnis & Merkfähigkeit (GM)",
    subtitle: "MedAT-orientierte Simulationen mit Allergieausweisen (8 Min Merkphase · 25 Fragen in 15 Min)",
    description: "8 Allergieausweise (64 Informationseinheiten) in 8 Minuten ohne Notizen einprägen, gefolgt von 25 Abfragefragen in 15 Minuten.",
    chapterIds: ["kff-mem-pass"],
    totalEstimatedCount: 125,
  },
  {
    id: "kff-imp",
    section: "KFF",
    title: "Implikationen erkennen (IE) [Nur MedAT-H]",
    subtitle: "Formale Logik & Syllogismen (10 Aufgaben in 10 Min)",
    description: "Sicheres Ableiten von logischen Konsequenzen aus formalen Prämissen.",
    chapterIds: ["kff-imp-syll"],
    totalEstimatedCount: 240,
  },

  // --- TV Modules (MedAT-H only) ---
  {
    id: "tv-main",
    section: "TV",
    title: "Textverständnis (TV) [Nur MedAT-H]",
    subtitle: "Lesekompetenz, Kernaussagen & logische Schlussfolgerungen (12 Fragen in 35 Min)",
    description: "Komplexe Texte systematisch erfassen, Kernaussagen erkennen und Informationen logisch aus dem Text ableiten.",
    chapterIds: ["tv-scipass"],
    totalEstimatedCount: 60,
  },

  // --- SEK Modules ---
  {
    id: "sek-emo-rec",
    section: "SEK",
    title: "Emotionen erkennen (EE)",
    subtitle: "MedAT-orientierte Simulationen (14 Aufgaben in 21 Min)",
    description: "MedAT-orientierte Simulationen: 14 Aufgaben in 21 Minuten. Einschätzung der Wahrscheinlichkeit von 5 Emotionen anhand realistischer Personen- und Situationsbeschreibungen.",
    chapterIds: ["sek-rec-face"],
    totalEstimatedCount: 70,
  },
  {
    id: "sek-emo-reg",
    section: "SEK",
    title: "Emotionen regulieren (ER)",
    subtitle: "Selbstregulation & Bewältigungsstrategien (12 Aufgaben in 18 Min)",
    description: "Bewertung von Handlungsstrategien zum produktiven Umgang mit emotionalen Belastungen.",
    chapterIds: ["sek-reg-stress"],
    totalEstimatedCount: 140,
  },
  {
    id: "sek-soc-dec",
    section: "SEK",
    title: "Soziales Entscheiden (SE)",
    subtitle: "Handlungsprioritäten in ethischen Dilemmata (14 Aufgaben in 21 Min)",
    description: "Bewertung von Handlungsoptionen nach deontologischen und empathischen Kriterien.",
    chapterIds: ["sek-dec-ethics"],
    totalEstimatedCount: 170,
  },

  // --- MF Modules (MedAT-Z only) ---
  {
    id: "mf-wire",
    section: "MF",
    title: "Drahtbiegen (DB) [Nur MedAT-Z]",
    subtitle: "Biegetechnik & Millimetertoleranzen (2 Formen in 49 Min)",
    description: "Manuelle Präzision beim Biegen orthodontischer Drähte nach exakter Vorlage.",
    chapterIds: ["mf-wire-tech"],
    totalEstimatedCount: 40,
  },
  {
    id: "mf-mirror",
    section: "MF",
    title: "Formen spiegeln (FS) [Nur MedAT-Z]",
    subtitle: "Achsenspiegelung & Rastergenauigkeit (15 Aufgaben in 15 Min)",
    description: "Exaktes und zügiges Spiegeln geometrischer Figuren an diversen Achsen.",
    chapterIds: ["mf-mirror-symm"],
    totalEstimatedCount: 80,
  },
];

export const CHAPTER_ALIASES: Record<string, string> = {
  "bio-cell": "bio-01-zelle",
  "bio-human": "bio-02-koerper",
  "bio-gen": "bio-04-genetik",
  "bio-06-humangen": "bio-04-genetik",
  "bio-07-evolution": "bio-01-zelle",
  "bio-08-oekologie": "bio-01-zelle",
  "bio-09-immun": "bio-02-koerper",
  "chem-atom": "chem-01-atombau",
  "chem-bonds": "chem-04-bindungen",
  "chem-acids": "chem-08-saeuren-basen",
  "phys-mech": "phys-02-mechanik",
  "phys-therm": "phys-04-waermelehre",
  "phys-02-wellen-optik": "phys-03-schwingungen-wellen",
  "kff-num": "kff-num-arith",
  "kff-num-l1": "kff-num-arith",
  "kff-wf": "kff-wf-basic",
  "kff-wf-sim": "kff-wf-basic",
  "kff-mem": "kff-mem-pass",
  "kff-mem-sim": "kff-mem-pass",
  "kff-imp": "kff-imp-syll",
  "kff-imp-sim": "kff-imp-syll",
};

export function resolveChapterId(id: string): string {
  return CHAPTER_ALIASES[id] || id;
}

export function getSectionFromChapterId(id: string): PracticeSection {
  const resolved = resolveChapterId(id);
  const ch = CHAPTERS[resolved] || CHAPTERS[id];
  if (ch?.section) return ch.section;
  if (
    resolved.startsWith("bio-") ||
    resolved.startsWith("chem-") ||
    resolved.startsWith("phys-") ||
    resolved.startsWith("math-")
  ) {
    return "BMS";
  }
  if (resolved.toLowerCase().startsWith("tv-")) return "TV";
  if (
    resolved.startsWith("kff-") ||
    resolved.startsWith("fz-") ||
    resolved.startsWith("zf-") ||
    resolved.startsWith("wf-") ||
    resolved.startsWith("gm-") ||
    resolved.startsWith("ie-")
  ) {
    return "KFF";
  }
  if (
    resolved.startsWith("sek-") ||
    resolved.startsWith("ee-") ||
    resolved.startsWith("er-") ||
    resolved.startsWith("se-")
  ) {
    return "SEK";
  }
  if (resolved.startsWith("mf-")) return "MF";
  return "BMS";
}

export function getSectionFromQuestionId(id: string, questionsList?: NormalizedQuestion[]): PracticeSection {
  const baseId = id.replace(/-s\d+-\d+$/, "");
  if (questionsList) {
    const q = questionsList.find((item) => item.id === id || item.id === baseId);
    if (q?.section) return q.section;
  }
  if (
    baseId.startsWith("bio-") ||
    baseId.startsWith("chem-") ||
    baseId.startsWith("phys-") ||
    baseId.startsWith("math-")
  ) {
    return "BMS";
  }
  if (baseId.toLowerCase().startsWith("tv-") || baseId.toLowerCase().startsWith("tv_")) return "TV";
  if (
    baseId.startsWith("kff-") ||
    baseId.startsWith("fz-") ||
    baseId.startsWith("zf-") ||
    baseId.startsWith("wf-") ||
    baseId.startsWith("gm-") ||
    baseId.startsWith("ie-")
  ) {
    return "KFF";
  }
  if (
    baseId.startsWith("sek-") ||
    baseId.startsWith("ee-") ||
    baseId.startsWith("er-") ||
    baseId.startsWith("se-")
  ) {
    return "SEK";
  }
  if (baseId.startsWith("mf-")) return "MF";
  return "BMS";
}

export function getChapterFromQuestionId(id: string, questionsList?: NormalizedQuestion[]): string {
  const baseId = id.replace(/-s\d+-\d+$/, "");
  if (questionsList) {
    const q = questionsList.find((item) => item.id === id || item.id === baseId);
    if (q?.chapterId) return resolveChapterId(q.chapterId);
  }
  if (baseId.startsWith("bio-01")) return "bio-01-zelle";
  if (baseId.startsWith("bio-02")) return "bio-02-koerper";
  if (baseId.startsWith("bio-03")) return "bio-03-fruehentwicklung";
  if (baseId.startsWith("bio-04")) return "bio-04-genetik";
  if (baseId.startsWith("bio-05")) return "bio-05-molgen";
  if (baseId.startsWith("bio-06")) return "bio-06-stoffwechsel";
  if (baseId.startsWith("bio-07")) return "bio-07-herzkreislauf";
  if (baseId.startsWith("bio-08")) return "bio-08-atmung";
  if (baseId.startsWith("bio-09")) return "bio-09-nervensystem";
  if (baseId.startsWith("fz-") || baseId.startsWith("kff-fig")) return "kff-fig-l1";
  if (baseId.startsWith("zf-") || baseId.startsWith("kff-num")) return "kff-num-arith";
  if (baseId.startsWith("wf-") || baseId.startsWith("kff-wf")) return "kff-wf-basic";
  if (baseId.startsWith("gm-") || baseId.startsWith("kff-mem")) return "kff-mem-pass";
  if (baseId.startsWith("ie-") || baseId.startsWith("kff-imp")) return "kff-imp-syll";
  if (baseId.toLowerCase().startsWith("tv-")) return "tv-scipass";
  if (baseId.startsWith("ee-") || baseId.startsWith("sek-rec")) return "sek-rec-face";
  if (baseId.startsWith("er-") || baseId.startsWith("sek-reg")) return "sek-reg-stress";
  if (baseId.startsWith("se-") || baseId.startsWith("sek-dec")) return "sek-dec-ethics";
  if (baseId.startsWith("mf-wire")) return "mf-wire-tech";
  if (baseId.startsWith("mf-mirror")) return "mf-mirror-symm";
  return "bio-01-zelle";
}

export const CHAPTERS: Record<string, Chapter> = CHAPTER_CATALOG.reduce((acc, ch) => {
  acc[ch.id] = {
    ...ch,
    subjectId: ch.subtestId,
    totalEstimatedCount: 80,
  };
  return acc;
}, {} as Record<string, Chapter>);

// Populate aliases so old references resolve gracefully without crashing
Object.entries(CHAPTER_ALIASES).forEach(([alias, targetId]) => {
  if (CHAPTERS[targetId] && !CHAPTERS[alias]) {
    CHAPTERS[alias] = {
      ...CHAPTERS[targetId],
      id: alias,
    };
  }
});

/**
 * Generates 5 canonical progressive practice sets / simulations for a chapter or test area
 */
export function generateSetsForChapter(chapterId: string): PracticeSet[] {
  const chapter = CHAPTERS[chapterId];
  const title = chapter ? chapter.title : "Themen-Übung";

  // Dedicated TV (Textverständnis) 12-Fragen / 35-Minuten Simulationen
  if (chapterId === "tv-scipass" || chapter?.section === "TV") {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Textverständnis",
        subtitle: "4–5 Texte · 12 Fragen · 35 Min.",
        description: "Vollständige Prüfungssimulation mit gemischten Fragetypen: Kernaussagen, Details & Schlussfolgerungen.",
        mode: "timed",
        questionCount: 12,
        focus: "Kernaussagen, Details & Schlussfolgerungen",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Textverständnis",
        subtitle: "4–5 Texte · 12 Fragen · 35 Min.",
        description: "Vollständige Prüfungssimulation: Kausale Zuordnungen, Inferenz & Textimplikationen unter Zeitlimit.",
        mode: "timed",
        questionCount: 12,
        focus: "Kausalanalyse, Inferenz & Textimplikationen",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Textverständnis",
        subtitle: "4–5 Texte · 12 Fragen · 35 Min.",
        description: "Vollständige Prüfungssimulation: Komplexe Wirkungsgefüge, Hypothesen & methodische Versuchsdesigns.",
        mode: "timed",
        questionCount: 12,
        focus: "Wirkungsgefüge, Hypothesen & Methodik",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Textverständnis",
        subtitle: "4–5 Texte · 12 Fragen · 35 Min.",
        description: "Vollständige Prüfungssimulation: Widersprüche erkennen, Textbezüge & Negativabgleich.",
        mode: "timed",
        questionCount: 12,
        focus: "Widersprüche erkennen & Negativ-Identifikation",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Textverständnis",
        subtitle: "4–5 Texte · 12 Fragen · 35 Min.",
        description: "Finale MedAT-Generalprobe: Authentisches Testniveau unter realistischen Prüfungsbedingungen.",
        mode: "timed",
        questionCount: 12,
        focus: "Finale MedAT-Generalprobe (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated FZ (Figuren zusammensetzen) 15-Aufgaben / 20-Minuten Simulationen
  if (chapterId === "kff-fig-l1" || chapterId === "kff-fig") {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Authentische MedAT-Prüfungssimulation: Schnittmuster, Kantenabgleich & mentale 2D-Rotation (~80 s pro Aufgabe).",
        mode: "timed",
        questionCount: 15,
        focus: "Schnittmuster, Kantenabgleich & Mentale Rotation",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Authentische MedAT-Prüfungssimulation: Dreieckszerlegungen, Hypotenusen-Filter & Winkelanalyse.",
        mode: "timed",
        questionCount: 15,
        focus: "Dreieckszerlegungen & Hypotenusen-Abgleich",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Authentische MedAT-Prüfungssimulation: Trapeze, Vierecke & Parallelogramme unter Zeitdruck.",
        mode: "timed",
        questionCount: 15,
        focus: "Vierecke, Trapeze & Winkelanalyse",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Authentische MedAT-Prüfungssimulation: Mehrteilige Polygone & 80-Sekunden-Ausschlussverfahren.",
        mode: "timed",
        questionCount: 15,
        focus: "Mehrteilige Polygone & Ausschlussverfahren",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Finale MedAT-Generalprobe: Höchste Zeitdruck-Stufe mit komplexen Zerlegungen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Finale Generalprobe (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-6`,
        chapterId,
        order: 6,
        title: "Simulation 6 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Meister-Simulation: Extrem-Geometrien, asymmetrische Verbünde & knifflige Fangfragen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Extrem-Geometrien & Fangfragen (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-7`,
        chapterId,
        order: 7,
        title: "Simulation 7 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Elite-Simulation: Nicht-konvexe Polygone, Scheren-Schnitte & Feinkanten-Diskrimination (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Nicht-konvexe Polygone & Feinkanten (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-8`,
        chapterId,
        order: 8,
        title: "Simulation 8 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Grandmaster-Simulation: Diagonalschnitte, Schräganker & Symmetriebruch (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Diagonalschnitte & Schräganker (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-9`,
        chapterId,
        order: 9,
        title: "Simulation 9 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Championship-Simulation: Komplexe Verbundfiguren, Scherbenschnitte & Rotationsfallen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Verbundfiguren & Scherbenschnitte (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-10`,
        chapterId,
        order: 10,
        title: "Simulation 10 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Apex-Simulation: Kristalline Schnitte, Tangram-Polygone & Mehrfachschrägen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Kristalline Schnitte & Tangram (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-11`,
        chapterId,
        order: 11,
        title: "Simulation 11 — Figuren zusammensetzen",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Titan-Simulation: Polykristalline Schnitte, Facetten-Heptagone & Symmetrie-Illusionen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Polykristalline Schnitte & Facetten (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated ZF (Zahlenfolgen) 10-Aufgaben / 15-Minuten Simulationen
  if (
    chapterId === "kff-num" ||
    chapterId === "kff-num-arith" ||
    chapterId === "kff-num-l1" ||
    chapter?.subtestId === "kff-num"
  ) {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Arithmetische & geometrische Grundfolgen, steigende Differenzen & Zweischritt-Systeme (~90 s / Aufgabe).",
        mode: "timed",
        questionCount: 10,
        focus: "Grundlagen-Check: Direkte Differenzen, Faktoren & Zweischritt-Systeme",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Aufbau & Vertiefung mit fallenden Differenzen, alternierenden Vorzeichen & Zwischenschritten.",
        mode: "timed",
        questionCount: 10,
        focus: "Fallende Schrittweiten & alternierende Rechenoperationen",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Transfer & Didaktik mit rekursiven Summenfolgen (Fibonacci) & verschachtelten Teilsträngen.",
        mode: "timed",
        questionCount: 10,
        focus: "Rekursive Folgen & verschachtelte Teilstränge",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Speed & Stress mit Dreischritt-Zyklen, Quotienten & Fangfragen unter 90s-Pacing.",
        mode: "timed",
        questionCount: 10,
        focus: "Dreischritt-Zyklen & Ausschluss-Heuristik",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "Finale MedAT-Generalprobe: Höchste Pacing-Stufe mit komplexen Verbundmustern und echten Option-E-Fallen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 10,
        focus: "Finale Generalprobe (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-6`,
        chapterId,
        order: 6,
        title: "Simulation 6 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "Meister-Simulation: Multiplikative Verflechtungen, alternierende Zweierschritte und anspruchsvolle Distraktoren.",
        mode: "timed",
        questionCount: 10,
        focus: "Meister-Simulation: Modifizierte Rekursionen & Verflechtungen (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-7`,
        chapterId,
        order: 7,
        title: "Simulation 7 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "Elite-Simulation: Zweischritt-Systeme, modifizierte Fibonacci-Variationen und Quotienten unter Prüfungsstress.",
        mode: "timed",
        questionCount: 10,
        focus: "Elite-Simulation: Vorzeichen-Rhythmen & verschachtelte Divisionen (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-8`,
        chapterId,
        order: 8,
        title: "Simulation 8 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "Meister-Klasse: Komplexe Differenzfolgen, Vorzeichenwechsel und geometrische Sprünge.",
        mode: "timed",
        questionCount: 10,
        focus: "Meister-Klasse: Kubik- & Quadratdistanzen (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-9`,
        chapterId,
        order: 9,
        title: "Simulation 9 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "Championship-Simulation: Dreischritt-Zyklen mit gemischten Operatoren, Halbierungs- und Verdopplungsmuster.",
        mode: "timed",
        questionCount: 10,
        focus: "Championship-Simulation: Komplexe Verbundmuster (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-10`,
        chapterId,
        order: 10,
        title: "Simulation 10 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "Apex-Simulation: Kombinierte Operationen, Primzahlschritte und höchste psychometrische Trennschärfe.",
        mode: "timed",
        questionCount: 10,
        focus: "Apex-Simulation: Rekursive Verschachtelungen (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-11`,
        chapterId,
        order: 11,
        title: "Simulation 11 — Zahlenfolgen",
        subtitle: "10 Aufgaben · 15 Min. Prüfungszeit",
        description: "Titan-Simulation: Finale MedAT-Generalprobe mit polynomischen Sprüngen und extremem Zeitmanagement.",
        mode: "timed",
        questionCount: 10,
        focus: "Titan-Simulation: Finale Generalprobe (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated WF (Wortflüssigkeit) 15-Aufgaben / 20-Minuten Simulationen
  if (
    chapterId === "kff-wf" ||
    chapterId === "kff-wf-basic" ||
    chapterId === "kff-wf-sim" ||
    chapter?.subtestId === "kff-wf"
  ) {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Basis-Wortschatz, Vokal-Konsonant-Isolierung & direkte Anfangsbuchstaben (~80 s / Aufgabe).",
        mode: "timed",
        questionCount: 15,
        focus: "Basis-Wortschatz & Vokal-Konsonant-Isolierung",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Medizinisch-biologische Nomen & morphologische Präfixe (PRO-, TRANS-, ANTI-).",
        mode: "timed",
        questionCount: 15,
        focus: "Medizinische Nomen & Präfix-Erkennung",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Abstrakte Substantive & Suffix-Ketten (-UNG, -HEIT, -KEIT, -SCHAFT).",
        mode: "timed",
        questionCount: 15,
        focus: "Abstrakte Substantive & Suffix-Strukturen",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "MedAT-orientierte Simulation: Konsonantenhäufung, Doppelbuchstaben & Pacing unter hohem Zeitdruck.",
        mode: "timed",
        questionCount: 15,
        focus: "Doppelbuchstaben & Konsonanten-Cluster",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Finale MedAT-Generalprobe: Höchste Pacing-Stufe mit komplexen Wortstrukturen und gezielten Option-E-Fallen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Finale Generalprobe & Option-E-Sicherheit (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-6`,
        chapterId,
        order: 6,
        title: "Simulation 6 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Meister-Simulation: Organsysteme, Histologie, Zytologie & schnelle Vokal-Konsonant-Zerlegung (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Organsysteme, Histologie & Zytologie (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-7`,
        chapterId,
        order: 7,
        title: "Simulation 7 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Elite-Simulation: Biochemische Prozesse, Stoffwechselnomenklatur & Morphem-Isolierung unter Zeitdruck (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Biochemische Prozesse & Stoffwechsel (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-8`,
        chapterId,
        order: 8,
        title: "Simulation 8 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Meister-Klasse: Klinische Diagnostik, Symptome, Labormedizin & gezielter Option-E-Ausschluss (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Klinische Diagnostik & Labormedizin (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-9`,
        chapterId,
        order: 9,
        title: "Simulation 9 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Championship-Simulation: Pharmakologie, Notfallmedizin, chirurgische Begriffe & Pacing-Präzision (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Pharmakologie & Notfallmedizin (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-10`,
        chapterId,
        order: 10,
        title: "Simulation 10 — Wortflüssigkeit",
        subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
        description: "Apex-Simulation: Genetik, Evolution, Zellphysiologie & Höchstschwierigkeit unter realistischen MedAT-Bedingungen (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 15,
        focus: "Apex-Simulation: Genetik & Höchststufe (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated GM (Gedächtnis & Merkfähigkeit) 2-Phasen-Simulationen: 8 Ausweise (8 Min) + 25 Fragen (15 Min)
  if (
    chapterId === "kff-mem" ||
    chapterId === "kff-mem-pass" ||
    chapterId === "kff-mem-sim" ||
    chapter?.subtestId === "kff-mem"
  ) {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Gedächtnis & Merkfähigkeit",
        subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
        description: "MedAT-orientierte Simulation: 8 Allergieausweise (64 Informationseinheiten) in 8 Minuten einprägen, danach 25 Abfragefragen in 15 Minuten (~36 s / Frage).",
        mode: "timed",
        questionCount: 25,
        focus: "Grundlagen-Check: 8 Allergieausweise & Loci-Routentraining",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Gedächtnis & Merkfähigkeit",
        subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
        description: "MedAT-orientierte Simulation: Medikamenten-Fokus, Blutgruppen-Verteilung & Zahlencodes.",
        mode: "timed",
        questionCount: 25,
        focus: "Medikamenten-Fokus & 5-stellige Ausweisnummern",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Gedächtnis & Merkfähigkeit",
        subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
        description: "MedAT-orientierte Simulation: Mehrfachallergien, Kreuzabfragen & Länderzuordnung.",
        mode: "timed",
        questionCount: 25,
        focus: "Mehrfachallergien & Kreuzrelationen",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Gedächtnis & Merkfähigkeit",
        subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
        description: "MedAT-orientierte Simulation: Hohe Merkmalsdichte, ähnliche Geburtsdaten & gezielte Option-E-Fallen.",
        mode: "timed",
        questionCount: 25,
        focus: "Geburtsdaten-Präzision & Option-E-Sicherheit",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Gedächtnis & Merkfähigkeit",
        subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
        description: "Finale MedAT-Generalprobe: Höchste Abrufgeschwindigkeit, komplexe Kreuzbeziehungen & Spitzen-Pacing (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 25,
        focus: "Finale Generalprobe & Spitzen-Pacing (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated IE (Implikationen erkennen) [Nur MedAT-H] 10-Aufgaben / 10-Minuten Simulationen
  if (
    chapterId === "kff-imp" ||
    chapterId === "kff-imp-syll" ||
    chapterId === "kff-imp-sim" ||
    chapter?.subtestId === "kff-imp"
  ) {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Modus Barbara, Celarent & partikuläre Schlüsse. Formale Deduktion und Mengeninversion.",
        mode: "timed",
        questionCount: 10,
        focus: "Kettenschlüsse & Quantoren-Einstieg",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Kontrapositionen, Disjunktionen & Scheinschluss des unverteilten Mittelbegriffs.",
        mode: "timed",
        questionCount: 10,
        focus: "Kontraposition & Unverteilter Mittelbegriff",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Mengeninversion, Prädikat-Subjekt-Verknüpfung und Fangfragen bei 'Einige'.",
        mode: "timed",
        questionCount: 10,
        focus: "Mengeninversion & Existenzquantor",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Komplexe Prädikat-Subjekt-Ketten, Verneinungsprämissen & gezielte Option-E-Fallen.",
        mode: "timed",
        questionCount: 10,
        focus: "Verneinungsprämissen & Option-E-Sicherheit",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "Finale MedAT-Generalprobe: Apex-Syllogismen, Höchstschwierigkeit und striktes 60s-Pacing (Ziel: â‰¥80%).",
        mode: "timed",
        questionCount: 10,
        focus: "Finale Generalprobe & Apex-Deduktion (Ziel: â‰¥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
      {
        id: `${chapterId}-set-6`,
        chapterId,
        order: 6,
        title: "Simulation 6 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "Neue Schlussformen: Ferison, Bocardo, Datisi & Camestres. Erythrozyten, Lipide, Adenosin & Ionenkanäle.",
        mode: "timed",
        questionCount: 10,
        focus: "Ferison, Bocardo & Datisi-Training",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-7`,
        chapterId,
        order: 7,
        title: "Simulation 7 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "Hormone, Blutgerinnung & Aminosäuren. Darii, Disamis & Bocardo mit zwei scharfen Scheinschluss-Fallen.",
        mode: "timed",
        questionCount: 10,
        focus: "Darii, Disamis & Blutgerinnungs-Logik",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-8`,
        chapterId,
        order: 8,
        title: "Simulation 8 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "Genetik, Zellzyklus & Immunologie. Barbara, Celarent, Darii, Bocardo, Cesare, Baroco & Ferison.",
        mode: "timed",
        questionCount: 10,
        focus: "Genetik & Immunologie-Logik",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-9`,
        chapterId,
        order: 9,
        title: "Simulation 9 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "Physiologie, Pharmakologie & Neurologie. Ferio, Darii, Camestres & Baroco mit maximaler Ablenkungsgefahr.",
        mode: "timed",
        questionCount: 10,
        focus: "Pharmakologie & Neurologie-Logik",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-10`,
        chapterId,
        order: 10,
        title: "Simulation 10 — Implikationen erkennen",
        subtitle: "10 Aufgaben · 10 Min. Prüfungszeit (~60s/Aufgabe)",
        description: "Finale Apex-Generalprobe: Biochemie, Genetik & Pharmakologie. Alle Schlussformen & maximale Scheinschluss-Dichte.",
        mode: "timed",
        questionCount: 10,
        focus: "Finale Apex-Generalprobe (Ziel: >=90%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated EE (Emotionen erkennen) SEK 14-Aufgaben / 21-Minuten Simulationen
  if (
    chapterId === "sek-emo-rec" ||
    chapterId === "sek-rec-face" ||
    chapterId === "sek-ee" ||
    chapter?.subtestId === "sek-emo-rec"
  ) {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Emotionen erkennen",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Alltags-, Studien- und Notfallszenarien · 5-Emotionen-Wahrscheinlichkeitsurteil · 4 Leicht, 5 Mittel, 5 Schwer.",
        mode: "timed",
        questionCount: 14,
        focus: "Situative Wahrscheinlichkeitsanalyse & Ambivalenz (Ziel: ≥75%)",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Emotionen erkennen",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Berufliche Kontexte, Leistungssituationen & soziale Hierarchien.",
        mode: "timed",
        questionCount: 14,
        focus: "Kontextanalyse & Hierarchie-Interaktionen",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Emotionen erkennen",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Zwischenmenschliche Konflikte, Verlust, Hoffnung & Rührung.",
        mode: "timed",
        questionCount: 14,
        focus: "Emotionsambivalenz & Beziehungsdynamiken",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Emotionen erkennen",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Akute Belastung, Grenzerfahrungen & ethische Herausforderungen.",
        mode: "timed",
        questionCount: 14,
        focus: "Subtile emotionale Reaktionen & Dilemmata",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Emotionen erkennen",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "Finale EE-Generalprobe: Authentisches MedAT-Niveau unter vollem Zeitdruck (Ziel: ≥80%).",
        mode: "timed",
        questionCount: 14,
        focus: "Finale Generalprobe (Ziel: ≥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated ER (Emotionen regulieren) SEK 12-Aufgaben / 18-Minuten Simulationen
  if (
    chapterId === "sek-emo-reg" ||
    chapterId === "sek-reg-stress" ||
    chapterId === "sek-er" ||
    chapter?.subtestId === "sek-emo-reg"
  ) {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Emotionen regulieren",
        subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Alltags- und Unisituationen · Nervosität, Frustration, Enttäuschung, Scham & Ärger · Kognitive Neubewertung & Impulskontrolle.",
        mode: "timed",
        questionCount: 12,
        focus: "Einstieg: Reappraisal & Impulskontrolle",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Emotionen regulieren",
        subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Berufliche & akademische Kontexte · Pause & Priorisierung unter Zeitdruck · Konstruktive Kommunikation.",
        mode: "timed",
        questionCount: 12,
        focus: "Pause & Priorisierung unter Zeitdruck",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Emotionen regulieren",
        subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Konfliktsituationen & Feedback · Perspektivwechsel & soziale Unterstützung.",
        mode: "timed",
        questionCount: 12,
        focus: "Perspektivwechsel & soziale Unterstützung",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Emotionen regulieren",
        subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Scheitern, Misserfolg & Leistungsdruck · Kurzfristige vs. langfristige Wirksamkeit.",
        mode: "timed",
        questionCount: 12,
        focus: "Kurzfristig vs. langfristig — Schwierige Fälle",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Emotionen regulieren",
        subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "Finale ER-Generalprobe: Alle Strategietypen, maximale Ablenkungsgefahr durch plausible Distraktoren (Ziel: >=80%).",
        mode: "timed",
        questionCount: 12,
        focus: "Finale Generalprobe (Ziel: >=80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  // Dedicated SE (Soziales Entscheiden) SEK 14-Aufgaben / 21-Minuten Simulationen
  if (
    chapterId === "sek-soc-dec" ||
    chapterId === "sek-dec-ethics" ||
    chapterId === "sek-se" ||
    chapter?.subtestId === "sek-soc-dec"
  ) {
    return [
      {
        id: `${chapterId}-set-1`,
        chapterId,
        order: 1,
        title: "Simulation 1 — Soziales Entscheiden",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Patientensicherheit, Schweigepflicht & Konflikte · 5-Überlegungen-Reihung (1–5) · 4 Leicht, 5 Mittel, 5 Schwer.",
        mode: "timed",
        questionCount: 14,
        focus: "Grundlegende Schutzgüter & Patientenrechte (Ziel: ≥75%)",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-2`,
        chapterId,
        order: 2,
        title: "Simulation 2 — Soziales Entscheiden",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Organallokation, Kindeswohl, Infektionsschutz & Interessenkonflikte.",
        mode: "timed",
        questionCount: 14,
        focus: "Allokation & institutionelle Verantwortung",
        targetAccuracy: 0.75,
      },
      {
        id: `${chapterId}-set-3`,
        chapterId,
        order: 3,
        title: "Simulation 3 — Soziales Entscheiden",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Minderjährige, Transfusionen, Entlassmanagement & Zwang.",
        mode: "timed",
        questionCount: 14,
        focus: "Garantenstellung & Patientenautonomie",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-4`,
        chapterId,
        order: 4,
        title: "Simulation 4 — Soziales Entscheiden",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "MedAT-orientierte Simulation: Katastrophentriage, Neuro-Enhancement, Plagiat & Manie.",
        mode: "timed",
        questionCount: 14,
        focus: "Subtile Güterabwägung & Notstandsrecht",
        targetAccuracy: 0.8,
      },
      {
        id: `${chapterId}-set-5`,
        chapterId,
        order: 5,
        title: "Simulation 5 — Soziales Entscheiden",
        subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s/Aufgabe)",
        description: "Finale SE-Generalprobe: Höchste ethische Dilemmadichte unter vollem 21-Minuten-Zeitdruck (Ziel: ≥80%).",
        mode: "timed",
        questionCount: 14,
        focus: "Finale Generalprobe (Ziel: ≥80%)",
        targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
      },
    ];
  }

  return [
    {
      id: `${chapterId}-set-1`,
      chapterId,
      order: 1,
      title: `Set 1 — Grundlagen`,
      subtitle: `Basiswissen & Begriffsklarheit`,
      description: `Wichtige Grundbegriffe und fundamentale Zusammenhänge zu ${title}.`,
      mode: "untimed",
      questionCount: 25,
      focus: "Konzeptverständnis & Definitionen",
      targetAccuracy: 0.7,
    },
    {
      id: `${chapterId}-set-2`,
      chapterId,
      order: 2,
      title: `Set 2 — Core Practice`,
      subtitle: `Standard-Fragetypen & Präzision`,
      description: `Festigung typischer MedAT-Fragestellungen mit Fokus auf fehlerfreie Beantwortung.`,
      mode: "untimed",
      questionCount: 25,
      focus: "Genauigkeit & Ausschlussprinzip",
      targetAccuracy: 0.75,
    },
    {
      id: `${chapterId}-set-3`,
      chapterId,
      order: 3,
      title: `Set 3 — Anwendung & Transfer`,
      subtitle: `Komplexe Szenarien & Verknüpfungen`,
      description: `Aufgaben mit kombiniertem Wissen und medizinischem Anwendungsbezug.`,
      mode: "untimed",
      questionCount: 25,
      focus: "Wissenstransfer & Tiefe",
      targetAccuracy: 0.75,
    },
    {
      id: `${chapterId}-set-4`,
      chapterId,
      order: 4,
      title: `Set 4 — Timed Practice`,
      subtitle: `45s Countdown & Stresstoleranz`,
      description: `Gezieltes Tempotraining unter realistischem MedAT-Zeitbudget (45 s pro Frage).`,
      mode: "timed",
      questionCount: 25,
      focus: "Geschwindigkeit & Entscheidungsfreude",
      targetAccuracy: 0.75,
    },
    {
      id: `${chapterId}-set-5`,
      chapterId,
      order: 5,
      title: `Set 5 — Meisterprüfung`,
      subtitle: `Kapitel-Abschluss (Ziel: â‰¥80%)`,
      description: `Finaler Leistungsnachweis zur Freischaltung des nächsten Kapitels im Lernplan.`,
      mode: "untimed",
      questionCount: 25,
      focus: "Umfassende Meisterschaft & Reifegrad",
      targetAccuracy: CHAPTER_MASTERY_THRESHOLD,
    },
  ];
}

export const CANONICAL_QUESTIONS: NormalizedQuestion[] = ALL_FRONTEND_QUESTIONS.map((q) => ({
  id: q.id,
  exam: q.exam,
  section: q.section,
  subjectId: q.subjectId,
  chapterId: q.chapterId,
  practiceSetId: `${q.chapterId}-set-${q.setOrder || 1}`,
  setOrder: q.setOrder || 1,
  topic: q.topic,
  concept: q.concept,
  passage: q.passage,
  difficulty: q.difficulty,
  question: q.questionText,
  options: q.options,
  correct: q.correctAnswer,
  explanation: q.explanation,
  tags: q.tags,
  source: q.source || "medat-original",
  version: q.version || "2026.1",
  fzData: q.fzData,
  zfData: q.zfData,
  wfData: q.wfData,
  gmData: (q as any).gmData,
  gmCardData: (q as any).gmCardData,
  gmAllCards: (q as any).gmAllCards,
}));

/**
 * Deterministically prepares questions for a given chapter set or simulation.
 * TV chapters use 12 questions (35 min); FZ uses 15 questions (20 min); ZF uses 10 questions (15 min); WF uses 15 questions (20 min); GM uses 25 questions (8 Min Merken + 15 Min Abfrage); BMS chapters use 25 questions.
 */
export function buildQuestionsForSet(
  chapterId: string,
  setOrder: number,
  allQuestions: NormalizedQuestion[] = CANONICAL_QUESTIONS
): NormalizedQuestion[] {
  const resolvedId = resolveChapterId(chapterId);
  const chapter = CHAPTERS[resolvedId] || CHAPTERS[chapterId];
  const isTV = chapterId === "tv-scipass" || chapter?.section === "TV";
  const isFZ = chapterId === "kff-fig-l1" || chapterId === "kff-fig";
  const isZF =
    chapterId === "kff-num" ||
    chapterId === "kff-num-arith" ||
    chapterId === "kff-num-l1" ||
    chapter?.subtestId === "kff-num";
  const isWF =
    chapterId === "kff-wf" ||
    chapterId === "kff-wf-basic" ||
    chapterId === "kff-wf-sim" ||
    chapter?.subtestId === "kff-wf";
  const isGM =
    chapterId === "kff-mem" ||
    chapterId === "kff-mem-pass" ||
    chapterId === "kff-mem-sim" ||
    chapter?.subtestId === "kff-mem";
  const isIE =
    chapterId === "kff-imp" ||
    chapterId === "kff-imp-syll" ||
    chapterId === "kff-imp-sim" ||
    chapter?.subtestId === "kff-imp";
  const isER =
    chapterId === "sek-emo-reg" ||
    chapterId === "sek-reg-stress" ||
    chapterId === "sek-er" ||
    chapter?.subtestId === "sek-emo-reg";
  const isEE =
    chapterId === "sek-emo-rec" ||
    chapterId === "sek-rec-face" ||
    chapterId === "sek-ee" ||
    chapter?.subtestId === "sek-emo-rec";
  const isSE =
    chapterId === "sek-soc-dec" ||
    chapterId === "sek-dec-ethics" ||
    chapterId === "sek-se" ||
    chapter?.subtestId === "sek-soc-dec";
  const targetCount = isTV ? 12 : isFZ ? 15 : isZF ? 10 : isWF ? 15 : isGM ? 25 : isIE ? 10 : isER ? 12 : (isEE || isSE) ? 14 : 25;

  const chapterQuestions = allQuestions.filter(
    (q) => q.chapterId === chapterId || q.chapterId === resolvedId || resolveChapterId(q.chapterId) === resolvedId
  );

  // 1. If we have exact canonical questions authored for this specific set (e.g. Set 1, Set 2), use them directly
  const setSpecificQuestions = chapterQuestions.filter((q) => (q.setOrder || 1) === setOrder);
  if (setSpecificQuestions.length >= targetCount) {
    return setSpecificQuestions.slice(0, targetCount);
  }

  // Fallback for Set 1 if questions were not tagged with setOrder
  if (setOrder === 1 && chapterQuestions.length >= targetCount) {
    return chapterQuestions.slice(0, targetCount);
  }

  const chapterSection = chapter?.section || getSectionFromChapterId(resolvedId);

  // Strict Section Isolation: A practice set NEVER pulls questions from other sections
  const subjectQuestions = chapter
    ? allQuestions.filter(
        (q) =>
          q.subjectId === chapter.subjectId &&
          q.section === chapterSection &&
          q.chapterId !== chapterId &&
          resolveChapterId(q.chapterId) !== resolvedId
      )
    : [];

  const isDedicatedSubtest = isTV || isGM || isIE || isER || isEE || isSE || isFZ || isZF || isWF;
  const pool = isDedicatedSubtest
    ? chapterQuestions.length > 0
      ? chapterQuestions
      : subjectQuestions
    : chapterQuestions.length >= targetCount
    ? chapterQuestions
    : [...chapterQuestions, ...subjectQuestions];

  const uniquePool: NormalizedQuestion[] = [];
  const seenIds = new Set<string>();

  for (const q of pool) {
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      uniquePool.push(q);
    }
  }

  // Shuffle based on setOrder for subsequent progressive sets
  const shuffled = [...uniquePool].sort((a, b) => {
    const hashA = (a.id.charCodeAt(0) * 17 + a.id.length * 13 + setOrder * 23) % 101;
    const hashB = (b.id.charCodeAt(0) * 17 + b.id.length * 13 + setOrder * 23) % 101;
    return hashA - hashB;
  });

  const result: NormalizedQuestion[] = shuffled.slice(0, targetCount);

  // If still fewer than targetCount, cycle with set-specific variant IDs
  if (result.length < targetCount && uniquePool.length > 0) {
    let cycleIdx = 0;
    while (result.length < targetCount) {
      const baseQ = uniquePool[cycleIdx % uniquePool.length];
      result.push({
        ...baseQ,
        id: `${baseQ.id}-s${setOrder}-${result.length + 1}`,
      });
      cycleIdx++;
    }
  }

  return result.slice(0, targetCount);
}