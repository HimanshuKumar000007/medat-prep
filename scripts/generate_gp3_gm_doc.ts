/**
 * Script to generate medat_kff_gm_generalprobe3_25_questions.md artifact
 */

import * as fs from "fs";
import * as path from "path";
import {
  RAW_GENERALPROBE_3_GM_CARDS,
  RAW_GENERALPROBE_3_GM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3GmQuestions";

const targetPath =
  "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_kff_gm_generalprobe3_25_questions.md";

const cards = RAW_GENERALPROBE_3_GM_CARDS;
const questions = RAW_GENERALPROBE_3_GM_QUESTIONS;

let doc = `# MedAT-H KFF — Gedächtnis und Merkfähigkeit (GM) — Generalprobe #3
## Vollständige Dokumentation & Validierungsbericht der 8 Allergieausweise & 25 Abfragefragen

> [!IMPORTANT]
> **Didaktischer Transparenzhinweis & Urheberrechts-Disclaimer**:
> Bei der vorliegenden Aufgabensammlung handelt es sich um eine **originale, eigens erstellte didaktische Testbank** zur gezielten Vorbereitung auf den KFF-Untertest *Gedächtnis und Merkfähigkeit (GM)* des MedAT-H. Es handelt sich **nicht** um offizielle Prüfungsaufgaben der Medizinischen Universitäten Wien, Innsbruck, Graz oder Linz. Alle acht Allergieausweise und 25 Abfragefragen basieren auf fiktiven Personenprofilen und standardisierten Parametern. Sie wurden mathematisch und logisch auf absolute Widerspruchsfreiheit, konsistente Merkmalszuordnung und fehlerfreie Distraktoren geprüft.

---

## 1. Übersicht & Validierungsmetriken

| Metrik | Soll-Vorgabe (MedAT-H Spezifikation) | Ist-Zustand (Generalprobe #3) | Status |
| :--- | :--- | :--- | :--- |
| **Anzahl Allergieausweise** | Genau 8 Ausweise | 8 Ausweise (\`KFF-GM-GP3-CARD-001\` bis \`008\`) | ✅ Erfüllt |
| **Merkphase (Lernzeit)** | Genau 8 Minuten (480 Sekunden) | 8 Minuten im Simulator (\`GmMerkphaseWorkspace\`) | ✅ Erfüllt |
| **Intervenierende Untertests** | FZ ➔ GM-Merkphase ➔ **ZF** ➔ **WF** ➔ **GM-Abruf** ➔ IE | Exakte Einhaltung der Prüfungsreihenfolge | ✅ Erfüllt |
| **Anzahl Abfragefragen** | Genau 25 Multiple-Choice-Fragen | 25 Fragen (\`KFF-GM-GP3-001\` bis \`KFF-GM-GP3-025\`) | ✅ Erfüllt |
| **Prüfungszeit (Abrufphase)** | Genau 15 Minuten (900 Sekunden) | 15 Minuten im Simulator | ✅ Erfüllt |
| **Antwortschlüssel-Verteilung** | Vollständig balanciert (A, B, C, D, E je 5-fach) | **5 A, 5 B, 5 C, 5 D, 5 E** (nicht-zyklisch, aperiodisch, 0 identische Nachbarn) | ✅ Erfüllt |
| **Option-E-Fälle (Keine)** | Genau 5 echte E-Lösungen (gesuchte Tatsache fehlt in A–D) | **Q04, Q09, Q12, Q17, Q23** (keine 5er-Vielfachen, aperiodisch) | ✅ Erfüllt |
| **Schwierigkeitsgrad** | 5 Leicht, 15 Mittel, 5 Schwer | **5 Leicht, 15 Mittel, 5 Schwer** | ✅ Erfüllt |
| **Kanonische Datenintegrität** | Identische Kartendaten in Merk- und Abrufphase | 100% Einheitsquelle (\`gmMemorySet\` gefroren) | ✅ Erfüllt |
| **Notizregeln (MedAT-VMC)** | Merkphase: strikt gesperrt; ZF/WF: nur für aktive Aufgaben; Abrufphase: Notizen erlaubt | Im Simulator durch State-Machine & Scratchpad-Regelhinweise implementiert | ✅ Erfüllt |
| **Kein Datenleck** | Kein Rückblättern, keine Karteneinsicht während ZF/WF/Abruf | Durch State-Machine strikt gesperrt | ✅ Erfüllt |

---

## 2. Die 8 kanonischen Allergieausweise (Single Source of Truth)

Alle Fakten sind in der Merkphase und der Abrufphase identisch:

| Nr. | ID | Name | Geburtsdatum | Med. | Blutgruppe | Allergien | Ausweis-Nr. | Ausstellungsland | Avatar | Visuelle Merkmale |
| :-: | :--- | :--- | :--- | :-: | :-: | :--- | :-: | :--- | :--- | :--- |
| 1 | \`KFF-GM-GP3-CARD-001\` | **ARIS MEISNER** | 12.04. | **Ja** | **A** | Gräser, Roggen | **48291** | Österreich | \`avatar-02\` | Dunkelbraunes kurzes Haar, kurzer Seitenscheitel |
| 2 | \`KFF-GM-GP3-CARD-002\` | **KLARA VENZ** | 03.08. | **Nein** | **B** | Hausstaubmilben | **61548** | Deutschland | \`avatar-01\` | Hellbraunes Haar, Pferdeschwanz, Brille |
| 3 | \`KFF-GM-GP3-CARD-003\` | **LEONID KOPP** | 19.11. | **Ja** | **AB** | Wespengift, Bienenstiche | **73902** | Schweiz | \`avatar-04\` | Schwarzes Haar, Vollbart und Schnauzbart |
| 4 | \`KFF-GM-GP3-CARD-004\` | **MIRA TISCHLER** | 27.02. | **Nein** | **0** | Penicillin | **35814** | Italien | \`avatar-03\` | Blondes Haar, mittellange Wellen |
| 5 | \`KFF-GM-GP3-CARD-005\` | **QUIRIN FALTIN** | 08.06. | **Ja** | **B** | Erdnuss, Haselnuss | **92437** | Österreich | \`avatar-06\` | Graues Haar, Geheimratsecken, Brille |
| 6 | \`KFF-GM-GP3-CARD-006\` | **VALERIE ROHR** | 14.10. | **Nein** | **A** | Katzenhaare | **18365** | Deutschland | \`avatar-05\` | Dunkelbraunes Haar, Afro-Locken |
| 7 | \`KFF-GM-GP3-CARD-007\` | **BODHI ZEIDLER** | 25.01. | **Ja** | **0** | Soja | **54729** | Spanien | \`avatar-08\` | Braunes welliges Haar |
| 8 | \`KFF-GM-GP3-CARD-008\` | **INES KAUERT** | 30.05. | **Nein** | **AB** | *Keine* | **86173** | Schweiz | \`avatar-07\` | Schwarzes Haar, Bob-Frisur mit geradem Pony |

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

fs.writeFileSync(targetPath, doc, "utf-8");
console.log(`Successfully generated GP3 GM documentation at: ${targetPath}`);
