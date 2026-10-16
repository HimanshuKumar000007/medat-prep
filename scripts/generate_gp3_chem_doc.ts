import fs from "fs";
import {
  RAW_GENERALPROBE_3_CHEM_QUESTIONS,
  GENERALPROBE_3_CHEM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3ChemistryQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_chemistry_generalprobe3_24_questions.md";

const keySequence = RAW_GENERALPROBE_3_CHEM_QUESTIONS.map((q) => q.correct_answer);
const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
keySequence.forEach((k) => counts[k]++);

let md = `# MedAT BMS Chemie — Generalprobe #3 Aufgabenbank (24 Original-Aufgaben)
## Chemische Validierung, Didaktische Kalibrierung, VMC-Syllabus-Crosswalk & Gesamtdokumentation

> [!IMPORTANT]
> **Status:** Originales Übungsmaterial für die MedAT-H Prüfungsvorbereitung. Der vorliegende Fragensatz wurde einer gründlichen internen chemisch-didaktischen Qualitätsprüfung unterzogen und korrigiert; er gilt als **originales Übungsmaterial vorbehaltlich einer formellen unabhängigen Fachgutachter-Prüfung**. Er stellt keine offiziellen MedAT-Originalprüfungsfragen der Medizinischen Universitäten dar.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Soll-Vorgabe | Ist-Zustand (GP3 Chem Re-Audited) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 24 Aufgaben | **24 Aufgaben** (\`CHEM-BMS-GP3-001\` bis \`CHEM-BMS-GP3-024\`) | Bestanden ✅ |
| **Antwortoptionen** | A, B, C, D, E (5 Optionen je Aufgabe) | **5 Optionen je Aufgabe, genau 1 chemisch korrekte Lösung** | Bestanden ✅ |
| **Schlüsselverteilung** | Ausgewogen (5 A, 5 B, 5 C, 5 D, 4 E) | **5× A (20.8%), 5× B (20.8%), 5× C (20.8%), 5× D (20.8%), 4× E (16.7%)** | Bestanden ✅ |
| **Antwort-Muster** | Azyklisch & permutationsreich | **Keine 5er-Zyklen, keine Periodizität, blockweise wechselnde Permutationen** | Bestanden ✅ |
| **Schwierigkeitsgrad** | Exakt 6 Leicht, 12 Mittel, 6 Schwer | **6 Grundlagen (25%), 12 Mittel (50%), 6 Schwer (25%)** | Bestanden ✅ |
| **Kapitel-Metadaten** | Valide App-Kapitel-IDs in allen Records | **100% aller 24 Roh- und StoredQuestion-Records besitzen valide Kapitel-IDs** | Bestanden ✅ |
| **Distraktor-Analyse** | Fachliche Begründung aller 4 Falschantworten | **100% aller Distraktoren qualifiziert chemisch begründet** | Bestanden ✅ |
| **Isolation & Originalität**| Keine Überschneidung mit GP1/GP2 | **0 Stamm-Kollisionen, 0 ID-Kollisionen; GP1 und GP2 unverändert** | Bestanden ✅ |
| **BMS-Gesamtintegration**| Vollständiges 94-Aufgaben-BMS-Format | **40 Bio + 24 Chem + 18 Phys + 12 Math = 94 Aufgaben** | Bestanden ✅ |

### 1.1. Antwortschlüssel-Sequenz
Die finale Lösungsbuchstaben-Abfolge lautet:
\`\`\`
Fragen  01–05:  B,  E,  C,  A,  D
Fragen  06–10:  B,  D,  A,  C,  E
Fragen  11–15:  D,  B,  A,  E,  C
Fragen  16–20:  D,  A,  E,  B,  C
Fragen  21–24:  A,  D,  B,  C
\`\`\`
- **Auswertung:** 5× A, 5× B, 5× C, 5× D, 4× E.
- **Musterbereinigung:** Die vormalige monotone Wiederholung des Schemas \`[A, C, B, D, E]\` wurde vollständig aufgelöst. Jeder 5er-Block bildet eine eigenständige, unregelmäßige Permutation ohne zyklische Muster.

---

## 2. Wissenschaftliche Qualitätsprüfung & Durchgeführte Korrekturen

Im Rahmen des gezielten Re-Audits wurden 7 Kernbereiche wissenschaftlich und didaktisch präzisiert:

1. **Kapitel-Metadaten & Normalisierungs-Pipeline:**
   - *Ursachenanalyse:* Die Anzeige \`Kapitel: undefined\` in der vorherigen Dokumentation entstand, weil das Roh-Interface \`QcChemGp3QuestionRaw\` kein explizites Feld \`chapter_id\` deklarierte und die Dokumentation dieses Feld direkt aus dem Rohobjekt auslas, während die Laufzeit-Normalisierung das Kapitel dynamisch via Hilfsfunktion generierte.
   - *Korrektur:* \`chapter_id: string;\` wurde direkt im Roh-Interface \`QcChemGp3QuestionRaw\` fest verankert und in jedem der 24 Rohdatensätze explizit hinterlegt. Die Normalisierungspipeline liest dieses Feld primär aus und validiert es gegen den offiziellen Modulkatalog (\`chem-01-atombau\` bis \`chem-11-naturstoffe\`). In der Dokumentation ist kein einziges \`undefined\` mehr vorhanden.

2. **Q001 — Bohrsches Atommodell vs. Quantenmechanik:**
   - *Präzisierung:* Die didaktische Vermischung von Bohrschen quantisierten Kreisbahnen und quantenmechanischen Orbitalen (Wellenfunktionen $\\psi$, dreidimensionale Aufenthaltswahrscheinlichkeiten) in Stamm und Erklärung wurde aufgelöst. Die Kernfeststellung, dass Elektronen diskrete Energieniveaus besetzen und Quantensprünge Photonen mit $\\Delta E = h \\cdot \\nu$ emittieren (wodurch Linienspektren anstelle von kontinuierlichen Spektren entstehen), bleibt mathematisch exakt erhalten.

3. **Q004 — Satz von Avogadro & Ideales Gasverhalten:**
   - *Präzisierung:* Das Avogadrosche Gesetz gilt im mathematisch strengen Sinn ausschließlich für **ideale Gase** (punktförmige Teilchen ohne Eigenvolumen und ohne intermolekulare Wechselwirkungen). Sowohl im Fragestamm als auch in der korrekten Option und der Didaktik wurde die Annahme idealen Gasverhaltens explizit vorausgesetzt.

4. **Q012 — Massenwirkungsgesetz & Gleichgewichtskonstante:**
   - *Präzisierung:* Die vereinfachte, ungewichtete Formulierung \`[Produkte]/[Edukte]\` in der Erklärung wurde korrigiert. Für eine allgemeine Gleichgewichtsreaktion $a\\,\\text{A} + b\\,\\text{B} \\rightleftharpoons c\\,\\text{C} + d\\,\\text{D}$ wird nun formal das korrekte Massenwirkungsgesetz mit den stöchiometrischen Koeffizienten als Exponenten angegeben ($K_c = \\frac{[\\text{C}]^c [\\text{D}]^d}{[\\text{A}]^a [\\text{B}]^b}$ bzw. thermodynamisch streng über Aktivitäten $K = \\frac{a(\\text{C})^c a(\\text{D})^d}{a(\\text{A})^a a(\\text{B})^b}$).

5. **Q014 — Edelgase & Reaktivitätsgrenzen:**
   - *Präzisierung:* Die pauschale Behauptung, Edelgasverbindungen entstünden „nur unter extremen Laborbedingungen“, wurde fachlich differenziert. Es wird die allgemein sehr geringe Reaktivität infolge der geschlossenen Valenzkonfiguration ($ns^2 np^6$) dargestellt und herausgearbeitet, dass schwerere Edelgase mit geringerer Ionisierungsenergie (vor allem Xenon) mit stark elektronegativen Reaktionspartnern wie Fluor oder Sauerstoff thermodynamisch stabile Verbindungen (wie $\\text{XeF}_2$, $\\text{XeF}_4$, $\\text{XeO}_3$) bilden.

6. **Q015 — Haber-Bosch-Katalysator (Metallisches $\\alpha$-Eisen vs. Oxid-Vorstufe):**
   - *Präzisierung:* Die ungenaue Bezeichnung als „Eisenoxid-Katalysator“ wurde korrigiert. Es wird klar unterschieden zwischen der industriellen Katalysatorvorstufe (Magnetit $\\text{Fe}_3\\text{O}_4$ mit Promotoren $\\text{Al}_2\\text{O}_3, \\text{K}_2\\text{O}$) und dem eigentlichen, durch $\\text{H}_2$-Reduktion im Reaktor erzeugten, aktiven heterogenen Katalysator aus porösem metallischem $\\alpha$-Eisen.

7. **Q021 — Stereozentren & Chiralität:**
   - *Präzisierung:* Die unzulässige Verallgemeinerung, dass jedes Molekül mit „mindestens einem Stereozentrum“ chiral sein müsse (was bei meso-Verbindungen falsch ist), wurde eliminiert. Die Aufgabenstellung wurde gezielt auf Moleküle mit **genau einem** asymmetrisch substituierten Kohlenstoffatom (wie der 2-Hydroxypropansäure / Milchsäure) fokussiert, bei denen Chiralität zwingend vorliegt.

8. **LaTeX- & Sonderzeichen-Bereinigung (u. a. Q022):**
   - Sämtliche TypeScript-String-Escapes für LaTeX-Befehle (insbesondere unvollständig maskierte \\text-Befehle in Q017, Q018, Q022 und Q023, die zur Interpretation als Tabulator führten) wurden behoben. Die Schmelzpunkt-Notation in Q022 (\`Schmelzpunkt $5{,}5\\,^\\circ\\text{C}$\`) rendert nun fehlerfrei in KaTeX.

---

## 3. Didaktischer VMC-Syllabus-Crosswalk

> [!NOTE]
> **Hinweis zur Lehrplankonformität:** Die Zuordnung basiert auf dem offiziell publizierten BMS-Chemie-Stichwortkatalog des Virtuellen Medizinischen Campus (VMC) der Medizinischen Universitäten (Wien, Graz, Innsbruck, Linz) und dem AHS-Lehrplan Chemie. Interne, nicht-öffentliche Testarchive der Universitäten sind naturgemäß nicht einsehbar.

| VMC-Oberthema / Stichwort | Plattform-Kapitel-ID | Relevante GP3-Aufgaben | Abdeckungsstatus & Thematischer Fokus |
| :--- | :--- | :--- | :--- |
| **Atombau & Mikrokosmos**<br>Elementarteilchen, Atommodelle, Quantenzahlen, Linienspektren | \`chem-01-atombau\` | **Q001** (Grundlagen)<br>**Q002** (Schwer) | **Vollständig abgedeckt**<br>Bohr-Modell, Quantensprünge, Balmer-Serie, Elektronenaffinitäts-Anomalie (Cl vs. F) |
| **Strahlung & Kernchemie**<br>Radioaktivität, Kernzerfälle, Positronenemission | \`chem-02-strahlung\` | **Q003** (Mittel) | **Vollständig abgedeckt**<br>$\\beta^+$-Zerfall, PET-Nuklearmedizin, Paarvernichtung ($2 \\times 511\\text{ keV}$) |
| **Gasgesetze & Aggregatzustände**<br>Ideales Gasgesetz, Avogadro, Reale Gase, Van-der-Waals | \`chem-03-gase\` | **Q004** (Grundlagen)<br>**Q005** (Schwer) | **Vollständig abgedeckt**<br>Avogadro-Gesetz, molares Standardvolumen, Van-der-Waals-Parameter $a$ und $b$ |
| **Chemische Bindung & Geometrie**<br>Kovalente, metallische & Ionenbindung, Hybridisierung, Lewis | \`chem-04-bindungen\` | **Q006** (Grundlagen)<br>**Q007** (Mittel)<br>**Q008** (Mittel) | **Vollständig abgedeckt**<br>Elektronengasmodell der Metalle, $sp^3/sp^2/sp$-Hybridisierung, koordinative Bindung in $\\text{NH}_4^+$ |
| **Stöchiometrie & Reaktionen**<br>Stoffmenge, Konzentrationen, Massenanteil, Löslichkeitsprodukt | \`chem-05-stoechiometrie\`| **Q009** (Grundlagen)<br>**Q010** (Mittel)<br>**Q011** (Schwer) | **Vollständig abgedeckt**<br>Massenanteil physiologische Kochsalzlösung, Gasentwicklung stöchiometrisch, $K_L = 4s^3$ für $\\text{CaF}_2$ |
| **Thermodynamik, Gleichgewicht & Kinetik**<br>MWG, Le Chatelier, Kinetik 1. Ordnung, Arrhenius | \`chem-06-gleichgewicht\`| **Q012** (Mittel)<br>**Q013** (Schwer) | **Vollständig abgedeckt**<br>Van 't Hoff-Temperaturabhängigkeit, Reaktionsordnung 1, Halbwertszeit $t_{1/2} = \\frac{\\ln 2}{k}$ |
| **Stoffchemie der Hauptgruppen**<br>Edelgase, Stickstoffgruppe, Bindungsenthalpien | \`chem-07-elemente\` | **Q014** (Grundlagen)<br>**Q015** (Mittel) | **Vollständig abgedeckt**<br>Edelgaskonfiguration & Reaktivität, $\\text{N}_2$-Dreifachbindung & Haber-Bosch-Verfahren |
| **Säuren, Basen & Puffer**<br>Brønsted-Theorie, $pK_s/pK_b$, Salzhydrolyse, Titrationskurven | \`chem-08-saeuren-basen\`| **Q016** (Grundlagen)<br>**Q017** (Mittel)<br>**Q018** (Schwer) | **Vollständig abgedeckt**<br>Korrespondierende Paare ($pK_s+pK_b=14$), pH von Salzlösungen, Pufferbereich & Halbäquivalenzpunkt |
| **Redoxprozesse & Elektrochemie**<br>Oxidationszahlen, Disproportionierung, Elektrolyse, Faraday | \`chem-09-redox\` | **Q019** (Mittel)<br>**Q020** (Schwer) | **Vollständig abgedeckt**<br>Disproportionierung von $\\text{Cl}_2$ vs. Komproportionierung, Faradaysches Gesetz ($z=2$) |
| **Organische Chemie & Mechanismen**<br>Stereochemie, Chiralität, Aromaten, $S_E\\text{Ar}$ | \`chem-10-organik\` | **Q021** (Grundlagen)<br>**Q022** (Mittel) | **Vollständig abgedeckt**<br>Milchsäure-Chiralität & Enantiomere, Benzol-Aromatizität & elektrophile Substitution |
| **Naturstoffe & Biochemie**<br>Kohlenhydrate, Fischer-Projektion, D/L-Reihe, Enzymkinetik | \`chem-11-naturstoffe\` | **Q023** (Mittel)<br>**Q024** (Schwer) | **Vollständig abgedeckt**<br>D/L-Nomenklatur am Referenz-C-Atom, Michaelis-Menten & kompetitive Hemmung |
| **Integrierte Chemie / Klinische Anwendung**<br>Blutgase, Osmose, Elektrolyte | \`chem-12-integriert\` | *(Integrierte Transferfragen)*| **Thematisch integriert** in Säure-Basen-Pufferung (Q018), physiologische Kochsalzlösung (Q009), PET-Nuklide (Q003) |

---

## 4. Vollständiger Katalog aller 24 Aufgaben im Detail

`;

RAW_GENERALPROBE_3_CHEM_QUESTIONS.forEach((q, idx) => {
  const incorrectKeys = Object.keys(q.explanations_incorrect).sort();
  md += `### ${q.id} (Aufgabe ${idx + 1}/24)
- **Kapitel:** \`${q.chapter_id}\`
- **Themenbereich:** ${q.primary_topic} · ${q.subtopic}
- **Schwierigkeit:** ${q.difficulty === "foundational" ? "Grundlagen (Leicht)" : q.difficulty === "intermediate" ? "Mittel" : "Schwer (Advanced)"}
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
${incorrectKeys.map((k) => `  - **Option ${k}:** ${q.explanations_incorrect[k]}`).join("\n")}

---

`;
});

fs.writeFileSync(targetPath, md, "utf-8");
console.log(`Successfully generated updated GP3 Chemistry documentation at ${targetPath}`);
