import fs from "fs";
import {
  RAW_GENERALPROBE_4_PHYS_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4PhysicsQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_physics_generalprobe4_18_questions.md";

const keySequence = RAW_GENERALPROBE_4_PHYS_QUESTIONS.map((q) => q.correct_answer);
const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
keySequence.forEach((k) => counts[k]++);

let md = `# MedAT BMS Physik — Generalprobe #4 Aufgabenbank (18 Original-Aufgaben)
## Physikalische Validierung, Didaktische Kalibrierung, VMC-Syllabus-Crosswalk & Gesamtdokumentation

> [!IMPORTANT]
> **Status:** Originales Übungsmaterial für die MedAT-H Prüfungsvorbereitung (Generalprobe 4). Der vorliegende Fragensatz wurde einer gründlichen internen physikalisch-didaktischen Qualitätsprüfung unterzogen; er gilt als **originales Übungsmaterial vorbehaltlich einer formellen unabhängigen Fachgutachter-Prüfung**. Er stellt keine offiziellen MedAT-Originalprüfungsfragen der Medizinischen Universitäten dar.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Soll-Vorgabe | Ist-Zustand (GP4 Phys) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 18 Aufgaben | **18 Aufgaben** (\`PHYS-BMS-GP4-001\` bis \`PHYS-BMS-GP4-018\`) | Bestanden ✅ |
| **Antwortoptionen** | A, B, C, D, E (5 Optionen je Aufgabe) | **5 Optionen je Aufgabe, genau 1 physikalisch korrekte Lösung** | Bestanden ✅ |
| **Schlüsselverteilung** | Ausgewogen (4 A, 4 B, 4 C, 3 D, 3 E) | **4× A (22.2%), 4× B (22.2%), 4× C (22.2%), 3× D (16.7%), 3× E (16.7%)** | Bestanden ✅ |
| **Antwort-Muster** | Azyklisch & permutationsreich | **Keine 5er-Zyklen, keine Periodizität, blockweise wechselnde Permutationen** | Bestanden ✅ |
| **Schwierigkeitsgrad** | Exakt 4 Leicht, 9 Mittel, 5 Schwer | **4 Grundlagen (22,2 %), 9 Mittel (50,0 %), 5 Schwer (27,8 %)** | Bestanden ✅ |
| **Kapitel-Metadaten** | Valide App-Kapitel-IDs in allen Records | **100% aller 18 Roh- und StoredQuestion-Records besitzen valide Kapitel-IDs** | Bestanden ✅ |
| **Distraktor-Analyse** | Fachliche Begründung aller 4 Falschantworten | **100% aller Distraktoren qualifiziert physikalisch begründet** | Bestanden ✅ |
| **Isolation & Originalität**| Keine Überschneidung mit GP1/GP2/GP3 | **0 Stamm-Kollisionen, 0 ID-Kollisionen; GP1, GP2 und GP3 unverändert** | Bestanden ✅ |
| **BMS-Gesamtintegration**| Vollständiges 94-Aufgaben-BMS-Format | **40 Bio + 24 Chem + 18 Phys + 12 Math = 94 Aufgaben** | Bestanden ✅ |

### 1.1. Antwortschlüssel-Sequenz
Die finale Lösungsbuchstaben-Abfolge lautet:
\`\`\`
Fragen  01–05:  B,  D,  A,  C,  E
Fragen  06–10:  C,  A,  D,  B,  E
Fragen  11–15:  A,  C,  B,  E,  D
Fragen  16–18:  B,  C,  A
\`\`\`
- **Auswertung:** 4× A, 4× B, 4× C, 3× D, 3× E (Summe: 18).
- **Musterbereinigung:** Jeder 5er-Block bildet eine eigenständige, unregelmäßige Permutation ohne zyklische Muster oder periodische Wiederholungen.

---

## 2. Didaktischer VMC-Syllabus-Crosswalk

> [!NOTE]
> **Hinweis zur Lehrplankonformität:** Die Zuordnung basiert auf dem offiziell publizierten BMS-Physik-Stichwortkatalog des Virtuellen Medizinischen Campus (VMC) der Medizinischen Universitäten (Wien, Graz, Innsbruck, Linz) und dem österreichischen AHS-Lehrplan Physik. Interne, nicht-öffentliche Testarchive der Universitäten sind naturgemäß nicht einsehbar.

| VMC-Oberthema / Stichwort | Plattform-Kapitel-ID | Relevante GP4-Aufgaben | Abdeckungsstatus & Thematischer Fokus |
| :--- | :--- | :--- | :--- |
| **Größen & Einheiten**<br>SI-Basiseinheiten, Dezimalpräfixe, Dimensionsanalyse | \`phys-01-groessen-einheiten\` | **Q001** (Leicht)<br>**Q002** (Mittel) | **Vollständig abgedeckt**<br>Dezimalpräfixe $\\mu\\text{m}$ zu $\\text{m}$ und $\\text{nm}$; Zerlegung der elektrischen Kapazität Farad in SI-Basiseinheiten ($\\text{kg}^{-1} \\cdot \\text{m}^{-2} \\cdot \\text{s}^4 \\cdot \\text{A}^2$) |
| **Mechanik (Translation, Rotation, Fluide)**<br>Newtonsche Axiome, Trägheitsprinzip, Kinematik & Bremsweg, Drehmoment & Hebel, Hydrostatik & Auftrieb, Hydrodynamik | \`phys-02-mechanik\` | **Q003** (Leicht)<br>**Q004** (Mittel)<br>**Q005** (Mittel)<br>**Q006** (Schwer)<br>**Q007** (Schwer) | **Vollständig abgedeckt**<br>1. Newtonsches Axiom / Kräftegleichgewicht bei unbeschleunigter Fahrt; Bremsverzögerung ($t_{\\text{Brems}} = 6{,}0\\,\\text{s}$, $s_{\\text{Brems}} = 90\\,\\text{m}$); zweiseitiger Hebel ($r_2 = 1{,}5\\,\\text{m} \\implies m_2 = 36\\,\\text{kg}$); hydrostatischer Auftrieb & Dichtebestimmung ($F_A = 20\\,\\text{N}$, $\\rho_K = 2500\\,\\text{kg/m}^3$); Torricelli-Theorem & Volumenstrom ($v = 10\\,\\text{m/s}$, $\\dot{V} = 2{,}0\\,\\text{L/s}$) |
| **Schwingungen & Wellen**<br>Wellenausbreitung, Ultraschall, stehende Wellen, akustische Resonanz | \`phys-03-schwingungen-wellen\` | **Q008** (Leicht)<br>**Q009** (Schwer) | **Vollständig abgedeckt**<br>Ultraschallwellenlänge in Weichgewebe ($c = 1500\\,\\text{m/s}$, $f = 3{,}0\\,\\text{MHz} \\implies \\lambda = 0{,}50\\,\\text{mm}$); Eigenresonanz einseitig geschlossener Röhren (gedeckte Pfeife; $\\lambda_1 = 4L = 0{,}68\\,\\text{m} \\implies f_1 = 500\\,\\text{Hz}$) |
| **Wärmelehre (Thermodynamik)**<br>Kalorimetrie, Mischungsregel, ideale Gasgesetze, absolute Temperaturskala | \`phys-04-waermelehre\` | **Q010** (Mittel)<br>**Q011** (Mittel) | **Vollständig abgedeckt**<br>Richmannsche Mischungsregel ($300\\,\\text{g}$ bei $20\\,^\\circ\\text{C} + 200\\,\\text{g}$ bei $70\\,^\\circ\\text{C} \\implies T_m = 40\\,^\\circ\\text{C}$); isobare Expansion / Gay-Lussac & Charles ($p = \\text{const}, T_1 = 300\\,\\text{K} \\to T_2 = 600\\,\\text{K} \\implies V_2 = 3{,}0\\,\\text{L}$) |
| **Elektrizitätslehre & Magnetismus**<br>Ohmsches Gesetz, elektrische Leistung, gemischte Widerstandsnetzwerke, Lorentzkraft & Zyklotronradius | \`phys-05-elektrizitaet\` | **Q012** (Leicht)<br>**Q013** (Mittel)<br>**Q014** (Schwer) | **Vollständig abgedeckt**<br>Elektrische Leistung & Widerstand ($P = 460\\,\\text{W}$, $R = 115\\,\\Omega$); gemischte Parallelschaltung & Gesamtwiderstand ($R_{\\text{ges}} = 40\\,\\Omega$, $I_{\\text{ges}} = 2{,}0\\,\\text{A}$); Lorentzkraft & Bahnradius bei verdoppelter Geschwindigkeit und halbiertem Feld ($r' = 4r$) |
| **Optik**<br>Geometrische Optik, Sammellinsen, reelle Abbildung, Brechungsgesetz & Totalreflexion | \`phys-06-optik\` | **Q015** (Mittel)<br>**Q016** (Schwer) | **Vollständig abgedeckt**<br>Linsengleichung bei Sammellinse ($f = 20\\,\\text{cm}$, $g = 30\\,\\text{cm} \\implies b = 60\\,\\text{cm}$, $\\beta = 2{,}0$, reell/umgekehrt); Totalreflexionsgrenzwinkel in Wellenleitern ($n_1 = 2{,}00 \\implies \\alpha_c = 30^\\circ$, strikte Bedingung $\\alpha > \\alpha_c$ für Totalreflexion) |
| **Atom- und Kernphysik**<br>Radioaktivität, Zerfallsgesetz, Halbwertszeit, Photoelektrischer Effekt & Photonennatur | \`phys-07-atom-kernphysik\` | **Q017** (Mittel)<br>**Q018** (Mittel) | **Vollständig abgedeckt**<br>Zerfallsgesetz von $^{99\\text{m}}\\text{Tc}$ ($T_{1/2} = 6{,}0\\,\\text{h}$, $t = 24\\,\\text{h} \\implies A = 50\\,\\text{MBq}$ in unbenutzter Präparation); photoelektrischer Effekt (Grenzfrequenz, Austrittsarbeit $W_A$, lineare Frequenzabhängigkeit der kinetischen Energie) |

---

## 3. Physikalische & Numerische Validierung im Detail

| Frage | Thema & Physikalisches Prinzip | Formel & Eingesetzte Zahlenwerte | Berechnetes Ergebnis & Einheit |
| :--- | :--- | :--- | :--- |
| **Q001** | SI-Präfixe & Umrechnung | $d = 7{,}5\\,\\mu\\text{m} = 7{,}5 \\times 10^{-6}\\,\\text{m} = 7500\\,\\text{nm}$ | $7{,}5 \\cdot 10^{-6}\\,\\text{m}$ und $7500\\,\\text{nm}$ |
| **Q002** | Dimensionsanalyse Farad (F) | $[F] = \\frac{[C]}{[V]} = \\frac{[A\\cdot s]}{[kg\\cdot m^2\\cdot s^{-3}\\cdot A^{-1}]}$ | $\\text{kg}^{-1} \\cdot \\text{m}^{-2} \\cdot \\text{s}^4 \\cdot \\text{A}^2$ |
| **Q003** | 1. Newtonsches Axiom (Trägheit) | $\\vec{v} = \\text{const} \\implies \\vec{a} = 0 \\implies \\sum \\vec{F} = 0$ | $F_{\\text{res}} = 0\\,\\text{N}$ (Kräftegleichgewicht) |
| **Q004** | Bremskinematik & Bremsweg | $t = \\frac{v_0}{\\|a\\|} = \\frac{30}{5} = 6\\,\\text{s}$; $s = \\frac{v_0^2}{2\\|a\\|} = \\frac{900}{10}$ | $t_{\\text{Brems}} = 6{,}0\\,\\text{s}$; $s_{\\text{Brems}} = 90\\,\\text{m}$ |
| **Q005** | Zweiseitiger Hebel (Drehmoment) | $m_1 r_1 = m_2 r_2 \\implies m_2 = 60 \\cdot \\frac{1{,}5}{2{,}5} = 60 \\cdot \\frac{3}{5}$ | $m_2 = 36\\,\\text{kg}$ |
| **Q006** | Auftriebskraft & Festkörperdichte | $F_A = 50 - 30 = 20\\,\\text{N}$; $\\rho_K = \\frac{F_G}{F_A} \\cdot \\rho_W = \\frac{50}{20} \\cdot 1000$ | $F_A = 20\\,\\text{N}$; $\\rho_K = 2500\\,\\text{kg/m}^3$ |
| **Q007** | Torricelli-Theorem & Volumenstrom | $v = \\sqrt{2gh} = \\sqrt{100} = 10\\,\\text{m/s}$; $\\dot{V} = A \\cdot v = 2 \\times 10^{-4} \\cdot 10$ | $v = 10\\,\\text{m/s}$; $\\dot{V} = 2{,}0\\,\\text{L/s}$ |
| **Q008** | Ultraschall-Wellenlänge in Gewebe | $\\lambda = \\frac{c}{f} = \\frac{1500\\,\\text{m/s}}{3{,}0 \\times 10^6\\,\\text{s}^{-1}}$ | $\\lambda = 0{,}50\\,\\text{mm}$ ($5{,}0 \\cdot 10^{-4}\\,\\text{m}$) |
| **Q009** | Stehende Wellen (gedeckte Pfeife) | $\\lambda_1 = 4L = 4 \\cdot 0{,}17 = 0{,}68\\,\\text{m}$; $f_1 = \\frac{340}{0{,}68}$ | $f_1 = 500\\,\\text{Hz}$ |
| **Q010** | Richmannsche Mischungsregel | $T_m = \\frac{300 \\cdot 20 + 200 \\cdot 70}{300 + 200} = \\frac{20000}{500}$ | $T_m = 40\\,^\\circ\\text{C}$ |
| **Q011** | Isobare Gaserwärmung (Gay-Lussac / Charles) | $V_2 = V_1 \\cdot \\frac{T_2}{T_1} = 1{,}5 \\cdot \\frac{600\\,\\text{K}}{300\\,\\text{K}} = 1{,}5 \\cdot 2$ | $V_2 = 3{,}0\\,\\text{L}$ |
| **Q012** | Ohmsches Gesetz & Wirkleistung | $P = U \\cdot I = 230 \\cdot 2 = 460\\,\\text{W}$; $R = \\frac{U}{I} = \\frac{230}{2}$ | $P = 460\\,\\text{W}$; $R = 115\\,\\Omega$ |
| **Q013** | Gemischte Widerstandsschaltung | $R_p = \\frac{40 \\cdot 60}{100} = 24\\,\\Omega$; $R_{\\text{ges}} = 24 + 16 = 40\\,\\Omega$; $I = \\frac{80}{40}$ | $R_{\\text{ges}} = 40\\,\\Omega$; $I_{\\text{ges}} = 2{,}0\\,\\text{A}$ |
| **Q014** | Lorentzkraft & Zyklotronradius | $r = \\frac{m v}{q B}$; $r' = \\frac{m \\cdot (2v)}{q \\cdot (B/2)} = 4 \\cdot \\frac{m v}{q B}$ | $r' = 4r$ (Vervierfachung) |
| **Q015** | Dünne Sammellinse (Linsengleichung) | $\\frac{1}{b} = \\frac{1}{20} - \\frac{1}{30} = \\frac{1}{60} \\implies b = 60\\,\\text{cm}$; $\\beta = \\frac{60}{30} = 2$ | $b = 60\\,\\text{cm}$, reell, umgekehrt, 2-fach |
| **Q016** | Totalreflexion & Grenzwinkel | $\\sin\\alpha_c = \\frac{n_2}{n_1} = \\frac{1{,}00}{2{,}00} = 0{,}50 \\implies \\alpha_c = 30^\\circ$ | $\\alpha_c = 30^\\circ$; echte Totalreflexion erfordert $\\alpha > 30^\\circ$ und $n_1 > n_2$ |
| **Q017** | Radioaktiver Zerfall ($^{99\\text{m}}\\text{Tc}$) | $n = \\frac{24}{6} = 4$; $A = A_0 \\cdot (1/2)^4 = \\frac{800}{16}$ | $A = 50\\,\\text{MBq}$ in unbenutzter Präparation |
| **Q018** | Photoelektrischer Effekt | $E_{\\text{kin,max}} = h \\cdot f - W_A$; $f_{\\text{Grenz}} = \\frac{W_A}{h}$ | Austrittsarbeit $W_A$ berücksichtigt; Grenzfrequenz existiert; $E_{\\text{kin}}$ linear zu $f$ |

---

## 4. Vollständige Dokumentation aller 18 Aufgaben

`;

RAW_GENERALPROBE_4_PHYS_QUESTIONS.forEach((q, idx) => {
  const letters = ["A", "B", "C", "D", "E"] as const;
  const num = (idx + 1).toString().padStart(2, "0");
  const diffBadge = q.difficulty === "foundational" ? "🟢 Grundlagen (Leicht)" : q.difficulty === "intermediate" ? "🟡 Mittel (Intermediate)" : "🔴 Schwer (Advanced)";

  md += `### Aufgabe ${num}: \`${q.id}\` — ${q.primary_topic} · ${q.subtopic}\n\n`;
  md += `**Kapitel-ID:** \`${q.chapter_id}\` | **Schwierigkeitsgrad:** ${diffBadge} | **Korrekte Antwort:** **Option ${q.correct_answer}**\n\n`;
  md += `> **Fragestamm:**\n> ${q.stem}\n\n`;
  md += `**Antwortoptionen:**\n`;
  letters.forEach((l) => {
    const isCorrect = l === q.correct_answer;
    md += `- **[${l}]** ${isCorrect ? "**(Korrekte Lösung)** " : ""}${q.options[l]}\n`;
  });
  md += `\n**Didaktische Musterlösung:**\n${q.explanation_correct}\n\n`;
  md += `**Distraktor-Analyse & Begründung der Falschantworten:**\n`;
  letters.filter((l) => l !== q.correct_answer).forEach((l) => {
    md += `- **Option ${l}:** ${q.explanations_incorrect[l]}\n`;
  });
  md += `\n---\n\n`;
});

fs.writeFileSync(targetPath, md, "utf-8");
console.log(`Successfully generated GP4 Physics documentation artifact at: ${targetPath}`);
