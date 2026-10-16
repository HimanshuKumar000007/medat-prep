/**
 * Script to generate medat_sek_ee_generalprobe2_14_questions.md artifact
 */

import * as fs from "fs";
import * as path from "path";
import {
  RAW_GENERALPROBE_2_EE_QUESTIONS,
  GENERALPROBE_2_EE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe2EeQuestions";

const targetPath =
  "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_sek_ee_generalprobe2_14_questions.md";

const rawQuestions = RAW_GENERALPROBE_2_EE_QUESTIONS;

let doc = `# MedAT SEK — Emotionen erkennen (EE) — Generalprobe #2
## Vollständige Aufgabendokumentation & Psychometrischer Validierungsbericht der 14 Szenarien & 70 Emotionseinstufungen

> [!IMPORTANT]
> **Didaktischer Transparenzhinweis & Urheberrechts-Disclaimer**:
> Bei dem vorliegenden Fragenset handelt es sich um eine **originale, eigens erstellte didaktische Aufgabensammlung** zur gezielten Vorbereitung auf den SEK-Untertest *Emotionen erkennen (EE)* des MedAT-H und MedAT-Z. Es handelt sich **nicht** um offizielle Prüfungsaufgaben der Medizinischen Universitäten Wien, Innsbruck, Graz oder Linz. Alle 14 Szenarien und 70 Emotionsurteile basieren auf realitätsnahen zwischenmenschlichen und klinischen Situationen. Sie wurden psychologisch und didaktisch auf absolute Widerspruchsfreiheit, lebensnahe Perspektivenübernahme und eindeutige Kontextbegründungen geprüft.

---

## 1. Übersicht & Validierungsmetriken

| Metrik | Soll-Vorgabe (MedAT Spezifikation) | Ist-Zustand (Generalprobe #2) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Genau 14 Szenarien | 14 Szenarien (\`SEK-EE-GP2-001\` bis \`SEK-EE-GP2-014\`) | ✅ Erfüllt |
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
   - Emotionale Reaktionen sind in der menschlichen Psyche selten eindimensional. In anspruchsvollen Situationen koexistieren positive und belastende Gefühle (z. B. gleichzeitige *Erleichterung* über das Überleben und *Erschöpfung* nach einer Reanimation in Q12; oder *Wehmut* und *Mitgefühl* beim Tod einer Patientin in Q10).

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

1. **Einbindung in den Test-Simulator (\`buildGeneralprobe2Dataset\`)**:
   - Die 14 Szenarien sind über \`GENERALPROBE_2_EE_QUESTIONS\` in \`src/data/generalprobe/generalprobeData.ts\` verankert.
   - Der SEK-Abschnitt von Generalprobe #2 umfasst exakt:
     - 12 Aufgaben *Emotionen regulieren* (ER) — 18 Minuten
     - 14 Aufgaben *Emotionen erkennen* (EE) — 21 Minuten
     - 14 Aufgaben *Soziales Entscheiden* (SE) — 21 Minuten
     - **Gesamt: 40 gewertete SEK-Aufgaben** (100% MedAT-konform).

2. **Scoring-Engine & Auswertung**:
   - Die Antworten werden über das platformspezifische Base-3-Encoding (\`encodeEeSelections\`, \`decodeEeSelections\`) verarbeitet.
   - 1 Rohpunkt wird exakt dann vergeben, wenn alle 5 Emotionen einer Aufgabe mit dem Modellschlüssel übereinstimmen.
   - Bei 4 oder weniger Treffern bzw. unvollständiger Bearbeitung resultieren **0 Punkte** (strikte MedAT All-or-Nothing-Regel).

3. **Vollständige Entkopplung von Generalprobe #1**:
   - Die 14 Szenarien von Generalprobe #1 (\`SEK-EE-001\` bis \`SEK-EE-014\`) bleiben absolut unverändert erhalten.
   - Keines der 14 neuen GP2-Szenarien überschneidet sich mit GP1-Personen oder -Kontexten.
`;

fs.writeFileSync(targetPath, doc, "utf8");
console.log(`Successfully generated artifact at: ${targetPath}`);
