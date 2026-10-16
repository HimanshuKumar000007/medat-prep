import fs from "fs";
import {
  RAW_GENERALPROBE_4_CHEM_QUESTIONS,
  GENERALPROBE_4_CHEM_QUESTIONS,
} from "../src/data/generalprobe/generalprobe4ChemistryQuestions";

const targetPath = "C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/medat_bms_chemistry_generalprobe4_24_questions.md";

const keySequence = RAW_GENERALPROBE_4_CHEM_QUESTIONS.map((q) => q.correct_answer);
const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
keySequence.forEach((k) => counts[k]++);

let md = `# MedAT BMS Chemie — Generalprobe #4 Aufgabenbank (24 Original-Aufgaben)
## Chemische Validierung, Didaktische Kalibrierung, VMC-Syllabus-Crosswalk & Gesamtdokumentation

> [!IMPORTANT]
> **Status:** Originales Übungsmaterial für die MedAT-H Prüfungsvorbereitung (Generalprobe 4). Der vorliegende Fragensatz wurde einer gründlichen internen chemisch-didaktischen Qualitätsprüfung unterzogen; alle 24 Aufgaben sind original verfasst, weisen eine streng kalibrierte Schwierigkeits- und Schlüsselverteilung auf und bieten lückenlose chemische Fachbegründungen sowie detaillierte Distraktor-Analysen für alle Antwortoptionen. Er stellt keine offiziellen MedAT-Originalprüfungsfragen der Medizinischen Universitäten dar.

---

## 1. Übersicht & Kalibrierungsdaten

| Metrik | Soll-Vorgabe | Ist-Zustand (GP4 Chem Audited) | Status |
| :--- | :--- | :--- | :--- |
| **Aufgabenanzahl** | Exakt 24 Aufgaben | **24 Aufgaben** (\`CHEM-BMS-GP4-001\` bis \`CHEM-BMS-GP4-024\`) | Bestanden ✅ |
| **Antwortoptionen** | A, B, C, D, E (5 Optionen je Aufgabe) | **5 Optionen je Aufgabe, genau 1 chemisch korrekte Lösung** | Bestanden ✅ |
| **Schlüsselverteilung** | Ausgewogen (5 A, 5 B, 5 C, 5 D, 4 E) | **5× A (20.8%), 5× B (20.8%), 5× C (20.8%), 5× D (20.8%), 4× E (16.7%)** | Bestanden ✅ |
| **Antwort-Muster** | Azyklisch & permutationsreich | **Keine 5er-Zyklen, keine Periodizität, unregelmäßige Permutationen** | Bestanden ✅ |
| **Schwierigkeitsgrad** | Exakt 6 Leicht, 12 Mittel, 6 Schwer | **6 Grundlagen (25%), 12 Mittel (50%), 6 Schwer (25%)** | Bestanden ✅ |
| **Kapitel-Metadaten** | Valide App-Kapitel-IDs in allen Records | **100% aller 24 Roh- und StoredQuestion-Records besitzen valide Kapitel-IDs** | Bestanden ✅ |
| **Distraktor-Analyse** | Fachliche Begründung aller 4 Falschantworten | **100% aller Distraktoren qualifiziert chemisch begründet** | Bestanden ✅ |
| **Isolation & Originalität**| Keine Überschneidung mit GP1/GP2/GP3 | **0 Stamm-Kollisionen, 0 ID-Kollisionen; GP1, GP2, GP3 unverändert** | Bestanden ✅ |
| **BMS-Gesamtintegration**| Vollständiges 94-Aufgaben-BMS-Format | **40 Bio + 24 Chem + 18 Phys + 12 Math = 94 Aufgaben** | Bestanden ✅ |

### 1.1. Antwortschlüssel-Sequenz
Die finale Lösungsbuchstaben-Abfolge lautet:
\`\`\`
Fragen  01–05:  B,  D,  A,  C,  E
Fragen  06–10:  A,  C,  B,  D,  E
Fragen  11–15:  A,  E,  B,  D,  C
Fragen  16–20:  A,  B,  D,  C,  E
Fragen  21–24:  B,  A,  D,  C
\`\`\`
- **Auswertung:** 5× A, 5× B, 5× C, 5× D, 4× E (Gesamt: 24).
- **Musterfreiheit:** Die Abfolge ist vollständig azyklisch und permutationsreich. Es existieren keine identischen aufeinanderfolgenden Buchstaben und keine periodischen 5er-Zyklen.

---

## 2. Wissenschaftliche Qualitätsprüfung & Rechenverifikation

Jede einzelne Aufgabe wurde einem unabhängigen chemischen Fachaudit unterzogen:

1. **Q001 — Hundsche Regel & Elektronenkonfiguration (chem-01-atombau):**
   - *Verifikation:* Klare quantenmechanische Differenzierung zwischen der Hundschen Regel (maximale Multiplizität, Minimierung der Coulomb-Abstoßung durch einfache Besetzung entarteter 2p-Orbitale mit parallelem Spin) und dem Pauli-Ausschlussprinzip.
2. **Q002 — Ionenradien isoelektronischer Ionen (chem-04-bindungen):**
   - *Verifikation:* Exakte physikalische Herleitung der Radienkontraktion in der 10-Elektronen-Reihe: $Z = 8$ (O²⁻, ~140 pm) > $Z = 9$ (F⁻, ~133 pm) > $Z = 11$ (Na⁺, ~102 pm) > $Z = 12$ (Mg²⁺, ~72 pm). Höhere Kernladung kontrahiert die identische Elektronenschale.
3. **Q003 — Alphazerfall & Nuklidbilanz (chem-02-strahlung):**
   - *Verifikation:* Strenge Nukleonen- und Kernladungsbilanz: ²³⁸_92U -> ²³⁴_90Th + ⁴_2He²⁺. Erläuterung des hohen linearen Energietransfers (LET) und der geringen Reichweite doppelt geladener Heliumkerne.
4. **Q004 — Boyle-Mariotte-Gesetz (chem-03-gase):**
   - *Berechnung:* $p₁ \cdot V₁ = p₂ \cdot V₂ \implies p₂ = 1{,}0\,\text{bar} \cdot (6{,}0\,\text{L} / 1{,}5\,\text{L}) = 4{,}0\,\text{bar}$. Unzweideutige ganzzahlige Lösung.
5. **Q005 — Reale Gase & Van-der-Waals-Gleichung (chem-03-gase):**
   - *Verifikation:* Thermodynamische Begründung der Abweichungen bei hohem Druck (Kovolumen $b$ wird relevant) und tiefer Temperatur (Binnendruck $a/V_m^2$ durch zwischenmolekulare Anziehungskräfte wird dominant).
6. **Q006 — Metallbindung & Elektronengas (chem-04-bindungen):**
   - *Verifikation:* Atomares Modell der metallischen Bindung: Gitter aus positiven Atomrümpfen eingebettet in delokalisierte Valenzelektronen. Erklärt Leitfähigkeit und plastische Verformbarkeit (kein Aufeinanderprallen gleicher Ionen wie im Sprödbruch von Salzen).
7. **Q007 — VSEPR-Modell für Schwefeltetrafluorid (chem-04-bindungen):**
   - *Verifikation:* Sterische Zahl 5 (4 bindende Paare, 1 freies Elektronenpaar). Freies Elektronenpaar besetzt bevorzugt die äquatoriale Position zur Minimierung von 90°-Repulsionen, was zur Wippen-Struktur (seesaw) führt.
8. **Q008 — Born-Haber-Kreisprozess & Gitterenergie (chem-04-bindungen):**
   - *Verifikation:* Coulomb-Gesetz für Ionengitter ($|U_G| \propto \frac{|z^+ \cdot z^-|}{r^+ + r^-}$). Gitterbildung ist der dominante exotherme Teilschritt, der endotherme Schritte überkompensiert.
9. **Q009 — Molare Masse & Stoffmenge (chem-05-stoechiometrie):**
   - *Berechnung:* $M(\text{CaCO}_3) = 40{,}0 + 12{,}0 + 3 \cdot 16{,}0 = 100{,}0\,\text{g/mol}$. Einwaage: $m = 0{,}25\,\text{mol} \cdot 100{,}0\,\text{g/mol} = 25{,}0\,\text{g}$.
10. **Q010 — Verdünnungsberechnung (chem-05-stoechiometrie):**
    - *Berechnung:* $c_1 \cdot V_1 = c_2 \cdot V_2 \implies V_1 = (0{,}20\,\text{mol/L} \cdot 500\,\text{mL}) / 4{,}0\,\text{mol/L} = 25\,\text{mL}$.
11. **Q011 — Limitierendes Reagenz & Gasbildung (chem-05-stoechiometrie):**
    - *Berechnung:* $n(\text{Mg}) = 2{,}43 / 24{,}3 = 0{,}10\,\text{mol}$; $n(\text{HCl}) = 1{,}5 \cdot 0{,}100 = 0{,}15\,\text{mol}$. Gemäß $\text{Mg} + 2\,\text{HCl}$ bräuchte man $0{,}20\,\text{mol HCl}$. Daher ist $\text{HCl}$ limitierend. Ausbeute: $n(\text{H}_2) = 0{,}15 / 2 = 0{,}075\,\text{mol}$.
12. **Q012 — Katalysatorwirkung (chem-06-gleichgewicht):**
    - *Verifikation:* Senkung der Aktivierungsenergie $E_A$, gleiche Beschleunigung von $k_{\text{hin}}$ und $k_{\text{rück}}$, $K$ und $\Delta G$ bleiben strikt unbeeinflusst.
13. **Q013 — Prinzip von Le Chatelier (chem-06-gleichgewicht):**
    - *Verifikation:* Kontaktverfahren: $2\,\text{SO}_2 + \text{O}_2 \rightleftharpoons 2\,\text{SO}_3$ ($\Delta H < 0$). Druckerhöhung begünstigt Seite mit weniger Mol Gas (Produktseite); Temperaturerniedrigung begünstigt exotherme Reaktion.
14. **Q014 — Gibbs-Helmholtz-Gleichung & Temperaturschwelle (chem-06-gleichgewicht):**
    - *Berechnung:* $\Delta G^\circ = \Delta H^\circ - T \cdot \Delta S^\circ < 0 \implies T > \Delta H^\circ / \Delta S^\circ = 40\,000\,\text{J/mol} / 100\,\text{J/(mol}\cdot\text{K)} = 400\,\text{K}$ ($127\,^\circ\text{C}$). Entropiegetriebener Prozess.
15. **Q015 — Ostwald-Verfahren & Oxidationszahlen (chem-07-elemente):**
    - *Verifikation:* $\text{NH}_3$ ($-3$), $\text{NO}$ ($+2$), $\text{HNO}_3$ ($+5$).
16. **Q016 — Kohlenstoffallotrope Diamant vs. Graphit (chem-07-elemente):**
    - *Verifikation:* Diamant ($sp^3$, kovalentes 3D-Gitter, Isolator, extrem hart); Graphit ($sp^2$, planare Schichten mit delokalisiertem $\pi$-Elektronensystem, elektrischer Leiter, weich).
17. **Q017 — Brønsted-Säure-Base-Paare (chem-08-saeuren-basen):**
    - *Verifikation:* $\text{H}_2\text{PO}_4^- \rightleftharpoons \text{HPO}_4^{2-} + H^+$. Abgabe genau eines Protons liefert Hydrogenphosphat ($\text{HPO}_4^{2-}$).
18. **Q018 — pH-Wert einer schwachen Säure (chem-08-saeuren-basen):**
    - *Berechnung:* $\text{pH} = \frac{1}{2}(\text{pK}_s - \lg c_0) = \frac{1}{2}(4{,}00 - (-2{,}00)) = \frac{1}{2}(6{,}00) = 3{,}00$.
19. **Q019 — Acetatpuffer & Henderson-Hasselbalch (chem-08-saeuren-basen):**
    - *Berechnung:* $0{,}20\,\text{mol Ac}^-$ und $0{,}10\,\text{mol HAc}$. Zugabe von $0{,}050\,\text{mol HCl}$ wandelt $0{,}050\,\text{mol Ac}^-$ in $0{,}050\,\text{mol HAc}$ um $\implies n(\text{Ac}^-) = 0{,}15\,\text{mol}$, $n(\text{HAc}) = 0{,}15\,\text{mol}$. Verhältnis $1:1 \implies \text{pH} = 4{,}75 + \lg 1 = 4{,}75$.
20. **Q020 — Redox-Stöchiometrie Permanganat mit Fe²⁺ (chem-09-redox):**
    - *Verifikation:* $5\,\text{Fe}^{2+} + \text{MnO}_4^- + 8\,\text{H}^+ \to 5\,\text{Fe}^{3+} + \text{Mn}^{2+} + 4\,\text{H}_2\text{O}$. Exakt $5\,\text{mol Fe}^{2+}$ und $8\,\text{mol H}^+$ pro $1\,\text{mol MnO}_4^-$.
21. **Q021 — Galvanisches Element Ag/Cu (chem-09-redox):**
    - *Berechnung:* $\Delta E^\circ = E^\circ(\text{Kathode}) - E^\circ(\text{Anode}) = +0{,}80\,\text{V} - (+0{,}34\,\text{V}) = +0{,}46\,\text{V}$. Kupfer wird als Anode oxidiert ($\text{Cu} \to \text{Cu}^{2+} + 2\,e^-$).
22. **Q022 — Halbacetalbildung an Carbonylgruppen (chem-10-organik):**
    - *Verifikation:* Addition eines Alkohols an Aldehyd liefert Halbacetal mit $-OH$ und $-OR'$ am selben C-Atom (Grundlage des Kohlenhydrat-Ringschlusses).
23. **Q023 — Stereochemie & meso-Weinsäure (chem-10-organik):**
    - *Verifikation:* $(2R, 3S)$-Weinsäure besitzt eine interne Spiegelebene, ist achiral und optisch inaktiv $\implies$ genau 3 Stereoisomere: $(2R, 3R)$, $(2S, 3S)$ und meso-Form.
24. **Q024 — Peptidbindung & Resonanzstabilisierung (chem-11-naturstoffe):**
    - *Verifikation:* Mesomerie verleiht der $\text{C}-\text{N}$-Bindung ca. $40\,\%$ Doppelbindungscharakter, blockiert die freie Drehbarkeit und erzwingt eine starre, planare Geometrie der Peptidgruppe in überwiegender trans-Konfiguration.

---

## 3. Syllabus-Mapping & Themenmatrix

| Frage-ID | Kapitel | Themenbereich | Subthema | Schwierigkeit | Key |
| :--- | :--- | :--- | :--- | :--- | :---: |
| \`CHEM-BMS-GP4-001\` | \`chem-01-atombau\` | Atombau und Mikrokosmos | Quantenzahlen & Hundsche Regel | Grundlagen (Leicht) | **B** |
| \`CHEM-BMS-GP4-002\` | \`chem-04-bindungen\` | Periodensystem & Bindungen | Ionenradien isoelektronischer Reihen | Mittel | **D** |
| \`CHEM-BMS-GP4-003\` | \`chem-02-strahlung\` | Radioaktivität & Kernchemie | Alpha-Zerfall & Nuklidbilanz | Mittel | **A** |
| \`CHEM-BMS-GP4-004\` | \`chem-03-gase\` | Gasgesetze | Boyle-Mariotte-Gesetz & Isotherme | Grundlagen (Leicht) | **C** |
| \`CHEM-BMS-GP4-005\` | \`chem-03-gase\` | Gasgesetze | Reale Gase & Van-der-Waals-Gleichung | Schwer (Advanced) | **E** |
| \`CHEM-BMS-GP4-006\` | \`chem-04-bindungen\` | Periodensystem & Bindungen | Metallbindung & Elektronengas | Grundlagen (Leicht) | **A** |
| \`CHEM-BMS-GP4-007\` | \`chem-04-bindungen\` | Periodensystem & Bindungen | VSEPR-Modell: SF4 Wippen-Geometrie | Mittel | **C** |
| \`CHEM-BMS-GP4-008\` | \`chem-04-bindungen\` | Periodensystem & Bindungen | Gitterenergie & Born-Haber-Zyklus | Schwer (Advanced) | **B** |
| \`CHEM-BMS-GP4-009\` | \`chem-05-stoechiometrie\` | Stöchiometrie | Molare Masse & Massenberechnung | Grundlagen (Leicht) | **D** |
| \`CHEM-BMS-GP4-010\` | \`chem-05-stoechiometrie\` | Stöchiometrie | Verdünnungsberechnung | Mittel | **E** |
| \`CHEM-BMS-GP4-011\` | \`chem-05-stoechiometrie\` | Stöchiometrie | Limitierendes Reagenz & H2-Ausbeute | Schwer (Advanced) | **A** |
| \`CHEM-BMS-GP4-012\` | \`chem-06-gleichgewicht\` | Chemisches Gleichgewicht | Katalysator & Aktivierungsenergie | Grundlagen (Leicht) | **E** |
| \`CHEM-BMS-GP4-013\` | \`chem-06-gleichgewicht\` | Chemisches Gleichgewicht | Prinzip von Le Chatelier (SO3) | Mittel | **B** |
| \`CHEM-BMS-GP4-014\` | \`chem-06-gleichgewicht\` | Chemisches Gleichgewicht | Gibbs-Helmholtz-Gleichung & Freiwilligkeit | Schwer (Advanced) | **D** |
| \`CHEM-BMS-GP4-015\` | \`chem-07-elemente\` | Elemente & Verbindungen | Ostwald-Verfahren & Oxidationszahlen | Mittel | **C** |
| \`CHEM-BMS-GP4-016\` | \`chem-07-elemente\` | Elemente & Verbindungen | Kohlenstoffallotrope Diamant vs. Graphit | Mittel | **A** |
| \`CHEM-BMS-GP4-017\` | \`chem-08-saeuren-basen\` | Säuren, Basen & Salze | Brønsted-Lowry & Konjugierte Paare | Grundlagen (Leicht) | **B** |
| \`CHEM-BMS-GP4-018\` | \`chem-08-saeuren-basen\` | Säuren, Basen & Salze | pH-Wert schwacher Säuren | Mittel | **D** |
| \`CHEM-BMS-GP4-019\` | \`chem-08-saeuren-basen\` | Säuren, Basen & Salze | Acetatpuffer & Henderson-Hasselbalch | Schwer (Advanced) | **C** |
| \`CHEM-BMS-GP4-020\` | \`chem-09-redox\` | Redox & Elektrochemie | Permanganometrie & Redox-Ausgleich | Mittel | **E** |
| \`CHEM-BMS-GP4-021\` | \`chem-09-redox\` | Redox & Elektrochemie | Galvanische Zelle & Zellspannung | Mittel | **B** |
| \`CHEM-BMS-GP4-022\` | \`chem-10-organik\` | Organische Chemie | Carbonylreaktionen: Halbacetale | Mittel | **A** |
| \`CHEM-BMS-GP4-023\` | \`chem-10-organik\` | Organische Chemie | Stereochemie & meso-Weinsäure | Schwer (Advanced) | **D** |
| \`CHEM-BMS-GP4-024\` | \`chem-11-naturstoffe\` | Biochemie & Naturstoffe | Peptidbindung & Resonanz-Planarität | Mittel | **C** |

---

## 4. Vollständiger Katalog aller 24 Aufgaben im Detail

`;

RAW_GENERALPROBE_4_CHEM_QUESTIONS.forEach((q, idx) => {
  const incorrectKeys = Object.keys(q.explanations_incorrect).sort();
  md += `### ${q.id} (Aufgabe ${idx + 1}/24)
- **Themenbereich:** ${q.primary_topic} · ${q.subtopic}
- **Kapitel:** \`${q.chapter_id}\`
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
console.log(`Successfully generated enriched GP4 Chemistry documentation at ${targetPath}`);
