import { RAW_GENERALPROBE_1_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe1WfQuestions";
import { RAW_GENERALPROBE_2_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe2WfQuestions";
import { RAW_GENERALPROBE_3_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe3WfQuestions";
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

const allExisting = new Set<string>();
[
  ...RAW_GENERALPROBE_1_WF_QUESTIONS,
  ...RAW_GENERALPROBE_2_WF_QUESTIONS,
  ...RAW_GENERALPROBE_3_WF_QUESTIONS,
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
].forEach(q => allExisting.add(q.targetWord.toUpperCase()));

console.log("Total existing words across GP1-3 + Sim1-10:", allExisting.size);

const candidateList = [
  // Leicht (length 6)
  "TRACHEA",
  "PLEURA",
  "RADIUS",
  "FIBULA",
  "CORTEX",
  "MATRIX",
  "ISOTOP",
  "KORNEA",
  "MYELIN",
  "STEROL",
  "OSMOSE",
  "GENESE",
  "DERMIS",
  "FILTRAT",
  "URETER",
  // Mittel (length 7 - 8)
  "DIOPTRIE",
  "STERNUM",
  "HUMERUS",
  "PATELLA",
  "CRANIUM",
  "DENDRIT",
  "THALAMUS",
  "ELASTIN",
  "LAMININ",
  "INTEGRIN",
  "CYSTEIN",
  "PYRUVAT",
  "SUCCINAT",
  "FUMARAT",
  "ENTROPIE",
  "RESONANZ",
  "REVOLTE",
  "PROGNOSE",
  "REPOSIT",
  "INFARKT",
  "DOPAMIN",
  "HISTAMIN",
  "OXYTOCIN",
  "ZYLINDER",
  "SEDIMENT",
  "DIURESE",
  "KERATIN",
  // Schwer (length 8 - 9)
  "ENTHALPIE",
  "ASPARAGIN",
  "ISOMERIE",
  "METHIONIN",
  "TITRATION",
  "INDIKATOR",
  "KREATININ",
  "HARNSTOFF",
  "ADRENALIN",
  "SEROTONIN",
  "MELATONIN",
  "PROLAKTIN",
  "ANEURYSMA",
  "LABYRINTH",
  "MENISKUS",
  "CADHERIN",
  "PEROXISOM",
  "ZENTRIOL",
];

const clean: string[] = [];
candidateList.forEach(word => {
  const upper = word.toUpperCase();
  if (allExisting.has(upper)) {
    console.log(`[COLLISION] ${upper}`);
  } else if (!/^[A-Z]+$/.test(upper)) {
    console.log(`[INVALID CHARS] ${upper}`);
  } else {
    clean.push(upper);
  }
});

console.log(`Found ${clean.length} clean, original candidates:`);
clean.forEach(w => console.log(`  - ${w} (${w.length} letters, initial: ${w[0]})`));
