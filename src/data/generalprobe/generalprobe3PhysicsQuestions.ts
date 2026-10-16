/**
 * MedAT Physik BMS — 18-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #3 (BMS Physik-Testteil, exakt 18 Original-Aufgaben).
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
 * - A: 4 (Q003, Q007, Q011, Q016)
 * - B: 4 (Q005, Q009, Q013, Q018)
 * - C: 4 (Q001, Q008, Q014, Q017)
 * - D: 3 (Q004, Q010, Q015)
 * - E: 3 (Q002, Q006, Q012)
 * Gesamt: 18 Aufgaben
 */

import type { StoredQuestion } from "../questions/types";

export interface QcPhysGp3QuestionRaw {
  id: string;
  chapter_id: string;
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

export const RAW_GENERALPROBE_3_PHYS_QUESTIONS: QcPhysGp3QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Größen und Einheiten (phys-01-groessen-einheiten) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP3-001",
    chapter_id: "phys-01-groessen-einheiten",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Größen und Einheiten",
    subtopic: "Skalare vs. Vektorielle Größen",
    difficulty: "foundational",
    stem: "In der physikalischen Beschreibung von Naturvorgängen wird streng zwischen Skalaren (Größen, die allein durch ihren Betrag und eine Einheit vollständig bestimmt sind) und Vektoren (Größen, die zusätzlich eine eindeutige Raumrichtung und Orientierung besitzen) unterschieden. Welche der folgenden Zusammenstellungen enthält ausschließlich echte vektorielle Größen?",
    options: {
      A: "Kinetische Energie, elektrische Spannung und Masse",
      B: "Druck, Temperatur und elektrische Stromstärke",
      C: "Impuls, Beschleunigung und elektrische Feldstärke",
      D: "Arbeit, Dichte und magnetische Flussdichte",
      E: "Elektrisches Potential, Frequenz und Drehmoment"
    },
    correct_answer: "C",
    explanation_correct: "Impuls ($\\vec{p} = m \\cdot \\vec{v}$), Beschleunigung ($\\vec{a} = \\frac{d\\vec{v}}{dt}$) und elektrische Feldstärke ($\\vec{E} = \\frac{\\vec{F}}{q}$) sind allesamt echte vektorielle Größen, die im Raum einen Betrag und eine eindeutige Richtungsachse besitzen.",
    explanations_incorrect: {
      A: "Kinetische Energie ($E_{\\text{kin}}$), elektrische Spannung ($U$) und Masse ($m$) sind reine Skalare ohne Raumrichtung.",
      B: "Druck ($p$, skalarer Quotient aus Normalkraft und Fläche), Temperatur ($T$) und elektrische Stromstärke ($I$, skalares Flussintegral der Stromdichte) sind Skalare.",
      D: "Mechanische Arbeit ($W$, Skalarprodukt zweier Vektoren) und Dichte ($\\rho$) sind Skalare; lediglich die magnetische Flussdichte ($\\vec{B}$) ist ein Vektor.",
      E: "Elektrisches Potential ($\\varphi$, Skalarfeld) und Frequenz ($f$) sind Skalare; nur das Drehmoment ($\\vec{M} = \\vec{r} \\times \\vec{F}$) ist ein Vektor (Pseudovektor)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-002",
    chapter_id: "phys-01-groessen-einheiten",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Größen und Einheiten",
    subtopic: "SI-Basiseinheiten & Dimensionsanalyse",
    difficulty: "intermediate",
    stem: "Der ohmsche Widerstand $R$ eines Leiters ist über das Ohmsche Gesetz als Quotient aus elektrischer Spannung $U$ und elektrischer Stromstärke $I$ definiert ($R = \\frac{U}{I}$). Durch welche Kombination der fundamentalen SI-Basiseinheiten Kilogramm ($\\text{kg}$), Meter ($\\text{m}$), Sekunde ($\\text{s}$) und Ampere ($\\text{A}$) wird die Einheit Ohm ($\\Omega$) korrekt ausgedrückt?",
    options: {
      A: "$\\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-1}$",
      B: "$\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-2}$",
      C: "$\\text{kg}^{-1} \\cdot \\text{m}^{-2} \\cdot \\text{s}^3 \\cdot \\text{A}^2$",
      D: "$\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-1} \\cdot \\text{A}^{-1}$",
      E: "$\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3} \\cdot \\text{A}^{-2}$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: $R = \\frac{U}{I}$, somit $1\\,\\Omega = 1\\,\\frac{\\text{V}}{\\text{A}}$. Schritt 2: Elektrische Spannung ist Energie pro Ladung ($U = \\frac{W}{q}$), also $1\\,\\text{V} = 1\\,\\frac{\\text{J}}{\\text{C}}$. Schritt 3: Die mechanische Energie $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}$, und die Ladung ist $1\\,\\text{C} = 1\\,\\text{A}\\cdot\\text{s}$. Daraus folgt für Volt: $1\\,\\text{V} = \\frac{\\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}}{\\text{A}\\cdot\\text{s}} = \\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-3}\\cdot\\text{A}^{-1}$. Schritt 4: Division durch Ampere liefert für Ohm: $1\\,\\Omega = \\frac{1\\,\\text{V}}{1\\,\\text{A}} = \\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-3}\\cdot\\text{A}^{-2}$.",
    explanations_incorrect: {
      A: "$\\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-1}$ entspricht der Einheit der magnetischen Flussdichte ($\\text{Tesla} = \\frac{\\text{N}}{\\text{A}\\cdot\\text{m}}$).",
      B: "$\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-2}$ ist die Einheit der Induktivität ($\\text{Henry} = \\frac{\\text{J}}{\\text{A}^2}$).",
      C: "$\\text{kg}^{-1} \\cdot \\text{m}^{-2} \\cdot \\text{s}^3 \\cdot \\text{A}^2$ ist der Kehrwert des Widerstands, also der elektrische Leitwert ($\\text{Siemens} = \\Omega^{-1}$).",
      D: "Enthält einen Exponentenfehler in der Zeitdimension ($\\text{s}^{-1}$ statt $\\text{s}^{-3}$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Mechanik (phys-02-mechanik) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP3-003",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Newtonsche Axiome & Actio-Reactio",
    difficulty: "foundational",
    stem: "Eine Athletin mit der Masse $m = 60\\,\\text{kg}$ springt auf horizontalem Erdboden vertikal nach oben ab. Während der kurzen Absprungphase drückt sie sich mit den Beinen ab und übt dabei eine durchschnittliche Kraft von $F = 1200\\,\\text{N}$ senkrecht nach unten auf den Erdboden aus. Welche Kraft übt der Erdboden während dieser Absprungphase auf die Füße der Athletin aus?",
    options: {
      A: "Exakt $1200\\,\\text{N}$ senkrecht nach oben",
      B: "Nur $600\\,\\text{N}$ nach oben, da die Erdbeschleunigung von der Gesamtkraft abgezogen werden muss",
      C: "$0\\,\\text{N}$, da der starre Erdboden im Gegensatz zu den Muskeln keine aktive Gegenkraft erzeugen kann",
      D: "$1800\\,\\text{N}$ nach oben, weil die Gewichtskraft von ca. $600\\,\\text{N}$ zur Muskelkraft addiert wird",
      E: "Eine unendlich große Kraft, da die Erde im Vergleich zur Masse der Athletin eine unendliche Trägheit besitzt"
    },
    correct_answer: "A",
    explanation_correct: "Nach dem 3. Newtonschen Axiom (Wechselwirkungsgesetz: Actio gleich Reactio) treten Kräfte in der Natur immer paarweise auf: Übt ein Körper A eine Kraft auf einen Körper B aus, so übt Körper B gleichzeitig eine betragsgleiche, aber entgegengesetzt gerichtete Reaktionskraft auf Körper A aus. Wenn die Füße der Athletin mit $1200\\,\\text{N}$ nach unten auf den Boden drücken, übt der Boden zwingend eine Reaktionskraft von exakt $1200\\,\\text{N}$ nach oben auf ihre Füße aus. (Die resultierende Nettokraft zur Beschleunigung ihres Körpers beträgt $F_{\\text{res}} = F_{\\text{Boden}} - F_G = 1200\\,\\text{N} - 600\\,\\text{N} = 600\\,\\text{N}$, was einer Aufwärtsbeschleunigung von $a = 10\\,\\text{m/s}^2$ entspricht).",
    explanations_incorrect: {
      B: "Verwechselt die Wechselwirkungskraft des Bodens mit der resultierenden Nettobeschleunigungskraft.",
      C: "Der starre Boden übt als feste Grenzfläche stets eine elastische Normalkraft als unmittelbare Gegenkraft aus.",
      D: "Addiert fälschlicherweise die Gewichtskraft zur Gegenkraft des Bodens.",
      E: "Die große Masse der Erde bewirkt lediglich, dass ihre eigene Beschleunigung unmessbar klein bleibt; die Wechselwirkungskraft ist strikt betragsgleich."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-004",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Energieerhaltung & Geschwindigkeit",
    difficulty: "intermediate",
    stem: "Ein Schlittenfahrer startet aus dem Stillstand ($v_0 = 0\\,\\text{m/s}$) und gleitet eine reibungsfreie, gekrümmte Bahn hinab. Der Startpunkt liegt um die Höhendifferenz $h = 20\\,\\text{m}$ senkrecht oberhalb des Zielpunkts. Unter Vernachlässigung jeglicher Reibungs- und Luftwiderstandsverluste (Erdbeschleunigung $g = 10\\,\\text{m/s}^2$): Welche Geschwindigkeit besitzt der Schlittenfahrer beim Durchfahren des Zielpunkts?",
    options: {
      A: "$10\\,\\text{m/s}$ ($36\\,\\text{km/h}$)",
      B: "$14\\,\\text{m/s}$ (ca. $50\\,\\text{km/h}$)",
      C: "$40\\,\\text{m/s}$ ($144\\,\\text{km/h}$)",
      D: "$20\\,\\text{m/s}$ ($72\\,\\text{km/h}$)",
      E: "$200\\,\\text{m/s}$ ($720\\,\\text{km/h}$)"
    },
    correct_answer: "D",
    explanation_correct: "Nach dem mechanischen Energieerhaltungssatz für reibungsfreie Bewegungen wandelt sich die gesamte potentielle Lageenergie $\\Delta E_{\\text{pot}}$ vollständig in kinetische Bewegungsenergie $E_{\\text{kin}}$ um: $m \\cdot g \\cdot h = \\frac{1}{2} m \\cdot v^2$. Die Masse $m$ kürzt sich heraus, sodass die Geschwindigkeit unabhängig von der Masse des Fahrers ist: $v = \\sqrt{2 \\cdot g \\cdot h} = \\sqrt{2 \\cdot 10\\,\\text{m/s}^2 \\cdot 20\\,\\text{m}} = \\sqrt{400\\,\\text{m}^2/\\text{s}^2} = 20\\,\\text{m/s}$. In Kilometer pro Stunde: $20 \\cdot 3{,}6 = 72\\,\\text{km/h}$.",
    explanations_incorrect: {
      A: "$10\\,\\text{m/s}$ resultiert aus einer falschen linearen Halbierung der Höhe oder Division ohne Quadratwurzel.",
      B: "$14\\,\\text{m/s}$ entspricht $\\sqrt{g \\cdot h} = \\sqrt{200}$, wenn der Faktor 2 im Zähler vergessen wird.",
      C: "$40\\,\\text{m/s}$ entsteht, wenn fälschlicherweise $2 \\cdot g \\cdot h = 400$ ohne Ziehen der Quadratwurzel interpretiert wird.",
      E: "$200\\,\\text{m/s}$ ist ein Zehnerpotenzfehler bei der Radizierung."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-005",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Hydrostatik & Schweredruck im Gefäßsystem",
    difficulty: "intermediate",
    stem: "In einem aufrecht stehenden, erwachsenen Menschen beträgt der vertikale Abstand zwischen Herz und Fußsohlen etwa $h = 1{,}30\\,\\text{m}$. Die Dichte des Blutes beträgt $\\rho_{\\text{Blut}} = 1050\\,\\text{kg/m}^3$, und die Erdbeschleunigung wird mit $g = 9{,}8\\,\\text{m/s}^2$ angesetzt. Welcher zusätzliche hydrostatische Schweredruck $\\Delta p_{\\text{hyd}}$ lastet infolge der Schwerkraft im Stehen auf den Fußarterien im Vergleich zum Niveau des Herzens?",
    options: {
      A: "ca. $1{,}34\\,\\text{kPa}$ (ca. $10\\,\\text{mmHg}$)",
      B: "ca. $13{,}4\\,\\text{kPa}$ (ca. $100\\,\\text{mmHg}$)",
      C: "ca. $134\\,\\text{kPa}$ (ca. $1000\\,\\text{mmHg}$)",
      D: "ca. $8{,}0\\,\\text{kPa}$ (ca. $60\\,\\text{mmHg}$)",
      E: "$0\\,\\text{kPa}$, da Blut ein kontinuierlich zirkulierendes Fluid ist und daher kein hydrostatischer Druck entsteht"
    },
    correct_answer: "B",
    explanation_correct: "Der hydrostatische Schweredruck einer Flüssigkeitssäule der vertikalen Höhe $h$ berechnet sich nach der Grundgleichung der Hydrostatik: $\\Delta p_{\\text{hyd}} = \\rho \\cdot g \\cdot h$. Einsetzen der Werte: $\\Delta p_{\\text{hyd}} = 1050\\,\\text{kg/m}^3 \\cdot 9{,}8\\,\\text{m/s}^2 \\cdot 1{,}30\\,\\text{m} = 13.377\\,\\text{Pa} \\approx 13{,}4\\,\\text{kPa}$. Umrechnung in Millimeter Quecksilbersäule ($1\\,\\text{mmHg} \\approx 133{,}32\\,\\text{Pa}$): $\\frac{13.377\\,\\text{Pa}}{133{,}32\\,\\text{Pa/mmHg}} \\approx 100{,}3\\,\\text{mmHg} \\approx 100\\,\\text{mmHg}$. Im aufrechten Stand addiert sich dieser erhebliche hydrostatische Druck zum Blutdruck des Herzens (mittlerer arterieller Druck am Fuß ca. $190\\,\\text{mmHg}$ gegenüber $90\\,\\text{mmHg}$ auf Herzhöhe).",
    explanations_incorrect: {
      A: "Entsteht durch einen Zehnerpotenzfehler bei der Einheitenumrechnung ($1{,}34\\,\\text{kPa}$ statt $13{,}4\\,\\text{kPa}$).",
      C: "Entsteht durch einen Zehnerpotenzfehler nach oben ($134\\,\\text{kPa} > 1\\,\\text{bar}$, was den Menschen sofort zerreißen würde).",
      D: "Verwendet fälschlich eine zu geringe Dichte oder fehlerhafte Multiplikation.",
      E: "Widerspricht dem Pascalschen Prinzip; die Schwerkraft wirkt auf jedes Fluidvolumen unabhängig davon, ob es strömt oder ruht."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-006",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Impulserhaltung & Rückstoßprinzip",
    difficulty: "advanced",
    stem: "Eine Eiskunstläuferin mit der Masse $m_1 = 50\\,\\text{kg}$ steht zunächst vollkommen in Ruhe ($v_1 = 0$) auf einer horizontalen, praktisch reibungsfreien Eisfläche. Sie wirft einen Medizinball der Masse $m_2 = 2{,}5\\,\\text{kg}$ mit einer horizontalen Geschwindigkeit von $v_2 = 8{,}0\\,\\text{m/s}$ (relativ zum Eis gemessen) geradeaus nach vorne ab. Mit welcher Rückstoßgeschwindigkeit $v_{\\text{R}}$ gleitet die Eiskunstläuferin unmittelbar nach dem Abwurf über das Eis nach hinten?",
    options: {
      A: "$0{,}10\\,\\text{m/s}$",
      B: "$1{,}60\\,\\text{m/s}$",
      C: "$0{,}25\\,\\text{m/s}$",
      D: "$0{,}80\\,\\text{m/s}$",
      E: "$0{,}40\\,\\text{m/s}$"
    },
    correct_answer: "E",
    explanation_correct: "Da auf das abgeschlossene System (Läuferin + Ball) in horizontaler Richtung keine externen Kräfte wirken, ist der Gesamtimpuls vor und nach dem Wurf konstant: $p_{\\text{ges}} = 0$. Vor dem Wurf: $p_1 + p_2 = 0$. Nach dem Wurf: $m_1 \\cdot v_{\\text{R}} + m_2 \\cdot v_2 = 0 \\implies v_{\\text{R}} = -\\frac{m_2 \\cdot v_2}{m_1}$. Einsetzen der Werte: $v_{\\text{R}} = -\\frac{2{,}5\\,\\text{kg} \\cdot 8{,}0\\,\\text{m/s}}{50\\,\\text{kg}} = -\\frac{20\\,\\text{kg}\\cdot\\text{m/s}}{50\\,\\text{kg}} = -0{,}40\\,\\text{m/s}$. Der Betrag der Rückstoßgeschwindigkeit beträgt somit exakt $0{,}40\\,\\text{m/s}$ nach hinten.",
    explanations_incorrect: {
      A: "$0{,}10\\,\\text{m/s}$ entsteht durch unvollständige Multiplikation oder fehlerhaftes Quadrieren der Massen.",
      B: "$1{,}60\\,\\text{m/s}$ resultiert aus einer falschen Kehrwertbildung ($50 / (2{,}5 \\cdot 8) = 50 / 20 = 2{,}5$ oder $8 / 5$).",
      C: "$0{,}25\\,\\text{m/s}$ verwechselt den Zahlenwert der Ballmasse mit der resultierenden Geschwindigkeit.",
      D: "$0{,}80\\,\\text{m/s}$ entsteht, wenn fälschlicherweise mit dem Faktor 2 multipliziert wird."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-007",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Kontinuitätsgleichung & Bernoulli-Effekt in der Hämodynamik",
    difficulty: "advanced",
    stem: "In einem horizontal verlaufenden Blutgefäß mit kreisrundem Querschnitt strömt Blut laminar mit einer Strömungsgeschwindigkeit von $v_1 = 0{,}20\\,\\text{m/s}$. Durch eine arteriosklerotische Plaque (Gefäßverengung / Stenose) verringert sich der lichte Gefäßinnenradius um die Hälfte ($r_2 = \\frac{1}{2} r_1$). Welche mittlere Strömungsgeschwindigkeit $v_2$ stellt sich in der Verengung ein, und wie verhält sich der statische Druck $p_2$ in der Verengung gemäß dem Bernoulli-Effekt (unter Annahme einer idealen inkompressiblen Flüssigkeit)?",
    options: {
      A: "$v_2 = 0{,}80\\,\\text{m/s}$; der statische Druck $p_2$ in der Verengung ist niedriger als vor der Verengung ($p_2 < p_1$)",
      B: "$v_2 = 0{,}40\\,\\text{m/s}$; der statische Druck $p_2$ in der Verengung ist doppelt so hoch ($p_2 > p_1$)",
      C: "$v_2 = 0{,}80\\,\\text{m/s}$; der statische Druck $p_2$ in der Verengung ist viermal so hoch wie vor der Verengung",
      D: "$v_2 = 0{,}10\\,\\text{m/s}$; der statische Druck bleibt exakt konstant ($p_2 = p_1$)",
      E: "$v_2 = 1{,}60\\,\\text{m/s}$; der statische Druck fällt auf ein absolutes Vakuum ab"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1 (Kontinuitätsgleichung): Für ein inkompressibles Fluid ist der Volumenstrom $\\dot{V} = A \\cdot v$ konstant. Die Querschnittsfläche eines zylindrischen Rohrs beträgt $A = \\pi \\cdot r^2$. Halbiert sich der Radius ($r_2 = 0{,}5\\,r_1$), so sinkt die Fläche auf ein Viertel: $A_2 = \\pi \\cdot (0{,}5\\,r_1)^2 = 0{,}25\\,A_1 = \\frac{1}{4} A_1$. Die Strömungsgeschwindigkeit muss sich daher vervierfachen: $v_2 = v_1 \\cdot \\frac{A_1}{A_2} = 4 \\cdot 0{,}20\\,\\text{m/s} = 0{,}80\\,\\text{m/s}$. Schritt 2 (Bernoulli-Gleichung für horizontale Strömungen): $p_1 + \\frac{1}{2}\\rho v_1^2 = p_2 + \\frac{1}{2}\\rho v_2^2 = \\text{konstant}$. Da die Geschwindigkeit in der Engstelle höher ist ($v_2 > v_1$), nimmt der dynamische Druckanteil $\\frac{1}{2}\\rho v^2$ zu. Folglich muss der statische Druck $p_2$ absinken ($p_2 < p_1$, Bernoulli-Effekt).",
    explanations_incorrect: {
      B: "Verwechselt den linearen Radius-Faktor 2 mit dem quadratischen Flächenfaktor 4 ($A \\sim r^2$) und unterliegt dem klassischen Fehlurteil, dass schneller fließendes Fluid einen höheren statischen Druck ausübe.",
      C: "Geschwindigkeit ($0{,}80\\,\\text{m/s}$) ist korrekt berechnet, jedoch führt höhere kinetische Energiedichte zu einem Druckabfall, nicht zu einem Anstieg.",
      D: "Nimmt fälschlicherweise an, dass die Geschwindigkeit bei einer Querschnittsverengung abnimmt.",
      E: "Geschwindigkeit von $1{,}60\\,\\text{m/s}$ ist ein Faktor-8-Fehler; der Druck fällt keineswegs auf ein Vakuum ab."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Schwingungen und Wellen (phys-03-schwingungen-wellen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP3-008",
    chapter_id: "phys-03-schwingungen-wellen",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Longitudinal- vs. Transversalwellen",
    difficulty: "foundational",
    stem: "Wellen transportieren Energie und Impuls durch den Raum, ohne dass Materie dauerhaft mittransportiert wird. Nach der Schwingungsrichtung der Oszillatoren relativ zur Ausbreitungsrichtung unterscheidet man Longitudinalwellen und Transversalwellen. Welche Aussage charakterisiert diese Wellenarten physikalisch zutreffend?",
    options: {
      A: "Elektromagnetische Wellen (wie sichtbares Licht oder Röntgenstrahlung) sind reine Longitudinalwellen, die sich nur in dichten Festkörpern ausbreiten können.",
      B: "Schallwellen in Luft und Flüssigkeiten sind Transversalwellen, deren Teilchen senkrecht zur Ausbreitungsrichtung schwingen.",
      C: "Bei Longitudinalwellen erfolgt die Schwingung der Teilchen parallel zur Ausbreitungsrichtung (Dichte- und Druckschwankungen); Schall breitet sich in Gasen und Flüssigkeiten ausschließlich als Longitudinalwelle aus.",
      D: "Transversalwellen können sich problemlos im Inneren idealer Gase ausbreiten, da Gase Scherspannungen elastisch übertragen.",
      E: "Longitudinalwellen besitzen eine Polarisationsebene, während Transversalwellen prinzipiell unpolarisierbar sind."
    },
    correct_answer: "C",
    explanation_correct: "Bei Longitudinalwellen (Längswellen) schwingen die Teilchen des Mediums parallel zur Ausbreitungsrichtung der Welle. Es bilden sich Zonen periodischer Kompression (Überdruck) und Dekompression (Unterdruck). Da Fluide (Gase und Flüssigkeiten) keine elastischen Scherspannungen übertragen können (Schermodul $G = 0$), kann sich Schall in ihrem Inneren ausschließlich als Longitudinalwelle fortpflanzen. Transversalwellen erfordern Scherkräfte und existieren nur in Festkörpern oder an freien Flüssigkeitsoberflächen.",
    explanations_incorrect: {
      A: "Elektromagnetische Wellen sind reine Transversalwellen (elektrisches und magnetisches Feld schwingen senkrecht zueinander und senkrecht zur Ausbreitungsrichtung) und breiten sich auch im Vakuum aus.",
      B: "Schall in Luft und Wasser ist longitudinal, nicht transversal.",
      D: "Gase besitzen keine Schersteifigkeit; Transversalwellen können sich im Inneren von Gasen physikalisch nicht ausbreiten.",
      E: "Genau umgekehrt: Nur Transversalwellen können polarisiert werden, da ihre Schwingungsrichtung senkrecht zur Ausbreitungsachse liegt; Longitudinalwellen schwingen entlang der Ausbreitungsachse und sind unpolarisierbar."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-009",
    chapter_id: "phys-03-schwingungen-wellen",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Akustischer Doppler-Effekt",
    difficulty: "advanced",
    stem: "Ein Notarztwagen fährt mit eingeschaltetem Martinshorn mit einer konstanten Geschwindigkeit von $v_S = 34\\,\\text{m/s}$ (ca. $122\\,\\text{km/h}$) geradlinig auf eine ruhende Passantin zu. Die Schallgeschwindigkeit in ruhender Luft beträgt $c = 340\\,\\text{m/s}$. Die Sirene emittiert einen reinen Ton mit der Eigenfrequenz $f_0 = 900\\,\\text{Hz}$. Welche Tonfrequenz $f'$ nimmt die ruhende Passantin wahr, solange sich das Fahrzeug auf sie zubewegt?",
    options: {
      A: "$900\\,\\text{Hz}$",
      B: "$1000\\,\\text{Hz}$",
      C: "$810\\,\\text{Hz}$",
      D: "$990\\,\\text{Hz}$",
      E: "$1200\\,\\text{Hz}$"
    },
    correct_answer: "B",
    explanation_correct: "Für einen Schallsender, der sich mit der Geschwindigkeit $v_S$ auf einen ruhenden Beobachter ($v_B = 0$) zubewegt, stauchen sich die Wellenfronten vor dem Fahrzeug, sodass die Wellenlänge verkürzt und die wahrgenommene Frequenz erhöht wird: $f' = f_0 \\cdot \\frac{c}{c - v_S}$. Einsetzen der Zahlenwerte: $f' = 900\\,\\text{Hz} \\cdot \\frac{340\\,\\text{m/s}}{340\\,\\text{m/s} - 34\\,\\text{m/s}} = 900\\,\\text{Hz} \\cdot \\frac{340}{306} = 900\\,\\text{Hz} \\cdot \\frac{10}{9} = 1000\\,\\text{Hz}$. Die Passantin nimmt einen um $100\\,\\text{Hz}$ höheren Ton wahr.",
    explanations_incorrect: {
      A: "$900\\,\\text{Hz}$ ignoriert den Doppler-Effekt bei bewegter Schallquelle vollständig.",
      C: "$810\\,\\text{Hz}$ resultiert aus der falschen Formel für das Entfernen des Senders ($f_0 \\cdot (1 - v/c) = 900 \\cdot 0{,}9 = 810\\,\\text{Hz}$).",
      D: "$990\\,\\text{Hz}$ entsteht durch falsche Addition von $90\\,\\text{Hz}$ statt Multiplikation mit dem Verhältnis $\\frac{10}{9}$.",
      E: "$1200\\,\\text{Hz}$ überschätzt die Doppler-Verschiebung drastisch."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Wärmelehre (phys-04-waermelehre) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP3-010",
    chapter_id: "phys-04-waermelehre",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Ideales Gasgesetz & Isochore Erwärmung",
    difficulty: "intermediate",
    stem: "In einem starren, hermetisch abgeschlossenen Druckbehälter mit unveränderlichem Volumen ($V = \\text{konstant}$) befindet sich ein ideales Gas bei einer Ausgangstemperatur von $T_1 = 27\\,^\\circ\\text{C}$ unter einem Druck von $p_1 = 3{,}0\\,\\text{bar}$. Das Gas wird isochor erwärmt, bis seine Temperatur $T_2 = 127\\,^\\circ\\text{C}$ erreicht. Welcher neue Druck $p_2$ herrscht nach Erreichen des thermischen Gleichgewichts im Behälter?",
    options: {
      A: "$14{,}1\\,\\text{bar}$",
      B: "$6{,}0\\,\\text{bar}$",
      C: "$3{,}3\\,\\text{bar}$",
      D: "$4{,}0\\,\\text{bar}$",
      E: "$2{,}25\\,\\text{bar}$"
    },
    correct_answer: "D",
    explanation_correct: "Nach dem Gesetz von Amontons für isochore Zustandsänderungen ($V = \\text{konstant}$) idealer Gase ist der Druck direkt proportional zur absoluten thermodynamischen Temperatur in Kelvin: $\\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\implies p_2 = p_1 \\cdot \\frac{T_2}{T_1}$. Umrechnung der Celsius-Temperaturen in Kelvin: $T_1 = 27\\,^\\circ\\text{C} + 273\\,\\text{K} = 300\\,\\text{K}$ und $T_2 = 127\\,^\\circ\\text{C} + 273\\,\\text{K} = 400\\,\\text{K}$. Einsetzen: $p_2 = 3{,}0\\,\\text{bar} \\cdot \\frac{400\\,\\text{K}}{300\\,\\text{K}} = 3{,}0\\,\\text{bar} \\cdot \\frac{4}{3} = 4{,}0\\,\\text{bar}$.",
    explanations_incorrect: {
      A: "$14{,}1\\,\\text{bar}$ resultiert aus dem klassischen Fehler, direkt mit Celsius-Werten zu rechnen: $3{,}0 \\cdot \\frac{127}{27} \\approx 14{,}1\\,\\text{bar}$.",
      B: "$6{,}0\\,\\text{bar}$ verdoppelt den Druck fälschlich ohne proportionale Rechnung.",
      C: "$3{,}3\\,\\text{bar}$ unterschätzt die relative Erhöhung der absoluten Temperatur.",
      E: "$2{,}25\\,\\text{bar}$ entsteht durch versehentliches Vertauschen von Zähler und Nenner ($3{,}0 \\cdot \\frac{300}{400}$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-011",
    chapter_id: "phys-04-waermelehre",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Spezifische Wärmekapazität & Kalorimetrie",
    difficulty: "intermediate",
    stem: "Um einen Patienten bei einer therapeutischen Maßnahme mit warmem Wasser zu versorgen, sollen $m = 2{,}0\\,\\text{kg}$ flüssiges Wasser von einer Ausgangstemperatur $T_1 = 20\\,^\\circ\\text{C}$ auf $T_2 = 60\\,^\\circ\\text{C}$ erwärmt werden. Die spezifische Wärmekapazität von Wasser beträgt $c_{\\text{Wasser}} = 4200\\,\\text{J/(kg}\\cdot\\text{K)}$. Welche Wärmemenge $Q$ muss dem Wasser zugeführt werden, und wie lange dauert dieser Vorgang bei einem ideal isolierten Tauchsieder mit einer elektrischen Nutzleistung von $P = 1400\\,\\text{W}$?",
    options: {
      A: "$Q = 336\\,\\text{kJ}$; Dauer: $t = 240\\,\\text{s}$ ($4\\,\\text{Minuten}$)",
      B: "$Q = 168\\,\\text{kJ}$; Dauer: $t = 120\\,\\text{s}$ ($2\\,\\text{Minuten}$)",
      C: "$Q = 504\\,\\text{kJ}$; Dauer: $t = 360\\,\\text{s}$ ($6\\,\\text{Minuten}$)",
      D: "$Q = 336\\,\\text{kJ}$; Dauer: $t = 480\\,\\text{s}$ ($8\\,\\text{Minuten}$)",
      E: "$Q = 84\\,\\text{kJ}$; Dauer: $t = 60\\,\\text{s}$ ($1\\,\\text{Minute}$)"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1 (Temperaturdifferenz): $\\Delta T = 60\\,^\\circ\\text{C} - 20\\,^\\circ\\text{C} = 40\\,\\text{K}$. Schritt 2 (Zugeführte Wärmemenge): $Q = m \\cdot c \\cdot \\Delta T = 2{,}0\\,\\text{kg} \\cdot 4200\\,\\frac{\\text{J}}{\\text{kg}\\cdot\\text{K}} \\cdot 40\\,\\text{K} = 336.000\\,\\text{J} = 336\\,\\text{kJ}$. Schritt 3 (Heizzeit bei Leistung $P = 1400\\,\\text{W}$): $P = \\frac{W}{t} = \\frac{Q}{t} \\implies t = \\frac{Q}{P} = \\frac{336.000\\,\\text{J}}{1400\\,\\text{W}} = 240\\,\\text{s} = 4\\,\\text{Minuten}$.",
    explanations_incorrect: {
      B: "$Q = 168\\,\\text{kJ}$ rechnet versehentlich nur mit einer Wassermasse von $1{,}0\\,\\text{kg}$.",
      C: "$Q = 504\\,\\text{kJ}$ verwendet die Endtemperatur $60\\,\\text{K}$ als Differenz anstelle von $\\Delta T = 40\\,\\text{K}$.",
      D: "Energie ist korrekt ($336\\,\\text{kJ}$), aber die Zeit wurde fehlerhaft verdoppelt ($480\\,\\text{s}$).",
      E: "$Q = 84\\,\\text{kJ}$ ist um einen Faktor 4 zu gering berechnet."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Elektrizitätslehre (phys-05-elektrizitaet) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP3-012",
    chapter_id: "phys-05-elektrizitaet",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Reihenschaltung & Spannungsteiler",
    difficulty: "foundational",
    stem: "Zwei lineare ohmsche Widerstände $R_1 = 40\\,\\Omega$ und $R_2 = 60\\,\\Omega$ sind in Reihe (hintereinander) an eine Gleichspannungsquelle mit der konstanten Klemmenspannung $U_{\\text{ges}} = 20\\,\\text{V}$ geschaltet. Welcher Gesamtstrom $I$ fließt durch die Schaltung, und welche Teilspannung $U_2$ fällt am Widerstand $R_2$ ab?",
    options: {
      A: "$I = 1{,}0\\,\\text{A}$ und $U_2 = 20\\,\\text{V}$",
      B: "$I = 0{,}50\\,\\text{A}$ und $U_2 = 10\\,\\text{V}$",
      C: "$I = 0{,}20\\,\\text{A}$ und $U_2 = 8{,}0\\,\\text{V}$",
      D: "$I = 0{,}83\\,\\text{A}$ und $U_2 = 12\\,\\text{V}$",
      E: "$I = 0{,}20\\,\\text{A}$ und $U_2 = 12\\,\\text{V}$"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Bei einer Reihenschaltung addieren sich die Widerstände zum Gesamtwiderstand: $R_{\\text{ges}} = R_1 + R_2 = 40\\,\\Omega + 60\\,\\Omega = 100\\,\\Omega$. Schritt 2: Der durch beide Widerstände fließende Gesamtstrom berechnet sich nach dem Ohmschen Gesetz zu: $I = \\frac{U_{\\text{ges}}}{R_{\\text{ges}}} = \\frac{20\\,\\text{V}}{100\\,\\Omega} = 0{,}20\\,\\text{A}$. Schritt 3: Die Teilspannung am Widerstand $R_2$ beträgt: $U_2 = I \\cdot R_2 = 0{,}20\\,\\text{A} \\cdot 60\\,\\Omega = 12\\,\\text{V}$ (bzw. Spannungsteilerregel: $U_2 = U_{\\text{ges}} \\cdot \\frac{R_2}{R_{\\text{ges}}} = 20\\,\\text{V} \\cdot \\frac{60}{100} = 12\\,\\text{V}$).",
    explanations_incorrect: {
      A: "Nimmt fälschlicherweise an, dass die volle Spannung an beiden Widerständen anliegt und der Strom $1{,}0\\,\\text{A}$ beträgt.",
      B: "Teilt die Spannung einfach hälftig ($10\\,\\text{V}$), was nur bei zwei identischen Widerständen der Fall wäre.",
      C: "Strom ist korrekt ($0{,}20\\,\\text{A}$), aber vertauscht die Teilspannungen von $R_1$ ($8{,}0\\,\\text{V}$) und $R_2$ ($12\\,\\text{V}$).",
      D: "Verwendet den Ersatzwiderstand einer Parallelschaltung ($R_p = 24\\,\\Omega \\implies I \\approx 0{,}83\\,\\text{A}$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-013",
    chapter_id: "phys-05-elektrizitaet",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Elektrische Feldenergie im Kondensator",
    difficulty: "intermediate",
    stem: "In einem medizinischen Notfall-Defibrillator wird ein Speicherkondensator mit der Kapazität $C = 50\\,\\mu\\text{F}$ ($50 \\times 10^{-6}\\,\\text{F}$) an ein Hochspannungsnetzteil angeschlossen und auf die Ladespannung $U = 2000\\,\\text{V}$ aufgeladen. Welche elektrische Energie $W_{\\text{el}}$ ist im homogenen elektrischen Feld dieses geladenen Kondensators gespeichert?",
    options: {
      A: "$100\\,\\text{kJ}$",
      B: "$100\\,\\text{J}$",
      C: "$200\\,\\text{J}$",
      D: "$50\\,\\text{J}$",
      E: "$0{,}10\\,\\text{J}$"
    },
    correct_answer: "B",
    explanation_correct: "Die im elektrischen Feld eines geladenen Kondensators gespeicherte potentielle Energie berechnet sich nach: $W_{\\text{el}} = \\frac{1}{2} C \\cdot U^2$. Einsetzen der Werte: $W_{\\text{el}} = \\frac{1}{2} \\cdot (50 \\times 10^{-6}\\,\\text{F}) \\cdot (2000\\,\\text{V})^2$. Da $(2000\\,\\text{V})^2 = 4 \\times 10^6\\,\\text{V}^2$ ist: $W_{\\text{el}} = \\frac{1}{2} \\cdot 50 \\times 10^{-6} \\cdot 4 \\times 10^6 = \\frac{1}{2} \\cdot 200 = 100\\,\\text{J}$. Dieser Energiebetrag von $100\\,\\text{J}$ entspricht einer typischen mittleren Defibrillationsdosis.",
    explanations_incorrect: {
      A: "$100\\,\\text{kJ}$ vergisst das Mikro-Präfix ($10^{-6}$) oder verrechnet Zehnerpotenzen um den Faktor 1000.",
      C: "$200\\,\\text{J}$ vergisst den Vorfaktor $\\frac{1}{2}$ in der Energieformel ($C \\cdot U^2$).",
      D: "$50\\,\\text{J}$ dividiert versehentlich nochmals durch 2.",
      E: "$0{,}10\\,\\text{J}$ interpretiert fälschlicherweise die elektrische Ladung $Q = C \\cdot U = 0{,}10\\,\\text{C}$ als Energie in Joule."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-014",
    chapter_id: "phys-05-elektrizitaet",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Elektromagnetische Induktion & Lenzsche Regel",
    difficulty: "advanced",
    stem: "Eine geschlossene Leiterschleife aus Kupfer wird mit konstanter Geschwindigkeit horizontal in ein räumlich begrenztes, senkrecht zur Schleifenebene stehendes homogenes Magnetfeld hineinbewegt. Welche Aussage beschreibt die dabei auftretenden physikalischen Phänomene gemäß dem Faradayschen Induktionsgesetz und der Lenzschen Regel korrekt?",
    options: {
      A: "Solange die Leiterschleife in das Feld eintritt, wird keine Spannung induziert, weil das Magnetfeld homogen ist und sich zeitlich nicht ändert.",
      B: "Der induzierte Strom erzeugt ein Magnetfeld, welches das äußere Magnetfeld verstärkt, wodurch die Leiterschleife in das Feld hineingezogen und permanent beschleunigt wird.",
      C: "Während des Eintretens nimmt der magnetische Fluss $\\Phi$ durch die Schleife zu; der dadurch induzierte Kreisstrom erzeugt ein dem äußeren Feld entgegengesetztes Magnetfeld, wodurch eine bremsende Lorentzkraft auf die Schleife wirkt (Wirbelstrombremse).",
      D: "In der Schleife wird eine konstante elektrostatische Ladung erzeugt, es fließt jedoch kein Strom, da Kupfer ein Isolator ist.",
      E: "Sobald sich die Schleife vollständig im homogenen Magnetfeld befindet und weiterbewegt, erreicht der induzierte Strom seinen Maximalwert."
    },
    correct_answer: "C",
    explanation_correct: "1. Faradaysches Induktionsgesetz: Eine elektrische Spannung wird induziert, wenn sich der von der Leiterschleife umfasste magnetische Fluss $\\Phi = B \\cdot A$ ändert: $\\mathcal{E}_{\\text{ind}} = -\\frac{d\\Phi}{dt}$. Beim Eintreten der Schleife in das Feld wächst die vom Magnetfeld durchsetzte Fläche $A$, sodass $\\Phi$ zunimmt. 2. Lenzsche Regel: Der Induktionsstrom ist stets so gerichtet, dass sein eigenes Magnetfeld der Ursache seiner Entstehung entgegenwirkt. Das induzierte Feld schwächt die Zunahme des äußeren Flusses ab. 3. Die auf die stromdurchflossenen Leiterabschnitte im äußeren Magnetfeld wirkende Lorentzkraft ist der Bewegungsrichtung entgegengerichtet; es tritt eine mechanische Abbremsung auf (Prinzip der Wirbelstrombremse).",
    explanations_incorrect: {
      A: "Die Flussänderung $\\frac{d\\Phi}{dt} = B \\cdot \\frac{dA}{dt}$ ist ungleich null, weil sich die im Feld befindliche Fläche zeitlich ändert, auch wenn $\\vec{B}$ konstant ist.",
      B: "Ein sich selbst verstärkendes Hineinziehen würde dem Energieerhaltungssatz fundamental widersprechen (Erzeugung von kinetischer Energie aus dem Nichts).",
      D: "Kupfer ist ein metallischer Spitzenleiter; es fließt ein realer elektrischer Leitungsstrom.",
      E: "Befindet sich die Schleife vollständig im homogenen Feld, bleibt der umfasste Fluss konstant ($\\frac{d\\Phi}{dt} = 0$), sodass der Induktionsstrom schlagartig auf null sinkt."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Optik (phys-06-optik) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP3-015",
    chapter_id: "phys-06-optik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Linsengleichung & Reelle optische Abbildung",
    difficulty: "intermediate",
    stem: "Ein leuchtender Gegenstand mit der Gegenstandshöhe $G = 6{,}0\\,\\text{cm}$ steht im Gegenstandsabstand $g = 30\\,\\text{cm}$ senkrecht auf der optischen Achse vor einer dünnen Sammellinse mit der Brennweite $f = 10\\,\\text{cm}$. In welchem Bildabstand $b$ hinter der Linse entsteht das scharfe Bild, und welche Bildhöhe $B$ besitzt es?",
    options: {
      A: "$b = 10\\,\\text{cm}$ und $B = 6{,}0\\,\\text{cm}$ (aufrecht und gleich groß)",
      B: "$b = 20\\,\\text{cm}$ und $B = 4{,}0\\,\\text{cm}$ (umgekehrt und verkleinert)",
      C: "$b = 30\\,\\text{cm}$ und $B = 6{,}0\\,\\text{cm}$ (umgekehrt und gleich groß)",
      D: "$b = 15\\,\\text{cm}$ und $B = 3{,}0\\,\\text{cm}$ (reell, umgekehrt und verkleinert)",
      E: "$b = 60\\,\\text{cm}$ und $B = 12\\,\\text{cm}$ (reell, umgekehrt und vergrößert)"
    },
    correct_answer: "D",
    explanation_correct: "Schritt 1 (Linsengleichung): $\\frac{1}{f} = \\frac{1}{g} + \\frac{1}{b} \\implies \\frac{1}{b} = \\frac{1}{f} - \\frac{1}{g} = \\frac{1}{10\\,\\text{cm}} - \\frac{1}{30\\,\\text{cm}} = \\frac{3}{30\\,\\text{cm}} - \\frac{1}{30\\,\\text{cm}} = \\frac{2}{30\\,\\text{cm}} = \\frac{1}{15\\,\\text{cm}}$. Somit beträgt der Bildabstand $b = 15\\,\\text{cm}$. Schritt 2 (Abbildungsmaßstab): $A = \\frac{B}{G} = \\frac{b}{g} = \\frac{15\\,\\text{cm}}{30\\,\\text{cm}} = 0{,}50$. Die Bildhöhe beträgt: $B = G \\cdot 0{,}50 = 6{,}0\\,\\text{cm} \\cdot 0{,}50 = 3{,}0\\,\\text{cm}$. Da $g > 2f$ ($30\\,\\text{cm} > 20\\,\\text{cm}$) ist, entsteht ein reelles, umgekehrtes und verkleinertes Bild.",
    explanations_incorrect: {
      A: "Im Brennpunkt ($b = 10\\,\\text{cm}$) entsteht kein reelles Bild eines Gegenstands im Endlichen.",
      B: "$b = 20\\,\\text{cm}$ resultiert aus einer falschen Differenzbildung der Kehrwerte.",
      C: "$b = g = 30\\,\\text{cm}$ entstünde nur, wenn der Gegenstand in der doppelten Brennweite stünde ($g = 2f$).",
      E: "$b = 60\\,\\text{cm}$ entsteht, wenn fälschlich addiert wird oder die Werte vertauscht werden."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-016",
    chapter_id: "phys-06-optik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Totalreflexion & Grenzwinkel im Lichtwellenleiter",
    difficulty: "advanced",
    stem: "In einem medizinischen Endoskop wird Licht über flexible Glasfaser-Lichtwellenleiter transportiert. Der Faserkern besitzt einen optischen Brechungsindex von $n_1 = 1{,}60$, während der umgebende Fasermantel (Cladding) einen Brechungsindex von $n_2 = 1{,}28$ aufweist. Wie groß ist der Sinus des Grenzwinkels der Totalreflexion ($\\sin \\alpha_c$) an der Grenzfläche zwischen Kern und Mantel, und unter welcher Bedingung wird ein Lichtstrahl im Kern verlustfrei totalreflektiert?",
    options: {
      A: "$\\sin \\alpha_c = 0{,}80$ (entspricht $\\alpha_c \\approx 53^\\circ$); Totalreflexion tritt auf, wenn der Einfallswinkel $\\alpha$ im optisch dichteren Kern größer als der Grenzwinkel ist ($\\alpha > \\alpha_c$)",
      B: "$\\sin \\alpha_c = 1{,}25$; Totalreflexion tritt bei jedem beliebigen Einfallswinkel auf, da Licht nicht in das optisch dünnere Medium eintreten kann",
      C: "$\\sin \\alpha_c = 0{,}80$; Totalreflexion tritt nur auf, wenn das Licht vom optisch dünneren Mantel in den optisch dichteren Kern übergeht",
      D: "$\\sin \\alpha_c = 0{,}50$ (entspricht $\\alpha_c = 30^\\circ$); Totalreflexion erfordert, dass der Winkel exakt $0^\\circ$ beträgt",
      E: "$\\sin \\alpha_c = 0{,}96$; Totalreflexion ist nur bei polarisiertem Laserlicht möglich"
    },
    correct_answer: "A",
    explanation_correct: "Schritt 1: Nach dem Snelliusschen Brechungsgesetz gilt an der Grenzfläche $n_1 \\cdot \\sin \\alpha = n_2 \\cdot \\sin \\beta$. Der Grenzwinkel der Totalreflexion $\\alpha_c$ ist derjenige Einfallswinkel im optisch dichteren Medium ($n_1 = 1{,}60$), bei dem der Brechungswinkel im optisch dünneren Medium ($n_2 = 1{,}28$) genau $\\beta = 90^\\circ$ ($\\sin 90^\\circ = 1$) beträgt: $\\sin \\alpha_c = \\frac{n_2}{n_1} = \\frac{1{,}28}{1{,}60} = \\frac{4}{5} = 0{,}80$ (woraus $\\alpha_c = \\arcsin(0{,}80) \\approx 53{,}1^\\circ$ folgt). Schritt 2: Totalreflexion tritt physikalisch nur dann auf, wenn der Lichtstrahl aus dem optisch dichteren Medium ($n_1$) kommt und sein Einfallswinkel $\\alpha$ strikt größer ist als der Grenzwinkel ($\\alpha > \\alpha_c$).",
    explanations_incorrect: {
      B: "Ein Sinuswert von $1{,}25$ ist mathematisch unmöglich ($-1 \\le \\sin \\le 1$); hier wurde fälschlich der Kehrwert $n_1/n_2$ gebildet.",
      C: "Vom optisch dünneren ins optisch dichtere Medium wird der Strahl zum Lot hin gebrochen; Totalreflexion ist in dieser Richtung physikalisch unmöglich.",
      D: "$\\sin \\alpha_c = 0{,}50$ ist ein willkürlicher Schätzwert; bei einem Einfallswinkel von $0^\\circ$ (senkrechter Einfall) tritt keine Reflexion, sondern ungebrochener Durchtritt auf.",
      E: "Totalreflexion beruht auf den fundamentalen Grenzflächeneigenschaften elektromagnetischer Wellen und tritt bei unpolarisiertem weißem Licht genauso auf wie bei Laserlicht."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 7: Atom- und Kernphysik (phys-07-atom-kernphysik) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP3-017",
    chapter_id: "phys-07-atom-kernphysik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Atom- und Kernphysik",
    subtopic: "Exponentielle Strahlenschwächung & Halbwertsdicke",
    difficulty: "intermediate",
    stem: "Ein kollimierter Röntgenstrahl wird beim Durchgang durch eine Bleiabschirmung exponentiell geschwächt gemäß $I(d) = I_0 \\cdot e^{-\\mu \\cdot d} = I_0 \\cdot \\left(\\frac{1}{2}\\right)^{d / d_{1/2}}$. Für die verwendete Photonenenergie beträgt die Halbwertsdicke von Blei $d_{1/2} = 4{,}0\\,\\text{mm}$. Welche Mindestdicke $d$ an Blei ist erforderlich, um die transmittierte Strahlungsintensität auf höchstens $3{,}125\\,\\%$ (also $\\frac{1}{32}$) der ursprünglichen Anfangsintensität $I_0$ zu reduzieren?",
    options: {
      A: "$d = 8{,}0\\,\\text{mm}$",
      B: "$d = 12\\,\\text{mm}$",
      C: "$d = 20\\,\\text{mm}$ ($2{,}0\\,\\text{cm}$)",
      D: "$d = 16\\,\\text{mm}$ ($1{,}6\\,\\text{cm}$)",
      E: "$d = 32\\,\\text{mm}$ ($3{,}2\\,\\text{cm}$)"
    },
    correct_answer: "C",
    explanation_correct: "Nach dem exponentiellen Schwächungsgesetz (Lambert-Beer) für ionisierende Strahlung halbiert jede Halbwertsdicke $d_{1/2}$ die verbleibende Intensität: $I(d) = I_0 \\cdot \\left(\\frac{1}{2}\\right)^n$, wobei $n = \\frac{d}{d_{1/2}}$ die Anzahl der Halbwertsdicken ist. Eine Abschwächung auf $3{,}125\\,\\% = \\frac{3{,}125}{100} = \\frac{1}{32}$ erfordert: $\\left(\\frac{1}{2}\\right)^n = \\frac{1}{32} = \\left(\\frac{1}{2}\\right)^5 \\implies n = 5$. Die erforderliche Mindestdicke beträgt demnach: $d = n \\cdot d_{1/2} = 5 \\cdot 4{,}0\\,\\text{mm} = 20\\,\\text{mm} = 2{,}0\\,\\text{cm}$.",
    explanations_incorrect: {
      A: "$8{,}0\\,\\text{mm} = 2 \\cdot d_{1/2}$ schwächt die Intensität nur auf $25\\,\\%$ ($1/4$) ab.",
      B: "$12\\,\\text{mm} = 3 \\cdot d_{1/2}$ schwächt auf $12{,}5\\,\\%$ ($1/8$) ab.",
      D: "$16\\,\\text{mm} = 4 \\cdot d_{1/2}$ schwächt auf $6{,}25\\,\\%$ ($1/16$) ab.",
      E: "$32\\,\\text{mm}$ verwechselt die Zahl 32 aus dem Nenner mit der Dicke in Millimetern ($8 \\cdot d_{1/2} \\implies$ Abschwächung auf $1/256$)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "PHYS-BMS-GP3-018",
    chapter_id: "phys-07-atom-kernphysik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Atom- und Kernphysik",
    subtopic: "Massendefekt & Kernbindungsenergie",
    difficulty: "intermediate",
    stem: "Präzisionsmessungen zeigen, dass die tatsächliche Ruhemasse eines gebundenen Helium-4-Atomkerns ($^4_2\\text{He}$, $\\alpha$-Teilchen) mit $m_{\\text{Kern}} \\approx 4{,}0015\\,\\text{u}$ messbar geringer ist als die Summe der Ruhemassen seiner ungebundenen Einzelbestandteile ($2\\,\\text{Protonen} + 2\\,\\text{Neutronen} \\approx 4{,}0319\\,\\text{u}$). Welche physikalische Erklärung begründet dieses Phänomen (Massendefekt $\\Delta m$), und welche Konsequenz ergibt sich daraus gemäß der Einsteinschen Masse-Energie-Äquivalenz?",
    options: {
      A: "Der Masseverlust beruht auf dem Entweichen von Hüllenelektronen, die bei der Fusion in elektromagnetische Strahlung umgewandelt werden.",
      B: "Beim Zusammenschluss der freien Nukleonen zum stabilen Kern wird die Kernbindungsenergie $\\Delta E = \\Delta m \\cdot c^2$ freigesetzt; diese Energieabgabe bewirkt, dass der gebundene Kern eine geringere Ruhemasse aufweist als die getrennten Nukleonen.",
      C: "Heliumkerne unterliegen einer ständigen Gravitationskontraktion, wodurch ihre Masse spontan in Neutrinos zerfällt.",
      D: "Das Coulomb-Gesetz bewirkt eine elektrostatische Massenvernichtung zwischen den beiden positiv geladenen Protonen.",
      E: "Die Massen von Proton und Neutron sind keine Naturkonstanten, sondern nehmen in Gegenwart starker Magnetfelder kontinuierlich ab."
    },
    correct_answer: "B",
    explanation_correct: "Nach Einsteins Äquivalenzprinzip von Masse und Energie ($E_0 = m \\cdot c^2$) entspricht jedem energetischen Zustand eines Systems eine äquivalente Ruhemasse. Wenn sich freie Nukleonen (2 Protonen und 2 Neutronen) unter Wirkung der starken Kernkraft zu einem stabilen Helium-4-Kern verbinden, wird eine enorme Bindungsenergie (ca. $28{,}3\\,\\text{MeV}$) in Form von Gammastrahlung freigesetzt. Da dem System diese Bindungsenergie entzogen wurde, besitzt der gebundene Kern einen geringeren Gesamtenergiegehalt als die isolierten Ausgangsteilchen. Dieser Energieunterschied manifestiert sich makroskopisch exakt als Massendefekt $\\Delta m = \\frac{\\Delta E}{c^2}$. Um den Kern wieder vollständig in freie Nukleonen zu zerlegen, müsste exakt diese Bindungsenergie von außen zugeführt werden.",
    explanations_incorrect: {
      A: "Ein Heliumkern besteht ausschließlich aus Nukleonen (2 Protonen und 2 Neutronen) und enthält keine Elektronen.",
      C: "Gravitationskräfte sind im Mikrokosmos des Atomkerns um ca. 38 Zehnerpotenzen schwächer als die Kernkräfte und spielen für den Massendefekt keine Rolle.",
      D: "Die elektrostatische Coulomb-Abstoßung wirkt der Kernbindung entgegen, vernichtet jedoch keine Masse.",
      E: "Die Ruhemassen von Proton und Neutron sind fundamentale Naturkonstanten und unabhängig von äußeren Feldern."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "3.0_gp3"
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
 * Normalisierte 18 StoredQuestion-Objekte für die MedAT-H Generalprobe #3 Runtime-Engine
 */
export const GENERALPROBE_3_PHYS_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_PHYS_QUESTIONS.map(
  (q, idx) => {
    const optionsArray: [string, string, string, string, string] = [
      q.options.A,
      q.options.B,
      q.options.C,
      q.options.D,
      q.options.E,
    ];

    const resolvedChapter = q.chapter_id || mapChapterId(q.primary_topic, q.subtopic);

    return {
      id: q.id,
      exam: "MEDAT-H",
      section: "BMS",
      subjectId: "phys",
      chapterId: resolvedChapter,
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Physik", "Generalprobe #3", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "3.0_gp3",
      setOrder: idx + 1,
    };
  }
);
