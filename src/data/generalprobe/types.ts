/**
 * MedAT-H Full Mock Exam / Generalprobe Types & Scoring Engine
 * Official MedAT-H Examination Architecture:
 * - BMS: 94 tasks (75 min, 40% weight)
 * - TV: 12 tasks (35 min, 10% weight)
 * - 60-Minuten-Pause
 * - KFF: 75 scored tasks (88 min total, 40% weight)
 *     * FZ: 15 tasks (20 min)
 *     * GM Merkphase: 8 allergy cards (8 min memory phase, not scored)
 *     * ZF: 10 tasks (15 min)
 *     * WF: 15 tasks (20 min)
 *     * GM Abfragephase: 25 tasks (15 min recall phase)
 *     * IE: 10 tasks (10 min)
 * - SEK: 40 scored tasks (60 min total, 10% weight)
 *     * ER: 12 tasks (18 min)
 *     * EE: 14 tasks (21 min)
 *     * SE: 14 tasks (21 min)
 * Total: 221 scored tasks (plus 8 memory cards). Pure task time: 4h 18m. With pause: 5h 18m.
 */

import type { StoredQuestion } from "../questions/types";
import type { AllergyCard, GmRecallQuestion } from "../questions/gm/types";
import type { ErQuestionData } from "../questions/er/types";
import type { EeQuestionData, EeEmotionKey } from "../questions/ee/types";
import { decodeEeSelections } from "../questions/ee/types";
import type { SeQuestionData, SeConsiderationKey } from "../questions/se/types";
import { calculateSeScore } from "../questions/se/types";

export type GeneralprobeStage =
  | "CHECKLIST"
  | "BMS_BIOLOGY"
  | "BMS_CHEMISTRY"
  | "BMS_PHYSICS"
  | "BMS_MATH"
  | "TV"
  | "BREAK"
  | "FZ"
  | "GM_MEMORY"
  | "ZF"
  | "WF"
  | "GM_RECALL"
  | "IE"
  | "ER"
  | "EE"
  | "SE"
  | "RESULTS"
  // Legacy aliases for backward compatibility
  | "BMS"
  | "TRANSITION_BMS_TO_TV"
  | "TRANSITION_TV_TO_PAUSE"
  | "PAUSE"
  | "TRANSITION_PAUSE_TO_FZ"
  | "KFF_FZ"
  | "TRANSITION_FZ_TO_GM_MEM"
  | "KFF_GM_MEM"
  | "TRANSITION_GM_MEM_TO_ZF"
  | "KFF_ZF"
  | "TRANSITION_ZF_TO_WF"
  | "KFF_WF"
  | "TRANSITION_WF_TO_GM_RECALL"
  | "KFF_GM_RECALL"
  | "TRANSITION_GM_RECALL_TO_IE"
  | "KFF_IE"
  | "TRANSITION_KFF_TO_SEK"
  | "SEK_ER"
  | "TRANSITION_ER_TO_EE"
  | "SEK_EE"
  | "TRANSITION_EE_TO_SE"
  | "SEK_SE";

export interface GeneralprobeStageInfo {
  stage: GeneralprobeStage;
  title: string;
  subtestName: string;
  sectionCode: "BMS" | "TV" | "PAUSE" | "KFF" | "SEK";
  durationSeconds: number;
  questionCount: number;
  memoryCards?: number;
  isScored: boolean;
  isTransition?: boolean;
}

/**
 * Official MedAT-H Examination Stages Architecture
 * Fixed sequence of independent timed subtests with locked navigation.
 */
export const MEDAT_GENERALPROBE_STAGES: GeneralprobeStageInfo[] = [
  {
    stage: "BMS_BIOLOGY",
    title: "Biologie",
    subtestName: "40 Aufgaben · Zellbiologie, Genetik, Anatomie & Physiologie",
    sectionCode: "BMS",
    questionCount: 40,
    durationSeconds: 1800, // 30 min
    isScored: true,
  },
  {
    stage: "BMS_CHEMISTRY",
    title: "Chemie",
    subtestName: "24 Aufgaben · Atombau, Bindungen, Stöchiometrie, Reaktionen",
    sectionCode: "BMS",
    questionCount: 24,
    durationSeconds: 1080, // 18 min
    isScored: true,
  },
  {
    stage: "BMS_PHYSICS",
    title: "Physik",
    subtestName: "18 Aufgaben · Mechanik, Elektrizitätslehre, Optik, Wärmelehre",
    sectionCode: "BMS",
    questionCount: 18,
    durationSeconds: 960, // 16 min
    isScored: true,
  },
  {
    stage: "BMS_MATH",
    title: "Mathematik",
    subtestName: "12 Aufgaben · Algebra, Geometrie, Einheiten, Funktionen, Vektoren",
    sectionCode: "BMS",
    questionCount: 12,
    durationSeconds: 660, // 11 min
    isScored: true,
  },
  {
    stage: "TV",
    title: "Textverständnis",
    subtestName: "12 Aufgaben · Medizinische Fachtexte & Lesekompetenz",
    sectionCode: "TV",
    questionCount: 12,
    durationSeconds: 2100, // 35 min
    isScored: true,
  },
  {
    stage: "BREAK",
    title: "Mittagspause",
    subtestName: "60-minütige offizielle Regenerationspause vor KFF",
    sectionCode: "PAUSE",
    questionCount: 0,
    durationSeconds: 3600, // 60 min
    isScored: false,
  },
  {
    stage: "FZ",
    title: "Figuren zusammensetzen",
    subtestName: "15 Aufgaben · Zerlegte 2D-Formen & geometrische Rekonstruktion",
    sectionCode: "KFF",
    questionCount: 15,
    durationSeconds: 1200, // 20 min
    isScored: true,
  },
  {
    stage: "GM_MEMORY",
    title: "GM Merkphase",
    subtestName: "8 Allergiepässe einprägen (Nicht gewertet)",
    sectionCode: "KFF",
    questionCount: 0,
    memoryCards: 8,
    durationSeconds: 480, // 8 min
    isScored: false,
  },
  {
    stage: "ZF",
    title: "Zahlenfolgen",
    subtestName: "10 Aufgaben · Mathematische Reihen & Mustererkennung",
    sectionCode: "KFF",
    questionCount: 10,
    durationSeconds: 900, // 15 min
    isScored: true,
  },
  {
    stage: "WF",
    title: "Wortflüssigkeit",
    subtestName: "15 Aufgaben · Anagramme & Anfangsbuchstaben",
    sectionCode: "KFF",
    questionCount: 15,
    durationSeconds: 1200, // 20 min
    isScored: true,
  },
  {
    stage: "GM_RECALL",
    title: "GM Abfrage",
    subtestName: "25 Aufgaben · Abfrage der 8 eingeprägten Allergiepässe",
    sectionCode: "KFF",
    questionCount: 25,
    durationSeconds: 900, // 15 min
    isScored: true,
  },
  {
    stage: "IE",
    title: "Implikationen erkennen",
    subtestName: "10 Aufgaben · Formale Logik & Syllogismen",
    sectionCode: "KFF",
    questionCount: 10,
    durationSeconds: 600, // 10 min
    isScored: true,
  },
  {
    stage: "ER",
    title: "Emotionen regulieren",
    subtestName: "12 Aufgaben · Situative Zielerreichung & Emotionsregulation",
    sectionCode: "SEK",
    questionCount: 12,
    durationSeconds: 1080, // 18 min
    isScored: true,
  },
  {
    stage: "EE",
    title: "Emotionen erkennen",
    subtestName: "14 Aufgaben · Wahrscheinlichkeitsurteil über 5 Emotionen",
    sectionCode: "SEK",
    questionCount: 14,
    durationSeconds: 1260, // 21 min
    isScored: true,
  },
  {
    stage: "SE",
    title: "Soziales Entscheiden",
    subtestName: "14 Aufgaben · Ethische Reihung von 5 Handlungsüberlegungen (1 bis 5)",
    sectionCode: "SEK",
    questionCount: 14,
    durationSeconds: 1260, // 21 min
    isScored: true,
  },
];

export const MEDAT_STAGE_ORDER: GeneralprobeStage[] = [
  "BMS_BIOLOGY",
  "BMS_CHEMISTRY",
  "BMS_PHYSICS",
  "BMS_MATH",
  "TV",
  "BREAK",
  "FZ",
  "GM_MEMORY",
  "ZF",
  "WF",
  "GM_RECALL",
  "IE",
  "ER",
  "EE",
  "SE",
];

export const STAGE_CONFIGS: Record<GeneralprobeStage, GeneralprobeStageInfo> = {
  CHECKLIST: {
    stage: "CHECKLIST",
    title: "Pre-Test Checkliste",
    subtestName: "Vorbereitung",
    sectionCode: "BMS",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
  },
  BMS_BIOLOGY: MEDAT_GENERALPROBE_STAGES[0],
  BMS_CHEMISTRY: MEDAT_GENERALPROBE_STAGES[1],
  BMS_PHYSICS: MEDAT_GENERALPROBE_STAGES[2],
  BMS_MATH: MEDAT_GENERALPROBE_STAGES[3],
  TV: MEDAT_GENERALPROBE_STAGES[4],
  BREAK: MEDAT_GENERALPROBE_STAGES[5],
  FZ: MEDAT_GENERALPROBE_STAGES[6],
  GM_MEMORY: MEDAT_GENERALPROBE_STAGES[7],
  ZF: MEDAT_GENERALPROBE_STAGES[8],
  WF: MEDAT_GENERALPROBE_STAGES[9],
  GM_RECALL: MEDAT_GENERALPROBE_STAGES[10],
  IE: MEDAT_GENERALPROBE_STAGES[11],
  ER: MEDAT_GENERALPROBE_STAGES[12],
  EE: MEDAT_GENERALPROBE_STAGES[13],
  SE: MEDAT_GENERALPROBE_STAGES[14],
  RESULTS: {
    stage: "RESULTS",
    title: "Generalprobe Abgeschlossen",
    subtestName: "Gesamtauswertung & Gewichtete Performance",
    sectionCode: "BMS",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
  },

  // Legacy aliases
  BMS: {
    stage: "BMS",
    title: "Basiskenntnistest für Medizinische Studien (BMS)",
    subtestName: "Biologie 40 · Chemie 24 · Physik 18 · Mathematik 12",
    sectionCode: "BMS",
    durationSeconds: 75 * 60,
    questionCount: 94,
    isScored: true,
  },
  TRANSITION_BMS_TO_TV: {
    stage: "TRANSITION_BMS_TO_TV",
    title: "BMS abgeschlossen",
    subtestName: "Übergang zu Textverständnis",
    sectionCode: "TV",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  TRANSITION_TV_TO_PAUSE: {
    stage: "TRANSITION_TV_TO_PAUSE",
    title: "Textverständnis abgeschlossen",
    subtestName: "Übergang zur 60-Minuten-Pause",
    sectionCode: "PAUSE",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  PAUSE: MEDAT_GENERALPROBE_STAGES[5],
  TRANSITION_PAUSE_TO_FZ: {
    stage: "TRANSITION_PAUSE_TO_FZ",
    title: "Pause beendet",
    subtestName: "Start KFF: Figuren zusammensetzen",
    sectionCode: "KFF",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  KFF_FZ: MEDAT_GENERALPROBE_STAGES[6],
  TRANSITION_FZ_TO_GM_MEM: {
    stage: "TRANSITION_FZ_TO_GM_MEM",
    title: "Figuren zusammensetzen abgeschlossen",
    subtestName: "Übergang zur Gedächtnis Merkphase",
    sectionCode: "KFF",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  KFF_GM_MEM: MEDAT_GENERALPROBE_STAGES[7],
  TRANSITION_GM_MEM_TO_ZF: {
    stage: "TRANSITION_GM_MEM_TO_ZF",
    title: "Merkphase beendet — Allergiepässe werden verborgen",
    subtestName: "Übergang zu Zahlenfolgen",
    sectionCode: "KFF",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  KFF_ZF: MEDAT_GENERALPROBE_STAGES[8],
  TRANSITION_ZF_TO_WF: {
    stage: "TRANSITION_ZF_TO_WF",
    title: "Zahlenfolgen abgeschlossen",
    subtestName: "Übergang zu Wortflüssigkeit",
    sectionCode: "KFF",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  KFF_WF: MEDAT_GENERALPROBE_STAGES[9],
  TRANSITION_WF_TO_GM_RECALL: {
    stage: "TRANSITION_WF_TO_GM_RECALL",
    title: "Wortflüssigkeit abgeschlossen",
    subtestName: "Übergang zur Gedächtnis Abfragephase",
    sectionCode: "KFF",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  KFF_GM_RECALL: MEDAT_GENERALPROBE_STAGES[10],
  TRANSITION_GM_RECALL_TO_IE: {
    stage: "TRANSITION_GM_RECALL_TO_IE",
    title: "Gedächtnisabfrage abgeschlossen",
    subtestName: "Übergang zu Implikationen erkennen",
    sectionCode: "KFF",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  KFF_IE: MEDAT_GENERALPROBE_STAGES[11],
  TRANSITION_KFF_TO_SEK: {
    stage: "TRANSITION_KFF_TO_SEK",
    title: "KFF-Testteil komplett abgeschlossen",
    subtestName: "Übergang zu Sozial-emotionale Kompetenzen (SEK)",
    sectionCode: "SEK",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  SEK_ER: MEDAT_GENERALPROBE_STAGES[12],
  TRANSITION_ER_TO_EE: {
    stage: "TRANSITION_ER_TO_EE",
    title: "Emotionen regulieren abgeschlossen",
    subtestName: "Übergang zu Emotionen erkennen",
    sectionCode: "SEK",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  SEK_EE: MEDAT_GENERALPROBE_STAGES[13],
  TRANSITION_EE_TO_SE: {
    stage: "TRANSITION_EE_TO_SE",
    title: "Emotionen erkennen abgeschlossen",
    subtestName: "Übergang zu Soziales Entscheiden",
    sectionCode: "SEK",
    durationSeconds: 0,
    questionCount: 0,
    isScored: false,
    isTransition: true,
  },
  SEK_SE: MEDAT_GENERALPROBE_STAGES[14],
};

export function normalizeGeneralprobeStage(stage: GeneralprobeStage): GeneralprobeStage {
  if (stage === "BMS") return "BMS_BIOLOGY";
  if (stage === "PAUSE") return "BREAK";
  if (stage === "KFF_FZ") return "FZ";
  if (stage === "KFF_GM_MEM") return "GM_MEMORY";
  if (stage === "KFF_ZF") return "ZF";
  if (stage === "KFF_WF") return "WF";
  if (stage === "KFF_GM_RECALL") return "GM_RECALL";
  if (stage === "KFF_IE") return "IE";
  if (stage === "SEK_ER") return "ER";
  if (stage === "SEK_EE") return "EE";
  if (stage === "SEK_SE") return "SE";
  return stage;
}

export function getNextGeneralprobeStage(current: GeneralprobeStage): GeneralprobeStage {
  if (current === "CHECKLIST") return "BMS_BIOLOGY";
  const normalized = normalizeGeneralprobeStage(current);
  const idx = MEDAT_STAGE_ORDER.indexOf(normalized);
  if (idx >= 0 && idx < MEDAT_STAGE_ORDER.length - 1) {
    return MEDAT_STAGE_ORDER[idx + 1];
  }
  return "RESULTS";
}

export interface GeneralprobeDataset {
  id: string; // e.g. "generalprobe-1"
  simNumber: number; // 1
  title: string;
  subtitle: string;
  bmsQuestions: StoredQuestion[]; // 94 items (40 Bio, 24 Chem, 18 Phys, 12 Math)
  tvQuestions: StoredQuestion[]; // 12 items
  fzQuestions: StoredQuestion[]; // 15 items
  gmCards: AllergyCard[]; // 8 cards (memory phase)
  zfQuestions: StoredQuestion[]; // 10 items
  wfQuestions: StoredQuestion[]; // 15 items
  gmRecallQuestions: GmRecallQuestion[]; // 25 items
  gmStoredQuestions: StoredQuestion[]; // 25 items adapted
  ieQuestions: StoredQuestion[]; // 10 items
  erQuestions: StoredQuestion[]; // 12 items
  eeQuestions: StoredQuestion[]; // 14 items
  seQuestions: StoredQuestion[]; // 14 items
}

export function getQuestionsForStage(
  stage: GeneralprobeStage,
  dataset: GeneralprobeDataset
): StoredQuestion[] {
  const normalized = normalizeGeneralprobeStage(stage);
  switch (normalized) {
    case "BMS_BIOLOGY":
      return dataset.bmsQuestions.filter((q) => q.subjectId === "bio").slice(0, 40);
    case "BMS_CHEMISTRY":
      return dataset.bmsQuestions.filter((q) => q.subjectId === "chem").slice(0, 24);
    case "BMS_PHYSICS":
      return dataset.bmsQuestions.filter((q) => q.subjectId === "phys").slice(0, 18);
    case "BMS_MATH":
      return dataset.bmsQuestions.filter((q) => q.subjectId === "math").slice(0, 12);
    case "TV":
      return dataset.tvQuestions;
    case "BREAK":
      return [];
    case "FZ":
      return dataset.fzQuestions;
    case "GM_MEMORY":
      return [];
    case "ZF":
      return dataset.zfQuestions;
    case "WF":
      return dataset.wfQuestions;
    case "GM_RECALL":
      return dataset.gmStoredQuestions;
    case "IE":
      return dataset.ieQuestions;
    case "ER":
      return dataset.erQuestions;
    case "EE":
      return dataset.eeQuestions;
    case "SE":
      return dataset.seQuestions;
    default:
      return [];
  }
}

export interface GeneralprobeActiveSession {
  examId: string;
  stage: GeneralprobeStage;
  stageStartedAt: number; // Date.now() timestamp when current stage started
  stageEndsAt: number; // Date.now() timestamp when current stage expires
  stageRemainingSeconds: number;
  currentQuestionIndex: number;
  answers: Record<string, any>;
  markedForReview: string[];
  visitedQuestionIds: string[];
  gmMemorySet: AllergyCard[]; // The 8 permanently attached cards
  gmCards?: AllergyCard[]; // Compatibility alias
  startTimestamp: number;
  stageStartedTimestamp?: number;
  timeSpentPerStage?: Record<string, number>;
  completedStages?: GeneralprobeStage[];
  isDevSpeedEnabled?: boolean;
  pauseShortened?: boolean;
}

export interface SectionScoreBreakdown {
  rawCorrect: number;
  maxScore: number;
  percentage: number;
  weightPct: number; // e.g. 40 for BMS
  weightedScore: number; // e.g. (raw/max) * weightPct
}

export interface SubtestScoreBreakdown {
  id: string;
  name: string;
  rawCorrect: number;
  maxScore: number;
  percentage: number;
  detail?: string;
}

export interface GeneralprobeResult {
  id: string;
  examId: string;
  examTitle: string;
  timestamp: number;
  dateStr: string;
  totalTimeSpentSeconds: number;
  weightedScore: number; // 0..100
  passed: boolean;
  bms: SectionScoreBreakdown;
  tv: SectionScoreBreakdown;
  kff: SectionScoreBreakdown;
  sek: SectionScoreBreakdown;
  subtests: {
    bio: SubtestScoreBreakdown;
    chem: SubtestScoreBreakdown;
    phys: SubtestScoreBreakdown;
    math: SubtestScoreBreakdown;
    tv: SubtestScoreBreakdown;
    fz: SubtestScoreBreakdown;
    gm: SubtestScoreBreakdown;
    zf: SubtestScoreBreakdown;
    wf: SubtestScoreBreakdown;
    ie: SubtestScoreBreakdown;
    er: SubtestScoreBreakdown;
    ee: SubtestScoreBreakdown;
    se: SubtestScoreBreakdown;
  };
  answers: Record<string, any>;
  totalQuestions: 221;
}

/**
 * Evaluates the full Generalprobe and computes official MedAT-H weighted scores:
 * BMS: 40%
 * TV: 10%
 * KFF: 40% (FZ 15 + GM 25 + ZF 10 + WF 15 + IE 10 = 75 tasks)
 * SEK: 10% (Average of ER % [12], EE % [14], SE % [14])
 */
export function evaluateFullGeneralprobe(
  dataset: GeneralprobeDataset,
  answers: Record<string, any>,
  totalTimeSpentSeconds: number
): GeneralprobeResult {
  // 1. BMS Subtests
  let bioCorrect = 0;
  let chemCorrect = 0;
  let physCorrect = 0;
  let mathCorrect = 0;

  dataset.bmsQuestions.forEach((q) => {
    const isCorrect = answers[q.id] === q.correctAnswer;
    if (q.subjectId === "bio") {
      if (isCorrect) bioCorrect++;
    } else if (q.subjectId === "chem") {
      if (isCorrect) chemCorrect++;
    } else if (q.subjectId === "phys") {
      if (isCorrect) physCorrect++;
    } else if (q.subjectId === "math") {
      if (isCorrect) mathCorrect++;
    }
  });

  const bmsCorrect = bioCorrect + chemCorrect + physCorrect + mathCorrect;
  const bmsPct = Math.round((bmsCorrect / 94) * 1000) / 10;
  const bmsWeighted = Math.round((bmsCorrect / 94) * 40 * 100) / 100;

  // 2. TV Subtest
  let tvCorrect = 0;
  dataset.tvQuestions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) tvCorrect++;
  });
  const tvPct = Math.round((tvCorrect / 12) * 1000) / 10;
  const tvWeighted = Math.round((tvCorrect / 12) * 10 * 100) / 100;

  // 3. KFF Subtests
  let fzCorrect = 0;
  dataset.fzQuestions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) fzCorrect++;
  });

  let gmCorrect = 0;
  dataset.gmRecallQuestions.forEach((q) => {
    const ans = answers[q.id];
    // Can be letter "A".."E" or index 0..4
    const keyMap = ["A", "B", "C", "D", "E"];
    const chosenKey = typeof ans === "number" ? keyMap[ans] : ans;
    if (chosenKey === q.correctAnswer) gmCorrect++;
  });

  let zfCorrect = 0;
  dataset.zfQuestions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) zfCorrect++;
  });

  let wfCorrect = 0;
  dataset.wfQuestions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) wfCorrect++;
  });

  let ieCorrect = 0;
  dataset.ieQuestions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) ieCorrect++;
  });

  const kffCorrect = fzCorrect + gmCorrect + zfCorrect + wfCorrect + ieCorrect;
  const kffPct = Math.round((kffCorrect / 75) * 1000) / 10;
  const kffWeighted = Math.round((kffCorrect / 75) * 40 * 100) / 100;

  // 4. SEK Subtests
  // ER: 12 tasks (binary 1/0)
  let erCorrect = 0;
  dataset.erQuestions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) erCorrect++;
  });
  const erPct = (erCorrect / 12) * 100;

  // EE: 14 tasks (all-or-nothing: 5/5 correct judgments required for 1 point)
  let eeCorrect = 0;
  dataset.eeQuestions.forEach((q) => {
    const eeData = (q as any).eeData as EeQuestionData | undefined;
    const userVal = answers[q.id];
    if (eeData && userVal !== undefined) {
      const selections =
        typeof userVal === "number"
          ? decodeEeSelections(userVal)
          : (userVal as Record<string, string>);
      const allFiveCorrect = eeData.emotions.every(
        (emo) => selections[emo.id] === emo.correctProbability
      );
      if (allFiveCorrect) eeCorrect++;
    } else if (answers[q.id] === q.correctAnswer) {
      eeCorrect++;
    }
  });
  const eePct = (eeCorrect / 14) * 100;

  // SE: 14 tasks (continuous partial credit ranking agreement 0.0..1.0)
  let seTotalScore = 0;
  dataset.seQuestions.forEach((q) => {
    const seData = (q as any).seData as SeQuestionData | undefined;
    const userRanking = answers[q.id] as Partial<Record<SeConsiderationKey, number>> | number | undefined;
    if (seData && userRanking !== undefined) {
      const evalRes = calculateSeScore(userRanking, seData.referenceRanking);
      if (evalRes.isValid) {
        seTotalScore += evalRes.score;
      }
    } else if (typeof answers[q.id] === "number") {
      if (answers[q.id] === q.correctAnswer) seTotalScore += 1.0;
    }
  });
  const sePoints = Math.round(seTotalScore * 100) / 100;
  const sePct = (sePoints / 14) * 100;

  // SEK aggregate is average of the 3 subtest percentages
  const sekPctRaw = (erPct + eePct + sePct) / 3;
  const sekPct = Math.round(sekPctRaw * 10) / 10;
  const sekWeighted = Math.round((sekPct / 100) * 10 * 100) / 100;

  // Total MedAT-H Weighted Score (0..100)
  const totalWeighted = Math.round((bmsWeighted + tvWeighted + kffWeighted + sekWeighted) * 10) / 10;

  const now = new Date();
  const dateStr = now.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return {
    id: `result-${dataset.id}-${Date.now()}`,
    examId: dataset.id,
    examTitle: dataset.title,
    timestamp: Date.now(),
    dateStr,
    totalTimeSpentSeconds,
    weightedScore: totalWeighted,
    passed: totalWeighted >= 75.0, // Benchmark
    bms: {
      rawCorrect: bmsCorrect,
      maxScore: 94,
      percentage: bmsPct,
      weightPct: 40,
      weightedScore: bmsWeighted,
    },
    tv: {
      rawCorrect: tvCorrect,
      maxScore: 12,
      percentage: tvPct,
      weightPct: 10,
      weightedScore: tvWeighted,
    },
    kff: {
      rawCorrect: kffCorrect,
      maxScore: 75,
      percentage: kffPct,
      weightPct: 40,
      weightedScore: kffWeighted,
    },
    sek: {
      rawCorrect: Math.round((erCorrect + eeCorrect + sePoints) * 10) / 10,
      maxScore: 40,
      percentage: sekPct,
      weightPct: 10,
      weightedScore: sekWeighted,
    },
    subtests: {
      bio: {
        id: "bio",
        name: "Biologie",
        rawCorrect: bioCorrect,
        maxScore: 40,
        percentage: Math.round((bioCorrect / 40) * 100),
      },
      chem: {
        id: "chem",
        name: "Chemie",
        rawCorrect: chemCorrect,
        maxScore: 24,
        percentage: Math.round((chemCorrect / 24) * 100),
      },
      phys: {
        id: "phys",
        name: "Physik",
        rawCorrect: physCorrect,
        maxScore: 18,
        percentage: Math.round((physCorrect / 18) * 100),
      },
      math: {
        id: "math",
        name: "Mathematik",
        rawCorrect: mathCorrect,
        maxScore: 12,
        percentage: Math.round((mathCorrect / 12) * 100),
      },
      tv: {
        id: "tv",
        name: "Textverständnis",
        rawCorrect: tvCorrect,
        maxScore: 12,
        percentage: Math.round((tvCorrect / 12) * 100),
      },
      fz: {
        id: "fz",
        name: "Figuren zusammensetzen",
        rawCorrect: fzCorrect,
        maxScore: 15,
        percentage: Math.round((fzCorrect / 15) * 100),
      },
      gm: {
        id: "gm",
        name: "Gedächtnis & Merkfähigkeit",
        rawCorrect: gmCorrect,
        maxScore: 25,
        percentage: Math.round((gmCorrect / 25) * 100),
        detail: "8 Allergiepässe (Merkphase) + 25 Abfrageaufgaben",
      },
      zf: {
        id: "zf",
        name: "Zahlenfolgen",
        rawCorrect: zfCorrect,
        maxScore: 10,
        percentage: Math.round((zfCorrect / 10) * 100),
      },
      wf: {
        id: "wf",
        name: "Wortflüssigkeit",
        rawCorrect: wfCorrect,
        maxScore: 15,
        percentage: Math.round((wfCorrect / 15) * 100),
      },
      ie: {
        id: "ie",
        name: "Implikationen erkennen",
        rawCorrect: ieCorrect,
        maxScore: 10,
        percentage: Math.round((ieCorrect / 10) * 100),
      },
      er: {
        id: "er",
        name: "Emotionen regulieren",
        rawCorrect: erCorrect,
        maxScore: 12,
        percentage: Math.round((erCorrect / 12) * 100),
      },
      ee: {
        id: "ee",
        name: "Emotionen erkennen",
        rawCorrect: eeCorrect,
        maxScore: 14,
        percentage: Math.round((eeCorrect / 14) * 100),
      },
      se: {
        id: "se",
        name: "Soziales Entscheiden",
        rawCorrect: sePoints,
        maxScore: 14,
        percentage: Math.round((sePoints / 14) * 100),
        detail: "Teilpunkte über Rangübereinstimmung (1 - D/40)",
      },
    },
    answers,
    totalQuestions: 221,
  };
}
