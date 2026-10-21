/**
 * MedAT-H Generalprobe Dataset Builder & Factory
 * Constructs complete, deterministic test-day datasets matching the published MedAT-H specification:
 * - BMS: 94 tasks (Bio 40, Chem 24, Phys 18, Math 12)
 * - TV: 12 tasks (Medical reading comprehension)
 * - KFF: 75 scored tasks (FZ 15, ZF 10, WF 15, GM 25, IE 10) + 8 GM memory cards
 * - SEK: 40 scored tasks (ER 12, EE 14, SE 14)
 * Total: 221 scored tasks (plus 8 memory cards).
 */

import type { StoredQuestion } from "../questions/types";
import {
  BIOLOGY_QUESTIONS,
  CHEMISTRY_QUESTIONS,
  PHYSICS_QUESTIONS,
  MATHEMATICS_QUESTIONS,
  TV_QUESTIONS,
} from "../questions/loader";

import {
  FZ_SIMULATION_1_QUESTIONS,
  FZ_SIMULATION_2_QUESTIONS,
  fzQuestionToStoredQuestion,
} from "../questions/fz";

import {
  GM_SIMULATION_1_DATA,
  GM_SIMULATION_2_DATA,
  gmQuestionToStoredQuestion,
  type AllergyCard,
} from "../questions/gm";

import {
  ZF_SIMULATION_1_QUESTIONS,
  ZF_SIMULATION_2_QUESTIONS,
  zfQuestionToStoredQuestion,
} from "../questions/zf";

import {
  WF_SIMULATION_1_QUESTIONS,
  WF_SIMULATION_2_QUESTIONS,
  wfQuestionToStoredQuestion,
} from "../questions/wf";

import {
  IE_SIMULATION_1_DATA,
  IE_SIMULATION_2_DATA,
  ieQuestionToStoredQuestion,
} from "../questions/ie";

import {
  ER_SIMULATION_1,
  erQuestionToStoredQuestion,
} from "../questions/er";

import {
  EE_SIMULATION_1,
  EE_SIMULATION_2,
  eeQuestionToStoredQuestion,
} from "../questions/ee";

import {
  SE_SIMULATION_1,
  SE_SIMULATION_2,
  toStoredQuestion as seQuestionToStoredQuestion,
} from "../questions/se";

import { GENERALPROBE_1_BIO_QUESTIONS } from "./generalprobe1BioQuestions";
export { GENERALPROBE_1_BIO_QUESTIONS } from "./generalprobe1BioQuestions";

import {
  GENERALPROBE_2_BIO_QUESTIONS,
  RAW_GENERALPROBE_2_BIO_QUESTIONS,
} from "./generalprobe2BiologyQuestions";
export {
  GENERALPROBE_2_BIO_QUESTIONS,
  RAW_GENERALPROBE_2_BIO_QUESTIONS,
} from "./generalprobe2BiologyQuestions";

import {
  GENERALPROBE_3_BIO_QUESTIONS,
  RAW_GENERALPROBE_3_BIO_QUESTIONS,
} from "./generalprobe3BiologyQuestions";
export {
  GENERALPROBE_3_BIO_QUESTIONS,
  RAW_GENERALPROBE_3_BIO_QUESTIONS,
} from "./generalprobe3BiologyQuestions";

import {
  GENERALPROBE_4_BIO_QUESTIONS,
  RAW_GENERALPROBE_4_BIO_QUESTIONS,
} from "./generalprobe4BiologyQuestions";
export {
  GENERALPROBE_4_BIO_QUESTIONS,
  RAW_GENERALPROBE_4_BIO_QUESTIONS,
} from "./generalprobe4BiologyQuestions";

import {
  GENERALPROBE_5_BIO_QUESTIONS,
  RAW_GENERALPROBE_5_BIO_QUESTIONS,
} from "./generalprobe5BiologyQuestions";
export {
  GENERALPROBE_5_BIO_QUESTIONS,
  RAW_GENERALPROBE_5_BIO_QUESTIONS,
} from "./generalprobe5BiologyQuestions";


import { GENERALPROBE_1_CHEM_QUESTIONS } from "./generalprobe1ChemistryQuestions";
export { GENERALPROBE_1_CHEM_QUESTIONS } from "./generalprobe1ChemistryQuestions";

import {
  GENERALPROBE_2_CHEM_QUESTIONS,
  RAW_GENERALPROBE_2_CHEM_QUESTIONS,
} from "./generalprobe2ChemistryQuestions";
export {
  GENERALPROBE_2_CHEM_QUESTIONS,
  RAW_GENERALPROBE_2_CHEM_QUESTIONS,
} from "./generalprobe2ChemistryQuestions";

import {
  GENERALPROBE_3_CHEM_QUESTIONS,
  RAW_GENERALPROBE_3_CHEM_QUESTIONS,
} from "./generalprobe3ChemistryQuestions";
export {
  GENERALPROBE_3_CHEM_QUESTIONS,
  RAW_GENERALPROBE_3_CHEM_QUESTIONS,
} from "./generalprobe3ChemistryQuestions";

import {
  GENERALPROBE_4_CHEM_QUESTIONS,
  RAW_GENERALPROBE_4_CHEM_QUESTIONS,
} from "./generalprobe4ChemistryQuestions";
export {
  GENERALPROBE_4_CHEM_QUESTIONS,
  RAW_GENERALPROBE_4_CHEM_QUESTIONS,
} from "./generalprobe4ChemistryQuestions";


import { GENERALPROBE_1_PHYS_QUESTIONS } from "./generalprobe1PhysQuestions";
export { GENERALPROBE_1_PHYS_QUESTIONS } from "./generalprobe1PhysQuestions";

import {
  GENERALPROBE_2_PHYS_QUESTIONS,
  RAW_GENERALPROBE_2_PHYS_QUESTIONS,
} from "./generalprobe2PhysicsQuestions";
export {
  GENERALPROBE_2_PHYS_QUESTIONS,
  RAW_GENERALPROBE_2_PHYS_QUESTIONS,
} from "./generalprobe2PhysicsQuestions";

import {
  GENERALPROBE_3_PHYS_QUESTIONS,
  RAW_GENERALPROBE_3_PHYS_QUESTIONS,
} from "./generalprobe3PhysicsQuestions";
export {
  GENERALPROBE_3_PHYS_QUESTIONS,
  RAW_GENERALPROBE_3_PHYS_QUESTIONS,
} from "./generalprobe3PhysicsQuestions";

import {
  GENERALPROBE_4_PHYS_QUESTIONS,
  RAW_GENERALPROBE_4_PHYS_QUESTIONS,
} from "./generalprobe4PhysicsQuestions";
export {
  GENERALPROBE_4_PHYS_QUESTIONS,
  RAW_GENERALPROBE_4_PHYS_QUESTIONS,
} from "./generalprobe4PhysicsQuestions";

import { GENERALPROBE_1_MATH_QUESTIONS } from "./generalprobe1MathQuestions";
export { GENERALPROBE_1_MATH_QUESTIONS } from "./generalprobe1MathQuestions";

import {
  GENERALPROBE_2_MATH_QUESTIONS,
  RAW_GENERALPROBE_2_MATH_QUESTIONS,
} from "./generalprobe2MathQuestions";
export {
  GENERALPROBE_2_MATH_QUESTIONS,
  RAW_GENERALPROBE_2_MATH_QUESTIONS,
} from "./generalprobe2MathQuestions";

import {
  GENERALPROBE_3_MATH_QUESTIONS,
  RAW_GENERALPROBE_3_MATH_QUESTIONS,
} from "./generalprobe3MathQuestions";
export {
  GENERALPROBE_3_MATH_QUESTIONS,
  RAW_GENERALPROBE_3_MATH_QUESTIONS,
} from "./generalprobe3MathQuestions";

import {
  GENERALPROBE_4_MATH_QUESTIONS,
  RAW_GENERALPROBE_4_MATH_QUESTIONS,
} from "./generalprobe4MathQuestions";
export {
  GENERALPROBE_4_MATH_QUESTIONS,
  RAW_GENERALPROBE_4_MATH_QUESTIONS,
} from "./generalprobe4MathQuestions";

import { GENERALPROBE_1_TV_QUESTIONS } from "./generalprobe1TvQuestions";
export { GENERALPROBE_1_TV_QUESTIONS } from "./generalprobe1TvQuestions";

import {
  GENERALPROBE_2_TV_QUESTIONS,
  RAW_GENERALPROBE_2_TV_QUESTIONS,
  GENERALPROBE_2_TV_PASSAGES,
} from "./generalprobe2TvQuestions";
export {
  GENERALPROBE_2_TV_QUESTIONS,
  RAW_GENERALPROBE_2_TV_QUESTIONS,
  GENERALPROBE_2_TV_PASSAGES,
} from "./generalprobe2TvQuestions";

import {
  GENERALPROBE_3_TV_QUESTIONS,
  RAW_GENERALPROBE_3_TV_QUESTIONS,
  GENERALPROBE_3_TV_PASSAGES,
} from "./generalprobe3TvQuestions";
export {
  GENERALPROBE_3_TV_QUESTIONS,
  RAW_GENERALPROBE_3_TV_QUESTIONS,
  GENERALPROBE_3_TV_PASSAGES,
} from "./generalprobe3TvQuestions";

import {
  GENERALPROBE_4_TV_QUESTIONS,
  RAW_GENERALPROBE_4_TV_QUESTIONS,
  GENERALPROBE_4_TV_PASSAGES,
} from "./generalprobe4TvQuestions";
export {
  GENERALPROBE_4_TV_QUESTIONS,
  RAW_GENERALPROBE_4_TV_QUESTIONS,
  GENERALPROBE_4_TV_PASSAGES,
} from "./generalprobe4TvQuestions";

import { GENERALPROBE_1_FZ_QUESTIONS } from "./generalprobe1FzQuestions";
export { GENERALPROBE_1_FZ_QUESTIONS } from "./generalprobe1FzQuestions";

import {
  GENERALPROBE_2_FZ_QUESTIONS,
  RAW_GENERALPROBE_2_FZ_QUESTIONS,
} from "./generalprobe2FzQuestions";
export {
  GENERALPROBE_2_FZ_QUESTIONS,
  RAW_GENERALPROBE_2_FZ_QUESTIONS,
} from "./generalprobe2FzQuestions";

import {
  GENERALPROBE_3_FZ_QUESTIONS,
  RAW_GENERALPROBE_3_FZ_QUESTIONS,
} from "./generalprobe3FzQuestions";
export {
  GENERALPROBE_3_FZ_QUESTIONS,
  RAW_GENERALPROBE_3_FZ_QUESTIONS,
} from "./generalprobe3FzQuestions";

import {
  GENERALPROBE_4_FZ_QUESTIONS,
  RAW_GENERALPROBE_4_FZ_QUESTIONS,
} from "./generalprobe4FzQuestions";
export {
  GENERALPROBE_4_FZ_QUESTIONS,
  RAW_GENERALPROBE_4_FZ_QUESTIONS,
} from "./generalprobe4FzQuestions";

import { GENERALPROBE_1_ZF_QUESTIONS } from "./generalprobe1ZfQuestions";
export { GENERALPROBE_1_ZF_QUESTIONS } from "./generalprobe1ZfQuestions";

import {
  GENERALPROBE_2_ZF_QUESTIONS,
  RAW_GENERALPROBE_2_ZF_QUESTIONS,
} from "./generalprobe2ZfQuestions";
export {
  GENERALPROBE_2_ZF_QUESTIONS,
  RAW_GENERALPROBE_2_ZF_QUESTIONS,
} from "./generalprobe2ZfQuestions";

import {
  GENERALPROBE_3_ZF_QUESTIONS,
  RAW_GENERALPROBE_3_ZF_QUESTIONS,
} from "./generalprobe3ZfQuestions";
export {
  GENERALPROBE_3_ZF_QUESTIONS,
  RAW_GENERALPROBE_3_ZF_QUESTIONS,
} from "./generalprobe3ZfQuestions";

import {
  GENERALPROBE_4_ZF_QUESTIONS,
  RAW_GENERALPROBE_4_ZF_QUESTIONS,
} from "./generalprobe4ZfQuestions";
export {
  GENERALPROBE_4_ZF_QUESTIONS,
  RAW_GENERALPROBE_4_ZF_QUESTIONS,
} from "./generalprobe4ZfQuestions";

import { GENERALPROBE_1_WF_QUESTIONS } from "./generalprobe1WfQuestions";
export { GENERALPROBE_1_WF_QUESTIONS } from "./generalprobe1WfQuestions";

import {
  GENERALPROBE_2_WF_QUESTIONS,
  RAW_GENERALPROBE_2_WF_QUESTIONS,
} from "./generalprobe2WfQuestions";
export {
  GENERALPROBE_2_WF_QUESTIONS,
  RAW_GENERALPROBE_2_WF_QUESTIONS,
} from "./generalprobe2WfQuestions";

import {
  GENERALPROBE_3_WF_QUESTIONS,
  RAW_GENERALPROBE_3_WF_QUESTIONS,
} from "./generalprobe3WfQuestions";
export {
  GENERALPROBE_3_WF_QUESTIONS,
  RAW_GENERALPROBE_3_WF_QUESTIONS,
} from "./generalprobe3WfQuestions";

import {
  GENERALPROBE_4_WF_QUESTIONS,
  RAW_GENERALPROBE_4_WF_QUESTIONS,
} from "./generalprobe4WfQuestions";
export {
  GENERALPROBE_4_WF_QUESTIONS,
  RAW_GENERALPROBE_4_WF_QUESTIONS,
} from "./generalprobe4WfQuestions";

import {
  GENERALPROBE_1_GM_CARDS,
  RAW_GENERALPROBE_1_GM_QUESTIONS,
  GENERALPROBE_1_GM_STORED_QUESTIONS,
} from "./generalprobe1GmQuestions";
export {
  GENERALPROBE_1_GM_CARDS,
  RAW_GENERALPROBE_1_GM_QUESTIONS,
  GENERALPROBE_1_GM_STORED_QUESTIONS,
} from "./generalprobe1GmQuestions";

import {
  GENERALPROBE_2_GM_CARDS,
  RAW_GENERALPROBE_2_GM_QUESTIONS,
  GENERALPROBE_2_GM_STORED_QUESTIONS,
} from "./generalprobe2GmQuestions";
export {
  GENERALPROBE_2_GM_CARDS,
  RAW_GENERALPROBE_2_GM_QUESTIONS,
  GENERALPROBE_2_GM_STORED_QUESTIONS,
} from "./generalprobe2GmQuestions";

import {
  GENERALPROBE_3_GM_CARDS,
  RAW_GENERALPROBE_3_GM_QUESTIONS,
  GENERALPROBE_3_GM_STORED_QUESTIONS,
} from "./generalprobe3GmQuestions";
export {
  GENERALPROBE_3_GM_CARDS,
  RAW_GENERALPROBE_3_GM_QUESTIONS,
  GENERALPROBE_3_GM_STORED_QUESTIONS,
} from "./generalprobe3GmQuestions";

import {
  GENERALPROBE_4_GM_CARDS,
  RAW_GENERALPROBE_4_GM_QUESTIONS,
  GENERALPROBE_4_GM_STORED_QUESTIONS,
} from "./generalprobe4GmQuestions";
export {
  GENERALPROBE_4_GM_CARDS,
  RAW_GENERALPROBE_4_GM_QUESTIONS,
  GENERALPROBE_4_GM_STORED_QUESTIONS,
} from "./generalprobe4GmQuestions";

import {
  RAW_GENERALPROBE_1_IE_QUESTIONS,
  GENERALPROBE_1_IE_QUESTIONS,
} from "./generalprobe1IeQuestions";
export {
  RAW_GENERALPROBE_1_IE_QUESTIONS,
  GENERALPROBE_1_IE_QUESTIONS,
} from "./generalprobe1IeQuestions";

import {
  RAW_GENERALPROBE_2_IE_QUESTIONS,
  GENERALPROBE_2_IE_QUESTIONS,
} from "./generalprobe2IeQuestions";
export {
  RAW_GENERALPROBE_2_IE_QUESTIONS,
  GENERALPROBE_2_IE_QUESTIONS,
} from "./generalprobe2IeQuestions";

import {
  RAW_GENERALPROBE_3_IE_QUESTIONS,
  GENERALPROBE_3_IE_QUESTIONS,
} from "./generalprobe3IeQuestions";
export {
  RAW_GENERALPROBE_3_IE_QUESTIONS,
  GENERALPROBE_3_IE_QUESTIONS,
} from "./generalprobe3IeQuestions";

import {
  RAW_GENERALPROBE_4_IE_QUESTIONS,
  GENERALPROBE_4_IE_QUESTIONS,
} from "./generalprobe4IeQuestions";
export {
  RAW_GENERALPROBE_4_IE_QUESTIONS,
  GENERALPROBE_4_IE_QUESTIONS,
} from "./generalprobe4IeQuestions";

import {
  RAW_GENERALPROBE_1_ER_QUESTIONS,
  GENERALPROBE_1_ER_QUESTIONS,
} from "./generalprobe1ErQuestions";
export {
  RAW_GENERALPROBE_1_ER_QUESTIONS,
  GENERALPROBE_1_ER_QUESTIONS,
} from "./generalprobe1ErQuestions";

import {
  RAW_GENERALPROBE_2_ER_QUESTIONS,
  GENERALPROBE_2_ER_QUESTIONS,
} from "./generalprobe2ErQuestions";
export {
  RAW_GENERALPROBE_2_ER_QUESTIONS,
  GENERALPROBE_2_ER_QUESTIONS,
} from "./generalprobe2ErQuestions";

import {
  RAW_GENERALPROBE_3_ER_QUESTIONS,
  GENERALPROBE_3_ER_QUESTIONS,
} from "./generalprobe3ErQuestions";
export {
  RAW_GENERALPROBE_3_ER_QUESTIONS,
  GENERALPROBE_3_ER_QUESTIONS,
} from "./generalprobe3ErQuestions";

import {
  RAW_GENERALPROBE_4_ER_QUESTIONS,
  GENERALPROBE_4_ER_QUESTIONS,
} from "./generalprobe4ErQuestions";
export {
  RAW_GENERALPROBE_4_ER_QUESTIONS,
  GENERALPROBE_4_ER_QUESTIONS,
} from "./generalprobe4ErQuestions";

import {
  RAW_GENERALPROBE_1_EE_QUESTIONS,
  GENERALPROBE_1_EE_QUESTIONS,
} from "./generalprobe1EeQuestions";
export {
  RAW_GENERALPROBE_1_EE_QUESTIONS,
  GENERALPROBE_1_EE_QUESTIONS,
} from "./generalprobe1EeQuestions";

import {
  RAW_GENERALPROBE_2_EE_QUESTIONS,
  GENERALPROBE_2_EE_QUESTIONS,
} from "./generalprobe2EeQuestions";
export {
  RAW_GENERALPROBE_2_EE_QUESTIONS,
  GENERALPROBE_2_EE_QUESTIONS,
} from "./generalprobe2EeQuestions";

import {
  RAW_GENERALPROBE_3_EE_QUESTIONS,
  GENERALPROBE_3_EE_QUESTIONS,
} from "./generalprobe3EeQuestions";
export {
  RAW_GENERALPROBE_3_EE_QUESTIONS,
  GENERALPROBE_3_EE_QUESTIONS,
} from "./generalprobe3EeQuestions";

import {
  RAW_GENERALPROBE_4_EE_QUESTIONS,
  GENERALPROBE_4_EE_QUESTIONS,
} from "./generalprobe4EeQuestions";
export {
  RAW_GENERALPROBE_4_EE_QUESTIONS,
  GENERALPROBE_4_EE_QUESTIONS,
} from "./generalprobe4EeQuestions";

import {
  RAW_GENERALPROBE_1_SE_QUESTIONS,
  GENERALPROBE_1_SE_QUESTIONS,
} from "./generalprobe1SeQuestions";
export {
  RAW_GENERALPROBE_1_SE_QUESTIONS,
  GENERALPROBE_1_SE_QUESTIONS,
} from "./generalprobe1SeQuestions";

import {
  RAW_GENERALPROBE_2_SE_QUESTIONS,
  GENERALPROBE_2_SE_QUESTIONS,
} from "./generalprobe2SeQuestions";
export {
  RAW_GENERALPROBE_2_SE_QUESTIONS,
  GENERALPROBE_2_SE_QUESTIONS,
} from "./generalprobe2SeQuestions";

import {
  RAW_GENERALPROBE_3_SE_QUESTIONS,
  GENERALPROBE_3_SE_QUESTIONS,
} from "./generalprobe3SeQuestions";
export {
  RAW_GENERALPROBE_3_SE_QUESTIONS,
  GENERALPROBE_3_SE_QUESTIONS,
} from "./generalprobe3SeQuestions";

import {
  RAW_GENERALPROBE_4_SE_QUESTIONS,
  GENERALPROBE_4_SE_QUESTIONS,
} from "./generalprobe4SeQuestions";
export {
  RAW_GENERALPROBE_4_SE_QUESTIONS,
  GENERALPROBE_4_SE_QUESTIONS,
} from "./generalprobe4SeQuestions";

import type { GeneralprobeDataset } from "./types";

/**
 * Builds a deterministic 94-question BMS section:
 * 40 Biologie across all 9 chapters (uses official 40-item QC repaired bank for Generalprobe #1)
 * 24 Chemie across chemistry chapters
 * 18 Physik across physics chapters
 * 12 Mathematik across all 6 math chapters (2 per chapter)
 */
export function buildBmsSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  const offset = (simNumber - 1);

  // 1. Biologie (40 tasks across official MedAT syllabus)
  let selectedBio: StoredQuestion[] = [];
  if (simNumber === 1) {
    selectedBio = [...GENERALPROBE_1_BIO_QUESTIONS];
  } else if (simNumber === 2) {
    selectedBio = [...GENERALPROBE_2_BIO_QUESTIONS];
  } else if (simNumber === 3) {
    selectedBio = [...GENERALPROBE_3_BIO_QUESTIONS];
  } else if (simNumber === 4) {
    selectedBio = [...GENERALPROBE_4_BIO_QUESTIONS];
  } else if (simNumber === 5) {
    selectedBio = [...GENERALPROBE_5_BIO_QUESTIONS];
  } else {
    const bioChapters = [
      "bio-01-zelle",
      "bio-02-koerper",
      "bio-03-fruehentwicklung",
      "bio-04-genetik",
      "bio-05-molgen",
      "bio-06-stoffwechsel",
      "bio-07-herzkreislauf",
      "bio-08-atmung",
      "bio-09-nervensystem",
    ];

    bioChapters.forEach((chId, idx) => {
      const inChapter = BIOLOGY_QUESTIONS.filter((q) => q.chapterId === chId);
      // 4 chapters get 5 questions, 5 chapters get 4 questions -> 4*5 + 5*4 = 40
      const count = idx < 4 ? 5 : 4;
      const startIdx = (offset * count) % Math.max(1, inChapter.length - count);
      const slice = inChapter.slice(startIdx, startIdx + count);
      selectedBio.push(...slice);
    });

    // Ensure exact 40 bio questions
    if (selectedBio.length < 40) {
      const remaining = BIOLOGY_QUESTIONS.filter((q) => !selectedBio.some((b) => b.id === q.id));
      selectedBio.push(...remaining.slice(0, 40 - selectedBio.length));
    }
  }

  // 2. Chemie (24 tasks across official MedAT syllabus)
  let selectedChem: StoredQuestion[] = [];
  if (simNumber === 1) {
    selectedChem = [...GENERALPROBE_1_CHEM_QUESTIONS];
  } else if (simNumber === 2) {
    selectedChem = [...GENERALPROBE_2_CHEM_QUESTIONS];
  } else if (simNumber === 3) {
    selectedChem = [...GENERALPROBE_3_CHEM_QUESTIONS];
  } else if (simNumber === 4) {
    selectedChem = [...GENERALPROBE_4_CHEM_QUESTIONS];
  } else {
    const chemStart = (offset * 24) % Math.max(1, CHEMISTRY_QUESTIONS.length - 24);
    selectedChem = CHEMISTRY_QUESTIONS.slice(chemStart, chemStart + 24);
  }

  // 3. Physik (18 tasks across official MedAT syllabus)
  let selectedPhys: StoredQuestion[] = [];
  if (simNumber === 1) {
    selectedPhys = [...GENERALPROBE_1_PHYS_QUESTIONS];
  } else if (simNumber === 2) {
    selectedPhys = [...GENERALPROBE_2_PHYS_QUESTIONS];
  } else if (simNumber === 3) {
    selectedPhys = [...GENERALPROBE_3_PHYS_QUESTIONS];
  } else if (simNumber === 4) {
    selectedPhys = [...GENERALPROBE_4_PHYS_QUESTIONS];
  } else {
    const physStart = (offset * 18) % Math.max(1, PHYSICS_QUESTIONS.length - 18);
    selectedPhys = PHYSICS_QUESTIONS.slice(physStart, physStart + 18);
  }

  // 4. Mathematik (12 tasks across official MedAT syllabus)
  let selectedMath: StoredQuestion[] = [];
  if (simNumber === 1) {
    selectedMath = [...GENERALPROBE_1_MATH_QUESTIONS];
  } else if (simNumber === 2) {
    selectedMath = [...GENERALPROBE_2_MATH_QUESTIONS];
  } else if (simNumber === 3) {
    selectedMath = [...GENERALPROBE_3_MATH_QUESTIONS];
  } else if (simNumber === 4) {
    selectedMath = [...GENERALPROBE_4_MATH_QUESTIONS];
  } else {
    const mathChapters = [
      "math-01-zehnerpotenzen",
      "math-02-algebra",
      "math-03-geometrie",
      "math-04-einheiten",
      "math-05-funktionen",
      "math-06-vektorrechnung",
    ];

    mathChapters.forEach((chId) => {
      const inChapter = MATHEMATICS_QUESTIONS.filter((q) => q.chapterId === chId);
      const startIdx = (offset * 2) % Math.max(1, inChapter.length - 2);
      selectedMath.push(...inChapter.slice(startIdx, startIdx + 2));
    });

    if (selectedMath.length < 12) {
      const remaining = MATHEMATICS_QUESTIONS.filter((q) => !selectedMath.some((m) => m.id === q.id));
      selectedMath.push(...remaining.slice(0, 12 - selectedMath.length));
    }
  }

  return [
    ...selectedBio.slice(0, 40),
    ...selectedChem.slice(0, 24),
    ...selectedPhys.slice(0, 18),
    ...selectedMath.slice(0, 12),
  ];
}

/**
 * Builds the TV section for Generalprobe:
 * Exactly 12 questions from TV Simulation N
 */
export function buildTvSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_TV_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_TV_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_TV_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_TV_QUESTIONS];
  }
  const prefix = `tv-sim${simNumber}-`;
  let simQuestions = TV_QUESTIONS.filter((q) => q.id.startsWith(prefix));
  if (simQuestions.length < 12) {
    simQuestions = TV_QUESTIONS.filter((q) => q.id.startsWith("tv-sim1-"));
  }
  return simQuestions.slice(0, 12);
}

/**
 * Exactly 15 questions from FZ Simulation N
 */
export function buildFzSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_FZ_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_FZ_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_FZ_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_FZ_QUESTIONS];
  }
  return [...GENERALPROBE_1_FZ_QUESTIONS];
}

/**
 * Exactly 10 questions from ZF Simulation N
 */
export function buildZfSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_ZF_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_ZF_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_ZF_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_ZF_QUESTIONS];
  }
  return [...GENERALPROBE_1_ZF_QUESTIONS];
}

/**
 * Exactly 15 questions from WF Simulation N
 */
export function buildWfSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_WF_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_WF_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_WF_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_WF_QUESTIONS];
  }
  return [...GENERALPROBE_1_WF_QUESTIONS];
}

/**
 * Exactly 8 allergy cards from GM Simulation N
 */
export function buildGmSimulationCards(simNumber: number = 1): AllergyCard[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_GM_CARDS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_GM_CARDS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_GM_CARDS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_GM_CARDS];
  }
  return [...GENERALPROBE_1_GM_CARDS];
}

/**
 * Exactly 25 recall questions from GM Simulation N
 */
export function buildGmSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_GM_STORED_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_GM_STORED_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_GM_STORED_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_GM_STORED_QUESTIONS];
  }
  return [...GENERALPROBE_1_GM_STORED_QUESTIONS];
}

/**
 * Exactly 10 questions from IE Simulation N
 */
export function buildIeSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_IE_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_IE_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_IE_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_IE_QUESTIONS];
  }
  return [...GENERALPROBE_1_IE_QUESTIONS];
}

/**
 * Exactly 12 questions from ER Simulation N
 */
export function buildErSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_ER_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_ER_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_ER_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_ER_QUESTIONS];
  }
  return [...GENERALPROBE_1_ER_QUESTIONS];
}

/**
 * Exactly 14 questions from EE Simulation N
 */
export function buildEeSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_EE_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_EE_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_EE_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_EE_QUESTIONS];
  }
  return [...GENERALPROBE_1_EE_QUESTIONS];
}

/**
 * Exactly 14 questions from SE Simulation N
 */
export function buildSeSimulationQuestions(simNumber: number = 1): StoredQuestion[] {
  if (simNumber === 1) {
    return [...GENERALPROBE_1_SE_QUESTIONS];
  } else if (simNumber === 2) {
    return [...GENERALPROBE_2_SE_QUESTIONS];
  } else if (simNumber === 3) {
    return [...GENERALPROBE_3_SE_QUESTIONS];
  } else if (simNumber === 4) {
    return [...GENERALPROBE_4_SE_QUESTIONS];
  }
  return [...GENERALPROBE_1_SE_QUESTIONS];
}

/**
 * Factory for complete Generalprobe #1
 */
export function buildGeneralprobe1Dataset(): GeneralprobeDataset {
  const bms = buildBmsSimulationQuestions(1);
  const tv = buildTvSimulationQuestions(1);

  // FZ Simulation 1 (15 items: KFF-FZ-001 through KFF-FZ-015)
  const fz = [...GENERALPROBE_1_FZ_QUESTIONS];

  // GM Simulation 1 (8 cards, 25 questions: KFF-GM-001 through KFF-GM-025)
  const gmCards = [...GENERALPROBE_1_GM_CARDS];
  const gmRecallQuestions = [...RAW_GENERALPROBE_1_GM_QUESTIONS];
  const gmStoredQuestions = [...GENERALPROBE_1_GM_STORED_QUESTIONS];

  // ZF Simulation 1 (10 items: KFF-ZF-001 through KFF-ZF-010)
  const zf = [...GENERALPROBE_1_ZF_QUESTIONS];

  // WF Simulation 1 (15 items: KFF-WF-001 through KFF-WF-015)
  const wf = [...GENERALPROBE_1_WF_QUESTIONS];

  // IE Simulation 1 (10 items: KFF-IE-001 through KFF-IE-010)
  const ie = [...GENERALPROBE_1_IE_QUESTIONS];

  // SEK: ER Simulation 1 (12 items: SEK-ER-001 through SEK-ER-012)
  const er = [...GENERALPROBE_1_ER_QUESTIONS];

  // SEK: EE Simulation 1 (14 items: SEK-EE-001 through SEK-EE-014)
  const ee = [...GENERALPROBE_1_EE_QUESTIONS];

  // SEK: SE Simulation 1 (14 items: SEK-SE-001 through SEK-SE-014)
  const se = [...GENERALPROBE_1_SE_QUESTIONS];

  return {
    id: "generalprobe-1",
    simNumber: 1,
    title: "MedAT-H Generalprobe #1",
    subtitle: "Vollständige MedAT-H-Simulation mit allen 4 Testteilen",
    bmsQuestions: bms,
    tvQuestions: tv,
    fzQuestions: fz,
    gmCards,
    zfQuestions: zf,
    wfQuestions: wf,
    gmRecallQuestions,
    gmStoredQuestions,
    ieQuestions: ie,
    erQuestions: er,
    eeQuestions: ee,
    seQuestions: se,
  };
}

/**
 * Factory for complete Generalprobe #2 (Extensible)
 */
export function buildGeneralprobe2Dataset(): GeneralprobeDataset {
  const bms = buildBmsSimulationQuestions(2);
  const tv = buildTvSimulationQuestions(2);

  // FZ Simulation 2 (15 items: KFF-FZ-GP2-001 through KFF-FZ-GP2-015)
  const fz = [...GENERALPROBE_2_FZ_QUESTIONS];
  // GM Simulation 2 (8 cards, 25 questions: KFF-GM-GP2-001 through KFF-GM-GP2-025)
  const gmCards = [...GENERALPROBE_2_GM_CARDS];
  const gmRecallQuestions = [...RAW_GENERALPROBE_2_GM_QUESTIONS];
  const gmStoredQuestions = [...GENERALPROBE_2_GM_STORED_QUESTIONS];

  // ZF Simulation 2 (10 items: KFF-ZF-GP2-001 through KFF-ZF-GP2-010)
  const zf = [...GENERALPROBE_2_ZF_QUESTIONS];

  // WF Simulation 2 (15 items: KFF-WF-GP2-001 through KFF-WF-GP2-015)
  const wf = [...GENERALPROBE_2_WF_QUESTIONS];

  // IE Simulation 2 (10 items: KFF-IE-GP2-001 through KFF-IE-GP2-010)
  const ie = [...GENERALPROBE_2_IE_QUESTIONS];

  // SEK: ER Simulation 2 (12 items: SEK-ER-GP2-001 through SEK-ER-GP2-012)
  const er = [...GENERALPROBE_2_ER_QUESTIONS];

  // SEK: EE Simulation 2 (14 items: SEK-EE-GP2-001 through SEK-EE-GP2-014)
  const ee = [...GENERALPROBE_2_EE_QUESTIONS];

  // SEK: SE Simulation 2 (14 items: SEK-SE-GP2-001 through SEK-SE-GP2-014)
  const se = [...GENERALPROBE_2_SE_QUESTIONS];

  return {
    id: "generalprobe-2",
    simNumber: 2,
    title: "MedAT-H Generalprobe #2",
    subtitle: "Vollständige MedAT-H-Simulation mit alternativen Aufgabensets",
    bmsQuestions: bms,
    tvQuestions: tv,
    fzQuestions: fz,
    gmCards,
    zfQuestions: zf,
    wfQuestions: wf,
    gmRecallQuestions,
    gmStoredQuestions,
    ieQuestions: ie,
    erQuestions: er,
    eeQuestions: ee,
    seQuestions: se,
  };
}

export const GENERALPROBE_1_DATASET = buildGeneralprobe1Dataset();
export const GENERALPROBE_2_DATASET = buildGeneralprobe2Dataset();

/**
 * Factory for complete Generalprobe #3
 */
export function buildGeneralprobe3Dataset(): GeneralprobeDataset {
  const bms = buildBmsSimulationQuestions(3);
  const tv = buildTvSimulationQuestions(3);

  // FZ Simulation 3 (15 items: KFF-FZ-GP3-001 through KFF-FZ-GP3-015)
  const fz = [...GENERALPROBE_3_FZ_QUESTIONS];

  // GM Simulation 3 (8 cards, 25 questions: KFF-GM-GP3-001 through KFF-GM-GP3-025)
  const gmCards = [...GENERALPROBE_3_GM_CARDS];
  const gmRecallQuestions = [...RAW_GENERALPROBE_3_GM_QUESTIONS];
  const gmStoredQuestions = [...GENERALPROBE_3_GM_STORED_QUESTIONS];

  // ZF Simulation 3 (10 items: KFF-ZF-GP3-001 through KFF-ZF-GP3-010)
  const zf = [...GENERALPROBE_3_ZF_QUESTIONS];

  // WF Simulation 3 (15 items: KFF-WF-GP3-001 through KFF-WF-GP3-015)
  const wf = [...GENERALPROBE_3_WF_QUESTIONS];

  // IE Simulation 3 (10 items: KFF-IE-GP3-001 through KFF-IE-GP3-010)
  const ie = [...GENERALPROBE_3_IE_QUESTIONS];

  // SEK: ER Simulation 3 (12 items: SEK-ER-GP3-001..012), EE Simulation 3 (14 items: SEK-EE-GP3-001..014), SE Simulation 3 (14 items: SEK-SE-GP3-001..014)
  const er = [...GENERALPROBE_3_ER_QUESTIONS];
  const ee = [...GENERALPROBE_3_EE_QUESTIONS];
  const se = [...GENERALPROBE_3_SE_QUESTIONS];

  return {
    id: "generalprobe-3",
    simNumber: 3,
    title: "MedAT-H Generalprobe #3",
    subtitle: "Vollständige MedAT-H-Simulation mit originalgetreuen Aufgabensets",
    bmsQuestions: bms,
    tvQuestions: tv,
    fzQuestions: fz,
    gmCards,
    zfQuestions: zf,
    wfQuestions: wf,
    gmRecallQuestions,
    gmStoredQuestions,
    ieQuestions: ie,
    erQuestions: er,
    eeQuestions: ee,
    seQuestions: se,
  };
}

export const GENERALPROBE_3_DATASET = buildGeneralprobe3Dataset();

/**
 * Factory for complete Generalprobe #4
 */
export function buildGeneralprobe4Dataset(): GeneralprobeDataset {
  const bms = buildBmsSimulationQuestions(4);
  const tv = buildTvSimulationQuestions(4);

  const fz = buildFzSimulationQuestions(4);
  const gmCards = buildGmSimulationCards(4);
  const gmRecallQuestions = [...RAW_GENERALPROBE_4_GM_QUESTIONS];
  const gmStoredQuestions = buildGmSimulationQuestions(4);
  const zf = buildZfSimulationQuestions(4);
  const wf = buildWfSimulationQuestions(4);
  const ie = buildIeSimulationQuestions(4);
  const er = buildErSimulationQuestions(4);
  const ee = buildEeSimulationQuestions(4);
  const se = buildSeSimulationQuestions(4);

  return {
    id: "generalprobe-4",
    simNumber: 4,
    title: "MedAT-H Generalprobe #4",
    subtitle: "Vollständige MedAT-H-Simulation mit originalgetreuen Aufgabensets",
    bmsQuestions: bms,
    tvQuestions: tv,
    fzQuestions: fz,
    gmCards,
    zfQuestions: zf,
    wfQuestions: wf,
    gmRecallQuestions,
    gmStoredQuestions,
    ieQuestions: ie,
    erQuestions: er,
    eeQuestions: ee,
    seQuestions: se,
  };
}

export const GENERALPROBE_4_DATASET = buildGeneralprobe4Dataset();

/**
 * Factory for complete Generalprobe #5
 */
export function buildGeneralprobe5Dataset(): GeneralprobeDataset {
  const bms = buildBmsSimulationQuestions(5);
  const tv = buildTvSimulationQuestions(5);

  const fz = buildFzSimulationQuestions(5);
  const gmCards = buildGmSimulationCards(5);
  const gmRecallQuestions = [...RAW_GENERALPROBE_4_GM_QUESTIONS];
  const gmStoredQuestions = buildGmSimulationQuestions(5);
  const zf = buildZfSimulationQuestions(5);
  const wf = buildWfSimulationQuestions(5);
  const ie = buildIeSimulationQuestions(5);
  const er = buildErSimulationQuestions(5);
  const ee = buildEeSimulationQuestions(5);
  const se = buildSeSimulationQuestions(5);

  return {
    id: "generalprobe-5",
    simNumber: 5,
    title: "MedAT-H Generalprobe #5",
    subtitle: "Vollständige MedAT-H-Simulation mit originalgetreuen Aufgabensets",
    bmsQuestions: bms,
    tvQuestions: tv,
    fzQuestions: fz,
    gmCards,
    zfQuestions: zf,
    wfQuestions: wf,
    gmRecallQuestions,
    gmStoredQuestions,
    ieQuestions: ie,
    erQuestions: er,
    eeQuestions: ee,
    seQuestions: se,
  };
}

export const GENERALPROBE_5_DATASET = buildGeneralprobe5Dataset();

export function getGeneralprobeDataset(id: string = "generalprobe-1"): GeneralprobeDataset {
  if (id === "generalprobe-5" || id === "mock-full-medat-h-5") {
    return GENERALPROBE_5_DATASET;
  }
  if (id === "generalprobe-4" || id === "mock-full-medat-h-4") {
    return GENERALPROBE_4_DATASET;
  }
  if (id === "generalprobe-3" || id === "mock-full-medat-h-3") {
    return GENERALPROBE_3_DATASET;
  }
  if (id === "generalprobe-2" || id === "mock-full-medat-h-2") {
    return GENERALPROBE_2_DATASET;
  }
  return GENERALPROBE_1_DATASET;
}

