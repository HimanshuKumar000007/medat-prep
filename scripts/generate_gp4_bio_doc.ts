import fs from "fs";
import { RAW_GENERALPROBE_4_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe4BiologyQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_biology_generalprobe4_40_questions.md";

let md = `# MedAT BMS Biologie — Generalprobe #4 Aufgabenbank (40 Original-Aufgaben)
## Wissenschaftlicher Prüfungsbericht, Kalibrierung, VMC-Abgleich & Gesamtdokumentation

> [!IMPORTANT]
> **Status:** Originales Übungsmaterial für die MedAT-H Prüfungsvorbereitung (Generalprobe 4). Der vorliegende Fragensatz wurde einer gründlichen internen wissenschaftlich-didaktischen Qualitätsprüfung unterzogen; alle 40 Aufgaben sind original verfasst, weisen eine streng kalibrierte Schwierigkeits- und Schlüsselverteilung auf und bieten lückenlose Fachbegründungen sowie detaillierte Distraktor-Analysen für alle Antwortoptionen. Er stellt keine offiziellen MedAT-Originalprüfungsfragen der Medizinischen Universitäten dar.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Soll-Vorgabe | Ist-Zustand (GP4 Audited) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 40 Aufgaben | **40 Aufgaben** (\`BIO-BMS-GP4-001\` bis \`BIO-BMS-GP4-040\`) | Bestanden |
| **Antwortoptionen** | A, B, C, D, E (5 Optionen je Aufgabe) | **5 Optionen je Aufgabe, genau 1 korrekte Lösung** | Bestanden |
| **Schlüsselverteilung** | Exakt ausbalanciert (je 20% pro Buchstabe) | **8× A (20%), 8× B (20%), 8× C (20%), 8× D (20%), 8× E (20%)** | Bestanden |
| **Schwierigkeitsgrad** | 10 Leicht / 20 Mittel / 10 Schwer | **10 Grundlagen (25%), 20 Mittel (50%), 10 Schwer (25%)** | Bestanden |
| **App-Kapitelabdeckung** | 9 interne Plattform-Kapitel (\`bio-01\` bis \`bio-09\`) | **Lückenlos verteilt** (4×5 + 5×4 = 40 Aufgaben) | Bestanden |
| **Distraktor-Analyse** | Fachliche Begründung aller 4 Falschantworten | **100% aller Distraktoren qualifiziert begründet** | Bestanden |
| **Isolation & Originalität**| Keine Überschneidung mit GP1/GP2/GP3 | **0 Stamm-Kollisionen, 0 ID-Kollisionen; GP1/GP2/GP3 unverändert** | Bestanden |
| **BMS-Gesamtintegration**| Vollständiges 94-Aufgaben-BMS-Format | **40 Bio + 24 Chem + 18 Phys + 12 Math = 94 Aufgaben** | Bestanden |

---

## 2. Didaktische Syllabus-Analyse & Kapitelverteilung

Die Aufgaben sind auf die neun standardisierten BMS-Biologie-Kapitel der Plattform und den österreichischen VMC-Stichwortkatalog aufgeteilt:

1. **Kapitel 1: Zellbiologie (\`bio-01-zelle\`, 5 Aufgaben: Q01–Q05)**
   - *Q01:* Kernpore & Kernimport (NLS, Importin-alpha/beta, Ran-GTP-Gradient) [Grundlagen, Key D]
   - *Q02:* Peroxisomen & Katalase (Fettsäuren-Beta-Oxidation, PTS1/PTS2) [Grundlagen, Key B]
   - *Q03:* Mikrotubuli-Organisation & Centrosom (gamma-Tubulin, Basalkörper/Kinetosom) [Mittel, Key E]
   - *Q04:* Zell-Matrix-Adhäsion & Hemidesmosomen (alpha6beta4-Integrin, Plectin, BP180/BP230) [Mittel, Key A]
   - *Q05:* Zellzyklus-Kontrollpunkte & G2/M-Übergang (CDK1/Cyclin B, Wee1, Cdc25C) [Schwer, Key C]

2. **Kapitel 2: Gewebe, Organe & Anatomie (\`bio-02-koerper\`, 5 Aufgaben: Q06–Q10)**
   - *Q06:* Epithelgewebe & Urothel (Crusta, Deckzellen, Uroplakin-Plaques) [Grundlagen, Key C]
   - *Q07:* Knochengewebe & Osteozyten (Canaliculi, Gap Junctions, Connexin 43, Sklerostin) [Mittel, Key A]
   - *Q08:* Glatte Muskulatur (Calmodulin, MLCK, Myosin-Phosphatase, Dense Bodies) [Mittel, Key D]
   - *Q09:* Nebennierenrinde (Zona glomerulosa / Aldosteron, Z. fasciculata / Cortisol, Z. reticularis / DHEA) [Mittel, Key B]
   - *Q10:* Renales Gegenstromsystem & Henle-Schleife (NKCC2, TAL, Harnstoff-Rezidivierung, medulläre Hyperosmolarität) [Schwer, Key E]

3. **Kapitel 3: Fortpflanzung & Frühentwicklung (\`bio-03-fruehentwicklung\`, 4 Aufgaben: Q11–Q14)**
   - *Q11:* Spermiogenese & Akrosom (Golgi-Apparat, Hyaluronidase/Akrosin, Histon-Protamin-Austausch) [Grundlagen, Key B]
   - *Q12:* Zona-pellucida-Bindung & Kortikalreaktion (ZP3, intrazelluläre Ca2+-Welle, Ovidukt-Polyspermieblock) [Mittel, Key D]
   - *Q13:* Blastozysten-Kompaktierung & Trophoblast vs. Embryoblast (E-Cadherin, Na+/K+-ATPase, Cdx2 vs. Oct4) [Mittel, Key A]
   - *Q14:* Primitivstreifen, Primitivknoten & Gastrulation (Epithelial-Mesenchymale Transition, Invagination, Keimblätter) [Schwer, Key C]

4. **Kapitel 4: Klassische Genetik & Vererbung (\`bio-04-genetik\`, 5 Aufgaben: Q15–Q19)**
   - *Q15:* Monohybrider Erbgang & Spaltungsgesetz (Mendel 2, 3:1 phänotypisch, 1:2:1 genotypisch) [Grundlagen, Key A]
   - *Q16:* X-chromosomal-rezessive Vererbung (Konduktorin, Hämophilie A, 50% Erkrankungswahrscheinlichkeit für Söhne) [Mittel, Key E]
   - *Q17:* Epistase & Bombay-Phänotyp (FUT1-Gen, H-Antigen-Mangel, Schein-Blutgruppe 0) [Mittel, Key C]
   - *Q18:* Hardy-Weinberg-Gleichgewicht & Heterozygotenfrequenz (Zystische Fibrose, p^2 + 2pq + q^2 = 1) [Mittel, Key B]
   - *Q19:* Chromosomen-Fehlsegregation & Non-Disjunction (Meiose I vs. Meiose II, Karyotypen der Gameten) [Schwer, Key D]

5. **Kapitel 5: Molekulargenetik & Gentechnik (\`bio-05-molgen\`, 5 Aufgaben: Q20–Q24)**
   - *Q20:* Telomere & Telomerase-Funktion (TERT, TERC-RNA-Matrize, Endreplikationsproblem) [Grundlagen, Key E]
   - *Q21:* Basale Transkriptionsfaktoren & TATA-Box (TFIID, TBP, Präinitiationskomplex) [Mittel, Key B]
   - *Q22:* Nonsense-Mutationen & Translationsabbruch (UAA, UAG, UGA, C-terminaler Abbruch, NMD) [Mittel, Key D]
   - *Q23:* CRISPR/Cas9-System (sgRNA, PAM-Motiv 5'-NGG-3', RuvC- und HNH-Nukleasedomänen) [Schwer, Key A]
   - *Q24:* Alternatives Spleißen & Spleißosom (snRNPs U1/U2/U4/U5/U6, Lariat-Bildung, Exon-Skipping) [Schwer, Key E]

6. **Kapitel 6: Stoffwechselbiochemie & Bioenergetik (\`bio-06-stoffwechsel\`, 4 Aufgaben: Q25–Q28)**
   - *Q25:* Glykolyse-Schlüsselreaktion (Phosphofructokinase-1 / PFK-1, Fructose-2,6-bisphosphat) [Grundlagen, Key E]
   - *Q26:* Citratzyklus & Succinat-Dehydrogenase (Komplex II der Atmungskette, FAD/FADH2, Innenmembran) [Mittel, Key B]
   - *Q27:* Gluconeogenese & Pyruvat-Carboxylase (Mitochondriale Carboxylierung zu Oxalacetat, Biotin, Malat-Shuttle) [Mittel, Key A]
   - *Q28:* Atmungskette & Chemiosmotische Kopplung (Protonengradient, elektrochemisches Potenzial, ATP-Synthase c-Ring) [Schwer, Key C]

7. **Kapitel 7: Herz-Kreislauf-System & Hämatologie (\`bio-07-herzkreislauf\`, 4 Aufgaben: Q29–Q32)**
   - *Q29:* Herzzyklus & Klappenmechanik (Anspannungs-, Austreibungs-, Entspannungs-, Füllungsphase) [Grundlagen, Key D]
   - *Q30:* Herzaktionspotenzial im Arbeitsmyokard (Phase 0 bis 4, NaV1.5, L-Typ-Ca2+-Kanäle Cav1.2, Plateau) [Mittel, Key C]
   - *Q31:* Erythrozyten-Stoffwechsel & 2,3-BPG (Rapoport-Luebering-Shuttle, Rechtsverschiebung der O2-Bindungskurve) [Mittel, Key B]
   - *Q32:* Frank-Starling-Mechanismus & Hämodynamik (Enddiastolisches Volumen, Vordehnung, Troponin C Ca2+-Sensitivität) [Schwer, Key A]

8. **Kapitel 8: Atmung & Gasaustausch (\`bio-08-atmung\`, 4 Aufgaben: Q33–Q36)**
   - *Q33:* Surfactant & Alveoläre Oberflächenspannung (Dipalmitoylphosphatidylcholin / DPPC, Pneumozyten Typ II, Laplace-Gesetz) [Grundlagen, Key E]
   - *Q34:* CO2-Transport im Blut & Hamburger-Shift (Erythrozytäre Carboanhydrase, HCO3-/Cl--Antiporter AE1) [Mittel, Key D]
   - *Q35:* Atemmechanik & Pleuradruck (Diaphragma, Mm. intercostales externi, subatmosphärischer intrapleuraler Druck) [Mittel, Key A]
   - *Q36:* Bohr-Effekt & Sauerstoff-Bindungskurve (Protonen, pCO2, Temperatur, allosterische T-Zustand-Stabilisierung) [Schwer, Key C]

9. **Kapitel 9: Nervensystem & Sinnesorgane (\`bio-09-nervensystem\`, 4 Aufgaben: Q37–Q40)**
   - *Q37:* Ruhemembranpotenzial (Goldman-Hodgkin-Katz, K+-Gleichgewichtspotenzial, Na+/K+-Pumpe) [Grundlagen, Key B]
   - *Q38:* Chemische synaptische Übertragung (Spannungsabhängige Ca2+-Kanäle, Synaptotagmin, SNARE-Komplex) [Mittel, Key E]
   - *Q39:* Phototransduktion in Stäbchen (11-cis- zu all-trans-Retinal, Rhodopsin, Transducin, PDE6, cGMP-Abfall, Hyperpolarisation) [Mittel, Key C]
   - *Q40:* Saltatorische Erregungsleitung (Myelinscheiden, Ranvier-Schnürringe, NaV-Dichte, Internodien, Längswiderstand) [Schwer, Key D]

---

## 3. Vollständiger Katalog aller 40 Aufgaben im Detail

`;

RAW_GENERALPROBE_4_BIO_QUESTIONS.forEach((q, idx) => {
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
console.log(`Successfully generated enriched GP4 Biology documentation at ${targetPath}`);
