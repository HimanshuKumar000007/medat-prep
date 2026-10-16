/**
 * MedAT Mathematik BMS — 12-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #3 (BMS Mathematik-Testteil, exakt 12 Aufgaben).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - BMS gesamt: 94 Aufgaben (Biologie: 40, Chemie: 24, Physik: 18, Mathematik: 12).
 * 
 * Fachlich und terminologisch angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau ohne Taschenrechner).
 * 
 * Lehrplanabdeckung: Exakt 2 Aufgaben je der 6 offiziellen VMC-Mathematikkapitel:
 * - Kapitel 1: Zehnerpotenzen und Zahlenmengen (math-01-zehnerpotenzen)
 * - Kapitel 2: Algebra und Arithmetik (math-02-algebra)
 * - Kapitel 3: Geometrie und Trigonometrie (math-03-geometrie)
 * - Kapitel 4: Einheiten und Dimensionen (math-04-einheiten)
 * - Kapitel 5: Funktionen, Graphen und Analysis (math-05-funktionen)
 * - Kapitel 6: Vektorrechnung (math-06-vektorrechnung)
 * 
 * Schwierigkeitsverteilung (präzise kalibriert):
 * - 3 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 6 Mittel (Intermediate) (50,0 %)
 * - 3 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel (vollständig ausbalanciert & azyklisch, Max-Streak = 1):
 * - A: 2 (Q004, Q008)
 * - B: 3 (Q002, Q006, Q012)
 * - C: 2 (Q005, Q010)
 * - D: 3 (Q001, Q007, Q011)
 * - E: 2 (Q003, Q009)
 * Gesamt: 12 Aufgaben
 * Sequenz: D, B, E, A, C, B, D, A, E, C, D, B
 */

import type { StoredQuestion } from "../questions/types";

export interface QcMathGp3QuestionRaw {
  id: string;
  subject: string;
  section: string;
  primary_topic: string;
  subtopic: string;
  difficulty: "foundational" | "intermediate" | "advanced";
  stem: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correct_answer: "A" | "B" | "C" | "D" | "E";
  explanation_correct: string;
  explanations_incorrect: Record<string, string>;
  metadata: {
    author: string;
    status: string;
    version: string;
  };
}

export const RAW_GENERALPROBE_3_MATH_QUESTIONS: QcMathGp3QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Zehnerpotenzen und Zahlenmengen (math-01-zehnerpotenzen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP3-001",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Wissenschaftliche Notation & Nanopartikel-Berechnung",
    difficulty: "foundational",
    stem: "Ein nanomedizinisches Trägersystem enthält $2{,}4 \\times 10^{11}$ Liposomen pro Milliliter Suspension ($\\text{mL}$). Jedes Liposom transportiert im Mittel genau $1{,}5 \\times 10^4$ Moleküle eines Zytostatikums. Wie viele Moleküle des Zytostatikums befinden sich rechnerisch in einem verabreichten Dosisvolumen von genau $5{,}0\\,\\text{mL}$ dieser Suspension?",
    options: {
      A: "$1{,}8 \\times 10^{15}$",
      B: "$3{,}6 \\times 10^{15}$",
      C: "$7{,}2 \\times 10^{15}$",
      D: "$1{,}8 \\times 10^{16}$",
      E: "$1{,}8 \\times 10^{17}$"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1: Molekülzahl pro Milliliter Suspension berechnen:\n$$N_{\\text{pro mL}} = (2{,}4 \\times 10^{11}\\,\\text{Liposomen/mL}) \\cdot (1{,}5 \\times 10^4\\,\\text{Moleküle/Liposom})$$\n$$N_{\\text{pro mL}} = (2{,}4 \\cdot 1{,}5) \\times 10^{11 + 4} = 3{,}6 \\times 10^{15}\\,\\text{Moleküle/mL}.$$\nSchritt 2: Gesamtmolekülzahl im Dosisvolumen $V = 5{,}0\\,\\text{mL}$ berechnen:\n$$N_{\\text{ges}} = 5{,}0\\,\\text{mL} \\cdot 3{,}6 \\times 10^{15}\\,\\text{Moleküle/mL} = 18{,}0 \\times 10^{15} = 1{,}8 \\times 10^{16}\\,\\text{Moleküle}.$$",
    explanations_incorrect: {
      A: "$1{,}8 \\times 10^{15}$ entsteht, wenn bei der Umwandlung von $18{,}0 \\times 10^{15}$ in die wissenschaftliche Standardnotation die Zehnerpotenz irrtümlich unverändert belassen wird (das Komma wird um eine Stelle nach links verschoben, ohne den Exponenten von $10^{15}$ auf $10^{16}$ zu erhöhen; das Ergebnis ist um den Faktor 10 zu klein).",
      B: "$3{,}6 \\times 10^{15}$ entspricht lediglich der Molekülzahl in $1{,}0\\,\\text{mL}$ ($2{,}4 \\cdot 1{,}5 \\times 10^{15} = 3{,}6 \\times 10^{15}$); die Multiplikation mit dem Dosisvolumen von $5{,}0\\,\\text{mL}$ wurde unterlassen.",
      C: "$7{,}2 \\times 10^{15}$ entsteht, wenn für das verabreichte Volumen irrtümlich $2{,}0\\,\\text{mL}$ anstelle von $5{,}0\\,\\text{mL}$ eingesetzt wird ($3{,}6 \\times 10^{15}\\,\\text{Moleküle/mL} \\cdot 2{,}0\\,\\text{mL} = 7{,}2 \\times 10^{15}\\,\\text{Moleküle}$).",
      E: "$1{,}8 \\times 10^{17}$ ist um den Faktor 10 zu groß; entsteht, wenn bei der Normierung von $18 \\times 10^{15}$ fälschlicherweise der Exponent um zwei statt um eine Zehnerpotenz erhöht wird ($18 \\times 10^{15} \\to 1{,}8 \\times 10^{17}$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP3-002",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Rationale Exponenten, Wurzelregeln & Potenzgesetze",
    difficulty: "intermediate",
    stem: "Welchen exakten numerischen Wert besitzt der vereinfachte Term\n$$\\frac{8^{2/3} \\cdot 16^{3/4} \\cdot \\sqrt{2}}{4^{1/4} \\cdot 2^{-1}} \\quad ?$$",
    options: {
      A: "$16$",
      B: "$64$",
      C: "$32$",
      D: "$8$",
      E: "$128$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Alle Terme systematisch auf die einheitliche Zweierbasis umschreiben:\n• $8^{2/3} = (2^3)^{2/3} = 2^{3 \\cdot (2/3)} = 2^2 = 4$\n• $16^{3/4} = (2^4)^{3/4} = 2^{4 \\cdot (3/4)} = 2^3 = 8$\n• $\\sqrt{2} = 2^{1/2}$\n• $4^{1/4} = (2^2)^{1/4} = 2^{2 \\cdot (1/4)} = 2^{2/4} = 2^{1/2}$\n• $2^{-1} = \\frac{1}{2}$\n\nSchritt 2: Zähler und Nenner zusammenfassen:\n$$\\text{Zähler} = 4 \\cdot 8 \\cdot 2^{1/2} = 32 \\cdot 2^{1/2}$$\n$$\\text{Nenner} = 2^{1/2} \\cdot 2^{-1}$$\n\nSchritt 3: Bruch dividieren (Kürzen von $2^{1/2}$):\n$$\\frac{32 \\cdot 2^{1/2}}{2^{1/2} \\cdot 2^{-1}} = \\frac{32}{2^{-1}} = 32 \\cdot 2^1 = 64.$$",
    explanations_incorrect: {
      A: "$16$ entsteht bei Fehlinterpretation des negativen Exponenten im Nenner: Anstatt durch $2^{-1} = \\frac{1}{2}$ zu dividieren (was einer Multiplikation mit 2 entspricht), wird fälschlich durch $2^1 = 2$ dividiert: $\\frac{32}{2} = 16$.",
      C: "$32$ entsteht, wenn der Nennerfaktor $2^{-1}$ beim Kürzen von $\\sqrt{2}$ mit $4^{1/4}$ schlicht vergessen oder als $1$ gewertet wird (es verbleibt irrtümlich nur der Zählerwert $\\frac{32 \\cdot \\sqrt{2}}{\\sqrt{2}} = 32$, ohne die Division durch $2^{-1} = \\frac{1}{2}$ auszuführen).",
      D: "$8$ entsteht, wenn im Zähler $8^{2/3} = \\sqrt[3]{8} = 2$ (Quadrierung vergessen) und $16^{3/4} = \\sqrt[4]{16} = 2$ (Kubierung vergessen) gerechnet wird, sodass $\\frac{2 \\cdot 2}{1/2} = 8$ resultiert.",
      E: "$128$ entsteht, wenn im Zähler $8^{2/3} = 4$ und $16^{3/4} = 8$ fälschlich zu $64$ multipliziert werden und anschließend mit dem Nennerterm $2$ multipliziert wird, obwohl $4^{1/4}$ noch nicht gekürzt war ($64 \\cdot 2 = 128$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Algebra und Arithmetik (math-02-algebra) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP3-003",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Prozentrechnung vs. Prozentpunkte in der Onkologie",
    difficulty: "foundational",
    stem: "Die 5-Jahres-Überlebensrate bei einer bestimmten Krebserkrankung lag unter der Standardtherapie bei $40\\,\\%$. Durch ein neues adjuvantes Immuntherapie-Protokoll konnte die 5-Jahres-Überlebensrate in einer klinischen Phase-III-Studie auf $50\\,\\%$ gesteigert werden.\\n\\nUm wie viel Prozent hat sich die Überlebensrate relativ zum Ausgangswert gesteigert, und wie groß ist die absolute Zunahme in Prozentpunkten (Pp)?",
    options: {
      A: "Relative Steigerung: $10\\,\\%$; absolute Zunahme: $10\\,\\text{Pp}$",
      B: "Relative Steigerung: $20\\,\\%$; absolute Zunahme: $10\\,\\text{Pp}$",
      C: "Relative Steigerung: $25\\,\\%$; absolute Zunahme: $25\\,\\text{Pp}$",
      D: "Relative Steigerung: $12{,}5\\,\\%$; absolute Zunahme: $5\\,\\text{Pp}$",
      E: "Relative Steigerung: $25\\,\\%$; absolute Zunahme: $10\\,\\text{Pp}$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Absolute Differenz (in Prozentpunkten):\n$$\\Delta p = 50\\,\\% - 40\\,\\% = 10\\,\\text{Prozentpunkte (Pp)}.$$\nSchritt 2: Relative Steigerung bezogen auf die Ausgangsüberlebensrate von $40\\,\\%$:\n$$\\text{relativer Zuwachs} = \\frac{50\\,\\% - 40\\,\\%}{40\\,\\%} = \\frac{10}{40} = \\frac{1}{4} = 0{,}25 = 25\\,\\%.$$\nFolglich stieg die Überlebensrate um relative $25\\,\\%$, was einem absoluten Zuwachs von $10\\,\\text{Prozentpunkten}$ entspricht.",
    explanations_incorrect: {
      A: "Verwechselt den absoluten Zuwachs in Prozentpunkten ($10\\,\\text{Pp}$) fälschlicherweise mit einer relativen Steigerung von $10\\,\\%$.",
      B: "$20\\,\\%$ relative Steigerung entsteht, wenn der Zuwachs fälschlicherweise auf den Endwert bezogen wird ($\\frac{10}{50} = 20\\,\\%$) statt auf die Ausgangsrate.",
      C: "Überträgt den relativen Prozentsatz ($25\\,\\%$) fälschlicherweise auch auf die absolute Differenz in Prozentpunkten ($25\\,\\text{Pp}$).",
      D: "Resultiert aus willkürlichen Rechenfehlern bei der Quotientenbildung."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP3-004",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Mischungskreuz & Lineare Mischungsbilanz",
    difficulty: "intermediate",
    stem: "In einem klinischen Labor soll eine Kochsalzlösung mit einer Zielkonzentration von genau $1{,}8\\,\\%$ (Massenkonzentration $m/V$, d. h. $1{,}8\\,\\text{g}$ NaCl pro $100\\,\\text{mL}$ Lösung) hergestellt werden. Dazu stehen zwei Stammlösungen zur Verfügung: Lösung A mit einer Konzentration von $0{,}9\\,\\%$ und Lösung B mit einer Konzentration von $5{,}4\\,\\%$. Wie viele Milliliter ($\\text{mL}$) der Lösung B müssen zu $300\\,\\text{mL}$ der Lösung A hinzugegeben werden, um genau die gewünschte Zielkonzentration von $1{,}8\\,\\%$ zu erhalten (unter Annahme additiver Volumina und näherungsweise gleicher Dichte)?",
    options: {
      A: "$75\\,\\text{mL}$",
      B: "$50\\,\\text{mL}$",
      C: "$100\\,\\text{mL}$",
      D: "$60\\,\\text{mL}$",
      E: "$150\\,\\text{mL}$"
    },
    correct_answer: "A",
    explanation_correct: "Mischungsbilanz für die gelöste Substanz (Kochsalz):\nGegeben sind:\n• $V_A = 300\\,\\text{mL}$ mit $c_A = 0{,}9\\,\\% = 0{,}009\\,\\text{g/mL}$\n• $V_B$ (gesucht) mit $c_B = 5{,}4\\,\\% = 0{,}054\\,\\text{g/mL}$\n• Zielkonzentration $c_{\\text{Ziel}} = 1{,}8\\,\\% = 0{,}018\\,\\text{g/mL}$\n• Gesamtvolumen $V_{\\text{ges}} = 300 + V_B$\n\nBilanzgleichung:\n$$V_A \\cdot c_A + V_B \\cdot c_B = (V_A + V_B) \\cdot c_{\\text{Ziel}}$$\n$$300 \\cdot 0{,}9 + V_B \\cdot 5{,}4 = (300 + V_B) \\cdot 1{,}8$$\n$$270 + 5{,}4 V_B = 540 + 1{,}8 V_B$$\n$$5{,}4 V_B - 1{,}8 V_B = 540 - 270$$\n$$3{,}6 V_B = 270$$\n$$V_B = \\frac{270}{3{,}6} = \\frac{2700}{36} = \\frac{300}{4} = 75\\,\\text{mL}.$$\n\nAlternativ über das Mischungskreuz:\n• Differenz A zu Ziel: $|0{,}9 - 1{,}8| = 0{,}9$ Anteile von B\n• Differenz B zu Ziel: $|5{,}4 - 1{,}8| = 3{,}6$ Anteile von A\n• Verhältnis: $\\frac{V_B}{V_A} = \\frac{0{,}9}{3{,}6} = \\frac{1}{4} \\implies V_B = \\frac{1}{4} \\cdot 300\\,\\text{mL} = 75\\,\\text{mL}$.",
    explanations_incorrect: {
      B: "$50\\,\\text{mL}$ entsteht, wenn fälschlicherweise das direkte Verhältnis der beiden Stammlösungen $\\frac{0{,}9}{5{,}4} = \\frac{1}{6}$ angesetzt wird ($V_B = \\frac{300}{6} = 50\\,\\text{mL}$), ohne die Zielkonzentration von $1{,}8\\,\\%$ einzubeziehen.",
      C: "$100\\,\\text{mL}$ entsteht bei Annahme eines falschen Verhältnisses von $1:3$ (z. B. durch $\\frac{5{,}4}{1{,}8} = 3$ und anschließende Division $V_B = \\frac{300}{3} = 100\\,\\text{mL}$).",
      D: "$60\\,\\text{mL}$ entsteht, wenn im Nenner fälschlicherweise die Gesamtspanne der beiden Ausgangskonzentrationen ($|5{,}4\\,\\% - 0{,}9\\,\\%| = 4{,}5\\,\\%$) anstelle der Differenz zur Zielkonzentration ($5{,}4\\,\\% - 1{,}8\\,\\% = 3{,}6\\,\\%$) eingesetzt wird: $\\frac{270}{4{,}5} = 60\\,\\text{mL}$.",
      E: "$150\\,\\text{mL}$ entspricht der Annahme einer 1:2-Mischung ($300 / 2 = 150\\,\\text{mL}$), bei der fälschlich angenommen wird, das halbe Volumen von A genüge zur Einstellung des Zielwerts."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Geometrie und Trigonometrie (math-03-geometrie) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP3-005",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Planimetrie: Höhensatz des Euklid & Dreiecksfläche",
    difficulty: "intermediate",
    stem: "In einem rechtwinkligen Dreieck teilt die auf der Hypotenuse $c$ errichtete Höhe $h_c$ die Hypotenuse in die beiden Abschnitte $p = 4\\,\\text{cm}$ und $q = 9\\,\\text{cm}$. Wie lang ist die Höhe $h_c$ und welchen Flächeninhalt $A$ besitzt das gesamte Dreieck?",
    options: {
      A: "$h_c = 6{,}5\\,\\text{cm};\\quad A = 42{,}25\\,\\text{cm}^2$",
      B: "$h_c = 6\\,\\text{cm};\\quad A = 78\\,\\text{cm}^2$",
      C: "$h_c = 6\\,\\text{cm};\\quad A = 39\\,\\text{cm}^2$",
      D: "$h_c = 5\\,\\text{cm};\\quad A = 32{,}5\\,\\text{cm}^2$",
      E: "$h_c = 6\\,\\text{cm};\\quad A = 18\\,\\text{cm}^2$"
    },
    correct_answer: "C",
    explanation_correct: "Schritt 1: Gesamtlänge der Hypotenuse $c$:\n$$c = p + q = 4\\,\\text{cm} + 9\\,\\text{cm} = 13\\,\\text{cm}.$$\nSchritt 2: Höhensatz des Euklid für die Höhe $h_c$:\n$$h_c^2 = p \\cdot q = 4 \\cdot 9 = 36 \\implies h_c = \\sqrt{36} = 6\\,\\text{cm}.$$\nSchritt 3: Flächeninhalt des rechtwinkligen Dreiecks:\n$$A = \\frac{1}{2} \\cdot c \\cdot h_c = \\frac{1}{2} \\cdot 13\\,\\text{cm} \\cdot 6\\,\\text{cm} = 13 \\cdot 3 = 39\\,\\text{cm}^2.$$",
    explanations_incorrect: {
      A: "$h_c = 6{,}5\\,\\text{cm}$ entsteht, wenn fälschlicherweise das arithmetische Mittel $\\frac{p+q}{2} = \\frac{13}{2} = 6{,}5$ anstelle des geometrischen Mittels $\\sqrt{p \\cdot q}$ gebildet wird ($A = \\frac{1}{2} \\cdot 13 \\cdot 6{,}5 = 42{,}25\\,\\text{cm}^2$).",
      B: "$A = 78\\,\\text{cm}^2$ vergisst den Vorfaktor $\\frac{1}{2}$ bei der Flächenformel des Dreiecks ($13 \\cdot 6 = 78$).",
      D: "$h_c = 5\\,\\text{cm}$ resultiert aus einer falschen Differenz- oder Wurzelberechnung ($q - p = 9 - 4 = 5\\,\\text{cm}$, $A = \\frac{1}{2} \\cdot 13 \\cdot 5 = 32{,}5\\,\\text{cm}^2$).",
      E: "$A = 18\\,\\text{cm}^2$ entsteht, wenn der Flächeninhalt irrtümlich als halbes Produkt der Hypotenusenabschnitte berechnet wird ($A = \\frac{1}{2} \\cdot p \\cdot q = \\frac{1}{2} \\cdot 4 \\cdot 9 = 18\\,\\text{cm}^2$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP3-006",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Stereometrie: Zusammengesetzte Körper (Kapselvolumen)",
    difficulty: "advanced",
    stem: "Eine pharmazeutische Depotkapsel ist geometrisch als Zylinder mit zwei an den Enden aufgesetzten Halbkugeln geformt (Gesamtkörper = Zylinder der Länge $h$ plus zwei Halbkugeln mit identischem Radius $r$). Die zylindrische Mittelstrecke hat eine Länge von $h = 12\\,\\text{mm}$ und der Radius beträgt $r = 3\\,\\text{mm}$. Welches exakte Gesamtvolumen $V_{\\text{ges}}$ besitzt diese Kapsel (ausgedrückt als Vielfaches von $\\pi$)?",
    options: {
      A: "$126\\pi\\,\\text{mm}^3$",
      B: "$144\\pi\\,\\text{mm}^3$",
      C: "$162\\pi\\,\\text{mm}^3$",
      D: "$108\\pi\\,\\text{mm}^3$",
      E: "$180\\pi\\,\\text{mm}^3$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Volumen des zylindrischen Mittelteils:\n$$V_{\\text{Zyl}} = \\pi \\cdot r^2 \\cdot h = \\pi \\cdot (3\\,\\text{mm})^2 \\cdot 12\\,\\text{mm} = \\pi \\cdot 9 \\cdot 12 = 108\\pi\\,\\text{mm}^3.$$\nSchritt 2: Volumen der beiden Halbkugeln (entspricht zusammen genau einer Vollkugel vom Radius $r$):\n$$V_{\\text{Kugel}} = \\frac{4}{3} \\pi \\cdot r^3 = \\frac{4}{3} \\pi \\cdot (3\\,\\text{mm})^3 = \\frac{4}{3} \\pi \\cdot 27 = 4 \\cdot 9\\pi = 36\\pi\\,\\text{mm}^3.$$\nSchritt 3: Gesamtvolumen der Kapsel:\n$$V_{\\text{ges}} = V_{\\text{Zyl}} + V_{\\text{Kugel}} = 108\\pi + 36\\pi = 144\\pi\\,\\text{mm}^3.$$",
    explanations_incorrect: {
      A: "$126\\pi\\,\\text{mm}^3$ entsteht, wenn nur eine einzige der beiden Halbkugeln zum Zylindervolumen addiert wird ($108\\pi + 18\\pi = 126\\pi\\,\\text{mm}^3$).",
      C: "$162\\pi\\,\\text{mm}^3$ entsteht, wenn die beiden halbkugelförmigen Endkappen fälschlicherweise als zylindrische Abschnitte mit der Höhe $h = r = 3\\,\\text{mm}$ modelliert werden ($V_{\\text{Kappen}} = 2 \\cdot (\\pi r^2 \\cdot r) = 2 \\cdot 27\\pi = 54\\pi\\,\\text{mm}^3$), sodass $V_{\\text{ges}} = 108\\pi + 54\\pi = 162\\pi\\,\\text{mm}^3$ resultiert.",
      D: "$108\\pi\\,\\text{mm}^3$ berücksichtigt lediglich das Volumen des zylindrischen Mittelteils und vernachlässigt die beiden Halbkugel-Kappen vollständig.",
      E: "$180\\pi\\,\\text{mm}^3$ entsteht, wenn jede der beiden Halbkugeln irrtümlich als vollständige Vollkugel mit $V = \\frac{4}{3}\\pi r^3 = 36\\pi\\,\\text{mm}^3$ gerechnet wird ($108\\pi + 2 \\cdot 36\\pi = 180\\pi\\,\\text{mm}^3$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Einheiten und Dimensionen (math-04-einheiten) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP3-007",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "Dichte, Volumenmaße & Massenumrechnung",
    difficulty: "foundational",
    stem: "Eine Blutplasmaspende hat ein Volumen von genau $V = 450\\,\\text{mL}$ und eine gemessene Dichte von $\\rho = 1{,}025\\,\\text{g/cm}^3$. Welche Masse $m$ besitzt diese Plasmaprobe in Kilogramm ($\\text{kg}$)?",
    options: {
      A: "$4{,}6125\\,\\text{kg}$",
      B: "$0{,}4390\\,\\text{kg}$",
      C: "$0{,}046125\\,\\text{kg}$",
      D: "$0{,}46125\\,\\text{kg}$",
      E: "$0{,}45000\\,\\text{kg}$"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1: Einheiten angleichen ($1\\,\\text{mL} = 1\\,\\text{cm}^3$):\n$$V = 450\\,\\text{mL} = 450\\,\\text{cm}^3.$$\nSchritt 2: Masse in Gramm berechnen:\n$$m = V \\cdot \\rho = 450\\,\\text{cm}^3 \\cdot 1{,}025\\,\\frac{\\text{g}}{\\text{cm}^3} = 450 \\cdot \\left(1 + \\frac{1}{40}\\right) = 450 + 11{,}25 = 461{,}25\\,\\text{g}.$$\nSchritt 3: Umrechnung von Gramm in Kilogramm ($1\\,\\text{kg} = 1000\\,\\text{g}$):\n$$m = \\frac{461{,}25}{1000}\\,\\text{kg} = 0{,}46125\\,\\text{kg}.$$",
    explanations_incorrect: {
      A: "$4{,}6125\\,\\text{kg}$ entsteht durch einen Zehnerpotenzfehler um den Faktor 10 bei der Umrechnung von Gramm in Kilogramm (Division durch 100 statt 1000).",
      B: "$0{,}4390\\,\\text{kg}$ entsteht, wenn das Volumen irrtümlich durch die Dichte dividiert wird ($\\frac{450}{1{,}025} \\approx 439{,}02\\,\\text{g} = 0{,}43902\\,\\text{kg}$).",
      C: "$0{,}046125\\,\\text{kg}$ ist um den Faktor 10 zu klein (Division durch 10\\,000).",
      E: "$0{,}45000\\,\\text{kg}$ vernachlässigt die Dichte und setzt fälschlicherweise die Dichte von reinem Wasser mit exakt $1{,}000\\,\\text{g/cm}^3$ an."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP3-008",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "Klinische Dosierungsraten & Zeiteinheiten",
    difficulty: "intermediate",
    stem: "Ein Intensivpatient mit einer Körpermasse von $m = 70\\,\\text{kg}$ erhält kontinuierlich Noradrenalin mit einer Dosierungsrate von $0{,}15\\,\\mu\\text{g}$ pro Kilogramm Körpergewicht pro Minute ($\\mu\\text{g}\\cdot\\text{kg}^{-1}\\cdot\\text{min}^{-1}$). Welche Gesamtmasse des Wirkstoffs in Milligramm ($\\text{mg}$) wird dem Patienten über einen Zeitraum von genau $4\\,\\text{Stunden}$ kontinuierlich verabreicht?",
    options: {
      A: "$2{,}52\\,\\text{mg}$",
      B: "$0{,}63\\,\\text{mg}$",
      C: "$25{,}2\\,\\text{mg}$",
      D: "$1{,}26\\,\\text{mg}$",
      E: "$5{,}04\\,\\text{mg}$"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Infusionsrate pro Minute für den gesamten Patienten ($70\\,\\text{kg}$):\n$$\\text{Rate} = 70\\,\\text{kg} \\cdot 0{,}15\\,\\frac{\\mu\\text{g}}{\\text{kg}\\cdot\\text{min}} = 10{,}5\\,\\mu\\text{g/min}.$$\nSchritt 2: Infusionsdauer in Minuten umrechnen:\n$$t = 4\\,\\text{h} = 4 \\cdot 60\\,\\text{min} = 240\\,\\text{min}.$$\nSchritt 3: Gesamtstoffmasse in Mikrogramm ($\\mu\\text{g}$):\n$$m_{\\text{ges}} = 10{,}5\\,\\frac{\\mu\\text{g}}{\\text{min}} \\cdot 240\\,\\text{min} = 10{,}5 \\cdot 240 = 21 \\cdot 120 = 2520\\,\\mu\\text{g}.$$\nSchritt 4: Umrechnung von Mikrogramm in Milligramm ($1\\,\\text{mg} = 1000\\,\\mu\\text{g}$):\n$$m_{\\text{ges}} = \\frac{2520}{1000}\\,\\text{mg} = 2{,}52\\,\\text{mg}.$$",
    explanations_incorrect: {
      B: "$0{,}63\\,\\text{mg}$ entspricht lediglich der verabreichten Wirkstoffmenge für eine einzige Stunde ($10{,}5\\,\\mu\\text{g/min} \\cdot 60\\,\\text{min} = 630\\,\\mu\\text{g} = 0{,}63\\,\\text{mg}$); die Multiplikation mit den 4 Stunden wurde vergessen.",
      C: "$25{,}2\\,\\text{mg}$ entsteht durch einen Zehnerpotenzfehler um den Faktor 10 bei der Umrechnung von $\\mu\\text{g}$ in $\\text{mg}$ (Division durch 100 statt 1000).",
      D: "$1{,}26\\,\\text{mg}$ entsteht, wenn für die Infusionsdauer irrtümlich nur 2 Stunden anstelle von 4 Stunden angesetzt werden ($10{,}5\\,\\mu\\text{g/min} \\cdot 120\\,\\text{min} = 1260\\,\\mu\\text{g} = 1{,}26\\,\\text{mg}$ bzw. die Hälfte der Gesamtdosis).",
      E: "$5{,}04\\,\\text{mg}$ entsteht durch Verdopplung der Dosis bzw. Ansatz von 8 Stunden Infusionsdauer ($10{,}5\\,\\mu\\text{g/min} \\cdot 480\\,\\text{min} = 5040\\,\\mu\\text{g} = 5{,}04\\,\\text{mg}$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Funktionen, Graphen und Analysis (math-05-funktionen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP3-009",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Lineare Funktionen & Schnittpunkt zweier Geraden",
    difficulty: "intermediate",
    stem: "Bei einem immunologischen Assay werden zwei Kalibriergeraden $g_1$ und $g_2$ für unterschiedliche Antikörperchargen analysiert:\n$$g_1(x) = \\frac{3}{2}x - 4$$\n$$g_2(x) = -\\frac{1}{2}x + 8$$\nwobei $x$ die Antigenkonzentration (in $\\mu\\text{g/mL}$) und $y = g(x)$ die gemessene optische Absorption darstellt. An welchem Schnittpunkt $S(x_S \\mid y_S)$ schneiden sich die beiden Funktionsgraphen?",
    options: {
      A: "$S(4 \\mid 2)$",
      B: "$S(6 \\mid 7)$",
      C: "$S(8 \\mid 8)$",
      D: "$S(5 \\mid 3{,}5)$",
      E: "$S(6 \\mid 5)$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Funktionsgleichungen zur Schnittpunktbestimmung gleichsetzen:\n$$g_1(x) = g_2(x)$$\n$$\\frac{3}{2}x - 4 = -\\frac{1}{2}x + 8$$\n$$\\frac{3}{2}x + \\frac{1}{2}x = 8 + 4$$\n$$\\frac{4}{2}x = 12 \\implies 2x = 12 \\implies x_S = 6.$$\nSchritt 2: $y$-Koordinate durch Einsetzen von $x_S = 6$ berechnen:\n$$y_S = g_1(6) = \\frac{3}{2} \\cdot 6 - 4 = 9 - 4 = 5.$$\nProbe mit $g_2(6)$:\n$$y_S = -\\frac{1}{2} \\cdot 6 + 8 = -3 + 8 = 5.$$\nDer Schnittpunkt liegt somit exakt bei $S(6 \\mid 5)$.",
    explanations_incorrect: {
      A: "$S(4 \\mid 2)$ entsteht durch Rechenfehler beim Zusammenfassen der x-Terme ($3/2 - 1/2 = 1$).",
      B: "$S(6 \\mid 7)$ hat zwar die richtige x-Koordinate, berechnet aber den y-Wert fehlerhaft als $9 - 2 = 7$.",
      C: "$S(8 \\mid 8)$ resultiert aus fehlerhafter Subtraktion bei der Äquivalenzumformung ($2x = 16$).",
      D: "$S(5 \\mid 3{,}5)$ ist eine ungenaue Näherung ohne algebraische Gleichungsauswertung."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP3-010",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Differentialrechnung & Extremwert einer Plasmakurve",
    difficulty: "advanced",
    stem: "Der zeitliche Verlauf der Plasmakonzentration $c(t)$ (in $\\mu\\text{g/mL}$) eines oral verabreichten Arzneistoffs lässt sich im begrenzten Beobachtungsintervall $t \\in [0; 6]$ (in Stunden nach Einnahme, Anflutungs- und Resorptionsphase als mathematisches Modell) durch die kubische Modellfunktion\n$$c(t) = -t^3 + 6t^2 + 15t$$\nbeschreiben. Zu welchem Zeitpunkt $t_{\\text{max}} \\in [0; 6]$ erreicht die Plasmakonzentration ihr lokales Maximum und welchen Spitzenwert $c(t_{\\text{max}})$ erreicht die Konzentration?",
    options: {
      A: "$t_{\\text{max}} = 2\\,\\text{h};\\quad c(2) = 46\\,\\mu\\text{g/mL}$",
      B: "$t_{\\text{max}} = 4\\,\\text{h};\\quad c(4) = 92\\,\\mu\\text{g/mL}$",
      C: "$t_{\\text{max}} = 5\\,\\text{h};\\quad c(5) = 100\\,\\mu\\text{g/mL}$",
      D: "$t_{\\text{max}} = 3\\,\\text{h};\\quad c(3) = 72\\,\\mu\\text{g/mL}$",
      E: "$t_{\\text{max}} = 1\\,\\text{h};\\quad c(1) = 20\\,\\mu\\text{g/mL}$"
    },
    correct_answer: "C",
    explanation_correct: "Schritt 1: Erste Ableitung der Konzentrationsfunktion bilden:\n$$c'(t) = -3t^2 + 12t + 15.$$\nSchritt 2: Notwendige Bedingung für ein relatives Extremum ($c'(t) = 0$):\n$$-3t^2 + 12t + 15 = 0 \\iff t^2 - 4t - 5 = 0.$$\nFaktorisierung (Satz von Vieta):\n$$(t - 5)(t + 1) = 0 \\implies t_1 = 5,\\quad t_2 = -1.$$\nDa der zulässige Definitionsbereich $t \\in [0; 6]$ ist, scheidet $t_2 = -1$ aus und $t_{\\text{max}} = 5\\,\\text{h}$ ist der einzige innere kritische Punkt.\n\nSchritt 3: Überprüfung mit der zweiten Ableitung:\n$$c''(t) = -6t + 12 \\implies c''(5) = -6 \\cdot 5 + 12 = -30 + 12 = -18 < 0 \\quad (\\text{echtes lokales Maximum}).$$\n\nSchritt 4: Maximalen Konzentrationswert berechnen:\n$$c(5) = -(5)^3 + 6 \\cdot (5)^2 + 15 \\cdot 5 = -125 + 6 \\cdot 25 + 75 = -125 + 150 + 75 = 100\\,\\mu\\text{g/mL}.$$",
    explanations_incorrect: {
      A: "$t_{\\text{max}} = 2\\,\\text{h};\\quad c(2) = 46\\,\\mu\\text{g/mL}$ ist die Nullstelle der zweiten Ableitung ($c''(t) = -6t + 12 = 0 \\implies t = 2\\,\\text{h}$), beschreibt also den Wendepunkt der Konzentrationskurve mit der stärksten Krümmungsänderung, nicht das Konzentrationsmaximum.",
      B: "$t_{\\text{max}} = 4\\,\\text{h};\\quad c(4) = 92\\,\\mu\\text{g/mL}$ entsteht, wenn der konstante Term $+15$ in der Ableitung $c'(t) = -3t^2 + 12t + 15$ vernachlässigt wird ($-3t^2 + 12t = 0 \\implies t = 4\\,\\text{h}$).",
      D: "$t_{\\text{max}} = 3\\,\\text{h};\\quad c(3) = 72\\,\\mu\\text{g/mL}$ entspricht der einfachen Intervallmitte von $[0; 6]$ ohne Bestimmung der Nullstelle der Ableitung.",
      E: "$t_{\\text{max}} = 1\\,\\text{h};\\quad c(1) = 20\\,\\mu\\text{g/mL}$ entsteht, wenn bei der Nullstellenbestimmung von $c'(t) = -3(t^2 - 4t - 5) = 0$ die quadratische Gleichung irrtümlich mit vertauschten Vorzeichen als $(t - 1)(t - 5) = 0$ faktorisiert wird und $t = 1\\,\\text{h}$ fälschlicherweise als Extremstelle im Intervall gewählt wird ($c(1) = -1 + 6 + 15 = 20\\,\\mu\\text{g/mL}$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Vektorrechnung (math-06-vektorrechnung) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP3-011",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "Biomechanik: 2D-Vektoraddition & Resultierender Betrag",
    difficulty: "intermediate",
    stem: "An einem Sehnenansatzpunkt im Schultergelenk greifen in einer zweidimensionalen Projektionsebene zwei Muskelzugkräfte an:\n$$\\vec{F}_1 = \\begin{pmatrix} 60 \\\\ 20 \\end{pmatrix}\\,\\text{N} \\quad \\text{und} \\quad \\vec{F}_2 = \\begin{pmatrix} -20 \\\\ 10 \\end{pmatrix}\\,\\text{N}.$$\nWelchen Betrag besitzt die resultierende Gesamtkraft $\\vec{F}_{\\text{res}} = \\vec{F}_1 + \\vec{F}_2$?",
    options: {
      A: "$70\\,\\text{N}$",
      B: "$35\\,\\text{N}$",
      C: "$\\sqrt{250}\\,\\text{N} \\approx 15{,}8\\,\\text{N}$",
      D: "$50\\,\\text{N}$",
      E: "$10\\,\\text{N}$"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1: Komponentenweise Vektoraddition der beiden Kräfte:\n$$\\vec{F}_{\\text{res}} = \\vec{F}_1 + \\vec{F}_2 = \\begin{pmatrix} 60 + (-20) \\\\ 20 + 10 \\end{pmatrix} = \\begin{pmatrix} 40 \\\\ 30 \\end{pmatrix}\\,\\text{N}.$$\nSchritt 2: Betrag des resultierenden Vektors berechnen (Pythagoras bzw. pythagoreisches Tripel $3-4-5$):\n$$|\\vec{F}_{\\text{res}}| = \\sqrt{F_x^2 + F_y^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\,\\text{N}.$$",
    explanations_incorrect: {
      A: "$70\\,\\text{N}$ entsteht durch unzulässige skalare Addition der Komponenten ($40 + 30 = 70$) unter Vernachlässigung des Satzes des Pythagoras.",
      B: "$35\\,\\text{N}$ resultiert aus einer fehlerhaften Mittelwertbildung ($(40 + 30)/2 = 35$).",
      C: "$\\sqrt{250}\\,\\text{N}$ entsteht durch einen Zehnerpotenzfehler unter der Wurzel ($160 + 90 = 250$).",
      E: "$10\\,\\text{N}$ entsteht durch Subtraktion der Komponenten ($40 - 30 = 10$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP3-012",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "Räumliches Skalarprodukt & Kosinus des Zwischenwinkels",
    difficulty: "advanced",
    stem: "In der dreidimensionalen Vektorkardiographie werden zwei Momentanvektoren des kardialen Dipols gemessen:\n$$\\vec{v}_1 = \\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix} \\quad \\text{und} \\quad \\vec{v}_2 = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}.$$\nWelchen exakten rationalen Wert besitzt der Kosinus des von den beiden Vektoren eingeschlossenen Winkels $\\cos\\varphi$?",
    options: {
      A: "$\\frac{4}{5}$",
      B: "$\\frac{14}{15}$",
      C: "$\\frac{8}{15}$",
      D: "$\\frac{14}{25}$",
      E: "$\\frac{11}{15}$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Skalarprodukt $\\vec{v}_1 \\cdot \\vec{v}_2$ berechnen:\n$$\\vec{v}_1 \\cdot \\vec{v}_2 = 2 \\cdot 3 + 1 \\cdot 0 + 2 \\cdot 4 = 6 + 0 + 8 = 14.$$\nSchritt 2: Betrag des Vektors $\\vec{v}_1$ berechnen:\n$$|\\vec{v}_1| = \\sqrt{2^2 + 1^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3.$$\nSchritt 3: Betrag des Vektors $\\vec{v}_2$ berechnen:\n$$|\\vec{v}_2| = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{9 + 0 + 16} = \\sqrt{25} = 5.$$\nSchritt 4: Kosinus des Zwischenwinkels über die Skalarproduktformel ermitteln:\n$$\\cos\\varphi = \\frac{\\vec{v}_1 \\cdot \\vec{v}_2}{|\\vec{v}_1| \\cdot |\\vec{v}_2|} = \\frac{14}{3 \\cdot 5} = \\frac{14}{15}.$$",
    explanations_incorrect: {
      A: "$\\frac{4}{5} = \\frac{12}{15}$ entsteht bei einem Rechenfehler im Zähler ($6 + 0 + 6 = 12$).",
      C: "$\\frac{8}{15}$ entsteht, wenn nur das Produkt der z-Komponenten ($2 \\cdot 4 = 8$) berücksichtigt wird.",
      D: "$\\frac{14}{25}$ entsteht, wenn der Nenner fälschlicherweise als $|\\vec{v}_2|^2 = 25$ angesetzt wird.",
      E: "$\\frac{11}{15}$ resultiert aus einer falschen Addition der Zählerterme ($6 + 1 + 4 = 11$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_12_items_medat_spec"
    }
  }
];

function mapChapterId(primaryTopic: string): string {
  switch (primaryTopic) {
    case "Zehnerpotenzen und Zahlenmengen":
      return "math-01-zehnerpotenzen";
    case "Algebra und Arithmetik":
      return "math-02-algebra";
    case "Geometrie und Trigonometrie":
      return "math-03-geometrie";
    case "Einheiten und Dimensionen":
      return "math-04-einheiten";
    case "Funktionen, Graphen und Analysis":
      return "math-05-funktionen";
    case "Vektorrechnung":
      return "math-06-vektorrechnung";
    default:
      return "math-01-zehnerpotenzen";
  }
}

function mapDifficulty(d: "foundational" | "intermediate" | "advanced"): "Leicht" | "Mittel" | "Schwer" {
  if (d === "foundational") return "Leicht";
  if (d === "advanced") return "Schwer";
  return "Mittel";
}

function optionKeyToIndex(k: "A" | "B" | "C" | "D" | "E"): number {
  switch (k) {
    case "A": return 0;
    case "B": return 1;
    case "C": return 2;
    case "D": return 3;
    case "E": return 4;
  }
}

function buildComprehensiveExplanation(correct: string, incorrect: Record<string, string>): string {
  const distractorKeys = Object.keys(incorrect).sort();
  if (distractorKeys.length === 0) return correct;

  const distractorRows = distractorKeys.map((k) => `• **Option ${k}:** ${incorrect[k]}`).join("\n\n");
  return `${correct}\n\n**Distraktor-Analyse & Begründung der Falschantworten:**\n\n${distractorRows}`;
}

/**
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #3 Runtime-Engine
 */
export const GENERALPROBE_3_MATH_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_MATH_QUESTIONS.map(
  (q, idx) => {
    const optionsArray: [string, string, string, string, string] = [
      q.options.A,
      q.options.B,
      q.options.C,
      q.options.D,
      q.options.E,
    ];

    return {
      id: q.id,
      exam: "MEDAT-H",
      section: "BMS",
      subjectId: "math",
      chapterId: mapChapterId(q.primary_topic),
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Mathematik", "Generalprobe #3", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "3.0_12_items_medat_spec",
      setOrder: idx + 1,
    };
  }
);
