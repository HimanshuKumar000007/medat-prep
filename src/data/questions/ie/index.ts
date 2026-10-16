import type { StoredQuestion } from "../types";
import { IE_SIMULATION_1_DATA } from "./ieSimulation1";
import { IE_SIMULATION_2_DATA } from "./ieSimulation2";
import { IE_SIMULATION_3_DATA } from "./ieSimulation3";
import { IE_SIMULATION_4_DATA } from "./ieSimulation4";
import { IE_SIMULATION_5_DATA } from "./ieSimulation5";
import { IE_SIMULATION_6_DATA } from "./ieSimulation6";
import { IE_SIMULATION_7_DATA } from "./ieSimulation7";
import { IE_SIMULATION_8_DATA } from "./ieSimulation8";
import { IE_SIMULATION_9_DATA } from "./ieSimulation9";
import { IE_SIMULATION_10_DATA } from "./ieSimulation10";
import {
  type IeQuestionData,
  type IeSimulationData,
  ieQuestionToStoredQuestion,
} from "./types";
import { GENERALPROBE_2_IE_QUESTIONS } from "../../generalprobe/generalprobe2IeQuestions";
import { GENERALPROBE_3_IE_QUESTIONS } from "../../generalprobe/generalprobe3IeQuestions";
import { GENERALPROBE_4_IE_QUESTIONS } from "../../generalprobe/generalprobe4IeQuestions";

export * from "./types";
export { IE_SIMULATION_1_DATA } from "./ieSimulation1";
export { IE_SIMULATION_2_DATA } from "./ieSimulation2";
export { IE_SIMULATION_3_DATA } from "./ieSimulation3";
export { IE_SIMULATION_4_DATA } from "./ieSimulation4";
export { IE_SIMULATION_5_DATA } from "./ieSimulation5";
export { IE_SIMULATION_6_DATA } from "./ieSimulation6";
export { IE_SIMULATION_7_DATA } from "./ieSimulation7";
export { IE_SIMULATION_8_DATA } from "./ieSimulation8";
export { IE_SIMULATION_9_DATA } from "./ieSimulation9";
export { IE_SIMULATION_10_DATA } from "./ieSimulation10";

export const ALL_IE_SIMULATIONS: IeSimulationData[] = [
  IE_SIMULATION_1_DATA,
  IE_SIMULATION_2_DATA,
  IE_SIMULATION_3_DATA,
  IE_SIMULATION_4_DATA,
  IE_SIMULATION_5_DATA,
  IE_SIMULATION_6_DATA,
  IE_SIMULATION_7_DATA,
  IE_SIMULATION_8_DATA,
  IE_SIMULATION_9_DATA,
  IE_SIMULATION_10_DATA,
];

export const ALL_IE_QUESTIONS: IeQuestionData[] = ALL_IE_SIMULATIONS.flatMap(
  (sim) => sim.questions
);

export const IE_STORED_QUESTIONS: StoredQuestion[] = [
  ...ALL_IE_SIMULATIONS.flatMap((sim) =>
    sim.questions.map((q) => ieQuestionToStoredQuestion(q, sim))
  ),
  ...IE_SIMULATION_1_DATA.questions.map((q, idx) => {
    const sq = ieQuestionToStoredQuestion(q, IE_SIMULATION_1_DATA);
    return {
      ...sq,
      id: `KFF-IE-${String(idx + 1).padStart(3, "0")}`,
      legacyId: q.id,
    };
  }),
  ...GENERALPROBE_2_IE_QUESTIONS,
  ...GENERALPROBE_3_IE_QUESTIONS,
  ...GENERALPROBE_4_IE_QUESTIONS,
];

export function getIeSimulationById(
  simulationId: string
): IeSimulationData | undefined {
  return ALL_IE_SIMULATIONS.find((sim) => sim.simulationId === simulationId);
}

export function getIeSimulationByNumber(
  simNumber: number
): IeSimulationData | undefined {
  return ALL_IE_SIMULATIONS.find((sim) => sim.simNumber === simNumber);
}
