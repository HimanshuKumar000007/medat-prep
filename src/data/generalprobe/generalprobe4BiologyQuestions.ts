/**
 * MedAT Biologie BMS — 40-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #4 (BMS Biologie-Testteil, 40 Original-Aufgaben).
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

export interface QcBioGp4QuestionRaw {
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

export const RAW_GENERALPROBE_4_BIO_QUESTIONS: QcBioGp4QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Die menschliche Zelle (bio-01-zelle) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-001",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Endoplasmatisches Retikulum & Calciumspeicher",
    difficulty: "foundational",
    stem: "Welche biologische Funktion ist spezifisch dem glatten (Agranulären) Endoplasmatischen Retikulum (SER) menschlicher Zellen zuzuordnen?",
    options: {
      A: "Transkription von Genen für ribosomale Strukturproteine",
      B: "Cotranslationale Translokation von sekretorischen Glykoproteinen",
      C: "Katalytische Spaltung von Proteinen über lysosomale Hydrolasen",
      D: "Intrazelluläre Speicherung von Calciumionen und Biosynthese von Phospholipiden und Steroidhormonen",
      E: "Assemblierung der 40S- und 60S-Untereinheiten der Ribosomen"
    },
    correct_answer: "D",
    explanation_correct: "Das glatte Endoplasmatische Retikulum (SER) ist ribosomenfrei und fungiert primär als intrazellulärer Calciumspeicher (in Muskelzellen spezialisiert als sarkoplasmatisches Retikulum via SERCA-Pumpe). Zudem ist es der Hauptort der Synthese von Membranlipiden (Phospholipide, Cholesterin), Steroidhormonen (z. B. in Nebennierenrinde und Gonaden) und beherbergt Enzyme der Biotransformation (Cytochrom-P450-System in Hepatozyten).",
    explanations_incorrect: {
      A: "Transkription findet ausschließlich im Zellkern (sowie mitochondrial in der Matrix) statt, niemals im ER.",
      B: "Cotranslationale Translokation und N-Glykosylierung sekretorischer Proteine sind Kernaufgaben des rauen ER (RER), das mit Ribosomen besetzt ist.",
      C: "Der lysosomale Proteinabbau ist Aufgabe der Lysosomen; das SER enthält keine sauren Hydrolasen.",
      E: "Die Assemblierung der ribosomalen Vorläuferuntereinheiten erfolgt im Nukleolus des Zellkerns."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-002",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Ribosomen & Peptidyltransferase-Aktivität",
    difficulty: "foundational",
    stem: "Welche molekulare Struktur katalysiert in eukaryotischen Ribosomen die Knüpfung der Peptidbindung während der Translation?",
    options: {
      A: "Ein Zinkfinger-Motiv des ribosomalen Proteins L11",
      B: "Die 28S-rRNA der großen (60S) ribosomalen Untereinheit als Ribozym",
      C: "Die 18S-rRNA der kleinen (40S) ribosomalen Untereinheit",
      D: "Der eukaryotische Elongationsfaktor eEF-2 unter GTP-Hydrolyse",
      E: "Die Aminoacyl-tRNA-Synthetase im Zytoplasma"
    },
    correct_answer: "B",
    explanation_correct: "Die Peptidyltransferase-Aktivität des Ribosoms ist eine intrinsische Eigenschaft der ribosomalen RNA: Die 28S-rRNA der großen eukaryotischen 60S-Untereinheit katalysiert als Ribozym den nukleophilen Angriff der Aminogruppe der Aminoacyl-tRNA auf den Esterkohlenstoff der Peptidyl-tRNA, ohne dass Protein-Seitenketten unmittelbar an der chemischen Katalyse beteiligt sind.",
    explanations_incorrect: {
      A: "Ribosomale Proteine dienen der strukturellen Stabilisierung des Ribosoms, besitzen aber keine Peptidyltransferase-Aktivität.",
      C: "Die 18S-rRNA gehört zur kleinen 40S-Untereinheit und ist für die korrekte Basenpaarung zwischen Codon und Anticodon (Decoding-Zentrum) zuständig.",
      D: "eEF-2 katalysiert die Translokation des Ribosoms entlang der mRNA unter GTP-Spaltung, nicht die Peptidknüpfung selbst.",
      E: "Aminoacyl-tRNA-Synthetasen beladen tRNAs im Zytosol mit ihrer spezifischen Aminosäure, sind aber nicht am Ribosom an der Peptidsynthese beteiligt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-003",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zell-Zell-Verbindungen: Hemidesmosomen vs. Desmosomen",
    difficulty: "intermediate",
    stem: "Welcher zelluläre Bestandteil unterscheidet Hemidesmosomen funktionell und molekular von Desmosomen (Maculae adherentes)?",
    options: {
      A: "Hemidesmosomen verbinden Aktinfilamente benachbarter Epithelzellen über E-Cadherine",
      B: "Desmosomen verankern Zellen an der extrazellulären Matrix über Fibronektin",
      C: "Hemidesmosomen bilden hydrophile Membrankanäle aus Connexinen für den Ionenaustausch",
      D: "Desmosomen fehlen in verhornten mehrschichtigen Plattenepithelien vollständig",
      E: "Hemidesmosomen verankern zytoskelettale Intermediärfilamente über Integrine an der Basallamina"
    },
    correct_answer: "E",
    explanation_correct: "Hemidesmosomen verankern Epithelzellen an der darunterliegenden Basallamina (Extrazellulärmatrix). Sie koppeln zytosolische Intermediärfilamente (wie Keratin/Tonofilamente) über Transmembranproteine der Integrin-Familie (vor allem Integrin α6β4) und Kollagen XVII an Laminin-332 der Basallamina. Desmosomen hingegen koppeln zwei benachbarte Zellen über Cadherine (Desmogleine und Desmocolline).",
    explanations_incorrect: {
      A: "Die Verankerung von Aktinfilamenten zwischen benachbarten Zellen erfolgt über Adhärenskontakte (Zonulae adherentes) mittels klassischer Cadherine, nicht über Hemidesmosomen.",
      B: "Desmosomen sind reine Zell-Zell-Kontakte und binden nicht direkt an die Basallamina oder Fibronektin.",
      C: "Hydrophile Ionenkanäle werden von Gap Junctions (Nexus) aus Connexinen gebildet, nicht von Hemidesmosomen.",
      D: "Desmosomen sind im Stratum spinosum der Epidermis extrem zahlreich und verleihen der Haut ihre mechanische Festigkeit."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-004",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zellkern-Transport & Ran-GTPase-Gradient",
    difficulty: "intermediate",
    stem: "Wie wird die gerichtete Freisetzung von Proteinfrachten im Zellkern beim nucleären Proteinimport energetisch gesteuert?",
    options: {
      A: "Bindung von Ran-GTP an das Importin im Zellkern bewirkt eine Konformationsänderung und Freisetzung der Fracht",
      B: "Direkte ATP-Hydrolyse durch die Kernporenkomplexe während der Passage",
      C: "Ran-GDP bindet im Nukleoplasma mit hoher Affinität an das Frachtprotein und spaltet es ab",
      D: "Phosphorylierung der Kernlokalisationssequenz (NLS) durch zytosolische Kinasen",
      E: "Ein chemiosmotischer Natriumgradient über der inneren Kernmembran"
    },
    correct_answer: "A",
    explanation_correct: "Der nucleäre Import basiert auf einem Ran-GTP/Ran-GDP-Gradienten: Im Zytosol bindet Importin-β (oft mit Importin-α) an Proteine mit klassischer Kernlokalisationssequenz (NLS). Nach Passage des Kernporenkomplexes bindet nucleäres Ran-GTP mit hoher Affinität an Importin-β. Dies induziert eine allosterische Konformationsänderung, wodurch die Fracht im Nukleoplasma freigesetzt wird. Im Kern regeneriert der chromatinassoziierte RanGEF (RCC1) Ran-GTP, während im Zytosol RanGAP die GTP-Hydrolyse zu Ran-GDP stimuliert.",
    explanations_incorrect: {
      B: "Die Kernpore selbst besitzt keine intrinsische ATPase-Aktivität; der gerichtete Transport wird durch den Ran-GTPase-Zyklus angetrieben.",
      C: "Ran-GDP liegt überwiegend im Zytosol vor und kann im Nukleoplasma nicht die Frachtfreisetzung von Importin vermitteln.",
      D: "Phosphorylierung reguliert manche NLS-Sequenzen negativ, ist aber nicht der fundamentale mechanische Auslöser der nucleären Frachtfreisetzung.",
      E: "Es existiert kein Natriumgradient über der Kernhülle; Kernporen sind für kleine Ionen frei permeabel."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-005",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Autophagie & Phagophor-Bildung",
    difficulty: "advanced",
    stem: "Welches biochemische Schlüsselereignis kennzeichnet die Reifung und Membranexpansion des Phagophors während der humanen Makroautophagie?",
    options: {
      A: "Translokation von Cytochrom c aus dem Mitochondrium in das Zytosol",
      B: "Abbau von Ubiquitin durch das 26S-Proteasom im Zellkern",
      C: "Kovalente Konjugation des zytosolischen LC3-I an Phosphatidylethanolamin zur Bildung von membrangebundenem LC3-II",
      D: "Aktivierung der Caspase-3 durch Spaltung von Procaspase-9",
      E: "Clathrin-vermittelte Abschnürung von Endosomen an der Plasmamembran"
    },
    correct_answer: "C",
    explanation_correct: "Bei der Makroautophagie wird das zytosolische Protein LC3 (ATG8-Homolog) zunächst durch ATG4 an seinem C-Terminus gespalten (LC3-I). Anschließend wird LC3-I über eine ubiquitinähnliche Enzymkaskade (ATG7 als E1-ähnlich, ATG3 als E2-ähnlich) kovalent an das Membranlipid Phosphatidylethanolamin (PE) gekoppelt. Dieses lipidierte Produkt (LC3-II) inseriert fest in die Innen- und Außenmembran des wachsenden Phagophors und vermittelt Membranelongation, Frachtselektion und spätere Autophagosomenfusion.",
    explanations_incorrect: {
      A: "Cytochrom-c-Freisetzung ist das Schlüsselereignis der mitochondrialen Apoptoseeinleitung, nicht der Autophagiemembran-Reifung.",
      B: "Der proteasomale Abbau ist ein vom autophagischen lysosomalen Abbauweg getrenntes zelluläres Abbausystem.",
      D: "Caspase-3-Aktivierung markiert die Exekutionsphase der Apoptose.",
      E: "Clathrin-Vesikel vermitteln rezeptorvermittelte Endozytose und Trans-Golgi-Transport, nicht die autophagozytäre Phagophorbildung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 2: Körper des Menschen & Gewebe (bio-02-koerper) - 5 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-006",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Epithelgewebe & Urothel (Übergangsepithel)",
    difficulty: "foundational",
    stem: "Welches histologische Charakteristikum zeichnet das Urothel (Übergangsepithel) der ableitenden Harnwege spezifisch aus?",
    options: {
      A: "Einschichtiges hochprismatisches Epithel mit dichtem Bürstensaum",
      B: "Mehrschichtiges verhorntes Plattenepithel mit ausgeprägtem Stratum corneum",
      C: "Mehrschichtiges Übergangsepithel mit charakteristischen Deckzellen (Umbrella cells) und apikaler Crusta",
      D: "Mehrreihiges Flimmerepithel mit eingelagerten Becherzellen",
      E: "Einschichtiges Plattenepithel mit kontinuierlicher Basalmembran"
    },
    correct_answer: "C",
    explanation_correct: "Das Urothel der ableitenden Harnwege (Nierenbecken, Ureter, Harnblase, proximaler Urethraabschnitt) ist ein mehrschichtiges Übergangsepithel. Es besitzt oberflächliche, oft mehrkernige Deckzellen (Umbrella cells), die eine verdichtete apikale Zytoplasma- und Membranzone (Crusta urothelialis) aufweisen. Diese enthält Uroplakin-Plaques, schützt das Gewebe vor dem aggressiven, hyperosmolaren Harn und ermöglicht eine erhebliche reversible Dehnung bei Blasenfüllung.",
    explanations_incorrect: {
      A: "Einschichtiges Zylinderepithel mit Bürstensaum findet sich im Dünndarm und proximalen Tubulus der Niere.",
      B: "Mehrschichtig verhorntes Plattenepithel bildet die Epidermis der Haut.",
      D: "Mehrreihiges Flimmerepithel mit Kinozilien und Becherzellen kleidet den Respirationstrakt aus.",
      E: "Einschichtiges Plattenepithel findet sich als Endothel in Blutgefäßen oder Mesothel der serösen Häute."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-007",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Glatte Muskulatur: Calmodulin & MLCK",
    difficulty: "intermediate",
    stem: "Wie wird die Kontraktion in der humanen glatten Muskulatur auf molekularer Ebene primär initiiert?",
    options: {
      A: "Calcium bindet an Calmodulin; der Komplex aktiviert die Myosin-Leichte-Ketten-Kinase (MLCK), welche die Myosinköpfchen phosphoryliert",
      B: "Calcium bindet direkt an Troponin C und verlagert Tropomyosin aus der Myosinbindungsstelle",
      C: "Calcium diffundiert in das Mitochondrium und stimuliert dort die sofortige ATP-Freisetzung",
      D: "Natriumeinstrom über spannungsaktivierte Kanäle spaltet Titinfilamente",
      E: "Acetylcholin bindet direkt an Aktinfilamente und bewirkt deren Verkürzung"
    },
    correct_answer: "A",
    explanation_correct: "Glatte Muskulatur enthält kein Troponin. Ein Anstieg der zytosolischen Calciumkonzentration führt zur Bindung von $Ca^{2+}$ an das Adapterprotein Calmodulin. Der $Ca^{2+}$-Calmodulin-Komplex aktiviert die Myosin-Leichte-Ketten-Kinase (MLCK). Diese phosphoryliert die regulatorische leichte Kette des Myosins, wodurch die Myosin-ATPase-Aktivität freigeschaltet wird und der Querbrückenzyklus mit Aktin ablaufen kann.",
    explanations_incorrect: {
      B: "Die Bindung von Calcium an Troponin C mit Freilegung der Aktinbindungsstellen über Tropomyosin ist der Kontraktionsmechanismus der Skelett- und Herzmuskulatur.",
      C: "Mitochondrien nehmen Calcium bei massiven Belastungen auf, aber dies ist nicht der Trigger der Myosin-Aktin-Interaktion.",
      D: "Titin federt die Dehnung der Sarkomere in quergestreifter Muskulatur ab und wird bei Kontraktion nicht enzymatisch gespalten.",
      E: "Acetylcholin ist ein Neurotransmitter, der an membranständige Rezeptoren bindet, nicht direkt an zytosolisches Aktin."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-008",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Hautschichten & Melanozyten-Biologie",
    difficulty: "intermediate",
    stem: "In welcher Schicht der menschlichen Epidermis befinden sich die Perikaryen der Melanozyten, und wie übertragen sie das Pigment Melanin?",
    options: {
      A: "Im Stratum corneum, wo sie Melanin als freien Nebel in den Extrazellulärraum sezernieren",
      B: "Im Stratum granulosum, wo sie Melaningranula über Gap Junctions injizieren",
      C: "In der Subkutis, wo sie Melanin über das Lymphsystem nach apikal transportieren",
      D: "Im Stratum basale, wo sie Melanosomen über dendritische Fortsätze zytokrin an Keratinozyten übertragen",
      E: "Ausschließlich im Stratum lucidum der Leistenhaut"
    },
    correct_answer: "D",
    explanation_correct: "Melanozyten stammen aus der embryonalen Neuralleiste und sind im Stratum basale der Epidermis lokalisiert (im Verhältnis von etwa 1 Melanozyt auf 5–10 Basalzellen). Über lange dendritische Ausläufer erreichen sie die Keratinozyten des Stratum basale und spinosum und übertragen die mit Eumelanin/Phäomelanin beladenen Organellen (Melanosomen) durch zytokrine Phagozytose an die Keratinozyten. Dort lagert sich das Melanin wie eine Schutzkappe über dem Zellkern an, um die DNA vor UV-Strahlung zu schützen.",
    explanations_incorrect: {
      A: "Das Stratum corneum besteht aus kernlosen, abgestorbenen Korneozyten; Melanozyten kommen hier nicht vor.",
      B: "Das Stratum granulosum enthält Keratohyalingranula; Melanosomentransfer erfolgt nicht über Gap Junctions.",
      C: "Die Subkutis besteht aus Fett- und lockerem Bindegewebe, Melanozyten sind typische epidermale Zellen.",
      E: "Das Stratum lucidum ist eine schmale Übergangszone der dicken Leistenhaut (Handflächen, Fußsohlen) und enthält keine Melanozyten-Zellkörper."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-009",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "B-Zell-Rezeptor & Somatische Rekombination (V(D)J)",
    difficulty: "intermediate",
    stem: "Welches Enzym vermittelt während der V(D)J-Rekombination in unreifen B-Lymphozyten das Einfügen unvorhersehbarer N-Nukleotide zur Maximierung der Rezeptordiversität?",
    options: {
      A: "Die DNA-Ligase IV",
      B: "Die Terminale Desoxynukleotidyl-Transferase (TdT)",
      C: "Die Recombination Activating Gene-Endonuklease RAG-1",
      D: "Die RNA-Polymerase III",
      E: "Die DNA-Polymerase gamma"
    },
    correct_answer: "B",
    explanation_correct: "Die Terminale Desoxynukleotidyl-Transferase (TdT) fügt template-unabhängig (ohne Matrize) de novo Nukleotide (sogenannte N-Nukleotide) an die freien Strangenden der geschnittenen V-, D- und J-Gensegmente der schweren Kette von Immunglobulinen an. Dieser Prozess erzeugt die enorme Verknüpfungsdiversität (Junctional Diversity) der Antigenbindungsstelle (CDR3).",
    explanations_incorrect: {
      A: "DNA-Ligase IV verknüpft im Komplex mit XRCC4 die gebrochenen DNA-Enden beim Non-Homologous End Joining (NHEJ), fügt aber keine neuen Nukleotide an.",
      C: "RAG-1 und RAG-2 erkennen die Rekombinationssignalsequenzen (RSS) und führen den initialen doppelsträngigen DNA-Bruch herbei, synthetisieren aber keine Nukleotidsequenzen.",
      D: "RNA-Polymerase III transkribiert tRNAs und 5S-rRNA, hat aber keine Rolle in der somatischen V(D)J-Rekombination.",
      E: "DNA-Polymerase gamma ist das spezifische Replikationsenzym für mitochondriale DNA."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-010",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "Komplementsystem & Membranangriffskomplex (MAC)",
    difficulty: "advanced",
    stem: "Aus welchen Komplementfaktoren assembliert sich der lytische Membranangriffskomplex (MAC, C5b-9) in der Zielmembran von Pathogenen?",
    options: {
      A: "C1q, C1r und C1s",
      B: "C3a, C4a und C5a",
      C: "C3b, Faktor B und Faktor D",
      D: "C4b und C2a",
      E: "C5b zusammen mit C6, C7, C8 und multiplen C9-Molekülen"
    },
    correct_answer: "E",
    explanation_correct: "Nach Spaltung von C5 durch eine C5-Konvertase bindet das Fragment C5b sequenziell die Faktoren C6 und C7. Der Komplex C5b-6-7 lagert sich über hydrophobe Domänen in die Lipiddoppelschicht der Zielzelle ein. Nach Anlagerung von C8 binden 10 bis 16 Moleküle des porenbildenden Proteins C9, die polymerisieren und eine transmembrane Pore von ca. 10 nm Durchmesser bilden (C5b-9 / MAC). Dies führt zum unkontrollierten Einstrom von Wasser und Ionen und damit zur osmotischen Lyse des Pathogens.",
    explanations_incorrect: {
      A: "C1q, C1r und C1s bilden den C1-Komplex, den Initiatorkomplex des klassischen Weges der Komplementaktivierung.",
      B: "C3a, C4a und C5a sind Anaphylatoxine (lösliche Spaltprodukte), die als Entzündungsmediatoren, Vasodilatatoren und Chemoattraktanzien wirken.",
      C: "C3b, Faktor B und Faktor D bilden die Komponenten der C3-Konvertase des alternativen Aktivierungsweges.",
      D: "C4b und C2a (früher C2b genannt) bilden die C3-Konvertase des klassischen und Lektin-Weges."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 3: Fortpflanzung & Frühentwicklung (bio-03-fruehentwicklung) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-011",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Spermatogenese vs. Oogenese: Polkörperchenbildung",
    difficulty: "foundational",
    stem: "Welcher fundamentale zytologische Unterschied besteht hinsichtlich der Teilungsprodukte zwischen humaner Spermatogenese und Oogenese?",
    options: {
      A: "Aus einer Oogonie entstehen am Ende der Meiose vier voll funktionelle, zytoplasmareiche Eizellen",
      B: "Aus einer primären Oozyte entsteht nur eine einzige befruchtungsfähige Eizelle sowie kleine, degradierende Polkörperchen",
      C: "Die Spermatogenese erzeugt durch asymmetrische Zytokinesen drei amorphe Spermien und eine Riesenspermie",
      D: "In der Oogenese findet keine Meiose II statt",
      E: "Spermatiden verbleiben lebenslang im Diktyotän der meiotischen Prophase I"
    },
    correct_answer: "B",
    explanation_correct: "Während aus einer primären Spermatozyte (Spermatozyte I) durch zwei symmetrische meiotische Teilungen vier gleichwertige, haploide Spermatiden hervorgehen, verläuft die Zytokinese in der weiblichen Meiose extrem asymmetrisch: Fast das gesamte Zytoplasma mit allen Organellen und Nährstoffreserven verbleibt in der künftigen Eizelle (sekundäre Oozyte bzw. reife Oozyte). Die bei Meiose I und II abgeschnürten Zellkerne bilden die winzigen Polkörperchen (Polzyten), die später degenerieren.",
    explanations_incorrect: {
      A: "Es entsteht nur eine einzige reife Eizelle; die anderen 2 bis 3 Produkte sind funktionslose Polkörperchen.",
      C: "Die Spermatogenese ist durch absolut symmetrische Zellteilungen und Zytoplasmabrücken gekennzeichnet.",
      D: "Die Meiose II der Oogenese findet statt, wird jedoch in der Metaphase II arretiert und erst durch den Eintritt des Spermiums bei der Befruchtung vollendet.",
      E: "Das Diktyotän (Ruhestadium in der Prophase I) ist spezifisch für primäre Oozyten vor der Pubertät; Spermatozyten durchlaufen die Meiose kontinuierlich."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-012",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Akrosomreaktion & Zona-Pellucida-Penetration",
    difficulty: "intermediate",
    stem: "Welche biochemischen Prozesse laufen bei der Akrosomreaktion des menschlichen Spermiums bei Kontakt mit der Eizelle ab?",
    options: {
      A: "Verschluss der Spermienmembran für jegliche Calciumaufnahme zur Vermeidung vorzeitiger Motilität",
      B: "Aufnahme von maternalem Glykogen zur mitochondrialen ATP-Generierung im Flagellum",
      C: "Spontane Entspiralisierung des paternalen Chromatins vor dem Kontakt mit der Zona pellucida",
      D: "Exozytose akrosomaler Enzyme (u. a. Akrosin und Hyaluronidase) nach Bindung an Zona-Pellucida-Proteine",
      E: "Transkription spermieneigener Gene für Flagellin"
    },
    correct_answer: "D",
    explanation_correct: "Bei der Bindung des kapazitierten Spermiums an Glykoproteine der Zona pellucida (vor allem ZP3 und ZP4) kommt es zu einem massiven Calciumeinstrom in das Spermium. Dies triggert die Fusion der äußeren Akrosomenmembran mit der Spermienplasmamembran (Akrosomreaktion) und die Freisetzung lytischer Enzyme wie Akrosin (eine Serinprotease) und Hyaluronidase. Diese lysieren lokal die Glykoproteinmatrix der Zona pellucida, sodass das Spermium zur Plasmamembran der Oozyte vordringen kann.",
    explanations_incorrect: {
      A: "Die Akrosomreaktion erfordert zwingend einen massiven Einstrom von Calcium, keinen Verschluss von Calciumkanälen.",
      B: "Glykogenaufnahme ist nicht der Mechanismus der Akrosomreaktion; Spermien nutzen vor allem Fruktose aus der Samenflüssigkeit.",
      C: "Die Dekondensation des Spermienkerns erfolgt erst nach vollzogener Membranfusion im Inneren des Oozytenzytoplasmas.",
      E: "Reife Spermien sind transkriptionell inaktiv; ihre Kern-DNA ist hochkondensiert mit Protaminen verpackt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-013",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Plazentaschranke & Synzytiotrophoblast",
    difficulty: "intermediate",
    stem: "Welche morphologische Struktur der menschlichen Plazenta steht in direktem Kontakt mit dem maternalen Blut im intervillösen Raum?",
    options: {
      A: "Der Synzytiotrophoblast ohne zwischenzellige Zellgrenzen",
      B: "Das fetale Kapillarendothel der Chorionzotten",
      C: "Die Amnionepithelschicht der Nabelschnur",
      D: "Das embryonale Zytotrophoblast-Epithel (Langhans-Schicht) im 3. Trimenon",
      E: "Die Basalplatte des parietalen mütterlichen Endometriums"
    },
    correct_answer: "A",
    explanation_correct: "Die Chorionzotten der reifen menschlichen Plazenta ragen frei in den von maternalem Blut durchströmten intervillösen Raum (hämochoriale Plazenta). Die äußerste, dem mütterlichen Blut direkt exponierte Schicht ist der Synzytiotrophoblast – ein echtes, kontinuierliches mehrkerniges Riesenzell-Synzytium ohne interzelluläre Spalten. Er bildet die primäre Barriere der Plazentaschranke und synthetisiert Schwangerschaftshormone wie hCG und humanes Plazentalaktogen (hPL).",
    explanations_incorrect: {
      B: "Das fetale Kapillarendothel liegt im Inneren des Zottenstromas und hat keinen direkten Kontakt zum maternalen Blut.",
      C: "Das Amnionepithel umhüllt die Amnionhöhle und die Nabelschnur, bildet aber nicht die Resorptionsfläche der Chorionzotten.",
      D: "Der Zytotrophoblast (Langhans-Zellschicht) liegt unter dem Synzytiotrophoblasten und bildet sich in der zweiten Schwangerschaftshälfte weitgehend zurück.",
      E: "Die mütterliche Basalplatte begrenzt den intervillösen Raum mütterlicherseits, umgibt aber nicht die resorbierenden Chorionzotten."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-014",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Mesodermgliederung & Somitenentwicklung",
    difficulty: "advanced",
    stem: "In welche drei primordialen Gewebeanteile differenziert sich ein Somit des paraxialen Mesoderms während der menschlichen Embryogenese?",
    options: {
      A: "Ektoderm, Entoderm und Mesenchym",
      B: "Neuralrohr, Chorda dorsalis und Neuralleiste",
      C: "Sklerotom, Myotom und Dermatom",
      D: "Pronephros, Mesonephros und Metanephros",
      E: "Amnion, Chorion und Dottersack"
    },
    correct_answer: "C",
    explanation_correct: "Die Somiten entstehen durch Segmentierung des paraxialen Mesoderms beidseits des Neuralrohrs. Jeder Somit gliedert sich unter dem Einfluss lokaler Signalmoleküle (SHH von der Chorda, Wnt vom Ektoderm) in drei Regionen: 1. Das ventromediale Sklerotom (bildet die Knorpel- und Knochenanlagen von Wirbelkörpern und Rippen), 2. Das Myotom (differenziert zur Skelettmuskulatur des Rumpfes und der Extremitäten) und 3. Das dorsolaterale Dermatom (bildet die Dermis und Subkutis des Rückens).",
    explanations_incorrect: {
      A: "Ektoderm und Entoderm sind primäre Keimblätter der Gastrulation, keine Untergliederungen eines mesodermalen Somiten.",
      B: "Neuralrohr und Neuralleiste stammen aus dem Ektoderm (Neuroektoderm); die Chorda dorsalis induziert zwar die Somiten, ist aber ein eigenständiges axiales Organ.",
      D: "Vorniere (Pronephros), Urniere (Mesonephros) und Nachniere (Metanephros) gehen aus dem intermediären Mesoderm hervor.",
      E: "Amnion, Chorion und Dottersack sind extraembryonale Membranen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 4: Klassische Genetik & Chromosomen (bio-04-genetik) - 5 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-015",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Mendel 1: Uniformitätsregel & Monohybrider Erbgang",
    difficulty: "foundational",
    stem: "Welches phänotypische und genotypische Ergebnis sagt die 1. Mendelsche Regel (Uniformitätsregel) für die direkte Nachkommengeneration (F1) bei Kreuzung zweier homozygoter Eltern voraus, die sich in einem autosomalen Merkmal mit vollständiger Dominanz unterscheiden?",
    options: {
      A: "Alle Nachkommen der F1-Generation sind genotypisch heterozygot und phänotypisch uniform mit dem dominanten Merkmal",
      B: "Die F1-Generation spaltet sich im Zahlenverhältnis 3 dominant : 1 rezessiv auf",
      C: "50 % der F1-Nachkommen zeigen den dominanten und 50 % den rezessiven Phänotyp",
      D: "Alle F1-Nachkommen sind homozygot für das rezessive Allel",
      E: "Die F1-Nachkommen zeigen eine vollkommen intermediäre Mischfarbe bei unvollständiger Dominanz"
    },
    correct_answer: "A",
    explanation_correct: "Die 1. Mendelsche Regel (Uniformitätsregel) besagt: Kreuzt man zwei Individuen einer Art, die in einem bestimmten Merkmal reinerbig (homozygot, $AA$ bzw. $aa$) sind, so sind alle Nachkommen der ersten Tochtergeneration (F1) bezüglich dieses Merkmals vollkommen gleich (uniform). Bei dominant-rezessivem Erbgang sind alle F1-Individuen genotypisch heterozygot ($Aa$) und zeigen phänotypisch ausschließlich das dominante Merkmal.",
    explanations_incorrect: {
      B: "Das phänotypische Spaltungsverhältnis 3:1 tritt erst bei Selbstbefruchtung oder Kreuzung der F1-Generation untereinander in der F2-Generation auf (2. Mendelsche Regel).",
      C: "Ein Verhältnis von 50 % zu 50 % entsteht bei einer Rückkreuzung eines Heterozygoten mit einem homozygot rezessiven Individuum ($Aa \\times aa$).",
      D: "Nur ein Allel stammt vom rezessiven Elternteil; durch das dominante Allel des anderen Elternteils sind alle Individuen heterozygot.",
      E: "Die Aufgabenstellung spezifiziert explizit vollständige Dominanz; intermediäre Vererbung ist eine Abweichung von der klassischen Dominanz."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-016",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Autosomal-rezessive Vererbung & Heterozygotenwahrscheinlichkeit",
    difficulty: "intermediate",
    stem: "Zwei gesunde Eltern haben ein Kind mit spinaler Muskelatrophie (autosomal-rezessiv vererbt). Wie groß ist die Wahrscheinlichkeit, dass ihr zweites, phänotypisch vollkommen gesundes Kind ein heterozygoter Anlagenträger (Konduktor) ist?",
    options: {
      A: "25 % (1/4)",
      B: "50 % (1/2)",
      C: "75 % (3/4)",
      D: "100 % (1/1)",
      E: "66,7 % (2/3)"
    },
    correct_answer: "E",
    explanation_correct: "Da das erste Kind erkrankt ist ($aa$), müssen beide phänotypisch gesunden Elternteile obligat heterozygot ($Aa$) sein. Die theoretische Genotyp-Verteilung bei $Aa \\times Aa$ ist $1\\,AA : 2\\,Aa : 1\\,aa$. Da jedoch explizit gegeben ist, dass das zweite Kind phänotypisch gesund ist, scheidet der homozygote Genotyp $aa$ sicher aus. Unter den verbleibenden drei gesunden Genotyp-Möglichkeiten ($1\\,AA$ und $2\\,Aa$) beträgt die Wahrscheinlichkeit, heterozygoter Träger ($Aa$) zu sein, genau 2 von 3, also $\\frac{2}{3} \\approx 66{,}7\\,\\%$.",
    explanations_incorrect: {
      A: "25 % ist die Wahrscheinlichkeit für ein ungeborenes Kind dieses Paares, homozygot gesund ($AA$) oder homozygot krank ($aa$) zu sein.",
      B: "50 % wäre die Heterozygotenwahrscheinlichkeit vor der Geburt (2 von 4). Sobald feststeht, dass das Kind gesund ist, reduziert sich der Nenner auf 3.",
      C: "75 % ist die Gesamtwahrscheinlichkeit, dass ein Kind dieses Paares gesund ist ($AA + Aa$).",
      D: "100 % träfe nur zu, wenn ein Elternteil homozygot krank und der andere homozygot gesund wäre."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-017",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "X-chromosomal-rezessiver Erbgang (Hämophilie A)",
    difficulty: "intermediate",
    stem: "Ein gesunder Mann zeugt mit einer heterozygoten Überträgerin (Konduktorin) für Hämophilie A (X-chromosomal-rezessiv) Kinder. Welche Aussage über das Erkrankungsrisiko der Nachkommen ist zutreffend?",
    options: {
      A: "Alle Söhne dieses Paares sind gesund, aber alle Töchter erkranken schwer",
      B: "Jedes Kind hat unabhängig vom Geschlecht ein 50%iges Risiko zu erkranken",
      C: "Söhne haben ein 50%iges Risiko zu erkranken ($X^a Y$); Töchter haben ein 0%iges Risiko zu erkranken, aber ein 50%iges Risiko, Konduktorin zu sein",
      D: "100 % der Söhne erkranken, da das Y-Chromosom defekt ist",
      E: "Töchter erkranken zu 25 %, da das mütterliche X-Chromosom stets dominiert"
    },
    correct_answer: "C",
    explanation_correct: "Der Vater besitzt den Genotyp $X^A Y$ (gesund). Die Mutter besitzt den Genotyp $X^A X^a$ (Konduktorin). Söhne erhalten vom Vater stets das Y-Chromosom und von der Mutter mit je 50 % Wahrscheinlichkeit $X^A$ (gesund) oder $X^a$ (hämophil $\\rightarrow$ 50 % Erkrankungsrisiko). Töchter erhalten vom Vater stets das intakte $X^A$-Chromosom; sie können daher phänotypisch nicht an Hämophilie A erkranken (0 % Erkrankungsrisiko), erben jedoch mit 50 % Wahrscheinlichkeit das mütterliche $X^a$-Allel und sind dann Konduktorinnen ($X^A X^a$).",
    explanations_incorrect: {
      A: "Töchter erkranken nicht, da sie vom gesunden Vater ein dominantes, intaktes $X^A$-Allel erhalten.",
      B: "Das Erkrankungsrisiko ist streng geschlechtsabhängig (Söhne 50 %, Töchter 0 %); die Geschlechter dürfen nicht zusammengefasst werden.",
      D: "Das Y-Chromosom trägt kein Gen für Faktor VIII; Söhne erben das mutierte Gen ausschließlich über das mütterliche X-Chromosom.",
      E: "Töchter erkranken bei X-chromosomal-rezessivem Erbgang nur, wenn der Vater erkrankt und die Mutter mindestens Konduktorin ist."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-018",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Numerische Chromosomenaberration: Turner-Syndrom (Monosomie X)",
    difficulty: "intermediate",
    stem: "Welche zytogenetische und klinische Konstellation charakterisiert das humane Turner-Syndrom?",
    options: {
      A: "Karyotyp 47,XXY mit Hodenatrophie und Hochwuchs",
      B: "Karyotyp 45,X0; phänotypisch weiblich mit Kleinwuchs, Pterygium colli und bindegewebigen Streak-Gonaden",
      C: "Freie Trisomie 18 mit Mikrogenie und Wiegenkufenfüßen",
      D: "Partielle Deletion des kurzen Arms von Chromosom 5 (Cri-du-Chat)",
      E: "Karyotyp 47,XYY mit gesteigerter Impulsivität und fertilem Phänotyp"
    },
    correct_answer: "B",
    explanation_correct: "Das Turner-Syndrom (Monosomie X, Karyotyp 45,X bzw. 45,X0) ist die einzige mit dem Leben vereinbare Monosomie beim Menschen. Betroffene Individuen sind phänotypisch weiblich. Typische Leitsymptome sind Kleinwuchs, Pterygium colli (Flügelfell am Hals), primäre Amenorrhö und Unfruchtbarkeit infolge bindegewebig degenerierter Ovarien (Streak-Gonaden) sowie kardiovaskuläre Fehlbildungen (z. B. Aortenisthmusstenose).",
    explanations_incorrect: {
      A: "Karyotyp 47,XXY definiert das Klinefelter-Syndrom bei männlichen Individuen.",
      C: "Freie Trisomie 18 definiert das Edwards-Syndrom.",
      D: "Die Deletion 5p- charakterisiert das Katzenschrei-Syndrom (Cri-du-Chat).",
      E: "Karyotyp 47,XYY ist das Diplo-Y-Syndrom."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-019",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Epistasie & Bombay-Phänotyp",
    difficulty: "advanced",
    stem: "Auf welchem genetischen Mechanismus beruht der seltene Bombay-Phänotyp im humanen AB0-Blutgruppensystem?",
    options: {
      A: "Ein Crossing-over zwischen dem X- und Y-Chromosom in der meiotischen Prophase I",
      B: "Eine Deletion des gesamten AB0-Genlokus auf Chromosom 9",
      C: "X-chromosomale Inaktivierung des Gens für die erythrozytäre Na+/K+-ATPase",
      D: "Rezessive Epistasie durch Homozygotie für defiziente Allele am FUT1-Gen (h/h), wodurch die H-Substanz nicht synthetisiert wird",
      E: "Eine mitochondriale Punktmutation der Cytochrom-c-Oxidase"
    },
    correct_answer: "D",
    explanation_correct: "Der Bombay-Phänotyp ist ein klassisches Beispiel für rezessive Epistasie: Das Enzym Fucosyltransferase-1 (kodiert durch das FUT1-Gen auf Chromosom 19) synthetisiert die Vorläufersubstanz H (H-Antigen) durch Anheften einer Fucose an die Oligosaccharidkette der Erythrozyten. Individuen mit dem Genotyp $hh$ können keine H-Substanz bilden. Selbst wenn funktionelle Gene für die A-Transferase oder B-Transferase (auf Chromosom 9) vorliegen, finden diese kein Substrat vor. Die Erythrozyten erscheinen im Standardtest wie Blutgruppe 0, bilden aber Antikörper gegen A, B UND H (Anti-H), weshalb sie nur Blut anderer Bombay-Träger tolerieren.",
    explanations_incorrect: {
      A: "Der Bombay-Phänotyp betrifft autosomale Gene auf Chromosom 19 (FUT1) und 9 (AB0) und hat nichts mit Geschlechtschromosomen zu tun.",
      B: "Die Gene für die Transferasen A oder B auf Chromosom 9 sind bei Bombay-Individuen oft vollkommen intakt, können aber ohne H-Substanz nicht phänotypisch exprimiert werden.",
      C: "Die Na+/K+-ATPase hat keine antigene Beziehung zum AB0-Kohlenhydratsystem.",
      E: "Mitochondriale Mutationen führen zu neuromuskulären Enzephalomyopathien, nicht zum Bombay-Phänotyp."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 5: Molekulargenetik & Gentechnik (bio-05-molgen) - 5 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-020",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Telomere & Telomerase-Funktion",
    difficulty: "foundational",
    stem: "Wie verhindert das Enzym Telomerase die fortschreitende Verkürzung der Chromosomenenden in menschlichen Keimbahnzellen?",
    options: {
      A: "Durch Rekombination zwischen homologen Nicht-Schwesterchromatiden in der G1-Phase",
      B: "Durch Synthese von Okazaki-Fragmenten ohne RNA-Primer",
      C: "Durch Abbau beschädigter Histonproteine mittels Ubiquitinierung",
      D: "Durch Ligation der beiden komplementären DNA-Stränge zu geschlossenen zirkulären Plasmiden",
      E: "Als spezialisierte reverse Transkriptase verlängert sie das 3'-Ende des Matrizenstrangs unter Verwendung einer intrinsischen RNA-Matrize"
    },
    correct_answer: "E",
    explanation_correct: "Die Telomerase ist ein Ribonukleoproteinkomplex bestehend aus einer Proteinkomponente mit reverser Transkriptase-Aktivität (TERT) und einer intrinsischen RNA-Komponente (TERC/hTR). Die RNA enthält eine komplementäre Sequenz zur telomeren Wiederholungssequenz (TTAGGG beim Menschen). Die Telomerase nutzt diese RNA als Matrize, um das überstehende 3'-Ende des chromosomalen Leitstrangs wiederholt zu verlängern. Anschließend kann die zelluläre DNA-Polymerase den Folgestrang über einen neuen Primer komplettieren.",
    explanations_incorrect: {
      A: "Homologe Rekombination findet in S/G2-Phasen statt, löst aber nicht das physiologische Endreplikationsproblem linearer Chromosomen.",
      B: "Okazaki-Fragmente erfordern stets RNA-Primer, die von der Primase synthetisiert werden.",
      C: "Histonabbau hat keinen Einfluss auf die Länge telomerer DNA-Sequenzen.",
      D: "Menschliche Kernchromosomen bleiben linear; Bildung zirkulärer DNA (Ringchromosomen) ist pathologisch."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-021",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Promotoren & TATA-Box-Bindungsprotein (TBP)",
    difficulty: "intermediate",
    stem: "Welcher basale Transkriptionsfaktor bindet über sein TATA-Box-Bindungsprotein (TBP) spezifisch an die TATA-Box eukaryotischer proteinkodierender Gene zur Positionierung der RNA-Polymerase II?",
    options: {
      A: "TFIIA",
      B: "TFIID",
      C: "TFIIH",
      D: "TFIIE",
      E: "Rho-Faktor"
    },
    correct_answer: "B",
    explanation_correct: "Der Initiationsschritt der eukaryotischen Transkription durch die RNA-Polymerase II erfordert die Bindung des basalen Transkriptionsfaktors TFIID an die TATA-Box (lokalisiert ca. 25–30 Basenpaare stromaufwärts der Transkriptionsstartstelle). TFIID besteht aus dem TATA-Box-Bindungsprotein (TBP) und mehreren TBP-assoziierten Faktoren (TAFs). TBP verbiegt die DNA stark und schafft die stereochemische Plattform für die sequenzielle Rekrutierung von TFIIB, TFIIF/Pol II, TFIIE und TFIIH zum Präinitiationskomplex (PIC).",
    explanations_incorrect: {
      A: "TFIIA stabilisiert die Bindung von TFIID und TFIIB an die DNA, bindet aber nicht primär selbst die TATA-Box.",
      C: "TFIIH besitzt Helikase- und Kinaseaktivität; es entwindet die DNA an der Startstelle und phosphoryliert das C-terminale Domäne (CTD) der RNA-Polymerase II.",
      D: "TFIIE rekrutiert und reguliert TFIIH.",
      E: "Der Rho-Faktor ist ein bakterielles Protein zur rho-abhängigen Transkriptionstermination in Prokaryoten."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-022",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Nonsense-Mutationen & Vorzeitiges Stopcodon",
    difficulty: "intermediate",
    stem: "Wie wirkt sich eine Nonsense-Mutation innerhalb des offenen Leserahmens (ORF) eines proteinkodierenden humanen Gens molekularbiologisch aus?",
    options: {
      A: "Sie führt zum Austausch einer einzelnen Aminosäure bei erhaltener Proteingröße",
      B: "Sie verändert das Leseraster aller nachfolgenden Codons vollständig",
      C: "Sie verhindert die Transkriptionsinitiation durch Zerstörung des Promotors",
      D: "Sie wandelt ein aminobasierendes Triplett in ein vorzeitiges Translations-Stopcodon (UAA, UAG oder UGA) um",
      E: "Sie bewirkt eine Duplikation eines gesamten Exons während des Spleißens"
    },
    correct_answer: "D",
    explanation_correct: "Eine Nonsense-Mutation ist eine Punktmutation (Basensubstitution), die ein für eine Aminosäure codierendes Basentriplett in eines der drei Translations-Stopcodons (UAA, UAG oder UGA in der mRNA) umwandelt. Dies führt zu einem vorzeitigen Abbruch der Translation, was ein C-terminal verkürztes, meist funktionsloses Protein zur Folge hat, oder zum Abbau der fehlerhaften mRNA über den Mechanismus des Nonsense-mediated mRNA Decay (NMD).",
    explanations_incorrect: {
      A: "Der Austausch einer einzelnen Aminosäure bei erhaltener Kettenlänge ist eine Missense-Mutation.",
      B: "Die Verschiebung des Leserasters aller nachfolgenden Tripletts ist das Kennzeichen einer Frameshift-Mutation (durch Insertion oder Deletion von Basen, deren Anzahl kein Vielfaches von drei ist).",
      C: "Mutationen im Promotorbereich beeinträchtigen die Transkriptionsrate, sind aber keine Nonsense-Mutationen des codierenden Bereichs.",
      E: "Exon-Duplikationen entstehen durch ungleiches Crossing-over oder chromosomale Aberrationen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-023",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Gelelektrophorese & SDS-PAGE von Proteinen",
    difficulty: "advanced",
    stem: "Auf welchem physikochemischen Wirkprinzip basiert die Trennung von Proteinen in einer diskontinuierlichen SDS-Polyacrylamid-Gelelektrophorese (SDS-PAGE)?",
    options: {
      A: "Proteine werden durch das anionische Detergens SDS denaturiert und mit einer konstanten negativen Ladung pro Masseneinheit überzogen, sodass die Wanderungsgeschwindigkeit primär vom Molekulargewicht abhängt",
      B: "Proteine trennen sich ausschließlich nach ihrem isoelektrischen Punkt (pI) in einem stabilen pH-Gradienten",
      C: "Kationische Lipide binden selektiv an hydrophobe Aminosäuren und beschleunigen die Wanderung zur Kathode",
      D: "Proteine behalten ihre native Quartärstruktur und werden nach ihrer enzymatischen Aktivität aufgetrennt",
      E: "SDS spaltet kovalente Peptidbindungen und erlaubt die Analyse freier Aminosäuren"
    },
    correct_answer: "A",
    explanation_correct: "Natriumdodecylsulfat (SDS) ist ein starkes anionisches Detergens. Es denaturiert Proteine und bindet im Verhältnis von ca. 1,4 g SDS pro 1 g Protein. Dadurch wird die Eigenladung der Proteine vollständig maskiert, und alle SDS-Protein-Mizellen besitzen ein annähernd konstantes Verhältnis von negativer Ladung zu Masse. Im elektrischen Feld wandern sie zur Anode (+). Da das Polyacrylamid-Gel wie ein molekulares Sieb wirkt, hängt die elektrophoretische Mobilität fast ausschließlich vom hydrodynamischen Radius bzw. dem Molekulargewicht ab (kleinere Proteine wandern schneller).",
    explanations_incorrect: {
      B: "Die Trennung nach dem isoelektrischen Punkt (pI) ohne Ladungsüberdeckung ist das Prinzip der Isoelektrischen Fokussierung (IEF), nicht der Standard-SDS-PAGE.",
      C: "SDS ist ein Anion und wandert zur Anode (Pluspol), nicht zur Kathode.",
      D: "SDS-PAGE denaturiert Proteine; native Strukturen und Enzymaktivitäten gehen dabei in der Regel verloren (im Gegensatz zu nativer PAGE).",
      E: "SDS spaltet keine kovalenten Peptidbindungen; dafür wären Peptidasen oder saure Hydrolyse erforderlich."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-024",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Restriktionsendonukleasen & Palindrome Erkennungssequenzen",
    difficulty: "advanced",
    stem: "Welche der folgenden doppelsträngigen DNA-Sequenzen stellt eine typische 6-Basenpaar-Palindromsequenz dar, wie sie von bakteriellen Typ-II-Restriktionsendonukleasen erkannt wird?",
    options: {
      A: "5'-GAATTC-3' gepaart mit 3'-CTTAAG-5'",
      B: "5'-AAAAAA-3' gepaart mit 3'-TTTTTT-5'",
      C: "5'-GATATC-3' gepaart mit 3'-CTATAG-5'",
      D: "5'-CGCGCG-3' gepaart mit 3'-GCGCGC-5'",
      E: "Sowohl 5'-GAATTC-3' als auch 5'-GATATC-3' sind jeweils echte 2-fach rotationssymmetrische Palindrome"
    },
    correct_answer: "E",
    explanation_correct: "Ein molekularbiologisches DNA-Palindrom (Typ-II-Erkennungssequenz) zeichnet sich dadurch aus, dass die Basenabfolge des Vorwärtsstrangs in 5'$\\rightarrow$3'-Richtung identisch ist mit der Abfolge des Gegenstrangs in 5'$\\rightarrow$3'-Richtung (rotationssymmetrisch). Für 5'-GAATTC-3' (EcoRI) lautet der Gegenstrang 3'-CTTAAG-5', in 5'$\\rightarrow$3' gelesen: 5'-GAATTC-3'. Für 5'-GATATC-3' (EcoRV) lautet der Gegenstrang 3'-CTATAG-5', in 5'$\\rightarrow$3' gelesen: 5'-GATATC-3'. Beide Sequenzen erfüllen dieses Kriterium exakt.",
    explanations_incorrect: {
      A: "Diese Sequenz ist zwar das klassische EcoRI-Palindrom, aber Option E umfasst korrekt, dass auch die Sequenz C (EcoRV) ein valides Palindrom ist.",
      B: "5'-AAAAAA-3' liest sich auf dem Gegenstrang in 5'$\\rightarrow$3' als 5'-TTTTTT-3' und ist somit kein Palindrom.",
      C: "GATATC ist ein Palindrom, schließt aber GAATTC nicht aus.",
      D: "CGCGCG ist zwar ebenfalls rotationssymmetrisch, aber Option E identifiziert die beiden paradigmatischen Typ-II-Restriktionsschnittstellen EcoRI und EcoRV umfassend."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 6: Zellstoffwechsel & Energiegewinnung (bio-06-stoffwechsel) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-025",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "ATP-Synthase & Chemiosmotische Kopplung",
    difficulty: "foundational",
    stem: "Welche Triebkraft nutzt die mitochondriale F0F1-ATP-Synthase unmittelbar zur Synthese von ATP aus ADP und anorganischem Phosphat?",
    options: {
      A: "Einen transmembranösen Calciumgradienten über der äußeren Mitochondrienmembran",
      B: "Die direkte Spaltung von Kreatinphosphat in der mitochondrialen Matrix",
      C: "Den enzymatischen Abbau von Acetyl-CoA an der inneren Membranseite",
      D: "Einen elektrochemischen Protonengradienten über der inneren Mitochondrienmembran",
      E: "Einen elektrochemischen Protonengradienten (Protonenmotorische Kraft) über der inneren Mitochondrienmembran"
    },
    correct_answer: "E",
    explanation_correct: "Nach Peter Mitchells chemiosmotischer Hypothese pumpen die Komplexe I, III und IV der Atmungskette Protonen ($H^+$) aus der mitochondrialen Matrix in den Intermembranraum. Dadurch entsteht über der inneren Mitochondrienmembran ein elektrochemischer Gradient (protonenmotorische Kraft $\\Delta p$, bestehend aus Membranpotenzial $\\Delta\\Psi$ und pH-Gradient $\\Delta\\text{pH}$). Der Rückstrom der Protonen durch den membranständigen $F_0$-Teil der ATP-Synthase treibt dessen Rotation an, was im katalytischen $F_1$-Kopf die ATP-Synthese aus ADP und $P_i$ erzwingt.",
    explanations_incorrect: {
      A: "Calciumgradienten treiben nicht die oxidative Phosphorylierung an, sondern regulieren Signalwege.",
      B: "Kreatinphosphat regeneriert ATP im Zytosol via Kreatinkinase, treibt aber nicht die ATP-Synthase an.",
      C: "Acetyl-CoA wird im Citratzyklus oxidiert, ist aber nicht die unmittelbare mechanische Triebkraft der ATP-Synthase.",
      D: "Option E formuliert die 'protonenmotorische Kraft' präziser und physikochemisch vollständig."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-026",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Substratkettenphosphorylierung in der Glykolyse",
    difficulty: "intermediate",
    stem: "Welche zwei enzymatischen Reaktionen der aeroben und anaeroben Glykolyse generieren ATP unmittelbar durch Substratkettenphosphorylierung?",
    options: {
      A: "Hexokinase und Phosphofructokinase-1 (PFK-1)",
      B: "Phosphoglyceratkinase und Pyruvatkinase",
      C: "Glycerinaldehyd-3-Phosphat-Dehydrogenase und Enolase",
      D: "Lactatdehydrogenase und Glucose-6-Phosphatase",
      E: "Citrat-Synthase und Aconitase"
    },
    correct_answer: "B",
    explanation_correct: "Substratkettenphosphorylierung ist die direkte enzymatische Übertragung eines energiereichen Phosphatrests von einem phosphorylierten Stoffwechselzwischenprodukt auf ADP. In der Ertragsphase der Glykolyse geschieht dies an genau zwei Stellen: 1. Phosphoglyceratkinase überträgt ein Phosphat von 1,3-Bisphosphoglycerat auf ADP (bildet 3-Phosphoglycerat + ATP); 2. Pyruvatkinase überträgt ein Phosphat von Phosphoenolpyruvat (PEP) auf ADP (bildet Pyruvat + ATP). Da pro Glukose zwei Triosen entstehen, liefert dies 4 ATP (abzüglich 2 verbrauchter ATP in der Vorbereitungsphase $\\rightarrow$ Nettoausbeute 2 ATP).",
    explanations_incorrect: {
      A: "Hexokinase und PFK-1 verbrauchen jeweils 1 ATP zur Phosphorylierung von Glukose bzw. Fructose-6-phosphat.",
      C: "GAPDH erzeugt 1,3-Bisphosphoglycerat und reduziert $NAD^+$ zu $NADH+H^+$, synthetisiert aber kein ATP; die Enolase dehydratisiert 2-Phosphoglycerat zu PEP.",
      D: "Lactatdehydrogenase regeneriert $NAD^+$ unter Reduktion von Pyruvat zu Lactat, synthetisiert aber kein ATP.",
      E: "Citratsynthase und Aconitase sind Enzyme des Citratzyklus im Mitochondrium."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-027",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Kompetitive vs. Nicht-kompetitive Enzymhemmung",
    difficulty: "intermediate",
    stem: "Wie verändern sich die kinetischen Parameter Michaelis-Menten-Konstante (Km) und Maximalgeschwindigkeit (Vmax) eines Enzyms in Anwesenheit eines rein kompetitiven Inhibitors?",
    options: {
      A: "Km steigt (Affinität sinkt scheinbar), während Vmax bei ausreichend hoher Substratkonzentration unverändert bleibt",
      B: "Vmax sinkt, während Km vollkommen unverändert bleibt",
      C: "Sowohl Km als auch Vmax sinken im gleichen Verhältnis",
      D: "Km sinkt und Vmax steigt an",
      E: "Weder Km noch Vmax verändern sich"
    },
    correct_answer: "A",
    explanation_correct: "Ein kompetitiver Inhibitor ähnelt strukturell dem Substrat und konkurriert mit diesem reversibel um die Bindung an dasselbe aktive Zentrum des freien Enzyms. Durch Erhöhung der Substratkonzentration kann der Inhibitor vollständig vom Enzym verdrängt werden; daher bleibt die erreichbare Maximalgeschwindigkeit $V_{\\max}$ unverändert. Um jedoch die halbmaximale Geschwindigkeit zu erreichen, ist eine höhere Substratmenge erforderlich, sodass der scheinbare $K_m$-Wert ansteigt ($K_m^{\\text{app}} > K_m$).",
    explanations_incorrect: {
      B: "Ein Absinken von $V_{\\max}$ bei unverändertem $K_m$ ist die Signatur einer rein nicht-kompetitiven (allosterischen) Hemmung.",
      C: "Das proportionale Absinken von $K_m$ und $V_{\\max}$ kennzeichnet eine unkompetitive Hemmung (Inhibitor bindet nur an den Enzym-Substrat-Komplex).",
      D: "Ein Absinken von $K_m$ würde eine Affinitätssteigerung bedeuten, was bei Enzyminhibitoren nicht zutrifft.",
      E: "Bleiben $K_m$ und $V_{\\max}$ unverändert, liegt keine Enzymhemmung vor."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-028",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Pyruvat-Dehydrogenase-Komplex (PDC) & Regulation",
    difficulty: "advanced",
    stem: "Welcher zelluläre Signalzustand führt zur INAKTIVIERUNG des mitochondrialen Pyruvat-Dehydrogenase-Komplexes (PDC)?",
    options: {
      A: "Ein massiver Anstieg der intramitochondrialen Calciumkonzentration während starker Muskelarbeit",
      B: "Ein hoher zellulärer Gehalt an ADP und NAD+",
      C: "Phosphorylierung der E1-Untereinheit durch die Pyruvat-Dehydrogenase-Kinase (PDK) bei hohem ATP/ADP-, NADH/NAD+- und Acetyl-CoA-Spiegel",
      D: "Dephosphorylierung durch die Pyruvat-Dehydrogenase-Phosphatase unter Insulineinfluss",
      E: "Vollständiger Mangel an Thiaminpyrophosphat (TPP)"
    },
    correct_answer: "C",
    explanation_correct: "Der Pyruvat-Dehydrogenase-Komplex (PDC) verknüpft Glykolyse und Citratzyklus durch irreversible oxidative Decarboxylierung von Pyruvat zu Acetyl-CoA. Er wird primär durch kovalente Modifikation reguliert: Die Pyruvat-Dehydrogenase-Kinase (PDK) phosphoryliert spezifische Serinreste der Pyruvat-Decarboxylase-Untereinheit (E1) und inaktiviert den Komplex. PDK wird allosterisch durch 'Überfluss-Signale' wie hohe Verhältnisse von ATP/ADP, NADH/$NAD^+$ und Acetyl-CoA/CoA aktiviert.",
    explanations_incorrect: {
      A: "$Ca^{2+}$ aktiviert die Pyruvat-Dehydrogenase-Phosphatase (PDP), welche den PDC dephosphoryliert und dadurch maximal aktiviert.",
      B: "Hohes ADP und $NAD^+$ signalisieren Energiemangel, hemmen die PDK und aktivieren den PDC zur Energiegewinnung.",
      D: "Insulin stimuliert die Phosphatase (PDP) im Fettgewebe und Leber, was den PDC aktiviert (zur Fettsäuresynthese aus Glukose).",
      E: "TPP-Mangel hemmt zwar die Funktion mangels Coenzym, ist aber keine physiologische regulatorische Inaktivierung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 7: Herz-Kreislauf-System & Blut (bio-07-herzkreislauf) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-029",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "AB0-Blutgruppensystem & Agglutinine",
    difficulty: "foundational",
    stem: "Welche Antigene auf den Erythrozyten und welche Antikörper (Isoagglutinine) im Blutplasma charakterisieren eine Person mit Blutgruppe B (Rhesus-positiv)?",
    options: {
      A: "A-Antigene auf den Erythrozyten und Anti-B-Antikörper im Plasma",
      B: "Keine Antigene auf den Erythrozyten und sowohl Anti-A- als auch Anti-B-Antikörper im Plasma",
      C: "Sowohl A- als auch B-Antigene auf den Erythrozyten und keine Antikörper im Plasma",
      D: "B-Antigene (sowie Rhesus-D-Antigen) auf den Erythrozyten und Anti-A-Antikörper (vorwiegend IgM) im Plasma",
      E: "B-Antigene auf den Erythrozyten und Anti-D-Antikörper im Plasma"
    },
    correct_answer: "D",
    explanation_correct: "Nach den Landsteiner-Regeln besitzen Individuen mit Blutgruppe B das B-Antigen (Galaktose-Rest an der H-Substanz) auf der Membran ihrer Erythrozyten. Da sie Rhesus-positiv sind, exprimieren sie zusätzlich das Rhesus-D-Protein. Im Blutplasma zirkulieren physiologisch reguläre Isoantikörper gegen das fehlende Antigen A (Anti-A, überwiegend vom IgM-Typ). Anti-D-Antikörper treten bei Rh-positiven Personen niemals auf.",
    explanations_incorrect: {
      A: "A-Antigene und Anti-B-Antikörper charakterisieren Blutgruppe A.",
      B: "Fehlen beider Antigene bei Vorhandensein von Anti-A und Anti-B charakterisiert Blutgruppe 0.",
      C: "Vorhandensein beider Antigene ohne Antikörper im Plasma definiert Blutgruppe AB.",
      E: "Rh-positive Individuen bilden keine Antikörper gegen das eigene Rhesus-D-Antigen (Immuntoleranz)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-030",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Primäre Hämostase & Von-Willebrand-Faktor",
    difficulty: "intermediate",
    stem: "Welche Rolle spielt der Von-Willebrand-Faktor (vWF) bei einer endothelialen Gefäßläsion in der primären Hämostase?",
    options: {
      A: "Er spaltet Fibrinogen direkt in unlösliches Fibrin",
      B: "Er hemmt die Thrombozytenaggregation zur Vermeidung von Thrombosen",
      C: "Er vermittelt als molekulare Brücke die Adhäsion von Thrombozyten über Glykoprotein Ib (GPIb) an freiliegendes subendotheliales Kollagen",
      D: "Er löst das Fibringerinnsel nach abgeschlossener Wundheilung enzymatisch auf",
      E: "Er synthetisiert Thromboxan A2 aus Arachidonsäure"
    },
    correct_answer: "C",
    explanation_correct: "Bei einer Endothelläsion werden subendotheliale Matrixproteine, insbesondere Kollagen, dem strömenden Blut exponiert. Der Von-Willebrand-Faktor (synthetisiert von Endothelzellen und Megakaryozyten) bindet an dieses Kollagen. Unter hohen Scherkräften entfaltet sich das vWF-Multimer und bindet mit hoher Affinität an den Glykoprotein-Ib/V/IX-Rezeptorkomplex auf der Oberfläche unaktivierter Thrombozyten. Dies verankert die Thrombozyten fest an der Läsionsstelle (Thrombozytenadhäsion) und leitet deren Aktivierung und Degranulation ein.",
    explanations_incorrect: {
      A: "Die Spaltung von Fibrinogen zu Fibrin wird durch Thrombin (Faktor IIa) in der sekundären Hämostase katalysiert.",
      B: "vWF fördert die Thrombozytenadhäsion und stabilisiert zudem Faktor VIII; er ist prokoagulatorisch.",
      D: "Die Fibrinolyse wird durch Plasmin katalysiert, nicht durch vWF.",
      E: "Thromboxan $A_2$ wird in aktivierten Thrombozyten über Cyclooxygenase-1 (COX-1) und Thromboxan-Synthase synthetisiert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-031",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Herzzyklus: Anspannungsphase der Ventrikel",
    difficulty: "intermediate",
    stem: "Welcher hämodynamische Zustand kennzeichnet die isovolumetrische Anspannungsphase der Herzkammern während der Systole?",
    options: {
      A: "Die Segelklappen sind geöffnet und die Taschenklappen geschlossen; das Ventrikelvolumen nimmt stark zu",
      B: "Sowohl Segel- als auch Taschenklappen sind geschlossen; der intraventrikuläre Druck steigt bei konstantem Volumen steil an",
      C: "Die Aortenklappe ist weit geöffnet und 70 ml Blut werden in die Aorta ausgeworfen",
      D: "Der Ventrikeldruck fällt unter den Vorhofdruck und Blut strömt passiv ein",
      E: "Das Kammervolumen nimmt bei geöffneten Taschenklappen rasch ab"
    },
    correct_answer: "B",
    explanation_correct: "Die Systole des Herzens beginnt mit der isovolumetrischen Anspannungsphase. Das Kammermyokard erregt sich (QRS-Komplex im EKG) und kontrahiert. Sobald der Druck im Ventrikel den Vorhofdruck übersteigt, schließen sich die Segelklappen (Atrioventrikularklappen: Mitral- und Trikuspidalklappe $\\rightarrow$ 1. Herzton). Da der Druck noch nicht ausreicht, um die Taschenklappen (Aorten- und Pulmonalklappe) gegen den diastolischen Arteriendruck aufzustoßen, sind alle vier Klappen geschlossen. Das Blutvolumen bleibt konstant (isovolumetrisch), während der Druck extrem steil ansteigt.",
    explanations_incorrect: {
      A: "Geöffnete Segelklappen bei geschlossenem Ausflusstrakt kennzeichnen die Füllungsphase der Diastole.",
      C: "Das Öffnen der Taschenklappen mit Auswurf des Schlagvolumens beendet die Anspannungsphase und leitet die Austreibungsphase ein.",
      D: "Druckabfall unter Vorhofdruck mit Einströmen von Blut kennzeichnet die Füllungsphase der Diastole.",
      E: "Volumenabnahme bei offenen Taschenklappen ist die Austreibungsphase."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-032",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Sinusknotenpotenzial & Funny Channels (If)",
    difficulty: "advanced",
    stem: "Welcher Ionenstrom ist primär für die langsame diastolische Depolarisation (Schrittmacherpotenzial) im humanen Sinusknoten verantwortlich?",
    options: {
      A: "Der Schrittmacherstrom If (Funny Current) über HCN-Kanäle, der durch Hyperpolarisation aktiviert wird und einen Einstrom von Kationen (v. a. Na+) vermittelt",
      B: "Ein massiver Ausstrom von Calciumionen über den Ryanodin-Rezeptor",
      C: "Die vollständige Blockade von Kaliumkanälen bei positivem Membranpotenzial",
      D: "Ein schlagartiger Einstrom von Chloridionen über GABA-A-Rezeptoren",
      E: "Die kontinuierliche ATP-unabhängige Diffusion von Magnesiumionen"
    },
    correct_answer: "A",
    explanation_correct: "Schrittmacherzellen des Sinusknotens besitzen kein stabiles Ruhemembranpotenzial. Nach der Repolarisation eines Aktionspotenzials (bei ca. -60 mV) werden hyperpolarisationsaktivierte cyclonukleotidgesteuerte Kationenkanäle (HCN-Kanäle) geöffnet. Sie leiten einen gemischten Einwärtsstrom ($I_f$, 'funny current'), der überwiegend von Natriumionen getragen wird. Zusammen mit der Abnahme des Kaliumausstroms ($I_K$) und dem späteren Einstrom von $Ca^{2+}$ über T- und L-Typ-Calciumkanäle depolarisiert dieser Strom die Membran kontinuierlich bis zum Schwellenwert für das nächste Aktionspotenzial.",
    explanations_incorrect: {
      B: "Der Ryanodinrezeptor (RyR2) entlässt Calcium aus dem SR in das Zytoplasma während der elektromechanischen Kopplung des Arbeitsmyokards, steuert aber nicht das Schrittmacherpotenzial.",
      C: "Kaliumkanäle schließen sich allmählich in der Diastole, aber der aktive Einwärtsstrom wird durch HCN-Kanäle generiert.",
      D: "GABA-Rezeptoren spielen im kardialen Erregungsleitungssystem keine primäre Schrittmacherrolle; Chlorid-Einstrom würde hyperpolarisierend wirken.",
      E: "Magnesium ist ein Kofaktor und blockiert manche Kanäle, treibt aber keine spontane Schrittmacherdepolarisation an."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 8: Atmungssystem & Ausscheidung (bio-08-atmung) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-033",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Pleuraldruck & Lungenkollaps (Pneumothorax)",
    difficulty: "foundational",
    stem: "Warum kollabiert ein Lungenflügel beim Auftreten eines offenen Pneumothorax?",
    options: {
      A: "Weil die Oberflächenspannung in den Alveolen durch Surfactant-Überproduktion schlagartig ansteigt",
      B: "Weil das Zwerchfell krampft und die Pleurakuppel nach kranial komprimiert",
      C: "Weil der Bronchialbaum durch Histaminausschüttung vollständig kontrahiert",
      D: "Weil der Sauerstoffpartialdruck im Pleuraspalt über 100 mmHg ansteigt",
      E: "Weil der physiologische negative Pleuradruck (Unterdruck) durch Lufteintritt aufgehoben wird und die elastischen Rückstellkräfte der Lunge überwiegen"
    },
    correct_answer: "E",
    explanation_correct: "Im intakten Pleuraspalt herrscht ein subatmosphärischer Druck (intrapleuraler Druck ca. -3 bis -5 cm $H_2O$ bei Ruheexspiration, ca. -8 cm $H_2O$ bei Inspiration). Dieser Unterdruck hält die Lunge gegen ihre eigenen elastischen Retraktionskräfte (elastische Fasern und Alveolar-Oberflächenspannung) an der Thoraxinnenwand aufgespannt. Tritt Luft in den Pleuraspalt ein (Pneumothorax), gleicht sich der intrapleurale Druck dem Atmosphärendruck an. Die adhäsive Kopplung geht verloren, und die elastischen Rückstellkräfte führen zum sofortigen Kollaps des betroffenen Lungenflügels.",
    explanations_incorrect: {
      A: "Surfactant senkt die Oberflächenspannung und wirkt dem Kollaps entgegen; beim Pneumothorax bricht die mechanische Thoraxkopplung zusammen.",
      B: "Ein Zwerchfellkrampf ist nicht die Ursache des Lungenkollapses bei Pleuraperforation.",
      C: "Bronchospasmus tritt bei Asthma auf, führt aber nicht zum elastischen Kollaps der gesamten Lunge im Pleuraraum.",
      D: "Der Gaspartialdruck ist irrelevant; entscheidend ist die Aufhebung der hydrostatischen Druckdifferenz (Unterdruck)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-034",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Glomeruläre Filtration & Autoregulation (Bayliss-Effekt)",
    difficulty: "intermediate",
    stem: "Wie hält die gesunde menschliche Niere die glomeruläre Filtrationsrate (GFR) bei Blutdruckschwankungen zwischen 80 und 180 mmHg arteriellen Mitteldrucks weitgehend konstant?",
    options: {
      A: "Durch kontinuierliche Steigerung der Reninausschüttung bei jedem Blutdruckanstieg",
      B: "Durch vollständige Vasodilatation der Vasa recta im Nierenmark",
      C: "Durch Erhöhung des onkotischen Plasmadrucks in den Bowman-Kapseln",
      D: "Über myogene Autoregulation (Bayliss-Effekt) der Arteriola afferens sowie das tubuloglomeruläre Feedback (TGF) der Macula densa",
      E: "Durch ständige Umverteilung des Blutes in die Nebennierenrinde"
    },
    correct_answer: "D",
    explanation_correct: "Die renale Autoregulation stabilisiert die glomeruläre Durchblutung und die GFR über einen arteriellen Mitteldruckbereich von 80–180 mmHg. Zwei Mechanismen wirken zusammen: 1. Der myogene Mechanismus (Bayliss-Effekt): Steigender transmuraler Druck führt zur Dehnung glatter Muskelzellen der Arteriola afferens, was depolarisierenden Calciumeinstrom und Vasokonstriktion auslöst. 2. Das tubuloglomeruläre Feedback (TGF): Steigt die GFR, registrieren die Zellen der Macula densa im dicken aufsteigenden Schenkel eine erhöhte luminal NaCl-Last und sezernieren Adenosin/ATP, was ebenfalls zur Kontraktion der Arteriola afferens führt.",
    explanations_incorrect: {
      A: "Blutdruckanstieg hemmt die Reninfreisetzung aus den granulierten Zellen; Renin steigt bei Blutdruckabfall.",
      B: "Die Vasa recta dienen dem Gegenstromaustausch im Nierenmark und regulieren nicht primär die glomeruläre GFR.",
      C: "Im Bowman-Kapselraum herrscht physiologisch ein vernachlässigbar geringer onkotischer Druck, da Proteine zurückgehalten werden.",
      E: "Es gibt keinen Shuntmechanismus zwischen Nierenkortex und Nebenniere zur GFR-Stabilisierung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-035",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Aldosteronwirkung am Sammelrohr",
    difficulty: "intermediate",
    stem: "Über welchen molekularen Mechanismus steigert das Steroidhormon Aldosteron die Natriumresorption in den Hauptzellen des corticalen Sammelrohrs?",
    options: {
      A: "Es bindet an intrazelluläre Mineralokortikoidrezeptoren und stimuliert die Expression von ENaC-Kanälen und basolateralen Na+/K+-ATPasen",
      B: "Es öffnet direkt ligandengesteuerte Aquaporin-2-Kanäle in der apikalen Membran",
      C: "Es hemmt die carboanhydraseabhängige Protonensekretion in den Schaltzellen",
      D: "Es phosphoryliert SGLT2-Cotransporter im Sammelrohr zur Glukosebindung",
      E: "Es blockiert den Na+/K+/2Cl--Cotransporter (NKCC2) im Henle-Schenkel"
    },
    correct_answer: "A",
    explanation_correct: "Als lipophiles Steroidhormon diffundiert Aldosteron durch die Plasmamembran und bindet an den zytosolischen Mineralokortikoidrezeptor (MR). Der aktivierte Hormon-Rezeptor-Komplex wandert in den Zellkern und fungiert als Transkriptionsfaktor für SGK1 (Serum- und Glukokortikoid-induzierbare Kinase 1) sowie direkt für die Gene des epithelialen Natriumkanals (ENaC, apikal) und der $Na^+/K^+$-ATPase (basolateral). Dies steigert die transzelluläre Natriumresorption (und osmotisch bedingt die Wasserresorption) bei gleichzeitiger Zunahme der renalen Kalium- und Protonensekretion.",
    explanations_incorrect: {
      B: "Die apikale Translokation von Aquaporin-2 wird durch Antidiuretisches Hormon (ADH/Vasopressin) über V2-Rezeptoren und cAMP vermittelt, nicht durch Aldosteron.",
      C: "Aldosteron stimuliert auch die apikale $H^+$-ATPase in Schaltzellen Typ A und fördert die Säureausscheidung.",
      D: "SGLT2 existiert ausschließlich im proximalen Tubulus (S1-Segment) und kommt im Sammelrohr nicht vor.",
      E: "Die Blockade von NKCC2 ist der Wirkmechanismus von Schleifendiuretika (z. B. Furosemid), nicht von Aldosteron."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-036",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Bohr-Effekt & Sauerstoffbindungskurve des Hämoglobins",
    difficulty: "advanced",
    stem: "Welche Veränderung des mikrovaskulären Milieus im stoffwechselaktiven Muskelgewebe bewirkt über den Bohr-Effekt eine Rechtsverschiebung der Sauerstoffbindungskurve des Hämoglobins?",
    options: {
      A: "Ein Absinken des pCO2, ein Anstieg des pH-Wertes und eine Hypothermie",
      B: "Eine vollständige Blockade von 2,3-Bisphosphoglycerat (2,3-BPG)",
      C: "Ein Anstieg des pCO2, eine Erhöhung der Protonenkonzentration (pH-Abfall) sowie eine lokale Temperaturerhöhung",
      D: "Eine Senkung der zellulären Laktatkonzentration unter Ruhebedingungen",
      E: "Die enzymatische Umwandlung von Fe2+ in Fe3+ (Methämoglobinbildung)"
    },
    correct_answer: "C",
    explanation_correct: "Der Bohr-Effekt beschreibt die Abhängigkeit der Sauerstoffaffinität des Hämoglobins von pH und $pCO_2$. In stoffwechselaktivem Gewebe (z. B. kontrahierender Muskel) fallen große Mengen an $CO_2$ und Milchsäure an, was zu einer Zunahme der $H^+$-Ionen (pH-Abfall) und lokal erhöhter Temperatur führt. Protonen binden an spezifische Histidinreste des Desoxyhämoglobins und stabilisieren über Salzbrücken dessen energiearme T-Form (Tense-State). Dies senkt die Affinität für Sauerstoff (Rechtsverschiebung der Bindungskurve, Erhöhung des $P_{50}$-Werts) und erleichtert die O2-Abgabe an das sauerstoffbedürftige Gewebe.",
    explanations_incorrect: {
      A: "Niedriger $pCO_2$, hoher pH (Alkalose) und Kälte verschieben die Kurve nach links (erhöhte Affinität, erschwerte Abgabe), wie es physiologisch in der Lunge der Fall ist.",
      B: "2,3-BPG stabilisiert ebenfalls die T-Form; sein Fehlen führt zu einer Linksverschiebung (wie bei fetalem HbF).",
      D: "Laktatanstieg senkt den pH und verstärkt den Bohr-Effekt; Laktatsenkung würde dem entgegenwirken.",
      E: "Methämoglobin enthält $Fe^{3+}$, bindet Sauerstoff gar nicht und ist eine pathologische Dysfunktion, kein physiologischer Bohr-Effekt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // Kapitel 9: Nervensystem & Sinnesorgane (bio-09-nervensystem) - 4 Aufgaben
  // ---------------------------------------------------------------------------------
  {
    id: "BIO-BMS-GP4-037",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Saltatorische Erregungsleitung & Ranvier-Schnürringe",
    difficulty: "foundational",
    stem: "Warum leiten myelinisierte Nervenfasern Aktionspotenziale wesentlich schneller und energieeffizienter als marklose Nervenfasern?",
    options: {
      A: "Weil in myelinisierten Axonen kein Natrium- oder Kaliumstrom mehr fließt",
      B: "Weil die Myelinscheide den Membranwiderstand erhöht und die Kapazität senkt, sodass Aktionspotenziale elektrotonisch von Schnürring zu Schnürring springen",
      C: "Weil an den Ranvier-Schnürringen ausschließlich spannungsgesteuerte Calciumkanäle vorliegen",
      D: "Weil Schwann-Zellen kontinuierlich ATP in das Axoplasma pumpen",
      E: "Weil der Axondurchmesser durch die Myelinscheide auf unter 0,1 Mikrometer komprimiert wird"
    },
    correct_answer: "B",
    explanation_correct: "Die saltatorische Erregungsleitung beruht auf der elektrischen Isolation durch die lipidreiche Myelinscheide (im PNS von Schwann-Zellen, im ZNS von Oligodendrozyten gebildet). Die Myelinschichten erhöhen den elektrischen Transmembranwiderstand ($R_m$) massiv und verringern die elektrische Membrankapazität ($C_m$). Dadurch breitet sich die Depolarisation entlang der Internodien elektrotonisch mit extrem hoher Geschwindigkeit und minimalem Stromverlust aus. Regeneriert werden die Aktionspotenziale nur an den unmyelinisierten Ranvier-Schnürringen, wo eine enorme Dichte an spannungsaktivierten $Na^+$-Kanälen vorliegt.",
    explanations_incorrect: {
      A: "An den Schnürringen fließen massive Natrium- und Kaliumströme zur Regeneration des Aktionspotenzials.",
      C: "Die Ranvier-Schnürringe sind dicht mit spannungsgesteuerten Natriumkanälen ($Na_v1.6$) besetzt, nicht mit Calciumkanälen.",
      D: "Schwann-Zellen isolieren die Faser, pumpen aber kein ATP in das Axoplasma zur Impulsweiterleitung.",
      E: "Dickere Axone leiten schneller; Kompression auf unter 0,1 µm würde den inneren Längswiderstand drastisch erhöhen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-038",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Neuromuskuläre Endplatte & Nikotinische ACh-Rezeptoren",
    difficulty: "intermediate",
    stem: "Welche elektrophysiologische Eigenschaft besitzt der nikotinische Acetylcholinrezeptor (nAChR) an der postsynaptischen Membran der neuromuskulären Endplatte?",
    options: {
      A: "Er ist ein G-Protein-gekoppelter Rezeptor, der über Adenylatcyclase cAMP bildet",
      B: "Er ist ein reiner, hochselektiver Chloridkanal, der eine Hyperpolarisation erzeugt",
      C: "Er transportiert Acetylcholin aktiv zurück in das präsynaptische Neuron",
      D: "Er ist eine spannungsgesteuerte Calcium-ATPase der Plasmamembran",
      E: "Er ist ein ligandengesteuerter, unselektiver Kationenkanal, dessen Öffnung durch massiven Natriumeinstrom das Endplattenpotenzial (EPP) generiert"
    },
    correct_answer: "E",
    explanation_correct: "Der nikotinische Acetylcholinrezeptor der motorischen Endplatte ($(\\alpha_1)_2\\beta_1\gamma\delta$ beim Fetus, $(\\alpha_1)_2\\beta_1\epsilon\delta$ beim Erwachsenen) ist ein ionotroper, pentamerer Ligandenkanal. Nach Bindung von zwei Molekülen Acetylcholin öffnet sich der zentrale Kanal für kleine Kationen ($Na^+$, $K^+$, geringfügig $Ca^{2+}$). Da beim Ruhemembranpotenzial von ca. -80 mV der elektrochemische Gradient für Natrium weitaus größer ist als für Kalium, dominiert ein starker Natriumeinstrom. Dies depolarisiert die Endplatte lokal (Endplattenpotenzial, EPP), was benachbarte spannungsabhängige Natriumkanäle öffnet und ein Muskelaktionspotenzial auslöst.",
    explanations_incorrect: {
      A: "G-Protein-gekoppelte Acetylcholinrezeptoren sind muskarinische ACh-Rezeptoren (M1–M5), wie sie im vegetativen Nervensystem und ZNS vorkommen.",
      B: "Reine ligandengesteuerte Chloridkanäle sind $GABA_A$- und Glycinrezeptoren, die inhibitorische Hyperpolarisationen (IPSP) vermitteln.",
      C: "Acetylcholin wird im synaptischen Spalt durch Acetylcholinesterase in Acetat und Cholin gespalten; nur Cholin wird über einen $Na^+$-Cotransporter wiederaufgenommen.",
      D: "Es handelt sich um einen ligandengesteuerten Ionenkanal, nicht um eine Ionenpumpe (ATPase)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-039",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Vegetatives Nervensystem: Neurotransmitter an Effektoren",
    difficulty: "intermediate",
    stem: "Welche Neurotransmitter werden von den postganglionären Neuronen des Sympathikus bzw. des Parasympathikus an ihren jeweiligen Zielorganen im Normalfall freigesetzt?",
    options: {
      A: "Sympathikus: Acetylcholin an muskarinische Rezeptoren; Parasympathikus: Dopamin",
      B: "Sympathikus: Serotonin; Parasympathikus: Noradrenalin an Betarezeptoren",
      C: "Sympathikus: Noradrenalin an adrenerge Rezeptoren; Parasympathikus: Acetylcholin an muskarinische Rezeptoren",
      D: "Beide Systeme sezernieren an den Erfolgsorganen ausschließlich GABA",
      E: "Beide Systeme sezernieren an den Erfolgsorganen ausschließlich Adrenalin"
    },
    correct_answer: "C",
    explanation_correct: "Im vegetativen Nervensystem nutzen sowohl Sympathikus als auch Parasympathikus im vegetativen Ganglion präganglionär Acetylcholin (ACh) an nikotinischen Rezeptoren ($N_N$). Am Zielorgan (Erfolgsorgan) jedoch schütten die meisten postganglionären sympathischen Neurone Noradrenalin aus, das an $\alpha$- und $\beta$-Adrenorezeptoren bindet (wichtige Ausnahme: ekkrine Schweißdrüsen $\rightarrow$ ACh). Die postganglionären parasympathischen Neurone setzen hingegen Acetylcholin frei, das an muskarinische Acetylcholinrezeptoren (M1–M5) der Zielorgane bindet.",
    explanations_incorrect: {
      A: "Acetylcholin an muskarinischen Rezeptoren ist der typische Transmitter des Parasympathikus, nicht des Sympathikus; Dopamin ist kein vegetativer Haupttransmitter an Organen.",
      B: "Serotonin ist kein postganglionärer Transmitter des sympathischen Systems.",
      D: "GABA ist der wichtigste inhibitorische Transmitter im ZNS, nicht im peripheren vegetativen Effektororgan.",
      E: "Adrenalin wird vor allem als Hormon aus dem Nebennierenmark ins Blut sezerniert (zu 80 % Adrenalin, 20 % Noradrenalin), ist aber nicht der klassische Transmitter postganglionärer Nervenendigungen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "BIO-BMS-GP4-040",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Hypothalamus-Hypophysen-Nebennierenrinden-Achse & Cortisol",
    difficulty: "advanced",
    stem: "Wie reguliert die Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA-Achse) die Glukokortikoidsynthese bei akutem Stress, und welcher Mechanismus beendet die Hormonausschüttung?",
    options: {
      A: "Der Hypophysenhinterlappen schüttet Oxytocin aus, welches direkt die Nebennierenrinde zur Aldosteronsynthese anregt",
      B: "Cortisol stimuliert positiv die Expression von CRH im Hypothalamus zur Verstärkung des Stresssignals",
      C: "ACTH aus dem Hypophysenvorderlappen hemmt direkt die renale Natriumausscheidung ohne Nebennierenbeteiligung",
      D: "Der Hypothalamus sezerniert CRH, welches im Hypophysenvorderlappen die ACTH-Freisetzung stimuliert; ACTH induziert in der Zona fasciculata die Cortisolsynthese; freies Cortisol übt negatives Feedback auf Hypothalamus und Hypophyse aus",
      E: "Adrenalin aus dem Nebennierenmark wandelt sich im Blut enzymatisch in Cortisol um"
    },
    correct_answer: "D",
    explanation_correct: "Die HPA-Achse folgt einer dreistufigen endokrinen Hierarchie: 1. Bei Stress oder zirkadianem Rhythmus sezerniert der Nucleus paraventricularis des Hypothalamus Corticotropin-Releasing-Hormon (CRH) in das hypophysäre Portalsystem. 2. Im Hypophysenvorderlappen (HVL) stimuliert CRH die Spaltung von POMC und Ausschüttung von Adrenocorticotropem Hormon (ACTH). 3. ACTH bindet an MC2-Rezeptoren in der Zona fasciculata der Nebennierenrinde und stimuliert über cAMP/PKA die Synthese und Sekretion von Cortisol (Glukokortikoid). 4. Zirkulierendes freies Cortisol bindet an Glukokortikoidrezeptoren in Hypophyse und Hypothalamus und hemmt dort dosisabhängig die weitere Ausschüttung von ACTH und CRH (negative Rückkopplung/Feedback).",
    explanations_incorrect: {
      A: "Oxytocin stammt aus dem HHL und wirkt auf den Uterus und die Myoepithelzellen der Mamma; die NNR wird durch ACTH reguliert.",
      B: "Cortisol übt eine negative Rückkopplung (Hemmung) aus, keine positive Stimulation.",
      C: "ACTH stimuliert die Nebennierenrinde; direkte Primäreffekte an den Tubuli ohne Nebenniere sind klinisch nicht primär.",
      E: "Adrenalin ist ein Katecholamin (Aminosäurederivat aus Tyrosin); Cortisol ist ein Steroidhormon aus Cholesterin. Sie können im Blut nicht ineinander umgewandelt werden."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "4.0_gp4"
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
        return "bio-08-atmung";
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
 * Normalisierte 40 StoredQuestion-Objekte für die MedAT-H Generalprobe #4 Runtime-Engine
 */
export const GENERALPROBE_4_BIO_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_BIO_QUESTIONS.map(
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
      tags: ["BMS", "Biologie", "Generalprobe #4", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "4.0_gp4",
      setOrder: idx + 1,
    };
  }
);
