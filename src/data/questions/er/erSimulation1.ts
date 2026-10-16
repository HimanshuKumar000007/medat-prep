import type { ErSimulationData } from "./types";
import { RAW_GENERALPROBE_1_ER_QUESTIONS } from "../../generalprobe/generalprobe1ErQuestions";

export const ER_SIMULATION_1: ErSimulationData = {
  simulationId: "er-sim1",
  simNumber: 1,
  title: "Simulation 1 — Emotionen regulieren",
  subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (~90s/Aufgabe)",
  timeLimitSeconds: 18 * 60, // 1080 seconds
  questions: RAW_GENERALPROBE_1_ER_QUESTIONS,
};
