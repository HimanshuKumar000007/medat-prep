import { WF_SIMULATION_1_QUESTIONS } from "../src/data/questions/wf/wfSimulation1";
import { WF_SIMULATION_2_QUESTIONS } from "../src/data/questions/wf/wfSimulation2";
import { WF_SIMULATION_3_QUESTIONS } from "../src/data/questions/wf/wfSimulation3";
import { WF_SIMULATION_4_QUESTIONS } from "../src/data/questions/wf/wfSimulation4";
import { WF_SIMULATION_5_QUESTIONS } from "../src/data/questions/wf/wfSimulation5";
import { WF_SIMULATION_6_QUESTIONS } from "../src/data/questions/wf/wfSimulation6";
import { WF_SIMULATION_7_QUESTIONS } from "../src/data/questions/wf/wfSimulation7";
import { WF_SIMULATION_8_QUESTIONS } from "../src/data/questions/wf/wfSimulation8";
import { WF_SIMULATION_9_QUESTIONS } from "../src/data/questions/wf/wfSimulation9";
import { WF_SIMULATION_10_QUESTIONS } from "../src/data/questions/wf/wfSimulation10";

const allSims = [
  ...WF_SIMULATION_1_QUESTIONS,
  ...WF_SIMULATION_2_QUESTIONS,
  ...WF_SIMULATION_3_QUESTIONS,
  ...WF_SIMULATION_4_QUESTIONS,
  ...WF_SIMULATION_5_QUESTIONS,
  ...WF_SIMULATION_6_QUESTIONS,
  ...WF_SIMULATION_7_QUESTIONS,
  ...WF_SIMULATION_8_QUESTIONS,
  ...WF_SIMULATION_9_QUESTIONS,
  ...WF_SIMULATION_10_QUESTIONS,
];

console.log("Total existing simulation questions:", allSims.length);
const words = new Set<string>();
allSims.forEach(q => words.add(q.targetWord.toUpperCase()));
console.log("Total unique words:", words.size);
console.log("Word list:", Array.from(words).sort().join(", "));
