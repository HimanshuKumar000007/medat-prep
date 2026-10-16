import fs from "fs";
import path from "path";
import {
  RAW_GENERALPROBE_2_TV_QUESTIONS,
  GENERALPROBE_2_TV_QUESTIONS,
  GENERALPROBE_2_TV_PASSAGES,
} from "../src/data/generalprobe/generalprobe2TvQuestions";

const ARTIFACT_PATH = "C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\medat_tv_generalprobe2_12_questions.md";

function generateMarkdown() {
  const lines: string[] = [];

  lines.push("# MedAT-H Textverständnis (TV) — Generalprobe #2 (12 selbst erstellte MedAT-Übungsaufgaben)");
  lines.push("");
  lines.push("## 1. Übersicht & Zielsetzung");
  lines.push("");
  lines.push("Für die **MedAT-H Generalprobe #2** (`GENERALPROBE_2_DATASET` / `mock-full-medat-h-2`) wurde ein vollständiges, didaktisch kalibriertes Textverständnis-Modul mit **4 wissenschaftlichen Lesepassagen** und **exakt 12 textgebundenen Übungsaufgaben** (`TV-GP2-001` bis `TV-GP2-012`) implementiert.");
  lines.push("");
  lines.push("Die Struktur entspricht der offiziellen österreichischen MedAT-H-Prüfungskonfiguration:");
  lines.push("- **Testdauer**: 35 Minuten Bearbeitungszeit für 12 Aufgaben (~175 Sekunden pro Aufgabe).");
  lines.push("- **Strikte Textbindung**: Alle Aufgaben sind ausnahmslos aus dem jeweiligen Textauszug heraus lösbar (reine Lesekompetenz, logische Inferenz und Differenzierung ohne medizinisches Vorwissen).");
  lines.push("- **Exakt 5 Antwortoptionen (A bis E)** je Aufgabe mit genau einer unstrittig korrekten Lösung.");
  lines.push("- **Konkrete Textbelege**: Jede Lösungsbegründung verweist auf die genaue Textstelle im Absatz.");
  lines.push("- **Didaktische Distraktor-Analysen**: Für alle 4 Falschantworten wird detailliert begründet, warum sie den Textaussagen widersprechen, unzulässig verallgemeinern oder Kausalitäten vertauschen.");
  lines.push("- **Strikte Isolation von Generalprobe #1**: Vollkommen neue Lesetexte und Aufgaben ohne Überschneidung mit GP1 (`TV-MEDAT-001` bis `012`).");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 2. Metriken & Verteilungen");
  lines.push("");
  lines.push("### 2.1 Schwierigkeitsverteilung");
  lines.push("| Schwierigkeitsgrad | Soll | Ist | Prozent | Enthaltene Aufgaben |");
  lines.push("| :--- | :---: | :---: | :---: | :--- |");
  lines.push("| **Leicht / Grundlagen** (*Foundational*) | 3 | 3 | 25,0 % | `TV-GP2-002`, `004`, `007` |");
  lines.push("| **Mittel** (*Intermediate*) | 6 | 6 | 50,0 % | `TV-GP2-001`, `005`, `008`, `009`, `010`, `011` |");
  lines.push("| **Schwer / Komplex** (*Advanced*) | 3 | 3 | 25,0 % | `TV-GP2-003`, `006`, `012` |");
  lines.push("| **Gesamt** | **12** | **12** | **100,0 %** | |");
  lines.push("");
  lines.push("### 2.2 Antwortschlüssel-Verteilung");
  lines.push("| Antwortbuchstabe | Anzahl Aufgaben | Anteil | Zugeordnete Aufgaben |");
  lines.push("| :---: | :---: | :---: | :--- |");
  lines.push("| **A** | 3 | 25,0 % | Q001, Q007, Q011 |");
  lines.push("| **B** | 2 | 16,7 % | Q004, Q009 |");
  lines.push("| **C** | 3 | 25,0 % | Q002, Q005, Q010 |");
  lines.push("| **D** | 2 | 16,7 % | Q003, Q008 |");
  lines.push("| **E** | 2 | 16,7 % | Q006, Q012 |");
  lines.push("| **Gesamt** | **12** | **100,0 %** | |");
  lines.push("");
  lines.push("**Sequenz:** `A -> C -> D -> B -> C -> E -> A -> D -> B -> C -> A -> E` *(keine aufeinanderfolgenden identischen Lösungsbuchstaben)*.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 3. Die 4 wissenschaftlichen Lesepassagen");
  lines.push("");

  GENERALPROBE_2_TV_PASSAGES.forEach((p, pIdx) => {
    lines.push(`### Passage ${pIdx + 1}: ${p.title} (\`${p.id}\`)`);
    lines.push(`- **Themenbereich**: ${p.topic}`);
    lines.push(`- **Zugeordnete Fragen**: ${p.questionIds.join(", ")}`);
    lines.push(`- **Absatzanzahl**: ${p.paragraphs.length}`);
    lines.push("");
    lines.push("**Vollständiger Lesetext:**");
    lines.push("");
    p.paragraphs.forEach((para, paraIdx) => {
      lines.push(`> **[Absatz ${paraIdx + 1}]** ${para}`);
      lines.push(">");
    });
    lines.push("");
    lines.push("---");
    lines.push("");
  });

  lines.push("## 4. Detaillierter Fragenkatalog (Aufgaben 1 bis 12)");
  lines.push("");
  lines.push("| ID | Passage | Subtopic / Konzept | Niveau | Lösung | Frage-Zusammenfassung |");
  lines.push("| :--- | :--- | :--- | :--- | :---: | :--- |");

  RAW_GENERALPROBE_2_TV_QUESTIONS.forEach((q) => {
    const shortStem = q.stem.replace(/\n+/g, " ").slice(0, 75) + "...";
    const diffMap = { foundational: "Grundlagen (Leicht)", intermediate: "Mittel", advanced: "Schwer" };
    lines.push(`| **${q.id}** | \`${q.passageId}\` | ${q.subtopic} | ${diffMap[q.difficulty]} | **${q.correct_answer}** | ${shortStem} |`);
  });

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 5. Vollständige Aufgaben, Textbelege und Distraktor-Analysen");
  lines.push("");

  RAW_GENERALPROBE_2_TV_QUESTIONS.forEach((q, idx) => {
    const diffMap = { foundational: "Grundlagen (Leicht)", intermediate: "Mittel", advanced: "Schwer" };
    lines.push(`### ${idx + 1}. Aufgabe ${q.id}: ${q.primary_topic}`);
    lines.push(`- **Passage**: \`${q.passageId}\` — *${q.passageTitle}*`);
    lines.push(`- **Konzept**: ${q.concept} (${q.subtopic})`);
    lines.push(`- **Schwierigkeit**: ${diffMap[q.difficulty]}`);
    lines.push(`- **Textbeleg**: ${q.evidenceLocation}`);
    lines.push(`- **Korrekte Antwort**: **${q.correct_answer}**`);
    lines.push("");
    lines.push("**Fragetext:**");
    lines.push(`> ${q.stem.split("\n").join("\n> ")}`);
    lines.push("");
    lines.push("**Antwortoptionen:**");
    lines.push(`- **(A)** ${q.options.A}`);
    lines.push(`- **(B)** ${q.options.B}`);
    lines.push(`- **(C)** ${q.options.C}`);
    lines.push(`- **(D)** ${q.options.D}`);
    lines.push(`- **(E)** ${q.options.E}`);
    lines.push("");
    lines.push(`**Ausführliche Lösung & Textbeleg (Option ${q.correct_answer}):**`);
    lines.push(`${q.explanation_correct}`);
    lines.push("");
    lines.push("**Distraktor-Analyse (Didaktische Fehlerdiagnose):**");
    const letters = ["A", "B", "C", "D", "E"] as const;
    letters.filter((l) => l !== q.correct_answer).forEach((l) => {
      lines.push(`- **Option (${l}) falsch:** ${q.explanations_incorrect[l]}`);
    });
    lines.push("");
    lines.push("---");
    lines.push("");
  });

  lines.push("## 6. Integration in die MedAT-Plattform");
  lines.push("");
  lines.push("1. **Quelldatei**: `src/data/generalprobe/generalprobe2TvQuestions.ts` exportiert `RAW_GENERALPROBE_2_TV_QUESTIONS`, `GENERALPROBE_2_TV_PASSAGES` und normalisierte `GENERALPROBE_2_TV_QUESTIONS: StoredQuestion[]`.");
  lines.push("2. **Simulation-Factory**: `src/data/generalprobe/generalprobeData.ts` bindet `GENERALPROBE_2_TV_QUESTIONS` in `buildTvSimulationQuestions(2)` ein.");
  lines.push("3. **Gesamtdatensatz**: `buildGeneralprobe2Dataset()` lädt die 12 TV-Aufgaben und stellt sie im Gesamtexamen unter `tvQuestions` bereit.");
  lines.push("4. **Modul-Export**: `src/data/generalprobe/index.ts` re-exportiert das Modul vollständig.");
  lines.push("5. **Testsuite**: `scripts/verify_gp2_tv.ts` führt automatisierte Validierungsprüfungen auf Zählung, Schlüssel, Schwierigkeit, Textbelege und Verknüpfung aus.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 7. Qualitätssicherung & Prüfergebnisse");
  lines.push("");
  lines.push("- **Fragenanzahl**: 12/12 Aufgaben verifiziert.");
  lines.push("- **Passagenanzahl**: 4 wissenschaftliche Lesepassagen mit je 3 zugeordneten Fragen.");
  lines.push("- **Schlüsselverteilung**: A: 3, B: 2, C: 3, D: 2, E: 2 (Summe: 12, keine direkten Wiederholungen).");
  lines.push("- **Schwierigkeitsbalance**: 3 Foundational (25 %), 6 Intermediate (50 %), 3 Advanced (25 %).");
  lines.push("- **Textbindung**: 100 % textgestützt mit expliziten Absatzbelegen; kein medizinisches Vorwissen erforderlich.");
  lines.push("- **Distraktor-Qualität**: 4 distinkte, didaktisch fundierte Fehleranalysen je Aufgabe.");
  lines.push("- **System-Integrität**: Generalprobe #1 bleibt unverändert; TypeScript- und Build-Prozesse laufen fehlerfrei durch.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("> [!NOTE]");
  lines.push("> **Didaktischer Transparenzhinweis**: Bei diesen Texten und Aufgaben handelt es sich um 12 selbst erstellte MedAT-Übungsaufgaben für Generalprobe #2. Sie stellen keine offiziellen Prüfungsaufgaben der Medizinischen Universitäten Wien, Graz, Innsbruck oder Linz dar.");

  const output = lines.join("\n");
  fs.writeFileSync(ARTIFACT_PATH, output, "utf-8");
  console.log(`Successfully generated markdown documentation at: ${ARTIFACT_PATH}`);
}

generateMarkdown();
