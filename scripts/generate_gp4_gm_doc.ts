/**
 * Script to generate medat_kff_gm_generalprobe4_25_questions.md artifact
 */

import * as fs from "fs";
import * as path from "path";
import {
  RAW_GENERALPROBE_4_GM_CARDS,
  RAW_GENERALPROBE_4_GM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4GmQuestions";

const targetPath =
  "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_kff_gm_generalprobe4_25_questions.md";

const cards = RAW_GENERALPROBE_4_GM_CARDS;
const questions = RAW_GENERALPROBE_4_GM_QUESTIONS;

let doc = `# MedAT-H KFF — Gedächtnis und Merkfähigkeit (GM) — Generalprobe #4
## Vollständige Dokumentation & Validierungsbericht der 8 Allergieausweise & 25 Abfragefragen

> [!IMPORTANT]
> **Didaktischer Transparenzhinweis & Urheberrechts-Disclaimer**:
> Bei der vorliegenden Aufgabensammlung handelt es sich um eine **originale, eigens erstellte didaktische Testbank** zur gezielten Vorbereitung auf den KFF-Untertest *Gedächtnis und Merkfähigkeit (GM)* des MedAT-H. Es handelt sich **nicht** um offizielle Prüfungsaufgaben der Medizinischen Universitäten Wien, Innsbruck, Graz oder Linz. Alle acht Allergieausweise und 25 Abfragefragen basieren auf fiktiven Personenprofilen und standardisierten Parametern. Sie wurden mathematisch und logisch auf absolute Widerspruchsfreiheit, konsistente Merkmalszuordnung und fehlerfreie Distraktoren geprüft.

---

## 1. Übersicht & Validierungsmetriken

| Metrik | Soll-Vorgabe (MedAT-H Spezifikation) | Ist-Zustand (Generalprobe #4) | Status |
| :--- | :--- | :--- | :--- |
| **Anzahl Allergieausweise** | Genau 8 Ausweise | 8 Ausweise (\`KFF-GM-GP4-CARD-001\` bis \`008\`) | ✅ Erfüllt |
| **Merkphase (Lernzeit)** | Genau 8 Minuten (480 Sekunden) | 8 Minuten im Simulator (\`GmMerkphaseWorkspace\`) | ✅ Erfüllt |
| **Intervenierende Untertests** | FZ ➔ GM-Merkphase ➔ **ZF** ➔ **WF** ➔ **GM-Abruf** ➔ IE | Exakte Einhaltung der Prüfungsreihenfolge | ✅ Erfüllt |
| **Anzahl Abfragefragen** | Genau 25 Multiple-Choice-Fragen | 25 Fragen (\`KFF-GM-GP4-001\` bis \`KFF-GM-GP4-025\`) | ✅ Erfüllt |
| **Prüfungszeit (Abrufphase)** | Genau 15 Minuten (900 Sekunden) | 15 Minuten im Simulator | ✅ Erfüllt |
| **Antwortschlüssel-Verteilung** | Vollständig balanciert (A, B, C, D, E je 5-fach) | **5 A, 5 B, 5 C, 5 D, 5 E** (\`D, A, B, E, A, C, B, D, E, D, A, C, E, B, C, B, C, E, D, B, A, D, E, C, A\`) | ✅ Erfüllt |
| **Streak-Begrenzung** | Maximaler Streak gleicher Tasten = 1 (keine zwei aufeinanderfolgenden gleichen Schlüssel) | Maximaler Streak = 1 (0 aufeinanderfolgende gleiche Schlüssel) | ✅ Erfüllt |
| **Option-E-Fälle (Keine)** | Genau 5 echte E-Lösungen (gesuchte Tatsache fehlt in A–D) | **Q04, Q09, Q13, Q18, Q23** (keine 5er-Vielfachen, aperiodisch) | ✅ Erfüllt |
| **Schwierigkeitsgrad** | 5 Leicht, 15 Mittel, 5 Schwer | **5 Leicht, 15 Mittel, 5 Schwer** | ✅ Erfüllt |
| **Kanonische Datenintegrität** | Identische Kartendaten in Merk- und Abrufphase | 100% Einheitsquelle (\`gmMemorySet\` im Simulator gefroren) | ✅ Erfüllt |
| **Notizregeln (MedAT-VMC)** | Merkphase: strikt gesperrt; ZF/WF: nur für aktive Aufgaben; Abrufphase: Notizen erlaubt | Im Simulator durch State-Machine & Scratchpad-Regelhinweise implementiert | ✅ Erfüllt |
| **Kein Datenleck** | Kein Rückblättern, keine Karteneinsicht während ZF/WF/Abruf | Durch State-Machine strikt gesperrt | ✅ Erfüllt |

---

## 2. Die 8 kanonischen Allergieausweise (Single Source of Truth)

Alle Fakten sind in der Merkphase und der Abrufphase identisch:

| Nr. | ID | Name | Geburtsdatum | Med. | Blutgruppe | Allergien | Ausweis-Nr. | Ausstellungsland | Avatar | Visuelle Merkmale |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- | :-: | :--- | :--- | :--- |
| 1 | \`KFF-GM-GP4-CARD-001\` | **DARIUS LORENZ** | 17.03. | **Ja** | **A** | Pollen, Gräser | **39174** | Österreich | \`avatar-02\` | Dunkelbraunes kurzes Haar, Kragenhemd |
| 2 | \`KFF-GM-GP4-CARD-002\` | **SELMA GRIMM** | 21.09. | **Nein** | **B** | Erdnuss | **72518** | Deutschland | \`avatar-01\` | Braunes Haar, hoher Dutt, Brille |
| 3 | \`KFF-GM-GP4-CARD-003\` | **MATTEO BRAND** | 06.12. | **Ja** | **AB** | Wespengift | **41863** | Schweiz | \`avatar-04\` | Rotbraunes Haar, Vollbart und Schnurrbart |
| 4 | \`KFF-GM-GP4-CARD-004\` | **ELENA STAUFFER** | 15.05. | **Nein** | **0** | Penicillin, Latex | **84296** | Italien | \`avatar-03\` | Blondes langes Haar, blaue Augen |
| 5 | \`KFF-GM-GP4-CARD-005\` | **KILIAN RUPP** | 28.10. | **Ja** | **A** | Hausstaubmilben | **56302** | Österreich | \`avatar-06\` | Graues Haar, eckige Brille |
| 6 | \`KFF-GM-GP4-CARD-006\` | **NOEMI BACHER** | 09.07. | **Nein** | **B** | Katzenhaare, Hundehaare | **27941** | Deutschland | \`avatar-05\` | Schwarzes Haar, lockiger Afro-Puff |
| 7 | \`KFF-GM-GP4-CARD-007\` | **TIZIAN WALD** | 11.02. | **Ja** | **0** | Soja, Hühnerei | **95187** | Spanien | \`avatar-08\` | Dunkelbraunes welliges Haar, oranger Pullover |
| 8 | \`KFF-GM-GP4-CARD-008\` | **LIVIA HECHT** | 04.08. | **Nein** | **AB** | *Keine* | **63475** | Schweiz | \`avatar-07\` | Schwarzes Haar, Bob-Frisur mit geradem Pony |

---

## 3. Detaillierte Dokumentation aller 25 Abfragefragen

`;

questions.forEach((q, idx) => {
  const qNum = idx + 1;
  const optA = q.options.A;
  const optB = q.options.B;
  const optC = q.options.C;
  const optD = q.options.D;
  const optE = q.options.E;

  const markA = q.correctAnswer === "A" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markB = q.correctAnswer === "B" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markC = q.correctAnswer === "C" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markD = q.correctAnswer === "D" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markE = q.correctAnswer === "E" ? "✅ **KORREKT**" : "✕ Falsch (Eine Option A–D ist zutreffend)";

  doc += `### Frage ${qNum}: \`${q.id}\`
- **Kategorie**: \`${q.category}\`
- **Schwierigkeit**: ${q.difficulty}
- **Quell-Ausweis**: \`${q.sourceCardId}\`
- **Fragetext**: "${q.questionText}"
- **Korrekte Antwort**: **Option ${q.correctAnswer}**

#### Antwortoptionen:
- **Option A** (\`${optA}\`): ${markA}
- **Option B** (\`${optB}\`): ${markB}
- **Option C** (\`${optC}\`): ${markC}
- **Option D** (\`${optD}\`): ${markD}
- **Option E** (*${optE}*): ${markE}

#### Ausführliche Musterlösung & Herleitung:
\`\`\`text
${q.explanation}
\`\`\`

---

`;
});

doc += `## 4. Simulator-Integration & Verifikation

Die 8 Allergieausweise und 25 Abfragefragen sind vollständig in das Simulationsframework integriert:
1. **Kanonische Datenquelle**: Definiert in [\`src/data/generalprobe/generalprobe4GmQuestions.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/src/data/generalprobe/generalprobe4GmQuestions.ts).
2. **Simulator-Factory**: In [\`src/data/generalprobe/generalprobeData.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/src/data/generalprobe/generalprobeData.ts) binden \`buildGmSimulationCards(4)\` und \`buildGmSimulationQuestions(4)\` die Karten und Fragen direkt in \`buildGeneralprobe4Dataset()\` ein.
3. **Modulweiterleitung**: Re-exportiert in [\`src/data/generalprobe/index.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/src/data/generalprobe/index.ts).
4. **Automatisierte QA-Suite**: Das Skript [\`scripts/verify_gp4_gm.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/scripts/verify_gp4_gm.ts) prüft alle 25 Fragen auf absolute Faktenkongruenz, E-Option-Validität und 0 Kollisionen mit GP1–GP3.
`;

fs.writeFileSync(targetPath, doc, "utf-8");
console.log(`Successfully generated artifact at ${targetPath} (${doc.length} bytes)`);
