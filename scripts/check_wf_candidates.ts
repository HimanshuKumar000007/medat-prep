import { RAW_GENERALPROBE_1_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe1WfQuestions";
import { RAW_GENERALPROBE_2_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe2WfQuestions";
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

const candidateWords = [
  "KLINIK",
  "MAGNET",
  "PRISMA",
  "VAKUUM",
  "ALKOHOL",
  "DIALYSE",
  "KOLLAGEN",
  "EMULSION",
  "NEKROSE",
  "SYNDROM",
  "LIGAMENT",
  "VAKZINE",
  "BIOETHIK",
  "HYPOTHESE",
  "AUTONOMIE",
];

const allExistingWords = new Set<string>();
[
  ...RAW_GENERALPROBE_1_WF_QUESTIONS,
  ...RAW_GENERALPROBE_2_WF_QUESTIONS,
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
].forEach(q => allExistingWords.add(q.targetWord.toUpperCase()));

console.log("Checking candidate words against", allExistingWords.size, "existing words...");
let collisions = 0;
candidateWords.forEach(w => {
  if (allExistingWords.has(w.toUpperCase())) {
    console.error(`COLLISION FOUND: ${w}`);
    collisions++;
  } else {
    console.log(`[OK] ${w} is 100% original`);
  }
});

console.log(`Total collisions: ${collisions}`);
