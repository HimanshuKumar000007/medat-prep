/**
 * MedAT Biologie BMS — 40-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #5 (BMS Biologie-Testteil, 40 Original-Aufgaben).
 * 
 * Fachlich und terminologisch präzise angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung:
 * - 10 Grundlagen/Leicht (Foundational)
 * - 20 Mittel (Intermediate)
 * - 10 Schwer (Advanced)
 * 
 * Antwortschlüssel:
 * - A: 8, B: 8, C: 8, D: 8, E: 8 (Gesamt: 40)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcBioGp5QuestionRaw {
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

export const RAW_GENERALPROBE_5_BIO_QUESTIONS: QcBioGp5QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Die menschliche Zelle (bio-01-zelle) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-001",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Peroxisomen & Zelluläre Entgiftung",
    difficulty: "foundational",
    stem: "Welche biologische Funktion wird maßgeblich durch die Enzyme in den Peroxisomen (Microbodies) menschlicher Zellen vermittelt?",
    options: {
      A: "Abbau sehr langkettiger Fettsäuren (VLCFA) via Beta-Oxidation und Zersetzung von toxischem Wasserstoffperoxid durch Katalase",
      B: "Spaltung von Glykoproteinen durch saure Hydrolasen bei einem optimalen pH-Wert von 4,5–5,0",
      C: "Synthese von ATP über einen chemiosmotischen Protonengradienten an der inneren Membran",
      D: "Cotranslationale Modifikation von sekretorischen Polypeptiden durch N-Glykosylierung",
      E: "Synthese der ribosomalen 45S-Prä-rRNA und Zusammenbau von Ribonukleoproteinpartikeln"
    },
    correct_answer: "A",
    explanation_correct: "Peroxisomen sind membranumhüllte Organellen, die Oxidoreduktasen enthalten. Sie sind essenziell für den oxidativen Abbau sehr langkettiger Fettsäuren (VLCFA, ≥ C22) mittels einer peroxisomalen Beta-Oxidation zu Octanoyl-CoA sowie für die Synthese von Plasmalogenen (Etherlipide der Myelinscheiden). Bei diesen Oxidationsreaktionen entsteht toxisches Wasserstoffperoxid (H2O2), welches durch das peroxisomale Markerenzym Katalase sofort zu Wasser und molekularem Sauerstoff disproportionisiert wird (2 H2O2 -> 2 H2O + O2).",
    explanations_incorrect: {
      B: "Saure Hydrolasen mit einem pH-Optimum um 4,5–5,0 sind das Kennzeichen von Lysosomen.",
      C: "Die ATP-Synthese über einen Protonengradienten an einer gefalteten Innenmembran erfolgt in den Mitochondrien.",
      D: "Cotranslationale N-Glykosylierung findet am rauen Endoplasmatischen Retikulum (RER) statt.",
      E: "Die Transkription der 45S-Prä-rRNA und der Zusammenbau ribosomaler Vorstufen ist die definierende Aufgabe des Nukleolus im Zellkern."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-002",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zytoskelett: Mikrotubuli & Motorproteine",
    difficulty: "intermediate",
    stem: "Welche Aussage über die Motorproteine des Zytoskeletts und den intrazellulären Transport entlang von Mikrotubuli ist fachlich zutreffend?",
    options: {
      A: "Dynein wandert unter ATP-Hydrolyse stets gerichtet zum Plus-Ende der Mikrotubuli an der Zellperipherie",
      B: "Kinesine transportieren Vesikel überwiegend anterograd in Richtung des Mikrotubuli-Plus-Endes, während zytoplasmatisches Dynein den retrograden Transport zum Minus-Ende vermittelt",
      C: "Myosin-V transportiert Organellen entlang von Intermediärfilamenten aus Desmin und Vimentin",
      D: "Mikrotubuli bestehen aus Homodimeren von Gamma-Tubulin, die ohne Nucleotidbindung polymerisieren",
      E: "Colchicin stimuliert die Polymerisation von Mikrotubuli und beschleunigt dadurch den axonalen Transport"
    },
    correct_answer: "B",
    explanation_correct: "Mikrotubuli sind polarisierte Röhren aus Alpha- und Beta-Tubulin-Heterodimeren mit einem dynamischen Plus-Ende (meist zellperipher gerichtet) und einem Minus-Ende (am Zentrosom/MTOC verankert). Die ATP-abhängigen Motorproteine der Kinesin-Familie wandern typischerweise anterograd zum Plus-Ende (z. B. Transport von Neurotransmittervesikeln zur synaptischen Endigung). Zytoplasmatisches Dynein wandert dagegen retrograd zum Minus-Ende (Rücktransport von Abbauprodukten und Signalendosomen zum Zellkörper).",
    explanations_incorrect: {
      A: "Dynein ist ein Minus-End-gerichteter Motor; das Plus-Ende wird von Kinesin angesteuert.",
      C: "Myosine sind Actin-assoziierte Motoren und bewegen sich entlang von Mikrofilamenten (Actin), nicht entlang von unpolaren Intermediärfilamenten.",
      D: "Mikrotubuli bestehen aus Alpha- und Beta-Tubulin-Heterodimeren; die Polymerisation erfordert GTP-Bindung. Gamma-Tubulin bildet lediglich den Keimungsring am Zentrosom.",
      E: "Colchicin bindet an Tubulindimere und hemmt die Mikrotubulipolymerisation (Spindelgift), wodurch der axonale Transport blockiert wird."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-003",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zell-Matrix-Verbindungen & Integrine",
    difficulty: "intermediate",
    stem: "Welche molekularen Strukturen vermitteln in tierischen Geweben primär die mechanische Verankerung der Zelle an der extrazellulären Matrix über Actinfilamente?",
    options: {
      A: "Hemidesmosomen über Transmembranproteine der Cadherin-Superfamilie",
      B: "Gap Junctions (Nexus) aus Hexamern von Connexin-Untereinheiten",
      C: "Fokale Adhäsionen (Focal Adhesions) über heterodimere Integrine, die intrazellulär über Adapterproteine an Actinfilamente koppeln",
      D: "Tight Junctions (Zonulae occludentes) über Claudine und Occludine zur Abdichtung des Interzellularspalts",
      E: "Desmosomen (Maculae adherentes), die über Desmoglein direkt mit der Kernlamina verknüpft sind"
    },
    correct_answer: "C",
    explanation_correct: "Fokale Adhäsionen sind spezialisierte Zell-Matrix-Kontakte. Transmembranäre Integrine (Heterodimere aus je einer Alpha- und einer Beta-Kette) binden extrazellulär an ECM-Komponenten wie Fibronektin, Laminin oder Kollagen. Intrazellulär interagiert die zytoplasmatische Domäne der Beta-Integrin-Kette über Adapterproteine (Talin, Vinculin, Alpha-Actinin) mit den Actinfilamenten des Zytoskeletts und vermittelt so mechanische Zugspannung und Signaltransduktion (Inside-Out und Outside-In Signaling).",
    explanations_incorrect: {
      A: "Hemidesmosomen verankern Zellen an der Basallamina (ECM), nutzen aber Alpha6-Beta4-Integrine und koppeln an Intermediärfilamente (Keratine), nicht an Actin; Cadherine vermitteln Zell-Zell-Kontakte.",
      B: "Gap Junctions sind kommunizierende Zell-Zell-Kanäle aus Connexinen für den Austausch kleiner Moleküle und Ionen.",
      D: "Tight Junctions dichten den Interzellularraum zwischen benachbarten Epithelzellen ab (Zell-Zell-Kontakt) und trennen apikale von basolateralen Membrandomänen.",
      E: "Desmosomen verknüpfen benachbarte Zellen untereinander (Zell-Zell) und inserieren an zytoplasmatischen Intermediärfilamenten (Tonofilamenten), nicht an der Kernlamina."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-004",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zellzyklus-Kontrollpunkte: G1/S & Retinoblastom-Protein",
    difficulty: "advanced",
    stem: "Welcher molekulare Mechanismus steuert den Übergang von der G1-Phase in die S-Phase (Restriktionspunkt) im eukaryotischen Zellzyklus?",
    options: {
      A: "Dephosphorylierung des Retinoblastom-Proteins (pRb) durch die Phosphatase Cdc25, wodurch pRb den Transkriptionsfaktor E2F irreversibel degradiert",
      B: "Aktivierung des Anaphase-Promoting Complex (APC/C) durch Bindung von Cdc20 zur Spaltung von Cohesin",
      C: "Spaltung von Cyclin B durch Caspase-3, wodurch die DNA-Polymerase delta aktiviert wird",
      D: "Phosphorylierung des Retinoblastom-Proteins (pRb) durch Cyclin D-CDK4/6- und Cyclin E-CDK2-Komplexe, wodurch der Transkriptionsfaktor E2F freigesetzt wird",
      E: "Direkte Bindung von p53 an den Replikationsursprung, die den Start der DNA-Helikase initiiert"
    },
    correct_answer: "D",
    explanation_correct: "Am G1/S-Kontrollpunkt (Restriktionspunkt) liegt das Tumorsuppressorprotein pRb unphosphoryliert vor und bindet an den Transkriptionsfaktor E2F, wodurch dieser inaktiviert wird. Wachstumsfaktoren stimulieren die Expression von Cyclin D, welches mit CDK4 und CDK6 Komplexe bildet. Diese Kinasen phosphorylieren pRb partiell. Nachfolgend phosphoryliert der Cyclin E-CDK2-Komplex pRb hyperaktiv, sodass E2F freigesetzt wird. Freies E2F wandert in den Kern und aktiviert die Transkription essenzieller Gene für die S-Phase (z. B. Cyclin E, Cyclin A, DNA-Polymerasen, Thymidinkinase).",
    explanations_incorrect: {
      A: "Die Phosphorylierung (nicht Dephosphorylierung) löst E2F von pRb; E2F wird dabei nicht degradiert, sondern aktiviert.",
      B: "Der APC/C-Cdc20-Komplex steuert den Übergang von der Metaphase in die Anaphase der Mitose durch Abbau von Securin (Freisetzung von Separase zur Cohesinspaltung).",
      C: "Cyclin B steuert den G2/M-Übergang mit CDK1 (MPF), nicht den G1/S-Übergang; Caspasen sind Apoptoseenzyme.",
      E: "p53 ist ein Transkriptionsfaktor für DNA-Reparatur und Zellzyklusarrest (induziert p21, einen CDK-Inhibitor), startet aber nicht direkt die Replikationshelikase."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-005",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Intrinsische Apoptose & Apoptosombildung",
    difficulty: "advanced",
    stem: "Welches Ereignis kennzeichnet die Einleitung der intrinsischen (mitochondrialen) Apoptose in Säugetierzellen nach irreversiblem DNA-Schaden?",
    options: {
      A: "Rekrutierung von FADD und Procaspase-8 an den aktivierten Fas-Todesrezeptor (CD95) an der Plasmamembran",
      B: "Phosphorylierung von Bcl-2, wodurch es Poren in der mitochondrialen Außenmembran formt",
      C: "Vollständige Inhibition der Caspase-9 durch Translokation von Smac/DIABLO ins Zytosol",
      D: "Aktivierung der Na+/K+-ATPase, die zu einer schnellen osmotischen Schwellung und Lyse führt",
      E: "Oligomerisierung der proapoptotischen Proteine Bax und Bak in der mitochondrialen Außenmembran mit nachfolgender Freisetzung von Cytochrom c ins Zytosol"
    },
    correct_answer: "E",
    explanation_correct: "Die intrinsische Apoptose wird durch zellulären Stress oder DNA-Schaden (via p53) ausgelöst. Proapoptotische BH3-only-Proteine (wie Puma, Noxa, Bid) aktivieren die Effektormoleküle Bax und Bak. Diese oligomerisieren in der mitochondrialen Außenmembran (MOMP: Mitochondrial Outer Membrane Permeabilization) und bilden Poren. Dadurch strömt Cytochrom c aus dem mitochondrialen Intermembranraum ins Zytosol, bindet an Apaf-1 (unter dATP-Verbrauch) und assembliert das heptamere Apoptosom. Dieses rekrutiert und aktiviert die Initiatorcaspase Procaspase-9, welche wiederum die Effektorkaspasen-3 und -7 spaltet.",
    explanations_incorrect: {
      A: "Der Fas-Rezeptor/FADD/Procaspase-8-Komplex (DISC) ist das Kennzeichen des extrinsischen Signalwegs, nicht des intrinsischen.",
      B: "Bcl-2 ist ein antiapoptotisches Protein, das die Porenbildung durch Bax/Bak blockiert und selbst keine zytotoxischen Poren formt.",
      C: "Smac/DIABLO hemmt die IAPs (Inhibitors of Apoptosis Proteins) und fördert dadurch die Caspaseaktivierung, anstatt sie zu inhibieren.",
      D: "Zellschwellung und Plasmamembranlyse kennzeichnen die Nekrose; bei der Apoptose schrumpft die Zelle, und die Membranintegrität bleibt bis zur Phagozytose intakt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 2: Menschlicher Körper: Histologie, Anatomie & Physiologie (5 Aufgaben)
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-006",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Kollagensynthese & Extrazelluläre Matrix",
    difficulty: "foundational",
    stem: "Welcher Schritt der Kollagenbiosynthese ist obligat von Ascorbinsäure (Vitamin C) abhängig und führt bei deren Mangel zu Skorbut?",
    options: {
      A: "Posttranslationale Hydroxylierung von Prolin- und Lysinresten im Lumen des rauen Endoplasmatischen Retikulums",
      B: "Extrazelluläre Spaltung der N- und C-terminalen Propeptide durch spezifische Peptidasen",
      C: "Kovalente Quervernetzung der Tropokollagenmoleküle über die Lysyloxidase",
      D: "Transkription der Prokollagengene an der RNA-Polymerase I im Zellkern",
      E: "Synthese der Glycin-X-Y-Polypeptidkette an freien zytoplasmatischen Ribosomen"
    },
    correct_answer: "A",
    explanation_correct: "Kollagen besitzt eine charakteristische Triplehelix aus drei Polypeptidketten mit der Wiederholungssequenz Glycin-X-Y (wobei X häufig Prolin und Y Hydroxyprolin ist). Im Lumen des RER werden spezifische Prolyl- und Lysylreste durch Prolyl-4-Hydroxylase und Lysyl-Hydroxylase modifiziert. Diese Enzyme benötigen molekularen Sauerstoff, 2-Oxoglutarat, Fe2+ und Vitamin C (Ascorbinsäure als Kofaktor, der das Eisen im reduzierten Fe2+-Zustand hält). Hydroxyprolin ist essenziell für die Ausbildung intramolekularer Wasserstoffbrücken zur Stabilisierung der Tripelhelix; ohne Vitamin C zerfällt das synthetisierte Kollagen bei Körpertemperatur (Skorbut: Zahnausfall, Gefäßbrüchigkeit, Wundheilungsstörungen).",
    explanations_incorrect: {
      B: "Die Spaltung der Propeptide erfolgt extrazellulär durch Prokollagen-Peptidasen und ist unabhängig von Vitamin C.",
      C: "Die kovalente Quervernetzung durch Lysyloxidase benötigt Kupfer (Cu2+), nicht Vitamin C.",
      D: "Prokollagengene werden von der RNA-Polymerase II (nicht Pol I) transkribiert.",
      E: "Prokollagen ist ein sekretorisches Protein und wird an membrangebundenen Ribosomen des rauen ER synthetisiert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-007",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Magenschleimhaut & Belegzellen (Parietalzellen)",
    difficulty: "intermediate",
    stem: "Welche physiologische Eigenschaft trifft spezifisch auf die Belegzellen (Parietalzellen) der Magenschleimhaut zu?",
    options: {
      A: "Sie sezernieren Pepsinogen, das erst im sauren Milieu des Magenlumens zu aktivem Pepsin gespalten wird",
      B: "Sie sezernieren Protonen über eine apikale H+/K+-ATPase und produzieren den für die Vitamin-B12-Resorption essenziellen Intrinsic Factor",
      C: "Sie bilden eine dicke alkalische Schleimschicht aus Mucinen und Bicarbonat zum Schutz des Epithels",
      D: "Sie sezernieren Gastrin direkt in das Kapillarsystem der Magenmukosa",
      E: "Sie werden primär durch Somatostatin zur maximalen Säuresekretion angeregt"
    },
    correct_answer: "B",
    explanation_correct: "Die Belegzellen (Parietalzellen), die vor allem im Korpus und Fundus des Magens lokalisiert sind, besitzen zwei lebenswichtige Funktionen: 1. Säuresekretion: Sie transportieren mittels der apikalen H+/K+-ATPase (Protonenpumpe) aktiv H+-Ionen gegen ein Konzentrationsgefälle von 1:1.000.000 ins Magenlumen im Austausch gegen K+-Ionen (unter HCl-Bildung). 2. Intrinsic-Factor-Sekretion: Sie synthetisieren das Glykoprotein Intrinsic Factor (IF), das im Magen an Vitamin B12 (Cobalamin) bindet und dessen spätere rezeptorvermittelte Resorption im terminalen Ileum ermöglicht.",
    explanations_incorrect: {
      A: "Pepsinogen wird von den Hauptzellen (Chief cells) gebildet, nicht von den Belegzellen.",
      C: "Der alkalische Bicarbonat-reiche Schleim wird von den oberflächlichen Schleimhautepithelzellen und Nebenzellen produziert.",
      D: "Gastrin wird von neuroendokrinen G-Zellen im Antrum des Magens ins Blut abgegeben.",
      E: "Somatostatin aus den D-Zellen hemmt die Säuresekretion der Belegzellen (über Gai-gekoppelte Rezeptoren)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-008",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Leberhistologie: Sinusoide & Disse-Raum",
    difficulty: "intermediate",
    stem: "Welche Aussage beschreibt korrekt die zelluläre Organisation und Funktion des Disse-Raums (Spatium perisinusoideum) in der menschlichen Leber?",
    options: {
      A: "Er trennt die Portader von der Leberarterie innerhalb der Glisson-Trias",
      B: "Er ist der intrazelluläre Kanal zwischen zwei Hepatozyten, in den primäre Galle abfließt",
      C: "Er ist der schmale Extrazellulärraum zwischen den fenestrierten Sinusoid-Endothelzellen und den Hepatozyten, in dem Ito-Zellen (Sternzellen) Vitamin A speichern",
      D: "Er ist dicht mit Flimmerepithel ausgekleidet und transportiert Lymphe direkt in die Vena centralis",
      E: "Er beherbergt residente Makrophagen (Kupffer-Zellen), die lumenseitig an der Wand der Gallengänge liegen"
    },
    correct_answer: "C",
    explanation_correct: "Der Disse-Raum (Spatium perisinusoideum) ist der funktionell entscheidende Austauschraum der Leber zwischen den Hepatozytenmikrovilli und dem fenestrierten Sinusoid-Endothel (das keine kontinuierliche Basallamina besitzt). Hier findet der ungehinderte Stoffaustausch von Proteinen, Lipoproteinen und Nährstoffen zwischen Blutplasma und Leberzellen statt. Im Disse-Raum liegen die hepatischen Sternzellen (Ito-Zellen), die physiologisch der Hauptspeicher für Vitamin A (Retinylester) im Körper sind und bei chronischer Leberschädigung zu Myofibroblasten transformieren (Leberzirrhose).",
    explanations_incorrect: {
      A: "Glisson-Trias enthält Gallengang, Arteria hepatica propria-Ast und Vena portae-Ast im periportalen Bindegewebe, nicht den Disse-Raum.",
      B: "Kanäle zwischen benachbarten Hepatozyten für Galle sind die Canaliculi biliferi (Gallenkapillaren), die durch Tight Junctions versiegelt sind.",
      D: "Der Disse-Raum besitzt kein Flimmerepithel; Lymphe fließt in die periportalen Mall-Räume ab, nicht in die Vena centralis.",
      E: "Kupffer-Zellen sind lebereigene Makrophagen, die dem sinusoidalen Gefäßendothel lumenseitig aufsitzen, nicht in den Gallengängen liegen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-009",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Skelettmuskelkontraktion & Querbrückenzyklus",
    difficulty: "intermediate",
    stem: "Welches molekulare Ereignis im Querbrückenzyklus der Skelettmuskulatur bedingt unmittelbar das Lösen des Myosinkopfes vom Actinfilament?",
    options: {
      A: "Die Freisetzung von anorganischem Phosphat (Pi) aus dem Myosinkopf",
      B: "Die Bindung von Calcium an Troponin T",
      C: "Die Dephosphorylierung der leichten Kette des Myosins durch eine Phosphatase",
      D: "Die Bindung eines neuen ATP-Moleküls an die Nukleotid-Bindungsstelle des Myosinkopfes",
      E: "Die Hydrolyse von ATP zu ADP und Pi am ungebundenen Myosin"
    },
    correct_answer: "D",
    explanation_correct: "Am Ende des Kraftschlags (Power Stroke), nach Freisetzung von Pi und ADP, befindet sich der Myosinkopf in einem starren, fest an das Actin gebundenen Komplex (Rigor-Zustand). Erst die Bindung eines frischen Moleküls ATP an die katalytische Domäne des Myosinkopfes induziert eine Konformationsänderung, die die Affinität zu Actin drastisch senkt und das Ablösen des Myosinkopfes bewirkt. Fehlt ATP nach dem Tod, verharren die Myosinköpfe im gebundenen Zustand an Actin (Totenstarre / Rigor mortis).",
    explanations_incorrect: {
      A: "Die Freisetzung von Pi löst den eigentlichen Kraftschlag (Power Stroke, Abkippen des Myosinkopfes von 90° auf 45°) aus, nicht das Lösen.",
      B: "Calcium bindet an Troponin C (nicht Troponin T), wodurch Tropomyosin verschoben wird und Myosinbindungsstellen freigegeben werden.",
      C: "Die Phosphorylierung/Dephosphorylierung der leichten Kette reguliert die glatte Muskulatur, nicht den schnellen Skelettmuskelzyklus.",
      E: "Die Hydrolyse von ATP spannt den Kopf in die 90°-Konformation vor (Cocked State), erfolgt aber am bereits gelösten Myosinkopf."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-010",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Nierenphysiologie: Henle-Schleife & Gegenstromprinzip",
    difficulty: "advanced",
    stem: "Welche biophysikalischen Eigenschaften der Henle-Schleife ermöglichen den Aufbau des osmotischen Konzentrationsgradienten im Nierenmark (Gegenstrommultiplikation)?",
    options: {
      A: "Der dicke aufsteigende Schenkel ist hochgradig wasserpermeabel, während der dünne absteigende Schenkel aktiv NaCl ins Mark pumpt",
      B: "Sowohl der absteigende als auch der aufsteigende Schenkel sezernieren aktiv Harnstoff gegen ein Konzentrationsgefälle",
      C: "Die Macula densa im absteigenden Schenkel filtriert Wasser durch hydrostatischen Überdruck",
      D: "Der absteigende Schenkel transportiert aktiv Kalium über Na+/K+-ATPasen in das Tubuluslumen",
      E: "Der dünne absteigende Schenkel ist wasserpermeabel (über AQP1) und salzimpermeabel, während der dicke aufsteigende Schenkel wasserundurchlässig ist und aktiv NaCl (über den NKCC2-Kotransporter) ins Interstitium resorbiert"
    },
    correct_answer: "E",
    explanation_correct: "Das Gegenstrommultiplikationssystem basiert auf der asymmetrischen Permeabilität der Schleifenschenkel: 1. Der dünne absteigende Schenkel besitzt konstitutiv exprimierte Aquaporin-1-Kanäle (AQP1), ist extrem wasserdurchlässig, aber praktisch impermeabel für Ionen (Wasser strömt osmotisch ins hyperosmolare Markinterstitium; Tubulusharn wird konzentriert). 2. Der dicke aufsteigende Schenkel (TAL) ist absolut wasserundurchlässig (fehlende Aquaporine und dichte Tight Junctions), resorbiert aber massiv Ionen über den apikalen Na+-K+-2Cl--Kotransporter (NKCC2). Dies verdünnt den Harn und reichert das Nierenmark mit Salz an, wodurch die medulläre Hyperosmolarität (bis zu 1200 mOsm/kg) aufrechterhalten wird.",
    explanations_incorrect: {
      A: "Genau umgekehrt: Der aufsteigende Schenkel ist wasserimpermeabel und pumpt Salz; der absteigende Schenkel ist wasserpermeabel.",
      B: "Harnstoff wird im medullären Sammelrohr (UT-A1/A3) rückresorbiert und rezirkuliert passiv, nicht aktiv durch beide Schleifenschenkel sezerniert.",
      C: "Die Macula densa liegt am Übergang des TAL zum distalen Tubulus (Chemosensor für NaCl-Konzentration), nicht im absteigenden Schenkel.",
      D: "Der absteigende Schenkel betreibt keinen aktiven luminalen K+-Transport über ATPasen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 3: Immunbiologie & Blut (4 Aufgaben)
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-011",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "MHC-I vs. MHC-II & T-Zell-Aktivierung",
    difficulty: "foundational",
    stem: "Welcher Unterschied zwischen den Haupthistokompatibilitätskomplexen MHC-I und MHC-II des menschlichen Immunsystems ist zutreffend?",
    options: {
      A: "MHC-I wird auf nahezu allen kernhaltigen Körperzellen exprimiert und präsentiert endogene Peptide an CD8-positive zytotoxische T-Zellen",
      B: "MHC-II wird ubiquitär auf Erythrozyten und Thrombozyten exprimiert, um Komplementaktivierung zu verhindern",
      C: "MHC-I bindet ausschließlich extrazelluläre Proteine, die über Endozytose in Phagosomen aufgenommen wurden",
      D: "MHC-II interagiert direkt mit dem CD8-Korezeptor zur Auslösung der Granzym-vermittelten Apoptose",
      E: "MHC-I-Moleküle bestehen aus zwei identischen Beta-2-Mikroglobulin-Ketten ohne Transmembrandomäne"
    },
    correct_answer: "A",
    explanation_correct: "MHC-Klasse-I-Moleküle werden auf praktisch allen kernhaltigen Zellen des Organismus sowie Thrombozyten exprimiert (nicht auf Erythrozyten). Sie präsentieren Peptide aus dem Zytosol (endogene Antigene, z. B. virale Proteine nach Infektion oder mutierte Tumorantigene), die zuvor durch das Proteasom abgebaut und via TAP ins ER transportiert wurden. MHC-I bindet an den T-Zell-Rezeptor und interagiert mit dem CD8-Korezeptor zytotoxischer T-Lymphozyten (Tc). MHC-II hingegen kommt nur auf professionellen antigenpräsentierenden Zellen (APCs: dendritische Zellen, B-Zellen, Makrophagen) vor und präsentiert exogene Antigene an CD4-positive T-Helferzellen (TH).",
    explanations_incorrect: {
      B: "Erythrozyten sind kernlos und besitzen weder MHC-I noch MHC-II.",
      C: "MHC-I präsentiert zytosolische/endogene Peptide; extrazelluläre/phagozytierte Antigene werden primär auf MHC-II präsentiert.",
      D: "MHC-II interagiert mit dem CD4-Korezeptor, nicht mit CD8.",
      E: "MHC-I besteht aus einer polymorphen Alpha-Schweren Kette (mit 3 Domänen und Transmembrananker) und dem konstanten, nicht-kovalent gebundenen Beta-2-Mikroglobulin."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-012",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "Antikörperklassen & Plazentaschranke",
    difficulty: "foundational",
    stem: "Welche Immunglobulinklasse kann als einzige die menschliche Plazentaschranke aktiv überqueren und vermittelt dem Neugeborenen den physiologischen Nestschutz?",
    options: {
      A: "Pentameres IgM über Bindung an den sekretorischen J-Ketten-Rezeptor",
      B: "Monomeres IgG über rezeptorvermittelte Transzytose mittels des neonatalen Fc-Rezeptors (FcRn)",
      C: "Dimeres IgA über passive Filtration durch die Synzytiotrophoblast-Poren",
      D: "Monomeres IgE über Bindung an hochaffine Fcepsilon-Rezeptoren auf Trophoblasten",
      E: "Membrangebundenes IgD als B-Zell-Oberflächenrezeptor"
    },
    correct_answer: "B",
    explanation_correct: "Immunglobulin G (IgG) ist die einzige Antikörperklasse, die physiologisch die menschliche Plazentaschranke überwindet. Der Transport erfolgt im Synzytiotrophoblasten aktiv und gerichtet via rezeptorvermittelte Endozytose und Transzytose über den neonatalen Fc-Rezeptor (FcRn). Dadurch erhält der Fetus mütterliche IgG-Antikörper gegen Infektionserreger, die dem Säugling in den ersten Lebensmonaten als sogenannter Nestschutz dienen.",
    explanations_incorrect: {
      A: "IgM ist ein großes Pentamer (ca. 900 kDa), das die Plazentaschranke nicht überwinden kann; Nachweis von erregerspezifischem IgM im Nabelschnurblut beweist eine fetale Infektion.",
      C: "IgA gelangt primär postpartal über das Kolostrum und die Muttermilch auf die Schleimhäute des Säuglings, überquert aber nicht die Plazenta.",
      D: "IgE vermittelt Typ-I-Allergien und Parasitenabwehr; es passiert die Plazenta nicht.",
      E: "IgD fungiert als Antigenrezeptor auf naiven B-Zellen und wird kaum sezerniert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-013",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Sekundäre Hämostase & Fibrinpolymerisation",
    difficulty: "intermediate",
    stem: "Welches Enzym spaltet im letzten Schritt der sekundären Hämostase lösliches Fibrinogen in Fibrinmonomere, und welches Enzym stabilisiert das Fibrinnetzwerk kovalent?",
    options: {
      A: "Kallikrein spaltet Fibrinogen; Faktor VIIIa vernetzt die Monomere",
      B: "Plasmin spaltet Fibrinogen; Protein C bildet Disulfidbrücken",
      C: "Thrombin (Faktor IIa) spaltet Fibrinogen; Faktor XIIIa (Fibrinstabilisierender Faktor) vernetzt das Fibrin kovalent über Isopeptidbindungen",
      D: "Faktor Xa spaltet Fibrinogen direkt; Antithrombin III vernetzt das Gerinnsel",
      E: "Gewebsthromboplastin (Tissue Factor) wandelt Fibrinogen ohne Cofaktoren in unlösliches Fibrin um"
    },
    correct_answer: "C",
    explanation_correct: "In der gemeinsamen Endstrecke der Blutgerinnungskaskade spaltet die Serinprotease Thrombin (aktivierter Faktor IIa) die negativ geladenen Fibrinopeptide A und B von löslichem Fibrinogen ab. Die resultierenden Fibrinmonomere polymerisieren spontan über nicht-kovalente Wechselwirkungen zu einem lockeren Fibringerinnsel. Thrombin aktiviert gleichzeitig Faktor XIII zu Faktor XIIIa (Transglutaminase). Faktor XIIIa bildet kovalente Isopeptidbindungen zwischen Glutamin- und Lysinseitenketten benachbarter Fibrinstränge aus, wodurch ein stabiles, unlösliches Fasergeflecht (roter Thrombus) entsteht.",
    explanations_incorrect: {
      A: "Kallikrein spaltet Kininogen zu Bradykinin und aktiviert Faktor XII; Faktor VIIIa ist Cofaktor für FIXa im Tenase-Komplex.",
      B: "Plasmin ist das zentrale fibrinolytische Enzym, das Fibrin abbaut (Fibrinspaltprodukte / D-Dimere), nicht synthetisiert.",
      D: "Faktor Xa bildet mit FVa den Prothrombinase-Komplex zur Aktivierung von Prothrombin zu Thrombin, spaltet aber nicht Fibrinogen; Antithrombin III ist ein Inhibitor.",
      E: "Tissue Factor (TF / Faktor III) initiiert den extrinsischen Gerinnungsweg durch Komplexbildung mit Faktor VIIa."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-014",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "NK-Zellen & Missing-Self-Hypothese",
    difficulty: "advanced",
    stem: "Welcher Mechanismus erklärt die zytotoxische Aktivierung natürlicher Killerzellen (NK-Zellen) nach der 'Missing-Self'-Hypothese?",
    options: {
      A: "NK-Zellen werden ausschließlich aktiviert, wenn spezifische virale Peptide über MHC-II an ihren T-Zell-Rezeptor binden",
      B: "NK-Zellen phagozytieren Zielzellen nur dann, wenn diese mit sekretorischem IgA opsonisiert sind",
      C: "Inhibitorische Rezeptoren (KIR) der NK-Zelle erkennen CD4-Moleküle auf gesunden Körperzellen",
      D: "Inhibitorische Rezeptoren der NK-Zelle erkennen körpereigene MHC-I-Moleküle auf gesunden Zellen; verliert eine virusinfizierte oder entartete Zelle ihre MHC-I-Expression, entfällt das hemmende Signal und aktivierende Signale dominieren",
      E: "NK-Zellen benötigen zwingend die Unterstützung durch B-Gedächtniszellen zur Ausschüttung von Histamin"
    },
    correct_answer: "D",
    explanation_correct: "NK-Zellen (angeborenes Immunsystem) besitzen inhibitorische Rezeptoren (z. B. KIR = Killer Cell Immunoglobulin-like Receptors, CD94/NKG2A), die konstitutiv an körpereigene MHC-I-Moleküle binden und intrazellulär über ITIM-Motive hemmende Phosphatasen rekrutieren. Viele Viren (z. B. CMV, Adenoviren) oder Tumorzellen regulieren MHC-I herunter, um der Erkennung durch CD8+ T-Zellen zu entgehen. Fehlt das MHC-I-Molekül auf der Zielzelle (Missing Self), bleibt das inhibitorische Signal aus, und aktivierende Rezeptoren (z. B. NKG2D) leiten die Lyse der Zielzelle über Perforin und Granzyme ein.",
    explanations_incorrect: {
      A: "NK-Zellen besitzen keinen T-Zell-Rezeptor (TCR) und erkennen Antigene nicht im Kontext von MHC-Restriktion.",
      B: "NK-Zellen sind keine primären Phagozyten, sondern zytotoxische Effektorzellen; Antikörper-abhängige Toxizität (ADCC) erfolgt über CD16 (FcgRIII) und IgG, nicht IgA.",
      C: "KIR binden an MHC-Klasse-I-Moleküle, nicht an CD4.",
      E: "NK-Zellen agieren antigenspezifisch unabhängig von Gedächtniszellen und sezernieren Perforin/Granzyme und Interferon-gamma, kein Histamin (Mastzellen)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 4: Frühentwicklung & Fortpflanzung (bio-03-fruehentwicklung) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-015",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Oogenese: Meiose-Arretierungsstadien",
    difficulty: "foundational",
    stem: "In welchem meiotischen Entwicklungsstadium verharren die Oozyten eines weiblichen Feten von der späten Fetalperiode bis unmittelbar vor der jeweiligen Ovulation in der Geschlechtsreife?",
    options: {
      A: "In der Metaphase der Meiose II",
      B: "In der Anaphase der Meiose I",
      C: "In der Telophase der Meiose II",
      D: "In der Interkinese zwischen Meiose I und Meiose II",
      E: "Im Ruhestadium (Diktyotän) der Prophase der Meiose I"
    },
    correct_answer: "E",
    explanation_correct: "Die Oogenese beginnt pränatal: Oogonien vermehren sich durch Mitose und treten im Fetus in die Meiose I ein. Noch vor der Geburt arretieren alle primären Oozyten im Diplotän der Prophase I, einem spezialisierten Ruhezustand, der als Diktyotän bezeichnet wird. In diesem Ruhezustand (als Primordialfollikel) verharren die Oozyten bis zur Pubertät und können dort bis zu 40–50 Jahre verbleiben. Erst durch den präovulatorischen LH-Peak beendet jeweils eine Oozyte die Meiose I und arretiert anschließend in der Metaphase II, die erst bei erfolgreicher Befruchtung abgeschlossen wird.",
    explanations_incorrect: {
      A: "In der Metaphase II arretiert die sekundäre Oozyte nach dem Eisprung im Eileiter bis zur Befruchtung durch ein Spermium.",
      B: "In der Anaphase I werden homologe Chromosomen getrennt; hier erfolgt kein jahrelanger Entwicklungsstopp.",
      C: "Die Telophase II wird erst nach vollzogener Befruchtung zur Ausstoßung des 2. Polkörperchens durchlaufen.",
      D: "Die Interkinese ist nur ein kurzes Übergangsstadium ohne DNA-Replikation."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-016",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Kortikale Reaktion & Polyspermieblock",
    difficulty: "intermediate",
    stem: "Welcher biochemische Prozess verhindert bei der Befruchtung der menschlichen Eizelle verlässlich die Polyspermie (das Eindringen weiterer Spermien)?",
    options: {
      A: "Ein intrazellulärer Calcium-Anstieg führt zur Exozytose kortikaler Granula, deren Enzyme die Zona pellucida verhärten und ZP3-Rezeptoren inaktivieren (Zona-Reaktion)",
      B: "Die Eizelle bildet sofort eine dicke Schicht aus Kollagen Typ I um die Plasmamembran",
      C: "Das erste Spermium injiziert ATP in den Extrazellulärraum, wodurch alle anderen Spermien die Geißel abwerfen",
      D: "Die Oozyte senkt ihr Membranpotenzial dauerhaft auf -120 mV ab, was Spermien elektrostatisch abstößt",
      E: "Die Follikelepithelzellen der Corona radiata schließen sich durch Tight Junctions lückenlos zusammen"
    },
    correct_answer: "A",
    explanation_correct: "Nach Fusion des Spermiums mit dem Oolemm (über Juno/Izumo1) wird Phospholipase C zeta (PLCz) freigesetzt. Dies führt zu Oszillationen der zytosolischen Ca2+-Konzentration. Der Calciumanstieg triggert die kortikale Reaktion: Tausende unter der Plasmamembran gelegene kortikale Granula verschmelzen mit dem Oolemm und sezernieren Proteasen, Peroxidasen und Polysaccharide in den perivitellinen Raum. Diese Enzyme spalten das Zona-Protein ZP3 und modifizieren ZP2, wodurch die Zona pellucida verhärtet (Zona-Reaktion) und keine weiteren Spermien mehr anbinden oder penetrieren können (permanenter, langsamer Polyspermieblock).",
    explanations_incorrect: {
      B: "Die Zona pellucida besteht aus Glykoproteinen (ZP1–ZP4), nicht aus fibrillärem Kollagen Typ I.",
      C: "Die Spermiengeißel wird nicht durch extrazelluläres ATP abgestoßen.",
      D: "Ein schneller elektrischer Polyspermieblock (Depolarisation) ist bei Seeigeln bekannt, beim Säugetier/Menschen ist der Ca2+-vermittelte kortikale Block (Zona-Reaktion) der primäre und entscheidende Mechanismus.",
      E: "Die Corona radiata wird von den Spermien mittels der membrangebundenen Hyaluronidase bereits vor der Befruchtung durchdrungen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-017",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Blastozyste & Trophoblastdifferenzierung",
    difficulty: "intermediate",
    stem: "Aus welchen zwei primären Zellpopulationen besteht die menschliche Blastozyste am 5. bis 6. Tag nach der Befruchtung, und welche Struktur sezerniert das Schwangerschaftshormon hCG?",
    options: {
      A: "Epiblast und Hypoblast; der Hypoblast sezerniert hCG",
      B: "Embryoblast (innere Zellmasse) und Trophoblast (äußere Zellschicht); der differenzierte Synzytiotrophoblast sezerniert hCG",
      C: "Ektoderm und Entoderm; das primäre Mesenchym sezerniert hCG",
      D: "Morula und Amnionepithel; das Amnion sezerniert hCG",
      E: "Dottersack und Allantois; die Allantois sezerniert hCG"
    },
    correct_answer: "B",
    explanation_correct: "Die freie Blastozyste besteht aus der äußeren, einschichtigen Zelllage (Trophoblast) und der innenliegenden Zellanhäufung an einem Pol (Embryoblast / Inner Cell Mass). Aus dem Embryoblasten geht der eigentliche Embryo hervor, während der Trophoblast die fetale Plazenta bildet. Bei der Implantation ins Endometrium differenziert der Trophoblast in den proliferierenden inneren Zytotrophoblasten und den invasiven, mehrkernigen Synzytiotrophoblasten (durch Zellfusion). Der Synzytiotrophoblast sezerniert humanes Choriongonadotropin (hCG), welches den Gelbkörper (Corpus luteum graviditatis) im Ovar stimuliert, weiterhin Progesteron zu produzieren.",
    explanations_incorrect: {
      A: "Epiblast und Hypoblast entstehen erst ab Tag 7/8 durch Differenzierung des Embryoblasten (zweiblättrige Keimscheibe).",
      C: "Ektoderm und Entoderm entstehen erst während der Gastrulation (3. Entwicklungswoche).",
      D: "Die Morula (16–32-Zellstadium) ist das Vorläuferstadium vor Ausbildung der Blastozystenhöhle.",
      E: "Dottersack und Allantois sind extraembryonale Organe, die sich erst in der zweiten bzw. dritten Woche formieren."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-018",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Keimblattderivate & Organogenese",
    difficulty: "intermediate",
    stem: "Welche Zuordnung eines menschlichen Organs oder Gewebes zu seinem embryonalen Keimblattursprung ist fachlich korrekt?",
    options: {
      A: "Das Nebennierenmark stammt aus dem Mesoderm",
      B: "Die Skelettmuskulatur der Extremitäten stammt aus dem Oberflächenektoderm",
      C: "Die Schilddrüsenfollikelepithelien stammen aus dem Entoderm, während der Zahnschmelz aus dem Ektoderm hervorgeht",
      D: "Die Nieren und Harnleiter stammen vollständig aus dem Entoderm",
      E: "Das gesamte zentrale und periphere Nervensystem stammt aus dem Mesoderm"
    },
    correct_answer: "C",
    explanation_correct: "Das Epithel der Schilddrüse (Thyreozyten), Nebenschilddrüsen, Lunge, Leber und des Gastrointestinaltrakts stammt aus dem Entoderm (Ausstülpung des Vorderdarms). Der Zahnschmelz (Enamelum) ist das am stärksten mineralisierte Gewebe des Körpers und stammt aus den Adamantoblasten (Ameloblasten) des oralen Ektoderms (Schmelzorgan).",
    explanations_incorrect: {
      A: "Das Nebennierenmark leitet sich von den Neuralleistenzellen (Ektoderm/Neuroektoderm) ab; die Nebennierenrinde entsteht aus dem Zölomepithel des Mesoderms.",
      B: "Die Skelettmuskulatur stammt aus den Myotomen der mesodermalen Somiten (paraxiales Mesoderm).",
      D: "Der Urogenitaltrakt (Nieren, Ureteren, Keimdrüsen) stammt aus dem intermediären Mesoderm.",
      E: "Das gesamte Nervensystem (ZNS aus Neuralrohr, PNS aus Neuralleiste) ist ektodermalen Ursprungs."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 5: Genetik, Vererbung & Chromosomen (bio-04-genetik) - 5 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-019",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Chromosomenmorphologie: Akrozentrische Chromosomen",
    difficulty: "foundational",
    stem: "Welche der folgenden Gruppen umfasst ausschließlich akrozentrische Chromosomen des normalen menschlichen Karyotyps, die Satelliten und Nukleolus-Organisator-Regionen (NOR) tragen?",
    options: {
      A: "Chromosomen 1, 2, 3 und das X-Chromosom",
      B: "Chromosomen 4, 5, 6 und 7",
      C: "Chromosomen 9, 10, 11 und 12",
      D: "Chromosomen 13, 14, 15, 21 und 22",
      E: "Chromosomen 19, 20 und das Y-Chromosom"
    },
    correct_answer: "D",
    explanation_correct: "Im menschlichen Karyotyp existieren genau fünf Paare akrozentrischer Autosomen: die Chromosomen der D-Gruppe (13, 14, 15) und der G-Gruppe (21, 22). Bei akrozentrischen Chromosomen liegt das Zentromer sehr nah an einem Chromosomenende, sodass ein extrem kurzer p-Arm (Stiel und Satellit) resultiert. Diese kurzen Arme tragen die ribosomalen DNA-Repeats (rDNA für 18S, 5.8S und 28S rRNA), die sogenannten Nukleolus-Organisator-Regionen (NOR). An diesen Chromosomen können Robertsonsche Translokationen auftreten.",
    explanations_incorrect: {
      A: "Chromosomen 1, 2, 3 sind große metazentrische bzw. submetazentrische Chromosomen (A-Gruppe); das X-Chromosom ist mittelgroß submetazentrisch (C-Gruppe).",
      B: "Chromosomen 4 und 5 sind submetazentrisch (B-Gruppe).",
      C: "Chromosomen 9–12 gehören zur submetazentrischen C-Gruppe.",
      E: "Chromosomen 19 und 20 sind kleine metazentrische Chromosomen (F-Gruppe)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-020",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "X-chromosomal-dominante Vererbung",
    difficulty: "intermediate",
    stem: "Ein Mann ist an einer seltenen X-chromosomal-dominant vererbten Erkrankung (z. B. Vitamin-D-resistente hypophosphatämische Rachitis) erkrankt. Seine Ehepartnerin ist phänotypisch gesund und homozygot für das Wildtyp-Allel. Mit welcher Wahrscheinlichkeit sind die leiblichen Töchter bzw. Söhne dieses Paares von der Erkrankung betroffen?",
    options: {
      A: "50% der Töchter und 50% der Söhne",
      B: "100% der Söhne und 0% der Töchter",
      C: "0% der Töchter und 0% der Söhne",
      D: "75% der Töchter und 25% der Söhne",
      E: "100% der Töchter und 0% der Söhne"
    },
    correct_answer: "E",
    explanation_correct: "Bei einem X-chromosomal-dominanten Erbgang trägt der betroffene Vater auf seinem einzigen X-Chromosom das mutierte dominante Allel (X^A Y). An seine Söhne gibt der Vater obligat sein Y-Chromosom weiter (Y). Da die Mutter gesund ist (X^a X^a), erhalten alle Söhne das gesunde mütterliche X^a (X^a Y) und sind zu 0% betroffen. An alle Töchter vererbt der Vater jedoch zwingend sein mutiertes X^A-Chromosom. Da das Merkmal dominant ist, reicht ein einzelnes mutiertes Allel für die Ausprägung des Phänotyps aus (X^A X^a). Daher sind 100% der Töchter betroffen.",
    explanations_incorrect: {
      A: "50% für beide Geschlechter träfe zu, wenn die Mutter heterozygot betroffen wäre (X^A X^a) und der Vater gesund (X^a Y).",
      B: "Das Y-Chromosom trägt das Gen nicht; Väter vererben kein X an ihre Söhne.",
      C: "Die Töchter erhalten zwingend das dominante mutierte Allel und erkranken.",
      D: "Dies entspricht keinem monogenen Mendel-Spaltungsverhältnis für diese Elternkombination."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-021",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Mitochondriale Vererbung & Heteroplasmie",
    difficulty: "intermediate",
    stem: "Welches Vererbungsmuster ist charakteristisch für Erkrankungen, die durch Mutationen in der mitochondrialen DNA (mtDNA, z. B. LHON oder MERRF) verursacht werden?",
    options: {
      A: "Ausschließlich maternale Übertragung: Eine betroffene Mutter kann die Mutation an alle ihre Kinder weitergeben, während ein betroffener Vater die Erkrankung an keines seiner Kinder vererbt",
      B: "Paternale Übertragung: Väter vererben die Erkrankung an 100% ihrer Söhne über das Spermatozoen-Mitochondrium",
      C: "Mendelsche 3:1-Spaltung in der F2-Generation bei Kreuzung zweier Träger",
      D: "X-chromosomale Kopplung mit Bevorzugung des männlichen Geschlechts",
      E: "Rezidivierende Neumutationen im Zellkern durch DNA-Polymerase gamma"
    },
    correct_answer: "A",
    explanation_correct: "Mitochondrien besitzen ein eigenes ringförmiges Genom (mtDNA mit 37 Genen). Bei der Befruchtung steuert die Eizelle ca. 100.000 bis 200.000 Mitochondrien bei, während die wenigen Mitochondrien des Spermiums (im Mittelstück) bei der Befruchtung eliminiert oder durch Ubiquitinierung abgebaut werden. Daher wird mtDNA rein maternal (mütterlicherseits) vererbt. Eine betroffene Frau vererbt die mutierte mtDNA an alle Kinder (Söhne und Töchter), während betroffene Männer die Mutation niemals an ihre Nachkommen weitergeben. Die phänotypische Ausprägung variiert durch Heteroplasmie (Koexistenz mutierter und normaler mtDNA in einer Zelle) und Schwellenwerteffekte.",
    explanations_incorrect: {
      B: "Paternale Mitochondrien werden nach der Befruchtung aktiv degradiert; es gibt keine paternale mtDNA-Transmission.",
      C: "Mitochondriale Gene unterliegen nicht den klassischen Mendelschen Regeln der Kernchromosomen.",
      D: "Die Vererbung ist extrachromosomal/zytoplasmatisch und nicht an Geschlechtschromosomen gekoppelt.",
      E: "DNA-Polymerase gamma repliziert die mitochondriale DNA, ist aber ein kernkodiertes Enzym; dies erklärt nicht das Vererbungsmuster."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-022",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Strukturelle Chromosomenaberrationen: Inversionen",
    difficulty: "intermediate",
    stem: "Wie unterscheidet sich eine perizentrische Inversion von einer parazentrischen Inversion eines Chromosoms?",
    options: {
      A: "Eine perizentrische Inversion betrifft zwei verschiedene Chromosomen, während eine parazentrische Inversion innerhalb desselben Chromosoms stattfindet",
      B: "Eine perizentrische Inversion schließt das Zentromer in das invertierte Chromosomensegment ein, während eine parazentrische Inversion ausschließlich auf einem Chromosomenarm liegt",
      C: "Eine perizentrische Inversion führt immer zu einem doppelten Chromosomensatz (Polyploidie)",
      D: "Eine parazentrische Inversion schließt stets die Telomerregionen beider Arme ein",
      E: "Bei einer perizentrischen Inversion geht genetisches Material verloren (Deletion), während die parazentrische Inversion balanciert bleibt"
    },
    correct_answer: "B",
    explanation_correct: "Bei einer Inversion bricht ein Chromosom an zwei Stellen, das Bruchstück dreht sich um 180° und wird wieder eingefügt (balancierte Aberration ohne Nettoverlust von genetischem Material). Bei einer perizentrischen Inversion (peri = um herum) liegen die beiden Bruchpunkte auf unterschiedlichen Chromosomenarmen, sodass das Zentromer innerhalb des invertierten Segments liegt; dies kann das Zentromerverhältnis und damit die Form des Chromosoms verändern. Bei einer parazentrischen Inversion (para = neben) liegen beide Bruchpunkte auf demselben Arm (entweder nur im p-Arm oder nur im q-Arm), sodass das Zentromer nicht beteiligt ist.",
    explanations_incorrect: {
      A: "Inversionen betreffen definitionsgemäß immer nur ein einzelnes Chromosom; Umlagerungen zwischen zwei Chromosomen sind Translokationen.",
      C: "Polyploidie betrifft ganze Chromosomensätze, keine segmentalen Inversionen.",
      D: "Parazentrische Inversionen liegen innerhalb eines Arms und schließen Telomere typischerweise nicht beidseits ein.",
      E: "Beide Inversionstypen sind per se balanciert (ohne Verlust genetischer Substanz), können aber in der Meiose zu unbalancierten Gameten führen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-023",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Hardy-Weinberg-Gleichgewicht & Heterozygotenfrequenz",
    difficulty: "advanced",
    stem: "In einer Population im Hardy-Weinberg-Gleichgewicht beträgt die Häufigkeit (Inzidenz) von Neugeborenen mit der autosomal-rezessiven Erkrankung Mukoviszidose (Cystische Fibrose) 1 zu 2.500 (q^2 = 0,0004). Wie hoch ist in dieser Population gerundet die Häufigkeit gesunder heterozygoter Anlagenträger (2pq)?",
    options: {
      A: "Etwa 1 zu 2.500 (ca. 0,04%)",
      B: "Etwa 1 zu 500 (ca. 0,2%)",
      C: "Etwa 1 zu 25 bis 1 zu 26 (ca. 3,8% bis 4%)",
      D: "Etwa 1 zu 10 (ca. 10%)",
      E: "Etwa 1 zu 2 (ca. 50%)"
    },
    correct_answer: "C",
    explanation_correct: "Nach dem Hardy-Weinberg-Gesetz gilt: p^2 + 2pq + q^2 = 1 und p + q = 1. 1. Gegeben ist die Häufigkeit der homozygot Betroffenen: q^2 = 1/2.500 = 0,0004. 2. Daraus folgt die Allelfrequenz des mutierten rezessiven Allels: q = sqrt(0,0004) = 0,02 (= 1/50). 3. Die Frequenz des gesunden dominanten Allels beträgt: p = 1 - q = 1 - 0,02 = 0,98. 4. Die Heterozygotenfrequenz (Trägerfrequenz) berechnet sich als: 2pq = 2 * 0,98 * 0,02 = 0,0392 = 3,92%. 1 / 0,0392 = ca. 25,5. Somit ist etwa 1 von 25 bis 26 Personen in dieser Population ein gesunder Konduktor für Mukoviszidose.",
    explanations_incorrect: {
      A: "0,04% ist q^2, die Häufigkeit der homozygot Erkrankten, nicht der Heterozygoten.",
      B: "0,2% wäre q/10, ein Rechenfehler bei der Wurzelziehung.",
      D: "10% ist viel zu hoch für diese Allelfrequenz (q = 0,02).",
      E: "50% träfe nur bei einer Allelfrequenz von p = q = 0,5 zu."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 6: Molekulargenetik & Methoden (bio-05-molgen) - 5 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-024",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Replikation: Leit- & Folgestrangsynthese",
    difficulty: "foundational",
    stem: "Warum erfolgt die Synthese des Folgestrangs bei der eukaryotischen DNA-Replikation diskontinuierlich in Form von Okazaki-Fragmenten?",
    options: {
      A: "Weil die DNA-Polymerasen Nukleotide nur an das 5'-Triphosphat-Ende anfügen können",
      B: "Weil Topoisomerasen die Replikationsgabel nur in 100-Basenpaar-Schritten entwinden",
      C: "Weil Desoxyribonukleosidtriphosphate (dNTPs) nur an Einzelstrang-Bindeproteine binden können",
      D: "Weil alle bekannten DNA-Polymerasen eine Kette strikt nur in 5'->3'-Richtung synthetisieren können und die Stränge der Doppelhelix antiparallel verlaufen",
      E: "Weil die DNA-Ligase die Vorlage in 3'->5'-Richtung kontinuierlich zerschneidet"
    },
    correct_answer: "D",
    explanation_correct: "Die beiden Stränge der DNA-Doppelhelix sind antiparallel orientiert (ein Strang verläuft 5'->3', der Gegenstrang 3'->5'). Alle zellulären DNA-Polymerasen können neue Nukleotide enzymatisch ausschließlich an ein freies 3'-OH-Ende des wachsenden Stranges anfügen; die Synthese verläuft daher biochemisch ausnahmslos in 5'->3'-Richtung. Da die Replikationsgabel nur in eine Richtung aufwandert, kann nur der Leitstrang (Leading Strand) kontinuierlich in Gabelrichtung synthetisiert werden. Der Folgestrang (Lagging Strand) muss von der Gabel weg diskontinuierlich in kurzen Abschnitten (Okazaki-Fragmente, jeweils beginnend mit einem RNA-Primer) repliziert werden, die später durch die DNA-Ligase verknüpft werden.",
    explanations_incorrect: {
      A: "Die Polymerase benötigt ein freies 3'-OH-Ende; das 5'-Triphosphat stammt vom ankommenden dNTP.",
      B: "Topoisomerasen lösen Verdrillungen (Torsionsspannung) durch Strangbrüche, bestimmen aber nicht die Fragmentlänge.",
      C: "Single-Strand Binding Proteins (SSB / RPA) stabilisieren Einzelstränge, binden aber keine dNTPs zur Synthese.",
      E: "Die DNA-Ligase schließt Phosphodiesterbindungen, sie schneidet keine DNA."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-025",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "RNA-Polymerasen in Eukaryoten",
    difficulty: "intermediate",
    stem: "Welche der folgenden Aussagen ordnet die eukaryotischen RNA-Polymerasen korrekt ihren primären Transkriptionsprodukten zu?",
    options: {
      A: "RNA-Polymerase I synthetisiert mRNA; RNA-Polymerase II synthetisiert tRNA; RNA-Polymerase III synthetisiert 28S rRNA",
      B: "RNA-Polymerase II synthetisiert ausschließlich Transfer-RNAs (tRNAs) und ribosomale 5S rRNA",
      C: "RNA-Polymerase I synthetisiert alle microRNAs (miRNAs); RNA-Polymerase III transkribiert proteinkodierende Gene",
      D: "RNA-Polymerase I transkribiert mitochondriale Gene; RNA-Polymerase II transkribiert chloroplastidäre DNA",
      E: "RNA-Polymerase I synthetisiert die großen rRNAs (28S, 18S, 5.8S); RNA-Polymerase II synthetisiert mRNA und snRNA; RNA-Polymerase III synthetisiert tRNA und 5S rRNA"
    },
    correct_answer: "E",
    explanation_correct: "Im eukaryotischen Zellkern existieren drei spezialisierte RNA-Polymerasen: 1. RNA-Polymerase I (im Nukleolus): Synthetisiert das große 45S-Prä-rRNA-Transkript, aus dem die 18S-, 5.8S- und 28S-rRNAs prozessiert werden (ca. 80% der zellulären RNA). 2. RNA-Polymerase II (im Karyoplasma): Transkribiert alle proteinkodierenden Gene zu prä-mRNA sowie snRNAs (Spliceosom) und lncRNAs. 3. RNA-Polymerase III (im Karyoplasma): Synthetisiert kleine, stabile RNAs, insbesondere alle Transfer-RNAs (tRNAs), die 5S rRNA und die U6 snRNA.",
    explanations_incorrect: {
      A: "Vollständig vertauschte Zuordnung.",
      B: "tRNA und 5S rRNA werden von RNA-Polymerase III transkribiert.",
      C: "Proteinkodierende Gene werden von Pol II transkribiert, nicht von Pol III.",
      D: "Mitochondrien besitzen eine eigene, bakterienähnliche mitochondriale RNA-Polymerase (POLRMT)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-026",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Posttranskriptionale Modifikationen: Spleißen & Cap",
    difficulty: "intermediate",
    stem: "Welcher molekulare Reifungsschritt findet bei menschlicher prä-mRNA im Zellkern statt und schützt das 5'-Ende vor vorzeitigem exonukleotischem Abbau?",
    options: {
      A: "Anheften einer 7-Methylguanosin-Kappe über eine ungewöhnliche 5'-5'-Triphosphatbindung (Capping)",
      B: "Polyadenylierung durch Verknüpfung von 200 Guaninresten am 5'-Ende",
      C: "Zerschneiden der Exons durch das Spleißosom und Verknüpfung der Introns",
      D: "Methylierung aller Adeninbasen zur Initiierung der Translation am Stopcodon",
      E: "Entfernung der TATA-Box durch eine Endonuklease"
    },
    correct_answer: "A",
    explanation_correct: "Das 5'-Capping erfolgt kotranskriptionell bereits nach Synthese der ersten 20–30 Nukleotide: Ein Guanylyltransferase-Enzymkomplex bindet an die phosphorylierte CTD-Domäne der RNA-Polymerase II und verknüpft ein Guanosinmonophosphat über eine seltene 5'-zu-5'-Triphosphatbrücke mit dem ersten Nukleotid der prä-mRNA. Das Guanosin wird anschließend an Position N7 methyliert (m7G-Cap). Das Cap schützt die mRNA vor dem Abbau durch zelluläre 5'->3'-Exonukleasen, dient als Bindestelle für den Cap-Binding-Complex (CBC) für den Kernexport und wird im Zytosol vom Translationsinitiationsfaktor eIF4E erkannt.",
    explanations_incorrect: {
      B: "Der Poly(A)-Schwanz besteht aus Adeninresten (nicht Guanin) und wird am 3'-Ende (nicht am 5'-Ende) angehängt.",
      C: "Das Spleißosom entfernt Introns und verknüpft die Exons (nicht umgekehrt).",
      D: "N6-Methyladenosin (m6A) ist eine epigenetische RNA-Modifikation, betrifft aber nicht alle Basen und startet keine Translation am Stopcodon.",
      E: "Die TATA-Box liegt in der genomischen Promoter-DNA und wird gar nicht in die mRNA transkribiert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-027",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Translation: Aminoacyl-tRNA-Synthetasen",
    difficulty: "advanced",
    stem: "Wie wird die hohe Translationsgenauigkeit bei der Beladung der tRNAs mit ihren korrekten Aminosäuren biochemisch gewährleistet?",
    options: {
      A: "Das Ribosom überprüft an der A-Stelle die chemische Struktur der Seitenkette jeder Aminosäure",
      B: "Spezifische Aminoacyl-tRNA-Synthetasen erkennen sowohl die korrekte Aminosäure als auch das passende tRNA-Molekül und besitzen eine hydrolytische Korrekturlesefunktion (Editing-Zentrum)",
      C: "Die Peptidyltransferase spaltet falsch beladene tRNAs irreversibel in Mononukleotide",
      D: "Der genetische Code enthält für jede Aminosäure exakt ein einziges unzweideutiges Codon",
      E: "tRNAs binden Aminosäuren spontan ohne enzymatische Katalyse über ionische Bindungen am Anticodon"
    },
    correct_answer: "B",
    explanation_correct: "Das Ribosom kontrolliert während der Translation nur die Basenpaarung zwischen Codon und Anticodon, nicht aber, ob die tRNA mit der richtigen Aminosäure beladen ist. Daher liegt die primäre Genauigkeit bei den Aminoacyl-tRNA-Synthetasen. Jede Synthetase besitzt eine Bindungstasche für ihre spezifische Aminosäure und erkennt distinkte Sequenzelemente der tRNA (Anticodonschleife und Akzeptorarm). Viele Synthetasen besitzen zudem ein zweites katalytisches Zentrum (Editing Site): Ähnliche, fälschlich aktivierte Aminosäuren (z. B. Valin statt Isoleucin) passen in das engere Editing-Zentrum und werden dort hydrolytisch gespalten, bevor die fehlerhafte Aminoacyl-tRNA freigesetzt werden kann (Fehlerrate < 10^-4).",
    explanations_incorrect: {
      A: "Das Ribosom prüft nur die Codon-Anticodon-Passung in der Dekodierungsregion der 40S-Untereinheit, nicht die Aminosäure selbst.",
      C: "Die Peptidyltransferase verknüpft Aminosäuren zu Peptidketten, besitzt aber keine Editing-Aktivität für freie tRNAs.",
      D: "Der genetische Code ist degeneriert (redundant); die meisten Aminosäuren werden durch 2 bis 6 Synonymcodons kodiert (z. B. Leucin, Serin, Arginin durch je 6 Codons).",
      E: "Die Beladung ist ein enzymatischer, ATP-abhängiger zweistufiger Prozess, bei dem die Aminosäure an das 3'-CCA-Ende esterartig geknüpft wird."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-028",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Polymerase-Kettenreaktion (PCR): Reaktionsschritte",
    difficulty: "foundational",
    stem: "In welcher Reihenfolge laufen die drei zyklischen Reaktionsschritte einer standardmäßigen Polymerase-Kettenreaktion (PCR) ab?",
    options: {
      A: "Elongation (ca. 72 °C) -> Denaturierung (ca. 95 °C) -> Primer-Annealing (ca. 55 °C)",
      B: "Primer-Annealing (ca. 95 °C) -> Ligation (ca. 37 °C) -> Denaturierung (ca. 72 °C)",
      C: "Denaturierung der DNA-Doppelstränge (ca. 95 °C) -> Primer-Annealing (ca. 50–65 °C) -> Elongation durch thermostabile DNA-Polymerase (ca. 72 °C)",
      D: "Translation (ca. 37 °C) -> Transkription (ca. 60 °C) -> Replikation (ca. 95 °C)",
      E: "Restriktionsverdau (ca. 37 °C) -> Gelelektrophorese (ca. 20 °C) -> Denaturierung (ca. 95 °C)"
    },
    correct_answer: "C",
    explanation_correct: "Jeder Zyklus der PCR besteht aus drei temperaturabhängigen Schritten: 1. Denaturierung (~94–98 °C): Aufbrechen der Wasserstoffbrückenbindungen zwischen den komplementären Basensträngen; es entstehen einzelsträngige DNA-Vorlagen. 2. Primer-Annealing (~50–65 °C): Spezifische Anlagerung der synthetischen Vorwärts- und Rückwärts-Oligonukleotid-Primer an die flankierenden Sequenzen der Zielregion. 3. Elongation / Extension (~72 °C): Die hitzestabile DNA-Polymerase (z. B. Taq-Polymerase aus Thermus aquaticus) synthetisiert ausgehend von den 3'-OH-Enden der Primer komplementäre Stränge unter Einbau freier dNTPs.",
    explanations_incorrect: {
      A: "Falsche Reihenfolge (Elongation steht am Ende jedes Zyklus).",
      B: "Bei 95 °C denaturiert DNA; Primer können bei dieser Temperatur nicht binden (Annealing liegt bei 50–65 °C).",
      D: "PCR ist eine reine In-vitro-DNA-Replikationsmethode und umfasst weder Transkription noch Translation.",
      E: "Restriktionsverdau und Elektrophorese sind separate Methoden der DNA-Analytik, keine Teilschritte des PCR-Thermozyklus."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 7: Zellstoffwechsel & Energiegewinnung (bio-06-stoffwechsel) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-029",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Enzymkinetik: Michaelis-Menten & Km-Wert",
    difficulty: "foundational",
    stem: "Was gibt die Michaelis-Konstante (Km-Wert) in der Enzymkinetik nach Michaelis und Menten direkt an?",
    options: {
      A: "Die maximale Geschwindigkeit Vmax, die bei vollständiger Enzyminaktivierung erreicht wird",
      B: "Die Konzentration des Enzyms, bei der alle allosterischen Effektoren abdissoziieren",
      C: "Die Aktivierungsenergie, die zur Spaltung des Übergangszustands nötig ist",
      D: "Die Substratkonzentration, bei der die Reaktionsgeschwindigkeit exakt die Hälfte der Maximalgeschwindigkeit (1/2 Vmax) beträgt",
      E: "Das Temperaturoptimum, bei dem ein Enzym denaturiert"
    },
    correct_answer: "D",
    explanation_correct: "Die Michaelis-Menten-Konstante Km ist definiert als diejenige Substratkonzentration [S], bei der die enzymatische Reaktionsgeschwindigkeit v genau die Hälfte der Maximalgeschwindigkeit erreicht (v = Vmax/2). Sie besitzt die Einheit einer Konzentration (mol/l) und ist ein inverses Maß für die scheinbare Affinität des Enzyms zu seinem Substrat: Ein kleiner Km-Wert bedeutet, dass bereits sehr geringe Substratkonzentrationen genügen, um das Enzym halbmaximal zu sättigen (hohe Affinität); ein großer Km-Wert reflektiert eine niedrige Affinität.",
    explanations_incorrect: {
      A: "Vmax ist die Maximalgeschwindigkeit bei vollständiger Substratsättigung des Enzyms, nicht bei Enzyminaktivierung.",
      B: "Km bezieht sich auf die Substratkonzentration, nicht auf die Enzymkonzentration.",
      C: "Die Aktivierungsenergie wird durch Enzyme gesenkt, aber nicht durch den Km-Wert beziffert (dies beschreibt die Arrhenius-Gleichung).",
      E: "Das Temperaturoptimum ist eine kinetische Eigenschaft der Proteinstabilität, nicht der Km-Wert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-030",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Glykolyse: Schrittmacherenzym PFK-1",
    difficulty: "intermediate",
    stem: "Welcher allosterische Effektor wirkt als stärkster physiologischer Aktivator des Schrittmacherenzyms Phosphofructokinase-1 (PFK-1) in der menschlichen Glykolyse?",
    options: {
      A: "Hohe Konzentrationen von ATP",
      B: "Citrat aus dem Mitochondrium",
      C: "Glukagon über cAMP-abhängige Proteinkinase A",
      D: "NADH/H+ aus der oxidativen Phosphorylierung",
      E: "Fructose-2,6-bisphosphat (F-2,6-BP)"
    },
    correct_answer: "E",
    explanation_correct: "Die Phosphofructokinase-1 (PFK-1), die Fructose-6-phosphat unter ATP-Verbrauch zu Fructose-1,6-bisphosphat phosphoryliert, ist das zentrale Schrittmacherenzym der Glykolyse. Ihr potentester allosterischer Aktivator ist Fructose-2,6-bisphosphat (F-2,6-BP), welches durch das bifunktionelle Enzym PFK-2 synthetisiert wird (stimuliert durch Insulin bei hoher Glukoseverfügbarkeit). F-2,6-BP überwindet die allosterische Hemmung von PFK-1 durch ATP und steigert die Glykolyserate dramatisch. Auch AMP ist ein allosterischer Aktivator (Signal für Energiemangel).",
    explanations_incorrect: {
      A: "Hohe ATP-Konzentrationen signalisieren Energieüberschuss und hemmen PFK-1 allosterisch.",
      B: "Citrat aus dem Citratzyklus signalisiert ausreichende Bausteine und hemmt PFK-1 allosterisch.",
      C: "Glukagon phosphoryliert die PFK-2 via PKA, inaktiviert deren Kinasedomäne und senkt den F-2,6-BP-Spiegel, wodurch die Glykolyse in der Leber gehemmt wird.",
      D: "Ein hohes NADH/NAD+-Verhältnis hemmt Dehydrogenasen, ist aber kein allosterischer PFK-1-Aktivator."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-031",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Atmungskette & Chemiosmotische Kopplung",
    difficulty: "advanced",
    stem: "Welche Komplexe der mitochondrialen Atmungskette pumpen bei der Oxidation von NADH/H+ Protonen aus der Matrix in den Intermembranraum?",
    options: {
      A: "Komplex I, Komplex III und Komplex IV",
      B: "Komplex II und Komplex IV",
      C: "Ausschließlich Komplex II (Succinat-Dehydrogenase)",
      D: "Ausschließlich die ATP-Synthase (Komplex V) in umgekehrter Richtung",
      E: "Komplex I und Komplex II, während Komplex III Elektronen direkt auf Wasser überträgt"
    },
    correct_answer: "A",
    explanation_correct: "Die mitochondriale Atmungskette besteht aus vier Multienzymkomplexen in der inneren Mitochondrienmembran: Komplex I (NADH-Ubichinon-Oxidoreduktase) pumpt 4 H+ pro oxidiertem NADH. Komplex II (Succinat-Dehydrogenase / FADH2-Einspeisung) ist integraler Bestandteil des Citratzyklus, überspannt die Membran nicht vollständig und pumpt keine Protonen. Komplex III (Cytochrom-c-Reduktase) pumpt im Q-Zyklus 4 H+. Komplex IV (Cytochrom-c-Oxidase) überträgt Elektronen auf O2 (unter Bildung von H2O) und pumpt 2 H+. Somit fungieren genau die Komplexe I, III und IV als Protonenpumpen (insgesamt 10 H+ pro NADH), die den elektrochemischen Protonengradienten für Komplex V (ATP-Synthase) aufbauen.",
    explanations_incorrect: {
      B: "Komplex II pumpt keine Protonen; ihm fehlt der Transmembrankanal.",
      C: "Komplex II katalysiert die Oxidation von Succinat zu Fumarat ohne Protonentranslokation.",
      D: "Komplex V (ATP-Synthase) pumpt unter physiologischen Bedingungen keine Protonen heraus, sondern nutzt den Rückstrom von Protonen in die Matrix zur ATP-Synthese.",
      E: "Komplex IV (nicht Komplex III) überträgt Elektronen final auf Sauerstoff unter Bildung von Wasser."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-032",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Anaerobe Glykolyse & Lactat-Dehydrogenase",
    difficulty: "intermediate",
    stem: "Welche biologische Notwendigkeit erzwingt bei intensivem Sauerstoffmangel (Hypoxie/Anoxie) im arbeitenden Muskel die Reduktion von Pyruvat zu Lactat durch die Lactat-Dehydrogenase (LDH)?",
    options: {
      A: "Die direkte Synthese von zusätzlichen 4 Molekülen ATP pro Pyruvat",
      B: "Die Reoxidation von NADH/H+ zu NAD+, welches für die Fortführung der Glykolyse am Enzym Glycerinaldehyd-3-phosphat-Dehydrogenase (GAPDH) zwingend benötigt wird",
      C: "Die Neutralisierung des intrazellulären pH-Wertes zur Verhinderung einer Muskelazidose",
      D: "Die Aktivierung des Citratzyklus über einen alternativen Lactat-Transporter",
      E: "Die Speicherung von Sauerstoff in Form von Milchsäurekristallen"
    },
    correct_answer: "B",
    explanation_correct: "In der Glykolyse wird bei der Oxidation von Glycerinaldehyd-3-phosphat (GAP) zu 1,3-Bisphosphoglycerat durch das Enzym GAPDH stöchiometrisch NAD+ zu NADH/H+ reduziert. Unter aeroben Bedingungen wird NADH/H+ über Malat-Aspartat- oder Glycerin-3-phosphat-Shuttles in den Mitochondrien reoxidiert. Fehlt Sauerstoff als terminaler Elektronenakzeptor, staut sich NADH an und der zytosolische NAD+-Pool erschöpft sich rasch, was die Glykolyse stoppen würde. Die Lactat-Dehydrogenase (LDH) reduziert Pyruvat zu Lactat und oxidiert dabei NADH/H+ zurück zu NAD+, sodass die ATP-Gewinnung über die Glykolyse auch unter anaeroben Bedingungen weiterlaufen kann.",
    explanations_incorrect: {
      A: "Bei der LDH-Reaktion selbst entsteht kein ATP; sie dient ausschließlich der NAD+-Regeneration.",
      C: "Die Bildung von Milchsäure senkt den pH-Wert (Lactatazidose), neutralisiert ihn also nicht.",
      D: "Der Citratzyklus steht bei Sauerstoffmangel mangels terminaler Elektronenakzeptoren weitgehend still.",
      E: "Milchsäure bindet keinen Sauerstoff."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 8: Herz-Kreislauf & Blut (bio-07-herzkreislauf) - 2 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-033",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Gefäßsystem & Windkesselfunktion",
    difficulty: "foundational",
    stem: "Welche anatomische Struktur und biophysikalische Eigenschaft ermöglicht die sogenannte Windkesselfunktion der herznahen großen Arterien (Aorta)?",
    options: {
      A: "Eine dicke Schicht aus quergestreifter Skelettmuskulatur, die sich synchron mit den Ventrikeln kontrahiert",
      B: "Zahlreiche Taschenklappen in der Wand der Aorta descendens zur Verhinderung des Rückstroms",
      C: "Ein hoher Anteil elastischer Fasern in der Tunica media, der die Speicherung von Druckenergie während der Systole und deren kontinuierliche Abgabe während der Diastole erlaubt",
      D: "Kollagene Verankerungen am Zwerchfell, die das Lumen atemabhängig aufdehnen",
      E: "Eine kontinuierliche Kapillarisierung der Adventitia zur Drosselung des Blutdrucks auf 0 mmHg"
    },
    correct_answer: "C",
    explanation_correct: "Die herznahen großen Arterien (Aorta und Truncus arteriosus) sind Arterien vom elastischen Typ. Ihre Tunica media enthält dichte Netze elastischer Fasern und Membranen. Während der ventrikulären Austreibungsphase (Systole) dehnt sich die Aortenwand durch das ausgeworfene Schlagvolumen passiv auf und speichert einen Teil der kinetischen Energie als elastische Dehnungsenergie (Windkessel). In der Diastole, wenn die Aortenklappe geschlossen ist, federt die elastische Wand zurück und treibt das Blut weiter vorwärts. Dadurch wird der diskontinuierliche, pulsatile Blutauswurf des Herzens in einen weitgehend kontinuierlichen peripheren Blutstrom umgewandelt und die Blutdruckamplitude gedämpft.",
    explanations_incorrect: {
      A: "Arterien enthalten glatte Muskulatur, niemals quergestreifte Skelettmuskulatur.",
      B: "Taschenklappen befinden sich am Abgang der Aorta aus dem linken Ventrikel (Aortenklappe), nicht entlang der Aorta descendens.",
      D: "Das Zwerchfell beeinflusst den intraabdominellen Druck, begründet aber nicht die elastische Windkesselfunktion der Aorta.",
      E: "Die Vasa vasorum versorgen die Gefäßwand, drosseln aber nicht den arteriellen Blutdruck auf 0 mmHg."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-034",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Herzmechanik: Ejektionsfraktion & Schlagvolumen",
    difficulty: "intermediate",
    stem: "Bei einer gesunden erwachsenen Person wird im Ruhe-Echokardiogramm ein linksventrikuläres enddiastolisches Volumen (EDV) von 120 ml und ein endsystolisches Volumen (ESV) von 48 ml gemessen. Wie hoch sind das Schlagvolumen (SV) und die Ejektionsfraktion (EF) dieser Person?",
    options: {
      A: "SV = 48 ml; EF = 40%",
      B: "SV = 168 ml; EF = 71%",
      C: "SV = 60 ml; EF = 50%",
      D: "SV = 72 ml; EF = 60%",
      E: "SV = 96 ml; EF = 80%"
    },
    correct_answer: "D",
    explanation_correct: "Das Schlagvolumen (SV) ist das Blutvolumen, das die Herzkammer pro Herzschlag auswirft: SV = EDV - ESV = 120 ml - 48 ml = 72 ml. Die Ejektionsfraktion (EF) ist der prozentuale Anteil des enddiastolischen Volumens, der ausgeworfen wird: EF = (SV / EDV) * 100% = (72 ml / 120 ml) * 100% = 0,60 * 100% = 60%. Ein Wert von 60% liegt im physiologischen Normbereich eines gesunden Erwachsenen (55–70%).",
    explanations_incorrect: {
      A: "48 ml ist das ESV; 40% wäre eine pathologisch reduzierte EF.",
      B: "168 ml ist die Summe (EDV + ESV), nicht die Differenz.",
      C: "Falsche Subtraktion.",
      E: "Falsche Werteberechnung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 9: Atmung & Gasaustausch (bio-08-atmung) - 2 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-035",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Alveolensurfactant & Laplace-Gesetz",
    difficulty: "intermediate",
    stem: "Welche biologische Substanz wird von Pneumozyten Typ II in den Alveolen sezerniert, und welche lebenswichtige Funktion übt sie aus?",
    options: {
      A: "Mucin, welches Fremdkörper über das Flimmerepithel zur Glottis transportiert",
      B: "Carboanhydrase, die Bicarbonat im Alveolarraum direkt in gasförmiges CO2 umwandelt",
      C: "Histamin, das durch Bronchokonstriktion den Atemwiderstand im Schlaf maximiert",
      D: "Pepsin, das inhalierte Proteinantigene in den Alveolen enzymatisch zerstört",
      E: "Surfactant (Dipalmitoylphosphatidylcholin), das die Oberflächenspannung der Alveolen herabsetzt und deren Kollabieren bei der Exspiration verhindert"
    },
    correct_answer: "E",
    explanation_correct: "Pneumozyten Typ II (Alveolarepithelzellen Typ II) sezernieren Surfactant (Surface Active Agent), ein Phospholipid-Protein-Gemisch, dessen Hauptbestandteil Dipalmitoylphosphatidylcholin (DPPC) zusammen mit Surfactant-Proteinen (SP-A, SP-B, SP-C, SP-D) ist. Nach dem Laplace-Gesetz (P = 2 * gamma / r) wäre der kollabierende Druck in kleinen Alveolen mit geringem Radius r bei konstanter Oberflächenspannung gamma viel höher als in großen Alveolen, was zur Entleerung kleiner Alveolen in große und zum Atelektasen-Kollaps führen würde. Surfactant setzt die Oberflächenspannung gamma drastisch herab (besonders stark bei abnehmender Alveolengröße in der Exspiration), stabilisiert unterschiedlich große Alveolen und senkt die zur Inspiration erforderliche Atemarbeit.",
    explanations_incorrect: {
      A: "Schleim (Mucin) wird von Becherzellen im Bronchialbaum gebildet; in den Alveolen gibt es keine Becherzellen und kein Flimmerepithel.",
      B: "Carboanhydrase ist ein erythrozytäres und tubuläres Enzym, liegt aber nicht frei im Alveolarlumen vor.",
      C: "Histamin wird von Mastzellen sezerniert und führt pathologisch bei Asthma zur Bronchokonstriktion, ist aber kein Surfactant.",
      D: "Pepsin ist ein Magenenzym und kommt in den Atemwegen nicht vor."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-036",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Sauerstoffbindungskurve & 2,3-Bisphosphoglycerat (2,3-BPG)",
    difficulty: "advanced",
    stem: "Welche physiologische Veränderung führt zu einer Rechtsverschiebung der Sauerstoff-Bindungskurve des Hämoglobins und erleichtert dadurch die Sauerstoffabgabe im peripheren Gewebe?",
    options: {
      A: "Ein Anstieg der Temperatur, ein Abfall des pH-Wertes (Azidose / Bohr-Effekt), ein Anstieg des pCO2 sowie ein Anstieg der Konzentration von 2,3-Bisphosphoglycerat (2,3-BPG)",
      B: "Ein Abfall der Temperatur (Hypothermie) und ein Anstieg des pH-Wertes (Alkalose)",
      C: "Eine vollständige Abwesenheit von 2,3-Bisphosphoglycerat in den Erythrozyten",
      D: "Eine Vergiftung mit Kohlenmonoxid (CO), die eine Rechtsverschiebung erzwingt",
      E: "Der Ersatz von adultem Hämoglobin HbA durch fetales Hämoglobin HbF"
    },
    correct_answer: "A",
    explanation_correct: "Eine Rechtsverschiebung der Sauerstoffbindungskurve bedeutet eine Senkung der Sauerstoffaffinität des Hämoglobins (P50-Wert steigt). Dies bewirkt, dass bei gleichem Sauerstoffpartialdruck mehr O2 an das Gewebe abgegeben wird. Vier Faktoren begünstigen die desoxygenierte T-Form (Tense State) des Hämoglobins und verursachen eine Rechtsverschiebung: 1. Erhöhung der H+-Konzentration (pH-Abfall / Azidose, sogenannter Bohr-Effekt), 2. Erhöhung des pCO2, 3. Erhöhung der Temperatur (z. B. im stoffwechselaktiven Arbeitsmuskel oder bei Fieber), 4. Erhöhte Konzentration von 2,3-Bisphosphoglycerat (2,3-BPG) in den Erythrozyten (allosterischer Effektor, der in der zentralen Tasche des Desoxyhämoglobins bindet).",
    explanations_incorrect: {
      B: "Hypothermie und Alkalose bewirken eine Linksverschiebung (erhöhte Affinität, erschwerte Sauerstoffabgabe).",
      C: "Mangel an 2,3-BPG (z. B. in alten Blutkonserven) führt zu einer extremen Linksverschiebung.",
      D: "CO bindet mit 200–300-fach höherer Affinität an Hämoglobin und blockiert Bindungsstellen, stabilisiert die R-Form und bewirkt eine gefährliche Linksverschiebung der restlichen Untereinheiten.",
      E: "Fetales Hämoglobin (HbF) bindet 2,3-BPG schlechter und besitzt eine höhere O2-Affinität als adultes HbA (Linksverschiebung, um O2 aus dem mütterlichen Blut aufzunehmen)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 10: Nervensystem & Hormonsystem (bio-09-nervensystem) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-037",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Ruhemembranpotenzial & Na+/K+-ATPase",
    difficulty: "intermediate",
    stem: "Welcher Ionenstrom und welcher Transporter sind primär für die Entstehung und dauerhafte Aufrechterhaltung des negativen Ruhemembranpotenzials (ca. -70 mV) eines menschlichen Neurons verantwortlich?",
    options: {
      A: "Ein kontinuierlicher Einstrom von Natriumionen durch spannungsabhängige Natriumkanäle",
      B: "Ein passiver K+-Ausstrom durch K+-Leckkanäle entlang des chemischen Gradienten sowie die elektrogene Na+/K+-ATPase (3 Na+ nach außen / 2 K+ nach innen)",
      C: "Ein aktiver Calciumaustausch über den sarcoplasmatischen Ryanodin-Rezeptor",
      D: "Ein elektrogener Ausstrom von Chloridionen über GABA-A-Rezeptoren",
      E: "Die vollständige Impermeabilität der Zellmembran für sämtliche anorganischen Kationen"
    },
    correct_answer: "B",
    explanation_correct: "Das Ruhemembranpotenzial menschlicher Nervenzellen (ca. -70 bis -80 mV) beruht auf zwei Grundprinzipien: 1. Konzentrationsgradienten: Die Na+/K+-ATPase pumpt aktiv unter ATP-Verbrauch 3 Na+-Ionen aus der Zelle heraus und 2 K+-Ionen in die Zelle hinein, wodurch intrazellulär eine hohe K+-Konzentration (~140 mM) und extrazellulär eine hohe Na+-Konzentration (~145 mM) etabliert wird. 2. Selektive Membranpermeabilität: Im Ruhezustand ist die Membran durch konstitutiv geöffnete K+-Leckkanäle (z. B. K2P-Kanäle) weit überwiegend für K+-Ionen permeabel. K+ diffundiert entlang seines Konzentrationsgradienten nach außen, wodurch positive Ladung exportiert wird und das Zellinnere negativ geladen zurückbleibt, bis sich ein elektrochemisches Gleichgewicht (nahe dem K+-Gleichgewichtspotenzial nach Nernst bei ca. -90 mV) einstellt.",
    explanations_incorrect: {
      A: "Na+-Einstrom depolarisiert die Zelle (Aktionspotenzial), baut aber kein negatives Ruhepotenzial auf.",
      C: "Ryanodin-Rezeptoren setzen Calcium aus dem ER/SR frei und regulieren die Muskelkontraktion, nicht das neuronale Ruhepotenzial.",
      D: "GABA-A-Rezeptoren sind ligandengesteuerte Ionenkanäle, die bei Aktivierung zu einem Cl--Einstrom (Hyperpolarisation) führen, steuern aber nicht das konstitutive Ruhepotenzial.",
      E: "Wäre die Membran völlig impermeabel, gäbe es keinen Ladungstransport und kein messbares Diffusionspotenzial."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-038",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Chemische Synapse & SNARE-Komplex",
    difficulty: "advanced",
    stem: "Welches Protein fungiert an der präsynaptischen Membran als primärer Calciumsensor für die Auslösung der schnellen synaptischen Vesikelexozytose?",
    options: {
      A: "Syntaxin-1, das durch Spaltung von GTP die Vesikelmembran öffnet",
      B: "Clathrin, welches die Exozytoseporen durch Gitterbildung aufweitet",
      C: "Synaptotagmin-1, das bei Bindung von Ca2+ eine Konformationsänderung erfährt und den SNARE-Komplex zur Membranfusion antreibt",
      D: "Acetylcholinesterase, die Calcium direkt in die synaptische Endigung transportiert",
      E: "Myelin basic protein (MBP), das die präsynaptische Membran elektrisch depolarisiert"
    },
    correct_answer: "C",
    explanation_correct: "An der chemischen Synapse sind synaptische Vesikel über den v-SNARE-Partner (Synaptobrevin / VAMP) und t-SNAREs (Syntaxin-1 und SNAP-25) an der aktiven Zone der präsynaptischen Plasmamembran vorverankert (Docking & Priming). Trifft ein Aktionspotenzial ein, öffnen sich spannungsgesteuerte Ca2+-Kanäle (Cav2.1/Cav2.2), und Ca2+ strömt lokal massiv ein. Synaptotagmin-1, ein integrales Vesikelprotein mit zwei zytoplasmatischen C2-Domänen, bindet kooperativ bis zu 5 Ca2+-Ionen. Dies induziert eine rasche Konformationsänderung und Insertion in die Plasmamembran, wodurch der SNARE-Komplex vollständig verdrillt wird und die Fusionspore in Bruchteilen einer Millisekunde zur Transmitterfreisetzung aufreißt.",
    explanations_incorrect: {
      A: "Syntaxin-1 ist ein t-SNARE-Protein der Plasmamembran; es spaltet kein GTP.",
      B: "Clathrin ist an der rezeptorvermittelten Endozytose (Vesikel-Recycling) beteiligt, nicht an der schnellen Exozytose.",
      D: "Acetylcholinesterase baut Acetylcholin im synaptischen Spalt ab, ist aber kein Calciumsensor oder Transporter.",
      E: "MBP ist ein Strukturprotein der Myelinscheide von Oligodendrozyten und Schwann-Zellen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-039",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Hormonsystem: Signaltransduktion hydrophiler vs. lipophiler Hormone",
    difficulty: "intermediate",
    stem: "Welcher grundsätzliche Unterschied besteht im Wirkungsmechanismus zwischen hydrophilen Hormonen (z. B. Adrenalin, Glukagon, Insulin) und lipophilen Hormonen (z. B. Cortisol, Testosteron, Östradiol)?",
    options: {
      A: "Hydrophile Hormone passieren ungehindert die Lipiddoppelkombination der Plasmamembran und binden an zytosolische Chaperone",
      B: "Lipophile Hormone binden ausschließlich an Ionenkanal-gekoppelte Membranrezeptoren und bewirken eine Depolarisation innerhalb von Millisekunden",
      C: "Hydrophile Hormone binden an nukleäre Zinkfinger-Transkriptionsfaktoren, während lipophile Hormone nur über G-Proteine wirken",
      D: "Hydrophile Hormone binden an membranständige Rezeptoren und wirken über sekundäre Botenstoffe (Second Messenger) oder Tyrosinkinasen, während lipophile Hormone die Plasmamembran durchqueren und an intrazelluläre Rezeptoren binden, die als Transkriptionsfaktoren die Genexpression modulieren",
      E: "Lipophile Hormone werden im Blut frei ohne Bindungsproteine gelöst transportiert, während hydrophile Hormone an Albumin gekoppelt sein müssen"
    },
    correct_answer: "D",
    explanation_correct: "1. Hydrophile Hormone (Peptidhormone, Katecholamine) können die hydrophobe Phospholipid-Doppelschicht der Zellmembran nicht durchdringen. Sie binden an extrazelluläre Domänen membranständiger Rezeptoren: entweder G-Protein-gekoppelte Rezeptoren (GPCR, z. B. Glukagon, Adrenalin) unter Generierung von Second Messengern (cAMP, IP3, DAG, Ca2+) oder Rezeptor-Tyrosinkinasen (z. B. Insulin). Die Signalübertragung ist sehr schnell (Sekunden bis Minuten) über Phosphorylierungskaskaden. 2. Lipophile Hormone (Steroidhormone, Schilddrüsenhormone) diffundieren passiv durch die Plasmamembran. Sie binden im Zytoplasma oder Zellkern an nukleäre Rezeptoren. Der Hormon-Rezeptor-Komplex dimerisiert, bindet an spezifische DNA-Sequenzen (Hormone Response Elements, HRE) und wirkt direkt als Transkriptionsfaktor. Die Wirkung setzt verzögert ein (Stunden bis Tage), hält aber lange an.",
    explanations_incorrect: {
      A: "Hydrophile Hormone können die Membran nicht frei passieren.",
      B: "Lipophile Hormone wirken primär genomisch über intrazelluläre Rezeptoren, nicht über Ionenkanäle.",
      C: "Genau vertauscht: Nukleäre Zinkfinger-Rezeptoren sind typisch für Steroidhormone.",
      E: "Lipophile Hormone benötigen Transporter im Blut (Albumin, SHBG, CBG); hydrophile Hormone sind frei im Plasma löslich."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-040",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Renin-Angiotensin-Aldosteron-System (RAAS)",
    difficulty: "advanced",
    stem: "Welche Reaktionskaskade und physiologischen Wirkungen kennzeichnen das Renin-Angiotensin-Aldosteron-System (RAAS) bei Abfall des systemischen Blutdrucks?",
    options: {
      A: "Die Leber sezerniert Renin; Renin spaltet Angiotensin II direkt in Aldosteron; Aldosteron hemmt die Natriumresorption im proximalen Tubulus",
      B: "Der Hypophysenhinterlappen schüttet Angiotensinogen aus; ACE in der Leber wandelt es in Bradykinin um, was zu starker Vasodilatation führt",
      C: "Die Macula densa hemmt die Reninausschüttung; Angiotensin I bindet an AT1-Rezeptoren und blockiert die Aldosteronfreisetzung",
      D: "Die Nebennierenrinde sezerniert ACE; ACE spaltet Renin in Angiotensin I; Angiotensin I führt zur massiven Ausscheidung von Kalium und Wasser",
      E: "Der juxtaglomeruläre Apparat der Niere sezerniert Renin; Renin spaltet Angiotensinogen zu Angiotensin I; das endotheliale ACE (vor allem der Lunge) spaltet Angiotensin I zu Angiotensin II; Angiotensin II bewirkt Vasokonstriktion und stimuliert in der Nebennierenrinde die Ausschüttung von Aldosteron"
    },
    correct_answer: "E",
    explanation_correct: "Bei renaler Minderperfusion, Hyponatriämie oder Sympathikusaktivierung sezernieren die granulierten Zellen des juxtaglomerulären Apparates (JGA) der Niere das proteolytische Enzym Renin. Renin spaltet das von der Leber konstitutiv gebildete Plasmaprotein Angiotensinogen in das Dekapeptid Angiotensin I (Ang I). Im Kapillarendothel (besonders der Lungenstrombahn) wandelt das membranständige Angiotensin-Converting Enzyme (ACE) Ang I in das biologisch hochaktive Oktapeptid Angiotensin II um. Angiotensin II bindet an AT1-Rezeptoren und bewirkt: 1. Starke arterielle Vasokonstriktion (Blutdruckanstieg), 2. Stimulation der Aldosteron-Sekretion in der Zona glomerulosa der Nebennierenrinde (führt zu gesteigerter renaler Na+- und Wasserretention sowie K+-Ausscheidung), 3. Stimulation der ADH-Freisetzung im Hypophysenhinterlappen und Auslösung von Durstgefühl.",
    explanations_incorrect: {
      A: "Renin stammt aus der Niere (nicht der Leber); Aldosteron stimuliert die Na+-Resorption im Sammelrohr, hemmt sie nicht.",
      B: "Angiotensinogen stammt aus der Leber; ACE inaktiviert Bradykinin, erzeugt es nicht.",
      C: "Niedriger NaCl-Gehalt an der Macula densa stimuliert (nicht hemmt) die Reninausschüttung.",
      D: "ACE stammt aus Endothelzellen (v. a. Lunge), nicht aus der Nebennierenrinde; Angiotensin II (nicht Ang I) ist das primäre Effektorpeptid."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  }
];

// Helper functions for mapping to StoredQuestion format
function mapChapterId(primaryTopic: string, subtopic: string): string {
  switch (primaryTopic) {
    case "Human Cell Biology":
      return "bio-01-zelle";
    case "Human Body: Histology, Anatomy and Physiology":
      if (subtopic.includes("Nervensystem") || subtopic.includes("Achse") || subtopic.includes("Cortisol")) {
        return "bio-09-nervensystem";
      }
      if (subtopic.includes("Niere") || subtopic.includes("Filtration") || subtopic.includes("Sammelrohr") || subtopic.includes("Henle")) {
        return "bio-08-atmung";
      }
      if (subtopic.includes("RAAS") || subtopic.includes("Renin")) {
        return "bio-07-herzkreislauf";
      }
      return "bio-02-koerper";
    case "Early Human Development":
      return "bio-03-fruehentwicklung";
    case "Genetics, Inheritance and Chromosome Biology":
    case "Human Genetics":
      return "bio-04-genetik";
    case "Molecular Genetics and Genetic Methods":
      return "bio-05-molgen";
    case "Zellstoffwechsel & Energiegewinnung":
      return "bio-06-stoffwechsel";
    case "Herz-Kreislauf-System":
      return "bio-07-herzkreislauf";
    case "Atmungssystem":
      return "bio-08-atmung";
    case "Nervensystem":
      return "bio-09-nervensystem";
    case "Immunobiology":
      return "bio-02-koerper";
    default:
      return "bio-01-zelle";
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
 * Normalisierte 40 StoredQuestion-Objekte für die MedAT-H Generalprobe #5 Runtime-Engine
 */
export const GENERALPROBE_5_BIO_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_5_BIO_QUESTIONS.map(
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
      subjectId: "bio",
      chapterId: mapChapterId(q.primary_topic, q.subtopic),
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Biologie", "Generalprobe #5", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "5.0_gp5",
      setOrder: idx + 1,
    };
  }
);
