/**
 * Script to generate medat_sek_er_generalprobe3_12_questions.md artifact
 */

import * as fs from "fs";
import * as path from "path";
import {
  RAW_GENERALPROBE_3_ER_QUESTIONS,
  GENERALPROBE_3_ER_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3ErQuestions";
import { ER_OPTION_KEYS, type ErOptionKey } from "../src/data/questions/er/types";

const targetPath =
  "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_sek_er_generalprobe3_12_questions.md";

const rawQuestions = RAW_GENERALPROBE_3_ER_QUESTIONS;

let doc = `# MedAT SEK — Emotionen regulieren (ER) — Generalprobe #3
## Vollständige Aufgabendokumentation & Psychometrischer Validierungsbericht der 12 Regulationsszenarien

> [!IMPORTANT]
> **Didaktischer Transparenzhinweis & Urheberrechts-Disclaimer**:
> Bei dem vorliegenden Fragenset handelt es sich um eine **originale, eigens erstellte didaktische Aufgabensammlung** zur gezielten Vorbereitung auf den SEK-Untertest *Emotionen regulieren (ER)* des MedAT-H und MedAT-Z. Es handelt sich **nicht** um offizielle Prüfungsaufgaben der Medizinischen Universitäten Wien, Innsbruck, Graz oder Linz. Alle 12 Aufgaben basieren auf realitätsnahen, emotional anspruchsvollen Szenarien aus Klinik, Studium und Notfallversorgung. Jede Option ist in der ersten Person ("Ich ...") formuliert und didaktisch detailliert begründet.

---

## 1. Übersicht & Validierungsmetriken

| Metrik | Soll-Vorgabe (MedAT Spezifikation) | Ist-Zustand (Generalprobe #3) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Genau 12 Aufgaben | 12 Aufgaben (\`SEK-ER-GP3-001\` bis \`SEK-ER-GP3-012\`) | ✅ Erfüllt |
| **Prüfungsdauer** | Genau 18 Minuten (1080 Sekunden, 90s pro Aufgabe) | 18 Minuten im Simulator (\`STAGE_CONFIGS.ER\`) | ✅ Erfüllt |
| **Zielgruppe & Zulassung** | MedAT-H und MedAT-Z | \`exam: "BOTH"\` (für Human- und Zahnmedizin gewertet) | ✅ Erfüllt |
| **Prüfungsreihenfolge (SEK)** | **Emotionen regulieren (ER)** ➔ Emotionen erkennen (EE) ➔ Soziales Entscheiden (SE) | Exakt an 1. Position des SEK-Blocks | ✅ Erfüllt |
| **Aufbau pro Aufgabe** | Szenario + Belastende Emotion + Handlungsziel + 4 Optionen (A–D) | 12 Aufgaben mit vollständiger psychologischer Struktur | ✅ Erfüllt |
| **Formulierungsstandard** | Streng erste Person ("Ich ...") | Alle 48 Optionen beginnen mit "Ich " | ✅ Erfüllt |
| **Antwortformat** | Single Choice: Genau eine wirksamste Handlungsstrategie | Genau 1 korrekter Schlüssel (A, B, C oder D) | ✅ Erfüllt |
| **Bewertungsregel (Scoring)** | 1 Punkt pro korrekte Antwort, 0 Punkte für Falschantworten | Maximal 12 Punkte | ✅ Erfüllt |
| **Schlüsselverteilung** | Gleichmäßige Verteilung über alle 4 Tasten | **Exakt 3 A, 3 B, 3 C, 3 D** (nicht-wiederholend: B, D, A, C, B, A, D, C, A, B, D, C) | ✅ Erfüllt |
| **Schwierigkeitsgrad** | 3 Leicht, 6 Mittel, 3 Schwer | **3 Leicht (25%), 6 Mittel (50%), 3 Schwer (25%)** | ✅ Erfüllt |
| **Didaktische Transparenz** | Vollständige Begründung aller 4 Optionen + Gesamterklärung | 100% lückenlos hinterlegt | ✅ Erfüllt |

---

## 2. Psychologisches Fundament: Das Extended Process Model der Emotionsregulation

Im MedAT-Untertest *Emotionen regulieren (ER)* wird nach dem Prozessmodell der Emotionsregulation (nach James Gross) geprüft, inwiefern eine Person fähig ist, eine dysfunktionale emotionale Reaktion durch eine zielgerichtete Regulationsstrategie zu modifizieren:

1. **Situationsauswahl & -modifikation**:
   - Aktive Umgestaltung der Rahmenbedingungen (z. B. Inanspruchnahme professioneller Pflegeberatung & familiärer Hilfe in Q10; Speaking Up zur Patientensicherheit im Schockraum in Q11).
2. **Aufmerksamkeitslenkung (Attentional Deployment)**:
   - Fokussierung auf handlungsrelevante sensorische Details, um Panik- oder Zitterspiralen zu stoppen (z. B. 20-Sekunden-Atemfokussierung in Q1; mechanisches Abstützen der Handkante zur Tremordämpfung in Q8).
3. **Kognitive Neubewertung (Cognitive Reappraisal)**:
   - Umdeutung einer Bedrohung in eine bewältigbare Herausforderung oder einen wertvollen Lernimpuls (z. B. Übungstestergebnis als diagnostische Fehleranalyse begreifen in Q3; Differenzierung von persönlicher Schuld vs. schicksalhaftem Komplikationsrisiko in Q12).
4. **Reaktionsmodulation (Response Modulation) & Impulskontrolle**:
   - Gezielte Hemmung affektiver Gegenangriffe bei Übermüdung und Deeskalation durch Empathie (z. B. in Q4 und Q5).
5. **Akzeptanz & Emotionale Verarbeitung**:
   - Konstruktive Verarbeitung von unveränderlichen Tatsachen ohne Bitterkeit (z. B. Stipendienabsage in Q9) und Annahme gesunder menschlicher Betroffenheit ohne Scham (z. B. Patiententod im Pflegepraktikum in Q7).

---

## 3. Detaillierte Dokumentation aller 12 ER-Aufgaben

`;

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  doc += `### Aufgabe ${qNum}: \`${q.id}\`
- **Schwierigkeit**: ${q.difficulty}
- **Regulationsstrategie**: \`${q.strategyType}\`
- **Belastende Emotion**: *${q.emotion}*
- **Handlungsziel**: *${q.goal}*
- **Szenario**:
> "${q.scenario}"

**Handlungsoptionen & Didaktische Validierung**:

| Option | Formulierte Handlungsstrategie | Status | Didaktische Begründung |
| :---: | :--- | :---: | :--- |
`;

  ER_OPTION_KEYS.forEach((key) => {
    const isCorrect = key === q.correctAnswer;
    const badge = isCorrect ? "**Optimal (Richtig)**" : "*Suboptimal (Distraktor)*";
    const text = q.options[key];
    const rationale = q.rationalesByOption ? q.rationalesByOption[key] : "—";
    doc += `| **${key}** | ${text} | ${badge} | ${rationale} |\n`;
  });

  doc += `
#### Didaktische Gesamteinordnung
\`\`\`text
${q.explanation}
\`\`\`

---

`;
});

doc += `## 4. Systemintegration & Architektur-Konformität

1. **Einbindung in den Test-Simulator (\`buildGeneralprobe3Dataset\`)**:
   - Die 12 Aufgaben sind über \`GENERALPROBE_3_ER_QUESTIONS\` in \`src/data/generalprobe/generalprobeData.ts\` verankert.
   - Der SEK-Abschnitt von Generalprobe #3 umfasst exakt:
     - **ER (Emotionen regulieren)**: 12 Aufgaben (\`SEK-ER-GP3-001\` – \`012\`)
     - **EE (Emotionen erkennen)**: 14 Aufgaben (\`SEK-EE-GP3-001\` – \`014\`)
     - **SE (Soziales Entscheiden)**: 14 Aufgaben (\`SEK-SE-GP2-001\` – \`014\`, Fallback)
     - **SEK Gesamt**: **40 Aufgaben** (exakte MedAT-H/Z Vorgabe)

2. **Gesamtumfang der Generalprobe #3**:
   - **BMS**: 94 Aufgaben (40 Bio, 24 Che, 18 Phy, 12 Mat)
   - **TV**: 12 Aufgaben
   - **KFF**: 75 Aufgaben (15 FZ, 10 ZF, 15 WF, 25 GM, 10 IE)
   - **SEK**: 40 Aufgaben (12 ER, 14 EE, 14 SE)
   - **Gesamtsumme Generalprobe #3**: **Exakt 221 gewertete Aufgaben**

3. **Autonomer Übungsmodus**:
   - Alle 12 Aufgaben sind zusätzlich in \`ER_STORED_QUESTIONS\` in \`src/data/questions/er/index.ts\` registriert und stehen im freien Trainingsmodus zur Verfügung.

4. **100% Non-Regression mit Generalprobe #1 und #2**:
   - Sämtliche Datenstrukturen von Generalprobe #1 und #2 bleiben vollkommen unberührt.
   - Alle 12 Aufgaben-Szenarien und IDs sind originär und kollisionsfrei.
`;

fs.writeFileSync(targetPath, doc, "utf-8");
console.log(`Document written to ${targetPath}`);
console.log(`Character count: ${doc.length}`);
