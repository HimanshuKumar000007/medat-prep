/**
 * MedAT Chemie BMS — 24-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #2 (BMS Chemie-Testteil, exakt 24 Original-Aufgaben).
 * 
 * Fachlich und terminologisch präzise angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung:
 * - 6 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 12 Mittel (Intermediate) (50,0 %)
 * - 6 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel:
 * - A: 5, B: 5, C: 5, D: 5, E: 4 (Gesamt: 24)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcChemGp2QuestionRaw {
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

export const RAW_GENERALPROBE_2_CHEM_QUESTIONS: QcChemGp2QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Atombau & Periodensystem (chem-01-atombau) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-001",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Atombau und Mikrokosmos",
    subtopic: "Quantenzahlen & Orbitale",
    difficulty: "foundational",
    stem: "Welche Kombination der vier Quantenzahlen $(n, l, m_l, m_s)$ beschreibt einen physikalisch und quantenmechanisch erlaubten Zustand eines Elektrons in einem $3p$-Orbital eines Atoms?",
    options: {
      A: "$n = 3,\\, l = 0,\\, m_l = 0,\\, m_s = +\\frac{1}{2}$",
      B: "$n = 3,\\, l = 1,\\, m_l = -1,\\, m_s = -\\frac{1}{2}$",
      C: "$n = 3,\\, l = 2,\\, m_l = +1,\\, m_s = +\\frac{1}{2}$",
      D: "$n = 2,\\, l = 1,\\, m_l = 0,\\, m_s = +\\frac{1}{2}$",
      E: "$n = 3,\\, l = 1,\\, m_l = +2,\\, m_s = -\\frac{1}{2}$"
    },
    correct_answer: "B",
    explanation_correct: "Ein $3p$-Orbital ist durch die Hauptquantenzahl $n = 3$ (3. Schale / M-Schale) und die Nebenquantenzahl (Drehimpulsquantenzahl) $l = 1$ (charakteristisch für $p$-Orbitale) eindeutig festgelegt. Für die magnetische Quantenzahl $m_l$ sind alle ganzzahligen Werte von $-l$ bis $+l$ erlaubt, also $m_l \\in \\{-1, 0, +1\\}$. Die Spinquantenzahl kann $m_s = +\\frac{1}{2}$ oder $-\\frac{1}{2}$ betragen. Die Kombination $n = 3, l = 1, m_l = -1, m_s = -\\frac{1}{2}$ erfüllt alle quantenmechanischen Regeln.",
    explanations_incorrect: {
      A: "$l = 0$ beschreibt ein $s$-Orbital (hier $3s$), kein $p$-Orbital.",
      C: "$l = 2$ beschreibt ein $d$-Orbital (hier $3d$), kein $p$-Orbital.",
      D: "$n = 2$ beschreibt die 2. Elektronenschale (L-Schale, also ein $2p$-Orbital), nicht die 3. Schale.",
      E: "Für ein $p$-Orbital ($l = 1$) kann die magnetische Quantenzahl $m_l$ maximal $+1$ betragen; der Wert $m_l = +2$ ist physikalisch unmöglich."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-002",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Atombau und Mikrokosmos",
    subtopic: "Ionisierungsenergie & Periodizität",
    difficulty: "intermediate",
    stem: "Warum ist die zweite Ionisierungsenergie ($\\text{IE}_2$) eines chemischen Elements ausnahmslos größer als seine erste Ionisierungsenergie ($\\text{IE}_1$), und warum ist dieser Unterschied beim Alkalimetall Natrium ($\\text{Na}$) besonders drastisch?",
    options: {
      A: "Weil die zweite Ionisierungsenergie die Spaltung von Atomkernen erfordert, während $\\text{IE}_1$ nur Hüllenelektronen betrifft.",
      B: "Weil positiv geladene Kationen durch gegenseitige Abstoßung ihrer Protonen instabil werden.",
      C: "Weil nach Abgabe des ersten Elektrons die effektive Kernladung pro verbleibendem Elektron sinkt.",
      D: "Weil nach Abgabe des ersten Elektrons das zweite Elektron aus einem positiv geladenen Kation gegen eine höhere effektive Kernladung entfernt werden muss, und bei Natrium zusätzlich die energetisch besonders stabile Edelgaskonfiguration aufgebrochen wird.",
      E: "Weil Natriumatome im Grundzustand keine Valenzelektronen besitzen."
    },
    correct_answer: "D",
    explanation_correct: "Die zweite Ionisierungsenergie ist stets größer als die erste, da ein Elektron aus einem bereits positiv geladenen Kation ($\\\\text{M}^+$) entfernt werden muss. Die verbleibenden Elektronen erfahren durch die verringerte gegenseitige Abschirmung eine höhere effektive Kernladung ($Z_{\\\\text{eff}}$) und werden stärker an den Kern gebunden. Beim Alkalimetall Natrium ($[\\\\text{Ne}] 3s^1$) führt die Abgabe des ersten Elektrons zur extrem stabilen Edelgaskonfiguration von Neon ($[\\\\text{Ne}] = 1s^2 2s^2 2p^6$). Die zweite Ionisierung erfordert daher das Aufbrechen einer vollbesetzten inneren Schale mit deutlich kleinerem Atomradius, weshalb $\\\\text{IE}_2$ sprunghaft auf mehr als das Achtfache von $\\\\text{IE}_1$ ansteigt (496 kJ/mol vs. 4.562 kJ/mol).",
    explanations_incorrect: {
      A: "Ionisierungsenergien betreffen ausschließlich die Entfernung von Elektronen aus der Atomhülle; der Atomkern bleibt unberührt.",
      B: "Kationen stoßen nicht ihre eigenen Kernprotonen ab; Kationen sind durch elektrostatische Anziehung zwischen Kern und Hülle stabil.",
      C: "Die effektive Kernladung pro verbleibendem Elektron steigt (und sinkt nicht), da weniger Elektronen die unveränderte Kernladung abschirmen.",
      E: "Natrium besitzt im Grundzustand genau ein Valenzelektron im $3s$-Orbital."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Radioaktivität & Kernzerfall (chem-02-strahlung) - 1 Aufgabe
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-003",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Atombau und Mikrokosmos",
    subtopic: "Radioaktiver Zerfall: Beta-Minus-Zerfall",
    difficulty: "foundational",
    stem: "Welches Tochternuklid entsteht beim radioaktiven $\\beta^-$-Zerfall eines Kohlenstoff-14-Kerns ($^{14}_{\\phantom{0}6}\\text{C}$), und welche fundamentale Teilchenumwandlung findet dabei im Atomkern statt?",
    options: {
      A: "Ein Stickstoff-14-Kern ($^{14}_{\\phantom{0}7}\\text{N}$), da sich im Kern ein Neutron unter Emission eines Elektrons und eines Antineutrinos in ein Proton umwandelt.",
      B: "Ein Bor-14-Kern ($^{14}_{\\phantom{0}5}\\text{B}$), da sich im Kern ein Proton in ein Neutron umwandelt.",
      C: "Ein Kohlenstoff-13-Kern ($^{13}_{\\phantom{0}6}\\text{C}$), da ein Neutron aus dem Kern herausgeschleudert wird.",
      D: "Ein Beryllium-10-Kern ($^{10}_{\\phantom{0}4}\\text{Be}$), da ein $\\alpha$-Teilchen emittiert wird.",
      E: "Ein Sauerstoff-14-Kern ($^{14}_{\\phantom{0}8}\\text{O}$), da zwei Protonen neu gebildet werden."
    },
    correct_answer: "A",
    explanation_correct: "Beim $\\\\beta^-$-Zerfall wandelt sich im instabilen neutronenreichen Kern ein Neutron durch die schwache Wechselwirkung in ein Proton um: $n \\\\to p^+ + e^- + \\\\bar{\\\\nu}_e$. Das gebildete Elektron ($e^-$) wird als $\\\\beta^-$-Strahlung zusammen mit einem Elektron-Antineutrino emittiert. Dadurch bleibt die Massenzahl (Gesamtzahl der Nukleonen) konstant ($A = 14$), während die Kernladungszahl (Protonenzahl) um 1 steigt ($Z = 6 + 1 = 7$). Das Element mit Ordnungszahl 7 ist Stickstoff, das resultierende Tochternuklid ist somit $^{14}_{\\\\phantom{0}7}\\\\text{N}$.",
    explanations_incorrect: {
      B: "Die Umwandlung eines Protons in ein Neutron ($p^+ \\to n + e^+ + \\nu_e$) kennzeichnet den $\\beta^+$-Zerfall und würde zu Bor ($Z=5$) führen, tritt bei C-14 jedoch nicht auf.",
      C: "Der Ausstoß eines freien Neutrons ist eine Neutronenemission, kein $\\beta^-$-Zerfall.",
      D: "Die Emission eines $\\alpha$-Teilchens ($^4_2\\text{He}$) senkt $A$ um 4 und $Z$ um 2, was bei C-14 nicht stattfindet.",
      E: "Sauerstoff ($Z=8$) würde das Entstehen zweier Protonen erfordern, was keinem einfachen $\\beta$-Zerfall entspricht."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Gase & Aggregatzustände (chem-03-gase) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-004",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Gasgesetze und Aggregatzustände",
    subtopic: "Daltonsches Partialdruckgesetz",
    difficulty: "intermediate",
    stem: "Ein medizinisches Atemgasgemisch in einer starren Gasflasche besteht unter Annahme idealen Gasverhaltens aus $80\\text{ Vol.-\\%}$ Stickstoff ($\\text{N}_2$) und $20\\text{ Vol.-\\%}$ Sauerstoff ($\\text{O}_2$) bei einem Gesamtdruck von $5{,}0\\text{ bar}$. Welcher Sauerstoff-Partialdruck $p(\\text{O}_2)$ herrscht im Gemisch, und welches physikalische Gasgesetz begründet diese Berechnung?",
    options: {
      A: "$p(\\text{O}_2) = 0{,}20\\text{ bar}$ nach dem Gesetz von Gay-Lussac.",
      B: "$p(\\text{O}_2) = 0{,}50\\text{ bar}$ nach dem Gesetz von Boyle-Mariotte.",
      C: "$p(\\text{O}_2) = 1{,}0\\text{ bar}$ nach dem Daltonschen Gesetz der Partialdrücke.",
      D: "$p(\\text{O}_2) = 4{,}0\\text{ bar}$ nach dem Satz von Avogadro.",
      E: "$p(\\text{O}_2) = 2{,}5\\text{ bar}$ nach dem Gesetz von Charles."
    },
    correct_answer: "C",
    explanation_correct: "Nach dem Daltonschen Gesetz der Partialdrücke entspricht der Gesamtdruck eines idealen Gasgemischs der Summe der Partialdrücke aller Einzelgase: $p_{\\\\text{ges}} = \\\\sum p_i$. Der Partialdruck einer Gaskomponente ist proportional zu ihrem Stoffmengenanteil $x_i$ (bzw. bei idealen Gasen nach Avogadro zu ihrem Volumenanteil): $p_i = x_i \\\\cdot p_{\\\\text{ges}}$. Bei $20\\\\text{ Vol.-\\\\%}$ Sauerstoff beträgt der Stoffmengenanteil $x(\\\\text{O}_2) = 0{,}20$. Damit ergibt sich: $p(\\\\text{O}_2) = 0{,}20 \\\\cdot 5{,}0\\\\text{ bar} = 1{,}0\\\\text{ bar}$.",
    explanations_incorrect: {
      A: "$0{,}20\\text{ bar}$ ist der numerische Volumenanteil, nicht das Produkt aus Anteil und Gesamtdruck; Gay-Lussac beschreibt die isobarische Temperaturabhängigkeit.",
      B: "$0{,}50\\text{ bar}$ resultiert aus einem Rechenfehler (Faktor 10 zu niedrig); Boyle-Mariotte beschreibt isotherme $p$-$V$-Zustandsänderungen.",
      D: "$4{,}0\\text{ bar}$ ist der Partialdruck des Stickstoffs ($80\\% \\text{ von } 5{,}0\\text{ bar}$), nicht des Sauerstoffs.",
      E: "$2{,}5\\text{ bar}$ entspräche einem 50:50-Gemisch."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-005",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Gasgesetze und Aggregatzustände",
    subtopic: "Phasendiagramm & Dichteanomalie des Wassers",
    difficulty: "advanced",
    stem: "Welche Besonderheit weist das Phasendiagramm ($p$-$T$-Diagramm) von reinem Wasser im Bereich der Schmelzdruckkurve im Vergleich zu fast allen anderen Reinstoffen auf, und welcher thermodynamische Effekt resultiert daraus bei Druckerhöhung auf Eis?",
    options: {
      A: "Die Schmelzdruckkurve verläuft streng horizontal; der Schmelzpunkt ist vollkommen druckunabhängig.",
      B: "Die Schmelzdruckkurve hat eine steil positive Steigung; unter erhöhtem Druck steigt der Schmelzpunkt von Eis stark an.",
      C: "Am Tripelpunkt von Wasser koexistieren nur zwei Phasen stabil miteinander.",
      D: "Eis sublimiert bei Raumtemperatur unter Atmosphärendruck spontan vollständig zu Wasserdampf.",
      E: "Die Schmelzdruckkurve weist eine negative Steigung auf; infolgedessen sinkt der Schmelzpunkt von Eis bei steigendem Druck (Druckschmelzen)."
    },
    correct_answer: "E",
    explanation_correct: "Aufgrund der Dichteanomalie des Wassers (hervorgerufen durch das offene, hohlraumreiche Kristallgitter des Eises mit tetraedrischen Wasserstoffbrücken) besitzt flüssiges Wasser bei $0\\\\text{ }^\\\\circ\\\\text{C}$ eine höhere Dichte als festes Eis. Beim Schmelzen nimmt das Volumen ab ($\\\\Delta V_{\\\\text{Schmelz}} < 0$). Gemäß der Clausius-Clapeyron-Gleichung ($dp/dT = \\\\Delta H / (T \\\\Delta V)$) bzw. nach dem Prinzip von Le Chatelier begünstigt eine Druckerhöhung die Phase mit geringerem spezifischem Volumen (flüssiges Wasser). Daher besitzt die Schmelzdruckkurve von Wasser eine negative Steigung ($dp/dT < 0$), und Eis schmilzt bei Druckerhöhung bereits bei Temperaturen unter $0\\\\text{ }^\\\\circ\\\\text{C}$.",
    explanations_incorrect: {
      A: "Der Schmelzpunkt ist druckabhängig; eine horizontale Kurve existiert im Phasendiagramm nicht.",
      B: "Eine positive Steigung zeigen normale Stoffe (wie CO2), die sich beim Erstarren zusammenziehen; bei Wasser ist die Steigung negativ.",
      C: "Am Tripelpunkt ($T = 0{,}01\\text{ }^\\circ\\text{C}, p = 6{,}11\\text{ mbar}$) stehen alle drei Phasen (fest, flüssig, gasförmig) im thermodynamischen Gleichgewicht.",
      D: "Eis sublimiert nur unterhalb des Tripelpunktdrucks ($< 6{,}11\\text{ mbar}$); bei Atmosphärendruck schmilzt es bei Erwärmung."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Periodensystem & Chemische Bindungen (chem-04-bindungen) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-006",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Periodensystem und chemische Bindungen",
    subtopic: "Intermolekulare Wechselwirkungen & H-Brücken",
    difficulty: "foundational",
    stem: "Welche der folgenden chemischen Verbindungen kann im reinen flüssigen Zustand zwischen ihren Molekülen intermolekulare Wasserstoffbrückenbindungen sowohl als Donator als auch als Akzeptor ausbilden?",
    options: {
      A: "Methan ($\\text{CH}_4$)",
      B: "Dimethylether ($\\text{CH}_3\\text{--O--CH}_3$)",
      C: "Ethanol ($\\text{CH}_3\\text{--CH}_2\\text{--OH}$)",
      D: "Chlormethan ($\\text{CH}_3\\text{Cl}$)",
      E: "Kohlenstoffdioxid ($\\text{CO}_2$)"
    },
    correct_answer: "C",
    explanation_correct: "Zur Ausbildung klassischer Wasserstoffbrückenbindungen benötigt ein Molekül: 1. Einen Wasserstoffbrücken-Donator (ein H-Atom, das kovalent an ein stark elektronegatives Atom wie N, O oder F gebunden ist, wodurch es stark partiell positiv polarisiert ist, $\\\\delta^+$). 2. Einen Wasserstoffbrücken-Akzeptor (ein stark elektronegatives Atom mit mindestens einem freien Elektronenpaar). Ethanol besitzt eine Hydroxylgruppe ($\\text{--OH}$): Das O-Atom trägt freie Elektronenpaare (Akzeptor) und das daran gebundene H-Atom fungiert als Donator. Dimethylether (B) besitzt zwar Akzeptor-Elektronenpaare am Sauerstoff, aber kein direkt an Sauerstoff gebundenes H-Atom (kann daher untereinander keine H-Brücken ausbilden).",
    explanations_incorrect: {
      A: "Methan ist unpolar; C und H haben eine sehr ähnliche Elektronegativität (kein H-Brücken-Donator/Akzeptor).",
      B: "Dimethylether hat nur Akzeptoreigenschaften (freie Elektronenpaare am O), kann aber mangels polarer O-H-Bindung untereinander keine H-Brücken knüpfen.",
      D: "Chlormethan bildet permanente Dipol-Dipol-Kräfte aus, Chlor geht jedoch keine signifikanten H-Brücken ein.",
      E: "Kohlenstoffdioxid ist ein unpolares lineares Gas ohne Wasserstoffatome."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-007",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Periodensystem und chemische Bindungen",
    subtopic: "VSEPR-Modell & Bindungswinkel",
    difficulty: "intermediate",
    stem: "Im VSEPR-Modell (Elektronenpaarabstoßungs-Modell) besitzen Methan ($\\text{CH}_4$), Ammoniak ($\\text{NH}_3$) und Wasser ($\\text{H}_2\\text{O}$) jeweils vier Elektronenpaare in der Valenzschale des Zentralatoms. Wie ordnen sich die Bindungswinkel dieser drei Moleküle korrekt zueinander an?",
    options: {
      A: "$\\text{H}_2\\text{O} > \\text{NH}_3 > \\text{CH}_4$",
      B: "$\\text{CH}_4 = \\text{NH}_3 = \\text{H}_2\\text{O} = 109{,}5^\\circ$",
      C: "$\\text{CH}_4\\,(109{,}5^\\circ) > \\text{NH}_3\\,(\\approx 107^\\circ) > \\text{H}_2\\text{O}\\,(\\approx 104{,}5^\\circ)$",
      D: "$\\text{NH}_3\\,(120^\\circ) > \\text{CH}_4\\,(109{,}5^\\circ) > \\text{H}_2\\text{O}\\,(90^\\circ)$",
      E: "$\\text{H}_2\\text{O}\\,(180^\\circ) > \\text{CH}_4\\,(109{,}5^\\circ) > \\text{NH}_3\\,(90^\\circ)$"
    },
    correct_answer: "C",
    explanation_correct: "Alle drei Moleküle weisen eine tetraedrische Elektronenpaaranordnung (Sterische Zahl = 4, $sp^3$-Hybridisierung) auf. Nicht-bindende freie Elektronenpaare beanspruchen jedoch ein größeres Raumvolumen als bindende Elektronenpaare, da sie nur von einem Atomkern angezogen werden. Die stärkere Abstoßung drückt die bindenden Elektronenpaare zusammen:\n- Methan ($\\text{CH}_4$, 0 freie Paare): idealer Tetraederwinkel von $109{,}5^\\circ$.\n- Ammoniak ($\\text{NH}_3$, 1 freies Paar): Einengung auf ca. $107^\\circ$ (trigonal-pyramidal).\n- Wasser ($\\text{H}_2\\text{O}$, 2 freie Paare): doppelte Abstoßung verringert den Winkel auf ca. $104{,}5^\\circ$ (gewinkelt).",
    explanations_incorrect: {
      A: "Kehrt die Reihenfolge der Bindungswinkel komplett um.",
      B: "Ignoriert den erhöhten Raumbedarf nicht-bindender Elektronenpaare.",
      D: "Ammoniak ist nicht trigonal-planar ($120^\\circ$), sondern pyramidal.",
      E: "Wasser ist nicht linear ($180^\\circ$), sondern durch die zwei freien Elektronenpaare gewinkelt."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-008",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Periodensystem und chemische Bindungen",
    subtopic: "Dipolmoment & Molekülsymmetrie",
    difficulty: "advanced",
    stem: "Welche der folgenden chemischen Verbindungen besitzt trotz polarer kovalenter Bindungen KEIN permanentes Gesamtdipolmoment (Dipolmoment $\\mu = 0\\text{ D}$), weil sich die einzelnen Bindungsdipolvektoren aufgrund der hochsymmetrischen Geometrie vollständig kompensieren?",
    options: {
      A: "Schwefeldioxid ($\\text{SO}_2$, gewinkelt)",
      B: "Ammoniak ($\\text{NH}_3$, trigonal-pyramidal)",
      C: "Trichlormethan ($\\text{CHCl}_3$, tetraedrisch)",
      D: "Bortrifluorid ($\\text{BF}_3$, trigonal-planar)",
      E: "Wasser ($\\text{H}_2\\text{O}$, gewinkelt)"
    },
    correct_answer: "D",
    explanation_correct: "Ein Molekül besitzt nur dann ein permanentes Dipolmoment ($\\mu > 0$), wenn 1. polare kovalente Bindungen mit Elektronegativitätsdifferenz ($\\Delta\\text{EN} > 0{,}4$) vorliegen und 2. die Ladungsschwerpunkte der positiven und negativen Partialladungen nicht zusammenfallen. In Bortrifluorid ($\\text{BF}_3$) ist die $\\text{B--F}$-Bindung extrem polar ($\\Delta\\text{EN} = 4{,}0 - 2{,}0 = 2{,}0$). Da das Boratom jedoch nur drei Valenzelektronenpaare besitzt und keine freien Elektronenpaare trägt, ist das Molekül exakt trigonal-planar ($120^\\circ$-Winkel, $D_{3h}$-Symmetrie). Die drei Dipolvektoren heben sich vektoriell exakt zu null auf: $\\sum \\vec{\\mu} = 0$. In gewinkelten ($\\text{SO}_2, \\text{H}_2\\text{O}$) oder asymmetrisch substituierten Molekülen ($\\text{CHCl}_3, \\text{NH}_3$) heben sich die Vektoren nicht auf.",
    explanations_incorrect: {
      A: "$\\text{SO}_2$ besitzt ein freies Elektronenpaar am Schwefelatom, ist gewinkelt und besitzt ein permanentes Dipolmoment ($\mu = 1{,}63\\text{ D}$).",
      B: "$\\text{NH}_3$ ist trigonal-pyramidal (freies Elektronenpaar an der Spitze) und besitzt ein permanentes Dipolmoment ($\mu = 1{,}47\\text{ D}$).",
      C: "In $\\text{CHCl}_3$ brechen die drei Chloratome und das eine Wasserstoffatom die tetraedrische Ladungssymmetrie ($\mu = 1{,}04\\text{ D}$).",
      E: "Wasser ist gewinkelt ($104{,}5^\\circ$) und besitzt ein starkes permanentes Dipolmoment ($\mu = 1{,}85\\text{ D}$)."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Stöchiometrie & quantitative Beziehungen (chem-05-stoechiometrie) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-009",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Stöchiometrie und chemische Reaktionen",
    subtopic: "Verbrennungsstöchiometrie & Massenberechnung",
    difficulty: "foundational",
    stem: "Gemäß der Reaktionsgleichung $\\text{CH}_4\\text{ (g)} + 2\\,\\text{O}_2\\text{ (g)} \\rightarrow \\text{CO}_2\\text{ (g)} + 2\\,\\text{H}_2\\text{O (l)}$:\\nWie viel Gramm molekularer Sauerstoff ($\\text{O}_2$, $M = 32{,}0\\text{ g/mol}$) werden für die vollständige Verbrennung von $16{,}0\\text{ g}$ Methan ($\\text{CH}_4$, $M = 16{,}0\\text{ g/mol}$) exakt benötigt?",
    options: {
      A: "$16{,}0\\text{ g}$",
      B: "$64{,}0\\text{ g}$",
      C: "$32{,}0\\text{ g}$",
      D: "$128{,}0\\text{ g}$",
      E: "$44{,}0\\text{ g}$"
    },
    correct_answer: "B",
    explanation_correct: "1. Stoffmenge an Methan berechnen: $n(\\\\text{CH}_4) = \\\\frac{m}{M} = \\\\frac{16{,}0\\\\text{ g}}{16{,}0\\\\text{ g/mol}} = 1{,}0\\\\text{ mol}$.\\n2. Stöchiometrisches Verhältnis laut Reaktionsgleichung: Für die Verbrennung von $1\\\\text{ mol } \\\\text{CH}_4$ werden genau $2\\\\text{ mol } \\\\text{O}_2$ benötigt ($1 : 2$).\\n3. Erforderliche Stoffmenge Sauerstoff: $n(\\\\text{O}_2) = 2 \\\\cdot 1{,}0\\\\text{ mol} = 2{,}0\\\\text{ mol}$.\\n4. Masse an Sauerstoff berechnen: $m(\\\\text{O}_2) = n \\\\cdot M = 2{,}0\\\\text{ mol} \\\\cdot 32{,}0\\\\text{ g/mol} = 64{,}0\\\\text{ g}$.",
    explanations_incorrect: {
      A: "$16{,}0\\text{ g}$ entspräche $0{,}5\\text{ mol } \\text{O}_2$, was einer unvollständigen Verbrennung zu CO entspricht.",
      C: "$32{,}0\\text{ g}$ entspräche nur $1{,}0\\text{ mol } \\text{O}_2$, wobei das stöchiometrische Verhältnis von $1:2$ ignoriert wurde.",
      D: "$128{,}0\\text{ g}$ entspräche der vierfachen Stoffmenge ($4\\text{ mol } \\text{O}_2$).",
      E: "$44{,}0\\text{ g}$ ist die Masse des entstehenden Kohlenstoffdioxids ($\text{CO}_2$), nicht des verbrauchten Sauerstoffs."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-010",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Stöchiometrie und chemische Reaktionen",
    subtopic: "Verdünnungsberechnung & Konzentration",
    difficulty: "intermediate",
    stem: "Aus einer Salzsäure-Stammlösung der Konzentration $c_1 = 2{,}0\\text{ mol/L}$ soll durch Verdünnen mit Wasser exakt ein Volumen von $V_2 = 500\\text{ mL}$ einer gebrauchsfertigen Salzsäure mit $c_2 = 0{,}10\\text{ mol/L}$ hergestellt werden. Welches Volumen der Stammlösung ($V_1$) muss entnommen werden?",
    options: {
      A: "$25\\text{ mL}$",
      B: "$50\\text{ mL}$",
      C: "$10\\text{ mL}$",
      D: "$100\\text{ mL}$",
      E: "$2{,}5\\text{ mL}$"
    },
    correct_answer: "A",
    explanation_correct: "Beim reinen Verdünnen mit Lösemittel bleibt die gelöste Stoffmenge $n$ des gelösten Stoffes konstant: $n_1 = n_2$. Da $n = c \\\\cdot V$, gilt die fundamentale Verdünnungsgleichung: $c_1 \\\\cdot V_1 = c_2 \\\\cdot V_2$. Umstellen nach dem gesuchten Entnahmevolumen $V_1$: $V_1 = \\\\frac{c_2 \\\\cdot V_2}{c_1} = \\\\frac{0{,}10\\\\text{ mol/L} \\\\cdot 500\\\\text{ mL}}{2{,}0\\\\text{ mol/L}} = \\\\frac{50}{2{,}0}\\\\text{ mL} = 25\\\\text{ mL}$. Es müssen somit $25\\\\text{ mL}$ Stammlösung mit Wasser auf genau $500\\\\text{ mL}$ Endvolumen aufgefüllt werden.",
    explanations_incorrect: {
      B: "$50\\text{ mL}$ entspräche einer Endkonzentration von $0{,}20\\text{ mol/L}$.",
      C: "$10\\text{ mL}$ entspräche einer Endkonzentration von nur $0{,}04\\text{ mol/L}$.",
      D: "$100\\text{ mL}$ entspräche einer vierfach zu hohen Konzentration ($0{,}40\\text{ mol/L}$).",
      E: "$2{,}5\\text{ mL}$ ist um einen Faktor 10 zu gering (Zehnerpotenz-Rechenfehler)."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-011",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Stöchiometrie und chemische Reaktionen",
    subtopic: "Löslichkeitsprodukt & Fällungsreaktion",
    difficulty: "advanced",
    stem: "Das Löslichkeitsprodukt von Bariumsulfat ($\\text{BaSO}_4$) in wässriger Lösung beträgt bei $25\\text{ }^\\circ\\text{C}$ etwa $K_L = 1{,}0 \\times 10^{-10}\\text{ mol}^2/\\text{L}^2$. Wie hoch ist die molare Sättigungskonzentration von $\\text{Ba}^{2+}$-Ionen in reinem Wasser, und unter welcher Bedingung fällt festes $\\text{BaSO}_4$ spontan aus?",
    options: {
      A: "$[\\text{Ba}^{2+}] = 1{,}0 \\times 10^{-10}\\text{ mol/L}$; Fällung erfolgt, wenn das Ionenprodukt kleiner als $K_L$ ist.",
      B: "$[\\text{Ba}^{2+}] = 2{,}0 \\times 10^{-5}\\text{ mol/L}$; Fällung erfolgt nur bei Zugabe von Säure.",
      C: "$[\\text{Ba}^{2+}] = 1{,}0 \\times 10^{-20}\\text{ mol/L}$; Fällung ist thermodynamisch unmöglich.",
      D: "$[\\text{Ba}^{2+}] = 1{,}0 \\times 10^{-5}\\text{ mol/L}$; Fällung tritt ein, sobald das Ionenprodukt $[\\text{Ba}^{2+}] \\times [\\text{SO}_4^{2-}]$ den Wert von $K_L$ überschreitet ($Q > K_L$).",
      E: "$[\\text{Ba}^{2+}] = 1{,}0 \\times 10^{-3}\\text{ mol/L}$; Fällung erfolgt bei jedem beliebigen Ionenprodukt."
    },
    correct_answer: "D",
    explanation_correct: "Bariumsulfat dissoziiert gemäß: $\\\\text{BaSO}_4\\\\text{ (s)} \\\\rightleftharpoons \\\\text{Ba}^{2+}\\\\text{ (aq)} + \\\\text{SO}_4^{2-}\\\\text{ (aq)}$. Da 1 Mol $\\\\text{BaSO}_4$ genau 1 Mol $\\\\text{Ba}^{2+}$ und 1 Mol $\\\\text{SO}_4^{2-}$ liefert, gilt in reinem Wasser: $[\\\\text{Ba}^{2+}] = [\\\\text{SO}_4^{2-}] = s$ (Sättigungslöslichkeit). Das Löslichkeitsprodukt lautet: $K_L = [\\\\text{Ba}^{2+}] \\\\cdot [\\\\text{SO}_4^{2-}] = s^2$. Daraus folgt für die molare Konzentration: $s = \\\\sqrt{K_L} = \\\\sqrt{1{,}0 \\\\times 10^{-10}} = 1{,}0 \\\\times 10^{-5}\\\\text{ mol/L}$. Überschreitet das Ionenprodukt in einer Lösung den thermodynamischen Gleichgewichtswert ($Q > K_L$), ist die Lösung übersättigt und es fällt spontan fester weißer Bariumsulfat-Niederschlag aus.",
    explanations_incorrect: {
      A: "$1{,}0 \\times 10^{-10}\\text{ mol/L}$ ist der Wert von $K_L$ selbst, nicht die Quadratwurzel $s$; bei $Q < K_L$ löst sich Feststoff auf, es fällt nichts aus.",
      B: "$2{,}0 \\times 10^{-5}\\text{ mol/L}$ verdoppelt fälschlicherweise die Wurzel; Bariumsulfat ist in Wasser und Säuren extrem schwer löslich.",
      C: "$1{,}0 \\times 10^{-20}$ quadriert den Wert von $K_L$ fälschlicherweise anstatt die Wurzel zu ziehen.",
      E: "$1{,}0 \\times 10^{-3}\\text{ mol/L}$ ist um zwei Zehnerpotenzen zu groß ($s^2$ wäre dann $10^{-6}$, was $K_L$ um das 10.000-fache überstiege)."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Chemisches Gleichgewicht & Kinetik (chem-06-gleichgewicht) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-012",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Chemisches Gleichgewicht und Kinetik",
    subtopic: "Massenwirkungsgesetz & Reaktionsquotient",
    difficulty: "intermediate",
    stem: "Für die homogene Gasphasenreaktion $\\text{A (g)} + \\text{B (g)} \\rightleftharpoons 2\\,\\text{C (g)}$ beträgt die Gleichgewichtskonstante bei einer bestimmten Temperatur $K_c = 4{,}0$. Zu einem bestimmten Zeitpunkt werden in einem $1\\text{-L}$-Gefäß folgende Konzentrationen gemessen: $[\\text{A}] = 0{,}50\\text{ mol/L}$, $[\\text{B}] = 0{,}50\\text{ mol/L}$ und $[\\text{C}] = 2{,}0\\text{ mol/L}$. In welche Richtung läuft die Reaktion ab, um das Gleichgewicht einzustellen?",
    options: {
      A: "Die Reaktion befindet sich bereits im dynamischen Gleichgewicht; es findet keine Netto-Reaktion statt.",
      B: "Die Reaktion läuft nach links (Rückreaktion unter Verbrauch von C und Neubildung von A und B) ab, da der Reaktionsquotient $Q_c = 16$ größer ist als $K_c = 4{,}0$.",
      C: "Die Reaktion läuft nach rechts (Hinreaktion), da die Konzentration von C höher ist als die von A und B.",
      D: "Die Reaktion stoppt augenblicklich, da das Volumen konstant ist.",
      E: "Es entsteht spontan reines B, da A vollständig zerfällt."
    },
    correct_answer: "B",
    explanation_correct: "Der Reaktionsquotient $Q_c$ berechnet sich nach dem Massenwirkungsgesetz aus den aktuellen Konzentrationen: $Q_c = \\\\frac{[\\\\text{C}]^2}{[\\\\text{A}] \\\\cdot [\\\\text{B}]} = \\\\frac{(2{,}0)^2}{0{,}50 \\\\cdot 0{,}50} = \\\\frac{4{,}0}{0{,}25} = 16{,}0$. Da $Q_c = 16{,}0$ deutlich größer ist als die Gleichgewichtskonstante $K_c = 4{,}0$, liegen im System zu viele Produkte (Zähler zu groß) bzw. zu wenige Edukte vor. Um den Gleichgewichtszustand $Q_c = K_c$ zu erreichen, muss das System nach links reagieren: Produkt C wird netto verbraucht und die Edukte A und B werden nachgebildet.",
    explanations_incorrect: {
      A: "Gleichgewicht herrscht nur, wenn $Q_c = K_c$ ist; hier ist $Q_c = 16 \\neq 4{,}0$.",
      C: "Die Richtung wird durch den Vergleich von $Q_c$ mit $K_c$ bestimmt, nicht durch die absolute Konzentration eines Stoffes.",
      D: "Konstantes Volumen verhindert keine chemische Gleichgewichtseinstellung.",
      E: "Stöchiometrische Reaktionen verlaufen im Gleichgewichtsschritt gekoppelt, kein isolierter Zerfall."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-013",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Chemisches Gleichgewicht und Kinetik",
    subtopic: "Thermodynamik: Gibbs-Energiebeziehung",
    difficulty: "advanced",
    stem: "Eine chemische Reaktion weist eine positive Reaktionsenthalpie ($\\Delta H > 0$, endotherm) und eine positive Reaktionsentropie ($\\Delta S > 0$, Zunahme der Unordnung) auf. Unter welchen thermodynamischen Bedingungen verläuft diese Reaktion gemäß der Gibbs-Energiebeziehung ($\\Delta G = \\Delta H - T\\Delta S$, unter Annahme näherungsweise temperaturunabhängiger $\\Delta H$- und $\\Delta S$-Werte) freiwillig (spontan, exergon mit $\\Delta G < 0$)?",
    options: {
      A: "Bei allen beliebigen Temperaturen, da Entropiezunahme stets Spontanität erzwingt.",
      B: "Bei keinen Temperaturen; eine endotherme Reaktion kann niemals freiwillig ablaufen.",
      C: "Ausschließlich bei sehr tiefen Temperaturen nahe dem absoluten Nullpunkt ($0\\text{ K}$).",
      D: "Nur bei extrem hohem Druck gemäß dem Gesetz von Boyle-Mariotte.",
      E: "Ausschließlich bei hinreichend hohen Temperaturen, bei denen der Entropieterm $T\\Delta S$ den Enthalpieterm $\Delta H$ betragsmäßig übersteigt ($T > \\frac{\\Delta H}{\\Delta S}$)."
    },
    correct_answer: "E",
    explanation_correct: "Gemäß der fundamentalen Gibbs-Energiebeziehung (Definitionsgleichung der freien Enthalpie / Gibbs-Energie) gilt: $\\\\Delta G = \\\\Delta H - T\\\\Delta S$. Eine Reaktion verläuft genau dann thermodynamisch freiwillig (spontan bzw. exergon), wenn $\\\\Delta G < 0$ ist. Ist $\\\\Delta H > 0$ (ungünstiger Enthalpiebeitrag) und $\\\\Delta S > 0$ (günstiger Entropiebeitrag), so ist der Entropieterm $-T\\\\Delta S$ negativ. Unter der Standardannahme, dass $\\\\Delta H$ und $\\\\Delta S$ im betrachteten Temperaturbereich näherungsweise temperaturunabhängig sind, überwiegt bei tiefen Temperaturen der positive Enthalpieterm $\\\\Delta H$ ($T\\\\Delta S$ ist klein), sodass $\\\\Delta G > 0$ ist (endergon). Mit steigender absoluter Temperatur $T$ wächst der Betrag von $T\\\\Delta S$ linear an. Sobald $T > \\\\frac{\\\\Delta H}{\\\\Delta S}$ ist, übersteigt $T\\\\Delta S$ den Betrag von $\\\\Delta H$, $\\\\Delta G$ wird negativ, und die Reaktion läuft spontan ab.",
    explanations_incorrect: {
      A: "Bei niedrigen Temperaturen überwiegt $\\Delta H > 0$, sodass $\\Delta G > 0$ ist (nicht spontan).",
      B: "Zahlreiche endotherme Prozesse laufen bei hinreichend hoher Temperatur spontan ab (z. B. thermische Zersetzung oder Schmelzen).",
      C: "Bei $T \\to 0$ geht $T\\Delta S \\to 0$, sodass $\\Delta G \\approx \\Delta H > 0$ wird (Reaktion ist bei tiefen Temperaturen nicht freiwillig).",
      D: "Der Druck ändert nicht das fundamentale Vorzeichen der Enthalpie- und Entropiebeiträge der Gibbs-Energiebeziehung."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 7: Elemente & anorganische Verbindungen (chem-07-elemente) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-014",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Elemente und ihre Verbindungen",
    subtopic: "Halogene: Reaktivität & Ionenradien",
    difficulty: "foundational",
    stem: "Wie verändern sich die Oxidationskraft der elementaren Halogene ($\\text{F}_2, \\text{Cl}_2, \\text{Br}_2, \\text{I}_2$) und der Ionenradius der entsprechenden Halogenid-Anionen ($\\text{F}^-, \\text{Cl}^-, \\text{Br}^-, \\text{I}^-$) innerhalb der 7. Hauptgruppe von oben nach unten?",
    options: {
      A: "Die Oxidationskraft der Halogene nimmt ab ($\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$), während der Ionenradius der Halogenide zunimmt ($\\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$).",
      B: "Die Oxidationskraft der Halogene nimmt zu, während der Ionenradius der Halogenide sinkt.",
      C: "Sowohl die Oxidationskraft als auch der Ionenradius nehmen von oben nach unten kontinuierlich ab.",
      D: "Beide Eigenschaften bleiben innerhalb der Hauptgruppe exakt konstant.",
      E: "Fluor ist das schwächste Oxidationsmittel der Gruppe, besitzt aber das größte Anion."
    },
    correct_answer: "A",
    explanation_correct: "In der 7. Hauptgruppe (Halogene) nimmt von oben nach unten (von Fluor zu Iod) die Zahl der besetzten Elektronenschalen zu. Dadurch vergrößert sich der Abstand der Valenzelektronen zum Kern, und der Ionenradius der Halogenide wächst kontinuierlich an: $r(\\text{F}^-) < r(\\text{Cl}^-) < r(\\text{Br}^-) < r(\\text{I}^-)$. Die Oxidationskraft in wässriger Lösung spiegelt die thermodynamische Triebkraft des gesamten Reduktionsprozesses wider (Standardreduktionspotenziale: $E^\\circ(\\text{F}_2/\\text{F}^-) = +2{,}87\\text{ V} > E^\\circ(\\text{Cl}_2/\\text{Cl}^-) = +1{,}36\\text{ V} > E^\\circ(\\text{Br}_2/\\text{Br}^-) = +1{,}07\\text{ V} > E^\\circ(\\text{I}_2/\\text{I}^-) = +0{,}54\\text{ V}$). Dieser Trend beruht nicht allein auf der Elektronegativität, sondern auf der energetischen Gesamtbilanz des Redoxzyklus (Bindungsdissoziationsenthalpie von $\\text{X}_2$, Elektronenaffinität von $\\text{X}$ und insbesondere der stark exothermen Hydratationsenthalpie des kleinen Halogenid-Anions $\\text{X}^-$). Da die Hydratationsenthalpie mit wachsendem Ionenradius von oben nach unten stark abnimmt, sinkt die Oxidationskraft elementarer Halogene von $\\text{F}_2$ bis $\\text{I}_2$ stetig ab.",
    explanations_incorrect: {
      B: "Kehrt beide Gesetzmäßigkeiten fälschlicherweise um.",
      C: "Der Ionenradius nimmt wegen der zusätzlichen Schalen zu, nicht ab.",
      D: "Periodische Eigenschaften ändern sich entlang einer Gruppe systematisch.",
      E: "Fluor ist das stärkste Oxidationsmittel und das Fluorid-Ion ist das kleinste Halogenid."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-015",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Elemente und ihre Verbindungen",
    subtopic: "Säureanhydride & Schwefelchemie",
    difficulty: "intermediate",
    stem: "Welche Säure entsteht primär bei der exothermen Reaktion von gasförmigem Schwefeltrioxid ($\\text{SO}_3$) mit flüssigem Wasser ($\\text{H}_2\\text{O}$), und welche Oxidationszahl weist das Schwefelatom in diesem Reaktionsprodukt auf?",
    options: {
      A: "Schweflige Säure ($\\text{H}_2\\text{SO}_3$) mit der Oxidationszahl $+4$.",
      B: "Schwefelwasserstoffsäure ($\\text{H}_2\\text{S}$) mit der Oxidationszahl $-2$.",
      C: "Thioschwefelsäure ($\\text{H}_2\\text{S}_2\\text{O}_3$) mit der mittleren Oxidationszahl $+2$.",
      D: "Schwefelsäure ($\\text{H}_2\\text{SO}_4$) mit der Oxidationszahl $+6$.",
      E: "Dithionige Säure ($\\text{H}_2\\text{S}_2\\text{O}_4$) mit der Oxidationszahl $+3$."
    },
    correct_answer: "D",
    explanation_correct: "Schwefeltrioxid ($\\\\text{SO}_3$) ist das Säureanhydrid der Schwefelsäure. Beim Einleiten in Wasser reagiert es in einer stark exothermen Additionsreaktion: $\\\\text{SO}_3 + \\\\text{H}_2\\\\text{O} \\\\to \\\\text{H}_2\\\\text{SO}_4$. Da es sich nicht um eine Redoxreaktion, sondern um eine Säure-Base-Hydratisierung handelt, ändert sich die Oxidationszahl des Schwefels nicht:\\nIm $\\\\text{SO}_3$: $3 \\\\cdot (-2) = -6 \\\\implies \\\\text{S} = +6$.\\nIn $\\\\text{H}_2\\\\text{SO}_4$: $2 \\\\cdot (+1) + \\\\text{S} + 4 \\\\cdot (-2) = 0 \\\\implies +2 + \\\\text{S} - 8 = 0 \\\\implies \\\\text{S} = +6$.",
    explanations_incorrect: {
      A: "Schweflige Säure ($\text{H}_2\text{SO}_3$, S hat OZ +4) entsteht aus Schwefeldioxid ($\text{SO}_2$), nicht aus $\text{SO}_3$.",
      B: "Schwefelwasserstoff ($\text{H}_2\text{S}$, S hat OZ -2) ist die voll reduzierte Form des Schwefels.",
      C: "Thioschwefelsäure enthält zwei Schwefelatome in unterschiedlichen Oxidationsstufen (-1 und +5 bzw. formal im Mittel +2).",
      E: "Dithionige Säure entsteht nicht durch einfache Hydratisierung von $\text{SO}_3$."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 8: Säuren, Basen, Salze & Puffer (chem-08-saeuren-basen) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-016",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Säuren, Basen und Salze",
    subtopic: "pH-Wert starker Säuren: Salpetersäure",
    difficulty: "foundational",
    stem: "Eine wässrige Lösung von Salpetersäure ($\\text{HNO}_3$, vollständig protolysiert) weist eine Konzentration von $c = 0{,}0010\\text{ mol/L}$ auf. Welche Hydroniumionen-Konzentration $[\\text{H}_3\\text{O}^+]$ und welcher pH-Wert liegen bei $25\\text{ }^\\circ\\text{C}$ vor?",
    options: {
      A: "$[\\text{H}_3\\text{O}^+] = 1{,}0 \\times 10^{-1}\\text{ mol/L}$ und $\\text{pH} = 1{,}0$",
      B: "$[\\text{H}_3\\text{O}^+] = 1{,}0 \\times 10^{-3}\\text{ mol/L}$ und $\\text{pH} = 3{,}0$",
      C: "$[\\text{H}_3\\text{O}^+] = 1{,}0 \\times 10^{-7}\\text{ mol/L}$ und $\\text{pH} = 7{,}0$",
      D: "$[\\text{H}_3\\text{O}^+] = 1{,}0 \\times 10^{-11}\\text{ mol/L}$ und $\\text{pH} = 11{,}0$",
      E: "$[\\text{H}_3\\text{O}^+] = 3{,}0 \\times 10^{-3}\\text{ mol/L}$ und $\\text{pH} = 0{,}001$"
    },
    correct_answer: "B",
    explanation_correct: "Salpetersäure ($\\\\text{HNO}_3$) ist eine sehr starke, einprotonige Mineralsäure ($pK_S = -1{,}32$), die in verdünnter wässriger Lösung praktisch vollständig dissoziiert: $\\\\text{HNO}_3 + \\\\text{H}_2\\\\text{O} \\\\to \\\\text{H}_3\\\\text{O}^+ + \\\\text{NO}_3^-$. Daher entspricht die Gleichgewichtskonzentration an Hydroniumionen exakt der Ausgangskonzentration der Säure: $[\\\\text{H}_3\\\\text{O}^+] = c_0 = 0{,}0010\\\\text{ mol/L} = 1{,}0 \\\\times 10^{-3}\\\\text{ mol/L}$. Der pH-Wert ist als negativer dekadischer Logarithmus definiert: $\\\\text{pH} = -\\\\log_{10}([\\\\text{H}_3\\\\text{O}^+]) = -\\\\log_{10}(10^{-3}) = -(-3) = 3{,}0$.",
    explanations_incorrect: {
      A: "$\\text{pH} = 1{,}0$ entspricht einer Konzentration von $0{,}10\\text{ mol/L}$, also einer 100-fach höheren Säurekonzentration.",
      C: "$\\text{pH} = 7{,}0$ ist der Neutralpunkt von reinem Wasser ohne Säurezusatz.",
      D: "$\\text{pH} = 11{,}0$ liegt im basischen Bereich ($[\\text{OH}^-] = 10^{-3}\\text{ mol/L}$).",
      E: "Verwechselt den pH-Wert mit dem Zahlenwert der Molarität."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-017",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Säuren, Basen und Salze",
    subtopic: "pH-Wert schwacher Säuren: Blausäure",
    difficulty: "intermediate",
    stem: "Eine wässrige Lösung von Blausäure (Cyanwasserstoff, $\\text{HCN}$, $\\text{pK}_s = 9{,}20$) hat eine Einwaagekonzentration von $c_0 = 0{,}010\\text{ mol/L}$ ($1{,}0 \\times 10^{-2}\\text{ mol/L}$). Welcher pH-Wert resultiert bei Anwendung der Standard-Näherungsformel für schwache Säuren?",
    options: {
      A: "$\\text{pH} = 2{,}00$",
      B: "$\\text{pH} = 9{,}20$",
      C: "$\\text{pH} = 5{,}60$",
      D: "$\\text{pH} = 7{,}20$",
      E: "$\\text{pH} = 3{,}60$"
    },
    correct_answer: "C",
    explanation_correct: "Blausäure ist eine sehr schwache Säure ($\\\\text{pK}_s = 9{,}20$). Für schwache Säuren (bei denen nur ein verschwindend geringer Bruchteil dissoziiert) gilt das Ostwaldsche Näherungsgesetz: $[\\\\text{H}_3\\\\text{O}^+] = \\\\sqrt{K_S \\\\cdot c_0}$. In logarithmischer Form lautet die Formel:\\n$\\\\text{pH} = \\\\frac{1}{2}(\\\\text{pK}_s - \\\\log_{10}(c_0))$.\\nEinsetzen der gegebenen Zahlenwerte:\\n1. $-\\\\log_{10}(c_0) = -\\\\log_{10}(10^{-2}) = 2{,}00$.\\n2. $\\\\text{pK}_s - \\\\log_{10}(c_0) = 9{,}20 + 2{,}00 = 11{,}20$.\\n3. $\\\\text{pH} = \\\\frac{1}{2} \\\\cdot 11{,}20 = 5{,}60$.",
    explanations_incorrect: {
      A: "$\\text{pH} = 2{,}00$ ergäbe sich bei vollständiger Dissoziation einer starken Säure mit $c_0 = 0{,}01\\text{ mol/L}$.",
      B: "$\\text{pH} = 9{,}20$ entspricht dem $\\text{pK}_s$-Wert; dieser läge nur bei einem 1:1-Puffergemisch aus HCN und Cyanid vor.",
      D: "$\\text{pH} = 7{,}20$ entsteht bei falscher Vorzeichenanwendung ($9{,}20 - 2{,}00 = 7{,}20$) ohne anschließende Halbierung.",
      E: "$\\text{pH} = 3{,}60$ entsteht bei Subtraktion von 2 und anschließender Halbierung: $(9{,}20 - 2)/2 = 3{,}60$."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-018",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Säuren, Basen und Salze",
    subtopic: "Bikarbonat-Blutpuffer & Henderson-Hasselbalch",
    difficulty: "advanced",
    stem: "Das physiologische Bikarbonat-Puffersystem des menschlichen Blutes gehorcht dem Gleichgewicht: $\\text{CO}_2\\text{ (gelöst)} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$ mit einem scheinbaren $\\text{pK}_s$-Wert von $6{,}10$. Welches molare Konzentrationsverhältnis von Bikarbonat zu gelöstem $\\text{CO}_2$ ($[\\text{HCO}_3^-] : [\\text{CO}_2]$) liegt bei einem normalen physiologischen Blut-pH-Wert von $7{,}40$ vor?",
    options: {
      A: "Ungefähr $20 : 1$",
      B: "Exakt $1 : 1$",
      C: "Ungefähr $1 : 20$",
      D: "Exakt $10 : 1$",
      E: "Ungefähr $4 : 1$"
    },
    correct_answer: "A",
    explanation_correct: "Gemäß der Henderson-Hasselbalch-Gleichung gilt für das Bikarbonat-Puffersystem: $\\\\text{pH} = \\\\text{pK}_s + \\\\log_{10}\\\\left(\\\\frac{[\\\\text{HCO}_3^-]}{[\\\\text{CO}_2]}\\\\right)$.\\nEinsetzen der gegebenen physiologischen Werte:\\n$7{,}40 = 6{,}10 + \\\\log_{10}\\\\left(\\\\frac{[\\\\text{HCO}_3^-]}{[\\\\text{CO}_2]}\\\\right) \\\\implies \\\\log_{10}\\\\left(\\\\frac{[\\\\text{HCO}_3^-]}{[\\\\text{CO}_2]}\\\\right) = 7{,}40 - 6{,}10 = 1{,}30$.\\nDurch Entlogarithmieren erhält man das molare Konzentrationsverhältnis:\\n$\\\\frac{[\\\\text{HCO}_3^-]}{[\\\\text{CO}_2]} = 10^{1{,}30} = 10^{1{,}0} \\\\cdot 10^{0{,}30} \\\\approx 10 \\\\cdot 1{,}995 \\\\approx 20$.\\nDas Verhältnis von Bikarbonat zu gelöstem $\\\\text{CO}_2$ beträgt somit ungefähr $20 : 1$ (physiologisch ca. $24\\\\text{ mmol/L}$ zu $1{,}2\\\\text{ mmol/L}$). Dieses 20:1-Verhältnis verleiht dem menschlichen Blut eine enorme Pufferkapazität gegenüber anfallenden sauren Stoffwechselprodukten.",
    explanations_incorrect: {
      B: "$1 : 1$ läge nur vor, wenn der Blut-pH dem $\\text{pK}_s$-Wert von $6{,}10$ entspräche (schwere, nicht mit dem Leben vereinbare Azidose).",
      C: "$1 : 20$ kehrt Zähler und Nenner um; dies entspräche einem pH von $6{,}10 - 1{,}30 = 4{,}80$.",
      D: "$10 : 1$ ergäbe sich bei einem pH von $7{,}10$ ($6{,}10 + 1{,}00$).",
      E: "Ein Verhältnis von ca. $4 : 1$ ($10^{0{,}60}$) ergäbe sich erst bei einem pH-Wert von ca. $6{,}70$."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 9: Redox-Reaktionen & Elektrochemie (chem-09-redox) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-019",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Redox-Reaktionen und Elektrochemie",
    subtopic: "Oxidationszahlen in Mangan- und Peroxidverbindungen",
    difficulty: "intermediate",
    stem: "Welche formalen Oxidationszahlen weisen das Manganatom im Permanganat-Anion ($\\text{MnO}_4^-$) und das Sauerstoffatom im Wasserstoffperoxid ($\\text{H}_2\\text{O}_2$) jeweils auf?",
    options: {
      A: "$\\text{Mn} = +4$ und $\\text{O} = -2$",
      B: "$\\text{Mn} = +6$ und $\\text{O} = -1$",
      C: "$\\text{Mn} = +7$ und $\\text{O} = -2$",
      D: "$\\text{Mn} = +7$ und $\\text{O} = -1$",
      E: "$\\text{Mn} = +5$ und $\\text{O} = 0$"
    },
    correct_answer: "D",
    explanation_correct: "1. Im Permanganat-Ion ($\\\\text{MnO}_4^-$) hat Sauerstoff die typische Oxidationszahl $-2$. Die Summe der Oxidationszahlen muss der Ionenladung ($-1$) entsprechen: $\\\\text{OZ}(\\\\text{Mn}) + 4 \\\\cdot (-2) = -1 \\\\implies \\\\text{OZ}(\\\\text{Mn}) - 8 = -1 \\\\implies \\\\text{OZ}(\\\\text{Mn}) = +7$.\\n2. Im Wasserstoffperoxid ($\\\\text{H--O--O--H}$) sind zwei Sauerstoffatome kovalent miteinander verknüpft (Peroxid-Brücke). Da die Bindung zwischen gleichartigen Atomen keinen polarisationsbedingten Beitrag liefert, teilt sich die Oxidationsstufe wie folgt auf: Wasserstoff hat $+1$ (elektronegativerer Partner ist Sauerstoff). Aus $2 \\\\cdot (+1) + 2 \\\\cdot \\\\text{OZ}(\\\\text{O}) = 0$ folgt zwingend: $2 \\\\cdot \\\\text{OZ}(\\\\text{O}) = -2 \\\\implies \\\\text{OZ}(\\\\text{O}) = -1$.",
    explanations_incorrect: {
      A: "$\\text{Mn} = +4$ liegt in Braunstein ($\text{MnO}_2$) vor; in Peroxiden hat Sauerstoff nicht $-2$.",
      B: "$\\text{Mn} = +6$ liegt im Manganat-Ion ($\text{MnO}_4^{2-}$) vor, nicht in Permanganat ($\text{MnO}_4^-$).",
      C: "Ordnet dem Peroxidsauerstoff fälschlicherweise die Standard-Oxidationszahl $-2$ von Wasser zu.",
      E: "Sauerstoff hat die Oxidationszahl $0$ nur im elementaren Zustand ($\text{O}_2$)."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-020",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Redox-Reaktionen und Elektrochemie",
    subtopic: "Daniell-Element & Zellspannung",
    difficulty: "advanced",
    stem: "Ein galvanisches Daniell-Element besteht aus einer Zink-Halbzelle ($\text{Zn}^{2+}/\\text{Zn}$, $E^\\circ = -0{,}76\\text{ V}$) und einer Kupfer-Halbzelle ($\text{Cu}^{2+}/\\text{Cu}$, $E^\\circ = +0{,}34\\text{ V}$), die über einen externen Leiter und eine poröse Salzbrücke verbunden sind. Welche Aussage beschreibt die elektrochemischen Vorgänge während der spontanen Stromentnahme korrekt?",
    options: {
      A: "Kupfer wird an der Anode oxidiert, und die Standardzellspannung beträgt $\\Delta E^\\circ = 0{,}42\\text{ V}$.",
      B: "An beiden Elektroden findet gleichzeitig eine Reduktion statt; Elektronen wandern durch die Salzbrücke.",
      C: "Zink scheidet sich metallisch an der Kathode ab, während Kupferionen in Lösung gehen.",
      D: "Die Zelle arbeitet nur unter Zufuhr externer elektrischer Gleichspannung (Elektrolysebetrieb).",
      E: "Die Zinkelektrode fungiert als Anode (Oxidation von $\\text{Zn}$ zu $\\text{Zn}^{2+}$), die Kupferelektrode als Kathode (Reduktion von $\\text{Cu}^{2+}$ zu $\\text{Cu}$), und die Leerlauf-Zellspannung beträgt $\\Delta E^\\circ = 1{,}10\\text{ V}$."
    },
    correct_answer: "E",
    explanation_correct: "Im galvanischen Element oxidiert der Stoff mit dem negativeren Standardreduktionspotenzial spontan: Zink ($E^\\circ = -0{,}76\\\\text{ V}$) ist unedler als Kupfer ($E^\\circ = +0{,}34\\\\text{ V}$).\\n- Anode (Ort der Oxidation): $\\\\text{Zn (s)} \\\\to \\\\text{Zn}^{2+}\\\\text{ (aq)} + 2e^-$ (Minuspol).\\n- Kathode (Ort der Reduktion): $\\\\text{Cu}^{2+}\\\\text{ (aq)} + 2e^- \\\\to \\\\text{Cu (s)}$ (Pluspol).\\nElektronen fließen im äußeren Stromkreis von der Zink-Anode zur Kupfer-Kathode. Die theoretische Leerlaufspannung (elektromotorische Kraft, EMK) berechnet sich nach: $\\\\Delta E^\\circ = E^\\circ(\\\\text{Kathode}) - E^\\circ(\\\\text{Anode}) = +0{,}34\\\\text{ V} - (-0{,}76\\\\text{ V}) = +1{,}10\\\\text{ V}$.",
    explanations_incorrect: {
      A: "Zink wird oxidiert, nicht Kupfer; Kupfer ist edler. $0{,}42\\text{ V}$ ist falsch berechnet ($0{,}76 - 0{,}34$).",
      B: "Oxidation und Reduktion finden stets gekoppelt statt; Elektronen fließen durch das Kabel, durch die Salzbrücke wandern Ionen.",
      C: "Zink löst sich oxidativ auf ($\text{Zn} \to \text{Zn}^{2+}$), Kupfer scheidet sich ab.",
      D: "Ein Daniell-Element ist eine galvanische Zelle, die spontan Strom liefert, keine Elektrolyse."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 10: Organische Chemie (chem-10-organik) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-021",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Organische Chemie",
    subtopic: "Reaktionsmechanismen: Nucleophile Substitution (SN2)",
    difficulty: "intermediate",
    stem: "Über welchen Reaktionsmechanismus reagiert ein chirales sekundäres Halogenalkan wie enantiomerenreines *(R)*-2-Brombutan mit einem starken Nucleophil (z. B. Hydroxid-Ionen, $\\text{OH}^-$) bevorzugt im Rahmen einer nucleophilen aliphatischen Substitution, und welche stereochemische Konsequenz resultiert daraus am asymmetrischen Kohlenstoffzentrum?",
    options: {
      A: "Über einen monomolekularen $S_N1$-Mechanismus mit Bildung eines planaren Carbeniumions und vollständiger Racemisierung.",
      B: "Über einen bimolekularen $S_N2$-Mechanismus in einem einzigen konzertierten Schritt mit Rückseitenangriff des Nucleophils und Inversion der Konfiguration (Walden-Umkehr zum *(S)*-2-Butanol).",
      C: "Über eine elektrophile aromatische Substitution mit intermediärem $\\sigma$-Komplex.",
      D: "Über eine radikalische Kettenreaktion mit homolytischer Bindungsspaltung durch UV-Licht.",
      E: "Über eine intramolekulare Diels-Alder-Cycloaddition ohne Beteiligung von Lösungsmittelmolekülen."
    },
    correct_answer: "B",
    explanation_correct: "Bei der nucleophilen Substitution an einem sekundären Halogenalkan wie *(R)*-2-Brombutan begünstigt ein starkes Nucleophil (wie $\\\\text{OH}^-$) den bimolekularen $S_N2$-Mechanismus. Die Reaktion verläuft konzertiert in einem einzigen Übergangszustand ohne intermediäres Carbokation: Das Nucleophil greift das elektrophile, asymmetrische Kohlenstoffatom exakt von der Rückseite der $\\\\text{C--Br}$-Bindung an ($180^\\\\circ$-Winkel), während die Bromid-Abgangsgruppe synchron austritt. Dieser stereospezifische Rückseitenangriff erzwingt das Umklappen der drei verbleibenden Liganden ('Regenschirm-Effekt') und führt zur vollständigen Inversion der stereochemischen Konfiguration am Chiralitätszentrum (Walden-Umkehr von *(R)*-2-Brombutan zu *(S)*-2-Butanol). Ein $S_N1$-Mechanismus hingegen verliefe über ein planares Carbeniumion und würde zu weitgehender Racemisierung führen.",
    explanations_incorrect: {
      A: "Der $S_N1$-Weg verläuft zweistufig über ein planares Carbokation und führt durch beidseitigen Angriff zu Racemisierung; er wird typischerweise bei tertiären Halogenalkanen oder schwachen Nucleophilen beobachtet.",
      C: "Elektrophile aromatische Substitution betrifft aromatische Ringsysteme (wie Benzol), keine aliphatischen Halogenalkane.",
      D: "Radikalische Substitution erfordert Radikalstarter (Peroxide/Licht) und betrifft unpolare C-H-Bindungen bei Alkanen.",
      E: "Die Diels-Alder-Reaktion ist eine pericyclische [4+2]-Cycloaddition zwischen einem Dien und einem Dienophil."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-022",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Organische Chemie",
    subtopic: "Carbonsäurederivate: Veresterung & Esterbindung",
    difficulty: "intermediate",
    stem: "Welche Edukte und Reaktionsbedingungen werden für die klassische säurekatalysierte Fischer-Veresterung benötigt, und um welchen chemischen Reaktionstyp handelt es sich bei der Bildung von Ethylacetat (Essigsäureethylester) formal?",
    options: {
      A: "Ein Keton und ein Alkan unter Basenkatalyse; radikalische Addition.",
      B: "Zwei Carbonsäuren unter starkem Erhitzen; thermische Decarboxylierung.",
      C: "Ein primärer Alkohol und ein Halogenid; elektrophile Eliminierung.",
      D: "Ein Aldehyd und ein Ether unter Zinkkatalyse; Aldolkondensation.",
      E: "Eine Carbonsäure (Essigsäure) und ein Alkohol (Ethanol) in Gegenwart einer starken Mineralsäure (wie konzentrierte $\\text{H}_2\\text{SO}_4$) als Katalysator; Kondensationsreaktion unter Abspaltung von Wasser."
    },
    correct_answer: "E",
    explanation_correct: "Die Fischer-Veresterung ist die klassische Synthese von Carbonsäureestern: Eine Carbonsäure ($\\\\text{R--COOH}$) reagiert mit einem Alkohol ($\\\\text{R'--OH}$) im chemischen Gleichgewicht zu einem Carbonsäureester ($\\\\text{R--COO--R'}$) und Wasser ($\\\\text{H}_2\\\\text{O}$). Da zwei Moleküle unter Austritt eines kleinen stabilen Moleküls (Wasser) miteinander verknüpft werden, handelt es sich um eine Kondensationsreaktion. Als Katalysator dient eine starke Mineralsäure (z. B. Schwefelsäure), welche die Carbonylgruppe protoniert und somit elektrophiler für den nucleophilen Angriff der alkoholischen Hydroxylgruppe macht. Durch Wasserentzug oder Alkoholüberschuss kann das Gleichgewicht nach Le Chatelier zur Produktseite verschoben werden.",
    explanations_incorrect: {
      A: "Ketone und Alkane bilden keine Ester.",
      B: "Zwei Carbonsäuren bilden unter Wasserabspaltung Carbonsäureanhydride, keine Ester.",
      C: "Alkohol und Halogenid bilden Alkylhalogenide oder Ether, keine Ester.",
      D: "Aldehyde und Ether führen nicht zu Carbonsäureestern."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 11: Biochemie & Naturstoffe (chem-11-naturstoffe) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "CHEM-BMS-GP2-023",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Biochemie und Naturstoffe",
    subtopic: "Aminosäuren: Zwitterion & Isoelektrischer Punkt",
    difficulty: "intermediate",
    stem: "Eine proteinogene Aminosäure ohne ionisierbare Seitenkette (z. B. Alanin mit $\\text{pK}_{S1}(\\alpha\\text{-COOH}) = 2{,}34$ und $\\text{pK}_{S2}(\\alpha\\text{-NH}_3^+) = 9{,}69$) liegt bei physiologischem Blut-pH ($7{,}4$) in welcher ionischen Hauptform vor, und wie berechnet sich ihr isoelektrischer Punkt (pI)?",
    options: {
      A: "Als Kation mit Nettoladung $+1$; $\\text{pI} = \\text{pK}_{S1} + \\text{pK}_{S2} = 12{,}03$.",
      B: "Als Anion mit Nettoladung $-1$; $\\text{pI} = \\text{pK}_{S2} - \\text{pK}_{S1} = 7{,}35$.",
      C: "Als Zwitterion (Dipol-Ion: $\\text{H}_3\\text{N}^+\\text{--CH(CH}_3\\text{)--COO}^-$) mit Nettoladung $0$; $\\text{pI} = \\frac{\\text{pK}_{S1} + \\text{pK}_{S2}}{2} \\approx 6{,}02$.",
      D: "Als ungeladenes Molekül ohne Protonierungen; $\\text{pI} = 7{,}00$.",
      E: "Als Dianion mit Nettoladung $-2$; $\\text{pI} = \\sqrt{\\text{pK}_{S1} \\cdot \\text{pK}_{S2}} = 4{,}76$."
    },
    correct_answer: "C",
    explanation_correct: "Bei einem physiologischen pH-Wert von $7{,}4$ gilt:\\n1. $\\\\text{pH} = 7{,}4 > \\\\text{pK}_{S1}(2{,}34)$: Die $\\\\alpha$-Carboxylgruppe liegt überwiegend in deprotonierter Form als Carboxylat-Anion vor ($-1$, $\\\\text{--COO}^-$).\\n2. $\\\\text{pH} = 7{,}4 < \\\\text{pK}_{S2}(9{,}69)$: Die $\\\\alpha$-Aminogruppe liegt überwiegend in protonierter Form als Ammonium-Kation vor ($+1$, $\\\\text{--NH}_3^+$).\\nAlanin liegt folglich als intramolekulares Zwitterion (Betain-Form) vor; die positive und negative Ladung neutralisieren sich gegenseitig zu einer Nettoladung von 0. Der isoelektrische Punkt (pI) einer einfachen Aminosäure ist das arithmetische Mittel der beiden pK-Werte: $\\\\text{pI} = \\\\frac{\\\\text{pK}_{S1} + \\\\text{pK}_{S2}}{2} = \\\\frac{2{,}34 + 9{,}69}{2} = \\\\frac{12{,}03}{2} = 6{,}015 \\\\approx 6{,}02$.",
    explanations_incorrect: {
      A: "Als Kation ($+1$) liegt Alanin nur im stark sauren Milieu ($\text{pH} < 2$) vor.",
      B: "Als Anion ($-1$) liegt Alanin erst im stark alkalischen Milieu ($\text{pH} > 10$) vor.",
      D: "Eine ungeladene Form ($\text{H}_2\text{N--CHR--COOH}$) existiert in wässriger Lösung praktisch nicht.",
      E: "Dianionen treten bei einfachen Aminosäuren ohne saure Seitenketten nicht auf."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
    }
  },
  {
    id: "CHEM-BMS-GP2-024",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Biochemie und Naturstoffe",
    subtopic: "Lipide: Verseifung & Fettsäure-Stereochemie",
    difficulty: "intermediate",
    stem: "Welche chemischen Spaltprodukte entstehen bei der basischen Hydrolyse (Verseifung) eines Triglycerids mit Natronlauge ($\\text{NaOH}$), und welchen physikalischen Einfluss hat das Vorkommen von *cis*-Doppelbindungen in den Fettsäureresten auf den Schmelzpunkt des Fettes?",
    options: {
      A: "Es entstehen 1 Molekül Glycerin (Propan-1,2,3-triol) und 3 Moleküle Fettsäure-Natriumsalze (Seifen); *cis*-Doppelbindungen erzeugen Knicke in der Kohlenwasserstoffkette, stören die dichte Kristallpackung und senken den Schmelzpunkt drastisch.",
      B: "Es entstehen freie Fettsäuren und Methanol; *cis*-Doppelbindungen erhöhen den Schmelzpunkt durch stärkere Kristallisation.",
      C: "Es entstehen Glukose und Natriumchlorid; Doppelbindungen haben keinerlei Einfluss auf Schmelz- und Siedepunkte.",
      D: "Es entstehen Cholesterinester und Kohlendioxid; *cis*-Fettsäuren sind bei Raumtemperatur stets wachsartig fest.",
      E: "Es entstehen drei Moleküle Glycerin und eine freie Fettsäure; ungesättigte Fette haben stets einen höheren Schmelzpunkt als gesättigte Fette."
    },
    correct_answer: "A",
    explanation_correct: "Triglyceride (Triacylglycerine) sind dreifache Carbonsäureester des dreiwertigen Alkohols Glycerin mit Fettsäuren. Die alkalische Hydrolyse (Verseifung) mit wässriger Natronlauge spaltet die drei Esterbindungen irreversibel: Es entstehen $1\\\\text{ Molekül Glycerin}$ (Propan-1,2,3-triol) und $3\\\\text{ Natriumsalze der Fettsäuren}$ (klassische Kernseifen). Natürlich vorkommende ungesättigte Fettsäuren (wie Öl-, Linol- und Linolensäure) besitzen isolierte Doppelbindungen in der *cis*-Konfiguration. Ein *cis*-Knick (Knickwinkel ca. $30^\\\\circ$) verhindert, dass sich die Kohlenwasserstoffketten eng und parallel aneinanderlagern. Die intermolekularen Van-der-Waals-Kräfte zwischen den Ketten sind dadurch deutlich schwächer, was den Schmelzpunkt stark herabsetzt (pflanzliche Öle sind bei Raumtemperatur flüssig, gesättigte tierische Fette fest).",
    explanations_incorrect: {
      B: "Verseifung liefert Glycerin, nicht Methanol; *cis*-Doppelbindungen senken den Schmelzpunkt (sie erhöhen ihn nicht).",
      C: "Triglyceride enthalten keinen Zucker (Glukose) und keine Chloridionen.",
      D: "Cholesterinester sind Lipide aus Cholesterin und einer Fettsäure, keine Verseifungsprodukte von Triglyceriden.",
      E: "Ein Triglycerid besteht aus 1 Glycerin und 3 Fettsäuren (nicht umgekehrt); ungesättigte Fette haben niedrigere Schmelzpunkte."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "2.0_gp2"
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
      return "chem-11-naturstoffe";
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
 * Normalisierte 24 StoredQuestion-Objekte für die MedAT-H Generalprobe #2 Runtime-Engine
 */
export const GENERALPROBE_2_CHEM_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_CHEM_QUESTIONS.map(
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
      tags: ["BMS", "Chemie", "Generalprobe #2", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_gp2",
      setOrder: idx + 1,
    };
  }
);
