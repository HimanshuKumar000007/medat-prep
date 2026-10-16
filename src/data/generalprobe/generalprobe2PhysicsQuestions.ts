/**
 * MedAT Physik BMS — 18-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #2 (BMS Physik-Testteil, exakt 18 Original-Aufgaben).
 * 
 * Fachlich und terminologisch präzise angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung:
 * - 4 Grundlagen/Leicht (Foundational) (22,2 %)
 * - 9 Mittel (Intermediate) (50,0 %)
 * - 5 Schwer (Advanced) (27,8 %)
 * 
 * Antwortschlüssel:
 * - A: 4 (Q003, Q007, Q012, Q016)
 * - B: 4 (Q001, Q006, Q010, Q014)
 * - C: 4 (Q004, Q008, Q013, Q018)
 * - D: 3 (Q002, Q009, Q015)
 * - E: 3 (Q005, Q011, Q017)
 * Gesamt: 18 Aufgaben
 */

import type { StoredQuestion } from "../questions/types";

export interface QcPhysGp2QuestionRaw {
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

export const RAW_GENERALPROBE_2_PHYS_QUESTIONS: QcPhysGp2QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Größen und Einheiten (phys-01-groessen-einheiten) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP2-001",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Größen und Einheiten",
    subtopic: "SI-Basiseinheiten vs. Abgeleitete Einheiten",
    difficulty: "foundational",
    stem: "Das Internationale Einheitensystem (SI) unterscheidet zwischen fundamentalen Basiseinheiten und daraus abgeleiteten Einheiten. Welche der folgenden physikalischen Größen besitzt eine Einheit, die direkt zu den sieben SI-Basiseinheiten gehört?",
    options: {
      A: "Elektrische Spannung (Volt, $\\text{V}$)",
      B: "Elektrische Stromstärke (Ampere, $\\text{A}$)",
      C: "Elektrische Ladung (Coulomb, $\\text{C}$)",
      D: "Elektrischer Widerstand (Ohm, $\\Omega$)",
      E: "Elektrische Leistung (Watt, $\\text{W}$)"
    },
    correct_answer: "B",
    explanation_correct: "Die sieben SI-Basiseinheiten sind: Meter ($\\text{m}$ für Länge), Kilogramm ($\\text{kg}$ für Masse), Sekunde ($\\text{s}$ für Zeit), Ampere ($\\text{A}$ für elektrische Stromstärke), Kelvin ($\\text{K}$ für thermodynamische Temperatur), Mol ($\\text{mol}$ für Stoffmenge) und Candela ($\\text{cd}$ für Lichtstärke). Die elektrische Stromstärke ist die einzige fundamentale elektrische Basisgröße im SI-System. Alle anderen genannten Größen sind kohärent abgeleitete Einheiten.",
    explanations_incorrect: {
      A: "Volt ($\\text{V}$) ist eine abgeleitete Einheit für elektrisches Potenzial/Spannung ($1\\,\\text{V} = 1\\,\\text{W/A} = \\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3} \\cdot \\text{A}^{-1}$).",
      C: "Coulomb ($\\text{C}$) ist eine abgeleitete Einheit für elektrische Ladung ($1\\,\\text{C} = 1\\,\\text{A} \\cdot \\text{s}$).",
      D: "Ohm ($\\Omega$) ist eine abgeleitete Einheit für elektrischen Widerstand ($1\\,\\Omega = 1\\,\\text{V/A} = \\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3} \\cdot \\text{A}^{-2}$).",
      E: "Watt ($\\text{W}$) ist eine abgeleitete Einheit für Leistung ($1\\,\\text{W} = 1\\,\\text{J/s} = \\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3}$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-002",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Größen und Einheiten",
    subtopic: "Präfixe & Dichte-Einheitenumrechnung",
    difficulty: "intermediate",
    stem: "In der klinischen Labordiagnostik wird die Dichte einer Serumprobe mit $\\rho = 1{,}06\\,\\text{g/cm}^3$ gemessen. Wie lautet dieser Dichtewert exakt in der kohärenten SI-Einheit $\\text{kg/m}^3$, und welcher Zehnerpotenz entspricht das Einheitenvorsatz-Präfix 'Mikro' ($\\mu$)?",
    options: {
      A: "$10{,}6\\,\\text{kg/m}^3$; 'Mikro' entspricht $10^{-3}$",
      B: "$106\\,\\text{kg/m}^3$; 'Mikro' entspricht $10^{-9}$",
      C: "$0{,}00106\\,\\text{kg/m}^3$; 'Mikro' entspricht $10^{-6}$",
      D: "$1060\\,\\text{kg/m}^3$; 'Mikro' entspricht $10^{-6}$",
      E: "$10\\,600\\,\\text{kg/m}^3$; 'Mikro' entspricht $10^{-12}$"
    },
    correct_answer: "D",
    explanation_correct: "Die Umrechnung von $\\text{g/cm}^3$ in $\\text{kg/m}^3$ erfolgt über: $1\\,\\text{g} = 10^{-3}\\,\\text{kg}$ und $1\\,\\text{cm}^3 = (10^{-2}\\,\\text{m})^3 = 10^{-6}\\,\\text{m}^3$. Daraus folgt: $1\\,\\text{g/cm}^3 = \\frac{10^{-3}\\,\\text{kg}}{10^{-6}\\,\\text{m}^3} = 10^3\\,\\text{kg/m}^3 = 1000\\,\\text{kg/m}^3$. Somit entspricht $\\rho = 1{,}06\\,\\text{g/cm}^3 = 1{,}06 \\cdot 1000\\,\\text{kg/m}^3 = 1060\\,\\text{kg/m}^3$. Das SI-Präfix Mikro ($\\mu$) steht per Definition für den Faktor $10^{-6}$ (ein Millionstel).",
    explanations_incorrect: {
      A: "$10{,}6\\,\\text{kg/m}^3$ ist um den Faktor 100 zu klein; $10^{-3}$ entspricht Milli (m), nicht Mikro.",
      B: "$106\\,\\text{kg/m}^3$ ist um den Faktor 10 zu klein; $10^{-9}$ entspricht Nano (n).",
      C: "$0{,}00106\\,\\text{kg/m}^3$ dividiert irrtümlich durch 1000 statt zu multiplizieren.",
      E: "$10\\,600\\,\\text{kg/m}^3$ ist um den Faktor 10 zu groß; $10^{-12}$ entspricht Piko (p)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Mechanik (phys-02-mechanik) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP2-003",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Hookesches Gesetz & Federkraft",
    difficulty: "foundational",
    stem: "Eine elastische Schraubenfeder mit der Federkonstanten $D = 200\\,\\text{N/m}$ wird durch eine äußere Kraft im elastischen Bereich um eine Strecke von $\\Delta x = 5\\,\\text{cm}$ aus ihrer Ruhelage gedehnt. Welche Rückstellkraft $F$ übt die Feder aus, und wie verhält sich diese Rückstellkraft bei Verdopplung der Dehnungsstrecke?",
    options: {
      A: "$F = 10\\,\\text{N}$; die Rückstellkraft verdoppelt sich, da sie direkt proportional zur Auslenkung ist ($F \\propto \\Delta x$).",
      B: "$F = 1000\\,\\text{N}$; die Rückstellkraft verdoppelt sich.",
      C: "$F = 10\\,\\text{N}$; die Rückstellkraft vervierfacht sich, da die Dehnung quadratisch eingeht.",
      D: "$F = 1\\,\\text{N}$; die Rückstellkraft halbiert sich.",
      E: "$F = 40\\,\\text{N}$; die Rückstellkraft bleibt konstant."
    },
    correct_answer: "A",
    explanation_correct: "Nach dem Hookeschen Gesetz gilt für den linear-elastischen Bereich: $F = D \\cdot \\Delta x$. Mit $D = 200\\,\\text{N/m}$ und $\\Delta x = 5\\,\\text{cm} = 0{,}05\\,\\text{m}$ ergibt sich: $F = 200\\,\\text{N/m} \\cdot 0{,}05\\,\\text{m} = 10\\,\\text{N}$. Da die Federkraft streng linear von der Auslenkung abhängt ($F \\propto \\Delta x$), führt eine Verdopplung der Auslenkung zu einer Verdopplung der Rückstellkraft ($F' = 20\\,\\text{N}$). (Die potentielle Spannenergie $E_{\\text{sp}} = \\frac{1}{2}D(\\Delta x)^2$ hingegen würde sich vervierfachen).",
    explanations_incorrect: {
      B: "$1000\\,\\text{N}$ entsteht, wenn Zentimeter ($5$) statt Meter ($0{,}05$) eingesetzt werden ($200 \\cdot 5 = 1000$).",
      C: "Die Kraft ist linear und nicht quadratisch von der Auslenkung abhängig; die Vervierfachung betrifft die Spannenergie, nicht die Federkraft.",
      D: "$1\\,\\text{N}$ resultiert aus einem Zehnerpotenzfehler; die Rückstellkraft sinkt bei größerer Dehnung keinesfalls.",
      E: "$40\\,\\text{N}$ berechnet fehlerhaft $200 / 5$; die Federkraft ist proportional zur Dehnung und nicht konstant."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-004",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Kinematik: Reaktions- und Bremsweg",
    difficulty: "intermediate",
    stem: "Ein Notarzt-Einsatzfahrzeug fährt mit einer konstanten Geschwindigkeit von $v_0 = 72\\,\\text{km/h}$ auf ebener Fahrbahn. Die Fahrerin leitet nach einer Reaktionszeit von $t_{\\text{R}} = 1{,}0\\,\\text{s}$ eine Notbremsung mit konstanter Verzögerung von $a = 5{,}0\\,\\text{m/s}^2$ bis zum vollständigen Stillstand ein. Welchen gesamten Anhalteweg $s_{\\text{ges}}$ legt das Fahrzeug ab dem Zeitpunkt der Hinderniserkennung zurück?",
    options: {
      A: "$s_{\\text{ges}} = 40\\,\\text{m}$",
      B: "$s_{\\text{ges}} = 112\\,\\text{m}$",
      C: "$s_{\\text{ges}} = 60\\,\\text{m}$",
      D: "$s_{\\text{ges}} = 80\\,\\text{m}$",
      E: "$s_{\\text{ges}} = 20\\,\\text{m}$"
    },
    correct_answer: "C",
    explanation_correct: "1. Geschwindigkeitsumrechnung in SI-Einheiten: $v_0 = \\frac{72}{3{,}6}\\,\\text{m/s} = 20\\,\\text{m/s}$.\\n2. Reaktionsweg (gleichförmige Bewegung mit konstanter Geschwindigkeit): $s_{\\text{R}} = v_0 \\cdot t_{\\text{R}} = 20\\,\\text{m/s} \\cdot 1{,}0\\,\\text{s} = 20\\,\\text{m}$.\\n3. Bremsweg (gleichmäßig verzögerte Bewegung bis zum Stillstand): $s_{\\text{B}} = \\frac{v_0^2}{2a} = \\frac{(20\\,\\text{m/s})^2}{2 \\cdot 5{,}0\\,\\text{m/s}^2} = \\frac{400}{10}\\,\\text{m} = 40\\,\\text{m}$.\\n4. Gesamter Anhalteweg: $s_{\\text{ges}} = s_{\\text{R}} + s_{\\text{B}} = 20\\,\\text{m} + 40\\,\\text{m} = 60\\,\\text{m}$.",
    explanations_incorrect: {
      A: "$40\\,\\text{m}$ ist nur der reine Bremsweg $s_{\\text{B}}$; der während der Reaktionssekunde zurückgelegte Weg ($20\\,\\text{m}$) wurde unterschlagen.",
      B: "$112\\,\\text{m}$ entsteht durch Einsetzen von $72$ statt $20$ beim Reaktionsweg ($72 + 40 = 112$).",
      D: "$80\\,\\text{m}$ vergisst den Faktor 2 im Nenner des Bremswegs ($s = v_0^2 / a = 80\\,\\text{m}$) oder verdoppelt den Gesamtweg.",
      E: "$20\\,\\text{m}$ ist nur der Reaktionsweg ohne Berücksichtigung des Bremswegs."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-005",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Hebelgesetz & Biomechanik",
    difficulty: "intermediate",
    stem: "Im menschlichen Bewegungsapparat wirkt der Unterarm als einarmiger Hebel. Das Ellenbogengelenk dient als Drehpunkt. Die Sehne des Bizepsmuskels setzt im Abstand von $r_1 = 5\\,\\text{cm}$ vor dem Gelenkdrehpunkt an. In der Handfläche wird im Abstand von $r_2 = 35\\,\\text{cm}$ vom Drehpunkt eine Hantel mit der Gewichtskraft $F_{\\text{Last}} = 60\\,\\text{N}$ gehalten (die Eigenmasse des Unterarms wird vernachlässigt). Welche Muskelzugkraft $F_{\\text{Bizeps}}$ muss der Muskel senkrecht zum Unterarm aufbringen, um die Last im horizontalen Gleichgewicht zu halten?",
    options: {
      A: "$60\\,\\text{N}$",
      B: "$300\\,\\text{N}$",
      C: "$8{,}57\\,\\text{N}$",
      D: "$120\\,\\text{N}$",
      E: "$420\\,\\text{N}$"
    },
    correct_answer: "E",
    explanation_correct: "Im statischen Gleichgewicht ist die Summe der Drehmomente bezüglich des Gelenkdrehpunkts gleich null (Drehmomentengleichgewicht): $\\sum M = 0 \\implies F_{\\text{Bizeps}} \\cdot r_1 = F_{\\text{Last}} \\cdot r_2$. Umstellen nach der gesuchten Muskelkraft: $F_{\\text{Bizeps}} = F_{\\text{Last}} \\cdot \\frac{r_2}{r_1} = 60\\,\\text{N} \\cdot \\frac{35\\,\\text{cm}}{5\\,\\text{cm}} = 60\\,\\text{N} \\cdot 7 = 420\\,\\text{N}$. Wegen des kurzen Lastarms des Muskels ($5\\,\\text{cm}$) im Vergleich zum Lastarm der Hand ($35\\,\\text{cm}$, Verhältnis $1:7$) muss der Muskel eine 7-fach höhere Kraft aufbringen als die Gewichtskraft der Hantel.",
    explanations_incorrect: {
      A: "$60\\,\\text{N}$ nähme fälschlicherweise gleiche Hebelarme ($r_1 = r_2$) an.",
      B: "$300\\,\\text{N}$ berechnet fehlerhaft $60 \\cdot 5$.",
      C: "$8{,}57\\,\\text{N}$ dividiert $60$ durch $7$ ($60 / 7 \\approx 8{,}57\\,\\text{N}$), vertauscht also die Hebelarme von Last und Kraft.",
      D: "$120\\,\\text{N}$ verdoppelt lediglich die Lastkraft ohne Bezug zu den realen Hebelarmen."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-006",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Kreisbewegung & Zentripetalbeschleunigung",
    difficulty: "intermediate",
    stem: "In einer medizinischen Laborzentrifuge rotiert eine Blutprobe mit einer konstanten Drehfrequenz von $f = 50\\,\\text{Hz}$ ($3000\\,\\text{U/min}$). Der effektive Abstand der Probe zur Drehachse beträgt $r = 10\\,\\text{cm} = 0{,}10\\,\\text{m}$. Welche Zentripetalbeschleunigung $a_{\\text{Z}}$ erfährt die Blutprobe während der Zentrifugation? (Hinweis: Verwende die Näherung $\\pi^2 \\approx 10$).",
    options: {
      A: "$a_{\\text{Z}} \\approx 1000\\,\\text{m/s}^2$",
      B: "$a_{\\text{Z}} \\approx 10\\,000\\,\\text{m/s}^2$ (entspricht ca. $1000\\,g$)",
      C: "$a_{\\text{Z}} \\approx 500\\,\\text{m/s}^2$",
      D: "$a_{\\text{Z}} \\approx 100\\,\\text{m/s}^2$",
      E: "$a_{\\text{Z}} \\approx 100\\,000\\,\\text{m/s}^2$"
    },
    correct_answer: "B",
    explanation_correct: "Die Winkelgeschwindigkeit berechnet sich aus der Drehfrequenz: $\\omega = 2\\pi \\cdot f = 2\\pi \\cdot 50\\,\\text{s}^{-1} = 100\\pi\\,\\text{s}^{-1}$. Die Zentripetalbeschleunigung ist definiert als $a_{\\text{Z}} = \\omega^2 \\cdot r$. Einsetzen der Werte: $a_{\\text{Z}} = (100\\pi\\,\\text{s}^{-1})^2 \\cdot 0{,}10\\,\\text{m} = 10\\,000 \\cdot \\pi^2 \\cdot 0{,}10\\,\\text{m/s}^2$. Mit $\\pi^2 \\approx 10$ ergibt sich: $a_{\\text{Z}} \\approx 10\\,000 \\cdot 10 \\cdot 0{,}10\\,\\text{m/s}^2 = 10\\,000\\,\\text{m/s}^2$. Bei einer Erdbeschleunigung von $g \\approx 10\\,\\text{m/s}^2$ entspricht dies dem 1000-fachen der einfachen Erdbeschleunigung ($1000\\,g$).",
    explanations_incorrect: {
      A: "$1000\\,\\text{m/s}^2$ vergisst das Quadrieren der Frequenz oder setzt $\\omega = 2\\pi f$ linear an.",
      C: "$500\\,\\text{m/s}^2$ berechnet lediglich $f / r$ mit falscher Zehnerpotenz.",
      D: "$100\\,\\text{m/s}^2$ entspricht lediglich der Winkelgeschwindigkeit im Quadrat ohne den Radius und die Vorfaktoren.",
      E: "$100\\,000\\,\\text{m/s}^2$ multipliziert versehentlich nochmals mit 10 oder quadriert den Radius."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-007",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Hydrodynamik: Gesetz von Hagen-Poiseuille",
    difficulty: "advanced",
    stem: "Das Gesetz von Hagen-Poiseuille beschreibt die stationäre laminare Strömung einer Newtonschen Flüssigkeit durch ein zylindrisches Gefäß. Der Strömungswiderstand $R_{\\text{str}}$ verhält sich dabei umgekehrt proportional zur vierten Potenz des Gefäßinnenradius ($R_{\\text{str}} \\propto \\frac{1}{r^4}$). Infolge einer arteriosklerotischen Verengung verringert sich der Innenradius einer Koronararterie um $50\\,\\%$ auf die Hälfte ($r' = 0{,}5\\,r$). Um welchen Faktor steigt der Strömungswiderstand dieses Gefäßabschnitts bei unveränderter Länge und Blutviskosität an?",
    options: {
      A: "Um den Faktor 16",
      B: "Um den Faktor 2",
      C: "Um den Faktor 4",
      D: "Um den Faktor 8",
      E: "Um den Faktor 64"
    },
    correct_answer: "A",
    explanation_correct: "Nach dem Gesetz von Hagen-Poiseuille gilt für den Strömungswiderstand: $R_{\\text{str}} = \\frac{8\\eta l}{\\pi r^4} \\propto \\frac{1}{r^4}$. Bei einer Halbierung des Radius ($r' = \\frac{1}{2}r$) gilt für den neuen Widerstand: $R_{\\text{str}}' \\propto \\frac{1}{(r/2)^4} = \\frac{1}{r^4 / 16} = 16 \\cdot \\frac{1}{r^4} = 16 \\cdot R_{\\text{str}}$. Der Strömungswiderstand versechzehnfacht sich. Um den gleichen Blutvolumenstrom aufrechtzuerhalten, müsste der Druckgradient um das 16-Fache ansteigen. Dies verdeutlicht die extreme Auswirkung von Gefäßstenosen auf das Herz-Kreislauf-System.",
    explanations_incorrect: {
      B: "Faktor 2 nimmt fälschlicherweise eine einfache umgekehrte Proportionalität ($1/r$) an.",
      C: "Faktor 4 basiert auf einer quadratischen Abhängigkeit ($1/r^2$), was der Querschnittsfläche entspräche, nicht dem Strömungswiderstand.",
      D: "Faktor 8 nimmt eine kubische Abhängigkeit ($1/r^3$) an.",
      E: "Faktor 64 entspricht einer Potenz von 6 ($2^6 = 64$), was physikalisch unbegründet ist."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Schwingungen und Wellen (phys-03-schwingungen-wellen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP2-008",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Harmonische Schwingung: Federpendel",
    difficulty: "intermediate",
    stem: "Ein Federpendel besteht aus einem Massekörper $m_1 = 0{,}25\\,\\text{kg}$ an einer Schraubenfeder mit der Richtgröße $D = 100\\,\\text{N/m}$. Welche Schwingungsdauer $T$ besitzt dieses Federpendel bei ungedämpfter harmonischer Schwingung, und wie verändert sich $T$, wenn die angehängte Masse auf das Vierfache ($m_2 = 1{,}0\\,\\text{kg}$) erhöht wird? (Hinweis: Verwende die Näherung $\\pi \\approx 3{,}14$).",
    options: {
      A: "$T \\approx 0{,}16\\,\\text{s}$; die Schwingungsdauer vervierfacht sich.",
      B: "$T \\approx 0{,}63\\,\\text{s}$; die Schwingungsdauer bleibt unverändert.",
      C: "$T \\approx 0{,}31\\,\\text{s}$; die Schwingungsdauer verdoppelt sich.",
      D: "$T \\approx 1{,}26\\,\\text{s}$; die Schwingungsdauer halbiert sich.",
      E: "$T \\approx 0{,}05\\,\\text{s}$; die Schwingungsdauer steigt um den Faktor $\\sqrt{2}$."
    },
    correct_answer: "C",
    explanation_correct: "Die Schwingungsdauer eines linearen Feder-Masse-Pendels lautet: $T = 2\\pi \\sqrt{\\frac{m}{D}}$. Einsetzen der Werte: $T = 2\\pi \\sqrt{\\frac{0{,}25\\,\\text{kg}}{100\\,\\text{N/m}}} = 2\\pi \\sqrt{0{,}0025\\,\\text{s}^2} = 2\\pi \\cdot 0{,}05\\,\\text{s} = 0{,}10\\pi\\,\\text{s} \\approx 0{,}314\\,\\text{s} \\approx 0{,}31\\,\\text{s}$. Da $T$ proportional zur Quadratwurzel der Masse ist ($T \\propto \\sqrt{m}$), bewirkt eine Vervierfachung der Masse eine Verdopplung der Schwingungsdauer: $T' = 2\\pi \\sqrt{\\frac{4m}{D}} = 2 \\cdot T \\approx 0{,}63\\,\\text{s}$.",
    explanations_incorrect: {
      A: "$0{,}16\\,\\text{s}$ unterschlägt den Faktor 2 vor $\\pi$; bei Vervierfachung der Masse verdoppelt sich $T$ wegen der Wurzel, sie vervierfacht sich nicht linear.",
      B: "$0{,}63\\,\\text{s}$ ist die Schwingungsdauer der vierfachen Masse; die Periodendauer ist nicht unabhängig von der Masse.",
      D: "$1{,}26\\,\\text{s}$ ist vierfach zu groß; die Schwingungsdauer steigt bei Massenzunahme, anstatt sich zu halbieren.",
      E: "$0{,}05\\,\\text{s}$ ist lediglich der Wert der Wurzel $\\sqrt{0{,}0025}$ ohne Multiplikation mit $2\\pi$."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-009",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Akustik: Dezibel-Schallpegel",
    difficulty: "advanced",
    stem: "Der Schallintensitätspegel $L$ in Dezibel ($\\text{dB}$) ist logarithmisch über $L = 10 \\cdot \\log_{10}\\left(\\frac{I}{I_0}\\right)\\,\\text{dB}$ definiert (mit der Bezugsintensität an der Hörschwelle $I_0 = 10^{-12}\\,\\text{W/m}^2$). An einem Arbeitsplatz wird zunächst ein Schallpegel von $L_1 = 60\\,\\text{dB}$ gemessen. Durch den Betrieb weiterer Aggregate verhundertfacht sich die einfallende Schallintensität auf $I_2 = 100 \\cdot I_1$. Welcher neue Schallpegel $L_2$ stellt sich ein?",
    options: {
      A: "$L_2 = 6000\\,\\text{dB}$",
      B: "$L_2 = 160\\,\\text{dB}$",
      C: "$L_2 = 62\\,\\text{dB}$",
      D: "$L_2 = 80\\,\\text{dB}$",
      E: "$L_2 = 120\\,\\text{dB}$"
    },
    correct_answer: "D",
    explanation_correct: "Nach den Logarithmengesetzen gilt: $L_2 = 10 \\cdot \\log_{10}\\left(\\frac{100 \\cdot I_1}{I_0}\\right) = 10 \\cdot \\left[\\log_{10}(100) + \\log_{10}\\left(\\frac{I_1}{I_0}\\right)\\right] = 10 \\cdot 2 + L_1 = 20\\,\\text{dB} + L_1$. Mit $L_1 = 60\\,\\text{dB}$ ergibt sich: $L_2 = 60\\,\\text{dB} + 20\\,\\text{dB} = 80\\,\\text{dB}$. Eine Verzehnfachung der Schallintensität bedeutet ein Plus von $+10\\,\\text{dB}$, eine Verhundertfachung ($10^2$) ein Plus von $+20\\,\\text{dB}$.",
    explanations_incorrect: {
      A: "$6000\\,\\text{dB}$ multipliziert unzulässig den Dezibel-Pegel direkt mit 100; Dezibel ist eine logarithmische Skala.",
      B: "$160\\,\\text{dB}$ addiert 100 direkt auf die 60 dB; $160\\,\\text{dB}$ läge weit oberhalb der Schmerzgrenze und würde eine Intensitätszunahme um den Faktor $10^{10}$ erfordern.",
      C: "$62\\,\\text{dB}$ nähme fälschlicherweise an, dass $+3\\,\\text{dB}$ einer Verhundertfachung entsprechen (tatsächlich entspricht $+3\\,\\text{dB}$ einer Verdopplung).",
      E: "$120\\,\\text{dB}$ verdoppelt den dB-Wert willkürlich ($60 \\cdot 2$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Wärmelehre (phys-04-waermelehre) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP2-010",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Wärmetransportmechanismen",
    difficulty: "foundational",
    stem: "Wärmeenergie kann makroskopisch über drei Mechanismen übertragen werden: Wärmeleitung (Konduktion), Wärmeströmung (Konvektion) und Wärmestrahlung. Welcher dieser Transportprozesse kann Wärmeenergie auch durch ein physikalisches Vakuum hindurch transportieren?",
    options: {
      A: "Ausschließlich Wärmeströmung (Konvektion), da Fluide im Vakuum widerstandslos fließen.",
      B: "Ausschließlich Wärmestrahlung, da der Energietransport über elektromagnetische Wellen (vorwiegend Infrarotstrahlung) erfolgt und kein materielles Trägermedium benötigt.",
      C: "Sowohl Wärmeleitung als auch Wärmestrahlung, da beide mikroskopisch auf atomaren Stößen beruhen.",
      D: "Alle drei Mechanismen sind im Vakuum uneingeschränkt wirksam.",
      E: "Keiner der Mechanismen; im Vakuum ist thermischer Energietransport physikalisch unmöglich."
    },
    correct_answer: "B",
    explanation_correct: "Wärmeleitung setzt direkten mikroskopischen Kontakt materieller Teilchen (Stoßübertragung in Festkörpern/Fluiden) voraus. Wärmeströmung (Konvektion) erfordert die makroskopische Bewegung eines stofflichen Trägerfluids (Gas oder Flüssigkeit). Nur die Wärmestrahlung transportiert thermische Energie in Form von elektromagnetischen Wellen (Photonen, vorwiegend im Infrarotbereich), die sich mit Lichtgeschwindigkeit auch durch das materiefreie Vakuum ausbreiten (Beispiel: Energietransport der Sonne zur Erde durch den interplanetaren Raum).",
    explanations_incorrect: {
      A: "Konvektion erfordert zwingend Materie (ein Fluid); im Vakuum existiert kein Medium, das strömen könnte.",
      C: "Wärmeleitung beruht auf Teilchenkollisionen bzw. Gitterschwingungen (Phononen) und kann im Vakuum ohne Teilchen nicht stattfinden.",
      D: "Konduktion und Konvektion sind an Materie gebunden und im Vakuum vollständig unterbunden.",
      E: "Die Wärmestrahlung funktioniert im Vakuum hervorragend (Grundprinzip der Thermoskanne zur Isolation gegen Konduktion/Konvektion)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-011",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Thermische Längenausdehnung",
    difficulty: "intermediate",
    stem: "Eine metallische Titanschiene in der Osteosynthese besitzt bei Raumtemperatur ($T_1 = 20\\,^\\circ\\text{C}$) eine Länge von $l_0 = 200\\,\\text{mm}$. Der lineare Längenausdehnungskoeffizient von Titan beträgt $\\alpha = 8{,}5 \\cdot 10^{-6}\\,\\text{K}^{-1}$. Um wie viel Mikrometer ($\\mu\\text{m}$) verlängert sich die Schiene, wenn sie bei der Heißdampf-Sterilisation im Autoklaven auf $T_2 = 120\\,^\\circ\\text{C}$ erwärmt wird?",
    options: {
      A: "$\\Delta l = 17\\,\\mu\\text{m}$",
      B: "$\\Delta l = 85\\,\\mu\\text{m}$",
      C: "$\\Delta l = 340\\,\\mu\\text{m}$",
      D: "$\\Delta l = 850\\,\\mu\\text{m}$",
      E: "$\\Delta l = 170\\,\\mu\\text{m}$"
    },
    correct_answer: "E",
    explanation_correct: "Die Temperaturdifferenz beträgt $\\Delta T = 120\\,^\\circ\\text{C} - 20\\,^\\circ\\text{C} = 100\\,\\text{K}$. Nach dem linearen Ausdehnungsgesetz gilt: $\\Delta l = l_0 \\cdot \\alpha \\cdot \\Delta T$. Einsetzen der Werte: $\\Delta l = 200\\,\\text{mm} \\cdot 8{,}5 \\cdot 10^{-6}\\,\\text{K}^{-1} \\cdot 100\\,\\text{K} = 200 \\cdot 8{,}5 \\cdot 10^{-4}\\,\\text{mm} = 1700 \\cdot 10^{-4}\\,\\text{mm} = 0{,}170\\,\\text{mm}$. Da $1\\,\\text{mm} = 1000\\,\\mu\\text{m}$ ist, entspricht dies exakt $\\Delta l = 0{,}170 \\cdot 1000\\,\\mu\\text{m} = 170\\,\\mu\\text{m}$.",
    explanations_incorrect: {
      A: "$17\\,\\mu\\text{m}$ verrechnet die Zehnerpotenzen fehlerhaft (Faktor 10 zu klein).",
      B: "$85\\,\\mu\\text{m}$ vergisst die Verdopplung durch die Ausgangslänge von $200\\,\\text{mm}$ ($85 \\cdot 100 / 100$).",
      C: "$340\\,\\mu\\text{m}$ verdoppelt den Wert fälschlicherweise nochmals.",
      D: "$850\\,\\mu\\text{m}$ multipliziert mit der Endtemperatur ($120$) anstatt mit der Temperaturdifferenz ($100\\,\\text{K}$) und begeht einen Zehnerpotenzfehler."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-012",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Phasenübergang & Latente Schmelzwärme",
    difficulty: "advanced",
    stem: "In einem isolierten Gefäß befindet sich ein Eiswürfel der Masse $m = 50\\,\\text{g}$ bei exakt $T_0 = 0\\,^\\circ\\text{C}$. Welche Wärmemenge $Q$ muss zugeführt werden, um das Eis vollständig zu schmelzen und das resultierende Schmelzwasser anschließend auf Körperkerntemperatur von $T_1 = 37\\,^\\circ\\text{C}$ zu erwärmen?\\n(Gegeben: Spezifische Schmelzwärme von Eis $q_s = 334\\,\\text{J/g}$; spezifische Wärmekapazität von flüssigem Wasser $c_W \\approx 4{,}2\\,\\text{J/(g} \\cdot \\text{K)}$; Wärmekapazität des Gefäßes vernachlässigt).",
    options: {
      A: "$Q \\approx 24{,}47\\,\\text{kJ}$ ($24\\,470\\,\\text{J}$)",
      B: "$Q \\approx 16{,}70\\,\\text{kJ}$",
      C: "$Q \\approx 7{,}77\\,\\text{kJ}$",
      D: "$Q \\approx 33{,}40\\,\\text{kJ}$",
      E: "$Q \\approx 4{,}20\\,\\text{kJ}$"
    },
    correct_answer: "A",
    explanation_correct: "Der thermische Gesamtprozess besteht aus zwei Schritten:\\n1. Schmelzen des Eises bei konstanter Temperatur ($0\\,^\\circ\\text{C}$): $Q_1 = m \\cdot q_s = 50\\,\\text{g} \\cdot 334\\,\\text{J/g} = 16\\,700\\,\\text{J} = 16{,}70\\,\\text{kJ}$.\\n2. Erwärmung des geschmolzenen Wassers von $0\\,^\\circ\\text{C}$ auf $37\\,^\\circ\\text{C}$ ($\\\\Delta T = 37\\,\\text{K}$): $Q_2 = m \\cdot c_W \\cdot \\Delta T = 50\\,\\text{g} \\cdot 4{,}2\\,\\text{J/(g} \\cdot \\text{K)} \\cdot 37\\,\\text{K} = 210 \\cdot 37\\,\\text{J} = 7770\\,\\text{J} = 7{,}77\\,\\text{kJ}$.\\n3. Gesamte Wärmemenge: $Q = Q_1 + Q_2 = 16\\,700\\,\\text{J} + 7770\\,\\text{J} = 24\\,470\\,\\text{J} \\approx 24{,}47\\,\\text{kJ}$.",
    explanations_incorrect: {
      B: "$16{,}70\\,\\text{kJ}$ ist lediglich die latente Schmelzwärme $Q_1$; die Erwärmung des Wassers auf $37\\,^\\circ\\text{C}$ wurde ignoriert.",
      C: "$7{,}77\\,\\text{kJ}$ ist nur die Erwärmungswärme $Q_2$; die zum Aufbrechen des Eisgitters erforderliche Schmelzwärme wurde vergessen.",
      D: "$33{,}40\\,\\text{kJ}$ verdoppelt irrtümlich die Schmelzwärme.",
      E: "$4{,}20\\,\\text{kJ}$ verrechnet lediglich die spezifische Wärmekapazität ohne korrekte Massen- und Temperaturmultiplikation."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Elektrizitätslehre (phys-05-elektrizitaet) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP2-013",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Plattenkondensator & Dielektrikum",
    difficulty: "intermediate",
    stem: "Ein Plattenkondensator mit Luft zwischen den Platten (relative Permittivität $\\varepsilon_r \\approx 1$) besitzt den Plattenabstand $d$, die Plattenfläche $A$ und die Kapazität $C_0$. Der Kondensator wird von der Ladespannungsquelle getrennt (Ladung $Q$ bleibt konstant). Anschließend wird der Plattenabstand auf das Doppelte vergrößert ($d' = 2d$) und der gesamte Zwischenraum vollständig mit einem Dielektrikum der relativen Permittivität $\\varepsilon_r = 6$ gefüllt. Welche neue Kapazität $C'$ besitzt der Kondensator?",
    options: {
      A: "$C' = \\frac{1}{3} C_0$",
      B: "$C' = 2 C_0$",
      C: "$C' = 3 C_0$",
      D: "$C' = 6 C_0$",
      E: "$C' = C_0$"
    },
    correct_answer: "C",
    explanation_correct: "Die Kapazität eines Plattenkondensators ist gegeben durch: $C = \\varepsilon_0 \\varepsilon_r \\frac{A}{d}$. Bei Verdopplung des Plattenabstands ($d' = 2d$) und Einführung des Dielektrikums mit $\\varepsilon_r = 6$ gilt: $C' = \\varepsilon_0 \\cdot 6 \\cdot \\frac{A}{2d} = \\frac{6}{2} \\cdot \\left(\\varepsilon_0 \\frac{A}{d}\\right) = 3 \\cdot C_0$. Die Kapazität des Kondensators verdreifacht sich somit.",
    explanations_incorrect: {
      A: "$\\frac{1}{3} C_0$ vertauscht Zähler und Nenner der Änderungen ($2 / 6 = 1/3$).",
      B: "$2 C_0$ berücksichtigt die Abstandsverdopplung nicht korrekt im Nenner.",
      D: "$6 C_0$ ignoriert die kapazitätsmindernde Abstandsverdopplung im Nenner ($d' = 2d$).",
      E: "$C_0$ nimmt irrtümlich an, dass sich die Effekte exakt kompensieren (was bei $\\varepsilon_r = 2$ der Fall wäre, nicht bei $\\varepsilon_r = 6$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-014",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Elektrische Leistung & Ohmscher Widerstand",
    difficulty: "intermediate",
    stem: "Zwei elektrische Verbraucher sind für den Betrieb an einer festen Netzspannung von $U = 230\\,\\text{V}$ ausgelegt. Gerät 1 besitzt eine Nennleistung von $P_1 = 23\\,\\text{W}$, Gerät 2 eine Nennleistung von $P_2 = 92\\,\\text{W}$. Welches Verhältnis weisen die ohmschen Innenwiderstände der beiden Geräte ($R_1 : R_2$) im regulären Betriebszustand auf?",
    options: {
      A: "$R_1 : R_2 = 1 : 4$",
      B: "$R_1 : R_2 = 4 : 1$",
      C: "$R_1 : R_2 = 1 : 2$",
      D: "$R_1 : R_2 = 2 : 1$",
      E: "$R_1 : R_2 = 16 : 1$"
    },
    correct_answer: "B",
    explanation_correct: "Die elektrische Leistung eines ohmschen Verbrauchers bei konstanter Spannung $U$ lautet: $P = \\frac{U^2}{R} \\implies R = \\frac{U^2}{P}$. Bei identischer Betriebsspannung ist der Widerstand umgekehrt proportional zur Leistung: $R \\propto \\frac{1}{P}$. Für das Widerstandsverhältnis folgt daher: $\\frac{R_1}{R_2} = \\frac{P_2}{P_1} = \\frac{92\\,\\text{W}}{23\\,\\text{W}} = 4 = \\frac{4}{1}$. Der Verbraucher mit der geringeren Nennleistung (23 W) besitzt den 4-fach höheren ohmschen Widerstand ($R_1 = 4 R_2$).",
    explanations_incorrect: {
      A: "$1 : 4$ verwechselt die umgekehrte Proportionalität mit einer direkten Proportionalität ($P \\propto R$ gilt nur bei konstantem Strom $I$, nicht bei konstanter Spannung $U$).",
      C: "$1 : 2$ zieht fälschlicherweise die Quadratwurzel aus dem Leistungsverhältnis.",
      D: "$2 : 1$ nimmt irrtümlich eine Quadratwurzelbeziehung an.",
      E: "$16 : 1$ quadriert das Verhältnis unzulässig ($4^2 = 16$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-015",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Lorentzkraft & Massenspektrometrie",
    difficulty: "advanced",
    stem: "Ein einfach positiv geladenes Ion (Ladung $q = +e$, Masse $m$) tritt mit der Geschwindigkeit $v$ senkrecht in ein homogenes Magnetfeld der Flussdichte $B$ ein und wird durch die Lorentzkraft auf eine Kreisbahn mit dem Radius $r$ gezwungen. Wie verändert sich der Bahnradius $r'$, wenn bei gleicher Magnetfeldstärke ein zweifach positiv geladenes Ion ($q' = +2e$) gleicher Masse $m$ mit doppelter Geschwindigkeit ($v' = 2v$) eingeschossen wird?",
    options: {
      A: "Der Bahnradius vervierfacht sich ($r' = 4r$).",
      B: "Der Bahnradius verdoppelt sich ($r' = 2r$).",
      C: "Der Bahnradius halbiert sich ($r' = 0{,}5r$).",
      D: "Der Bahnradius bleibt exakt unverändert ($r' = r$).",
      E: "Der Bahnradius sinkt auf ein Viertel ($r' = 0{,}25r$)."
    },
    correct_answer: "D",
    explanation_correct: "Die Lorentzkraft wirkt senkrecht zur Bewegungsrichtung und fungiert als Zentripetalkraft: $F_{\\text{L}} = F_{\\text{Z}} \\implies q \\cdot v \\cdot B = m \\cdot \\frac{v^2}{r} \\implies r = \\frac{m \\cdot v}{q \\cdot B}$. Für das zweite Ion gilt: $r' = \\frac{m \\cdot v'}{q' \\cdot B} = \\frac{m \\cdot (2v)}{(2q) \\cdot B} = \\frac{2}{2} \\cdot \\frac{m \\cdot v}{q \\cdot B} = 1 \\cdot r$. Da sich die Verdopplung der Geschwindigkeit im Zähler und die Verdopplung der Ladung im Nenner exakt aufheben, bleibt der Radius der Kreisbahn identisch.",
    explanations_incorrect: {
      A: "$4r$ multipliziert fälschlicherweise die beiden Faktoren ($2 \\cdot 2 = 4$).",
      B: "$2r$ berücksichtigt nur die Geschwindigkeitsverdopplung im Zähler und ignoriert die doppelte Ladung im Nenner.",
      C: "$0{,}5r$ berücksichtigt nur die Ladungsverdopplung im Nenner und vernachlässigt die Geschwindigkeitszunahme.",
      E: "$0{,}25r$ dividiert fälschlicherweise durch $4$."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Optik (phys-06-optik) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP2-016",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Brechkraft & Korrektur von Fehlsichtigkeiten",
    difficulty: "foundational",
    stem: "Die Brechkraft $D$ einer Linse ist definiert als Kehrwert ihrer Brennweite in Metern ($D = \\frac{1}{f}$, Einheit Dioptrie: $1\\,\\text{dpt} = 1\\,\\text{m}^{-1}$). Ein kurzsichtiges Auge (Myopie) besitzt einen im Verhältnis zur optischen Brechkraft zu langen Augapfel, wodurch der Brennpunkt paralleler Lichtstrahlen vor der Netzhaut liegt. Welcher Linsentyp und welche Brennweite $f$ sind zur Korrektur erforderlich, wenn die augenärztliche Verordnung $D = -2{,}5\\,\\text{dpt}$ lautet?",
    options: {
      A: "Eine Zerstreuungslinse (Konkavlinse) mit der Brennweite $f = -0{,}40\\,\\text{m}$ ($-40\\,\\text{cm}$).",
      B: "Eine Sammellinse (Konvexlinse) mit der Brennweite $f = +0{,}25\\,\\text{m}$ ($+25\\,\\text{cm}$).",
      C: "Eine Zerstreuungslinse (Konkavlinse) mit der Brennweite $f = -2{,}5\\,\\text{m}$.",
      D: "Eine Sammellinse (Konvexlinse) mit der Brennweite $f = +0{,}40\\,\\text{m}$ ($+40\\,\\text{cm}$).",
      E: "Eine Zylinderlinse mit der Brennweite $f = -1{,}0\\,\\text{m}$."
    },
    correct_answer: "A",
    explanation_correct: "Bei Kurzsichtigkeit (Myopie) brechen Hornhaut und Augenlinse das Licht zu stark bzw. der Bulbus ist zu lang, sodass die Bildebene vor der Netzhaut liegt. Zur Korrektur muss das einfallende Licht durch eine Zerstreuungslinse (Konkavlinse, negative Brechkraft $D < 0$) divergent aufgeweitet werden, damit der Fokus exakt auf die Netzhaut rückt. Die Brennweite berechnet sich über $f = \\frac{1}{D} = \\frac{1}{-2{,}5\\,\\text{m}^{-1}} = -0{,}40\\,\\text{m} = -40\\,\\text{cm}$.",
    explanations_incorrect: {
      B: "Sammellinsen (Konvexlinse, $D > 0$) verstärken die Brechkraft und korrigieren Weitsichtigkeit (Hyperopie) oder Alterssichtigkeit (Presbyopie), verschlimmern aber eine Myopie.",
      C: "$-2{,}5\\,\\text{m}$ verwechselt den Zahlenwert der Dioptrien direkt mit der Längenangabe in Metern ($1/2{,}5 = 0{,}40$).",
      D: "Eine Sammellinse besitzt eine positive Brechkraft und bricht das Licht stärker zusammen.",
      E: "Zylinderlinsen korrigieren eine Stabsichtigkeit (Astigmatismus), keine sphärische Myopie."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "PHYS-BMS-GP2-017",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Snellius-Brechungsgesetz & Wellenlänge im Medium",
    difficulty: "advanced",
    stem: "Gelbes Licht mit einer Vakuumwellenlänge von $\\lambda_0 = 600\\,\\text{nm}$ ($c_0 = 3{,}0 \\cdot 10^8\\,\\text{m/s}$) tritt aus dem Vakuum in einen Quarzglaskörper mit dem Brechungsindex $n = 1{,}50$ ein. Welche Lichtgeschwindigkeit $c_{\\text{Glas}}$, welche Wellenlänge $\\lambda_{\\text{Glas}}$ und welche Frequenz $f$ besitzt das Licht im Quarzglas?",
    options: {
      A: "$c_{\\text{Glas}} = 3{,}0 \\cdot 10^8\\,\\text{m/s}$; $\\lambda_{\\text{Glas}} = 600\\,\\text{nm}$; $f = 3{,}33 \\cdot 10^{14}\\,\\text{Hz}$",
      B: "$c_{\\text{Glas}} = 4{,}5 \\cdot 10^8\\,\\text{m/s}$; $\\lambda_{\\text{Glas}} = 900\\,\\text{nm}$; $f = 5{,}0 \\cdot 10^{14}\\,\\text{Hz}$",
      C: "$c_{\\text{Glas}} = 2{,}0 \\cdot 10^8\\,\\text{m/s}$; $\\lambda_{\\text{Glas}} = 600\\,\\text{nm}$; $f = 7{,}5 \\cdot 10^{14}\\,\\text{Hz}$",
      D: "$c_{\\text{Glas}} = 1{,}5 \\cdot 10^8\\,\\text{m/s}$; $\\lambda_{\\text{Glas}} = 300\\,\\text{nm}$; $f = 5{,}0 \\cdot 10^{14}\\,\\text{Hz}$",
      E: "$c_{\\text{Glas}} = 2{,}0 \\cdot 10^8\\,\\text{m/s}$; $\\lambda_{\\text{Glas}} = 400\\,\\text{nm}$; $f = 5{,}0 \\cdot 10^{14}\\,\\text{Hz}$"
    },
    correct_answer: "E",
    explanation_correct: "1. Ausbreitungsgeschwindigkeit im Glas: $c_{\\text{Glas}} = \\frac{c_0}{n} = \\frac{3{,}0 \\cdot 10^8\\,\\text{m/s}}{1{,}50} = 2{,}0 \\cdot 10^8\\,\\text{m/s}$.\\n2. Die Frequenz $f$ ist eine fundamentale Eigenschaft der erzeugenden Lichtquelle und bleibt beim Übertritt in ein anderes Medium strikt invariant: $f = \\frac{c_0}{\\lambda_0} = \\frac{3{,}0 \\cdot 10^8\\,\\text{m/s}}{600 \\cdot 10^{-9}\\,\\text{m}} = 5{,}0 \\cdot 10^{14}\\,\\text{Hz}$.\\n3. Da die Ausbreitungsgeschwindigkeit sinkt, verkürzt sich die Wellenlänge im optisch dichteren Medium proportional: $\\lambda_{\\text{Glas}} = \\frac{\\lambda_0}{n} = \\frac{600\\,\\text{nm}}{1{,}50} = 400\\,\\text{nm}$.",
    explanations_incorrect: {
      A: "Die Lichtgeschwindigkeit im Glas ist nicht gleich der Vakuumlichtgeschwindigkeit; sie sinkt um den Faktor $n$.",
      B: "$4{,}5 \\cdot 10^8\\,\\text{m/s}$ multipliziert fälschlicherweise mit $n$ statt zu dividieren (Überlichtgeschwindigkeit im Medium ist unmöglich).",
      C: "Die Wellenlänge bleibt beim Eintritt in ein dichteres Medium nicht konstant bei $600\\,\\text{nm}$, sondern verkürzt sich.",
      D: "$1{,}5 \\cdot 10^8\\,\\text{m/s}$ und $300\\,\\text{nm}$ entsprechen einer Halbierung (Brechungsindex $n = 2{,}0$), nicht $n = 1{,}50$."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 7: Atom- und Kernphysik (phys-07-atom-kernphysik) - 1 Aufgabe
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP2-018",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Atom- und Kernphysik",
    subtopic: "Ionisierende Strahlung: Eigenschaften & Abschirmung",
    difficulty: "intermediate",
    stem: "Ionisierende Strahlung aus radioaktiven Zerfallsprozessen tritt im Wesentlichen in Form von $\\alpha$-, $\\beta$- und $\\gamma$-Strahlung auf. Welche vergleichende Aussage über die physikalische Natur, das spezifische Ionisationsvermögen und die Abschirmbarkeit dieser drei Strahlungsarten im Strahlenschutz ist korrekt?",
    options: {
      A: "$\\alpha$-Strahlung besteht aus schnellen Neutronen; sie besitzt das geringste Ionisationsvermögen und erfordert dicke Betonblöcke zur Abschirmung.",
      B: "$\\gamma$-Strahlung besteht aus zweifach positiv geladenen Teilchen; sie besitzt die geringste Reichweite und wird bereits durch ein einfaches Blatt Papier vollständig absorbiert.",
      C: "$\\alpha$-Strahlung besteht aus zweifach positiv geladenen Helium-4-Kernen; sie weist das höchste spezifische Ionisationsvermögen auf und besitzt eine sehr geringe Reichweite (Abschirmung bereits durch ein Blatt Papier oder die Hornhautschicht möglich), während $\\gamma$-Strahlung masselose hochenergetische elektromagnetische Strahlung mit hoher Durchdringungskraft ist, die schwere Abschirmungen (wie Blei) erfordert.",
      D: "$\\beta^-$-Strahlung besteht aus ungeladenen Photonen; sie interagiert nicht mit Materie und kann physikalisch nicht abgeschirmt werden.",
      E: "Alle drei Strahlungsarten besitzen identische Ruhemassen, Durchdringungstiefen und biologische Qualitätsfaktoren."
    },
    correct_answer: "C",
    explanation_correct: "$\\alpha$-Teilchen sind Helium-4-Kerne ($^4_2\\text{He}^{2+}$) mit großer Masse ($m \\approx 4\\,\\text{u}$) und zweifacher positiver Elementarladung. Wegen ihrer starken Coulomb-Wechselwirkung mit Hüllenelektronen besitzen sie die höchste lineare Energieübertragung (LET) und das höchste spezifische Ionisationsvermögen; ihre Reichweite in Luft beträgt nur wenige Zentimeter, und sie werden bereits durch ein Blatt Papier oder die abgestorbene Epidermis vollständig absorbiert (hohe Radiotoxizität jedoch bei Inkorporation). $\\beta$-Strahlung besteht aus leichten Elektronen ($e^-$) bzw. Positronen ($e^+$) mit mittlerer Reichweite (Abschirmung durch Aluminium/Plexiglas). $\\gamma$-Strahlung ist ungeladene, masselose elektromagnetische Strahlung mit extremer Durchdringungsfähigkeit, die nur durch dichte Materialien mit hoher Ordnungszahl (wie Blei) exponentiell geschwächt werden kann.",
    explanations_incorrect: {
      A: "$\\alpha$-Strahlung besteht aus Heliumkernen ($2p + 2n$), nicht aus freien Neutronen; sie hat das höchste (nicht geringste) Ionisationsvermögen.",
      B: "$\\gamma$-Strahlung ist ungeladene elektromagnetische Strahlung, keine zweifach positiv geladenen Teilchen; sie durchdringt Papier mühelos.",
      D: "$\\beta^-$-Strahlung besteht aus geladenen Elektronen, nicht aus Photonen.",
      E: "Die drei Strahlungsarten unterscheiden sich fundamental in Masse, Ladung, Reichweite und biologischer Wirksamkeit."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
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
 * Normalisierte 18 StoredQuestion-Objekte für die MedAT-H Generalprobe #2 Runtime-Engine
 */
export const GENERALPROBE_2_PHYS_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_PHYS_QUESTIONS.map(
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
      tags: ["BMS", "Physik", "Generalprobe #2", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_gp2",
      setOrder: idx + 1,
    };
  }
);
