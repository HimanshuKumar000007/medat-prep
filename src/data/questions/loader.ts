/**
 * Question Data Loader & Normalizer (NEST / IISER Architecture)
 * Imports raw JSON question banks and transforms them into type-safe StoredQuestion objects.
 */

import type { JsonQuestion, StoredQuestion } from "./types";
import { normalizeJsonQuestion } from "./types";

import biologyJson from "./json/biology.json";
import chemistryJson from "./json/chemistry.json";
import physicsJson from "./json/physics.json";
import mathematicsJson from "./json/mathematics.json";
import kffJson from "./json/kff.json";
import tvJson from "./json/textverstaendnis.json";
import sekJson from "./json/sek.json";
import manualSkillsJson from "./json/manual_skills.json";

import { FZ_STORED_QUESTIONS } from "./fz";
import { ZF_STORED_QUESTIONS } from "./zf";
import { WF_STORED_QUESTIONS } from "./wf";
import { GM_STORED_QUESTIONS } from "./gm";
import { IE_STORED_QUESTIONS } from "./ie";
import { ER_STORED_QUESTIONS } from "./er";
import { EE_STORED_QUESTIONS } from "./ee";
import { SE_STORED_QUESTIONS } from "./se";

import { GENERALPROBE_1_BIO_QUESTIONS } from "../generalprobe/generalprobe1BioQuestions";
import { GENERALPROBE_1_CHEM_QUESTIONS } from "../generalprobe/generalprobe1ChemistryQuestions";
import { GENERALPROBE_1_PHYS_QUESTIONS } from "../generalprobe/generalprobe1PhysQuestions";
import { GENERALPROBE_1_MATH_QUESTIONS } from "../generalprobe/generalprobe1MathQuestions";
import { GENERALPROBE_1_TV_QUESTIONS } from "../generalprobe/generalprobe1TvQuestions";

// Raw JSON question stores
export const RAW_BIOLOGY_JSON: JsonQuestion[] = biologyJson as JsonQuestion[];
export const RAW_CHEMISTRY_JSON: JsonQuestion[] = chemistryJson as JsonQuestion[];
export const RAW_PHYSICS_JSON: JsonQuestion[] = physicsJson as JsonQuestion[];
export const RAW_MATHEMATICS_JSON: JsonQuestion[] = mathematicsJson as JsonQuestion[];
export const RAW_KFF_JSON: JsonQuestion[] = kffJson as JsonQuestion[];
export const RAW_TV_JSON: JsonQuestion[] = tvJson as JsonQuestion[];
export const RAW_SEK_JSON: JsonQuestion[] = sekJson as JsonQuestion[];
export const RAW_MANUAL_SKILLS_JSON: JsonQuestion[] = manualSkillsJson as JsonQuestion[];

export const ALL_RAW_JSON_QUESTIONS: JsonQuestion[] = [
  ...RAW_BIOLOGY_JSON,
  ...RAW_CHEMISTRY_JSON,
  ...RAW_PHYSICS_JSON,
  ...RAW_MATHEMATICS_JSON,
  ...RAW_KFF_JSON,
  ...RAW_TV_JSON,
  ...RAW_SEK_JSON,
  ...RAW_MANUAL_SKILLS_JSON,
];

// Normalized runtime question sets for application
export const BIOLOGY_QUESTIONS: StoredQuestion[] = [
  ...GENERALPROBE_1_BIO_QUESTIONS,
  ...RAW_BIOLOGY_JSON.filter((q) => !GENERALPROBE_1_BIO_QUESTIONS.some((g) => g.id === q.id)).map(normalizeJsonQuestion),
];
export const CHEMISTRY_QUESTIONS: StoredQuestion[] = [
  ...GENERALPROBE_1_CHEM_QUESTIONS,
  ...RAW_CHEMISTRY_JSON.filter((q) => !GENERALPROBE_1_CHEM_QUESTIONS.some((g) => g.id === q.id)).map(normalizeJsonQuestion),
];
export const PHYSICS_QUESTIONS: StoredQuestion[] = [
  ...GENERALPROBE_1_PHYS_QUESTIONS,
  ...RAW_PHYSICS_JSON.filter((q) => !GENERALPROBE_1_PHYS_QUESTIONS.some((g) => g.id === q.id)).map(normalizeJsonQuestion),
];
export const MATHEMATICS_QUESTIONS: StoredQuestion[] = [
  ...GENERALPROBE_1_MATH_QUESTIONS,
  ...RAW_MATHEMATICS_JSON.filter((q) => !GENERALPROBE_1_MATH_QUESTIONS.some((g) => g.id === q.id)).map(normalizeJsonQuestion),
];
export const KFF_QUESTIONS: StoredQuestion[] = [
  ...RAW_KFF_JSON.filter(
    (q) =>
      q.chapterId !== "kff-fig-l1" &&
      q.chapterId !== "kff-fig" &&
      q.chapterId !== "kff-num" &&
      q.chapterId !== "kff-num-arith" &&
      q.chapterId !== "kff-num-l1" &&
      q.subjectId !== "kff-num" &&
      q.chapterId !== "kff-wf" &&
      q.chapterId !== "kff-wf-basic" &&
      q.subjectId !== "kff-wf" &&
      q.chapterId !== "kff-mem" &&
      q.chapterId !== "kff-mem-pass" &&
      q.subjectId !== "kff-mem" &&
      q.chapterId !== "kff-imp" &&
      q.chapterId !== "kff-imp-syll" &&
      q.subjectId !== "kff-imp"
  ).map(normalizeJsonQuestion),
  ...FZ_STORED_QUESTIONS,
  ...ZF_STORED_QUESTIONS,
  ...WF_STORED_QUESTIONS,
  ...GM_STORED_QUESTIONS,
  ...IE_STORED_QUESTIONS,
];
export const TV_QUESTIONS: StoredQuestion[] = [
  ...GENERALPROBE_1_TV_QUESTIONS,
  ...RAW_TV_JSON.filter((q) => !GENERALPROBE_1_TV_QUESTIONS.some((g) => g.id === q.id)).map(normalizeJsonQuestion),
];
export const SEK_QUESTIONS: StoredQuestion[] = [
  ...RAW_SEK_JSON.filter(
    (q) =>
      q.chapterId !== "sek-emo-reg" &&
      q.chapterId !== "sek-reg-stress" &&
      q.subjectId !== "sek-emo-reg" &&
      q.chapterId !== "sek-emo-rec" &&
      q.chapterId !== "sek-rec-face" &&
      q.subjectId !== "sek-emo-rec" &&
      q.chapterId !== "sek-soc-dec" &&
      q.chapterId !== "sek-dec-ethics" &&
      q.subjectId !== "sek-soc-dec"
  ).map(normalizeJsonQuestion),
  ...ER_STORED_QUESTIONS,
  ...EE_STORED_QUESTIONS,
  ...SE_STORED_QUESTIONS,
];
export const MANUAL_SKILLS_QUESTIONS: StoredQuestion[] = RAW_MANUAL_SKILLS_JSON.map(normalizeJsonQuestion);
