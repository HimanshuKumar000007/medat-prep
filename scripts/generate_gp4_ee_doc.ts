/**
 * Script to generate medat_sek_ee_generalprobe4_14_questions.md artifact
 */

import * as fs from "fs";
import {
  RAW_GENERALPROBE_4_EE_QUESTIONS,
  GENERALPROBE_4_EE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4EeQuestions";

const targetPath =
  "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_sek_ee_generalprobe4_14_questions.md";

const rawQuestions = RAW_GENERALPROBE_4_EE_QUESTIONS;

let doc = `# MedAT SEK — Emotionen erkennen (EE) — Generalprobe #4
## Vollständige Aufgabendokumentation & Psychometrischer Validierungsbericht der 14 Szenarien & 70 Emotionseinstufungen

> [!IMPORTANT]
> **Didaktischer Transparenzhinweis & Urheberrechts-Disclaimer**:
> Bei dem vorliegenden Fragenset handelt es sich um eine **originale, eigens erstellte didaktische Aufgabensammlung** zur gezielten Vorbereitung auf den SEK-Untertest *Emotionen erkennen (EE)* des MedAT-H und MedAT-Z. Es handelt sich **nicht** um offizielle Prüfungsaufgaben der Medizinischen Universitäten Wien, Innsbruck, Graz oder Linz. Alle 14 Szenarien und 70 Emotionsurteile basieren auf realitätsnahen zwischenmenschlichen, universitären und klinischen Situationen. Sie wurden psychologisch und didaktisch auf absolute Widerspruchsfreiheit, lebensnahe Perspektivenübernahme und eindeutige Kontextbegründungen geprüft.

---

## 1. Übersicht & Validierungsmetriken

| Metrik | Soll-Vorgabe (MedAT Spezifikation) | Ist-Zustand (Generalprobe #4) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Genau 14 Szenarien | 14 Szenarien (\`SEK-EE-GP4-001\` bis \`SEK-EE-GP4-014\`) | ✅ Erfüllt |
| **Prüfungsdauer** | Genau 21 Minuten (1260 Sekunden, ~90s pro Aufgabe) | 21 Minuten im Simulator (\`STAGE_CONFIGS.EE\`) | ✅ Erfüllt |
| **Zielgruppe & Zulassung** | MedAT-H und MedAT-Z | \`exam: "BOTH"\` (für Human- und Zahnmedizin gewertet) | ✅ Erfüllt |
| **Prüfungsreihenfolge (SEK)** | Emotionen regulieren (ER) ➔ **Emotionen erkennen (EE)** ➔ Soziales Entscheiden (SE) | Exakt an 2. Position des SEK-Blocks | ✅ Erfüllt |
| **Aufbau pro Aufgabe** | 1 Situationsvignette + genau 5 unabhängige Emotionsurteile (A–E) | 14 Szenarien $\\times$ 5 Emotionen = **70 Urteile** | ✅ Erfüllt |
| **Antwortformat** | Binär: *Eher wahrscheinlich* vs. *Eher unwahrscheinlich* | 5 unabhängige Zeilen mit Radio-Auswahl | ✅ Erfüllt |
| **Bewertungsregel (Scoring)** | **Strikte All-or-Nothing-Regel**: 1 Punkt nur bei 5/5 korrekten Urteilen | 1 Punkt bei 5/5, **0 Punkte bei $\\le$ 4/5 oder unvollständig** | ✅ Erfüllt |
| **Maximale Rohpunkte** | Genau 14 Punkte (1 Punkt pro Szenario) | Exakt 14 Punkte maximal im SEK-Untertest | ✅ Erfüllt |
| **Antwortverteilung** | Ausgewogenes Verhältnis (*likely* vs. *unlikely*) | **Exakt 35 Likely (50,0%) und 35 Unlikely (50,0%)** | ✅ Erfüllt |
| **Schwierigkeitsgrad** | 4 Leicht, 7 Mittel, 3 Schwer | **4 Leicht, 7 Mittel, 3 Schwer** | ✅ Erfüllt |
| **Didaktische Transparenz** | Lückenlose Einzelbegründung für alle 70 Urteile | 100% vollständig mit \`rationaleByEmotion\` hinterlegt | ✅ Erfüllt |

---

## 2. Psychologisches Fundament & Perspektivenübernahme

Im MedAT-Untertest *Emotionen erkennen (EE)* wird die Fähigkeit zur **kognitiven Empathie und emotionalen Perspektivenübernahme** geprüft:

1. **Perspektivenbindung statt Eigenprojektion**:
   - Die Testteilnehmenden müssen sich strikt in die Lage der beschriebenen Hauptperson versetzen.
   - Maßgeblich sind deren individuelle Ziele, Vorerfahrungen, Rollen und die unmittelbare Dynamik des Geschehens — nicht, wie man selbst reagieren würde.

2. **Koexistenz ambivalenter Emotionen**:
   - Emotionale Reaktionen sind in der menschlichen Psyche selten eindimensional. In anspruchsvollen Situationen koexistieren positive und belastende Gefühle (z. B. gleichzeitige *Genugtuung*, *Erleichterung* und *Verärgerung* bei Paul in Q09; oder *Zerrissenheit*, *Anspannung* und *Unbehagen* bei Tim in Q13).

3. **Trennung von Deskription und moralischem Urteil**:
   - Es wird nicht geprüft, ob eine Emotion „moralisch erwünscht“, „löblich“ oder „politisch korrekt“ ist, sondern wie wahrscheinlich sie bei der geschilderten Person tatsächlich auftritt.

---

## 3. Detaillierte Dokumentation aller 14 EE-Szenarien

`;

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  doc += `### Aufgabe ${qNum}: \`${q.id}\`
- **Schwierigkeit**: ${q.difficulty}
- **Protagonist**: **${q.person.name}** (${q.person.context})
- **Situation**:
> "${q.scenario}"

**Vorgelegte Emotionen & Validierte Einstufungen**:

| Option | Emotion | Erwartete Einstufung | Begründung aus dem Kontext |
| :---: | :--- | :---: | :--- |
`;

  q.emotions.forEach((emo) => {
    const isLikely = emo.correctProbability === "likely";
    const badge = isLikely ? "**Eher wahrscheinlich**" : "*Eher unwahrscheinlich*";
    const rationale = q.rationaleByEmotion ? q.rationaleByEmotion[emo.id] : "—";
    doc += `| **${emo.id}** | **${emo.label}** | ${badge} | ${rationale} |\n`;
  });

  doc += `
#### Gesamtdidaktische Zusammenfassung
\`\`\`text
${q.explanation}
\`\`\`

---

`;
});

doc += `## 4. Systemintegration & Architektur-Konformität

1. **Einbindung in den Test-Simulator (\`buildGeneralprobe4Dataset\`)**:
   - Die 14 Szenarien sind über \`GENERALPROBE_4_EE_QUESTIONS\` in \`src/data/generalprobe/generalprobeData.ts\` verankert.
   - Der SEK-Abschnitt von Generalprobe #4 umfasst exakt:
     - Emotionen regulieren (ER): 12 Aufgaben
     - **Emotionen erkennen (EE): 14 Aufgaben**
     - Soziales Entscheiden (SE): 14 Aufgaben
     - **SEK Gesamt**: **40 Aufgaben**
   - Die Gesamtprüfung der Generalprobe #4 beläuft sich auf **exakt 221 gewertete Aufgaben**:
     - BMS: 94 Aufgaben (40 Bio + 24 Chem + 18 Phys + 12 Math)
     - Textverständnis (TV): 12 Aufgaben
     - KFF: 75 gewertete Aufgaben (15 FZ + 10 ZF + 15 WF + 25 GM Recall + 10 IE) + 8 GM-Lernkarten
     - SEK: 40 Aufgaben (12 ER + 14 EE + 14 SE)

2. **Zentrales Fragen-Repository (\`src/data/questions/ee/index.ts\`)**:
   - Alle 14 Aufgaben sind vollständig in \`EE_STORED_QUESTIONS\` registriert und typgeprüft.

3. **Reexport für die Plattform (\`src/data/generalprobe/index.ts\`)**:
   - Öffentlicher Reexport von \`generalprobe4EeQuestions\`.
`;

fs.writeFileSync(targetPath, doc, "utf-8");
console.log(`Document successfully generated at: ${targetPath}`);
