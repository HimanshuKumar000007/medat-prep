/**
 * Script to generate medat_kff_wf_generalprobe4_15_questions.md artifact
 */

import * as fs from "fs";
import * as path from "path";
import { RAW_GENERALPROBE_4_WF_QUESTIONS } from "../src/data/generalprobe/generalprobe4WfQuestions";

const targetPath = "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_kff_wf_generalprobe4_15_questions.md";

const raw = RAW_GENERALPROBE_4_WF_QUESTIONS;

let doc = `# MedAT-H KFF — Wortflüssigkeit (WF) — Generalprobe #4
## Vollständige Aufgabendokumentation & Lexikalischer Validierungsbericht der 15 Aufgaben

> [!IMPORTANT]
> **Didaktischer Transparenzhinweis & Urheberrechts-Disclaimer**:
> Bei der vorliegenden Aufgabensammlung handelt es sich um eine **originale, eigens entwickelte didaktische Testbank** zur gezielten Vorbereitung auf den KFF-Untertest *Wortflüssigkeit (WF)* des MedAT-H. Es handelt sich **nicht** um offizielle Prüfungsaufgaben der Medizinischen Universitäten Wien, Innsbruck, Graz oder Linz. Alle 15 Aufgaben basieren auf authentischen deutschen Substantiven (Nominativ Singular), verwenden standardisierte lateinische Buchstaben (A–Z, keine Umlaute, kein ß) und wurden mathematisch sowie lexikalisch auf Eindeutigkeit, Konsistenz und exakte Buchstaben-Multimengen-Gleichheit validiert.

---

## 1. Übersicht & Validierungsmetriken

| Metrik | Soll-Vorgabe (MedAT-H Spezifikation) | Ist-Zustand (Generalprobe #4) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Genau 15 Aufgaben | 15 Aufgaben (\`KFF-WF-GP4-001\` bis \`KFF-WF-GP4-015\`) | ✅ Erfüllt |
| **Testzeit** | 20 Minuten (~80s pro Aufgabe) | 20 Minuten (1200 Sekunden) im Simulator | ✅ Erfüllt |
| **Schwierigkeitsgrad** | 4 Leicht (Foundational), 8 Mittel (Intermediate), 3 Schwer (Advanced) | **4 Leicht, 8 Mittel, 3 Schwer** | ✅ Erfüllt |
| **Antwortschlüssel-Verteilung** | Vollständig balanciert (A, B, C, D, E je 3-fach) | **3 A, 3 B, 3 C, 3 D, 3 E** (\`D, B, E, A, C, B, D, E, A, C, B, D, A, E, C\`) | ✅ Erfüllt |
| **Streak-Begrenzung** | Maximaler Streak gleicher Tasten = 1 (keine zwei aufeinanderfolgenden gleichen Schlüssel) | Maximaler Streak = 1 | ✅ Erfüllt |
| **Option-E-Fälle (Keine)** | Genau 3 echte E-Lösungen (Anfangsbuchstabe fehlt in A–D) | **Q003 (PLEURA), Q008 (PATELLA), Q014 (LABYRINTH)** | ✅ Erfüllt |
| **Multimengen-Identität** | \`multiset(letters) === multiset(scrambled) === multiset(targetWord)\` | 100% buchstabengetreue Identität bei allen 15 Items | ✅ Erfüllt |
| **Sprachliche Konformität** | Deutsches Substantiv, Nominativ Singular, A–Z, keine Umlaute/ß | 100% Standard-Schreibweise | ✅ Erfüllt |
| **Lexikalische Eindeutigkeit** | Keine konkurrierenden Anagramme mit abweichenden Anfangsbuchstaben | Lexikalisch geprüft und disambiguiert | ✅ Erfüllt |
| **Kollisionsfreiheit** | 0 Überschneidungen mit GP1, GP2, GP3 und Simulationsbank | 0 Kollisionen across 180 existing words | ✅ Erfüllt |
| **Didaktische Explikation** | Ausführliche Herleitung, Multimengen-Auflistung & Distraktoren-Analyse | Bei allen 15 Fragen vollständig integriert | ✅ Erfüllt |

---

## 2. Wortschatz- und Domänenanalyse

Die 15 Zielwörter stammen aus medizinisch, naturwissenschaftlich und klinisch relevanten Fachgebieten und spiegeln das typische Wortschatzprofil des MedAT wider:

| # | ID | Gegebene Buchstaben | Zielwort | Wortlänge | Fachdomäne | Korrekter Anfangsbuchstabe | Richtige Antwort | Schwierigkeit |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: | :-: | :--- |
| 1 | \`KFF-WF-GP4-001\` | D · S · A · U · I · R | **RADIUS** | 6 | Anatomie / Osteologie | **R** | **Option D** | Leicht |
| 2 | \`KFF-WF-GP4-002\` | O · X · E · T · R · C | **CORTEX** | 6 | Anatomie / Neurologie | **C** | **Option B** | Leicht |
| 3 | \`KFF-WF-GP4-003\` | L · R · A · U · E · P | **PLEURA** | 6 | Anatomie / Pulmologie | **P** | **Option E** (P fehlt in A–D) | Leicht |
| 4 | \`KFF-WF-GP4-004\` | T · P · O · S · O · I | **ISOTOP** | 6 | Physik / Atomphysik | **I** | **Option A** | Leicht |
| 5 | \`KFF-WF-GP4-005\` | N · R · T · A · F · K · I | **INFARKT** | 7 | Medizin / Kardiologie | **I** | **Option C** | Mittel |
| 6 | \`KFF-WF-GP4-006\` | N · T · I · R · D · E · D | **DENDRIT** | 7 | Biologie / Neurobiologie | **D** | **Option B** | Mittel |
| 7 | \`KFF-WF-GP4-007\` | T · N · U · M · E · R · S | **STERNUM** | 7 | Anatomie / Skelettsystem | **S** | **Option D** | Mittel |
| 8 | \`KFF-WF-GP4-008\` | A · L · T · L · E · A · P | **PATELLA** | 7 | Anatomie / Orthopädie | **P** | **Option E** (P fehlt in A–D) | Mittel |
| 9 | \`KFF-WF-GP4-009\` | Y · T · I · N · E · S · C | **CYSTEIN** | 7 | Biochemie / Aminosäuren | **C** | **Option A** | Mittel |
| 10 | \`KFF-WF-GP4-010\` | U · R · S · E · M · U · H | **HUMERUS** | 7 | Anatomie / Osteologie | **H** | **Option C** | Mittel |
| 11 | \`KFF-WF-GP4-011\` | Y · V · A · T · R · U · P | **PYRUVAT** | 7 | Biochemie / Stoffwechsel | **P** | **Option B** | Mittel |
| 12 | \`KFF-WF-GP4-012\` | E · N · Z · A · S · O · N · R | **RESONANZ** | 8 | Physik / Schwingungslehre | **R** | **Option D** | Mittel |
| 13 | \`KFF-WF-GP4-013\` | N · R · Y · M · S · U · E · A · A | **ANEURYSMA** | 9 | Medizin / Angiologie & Pathologie | **A** | **Option A** | Schwer |
| 14 | \`KFF-WF-GP4-014\` | B · H · Y · N · T · R · I · A · L | **LABYRINTH** | 9 | Anatomie / HNO | **L** | **Option E** (L fehlt in A–D) | Schwer |
| 15 | \`KFF-WF-GP4-015\` | E · N · I · T · H · N · O · I · M | **METHIONIN** | 9 | Biochemie / Translation | **M** | **Option C** | Schwer |

---

## 3. Detaillierte Dokumentation aller 15 WF-Aufgaben

`;

raw.forEach((q, idx) => {
  const qNum = idx + 1;
  const optA = q.options.A;
  const optB = q.options.B;
  const optC = q.options.C;
  const optD = q.options.D;
  const optE = "Keine der Antwortmöglichkeiten ist richtig";

  const markA = q.correctAnswer === "A" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markB = q.correctAnswer === "B" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markC = q.correctAnswer === "C" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markD = q.correctAnswer === "D" ? "✅ **KORREKT**" : "✕ Falsch (Distraktor)";
  const markE = q.correctAnswer === "E" ? "✅ **KORREKT**" : "✕ Falsch (Eine Option A–D ist zutreffend)";

  doc += `### Aufgabe ${qNum}: \`${q.id}\`
- **Schwierigkeit**: ${q.difficulty}
- **Vorgegebene Buchstaben**: \`${q.scrambledLetters}\`
- **Zielwort**: **${q.targetWord}** (${q.targetWord.length} Buchstaben)
- **Tatsächlicher Anfangsbuchstabe**: **${q.correctInitial}**
- **Korrekte Antwort**: **Option ${q.correctAnswer}**
- **Tags**: ${q.tags?.join(", ")}

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

Die 15 Aufgaben sind nahtlos in das MedAT-H-Simulationsframework integriert:
1. **Datenquelle**: Die Aufgaben sind in [\`src/data/generalprobe/generalprobe4WfQuestions.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/src/data/generalprobe/generalprobe4WfQuestions.ts) definiert und stellen sowohl Rohdaten (\`RAW_GENERALPROBE_4_WF_QUESTIONS\`) als auch das vollständige Simulator-Schema (\`GENERALPROBE_4_WF_QUESTIONS: StoredQuestion[]\`) bereit.
2. **Factory & Aggregation**: In [\`src/data/generalprobe/generalprobeData.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/src/data/generalprobe/generalprobeData.ts) bindet \`buildWfSimulationQuestions(4)\` die Fragen direkt ein, sodass \`buildGeneralprobe4Dataset()\` und \`getGeneralprobeDataset("generalprobe-4")\` exakt dieses 15-teilige Fragenset laden.
3. **Öffentlicher Export**: Über [\`src/data/generalprobe/index.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/src/data/generalprobe/index.ts) stehen alle Objekte modulübergreifend zur Verfügung.
4. **Automatisierte QA-Suite**: Das Skript [\`scripts/verify_gp4_wf.ts\`](file:///c:/Users/human/Downloads/m-medat-prep-design-system-4e49f/m-medat-prep-design-system-4e49f/scripts/verify_gp4_wf.ts) validiert alle 15 Aufgaben vollautomatisch auf Multimengen-Konsistenz, Streaks, Option-E-Bedingungen, Schlüsselverteilung und 0 Kollisionen mit 180 Vorbestandswörtern.
`;

fs.writeFileSync(targetPath, doc, "utf-8");
console.log(`Successfully generated artifact at ${targetPath} (${doc.length} bytes)`);
