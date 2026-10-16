/**
 * MedAT Chemie BMS — 24-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #3 (BMS Chemie-Testteil, exakt 24 Original-Aufgaben).
 * 
 * Fachlich und terminologisch präzise angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung:
 * - 6 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 12 Mittel (Intermediate) (50,0 %)
 * - 6 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel (ausgewogen und zyklusfrei):
 * - A: 5, B: 5, C: 5, D: 5, E: 4 (Gesamt: 24)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcChemGp3QuestionRaw {
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

export const RAW_GENERALPROBE_3_CHEM_QUESTIONS: QcChemGp3QuestionRaw[] = [
  {
    "id": "CHEM-BMS-GP3-001",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Atombau und Mikrokosmos",
    "subtopic": "Bohrsches Atommodell & Linienspektren",
    "difficulty": "foundational",
    "stem": "Welche Aussage beschreibt das Zustandekommen von Linienspektren beim Wasserstoffatom auf Basis diskreter Energieniveaus korrekt?",
    "options": {
      "A": "Photonen entstehen ausschließlich durch die Kollision zweier Kerne, wobei die Elektronenbahn vollkommen kontinuierlich schrumpft.",
      "B": "Elektromagnetische Strahlung einer diskreten Wellenlänge wird emittiert, wenn ein Elektron von einem diskreten höheren Energieniveau $n_2$ auf ein diskretes tieferes Niveau $n_1$ übergeht, wobei die Energie des emittierten Photons $\\Delta E = h \\cdot \\nu$ entspricht.",
      "C": "Die Balmer-Serie im sichtbaren Licht entsteht durch Elektronenübergänge auf das Grundzustandsniveau $n = 1$.",
      "D": "Wasserstoffatome emittieren ein kontinuierliches Farbspektrum über alle Frequenzen, da Elektronen jeden beliebigen Bahnradius einnehmen können.",
      "E": "Bei der Absorption eines Photons fällt das Elektron auf ein kernnäheres Orbital mit niedrigerer Energie herab."
    },
    "correct_answer": "B",
    "explanation_correct": "Bohr führte in seinem Atommodell diskrete, quantisierte Kreisbahnen und stationäre Energieniveaus mit den Hauptquantenzahlen $n = 1, 2, 3, \\dots$ ein, während die moderne Quantenmechanik Elektronen durch dreidimensionale Aufenthaltswahrscheinlichkeiten (Orbitale bzw. Wellenfunktionen $\\psi$) beschreibt. In beiden Modellen gilt jedoch übereinstimmend: Elektronen können nur bestimmte, diskrete Energieniveaus besetzen. Geht ein Elektron von einem angeregten Niveau ($n_2$) auf ein energetisch tieferes Niveau ($n_1$) über, wird die Energiedifferenz $\\Delta E = E(n_2) - E(n_1)$ als einzelnes Photon mit der diskreten Frequenz $\\nu$ emittiert ($E_{\\\\text{Photon}} = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}$). Dies erzeugt scharfe, diskrete Emissionslinien (Linienspektrum) anstelle eines kontinuierlichen Spektrums.",
    "explanations_incorrect": {
      "C": "Die Balmer-Serie (sichtbares Licht) entspricht Übergängen auf das Niveau $n = 2$. Übergänge auf den Grundzustand $n = 1$ bilden die hochenergetische Lyman-Serie im ultravioletten Bereich (UV).",
      "D": "Ein kontinuierliches Spektrum entsteht bei Festkörperstrahlung (Schwarzkörperstrahlung), freie Gasatome wie Wasserstoff zeigen diskrete Linienspektren.",
      "E": "Bei der Absorption nimmt das Elektron Photonenenergie auf und wird auf ein kernferneres, energiereicheres Niveau gehoben ($n_1 \\to n_2$).",
      "A": "Linienspektren entstehen durch Übergänge in der Elektronenhülle, nicht durch Kernkollisionen."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-01-atombau"
  },
  {
    "id": "CHEM-BMS-GP3-002",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Atombau und Mikrokosmos",
    "subtopic": "Elektronenaffinität & Periodizität",
    "difficulty": "intermediate",
    "stem": "Warum weist Chlor ($\\\\text{Cl}$, 3. Periode) eine betragsmäßig HÖHERE Elektronenaffinität (stärker exotherm, $-349\\,\\\\text{kJ/mol}$) auf als Fluor ($\\\\text{F}$, 2. Periode, $-328\\,\\\\text{kJ/mol}$), obwohl Fluor die höchste Elektronegativität im Periodensystem besitzt?",
    "options": {
      "A": "Weil Chlor im Gegensatz zu Fluor eine vollbesetzte Valenzschale mit 8 Elektronen im Grundzustand besitzt.",
      "B": "Weil die Kernladung von Fluor kleiner ist als die von Wasserstoff und daher keine Elektronen anziehen kann.",
      "C": "Weil Fluor ein zusätzliches d-Orbital in der Valenzschale besitzt, das Elektronen abstößt.",
      "D": "Weil Chlor ein Metall ist und Fluor ein Edelgas.",
      "E": "Weil das Fluoratom so klein ist, dass in den kompakten $2p$-Orbitalen eine erhebliche elektrostatische Abstoßung zwischen den bereits vorhandenen Elektronen herrscht, was den Energiegewinn beim Hinzufügen eines weiteren Elektrons schmälert."
    },
    "correct_answer": "E",
    "explanation_correct": "Die Elektronenaffinität ist die Energie, die freigesetzt (oder benötigt) wird, wenn ein gasförmiges Atom ein Elektron unter Bildung eines Anions aufnimmt. Obwohl Fluor ($2s^2 2p^5$) die höchste Elektronegativität besitzt, ist sein kovalenter Radius extrem klein. Die 7 Valenzelektronen sind auf engstem Raum in der $n=2$-Schale konzentriert. Bei der Aufnahme eines achten Elektrons entsteht eine beträchtliche interelektronische Abstoßung, die den Energiegewinn schwächt. Beim größeren Chloratom ($3s^2 3p^5$) verteilt sich die Elektronenwolke auf das voluminösere $3p$-Niveau; die Abstoßung ist deutlich geringer, sodass bei Chlor die höchste Elektronenaffinität aller Elemente gemessen wird.",
    "explanations_incorrect": {
      "A": "Weder Chlor noch Fluor besitzen als Halogene im neutralen Grundzustand ein Oktett; beide haben 7 Valenzelektronen ($s^2 p^5$).",
      "B": "Fluor hat die Ordnungszahl 9 (9 Protonen); Wasserstoff hat nur 1 Proton.",
      "D": "Sowohl Fluor als auch Chlor sind Nichtmetalle der 7. Hauptgruppe (Halogene).",
      "C": "Elemente der 2. Periode (wie Fluor) besitzen prinzipiell keine $d$-Orbitale (erst ab $n=3$ möglich)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-01-atombau"
  },
  {
    "id": "CHEM-BMS-GP3-003",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Atombau und Mikrokosmos",
    "subtopic": "Radioaktivität: Beta-Plus-Zerfall & Positronenemission",
    "difficulty": "intermediate",
    "stem": "In der nuklearmedizinischen Positronen-Emissions-Tomographie (PET) zerfällt das Radionuklid Fluor-18 ($^{18}_{9}\\\\text{F}$) unter $\\beta^+$-Strahlung. Welches Tochternuklid entsteht bei diesem Positronenzerfall, und wie lautet die fundamentale Kernreaktion?",
    "options": {
      "A": "Neon-18 ($^{18}_{10}\\\\text{Ne}$), weil sich ein Neutron unter Elektronenemission in ein Proton umwandelt.",
      "B": "Stickstoff-14 ($^{14}_{7}\\\\text{N}$), weil ein Alphateilchen ($^{4}_{2}\\\\text{He}$) abgespalten wird.",
      "C": "Sauerstoff-18 ($^{18}_{8}\\\\text{O}$), weil sich im Atomkern ein Proton unter Emission eines Positrons ($e^+$) und eines Elektronneutrinos ($\\nu_e$) in ein Neutron umwandelt.",
      "D": "Fluor-19 ($^{19}_{9}\\\\text{F}$), weil der Kern ein freies Neutron aus der Umgebung einfängt.",
      "E": "Sauerstoff-16 ($^{16}_{8}\\\\text{O}$), weil zwei Protonen und zwei Neutronen gleichzeitig zerfallen."
    },
    "correct_answer": "C",
    "explanation_correct": "Beim $\\beta^+$-Zerfall (Positronenzerfall) wandelt sich im protonenreichen Kern ein Proton durch die schwache Wechselwirkung in ein Neutron um: $p \\to n + e^+ + \\nu_e$. Die Massenzahl $A$ bleibt mit 18 konstant ($18 \\to 18$). Die Kernladungszahl $Z$ sinkt um 1 von 9 (Fluor) auf 8 (Sauerstoff): $^{18}_{9}\\\\text{F} \\to {}^{18}_{8}\\\\text{O} + e^+ + \\nu_e$. Das Tochternuklid ist stabiles Sauerstoff-18 ($^{18}_{8}\\\\text{O}$). Das emittierte Positron ($e^+$) annihiliert mit einem Elektron der Umgebung zu zwei gegenläufigen 511-keV-Gammastrahlen (Grundlage der PET-Detektion).",
    "explanations_incorrect": {
      "A": "$^{18}_{10}\\\\text{Ne}$ würde bei einem $\\beta^-$-Zerfall entstehen ($n \\to p + e^- + \\bar{\\nu}_e$), was nur bei neutronenreichen Kernen auftritt.",
      "D": "Neutroneneinfang erhöht die Massenzahl bei gleichbleibender Protonenzahl, ist aber kein radioaktiver Zerfall.",
      "E": "Gleichzeitiger spontaner Zerfall mehrerer Nukleonen ohne Alpha-Emission existiert bei leichten Kernen nicht; die Nukleonenzahl bleibt beim Betazerfall strikt erhalten.",
      "B": "Die Abspaltung eines Alphateilchens verringert $A$ um 4 und $Z$ um 2, was zu $^{14}_{7}\\\\text{N}$ führen würde; $^{18}\\\\text{F}$ ist jedoch ein reiner $\\beta^+$-Strahler."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-02-strahlung"
  },
  {
    "id": "CHEM-BMS-GP3-004",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Gasgesetze und Aggregatzustände",
    "subtopic": "Satz von Avogadro & Molares Gasvolumen",
    "difficulty": "foundational",
    "stem": "Zwei identische, starre Gasbehälter mit je $10\\,\\\\text{l}$ Volumen befinden sich bei gleichem Druck ($101{,}3\\,\\\\text{kPa}$) und gleicher Temperatur ($0\\,^\\circ\\\\text{C}$). Behälter 1 ist mit Helium ($\\\\text{He}$, $M = 4\\,\\\\text{g/mol}$) gefüllt, Behälter 2 mit Sauerstoffgas ($\\\\text{O}_2$, $M = 32\\,\\\\text{g/mol}$). Welche Aussage trifft unter der Annahme idealen Gasverhaltens nach dem Avogadroschen Gesetz exakt zu?",
    "options": {
      "A": "Werden beide Gase als ideale Gase modelliert, enthalten beide Behälter exakt die gleiche Anzahl an Gasteilchen (gleiche Stoffmenge $n$), jedoch ist die Masse des Gases in Behälter 2 achtmal so groß wie in Behälter 1.",
      "B": "Die Gasdichte in beiden Behältern ist exakt gleich, da Druck und Temperatur übereinstimmen.",
      "C": "Der Druck in Behälter 2 müsste verdoppelt werden, um die gleiche Stoffmenge wie in Behälter 1 aufzunehmen.",
      "D": "Behälter 1 enthält achtmal so viele Gasmoleküle wie Behälter 2, da Heliumatome viel kleiner und leichter sind.",
      "E": "In Behälter 2 befinden sich viermal so viele Teilchen, da Sauerstoff als zweiatomiges Gas vorliegt."
    },
    "correct_answer": "A",
    "explanation_correct": "Das Gesetz von Avogadro besagt, dass gleiche Volumina idealer Gase bei gleichem Druck und gleicher Temperatur exakt dieselbe Anzahl an Teilchen (dieselbe Stoffmenge $n$) enthalten. Bei $V = 10\\,\\\\text{l}$ unter Standardbedingungen ($T=0\\,^\\circ\\\\text{C}, p=101{,}3\\,\\\\text{kPa}$) beträgt die Stoffmenge bei idealem Verhalten $n = \\frac{V}{V_m} = \\frac{10\\,\\\\text{l}}{22{,}4\\,\\\\text{l/mol}} \\approx 0{,}446\\,\\\\text{mol}$. Da die molare Masse von $\\\\text{O}_2$ ($32\\,\\\\text{g/mol}$) achtmal so groß ist wie die von $\\\\text{He}$ ($4\\,\\\\text{g/mol}$), ist die Gasmasse in Behälter 2 ($m = n \\cdot M$) exakt achtmal so groß wie in Behälter 1 ($m_{\\\\text{O}_2} = 8 \\cdot m_{\\\\text{He}}$), woraus auch eine achtfach höhere Dichte resultiert.",
    "explanations_incorrect": {
      "B": "Die Dichte $\\rho = \\frac{m}{V} = \\frac{p \\cdot M}{R \\cdot T}$ ist direkt proportional zur Molmasse; sie ist für Sauerstoff achtfach höher.",
      "C": "Beide Behälter enthalten bereits bei gleichem Druck exakt dieselbe Stoffmenge.",
      "E": "Ein $\\\\text{O}_2$-Molekül zählt als ein einzelnes Teilchen im Sinne der Gasgesetze; die Teilchenzahl ist identisch.",
      "D": "Die Teilchenzahl hängt bei idealen Gasen nach Avogadro nicht von der Eigenmasse oder Eigenvolumen der Teilchen ab."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-03-gase"
  },
  {
    "id": "CHEM-BMS-GP3-005",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Gasgesetze und Aggregatzustände",
    "subtopic": "Reale Gase & Van-der-Waals-Gleichung",
    "difficulty": "advanced",
    "stem": "Wie korrigiert die Van-der-Waals-Zustandsgleichung $\\left(p + \\frac{a \\cdot n^2}{V^2}\\right)(V - n \\cdot b) = n \\cdot R \\cdot T$ das Verhalten realer Gase im Vergleich zum idealen Gasgesetz, und wofür stehen die Parameter $a$ und $b$?",
    "options": {
      "A": "$a$ berücksichtigt die thermische Zersetzung der Moleküle; $b$ steht für die Viskosität des Gases.",
      "B": "$a$ beschreibt die Gravitation zwischen den Gasatomen; $b$ steht für die chemische Reaktionsgeschwindigkeit.",
      "C": "$a$ korrigiert den barometrischen Höhenunterschied; $b$ berücksichtigt die Dissoziation in Ionen.",
      "D": "Der Kohäsionsdruck-Term $\\frac{a \\cdot n^2}{V^2}$ korrigiert die intermolekularen Anziehungskräfte (Binnendruck, der den gemessenen Druck mindert); das Kovolumen $n \\cdot b$ korrigiert das endliche Eigenvolumen der Gasteilchen, das dem freien Raum abgezogen werden muss.",
      "E": "$a$ korrigiert die Erhöhung des freien Volumens durch Stöße; $b$ beschreibt die Abstoßung der Atomkerne bei geringer Dichte."
    },
    "correct_answer": "D",
    "explanation_correct": "Ideale Gase werden als punktförmige Teilchen (Eigenvolumen = 0) ohne zwischenmolekulare Wechselwirkungen definiert. Reale Gase weichen hiervon bei hohem Druck und niedriger Temperatur ab: 1. Gasteilchen besitzen ein endliches Eigenvolumen (Kovolumen $b$); das frei bewegliche Volumen ist somit kleiner als das Behältervolumen ($V - n \\cdot b$). 2. Zwischen den Gasteilchen wirken anziehende intermolekulare Kräfte (Van-der-Waals-Kräfte, Parameter $a$). Diese Anziehung bremst auf die Wand zusteuernde Moleküle ab, wodurch der messbare Druck $p$ kleiner ist als beim idealen Gas. Der Korrekturterm $\\frac{a \\cdot n^2}{V^2}$ (Binnendruck) wird daher zum gemessenen Druck addiert.",
    "explanations_incorrect": {
      "A": "Weder Zersetzung noch Viskosität sind Gegenstand der Gleichung; $a$ und $b$ beschreiben Kohäsionskräfte und Kovolumen.",
      "B": "Gravitationskräfte zwischen einzelnen Gasmolekülen sind vernachlässigbar klein; maßgeblich sind elektrostatische Dipol-Dipol- und Dispersionskräfte.",
      "C": "Die Van-der-Waals-Gleichung ist eine Zustandsgleichung für homogene Gase unabhängig von der geodätischen Höhe.",
      "E": "Genau umgekehrt: Das Eigenvolumen verringert das freie Volumen (daher Subtraktion von $n \\cdot b$); $a$ beschreibt Anziehung, nicht Abstoßung."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-03-gase"
  },
  {
    "id": "CHEM-BMS-GP3-006",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Periodensystem und chemische Bindungen",
    "subtopic": "Metallische Bindung & Elektronengasmodell",
    "difficulty": "foundational",
    "stem": "Welches mikroskopische Modell erklärt die hohe elektrische Leitfähigkeit, die hohe Wärmeleitfähigkeit und die plastische Verformbarkeit (Duktilität) reiner Metalle im festen Aggregatzustand?",
    "options": {
      "A": "Starre kovalente Elektronenpaarbindungen mit tetraedrischen Raumwinkeln, die durch Lichteinstrahlung aufbrechen.",
      "B": "Ein Raumgitter aus positiv geladenen Metall-Atomrümpfen (Kationen), die von delokalisierten, frei beweglichen Valenzelektronen ('Elektronengas') umgeben und zusammengehalten werden.",
      "C": "Ein Ionengitter aus Anionen und Kationen, die durch extrem starke Wasserstoffbrückenbindungen verknüpft sind.",
      "D": "Eine amorphe Flüssigkeit aus ungeladenen Atomen, die durch London-Dispersionskräfte temporär fixiert werden.",
      "E": "Ein Gitter aus negativ geladenen Metallrümpfen, zwischen denen Protonen frei hin- und herwandern."
    },
    "correct_answer": "B",
    "explanation_correct": "Im Modell des Metallgitters geben die Metallatome aufgrund ihrer geringen Ionisierungsenergie ihre Valenzelektronen ab. Es entsteht ein dreidimensionales Kationengitter (Metall-Atomrümpfe). Die abgegebenen Elektronen sind nicht mehr an einzelne Atome gebunden, sondern delokalisiert über das gesamte Kristallgitter verteilt ('Elektronengas'). Unter Anlegen einer elektrischen Spannung wandern diese delokalisierten Elektronen gerichtet (hohe elektrische Leitfähigkeit). Beim mechanischen Verformen verschieben sich die Schichten der Atomrümpfe gegeneinander, ohne dass abstoßende Gleichladungen aufeinanderprallen (wie beim Ionenkristall), da das flexible Elektronengas die Verschiebung sofort elektrostatisch abpuffert (hohe Duktilität/Verformbarkeit).",
    "explanations_incorrect": {
      "C": "Ionengitter (wie $\\\\text{NaCl}$) sind spröde und leiten im festen Zustand keinen elektrischen Strom; H-Brücken existieren zwischen elektronegativen Heteroatomen (N, O, F).",
      "D": "Reine Metalle sind hochgeordnete Kristalle (z. B. kubisch dichteste oder hexagonal dichteste Kugelpackung), keine amorphen Flüssigkeiten.",
      "E": "Atomrümpfe von Metallen sind immer positiv geladen (Kationen); Protonen sind fest im Atomkern gebunden und fließen nicht frei im Festkörper.",
      "A": "Starre kovalente Raumgitter charakterisieren kovalente Festkörper wie Diamant oder Quarz; diese sind spröde Isolatoren."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-04-bindungen"
  },
  {
    "id": "CHEM-BMS-GP3-007",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Periodensystem und chemische Bindungen",
    "subtopic": "Hybridisierung & Bindungswinkel am Kohlenstoff",
    "difficulty": "intermediate",
    "stem": "Welche Hybridisierungszustände der Kohlenstoffatome, Bindungswinkel und Bindungstypen liegen in den Molekülen Ethan ($\\\\text{C}_2\\\\text{H}_6$), Ethen ($\\\\text{C}_2\\\\text{H}_4$) und Ethin ($\\\\text{C}_2\\\\text{H}_2$) jeweils vor?",
    "options": {
      "A": "Ethan: $sp$ ($180^\\circ$); Ethen: $sp^2$ ($120^\\circ$); Ethin: $sp^3$ ($109{,}5^\\circ$)",
      "B": "Alle drei Verbindungen sind identisch $sp^3$-hybridisiert, da Kohlenstoff immer vierbindig ist.",
      "C": "Ethan besitzt zwei $\\pi$-Bindungen; Ethin besitzt ausschließlich polare Ionenbindungen.",
      "D": "Ethan: $sp^3$ ($109{,}5^\\circ$, tetraedrisch, nur $\\sigma$-Bindungen); Ethen: $sp^2$ ($120^\\circ$, trigonal-planar, eine $\\sigma$- und eine $\\pi$-Bindung); Ethin: $sp$ ($180^\\circ$, linear, eine $\\sigma$- und zwei $\\pi$-Bindungen).",
      "E": "In Ethen sind die Kohlenstoffatome $sp^3$-hybridisiert mit einem Bindungswinkel von $90^\\circ$."
    },
    "correct_answer": "D",
    "explanation_correct": "Die Hybridisierung am Kohlenstoff bestimmt die Molekülgeometrie: 1. Ethan (Alkan): 4 Einfachbindungen pro C-Atom erfordern 4 äquivalente Hybridorbitale $\\to sp^3$-Hybridisierung, tetraedrischer Bindungswinkel ca. $109{,}5^\\circ$, ausschließlich rotationssymmetrische $\\sigma$-Bindungen. 2. Ethen (Alken): 3 $\\sigma$-Bindungen pro C-Atom nutzen 3 $sp^2$-Hybridorbitale (trigonal-planar, Winkel $120^\\circ$); das verbleibende unvermischte $2p$-Orbital bildet durch laterale Überlappung eine $\\pi$-Bindung (Doppelbindung = $1\\,\\sigma + 1\\,\\pi$). 3. Ethin (Alkin): 2 $\\sigma$-Bindungen nutzen 2 $sp$-Hybridorbitale (lineare Geometrie, Winkel $180^\\circ$); die zwei verbleibenden orthogonalen $p$-Orbitale bilden zwei $\\pi$-Bindungen (Dreifachbindung = $1\\,\\sigma + 2\\,\\pi$).",
    "explanations_incorrect": {
      "A": "Genau umgekehrte Zuordnung: Ethan ist $sp^3$ (Einfachbindung), Ethin ist $sp$ (Dreifachbindung).",
      "B": "Vierbindigkeit bedeutet nicht identische Hybridisierung; Doppel- und Dreifachbindungen erfordern unvermischte $p$-Orbitale für $\\pi$-Bindungen ($sp^2$ bzw. $sp$).",
      "E": "Ethen ist trigonal-planar ($sp^2$) mit $120^\\circ$, nicht $sp^3$ oder $90^\\circ$.",
      "C": "Ethan besitzt gar keine $\\pi$-Bindungen; Ethin ist kovalent gebunden und bildet kein Salz."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-04-bindungen"
  },
  {
    "id": "CHEM-BMS-GP3-008",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Periodensystem und chemische Bindungen",
    "subtopic": "Koordinative Bindung: Ammonium & Hydronium",
    "difficulty": "intermediate",
    "stem": "Wie entsteht eine koordinative (dative) kovalente Bindung, und welche Bindungsverhältnisse liegen im Ammonium-Ion ($\\\\text{NH}_4^+$) vor?",
    "options": {
      "A": "Beide Bindungselektronen des bindenden Paares stammen von einem einzigen Bindungspartner (dem Donor mit freiem Elektronenpaar), und nach Ausbildung der Bindung sind alle vier $\\\\text{N-H}$-Bindungen im $\\\\text{NH}_4^+$ strukturell und energetisch völlig gleichwertig.",
      "B": "Ein Partner gibt ein Proton ab, das andere Atom steuert zwei Neutronen zur Bindung bei.",
      "C": "Die koordinative Bindung ist eine reine Ionenbindung, die im wässrigen Milieu sofort dissoziiert.",
      "D": "Im Ammonium-Ion bleibt die vierte Bindung permanent schwächer und um $50\\,\\%$ länger als die übrigen drei Bindungen.",
      "E": "Eine koordinative Bindung erfordert zwingend metallische Übergangselemente und kann mit Hauptgruppenelementen nicht gebildet werden."
    },
    "correct_answer": "A",
    "explanation_correct": "Bei einer klassischen kovalenten Einfachbindung steuert jedes der beiden Atome jeweils ein ungepaartes Valenzelektron bei. Bei einer koordinativen (dativen) Bindung stellt hingegen ein Atom (der Lewis-Base-Donor, hier das Stickstoffatom im Ammoniak $\\\\text{NH}_3$ mit seinem freien Elektronenpaar) beide Elektronen zur Verfügung, während der Bindungspartner (die Lewis-Säure, hier das Proton $\\\\text{H}^+$ mit einer leeren $1s$-Schale) die Elektronenlücke bereitstellt. Einmal gebildet, ist die koordinative Bindung physikalisch, quantenmechanisch und spektroskopisch von den anderen drei kovalenten Bindungen ununterscheidbar: Das $\\\\text{NH}_4^+$-Kation ist exakt tetraedrisch symmetrisch ($T_d$-Symmetrie), und alle vier N-H-Bindungslängen und -energien sind absolut identisch.",
    "explanations_incorrect": {
      "C": "Die dative Bindung ist eine echte kovalente Elektronenpaarbindung mit hoher Bindungsenthalpie, keine lose Ionenbindung.",
      "D": "Durch Orbitalmischung ($sp^3$) sind alle vier Bindungen völlig identisch und gleich lang.",
      "E": "Koordinative Bindungen sind zentral für Hauptgruppenverbindungen (z. B. $\\\\text{NH}_4^+, \\\\text{H}_3\\\\text{O}^+, \\\\text{BF}_4^-$) und nicht auf Übergangsmetalle beschränkt.",
      "B": "Neutronen befinden sich im Atomkern und nehmen niemals an chemischen Bindungen teil."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-04-bindungen"
  },
  {
    "id": "CHEM-BMS-GP3-009",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Stöchiometrie und chemische Reaktionen",
    "subtopic": "Massenanteil (w/w) & Gehaltsberechnung",
    "difficulty": "foundational",
    "stem": "Für eine klinische Infusion soll eine physiologische Kochsalzlösung mit einem Natriumchlorid-Massenanteil von $w = 0{,}90\\,\\%$ hergestellt werden. Welche Einwaagen an reinem festem Natriumchlorid ($\\\\text{NaCl}$) und destilliertem Wasser ($\\\\text{H}_2\\\\text{O}$) werden benötigt, um exakt $500\\,\\\\text{g}$ dieser fertigen Lösung herzustellen?",
    "options": {
      "A": "$0{,}90\\,\\\\text{g }\\\\text{NaCl}$ und $499{,}1\\,\\\\text{g }\\\\text{H}_2\\\\text{O}$",
      "B": "$9{,}0\\,\\\\text{g }\\\\text{NaCl}$ und $491\\,\\\\text{g }\\\\text{H}_2\\\\text{O}$",
      "C": "$4{,}5\\,\\\\text{g }\\\\text{NaCl}$ und $495{,}5\\,\\\\text{g }\\\\text{H}_2\\\\text{O}$",
      "D": "$0{,}45\\,\\\\text{g }\\\\text{NaCl}$ und $499{,}55\\,\\\\text{g }\\\\text{H}_2\\\\text{O}$",
      "E": "$45\\,\\\\text{g }\\\\text{NaCl}$ und $455\\,\\\\text{g }\\\\text{H}_2\\\\text{O}$"
    },
    "correct_answer": "C",
    "explanation_correct": "Der Massenanteil $w$ ist definiert als Masse des gelösten Stoffes geteilt durch die Gesamtmasse der fertigen Lösung: $w = \\frac{m(\\\\text{Gelöster Stoff})}{m(\\\\text{Lösung})}$. Bei $w = 0{,}90\\,\\% = 0{,}0090$ und einer Gesamtlösungsmasse von $m_{\\\\text{Lsg}} = 500\\,\\\\text{g}$ gilt: $m(\\\\text{NaCl}) = w \\cdot m_{\\\\text{Lsg}} = 0{,}0090 \\cdot 500\\,\\\\text{g} = 4{,}5\\,\\\\text{g}$. Die benötigte Masse an Lösungsmittel (Wasser) ergibt sich aus der Massenerhaltung: $m(\\\\text{H}_2\\\\text{O}) = m_{\\\\text{Lsg}} - m(\\\\text{NaCl}) = 500\\,\\\\text{g} - 4{,}5\\,\\\\text{g} = 495{,}5\\,\\\\text{g}$.",
    "explanations_incorrect": {
      "A": "$0{,}90\\,\\\\text{g}$ wäre die Masse für $100\\,\\\\text{g}$ Lösung, nicht für $500\\,\\\\text{g}$.",
      "B": "$9{,}0\\,\\\\text{g}$ entspricht einem Massenanteil von $1{,}8\\,\\%$ ($500 \\times 0{,}018$).",
      "E": "$45\\,\\\\text{g}$ entspräche einer zehnfach zu konzentrierten $9\\,\\%$igen Lösung.",
      "D": "$0{,}45\\,\\\\text{g}$ entspräche einem Massenanteil von lediglich $0{,}090\\,\\%$."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-05-stoechiometrie"
  },
  {
    "id": "CHEM-BMS-GP3-010",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Stöchiometrie und chemische Reaktionen",
    "subtopic": "Gasentwicklung & Stöchiometrie",
    "difficulty": "intermediate",
    "stem": "Reiner Kalk (Calciumcarbonat, $\\\\text{CaCO}_3$, $M = 100{,}0\\,\\\\text{g/mol}$) reagiert mit überschüssiger Salzsäure gemäß: $\\\\text{CaCO}_3\\,\\\\text{(s)} + 2\\,\\\\text{HCl}\\,\\\\text{(aq)} \\to \\\\text{CaCl}_2\\,\\\\text{(aq)} + \\\\text{H}_2\\\\text{O}\\,\\\\text{(l)} + \\\\text{CO}_2\\,\\\\text{(g)}$. Welches Volumen an trockenem Kohlendioxidgas ($\\\\text{CO}_2$) wird bei Standardbedingungen ($T = 0\\,^\\circ\\\\text{C},\\, p = 101{,}3\\,\\\\text{kPa}$, molares Gasvolumen $V_m = 22{,}4\\,\\\\text{l/mol}$) freigesetzt, wenn exakt $10{,}0\\,\\\\text{g}$ Calciumcarbonat vollständig umgesetzt werden?",
    "options": {
      "A": "$1{,}12\\,\\\\text{l}$",
      "B": "$4{,}48\\,\\\\text{l}$",
      "C": "$22{,}4\\,\\\\text{l}$",
      "D": "$44{,}8\\,\\\\text{l}$",
      "E": "$2{,}24\\,\\\\text{l}$"
    },
    "correct_answer": "E",
    "explanation_correct": "Schritt 1: Stoffmenge an eingesetztem Calciumcarbonat: $n(\\\\text{CaCO}_3) = \\frac{m}{M} = \\frac{10{,}0\\,\\\\text{g}}{100{,}0\\,\\\\text{g/mol}} = 0{,}100\\,\\\\text{mol}$. Schritt 2: Stöchiometrisches Verhältnis laut Reaktionsgleichung: $1\\,\\\\text{mol }\\\\text{CaCO}_3$ liefert $1\\,\\\\text{mol }\\\\text{CO}_2$ ($n(\\\\text{CO}_2) = n(\\\\text{CaCO}_3) = 0{,}100\\,\\\\text{mol}$). Schritt 3: Berechnung des Gasvolumens unter Standardbedingungen: $V(\\\\text{CO}_2) = n \\cdot V_m = 0{,}100\\,\\\\text{mol} \\cdot 22{,}4\\,\\\\text{l/mol} = 2{,}24\\,\\\\text{l}$.",
    "explanations_incorrect": {
      "A": "$1{,}12\\,\\\\text{l}$ resultiert aus einer fehlerhaften Halbierung der Stoffmenge durch den stöchiometrischen Koeffizienten $2$ der Salzsäure.",
      "B": "$4{,}48\\,\\\\text{l}$ resultiert aus einer fehlerhaften Multiplikation mit 2.",
      "C": "$22{,}4\\,\\\\text{l}$ würde bei vollständiger Umsetzung von $1{,}0\\,\\\\text{mol}$ ($100\\,\\\\text{g}$) freigesetzt werden.",
      "D": "$44{,}8\\,\\\\text{l}$ ist ein Rechenfehler mit Verdopplung des Molvolumens."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-05-stoechiometrie"
  },
  {
    "id": "CHEM-BMS-GP3-011",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Stöchiometrie und chemische Reaktionen",
    "subtopic": "Löslichkeitsprodukt mit ungleicher Stöchiometrie",
    "difficulty": "advanced",
    "stem": "Das schwerlösliche Salz Calciumfluorid ($\\\\text{CaF}_2$) dissoziiert in gesättigter wässriger Lösung gemäß: $\\\\text{CaF}_2\\,\\\\text{(s)} \\rightleftharpoons \\\\text{Ca}^{2+}\\,\\\\text{(aq)} + 2\\,\\\\text{F}^-\\,\\\\text{(aq)}$. Bei $25\\,^\\circ\\\\text{C}$ beträgt sein Löslichkeitsprodukt $K_L = 3{,}2 \\times 10^{-11}\\,\\\\text{mol}^3/\\\\text{l}^3$. Wie hoch ist die molare Löslichkeit $s$ von Calciumfluorid in reinem Wasser bei dieser Temperatur?",
    "options": {
      "A": "$8{,}0 \\times 10^{-12}\\,\\\\text{mol/l}$",
      "B": "$5{,}65 \\times 10^{-6}\\,\\\\text{mol/l}$",
      "C": "$4{,}0 \\times 10^{-4}\\,\\\\text{mol/l}$",
      "D": "$2{,}0 \\times 10^{-4}\\,\\\\text{mol/l}$",
      "E": "$1{,}6 \\times 10^{-5}\\,\\\\text{mol/l}$"
    },
    "correct_answer": "D",
    "explanation_correct": "Beim Auflösen von $s\\,\\\\text{mol/l}$ Calciumfluorid entstehen in Lösung gemäß der Stöchiometrie: $[\\\\text{Ca}^{2+}] = s$ und $[\\\\text{F}^-] = 2s$. Das Löslichkeitsprodukt lautet nach dem Massenwirkungsgesetz: $K_L = [\\\\text{Ca}^{2+}] \\cdot [\\\\text{F}^-]^2 = s \\cdot (2s)^2 = s \\cdot 4s^2 = 4s^3$. Umstellen nach der molaren Löslichkeit $s$: $4s^3 = 3{,}2 \\times 10^{-11} = 32 \\times 10^{-12}\\,\\\\text{mol}^3/\\\\text{l}^3 \\implies s^3 = \\frac{32 \\times 10^{-12}}{4} = 8{,}0 \\times 10^{-12}\\,\\\\text{mol}^3/\\\\text{l}^3$. Ziehen der dritten Wurzel: $s = \\sqrt[3]{8{,}0 \\times 10^{-12}} = 2{,}0 \\times 10^{-4}\\,\\\\text{mol/l}$.",
    "explanations_incorrect": {
      "B": "$5{,}65 \\times 10^{-6}\\,\\\\text{mol/l}$ resultiert aus dem klassischen Fehler, eine $1:1$-Stöchiometrie anzunehmen ($s = \\sqrt{K_L} = \\sqrt{3{,}2 \\times 10^{-11}}$).",
      "C": "$4{,}0 \\times 10^{-4}\\,\\\\text{mol/l}$ ist die Gleichgewichtskonzentration der Fluoridionen ($[\\\\text{F}^-] = 2s$), nicht die Löslichkeit $s$ des Salzes $\\\\text{CaF}_2$.",
      "E": "$1{,}6 \\times 10^{-5}$ resultiert aus fehlerhafter Division ohne Berücksichtigung des Quadrats der Fluoridkonzentration ($K_L / 2$). ",
      "A": "$8{,}0 \\times 10^{-12}$ ist der Zwischenwert von $s^3$, nicht $s$."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-05-stoechiometrie"
  },
  {
    "id": "CHEM-BMS-GP3-012",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Chemisches Gleichgewicht und Kinetik",
    "subtopic": "Temperaturabhängigkeit der Gleichgewichtskonstante",
    "difficulty": "intermediate",
    "stem": "Wie ändert sich der Zahlenwert der thermodynamischen Gleichgewichtskonstante $K$ einer reversiblen chemischen Gleichgewichtsreaktion, wenn die Temperatur $T$ des Systems bei konstantem Druck erhöht wird?",
    "options": {
      "A": "Der Zahlenwert von $K$ bleibt bei jeder chemischen Reaktion konstant, da $K$ per definitionem unveränderlich ist.",
      "B": "Bei exothermen Reaktionen ($\\Delta H < 0$) sinkt der Wert von $K$ bei Temperaturerhöhung (Gleichgewicht verschiebt sich zu den Edukten), während bei endothermen Reaktionen ($\\Delta H > 0$) der Wert von $K$ ansteigt (Gleichgewicht verschiebt sich zu den Produkten).",
      "C": "Bei allen chemischen Reaktionen steigt $K$ zwingend an, da höhere Temperatur die Teilchenbewegung beschleunigt.",
      "D": "Bei exothermen Reaktionen steigt $K$ exponentiell an, da Wärme das Entstehen von Produkten begünstigt.",
      "E": "Der Wert von $K$ ändert sich nur dann, wenn ein Katalysator zugesetzt wird."
    },
    "correct_answer": "B",
    "explanation_correct": "Die Temperatur ist der einzige Parameter, der den thermodynamischen Zahlenwert der Gleichgewichtskonstante $K$ verändert (van 't Hoffsche Reaktionsisobare: $\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{R \\cdot T^2}$). Für eine allgemeine reversible Gleichgewichtsreaktion $a\\,\\\\text{A} + b\\,\\\\text{B} \\rightleftharpoons c\\,\\\\text{C} + d\\,\\\\text{D}$ lautet das Massenwirkungsgesetz $K_c = \\frac{[\\\\text{C}]^c \\cdot [\\\\text{D}]^d}{[\\\\text{A}]^a \\cdot [\\\\text{B}]^b}$ mit den stöchiometrischen Koeffizienten als Exponenten (thermodynamisch streng über Aktivitäten definiert: $K = \\frac{a(\\\\text{C})^c \\cdot a(\\\\text{D})^d}{a(\\\\text{A})^a \\cdot a(\\\\text{B})^b}$). Nach dem Prinzip des kleinsten Zwanges (Le Chatelier) gilt: 1. Bei exothermen Reaktionen ($\\Delta H < 0$) wird Wärme freigesetzt; eine Temperaturerhöhung begünstigt die endotherme Rückreaktion, wodurch die Eduktkonzentrationen steigen und der Wert von $K$ sinkt. 2. Bei endothermen Reaktionen ($\\Delta H > 0$) wird Wärme aufgenommen; eine Temperaturerhöhung begünstigt die Vorwärtsreaktion, wodurch der Wert von $K$ ansteigt.",
    "explanations_incorrect": {
      "A": "$K$ ist eine temperaturabhängige Naturkonstante; sie bleibt nur bei konstanter Temperatur ($T = \\\\text{const.}$) unverändert.",
      "D": "Genau umgekehrt: Bei exothermen Reaktionen führt Wärmezufuhr zur Verschiebung auf die Eduktseite, $K$ sinkt.",
      "E": "Katalysatoren beschleunigen Hin- und Rückreaktion gleichermaßen und beeinflussen die Gleichgewichtskonstante $K$ überhaupt nicht.",
      "C": "Die Geschwindigkeitskonstanten $k_{\\\\text{hin}}$ und $k_{\\\\text{rück}}$ steigen beide mit $T$ (Arrhenius), ihr Verhältnis $K = k_{\\\\text{hin}}/k_{\\\\text{rück}}$ kann jedoch sinken oder steigen."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-06-gleichgewicht"
  },
  {
    "id": "CHEM-BMS-GP3-013",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Chemisches Gleichgewicht und Kinetik",
    "subtopic": "Reaktionsordnung & Arrhenius-Kinetik",
    "difficulty": "advanced",
    "stem": "Welche fundamentale Eigenschaft charakterisiert eine chemische Reaktion erster Ordnung (Geschwindigkeitsgesetz: $v = k \\cdot [\\\\text{A}]$) hinsichtlich ihrer Halbwertszeit $t_{1/2}$, und wie wirkt sich eine Erhöhung der Temperatur um $10\\,^\\circ\\\\text{C}$ näherungsweise auf die Reaktionsgeschwindigkeit aus?",
    "options": {
      "A": "Die Halbwertszeit ist unabhängig von der Anfangskonzentration ($t_{1/2} = \\frac{\\ln 2}{k} \\approx \\frac{0{,}693}{k}$); und nach der RGT-Regel (Reaktionsgeschwindigkeit-Temperatur-Regel) verdoppelt bis vervierfacht sich die Reaktionsgeschwindigkeit typischerweise bei einer Temperaturerhöhung um $10\\,^\\circ\\\\text{C}$.",
      "B": "Die Reaktion läuft mit konstanter absoluter Geschwindigkeit $v$ ab; die Temperatur hat keinen Einfluss auf $k$.",
      "C": "Die Halbwertszeit verdoppelt sich nach jedem Reaktionsintervall; $E_A$ wird durch Wärme auf null reduziert.",
      "D": "Die Halbwertszeit ist direkt proportional zur Anfangskonzentration $[\\\\text{A}]_0$; die Geschwindigkeit sinkt bei Temperaturerhöhung stets auf die Hälfte.",
      "E": "Die Halbwertszeit ist umgekehrt proportional zum Quadrat der Temperatur; die Geschwindigkeitskonstante $k$ ist temperaturunabhängig."
    },
    "correct_answer": "A",
    "explanation_correct": "Für eine Reaktion 1. Ordnung lautet das integrierte Zeitgesetz: $[\\\\text{A}](t) = [\\\\text{A}]_0 \\cdot e^{-k \\cdot t}$. Bei Erreichen der Halbwertszeit gilt $[\\\\text{A}](t_{1/2}) = \\frac{1}{2}[\\\\text{A}]_0$. Einsetzen liefert: $e^{-k \\cdot t_{1/2}} = 0{,}5 \\implies t_{1/2} = \\frac{\\ln 2}{k} \\approx \\frac{0{,}693}{k}$. Die Halbwertszeit hängt somit ausschließlich von der Geschwindigkeitskonstante $k$ ab und ist vollkommen unabhängig von der Ausgangskonzentration $[\\\\text{A}]_0$ (wichtigstes medizinisches Modell für Eliminationen nach 1. Ordnung). Die Temperaturabhängigkeit folgt der Arrhenius-Gleichung ($k = A \\cdot e^{-E_A/(R \\cdot T)}$); als Faustregel (RGT-Regel / van 't Hoff-Regel) gilt für viele organische und biochemische Reaktionen eine Beschleunigung um den Faktor 2 bis 4 pro $10\\,^\\circ\\\\text{C}$ Erwärmung.",
    "explanations_incorrect": {
      "B": "Konstante absolute Geschwindigkeit $v = k$ kennzeichnet eine Reaktion 0. Ordnung.",
      "C": "Die Halbwertszeit bleibt bei Reaktionen 1. Ordnung konstant, sie verdoppelt sich nicht; $E_A$ (Aktivierungsenergie) ist eine stoffspezifische Konstante und wird durch Temperatur nicht verändert.",
      "E": "Die Geschwindigkeitskonstante $k$ ist nach Arrhenius stark temperaturabhängig.",
      "D": "Eine Konzentrationsabhängigkeit der Halbwertszeit ($t_{1/2} \\propto [\\\\text{A}]_0$) kennzeichnet Reaktionen 0. Ordnung, nicht 1. Ordnung; Temperaturerhöhung steigert die Geschwindigkeit."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-06-gleichgewicht"
  },
  {
    "id": "CHEM-BMS-GP3-014",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Elemente und ihre Verbindungen",
    "subtopic": "Edelgase & Elektronenkonfiguration",
    "difficulty": "foundational",
    "stem": "Warum liegen die Elemente der 8. Hauptgruppe (Edelgase: $\\\\text{He, Ne, Ar, Kr, Xe, Rn}$) unter Normalbedingungen als einatomige Gase vor und zeichnen sich durch eine allgemein sehr geringe chemische Reaktivität aus, sodass stabile chemische Verbindungen (vor allem der schwereren Edelgase wie Xenon) nur unter spezifischen Bedingungen mit stark elektronegativen Partnern wie Fluor oder Sauerstoff gebildet werden?",
    "options": {
      "A": "Weil ihre Atomkerne keine Neutronen enthalten und daher keine kovalenten Bindungen eingehen können.",
      "B": "Weil sie ausschließlich aus negativ geladenen Anionen bestehen, die sich elektrostatisch abstoßen.",
      "C": "Weil ihre Elektronegativität den maximalen Wert von 4,0 übersteigt und sie alle Nachbaratome oxidieren.",
      "D": "Weil ihre Atome durch spontane radioaktive Kernspaltung sofort zerfallen würden, wenn sie Moleküle bilden.",
      "E": "Weil sie eine vollständig besetzte Valenzschale (Elektronenoktett $s^2 p^6$, bei Helium Duplett $1s^2$) besitzen, was energetisch außergewöhnlich stabil ist und eine extrem hohe Ionisierungsenergie sowie eine vernachlässigbare Elektronenaffinität bedingt."
    },
    "correct_answer": "E",
    "explanation_correct": "Edelgase besitzen im Grundzustand vollbesetzte äußere Elektronenschalen (Helium: Duplett $1s^2$; alle schwereren Edelgase: Valenzoktett $n s^2 n p^6$). Diese geschlossene Elektronenkonfiguration verleiht den Atomen eine außerordentlich hohe thermodynamische und kinetische Stabilität. Die Entfernung eines Elektrons erfordert sehr hohe Ionisierungsenergien (Helium: $2.372\\,\\\\text{kJ/mol}$, Xenon immerhin noch $1.170\\,\\\\text{kJ/mol}$), während die Elektronenaffinität $\\le 0$ ist (keine Neigung zur Aufnahme zusätzlicher Elektronen). Aus diesem Grund liegen Edelgase unter Standardbedingungen als einatomige Gase vor und wechselwirken nur über sehr schwache London-Dispersionskräfte. Während die leichten Edelgase (He, Ne, Ar) unter Normalbedingungen keine isolierbaren neutralen Verbindungen bilden, können die schwereren Edelgase mit geringerer Ionisierungsenergie (insbesondere Xenon, z. B. $\\\\text{XeF}_2, \\\\text{XeF}_4, \\\\text{XeO}_3$) bei gezielter Umsetzung mit hochgradig elektronegativen Elementen wie Fluor oder Sauerstoff thermodynamisch stabile Verbindungen eingehen.",
    "explanations_incorrect": {
      "A": "Mit Ausnahme des leichten Helium-3 besitzen alle Edelgase viele Neutronen in ihren Kernen.",
      "C": "Die Elektronegativität von Edelgasen ist nach Pauling für leichte Edelgase nicht definiert bzw. minimal, da sie keine Bindungen eingehen; Fluor hat die höchste EN (4,0).",
      "D": "He, Ne, Ar und Kr bestehen aus absolut stabilen, nicht-radioaktiven Isotopen (nur Radon ist radioaktiv).",
      "B": "Edelgase sind neutrale Atome, keine geladenen Ionen."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-07-elemente"
  },
  {
    "id": "CHEM-BMS-GP3-015",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Elemente und ihre Verbindungen",
    "subtopic": "Stickstoffchemie & Bindungsenergie",
    "difficulty": "intermediate",
    "stem": "Molekularer elementarer Stickstoff ($\\\\text{N}_2$) macht etwa $78\\,\\%$ der Erdatmosphäre aus. Warum ist elementarer Stickstoff bei Raumtemperatur chemisch extrem reaktionsträge (inert), und unter welchen Bedingungen gelingt seine großtechnische Fixierung im Haber-Bosch-Verfahren?",
    "options": {
      "A": "Stickstoff ist ein Edelgas und besitzt keine Valenzelektronen.",
      "B": "Die beiden Stickstoffatome sind durch eine polare Ionenbindung verknüpft, die sich in Luft nicht auflösen kann.",
      "C": "Die beiden Stickstoffatome sind über eine kovalente Dreifachbindung ($1\\,\\sigma + 2\\,\\pi$) mit einer enorm hohen Bindungsdissoziationsenergie (ca. $945\\,\\\\text{kJ/mol}$) verknüpft; im Haber-Bosch-Verfahren wird diese hohe Aktivierungsbarriere durch einen heterogenen Eisenkatalysator (gewonnen durch Reduktion von Eisenoxid-Vorstufen wie Magnetit), hohen Druck (ca. $150\\\\text{–}250\\,\\\\text{bar}$) und moderate Temperaturen ($400\\\\text{–}500\\,^\\circ\\\\text{C}$) überwunden.",
      "D": "Stickstoff besitzt eine extrem niedrige Ionisierungsenergie und reagiert daher ausschließlich bei $-200\\,^\\circ\\\\text{C}$.",
      "E": "$\\\\text{N}_2$ zerfällt spontan bei $25\\,^\\circ\\\\text{C}$ in freie Radikale, die sofort mit Sauerstoff zu Ozon reagieren."
    },
    "correct_answer": "C",
    "explanation_correct": "Das $\\\\text{N}_2$-Molekül weist eine der stärksten kovalenten Dreifachbindungen auf ($:N \\equiv N:$, Dissoziationsenergie $945\\,\\\\text{kJ/mol}$). Im industriellen Haber-Bosch-Verfahren ($\\\\text{N}_2 + 3\\,\\\\text{H}_2 \\rightleftharpoons 2\\,\\\\text{NH}_3$, $\\Delta H = -92\\,\\\\text{kJ/mol}$) wird als Katalysatorvorstufe ein Gemisch aus Eisenoxiden (vor allem Magnetit $\\\\text{Fe}_3\\\\text{O}_4$) mit Struktur- und elektronischen Promotoren wie $\\\\text{Al}_2\\\\text{O}_3$ und $\\\\text{K}_2\\\\text{O}$ eingesetzt. Im Synthesereaktor wird dieses Oxid vor Beginn durch den Synthesegas-Wasserstoff zu porösem, metallischem $\\alpha$-Eisen reduziert. Erst dieses metallische Eisen stellt den eigentlichen aktiven Katalysator dar, an dessen Kristallflächen die dissoziative Chemisorption der $\\\\text{N}_2$-Moleküle bei $400\\\\text{–}500\\,^\\circ\\\\text{C}$ und $150\\\\text{–}250\\,\\\\text{bar}$ mit reduzierter Aktivierungsenergie abläuft.",
    "explanations_incorrect": {
      "A": "Stickstoff steht in der 5. Hauptgruppe und besitzt 5 Valenzelektronen; es ist kein Edelgas.",
      "B": "$\\\\text{N}_2$ besteht aus zwei identischen Atomen mit Elektronegativitätsdifferenz $\\Delta \\\\text{EN} = 0$; es ist eine unpolare kovalente Dreifachbindung.",
      "D": "Stickstoff besitzt eine sehr hohe erste Ionisierungsenergie ($1.402\\,\\\\text{kJ/mol}$); Reaktionen erfordern Energiezufuhr, nicht Tiefkälte.",
      "E": "$\\\\text{N}_2$ zerfällt bei Raumtemperatur keineswegs spontan in Radikale; es ist thermodynamisch und kinetisch hochstabil."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-07-elemente"
  },
  {
    "id": "CHEM-BMS-GP3-016",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Säuren, Basen und Salze",
    "subtopic": "pKs- und pKb-Werte korrespondierender Paare",
    "difficulty": "foundational",
    "stem": "Welcher fundamentale mathematische und thermodynamische Zusammenhang besteht in wässriger Lösung bei $25\\,^\\circ\\\\text{C}$ zwischen der Säurekonstante ($K_s$ bzw. $pK_s$) einer Brønsted-Säure und der Basenkonstante ($K_b$ bzw. $pK_b$) ihrer korrespondierenden Base?",
    "options": {
      "A": "$pK_s + pK_b = 0$; Säuren und Basen heben sich stets zu Null auf.",
      "B": "$pK_s - pK_b = 7$; starke Säuren besitzen immer auch extrem starke korrespondierende Basen.",
      "C": "$K_s / K_b = 1$; das Produkt aus $pK_s$ und $pK_b$ ergibt stets $100$.",
      "D": "$K_s \\cdot K_b = K_w = 10^{-14}\\,\\\\text{mol}^2/\\\\text{l}^2$ bzw. $pK_s + pK_b = pK_w = 14$; je stärker eine Säure ist (kleinerer $pK_s$), desto schwächer ist ihre korrespondierende Base (größerer $pK_b$).",
      "E": "Der Zusammenhang gilt ausschließlich für Mineralsäuren mit Halogenatomen, nicht jedoch für Wasser oder organische Carbonsäuren."
    },
    "correct_answer": "D",
    "explanation_correct": "Für jedes korrespondierende Säure-Base-Paar ($\\\\\\text{HA} / \\\\\\text{A}^-$) gilt in Wasser: 1. Säuredissoziation: $\\\\\\text{HA} + \\\\\\text{H}_2\\\\\\text{O} \\\\rightleftharpoons \\\\\\text{A}^- + \\\\\\text{H}_3\\\\\\text{O}^+$ mit $K_s = \\\\frac{[\\\\\\text{A}^-][\\\\\\text{H}_3\\\\\\text{O}^+]}{[\\\\\\text{HA}]}$. 2. Basenhydrolyse: $\\\\\\text{A}^- + \\\\\\text{H}_2\\\\\\text{O} \\\\rightleftharpoons \\\\\\text{HA} + \\\\\\text{OH}^-$ mit $K_b = \\\\frac{[\\\\\\text{HA}][\\\\\\text{OH}^-]}{[\\\\\\text{A}^-]}$. Multipliziert man beide Konstanten, kürzen sich $[\\\\\\text{HA}]$ und $[\\\\\\text{A}^-]$ heraus: $K_s \\\\cdot K_b = [\\\\\\text{H}_3\\\\\\text{O}^+] \\\\cdot [\\\\\\text{OH}^-] = K_w = 10^{-14}\\\\\\text{ mol}^2/\\\\\\text{l}^2$ (bei $25\\\\,^\\\\circ\\\\\\text{C}$). Durch Logarithmieren ($- \\\\log_{10}$) folgt: $pK_s + pK_b = 14$. Aus dieser inversen Beziehung folgt zwingend: Eine starke Säure ($pK_s < 0$, z. B. $\\\\\\text{HCl}$) besitzt eine extrem schwache korrespondierende Base ($pK_b > 14$, hier $\\\\\\text{Cl}^-$).",
    "explanations_incorrect": {
      "B": "$pK_s - pK_b$ ist nicht konstant; starke Säuren besitzen sehr schwache korrespondierende Basen, niemals starke.",
      "C": "Der Quotient $K_s / K_b$ ist nicht 1, sondern variiert über viele Zehnerpotenzen.",
      "E": "Diese Beziehung leitet sich direkt aus dem Autoprotolysegleichgewicht des Wassers ab und ist universell für alle Brønsted-Säure-Base-Paare in wässriger Lösung gültig.",
      "A": "Die Summe der negativen dekadischen Logarithmen ergibt 14 (das Ionenprodukt des Wassers), nicht null."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-08-saeuren-basen"
  },
  {
    "id": "CHEM-BMS-GP3-017",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Säuren, Basen und Salze",
    "subtopic": "Salzhydrolyse & pH-Reaktion in Wasser",
    "difficulty": "intermediate",
    "stem": "Wie reagieren wässrige Lösungen der Salze Natriumacetat ($\\\\text{CH}_3\\\\text{COONa}$), Ammoniumchlorid ($\\\\text{NH}_4\\\\text{Cl}$) und Natriumchlorid ($\\\\text{NaCl}$) bei $25\\,^\\circ\\\\text{C}$ jeweils auf den pH-Wert?",
    "options": {
      "A": "$\\\\text{CH}_3\\\\text{COONa}$ reagiert basisch ($\\\\text{pH} > 7$); $\\\\text{NH}_4\\\\text{Cl}$ reagiert sauer ($\\\\text{pH} < 7$); $\\\\text{NaCl}$ reagiert neutral ($\\\\text{pH} \\approx 7$).",
      "B": "$\\\\text{CH}_3\\\\text{COONa}$ reagiert sauer; $\\\\text{NH}_4\\\\text{Cl}$ reagiert basisch; $\\\\text{NaCl}$ reagiert sauer.",
      "C": "Alle drei Salze reagieren streng neutral mit $\\\\text{pH} = 7{,}0$, da Salze per definitionem weder Säuren noch Basen sind.",
      "D": "$\\\\text{NaCl}$ reagiert stark alkalisch mit $\\\\text{pH} = 14$, da Natrium ein Alkalimetall ist.",
      "E": "$\\\\text{NH}_4\\\\text{Cl}$ reagiert basisch, weil Ammoniak eine Lauge bildet."
    },
    "correct_answer": "A",
    "explanation_correct": "Die wässrige Reaktion von Salzen hängt von der Stärke der Ionen als Säuren oder Basen ab: 1. $\\\\text{CH}_3\\\\text{COONa}$: Dissoziiert in $\\\\text{Na}^+$ (neutral, da Kation der starken Base $\\\\text{NaOH}$) und Acetat $\\\\text{CH}_3\\\\text{COO}^-$. Acetat ist die korrespondierende Base der schwachen Essigsäure ($pK_s = 4{,}75$) und reagiert basisch: $\\\\text{CH}_3\\\\text{COO}^- + \\\\text{H}_2\\\\text{O} \\rightleftharpoons \\\\text{CH}_3\\\\text{COOH} + \\\\text{OH}^- \\to \\\\text{pH} > 7$. 2. $\\\\text{NH}_4\\\\text{Cl}$: Dissoziiert in $\\\\text{Cl}^-$ (neutral, Anion der starken Säure $\\\\text{HCl}$) und $\\\\text{NH}_4^+$. Das Ammonium-Kation ist die korrespondierende schwache Säure von Ammoniak ($pK_s = 9{,}25$) und reagiert sauer: $\\\\text{NH}_4^+ + \\\\text{H}_2\\\\text{O} \\rightleftharpoons \\\\text{NH}_3 + \\\\text{H}_3\\\\text{O}^+ \\to \\\\text{pH} < 7$. 3. $\\\\text{NaCl}$: Sowohl $\\\\text{Na}^+$ als auch $\\\\text{Cl}^-$ hydrolysieren nicht merklich $\\to \\\\text{pH} \\approx 7{,}0$ (neutral).",
    "explanations_incorrect": {
      "B": "Genau vertauscht: Acetat nimmt Protonen auf (reagiert basisch), Ammonium gibt Protonen ab (reagiert sauer).",
      "D": "Kochsalz ($\\\\text{NaCl}$) dissoziiert in Ionen, die keine Protonen aufnehmen oder abgeben; es ist neutral und keineswegs stark alkalisch.",
      "E": "Ammoniak ($\\\\text{NH}_3$) ist eine Base, das im Salz enthaltene Ammonium-Ion ($\\\\text{NH}_4^+$) ist hingegen eine Brønsted-Säure.",
      "C": "Salze schwacher Säuren oder Basen unterliegen der Salzhydrolyse und verändern den pH-Wert messbar."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-08-saeuren-basen"
  },
  {
    "id": "CHEM-BMS-GP3-018",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Säuren, Basen und Salze",
    "subtopic": "Säure-Base-Titration & Pufferbereich",
    "difficulty": "advanced",
    "stem": "Bei der Titration von $100\\,\\\\text{ml}$ einer schwachen einprotonigen Säure (Essigsäure, $c = 0{,}10\\,\\\\text{mol/l}$, $pK_s = 4{,}75$) mit einer starken Maßlösung (Natronlauge, $\\\\text{NaOH}$, $c = 0{,}10\\,\\\\text{mol/l}$) werden zwei markante Punkte der Titrationskurve betrachtet: der Halbäquivalenzpunkt ($50\\,\\\\text{ml }\\\\text{NaOH}$ zugegeben) und der Äquivalenzpunkt ($100\\,\\\\text{ml }\\\\text{NaOH}$ zugegeben). Welche pH-Werte liegen an diesen beiden Punkten vor?",
    "options": {
      "A": "Halbäquivalenzpunkt: $\\\\text{pH} = 7{,}00$; Äquivalenzpunkt: $\\\\text{pH} = 14{,}00$",
      "B": "Halbäquivalenzpunkt: $\\\\text{pH} = 12{,}00$; Äquivalenzpunkt: $\\\\text{pH} = 7{,}00$",
      "C": "Halbäquivalenzpunkt: $\\\\text{pH} = 1{,}00$; Äquivalenzpunkt: $\\\\text{pH} = 7{,}00$",
      "D": "Halbäquivalenzpunkt: $\\\\text{pH} = 2{,}37$; Äquivalenzpunkt: $\\\\text{pH} = 4{,}75$",
      "E": "Halbäquivalenzpunkt: $\\\\text{pH} = 4{,}75$ ($= pK_s$); Äquivalenzpunkt: $\\\\text{pH} > 7{,}00$ (im schwach basischen Bereich bei ca. $\\\\text{pH} \\approx 8{,}7$ bis $8{,}9$)"
    },
    "correct_answer": "E",
    "explanation_correct": "1. Halbäquivalenzpunkt ($V_{\\\\text{NaOH}} = 50\\,\\\\text{ml}$): Genau die Hälfte der Essigsäure wurde zu Acetat deprotoniert. Es liegt ein äquimolares Gemisch aus Säure und konjugierter Base vor: $[\\\\text{HA}] = [\\\\text{A}^-]$. Nach der Henderson-Hasselbalch-Gleichung $\\\\text{pH} = pK_s + \\log_{10}\\left(\\frac{[\\\\text{A}^-]}{[\\\\text{HA}]}\\right) = pK_s + \\log_{10}(1) = pK_s = 4{,}75$. Hier besitzt die Lösung ihre maximale Pufferkapazität. 2. Äquivalenzpunkt ($V_{\\\\text{NaOH}} = 100\\,\\\\text{ml}$): Die Essigsäure wurde stöchiometrisch vollständig neutralisiert. In der Lösung befindet sich nun ausschließlich Natriumacetat (Gesamtvolumen $200\\,\\\\text{ml}$, Konzentration $c_{\\\\text{Acetat}} = 0{,}050\\,\\\\text{mol/l}$). Da Acetat eine schwache Base ist ($pK_b = 14 - 4{,}75 = 9{,}25$), reagiert die Lösung am Äquivalenzpunkt schwach basisch: $\\\\text{pOH} = \\frac{1}{2}(pK_b - \\log_{10} c) = \\frac{1}{2}(9{,}25 - (-1{,}30)) = 5{,}28 \\implies \\\\text{pH} = 14 - 5{,}28 = 8{,}72$.",
    "explanations_incorrect": {
      "A": "$\\\\text{pH} = 7{,}00$ ist der Neutralpunkt einer starken Säure mit starker Base; am Äquivalenzpunkt schwacher Säuren liegt der pH-Wert im Basischen, keinesfalls bei 14.",
      "C": "$\\\\text{pH} = 7{,}00$ gilt nur bei der Titration starker Säuren (z. B. $\\\\text{HCl}$); Essigsäure liefert am Äquivalenzpunkt basisches Acetat.",
      "D": "$\\\\text{pH} = 2{,}37$ wäre die Hälfte des $pK_s$-Werts, was mathematisch keinen Bezug zur Henderson-Hasselbalch-Gleichung hat.",
      "B": "Am Halbäquivalenzpunkt herrscht der Pufferbereich im Sauren ($\\\\text{pH} = 4{,}75$), niemals stark alkalisch."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-08-saeuren-basen"
  },
  {
    "id": "CHEM-BMS-GP3-019",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Redox-Reaktionen und Elektrochemie",
    "subtopic": "Disproportionierung vs. Komproportionierung",
    "difficulty": "intermediate",
    "stem": "Was versteht man in der Chemie unter einer Disproportionierungsreaktion (im Vergleich zu einer Komproportionierungsreaktion), und welches Reaktionsbeispiel stellt eine klassische Disproportionierung dar?",
    "options": {
      "A": "Eine Reaktion, bei der zwei verschiedene Elemente ihre Aggregatzustände tauschen.",
      "B": "Eine Redoxreaktion, bei der Atome eines Elements in einer mittleren Oxidationsstufe gleichzeitig oxidiert und reduziert werden, sodass Verbindungen mit zwei verschiedenen Oxidationsstufen (einer höheren und einer niedrigeren) entstehen; z. B. das Einleiten von elementarem Chlorgas ($\\\\text{Cl}_2$, Oxidationsstufe 0) in kalte Natronlauge zu Chlorid ($\\\\text{Cl}^-$, Stufe -I) und Hypochlorit ($\\\\text{ClO}^-$, Stufe +I).",
      "C": "Eine reine Säure-Base-Neutralisation ohne Elektronenübergang.",
      "D": "Eine Reaktion, bei der zwei Atome desselben Elements in unterschiedlichen Oxidationsstufen zu einer gemeinsamen mittleren Oxidationsstufe reagieren (z. B. Bildung von elementarem Schwefel aus $\\\\text{H}_2\\\\text{S}$ und $\\\\text{SO}_2$).",
      "E": "Die vollständige Zersetzung eines Moleküls in isolierte Neutronen und Elektronen."
    },
    "correct_answer": "B",
    "explanation_correct": "Bei einer Disproportionierung dient ein chemisches Element in einer mittleren Oxidationsstufe gleichzeitig als Oxidationsmittel und Reduktionsmittel. In der Reaktion $\\\\text{Cl}_2 + 2\\,\\\\text{OH}^- \\to \\\\text{Cl}^- + \\\\text{ClO}^- + \\\\text{H}_2\\\\text{O}$ hat das Chlor im elementaren $\\\\text{Cl}_2$ die Oxidationszahl $0$. Ein Chloratom wird unter Aufnahme von einem Elektron zu $\\\\text{Cl}^-$ (Oxidationszahl -I) reduziert, während das andere Chloratom unter Abgabe von einem Elektron zu $\\\\text{ClO}^-$ (Oxidationszahl +I) oxidiert wird. Das exakte Gegenteil (Atome eines Elements aus einer höheren und einer niedrigeren Oxidationsstufe reagieren zu einer gemeinsamen mittleren Stufe) heißt Komproportionierung (Synproportionierung).",
    "explanations_incorrect": {
      "A": "Der Tausch von Aggregatzuständen ist ein physikalischer Phasenübergang, keine Redoxreaktion.",
      "C": "Disproportionierung ist zwingend eine Redoxreaktion mit Elektronenübertragung und Änderung der Oxidationszahlen.",
      "E": "Chemische Reaktionen spalten keine Atomkerne in freie Neutronen.",
      "D": "Dies beschreibt die Komproportionierung (Synproportionierung), das genaue Gegenteil der Disproportionierung."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-09-redox"
  },
  {
    "id": "CHEM-BMS-GP3-020",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Redox-Reaktionen und Elektrochemie",
    "subtopic": "Elektrolyse & Faradaysche Gesetze",
    "difficulty": "advanced",
    "stem": "Bei der elektrolytischen Raffination wird an der Kathode reines metallisches Kupfer aus einer wässrigen Kupfer(II)-sulfatlösung ($\\\\text{Cu}^{2+} + 2\\,e^- \\to \\\\text{Cu}\\,\\\\text{(s)}$) abgeschieden. Welches Gewicht an reinem Kupfer ($M = 63{,}55\\,\\\\text{g/mol}$) wird an der Kathode abgeschieden, wenn über einen Zeitraum von exakt $1930\\,\\\\text{Sekunden}$ ein konstanter Strom von $I = 5{,}00\\,\\\\text{A}$ fließt? (Faraday-Konstante $F = 96.500\\,\\\\text{C/mol}$)",
    "options": {
      "A": "$63{,}55\\,\\\\text{g}$",
      "B": "$12{,}71\\,\\\\text{g}$",
      "C": "$3{,}18\\,\\\\text{g}$",
      "D": "$1{,}59\\,\\\\text{g}$",
      "E": "$0{,}635\\,\\\\text{g}$"
    },
    "correct_answer": "C",
    "explanation_correct": "Schritt 1: Berechnung der durchflossenen elektrischen Ladung $Q$: $Q = I \\cdot t = 5{,}00\\,\\\\text{A} \\cdot 1930\\,\\\\text{s} = 9.650\\,\\\\text{C} = 9.650\\,\\\\text{A}\\cdot\\\\text{s}$. Schritt 2: Berechnung der Stoffmenge der transportierten Elektronen $n(e^-)$: $n(e^-) = \\frac{Q}{F} = \\frac{9.650\\,\\\\text{C}}{96.500\\,\\\\text{C/mol}} = 0{,}100\\,\\\\text{mol } e^-$. Schritt 3: Stöchiometrie der Elektrodenreaktion: Zur Reduktion von einem $\\\\text{Cu}^{2+}$-Ion zu elementarem $\\\\text{Cu}$ werden $z = 2$ Elektronen benötigt. Somit entsteht an Kupfer: $n(\\\\text{Cu}) = \\frac{n(e^-)}{z} = \\frac{0{,}100\\,\\\\text{mol}}{2} = 0{,}0500\\,\\\\text{mol }\\\\text{Cu}$. Schritt 4: Berechnung der Masse $m(\\\\text{Cu})$: $m = n \\cdot M = 0{,}0500\\,\\\\text{mol} \\cdot 63{,}55\\,\\\\text{g/mol} = 3{,}1775\\,\\\\text{g} \\approx 3{,}18\\,\\\\text{g}$.",
    "explanations_incorrect": {
      "A": "$63{,}55\\,\\\\text{g}$ entspricht einem vollen Mol Kupfer ($n = 1{,}0\\,\\\\text{mol}$), wofür $2 \\cdot 96.500\\,\\\\text{C} = 193.000\\,\\\\text{C}$ nötig wären.",
      "B": "$12{,}71\\,\\\\text{g}$ resultiert aus einer fehlerhaften Multiplikation mit 4 anstelle der Division durch 2.",
      "D": "$1{,}59\\,\\\\text{g}$ entsteht, wenn fälschlicherweise durch $z = 4$ geteilt wird.",
      "E": "$0{,}635\\,\\\\text{g}$ entsteht durch einen Zehnerpotenzfehler bei der Division durch die Faraday-Konstante."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-09-redox"
  },
  {
    "id": "CHEM-BMS-GP3-021",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Organische Chemie",
    "subtopic": "Chiralität & Enantiomere (Stereozentren)",
    "difficulty": "intermediate",
    "stem": "Welche strukturelle Eigenschaft begründet die optische Aktivität und Chiralität der 2-Hydroxypropansäure (Milchsäure), und wie verhalten sich ihre beiden reinen Enantiomere zueinander?",
    "options": {
      "A": "Milchsäure besitzt genau ein asymmetrisch substituiertes Kohlenstoffatom (Stereozentrum) mit vier verschiedenen Substituenten, wodurch das Molekül keine Spiegelebene aufweist und sich Bild und Spiegelbild nicht zur Deckung bringen lassen; die beiden reinen Enantiomere besitzen identische achirale physikalische Eigenschaften (wie Schmelzpunkt und Dichte), drehen jedoch linear polarisiertes Licht um denselben Betrag in entgegengesetzte Richtungen.",
      "B": "Das Molekül besitzt zwingend eine Kohlenstoff-Kohlenstoff-Dreifachbindung; die Enantiomere haben völlig unterschiedliche Siedepunkte und lassen sich durch einfache Destillation trennen.",
      "C": "Das Molekül enthält eine Spiegelebene; die Enantiomere drehen linear polarisiertes Licht immer in dieselbe Richtung.",
      "D": "Chiralität entsteht ausschließlich durch das Vorhandensein von radioaktiven Kohlenstoff-14-Isotopen.",
      "E": "Enantiomere sind Konstitutionsisomere mit vollkommen unterschiedlicher Atomanordnung und IUPAC-Nomenklatur."
    },
    "correct_answer": "A",
    "explanation_correct": "Ein Molekül ist chiral und optisch aktiv, wenn es keine Drehspiegelachse (insbesondere keine Spiegelebene $\\sigma$ und kein Inversionszentrum $i$) besitzt, sodass es nicht mit seinem Spiegelbild zur Deckung gebracht werden kann. Milchsäure ($\\\\text{CH}_3\\\\text{-C}^*\\\\text{H(OH)-COOH}$) trägt am zentralen $\\\\text{C}^*$-Atom vier verschiedene Substituenten ($-\\\\text{H}$, $-\\\\text{OH}$, $-\\\\text{CH}_3$, $-\\\\text{COOH}$). Moleküle mit genau einem solchen Stereozentrum sind stets chiral (im Gegensatz zu Verbindungen mit mehreren Stereozentren, die durch interne Spiegelebenen als achirale meso-Verbindungen vorliegen können). Die beiden Enantiomere ($R$- und $S$-Milchsäure) verhalten sich wie Bild und Spiegelbild. In achiraler Umgebung stimmen alle skalaren physikalischen Kennzahlen (Schmelzpunkt, Siedepunkt, Dichte, $pK_s$-Wert) exakt überein. In chiraler Umgebung (z. B. an Enzymen) sowie gegenüber linear polarisiertem Licht zeigen sie unterschiedliches Verhalten: Sie drehen die Schwingungsebene des polarisierten Lichts um denselben Winkelbetrag in entgegengesetzte Richtungen ($+$ bzw. $-$).",
    "explanations_incorrect": {
      "B": "Dreifachbindungen ($sp$) sind linear ($180^\\circ$) und führen nicht zu Chiralität; Enantiomere haben identische Siedepunkte und können nicht durch einfache Destillation getrennt werden.",
      "C": "Besitzt ein Molekül eine Spiegelebene, ist es per definitionem achiral (optisch inaktiv, wie meso-Verbindungen).",
      "D": "Chiralität ist eine rein geometrische Eigenschaft der räumlichen Atomanordnung und unabhängig von Isotopen.",
      "E": "Enantiomere besitzen identische Konstitution (gleiche Verknüpfung) und sind Stereoisomere, keine Konstitutionsisomere."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-10-organik"
  },
  {
    "id": "CHEM-BMS-GP3-022",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Organische Chemie",
    "subtopic": "Aromaten & Elektrophile aromatische Substitution (SEAr)",
    "difficulty": "intermediate",
    "stem": "Warum geht Benzol ($\\\\text{C}_6\\\\text{H}_6$) trotz formal dreier Doppelbindungen bevorzugt elektrophile Substitutionsreaktionen ($S_E\\\\text{Ar}$, z. B. Bromierung unter $\\\\text{FeBr}_3$-Katalyse) ein, anstatt wie offenkettige Alkene (z. B. Ethen) spontan elektrophile Additionsreaktionen einzugehen?",
    "options": {
      "A": "Weil Benzol gar keine Kohlenstoff-Kohlenstoff-Bindungen besitzt, sondern aus reinen Stickstoffringen besteht.",
      "B": "Weil die Addition von Brom an Benzol endotherm mit einer Zerstörung aller Wasserstoffatome verlaufen würde.",
      "C": "Weil Benzol ein Feststoff ist, der erst bei $500\\,^\\circ\\\\text{C}$ mit Halogenen in Kontakt treten kann.",
      "D": "Weil das zyklisch delokalisierte $\\pi$-Elektronensextett des Benzolrings eine erhebliche aromatische Resonanzenergie (Mesomeriestabilisierung, ca. $150\\,\\\\text{kJ/mol}$) besitzt, die bei einer Addition irreversibel verloren ginge, während die Substitution unter Re-Aromatisierung das stabile System wiederherstellt.",
      "E": "Weil Benzol keine $\\pi$-Elektronen besitzt, sondern ausschließlich $\\sigma$-Einfachbindungen aufweist."
    },
    "correct_answer": "D",
    "explanation_correct": "Benzol erfüllt die Hückel-Regel ($4n+2\\,\\pi$-Elektronen mit $n=1$, planar, zyklisch durchkonjugiert). Dieses delokalisierte Sextett verleiht dem Molekül eine außergewöhnliche thermodynamische Stabilität (Aromatisierungsenergie ca. $150\\,\\text{kJ/mol}$). Bei einer hypothetischen elektrophilen Addition von Brom würde das konjugierte System zerstört werden; es entstünde ein nicht-aromatisches Cyclohexadien-Derivat mit deutlich höherer Energie. Bei der elektrophilen aromatischen Substitution ($S_E\\text{Ar}$) greift ein starkes Elektrophil ($\\text{Br}^+$ via Lewis-Säure $\\text{FeBr}_3$) den Ring an und bildet das mesomeriestabilisierte Wheland-Intermediat (Arenium-Ion). Durch anschließende Deprotonierung (Abspaltung von $\\text{H}^+$) wird das voll aromatische Sextett sofort regeneriert.",
    "explanations_incorrect": {
      "A": "Benzol ist ein reiner Kohlenwasserstoff ($\\text{C}_6\\text{H}_6$) und enthält keinen Stickstoff.",
      "B": "Wasserstoffatome werden nicht zerstört, sondern als Protonen ($\\text{H}^+$) abgespalten und bilden $\\text{HBr}$.",
      "E": "Benzol besitzt 6 delokalisierte $pi$-Elektronen in überlappenden $p$-Orbitalen ober- und unterhalb der Ringebene.",
      "C": "Benzol ist bei Raumtemperatur eine flüssige Substanz (Schmelzpunkt $5{,}5\\,^\\circ\\text{C}$, Siedepunkt $80\\,^\\circ\\text{C}$)."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-10-organik"
  },
  {
    "id": "CHEM-BMS-GP3-023",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Biochemie und Naturstoffe",
    "subtopic": "Fischer-Projektion & D/L-Nomenklatur von Zuckern",
    "difficulty": "intermediate",
    "stem": "Nach welcher stereochemischen Konvention wird eine Aldohexose (wie D-Glukose) in der offenen Fischer-Projektion formal als 'D-Zucker' klassifiziert?",
    "options": {
      "A": "Daran, dass die wässrige Lösung des Zuckers das linear polarisierte Licht zwingend nach rechts (dextrorotatorisch, $+$) dreht.",
      "B": "Daran, dass die Hydroxylgruppe ($-\\\\text{OH}$) an dem am weitesten von der funktionellen Carbonylgruppe ($\\\\text{C}1$) entfernten chiralen Kohlenstoffatom (beim C-5-Atom der Aldohexosen) in der Standard-Fischer-Projektion nach RECHTS weist.",
      "C": "Daran, dass alle vier chiralen Zentren des Monosaccharids ihre Hydroxylgruppen ausnahmslos nach rechts gerichtet tragen.",
      "D": "Daran, dass der Zucker ausschließlich aus D-Aminosäuren synthetisiert wurde.",
      "E": "Daran, dass die anomere Hydroxylgruppe in der Ringform nach unten (trans zur $\\\\text{CH}_2\\\\text{OH}$-Gruppe) orientiert ist."
    },
    "correct_answer": "B",
    "explanation_correct": "Die D/L-Nomenklatur nach Emil Fischer bezieht sich historisch auf den D-Glycerinaldehyd als Referenzmolekül: In der vertikalen Fischer-Projektion steht die am höchsten oxidierte Gruppe (bei Aldosen die Aldehydgruppe $\\\\text{-CHO}$ am C-1) ganz oben. Die Einstufung als D- oder L-Enantiomer richtet sich ausschließlich nach der Konfiguration am am weitesten von C-1 entfernten stereogenen Zentrum (dem Referenzkohlenstoffatom, bei Hexosen das C-5-Atom). Weist die OH-Gruppe an diesem C-5 nach RECHTS (D = dexter), handelt es sich um einen D-Zucker; weist sie nach LINKS (L = laevus), um einen L-Zucker. Fast alle natürlichen Kohlenhydrate des menschlichen Stoffwechsels gehören der D-Reihe an.",
    "explanations_incorrect": {
      "A": "Die D/L-Nomenklatur ist eine rein relative Konfigurationsbeschreibung und korreliert nicht zwingend mit dem experimentellen Drehsinn ($+$ oder $-$); z. B. ist D-Fructose linksdrehend.",
      "C": "D-Glukose hat am C-3 eine nach links weisende OH-Gruppe (Merkspruch: 'Ta-tü-ta-ta' bzw. R-L-R-R an C2-C5); nicht alle OH-Gruppen weisen nach rechts.",
      "D": "Kohlenhydrate sind Polyhydroxyaldehyde oder -ketone und bestehen nicht aus Aminosäuren.",
      "E": "Die Ausrichtung der anomeren OH-Gruppe ($\\alpha$ oder $\\beta$) beschreibt Anomere, nicht die D/L-Konfiguration des Grundgerüsts."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-11-naturstoffe"
  },
  {
    "id": "CHEM-BMS-GP3-024",
    "subject": "CHEM",
    "section": "BMS",
    "primary_topic": "Biochemie und Naturstoffe",
    "subtopic": "Enzymkinetik: Michaelis-Menten & Hemmtypen",
    "difficulty": "advanced",
    "stem": "Wie verändern sich die kinetischen Parameter Maximalgeschwindigkeit ($v_{\\max}$) und Michaelis-Konstante ($K_m$) einer enzymatischen Reaktion in Gegenwart eines reversiblen kompetitiven Inhibitors?",
    "options": {
      "A": "$v_{\\max}$ sinkt drastisch ab; $K_m$ bleibt exakt unverändert.",
      "B": "Sowohl $v_{\\max}$ als auch $K_m$ sinken um denselben Faktor ab.",
      "C": "$v_{\\max}$ bleibt unverändert, während der scheinbare $K_m$-Wert ansteigt (erfordert höhere Substratkonzentrationen zur Halbsättigung).",
      "D": "Die Enzymaktivität wird völlig irreversibel zerstört, sodass keine Kinetik messbar ist.",
      "E": "$v_{\\max}$ steigt an, während $K_m$ auf null abfällt."
    },
    "correct_answer": "C",
    "explanation_correct": "Ein kompetitiver Hemmstoff ähnelt dem natürlichen Substrat chemisch-strukturell und konkurriert reversibel mit diesem um die Bindung am aktiven Zentrum des freien Enzyms. Mechanistische Konsequenzen: 1. Bei sehr hohen Substratkonzentrationen ($[\\\\text{S}] \\gg [\\\\text{I}]$) wird der Inhibitor durch den Massenwirkungsüberschuss vollständig aus dem aktiven Zentrum verdrängt. Daher bleibt die erreichbare Maximalgeschwindigkeit unverändert ($v_{\\max}^{\\\\text{app}} = v_{\\max}$). 2. Um jedoch die halbmaximale Geschwindigkeit ($v = \\frac{1}{2}v_{\\max}$) zu erreichen, ist eine höhere Substratkonzentration erforderlich. Der scheinbare $K_m$-Wert steigt an ($K_m^{\\\\text{app}} = K_m \\cdot (1 + \\frac{[\\\\text{I}]}{K_i})$). In der Lineweaver-Burk-Auftragung schneiden sich die Geraden auf der Ordinate ($1/v_{\\max}$).",
    "explanations_incorrect": {
      "A": "Eine Senkung von $v_{\\max}$ bei unverändertem $K_m$ ist das typische Merkmal einer reinen nicht-kompetitiven (allosterischen) Hemmung.",
      "B": "Eine proportionale Senkung von $v_{\\max}$ und $K_m$ kennzeichnet eine unkompetitive Hemmung (Inhibitor bindet nur an den [ES]-Komplex).",
      "E": "$v_{\\max}$ kann durch einen Inhibitor niemals ansteigen.",
      "D": "Kompetitive Hemmung ist vollkommen reversibel und zerstört das Enzym nicht kovalent."
    },
    "metadata": {
      "author": "MedAT BMS Chemistry QC Engine",
      "status": "curated_medat_compliant",
      "version": "3.0_gp3"
    },
    "chapter_id": "chem-11-naturstoffe"
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
 * Normalisierte 24 StoredQuestion-Objekte für die MedAT-H Generalprobe #3 Runtime-Engine
 */
export const GENERALPROBE_3_CHEM_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_CHEM_QUESTIONS.map(
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
      subjectId: "chem",
      chapterId: resolvedChapter,
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Chemie", "Generalprobe #3", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "3.0_gp3",
      setOrder: idx + 1,
    };
  }
);
