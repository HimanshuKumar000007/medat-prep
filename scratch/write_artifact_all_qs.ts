import fs from "fs";
import path from "path";
import { RAW_GENERALPROBE_2_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe2BiologyQuestions";

let out = "# MedAT-H BMS Biologie Generalprobe #2 — Alle 40 Fragen\n\n";

const chapterMap: Record<string, string> = {
  "Human Cell Biology": "Kapitel 1: Die menschliche Zelle (bio-01-zelle)",
  "Tissues and Organ Systems": "Kapitel 2: Gewebe und Organsysteme des Menschen (bio-02-koerper)",
  "Human Development and Reproduction": "Kapitel 3: Fortpflanzung und Frühentwicklung (bio-03-fruehentwicklung)",
  "Classical Genetics and Heredity": "Kapitel 4: Klassische Genetik und Vererbung (bio-04-genetik)",
  "Molecular Genetics": "Kapitel 5: Molekularbiologie und Genetik (bio-05-molgen)",
  "Cellular Metabolism": "Kapitel 6: Zellstoffwechsel und Energiehaushalt (bio-06-stoffwechsel)",
  "Cardiovascular Physiology": "Kapitel 7: Herz-Kreislauf-System (bio-07-herzkreislauf)",
  "Respiratory Physiology": "Kapitel 8: Atmung und Gasaustausch (bio-08-atmung)",
  "Neurobiology and Senses": "Kapitel 9: Nervensystem und Sinnesorgane (bio-09-nervensystem)",
};

let currentChapter = "";

RAW_GENERALPROBE_2_BIO_QUESTIONS.forEach((q, idx) => {
  const chTitle = chapterMap[q.primary_topic] || q.primary_topic;
  if (chTitle !== currentChapter) {
    currentChapter = chTitle;
    out += `\n## ${currentChapter}\n\n`;
  }

  out += `### Frage ${idx + 1} (${q.id})\n`;
  out += `- **Themengebiet:** ${q.primary_topic} · ${q.subtopic}\n`;
  out += `- **Schwierigkeit:** ${q.difficulty === "foundational" ? "Grundlagen (Leicht)" : q.difficulty === "intermediate" ? "Mittel" : "Schwer (Transfer)"}\n`;
  out += `- **Lösungsbuchstabe:** **${q.correct_answer}**\n\n`;
  out += `**Fragetext:**\n>${q.stem}\n\n`;
  out += `**Antwortoptionen:**\n`;
  out += `- **(A)** ${q.options.A}\n`;
  out += `- **(B)** ${q.options.B}\n`;
  out += `- **(C)** ${q.options.C}\n`;
  out += `- **(D)** ${q.options.D}\n`;
  out += `- **(E)** ${q.options.E}\n\n`;
  out += `**Fachliche Erklärung (Lösung):**\n${q.explanation_correct}\n\n`;
  out += `**Distraktor-Analyse:**\n`;
  const distractorLetters = (["A", "B", "C", "D", "E"] as const).filter((l) => l !== q.correct_answer);
  distractorLetters.forEach((dl) => {
    out += `- **Option (${dl}):** ${q.explanations_incorrect[dl]}\n`;
  });
  out += `\n---\n\n`;
});

const targetArtifact = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_biology_generalprobe2_all_40_questions.md";
fs.writeFileSync(targetArtifact, out, "utf8");
console.log("Successfully wrote all 40 questions to:", targetArtifact);
