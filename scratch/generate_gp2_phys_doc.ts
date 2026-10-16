import fs from "fs";
import { RAW_GENERALPROBE_2_PHYS_QUESTIONS } from "../src/data/generalprobe/generalprobe2PhysicsQuestions";

const chapterMap: Record<string, { id: string; name: string }> = {
  "Größen und Einheiten": { id: "phys-01-groessen-einheiten", name: "Größen und Einheiten" },
  "Mechanik": { id: "phys-02-mechanik", name: "Mechanik" },
  "Schwingungen und Wellen": { id: "phys-03-schwingungen-wellen", name: "Schwingungen und Wellen" },
  "Wärmelehre": { id: "phys-04-waermelehre", name: "Wärmelehre" },
  "Elektrizitätslehre": { id: "phys-05-elektrizitaet", name: "Elektrizitätslehre" },
  "Optik": { id: "phys-06-optik", name: "Optik" },
  "Atom- und Kernphysik": { id: "phys-07-atom-kernphysik", name: "Atom- und Kernphysik" },
};

function getChapterInfo(q: typeof RAW_GENERALPROBE_2_PHYS_QUESTIONS[0]) {
  return chapterMap[q.primary_topic] || { id: "phys-02-mechanik", name: "Mechanik" };
}

let tableRows = "";
let questionsDetail = "";

RAW_GENERALPROBE_2_PHYS_QUESTIONS.forEach((q, idx) => {
  const chInfo = getChapterInfo(q);
  const diffLabel = q.difficulty === "foundational" ? "Grundlagen (Leicht)" : q.difficulty === "intermediate" ? "Mittel" : "Schwer (Transfer)";
  
  let summary = q.stem.replace(/<[^>]+>/g, "").replace(/\$[^$]+\$/g, (m) => m.replace(/\\/g, ""));
  if (summary.length > 75) {
    summary = summary.substring(0, 72) + "...";
  }

  tableRows += `| **${q.id}** | \`${chInfo.id}\` | ${q.subtopic} | ${diffLabel} | **${q.correct_answer}** | ${summary} |\n`;

  questionsDetail += `### Frage ${idx + 1}: ${q.id} — ${q.subtopic}\n`;
  questionsDetail += `- **Kapitel:** \`${chInfo.id}\` (${chInfo.name})\n`;
  questionsDetail += `- **Schwierigkeitsgrad:** ${diffLabel}\n`;
  questionsDetail += `- **Lösungsbuchstabe:** **${q.correct_answer}**\n\n`;
  questionsDetail += `**Fragetext:**\n>${q.stem}\n\n`;
  questionsDetail += `**Antwortoptionen:**\n`;
  questionsDetail += `- **(A)** ${q.options.A}\n`;
  questionsDetail += `- **(B)** ${q.options.B}\n`;
  questionsDetail += `- **(C)** ${q.options.C}\n`;
  questionsDetail += `- **(D)** ${q.options.D}\n`;
  questionsDetail += `- **(E)** ${q.options.E}\n\n`;
  questionsDetail += `**Erklärung zur richtigen Antwort:**\n${q.explanation_correct}\n\n`;
  questionsDetail += `**Analyse der falschen Antworten (Distraktor-Analyse):**\n`;
  const distractorLetters = (["A", "B", "C", "D", "E"] as const).filter((l) => l !== q.correct_answer);
  distractorLetters.forEach((dl) => {
    questionsDetail += `- **Option (${dl}):** ${q.explanations_incorrect[dl]}\n`;
  });
  questionsDetail += `\n---\n\n`;
});

const doc = `# MedAT-H BMS Physik — Generalprobe #2 (18 Original-Aufgaben)

## 1. Übersicht & Zielsetzung

Für die **MedAT-H Generalprobe #2** (\`GENERALPROBE_2_DATASET\` / \`mock-full-medat-h-2\`) wurde eine vollständige, wissenschaftlich validierte Aufgabenbank mit **exakt 18 Originalfragen** (\`PHYS-BMS-GP2-001\` bis \`PHYS-BMS-GP2-018\`) implementiert.

Die Aufgaben decken alle 7 offiziellen Themenbereiche des österreichischen MedAT-H-Stichwortkatalogs (VMC / AHS-Matura-Niveau) ab:
- 5 plausibel konstruierte Antwortoptionen (A bis E) je Aufgabe.
- Genau eine unstrittig physikalisch korrekte Lösung.
- Ausführliche fachliche Erklärung mit Formelherleitung und physikalischer Konzeptbegründung.
- 4 spezifische Distraktor-Analysen mit Benennung typischer Denk-, Umrechnungs- und Vorzeichenfehler.
- Alle Zahlenwerte sind für die prüfungstypische kognitive Bearbeitung ohne Taschenrechner optimiert (unter 45 Sekunden im Kopfrechnen lösbar).

---

## 2. Metriken & Verteilungen

### 2.1 Schwierigkeitsverteilung
| Schwierigkeitsgrad | Soll | Ist | Prozent |
| :--- | :---: | :---: | :---: |
| **Leicht / Grundlagen** (*Foundational*) | 4 | 4 | 22,2 % |
| **Mittel** (*Intermediate*) | 9 | 9 | 50,0 % |
| **Schwer / Transfer** (*Advanced*) | 5 | 5 | 27,8 % |
| **Gesamt** | **18** | **18** | **100,0 %** |

### 2.2 Antwortschlüssel-Verteilung
| Antwortbuchstabe | Anzahl Aufgaben | Anteil | Zugeordnete Fragen |
| :---: | :---: | :---: | :--- |
| **A** | 4 | 22,2 % | Q003, Q007, Q012, Q016 |
| **B** | 4 | 22,2 % | Q001, Q006, Q010, Q014 |
| **C** | 4 | 22,2 % | Q004, Q008, Q013, Q018 |
| **D** | 3 | 16,7 % | Q002, Q009, Q015 |
| **E** | 3 | 16,7 % | Q005, Q011, Q017 |
| **Gesamt** | **18** | **100,0 %** | |

*Hinweis: Die Verteilung folgt dem Vorgabeprofil (4 A, 4 B, 4 C, 3 D, 3 E) ohne zyklische Sequenzen und mit maximal 2 gleichen aufeinanderfolgenden Buchstaben.*

---

## 3. Lehrplanabdeckung nach den 7 offiziellen MedAT-Physik-Kapiteln

| Kapitel-ID | Themenbereich | Anzahl Fragen | IDs |
| :--- | :--- | :---: | :--- |
| \`phys-01-groessen-einheiten\` | Größen, SI-Basiseinheiten & Präfixe | 2 | \`PHYS-BMS-GP2-001\`, \`002\` |
| \`phys-02-mechanik\` | Kinematik, Dynamik, Hebel & Hydrodynamik | 5 | \`PHYS-BMS-GP2-003\` bis \`007\` |
| \`phys-03-schwingungen-wellen\` | Federpendel & Akustik (Dezibel) | 2 | \`PHYS-BMS-GP2-008\`, \`009\` |
| \`phys-04-waermelehre\` | Wärmetransport, Längenausdehnung & Schmelzwärme | 3 | \`PHYS-BMS-GP2-010\` bis \`012\` |
| \`phys-05-elektrizitaet\` | Kondensator, Leistung & Lorentzkraft | 3 | \`PHYS-BMS-GP2-013\` bis \`015\` |
| \`phys-06-optik\` | Brechkraft/Fehlsichtigkeit & Brechungsgesetz | 2 | \`PHYS-BMS-GP2-016\`, \`017\` |
| \`phys-07-atom-kernphysik\` | Ionisierende Strahlung ($\\alpha$, $\\beta$, $\\gamma$) & Strahlenschutz | 1 | \`PHYS-BMS-GP2-018\` |
| **Gesamt** | | **18** | |

---

## 4. Detaillierter Fragenkatalog (Fragen 1 bis 18)

| ID | Kapitel-ID | Thema / Subtopic | Niveau | Lösung | Frage-Zusammenfassung |
| :--- | :--- | :--- | :--- | :---: | :--- |
${tableRows}
---

## 5. Abgrenzung & Overlap-Report gegenüber Generalprobe #1

Um Redundanzen auszuschließen, wurden alle 18 Aufgaben mit neuen physikalischen Kontexten, alternativen Formeln und medizinisch-naturwissenschaftlichen Szenarien konstruiert:

| Kapitelbereich | Generalprobe #1 | Generalprobe #2 (Neu) | Didaktische Differenzierung |
| :--- | :--- | :--- | :--- |
| **Größen & Einheiten** | Abgeleitete SI-Einheit Watt ($\\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-3}$) | 7 SI-Basiseinheiten (Ampere) & Dichte-Umrechnung ($\\text{g/cm}^3 \\to \\text{kg/m}^3$) | Wechsel von Dimensionsanalyse zur Identifikation der fundamentalen Basisgrößen und Präfix-Umrechnungen. |
| **Mechanik (Kinematik)** | Freier Fall aus Ruhe ($h = 45\\,\\text{m} \\to v = 30\\,\\text{m/s}$) | Reaktionsweg plus Bremsweg ($v_0 = 72\\,\\text{km/h}$, $a = 5\\,\\text{m/s}^2 \\to s_{\\text{ges}} = 60\\,\\text{m}$) | Zweistufige Bewegung (gleichförmig + gleichmäßig verzögert) statt reinem Energieerhaltungssatz. |
| **Mechanik (Kräfte & Hebel)** | Schiefe Ebene Hangabtrieb ($m = 4\\,\\text{kg}$, $30^\\circ$) | Hookesches Gesetz ($F = D \\cdot \\Delta x$) & Biomechanik des Ellenbogens (Bizeps-Drehmoment $420\\,\\text{N}$) | Prüfung von elastischen Federkräften und Drehmomentengleichgewicht am biologischen Hebel. |
| **Mechanik (Kreisbewegung)** | Zentripetalkraft Proportionalität ($F_{\\text{Z}} \\propto v^2$) | Laborzentrifuge ($50\\,\\text{Hz}$, $r = 10\\,\\text{cm} \\to a_{\\text{Z}} \\approx 10\\,000\\,\\text{m/s}^2 \\approx 1000\\,g$) | Berechnung der Zentripetalbeschleunigung aus Drehfrequenz und Radius statt reiner Proportionalitätsfrage. |
| **Mechanik (Fluide)** | Archimedischer Auftrieb (Holz $800\\,\\text{kg/m}^3$) & Bernoulli ($A_2 = A_1 / 2$) | Hagen-Poiseuille-Gefäßwiderstand ($R \\propto 1/r^4 \\to 16\\text{-facher Anstieg}$) | Reale viskose Gefäßströmung in der Kardiologie statt idealer reibungsfreier Rohrströmung. |
| **Schwingungen & Wellen** | Fadenpendel ($T \\propto \\sqrt{l}$) & Ultraschall-Wellenlänge ($5\\,\\text{MHz}$) | Federpendel ($T = 2\\pi\\sqrt{m/D}$) & Akustischer Dezibel-Pegel ($L_2 = 60 + 20 = 80\\,\\text{dB}$) | Masseverdopplung bei Federsteifigkeit und logarithmische Schallintensitätsskala. |
| **Wärmelehre** | Mischungstemperatur ($200\\,\\text{g}$ $20^\\circ\\text{C} + 300\\,\\text{g}$ $70^\\circ\\text{C}$) & Adiabate Kompression | Wärmetransport im Vakuum, Längenausdehnung Titanknochenplatte & Latente Schmelzwärme ($50\\,\\text{g}$ Eis) | Phasenumwandlung mit Aggregatszustandswechsel und thermische Dehnungsanalyse. |
| **Elektrizitätslehre** | Coulomb-Gesetz ($r/3 \\to 9\\,F_C$) & Parallelschaltung ($30\\,\\Omega \\parallel 60\\,\\Omega$) | Plattenkondensator mit Dielektrikum ($3\\,C_0$), Glühlampen-Widerstandsverhältnis & Lorentzkraft ($r = mv/(qB)$) | Kapazitätsberechnung mit Dielektrikum, Leistungsumkehrung ($R \\propto 1/P$) und Bahnradius geladener Ionen im B-Feld. |
| **Optik** | Grenzwinkel Totalreflexion ($n = \\sqrt{2} \\to 45^\\circ$) & Sammellinse ($b = 60\\,\\text{cm}$) | Myopie-Korrektur ($-2{,}5\\,\\text{dpt} \\to f = -40\\,\\text{cm}$) & Wellenlänge & Frequenz im Quarzglas ($400\\,\\text{nm}$) | Ophthalmologische Brillenkorrektur und Ausbreitung von Licht im optischen Medium ($c_M = c_0/n$). |
| **Kernphysik** | Radioaktive Halbwertszeit I-131 ($40\\,\\text{Tage}$) | $\\alpha$-, $\\beta$- und $\\gamma$-Strahlungsarten: Masse, Ionisationsvermögen & biologischer Strahlenschutz | Systematischer Vergleich der Strahlungsarten im Strahlenschutz statt reiner Zerfallsrechnung. |

---

## 6. Vollständiger Aufgabentext mit Erklärungen

${questionsDetail}

---

## 7. Status & Integration in Generalprobe #2

- **Biologie (BMS):** 100 % fertiggestellt (40 kuratierte Originalfragen \`BIO-BMS-GP2-001\` bis \`040\`).
- **Chemie (BMS):** 100 % fertiggestellt (24 kuratierte Originalfragen \`CHEM-BMS-GP2-001\` bis \`024\`).
- **Physik (BMS):** 100 % fertiggestellt (18 kuratierte Originalfragen \`PHYS-BMS-GP2-001\` bis \`018\`).
- **Mathematik (BMS):** Verwendet Standard-Lehrplan-Slices (12 Aufgaben) bis zur dedizierten GP2-Mathematik-Autorenschaft.
- **Gesamter BMS-Testteil:** Exakt 94 Aufgaben (40 Bio + 24 Chem + 18 Phys + 12 Math).
- **TV, KFF, SEK:** Vollständige Simulationssets für Simulation 2 aktiv eingebunden.
`;

const targetDoc = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_physics_generalprobe2_18_questions.md";
fs.writeFileSync(targetDoc, doc, "utf8");
console.log("Successfully wrote documentation artifact:", targetDoc);
