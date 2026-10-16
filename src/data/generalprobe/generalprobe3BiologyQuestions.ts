/**
 * MedAT Biologie BMS — 40-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #3 (BMS Biologie-Testteil, 40 Original-Aufgaben).
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

export interface QcBioGp3QuestionRaw {
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

export const RAW_GENERALPROBE_3_BIO_QUESTIONS: QcBioGp3QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Die menschliche Zelle (bio-01-zelle) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-001",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zellkern & Nukleolus",
    difficulty: "foundational",
    stem: "Welche biologische Hauptfunktion erfüllt der Nukleolus (Kernkörperchen) im Zellkern menschlicher Zellen?",
    options: {
      A: "Replikation der gesamten chromosomalen Kern-DNA während der S-Phase",
      B: "Modifikation und Sortierung sekretorischer Glykoproteine für den Export",
      C: "Transkription ribosomaler RNA (rRNA) und Assemblierung der ribosomalen Untereinheiten",
      D: "Synthese von Histonproteinen und Transport in das Zytoplasma",
      E: "Intrazellulärer Abbau von fehlgefalteten Kernproteinen über das Proteasom"
    },
    correct_answer: "C",
    explanation_correct: "Der Nukleolus ist ein nicht membranumgrenztes Kernkompartiment rund um die Nukleolus-Organisator-Regionen (NOR) der akrozentrischen Chromosomen. Seine primäre Funktion ist die Transkription der 45S-Prä-rRNA durch die RNA-Polymerase I, deren Prozessierung zu 18S-, 5,8S- und 28S-rRNA sowie der Zusammenbau dieser rRNAs mit ribosomalen Proteinen zu den Vorläufern der kleinen (40S) und großen (60S) ribosomalen Untereinheiten.",
    explanations_incorrect: {
      A: "Die Replikation der Kern-DNA findet im gesamten Nukleoplasma an Replikationsgabeln statt, nicht im Nukleolus.",
      B: "Sortierung und terminale Glykosylierung sekretorischer Proteine sind Kernaufgaben des Golgi-Apparats, nicht des Nukleolus.",
      D: "Histone werden wie alle Proteine im Zytoplasma an freien Ribosomen synthetisiert und anschließend über Kernporen in den Kern importiert.",
      E: "Der proteasomale Proteinabbau findet im Zytosol und Nukleoplasma statt; der Nukleolus ist kein Abfall- oder Abbauorganell."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-002",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Membranlipide & Fluidität",
    difficulty: "foundational",
    stem: "Welcher Faktor führt bei physiologischer Körpertemperatur (37 °C) primär zu einer ERHÖHUNG der Fluidität der menschlichen Plasmamembran?",
    options: {
      A: "Ein höherer Anteil ungesättigter Fettsäuren mit cis-Doppelbindungen in den Phospholipiden",
      B: "Eine vollständige Sättigung aller Acylketten der Membranphospholipide mit Wasserstoffatomen",
      C: "Eine Verlängerung der Kohlenstoffketten der Fettsäuren von 16 auf 24 C-Atome",
      D: "Die vollständige Entfernung aller integralen Glykoproteine aus der Lipiddoppelschicht",
      E: "Ein massiver Anstieg des Cholesteringehalts über 50 Mol-% bei 37 °C"
    },
    correct_answer: "A",
    explanation_correct: "Cis-Doppelbindungen in ungesättigten Fettsäuren erzeugen permanente Knicke (Kinks) in den Kohlenwasserstoffketten. Diese Knicke verhindern eine dichte parallele Packung der Phospholipide und schwächen die intermolekularen Van-der-Waals-Kräfte, wodurch der Phasenübergangspunkt sinkt und die Membranfluidität bei Körpertemperatur deutlich zunimmt.",
    explanations_incorrect: {
      B: "Vollständig gesättigte Fettsäuren sind gestreckt, lagern sich eng aneinander und verringern durch maximale Van-der-Waals-Kontakte die Fluidität (Membran wird starrer).",
      C: "Längere Fettsäureketten bieten eine größere Kontaktfläche für Van-der-Waals-Wechselwirkungen, was die Membran verfestigt und die Fluidität senkt.",
      D: "Membranproteine beeinflussen die lokale Viskosität geringfügig, bestimmen aber nicht das grundlegende Phasenverhalten der Lipiddoppelschicht.",
      E: "Cholesterin fungiert als bidirektionaler Fluiditätspuffer: Bei 37 °C schränkt sein starres Steroidringsystem die Beweglichkeit der Fettsäureketten sterisch ein und verringert die Fluidität (Membranverfestigung), während es bei tiefen Temperaturen die dichte Packung stört und so dem Erstarren entgegenwirkt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-003",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Lysosomale Speicherung & Sortierung",
    difficulty: "intermediate",
    stem: "Über welches spezifische molekulare Erkennungssignal werden neu synthetisierte saure Hydrolasen im cis-Golgi markiert, um gezielt zu den Lysosomen transportiert zu werden?",
    options: {
      A: "Eine carboxyterminale Lysin-Aspartat-Glutamat-Leucin-Sequenz (KDEL-Sequenz)",
      B: "Ein N-terminales Signalpeptid aus 20 positiv geladenen basischen Aminosäuren",
      C: "Eine kovalente Polyubiquitinierung an Lysin-48",
      D: "Ein Mannose-6-Phosphat-Rest (M6P) an N-glykosidisch gebundenen Oligosacchariden",
      E: "Ein Kernlokalisationssignal (NLS) aus basischen Arginin- und Lysinresten"
    },
    correct_answer: "D",
    explanation_correct: "Lysosomale Enzyme (saure Hydrolasen) erhalten im cis-Golgi-Netzwerk durch die GlcNAc-Phosphotransferase eine Phosphatgruppe an einem Mannoserest ihrer Oligosaccharide (Mannose-6-Phosphat, M6P). Im trans-Golgi binden spezifische M6P-Rezeptoren diese Enzyme und verpacken sie in Clathrin-umhüllte Vesikel, die mit späten Endosomen verschmelzen, wo das saure Milieu zur Dissoziation führt.",
    explanations_incorrect: {
      A: "Die KDEL-Sequenz ist ein Retentions- und Rückholsignal für residente Proteine des endoplasmatischen Retikulums (wie BiP/GRP78), nicht für Lysosomen.",
      B: "Basische N-terminale Signale leiten Proteine in Mitochondrien (Mitochondrial Targeting Signal), nicht in Lysosomen.",
      C: "Polyubiquitinierung an Lysin-48 markiert zytosolische Proteine für den proteasomalen Abbau im 26S-Proteasom.",
      E: "Das NLS vermittelt über Importine den Durchtritt durch den Kernporenkomplex in das Nukleoplasma."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-004",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zellzyklus-Phasen & Zykline",
    difficulty: "intermediate",
    stem: "Welcher Proteinkomplex ist als 'M-Phase-Promoting Factor' (MPF) direkt dafür verantwortlich, eine menschliche Zelle von der G2-Phase in die Mitose überzuleiten?",
    options: {
      A: "Cyclin D gebunden an Cyclin-abhängige Kinase 4 (CDK4)",
      B: "Cyclin B gebunden an Cyclin-abhängige Kinase 1 (CDK1 / Cdc2)",
      C: "Cyclin E gebunden an Cyclin-abhängige Kinase 2 (CDK2)",
      D: "Der Anaphase-Promoting Complex / Cyclosom (APC/C) gebunden an Cdc20",
      E: "Das Tumorsuppressorprotein p53 komplexiert mit Mdm2"
    },
    correct_answer: "B",
    explanation_correct: "Der Übergang von der G2- in die M-Phase wird durch den MPF (M-Phase-Promoting Factor) gesteuert, der aus Cyclin B und CDK1 (Cdc2) besteht. Nach Aktivierung durch die Phosphatase Cdc25 phosphoryliert aktives Cyclin B/CDK1 nukleäre Lamine (führt zum Kernhüllenzerfall), Histone (Kondensation der Chromosomen) und Mikrotubuli-assoziierte Proteine (Mitosespindelaufbau).",
    explanations_incorrect: {
      A: "Cyclin D/CDK4 steuert die frühe G1-Phase und leitet den Eintritt in den Zellzyklus ein (Phosphorylierung des Retinoblastom-Proteins Rb).",
      C: "Cyclin E/CDK2 kontrolliert den G1/S-Übergang und leitet die Initiation der DNA-Replikation ein.",
      D: "APC/C-Cdc20 ist eine Ubiquitin-Ligase, die in der Metaphase Securin abbaut, um die Anaphase auszulösen; sie leitet nicht die Mitose ein.",
      E: "p53/Mdm2 reguliert den G1-Arrest bei DNA-Schäden, induziert aber keine Mitose."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-005",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Endozytose-Mechanismen",
    difficulty: "advanced",
    stem: "Welche essentielle molekulare Rolle spielt die GTPase Dynamin während der rezeptorvermittelten Clathrin-abhängigen Endozytose in menschlichen Zellen?",
    options: {
      A: "Dynamin bindet spezifisch an das LDL-Partikel und entfaltet es im sauren Milieu des frühen Endosoms.",
      B: "Dynamin bildet das äußere polygonale Gitter aus Triskelions um die invaginierte Plasmamembran.",
      C: "Dynamin phosphoryliert Phosphatidylinositol-4,5-bisphosphat (PIP2) zur Rekrutierung von Adapterproteinen.",
      D: "Dynamin spaltet ATP, um das Clathrin-Gerüst nach der Vesikelbildung wieder abzulösen (Uncoating).",
      E: "Dynamin lagert sich helikal um den eingestülpten Vesikelhals an und bewirkt unter GTP-Hydrolyse dessen Verengung (Konstriktion) und Durchtrennung (Fission/Scission) zur Abschnürung des Vesikels von der Plasmamembran."
    },
    correct_answer: "E",
    explanation_correct: "Dynamin ist eine mechanochemische GTPase, die gezielt an den verengten Hals invaginierter Clathrin-beschichteter Gruben (Coated Pits) rekrutiert wird. Dort oligomerisiert Dynamin zu einer helikalen Manschette um den Membranstiel. Die konzertierte Hydrolyse von GTP zu GDP bewirkt eine Konformationsänderung (Konstriktion und Torsion der Helix), die den Membranhals stark einschnürt (Konstriktion) und schließlich die Trennung der Lipiddoppelschichten durch Membrandurchtrennung (Fission/Scission) herbeiführt. Dynamin bewirkt dabei keine Membranfusion wie SNARE-Proteine, sondern eine mechanische Membrandurchschnürung und -trennung zur Freisetzung des Vesikels.",
    explanations_incorrect: {
      A: "Die Dissoziation von Rezeptor und Ligand (z. B. LDL) erfolgt rein pH-abhängig im sauren Endosom ohne Mitwirkung von Dynamin.",
      B: "Das polygonale Gerüst aus Fünfecken und Sechsecken wird aus Clathrin-Triskelions (drei schwere und drei leichte Ketten) gebildet, nicht aus Dynamin.",
      C: "Die Bildung von PIP2 wird von Lipidkinasen katalysiert; Dynamin besitzt eine Pleckstrin-Homologie-Domäne (PH), um an PIP2 zu binden, synthetisiert es aber nicht.",
      D: "Das Ablösen des Clathrin-Mantels (Uncoating) wird durch die Hitzeschock-Katalase Hsc70 unter ATP-Spaltung und Auxilin vermittelt, nicht durch Dynamin."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 2: Menschlicher Körper: Histologie, Gewebe, Organsysteme (bio-02-koerper) - 5 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-006",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Knorpelgewebe & Histologie",
    difficulty: "foundational",
    stem: "Welche Zuordnung beschreibt die histologischen Knorpeltypen des menschlichen Körpers und ihre typische Lokalisation korrekt?",
    options: {
      A: "Elastischer Knorpel bildet die Gelenkflächen der großen Röhrenknochen und enthält keine Chondrozyten.",
      B: "Hyaliner Knorpel überzieht die echten Gelenkflächen und bildet die Knorpelspangen der Trachea, während Faserknorpel die Zwischenwirbelscheiben (Disci intervertebrales) aufbaut.",
      C: "Faserknorpel enthält ausschließlich Kollagen Typ II und bildet die Ohrmuschel sowie den Kehldeckel (Epiglottis).",
      D: "Hyaliner Knorpel besitzt die höchste Zugfestigkeit aller Knorpelarten, da er von dichten Bündeln aus Kollagen Typ I dominiert wird.",
      E: "Elastischer Knorpel ist gefäßreich und regeneriert nach Verletzungen im Erwachsenenalter vollständig durch Mitose ausdifferenzierter Chondrozyten."
    },
    correct_answer: "B",
    explanation_correct: "Hyaliner Knorpel (dominiert von Kollagen Typ II und Aggrecan) bildet die Gelenkflächen, Rippenknorpel und die Trachealspangen. Elastischer Knorpel (enthält elastische Fasernetze) verleiht Ohrmuschel und Epiglottis Flexibilität. Faserknorpel enthält dichte Bündel aus zugfestem Kollagen Typ I und bildet Disci intervertebrales, Menisken und die Symphyse.",
    explanations_incorrect: {
      A: "Gelenkflächen bestehen aus hyalinem Knorpel, der selbstverständlich Chondrozyten in Knorpelhöfen (Chondronen) enthält.",
      C: "Ohrmuschel und Epiglottis bestehen aus elastischem Knorpel; Faserknorpel zeichnet sich durch Kollagen Typ I (nicht ausschließlich Typ II) aus.",
      D: "Die höchste Zugfestigkeit besitzt Faserknorpel (Kollagen Typ I); hyaliner Knorpel ist vor allem druckelastisch durch gebundenes Wasser an Proteoglykanen.",
      E: "Knorpelgewebe ist im Erwachsenenalter grundsätzlich gefäß- und nervenfrei (bradytroph) und besitzt nur ein minimales Regenerationsvermögen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-007",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Knochenumbau & RANKL/OPG",
    difficulty: "intermediate",
    stem: "Über welches Zytokin-System regulieren menschliche Osteoblasten unter dem Einfluss von Parathormon (PTH) die Aktivität und Differenzierung der knochenabbauenden Osteoklasten?",
    options: {
      A: "Osteoblasten sezernieren Calcitonin, welches direkt die Apoptose reifer Osteoklasten auslöst.",
      B: "Osteoblasten hemmen Osteoklasten über Erythropoetin (EPO) und Thrombopoetin (TPO).",
      C: "Osteoblasten exprimieren RANKL, das an den RANK-Rezeptor auf Osteoklastenvorläufern bindet; der Lösungs-Köderrezeptor Osteoprotegerin (OPG) hemmt diese Aktivierung kompetitiv.",
      D: "Osteoblasten schütten direkt Salzsäure und Cathepsin K in den Extrazellulärraum aus, um Knochenmatrix aufzulösen.",
      E: "Osteoblasten fusionieren unter PTH-Einfluss direkt miteinander zu vielkernigen Riesenzellen (Osteoklasten)."
    },
    correct_answer: "C",
    explanation_correct: "Die Knochenresorption wird über das RANK/RANKL/OPG-System gesteuert: Osteoblasten präsentieren RANKL (Receptor Activator of Nuclear Factor-κB Ligand). Dessen Bindung an RANK auf monozytären Vorläuferzellen induziert deren Fusion und Differenzierung zu aktiven Osteoklasten. Der von Osteoblasten gebildete Decoy-Rezeptor Osteoprotegerin (OPG) bindet RANKL abfangend und schützt vor überschießendem Knochenabbau.",
    explanations_incorrect: {
      A: "Calcitonin wird von den C-Zellen der Schilddrüse produziert, nicht von Osteoblasten.",
      B: "EPO (Niere) und TPO (Leber) steuern Erythropoese und Thrombopoese, nicht die Osteoklastogenese.",
      D: "Salzsäure (über V-Typ-H+-ATPasen) und Cathepsin K werden von Osteoklasten in der Howship-Lakune sezerniert, nicht von Osteoblasten.",
      E: "Osteoblasten stammen aus mesenchymalen Stammzellen; Osteoklasten entstehen aus hämatopoetischen Stammzellen der Monozyten/Makrophagen-Linie; sie fusionieren nicht ineinander."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-008",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Dünndarmhistologie & Krypten",
    difficulty: "intermediate",
    stem: "Welche spezifische zelluläre Komponente befindet sich an der Basis der Lieberkühn-Krypten des menschlichen Dünndarms und schützt dortige Stammzellen durch die Sekretion antimikrobieller Substanzen (wie Lysozym und Alpha-Defensine)?",
    options: {
      A: "Paneth-Körnerzellen",
      B: "Enterochromaffine Zellen (EC-Zellen)",
      C: "Becherzellen",
      D: "Brunner-Drüsenzellen",
      E: "M-Zellen (Microfold-Zellen)"
    },
    correct_answer: "A",
    explanation_correct: "Paneth-Körnerzellen sitzen am Grund der Lieberkühn-Krypten des Dünndarms (besonders im Ileum). Sie enthalten apikale azidophile Granula mit Lysozym, Alpha-Defensinen (Kryptdinen) und Phospholipase A2. Durch die Abgabe dieser Bakterizide schützen sie die unmittelbar benachbarten intestinalen Lgr5+-Stammzellen vor mikrobieller Invasion.",
    explanations_incorrect: {
      B: "Enterochromaffine Zellen gehören zum diffusen neuroendokrinen System (DNES) und sezernieren Serotonin zur Motilitätsregulation.",
      C: "Becherzellen produzieren Muzine (Schleim) zum Schutz des Epithels vor Reibung und Selbstverdauung, bilden aber keine Paneth-Granula.",
      D: "Brunner-Drüsen liegen im Duodenum in der Submukosa (nicht an der Kryptenbasis) und sezernieren alkalisches, bikarbonatreiches Sekret zur Neutralisation der Magensäure.",
      E: "M-Zellen liegen im Epithel über den Peyer-Plaques (GALT) und schleusen Antigene über Transzytose zu subepithelialen dendritischen Zellen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-009",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Endokrines Pankreas & Insulinsekretion",
    difficulty: "intermediate",
    stem: "Welche Kaskade molekularer Ereignisse führt in den Beta-Zellen der Langerhans-Inseln nach einem Blutglukoseanstieg zur Ausschüttung von Insulin?",
    options: {
      A: "Glukosebindung an extrazelluläre G-Protein-gekoppelte Rezeptoren -> cAMP-Abfall -> Öffnung von Chloridkanälen -> Hyperpolarisation",
      B: "Na+-abhängige Glukoseaufnahme über SGLT1 -> Aktivierung von Na+/K+-ATPasen -> Absenkung des intrazellulären Kalziumspiegels",
      C: "Direkte Spaltung von Proinsulin durch membranständiges Glukagon -> passiver Ausstrom von Insulin über Ionenkanäle",
      D: "Hemmung der Glykolyse durch Fructose-1,6-bisphosphat -> ADP-Anstieg -> Öffnung von K+-Kanälen -> Zelltod",
      E: "Glukoseaufnahme über erleichterte Glukosetransporter (beim Menschen primär GLUT1 und GLUT3) -> ATP-Bildung in Glykolyse und Zellatmung -> Schließung ATP-sensitiver K+-Kanäle -> Depolarisation der Plasmamembran -> Öffnung spannungsabhängiger Ca2+-Kanäle -> Ca2+-Einstrom -> Exozytose von Insulin"
    },
    correct_answer: "E",
    explanation_correct: "Der Glukosesensormechanismus humaner Betazellen koppelt den Blutzuckerspiegel an die Hormonsekretion: Glukose tritt insulinunabhängig über erleichterte Diffusion in die Betazelle ein. Während im klassischen Nagetiermodell GLUT2 vorherrscht, erfolgt die Glukoseaufnahme in humanen Betazellen primär über GLUT1 und GLUT3 (humanes GLUT2 wird nur in geringem Maße exprimiert). Die intrazelluläre Phosphorylierung durch Glukokinase (der eigentliche Glukosesensor) treibt den Energiestoffwechsel an, sodass das zytosolische ATP/ADP-Verhältnis ansteigt. Dies schließt ATP-sensitive Kaliumkanäle (K_ATP), depolarisiert die Zellmembran von ca. -70 mV auf ca. -40 mV und öffnet spannungsgesteuerte L-Typ-Ca2+-Kanäle. Der Ca2+-Einstrom triggert die SNARE-vermittelte Exozytose der Insulingranula.",
    explanations_incorrect: {
      A: "Die primäre Glukosemessung der Betazelle erfolgt über den intrazellulären Metabolismus nach Aufnahme, nicht über einen hemmenden GPCR.",
      B: "Die basale Glukoseaufnahme in Betazellen erfolgt über erleichterte Diffusion (beim Menschen primär GLUT1/3), nicht sekundär aktiv über SGLT; zudem steigt Ca2+, anstatt abzusinken.",
      C: "Glukagon ist ein eigenständiges Hormon der Alphazellen und spaltet kein Proinsulin; Insulin wird im sekretorischen Vesikel durch Prohormon-Konvertasen (PC1/PC2) gereift.",
      D: "Hohe Glukose stimuliert die Glykolyse massiv und erhöht ATP; ein Zelltod findet physiologisch nicht statt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-010",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Nierenphysiologie & Glukoseresorption",
    difficulty: "advanced",
    stem: "Wie und in welchem Nephronabschnitt wird filtrierte D-Glukose unter normalen physiologischen Bedingungen nahezu vollständig aus dem Primärharn in das Blut rückresorbiert?",
    options: {
      A: "Im distalen Konvolut über passive parazelluläre Diffusion entlang des osmotischen Gradienten",
      B: "In der Henle-Schleife über den Furosemid-sensitiven Na+-K+-2Cl--Kotransporter (NKCC2)",
      C: "Im Sammelrohr unter der hormonellen Steuerung von Aldosteron über ENaC-Kanäle",
      D: "Im proximalen Tubulus apikal über sekundär-aktive Natrium-Glukose-Kotransporter (SGLT2 im S1/S2- und SGLT1 im S3-Segment) und basolateral über erleichterte Diffusion (mittels GLUT2 bzw. GLUT1)",
      E: "In der Bowman-Kapsel durch Podozyten-Phagozytose und direkten Weitertransport in die Vasa recta"
    },
    correct_answer: "D",
    explanation_correct: "Unter normalen physiologischen Bedingungen (Blutglukose unterhalb der Nierenschwelle von ca. 180 mg/dl bzw. 10 mmol/l) wird die glomerulär filtrierte Glukose im proximalen Tubulus nahezu vollständig rückresorbiert: Im frühen proximalen Tubulus (S1/S2-Segment) übernimmt der kapazitätsstarke SGLT2 (Stöchiometrie: 1 Na+ : 1 Glukose) rund 90 % der Rückresorption; der basolaterale Austritt erfolgt über erleichterte Diffusion mittels GLUT2. Im späten proximalen Tubulus (S3-Segment) sorgt der hochaffine SGLT1 (Stöchiometrie: 2 Na+ : 1 Glukose) für die Rückresorption der verbleibenden ca. 10 % gegen einen steileren Gradienten, wobei basolateral vorwiegend GLUT1 den Austritt vermittelt.",
    explanations_incorrect: {
      A: "Glukose ist polar und kann nicht unkontrolliert parazellulär diffundieren; im distalen Tubulus befinden sich keine Glukosetransporter.",
      B: "NKCC2 liegt im dicken aufsteigenden Schenkel der Henle-Schleife und transportiert ausschließlich Ionen (Na+, K+, 2 Cl-), keine Kohlenhydrate.",
      C: "Im Sammelrohr regulieren ENaC (Aldosteron) und Aquaporin-2 (ADH) den Salz- und Wasserhaushalt; Glukoseresorption existiert dort nicht.",
      E: "Podozyten bilden den Podozyten-Schlitz der Filtrationsschranke im Glomerulus und phagozytieren keine filtrierten Nährstoffe."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Frühentwicklung des Menschen (bio-03-fruehentwicklung) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-011",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Zelluläre Potenz in der Furchung",
    difficulty: "foundational",
    stem: "Bis zu welchem Entwicklungsstadium wird den Blastomeren in der klassischen humanembryologischen Literatur und Didaktik die Totipotenz zugeschrieben (d. h. das Entwicklungspotenzial, vor Einsetzen der Kompaktierung sowohl embryonale als auch extraembryonale Gewebe zu bilden)?",
    options: {
      A: "Bis zum frühen Furchungsstadium (bis ca. zum 8-Zell-Stadium vor Einsetzen der Kompaktierung)",
      B: "Bis zur vollständig implantierten Gastrula am Ende der 3. Entwicklungswoche",
      C: "Bis zur Bildung des primitiven Neuralrohrs am 28. Tag",
      D: "Ausschließlich die unbefruchtete sekundäre Oozyte in der Metaphase II",
      E: "Bis zur Geburt in den Zellen des fetalen Nabelschnurbluts"
    },
    correct_answer: "A",
    explanation_correct: "In der klassischen humanembryologischen Lehrbuchterminologie (z. B. Sadler/Langman, Lüllmann-Rauch) bezeichnet Totipotenz die Fähigkeit einer Zelle, sich zu einem vollständigen Individuum einschließlich aller extraembryonalen Eihüllen (Trophoblast/Plazenta) zu entwickeln. Dies wird den frühen Blastomeren bis etwa zum 8-Zell-Stadium vor der Kompaktierung zugeschrieben. Bei der Kompaktierung (Übergang zur 16-Zell-Morula) setzen über E-Cadherin erste Differenzierungen ein. Sobald die Blastozyste entsteht, sind die Zellen des Embryoblasts nur noch pluripotent (können alle drei Keimblätter, aber kein Trophoblastgewebe mehr bilden).",
    explanations_incorrect: {
      B: "In der Gastrula sind die Zellen bereits auf die drei Keimblätter (Ekto-, Meso-, Entoderm) festgelegt und multipotent, keinesfalls totipotent.",
      C: "Am Tag 28 ist die Organogenese bereits weit fortgeschritten; die Zellen sind differenziert oder multipotent.",
      D: "Eine unbefruchtete Oozyte ist haploid und kann ohne Spermium keinen diploiden Organismus bilden.",
      E: "Nabelschnurblut enthält adulte hämatopoetische und mesenchymale Stammzellen; diese sind multipotent, aber nicht totipotent."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-012",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Neurulation & Neuralleistenderivate",
    difficulty: "intermediate",
    stem: "Welche anatomischen Strukturen und Zellpopulationen des erwachsenen menschlichen Körpers gehen ontogenetisch aus den migrierenden Neuralleistenzellen (Crista neuralis) hervor?",
    options: {
      A: "Epithel der Alveolen, Schilddrüsenfollikelepithel und Pankreaskopfgewebe",
      B: "Skelettmuskulatur der Extremitäten und viszerales Peritoneum",
      C: "Spinalganglien, Nebennierenmark (Chromaffinzellen), Melanozyten der Haut und Schwann-Zellen",
      D: "Epithel der Nierentubuli und Herzmuskelzellen des linken Ventrikels",
      E: "Hämatopoetische Stammzellen des Knochenmarks und Milzsinusendothel"
    },
    correct_answer: "C",
    explanation_correct: "Neuralleistenzellen ('viertes Keimblatt') entstehen am Übergang vom Neuralrohr zum Oberflächenektoderm. Sie wandern weiträumig durch den Embryo und differenzieren u. a. zu: Spinalganglienneuronen, sympathischen und parasympathischen Ganglien, Schwann-Zellen, Melanozyten der Epidermis, Chromaffinzellen des Nebennierenmarks, Meningenhüllen (Pia und Arachnoidea) sowie Teilen des kraniofazialen Skeletts.",
    explanations_incorrect: {
      A: "Alveolarepithel, Schilddrüse und Pankreas sind endodermale Derivate.",
      B: "Skelettmuskulatur und Peritoneum stammen aus dem Mesoderm (Myotom der Somiten bzw. Seitenplattenmesoderm).",
      D: "Nierentubuli und Kardiomyozyten entstehen aus dem intermediären Mesoderm bzw. Kardiomesoderm.",
      E: "Blut- und Endothelzellen entstammen dem lateralen Mesoderm (Blutinseln / Angioblasten)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-013",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Extraembryonale Organe: Dottersack",
    difficulty: "intermediate",
    stem: "Welche essentielle physiologische Doppelfunktion erfüllt der embryonale Dottersack in der 3. bis 6. Entwicklungswoche des menschlichen Embryos?",
    options: {
      A: "Produktion von Surfactant und Gasaustausch vor Einsetzen der Plazentadurchblutung",
      B: "Erste primitive Blutbildung (Hämatopoese in mesodermalen Blutinseln) und temporäre Beherbergung der aus dem Epiblasten stammenden primordialen Keimzellen vor deren Wanderung in die Gonadenleisten",
      C: "Vollständige Kalzifizierung zur Anlage der fetalen Schädelknochen",
      D: "Ausschließliche Speicherung von mütterlichen Fetten für das gesamte dritte Trimenon",
      E: "Synthese fetaler Immunglobuline zur passiven Immunisierung gegen Röteln"
    },
    correct_answer: "B",
    explanation_correct: "Obwohl der Dottersack beim Menschen dotterarm ist, erfüllt er essenzielle Entwicklungsfunktionen: In der 3. Entwicklungswoche entstehen in seinem viszeralen Mesoderm die ersten Blutinseln für die primitive Hämatopoese. Zudem beherbergt seine Wand vorübergehend die primordialen Keimzellen (Urkeimzellen). Diese entstehen ursprünglich in der 2. Woche im Epiblasten, verweilen temporär im Entoderm/Mesoderm des Dottersacks nahe der Allantois und wandern ab der 4. bis 5. Woche amöboid entlang des dorsalen Mesenteriums in die Gonadenanlagen ein.",
    explanations_incorrect: {
      A: "Surfactant wird erst ab der 24. SSW von fetalen Pneumozyten Typ II synthetisiert; Gasaustausch erfolgt über Chorion/Plazenta.",
      C: "Der Dottersack kalzifiziert nicht, sondern bildet sich im Verlauf der Faltung zum schmalen Ductus omphaloentericus zurück.",
      D: "Er dient nicht der Fettspeicherung für das 3. Trimenon; Nährstoffe liefert ab Woche 4 die Plazenta.",
      E: "Feten bilden kaum eigene IgG; die passive Immunität beruht auf mütterlichem IgG-Transzytose-Transport über die Plazenta."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-014",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Teratologie & Neuralrohrverschluss",
    difficulty: "advanced",
    stem: "Ein Mangel an welcher Substanz während der perikonzeptionellen Phase und der 3. bis 4. Entwicklungswoche nach der Befruchtung (post conceptionem, p.c. — ca. 5. bis 6. Schwangerschaftswoche p.m.) erhöht das Risiko für kindliche Neuralrohrdefekte (wie Spina bifida und Anenzephalie) signifikant, und warum?",
    options: {
      A: "Vitamin C (Ascorbinsäure), weil ohne dieses Vitamin kein Kollagen in den Extremitätenknospen gebildet werden kann",
      B: "Jod, weil ein Mangel zur sofortigen Aplasie des fetalen Thymus führt",
      C: "Vitamin D (Calcitriol), weil dadurch die meiotische Teilung der Eizelle in der Metaphase II arretiert bleibt",
      D: "Folsäure (Vitamin B9), weil sie als Coenzym im Ein-Kohlenstoff-Stoffwechsel für die de-novo-Synthese von Purinen und Thymidylat für die rasche Zellteilung beim Verschluss des Neuralrohrs unverzichtbar ist",
      E: "Vitamin A in hohen Dosen, weil es den programmieren Zelltod in der Primitivrinne vollständig blockiert"
    },
    correct_answer: "D",
    explanation_correct: "Der Verschluss des Neuralrohrs erfolgt beim Menschen zwischen Tag 21 und 28 post conceptionem (p.c.), also in der 4. embryonalen Entwicklungswoche (entsprechend der 5. bis 6. Schwangerschaftswoche p.m.): Der anteriore Neuroporus schließt sich um Tag 25 p.c., der posteriore Neuroporus um Tag 27/28 p.c. Dies erfordert eine extrem hohe Zellteilungsrate. Tetrahydrofolsäure (Vitamin B9) überträgt C1-Gruppen zur de-novo-Synthese von dTMP und Purinen sowie zur Homocystein-Remethylierung. Folsäuremangel führt zu Mitosedefekten im Neuroektoderm und Verschlussdefekten (Spina bifida, Anenzephalie).",
    explanations_incorrect: {
      A: "Vitamin-C-Mangel führt zu Skorbut (Kollagendefekt), verursacht aber keine typischen Neuralrohrverschlussdefekte der 4. Entwicklungswoche.",
      B: "Jodmangel beeinträchtigt die fetale Schilddrüsenfunktion (Gefahr des Kretinismus), führt aber nicht zu Spina bifida.",
      C: "Calcitriol regelt den Kalziumhaushalt; die meiotische Metaphase II wird bei der Befruchtung durch Spermieneintritt beendet.",
      E: "Überdosierung von Vitamin A (Retinsäure) ist hochgradig teratogen, ist aber kein Mangelzustand und wirkt über Hox-Gen-Fehlregulationen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Genetik & Vererbung (bio-04-genetik) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-015",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Kodominanz vs. Intermediäre Vererbung",
    difficulty: "foundational",
    stem: "Welcher Erbgang liegt vor, wenn bei einem heterozygoten Individuum die Genprodukte BEIDER Allele phänotypisch nebeneinander voll ausgeprägt und nachweisbar sind (wie bei den Erythrozytenantigenen der Blutgruppe AB)?",
    options: {
      A: "Unvollständige Dominanz (intermediäre Vererbung mit Mischphänotyp)",
      B: "X-chromosomal-rezessive Vererbung",
      C: "Epistatische Genunterdrückung",
      D: "Polygener Schwellenwerterbgang",
      E: "Kodominanz"
    },
    correct_answer: "E",
    explanation_correct: "Bei Kodominanz werden im heterozygoten Zustand beide Allele parallel und unabhängig voneinander voll exprimiert. Im AB0-System codiert Allel A für eine N-Acetylgalaktosaminyltransferase und Allel B für eine Galaktosyltransferase. Menschen mit Genotyp AB besitzen beide Enzyme und tragen daher sowohl A- als auch B-Antigene auf den Erythrozyten.",
    explanations_incorrect: {
      A: "Bei intermediärer Vererbung (unvollständige Dominanz) entsteht ein intermediärer Mischtyp (z. B. rot x weiß = rosa Blüten), kein klares Nebeneinander beider Originalmerkmale.",
      B: "X-chromosomal-rezessive Vererbung betrifft Geschlechtschromosomen und führt bei Männern (Hemizygotie) immer zur Ausprägung.",
      C: "Epistase liegt vor, wenn ein Gen die phänotypische Wirkung eines ganz anderen, nicht-allelen Gens maskiert.",
      D: "Polygenie beschreibt die Mitwirkung vieler verschiedener Gene an einem quantitativen Merkmal (z. B. Körpergröße)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-016",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Genkopplung & Rekombinationsfrequenz",
    difficulty: "intermediate",
    stem: "Zwei Gene A und B liegen auf demselben menschlichen Autosom. In einer Kopplungsanalyse wird eine Rekombinationsfrequenz von 12 % zwischen beiden Loci ermittelt. Welche Aussage über diese Gene ist genetisch korrekt?",
    options: {
      A: "Beide Gene vererben sich streng nach der 3. Mendelschen Regel der freien Kombinierbarkeit mit 50 % Rekombinanten.",
      B: "Die Gene liegen auf unterschiedlichen Armen zweier nicht-homologer Chromosomen.",
      C: "Der geschätzte genetische Kartenabstand beträgt 12 Zentimorgan (cM), was bedeutet, dass 12 % der resultierenden Gameten eine Rekombination zwischen diesen Loci aufweisen.",
      D: "Eines der beiden Gene ist defekt und wird durch epigenetische Prägung vollständig stillgelegt.",
      E: "Die Nachkommen zeigen zu 88 % rekombinante Phänotypen und zu 12 % elterliche Phänotypen."
    },
    correct_answer: "C",
    explanation_correct: "Nach Thomas Hunt Morgan ist ein genetischer Kartenabstand von 1 Zentimorgan (cM) als 1 % Rekombinationshäufigkeit unter den resultierenden Gameten definiert. Eine Rekombinationsfrequenz von 12 % entspricht somit 12 cM. Da ein meiotisches Bivalent aus vier Chromatiden besteht und ein einzelnes Crossing-over nur zwei Nicht-Schwesterchromatiden betrifft, entstehen bei einer Meiose mit einfachem Crossover zu 50 % rekombinante und zu 50 % elterliche Chromatiden. Eine Rekombinationsfrequenz von 12 % unter den Gameten bedeutet folglich, dass in ca. 24 % der Meiosen ein Crossing-over zwischen den beiden Loci stattfand (unter Vernachlässigung von Doppel-Crossings-over).",
    explanations_incorrect: {
      A: "Freie Kombinierbarkeit (50 % Rekombination) gilt nur für unvollständig gekoppelte Gene mit großem Abstand oder Gene auf verschiedenen Chromosomen.",
      B: "Kopplungsanalysen und cM-Abstände beziehen sich per Definition auf Loci auf demselben Chromosom (Syntenie).",
      D: "Rekombination ist ein normaler Prozess des meiotischen Austauschs und hat nichts mit Gendefekten oder Imprinting zu tun.",
      E: "Genau umgekehrt: 88 % zeigen den elterlichen Typ, während nur 12 % rekombinant sind."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-017",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Autosomal-dominant mit unvollständiger Penetranz",
    difficulty: "intermediate",
    stem: "Ein Mann ist heterozygoter Träger einer Mutation für ein autosomal-dominant vererbtes Krankheitsmerkmal, das eine Penetranz von 70 % aufweist. Seine Partnerin trägt die Mutation nicht. Mit welcher Wahrscheinlichkeit wird ein gemeinsames Kind phänotypisch an diesem Merkmal erkranken?",
    options: {
      A: "70 %",
      B: "35 %",
      C: "50 %",
      D: "17,5 %",
      E: "100 %"
    },
    correct_answer: "B",
    explanation_correct: "Der Mann hat den Genotyp Aa, die Frau aa. Die Wahrscheinlichkeit, dass ein Kind das mutierte Allel A erbt, beträgt nach den Mendelschen Gesetzen $P(\\text{Allel A}) = 1/2 = 50\\,\\%$. Da das Merkmal eine unvollständige Penetranz von 70 % ($0{,}7$) hat, manifestiert sich die Erkrankung nur bei 70 % der Allelträger. Die Gesamtwahrscheinlichkeit für eine manifeste Erkrankung ist daher: $P = 0{,}5 \\times 0{,}7 = 0{,}35 = 35\\,\\%$.",
    explanations_incorrect: {
      A: "70 % wäre die Wahrscheinlichkeit, wenn das Kind das Allel garantiert geerbt hätte (z. B. bei homozygotem Vater AA).",
      C: "50 % wäre das Erkrankungsrisiko bei vollständiger (100 %) Penetranz.",
      D: "17,5 % resultiert aus einer fehlerhaften Multiplikation mit weiteren Faktoren (z. B. $0{,}25 \\times 0{,}7$).",
      E: "100 % ist unmöglich, da bereits die Allelweitergabe nur 50 % beträgt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-018",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Hardy-Weinberg-Gleichgewicht & Frequenzen",
    difficulty: "intermediate",
    stem: "In einer mitteleuropäischen Bevölkerung im Hardy-Weinberg-Gleichgewicht liegt die Häufigkeit einer schweren autosomal-rezessiven Stoffwechselstörung bei Neugeborenen bei 1 zu 2.500 (Genotypfrequenz q² = 0,0004). Wie hoch ist näherungsweise die Häufigkeit heterozygoter Anlageträger (Konduktoren) in dieser Population?",
    options: {
      A: "Ca. 1 zu 26 (ca. 3,9 %)",
      B: "Ca. 1 zu 50 (ca. 2,0 %)",
      C: "Ca. 1 zu 500 (ca. 0,2 %)",
      D: "Ca. 1 zu 1.250 (ca. 0,08 %)",
      E: "Ca. 1 zu 2.500 (ca. 0,04 %)"
    },
    correct_answer: "A",
    explanation_correct: "Nach Hardy-Weinberg gilt: $q^2 = 1/2.500 = 0{,}0004 \\implies q = \\sqrt{0{,}0004} = 0{,}02$. Da $p + q = 1$, ist $p = 1 - 0{,}02 = 0{,}98$. Die Heterozygotenfrequenz ist $2pq = 2 \\times 0{,}98 \\times 0{,}02 = 0{,}0392 = 3{,}92\\,\\%$. Dies entspricht einem Verhältnis von $1 / 0{,}0392 \\approx 1 : 25{,}5$ (rund 1 zu 26).",
    explanations_incorrect: {
      B: "1 zu 50 (2 %) ist der Wert von $q$, also die Allelfrequenz, nicht die Frequenz der heterozygoten Individuen ($2pq$).",
      C: "1 zu 500 ist eine fehlerhafte Berechnung ohne Verdopplung ($pq/10$).",
      D: "1 zu 1.250 ist die Hälfte der Erkrankungshäufigkeit, was biologisch keinen Bezug zu den Heterozygoten hat.",
      E: "1 zu 2.500 ist die Frequenz der homozygot erkrankten Individuen ($q^2$), nicht der gesunden Träger."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-019",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Robertsonsche Translokation & Aneuploidie",
    difficulty: "advanced",
    stem: "Welche zytogenetische Besonderheit charakterisiert eine balancierte Robertsonsche Translokation zwischen den Chromosomen 14 und 21 (rob(14;21)) bei einem phänotypisch gesunden Menschen?",
    options: {
      A: "Der Karyotyp weist 47 Chromosomen auf, da ein zusätzliches Centromer gebildet wurde.",
      B: "Die Bruchpunkte liegen in den telomeren Regionen der langen Arme (q-Arme), wodurch ein Ringchromosom entsteht.",
      C: "Der Karyotyp weist 46 Chromosomen auf, wobei Chromosom 21 vollständig in das X-Chromosom inseriert ist.",
      D: "Der Karyotyp weist 45 Chromosomen auf; die langen Arme (q-Arme) beider akrozentrischer Chromosomen sind zentromernah verschmolzen, während die kurzen Satellitenarme (p-Arme) verloren gingen.",
      E: "Es liegt eine reziproke Translokation zwischen den Metazentren der Chromosomen 1 und 2 vor."
    },
    correct_answer: "D",
    explanation_correct: "Eine Robertsonsche Translokation findet ausschließlich zwischen akrozentrischen Chromosomen (13, 14, 15, 21, 22) statt. Die langen Arme (q-Arme) verschmelzen zentromernah zu einem Fusionschromosom, während die kurzen p-Arme verloren gehen (balancierter Karyotyp mit 45 Chromosomen ohne phänotypische Beeinträchtigung des Trägers). Das reproduktive Risiko für Nachkommen ist differenziert und kontextabhängig: Ungleichmäßige meiotische Segregation führt zu 6 theoretischen Gametentypen. Zygoten mit Monosomie 14, Trisomie 14 oder Monosomie 21 sterben früh ab. Das empirische Risiko für ein lebendgeborenes Kind mit Translokations-Trisomie 21 beträgt bei maternaler Trägerschaft ca. 10–15 %, bei paternaler Trägerschaft jedoch nur ca. 1–2 % (infolge Gametenselektion). Bei Trägern einer homologen Translokation rob(21;21) hingegen beträgt das Trisomie-21-Risiko für lebende Kinder 100 %.",
    explanations_incorrect: {
      A: "Balancierte Robertsonsche Translokationsträger haben 45 Chromosomen, da zwei Chromosomen zu einem verschmolzen sind.",
      B: "Robertsonsche Translokationen sind zentromernahe Fusionen akrozentrischer Chromosomen, keine Ringchromosomen durch Telomerbrüche.",
      C: "Der Karyotyp hat 45 Chromosomen, und es liegt keine X-chromosomale Insertion vor.",
      E: "Chromosom 1 und 2 sind metazentrisch bzw. submetazentrisch und können keine Robertsonsche Translokation eingehen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 5: Molekulargenetik & Methoden (bio-05-molgen) - 5 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-020",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Doppelhelix & Wasserstoffbrücken",
    difficulty: "foundational",
    stem: "Wie viele Wasserstoffbrückenbindungen stabilisieren jeweils ein kanonisches Watson-Crick-Basenpaar in der B-DNA?",
    options: {
      A: "Adenin-Thymin besitzt 3 Wasserstoffbrücken; Guanin-Cytosin besitzt 2 Wasserstoffbrücken.",
      B: "Adenin-Thymin besitzt 2 Wasserstoffbrücken; Guanin-Cytosin besitzt 3 Wasserstoffbrücken.",
      C: "Beide Basenpaare besitzen identisch genau 2 kovalente Wasserstoffbrücken.",
      D: "Adenin-Thymin wird durch Disulfidbrücken gebunden; Guanin-Cytosin durch Ionenbindungen.",
      E: "Adenin-Uracil besitzt 3 Wasserstoffbrücken; Guanin-Thymin besitzt 4 Wasserstoffbrücken."
    },
    correct_answer: "B",
    explanation_correct: "In der doppelsträngigen B-DNA paart Adenin mit Thymin über zwei Wasserstoffbrückenbindungen (zwischen C6-NH2/C4=O und N1/N3-H). Guanin paart mit Cytosin über drei Wasserstoffbrückenbindungen (C6=O/C4-NH2, N1-H/N3 und C2-NH2/C2=O). DNA-Abschnitte mit hohem GC-Gehalt weisen daher eine höhere thermische Stabilität (höhere Schmelztemperatur Tm) auf.",
    explanations_incorrect: {
      A: "Genau umgekehrt: A-T hat 2 Brücken, G-C hat 3 Brücken.",
      C: "Wasserstoffbrückenbindungen sind keine kovalenten Bindungen, sondern elektrostatische Dipol-Dipol-Wechselwirkungen, und ihre Anzahl unterscheidet sich (2 vs. 3).",
      D: "Basenpaarungen basieren auf Wasserstoffbrücken, nicht auf kovalenten Disulfidbrücken oder ionischen Salzen.",
      E: "In DNA existiert Thymin statt Uracil; Guanin paart in kanonischer DNA nicht mit Thymin."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-021",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Reparatur: Nucleotid-Exzisionsreparatur",
    difficulty: "intermediate",
    stem: "Welcher zelluläre DNA-Reparaturmechanismus beseitigt primär durch ultraviolette Strahlung (UV-B) induzierte Cyclobutan-Pyrimidin-Dimere (wie Thymin-Dimere), und welcher Erbkrankheit liegt ein Defekt dieses Signalwegs zugrunde?",
    options: {
      A: "Mismatch-Reparatur (MMR); Defekt führt zu Chorea Huntington",
      B: "Basen-Exzisionsreparatur (BER); Defekt führt zu Zystischer Fibrose",
      C: "Homologe Rekombination (HR); Defekt führt zu Achondroplasie",
      D: "Nicht-homologes End-Joining (NHEJ); Defekt führt zu Sichelzellenanämie",
      E: "Nucleotid-Exzisionsreparatur (NER); Defekt führt zu Xeroderma pigmentosum"
    },
    correct_answer: "E",
    explanation_correct: "UV-Strahlung induziert kovalente Verknüpfungen zwischen benachbarten Pyrimidinen (Cyclobutan-Pyrimidin-Dimere, 6-4-Photoprodukte), die die Doppelhelix verzerren. Diese voluminösen Läsionen werden durch die Nucleotid-Exzisionsreparatur (NER) erkannt: Endonukleasen schneiden ein ca. 24–32 Nukleotide langes Oligonukleotid heraus, DNA-Polymerase füllt die Lücke und Ligase schließt den Strang. Mutationen in den NER-Genen (XPA bis XPG) verursachen Xeroderma pigmentosum (Mondscheinkrankheit) mit extremer UV-Empfindlichkeit und Hautkrebs.",
    explanations_incorrect: {
      A: "Die Mismatch-Reparatur beseitigt Fehlpaarungen nach der Replikation; Defekte verursachen das hereditäre kolorektale Karzinom (Lynch-Syndrom/HNPCC).",
      B: "Die BER beseitigt oxidative Basenschäden (z. B. 8-Oxo-Guanin) oder desaminierte Basen über DNA-Glykosylasen; Zystische Fibrose ist ein CFTR-Kanaldefekt.",
      C: "Homologe Rekombination repariert Doppelstrangbrüche fehlerfrei; Achondroplasie beruht auf einer FGFR3-Gain-of-Function-Mutation.",
      D: "NHEJ repariert Doppelstrangbrüche fehleranfällig; Sichelzellenanämie ist eine Punktmutation im Beta-Globin-Gen (Glu6Val)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-022",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Alternatives Spleißen & Isoformen",
    difficulty: "intermediate",
    stem: "Wie ermöglicht der Mechanismus des alternativen Spleißens in menschlichen Zellen, dass aus einem einzigen proteincodierenden Gen mehrere strukturell und funktionell unterschiedliche Protein-Isoformen entstehen können?",
    options: {
      A: "Durch differentielles Einbeziehen oder Überspringen bestimmter Exons bzw. Nutzung alternativer Spleißstellen in der Prä-mRNA",
      B: "Durch zufälliges Vertauschen der Promoterregion mit dem Polyadenylierungssignal auf DNA-Ebene",
      C: "Durch enzymatisches Umschreiben der Aminosäuresequenz direkt am Ribosom während der Elongation",
      D: "Durch Verdopplung der Chromosomenzahl während der mitotischen Metaphase",
      E: "Durch nachträgliche Spaltung von Histon-Oktameren im Zytoplasma"
    },
    correct_answer: "A",
    explanation_correct: "Alternatives Spleißen ist ein zentraler posttranskriptionaler Regulationsmechanismus bei Eukaryoten. Durch alternatives Erkennen von 5'-Spleißstellen (Donor), 3'-Spleißstellen (Akzeptor), Exon-Skipping oder Intron-Retention setzt das Spleißosom unterschiedliche Exonkombinationen zusammen. Dadurch codiert das menschliche Genom (ca. 20.000 Gene) für über 100.000 verschiedene funktionelle Proteinvarianten (Proteomvielfalt).",
    explanations_incorrect: {
      B: "DNA-Sequenzen werden beim Spleißen nicht umgestellt; Spleißen operiert ausschließlich auf der Ebene der transkribierten Prä-mRNA.",
      C: "Ribosomen übersetzen mRNA streng Colinear entsprechend den Codons; sie verändern nicht eigenmächtig die Aminosäuresequenz.",
      D: "Verdopplung von Chromosomen ist Polyploidie und hat keinen Bezug zur Isoformenbildung einzelner Transkripte.",
      E: "Histone sind Kernproteine zur DNA-Kompaktierung; ihr Abbau steuert keine Transkriptvarianten."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-023",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Sanger-Sequenzierung & Kettenabbruch",
    difficulty: "intermediate",
    stem: "Auf welcher biochemischen Besonderheit von Didesoxynukleosidtriphosphaten (ddNTPs) beruht der gezielte Kettenabbruch bei der klassischen enzymatischen DNA-Sequenzierung nach Sanger?",
    options: {
      A: "ddNTPs tragen eine kovalente Blockierung an der 5'-Phosphatgruppe, die keine Esterbindung zulässt.",
      B: "ddNTPs führen zur sofortigen Spaltung des Template-Strangs durch intrinsische Nukleaseaktivität.",
      C: "ddNTPs besitzen anstelle einer 3'-Hydroxylgruppe (-OH) am Desoxyribosering lediglich ein Wasserstoffatom (-H), sodass keine nachfolgende Phosphodiesterbindung geknüpft werden kann.",
      D: "ddNTPs denaturieren die DNA-Polymerase irreversibel durch Konformationsänderung des aktiven Zentrums.",
      E: "ddNTPs können nur über Uracilbasen mit Thymin paaren und blockieren so die Basenanlagerung."
    },
    correct_answer: "C",
    explanation_correct: "Die Sanger-Sequenzierung nutzt 2',3'-Didesoxynukleosidtriphosphate (ddATP, ddCTP, ddGTP, ddTTP). Während normale dNTPs am C3'-Atom des Zuckers eine freie Hydroxylgruppe (-OH) tragen, die das angreifende Nukleophil für die Ausbildung der Phosphodiesterbindung mit dem 5'-Phosphat des nächsten Nukleotids darstellt, fehlt den ddNTPs die freie 3'-Hydroxylgruppe (3'-OH); am C3'-Atom befindet sich stattdessen lediglich ein Wasserstoffatom (-H). Nach dem enzymatischen Einbau eines ddNTP kann die DNA-Polymerase daher keine weitere Phosphodiesterbindung mehr knüpfen, was zum irreversiblen Kettenabbruch führt.",
    explanations_incorrect: {
      A: "Die 5'-Triphosphatgruppe von ddNTPs ist völlig intakt und wird von der Polymerase regulär als Substrat erkannt.",
      B: "ddNTPs besitzen keinerlei Nukleaseaktivität; sie sind reine Synthesesubstrate ohne lytische Wirkung.",
      D: "Die Polymerase wird nicht denaturiert; sie diffundiert ab und kann an anderen Primern weitersynthetisieren.",
      E: "ddNTPs tragen die normalen Basen A, C, G oder T und paaren streng nach Watson-Crick mit den Gegenbasen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-024",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "CRISPR/Cas9 vs. RNA-Interferenz",
    difficulty: "advanced",
    stem: "Welche fundamentale molekularbiologische Unterscheidung trennt das Genome-Editing mittels CRISPR/Cas9 vom Knockdown via RNA-Interferenz (RNAi / siRNA)?",
    options: {
      A: "CRISPR/Cas9 spaltet ausschließlich zytosolische Proteine, während siRNA Doppelstrangbrüche in mitochondrialer DNA erzeugt.",
      B: "RNAi führt zu einer dauerhaften irreversiblen Deletion auf DNA-Ebene, während CRISPR/Cas9 nur reversibel die Translation hemmt.",
      C: "CRISPR/Cas9 benötigt keine komplementäre RNA-Sequenz zur Zielerkennung, siRNA bindet unspezifisch an Phospholipide.",
      D: "CRISPR/Cas9 induziert über eine sgRNA gezielte Doppelstrangbrüche in der chromosomalen DNA (Genom-Ebene), während RNAi über den RISC-Komplex posttranskriptionell spezifische Ziel-mRNAs im Zytoplasma degradiert oder deren Translation hemmt (Transkriptom-Ebene).",
      E: "CRISPR/Cas9 kann nur in Bakterien ohne Kern angewandt werden, RNAi funktioniert ausschließlich in Viren."
    },
    correct_answer: "D",
    explanation_correct: "CRISPR/Cas9 ist ein System zur gezielten DNA-Modifikation: Die Cas9-Endonuklease wird durch eine single guide RNA (sgRNA) zu einer homologen DNA-Zielsequenz mit benachbartem PAM-Motiv geführt und erzeugt dort einen Doppelstrangbruch, der zu dauerhaften Knockouts oder gezielten Insertionen führt. RNAi (über siRNA/miRNA) greift hingegen posttranskriptionell im Zytosol an: Der RISC-Komplex zerschneidet komplementäre Ziel-mRNA oder hemmt deren Translation, ohne die genomische DNA-Sequenz zu verändern (Transienter Knockdown).",
    explanations_incorrect: {
      A: "CRISPR/Cas9 schneidet DNA im Zellkern, keine Proteine; siRNA attackiert mRNA im Zytosol, keine mitochondriale DNA.",
      B: "Genau vertauscht: CRISPR verändert die chromosomale DNA permanent; RNAi wirkt passager auf mRNA-Ebene.",
      C: "CRISPR benötigt zwingend eine sgRNA zur Basenpaarung; siRNA bindet komplementäre mRNA, keine Membranlipide.",
      E: "CRISPR/Cas9 wurde aus Bakterien isoliert, funktioniert aber hochwirksam in Eukaryotenzellen; RNAi ist ein genuiner eukaryotischer Schutz- und Regulationsmechanismus."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Zellstoffwechsel & Energiegewinnung (bio-06-stoffwechsel) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-025",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Citratzyklus & Enzymtopologie",
    difficulty: "foundational",
    stem: "In welchem zellulären Kompartiment läuft der Citratzyklus (Tricarbonsäurezyklus) in menschlichen Zellen ab, und welches seiner Enzyme ist als einziges fest in die innere Mitochondrienmembran integriert?",
    options: {
      A: "Im Zytosol; Citrat-Synthase",
      B: "In der mitochondrialen Matrix; Succinat-Dehydrogenase (Komplex II der Atmungskette)",
      C: "Im Intermembranraum der Mitochondrien; Malat-Dehydrogenase",
      D: "Im rauen endoplasmatischen Retikulum; Isocitrat-Dehydrogenase",
      E: "Im Zellkern; Fumarase"
    },
    correct_answer: "B",
    explanation_correct: "Die Reaktionen des Citratzyklus laufen in der mitochondrialen Matrix ab. Die Succinat-Dehydrogenase bildet die funktionelle und strukturelle Ausnahme: Sie ist als Transmembrankomplex direkt in die innere Mitochondrienmembran eingelagert und bildet gleichzeitig den Komplex II der Atmungskette. Sie oxidiert Succinat zu Fumarat und überträgt die Elektronen über FAD und Eisen-Schwefel-Zentren direkt auf Ubichinon (Coenzym Q).",
    explanations_incorrect: {
      A: "Im Zytosol läuft die Glykolyse ab; die Citrat-Synthase ist ein lösliches Enzym der mitochondrialen Matrix.",
      C: "Der Intermembranraum dient dem Aufbau des Protonengradienten; Malat-Dehydrogenase liegt gelöst in der Matrix vor.",
      D: "Das rER synthetisiert Membran- und Sekretproteine, beherbergt aber keine Citratzyklus-Enzyme.",
      E: "Der Citratzyklus findet nicht im Zellkern statt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-026",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Beta-Oxidation & Carnitin-Shuttle",
    difficulty: "intermediate",
    stem: "Über welches Transportsystem gelangen aktivierte langkettige Fettsäuren (Acyl-CoA) zur Beta-Oxidation über die innere Mitochondrienmembran in die mitochondriale Matrix?",
    options: {
      A: "Über einfache passive Diffusion entlang des Konzentrationsgradienten",
      B: "Über das Carnitin-Shuttle (Carnitin-Palmitoyl-Transferase 1 und 2 mit Acylcarnitin-Translokase)",
      C: "Über den Malat-Aspartat-Shuttle unter Verbrauch von ATP",
      D: "Über Natrium-gekoppelte Symporter (SGLT-Familie)",
      E: "Über Clathrin-vermittelte Endozytose der inneren Mitochondrienmembran"
    },
    correct_answer: "B",
    explanation_correct: "Während kurzkettige Fettsäuren frei diffundieren können, ist die innere Mitochondrienmembran für langkettige Acyl-CoA impermeabel. Die Carnitin-Palmitoyl-Transferase 1 (CPT-1) an der äußeren Membran überträgt den Acylrest auf Carnitin. Acylcarnitin wird durch die Carnitin-Acylcarnitin-Translokase im Antiport gegen freies Carnitin über die innere Membran geschleust, wo CPT-2 Acyl-CoA regeneriert.",
    explanations_incorrect: {
      A: "Langkettige Acyl-CoA-Moleküle sind groß und geladen; sie können die innere Mitochondrienmembran nicht frei passieren.",
      C: "Der Malat-Aspartat-Shuttle transportiert Reduktionsäquivalente (NADH + H+) aus der zytosolischen Glykolyse in die Matrix, keine Fettsäuren.",
      D: "SGLT-Transporter transportieren Glukose an Epithelien (Darm, Niere), nicht Fettsäuren an Mitochondrien.",
      E: "Mitochondrienmembranen bilden keine Clathrin-Vesikel; Endozytose existiert nur an der äußeren Plasmamembran."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-027",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Pentosephosphatweg & NADPH",
    difficulty: "intermediate",
    stem: "Welche direkten Stoffwechselprodukte liefert die irreversible oxidative Phase des zytosolischen Pentosephosphatwegs beim Abbau von Glukose-6-Phosphat für den menschlichen Organismus?",
    options: {
      A: "Laktat und FADH2",
      B: "Pyruvat und molekularen Sauerstoff (O2)",
      C: "Glykogen und Cholesterinester",
      D: "Oxalacetat und UTP",
      E: "NADPH, CO2 und Ribulose-5-Phosphat (welches anschließend zu Ribose-5-Phosphat isomerisiert werden kann)"
    },
    correct_answer: "E",
    explanation_correct: "Die irreversible oxidative Phase des zytosolischen Pentosephosphatwegs umfasst drei Reaktionen: 1. Glukose-6-Phosphat-Dehydrogenase (G6PD): Glukose-6-P + NADP+ -> 6-Phosphoglukono-delta-lacton + NADPH + H+; 2. 6-Phosphoglukonolactonase: Hydratisierung zu 6-Phosphoglukonat; 3. 6-Phosphoglukonat-Dehydrogenase: oxidative Decarboxylierung zu Ribulose-5-Phosphat + CO2 + NADPH + H+. Die direkte Bilanz lautet: 1 Glukose-6-P + 2 NADP+ + H2O -> 1 Ribulose-5-P + 1 CO2 + 2 NADPH + 2 H+. NADPH dient als Reduktionsmittel bei Biosynthesen und schützt Erythrozyten über Glutathion-Regeneration vor oxidativem Stress. Erst in der nachfolgenden nicht-oxidativen Phase wird Ribulose-5-P durch die Phosphopentose-Isomerase zu Ribose-5-Phosphat für die Nukleotidsynthese umgewandelt.",
    explanations_incorrect: {
      A: "Laktat entsteht bei der anaeroben Glykolyse; FADH2 entsteht im Citratzyklus und bei der Beta-Oxidation.",
      B: "Pyruvat ist das Endprodukt der Glykolyse; O2 wird im menschlichen Körper verbraucht, nicht biochemisch synthetisiert.",
      C: "Glykogen und Cholesterinester sind Speicherformen, keine direkten Produkte des Pentosephosphatwegs.",
      D: "Oxalacetat ist ein Intermediat des Citratzyklus und der Gluconeogenese in Mitochondrien."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-028",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Allosterische Regulation & Feedback-Inhibition",
    difficulty: "advanced",
    stem: "Wie unterscheidet sich die allosterische Enzymregulation mechanistisch von der klassischen kompetitiven Hemmung eines metabolischen Schlüsselenzyms?",
    options: {
      A: "Der allosterische Effektor bindet an eine spezifische regulatorische Bindungsstelle abseits des katalytischen Zentrums und induziert eine Konformationsänderung, während der kompetitive Inhibitor direkt um das aktive Zentrum konkurriert.",
      B: "Allosterische Hemmung ist immer irreversibel und zerstört die Primärstruktur des Enzyms durch Peptidspaltung.",
      C: "Kompetitive Inhibitoren verändern ausschließlich die maximale Reaktionsgeschwindigkeit Vmax, während Km unverändert bleibt.",
      D: "Allosterische Enzyme folgen stets einer strikten Michaelis-Menten-Hyperbel ohne Kooperativität.",
      E: "Allosterische Effektoren binden kovalent an das Substrat und verhindern dessen Eintritt in die Zelle."
    },
    correct_answer: "A",
    explanation_correct: "Allosterische Enzyme sind meist oligomere Proteine mit mehreren Untereinheiten. Ein allosterischer Effektor (Inhibitor oder Aktivator) bindet an eine allosterische Stelle außerhalb des aktiven Zentrums und verschiebt das Gleichgewicht zwischen T-Form (tense, niedrige Affinität) und R-Form (relaxed, hohe Affinität), was zu sigmoidalen Sättigungskurven führt. Im Gegensatz dazu ähnelt ein kompetitiver Hemmstoff dem Substrat chemisch und verdrängt dieses reversibel aus dem aktiven Zentrum (erhöht scheinbaren Km, lässt Vmax unberührt).",
    explanations_incorrect: {
      B: "Allosterische Hemmung ist reversibel über nicht-kovalente Bindungen (Wasserstoffbrücken, Ionenbindungen) und spaltet keine Peptidbindungen.",
      C: "Kompetitive Hemmung erhöht den Km-Wert (mehr Substrat nötig zur Halbsättigung), lässt aber Vmax unbeeinflusst, da hohe Substratkonzentrationen den Inhibitor verdrängen.",
      D: "Allosterische Enzyme zeigen durch Konformationskooperativität typischerweise eine sigmoidale Kinetik (Hill-Gleichung), keine einfache Michaelis-Menten-Hyperbel.",
      E: "Effektoren binden an das Enzym, nicht an das Substrat, und blockieren nicht den zellulären Einstrom."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 7: Herz-Kreislauf-System (bio-07-herzkreislauf) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-029",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Herzklappen & Klappenapparat",
    difficulty: "foundational",
    stem: "Welche anatomische Struktur verhindert bei der Kontraktion der Herzkammern (Ventrikelsystole), dass die Atrioventrikularklappen (Mitralklappe und Trikuspidalklappe) in die Vorhöfe durchschlagen?",
    options: {
      A: "Die Taschen der Aortenklappe",
      B: "Die elastischen Windkesselfasern der Pulmonalarterie",
      C: "Das Foramen ovale im Vorhofseptum",
      D: "Die Sehnenfäden (Chordae tendineae), die von den kontrahierten Papillarmuskeln der Kammerwand gespannt werden",
      E: "Die glatten Muskelzellen des Sinusknotens"
    },
    correct_answer: "D",
    explanation_correct: "Die Segelklappen (AV-Klappen: Bikuspidal-/Mitralklappe links, Trikuspidalklappe rechts) sind an ihren freien Rändern über kollagene Sehnenfäden (Chordae tendineae) mit den Papillarmuskeln der Ventrikelwand verankert. Während der Kammersystole kontrahieren sich die Papillarmuskeln synchron mit dem Myokard, spannen die Sehnenfäden und verhindern mechanisch ein Zurückschlagen (Prolaps) der Klappensegel in den Niederdruckbereich der Vorhöfe.",
    explanations_incorrect: {
      A: "Die Aortenklappe ist eine Taschenklappe am Ausgang der linken Kammer und besitzt weder Sehnenfäden noch Papillarmuskeln.",
      B: "Windkesselfasern liegen in den elastischen Wänden herznaher Arterien und dämpfen die Druckwelle, stabilisieren aber keine Klappensegel.",
      C: "Das Foramen ovale ist ein pränataler Shunt im interatrialen Septum; bei Erwachsenen ist es zur Fossa ovalis verschlossen.",
      E: "Der Sinusknoten ist ein primäres Schrittmacherzentrum im rechten Vorhof und besitzt keine Haltefunktion für Klappen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-030",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Frank-Starling-Mechanismus",
    difficulty: "intermediate",
    stem: "Auf welchem physiologischen Prinzip beruht der Frank-Starling-Mechanismus des gesunden menschlichen Herzens?",
    options: {
      A: "Auf einer direkten Aktivierung von Beta-1-Adrenorezeptoren durch sympathische Nervenfasern bei körperlicher Belastung",
      B: "Auf einer reflektorischen Erhöhung der Herzfrequenz durch Dehnung des rechten Vorhofs (Bainbridge-Reflex)",
      C: "Auf einer Steigerung des Schlagvolumens durch Vordehnung der Kardiomyozyten bei erhöhtem enddiastolischen Füllungsvolumen (Vorlast), wodurch die Ca2+-Empfindlichkeit der Myofilamente und die Zahl wirksamer Querbrücken zunehmen",
      D: "Auf einer Zunahme des totalen peripheren Widerstands zur Erhöhung des diastolischen Blutdrucks",
      E: "Auf einer Öffnung von ATP-abhängigen Kaliumkanälen zur Verkürzung der ventrikulären Erregungsdauer"
    },
    correct_answer: "C",
    explanation_correct: "Der Frank-Starling-Mechanismus ist eine intrinsische (autoregulative) Anpassung des Herzens ohne Nervenbeteiligung: Ein vergrößerter venöser Rückstrom steigert das enddiastolische Volumen (Vorlast/Preload) und dehnt die Sarkomere von ca. 1,9 µm in Richtung ihres funktionellen Optimums (ca. 2,2 µm). Dies erhöht die Calcium-Sensitivität des Troponin C und die Anzahl optimal interagierender Myosin-Aktin-Querbrücken, wodurch das Herz mit höherer Auswurfkraft kontrahiert und das Schlagvolumen steigt.",
    explanations_incorrect: {
      A: "Die Aktivierung von Beta-1-Rezeptoren ist die sympathische (extrinsische) Inotropie-Steigerung, nicht der autoregulative Frank-Starling-Mechanismus.",
      B: "Der Bainbridge-Reflex ist ein neuronal vermittelter Frequenzanstieg bei Vorhofdehnung, nicht die mechanische Schlagvolumenanpassung der Kammern.",
      D: "Der periphere Widerstand bestimmt die Nachlast (Afterload); eine Erhöhung der Nachlast senkt primär das Schlagvolumen.",
      E: "ATP-abhängige K+-Kanäle öffnen bei schwerer Ischämie (KHK), haben aber keinen Anteil am physiologischen Frank-Starling-Gesetz."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-031",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Barorezeptorreflex & Blutdruckregulation",
    difficulty: "intermediate",
    stem: "Welche neuronale und kardiovaskuläre Reaktionskette wird ausgelöst, wenn die arteriellen Barorezeptoren im Sinus caroticus einen akuten, massiven Blutdruckanstieg registrieren?",
    options: {
      A: "Gesteigerte Entladungsrate der Barorezeptoren -> Signal über N. glossopharyngeus zum Hirnstamm -> Aktivierung des Parasympathikus (N. vagus) und Hemmung des Sympathikus -> Senkung von Herzfrequenz, Schlagkraft und peripherem Gefäßwiderstand",
      B: "Hemmung der Barorezeptoren -> Aktivierung des Sympathikus -> Ausschüttung von Noradrenalin an Beta-1-Rezeptoren -> weiterer Blutdruckanstieg",
      C: "Sofortige Freisetzung von Renin aus den Glomera carotica -> Bildung von Angiotensin II -> Vasokonstriktion",
      D: "Stimulation des Atemzentrums zur Hyperventilation -> Azidose -> reflektorische Vasokonstriktion der Arteriolen",
      E: "Blockade des Parasympathikus -> unkontrollierte Tachykardie mit Blutdrucksenkung durch Kammerflimmern"
    },
    correct_answer: "A",
    explanation_correct: "Der Barorezeptorreflex ist ein negativer Rückkopplungskreis zur Blutdruckstabilisierung: Hoher arterieller Druck dehnt die Gefäßwand im Sinus caroticus und Aortenbogen. Mechanosensitive Ionenkanäle feuern verstärkt Aktionspotenziale über den N. glossopharyngeus (IX, Karotissinus) und N. vagus (X, Aortenbogen) zum Nucleus tractus solitarii (NTS) der Medulla. Dies aktiviert vagale Kerne (Parasympathikus -> Bradykardie) und hemmt das sympathische Vasomotorzentrum (Sympathikolyse -> Vasodilatation), wodurch der Blutdruck rasch normalisiert wird.",
    explanations_incorrect: {
      B: "Bei Druckanstieg werden Barorezeptoren stimuliert, nicht gehemmt; die Sympathikushemmung senkt den Druck, anstatt ihn weiter zu steigern.",
      C: "Renin wird im juxtaglomerulären Apparat der Niere synthetisiert, keinesfalls in den Glomera carotica (diese sind Chemorezeptoren für pO2/pCO2).",
      D: "Der Barorezeptorreflex steuert primär das Herz-Kreislauf-Zentrum; Hyperventilation erzeugt respiratorische Alkalose, keine Azidose.",
      E: "Der Vagus wird aktiviert (nicht blockiert); Kammerflimmern ist eine fatale Rhythmusstörung, keine physiologische Reflexantwort."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-032",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Myokardiales Aktionspotenzial: Plateauphase",
    difficulty: "advanced",
    stem: "Welche Ionenströme halten während des Aktionspotenzials einer menschlichen Arbeitskardiomyozyte die charakteristische Plateauphase (Phase 2) im Gleichgewicht aufrecht?",
    options: {
      A: "Ein massiver Einstrom von Natriumionen über spannungsabhängige Na+-Kanäle balanciert mit Chloridausstrom",
      B: "Ein reiner Ausstrom von Kalziumionen über die SERCA-Pumpe ohne Beteiligung von Kaliumkanälen",
      C: "Ein kontinuierlicher Einstrom von Magnesiumionen im Austausch gegen Bikarbonat",
      D: "Ein vollständiger Stillstand jeglicher Membranleitfähigkeit durch Schließung aller Ionenkanäle",
      E: "Ein langsamer, depolarisierender Einstrom von Calciumionen (über L-Typ-Ca2+-Kanäle) im dynamischen Gleichgewicht mit einem repolarisierenden Ausstrom von Kaliumionen (über verzögerte K+-Gleichrichterkanäle)"
    },
    correct_answer: "E",
    explanation_correct: "Die Plateauphase (Phase 2) des Arbeitsmyokards dauert ca. 200–300 ms und verhindert eine tetanische Dauerkontraktion des Herzens. Sie entsteht durch das feine Fließgleichgewicht zweier gegenläufiger Ionenströme: Ein depolarisierender Calciumeinstrom durch spannungsaktivierte L-Typ-Kanäle ($I_{\\text{Ca,L}}$) balanciert den repolarisierenden Kaliumausstrom durch verzögerte Gleichrichterkanäle ($I_{\\text{Kr}}$ und $I_{\\text{Ks}}$). Erst wenn die Ca2+-Kanäle inaktivieren, führt der überwiegende K+-Ausstrom zur schnellen Repolarisation (Phase 3).",
    explanations_incorrect: {
      A: "Die schnellen Na+-Kanäle öffnen in Phase 0 (Aufstrich) und werden bereits zu Beginn von Phase 1 vollständig inaktiviert.",
      B: "SERCA pumpt Ca2+ aus dem Zytosol in das sarkoplasmatische Retikulum (intrazellulär), nicht über die Plasmamembran; Ca2+ strömt in die Zelle ein.",
      C: "Magnesium- und Bikarbonatströme spielen keine Rolle bei der elektrischen Formung der myokardialen Plateauphase.",
      D: "Während des Plateaus herrscht hohe Ionenleitfähigkeit für Ca2+ und K+, kein Verschluss."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 8: Atmungssystem (bio-08-atmung) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-033",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Lungenvolumina & Vitalkapazität",
    difficulty: "foundational",
    stem: "Aus welchen Lungenvolumina setzt sich die spirometrisch messbare Vitalkapazität (VC) der menschlichen Lunge definitionsgemäß zusammen?",
    options: {
      A: "Atemzugvolumen (AZV) und Residualvolumen (RV)",
      B: "Inspiratorisches Reservevolumen (IRV) + Atemzugvolumen (AZV) + Exspiratorisches Reservevolumen (ERV)",
      C: "Totalkapazität (TLC) minus Atemzugvolumen (AZV)",
      D: "Funktionelle Residualkapazität (FRC) plus Inspirationskapazität (IC)",
      E: "Ausschließlich das exspiratorische Reservevolumen (ERV)"
    },
    correct_answer: "B",
    explanation_correct: "Die Vitalkapazität (VC) ist das maximale Luftvolumen, das nach maximaler Inspiration forciert oder langsam ausgeatmet werden kann. Sie setzt sich aus drei Einzelvolumina zusammen: Inspiratorisches Reservevolumen (IRV, ca. 2,5–3 l) + Atemzugvolumen (AZV, ca. 0,5 l) + Exspiratorisches Reservevolumen (ERV, ca. 1,2–1,5 l). Das Residualvolumen (RV, ca. 1,2 l) verbleibt nach maximaler Ausatmung in der Lunge und ist nicht Teil der Vitalkapazität.",
    explanations_incorrect: {
      A: "Das Residualvolumen (RV) kann bei normaler Spirometrie nicht ausgeatmet werden und gehört per definitionem nicht zur Vitalkapazität.",
      C: "Die Totalkapazität minus Atemzugvolumen ergibt IRV + ERV + RV, nicht die Vitalkapazität.",
      D: "FRC + IC ergibt die Totalkapazität (TLC), da FRC das Residualvolumen enthält.",
      E: "Das ERV ist nur eine von drei Teilkomponenten der Vitalkapazität."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-034",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Zentrale Atemregulation & Chemorezeptoren",
    difficulty: "intermediate",
    stem: "Welcher physiologische Parameter stellt unter normalen Ruhebedingungen beim gesunden Menschen den stärksten Reiz für das zentrale Atemzentrum in der Medulla oblongata dar?",
    options: {
      A: "Ein leichter Abfall des arteriellen Sauerstoffpartialdrucks (pO2) von 100 auf 90 mmHg",
      B: "Der osmotische Druck des Blutplasmas",
      C: "Der Füllungszustand des rechten Herzvorhofs",
      D: "Der Anstieg des arteriellen Kohlendioxidpartialdrucks (pCO2), der über die Bildung von H+-Ionen im Liquor cerebrospinalis die zentralen Chemorezeptoren stimuliert",
      E: "Die Hämoglobinkonzentration im Vollblut"
    },
    correct_answer: "D",
    explanation_correct: "Der wichtigste physiologische Atemantrieb ist der arterielle pCO2 (normokapnisch ca. 40 mmHg). CO2 ist lipophil und diffundiert ungehindert über die Blut-Hirn-Schranke in den Liquorraum. Dort hydratisiert es unter Katalyse der Carboanhydrase zu H2CO3, das in H+ und HCO3- dissoziiert. Die resultierende Liquorazidose (pH-Abfall) stimuliert die ventrolateralen zentralen Chemorezeptoren der Medulla oblongata direkt und steigert im physiologischen Bereich (arterieller pCO2 ca. 35 bis 55–60 mmHg) das Atemminutenvolumen näherungsweise linear. Bei extrem hohen pCO2-Werten über 70–80 mmHg kommt es hingegen zur CO2-Narkose mit paradoxer Atemdepression.",
    explanations_incorrect: {
      A: "Die peripheren Glomera carotica reagieren erst bei einem drastischen pO2-Abfall unter ca. 60 mmHg ('hypoxischer Atemantrieb'). Ein Rückgang von 100 auf 90 mmHg hat keinen Einfluss.",
      B: "Die Plasmaosmolarität steuert über Osmorezeptoren im Hypothalamus die ADH-Sekretion und den Durst, nicht die zentrale Ventilation.",
      C: "Vorhofdehnung beeinflusst Herzfrequenz und ANP-Sekretion, steuert aber nicht den primären Atemantrieb.",
      E: "Die Hämoglobinkonzentration bestimmt die O2-Kapazität des Blutes, erregt aber keine Chemorezeptoren im Hirnstamm."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-035",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Alveolokapilläre Diffusionsbarriere",
    difficulty: "intermediate",
    stem: "Welche anatomischen Schichten muss ein Sauerstoffmolekül (O2) beim alveolokapillären Gasaustausch in der menschlichen Lunge auf dem Weg von der Alveolarluft in das Innere eines Erythrozyten sequenziell durchqueren?",
    options: {
      A: "Flimmerepithel mit Becherzellen -> Knorpelmatrix -> glatte Muskelzellschicht -> Podozytenschlitz",
      B: "Bronchialschleim -> Lamina propria -> elastische Tunica media der Aorta -> Perikardflüssigkeit",
      C: "Pleurablatt viszerale -> Pleuraspalt -> Pleurablatt parietale -> Zwerchfellsehne",
      D: "Pleuraflüssigkeit -> Perizytenmembran -> Kupffer-Zellwand -> Sinusoidendothel",
      E: "Surfactant-Schicht -> Pneumozyt Typ I (Alveolarepithel) -> verschmolzene Basalmembran -> Kapillarendothelzelle -> Blutplasma -> Erythrozytenmembran"
    },
    correct_answer: "E",
    explanation_correct: "Die Blut-Luft-Schranke ist mit ca. 0,2–0,6 µm extrem dünn, um eine rasche passive Diffusion nach dem Fick'schen Diffusionsgesetz zu gewährleisten. Ein O2-Molekül passiert nacheinander: 1. Surfactant-Film, 2. Alveolarepithel (dünner Zytoplasmaausläufer eines Pneumozyten Typ I), 3. verschmolzene basale Lamina (aus Epithel- und Endothelbasalmembran), 4. Kapillarendothel, 5. dünne Schicht Blutplasma und 6. die Membran des Erythrozyten zur Bindung an Desoxyhämoglobin.",
    explanations_incorrect: {
      A: "Flimmerepithel, Knorpel und glatte Muskulatur liegen in den luftleitenden Atemwegen (Trachea/Bronchien), wo kein Gasaustausch stattfindet; Podozyten liegen in der Niere.",
      B: "Dies sind Schichten der großen Bronchien und der Aorta, nicht der respiratorischen Alveolarwand.",
      C: "Die Pleurablätter kleiden die Pleurahöhle aus und trennen Lunge von der Thoraxwand, haben aber keinen Anteil am mikrovaskulären Gasaustausch.",
      D: "Kupffer-Zellen und Lebersinusoide liegen in der Leber, nicht in der Alveolarwand."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-036",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Euler-Liljestrand-Mechanismus",
    difficulty: "advanced",
    stem: "Wie reagieren die präkapillären Arteriolen des pulmonalen Kreislaufs auf einen lokalen Abfall des alveolären Sauerstoffpartialdrucks (alveoläre Hypoxie), und welches physiologische Ziel verfolgt dieser Euler-Liljestrand-Mechanismus?",
    options: {
      A: "Sie dilatieren massiv, um den Blutfluss in das sauerstoffarme Areal zu verdoppeln.",
      B: "Sie verschließen sich dauerhaft durch Thrombenbildung, um das Lungengewebe zur Nekrose zu bringen.",
      C: "Sie kontrahieren (hypoxische pulmonale Vasokonstriktion), um das sauerstoffarme Areal zu drosseln und das Blut in besser belüftete Lungenbereiche umzuleiten (Optimierung des Ventilations-Perfusions-Verhältnisses).",
      D: "Sie erhöhen die Durchlässigkeit für neutrophile Granulozyten zur Induktion einer Lungenentzündung.",
      E: "Sie schütten große Mengen Stickstoffmonoxid (NO) aus, um den pulmonalen Gesamtwiderstand auf null zu senken."
    },
    correct_answer: "C",
    explanation_correct: "Der Euler-Liljestrand-Reflex (hypoxische pulmonale Vasokonstriktion, HPV) ist eine funktionelle Eigenheit des Lungenkreislaufs, die dem Verhalten im Systemkreislauf diametral entgegengesetzt ist: Während Minderperfusion im Körpergewebe zur Vasodilatation führt, bewirkt ein lokaler Abfall des alveolären pO2 in den Lungenarteriolen eine Vasokonstriktion. Dadurch wird das Blut an minderbelüfteten (hypoventilierten) Alveolen vorbeigeleitet und bevorzugt gut belüfteten Alveolen zugeführt. Dies minimiert funktionelle Shuntbildungen und optimiert das Ventilations-Perfusions-Verhältnis (V/Q).",
    explanations_incorrect: {
      A: "Vasodilatation bei Hypoxie tritt im Systemkreislauf auf (z. B. Gehirn, Skelettmuskel), im Lungenkreislauf würde dies zu massivem Shuntblut mit Hypoxämie führen.",
      B: "Der Mechanismus ist eine funktionelle, vollkommen reversible Vasomotorik und keine pathologische Thrombosierung.",
      D: "Es handelt sich um eine hämodynamische Regulation des Blutflusses, nicht um eine Entzündungsreaktion.",
      E: "Endogenes NO wirkt vasodilatatorisch; beim Euler-Liljestrand-Mechanismus dominiert die Vasokonstriktion (u. a. durch Hemmung von K+-Kanälen in glatten Gefäßmuskelzellen)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 9: Nervensystem (bio-09-nervensystem) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP3-037",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Gliazellen & Myelinisierung",
    difficulty: "foundational",
    stem: "Welche Aussage beschreibt den Unterschied zwischen den myelinisierenden Gliazellen des zentralen (ZNS) und des peripheren Nervensystems (PNS) des Menschen korrekt?",
    options: {
      A: "Im ZNS bildet ein einzelner Oligodendrozyt Myelinscheiden für Abschnitte mehrerer verschiedener Axone, während im PNS eine Schwann-Zelle jeweils genau ein Internodium eines einzelnen Axons myelinisiert.",
      B: "Schwann-Zellen kommen ausschließlich im Gehirn vor, während Oligodendrozyten die motorischen Spinalnerven umhüllen.",
      C: "Oligodendrozyten sind mesenchymale Phagozyten, während Schwann-Zellen zu den Astrozyten gehören.",
      D: "Myelinisierte Axone leiten Aktionspotenziale kontinuierlich und langsamer als unmyelinisierte Fasern.",
      E: "Schwann-Zellen bilden keine Ranvier-Schnürringe aus, da ihre Myelinscheide lückenlos vom Zellsoma bis zur Synapse reicht."
    },
    correct_answer: "A",
    explanation_correct: "Im ZNS bilden Oligodendrozyten (Gliazellen ektodermalen/neuroepithelialen Ursprungs) mit mehreren Zellausläufern Myelinscheiden für bis zu 30–50 benachbarte Axone. Im PNS übernimmt dies die Schwann-Zelle: Jede Schwann-Zelle wickelt sich mehrfach um einen einzigen Axonabschnitt und bildet genau ein Internodium aus. Zwischen den Schwann-Zellen bzw. Oligodendrozyten-Abschnitten liegen unmyelinisierte Ranvier-Schnürringe für die saltatorische Erregungsleitung.",
    explanations_incorrect: {
      B: "Genau umgekehrt: Oligodendrozyten gehören zum ZNS (Gehirn, Rückenmark); Schwann-Zellen bilden das Myelin im PNS (periphere Nerven).",
      C: "Mesenchymale Phagozyten des ZNS sind die Mikrogliazellen; Oligodendrozyten und Schwann-Zellen sind neuroektodermale Glia.",
      D: "Myelinisierte Axone nutzen die saltatorische Erregungsleitung und leiten bis zu 100-mal schneller als unmyelinisierte Fasern.",
      E: "Auch im PNS sind Ranvier-Schnürringe essentiell; ohne Unterbrechungen wäre keine saltatorische Reizweiterleitung möglich."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-038",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Monosynaptischer Dehnungsreflex",
    difficulty: "advanced",
    stem: "Welche neuronale Verschaltung charakterisiert den physiologischen Ablauf des Patellarsehnenreflexes (monosynaptischer Eigenreflex) im menschlichen Rückenmark?",
    options: {
      A: "Reizung von freien Schmerzrezeptoren -> Weiterleitung über marklose C-Fasern -> polysynaptische Umschaltung über 5 Interneurone -> Kontraktion des M. biceps femoris",
      B: "Erregung der Golgi-Sehnenorgane über Ib-Afferenzen -> direkte Erregung des antagonistischen Beugemuskels ohne Beteiligung des Quadriceps",
      C: "Aktivierung von Kälterezeptoren der Haut -> efferente Leitung über vegetative postganglionäre Fasern zur Schweißdrüsenkontraktion",
      D: "Aktivierung der Netzhautzellen -> Weiterleitung über das Tectum opticum -> direkte efferente Kontraktion der Kniebeuger",
      E: "Schlag auf die Sehne dehnt die Muskelspindeln des M. quadriceps femoris -> Ia-Afferenzen leiten Aktionspotenziale über die Hinterwurzel in das Rückenmark -> direkte monosynaptische exzitatorische Umschaltung auf Alpha-Motoneurone im Vorderhorn -> Kontraktion des M. quadriceps femoris bei gleichzeitiger reziproker Hemmung des Beugers über ein inhibitorisches Ia-Interneuron"
    },
    correct_answer: "E",
    explanation_correct: "Der Patellarsehnenreflex (L3/L4) ist der Prototyp des monosynaptischen Eigenreflexes: Der mechanische Schlag dehnt den M. quadriceps femoris und dessen intrafusale Muskelspindeln. Stark myelinisierte Ia-Afferenzen leiten die Aktionspotenziale über das Spinalganglion und die Hinterwurzel in das Rückenmark. Dort ziehen die Fasern direkt in das Vorderhorn und bilden monosynaptisch eine direkte exzitatorische Synapse auf Alpha-Motoneurone desselben Muskels, was zur raschen Streckung im Kniegelenk führt. Gleichzeitig erregt eine Kollateralabzweigung ein hemmendes Ia-Interneuron (reziproke Hemmung), welches die Motoneurone des antagonistischen Kniebeugers hemmt.",
    explanations_incorrect: {
      A: "Freie Nervenendigungen und C-Fasern vermitteln nozizeptive Fremdreflexe (z. B. Flucht- oder Beugereflex), die typischerweise polysynaptisch sind.",
      B: "Golgi-Sehnenorgane messen Spannung über Ib-Fasern und vermitteln den inversen Dehnungsreflex (autogene Hemmung zum Schutz vor Sehnenriss).",
      C: "Kälterezeptoren vermitteln Thermoregulation, keine propriozeptiven Sehnenreflexe.",
      D: "Visuelle Bahnen steuern Blick- und Orientierungsbewegungen, keine segmentalen Rückenmarksreflexe der Beine."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-039",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Blut-Hirn-Schranke & Astrozyten",
    difficulty: "intermediate",
    stem: "Welche anatomisch-funktionelle Barriere bildet das primäre Diffusionshindernis der menschlichen Blut-Hirn-Schranke für hydrophile Makromoleküle?",
    options: {
      A: "Die dicke Myelinscheide der postganglionären sympathischen Nervenfasern",
      B: "Eine geschlossene Schicht aus zilientragenden Ependymzellen des Zentralkanals",
      C: "Das kontinuierliche, nicht-fenestrierte Kapillarendothel des Gehirns, dessen Zellen durch Tight Junctions (Zonulae occludentes mit Claudinen und Occludin) die parazelluläre Diffusion stark einschränken",
      D: "Ein dichtes Netzwerk aus elastischen Fasern in der gefäßreichen Pia mater",
      E: "Die Basalmembran der peripheren Schwann-Zellen"
    },
    correct_answer: "C",
    explanation_correct: "Die Blut-Hirn-Schranke (BHS) wird primär von den spezialisierten Endothelzellen der Gehirnkapillaren gebildet: Sie sind ungesenstert (nicht-fenestriert) und weisen eine minimale Transzytoserate auf. Kontinuierliche Tight Junctions (Zonula occludens aus Claudin-3, Claudin-5 und Occludin) schränken den parazellulären Durchtritt von Ionen und polaren Makromolekülen stark ein. Polare Nährstoffe benötigen spezifische Carrier (z. B. GLUT1). Perizyten und Astrozyten-Endfüße induzieren und modulieren diese Barriereeigenschaften.",
    explanations_incorrect: {
      A: "Myelinscheiden isolieren Axone elektrisch, bilden aber keine Barriere an Gehirnkapillaren.",
      B: "Ependymzellen kleiden die Hirnventrikel aus und trennen Liquor vom Hirnparenchym; sie bilden die Blut-Liquor-Schranke im Plexus choroideus, nicht die BHS der Hirnkapillaren.",
      D: "Die Pia mater ist eine gefäßführende weiche Hirnhaut, bildet aber nicht das spezifische Dichtigkeitshindernis der kapillären Blut-Hirn-Schranke.",
      E: "Schwann-Zellen kommen ausschließlich im peripheren Nervensystem vor und haben keinen Kontakt zu zentralen Gehirngefäßen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  },
  {
    id: "BIO-BMS-GP3-040",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Synaptische Summation & Axonhügel",
    difficulty: "advanced",
    stem: "Wie unterscheiden sich räumliche (spatiotemporale) und zeitliche Summation postsynaptischer Potenziale an einem multipolaren Neuron des menschlichen ZNS?",
    options: {
      A: "Räumliche Summation findet nur an Axonen statt; zeitliche Summation tritt ausschließlich in Dendriten auf.",
      B: "Bei zeitlicher Summation müssen mindestens zehn verschiedene hemmende Synapsen gleichzeitig aktiviert werden; räumliche Summation benötigt nur eine Synapse.",
      C: "Räumliche Summation löst immer direkt ein Aktionspotenzial aus, während zeitliche Summation ausschließlich inhibitorische Effekte (IPSPs) erzeugt.",
      D: "Bei der räumlichen Summation werden mehrere erregende postsynaptische Potenziale (EPSPs), die zeitgleich an räumlich getrennten Synapsen einlaufen, am Axonhügel addiert; bei der zeitlichen Summation summieren sich schnell aufeinanderfolgende EPSPs einer einzelnen Synapse.",
      E: "Räumliche Summation erfordert den Einstrom von Kaliumionen, während zeitliche Summation durch den Ausstrom von Natriumionen gesteuert wird."
    },
    correct_answer: "D",
    explanation_correct: "Dendriten integrieren elektrische Signale elektrotonisch: Räumliche Summation tritt auf, wenn mehrere Synapsen an unterschiedlichen Stellen des Dendritenbaums annähernd zeitgleich depolarisieren; ihre Ströme breiten sich entlang der Membran aus (bestimmt durch die Längskonstante λ) und addieren sich am Axonhügel. Zeitliche Summation liegt vor, wenn eine einzelne Synapse in hoher Frequenz feuert; da das EPSP langsamer abklingt als das Intervall zwischen den Reizen (bestimmt durch die Membranzeitkonstante τ), stufen sich die Potenziale treppenförmig auf, bis das Schwellenpotenzial (ca. -50 mV) zur Öffnung der spannungsabhängigen Na+-Kanäle erreicht wird.",
    explanations_incorrect: {
      A: "Beide Summationsarten finden an Dendriten und am Zellsoma (Soma) statt, nicht primär am leitenden Axon.",
      B: "Zeitliche Summation betrifft typischerweise eine einzelne Synapse mit hochfrequenter Impulsfolge, keine zehn verschiedenen Synapsen.",
      C: "Sowohl räumliche als auch zeitliche Summation können sowohl mit EPSPs als auch mit IPSPs ablaufen; keine von beiden garantiert automatisch ein Aktionspotenzial.",
      E: "Depolarisierende EPSPs werden durch Einstrom von Na+ (oder Ca2+) vermittelt; K+-Ausstrom führt zur Hyperpolarisation (Repolarisation/IPSP)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "3.0_gp3"
    }
  }
];

function mapChapterId(primaryTopic: string, subtopic: string): string {
  switch (primaryTopic) {
    case "Human Cell Biology":
      return "bio-01-zelle";
    case "Human Body: Histology, Anatomy and Physiology":
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
 * Normalisierte 40 StoredQuestion-Objekte für die MedAT-H Generalprobe #3 Runtime-Engine
 */
export const GENERALPROBE_3_BIO_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_BIO_QUESTIONS.map(
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
      tags: ["BMS", "Biologie", "Generalprobe #3", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "3.0_gp3",
      setOrder: idx + 1,
    };
  }
);
