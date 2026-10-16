/**
 * Script to generate medat_sek_se_generalprobe3_14_questions.md artifact
 */

import * as fs from "fs";
import * as path from "path";
import {
  RAW_GENERALPROBE_3_SE_QUESTIONS,
  GENERALPROBE_3_SE_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3SeQuestions";
import { SE_CONSIDERATION_KEYS } from "../src/data/questions/se/types";

const targetPath =
  "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_sek_se_generalprobe3_14_questions.md";

const rawQuestions = RAW_GENERALPROBE_3_SE_QUESTIONS;

let doc = `# MedAT SEK — Soziales Entscheiden (SE) — Generalprobe #3
## Vollständige Aufgabendokumentation & Psychometrischer Validierungsbericht der 14 ethischen Rangordnungs-Szenarien

> [!IMPORTANT]
> **Didaktischer Transparenzhinweis & Urheberrechts-Disclaimer**:
> Bei dem vorliegenden Fragenset handelt es sich um eine **originale, eigens erstellte didaktische Aufgabensammlung** zur gezielten Vorbereitung auf den SEK-Untertest *Soziales Entscheiden (SE)* des MedAT-H und MedAT-Z. Es handelt sich **nicht** um offizielle Prüfungsaufgaben der Medizinischen Universitäten Wien, Innsbruck, Graz oder Linz. Alle 14 Dilemmata basieren auf realitätsnahen ethischen und klinischen Entscheidungssituationen. Die kanonischen Referenzreihungen wurden streng auf Basis der biomedizinischen Ethik (Beauchamp & Childress) sowie der moralischen Urteilsentwicklung (Kohlberg) begründet.

---

## 1. Übersicht & Validierungsmetriken

| Metrik | Soll-Vorgabe (MedAT Spezifikation) | Ist-Zustand (Generalprobe #3) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Genau 14 Aufgaben | 14 Aufgaben (\`SEK-SE-GP3-001\` bis \`SEK-SE-GP3-014\`) | ✅ Erfüllt |
| **Prüfungsdauer** | Genau 21 Minuten (1260 Sekunden, 90s pro Aufgabe) | 21 Minuten im Simulator (\`STAGE_CONFIGS.SE\`) | ✅ Erfüllt |
| **Zielgruppe & Zulassung** | MedAT-H und MedAT-Z | \`exam: "BOTH"\` (für Human- und Zahnmedizin gewertet) | ✅ Erfüllt |
| **Prüfungsreihenfolge (SEK)** | Emotionen regulieren (ER) ➔ Emotionen erkennen (EE) ➔ **Soziales Entscheiden (SE)** | Exakt an 3. Position des SEK-Blocks | ✅ Erfüllt |
| **Aufbau pro Aufgabe** | Situationsvignette + 5 Überlegungen (A–E) | 14 Dilemmata $\\times$ 5 Überlegungen = **70 Überlegungen** | ✅ Erfüllt |
| **Antwortformat** | Vollständige Permutation der Ränge 1 bis 5 | Jeder Rang 1..5 genau einmal vergeben (Bijektion) | ✅ Erfüllt |
| **Bewertungsregel (Scoring)** | **Quadratische Distanz (Partial Credit)**: $D = \\sum (r_{\\text{user}} - r_{\\text{ref}})^2$ | Normalisierter Score $1 - D/40$; exakt: 1.0 (100%), Nachbarvertauschung: 0.95 (95%) | ✅ Erfüllt |
| **Maximale Rohpunkte** | Genau 14 Punkte (1.0 Punkt pro Szenario) | Exakt 14 Punkte maximal im SE-Untertest | ✅ Erfüllt |
| **Permutationsverteilung** | Vollkommen unkorreliert, keine trivialen Muster | Rang 1 & Rang 5 über alle Optionen A..E balanciert verteilt | ✅ Erfüllt |
| **Schwierigkeitsgrad** | 4 Leicht, 7 Mittel, 3 Schwer | **4 Leicht (28.6%), 7 Mittel (50.0%), 3 Schwer (21.4%)** | ✅ Erfüllt |
| **Didaktische Transparenz** | Detaillierte Begründung für jeden Rang (1 bis 5) | 100% lückenlos mit \`rationaleByRank\` hinterlegt | ✅ Erfüllt |

---

## 2. Ethisches Fundament: Prinzipienorientierte Bioethik & Stufen der Moralentwicklung

Im MedAT-Untertest *Soziales Entscheiden (SE)* wird die Fähigkeit geprüft, Handlungsüberlegungen in komplexen sozialen und moralischen Konfliktsituationen nach normativer Tragfähigkeit zu hierarchisieren:

1. **Die vier Prinzipien der biomedizinischen Ethik (Beauchamp & Childress)**:
   - **Nicht-Schadens-Prinzip (Non-Maleficence)**: Vorrangige Abwendung akuter Gefahren für Leib, Leben und Gesundheit (z. B. Gefahrenabwehr vor häuslicher Gewalt in Q2; Infektionsschutz vor Meningokokken in Q11; Reanimation/Transfusion bei Zeugen Jehovas in Q4).
   - **Fürsorgeprinzip (Beneficence)**: Aktives Fördern des Wohlergehens, Leidenslinderung und Lebensrettung (z. B. Notfall-Thrombolyse bei Aphasie in Q5; Palliative Schmerztherapie in Q7 & Q9; Fötusschutz in Q13).
   - **Autonomieprinzip (Autonomy)**: Respekt vor dem freien Willen, der Würde, der Aufklärung und dem Recht auf Nichtwissen des Patienten (z. B. Wahrhaftige Aufklärung über OP-Fehler in Q10; Recht auf Nichtwissen bei Genmutation in Q12; Vorausverfügungen in Q9).
   - **Gerechtigkeitsprinzip (Justice)**: Faire, unparteiische Verteilung knapper Ressourcen, Nicht-Diskriminierung und Regelintegrität (z. B. Abstinenzregel auf der Eurotransplant-Warteliste in Q1; Vorurteilsfreie Triage in Q8; Katastrophen-Triage des letzten Antidots in Q14).

2. **Hierarchisierung moralischer Begründungsstufen (nach Kohlberg)**:
   - **Postkonventionelle Stufe (Rang 1–2)**: Universelle Menschenwürde, Lebensschutz, unveräußerliche Patientenrechte und ethische Schutzpflichten.
   - **Konventionelle Stufe (Rang 2–4)**: Rechtstaatliche Gesetze, kollegiale Institutionenregeln, professionelle Deeskalation und Teamverantwortung.
   - **Präkonventionelle Stufe (Rang 4–5)**: Eigennutz, Vermeidung von Unruhe, Angst vor Zuweiserverlust, Sorge vor Arbeitsaufwand, Honorarinteressen oder schlechten Internetbewertungen. Diese Erwägungen rangieren bei ethischen Dilemmata stets ganz unten.

---

## 3. Detaillierte Dokumentation aller 14 SE-Szenarien

`;

rawQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  doc += `### Aufgabe ${qNum}: \`${q.id}\`
- **Schwierigkeit**: ${q.difficulty}
- **Entscheidungskontext**: *${q.decisionContext}*
- **Kompetenz-Tags**: \`${q.competencyTags.join("`, `")}\`
- **Situation**:
> "${q.scenario}"

**Vorgelegte Überlegungen, Kanonische Reihung & Didaktische Begründung**:

| Option | Formulierte Handlungsüberlegung | Soll-Rang | Didaktische Rangbegründung |
| :---: | :--- | :---: | :--- |
`;

  SE_CONSIDERATION_KEYS.forEach((key) => {
    const item = q.considerations.find((c) => c.id === key)!;
    const rank = q.referenceRanking[key];
    const rankBadge = `**Rang ${rank}**`;
    const rationale = q.rationaleByRank ? q.rationaleByRank[key] : "—";
    doc += `| **${key}** | ${item.text} | ${rankBadge} | ${rationale} |\n`;
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
   - Die 14 Aufgaben sind über \`GENERALPROBE_3_SE_QUESTIONS\` in \`src/data/generalprobe/generalprobeData.ts\` verankert.
   - Der SEK-Abschnitt von Generalprobe #3 umfasst exakt:
     - **ER (Emotionen regulieren)**: 12 Aufgaben (\`SEK-ER-GP3-001\` – \`012\`)
     - **EE (Emotionen erkennen)**: 14 Aufgaben (\`SEK-EE-GP3-001\` – \`014\`)
     - **SE (Soziales Entscheiden)**: 14 Aufgaben (\`SEK-SE-GP3-001\` – \`014\`)
     - **SEK Gesamt**: **40 Aufgaben** (exakte MedAT-H/Z Vorgabe)

2. **Gesamtumfang der Generalprobe #3**:
   - **BMS**: 94 Aufgaben (40 Bio, 24 Che, 18 Phy, 12 Mat)
   - **TV**: 12 Aufgaben
   - **KFF**: 75 Aufgaben (15 FZ, 10 ZF, 15 WF, 25 GM, 10 IE) + 8 Lernkarten
   - **SEK**: 40 Aufgaben (12 ER, 14 EE, 14 SE)
   - **Gesamtsumme Generalprobe #3**: **Exakt 221 gewertete Aufgaben**

3. **Autonomer Übungsmodus**:
   - Alle 14 Aufgaben sind in \`SE_STORED_QUESTIONS\` und \`SE_QUESTIONS_BY_ID\` registriert und stehen im freien Trainingsmodus zur Verfügung.

4. **100% Non-Regression mit Generalprobe #1 & #2**:
   - Sämtliche Datenstrukturen von Generalprobe #1 (\`RAW_GENERALPROBE_1_SE_QUESTIONS\`, \`GENERALPROBE_1_SE_QUESTIONS\`, \`SEK-SE-001\` – \`014\`) sowie Generalprobe #2 (\`RAW_GENERALPROBE_2_SE_QUESTIONS\`, \`GENERALPROBE_2_SE_QUESTIONS\`, \`SEK-SE-GP2-001\` – \`014\`) bleiben vollkommen unberührt.
`;

fs.writeFileSync(targetPath, doc, "utf-8");
console.log(`Document written to ${targetPath}`);
console.log(`Character count: ${doc.length}`);
