import type { StoredQuestion } from "../types";
import type { EeQuestionData, EeSimulationData } from "./types";
import { eeQuestionToStoredQuestion } from "./types";
import { EE_SIMULATION_1 } from "./eeSimulation1";
import { EE_SIMULATION_2 } from "./eeSimulation2";
import { EE_SIMULATION_3 } from "./eeSimulation3";
import { EE_SIMULATION_4 } from "./eeSimulation4";
import { EE_SIMULATION_5 } from "./eeSimulation5";

export * from "./types";
export { EE_SIMULATION_1 } from "./eeSimulation1";
export { EE_SIMULATION_2 } from "./eeSimulation2";
export { EE_SIMULATION_3 } from "./eeSimulation3";
export { EE_SIMULATION_4 } from "./eeSimulation4";
export { EE_SIMULATION_5 } from "./eeSimulation5";

export const ALL_EE_SIMULATIONS: EeSimulationData[] = [
  EE_SIMULATION_1,
  EE_SIMULATION_2,
  EE_SIMULATION_3,
  EE_SIMULATION_4,
  EE_SIMULATION_5,
];

export const ALL_EE_QUESTIONS: EeQuestionData[] = ALL_EE_SIMULATIONS.flatMap(
  (sim) => sim.questions
);

import { GENERALPROBE_2_EE_QUESTIONS } from "../../generalprobe/generalprobe2EeQuestions";
import { GENERALPROBE_3_EE_QUESTIONS } from "../../generalprobe/generalprobe3EeQuestions";
import { GENERALPROBE_4_EE_QUESTIONS } from "../../generalprobe/generalprobe4EeQuestions";

export const EE_STORED_QUESTIONS: StoredQuestion[] = [
  ...ALL_EE_SIMULATIONS.flatMap((sim) =>
    sim.questions.map((q) => eeQuestionToStoredQuestion(q, sim))
  ),
  ...EE_SIMULATION_1.questions.map((q, idx) => {
    const sq = eeQuestionToStoredQuestion(q, EE_SIMULATION_1);
    return {
      ...sq,
      id: `SEK-EE-${String(idx + 1).padStart(3, "0")}`,
      legacyId: q.id,
    };
  }),
  ...GENERALPROBE_2_EE_QUESTIONS,
  ...GENERALPROBE_3_EE_QUESTIONS,
  ...GENERALPROBE_4_EE_QUESTIONS,
];

export function getEeSimulationById(simulationId: string): EeSimulationData | undefined {
  return ALL_EE_SIMULATIONS.find((sim) => sim.simulationId === simulationId);
}

export function getEeSimulationByNumber(simNumber: number): EeSimulationData | undefined {
  return ALL_EE_SIMULATIONS.find((sim) => sim.simNumber === simNumber);
}
