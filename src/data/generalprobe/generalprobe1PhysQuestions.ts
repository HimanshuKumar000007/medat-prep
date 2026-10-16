/**
 * MedAT Physik BMS — 18-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #1 (BMS Physik-Testteil, exakt 18 Aufgaben).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - BMS gesamt: 94 Aufgaben (Biologie: 40, Chemie: 24, Physik: 18, Mathematik: 12).
 * 
 * Fachlich und terminologisch angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Schwierigkeitsverteilung (präzise kalibriert):
 * - 4 Grundlagen/Leicht (Foundational) (22,2 %)
 * - 9 Mittel (Intermediate) (50,0 %)
 * - 5 Schwer (Advanced) (27,8 %)
 * 
 * Antwortschlüssel (natürlich randomisiert & unvorhersehbar ausbalanciert):
 * - A: 4 (Q002, Q008, Q013, Q017)
 * - B: 4 (Q004, Q006, Q010, Q014)
 * - C: 4 (Q001, Q009, Q012, Q018)
 * - D: 3 (Q003, Q007, Q015)
 * - E: 3 (Q005, Q011, Q016)
 * Gesamt: 18 Aufgaben
 */

import type { StoredQuestion } from "../questions/types";

export interface QcPhysQuestionRaw {
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

export const RAW_GENERALPROBE_1_PHYS_QUESTIONS: QcPhysQuestionRaw[] = [
  {
    id: "PHYS-BMS-001",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Größen und Einheiten",
    subtopic: "SI-Basiseinheiten & Abgeleitete Einheiten",
    difficulty: "foundational",
    stem: "Welche der folgenden physikalischen Einheiten lässt sich in den SI-Basiseinheiten als $\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3}$ ausdrücken?",
    options: {
      A: "Newton ($\\text{N}$)",
      B: "Joule ($\\text{J}$)",
      C: "Watt ($\\text{W}$)",
      D: "Pascal ($\\text{Pa}$)",
      E: "Volt ($\\text{V}$)"
    },
    correct_answer: "C",
    explanation_correct: "Die Einheit Watt ($\\text{W}$) ist die SI-Einheit der mechanischen und elektrischen Leistung ($P = \\frac{W}{t} = U \\cdot I$). Da $1\\,\\text{Joule} = 1\\,\\text{N} \\cdot \\text{m} = 1\\,\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-2}$ ist, ergibt sich für Leistung $P = \\frac{\\text{Energie}}{\\text{Zeit}}$: $1\\,\\text{W} = 1\\,\\frac{\\text{J}}{\\text{s}} = \\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3}$.",
    explanations_incorrect: {
      A: "Newton ($\\text{N}$) ist die Einheit der Kraft ($F = m \\cdot a$) und entspricht der Basiseinheitenkombination $\\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-2}$.",
      B: "Joule ($\\text{J}$) ist die Einheit der Energie/Arbeit und entspricht $\\text{N} \\cdot \\text{m} = \\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-2}$ (enthält $\\text{s}^{-2}$ statt $\\text{s}^{-3}$).",
      D: "Pascal ($\\text{Pa}$) ist die Einheit des Drucks ($p = \\frac{F}{A}$) und entspricht $\\frac{\\text{N}}{\\text{m}^2} = \\text{kg} \\cdot \\text{m}^{-1} \\cdot \\text{s}^{-2}$.",
      E: "Volt ($\\text{V}$) ist die Einheit des elektrischen Potenzials bzw. der Spannung ($U = \\frac{P}{I}$) und lautet in Basiseinheiten $\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3} \\cdot \\text{A}^{-1}$ (enthält zusätzlich das Ampere $\\text{A}^{-1}$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-002",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Kinematik & Freier Fall",
    difficulty: "intermediate",
    stem: "Ein Stein wird aus der Ruhe aus einer Höhe von $h = 45\\,\\text{m}$ über dem Erdboden im Vakuum fallen gelassen (Erdbeschleunigung $g = 10\\,\\text{m/s}^2$). Mit welcher Geschwindigkeit trifft der Stein auf den Erdboden auf?",
    options: {
      A: "$30\\,\\text{m/s}$",
      B: "$15\\,\\text{m/s}$",
      C: "$45\\,\\text{m/s}$",
      D: "$20\\,\\text{m/s}$",
      E: "$90\\,\\text{m/s}$"
    },
    correct_answer: "A",
    explanation_correct: "Nach dem Energieerhaltungssatz wird die gesamte potentielle Energie $E_{\\text{pot}} = m \\cdot g \\cdot h$ beim freien Fall verlustfrei in kinetische Energie $E_{\\text{kin}} = \\frac{1}{2} m \\cdot v^2$ umgewandelt: $m \\cdot g \\cdot h = \\frac{1}{2} m \\cdot v^2 \\implies v = \\sqrt{2gh}$. Einsetzen der Werte ergibt: $v = \\sqrt{2 \\cdot 10\\,\\text{m/s}^2 \\cdot 45\\,\\text{m}} = \\sqrt{900\\,\\text{m}^2/\\text{s}^2} = 30\\,\\text{m/s}$. (Alternativ über die Fallzeit: $h = \\frac{1}{2}gt^2 \\implies t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{90}{10}} = 3\\,\\text{s}$; damit ist $v = g \\cdot t = 10 \\cdot 3 = 30\\,\\text{m/s}$).",
    explanations_incorrect: {
      B: "$15\\,\\text{m/s}$ entsteht durch fehlerhaftes Weglassen des Faktors 2 unter der Wurzel oder Halbierung der Auftreffgeschwindigkeit.",
      C: "$45\\,\\text{m/s}$ verwechselt den Zahlenwert der Fallhöhe in Metern unzulässig direkt mit dem Betrag der Geschwindigkeit in $\\text{m/s}$.",
      D: "$20\\,\\text{m/s}$ wäre die Fallgeschwindigkeit nach einer Fallzeit von nur $2\\,\\text{s}$ aus einer geringeren Höhe von $h = 20\\,\\text{m}$.",
      E: "$90\\,\\text{m/s}$ vergisst das Wurzelziehen aus $v^2 = 2gh = 900\\,\\text{m}^2/\\text{s}^2$ bzw. berechnet irrtümlich $2 \\cdot 45$."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-003",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Kräfte & Schiefe Ebene",
    difficulty: "intermediate",
    stem: "Ein Klotz der Masse $m = 4\\,\\text{kg}$ ruht auf einer um $\\alpha = 30^\\circ$ gegen die Horizontale geneigten schiefen Ebene. Die Erdbeschleunigung beträgt $g = 10\\,\\text{m/s}^2$ (gegeben: $\\sin(30^\\circ) = 0{,}50$; $\\cos(30^\\circ) \\approx 0{,}87$). Wie groß ist die Betragskraft der Haftreibung $F_{\\text{H}}$, die den Klotz im statischen Gleichgewicht am Hinabgleiten hindert?",
    options: {
      A: "$40\\,\\text{N}$",
      B: "$34{,}6\\,\\text{N}$",
      C: "$10\\,\\text{N}$",
      D: "$20\\,\\text{N}$",
      E: "$0\\,\\text{N}$"
    },
    correct_answer: "D",
    explanation_correct: "Im statischen Gleichgewicht kompensieren sich alle entlang der schiefen Ebene wirkenden Kräfte zu null. Die hangabwärts gerichtete Hangabtriebskraft beträgt $F_{\\text{H,ab}} = F_{\\text{G}} \\cdot \\sin(\\alpha) = m \\cdot g \\cdot \\sin(30^\\circ)$. Mit $m = 4\\,\\text{kg}$ und $g = 10\\,\\text{m/s}^2$ ergibt sich: $F_{\\text{H,ab}} = 4\\,\\text{kg} \\cdot 10\\,\\text{m/s}^2 \\cdot 0{,}50 = 20\\,\\text{N}$. Da der Klotz ruht, muss die Haftreibungskraft $F_{\\text{H}}$ exakt entgegengesetzt und betragsgleich zur Hangabtriebskraft sein: $F_{\\text{H}} = 20\\,\\text{N}$.",
    explanations_incorrect: {
      A: "$40\\,\\text{N}$ ist die gesamte Gewichtskraft $F_{\\text{G}} = m \\cdot g = 4 \\cdot 10\\,\\text{N}$, die senkrecht nach unten zum Erdmittelpunkt wirkt, nicht die Hangabtriebskraft.",
      B: "$34{,}6\\,\\text{N}$ entspricht der Normalkraft $F_{\\text{N}} = F_{\\text{G}} \\cdot \\cos(30^\\circ) = 40\\,\\text{N} \\cdot 0{,}866 \\approx 34{,}64\\,\\text{N}$, welche senkrecht auf die geneigte Ebene drückt.",
      C: "$10\\,\\text{N}$ unterschlägt die Masse ($m/2$) oder berechnet fehlerhaft $g \\cdot \\sin(30^\\circ) = 5\\,\\text{m/s}^2$ mit falschem Skalierungsfaktor.",
      E: "$0\\,\\text{N}$ würde bedeuten, dass keine Reibungskraft wirkt; in diesem Fall würde der Klotz mit $a = g \\cdot \\sin(30^\\circ) = 5\\,\\text{m/s}^2$ unweigerlich beschleunigt herabgleiten."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-004",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Arbeit, Energie & Leistung",
    difficulty: "intermediate",
    stem: "Ein Kran hebt eine Last der Masse $m = 600\\,\\text{kg}$ in einer Zeit von $t = 20\\,\\text{s}$ mit konstanter Geschwindigkeit um eine Höhe von $h = 10\\,\\text{m}$ an. Wie groß ist die dabei erbrachte mechanische Leistung des Krans? (Erdbeschleunigung $g = 10\\,\\text{m/s}^2$, Reibungsverluste vernachlässigt)",
    options: {
      A: "$600\\,\\text{W}$",
      B: "$3\\,\\text{kW}$",
      C: "$60\\,\\text{kW}$",
      D: "$1{,}2\\,\\text{kW}$",
      E: "$300\\,\\text{W}$"
    },
    correct_answer: "B",
    explanation_correct: "Die beim Heben gegen das Schwerefeld verrichtete Hubarbeit entspricht der Zunahme an potentieller Energie: $W = m \\cdot g \\cdot h = 600\\,\\text{kg} \\cdot 10\\,\\text{m/s}^2 \\cdot 10\\,\\text{m} = 60\\,000\\,\\text{J} = 60\\,\\text{kJ}$. Die mechanische Leistung $P$ ist die pro Zeiteinheit verrichtete Arbeit: $P = \\frac{W}{t} = \\frac{60\\,000\\,\\text{J}}{20\\,\\text{s}} = 3000\\,\\text{W} = 3\\,\\text{kW}$.",
    explanations_incorrect: {
      A: "$600\\,\\text{W}$ entsteht durch das Vergessen der Erdbeschleunigung $g = 10\\,\\text{m/s}^2$ oder fehlerhafte Zeiteinheitenumrechnung.",
      C: "$60\\,\\text{kW}$ gibt den Zahlenwert der verrichteten Hubarbeit in Kilojoule ($60\\,\\text{kJ}$) an, versäumt jedoch die Division durch die Hebedauer von $20\\,\\text{s}$.",
      D: "$1{,}2\\,\\text{kW}$ entsteht durch Verdopplung bzw. Rechenfehler bei den Faktoren ($600 \\cdot 20 / 10$).",
      E: "$300\\,\\text{W}$ entsteht durch Weglassen der Erdbeschleunigung $g$ bei der Hubarbeit: $\\frac{600 \\cdot 10}{20} = 300\\,\\text{W}$."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-005",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Impulserhaltung & Stoßprozesse",
    difficulty: "advanced",
    stem: "Ein Waggon der Masse $m_1 = 20\\,\\text{t}$ rollt mit einer Geschwindigkeit von $v_1 = 3\\,\\text{m/s}$ auf einen ruhenden Waggon der Masse $m_2 = 10\\,\\text{t}$ zu. Nach der Kollision kuppeln beide Waggons aneinander und bewegen sich als ein gemeinsamer Körper weiter (vollkommen inelastischer Stoß, Reibung vernachlässigt). Welche gemeinsame Endgeschwindigkeit $u$ besitzen die beiden Waggons und welche energetische Aussage trifft zu?",
    options: {
      A: "$u = 2\\,\\text{m/s}$; die mechanische kinetische Energie bleibt vollständig erhalten, da der Gesamtimpuls erhalten ist.",
      B: "$u = 1\\,\\text{m/s}$; die gesamte mechanische kinetische Energie bleibt vollständig erhalten.",
      C: "$u = 1{,}5\\,\\text{m/s}$; ein Teil der kinetischen Energie wird in innere Energie umgewandelt.",
      D: "$u = 3\\,\\text{m/s}$; die kinetische Energie verdoppelt sich aufgrund der Massenzunahme.",
      E: "$u = 2\\,\\text{m/s}$; ein Teil der mechanischen kinetischen Energie wird in innere Energie (Deformationsarbeit, Wärme) dissipiert."
    },
    correct_answer: "E",
    explanation_correct: "Nach dem Impulserhaltungssatz gilt für das geschlossene System: $p_{\\text{vor}} = p_{\\text{nach}} \\implies m_1 \\cdot v_1 + m_2 \\cdot 0 = (m_1 + m_2) \\cdot u$. Einsetzen der Werte: $20\\,\\text{t} \\cdot 3\\,\\text{m/s} = 30\\,\\text{t} \\cdot u \\implies u = \\frac{60}{30}\\,\\text{m/s} = 2\\,\\text{m/s}$. Energetische Bilanz: Kinetische Energie vor dem Stoß: $E_{\\text{kin,vor}} = \\frac{1}{2} \\cdot 20\\,000\\,\\text{kg} \\cdot (3\\,\\text{m/s})^2 = 90\\,000\\,\\text{J} = 90\\,\\text{kJ}$. Nach dem Stoß: $E_{\\text{kin,nach}} = \\frac{1}{2} \\cdot 30\\,000\\,\\text{kg} \\cdot (2\\,\\text{m/s})^2 = 60\\,000\\,\\text{J} = 60\\,\\text{kJ}$. Es wurden $30\\,\\text{kJ}$ ($33{,}3\\,\\%$) kinetische Energie irreversibel in Wärme und Deformationsarbeit dissipiert. Bei jedem realen inelastischen Stoß gilt der Impulserhaltungssatz streng, während mechanische kinetische Energie dissipiert wird.",
    explanations_incorrect: {
      A: "Obwohl die Geschwindigkeit $u = 2\\,\\text{m/s}$ rechnerisch richtig bestimmt wurde, bleibt kinetische Energie bei einem inelastischen Stoß keinesfalls erhalten; Impulserhaltung bedingt nicht die Erhaltung der mechanischen kinetischen Energie.",
      B: "$u = 1\\,\\text{m/s}$ ist rechnerisch falsch ($60 / 30 = 2$), und bei einem inelastischen Stoß bleibt die mechanische kinetische Energie niemals vollständig erhalten.",
      C: "$u = 1{,}5\\,\\text{m/s}$ berechnet irrtümlich das arithmetische Mittel der Geschwindigkeiten ($3 / 2$), ohne die Massenanteile im Impulserhaltungssatz zu gewichten.",
      D: "$u = 3\\,\\text{m/s}$ würde bedeuten, dass die angekoppelte Masse den Bewegungszustand nicht beeinflusst, was der Impulserhaltung fundamental widerspricht; eine Zunahme kinetischer Energie ohne äußere Arbeit ist physikalisch unmöglich."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-006",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Kreisbewegung & Zentripetalkraft",
    difficulty: "intermediate",
    stem: "Ein Fahrzeug der Masse $m = 1200\\,\\text{kg}$ durchfährt eine ebene Kurve mit dem Krümmungsradius $r = 50\\,\\text{m}$ mit einer konstanten Bahngeschwindigkeit von $v = 10\\,\\text{m/s}$. Wie verändert sich die zur Einhaltung der Kreisbahn erforderliche Zentripetalkraft $F_{\\text{Z}}$, wenn die Geschwindigkeit auf $v' = 20\\,\\text{m/s}$ verdoppelt wird?",
    options: {
      A: "Sie verdoppelt sich.",
      B: "Sie vervierfacht sich.",
      C: "Sie bleibt unverändert, da Kurvenradius und Fahrzeugmasse konstant sind.",
      D: "Sie halbiert sich.",
      E: "Sie verachtfacht sich."
    },
    correct_answer: "B",
    explanation_correct: "Die Zentripetalkraft ist definiert als $F_{\\text{Z}} = m \\cdot \\frac{v^2}{r}$. Da die Bahngeschwindigkeit quadratisch in die Gleichung eingeht ($F_{\\text{Z}} \\propto v^2$), führt eine Verdopplung der Geschwindigkeit ($v' = 2v$) zu: $F_{\\text{Z}}' = m \\cdot \\frac{(2v)^2}{r} = m \\cdot \\frac{4v^2}{r} = 4 \\cdot F_{\\text{Z}}$. Die Zentripetalkraft vervierfacht sich somit (konkret von $2400\\,\\text{N}$ auf $9600\\,\\text{N}$).",
    explanations_incorrect: {
      A: "Eine Verdopplung nähme fälschlicherweise eine lineare Proportionalität $F_{\\text{Z}} \\propto v$ an und ignoriert den quadratischen Geschwindigkeitsfaktor.",
      C: "Die Zentripetalkraft ist eine dynamische Führungsgröße und hängt maßgeblich von der Geschwindigkeit des bewegten Körpers ab.",
      D: "Eine Halbierung verwechselt die Geschwindigkeitsabhängigkeit mit einer inversen Proportionalität.",
      E: "Eine Verachtfachung würde einer kubischen Abhängigkeit ($v^3$) entsprechen, welche in der klassischen Kreiskinematik nicht auftritt."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-007",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Gravitationsgesetz & Satelliten",
    difficulty: "advanced",
    stem: "Nach dem Newtonschen Gravitationsgesetz ziehen sich zwei kugelsymmetrische Massen im Abstand $r$ (gemessen zwischen ihren Mittelpunkten) mit der Kraft $F_{\\text{G}} = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}$ an. Ein Satellit befindet sich in einer Höhe $h$ über der Erdoberfläche, die exakt dem Erdradius $R$ entspricht ($h = R$). Wie groß ist die auf den Satelliten wirkende Gravitationskraft im Vergleich zu seiner Gewichtskraft $F_0$ direkt auf der Erdoberfläche?",
    options: {
      A: "Sie beträgt $\\frac{1}{2} \\cdot F_0$.",
      B: "Sie beträgt $\\frac{1}{\\sqrt{2}} \\cdot F_0$.",
      C: "Sie beträgt $\\frac{1}{8} \\cdot F_0$.",
      D: "Sie beträgt $\\frac{1}{4} \\cdot F_0$.",
      E: "Sie ist unverändert gleich $F_0$, da sich der Satellit im Orbit im Erdschwerefeld befindet."
    },
    correct_answer: "D",
    explanation_correct: "Auf der Erdoberfläche beträgt der Abstand des Satelliten zum Erdmittelpunkt $r_0 = R$. Die dortige Gewichtskraft ist $F_0 = G \\cdot \\frac{M \\cdot m}{R^2}$. Befindet sich der Satellit in einer Höhe $h = R$ über der Erdoberfläche, so beträgt sein Gesamtabstand zum Erdmittelpunkt $r = R + h = R + R = 2R$. Da die Gravitationskraft quadratisch mit dem Gesamtabstand zum Erdmittelpunkt abnimmt, gilt: $F = G \\cdot \\frac{M \\cdot m}{(2R)^2} = G \\cdot \\frac{M \\cdot m}{4R^2} = \\frac{1}{4} \\cdot F_0$.",
    explanations_incorrect: {
      A: "$\\frac{1}{2} \\cdot F_0$ ignoriert das Abstandsquadrat und setzt fälschlicherweise eine lineare Abnahme mit dem Abstand an ($1/r$ statt $1/r^2$).",
      B: "$\\frac{1}{\\sqrt{2}} \\cdot F_0$ basiert auf einer unphysikalischen Wurzelbeziehung zum Abstand.",
      C: "$\\frac{1}{8} \\cdot F_0$ nimmt irrtümlich eine kubische Abnahme ($r^3 = (2R)^3 = 8R^3$) an.",
      E: "Die Gravitationskraft nimmt kontinuierlich mit dem Abstand zum Massenmittelpunkt ab; Schwerelosigkeit im Orbit resultiert aus dem freien Fall des Satelliten auf einer Kreisbahn, nicht aus dem Verschwinden oder Gleichbleiben der Gravitation."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-008",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Hydrostatik & Archimedisches Prinzip",
    difficulty: "intermediate",
    stem: "Ein homogener Holzkörper mit der Dichte $\\rho_{\\text{Holz}} = 800\\,\\text{kg/m}^3$ schwimmt frei in einem ruhenden Wasserbecken (Dichte des Wassers $\\rho_{\\text{Wasser}} = 1000\\,\\text{kg/m}^3$). Welcher prozentuale Anteil des gesamten Körpervolumens befindet sich unterhalb des Wasserspiegels (eingetauchtes Volumen)?",
    options: {
      A: "$80\\,\\%$",
      B: "$50\\,\\%$",
      C: "$20\\,\\%$",
      D: "$100\\,\\%$",
      E: "$125\\,\\%$"
    },
    correct_answer: "A",
    explanation_correct: "Nach dem Archimedischen Prinzip entspricht die statische Auftriebskraft $F_{\\text{A}}$ der Gewichtskraft der verdrängten Flüssigkeitsmenge: $F_{\\text{A}} = \\rho_{\\text{Wasser}} \\cdot V_{\\text{eingetaucht}} \\cdot g$. Für einen frei schwimmenden Körper herrscht Kräftegleichgewicht zwischen Auftriebskraft und Gewichtskraft des gesamten Körpers ($F_{\\text{G}} = \\rho_{\\text{Holz}} \\cdot V_{\\text{ges}} \\cdot g$): $\\rho_{\\text{Wasser}} \\cdot V_{\\text{eingetaucht}} \\cdot g = \\rho_{\\text{Holz}} \\cdot V_{\\text{ges}} \\cdot g$. Durch Kürzen von $g$ und Umstellen ergibt sich das Eintauchverhältnis: $\\frac{V_{\\text{eingetaucht}}}{V_{\\text{ges}}} = \\frac{\\rho_{\\text{Holz}}}{\\rho_{\\text{Wasser}}} = \\frac{800\\,\\text{kg/m}^3}{1000\\,\\text{kg/m}^3} = 0{,}80 = 80\\,\\%$.",
    explanations_incorrect: {
      B: "$50\\,\\%$ träte nur dann auf, wenn das Holz exakt die halbe Dichte des Wassers aufwiese ($\\rho = 500\\,\\text{kg/m}^3$).",
      C: "$20\\,\\%$ ist der oberhalb des Wasserspiegels sichtbare, herausschauende Volumenanteil ($100\\,\\% - 80\\,\\%$), nicht der eingetauchte Anteil.",
      D: "$100\\,\\%$ (vollständiges Untertauchen im Schwebezustand) erfordert eine identische Dichte von Körper und Fluid ($\\rho = 1000\\,\\text{kg/m}^3$).",
      E: "$125\\,\\%$ ist geometrisch unmöglich, da ein Körper maximal zu $100\\,\\%$ seines Volumens in ein Fluid eintauchen kann."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-009",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Hydrodynamik & Bernoulli-Gleichung",
    difficulty: "advanced",
    stem: "Eine ideale, inkompressible Flüssigkeit strömt laminar und stationär durch ein horizontales Rohr. An einer Verengung reduziert sich der Querschnitt des Rohres auf die Hälfte des Anfangsquerschnitts ($A_2 = \\frac{1}{2} A_1$). Welche Aussagen über die Strömungsgeschwindigkeit $v_2$ und den statischen Druck $p_2$ an der Verengung im Vergleich zum weiten Rohrabschnitt ($v_1, p_1$) treffen zu?",
    options: {
      A: "Die Strömungsgeschwindigkeit halbiert sich ($v_2 = \\frac{1}{2} v_1$) und der statische Druck steigt an ($p_2 > p_1$).",
      B: "Die Strömungsgeschwindigkeit verdoppelt sich ($v_2 = 2 v_1$) und der statische Druck steigt an ($p_2 > p_1$).",
      C: "Die Strömungsgeschwindigkeit verdoppelt sich ($v_2 = 2 v_1$) und der statische Druck sinkt ($p_2 < p_1$).",
      D: "Die Strömungsgeschwindigkeit bleibt gleich ($v_2 = v_1$) und der statische Druck sinkt ($p_2 < p_1$).",
      E: "Die Strömungsgeschwindigkeit vervierfacht sich ($v_2 = 4 v_1$) und der statische Druck bleibt unverändert ($p_2 = p_1$)."
    },
    correct_answer: "C",
    explanation_correct: "Nach der Kontinuitätsgleichung für inkompressible Fluide ist der Volumenstrom konstant: $A_1 \\cdot v_1 = A_2 \\cdot v_2$. Bei halbiertem Querschnitt ($A_2 = 0{,}5 A_1$) verdoppelt sich die Strömungsgeschwindigkeit: $v_2 = v_1 \\cdot \\frac{A_1}{0{,}5 A_1} = 2 v_1$. Nach der Bernoulli-Gleichung für horizontale Strömungen ist der Gesamtdruck konstant: $p_1 + \\frac{1}{2}\\rho v_1^2 = p_2 + \\frac{1}{2}\\rho v_2^2$. Da an der Verengung die Strömungsgeschwindigkeit $v_2$ größer ist, steigt der dynamische Staudruck $\\frac{1}{2}\\rho v_2^2$ an. Folglich muss der statische Druck $p_2$ absinken ($p_2 < p_1$, Bernoulli-Effekt / hydrodynamisches Paradoxon).",
    explanations_incorrect: {
      A: "Nach der Kontinuitätsgleichung führt ein kleinerer Rohrquerschnitt zwingend zu einer Beschleunigung der inkompressiblen Strömung, nicht zu einer Verlangsamung.",
      B: "Die Geschwindigkeit verdoppelt sich zwar korrekt, doch nach dem Energieerhaltungssatz von Bernoulli sinkt der statische Druck bei zunehmendem dynamischen Druck ab.",
      D: "Bei verringertem Querschnitt kann die Strömungsgeschwindigkeit in einem inkompressiblen Fluid keinesfalls konstant bleiben.",
      E: "Eine Vervierfachung ergäbe sich bei Halbierung des Radius bzw. Durchmessers ($A \\propto r^2$); hier wurde jedoch direkt die Querschnittsfläche halbiert; zudem kann der statische Druck bei Geschwindigkeitszunahme nicht konstant bleiben."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-010",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Kalorimetrie & Mischungstemperatur",
    difficulty: "foundational",
    stem: "In einem ideal isolierten Kalorimeter werden $m_1 = 200\\,\\text{g}$ Wasser mit einer Temperatur von $T_1 = 20\\,^\\circ\\text{C}$ mit $m_2 = 300\\,\\text{g}$ Wasser mit einer Temperatur von $T_2 = 70\\,^\\circ\\text{C}$ vollständig durchmischt. Welche Mischungstemperatur $T_{\\text{m}}$ stellt sich im thermischen Gleichgewicht ein? (Spezifische Wärmekapazität von flüssigem Wasser konstant; Wärmekapazität des Gefäßes vernachlässigt)",
    options: {
      A: "$40\\,^\\circ\\text{C}$",
      B: "$50\\,^\\circ\\text{C}$",
      C: "$60\\,^\\circ\\text{C}$",
      D: "$35\\,^\\circ\\text{C}$",
      E: "$45\\,^\\circ\\text{C}$"
    },
    correct_answer: "B",
    explanation_correct: "Nach der richmannschen Mischungsregel entspricht die vom wärmeren Wasser abgegebene Wärmemenge der vom kälteren Wasser aufgenommenen Wärme: $Q_{\\text{ab}} = Q_{\\text{auf}} \\implies m_2 \\cdot c \\cdot (T_2 - T_{\\text{m}}) = m_1 \\cdot c \\cdot (T_{\\text{m}} - T_1)$. Da es sich um denselben Stoff (flüssiges Wasser) handelt, kürzt sich die spezifische Wärmekapazität $c$ heraus: $T_{\\text{m}} = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2}$. Einsetzen: $T_{\\text{m}} = \\frac{200\\,\\text{g} \\cdot 20\\,^\\circ\\text{C} + 300\\,\\text{g} \\cdot 70\\,^\\circ\\text{C}}{200\\,\\text{g} + 300\\,\\text{g}} = \\frac{4000 + 21\\,000}{500} = \\frac{25\\,000}{500}\\,^\\circ\\text{C} = 50\\,^\\circ\\text{C}$.",
    explanations_incorrect: {
      A: "$40\\,^\\circ\\text{C}$ unterschätzt das höhere Gewicht des $70\\,^\\circ\\text{C}$ warmen Wassers.",
      C: "$60\\,^\\circ\\text{C}$ gewichtet die Heißwasserkomponente mathematisch unverhältnismäßig stark.",
      D: "$35\\,^\\circ\\text{C}$ liegt näher am kalten Ausgangswert, obwohl der Massenanteil des heißen Wassers mit $60\\,\\%$ überwiegt.",
      E: "$45\\,^\\circ\\text{C}$ ist das ungewichtete arithmetische Mittel $\\frac{20 + 70}{2}$, das nur bei exakt gleichen Massen ($m_1 = m_2$) zuträfe."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-011",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Hauptsätze & Adiabatische Prozesse",
    difficulty: "intermediate",
    stem: "Ein ideales Gas befindet sich in einem Zylinder und wird rasch komprimiert, sodass kein Wärmeaustausch mit der Umgebung stattfinden kann (adiabatischer Prozess, $Q = 0$). Welche Aussage über die am Gas verrichtete Arbeit $W$, die innere Energie $\\Delta U$ und die Gastemperatur $T$ ist gemäß dem 1. Hauptsatz der Thermodynamik ($\\Delta U = Q + W$) korrekt?",
    options: {
      A: "Das Gas dehnt sich spontan aus, wodurch Druck und Temperatur proportional abfallen.",
      B: "Das Gas verrichtet Arbeit an der Umgebung ($W < 0$), die innere Energie sinkt ($\\Delta U < 0$) und das Gas kühlt ab.",
      C: "Die Temperatur bleibt konstant, da dem Gas keine Wärme zugeführt wird ($Q = 0$).",
      D: "Die innere Energie bleibt unverändert ($\\Delta U = 0$), da adiabatische Prozesse stets isenthalp und isotherm ablaufen.",
      E: "Am Gas wird Arbeit verrichtet ($W > 0$), die innere Energie steigt ($\\Delta U > 0$) und die Gastemperatur nimmt zu."
    },
    correct_answer: "E",
    explanation_correct: "Nach dem 1. Hauptsatz der Thermodynamik gilt: $\\Delta U = Q + W$. Bei einem adiabatischen Prozess findet kein Wärmeaustausch statt ($Q = 0$), somit ist $\\Delta U = W$. Da das Gas von außen komprimiert wird (Volumenverringerung), wird am Gas Arbeit verrichtet, also $W > 0$. Folglich nimmt die innere Energie zu: $\\Delta U > 0$. Da bei einem idealen Gas die innere Energie direkt proportional zur absoluten Temperatur ist ($U \\propto T$), führt die Zunahme der inneren Energie zwingend zu einer Temperaturerhöhung (Erwärmung des Gases bei adiabatischer Kompression).",
    explanations_incorrect: {
      A: "Die Aufgabenstellung beschreibt eine Kompression (Volumenabnahme), keine spontane Gasausdehnung.",
      B: "Eine Abkühlung ($W < 0$, $\\Delta U < 0$) tritt bei adiabatischer Expansion auf, wenn das Gas selbst Arbeit verrichtet, nicht bei Kompression.",
      C: "Verwechselt adiabatisch ($Q = 0$) mit isotherm ($\\Delta T = 0$); die verrichtete mechanische Kompressionsarbeit fließt direkt in die innere thermische Energie des Gases.",
      D: "Ein Prozess mit $\\Delta U = 0$ wäre bei einem idealen Gas isotherm und würde eine Wärmeabgabe an die Umgebung ($Q = -W$) erfordern; dies widerspricht der adiabatischen Randbedingung."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-012",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Harmonische Schwingungen & Pendel",
    difficulty: "foundational",
    stem: "Ein mathematisches Fadenpendel besitzt bei kleinen Auslenkungswinkeln eine Schwingungsdauer von $T = 2{,}0\\,\\text{s}$. Um welchen Faktor muss die Pendellänge $l$ vergrößert werden, damit sich die Schwingungsdauer auf $T' = 4{,}0\\,\\text{s}$ verdoppelt?",
    options: {
      A: "Um den Faktor 2",
      B: "Um den Faktor $\\sqrt{2}$",
      C: "Um den Faktor 4",
      D: "Um den Faktor 8",
      E: "Um den Faktor 16"
    },
    correct_answer: "C",
    explanation_correct: "Die Periodendauer eines mathematischen Fadenpendels bei kleiner Auslenkung lautet $T = 2\\pi \\sqrt{\\frac{l}{g}}$. Die Periodendauer ist proportional zur Quadratwurzel der Pendellänge: $T \\propto \\sqrt{l}$, was äquivalent ist zu $l \\propto T^2$. Soll sich die Schwingungsdauer verdoppeln ($T' = 2 \\cdot T$), muss die Länge um den quadratischen Faktor $2^2 = 4$ vervierfacht werden: $T' = 2\\pi \\sqrt{\\frac{4l}{g}} = 2 \\cdot 2\\pi \\sqrt{\\frac{l}{g}} = 2T = 4{,}0\\,\\text{s}$.",
    explanations_incorrect: {
      A: "Ein Faktor 2 nähme fälschlicherweise eine lineare Proportionalität $T \\propto l$ an und ignoriert die Quadratwurzel in der Pendelgleichung.",
      B: "Der Faktor $\\sqrt{2} \\approx 1{,}41$ verwechselt Ursache und Wirkung der Wurzelfunktion.",
      D: "Faktor 8 entspräche einer kubischen Abhängigkeit ($2^3 = 8$).",
      E: "Faktor 16 ($2^4 = 16$) wäre nötig, um die Schwingungsdauer auf das Vierfache ($8{,}0\\,\\text{s}$) zu steigern."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-013",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Wellenphänomene & Akustik",
    difficulty: "advanced",
    stem: "Ein medizinischer Ultraschallkopf sendet im Weichgewebe eine Schallwelle mit einer Frequenz von $f = 5\\,\\text{MHz}$ ($5 \\cdot 10^6\\,\\text{Hz}$) aus. Die Schallgeschwindigkeit im Gewebe beträgt $c = 1500\\,\\text{m/s}$. Welche Wellenlänge $\\lambda$ besitzt der Ultraschall im Gewebe, und wie verhält sich die Frequenz beim Übergang in ein dichteres Gewebe mit höherer Schallgeschwindigkeit?",
    options: {
      A: "$\\lambda = 0{,}3\\,\\text{mm}$; die Frequenz bleibt unverändert, da sie allein durch die Schallquelle bestimmt wird.",
      B: "$\\lambda = 0{,}03\\,\\text{mm}$; die Frequenz sinkt, da die Wellenlänge invariant bleibt.",
      C: "$\\lambda = 3{,}0\\,\\text{mm}$; die Frequenz nimmt proportional zur Schallgeschwindigkeit zu.",
      D: "$\\lambda = 30\\,\\mu\\text{m}$; die Frequenz verdoppelt sich bei doppelter Mediendichte.",
      E: "$\\lambda = 7{,}5\\,\\text{mm}$; die Frequenz bleibt unverändert, da Schall eine Transversalwelle ist."
    },
    correct_answer: "A",
    explanation_correct: "Nach der fundamentalen Wellengleichung gilt: $c = \\lambda \\cdot f \\implies \\lambda = \\frac{c}{f}$. Einsetzen: $\\lambda = \\frac{1500\\,\\text{m/s}}{5 \\cdot 10^6\\,\\text{s}^{-1}} = \\frac{1500}{5\\cdot 10^6}\\,\\text{m} = 300 \\cdot 10^{-6}\\,\\text{m} = 0{,}3 \\cdot 10^{-3}\\,\\text{m} = 0{,}3\\,\\text{mm}$. Beim Übergang einer Welle von einem Medium in ein anderes bleibt die Frequenz $f$ stets konstant, da sie ausschließlich durch die Schwingungsfrequenz der erzeugenden Quelle festgelegt ist; die veränderte Ausbreitungsgeschwindigkeit $c$ führt stattdessen zu einer Anpassung der Wellenlänge ($\\lambda = \\frac{c}{f}$).",
    explanations_incorrect: {
      B: "$\\lambda = 0{,}03\\,\\text{mm}$ verrechnet die Zehnerpotenzen fehlerhaft, und die Frequenz ist invariant gegenüber Medieneigenschaften.",
      C: "$\\lambda = 3{,}0\\,\\text{mm}$ ist um eine Zehnerpotenz zu groß ($1500 / 5\\cdot 10^5$), und die Frequenz ändert sich beim Mediumswechsel nicht.",
      D: "$30\\,\\mu\\text{m} = 0{,}03\\,\\text{mm}$ ist ein Zehnerpotenzfehler, und die Frequenz koppelt nicht an die Dichte des Ausbreitungsmediums.",
      E: "$\\lambda = 7{,}5\\,\\text{mm}$ multipliziert $1500$ mit $5$ statt zu dividieren; zudem breitet sich Ultraschall in biologischem Weichgewebe als Longitudinalwelle aus."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-014",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Brechungsgesetz & Totalreflexion",
    difficulty: "intermediate",
    stem: "Ein Lichtstrahl breitet sich in einem optisch dichteren Medium mit dem Brechungsindex $n_1 = \\sqrt{2} \\approx 1{,}414$ aus und trifft auf die Grenzfläche zu Luft ($n_2 = 1{,}00$). Bei welchem Einfallswinkel $\\alpha_{\\text{g}}$ tritt der Grenzwinkel der Totalreflexion auf?",
    options: {
      A: "$30^\\circ$",
      B: "$45^\\circ$",
      C: "$90^\\circ$",
      D: "$60^\\circ$",
      E: "$0^\\circ$"
    },
    correct_answer: "B",
    explanation_correct: "Nach dem Brechungsgesetz von Snellius gilt: $n_1 \\cdot \\sin(\\alpha) = n_2 \\cdot \\sin(\\beta)$. Der Grenzwinkel der Totalreflexion $\\alpha_{\\text{g}}$ ist jener Einfallswinkel, bei dem der Brechungswinkel im optisch dünneren Medium genau $\\beta = 90^\\circ$ beträgt ($\\\\sin(90^\\circ) = 1$). Daraus folgt: $n_1 \\cdot \\sin(\\alpha_{\\text{g}}) = n_2 \\cdot 1 \\implies \\sin(\\alpha_{\\text{g}}) = \\frac{n_2}{n_1} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. Der Winkel, dessen Sinus $\\frac{\\sqrt{2}}{2}$ beträgt, ist $\\alpha_{\\text{g}} = 45^\\circ$. Für alle Einfallswinkel $\\alpha > 45^\\circ$ tritt Totalreflexion auf.",
    explanations_incorrect: {
      A: "$30^\\circ$ entspricht $\\sin(30^\\circ) = 0{,}50$, was einem Brechungsindex von $n_1 = 2{,}00$ gegenüber Luft entspräche.",
      C: "$90^\\circ$ ist ein streifender Einfall parallel zur Grenzfläche, nicht der Grenzwinkel.",
      D: "$60^\\circ$ entspricht $\\sin(60^\\circ) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$ ($n_1 = \\frac{2}{\\sqrt{3}} \\approx 1{,}15$).",
      E: "Bei $\\alpha = 0^\\circ$ fällt der Strahl senkrecht auf die Grenzfläche ein und wird ungebrochen transmittiert."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-015",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Linsengleichung & Optische Abbildung",
    difficulty: "intermediate",
    stem: "Ein Gegenstand befindet sich im Abstand von $g = 30\\,\\text{cm}$ vor einer dünnen Sammellinse mit einer Brennweite von $f = 20\\,\\text{cm}$. In welchem Bildabstand $b$ entsteht das scharfe Bild auf der gegenüberliegenden Seite der Linse, und welche Eigenschaften weist dieses Bild auf?",
    options: {
      A: "$b = 10\\,\\text{cm}$; aufrecht und verkleinert",
      B: "$b = 50\\,\\text{cm}$; umgekehrt und in natürlicher Größe",
      C: "$b = 20\\,\\text{cm}$; virtuell und aufrecht",
      D: "$b = 60\\,\\text{cm}$; reell, umgekehrt und zweifach vergrößert",
      E: "$b = 40\\,\\text{cm}$; reell und dreifach vergrößert"
    },
    correct_answer: "D",
    explanation_correct: "Nach der Abbildungsgleichung für dünne Linsen gilt: $\\frac{1}{f} = \\frac{1}{g} + \\frac{1}{b} \\implies \\frac{1}{b} = \\frac{1}{f} - \\frac{1}{g}$. Einsetzen der Werte: $\\frac{1}{b} = \\frac{1}{20\\,\\text{cm}} - \\frac{1}{30\\,\\text{cm}} = \\frac{3 - 2}{60\\,\\text{cm}} = \\frac{1}{60\\,\\text{cm}} \\implies b = 60\\,\\text{cm}$. Da der Gegenstand außerhalb der einfachen Brennweite liegt ($g > f$), entsteht ein reelles, auf dem Kopf stehendes (umgekehrtes) Bild. Der Abbildungsmaßstab beträgt $|B/G| = b/g = \\frac{60\\,\\text{cm}}{30\\,\\text{cm}} = 2$ (zweifach vergrößertes Bild).",
    explanations_incorrect: {
      A: "$b = 10\\,\\text{cm}$ subtrahiert fälschlicherweise direkt die Längenangaben ($30 - 20$) anstatt die Kehrwerte zu verrechnen.",
      B: "$b = 50\\,\\text{cm}$ addiert unzulässig $30 + 20$; zudem entsteht ein gleich großes Bild ($B = G$) nur bei $g = 2f = 40\\,\\text{cm}$.",
      C: "$b = 20\\,\\text{cm}$ setzt die Bildweite gleich der Brennweite; dies tritt nur für parallel einfallendes Licht aus unendlicher Entfernung ($g \\to \\infty$) auf.",
      E: "$b = 40\\,\\text{cm}$ entspricht der doppelten Brennweite $2f$, die nur resultiert, wenn sich auch der Gegenstand bei $g = 2f = 40\\,\\text{cm}$ befindet."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-016",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Elektrostatik & Coulomb-Gesetz",
    difficulty: "foundational",
    stem: "Zwei punktförmige Ladungen $q_1$ und $q_2$ befinden sich im Vakuum im Abstand $r$ zueinander und üben eine elektrostatische Kraft $F_{\\text{C}}$ aufeinander aus. Wie verändert sich diese Kraft, wenn der Abstand zwischen den beiden Ladungen auf ein Drittel verringert wird ($r' = \\frac{1}{3} r$)?",
    options: {
      A: "Die Kraft bleibt unverändert, da die Ladungsmengen $q_1$ und $q_2$ konstant bleiben.",
      B: "Die Kraft verdreifacht sich ($3 \\cdot F_{\\text{C}}$).",
      C: "Die Kraft sinkt auf ein Drittel ($\\frac{1}{3} \\cdot F_{\\text{C}}$).",
      D: "Die Kraft sinkt auf ein Neuntel ($\\frac{1}{9} \\cdot F_{\\text{C}}$).",
      E: "Die Kraft verneunfacht sich ($9 \\cdot F_{\\text{C}}$)."
    },
    correct_answer: "E",
    explanation_correct: "Nach dem Coulomb-Gesetz ist die elektrostatische Kraft zwischen zwei Punktladungen umgekehrt proportional zum Quadrat ihres Abstandes: $F_{\\text{C}} = \\frac{1}{4\pi\\varepsilon_0} \\cdot \\frac{|q_1 \\cdot q_2|}{r^2} \\implies F_{\\text{C}} \\propto \\frac{1}{r^2}$. Bei einer Abstandsverringerung auf ein Drittel ($r' = \\frac{r}{3}$) gilt: $F' \\propto \\frac{1}{(r/3)^2} = \\frac{1}{r^2 / 9} = 9 \\cdot \\frac{1}{r^2} = 9 \\cdot F_{\\text{C}}$. Die elektrostatische Kraft verneunfacht sich somit.",
    explanations_incorrect: {
      A: "Die elektrostatische Coulomb-Kraft hängt fundamental vom gegenseitigen Abstand der Ladungsträger ab; sie bleibt bei einer Abstandsänderung nicht unverändert.",
      B: "Eine Verdreifachung ignoriert das Abstandsquadrat und setzt irrtümlich eine lineare Abhängigkeit $1/r$ an.",
      C: "Eine Verringerung auf ein Drittel verwechselt eine Annäherung mit einer Verdreifachung des Abstands.",
      D: "Ein Neuntel wäre die Kraft, wenn der Abstand auf das Dreifache ($3r$) vergrößert worden wäre."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-017",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Gleichstromkreise & Parallelschaltung",
    difficulty: "intermediate",
    stem: "Zwei ohmsche Widerstände $R_1 = 30\\,\\Omega$ und $R_2 = 60\\,\\Omega$ werden parallel an eine konstante Gleichspannungsquelle von $U = 12\\,\\text{V}$ angeschlossen. Wie groß sind der Gesamtwiderstand $R_{\\text{ges}}$ der Schaltung und die vom Netzteil gelieferte Gesamtstromstärke $I_{\\text{ges}}$?",
    options: {
      A: "$R_{\\text{ges}} = 20\\,\\Omega$; $I_{\\text{ges}} = 0{,}6\\,\\text{A}$",
      B: "$R_{\\text{ges}} = 90\\,\\Omega$; $I_{\\text{ges}} = 0{,}13\\,\\text{A}$",
      C: "$R_{\\text{ges}} = 45\\,\\Omega$; $I_{\\text{ges}} = 0{,}27\\,\\text{A}$",
      D: "$R_{\\text{ges}} = 20\\,\\Omega$; $I_{\\text{ges}} = 2{,}4\\,\\text{A}$",
      E: "$R_{\\text{ges}} = 10\\,\\Omega$; $I_{\\text{ges}} = 1{,}2\\,\\text{A}$"
    },
    correct_answer: "A",
    explanation_correct: "Bei einer Parallelschaltung addieren sich die Kehrwerte der Widerstände (Leitwerte): $\\frac{1}{R_{\\text{ges}}} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{30\\,\\Omega} + \\frac{1}{60\\,\\Omega} = \\frac{2 + 1}{60\\,\\Omega} = \\frac{3}{60\\,\\Omega} = \\frac{1}{20\\,\\Omega} \\implies R_{\\text{ges}} = 20\\,\\Omega$. Der Gesamtwiderstand einer Parallelschaltung ist stets kleiner als der kleinste Einzelwiderstand. Nach dem Ohmschen Gesetz beträgt die Gesamtstromstärke: $I_{\\text{ges}} = \\frac{U}{R_{\\text{ges}}} = \\frac{12\\,\\text{V}}{20\\,\\Omega} = 0{,}6\\,\\text{A}$. (Alternativ über die Zweigströme: $I_1 = \\frac{12}{30} = 0{,}4\\,\\text{A}$, $I_2 = \\frac{12}{60} = 0{,}2\\,\\text{A} \\implies I_{\\text{ges}} = 0{,}4 + 0{,}2 = 0{,}6\\,\\text{A}$).",
    explanations_incorrect: {
      B: "$R_{\\text{ges}} = 90\\,\\Omega$ berechnet fälschlicherweise eine Reihenschaltung ($R_1 + R_2 = 30 + 60 = 90\\,\\Omega$).",
      C: "$R_{\\text{ges}} = 45\\,\\Omega$ berechnet irrtümlich den arithmetischen Mittelwert $(30 + 60) / 2$.",
      D: "Der Gesamtwiderstand $20\\,\\Omega$ ist zwar korrekt, die Stromstärke wurde jedoch rechnerisch fehlerhaft bestimmt ($I = \\frac{U}{R} = \\frac{12}{20} = 0{,}6\\,\\text{A}$, nicht $2{,}4\\,\\text{A}$).",
      E: "$R_{\\text{ges}} = 10\\,\\Omega$ halbiert den korrekten Gesamtwiderstand willkürlich nochmals."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  },
  {
    id: "PHYS-BMS-018",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Atom- und Kernphysik",
    subtopic: "Radioaktivität & Zerfallsgesetz",
    difficulty: "advanced",
    stem: "Ein radioaktives Nuklid besitzt eine Halbwertszeit von $T_{1/2} = 8\\,\\text{Tagen}$ (wie z. B. $^{131}_{53}\\text{I}$ in der Nuklearmedizin). Nach welcher Zeitspanne $t$ ist die Aktivität einer frisch zubereiteten Probe auf genau $3{,}125\\,\\%$ (entsprechend $\\frac{1}{32}$) ihres ursprünglichen Anfangswertes abgefallen?",
    options: {
      A: "32 Tage",
      B: "24 Tage",
      C: "40 Tage",
      D: "64 Tage",
      E: "48 Tage"
    },
    correct_answer: "C",
    explanation_correct: "Nach dem radioaktiven Zerfallsgesetz gilt für die Aktivität: $A(t) = A_0 \\cdot \\left(\\frac{1}{2}\right)^n$, wobei $n = \\frac{t}{T_{1/2}}$ die Anzahl der verstrichenen Halbwertszeiten angibt. Das vorgegebene Restaktivitätsverhältnis lautet: $\\frac{A(t)}{A_0} = 3{,}125\\,\\% = 0{,}03125 = \\frac{1}{32}$. Da $32 = 2^5$ ist ($2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$), sind exakt $n = 5$ Halbwertszeiten vergangen. Die verstrichene Gesamtzeit beträgt somit: $t = n \\cdot T_{1/2} = 5 \\cdot 8\\,\\text{Tage} = 40\\,\\text{Tage}$.",
    explanations_incorrect: {
      A: "32 Tage entsprechen 4 Halbwertszeiten ($4 \\cdot 8$), wonach noch $\\frac{1}{16} = 6{,}25\\,\\%$ der Aktivität vorhanden sind (verwechselt den Nenner 32 mit der Tageszahl).",
      B: "24 Tage entsprechen 3 Halbwertszeiten ($3 \\cdot 8$), wonach noch $\\frac{1}{8} = 12{,}5\\,\\%$ der Aktivität vorhanden sind.",
      D: "64 Tage entsprechen 8 Halbwertszeiten ($8 \\cdot 8 = 64$), wonach noch $\\frac{1}{256} \approx 0{,}39\\,\\%$ vorhanden wären.",
      E: "48 Tage entsprechen 6 Halbwertszeiten ($6 \\cdot 8 = 48$), wonach nur noch $\\frac{1}{64} \\approx 1{,}56\\,\\%$ der Anfangsaktivität übrig wären."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_18_items_randomized_keys"
    }
  }
];

function mapChapterId(primaryTopic: string, _subtopic: string): string {
  switch (primaryTopic) {
    case "Größen und Einheiten":
      return "phys-01-groessen-einheiten";
    case "Mechanik":
      return "phys-02-mechanik";
    case "Schwingungen und Wellen":
      return "phys-03-schwingungen-wellen";
    case "Wärmelehre":
      return "phys-04-waermelehre";
    case "Elektrizitätslehre":
      return "phys-05-elektrizitaet";
    case "Optik":
      return "phys-06-optik";
    case "Atom- und Kernphysik":
      return "phys-07-atom-kernphysik";
    default:
      return "phys-02-mechanik";
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
 * Normalisierte 18 StoredQuestion-Objekte für die MedAT-H Generalprobe #1 Runtime-Engine
 */
export const GENERALPROBE_1_PHYS_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_PHYS_QUESTIONS.map(
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
      subjectId: "phys",
      chapterId: mapChapterId(q.primary_topic, q.subtopic),
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Physik", "Generalprobe #1", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_18_items_randomized_keys",
      setOrder: idx + 1,
    };
  }
);
