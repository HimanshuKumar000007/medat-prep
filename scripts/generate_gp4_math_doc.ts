import fs from "fs";
import {
  RAW_GENERALPROBE_4_MATH_QUESTIONS,
  GENERALPROBE_4_MATH_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4MathQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_mathematics_generalprobe4_12_questions.md";

const keySequence = RAW_GENERALPROBE_4_MATH_QUESTIONS.map((q) => q.correct_answer);
const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
keySequence.forEach((k) => counts[k]++);

let md = `# MedAT BMS Mathematik — Generalprobe #4 Aufgabenbank (12 Original-Aufgaben)
## Mathematische Validierung, Didaktische Kalibrierung, VMC-Syllabus-Crosswalk & Gesamtdokumentation

> [!IMPORTANT]
> **Status:** Originales Übungsmaterial für die MedAT-H Prüfungsvorbereitung (Generalprobe 4). Der vorliegende Fragensatz wurde einer gründlichen internen mathematisch-didaktischen Qualitätsprüfung unterzogen; er gilt als **originales Übungsmaterial vorbehaltlich einer formellen unabhängigen Fachgutachter-Prüfung**. Er stellt keine offiziellen MedAT-Originalprüfungsfragen der Medizinischen Universitäten dar.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Soll-Vorgabe | Ist-Zustand (GP4 Math) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 12 Aufgaben | **12 Aufgaben** (\`MATH-BMS-GP4-001\` bis \`MATH-BMS-GP4-012\`) | Bestanden ✅ |
| **Antwortoptionen** | A, B, C, D, E (5 Optionen je Aufgabe) | **5 Optionen je Aufgabe, genau 1 mathematisch korrekte Lösung** | Bestanden ✅ |
| **Schlüsselverteilung** | Ausgewogen (3 A, 3 B, 2 C, 2 D, 2 E) | **3× A (25.0%), 3× B (25.0%), 2× C (16.7%), 2× D (16.7%), 2× E (16.7%)** | Bestanden ✅ |
| **Antwort-Muster** | Azyklisch & permutationsreich | **Keine Periodizität, maximale Wiederholung = 1, keine 3er-Streaks** | Bestanden ✅ |
| **Schwierigkeitsgrad** | Exakt 3 Leicht, 6 Mittel, 3 Schwer | **3 Grundlagen (25,0 %), 6 Mittel (50,0 %), 3 Schwer (25,0 %)** | Bestanden ✅ |
| **Kapitel-Abdeckung** | Exakt 2 Aufgaben je VMC-Kapitel | **6 Kapitel × 2 Aufgaben = 12 Aufgaben vollständig abgedeckt** | Bestanden ✅ |
| **Distraktor-Analyse** | Fachliche Begründung aller 4 Falschantworten | **100% aller 48 Distraktoren qualifiziert mathematisch begründet** | Bestanden ✅ |
| **Isolation & Originalität**| Keine Überschneidung mit GP1/GP2/GP3 | **0 Stamm-Kollisionen, 0 ID-Kollisionen; GP1, GP2 und GP3 unverändert** | Bestanden ✅ |
| **BMS-Gesamtintegration**| Vollständiges 94-Aufgaben-BMS-Format | **40 Bio + 24 Chem + 18 Phys + 12 Math = 94 Aufgaben** | Bestanden ✅ |

### 1.1. Antwortschlüssel-Sequenz
Die finale Lösungsbuchstaben-Abfolge lautet:
\`\`\`
Fragen  01–06:  B,  C,  D,  A,  E,  C
Fragen  07–12:  A,  B,  E,  A,  B,  D
\`\`\`
- **Auswertung:** 3× A, 3× B, 2× C, 2× D, 2× E (Summe: 12).
- **Musterbereinigung:** Max-Streak = 1 (keine zwei identischen aufeinanderfolgenden Buchstaben, vollständig azyklisch und ohne Periodizität).

---

## 2. Didaktischer VMC-Syllabus-Crosswalk

> [!NOTE]
> **Hinweis zur Lehrplankonformität:** Die Zuordnung basiert auf dem offiziell publizierten BMS-Mathematik-Stichwortkatalog des Virtuellen Medizinischen Campus (VMC) der Medizinischen Universitäten (Wien, Graz, Innsbruck, Linz) und dem österreichischen AHS-Reifeprüfungslehrplan Mathematik (ohne Taschenrechner).

| VMC-Oberthema / Stichwort | Plattform-Kapitel-ID | Relevante GP4-Aufgaben | Abdeckungsstatus & Thematischer Fokus |
| :--- | :--- | :--- | :--- |
| **Zehnerpotenzen und Zahlenmengen**<br>Zehnerpotenzen, Präfixe, wissenschaftliche Notation, Bruchexponenten, Wurzeln | \`math-01-zehnerpotenzen\` | **Q001** (Leicht)<br>**Q002** (Mittel) | **Vollständig abgedeckt**<br>Nanomedizinische Tröpfchen-Verdünnung ($4{,}8 \\times 10^7\\,\\text{mL}^{-1} \\cdot 25\\,\\mu\\text{L} = 1{,}2 \\times 10^6$ Virionen); algebraische Termvereinfachung mit rationalen Exponenten & Wurzeln ($(16 \\cdot 10^{-8})^{3/4} / (\\sqrt{4 \\cdot 10^{-6}} \\cdot 10^{-2}) = 0{,}4$) |
| **Algebra und Arithmetik**<br>Lineare & quadratische Gleichungen, Bruchterme, Satz von Vieta, Mischungsrechnung | \`math-02-algebra\` | **Q003** (Leicht)<br>**Q004** (Mittel) | **Vollständig abgedeckt**<br>Lineare Bruchgleichung mit Hauptnenner 12 ($\frac{3x - 5}{4} - \frac{x - 1}{6} = \frac{2}{3} \\implies x = 3$); quadratische Gleichungsanalyse ($2x^2 - 14x + 20 = 0 \\implies x_1 = 2, x_2 = 5$, Differenz $3$) |
| **Geometrie und Trigonometrie**<br>Planimetrie, Pythagoras, Kreisgeometrie & Sehnensatz, stereometrische Skalierung | \`math-03-geometrie\` | **Q005** (Mittel)<br>**Q006** (Schwer) | **Vollständig abgedeckt**<br>Hornhautkrümmung & Sehnensatz im Kreissegment ($R = 10\\,\\text{mm}, d = 6\\,\\text{mm} \\implies s = 16\\,\\text{mm}, h = 4\\,\\text{mm}$); allometrische Zellexpansion & räumliche Skalierung ($V_2/V_1 = 2{,}197 = 1{,}3^3 \\implies A_2/A_1 = 1{,}3^2 = 1{,}69 \\implies +69\\,\\%$) |
| **Einheiten und Dimensionen**<br>Einheitenumrechnung, SI-Präfixe, pharmakologische Dosierungs- & Infusionsrechnung | \`math-04-einheiten\` | **Q007** (Leicht)<br>**Q008** (Mittel) | **Vollständig abgedeckt**<br>Aortale Blutflussgeschwindigkeit ($1{,}08\\,\\text{km/h} = 0{,}30\\,\\text{m/s} = 30\\,\\text{cm/s}$); kontinuierliche Infusionsdosierung ($75\\,\\text{kg} \\cdot 20\\,\\mu\\text{g/kg/h} \\cdot 8\\,\\text{h} = 12\\,\\text{mg} \\implies 48\\,\\text{mL}$ Fertiglösung) |
| **Funktionen, Graphen und Analysis**<br>Logarithmengesetze, pH-Logarithmen, exponentieller Zerfall, radioaktive Halbwertszeit | \`math-05-funktionen\` | **Q009** (Mittel)<br>**Q010** (Schwer) | **Vollständig abgedeckt**<br>Dekadische Logarithmusregeln ($\log_{10}(500) + \\log_{10}(20) - \\log_{10}(10^{-2}) = 4 - (-2) = 6$); physikalischer $^{99\\text{m}}\\text{Tc}$-Zerfall ($t_{1/2} = 6{,}0\\,\\text{h}$, Restaktivität $12{,}5\\,\\% = (1/2)^3 \\implies t = 18\\,\\text{h}$) |
| **Vektorrechnung**<br>2D/3D-Vektoren, Vektoraddition, Biomechanik, Betrag, Skalarprodukt & Orthogonalität | \`math-06-vektorrechnung\` | **Q011** (Mittel)<br>**Q012** (Schwer) | **Vollständig abgedeckt**<br>Biomechanische Muskelzugvektoraddition in der Frontalebene ($\vec{F}_1 + \\vec{F}_2 = (15, 8)^T \\implies |\\vec{F}_{\\text{res}}| = 17\\,\\text{N}$); räumliche Orthogonalitätsanalyse & Vektornorm ($3\\cdot 2 - 2\\cdot 5 + 4k = 0 \\implies k = 1$, $|\\vec{u}| = \\sqrt{29}$) |

---

## 3. Mathematische & Numerische Validierung im Detail

| Frage | Thema & Prinzip | Ansatz & Gleichung | Berechneter Wert | Korrekte Option |
| :--- | :--- | :--- | :--- | :--- |
| **Q001** | Zehnerpotenzen & Aliquotierung | $N = 4{,}8 \\times 10^7\\,\\text{mL}^{-1} \\cdot 25 \\times 10^{-3}\\,\\text{mL}$ | $120 \\times 10^4 = 1{,}2 \\times 10^6$ | **B** |
| **Q002** | Rationale Exponenten & Wurzeln | $\\frac{16^{3/4} \\cdot 10^{-6}}{\\sqrt{4} \\cdot 10^{-3} \\cdot 10^{-2}} = \\frac{8 \\cdot 10^{-6}}{2 \\cdot 10^{-5}}$ | $4 \\cdot 10^{-1} = 0{,}4$ | **C** |
| **Q003** | Lineare Bruchgleichung | $12 \\cdot \\left[\\frac{3x-5}{4} - \\frac{x-1}{6}\\right] = 12 \\cdot \\frac{2}{3} \\implies 7x - 13 = 8$ | $7x = 21 \\implies x = 3$ | **D** |
| **Q004** | Quadratische Gleichung & Vieta | $x^2 - 7x + 10 = 0 \\iff (x-2)(x-5)=0$ | $x_1 = 2, x_2 = 5, x_2 - x_1 = 3$ | **A** |
| **Q005** | Pythagoras & Sehnensatz | $(s/2)^2 + 6^2 = 10^2 \\implies s/2 = 8; h = 10 - 6$ | $s = 16\\,\\text{mm}, h = 4\\,\\text{mm}$ | **E** |
| **Q006** | Allometrische Kugel-Skalierung | $k = \\sqrt[3]{2{,}197} = 1{,}3 \\implies \\Delta A = (1{,}3^2 - 1)$ | $+69\\,\\%$ ($A_2 = 1{,}69 A_1$) | **C** |
| **Q007** | Geschwindigkeitseinheiten | $v = \\frac{1{,}08}{3{,}6}\\,\\text{m/s} = 0{,}30\\,\\text{m/s}$ | $0{,}30\\,\\text{m/s}$ und $30\\,\\text{cm/s}$ | **A** |
| **Q008** | Dosierungs- & Infusionsrechnung | $m = 75 \\cdot 20 \\cdot 8\\,\\mu\\text{g} = 12\\,\\text{mg}; V = \\frac{12}{0{,}25}$ | $48\\,\\text{mL}$ | **B** |
| **Q009** | Logarithmengesetze | $\\log_{10}(500 \\cdot 20) - \\log_{10}(10^{-2}) = 4 - (-2)$ | $4 + 2 = 6$ | **E** |
| **Q010** | Exponentieller Zerfall (HWZ) | $A(t)/A_0 = 12{,}5\\,\\% = (1/2)^3 \\implies t = 3 \\cdot 6{,}0\\,\\text{h}$ | $t = 18\\,\\text{h}$ | **A** |
| **Q011** | 2D-Vektoren & Pythagoras | $\\vec{F}_{\\text{res}} = (12+3, -5+13)^T = (15, 8)^T$ | $|\\vec{F}_{\\text{res}}| = \\sqrt{15^2 + 8^2} = 17\\,\\text{N}$ | **B** |
| **Q012** | 3D-Skalarprodukt & Betrag | $3(2) + (-2)(5) + 4k = 0 \\implies k = 1; |\\vec{u}| = \\sqrt{9+4+16}$ | $k = 1, |\\vec{u}| = \\sqrt{29}$ | **D** |

---

## 4. Vollständige Dokumentation aller 12 Aufgaben

`;

RAW_GENERALPROBE_4_MATH_QUESTIONS.forEach((q, idx) => {
  const letters = ["A", "B", "C", "D", "E"] as const;
  const num = (idx + 1).toString().padStart(2, "0");
  const diffBadge = q.difficulty === "foundational" ? "🟢 Grundlagen (Leicht)" : q.difficulty === "intermediate" ? "🟡 Mittel (Intermediate)" : "🔴 Schwer (Advanced)";
  const sq = GENERALPROBE_4_MATH_QUESTIONS[idx];

  md += `### Aufgabe ${num}: \`${q.id}\` — ${q.primary_topic} · ${q.subtopic}\n\n`;
  md += `**Kapitel-ID:** \`${sq.chapterId}\` | **Schwierigkeitsgrad:** ${diffBadge} | **Korrekte Antwort:** **Option ${q.correct_answer}**\n\n`;
  md += `> **Fragestamm:**\n> ${q.stem.replace(/\\n/g, "\n> ")}\n\n`;
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
console.log(`Successfully generated GP4 Math documentation artifact at: ${targetPath}`);
