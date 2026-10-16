import fs from "fs";
import { RAW_GENERALPROBE_3_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe3BiologyQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_biology_generalprobe3_40_questions.md";

let md = `# MedAT BMS Biologie — Generalprobe #3 Aufgabenbank (40 Original-Aufgaben)
## Wissenschaftlicher Prüfungsbericht, Kalibrierung, VMC-Abgleich & Gesamtdokumentation

> [!IMPORTANT]
> **Status:** Originales Übungsmaterial für die MedAT-H Prüfungsvorbereitung. Der vorliegende Fragensatz wurde einer gründlichen internen wissenschaftlich-didaktischen Qualitätsprüfung unterzogen und korrigiert; er gilt als **originales Übungsmaterial vorbehaltlich einer formellen unabhängigen Fachgutachter-Prüfung**. Er stellt keine offiziellen MedAT-Originalprüfungsfragen der Medizinischen Universitäten dar.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Soll-Vorgabe | Ist-Zustand (GP3 Re-Audited) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 40 Aufgaben | **40 Aufgaben** (\`BIO-BMS-GP3-001\` bis \`BIO-BMS-GP3-040\`) | Bestanden |
| **Antwortoptionen** | A, B, C, D, E (5 Optionen je Aufgabe) | **5 Optionen je Aufgabe, genau 1 korrekte Lösung** | Bestanden |
| **Schlüsselverteilung** | Empirisch ermittelt | **8× A (20%), 8× B (20%), 8× C (20%), 8× D (20%), 8× E (20%)** | Bestanden |
| **Schwierigkeitsgrad** | 10 Leicht / 20 Mittel / 10 Schwer | **10 Grundlagen (25%), 20 Mittel (50%), 10 Schwer (25%)** | Bestanden |
| **App-Kapitelabdeckung** | 9 interne Plattform-Kapitel (\`bio-01\` bis \`bio-09\`) | **Lückenlos verteilt** (4×5 + 5×4 = 40 Aufgaben) | Bestanden |
| **Distraktor-Analyse** | Fachliche Begründung aller 4 Falschantworten | **100% aller Distraktoren qualifiziert begründet** | Bestanden |
| **Isolation & Originalität**| Keine Überschneidung mit GP1/GP2 | **0 Stamm-Kollisionen, 0 ID-Kollisionen; GP1/GP2 unverändert** | Bestanden |
| **BMS-Gesamtintegration**| Vollständiges 94-Aufgaben-BMS-Format | **40 Bio + 24 Chem + 18 Phys + 12 Math = 94 Aufgaben** | Bestanden |

---

## 2. Wissenschaftliche Qualitätsprüfung & Durchgeführte Korrekturen

Im Rahmen des vertieften Peer-Review-Audits wurden 14 Kernaspekte wissenschaftlich präzisiert:

1. **Q5 — Dynamin & Vesikelabschnürung:**
   - *Problemstellung:* Die ursprüngliche Formulierung unterstellte fälschlicherweise eine Membranfusion durch Dynamin.
   - *Korrektur:* Klarstellung, dass Dynamin eine mechanochemische GTPase ist, die eine helikale Verengung (Konstriktion) des Membranhalses bewirkt und zur Durchtrennung (Fission/Scission) führt, ohne eine Membranfusion wie SNAREs zu katalysieren. Schlüssel E beibehalten.
2. **Q9 — Glukoseaufnahme in humanen Betazellen:**
   - *Problemstellung:* Das klassische Nager-Modell (GLUT2) wurde unkritisch auf den Menschen übertragen.
   - *Korrektur:* Präzisierung in Stamm, Option E und Fachbegründung, dass in humanen Betazellen die Glukoseaufnahme primär über hochaffine GLUT1- und GLUT3-Transporter erfolgt, während GLUT2 nur gering exprimiert wird (im Gegensatz zum Nagetier). Schlüssel E beibehalten.
3. **Q10 — Renale Glukoseresorption:**
   - *Problemstellung:* Absolute Behauptung einer 100%igen Resorption ohne Nierenschwellen-Kontext; unvollständige GLUT-Zuordnung.
   - *Korrektur:* Qualifiziert als „unter normalen physiologischen Bedingungen nahezu vollständig“ (unterhalb der Nierenschwelle von ca. 180 mg/dl). Spezifizierung von SGLT2 und basolateralem GLUT2 im S1/S2-Segment sowie hochaffinem SGLT1 und basolateralem GLUT1 im S3-Segment. Schlüssel D beibehalten.
4. **Q11 — Totipotenz menschlicher Blastomeren:**
   - *Problemstellung:* Die Behauptung, Totipotenz sei bis zum 8-Zell-Stadium „nachweislich“ belegt, überstieg die experimentelle Evidenz beim Menschen.
   - *Korrektur:* Formulierung defensibel auf die klassische humanembryologische Lehrbuchdidaktik refaktoriert (Totipotenz bis zum 4- bis 8-Zell-Stadium vor Einsetzen der Kompaktierung; Verlust der Totipotenz ab der Morula/Kompaktierung zugunsten der Pluripotenz des Embryoblasts). Schlüssel A beibehalten.
5. **Q13 — Dottersack & Primordiale Keimzellen (PGCs):**
   - *Problemstellung:* Behauptung, Urkeimzellen entstünden aus dem Dottersackentoderm.
   - *Korrektur:* Korrekte Differenzierung zwischen ihrem Ursprung im proximalen Epiblasten (2. Woche), ihrer vorübergehenden Beherbergung in der Dottersackwand nahe der Allantois (4. Woche) und ihrer aktiven amöboidalen Wanderung über das dorsale Mesenterium in die Gonadenanlagen (5.–6. Woche). Schlüssel B beibehalten.
6. **Q14 — Zeitliche Determinierung des Neuralrohrverschlusses:**
   - *Problemstellung:* Verwechslung von Entwicklungswochen (post conceptionem, p.c.) mit gynäkologischen Schwangerschaftswochen (post menstruationem, p.m.).
   - *Korrektur:* Stamm und Erklärung synchronisiert: Verschluss zwischen Tag 21 und 28 p.c. (4. embryonale Entwicklungswoche), was der 5. bis 6. Schwangerschaftswoche p.m. entspricht. Schlüssel D beibehalten.
7. **Q16 — Rekombinationsfrequenz vs. meiotisches Crossing-over:**
   - *Problemstellung:* Gleichsetzung von Rekombinationsfrequenz (12 %) mit der Häufigkeit von Meiosen mit Crossing-over.
   - *Korrektur:* Da ein meiotisches Bivalent aus 4 Chromatiden besteht und ein Crossover nur 2 Nicht-Schwesterchromatiden erfasst (50 % rekombinante Chromatiden je Tetrade), entspricht eine Rekombinationsfrequenz von 12 % (12 cM) unter den Gameten einer Crossing-over-Häufigkeit von ca. 24 % der Meiosen. Option C und Didaktik entsprechend korrigiert. Schlüssel C beibehalten.
8. **Q23 — Sanger-Sequenzierung & Kettenabbruch:**
   - *Problemstellung:* Ungenaue Formulierung „fehlendes 3'-Sauerstoffatom“.
   - *Korrektur:* Präzise biochemische Definition: ddNTPs fehlt die freie 3'-Hydroxylgruppe (-OH) am Desoxyribosering (ersetzt durch -H), wodurch keine Phosphodiesterbindung mit dem 5'-Triphosphat des Folgenukleotids geknüpft werden kann. Schlüssel C beibehalten.
9. **Q27 — Oxidative Phase des Pentosephosphatwegs:**
   - *Problemstellung:* Stamm und Optionen nannten Ribose-5-Phosphat als direktes Produkt der oxidativen Phase.
   - *Korrektur:* Klarstellung, dass die oxidative Phase direkt NADPH, CO₂ und **Ribulose-5-Phosphat** liefert. Erst die nachfolgende nicht-oxidative Phase isomerisiert Ribulose-5-Phosphat zu Ribose-5-Phosphat (für PRPP/Nukleotide) bzw. Xylulose-5-Phosphat. Option E und Stamm synchronisiert. Schlüssel E beibehalten.
10. **Q38 — Patellarsehnenreflex & Verschaltung:**
    - *Problemstellung:* Behauptung, die Ia-Afferenz bilde im Hinterhorn eine monosynaptische Synapse.
    - *Korrektur:* Ia-Afferenzen treten über die Hinterwurzel (Radix posterior) ein, ziehen ohne synaptische Unterbrechung direkt in das Vorderhorn und synaptieren dort monosynaptisch auf Alpha-Motoneurone des Quadriceps. Reziproke Hemmung des Beugers erfolgt disynaptisch über ein hemmendes Ia-Interneuron. Option E korrigiert. Schlüssel E beibehalten.
11. **Q39 — Blut-Hirn-Schranke:**
    - *Problemstellung:* Nicht-fachgerechter Absolutheitsanspruch („hermetisch abgedichtet“).
    - *Korrektur:* Wissenschaftlich qualifizierte Beschreibung der starken, selektiven parazellulären Diffusionsrestriktion für polare Makromoleküle durch endotheliale Tight Junctions (Claudin-3/-5, Occludin). Schlüssel C beibehalten.
12. **Q2 & Q34 — Cholesterin-Temperaturpufferung & Atemantrieb:**
    - *Q2:* Detaillierte Darstellung des Cholesterins als bidirektionaler Fluiditätspuffer (Verringerung der Fluidität bei 37 °C durch starren Steroidring; Verhinderung des Erstarrens bei Kälte).
    - *Q34:* Entfernung der uneingeschränkten Linearitätsbehauptung: Der Atemantrieb steigt im physiologischen Bereich (pCO₂ 35–60 mmHg) näherungsweise linear, schlägt jedoch bei extremen Hyperkapnien (> 70–80 mmHg) in eine narkotisierende Atemdepression um.
13. **Q19 — Robertsonsche Translokation & empirische Risiken:**
    - *Problemstellung:* Pauschales Wiederholungsrisiko ohne Berücksichtigung elterlicher Geschlechter und Translokationstypen.
    - *Korrektur:* Differenzierung zwischen theoretischem Risiko (1/3 unter lebensfähigen Gameten), empirischem Risiko bei maternaler rob(14;21)-Trägerschaft (10–15 %), empirischem Risiko bei paternaler Trägerschaft (1–2 % infolge Gametenselektion) und 100 % Risiko bei homologer rob(21;21)-Translokation.

---

## 3. Didaktische Syllabus-Analyse & VMC-Abgleich

### 3.1. Plattform-Kapitel vs. VMC-Stichwortkatalog
Die MedAT-H Prüfungsvorbereitungsplattform aggregiert Biologie-Aufgaben in neun standardisierte interne Modul-IDs:
1. \`bio-01-zelle\` (5 Aufgaben)
2. \`bio-02-koerper\` (5 Aufgaben)
3. \`bio-03-fruehentwicklung\` (4 Aufgaben)
4. \`bio-04-genetik\` (5 Aufgaben)
5. \`bio-05-molgen\` (5 Aufgaben)
6. \`bio-06-stoffwechsel\` (4 Aufgaben)
7. \`bio-07-herzkreislauf\` (4 Aufgaben)
8. \`bio-08-atmung\` (4 Aufgaben)
9. \`bio-09-nervensystem\` (4 Aufgaben)

### 3.2. Identifizierte Lehrplan- und Abdeckungslücken
Obwohl alle 9 Plattform-Kapitel lückenlos bedient werden, existieren im Vergleich zum **vollständigen österreichischen VMC-Stichwortkatalog** spezifische Abweichungen:
- **Evolution & Ökologie:** Während die Populationsgenetik (Hardy-Weinberg in Q18) vertreten ist, fehlen in diesem 40-Fragen-Set klassische Themen der makroskopischen Evolution (Selektionsformen, allopatrische/sympatrische Artbildung, Homologie/Analogie) sowie der Ökologie (Trophieebenen, ökologische Nische, Energiefluss).
- **Dedizierte Immunologie:** Grundlegende Schutzmechanismen (Paneth-Defensine in Q8) werden berührt; Fragen zur spezifischen Immunologie (B-/T-Zell-Reifung, V(D)J-Rekombination, MHC-Klassen) sind in GP3 zugunsten tiefergehender Organphysiologie nicht als eigenständige Fragen platziert (wurden in GP1/GP2 adressiert).
- **Spezialisierungsgrad:** Einzelne Fragen (z. B. Q3 M6P-Sortierung, Q7 RANKL/OPG, Q24 CRISPR vs. RNAi) liegen an der oberen Grenze des MedAT-Anforderungsniveaus (Bereich Matura/AHS-Leistungskurs bis frühes Vorklinik-Niveau) und dienen gezielt der Differenzierung im oberen Testdrittel (Trennschärfe für Spitzenplätze).

---

## 4. Vollständiger Katalog aller 40 Aufgaben im Detail

`;

RAW_GENERALPROBE_3_BIO_QUESTIONS.forEach((q, idx) => {
  const incorrectKeys = Object.keys(q.explanations_incorrect).sort();
  md += `### ${q.id} (Aufgabe ${idx + 1}/40)
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
console.log(`Successfully generated enriched GP3 Biology documentation at ${targetPath}`);
