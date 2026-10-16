import { FZ_SIMULATION_1_QUESTIONS } from "../src/data/questions/fz/fzSimulation1";
import { FZ_SIMULATION_2_QUESTIONS } from "../src/data/questions/fz/fzSimulation2";
import { FZ_SIMULATION_3_QUESTIONS } from "../src/data/questions/fz/fzSimulation3";

console.log("Sim 1 count:", FZ_SIMULATION_1_QUESTIONS.length);
console.log("Sim 2 count:", FZ_SIMULATION_2_QUESTIONS.length);
console.log("Sim 3 count:", FZ_SIMULATION_3_QUESTIONS.length);

console.log("\nSim 3 questions overview:");
FZ_SIMULATION_3_QUESTIONS.forEach((q, i) => {
  console.log(
    `Q${i + 1} (${q.id}): diff=${q.difficulty}, key=${q.correctAnswer}, pieces=${q.pieces.length}, shape=${q.metadata?.shapeFamily}`
  );
});

console.log("\nAnswer Key distribution in Sim 3:");
const keys: Record<string, number> = {};
FZ_SIMULATION_3_QUESTIONS.forEach((q) => {
  keys[q.correctAnswer] = (keys[q.correctAnswer] || 0) + 1;
});
console.log(keys);
