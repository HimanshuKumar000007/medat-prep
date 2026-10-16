import type { StoredQuestion } from "../types";
import type { SeQuestionData, SeSimulationData } from "./types";
import { toStoredQuestion } from "./types";

import { SE_SIMULATION_1 } from "./seSimulation1";
import { SE_SIMULATION_2 } from "./seSimulation2";
import { SE_SIMULATION_3 } from "./seSimulation3";
import { SE_SIMULATION_4 } from "./seSimulation4";
import { SE_SIMULATION_5 } from "./seSimulation5";
import {
  GENERALPROBE_1_SE_QUESTIONS,
  RAW_GENERALPROBE_1_SE_QUESTIONS,
} from "../../generalprobe/generalprobe1SeQuestions";
import {
  GENERALPROBE_2_SE_QUESTIONS,
  RAW_GENERALPROBE_2_SE_QUESTIONS,
} from "../../generalprobe/generalprobe2SeQuestions";
import {
  GENERALPROBE_3_SE_QUESTIONS,
  RAW_GENERALPROBE_3_SE_QUESTIONS,
} from "../../generalprobe/generalprobe3SeQuestions";
import {
  GENERALPROBE_4_SE_QUESTIONS,
  RAW_GENERALPROBE_4_SE_QUESTIONS,
} from "../../generalprobe/generalprobe4SeQuestions";

export * from "./types";
export * from "./seSimulation1";
export * from "./seSimulation2";
export * from "./seSimulation3";
export * from "./seSimulation4";
export * from "./seSimulation5";

export const ALL_SE_SIMULATIONS: SeSimulationData[] = [
  SE_SIMULATION_1,
  SE_SIMULATION_2,
  SE_SIMULATION_3,
  SE_SIMULATION_4,
  SE_SIMULATION_5,
];

export const ALL_SE_QUESTIONS: SeQuestionData[] = [
  ...RAW_GENERALPROBE_1_SE_QUESTIONS,
  ...RAW_GENERALPROBE_2_SE_QUESTIONS,
  ...RAW_GENERALPROBE_3_SE_QUESTIONS,
  ...RAW_GENERALPROBE_4_SE_QUESTIONS,
  ...SE_SIMULATION_1.questions,
  ...SE_SIMULATION_2.questions,
  ...SE_SIMULATION_3.questions,
  ...SE_SIMULATION_4.questions,
  ...SE_SIMULATION_5.questions,
];

export const SE_QUESTIONS_BY_ID: Record<string, SeQuestionData> = {};
ALL_SE_QUESTIONS.forEach((q) => {
  SE_QUESTIONS_BY_ID[q.id] = q;
  if (q.legacyId) {
    SE_QUESTIONS_BY_ID[q.legacyId] = q;
  }
});

export const SE_STORED_QUESTIONS: StoredQuestion[] = [
  ...ALL_SE_SIMULATIONS.flatMap((sim) =>
    sim.questions.map((q) => toStoredQuestion(q, sim))
  ),
  ...GENERALPROBE_1_SE_QUESTIONS,
  ...GENERALPROBE_2_SE_QUESTIONS,
  ...GENERALPROBE_3_SE_QUESTIONS,
  ...GENERALPROBE_4_SE_QUESTIONS,
];

export function getSeSimulationById(simulationId: string): SeSimulationData | undefined {
  return ALL_SE_SIMULATIONS.find((sim) => sim.simulationId === simulationId);
}

export function getSeQuestionById(questionId: string): SeQuestionData | undefined {
  return SE_QUESTIONS_BY_ID[questionId];
}
