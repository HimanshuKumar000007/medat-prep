import type { StoredQuestion } from "../types";
import type { ErQuestionData, ErSimulationData } from "./types";
import { erQuestionToStoredQuestion } from "./types";
import { ER_SIMULATION_1 } from "./erSimulation1";

import { GENERALPROBE_1_ER_QUESTIONS } from "../../generalprobe/generalprobe1ErQuestions";
import { GENERALPROBE_2_ER_QUESTIONS } from "../../generalprobe/generalprobe2ErQuestions";
import { GENERALPROBE_3_ER_QUESTIONS } from "../../generalprobe/generalprobe3ErQuestions";
import { GENERALPROBE_4_ER_QUESTIONS } from "../../generalprobe/generalprobe4ErQuestions";

export * from "./types";
export { ER_SIMULATION_1 } from "./erSimulation1";

// Registry of all ER simulations (Simulation 1 authored, Simulations 2-5 progressive)
export const ALL_ER_SIMULATIONS: ErSimulationData[] = [
  ER_SIMULATION_1,
];

// Flat list of all ER questions
export const ALL_ER_QUESTIONS: ErQuestionData[] = ALL_ER_SIMULATIONS.flatMap(
  (sim) => sim.questions
);

// All ER questions adapted for the global StoredQuestion schema
export const ER_STORED_QUESTIONS: StoredQuestion[] = [
  ...ALL_ER_SIMULATIONS.flatMap((sim) =>
    sim.questions.map((q) => erQuestionToStoredQuestion(q, sim))
  ),
  ...GENERALPROBE_1_ER_QUESTIONS,
  ...GENERALPROBE_2_ER_QUESTIONS,
  ...GENERALPROBE_3_ER_QUESTIONS,
  ...GENERALPROBE_4_ER_QUESTIONS,
];

export function getErSimulationById(simulationId: string): ErSimulationData | undefined {
  return ALL_ER_SIMULATIONS.find((sim) => sim.simulationId === simulationId);
}

export function getErSimulationByNumber(simNumber: number): ErSimulationData | undefined {
  return ALL_ER_SIMULATIONS.find((sim) => sim.simNumber === simNumber);
}
