const fs = require('fs');

const questions = [
  // 1. CHEM-BMS-001
  {
    id: "CHEM-BMS-001",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Atombau und Mikrokosmos",
    subtopic: "Nuklidnotation & Elementarteilchen",
    difficulty: "foundational",
    stem: "Ein einfach negativ geladenes Chlorid-Ion ($^{37}_{17}\\text{Cl}^-$) besitzt welche Anzahl an Protonen, Neutronen und Elektronen?",
    options: {
      A: "17 Protonen, 17 Neutronen und 18 Elektronen.",
      B: "18 Protonen, 20 Neutronen und 17 Elektronen.",
      C: "17 Protonen, 20 Neutronen und 18 Elektronen.",
      D: "17 Protonen, 20 Neutronen und 17 Elektronen.",
      E: "20 Protonen, 17 Neutronen und 18 Elektronen."
    },
    correct_answer: "C",
    explanation_correct: "Die Ordnungszahl (Kernladungszahl, unten links) $Z = 17$ definiert das Element Chlor und gibt die Zahl der Protonen an (17). Die Massenzahl (Nukleonenzahl, oben links) $A = 37$ entspricht der Summe aus Protonen und Neutronen. Die Neutronenzahl beträgt daher $N = A - Z = 37 - 17 = 20$. Als einfach negativ geladenes Anion ($\\text{Cl}^-$) besitzt das Teilchen genau ein Elektron mehr als Protonen: $17 + 1 = 18$ Elektronen (isoelektronisch mit dem Edelgas Argon).",
    explanations_incorrect: {
      A: "Bei 17 Neutronen ergäbe sich die Massenzahl $17 + 17 = 34$, nicht das gegebene Isotop Chlor-37.",
      B: "Die Protonenzahl bestimmt die Elementidentität; 18 Protonen entsprächen einem Argon-Kern, nicht Chlor.",
      D: "17 Elektronen entsprächen einem ungeladenen, neutralen Chloratom, nicht dem Chlorid-Anion $\\text{Cl}^-$.",
      E: "Hier wurden Protonen- und Neutronenzahl vertauscht; ein Kern mit 20 Protonen wäre Calcium ($Z = 20$)."
    },
    metadata: {
      author: "MedAT BMS Chemistry Assessment Engine",
      status: "curated_medat_compliant",
      version: "1.0_qc_verified"
    }
  },

  // 2. CHEM-BMS-002
  {
    id: "CHEM-BMS-002",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Atombau und Mikrokosmos",
    subtopic: "Elektronenkonfiguration & Hund-Regel",
    difficulty: "intermediate",
    stem: "Welche Elektronenkonfiguration und welche Anzahl an ungepaarten Elektronen besitzt ein zweiwertiges Eisen-Kation ($\\text{Fe}^{2+}$, $Z = 26$) im quantenmechanischen Grundzustand?",
    options: {
      A: "$[\\text{Ar}]\\,3d^6$ mit 4 ungepaarten Elektronen.",
      B: "$[\\text{Ar}]\\,3d^4\\,4s^2$ mit 4 ungepaarten Elektronen.",
      C: "$[\\text{Ar}]\\,3d^6$ mit 0 ungepaarten Elektronen (diamagnetisch).",
      D: "$[\\text{Ar}]\\,3d^5\\,4s^1$ mit 6 ungepaarten Elektronen.",
      E: "$[\\text{Ar}]\\,3d^4$ mit 2 ungepaarten Elektronen."
    },
    correct_answer: "A",
    explanation_correct: "Ein neutrales Eisenatom ($Z = 26$) besitzt die Grundzustandskonfiguration $[\\text{Ar}]\\,3d^6\\,4s^2$. Bei der Ionisation von Übergangsmetallen der 4. Periode werden stets zuerst die energetisch weiter außen liegenden $4s$-Elektronen abgegeben. Für $\\text{Fe}^{2+}$ resultiert somit $[\\text{Ar}]\\,3d^6$. Nach der Hund'schen Regel werden die 5 entarteten $3d$-Orbitale zunächst einfach mit parallelem Spin besetzt, bevor eine Paarung erfolgt. Bei 6 Elektronen ist ein Orbital doppelt und vier Orbitale einfach besetzt $\\rightarrow 4$ ungepaarte Elektronen (stark paramagnetischer High-Spin-Zustand).",
    explanations_incorrect: {
      B: "Bei der Bildung von Übergangsmetall-Kationen werden die $4s$-Elektronen vor den $3d$-Elektronen abgegeben; Konfigurationen mit besetztem $4s$ liegen bei $\\text{Fe}^{2+}$ nicht vor.",
      C: "Die fünf $3d$-Orbitale spalten im freien Ion nicht auf; 6 Elektronen verteilen sich nach Hund auf 4 ungepaarte und 1 gepaartes Orbital (nur im starken Ligandenfeld wäre Low-Spin mit 0 ungepaarten Elektronen möglich).",
      D: "Dies entspräche einem neutralen angeregten Zustand mit 26 Elektronen, nicht dem Kation $\\text{Fe}^{2+}$ mit 24 Elektronen.",
      E: "Die Abgabe von 2 Elektronen aus dem neutralen Atom entfernt die beiden $4s$-Elektronen, nicht zwei $3d$-Elektronen."
    },
    metadata: {
      author: "MedAT BMS Chemistry Assessment Engine",
      status: "curated_medat_compliant",
      version: "1.0_qc_verified"
    }
  },

  // 3. CHEM-BMS-003
  {
    id: "CHEM-BMS-003",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Atombau und Mikrokosmos",
    subtopic: "Welle-Teilchen-Dualismus & de Broglie",
    difficulty: "advanced",
    stem: "Gemäß der de-Broglie-Beziehung ($\\lambda = \\frac{h}{p}$) und der Heisenbergschen Unschärferelation ($\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$) besitzt jede materielle Entität Welleneigenschaften. Welche Aussage über ein Elektron und ein Proton mit exakt gleicher kinetischer Energie ($E_{\\text{kin}}$) ist physikalisch-chemisch zutreffend?",
    options: {
      A: "Beide Teilchen besitzen exakt dieselbe de-Broglie-Wellenlänge, da $\\lambda$ ausschließlich von der kinetischen Energie bestimmt wird.",
      B: "Das Proton besitzt eine größere de-Broglie-Wellenlänge, da seine Ruhemasse ca. 1836-mal größer ist als die des Elektrons.",
      C: "Die Heisenbergsche Unschärferelation verbietet die gleichzeitige Messung von Ort und Impuls bei Photonen, gilt jedoch nicht für geladene Teilchen.",
      D: "Das Elektron besitzt eine wesentlich größere de-Broglie-Wellenlänge als das Proton, da sein Impuls bei gleicher kinetischer Energie deutlich kleiner ist.",
      E: "Verdoppelt man die kinetische Energie eines Elektrons, so verdoppelt sich auch seine de-Broglie-Wellenlänge."
    },
    correct_answer: "D",
    explanation_correct: "Die kinetische Energie hängt mit dem Impuls $p$ über $E_{\\text{kin}} = \\frac{p^2}{2m}$ zusammen, woraus $p = \\sqrt{2m\\cdot E_{\\text{kin}}}$ folgt. Eingesetzt in die de-Broglie-Gleichung ergibt sich $\\lambda = \\frac{h}{\\sqrt{2m\\cdot E_{\\text{kin}}}}$. Da die Masse des Elektrons ($m_e \\approx 9{,}11 \\times 10^{-31}\\text{ kg}$) rund 1836-mal kleiner ist als jene des Protons ($m_p \\approx 1{,}67 \\times 10^{-27}\\text{ kg}$), ist der Impuls des Elektrons bei gleicher kinetischer Energie um den Faktor $\\sqrt{1836} \\approx 43$ kleiner und seine Wellenlänge $\\lambda$ um das 43-Fache größer. Aus diesem Grund zeigen Elektronen im Transmissionselektronenmikroskop (TEM) signifikante Welleneigenschaften bei mikroskopischen Abmessungen.",
    explanations_incorrect: {
      A: "Die de-Broglie-Wellenlänge hängt vom Impuls $p = m\\cdot v$ ab, welcher massenabhängig ist; gleiche kinetische Energie bedeutet nicht gleichen Impuls.",
      B: "Größere Masse führt bei gleicher kinetischer Energie zu größerem Impuls und folglich zu einer *kleineren* (kürzeren) de-Broglie-Wellenlänge.",
      C: "Die Unschärferelation ist ein fundamentales quantenmechanisches Prinzip und gilt ausnahmslos für alle Quantenobjekte (Elektronen, Protonen, Atome, Photonen).",
      E: "Wegen $\\lambda \\sim 1/\\sqrt{E_{\\text{kin}}}$ führt eine Verdopplung der kinetischen Energie zu einer Verkürzung der Wellenlänge um den Faktor $1/\\sqrt{2} \\approx 0{,}707$."
    },
    metadata: {
      author: "MedAT BMS Chemistry Assessment Engine",
      status: "curated_medat_compliant",
      version: "1.0_qc_verified"
    }
  },

  // 4. CHEM-BMS-004
  {
    id: "CHEM-BMS-004",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Gasgesetze und Aggregatzustände",
    subtopic: "Ideales Gasgesetz & Stoffmengenberechnung",
    difficulty: "intermediate",
    stem: "Ein starrer Gasbehälter mit einem Volumen von $24{,}94\\text{ L}$ enthält bei einer Temperatur von $27\\text{ }^\\circ\\text{C}$ ($300{,}15\\text{ K}$) ein reines Gas unter einem Druck von $1{,}0 \\times 10^5\\text{ Pa}$ ($100\\text{ kPa}$). Welche Stoffmenge ($n$) und welche Masse ($m$) an molekularem Sauerstoffgas ($\\text{O}_2$, $M = 32{,}0\\text{ g/mol}$) befinden sich unter Annahme idealen Gasverhaltens im Behälter? (Universelle Gaskonstante $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$)",
    options: {
      A: "$0{,}10\\text{ mol}$ und $3{,}2\\text{ g}$.",
      B: "$1{,}00\\text{ mol}$ und $32{,}0\\text{ g}$.",
      C: "$2{,}00\\text{ mol}$ und $64{,}0\\text{ g}$.",
      D: "$10{,}0\\text{ mol}$ und $320\\text{ g}$.",
      E: "$0{,}50\\text{ mol}$ und $16{,}0\\text{ g}$."
    },
    correct_answer: "B",
    explanation_correct: "Gegeben sind: $p = 1{,}0 \\times 10^5\\text{ Pa} = 10^5\\text{ N/m}^2$, $V = 24{,}94\\text{ L} = 24{,}94 \\times 10^{-3}\\text{ m}^3$, $T = 27 + 273{,}15 = 300{,}15\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Nach dem idealen Gasgesetz gilt: $p \\cdot V = n \\cdot R \\cdot T \\Rightarrow n = \\frac{p \\cdot V}{R \\cdot T} = \\frac{10^5\\text{ Pa} \\cdot 24{,}94 \\times 10^{-3}\\text{ m}^3}{8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\cdot 300{,}15\\text{ K}} = \\frac{2494}{2495{,}4} \\approx 1{,}00\\text{ mol}$. Die Masse an $\\text{O}_2$ errechnet sich über $m = n \\cdot M = 1{,}00\\text{ mol} \\cdot 32{,}0\\text{ g/mol} = 32{,}0\\text{ g}$.",
    explanations_incorrect: {
      A: "Dieser Wert resultiert aus einem Einheitenfehler bei der Volumenumrechnung von Litern in Kubikmeter (Faktor 10 zu gering).",
      C: "Dies wäre das Ergebnis, wenn fälschlicherweise das atomare Sauerstoffgewicht ($16\\text{ g/mol}$) für die Stoffmenge bei gegebener Masse herangezogen worden wäre.",
      D: "Hier wurde der Druck in Bar ohne Umrechnung in Pascal ($10^5$) mit Litern ohne Umrechnung in $\\text{m}^3$ inkonsistent kombiniert.",
      E: "Entspräche einem molaren Volumen von rund $50\\text{ L/mol}$, was bei $300\\text{ K}$ und $1\\text{ bar}$ physikalisch falsch ist."
    },
    metadata: {
      author: "MedAT BMS Chemistry Assessment Engine",
      status: "curated_medat_compliant",
      version: "1.0_qc_verified"
    }
  },

  // 5. CHEM-BMS-005
  {
    id: "CHEM-BMS-005",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Gasgesetze und Aggregatzustände",
    subtopic: "Boyle-Mariotte & Gay-Lussac",
    difficulty: "foundational",
    stem: "Welche Aussage beschreibt das Verhalten eines idealen Gases bei einer isothermen bzw. isobaren Zustandsänderung thermodynamisch korrekt?",
    options: {
      A: "Bei isothermer Kompression ($T = \\text{konst.}$) verdoppelt sich das Volumen, wenn der Druck verdoppelt wird.",
      B: "Bei isobarer Erwärmung ($p = \\text{konst.}$) von $20\\text{ }^\\circ\\text{C}$ auf $40\\text{ }^\\circ\\text{C}$ verdoppelt sich das Gasvolumen.",
      C: "Das Gesetz von Gay-Lussac besagt, dass bei konstantem Volumen der Druck umgekehrt proportional zur Kelvin-Temperatur ist.",
      D: "Bei isochorer Abkühlung ($V = \\text{konst.}$) bleibt der Druck konstant, während die innere Energie steigt.",
      E: "Nach dem Gesetz von Boyle-Mariotte sind Druck und Volumen bei konstanter Temperatur zueinander umgekehrt proportional ($p \\cdot V = \\text{konst.}$)."
    },
    correct_answer: "E",
    explanation_correct: "Das Gesetz von Boyle-Mariotte beschreibt isotherme Zustandsänderungen ($T = \\text{konst.}$): Das Produkt aus Druck und Volumen ist konstant ($p \\cdot V = \\text{konst.}$), d. h. Druck und Volumen verhalten sich zueinander umgekehrt proportional. Wird der Druck verdoppelt, halbiert sich das Volumen. Bei isobaren Prozessen (Gay-Lussac) ist das Volumen direkt proportional zur absoluten Temperatur in Kelvin ($V/T = \\text{konst.}$), nicht zur Celsius-Temperatur.",
    explanations_incorrect: {
      A: "Bei Verdopplung des Drucks halbiert sich das Volumen bei konstanter Temperatur (inverse Proportionalität).",
      B: "Die Proportionalität gilt für die absolute Temperatur in Kelvin ($T_1 = 293\\text{ K} \\rightarrow T_2 = 313\\text{ K}$); der Zuwachs beträgt nur rund $7\\,\\%$, keine Verdopplung.",
      C: "Gay-Lussac beschreibt den isobaren Prozess ($V \\sim T$); die Druck-Temperatur-Beziehung bei konstantem Volumen ist das Gesetz von Amontons ($p \\sim T$, direkte Proportionalität).",
      D: "Bei isochorer Abkühlung sinkt der Druck proportional zur Temperatur ($p/T = \\text{konst.}$); er bleibt keineswegs konstant."
    },
    metadata: {
      author: "MedAT BMS Chemistry Assessment Engine",
      status: "curated_medat_compliant",
      version: "1.0_qc_verified"
    }
  }
];

console.log('Sample questions prepared:', questions.length);
