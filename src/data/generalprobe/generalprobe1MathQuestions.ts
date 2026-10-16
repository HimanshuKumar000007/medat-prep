/**
 * MedAT Mathematik BMS — 12-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #1 (BMS Mathematik-Testteil, exakt 12 Aufgaben).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - BMS gesamt: 94 Aufgaben (Biologie: 40, Chemie: 24, Physik: 18, Mathematik: 12).
 * 
 * Fachlich und terminologisch angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau ohne Taschenrechner).
 * 
 * Lehrplanabdeckung: Exakt 2 Aufgaben je der 6 offiziellen VMC-Mathematikkapitel.
 * 
 * Schwierigkeitsverteilung (präzise kalibriert):
 * - 3 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 6 Mittel (Intermediate) (50,0 %)
 * - 3 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel (natürlich randomisiert & unvorhersehbar ausbalanciert):
 * - A: 2 (Q003, Q008)
 * - B: 3 (Q001, Q006, Q010)
 * - C: 3 (Q004, Q007, Q012)
 * - D: 2 (Q002, Q009)
 * - E: 2 (Q005, Q011)
 * Gesamt: 12 Aufgaben
 */

import type { StoredQuestion } from "../questions/types";

export interface QcMathQuestionRaw {
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

export const RAW_GENERALPROBE_1_MATH_QUESTIONS: QcMathQuestionRaw[] = [
  {
    id: "MATH-BMS-001",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Wissenschaftliche Notation & Verdünnungsrechnung",
    difficulty: "foundational",
    stem: "Ein Labor mikroskopiert eine Zellsuspension mit einer Konzentration von $3{,}2 \\times 10^6$ Erythrozyten pro Milliliter ($\\text{mL}$). Zur Bestimmung wird die Probe um den Faktor $800$ verdünnt (das Endvolumen der verdünnten Lösung entspricht genau dem 800-Fachen des eingesetzten Probenvolumens). Anschließend werden genau $0{,}25\\,\\text{mL}$ dieser verdünnten Suspension in eine Zählkammer pipettiert. Wie viele Erythrozyten befinden sich rechnerisch in der Zählkammer?",
    options: {
      A: "$1{,}0 \\times 10^4$",
      B: "$1{,}0 \\times 10^3$",
      C: "$4{,}0 \\times 10^3$",
      D: "$2{,}5 \\times 10^2$",
      E: "$8{,}0 \\times 10^2$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Konzentration nach der Verdünnung um den Faktor $800$ ($V_{\\text{End}} = 800 \\cdot V_{\\text{Probe}}$):  \n$c = \\frac{3{,}2 \\times 10^6\\,\\text{Zellen/mL}}{800} = \\frac{32 \\times 10^5}{8 \\times 10^2} = 4 \\times 10^3 = 4000\\,\\text{Zellen/mL}$.  \nSchritt 2: Zellzahl im pipettierten Volumen ($V = 0{,}25\\,\\text{mL} = \\frac{1}{4}\\,\\text{mL}$):  \n$N = c \\cdot V = 4000\\,\\text{Zellen/mL} \\cdot 0{,}25\\,\\text{mL} = 1000 = 1{,}0 \\times 10^3\\,\\text{Zellen}$.",
    explanations_incorrect: {
      A: "$1{,}0 \\times 10^4$ entsteht, wenn bei der Division durch $800$ fälschlicherweise $4 \\times 10^4$ statt $4 \\times 10^3$ angesetzt wird (Zehnerpotenzfehler um Faktor 10 zu groß).",
      C: "$4{,}0 \\times 10^3$ entspricht der Konzentration pro Milliliter nach der Verdünnung ($4000\\,\\text{Zellen/mL}$); die Multiplikation mit dem pipettierten Teilvolumen von $0{,}25\\,\\text{mL}$ wurde unterlassen.",
      D: "$2{,}5 \\times 10^2$ resultiert aus einer fehlerhaften Verrechnung des Volumens $0{,}25$ mit unpassenden Zehnerpotenzen.",
      E: "$8{,}0 \\times 10^2$ entsteht durch fehlerhaftes Verrechnen von $3{,}2 / (800 \\cdot 0{,}25)$ ohne korrekte Einheitenkonsistenz."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-002",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Potenzgesetze & Bruchexponenten",
    difficulty: "intermediate",
    stem: "Welchen exakten numerischen Wert besitzt der vereinfachte Term\n$$\\frac{(3^2)^3 \\cdot 9^{-1} \\cdot 27^{1/3}}{81^{1/2}} \\quad ?$$",
    options: {
      A: "$3$",
      B: "$9$",
      C: "$18$",
      D: "$27$",
      E: "$81$"
    },
    correct_answer: "D",
    explanation_correct: "Alle Faktoren werden systematisch auf die gemeinsame Basis 3 umgeschrieben:  \n• $(3^2)^3 = 3^{2 \\cdot 3} = 3^6 = 729$  \n• $9^{-1} = (3^2)^{-1} = 3^{-2}$  \n• $27^{1/3} = (3^3)^{1/3} = 3^{3 \\cdot (1/3)} = 3^1 = 3$  \nZähler: $3^6 \\cdot 3^{-2} \\cdot 3^1 = 3^{6 - 2 + 1} = 3^5 = 243$.  \nNenner: $81^{1/2} = \\sqrt{81} = 9 = 3^2$.  \nGesamtbruch: $\\frac{3^5}{3^2} = 3^{5 - 2} = 3^3 = 27$.",
    explanations_incorrect: {
      A: "$3$ entsteht, wenn im Zähler $3^6 \\cdot 3^{-2}$ als $3^2$ fehlinterpretiert wird ($3^2 \\cdot 3 / 9 = 3$).",
      B: "$9$ resultiert, wenn der Exponent von $27^{1/3}$ im Zähler ignoriert wird ($3^4 / 3^2 = 3^2 = 9$).",
      C: "$18$ entsteht durch unzulässiges Multiplizieren von Basen und Exponenten ($2 \\cdot 9 = 18$) anstelle der Anwendung der Potenzgesetze.",
      E: "$81$ ($3^4$) entsteht, wenn der Nenner fälschlich als $3^1$ statt $3^2 = 9$ angesetzt wird ($3^5 / 3^1 = 3^4 = 81$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-003",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Bruchrechnung & Doppelbrüche",
    difficulty: "foundational",
    stem: "Welcher Bruch stellt den gekürzten Wert des Doppelbruchs\n$$\\frac{\\frac{2}{3} - \\frac{1}{4}}{\\frac{5}{6} + \\frac{1}{2}}$$\ndar?",
    options: {
      A: "$\\frac{5}{16}$",
      B: "$\\frac{5}{12}$",
      C: "$\\frac{15}{32}$",
      D: "$\\frac{1}{2}$",
      E: "$\\frac{3}{8}$"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Zähler auf den Hauptnenner 12 bringen:  \n$\\frac{2}{3} - \\frac{1}{4} = \\frac{8}{12} - \\frac{3}{12} = \\frac{5}{12}$.  \nSchritt 2: Nenner auf den Hauptnenner 6 bringen:  \n$\\frac{5}{6} + \\frac{1}{2} = \\frac{5}{6} + \\frac{3}{6} = \\frac{8}{6} = \\frac{4}{3}$.  \nSchritt 3: Doppelbruch durch Multiplikation mit dem Kehrwert des Nenners dividieren:  \n$\\frac{\\frac{5}{12}}{\\frac{4}{3}} = \\frac{5}{12} \\cdot \\frac{3}{4} = \\frac{5 \\cdot 1}{4 \\cdot 4} = \\frac{5}{16}$.",
    explanations_incorrect: {
      B: "$\\frac{5}{12}$ entspricht lediglich dem isolierten Wert des Zählers ohne Berücksichtigung des Nenners $\\frac{4}{3}$.",
      C: "$\\frac{15}{32}$ entsteht durch Rechenfehler beim Erweitern und Dividieren (z. B. falsches Kürzen von $\\frac{5}{12} \\cdot \\frac{9}{8}$).",
      D: "$\\frac{1}{2} = \\frac{8}{16}$ resultiert aus Rechenfehlern bei der Bestimmung der Hauptnenner im Zähler.",
      E: "$\\frac{3}{8}$ entsteht durch eine fehlerhafte Addition der Zähler und Nenner über Kreuz."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-004",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Prozentrechnung & Mischungsbilanz",
    difficulty: "intermediate",
    stem: "In einer Apotheke sollen $500\\,\\text{g}$ einer $12\\,\\%$-igen Kochsalzlösung (Massenanteil NaCl) hergestellt werden. Zur Verfügung stehen eine $20\\,\\%$-ige NaCl-Lösung und reines Wasser ($0\\,\\%$ NaCl). Welche Masse an $20\\,\\%$-iger NaCl-Lösung muss eingewogen werden?",
    options: {
      A: "$200\\,\\text{g}$",
      B: "$240\\,\\text{g}$",
      C: "$300\\,\\text{g}$",
      D: "$350\\,\\text{g}$",
      E: "$120\\,\\text{g}$"
    },
    correct_answer: "C",
    explanation_correct: "Massenbilanz für den Reinstoff Natriumchlorid:  \nDie Ziel-Lösung enthält $500\\,\\text{g} \\cdot 0{,}12 = 60\\,\\text{g}$ NaCl.  \nDa das zugesetzte Wasser salzfrei ist, muss das gesamte Salz aus der $20\\,\\%$-igen Stammlösung stammen:  \n$m_1 \\cdot 0{,}20 = 60\\,\\text{g} \\implies m_1 = \\frac{60\\,\\text{g}}{0{,}20} = \\frac{600}{2}\\,\\text{g} = 300\\,\\text{g}$.  \n(Die restliche Masse von $500\\,\\text{g} - 300\\,\\text{g} = 200\\,\\text{g}$ besteht aus reinem Wasser).",
    explanations_incorrect: {
      A: "$200\\,\\text{g}$ ist die Masse des benötigten reinen Wassers ($500\\,\\text{g} - 300\\,\\text{g}$), nicht die Masse der $20\\,\\%$-igen Stammlösung.",
      B: "$240\\,\\text{g}$ berechnet irrtümlich $500 \\cdot (1 - 0{,}12 \\cdot 4)$ oder geht von einem fehlerhaften Verhältnis $12 / 25$ aus.",
      D: "$350\\,\\text{g}$ resultiert aus einem Rechenfehler beim Auflösen der linearen Gleichung.",
      E: "$120\\,\\text{g}$ verwechselt den Massenanteil mit einer Verdopplung der Reinsalzmasse ($2 \\cdot 60\\,\\text{g}$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-005",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Stereometrie: Zylinder & Proportionale Skalierung",
    difficulty: "advanced",
    stem: "Ein zylindrischer Infusionsbehälter $Z_1$ hat den Grundflächenradius $r_1$ und die Höhe $h_1$. Ein neu konstruierter zylindrischer Behälter $Z_2$ besitzt den halben Radius ($r_2 = \\frac{1}{2} r_1$), soll jedoch genau das dreifache Füllvolumen wie Behälter $Z_1$ aufnehmen ($V_2 = 3 \\cdot V_1$). Welches Verhältnis $\\frac{h_2}{h_1}$ müssen die Höhen der beiden Zylinder aufweisen?",
    options: {
      A: "$6$",
      B: "$1{,}5$",
      C: "$9$",
      D: "$4$",
      E: "$12$"
    },
    correct_answer: "E",
    explanation_correct: "Die Formel für das Zylindervolumen lautet $V = \\pi \\cdot r^2 \\cdot h$.  \nFür Behälter 1: $V_1 = \\pi \\cdot r_1^2 \\cdot h_1$.  \nFür Behälter 2 mit halbiertem Radius:  \n$V_2 = \\pi \\cdot \\left(\\frac{r_1}{2}\\right)^2 \\cdot h_2 = \\pi \\cdot \\frac{r_1^2}{4} \\cdot h_2$.  \nDa $V_2 = 3 \\cdot V_1$ sein soll, gilt:  \n$\\frac{\\pi \\cdot r_1^2 \\cdot h_2}{4} = 3 \\cdot (\\pi \\cdot r_1^2 \\cdot h_1)$.  \nDurch Kürzen von $\\pi \\cdot r_1^2$ auf beiden Seiten folgt:  \n$\\frac{h_2}{4} = 3 \\cdot h_1 \\implies h_2 = 12 \\cdot h_1 \\implies \\frac{h_2}{h_1} = 12$.",
    explanations_incorrect: {
      A: "$6$ ignoriert das Quadrieren des Radius und rechnet fälschlicherweise linear mit $\\frac{1}{2}$ ($3 / 0{,}5 = 6$).",
      B: "$1{,}5$ dividiert die geforderte Verdreifachung unzulässig durch 2 ($3 / 2 = 1{,}5$).",
      C: "$9$ quadriert den Faktor 3 statt der Radiusänderung ($3^2 = 9$).",
      D: "$4$ wäre das Höhenverhältnis bei identischem Volumen ($V_2 = V_1$), versäumt jedoch die Verdreifachung des Volumens ($4 \\cdot 3 = 12$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-006",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Planimetrie: Kreisfläche & Satz des Thales",
    difficulty: "intermediate",
    stem: "Einem rechtwinkligen Dreieck mit den Kathetenlängen $a = 6\\,\\text{cm}$ und $b = 8\\,\\text{cm}$ wird der Thales-Umkreis umbeschrieben (der Mittelpunkt des Umkreises liegt exakt auf der Hypotenuse $c$). Wie groß ist der Flächeninhalt $A_{\\text{Kreis}}$ dieses Umkreises?",
    options: {
      A: "$10\\pi\\,\\text{cm}^2$",
      B: "$25\\pi\\,\\text{cm}^2$",
      C: "$50\\pi\\,\\text{cm}^2$",
      D: "$100\\pi\\,\\text{cm}^2$",
      E: "$24\\pi\\,\\text{cm}^2$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Satz des Pythagoras zur Bestimmung der Hypotenuse $c$:  \n$c = \\sqrt{a^2 + b^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\,\\text{cm}$.  \nSchritt 2: Nach dem Satz des Thales ist die Hypotenuse $c$ eines rechtwinkligen Dreiecks genau der Durchmesser $d$ seines Umkreises:  \n$d = c = 10\\,\\text{cm} \\implies r = \\frac{d}{2} = 5\\,\\text{cm}$.  \nSchritt 3: Kreisfläche berechnen:  \n$A_{\\text{Kreis}} = \\pi \\cdot r^2 = \\pi \\cdot 5^2 = 25\\pi\\,\\text{cm}^2$.",
    explanations_incorrect: {
      A: "$10\\pi\\,\\text{cm}^2$ entspricht dem Kreisumfang $U = 2\\pi r = 10\\pi\\,\\text{cm}$, nicht der Kreisfläche.",
      C: "$50\\pi\\,\\text{cm}^2$ entsteht durch fehlerhaftes Einsetzen von $2 \\cdot r^2$ oder $\\frac{1}{2}\\pi d^2$.",
      D: "$100\\pi\\,\\text{cm}^2$ setzt fälschlicherweise den Durchmesser $d = 10\\,\\text{cm}$ als Radius in die Flächenformel ein ($\\pi \\cdot 10^2$).",
      E: "$24\\pi\\,\\text{cm}^2$ verwechselt die Dreiecksfläche ($A_{\\Delta} = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24\\,\\text{cm}^2$) mit der Kreisformel."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-007",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "Raum- und Hohlmaße (Kubikmeter in Milliliter)",
    difficulty: "foundational",
    stem: "Wie viele Milliliter ($\\text{mL}$) entsprechen einem Volumen von genau $0{,}035\\,\\text{m}^3$?",
    options: {
      A: "$35\\,\\text{mL}$",
      B: "$350\\,\\text{mL}$",
      C: "$35\\,000\\,\\text{mL}$",
      D: "$350\\,000\\,\\text{mL}$",
      E: "$3{,}5\\,\\text{mL}$"
    },
    correct_answer: "C",
    explanation_correct: "Stufenweise Umrechnung der Raummaße:  \n$1\\,\\text{m}^3 = 1000\\,\\text{dm}^3 = 1000\\,\\text{Liter} = 10^3\\,\\text{L}$.  \n$1\\,\\text{Liter} = 1000\\,\\text{mL} = 10^3\\,\\text{mL}$.  \nDaraus folgt der Gesamtfaktor: $1\\,\\text{m}^3 = 10^6\\,\\text{mL} = 1\\,000\\,000\\,\\text{mL}$.  \nFür $0{,}035\\,\\text{m}^3$ ergibt sich:  \n$0{,}035 \\times 1\\,000\\,000\\,\\text{mL} = 35\\,000\\,\\text{mL} = 3{,}5 \\times 10^4\\,\\text{mL}$.",
    explanations_incorrect: {
      A: "$35\\,\\text{mL}$ entspricht $0{,}035\\,\\text{L}$ (Umrechnung in Liter statt in Milliliter).",
      B: "$350\\,\\text{mL}$ entsteht durch einen Zehnerpotenzfehler um den Faktor 100.",
      D: "$350\\,000\\,\\text{mL}$ ist um den Faktor 10 zu groß ($0{,}35\\,\\text{m}^3$).",
      E: "$3{,}5\\,\\text{mL}$ verrechnet den Umrechnungsfaktor $10^6$ mit einer falschen Dezimalverschiebung ($10^{-3}$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-008",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "Durchflussraten & Zusammengesetzte Einheiten",
    difficulty: "intermediate",
    stem: "Eine Infusionspumpe fördert eine Glukoselösung mit einer konstanten Rate von $72\\,\\text{mL/h}$ (Milliliter pro Stunde). Welcher Förderrate entspricht dies in der SI-abgeleiteten Einheit Kubikmillimeter pro Sekunde ($\\text{mm}^3/\\text{s}$)?",
    options: {
      A: "$20\\,\\text{mm}^3/\\text{s}$",
      B: "$2\\,\\text{mm}^3/\\text{s}$",
      C: "$200\\,\\text{mm}^3/\\text{s}$",
      D: "$12\\,\\text{mm}^3/\\text{s}$",
      E: "$0{,}2\\,\\text{mm}^3/\\text{s}$"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Umrechnung des Zählers (Volumen):  \n$1\\,\\text{mL} = 1\\,\\text{cm}^3$. Da $1\\,\\text{cm} = 10\\,\\text{mm}$ ist, gilt $1\\,\\text{cm}^3 = (10\\,\\text{mm})^3 = 1000\\,\\text{mm}^3$.  \n$72\\,\\text{mL} = 72 \\times 1000\\,\\text{mm}^3 = 72\\,000\\,\\text{mm}^3$.  \nSchritt 2: Umrechnung des Nenners (Zeit):  \n$1\\,\\text{h} = 60 \\times 60\\,\\text{s} = 3600\\,\\text{s}$.  \nSchritt 3: Quotient bilden:  \n$\\frac{72\\,000\\,\\text{mm}^3}{3600\\,\\text{s}} = \\frac{720}{36}\\,\\text{mm}^3/\\text{s} = 20\\,\\text{mm}^3/\\text{s}$.",
    explanations_incorrect: {
      B: "$2\\,\\text{mm}^3/\\text{s}$ vergisst eine Zehnerpotenz bei der Umrechnung von $\\text{mL}$ in $\\text{mm}^3$ ($1\\,\\text{mL} = 100\\,\\text{mm}^3$).",
      C: "$200\\,\\text{mm}^3/\\text{s}$ entsteht durch Division durch $360$ statt $3600\\,\\text{s}$.",
      D: "$12\\,\\text{mm}^3/\\text{s}$ dividiert fälschlicherweise $72$ durch $6$ ohne korrekte Zeiteinheitenanpassung.",
      E: "$0{,}2\\,\\text{mm}^3/\\text{s}$ verrechnet die Faktoren mit einem Zehnerpotenzfehler um Faktor 100."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-009",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Lineare Geradenfunktion & Orthogonalität",
    difficulty: "intermediate",
    stem: "Gegeben ist die lineare Funktion $f(x) = -\\frac{3}{4}x + 6$. Eine zweite Gerade $g(x)$ verläuft orthogonal (senkrecht) zu $f(x)$ und schneidet die $y$-Achse im Punkt $P(0 \\mid -2)$. An welcher Stelle $x_0$ schneidet die Gerade $g(x)$ die $x$-Achse (Nullstelle von $g$)?",
    options: {
      A: "$x_0 = -1{,}5$",
      B: "$x_0 = 2{,}0$",
      C: "$x_0 = 2{,}67$",
      D: "$x_0 = 1{,}5$",
      E: "$x_0 = 8{,}0$"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1: Steigung der Orthogonalen $g(x)$:  \nDie Steigung von $f$ ist $k_1 = -\\frac{3}{4}$.  \nZwei Geraden stehen orthogonal aufeinander, wenn $k_1 \\cdot k_2 = -1$ gilt:  \n$k_2 = -\\frac{1}{k_1} = -\\frac{1}{-3/4} = \\frac{4}{3}$.  \nSchritt 2: Geradengleichung für $g(x)$ aufstellen:  \nDa $g$ die $y$-Achse bei $-2$ schneidet, ist $d_2 = -2$:  \n$g(x) = \\frac{4}{3}x - 2$.  \nSchritt 3: Nullstelle berechnen ($g(x_0) = 0$):  \n$\\frac{4}{3}x_0 - 2 = 0 \\implies \\frac{4}{3}x_0 = 2 \\implies x_0 = 2 \\cdot \\frac{3}{4} = \\frac{6}{4} = 1{,}5$.",
    explanations_incorrect: {
      A: "$x_0 = -1{,}5$ resultiert aus einem Vorzeichenfehler bei der Auflösung der Gleichung ($\\\\frac{4}{3}x = -2$).",
      B: "$x_0 = 2{,}0$ verwechselt den Betrag des Achsenabschnitts mit der Nullstelle.",
      C: "$x_0 \\approx 2{,}67$ ($8/3$) entsteht bei fehlerhaftem Ansatz der Steigung $k_2 = 3/4$ (ohne negativen Kehrwert).",
      E: "$x_0 = 8{,}0$ berechnet die Nullstelle der ursprünglichen Funktion $f(x) = -\\frac{3}{4}x + 6 = 0 \\implies x = 8$."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-010",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Logarithmengesetze & Exponentielles Abklingen",
    difficulty: "advanced",
    stem: "Ein Narkosemittel wird im Blutplasma nach der Gesetzmäßigkeit $c(t) = c_0 \\cdot 10^{-0{,}05 \\cdot t}$ abgebaut, wobei $t$ die Zeit in Minuten bezeichnet. Nach wie vielen Minuten $t$ ist die Plasmakonzentration auf genau $1\\,\\%$ ihres Anfangswerts $c_0$ abgesunken?",
    options: {
      A: "$20\\,\\text{Minuten}$",
      B: "$40\\,\\text{Minuten}$",
      C: "$50\\,\\text{Minuten}$",
      D: "$100\\,\\text{Minuten}$",
      E: "$10\\,\\text{Minuten}$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Bedingung für $1\\,\\%$ der Anfangskonzentration aufstellen:  \n$c(t) = 0{,}01 \\cdot c_0 = 10^{-2} \\cdot c_0$.  \nSchritt 2: In die Abklingfunktion einsetzen:  \n$c_0 \\cdot 10^{-0{,}05 \\cdot t} = 10^{-2} \\cdot c_0$.  \nSchritt 3: Durch $c_0$ teilen und Exponenten vergleichen (Basis 10):  \n$10^{-0{,}05 \\cdot t} = 10^{-2} \\implies -0{,}05 \\cdot t = -2$.  \nSchritt 4: Nach $t$ auflösen:  \n$t = \\frac{-2}{-0{,}05} = \\frac{2}{0{,}05} = \\frac{200}{5} = 40\\,\\text{Minuten}$.",
    explanations_incorrect: {
      A: "$20\\,\\text{Minuten}$ berechnet fälschlicherweise den Abfall auf $10\\,\\%$ ($10^{-1}$), da $1 / 0{,}05 = 20$.",
      C: "$50\\,\\text{Minuten}$ verrechnet $0{,}05$ mit falscher Division ($2 / 0{,}04$).",
      D: "$100\\,\\text{Minuten}$ entsteht bei Annahme eines Abfalls auf $0{,}001\\,\\%$ oder falschem Exponentenansatz.",
      E: "$10\\,\\text{Minuten}$ halbiert die Zeit für den $10\\,\\%$-Abfall nochmals willkürlich."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-011",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "Vektorbetrag & Linearkombination im 3D-Raum",
    difficulty: "intermediate",
    stem: "Gegeben sind die beiden dreidimensionalen Vektoren\n$$\\vec{a} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} \\quad \\text{und} \\quad \\vec{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 1 \\end{pmatrix}.$$\nWelchen Betrag (Länge) besitzt der resultierende Vektor $\\vec{v} = 2\\vec{a} + \\vec{b}$?",
    options: {
      A: "$\\sqrt{38}$",
      B: "$\\sqrt{54}$",
      C: "$8$",
      D: "$\\sqrt{74}$",
      E: "$\\sqrt{62}$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Linearkombination $2\\vec{a} + \\vec{b}$ komponentenweise berechnen:  \n$2\\vec{a} = 2 \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ -2 \\\\ 6 \\end{pmatrix}$.  \n$\\vec{v} = 2\\vec{a} + \\vec{b} = \\begin{pmatrix} 4 + (-1) \\\\ -2 + 4 \\\\ 6 + 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 7 \\end{pmatrix}$.  \nSchritt 2: Betrag (Länge) von $\\vec{v}$ über den räumlichen Satz des Pythagoras bestimmen:  \n$|\\vec{v}| = \\sqrt{3^2 + 2^2 + 7^2} = \\sqrt{9 + 4 + 49} = \\sqrt{62}$.",
    explanations_incorrect: {
      A: "$\\sqrt{38}$ entsteht durch einen Vorzeichenfehler bei der Addition der Vektorkomponenten.",
      B: "$\\sqrt{54}$ resultiert aus einem Vorzeichenfehler bei der $y$-Komponente ($(-2 - 4)^2 = 36$).",
      C: "$8 = \\sqrt{64}$ ist eine unzulässige Rundung von $\\sqrt{62}$ oder Verwechslung mit der Komponentensumme.",
      D: "$\\sqrt{74}$ entsteht durch fehlerhaftes Quadrieren von $4^2 + 3^2 + 7^2 = 16 + 9 + 49 = 74$."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-012",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "Skalarprodukt & Orthogonalitätsbedingung",
    difficulty: "advanced",
    stem: "Für welchen reellen Wert des Parameters $k$ stehen die beiden Vektoren\n$$\\vec{u} = \\begin{pmatrix} 3 \\\\ k \\\\ -2 \\end{pmatrix} \\quad \\text{und} \\quad \\vec{w} = \\begin{pmatrix} k - 1 \\\\ 4 \\\\ 5 \\end{pmatrix}$$\nim dreidimensionalen Raum orthogonal (senkrecht) aufeinander?",
    options: {
      A: "$k = \\frac{7}{13}$",
      B: "$k = 1$",
      C: "$k = \\frac{13}{7}$",
      D: "$k = -\\frac{13}{7}$",
      E: "$k = \\frac{10}{7}$"
    },
    correct_answer: "C",
    explanation_correct: "Orthogonalitätsbedingung: Zwei Vektoren stehen genau dann orthogonal aufeinander, wenn ihr Skalarprodukt gleich null ist ($\\vec{u} \\cdot \\vec{w} = 0$).  \nSchritt 1: Skalarprodukt aufstellen:  \n$\\vec{u} \\cdot \\vec{w} = 3 \\cdot (k - 1) + k \\cdot 4 + (-2) \\cdot 5 = 0$.  \nSchritt 2: Terme ausmultiplizieren und zusammenfassen:  \n$3k - 3 + 4k - 10 = 0$.  \n$7k - 13 = 0$.  \nSchritt 3: Nach $k$ auflösen:  \n$7k = 13 \\implies k = \\frac{13}{7}$.",
    explanations_incorrect: {
      A: "$k = \\frac{7}{13}$ bildet fälschlicherweise den Kehrwert des korrekten Bruchs $\\frac{13}{7}$.",
      B: "$k = 1$ entsteht, wenn der Klammerausdruck $3(k - 1)$ isoliert zu null gesetzt wird.",
      D: "$k = -\\frac{13}{7}$ resultiert aus einem Vorzeichenfehler beim Übertrag der Konstanten auf die rechte Gleichungsseite.",
      E: "$k = \\frac{10}{7}$ vergisst den Summanden $-3$ aus der Ausmultiplikation der Klammer $3(k - 1) = 3k - 3$."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_12_items_medat_spec"
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
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #1 Runtime-Engine
 */
export const GENERALPROBE_1_MATH_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_MATH_QUESTIONS.map(
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
      tags: ["BMS", "Mathematik", "Generalprobe #1", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_12_items_medat_spec",
      setOrder: idx + 1,
    };
  }
);
