/**
 * MedAT Biologie BMS — 40-Fragen-Qualitätskontroll- und Korrektur-Aufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #1 (BMS Biologie-Testteil, 40 Aufgaben).
 * 
 * Fachlich und terminologisch angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung (verifiziert aus Quelldaten):
 * - 7 Grundlagen/Leicht (Foundational)
 * - 21 Mittel (Intermediate)
 * - 12 Schwer (Advanced)
 * 
 * Antwortschlüssel (verifiziert aus Quelldaten):
 * - A: 8, B: 8, C: 8, D: 8, E: 8 (Gesamt: 40)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcBioQuestionRaw {
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

export const RAW_GENERALPROBE_1_BIO_QUESTIONS: QcBioQuestionRaw[] = [
  {
    id: "BIO-BMS-001",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Membranbiologie & Osmose",
    difficulty: "advanced",
    stem: "Ein isolierter menschlicher Erythrozyt mit einer physiologischen intrazellulären Osmolarität von ~290 mOsm/L wird bei 37 °C in eine wässrige Lösung überführt, die 150 mM NaCl und 150 mM Harnstoff enthält. Die Erythrozytenmembran exprimiert reichlich Aquaporine (AQP1) sowie erleichterte Harnstofftransporter (UT-B). Welche Volumenänderung durchläuft der Erythrozyt im zeitlichen Verlauf?",
    options: {
      A: "Die Zelle dehnt sich irreversibel aus und lysiert innerhalb weniger Sekunden vollständig.",
      B: "Das Zellvolumen bleibt zu jedem Zeitpunkt vollkommen unverändert, da Harnstoff keine osmotische Triebkraft entfaltet.",
      C: "Die Zelle schrumpft dauerhaft (Krenierung) ohne Volumenerholung, da NaCl und Harnstoff als identische impermeante Osmolyte wirken.",
      D: "Die Zelle schrumpft zunächst transient infolge eines raschen hyperosmolaren Wasserausstroms und re-expandiert anschließend wieder auf ihr Ausgangsvolumen, sobald Harnstoff über die Membran äquilibriert.",
      E: "Die Zelle schwillt zunächst durch massiven Harnstoffeinstrom an und schrumpft erst danach protrahiert unter ihr Ausgangsvolumen."
    },
    correct_answer: "D",
    explanation_correct: "Die intrazelluläre Flüssigkeit enthält ~290–300 mOsm/L impermeante Osmolyte. Die extrazelluläre Lösung enthält 150 mM NaCl (~300 mOsm/L impermeante Na+- und Cl--Ionen) sowie 150 mM Harnstoff, was einer initialen Gesamtosmolarität von ~450 mOsm/L entspricht. Da der transmembranäre Wassertransport über AQP1 wesentlich schneller erfolgt als der erleichterte Harnstoffeinstrom über UT-B, strömt Wasser zunächst osmotisch getrieben aus der Zelle aus, was zu einer transienten Zellschrumpfung führt. Im weiteren Verlauf diffundiert Harnstoff entlang seines Konzentrationsgradienten in die Zelle und zieht osmotisch Wasser nach, bis die Harnstoffkonzentrationen intra- und extrazellulär ausgeglichen sind. Da die effektive extrazelluläre Konzentration impermeanter Ionen (150 mM NaCl ≈ 300 mOsm/L) der intrazellulären Ausgangsosmolarität entspricht, stellt sich im Fließgleichgewicht wieder annähernd das ursprüngliche Zellvolumen ein.",
    explanations_incorrect: {
      A: "Eine osmotische Lysis erfordert ein hypotoner Milieu (effektive impermeante Osmolytkonzentration < 290 mOsm/L); hier liegt jedoch eine effektive Isotonie (~300 mOsm/L) bei initialer Hyperosmolarität (~450 mOsm/L) vor.",
      B: "Die initiale extrazelluläre Gesamtosmolarität von ~450 mOsm/L gegenüber ~290 mOsm/L intrazellulär erzeugt einen unmittelbaren osmotischen Gradienten für einen raschen Wasserausstrom, bevor Harnstoff äquilibrieren kann.",
      C: "Eine permanente Krenierung träte nur auf, wenn Harnstoff völlig impermeabel wäre (Reflexionskoeffizient σ = 1). Da Erythrozyten UT-B besitzen, penetriert Harnstoff rasch (σ ≈ 0), was die Volumenerholung ermöglicht.",
      E: "Wasser folgt dem osmotischen Gradienten über AQP1 weitaus schneller als Harnstoff über UT-B transportiert wird; die initiale Schrumpfung geht dem Harnstoffeinstrom daher voraus, nicht umgekehrt."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-002",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zellorganellen: Lysosomen & Peroxisomen",
    difficulty: "foundational",
    stem: "Welche Aussage grenzt menschliche Peroxisomen hinsichtlich ihres Enzymprofils und ihrer physiologischen Funktion korrekt von Lysosomen ab?",
    options: {
      A: "Peroxisomen enthalten Katalase und generieren Wasserstoffperoxid beim Abbau sehr langkettiger Fettsäuren, während Lysosomen saure Hydrolasen zur Spaltung von Makromolekülen enthalten.",
      B: "Lysosomen halten über Natriumpumpen ein alkalisches Milieu (pH 8,5) aufrecht, während Peroxisomen durch V-Typ-H+-ATPasen ein stark saures Milieu (pH 4,5) bewahren.",
      C: "Peroxisomen entstehen ausschließlich durch Zweiteilung aus Mitochondrien, während Lysosomen direkt aus dem rauen endoplasmatischen Retikulum abschnüren.",
      D: "Lysosomen verbrauchen molekularen Sauerstoff zur Oxidation verzweigtkettiger Aminosäuren, wohingegen Peroxisomen katalytische Ribozyme zum Glykogenabbau nutzen.",
      E: "Peroxisomen besitzen keine Lipidmembran, wohingegen Lysosomen von einer doppelten Mitochondrienmembran umgeben sind."
    },
    correct_answer: "A",
    explanation_correct: "Peroxisomen enthalten Oxidasen, die molekularen Sauerstoff verbrauchen, um die beta-Oxidation sehr langkettiger Fettsäuren (VLCFAs, >= C22) sowie die alpha-Oxidation verzweigtkettiger Fettsäuren (z. B. Phytansäure) durchzuführen. Dabei entsteht toxisches H2O2 als Nebenprodukt, das durch das peroxisomale Leitenzym Katalase zu Wasser und Sauerstoff entgiftet wird. Lysosomen hingegen sind saure Abbauorganellen (luminaler pH ~4,5–5,0, aufrechterhalten durch V-Typ-H+-ATPasen), die saure Hydrolasen (Proteasen, Nukleasen, Lipasen, Glykosidasen) zum intrazellulären Abbau von Makromolekülen enthalten.",
    explanations_incorrect: {
      B: "Lysosomen besitzen ein saures Lumen (pH 4,5–5,0) via V-Typ-H+-ATPasen; die Matrix von Peroxisomen ist neutral bis leicht alkalisch (pH ~7,0–7,5).",
      C: "Peroxisomen entstehen de novo durch Knospung aus dem endoplasmatischen Retikulum sowie durch Teilung bestehender Peroxisomen; Lysosomen gehen aus dem Golgi-Apparat bzw. Endosomensystem hervor.",
      D: "Peroxisomale Oxidasen verbrauchen O2; Lysosomen nutzen saure Proteine (Hydrolasen), keine Ribozyme (katalytische RNAs), für den Abbau.",
      E: "Sowohl Peroxisomen als auch Lysosomen sind Organellen mit einfacher Membran (Phospholipid-Doppelschicht)."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-003",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zytoskelett & Motorproteine",
    difficulty: "intermediate",
    stem: "Beim schnellen axonalen Transport in menschlichen Motoneuronen werden Vesikel mit Neurotransmitter-Vorläufern vom Zellkörper (Perikaryon) zur synaptischen Endigung transportiert. Welches Zytoskelettsystem und welches Motorprotein sind primär für diesen anterograden Transport verantwortlich?",
    options: {
      A: "Aktinfilamente und Myosin II mit Bewegung zum spitzen Ende (pointed end).",
      B: "Intermediärfilamente und Dynein mit Bewegung zu peripheren Desmosomen.",
      C: "Mikrotubuli und Kinesin-Motoren mit Bewegung in Richtung des Plus-Endes.",
      D: "Mikrotubuli und zytoplasmatisches Dynein mit Bewegung in Richtung des Minus-Endes.",
      E: "Neurofilamente und Myosin V mit Bewegung in Richtung des Perikaryons."
    },
    correct_answer: "C",
    explanation_correct: "Im Axon von Neuronen sind Mikrotubuli einheitlich polarisiert ausgerichtet: Ihre Minus-Enden sind am Zentrosom im Zellsoma verankert, während die Plus-Enden zur synaptischen Endigung weisen. Der anterograde axonale Transport (vom Soma zur Synapse) wird durch Motorproteine der Kinesin-Superfamilie angetrieben, die sich prozessiv unter ATP-Verbrauch zum Plus-Ende bewegen. Der retrograde Transport (von der Synapse zurück zum Zellsoma) wird hingegen durch zytoplasmatisches Dynein vermittelt, das zum Minus-Ende wandert.",
    explanations_incorrect: {
      A: "Myosin II vermittelt Muskelkontraktion und kortikale Membranspannung; Aktinfilamente eignen sich nicht für den weiten axonalen Ferntransport.",
      B: "Intermediärfilamente (Neurofilamente) dienen der mechanischen Zugfestigkeit und Kaliberstabilisierung; sie fungieren nicht als polarisierte Schienen für Motorproteine.",
      D: "Zytoplasmatisches Dynein vermittelt den retrograden Transport (von der Peripherie zurück zum Soma) zum Minus-Ende.",
      E: "Neurofilamente besitzen keine Motorfunktion, und ein Transport zum Soma wäre retrograd statt anterograd."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-004",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Zellzykluskontrolle & Restriktionspunkt",
    difficulty: "advanced",
    stem: "In menschlichen somatischen Zellen erfordert der Übergang von der G1-Phase in die S-Phase das Überwinden des G1-Restriktionspunkts (R-Punkt). Welches molekulare Ereignis erlaubt es der Zelle unmittelbar, diesen Kontrollpunkt zu passieren und die Transkription essentieller Replikationsgene einzuleiten?",
    options: {
      A: "Die direkte Spaltung von Histon H1 durch p53 als Reaktion auf Doppelstrangbrüche.",
      B: "Die Phosphorylierung des Retinoblastom-Proteins (pRb) durch Cyclin-CDK-Komplexe, wodurch aktive E2F-Transkriptionsfaktoren freigesetzt werden.",
      C: "Die Dephosphorylierung des Retinoblastom-Proteins (pRb) durch die Protein-Phosphatase 1 (PP1).",
      D: "Die Ubiquitinierung und der Abbau der DNA-Polymerase delta durch den APC/C-Komplex.",
      E: "Die konstitutive Bindung von unphosphoryliertem pRb an den Origin-Recognition-Komplex (ORC)."
    },
    correct_answer: "B",
    explanation_correct: "In der frühen G1-Phase liegt das Tumorsuppressorprotein pRb (Retinoblastom-Protein) hypophosphoryliert vor und bindet inhibitorisch an E2F-Transkriptionsfaktoren. Bei mitogener Stimulation phosphorylieren Cyclin D-CDK4/6- und nachfolgend Cyclin E-CDK2-Komplexe das pRb-Protein (Hyperphosphorylierung). Dies führt zur Konformationsänderung und Dissoziation von pRb, sodass freies E2F Promotoren von Genen aktiviert, die für die S-Phase unabdingbar sind (u. a. Cyclin E, Cyclin A, DNA-Polymerasen, Thymidinkinase), womit die Zelle irreversibel in die DNA-Synthese eintritt.",
    explanations_incorrect: {
      A: "p53 arretiert den Zellzyklus bei DNA-Schäden (über p21-Induktion); es spaltet keine Histone zur Progression des Zellzyklus.",
      C: "Die Dephosphorylierung von pRb durch PP1 stellt die inhibitorische Bindung an E2F wieder her und erzwingt einen Zellzyklusarrest.",
      D: "Der Anaphase-Promoting-Complex (APC/C) steuert den Übergang von der Metaphase zur Anaphase und den Austritt aus der Mitose, nicht den G1/S-Übergang.",
      E: "Unphosphoryliertes pRb bindet E2F-Transkriptionsfaktoren im Kern, nicht direkt den Origin-Recognition-Komplex."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-005",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Cell Biology",
    subtopic: "Apoptose vs. Nekrose",
    difficulty: "intermediate",
    stem: "Welches zelluläre Merkmal ist ein spezifisches Kennzeichen des intrinsischen (mitochondrialen) Apoptosewegs in menschlichen Zellen und fehlt bei der unfallbedingten Zellnekrose grundsätzlich?",
    options: {
      A: "Frühzeitiger Zerfall der Plasmamembran mit Freisetzung von DAMPs und konsekutiver starker lokaler Entzündungsreaktion.",
      B: "Früher Verlust der Ionengradienten mit zellulärem und organellärem Anschwellen (Onkose).",
      C: "Freisetzung von mitochondrialem Cytochrom c ins Zytosol zur Assemblierung des Apoptosoms mit Apaf-1 und Procaspase-9.",
      D: "Unkontrollierte enzymatische Selbstauflösung der Zelle ohne ATP-Verbrauch und ohne Caspasen-Aktivierung.",
      E: "Direkte Zerstörung des mitochondrialen Genoms durch extrazelluläre bakterielle Endotoxine."
    },
    correct_answer: "C",
    explanation_correct: "Der intrinsische Apoptoseweg wird durch intrazelluläre Stressfaktoren (z. B. DNA-Schäden, oxidativer Stress) ausgelöst, welche zur Permeabilisierung der äußeren Mitochondrienmembran (MOMP, vermittelt durch Bax/Bak) führen. Cytochrom c tritt ins Zytosol über und bindet an Apaf-1 in Gegenwart von dATP, wodurch sich das heptamere Apoptosom assembliert. Dieser Komplex rekrutiert und aktiviert die Initiator-Caspase-9, welche wiederum Effektor-Caspasen (-3, -7) spaltet. Die Nekrose verläuft hingegen ungesteuert unter Plasmamembranruptur, Schwellung (Onkose) und starker Entzündung, ohne Apoptosombildung.",
    explanations_incorrect: {
      A: "Membranlyse, Freisetzung intrazellulärer Bestandteile und massive Entzündung sind typische Kardinalmerkmale der Nekrose; apoptotische Zellen bleiben bis zur Phagozytose membranintakt.",
      B: "Zell- und Organellschwellung (Onkose) kennzeichnet die Nekrose; bei der Apoptose kommt es zur Zellschrumpfung und Pyknose.",
      D: "Apoptose ist ein hochregulierter, ATP-abhängiger Kaskadenprozess mit Caspasen; Nekrose ist ein passiver, energieentleerter Zelltod.",
      E: "MOMP wird durch endogene Bcl-2-Familienmitglieder reguliert, nicht durch bakterielle Endotoxine."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-006",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Histologie: Epithel- & Bindegewebe",
    difficulty: "foundational",
    stem: "Welches strukturelle Charakteristikum definiert das mehrreihige Flimmerepithel (respiratorische Epithel) der menschlichen Trachea und der Hauptbronchien?",
    options: {
      A: "Mehrere echte Zellschichten, bei denen ausschließlich die oberste Schicht mit der Basalmembran in Kontakt steht.",
      B: "Eine einzelne Schicht abgeflachter Plattenepithelzellen zur raschen Diffusion von Atemgasen.",
      C: "Eine mehrschichtige, verhornte Deckschicht aus toten Hornschuppen, die kontinuierlich desquamiert.",
      D: "Ausnahmslos zweischichtig angeordnete kubische Zellen, die ausschließlich über Gap Junctions verankert sind.",
      E: "Jede Epithelzelle sitzt direkt auf der Basallamina auf, jedoch täuschen unterschiedlich hoch liegende Zellkerne eine Schichtung vor."
    },
    correct_answer: "E",
    explanation_correct: "Im mehrreihigen hochprismatischen Flimmerepithel (respiratorisches Epithel) berühren alle Zellen mit ihrem basalen Pol die Basallamina (es handelt sich somit histologisch um ein einschichtiges Epithel). Da die Zellen jedoch unterschiedlich hoch sind und nicht alle das Lumen erreichen, liegen ihre Zellkerne in verschiedenen Höhenniveaus, was lichtmikroskopisch den Eindruck einer Mehrschichtigkeit erweckt. An der apikalen Oberfläche tragen die Zellen motile Kinozilien, die synchron Schleim aus Becherzellen transportieren (mukoziliäre Clearance).",
    explanations_incorrect: {
      A: "In echten mehrschichtigen Epithelien hat nur die unterste Basalschicht Kontakt zur Basalmembran.",
      B: "Ein einschichtiges Plattenepithel kleidet die Lungenalveolen und Endothelien aus, nicht die luftleitenden Tracheobronchialwege.",
      C: "Verhorntes mehrschichtiges Plattenepithel bildet die Epidermis der Haut, nicht die Atemwegsschleimhaut.",
      D: "Respiratorisches Epithel ist prismatisch/mehrreihig, nicht zweischichtig kubisch, und nutzt Desmosomen sowie Tight Junctions zur Verankerung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-007",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Atmungssystem: Atemmechanik & Gasaustausch",
    difficulty: "intermediate",
    stem: "Welche physikalische Druckdifferenz saugt bei der physiologischen Ruheinspiration eines gesunden Erwachsenen Atemluft in die Lunge ein?",
    options: {
      A: "Die Zwerchfellkontraktion vergrößert den Pleuraraum, wodurch der intrapleurale Druck stärker negativ wird und der Alveolardruck unter den Atmosphärendruck sinkt.",
      B: "Die Kontraktion der inneren Interkostalmuskeln verengt den Thorax und treibt den Alveolardruck über den Atmosphärendruck.",
      C: "Der intrapleurale Druck steigt über den Atmosphärendruck und presst Umgebungsluft in die Atemwege.",
      D: "Die Bildung von pulmonalem Surfactant sistiert vorübergehend, sodass die Oberflächenspannung Luft aktiv einsaugt.",
      E: "Der passive elastische Rückstellzug des Lungenparenchyms weitet den Bronchialbaum und zieht Luft nach innen."
    },
    correct_answer: "A",
    explanation_correct: "Die Ruheinspiration ist ein aktiver Vorgang: Durch Kontraktion von Zwerchfell (Tiefertreten der Zwerchfellkuppeln) und äußeren Zwischenrippenmuskeln (Mm. intercostales externi) erweitert sich der Thoraxraum. Dadurch sinkt der intrapleurale Druck noch weiter unter den Atmosphärendruck ab (von ca. -5 cm H2O auf ca. -8 cm H2O). Der vergrößerte transpulmonale Druck dehnt die Lunge, wodurch der intrapulmonale (alveoläre) Druck kurzzeitig subatmosphärisch wird (~ -1 cm H2O). Dieser Druckgradient saugt Luft durch die Atemwege bis in die Alveolen ein.",
    explanations_incorrect: {
      B: "Die inneren Interkostalmuskeln (Mm. intercostales interni) kontrahieren bei der forcierten Exspiration, nicht bei der Ruheinspiration.",
      C: "Der intrapleurale Druck ist physiologisch stets subatmosphärisch (negativ); ein positiver Pleuradruck (z. B. Pneumothorax) kollabiert die Lunge.",
      D: "Surfactant setzt die Oberflächenspannung kontinuierlich herab, um Alveolarkollaps am Ende der Exspiration zu verhindern.",
      E: "Die elastischen Rückstellkräfte der Lunge verkleinern das Lungenvolumen und treiben die passive Exspiration an, nicht die Inspiration."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-008",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Endokrines System: Hypothalamus-Hypophysen-Schilddrüsen-Achse",
    difficulty: "intermediate",
    stem: "Welche negative Rückkopplungsreaktion wird in der menschlichen Hypothalamus-Hypophysen-Schilddrüsen-Achse (HPT-Achse) ausgelöst, wenn die zirkulierenden Konzentrationen von freiem Thyroxin (fT4) und Trijodthyronin (fT3) den Sollwert signifikant übersteigen?",
    options: {
      A: "Positive Rückkopplung mit gesteigerter TRH-Freisetzung aus dem Hypophysenvorderlappen.",
      B: "Hemmung sowohl der TRH-Sekretion im Hypothalamus als auch der TSH-Ausschüttung aus dem Hypophysenvorderlappen.",
      C: "Stimulation der TSH-Sekretion durch den Hypophysenhinterlappen zur Beschleunigung der renalen Schilddrüsenhormonausscheidung.",
      D: "Suppression der Calcitonin-Sekretion aus den follikulären Schilddrüsenepithelzellen.",
      E: "Aktivierung der Parathormon-Ausschüttung zur Steigerung der hepatischen T4-Bindungskapazität."
    },
    correct_answer: "B",
    explanation_correct: "Die HPT-Achse unterliegt einer klassischen negativen Rückkopplung: Erhöhte Konzentrationen an freiem fT3 und fT4 binden an nukleäre Schilddrüsenhormonrezeptoren in den thyrotropen Zellen des Hypophysenvorderlappens (Adenohypophyse) und hemmen die Expression und Sekretion von TSH (Thyreoidea-stimulierendes Hormon). Parallel hemmen sie im Nucleus paraventricularis des Hypothalamus die Sekretion von TRH (Thyreotropin-Releasing-Hormon). Dadurch sinkt der stimulierende Reiz auf die Schilddrüsenfollikel, bis wieder Normwerte erreicht sind.",
    explanations_incorrect: {
      A: "fT3 und fT4 vermitteln negative, keine positive Rückkopplung; zudem wird TRH im Hypothalamus gebildet, nicht in der Hypophyse.",
      C: "TSH stammt aus dem Hypophysenvorderlappen (Adenohypophyse), nicht dem Hinterlappen (Neurohypophyse, der Oxytocin und ADH abgibt).",
      D: "Calcitonin wird von parafollikulären C-Zellen bei Hyperkalzämie sezerniert, nicht von Follikelzellen unter TSH-Kontrolle.",
      E: "Parathormon (PTH) wird über Calcium-Sensing-Rezeptoren (CaSR) durch ionisiertes Calcium reguliert, unabhängig von der HPT-Rückkopplung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-009",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Fortpflanzungssystem: Ovarialzyklus & Ovulation",
    difficulty: "advanced",
    stem: "Welche endokrine Veränderung löst in der späten Follikelphase des menschlichen Ovarialzyklus direkt den präovulatorischen LH-Peak (Luteinisierendes Hormon) aus, der die Ovulation induziert?",
    options: {
      A: "Ein abrupter Abfall des systemischen Progesterons, der die tonische Hemmung von Kisspeptin-Neuronen aufhebt.",
      B: "Ein steiler Anstieg von humanem Choriongonadotropin (hCG), das vom neu gebildeten Corpus albicans sezerniert wird.",
      C: "Anhaltend hohe Plasmakonzentrationen von 17-beta-Östradiol aus dem dominanten Follikel, wodurch das Östrogen-Feedback von negativ auf positiv umschlägt.",
      D: "Die selektive Sekretion von Inhibin A durch die primäre Oozyte, welche die gonadotropen Hypophysenzellen stimuliert.",
      E: "Ein rapider Abfall des hypophysären Follikel-stimulierenden Hormons (FSH), der direkt ligandengesteuerte Calciumkanäle öffnet."
    },
    correct_answer: "C",
    explanation_correct: "Während der frühen und mittleren Follikelphase üben moderate Östradiolspiegel ein negatives Feedback auf GnRH und LH aus. Wenn der heranreifende dominante Graaf-Follikel durch seine Granulosazellen kontinuierlich hohe Östradiolkonzentrationen (>200 pg/mL über mehr als 36–48 Stunden) sezerniert, schlägt diese Rückkopplung am Hypothalamus (via Kisspeptin-Neurone) und an der Adenohypophyse von negativ auf positiv um. Dies entlädt den massiven präovulatorischen LH-Peak, welcher ~24–36 Stunden später die Ruptur des Follikels (Ovulation) bewirkt.",
    explanations_incorrect: {
      A: "Progesteron ist während der gesamten Follikelphase niedrig; sein Abfall tritt erst am Ende der Lutealphase auf und induziert die Menstruation.",
      B: "hCG wird vom Synzytiotrophoblasten in der Schwangerschaft gebildet, nicht von einem Corpus albicans im unbefruchteten Zyklus.",
      D: "Inhibine hemmen selektiv die FSH-Sekretion der Hypophyse; sie stammen aus Granulosazellen (nicht der Oozyte) und triggern nicht den LH-Peak.",
      E: "Der FSH-Abfall in der späten Follikelphase resultiert aus Inhibin B und Östradiol; er triggert nicht den LH-Peak."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-010",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Harnsystem: Nephron & Gegenstrommultiplikation",
    difficulty: "intermediate",
    stem: "Welcher Abschnitt des menschlichen Nephrons resorbiert aktiv Natrium und Chlorid über NKCC2-Kotransporter bei gleichzeitiger vollständiger Wasserundurchlässigkeit und treibt dadurch das Gegenstrom-Multiplikationssystem an?",
    options: {
      A: "Dünner absteigender Schenkel der Henle-Schleife.",
      B: "Proximaler Tubulus contortus.",
      C: "Kortikales Sammelrohr in Gegenwart hoher Vasopressinspiegel.",
      D: "Dicker aufsteigender Schenkel der Henle-Schleife (TAL).",
      E: "Parietales Blatt der Bowman-Kapsel."
    },
    correct_answer: "D",
    explanation_correct: "Der dicke aufsteigende Teil der Henle-Schleife (Thick Ascending Limb, TAL) besitzt apikal Na+-K+-2Cl--Kotransporter (NKCC2) und basolateral Na+/K+-ATPasen, welche aktiv Ionen in das Nierenmark pumpen. Entscheidend ist, dass die Tight Junctions des TAL für Wasser vollkommen impermeabel sind. Durch das Herauspumpen von Salz ohne osmotisches Nachströmen von Wasser wird das Nierenmark hypertonisiert und der Harn im Tubulus hypotonisiert. Dieser Mechanismus ist der aktive Motor des renalen Gegenstrommultiplikators.",
    explanations_incorrect: {
      A: "Der dünne absteigende Schenkel ist wasserpermeabel (Aquaporin-1) und transportiert kaum aktiv NaCl.",
      B: "Der proximale Tubulus resorbiert ca. 65 % der filtrierten Ionen und Wasser isoton; er baut keinen hypertonen Markgradienten auf.",
      C: "Unter Vasopressin (ADH) wird das Sammelrohr via Aquaporin-2 stark wasserdurchlässig; es nutzt den Gradienten zur Harnkonzentrierung, generiert ihn aber nicht.",
      E: "Die Bowman-Kapsel besteht aus einfachem Plattenepithel und führt keinerlei tubuläre Resorption durch."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-011",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Herz-Kreislauf-System: Herzzyklus & Hämodynamik",
    difficulty: "foundational",
    stem: "In welcher Phase des menschlichen Herzzyklus sind sowohl die Atrioventrikularklappen (Segelklappen) als auch die Semilunarklappen (Taschenklappen) gleichzeitig geschlossen, während der linksventrikuläre Druck steil ansteigt?",
    options: {
      A: "Isovolumetrische Kontraktionsphase.",
      B: "Rasche Austreibungsphase (Ejektionsphase).",
      C: "Isovolumetrische Relaxationsphase.",
      D: "Ventrikuläre Füllungsphase (Diastole).",
      E: "Vorhofsystole."
    },
    correct_answer: "A",
    explanation_correct: "Die isovolumetrische Kontraktionsphase markiert den Beginn der Kammersystole. Die Depolarisation der Ventrikelmyozyten löst die Myokardkontraktion aus, wodurch der Kammerdruck rasch über den Vorhofdruck ansteigt und die Atrioventrikularklappen (Mitralklappe und Trikuspidalklappe) schließt, was den 1. Herzton (S1) erzeugt. Da der Ventrikeldruck jedoch den diastolischen Aortendruck (~80 mmHg) noch nicht überschritten hat, bleibt die Aortenklappe ebenfalls geschlossen. Bei geschlossenen Klappen bleibt das Blutvolumen in der Kammer konstant (isovolumetrisch), während die Wandspannung einen steilen Druckanstieg bewirkt.",
    explanations_incorrect: {
      B: "Während der Austreibungsphase sind die Aorten- und Pulmonalklappen geöffnet, und das Ventrikelvolumen nimmt rasch ab.",
      C: "In der isovolumetrischen Relaxationsphase sind ebenfalls alle Klappen geschlossen, jedoch fällt der Kammerdruck steil ab.",
      D: "In der Füllungsphase sind die Segelklappen geöffnet, damit Blut aus den Vorhöfen in die Ventrikel einströmen kann.",
      E: "Bei der Vorhofsystole sind die AV-Klappen geöffnet, um die ventrikuläre Füllung aktiv zu komplettieren."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-012",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Lymphsystem & Gewebeflüssigkeit",
    difficulty: "intermediate",
    stem: "Wie nehmen initiale Lymphkapillaren interstitielle Flüssigkeit und hochmolekulare Proteine auf, ohne unter schwankendem Gewebedruck zu kollabieren?",
    options: {
      A: "Sie besitzen eine dicke Tunica media aus glatten Muskelzellen, die Flüssigkeit rhythmisch durch kontinuierliche Tight Junctions saugt.",
      B: "Sie verfügen über dachziegelartig überlappende Endothelzellen, die über elastische Ankerfilamente mit der extrazellulären Matrix verbunden sind und bei Gewebeschwellung interzelluläre Poren öffnen.",
      C: "Es handelt sich um fenestrierte Blutkapillaren, deren Natrium-Kalium-Pumpen Albumin durch primär aktiven Transport aufnehmen.",
      D: "Sie nutzen den direkt vom Ductus thoracicus erzeugten Unterdruck, um Flüssigkeit retrograd aus peripheren Nagelbetten abzusaugen.",
      E: "Sie enthalten Aquaporin-4-Kanäle, die kolloidale Proteine selektiv aufnehmen und interstitielle Elektrolyte ausschließen."
    },
    correct_answer: "B",
    explanation_correct: "Initiale Lymphkapillaren sind blind endende Gefäße, deren Endothelzellen sich wie Dachziegel überlappen und funktionelle Mikroklappen bilden. Diese Zellen sind über elastische Ankerfilamente (Fibrillin, Kollagen) fest im umgebenden Bindegewebe verankert. Nimmt das interstitielle Flüssigkeitsvolumen zu (Ödemneigung), dehnt sich das Gewebe aus und strafft die Ankerfilamente. Dadurch werden die überlappenden Endothelklappen auseinandergezogen, sodass weite interzelluläre Lücken entstehen, durch die Gewebewasser, Proteine und Abwehrzellen drucklos einströmen können. Steigt der Druck im Kapillarinneren, schließen sich die Klappen und verhindern den Rückfluss.",
    explanations_incorrect: {
      A: "Initiale Lymphkapillaren besitzen weder glatte Muskelzellen noch eine kontinuierliche Basalmembran; glatte Muskulatur tritt erst in Sammellymphgefäßen auf.",
      C: "Lymphkapillaren sind keine Blutkapillaren; der Proteineintritt erfolgt passiv über Klappenöffnungen, nicht über aktive Transporter.",
      D: "Der Lymphabfluss beruht auf lokalen Gewebedrücken, Muskelpumpen und Klappenmechanismen, nicht auf retrogradem Sog aus dem Ductus thoracicus.",
      E: "Aquaporine transportieren ausschließlich Wassermoleküle, keine Makromoleküle wie Albumin oder Immunglobuline."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-013",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Nervensystem: Synaptische Übertragung & Aktionspotenzial",
    difficulty: "advanced",
    stem: "Welche Sequenz molekularer Ereignisse beschreibt die chemische Signalübertragung an einer exzitatorischen glutamatergen Synapse im menschlichen Zentralnervensystem korrekt?",
    options: {
      A: "Depolarisation der präsynaptischen Endigung -> Einstrom von extrazellulärem Ca2+ durch spannungsgesteuerte Kanäle -> Vesikelfusion via SNARE-Proteine -> Glutamatfreisetzung in den synaptischen Spalt -> Bindung an postsynaptische AMPA-Rezeptoren -> Na+-Einstrom und EPSP.",
      B: "Hyperpolarisation der Endigung -> Ausstrom von K+ durch spannungsgesteuerte Kanäle -> Endozytose von Glutamat -> Bindung an präsynaptische Autorezeptoren -> postsynaptischer Cl--Einstrom.",
      C: "Depolarisation der Endigung -> Einstrom von Mg2+ -> Spaltung von Synaptobrevin -> Exozytose von GABA -> Bindung an postsynaptische NMDA-Rezeptoren -> hyperpolarisierendes IPSP.",
      D: "Direkte Weiterleitung elektrischer Ströme in das postsynaptische Soma über Connexin-Hemikanäle ohne Beteiligung chemischer Neurotransmitter.",
      E: "Depolarisation der Endigung -> Öffnung ligandengesteuerter Ca2+-Pumpen -> aktives Hinauspumpen von Glutamat aus dem synaptischen Spalt in Astrozyten."
    },
    correct_answer: "A",
    explanation_correct: "Erreicht ein Aktionspotenzial das präsynaptische Axonterminal, führt die Depolarisation zur Öffnung spannungsabhängiger Ca2+-Kanäle (Cav2-Familie), woraufhin Calcium entlang seines steilen elektrochemischen Gradienten einströmt. Ca2+ bindet an Synaptotagmin, was die vollständige Assemblierung des SNARE-Komplexes (Synaptobrevin, Syntaxin-1, SNAP-25) auslöst und zur Fusion der synaptischen Vesikel mit der präsynaptischen Membran führt. Glutamat diffundiert durch den synaptischen Spalt und bindet an postsynaptische ionotrope AMPA-Rezeptoren. Deren Öffnung ermöglicht einen raschen Na+-Einstrom, der ein exzitatorisches postsynaptisches Potenzial (EPSP) generiert.",
    explanations_incorrect: {
      B: "Exozytose erfordert Depolarisation und Ca2+-Einstrom, nicht Hyperpolarisation; Cl--Einstrom erzeugt ein inhibitorisches Potenzial (IPSP).",
      C: "Vesikelfusion wird durch Ca2+ getriggert, nicht durch Mg2+ (das den NMDA-Kanal blockiert); GABA ist der inhibitorische Haupttransmitter.",
      D: "Elektrische Synapsen (Gap Junctions aus Connexinen) leiten Strom direkt weiter, nutzen aber keine chemischen Transmitter.",
      E: "Die Glutamataufnahme in Astrozyten (über EAAT-Transporter) dient der Inaktivierung nach der Signalübertragung, nicht der primären Signalgenerierung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-014",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Sinnesphysiologie: Phototransduktion",
    difficulty: "advanced",
    stem: "Welche biochemische Reaktionskaskade läuft im Außensegment menschlicher Stäbchen-Photorezeptorzellen bei Absorption eines Photons ab?",
    options: {
      A: "All-trans-Retinal wandelt sich in 11-cis-Retinal um -> Adenylatzyklase wird aktiviert -> cAMP steigt -> Natriumkanäle öffnen -> Depolarisation der Membran.",
      B: "Transducin synthetisiert cGMP aus GTP -> cGMP-gesteuerte Kanäle öffnen -> Na+-Einstrom erhält den kontinuierlichen Dunkelstrom aufrecht.",
      C: "Rhodopsin phosphoryliert spannungsgesteuerte Calciumkanäle direkt -> massiver Ca2+-Einstrom -> schlagartige Freisetzung von Glutamat auf Bipolarzellen.",
      D: "Opsin öffnet mechanosensitive Kaliumkanäle -> K+-Einstrom -> Depolarisation von Horizontalzellen.",
      E: "11-cis-Retinal isomerisiert zu all-trans-Retinal -> Transducin wird aktiviert -> cGMP-Phosphodiesterase hydrolysiert cGMP -> cGMP-gesteuerte Kationenkanäle schließen -> Hyperpolarisation der Membran."
    },
    correct_answer: "E",
    explanation_correct: "Im Dunkeln weisen Stäbchen hohe zytosolische cGMP-Spiegel auf, die cyclonukleotidgesteuerte Kationenkanäle (CNG-Kanäle) offen halten; der resultierende Einstrom von Na+ und Ca2+ ('Dunkelstrom') hält die Zelle bei ca. -40 mV depolarisiert, was eine kontinuierliche tonische Glutamatfreisetzung bewirkt. Bei Belichtung absorbiert Rhodopsin ein Photon, wodurch 11-cis-Retinal zu all-trans-Retinal photoisomerisiert. Das aktivierte Metarhodopsin II aktiviert das G-Protein Transducin (Gt), welches die cGMP-Phosphodiesterase (PDE6) stimuliert. Der rasche Abbau von cGMP zu 5'-GMP führt zum Verschluss der CNG-Kanäle. Da K+ im Innensegment weiter ausströmt, hyperpolarisiert die Zelle (~ -70 mV), was die Glutamatausschüttung drosselt.",
    explanations_incorrect: {
      A: "Licht isomerisiert 11-cis zu all-trans (nicht umgekehrt), aktiviert eine Phosphodiesterase (nicht Adenylatzyklase) und führt zur Hyperpolarisation (nicht Depolarisation).",
      B: "Belichtung bewirkt den Abbau von cGMP via PDE6, nicht dessen Synthese; die Guanylatzyklase synthetisiert cGMP erst in der Erholungsphase.",
      C: "Die Phototransduktion verläuft über einen G-Protein-Signalweg; Belichtung senkt die Glutamatausschüttung, statt sie zu steigern.",
      D: "Es handelt sich um eine G-Protein-Kaskade, nicht um mechanosensitive Kanäle."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-015",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Bewegungsapparat: Muskelkontraktion & Querbrückenzyklus",
    difficulty: "intermediate",
    stem: "Welches spezifische molekulare Ereignis bewirkt während des Querbrückenzyklus in menschlichen Skelettmuskelfasern das Lösen des Myosinköpfchens vom Aktinfilament?",
    options: {
      A: "Die Bindung eines neuen ATP-Moleküls an die Nukleotid-Bindungsstelle des Myosinköpfchens.",
      B: "Die Hydrolyse von ATP in ADP und anorganisches Phosphat am Myosinköpfchen.",
      C: "Die Abspaltung von anorganischem Phosphat (Pi) vom Myosinköpfchen während des Kraftschlags.",
      D: "Die direkte Bindung von Ca2+-Ionen an das Myosin-Rückgrat des dicken Filaments.",
      E: "Die Phosphorylierung von Troponin T durch die Kreatinkinase."
    },
    correct_answer: "A",
    explanation_correct: "Am Ende des Kraftschlags verharrt das Myosinköpfchen in einer starren, hochaffinen Bindung an das Aktinfilament (Rigor-Komplex). Das Ablösen des Myosinköpfchens vom Aktin erfordert zwingend die Bindung eines neuen ATP-Moleküls an die enzymatische Nukleotidtasche von Myosin. Die ATP-Bindung induziert eine allosterische Konformationsänderung, welche die Affinität von Myosin zu Aktin schlagartig drastisch senkt, sodass sich die Querbrücke löst. (Postmortal führt der Mangel an ATP dazu, dass sich diese Bindung nicht mehr lösen kann, was die Totenstarre / Rigor mortis bedingt). Erst nach dem Lösen wird ATP hydrolysiert, um das Myosinköpfchen wieder vorzuspannen.",
    explanations_incorrect: {
      B: "Die ATP-Hydrolyse erfolgt nach dem Ablösen und spannt das Köpfchen in den energiereichen 90°-Zustand vor.",
      C: "Die Freisetzung von anorganischem Phosphat (Pi) triggert den eigentlichen Kraftschlag (Power Stroke) von 90° auf 45°.",
      D: "Ca2+ bindet an Troponin C auf dem dünnen Aktinfilament und verschiebt Tropomyosin; es bindet nicht an Myosin.",
      E: "Troponin wird nicht durch Kreatinkinase phosphoryliert; Kreatinkinase regeneriert im Zytoplasma ATP aus Phosphokreatin."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-016",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Verdauungssystem: Magensekretion & Intrinsic Factor",
    difficulty: "intermediate",
    stem: "Welcher Zelltyp der Magenschleimhaut ist für die Sekretion von Salzsäure (HCl) und Intrinsic Factor verantwortlich, und welche physiologische Hauptaufgabe erfüllt der Intrinsic Factor?",
    options: {
      A: "Hauptzellen; aktiviert Pepsinogen zu Pepsin im Duodenum.",
      B: "G-Zellen; neutralisiert Magensäure im Antrum durch Bildung von Bikarbonat.",
      C: "Belegzellen (Parietalzellen); bindet alimentäres Vitamin B12 zur rezeptorvermittelten Resorption im terminalen Ileum.",
      D: "Enterochromaffin-ähnliche Zellen (ECL-Zellen); spaltet Triacylglycerine im Magenlumen.",
      E: "Nebenzellen; sezerniert Sekretin zur Kontraktion der Gallenblase."
    },
    correct_answer: "C",
    explanation_correct: "Die Belegzellen (Parietalzellen), die vor allem in den Drüsen von Magenfundus und Magenkorpus lokalisiert sind, sezernieren über apikale H+/K+-ATPasen Salzsäure (HCl) sowie das Glykoprotein Intrinsic Factor (IF). Im Duodenum löst sich Cobalamin (Vitamin B12) von Haptocorrin und bindet hochaffin an den Intrinsic Factor. Der resultierende IF-B12-Komplex ist proteolyseresistent und wandert durch den Dünndarm bis in das terminale Ileum, wo er spezifisch an Cubam-Rezeptoren enterischer Epithelzellen bindet und per rezeptorvermittelter Endozytose resorbiert wird.",
    explanations_incorrect: {
      A: "Hauptzellen sezernieren Pepsinogen und Magenlipase, weder Salzsäure noch Intrinsic Factor; Pepsinogen wird im Magenmilieu durch Säure autokatalytisch aktiviert.",
      B: "G-Zellen sezernieren das Peptidhormon Gastrin ins Blut zur Säurestimulation, nicht Bikarbonat.",
      D: "ECL-Zellen sezernieren Histamin, welches H2-Rezeptoren an Belegzellen stimuliert; sie spalten keine Fette.",
      E: "Nebenzellen sezernieren protektiven Muzinschleim und Bikarbonat; Sekretin wird von S-Zellen des Duodenums gebildet."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-017",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Body: Histology, Anatomy and Physiology",
    subtopic: "Exokrines Pankreas: Enzymaktivierung & Schutzmechanismen",
    difficulty: "intermediate",
    stem: "Wie verhindert das menschliche exokrine Pankreas, dass seine hochwirksamen Endopeptidasen bereits in den Pankreasgängen und im Parenchym eine Autodigestion (Selbstverdauung) auslösen?",
    options: {
      A: "Pankreasazinuszellen synthetisieren und sezernieren Proteasen als inaktive Vorstufen (Zymogene wie Trypsinogen), die erst im Duodenum durch enterozytäre Enteropeptidase zu aktivem Trypsin gespalten werden.",
      B: "Das Pankreas sezerniert ausschließlich vollaktive Proteasen, doch der stark saure pH-Wert des Pankreassaftes (pH 2,0) denaturiert sie, bis Galle sie neutralisiert.",
      C: "Proteolytische Enzyme werden über Blutkapillaren abtransportiert und erst durch pulmonale Peptidasen aktiviert.",
      D: "Pankreasgangepithelien sezernieren kontinuierlich Pepsin, welches aktives Trypsin im Gangsystem abbaut.",
      E: "Proteasen werden in Fetttröpfchen verpackt, die erst im Kolon durch Speichelamylase lysiert werden."
    },
    correct_answer: "A",
    explanation_correct: "Pankreasazinuszellen synthetisieren und sezernieren proteolytische Enzyme als inaktive Proenzyme (Zymogene), z. B. Trypsinogen, Chymotrypsinogen und Procarboxypeptidase, kompartimentiert in Zymogengranula gemeinsam mit dem Trypsininhibitor SPINK1. Nach der Exozytose in das Duodenum spaltet das bürstensaumständige Enzym Enteropeptidase (Enterokinase) spezifisch ein N-terminales Hexapeptid von Trypsinogen ab, wodurch aktives Trypsin entsteht. Trypsin spaltet und aktiviert anschließend kaskadenartig alle weiteren Zymogene. Diese räumliche Trennung schützt das Pankreas wirksam vor autodigestiver Pankreatitis.",
    explanations_incorrect: {
      B: "Pankreassaft ist deutlich alkalisch (pH ~8,0–8,3) durch reichlich HCO3- aus den Gangepithelien, was Magensäure neutralisiert und das Wirkoptimum der Enzyme sichert.",
      C: "Pankreasenzyme sind exokrine Sekrete, die über den Ductus pancreaticus ins Darmlumen abgegeben werden, nicht über Lungenkapillaren.",
      D: "Pepsin wird von Magenhauptzellen im Magen gebildet, nicht in Pankreasgängen.",
      E: "Verdauungsenzyme sind wasserlösliche Proteine in membranumhüllten Granula, keine Lipidvesikel."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-018",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Befruchtung, Furchung & Implantation",
    difficulty: "intermediate",
    stem: "Welche Abfolge von Entwicklungsstadien und anatomischen Lokalisationen beschreibt die frühe menschliche Entwicklung von der Befruchtung bis zur Implantation korrekt?",
    options: {
      A: "Befruchtung im Cavum uteri -> Morula-Bildung in der Zervix -> Blastozystenschlüpfen im Eileiter -> Implantation an Tag 14.",
      B: "Befruchtung in der Ampulle des Eileiters -> Furchung zur Morula (~Tag 3–4) -> Blastozystenbildung (~Tag 5) -> Schlüpfen aus der Zona pellucida -> Implantation im Endometrium (~Tag 6–7).",
      C: "Befruchtung im Ovar -> Ausbildung der dreiblättrigen Keimscheibe -> Transport durch die Tube -> Blastozystenschlüpfen an Tag 21.",
      D: "Befruchtung in den Tubenfimbrien -> Schlüpfen aus der Zona pellucida im 2-Zell-Stadium -> Einnistung im Myometrium an Tag 3.",
      E: "Befruchtung im Zervikalkanal -> Furchungsteilung zur Morula -> Blastozystenbildung in der Peritonealhöhle -> Dezidualisierung an Tag 1."
    },
    correct_answer: "B",
    explanation_correct: "Die Befruchtung (Konzeption) findet physiologisch in der Ampulla tubae uterinae statt. Die Zygote wandert durch die Tuba uterina in Richtung Uterus und vollzieht dabei Furchungsteilungen ohne Gesamtvolumenzunahme. An Tag 3–4 erreicht sie als 16- bis 32-zellige Morula das Cavum uteri. Durch Flüssigkeitseinstrom entsteht um Tag 5 die Blastozyste (bestehend aus Trophoblast und Embryoblast). Die Blastozyste schlüpft enzymatisch aus der starren Zona pellucida ('Hatching'), woraufhin sich der Trophoblast an Tag 6–7 an die funktionelle Schicht des Endometriums anheftet und die Implantation (Nidation) einleitet.",
    explanations_incorrect: {
      A: "Die Befruchtung erfolgt in der Eileiterampulle, nicht im Uteruskavum; die Implantation beginnt an Tag 6–7, nicht Tag 14.",
      C: "Die Befruchtung findet im Eileiter statt, nicht im Ovar; die dreiblättrige Keimscheibe entsteht erst bei der Gastrulation in der 3. Entwicklungswoche.",
      D: "Das Schlüpfen erfolgt erst im Blastozystenstadium (Tag 5–6), nicht im 2-Zell-Stadium; die Einnistung erfolgt im Endometrium, nicht im Myometrium.",
      E: "Eine Befruchtung im Zervikalkanal oder Entwicklung in der Peritonealhöhle ist fehlerhaft."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-019",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Gastrulation & Keimblattderivate",
    difficulty: "foundational",
    stem: "Welche anatomischen Strukturen des erwachsenen Menschen gehen vollständig aus dem embryonalen Ektoderm hervor?",
    options: {
      A: "Skelettmuskulatur und Gefäßendothel.",
      B: "Proximale Nierentubuli und rote Milzpulpa.",
      C: "Epitheliale Auskleidung des Magens und Hepatozyten.",
      D: "Epidermis der Haut und das Zentralnervensystem.",
      E: "Nebennierenrinde und Gelenkknorpel."
    },
    correct_answer: "D",
    explanation_correct: "Während der Gastrulation in der 3. Entwicklungswoche gehen aus dem Epiblasten die drei primären Keimblätter hervor. Das Ektoderm differenziert sich in das Oberflächenektoderm (welches die Epidermis der Haut mit Haaren, Nägeln und Hautdrüsen sowie die Augenlinse bildet) und das Neuroektoderm (aus dem über das Neuralrohr das Zentralnervensystem mit Gehirn und Rückenmark sowie über die Neuralleiste das periphere Nervensystem, Schwann-Zellen und Melanozyten entstehen).",
    explanations_incorrect: {
      A: "Skelettmuskulatur entstammt dem paraxialen Mesoderm (Myotom); Gefäßendothelien stammen aus dem lateralen Mesoderm.",
      B: "Nierentubuli stammen aus dem intermediären Mesoderm; die Milz entsteht aus dem Mesenchym des Mesogastrium dorsale (Mesoderm).",
      C: "Das Magen-Darm-Epithel und Hepatozyten leiten sich aus dem embryonalen Entoderm ab.",
      E: "Die Nebennierenrinde entsteht aus dem Zölommesoderm; Knorpel leitet sich aus dem Mesoderm ab."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-020",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Early Human Development",
    subtopic: "Fetale Zirkulation & Gefäßshunts",
    difficulty: "advanced",
    stem: "Welches Gefäß führt im menschlichen Fetus das Blut mit der höchsten Sauerstoffsättigung (~80–85 % SaO2), und welcher Gefäßshunt leitet etwa ein Drittel dieses oxygenierten Blutes an den Lebersinusoiden vorbei direkt in die Vena cava inferior?",
    options: {
      A: "Arteria umbilicalis; Ductus arteriosus.",
      B: "Fetale Aorta; Foramen ovale.",
      C: "Vena vitellina; Sinus venosus.",
      D: "Vena umbilicalis; Ductus venosus (Arantii).",
      E: "Arteria pulmonalis; Ligamentum venosum."
    },
    correct_answer: "D",
    explanation_correct: "Die unpaare Vena umbilicalis (Nabelschnurvene) transportiert sauerstoff- und nährstoffreiches Blut von den Chorionzotten der Plazenta zum Fetus mit der höchsten SaO2 des fetalen Kreislaufs (~80–85 %). Beim Erreichen der Leber umgeht etwa ein Drittel (ca. 20–35 %, belegt durch humane Doppler-Sonographiestudien) das hepatische Sinusoidnetz über den Ductus venosus (Arantii) und mündet direkt in die Vena cava inferior (IVC). Das restliche Blut perfundiert die Leber via Pfortaderäste. In der IVC wird der sauerstoffreiche Strom bevorzugt über das Foramen ovale in das linke Atrium gelenkt, um Myokard und Gehirn optimal zu versorgen.",
    explanations_incorrect: {
      A: "Die beiden Nabelarterien (Aa. umbilicales) führen desoxygeniertes Blut (~55 % SaO2) aus den Aa. iliacae internae zur Plazenta zurück; der Ductus arteriosus shunted von der Pulmonalarterie in die Aorta.",
      B: "Die fetale Aorta descendens führt Mischblut mit niedrigerer Sättigung (~60 % SaO2); das Foramen ovale verbindet rechten und linken Vorhof.",
      C: "Vitellinvenen drainieren den Dottersack und bilden Anteile des Pfortadersystems mit sauerstoffarmem Blut.",
      E: "Die Pulmonalarterie führt desoxygeniertes Blut aus dem rechten Ventrikel; das Ligamentum venosum ist der postnatale bindegewebige Strang des obliterierten Ductus venosus."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-021",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Mendelsche Regeln & Dihybride Wahrscheinlichkeit",
    difficulty: "intermediate",
    stem: "Gen A (autosomal-dominant, vollständige Penetranz) und Gen B (autosomal-dominant, vollständige Penetranz) liegen auf unterschiedlichen, unabhängig spaltenden Autosomen. Zwei heterozygote Eltern (Genotyp AaBb) zeugen ein Kind. Mit welcher theoretischen Wahrscheinlichkeit weist das Kind den dominanten Phänotyp für Gen A UND den rezessiven Phänotyp für Gen B auf?",
    options: {
      A: "9/16 (56,25 %)",
      B: "1/4 (25,0 %)",
      C: "1/16 (6,25 %)",
      D: "3/8 (37,5 %)",
      E: "3/16 (18,75 %)"
    },
    correct_answer: "E",
    explanation_correct: "Da beide Genorte auf unterschiedlichen Autosomen liegen, spalten sie gemäß der 3. Mendelschen Regel (Unabhängigkeitsregel) unabhängig voneinander auf. Für die monohybride Kreuzung Aa x Aa beträgt die Wahrscheinlichkeit eines dominanten Phänotyps für Merkmal A (Genotypen AA oder Aa) 3/4. Für die Kreuzung Bb x Bb beträgt die Wahrscheinlichkeit eines rezessiven Phänotyps für Merkmal B (Genotyp bb) 1/4. Gemäß der Multiplikationsregel für unabhängige Ereignisse gilt: P(dominant A und rezessiv B) = (3/4) * (1/4) = 3/16 (18,75 %).",
    explanations_incorrect: {
      A: "9/16 entspricht der Wahrscheinlichkeit, dass beide Merkmale dominant ausgeprägt sind (A_B_).",
      B: "1/4 ist die Wahrscheinlichkeit für ein einzelnes rezessives Merkmal in einer monohybriden Kreuzung.",
      C: "1/16 ist die Wahrscheinlichkeit für die doppelrezessive Merkmalsausprägung (aabb).",
      D: "3/8 entspricht dem Anteil von Heterozygoten in bestimmten Kreuzungen, aber keinem dihybriden phänotypischen Spaltungsverhältnis."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-022",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Meiose: Prophase I & Crossing-over",
    difficulty: "intermediate",
    stem: "In welchem spezifischen Unterstadium der meiotischen Prophase I findet bei der menschlichen Gametogenese die reziproke genetische Rekombination (Crossing-over) zwischen Nicht-Schwesterchromatiden homologer Chromosomen statt?",
    options: {
      A: "Diplotän.",
      B: "Zygotän.",
      C: "Leptotän.",
      D: "Pachytän.",
      E: "Diakinese."
    },
    correct_answer: "D",
    explanation_correct: "Die Prophase I der Meiose gliedert sich in fünf aufeinanderfolgende Stadien: (1) Leptotän: Kondensation der Chromosomen zu sichtbaren Fäden; (2) Zygotän: Paarung der homologen Chromosomen unter Ausbildung des synaptonemalen Komplexes (Synapsis); (3) Pachytän: Die Synapsis ist vollständig, Bivalente (Tetraden) sind stabilisiert, und das Crossing-over findet durch reziproke homologe Rekombination an Rekombinationsknötchen statt; (4) Diplotän: Der synaptonemale Komplex löst sich auf, Homologe weichen auseinander und bleiben an Chiasmata verbunden; (5) Diakinese: Maximale Kondensation und Zerfall der Kernhülle vor der Metaphase I.",
    explanations_incorrect: {
      A: "Im Diplotän ist das Crossing-over bereits abgeschlossen; die Chromosomen trennen sich partiell und Chiasmata werden mikroskopisch sichtbar.",
      B: "Im Zygotän beginnt die Paarung (Synapsis) mit Bildung des synaptonemalen Komplexes, der reziproke Strangaustausch erfolgt jedoch im Pachytän.",
      C: "Im Leptotän kondensiert das Chromatin; Paarung und Rekombination haben noch nicht eingesetzt.",
      E: "Die Diakinese ist das Endstadium der Prophase I mit maximaler Kondensation unmittelbar vor der Kernhüllenauflösung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-023",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Mitochondriale Vererbung & Heteroplasmie",
    difficulty: "intermediate",
    stem: "Eine Frau ist Trägerin einer pathogenen Punktmutation im mitochondrialen Gen MT-TL1 (assoziiert mit dem MELAS-Syndrom). Sie weist in ihren Oozyten eine Heteroplasmie mit 70 % mutierter mtDNA auf. Welches Vererbungsmuster beschreibt die Weitergabe dieser Mutation an ihre leiblichen Kinder?",
    options: {
      A: "Ausschließlich ihre Söhne erben die mutierte mtDNA, da Mitochondrien durch Y-chromosomale Gene angesteuert werden.",
      B: "Sowohl ihre Söhne als auch ihre Töchter können die mutierte mtDNA erben, aber keiner ihrer Söhne vererbt sie an seine eigenen Nachkommen weiter.",
      C: "Exakt 50 % ihrer Kinder erben die Mutation nach den Mendelschen Regeln eines autosomal-dominanten Erbgangs.",
      D: "Nur ihre Töchter erben die Mutation, da paternale Mitochondrien in männlichen Zygoten die maternale mtDNA zerstören.",
      E: "Die Mutation kann nicht vererbt werden, da heteroplasmatische Oozyten vor der Befruchtung obligat degenerieren."
    },
    correct_answer: "B",
    explanation_correct: "Menschliche mitochondriale DNA (mtDNA) wird strikt maternal vererbt (zytoplasmatische Vererbung). Spermien bringen zwar bei der Befruchtung wenige Mitochondrien aus dem Mittelstück in die Eizelle ein, diese sind jedoch ubiquitiniert und werden in der Zygote selektiv durch Autophagie (Mitophagie) abgebaut. Folglich gibt eine betroffene oder heteroplasmatische Mutter die mutierten Mitochondrien an alle ihre leiblichen Kinder (Söhne wie Töchter) weiter. Betroffene Söhne können die Mutation jedoch niemals an ihre Nachkommen weitergeben.",
    explanations_incorrect: {
      A: "Mitochondriale Vererbung ist strikt maternal, nicht Y-gekoppelt (holandrisch); Kinder beiderlei Geschlechts erben maternale Mitochondrien.",
      C: "Mitochondriale Gene liegen extranukleär auf zirkulären Plasmiden vor und folgen keinen Mendelschen chromosomalen Aufspaltungsverhältnissen.",
      D: "Sowohl Söhne als auch Töchter erben maternale Mitochondrien; paternale Mitochondrien werden in allen Zygoten abgebaut.",
      E: "Heteroplasmatische Oozyten reifen heran und werden fertilisiert; die Mutation wird mit variablen Heteroplasmiegraden weitergegeben."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-024",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Genetics, Inheritance and Chromosome Biology",
    subtopic: "Chromosomenaberrationen & Nondisjunction",
    difficulty: "advanced",
    stem: "Bei einem Kind wird ein Klinefelter-Syndrom (Karyotyp 47,XXY) diagnostiziert. Eine Mikrosatelliten-Markeranalyse zeigt, dass das Kind ein paternales Y-Chromosom und zwei verschiedene maternale X-Chromosomen mit unterschiedlichen zentromernahen Allelen von seiner heterozygoten Mutter (Genotyp XM1/XM2) geerbt hat. In welcher meiotischen Teilung fand das Nondisjunction-Ereignis (Nicht-Trennung) statt?",
    options: {
      A: "Maternale Meiose I.",
      B: "Maternale Meiose II.",
      C: "Paternale Meiose I.",
      D: "Paternale Meiose II.",
      E: "Postzygotische mitotische Nondisjunction im Morulastadium."
    },
    correct_answer: "A",
    explanation_correct: "Das Kind besitzt zwei unterschiedliche maternale X-Allele (XM1 und XM2) sowie ein paternales Y-Chromosom. Das Vorliegen zweier homologer, nicht-identischer maternaler X-Allele von einer heterozygoten Mutter (Heterodisomie) beweist, dass die beiden homologen X-Chromosomen in der Anaphase der maternalen Meiose I nicht getrennt wurden (Fehlsegregation). Wäre die Nondisjunction in der maternalen Meiose II erfolgt, lägen zwei identische Schwesterchromatiden vor (Isodisomie, d. h. XM1/XM1 oder XM2/XM2). Bei paternaler Nondisjunction in Meiose I läge ein XY-Spermium vor (Genotyp XM/XP/Y).",
    explanations_incorrect: {
      B: "Eine Nondisjunction in maternaler Meiose II führt zu einer Eizelle mit duplizierten Schwesterchromatiden (Isodisomie, XM1/XM1 oder XM2/XM2), nicht zu zwei verschiedenen homologen Chromosomen.",
      C: "Paternale Meiose-I-Fehlsegregation erzeugt ein XY-Spermium; das Kind hätte dann ein maternales und ein paternales X (XM/XP/Y), was den maternalen Allelen widerspricht.",
      D: "Paternale Meiose-II-Nondisjunction liefert XX- oder YY-Spermien, was zu 47,XXX- oder 47,XYY-Karyotypen führen würde.",
      E: "Eine postzygotische mitotische Verdopplung in einer 46,XY-Zygote würde bestehende Chromosomen duplizieren und Isodisomie oder Mosaike bedingen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-025",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "DNA-Replikation & Enzymologie",
    difficulty: "foundational",
    stem: "Welcher Enzymkomplex ist bei der Replikation menschlicher Kern-DNA primär dafür verantwortlich, die Doppelhelix an der Replikationsgabel unter ATP-Verbrauch durch Lösen der Wasserstoffbrückenbindungen zwischen den Basenpaaren zu entwinden?",
    options: {
      A: "DNA-Topoisomerase I.",
      B: "DNA-Ligase I.",
      C: "Replikative DNA-Helikase (MCM2-7-Komplex).",
      D: "Telomerase-Reverse-Transkriptase.",
      E: "DNA-Polymerase epsilon."
    },
    correct_answer: "C",
    explanation_correct: "Die replikative DNA-Helikase in menschlichen eukaryotischen Zellen ist der hexamere MCM2-7-Komplex (Teil des aktiven CMG-Helikase-Komplexes). Er nutzt die Energie der ATP-Hydrolyse, um die doppelsträngige DNA-Helix vor der Replikationsgabel aufzuschmelzen, indem er die Wasserstoffbrücken zwischen komplementären Basen löst und einzelsträngige Matrizen für die DNA-Polymerasen delta und epsilon freilegt.",
    explanations_incorrect: {
      A: "Die DNA-Topoisomerase lockert Torsionsspannungen und Supercoiling durch transiente Einzel- oder Doppelstrangbrüche; sie entwindet nicht als Replikationshelikase.",
      B: "Die DNA-Ligase I schließt Einzelstrangbrüche im Phosphodiester-Rückgrat durch kovalente Verknüpfung von Okazaki-Fragmenten am Folgestrang.",
      D: "Die Telomerase verlängert lineare Chromosomenenden unter Verwendung einer internen RNA-Matrize.",
      E: "Die DNA-Polymerase epsilon synthetisiert den Leitstrang in 5'-nach-3'-Richtung; sie besitzt keine Helikase-Funktion."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-026",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Transkription & Prä-mRNA-Prozessierung",
    difficulty: "intermediate",
    stem: "Welche drei sequentiellen Prozessierungsschritte muss eine eukaryotische Prä-mRNA im Zellkern durchlaufen, bevor sie als reife mRNA ins Zytoplasma exportiert werden kann?",
    options: {
      A: "Exzision von Exons durch das Spleißosom -> Anheftung eines 3'-Poly(U)-Schwanzes -> 5'-Phosphorylierung.",
      B: "Kopplung einer Aminosäure an die CCA-Sequenz -> enzymatischer Abbau des Promotors -> Einbau von Thymin.",
      C: "Histon-Acetylierung -> Synthese von cDNA-Primern -> ribosomaler Peptidyltransfer.",
      D: "Abspaltung der 5'-Cap-Struktur -> Beibehaltung aller Introns -> Zirkularisierung zu Plasmid-DNA.",
      E: "5'-Capping mit 7-Methylguanosin -> Spleißen (Intronentfernung, Exonverknüpfung) -> 3'-Spaltung und Polyadenylierung."
    },
    correct_answer: "E",
    explanation_correct: "In menschlichen Zellen erfährt das primäre Prä-mRNA-Transkript drei fundamentale kotranskriptionelle Modifikationen: (1) 5'-Capping mit 7-Methylguanosin über eine 5'-zu-5'-Triphosphatbrücke (schützt vor Exonukleasen und dient der Ribosomenrekrutierung); (2) Prä-mRNA-Spleißen durch das Spleißosom, bei dem nicht-codierende Introns herausgeschnitten und codierende Exons ligiert werden; und (3) 3'-Spaltung und Polyadenylierung, bei der eine Poly(A)-Polymerase ca. 150–250 Adenin-Reste anfügt, was der mRNA Stabilität verleiht und den Kernexport ermöglicht.",
    explanations_incorrect: {
      A: "Das Spleißosom entfernt Introns (nicht codierende Exons), und am 3'-Ende wird ein Poly(A)-Schwanz (nicht Poly(U)) angehängt.",
      B: "Das Anheften einer Aminosäure an eine 3'-CCA-Sequenz ist die Beladung einer Transfer-RNA (tRNA), keine mRNA-Prozessierung.",
      C: "Histonacetylierung modifiziert Chromatinstrukturen der DNA; cDNA-Synthese ist eine reverse Transkription.",
      D: "Die reife mRNA behält die 5'-Cap-Kappe und entfernt Introns; Plasmide kommen im eukaryotischen Genom nicht vor."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-027",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Translation & Genetischer Code",
    difficulty: "advanced",
    stem: "Der codierende (nicht-matrizen) Strang eines menschlichen Gens beginnt mit der Sequenz: 5'-ATG GAC TTA TGA-3'. Eine Insertionsmutation fügt ein einzelnes Cytosin-Nukleotid (C) exakt zwischen dem 4. (G) und 5. (A) Nukleotid ein. Welche unmittelbare Konsequenz hat dies für das Leseraster der mRNA und das Translationsprodukt?",
    options: {
      A: "Eine stumme Mutation (Silent Mutation) aufgrund von Codon-Wobble an der dritten Base, wodurch das ursprüngliche Tetrapeptid erhalten bleibt.",
      B: "Eine In-frame-Substitution, die ein einzelnes Aspartat durch ein Alanin ersetzt, ohne stromabwärts gelegene Codons zu verändern.",
      C: "Eine Rasterschubmutation (Frameshift) verändert das Leseraster zu 5'-AUG GCA CUU AUG A...-3', wodurch alle nachfolgenden Codons verändert werden und das ursprüngliche Stoppcodon nicht mehr im translatierten Leseraster liegt.",
      D: "Die Korrekturlese-Aktivität der DNA-Polymerase erkennt die überzählige Base und überspringt die Translation vollständig.",
      E: "Das Spleißosom erkennt das veränderte Triplett sofort als alternative 3'-Spleißakzeptorstelle."
    },
    correct_answer: "C",
    explanation_correct: "Die ursprüngliche Sequenz auf dem codierenden DNA-Strang lautet: 5'-ATG GAC TTA TGA-3'. Transkribiert ergibt dies die mRNA: 5'-AUG GAC UUA UGA-3' (Met-Asp-Leu-Stopp). Wird ein Cytosin (C) zwischen dem 4. Nukleotid (G) und dem 5. Nukleotid (A) eingefügt, lautet die resultierende Sequenz des codierenden Strangs 5'-ATGGC ACTTATGA-3' bzw. in Codon-Tripletts gegliedert 5'-ATG GCA CTT ATG A...-3'. Die korrespondierende mRNA lautet somit: 5'-AUG GCA CUU AUG A...-3'. Das Leseraster verschiebt sich ab dem 4. Nukleotid: Codon 2 wird zu GCA (Alanin), Codon 3 zu CUU (Leucin), Codon 4 zu AUG (Methionin). Da der genetische Code in nicht-überlappenden Tripletts abgelesen wird, verschiebt eine 1-bp-Insertion das Raster vollständig (+1 Frameshift), verändert alle stromabwärts gelegenen Codons und führt dazu, dass das ursprüngliche UGA-Stoppcodon nicht mehr im translatierten Leseraster liegt (Out-of-Frame) und vorzeitig kein Abbruch der Translation mehr erfolgt.",
    explanations_incorrect: {
      A: "Eine Insertion verändert das Triplett-Leseraster grundlegend; Wobble tritt an dritter Position bestehender Codons auf, ohne das Raster zu verschieben.",
      B: "In-frame-Veränderungen entstehen durch Basensubstitutionen oder Insertionen von Vielfachen von 3; 1 bp erzeugt einen Frameshift.",
      D: "DNA-Polymerasen wirken bei der DNA-Replikation, nicht bei der ribosomalen Translation.",
      E: "Spleißosomen erkennen spezifische Konsensussequenzen (GU...AG) an Intron-Exon-Grenzen, keine zufälligen Codon-Insertionen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-028",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Genregulation & Epigenetik",
    difficulty: "intermediate",
    stem: "Welche epigenetische Modifikation ist in menschlichen Zellen charakteristischerweise mit transkriptioneller Inaktivierung (Gen-Silencing) und der Ausbildung von dichtem Heterochromatin assoziiert?",
    options: {
      A: "Hyperacetylierung der N-terminalen Schwänze von Histon H3 und H4 durch Histon-Acetyltransferasen (HATs).",
      B: "Mono-Ubiquitinierung der zytosolischen 60S-Ribosomenuntereinheiten.",
      C: "Vollständiger Verlust von Histon-Oktameren über die gesamte Promotor- und Enhancer-Region.",
      D: "Phosphorylierung der C-terminalen Domäne (CTD) der RNA-Polymerase II.",
      E: "Methylierung von Cytosinresten an CpG-Inseln in Genpromotoren durch DNA-Methyltransferasen (DNMTs)."
    },
    correct_answer: "E",
    explanation_correct: "Die DNA-Methylierung erfolgt durch Übertragung einer Methylgruppe auf das C5-Atom von Cytosin innerhalb von CpG-Dinukleotiden, katalysiert durch DNA-Methyltransferasen (DNMT1, DNMT3A/B). Eine Hypermethylierung von CpG-Inseln in Promotorregionen rekrutiert Methyl-CpG-Bindedomänen-Proteine (MBDs), welche wiederum Histondeacetylasen (HDACs) anlocken. Dies führt zur Chromatinkondensation zu inaktivem Heterochromatin und zur Stilllegung der Transkription. Im Gegensatz dazu neutralisiert die Histonacetylierung positive Ladungen und lockert das Chromatin zu transkriptionsaktivem Euchromatin auf.",
    explanations_incorrect: {
      A: "Histonacetylierung vermindert die elektrostatische Affinität der Histone zur DNA und öffnet das Chromatin zu aktivem Euchromatin.",
      B: "Modifikationen zytosolischer Ribosomen regulieren die Translation, nicht das nukleäre Transkriptions-Silencing.",
      C: "Nukleosomendepletion in Promotoren ist ein Merkmal aktiv transkribierter Gene, nicht von reprimiertem Heterochromatin.",
      D: "Die CTD-Phosphorylierung der RNA-Polymerase II markiert die aktive Transkriptionsinitiation und -elongation."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-029",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Molecular Genetics and Genetic Methods",
    subtopic: "Polymerase-Kettenreaktion (PCR)",
    difficulty: "intermediate",
    stem: "In welcher Reihenfolge laufen die drei thermischen Schritte eines Standard-Zyklus der Polymerase-Kettenreaktion (PCR) ab, und welcher molekulare Zweck wird jeweils verfolgt?",
    options: {
      A: "Annealing (~55 °C) zur Strangtrennung -> Denaturierung (~95 °C) zur cDNA-Synthese -> Elongation (~72 °C) zur Primerligation.",
      B: "Denaturierung (~95 °C) zur Trennung der Doppelstrang-Matrizen -> Annealing (~55–60 °C) zur sequenzspezifischen Primeranlagerung -> Elongation (~72 °C) zur DNA-Synthese durch Taq-Polymerase.",
      C: "Elongation (~72 °C) zur DNA-Entwindung -> Denaturierung (~95 °C) zum Anlagern freier dNTPs -> Annealing (~55 °C) zum Replikationsstopp.",
      D: "Denaturierung (~55 °C) zum Abbau von RNA-Primern -> Elongation (~72 °C) zum Aufschmelzen -> Annealing (~95 °C) zur Ligase-Aktivierung.",
      E: "Ligation (~37 °C) zur Plasmidbildung -> Denaturierung (~95 °C) zum Klonieren von Exons -> Annealing (~60 °C) zum Herausschneiden von Introns."
    },
    correct_answer: "B",
    explanation_correct: "Ein Standard-PCR-Zyklus besteht aus drei zyklisch wiederholten Temperaturschritten: (1) Denaturierung (94–96 °C): Die thermische Energie spaltet die Wasserstoffbrücken zwischen den DNA-Strängen und erzeugt einzelsträngige Matrizen; (2) Annealing (Primerhybridisierung, typischerweise 50–65 °C): Die Temperatur wird abgesenkt, damit sich sequenzspezifische Vorwärts- und Rückwärts-Oligonukleotidprimer komplementär an die Ziel-DNA anlagern können; (3) Elongation / Extension (typischerweise 72 °C): Bei diesem Temperaturoptimum synthetisiert die thermostabile DNA-Polymerase (z. B. Taq-Polymerase) komplementäre DNA-Stränge aus freien Desoxynukleosidtriphosphaten (dNTPs) in 5'-nach-3'-Richtung.",
    explanations_incorrect: {
      A: "Das Annealing trennt keine Stränge (das tut die Denaturierung), und Denaturierung bei 95 °C schmilzt DNA, statt cDNA zu synthetisieren.",
      C: "Die Elongation erfolgt bei 72 °C nach dem Annealing; 95 °C denaturiert Nukleinsäuren, statt Primer anlagern zu lassen.",
      D: "Denaturierung erfordert hohe Temperaturen (~95 °C); die PCR benötigt keine RNA-Primer-Hydrolyse.",
      E: "Dies beschreibt bakterielle Klonierungsverfahren, nicht die thermischen Zyklen der PCR."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-030",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Genetics",
    subtopic: "Stammbaumanalyse & Erbgänge",
    difficulty: "advanced",
    stem: "Ein Stammbaum einer seltenen monogenen neuromuskulären Erkrankung zeigt folgende Konstellation: Phänotypisch gesunde Eltern haben regelmäßig betroffene Söhne; betroffene Väter haben weder betroffene Söhne noch betroffene Töchter; alle Töchter betroffener Väter sind klinisch unauffällige Konduktorinnen; diese Konduktorinnen übertragen die Erkrankung auf 50 % ihrer Söhne. Welcher Erbgang liegt vor?",
    options: {
      A: "Autosomal-dominant mit variabler Expressivität.",
      B: "Autosomal-rezessiv.",
      C: "Y-chromosomal (holandrisch).",
      D: "X-chromosomal-rezessiv.",
      E: "X-chromosomal-dominant."
    },
    correct_answer: "D",
    explanation_correct: "Dieser Stammbaum zeigt die Kardinalmerkmale eines X-chromosomal-rezessiven Erbgangs: (1) Es sind fast ausschließlich Männer betroffen, da sie bezüglich des X-Chromosoms hemizygot (Xy) sind; (2) Es gibt keine Vater-Sohn-Übertragung, da der Vater an Söhne zwingend sein Y-Chromosom vererbt; (3) Alle Töchter eines betroffenen Vaters erben obligat sein mutiertes X-Chromosom und sind damit heterozygote Konduktorinnen; (4) Konduktorinnen übertragen das mutierte X statistisch an 50 % ihrer Söhne (die erkranken) und 50 % ihrer Töchter (die Konduktorinnen werden). Klassische Beispiele sind Hämophilie A und Duchenne-Muskeldystrophie.",
    explanations_incorrect: {
      A: "Autosomal-dominante Erkrankungen zeigen vertikale Vererbung über beide Geschlechter, inklusive Vater-Sohn-Transmission.",
      B: "Autosomal-rezessive Erbgänge betreffen beide Geschlechter gleich häufig; ein betroffener Vater zeugt mit einer gesunden Partnerin nicht ausschließlich Töchter als Überträgerinnen.",
      C: "Y-chromosomale Merkmale werden strikt vom Vater auf 100 % seiner Söhne vererbt; weibliche Überträgerinnen existieren nicht.",
      E: "Beim X-chromosomal-dominanten Erbgang sind alle Töchter eines betroffenen Vaters klinisch phänotypisch erkrankt, keine symptomfreien Konduktorinnen."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-031",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Genetics",
    subtopic: "Genetische Risikoberechnung: Zystische Fibrose",
    difficulty: "advanced",
    stem: "Zystische Fibrose (Mukoviszidose) wird autosomal-rezessiv vererbt. In einer mitteleuropäischen Population beträgt die Heterozygotenfrequenz (Überträgerhäufigkeit) 1 zu 25. Eine gesunde Frau, deren leiblicher Bruder an zystischer Fibrose erkrankt ist, heiratet einen gesunden, nicht verwandten Mann aus dieser Population ohne Familienanamnese für die Erkrankung. Wie hoch ist die Wahrscheinlichkeit, dass ihr erstes gemeinsames Kind an zystischer Fibrose erkrankt?",
    options: {
      A: "1/100 (1,0 %)",
      B: "1/300 (~0,33 %)",
      C: "2/75 (~2,67 %)",
      D: "1/600 (~0,17 %)",
      E: "1/150 (~0,67 %)"
    },
    correct_answer: "E",
    explanation_correct: "Schritt 1: Heterozygotenrisiko der Mutter bestimmen. Da ihr leiblicher Bruder erkrankt ist (Genotyp cc), müssen beide gesunden Eltern Konduktoren sein (Cc x Cc). Die Frau selbst ist phänotypisch gesund, scheidet also für den Genotyp cc aus. Unter den 3 verbleibenden Genotypen (1 CC, 2 Cc) beträgt ihre Wahrscheinlichkeit, Überträgerin (Cc) zu sein, exakt 2/3.  \nSchritt 2: Heterozygotenrisiko des Vaters bestimmen. Als gesunder Mann aus der Allgemeinbevölkerung beträgt seine Heterozygotenwahrscheinlichkeit 1/25.  \nSchritt 3: Segregationswahrscheinlichkeit für das Kind. Wenn beide Eltern heterozygot sind (Cc x Cc), erkrankt das Kind (cc) mit einer Wahrscheinlichkeit von 1/4.  \nSchritt 4: Gesamtwahrscheinlichkeit berechnen: P(Kind erkrankt) = (2/3) * (1/25) * (1/4) = 2/300 = 1/150 (~0,67 %).",
    explanations_incorrect: {
      A: "1/100 geht fälschlicherweise davon aus, dass die Mutter eine gesicherte Überträgerin mit Wahrscheinlichkeit 1,0 ist: 1,0 * (1/25) * (1/4) = 1/100.",
      B: "1/300 nimmt irrtümlich eine Überträgerwahrscheinlichkeit der Mutter von 1/3 statt 2/3 an: (1/3) * (1/25) * (1/4) = 1/300.",
      C: "2/75 ist die Wahrscheinlichkeit, dass beide Elternteile Anlageträger sind ((2/3) * (1/25)), vergisst jedoch die 1/4-Mendel-Wahrscheinlichkeit für das Kind.",
      D: "1/600 nimmt eine Überträgerwahrscheinlichkeit der Mutter von 1/6 an."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-032",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Human Genetics",
    subtopic: "Invasive Pränataldiagnostik: CVS vs. Amniozentese",
    difficulty: "intermediate",
    stem: "Welche klinische Aussage vergleicht die Chorionzottenbiopsie (CVS) mit der Amniozentese im Rahmen der invasiven Pränataldiagnostik korrekt?",
    options: {
      A: "Die Amniozentese gewinnt Plazentazotten bereits in der 6. Schwangerschaftswoche, während die CVS mütterliches Serum in der 24. Woche punktiert.",
      B: "Die CVS birgt keinerlei Risiko eines Plazentamosaiks, während Amniozyten keine lebensfähige fetale DNA liefern.",
      C: "Die Amniozentese kann keine biochemischen Marker bestimmen, während die CVS alpha-Fetoprotein im Fruchtwasser misst.",
      D: "Die CVS wird früher durchgeführt (typischerweise in der 10.–13. SSW) durch Entnahme von Trophoblastgewebe, während die Amniozentese später erfolgt (typischerweise ab der 15.–20. SSW) durch Aspiration von Fruchtwasser mit fetalen Zellen.",
      E: "Die CVS erfordert eine Vollnarkose zur Biopsie des embryonalen Trophoblasten im Uteruskavum."
    },
    correct_answer: "D",
    explanation_correct: "Die Chorionzottenbiopsie (CVS) wird im ersten Trimenon ab der 10. bis 13. Schwangerschaftswoche (SSW) transabdominal oder transzervikal durchgeführt. Sie aspiriert Chorionzotten (plazentares Trophoblastgewebe), was eine sehr frühe Karyotypisierung und molekulargenetische Diagnostik erlaubt. Die Amniozentese (Fruchtwasserpunktion) erfolgt hingegen im zweiten Trimenon ab der 15. SSW durch ultraschallgezielte transabdominale Punktion der Amnionhöhle; sie gewinnt desquamierte fetale Zellen (Amniozyten) und ermöglicht zudem biochemische Analysen (z. B. alpha-Fetoprotein, AFP, zum Ausschluss offener Neuralrohrdefekte).",
    explanations_incorrect: {
      A: "Die CVS gewinnt Plazentazotten, die Amniozentese Fruchtwasser; Amniozentese wird ab der 15. SSW durchgeführt, nicht in der 6. SSW.",
      B: "Die CVS birgt ein 1–2%iges Risiko eines 'Confined Placental Mosaicism' (CPM); Amniozyten liefern zuverlässig genuine fetale DNA.",
      C: "Die Amniozentese misst alpha-Fetoprotein (AFP) und Acetylcholinesterase; die CVS kann kein Fruchtwasser-AFP bestimmen.",
      E: "Die CVS erfolgt unter lokaler Anästhesie an den Chorionzotten der Plazenta, nicht unter Vollnarkose an der Blastozyste."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-033",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Evolution",
    subtopic: "Chemische Evolution & Miller-Urey-Experiment",
    difficulty: "foundational",
    stem: "Welches fundamentale biologische Konzept wurde 1953 durch das wegweisende Miller-Urey-Experiment experimentell belegt?",
    options: {
      A: "Lebende Bakterienzellen können sich innerhalb weniger Tage unter Blitzeinwirkung spontan aus anorganischen Gasen bilden.",
      B: "Organische Moleküle, einschließlich proteinogener Aminosäuren, können unter simulierten präbiotischen, reduzierenden Bedingungen spontan aus einfachen anorganischen Verbindungen entstehen.",
      C: "Mitochondrien entstanden durch die Phagozytose eines aeroben Prokaryoten durch ein anaerobes Ur-Archaeon.",
      D: "Doppelsträngige DNA-Moleküle dienten in der Entstehung des Lebens als die frühesten selbstreplizierenden Ribozyme.",
      E: "Eukaryotische Zellen entwickelten sich durch die Fusion pflanzlicher Chloroplasten mit pilzlichen Hyphen."
    },
    correct_answer: "B",
    explanation_correct: "Das Miller-Urey-Experiment von 1953 wies experimentell nach, dass in einem geschlossenen Glassystem mit einer reduzierenden Gasmischung (Methan, Ammoniak, Wasserstoff und Wasserdampf) unter kontinuierlicher elektrischer Entladung (Simulation von Blitzen) spontan organische Biomoleküle entstehen. Unter den Syntheseprodukten fanden sich mehrere Aminosäuren (Glycin, Alanin, Asparaginsäure) sowie Carbonsäuren. Dies stützte die Oparin-Haldane-Hypothese der abiotischen Synthese organischer Bausteine der chemischen Evolution.",
    explanations_incorrect: {
      A: "Das Experiment synthetisierte organische Monomere und Bausteine, keineswegs lebende oder replikationsfähige Zellen.",
      C: "Dies beschreibt die Endosymbiontentheorie für Organellen, nicht die chemische Ursuppen-Synthese von Miller und Urey.",
      D: "Die RNA-Welt-Hypothese besagt, dass katalytische RNA (Ribozyme), nicht DNA, das ursprüngliche genetische und enzymatische Molekül war.",
      E: "Diese Aussage ist biologisch unzutreffend und hat keinen Bezug zum Miller-Urey-Versuch."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-034",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Evolution",
    subtopic: "Endosymbiontentheorie",
    difficulty: "intermediate",
    stem: "Welche Merkmalskombination liefert den direktesten biologischen Beweis dafür, dass menschliche Mitochondrien phylogenetisch von endosymbiontischen aeroben Prokaryoten abstammen?",
    options: {
      A: "Lineare Kernchromosomen mit Histonen und zytosolische 80S-Ribosomen.",
      B: "Eine Peptidoglykan-Zellwand und Teilung mittels eines mitotischen Spindelapparats.",
      C: "Völliges Fehlen eigener DNA und Aufbau de novo aus dem rauen endoplasmatischen Retikulum.",
      D: "Eine Doppelmembran mit Cardiolipin in der inneren Membran, zirkuläre doppelsträngige DNA ohne Histone sowie eine eigene mitochondriale Translationsmaschinerie (55S-Mitoribosomen mit 28S- und 39S-Untereinheiten).",
      E: "Eine einzelne Lipid-Monolayer-Membran und Lyse-Empfindlichkeit gegenüber Penicillin."
    },
    correct_answer: "D",
    explanation_correct: "Die Endosymbiontentheorie (maßgeblich begründet von Lynn Margulis) besagt, dass Mitochondrien aus phagocytierten aeroben alpha-Proteobakterien hervorgingen. Wesentliche Belege dafür sind: (1) Eine doppelte Hüllmembran, deren innere Membran bakterienspezifisches Cardiolipin enthält und cholesterinfrei ist; (2) Ein eigenes, zirkuläres, doppelsträngiges DNA-Genom (mtDNA) ohne Histone; (3) Eine eigene mitochondriale Translationsmaschinerie mit 55S-Mitoribosomen (bestehend aus einer 28S kleinen und einer 39S großen Untereinheit, die sich evolutionär aus bakteriellen 70S-Ribosomen entwickelt haben und wie diese empfindlich gegenüber bakteriellen Translationsinhibitoren wie Chloramphenicol sind); und (4) Vermehrung durch autonome Zweiteilung (Fission) unabhängig von der Zellkernteilung.",
    explanations_incorrect: {
      A: "Lineare Histon-Chromosomen und 80S-Ribosomen sind Kennzeichen des eukaryotischen Wirtskerns und Zytosols, nicht der Mitochondrien.",
      B: "Mitochondrien besitzen keine Peptidoglykanschicht und nutzen keinen mitotischen Spindelapparat; sie teilen sich durch Einschnürung.",
      C: "Mitochondrien besitzen ein eigenes Genom und entstehen ausschließlich durch Wachstum und Teilung präexistenter Mitochondrien, nie de novo.",
      E: "Mitochondrien besitzen eine Doppelmembran und werden durch Penicillin (Zellwandsynthesehemmer) nicht lysiert."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-035",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Evolution",
    subtopic: "Evolutionsfaktoren: Gendrift & Flaschenhalseffekt",
    difficulty: "advanced",
    stem: "Eine Naturkatastrophe dezimiert 95 % einer großen menschlichen Inselpopulation schlagartig. In den Folgegenerationen weichen die Allelfrequenzen der erholten Population drastisch vom Ausgangszustand ab, und mehrere zuvor seltene Allele sind fixiert (Frequenz 1,0). Welcher Evolutionsfaktor trieb diese Veränderung primär an?",
    options: {
      A: "Kontinuierlicher Genfluss aus Nachbarpopulationen.",
      B: "Sympatrische Artbildung durch assortative Paarung.",
      C: "Gerichtete Selektion zur metabolischen Optimierung gegen die Katastrophe.",
      D: "Hohe spontane Rückmutationsraten an allen Chromosomenloci.",
      E: "Gendrift infolge eines extremen populationsgenetischen Flaschenhalseffekts (Bottleneck)."
    },
    correct_answer: "E",
    explanation_correct: "Gendrift bezeichnet die zufällige, ungerichtete Veränderung von Allelfrequenzen im Genpool einer Population über Generationen hinweg infolge stochastischer Stichprobenfehler. Wird eine Population durch eine nicht-selektive Katastrophe drastisch reduziert, repräsentiert die kleine Überlebendengruppe nur einen zufälligen, unvollständigen Bruchteil des ursprünglichen Genpools (Flaschenhalseffekt / Bottleneck). In kleinen Populationen wirkt Gendrift extrem stark und führt rasch zum zufälligen Verlust (Frequenz 0,0) oder zur vollständigen Fixierung (Frequenz 1,0) von Allelen, unabhängig von deren adaptivem Wert.",
    explanations_incorrect: {
      A: "Genfluss führt von außen Allele ein und homogenisiert Populationen, statt Divergenz und Allelfixierung zu fördern.",
      B: "Sympatrische Artbildung beschreibt reproduktive Isolation innerhalb eines gemeinsamen Verbreitungsgebiets, nicht katastrophenbedingte Allelfixierung.",
      C: "Die Katastrophe tötete zufällig (nicht-selektiv); der Mechanismus ist stochastisch (Drift), nicht selektionsgetrieben (natürliche Selektion).",
      D: "Spontane Punktmutationsraten sind extrem gering (~10^-8 pro Basenpaar pro Generation) und erklären keine schnellen Allelverschiebungen.",
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-036",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Ecology",
    subtopic: "Ökologische Nische & Konkurrenzausschluss",
    difficulty: "intermediate",
    stem: "Welches ökologische Szenario veranschaulicht Gauses Konkurrenzausschlussprinzip am direktesten?",
    options: {
      A: "Zwei Einzeller-Arten mit identischen Nahrungsansprüchen konkurrieren in einer geschlossenen Laborkultur um dieselbe limitierende Ressource, was zum Aussterben einer Art führt.",
      B: "Zwei Waldsänger-Arten suchen in verschiedenen Baumhöhen desselben Nadelbaums nach Insekten und koexistieren stabil.",
      C: "Eine Räuber- und eine Beutepopulation zeigen gekoppelte zyklische Fluktuationen gemäß den Lotka-Volterra-Gleichungen.",
      D: "Ein plötzlicher Kälteeinbruch dezimiert 40 % einer Insektenpopulation dichteunabhängig.",
      E: "Mykorrhizapilze tauschen im Boden Phosphat gegen pflanzliche Photosyntheseprodukte aus."
    },
    correct_answer: "A",
    explanation_correct: "Gauses Konkurrenzausschlussprinzip besagt, dass zwei Arten mit identischen ökologischen Nischen (denselben limitierenden Ressourcenansprüchen) im selben Lebensraum nicht dauerhaft koexistieren können. Die Art, welche die limitierende Ressource auch nur minimal effizienter nutzt, vermehrt sich rascher und verdrängt die unterlegene Art bis zu deren lokalem Aussterben. Eine dauerhafte Koexistenz in der Natur gelingt nur über Nischendifferenzierung (Ressourcenaufteilung).",
    explanations_incorrect: {
      B: "Nahrungssuche in unterschiedlichen Kronenschichten ist Ressourcenaufteilung (Nischendifferenzierung) zur Vermeidung des Konkurrenzausschlusses.",
      C: "Gekoppelte Populationsoszillationen beschreiben Räuber-Beute-Interaktionen, keine interspezifische Konkurrenz um dieselbe Ressource.",
      D: "Kälteeinbrüche stellen dichteunabhängige abiotische Umweltfaktoren dar, keine Konkurrenz.",
      E: "Der Nährstoffaustausch zwischen Pilz und Baumwurzel ist ein symbiotischer Mutualismus."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-037",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Ecology",
    subtopic: "Ökosystem-Energetik & Trophieebenen",
    difficulty: "foundational",
    stem: "Warum nimmt in terrestrischen Ökosystemen die verfügbare nutzbare Energie von einer Trophieebene zur nächsten steil ab (gemäß Lindemans 10%-Regel)?",
    options: {
      A: "Spitzenprädatoren absorbieren Sonnenlicht direkt und entziehen es so den unteren Ebenen.",
      B: "Energie wird bei biochemischen Reaktionen unter Verletzung des 1. Hauptsatzes der Thermodynamik vernichtet.",
      C: "Der Großteil der aufgenommenen Energie wird bei der Zellatmung als metabolische Wärme dissipiert, für physiologische Erhaltungsprozesse verbraucht oder als unverdaute Faezes ausgeschieden.",
      D: "Primärproduzenten wandeln 100 % des Sonnenlichts in Biomasse um, aber Konsumenten fehlen Enzyme zur Kohlenhydratspaltung.",
      E: "Destruenten absorbieren die gesamte Wärme und strahlen sie als Gammastrahlung in den Weltraum ab."
    },
    correct_answer: "C",
    explanation_correct: "Nach dem 2. Hauptsatz der Thermodynamik geht bei jeder Energieumwandlung ein Teil der freien nutzbaren Energie unumkehrbar als Entropie bzw. metabolische Wärme verloren. Beim Übergang von einer Trophieebene zur nächsten (z. B. Primärproduzent zu Herbivore) werden im Mittel nur ca. 10 % (Schwankungsbreite 5–20 %) der in der Biomasse gespeicherten Energie in neue Biomasse der nächsthöheren Ebene überführt (ökologischer Wirkungsgrad). Die restlichen ~90 % werden für zelluläre Erhaltungsarbeit (Zellatmung, Bewegung, Thermoregulation) verbraucht, als Wärme abgestrahlt oder verbleiben unassimiliert im Kot.",
    explanations_incorrect: {
      A: "Prädatoren sind Heterotrophe und können keine Photonen zur primären Energiegewinnung nutzen.",
      B: "Energie kann nicht vernichtet werden; nach dem 1. Hauptsatz der Thermodynamik bleibt Gesamtenergie erhalten und wandelt sich in Wärme um.",
      D: "Pflanzen wandeln nur ca. 1–2 % der eingestrahlten Sonnenenergie in Primärproduktion um, keineswegs 100 %.",
      E: "Destruenten bauen Detritus mikrobiell ab und geben metabolische Wärme ab, keine Gammastrahlung."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-038",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "Antikörperstruktur & Effektorfunktionen",
    difficulty: "intermediate",
    stem: "Welche Strukturregion eines Immunglobulin-G-Moleküls (IgG) vermittelt die spezifische Antigenbindung, und welche Region vermittelt Effektorfunktionen wie die Komplementaktivierung (C1q-Bindung) und Bindung an makrophagäre Fc-Rezeptoren?",
    options: {
      A: "Die konstante leichte Kette vermittelt die Antigenspezifität; hypervariable Schleifen der Gelenkregion (Hinge-Region) binden C1q.",
      B: "Das Fab-Fragment mit den variablen Domänen (VH und VL) vermittelt die Spezifität; das Fc-Fragment aus konstanten Schwerketten-Domänen vermittelt Effektorfunktionen.",
      C: "Die J-Kette vermittelt die Spezifität; die sekretorische Komponente bindet an Fc-Rezeptoren.",
      D: "Die CH1-Domäne vermittelt die Spezifität; die variable Leichtkettendomäne bindet C1q.",
      E: "Disulfidbrücken vermitteln die Spezifität; die Antigenbindungsgrube aktiviert die Komplementkaskade direkt."
    },
    correct_answer: "B",
    explanation_correct: "Ein IgG-Antikörper ist ein Y-förmiges Glykoprotein aus zwei identischen schweren (H) und zwei identischen leichten (L) Ketten. Die beiden Fab-Arme (Fragment antigen-binding) enthalten die variablen Domänen (VH und VL) mit den hypervariablen komplementaritätsbestimmenden Regionen (CDRs), welche gemeinsam das spezifische Paratop zur Antigenbindung bilden. Der Fc-Stamm (Fragment crystallizable) wird von den konstanten Domänen der schweren Ketten (CH2 und CH3 bei IgG) gebildet und vermittelt Effektorfunktionen, insbesondere die Bindung an C1q zur Aktivierung des klassischen Komplementwegs sowie die Bindung an Fc-gamma-Rezeptoren auf Phagozyten (Opsonierung).",
    explanations_incorrect: {
      A: "Spezifität wird durch variable Domänen beider Ketten vermittelt, nicht durch konstante Ketten; C1q bindet an die CH2-Domäne, nicht die Gelenkregion.",
      C: "Die J-Kette verbindet Monomere in dimeren IgA und pentameren IgM; monomeres IgG besitzt keine J-Kette.",
      D: "CH1 ist eine konstante Domäne ohne Antigenspezifität; VL bildet zusammen mit VH das Paratop.",
      E: "Disulfidbrücken stabilisieren die Tertiär- und Quartärstruktur, bilden jedoch nicht die variable Bindungstasche."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-039",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "ABO-Blutgruppensystem & Vererbung",
    difficulty: "advanced",
    stem: "Ein Mann mit Blutgruppe A, dessen leiblicher Vater Blutgruppe O hatte, zeugt Kinder mit einer Frau mit Blutgruppe B, deren leibliche Mutter Blutgruppe O hatte. Welche ABO-Blutgruppen (Phänotypen) können bei ihren leiblichen Kindern auftreten und in welchen theoretischen Verhältnissen?",
    options: {
      A: "Ausschließlich Blutgruppe AB (100 %).",
      B: "Nur die Blutgruppen A und B im Verhältnis 1:1.",
      C: "Blutgruppe AB (50 %) und Blutgruppe O (50 %).",
      D: "Blutgruppe AB (75 %) und Blutgruppe O (25 %)",
      E: "Die Blutgruppen A, B, AB und O zu gleichen Teilen im Verhältnis 1:1:1:1 (je 25 %)."
    },
    correct_answer: "E",
    explanation_correct: "Am ABO-Genort codieren die Allele I^A und I^B kodominant für Glykosyltransferasen, während das Null-Allel i (Blutgruppe O) rezessiv ist.  \n1. Der Vater hat Phänotyp A, aber sein Vater hatte Blutgruppe O (Genotyp ii). Der Vater muss somit von seinem Vater ein i-Allel geerbt haben und besitzt den heterozygoten Genotyp I^A i.  \n2. Die Mutter hat Phänotyp B, aber ihre Mutter hatte Blutgruppe O (Genotyp ii). Sie muss von ihrer Mutter ein i-Allel geerbt haben und besitzt den heterozygoten Genotyp I^B i.  \n3. Punnett-Kreuzungsquadrat für (I^A i) x (I^B i):  \n   - I^A * I^B -> I^A I^B (Blutgruppe AB, 25 %)  \n   - I^A * i -> I^A i (Blutgruppe A, 25 %)  \n   - I^B * i -> I^B i (Blutgruppe B, 25 %)  \n   - i * i -> ii (Blutgruppe O, 25 %)  \nAlle vier Phänotypen sind möglich und treten im gleichmäßigen Verhältnis 1:1:1:1 auf.",
    explanations_incorrect: {
      A: "100 % AB träte nur auf, wenn beide Eltern reinerbig wären (I^A I^A x I^B I^B).",
      B: "Ein 1:1-Verhältnis von A und B vernachlässigt die Entstehung von AB- und O-Nachkommen.",
      C: "Eine Aufspaltung in 50 % AB und 50 % O ist bei dieser Kombination genetisch unmöglich.",
      D: "Ein Verhältnis von 75 % AB zu 25 % O spiegelt nicht die unabhängige Spaltung zweier heterozygoter Allele wider."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  },
  {
    id: "BIO-BMS-040",
    subject: "BIO",
    section: "BMS",
    primary_topic: "Immunobiology",
    subtopic: "Rhesus-Inkompatibilität & Morbus haemolyticus neonatorum",
    difficulty: "intermediate",
    stem: "Unter welcher elterlichen genetischen Konstellation besteht bei nachfolgenden Schwangerschaften ein klinisches Risiko für eine fetomaternale Rhesus-Inkompatibilität (RhD-Alloimmunisierung) und einen Morbus haemolyticus neonatorum (Erythroblastosis foetalis)?",
    options: {
      A: "RhD-positive Mutter trägt einen RhD-negativen Fetus aus.",
      B: "RhD-positive Mutter trägt einen RhD-positiven Fetus aus.",
      C: "RhD-negative Mutter trägt einen RhD-positiven Fetus aus, gezeugt mit einem RhD-positiven Vater.",
      D: "RhD-negative Mutter trägt einen RhD-negativen Fetus aus, gezeugt mit einem RhD-negativen Vater.",
      E: "RhD-positiver Vater überträgt ein Y-chromosomales Antigen auf eine RhD-positive Mutter."
    },
    correct_answer: "C",
    explanation_correct: "Eine RhD-Inkompatibilität droht, wenn eine RhD-negative Mutter (Genotyp dd) mit einem RhD-positiven Partner ein RhD-positives Kind (Genotyp Dd oder DD) austrägt. Bei der Geburt oder durch fetomaternale Mikrotransfusionen gelangen RhD-positive Erythrozyten des Fetus in den mütterlichen Kreislauf, woraufhin das Immunsystem der Mutter sensibilisiert wird und Anti-D-Antikörper bildet. Bei einer Folgeschwangerschaft mit erneut RhD-positivem Fetus passieren mütterliche Anti-RhD-IgG-Antikörper über den neonatalen Fc-Rezeptor (FcRn) die Plazentaschranke, opsonieren fetale Erythrozyten und führen zu extravasaler Hämolyse (Morbus haemolyticus neonatorum). Eine rechtzeitige Anti-D-Immunglobulin-Prophylaxe (RhoGAM) verhindert diese Sensibilisierung verlässlich.",
    explanations_incorrect: {
      A: "Eine RhD-positive Mutter besitzt das D-Antigen und ist immuntolerant; ein RhD-negatives Kind besitzt kein fremdes D-Antigen.",
      B: "Sind Mutter und Kind beide RhD-positiv, wird das D-Antigen als körpereigen erkannt; es findet keine Alloimmunisierung statt.",
      D: "Sind Mutter und Kind beide RhD-negativ, fehlt das RhD-Antigen auf beiden Seiten; Anti-D-Antikörper können nicht gebildet werden.",
      E: "Das RhD-Gen liegt auf Chromosom 1 (1p36), nicht auf dem Y-Chromosom; der Pathomechanismus beruht auf maternalen IgG-Antikörpern."
    },
    metadata: {
      author: "MedAT BMS Biology QC Engine",
      status: "verified_medat_compliant",
      version: "2.1_de_repaired"
    }
  }
];

function mapChapterId(primaryTopic: string, subtopic: string): string {
  switch (primaryTopic) {
    case "Human Cell Biology":
      return "bio-01-zelle";
    case "Human Body: Histology, Anatomy and Physiology":
      if (subtopic.toLowerCase().includes("atmung") || subtopic.toLowerCase().includes("respiratory")) return "bio-08-atmung";
      if (subtopic.toLowerCase().includes("herz") || subtopic.toLowerCase().includes("lymph")) return "bio-07-herzkreislauf";
      if (subtopic.toLowerCase().includes("nerven") || subtopic.toLowerCase().includes("sinnes")) return "bio-09-nervensystem";
      return "bio-02-koerper";
    case "Early Human Development":
      return "bio-03-fruehentwicklung";
    case "Genetics, Inheritance and Chromosome Biology":
    case "Human Genetics":
      return "bio-04-genetik";
    case "Molecular Genetics and Genetic Methods":
      return "bio-05-molgen";
    case "Evolution":
      return "bio-01-zelle";
    case "Ecology":
      return "bio-06-stoffwechsel";
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
 * Normalisierte 40 StoredQuestion-Objekte für die MedAT-H Generalprobe #1 Runtime-Engine
 */
export const GENERALPROBE_1_BIO_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_BIO_QUESTIONS.map(
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
      tags: ["BMS", "Biologie", "Generalprobe #1", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.1_de_repaired",
      setOrder: idx + 1,
    };
  }
);
