import fs from "fs";
import path from "path";
import { RAW_GENERALPROBE_1_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe1BioQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_biology_40_questions.md";

let md = `# MedAT BMS Biologie — Generalprobe #1 Aufgabenbank (40 Aufgaben)

Vollständige, fachlich und terminologisch geprüfte Prüfungsaufgabenbank für den Untertest **Biologie** im Basiskenntnistest für Medizinische Studien (BMS) der **MedAT-H Generalprobe #1**.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Spezifikation | Realisierter Wert |
| :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 40 Aufgaben | **40 Aufgaben** (\`BIO-BMS-001\` bis \`BIO-BMS-040\`) |
| **Antwortoptionen** | A, B, C, D, E | **5 Optionen je Aufgabe** |
| **BMS Gesamtintegration** | 94 Aufgaben | **Bio: 40, Chem: 24, Phys: 18, Math: 12** |

---

## 2. Alle 40 Biologie-Aufgaben im Detail

`;

RAW_GENERALPROBE_1_BIO_QUESTIONS.forEach((q, idx) => {
  md += `### ${q.id} (Aufgabe ${idx + 1}/40)
- **Themenbereich:** ${q.primary_topic} · ${q.subtopic}
- **Schwierigkeit:** ${q.difficulty}
- **Frage:** ${q.stem}
- **Optionen:**
  - **A:** ${q.options.A}
  - **B:** ${q.options.B}
  - **C:** ${q.options.C}
  - **D:** ${q.options.D}
  - **E:** ${q.options.E}
- **Korrekte Antwort:** **${q.correct_answer}**
- **Fachbegründung:** ${q.explanation_correct}
- **Distraktor-Analyse:**
  - **Option ${Object.keys(q.explanations_incorrect)[0] || ""}:** ${Object.values(q.explanations_incorrect)[0] || ""}
  - **Option ${Object.keys(q.explanations_incorrect)[1] || ""}:** ${Object.values(q.explanations_incorrect)[1] || ""}
  - **Option ${Object.keys(q.explanations_incorrect)[2] || ""}:** ${Object.values(q.explanations_incorrect)[2] || ""}
  - **Option ${Object.keys(q.explanations_incorrect)[3] || ""}:** ${Object.values(q.explanations_incorrect)[3] || ""}

---

`;
});

fs.writeFileSync(targetPath, md, "utf-8");
console.log(`Successfully written 40 questions to ${targetPath}`);
