import type { StoredQuestion } from "../types";
import type { GmSimulationData } from "./types";
import { gmQuestionToStoredQuestion } from "./types";

import { GM_SIMULATION_1_DATA } from "./gmSimulation1";
import { GM_SIMULATION_2_DATA } from "./gmSimulation2";
import { GM_SIMULATION_3_DATA } from "./gmSimulation3";
import { GM_SIMULATION_4_DATA } from "./gmSimulation4";
import { GM_SIMULATION_5_DATA } from "./gmSimulation5";

export * from "./types";
export * from "./gmSimulation1";
export * from "./gmSimulation2";
export * from "./gmSimulation3";
export * from "./gmSimulation4";
export * from "./gmSimulation5";

export const ALL_GM_SIMULATIONS: GmSimulationData[] = [
  GM_SIMULATION_1_DATA,
  GM_SIMULATION_2_DATA,
  GM_SIMULATION_3_DATA,
  GM_SIMULATION_4_DATA,
  GM_SIMULATION_5_DATA,
];

/**
 * All 125 GM Recall Questions mapped to the unified StoredQuestion format
 */
export const GM_STORED_QUESTIONS: StoredQuestion[] = [
  ...ALL_GM_SIMULATIONS.flatMap((sim) => sim.questions.map((q) => gmQuestionToStoredQuestion(q, sim))),
  ...GM_SIMULATION_1_DATA.questions.map((q, idx) => {
    const sq = gmQuestionToStoredQuestion(q, GM_SIMULATION_1_DATA);
    return {
      ...sq,
      id: `KFF-GM-${String(idx + 1).padStart(3, "0")}`,
      legacyId: q.id,
    };
  }),
  ...GM_SIMULATION_2_DATA.questions.map((q, idx) => {
    const sq = gmQuestionToStoredQuestion(q, GM_SIMULATION_2_DATA);
    return {
      ...sq,
      id: `KFF-GM-GP2-${String(idx + 1).padStart(3, "0")}`,
      legacyId: q.id,
    };
  }),
];
