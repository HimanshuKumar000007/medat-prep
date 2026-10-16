/**
 * MedAT Chemie BMS — 24-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #1 (BMS Chemie-Testteil, exakt 24 Aufgaben).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - BMS gesamt: 94 Aufgaben (Biologie: 40, Chemie: 24, Physik: 18, Mathematik: 12).
 * 
 * Fachlich und terminologisch angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung (verifiziert aus Quelldaten):
 * - 6 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 12 Mittel (Intermediate) (50,0 %)
 * - 6 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel:
 * - A: 5, B: 5, C: 5, D: 4, E: 5 (Gesamt: 24)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcChemQuestionRaw {
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

export const RAW_GENERALPROBE_1_CHEM_QUESTIONS: QcChemQuestionRaw[] = [
  {
    "id": "CHEM-BMS-001",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Atombau und Mikrokosmos",
    "subtopic": "Nuklidnotation & Elementarteilchen",
    "difficulty": "foundational",
    "stem": "Ein einfach negativ geladenes Chlorid-Ion ($^{37}_{17}\\text{Cl}^-$) besitzt welche Anzahl an Protonen, Neutronen und Elektronen?",
    "options": {
      "A": "17 Protonen, 17 Neutronen und 18 Elektronen.",
      "B": "18 Protonen, 20 Neutronen und 17 Elektronen.",
      "C": "17 Protonen, 20 Neutronen und 18 Elektronen.",
      "D": "17 Protonen, 20 Neutronen und 17 Elektronen.",
      "E": "20 Protonen, 17 Neutronen und 18 Elektronen."
    },
    "correct_answer": "C",
    "explanation_correct": "Die Ordnungszahl (Kernladungszahl, unten links) $Z = 17$ definiert das Element Chlor und gibt die Zahl der Protonen an (17). Die Massenzahl (Nukleonenzahl, oben links) $A = 37$ entspricht der Summe aus Protonen und Neutronen. Die Neutronenzahl beträgt daher $N = A - Z = 37 - 17 = 20$. Als einfach negativ geladenes Anion ($\\text{Cl}^-$) besitzt das Teilchen genau ein Elektron mehr als Protonen: $17 + 1 = 18$ Elektronen (isoelektronisch mit dem Edelgas Argon).",
    "explanations_incorrect": {
      "A": "Bei 17 Neutronen ergäbe sich die Massenzahl $17 + 17 = 34$, nicht das gegebene Isotop Chlor-37.",
      "B": "Die Protonenzahl bestimmt die Elementidentität; 18 Protonen entsprächen einem Argon-Kern, nicht Chlor.",
      "D": "17 Elektronen entsprächen einem ungeladenen, neutralen Chloratom, nicht dem Chlorid-Anion $\\text{Cl}^-$.",
      "E": "Hier wurden Protonen- und Neutronenzahl vertauscht; ein Kern mit 20 Protonen wäre Calcium ($Z = 20$)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-002",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Atombau und Mikrokosmos",
    "subtopic": "Elektronenkonfiguration & Hund-Regel",
    "difficulty": "intermediate",
    "stem": "Welche Elektronenkonfiguration und welche Anzahl an ungepaarten Elektronen besitzt ein zweiwertiges Eisen-Kation ($\\text{Fe}^{2+}$, $Z = 26$) im quantenmechanischen Grundzustand?",
    "options": {
      "A": "$[\\text{Ar}]\\,3d^6$ mit 4 ungepaarten Elektronen.",
      "B": "$[\\text{Ar}]\\,3d^4\\,4s^2$ mit 4 ungepaarten Elektronen.",
      "C": "$[\\text{Ar}]\\,3d^6$ mit 0 ungepaarten Elektronen (diamagnetisch).",
      "D": "$[\\text{Ar}]\\,3d^5\\,4s^1$ mit 6 ungepaarten Elektronen.",
      "E": "$[\\text{Ar}]\\,3d^4$ mit 2 ungepaarten Elektronen."
    },
    "correct_answer": "A",
    "explanation_correct": "Ein neutrales Eisenatom ($Z = 26$) besitzt die Grundzustandskonfiguration $[\\text{Ar}]\\,3d^6\\,4s^2$. Bei der Ionisation von Übergangsmetallen der 4. Periode werden stets zuerst die energetisch weiter außen liegenden $4s$-Elektronen abgegeben. Für $\\text{Fe}^{2+}$ resultiert somit $[\\text{Ar}]\\,3d^6$. Nach der Hund'schen Regel werden die 5 entarteten $3d$-Orbitale zunächst einfach mit parallelem Spin besetzt, bevor eine Paarung erfolgt. Bei 6 Elektronen ist ein Orbital doppelt und vier Orbitale einfach besetzt $\\rightarrow 4$ ungepaarte Elektronen (stark paramagnetischer High-Spin-Zustand).",
    "explanations_incorrect": {
      "B": "Bei der Bildung von Übergangsmetall-Kationen werden die $4s$-Elektronen vor den $3d$-Elektronen abgegeben; Konfigurationen mit besetztem $4s$ liegen bei $\\text{Fe}^{2+}$ nicht vor.",
      "C": "Die fünf $3d$-Orbitale spalten im freien Ion nicht auf; 6 Elektronen verteilen sich nach Hund auf 4 ungepaarte und 1 gepaartes Orbital (nur im starken Ligandenfeld wäre Low-Spin mit 0 ungepaarten Elektronen möglich).",
      "D": "Dies entspräche einem neutralen angeregten Zustand mit 26 Elektronen, nicht dem Kation $\\text{Fe}^{2+}$ mit 24 Elektronen.",
      "E": "Die Abgabe von 2 Elektronen aus dem neutralen Atom entfernt die beiden $4s$-Elektronen, nicht zwei $3d$-Elektronen."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-003",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Gasgesetze und Aggregatzustände",
    "subtopic": "Ideales Gasgesetz & Stoffmengenberechnung",
    "difficulty": "intermediate",
    "stem": "Ein starrer Gasbehälter mit einem Volumen von $24{,}94\\text{ L}$ enthält bei einer Temperatur von $27\\text{ }^\\circ\\text{C}$ ($300{,}15\\text{ K}$) ein reines Gas unter einem Druck von $1{,}0 \\times 10^5\\text{ Pa}$ ($100\\text{ kPa}$). Welche Stoffmenge ($n$) und welche Masse ($m$) an molekularem Sauerstoffgas ($\\text{O}_2$, $M = 32{,}0\\text{ g/mol}$) befinden sich unter Annahme idealen Gasverhaltens im Behälter? (Universelle Gaskonstante $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$)",
    "options": {
      "A": "$0{,}10\\text{ mol}$ und $3{,}2\\text{ g}$.",
      "B": "$1{,}00\\text{ mol}$ und $32{,}0\\text{ g}$.",
      "C": "$2{,}00\\text{ mol}$ und $64{,}0\\text{ g}$.",
      "D": "$10{,}0\\text{ mol}$ und $320\\text{ g}$.",
      "E": "$0{,}50\\text{ mol}$ und $16{,}0\\text{ g}$."
    },
    "correct_answer": "B",
    "explanation_correct": "Gegeben sind: $p = 1{,}0 \\times 10^5\\text{ Pa} = 10^5\\text{ N/m}^2$, $V = 24{,}94\\text{ L} = 24{,}94 \\times 10^{-3}\\text{ m}^3$, $T = 27 + 273{,}15 = 300{,}15\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Nach dem idealen Gasgesetz gilt: $p \\cdot V = n \\cdot R \\cdot T \\Rightarrow n = \\frac{p \\cdot V}{R \\cdot T} = \\frac{10^5\\text{ Pa} \\cdot 24{,}94 \\times 10^{-3}\\text{ m}^3}{8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\cdot 300{,}15\\text{ K}} = \\frac{2494}{2495{,}4} \\approx 1{,}00\\text{ mol}$. Die Masse an $\\text{O}_2$ errechnet sich über $m = n \\cdot M = 1{,}00\\text{ mol} \\cdot 32{,}0\\text{ g/mol} = 32{,}0\\text{ g}$.",
    "explanations_incorrect": {
      "A": "Dieser Wert resultiert aus einem Einheitenfehler bei der Volumenumrechnung von Litern in Kubikmeter (Faktor 10 zu gering).",
      "C": "Dies wäre das Ergebnis, wenn fälschlicherweise das atomare Sauerstoffgewicht ($16\\text{ g/mol}$) für die Stoffmenge bei gegebener Masse herangezogen worden wäre.",
      "D": "Hier wurde der Druck in Bar ohne Umrechnung in Pascal ($10^5$) mit Litern ohne Umrechnung in $\\text{m}^3$ inkonsistent kombiniert.",
      "E": "Entspräche einem molaren Volumen von rund $50\\text{ L/mol}$, was bei $300\\text{ K}$ und $1\\text{ bar}$ physikalisch falsch ist."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-004",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Gasgesetze und Aggregatzustände",
    "subtopic": "Ideale Gasgesetze & Zustandsänderungen",
    "difficulty": "foundational",
    "stem": "Welche Aussage beschreibt das thermodynamische Verhalten eines idealen Gases bei einer isothermen, isobaren bzw. isochoren Zustandsänderung physikalisch korrekt?",
    "options": {
      "A": "Bei isothermer Kompression ($T = \\text{konst.}$) verdoppelt sich das Volumen, wenn der Druck verdoppelt wird.",
      "B": "Bei isobarer Erwärmung ($p = \\text{konst.}$) von $20\\text{ }^\\circ\\text{C}$ auf $40\\text{ }^\\circ\\text{C}$ verdoppelt sich das Gasvolumen.",
      "C": "Bei isochorer Zustandsänderung ($V = \\text{konst.}$) ist der Druck umgekehrt proportional zur Kelvin-Temperatur ($p \\cdot T = \\text{konst.}$).",
      "D": "Bei isobarer Abkühlung ($p = \\text{konst.}$) bleibt das Gasvolumen absolut unverändert.",
      "E": "Nach dem Gesetz von Boyle-Mariotte gilt bei isothermen Prozessen $p \\cdot V = \\text{konst.}$, während bei isobaren Prozessen das Volumen direkt proportional zur absoluten Temperatur in Kelvin ist ($V/T = \\text{konst.}$)."
    },
    "correct_answer": "E",
    "explanation_correct": "Für ein ideales Gas gelten je nach festgehaltener thermodynamischer Zustandsgröße die folgenden fundamentalen Gesetzmäßigkeiten:  \n• Isotherm ($T = \\text{konst.}$): Nach Boyle-Mariotte sind Druck und Volumen umgekehrt proportional zueinander ($p \\cdot V = \\text{konst.}$); eine Druckverdopplung halbiert das Volumen.  \n• Isobar ($p = \\text{konst.}$): Das Volumen ist direkt proportional zur absoluten Temperatur in Kelvin ($V/T = \\text{konst.}$ bzw. $V \\propto T$).  \n• Isochor ($V = \\text{konst.}$): Der Druck ist direkt proportional zur absoluten Temperatur in Kelvin ($p/T = \\text{konst.}$ bzw. $p \\propto T$).",
    "explanations_incorrect": {
      "A": "Bei isothermer Kompression halbiert sich das Volumen bei Verdopplung des Drucks (inverse Proportionalität: $V_2 = V_1 \\cdot p_1 / p_2$).",
      "B": "Die direkte Proportionalität gilt strikt für die absolute thermodynamische Temperatur in Kelvin: $T_1 = 293{,}15\\text{ K} \\rightarrow T_2 = 313{,}15\\text{ K}$. Das Volumen nimmt hierbei lediglich um ca. $6{,}8\\,\\%$ zu, es verdoppelt sich keineswegs.",
      "C": "Bei isochorer Erwärmung verhalten sich Druck und Kelvin-Temperatur direkt proportional ($p/T = \\text{konst.}$), nicht umgekehrt proportional.",
      "D": "Bei isobarer Abkühlung zieht sich das Gas proportional zur sinkenden Kelvin-Temperatur zusammen ($V \\propto T$); das Volumen nimmt messbar ab."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-005",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Periodensystem und chemische Bindungen",
    "subtopic": "Periodizität: Atomradien & Elektronegativität",
    "difficulty": "foundational",
    "stem": "Wie verändern sich die Elektronegativität und der kovalente Atomradius der Hauptgruppenelemente innerhalb einer Periode von links nach rechts im Periodensystem der Elemente?",
    "options": {
      "A": "Die Elektronegativität nimmt zu, und der Atomradius nimmt ab.",
      "B": "Die Elektronegativität nimmt ab, und der Atomradius nimmt zu.",
      "C": "Sowohl die Elektronegativität als auch der Atomradius nehmen zu.",
      "D": "Sowohl die Elektronegativität als auch der Atomradius nehmen ab.",
      "E": "Die Elektronegativität bleibt konstant, während der Atomradius sprunghaft ansteigt."
    },
    "correct_answer": "A",
    "explanation_correct": "Innerhalb einer Periode des Periodensystems von links nach rechts steigt die Kernladungszahl (Protonenzahl $Z$) sukzessive an, während die hinzukommenden Elektronen in dieselbe Hauptschale (Hauptquantenzahl $n$) eingebaut werden. Die Zunahme der effektiven Kernladung ($Z_{\\text{eff}}$) führt zu einer stärkeren elektrostatischen Anziehung der Valenzelektronen: Der Atomradius nimmt kontinuierlich ab. Gleichzeitig steigt die Fähigkeit des Atoms, bindende Elektronenpaare an sich zu ziehen, sodass die Elektronegativität (EN) von den Alkalimetallen zu den Halogenen hin stark ansteigt (Fluor besitzt mit EN 4,0 den höchsten Wert).",
    "explanations_incorrect": {
      "B": "Dies beschreibt den Trend innerhalb einer Hauptgruppe von oben nach unten, nicht innerhalb einer Periode von links nach rechts.",
      "C": "Eine Zunahme beider Größen widerspricht der elektrostatischen Anziehungskraft der höheren Kernladung, die den Radius schrumpfen lässt.",
      "D": "Die Elektronegativität nimmt keineswegs ab, sondern erreicht bei den Halogenen der jeweiligen Periode ihr Maximum.",
      "E": "Weder bleibt die Elektronegativität konstant noch wächst der Radius; Sprünge im Radius treten erst beim Schalenwechsel zu einer neuen Periode auf."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-006",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Periodensystem und chemische Bindungen",
    "subtopic": "Ionenbindung & Gitterenergie",
    "difficulty": "intermediate",
    "stem": "Warum weist Magnesiumoxid ($\\text{MgO}$, Schmelzpunkt ~$2852\\text{ }^\\circ\\text{C}$) eine weitaus höhere Gitterenergie und einen drastisch höheren Schmelzpunkt auf als Natriumchlorid ($\\text{NaCl}$, Schmelzpunkt ~$801\\text{ }^\\circ\\text{C}$)?",
    "options": {
      "A": "Weil $\\text{MgO}$ im Gegensatz zu $\\text{NaCl}$ ein kovalentes Riesenmolekül mit dreidimensionalen Sigma-Bindungen bildet.",
      "B": "Weil Magnesiumchlorid durch Delokalisierung eines Elektronengases eine metallische Bindung verstärkt.",
      "C": "Weil im $\\text{MgO}$-Ionengitter zweiwertige Ionen ($\\text{Mg}^{2+}, \\text{O}^{2-}$) mit kleineren Ionenradien vorliegen, wodurch die elektrostatischen Coulomb-Kräfte proportional zum Ladungsprodukt $z_1 \\cdot z_2$ rund viermal stärker sind.",
      "D": "Weil Natriumchlorid bei Raumtemperatur durch intermolekulare Wasserstoffbrückenbindungen hydrolysiert.",
      "E": "Weil Sauerstoff ein Edelgas ist und dadurch eine stärkere sterische Hinderung im Kristallgitter hervorruft."
    },
    "correct_answer": "C",
    "explanation_correct": "Die Gitterenergie $E_{\\text{Gitter}}$ eines Ionenkristalls wird nach der Born-Landé- oder Kapustinskii-Gleichung maßgeblich durch das Coulomb-Gesetz bestimmt: $E_{\\text{Gitter}} \\sim \\frac{|z_1 \\cdot z_2|}{r_0}$. Für $\\text{NaCl}$ beträgt das Ionenladungsprodukt $|(+1) \\cdot (-1)| = 1$. Für $\\text{MgO}$ beträgt es $|(+2) \\cdot (-2)| = 4$. Da $\\text{Mg}^{2+}$ (Ionenradius 72 pm) und $\\text{O}^{2-}$ (140 pm) zudem kleiner sind als $\\text{Na}^+$ (102 pm) und $\\text{Cl}^-$ (181 pm), ist der Ionenabstand $r_0$ kleiner. Die elektrostatische Anziehungskraft in $\\text{MgO}$ ist folglich rund viermal größer als in $\\text{NaCl}$, was den extremen Schmelzpunkt von über $2850\\text{ }^\\circ\\text{C}$ erklärt.",
    "explanations_incorrect": {
      "A": "$\\text{MgO}$ ist ein klassischer Ionenkristall (Halit-Typ) und kein kovalentes Netzwerk wie Diamant oder Siliciumdioxid.",
      "B": "In $\\text{MgO}$ liegt Ionenbindung vor, keine metallische Bindung mit frei beweglichen Leitungsbandelektronen.",
      "D": "$\\text{NaCl}$ bildet als Reinsubstanz keine H-Brücken aus; die Wasserlöslichkeit beruht auf Hydratation, erklärt aber nicht den Festkörper-Schmelzpunkt.",
      "E": "Sauerstoff ist ein Chalcogen (6. Hauptgruppe), kein Edelgas; das Oxid-Anion $\\text{O}^{2-}$ besitzt Edelgaskonfiguration, übt aber keine sterische Hinderung aus."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-007",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Periodensystem und chemische Bindungen",
    "subtopic": "Mesomerie & Lewis-Formeln im Nitrat-Ion",
    "difficulty": "advanced",
    "stem": "Welche Aussage beschreibt die elektronische Struktur, Molekülgeometrie und Bindungsverhältnisse im Nitrat-Anion ($\\text{NO}_3^-$) korrekt?",
    "options": {
      "A": "Es besitzt eine pyramidale Struktur mit einem freien Elektronenpaar am Stickstoffatom und der Oxidationszahl $+3$.",
      "B": "Es enthält zwei kovalente Einfachbindungen und eine starre Doppelbindung, die sich experimentell durch unterschiedliche Bindungslängen nachweisen lassen.",
      "C": "Die Bindungswinkel betragen exakt $109{,}5^\\circ$ infolge tetraedrischer $sp^3$-Hybridisierung des zentralen Stickstoffs.",
      "D": "Das Anion ist ungeladen, da die drei Sauerstoffatome jeweils zwei Elektronen auf den Stickstoff übertragen.",
      "E": "Es ist trigonal-planar gebaut ($120^\\circ$-Winkel, $sp^2$-Hybridisierung) mit drei energetisch und strukturell völlig identischen N-O-Bindungen infolge von $\\pi$-Elektronendelokalisierung (Mesomerie)."
    },
    "correct_answer": "E",
    "explanation_correct": "Das Nitrat-Ion ($\\text{NO}_3^-$) besitzt 24 Valenzelektronen. Das zentrale Stickstoffatom ist $sp^2$-hybridisiert und bildet mit den drei Sauerstoffatomen ein trigonal-planares Gerüst mit Bindungswinkeln von exakt $120^\\circ$. Gemäß der Valenzbindungstheorie lässt sich $\\text{NO}_3^-$ durch drei gleichwertige mesomere Grenzstrukturen beschreiben, in denen sich formal jeweils eine Doppelbindung und zwei Einfachbindungen abwechseln. In der realen Elektronenverteilung sind die $\\pi$-Elektronen vollkommen über alle vier Atome delokalisiert. Alle drei N-O-Bindungen sind absolut identisch (Bindungslänge 124 pm, Bindungsordnung $1{,}33$). Die formale Oxidationszahl des Stickstoffs beträgt $+5$.",
    "explanations_incorrect": {
      "A": "Trigonal-pyramidal mit freiem Elektronenpaar ist das Nitrit-Ion ($\\text{NO}_2^-$) oder Ammoniak; $\\text{NO}_3^-$ besitzt kein freies Elektronenpaar am N und hat N in der Oxidationsstufe $+5$.",
      "B": "Röntgenstrukturanalysen belegen, dass alle drei N-O-Bindungslängen exakt identisch sind; es gibt keine isolierte Doppel- oder Einfachbindung.",
      "C": "Der Tetraederwinkel von $109{,}5^\\circ$ tritt bei $sp^3$-Hybridisierung auf (z. B. im Ammonium-Ion $\\text{NH}_4^+$); $\\text{NO}_3^-$ ist planar ($120^\\circ$).",
      "D": "Das Nitrat-Ion trägt eine reale Gesamtladung von $-1$, da die Summe der Valenzelektronen die Kernladungen um 1 übersteigt."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-008",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Stöchiometrie und chemische Reaktionen",
    "subtopic": "Mol, Avogadro-Zahl & Teilchenzahl",
    "difficulty": "foundational",
    "stem": "In einer Stoffportion von $36{,}0\\text{ g}$ reinem Wasser ($\\text{H}_2\\text{O}$, $M = 18{,}0\\text{ g/mol}$) sind wie viele Wassermoleküle und wie viele Wasserstoffatome enthalten? (Avogadro-Konstante $N_A \\approx 6{,}022 \\times 10^{23}\\text{ mol}^{-1}$)",
    "options": {
      "A": "$1{,}204 \\times 10^{24}$ Wassermoleküle und $2{,}409 \\times 10^{24}$ Wasserstoffatome.",
      "B": "$6{,}022 \\times 10^{23}$ Wassermoleküle und $6{,}022 \\times 10^{23}$ Wasserstoffatome.",
      "C": "$3{,}011 \\times 10^{23}$ Wassermoleküle und $6{,}022 \\times 10^{23}$ Wasserstoffatome.",
      "D": "$2{,}409 \\times 10^{24}$ Wassermoleküle und $1{,}204 \\times 10^{24}$ Wasserstoffatome.",
      "E": "$1{,}204 \\times 10^{23}$ Wassermoleküle und $3{,}613 \\times 10^{24}$ Wasserstoffatome."
    },
    "correct_answer": "A",
    "explanation_correct": "Schritt 1: Stoffmenge des Wassers berechnen: $n(\\text{H}_2\\text{O}) = \\frac{m}{M} = \\frac{36{,}0\\text{ g}}{18{,}0\\text{ g/mol}} = 2{,}00\\text{ mol}$.  \nSchritt 2: Anzahl der Wassermoleküle: $N(\\text{H}_2\\text{O}) = n \\cdot N_A = 2{,}00\\text{ mol} \\cdot 6{,}022 \\times 10^{23}\\text{ mol}^{-1} = 1{,}204 \\times 10^{24}$ Moleküle.  \nSchritt 3: Anzahl der Wasserstoffatome: Da jedes Wassermolekül genau 2 Wasserstoffatome enthält, beträgt die Stoffmenge der H-Atome $n(\\text{H}) = 2 \\cdot 2{,}00\\text{ mol} = 4{,}00\\text{ mol}$.  \nAnzahl der H-Atome: $N(\\text{H}) = 4{,}00\\text{ mol} \\cdot 6{,}022 \\times 10^{23}\\text{ mol}^{-1} = 2{,}409 \\times 10^{24}$ Atome.",
    "explanations_incorrect": {
      "B": "Dies entspräche einer Stoffmenge von genau $1{,}0\\text{ mol}$ Wasser ($18\\text{ g}$), ignoriert jedoch die vorliegenden $36\\text{ g}$ sowie den Faktor 2 für H.",
      "C": "Entspräche $0{,}5\\text{ mol}$ Wasser ($9\\text{ g}$) und unterschlägt die tatsächliche Stoffmenge um das Vierfache.",
      "D": "Hier wurden die Anzahlen an Wassermolekülen und Wasserstoffatomen vertauscht.",
      "E": "Ein Zehnerpotenzfehler bei den Molekülen ($10^{23}$ statt $10^{24}$) sowie ein falscher Stöchiometriefaktor bei den Atomen."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-009",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Stöchiometrie und chemische Reaktionen",
    "subtopic": "Limitierendes Reagenz & theoretische Ausbeute",
    "difficulty": "advanced",
    "stem": "Für die Ammoniaksynthese gilt: $\\text{N}_2\\text{ (g)} + 3\\,\\text{H}_2\\text{ (g)} \\rightarrow 2\\,\\text{NH}_3\\text{ (g)}$. Ein geschlossener Reaktor wird mit $2{,}0\\text{ mol }\\text{N}_2$ und $3{,}0\\text{ mol }\\text{H}_2$ befüllt. Die Reaktion läuft bis zum vollständigen Verbrauch des limitierenden Reaktanten ab. Welcher Stoff ist limitierend, und welche Stoffmenge an Ammoniak entsteht theoretisch maximal?",
    "options": {
      "A": "Stickstoff ($\\text{N}_2$) ist limitierend; es entstehen $4{,}0\\text{ mol }\\text{NH}_3$.",
      "B": "Weder $\\text{N}_2$ noch $\\text{H}_2$ ist limitierend; es entstehen stöchiometrisch exakt $5{,}0\\text{ mol }\\text{NH}_3$.",
      "C": "Wasserstoff ($\\text{H}_2$) ist limitierend; es entsteht lediglich $1{,}0\\text{ mol }\\text{NH}_3$.",
      "D": "Stickstoff ($\\text{N}_2$) ist limitierend; es entstehen $2{,}0\\text{ mol }\\text{NH}_3$.",
      "E": "Wasserstoff ($\\text{H}_2$) ist limitierend; es entstehen $2{,}0\\text{ mol }\\text{NH}_3$ (und $1{,}0\\text{ mol }\\text{N}_2$ verbleibt unumgesetzt)."
    },
    "correct_answer": "E",
    "explanation_correct": "Gemäß der Reaktionsgleichung reagieren Stickstoff und Wasserstoff im Stoffmengenverhältnis $n(\\text{N}_2) : n(\\text{H}_2) = 1 : 3$. Für die vollständige Umsetzung von $2{,}0\\text{ mol }\\text{N}_2$ wären $2{,}0 \\cdot 3 = 6{,}0\\text{ mol }\\text{H}_2$ erforderlich. Da jedoch nur $3{,}0\\text{ mol }\\text{H}_2$ vorhanden sind, ist Wasserstoff der limitierende Reaktant. Aus $3{,}0\\text{ mol }\\text{H}_2$ können maximal $n(\\text{NH}_3) = \\frac{2}{3} \\cdot n(\\text{H}_2) = \\frac{2}{3} \\cdot 3{,}0\\text{ mol} = 2{,}0\\text{ mol }\\text{NH}_3$ gebildet werden. Dabei wird $1{,}0\\text{ mol }\\text{N}_2$ verbraucht, sodass $2{,}0 - 1{,}0 = 1{,}0\\text{ mol }\\text{N}_2$ unumgesetzt im Reaktor verbleibt.",
    "explanations_incorrect": {
      "A": "Würde $\\text{N}_2$ limitierend sein, bräuchte man $6\\text{ mol }\\text{H}_2$, die nicht zur Verfügung stehen.",
      "B": "Dies addiert unzulässig die Eduktstoffmengen ($2 + 3 = 5$), verletzt die Atombilanz und ignoriert die Reaktionsstöchiometrie.",
      "C": "Wasserstoff ist zwar limitierend, aber aus $3\\text{ mol }\\text{H}_2$ entstehen stöchiometrisch 2 Mol $\\text{NH}_3$, nicht 1 Mol.",
      "D": "Stickstoff liegt im Überschuss vor, da nach Verbrauch allen Wasserstoffs noch die Hälfte des Stickstoffs übrig ist."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-010",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Stöchiometrie und chemische Reaktionen",
    "subtopic": "Stoffmengenkonzentration & Einwaage",
    "difficulty": "intermediate",
    "stem": "Wie viel Gramm festes Natriumhydroxid ($\\text{NaOH}$, $M = 40{,}0\\text{ g/mol}$) müssen in Wasser gelöst werden, um genau $250\\text{ mL}$ einer wässrigen Maßlösung mit der Stoffmengenkonzentration $c = 0{,}50\\text{ mol/L}$ herzustellen?",
    "options": {
      "A": "$2{,}50\\text{ g}$",
      "B": "$5{,}00\\text{ g}$",
      "C": "$10{,}0\\text{ g}$",
      "D": "$20{,}0\\text{ g}$",
      "E": "$1{,}25\\text{ g}$"
    },
    "correct_answer": "B",
    "explanation_correct": "Schritt 1: Volumen in Liter umrechnen: $V = 250\\text{ mL} = 0{,}250\\text{ L}$.  \nSchritt 2: Benötigte Stoffmenge $n$ an $\\text{NaOH}$ berechnen: $n = c \\cdot V = 0{,}50\\text{ mol/L} \\cdot 0{,}250\\text{ L} = 0{,}125\\text{ mol}$.  \nSchritt 3: Masse $m$ an $\\text{NaOH}$ berechnen: $m = n \\cdot M = 0{,}125\\text{ mol} \\cdot 40{,}0\\text{ g/mol} = 5{,}00\\text{ g}$.",
    "explanations_incorrect": {
      "A": "Dieser Wert resultiert, wenn man irrtümlich mit einer Konzentration von $0{,}25\\text{ mol/L}$ rechnet oder das Volumen halbiert.",
      "C": "Dies wäre die Einwaage für einen halben Liter ($500\\text{ mL}$) oder für eine $1{,}0\\text{ mol/L}$-Lösung in $250\\text{ mL}$.",
      "D": "Entspräche der Einwaage für einen vollen Liter Lösung ($1000\\text{ mL}$) bei $c = 0{,}50\\text{ mol/L}$.",
      "E": "Entsteht durch Division statt Multiplikation mit dem Volumen ($0{,}125 / 10$ bzw. Rechenfehler)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-011",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Chemisches Gleichgewicht und Kinetik",
    "subtopic": "Reaktionskinetik & Katalysatorwirkung",
    "difficulty": "foundational",
    "stem": "Welche Wirkung hat der Zusatz eines Katalysators auf eine chemische Gleichgewichtsreaktion?",
    "options": {
      "A": "Er eröffnet einen alternativen Reaktionsweg mit verringerter Aktivierungsenergie für Hin- und Rückreaktion und beschleunigt die Einstellung des Gleichgewichts, ohne die Gleichgewichtskonstante ($K$) zu verändern.",
      "B": "Er verschiebt die Gleichgewichtslage auf die Seite der Produkte und erhöht den numerischen Wert der Gleichgewichtskonstante ($K$).",
      "C": "Er erniedrigt die freie Standardreaktionsenthalpie ($\\Delta G^\\circ$) und macht thermodynamisch endergone Reaktionen freiwillig.",
      "D": "Er beschleunigt selektiv ausschließlich die Hinreaktion, während er die Rückreaktion kinetisch hemmt.",
      "E": "Er erhöht die kinetische Energie der Moleküle durch permanente Zufuhr thermischer Wärmeenergie."
    },
    "correct_answer": "A",
    "explanation_correct": "Ein Katalysator greift in den mikroskopischen Reaktionsmechanismus ein, indem er einen alternativen Reaktionspfad mit neuen Zwischenstufen und Übergangszuständen bereitstellt, der eine signifikant niedrigere Aktivierungsenergie ($E_A$) aufweist. Da der katalysierte Reaktionspfad reversibel ist, wird die Aktivierungsbarriere für Hin- und Rückreaktion gleichermaßen herabgesetzt, sodass Hin- und Rückreaktionsgeschwindigkeit im gleichen Verhältnis gesteigert werden.  \nDa die thermodynamische Gleichgewichtskonstante $K$ ausschließlich über die Differenz der freien Standardenthalpie der stabilen Endzustände bestimmt wird ($\\Delta G^\\circ = -R \\cdot T \\cdot \\ln K$) und diese Zustandsgröße wegunabhängig ist, bleiben die Lage des chemischen Gleichgewichts sowie der numerische Wert von $K$ durch den Katalysator vollkommen unbeeinflusst. Ein Katalysator beschleunigt somit lediglich das Erreichen des Gleichgewichtszustands, verschiebt diesen jedoch nicht.",
    "explanations_incorrect": {
      "B": "Die Gleichgewichtskonstante $K$ ist eine thermodynamische Zustandsgröße und ausschließlich temperaturabhängig; ein Katalysator ändert weder $K$ noch die Gleichgewichtslage.",
      "C": "Die freie Enthalpie $\\Delta G^\\circ$ hängt ausschließlich vom Zustand der Edukte und Produkte ab (Wegunabhängigkeit); ein Katalysator kann eine thermodynamisch endergone Reaktion ($\\Delta G^\\circ > 0$) nicht exergon machen.",
      "D": "Eine selektive Beschleunigung nur einer Richtung würde das Prinzip der mikroskopischen Reversibilität und den 2. Hauptsatz der Thermodynamik verletzen.",
      "E": "Ein Katalysator verändert nicht die Maxwell-Boltzmann-Geschwindigkeitsverteilung der Moleküle; er führt dem System keine Wärmeenergie zu."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-012",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Chemisches Gleichgewicht und Kinetik",
    "subtopic": "Prinzip von Le Chatelier",
    "difficulty": "intermediate",
    "stem": "Die technische Synthese von Methanol verläuft gemäß der Gleichgewichtsreaktion: $\\text{CO (g)} + 2\\,\\text{H}_2\\text{ (g)} \\rightleftharpoons \\text{CH}_3\\text{OH (g)}$ mit $\\Delta H^\\circ = -90{,}7\\text{ kJ/mol}$. Welche Kombination von Reaktionsbedingungen maximiert nach dem Prinzip des kleinsten Zwanges (Le Chatelier) die Gleichgewichtsausbeute an Methanol?",
    "options": {
      "A": "Niedriger Gesamtdruck und hohe Temperatur.",
      "B": "Hoher Gesamtdruck und niedrige Temperatur.",
      "C": "Niedriger Gesamtdruck und niedrige Temperatur bei kontinuierlicher Zufuhr von Methanoldampf.",
      "D": "Hoher Gesamtdruck und hohe Temperatur.",
      "E": "Atmosphärischer Druck bei kontinuierlicher Zufuhr eines Edelgases unter isochoren Bedingungen."
    },
    "correct_answer": "B",
    "explanation_correct": "Zwei thermodynamische Faktoren bestimmen die Gleichgewichtslage nach Le Chatelier:  \n1. Thermischer Einfluss: Die Reaktion ist exotherm ($\\Delta H^\\circ < 0$). Eine Temperaturerniedrigung entzieht dem System Wärme, wodurch das Gleichgewicht zur Seite der Wärmefreisetzung, also zu den Produkten (Methanol), verschoben wird.  \n2. Druckeinfluss: Auf der Eduktseite liegen $1 + 2 = 3\\text{ mol}$ Gas vor, auf der Produktseite nur $1\\text{ mol}$ Gas. Eine Druckerhöhung zwingt das System zum Ausweichen auf die Seite mit dem kleineren Molvolumen (weniger Gasteilchen), mithin nach rechts.  \nSomit maximieren hoher Druck und niedrige Temperatur die thermodynamische Produktausbeute.",
    "explanations_incorrect": {
      "A": "Niedriger Druck begünstigt die Seite mit mehr Gasteilchen (Edukte); hohe Temperatur begünstigt die endotherme Rückreaktion.",
      "C": "Die Zufuhr von Produkt (Methanol) verschiebt das Gleichgewicht nach dem Massenwirkungsgesetz nach links zu den Edukten.",
      "D": "Hohe Temperatur verschiebt das Gleichgewicht bei exothermen Reaktionen drastisch auf die Eduktseite und senkt die Ausbeute.",
      "E": "Zusatz eines Inertgases bei konstantem Volumen ändert die Partialdrücke der Reaktanten nicht und hat keinen Einfluss auf die Gleichgewichtslage."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-013",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Elemente und ihre Verbindungen",
    "subtopic": "Wasserstoff, Isotope & Hydride",
    "difficulty": "intermediate",
    "stem": "Welche Aussage über elementaren Wasserstoff ($\\text{H}_2$), seine Isotope und seine chemischen Bindungsformen ist zutreffend?",
    "options": {
      "A": "Wasserstoff ist das am leichtesten zu verflüssigende Gas, da zwischen den Molekülen extrem starke Dipolkräfte wirken.",
      "B": "Das Wasserstoffisotop Tritium ($^3\\text{H}$) ist ein stabiler $\\alpha$-Strahler und besitzt 2 Protonen und 1 Neutron.",
      "C": "In der explosiven Knallgasreaktion ($2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$) wirkt Wasserstoff als Reduktionsmittel; in ionischen Metallhydriden wie $\\text{NaH}$ besitzt Wasserstoff die Oxidationszahl $-1$.",
      "D": "Wasserstoff bildet mit Halogenen kovalente Moleküle, die in wässriger Lösung allesamt als schwache Basen reagieren.",
      "E": "Wasserstoffatome besitzen im Grundzustand zwei Valenzelektronen im 1s-Orbital."
    },
    "correct_answer": "C",
    "explanation_correct": "Bei der Knallgasreaktion wird Wasserstoff von der Oxidationsstufe 0 zu $+1$ (in $\\text{H}_2\\text{O}$) oxidiert und fungiert somit als Reduktionsmittel (Elektronendonator für Sauerstoff). In ionischen Salzhypolen Metallhydriden mit stark elektropositiven Alkalimetallen (wie $\\text{NaH}$ oder $\\text{CaH}_2$) nimmt das Wasserstoffatom ein Elektron auf, bildet das Hydrid-Anion ($\\text{H}^-$ mit Heliumkonfiguration $1s^2$) und besitzt die seltene Oxidationszahl $-1$.",
    "explanations_incorrect": {
      "A": "Wasserstoff ist unpolar und besitzt nach Helium den zweitniedrigsten Siedepunkt aller Stoffe ($-253\\text{ }^\\circ\\text{C}$); er verflüssigt sich extrem schwer.",
      "B": "Tritium ($^3\\text{H}$) ist instabil (radioaktiver $\\beta^-$-Strahler, Halbwertszeit 12,3 Jahre) und besitzt 1 Proton und 2 Neutronen.",
      "D": "Halogenwasserstoffe ($\\text{HCl}, \\text{HBr}, \\text{HI}$) sind starke Brønsted-Säuren, keine Basen.",
      "E": "Das neutrale Wasserstoffatom besitzt im Grundzustand genau 1 Elektron ($1s^1$)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-014",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Elemente und ihre Verbindungen",
    "subtopic": "Kohlenstoffoxide: CO vs. CO2",
    "difficulty": "intermediate",
    "stem": "Kohlenstoffmonoxid ($CO$) und Kohlenstoffdioxid ($CO_2$) unterscheiden sich fundamental in ihren chemischen Bindungen, Geometrien und toxikologischen Wirkungen. Welche Gegenüberstellung ist physikalisch-chemisch und physiologisch korrekt?",
    "options": {
      "A": "$CO$ ist ein unpolares Gas mit gewinkelter Geometrie, das im Organismus als potenter Vasokonstriktor wirkt.",
      "B": "$CO_2$ besitzt infolge seiner gewinkelten Struktur ein starkes permanentes Dipolmoment und reagiert mit Wasser als starke zweiprotonige Mineralsäure.",
      "C": "$CO$ blockiert die zelluläre Atmung ausschließlich durch Hemmung der Glykolyse im Cytosol.",
      "D": "$CO$ besitzt eine Dreifachbindung mit schwachem Dipolmoment und bindet mit ca. 200- bis 300-fach höherer Affinität als Sauerstoff an das Häm-Eisen des Hämoglobins; $CO_2$ ist linear, unpolar und bildet in Wasser ein schwaches Säuregleichgewicht.",
      "E": "$CO_2$ ist brennbar und wird durch unvollständige Verbrennung von Methan gewonnen, während $CO$ das Endprodukt vollständiger Verbrennungen darstellt."
    },
    "correct_answer": "D",
    "explanation_correct": "Kohlenstoffmonoxid ($:C \\equiv O:$) besitzt eine Dreifachbindung (inklusive einer koordinativen Bindung vom Sauerstoff zum Kohlenstoff) und bindet kompetitiv an das zweiwertige Eisen ($Fe^{2+}$) des Hämoglobins. Die Bindungsaffinität ist etwa 200- bis 300-mal höher als jene von $O_2$, was zur Bildung von Carboxyhämoglobin (CO-Hb), einer Linksverschiebung der Sauerstoffbindungskurve und schwerer Gewebshypoxie führt. Im Gegensatz dazu ist $CO_2$ ein unpolares, lineares Molekül ($O=C=O$), dessen Bindungsdipole sich geometrisch exakt aufheben; gelöst in Wasser hydratisiert es nur zu einem geringen Bruchteil (~0,2 %) zu Kohlensäure ($H_2CO_3$), einer schwachen Säure.",
    "explanations_incorrect": {
      "A": "Zwei-atomige Moleküle wie $CO$ sind zwangsläufig linear, niemals gewinkelt; $CO$ besitzt ein messbares Dipolmoment.",
      "B": "Das $CO_2$-Molekül ist linear ($180^\\circ$) und apolar ($D = 0$); Kohlensäure ist eine schwache Säure ($pK_{S1} \\approx 6{,}35$ scheinbar).",
      "C": "$CO$ hemmt primär den Sauerstofftransport im Blut via Hämoglobin sowie die Cytochrom-c-Oxidase (Komplex IV) der mitochondrialen Atmungskette, nicht die Enzyme der cytosolischen Glykolyse.",
      "E": "$CO_2$ ist das nicht brennbare Endprodukt vollständiger Verbrennungen (C in maximaler Oxidationsstufe $+4$), während $CO$ bei unvollständiger Sauerstoffzufuhr entsteht und selbst noch brennbar ist ($2\\,CO + O_2 \\rightarrow 2\\,CO_2$)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-015",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Säuren, Basen und Salze",
    "subtopic": "Brønsted-Säure-Base-Paare & Ampholyte",
    "difficulty": "foundational",
    "stem": "Welche Aussage über Säure-Base-Paare nach dem Brønsted-Lowry-Konzept und ampholytische Teilchen ist zutreffend?",
    "options": {
      "A": "Eine Brønsted-Base ist ein Elektronenpaardonator; konjugierte Säure-Base-Paare unterscheiden sich um genau zwei Protonen.",
      "B": "Das Dihydrogenphosphat-Ion ($H_2PO_4^-$) kann nur als Säure, niemals als Base fungieren.",
      "C": "Die konjugierte Säure zum Sulfat-Anion ($SO_4^{2-}$) ist die Schwefelsäure ($H_2SO_4$).",
      "D": "Konjugierte Säure-Base-Paare unterscheiden sich stets um genau ein Proton ($H^+$); das Hydrogencarbonat-Ion ($HCO_3^-$) reagiert als Ampholyt sowohl als Protonendonator als auch als Protonenakzeptor.",
      "E": "Je stärker eine Brønsted-Säure ist, desto stärker ist auch ihre korrespondierende konjugierte Base."
    },
    "correct_answer": "D",
    "explanation_correct": "Nach Brønsted und Lowry ist eine Säure ein Protonendonator ($H^+$-Abgeber) und eine Base ein Protonenakzeptor ($H^+$-Aufnehmer). Ein korrespondierendes (konjugiertes) Säure-Base-Paar unterscheidet sich definitionsgemäß immer um exakt ein einzelnes Proton ($H^+$): $\\text{Säure} \\rightleftharpoons \\text{Base} + H^+$. Ampholyte (amphotere Teilchen) besitzen funktionelle Gruppen, mit denen sie je nach Reaktionspartner als Säure oder als Base agieren können. Hydrogencarbonat ($HCO_3^-$) kann als Säure ein Proton abgeben ($HCO_3^- + H_2O \\rightleftharpoons CO_3^{2-} + H_3O^+$) oder als Base ein Proton aufnehmen ($HCO_3^- + H_3O^+ \\rightleftharpoons H_2CO_3 + H_2O$).",
    "explanations_incorrect": {
      "A": "Elektronenpaardonatoren definieren Lewis-Basen; Brønsted-Basen sind Protonenakzeptoren, und konjugierte Paare unterscheiden sich um exakt ein Proton, nicht um zwei.",
      "B": "$H_2PO_4^-$ ist ein klassischer Ampholyt: Es kann als Säure zu $HPO_4^{2-}$ deprotonieren oder als Base zu $H_3PO_4$ protonieren.",
      "C": "Das konjugierte Paar zu $SO_4^{2-}$ ist das Hydrogensulfat-Ion ($HSO_4^-$), da sich das Paar um genau ein Proton unterscheiden muss; $H_2SO_4$ unterscheidet sich um zwei Protonen.",
      "E": "Es gilt die thermodynamische Reziprozität: Je stärker eine Säure (niedriger $pK_S$), desto schwächer ist ihre korrespondierende Base (hoher $pK_B$), da $pK_S + pK_B = 14$ bei $25\\text{ }^\\circ\\text{C}$."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-016",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Säuren, Basen und Salze",
    "subtopic": "Autoprotolyse des Wassers & Ionenprodukt Kw",
    "difficulty": "intermediate",
    "stem": "Reines Wasser unterliegt der Autoprotolyse: $2\\,H_2O \\rightleftharpoons H_3O^+ + OH^-$. Bei $25\\text{ }^\\circ\\text{C}$ beträgt das Ionenprodukt des Wassers $K_w = 1{,}0 \\times 10^{-14}\\text{ mol}^2/\\text{L}^2$. Da diese Reaktion endotherm ist ($\\Delta H > 0$), steigt der Wert von $K_w$ bei $37\\text{ }^\\circ\\text{C}$ auf ca. $2{,}4 \\times 10^{-14}\\text{ mol}^2/\\text{L}^2$. Welche Konsequenz ergibt sich daraus für reines Wasser bei physiologischer Körpertemperatur ($37\\text{ }^\\circ\\text{C}$)?",
    "options": {
      "A": "Der neutrale pH-Wert von reinem Wasser sinkt auf ca. $6{,}81$, dennoch bleibt das Wasser chemisch exakt neutral, da $[H_3O^+] = [OH^-]$ gilt.",
      "B": "Das Wasser wird bei Erwärmung chemisch sauer, da bei $37\\text{ }^\\circ\\text{C}$ die Konzentration der Hydronium-Ionen jene der Hydroxid-Ionen übersteigt.",
      "C": "Der pH-Wert von reinem Wasser bleibt stets strikt $7{,}00$, da sich der pH-Wert per Definition nicht mit der Temperatur ändern kann.",
      "D": "Der pH-Wert steigt auf $7{,}19$, da das Produkt $K_w$ größer geworden ist.",
      "E": "Die Summe aus $pH$ und $pOH$ beträgt bei $37\\text{ }^\\circ\\text{C}$ exakt $14{,}00$."
    },
    "correct_answer": "A",
    "explanation_correct": "Bei der Autoprotolyse von reinem Wasser entstehen stets stöchiometrisch gleiche Mengen an Hydronium- und Hydroxidionen: $[H_3O^+] = [OH^-]$. Neutralität bedeutet nicht zwingend $pH = 7{,}00$, sondern strikt $[H_3O^+] = [OH^-]$.  \nBei $37\\text{ }^\\circ\\text{C}$ gilt: $K_w = [H_3O^+]^2 = 2{,}4 \\times 10^{-14}\\text{ mol}^2/\\text{L}^2$.  \nDaraus folgt: $[H_3O^+] = \\sqrt{2{,}4 \\times 10^{-14}} \\approx 1{,}55 \\times 10^{-7}\\text{ mol/L}$.  \nDer neutrale pH-Wert beträgt: $pH = -\\lg(1{,}55 \\times 10^{-7}) \\approx 7 - \\lg(1{,}55) \\approx 7 - 0{,}19 = 6{,}81$.  \nDa gleichzeitig auch $[OH^-] = 1{,}55 \\times 10^{-7}\\text{ mol/L}$ ($pOH = 6{,}81$) ist, ist das Wasser thermodynamisch exakt neutral ($pK_w = pH + pOH = 13{,}62$).",
    "explanations_incorrect": {
      "B": "Wasser wird nicht sauer, da für jedes zusätzlich gebildete $H_3O^+$ zwingend auch ein $OH^-$ entsteht; $[H_3O^+] = [OH^-]$ bleibt streng erfüllt.",
      "C": "$pH = 7{,}00$ ist nur bei $25\\text{ }^\\circ\\text{C}$ der Neutralpunkt; Gleichgewichtskonstanten sind temperaturabhängig.",
      "D": "Ein höheres $K_w$ bedeutet höhere Konzentrationen von $[H_3O^+]$, was wegen der negativen logarithmischen Definition zu einem *kleineren* pH-Wert führt.",
      "E": "Bei $37\\text{ }^\\circ\\text{C}$ ist $pK_w = -\\lg(2{,}4 \\times 10^{-14}) \\approx 13{,}62$, sodass $pH + pOH = 13{,}62$ gilt, nicht $14{,}00$."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-017",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Säuren, Basen und Salze",
    "subtopic": "pH-Wert starker Basen: Bariumhydroxid",
    "difficulty": "intermediate",
    "stem": "In einem Laborversuch werden $0{,}0050\\text{ mol}$ festes Bariumhydroxid ($Ba(OH)_2$) in destilliertem Wasser gelöst und auf ein Gesamtvolumen von exakt $1{,}0\\text{ L}$ aufgefüllt ($25\\text{ }^\\circ\\text{C}$). Bariumhydroxid dissoziiert in Wasser vollständig. Welchen pH-Wert besitzt die resultierende Lösung?",
    "options": {
      "A": "$pH = 11{,}70$",
      "B": "$pH = 12{,}00$",
      "C": "$pH = 2{,}00$",
      "D": "$pH = 11{,}00$",
      "E": "$pH = 12{,}30$"
    },
    "correct_answer": "B",
    "explanation_correct": "Bariumhydroxid ist eine starke, zweibasige Base und dissoziiert in Wasser quantitativ gemäß:  \n$Ba(OH)_2\\text{ (s)} \\rightarrow Ba^{2+}\\text{ (aq)} + 2\\,OH^-\\text{ (aq)}$.  \nAus einer Konzentration von $c_0 = 0{,}0050\\text{ mol/L} = 5{,}0 \\times 10^{-3}\\text{ mol/L}$ resultiert daher die doppelte Hydroxidionen-Konzentration:  \n$[OH^-] = 2 \\times 0{,}0050\\text{ mol/L} = 0{,}010\\text{ mol/L} = 1{,}0 \\times 10^{-2}\\text{ mol/L}$.  \nBerechnung des pOH-Wertes:  \n$pOH = -\\lg[OH^-] = -\\lg(10^{-2}) = 2{,}00$.  \nÜber die Beziehung $pH + pOH = 14{,}00$ bei $25\\text{ }^\\circ\\text{C}$ folgt:  \n$pH = 14{,}00 - pOH = 14{,}00 - 2{,}00 = 12{,}00$.",
    "explanations_incorrect": {
      "A": "Dieser Wert resultiert, wenn man irrtümlich die Hydroxidionenkonzentration mit $0{,}005\\text{ mol/L}$ ansetzt ($pOH = 2{,}30 \\rightarrow pH = 11{,}70$), also den stöchiometrischen Dissoziationsfaktor 2 von $Ba(OH)_2$ vergisst.",
      "C": "$2{,}00$ ist der berechnete $pOH$-Wert, nicht der gesuchte $pH$-Wert der stark basischen Lösung.",
      "D": "Ein pH von 11,00 entspräche einer $[OH^-]$ von lediglich $10^{-3}\\text{ mol/L}$.",
      "E": "Dieser Wert entstünde bei einer vierfachen Dissoziation oder Rechenfehlern im Dekadischen Logarithmus."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-018",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Säuren, Basen und Salze",
    "subtopic": "Pufferlösungen & Henderson-Hasselbalch-Gleichung",
    "difficulty": "advanced",
    "stem": "Ein wässriger Acetatpuffer wird durch Mischen von Essigsäure ($CH_3COOH$, $pK_S = 4{,}75$) und Natriumacetat ($CH_3COONa$) hergestellt. In welchem molaren Konzentrationsverhältnis von Natriumacetat zu Essigsäure ($[Ac^-] : [HAc]$) muss der Puffer vorliegen, um einen Ziel-pH-Wert von genau $5{,}75$ einzustellen, und welcher pH-Bereich gilt allgemein als wirksamer Pufferbereich?",
    "options": {
      "A": "$[Ac^-] : [HAc] = 1 : 1$; Pufferbereich $pH = 0$ bis $14$.",
      "B": "$[Ac^-] : [HAc] = 1 : 10$; Pufferbereich $pK_S \\pm 2$.",
      "C": "$[Ac^-] : [HAc] = 10 : 1$; Pufferbereich $pK_S \\pm 1$ ($pH = 3{,}75$ bis $5{,}75$).",
      "D": "$[Ac^-] : [HAc] = 100 : 1$; Pufferbereich $pK_S \\pm 0{,}5$.",
      "E": "$[Ac^-] : [HAc] = 2 : 1$; Pufferbereich stets $pH = 7{,}35$ bis $7{,}45$."
    },
    "correct_answer": "C",
    "explanation_correct": "Nach der Henderson-Hasselbalch-Gleichung für ein Puffergemisch aus schwacher Säure und ihrer konjugierten Base gilt:  \n$pH = pK_S + \\lg\\left(\\frac{[A^-]}{[HA]}\\right)$.  \nFür den Ziel-pH $5{,}75$ und $pK_S = 4{,}75$:  \n$5{,}75 = 4{,}75 + \\lg\\left(\\frac{[Ac^-]}{[HAc]}\\right) \\Rightarrow \\lg\\left(\\frac{[Ac^-]}{[HAc]}\\right) = 5{,}75 - 4{,}75 = 1{,}00$.  \nEntlogarithmieren:  \n$\\frac{[Ac^-]}{[HAc]} = 10^{1{,}00} = 10 : 1$.  \nDas Stoffmengen- bzw. Konzentrationsverhältnis von Acetat zu Essigsäure muss folglich exakt $10:1$ betragen.  \nAls maximal wirksamer Pufferbereich gilt allgemein das Intervall $pK_S \\pm 1$ (entsprechend Komponentenverhältnissen zwischen $1:10$ und $10:1$), da außerhalb dieses Fensters die Pufferkapazität gegenüber Zugaben starker Säuren bzw. Basen drastisch absinkt.",
    "explanations_incorrect": {
      "A": "Bei $[Ac^-] : [HAc] = 1 : 1$ ist $\\lg(1) = 0$ und folglich $pH = pK_S = 4{,}75$, nicht $5{,}75$.",
      "B": "Ein Verhältnis von 1:10 ergäbe $\\lg(0{,}1) = -1$ und somit einen saureren Wert von $pH = 3{,}75$.",
      "D": "Ein Verhältnis von 100:1 ergäbe $\\lg(100) = 2$ und somit $pH = 6{,}75$; außerdem ist der Pufferbereich $pK_S \\pm 1$.",
      "E": "Ein Verhältnis von 2:1 ergäbe $pH = 4{,}75 + \\lg(2) \\approx 5{,}05$; das Intervall $7{,}35-7{,}45$ ist der physiologische pH-Bereich des Blutes (gepuffert durch das Bicarbonatsystem), nicht der Pufferbereich von Essigsäure."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-019",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Redox-Reaktionen und Elektrochemie",
    "subtopic": "Redoxgleichungen im Sauren & Stöchiometrieausgleich",
    "difficulty": "advanced",
    "stem": "In saurer wässriger Lösung oxidiert das Dichromat-Anion ($Cr_2O_7^{2-}$) Ethanol ($CH_3CH_2OH$) zu Essigsäure ($CH_3COOH$), wobei Dichromat zu Chrom(III)-Ionen ($Cr^{3+}$) reduziert wird. Welche Summe aller ganzzahligen stöchiometrischen Koeffizienten (inklusive aller Reaktanten und Produkte in der kleinsten ganzzahligen Form) ergibt sich für die vollständig ausgeglichene Redoxgleichung?",
    "options": {
      "A": "18",
      "B": "22",
      "C": "27",
      "D": "32",
      "E": "39"
    },
    "correct_answer": "E",
    "explanation_correct": "Schritt 1: Aufstellen der beiden Redox-Teilreaktionen:  \n• Reduktion:  \n$Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\rightarrow 2\\,Cr^{3+} + 7\\,H_2O$  \n(Zwei Chrom-Atome verringern ihre Oxidationsstufe von $+6$ auf $+3$, somit werden $6\\,e^-$ aufgenommen).  \n• Oxidation:  \n$CH_3CH_2OH + H_2O \\rightarrow CH_3COOH + 4\\,H^+ + 4\\,e^-$  \n(Das C-1-Atom wird von $-1$ im Ethanol auf $+3$ in der Essigsäure oxidiert, d. h. Abgabe von $4\\,e^-$).  \nSchritt 2: Elektronenausgleich (kgV von 6 und 4 ist 12):  \nReduktion $\\times 2$: $2\\,Cr_2O_7^{2-} + 28\\,H^+ + 12\\,e^- \\rightarrow 4\\,Cr^{3+} + 14\\,H_2O$  \nOxidation $\\times 3$: $3\\,CH_3CH_2OH + 3\\,H_2O \\rightarrow 3\\,CH_3COOH + 12\\,H^+ + 12\\,e^-$  \nSchritt 3: Zusammenfassen und Kürzen von $H^+$ und $H_2O$:  \nLinks $28\\,H^+$, rechts $12\\,H^+ \\Rightarrow$ Netto links: $16\\,H^+$.  \nLinks $3\\,H_2O$, rechts $14\\,H_2O \\Rightarrow$ Netto rechts: $11\\,H_2O$.  \nAusgeglichene Gesamtreaktionsgleichung:  \n$2\\,Cr_2O_7^{2-} + 3\\,CH_3CH_2OH + 16\\,H^+ \\rightarrow 4\\,Cr^{3+} + 3\\,CH_3COOH + 11\\,H_2O$.  \nSchritt 4: Summe sämtlicher Koeffizienten:  \n$2 + 3 + 16 + 4 + 3 + 11 = 39$.",
    "explanations_incorrect": {
      "A": "18 ist falsch; 18 unterschätzt die tatsächliche Koeffizientensumme von 39 erheblich. Die vollständige Summe aller ganzzahligen stöchiometrischen Faktoren der kleinsten ausgeglichenen Gesamtgleichung ($2\\,\\text{Cr}_2\\text{O}_7^{2-} + 3\\,\\text{CH}_3\\text{CH}_2\\text{OH} + 16\\,\\text{H}^+ \\rightarrow 4\\,\\text{Cr}^{3+} + 3\\,\\text{CH}_3\\text{COOH} + 11\\,\\text{H}_2\\text{O}$) umfasst alle sechs Reaktionspartner: $2 + 3 + 16 + 4 + 3 + 11 = 39$.",
      "B": "22 resultiert aus Fehlern bei der Ermittlung des kleinsten gemeinsamen Vielfachen der übertragenen Elektronen (z. B. fehlerhafte Koeffizientenverhältnisse).",
      "C": "27 entsteht, wenn die Oxidation fälschlich nur bis zur Zwischenstufe Acetaldehyd ($2\\,e^-$) anstelle der geforderten Essigsäure ($4\\,e^-$) bilanziert wird.",
      "D": "32 entsteht, wenn die Protonen und Wassermoleküle auf Edukt- und Produktseite vor der Summation nicht gegeneinander gekürzt werden."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-020",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Redox-Reaktionen und Elektrochemie",
    "subtopic": "Spannungsreihe & Reaktionsfreiwilligkeit",
    "difficulty": "advanced",
    "stem": "Gegeben sind folgende Standardreduktionspotenziale bei $25\\text{ }^\\circ\\text{C}$:  \n• $Ag^+ + e^- \\rightleftharpoons Ag$ ($E^\\circ = +0{,}80\\text{ V}$)  \n• $Fe^{3+} + e^- \\rightleftharpoons Fe^{2+}$ ($E^\\circ = +0{,}77\\text{ V}$)  \n• $Cu^{2+} + 2\\,e^- \\rightleftharpoons Cu$ ($E^\\circ = +0{,}34\\text{ V}$)  \n• $Fe^{2+} + 2\\,e^- \\rightleftharpoons Fe$ ($E^\\circ = -0{,}44\\text{ V}$)  \n• $Mg^{2+} + 2\\,e^- \\rightleftharpoons Mg$ ($E^\\circ = -2{,}37\\text{ V}$)  \nWelche der folgenden Redoxreaktionen läuft unter Standardbedingungen thermodynamisch freiwillig (exergon, $\\Delta G^\\circ < 0$) von links nach rechts ab?",
    "options": {
      "A": "$2\\,Ag\\text{ (s)} + Cu^{2+}\\text{ (aq)} \\rightarrow 2\\,Ag^+\\text{ (aq)} + Cu\\text{ (s)}$",
      "B": "$Fe\\text{ (s)} + Mg^{2+}\\text{ (aq)} \\rightarrow Fe^{2+}\\text{ (aq)} + Mg\\text{ (s)}$",
      "C": "$Cu\\text{ (s)} + 2\\,H^+\\text{ (aq)} \\rightarrow Cu^{2+}\\text{ (aq)} + H_2\\text{ (g)}$",
      "D": "$Cu\\text{ (s)} + 2\\,Fe^{3+}\\text{ (aq)} \\rightarrow Cu^{2+}\\text{ (aq)} + 2\\,Fe^{2+}\\text{ (aq)}$",
      "E": "$2\\,Fe^{2+}\\text{ (aq)} + Cu^{2+}\\text{ (aq)} \\rightarrow 2\\,Fe^{3+}\\text{ (aq)} + Cu\\text{ (s)}$"
    },
    "correct_answer": "D",
    "explanation_correct": "Eine Redoxreaktion ist unter Standardbedingungen freiwillig ($\\Delta G^\\circ < 0$), wenn die Standardzellspannung positiv ist: $\\Delta E^\\circ = E^\\circ(\\text{Reduktion}) - E^\\circ(\\text{Oxidation}) > 0$ (bzw. das Reduktionsmittel unedler / Potenzial negativer ist als jenes des Oxidationsmittels).  \nPrüfung für Option D:  \nReduktion: $Fe^{3+} + e^- \\rightarrow Fe^{2+}$ ($E^\\circ = +0{,}77\\text{ V}$)  \nOxidation: $Cu \\rightarrow Cu^{2+} + 2\\,e^-$ ($E^\\circ = +0{,}34\\text{ V}$)  \n$\\Delta E^\\circ = E^\\circ(Fe^{3+}/Fe^{2+}) - E^\\circ(Cu^{2+}/Cu) = +0{,}77\\text{ V} - 0{,}34\\text{ V} = +0{,}43\\text{ V} > 0$.  \nDa $\\Delta E^\\circ > 0$, ist $\\Delta G^\\circ = -z F \\Delta E^\\circ < 0$; Kupfer wird durch Eisen(III)-Ionen freiwillig oxidiert (wird technisch zum Ätzen von Kupferleiterplatten genutzt).",
    "explanations_incorrect": {
      "A": "$\\Delta E^\\circ = +0{,}34\\text{ V} - 0{,}80\\text{ V} = -0{,}46\\text{ V} < 0$; Silber ist edler als Kupfer und wird nicht durch $Cu^{2+}$ oxidiert.",
      "B": "$\\Delta E^\\circ = -2{,}37\\text{ V} - (-0{,}44\\text{ V}) = -1{,}93\\text{ V} < 0$; Magnesium ist viel unedler als Eisen.",
      "C": "Standardpotenzial der Standard-Wasserstoffelektrode ist $0{,}00\\text{ V}$. $\\Delta E^\\circ = 0{,}00\\text{ V} - (+0{,}34\\text{ V}) = -0{,}34\\text{ V} < 0$; edle Metalle wie Kupfer lösen sich nicht in nicht-oxidierenden Säuren unter Wasserstoffentwicklung.",
      "E": "Dies ist die Rückreaktion zu D: $\\Delta E^\\circ = +0{,}34\\text{ V} - 0{,}77\\text{ V} = -0{,}43\\text{ V} < 0$ (endergon)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-021",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Organische Chemie",
    "subtopic": "Isomerie bei Alkenen & Stereochemie",
    "difficulty": "intermediate",
    "stem": "Welche strukturelle Voraussetzung muss an einer Kohlenstoff-Kohlenstoff-Doppelbindung ($C=C$) erfüllt sein, damit geometrische Diastereomerie (cis/trans- bzw. E/Z-Isomerie) auftreten kann, und welche der folgenden Verbindungen existiert in solchen Stereoisomeren?",
    "options": {
      "A": "Mindestens ein $sp^2$-Kohlenstoffatom muss drei identische Substituenten tragen; Propen zeigt cis/trans-Isomerie.",
      "B": "An beiden $sp^2$-hybridisierten Kohlenstoffatomen der Doppelbindung müssen jeweils zwei voneinander verschiedene Substituenten gebunden sein; But-2-en existiert als cis- und trans-Isomer.",
      "C": "Die freie Drehbarkeit um die C=C-Doppelbindung muss thermisch bei Raumtemperatur uneingeschränkt möglich sein; Ethen zeigt Isomerie.",
      "D": "Die Verbindung muss mindestens ein asymmetrisches Kohlenstoffatom mit vier verschiedenen Substituenten besitzen; 2-Methylbut-2-en zeigt E/Z-Isomerie.",
      "E": "Es müssen mindestens zwei Dreifachbindungen im Molekül konjugiert vorliegen; But-1-en zeigt cis/trans-Isomerie."
    },
    "correct_answer": "B",
    "explanation_correct": "Die $C=C$-Doppelbindung besteht aus einer $\\sigma$- und einer $\\pi$-Bindung. Wegen der Überlappung der parallelen unhybridisierten $p$-Orbitale ist die Rotation um die Achse der Doppelbindung bei Raumtemperatur thermodynamisch gehindert (Rotationsbarriere ca. $260\\text{ kJ/mol}$).  \nDamit zwei sterisch unterscheidbare Konfigurationen existieren, müssen an *jedem* der beiden Doppelbindungs-Kohlenstoffatome ($C_1$ und $C_2$) zwei unterschiedliche Gruppen gebunden sein: $R_1 \\neq R_2$ und $R_3 \\neq R_4$.  \n• But-2-en ($CH_3-CH=CH-CH_3$): Jedes der beiden $sp^2$-C-Atome trägt ein $-H$ und eine $-CH_3$-Gruppe. Bei gleichseitiger Orientierung der Methylgruppen resultiert (Z)- bzw. cis-But-2-en, bei entgegengesetzter (E)- bzw. trans-But-2-en.  \n• Im Gegensatz dazu besitzt But-1-en ($CH_2=CH-CH_2-CH_3$) am C-1 zwei identische Wasserstoffatome ($-H$ und $-H$) und zeigt daher keine geometrische Isomerie.",
    "explanations_incorrect": {
      "A": "Ein $sp^2$-C-Atom mit identischen Substituenten (wie C-1 in Propen: $CH_2=CH-CH_3$ mit zwei Wasserstoffatomen) schließt cis/trans-Isomerie zwingend aus.",
      "C": "Gerade die *Hinderung* der Drehbarkeit ist die fundamentale physikalische Ursache für das Auftreten isolierbarer cis/trans-Isomere; freie Drehbarkeit würde Konformationen erzeugen.",
      "D": "2-Methylbut-2-en besitzt am C-2 zwei identische Methylgruppen ($(CH_3)_2C=CH-CH_3$) und zeigt daher *keine* E/Z-Isomerie; Chiralität (asymmetrisches C) ist für Enantiomerie zuständig, nicht zwingend für cis/trans.",
      "E": "Dreifachbindungen ($sp$-hybridisiert) sind linear ($180^\\circ$) und können prinzipiell keine cis/trans-Isomerie ausbilden; But-1-en zeigt keine cis/trans-Isomerie."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-022",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Organische Chemie",
    "subtopic": "Alkoholoxidation & funktionelle Gruppen",
    "difficulty": "intermediate",
    "stem": "Wie verhalten sich primäre, sekundäre und tertiäre aliphatische Alkohole bei der schonenden chemischen Oxidation (z. B. mit Kaliumdichromat oder Permanganat)?",
    "options": {
      "A": "Primäre Alkohole oxidieren zu Ketonen; sekundäre Alkohole oxidieren zu Carbonsäuren; tertiäre Alkohole oxidieren zu Estern.",
      "B": "Tertiäre Alkohole oxidieren am leichtesten zu Aldehyden, da sie die meisten Alkylsubstituenten tragen.",
      "C": "Alle drei Alkoholklassen reagieren identisch und werden unter C-C-Spaltung direkt zu Kohlendioxid abgebaut.",
      "D": "Primäre Alkohole oxidieren über Aldehyde zu Carbonsäuren; sekundäre Alkohole oxidieren zu Ketonen; tertiäre Alkohole lassen sich unter Erhalt des Kohlenstoffgerüsts nicht oxidieren.",
      "E": "Sekundäre Alkohole oxidieren zu Ethern, während primäre Alkohole unoxidierbar sind."
    },
    "correct_answer": "D",
    "explanation_correct": "Die Oxidation von Alkoholen erfordert die Abstraktion eines Wasserstoffatoms am hydroxyltragenden $\\alpha$-Kohlenstoffatom:  \n1. Primäre Alkohole ($R-CH_2OH$): Besitzen zwei $\\alpha$-Wasserstoffatome. Erste Oxidationsstufe ist der Aldehyd ($R-CHO$), der in wässrigem Milieu über sein Hydrat leicht weiter zur Carbonsäure ($R-COOH$) oxidiert wird.  \n2. Sekundäre Alkohole ($R_1-CH(OH)-R_2$): Besitzen genau ein $\\alpha$-Wasserstoffatom. Sie oxidieren glatt zum Keton ($R_1-CO-R_2$). Da Ketone am Carbonyl-Kohlenstoff kein Wasserstoffatom mehr tragen, ist eine Weiteroxidation ohne destruktiven Bruch von $C-C$-Bindungen unter milden Bedingungen unmöglich.  \n3. Tertiäre Alkohole ($R_1 R_2 R_3 C-OH$): Am $\\alpha$-Kohlenstoff ist kein Wasserstoffatom vorhanden. Sie sind gegenüber Oxidationsmitteln inert (resistent) und reagieren nur unter harschen, oxidativ spaltenden Bedingungen.",
    "explanations_incorrect": {
      "A": "Primäre Alkohole liefern Aldehyde/Carbonsäuren, niemals Ketone; sekundäre liefern Ketone, keine Carbonsäuren.",
      "B": "Tertiäre Alkohole lassen sich mangels $\\alpha$-H-Atom nicht oxidieren; Aldehyde entstehen ausschließlich aus primären Alkoholen.",
      "C": "Unter milden Bedingungen bleibt das Kohlenstoffgerüst selektiv intakt; vollständige Verbrennung zu $CO_2$ ist keine milde Redoxreaktion.",
      "E": "Ether ($R-O-R$) entstehen durch säurekatalysierte Kondensation zweier Alkohole unter Wasserabspaltung, nicht durch Oxidation."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-023",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Biochemie und Naturstoffe",
    "subtopic": "Kohlenhydrate: Disaccharide & Mutarotation",
    "difficulty": "intermediate",
    "stem": "Welche Aussage über die Stereochemie von Monosacchariden und die Verknüpfung in Disacchariden ist chemisch zutreffend?",
    "options": {
      "A": "Saccharose ist ein reduzierender Zucker, der die Fehling-Probe positiv beantwortet, da sein Glucosebaustein ein freies Halbacetal besitzt.",
      "B": "Die Mutarotation von D-Glucose beruht auf dem reversiblen Bruch der C-C-Einfachbindung zwischen C-1 und C-2.",
      "C": "Saccharose ist ein nicht-reduzierendes Disaccharid, weil die beiden anomeren Kohlenstoffatome (C-1 von $\\alpha$-D-Glucopyranose und C-2 von $\\beta$-D-Fructofuranose) miteinander glykosidisch verknüpft sind; Maltose dagegen besitzt ein freies anomeres Zentrum und wirkt reduzierend.",
      "D": "Cellulose besteht aus $\\alpha$-1,4-glykosidisch verknüpften Glucose-Einheiten und kann daher vom menschlichen Magen-Darm-Trakt problemlos enzymatisch verdaut werden.",
      "E": "$\\alpha$-D-Glucose und $\\beta$-D-Glucose sind Enantiomere, die sich zueinander wie Bild und Spiegelbild verhalten."
    },
    "correct_answer": "C",
    "explanation_correct": "In Saccharose (Rohrzucker) sind das anomere Kohlenstoffatom C-1 der $\\alpha$-D-Glucopyranose und das anomere Kohlenstoffatom C-2 der $\\beta$-D-Fructofuranose über eine Kopf-an-Kopf-Bindung ($\\alpha,1 \\rightarrow \\beta,2$-glykosidisch) verknüpft. Da beide potentiellen Halbacetal-Gruppen zu Vollacetalen blockiert sind, kann der Ring in wässriger Lösung nicht mehr zur freien Kette aufklappen. Folglich fehlt die oxidierbare freie Aldehyd- bzw. $\\alpha$-Hydroxyketongruppe $\\rightarrow$ Saccharose ist ein nicht-reduzierendes Disaccharid (Fehling- und Tollens-Probe negativ, keine Mutarotation).  \nBei Maltose hingegen liegt eine $\\alpha$-1,4-glykosidische Verknüpfung vor. Das anomere C-1-Atom der zweiten Glucoseeinheit ist frei (Halbacetal), kann zur offenen Aldehydform aufklappen, zeigt Mutarotation und wirkt reduzierend.",
    "explanations_incorrect": {
      "A": "Saccharose ist ein nicht-reduzierender Zucker; die Fehling-Reaktion fällt negativ aus.",
      "B": "Mutarotation beruht auf der reversiblen Öffnung und Schließung des Halbacetalrings über die Spaltung der intramolekularen $C_1-O-C_5$-Bindung (Bildung der offenen Aldehydform), niemals auf dem Bruch von $C-C$-Bindungen.",
      "D": "Cellulose besteht aus $\\beta$-1,4-glykosidisch verknüpften Glucose-Einheiten; Menschen fehlt das Enzym Cellulase, weshalb Cellulose unverdaulicher Ballaststoff ist (im Gegensatz zur $\\alpha$-1,4/1,6-verknüpften Stärke).",
      "E": "$\\alpha$- und $\\beta$-D-Glucose unterscheiden sich lediglich in der Konfiguration am anomeren Kohlenstoff C-1; sie sind Diastereomere (spezifisch Anomere), keine Enantiomere."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  },
  {
    "id": "CHEM-BMS-024",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Biochemie und Naturstoffe",
    "subtopic": "Peptidbindung & Proteinstrukturstufen",
    "difficulty": "advanced",
    "stem": "Welche Aussage über die physikalisch-chemischen Eigenschaften der Peptidbindung und die hierarchischen Strukturstufen der Proteine ist zutreffend?",
    "options": {
      "A": "Um die C-N-Bindung der Peptidgruppe herrscht freie Drehbarkeit, weshalb Proteine vollkommen flexible Konformationen ohne feste Sekundärstrukturen einnehmen.",
      "B": "Die $\\alpha$-Helix und das $\\beta$-Faltblatt werden primär durch kovalente Disulfidbrücken zwischen den Seitenketten benachbarter Aminosäuren stabilisiert.",
      "C": "Die Denaturierung eines globulären Proteins mit Harnstoff oder Hitze spaltet in erster Linie die kovalenten Peptidbindungen des Rückgrats.",
      "D": "Alle 20 proteinogenen Aminosäuren besitzen am $\\alpha$-Kohlenstoffatom eine basische Seitenkette und zeigen optische Aktivität.",
      "E": "Infolge mesomerer Grenzstrukturen besitzt die Peptidbindung partiellen Doppelbindungscharakter (~40 %), ist planar gebaut und in der Regel trans-konfiguriert; Sekundärstrukturen werden durch Wasserstoffbrücken zwischen den Carbonyl- und Amidgruppen des Peptidrückgrats stabilisiert."
    },
    "correct_answer": "E",
    "explanation_correct": "Die Peptidbindung ($-CO-NH-$) ist durch Mesomerie zwischen zwei Grenzstrukturen charakterisiert: dem ungeladenen Zustand und einer zwitterionischen Form mit Doppelbindung zwischen Carbonylkohlenstoff und Stickstoff sowie Formalladungen ($-C(O^-)=N^+H-$). Dies verleiht der $C-N$-Bindung einen partiellen Doppelbindungscharakter von ca. 40 %.  \nKonsequenzen:  \n1. Die sechs Atome der Peptidgruppe ($C_\\alpha - CO - NH - C_\\alpha$) liegen exakt in einer Ebene (Planarität).  \n2. Die Rotation um die $C-N$-Bindung ist bei physiologischen Temperaturen energetisch stark behindert (Rotationsbarriere ca. $80\\text{ kJ/mol}$).  \n3. Wegen sterischer Hinderung der Seitenketten liegt fast ausschließlich die thermodynamisch stabilere *trans*-Konfiguration vor (Ausnahme: Prolin).  \nAuf dieser rigiden Geometrie bauen Sekundärstrukturen wie $\\alpha$-Helices und $\\beta$-Faltblätter auf, die durch regelmäßige Wasserstoffbrückenbindungen zwischen den $C=O$-Sauerstoffen und den $N-H$-Wasserstoffen des Peptidrückgrats stabilisiert werden.",
    "explanations_incorrect": {
      "A": "Wegen des partiellen Doppelbindungscharakters ist die Drehbarkeit um die $C-N$-Bindung drastisch gehindert; Drehbarkeit existiert nur um die $\\alpha$-Bindungen (Winkel $\\phi$ und $\\psi$).",
      "B": "Sekundärstrukturen werden durch Wasserstoffbrücken des Rückgrats stabilisiert; Disulfidbrücken zwischen Cystein-Resten stabilisieren die Tertiär- und Quartärstruktur.",
      "C": "Denaturierung zerstört nicht-kovalente Wechselwirkungen (H-Brücken, hydrophobe Effekte, Ionenbindungen) und entfaltet die native Konformation; die kovalenten Peptidbindungen (Primärstruktur) bleiben vollkommen intakt.",
      "D": "Glycin ist achiral (zwei Wasserstoffatome am $\\alpha$-C); zudem besitzen nur 3 der 20 proteinogenen Aminosäuren basische Seitenketten (Lysin, Arginin, Histidin)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry Assessment Engine",
      "status": "curated_medat_compliant",
      "version": "2.0_24_items_medat_spec"
    }
  }
];

function mapChapterId(primaryTopic: string, subtopic: string): string {
  switch (primaryTopic) {
    case "Atombau und Mikrokosmos":
      if (subtopic.toLowerCase().includes("zerfall") || subtopic.toLowerCase().includes("strahlung")) {
        return "chem-02-strahlung";
      }
      return "chem-01-atombau";
    case "Gasgesetze und Aggregatzustände":
      return "chem-03-gase";
    case "Periodensystem und chemische Bindungen":
      return "chem-04-bindungen";
    case "Stöchiometrie und chemische Reaktionen":
      return "chem-05-stoechiometrie";
    case "Chemisches Gleichgewicht und Kinetik":
      return "chem-06-gleichgewicht";
    case "Elemente und ihre Verbindungen":
      return "chem-07-elemente";
    case "Säuren, Basen und Salze":
      return "chem-08-saeuren-basen";
    case "Redox-Reaktionen und Elektrochemie":
      return "chem-09-redox";
    case "Organische Chemie":
      return "chem-10-organik";
    case "Biochemie und Naturstoffe":
      return "chem-11-biochemie";
    default:
      return "chem-01-atombau";
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
 * Normalisierte 24 StoredQuestion-Objekte für die MedAT-H Generalprobe #1 Runtime-Engine
 */
export const GENERALPROBE_1_CHEM_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_CHEM_QUESTIONS.map(
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
      subjectId: "chem",
      chapterId: mapChapterId(q.primary_topic, q.subtopic),
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Chemie", "Generalprobe #1", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_24_items_medat_spec",
      setOrder: idx + 1,
    };
  }
);
