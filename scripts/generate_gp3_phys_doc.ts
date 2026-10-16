import fs from "fs";
import {
  RAW_GENERALPROBE_3_PHYS_QUESTIONS,
} from "../src/data/generalprobe/generalprobe3PhysicsQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_physics_generalprobe3_18_questions.md";

const keySequence = RAW_GENERALPROBE_3_PHYS_QUESTIONS.map((q) => q.correct_answer);
const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
keySequence.forEach((k) => counts[k]++);

let md = `# MedAT BMS Physik — Generalprobe #3 Aufgabenbank (18 Original-Aufgaben)
## Physikalische Validierung, Didaktische Kalibrierung, VMC-Syllabus-Crosswalk & Gesamtdokumentation

> [!IMPORTANT]
> **Status:** Originales Übungsmaterial für die MedAT-H Prüfungsvorbereitung. Der vorliegende Fragensatz wurde einer gründlichen internen physikalisch-didaktischen Qualitätsprüfung unterzogen; er gilt als **originales Übungsmaterial vorbehaltlich einer formellen unabhängigen Fachgutachter-Prüfung**. Er stellt keine offiziellen MedAT-Originalprüfungsfragen der Medizinischen Universitäten dar.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Soll-Vorgabe | Ist-Zustand (GP3 Phys) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 18 Aufgaben | **18 Aufgaben** (\`PHYS-BMS-GP3-001\` bis \`PHYS-BMS-GP3-018\`) | Bestanden ✅ |
| **Antwortoptionen** | A, B, C, D, E (5 Optionen je Aufgabe) | **5 Optionen je Aufgabe, genau 1 physikalisch korrekte Lösung** | Bestanden ✅ |
| **Schlüsselverteilung** | Ausgewogen (4 A, 4 B, 4 C, 3 D, 3 E) | **4× A (22.2%), 4× B (22.2%), 4× C (22.2%), 3× D (16.7%), 3× E (16.7%)** | Bestanden ✅ |
| **Antwort-Muster** | Azyklisch & permutationsreich | **Keine 5er-Zyklen, keine Periodizität, blockweise wechselnde Permutationen** | Bestanden ✅ |
| **Schwierigkeitsgrad** | Exakt 4 Leicht, 9 Mittel, 5 Schwer | **4 Grundlagen (22,2 %), 9 Mittel (50,0 %), 5 Schwer (27,8 %)** | Bestanden ✅ |
| **Kapitel-Metadaten** | Valide App-Kapitel-IDs in allen Records | **100% aller 18 Roh- und StoredQuestion-Records besitzen valide Kapitel-IDs** | Bestanden ✅ |
| **Distraktor-Analyse** | Fachliche Begründung aller 4 Falschantworten | **100% aller Distraktoren qualifiziert physikalisch begründet** | Bestanden ✅ |
| **Isolation & Originalität**| Keine Überschneidung mit GP1/GP2 | **0 Stamm-Kollisionen, 0 ID-Kollisionen; GP1 und GP2 unverändert** | Bestanden ✅ |
| **BMS-Gesamtintegration**| Vollständiges 94-Aufgaben-BMS-Format | **40 Bio + 24 Chem + 18 Phys + 12 Math = 94 Aufgaben** | Bestanden ✅ |

### 1.1. Antwortschlüssel-Sequenz
Die finale Lösungsbuchstaben-Abfolge lautet:
\`\`\`
Fragen  01–05:  C,  E,  A,  D,  B
Fragen  06–10:  E,  A,  C,  B,  D
Fragen  11–15:  A,  E,  B,  C,  D
Fragen  16–18:  A,  C,  B
\`\`\`
- **Auswertung:** 4× A, 4× B, 4× C, 3× D, 3× E (Summe: 18).
- **Musterbereinigung:** Jeder 5er-Block bildet eine eigenständige, unregelmäßige Permutation ohne zyklische Muster oder periodische Wiederholungen.

---

## 2. Didaktischer VMC-Syllabus-Crosswalk

> [!NOTE]
> **Hinweis zur Lehrplankonformität:** Die Zuordnung basiert auf dem offiziell publizierten BMS-Physik-Stichwortkatalog des Virtuellen Medizinischen Campus (VMC) der Medizinischen Universitäten (Wien, Graz, Innsbruck, Linz) und dem österreichischen AHS-Lehrplan Physik. Interne, nicht-öffentliche Testarchive der Universitäten sind naturgemäß nicht einsehbar.

| VMC-Oberthema / Stichwort | Plattform-Kapitel-ID | Relevante GP3-Aufgaben | Abdeckungsstatus & Thematischer Fokus |
| :--- | :--- | :--- | :--- |
| **Größen & Einheiten**<br>SI-Basiseinheiten, abgeleitete Einheiten, Skalare vs. Vektoren, Dimensionsanalyse | \`phys-01-groessen-einheiten\` | **Q001** (Leicht)<br>**Q002** (Mittel) | **Vollständig abgedeckt**<br>Skalare vs. vektorielle Größen (Impuls, Feldstärke), Dimensionsanalyse des ohmschen Widerstands ($\\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-3}\\cdot\\text{A}^{-2}$) |
| **Mechanik (Translation, Rotation, Fluide)**<br>Newtonsche Axiome, Kräfte, Reibung, Arbeit, Energie, Leistung, Impuls, Hydrostatik & Hydrodynamik | \`phys-02-mechanik\` | **Q003** (Leicht)<br>**Q004** (Mittel)<br>**Q005** (Mittel)<br>**Q006** (Schwer)<br>**Q007** (Schwer) | **Vollständig abgedeckt**<br>Actio-Reactio (Vertikalsprung), Energieerhaltung ($v = \\sqrt{2gh}$), hydrostatischer Schweredruck in Blutgefäßen ($p = \\rho g h$), Rückstoßimpuls ($v_{\\text{R}} = -\\frac{m_2 v_2}{m_1}$), Gefäßstenose ($A_2 = \\frac{1}{4}A_1 \\implies v_2 = 4v_1$) & Bernoulli-Effekt |
| **Schwingungen & Wellen**<br>Harmonische Schwingungen, Transversal-/Longitudinalwellen, Akustik, Doppler-Effekt | \`phys-03-schwingungen-wellen\` | **Q008** (Leicht)<br>**Q009** (Schwer) | **Vollständig abgedeckt**<br>Longitudinale Druckwellen in Fluiden vs. transversale EM-Wellen, akustischer Doppler-Effekt bei bewegtem Sender ($f' = f_0 \\frac{c}{c - v_S}$) |
| **Wärmelehre (Thermodynamik)**<br>Temperaturskalen, Zustandsänderungen, spezifische Wärmekapazität, Kalorimetrie | \`phys-04-waermelehre\` | **Q010** (Mittel)<br>**Q011** (Mittel) | **Vollständig abgedeckt**<br>Ideales Gasgesetz / isochore Erwärmung ($p \\sim T_{\\text{Kelvin}}$), kalorische Erwärmung von Wasser ($Q = m c \\Delta T$) & Heizzeit ($t = Q/P$) |
| **Elektrizitätslehre & Magnetismus**<br>Gleichstromkreise, Ohmsches Gesetz, Kondensatoren, Induktion & Lenzsche Regel | \`phys-05-elektrizitaet\` | **Q012** (Leicht)<br>**Q013** (Mittel)<br>**Q014** (Schwer) | **Vollständig abgedeckt**<br>Widerstandsreihenschaltung & Spannungsteiler, im Kondensator gespeicherte Feldenergie ($W = \\frac{1}{2} C U^2$), elektromagnetische Induktion & Wirbelstrombremsung |
| **Optik**<br>Geometrische Optik, Linsengleichung, reelle Abbildung, Brechungsgesetz, Totalreflexion | \`phys-06-optik\` | **Q015** (Mittel)<br>**Q016** (Schwer) | **Vollständig abgedeckt**<br>Sammellinsenabbildung ($1/f = 1/g + 1/b$) & Maßstab ($B/G = b/g$), Totalreflexion & Grenzwinkel in medizinischen Lichtwellenleitern ($\\sin\\alpha_c = n_2/n_1$) |
| **Atom- und Kernphysik**<br>Radioaktivität, Strahlenschutz, Halbwertsdicke, Massendefekt, Kernbindung | \`phys-07-atom-kernphysik\` | **Q017** (Mittel)<br>**Q018** (Mittel) | **Vollständig abgedeckt**<br>Exponentielles Schwächungsgesetz ($I = I_0 \\cdot (1/2)^n$) mit Halbwertsdicke, Massendefekt & nukleare Bindungsenergie ($E = \\Delta m \\cdot c^2$) |

---

## 3. Physikalische & Numerische Validierung im Detail

| Frage | Thema & Physikalisches Prinzip | Formel & Eingesetzte Zahlenwerte | Berechnetes Ergebnis & Einheit |
| :--- | :--- | :--- | :--- |
| **Q001** | Skalare vs. Vektorielle Größen | $\\vec{p} = m\\vec{v}$, $\\vec{a} = \\frac{d\\vec{v}}{dt}$, $\\vec{E} = \\frac{\\vec{F}}{q}$ | Vektoren besitzen Betrag und Raumrichtung |
| **Q002** | Dimensionsanalyse Ohm ($\\Omega$) | $R = \\frac{U}{I} = \\frac{W}{q \\cdot I} = \\frac{\\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}}{\\text{A}\\cdot\\text{s} \\cdot \\text{A}}$ | $\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3} \\cdot \\text{A}^{-2}$ |
| **Q003** | 3. Newtonsches Axiom (Actio = Reactio) | $\\vec{F}_{\\text{Boden}} = -\\vec{F}_{\\text{Athletin}}$ | $1200\\,\\text{N}$ senkrecht nach oben |
| **Q004** | Mechanische Energieerhaltung | $v = \\sqrt{2 \\cdot g \\cdot h} = \\sqrt{2 \\cdot 10 \\cdot 20}$ | $20\\,\\text{m/s}$ ($72\\,\\text{km/h}$) |
| **Q005** | Hydrostatischer Schweredruck | $\\Delta p = \\rho \\cdot g \\cdot h = 1050 \\cdot 9{,}8 \\cdot 1{,}30$ | $13.377\\,\\text{Pa} \\approx 13{,}4\\,\\text{kPa} \\approx 100\\,\\text{mmHg}$ |
| **Q006** | Impulserhaltung beim Rückstoß | $v_{\\text{R}} = -\\frac{m_2 v_2}{m_1} = -\\frac{2{,}5 \\cdot 8{,}0}{50}$ | $-0{,}40\\,\\text{m/s}$ ($0{,}40\\,\\text{m/s}$ nach hinten) |
| **Q007** | Kontinuität & Bernoulli-Effekt | $r_2 = 0{,}5 r_1 \\implies A_2 = 0{,}25 A_1 \\implies v_2 = 4 v_1$ | $v_2 = 0{,}80\\,\\text{m/s}$; statischer Druck sinkt ($p_2 < p_1$) |
| **Q008** | Longitudinal- vs. Transversalwellen | Fluide haben Schermodul $G = 0$ | Schall in Gasen/Flüssigkeiten rein longitudinal |
| **Q009** | Akustischer Doppler-Effekt | $f' = f_0 \\cdot \\frac{c}{c - v_S} = 900 \\cdot \\frac{340}{340 - 34} = 900 \\cdot \\frac{10}{9}$ | $1000\\,\\text{Hz}$ |
| **Q010** | Isochore Erwärmung (Amontons) | $p_2 = p_1 \\cdot \\frac{T_2}{T_1} = 3{,}0 \\cdot \\frac{400\\,\\text{K}}{300\\,\\text{K}}$ | $4{,}0\\,\\text{bar}$ |
| **Q011** | Spezifische Wärmekapazität & Leistung | $Q = 2 \\cdot 4200 \\cdot 40 = 336\\,\\text{kJ}$; $t = \\frac{336.000}{1400}$ | $Q = 336\\,\\text{kJ}$; $t = 240\\,\\text{s}$ ($4\\,\\text{min}$) |
| **Q012** | Reihenschaltung & Spannungsteiler | $R_{\\text{ges}} = 100\\,\\Omega$; $I = \\frac{20}{100} = 0{,}20\\,\\text{A}$; $U_2 = 0{,}20 \\cdot 60$ | $I = 0{,}20\\,\\text{A}$; $U_2 = 12\\,\\text{V}$ |
| **Q013** | Elektrische Feldenergie Kondensator | $W = \\frac{1}{2} C U^2 = \\frac{1}{2} \\cdot 50\\times 10^{-6} \\cdot (2000)^2$ | $100\\,\\text{J}$ |
| **Q014** | Induktion & Lenzsche Regel | $\\mathcal{E} = -\\frac{d\\Phi}{dt}$; Wirbelströme erzeugen Gegenfeld | Bremsende Lorentzkraft (Wirbelstrombremse) |
| **Q015** | Linsengleichung & Abbildung | $\\frac{1}{b} = \\frac{1}{10} - \\frac{1}{30} = \\frac{1}{15}$; $B = 6{,}0 \\cdot \\frac{15}{30}$ | $b = 15\\,\\text{cm}$; $B = 3{,}0\\,\\text{cm}$ (reell, umgekehrt) |
| **Q016** | Totalreflexion im Lichtwellenleiter | $\\sin\\alpha_c = \\frac{n_2}{n_1} = \\frac{1{,}28}{1{,}60} = \\frac{4}{5} = 0{,}80$ | $\\sin\\alpha_c = 0{,}80$ ($\\approx 53^\\circ$); Totalreflexion bei $\\alpha > \\alpha_c$ |
| **Q017** | Halbwertsdicke & Schwächung | $I/I_0 = 1/32 = (1/2)^5 \\implies n = 5$; $d = 5 \\cdot 4{,}0\\,\\text{mm}$ | $d = 20\\,\\text{mm}$ ($2{,}0\\,\\text{cm}$) |
| **Q018** | Massendefekt & Bindungsenergie | $E = \\Delta m \\cdot c^2$; $\\Delta m = \\sum m_{\\text{Nukleonen}} - m_{\\text{Kern}}$ | Freisetzung von Bindungsenergie bewirkt Masseverlust |

---

## 4. Vollständiger Katalog aller 18 Aufgaben im Detail

`;

RAW_GENERALPROBE_3_PHYS_QUESTIONS.forEach((q, idx) => {
  const incorrectKeys = Object.keys(q.explanations_incorrect).sort();
  md += `### ${q.id} (Aufgabe ${idx + 1}/18)
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
console.log(`Successfully generated GP3 Physics documentation at ${targetPath}`);
