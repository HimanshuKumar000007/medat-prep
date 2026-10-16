/**
 * MedAT Mathematik BMS — 12-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #4 (BMS Mathematik-Testteil, exakt 12 Aufgaben).
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
 * - A: 3 (Q004, Q007, Q010)
 * - B: 3 (Q001, Q008, Q011)
 * - C: 2 (Q002, Q006)
 * - D: 2 (Q003, Q012)
 * - E: 2 (Q005, Q009)
 * Gesamt: 12 Aufgaben
 * Sequenz: B, C, D, A, E, C, A, B, E, A, B, D
 */

import type { StoredQuestion } from "../questions/types";

export interface QcMathGp4QuestionRaw {
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

export const RAW_GENERALPROBE_4_MATH_QUESTIONS: QcMathGp4QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Zehnerpotenzen und Zahlenmengen (math-01-zehnerpotenzen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP4-001",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Wissenschaftliche Schreibweise & Verdünnungsrechnung",
    difficulty: "foundational",
    stem: "In einem histologischen Diagnostiklabor wird eine Biopsieprobe mittels Transmissionselektronenmikroskopie analysiert. Die virale Last im nativen Gewebehomogenat beträgt im Mittel $4{,}8 \\times 10^7$ Virionen pro Milliliter ($1\\,\\text{mL}$). Für eine quantitative digitale Tröpfchen-PCR (ddPCR) wird eine Teilprobe von exakt $V = 25\\,\\mu\\text{L}$ entnommen ($1\\,\\mu\\text{L} = 10^{-3}\\,\\text{mL} = 10^{-6}\\,\\text{L}$).\\n\\nWie viele Virionen befinden sich rechnerisch in diesem Aliquot von $25\\,\\mu\\text{L}$?",
    options: {
      A: "$1{,}2 \\times 10^5$",
      B: "$1{,}2 \\times 10^6$",
      C: "$1{,}2 \\times 10^7$",
      D: "$4{,}8 \\times 10^5$",
      E: "$3{,}6 \\times 10^6$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Volumenumrechnung in Milliliter:\n$$V = 25\\,\\mu\\text{L} = 25 \\times 10^{-3}\\,\\text{mL} = 2{,}5 \\times 10^{-2}\\,\\text{mL}.$$\nSchritt 2: Berechnung der absoluten Virionenzahl:\n$$N = c \\cdot V = (4{,}8 \\times 10^7\\,\\text{mL}^{-1}) \\cdot (25 \\times 10^{-3}\\,\\text{mL})$$\n$$N = (4{,}8 \\cdot 25) \\times 10^{7 - 3} = \\left(4{,}8 \\cdot \\frac{100}{4}\\right) \\times 10^4 = 120 \\times 10^4 = 1{,}2 \\times 10^6\\,\\text{Virionen}.$$",
    explanations_incorrect: {
      A: "$1{,}2 \\times 10^5$ ist um den Faktor 10 zu klein; entsteht durch einen Zehnerpotenzfehler bei der Volumenumrechnung ($25\\,\\mu\\text{L} = 2{,}5 \\times 10^{-3}\\,\\text{mL}$ statt $2{,}5 \\times 10^{-2}\\,\\text{mL}$).",
      C: "$1{,}2 \\times 10^7$ ist um den Faktor 10 zu groß; entsteht, wenn für das Aliquot fälschlicherweise $0{,}25\\,\\text{mL}$ anstelle von $0{,}025\\,\\text{mL}$ angesetzt wird.",
      D: "$4{,}8 \\times 10^5$ entsteht, wenn die Konzentration nur mit $10^{-2}$ multipliziert, der Zahlenwert $2{,}5$ des Volumens jedoch unterschlagen wird.",
      E: "$3{,}6 \\times 10^6$ resultiert aus einem willkürlichen Multiplikationsfehler ($4{,}8 \\cdot 0{,}75$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP4-002",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Rationale Exponenten, Wurzelgesetze & Termvereinfachung",
    difficulty: "intermediate",
    stem: "Welchen exakten numerischen Wert besitzt der vereinfachte mathematische Term\n$$\\frac{(16 \\cdot 10^{-8})^{3/4}}{\\sqrt{4 \\cdot 10^{-6}} \\cdot 10^{-2}} \\quad ?$$",
    options: {
      A: "$0{,}04$",
      B: "$4$",
      C: "$0{,}4$",
      D: "$40$",
      E: "$0{,}8$"
    },
    correct_answer: "C",
    explanation_correct: "Schritt 1: Zähler vereinfachen:\n$$(16 \\cdot 10^{-8})^{3/4} = 16^{3/4} \\cdot (10^{-8})^{3/4} = (2^4)^{3/4} \\cdot 10^{-8 \\cdot (3/4)} = 2^3 \\cdot 10^{-6} = 8 \\cdot 10^{-6}.$$\nSchritt 2: Nenner vereinfachen:\n$$\\sqrt{4 \\cdot 10^{-6}} \\cdot 10^{-2} = \\sqrt{4} \\cdot \\sqrt{10^{-6}} \\cdot 10^{-2} = 2 \\cdot 10^{-3} \\cdot 10^{-2} = 2 \\cdot 10^{-5}.$$\nSchritt 3: Quotienten berechnen:\n$$\\frac{8 \\cdot 10^{-6}}{2 \\cdot 10^{-5}} = \\frac{8}{2} \\cdot 10^{-6 - (-5)} = 4 \\cdot 10^{-1} = 0{,}4.$$",
    explanations_incorrect: {
      A: "$0{,}04$ entsteht durch einen Subtraktionsfehler bei den Exponenten im Nenner (Ansatz von $10^{-4}$ statt $10^{-5}$, wodurch $4 \\cdot 10^{-2} = 0{,}04$ resultiert).",
      B: "$4$ entsteht, wenn im Zähler $10^{-5}$ anstelle von $10^{-6}$ gerechnet wird oder der zusätzliche Nennerfaktor $10^{-2}$ ganz vergessen wird.",
      D: "$40$ entsteht bei Vorzeichenverwechslung der Potenzen bei der Division (Multiplikation statt Division mit den Zehnerpotenzen: $10^{-5 - (-6)} = 10^1$).",
      E: "$0{,}8$ resultiert, wenn der Nennerfaktor $\\sqrt{4} = 2$ nicht zur Division herangezogen wird, sondern die Basis 8 im Zähler fehlerhaft durch 10 geteilt wird."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Algebra und Arithmetik (math-02-algebra) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP4-003",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Lineare Gleichungen mit Bruchtermen",
    difficulty: "foundational",
    stem: "Welcher exakte reelle Wert für die Unbekannte $x$ löst die lineare Bruchgleichung\n$$\\frac{3x - 5}{4} - \\frac{x - 1}{6} = \\frac{2}{3} \\quad ?$$",
    options: {
      A: "$x = 1$",
      B: "$x = 2$",
      C: "$x = 5$",
      D: "$x = 3$",
      E: "$x = 4$"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1: Ermittlung des kleinsten gemeinsamen Hauptnenners von 4, 6 und 3:\n$$\\text{kgV}(4, 6, 3) = 12.$$\nSchritt 2: Multiplikation der gesamten Gleichung mit dem Hauptnenner 12:\n$$12 \\cdot \\frac{3x - 5}{4} - 12 \\cdot \\frac{x - 1}{6} = 12 \\cdot \\frac{2}{3}$$\n$$3(3x - 5) - 2(x - 1) = 4 \\cdot 2$$\n$$9x - 15 - (2x - 2) = 8$$\n$$9x - 15 - 2x + 2 = 8$$\n$$7x - 13 = 8.$$\nSchritt 3: Äquivalenzumformung nach $x$:\n$$7x = 8 + 13 = 21 \\implies x = \\frac{21}{7} = 3.$$",
    explanations_incorrect: {
      A: "$x = 1$ entsteht, wenn beim Auflösen der Klammer $-2(x - 1)$ fälschlicherweise das Vorzeichen nicht gewechselt wird ($-2x - 2$), sodass $7x - 17 = 8 \\implies 7x = 25$ entsteht, bzw. durch grobe Rechenfehler.",
      B: "$x = 2$ resultiert aus Rechenfehlern bei der rechten Seite (z. B. $12 \\cdot 2/3 = 6$ statt 8).",
      C: "$x = 5$ entsteht, wenn beim Multiplizieren mit dem Hauptnenner der Faktor 3 vor dem ersten Zähler vergessen wird ($3x - 5 - 2x + 2 = 8 \\implies x - 3 = 8$).",
      E: "$x = 4$ entsteht durch Rechenfehler beim Zusammenfassen der konstanten Glieder ($-15 + 2 = -13$ wird irrtümlich als $-11$ gerechnet: $7x - 11 = 8 \\implies 7x = 19$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP4-004",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Quadratische Gleichungen & Satz von Vieta",
    difficulty: "intermediate",
    stem: "Gegeben ist die quadratische Gleichung\n$$2x^2 - 14x + 20 = 0.$$\nWelche der folgenden Aussagen über die beiden reellen Lösungen $x_1$ und $x_2$ (mit $x_1 < x_2$) ist mathematisch zutreffend?",
    options: {
      A: "Die Lösungen lauten $x_1 = 2$ und $x_2 = 5$; ihre Differenz beträgt $x_2 - x_1 = 3$.",
      B: "Die Lösungen lauten $x_1 = -5$ und $x_2 = -2$; ihre Summe beträgt $-7$.",
      C: "Die Lösungen lauten $x_1 = 1$ und $x_2 = 10$; ihre Differenz beträgt $9$.",
      D: "Die Lösungen lauten $x_1 = 2$ und $x_2 = 5$; ihr Produkt beträgt $20$.",
      E: "Die quadratische Gleichung besitzt keine reellen Lösungen (Diskriminante $D < 0$)."
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Division der quadratischen Gleichung durch den Leitkoeffizienten 2 (Normalform):\n$$x^2 - 7x + 10 = 0.$$\nSchritt 2: Nullstellenbestimmung über Faktorisierung (Satz von Vieta: $x_1 + x_2 = 7$, $x_1 \\cdot x_2 = 10$):\n$$(x - 2)(x - 5) = 0 \\implies x_1 = 2,\\quad x_2 = 5.$$\nSchritt 3: Überprüfung der Differenz:\n$$x_2 - x_1 = 5 - 2 = 3.$$\nOption A ist somit exakt zutreffend.",
    explanations_incorrect: {
      B: "Die Lösungen $x_1 = -5$ und $x_2 = -2$ entstehen bei Vorzeichenfehlern in den Faktoren ($(x+2)(x+5) = 0$).",
      C: "Die Lösungen $x_1 = 1$ und $x_2 = 10$ ergeben zwar das Produkt $10$, ihre Summe wäre jedoch $11$ statt $7$.",
      D: "Das Produkt der Lösungen der normierten Gleichung lautet $x_1 \\cdot x_2 = 2 \\cdot 5 = 10$, nicht $20$ (der konstante Koeffizient der Ausgangsgleichung wurde fälschlich ohne Division durch 2 angesetzt).",
      E: "Die Diskriminante ist $D = (-7)^2 - 4 \\cdot 1 \\cdot 10 = 49 - 40 = 9 > 0$; die Gleichung besitzt exakt zwei verschiedene reelle Lösungen."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Geometrie und Trigonometrie (math-03-geometrie) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP4-005",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Planimetrie: Satz des Pythagoras, Sehnensatz & Kreisgeometrie",
    difficulty: "intermediate",
    stem: "In einem ophthalmologischen Lasermodell wird die Hornhautkrümmung im Querschnitt als Kreissegment mit dem Kreisradius $R = 10\\,\\text{mm}$ angenähert. Eine ebene Schnittlinie (Kreissehne $s$) verläuft im senkrechten Abstand von $d = 6\\,\\text{mm}$ vom Kreismittelpunkt.\\n\\nWelche Gesamtlänge besitzt diese Sehne $s$ und welche Sagittalhöhe $h = R - d$ (Abstand der Sehnenmitte zum Hornhautscheitelpunkt) weist das Segment auf?",
    options: {
      A: "$s = 8\\,\\text{mm};\\quad h = 4\\,\\text{mm}$",
      B: "$s = 12\\,\\text{mm};\\quad h = 4\\,\\text{mm}$",
      C: "$s = 16\\,\\text{mm};\\quad h = 2\\,\\text{mm}$",
      D: "$s = 14\\,\\text{mm};\\quad h = 3\\,\\text{mm}$",
      E: "$s = 16\\,\\text{mm};\\quad h = 4\\,\\text{mm}$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Geometrischer Ansatz mit dem Satz des Pythagoras:\nDas Dreieck aus Kreismittelpunkt, Sehnenmitte und einem der beiden Sehnenendpunkte auf der Kreislinie ist rechtwinklig. Die Hypotenuse entspricht dem Kreisradius $R = 10\\,\\text{mm}$, eine Kathete dem Mittelpunktsabstand $d = 6\\,\\text{mm}$ und die andere Kathete der halben Sehnenlänge $s/2$:\n$$\\left(\\frac{s}{2}\\right)^2 + d^2 = R^2$$\n$$\\left(\\frac{s}{2}\\right)^2 + 6^2 = 10^2 \\implies \\left(\\frac{s}{2}\\right)^2 = 100 - 36 = 64.$$\n$$\\frac{s}{2} = \\sqrt{64} = 8\\,\\text{mm} \\implies s = 2 \\cdot 8 = 16\\,\\text{mm}.$$\nSchritt 2: Berechnung der Sagittalhöhe $h$:\n$$h = R - d = 10\\,\\text{mm} - 6\\,\\text{mm} = 4\\,\\text{mm}.$$",
    explanations_incorrect: {
      A: "$s = 8\\,\\text{mm}$ verwechselt die halbe Sehne ($s/2 = 8\\,\\text{mm}$) mit der vollen Sehnenlänge $s$.",
      B: "$s = 12\\,\\text{mm}$ entsteht bei einem Rechenfehler unter der Wurzel (z. B. Subtraktion von $100 - 64 = 36 \\implies 6 \\implies 12$).",
      C: "$h = 2\\,\\text{mm}$ berechnet die Sagittalhöhe fälschlich als $R - (s/2) = 10 - 8 = 2\\,\\text{mm}$.",
      D: "$s = 14\\,\\text{mm};\\quad h = 3\\,\\text{mm}$ ist eine grobe Fehlannahme ohne pythagoreische Dreiecksauflösung."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP4-006",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Ähnlichkeit & Räumliche Skalierung (Volumen & Oberfläche)",
    difficulty: "advanced",
    stem: "In der Zellbiologie wird ein näherungsweise kugelförmiger Zelltyp untersucht. Durch osmotischen Wassereinstrom schwillt die Zelle isotrop an, sodass ihr Volumen um genau $119{,}7\\,\\%$ zunimmt (das Endvolumen beträgt somit das $2{,}197$-Fache des Ausgangsvolumens $V_1$).\\n\\nUm wie viel Prozent vergrößert sich infolge dieser Schwellung die kugelförmige Zelloberfläche $A$ im Vergleich zur Ausgangsoberfläche $A_1$?",
    options: {
      A: "Um $30\\,\\%$",
      B: "Um $44\\,\\%$",
      C: "Um $69\\,\\%$",
      D: "Um $119{,}7\\,\\%$",
      E: "Um $169\\,\\%$"
    },
    correct_answer: "C",
    explanation_correct: "Schritt 1: Zusammenhang zwischen Kugelvolumen und Radius:\n$$V = \\frac{4}{3}\\pi r^3 \\implies V \\propto r^3.$$\nFür das Volumenverhältnis gilt:\n$$\\frac{V_2}{V_1} = 1 + 1{,}197 = 2{,}197.$$\nSchritt 2: Linearer Skalierungsfaktor für den Radius $k = \\frac{r_2}{r_1}$:\n$$k = \\sqrt[3]{\\frac{V_2}{V_1}} = \\sqrt[3]{2{,}197}.$$\nDa $13^3 = 13 \\cdot 169 = 2197$ ist, gilt exakt $\\sqrt[3]{2{,}197} = 1{,}3$.\nDer Zellradius nimmt folglich um $30\\,\\%$ zu ($k = 1{,}3$).\n\nSchritt 3: Skalierung der Kugeloberfläche ($A = 4\\pi r^2 \\implies A \\propto r^2$):\n$$\\frac{A_2}{A_1} = k^2 = (1{,}3)^2 = 1{,}69.$$\nSchritt 4: Prozentuale Zunahme der Oberfläche:\n$$\\Delta A_{\\text{rel}} = (1{,}69 - 1) \\cdot 100\\,\\% = 69\\,\\%.$$",
    explanations_incorrect: {
      A: "$30\\,\\%$ entspricht lediglich der linearen Vergrößerung des Radius ($k - 1 = 0{,}3 = 30\\,\\%$); die quadratische Abhängigkeit der Oberfläche vom Radius wurde vernachlässigt.",
      B: "$44\\,\\%$ entsteht bei Annahme eines Radiuszuwachses um $20\\,\\%$ ($(1{,}2)^2 - 1 = 0{,}44 = 44\\,\\%$).",
      D: "$119{,}7\\,\\%$ setzt fälschlicherweise die prozentuale Zunahme der zweidimensionalen Oberfläche mit der des dreidimensionalen Volumens gleich.",
      E: "$169\\,\\%$ verwechselt den Endwert der relativen Oberfläche ($169\\,\\%$ des Ausgangswerts) mit dem tatsächlichen Zuwachs ($169\\,\\% - 100\\,\\% = 69\\,\\%$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Einheiten und Dimensionen (math-04-einheiten) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP4-007",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "SI-Einheitenumrechnung & Hämodynamik",
    difficulty: "foundational",
    stem: "In der kardiovaskulären Diagnostik wird die maximale Flussgeschwindigkeit des Blutes in der Aorta ascendens mittels Doppler-Echokardiographie mit $v = 1{,}08\\,\\text{km/h}$ quantifiziert.\\n\\nWelchem exakten Wert in Metern pro Sekunde ($\\text{m/s}$) und Zentimetern pro Sekunde ($\\text{cm/s}$) entspricht diese Blutflussgeschwindigkeit?",
    options: {
      A: "$0{,}30\\,\\text{m/s} \\quad \\text{und} \\quad 30\\,\\text{cm/s}$",
      B: "$3{,}0\\,\\text{m/s} \\quad \\text{und} \\quad 300\\,\\text{cm/s}$",
      C: "$0{,}03\\,\\text{m/s} \\quad \\text{und} \\quad 3\\,\\text{cm/s}$",
      D: "$0{,}3888\\,\\text{m/s} \\quad \\text{und} \\quad 38{,}88\\,\\text{cm/s}$",
      E: "$0{,}108\\,\\text{m/s} \\quad \\text{und} \\quad 10{,}8\\,\\text{cm/s}$"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Umrechnungsfaktor von Kilometer pro Stunde in Meter pro Sekunde:\n$$1\\,\\frac{\\text{km}}{\\text{h}} = \\frac{1000\\,\\text{m}}{3600\\,\\text{s}} = \\frac{1}{3{,}6}\\,\\frac{\\text{m}}{\\text{s}}.$$\nSchritt 2: Division durch $3{,}6$:\n$$v = \\frac{1{,}08}{3{,}6}\\,\\frac{\\text{m}}{\\text{s}} = \\frac{108}{360}\\,\\frac{\\text{m}}{\\text{s}} = \\frac{3}{10}\\,\\frac{\\text{m}}{\\text{s}} = 0{,}30\\,\\text{m/s}.$$\nSchritt 3: Umrechnung in Zentimeter pro Sekunde ($1\\,\\text{m} = 100\\,\\text{cm}$):\n$$v = 0{,}30 \\cdot 100\\,\\frac{\\text{cm}}{\\text{s}} = 30\\,\\text{cm/s}.$$",
    explanations_incorrect: {
      B: "$3{,}0\\,\\text{m/s}$ und $300\\,\\text{cm/s}$ ist um den Faktor 10 zu groß (Kommafehler bei der Division durch $3{,}6$).",
      C: "$0{,}03\\,\\text{m/s}$ und $3\\,\\text{cm/s}$ ist um den Faktor 10 zu klein.",
      D: "$0{,}3888\\,\\text{m/s}$ entsteht, wenn fälschlicherweise mit $3{,}6$ multipliziert statt dividiert wird ($1{,}08 \\cdot 3{,}6 = 3{,}888$).",
      E: "$0{,}108\\,\\text{m/s}$ entsteht, wenn fälschlich durch 10 anstelle von $3{,}6$ geteilt wird."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP4-008",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "Klinische Pharmakokinetik & Infusionsberechnung",
    difficulty: "intermediate",
    stem: "Ein intensivpflichtiger Patient erhält eine kontinuierliche Schmerzmittelinfusion über eine Spritzenpumpe. Die ärztliche Verordnung lautet:\n• Dosisrate: $20\\,\\mu\\text{g}$ Wirkstoff pro Kilogramm Körpergewicht pro Stunde ($\\mu\\text{g}\\cdot\\text{kg}^{-1}\\cdot\\text{h}^{-1}$).\n• Körpermasse des Patienten: $m = 75\\,\\text{kg}$.\n• Infusionsdauer: exakt $8\\,\\text{Stunden}$.\n• Verwendete Fertiglösung: Konzentration $c = 0{,}25\\,\\text{mg/mL}$.\\n\\nWelches Gesamtvolumen dieser Fertiglösung in Milliliter ($\\text{mL}$) muss dem Patienten über die gesamte Infusionsdauer von $8\\,\\text{Stunden}$ verabreicht werden?",
    options: {
      A: "$24\\,\\text{mL}$",
      B: "$48\\,\\text{mL}$",
      C: "$96\\,\\text{mL}$",
      D: "$60\\,\\text{mL}$",
      E: "$12\\,\\text{mL}$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Stündliche Wirkstoffdosis für den gesamten Patienten berechnen:\n$$\\text{Rate} = 75\\,\\text{kg} \\cdot 20\\,\\frac{\\mu\\text{g}}{\\text{kg}\\cdot\\text{h}} = 1500\\,\\mu\\text{g/h} = 1{,}5\\,\\text{mg/h}.$$\nSchritt 2: Gesamte Wirkstoffmasse über $8\\,\\text{Stunden}$ berechnen:\n$$m_{\\text{ges}} = 1{,}5\\,\\frac{\\text{mg}}{\\text{h}} \\cdot 8\\,\\text{h} = 12\\,\\text{mg}.$$\nSchritt 3: Erforderliches Lösungsvolumen über die Konzentration ermitteln:\n$$V_{\\text{ges}} = \\frac{m_{\\text{ges}}}{c} = \\frac{12\\,\\text{mg}}{0{,}25\\,\\text{mg/mL}} = 12 \\cdot 4\\,\\text{mL} = 48\\,\\text{mL}.$$",
    explanations_incorrect: {
      A: "$24\\,\\text{mL}$ entspricht lediglich der Dosis für 4 Stunden Infusionszeit ($6\\,\\text{mg} / 0{,}25\\,\\text{mg/mL} = 24\\,\\text{mL}$).",
      C: "$96\\,\\text{mL}$ entsteht bei Verdopplung des Volumens bzw. Ansatz einer Konzentration von $0{,}125\\,\\text{mg/mL}$.",
      D: "$60\\,\\text{mL}$ resultiert aus Rechenfehlern beim Multiplizieren der Dosis ($1500 \\cdot 8$).",
      E: "$12\\,\\text{mL}$ entsteht, wenn die absolute Wirkstoffmasse in Milligramm ($12\\,\\text{mg}$) fälschlicherweise direkt 1:1 als Volumen in Millilitern abgelesen wird (Division durch die Konzentration $0{,}25\\,\\text{mg/mL}$ vergessen)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Funktionen, Graphen und Analysis (math-05-funktionen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP4-009",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Logarithmengesetze & Rechenregeln",
    difficulty: "intermediate",
    stem: "Welchen exakten numerischen Wert besitzt der vereinfachte mathematische Ausdruck\n$$X = \\log_{10}(500) + \\log_{10}(20) - \\log_{10}\\left(\\frac{1}{100}\\right) \\quad ?$$",
    options: {
      A: "$2$",
      B: "$4$",
      C: "$5$",
      D: "$8$",
      E: "$6$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Anwendung des Logarithmengesetzes für Produkte $\\log_{10}(a) + \\log_{10}(b) = \\log_{10}(a \\cdot b)$:\n$$\\log_{10}(500) + \\log_{10}(20) = \\log_{10}(500 \\cdot 20) = \\log_{10}(10\\,000) = \\log_{10}(10^4) = 4.$$\nSchritt 2: Auswertung des dritten Terms:\n$$\\log_{10}\\left(\\frac{1}{100}\\right) = \\log_{10}(10^{-2}) = -2.$$\nSchritt 3: Subtraktion unter Beachtung des doppelten Minuszeichens:\n$$X = 4 - (-2) = 4 + 2 = 6.$$",
    explanations_incorrect: {
      A: "$2$ entsteht durch einen Vorzeichenfehler beim dritten Term, wenn $- (-2)$ fälschlicherweise als $- 2$ gerechnet wird ($4 - 2 = 2$).",
      B: "$4$ vernachlässigt den dritten Term $-\\log_{10}(1/100)$ vollständig.",
      C: "$5$ entsteht bei einem Rechenfehler im ersten Teil ($\log_{10}(10\\,000) = 3 \\implies 3 + 2 = 5$).",
      D: "$8$ entsteht, wenn im ersten Schritt irrtümlich $500 \\cdot 20 = 10^6$ gerechnet wird ($6 + 2 = 8$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP4-010",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Exponentieller Zerfall & Radioaktive Halbwertszeit",
    difficulty: "advanced",
    stem: "In der Nuklearmedizin wird das Radioisotop Technetium-99m ($^{99\\text{m}}\\text{Tc}$) für szintigraphische Aufnahmen eingesetzt. Seine physikalische Halbwertszeit beträgt exakt $t_{1/2} = 6{,}0\\,\\text{Stunden}$.\\n\\nEinem Patienten wird für eine Schilddrüsenszintigraphie eine Aktivität von $A_0 = 800\\,\\text{MBq}$ intravenös verabreicht. Zu welchem Zeitpunkt $t$ nach der Injektion ist die Aktivität des Nuklids im Körper rein physikalisch auf genau $12{,}5\\,\\%$ des Ausgangswerts (entsprechend einer Restaktivität von $100\\,\\text{MBq}$) abgesunken (unter Vernachlässigung der renalen Ausscheidung)?",
    options: {
      A: "$t = 18\\,\\text{h}$",
      B: "$t = 24\\,\\text{h}$",
      C: "$t = 12\\,\\text{h}$",
      D: "$t = 15\\,\\text{h}$",
      E: "$t = 36\\,\\text{h}$"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Gesetz des radioaktiven Zerfalls:\n$$A(t) = A_0 \\cdot \\left(\\frac{1}{2}\\right)^{t / t_{1/2}}.$$\nSchritt 2: Verhältnis der Restaktivität zur Anfangsaktivität:\n$$\\frac{A(t)}{A_0} = 12{,}5\\,\\% = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3.$$\nSchritt 3: Gleichsetzen der Exponenten:\n$$\\frac{t}{t_{1/2}} = 3 \\implies t = 3 \\cdot t_{1/2} = 3 \\cdot 6{,}0\\,\\text{h} = 18\\,\\text{Stunden}.$$\nVeranschaulichung:\n• Nach 1 Halbwertszeit ($6\\,\\text{h}$): $50\\,\\% = 400\\,\\text{MBq}$\n• Nach 2 Halbwertszeiten ($12\\,\\text{h}$): $25\\,\\% = 200\\,\\text{MBq}$\n• Nach 3 Halbwertszeiten ($18\\,\\text{h}$): $12{,}5\\,\\% = 100\\,\\text{MBq}$.",
    explanations_incorrect: {
      B: "$t = 24\\,\\text{h}$ entspricht 4 Halbwertszeiten, bei denen die Restaktivität bereits auf $6{,}25\\,\\% = 50\\,\\text{MBq}$ abgesunken wäre.",
      C: "$t = 12\\,\\text{h}$ entspricht nur 2 Halbwertszeiten ($25\\,\\% = 200\\,\\text{MBq}$).",
      D: "$t = 15\\,\\text{h}$ resultiert aus einer unzulässigen linearen Interpolation der exponentiellen Zerfallskurve.",
      E: "$t = 36\\,\\text{h}$ entsteht bei Multiplikation der Halbwertszeit mit sich selbst ($6 \\cdot 6 = 36$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Vektorrechnung (math-06-vektorrechnung) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP4-011",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "2D-Vektoraddition, Biomechanik & Betragsberechnung",
    difficulty: "intermediate",
    stem: "An einer Sehnenansatzzone im Hüftgelenk greifen in einer zweidimensionalen frontalen Bewegungsebene zwei Muskelzugkräfte an:\n$$\\vec{F}_1 = \\begin{pmatrix} 12 \\\\ -5 \\end{pmatrix}\\,\\text{N} \\quad \\text{und} \\quad \\vec{F}_2 = \\begin{pmatrix} 3 \\\\ 13 \\end{pmatrix}\\,\\text{N}.$$\nWelchen Betrag besitzt die resultierende Gesamtzugkraft $\\vec{F}_{\\text{res}} = \\vec{F}_1 + \\vec{F}_2$?",
    options: {
      A: "$15\\,\\text{N}$",
      B: "$17\\,\\text{N}$",
      C: "$23\\,\\text{N}$",
      D: "$\\sqrt{313}\\,\\text{N} \\approx 17{,}7\\,\\text{N}$",
      E: "$13\\,\\text{N}$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Komponentenweise Vektoraddition der beiden Kraftvektoren:\n$$\\vec{F}_{\\text{res}} = \\vec{F}_1 + \\vec{F}_2 = \\begin{pmatrix} 12 + 3 \\\\ -5 + 13 \\end{pmatrix} = \\begin{pmatrix} 15 \\\\ 8 \\end{pmatrix}\\,\\text{N}.$$\nSchritt 2: Betrag des resultierenden Kraftvektors (Satz des Pythagoras bzw. pythagoreisches Tripel $8-15-17$):\n$$|\\vec{F}_{\\text{res}}| = \\sqrt{F_x^2 + F_y^2} = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\,\\text{N}.$$",
    explanations_incorrect: {
      A: "$15\\,\\text{N}$ entspricht nur der x-Komponente des resultierenden Vektors, die y-Komponente wurde vernachlässigt.",
      C: "$23\\,\\text{N}$ entsteht durch unzulässige skalare Addition der Komponenten ($15 + 8 = 23$) ohne euklidische Norm.",
      D: "$\\sqrt{313}\\,\\text{N}$ entsteht durch Vorzeichenfehler bei der Addition der y-Komponenten ($13 - (-5) = 18 \\implies \\sqrt{15^2 + 18^2} = \\sqrt{549}$ bzw. Rechenfehler unter der Wurzel).",
      E: "$13\\,\\text{N}$ entspricht dem Betrag des Vektors $\\vec{F}_1$ ($|\\vec{F}_1| = \\sqrt{12^2 + (-5)^2} = \\sqrt{169} = 13\\,\\text{N}$), die Addition von $\\vec{F}_2$ wurde unterlassen."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "MATH-BMS-GP4-012",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "Räumliches Skalarprodukt, Orthogonalität & Vektorbetrag",
    difficulty: "advanced",
    stem: "In einem computergestützten dreidimensionalen Modell der Kniegelenksmechanik werden zwei Vektoren $\\vec{u}$ und $\\vec{v}$ analysiert:\n$$\\vec{u} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 4 \\end{pmatrix} \\quad \\text{und} \\quad \\vec{v} = \\begin{pmatrix} 2 \\\\ 5 \\\\ k \\end{pmatrix}.$$\nFür welchen reellen Parameterwert $k$ stehen die beiden Vektoren exakt orthogonal (senkrecht) aufeinander, und welchen Betrag $|\\vec{u}|$ besitzt der Vektor $\\vec{u}$?",
    options: {
      A: "$k = -1;\\quad |\\vec{u}| = \\sqrt{29}$",
      B: "$k = 1;\\quad |\\vec{u}| = 5$",
      C: "$k = 4;\\quad |\\vec{u}| = \\sqrt{29}$",
      D: "$k = 1;\\quad |\\vec{u}| = \\sqrt{29}$",
      E: "$k = 2;\\quad |\\vec{u}| = \\sqrt{21}$"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1: Orthogonalitätsbedingung über das Skalarprodukt ($\\vec{u} \\cdot \\vec{v} = 0$):\n$$\\vec{u} \\cdot \\vec{v} = 3 \\cdot 2 + (-2) \\cdot 5 + 4 \\cdot k = 0$$\n$$6 - 10 + 4k = 0$$\n$$-4 + 4k = 0 \\implies 4k = 4 \\implies k = 1.$$\nSchritt 2: Betrag des Vektors $\\vec{u}$ berechnen:\n$$|\\vec{u}| = \\sqrt{u_x^2 + u_y^2 + u_z^2} = \\sqrt{3^2 + (-2)^2 + 4^2} = \\sqrt{9 + 4 + 16} = \\sqrt{29} \\approx 5{,}39.$$\nSomit ist Option D mit $k = 1$ und $|\\vec{u}| = \\sqrt{29}$ exakt zutreffend.",
    explanations_incorrect: {
      A: "$k = -1$ entsteht durch einen Vorzeichenfehler bei der Auflösung der Gleichung $-4 + 4k = 0 \\implies 4k = -4 \\implies k = -1$.",
      B: "$|\\vec{u}| = 5$ entsteht, wenn die z-Komponente bei der Betragsberechnung vernachlässigt wird ($\\sqrt{3^2 + (-2)^2} \\approx \\sqrt{13}$ bzw. falsche Pythagoraszahlen).",
      C: "$k = 4$ resultiert aus Rechenfehlern bei der Addition der Produkte ($6 + (-10) = 4$).",
      E: "$k = 2$ und $|\\vec{u}| = \\sqrt{21}$ resultiert aus einem Vorzeichenfehler beim Quadrieren von $-2$ ($(-2)^2 = -4 \\implies 9 - 4 + 16 = 21$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_12_items_medat_spec"
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
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #4 Runtime-Engine
 */
export const GENERALPROBE_4_MATH_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_MATH_QUESTIONS.map(
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
      tags: ["BMS", "Mathematik", "Generalprobe #4", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "4.0_12_items_medat_spec",
      setOrder: idx + 1,
    };
  }
);
