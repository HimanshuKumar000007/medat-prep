/**
 * MedAT Prep Content Repository & Content QA Framework
 * Structured educational content for MedAT preparation.
 */

import type { ExamType, SectionCode } from "./config";

export type ContentSource =
  | "medat-original"
  | "official-reference"
  | "development-example"
  | "curated-practice";
export type QuestionDifficulty = "Leicht" | "Mittel" | "Schwer";

export interface MedATQuestion {
  id: string;
  exam: "MEDAT-H" | "MEDAT-Z" | "BOTH";
  section: SectionCode;
  subtestId: string;
  chapterId: string;
  topic: string;
  difficulty: QuestionDifficulty;
  questionText: string;
  options: string[];
  correctAnswer: number; // 0..4
  explanation: string;
  tags: string[];
  source: ContentSource;
  version: string;
}

export interface MedATChapter {
  id: string;
  subtestId: string;
  section: SectionCode;
  title: string;
  subtitle: string;
  description: string;
  learningObjectives: string[];
  estimatedMinutes: number;
  tags: string[];
}

export interface MedATLesson {
  id: string;
  chapterId: string;
  section: SectionCode;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  difficulty: QuestionDifficulty;
  keyPoints: string[];
  summary: string;
  source: ContentSource;
}

/* ============================================================
   Content QA & Validation
   ============================================================ */

export function validateQuestionSchema(q: MedATQuestion): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!q.id || typeof q.id !== "string") errors.push("Question missing valid ID.");
  if (!q.section) errors.push(`Question ${q.id}: missing section.`);
  if (!q.questionText || q.questionText.trim().length === 0) errors.push(`Question ${q.id}: empty text.`);
  if (!Array.isArray(q.options) || q.options.length < 2) errors.push(`Question ${q.id}: options must be an array of >= 2 choices.`);
  if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
    errors.push(`Question ${q.id}: invalid correctAnswer index.`);
  }
  if (!q.explanation) errors.push(`Question ${q.id}: missing explanation.`);
  if (!q.source) errors.push(`Question ${q.id}: missing content source classification.`);
  return { valid: errors.length === 0, errors };
}

/* ============================================================
   Canonical Content Definition
   ============================================================ */

export const CHAPTER_CATALOG: MedATChapter[] = [
  // --- BMS Biologie (Offizielle 9 MedAT-H Kapitel) ---
  {
    id: "bio-01-zelle",
    subtestId: "bio",
    section: "BMS",
    title: "Die menschliche Zelle",
    subtitle: "Zellorganellen, Membrantransport, Zellzyklus, Mitose & Meiose",
    description: "Aufbau eukaryotischer Zellen, Organellenfunktion (Mitochondrien, ER, Golgi, Lysosomen, Ribosomen, Zytoskelett), Biomembranen, Diffusion, Osmose, Zellzyklus und Zellteilung.",
    learningObjectives: ["Struktur & Funktion aller Zellorganellen", "Passiver und aktiver Membrantransport (Osmose, Pumpen)", "Ablauf und Phasen von Mitose & Meiose"],
    estimatedMinutes: 35,
    tags: ["Zelle", "Mitochondrien", "Membran", "Mitose", "Meiose", "Zytoskelett"],
  },
  {
    id: "bio-02-koerper",
    subtestId: "bio",
    section: "BMS",
    title: "Der menschliche Körper",
    subtitle: "Gewebearten, Organsysteme, Kreislauf, Atmung, Verdauung, Niere & Nervensystem",
    description: "Epithel-, Binde-, Muskel- und Nervengewebe. Aufbau und Funktion der Organsysteme: Herz-Kreislauf, Blut & Lymphe, Respirationstrakt, Gastrointestinaltrakt, Nierenphysiologie, ZNS/VNS und Hormonsystem.",
    learningObjectives: ["Blutkreislauf, Erregungsleitung des Herzens & Blutgruppen", "Gasaustausch in den Alveolen & Säure-Basen-Pufferung", "Glomeruläre Filtration & Rückresorption im Nephron", "Synaptische Signalübertragung & Hormonachsen"],
    estimatedMinutes: 45,
    tags: ["Anatomie", "Physiologie", "Herz", "Kreislauf", "Niere", "Lunge", "Nervensystem", "Gewebe"],
  },
  {
    id: "bio-03-fruehentwicklung",
    subtestId: "bio",
    section: "BMS",
    title: "Grundlagen der Frühentwicklung des Menschen",
    subtitle: "Gametogenese, Befruchtung, Furchung, Keimblätter & Plazenta",
    description: "Spermatogenese und Oogenese, Befruchtungsvorgang, Furchungsteilungen, Blastozyste, Implantation (Nidation), Entstehung der drei Keimblätter (Ektoderm, Mesoderm, Entoderm) und deren Organderivate sowie Plazenta.",
    learningObjectives: ["Ablauf von Spermatogenese & Oogenese", "Vom Zygote- zum Blastozystenstadium & Einnistung", "Differenzierung der drei Keimblätter in spezifische Gewebe"],
    estimatedMinutes: 30,
    tags: ["Embryologie", "Gametogenese", "Befruchtung", "Keimblätter", "Plazenta", "Ektoderm", "Mesoderm", "Entoderm"],
  },
  {
    id: "bio-04-genetik",
    subtestId: "bio",
    section: "BMS",
    title: "Genetik",
    subtitle: "Klassische Genetik, Mendelsche Regeln & Erbgänge",
    description: "Mendelsche Gesetze (Uniformität, Spaltung, freie Kombination), monohybride und dihybride Erbgänge, autosomal-dominante, autosomal-rezessive und gonosomale Vererbungsmuster sowie Stammbaumanalysen.",
    learningObjectives: ["Anwendung der 3 Mendelschen Regeln", "Stammbaumanalyse & Wahrscheinlichkeitsberechnungen", "Erkennen von Erbgängen (autosomal vs. X-gekoppelt)"],
    estimatedMinutes: 35,
    tags: ["Genetik", "Mendel", "Erbgänge", "Stammbaum", "Allel", "Homozygot", "Heterozygot"],
  },
  {
    id: "bio-05-molgen",
    subtestId: "bio",
    section: "BMS",
    title: "Molekulare Genetik",
    subtitle: "DNA-/RNA-Struktur, Replikation, Transkription, Translation & Genregulation",
    description: "Nukleinsäuren, Doppelhelix, semikonservative Replikation (Polymerasen, Leit-/Folgestrang), Proteinbiosynthese (Transkription, Spleißen, genetischer Code, Translation), Genregulation und molekularbiologische Basistechniken.",
    learningObjectives: ["Molekularer Aufbau von DNA & RNA", "Enzymatischer Ablauf der DNA-Replikation", "Transkription, genetischer Code & Translation an Ribosomen"],
    estimatedMinutes: 40,
    tags: ["DNA", "RNA", "Replikation", "Transkription", "Translation", "Genetischer Code", "Polymerase"],
  },
  {
    id: "bio-06-stoffwechsel",
    subtestId: "bio",
    section: "BMS",
    title: "Zellstoffwechsel & Energiegewinnung",
    subtitle: "ATP, Enzyme, Glykolyse, Citratzyklus, Atmungskette & Fotosynthese",
    description: "Metabolismus (Katabolismus, Anabolismus), ATP-Zyklus, Enzymkatalyse, Zellatmung (Glykolyse, Citratzyklus, Atmungskette), anaerobe Energiegewinnung (Milchsäuregärung), Fett-/Proteinstoffwechsel und Grundlagen der Fotosynthese.",
    learningObjectives: ["Ablauf und Kompartimentierung der Zellatmung", "Funktionsweise von ATP und Enzymen", "Aerobe Zellatmung vs. anaerobe Milchsäuregärung & Fotosynthese-Grundlagen"],
    estimatedMinutes: 40,
    tags: ["Stoffwechsel", "ATP", "Enzyme", "Glykolyse", "Citratzyklus", "Atmungskette", "Fotosynthese", "Milchsäuregärung"],
  },
  {
    id: "bio-07-herzkreislauf",
    subtestId: "bio",
    section: "BMS",
    title: "Herz-Kreislauf-System",
    subtitle: "Herz, Blutgefäße, Blut, Kreisläufe & Hämodynamik",
    description: "Aufbau und Funktion des Herzens, Herzklappen, Blutfluss, Lungen- und Körperkreislauf, Arterien, Venen, Kapillaren, Blutbestandteile (Erythrozyten, Leukozyten, Thrombozyten), Hämoglobin, Herzzyklus und Blutdruckregulation.",
    learningObjectives: ["Anatomie des Herzens und Klappenfunktion", "Blutfluss durch Lungen- und Körperkreislauf", "Zusammensetzung des Blutes und Gas-/Stoffaustausch"],
    estimatedMinutes: 40,
    tags: ["Herz", "Kreislauf", "Blut", "Gefäße", "Hämoglobin", "Erythrozyten", "Blutdruck"],
  },
  {
    id: "bio-08-atmung",
    subtestId: "bio",
    section: "BMS",
    title: "Atmungssystem",
    subtitle: "Atemwege, Lunge, Ventilation, Gasaustausch & Atemmechanik",
    description: "Aufbau und Funktion der Atemwege, Lungenflügel, Alveolen, Blut-Luft-Schranke, Surfactant, Pleura, Atemmechanik (Zwerchfell, Thoraxdruck, Boyle-Mariotte), äußere und innere Atmung, Sauerstoff- und Kohlendioxidtransport sowie Atemregulation.",
    learningObjectives: ["Anatomie der oberen und unteren Atemwege", "Mechanik der Inspiration und Exspiration (Zwerchfell, Pleura)", "Gasaustausch an den Alveolen und O2-/CO2-Transport im Blut"],
    estimatedMinutes: 40,
    tags: ["Atmung", "Lunge", "Alveolen", "Gasaustausch", "Zwerchfell", "Pleura", "Surfactant", "Hämoglobin", "Ventilation"],
  },
  {
    id: "bio-09-nervensystem",
    subtestId: "bio",
    section: "BMS",
    title: "Nervensystem",
    subtitle: "Neurone, Erregungsleitung, Synapsen, ZNS, PNS, Gehirn & Sinnesorgane",
    description: "Aufbau von Nervenzellen (Soma, Dendriten, Axon, Myelinscheide), Membranruhepotenzial, Aktionspotenzial, kontinuierliche und saltatorische Erregungsleitung, chemische Synapsen, Neurotransmitter, EPSP/IPSP, Reflexe, Rückenmark, Gehirnabschnitte (Großhirn, Kleinhirn, Hirnstamm) und Sinnesrezeptoren.",
    learningObjectives: ["Struktur von Neuronen und Entstehung des Aktionspotenzials", "Mechanismen der synaptischen Signalübertragung & Summation", "Gliederung des Nervensystems (ZNS vs. PNS, Gehirnabschnitte, Reflexbogen)"],
    estimatedMinutes: 45,
    tags: ["Nervensystem", "Neuron", "Aktionspotenzial", "Synapse", "Neurotransmitter", "Gehirn", "Rückenmark", "Reflex", "ZNS", "PNS"],
  },

  // --- BMS Chemie (13 offizielle MedAT-Kapitel) ---
  {
    id: "chem-01-atombau",
    subtestId: "chem",
    section: "BMS",
    title: "Atombau & Periodensystem",
    subtitle: "Elementarteilchen, Atommodelle, Quantenzahlen & Periodizität",
    description: "Aufbau der Atome (Protonen, Neutronen, Elektronen), Isotope, Bohrsches Atommodell, Orbitalmodell (s-, p-, d-Orbitale), Quantenzahlen, Pauli-Prinzip, Hundsche Regel, Aufbauprinzip und periodische Trends (Atomradius, Ionisierungsenergie, Elektronenaffinität, Elektronegativität).",
    learningObjectives: ["Elementarteilchen & Nukleonenzahlen bestimmen", "Elektronenkonfiguration nach Pauli & Hund ableiten", "Periodische Gesetzmäßigkeiten im PSE vorhersagen"],
    estimatedMinutes: 30,
    tags: ["Atombau", "Protonen", "Elektronen", "Neutronen", "Orbitale", "PSE", "Elektronegativität", "Quantenzahlen"],
  },
  {
    id: "chem-02-strahlung",
    subtestId: "chem",
    section: "BMS",
    title: "Mikrokosmos & elektromagnetische Strahlung",
    subtitle: "Photonenenergie, Lichtspektrum, Anregung & Linienspektren",
    description: "Welle-Teilchen-Dualismus, elektromagnetisches Spektrum (UV, VIS, IR), Photonenenergie (E = h·f), Planck-Konstante, Absorption und Emission von Licht, Anregung von Elektronen und atomare Linienspektren.",
    learningObjectives: ["Zusammenhang von Wellenlänge, Frequenz und Photonenenergie", "Absorption und Emission im Atommodell", "Berechnung von Quantensprüngen"],
    estimatedMinutes: 25,
    tags: ["Strahlung", "Photonen", "Licht", "Planck", "Frequenz", "Wellenlänge", "Linienspektrum"],
  },
  {
    id: "chem-03-gase",
    subtestId: "chem",
    section: "BMS",
    title: "Gasgesetze & Aggregatzustände",
    subtitle: "Ideales Gasgesetz, Phasenübergänge & Phasendiagramme",
    description: "Zustandsgrößen (Druck, Volumen, Temperatur), Ideales Gasgesetz (p·V = n·R·T), Gasgesetze von Boyle-Mariotte, Gay-Lussac und Amontons, Normalbedingungen und molares Gasvolumen (22,4 L/mol), kinetische Gastheorie, Aggregatzustände, Phasenumwandlungen, Dampfdruck, Tripelpunkt und Phasendiagramme.",
    learningObjectives: ["Ideales Gasgesetz ohne Taschenrechner anwenden", "Zustandsänderungen isobar, isochor und isotherm berechnen", "Phasendiagramme von Reinstoffen interpretieren"],
    estimatedMinutes: 30,
    tags: ["Gasgesetz", "Druck", "Volumen", "Temperatur", "Aggregatzustand", "Phasendiagramm", "Molvolumen"],
  },
  {
    id: "chem-04-bindungen",
    subtestId: "chem",
    section: "BMS",
    title: "Chemische Bindungen",
    subtitle: "Kovalente Bindung, Ionenbindung, Metallbindung & zwischenmolekulare Kräfte",
    description: "Oktettregel, kovalente Bindung (Einfach-, Doppel-, Dreifachbindung), polare und unpolare Bindungen, Dipolmoment, Lewis-Formeln, Ionenbindung (Gitterenergie, Solvatation), Metallbindung (Elektronengasmodell) sowie zwischenmolekulare Wechselwirkungen (Van-der-Waals-Kräfte, Dipol-Dipol-Kräfte, Wasserstoffbrücken).",
    learningObjectives: ["Bindungstypen anhand von Elektronegativitätsdifferenzen zuordnen", "Lewis-Schreibweise und räumlichen Molekülbau ableiten", "Einfluss von Wasserstoffbrücken auf Schmelz- und Siedepunkte"],
    estimatedMinutes: 30,
    tags: ["Bindung", "Kovalent", "Ionenbindung", "Dipol", "Wasserstoffbrücke", "Van-der-Waals", "Lewis"],
  },
  {
    id: "chem-05-stoechiometrie",
    subtestId: "chem",
    section: "BMS",
    title: "Chemische Reaktionen & Stöchiometrie",
    subtitle: "Reaktionsgleichungen, Stoffmenge, Konzentrationen & Mischungsrechnen",
    description: "Aufstellen und Ausgleichen von Reaktionsgleichungen, Erhaltung von Masse und Ladung, Stoffmenge (n = m/M), Avogadro-Konstante, molare Masse, Stoffmengenkonzentration (Molarität c = n/V), Massenanteil (w), Dichte, stöchiometrische Ausbeute, limitierende Reagenzien und Verdünnungsreihen.",
    learningObjectives: ["Reaktionsgleichungen stöchiometrisch korrekt ausgleichen", "Stoffmengen, Massen und Volumina im Kopf berechnen", "Mischungs- und Verdünnungsrechnungen lösen"],
    estimatedMinutes: 35,
    tags: ["Stöchiometrie", "Molare Masse", "Stoffmenge", "Mol", "Konzentration", "Mischungskreuz", "Ausbeute"],
  },
  {
    id: "chem-06-gleichgewicht",
    subtestId: "chem",
    section: "BMS",
    title: "Chemisches Gleichgewicht & Reaktionskinetik",
    subtitle: "Massenwirkungsgesetz, Prinzip von Le Chatelier & Kinetik",
    description: "Reversible Reaktionen, dynamisches Gleichgewicht, Massenwirkungsgesetz (MWG, Gleichgewichtskonstante K), Prinzip des kleinsten Zwangs (Le Chatelier: Druck-, Temperatur- und Konzentrationseinfluss), exotherme vs. endotherme Reaktionen, Reaktionsgeschwindigkeit, Stoßtheorie, Aktivierungsenergie und Katalysatoren.",
    learningObjectives: ["Massenwirkungsgesetz formulieren und K interpretieren", "Gleichgewichtsverschiebungen nach Le Chatelier vorhersagen", "Rolle von Katalysatoren und Aktivierungsenergie verstehen"],
    estimatedMinutes: 35,
    tags: ["Gleichgewicht", "MWG", "Le Chatelier", "Kinetik", "Aktivierungsenergie", "Katalysator"],
  },
  {
    id: "chem-07-elemente",
    subtestId: "chem",
    section: "BMS",
    title: "Elemente & wichtige Verbindungen",
    subtitle: "Hauptgruppen, anorganische Stoffklassen, Wasser & Kohlenstoff",
    description: "Chemie der Hauptgruppenelemente: Alkalimetalle, Erdalkalimetalle, Borgruppe, Kohlenstoffgruppe, Stickstoffgruppe, Chalkogene, Halogene und Edelgase. Wichtige Verbindungen: Oxide, Hydroxide, Hydride, Säuren und Salze. Wasser und seine Anomalie, Kohlenstoffallotrope (Graphit, Diamant).",
    learningObjectives: ["Eigenschaften charakteristischer Elementfamilien kennen", "Wichtige Salze, Oxide und Säuren klassifizieren", "Physikalische und chemische Besonderheiten des Wassers erklären"],
    estimatedMinutes: 30,
    tags: ["Elemente", "Hauptgruppen", "Metalle", "Halogene", "Edelgase", "Wasser", "Oxide", "Salze"],
  },
  {
    id: "chem-08-saeuren-basen",
    subtestId: "chem",
    section: "BMS",
    title: "Säure-Base-Reaktionen",
    subtitle: "Brønsted-Theorie, pH-Wert, Autoprotolyse & Puffersysteme",
    description: "Brønsted-Lowry-Säure-Base-Konzept, konjugierte Säure-Base-Paare, Ampholyte, Autoprotolyse des Wassers und Ionenprodukt (Kw), pH- und pOH-Definition, Säure- und Basenkonstanten (Ks, Kb, pKs, pKb), pH-Berechnung starker und schwacher Säuren, Neutralisation, Titration und Puffersysteme (Henderson-Hasselbalch, Bicarbonatpuffer im Blut).",
    learningObjectives: ["pH-Wert-Berechnungen ohne Taschenrechner durchführen", "Pufferkapazität und Funktionsweise von Puffern erklären", "Neutralisations- und Titrationskurven analysieren"],
    estimatedMinutes: 35,
    tags: ["Säure", "Base", "pH-Wert", "Brønsted", "Puffer", "Henderson-Hasselbalch", "Autoprotolyse", "Titration"],
  },
  {
    id: "chem-09-redox",
    subtestId: "chem",
    section: "BMS",
    title: "Redox-Reaktionen & Elektrochemie",
    subtitle: "Oxidationszahlen, Redoxpaare, galvanische Elemente & Elektrolyse",
    description: "Oxidationszahlen bestimmen, Oxidation als Elektronenabgabe, Reduktion als Elektronenaufnahme, Aufstellen von Teilgleichungen und Redox-Gesamtgleichungen (sauer/basisch), Redoxreihe der Metalle, Standard-Redoxpotenziale (E°), Galvanische Zelle (Daniell-Element), Elektrolyse und Faradaysche Gesetze.",
    learningObjectives: ["Oxidationszahlen in anorganischen und organischen Molekülen sicher bestimmen", "Redoxreaktionen schrittweise ausgleichen", "Funktionsweise galvanischer Zellen und Elektrolysen erklären"],
    estimatedMinutes: 35,
    tags: ["Redox", "Oxidationszahl", "Oxidation", "Reduktion", "Elektrochemie", "Galvanisch", "Elektrolyse"],
  },
  {
    id: "chem-10-organik",
    subtestId: "chem",
    section: "BMS",
    title: "Organische Chemie",
    subtitle: "Kohlenwasserstoffe, funktionelle Gruppen, IUPAC-Nomenklatur & Isomerie",
    description: "Kohlenstoff als Bindungselement (sp3, sp2, sp-Hybridisierung), Alkane, Alkene, Alkine, Aromaten (Benzol, Aromatizität), funktionelle Gruppen: Alkohole, Thiole, Ether, Aldehyde, Ketone, Carbonsäuren, Ester, Amine und Amide. IUPAC-Nomenklatur, Isomeriearten (Konstitutionsisomerie, Stereoisomerie: Enantiomere, Diastereomere, cis/trans-Isomerie, Chiralitätszentren).",
    learningObjectives: ["Funktionelle Gruppen erkennen und IUPAC-Namen ableiten", "Isomerieformen präzise unterscheiden und Chiralität bestimmen", "Typische Reaktionsklassen (Substitution, Addition, Eliminierung) zuordnen"],
    estimatedMinutes: 40,
    tags: ["Organik", "Kohlenwasserstoffe", "Funktionelle Gruppen", "Isomerie", "Chiralität", "IUPAC", "Alkane", "Alkohole", "Carbonsäuren"],
  },
  {
    id: "chem-11-naturstoffe",
    subtestId: "chem",
    section: "BMS",
    title: "Naturstoffe",
    subtitle: "Kohlenhydrate, Lipide, Aminosäuren, Proteine & Nukleinsäuren",
    description: "Struktur und Funktion der biologischen Makromoleküle: Kohlenhydrate (Monosaccharide: Glucose, Fructose; Disaccharide: Saccharose, Lactose; Polysaccharide: Stärke, Glykogen, Cellulose; D/L-Konfiguration, Fischer- und Haworth-Projektion), Lipide (Fettsäuren, Triglyceride, Phospholipide, Steroide), Aminosäuren (Zwitterion, isoelektrischer Punkt, Peptidbindung, Primär- bis Quartärstruktur von Proteinen) und Nukleinsäuren (Nukleoside, Nukleotide, DNA-Doppelhelix, RNA-Typen).",
    learningObjectives: ["Strukturmerkmale von Kohlenhydraten, Lipiden und Proteinen unterscheiden", "Peptidbindung und Proteinarchitektur erklären", "Aufbau von Nukleinsäuren und Basenpaarung beschreiben"],
    estimatedMinutes: 40,
    tags: ["Naturstoffe", "Kohlenhydrate", "Glucose", "Lipide", "Aminosäuren", "Peptide", "Proteine", "Nukleinsäuren", "DNA"],
  },
  {
    id: "chem-12-integriert",
    subtestId: "chem",
    section: "BMS",
    title: "Integrierte Chemie / BMS-Anwendung",
    subtitle: "Medizinrelevante Chemie, Osmose, Elektrolyte & Blutgase",
    description: "Synthese und Transfer chemischer Konzepte auf humanbiologische und medizinische Systeme: Osmotischer Druck, Kolloidosmotischer Druck, Elektrolythaushalt (Na+, K+, Ca2+, Cl-), Blutgase (pO2, pCO2, O2-Sättigung), Sauerstofftransport und Hämoglobin-Bindungskurve, Säure-Basen-Haushalt im Blut (respiratorische vs. metabolische Azidose/Alkalose) und bioenergetische Kopplung (ATP-Hydrolyse).",
    learningObjectives: ["Chemische Prinzipien in biologischen Systemen anwenden", "Azidose und Alkalose anhand von pH- und Gasmesswerten differenzieren", "Osmose und kolloidosmotische Druckverhältnisse im Körper erklären"],
    estimatedMinutes: 40,
    tags: ["Medizin", "Osmose", "Elektrolyte", "Blutgase", "Azidose", "Alkalose", "Hämoglobin", "Bioenergetik", "ATP"],
  },
  {
    id: "chem-13-simulation",
    subtestId: "chem",
    section: "BMS",
    title: "Gemischte MedAT-Simulation",
    subtitle: "Vollwertige Prüfungssimulation über alle Chemie-Themen",
    description: "Repräsentative, getaktete Testsimulation mit 24 chemischen Originalaufgaben nach exaktem MedAT-Schlüssel. Deckt alle 12 Fachkapitel ausgewogen ab, testet Schnelligkeit, Präzision beim Kopfrechnen und souveränes Ausschließen von Distraktoren unter realen Prüfungsbedingungen.",
    learningObjectives: ["Zeitmanagement für 24 Chemiefragen trainieren", "Transferwissen unter Prüfungsstress abrufen", "Sicheres Kopfrechnen und Distraktoren-Ausschluss meistern"],
    estimatedMinutes: 40,
    tags: ["Simulation", "MedAT", "Generalprobe", "Prüfungsmodus", "Kopfrechnen", "Chemie"],
  },

  // --- BMS Physik (7 offizielle VMC MedAT-Kapitel) ---
  {
    id: "phys-01-groessen-einheiten",
    subtestId: "phys",
    section: "BMS",
    title: "Größen und Einheiten",
    subtitle: "SI-Einheiten, Zehnerpotenzen, Umrechnungen & Vektoren",
    description: "Physikalische Basisgrößen und SI-Basiseinheiten, abgeleitete Einheiten, Dezimalpräfixe (Zehnerpotenzen), Einheitenumrechnung, Dimensionsanalyse sowie Skalare vs. vektorielle Größen.",
    learningObjectives: [
      "Die 7 SI-Basiseinheiten (m, kg, s, A, K, mol, cd) und wichtige abgeleitete Einheiten (N, J, W, Pa, C, V, T, Bq) fehlerfrei zuordnen",
      "Einheitenvorsätze (Femto bis Tera) und Zehnerpotenzen im Kopfrechnen ohne Hilfsmittel sicher handhaben",
      "Physikalische Größen in Skalare (Masse, Energie, Zeit) und Vektoren (Kraft, Geschwindigkeit, Feldstärke) differenzieren und Einheitenumrechnungen souverän durchführen",
    ],
    estimatedMinutes: 25,
    tags: ["SI-Einheiten", "Größen", "Präfixe", "Zehnerpotenzen", "Vektoren", "Skalare", "Einheitenumrechnung"],
  },
  {
    id: "phys-02-mechanik",
    subtestId: "phys",
    section: "BMS",
    title: "Mechanik",
    subtitle: "Kinematik, Dynamik, Erhaltungssätze & Fluiddynamik",
    description: "Translation und Rotation, Newtonsche Axiome, Kräfte, Reibung, Arbeit, Energie, Leistung, Impuls, Erhaltungssätze sowie Hydrostatik (Dichte, Schweredruck, Auftrieb) und Hydrodynamik (Kontinuitätsgleichung, Bernoulli).",
    learningObjectives: [
      "Gleichförmige und gleichmäßig beschleunigte Bewegungen, freien Fall und Kreisbewegungen rechnerisch analysieren",
      "Newtonsche Axiome (F = m·a, Actio = Reactio), Kräftegleichgewichte und Reibungskräfte anwenden",
      "Energie- und Impulserhaltungssatz, mechanische Arbeit und Leistung berechnen sowie hydrostatischen Druck, Auftrieb (Archimedes) und Bernoulli-Gleichung verstehen",
    ],
    estimatedMinutes: 35,
    tags: ["Mechanik", "Kinematik", "Dynamik", "Newton", "Energie", "Impuls", "Auftrieb", "Bernoulli", "Hydrostatik"],
  },
  {
    id: "phys-03-schwingungen-wellen",
    subtestId: "phys",
    section: "BMS",
    title: "Schwingungen und Wellen",
    subtitle: "Harmonische Schwingungen, Pendel, Wellenausbreitung, Interferenz & Akustik",
    description: "Periodische Vorgänge, Kenngrößen harmonischer Schwingungen (Amplitude, Frequenz, Periodendauer), Feder- und Fadenpendel, Resonanz, Transversal- und Longitudinalwellen, fundamentale Wellengleichung, Interferenz, stehende Wellen, Beugung, Schallausbreitung und Doppler-Effekt.",
    learningObjectives: [
      "Harmonische Schwingungen und Pendelgleichungen (Federpendel, Fadenpendel) quantitativ und qualitativ anwenden",
      "Die fundamentale Wellengleichung c = λ·f sicher handhaben und Wellenphänomene (Interferenz, Beugung, stehende Wellen) erklären",
      "Akustische Kenngrößen (Schallgeschwindigkeit, Frequenz/Tonhöhe, Lautstärkepegel in dB) und den Doppler-Effekt beherrschen",
    ],
    estimatedMinutes: 30,
    tags: ["Schwingungen", "Wellen", "Harmonische Schwingung", "Pendel", "Interferenz", "Akustik", "Doppler-Effekt", "Resonanz"],
  },
  {
    id: "phys-04-waermelehre",
    subtestId: "phys",
    section: "BMS",
    title: "Wärmelehre (Thermodynamik)",
    subtitle: "Temperatur, Wärmekapazität, Phasenübergänge, Gasgesetze & Hauptsätze",
    description: "Temperaturskalen, thermische Ausdehnung, spezifische Wärmekapazität, Kalorimetrie, Aggregatzustände und latente Phasenübergangswärmen, ideales Gasgesetz (isotherm, isobar, isochor), 1. und 2. Hauptsatz der Thermodynamik, Wärmetransport und osmotischer Druck.",
    learningObjectives: [
      "Temperaturumrechnungen (Kelvin, Celsius) und Wärmemengenberechnungen (Q = m·c·ΔT) fehlerfrei durchführen",
      "Das ideale Gasgesetz p·V = n·R·T und Gasprozesse (Boyle-Mariotte, Gay-Lussac, Amontons) anwenden",
      "Phasenübergänge (Schmelz-, Verdampfungswärme), Hauptsätze der Thermodynamik, Wärmetransportmechanismen und osmotischen Druck (Van-'t-Hoff) verstehen",
    ],
    estimatedMinutes: 30,
    tags: ["Wärmelehre", "Thermodynamik", "Temperatur", "Ideales Gasgesetz", "Phasenübergänge", "Entropie", "Osmotischer Druck"],
  },
  {
    id: "phys-05-elektrizitaet",
    subtestId: "phys",
    section: "BMS",
    title: "Elektrizitätslehre & Magnetismus",
    subtitle: "Elektrostatik, Gleichstromkreise, Kirchhoff-Regeln, Magnetismus & Induktion",
    description: "Elektrische Ladung, Coulomb-Gesetz, elektrisches Feld, Potenzial, Spannung, Kondensatoren und Kapazität, Gleichstrom, Ohmsches Gesetz, elektrische Arbeit und Leistung, Kirchhoffsche Regeln, Magnetfelder, Lorentzkraft, elektromagnetische Induktion und Grundlagen des Wechselstroms.",
    learningObjectives: [
      "Coulomb-Gesetz, elektrisches Feld und Kondensatorschaltungen (Reihe & Parallel) berechnen",
      "Gleichstromkreise mit dem Ohmschen Gesetz, Widerstandsschaltungen und den Kirchhoffschen Regeln lösen",
      "Magnetische Kräfte (Lorentzkraft F = q·v·B), elektromagnetische Induktion (Faraday, Lenzsche Regel) und Wechselstromgrößen (Effektivwerte) verstehen",
    ],
    estimatedMinutes: 35,
    tags: ["Elektrizitätslehre", "Elektrostatik", "Coulomb", "Ohmsches Gesetz", "Kirchhoff", "Magnetismus", "Lorentzkraft", "Induktion"],
  },
  {
    id: "phys-06-optik",
    subtestId: "phys",
    section: "BMS",
    title: "Optik",
    subtitle: "Geometrische Optik, Brechung, Linsen, das menschliche Auge & Wellenoptik",
    description: "Lichtausbreitung, Reflexion, Brechungsgesetz von Snellius, Totalreflexion, ebene und gekrümmte Spiegel, Sammel- und Zerstreuungslinsen, Linsengleichung, Brechkraft in Dioptrien, das menschliche Auge als optisches System, Fehlsichtigkeiten (Myopie, Hyperopie) und Dispersion, Interferenz sowie Polarisation.",
    learningObjectives: [
      "Snelliussches Brechungsgesetz und Totalreflexion sicher anwenden",
      "Abbildungen mit Sammel- und Zerstreuungslinsen über die Linsengleichung (1/f = 1/g + 1/b) und Brechkraft (D = 1/f) berechnen",
      "Den optischen Apparat des menschlichen Auges, Akkommodation, Kurz-/Weitsichtigkeit und optische Phänomene (Dispersion, Polarisation) beherrschen",
    ],
    estimatedMinutes: 30,
    tags: ["Optik", "Geometrische Optik", "Brechung", "Totalreflexion", "Linsengleichung", "Dioptrien", "Auge", "Wellenoptik", "Polarisation"],
  },
  {
    id: "phys-07-atom-kernphysik",
    subtestId: "phys",
    section: "BMS",
    title: "Atom- und Kernphysik",
    subtitle: "Atommodelle, Radioaktivität, Zerfallsgesetz, Kernkräfte & Strahlenschutz",
    description: "Rutherfordsches und Bohrsches Atommodell, diskrete Energieniveaus, Emission und Absorption von Photonen (E = h·f), Aufbau des Atomkerns, Isotope, Massendefekt und Kernbindung, radioaktive Zerfallsarten (Alpha, Beta, Gamma), Zerfallsgesetz und Halbwertszeit, Kernspaltung, Kernfusion sowie ionisierende Strahlung, Dosimetrie und Strahlenschutz.",
    learningObjectives: [
      "Atomaufbau, Bohrsches Atommodell und Photonensprung / Energieniveaus (E = h·f) verstehen",
      "Radioaktive Zerfallsarten (α, β⁻, β⁺, γ) und Kernreaktionsgleichungen fehlerfrei aufstellen",
      "Zerfallsgesetz und Halbwertszeiten im Kopf berechnen sowie Strahlungsarten, Dosimetrie (Gray, Sievert) und Strahlenschutzmaßnahmen differenzieren",
    ],
    estimatedMinutes: 30,
    tags: ["Atomphysik", "Kernphysik", "Radioaktivität", "Halbwertszeit", "Zerfallsgesetz", "Bohrsches Atommodell", "Strahlenschutz", "Ionisierende Strahlung"],
  },

  // --- BMS Mathematik (6 offizielle MedAT-Kapitel) ---
  {
    id: "math-01-zehnerpotenzen",
    subtestId: "math",
    section: "BMS",
    title: "Zehnerpotenzen",
    subtitle: "Präfixe & Rechenbeispiele",
    description: "Grundlagen der Zehnerpotenzen mit ganzzahligen Exponenten, wissenschaftliche Notation, SI-Präfixe (Tera bis Femto) und schnelle Kopfrechenbeispiele ohne Taschenrechner.",
    learningObjectives: [
      "Zehnerpotenzen mit positiven und negativen Exponenten sicher multiplizieren und dividieren",
      "SI-Präfixe (kilo, mega, giga, milli, mikro, nano, piko) im Schlaf anwenden",
      "Zahlen in wissenschaftliche Notation (a · 10^k) überführen und vereinfachen"
    ],
    estimatedMinutes: 20,
    tags: ["Zehnerpotenzen", "Präfixe", "SI-Präfixe", "Wissenschaftliche Notation", "Kopfrechnen", "Exponenten"],
  },
  {
    id: "math-02-algebra",
    subtestId: "math",
    section: "BMS",
    title: "Algebra",
    subtitle: "Schlussrechnung, Prozentrechnung, Bruchrechnung & Gleichungen / Ungleichungen",
    description: "Grundrechenarten, Bruchrechnen (Erweitern, Kürzen, Kehrwert, Addition/Multiplikation), Prozent- und Promillerechnung, Dreisatz (direkt und indirekt proportional), lineare und quadratische Gleichungen sowie Ungleichungen.",
    learningObjectives: [
      "Bruchrechnungen und Doppelbrüche blitzschnell im Kopf vereinfachen",
      "Prozentwert, Grundwert und Prozentsatz bei Zu-/Abnahmen sicher berechnen",
      "Schlussrechnung (Dreisatz) für direkte und antiproportionale Zusammenhänge aufstellen",
      "Gleichungen und Ungleichungen nach gesuchten Variablen auflösen"
    ],
    estimatedMinutes: 30,
    tags: ["Algebra", "Schlussrechnung", "Dreisatz", "Prozentrechnung", "Bruchrechnung", "Gleichungen", "Ungleichungen"],
  },
  {
    id: "math-03-geometrie",
    subtestId: "math",
    section: "BMS",
    title: "Geometrie",
    subtitle: "Winkel, Kreis, Rechteck, Dreieck, Prisma, Quader, Zylinder, Kugel, Pyramide & Tetraeder",
    description: "Winkelarten und Winkelsummen. Planimetrie: Dreiecke (Pythagoras, Fläche), Vierecke (Rechteck, Quadrat, Trapez) und Kreis (Umfang, Fläche). Stereometrie: Volumen, Mantelfläche und Oberfläche von Prisma, Quader, Zylinder, Kugel, Pyramide und Tetraeder.",
    learningObjectives: [
      "Winkelbeziehungen an Geradenkreuzungen und in Dreiecken anwenden",
      "Flächen- und Umfangsberechnungen von Dreieck, Rechteck und Kreis durchführen",
      "Volumen- und Oberflächenformeln für 3D-Körper (Quader, Zylinder, Kugel, Pyramide, Tetraeder) beherrschen"
    ],
    estimatedMinutes: 35,
    tags: ["Geometrie", "Winkel", "Kreis", "Rechteck", "Dreieck", "Prisma", "Quader", "Zylinder", "Kugel", "Pyramide", "Tetraeder"],
  },
  {
    id: "math-04-einheiten",
    subtestId: "math",
    section: "BMS",
    title: "Einheiten",
    subtitle: "Zeit, Länge, Flächen, Volumina & Umrechnungen",
    description: "SI-Basiseinheiten und abgeleitete Einheiten. Schnelle Umrechnungen von Zeiteinheiten, Längenmaßen, Flächenmaßen (Faktor 100), Volums- und Hohlmaßen (Faktor 1000, m³ in Liter, ml in cm³) sowie Dichte und Geschwindigkeit (km/h in m/s).",
    learningObjectives: [
      "SI-Einheiten und deren Zusammensetzung verstehen",
      "Flächenmaße (m², dm², cm², mm²) und Raummaße (m³, Liter, ml, cm³) fehlerfrei umrechnen",
      "Geschwindigkeits- und Dichteumrechnungen im Kopf durchführen"
    ],
    estimatedMinutes: 25,
    tags: ["Einheiten", "Zeit", "Länge", "Flächen", "Volumina", "Umrechnungen", "Liter", "SI-System"],
  },
  {
    id: "math-05-funktionen",
    subtestId: "math",
    section: "BMS",
    title: "Funktionen",
    subtitle: "Winkelfunktionen, e-Funktion, Logarithmus, Potenzfunktion, Differential, Integral & Geradenfunktion",
    description: "Lineare Geradenfunktion (y = kx + d, Steigung, Orthogonalität), Potenz- und Wurzelfunktionen, e-Funktion und Wachstum/Zerfall, Logarithmengesetze (ln, log10), trigonometrische Winkelfunktionen (Sinus, Kosinus, Tangens) sowie elementare Differential- und Integralrechnung.",
    learningObjectives: [
      "Steigung und Achsenabschnitt linearer Funktionen analysieren",
      "Logarithmengesetze für Kopfrechenaufgaben anwenden",
      "Werte von Sinus, Kosinus und Tangens an Schlüsselwinkeln kennen",
      "Grundableitungen und einfache Stammfunktionen bilden"
    ],
    estimatedMinutes: 35,
    tags: ["Funktionen", "Winkelfunktionen", "e-Funktion", "Logarithmus", "Potenzfunktion", "Differential", "Integral", "Geradenfunktion"],
  },
  {
    id: "math-06-vektorrechnung",
    subtestId: "math",
    section: "BMS",
    title: "Vektorrechnung",
    subtitle: "Betrag, Winkel, Einheitsvektor, Normalvektor, Vektoraddition / -subtraktion & Skalarprodukt",
    description: "Vektoren im 2D- und 3D-Raum, graphische und rechnerische Vektoraddition/-subtraktion, Betrag (Vektorlänge), Einheitsvektor, Normalvektor, Skalarprodukt, Orthogonalitätsbedingung und Winkelberechnung.",
    learningObjectives: [
      "Betrag von 2D- und 3D-Vektoren mittels Satz des Pythagoras berechnen",
      "Vektoraddition, Vektorsubtraktion und skalare Multiplikation durchführen",
      "Skalarprodukt bilden und Orthogonalität zweier Vektoren überprüfen",
      "Einheitsvektor und Normalvektor konstruieren"
    ],
    estimatedMinutes: 30,
    tags: ["Vektorrechnung", "Betrag", "Winkel", "Einheitsvektor", "Normalvektor", "Vektoraddition", "Vektorsubtraktion", "Skalarprodukt"],
  },

  // --- KFF Task Groups ---
  {
    id: "kff-fig-l1",
    subtestId: "kff-fig",
    section: "KFF",
    title: "Figuren zusammensetzen — Grundlagen",
    subtitle: "Schnittmuster, Kanten & Mentale Rotation",
    description: "Strategien zum schnellen Abgleich von geometrischen Teilflächen unter Zeitdruck.",
    learningObjectives: ["Ausschlussprinzip nach Kantenlängen", "Identifikation markanter Winkel"],
    estimatedMinutes: 20,
    tags: ["KFF", "Figuren", "Rotation"],
  },
  {
    id: "kff-num-arith",
    subtestId: "kff-num",
    section: "KFF",
    title: "Zahlenfolgen — Operatoren & Muster",
    subtitle: "Arithmetische, alternierende & verschachtelte Reihen",
    description: "Systematische Bestimmung von Differenz- und Faktorfolgen in Zahlenreihen.",
    learningObjectives: ["Erkennen zweigliedriger Differenzketten", "Umgang mit alternierenden Vorzeichen"],
    estimatedMinutes: 20,
    tags: ["KFF", "Zahlenreihen"],
  },
  {
    id: "kff-wf-basic",
    subtestId: "kff-wf",
    section: "KFF",
    title: "Wortflüssigkeit (WF)",
    subtitle: "MedAT-orientierte Simulationen: 15 Aufgaben in 20 Minuten",
    description: "MedAT-orientierte WF-Simulationen unter realistischen Prüfungsbedingungen: Schnelle lexikalische Rekonstruktion aus ungeordneten Buchstabenketten und Bestimmung des gesuchten Anfangsbuchstabens.",
    learningObjectives: ["Anfangsbuchstaben-Heuristik", "Erkennung typischer deutscher Morpheme und Suffixe", "Striktes 80-Sekunden-Pacing"],
    estimatedMinutes: 20,
    tags: ["KFF", "Wortflüssigkeit", "Simulation"],
  },
  {
    id: "kff-mem-pass",
    subtestId: "kff-mem",
    section: "KFF",
    title: "Gedächtnis & Merkfähigkeit (GM)",
    subtitle: "MedAT-orientierte Simulationen mit Allergieausweisen: 8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfragephase",
    description: "Authentische MedAT-Prüfungssimulation: Einprägen von 8 Allergieausweisen mit jeweils 8 Merkmalen (64 Informationseinheiten) in 8 Minuten ohne Notizen, gefolgt von 25 Abfragefragen in 15 Minuten.",
    learningObjectives: [
      "8-minütige Merkphase ohne Notizen & Mnemotechniken (Loci- & Geschichten-Methode)",
      "Präzise Verankerung aller 8 Merkmale: Foto, Name, Geburtstag, Medikamente, Blutgruppe, Allergien, Ausweisnummer, Land",
      "Striktes 36-Sekunden-Pacing & Distraktorensicherheit in der Abfragephase",
    ],
    estimatedMinutes: 25,
    tags: ["KFF", "Gedächtnis", "Allergieausweise", "Simulation"],
  },
  {
    id: "kff-imp-syll",
    subtestId: "kff-imp",
    section: "KFF",
    title: "Implikationen erkennen (IE) [Nur MedAT-H]",
    subtitle: "MedAT-orientierte Simulationen: 10 Aufgaben in 10 Minuten (~60s/Aufgabe)",
    description: "Authentische MedAT-H Prüfungssimulationen: Reine formale Deduktion aus jeweils 2 Prämissen unter Verzicht auf reales Weltwissen. Syllogismen, Euler- & Venn-Mengenbeziehungen und Scheinschluss-Filterung mit vollwertiger Option-E-Gültigkeit.",
    learningObjectives: [
      "Strikte Trennung von formaler Gültigkeit und empirischem Weltwissen",
      "Euler- und Venn-Mengendarstellung (A ⊆ B, A ∩ B = ∅, A ∩ B ≠ ∅)",
      "Scheinschlüsse entlarven (unverteilter Mittelbegriff, unzulässige Konversion)",
      "Striktes 60-Sekunden-Pacing pro Aufgabe",
    ],
    estimatedMinutes: 10,
    tags: ["KFF", "IE", "Implikationen", "Logik", "Syllogismus", "MedAT-H", "Simulation"],
  },

  // --- TV Textverständnis (MedAT-H) ---
  {
    id: "tv-scipass",
    subtestId: "tv-main",
    section: "TV",
    title: "Textverständnis",
    subtitle: "Lesekompetenz, Kernaussagen & logische Schlussfolgerungen",
    description: "Komplexe Texte systematisch erfassen, Kernaussagen erkennen und Informationen logisch aus dem Text ableiten.",
    learningObjectives: ["Kernaussagen & Paragraph-Scanning", "Identifikation logischer Schlüsse & Widersprüche"],
    estimatedMinutes: 35,
    tags: ["TV", "Textverständnis", "MedAT-H"],
  },

  // --- SEK Sozial-emotionale Kompetenzen ---
  {
    id: "sek-rec-face",
    subtestId: "sek-emo-rec",
    section: "SEK",
    title: "Emotionen erkennen — Mimik & Kontext",
    subtitle: "Basisemotionen & subtile Mikroexpressionen",
    description: "Zuordnung von Gesichtern zu den 6 Basisemotionen nach Paul Ekman.",
    learningObjectives: ["Erkennung von Ekel vs. Verachtung", "Analyse der Augen- und Mundpartie"],
    estimatedMinutes: 20,
    tags: ["SEK", "Emotionen", "Mimik"],
  },
  {
    id: "sek-reg-stress",
    subtestId: "sek-emo-reg",
    section: "SEK",
    title: "Emotionen regulieren — Strategien",
    subtitle: "Kognitive Neubewertung vs. Unterdrückung",
    description: "Bewertung der Wirksamkeit von Verhaltensweisen zur Regulation von Ärger, Angst und Trauer.",
    learningObjectives: ["Prinzipien der kognitiven Neubewertung", "Vermeidung maladaptiver Strategien"],
    estimatedMinutes: 20,
    tags: ["SEK", "Regulation"],
  },
  {
    id: "sek-dec-ethics",
    subtestId: "sek-soc-dec",
    section: "SEK",
    title: "Soziales Entscheiden — Handlungsleitlinien",
    subtitle: "Empathie, Deontologie & Utilitarismus im Klinikalltag",
    description: "Reihung und Einstufung von Verhaltensweisen in moralischen Konfliktsituationen.",
    learningObjectives: ["Abwägung von Patient:innenautonomie und Fürsorge", "Kollegiale Kommunikation"],
    estimatedMinutes: 20,
    tags: ["SEK", "Entscheiden", "Ethik"],
  },

  // --- MF Manuelle Fertigkeiten (MedAT-Z) ---
  {
    id: "mf-wire-tech",
    subtestId: "mf-wire",
    section: "MF",
    title: "Drahtbiegen — Technik & Präzision",
    subtitle: "Zangenhaltung, Biegeradien & Formtreue",
    description: "Präzises Arbeiten mit der Hohlkehlzange, Vermeidung von Torsionen und Einhaltung der Millimetertoleranzen.",
    learningObjectives: ["Umgang mit orthodontischem Biegedraht", "Vermeidung von Oberflächenbeschädigungen"],
    estimatedMinutes: 45,
    tags: ["MF", "Drahtbiegen", "MedAT-Z"],
  },
  {
    id: "mf-mirror-symm",
    subtestId: "mf-mirror",
    section: "MF",
    title: "Formen spiegeln — Achsensymmetrie",
    subtitle: "Punktspiegelung, Achsenspiegelung & Rastergenauigkeit",
    description: "Schnelles und fehlerfreies Übertragen von Linienzügen an horizontalen, vertikalen und diagonalen Spiegelachsen.",
    learningObjectives: ["Raster-Koordinatentechnik", "Fehlervermeidung bei diagonalen Achsen"],
    estimatedMinutes: 20,
    tags: ["MF", "Spiegeln", "MedAT-Z"],
  },
];

import { ALL_FRONTEND_QUESTIONS } from "../../data/questions";

/* ============================================================
   Verified MedAT Prep Educational Practice Questions
   ============================================================ */

export const REPOSITORY_QUESTIONS: MedATQuestion[] = ALL_FRONTEND_QUESTIONS.map((q) => ({
  id: q.id,
  exam: q.exam,
  section: q.section,
  subtestId: q.subjectId,
  chapterId: q.chapterId,
  topic: q.topic,
  difficulty: q.difficulty,
  questionText: q.questionText,
  options: q.options,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
  tags: q.tags,
  source: q.source || "medat-original",
  version: q.version || "2026.1",
}));
