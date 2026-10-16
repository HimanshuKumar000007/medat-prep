/**
 * Official Austrian MedAT Test Structure & Specifications (Version 2026/2027)
 * Source of Truth: https://www.medizinstudieren.at/
 * 
 * Note: MedAT Prep is an independent preparation platform and is not affiliated with or
 * endorsed by the Austrian medical universities or the MedAT test developers.
 */

export type ExamType = "MEDAT-H" | "MEDAT-Z";
export type TargetUniversity = "wien" | "innsbruck" | "graz" | "linz" | "undecided";

export type PreparationStage =
  | "just_starting"
  | "started_studying"
  | "preparing_while"
  | "doing_mocks";

export type DailyStudyTime = "under_1h" | "1_2h" | "2_4h" | "4h_plus";

export interface UniversityMeta {
  id: TargetUniversity;
  name: string;
  shortName: string;
  city: string;
  cutoffEstimate: string; // Approximate reference from previous years
}

export const UNIVERSITIES: Record<TargetUniversity, UniversityMeta> = {
  wien: {
    id: "wien",
    name: "Medizinische Universität Wien",
    shortName: "MedUni Wien",
    city: "Wien",
    cutoffEstimate: "~76-78 % (Human) / ~70-72 % (Zahn)",
  },
  innsbruck: {
    id: "innsbruck",
    name: "Medizinische Universität Innsbruck",
    shortName: "MedUni Innsbruck",
    city: "Innsbruck",
    cutoffEstimate: "~74-76 % (Human) / ~68-71 % (Zahn)",
  },
  graz: {
    id: "graz",
    name: "Medizinische Universität Graz",
    shortName: "MedUni Graz",
    city: "Graz",
    cutoffEstimate: "~73-75 % (Human) / ~67-70 % (Zahn)",
  },
  linz: {
    id: "linz",
    name: "Medizinische Fakultät der JKU Linz",
    shortName: "JKU Linz",
    city: "Linz",
    cutoffEstimate: "~72-74 % (Human)",
  },
  undecided: {
    id: "undecided",
    name: "Noch nicht entschieden",
    shortName: "Noch offen",
    city: "Österreich",
    cutoffEstimate: "Universitätsunabhängig",
  },
};

export type SectionCode = "BMS" | "TV" | "KFF" | "SEK" | "MF";

export interface SubtestMeta {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  questionCount: number;
  timeMinutes: number;
  description: string;
}

export interface SectionMeta {
  code: SectionCode;
  title: string;
  shortTitle: string;
  description: string;
  weightMedATH: number; // percentage (e.g. 40)
  weightMedATZ: number; // percentage (e.g. 40)
  color: string;
  bgSoft: string;
  borderSoft: string;
  subtests: SubtestMeta[];
}

export const MEDAT_SECTIONS: Record<SectionCode, SectionMeta> = {
  BMS: {
    code: "BMS",
    title: "Basiskenntnistest für Medizinische Studien",
    shortTitle: "BMS",
    description:
      "Schulwissen auf Maturaniveau in Biologie, Chemie, Physik und Mathematik im Single-Choice-Format (5 Antwortoptionen).",
    weightMedATH: 40,
    weightMedATZ: 40,
    color: "#DC2626",
    bgSoft: "#FEF2F2",
    borderSoft: "#FECACA",
    subtests: [
      {
        id: "bio",
        code: "BIO",
        title: "Biologie",
        subtitle: "Zellbiologie, Genetik, Anatomie, Physiologie, Evolution & Ökologie",
        questionCount: 40,
        timeMinutes: 40,
        description: "40 Fragen in 40 Minuten. Größter Teilbereich des BMS.",
      },
      {
        id: "chem",
        code: "CHEM",
        title: "Chemie",
        subtitle: "Atombau, Periodensystem, Bindungslehre, Stöchiometrie, Säure-Base, Redox & Organik",
        questionCount: 24,
        timeMinutes: 24,
        description: "24 Fragen in 24 Minuten.",
      },
      {
        id: "phys",
        code: "PHYS",
        title: "Physik",
        subtitle: "Größen/Einheiten, Mechanik, Schwingungen/Wellen, Wärmelehre, Elektrizitätslehre & Optik",
        questionCount: 18,
        timeMinutes: 18,
        description: "18 Fragen in 18 Minuten. Keine Formelsammlung oder Taschenrechner.",
      },
      {
        id: "math",
        code: "MATH",
        title: "Mathematik",
        subtitle: "Zahlen & Einheiten, Algebra, Geometrie, Funktionen, Vektoren & Stochastik",
        questionCount: 12,
        timeMinutes: 12,
        description: "12 Fragen in 12 Minuten.",
      },
    ],
  },
  TV: {
    code: "TV",
    title: "Textverständnis",
    shortTitle: "Textverständnis",
    description:
      "Komplexe Texte systematisch erfassen, Kernaussagen erkennen und Informationen logisch aus dem Text ableiten.",
    weightMedATH: 10,
    weightMedATZ: 0, // Not present in MedAT-Z
    color: "#B45309",
    bgSoft: "#FFF7ED",
    borderSoft: "#FED7AA",
    subtests: [
      {
        id: "tv-main",
        code: "TV",
        title: "Textverständnis",
        subtitle: "Lesekompetenz, Kernaussagen & logische Schlussfolgerungen",
        questionCount: 12,
        timeMinutes: 35,
        description: "12 Fragen zu komplexen Texten in 35 Minuten.",
      },
    ],
  },
  KFF: {
    code: "KFF",
    title: "Kognitive Fähigkeiten und Fertigkeiten",
    shortTitle: "KFF",
    description:
      "Überprüfung grundlegender kognitiver Leistungspotenziale wie Mustererkennung, logisches Denken und Merkfähigkeit.",
    weightMedATH: 40,
    weightMedATZ: 20,
    color: "#EF4444",
    bgSoft: "#FEF2F2",
    borderSoft: "#FCA5A5",
    subtests: [
      {
        id: "kff-fig",
        code: "FZ",
        title: "Figuren zusammensetzen",
        subtitle: "Mentale Rotation & räumliche Zerlegungen",
        questionCount: 15,
        timeMinutes: 20,
        description: "15 Aufgaben in 20 Minuten (1:20 Min/Aufgabe).",
      },
      {
        id: "kff-num",
        code: "ZF",
        title: "Zahlenfolgen",
        subtitle: "Arithmetische, alternierende & exponentielle Reihen",
        questionCount: 10,
        timeMinutes: 15,
        description: "10 Aufgaben in 15 Minuten (1:30 Min/Aufgabe).",
      },
      {
        id: "kff-wf",
        code: "WF",
        title: "Wortflüssigkeit",
        subtitle: "Anagramme & Wortfindung",
        questionCount: 15,
        timeMinutes: 20,
        description: "15 Aufgaben in 20 Minuten (1:20 Min/Aufgabe).",
      },
      {
        id: "kff-mem",
        code: "GM",
        title: "Gedächtnis und Merkfähigkeit",
        subtitle: "Einprägephase (Allergiepässe) & verzögerter Faktenabruf",
        questionCount: 25,
        timeMinutes: 23, // 8 min einprägen + 15 min abrufen
        description: "8 Min Einprägephase (8 Allergieausweise), danach 25 Fragen in 15 Min.",
      },
      {
        id: "kff-imp",
        code: "IE",
        title: "Implikationen erkennen (nur MedAT-H)",
        subtitle: "Formale Logik, Syllogismen & logische Gültigkeit",
        questionCount: 10,
        timeMinutes: 10,
        description: "10 Aufgaben in 10 Minuten (1 Min/Aufgabe). Nur MedAT-H.",
      },
    ],
  },
  SEK: {
    code: "SEK",
    title: "Sozial-emotionale Kompetenzen",
    shortTitle: "SEK",
    description:
      "Erfassen und Regulieren von Emotionen sowie sozial-ethische Urteilsfähigkeit in zwischenmenschlichen Situationen.",
    weightMedATH: 10,
    weightMedATZ: 10,
    color: "#8B5CF6",
    bgSoft: "#F5F3FF",
    borderSoft: "#DDD6FE",
    subtests: [
      {
        id: "sek-emo-rec",
        code: "EE",
        title: "Emotionen erkennen",
        subtitle: "Mimische Muster & situative Emotionseinstufung",
        questionCount: 10,
        timeMinutes: 15,
        description: "10 Aufgaben in 15 Minuten.",
      },
      {
        id: "sek-emo-reg",
        code: "ER",
        title: "Emotionen regulieren",
        subtitle: "Emotionsbewältigung & Selbstregulation im Alltag/Klinik",
        questionCount: 12,
        timeMinutes: 18,
        description: "12 Aufgaben in 18 Minuten.",
      },
      {
        id: "sek-soc-dec",
        code: "SE",
        title: "Soziales Entscheiden",
        subtitle: "Handlungsprioritäten in ethischen & sozialen Dilemmata",
        questionCount: 14,
        timeMinutes: 15,
        description: "14 Aufgaben in 15 Minuten.",
      },
    ],
  },
  MF: {
    code: "MF",
    title: "Manuelle Fertigkeiten (nur MedAT-Z)",
    shortTitle: "Manuelle Fertigkeiten",
    description:
      "Feinmotorische Präzision, Formverständnis und räumliche Spiegelfähigkeit für angehende Zahnmediziner:innen.",
    weightMedATH: 0, // Not present in MedAT-H
    weightMedATZ: 30, // 30% of MedAT-Z
    color: "#0284C7",
    bgSoft: "#F0F9FF",
    borderSoft: "#BAE6FD",
    subtests: [
      {
        id: "mf-wire",
        code: "DB",
        title: "Drahtbiegen",
        subtitle: "Millimetergenaues Biegen von 2 vorgegebenen Drahtfiguren",
        questionCount: 2,
        timeMinutes: 49,
        description: "2 Drahtfiguren nach Vorlage in 49 Minuten. 15 % der Gesamtwertung MedAT-Z.",
      },
      {
        id: "mf-mirror",
        code: "FS",
        title: "Formen spiegeln",
        subtitle: "Spiegelung von geometrischen Figuren an Achsen",
        questionCount: 15,
        timeMinutes: 15,
        description: "15 Formen spiegeln in 15 Minuten. 15 % der Gesamtwertung MedAT-Z.",
      },
    ],
  },
};

/**
 * Returns the relevant sections for a specific exam type
 */
export function getSectionsForExam(examType: ExamType): SectionMeta[] {
  if (examType === "MEDAT-Z") {
    return [MEDAT_SECTIONS.BMS, MEDAT_SECTIONS.MF, MEDAT_SECTIONS.KFF, MEDAT_SECTIONS.SEK];
  }
  return [MEDAT_SECTIONS.BMS, MEDAT_SECTIONS.TV, MEDAT_SECTIONS.KFF, MEDAT_SECTIONS.SEK];
}

/**
 * Calculate MedAT Readiness Index (0..100) based on verified weights
 */
export function calculateMedATReadiness(
  examType: ExamType,
  sectionAccuracies: Partial<Record<SectionCode, number>>
): { readinessIndex: number | null; hasEnoughData: boolean } {
  const sections = getSectionsForExam(examType);
  let totalWeighted = 0;
  let totalWeightsActive = 0;

  for (const sec of sections) {
    const weight = examType === "MEDAT-Z" ? sec.weightMedATZ : sec.weightMedATH;
    const acc = sectionAccuracies[sec.code];
    if (typeof acc === "number" && !isNaN(acc)) {
      totalWeighted += (acc / 100) * weight;
      totalWeightsActive += weight;
    }
  }

  // Require at least one active section with data to produce a readiness index
  if (totalWeightsActive < 10) {
    return { readinessIndex: null, hasEnoughData: false };
  }

  const normalized = Math.round((totalWeighted / totalWeightsActive) * 100);
  const hasEnoughData = totalWeightsActive >= 40;
  return { readinessIndex: Math.min(100, Math.max(0, normalized)), hasEnoughData };
}

/**
 * Computes next MedAT test date (usually first Friday in July)
 */
export function getNextMedATDate(targetYear = 2026): { date: Date; daysRemaining: number } {
  // First Friday in July of targetYear
  const july1 = new Date(targetYear, 6, 1); // July is month 6 (0-indexed)
  let dayOfWeek = july1.getDay(); // 0 is Sunday, 5 is Friday
  let offset = (5 - dayOfWeek + 7) % 7;
  const examDate = new Date(targetYear, 6, 1 + offset, 8, 0, 0);

  const now = new Date();
  const diffTime = examDate.getTime() - now.getTime();
  const daysRemaining = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  return { date: examDate, daysRemaining };
}
