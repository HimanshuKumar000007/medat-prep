import type { SeSimulationData } from "./types";
import { RAW_GENERALPROBE_1_SE_QUESTIONS } from "../../generalprobe/generalprobe1SeQuestions";

export const SE_SIMULATION_1_QUESTIONS = RAW_GENERALPROBE_1_SE_QUESTIONS;

export const SE_SIMULATION_1: SeSimulationData = {
  simulationId: "se-sim1",
  simNumber: 1,
  title: "Simulation 1 — Soziales Entscheiden",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s / Aufgabe)",
  timeLimitSeconds: 21 * 60, // 1260 seconds
  questions: RAW_GENERALPROBE_1_SE_QUESTIONS,
};
