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
  // Kapitel 1: Die menschliche Zelle (bio-01-zelle) - 6 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-001",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Lysosomen & saure Hydrolasen",
    difficulty: "foundational",
    stem: "Welche Aussage beschreibt das physiologische Milieu und die Funktion von Lysosomen in menschlichen Zellen zutreffend?",
    options: {
      A: "Lysosomen halten durch eine basolaterale Na+/K+-ATPase einen alkalischen pH-Wert von ca. 8,5 aufrecht, um sekretorische Proteine zu falten.",
      B: "Die lysosomalen Enzyme besitzen ihr Aktivitätsoptimum bei neutralem pH-Wert (pH 7,2–7,4) des Zytosols, um den unkontrollierten Abbau zellulärer Strukturen zu beschleunigen.",
      C: "Lysosomen enthalten saure Hydrolasen mit einem pH-Optimum von ca. 4,5–5,0, welches durch eine ATP-abhängige Protonenpumpe (V-Typ-H+-ATPase) in der Membran aufrechterhalten wird.",
      D: "Lysosomen sind von einer Doppelmembran umgeben und synthetisieren Proteine für den Export an zelleigenen 70S-Ribosomen.",
      E: "Lysosomen sind der primäre Bildungsort von Steroidhormonen und Phospholipiden für die Plasmamembran."
    },
    correct_answer: "C",
    explanation_correct: "Lysosomen sind einfache membranumhüllte Organellen, die als enzymatischer Verdauungsapparat der Zelle fungieren. Sie enthalten über 40 verschiedene saure Hydrolasen (u. a. Proteasen, Nukleasen, Lipasen, Glykosidasen), deren katalytisches pH-Optimum im sauren Bereich bei ca. pH 4,5–5,0 liegt. Dieses saure Milieu wird aktiv durch eine vakuoläre H+-ATPase (V-Typ-Protonenpumpe) erzeugt, die unter ATP-Hydrolyse Protonen aus dem Zytosol in das Lysosomenlumen pumpt. Dieses Prinzip dient als intrazelluläre Schutzbarriere: Sollte ein Lysosom rupturieren, sind die Enzyme im neutralen Zytosol (pH ca. 7,2) kaum aktiv.",
    explanations_incorrect: {
      A: "Lysosomen sind sauer (pH 4,5–5,0) und nicht alkalisch; die Na+/K+-ATPase liegt in der Plasmamembran, nicht primär in der Lysosomenmembran.",
      B: "Das pH-Optimum liegt im sauren Milieu; bei neutralem zytosolischem pH sind lysosomale Enzyme weitgehend inaktiv, um die Zelle vor Autolyse zu schützen.",
      D: "Lysosomen besitzen eine einfache Biomembran (keine Doppelmembran wie Mitochondrien oder Zellkern) und enthalten weder eigene Ribosomen noch Translation.",
      E: "Die Synthese von Lipiden und Steroidhormonen ist die Hauptfunktion des glatten Endoplasmatischen Retikulums (SER), nicht der Lysosomen."
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
    difficulty: "foundational",
    stem: "Welche Aussage zur Struktur von Mikrotubuli und dem intrazellulären Transport entlang dieser Filamente ist korrekt?",
    options: {
      A: "Mikrotubuli bestehen aus alpha- und beta-Tubulin-Heterodimeren; Kinesine transportieren zelluläre Fracht typischerweise anterograd in Richtung des Plus-Endes.",
      B: "Mikrotubuli bestehen aus polymerisiertem G-Aktin und nutzen Myosin-V für den retrograden Transport zum Zellkern.",
      C: "Dynein ist ein Motorprotein, das Vesikel entlang von Mikrotubuli ausschließlich in Richtung des peripheren Plus-Endes befördert.",
      D: "Mikrotubuli sind unpolare Proteinfäden ohne strukturelle Ausrichtung, an denen Organellen ausschließlich durch ungerichtete Brownsche Molekularbewegung diffundieren.",
      E: "Das Mikrotubuli-Organisationszentrum (MTOC/Zentrosom) verankert die Plus-Enden der Mikrotubuli im Zellzentrum nahe dem Zellkern."
    },
    correct_answer: "A",
    explanation_correct: "Mikrotubuli sind röhrenförmige Zytoskelettelemente mit einem Außendurchmesser von ca. 25 nm, aufgebaut aus 13 Protofilamenten aus alpha- und beta-Tubulin-Heterodimeren. Sie besitzen eine ausgeprägte Polarität: Das Minus-Ende ist am Zentrosom (MTOC) verankert, während das dynamischere Plus-Ende in die Zellperipherie ragt. Der ATP-getriebene vesikuläre Transport erfolgt gerichtet über spezialisierte Motorproteine: Kinesine bewegen sich vorwiegend anterograd zum Plus-Ende (peripheriewärts), während zytoplasmatisches Dynein retrograd zum Minus-Ende (zentrosomwärts) wandert.",
    explanations_incorrect: {
      B: "G-Aktin polymerisiert zu filamentösem Aktin (Mikrofilamente); Myosine sind Aktin-Motorproteine und interagieren nicht mit Mikrotubuli.",
      C: "Dynein ist ein Minus-End-gerichtetes Motorprotein; es transportiert retrograd zum Zentrosom, nicht zum Plus-Ende.",
      D: "Mikrotubuli besitzen eine strikte Polarität (Plus- und Minus-Ende) und dienen als gerichtete Leitschienen für Motorproteine.",
      E: "Das Zentrosom verankert die Minus-Enden der Mikrotubuli; die wachsenden Plus-Enden weisen nach außen zur Peripherie."
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
    subtopic: "Membrantransport & sekundär aktiver Symport",
    difficulty: "intermediate",
    stem: "Wie gelangt D-Glucose über die apikale Membran von Enterozyten im Dünndarm bzw. Tubulusepithelzellen der Niere gegen ihren Konzentrationsgradienten in das Zytosol?",
    options: {
      A: "Durch direkte enzymatische Phosphorylierung am Transportprotein unter stöchiometrischer Hydrolyse von ATP am apikalen Transporter.",
      B: "Über einfache passive Diffusion durch die hydrophobe Lipidschicht, begünstigt durch die hohe Konzentration von Gallensalzen.",
      C: "Durch einen sekundär aktiven Antiport, bei dem der Einstrom von Kaliumionen den Austritt von Glucose erzwingt.",
      D: "Über einen sekundär aktiven Symport (SGLT), der die Triebkraft des elektrochemischen Natriumgradienten nutzt, welcher primär durch die basolaterale Na+/K+-ATPase erzeugt wird.",
      E: "Über den passiven Uniporter GLUT2, der Glucose ausschließlich gegen einen steilen Gradienten in die Zelle schleust."
    },
    correct_answer: "D",
    explanation_correct: "Die zelluläre Aufnahme von Glucose gegen einen steilen chemischen Gradienten an der luminalen/apikalen Membran von Dünndarm-Enterozyten (SGLT1) und proximalen Tubuluszellen der Niere (SGLT2) erfolgt über sekundär aktiven Na+/Glucose-Symport. Der apikale Cotransporter koppelt den thermodynamisch bergab gerichteten Einstrom von Natriumionen (entlang des steilen elektrischen und chemischen Gradienten) an den Transport von Glucose gegen ihren Konzentrationsgradienten in die Zelle. Die Aufrechterhaltung des intrazellulär niedrigen Na+-Spiegels erfordert die primär aktive, ATP-spaltende Na+/K+-ATPase an der basolateralen Membran.",
    explanations_incorrect: {
      A: "SGLT spaltet selbst kein ATP; der Transport ist sekundär aktiv und nutzt die im Na+-Gradienten gespeicherte Energie.",
      B: "Glucose ist ein polares, hydrophiles Molekül und kann die hydrophobe Membrankerndoppelphase praktisch nicht per einfacher Diffusion überwinden.",
      C: "Es handelt sich um einen Symport von Na+ und Glucose (beide Moleküle bewegen sich in die gleiche Richtung ins Zytosol), keinen Antiport mit Kalium.",
      E: "GLUT2 ist ein Carrier für erleichterte (passive) Diffusion an der basolateralen Membran, der Glucose dem Konzentrationsgefälle folgend ins Blut abgibt."
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
    subtopic: "Zellzyklus: Restriktionspunkt & pRb/E2F-Achse",
    difficulty: "intermediate",
    stem: "Welcher molekulare Kontrollmechanismus steuert den Übergang von der G1-Phase in die S-Phase (Passieren des Restriktionspunkts) im humanen Zellzyklus?",
    options: {
      A: "Hypophosphoryliertes pRb bindet an p53 und führt zum sofortigen proteasomalen Abbau von Cyclin E.",
      B: "Cyclin-D/CDK4/6- und Cyclin-E/CDK2-Komplexe phosphorylieren das Retinoblastom-Protein (pRb), wodurch der Transkriptionsfaktor E2F freigesetzt wird und S-Phase-Gene aktiviert.",
      C: "Der Anaphase-Promoting Complex (APC/C) degradiert Securin, wodurch Separase die Aktivierung der DNA-Polymerase delta bewirkt.",
      D: "Dephosphoryliertes pRb wandert in die Mitochondrien und stimuliert die Expression von Cytochrom c zur Initiierung der DNA-Synthese.",
      E: "p21 bindet direkt an E2F und schleust dieses als Dimer in den Zellkern ein, um die Histonacetylierung zu stoppen."
    },
    correct_answer: "B",
    explanation_correct: "Am G1/S-Übergang (Restriktionspunkt) wird die Entscheidung zur DNA-Replikation und Zellteilung getroffen. Im unproliferierenden Zustand (G0 bzw. frühe G1) ist das Tumorsuppressorprotein pRb (Retinoblastom-Protein) hypo- bzw. unphosphoryliert und bindet fest an den Transkriptionsfaktor E2F, wodurch dessen Aktivität inhibiert wird. Nach mitogener Stimulation assemblieren Cyclin D mit CDK4/CDK6 sowie Cyclin E mit CDK2. Diese Kinasen phosphorylieren pRb mehrfach (Hyperphosphorylierung). Das phosphorylierte pRb verliert seine Bindungsaffinität zu E2F; das freigesetzte E2F wandert an Promotoren und induziert die Transkription von Genen, die für den S-Phase-Eintritt erforderlich sind (u. a. Cyclin E, DNA-Polymerasen, Thymidinkinase).",
    explanations_incorrect: {
      A: "Hypophosphoryliertes pRb bindet an E2F, nicht an p53, und Cyclin E wird für die S-Phase benötigt, nicht abgebaut.",
      C: "Der APC/C-Securin-Separase-Weg steuert den Übergang von der Metaphase zur Anaphase in der Mitose, nicht den G1/S-Übergang.",
      D: "pRb ist ein nukleäres Protein und wirkt als Transkriptionsregulator im Zellkern; Cytochrom c gehört zur Apoptose/Atmungskette.",
      E: "p21 ist ein CDK-Inhibitor (CKI), der CDK-Cyclin-Komplexe hemmt und den Zellzyklus arretiert; er aktiviert E2F nicht."
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
    subtopic: "Mitose: Spindelkontrollpunkt & Chromatidentrennung",
    difficulty: "intermediate",
    stem: "Welcher biochemische Prozess leitet während der mitotischen Zellteilung die Trennung der Schwesterchromatiden am Übergang von der Metaphase zur Anaphase ein?",
    options: {
      A: "Die DNA-Ligase I spaltet die Zentromere durch Hydrolyse kovalenter Phosphodiesterbindungen.",
      B: "Kinetochor-Mikrotubuli depolymerisieren vollständig an ihren Minus-Enden, bevor kinetochoräre Zugspannung aufgebaut wird.",
      C: "Die RNA-Polymerase II transkribiert Zentromer-spezifische Histone, die die Schwesterchromatiden elektrostatisch abstoßen.",
      D: "Telomerase verlängert die Chromosomenenden, wodurch Kinetochor-Proteine autokatalytisch inaktiviert werden.",
      E: "Nach korrekter bipolarer Anheftung aller Kinetochore an Spindelfasern aktiviert der APC/C den Abbau von Securin, woraufhin die aktive Protease Separase den Cohesin-Komplex spaltet."
    },
    correct_answer: "E",
    explanation_correct: "Der Spindelkontrollpunkt (Spindle Assembly Checkpoint, SAC) stellt sicher, dass die Anaphase erst beginnt, wenn alle Chromosomen über ihre Kinetochore amphitelisch (bipolar) mit Kinetochor-Mikrotubuli verbunden sind und unter mechanischer Spannung in der Äquatorialebene stehen. Ist dies erfüllt, wird der zellzyklusspezifische Ubiquitin-Ligase-Komplex APC/C (Anaphase-Promoting Complex/Cyclosome) aktiviert. Der APC/C markiert das Inhibitorprotein Securin für den proteasomalen Abbau. Die dadurch enthemmte Protease Separase spaltet die Scc1/Rad21-Untereinheit des Cohesin-Rings, der die Schwesterchromatiden am Zentromer zusammenhält. Die Kinetochor-Mikrotubuli können nun die getrennten Ein-Chromatid-Chromosomen zu den entgegengesetzten Spindelpolen ziehen.",
    explanations_incorrect: {
      A: "DNA-Ligasen verknüpfen DNA-Stränge und spalten keine Zentromere; die Trennung erfolgt durch proteolytische Spaltung von Cohesin.",
      B: "Die Depolymerisation erfolgt primär am Plus-Ende am Kinetochor während der Anaphase A, und Spannung ist die Voraussetzung für die Anaphase, nicht deren Folge.",
      C: "Transkription ruht während der Mitose weitgehend; Chromatidentrennung ist ein proteolytischer, kein transkriptioneller Vorgang.",
      D: "Telomerase ist während der Mitose nicht an der Kinetochor-Regulation beteiligt; Kinetochore binden Cohesin und Spindelfasern."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-006",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Meiose: Chromosomen- und Chromatidensätze",
    difficulty: "advanced",
    stem: "Eine menschliche Zelle durchläuft die Meiose. Welche Kombination aus Ploidiegrad (n), Chromosomenzahl und Chromatidenzustand liegt in einer gesunden Tochterzelle unmittelbar nach Abschluss der ersten meiotischen Teilung (Telophase I vor Beginn der Interkinese) vor?",
    options: {
      A: "Diploid (2n) mit 46 Ein-Chromatid-Chromosomen (DNA-Gehalt 2C)",
      B: "Haploid (1n) mit 23 Zwei-Chromatiden-Chromosomen (DNA-Gehalt 2C)",
      C: "Haploid (1n) mit 23 Ein-Chromatid-Chromosomen (DNA-Gehalt 1C)",
      D: "Diploid (2n) mit 46 Zwei-Chromatiden-Chromosomen (DNA-Gehalt 4C)",
      E: "Tetraploid (4n) mit 92 Chromatiden (DNA-Gehalt 4C)"
    },
    correct_answer: "B",
    explanation_correct: "Die Meiose I ist die sogenannte Reduktionsteilung. Vor Beginn der Meiose I verdoppelt die Keimbahnzelle in der S-Phase ihre DNA, sodass eine primäre Spermatozyte bzw. Oozyte diploid mit 46 Zwei-Chromatiden-Chromosomen (2n, 4C) vorliegt. In der Anaphase I werden die homologen Chromosomenpaare getrennt und auf zwei Tochterkerne verteilt. Nach Abschluss der Telophase I besitzt jede Tochterzelle daher einen haploiden Chromosomensatz mit n = 23 Chromosomen. Da jedes Chromosom zu diesem Zeitpunkt jedoch noch aus zwei Schwesterchromatiden besteht, beträgt der DNA-Gehalt 2C (entsprechend 46 Chromatiden pro Zelle). Erst in der Meiose II (Äquationsteilung) werden die Schwesterchromatiden getrennt, sodass schließlich Keimzellen mit 1n, 1C (23 Ein-Chromatid-Chromosomen) resultieren.",
    explanations_incorrect: {
      A: "2n mit 46 Ein-Chromatid-Chromosomen entspricht einer somatischen Zelle in der G1-Phase nach einer Mitose.",
      C: "1n mit 23 Ein-Chromatid-Chromosomen (1C) liegt erst nach Abschluss der Meiose II in reifen Gameten vor.",
      D: "2n mit 46 Zwei-Chromatiden-Chromosomen (4C) liegt vor Beginn der Meiose I (in G2/Prophase I) vor.",
      E: "Eine tetraploide Phase mit 4n existiert im regulären meiotischen Zyklus des Menschen nicht."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Der menschliche Körper (bio-02-koerper) - 7 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-007",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Knochengewebe: Osteoblasten, Osteozyten & Osteoklasten",
    difficulty: "foundational",
    stem: "Welche Aussage zur zellulären Organisation und zum Umbau des menschlichen Knochengewebes trifft zu?",
    options: {
      A: "Osteoklasten entstehen durch Differenzierung lokaler Chondrozyten und synthetisieren die organische Knochenmatrix (Osteoid).",
      B: "Osteoblasten sind mehrkernige Riesenzellen des hämatopoetischen Systems, die Knochensubstanz durch Salzsäuresekretion abbauen.",
      C: "Reifer Lamellenknochen ist im Gegensatz zu Knorpelgewebe vollkommen frei von Blutgefäßen und Nervenfasern.",
      D: "Osteoblasten synthetisieren Kollagen Typ I und Proteoglykane des Osteoids; eingemauerte Osteoblasten differenzieren zu ruhenden, über Canaliculi vernetzten Osteozyten.",
      E: "Osteozyten teilen sich im mineralisierten Knochen kontinuierlich mitotisch, um mechanische Mikrorisse sofort durch Zellvermehrung zu schließen."
    },
    correct_answer: "D",
    explanation_correct: "Knochengewebe unterliegt einem lebenslangen Umbau (Remodeling). Osteoblasten (mesenchymalen Ursprungs) synthetisieren die organische Knochenmatrix (Osteoid, vor allem Kollagen Typ I und nicht-kollagene Proteine) und initiieren die Mineralisation mit Calcium-Hydroxylapatit. Werden Osteoblasten von mineralisierter Matrix umgeben, differenzieren sie zu metabolisch ruhenden Osteozyten. Diese liegen in Knochenhöhlen (Lakunen) und kommunizieren über feine Zytoplasmafortsätze in Canaliculi mittels Gap Junctions zur Mechanosensorik. Der Knochenabbau erfolgt durch Osteoklasten, vielkernige Fusionszellen aus der Monozyten/Makrophagen-Linie.",
    explanations_incorrect: {
      A: "Osteoklasten bauen Knochen ab und stammen von hämatopoetischen Stammzellen (Makrophagenlinie) ab, nicht von Chondrozyten.",
      B: "Die Beschreibung trifft auf Osteoklasten zu; Osteoblasten sind einkernig und bauen Knochen auf.",
      C: "Knochengewebe ist im Gegensatz zu bradytrophem, gefäßfreiem Knorpelgewebe stark durchblutet (Havers- und Volkmann-Kanäle).",
      E: "Osteozyten sind postmitotisch und teilen sich in mineralisierter Knochensubstanz nicht mehr mitotisch."
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
    subtopic: "Magenschleimhaut: Belegzellen & Salzsäurebildung",
    difficulty: "intermediate",
    stem: "Welche Zellart der Magenschleimhaut sezerniert Salzsäure (HCl) sowie den Intrinsic Factor, und welche Funktion hat Letzterer?",
    options: {
      A: "Die Belegzellen (Parietalzellen); der Intrinsic Factor ist für die spätere enterale Resorption von Vitamin B12 im terminalen Ileum zwingend erforderlich.",
      B: "Die Hauptzellen; der Intrinsic Factor spaltet Polysaccharide im Duodenum enzymatisch in Disaccharide.",
      C: "Die Nebenzellen; der Intrinsic Factor dient als alkalischer Schleimfilm zum Schutz vor Selbstverdauung der Mukosa.",
      D: "Die D-Zellen; der Intrinsic Factor stimuliert die Freisetzung von Gastrin aus den benachbarten G-Zellen.",
      E: "Die enterochromaffin-ähnlichen (ECL) Zellen; der Intrinsic Factor aktiviert Pepsinogen direkt zu Pepsin."
    },
    correct_answer: "A",
    explanation_correct: "Die Magendrüsen des Korpus und Fundus besitzen eine funktionell spezialisierte Zellausstattung: Die Belegzellen (Parietalzellen) sezernieren aktiv Salzsäure (HCl) über eine apikale H+/K+-ATPase, was zu einem stark sauren Magensaft (pH 1–2) führt, der Nahrungsproteine denaturiert, Bakterien abtötet und Pepsinogen aktiviert. Gleichzeitig bilden die Belegzellen das Glykoprotein Intrinsic Factor (IF). IF bindet im Dünndarm Cobalamin (Vitamin B12) und schützt es vor enzymatischer Spaltung. Der IF-B12-Komplex wird schließlich im terminalen Ileum über spezifische Rezeptoren (Cubilin/Amnionless) per Endozytose resorbiert. Ein Mangel an Belegzellen (z. B. atrophische Gastritis) führt zu perniziöser Anämie.",
    explanations_incorrect: {
      B: "Hauptzellen sezernieren Pepsinogen (eine Zymogen-Vorstufe von Pepsin), aber weder Salzsäure noch Intrinsic Factor.",
      C: "Nebenzellen produzieren Muzine (Schleim) und Bicarbonat zur Bildung der protektiven Schleimhautbarriere.",
      D: "D-Zellen sezernieren Somatostatin, das hemmend auf die Säure- und Gastrinsekretion wirkt.",
      E: "ECL-Zellen sezernieren Histamin zur parakrinen Stimulation der Belegzellen; Pepsinogen wird durch den niedrigen pH-Wert aktiviert."
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
    subtopic: "Exokrines Pankreas & proteolytische Kaskade",
    difficulty: "intermediate",
    stem: "Wie wird verhindert, dass die vom exokrinen Pankreas synthetisierten proteolytischen Verdauungsenzyme das Pankreasgewebe vorzeitig selbst verdauen?",
    options: {
      A: "Proteasen werden im Pankreasgang durch die hohe Konzentration von Magensalzsäure sofort irreversibel inaktiviert.",
      B: "Das Pankreas bildet ausschließlich aktive Monomere, die erst durch Bindung an Gallensäuren im Colon funktionstüchtig werden.",
      C: "Proteasen werden als inaktive Vorstufen (Zymogene) sezerniert; erst im Duodenum spaltet die Bürstensaum-Enteropeptidase Trypsinogen zu Trypsin, welches dann die übrigen Zymogene kaskadenartig aktiviert.",
      D: "Die Langerhans-Inseln sezernieren kontinuierlich Glukagon in die Pankreasgänge, welches Proteasen kompetitiv blockiert.",
      E: "Pankreaszellen besitzen keine Ribosomen und importieren fertige Proteasen erst bei der Passage durch das Mesenterium."
    },
    correct_answer: "C",
    explanation_correct: "Um eine lebensbedrohliche Autodigestion (akute Pankreatitis) zu verhindern, synthetisieren die Azinuszellen des exokrinen Pankreas Proteasen als inaktive Enzymvorstufen (Zymogene: z. B. Trypsinogen, Chymotrypsinogen, Proelastase, Procarboxypeptidasen) und verpacken sie zusammen mit Trypsin-Inhibitoren (SPINK1) in Zymogengranula. Erst nach Sekretion in das Duodenum trifft Trypsinogen auf das an der luminalen Enterozytenmembran verankerte Enzym Enteropeptidase (früher Enterokinase). Enteropeptidase spaltet ein kurzes N-terminales Peptid von Trypsinogen ab, wodurch aktives Trypsin entsteht. Trypsin spaltet anschließend autokatalytisch weiteres Trypsinogen und aktiviert kaskadenartig Chymotrypsinogen, Proelastase und Procarboxypeptidasen.",
    explanations_incorrect: {
      A: "Pankreassaft ist reich an Bicarbonat (pH ca. 8) zur Neutralisierung der Magensäure; saure Magensäure gelangt nicht in den Pankreasgang.",
      B: "Gallensäuren emulgieren Lipide im Dünndarm und aktivieren keine Proteasen im Dickdarm.",
      D: "Glukagon ist ein Hormon der alpha-Zellen der Inseln und wird endokrin ins Blut abgegeben, nicht in die Pankreasgänge.",
      E: "Azinuszellen besitzen ein stark ausgeprägtes raues ER mit dichter Ribosomenbesetzung zur massiven Proteinsynthese."
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
    subtopic: "Nierenphysiologie: Henle-Schleife & Gegenstromsystem",
    difficulty: "advanced",
    stem: "Welche Aussage beschreibt die Permeabilitätseigenschaften der Henle-Schleife und die Generierung des osmotischen Konzentrationsgradienten im Nierenmark physikochemisch korrekt?",
    options: {
      A: "Der dicke aufsteigende Schenkel der Henle-Schleife ist hochgradig wasserdurchlässig und resorbiert Wasser passiv ohne Ionenverschiebung.",
      B: "Der dünne absteigende Schenkel pumpt aktiv Natrium- und Chloridionen über Na+/K+-ATPasen in das Nierenmark, ist aber für Wasser völlig undurchlässig.",
      C: "Im proximalen Tubulus wird überhaupt kein Wasser resorbiert, sodass die gesamte Volumenregulation ausschließlich in der Henle-Schleife stattfindet.",
      D: "Die Henle-Schleife verläuft ausschließlich in der Nierenrinde und erzeugt dort durch Kaliumsekretion einen hyperosmolaren Urin.",
      E: "Der dünne absteigende Schenkel ist wasserpermeabel (Aquaporin-1), während der dicke aufsteigende Schenkel wasserundurchlässig ist und aktiv Na+, K+ und 2 Cl- (über NKCC2) ins Interstitium transportiert."
    },
    correct_answer: "E",
    explanation_correct: "Das Gegenstrommultiplikationssystem der Henle-Schleife beruht auf unterschiedlichen Permeabilitäten der Schleifenschenkel: Der dünne absteigende Schenkel weist eine hohe Wasserpermeabilität auf (konstitutive Aquaporin-1-Kanäle), besitzt aber kaum Ionenkanäle oder aktive Transporter. Aufgrund der hohen Osmolarität des Nierenmark-Interstitiums strömt Wasser passiv osmotisch aus dem Tubuluslumen ins Gewebe, wodurch die Tubulusflüssigkeit zur Schleifenspitze hin hyperosmolar wird (bis zu 1.200 mosmol/l). Der dicke aufsteigende Schenkel (TAL) hingegen ist für Wasser funktionell undurchlässig, transportiert aber über den apikalen Na+-K+-2Cl--Kotransporter (NKCC2) aktiv Ionen in das peritubuläre Interstitium. Dadurch wird das Mark hyperosmolar gehalten und der Tubulusharn verdünnt (hypoosmolarer Harn am Übergang zum distalen Tubulus).",
    explanations_incorrect: {
      A: "Der aufsteigende dicke Schenkel ist wasserundurchlässig; Wasserresorption ohne Ionen erfolgt im absteigenden Schenkel.",
      B: "Der absteigende Schenkel transportiert Ionen nicht primär aktiv; er lässt Wasser passiv austreten.",
      C: "Im proximalen Tubulus werden ca. zwei Drittel (ca. 65 %) des filtrierten Wassers und Natriums obligat isoosmotisch rückresorbiert.",
      D: "Die Henle-Schleifen (insbesondere der juxtamedullären Nephrone) ziehen tief in das Nierenmark hinab und liegen nicht nur in der Rinde."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-011",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Glomeruläre Filtration & Primärharn",
    difficulty: "foundational",
    stem: "Welche Aussage zur glomerulären Filtrationsbarriere der menschlichen Niere und zur Zusammensetzung des Primärharns ist korrekt?",
    options: {
      A: "Gesunde Glomeruli filtrieren sämtliche Blutzellen und Plasmaproteine wie Albumin ungehindert in den Primärharn.",
      B: "Die Filtrationsbarriere besteht aus gefenstertem Kapillarendothel, negativ geladener Basalmembran und Podozyten-Schlitzmembranen; der Primärharn ist weitgehend protein- und zellfrei.",
      C: "Im Primärharn liegt die Konzentration gelöster Glucose physiologisch zehnmal höher als im Blutplasma.",
      D: "Ein gesunder Erwachsener bildet unter Ruhebedingungen täglich etwa 1,5 Liter Primärharn in den Nierenkörperchen.",
      E: "Die glomeruläre Filtration wird primär durch den hohen hydrostatischen Druck in der Bowman-Kapsel angetrieben, der den Blutdruck übersteigt."
    },
    correct_answer: "B",
    explanation_correct: "Die glomeruläre Filtrationsbarriere im Nierenkörperchen (Malpighi-Körperchen) besteht aus drei funktionellen Schichten: 1. dem fenestrierten Kapillarendothel, 2. der dreischichtigen glomerulären Basalmembran (reich an negativ geladenem Heparansulfat) und 3. den Podozytenfortsätzen mit ihren Schlitzmembranen (Nephrin/Podocin). Diese Barriere wirkt als kombiniertes Größen- und Ladungsfilter: Moleküle mit einem effektiven Radius > 4 nm sowie negativ geladene Makromoleküle (wie Serumalbumin, 66 kDa) werden elektrostatisch und sterisch zurückgehalten. Der resultierende Primärharn (ca. 180 Liter/Tag beim gesunden Erwachsenen) ist ein protein- und zellarmes Ultrafiltrat des Blutplasmas mit nahezu identischen Konzentrationen an niedermolekularen Substanzen (Glucose, Ionen, Harnstoff).",
    explanations_incorrect: {
      A: "Erythrozyten, Leukozyten und Plasmaproteine werden zurückgehalten; ihr Auftreten im Harn (Hämaturie/Proteinurie) ist pathologisch.",
      C: "Die Glucosekonzentration im Primärharn entspricht exakt der im Plasma (ca. 5 mmol/l bzw. 90–100 mg/dl); sie wird nicht aktiv angereichert.",
      D: "1,5 Liter entspricht der täglichen Endharnausscheidung; die Primärharnmenge beträgt etwa 180 Liter pro Tag.",
      E: "Der effektive Filtrationsdruck wird durch den hydrostatischen Kapillardruck (ca. 50 mmHg) angetrieben, der dem Bowman-Kapseldruck (ca. 12 mmHg) und dem onkotischen Plasmadruck (ca. 25 mmHg) entgegenwirkt."
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
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Angeborene Immunität: Natürliche Killerzellen & Missing-Self",
    difficulty: "intermediate",
    stem: "Über welchen Mechanismus erkennen und eliminieren Natürliche Killerzellen (NK-Zellen) virusinfizierte Zellen oder Tumorzellen gemäß der „Missing-Self“-Hypothese?",
    options: {
      A: "NK-Zellen binden über ihren T-Zell-Rezeptor spezifisch an MHC-Klasse-II-Komplexe und induzieren Phagozytose.",
      B: "NK-Zellen erkennen ausschließlich antikörperbeladene Bakterienkapseln und lysieren diese mittels Lysozym.",
      C: "NK-Zellen exprimieren Immunglobulin M auf ihrer Membran und bilden nach Kontakt mit Antigenen langlebige Plasmazellen.",
      D: "NK-Zellen werden durch hohe MHC-Klasse-I-Spiegel auf gesunden Körperzellen zur maximalen Degranulation von Perforin angeregt.",
      E: "Inhibitorische Rezeptoren auf NK-Zellen binden an körpereigene MHC-Klasse-I-Moleküle; fehlt diese MHC-I-Expression auf veränderten Zellen, entfällt die Hemmung und die Zelle wird durch Perforine und Granzyme lysiert."
    },
    correct_answer: "E",
    explanation_correct: "Natürliche Killerzellen (NK-Zellen) gehören zum angeborenen Immunsystem und sind auf das Erkennen entarteter oder virusinfizierter körpereigener Zellen spezialisiert. Ihre Aktivität wird durch das dynamische Gleichgewicht aktivierender und inhibitorischer Rezeptoren gesteuert: Gesunde kernhaltige Körperzellen exprimieren konstitutiv MHC-Klasse-I-Moleküle. Inhibitorische Rezeptoren der NK-Zellen (z. B. KIR-Rezeptoren oder CD94/NKG2A) erkennen intakte MHC-I-Moleküle und senden dominante intrazelluläre Hemmsignale. Viele Viren oder Tumoren unterdrücken die MHC-I-Präsentation ('Downregulation'), um zytotoxischen T-Zellen zu entkommen. Auf solchen Zellen fehlt das inhibitorische Signal ('Missing Self'): Überwiegen die aktivierenden Signale, schüttet die NK-Zelle Perforin (Porenbildung in der Membran) und Granzyme (Induktion von Caspasen und Apoptose) in den synaptischen Spalt aus.",
    explanations_incorrect: {
      A: "NK-Zellen besitzen weder T-Zell-Rezeptoren (TCR) noch binden sie primär zur Abtötung an MHC-Klasse II.",
      B: "Die Zerstörung von Bakterien per Phagozytose ist Aufgabe von Granulozyten und Makrophagen; Lysozym ist ein Enzym der Tränen/des Speichels.",
      C: "NK-Zellen produzieren keine Antikörper und differenzieren nicht zu Plasmazellen; dies ist die Funktion von B-Lymphozyten.",
      D: "Hohe MHC-Klasse-I-Spiegel hemmen NK-Zellen; sie verhindern die Degranulation gesunder Zellen."
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
    subtopic: "Adaptive Immunität: MHC-Klassen & T-Zell-Aktivierung",
    difficulty: "intermediate",
    stem: "Welche Aussage charakterisiert die funktionelle Differenzierung zwischen MHC-Klasse-I- und MHC-Klasse-II-Molekülen zutreffend?",
    options: {
      A: "MHC-Klasse-I-Moleküle kommen ausschließlich auf professionellen Antigen-präsentierenden Zellen vor und binden extrazelluläre Polysaccharide.",
      B: "MHC-Klasse-II-Komplexe präsentieren intrazellulär im Zytosol synthetisierte Virusfragmente spezifisch an CD8+-zytotoxische T-Zellen.",
      C: "Reife menschliche Erythrozyten tragen die höchste Dichte an MHC-Klasse-I-Molekülen aller Blutzellen im Kreislauf.",
      D: "MHC-Klasse-I-Moleküle befinden sich auf allen kernhaltigen Zellen und präsentieren endogene Peptide an CD8+-T-Zellen; MHC-Klasse-II-Moleküle befinden sich primär auf professionellen APCs und präsentieren exogene Peptide an CD4+-T-Zellen.",
      E: "MHC-Klasse I und II sind lösliche Serumantikörper, die von unreifen B-Zellen zur Komplementaktivierung sezerniert werden."
    },
    correct_answer: "D",
    explanation_correct: "MHC-Moleküle (Major Histocompatibility Complex, beim Menschen HLA) sind membrangebundene Glykoproteine zur Antigenpräsentation: MHC-Klasse-I-Moleküle (HLA-A, -B, -C) werden konstitutiv auf nahezu allen kernhaltigen Körperzellen sowie Thrombozyten exprimiert. Sie präsentieren kurze endogene Peptide (8–10 Aminosäuren aus dem Proteasom/Zytosol) an CD8+-zytotoxische T-Zellen (CTLs). MHC-Klasse-II-Moleküle (HLA-DP, -DQ, -DR) finden sich physiologisch primär auf 'professionellen' antigenpräsentierenden Zellen (APCs: dendritische Zellen, Makrophagen, B-Lymphozyten). Sie präsentieren längere, endozytierte exogene Peptidfragmente (12–25 Aminosäuren aus dem Endolysosomensystem) an CD4+-T-Helferzellen. Reife Erythrozyten besitzen keinen Zellkern und exprimieren keine MHC-I-Moleküle.",
    explanations_incorrect: {
      A: "MHC-I kommt auf allen kernhaltigen Zellen vor und bindet Peptidfragmente, keine reinen Polysaccharide.",
      B: "Zytosolische Virusfragmente werden über MHC-Klasse I an CD8+-T-Zellen präsentiert, nicht über MHC-Klasse II.",
      C: "Reife menschliche Erythrozyten sind kernlos und tragen weder MHC-Klasse-I- noch MHC-Klasse-II-Moleküle.",
      E: "MHC-Moleküle sind integrale Membranrezeptoren und keine freien Immunglobuline/Antikörper."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Frühentwicklung des Menschen (bio-03-fruehentwicklung) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-014",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Gametogenese: Spermatogenese vs. Oogenese",
    difficulty: "foundational",
    stem: "In welchem wesentlichen Punkt unterscheiden sich die meiotischen Teilungen der humanen Spermatogenese und Oogenese?",
    options: {
      A: "Aus einer primären Spermatozyte entstehen nach Abschluss der Meiose vier funktionelle Spermien, während aus einer primären Oozyte durch asymmetrische Zytokinesen nur eine Eizelle und Polkörperchen hervorgehen.",
      B: "Die Spermatogenese wird vor der Geburt im Stadium der Prophase I arretiert, während die Oogenese erst ab der Pubertät einsetzt.",
      C: "Die Oogenese liefert pro primäre Oozyte vier identisch große, voll befruchtungsfähige Gameten mit jeweils 46 Chromosomen.",
      D: "Spermien vollenden ihre Meiose II erst nach erfolgreicher Penetration der Eizellmembran im Uterus.",
      E: "In der Oogenese findet im Gegensatz zur Spermatogenese kein Crossing-over in der Prophase I statt."
    },
    correct_answer: "A",
    explanation_correct: "Die humane Gametogenese weist fundamentale Unterschiede in Zeitverlauf und Zytokinese auf: Bei der Spermatogenese (beginnend in der Pubertät in den Tubuli seminiferi der Hoden) teilt sich das Zytoplasma symmetrisch, sodass aus einer diploiden primären Spermatozyte nach Meiose I und II vier gleichwertige, haploide Spermatiden hervorgehen, die zu Geißelspermien differenzieren. Bei der Oogenese (beginnt pränatal im Fetalstadium) teilt sich das Zytoplasma in beiden Reifeteilungen extrem asymmetrisch: Es entsteht jeweils eine große Zelle, die nahezu das gesamte Zytoplasma und alle Zellorganellen (v. a. Mitochondrien) behält, sowie winzige Polkörperchen (Polzyten), die zugrunde gehen. Das Ergebnis ist eine einzige reife Eizelle (Ovum) pro primäre Oozyte.",
    explanations_incorrect: {
      B: "Die Oogenese wird pränatal im Diktyotän (Prophase I) arretiert; die Spermatogenese beginnt erst mit der Pubertät kontinuierlich neu.",
      C: "Die Oogenese bildet nur eine funktionelle Eizelle und drei Polkörperchen; die Gameten sind haploid (23 Chromosomen).",
      D: "Spermien haben ihre meiotischen Teilungen bereits im Hoden vor der Ejakulation vollständig abgeschlossen; die Oozyte vollendet Meiose II bei Befruchtung.",
      E: "Crossing-over (Pachytän der Prophase I) findet in beiden Keimbahnen regulär statt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-015",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Befruchtung & Corticale Reaktion / Polyspermieblock",
    difficulty: "intermediate",
    stem: "Welcher zellbiologische Mechanismus verhindert bei der humanen Befruchtung das Eindringen weiterer Spermien in die Eizelle (Verhinderung der Polyspermie)?",
    options: {
      A: "Die Eizelle bildet innerhalb von Sekundenbruchteilen eine mineralisierte Kalkschale um die Plasmamembran aus.",
      B: "Das Spermium setzt nach der Fusion sofort Säure frei, die alle benachbarten Samenzellen im Eileiter lysiert.",
      C: "Ein spermieninduzierter intrazellulärer Ca2+-Anstieg in der Eizelle führt zur Exozytose der Rindenkörner (Corticalgranula), deren Enzyme die Zona pellucida verhärten und modifizieren (Zona-Reaktion).",
      D: "Die Zona pellucida wird durch Akrosin vollständig aufgelöst, sodass keine weiteren Bindungsstellen für Spermien existieren.",
      E: "Die Eizelle schrumpft sofort auf die Hälfte ihres Volumens, wodurch die perivitelline Membran für Ionen undurchlässig wird."
    },
    correct_answer: "C",
    explanation_correct: "Um eine letale Polyploidie durch Mehrfachbefruchtung (Polyspermie) zu verhindern, besitzt die Eizelle Abwehrmechanismen: Nach Fusion der Membranen von Spermium und Eizelle wird über Phospholipase C-zeta eine Signalkaskade ausgelöst, die zu repetitiven intrazellulären Ca2+-Wellen im Eizellzytosol führt. Dies triggert die Exozytose submembranöser Rindenkörnchen (Corticalgranula) in den perivitellinen Spalt (Corticale Reaktion). Die freigesetzten Enzyme (Proteasen wie Ovastacin, Peroxidasen, Glykosidasen) spalten und vernetzen Proteine der Zona pellucida (Zona-Reaktion). ZP2 und ZP3 werden so modifiziert, dass überzählige Spermien weder anheften noch die Zona pellucida weiter penetrieren können (permanenter langsamer Block gegen Polyspermie). Gleichzeitig vollendet die Eizelle die Meiose II.",
    explanations_incorrect: {
      A: "Säugetiereizellen bilden keine mineralisierten Kalkschalen (dies existiert bei Vögeln im Uterus nach der Befruchtung).",
      B: "Das Spermium lysiert keine konkurrierenden Spermien durch Säurefreisetzung.",
      D: "Die Zona pellucida bleibt bis zur Implantation erhalten und wird nicht aufgelöst; ihre Struktur wird verhärtet.",
      E: "Eine Volumenhalbierung der Eizelle findet nicht statt und ist kein Mechanismus des Polyspermieblocks."
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
    subtopic: "Blastozyste: Trophoblast vs. Embryoblast",
    difficulty: "intermediate",
    stem: "Welche Aussage beschreibt den Aufbau der Blastozyste und die frühe Implantation (Nidation) in das Endometrium zutreffend?",
    options: {
      A: "Der Trophoblast bildet die drei embryonalen Keimblätter, während der Embryoblast ausschließlich zur mütterlichen Dezidua wird.",
      B: "Die Implantation erfolgt unmittelbar nach der Befruchtung innerhalb von 12 Stunden im mittleren Drittel der Tuba uterina.",
      C: "Die Blastozyste nistet sich bereits am Tag 2 nach der Befruchtung unter vollständiger Erhaltung der Zona pellucida ein.",
      D: "Der Embryoblast differenziert in Synzytiotrophoblast und Zytotrophoblast, um invasiv in uterine Blutgefäße einzuwachsen.",
      E: "Die Blastozyste schlüpft vor der Nidation aus der Zona pellucida; der äußere Trophoblast bildet Anteile der Plazenta, während der innere Embryoblast den eigentlichen Embryo bildet."
    },
    correct_answer: "E",
    explanation_correct: "Am Tag 5–6 nach der Befruchtung erreicht der Keim als Blastozyste das Cavum uteri. Die Blastozyste besteht aus einer flüssigkeitsgefüllten Blastozystenhöhle, einer äußeren Hüllschicht (Trophoblast) und einer inneren Zellmasse an einem Pol (Embryoblast). Bevor die Anheftung und Implantation an das Endometrium am Tag 6–7 beginnen kann, muss die Blastozyste durch enzymatische Lyse aus der schützenden Zona pellucida 'schlüpfen' (Hatching). Der Trophoblast differenziert bei der Implantation in den Synzytiotrophoblasten (sezerniert hCG, invasives Wachstum) und Zytotrophoblasten und liefert die embryonalen Anteile von Plazenta und Chorion. Der Embryoblast liefert den gesamten eigentlichen Embryo (über Epiblast und Hypoblast zu den drei Keimblättern) sowie Amnion und Dottersack.",
    explanations_incorrect: {
      A: "Der Trophoblast bildet Plazentaanteile, nicht die Keimblätter; der Embryoblast bildet den Embryo, nicht die mütterliche Dezidua.",
      B: "Die Implantation im Eileiter ist eine pathologische Eileiterschwangerschaft (Extrauteringravidität); regulär nistet sich die Blastozyste an Tag 6–7 im Uterus ein.",
      C: "Die Blastozyste muss vor der Einnistung zwingend aus der Zona pellucida schlüpfen (Hatching an Tag 5–6).",
      D: "Synzytio- und Zytotrophoblast entstehen aus dem Trophoblasten, nicht aus dem Embryoblasten."
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
    subtopic: "Gastrulation & Keimblattderivate",
    difficulty: "advanced",
    stem: "Welche Zuordnung zwischen den drei primären embryonalen Keimblättern und ihren definitiven Organderivaten beim Menschen ist anatomisch korrekt?",
    options: {
      A: "Ektoderm: Zentralnervensystem und Epidermis; Mesoderm: Herz-Kreislauf-System, Skelettmuskulatur und Nieren; Entoderm: Epithel des Gastrointestinal- und Respirationstrakts.",
      B: "Ektoderm: Nieren und Nebennierenrinde; Mesoderm: Epithel der Alveolen und Leber; Entoderm: Skelettmuskulatur und Zahnschmelz.",
      C: "Ektoderm: Skelettknochen und Knorpelgewebe; Mesoderm: Gehirn und Retina; Entoderm: Milz und Blutkörperchen.",
      D: "Ektoderm: Pankreasparenchym und Schilddrüsenfollikel; Mesoderm: Epidermis der Haut; Entoderm: Peripheres Nervensystem.",
      E: "Ektoderm: Herzmuskelgewebe; Mesoderm: Zahnschmelz und Cornea; Entoderm: Nebennierenmark und Knorpel."
    },
    correct_answer: "A",
    explanation_correct: "Während der Gastrulation (3. Entwicklungswoche) entstehen aus dem Epiblasten die drei definitiven Keimblätter mit ihren spezifischen Organderivaten: 1. Ektoderm (Oberflächen- und Neuroektoderm): ZNS (Gehirn, Rückenmark), PNS, Sinnesepithelien von Auge und Innenohr, Epidermis der Haut mit Haaren/Nägeln, Zahnschmelz, Nebennierenmark. 2. Mesoderm (paraxiales, intermediäres, Seitenplattenmesoderm): Knorpel, Knochen, Binde- und Stützgewebe, Skelettmuskulatur, Herz-Kreislauf-System (Herz, Blutgefäße, Blutzellen), Nieren, Ureteren, innere Genitalorgane, Nebennierenrinde, Milz. 3. Entoderm: Epithelauskleidung des gesamten Gastrointestinaltrakts (vom Pharynx bis zum Rektum), Epithelauskleidung des Respirationstrakts (Trachea, Bronchien, Alveolarauskleidung), Parenchym der Verdauungsdrüsen (Leber, Pankreas) sowie Schilddrüse, Nebenschilddrüsen und Auskleidung der Harnblase.",
    explanations_incorrect: {
      B: "Nieren und Nebennierenrinde sind mesodermal; Leber und Alveolarepithel sind entodermal; Skelettmuskel ist mesodermal, Zahnschmelz ektodermal.",
      C: "Knochen sind mesodermal; Gehirn und Retina sind ektodermal (Neuroektoderm); Milz und Blutzellen sind mesodermal.",
      D: "Pankreas und Schilddrüse sind entodermal; Epidermis ist ektodermal; PNS entsteht aus ektodermalen Neuralleistenzellen.",
      E: "Herzmuskel ist mesodermal; Zahnschmelz ist ektodermal; Nebennierenmark entsteht aus ektodermalen Neuralleistenzellen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Genetik (bio-04-genetik) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-018",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Mendelsche Regeln: Dihybrider Erbgang",
    difficulty: "foundational",
    stem: "Welches phänotypische Spaltungsverhältnis resultiert in der F2-Generation bei einer dihybriden Kreuzung reinerbiger Eltern (AABB × aabb) mit vollständiger Dominanz beider Merkmale und ungekoppelter autosomaler Vererbung?",
    options: {
      A: "3 : 1",
      B: "9 : 3 : 3 : 1",
      C: "1 : 2 : 1",
      D: "1 : 1 : 1 : 1",
      E: "12 : 3 : 1"
    },
    correct_answer: "B",
    explanation_correct: "Gemäß der 3. Mendelschen Regel (Unabhängigkeitsregel / freie Rekombination) werden zwei Merkmale unabhängig voneinander vererbt, wenn die zugrunde liegenden Gene auf verschiedenen Chromosomen (oder weit voneinander entfernt auf demselben Chromosom) liegen. Bei einer Kreuzung P: AABB × aabb ist die F1-Generation uniform heterozygot (AaBb, 1. Mendelsche Regel). Werden die F1-Individuen untereinander gekreuzt (AaBb × AaBb), bildet jedes Elternteil vier Gametensorten in gleichen Anteilen (1/4 AB, 1/4 Ab, 1/4 aB, 1/4 ab). Im 16-Felder-Punnett-Quadrat ergibt sich bei vollständiger Dominanz das klassische phänotypische Spaltungsverhältnis von 9 : 3 : 3 : 1 (9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb).",
    explanations_incorrect: {
      A: "3 : 1 ist das monohybride phänotypische Spaltungsverhältnis der F2-Generation bei dominant-rezessivem Erbgang.",
      C: "1 : 2 : 1 ist das genotypische Spaltungsverhältnis eines monohybriden Erbgangs (1 AA : 2 Aa : 1 aa) bzw. das phänotypische bei intermediärem Erbgang.",
      D: "1 : 1 : 1 : 1 entsteht bei einer dihybriden Testkreuzung / Rückkreuzung eines heterozygoten Individuums (AaBb × aabb).",
      E: "12 : 3 : 1 tritt bei dominanter Epistasie auf, nicht bei unabhängiger Spaltung ohne Geninteraktion."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-019",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Autosomal-rezessive Vererbung & Wiederholungsrisiko",
    difficulty: "intermediate",
    stem: "Zwei phänotypisch gesunde Eltern haben bereits ein gemeinsames Kind mit Zystischer Fibrose (Mukoviszidose, autosomal-rezessiv vererbt). Mit welcher Wahrscheinlichkeit ist ein weiteres Kind dieses Paares phänotypisch gesund, aber heterozygoter Anlageträger (Konduktor)?",
    options: {
      A: "25 % (1/4)",
      B: "33,3 % (1/3)",
      C: "75 % (3/4)",
      D: "50 % (1/2)",
      E: "100 % (1/1)"
    },
    correct_answer: "D",
    explanation_correct: "Da das erste Kind an Zystischer Fibrose (autosomal-rezessiv, Genotyp aa) erkrankt ist, müssen beide phänotypisch gesunden Eltern zwingend heterozygot für das mutierte CFTR-Allel sein (Genotyp beider Eltern: Aa). Bei einer Kreuzung zweier Heterozygoter (Aa × Aa) ergeben sich für jedes nachfolgende Kind unabhängig voneinander folgende Genotypwahrscheinlichkeiten: 25 % AA (homozygot gesund), 50 % Aa (heterozygot gesund / Konduktor) und 25 % aa (homozygot erkrankt). Die Wahrscheinlichkeit, dass ein ungeborenes Kind dieses Paares phänotypisch gesund, aber heterozygoter Anlageträger (Aa) ist, beträgt somit genau 50 % (1/2). (Hinweis: Die Frage bezieht sich auf ein ungeborenes Kind vor Phänotypfeststellung. Unter der Bedingung, dass ein Kind bereits als gesund bekannt ist, wäre die Wahrscheinlichkeit 2/3).",
    explanations_incorrect: {
      A: "25 % ist die Wahrscheinlichkeit für ein homozygot gesundes Kind (AA) bzw. für ein erkranktes Kind (aa).",
      B: "33,3 % (1/3) ist die Wahrscheinlichkeit, dass ein gesundes Kind homozygot gesund (AA) ist.",
      C: "75 % ist die Gesamtwahrscheinlichkeit für ein phänotypisch gesundes Kind (AA + Aa zusammen).",
      E: "100 % träfe nur zu, wenn ein Elternteil homozygot krank (aa) und der andere homozygot gesund (AA) wäre."
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
    subtopic: "X-chromosomal-rezessive Vererbung: Hämophilie A",
    difficulty: "intermediate",
    stem: "Ein Mann mit Hämophilie A (X-chromosomal-rezessiv) zeugt Kinder mit einer genetisch gesunden, nicht heterozygoten Frau. Welche Aussage über die Nachkommen dieses Paares ist genetisch zutreffend?",
    options: {
      A: "50 % der Söhne und 50 % der Töchter sind klinisch an Hämophilie A erkrankt.",
      B: "Alle Söhne dieses Vaters erben das mutierte Allel und sind Bluter, während Töchter völlig frei von Mutationen sind.",
      C: "Alle Töchter sind obligate heterozygote Konduktorinnen (Anlageträgerinnen), während alle Söhne gesund und frei vom mutierten Allel sind.",
      D: "Da Hämophilie dominant über das Y-Chromosom vererbt wird, erkranken 100 % der Nachkommen beiderlei Geschlechts.",
      E: "Keines der Kinder erbt das mutierte X-Chromosom, da der Vater bei der Befruchtung nur Y-Chromosomen abgibt."
    },
    correct_answer: "C",
    explanation_correct: "Bei der X-chromosomal-rezessiven Vererbung besitzt der betroffene Vater den Genotyp X^h Y, während die homozygot gesunde Mutter den Genotyp X^H X^H trägt. Der Vater gibt an alle Söhne zwingend sein Y-Chromosom ab; die Söhne erhalten ihr X-Chromosom ausschließlich von der Mutter (X^H Y). Daher sind 100 % der Söhne phänotypisch gesund und tragen das mutierte Allel nicht. An alle Töchter gibt der Vater zwingend sein einziges X-Chromosom mit dem mutierten Allel (X^h) ab. Die Töchter erhalten vom Vater X^h und von der Mutter X^H (Genotyp: X^H X^h). Da das gesunde Allel X^H dominant ist, sind alle Töchter phänotypisch gesund, aber obligate Konduktorinnen (Überträgerinnen).",
    explanations_incorrect: {
      A: "Söhne können das mutierte Allel vom Vater nicht erben; Töchter sind durch das gesunde mütterliche X-Chromosom phänotypisch geschützt.",
      B: "Väter vererben ihr X-Chromosom niemals an Söhne, sondern ausschließlich an Töchter.",
      D: "Hämophilie A liegt auf dem X-Chromosom (Faktor-VIII-Gen), nicht auf dem Y-Chromosom, und wird rezessiv vererbt.",
      E: "Spermien tragen entweder ein X- oder ein Y-Chromosom; bei der Entstehung von Töchtern wird immer das X-Chromosom übertragen."
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
    subtopic: "AB0- und Rhesus-System: Vererbungsmuster",
    difficulty: "intermediate",
    stem: "Eine Mutter hat die Blutgruppe A (Rh-negativ) und der leibliche Vater hat die Blutgruppe B (Rh-negativ). Ihr erstes Kind hat die Blutgruppe 0 (Rh-negativ). Welche weiteren Blutgruppen können künftige Kinder dieses Paares im AB0-System mit welcher Wahrscheinlichkeit haben?",
    options: {
      A: "Ausschließlich Blutgruppe 0 zu 100 %, da das rezessive Allel nun fixiert ist.",
      B: "Ausschließlich Blutgruppe AB zu 100 %, da A und B dominant über 0 sind.",
      C: "Nur Blutgruppe A zu 50 % oder Blutgruppe B zu 50 %, Blutgruppe 0 kann nicht mehr auftreten.",
      D: "Blutgruppe AB zu 50 % und Blutgruppe 0 zu 50 %; A und B sind unmöglich.",
      E: "Alle vier Blutgruppen (A, B, AB und 0) sind mit einer Wahrscheinlichkeit von jeweils genau 25 % möglich."
    },
    correct_answer: "E",
    explanation_correct: "Das Kind hat die Blutgruppe 0, was dem Genotyp 00 (ii) entspricht. Da jedes Kind jeweils ein Allel von jedem Elternteil erhält, muss sowohl die Mutter mit Phänotyp A als auch der Vater mit Phänotyp B Träger des rezessiven 0-Allels sein. Die Genotypen der Eltern sind somit eindeutig: Mutter = A0 (I^A i), Vater = B0 (I^B i). Bei der Kreuzung A0 × B0 entstehen vier gleich wahrscheinliche Genotypen bei den Nachkommen: 25 % AB (I^A I^B, Phänotyp AB), 25 % A0 (I^A i, Phänotyp A), 25 % B0 (I^B i, Phänotyp B) und 25 % 00 (ii, Phänotyp 0). Da beide Eltern Rh-negativ (dd) sind, sind alle Nachkommen ebenfalls rh-negativ (dd).",
    explanations_incorrect: {
      A: "Die Gametenbildung erfolgt bei jeder Konzeption unabhängig; die Allele A und B werden weiterhin mit je 50 % vererbt.",
      B: "Blutgruppe AB entsteht nur mit 25 % Wahrscheinlichkeit (I^A von Mutter und I^B von Vater).",
      C: "Blutgruppe 0 und AB treten mit jeweils 25 % Wahrscheinlichkeit auf.",
      D: "Die Genotypen A0 und B0 entstehen mit jeweils 25 % Wahrscheinlichkeit und führen zu den Phänotypen A und B."
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
    subtopic: "Chromosomenaberrationen: Turner- vs. Klinefelter-Syndrom",
    difficulty: "advanced",
    stem: "Welche Aussage charakterisiert die gonosomalen Chromosomenaberrationen Turner-Syndrom und Klinefelter-Syndrom aus zytogenetischer und phänotypischer Sicht korrekt?",
    options: {
      A: "Das Turner-Syndrom weist den Karyotyp 45,X auf (weiblicher Phänotyp, Ovardysgenesie, kein Barr-Körperchen); das Klinefelter-Syndrom weist den Karyotyp 47,XXY auf (männlicher Phänotyp, Hodenhypoplasie, Vorhandensein eines Barr-Körperchens).",
      B: "Das Turner-Syndrom beruht auf einer Trisomie des Chromosoms 21 (Karyotyp 47,XX,+21) und betrifft ausschließlich Männer.",
      C: "Patienten mit Klinefelter-Syndrom sind phänotypisch weiblich und besitzen zwei Y-Chromosomen (Karyotyp 48,XYY).",
      D: "Sowohl beim Turner- als auch beim Klinefelter-Syndrom handelt es sich um balancierte reziproke Translokationen zwischen Autosomen ohne Verlust von Erbmaterial.",
      E: "Frauen mit Turner-Syndrom besitzen zwei inaktivierte Barr-Körperchen in jeder somatischen Zelle."
    },
    correct_answer: "A",
    explanation_correct: "Gonosomale Aneuploidien entstehen meist durch Nondisjunktion während der elterlichen Meiose: Das Turner-Syndrom ist die einzige lebensfähige Monosomie beim Menschen mit dem Karyotyp 45,X (oder 45,X0). Betroffene Individuen sind phänotypisch weiblich (aufgrund des Fehlens des SRY-Gens auf dem Y-Chromosom); Leitsymptome sind Kleinwuchs, Pterygium colli, primäre Amenorrhö und bindegewebige 'Streak-Gonaden' (Infertilität). Da nur ein X-Chromosom vorliegt, findet keine X-Inaktivierung statt (kein Barr-Körperchen). Das Klinefelter-Syndrom weist den Karyotyp 47,XXY auf (gelegentlich 48,XXXY). Betroffene Individuen sind phänotypisch männlich (SRY vorhanden); Leitsymptome sind Hochwuchs, Hodenhypoplasie mit Azoospermie, Testosteronmangel und Gynäkomastie. Da zwei X-Chromosomen vorliegen, wird eines epigenetisch inaktiviert, sodass in Zellkernen ein Barr-Körperchen nachweisbar ist.",
    explanations_incorrect: {
      B: "Trisomie 21 ist das Down-Syndrom (eine Autosomenaberration), nicht das Turner-Syndrom.",
      C: "Patienten mit Klinefelter-Syndrom (47,XXY) sind phänotypisch männlich; 47,XYY ist das Diplo-Y-Syndrom.",
      D: "Es handelt sich um numerische Chromosomenaberrationen (Aneuploidien), nicht um balancierte Strukturumbauten.",
      E: "Frauen mit Turner-Syndrom (45,X) besitzen überhaupt kein Barr-Körperchen, da ihr einziges X-Chromosom aktiv bleibt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Molekulare Genetik (bio-05-molgen) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-023",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Struktur: Basenpaarung & Doppelhelix",
    difficulty: "foundational",
    stem: "Welche Aussage zur chemischen Struktur der B-DNA-Doppelhelix im menschlichen Zellkern ist korrekt?",
    options: {
      A: "Guanin paart mit Cytosin über zwei kovalente Disulfidbrücken im Zentrum der Doppelhelix.",
      B: "Die beiden komplementären Einzelstränge verlaufen parallel in identischer 5'→3'-Orientierung.",
      C: "Die stickstoffhaltigen Basen sind über Esterbindungen direkt an die Phosphatgruppen des Rückgrats gebunden.",
      D: "Adenin paart mit Thymin über zwei Wasserstoffbrücken, Guanin mit Cytosin über drei Wasserstoffbrücken; die Stränge verlaufen antiparallel.",
      E: "In nativer DNA ist die molare Menge an Guanin stets exakt identisch mit der molaren Menge an Thymin (Chargaff-Regel)."
    },
    correct_answer: "D",
    explanation_correct: "Die B-DNA-Doppelhelix nach Watson und Crick besteht aus zwei antiparallelen Polynukleotidsträngen (ein Strang verläuft in 5'→3'-Richtung, der Gegenstrang in 3'→5'-Richtung). Das hydrophile Rückgrat aus Desoxyribose und Phosphatresten (verknüpft über 3',5'-Phosphodiesterbindungen) liegt außen. Die hydrophoben Basen ragen nach innen und paaren komplementär über Wasserstoffbrücken: Das Purin Adenin paart spezifisch mit dem Pyrimidin Thymin über zwei Wasserstoffbrücken; das Purin Guanin paart mit dem Pyrimidin Cytosin über drei Wasserstoffbrücken. Daraus resultiert die Chargaff-Regel: A = T und G = C, sodass der Gehalt an Purinen (A + G) gleich dem Gehalt an Pyrimidinen (T + C) ist.",
    explanations_incorrect: {
      A: "Guanin und Cytosin paaren über drei nicht-kovalente Wasserstoffbrücken, nicht über Disulfidbrücken.",
      B: "Die Einzelstränge verlaufen streng antiparallel (gegenläufig).",
      C: "Die Basen sind über N-glykosidische Bindungen an das C1'-Atom der Desoxyribose gebunden; Phosphate verknüpfen C3' und C5'.",
      E: "Nach den Chargaff-Regeln ist G = C und A = T; G = T gilt im Allgemeinen nicht (nur wenn G-C und A-T zufällig exakt 25 % betragen)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-024",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Replikation: Leitstrang vs. Folgestrang",
    difficulty: "intermediate",
    stem: "Warum wird an der Replikationsgabel der Leitstrang kontinuierlich, der Folgestrang jedoch diskontinuierlich (in Okazaki-Fragmenten) synthetisiert?",
    options: {
      A: "Weil die DNA-Helicase nur den Leitstrang entwenden kann, während der Folgestrang durch RNA-Polymerasen zerschnitten wird.",
      B: "Weil DNA-Polymerasen Nukleotide ausschließlich an ein freies 3'-OH-Ende anhängen können (Syntheserichtung nur 5'→3'), die beiden Matrizenstränge an der Gabel jedoch gegenläufig orientiert sind.",
      C: "Weil für den Folgestrang keine Desoxyribonukleosidtriphosphate (dNTPs) zur Verfügung stehen, sondern Ribonukleotide verwendet werden müssen.",
      D: "Weil Topoisomerasen die Synthese des Folgestrangs alle 200 Basenpaare durch Doppelstrangbrüche stoppen.",
      E: "Weil der Folgestrang keinen RNA-Primer benötigt und daher langsamer polymerisiert."
    },
    correct_answer: "B",
    explanation_correct: "Alle zellulären DNA-Polymerasen besitzen eine fundamentale biochemische Restriktion: Sie können neue DNA-Ketten ausschließlich in 5'→3'-Richtung verlängern, indem sie die 5'-Phosphatgruppe des eintretenden dNTPs kovalent an die freie 3'-OH-Gruppe des vorherigen Nukleotids knüpfen. Da die beiden elterlichen Stränge antiparallel verlaufen, bewegt sich die Replikationsgabel an einem Strang (Leitstrangmatrize, 3'→5') in Syntheserichtung (5'→3'), sodass die DNA-Polymerase kontinuierlich hinter der Helicase herwandern kann. Am Folgestrangmatrizenstrang (5'→3') läuft die Synthese entgegen der Wanderungsrichtung der Gabel. Daher muss die Primase wiederholt neue RNA-Primer setzen, von denen aus die DNA-Polymerase delta kurze Stücke (Okazaki-Fragmente, ca. 100–200 Nukleotide bei Eukaryoten) synthetisiert. Diese werden anschließend durch DNA-Ligase kovalent verbunden.",
    explanations_incorrect: {
      A: "Die Helicase entwunden beide Stränge gleichermaßen am Gabelpunkt.",
      C: "Beide Stränge werden aus identischen dNTPs (dATP, dCTP, dGTP, dTTP) synthetisiert.",
      D: "Topoisomerasen bauen Verdrillungsspannungen (Supercoils) vor der Gabel ab; sie stoppen die Replikation nicht gezielt.",
      E: "Der Folgestrang benötigt zwingend für jedes einzelne Okazaki-Fragment einen eigenen RNA-Primer (Primase)."
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
    subtopic: "Eukaryotische Transkription: RNA-Polymerasen I, II & III",
    difficulty: "intermediate",
    stem: "Welche eukaryotische RNA-Polymerase transkribiert proteinkodierende Gene zur Synthese von prä-mRNA im menschlichen Zellkern?",
    options: {
      A: "RNA-Polymerase I, die ausschließlich im Nukleoplasma aktiv ist und keine TATA-Box erkennt.",
      B: "Die mitochondriale DNA-Polymerase gamma unter Verwendung von Transfer-RNAs.",
      C: "RNA-Polymerase II; sie synthetisiert Vorläufer der messenger-RNA (prä-mRNA) sowie die meisten snRNAs und microRNAs.",
      D: "RNA-Polymerase III, die vorwiegend für die Transkription der 28S- und 18S-rRNAs im Nukleolus zuständig ist.",
      E: "Die bakterielle Primase (DnaG), die nach Translokation in den Kern Gene ohne Transkriptionsfaktoren abliest."
    },
    correct_answer: "C",
    explanation_correct: "Eukaryoten besitzen drei verschiedene nukleäre RNA-Polymerasen mit strikter Funktionsteilung: 1. RNA-Polymerase I: lokalisiert im Nukleolus, synthetisiert die 45S-prä-rRNA, aus der durch Prozessierung die 18S-, 5.8S- und 28S-rRNAs der Ribosomen hervorgehen. 2. RNA-Polymerase II: transkribiert alle Protein-kodierenden Gene in heterogene Kern-RNA (hnRNA / prä-mRNA) sowie die meisten snRNAs (U1, U2, U4, U5) und miRNAs. Sie wird hochsensitiv durch das Gift des Knollenblätterpilzes (alpha-Amanitin) gehemmt. 3. RNA-Polymerase III: transkribiert kleine funktionelle RNAs, darunter alle tRNAs, die 5S-rRNA (als einzige rRNA außerhalb des Nukleolus) und die U6-snRNA.",
    explanations_incorrect: {
      A: "RNA-Polymerase I liegt im Nukleolus und synthetisiert 18S, 5.8S und 28S rRNA, keine mRNA.",
      B: "Polymerase gamma ist die Replikations-Polymerase der mitochondrialen DNA und transkribiert keine nukleären Gene.",
      D: "RNA-Polymerase III synthetisiert tRNAs und 5S-rRNA; 28S- und 18S-rRNA stammen von RNA-Polymerase I.",
      E: "Primase synthetisiert kurze RNA-Primer für die DNA-Replikation und ist keine nukleäre Transkriptions-Polymerase."
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
    subtopic: "RNA-Prozessierung: Capping, Spleißen & Polyadenylierung",
    difficulty: "intermediate",
    stem: "Welche Modifikationen durchläuft ein primäres RNA-Transkript (prä-mRNA) bei Eukaryoten im Zellkern, bevor es als reife mRNA ins Zytoplasma exportiert werden kann?",
    options: {
      A: "Translation am rauen ER, Verknüpfung mit Ubiquitin und Einschleusung in das Proteasom.",
      B: "Entfernung sämtlicher Exons durch Topoisomerasen, Ligation der verbleibenden Introns und Phosphorylierung am 3'-Ende.",
      C: "Synthese eines Thymin-Schwanzes am 5'-Ende und Umwandlung aller Ribosen in Desoxyribosen durch Ribonukleotid-Reduktase.",
      D: "Replikation zu einer stabilen RNA-DNA-Doppelhelix über reverse Transkription.",
      E: "Anfügen einer 7-Methylguanosin-Kappe (5'-Cap), enzymatisches Herausschneiden der Introns (Spleißen) und Anheften eines Poly(A)-Schwanzes am 3'-Ende."
    },
    correct_answer: "E",
    explanation_correct: "Das primäre Transkript der RNA-Polymerase II (prä-mRNA) muss vor dem Export durch Kernporen ins Zytoplasma drei essenzielle Prozessierungsschritte im Zellkern durchlaufen: 1. 5'-Capping: Bereits während der frühen Elongation wird ein 7-Methylguanosin-Rest über eine unkonventionelle 5'-5'-Triphosphatbindung an das 5'-Ende geknüpft. Dies schützt vor 5'-Exonukleasen und dient als Erkennungssignal für Ribosomen. 2. Spleißen (Splicing): Das Spleißosom (aus snRNPs wie U1, U2, U4/U6, U5) schneidet die nicht-kodierenden Introns präzise heraus und verknüpft die kodierenden Exons. Alternatives Spleißen ermöglicht die Synthese verschiedener Proteinisoformen aus einer Prä-mRNA. 3. Polyadenylierung: Nach Spaltung an einem Konsensus-Signal (AAUAAA) am 3'-Ende hängt die Poly(A)-Polymerase template-frei ca. 200–250 Adenin-Nukleotide (Poly-A-Schwanz) an, was Stabilität und Translationsinitiation fördert.",
    explanations_incorrect: {
      A: "Translation findet im Zytosol/am RER statt und ist kein Kern-Prozessierungsschritt der mRNA; Ubiquitin markiert Proteine für den Abbau.",
      B: "Introns werden entfernt und Exons zusammengefügt, nicht umgekehrt.",
      C: "Die Kappe enthält 7-Methylguanosin (kein Thymin); RNA behält ihre Ribosen und wird nicht in Desoxyribose umgewandelt.",
      D: "Eukaryotische mRNA verbleibt einzelsträngig und wird nicht zu einer RNA-DNA-Doppelhelix repliziert."
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
    subtopic: "Epigenetik: DNA-Methylierung & Histonmodifikation",
    difficulty: "advanced",
    stem: "Welche biochemischen Veränderungen an Chromatin führen typischerweise zur transkriptionellen Stilllegung (Gen-Silencing) eines eukaryotischen Genbereichs?",
    options: {
      A: "Vollständige Abspaltung aller Histonproteine und irreversible Spaltung von Phosphodiesterbindungen.",
      B: "Hypermethylierung von Cytosin-Basen in CpG-Inseln der Promotorregion sowie Deacetylierung von Histon-Lysinresten (durch HDACs).",
      C: "Hyperacetylierung von Histonen durch Histonacetyltransferasen (HATs) bei gleichzeitigem Verlust der DNA-Methylierung.",
      D: "Phosphorylierung der 2'-OH-Gruppen der Desoxyribose, wodurch RNA-Polymerasen dauerhaft an die DNA binden.",
      E: "Austausch von Adenin gegen Guanin im TATA-Box-Bereich durch DNA-Polymerasen."
    },
    correct_answer: "B",
    explanation_correct: "Epigenetische Regulation steuert die Genexpression ohne Veränderung der primären DNA-Nukleotidsequenz. Zur transkriptionellen Repression (Heterochromatin-Bildung und Gen-Silencing) tragen zwei Hauptmechanismen koordiniert bei: 1. DNA-Methylierung: DNA-Methyltransferasen (DNMTs) übertragen eine Methylgruppe auf Kohlenstoff C5 von Cytosin in CG-Dinukleotiden (CpG-Inseln) im Promotorbereich. Dies verhindert die Bindung von Transkriptionsfaktoren und rekrutiert Methyl-CpG-Bindeproteine (MeCP2). 2. Histondeacetylierung: MeCP2 rekrutiert Histondeacetylasen (HDACs). HDACs entfernen Acetylgruppen von den positiv geladenen epsilon-Aminogruppen der Lysinreste in Histonschwänzen. Die positive Ladung der Histone wird wiederhergestellt, wodurch sie fest an das negativ geladene Phosphatrückgrat der DNA binden. Das Chromatin kondensiert zum dichten, für die RNA-Polymerase II unzugänglichen Heterochromatin.",
    explanations_incorrect: {
      A: "Epigenetische Stilllegung erfolgt durch Chromatinkondensation, nicht durch Abbau von Histonen oder DNA-Strangbrüche.",
      C: "Histonacetylierung durch HATs neutralisiert positive Ladungen, lockert das Chromatin (Euchromatin) und stimuliert die Transkription.",
      D: "Desoxyribose in DNA besitzt keine 2'-OH-Gruppe (nur H am C2').",
      E: "Basenaustausche sind genetische Mutationen, keine epigenetischen Modifikationen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Zellstoffwechsel & Bioenergetik (bio-06-stoffwechsel) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-028",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "ATP-Molekülstruktur & Hydrolyse",
    difficulty: "foundational",
    stem: "Aus welchen chemischen Bausteinen ist das universelle Energieträgermolekül Adenosintriphosphat (ATP) aufgebaut, und welcher Bindungstyp setzt bei der Spaltung zu ADP die nutzbare freie Enthalpie frei?",
    options: {
      A: "Aus Guanin, Desoxyribose und drei Phosphatresten; Spaltung einer Peptidbindung.",
      B: "Aus Adenin, Ribulose und zwei Phosphatresten; Spaltung einer glykosidischen Bindung.",
      C: "Aus der Purinbase Adenin, dem Pentosezucker Ribose und drei Phosphatgruppen; Spaltung einer energiereichen Phosphorsäureanhydridbindung.",
      D: "Aus Cytosin, Glucose und drei Sulfatgruppen; Spaltung einer Esterbindung.",
      E: "Aus Uracil, Desoxyribose und einer Triphosphatgruppe; Spaltung einer Disulfidbrücke."
    },
    correct_answer: "C",
    explanation_correct: "Adenosintriphosphat (ATP) ist das universelle chemische Energieäquivalent aller lebenden Zellen. Es besteht aus dem Nukleosid Adenosin (die Purinbase Adenin ist N-glykosidisch an das C1'-Atom der Pentose D-Ribose gebunden) und drei Phosphatgruppen (alpha, beta, gamma), die am C5'-Atom der Ribose verknüpft sind. Während die alpha-Phosphatgruppe über eine Phosphorsäureesterbindung an die Ribose gebunden ist, sind die beiden äußeren Phosphatgruppen (alpha-beta und beta-gamma) über Phosphorsäureanhydridbindungen miteinander verknüpft. Die Hydrolyse der terminalen Phosphorsäureanhydridbindung (ATP + H2O → ADP + P_i) weist eine stark negative freie Standardenthalpie auf (Delta G°' ≈ -30,5 kJ/mol bzw. unter physiologischen Zellbedingungen ca. -50 kJ/mol).",
    explanations_incorrect: {
      A: "ATP enthält Adenin (nicht Guanin) und Ribose (nicht Desoxyribose); Peptidbindungen verknüpfen Aminosäuren.",
      B: "Der Zucker ist Ribose (nicht Ribulose) und es liegen drei Phosphatreste vor, keine zwei (zwei Phosphatreste bilden ADP).",
      D: "ATP enthält Adenin und Phosphatgruppen, keine Sulfatgruppen.",
      E: "ATP enthält kein Uracil und keine Disulfidbrücken (Disulfidbrücken existieren zwischen Cysteinresten in Proteinen)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-029",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Glykolyse: PFK-1-Regulation & Nettoausbeute",
    difficulty: "intermediate",
    stem: "Welche Nettoausbeute an energiereichen Verbindungen liefert die Glykolyse beim Abbau von 1 Mol Glucose zu 2 Mol Pyruvat im Zytosol, und wie wird das Schlüsselenzym Phosphofructokinase-1 (PFK-1) allosterisch reguliert?",
    options: {
      A: "Netto 2 Mol ATP und 2 Mol NADH + H+; PFK-1 wird allosterisch durch AMP und Fructose-2,6-bisphosphat aktiviert sowie durch hohe ATP- und Citratkonzentrationen gehemmt.",
      B: "Netto 36 Mol ATP und 6 Mol FADH2; PFK-1 wird durch hohe ATP-Spiegel maximal stimuliert.",
      C: "Netto 4 Mol ATP und 0 Mol NADH; PFK-1 wird ausschließlich durch Sauerstoffmangel gehemmt.",
      D: "Netto 1 Mol GTP und 1 Mol Lactat; PFK-1 spaltet Glucose direkt in zwei Moleküle Kohlendioxid.",
      E: "Netto 2 Mol ATP, aber kein NADH; PFK-1 wird durch Citrat allosterisch aktiviert."
    },
    correct_answer: "A",
    explanation_correct: "Die Glykolyse läuft im Zytosol ab und spaltet 1 Mol D-Glucose (C6) in 2 Mol Pyruvat (C3). In der Vorbereitungsphase werden zunächst 2 Mol ATP investiert (Phosphorylierung durch Hexokinase und PFK-1). In der Ertragsphase werden durch Substratkettenphosphorylierung 4 Mol ATP gebildet, sodass der Nettogewinn genau 2 Mol ATP pro Mol Glucose beträgt. Zudem werden 2 Mol NAD+ zu 2 Mol NADH + H+ reduziert. Das wichtigste Schrittmacherenzym der Glykolyse ist die Phosphofructokinase-1 (PFK-1), welche Fructose-6-phosphat zu Fructose-1,6-bisphosphat phosphoryliert. PFK-1 wird allosterisch aktiviert durch Signale niedrigen Energiestatus (AMP, ADP) sowie potent durch Fructose-2,6-bisphosphat. Hohe Konzentrationen von ATP (Signal für ausreichende Energie) und Citrat (aus dem Citratzyklus) wirken als allosterische Inhibitoren.",
    explanations_incorrect: {
      B: "36 ATP entstehen erst durch die gesamte aerobe Zellatmung (inkl. Citratzyklus und Atmungskette im Mitochondrium), nicht in der Glykolyse allein; ATP hemmt PFK-1.",
      C: "Brutto entstehen 4 ATP, aber netto nur 2 ATP (da 2 ATP am Anfang verbraucht werden); 2 NADH werden regulär gebildet.",
      D: "Lactat entsteht erst bei anaerober Milchsäuregärung; PFK-1 bildet Fructose-1,6-bisphosphat und spaltet kein CO2 ab.",
      E: "Es entstehen 2 Mol NADH, und Citrat hemmt PFK-1 (Signal für hohe Substratsättigung des Citratzyklus), aktiviert sie nicht."
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
    subtopic: "Atmungskette: Elektronentransport & Protonenpumpsysteme",
    difficulty: "intermediate",
    stem: "Welche Proteinkomplexe der mitochondrialen Atmungskette pumpen bei der Oxidation von NADH bzw. FADH2 aktiv Protonen aus der Matrix in den Intermembranraum?",
    options: {
      A: "Ausschließlich Komplex II (Succinat-Dehydrogenase) pumpt Protonen, während Komplexe I, III und IV reine Elektronencarrier sind.",
      B: "Alle vier Komplexe (I, II, III und IV) pumpen jeweils exakt 4 Protonen pro übertragenem Elektronenpaar.",
      C: "Nur die ATP-Synthase pumpt Protonen aus der Matrix in den Intermembranraum unter direktem ATP-Verbrauch.",
      D: "Die Komplexe I, III und IV pumpen Protonen in den Intermembranraum; Komplex II pumpt hingegen keine Protonen.",
      E: "Kein Komplex pumpt Protonen; der Gradient entsteht ausschließlich durch passiven Ausstrom von Hydrogencarbonat."
    },
    correct_answer: "D",
    explanation_correct: "Die Atmungskette an der inneren Mitochondrienmembran besteht aus vier Multiproteinkomplexen (I–IV), Ubichinon (Coenzym Q) und Cytochrom c: Komplex I (NADH-Dehydrogenase-Komplex) übernimmt Elektronen von NADH+H+, überträgt sie auf Ubichinon und pumpt 4 H+ pro Elektronenpaar in den Intermembranraum. Komplex II (Succinat-Dehydrogenase des Citratzyklus) oxidiert Succinat zu Fumarat, überträgt Elektronen von FADH2 auf Ubichinon, setzt aber aufgrund der geringen Redoxpotentialdifferenz keine ausreichende freie Enthalpie frei und pumpt KEINE Protonen. Komplex III (Cytochrom-c-Reduktase) überträgt Elektronen über den Q-Zyklus auf Cytochrom c und pumpt 4 H+. Komplex IV (Cytochrom-c-Oxidase) überträgt Elektronen auf molekularen Sauerstoff (1/2 O2 + 2 H+ → H2O) und pumpt 2 H+. Der resultierende elektrochemische Protonengradient treibt die ATP-Synthase bei Rückstrom der Protonen in die Matrix an.",
    explanations_incorrect: {
      A: "Komplex II ist der einzige Komplex der Kette, der keine Protonen pumpt; I, III und IV sind die Protonenpumpen.",
      B: "Komplex II pumpt 0 Protonen; Komplex IV pumpt 2 Protonen pro Elektronenpaar.",
      C: "Die ATP-Synthase nutzt den passiven Rückstrom von Protonen in die Matrix zur ATP-Synthese; sie pumpt keine Protonen hinaus.",
      E: "Der Protonengradient wird aktiv durch die redoxgetriebenen Protonenpumpen der Komplexe I, III und IV erzeugt."
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
    subtopic: "Fotosynthese: Lichtreaktion vs. Calvin-Zyklus",
    difficulty: "advanced",
    stem: "Worin besteht der funktionelle Zusammenhang zwischen den lichtabhängigen Reaktionen in den Thylakoidmembranen und dem lichtunabhängigen Calvin-Zyklus im Stroma der Chloroplasten?",
    options: {
      A: "Die Lichtreaktion fixiert Kohlendioxid an Ribulose-1,5-bisphosphat, während der Calvin-Zyklus Wasser spaltet und molekularen Sauerstoff freisetzt.",
      B: "Der Calvin-Zyklus liefert ATP und NADPH für die Photolyse des Wassers an Photosystem II.",
      C: "Die Thylakoidmembranen synthetisieren Glucose direkt aus Sonnenlicht ohne Beteiligung des Stromas.",
      D: "In der Lichtreaktion wird Sauerstoff verbraucht, um im Calvin-Zyklus Pyruvat zu Milchsäure zu reduzieren.",
      E: "Die Lichtreaktion nutzt Lichtenergie zur Photolyse des Wassers (O2-Freisetzung) und erzeugt ATP sowie NADPH + H+, welche im Calvin-Zyklus im Stroma zur Reduktion von CO2 zu Kohlenhydraten verbraucht werden."
    },
    correct_answer: "E",
    explanation_correct: "Die oxygene Fotosynthese gliedert sich in zwei räumlich und funktionell gekoppelte Teilprozesse: 1. Lichtabhängige Reaktionen (in den Thylakoidmembranen der Chloroplasten): Lichtquanten werden durch Antennenkomplexe (Chlorophyll a/b, Carotinoide) absorbiert und zum Reaktionszentrum von Photosystem II (P680) geleitet. Am wasserspaltenden Mangankomplex von PS II findet die Photolyse des Wassers statt: 2 H2O → O2 + 4 H+ + 4 e-. Die Elektronen fließen über Plastochinon, den Cytochrom-b6f-Komplex und Plastocyanin zu Photosystem I (P700) und reduzieren schließlich über Ferredoxin NADP+ zu NADPH + H+. Der durch Elektronentransport aufgebaute Protonengradient treibt die CF_oCF_1-ATP-Synthase an (Photophosphorylierung). 2. Lichtunabhängige Reaktionen / Calvin-Zyklus (im Stroma): Das Schlüsselenzym RuBisCO fixiert CO2 an Ribulose-1,5-bisphosphat. Unter stöchiometrischem Verbrauch der in der Lichtreaktion bereitgestellten chemischen Energie (ATP) und Reduktionsäquivalente (NADPH + H+) wird 3-Phosphoglycerat zu Glycerinaldehyd-3-phosphat (Triosephosphat) reduziert, woraus Glucose und Stärke regeneriert werden.",
    explanations_incorrect: {
      A: "Die Spaltung von Wasser und O2-Freisetzung erfolgt in der Lichtreaktion an PS II; CO2-Fixierung erfolgt im Calvin-Zyklus.",
      B: "Die Lichtreaktion erzeugt ATP und NADPH; der Calvin-Zyklus verbraucht diese und regeneriert ADP und NADP+.",
      C: "Die Kohlenhydratsynthese (Calvin-Zyklus) findet im Stroma statt, nicht in den Thylakoidmembranen.",
      D: "In der Lichtreaktion wird kein Sauerstoff verbraucht, sondern O2 durch H2O-Oxidation freigesetzt; Fotosynthese bildet keine Milchsäure."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 7: Herz-Kreislauf-System (bio-07-herzkreislauf) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-032",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Herzzyklus: Phasen & Klappenmechanik",
    difficulty: "foundational",
    stem: "Welcher Klappenzustand charakterisiert die isovolumetrische Anspannungsphase der Kammersystole des menschlichen Herzens?",
    options: {
      A: "Sowohl die Segelklappen (Mitral- und Trikuspidalklappe) als auch die Taschenklappen (Aorten- und Pulmonalklappe) sind geschlossen.",
      B: "Die Segelklappen sind weit geöffnet, während die Taschenklappen fest verschlossen sind.",
      C: "Die Taschenklappen sind geöffnet und die Segelklappen sind ebenfalls weit geöffnet.",
      D: "Die Aortenklappe ist geöffnet, damit das Blut drucklos in die Vena cava zurückströmen kann.",
      E: "Alle vier Klappen sind geöffnet, sodass ein ungehinderter Druckausgleich zwischen Vorhöfen und Ventrikeln stattfindet."
    },
    correct_answer: "A",
    explanation_correct: "Die Kammersystole gliedert sich in zwei Phasen: 1. Anspannungsphase (isovolumetrische Kontraktion): Die Ventrikelmyozyten kontrahieren nach Erregung. Durch den beginnenden Druckanstieg in den Kammern schließen die AV-Klappen (Mitral- und Trikuspidalklappe) sofort ('1. Herzton'). Da der Kammerdruck den diastolischen Druck in Aorta (ca. 80 mmHg) und Truncus pulmonalis (ca. 10 mmHg) noch nicht übersteigt, bleiben auch die Taschenklappen geschlossen. Da Flüssigkeiten inkompressibel sind und alle vier Klappen geschlossen sind, steigt der Druck steil an, während das Kammervolumen exakt konstant bleibt (isovolumetrisch). 2. Austreibungsphase: Sobald der Kammerdruck den Aorten- bzw. Pulmonalisdruck übersteigt, öffnen sich die Taschenklappen und das Schlagvolumen (ca. 70 ml) wird ausgeworfen.",
    explanations_incorrect: {
      B: "Geöffnete Segelklappen bei geschlossenen Taschenklappen kennzeichnen die Füllungsphase der Diastole.",
      C: "Wären alle Klappen geöffnet, würde kein gerichteter Druckaufbau zustande kommen.",
      D: "Die Aortenklappe öffnet sich erst in der Austreibungsphase zur Aorta hin; Blut strömt niemals aus der Aorta in die Vena cava zurück.",
      E: "Zu keinem Zeitpunkt des regulären Herzzyklus sind alle vier Klappen gleichzeitig geöffnet."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-033",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Erregungsleitungssystem: AV-Knoten-Verzögerung",
    difficulty: "intermediate",
    stem: "Welche physiologische Bedeutung hat die ausgeprägte Leitungsverzögerung der elektrischen Erregung im Atrioventrikularknoten (AV-Knoten) des Herzens?",
    options: {
      A: "Sie beschleunigt die Depolarisation der Ventrikel, sodass Vorhöfe und Kammern vollkommen synchron kontrahieren.",
      B: "Sie verhindert, dass die elektrische Erregung das His-Bündel erreicht, und stoppt die Kammersystole im Ruhezustand.",
      C: "Sie verzögert die Erregungsüberleitung von den Vorhöfen auf die Kammern um ca. 0,1 Sekunden, damit die Vorhofsystole abgeschlossen ist und die Kammern optimal mit Blut gefüllt sind, bevor die Kammersystole beginnt.",
      D: "Sie induziert die spontane Erschlaffung der Aorta ascendens zur Senkung des peripheren Widerstands.",
      E: "Sie dient ausschließlich der Produktion von natriuretischen Peptiden (ANP) zur Steigerung des Blutdrucks."
    },
    correct_answer: "C",
    explanation_correct: "Das kardiale Erregungsleitungssystem besteht aus spezialisierten Kardiomyozyten. Die Erregung entsteht spontan im Sinusknoten (primärer Schrittmacher) und breitet sich über das Vorhofmyokard zum AV-Knoten (sekundärer Schrittmacher) aus. Das Ventrikelmyokard ist durch das bindegewebige Herzskelett (Anulus fibrosus) elektrisch vollständig von den Vorhöfen isoliert; die einzige physiologische muskuläre Überleitungsbrücke ist das His-Bündel am AV-Knoten. Im AV-Knoten ist die Leitungsgeschwindigkeit aufgrund dünner Fasern und weniger Gap Junctions extrem verlangsamt (Leitungsverzögerung um ca. 60–100 ms). Dies stellt sicher, dass die mechanische Vorhofkontraktion vollständig abgeschlossen ist und die Ventrikel maximal gefüllt sind, bevor die Kammerkontraktion von der Herzspitze aus einsetzt. Zudem schützt der AV-Knoten durch seine lange Refraktärzeit die Kammern vor zu hohen Frequenzen bei Vorhoftachykardien.",
    explanations_incorrect: {
      A: "Synchrones Kontrahieren von Vorhof und Kammer wäre dysfunktional, da die Kammerfüllung behindert würde.",
      B: "Die Erregung wird physiologisch an das His-Bündel weitergeleitet; ein Ausfall wäre ein pathologischer AV-Block III. Grades.",
      D: "Der AV-Knoten innerviert nicht die Gefäßwand der Aorta.",
      E: "ANP wird vom Vorhofmyokard bei Dehnung sezerniert und senkt das Blutvolumen/den Blutdruck; es wird nicht im AV-Knoten zur Blutdrucksteigerung gebildet."
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
    subtopic: "Hämoglobin: Sauerstoff-Bindungskurve & Bohr-Effekt",
    difficulty: "advanced",
    stem: "Welche Veränderung des physiologischen Milieus im stoffwechselaktiven Muskelgewebe bewirkt eine Rechtsverschiebung der Hämoglobin-Sauerstoff-Bindungskurve (Bohr-Effekt) und was ist die physiologische Konsequenz?",
    options: {
      A: "Ein Anstieg des pH-Werts (Alkalose) und Kälte; Hämoglobin bindet Sauerstoff fester und gibt weniger O2 an das Gewebe ab.",
      B: "Ein Anstieg von pCO2, ein Absinken des pH-Werts (Zunahme von H+-Ionen), ein Temperaturanstieg sowie erhöhtes 2,3-Bisphosphoglycerat (2,3-BPG); dies senkt die O2-Affinität von Hämoglobin und erleichtert die O2-Abgabe.",
      C: "Eine vollständige Zerstörung der Quartärstruktur von Hämoglobin durch Kohlenmonoxid.",
      D: "Eine Abnahme des arteriellen pCO2 bei gleichzeitigem Absinken des 2,3-BPG-Spiegels in den Erythrozyten.",
      E: "Ein massiver Einstrom von Natriumionen in das Hämoglobinmolekül, der das Häm-Eisen oxidiert."
    },
    correct_answer: "B",
    explanation_correct: "Die Bindung von Sauerstoff an Hämoglobin (Tetramer aus 2 alpha- und 2 beta-Ketten) folgt einer sigmoidalen S-förmigen Sauerstoff-Bindungskurve infolge positiver Kooperativität. Im stoffwechselaktiven Gewebe (z. B. arbeitender Skelettmuskel) fallen vermehrt Stoffwechselendprodukte an: pCO2 steigt (Hyperkapnie), Milchsäure/H+ senken den pH-Wert (Azidose), die Gewebetemperatur steigt lokal und in Erythrozyten akkumuliert 2,3-Bisphosphoglycerat (2,3-BPG). Diese allosterischen Effektoren binden bevorzugt an die desoxygenierte T-Form (Tense-State) des Hämoglobins und stabilisieren sie. Dies führt zu einer Rechtsverschiebung der O2-Bindungskurve (Bohr-Effekt): Bei gleichem Gewebe-Sauerstoffpartialdruck (pO2) sinkt die Sauerstoffsättigung von Hämoglobin, was bedeutet, dass Sauerstoff wesentlich leichter und in größerer Menge an das sauerstoffbedürftige Gewebe abgegeben wird.",
    explanations_incorrect: {
      A: "Alkalose (hoher pH), Kälte und niedriges pCO2 bewirken eine Linksverschiebung (hohe O2-Affinität, wie in der Lunge) und erschweren die O2-Abgabe.",
      C: "Der Bohr-Effekt ist eine reversible Konformationsänderung zwischen T- und R-Zustand und keine Zerstörung der Quartärstruktur.",
      D: "Niedriges pCO2 und niedriges 2,3-BPG verschieben die Kurve nach links, nicht nach rechts.",
      E: "Natriumionen oxidieren kein Häm-Eisen; Oxidation zu Fe3+ erzeugt dysfunktionales Methämoglobin."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 8: Atmungssystem (bio-08-atmung) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-035",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Lungenalveolen, Surfactant & Pneumozyten",
    difficulty: "intermediate",
    stem: "Welche Zellen der Alveolarwand bilden den Surfactant-Faktor, und welche primäre physikochemische Funktion erfüllt dieser in der menschlichen Lunge?",
    options: {
      A: "Pneumozyten Typ I; er erhöht die Oberflächenspannung, um das Einatmen von Staubpartikeln zu verhindern.",
      B: "Alveolarmakrophagen; er baut lysosomale Enzyme in der Pleurahöhle ab.",
      C: "Epithelzellen der Trachea; er verflüssigt den Speichel im Kehlkopf.",
      D: "Pneumozyten Typ II (Alveolarepithelzellen Typ II); er setzt die Oberflächenspannung an der Alveolaroberfläche herab und verhindert so das Kollabieren kleiner Alveolen bei der Exspiration.",
      E: "Endothelzellen der Lungenkapillaren; er erzeugt einen permanenten Unterdruck im Alveolarlumen."
    },
    correct_answer: "D",
    explanation_correct: "Die Alveolarepithelwand setzt sich aus zwei Hauptzelltypen zusammen: Pneumozyten Typ I (decken über 95 % der Alveolaroberfläche als extrem dünne Epithelzellen ab und bilden mit dem Kapillarendothel die Blut-Luft-Schranke für den Gasaustausch) und Pneumozyten Typ II (kubische Alveolarzellen, ca. 5 % der Oberfläche). Pneumozyten Typ II synthetisieren und sezernieren Surfactant (Surface Active Agent), ein Gemisch aus Phospholipiden (vor allem Dipalmitoylphosphatidylcholin, DPPC) und spezifischen Surfactant-Proteinen (SP-A, -B, -C, -D). An der Phasengrenze zwischen wässrigem Alveolarfilm und Alveolarluft senkt Surfactant die Oberflächenspannung drastisch herab. Gemäß dem Laplace-Gesetz (Kollapsdruck P = 2*T/r) verhindert dies, dass kleinere Alveolen (kleinerer Radius r) bei der Exspiration in größere Alveolen entleert werden und kollabieren (Atelektase). Zudem verringert Surfactant die elastische Atemarbeit bei der Inspiration.",
    explanations_incorrect: {
      A: "Pneumozyten Typ I sind für die Diffusion zuständig und bilden keinen Surfactant; Surfactant erniedrigt die Oberflächenspannung, statt sie zu erhöhen.",
      B: "Alveolarmakrophagen phagozytieren inhalierte Partikel und Mikroorganismen, synthetisieren aber keinen Surfactant.",
      C: "Die Trachea enthält Flimmerepithel und Becherzellen für die mukoziliäre Clearance, bildet aber keinen alveolären Surfactant.",
      E: "Kapillarendothelzellen kleiden die Blutgefäße aus; Unterdruck im Alveolarlumen entsteht dynamisch bei Inspiration durch Thoraxexpansion."
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
    subtopic: "Atemmechanik: Zwerchfell & Pleuradruck",
    difficulty: "intermediate",
    stem: "Wie verändern sich die Aktivität des Zwerchfells und der Druck im Pleuraspalt (intrapleuraler Druck) während der physiologischen Ruhe-Inspiration beim Menschen?",
    options: {
      A: "Das Zwerchfell kontrahiert und senkt sich nach kaudal; der intrapleurale Druck wird noch negativer (subatmosphärischer), wodurch die Lunge passiv gedehnt wird und Luft einströmt.",
      B: "Das Zwerchfell erschlafft und wölbt sich nach kranial; der Pleuradruck steigt auf +15 mmHg über den atmosphärischen Druck.",
      C: "Das Zwerchfell kontrahiert nach kranial in den Brustkorb; die Lunge wird komprimiert und der Alveolardruck steigt an.",
      D: "Der Pleuraspalt öffnet sich zur Außenluft, sodass atmosphärische Luft direkt in das Cavum pleurae einströmt.",
      E: "Die Zwerchfellbewegung spielt bei Ruhe keine Rolle, da Einatmung ausschließlich durch Erschlaffung der inneren Interkostalmuskeln erfolgt."
    },
    correct_answer: "A",
    explanation_correct: "Die Ruheinspiration ist ein aktiver neuromuskulärer Vorgang, dessen Hauptmotor das Zwerchfell (Diaphragma, innerviert vom N. phrenicus C3–C5) ist (unterstützt von den Mm. intercostales externi). Bei Kontraktion flacht sich die Zwerchfellkuppel ab und senkt sich nach kaudal (Bauchhöhlenwärts), wodurch sich der Thoraxraum in Längsrichtung vergrößert. Da die Lunge über den hauchdünnen serösen Flüssigkeitsfilm im geschlossenen Pleuraspalt adhärent an der Thoraxwand haftet, sinkt der intrapleurale Druck von ca. -0,5 kPa (-5 cm H2O) bei Atemruhelage auf ca. -0,8 kPa (-8 cm H2O) am Ende der Inspiration ab. Dieser gesteigerte Transpulmonaldruck dehnt das elastische Lungengewebe auf. Das intrapulmonale Alveolarvolumen nimmt zu, der Druck in den Alveolen sinkt unter den atmosphärischen Umgebungsdruck (um ca. -0,1 kPa) und Außenluft strömt entlang des Druckgefälles in die Atemwege.",
    explanations_incorrect: {
      B: "Das Erschlaffen und Aufwölben des Zwerchfells nach kranial erfolgt bei der Exspiration; der Pleuradruck bleibt physiologisch stets subatmosphärisch.",
      C: "Kontraktion senkt das Zwerchfell nach kaudal (abwärts) und dehnt die Lunge, anstatt sie zu komprimieren.",
      D: "Eine Eröffnung des Pleuraspalts zur Außenluft ist ein Pneumothorax, der zum Zusammenfallen der Lunge führt.",
      E: "Das Zwerchfell leistet ca. 60–80 % der Ruheinspirationsarbeit; die Mm. intercostales interni dienen primär der forcierten Exspiration."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },
  {
    id: "BIO-BMS-GP5-037",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Atemregulation: Chemorezeptoren & Hyperkapnie",
    difficulty: "advanced",
    stem: "Welcher chemische Parameter liefert beim gesunden Menschen unter physiologischen Ruhebedingungen den primären und stärksten Antrieb für die neuronale Steuerung der Atmung im Hirnstamm?",
    options: {
      A: "Ein Absinken des arteriellen Sauerstoffpartialdrucks (pO2) unter 95 mmHg im linken Vorhof.",
      B: "Ein Anstieg des osmotischen Drucks im Plasma, der vom Hypothalamus über Oxytocin vermittelt wird.",
      C: "Die totale Abwesenheit von Kohlendioxid im arteriellen Blut.",
      D: "Der direkte Einstrom von Bicarbonat-Ionen aus dem Blutplasma in das Atemzentrum über Carrier-Proteine.",
      E: "Der arterielle Kohlendioxid-Partialdruck (pCO2), der über zentrale Chemorezeptoren in der Medulla oblongata durch Detektion von Protonen (H+) im Liquor cerebrospinalis vermittelt wird."
    },
    correct_answer: "E",
    explanation_correct: "Die neuronale Rhythmusgenerierung der Atmung erfolgt in der Formatio reticularis der Medulla oblongata (dorsale und ventrale respiratorische Gruppe). Der sensitivste und stärkste physiologische Atemantrieb beim gesunden Menschen ist der arterielle Kohlendioxid-Partialdruck (Normwert: paCO2 ≈ 40 mmHg). Bereits ein geringer Anstieg um 2–5 mmHg (Hyperkapnie) vervielfacht das Atemminutenvolumen. Dieser Reiz wird primär (zu ca. 70–80 %) über zentrale Chemorezeptoren an der ventralen Oberfläche der Medulla oblongata vermittelt: Unpolares CO2 diffundiert frei und rasch über die Blut-Hirn-Schranke in den Liquor cerebrospinalis. Dort reagiert es mit Wasser (katalysiert durch Carboanhydrase) zu Kohlensäure, die in H+ und HCO3- dissoziiert (CO2 + H2O ↔ H2CO3 ↔ H+ + HCO3-). Da der Liquor kaum Proteine als Puffer enthält, führt dies zu einem prompten Abfall des Liquor-pH-Wertes. Die H+-Ionen stimulieren die zentralen Chemorezeptoren und steigern die ventilatorische Aktivität. Periphere Chemorezeptoren (Glomera carotica/aortica) reagieren primär auf Hypoxie (pO2 < 60 mmHg).",
    explanations_incorrect: {
      A: "Der Hypoxie-Antrieb über arterielle pO2-Rezeptoren greift erst bei ausgeprägtem Sauerstoffabfall (pO2 < 60 mmHg) als Reserveantrieb ein.",
      B: "Plasmadruck und Osmolarität regulieren die Durst- und ADH-Freisetzung im Hypothalamus, nicht primär den Atemrhythmus.",
      C: "Abwesenheit von CO2 (Hypokapnie) dämpft das Atemzentrum bis zur Apnoe (Atemstillstand).",
      D: "Bicarbonat und geladene Protonen können die Blut-Hirn-Schranke nur sehr langsam passieren; CO2 diffundiert lipophil ungehindert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "5.0_gp5"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 9: Nervensystem & Sinnesorgane (bio-09-nervensystem) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP5-038",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Ruhemembranpotenzial & Aktionspotenzial",
    difficulty: "foundational",
    stem: "Welche Ionenleitfähigkeit ist primär für das negative Ruhemembranpotenzial (ca. -70 mV) eines menschlichen Neurons verantwortlich, und welcher Mechanismus leitet die rasche Depolarisationsphase des Aktionspotenzials ein?",
    options: {
      A: "Das Ruhepotenzial beruht auf Natriumausstrom; die Depolarisation wird durch Öffnung spannungsabhängiger Chloridkanäle eingeleitet.",
      B: "Das Ruhepotenzial beruht ausschließlich auf Calciumeinstrom; die Depolarisation wird durch Schließen aller Ionenkanäle bewirkt.",
      C: "Das Ruhepotenzial wird primär durch die hohe Kaliumruhepermeabilität (K+-Hintergrundkanäle) dominiert; die Depolarisation beruht auf dem schlagartigen Einstrom von Na+ durch spannungsabhängige Natriumkanäle.",
      D: "Das Ruhepotenzial liegt bei +60 mV; die Depolarisation bringt das Potenzial auf -100 mV durch K+-Einstrom.",
      E: "Das Ruhepotenzial wird durch den aktiven Einstrom von Proteinanionen aus dem Extrazellulärraum erzeugt."
    },
    correct_answer: "C",
    explanation_correct: "Das Ruhemembranpotenzial einer Nervenzelle liegt bei ca. -70 mV (Zellinneres negativ gegenüber Zelläußerem). Es resultiert aus den asymmetrischen Ionenkonzentrationen (innen: viel K+, wenig Na+, wenig Cl-, viele nicht-permeable Proteinanionen; außen: viel Na+, viel Cl-, wenig K+) und den unterschiedlichen Membranleitfähigkeiten im Ruhezustand: Die Membran ist im Ruhezustand vor allem für Kaliumionen durchlässig (offene K+-Einwärtsgleichrichter- bzw. Hintergrund-Leak-Kanäle). K+ diffundiert seinem Konzentrationsgradienten folgend nach außen, bis das elektrische Gegenfeld den Diffusionsdruck kompensiert (Kaliumdiffusionspotenzial nach der Nernst-Gleichung). Die Na+/K+-ATPase erhält die Gradienten unter ATP-Spaltung aufrecht. Überschreitet ein Reiz am Axonhügel das Schwellenpotenzial (ca. -50 bis -55 mV), öffnen sich schlagartig spannungsabhängige Natriumkanäle. Natrium strömt massiv entlang seines elektrischen und chemischen Gradienten ein, was zur steilen Depolarisation und zum Overshoot (+30 mV) führt.",
    explanations_incorrect: {
      A: "Natrium strömt bei Depolarisation ein (nicht aus); Chloridkanäle erzeugen typischerweise inhibitorische Hyperpolarisationen (IPSP).",
      B: "Calciumeinstrom ist für die Transmitterfreisetzung an der Synapse wichtig, erzeugt aber nicht das neuronale Ruhepotenzial.",
      D: "Das Ruhepotenzial ist negativ (-70 mV); Depolarisation verschiebt das Potenzial ins Positive (Richtung +30 mV).",
      E: "Proteinanionen sind impermeabel im Zytosol gefangen und werden nicht aus dem Extrazellulärraum importiert."
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
    subtopic: "Chemische Synapse: Ca2+-Einstrom & SNARE-Komplex",
    difficulty: "advanced",
    stem: "Welche Abfolge molekularer Ereignisse führt an einer chemischen Synapse im Zentralnervensystem unmittelbar nach Eintreffen eines Aktionspotenzials zur Transmitterfreisetzung?",
    options: {
      A: "Das Aktionspotenzial öffnet spannungsabhängige Kaliumkanäle; K+-Einstrom spaltet Vesikelproteine enzymatisch in freie Neurotransmitter.",
      B: "Die präsynaptische Depolarisation öffnet spannungsgesteuerte Calciumkanäle; der resultierende Ca2+-Einstrom aktiviert den Calciumsensor Synaptotagmin, was die SNARE-vermittelte Membranfusion und Exozytose der synaptischen Vesikel auslöst.",
      C: "Neurotransmitter werden durch Transkription im synaptischen Spalt erst bei Depolarisation de novo synthetisiert.",
      D: "Natriumionen strömen in den synaptischen Spalt und zerstören die postsynaptischen Rezeptoren zur Erregungsweiterleitung.",
      E: "Die synaptischen Vesikel wandern per Endozytose zurück ins Soma, wo sie ihren Inhalt in den Zellkern entleeren."
    },
    correct_answer: "B",
    explanation_correct: "Die elektromechanische Kopplung an der chemischen Synapse vollzieht sich in exakt choreografierten Schritten: 1. Das über das Axon einlaufende Aktionspotenzial depolarisiert die präsynaptische Boutonmembran. 2. Dies führt zur raschen Öffnung spannungsgesteuerter Calciumkanäle (v. a. Ca_v2.1 [P/Q-Typ] und Ca_v2.2 [N-Typ]). 3. Calcium strömt entlang des steilen elektrochemischen Gradienten (extrazellulär ca. 1–2 mM vs. intrazellulär ca. 100 nM) lokal in die aktive Zone ein. 4. Ca2+ bindet mit hoher Affinität an den Calciumsensor Synaptotagmin-1 auf der Membran der angedockten synaptischen Vesikel. 5. Dies löst das vollständige Verdrillen des SNARE-Komplexes aus (v-SNARE Synaptobrevin/VAMP interagiert mit den t-SNAREs Syntaxin-1 und SNAP-25 auf der präsynaptischen Plasmamembran). Durch die freigesetzte Fusionsenergie verschmelzen Vesikel- und Plasmamembran innerhalb von Mikrosekunden und der Neurotransmitter (z. B. Glutamat) ergießt sich quantal in den synaptischen Spalt.",
    explanations_incorrect: {
      A: "Kalium strömt bei Kanalöffnung aus der Zelle heraus und beendet die Depolarisation; es löst keine Exozytose aus.",
      C: "Neurotransmitter sind bereits in synaptischen Vesikeln vorverpackt; Transkription/Translation ist viel zu langsam für synaptische Transmission.",
      D: "Neurotransmitter binden spezifisch an postsynaptische Rezeptoren und zerstören diese nicht.",
      E: "Vesikel verschmelzen per Exozytose an der präsynaptischen Membran; die Rückgewinnung erfolgt lokal über Clathrin-vermittelte Endozytose."
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
    primary_topic: "Nervensystem",
    subtopic: "Evolution: Homologiekriterien nach Remane",
    difficulty: "advanced",
    stem: "Welche biologische Beziehung besteht zwischen dem Armskelett des Menschen, dem Grabbein des Maulwurfs und der Brustflosse des Bartenwals, und nach welchem Kriterium wird dies begründet?",
    options: {
      A: "Es handelt sich um analoge Organe infolge konvergenter Anpassung an identische physikalische Fortbewegungsarten, begründet durch das Kriterium der gleichen Funktion.",
      B: "Es handelt sich um atavistische Rudimente ohne genetischen Bezug zu Wirbeltieren.",
      C: "Es handelt sich um chimäre Strukturen, die durch horizontalen Gentransfer zwischen Säugetieren und Vögeln entstanden sind.",
      D: "Es handelt sich um homologe Organe infolge divergenter Entwicklung aus einer gemeinsamen Grundform; der anatomische Nachweis erfolgt primär über das Kriterium der Lage (identische Knochenreihenfolge: Humerus, Radius/Ulna, Karpalknochen, Metakarpalia, Phalangen).",
      E: "Es handelt sich um vollkommen funktionslose Zufallsmutationen, die keinem der klassischen Kriterien von Remane genügen."
    },
    correct_answer: "D",
    explanation_correct: "Homologe Organe sind morphologische Strukturen verschiedener Taxa, die auf einen gemeinsamen evolutionären Vorfahren zurückgehen (divergente Evolution), auch wenn sie durch Anpassung an unterschiedliche Umweltbedingungen sekundär stark divergierende Funktionen ausüben (z. B. Greifhand des Menschen, Grabschaufel des Maulwurfs, Schwimmflosse des Wals, Flugflügel der Fledermaus). Der wissenschaftliche Nachweis der Homologie erfolgt nach den drei Kriterien von Remane: 1. Kriterium der Lage: Strukturen sind homolog, wenn sie in einem vergleichbaren Gefügesystem die gleiche relative Lage einnehmen. Alle Tetrapodenvorderextremitäten weisen trotz extremer Größen- und Formunterschiede denselben Grundbauplan auf (proximal ein Oberarmknochen [Humerus], zwei Unterarmknochen [Radius und Ulna], Handwurzelknochen [Carpalia], Mittelhandknochen [Metacarpalia] und Fingerknochen [Phalangen]). 2. Kriterium der spezifischen Qualität (Feinbau). 3. Kriterium der Kontinuität (fossile oder ontogenetische Übergangsformen). Analoge Organe (wie Insekten- und Vogelflügel) hingegen entstehen durch konvergente Evolution bei ähnlichen Umweltanforderungen ohne gemeinsamen Bauplan.",
    explanations_incorrect: {
      A: "Flosse, Grabbein und Arm sind homolog, nicht analog; analoge Organe beruhen auf Konvergenz ohne gemeinsamen anatomischen Bauplan.",
      B: "Es sind funktionstüchtige, hochentwickelte Extremitäten und keine atavistischen Rudimente.",
      C: "Horizontaler Gentransfer spielt bei der Entstehung des Wirbeltierskeletts keine Rolle; die Ähnlichkeit beruht auf vertikaler Abstammung.",
      E: "Das Extremitätenskelett der Landwirbeltiere ist das klassische Paradebeispiel für das Homologiekriterium der Lage nach Remane."
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
      if (subtopic.includes("Niere") || subtopic.includes("Filtration") || subtopic.includes("Sammelrohr")) {
        return "bio-02-koerper";
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
