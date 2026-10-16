import { FZ_SIMULATION_1_QUESTIONS } from "../src/data/questions/fz/fzSimulation1";
import { FZ_SIMULATION_2_QUESTIONS } from "../src/data/questions/fz/fzSimulation2";
import { FZ_SIMULATION_3_QUESTIONS } from "../src/data/questions/fz/fzSimulation3";

console.log("GP1 shapes:", FZ_SIMULATION_1_QUESTIONS.map(q => q.metadata?.shapeFamily));
console.log("GP2 shapes:", FZ_SIMULATION_2_QUESTIONS.map(q => q.metadata?.shapeFamily));
console.log("Sim3 shapes:", FZ_SIMULATION_3_QUESTIONS.map(q => q.metadata?.shapeFamily));
