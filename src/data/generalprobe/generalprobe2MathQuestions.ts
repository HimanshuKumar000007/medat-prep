/**
 * MedAT Mathematik BMS — 12-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * 12 selbst erstellte MedAT-Übungsaufgaben für Generalprobe #2 (BMS Mathematik-Testteil).
 * 
 * Fachlich und terminologisch präzise kalibriert auf das MedAT-H-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau ohne Taschenrechner).
 * 
 * Verteilung:
 * - 3 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 6 Mittel (Intermediate) (50,0 %)
 * - 3 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel:
 * - A: 3 (Q003, Q006, Q010)
 * - B: 2 (Q001, Q008)
 * - C: 3 (Q004, Q007, Q012)
 * - D: 2 (Q002, Q009)
 * - E: 2 (Q005, Q011)
 * Gesamt: 12 Aufgaben
 */

import type { StoredQuestion } from "../questions/types";

export interface QcMathGp2QuestionRaw {
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

export const RAW_GENERALPROBE_2_MATH_QUESTIONS: QcMathGp2QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Zehnerpotenzen und Zahlenmengen (math-01-zehnerpotenzen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP2-001",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Wissenschaftliche Schreibweise & Zehnerpotenz-Rechnung",
    difficulty: "foundational",
    stem: "Welchen exakten numerischen Wert besitzt der Term\n$$\\frac{1{,}8 \\times 10^5 \\cdot 4{,}0 \\times 10^{-2}}{6{,}0 \\times 10^7 \\cdot 3{,}0 \\times 10^{-9}}$$\nin wissenschaftlicher Notation?",
    options: {
      A: "$4{,}0 \\times 10^2$ ($400$)",
      B: "$4{,}0 \\times 10^4$ ($40\\,000$)",
      C: "$4{,}0 \\times 10^3$ ($4000$)",
      D: "$2{,}4 \\times 10^4$ ($24\\,000$)",
      E: "$4{,}0 \\times 10^{-4}$ ($0{,}0004$)"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Zähler getrennt nach Mantissen und Zehnerpotenzen berechnen:  \n$1{,}8 \\cdot 4{,}0 = 7{,}2$.  \n$10^5 \\cdot 10^{-2} = 10^{5 + (-2)} = 10^3$.  \nZähler $= 7{,}2 \\times 10^3$.  \nSchritt 2: Nenner getrennt berechnen:  \n$6{,}0 \\cdot 3{,}0 = 18{,}0 = 1{,}8 \\times 10^1$.  \n$10^7 \\cdot 10^{-9} = 10^{7 - 9} = 10^{-2}$.  \nNenner $= 18{,}0 \\times 10^{-2} = 1{,}8 \\times 10^{-1}$.  \nSchritt 3: Gesamtbruch auswerten:  \n$\\frac{7{,}2 \\times 10^3}{1{,}8 \\times 10^{-1}} = \\left(\\frac{7{,}2}{1{,}8}\\right) \\times 10^{3 - (-1)} = 4{,}0 \\times 10^{3 + 1} = 4{,}0 \\times 10^4 = 40\\,000$.",
    explanations_incorrect: {
      A: "$4{,}0 \\times 10^2$ entsteht durch einen Vorzeichenfehler im Exponenten des Nenners ($10^{3 - 1} = 10^2$).",
      C: "$4{,}0 \\times 10^3$ vergisst die Division durch $10^{-1}$ im Nenner.",
      D: "$2{,}4 \\times 10^4$ verrechnet die Mantissen fehlerhaft ($7{,}2 / 3 = 2{,}4$).",
      E: "$4{,}0 \\times 10^{-4}$ subtrahiert fälschlicherweise den Zählerexponenten vom Nennerexponenten ($10^{-1 - 3} = 10^{-4}$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "MATH-BMS-GP2-002",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Zehnerpotenzen und Zahlenmengen",
    subtopic: "Wurzelrechnung & Rationale Exponenten",
    difficulty: "intermediate",
    stem: "Welchen exakten rationalen Wert besitzt der vereinfachte Term\n$$\\frac{\\sqrt{32} \\cdot 4^{-1/2} \\cdot \\sqrt[3]{8^2}}{\\sqrt{2}} \\quad ?$$",
    options: {
      A: "$2$",
      B: "$4$",
      C: "$16$",
      D: "$8$",
      E: "$32$"
    },
    correct_answer: "D",
    explanation_correct: "Schrittweise Umformung der Faktoren:  \n1. $\\frac{\\sqrt{32}}{\\sqrt{2}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$.  \n2. $4^{-1/2} = \\frac{1}{4^{1/2}} = \\frac{1}{\\sqrt{4}} = \\frac{1}{2}$.  \n3. $\\sqrt[3]{8^2} = (8^2)^{1/3} = (64)^{1/3} = 4$ (oder alternativ: $(8^{1/3})^2 = 2^2 = 4$).  \nZusammensetzen des Gesamtausdrucks:  \n$\\frac{\\sqrt{32}}{\\sqrt{2}} \\cdot 4^{-1/2} \\cdot \\sqrt[3]{8^2} = 4 \\cdot \\frac{1}{2} \\cdot 4 = 2 \\cdot 4 = 8$.",
    explanations_incorrect: {
      A: "$2$ entsteht, wenn nach der ersten Verrechnung $\\frac{\\sqrt{32}}{\\sqrt{2}} \\cdot 4^{-1/2} = 4 \\cdot \\frac{1}{2} = 2$ der dritte Faktor $\\sqrt[3]{8^2} = 4$ vergessen wird.",
      B: "$4$ entsteht, wenn $\\sqrt[3]{8^2}$ fälschlicherweise als $\\sqrt[3]{8} = 2$ ausgewertet wird (der Exponent 2 wird vergessen), sodass $4 \\cdot \\frac{1}{2} \\cdot 2 = 4$ resultiert.",
      C: "$16$ entsteht, wenn der Kehrwertfaktor $4^{-1/2} = \\frac{1}{2}$ ignoriert wird und stattdessen lediglich $4 \\cdot 4 = 16$ gerechnet wird (oder $\\sqrt[3]{8^2}$ mit der Quadratwurzel $\\sqrt{8^2} = 8$ verwechselt wird: $4 \\cdot \\frac{1}{2} \\cdot 8 = 16$).",
      E: "$32$ entsteht, wenn bei $4^{-1/2}$ das negative Vorzeichen im Exponenten ignoriert und fälschlicherweise $4^{1/2} = \\sqrt{4} = 2$ gerechnet wird (Multiplikation mit $2$ statt Division durch $2$): $4 \\cdot 2 \\cdot 4 = 32$."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Algebra und Arithmetik (math-02-algebra) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP2-003",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Quadratische Gleichungen & Lösungsmenge",
    difficulty: "intermediate",
    stem: "Welche Lösungsmenge $L$ besitzt die quadratische Gleichung\n$$2x^2 - 10x + 12 = 0$$\nin der Grundmenge der reellen Zahlen $\\mathbb{R}$?",
    options: {
      A: "$L = \\{2;\\, 3\\}$",
      B: "$L = \\{-2;\\, -3\\}$",
      C: "$L = \\{1;\\, 6\\}$",
      D: "$L = \\{-1;\\, 5\\}$",
      E: "$L = \\{2{,}5\\}$"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Division der gesamten Gleichung durch den Leitkoeffizienten $2$:  \n$x^2 - 5x + 6 = 0$.  \nSchritt 2: Faktorisierung über den Satz von Vieta ($x_1 + x_2 = 5$ und $x_1 \\cdot x_2 = 6$):  \n$(x - 2)(x - 3) = 0$.  \nEin Produkt wird null, wenn mindestens ein Faktor null ist:  \n$x - 2 = 0 \\implies x_1 = 2$.  \n$x - 3 = 0 \\implies x_2 = 3$.  \n(Alternativ über die $p$-$q$-Formel mit $p = -5, q = 6$: $x_{1,2} = -\\frac{-5}{2} \\pm \\sqrt{\\left(\\frac{5}{2}\\right)^2 - 6} = 2{,}5 \\pm \\sqrt{6{,}25 - 6} = 2{,}5 \\pm 0{,}5 \\implies x_1 = 3, x_2 = 2$).  \nDie Lösungsmenge lautet somit $L = \\{2;\\, 3\\}$.",
    explanations_incorrect: {
      B: "$L = \\{-2;\\, -3\\}$ entsteht durch einen Vorzeichenfehler bei der Faktorisierung ($(x + 2)(x + 3) = x^2 + 5x + 6$).",
      C: "$L = \\{1;\\, 6\\}$ wählt zwar Faktoren von $6$ ($1 \\cdot 6 = 6$), deren Summe ergibt jedoch $7$ und nicht $5$.",
      D: "$L = \\{-1;\\, 5\\}$ erfüllt weder die Summen- noch die Produktbedingung von Vieta.",
      E: "$L = \\{2{,}5\\}$ gibt lediglich den Scheitelpunkt bzw. $-p/2$ an, vergisst jedoch die Diskriminante."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "MATH-BMS-GP2-004",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Algebra und Arithmetik",
    subtopic: "Lineare Gleichungssysteme & Modellierung",
    difficulty: "foundational",
    stem: "In einer klinischen Arzneimittelstudie werden zwei Patientengruppen A und B untersucht. Beide Gruppen umfassen zusammen exakt $140$ Probanden. Gruppe A hat genau $20$ Probanden mehr als Gruppe B. Wie viele Probanden befinden sich in Gruppe A?",
    options: {
      A: "$60$",
      B: "$70$",
      C: "$80$",
      D: "$90$",
      E: "$100$"
    },
    correct_answer: "C",
    explanation_correct: "Schritt 1: Aufstellen des linearen Gleichungssystems mit den Teilnehmerzahlen $A$ und $B$:  \nI. $A + B = 140$  \nII. $A - B = 20 \\implies A = B + 20$  \nSchritt 2: Gleichung II in I einsetzen:  \n$(B + 20) + B = 140 \\implies 2B + 20 = 140 \\implies 2B = 120 \\implies B = 60$.  \nSchritt 3: Bestimmung von $A$:  \n$A = B + 20 = 60 + 20 = 80$.  \n(Probe: $80 + 60 = 140$ und $80 - 60 = 20$). In Gruppe A befinden sich somit $80$ Probanden.",
    explanations_incorrect: {
      A: "$60$ ist die Anzahl der Probanden in Gruppe B, nicht in Gruppe A.",
      B: "$70$ teilt lediglich die Gesamtzahl durch 2 ($140 / 2 = 70$) und ignoriert den Gruppenunterschied.",
      D: "$90$ resultiert aus einem Rechenfehler ($140 - 20 = 120; 120 / 2 = 60; 60 + 30 = 90$).",
      E: "$100$ addiert die $20$ Probanden fälschlicherweise auf die halbe Gesamtzahl von $80$."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Geometrie und Trigonometrie (math-03-geometrie) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP2-005",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Trigonometrie im rechtwinkligen Dreieck",
    difficulty: "intermediate",
    stem: "In einem rechtwinkligen Dreieck mit dem rechten Winkel bei der Ecke $C$ beträgt die Länge der Hypotenuse $c = 12\\,\\text{cm}$. Der Innenwinkel bei der Ecke $A$ beträgt $\\alpha = 30^\\circ$. Wie lang ist die Ankathete $b$ des Winkels $\\alpha$ (Strecke $AC$)?  \n(Hinweis: Es gilt $\\sin(30^\\circ) = \\frac{1}{2}$, $\\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}$, $\\tan(30^\\circ) = \\frac{1}{\\sqrt{3}}$).",
    options: {
      A: "$6\\,\\text{cm}$",
      B: "$12\\sqrt{3}\\,\\text{cm}$",
      C: "$3\\sqrt{3}\\,\\text{cm}$",
      D: "$6\\sqrt{2}\\,\\text{cm}$",
      E: "$6\\sqrt{3}\\,\\text{cm}$"
    },
    correct_answer: "E",
    explanation_correct: "In einem rechtwinkligen Dreieck ist der Kosinus eines spitzen Winkels definiert als das Verhältnis von Ankathete zu Hypotenuse:  \n$\\cos(\\alpha) = \\frac{b}{c} \\implies b = c \\cdot \\cos(\\alpha)$.  \nEinsetzen der gegebenen Größen:  \n$b = 12\\,\\text{cm} \\cdot \\cos(30^\\circ) = 12\\,\\text{cm} \\cdot \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}\\,\\text{cm}$.  \n(Probe über den Satz des Pythagoras mit der Gegenkathete $a = c \\cdot \\sin(30^\\circ) = 12 \\cdot 0{,}5 = 6\\,\\text{cm}$: $a^2 + b^2 = 6^2 + (6\\sqrt{3})^2 = 36 + 36 \\cdot 3 = 36 + 108 = 144 = 12^2 = c^2$).",
    explanations_incorrect: {
      A: "$6\\,\\text{cm}$ ist die Länge der Gegenkathete $a = c \\cdot \\sin(30^\\circ) = 12 \\cdot 0{,}5$, nicht der Ankathete.",
      B: "$12\\sqrt{3}\\,\\text{cm}$ vergisst die Division durch 2 im Kosinuswert.",
      C: "$3\\sqrt{3}\\,\\text{cm}$ dividiert fälschlicherweise nochmals durch 2.",
      D: "$6\\sqrt{2}\\,\\text{cm}$ verwendet irrtümlich den Funktionswert für $45^\\circ$ ($\\cos(45^\\circ) = \\frac{\\sqrt{2}}{2}$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "MATH-BMS-GP2-006",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Geometrie und Trigonometrie",
    subtopic: "Stereometrie: Kugelvolumen & Oberflächen-Skalierung",
    difficulty: "advanced",
    stem: "Ein kugeliges Zellorganoid (Kugel $K_1$) besitzt das Volumen $V_1$ und den Oberflächeninhalt $O_1$. Durch fortgesetztes Zellwachstum verachtfacht sich sein Volumen auf $V_2 = 8 \\cdot V_1$ (Kugel $K_2$). Um welchen Faktor vergrößert sich dabei die äußere Oberfläche des Organoids ($O_2 / O_1$)?",
    options: {
      A: "Um den Faktor $4$",
      B: "Um den Faktor $2$",
      C: "Um den Faktor $8$",
      D: "Um den Faktor $16$",
      E: "Um den Faktor $64$"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Zusammenhang zwischen Kugelvolumen und Radius:  \n$V = \\frac{4}{3}\\pi r^3 \\implies V \\propto r^3$.  \nVerachtfacht sich das Volumen ($V_2 = 8 V_1$), so gilt für das Radienverhältnis:  \n$\\frac{r_2^3}{r_1^3} = 8 \\implies \\frac{r_2}{r_1} = \\sqrt[3]{8} = 2$. Der Radius verdoppelt sich ($r_2 = 2 r_1$).  \nSchritt 2: Zusammenhang zwischen Oberfläche und Radius:  \n$O = 4\\pi r^2 \\implies O \\propto r^2$.  \nFür das Oberflächenverhältnis folgt daher:  \n$\\frac{O_2}{O_1} = \\left(\\frac{r_2}{r_1}\\right)^2 = 2^2 = 4$.  \nDie Oberfläche vervierfacht sich ($O_2 = 4 \\cdot O_1$).",
    explanations_incorrect: {
      B: "Faktor 2 ist lediglich der Längenskalierungsfaktor des Radius ($r_2 / r_1 = 2$), nicht der Flächenskalierungsfaktor.",
      C: "Faktor 8 nähme fälschlicherweise an, dass die Oberfläche proportional zum Volumen wächst ($O \\propto V$).",
      D: "Faktor 16 quadriert irrtümlich die 4 nochmals.",
      E: "Faktor 64 quadriert die 8 ($8^2 = 64$)."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Einheiten und Dimensionen (math-04-einheiten) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP2-007",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "Geschwindigkeits- und Zeitumrechnung",
    difficulty: "foundational",
    stem: "Ein Rettungshubschrauber fliegt im Einsatz mit einer konstanten Reisegeschwindigkeit von $v = 50\\,\\text{m/s}$. Welcher Geschwindigkeit entspricht dies in Kilometern pro Stunde ($\\text{km/h}$), und welche Flugstrecke $s$ legt der Hubschrauber in genau $18\\,\\text{Minuten}$ zurück?",
    options: {
      A: "$150\\,\\text{km/h}$ und $45\\,\\text{km}$",
      B: "$180\\,\\text{km/h}$ und $90\\,\\text{km}$",
      C: "$180\\,\\text{km/h}$ und $54\\,\\text{km}$",
      D: "$144\\,\\text{km/h}$ und $43{,}2\\,\\text{km}$",
      E: "$200\\,\\text{km/h}$ und $60\\,\\text{km}$"
    },
    correct_answer: "C",
    explanation_correct: "Schritt 1: Umrechnung der Geschwindigkeit von $\\text{m/s}$ in $\\text{km/h}$ über den Faktor $3{,}6$:  \n$v = 50\\,\\text{m/s} \\cdot 3{,}6 = 180\\,\\text{km/h}$.  \nSchritt 2: Umrechnung der Flugzeit in Stunden:  \n$t = 18\\,\\text{Minuten} = \\frac{18}{60}\\,\\text{h} = \\frac{3}{10}\\,\\text{h} = 0{,}3\\,\\text{h}$.  \nSchritt 3: Berechnung der Flugstrecke ($s = v \\cdot t$):  \n$s = 180\\,\\text{km/h} \\cdot 0{,}3\\,\\text{h} = 54\\,\\text{km}$.  \n(Alternativ direkt in SI-Einheiten: $t = 18 \\cdot 60\\,\\text{s} = 1080\\,\\text{s}$; $s = 50\\,\\text{m/s} \\cdot 1080\\,\\text{s} = 54\\,000\\,\\text{m} = 54\\,\\text{km}$).",
    explanations_incorrect: {
      A: "$150\\,\\text{km/h}$ multipliziert fälschlicherweise mit $3{,}0$ statt $3{,}6$.",
      B: "$90\\,\\text{km}$ berechnet die Flugstrecke für eine halbe Stunde ($0{,}5\\,\\text{h} = 30\\,\\text{min}$), nicht für $18\\,\\text{min}$.",
      D: "$144\\,\\text{km/h}$ entspricht $40\\,\\text{m/s}$ ($40 \\cdot 3{,}6$).",
      E: "$200\\,\\text{km/h}$ multipliziert mit dem falschen Faktor 4."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "MATH-BMS-GP2-008",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Einheiten und Dimensionen",
    subtopic: "Klinische Dosiermengen & Infusionstropfen",
    difficulty: "intermediate",
    stem: "Einem pädiatrischen Patienten mit einer Körpermasse von $m = 20\\,\\text{kg}$ soll ein Antibiotikum in einer Dosis von $15\\,\\text{mg}$ pro Kilogramm Körpergewicht verabreicht werden. Die zubereitete Infusionslösung besitzt eine Konzentration von $6\\,\\text{mg/mL}$. Welches Volumen der Lösung muss infundiert werden, und wie viele Tropfen entspricht dies bei Verwendung eines Standard-Infusionsbestecks ($20\\,\\text{Tropfen} = 1\\,\\text{mL}$)?",
    options: {
      A: "$25\\,\\text{mL}$ und $500\\,\\text{Tropfen}$",
      B: "$50\\,\\text{mL}$ und $1000\\,\\text{Tropfen}$",
      C: "$50\\,\\text{mL}$ und $500\\,\\text{Tropfen}$",
      D: "$100\\,\\text{mL}$ und $2000\\,\\text{Tropfen}$",
      E: "$30\\,\\text{mL}$ und $600\\,\\text{Tropfen}$"
    },
    correct_answer: "B",
    explanation_correct: "Schritt 1: Gesamte benötigte Wirkstoffmasse berechnen:  \n$m_{\\text{Wirk}} = 20\\,\\text{kg} \\cdot 15\\,\\text{mg/kg} = 300\\,\\text{mg}$.  \nSchritt 2: Infusionsvolumen über die Konzentration bestimmen:  \n$V = \\frac{m_{\\text{Wirk}}}{c} = \\frac{300\\,\\text{mg}}{6\\,\\text{mg/mL}} = 50\\,\\text{mL}$.  \nSchritt 3: Anzahl der Tropfen berechnen:  \n$N_{\\text{Tropfen}} = 50\\,\\text{mL} \\cdot 20\\,\\text{Tropfen/mL} = 1000\\,\\text{Tropfen}$.",
    explanations_incorrect: {
      A: "$25\\,\\text{mL}$ halbiert die erforderliche Wirkstoffmenge ($150\\,\\text{mg} / 6$).",
      C: "$500\\,\\text{Tropfen}$ rechnet fälschlicherweise mit $10\\,\\text{Tropfen/mL}$ statt $20\\,\\text{Tropfen/mL}$.",
      D: "$100\\,\\text{mL}$ verdoppelt irrtümlich die Patientendosis.",
      E: "$30\\,\\text{mL}$ dividiert fälschlicherweise $300$ durch $10$ statt durch die Konzentration $6\\,\\text{mg/mL}$."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Funktionen, Graphen und Analysis (math-05-funktionen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP2-009",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Quadratische Funktionen: Scheitelpunkt & Extremwert",
    difficulty: "intermediate",
    stem: "Gegeben ist die reelle quadratische Funktion $f(x) = -2x^2 + 8x - 3$. Welche Koordinaten besitzt der Scheitelpunkt $S(x_S \\mid y_S)$ des Funktionsgraphen, und um welche Art von Extremwert handelt es sich an dieser Stelle?",
    options: {
      A: "$S(-2 \\mid -27)$; lokales Minimum",
      B: "$S(2 \\mid 11)$; lokales Maximum",
      C: "$S(4 \\mid -3)$; lokales Maximum",
      D: "$S(2 \\mid 5)$; globales Maximum",
      E: "$S(2 \\mid 5)$; globales Minimum"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1: Bestimmung der $x$-Koordinate des Scheitelpunkts:  \nFür eine Parabel $f(x) = ax^2 + bx + c$ gilt $x_S = -\\frac{b}{2a}$.  \nMit $a = -2$ und $b = 8$ folgt:  \n$x_S = -\\frac{8}{2 \\cdot (-2)} = -\\frac{8}{-4} = 2$.  \nSchritt 2: Funktionswert $y_S = f(x_S)$ berechnen:  \n$y_S = f(2) = -2 \\cdot (2)^2 + 8 \\cdot 2 - 3 = -2 \\cdot 4 + 16 - 3 = -8 + 16 - 3 = 5$.  \nDer Scheitelpunkt lautet $S(2 \\mid 5)$.  \nSchritt 3: Art des Extremums bestimmen:  \nDa der Leitkoeffizient $a = -2 < 0$ negativ ist, ist die Parabel nach unten geöffnet. Der Scheitelpunkt stellt folglich das globale Maximum der Funktion dar.",
    explanations_incorrect: {
      A: "$S(-2 \\mid -27)$ entsteht durch einen Vorzeichenfehler bei $x_S = -b / (2a)$ (Rechnung $8 / (-4) = -2$).",
      B: "$S(2 \\mid 11)$ entsteht, wenn beim Einsetzen von $x = 2$ das Vorzeichen der Konstanten $-3$ fehlerhaft als $+3$ addiert wird: $-8 + 16 + 3 = 11$.",
      C: "$S(4 \\mid -3)$ vergisst den Faktor 2 im Nenner der Scheitelpunktsformel ($8 / 2 = 4$).",
      E: "Obwohl die Koordinaten $S(2 \\mid 5)$ korrekt sind, ist es kein Minimum, da $a = -2 < 0$ eine nach unten geöffnete Parabel mit Maximum bedingt."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "MATH-BMS-GP2-010",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Funktionen, Graphen und Analysis",
    subtopic: "Exponentialfunktionen & Halbwertszeit-Modellierung",
    difficulty: "advanced",
    stem: "Ein radioaktiver Tracer für die Positronen-Emissions-Tomographie (PET) besitzt eine Halbwertszeit von $T_{1/2} = 110\\,\\text{Minuten}$ ($^{18}\\text{F}$-Fluordesoxyglukose). Zu Beginn ($t = 0$) beträgt die Aktivität $A_0 = 800\\,\\text{MBq}$. Welche Restaktivität $A(t)$ ist nach genau $330\\,\\text{Minuten}$ noch vorhanden, und um welchen Bruchteil hat die anfängliche Aktivität in dieser Zeit abgenommen?",
    options: {
      A: "Restaktivität $100\\,\\text{MBq}$; die Aktivität hat um $\\frac{7}{8}$ ($87{,}5\\,\\%$) abgenommen.",
      B: "Restaktivität $200\\,\\text{MBq}$; die Aktivität hat um $\\frac{3}{4}$ ($75\\,\\%$) abgenommen.",
      C: "Restaktivität $100\\,\\text{MBq}$; die Aktivität hat um $\\frac{1}{8}$ ($12{,}5\\,\\%$) abgenommen.",
      D: "Restaktivität $50\\,\\text{MBq}$; die Aktivität hat um $\\frac{15}{16}$ ($93{,}75\\,\\%$) abgenommen.",
      E: "Restaktivität $266{,}7\\,\\text{MBq}$; die Aktivität hat um $\\frac{2}{3}$ abgenommen."
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Anzahl der verstrichenen Halbwertszeiten berechnen:  \n$n = \\frac{t}{T_{1/2}} = \\frac{330\\,\\text{Minuten}}{110\\,\\text{Minuten}} = 3$.  \nSchritt 2: Restaktivität über das exponentielle Abklinggesetz bestimmen:  \n$A(t) = A_0 \\cdot \\left(\\frac{1}{2}\\right)^n = 800\\,\\text{MBq} \\cdot \\left(\\frac{1}{2}\\right)^3 = 800\\,\\text{MBq} \\cdot \\frac{1}{8} = 100\\,\\text{MBq}$.  \nSchritt 3: Abnahme der Aktivität berechnen:  \nAbgenommene Aktivität $= A_0 - A(t) = 800\\,\\text{MBq} - 100\\,\\text{MBq} = 700\\,\\text{MBq}$.  \nRelativer Verlust $= \\frac{700}{800} = \\frac{7}{8} = 0{,}875 = 87{,}5\\,\\%$.",
    explanations_incorrect: {
      B: "$200\\,\\text{MBq}$ entspräche nur 2 Halbwertszeiten ($220\\,\\text{Minuten}$), da $800 / 4 = 200$.",
      C: "Die Restaktivität ist zwar korrekt $100\\,\\text{MBq}$, der relative Verlust beträgt jedoch $\\frac{7}{8}$ ($87{,}5\\,\\%$); $\\frac{1}{8}$ ist der verbleibende Restanteil, nicht die Abnahme.",
      D: "$50\\,\\text{MBq}$ entspräche 4 Halbwertszeiten ($440\\,\\text{Minuten}$).",
      E: "$266{,}7\\,\\text{MBq}$ nähme fälschlicherweise eine lineare Abnahme anstelle eines exponentiellen Zerfalls an."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Vektorrechnung (math-06-vektorrechnung) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "MATH-BMS-GP2-011",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "Skalarprodukt & Schnittwinkel zweier Vektoren",
    difficulty: "intermediate",
    stem: "Gegeben sind die beiden dreidimensionalen Vektoren\n$$\\vec{u} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} \\quad \\text{und} \\quad \\vec{w} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}.$$\nWelchen Schnittwinkel $\\varphi$ schließen diese beiden Vektoren im Raum miteinander ein?",
    options: {
      A: "$\\varphi = 30^\\circ$",
      B: "$\\varphi = 45^\\circ$",
      C: "$\\varphi = 90^\\circ$",
      D: "$\\varphi = 120^\\circ$",
      E: "$\\varphi = 60^\\circ$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Skalarprodukt $\\vec{u} \\cdot \\vec{w}$ komponentenweise berechnen:  \n$\\vec{u} \\cdot \\vec{w} = 1 \\cdot 0 + 0 \\cdot 1 + 1 \\cdot 1 = 0 + 0 + 1 = 1$.  \nSchritt 2: Beträge (Längen) der Vektoren bestimmen:  \n$|\\vec{u}| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{1 + 0 + 1} = \\sqrt{2}$.  \n$|\\vec{w}| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{0 + 1 + 1} = \\sqrt{2}$.  \nSchritt 3: Kosinus des eingeschlossenen Winkels über die Winkelformel berechnen:  \n$\\cos(\\varphi) = \\frac{\\vec{u} \\cdot \\vec{w}}{|\\vec{u}| \\cdot |\\vec{w}|} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$.  \nSchritt 4: Winkel bestimmen:  \n$\\varphi = \\arccos\\left(\\frac{1}{2}\\right) = 60^\\circ$.",
    explanations_incorrect: {
      A: "$\\varphi = 30^\\circ$ entspricht $\\cos(30^\\circ) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$.",
      B: "$\\varphi = 45^\\circ$ entspricht $\\cos(45^\\circ) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$.",
      C: "$\\varphi = 90^\\circ$ träte nur auf, wenn das Skalarprodukt null wäre (orthogonale Vektoren).",
      D: "$\\varphi = 120^\\circ$ ergäbe sich bei einem negativen Kosinuswert von $-\\frac{1}{2}$."
    },
    metadata: {
      author: "MedAT BMS Mathematics QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "MATH-BMS-GP2-012",
    subject: "MATH",
    section: "BMS",
    primary_topic: "Vektorrechnung",
    subtopic: "Geradengleichung in Parameterform & Ebenendurchstoß",
    difficulty: "advanced",
    stem: "Eine Raumgerade $g$ ist in Parameterform gegeben durch:\n$$g:\\, \\vec{X} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}, \\quad t \\in \\mathbb{R}.$$\nWelche Koordinaten besitzt der Durchstoßpunkt $D(x \\mid y \\mid z)$, in dem die Gerade $g$ die $xy$-Koordinatenebene (Ebene mit der Gleichung $z = 0$) schneidet?",
    options: {
      A: "$D(5 \\mid 4 \\mid 0)$",
      B: "$D(3 \\mid 1 \\mid 0)$",
      C: "$D(7 \\mid 7 \\mid 0)$",
      D: "$D(-5 \\mid -11 \\mid 0)$",
      E: "$D(7 \\mid -11 \\mid 0)$"
    },
    correct_answer: "C",
    explanation_correct: "Schritt 1: Bedingung für Punkte in der $xy$-Koordinatenebene ist $z = 0$.  \nAus der dritter Zeile der Geradengleichung folgt:  \n$z(t) = 3 + t \\cdot (-1) = 3 - t = 0 \\implies t = 3$.  \nSchritt 2: Parameter $t = 3$ in die verbleibenden Komponenten einsetzen:  \n$x = 1 + 3 \\cdot 2 = 1 + 6 = 7$.  \n$y = -2 + 3 \\cdot 3 = -2 + 9 = 7$.  \n$z = 3 - 3 = 0$.  \nDer Durchstoßpunkt lautet somit $D(7 \\mid 7 \\mid 0)$.",
    explanations_incorrect: {
      A: "$D(5 \\mid 4 \\mid 0)$ entsteht bei fälschlichem Einsetzen von $t = 2$ ($x = 1 + 4 = 5, y = -2 + 6 = 4$, aber $z = 1 \\neq 0$).",
      B: "$D(3 \\mid 1 \\mid 0)$ entsteht bei $t = 1$ ($z = 2 \\neq 0$).",
      D: "$D(-5 \\mid -11 \\mid 0)$ entsteht durch einen Vorzeichenfehler bei der Parameterbestimmung ($3 - t = 0 \\implies t = -3$), wodurch $x = 1 - 6 = -5$ und $y = -2 - 9 = -11$ gerechnet werden.",
      E: "$D(7 \\mid -11 \\mid 0)$ entsteht, wenn für $x$ zwar korrekt $t = 3$ eingesetzt wird ($1 + 6 = 7$), bei der $y$-Komponente jedoch der Richtungsanteil fälschlicherweise subtrahiert statt addiert wird: $y = -2 - 3 \\cdot 3 = -2 - 9 = -11$."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
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
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #2 Runtime-Engine
 */
export const GENERALPROBE_2_MATH_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_MATH_QUESTIONS.map(
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
      tags: ["BMS", "Mathematik", "Generalprobe #2", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_gp2",
      setOrder: idx + 1,
    };
  }
);
