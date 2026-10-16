/**
 * MedAT Biologie BMS — 40-Fragen-Qualitätskontroll- und Korrektur-Aufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #2 (BMS Biologie-Testteil, 40 Original-Aufgaben).
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

export interface QcBioGp2QuestionRaw {
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

export const RAW_GENERALPROBE_2_BIO_QUESTIONS: QcBioGp2QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Die menschliche Zelle (bio-01-zelle) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-001",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Organellen & Proteintransport",
    difficulty: "foundational",
    stem: "Welche der folgenden Proteinklassen wird in menschlichen Zellen primär an membrangebundenen Ribosomen des rauen endoplasmatischen Retikulums (rER) synthetisiert und cotranslational in das ER-Lumen bzw. die ER-Membran geschleust?",
    options: {
      A: "Histone und DNA-Polymerasen des Zellkerns",
      B: "Glykolytische Enzyme des Zytosols (wie Phosphofructokinase-1)",
      C: "Katalase und Peroxidasen der Peroxisomen",
      D: "Integrale Transmembranproteine der Plasmamembran (wie Ionenkanäle und Rezeptor-Tyrosinkinasen)",
      E: "Matrixproteine der Mitochondrien (wie die Citrat-Synthase)"
    },
    correct_answer: "D",
    explanation_correct: "Proteine, die für die Plasmamembran, Lysosomen, sekretorische Vesikel oder den Extrazellulärraum bestimmt sind, tragen eine hydrophobe N-terminale Signalsequenz. Diese wird während der Translation vom Signal Recognition Particle (SRP) erkannt, welches das Ribosom an den SRP-Rezeptor und das Translokon (Sec61-Komplex) der rER-Membran dirigiert. Die Synthese wird cotranslational direkt in das ER-Lumen geschleust bzw. als Transmembranprotein in die einfache ER-Membran integriert.",
    explanations_incorrect: {
      A: "Histone und DNA-Polymerasen besitzen Kernlokalisationssignale (NLS) und werden an freien zytosolischen Ribosomen synthetisiert und posttranslational über Kernporenkomplexe importiert.",
      B: "Glykolytische Enzyme verbleiben im Zytosol und werden vollständig an freien zytosolischen Ribosomen ohne Beteiligung des rER translatiert.",
      C: "Peroxisomale Enzyme (wie Katalase) besitzen C-terminale Peroxisomal Targeting Signals (PTS1) und werden posttranslational an freien Ribosomen gebildet.",
      E: "Die überwiegende Mehrheit der mitochondrialen Matrixproteine (ca. 99 %) wird an freien zytosolischen Ribosomen synthetisiert und über TOM/TIM-Komplexe posttranslational importiert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-002",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zytoskelett & Ziliomotorik",
    difficulty: "intermediate",
    stem: "Welche strukturelle und molekulare Anordnung charakterisiert das funktionelle Axonem einer beweglichen menschlichen Kinozilie (z. B. im Flimmerepithel des Respirationstrakts)?",
    options: {
      A: "Ein peripherer Ring aus 9 Mikrotubuli-Tripletts (9×3-Muster) ohne zentrale Strukturen, angetrieben durch Myosin-Motoren",
      B: "Ein peripherer Zylinder aus 9 Mikrotubuli-Dupletts und zwei zentrale Mikrotubuli (9×2+2-Muster), deren gegeneinander gerichtetes Gleiten durch axonemale Dynein-Arme vermittelt wird",
      C: "Ein Bündel aus Aktinfilamenten, die über Villin und Fimbrin starr quervernetzt sind",
      D: "Ein Zylinder aus 10 Mikrotubuli-Dupletts ohne zentrale Mikrotubuli (10×2+0-Muster), der durch Kinesin-1 vorwärts bewegt wird",
      E: "Ein dichtes Geflecht aus Desmin- und Zytokeratin-Intermediärfilamenten, das passiv durch den Schleimstrom gebogen wird"
    },
    correct_answer: "B",
    explanation_correct: "Bewegliche Kinozilien und das Flagellum des Spermiums besitzen das klassische 9×2+2-Axonem: 9 periphere Mikrotubuli-Dubletten umgeben zwei zentrale Einzelmikrotubuli. Die ATP-abhängige Schlagbewegung entsteht durch axonemales Dynein, das an den A-Tubuli befestigt ist und an den B-Tubuli der Nachbardublette entlanggleitet; elastische Nexin-Brücken wandeln das Gleiten in eine Biegung um.",
    explanations_incorrect: {
      A: "Ein 9×3-Triplett-Muster ohne Zentralmikrotubuli kennzeichnet Zentriolen und Basalkörperchen (Kinetosomen), nicht jedoch das freie bewegliche Zilienaxonem.",
      C: "Bündel aus Aktinfilamenten mit Villin und Fimbrin bilden unbewegliche Mikrovilli (Bürstensaum), keine Kinozilien.",
      D: "Ein 10×2+0-Muster existiert in der menschlichen Zellbiologie nicht; primäre Zilien haben ein 9×2+0-Muster und sind unbeweglich.",
      E: "Intermediärfilamente (wie Zytokeratin) besitzen keine Motorproteine und können keine aktive koordinierte Zilienbewegung erzeugen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-003",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zellkontakte",
    difficulty: "intermediate",
    stem: "Welcher Typ von Zellverbindung ermöglicht den direkten Durchtritt kleiner wasserlöslicher Moleküle und Ionen (unter ca. 1.000 Da) zwischen den Zytoplasmen zweier benachbarter Zellen zur elektrischen und metabolischen Kopplung?",
    options: {
      A: "Desmosomen (Maculae adherentes)",
      B: "Tight Junctions (Zonulae occludentes)",
      C: "Hemidesmosomen",
      D: "Fokalkontakte (Focal Adhesions)",
      E: "Gap Junctions (Nexus)"
    },
    correct_answer: "E",
    explanation_correct: "Gap Junctions (Nexus) bestehen aus je zwei gegenüberliegenden Hemi-Kanälen (Konnexonen) in den Plasmamembranen benachbarter Zellen. Jedes Konnexon setzt sich aus sechs Konnexin-Proteinen zusammen. Sie bilden eine durchgehende Pore mit ca. 1,5–2 nm Durchmesser, durch die Ionen (Na+, K+, Ca2+), ATP, cAMP und Aminosäuren frei diffundieren können, was z. B. im Herzmuskel die synchrone Erregungsausbreitung sichert.",
    explanations_incorrect: {
      A: "Desmosomen verbinden intermediäre Zytoskelettfilamente mechanisch zur Zugfestigkeit, bilden aber keine zytoplasmatischen Porenkanäle.",
      B: "Tight Junctions dichten den Interzellularraum parazellulär ab (z. B. Blut-Hirn-Schranke, Darmepithel) und trennen Membrandomänen, koppeln aber keine Zytoplasmen.",
      C: "Hemidesmosomen verankern Basalzellen an der extrazellulären Matrix (Basallamina) über Integrine, nicht Zelle an Zelle.",
      D: "Fokalkontakte verankern Aktinfilamente mit Fibronektin der extrazellulären Matrix bei Zellwanderung und Signaltransduktion."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-004",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Spindelkontrollpunkt & Mitose",
    difficulty: "advanced",
    stem: "Welcher zellbiologische Kontrollmechanismus leitet in einer menschlichen Zelle den Übergang von der Metaphase zur Anaphase ein, sobald alle Chromosomen über ihre Kinetochore korrekt am Spindelapparat verankert sind?",
    options: {
      A: "Der Spindelkontrollpunkt wird freigegeben, was über den Abbau inhibitorischer Proteine (Securin) zur enzymatischen Spaltung der Cohesin-Komplexe durch die Protease Separase führt.",
      B: "CDK1 phosphoryliert Histon H1, wodurch die Chromatiden spontan durch elektrostatische Abstoßung an den Zentromeren auseinanderweichen.",
      C: "Dynein inaktiviert die Mikrotubuli-Bindestellen, wodurch Kinesine die Chromosomen passiv an den Zelläquator drängen.",
      D: "Das Retinoblastom-Protein (pRb) bindet an E2F und hemmt die Synthese von Tubulin-Monomeren.",
      E: "Effektor-Caspasen spalten Kinetochor-Proteine und lösen damit die Chromosomen vom Spindelapparat ab."
    },
    correct_answer: "A",
    explanation_correct: "Der Spindelkontrollpunkt (Spindle Assembly Checkpoint) überwacht in der Metaphase, dass sämtliche Kinetochore korrekt und unter mechanischer Spannung mit den Mikrotubuli der bipolaren Teilungsspindel verbunden sind. Erst wenn alle Chromosomen ordnungsgemäß in der Äquatorialebene angeordnet sind, wird der Spindelkontrollpunkt überwunden: Das hemmende Protein Securin wird abgebaut, woraufhin die spezifische Endopeptidase Separase aktiv wird. Diese spaltet die ringförmigen Cohesin-Proteinkomplexe, welche die Schwesterchromatiden bis dahin am Zentromer zusammenhielten, sodass die getrennten Chromatiden in der Anaphase polwärts wandern können.",
    explanations_incorrect: {
      B: "Die CDK1/Cyclin-B-Aktivität muss für den Austritt aus der Mitose abgebaut und nicht gesteigert werden; Chromatidentrennung beruht auf enzymatischer Spaltung von Proteinen, nicht auf Histonabstoßung.",
      C: "Aurora B korrigiert fehlerhafte Kinetochoranheftungen in der Prometaphase, leitet aber nicht den Anaphaseübergang ein.",
      D: "Der pRb-E2F-Komplex kontrolliert den G1/S-Übergang (Restriktionspunkt) in der Interphase, nicht die mitotische Anaphase.",
      E: "Caspasen sind Effektoren der Apoptose; ihr Eingreifen in die Mitose würde zum Zelltod führen und nicht zur physiologischen Zellteilung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-005",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Membrantransport & Na+/K+-ATPase",
    difficulty: "intermediate",
    stem: "Im apikalen Bürstensaum des menschlichen Dünndarmepithels wird D-Glukose über den Transporter SGLT1 gegen ein steiles Konzentrationsgefälle in die Zelle aufgenommen. Welcher direkte energetische Antrieb ermöglicht diesen Prozess?",
    options: {
      A: "Die direkte Hydrolyse eines ATP-Moleküls an der zytosolischen Domäne des SGLT1-Proteins",
      B: "Ein transzellulärer Protonengradient (ΔpH), der durch H+-V-ATPasen erzeugt wird",
      C: "Der einwärts gerichtete elektrochemische Natriumgradient, der sekundär durch die basolaterale Na+/K+-ATPase aufrechterhalten wird",
      D: "Ein nach außen gerichteter Kaliumstrom über spannungsabhängige K+-Kanäle",
      E: "Ein osmotischer Wassereinstrom, der Glukosemoleküle durch 'Solvent Drag' mitreißt"
    },
    correct_answer: "C",
    explanation_correct: "SGLT1 (Sodium-Glucose Linked Transporter 1) ist ein klassischer sekundär aktiver Transporter (Symport von 2 Na+ mit 1 Glukose). Er selbst hydrolysiert kein ATP. Die Energie liefert der steile Natriumgradient (niedriges Na+ intrazellulär, hohes Na+ luminal plus negatives Membranpotenzial), der primär aktiv unter ATP-Verbrauch durch die basolaterale Na+/K+-ATPase aufrechterhalten wird.",
    explanations_incorrect: {
      A: "SGLT1 besitzt keine ATPase-Domäne; ein direkter ATP-Verbrauch kennzeichnet primär aktive Transporter (wie ABC-Transporter oder Ionenpumpen).",
      B: "Protonen-Symport (z. B. PepT1 für Di- und Tripeptide) nutzt einen H+-Gradienten, Glukose im Dünndarm wird jedoch natriumabhängig transportiert.",
      D: "Kalium hat ein nach außen gerichtetes Konzentrationsgefälle, treibt aber den SGLT1-Glukosetransport nicht an.",
      E: "'Solvent Drag' kann parazellulär geringe Mengen gelöster Stoffe mitführen, ist aber nicht der gerichtete aktive Aufnahmemechanismus für Glukose über SGLT1."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Der menschliche Körper (bio-02-koerper) - 6 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-006",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Bindegewebe & Kollagensynthese",
    difficulty: "foundational",
    stem: "Welche posttranslationale Modifikation ist für die Bildung einer temperaturstabilen Tripelhelix des Kollagens im menschlichen Bindegewebe unverzichtbar und erfordert Ascorbinsäure (Vitamin C) als Kofaktor?",
    options: {
      A: "Die gamma-Carboxylierung von Glutamatresten",
      B: "Die Hydroxylierung von Prolin- und Lysinresten im Lumen des rauen endoplasmatischen Retikulums",
      C: "Die kovalente Phosphorylierung von Tyrosinresten an der Zellmembran",
      D: "Die N-terminale Acetylierung zur Verhinderung des proteasomalen Abbaus",
      E: "Die Spaltung von GPI-Ankern durch Phospholipase C"
    },
    correct_answer: "B",
    explanation_correct: "Im rER hydroxylieren die Enzyme Prolyl-4-Hydroxylase und Lysyl-Hydroxylase spezifische Prolin- und Lysinreste zu 4-Hydroxyprolin und Hydroxylysin. Hydroxyprolinreste stabilisieren die Kollagen-Tripelhelix über intramolekulare Wasserstoffbrücken. Die Enzyme enthalten Fe2+ im aktiven Zentrum, welches während der Katalyse zu Fe3+ oxidiert wird; Ascorbat (Vitamin C) reduziert Fe3+ spezifisch zurück zu Fe2+. Bei Vitamin-C-Mangel zerfällt nicht-hydroxyliertes Tropokollagen bei Körpertemperatur (Skorbut).",
    explanations_incorrect: {
      A: "Die gamma-Carboxylierung von Glutamatresten betrifft Gerinnungsfaktoren (II, VII, IX, X) und erfordert Vitamin K, nicht Vitamin C.",
      C: "Tyrosinphosphorylierung ist ein Signaltransduktionsmechanismus von Kinasen, kein Schritt der strukturellen Kollagensynthese.",
      D: "N-terminale Acetylierung ist eine generelle Proteinmodifikation, die keine Ascorbinsäure benötigt.",
      E: "GPI-Anker dienen der Verankerung mancher Membranproteine, spielen bei Fibrillenkollagenen jedoch keine Rolle."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-007",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Verdauung & Fettresorption",
    difficulty: "intermediate",
    stem: "In welcher Transportform und über welches Gefäßsystem verlassen resorbierte langkettige Nahrungsfette nach ihrer Re-Veresterung zu Triglyceriden die Enterozyten des Dünndarms?",
    options: {
      A: "Als freie Fettsäuren gebunden an Albumin über die Pfortader zur Leber",
      B: "Als VLDL-Partikel über Pfortaderkapillaren direkt in das Lebersinusoid",
      C: "Gelöst in Gallensalz-Mizellen durch passiven Übertritt in die Mesenterialvenen",
      D: "Verpackt in Chylomikronen durch Exozytose in die zentralen Lacteal-Lymphkapillaren der Darmzotten",
      E: "Als HDL-Partikel über rezeptorvermittelte Transzytose in das arterielle Strombett"
    },
    correct_answer: "D",
    explanation_correct: "Langkettige Fettsäuren und 2-Monoacylglycerine werden im glatten ER des Enterozyten erneut zu Triglyceriden verestert und im Golgi-Apparat zusammen mit Phospholipiden, Cholesterin und Apolipoprotein B-48 zu Chylomikronen verpackt. Wegen ihrer enormen Größe (75–1.200 nm) können sie Blutkapillaren nicht passieren. Sie werden an der basolateralen Membran exozytiert und treten in die weitlumigen terminalen Lymphgefäße (Lacteals) der Zotten ein, von wo aus sie über den Ductus thoracicus in den linken Venenwinkel gelangen.",
    explanations_incorrect: {
      A: "Nur kurzkettige und mittelkettige Fettsäuren (unter 10–12 C-Atome) gelangen unesterifiziert über die Pfortader zur Leber.",
      B: "VLDL-Partikel werden primär in Hepatozyten der Leber gebildet, nicht in Enterozyten des Darms.",
      C: "Mizellen fungieren nur im Darmlumen als Transportvehikel bis zur apikalen Membran; sie werden nicht als intakte Mizellen ins Blut transportiert.",
      E: "HDL-Partikel werden von Leber und Darm als leere Proteinhüllen zur Aufnahme von Cholesterin aus peripherem Gewebe sezerniert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-008",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Nierenphysiologie & Filtrationsbarriere",
    difficulty: "intermediate",
    stem: "Die glomeruläre Filtrationsschranke des menschlichen Nephrons hält Plasmaproteine wie Albumin durch ein Zusammenspiel aus mechanischer Größenselektivität und elektrostatischer Abstoßung zurück. Welche Komponente vermittelt hierbei primär die negative Ladungsbarriere?",
    options: {
      A: "Die polyanionischen Proteoglykane (wie Heparansulfat) der glomerulären Basalmembran sowie die negativ geladenen Glykoproteine der Podozyten (Podocalyxin)",
      B: "Das gefensterte Kapillarendothel, dessen Endothelporen mechanisch kleiner als 2 nm sind",
      C: "Die glatten Muskelzellen der afferenten Arteriole über permanente Freisetzung von Stickstoffmonoxid",
      D: "Das Bürstensaum-Epithel des proximalen Tubulus durch permanente glomeruläre Filtration",
      E: "Die intraglomerulären Mesangiumzellen durch kontinuierliche Phagozytose im Kapselraum"
    },
    correct_answer: "A",
    explanation_correct: "Die glomeruläre Filtrationsschranke verhindert den Proteinverlust in den Primärharn durch eine Kombination aus Größenselektivität und Ladungsselektivität. Mechanisch wirken das gefensterte Endothel (Poren ca. 70–90 nm), die glomeruläre Basalmembran (GBM) und insbesondere die Schlitzmembran zwischen den Podozytenfüßchen (effektive Porenweite ca. 4–5 nm; funktionelle Molekulargewichtsschwelle ca. 70 kDa). Serumalbumin (ca. 66 kDa, hydrodynamischer Radius ca. 3,6 nm) liegt größenmäßig nahe an diesem Grenzwert. Die zusätzliche elektrostatische Abstoßung (Ladungsselektivität) durch negativ geladene Proteoglykane (vor allem Heparansulfat in der Lamina rara externa und interna der GBM) sowie Sialoglykoproteine (Podocalyxin) auf der Podozytenoberfläche minimiert die Durchtrittswahrscheinlichkeit für das bei physiologischem Blut-pH negativ geladene Albumin entscheidend.",
    explanations_incorrect: {
      B: "Die Poren des gefensterten Endothels sind mit 70–90 nm viel zu groß, um Albumin mechanisch zurückzuhalten.",
      C: "Das Vas afferens reguliert den Gefäßwiderstand und den glomerulären Filtrationsdruck, bildet aber nicht die Filtrationsschranke.",
      D: "Der proximale Tubulus resorbiert filtriertes Wasser und Elektrolyte nach dem Kapselraum, ist aber nicht Bestandteil des glomerulären Filters.",
      E: "Mesangiumzellen bieten strukturellen Halt und reinigen den Filter von Immunkomplexen, bilden aber keine Ladungsbarriere."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-009",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Nierenphysiologie & RAAS",
    difficulty: "advanced",
    stem: "Welcher physiologische Stimulus an den Zellen der Macula densa im juxtaglomerulären Apparat der menschlichen Niere führt bei Blutdruckabfall zur gesteigerten Freisetzung von Renin aus den Zellen der afferenten Arteriole?",
    options: {
      A: "Eine Zunahme des tubulären Flussvolumens und ein deutlicher Anstieg der NaCl-Konzentration an der Macula densa",
      B: "Eine verstärkte mechanische Dehnung der afferenten Arteriole durch erhöhten transmuralen Gefäßdruck",
      C: "Eine Stimulation zentraler Osmorezeptoren durch hypoosmolares Plasma",
      D: "Ein Anstieg des atrialen natriuretischen Peptids (ANP) im Tubulussystem",
      E: "Eine verminderte glomeruläre Filtrationsrate mit konsekutiv verringertem NaCl-Angebot und reduzierter NaCl-Aufnahme an den Macula-densa-Zellen des distalen Tubulus"
    },
    correct_answer: "E",
    explanation_correct: "Bei einem systemischen Blutdruckabfall sinken der glomeruläre Filtrationsdruck und die glomeruläre Filtrationsrate (GFR). Durch die verlangsamte Strömungsgeschwindigkeit des Tubulusharns wird im aufsteigenden Schenkel der Henle-Schleife relativ mehr Natriumchlorid resorbiert, sodass die NaCl-Konzentration am Beginn des distalen Tubulus absinkt. Die chemosensiblen Macula-densa-Zellen registrieren dieses verminderte NaCl-Angebot und stimulieren parakrin (über Prostaglandine) die benachbarten granulären Epitheloidzellen des Vas afferens zur Ausschüttung von Renin. Renin aktiviert das Renin-Angiotensin-Aldosteron-System (RAAS) zur Wiederherstellung von Blutdruck und GFR.",
    explanations_incorrect: {
      A: "Erhöhtes NaCl-Angebot signalisiert hohe GFR und führt über Adenosin zur Hemmung der Reninfreisetzung und Vasokonstriktion (tubuloglomeruläres Feedback).",
      B: "Verminderte (nicht erhöhte) Dehnung der Arteriolenwand stimuliert Renin direkt; erhöhte Dehnung hemmt es.",
      C: "Osmorezeptoren steuern primär die Freisetzung von ADH (Vasopressin) aus der Neurohypophyse.",
      D: "ANP wird bei Vorhofdehnung freigesetzt und hemmt die Reninsekretion potent."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-010",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Endokrinologie (Nebennierenrinde)",
    difficulty: "foundational",
    stem: "Welche Zuordnung beschreibt die histologischen Zonen der menschlichen Nebennierenrinde von außen (unter der Organkapsel) nach innen (angrenzend an das Nebennierenmark) und ihre jeweils primär produzierten Hormonklassen korrekt?",
    options: {
      A: "Zona fasciculata (Mineralokortikoide) → Zona glomerulosa (Glukokortikoide) → Zona reticularis (Androgene)",
      B: "Zona reticularis (Androgene) → Zona fasciculata (Kortisol) → Zona glomerulosa (Aldosteron)",
      C: "Zona glomerulosa (Mineralokortikoide wie Aldosteron) → Zona fasciculata (Glukokortikoide wie Kortisol) → Zona reticularis (Androgene wie DHEA)",
      D: "Zona glomerulosa (Katecholamine) → Zona fasciculata (Peptidhormone) → Zona reticularis (Kortisol)",
      E: "Zona fasciculata (Aldosteron) → Zona reticularis (Adrenalin) → Zona glomerulosa (Kortisol)"
    },
    correct_answer: "C",
    explanation_correct: "Die Nebennierenrinde (Cortex) gliedert sich von der Kapsel nach innen in drei Schichten:\n1. Zona glomerulosa: bildet Mineralokortikoide (Aldosteron; reguliert durch RAAS und K+).\n2. Zona fasciculata: bildet Glukokortikoide (Kortisol; reguliert durch ACTH).\n3. Zona reticularis: bildet Androgene (DHEA, Androstendion).\nDas innenliegende Nebennierenmark (Medulla) stammt entwicklungsgeschichtlich aus der Neuralleiste und bildet Katecholamine (Adrenalin, Noradrenalin). Eselsbrücke: G-F-R ('Salt, Sugar, Sex - the deeper you go, the sweeter it gets').",
    explanations_incorrect: {
      A: "Vertauscht die Position und Funktion von Zona glomerulosa und Zona fasciculata.",
      B: "Kehrt die Schichtung von innen nach außen um.",
      D: "Katecholamine werden im ektodermalen Nebennierenmark gebildet, nicht in der mesodermalen Rinde.",
      E: "Die Zona glomerulosa bildet Aldosteron, nicht die fasciculata; Adrenalin entsteht im Mark."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-011",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "MHC & T-Zell-Aktivierung",
    difficulty: "intermediate",
    stem: "Welche Aussage beschreibt die funktionelle Differenzierung zwischen MHC-Klasse-I- und MHC-Klasse-II-Molekülen im menschlichen Immunsystem korrekt?",
    options: {
      A: "MHC-I-Moleküle binden exogene Antigene und präsentieren diese an CD4+-T-Helferzellen; MHC-II präsentiert intrazelluläre virale Proteine an CD8+-Zellen.",
      B: "MHC-I-Moleküle werden auf nahezu allen kernhaltigen Körperzellen exprimiert und präsentieren endogene Peptide an zytotoxische CD8+-T-Zellen; MHC-II-Moleküle befinden sich auf professionellen antigenpräsentierenden Zellen und präsentieren exogene Peptide an CD4+-T-Helferzellen.",
      C: "MHC-I-Moleküle kommen ausschließlich auf B-Lymphozyten vor und schütten Immunglobulin M ins Blut aus.",
      D: "MHC-II-Moleküle binden direkt an freie Antigene im Blutplasma ohne vorherige Prozessierung durch Makrophagen.",
      E: "Beide MHC-Klassen präsentieren Peptide ausschließlich an Natürliche Killerzellen (NK-Zellen) und aktivieren deren Zytotoxizität."
    },
    correct_answer: "B",
    explanation_correct: "MHC-Klasse-I-Proteine (HLA-A, -B, -C) werden auf fast allen kernhaltigen Körperzellen und Thrombozyten exprimiert; sie präsentieren Peptide aus dem Zytosol (nach Proteasom-Spaltung über TAP ins ER) an CD8+-T-Lymphozyten (zytotoxische T-Zellen). MHC-Klasse-II-Proteine (HLA-DP, -DQ, -DR) werden selektiv auf professionellen antigenpräsentierenden Zellen (dendritische Zellen, Makrophagen, B-Zellen) exprimiert; sie nehmen extrazelluläre Proteine endozytotisch auf, prozessieren sie in Phagolysosomen und präsentieren sie an CD4+-T-Helferzellen. Merkhilfe: Multiplikationsregel (1 × 8 = 8; 2 × 4 = 8).",
    explanations_incorrect: {
      A: "Vertauscht die Antigenherkunft (endogen vs. exogen) und die T-Zell-Korezeptoren (CD8 vs. CD4).",
      C: "B-Zellen exprimieren MHC-I und MHC-II, aber MHC-I findet sich auf allen kernhaltigen Zellen, nicht nur auf B-Zellen; sezerniert werden Antikörper, keine MHC-Moleküle.",
      D: "T-Zellen erkennen über MHC keine freien nativen Proteine, sondern ausschließlich prozessierte lineare Peptidfragmente.",
      E: "NK-Zellen werden durch das FEHLEN von MHC-I aktiviert ('Missing-Self'-Hypothese), nicht durch Erkennung spezifischer Peptid-MHC-Klassen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -----------------------------------------------------------------
  // Kapitel 3: Frühentwicklung des Menschen (bio-03-fruehentwicklung) - 4 Aufgaben
  // -----------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-012",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Gametogenese & Oogenese-Arrest",
    difficulty: "foundational",
    stem: "In welchem meiotischen Stadium befindet sich die menschliche Eizelle (sekundäre Oozyte) zum Zeitpunkt des Eisprungs (Ovulation), bevor ein Spermium mit ihr fusioniert?",
    options: {
      A: "Im Diktyotän der Prophase I (pränataler Arrest)",
      B: "In der Telophase I unmittelbar vor Abschnürung des ersten Polkörperchens",
      C: "In der Anaphase II mit getrennten Schwesterchromatiden",
      D: "In der G0-Phase der mitotischen Interphase",
      E: "In der Metaphase der zweiten meiotischen Teilung (Metaphase II)"
    },
    correct_answer: "E",
    explanation_correct: "Die Oogenese weist zwei charakteristische Arreste auf: Vor der Geburt treten die Oogonien in die Meiose I ein und arretieren im Diktyotän der Prophase I als primäre Oozyten. Erst kurz vor der Ovulation beendet die Eizelle unter Einfluss des LH-Peaks die Meiose I (Ausstoßung des 1. Polkörperchens). Die nun sekundäre Oozyte tritt in die Meiose II ein und arretiert erneut in der Metaphase II. Erst wenn ein Spermium die Plasmamembran penetriert (Befruchtung), wird der Metaphase-II-Arrest durch Ca2+-Einstrom aufgehoben und das 2. Polkörperchen ausgestoßen.",
    explanations_incorrect: {
      A: "Das Diktyotän der Prophase I ist der erste Arrest, in dem die Eizellen von der Fetalzeit bis zur jeweiligen Pubertät/Ovulation verharren.",
      B: "Die Telophase I wird bereits kurz vor dem Follikelsprung im Ovar vollendet.",
      C: "Die Anaphase II wird erst nach erfolgreicher Spermienfusion durchlaufen.",
      D: "Reifeteilungen von Keimzellen sind Meiosen, keine mitotischen G0-Phasen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-013",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Befruchtung & Polyspermieblock",
    difficulty: "intermediate",
    stem: "Welcher physiologische Mechanismus verhindert nach dem Eindringen des ersten Spermiums in die menschliche Eizelle zuverlässig das Eindringen weiterer Spermien (langsamer Polyspermieblock)?",
    options: {
      A: "Eine intrazelluläre Ca2+-Welle löst die Exozytose der Rindengranula (Kortikalreaktion) aus; deren Enzyme verhärten die Zona pellucida und spalten Spermienrezeptoren ab (Zona-Reaktion).",
      B: "Die Eizelle sezerniert schlagartig sauren Magensaft in den perivitellinen Spalt, der die Akrosomen nachfolgender Spermien zerstört.",
      C: "Die Tubenschleimhaut kontrahiert krampfartig und spült alle verbleibenden Spermien in das Abdomen.",
      D: "Die Eizelle stößt sofort ihren Zellkern in ein drittes Polkörperchen aus.",
      E: "Das erste Spermium gibt Antikörper ab, die nachfolgende Spermien agglutinieren."
    },
    correct_answer: "A",
    explanation_correct: "Bei der Befruchtung führt die Fusion der Plasmamembranen über Phospholipase C zeta (PLCζ) zu Oszillationen der intrazellulären Ca2+-Konzentration. Dies induziert die Exozytose subkortikaler Vesikel (Rindengranula / Cortical Granules). Die freigesetzten Proteasen (wie Ovastacin) modifizieren die Glykoproteine der Zona pellucida (Spaltung von ZP2 und ZP3), sodass die Hülle aushärtet und keine weiteren Spermien mehr anheften oder durchdringen können (Zonareaktion / permanenter Polyspermieblock).",
    explanations_incorrect: {
      B: "Die Eizelle produziert keine Magensäure (Salzsäure); die Verhärtung der Zona pellucida beruht auf enzymatischer Spaltung von Glykoproteinen.",
      C: "Eine Tubenkontraktion verhindert keine Polyspermie an der Eizellmembran.",
      D: "Die Eizelle behält ihren Vorkern; es entsteht kein drittes Polkörperchen zum Spermienschutz.",
      E: "Spermien produzieren keine Immunglobuline."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-014",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Keimblattderivate",
    difficulty: "intermediate",
    stem: "Welche Gruppe anatomischer Strukturen und Organsysteme des Menschen geht während der Embryonalentwicklung vollständig aus dem mittleren Keimblatt (Mesoderm) hervor?",
    options: {
      A: "Zahnschmelz, Gehirn, Rückenmark und die Epidermis der Haut",
      B: "Das Epithel des Magens, der Leberzellen und der Alveolen",
      C: "Die Linse des Auges, die Riechschleimhaut und der Hypophysenvorderlappen",
      D: "Wirbel, Rippen, die Skelett- und Herzmuskulatur, die Nieren und das Blutgefäßsystem",
      E: "Das Epithel der Schilddrüse, der Nebenschilddrüsen und der Harnblase"
    },
    correct_answer: "D",
    explanation_correct: "Aus dem embryonalen Mesoderm differenzieren sich: das paraxiale Mesoderm (Somiten gliedern sich in Sklerotom: Wirbelsäule und Rippen, Myotom: Rumpf- und Extremitätenmuskulatur, Dermatom: Dermis), das intermediäre Mesoderm (Nieren und ableitende Harnwege, innere Genitalorgane) sowie das Seitenplattenmesoderm (Herz-Kreislauf-System, Endothel der Blutgefäße, Blutzellen, Milz, Nebennierenrinde). Teile des Schädelskeletts (viszerales Kranialmesenchym) stammen hingegen aus der ektodermalen Neuralleiste; die hier genannten Wirbel, Rippen, Muskeln, Nieren und Blutgefäße sind eindeutig und vollständig mesodermalen Ursprungs.",
    explanations_incorrect: {
      A: "ZNS (Gehirn, Rückenmark), Epidermis und Zahnschmelz stammen aus dem Ektoderm.",
      B: "Magenepithel, Leberparenchym und Lungenepithel stammen aus dem Entoderm.",
      C: "Linse, Riechplakoden und Adenohypophyse stammen aus dem Ektoderm (Oberflächenektoderm).",
      E: "Schilddrüse, Nebenschilddrüse und Harnblasenepithel stammen aus dem Entoderm."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-015",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Plazenta & Fetal-maternale Schranke",
    difficulty: "advanced",
    stem: "Welche zelluläre Schicht der menschlichen Plazenta steht in den intervillösen Räumen im direkten Kontakt mit dem mütterlichen Blut, fungiert als primärer Ort der Hormonsynthese (z. B. hCG, Progesteron) und bildet ein vielkerniges Synzytium ohne interzelluläre Membrangrenzen?",
    options: {
      A: "Das fetale Kapillarendothel im Zottenstroma",
      B: "Das Amnionepithel der Nabelschnur",
      C: "Der Synzytiotrophoblast",
      D: "Der Zytotrophoblast (Langhans-Zellen)",
      E: "Die mütterliche Decidua basalis"
    },
    correct_answer: "C",
    explanation_correct: "Bei der Implantation fusionieren Trophoblastzellen zum Synzytiotrophoblasten (einem riesigen multinukleären Synzytium ohne seitliche Zellgrenzen). Er überzieht alle Chorionzotten der reifen Plazenta und wird in den intervillösen Räumen direkt vom mütterlichen Blut umspült (hämochoriale Plazenta). Er produziert hCG (Schwangerschaftserhaltung), humanes Plazentalaktogen (hPL), Progesteron und Östrogene und vermittelt über FcRn-Rezeptoren den aktiven maternalen IgG-Transfer.",
    explanations_incorrect: {
      A: "Das Kapillarendothel liegt im Inneren der Zotte und hat keinen Kontakt zu mütterlichem Blut.",
      B: "Das Amnionepithel kleidet die Fruchthöhle aus, bildet aber keine Zottenoberfläche im mütterlichen Blut.",
      D: "Der Zytotrophoblast (mononukleäre Langhans-Zellen) liegt unter dem Synzytiotrophoblasten und dient als Proliferationsreserve; er verliert im Verlauf der Schwangerschaft den direkten Kontakt zum Interzellularraum.",
      E: "Die Decidua basalis ist mütterliches Bindegewebe des modifizierten Endometriums."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Genetik & Humangenetik (bio-04-genetik) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-016",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Mendelsche Regeln",
    difficulty: "foundational",
    stem: "Bei der Kreuzung zweier Individuen, die beide für zwei voneinander unabhängige Gene heterozygot sind (AaBb × AaBb), ergibt sich bei vollständiger Dominanz und freier Kombinierbarkeit welches klassische phänotypische Spaltungsverhältnis in der F2-Nachkommenschaft?",
    options: {
      A: "9 : 3 : 3 : 1",
      B: "1 : 2 : 1",
      C: "3 : 1",
      D: "1 : 1 : 1 : 1",
      E: "9 : 7"
    },
    correct_answer: "A",
    explanation_correct: "Nach der 3. Mendelschen Regel (Unabhängigkeitsregel / freie Rekombination) spalten zwei dihybride heterozygote Eltern (AaBb × AaBb) bei ungekoppelten Genen und dominant-rezessivem Erbgang phänotypisch im Verhältnis 9 (A_B_) : 3 (A_bb) : 3 (aaB_) : 1 (aabb) auf.",
    explanations_incorrect: {
      B: "1 : 2 : 1 ist das genotypische Spaltungsverhältnis eines monohybriden Erbgangs bzw. das phänotypische Verhältnis bei intermediärer Vererbung.",
      C: "3 : 1 ist das phänotypische Spaltungsverhältnis eines einfachen monohybriden dominant-rezessiven Erbgangs.",
      D: "1 : 1 : 1 : 1 entsteht bei einer dihybriden Testkreuzung (AaBb × aabb).",
      E: "9 : 7 ist ein modifiziertes Spaltungsverhältnis bei komplementärer Polygenie."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-017",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "X-chromosomaler Erbgang",
    difficulty: "intermediate",
    stem: "Eine phänotypisch gesunde Frau, deren Vater an einer X-chromosomal-rezessiv vererbten Hämophilie A litt, erwartet ein Kind von einem gesunden Mann. Wie hoch ist die Wahrscheinlichkeit, dass das ungeborene Kind (unabhängig vom Geschlecht) an Hämophilie A erkrankt sein wird?",
    options: {
      A: "0 %",
      B: "100 %",
      C: "75 %",
      D: "50 %",
      E: "25 %"
    },
    correct_answer: "E",
    explanation_correct: "Da der Vater der Frau Hämophilie hatte (XhY), hat er ihr zwingend sein betroffenes Xh-Chromosom vererbt. Die Frau ist daher obligate Überträgerin (Konduktorin: XHXh). Ihr Partner ist gesund (XHY).\nMögliche Nachkommen:\n- Mädchen: XHXH (gesund), XHXh (gesund, Konduktorin) -> 0 % erkrankt.\n- Knaben: XHY (gesund), XhY (erkrankt) -> 50 % der Knaben erkrankt.\nDie Gesamtwahrscheinlichkeit für ein erkranktes Kind beträgt daher: 1/2 (Wahrscheinlichkeit, dass es ein Knabe wird) × 1/2 (Wahrscheinlichkeit, dass der Knabe Xh erbt) = 1/4 = 25 %.",
    explanations_incorrect: {
      A: "0 % träfe nur zu, wenn die Mutter kein mutiertes Allel trüge.",
      B: "100 % träfe nur zu, wenn beide Eltern homozygot bzw. hemizygot betroffen wären.",
      C: "75 % ist kein Standardwert bei X-rezessiven Kreuzungen gesunder Eltern.",
      D: "50 % wäre das Risiko ausschließlich unter der Voraussetzung, dass bereits feststünde, dass das Kind ein Knabe ist."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-018",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Genetics",
    subtopic: "Stammbaumanalyse",
    difficulty: "intermediate",
    stem: "Welche Konstellation in einem Stammbaum einer seltenen monogenen Erbkrankheit schließt bei vollständiger Penetranz einen X-chromosomal-rezessiven Erbgang definitiv aus (unter Ausschluss von Neumutationen und numerischen Chromosomenaberrationen)?",
    options: {
      A: "Das Krankheitsmerkmal tritt im Stammbaum überwiegend bei männlichen Individuen phänotypisch auf.",
      B: "Eine phänotypisch betroffene Tochter stammt von einem biologischen Vater ab, der phänotypisch gesund ist und das pathogene Allel gesichert nicht trägt.",
      C: "Zwei phänotypisch unauffällige Eltern haben einen phänotypisch betroffenen Sohn.",
      D: "Ein phänotypisch betroffener Mann hat mit einer homozygot gesunden Frau ausschließlich phänotypisch unauffällige Töchter.",
      E: "Das Merkmal überspringt eine Generation, da es über eine klinisch symptomfreie Frau weitergegeben wird."
    },
    correct_answer: "B",
    explanation_correct: "Bei einem X-chromosomal-rezessiven Erbgang muss ein phänotypisch betroffenes weibliches Individuum zwingend homozygot für das mutierte Allel sein (XaXa). Sie erhält ein mutiertes X-Chromosom von der Mutter und das andere obligat von ihrem biologischen Vater. Da Männer nur ein einziges X-Chromosom besitzen (hemizygot), MUSS ein Vater, der das mutierte Allel an seine Tochter weitergibt, phänotypisch selbst erkrankt sein (XaY). Ein gesunder Vater mit Normalallel (XAY) schließt das Auftreten einer homozygot betroffenen Tochter bei einem voll penetranten X-rezessiven Erbgang zwingend aus.",
    explanations_incorrect: {
      A: "Dass überwiegend Männer betroffen sind, ist das typische Merkmal X-rezessiver Erbgänge, da sie als Hemizygote kein zweites X-Chromosom zur Kompensation besitzen.",
      C: "Dass gesunde Eltern einen betroffenen Sohn haben, ist der klassische Fall einer heterozygoten Konduktorin (XAXa) mit einem gesunden Partner (XAY).",
      D: "Dass ein erkrankter Mann (XaY) mit einer homozygot gesunden Frau (XAXA) gesunde Töchter hat (die alle heterozygote Konduktorinnen XAXa sind), ist für X-rezessive Erbgänge charakteristisch.",
      E: "Das scheinbare Überspringen von Generationen durch klinisch unauffällige Konduktorinnen ist ein Kennzeichen rezessiver Vererbungsmuster."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-019",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Chromosomenaberrationen",
    difficulty: "intermediate",
    stem: "Bei einer 16-jährigen Patientin mit Kleinwuchs, primärer Amenorrhö und Pterygium colli (Flügelfell) wird zytogenetisch ein Karyotyp von 45,X festgestellt (Turner-Syndrom). Welche Aussage zu diesem genetischen Befund ist wissenschaftlich zutreffend?",
    options: {
      A: "In den Zellkernen der Patientin sind zwei inaktivierte Barr-Körperchen nachweisbar.",
      B: "Die Patientin besitzt ein Y-Chromosom mit mikrodeletiertem SRY-Gen.",
      C: "Das Turner-Syndrom wird autosomal-dominant mit unvollständiger Penetranz vererbt.",
      D: "Es handelt sich um die einzige beim Menschen postnatal lebensfähige vollständige Monosomie eines Chromosoms.",
      E: "Die Chromosomenaberration beruht stets auf einer Robertson-Translokation der akrozentrischen Chromosomen 13 und 14."
    },
    correct_answer: "D",
    explanation_correct: "Das Turner-Syndrom (45,X oder 45,X0) ist die einzige vollständige Monosomie, die beim Menschen postnatal lebensfähig ist (autosomal-vollständige Monosomien sterben bereits im frühembryonalen Stadium ab). Da nur ein einzelnes X-Chromosom vorhanden ist, findet keine X-Inaktivierung statt; es liegt kein Barr-Körperchen vor (Barr-Körperchen = Anzahl X-Chromosomen minus 1 = 0).",
    explanations_incorrect: {
      A: "Bei 45,X gibt es 0 Barr-Körperchen (zwei Barr-Körperchen fänden sich bei 47,XXX).",
      B: "Ein Y-Chromosom ist beim klassischen Turner-Syndrom (45,X) nicht vorhanden.",
      C: "Es handelt sich um eine numerische Chromosomenaberration (Aneuploidie meist durch meiotische Nondisjunction), nicht um einen monogenen mendelnden Erbgang.",
      E: "Robertson-Translokationen betreffen die akrozentrischen Chromosomen (13, 14, 15, 21, 22), nicht das X-Chromosom."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-020",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Genetics",
    subtopic: "Genomische Prägung (Imprinting)",
    difficulty: "advanced",
    stem: "Eine Mikrodeletion auf Chromosom 15 (15q11–q13) führt je nach elterlicher Herkunft des betroffenen Chromosoms zu zwei völlig unterschiedlichen Erkrankungen: Liegt die Deletion auf dem vom Vater vererbten Chromosom, entsteht das Prader-Willi-Syndrom; liegt dieselbe Deletion auf dem von der Mutter geerbten Chromosom, resultiert das Angelman-Syndrom. Welcher genetische Mechanismus erklärt diesen Unterschied?",
    options: {
      A: "Somatische Hypermutation während der Antikörperbildung",
      B: "Eine meiotische Inversion des kurzen Chromosomenarms",
      C: "Genomische Prägung (Genomic Imprinting) durch elternspezifische DNA-Methylierung",
      D: "Randomisierte X-Inaktivierung durch lncRNA (XIST)",
      E: "Vorzeitige Telomerverkürzung bei männlichen Keimzellen"
    },
    correct_answer: "C",
    explanation_correct: "Genomische Prägung (Genomic Imprinting) bezeichnet die epigenetische Inaktivierung von Genen in Abhängigkeit von ihrer elterlichen Herkunft. In der Region 15q11-q13 sind bestimmte Gene maternal stillgelegt (z. B. SNRPN) und andere paternal stillgelegt (z. B. UBE3A). Geht durch paternale Deletion das einzig aktive paternale Gen verloren, resultiert das Prader-Willi-Syndrom (PWS). Geht durch maternale Deletion das einzig aktive maternale Gen (UBE3A) verloren, entsteht das Angelman-Syndrom (AS).",
    explanations_incorrect: {
      A: "Somatische Hypermutation verändert V-Gene von Immunglobulinen in B-Zellen, hat aber nichts mit Imprinting zu tun.",
      B: "Inversionen verändern die Genreihenfolge, erklären aber nicht die phänotypische Divergenz gleicher Deletionen unterschiedlicher Elternherkunft.",
      D: "X-Inaktivierung (Lyonisierung) betrifft X-Chromosomen bei Frauen, Chromosom 15 ist jedoch ein Autosom.",
      E: "Telomerverkürzung steuert die zelluläre Seneszenz, nicht das genomische Imprinting."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Molekulare Genetik (bio-05-molgen) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-021",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Struktur & Chargaff-Regel",
    difficulty: "foundational",
    stem: "Eine Analyse einer doppelsträngigen DNA-Probe ergibt einen Guanin-Gehalt von 28 Mol-%. Welcher molare Prozentsatz an Thymin liegt in dieser doppelsträngigen DNA-Probe vor?",
    options: {
      A: "28 %",
      B: "24 %",
      C: "14 %",
      D: "44 %",
      E: "22 %"
    },
    correct_answer: "E",
    explanation_correct: "Nach den Chargaff-Regeln gilt für doppelsträngige DNA: %G = %C und %A = %T.\nWenn Guanin (G) = 28 % beträgt, muss Cytosin (C) ebenfalls 28 % betragen.\nZusammen ergibt das für G + C = 56 %.\nDie verbleibenden Basen (Adenin + Thymin) machen folglich: 100 % – 56 % = 44 % aus.\nDa Adenin und Thymin zu gleichen Teilen vorliegen (A = T), beträgt der Thymin-Gehalt: 44 % / 2 = 22 %.",
    explanations_incorrect: {
      A: "28 % ist der Gehalt an Cytosin (bzw. Guanin).",
      B: "24 % resultiert aus Rechenfehlern bei der Subtraktion von 100 %.",
      C: "14 % wäre die Hälfte des Guanin-Anteils, hat aber keinen biochemischen Bezug.",
      D: "44 % ist die Summe aus Adenin und Thymin (A + T), nicht der Gehalt an Thymin alleine."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-022",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Replikation & Folgestrang",
    difficulty: "intermediate",
    stem: "Warum muss der Folgestrang (Lagging Strand) an der eukaryotischen Replikationsgabel diskontinuierlich unter Bildung von Okazaki-Fragmenten synthetisiert werden?",
    options: {
      A: "Weil alle bekannten DNA-Polymerasen Neostränge ausschließlich in 5'→3'-Richtung synthetisieren können, während die Replikationsgabel auf dem Folgestrang in Gegenrichtung fortschreitet.",
      B: "Weil DNA-Ligasen nur Fragmente verknüpfen können, die weniger als 200 Basenpaare lang sind.",
      C: "Weil auf dem Folgestrang keine RNA-Primer synthetisiert werden können.",
      D: "Weil die Helikase die Doppelhelix auf dem Folgestrang nur schrittweise alle 1.000 Basenpaare spaltet.",
      E: "Weil Desoxyribonukleotide am Folgestrang durch Deaminierung instabil werden."
    },
    correct_answer: "A",
    explanation_correct: "DNA-Polymerasen können Nukleotide nur an ein freies 3'-OH-Ende anfügen; die Kettensynthese verläuft daher obligat von 5' nach 3'. Da die beiden Stränge der DNA-Doppelhelix antiparallel angeordnet sind, bewegt sich die Replikationsgabel auf dem Matrizenstrang des Folgestrangs in 5'→3'-Richtung. Die Synthese des komplementären Neostrangs muss daher rückwärts (von der Gabel weg in 5'→3'-Richtung) erfolgen, was eine periodische Neuanlagerung von RNA-Primern und die diskontinuierliche Bildung von Okazaki-Fragmenten erzwingt.",
    explanations_incorrect: {
      B: "DNA-Ligasen verknüpfen DNA-Stränge beliebiger Länge, sofern ein 3'-OH und ein 5'-Phosphat vorliegen; sie erzwingen keine Fragmentierung.",
      C: "Der Folgestrang benötigt sogar viele RNA-Primer (für jedes Okazaki-Fragment einen), während der Leitstrang nur einen einzigen initialen Primer benötigt.",
      D: "Die replikative Helikase wandert kontinuierlich entlang des Leitstrangs und entwindet die Doppelhelix stetig.",
      E: "Die chemische Stabilität der dNTPs unterscheidet sich zwischen Leit- und Folgestrang in keiner Weise."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-023",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Genregulation: Enhancer",
    difficulty: "intermediate",
    stem: "Welche Aussage beschreibt die Funktion und Wirkweise von Enhancer-Elementen bei der Transkriptionsregulation in menschlichen Zellen korrekt?",
    options: {
      A: "Sie sind RNA-Sequenzen, an die Ribosomen zur Translationsinitiierung binden.",
      B: "Sie sind Stop-Signale, die das Ablösen der RNA-Polymerase am Genende bewirken.",
      C: "Sie spalten Introns während des alternativen Spleißens heraus.",
      D: "Sie sind DNA-Sequenzelemente, die oft viele Kilobasen vom Promotor entfernt liegen und durch Bindung spezifischer Transkriptionsfaktoren über DNA-Schleifenbildung (Looping) die Transkription stimulieren.",
      E: "Sie methylieren Histonproteine zur permanenten Inaktivierung von Heterochromatin."
    },
    correct_answer: "D",
    explanation_correct: "Enhancer sind regulatorische DNA-Sequenzen, die Tausende bis Hunderttausende Basenpaare upstream, downstream oder innerhalb von Introns des Zielgens liegen können und deren Orientierung flexibel ist. An sie binden aktivierende Transkriptionsfaktoren (Aktivatoren). Durch Biegung und Schleifenbildung der DNA (DNA Looping), vermittelt durch Proteinkomplexe wie den Mediator und Kohäsine, treten die Aktivatoren in direkten Kontakt mit dem basalen Transkriptionsapparat (RNA-Polymerase II) am Promotor und steigern die Transkriptionsinitiationsrate drastisch.",
    explanations_incorrect: {
      A: "Ribosomenbindungsstellen auf eukaryotischer mRNA sind die 5'-Cap-Struktur und die Kozak-Sequenz, keine DNA-Enhancer.",
      B: "Terminationssignale am Genende werden durch Polyadenylierungssignale (AAUAAA) gesteuert.",
      C: "Das Herausschneiden von Introns wird durch das Spleißosom (snRNPs) katalysiert.",
      E: "Histonmethylierung wird durch Histon-Methyltransferasen (HMT) katalysiert, nicht durch Enhancer-DNA."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-024",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Translation & Aminoacyl-tRNA-Synthetasen",
    difficulty: "advanced",
    stem: "Welches Enzym gewährleistet die Genauigkeit des genetischen Codes bei der Translation, indem es eine spezifische Aminosäure unter ATP-Spaltung kovalent an ihre passende (kognate) tRNA knüpft und fehlerhafte Beladungen über eine hydrolytische Korrekturlese-Aktivität entfernt?",
    options: {
      A: "Die Peptidyltransferase der 60S-ribosomalen Untereinheit",
      B: "Die Aminoacyl-tRNA-Synthetase",
      C: "Die RNA-Polymerase II",
      D: "Der eukaryotische Elongationsfaktor 1A (eEF1A)",
      E: "Die Signalpeptidase des rauen ER"
    },
    correct_answer: "B",
    explanation_correct: "Die Aminoacyl-tRNA-Synthetasen (aaRS) sind die eigentlichen 'Übersetzer' des genetischen Codes. Sie aktivieren eine Aminosäure unter ATP-Verbrauch zu Aminoacyl-AMP und übertragen sie auf die 3'-terminale Ribose (CCA-Ende) der passenden tRNA. Um strukturell ähnliche Aminosäuren (z. B. Isoleucin vs. Valin) zu unterscheiden, besitzen viele Synthetasen ein zweites, hydrolytisches Editierzentrum: Zu kleine oder falsch gebundene Aminosäuren werden dort sofort abhydrolisiert, wodurch die Fehlerrate auf unter 1 in 10.000 sinkt.",
    explanations_incorrect: {
      A: "Die Peptidyltransferase ist ein Ribozym (28S-rRNA) im Ribosom, das Peptidbindungen zwischen bereits korrekt beladenen tRNAs knüpft, aber keine tRNAs mit Aminosäuren belädt.",
      C: "RNA-Polymerase II synthetisiert prä-mRNA im Zellkern.",
      D: "eEF1A transportiert beladene Aminoacyl-tRNAs zum A-Site des Ribosoms unter GTP-Spaltung, prüft aber nicht die Richtigkeit der Verknüpfung.",
      E: "Die Signalpeptidase schneidet N-terminale Signalsequenzen im ER-Lumen ab."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-025",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Genmutationen",
    difficulty: "intermediate",
    stem: "Welche der folgenden Mutationen innerhalb eines proteincodierenden Exons führt mit der höchsten Wahrscheinlichkeit zu einem vollständigen Funktionsverlust des Proteins durch Verschiebung des Leserasters (Frameshift-Mutation)?",
    options: {
      A: "Eine stumme Mutation (Silent Mutation) in der dritten Base eines Codons",
      B: "Eine In-Frame-Deletion von exakt 3 Basenpaaren",
      C: "Die Deletion eines einzelnen Basenpaars nahe dem Translationsstart (5'-Bereich des Exons)",
      D: "Eine konservative Missense-Mutation, die Aspartat durch Glutamat ersetzt",
      E: "Eine Inversion von 6 Basenpaaren innerhalb einer unstrukturierten Linker-Region"
    },
    correct_answer: "C",
    explanation_correct: "Da der genetische Code kommatolos in Basentriplets gelesen wird, verschiebt jede Deletion oder Insertion, die nicht durch 3 teilbar ist (wie 1 oder 2 bp), das gesamte Leseraster ab der Mutationsstelle (Frameshift). Alle nachfolgenden Codons werden fehlerhaft translatiert, und es entsteht meist rasch ein vorzeitiges Stop-Codon, was zum Abbruch der Translation oder zum Nonsense-mediated decay der mRNA führt.",
    explanations_incorrect: {
      A: "Stumme Mutationen ändern die codierte Aminosäure aufgrund der Degeneration des genetischen Codes nicht.",
      B: "Eine Deletion von 3 bp entfernt exakt eine Aminosäure, lässt das nachfolgende Leseraster aber vollkommen intakt (In-Frame-Mutation).",
      D: "Eine konservative Missense-Mutation ersetzt eine Aminosäure durch eine biochemisch sehr ähnliche (beide negativ geladen); das Protein bleibt meist weitgehend funktionsfähig.",
      E: "6 bp entsprechen zwei Codons; eine Inversion führt nicht zur Leserasterverschiebung nachfolgender Triplets."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Zellstoffwechsel & Energiegewinnung (bio-06-stoffwechsel) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-026",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Glykolyse & PFK-1",
    difficulty: "foundational",
    stem: "Welches Enzym katalysiert die entscheidende irreversible Schrittmacher-Reaktion der zytosolischen Glykolyse im menschlichen Glukosestoffwechsel?",
    options: {
      A: "Phosphofructokinase-1 (PFK-1)",
      B: "Lactatdehydrogenase (LDH)",
      C: "Glukose-6-phosphat-Dehydrogenase (G6PDH)",
      D: "Pyruvatdehydrogenase (PDH)",
      E: "Phosphoglyceratkinase (PGK)"
    },
    correct_answer: "A",
    explanation_correct: "Phosphofructokinase-1 (PFK-1) phosphoryliert Fructose-6-phosphat unter ATP-Verbrauch zu Fructose-1,6-bisphosphat. Diese Reaktion ist der wichtigste allosterische Kontrollpunkt der Glykolyse ('committed step'): PFK-1 wird durch hohe ATP- und Citratspiegel (Signal für zelluläre Energiesättigung) allosterisch gehemmt und durch AMP sowie Fructose-2,6-bisphosphat stark aktiviert.",
    explanations_incorrect: {
      B: "Die Lactatdehydrogenase katalysiert die reversible Reduktion von Pyruvat zu Lactat bei Sauerstoffmangel, steuert aber nicht den Fluss der Glykolyse.",
      C: "G6PDH ist das Schrittmacherenzym des Pentosephosphatwegs, nicht der Glykolyse.",
      D: "Der Pyruvatdehydrogenase-Komplex liegt in der mitochondrialen Matrix und verknüpft die Glykolyse mit dem Citratzyklus.",
      E: "Die Phosphoglyceratkinase katalysiert eine reversible Substratkettenphosphorylierung in der Ertragsphase der Glykolyse."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-027",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Atmungskette & Entkopplung",
    difficulty: "intermediate",
    stem: "Das Protein Thermogenin (UCP-1) wird in den inneren Mitochondrienmembranen des braunen Fettgewebes exprimiert. Welcher biochemische Effekt wird durch seine Aktivierung bei Kälteexposition hervorgerufen?",
    options: {
      A: "Die vollständige Hemmung des Elektronentransports an Komplex IV der Atmungskette",
      B: "Eine drastische Steigerung der zellulären ATP-Synthese pro verbrauchtem Sauerstoffmolekül",
      C: "Der direkte Abbau von Speicherfett zu Ketonkörpern ohne Sauerstoffverbrauch",
      D: "Der Rückstrom von Protonen aus dem Intermembranraum in die Matrix unter Umgehung der ATP-Synthase, wodurch die elektrochemische Gradientenenergie direkt als Wärme freigesetzt wird",
      E: "Die irreversible Blockade der Carnitin-Palmitoyl-Transferase-1"
    },
    correct_answer: "D",
    explanation_correct: "Thermogenin (Uncoupling Protein 1, UCP-1) ist ein regulierter Protonenkanal in der inneren Mitochondrienmembran brauner Fettzellen. Wird UCP-1 geöffnet (über Noradrenalin und freie Fettsäuren), fließen die von den Komplexen I, III und IV in den Intermembranraum gepumpten Protonen zurück in die Matrix, OHNE die ATP-Synthase (Komplex V) anzutreiben. Die elektrochemische Energie des Protonengradienten wird vollständig als Wärme freigesetzt (zitterfreie Thermogenese).",
    explanations_incorrect: {
      A: "Der Elektronentransport und die Sauerstoffzehrung laufen unter Entkopplung sogar mit maximaler Geschwindigkeit weiter, da die bremsende Protonenstauung entfällt.",
      B: "Die ATP-Synthese nimmt ab, da der Protonengradient kurzgeschlossen wird; das P/O-Verhältnis sinkt gegen null.",
      C: "Die Verbrennung von Fettsäuren erfordert unverändert die Zellatmung und Sauerstoff.",
      E: "CPT-1 wird zur Bereitstellung von Fettsäuren für die beta-Oxidation benötigt und nicht gehemmt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-028",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Milchsäuregärung & NAD+",
    difficulty: "intermediate",
    stem: "Unter anaeroben Bedingungen (z. B. im stark beanspruchten Skelettmuskel oder in Erythrozyten) reduziert die Lactatdehydrogenase Pyruvat zu Lactat. Welcher biochemische Hauptzweck wird durch diesen Schritt für die Aufrechterhaltung der Energiegewinnung erfüllt?",
    options: {
      A: "Die direkte Gewinnung von zwei zusätzlichen ATP-Molekülen pro Pyruvatmolekül",
      B: "Die kontinuierliche Re-Oxidation von zytosolischem NADH zu NAD+, das als unverzichtbarer Elektronenakzeptor für die Glycerinaldehyd-3-phosphat-Dehydrogenase in der Glykolyse benötigt wird",
      C: "Die Neutralisierung intrazellulärer Säure zur Verhinderung von Muskelkrämpfen",
      D: "Die Fixierung von Kohlendioxid zur anaplerotischen Auffüllung des Citratzyklus",
      E: "Die direkte Einschleusung von Lactat in die mitochondriale beta-Oxidation"
    },
    correct_answer: "B",
    explanation_correct: "Im 6. Schritt der Glykolyse oxidiert die Glycerinaldehyd-3-phosphat-Dehydrogenase (GAPDH) ihr Substrat unter Reduktion von NAD+ zu NADH. Steht kein Sauerstoff zur Verfügung, kann NADH in der mitochondrialen Atmungskette nicht re-oxidiert werden. Ohne NAD+ würde die Glykolyse und damit jede ATP-Produktion sofort stoppen. Die Lactatdehydrogenase (LDH) oxidiert NADH regenerativ zu NAD+ zurück, indem sie Pyruvat zu Lactat reduziert.",
    explanations_incorrect: {
      A: "Die LDH-Reaktion selbst generiert kein ATP.",
      C: "Die Bildung von Milchsäure/Lactat senkt den pH-Wert und trägt zur Azidose bei, anstatt ihn zu neutralisieren.",
      D: "Anaplerotische Reaktionen nutzen Pyruvatcarboxylase unter ATP-Verbrauch, nicht LDH.",
      E: "Lactat kann in der Zelle nicht beta-oxidiert werden; es wird über Monocarboxylat-Transporter (MCT) ins Blut abgegeben und in Leber/Herz verwertet (Cori-Zyklus)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-029",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Zellstoffwechsel & Energiegewinnung",
    subtopic: "Enzymkinetik & Hemmung",
    difficulty: "advanced",
    stem: "Ein pharmakologischer Wirkstoff hemmt ein Enzym reversibel. In einer enzymkinetischen Untersuchung zeigt sich, dass die maximale Reaktionsgeschwindigkeit (Vmax) unverändert bleibt, die Michaelis-Menten-Konstante (Km) jedoch signifikant ansteigt. Welcher Hemmtyp liegt vor und wie verhält sich die Hemmwirkung bei hoher Substratkonzentration?",
    options: {
      A: "Eine nicht-kompetitive Hemmung; sie kann durch Erhöhung der Substratkonzentration nicht aufgehoben werden.",
      B: "Eine unkompetitive Hemmung; Vmax und Km sinken im gleichen Verhältnis ab.",
      C: "Eine irreversible Hemmung durch kovalente Zerstörung des aktiven Zentrums.",
      D: "Eine allosterische Produkthemmung, die nur durch Enzymphosphorylierung reversibel ist.",
      E: "Eine kompetitive Hemmung; der Inhibitor konkurriert mit dem Substrat um das aktive Zentrum und kann durch ausreichend hohe Substratkonzentrationen vollständig verdrängt werden."
    },
    correct_answer: "E",
    explanation_correct: "Bei der kompetitiven Hemmung ähnelt der Inhibitor dem natürlichen Substrat und bindet reversibel an dasselbe aktive Zentrum des Enzyms. Durch Erhöhung der Substratkonzentration kann der Inhibitor vollständig aus dem aktiven Zentrum verdrängt werden, sodass die maximale Reaktionsgeschwindigkeit (Vmax) unverändert erreicht wird. Da für die halbmaximale Geschwindigkeit jedoch mehr Substrat erforderlich ist, ist die scheinbare Michaelis-Menten-Konstante (Km) erhöht.",
    explanations_incorrect: {
      A: "Nicht-kompetitive Inhibitoren binden an allosterische Zentren und senken Vmax, während Km unverändert bleibt.",
      B: "Unkompetitive Inhibitoren binden nur an den Enzym-Substrat-Komplex; dabei sinken sowohl Vmax als auch Km im gleichen Verhältnis.",
      C: "Irreversible Hemmung (z. B. Aspirin bei COX-1) senkt die Zahl aktiver Enzymmoleküle und verringert Vmax irreversibel.",
      D: "Allosterische Regulation verändert meist Vmax oder erzeugt sigmoidale Kinetiken, entspricht aber nicht dem isolierten Km-Anstieg bei konstantem Vmax."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 7: Herz-Kreislauf-System (bio-07-herzkreislauf) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-030",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Erregungsleitungssystem",
    difficulty: "foundational",
    stem: "Welche anatomische Struktur fungiert unter physiologischen Bedingungen als primärer Schrittmacher des menschlichen Herzens mit der höchsten spontanen Depolarisationsfrequenz (~60–80 Schläge/Minute)?",
    options: {
      A: "Der Atrioventrikularknoten (AV-Knoten) im Vorhofseptum",
      B: "Das His-Bündel im membranösen Kammerseptum",
      C: "Der Sinusknoten (Nodus sinuatrialis) in der Wand des rechten Vorhofs",
      D: "Die Kardiomyozyten der linken Ventrikelspitze",
      E: "Die Purkinje-Fasern im subendokardialen Myokard"
    },
    correct_answer: "C",
    explanation_correct: "Der Sinusknoten (Nodus sinuatrialis) liegt subepikardial in der Wand des rechten Vorhofs nahe der Einmündung der oberen Hohlvene (Vena cava superior). Seine spezialisierten Schrittmacherzellen besitzen ein instabiles Ruhemembranpotenzial mit spontaner langsamer diastolischer Depolarisation. Da der Sinusknoten mit ca. 60–80 Impulsen/Minute physiologisch die höchste Eigenfrequenz aufweist, überstimuliert er die untergeordneten Schrittmacherzentren (AV-Knoten: ca. 40–50/min; His-Bündel und Tawara-Schenkel/Purkinje-Fasern: ca. 20–40/min) und fungiert als primärer Taktgeber des Herzens.",
    explanations_incorrect: {
      A: "Der AV-Knoten ist der sekundäre Schrittmacher; er springt nur bei Ausfall oder Leitungsblock des Sinusknotens mit ca. 40–50 bpm ein.",
      B: "Das His-Bündel leitet die Erregung vom AV-Knoten durch das Herzskelett und besitzt eine tertiäre Eigenfrequenz von ca. 30–40 bpm.",
      D: "Arbeitsmyozyten besitzen unter gesunden Bedingungen keine spontane Schrittmacheraktivität.",
      E: "Purkinje-Fasern leiten die Erregung mit hoher Geschwindigkeit (ca. 2–4 m/s), besitzen aber nur eine sehr langsame Schrittmacherfrequenz (ca. 20–30 bpm)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-031",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "EKG & Herzzyklus",
    difficulty: "intermediate",
    stem: "Welcher elektrophysiologische Vorgang im menschlichen Herzen entspricht im Oberflächen-EKG der sogenannten T-Welle?",
    options: {
      A: "Die Vorhofdepolarisation unmittelbar vor der Vorhofkontraktion",
      B: "Die Überleitungsverzögerung der Erregung im AV-Knoten",
      C: "Die Ausbreitung der Depolarisation über beide Herzkammern",
      D: "Die Repolarisation (Erregungsrückbildung) beider Herzkammern",
      E: "Die mechanische Öffnung der Aorten- und Pulmonalklappe"
    },
    correct_answer: "D",
    explanation_correct: "Die T-Welle im EKG spiegelt die ventrikuläre Repolarisation wider (Erregungsrückbildung der Kammermuskulatur durch K+-Ausstrom über verzögerte Gleichrichterkanäle IKr und IKs).\nP-Welle: Erregungsausbreitung in den Vorhöfen.\nPQ-Intervall: atrioventrikuläre Überleitungszeit.\nQRS-Komplex: Kammerdepolarisation (Erregungsausbreitung in den Ventrikeln).\nST-Strecke: Plateauphase des ventrikulären Aktionspotenzials (alle Ventrikelanteile depolarisiert).",
    explanations_incorrect: {
      A: "Die Vorhofdepolarisation wird durch die P-Welle repräsentiert.",
      B: "Die AV-Knoten-Verzögerung spiegelt sich im PQ-Intervall wider.",
      C: "Die Kammerdepolarisation entspricht dem QRS-Komplex.",
      E: "Mechanische Klappenöffnungen erzeugen keine direkten elektrischen EKG-Wellen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-032",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Hämodynamik & Windkessel",
    difficulty: "intermediate",
    stem: "Welcher physiologische Mechanismus ermöglicht es der menschlichen Aorta, den diskontinuierlichen, stoßweisen Blutauswurf des linken Ventrikels in einen kontinuierlicheren peripheren Kapillarstrom umzuwandeln (Windkesselfunktion)?",
    options: {
      A: "Die elastische Dehnung der Aortenwand während der Systole mit Zwischenspeicherung von Druckenergie und deren elastische Rückstellung während der Diastole",
      B: "Aktive wellenförmige peristaltische Muskelkontraktionen der Tunica media",
      C: "Ein System mikroskopischer Einweg-Klappen entlang des gesamten Verlaufs der Aorta thoracica",
      D: "Die permanente Erzeugung von Turbulenzen zur Beschleunigung des diastolischen Blutes",
      E: "Ein kontinuierlicher Thoraxunterdruck, der das Blut rhythmisch durch die Kapillaren saugt"
    },
    correct_answer: "A",
    explanation_correct: "Die Aorta und herznahen Gefäße gehören zum elastischen Gefäßtyp (reich an Elastin in der Tunica media). Während der Kammersystole dehnt das ausgeworfene Schlagvolumen die Aorta elastisch auf; ein erheblicher Teil der kinetischen Energie wird als elastische Spannungsenergie (potentielle Energie) gespeichert. In der Diastole schließt die Aortenklappe, und die Gefäßwand federt elastisch zurück. Dadurch treibt sie das gespeicherte Blutvolumen kontinuierlich weiter in die Peripherie und glättet Druck- und Flussschwankungen.",
    explanations_incorrect: {
      B: "Gefäßwände besitzen keine propulsive Peristaltik; glatte Muskelzellen regulieren den Vasomotorentonus, nicht die Windkesselfunktion.",
      C: "Es gibt im arteriellen Schenkel keine Klappen außer den Taschenklappen an den Herzausflusstrakten.",
      D: "Turbulenzen erhöhen den Strömungswiderstand und mindern die Pumpeffizienz.",
      E: "Der Thoraxunterdruck unterstützt den venösen Rückstrom zum rechten Herzen, treibt aber nicht den arteriellen Windkessel an."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-033",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Herz-Kreislauf-System",
    subtopic: "Hämostase & Blutgerinnung",
    difficulty: "advanced",
    stem: "Welcher biochemische Schritt vollendet die sekundäre (plasmatische) Hämostase, indem er aus löslichem Fibrinogen ein mechanisch stabiles, unlösliches Fibrinnetzwerk formt?",
    options: {
      A: "Die Freisetzung von Thromboxan A2 aus aktivierten Thrombozyten zur irreversiblen Plättchenaggregation",
      B: "Die Spaltung von Prothrombin durch Heparin und Antithrombin",
      C: "Thrombin spaltet Fibrinopeptide A und B von Fibrinogen ab; die aggregierenden Fibrinmonomere werden anschließend durch den Transglutaminase-Faktor XIIIa kovalent quervernetzt.",
      D: "Plasmin spaltet lösliche Fibrinpolymere in D-Dimere",
      E: "Von-Willebrand-Faktor bildet kovalente Esterbindungen mit subendothelialem Kollagen"
    },
    correct_answer: "C",
    explanation_correct: "Das Enzym Thrombin (Faktor IIa) spaltet spezifisch die stark negativ geladenen Fibrinopeptide A und B vom Fibrinogenmolekül (Faktor I) ab. Die resultierenden Fibrinmonomere lagern sich spontan über nicht-kovalente Wechselwirkungen end-to-end und side-to-side zu Protofibrillen zusammen. Um das Netzwerk zugfest und resistent gegen vorzeitige Fibrinolyse zu machen, aktiviert Thrombin den fibrinstabilisierenden Faktor XIII (eine Transglutaminase). Faktor XIIIa knüpft kovalente Isopeptidbindungen zwischen Lysin- und Glutaminresten benachbarter Fibrinstränge.",
    explanations_incorrect: {
      A: "Thromboxan A2 vermittelt die primäre Hämostase (Thrombozytenaktivierung und Vasokonstriktion), nicht das Fibrinnetzwerk.",
      B: "Antithrombin hemmt Thrombin und Gerinnungsfaktoren, aktiviert sie nicht.",
      D: "Plasmin baut Fibrin ab (Fibrinolyse), statt es zu bilden.",
      E: "Von-Willebrand-Faktor vermittelt die Thrombozytenadhäsion an Kollagen bei der primären Hämostase."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 8: Atmungssystem (bio-08-atmung) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-034",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Lungenphysiologie & Surfactant",
    difficulty: "foundational",
    stem: "Welche Zellen der menschlichen Alveolarwand produzieren das lipid- und proteinreiche Stoffgemisch Surfactant, und welche primäre physikalisch-funktionelle Aufgabe erfüllt es bei der Atmung?",
    options: {
      A: "Typ-I-Pneumozyten; es erhöht die Oberflächenspannung zur Erleichterung der passiven Ausatmung.",
      B: "Alveolarmakrophagen; es zerstört eingeatmete bakterielle Zellwände über Lysozym.",
      C: "Becherzellen; es kleidet das Alveolarlumen mit zähem Schleim zum Partikelschutz aus.",
      D: "Endothelzellen; es reguliert den Blutfluss durch lokale Freisetzung von Angiotensin II.",
      E: "Typ-II-Pneumozyten; es setzt die Oberflächenspannung an der alveolären Grenzschicht herab und verhindert so das Kollabieren kleiner Alveolen am Ende der Exspiration (Atelektase)."
    },
    correct_answer: "E",
    explanation_correct: "Typ-II-Pneumozyten (Alveolarepithelzellen Typ II) machen ca. 60 % der Alveolarzellen aus und sezernieren Surfactant (Surface Active Agent; v. a. Dipalmitoylphosphatidylcholin, DPPC, und Apoproteine SP-A bis SP-D). Nach dem Laplace-Gesetz (P = 2γ/r) herrscht in kleinen Alveolen mit geringem Radius r ein höherer Kollapsdruck als in großen. Surfactant senkt die Oberflächenspannung γ umso stärker, je kleiner die Alveole komprimiert wird. Dadurch stabilisiert es unterschiedlich große Alveolen, erhöht die Lungen-Compliance und verhindert den endexspiratorischen Kollaps (Atelektasenbildung).",
    explanations_incorrect: {
      A: "Typ-I-Pneumozyten sind hauchdünne Deckzellen für den Gasaustausch; Surfactant senkt die Oberflächenspannung, anstatt sie zu erhöhen.",
      B: "Alveolarmakrophagen phagozytieren Partikel, synthetisieren aber kein Surfactant.",
      C: "In Alveolen gibt es keine Becherzellen; Schleim würde die Blut-Luft-Schranke verdicken und den Gasaustausch ersticken.",
      D: "Endothelzellen kleiden Kapillaren aus, produzieren aber kein Surfactant."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-035",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "Gasaustausch & O2-Bindungskurve",
    difficulty: "intermediate",
    stem: "Welche Kombination von Mikromilieu-Faktoren im Kapillarblut stoffwechselaktiver Gewebe (wie intensiv arbeitender Muskulatur) bewirkt eine Rechtsverschiebung der Hämoglobin-Sauerstoff-Bindungskurve (Bohr-Effekt) und erleichtert dadurch die Sauerstoffabgabe?",
    options: {
      A: "Erhöhter pH-Wert (Alkalose), erniedrigter pCO2, Hypothermie und verringertes 2,3-Bisphosphoglycerat",
      B: "Absinken des pH-Wertes (Azidose durch H+), Anstieg des pCO2, Temperaturanstieg und Zunahme von 2,3-Bisphosphoglycerat (2,3-BPG)",
      C: "Vollständige Bindung von Kohlenmonoxid an alle vier Häm-Gruppen",
      D: "Absinken des pCO2 bei gleichzeitigem Abfall der Gewebetemperatur",
      E: "Erhöhung des Luftdrucks und Inaktivierung der Carboanhydrase"
    },
    correct_answer: "B",
    explanation_correct: "Eine Rechtsverschiebung der Sauerstoff-Bindungskurve bedeutet eine herabgesetzte O2-Affinität des Hämoglobins: Bei gleichem pO2 gibt das Hämoglobin mehr Sauerstoff an das Gewebe ab. Faktoren, die die T-Form (Tense-Form) des Hämoglobins stabilisieren und die Kurve nach rechts verschieben:\n1. Absinken des pH-Werts (erhöhte H+-Konzentration / Bohr-Effekt),\n2. Anstieg des pCO2 (Bildung von Carbaminohämoglobin),\n3. Erhöhte Temperatur (arbeitsbedingte Erwärmung),\n4. Anstieg von 2,3-Bisphosphoglycerat (2,3-BPG).",
    explanations_incorrect: {
      A: "Hoher pH, niedriges pCO2, Kälte und wenig 2,3-BPG verschieben die Kurve nach LINKS (erhöhte O2-Affinität, erschwerte Abgabe wie in der Lunge oder bei Fetalhämoglobin).",
      C: "Kohlenmonoxid (CO) bindet mit hoher Affinität an Hämoglobin und verschiebt die Bindungskurve der verbleibenden Häm-Gruppen extrem nach LINKS (Vergiftung).",
      D: "Niedriges pCO2 und Kälte bewirken eine Linksverschiebung.",
      E: "Der Umgebungsdruck verschiebt die allosterische Affinität des Hämoglobins nicht nach rechts."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-036",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Atmungssystem",
    subtopic: "CO2-Transport & Hamburger-Shift",
    difficulty: "advanced",
    stem: "Rund 70–80 % des im peripheren Gewebe anfallenden Kohlendioxids (CO2) werden im Blut in Form von Bikarbonat (HCO3–) transportiert. Welcher molekulare Prozess vollzieht sich dabei im Erythrozyten und an seiner Membran beim Eintritt von CO2 in das Kapillarblut?",
    options: {
      A: "CO2 wird durch Hämoglobin direkt gespalten und als unlösliches Calciumcarbonat gebunden.",
      B: "Bikarbonat diffundiert als hydrophiles Anion frei durch die Phospholipid-Doppelschicht ins Blutplasma.",
      C: "Die Carboanhydrase transportiert Bikarbonat unter direktem ATP-Verbrauch in die Mitochondrien.",
      D: "Die Carboanhydrase hydratisiert CO2 rasch zu Kohlensäure (H2CO3), die zu H+ und Bikarbonat (HCO3–) dissoziiert; HCO3– wird über einen Membrantransporter im Austausch gegen extrazelluläres Chlorid (Cl–) ins Plasma abgegeben (Chloridverschiebung / Hamburger-Shift).",
      E: "Die Lactatdehydrogenase bindet CO2 an Pyruvat und transportiert es als Lactat zur Lunge."
    },
    correct_answer: "D",
    explanation_correct: "Im Gewebe diffundiert CO2 entlang seines Konzentrationsgradienten in die Erythrozyten. Dort katalysiert das Enzym Carboanhydrase (CA) die reversible Hydratisierung zu Kohlensäure: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3–. Die freiwerdenden Protonen (H+) werden durch Desoxyhämoglobin gepuffert. Das entstandene Bikarbonat (HCO3–) wird über ein Anionenaustauscher-Protein im Austausch gegen Chloridionen (Cl–) ins Plasma geschleust, um das Membranpotenzial neutral zu halten. Dieser Prozess wird als Chloridverschiebung oder Hamburger-Shift bezeichnet. In den Lungenkapillaren läuft die Reaktion in umgekehrter Richtung ab, sodass CO2 abgeatmet werden kann.",
    explanations_incorrect: {
      A: "Hämoglobin spaltet kein CO2; es bildet reversible Carbaminoverbindungen an Aminogruppen, kein Calciumcarbonat.",
      B: "Geladene Ionen wie HCO3– können die hydrophobe Membrandoppelschicht nicht durch einfache Diffusion überwinden.",
      C: "Carboanhydrase ist ein Enzym, kein Transportprotein, und Erythrozyten besitzen gar keine Mitochondrien.",
      E: "Lactatdehydrogenase transportiert kein Kohlendioxid."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 9: Nervensystem (bio-09-nervensystem) - 4 Aufgaben
  // -------------------------------------------------------------
  {
    id: "BIO-BMS-GP2-037",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Ruhemembranpotenzial",
    difficulty: "foundational",
    stem: "Welche Ionenverteilung und Membrankomponente sind primär für das negative Ruhemembranpotenzial (ca. –70 mV) eines menschlichen Neurons verantwortlich?",
    options: {
      A: "Eine hohe intrazelluläre K+-Konzentration bei hoher Membranruhepermeabilität für K+ durch Kalium-Leck-Kanäle, aufrechterhalten durch die elektrogene Na+/K+-ATPase (3 Na+ nach außen / 2 K+ nach innen)",
      B: "Ein permanenter massiver Einstrom von Na+-Ionen über geöffnete Natrium-Spannungskanäle",
      C: "Eine vollkommene Ionenundurchlässigkeit der neuronalen Membran ohne Beteiligung aktiver Transporter",
      D: "Ein selektiver Auswärtstransport von Chloridionen über spannungsgesteuerte Calciumkanäle",
      E: "Eine identische Konzentration aller Ionen auf der intra- und extrazellulären Seite der Membran"
    },
    correct_answer: "A",
    explanation_correct: "Das Ruhepotenzial eines Neurons liegt bei etwa –70 mV nahe dem Gleichgewichtspotenzial für Kalium (ca. –90 mV), weil die Plasmamembran im Ruhezustand durch konstitutiv geöffnete Kalium-Leck-Kanäle (K2P) eine um ein Vielfaches höhere Permeabilität für K+ besitzt als für andere Ionen. K+ folgt seinem Konzentrationsgradienten nach außen, bis die zurückbleibenden impermeablen organischen Anionen ein negatives Membranpotenzial aufbauen. Die Na+/K+-ATPase hält den Konzentrationsgradienten aktiv aufrecht (3 Na+ raus, 2 K+ rein pro ATP) und trägt elektrogen ca. –5 bis –10 mV bei.",
    explanations_incorrect: {
      B: "Ein massiver Na+-Einstrom depolarisiert die Membran im Aktionspotenzial auf positive Werte (+30 mV); in Ruhe sind Na+-Spannungskanäle geschlossen.",
      C: "Wäre die Membran völlig undurchlässig, könnte sich kein Diffusionspotenzial aufbauen.",
      D: "Calciumkanäle transportieren kein Chlorid nach außen; Chlorid folgt passiv dem Membranpotenzial.",
      E: "Bei identischen Ionenkonzentrationen beiderseits der Membran wäre das Membranpotenzial 0 mV."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-038",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Aktionspotenzial & Refraktärzeit",
    difficulty: "intermediate",
    stem: "Was ist die direkte molekulare Ursache der absoluten Refraktärphase eines Neurons während und unmittelbar nach der Depolarisationsphase eines Aktionspotenzials?",
    options: {
      A: "Die vollständige Entleerung der synaptischen Vesikel im Axonterminale",
      B: "Ein massiver Einstrom von Chloridionen über hemmende GABAA-Rezeptoren",
      C: "Die zeitabhängige Inaktivierung der spannungsabhängigen Natriumkanäle durch deren zytosolisches Inaktivierungstor (Ball-and-Chain), sodass sie vorübergehend nicht erneut geöffnet werden können",
      D: "Der sofortige Zusammenbruch des intrazellulären Kaliumkonzentrationsgradienten",
      E: "Die Blockade aller Ionenkanäle durch Myelinscheiden an den Ranvier-Schnürringen"
    },
    correct_answer: "C",
    explanation_correct: "Spannungsgesteuerte Na+-Kanäle (NaV) besitzen zwei Tore: ein spannungsabhängiges Aktivierungstor (m-Tor) und ein zeitabhängiges Inaktivierungstor (h-Tor). Bei Depolarisation öffnet das m-Tor rasch (Na+-Einstrom). Nach ca. 1 ms schlägt das zytosolische Inaktivierungstor ('Ball-and-Chain') zu und verschließt die Pore von innen (geschlossen-inaktivierter Zustand). In diesem Zustand kann selbst ein supramaximaler Reiz keinen erneuten Na+-Einstrom auslösen (absolute Refraktärzeit). Erst nach Repolarisation kehren die Kanäle in den geschlossen-aktivierbaren Zustand zurück.",
    explanations_incorrect: {
      A: "Die Vesikelentleerung geschieht an der Synapse und bestimmt nicht die elektrophysiologische Refraktärzeit der Axonmembran.",
      B: "GABA-vermittelte Cl--Ströme bewirken ein IPSP an Synapsen, steuern aber nicht die intrinsische Refraktärität von Na+-Kanälen.",
      D: "Die Ionenkonzentrationen ändern sich während eines einzelnen Aktionspotenzials nur minimal (weniger als 0,01 % der Ionen wechseln die Seite).",
      E: "An den Ranvier-Schnürringen ist die Myelinscheide unterbrochen; dort ist die Dichte an Na+-Kanälen am höchsten."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-039",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Synapsen: GABA vs. Glutamat",
    difficulty: "advanced",
    stem: "Wie unterscheiden sich die inhibitorische Transmission über postsynaptische GABAA-Rezeptoren und die exzitatorische Transmission über ionotrope AMPA-Rezeptoren an chemischen Synapsen im menschlichen ZNS mechanistisch?",
    options: {
      A: "GABAA-Rezeptoren aktivieren G-Proteine zum Abbau von ATP, während AMPA-Rezeptoren passive Ionenpumpen sind.",
      B: "GABAA-Rezeptoren öffnen spannungsabhängige K+-Kanäle, während AMPA-Rezeptoren Calcium direkt in Mitochondrien schleusen.",
      C: "GABAA-Rezeptoren hemmen die Transkription im Zellkern, während AMPA-Rezeptoren die Translation am rauen ER beschleunigen.",
      D: "GABAA-Rezeptoren depolarisieren die Membran durch Calciumaustritt, während AMPA-Rezeptoren eine Hyperpolarisation durch Chloridausstrom induzieren.",
      E: "Die Bindung von GABA an GABAA-Rezeptoren öffnet integrale Chloridkanäle (Cl–), was zu einem Einstrom negativer Ladung und einer Hyperpolarisation (IPSP) führt; die Bindung von Glutamat an AMPA-Rezeptoren öffnet Kationenkanäle, was durch Na+-Einstrom zu einer Depolarisation (EPSP) führt."
    },
    correct_answer: "E",
    explanation_correct: "GABAA-Rezeptoren sind ligandengesteuerte Ionenkanäle mit pentamerem Aufbau. Die Bindung von GABA öffnet die zentrale Pore selektiv für Chloridionen (Cl–). Da das Ruhepotenzial meist bei –70 mV und das Cl–-Gleichgewichtspotenzial bei ca. –75 bis –80 mV liegt, strömt Cl– ein und hyperpolarisiert die postsynaptische Membran (inhibitorisches postsynaptisches Potenzial, IPSP). Ionotrope AMPA-Rezeptoren sind ligandengesteuerte Kationenkanäle; Glutamatbindung öffnet die Pore für Na+ (und K+). Durch die enorme elektrochemische Triebkraft für Natrium überwiegt der Na+-Einstrom drastisch, was zur Depolarisation (exzitatorisches postsynaptisches Potenzial, EPSP) führt.",
    explanations_incorrect: {
      A: "GABAA und AMPA sind ionotrope Rezeptoren (ligandengesteuerte Ionenkanäle), keine G-Protein-gekoppelten Rezeptoren oder Pumpen (GABAB ist G-Protein-gekoppelt).",
      B: "GABAA leitet Chlorid, nicht Kalium; AMPA leitet monovalente Kationen in der Zellmembran, nicht in Mitochondrien.",
      C: "Dies sind schnelle synaptische Überträger an der Plasmamembran, keine nukleären Transkriptionsfaktoren.",
      D: "Vertauscht die Vorzeichen von Potenzialänderung und Ionenfluss (GABA hyperpolarisiert, AMPA depolarisiert)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
    }
  },
  {
    id: "BIO-BMS-GP2-040",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Nervensystem",
    subtopic: "Vegetatives Nervensystem & Neurotransmitter",
    difficulty: "advanced",
    stem: "Welche Neurotransmitter und Rezeptortypen vermitteln die Signalübertragung an den Ganglien bzw. den Effektororganen des menschlichen sympathischen versus parasympathischen Nervensystems?",
    options: {
      A: "Beide Systeme nutzen prä- und postganglionär ausschließlich Noradrenalin an adrenergen beta-Rezeptoren.",
      B: "Beide Systeme nutzen präganglionär Acetylcholin an nikotinischen Rezeptoren (nAChR); postganglionär schüttet der Parasympathikus Acetylcholin an muskarinischen Rezeptoren (mAChR) aus, während der Sympathikus an den meisten Erfolgsorganen Noradrenalin an adrenergen alpha- und beta-Rezeptoren freisetzt.",
      C: "Der Sympathikus verwendet präganglionär Dopamin und postganglionär Serotonin; der Parasympathikus nutzt ausschließlich Glutamat.",
      D: "Der Parasympathikus nutzt postganglionär Noradrenalin, während der Sympathikus postganglionär Acetylcholin an nAChR einsetzt.",
      E: "Präganglionäre sympathische Neurone nutzen GABA zur Dämpfung, während parasympathische Neurone Histamin an H1-Rezeptoren ausschütten."
    },
    correct_answer: "B",
    explanation_correct: "Im vegetativen Nervensystem (VNS) schütten sowohl sympathische als auch parasympathische präganglionäre Neurone Acetylcholin (ACh) aus, das an nikotinische Acetylcholinrezeptoren (nAChR, Ionenkanäle) auf den postganglionären Ganglienzellen bindet.\nAm Effektororgan:\n- Parasympathikus: Postganglionäre Neurone setzen ACh frei, das an muskarinische Acetylcholinrezeptoren (mAChR, G-Protein-gekoppelt: M1–M5) bindet.\n- Sympathikus: Postganglionäre Neurone setzen an den meisten Erfolgsorganen Noradrenalin frei, das an alpha- und beta-Adrenorezeptoren bindet (Ausnahme: sympathisch innervierte Schweißdrüsen nutzen ACh an mAChR).",
    explanations_incorrect: {
      A: "Präganglionäre Fasern nutzen ausnahmslos Acetylcholin, niemals Noradrenalin.",
      C: "Dopamin, Serotonin und Glutamat sind nicht die kanonischen Haupttransmitter der peripheren vegetativen Ganglien und Effektororgane.",
      D: "Kehrt die postganglionären Transmitter von Sympathikus und Parasympathikus um.",
      E: "GABA und Histamin sind keine primären Transmitter der vegetativen Efferenzen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.2_gp2"
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
 * Normalisierte 40 StoredQuestion-Objekte für die MedAT-H Generalprobe #2 Runtime-Engine
 */
export const GENERALPROBE_2_BIO_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_BIO_QUESTIONS.map(
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
      tags: ["BMS", "Biologie", "Generalprobe #2", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.2_gp2",
      setOrder: idx + 1,
    };
  }
);
