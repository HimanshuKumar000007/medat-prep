import type { StoredQuestion } from "./types";

export const biologyQuestions: StoredQuestion[] = [

  /* =================================================================
     01. DIE ZELLE (bio-01-zelle)
     ================================================================= */
  {
    id: "bio-01-set1-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Prokaryoten vs. Eukaryoten",
    difficulty: "Leicht",
    questionText:
      "Welches strukturelle Merkmal unterscheidet eukaryotische Zellen grundlegend von prokaryotischen Zellen?",
    options: [
          "Eukaryoten besitzen eine zirkuläre DNA, die frei im Zytoplasma liegt.",
          "Prokaryoten besitzen Ribosomen, Eukaryoten hingegen nicht.",
          "Eukaryoten besitzen einen echten, durch eine Doppelmembran abgegrenzten Zellkern.",
          "Nur Prokaryoten verfügen über eine zelluläre Plasmamembran.",
          "Prokaryoten besitzen stets Mitochondrien zur aeroben Energiegewinnung."
    ],
    correctAnswer: 2,
    explanation:
      "Das definierende Merkmal von Eukaryoten ist das Vorhandensein eines echten, membranumhüllten Zellkerns (Karyon), welcher das Erbmaterial umschließt. Prokaryoten (Bakterien und Archaeen) besitzen keinen Zellkern; ihr Erbmaterial liegt frei als zirkuläres Chromosom im Nukleoid vor. Beide Zelltypen besitzen eine Plasmamembran und Ribosomen, jedoch fehlen Prokaryoten membranumgrenzte Organellen wie Zellkern, ER oder Mitochondrien.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Prokaryoten vs. Eukaryoten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellkompartimentierung",
    difficulty: "Mittel",
    questionText:
      "Welche biologische Hauptfunktion erfüllt die zelluläre Kompartimentierung in eukaryotischen Zellen?",
    options: [
          "Vollständige Verhinderung jeglicher Diffusion von Molekülen innerhalb der Zelle",
          "Reduktion der Membranoberfläche zur Minimierung des Energieverbrauchs",
          "Zusammenlegung aller Stoffwechselreaktionen in ein einziges gemeinsames Milieu",
          "Erhöhung der DNA-Mutationsrate zur schnelleren evolutionären Anpassung",
          "Schaffung getrennter Reaktionsräume mit spezifischen biochemischen Bedingungen"
    ],
    correctAnswer: 4,
    explanation:
      "Zellkompartimentierung bezeichnet die Unterteilung der eukaryotischen Zelle in membranumgrenzte Räume (Organellen). Dies ermöglicht es der Zelle, unterschiedliche Stoffwechselprozesse mit spezifischen Milieuanforderungen (z. B. saurer pH-Wert in Lysosomen für den enzymatischen Abbau versus neutraler pH-Wert im Zytosol für die Glykolyse) simultan und störungsfrei nebeneinander ablaufen zu lassen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkompartimentierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zelldifferenzierung",
    difficulty: "Mittel",
    questionText:
      "Worauf beruht die Differenzierung verschiedener Zelltypen (z. B. Nervenzellen, Muskelzellen, Leberzellen) im menschlichen Körper primär?",
    options: [
          "Auf dem gezielten Verlust nicht benötigter Chromosomen während der Entwicklung",
          "Auf einer differentiellen Genexpression bei weitgehend identischem Genom",
          "Auf spontanen Punktmutationen in den somatischen Stammzellen",
          "Auf der ausschließlichen Aufnahme von fremdem genetischem Material aus Nachbarzellen",
          "Auf dem vollständigen Abbau aller Organellen in spezialisierten Zellen"
    ],
    correctAnswer: 1,
    explanation:
      "Nahezu alle kernhaltigen somatischen Zellen eines Organismus besitzen denselben vollständigen DNA-Satz. Die Entstehung spezialisierter Zelltypen erfolgt durch differentielle Genexpression: Bestimmte Genabschnitte werden zelltypspezifisch aktiviert oder reprimiert, wodurch unterschiedliche Proteine synthetisiert werden und die Zelle ihre charakteristische Form und Funktion erhält.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zelldifferenzierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellspezialisierung",
    difficulty: "Leicht",
    questionText:
      "Welche der folgenden menschlichen Zellarten verliert im Zuge ihrer regulären Reifung den Zellkern sowie sämtliche Organellen, um ihre Transportfunktion optimal zu erfüllen?",
    options: [
          "Neutrophile Granulozyten",
          "Hepatozyten",
          "Osteozyten",
          "Reife Erythrozyten",
          "Skelettmuskelzellen"
    ],
    correctAnswer: 3,
    explanation:
      "Reife menschliche Erythrozyten stoßen während der Erythropoese ihren Zellkern und ihre Organellen (einschließlich der Mitochondrien) aus. Dadurch entsteht die typische bikonkave Form mit maximalem Innenraum für das sauerstoffbindende Protein Hämoglobin. Ihre Energie gewinnen reife Erythrozyten ausschließlich über die anaerobe Glykolyse.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellspezialisierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Aufbau der Lipiddoppelschicht",
    difficulty: "Leicht",
    questionText:
      "Wie sind Phospholipide in der biologischen Plasmamembran primär angeordnet?",
    options: [
          "Als Lipiddoppelschicht mit hydrophilen Köpfen nach außen und innen sowie hydrophoben Fettsäureschwänzen im Membraninneren",
          "Als Monoschicht, deren hydrophobe Anteile direkt dem wässrigen Zytosol zugewandt sind",
          "Als starres Kristallgitter, das durch kovalente Bindungen zwischen allen Lipiden fixiert ist",
          "Als ungeordnete Emulsion, in der Proteine und Lipide gleichmäßig ohne Orientierung verteilt sind",
          "Als Doppelschicht mit nach innen weisenden polaren Phosphatgruppen und außen liegenden Fettsäuren"
    ],
    correctAnswer: 0,
    explanation:
      "Phospholipide sind amphiphile Moleküle: Sie besitzen einen polaren/hydrophilen Kopf und unpolare/hydrophobe Kohlenwasserstoffschwänze. Im wässrigen Milieu ordnen sie sich spontan zu einer Doppelschicht an. Die hydrophilen Köpfe treten mit dem wässrigen intra- und extrazellulären Raum in Kontakt, während die hydrophoben Schwänze im Inneren der Membran eine wasserabweisende Barriere bilden.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Aufbau der Lipiddoppelschicht"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Cholesterin in der Zellmembran",
    difficulty: "Mittel",
    questionText:
      "Welche Funktion übernimmt Cholesterin (Cholesterol) als integraler Bestandteil tierischer Zellmembranen?",
    options: [
          "Es dient als primäre Energiequelle für den aktiven Membrantransport.",
          "Es bildet Ionenkanäle für den schnellen Durchtritt von Natrium- und Kaliumionen.",
          "Es wirkt als Fluiditätspuffer bei Temperaturänderungen.",
          "Es verknüpft Ribosomen kovalent mit der Außenseite der Plasmamembran.",
          "Es verhindert den Einbau von Proteinen in die Lipiddoppelschicht."
    ],
    correctAnswer: 2,
    explanation:
      "Cholesterin lagert sich zwischen die Phospholipide tierischer Zellmembranen ein und fungiert als Fluiditätspuffer: Bei höheren Temperaturen schränkt es die übermäßige Bewegung der Phospholipide ein und stabilisiert die Membran; bei niedrigen Temperaturen verhindert es das zu dichte Zusammenlagern und Kristallisieren der Fettsäureketten und hält die Membran flexibel.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Cholesterin in der Zellmembran"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Selektive Permeabilität",
    difficulty: "Leicht",
    questionText:
      "Welcher der folgenden Stoffe kann die reine Phospholipid-Doppelschicht einer Zelle am leichtesten durch einfache, passive Diffusion überwinden?",
    options: [
          "Glukose",
          "Sauerstoff (O₂)",
          "Natriumionen (Na⁺)",
          "Adenosintriphosphat (ATP)",
          "DNA-Oligonukleotide"
    ],
    correctAnswer: 1,
    explanation:
      "Kleine, unpolare (lipophile) Gase wie Sauerstoff (O₂), Stickstoff (N₂) und Kohlendioxid (CO₂) lösen sich leicht im hydrophoben Kern der Membran und diffundieren ungehindert hindurch. Geladene Ionen (Na⁺) und größere polare Moleküle (wie Glukose oder Nukleotide) benötigen spezifische Transportproteine (Kanäle oder Carrier).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Selektive Permeabilität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Glykokalix",
    difficulty: "Mittel",
    questionText:
      "Was versteht man unter der Glykokalix einer eukaryotischen Zelle?",
    options: [
          "Das kontraktile Aktinnetzwerk direkt unterhalb der Plasmamembran",
          "Eine Schicht aus Ribosomen auf der Membran des rauen endoplasmatischen Retikulums",
          "Die innere Membranauskleidung der Mitochondrien",
          "Das Transportsystem für Vesikel entlang der Mikrotubuli",
          "Die Gesamtheit der Kohlenhydratketten von Glykoproteinen und Glykolipiden an der Zellaußenseite"
    ],
    correctAnswer: 4,
    explanation:
      "Die Glykokalix ist ein filamentöser 'Zuckermantel' auf der extrazellulären Seite der Plasmamembran tierischer Zellen. Sie besteht aus den kovalent gebundenen Oligosaccharidresten von Membranglykoproteinen und -glykolipiden. Sie schützt die Zelloberfläche vor mechanischen und chemischen Schäden und spielt eine zentrale Rolle bei der Zell-Zell-Erkennung sowie bei Immunreaktionen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Glykokalix"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zytoplasma vs. Zytosol",
    difficulty: "Leicht",
    questionText:
      "Wie unterscheiden sich die Begriffe Zytoplasma und Zytosol?",
    options: [
          "Zytosol bezeichnet die reine lösliche Flüssigphase; Zytoplasma umfasst das Zytosol mitsamt den darin liegenden Organellen (ohne Zellkern).",
          "Zytoplasma ist der Inhalt des Zellkerns; Zytosol bezeichnet ausschließlich die Plasmamembran.",
          "Zytosol enthält sämtliche Organellen inklusive Zellkern; Zytoplasma ist frei von Organellen.",
          "Es gibt keinen funktionellen Unterschied, beide Begriffe sind exakte Synonyme für die Kernflüssigkeit.",
          "Zytosol kommt ausschließlich in Pflanzen vor, während Zytoplasma nur in tierischen Zellen existiert."
    ],
    correctAnswer: 0,
    explanation:
      "Das Zytoplasma umfasst den gesamten Raum zwischen Plasmamembran und Zellkern, bestehend aus dem flüssigen Zytosol, dem Zytoskelett und den darin suspendierten Zellorganellen. Das Zytosol (auch Zytosolflüssigkeit oder Hyaloplasma) ist der zelluläre Flüssigkeitsanteil mit gelösten Proteinen, Ionen und Metaboliten, abzüglich der membranbegrenzten Organellen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoplasma vs. Zytosol"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellkern und Nukleolus",
    difficulty: "Mittel",
    questionText:
      "Welche primäre Aufgabe erfüllt der Nukleolus (Kernkörperchen) im Zellkern eukaryotischer Zellen?",
    options: [
          "Die Replikation und Reparatur der mitochondrialen DNA",
          "Die Synthese von ribosomaler RNA (rRNA) und der Zusammenbau ribosomaler Untereinheiten",
          "Die direkte Translation von Zytoskelettproteinen in der Kernmatrix",
          "Die enzymatische Entgiftung von Fremdstoffen durch Cytochrom-P450-Enzyme",
          "Die Synthese und Speicherung von Steroidhormonen"
    ],
    correctAnswer: 1,
    explanation:
      "Der Nukleolus ist eine nicht-membranumgrenzte Struktur im Zellkern, in der Gene für ribosomale RNA (rRNA) transkribiert werden. Hier werden die rRNA-Moleküle prozessiert und zusammen mit aus dem Zytosol importierten ribosomalen Proteinen zu den Vorläufern der kleinen und großen ribosomalen Untereinheiten zusammengebaut, welche anschließend durch die Kernporen ins Zytosol exportiert werden.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkern und Nukleolus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mitochondrien",
    difficulty: "Leicht",
    questionText:
      "Welche Aussage über Mitochondrien trifft aus zellbiologischer Sicht zu?",
    options: [
          "Sie besitzen keine eigene Erbinformation und werden ausschließlich über nukleäre Gene gesteuert.",
          "Sie sind von einer einfachen Biomembran umgeben und enthalten hydrolytische Enzyme bei saurem pH-Wert.",
          "Sie kommen ausschließlich in tierischen Zellen vor und fehlen in eukaryotischen Pflanzenzellen stets.",
          "Sie besitzen eine Doppelmembran, eine eigene zirkuläre DNA sowie eigene 70S-ähnliche Ribosomen.",
          "Ihre ATP-Synthese findet ausschließlich an der glatten Außenmembran statt."
    ],
    correctAnswer: 3,
    explanation:
      "Mitochondrien besitzen eine Doppelmembran (glatte Außenmembran und gefaltete Innenmembran), eigene zirkuläre mitochondriale DNA (mtDNA) sowie eigene Ribosomen (Mitoribosomen). Dieser Aufbau stützt die Endosymbiontentheorie, wonach Mitochondrien von ursprünglich frei lebenden, aeroben Prokaryoten abstammen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitochondrien"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Endoplasmatisches Retikulum",
    difficulty: "Mittel",
    questionText:
      "Welche funktionelle Unterscheidung zwischen dem rauen endoplasmatischen Retikulum (rER) und dem glatten endoplasmatischen Retikulum (sER) ist korrekt?",
    options: [
          "Das rER synthetisiert Lipide und speichert Calcium; das sER dient der Proteinbiosynthese für den Export.",
          "Das rER baut toxische Wasserstoffperoxide ab; das sER bildet die Spindelfasern während der Mitose.",
          "Das rER ist mit Ribosomen besetzt und synthetisiert Membran- sowie Sekretproteine; das sER dient der Lipidsynthese, Entgiftung und Calciumspeicherung.",
          "Das rER ist von einer Doppelmembran umgeben; das sER besitzt keinerlei Membranstrukturen.",
          "Das rER betreibt die oxidative Phosphorylierung; das sER ist für die Translation zytosolischer Proteine zuständig."
    ],
    correctAnswer: 2,
    explanation:
      "Das raue ER trägt an seiner zytosolischen Seite Ribosomen und ist der Ort der Synthese von Membranproteinen, lysosomalen Enzymen und sekretorischen Proteinen. Das glatte ER besitzt keine Ribosomen; zu seinen Hauptaufgaben gehören die Lipidsynthese (z. B. Phospholipide, Steroide), die Biotransformation/Entgiftung lipophiler Substanzen sowie die Speicherung von Calciumionen (im Muskel als sarkoplasmatisches Retikulum).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Endoplasmatisches Retikulum"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Golgi-Apparat",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage beschreibt den gerichteten Proteinfluss durch den Golgi-Apparat zutreffend?",
    options: [
          "Proteine treten über die trans-Seite ein und verlassen den Golgi-Apparat an der cis-Seite in Richtung Zellkern.",
          "Proteine erreichen die cis-Seite vom rauen ER aus, durchlaufen die Zisternen und verlassen die trans-Seite in Vesikeln.",
          "Proteine werden im Golgi-Apparat an freien Ribosomen translatiert und diffundieren ungerichtet in das Zytosol.",
          "Der Golgi-Apparat nimmt Proteine ausschließlich über Endozytose von der Plasmamembran auf und leitet sie zum Zellkern.",
          "Der Golgi-Apparat baut alle aufgenommenen Proteine mithilfe von Katalase vollständig zu Aminosäuren ab."
    ],
    correctAnswer: 1,
    explanation:
      "Der Golgi-Apparat weist eine funktionelle Polarität auf: Transportvesikel aus dem rauen ER verschmelzen mit der konvexen, kernnahen Empfangsseite (cis-Golgi). Während der Passage durch die Zisternen werden Proteine posttranslational modifiziert (z. B. Glykosylierung), sortiert und an der reifen trans-Seite (trans-Golgi-Netzwerk) in Transportvesikel für Lysosomen, Plasmamembran oder Sekretion verpackt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Golgi-Apparat"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Lysosomen vs. Peroxisomen",
    difficulty: "Schwer",
    questionText:
      "Welcher wesentliche Unterschied besteht zwischen Lysosomen und Peroxisomen?",
    options: [
          "Lysosomen besitzen eine Doppelmembran, während Peroxisomen membranlos sind.",
          "Lysosomen enthalten saure Hydrolasen zum Makromolekülabbau; Peroxisomen nutzen Oxidasen und Katalase zum oxidativen Stoffabbau.",
          "Lysosomen dienen der ATP-Synthese; Peroxisomen synthetisieren ribosomale Untereinheiten.",
          "Peroxisomen arbeiten bei stark saurem pH-Wert (ca. 4,5); Lysosomen besitzen ein rein neutrales Milieu.",
          "Lysosomen kommen nur in pflanzlichen Zellen vor, während Peroxisomen ausschließlich in tierischen Zellen vorkommen."
    ],
    correctAnswer: 1,
    explanation:
      "Lysosomen ('Magen der Zelle') sind von einer einfachen Membran umgeben und enthalten saure Hydrolasen (pH-Optimum ca. 4,5–5,0) zum Abbau zelleigener und fremder Makromoleküle. Peroxisomen enthalten oxidative Enzyme (Oxidasen), die beim Abbau von Fettsäuren und Toxinen Wasserstoffperoxid (H₂O₂) erzeugen, welches sofort durch das peroxisomale Enzym Katalase zu Wasser und Sauerstoff entgiftet wird.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Lysosomen vs. Peroxisomen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zytoskelett — Mikrofilamente",
    difficulty: "Mittel",
    questionText:
      "Aus welchem Proteinbaustein sind die Mikrofilamente des Zytoskeletts primär aufgebaut?",
    options: [
          "α- und β-Tubulin-Heterodimere",
          "Laminketten der Kernhülle",
          "Kollagen-Fibrillen",
          "Globuläres Aktin (G-Aktin), das zu filamentösem Aktin (F-Aktin) polymerisiert",
          "Vimentin- und Keratin-Monomere"
    ],
    correctAnswer: 3,
    explanation:
      "Mikrofilamente (Aktinfilamente) haben einen Durchmesser von etwa 7 nm und bestehen aus globulären Proteinmonomeren (G-Aktin). Diese polymerisieren unter ATP-Verbrauch zu helikal gewundenen Strängen (F-Aktin). Sie sind essenziell für Zellform, amöboide Fortbewegung, Zytokinese (Teilungsfurche) und Muskelkontraktion.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoskelett — Mikrofilamente"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mikrotubuli und Motorproteine",
    difficulty: "Mittel",
    questionText:
      "Welche Motorproteine nutzen Mikrotubuli als Leitschienen für den intrazellulären Transport von Vesikeln und Organellen?",
    options: [
          "Aktin und Myosin",
          "Claudin und Occludin",
          "Kollagen und Elastin",
          "Kinesin und Dynein",
          "Integrin und Cadherin"
    ],
    correctAnswer: 3,
    explanation:
      "Mikrotubuli (ca. 25 nm Durchmesser, aus Tubulin-Dimeren) bilden das intrazelluläre Schienensystem. Die zugehörigen Motorproteine sind Kinesine (bewegen Lasten überwiegend in Richtung des Plus-Endes, meist zur Zellperipherie) und Dyneine (bewegen Lasten in Richtung des Minus-Endes, meist zum Zentrosom/Zellkern).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mikrotubuli und Motorproteine"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellkontakte",
    difficulty: "Mittel",
    questionText:
      "Welcher Zellkontakt ermöglicht einen direkten elektrischen und metabolischen Stoffaustausch zwischen dem Zytosol zweier benachbarter Zellen?",
    options: [
          "Tight Junctions (Zonula occludens)",
          "Gap Junctions (Nexus)",
          "Desmosomen (Macula adhaerens)",
          "Hemidesmosomen",
          "Fokalkontakte"
    ],
    correctAnswer: 1,
    explanation:
      "Gap Junctions (Nexus) bestehen aus Kanalstrukturen namens Connexonen, die jeweils aus sechs Connexin-Proteinen gebildet werden. Bilden zwei benachbarte Zellen einen solchen gemeinsamen Kanal, können Ionen und kleine Moleküle (bis ca. 1 kDa) direkt vom Zytosol der einen in das der anderen Zelle diffundieren. Dies ist essenziell für die synchrone Erregungsausbreitung im Herzmuskel.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkontakte"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mikrovilli vs. Kinozilien",
    difficulty: "Schwer",
    questionText:
      "Was unterscheidet Mikrovilli strukturell und funktionell von Kinozilien (Flimmerhaaren)?",
    options: [
          "Mikrovilli enthalten Mikrotubuli in einer 9x2+2-Anordnung; Kinozilien enthalten ausschließlich Intermediärfilamente.",
          "Mikrovilli sind aktiv schlagende Fortsätze zum Schleimtransport; Kinozilien dienen der Oberflächenvergrößerung zur Resorption.",
          "Mikrovilli enthalten im Kern Aktinfilamente zur passiven Oberflächenvergrößerung; Kinozilien enthalten Mikrotubuli und sind aktiv beweglich.",
          "Mikrovilli und Kinozilien besitzen einen identischen Aufbau und unterscheiden sich nur im jeweiligen Vorkommen im ZNS.",
          "Mikrovilli kommen nur bei Prokaryoten vor, während Kinozilien auf tierische Zellen beschränkt sind."
    ],
    correctAnswer: 2,
    explanation:
      "Mikrovilli sind unbewegliche, fingerförmige Membranausstülpungen mit einem Bündel paralleler Aktinfilamente im Inneren; sie dienen der passiven Oberflächenvergrößerung (z. B. Bürstensaum im Dünndarm). Kinozilien besitzen ein Gerüst aus Mikrotubuli im klassischen Axonem-Aufbau (9×2 + 2) mit Dyneinarmen und können durch ATP-Hydrolyse aktiv schlagen (z. B. im Flimmerepithel der Atemwege).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mikrovilli vs. Kinozilien"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Osmose und Tonizität",
    difficulty: "Leicht",
    questionText:
      "Was geschieht mit einer menschlichen roten Blutzelle (Erythrozyt), wenn sie in eine stark hypotone Kochsalzlösung (reines destilliertes Wasser) gegeben wird?",
    options: [
          "Sie schrumpft und nimmt eine charakteristische Stechapfelform an.",
          "Sie nimmt osmotisch Wasser auf, schwillt an und platzt (Hämolyse).",
          "Sie bleibt in Form und Volumen völlig unverändert, da die Membran absolut wasserundurchlässig ist.",
          "Sie stößt sofort aktiv alle Natriumionen über die Na+/K+-ATPase aus und teilt sich mitotisch.",
          "Sie baut ihre Plasmamembran ab und bildet eine feste Zellwand."
    ],
    correctAnswer: 1,
    explanation:
      "In einem hypotonen Umfeld (niedrigere Osmolarität als das Zytosol) strömt Wasser entlang des osmotischen Gradienten in die Zelle ein, um die Konzentrationsunterschiede auszugleichen. Da tierischen Zellen eine starre Zellwand fehlt, schwillt der Erythrozyt an und platzt schließlich (osmotische Lyse bzw. Hämolyse). In einer hypertonen Lösung würde die Zelle dagegen Wasser verlieren und schrumpfen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Osmose und Tonizität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Erleichterte Diffusion",
    difficulty: "Mittel",
    questionText:
      "Welche Eigenschaft kennzeichnet die erleichterte Diffusion durch eine biologische Membran?",
    options: [
          "Sie benötigt die direkte Hydrolyse von ATP an der Membraninnenseite.",
          "Sie transportiert Substanzen passiv entlang ihres elektrochemischen Gradienten mithilfe von Transportproteinen (Kanälen oder Carriern).",
          "Sie transportiert Moleküle stets entgegen ihrem Konzentrationsgefälle.",
          "Sie erfolgt ausschließlich über die Bildung und Abschnürung von Clathrin-Vesikeln.",
          "Sie ist im Gegensatz zur einfachen Diffusion niemals sättigbar."
    ],
    correctAnswer: 1,
    explanation:
      "Erleichterte Diffusion ist ein passiver Transportprozess. Hydrophile Moleküle oder Ionen, die die hydrophobe Lipidschicht nicht selbstständig überwinden können, passieren die Membran über spezifische Kanal- oder Carrierproteine. Der Transport erfolgt ohne direkten Energieaufwand (kein ATP) getrieben durch den Konzentrations- bzw. elektrochemischen Gradienten.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Erleichterte Diffusion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Primär aktiver Transport",
    difficulty: "Mittel",
    questionText:
      "Welche Ionenmengen und -richtungen transportiert die primär aktive Na⁺/K⁺-ATPase pro gespaltenem Molekül ATP?",
    options: [
          "3 Na⁺-Ionen nach außen und 2 K⁺-Ionen nach innen",
          "2 Na⁺-Ionen nach außen und 3 K⁺-Ionen nach innen",
          "3 Na⁺-Ionen nach innen und 3 K⁺-Ionen nach außen",
          "1 Na⁺-Ion nach außen und 1 Ca²⁺-Ion nach innen",
          "2 Na⁺-Ionen passiv nach innen ohne Beteiligung von Kalium"
    ],
    correctAnswer: 0,
    explanation:
      "Die Na⁺/K⁺-ATPase ist eine primär aktive Ionenpumpe. Pro hydrolysiertem Molekül ATP transportiert sie unter Konformationsänderung 3 Na⁺-Ionen aus der Zelle heraus und 2 K⁺-Ionen in die Zelle hinein, jeweils entgegen deren bestehende Konzentrationsgradienten. Dies ist essenziell für die Aufrechterhaltung des Ruhemembranpotenzials und des osmotischen Gleichgewichts.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Primär aktiver Transport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Endozytoseformen",
    difficulty: "Leicht",
    questionText:
      "Welcher Transportprozess beschreibt die gezielte Aufnahme großer, partikulärer Strukturen (z. B. Bakterien oder Zelltrümmer) in die Zelle durch Membranausstülpungen?",
    options: [
          "Pinozytose",
          "Exozytose",
          "Osmose",
          "Phagozytose",
          "Erleichterte Diffusion"
    ],
    correctAnswer: 3,
    explanation:
      "Die Phagozytose ('Zellfressen') ist eine Sonderform der Endozytose, bei der spezialisierte Zellen (z. B. Makrophagen, neutrophile Granulozyten) feste, größere Partikel wie Krankheitserreger oder Zelltrümmer durch Pseudopodien (Zellausläufer) umschließen und als Phagosom ins Zellinnere aufnehmen. Pinozytose bezeichnet dagegen die unspezifische Aufnahme gelöster Stoffe und Flüssigkeiten ('Zelltrinken').",
    tags: ["BMS","Biologie","Die menschliche Zelle","Endozytoseformen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellzyklus und Interphase",
    difficulty: "Leicht",
    questionText:
      "In welcher Phase der Interphase des Zellzyklus findet die semikonservative Verdopplung (Replikation) der nukleären DNA statt?",
    options: [
          "G₀-Phase",
          "G₁-Phase",
          "S-Phase (Synthese-Phase)",
          "G₂-Phase",
          "M-Phase (Mitose)"
    ],
    correctAnswer: 2,
    explanation:
      "Die Interphase gliedert sich in G₁-Phase (Zellwachstum, Vorbereitung), S-Phase (Synthese) und G₂-Phase (Vorbereitung auf die Kernteilung). In der S-Phase wird die gesamte Kern-DNA semikonservativ repliziert, sodass jedes Chromosom am Ende der S-Phase aus zwei identischen Schwesterchromatiden besteht.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellzyklus und Interphase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Phasen der Mitose",
    difficulty: "Mittel",
    questionText:
      "In welchem Stadium der Mitose trennen sich die Schwesterchromatiden am Zentromer und wandern zu den entgegengesetzten Spindelpolen?",
    options: [
          "Prophase",
          "Prometaphase",
          "Metaphase",
          "Telophase",
          "Anaphase"
    ],
    correctAnswer: 4,
    explanation:
      "Während der Anaphase werden die Verbindungskomplexe (Kohäsine) am Zentromer enzymatisch gespalten. Die beiden Schwesterchromatiden jedes Chromosoms trennen sich und werden durch die Verkürzung der Kinetochor-Mikrotubuli als eigenständige 1-Chromatid-Chromosomen zu den entgegengesetzten Zellpolen gezogen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Phasen der Mitose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set1-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Apoptose vs. Nekrose",
    difficulty: "Leicht",
    questionText:
      "Welche Eigenschaft kennzeichnet den physiologischen Prozess der Apoptose im Gegensatz zur pathologischen Nekrose?",
    options: [
          "Sie ist ein aktiv gesteuerter, energieabhängiger Prozess, der geordnet und ohne entzündliche Ruptur der Zelle abläuft.",
          "Sie führt stets zum unkontrollierten Platzen der Plasmamembran und massiver Freisetzung zytoplasmatischer Enzyme.",
          "Sie tritt ausschließlich als Folge von akutem mechanischem Gewebetrauma auf.",
          "Bei der Apoptose schwellen alle Zellorganellen stark an, bevor die Zellmembran lysiert.",
          "Sie läuft vollkommen ohne Aktivierung intrazellulärer Signalkaskaden oder Proteasen ab."
    ],
    correctAnswer: 0,
    explanation:
      "Die Apoptose ist der physiologische, 'programmierte Zelltod'. Sie wird durch intrazelluläre Kaskaden (v. a. Caspasen) aktiv und unter ATP-Verbrauch gesteuert. Die Zelle schrumpft, ihre DNA wird fragmentiert, und es bilden sich intakte apoptotische Membrankörperchen, die von Phagozyten ohne Entzündungsreaktion abgebaut werden. Bei der Nekrose hingegen platzt die Zelle traumatisch und löst eine Entzündung aus.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose vs. Nekrose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-01-set2-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Membranproteine — periphere vs. integrale Proteine",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage über periphere Membranproteine ist korrekt?",
    options: [
          "Sie durchspannen die gesamte Lipiddoppelschicht.",
          "Sie sind ausschließlich an der Innenseite der Membran lokalisiert.",
          "Sie dienen als Ionenkanäle, die den gesamten Transport regulieren.",
          "Sie sind durch nicht-kovalente Wechselwirkungen an die Membranoberfläche gebunden.",
          "Sie sind die Hauptbestandteile der Phospholipid-Doppelschicht."
    ],
    correctAnswer: 3,
    explanation:
      "Periphere Membranproteine binden über elektrostatische Wechselwirkungen oder Wasserstoffbrückenbindungen nicht-kovalent an die polaren Kopfgruppen von Lipiden oder an integrale Proteine, ohne die Lipidschicht zu durchspannen. Integrale Proteine durchqueren die Doppelschicht (A). Periphere Proteine können sowohl an der intra- als auch an der extrazellulären Seite lokalisiert sein (B). Ionenkanäle (C) sind typischerweise integrale Transmembranproteine, und die Hauptbestandteile der Doppelschicht sind Phospholipide, nicht Proteine (E).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Membranproteine"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Flüssig-Mosaik-Modell — Lipiddiffusion und Flip-Flop",
    difficulty: "Mittel",
    questionText:
      "Im Flüssig-Mosaik-Modell können Phospholipide lateral in der Membranebene diffundieren. Warum ist ein „Flip-Flop\" (Wechsel von einer Schicht zur anderen) dagegen extrem selten?",
    options: [
          "Weil die hydrophilen Köpfe die hydrophobe Membranmitte passieren müssen",
          "Weil Cholesterin die Bewegung vollständig blockiert",
          "Weil Proteine die Lipide an ihrer Position fixieren",
          "Weil die Membran eine feste Kristallstruktur besitzt",
          "Weil die hydrophoben Schwänze wassergebunden sind"
    ],
    correctAnswer: 0,
    explanation:
      "Ein spontaner Transversalwechsel (Flip-Flop) erfordert, dass die hydrophile, polare Kopfgruppe des Phospholipids den unpolaren, hydrophoben Kern der Doppelschicht durchquert. Dies ist thermodynamisch stark ungünstig und geschieht ohne enzymatische Katalyse (Flippasen/Floppasen/Scramblasen) nur extrem langsam. Cholesterin moduliert lediglich die Membranfluidität (B). Proteine fixieren Lipide nicht starr (C), und die Membran ist bei physiologischer Temperatur fluid, nicht kristallin (D). Die Kohlenwasserstoffketten sind hydrophob/lipophil (E).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Flüssig-Mosaik-Modell","Lipiddiffusion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Osmose — Effekt hypertoner Lösungen auf die Zelle",
    difficulty: "Schwer",
    questionText:
      "Eine Zelle befindet sich in einer hypertonen Lösung. Welche der folgenden Aussagen beschreibt die Konsequenz für den Wassertransport am genauesten?",
    options: [
          "Wasser strömt aktiv durch Aquaporine in die Zelle hinein.",
          "Wasser diffundiert passiv aus der Zelle heraus, was zur Schrumpfung führt.",
          "Wasser wird durch Ionenkanäle gegen den osmotischen Gradienten transportiert.",
          "Die Zelle nimmt durch Endozytose Wasser auf, bis sie platzt.",
          "Es findet kein Nettowassertransport statt, da die Membran für Wasser impermeabel ist."
    ],
    correctAnswer: 1,
    explanation:
      "In einer hypertonen Umgebung ist die Konzentration an osmotisch aktiven Teilchen im Extrazellularraum höher als im Zellinneren. Wasser folgt dem chemischen Potenzial und strömt passiv per Osmose (vor allem über Aquaporine) aus der Zelle, was zur Zellschrumpfung (Krenierung bei Erythrozyten) führt. Wassertransport erfolgt stets passiv entlang des osmotischen Gradienten (A, C falsch), Endozytose ist kein Mechanismus des osmotischen Ausgleichs (D), und biologische Membranen sind für Wasser permeabel (E).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Osmose","Membrantransport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Selektive Permeabilität — Prinzip und physikochemische Grundlagen",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage über die selektive Permeabilität der Zellmembran trifft zu?",
    options: [
          "Alle gelösten Substanzen passieren mit gleicher Geschwindigkeit.",
          "Kleine unpolare Moleküle diffundieren langsamer als große polare Moleküle.",
          "Die Membran ist für Wasser vollständig impermeabel.",
          "Die Permeabilität hängt von der Lipidlöslichkeit und der Größe des Moleküls ab.",
          "Ionen diffundieren passiv ohne Hilfe von Proteinen durch die Lipiddoppelschicht."
    ],
    correctAnswer: 3,
    explanation:
      "Die selektive Permeabilität wird primär durch die hydrophobe Kernzone der Lipiddoppelschicht bestimmt: Kleine, unpolare (lipophile) Moleküle diffundieren rasch, während polare oder geladene Moleküle eine niedrige Permeabilität aufweisen und Transportproteine benötigen. Unpolare Moleküle diffundieren deutlich schneller als polare (B falsch). Wasser kann die Membran passieren (C falsch), und Ionen können wegen ihrer Ladung und Hydrathülle die Lipidmatrix praktisch nicht ohne Transporter/Kanäle überwinden (E falsch).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Selektive Permeabilität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Selektive Permeabilität — Einfache Diffusion unpolarer Gase",
    difficulty: "Leicht",
    questionText:
      "Welche Substanz kann am leichtesten durch die Lipiddoppelschicht der Zellmembran diffundieren?",
    options: [
          "Glucose",
          "Kaliumionen (K⁺)",
          "Sauerstoff (O₂)",
          "Aminosäuren",
          "ATP"
    ],
    correctAnswer: 2,
    explanation:
      "Gase wie O₂, CO₂ und N₂ sind kleine, unpolare Moleküle und können ungehindert durch einfache passive Diffusion die hydrophobe Lipidphase passieren. Glucose (A) und Aminosäuren (D) sind hydrophil/polar und benötigen Carrier (z. B. GLUT-Transporter), Ionen (B) benötigen Ionenkanäle/Pumpen, und ATP (E) ist groß, polyanionisch und impermeabel für die Lipiddoppelschicht.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Diffusion","Membrantransport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mitochondrien — Äußere vs. innere Membran",
    difficulty: "Mittel",
    questionText:
      "Welche Struktur ist charakteristisch für die äußere Mitochondrienmembran, unterscheidet sich aber von der inneren Membran?",
    options: [
          "Sie enthält die ATP-Synthase.",
          "Sie ist hochgefaltet zu Cristae.",
          "Sie ist für kleine Moleküle (< 5 kDa) permeabel aufgrund von Porinen.",
          "Sie enthält die Enzymkomplexe der Atmungskette.",
          "Sie ist für Protonen impermeabel und bildet den chemiosmotischen Gradienten."
    ],
    correctAnswer: 2,
    explanation:
      "Die äußere Mitochondrienmembran besitzt spannungsabhängige Anionenkanäle (VDAC/Porine) und ist daher für Moleküle bis ca. 5 kDa frei durchlässig. Die innere Membran ist dagegen extrem proteinreich, für die meisten Ionen (einschließlich H⁺) impermeabel (E), enthält die Komplexe der Atmungskette (D), die ATP-Synthase (A) und bildet zur Oberflächenvergrößerung Cristae aus (B).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitochondrien","Zellorganellen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Proteintrafficking — Lysosomale Sortierung (ER → Golgi → Lysosom)",
    difficulty: "Mittel",
    questionText:
      "Ein Protein, das für die Lysosomen bestimmt ist, durchläuft welche Route in der Zelle?",
    options: [
          "Freie Ribosomen → Zytosol → Lysosom",
          "Raues ER → Golgi-Apparat → sekretorisches Vesikel → Extrazellularraum",
          "Raues ER → glattes ER → Peroxisom",
          "Raues ER → Golgi-Apparat → vesikulärer Transport → Lysosom",
          "Zellkern → Ribosomen → Zytosol → Lysosom"
    ],
    correctAnswer: 3,
    explanation:
      "Lysosomale Enzyme (saure Hydrolasen) werden ko-translational am rauen ER synthetisiert, im Lumen glykosyliert, im Golgi-Apparat mit einem Mannose-6-Phosphat-Signal (M6P) markiert und über Clathrin-umhüllte Vesikel zum späten Endosom/Lysosom transportiert. Freie Ribosomen (A) bilden zytosolische, nukleäre oder mitochondriale Proteine. Route (B) beschreibt die Exozytose/Sekretion.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Proteintrafficking","Lysosomen","Golgi-Apparat"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Lysosomen — pH-Optimum und Schutzfunktion des Zytosols",
    difficulty: "Mittel",
    questionText:
      "Lysosomale Enzyme sind im sauren Milieu des Lysosoms aktiv. Was würde passieren, wenn ein Lysosom rupturiert und seine Enzyme in das Zytosol (pH ≈ 7,2) gelangen?",
    options: [
          "Die Enzyme würden ihre Aktivität deutlich verringern oder verlieren.",
          "Die Enzyme würden im neutralen pH noch effizienter arbeiten.",
          "Die Enzyme würden sofort den gesamten Zellkern zerstören.",
          "Die Enzyme würden zu ATP-Synthasen umgewandelt.",
          "Die Enzyme würden durch das Zytosol neutralisiert und aktiviert."
    ],
    correctAnswer: 0,
    explanation:
      "Lysosomale Hydrolasen sind säureoptimiert (pH ≈ 4,5–5,0). Das zytosolische Milieu (pH ≈ 7,2) führt zu einer drastischen Inaktivierung der Enzyme, was als Schutzmechanismus gegen versehentliche Autolyse bei einzelnen Membranlecks dient. Erst bei massiver, synchroner Ruptur vieler Lysosomen kommt es zur Zellzerstörung.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Lysosomen","Enzyme"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Peroxisomen vs. Mitochondrien — Kompartimentierte β-Oxidation",
    difficulty: "Schwer",
    questionText:
      "Welche Aussage über den Stoffwechsel von Peroxisomen und Mitochondrien ist korrekt?",
    options: [
          "Beide Organellen synthetisieren ATP durch oxidative Phosphorylierung.",
          "Peroxisomen oxidieren Fettsäuren vollständig zu CO₂ und H₂O für die direkte ATP-Gewinnung.",
          "Mitochondrien produzieren H₂O₂ als Hauptendprodukt der Fettsäureoxidation.",
          "Peroxisomen enthalten keine Enzyme für oxidativen Stoffwechsel.",
          "Peroxisomen initiieren die β-Oxidation sehr langkettiger Fettsäuren, bevor verkürzte Fragmente in den Mitochondrien weiterverarbeitet werden."
    ],
    correctAnswer: 4,
    explanation:
      "Sehr langkettige Fettsäuren (VLCFA, ≥ C22) können von Mitochondrien nicht direkt verarbeitet werden; sie werden in Peroxisomen anoxidiert und gekürzt. Die resultierenden Acetyl-CoA- und mittelkettigen Acyl-CoA-Reste werden dann in Mitochondrien zur vollständigen Oxidation transportiert. Peroxisomen besitzen keine Atmungskette und bilden kein ATP (A, B falsch). H₂O₂ entsteht peroxisomal und wird durch Katalase abgebaut (C falsch).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Peroxisomen","Mitochondrien","Fettsäureoxidation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Ribosomen — 70S (Prokaryoten) vs. 80S (Eukaryoten)",
    difficulty: "Leicht",
    questionText:
      "Ein charakteristischer Unterschied zwischen prokaryotischen und eukaryotischen Ribosomen betrifft:",
    options: [
          "Die Sedimentationskoeffizienten (70S vs. 80S)",
          "Die Fähigkeit zur Proteinbiosynthese",
          "Das Vorhandensein von ribosomaler RNA (rRNA)",
          "Die Bindungsstelle für mRNA",
          "Die prinzipielle Verwendung des Triplett-Codes"
    ],
    correctAnswer: 0,
    explanation:
      "Prokaryoten besitzen 70S-Ribosomen (bestehend aus 50S- und 30S-Untereinheiten), während das Zytosol von Eukaryoten 80S-Ribosomen (60S- und 40S-Untereinheiten) enthält. Beide Systeme katalysieren die Peptidbindung (B), basieren auf rRNA und Proteinen (C), binden mRNA (D) und lesen denselben universellen Triplett-Code ab (E).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Ribosomen","Prokaryoten vs. Eukaryoten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zytoskelett — Motorproteine (Dynein vs. Kinesin)",
    difficulty: "Mittel",
    questionText:
      "Welches motorische Protein transportiert Vesikel entlang von Mikrotubuli zum Zellzentrum (Minus-Ende)?",
    options: [
          "Myosin V",
          "Kinesin",
          "Dynein",
          "Aktin",
          "Tubulin"
    ],
    correctAnswer: 2,
    explanation:
      "Zytoplasmatisches Dynein ist ein retrograder Motor, der Lasten entlang von Mikrotubuli in Richtung des Minus-Endes (in der Regel am Zentrosom / Zellzentrum verankert) transportiert. Kinesine (B) sind überwiegend anterograde Motoren (Richtung Plus-Ende/Zellperipherie). Myosine (A) bewegen sich auf Aktinfilamenten. Aktin (D) und Tubulin (E) sind filamentbildende Strukturproteine, keine Motoren.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoskelett","Motorproteine","Dynein","Kinesin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zytoskelett — Aktinfilamente und Motorinteraktion",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage über Mikrofilamente (Aktinfilamente) ist korrekt?",
    options: [
          "Sie bestehen aus α- und β-Tubulin-Heterodimeren.",
          "Sie bilden den kontraktilen Apparat von Muskelzellen zusammen mit Myosin.",
          "Sie sind für den retrograden Transport entlang von Mikrotubuli zuständig.",
          "Sie bilden das Grundgerüst des 9+2-Axonems in Cilien und Geißeln.",
          "Sie verankern Desmosomen im Zellinneren als mechanisches Netzwerk."
    ],
    correctAnswer: 1,
    explanation:
      "Aktin-Mikrofilamente bilden zusammen mit Myosinköpfchen die Sarkomere der Skelett- und Herzmuskulatur sowie Stressfasern in nicht-muskulären Zellen. Tubulin (A, D) baut Mikrotubuli und das 9+2-Muster von Kinozilien auf. Desmosomen sind typischerweise mit zellspezifischen Intermediärfilamenten (z. B. Keratin) verbunden (E).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoskelett","Aktin","Mikrofilamente"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellkontakte — Tight Junctions (Schlussleistenkomplex)",
    difficulty: "Mittel",
    questionText:
      "Tight Junctions (Zonulae occludentes) in einem Epithel verhindern primär:",
    options: [
          "Den direkten metabolischen und elektrischen Austausch von Ionen zwischen Nachbarzellen",
          "Die mechanische Zugfestigkeit von Gewebeverbänden",
          "Den unkontrollierten parazellulären Transport von Ionen und Molekülen",
          "Die Ausbildung von Hemidesmosomen",
          "Die Bildung von Mitochondrien in den Epithelzellen"
    ],
    correctAnswer: 2,
    explanation:
      "Tight Junctions dichten den Interzellularspalt zwischen benachbarten Epithelzellen apikal ab und regulieren den parazellulären Stofftransport (Barrierefunktion) sowie die Trennung apikaler und basolateraler Membrandomänen (Zaunfunktion). Direkter Ionenaustausch über Kanäle erfolgt über Gap Junctions (A). Mechanische Festigkeit wird primär durch Desmosomen und Adhärenskontakte vermittelt (B).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkontakte","Tight Junctions"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Kinozilien — Axonem-Architektur (9+2) und Dynein-Motoren",
    difficulty: "Schwer",
    questionText:
      "Eine Zelle besitzt zahlreiche bewegliche Zilien an der apikalen Oberfläche. Welche strukturelle Besonderheit ermöglicht deren koordinierte Bewegung?",
    options: [
          "Ein 9+2-Mikrotubuli-Arrangement mit axonemalen Dynein-Armen",
          "Ein zentraler Aktin-Kern ähnlich den Mikrovilli",
          "Ein ungeordnetes Netzwerk von Keratin-Intermediärfilamenten",
          "Ein 9+0-Mikrotubuli-Arrangement ohne zentrale Mikrotubuli",
          "Ein reines Aktin-Myosin-System ohne Beteiligung von Tubulin"
    ],
    correctAnswer: 0,
    explanation:
      "Bewegliche Kinozilien und Geißeln (Flagellen) besitzen ein Axonem aus 9 peripheren Mikrotubuli-Dupletts und einem zentralen Mikrotubuli-Paar (9+2-Struktur). Axonemale Dyneinarme nutzen ATP-Hydrolyse, um ein Gleiten der Dupletts gegeneinander zu bewirken, was durch Nexinverbindungen in eine rhythmische Biegebewegung umgewandelt wird. Mikrovilli (B) basieren auf Aktin, 9+0-Axoneme (D) charakterisieren primäre (unbewegliche, sensorische) Zilien.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Kinozilien","Mikrotubuli","Axonem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mitose — Chronologische Phasenabfolge",
    difficulty: "Leicht",
    questionText:
      "Welche Reihenfolge der Mitosephasen ist korrekt?",
    options: [
          "Prophase → Metaphase → Anaphase → Telophase",
          "Prophase → Anaphase → Metaphase → Telophase",
          "Metaphase → Prophase → Telophase → Anaphase",
          "Telophase → Anaphase → Metaphase → Prophase",
          "Prophase → Telophase → Metaphase → Anaphase"
    ],
    correctAnswer: 0,
    explanation:
      "Die kanonische Abfolge der Mitose lautet: Prophase (Chromatinkondensation, Spindelaufbau; oft gefolgt von der Prometaphase), Metaphase (Ausrichtung in der Äquatorialebene), Anaphase (Trennung der Schwesterchromatiden zu den Polen) und Telophase (Entspiralisierung der Chromosomen, Kernhüllenneubildung).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitose","Zellzyklus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellzyklus — Spindel-Checkpoint (Kinetochor-Anheftung)",
    difficulty: "Mittel",
    questionText:
      "Der Spindel-Checkpoint (Spindle Assembly Checkpoint / Metaphase-Checkpoint) überprüft:",
    options: [
          "Ob die DNA vor Eintritt in die S-Phase intakt und unbeschädigt ist",
          "Ob die Zelle eine ausreichende Mindestgröße für die Teilung erreicht hat",
          "Ob alle Chromosomen korrekt an der Metaphasenplatte ausgerichtet und an Spindelfasern gebunden sind",
          "Ob die DNA-Replikation vollständig abgeschlossen ist",
          "Ob sich die Zentriolen verdoppelt haben"
    ],
    correctAnswer: 2,
    explanation:
      "Der Spindel-Checkpoint (SAC) überwacht den Übergang von der Metaphase zur Anaphase. Er blockiert die Aktivierung des Anaphase-Promoting Complex/Cyclosom (APC/C) so lange, bis jedes einzelne Chromosom über seine Kinetochore korrekt bipolär an die Spindelmikrotubuli angeheftet und unter Spannung in der Metaphasenplatte ausgerichtet ist. Dies verhindert Aneuploidien durch Fehlsegregation der Schwesterchromatiden. DNA-Integrität und Zellgröße vor der S-Phase (A, B) werden am G₁/S-Checkpoint geprüft, der Abschluss der Replikation (D) am G₂/M-Checkpoint.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellzyklus","Spindel-Checkpoint","Mitose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Apoptose — Caspase-Kaskade",
    difficulty: "Mittel",
    questionText:
      "Welche Enzymfamilie ist direkt für die proteolytische Ausführung der apoptotischen Kaskade verantwortlich?",
    options: [
          "Proteinkinasen",
          "Phosphatasen",
          "Proteasomale Hydrolasen",
          "DNA-Polymerasen",
          "Caspasen"
    ],
    correctAnswer: 4,
    explanation:
      "Caspasen (Cysteine-dependent Aspartate-directed Proteases) sind die zentralen Effektoren und Initiatoren des programmierten Zelltods (Apoptose). Initiatorcaspasen (z. B. Caspase-8, -9) aktivieren nach intrinsischen oder extrinsischen Stimuli die Effektorcaspasen (z. B. Caspase-3, -7), welche spezifische zelluläre Zielproteine spalten und die kontrollierte Demontage der Zelle bewirken.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose","Caspasen","Zelltod"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zelldifferenzierung — Epigenetik und Genregulation",
    difficulty: "Schwer",
    questionText:
      "In einer differenzierten Nervenzelle und einer differenzierten Hepatozyte desselben Individuums sind die genomischen DNA-Sequenzen identisch, die Proteinexpressionsmuster jedoch völlig unterschiedlich. Welcher Mechanismus ist hierfür primär verantwortlich?",
    options: [
          "Unterschiedliche DNA-Methylierungsmuster und Histonmodifikationen",
          "Unterschiedliche somatische Mutationen im Kerngenom",
          "Unterschiedliche Chromosomenanzahlen in den Organen",
          "Die Verwendung unterschiedlicher genetischer Codes in den Geweben",
          "Unterschiedliche DNA-Replikationsgeschwindigkeiten"
    ],
    correctAnswer: 0,
    explanation:
      "Zelltypspezifische Expressionsprofile werden durch epigenetische Mechanismen (DNA-Methylierung an CpG-Inseln, Histonacetylierung/-methylierung und Chromatinstruktur) gesteuert, welche Gene aktivieren oder stilllegen, ohne die primäre Basensequenz zu verändern. Eukaryotische Gewebe besitzen denselben genetischen Code (D) und (abgesehen von Keimzellen/Erythrozyten) denselben diploiden Chromosomensatz (C). Mutationen (B) sind pathologisch und nicht Ursache regulärer Differenzierung.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zelldifferenzierung","Epigenetik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Endozytose — Pinozytose vs. Phagozytose",
    difficulty: "Mittel",
    questionText:
      "Bei der Pinozytose nimmt eine Zelle Flüssigkeit und darin gelöste Moleküle auf. Wie unterscheidet sich dies von der Phagozytose?",
    options: [
          "Pinozytose erfordert ATP, Phagozytose nicht.",
          "Pinozytose ist die Aufnahme von Flüssigkeit und gelösten Stoffen, Phagozytose die Aufnahme fester Partikel.",
          "Pinozytose findet ausschließlich in Pflanzenzellen statt.",
          "Phagozytose ist ein passiver Prozess, Pinozytose aktiv.",
          "Pinozytose verwendet keine Vesikel, Phagozytose dagegen schon."
    ],
    correctAnswer: 1,
    explanation:
      "Pinozytose („Zelltrinken\") bezeichnet die unspezifische oder rezeptorvermittelte Aufnahme extrazellulärer Flüssigkeitströpfchen und gelöster Makromoleküle über kleine Vesikel (oft < 150 nm). Phagozytose („Zellfressen\") ist die Aufnahme größerer Partikel (Bakterien, Zelltrümmer) über Pseudopodien in Phagosomen (> 250 nm) durch spezialisierte Zellen (z. B. Makrophagen). Beide Prozesse sind energieabhängig (ATP) und nutzen Membranvesikel.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Endozytose","Pinozytose","Phagozytose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellgröße — Oberfläche-zu-Volumen-Verhältnis und Diffusionslimitierung",
    difficulty: "Leicht",
    questionText:
      "Welche Aussage über die Zellgröße ist physiologisch und physikalisch korrekt?",
    options: [
          "Prokaryotische Zellen sind typischerweise deutlich größer als eukaryotische Zellen.",
          "Das Oberfläche-zu-Volumen-Verhältnis nimmt mit zunehmender Zellgröße zu.",
          "Eukaryotische Zellen können beliebig groß werden, da der Zellkern den Stoffwechsel unbegrenzt steuert.",
          "Menschliche Neurone stellen die kleinsten Zellen des menschlichen Körpers dar.",
          "Ein höheres Oberfläche-zu-Volumen-Verhältnis begünstigt den diffusiven Stoffaustausch bezogen auf das Zellvolumen."
    ],
    correctAnswer: 4,
    explanation:
      "Bei Vergrößerung einer kugelförmigen Zelle wächst das Volumen mit der dritten Potenz des Radius (r³), die Oberfläche jedoch nur mit der zweiten Potenz (r²). Das Verhältnis A/V sinkt (3/r), wodurch Diffusionswege länger werden und die Austauschkapazität pro Volumeneinheit abnimmt. Kleinere Zellen besitzen ein größeres A/V-Verhältnis (B falsch) und tauschen Stoffe effizienter aus. Prokaryoten sind kleiner als Eukaryoten (A falsch). Die kleinsten menschlichen Zellen sind Granulazellen des Kleinhirns und Thrombozyten/Spermien, nicht Neurone (D falsch).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellgröße","Diffusionslimitierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zytoplasma — Nomenklatur und Abgrenzung zum Nukleoplasma",
    difficulty: "Mittel",
    questionText:
      "Welche Struktur ist KEIN Bestandteil des Zytoplasmas?",
    options: [
          "Mitochondrien",
          "Freie Ribosomen",
          "Zytosol",
          "Zellkern (Karyoplasma und Chromatin)",
          "Peroxisomen"
    ],
    correctAnswer: 3,
    explanation:
      "Das Zytoplasma umfasst das gesamte Zellvolumen innerhalb der Plasmamembran mit Ausnahme des Zellkerns. Es besteht aus dem Zytosol (der flüssigen Phase, C), den Zytoskelettfilamenten, Ribosomen (B) und den zytoplasmatischen Organellen (Mitochondrien A, Peroxisomen E, ER, Golgi-Apparat etc.). Der Inhalt des Zellkerns wird als Karyoplasma bzw. Nukleoplasma bezeichnet und ist durch die Kernhülle abgegrenzt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoplasma","Zellaufbau"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Na⁺/K⁺-ATPase — Elektrogener Transport vs. K⁺-Leitfähigkeit",
    difficulty: "Schwer",
    questionText:
      "Die Na⁺/K⁺-ATPase transportiert 3 Na⁺-Ionen aus der Zelle und 2 K⁺-Ionen in die Zelle pro hydrolysiertem ATP. Welche Konsequenz hat dies für den elektrischen Zustand der Zelle?",
    options: [
          "Die Zelle wird elektrisch neutral gehalten, da Kationen in beide Richtungen verschoben werden.",
          "Die Zelle wird im Inneren positiv geladen, da K⁺ rascher akkumuliert als Na⁺.",
          "Die Pumpe arbeitet elektrogen und exportiert netto eine positive Ladung, was direkt zu einem kleinen Teil zur Negativität des Ruhemembranpotenzials beiträgt.",
          "Es resultiert kein Ladungseffekt, da Chloridionen obligatorisch 1:1 im Symport mittransportiert werden.",
          "Das Membranpotenzial wird ausschließlich durch die Aktivität dieser Pumpe ohne Beteiligung passiver Ionenkanäle erzeugt."
    ],
    correctAnswer: 2,
    explanation:
      "Weil pro Pumpzyklus 3 positive Ladungen (Na⁺) nach außen, aber nur 2 positive Ladungen (K⁺) nach innen geschleust werden, erzeugt die Na⁺/K⁺-ATPase einen netto Auswärtsstrom positiver Ladung (elektrogener Transport). Dies steuert direkt ca. 5–10 mV zur Negativität des Ruhemembranpotenzials bei. Der weitaus überwiegende Anteil des Ruhemembranpotenzials (ca. -70 bis -90 mV) resultiert jedoch indirekt: Die Pumpe hält den hohen intrazellulären K⁺-Gradienten aufrecht, und der Ausstrom von K⁺ über ständig geöffnete Kalium-Leckkanäle (hohe K⁺-Ruheleitfähigkeit) erzeugt das Diffusionspotenzial.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Na+/K+-ATPase","Membranpotenzial","Aktiver Transport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Apoptose vs. Nekrose — Morphologische und immunologische Unterschiede",
    difficulty: "Mittel",
    questionText:
      "Welches Ereignis ist typisch für die Apoptose, tritt aber bei der klassischen Nekrose NICHT auf?",
    options: [
          "Unkontrollierte Freisetzung intrazellulärer Enzyme in den Extrazellularraum",
          "Auslösung einer ausgeprägten lokalen Entzündungsreaktion",
          "Gezielte Zellschrumpfung und Abschnürung membranumhüllter apoptotischer Körperchen",
          "Frühe lytische Ruptur der Plasmamembran",
          "Anschwellen der Zelle und osmotische Lyse der Organellen"
    ],
    correctAnswer: 2,
    explanation:
      "Apoptose ist ein koordinierter, energieabhängiger Prozess mit DNA-Internukleosomalspaltung, Chromatinkondensation, Zellschrumpfung und Bildung intakter Apoptotic Bodies, die von Makrophagen phagozytiert werden, ohne Entzündung auszulösen. Nekrose ist ein unfallartiger Zelltod mit ATP-Verarmung, Anschwellen (Onkose, E), Membranruptur (D), Freisetzung von Damage-Associated Molecular Patterns (DAMPs) und starker Entzündung (A, B).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose","Nekrose","Zelltod"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zentriolen — Feinbau (9×3-Mikrotubuli-Tripletts)",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage über Zentriolen ist korrekt?",
    options: [
          "Sie kommen in identischer Struktur in allen höheren Pflanzenzellen vor.",
          "Sie bestehen aus neun peripheren Mikrotubuli-Tripletts in einer zylindrischen Anordnung (9×3).",
          "Sie synthetisieren ATP für die Bewegung der Spindelfasern.",
          "Sie stellen den Syntheseort für Kern-DNA dar.",
          "Sie bilden die Basalkörperchen von Kinozilien, bestehen strukturell jedoch aus Aktinfilamenten."
    ],
    correctAnswer: 1,
    explanation:
      "Ein Zentriol besteht aus 9 kreisförmig angeordneten Mikrotubuli-Tripletts (9×3-Struktur), die durch Proteine (wie SAS-6) in Speichenform („Cartwheel\") stabilisiert werden. Ein Zentrosom besteht aus zwei orthogonal angeordneten Zentriolen und der perizentriolären Matrix (PCM). Höhere Pflanzen besitzen keine Zentriolen (A falsch). Zentriolen bestehen aus Tubulin, nicht Aktin (E falsch), und synthetisieren weder ATP noch DNA (C, D falsch).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zentriolen","Zentrosom","Zytoskelett"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set2-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellkompartimentierung — Trennung von Reaktionsräumen",
    difficulty: "Leicht",
    questionText:
      "Welcher Vorteil der zellulären Kompartimentierung ermöglicht es lysosomalen Hydrolasen, hochgradig substratspezifisch Makromoleküle abzubauen, ohne zytosolische Zellbestandteile unkontrolliert zu zerstören?",
    options: [
          "Die umschließende Einzelmembran hält das saure Milieu (pH ≈ 4,5–5,0) im Lumen aufrecht, während im Zytosol bei pH ≈ 7,2 kaum Enzymaktivität vorliegt.",
          "Lysosomen liegen im Extrazellularraum und berühren das Zytosol nicht.",
          "Die lysosomalen Enzyme werden direkt im Zytosol aktiviert und erst im Lysosom inaktiviert.",
          "Lysosomen besitzen keine Membran, sondern binden Enzyme über DNA-Stränge.",
          "Die Kernhülle verhindert den Eintritt der Enzyme in das Zytoplasma."
    ],
    correctAnswer: 0,
    explanation:
      "Die Kompartimentierung durch eine Biomembran ermöglicht es der v-Typ-H⁺-ATPase, Protonen in das Lysosomenlumen zu pumpen und den sauren pH-Wert zu erzeugen, der für die Aktivität der sauren Hydrolasen essenziell ist. Gleichzeitig schützt die Membran das Zytosol vor direktem Enzymkontakt, und eventuell austretende Enzyme sind im neutralen Zytosol kinetisch inaktiviert.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkompartimentierung","Lysosomen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-01-set3-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Osmose und Hämolyse bei tierischen Zellen",
    difficulty: "Leicht",
    questionText:
      "Ein rotes Blutkörperchen wird in destilliertes Wasser gegeben. Was geschieht?",
    options: [
          "Die Zelle schrumpft.",
          "Die Zelle bleibt unverändert.",
          "Die Zelle nimmt Wasser auf und platzt.",
          "Die Zelle wandelt sich in ein weißes Blutkörperchen um.",
          "Die Zelle teilt sich."
    ],
    correctAnswer: 2,
    explanation:
      "Destilliertes Wasser ist stark hypoton gegenüber dem Zellinneren. Wasser strömt osmotisch in die Zelle ein; da die Erythrozytenmembran keine Zellwand besitzt, die dem Innendruck entgegenwirkt, platzt die Zelle (Hämolyse).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Osmose","Hämolyse"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Membranfluidität und Temperaturanpassung",
    difficulty: "Schwer",
    questionText:
      "Zwei Zelllinien werden bei 25 °C und 37 °C kultiviert. Die Zellmembran der bei 25 °C kultivierten Zelle enthält mehr ungesättigte Fettsäuren in ihren Phospholipiden als die bei 37 °C kultivierte Zelle. Welche Schlussfolgerung ist zutreffend?",
    options: [
          "Die Zelle bei 25 °C benötigt mehr ungesättigte Fettsäuren, um die Membranfluidität aufrechtzuerhalten.",
          "Die Zelle bei 37 °C benötigt mehr ungesättigte Fettsäuren, um die Membran zu stabilisieren.",
          "Beide Zellen haben die gleiche Membranfluidität aufgrund der Cholesterinkonzentration.",
          "Die ungesättigten Fettsäuren bei 25 °C verringern die Fluidität zusätzlich.",
          "Die gesättigten Fettsäuren bei 37 °C erhöhen die Fluidität der Membran."
    ],
    correctAnswer: 0,
    explanation:
      "Ungesättigte Fettsäuren besitzen Doppelbindungen (oft in cis-Konfiguration), die Knicke in die Kohlenwasserstoffketten einführen und eine zu dichte Packung der Lipide verhindern. Bei niedrigeren Temperaturen ist ein höherer Anteil nötig, um die Membran fließfähig zu halten und eine Erstarrung (Gelphase) zu vermeiden.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Membranfluidität","Fettsäuren"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Osmoregulation: Tierzelle vs. Pflanzenzelle",
    difficulty: "Mittel",
    questionText:
      "Eine tierische Zelle und eine pflanzliche Zelle werden jeweils in eine stark hypotone Lösung gebracht. Welcher Unterschied in der Reaktion ist zu erwarten?",
    options: [
          "Beide Zellen schrumpfen aufgrund des Wasserverlusts.",
          "Die pflanzliche Zelle platzt, weil die Zellwand keine Wasseraufnahme verhindert.",
          "Beide Zellen bleiben unverändert, da die Membran Wasser nicht passieren lässt.",
          "Die tierische Zelle schrumpft, während die pflanzliche Zelle Wasser verliert.",
          "Die tierische Zelle platzt (Hämolyse), während die pflanzliche Zelle durch Turgordruck auf die Zellwand Widerstand leistet, aber intakt bleibt."
    ],
    correctAnswer: 4,
    explanation:
      "Ohne starre Zellwand kann die tierische Zelle dem osmotischen Wassereinstrom bei starker Hypotonie mechanisch nichts entgegensetzen und lysiert/platzt. Die Zellwand der Pflanzenzelle verhindert dagegen ein Zerreißen des Protoplasten, indem sie dem aufgebauten Turgordruck einen stabilen Gegendruck entgegensetzt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Osmoregulation","Turgordruck"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mitochondrienstruktur und Zellatmung",
    difficulty: "Mittel",
    questionText:
      "Bei einer mitochondrialen Erkrankung ist die innere Mitochondrienmembran beschädigt. Welche zelluläre Funktion ist am unmittelbarsten beeinträchtigt?",
    options: [
          "Die Proteinbiosynthese am rauen ER",
          "Die Lipidbiosynthese im glatten ER",
          "Die oxidative Phosphorylierung und ATP-Produktion",
          "Die Verdauung intrazellulärer Substanzen in Lysosomen",
          "Die Modifikation von Proteinen im Golgi-Apparat"
    ],
    correctAnswer: 2,
    explanation:
      "Die Atmungskettenkomplexe (Komplex I–IV) und die F₀F₁-ATP-Synthase befinden sich in der inneren Mitochondrienmembran. Ist diese undicht oder beschädigt, kann der elektrochemische Protonengradient über die Membran nicht aufrechterhalten werden, wodurch die oxidative Phosphorylierung und ATP-Synthese zusammenbrechen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitochondrien","Oxidative Phosphorylierung","ATP"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Doppelmembran-Organellen",
    difficulty: "Leicht",
    questionText:
      "Welche der folgenden Strukturen sind durch eine Doppelmembran umgeben?",
    options: [
          "Lysosomen und Peroxisomen",
          "Ribosomen und Zentriolen",
          "Golgi-Apparat und ER",
          "Mitochondrien und Zellkern",
          "Mikrovilli und Zilien"
    ],
    correctAnswer: 3,
    explanation:
      "Mitochondrien und der Zellkern (Karyotheka) besitzen jeweils eine äußere und eine innere Membran (Doppelmembransystem; bei Pflanzen auch Plastiden/Chloroplasten). Lysosomen, Peroxisomen, ER und Golgi-Apparat sind einfache Membransysteme (Einzelmembran), während Ribosomen und Zentriolen gänzlich membranlos sind.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellorganellen","Doppelmembran"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Lysosomale Speicherkrankheiten",
    difficulty: "Schwer",
    questionText:
      "Bei Morbus Gaucher fehlt das Enzym Glucocerebrosidase in den Lysosomen. Welche Konsequenz ist die wahrscheinlichste?",
    options: [
          "Das Lysosom rupturiert sofort und setzt Enzyme frei.",
          "Das fehlende Enzym wird durch zytosolische Enzyme ersetzt.",
          "Die Zelle produziert mehr Lysosomen, um den Mangel auszugleichen.",
          "Glucocerebroside akkumulieren im Lysosom, da sie nicht abgebaut werden können.",
          "Das Substrat wird durch Exozytose aus der Zelle entfernt."
    ],
    correctAnswer: 3,
    explanation:
      "Lysosomale Speicherkrankheiten entstehen durch den genetischen Defekt oder Ausfall eines spezifischen sauren Hydrolase-Enzyms. Das Substrat (hier Glucocerebrosid/Glucosylceramid) wird weiterhin in die Lysosomen transportiert, kann dort jedoch nicht gespalten werden und akkumuliert pathologisch (Bildung von Gaucher-Zellen).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Lysosomen","Morbus Gaucher","Stoffwechsel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Peroxisomenfunktion",
    difficulty: "Mittel",
    questionText:
      "Eine Zelle wird mit einem Gift behandelt, das spezifisch Peroxisomen zerstört. Welche Funktion ist am direktesten beeinträchtigt?",
    options: [
          "Die ATP-Produktion durch oxidative Phosphorylierung",
          "Die Proteinbiosynthese an Membran-gebundenen Ribosomen",
          "Der Abbau von Wasserstoffperoxid und die β-Oxidation sehr langer Fettsäuren",
          "Die Verdauung von aufgenommenen Bakterien",
          "Die DNA-Replikation im Zellkern"
    ],
    correctAnswer: 2,
    explanation:
      "Peroxisomen (Microbodies) enthalten Oxidasen und die Katalase zum Abbau von toxischem H₂O₂ sowie Enzyme zur initialen β-Oxidation überlangkettiger Fettsäuren (VLCFA). Die ATP-Synthese (Mitochondrien), Translation (Ribosomen) und DNA-Synthese (Kern) sind davon nicht primär betroffen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Peroxisomen","Katalase","Fettsäureoxidation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Erleichterte vs. einfache Diffusion",
    difficulty: "Mittel",
    questionText:
      "Glucose wird in vielen Zellen durch erleichterte Diffusion aufgenommen. Welche Aussage beschreibt diesen Prozess korrekt im Vergleich zur einfachen Diffusion?",
    options: [
          "Erleichterte Diffusion erfordert ATP, einfache Diffusion nicht.",
          "Erleichterte Diffusion kann gegen den Konzentrationsgradienten stattfinden.",
          "Einfache Diffusion erfordert Proteine, erleichterte Diffusion nicht.",
          "Erleichterte Diffusion erfolgt entlang des Konzentrationsgradienten, erfordert aber ein spezifisches Carrier-Protein.",
          "Beide Transportformen sind nur für Ionen geeignet."
    ],
    correctAnswer: 3,
    explanation:
      "Erleichterte Diffusion ist wie die einfache Diffusion ein passiver Transport entlang des elektrochemischen Gradienten ohne direkten oder indirekten ATP-Verbrauch. Im Gegensatz zur einfachen Diffusion durch die freie Lipidphase benötigt sie jedoch spezifische Transmembranproteine (z. B. Uniporter wie GLUT-1 bis -4), die einer Sättigungskinetik (Michaelis-Menten) unterliegen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Membrantransport","Erleichterte Diffusion","Glucose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Sekundär aktiver Transport und Ionenkopplung",
    difficulty: "Schwer",
    questionText:
      "Herzglykoside wie Digitalis hemmen die Na⁺/K⁺-ATPase in Herzmuskelzellen. Welche indirekte Konsequenz hat dies für die Calciumkonzentration?",
    options: [
          "Die intrazelluläre Calciumkonzentration sinkt, da weniger Natrium zum Austausch verfügbar ist.",
          "Die intrazelluläre Calciumkonzentration steigt, da der Na⁺/Ca²⁺-Austauscher weniger effizient arbeitet.",
          "Die Calciumkonzentration bleibt unverändert, da die Na⁺/K⁺-ATPase keine Rolle bei der Calciumregulation spielt.",
          "Die Calciumkonzentration sinkt, da mehr Kalium in die Zelle gepumpt wird.",
          "Die Calciumkonzentration steigt, weil die ATPase Calcium direkt transportiert."
    ],
    correctAnswer: 1,
    explanation:
      "Die Hemmung der Na⁺/K⁺-ATPase verringert den elektrochemischen Na⁺-Einwärtsgradienten, da Na⁺ intrazellulär akkumuliert. Der sekundär aktive Na⁺/Ca²⁺-Austauscher (NCX) nutzt diesen Gradienten, um Ca²⁺ aus der Zelle zu exportieren. Bei vermindertem Gradienten sinkt der Ca²⁺-Export, wodurch intrazelluläres Ca²⁺ steigt und die Kontraktionskraft (positiv inotrope Wirkung) des Herzmuskels zunimmt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Na+/K+-ATPase","Herzglykoside","Calcium","Aktiver Transport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Exozytose",
    difficulty: "Mittel",
    questionText:
      "Die Freisetzung von Neurotransmittern in den synaptischen Spalt erfolgt primär durch:",
    options: [
          "Erleichterte Diffusion durch Carrier-Proteine",
          "Exozytose von synaptischen Vesikeln",
          "Aktiven Transport durch Ionenpumpen",
          "Osmose durch Aquaporine",
          "Phagozytose der präsynaptischen Membran"
    ],
    correctAnswer: 1,
    explanation:
      "Neurotransmitter werden in präsynaptischen Vesikeln gespeichert. Durch einen Depolarisations-getriggerten Ca²⁺-Einstrom fusionieren diese Vesikel über SNARE-Komplexe mit der präsynaptischen Membran und entleeren ihren Inhalt per regulierter Exozytose in den synaptischen Spalt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Exozytose","Synapse","Neurotransmitter"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellzyklus-Checkpoints",
    difficulty: "Schwer",
    questionText:
      "Ein Medikament blockiert den G₂/M-Checkpoint. Welche Konsequenz ist für eine Zelle mit beschädigter DNA am wahrscheinlichsten?",
    options: [
          "Die Zelle teilt sich normal, da der Schaden in der G₁-Phase repariert wurde.",
          "Die Zelle bleibt dauerhaft in der S-Phase stehen.",
          "Die Zelle aktiviert sofort die Apoptose.",
          "Die Zelle tritt trotz DNA-Schäden in die Mitose ein, was zu chromosomalen Aberrationen führen kann.",
          "Die Zelle verdoppelt ihre DNA erneut, bevor sie teilt."
    ],
    correctAnswer: 3,
    explanation:
      "Der G₂/M-Kontrollpunkt prüft, ob die DNA-Replikation vollständig und fehlerfrei abgeschlossen ist, bevor die Mitose (Cdk1/Cyclin B) initiiert wird. Wird dieser Checkpoint pharmakologisch ausgeschaltet, tritt die Zelle mit replikativen Fehlern oder DNA-Doppelstrangbrüchen in die M-Phase ein, was zu chromosomaler Instabilität und mitotischer Katastrophe führt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellzyklus","Checkpoints","Mitose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Nondisjunction und Aneuploidie",
    difficulty: "Mittel",
    questionText:
      "Während der Anaphase einer Mitose trennen sich die Schwesterchromatiden eines Chromosoms nicht und wandern gemeinsam zu einem Pol. Welche Konsequenz hat dies für die resultierenden Tochterzellen?",
    options: [
          "Eine Tochterzelle erhält ein zusätzliches Chromosom (2n+1), der anderen fehlt eines (2n-1).",
          "Beide Tochterzellen erhalten die normale Chromosomenzahl.",
          "Die Zelle bleibt in der Anaphase stehen, bis das Chromosom getrennt wird.",
          "Die Tochterzellen sind beide haploid.",
          "Das Chromosom wird im Zytosol abgebaut."
    ],
    correctAnswer: 0,
    explanation:
      "Dieses Fehlverteilungsereignis heißt mitotische Nondisjunction: Wandern beide Chromatiden zu demselben Spindelpol, entsteht eine aneuploide Zelle mit Trisomie (2n+1) und eine Zelle mit Monosomie (2n-1). Dies ist eine häufige Ursache für somatischen Mosaizismus und chromosomale Aberrationen in Tumorgeweben.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitose","Nondisjunction","Aneuploidie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Apoptose in der Embryonalentwicklung",
    difficulty: "Mittel",
    questionText:
      "Während der Embryonalentwicklung verschwinden die Gewebebrücken zwischen den Fingern (Interdigitalgewebe) durch programmierten Zelltod. Welches Ereignis ist hierfür charakteristisch?",
    options: [
          "Die Zellen schwellen an und lösen eine Entzündung aus.",
          "Die Zellen werden durch Nekrose zerstört, da sie nicht mehr benötigt werden.",
          "Die Zellen schrumpfen, bilden apoptotische Körperchen und werden von Nachbarzellen phagozytiert.",
          "Die Zellen teilen sich vermehrt, um das Gewebe zu durchbrechen.",
          "Die Zellen fusionieren zu einer großen multinukleären Zelle."
    ],
    correctAnswer: 2,
    explanation:
      "Die Digitalisierung der Extremitätenknospen erfolgt über physiologische Apoptose: Zellen schrumpfen, ihre DNA wird internukleosomal fragmentiert, und es entstehen membranumhüllte Apoptosekörperchen, die von Makrophagen still und ohne entzündliche Gewebereaktion abgeräumt werden.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose","Embryologie","Zelltod"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zelldifferenzierung und Genexpression",
    difficulty: "Mittel",
    questionText:
      "Eine mesenchymale Stammzelle differenziert sich zu einem Osteoblasten. Welcher Prozess ist hierfür primär verantwortlich?",
    options: [
          "Eine dauerhafte Änderung der Basensequenz im Genom des Osteoblasten",
          "Der gezielte Abbau aller nicht für Knochengewebe benötigten Chromosomen",
          "Die selektive Aktivierung und Repression spezifischer Gene durch gewebespezifische Transkriptionsfaktoren",
          "Die Fusion der Stammzelle mit einem reifen Osteoblasten",
          "Die rein passive Aufnahme von Knochenmatrix-Proteinen aus dem Extrazellularraum"
    ],
    correctAnswer: 2,
    explanation:
      "Die Zelldifferenzierung beruht auf differentieller Genexpression (z. B. Hochregulation des Transkriptionsfaktors Runx2 für Osteoblasten). Das Kerngenom bleibt in seiner Basensequenz und Chromosomenzahl unverändert; epigenetische Markierungen und Transkriptionsfaktoren steuern, welche Proteine gebildet werden.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zelldifferenzierung","Genexpression","Stammzellen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zilien vs. Mikrovilli – Struktur und Funktion",
    difficulty: "Mittel",
    questionText:
      "Im Epithel der Atemwege dienen bewegliche Zilien dem Abtransport von Schleim, während Mikrovilli im Darm die Absorptionsfläche vergrößern. Welcher strukturelle Unterschied ist entscheidend?",
    options: [
          "Zilien enthalten Aktin, Mikrovilli enthalten Tubulin.",
          "Zilien sind aktiv beweglich durch ein 9+2-Mikrotubuli-Axonem mit Dynein, Mikrovilli sind statische Aktin-Ausstülpungen.",
          "Zilien und Mikrovilli haben identische molekulare Aufbauten.",
          "Mikrovilli sind aktiv schlagend beweglich, Zilien sind unbewegliche Membranstäbe.",
          "Zilien synthetisieren ATP, Mikrovilli transportieren aktiv Protonen."
    ],
    correctAnswer: 1,
    explanation:
      "Kinozilien (Flimmerhaare) basieren auf Mikrotubuli im 9+2-Axonem und bewegen sich aktiv unter ATP-Verbrauch mittels Dyneinarmen (mukoziliäre Clearance). Mikrovilli sind unverzweigte, starre Zellausstülpungen mit einem zentralen Bündel aus Aktinfilamenten, die der passiven Vergrößerung der Resorptionsfläche dienen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoskelett","Kinozilien","Mikrovilli","Epithel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zytoskelett-assoziierte Proteine und Neurodegeneration",
    difficulty: "Schwer",
    questionText:
      "Bei der Alzheimer-Krankheit akkumulieren neurofibrilläre Bündel (Tangles) in Neuronen. Diese bestehen aus hyperphosphoryliertem Tau-Protein, das physiologisch normalerweise...",
    options: [
          "Mikrotubuli stabilisiert und den intrazellulären axonalen Transport reguliert.",
          "Aktinfilamente im Sarkomer bei Muskelkontraktionen anspannt.",
          "Intermediärfilamente an Desmosomen mechanisch verankert.",
          "die Lipiddoppelschicht vor oxidativem Stress schützt.",
          "die DNA-Doppelhelix im Zellkern stabilisiert."
    ],
    correctAnswer: 0,
    explanation:
      "Tau ist ein mikrotubuli-assoziiertes Protein (MAP), das Mikrotubuli in Axonen stabilisiert. Durch pathologische Hyperphosphorylierung verliert Tau die Affinität zu Tubulin, Mikrotubuli zerfallen (Zusammenbruch des axonalen Transports), und freies Tau aggregiert zu unlöslichen paarigen helikalen Filamenten (Neurofibrillenbündel).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoskelett","Mikrotubuli","Tau-Protein","Neurodegeneration"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellkontakte und mechanische Gewebefestigkeit",
    difficulty: "Mittel",
    questionText:
      "Ein mehrschichtiges Epithel (z. B. Epidermis), das starker mechanischer Scherbelastung ausgesetzt ist, benötigt besonders zugfeste Zell-Zell-Verbindungen. Welche Kontakte dominieren hierfür?",
    options: [
          "Tight Junctions und Gap Junctions",
          "Hemidesmosomen und Tight Junctions",
          "Desmosomen (Maculae adhaerentes) und Adherens Junctions (Zonulae adhaerentes)",
          "Gap Junctions (Nexus) allein",
          "Chemische Synapsen und Tight Junctions"
    ],
    correctAnswer: 2,
    explanation:
      "Desmosomen sind über Cadherine (Desmoglein/Desmocollin) mit den zytoplasmatischen Intermediärfilamenten (Keratin/Tonofilamente) verbunden und verleihen Epithelien maximale Zugfestigkeit. Adherens Junctions koppeln an das Aktinskelett. Tight Junctions dichten primär ab, und Gap Junctions dienen dem Ionen-/Metabolitenaustausch.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkontakte","Desmosomen","Adherens Junctions"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zelluläre Kompartimentierung und Proteinfaltung",
    difficulty: "Schwer",
    questionText:
      "Ein Glykoprotein weist im Zytosol, im ER-Lumen und nach Passage des Golgi-Apparats unterschiedliche Faltungszustände und Modifikationen auf. Welches biochemische Prinzip erklärt dies am besten?",
    options: [
          "Jedes Kompartiment besitzt ein spezifisches chemisches Milieu (pH, Redoxpotenzial, Chaperone, Glykosyltransferasen), das die Faltung und Modifikation steuert.",
          "Die Aminosäuresequenz des Polypeptids ändert sich beim Wechsel des Kompartiments.",
          "In den Organellen herrschen drastisch unterschiedliche Körpertemperaturen.",
          "Die Proteine werden in jedem Kompartiment an unterschiedlichen Ribosomen mit abweichendem genetischen Code synthetisiert.",
          "Die Membranen der Kompartimente blockieren jegliche intramolekulare Faltung."
    ],
    correctAnswer: 0,
    explanation:
      "Kompartimentierung schafft getrennte Mikromilieus: Das ER bietet ein oxidierendes Milieu für Disulfidbrückenbildung und N-Glykosylierung (unterstützt durch Chaperone wie BiP/Calnexin), während der Golgi-Apparat spezifische Glykosidasen und Transferasen für O-Glykosylierung und Zuckertrimming bereitstellt. Die Primärsequenz bleibt identisch.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Kompartimentierung","Proteinfaltung","ER","Golgi"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Ribosomentypen: prokaryotisch vs. eukaryotisch",
    difficulty: "Leicht",
    questionText:
      "Ein neuartiges Antibiotikum hemmt spezifisch die Peptidyltransferase der 70S-Ribosomen, blockiert 80S-Ribosomen jedoch nicht. Welche therapeutische Schlussfolgerung ist zutreffend?",
    options: [
          "Das Antibiotikum ist hochgradig toxisch für das menschliche Zytosol.",
          "Das Antibiotikum zerstört gezielt menschliche Erythrozyten.",
          "Das Antibiotikum inhibiert primär die DNA-Gyrase in Viren.",
          "Das Medikament wirkt ausschließlich gegen Pilze, da diese 70S-Zytosol-Ribosomen besitzen.",
          "Das Antibiotikum entfaltet eine selektive antibakterielle Wirkung gegen prokaryotische Erreger."
    ],
    correctAnswer: 4,
    explanation:
      "Bakterielle Zytosol-Ribosomen sind 70S (50S + 30S), während das eukaryotische Zytosol 80S-Ribosomen (60S + 40S) besitzt. Substanzen, die spezifisch an 70S-Ribosomen binden (z. B. Makrolide, Tetracycline, Chloramphenicol), wirken selektiv toxisch auf Bakterien, ohne die zytosolische Translation der Wirtszelle zu lähmen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Ribosomen","Antibiotika","Prokaryoten vs. Eukaryoten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Cholesterin und Membranfluidität",
    difficulty: "Mittel",
    questionText:
      "Eine Zellkultur wird rasch von 37 °C auf 20 °C abgekühlt. Wie wirkt sich der physiologische Einbau von Cholesterin in die Plasmamembran auf diesen Temperaturabfall aus?",
    options: [
          "Cholesterin schiebt sich zwischen die Fettsäureketten, verhindert deren dichtes Zusammenlagern/Kristallisieren und erhält so die Fluidität.",
          "Cholesterin beschleunigt die Gel-Kristallisation der Lipidschicht.",
          "Cholesterin verringert die Fluidität bei Kälte zusätzlich, um Ionenlecks zu stoppen.",
          "Cholesterin spaltet die Phospholipide in freies Glycerin.",
          "Cholesterin wandelt ungesättigte Fettsäuren in gesättigte Fettsäuren um."
    ],
    correctAnswer: 0,
    explanation:
      "Cholesterin fungiert als bidirektionaler Fluiditätspuffer: Bei niedrigen Temperaturen stört sein starres Sterangerüst die geordnete Auskristallisation der Phospholipid-Kohlenwasserstoffketten und senkt den Phasenübergangspunkt, wodurch die Membran auch bei Kälte fluid und funktionstüchtig bleibt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Cholesterin","Membranfluidität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Sekundär aktiver Transport – SGLT",
    difficulty: "Schwer",
    questionText:
      "Im proximalen Tubulus der menschlichen Niere wird Glucose aus dem Primärharn gegen ihren Konzentrationsgradienten in die Tubuluszelle rückresorbiert. Welcher Mechanismus liegt diesem Schritt zugrunde?",
    options: [
          "Einfache passive Diffusion durch die apikale Lipidphase",
          "Erleichterte Diffusion über GLUT-2-Transporter entlang des Konzentrationsgradienten",
          "Sekundär aktiver Symport über SGLT-Transporter gekoppelt an den Natrium-Gradienten",
          "Primär aktiver Transport durch direkte ATP-Hydrolyse an der Glucose-Pumpe",
          "Parazelluläre Osmose über Claudin-Poren"
    ],
    correctAnswer: 2,
    explanation:
      "Die apikale Glucoseaufnahme im proximalen Tubulus erfolgt sekundär aktiv über SGLT (Sodium-Glucose Linked Transporter; SGLT2 und SGLT1). Der elektrochemische Na⁺-Gradient, der basolateral durch die Na⁺/K⁺-ATPase unter ATP-Verbrauch aufgebaut wird, treibt den simultanen Einstrom von Na⁺ und Glucose gegen deren chemischen Gradienten an.",
    tags: ["BMS","Biologie","Die menschliche Zelle","SGLT","Aktiver Transport","Niere","Glucose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Apoptose-Mechanismus",
    difficulty: "Schwer",
    questionText:
      "Ein Zytostatikum aktiviert intrazelluläre Initiator- und Effektorproteasen, führt zu gezielter internukleosomaler DNA-Spaltung und schnürt das Zytoplasma in membranumschlossene Vesikel ab. Welcher Prozess wird hier beschrieben?",
    options: [
          "Nekrose durch unspezifische Membranlyse",
          "Autophagische Vakuolisierung zur reinen Nährstoffgewinnung",
          "Mitotische Spindelbildung",
          "Apoptose (programmierter Zelltod)",
          "Zelluläre Seneszenz ohne morphologische Fragmentierung"
    ],
    correctAnswer: 3,
    explanation:
      "Die proteolytische Kaskade (Caspasen), Chromatinkondensation, enzymatische DNA-Leiter-Fragmentierung und Bildung intakter Apoptotic Bodies ohne Membranruptur oder Freisetzung von Zellinhalt sind die klassischen Hallmarks der Apoptose.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose","Caspasen","Zelltod"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "p53 und Checkpoint-Regulation",
    difficulty: "Mittel",
    questionText:
      "In vielen menschlichen Tumorzellen liegt eine inaktivierende Mutation im p53-Tumorsuppressorgen vor. Welche Konsequenz hat dies für die Zellzyklus-Kontrolle?",
    options: [
          "Die Zelle kann trotz massiver DNA-Schäden den G₁/S-Checkpoint passieren und sich unkontrolliert replizieren.",
          "Die Zelle verharrt permanent in der G₀-Ruhephase.",
          "Die Zelle leitet unmittelbar die intrinsische Apoptose ein.",
          "Die Zelle verliert die Fähigkeit zur Proteinbiosynthese.",
          "Die Zentriolen können sich in der S-Phase nicht mehr verdoppeln."
    ],
    correctAnswer: 0,
    explanation:
      "Das p53-Protein induziert bei DNA-Schäden den Cdk-Inhibitor p21 (Arrest am G₁/S-Checkpoint zur Reparatur) oder aktiviert bei irreparablen Schäden proapoptotische Proteine (z. B. Bax). Bei Funktionsverlust von p53 entfällt diese Bremse: Zellen mit genomischen Läsionen replizieren ihre DNA in der S-Phase und vermehren sich ungehindert.",
    tags: ["BMS","Biologie","Die menschliche Zelle","p53","Zellzyklus","Tumorsuppressor","G1/S-Checkpoint"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Vesikulärer Transport ER–Golgi",
    difficulty: "Schwer",
    questionText:
      "Wird eine Zelle mit Brefeldin A behandelt, wird die Bildung von COPI- und COPII-Vesikeln gehemmt, wodurch der vesikuläre Transport zwischen rauem ER und Golgi-Apparat kollabiert. Welche unmittelbare Auswirkung ist zu beobachten?",
    options: [
          "Neu synthetisierte Sekret- und Membranproteine stauen sich im ER und erreichen den Golgi-Apparat nicht.",
          "Die Zellmembran verliert augenblicklich ihre gesamte Lipiddoppelschicht.",
          "Lysosomale Hydrolasen werden unkontrolliert ins Zytosol freigesetzt.",
          "Mitochondrien übernehmen stellvertretend die Glykosylierung der Proteine.",
          "Die DNA-Polymerase im Zellkern wird sofort inaktiviert."
    ],
    correctAnswer: 0,
    explanation:
      "COPII vermittelt den anterograden Transport vom ER zum cis-Golgi. Wird dieser vesikuläre Verkehr durch Inhibitoren wie Brefeldin A unterbrochen, können Proteine das ER-Lumen nicht verlassen, wodurch es zur Akkumulation von ungefalteten/unmodifizierten Proteinen und ER-Stress kommt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Proteintrafficking","ER","Golgi-Apparat","Vesikeltransport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set3-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mikrovilli-Struktur und Absorptionsfläche",
    difficulty: "Mittel",
    questionText:
      "Eine toxische Schädigung des Aktin-Zytoskeletts führt zum Zerfall der Mikrofilamente in den Mikrovilli des Dünndarmepithels (Bürstensaum). Welche funktionelle Folge tritt primär auf?",
    options: [
          "Der Schlagrhythmus der Flimmerhaare wird irreversibel gestoppt.",
          "Der Bürstensaum kollabiert, was zu einer drastischen Reduktion der Resorptionsfläche und Malabsorption führt.",
          "Die Tight Junctions lösen sich vollständig auf, sodass die Epithelzellen absterben.",
          "Die Zellkerne der Enterozyten verlieren ihre Kernhülle.",
          "Die mitochondriale Atmungskette wird unmittelbar entkoppelt."
    ],
    correctAnswer: 1,
    explanation:
      "Mikrovilli des intestinalen Bürstensaums werden durch parallel gebündelte Aktinfilamente aufrecht gehalten und vergrößern die luminale Oberfläche um das ca. 20- bis 30-Fache. Ein Zusammenbruch des Aktingerüsts führt zum Einsturz der Mikrovilli, drastischem Verlust an Resorptionsfläche und schwerer Nährstoff-Malabsorption.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zytoskelett","Aktin","Mikrovilli","Darm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-01-set4-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Tierische vs. pflanzliche Zellstrukturen",
    difficulty: "Leicht",
    questionText:
      "Welche der folgenden Strukturen bzw. Organellen kommt typischerweise in pflanzlichen Zellen, jedoch NICHT in menschlichen (tierischen) Zellen vor?",
    options: [
          "Mitochondrien",
          "Golgi-Apparat",
          "Peroxisomen",
          "Chloroplasten und eine feste Cellulose-Zellwand",
          "Endoplasmatisches Retikulum"
    ],
    correctAnswer: 3,
    explanation:
      "Menschliche Zellen besitzen keine Chloroplasten (Plastiden zur Photosynthese), keine starre Cellulose-Zellwand und keine große zentrale Zellsaftvakuole. Mitochondrien, der Golgi-Apparat, das endoplasmatische Retikulum und Peroxisomen sind beiden eukaryotischen Zellsystemen gemeinsam.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Pflanzenzelle","Tierzelle","Zellwand","Chloroplasten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Aquaporine & Wassertransport",
    difficulty: "Mittel",
    questionText:
      "Über welche Membranstrukturen erfolgt der extrem schnelle transmembrane Wassertransport in Zellen mit hoher Wasserdurchlässigkeit (z. B. Erythrozyten oder renale Sammelrohrepithelien)?",
    options: [
          "Über spezifische Transmembran-Wasserkanalproteine (Aquaporine) durch erleichterte passive Diffusion",
          "Durch primär aktiven Einstrom über ATP-getriebene Wasserpumpen",
          "Ausschlaggebend ist allein die ungerichtete rezeptorvermittelte Endozytose",
          "Durch direkte Kopplung an den Ausstrom von Cholesterin über ABC-Transporter",
          "Über Gap Junctions, die direkt mit dem Extrazellulärraum in Verbindung stehen"
    ],
    correctAnswer: 0,
    explanation:
      "Aquaporine sind tetramere integrale Membranproteine, die hochspezifische, hydrophile Poren für Wassermoleküle bilden. Der Wassertransport erfolgt passiv entlang osmotischer Gradienten (erleichterte Diffusion) und kann extrem hohe Transportraten (bis zu 3 × 10⁹ Moleküle pro Sekunde und Kanal) erreichen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Aquaporine","Osmose","Membrantransport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mitochondriale Innenmembran & Cristae",
    difficulty: "Leicht",
    questionText:
      "Welchen zellphysiologischen Zweck erfüllt die ausgeprägte Auffaltung der inneren Mitochondrienmembran zu Cristae bzw. Tubuli?",
    options: [
          "Die vollständige Verhinderung des Durchtritts von Sauerstoff",
          "Die Vergrößerung des Speicherraums für zirkuläre DNA",
          "Die direkte mechanische Verankerung an den Zytokeratinfilamenten des Zytosols",
          "Die Synthese von sauren Hydrolasen für den lysosomalen Abbau",
          "Eine massive Vergrößerung der Membranoberfläche zur Verankerung zahlreicher Enzymkomplexe der Atmungskette und ATP-Synthasen"
    ],
    correctAnswer: 4,
    explanation:
      "Die Einstülpungen der Innenmembran (Cristae) vergrößern die funktionelle Oberfläche um ein Vielfaches. Dies erlaubt den Einbau einer extrem hohen Dichte an Proteinkomplexen der Atmungskette (Komplexe I–IV) und F₀F₁-ATP-Synthasen zur Maximierung der zellulären ATP-Syntheserate.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitochondrien","Cristae","Atmungskette"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Signalpeptidase & rER-Translokation",
    difficulty: "Mittel",
    questionText:
      "Was geschieht typischerweise mit der N-terminalen Signalsequenz eines sekretorischen Proteins, nachdem das Polypeptid kotranslational in das Lumen des rauen endoplasmatischen Retikulums (rER) eingeschleust wurde?",
    options: [
          "Sie wird im Zellkern durch Ran-GTP phosphoryliert und rezirkuliert.",
          "Sie wird durch das luminal gelegene Enzym Signalpeptidase vom reifenden Polypeptid abgespalten.",
          "Sie verbleibt dauerhaft am Protein und bildet dessen aktives katalytisches Zentrum.",
          "Sie wird im Zytosol durch freie Ribosomen zu ATP hydrolysiert.",
          "Sie verankert das Protein irreversibel in der Kernmembran."
    ],
    correctAnswer: 1,
    explanation:
      "Sobald das wachsende Polypeptid durch den Translokationskanal (Translocon) in das Lumen des rER tritt, schneidet das membranständige Enzym Signalpeptidase die hydrophobe N-terminale Signalsequenz ab. Das freigesetzte Protein faltet sich anschließend mithilfe luminaler Chaperone (z. B. BiP).",
    tags: ["BMS","Biologie","Die menschliche Zelle","rER","Signalpeptid","Proteintargeting"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Integrine & Zell-Matrix-Kontakte",
    difficulty: "Mittel",
    questionText:
      "Welche Transmembranrezeptoren vermitteln die Verankerung von Epithelzellen an der extrazellulären Matrix (Basallamina) in Hemidesmosomen und Fokalkontakten?",
    options: [
          "Cadherine",
          "Connexine",
          "Claudine",
          "Occludine",
          "Integrine"
    ],
    correctAnswer: 4,
    explanation:
      "Während Zell-Zell-Kontakte (Desmosomen, Adhärenzkontakte) primär durch Cadherine gebildet werden, vermitteln heterodimere Integrine (α- und β-Ketten) die Verankerung der Zelle an der extrazellulären Matrix (Zell-Matrix-Kontakte). In Hemidesmosomen sind Integrine intrazellulär an Intermediärfilamente gekoppelt, in Fokalkontakten an Aktinfilamente.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Integrine","Hemidesmosomen","Zellkontakte"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "N- vs. O-Glykosylierung",
    difficulty: "Schwer",
    questionText:
      "Welcher wesentliche Unterschied besteht hinsichtlich Ort und Verknüpfung zwischen der N-Glykosylierung und der O-Glykosylierung von Proteinen?",
    options: [
          "N-Glykosylierung erfolgt am Lysin im Zellkern; O-Glykosylierung am Methionin in den Mitochondrien.",
          "N-Glykosylierung beginnt kotranslational an Asparaginresten im rauen ER; O-Glykosylierung erfolgt posttranslational an Serin- oder Threoninresten vorwiegend im Golgi-Apparat.",
          "N-Glykosylierung hängt Zucker an Ribosomen; O-Glykosylierung findet ausschließlich an der Außenseite der Plasmamembran statt.",
          "N-Glykosylierung verwendet nur Fruktose; O-Glykosylierung bindet reine Cholesterinmoleküle.",
          "Beide Prozesse laufen ausschließlich im Nukleolus während der G₂-Phase ab."
    ],
    correctAnswer: 1,
    explanation:
      "Die N-Glykosylierung startet im Lumen des rER durch Übertragung eines vorgefertigten Oligosaccharidblocks auf die Aminogruppe von Asparagin (Asn-X-Ser/Thr-Sequenz). Die O-Glykosylierung erfolgt hingegen schrittweise im Golgi-Apparat an der Hydroxylgruppe von Serin- oder Threoninresten.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Glykosylierung","ER","Golgi-Apparat"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mikrotubuli-Dynamik & GTP-Kappe",
    difficulty: "Schwer",
    questionText:
      "Was versteht man unter der \"dynamischen Instabilität\" von Mikrotubuli im eukaryotischen Zytoskelett?",
    options: [
          "Den ständigen Wechsel zwischen Phasen von langsamer Polymerisation (Wachstum) und rascher Depolymerisation (Katastrophe), gesteuert durch die GTP-Hydrolyse an β-Tubulin",
          "Das unkontrollierte Zerreißen von Mikrotubuli durch mechanische Zytokeratin-Spannungen",
          "Die reversible Umwandlung von Mikrotubuli in Aktin-Doppelhelices bei Sauerstoffmangel",
          "Die dauerhafte Fixierung aller Mikrotubuli durch kovalente Bindungen an das Zentromer",
          "Die Translation von Tubulin-Monomeren direkt im Golgi-Apparat"
    ],
    correctAnswer: 0,
    explanation:
      "Mikrotubuli wachsen am Plus-Ende, solange GTP-gebundene β-Tubulin-Dimere angelagert werden (GTP-Kappe). Hydrolysiert das gebundene GTP schneller zu GDP, als neue Untereinheiten hinzukommen, geht die GTP-Kappe verloren: Das Mikrotubulus-Ende wird instabil und depolymerisiert schlagartig (Katastrophe). Durch erneute Bindung von GTP-Tubulin kann das Wachstum wieder einsetzen (Rescue).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mikrotubuli","Zytoskelett","GTP-Kappe"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "ABC-Transporter & P-Glykoprotein",
    difficulty: "Mittel",
    questionText:
      "Welche Transportfunktion übt das P-Glykoprotein (MDR-1-Transporter) aus der Familie der ABC-Transporter in menschlichen Zellen (z. B. an der Blut-Hirn-Schranke oder im Darmepithel) aus?",
    options: [
          "Den passiven Einstrom von Glukose entlang eines Konzentrationsgefälles",
          "Den sekundär aktiven Symport von Natrium und Aminosäuren",
          "Den rezeptorvermittelten Import von Viren in den Zellkern",
          "Den primär aktiven, ATP-abhängigen Efflux (Hinauspumpen) von Fremdstoffen und Arzneistoffen aus dem Zytosol",
          "Die passive Osmose von Wasser in hypertonen Lösungen"
    ],
    correctAnswer: 3,
    explanation:
      "ABC-Transporter (ATP-Binding Cassette) nutzen die Energie der ATP-Hydrolyse für primär aktive Transportprozesse. Das P-Glykoprotein (MDR-1) wirkt als molekulare Effluxpumpe: Es transportiert lipophile Fremdstoffe, Toxine und Arzneistoffe (z. B. Zytostatika) aus dem Zellinneren nach außen und schützt empfindliche Gewebe vor toxischer Akkumulation.",
    tags: ["BMS","Biologie","Die menschliche Zelle","ABC-Transporter","P-Glykoprotein","Aktiver Transport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Ploidie & Chromatidenzahl im Zellzyklus",
    difficulty: "Schwer",
    questionText:
      "Welcher Ploidiegrad (n) und welcher Chromatidengehalt (c) liegen in einer normalen menschlichen Körperzelle unmittelbar nach Abschluss der S-Phase (in der G₂-Phase) vor?",
    options: [
          "Haploid (1n), 1-Chromatid-Zustand (1c)",
          "Diploid (2n), 1-Chromatid-Zustand (2c)",
          "Diploid (2n), 2-Chromatid-Zustand (4c)",
          "Tetraploid (4n), 4-Chromatid-Zustand (4c)",
          "Haploid (1n), 2-Chromatid-Zustand (2c)"
    ],
    correctAnswer: 2,
    explanation:
      "In der G₁-Phase ist eine somatische Zelle diploid mit 46 1-Chromatid-Chromosomen (2n, 2c). In der S-Phase verdoppelt sich die DNA-Menge, wobei jedes Chromosom nun aus zwei identischen Schwesterchromatiden besteht. Der Chromosomensatz bleibt diploid (2n), während der DNA-Gehalt verdoppelt ist (4c, 92 Chromatiden).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellzyklus","Ploidie","Chromatiden","S-Phase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Chromatin-Organisation: Heterochromatin vs. Euchromatin",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage über die funktionelle Organisation des Chromatins im Zellkern während der Interphase ist korrekt?",
    options: [
          "Euchromatin ist dicht kondensiert und transkriptionell inaktiv.",
          "Heterochromatin ist vollständig dekondensiert, liegt zentral im Kern und wird intensiv transkribiert.",
          "Euchromatin ist locker gepackt und für Transkriptionsfaktoren zugänglich, während Heterochromatin dicht gepackt und weitgehend inaktiv ist.",
          "Während der gesamten Interphase liegt das Genom ausnahmslos als maximal kondensierte Metaphase-Chromosomen vor.",
          "Heterochromatin enthält keine DNA, sondern besteht ausschließlich aus RNA-Polymerasen."
    ],
    correctAnswer: 2,
    explanation:
      "Im Interphasekern unterscheidet man aktives Euchromatin (aufgelockert, azetylierte Histone, zugänglich für RNA-Polymerasen und Transkriptionsfaktoren) von inaktivem Heterochromatin (stark kondensiert, meist methyliert, randständig an der Kernlamina verankert).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkern","Chromatin","Euchromatin","Heterochromatin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Lysosomale pH-Sicherheitsbarriere",
    difficulty: "Mittel",
    questionText:
      "Warum führt das versehentliche Platzen eines einzelnen Lysosoms im Zytosol gesunder Zellen im Regelfall NICHT zur vollständigen Selbstverdauung der gesamten Zelle?",
    options: [
          "Die Zelle baut sofort eine dicke Cellulose-Schutzwand um das lysierte Lysosom auf.",
          "Die lysosomalen Hydrolasen besitzen ein saures pH-Optimum (ca. 4,5–5,0) und sind im neutralen pH-Milieu des Zytosols (ca. 7,2) weitgehend inaktiv.",
          "Das Zytosol enthält Enzyme, die Proteine bei Kontakt sofort in DNA zurückverwandeln.",
          "Die Kernmembran neutralisiert alle Enzyme durch sofortigen Ausstoß von Natriumhydroxid.",
          "Freigesetzte Hydrolasen werden sofort von freien Ribosomen translatiert."
    ],
    correctAnswer: 1,
    explanation:
      "Lysosomale Enzyme sind saure Hydrolasen mit einem katalytischen Optimum bei pH 4,5–5,0. Da das neutrale Zytosol einen pH-Wert von etwa 7,2 aufweist, verlieren die austretenden Enzyme ihre Funktionsfähigkeit, was eine unkontrollierte zelluläre Autolyse bei einzelnen Membranleckagen zuverlässig verhindert.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Lysosomen","pH-Wert","Hydrolasen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Membranasymmetrie & Phosphatidylserin",
    difficulty: "Mittel",
    questionText:
      "Phospholipide sind in der Plasmamembran asymmetrisch verteilt. Wo befindet sich das negativ geladene Phosphatidylserin in einer gesunden Zelle und was signalisiert dessen Auftreten auf der Membranaußenseite?",
    options: [
          "Normalerweise außen; signalisiert die Bereitschaft zur mitotischen Teilung",
          "Normalerweise im Zellkern; signalisiert den Beginn der Transkription",
          "Normalerweise im ER-Lumen; signalisiert die Lipidresorption",
          "Normalerweise auf der inneren (zytosolischen) Membranseite; signalisiert auf der Außenseite als \"Eat-me\"-Signal die Phagozytose apoptotischer Zellen durch Makrophagen",
          "Normalerweise an Mitochondrien; signalisiert die Bildung von Glykogen"
    ],
    correctAnswer: 3,
    explanation:
      "In gesunden Zellen halten ATP-abhängige Flippasen Phosphatidylserin auf der zytosolischen Seite der Plasmamembran. Während der Apoptose schalten Scramblasen diese Asymmetrie ab: Phosphatidylserin wird auf die Zellaußenseite exponiert und dient Makrophagen als spezifisches Erkennungssignal (\"Eat-me\"-Signal) zur entzündungsfreien Phagozytose.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Biomembran","Phosphatidylserin","Apoptose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Prometaphase der Mitose",
    difficulty: "Leicht",
    questionText:
      "Welches zelluläre Ereignis kennzeichnet den Übergang von der Prophase zur Prometaphase während der Mitose?",
    options: [
          "Der Zerfall der Kernhülle in Membranvesikel und das Anheften der Spindelfasern an die Kinetochore der Chromosomen",
          "Die vollständige Dekondensation der Chromatiden zu diffusem Euchromatin",
          "Die Einschnürung der Plasmamembran durch den Aktinring",
          "Die Synthese neuer mitochondrialer DNA",
          "Die dauerhafte Verschmelzung der beiden Tochterzellkerne"
    ],
    correctAnswer: 0,
    explanation:
      "Die Prometaphase beginnt mit dem Zerfall der Kernhülle infolge der Phosphorylierung von Kernlaminen. Erst dadurch erhalten die Mikrotubuli des mitotischen Spindelapparats Zugang zu den kondensierten Chromosomen und können an den Kinetochoren der Zentromere binden.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitose","Prometaphase","Zellzyklus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Axonaler Transport (Kinesin vs. Dynein)",
    difficulty: "Mittel",
    questionText:
      "In einem Neuron müssen Neurotransmitter-Vesikel vom Zellsoma entlang des Axons bis zur synaptischen Endigung transportiert werden. Welches Motorprotein und welche Transportrichtung werden hierfür primär genutzt?",
    options: [
          "Dynein für den retrograden Transport zum Soma",
          "Myosin II für den schnellen Transport entlang von Intermediärfilamenten",
          "Kinesin für den anterograden Transport entlang von Mikrotubuli in Richtung des Plus-Endes",
          "Aktin für den passiven Transport ohne ATP-Verbrauch",
          "Clathrin für den Transport durch Kernporen"
    ],
    correctAnswer: 2,
    explanation:
      "Axonale Mikrotubuli sind mit ihren Plus-Enden zur Synapse und ihren Minus-Enden zum Soma orientiert. Der anterograde Transport (vom Soma zur Synapse) wird durch Motorproteine der Kinesin-Familie vermittelt. Zytoplasmatisches Dynein treibt hingegen den retrograden Transport (von der Synapse zum Soma) an.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Motorproteine","Kinesin","Dynein","Mikrotubuli"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Intrinsische Apoptose & Cytochrom c",
    difficulty: "Schwer",
    questionText:
      "Welches Schlüsselereignis an den Mitochondrien leitet den intrinsischen Weg der Apoptose (programmierter Zelltod) ein?",
    options: [
          "Die Freisetzung von Cytochrom c aus dem mitochondrialen Intermembranraum ins Zytosol infolge Membranpermeabilisierung (Bax/Bak)",
          "Die sofortige Verdopplung der ATP-Synthase-Aktivität zur Energiebereitstellung",
          "Die Umwandlung der Mitochondrien in Chloroplasten",
          "Der vollständige Stillstand des Kalium-Einstroms in die mitochondriale Matrix",
          "Die lysosomale Verdauung des gesamten Zellkerns vor Aktivierung von Proteasen"
    ],
    correctAnswer: 0,
    explanation:
      "Bei intrinsischem Apoptosestimulus (z. B. DNA-Schäden, p53-Aktivierung) bilden proapoptotische Proteine (Bax, Bak) Poren in der äußeren Mitochondrienmembran. Das austretende Cytochrom c bindet im Zytosol an Apaf-1 und bildet das Apoptosom, welches Initiator-Caspase-9 rekrutiert und aktiviert.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose","Mitochondrien","Cytochrom c","Caspasen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Tonizität & Erythrozyten-Reaktion",
    difficulty: "Leicht",
    questionText:
      "Was geschieht mit menschlichen Erythrozyten, wenn sie in eine stark hypertone Kochsalzlösung (z. B. 2,0 % NaCl) gegeben werden?",
    options: [
          "Sie schwellen an und platzen durch massiven Wassereinstrom (Hämolyse).",
          "Sie verdoppeln sofort ihren ATP-Gehalt und beginnen sich mitotisch zu teilen.",
          "Sie behalten ihr Volumen vollkommen unverändert bei, da NaCl ungehindert diffundiert.",
          "Sie verlieren durch Osmose Wasser an das umgebende Milieu und schrumpfen zu sogenannten Stechapfelformen.",
          "Sie lösen ihre Plasmamembran vollständig auf und transformieren in Fettgewebe."
    ],
    correctAnswer: 3,
    explanation:
      "Eine 2,0 %ige NaCl-Lösung besitzt eine höhere Osmolarität als das Erythrozytenzytosol (hyperton). Wasser diffundiert entlang des osmotischen Gradienten aus der Zelle hinaus in das Außenmedium, wodurch die Erythrozyten schrumpfen und eine charakteristisch gezackte Form (\"Stechapfelform\") annehmen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Osmose","Erythrozyten","Tonizität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Rezeptorvermittelte Endozytose (Clathrin-Coated Pits)",
    difficulty: "Schwer",
    questionText:
      "Über welchen Mechanismus nehmen eukaryotische Zellen spezifische Makromoleküle wie LDL (Low-Density Lipoprotein) gezielt und konzentriert aus dem Extrazellularraum auf?",
    options: [
          "Durch Clathrin-vermittelte rezeptorabhängige Endozytose über sogenannte Coated Pits und Coated Vesicles",
          "Durch einfache passive Diffusion direkt durch die Phospholipid-Doppelschicht",
          "Über spannungsgesteuerte Natriumkanäle im Symport",
          "Ausschließlich über Gap Junctions der Nachbarzellen",
          "Durch primär aktiven Transport an der Kernhülle"
    ],
    correctAnswer: 0,
    explanation:
      "LDL bindet an spezifische Transmembranrezeptoren in der Plasmamembran, die sich in Clathrin-beschichteten Gruben (Coated Pits) anreichern. Nach Einstülpung und Abschnürung mittels der GTPase Dynamin entstehen Clathrin-Coated Vesicles, die nach Verlust der Clathrinhülle mit dem frühen Endosom fusionieren.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Endozytose","Clathrin","LDL-Rezeptor"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Peroxisomen & Katalase",
    difficulty: "Leicht",
    questionText:
      "Welche lebenswichtige chemische Entgiftungsreaktion katalysiert das Enzym Katalase in den Peroxisomen menschlicher Zellen?",
    options: [
          "Die Umwandlung von Glukose in Glykogen unter ATP-Synthese",
          "Die Spaltung von toxischem Wasserstoffperoxid (H₂O₂) in Wasser (H₂O) und elementaren Sauerstoff (O₂)",
          "Die Synthese von Magensäure (HCl) aus Kochsalz",
          "Die Hydrolyse von intrazellulären DNA-Doppelsträngen",
          "Die Bindung von Kohlendioxid an Hämoglobin"
    ],
    correctAnswer: 1,
    explanation:
      "Beim oxidativen Abbau von Fettsäuren in Peroxisomen entsteht zelltoxisches Wasserstoffperoxid (H₂O₂). Das Markerenzym Katalase spaltet dieses reaktive Molekül in der Reaktion 2 H₂O₂ → 2 H₂O + O₂ rasch in unschädliches Wasser und molekularen Sauerstoff.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Peroxisomen","Katalase","Entgiftung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zell-Zell-Verbindungen: Tight Junctions als Diffusionsbarriere",
    difficulty: "Mittel",
    questionText:
      "Welche Zellverbindungen dichten den Interzellularspalt zwischen Epithelzellen apikal ab und verhindern den unkontrollierten parazellulären Durchtritt von Ionen und Wasser (Diffusionsbarriere)?",
    options: [
          "Tight Junctions (Zonulae occludentes, aufgebaut aus Claudinen und Occludinen)",
          "Gap Junctions (Nexus)",
          "Desmosomen (Maculae adhaerentes)",
          "Hemidesmosomen",
          "Fokalkontakte"
    ],
    correctAnswer: 0,
    explanation:
      "Tight Junctions (Zonulae occludentes) bilden ein gürtelförmiges Netzwerk aus Transmembranproteinen (Claudine, Occludine), das die apikalen Membranen benachbarter Epithelzellen lückenlos versiegelt. Sie erzeugen eine selektive parazelluläre Diffusionsbarriere und trennen die apikale von der basolateralen Membrandomäne (Zaunfunktion).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Tight Junctions","Epithel","Zellkontakte"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Spindelgifte & Mitose-Inhibition",
    difficulty: "Schwer",
    questionText:
      "Das Zytostatikum Paclitaxel (Taxol) stabilisiert Mikrotubuli und blockiert deren Depolymerisation, während Colchicin die Polymerisation von Mikrotubuli hemmt. Welcher Schritt der Zellteilung wird durch beide Substanzen primär arretiert?",
    options: [
          "Die funktionelle Ausbildung bzw. der dynamische Abbau des mitotischen Spindelapparats führt zum Zellzyklusarrest in der Metaphase (Spindel-Checkpoint).",
          "Die Replikation der DNA in der S-Phase wird direkt enzymatisch blockiert.",
          "Die Translation an freien Ribosomen wird sofort irreversibel gestoppt.",
          "Die Bildung der Kernhülle in der Prophase wird irreversibel verhindert.",
          "Die Zelle überspringt die Mitose und verdoppelt nur die Mitochondrien."
    ],
    correctAnswer: 0,
    explanation:
      "Sowohl Inhibitoren der Tubulin-Polymerisation (Colchicin, Vinca-Alkaloide) als auch Hemmer der Depolymerisation (Taxane wie Paclitaxel) stören das hochdynamische Gleichgewicht der Mikrotubuli im Spindelapparat. Ohne korrekte Kinetochor-Spannung bleibt der Spindel-Checkpoint (SAC) aktiv, und die Zelle arretiert in der Metaphase.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitose","Mikrotubuli","Spindelapparat","Pharmakologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Eukaryotische Ribosomenstruktur (80S)",
    difficulty: "Leicht",
    questionText:
      "Aus welchen Untereinheiten und welchem Gesamt-Sedimentationskoeffizienten setzt sich das vollständige eukaryotische Ribosom im Zytosol zusammen?",
    options: [
          "Aus einer 30S- und einer 50S-Untereinheit zu einem 70S-Ribosom",
          "Aus einer 40S- (kleinen) und einer 60S- (großen) Untereinheit zu einem 80S-Ribosom",
          "Aus zwei identischen 40S-Untereinheiten zu einem 80S-Ribosom",
          "Aus einer 20S- und einer 60S-Untereinheit zu einem 100S-Ribosom",
          "Aus einer 50S- und einer 50S-Untereinheit zu einem 70S-Ribosom"
    ],
    correctAnswer: 1,
    explanation:
      "Zytosolische Ribosomen von Eukaryoten besitzen einen Sedimentationskoeffizienten von 80S. Sie setzen sich aus der kleinen 40S-Untereinheit (18S-rRNA und ca. 33 Proteine) und der großen 60S-Untereinheit (28S-, 5,8S- und 5S-rRNA sowie ca. 49 Proteine) zusammen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Ribosomen","Translation","80S"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Elektrogene Wirkung der Na⁺/K⁺-ATPase",
    difficulty: "Mittel",
    questionText:
      "Warum wird die Na⁺/K⁺-ATPase als \"elektrogene Pumpe\" bezeichnet?",
    options: [
          "Weil sie elektrische Ladungen im Zytosol vollständig vernichtet",
          "Weil sie ohne Konzentrationsgradienten Ionen transportiert",
          "Weil sie ausschließlich ungeladene Wassermoleküle befördert",
          "Weil sie Kalium- und Natriumionen in absolut identischer Menge in dieselbe Richtung pumpt",
          "Weil sie pro Spaltung von 1 Molekül ATP netto eine positive Ladung nach außen befördert (3 Na⁺ raus vs. 2 K⁺ rein) und so direkt zur Membranpolarisation beiträgt"
    ],
    correctAnswer: 4,
    explanation:
      "Die Na⁺/K⁺-ATPase transportiert pro ATP-Molekül drei Natriumionen nach außen und zwei Kaliumionen nach innen. Durch diese ungleiche Ladungsbilanz verliert die Zytosolseite pro Zyklus netto eine positive Ladung, was direkt einen kleinen Beitrag (ca. -2 bis -5 mV) zum negativen Membranpotenzial liefert.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Na+/K+-ATPase","Membranpotenzial","Elektrogene Pumpe"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Aufbau der Gap Junctions",
    difficulty: "Mittel",
    questionText:
      "Aus welchen molekularen Untereinheiten setzt sich ein einzelner funktioneller Gap-Junction-Kanal zwischen zwei benachbarten Zellen zusammen?",
    options: [
          "Aus zwei Cadherinen und einem Aktinfilament",
          "Aus einer einzelnen Integrin-Doppelhelix",
          "Aus zwei Halbkanälen (Connexonen), die jeweils aus einem Ring von 6 Connexin-Proteinen in jeder Zellmembran aufgebaut sind",
          "Aus vier Claudin-Ringen und sechs Occludinen",
          "Aus zwei Mikrotubuli-Tripletts im 9x3-Muster"
    ],
    correctAnswer: 2,
    explanation:
      "Ein funktioneller Gap-Junction-Kanal entsteht durch das Aneinanderlagern zweier Halbkanäle (Connexone) aus den Membranen zweier Nachbarzellen. Jedes Connexon besteht aus sechs ringförmig angeordneten Connexin-Proteinen, die eine zentrale wässrige Pore umschließen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Gap Junctions","Connexin","Connexon"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Endosymbiontentheorie (Mitochondrien & Chloroplasten)",
    difficulty: "Schwer",
    questionText:
      "Welche Befunde stützen die Endosymbiontentheorie zur evolutionären Entstehung von Mitochondrien aus prokaryotischen Vorläufern?",
    options: [
          "Eigene zirkuläre doppelsträngige DNA, eigene 70S-Ribosomen, Doppelmembransystem und Teilung durch Fissur (Zweiteilung)",
          "Ein vollständiger Gehalt an eukaryotischen 80S-Ribosomen und linearen Chromosomen",
          "Eine feste Cellulose-Zellwand und Fehlen jeglicher Membranlipide",
          "Die Synthese aller mitochondrialen Proteine ausschließlich im Zytosol der Wirtszelle",
          "Die Unfähigkeit zur eigenständigen Proteinbiosynthese"
    ],
    correctAnswer: 0,
    explanation:
      "Mitochondrien (und Chloroplasten) stammen evolutionär von aeroben Proteobakterien ab, die von Ur-Eukaryoten phagozytiert wurden. Die Kernbeweise sind: zirkuläre DNA ohne Histone (mtDNA), eigene 70S-Ribosomen (sensibel für bakterielle Antibiotika), innere Membran mit bakterientypischem Cardiolipin und autonome Zweiteilung.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitochondrien","Endosymbiontentheorie","Evolution"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set4-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellzyklus-Kontrolle: Cyclin-CDK & Restriktionspunkt",
    difficulty: "Schwer",
    questionText:
      "Welcher molekulare Mechanismus steuert den Übergang vom G₁-Checkpoint (Restriktionspunkt) in die S-Phase des Zellzyklus?",
    options: [
          "Cyclin-D/CDK4/6-Komplexe phosphorylieren das Retinoblastom-Protein (pRb), wodurch der Transkriptionsfaktor E2F freigesetzt wird und Gene für die S-Phase aktiviert.",
          "p53 zerstört alle Ribosomen, um die Zelle schlagartig in die Mitose zu zwingen.",
          "Die ATP-Synthase stoppt jegliche Phosphorylierung, sodass die DNA kondensiert.",
          "Topoisomerasen zerschneiden die Kernhülle und fusionieren die Zentriolen.",
          "Caspase-3 aktiviert die DNA-Polymerase α durch Spaltung von Histonen."
    ],
    correctAnswer: 0,
    explanation:
      "Am Restriktionspunkt phosphorylieren mitogen-induzierte Cyclin-D/CDK4/6- und Cyclin-E/CDK2-Komplexe das hemmende Retinoblastom-Protein (pRb). Das hyperphosphorylierte pRb lässt den Transkriptionsfaktor E2F los, welcher die Expression von Genen für die DNA-Replikation (z. B. Cyclin A, DNA-Polymerase) anschaltet.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellzyklus","Cyclin","CDK","Restriktionspunkt","pRb"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-01-set5-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Ruhemembranpotenzial & Nernst-Gleichgewicht",
    difficulty: "Mittel",
    questionText:
      "Welcher physikochemische Faktor ist in einer ruhenden menschlichen Zelle primär dafür verantwortlich, dass das gemessene Ruhemembranpotenzial (ca. -70 mV) sehr nahe am Kalium-Gleichgewichtspotenzial (ca. -90 mV) liegt?",
    options: [
          "Der ständige Einstrom von Natriumionen durch spannungsabhängige Ionenkanäle",
          "Die vollständige Undurchlässigkeit der Lipiddoppelschicht für Wasser",
          "Die im Ruhezustand im Vergleich zu anderen Ionen weitaus höchste Membranpermeabilität für Kaliumionen durch offene Kalium-Leck-Kanäle",
          "Die direkte enzymatische Spaltung von ATP an der Außenseite der Glykokalix",
          "Die selektive Bindung von Calciumionen an Aktinfilamente"
    ],
    correctAnswer: 2,
    explanation:
      "Das Membranpotenzial einer Zelle nähert sich stets dem Gleichgewichtspotenzial desjenigen Ions an, für welches die Membran im jeweiligen Zustand die höchste Permeabilität aufweist. Da in Ruhe ständig geöffnete Kalium-Hintergrundkanäle (Leck-Kanäle) vorliegen, ist die Kaliumpermeabilität (P_K) um ein Vielfaches höher als die für Natrium oder Chlorid, wodurch das Ruhepotenzial nahe beim K⁺-Gleichgewichtspotenzial liegt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Membranpotenzial","Kalium","Leck-Kanäle","Nernst"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mitochondrien & Endosymbiontentheorie",
    difficulty: "Leicht",
    questionText:
      "Welche morphologische und genetische Eigenschaft von Mitochondrien stützt die Endosymbiontentheorie über deren evolutionäre Entstehung direkt?",
    options: [
          "Das Vorhandensein einer zirkulären, histonfreien DNA, 70S-ähnlicher Ribosomen und einer Doppelmembran",
          "Der Besitz einer starren Zellwand aus vernetzter Cellulose",
          "Die Fähigkeit zur autonomen Transkription nukleärer Histongene",
          "Das Fehlen jeglicher Membranlipide in der inneren mitochondrialen Schicht",
          "Die ausschließliche Translation von Proteinen über freie 80S-Ribosomen des Wirtszytosols"
    ],
    correctAnswer: 0,
    explanation:
      "Mitochondrien stammen evolutionsbiologisch von aeroben Bakterien (Alphaproteobakterien) ab, die von einer Vorläufer-Eukaryotenzelle endozytiert wurden. Für diese Endosymbiontentheorie sprechen ihre zirkuläre, histonfreie DNA (mtDNA), eigene bakterienähnliche 70S-Ribosomen, die eigenständige Teilung durch Einschnürung sowie die Doppelmembran (wobei die innere Membran das bakterielle Lipid Cardiolipin enthält).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitochondrien","Endosymbiontentheorie","Evolution"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Ploidiegrad & Chromatidenzahl im Zellzyklus",
    difficulty: "Schwer",
    questionText:
      "In welcher Phase des eukaryotischen Zellzyklus befindet sich eine somatische menschliche Zelle, wenn sie einen diploiden Chromosomensatz (2n) aufweist, bei dem jedes Chromosom aus zwei identischen Schwesterchromatiden besteht (4c-DNA-Gehalt)?",
    options: [
          "Ausschließlich in der G₀-Phase",
          "In der frühen G₁-Phase",
          "Unmittelbar nach Abschluss der Zytokinese",
          "In der G₂-Phase sowie während der Pro- und Metaphase der Mitose",
          "Nur in der Telophase nach Trennung der Chromatiden"
    ],
    correctAnswer: 3,
    explanation:
      "In der G₁-Phase besitzt die somatische Zelle 46 1-Chromatid-Chromosomen (2n, 2c). Während der S-Phase wird die DNA semikonservativ verdoppelt. Von der G₂-Phase über die Prophase bis zur Metaphase der Mitose liegt die Zelle daher im 2n, 4c-Zustand vor (46 Chromosomen, bestehend aus 92 Chromatiden). Erst in der Anaphase trennen sich die Schwesterchromatiden zu 1-Chromatid-Chromosomen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellzyklus","Ploidie","Chromatiden","G2-Phase","Mitose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zytoskelett-Inhibitoren & Spindelapparat",
    difficulty: "Mittel",
    questionText:
      "Sowohl Colchicin als auch Paclitaxel (Taxol) wirken als Mitosehemmstoffe in sich teilenden Zellen. Welcher mechanistische Unterschied liegt ihrer Wirkung auf das Zytoskelett zugrunde?",
    options: [
          "Colchicin zerschneidet Aktinfilamente; Paclitaxel spaltet Myosinköpfchen.",
          "Colchicin stabilisiert die Kernlamina; Paclitaxel blockiert die Translation von Ribosomen.",
          "Colchicin zerstört Zentrosomen irreversibel; Paclitaxel phosphoryliert Kinetochore.",
          "Beide Substanzen stimulieren die Depolymerisation von Mikrotubuli in identischer Weise.",
          "Colchicin hemmt den Zusammenbau (Polymerisation) von Mikrotubuli; Paclitaxel stabilisiert vorhandene Mikrotubuli und blockiert deren dynamischen Abbau (Depolymerisation)."
    ],
    correctAnswer: 4,
    explanation:
      "Beide Substanzen sind sogenannte Spindelgifte, greifen jedoch gegensätzlich in die Mikrotubuli-Dynamik ein: Colchicin bindet an freies Tubulin und verhindert dessen Polymerisation zu Mikrotubuli. Paclitaxel bindet an die Mikrotubulifasern, stabilisiert diese und verhindert die für die Anaphase notwendige Depolymerisation. Beide Mechanismen aktivieren den Spindel-Assembly-Checkpoint und arretieren die Zelle in der Mitose.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mikrotubuli","Colchicin","Taxol","Mitose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Pemphigus vs. Pemphigoid (Desmosomen vs. Hemidesmosomen)",
    difficulty: "Schwer",
    questionText:
      "Welcher pathophysiologische Unterschied besteht zwischen den blasenbildenden Autoimmunerkrankungen Pemphigus vulgaris und Bullöses Pemphigoid hinsichtlich der betroffenen zellulären Haftstrukturen?",
    options: [
          "Pemphigus vulgaris zerstört Gap Junctions; Bullöses Pemphigoid zerstört Tight Junctions.",
          "Pemphigus vulgaris beruht auf Autoantikörpern gegen Desmosomen (Desmoglein) mit intraepidermaler Blasenbildung; Bullöses Pemphigoid beruht auf Autoantikörpern gegen Hemidesmosomen (BP180/BP230) mit subepidermaler Blasenbildung.",
          "Bei beiden Erkrankungen werden ausschließlich Fokalkontakte der Skelettmuskulatur angegriffen.",
          "Pemphigus vulgaris führt zum Zerfall der Kernhülle; Bullöses Pemphigoid zur Zerstörung von Mikrovilli.",
          "Pemphigus vulgaris blockiert spannungsabhängige Natriumkanäle; Bullöses Pemphigoid zerstört Aquaporine."
    ],
    correctAnswer: 1,
    explanation:
      "Pemphigus vulgaris ist durch Autoantikörper gegen desmosomale Cadherine (v. a. Desmoglein-3) charakterisiert; der Verlust des Zell-Zell-Kontakts zwischen Keratinozyten führt zur Akantholyse und schlaffen, intraepidermalen Blasen. Beim Bullösen Pemphigoid richten sich die Autoantikörper gegen hemidesmosomale Strukturproteine (BP180/BP230), wodurch sich die gesamte Epidermis von der Basalmembran ablöst (stabile, pralle subepidermale Blasen).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Desmosomen","Hemidesmosomen","Zellkontakte","Pathologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Golgi-Apparat & Posttranslationale Modifikationen",
    difficulty: "Mittel",
    questionText:
      "Welche biochemische Modifikation und Sortierfunktion findet charakteristischerweise im Golgi-Apparat statt?",
    options: [
          "Die vollständige Replikation der mitochondrialen DNA",
          "Die Synthese von ATP über oxidative Phosphorylierung",
          "Die primäre Translation zytosolischer Proteine an 80S-Ribosomen",
          "Die O-Glykosylierung an Serin- oder Threoninresten sowie das Sortieren von Proteinen für Lysosomen, sekretorische Vesikel und die Plasmamembran",
          "Der Abbau von langkettigen Fettsäuren unter H₂O₂-Bildung"
    ],
    correctAnswer: 3,
    explanation:
      "Der Golgi-Apparat ist die zentrale posttranslationale Modifikations- und Verteilstation der Zelle. Hier erfolgen u. a. die schrittweise O-Glykosylierung (an den OH-Gruppen von Serin/Threonin), Modifikationen der N-Glykosylierung, Phosphorylierungen (z. B. Mannose-6-Phosphat für Lysosomen) sowie die zielgerichtete Verpackung der Proteine im trans-Golgi-Netzwerk.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Golgi-Apparat","O-Glykosylierung","Proteinsortierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Primär vs. Sekundär aktiver Transport",
    difficulty: "Mittel",
    questionText:
      "Wie ist die energetische Kopplung beim sekundär aktiven Glukosetransport (z. B. SGLT-Transporter im Darm- und Nierenepithel) aufgebaut?",
    options: [
          "Die primär aktive Na⁺/K⁺-ATPase verbraucht ATP, um einen Na⁺-Konzentrationsgradienten aufzubauen; dieser elektrochemische Gradient treibt den Glukoseeinstrom gegen deren Konzentrationsgefälle an.",
          "Der Glukosetransporter hydrolysiert selbst direkt ein Molekül ATP pro transportiertem Glukosemolekül.",
          "Glukose diffundiert rein passiv durch hydrophile Poren, während Natrium aktiv exportiert wird.",
          "Die Energie stammt ausschließlich aus dem Protonengradienten der inneren Mitochondrienmembran.",
          "Glukose wird kovalent an Cholesterin gebunden und im Gegentausch mit Calcium passiv aufgenommen."
    ],
    correctAnswer: 0,
    explanation:
      "Beim sekundär aktiven Transport (Symport) wird keine chemische Energie direkt am Transporter gespalten. Die notwendige Triebkraft liefert der steile elektrochemische Natriumgradient, der zuvor unter primär aktivem ATP-Verbrauch durch die basolaterale Na⁺/K⁺-ATPase aufgebaut wurde. Der spontane Einstrom von Na⁺ entlang seines Gradienten \"reißt\" Glukose entgegen deren Konzentrationsgefälle mit in die Zelle.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Membrantransport","SGLT","Na+/K+-ATPase","Symport"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Intermediärfilamente & Zelltypspezifität",
    difficulty: "Leicht",
    questionText:
      "Welches zellspezifische Intermediärfilament wird in der histopathologischen Tumordiagnostik als charakteristischer Marker zum Nachweis von Tumoren epithelialen Ursprungs (Karzinomen) eingesetzt?",
    options: [
          "Vimentin",
          "Desmin",
          "Zytokeratin",
          "Neurofilament",
          "Gliales fibrilläres saures Protein (GFAP)"
    ],
    correctAnswer: 2,
    explanation:
      "Intermediärfilamente sind gewebsspezifisch: Zytokeratine kennzeichnen Epithelgewebe und deren Tumoren (Karzinome). Vimentin findet sich in mesenchymalen Zellen (Bindegewebe, Endothel, Sarkome), Desmin in Muskelzellen, Neurofilamente in Neuronen und GFAP in Gliazellen (Astrozyten). Sie behalten ihre Spezifität auch nach maligner Entartung bei.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Intermediärfilamente","Zytokeratin","Zytoskelett"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Konstitutives vs. Fakultatives Heterochromatin",
    difficulty: "Mittel",
    questionText:
      "Wie unterscheidet sich konstitutives Heterochromatin funktionell und strukturell von fakultativem Heterochromatin?",
    options: [
          "Konstitutives Heterochromatin enthält aktive rRNA-Gene; fakultatives Heterochromatin enthält ausschließlich ribosomale Proteine.",
          "Konstitutives Heterochromatin ist nur in Pflanzenzellen vorhanden; fakultatives nur in tierischen Zellen.",
          "Fakultatives Heterochromatin liegt immer außerhalb des Zellkerns im Zytosol vor.",
          "Konstitutives Heterochromatin wird nach jeder Zellteilung vollständig abgebaut.",
          "Konstitutives Heterochromatin bleibt in allen Zelltypen permanent dicht kondensiert und inaktiv (z. B. an Zentromeren); fakultatives Heterochromatin ist zelltyp- oder entwicklungsabhängig reversibel stillgelegt (z. B. Barr-Körperchen / X-Inaktivierung)."
    ],
    correctAnswer: 4,
    explanation:
      "Konstitutives Heterochromatin besteht weitgehend aus repetitiver DNA (an Zentromeren und Telomeren) und bleibt in allen Zellen des Organismus lebenslang hochkondensiert und transkriptionsinaktiv. Fakultatives Heterochromatin enthält proteinkodierende Gene, die gezielt stillgelegt wurden (z. B. im Zuge der Differenzierung oder als inaktives X-Chromosom/Barr-Körperchen bei weiblichen Säugern), in anderen Zelltypen oder Entwicklungsphasen jedoch als aktives Euchromatin vorliegen können.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkern","Heterochromatin","Barr-Körperchen","Epigenetik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Lysosomale Speicherkrankheiten (Morbus Gaucher)",
    difficulty: "Mittel",
    questionText:
      "Welche Pathologie charakterisiert die lysosomale Speicherkrankheit Morbus Gaucher auf zellulärer Ebene?",
    options: [
          "Ein Mangel an mitochondrialer ATP-Synthase mit Laktatazidose",
          "Ein genetischer Defekt der lysosomalen Glukozerebrosidase (β-Glukosidase), der zur toxischen Akkumulation von Glukozerebrosid in Makrophagen führt",
          "Eine fehlerhafte Zusammensetzung der Kernlamina mit vorzeitiger Alterung",
          "Der Ausfall aller Peroxisomen durch fehlerhafte PEX-Gene",
          "Eine Zerstörung der Mikrotubuli durch fehlerhafte Kinesin-Motoren"
    ],
    correctAnswer: 1,
    explanation:
      "Morbus Gaucher ist die häufigste lysosomale Speicherkrankheit. Durch den Mangel des Enzyms Glukozerebrosidase können Makrophagen aufgenommene Glykolipide aus alten Blutzellen nicht vollständig abbauen. Das unverdaute Glukozerebrosid staut sich in den Lysosomen an, wodurch die Makrophagen zu vergrößerten \"Gaucher-Zellen\" mit streifigem Zytoplasma anschwellen und Organe wie Milz, Leber und Knochenmark schädigen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Lysosomen","Morbus Gaucher","Speicherkrankheit"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Osmose & Tonizität bei Blutzellen",
    difficulty: "Schwer",
    questionText:
      "Welcher osmotische Effekt tritt auf, wenn menschliche Erythrozyten in eine stark hypotone Lösung (z. B. 50 mosmol/l) verbracht werden?",
    options: [
          "Wasser strömt entlang des osmotischen Gradienten massiv in die Erythrozyten ein, woraufhin die Zellen anschwellen und durch Membranruptur lysieren (Hämolyse).",
          "Die Erythrozyten geben sofort Wasser an das Außenmedium ab und schrumpfen zu Stechapfelformen.",
          "Die Ionenkanäle der Plasmamembran schließen sich hermetisch, sodass das Zellvolumen exakt konstant bleibt.",
          "Die Erythrozyten stoßen sofort ihren gesamten Hämoglobingehalt über Exozytose aus.",
          "Es kommt zur spontanen Bildung einer starren Cellulose-Zellwand."
    ],
    correctAnswer: 0,
    explanation:
      "In einer hypotonen Umgebung ist die Konzentration gelöster, nicht-penetrierender Teilchen im Außenmedium geringer als im Zytosol der Zelle. Um das chemische Potenzial auszugleichen, strömt Wasser passiv über Aquaporine und die Lipidmembran in die Zelle ein. Da tierische Zellen keine feste Zellwand besitzen, steigt der intrazelluläre Druck, bis die Plasmamembran reißt und Hämolyse eintritt.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Osmose","Hämolyse","Erythrozyten","Tonizität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Anaphase der Mitose",
    difficulty: "Leicht",
    questionText:
      "Welches Ereignis kennzeichnet die Anaphase der Mitose auf mikroskopischer und molekularer Ebene?",
    options: [
          "Der Zerfall der Kernmembran in kleine Vesikel",
          "Die Replikation des Chromatins an den Kinetochoren",
          "Die maximale Kondensation und Ausrichtung aller Chromosomen in der Äquatorialebene",
          "Die Neubildung der Kernhülle um die dekondensierenden Chromosomen",
          "Die enzymatische Spaltung der Kohäsin-Komplexe am Zentromer und die polwärtige Trennung der Schwesterchromatiden als eigenständige 1-Chromatid-Chromosomen"
    ],
    correctAnswer: 4,
    explanation:
      "Zu Beginn der Anaphase spaltet das Enzym Separase die Kohäsin-Proteinkomplexe, die die Schwesterchromatiden zusammenhalten. Durch die Verkürzung der Kinetochor-Mikrotubuli und das Auseinanderschieben interpolärer Mikrotubuli werden die nun getrennten Chromatiden als 1-Chromatid-Chromosomen synchron zu den entgegengesetzten Spindelpolen gezogen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mitose","Anaphase","Zellteilung","Kohäsin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Glattes endoplasmatisches Retikulum",
    difficulty: "Mittel",
    questionText:
      "Welche Stoffwechselfunktion ist eine zentrale Aufgabe des glatten endoplasmatischen Retikulums (sER)?",
    options: [
          "Die Synthese von Proteinen für den zellulären Export",
          "Die oxidative Decarboxylierung im Citratzyklus",
          "Die Spaltung von Polysacchariden durch saure Hydrolasen",
          "Die Lipidsynthese (z. B. Phospholipide, Cholesterin, Steroidhormone), die Calciumspeicherung sowie die enzymatische Entgiftung lipophiler Substanzen (Cytochrom P450)",
          "Die Bildung von RNA-Primern während der DNA-Replikation"
    ],
    correctAnswer: 3,
    explanation:
      "Das glatte ER (ribosomenfrei) erfüllt drei Hauptaufgaben: (1) Synthese von Membranlipiden und Steroidhormonen (z. B. in Nebennierenrinde und Gonaden), (2) Speicherung und kontrollierte Freisetzung von Calciumionen (Ca²⁺, im Skelettmuskel als sarkoplasmatisches Retikulum), und (3) Biotransformation/Entgiftung hydrophober Fremdstoffe über Cytochrom-P450-Enzymkomplexe (v. a. in der Leber).",
    tags: ["BMS","Biologie","Die menschliche Zelle","sER","Lipidsynthese","Calcium","Cytochrom P450"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Rezeptorvermittelte Endozytose & Clathrin",
    difficulty: "Schwer",
    questionText:
      "Über welchen zellulären Mechanismus wird der Transferrin-Eisen-Komplex oder das Low-Density-Lipoprotein (LDL) spezifisch und reguliert in das Zytosol menschlicher Zellen aufgenommen?",
    options: [
          "Durch unselektive Phagozytose über Pseudopodien",
          "Durch direkte freie Diffusion durch die Phospholipid-Doppelschicht",
          "Durch rezeptorvermittelte Endozytose über Clathrin-beschichtete Gruben (Coated Pits) und nachfolgende Ansäuerung im Endosom zur Ligandenfreisetzung",
          "Durch primär aktiven Transport über die Na⁺/K⁺-ATPase",
          "Durch spontane Transzytose über geöffnete Gap Junctions"
    ],
    correctAnswer: 2,
    explanation:
      "Sowohl LDL als auch Diferro-Transferrin binden an spezifische Transmembranrezeptoren. Diese lagern sich in Clathrin-coated pits zusammen und schnüren sich als Vesikel ab. Nach Abstreifen der Clathrinhülle fusioniert das Vesikel mit dem frühen Endosom. Durch Protonenpumpen (V-Typ-ATPase) sinkt der pH-Wert im Endosom ab, wodurch der Ligand (Eisen bzw. LDL) vom Rezeptor dissoziiert. Der freie Rezeptor rezirkuliert anschließend meist zurück zur Zelloberfläche.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Endozytose","Clathrin","LDL","Transferrin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Apoptose vs. Nekrose",
    difficulty: "Mittel",
    questionText:
      "Welches Merkmal unterscheidet den physiologischen Zelltod durch Apoptose grundlegend vom traumatischen Zelltod durch Nekrose?",
    options: [
          "Bei der Apoptose platzt die Zellmembran sofort und setzt zytosolische Enzyme frei, die eine Entzündung hervorrufen.",
          "Die Apoptose ist ein programmierter, energieabhängiger Prozess mit zellulärer Schrumpfung, Chromatinkondensation und Fragmentierung in intakte Membrankörperchen ohne Auslösung einer Entzündungsreaktion.",
          "Die Nekrose verbraucht wesentlich mehr ATP als die Apoptose.",
          "Die Apoptose wird ausschließlich durch äußere mechanische Gewebsverletzungen ausgelöst.",
          "Bei der Nekrose bleibt die Plasmamembran vollständig intakt, während der Zellkern intakt exportiert wird."
    ],
    correctAnswer: 1,
    explanation:
      "Apoptose (\"programmierter Zelltod\") ist ein geregelter, ATP-verbrauchender Vorgang, der über Caspasen-Kaskaden gesteuert wird. Die Zelle schrumpft, die DNA wird geordnet fragmentiert, und es bilden sich membranumschlossene Apoptosekörperchen, die von Makrophagen phagozytiert werden, ohne eine Entzündung zu provozieren. Bei der Nekrose führt Energieverlust zum unkontrollierten Anschwellen und Platzen der Zelle mit Freisetzung von Zellinhalt und lokaler Entzündung.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose","Nekrose","Zelltod"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Spindelapparat & Mikrotubuli-Klassen",
    difficulty: "Mittel",
    questionText:
      "Welche drei Klassen von Mikrotubuli bilden gemeinsam den mitotischen Spindelapparat eukaryotischer Zellen aus?",
    options: [
          "Basale, apikale und intermediäre Mikrotubuli",
          "Ziliäre, flagelläre und laminale Mikrotubuli",
          "Zytoplasmatische, nukleäre und mitochondriale Mikrotubuli",
          "Aktin-, Myosin- und Spektrin-Mikrotubuli",
          "Kinetochor-Mikrotubuli, interpolare (polare) Mikrotubuli und astrale Mikrotubuli"
    ],
    correctAnswer: 4,
    explanation:
      "Der Spindelapparat besteht aus drei funktionellen Mikrotubuli-Typen, die alle vom Zentrosom ausgehen: (1) Kinetochor-Mikrotubuli binden an die Kinetochore der Chromosomen und ziehen die Chromatiden polwärts. (2) Interpolare (polare) Mikrotubuli überlappen in der Spindelmitte und schieben über Motorproteine die Spindelpole auseinander. (3) Astrale Mikrotubuli strahlen sternförmig zur Zellrinde aus und verankern/orientieren die Spindel in der Zelle.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Spindelapparat","Mikrotubuli","Kinetochor","Mitose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Peroxisomen & Katalase",
    difficulty: "Leicht",
    questionText:
      "Welche wesentliche biochemische Reaktion läuft in den Peroxisomen menschlicher Zellen ab?",
    options: [
          "Die Synthese von ribosomalen Untereinheiten",
          "Die Entgiftung des beim oxidativen Fettsäureabbau entstehenden Wasserstoffperoxids (H₂O₂) zu Wasser und Sauerstoff durch das Enzym Katalase",
          "Die Spaltung von Glykogen zu Glukose-1-phosphat",
          "Die anaerobe Milchsäuregärung",
          "Die Bildung von Aktinfilamenten"
    ],
    correctAnswer: 1,
    explanation:
      "Peroxisomen (Microbodies) enthalten Oxidasen, die bei der β-Oxidation überlangkettiger Fettsäuren (VLCFA) molekularen Sauerstoff verbrauchen und toxisches Wasserstoffperoxid (H₂O₂) erzeugen. Das peroxisomale Schlüsselenzym Katalase zersetzt dieses aggressive Stoffwechselnebenprodukt unmittelbar in der Reaktion 2 H₂O₂ → 2 H₂O + O₂ und schützt die Zelle vor oxidativem Stress.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Peroxisomen","Katalase","H2O2","Fettsäureabbau"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Nukleolus & Ribosomen-Biogenese",
    difficulty: "Mittel",
    questionText:
      "Welche zentrale Aufgabe erfüllt der Nukleolus (Kernkörperchen) im Zellkern eukaryotischer Zellen?",
    options: [
          "Die Transkription von ribosomalen RNA-Genen (rRNA) und der Zusammenbau ribosomaler Vorläufer-Untereinheiten",
          "Die Synthese von Phospholipiden für die Plasmamembran",
          "Die Replikation und Translation von mitochondrialen Genen",
          "Der enzymatische Abbau von zellulären Proteinen mittels Ubiquitin",
          "Die Synthese von Steroidhormonen aus Cholesterin"
    ],
    correctAnswer: 0,
    explanation:
      "Der Nukleolus ist ein nicht-membranumgrenztes Kompartiment des Zellkerns, das sich um die Nukleolus-Organisator-Regionen (NOR) bildet. Hier werden 28S-, 18S- und 5,8S-rRNA durch die RNA-Polymerase I transkribiert, prozessiert und zusammen mit importierten ribosomalen Proteinen zu den Prä-Untereinheiten (40S und 60S) des 80S-Ribosoms zusammengebaut.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Nukleolus","rRNA","Ribosomen","Zellkern"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Schlussleistenkomplex (Junctional Complex)",
    difficulty: "Leicht",
    questionText:
      "Wie ist der typische polarisierte Zellkontaktkomplex (Schlussleistenkomplex / Junctional Complex) an der apikolateralen Membran von Epithelzellen von luminal nach basal aufgebaut?",
    options: [
          "Desmosom → Gap Junction → Tight Junction",
          "Hemidesmosom → Fokalkontakt → Zentrosom",
          "Gap Junction → Zonula adhaerens → Hemidesmosom",
          "Tight Junction (Zonula occludens) → Adhärenzkontakt (Zonula adhaerens) → Desmosom (Macula adhaerens)",
          "Fokalkontakt → Tight Junction → Desmoglein"
    ],
    correctAnswer: 3,
    explanation:
      "Der Schlussleistenkomplex verbindet Epithelzellen in streng festgelegter apiko-basaler Reihenfolge: (1) Am weitesten apikal liegt die Tight Junction (Zonula occludens) als Diffusionsbarriere. (2) Darunter folgt die Zonula adhaerens (Adhärenzkontakt), die über Cadherine mit dem zytosolischen Aktinfilamentgürtel verbunden ist. (3) Weiter basal liegen punktförmige Desmosomen (Maculae adhaerentes), die mechanische Zugkräfte auf das Zytokeratinskelett übertragen.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellkontakte","Tight Junctions","Desmosomen","Epithel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Zellzyklus-Kontrollpunkte & p53/p21",
    difficulty: "Schwer",
    questionText:
      "Was geschieht am G₁/S-Kontrollpunkt des Zellzyklus, wenn eine Zelle schwere, nicht reparierte DNA-Schäden aufweist?",
    options: [
          "Die Zelle teilt sich sofort mitotisch, um die Schäden auf Tochterzellen zu verteilen.",
          "Die Kernhülle löst sich sofort auf und die Chromosomen wandern ins Zytosol.",
          "Das Tumorsuppressorprotein p53 akkumuliert und induziert den CDK-Inhibitor p21, wodurch Cyclin-CDK-Komplexe gehemmt werden und der Zellzyklus zur Reparatur bzw. Apoptose-Einleitung arretiert wird.",
          "Die Na⁺/K⁺-ATPase wird dauerhaft gehemmt, um das Membranpotenzial aufzuheben.",
          "Die Zelle synthetisiert sofort vermehrt Kinesin-Motoren."
    ],
    correctAnswer: 2,
    explanation:
      "Bei DNA-Schäden wird der Tumorsuppressor p53 phosphoryliert und vor proteasomalem Abbau geschützt. Als Transkriptionsfaktor induziert p53 die Expression von p21 (CDKN1A). Das p21-Protein hemmt die G₁/S-Kinasen (Cyclin E-CDK2 und Cyclin D-CDK4/6), wodurch das Retinoblastom-Protein (pRb) unphosphoryliert bleibt und der Übergang in die S-Phase blockiert wird (Zellzyklusarrest). Sind die Schäden irreparabel, leitet p53 über Bax/Puma die Apoptose ein.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Zellzyklus","p53","p21","Tumorsuppressor","DNA-Reparatur"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Cholesterin & Membranfluidität",
    difficulty: "Mittel",
    questionText:
      "Welche Rolle spielt Cholesterin bei der Aufrechterhaltung der physiologischen Membranfluidität bei extremen Temperaturänderungen?",
    options: [
          "Es wandelt ungesättigte Fettsäuren bei Kälte in Nukleinsäuren um.",
          "Es bildet kovalente Peptidbindungen zwischen benachbarten Membranproteinen.",
          "Es verlässt bei Hitze die Membran und diffundiert vollständig in den Zellkern.",
          "Es wirkt als bidirektionaler Fluiditätspuffer: Bei hohen Temperaturen schränkt es die Bewegung der Phospholipide ein; bei niedrigen Temperaturen verhindert es deren zu dichte Packung und Kristallisation.",
          "Es schaltet den passiven Transport von Sauerstoff vollständig ab."
    ],
    correctAnswer: 3,
    explanation:
      "Cholesterin lagert sich mit seinem starren Sterangerüst zwischen die Fettsäureketten der Phospholipide ein. Es fungiert als Fluiditätspuffer: Bei hohen Temperaturen hemmt es durch sterische Hinderung die übermäßige Phospholipidbewegung (verhindert Membranverflüssigung); bei tiefen Temperaturen verhindert es das zu dichte Aneinanderlagern und Kristallisieren der Fettsäuren (verhindert das Erstarren der Membran).",
    tags: ["BMS","Biologie","Die menschliche Zelle","Biomembran","Cholesterin","Fluidität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Apoptose-Signalwege (Intrinsisch vs. Extrinsisch)",
    difficulty: "Schwer",
    questionText:
      "Welches Schlüsselereignis unterscheidet den intrinsischen vom extrinsischen Signalweg der Apoptose?",
    options: [
          "Der extrinsische Weg benötigt ATP; der intrinsische Weg läuft rein passiv ohne Energieaufwand ab.",
          "Der intrinsische Weg wird durch zellulären Stress oder DNA-Schäden ausgelöst und führt zur Freisetzung von Cytochrom c aus den Mitochondrien (Initiator-Caspase-9); der extrinsische Weg wird über Todesrezeptoren der Plasmamembran (z. B. Fas/CD95) aktiviert (Initiator-Caspase-8).",
          "Der intrinsische Weg führt immer zur Entzündung; der extrinsische Weg verläuft ohne Phagozytose.",
          "Nur der extrinsische Weg aktiviert letztlich Effektor-Caspasen wie Caspase-3.",
          "Der intrinsische Weg kommt nur bei Pflanzen vor; der extrinsische nur bei Tieren."
    ],
    correctAnswer: 1,
    explanation:
      "Der intrinsische (mitochondriale) Weg wird durch intrazelluläre Stresssignale (DNA-Schäden, Sauerstoffradikale) ausgelöst, führt zur Porenbildung in der äußeren Mitochondrienmembran (über Bax/Bak), Cytochrom-c-Freisetzung und Aktivierung von Caspase-9 im Apoptosom. Der extrinsische Weg wird durch Bindung extrazellulärer Liganden (z. B. FasL, TNF-α) an Todesrezeptoren der Plasmamembran initiiert und aktiviert direkt Caspase-8 über den DISC-Komplex. Beide Wege münden in die Aktivierung der Effektor-Caspase-3.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Apoptose","Caspasen","Cytochrom c","Fas-Rezeptor"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Mikrovilli vs. Kinozilien",
    difficulty: "Schwer",
    questionText:
      "Welcher grundlegende Unterschied besteht im strukturellen Aufbau und in der Funktion zwischen Mikrovilli und Kinozilien?",
    options: [
          "Mikrovilli bestehen im Kern aus parallelen Aktinfilamenten und vergrößern passiv die Resorptionsoberfläche; Kinozilien besitzen ein Gerüst aus Mikrotubuli im 9×2+2-Muster mit Dyneinarmen und schlagen aktiv unter ATP-Verbrauch.",
          "Mikrovilli schlagen aktiv zur Schleimbeförderung; Kinozilien dienen rein der passiven Ionenaufnahme.",
          "Mikrovilli enthalten Mikrotubuli; Kinozilien bestehen ausschließlich aus Intermediärfilamenten.",
          "Mikrovilli sind nur auf Neuronen zu finden; Kinozilien ausschließlich auf Erythrozyten.",
          "Beide Strukturen sind morphologisch vollkommen identisch und unterscheiden sich nur im jeweiligen Zelltyp."
    ],
    correctAnswer: 0,
    explanation:
      "Mikrovilli sind fingerförmige, unbewegliche Membranausstülpungen (z. B. Bürstensaum im Darm und proximalen Nierentubulus), deren Kern aus parallelen Aktinfilamenten besteht; ihre Funktion ist die Vergrößerung der Oberfläche für Resorptionsprozesse. Kinozilien (Flimmerhaare, z. B. im respiratorischen Flimmerepithel oder Eileiter) besitzen ein Axonem aus Mikrotubuli (9×2+2-Anordnung); über das Motorprotein Dynein schlagen sie aktiv unter ATP-Hydrolyse und transportieren Flüssigkeits- bzw. Schleimfilme.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Mikrovilli","Kinozilien","Aktin","Mikrotubuli","Dynein"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Signalhypothese & rER-Translokation",
    difficulty: "Schwer",
    questionText:
      "Was steuert nach der Signalhypothese die kotranslationale Translokation eines sekretorischen Proteins in das Lumen des rauen endoplasmatischen Retikulums (rER)?",
    options: [
          "Die direkte Diffusion des fertigen Proteins durch Kernporen",
          "Die Bindung von Histonen an das 40S-Ribosom im Zellkern",
          "Eine hydrophobe N-terminale Signalsequenz am entstehenden Peptid, die durch das Signal Recognition Particle (SRP) gebunden und zum SRP-Rezeptor der ER-Membran geleitet wird",
          "Die passive Osmose von Aminosäuren durch Aquaporine",
          "Die Zersetzung des Proteins durch peroxisomale Katalase"
    ],
    correctAnswer: 2,
    explanation:
      "Proteine, die für Membranen, Lysosomen oder den Export bestimmt sind, tragen eine N-terminale Signalsequenz. Sobald diese aus dem Ribosom austritt, bindet das zytosolische Signal Recognition Particle (SRP) daran und pausiert die Translation vorübergehend. Der SRP-Ribosomen-Komplex dockt an den SRP-Rezeptor der rER-Membran an. Das Ribosom wird auf den Proteinkanal (Sec61/Translocon) übertragen, SRP dissoziiert ab, und die Translation wird unter gleichzeitigem Einschleusen der Peptidkette ins ER-Lumen fortgesetzt (kotranslationale Translokation).",
    tags: ["BMS","Biologie","Die menschliche Zelle","rER","Signalhypothese","SRP","Translokation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-01-set5-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-01-zelle",
    topic: "Gap Junctions & Nexus",
    difficulty: "Mittel",
    questionText:
      "Welche Art von Zellkontakt vermittelt die direkte metabolische und elektrische Kommunikation zwischen dem Zytoplasma zweier benachbarter Säugetierzellen über regulierbare wässrige Kanäle?",
    options: [
          "Tight Junctions (Zonula occludens)",
          "Desmosomen (Macula adhaerens)",
          "Hemidesmosomen",
          "Fokalkontakte",
          "Gap Junctions (Nexus)"
    ],
    correctAnswer: 4,
    explanation:
      "Gap Junctions (Nexus) bestehen aus Kanalpaaren (zwei Connexonen aus jeweils sechs Connexin-Proteinen), die die Membranen benachbarter Zellen überbrücken und eine kontinuierliche wässrige Pore bilden. Sie erlauben den freien Durchtritt von anorganischen Ionen und kleinen Molekülen (bis ca. 1 kDa, wie cAMP, IP₃, Ca²⁺, Glukose), was für die elektrische Reizweiterleitung (z. B. Glanzstreifen im Myokard) und metabolische Kopplung unerlässlich ist.",
    tags: ["BMS","Biologie","Die menschliche Zelle","Gap Junctions","Nexus","Connexin","Zellkontakte"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },

  /* =================================================================
     02. DER MENSCHLICHE KÖRPER (bio-02-koerper)
     ================================================================= */
  {
    id: "bio-02-set1-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Gewebe — Grundtypen und Lokalisation des Epithelgewebes",
    difficulty: "Leicht",
    questionText:
      "Welche der vier Hauptgewebearten bildet die äußere Schicht der Haut und die Innenauskleidung von Hohlorganen?",
    options: [
          "Epithelgewebe",
          "Bindegewebe",
          "Muskelgewebe",
          "Nervengewebe",
          "Knochengewebe"
    ],
    correctAnswer: 0,
    explanation:
      "Epithelgewebe bedeckt Körperoberflächen und kleidet Hohlorgane aus. Bindegewebe stützt und verbindet, Muskelgewebe ermöglicht Bewegung, Nervengewebe leitet Reize und Knochengewebe ist eine Spezialisierung des Bindegewebes.",
    tags: ["BMS","Biologie","Der menschliche Körper","Gewebe","Epithelgewebe","Anatomie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Gewebe — Strukturelle Merkmale des Epithelgewebes",
    difficulty: "Mittel",
    questionText:
      "Ein Histologe untersucht Gewebe, das aus dicht gepackten Zellen mit wenig extrazellulärer Matrix besteht und eine freie Oberfläche aufweist. Welches Gewebe liegt vor?",
    options: [
          "Bindegewebe",
          "Epithelgewebe",
          "Knorpelgewebe",
          "Blut",
          "Fettgewebe"
    ],
    correctAnswer: 1,
    explanation:
      "Epithelgewebe zeichnet sich durch dicht gepackte Zellen mit minimaler extrazellulärer Matrix und einer freien Oberfläche aus. Bindegewebe, Knorpel, Blut und Fettgewebe haben alle eine ausgeprägte extrazelluläre Matrix.",
    tags: ["BMS","Biologie","Der menschliche Körper","Histologie","Epithelgewebe","Matrix"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem — Gasaustausch in den Alveolen",
    difficulty: "Leicht",
    questionText:
      "Durch welche Strukturen erfolgt der Gasaustausch zwischen Luft und Blut in der Lunge?",
    options: [
          "Bronchien",
          "Bronchiolen",
          "Alveolen",
          "Luftröhre",
          "Kehlkopf"
    ],
    correctAnswer: 2,
    explanation:
      "Der Gasaustausch findet in den Alveolen (Lungenbläschen) statt, deren dünne Wände Sauerstoff und Kohlendioxid passieren lassen. Bronchien und Bronchiolen leiten Luft, Luftröhre und Kehlkopf dienen der Luftleitung und Stimmbildung.",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Alveolen","Gasaustausch"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem — Zwerchfell als Hauptatemmuskel",
    difficulty: "Leicht",
    questionText:
      "Welcher Muskel ist der wichtigste Hauptatemmuskel beim Menschen und trennt die Brust- von der Bauchhöhle?",
    options: [
          "Musculus pectoralis major",
          "Zwerchfell (Diaphragma)",
          "Musculus rectus abdominis",
          "Äußere Zwischenrippenmuskeln (Mm. intercostales externi)",
          "Musculus trapezius"
    ],
    correctAnswer: 1,
    explanation:
      "Das Zwerchfell (Diaphragma) ist der wichtigste Atemmuskel des Menschen. Bei seiner Kontraktion senkt sich die Zwerchfellkuppel, wodurch sich das Thoraxvolumen vergrößert und Luft in die Lungen einströmt (Inspiration). Zudem trennt es die Brusthöhle anatomisch von der Bauchhöhle.",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Zwerchfell","Atemmuskeln","Anatomie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System — Hypophyse (Lage und Verbindung)",
    difficulty: "Leicht",
    questionText:
      "Welche endokrine Drüse liegt in der Sella turcica des Keilbeins an der Schädelbasis und ist über den Hypophysenstiel direkt mit dem Hypothalamus verbunden?",
    options: [
          "Schilddrüse (Glandula thyroidea)",
          "Nebenschilddrüse (Glandula parathyroidea)",
          "Nebenniere (Glandula suprarenalis)",
          "Bauchspeicheldrüse (Pankreas)",
          "Hypophyse (Glandula pituitaria / Hirnanhangsdrüse)"
    ],
    correctAnswer: 4,
    explanation:
      "Die Hypophyse (Hirnanhangsdrüse) liegt in der knöchernen Sella turcica (Türkensattel) des Os sphenoidale (Keilbein) an der Schädelbasis. Sie ist über das Infundibulum (den Hypophysenstiel) anatomisch und funktionell mit dem Hypothalamus verbunden und steuert zahlreiche periphere Hormondrüsen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Hormonsystem","Hypophyse","Endokrinologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System — Insulinproduktion",
    difficulty: "Mittel",
    questionText:
      "Ein Patient mit Diabetes mellitus Typ 2 zeigt eine Insulinresistenz. Welche Zellen sind im menschlichen Körper primär für die Synthese und Sekretion von Insulin verantwortlich?",
    options: [
          "β-Zellen der Langerhans-Inseln",
          "α-Zellen der Langerhans-Inseln",
          "Azinuszellen des exokrinen Pankreas",
          "C-Zellen (parafollikuläre Zellen) der Schilddrüse",
          "Glomeruläre Mesangiumzellen der Niere"
    ],
    correctAnswer: 0,
    explanation:
      "Die β-Zellen der Langerhans-Inseln im Pankreas produzieren Insulin. α-Zellen produzieren Glukagon, Azinuszellen Verdauungsenzyme, C-Zellen Calcitonin und juxtaglomeruläre Zellen Renin.",
    tags: ["BMS","Biologie","Der menschliche Körper","Pankreas","Insulin","Hormone","Diabetes"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem — Spermatogenese",
    difficulty: "Leicht",
    questionText:
      "In welchem Organ erfolgt die kontinuierliche Bildung reifer Samenzellen (Spermatogenese) beim erwachsenen Mann?",
    options: [
          "Nebenhoden",
          "Hoden (Testes)",
          "Samenleiter (Ductus deferens)",
          "Vorsteherdrüse (Prostata)",
          "Bläschendrüse (Glandula vesiculosa)"
    ],
    correctAnswer: 1,
    explanation:
      "Die Spermatogenese findet in den Hodenkanälchen (Tubuli seminiferi) des Hodens statt. Der Nebenhoden dient der funktionellen Ausreifung und Speicherung der Spermien, Samenleiter dem Transport, Prostata und Bläschendrüsen bilden das Seminalplasma.",
    tags: ["BMS","Biologie","Der menschliche Körper","Fortpflanzung","Hoden","Spermatogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem — Corpus luteum & Progesteron",
    difficulty: "Mittel",
    questionText:
      "Welche endokrine Struktur entsteht nach dem Eisprung (Ovulation) aus den verbleibenden Zellen des rupturierten Follikels und produziert vorwiegend Progesteron?",
    options: [
          "Corpus albicans",
          "Primordialfollikel",
          "Corpus luteum (Gelbkörper)",
          "Graaf-Follikel",
          "Tuba uterina"
    ],
    correctAnswer: 2,
    explanation:
      "Nach dem Eisprung wandeln sich Granulosa- und Thekazellen des rupturierten Follikels unter LH-Einfluss in das Corpus luteum (Gelbkörper) um, das große Mengen Progesteron zur Vorbereitung des Endometriums auf die Einnistung bildet.",
    tags: ["BMS","Biologie","Der menschliche Körper","Zyklus","Corpus luteum","Progesteron","Ovar"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem — Nephron",
    difficulty: "Leicht",
    questionText:
      "Welches ist die kleinste mikroskopische funktionelle Baueinheit der menschlichen Niere zur Harnbereitung?",
    options: [
          "Glomerulus",
          "Nierenbecken",
          "Sammelrohr",
          "Nephron",
          "Nierenkelch"
    ],
    correctAnswer: 3,
    explanation:
      "Das Nephron ist die funktionelle Grundeinheit der Niere (ca. 1 Million pro Niere) und setzt sich aus dem Nierenkörperchen (Glomerulus + Bowman-Kapsel) und dem Tubulussystem (proximaler Tubulus, Henle-Schleife, distaler Tubulus) zusammen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Nephron","Harnsystem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem — Proximaler Tubulus & Rückresorption",
    difficulty: "Mittel",
    questionText:
      "In welchem Abschnitt des Nephrons wird der größte Teil des filtrierten Wassers und der gelösten Nährstoffe rückresorbiert?",
    options: [
          "Bowman-Kapsel",
          "Sammelrohr",
          "Henle-Schleife",
          "Distaler Tubulus",
          "Proximaler Tubulus"
    ],
    correctAnswer: 4,
    explanation:
      "Im proximalen Tubulus (Hauptstück) der Niere erfolgt die Rückresorption des Großteils des filtrierten Wassers sowie lebenswichtiger Nährstoffe wie Glukose, Aminosäuren und Elektrolyte aus dem Primärharn zurück in das Blut.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Tubulus","Resorption","Physiologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Linke Herzkammer",
    difficulty: "Leicht",
    questionText:
      "Welche Herzhöhle pumpt das mit Sauerstoff angereicherte Blut während der Systole mit hohem Druck in die Aorta und damit in den großen Körperkreislauf?",
    options: [
          "Linke Herzkammer (Ventriculus sinister)",
          "Rechte Herzkammer (Ventriculus dexter)",
          "Linker Vorhof (Atrium sinistrum)",
          "Rechter Vorhof (Atrium dextrum)",
          "Sinus coronarius"
    ],
    correctAnswer: 0,
    explanation:
      "Die linke Herzkammer besitzt die stärkste Myokardwand und wirft das sauerstoffreiche Blut über die Aortenklappe in die Aorta aus. Der rechte Ventrikel pumpt sauerstoffarmes Blut in den Lungenkreislauf.",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Kreislauf","Anatomie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Lungenarterien",
    difficulty: "Mittel",
    questionText:
      "Welche Blutgefäße transportieren sauerstoffarmes Blut vom Herzen weg zu den Lungen (Truncus pulmonalis / Lungenstrombahn)?",
    options: [
          "Aorta",
          "Lungenarterien (Arteriae pulmonales)",
          "Lungenvenen (Venae pulmonales)",
          "Obere Hohlvene (Vena cava superior)",
          "Herzkranzgefäße (Koronararterien)"
    ],
    correctAnswer: 1,
    explanation:
      "Arterien sind definitionsgemäß Gefäße, die Blut vom Herzen wegführen. Im Lungenkreislauf führen die Lungenarterien sauerstoffarmes Blut vom rechten Herzen zur Lunge, während die Lungenvenen sauerstoffreiches Blut zum linken Vorhof zurückbringen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Gefäße","Lungenkreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Thrombozyten & Blutstillung",
    difficulty: "Leicht",
    questionText:
      "Welche zellulären Blutbestandteile spielen eine zentrale Rolle bei der Blutstillung und Blutgerinnung?",
    options: [
          "Erythrozyten (rote Blutkörperchen)",
          "Leukozyten (weiße Blutkörperchen)",
          "Thrombozyten (Blutplättchen)",
          "Lymphozyten",
          "Monozyten"
    ],
    correctAnswer: 2,
    explanation:
      "Thrombozyten (Blutplättchen) sind kernlose Blutzellfragmente, die sich bei Gefäßverletzungen zusammenlagern und anheften, um die Wunde schnell abzudichten (primäre Blutstillung).",
    tags: ["BMS","Biologie","Der menschliche Körper","Blut","Thrombozyten","Gerinnung","Hämostase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem — Angeborene Immunabwehr",
    difficulty: "Leicht",
    questionText:
      "Welche Abwehrmechanismen gehören zur angeborenen (unspezifischen) Immunabwehr des menschlichen Körpers?",
    options: [
          "Monoklonale Antikörper und Plasmazellen",
          "T-Helferzellen und zytotoxische T-Zellen",
          "B-Gedächtniszellen",
          "Physikalische Epithelbarrieren, saurer Magensaft, Makrophagen und neutrophile Granulozyten",
          "Affinitätsgereifte Immunglobuline der Klasse IgE"
    ],
    correctAnswer: 3,
    explanation:
      "Die angeborene Immunität wirkt sofort und antigenspezifitätsunabhängig. Sie umfasst mechanische/chemische Barrieren (Haut, Schleim, Magensäure, Lysozym), das Komplementsystem sowie phagozytierende Zellen (Granulozyten, Makrophagen, dendritische Zellen) und NK-Zellen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","Angeborene Abwehr","Phagozyten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem — Antikörperproduktion durch Plasmazellen",
    difficulty: "Leicht",
    questionText:
      "Welche Zellen des Immunsystems sind primär für die Bildung und Sekretion großer Mengen spezifischer Antikörper (Immunglobuline) verantwortlich?",
    options: [
          "Zytotoxische T-Zellen (T-Killerzellen)",
          "Plasmazellen (differenzierte B-Lymphozyten)",
          "Erythrozyten",
          "Neutrophile Granulozyten",
          "Thrombozyten"
    ],
    correctAnswer: 1,
    explanation:
      "Plasmazellen sind die Effektorzellen der humoralen Immunität, die aus aktivierten B-Lymphozyten hervorgehen. Sie sind morphologisch durch ein stark ausgeprägtes raues ER gekennzeichnet und sezernieren bis zu mehreren Tausend Antikörpermoleküle pro Sekunde in das Blut.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","Antikörper","Plasmazellen","B-Lymphozyten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Lymphatisches System — Lymphknotenfunktion",
    difficulty: "Leicht",
    questionText:
      "Welche primäre biologische Funktion erfüllen die Lymphknoten als sekundäre lymphatische Organe im Verlauf der Lymphbahnen?",
    options: [
          "Biologische Filtration der Lymphe von Pathogenen und Zelltrümmern sowie Aktivierungsort für B- und T-Lymphozyten",
          "Hauptbildungsort aller roten Blutkörperchen im Erwachsenenalter",
          "Exokrine Sekretion von Verdauungsenzymen ins Pfortaderblut",
          "Speicherung von Glykogen zur Blutzuckerregulation",
          "Ausschließliche Bildung von Schilddrüsenhormonen"
    ],
    correctAnswer: 0,
    explanation:
      "Lymphknoten wirken als biologische Filterstationen für die Lymphe eines bestimmten Gewebeareals. Sie fangen Krankheitserreger ab und bieten die ideale Mikroarchitektur zur Antigenpräsentation und klonalen Selektion von T- und B-Lymphozyten.",
    tags: ["BMS","Biologie","Der menschliche Körper","Lymphsystem","Lymphknoten","Immunologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Dendriten",
    difficulty: "Leicht",
    questionText:
      "Welcher strukturelle Bestandteil eines multipolaren Neurons dient primär dem Empfang und der Weiterleitung von afferenten synaptischen Signalen zum Zellkörper (Soma)?",
    options: [
          "Axon (Neurit)",
          "Dendriten",
          "Myelinscheide",
          "Ranvier-Schnürring",
          "Synaptisches Endknöpfchen"
    ],
    correctAnswer: 1,
    explanation:
      "Dendriten sind baumartig verzweigte Fortsätze des Neurons, die synaptische Eingänge von anderen Neuronen aufnehmen und als abgestufte postsynaptische Potenziale elektrotonisch zum Soma und Axonhügel weiterleiten.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Neuron","Dendrit","Anatomie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Chemische Synapsen",
    difficulty: "Mittel",
    questionText:
      "Über welchen Mechanismus erfolgt die Signalübertragung an einer klassischen chemischen Synapse zwischen zwei Neuronen?",
    options: [
          "Über direkte Ionenpassage durch offene Gap-Junction-Kanäle",
          "Durch ungerichtete passive Diffusion von Zytoplasma durch Zellporen",
          "Durch Ca²⁺-abhängige Exozytose von Neurotransmittern in den synaptischen Spalt und Bindung an postsynaptische Rezeptoren",
          "Durch kontinuierliche Ausbreitung des Aktionspotenzials entlang der Markscheide ohne Transmitter",
          "Durch aktiven Rücktransport von ATP in die Nachbarzelle"
    ],
    correctAnswer: 2,
    explanation:
      "Ein eintreffendes Aktionspotenzial öffnet spannungsgesteuerte Ca²⁺-Kanäle in der Präsynapse. Der Ca²⁺-Einstrom triggert die Exozytose von synaptischen Vesikeln. Die Neurotransmitter diffundieren über den synaptischen Spalt und binden an ligandenaktivierte Rezeptoren der Postsynapse.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Synapse","Neurotransmitter","Physiologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — ZNS vs. PNS",
    difficulty: "Mittel",
    questionText:
      "Welche anatomische Struktur gehört anatomisch und funktionell zum zentralen Nervensystem (ZNS)?",
    options: [
          "Nervus vagus (X. Hirnnerv)",
          "Spinalnervenwurzel",
          "Grenzstrangganglion (Truncus sympathicus)",
          "Rückenmark (Medulla spinalis)",
          "Meissner-Plexus in der Darmwand"
    ],
    correctAnswer: 3,
    explanation:
      "Das zentrale Nervensystem (ZNS) besteht ausschließlich aus Gehirn (Encephalon) und Rückenmark (Medulla spinalis). Hirnnerven, Spinalnerven, vegetative Ganglien und intramurale Geflechte gehören zum peripheren Nervensystem (PNS).",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","ZNS","Rückenmark","PNS"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane — Auge: Akkommodation der Linse",
    difficulty: "Leicht",
    questionText:
      "Welche transparente Struktur des menschlichen Auges kann ihre Form und Krümmung aktiv verändern (Akkommodation), um die Brechkraft dynamisch für das Nah- und Fernsehen anzupassen?",
    options: [
          "Hornhaut (Cornea)",
          "Iris (Regenbogenhaut)",
          "Glaskörper (Corpus vitreum)",
          "Lederhaut (Sklera)",
          "Augenlinse (Lens crystallina)"
    ],
    correctAnswer: 4,
    explanation:
      "Die Augenlinse ist über Zonulafasern am Ziliarkörper aufgehängt. Durch Kontraktion des Ziliarmuskels entspannen sich die Fasern, wodurch sich die elastische Linse abkugelt und ihre Brechkraft für die Nahakkommodation erhöht. Die Hornhaut besitzt zwar die stärkste statische Brechkraft, kann ihre Form jedoch nicht aktiv verändern.",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Auge","Linse","Akkommodation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane — Ohr: Cochlea",
    difficulty: "Mittel",
    questionText:
      "In welchem Teil des Innenohrs befinden sich die Sinneszellen (Haarzellen) für die Wahrnehmung von Schallwellen (Hören)?",
    options: [
          "Hörschnecke (Cochlea)",
          "Trommelfell (Membrana tympanica)",
          "Gehörknöchelchenkette (Hammer, Amboss, Steigbügel)",
          "Bogengänge (Ductus semicirculares)",
          "Paukenhöhle (Cavitas tympani)"
    ],
    correctAnswer: 0,
    explanation:
      "In der Hörschnecke (Cochlea) des Innenohrs befinden sich die Sinneshaarzellen, die mechanische Schallschwingungen der Flüssigkeit in elektrische Nervenimpulse umwandeln und über den Hörnerv an das Gehirn leiten.",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Ohr","Cochlea","Hören"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Skelettsystem — Osteoblasten",
    difficulty: "Leicht",
    questionText:
      "Welche spezialisierten Zellen sind im menschlichen Knochengewebe primär für die Synthese der organischen Knochenmatrix (Osteoid) und deren Mineralisation mit Hydroxylapatit verantwortlich?",
    options: [
          "Osteoklasten",
          "Osteoblasten",
          "Chondrozyten",
          "Fibrozyten",
          "Myoblasten"
    ],
    correctAnswer: 1,
    explanation:
      "Osteoblasten (Knochenbildner) sezernieren Kollagen Typ I und die Grundsubstanz des Knochens (Osteoid) und leiten die Mineralisierung ein. Nach dem Einmauern in die Matrix werden sie zu ruhenden Osteozyten. Osteoklasten sind vielkernige Fresszellen, die Knochensubstanz abbauen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Knochen","Osteoblasten","Skelett"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Skelettsystem und Bewegungsapparat — Sehnen als Muskel-Knochen-Verbindung",
    difficulty: "Leicht",
    questionText:
      "Welche bindegewebige Struktur verbindet einen Skelettmuskel fest mit einem Knochen und überträgt die Muskelkraft auf das Skelett?",
    options: [
          "Sehne (Tendo)",
          "Band (Ligamentum)",
          "Knorpel (Cartilago)",
          "Synovia (Gelenkschmiere)",
          "Schleimbeutel (Bursa synovialis)"
    ],
    correctAnswer: 0,
    explanation:
      "Sehnen (Tendines) bestehen aus straffem, parallelfaserigem Bindegewebe und verbinden Muskeln mit Knochen, um die entwickelte Kontraktionskraft mechanisch zu übertragen. Bänder (Ligamente) hingegen verbinden Knochen mit Knochen zur Gelenkstabilisierung.",
    tags: ["BMS","Biologie","Der menschliche Körper","Muskel","Sehne","Skelettsystem","Anatomie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem — Leber & Galle",
    difficulty: "Leicht",
    questionText:
      "In welchem Organ des Verdauungstrakts wird die Gallenflüssigkeit kontinuierlich produziert, die im Duodenum für die Emulgierung von Nahrungsfetten benötigt wird?",
    options: [
          "Gallenblase (Vesica biliaris)",
          "Bauchspeicheldrüse (Pankreas)",
          "Dünndarm (Duodenum)",
          "Leber (Hepar)",
          "Magen (Gaster)"
    ],
    correctAnswer: 3,
    explanation:
      "Die Leber (Hepatozyten) produziert täglich ca. 0,5–1 Liter Galle. Die Gallenblase dient lediglich als Speicher- und Konzentrierungsorgan für die Lebergalle, die bei fettiger Nahrungsaufnahme über den Ductus choledochus ins Duodenum abgegeben wird.",
    tags: ["BMS","Biologie","Der menschliche Körper","Leber","Galle","Verdauung","Fettverdauung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set1-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem — Speichelamylase",
    difficulty: "Mittel",
    questionText:
      "Welches Verdauungsenzym wird von den Speicheldrüsen in die Mundhöhle abgegeben und leitet dort bereits die enzymatische Spaltung pflanzlicher Stärke in kleinere Oligosaccharide ein?",
    options: [
          "Pepsin",
          "Pankreaslipase",
          "Trypsin",
          "Laktase",
          "α-Amylase (Ptyalin)"
    ],
    correctAnswer: 4,
    explanation:
      "Die Speichel-α-Amylase (Ptyalin), sezerniert v. a. von der Glandula parotidea, spaltet α-1,4-glykosidische Bindungen von Stärke und Glykogen in Maltose, Maltotriose und Dextrine. Pepsin spaltet Proteine im Magen, Trypsin im Dünndarm, und Laktase spaltet Milchzucker.",
    tags: ["BMS","Biologie","Der menschliche Körper","Verdauung","Enzyme","Amylase","Kohlenhydrate"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-02-set2-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Gewebe — Epithelgewebe: Struktur und Funktion",
    difficulty: "Mittel",
    questionText:
      "Warum besteht das Epithel der Lungenalveolen aus einer einzigen Zellschicht (einschichtiges Plattenepithel), während die äußere Haut von einem mehrschichtigen verhornten Plattenepithel bedeckt ist?",
    options: [
          "Das einschichtige Epithel ermöglicht einen schnellen Gasaustausch durch kurze Diffusionswege, während das mehrschichtige Epithel der Haut vor mechanischer Beanspruchung und Austrocknung schützt.",
          "Einschichtiges Epithel verhindert das Eindringen von Bakterien besser als mehrschichtiges Epithel.",
          "Mehrschichtiges Epithel kann keine Nährstoffe aufnehmen und kommt deshalb nur auf trockener Haut vor.",
          "Das Alveolarepithel muss ständig verhornen, um dem Blutdruck in den Lungenkapillaren standzuhalten.",
          "Einschichtiges Epithel besitzt im Gegensatz zu mehrschichtigem Epithel keine Zellkerne."
    ],
    correctAnswer: 0,
    explanation:
      "Das extrem dünne einschichtige Plattenepithel der Alveolen minimiert die Wegstrecke für die Diffusion von Sauerstoff und Kohlendioxid zwischen Atemluft und Blut. Das mehrschichtige verhornte Plattenepithel der Haut hingegen schützt den Körper durch seine vielen Zelllagen und die abgestorbene Hornschicht vor Abrieb, Krankheitserregern und Wasserverlust.",
    tags: ["BMS","Biologie","Der menschliche Körper","Gewebe","Epithel","Alveolen","Haut"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Muskelgewebe — Herzmuskulatur vs. Skelettmuskulatur",
    difficulty: "Mittel",
    questionText:
      "Welche Eigenschaft der Herzmuskulatur unterscheidet sie von der Skelettmuskulatur und ermöglicht eine synchrone Kontraktion des Herzens?",
    options: [
          "Herzmuskelzellen sind über Glanzstreifen mit Gap Junctions elektrisch miteinander verbunden und werden unwillkürlich gesteuert.",
          "Herzmuskelzellen enthalten keine Aktin- und Myosinfilamente.",
          "Herzmuskelzellen besitzen jeweils mehrere Dutzend randständige Zellkerne und ermüden sehr schnell.",
          "Herzmuskelzellen werden ausschließlich durch willkürliche Nervenimpulse des Großhirns aktiviert.",
          "Herzmuskelgewebe besitzt im Gegensatz zur Skelettmuskulatur keine Querstreifung."
    ],
    correctAnswer: 0,
    explanation:
      "Herzmuskelzellen sind einkernige, quergestreifte Zellen, die an ihren Enden über Glanzstreifen (Disci intercalares) miteinander verknüpft sind. Über sogenannte Gap Junctions (Porenkanäle) können Ionen ungehindert von Zelle zu Zelle fließen, sodass sich die Erregung gleichmäßig über das gesamte Arbeitsmyokard ausbreitet.",
    tags: ["BMS","Biologie","Der menschliche Körper","Muskel","Herzmuskel","Glanzstreifen","Gap Junctions"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem — Alveolen & Surfactant",
    difficulty: "Mittel",
    questionText:
      "Welche wesentliche Aufgabe erfüllt der Surfactant in den Lungenbläschen (Alveolen)?",
    options: [
          "Er transportiert Sauerstoff direkt in das Hämoglobin der roten Blutkörperchen.",
          "Er setzt die Oberflächenspannung in den Alveolen herab und verhindert so ihr Zusammenfallen (Kollabieren) beim Ausatmen.",
          "Er dient als Enzym zur Spaltung von Kohlendioxid in Kohlenstoff und Sauerstoff.",
          "Er befeuchtet die Luftröhre, um Staubpartikel durch Flimmerhärchen nach oben zu transportieren.",
          "Er erhöht die Oberflächenspannung, um das Einströmen von Blut in die Lunge zu verhindern."
    ],
    correctAnswer: 1,
    explanation:
      "Der Flüssigkeitsfilm auf den Lungenbläschen erzeugt eine Oberflächenspannung, die dazu neigt, die Alveolen zusammenzuziehen. Der von speziellen Lungenzellen (Typ-II-Pneumozyten) gebildete Surfactant senkt diese Oberflächenspannung herab, erleichtert die Entfaltung der Lunge und verhindert ein Kollabieren der Alveolen am Ende der Ausatmung.",
    tags: ["BMS","Biologie","Der menschliche Körper","Lunge","Surfactant","Atmung","Alveolen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem — Atemmechanik der Inspiration",
    difficulty: "Leicht",
    questionText:
      "Welcher Vorgang führt beim gesunden Menschen zur Einatmung (Inspiration) in Ruhe?",
    options: [
          "Das Zwerchfell erschlafft und wölbt sich nach oben in den Brustraum.",
          "Das Zwerchfell zieht sich zusammen und senkt sich ab, wodurch sich der Brustraum vergrößert und Luft in die Lunge einströmt.",
          "Die Lungenmuskulatur zieht sich eigenständig zusammen und saugt die Luft aktiv an.",
          "Der Luftdruck in den Alveolen steigt über den atmosphärischen Außendruck an.",
          "Die Rippen senken sich ab, wodurch das Lungenvolumen komprimiert wird."
    ],
    correctAnswer: 1,
    explanation:
      "Die Einatmung ist ein aktiver Vorgang: Zieht sich das Zwerchfell als Hauptatemmuskel zusammen, flacht seine Kuppel ab und senkt sich nach unten. Dadurch vergrößert sich das Volumen des Brustkorbs. Da die Lunge über den Pleuraspalt der Bewegung folgt, entsteht in der Lunge ein Unterdruck gegenüber der Außenluft, sodass Frischluft einströmt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Inspiration","Zwerchfell","Atemmechanik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System — Peptidhormone vs. Steroidhormone",
    difficulty: "Mittel",
    questionText:
      "Warum binden Peptidhormone (wie z. B. Insulin) an Rezeptoren auf der Zelloberfläche, während Steroidhormone (wie z. B. Cortisol oder Östrogen) in das Zellinnere eindringen können?",
    options: [
          "Peptidhormone sind fettlöslich und werden von der Zellmembran abgestoßen.",
          "Steroidhormone sind lipophil (fettlöslich) und können die Lipiddoppelschicht der Zellmembran durchqueren; Peptidhormone sind hydrophil (wasserlöslich) und können die Membran nicht passieren.",
          "Peptidhormone sind zu klein, um im Zellinneren stabil zu bleiben.",
          "Steroidhormone binden ausschließlich an die Mitochondrienwand im Zytoplasma.",
          "Nur Steroidhormone besitzen eine elektrische Ladung, die sie durch Membranporen zieht."
    ],
    correctAnswer: 1,
    explanation:
      "Steroidhormone leiten sich vom fettlöslichen Cholesterin ab und können die hydrophobe Phospholipid-Doppelschicht der Zellmembran per einfacher Diffusion durchdringen, um an intrazelluläre Rezeptoren zu binden. Peptidhormone hingegen sind wasserlöslich (hydrophil), können die Lipidmembran nicht durchqueren und binden daher an membranständige Rezeptoren auf der Zellaußenseite.",
    tags: ["BMS","Biologie","Der menschliche Körper","Hormone","Peptidhormone","Steroidhormone","Zellmembran"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System — Blutzuckerregulation (Insulin & Glukagon)",
    difficulty: "Leicht",
    questionText:
      "Wie reagiert der menschliche Körper durch Hormone auf einen niedrigen Blutzuckerspiegel (Hypoglykämie)?",
    options: [
          "Die Bauchspeicheldrüse schüttet vermehrt Insulin aus, um Glukose in Fettgewebe umzuwandeln.",
          "Die Bauchspeicheldrüse schüttet Glukagon aus, welches in der Leber den Abbau von Glykogen zu Glukose stimuliert.",
          "Die Schilddrüse schüttet Thyroxin aus, um Glukose direkt im Magen freizusetzen.",
          "Die Nebennierenrinde stoppt die Bildung sämtlicher Hormone.",
          "Die Nieren scheiden vermehrt Glukose über den Urin aus."
    ],
    correctAnswer: 1,
    explanation:
      "Sinkt der Blutzuckerspiegel unter den Normalwert, schütten die α-Zellen der Bauchspeicheldrüse das Hormon Glukagon aus. Glukagon wirkt als Gegenspieler des Insulins und veranlasst vor allem die Leberzellen, gespeichertes Glykogen zu Glukose abzubauen und ins Blut abzugeben, wodurch der Blutzuckerspiegel wieder ansteigt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Pankreas","Glukagon","Blutzucker","Insulin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem — Hoden (Leydig- vs. Sertoli-Zellen)",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage über die Funktion der Zellen im männlichen Hoden ist richtig?",
    options: [
          "Leydig-Zellen produzieren das männliche Geschlechtshormon Testosteron, während Sertoli-Zellen die Samenzellen bei ihrer Reifung unterstützen und ernähren.",
          "Sertoli-Zellen produzieren Testosteron im Hodeninterstitium.",
          "Leydig-Zellen bilden die Samenzellen direkt durch wiederholte Meiose.",
          "In den Nebenhoden findet die gesamte Testosteronsynthese statt.",
          "Spermien reifen ausschließlich in der Prostata heran."
    ],
    correctAnswer: 0,
    explanation:
      "Im Hoden haben die Zelltypen klare Aufgaben: Die zwischen den Hodenkanälchen liegenden Leydig-Zwischenzellen synthetisieren unter dem Einfluss von LH das Androgen Testosteron. Die Sertoli-Zellen („Ammenzellen“) kleiden die Hodenkanälchen aus, bilden die Blut-Hoden-Schranke und steuern bzw. ernähren die heranreifenden Spermien unter dem Einfluss von FSH.",
    tags: ["BMS","Biologie","Der menschliche Körper","Hoden","Sertoli-Zellen","Leydig-Zellen","Testosteron"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem — Weiblicher Zyklus & Hormonregulation",
    difficulty: "Mittel",
    questionText:
      "Welches Hormon erreicht kurz vor der Mitte des weiblichen Menstruationszyklus einen steilen Spitzenwert (Peak) und löst dadurch direkt den Eisprung (Ovulation) aus?",
    options: [
          "Progesteron",
          "Luteinisierendes Hormon (LH)",
          "Humanes Choriongonadotropin (hCG)",
          "Prolaktin",
          "Oxytocin"
    ],
    correctAnswer: 1,
    explanation:
      "In der ersten Zyklushälfte (Follikelphase) reift unter FSH ein Follikel heran, der zunehmend Östrogene produziert. Hohe Östrogenspiegel führen kurz vor Zyklusmitte zu einer plötzlichen Freisetzung von LH (LH-Peak) aus der Hypophyse, was direkt den Eisprung (Ovulation) auslöst.",
    tags: ["BMS","Biologie","Der menschliche Körper","Zyklus","LH-Peak","Ovulation","Hormone"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem — Nephron (Funktion des proximalen Tubulus)",
    difficulty: "Mittel",
    questionText:
      "Welche Hauptfunktion hat der proximale Tubulus (Hauptstück) im Nephron der Niere?",
    options: [
          "Er filtert das Blutplasma und hält Blutzellen zurück.",
          "Er sammelt den fertigen Endharn und leitet ihn direkt in die Harnblase.",
          "Er resorbiert den überwiegenden Teil des Wassers sowie nützliche Stoffe wie Glukose und Aminosäuren aus dem Primärharn zurück ins Blut.",
          "Er ist vollständig undurchlässig für Wasser und Elektrolyte.",
          "Er produziert Aldosteron zur Steuerung des Blutdrucks."
    ],
    correctAnswer: 2,
    explanation:
      "Im proximalen Tubulus findet die Hauptmasse der Rückresorption statt: Rund zwei Drittel des filtrierten Wassers und der Salze sowie praktisch 100 % der lebenswichtigen Nährstoffe (Glukose, Aminosäuren) werden hier aus dem Primärharn wieder in das Blutgefäßsystem aufgenommen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Nephron","Proximaler Tubulus","Resorption"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem — Henle-Schleife und Harnbereitung",
    difficulty: "Mittel",
    questionText:
      "Welche Bedeutung hat die Henle-Schleife im Nephron für die Funktion der Niere?",
    options: [
          "Sie dient ausschließlich der Speicherung von konzentriertem Urin vor der Ausscheidung.",
          "Sie trennt die Rückresorption von Wasser und Ionen räumlich, um die Konzentrierung des Harns zu ermöglichen.",
          "Sie bildet Primärharn durch Filtration von roten Blutkörperchen.",
          "Sie baut Giftstoffe durch enzymatische Spaltung ab.",
          "Sie transportiert den fertigen Urin über die Harnröhre nach außen."
    ],
    correctAnswer: 1,
    explanation:
      "Die Henle-Schleife taucht tief in das Nierenmark ein. Durch die unterschiedliche Durchlässigkeit ihrer Schenkel (der absteigende Ast lässt Wasser durch, der aufsteigende Ast pumpt aktiv Salze ab und ist wasserdicht) baut sie einen osmotischen Gradienten auf, der für die spätere Wasserrückgewinnung und Harnkonzentrierung entscheidend ist.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Henle-Schleife","Harnkonzentrierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Erregungsleitungssystem (Sinus- vs. AV-Knoten)",
    difficulty: "Mittel",
    questionText:
      "Welche wichtige Aufgabe erfüllt der AV-Knoten (Atrioventrikularknoten) im Erregungsleitungssystem des Herzens?",
    options: [
          "Er erzeugt im gesunden Herzen den normalen Grundrhythmus als primärer Schrittmacher.",
          "Er verzögert die elektrische Erregung zwischen Vorhöfen und Herzkammern, damit die Vorhöfe das Blut vor der Kammerkontraktion in die Kammern pumpen können.",
          "Er leitet die Erregung direkt vom Gehirn über motorische Nervenfasern an das Myokard.",
          "Er schließt die Taschenklappen während der Füllungsphase.",
          "Er verhindert die Sauerstoffaufnahme in den Lungenkapillaren."
    ],
    correctAnswer: 1,
    explanation:
      "Der primäre Taktgeber des Herzens ist der Sinusknoten. Der AV-Knoten nimmt die Vorhoferregung auf und leitet sie mit einer kurzen Verzögerung an die Herzkammern weiter. Diese Verzögerung stellt sicher, dass die Vorhöfe kontrahieren und die Ventrikel vollständig füllen, bevor die Kammersystole einsetzt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Erregungsleitung","AV-Knoten","Sinusknoten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Gefäßsystem & Windkesselfunktion",
    difficulty: "Leicht",
    questionText:
      "Was versteht man unter der „Windkesselfunktion“ der elastischen Aorta?",
    options: [
          "Die Aorta dehnt sich während des Herzauswurfs elastisch aus und gibt das Blut in der Entspannungsphase gleichmäßig weiter, was den Blutstrom glättet.",
          "Die Aorta pumpt das Blut durch aktive Kontraktion von Skelettmuskelfasern weiter.",
          "Die Aorta verhindert über Klappen den Rückfluss von Blut in die Hohlvenen.",
          "Die Aorta filtert Sauerstoff aus der eingeatmeten Luft direkt in das arterielle Blut.",
          "Die Aorta senkt den Blutdruck in den Kapillaren auf null ab."
    ],
    correctAnswer: 0,
    explanation:
      "Dank ihrer elastischen Wand dehnt sich die Aorta während der Kammersystole aus und nimmt einen Teil des ausgeworfenen Blutes auf (Druckspeicherung). Während der Diastole zieht sich die Gefäßwand elastisch zusammen und drückt das Blut kontinuierlich weiter. Dadurch wird der stoßweise Auswurf des Herzens in einen gleichmäßigen Blutfluss umgewandelt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Gefäße","Aorta","Windkesselfunktion","Blutkreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem — Spezifische zelluläre Abwehr (Zytotoxische T-Zellen)",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage beschreibt die Funktion von zytotoxischen T-Zellen (T-Killerzellen) im menschlichen Immunsystem korrekt?",
    options: [
          "Sie bilden und sezernieren lösliche Antikörper in das Blutplasma.",
          "Sie erkennen und zerstören direkt virusinfizierte Körperzellen oder veränderte Tumorzellen.",
          "Sie fressen als unspezifische Fresszellen Bakterien im Gewebe durch Phagozytose.",
          "Sie entwickeln sich im Knochenmark zu reifen roten Blutkörperchen.",
          "Sie produzieren Magensäure zur unspezifischen Abwehr im Verdauungstrakt."
    ],
    correctAnswer: 1,
    explanation:
      "Zytotoxische T-Zellen (CD8⁺ T-Lymphozyten) sind Teil der zellulären spezifischen Immunabwehr. Sie erkennen körpereigene Zellen, die von Viren befallen oder entartet sind, und leiten gezielt deren programmierten Zelltod (Apoptose) ein. Antikörper hingegen werden von B-Lymphozyten bzw. Plasmazellen gebildet.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","T-Zellen","Zelluläre Abwehr"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem — Immunologisches Gedächtnis (Primäre vs. Sekundäre Antwort)",
    difficulty: "Leicht",
    questionText:
      "Warum reagiert das adaptive Immunsystem bei einem erneuten Kontakt mit demselben Erreger (Sekundärantwort) viel schneller und effektiver als beim Erstkontakt?",
    options: [
          "Weil die Haut beim Zweitkontakt undurchlässig für alle Stoffe wird.",
          "Weil nach dem Erstkontakt spezifische Gedächtniszellen (Memory-Zellen) erhalten bleiben, die sich rasch vermehren und Antikörper bilden.",
          "Weil das Komplementsystem beim Zweitkontakt keine Proteine mehr benötigt.",
          "Weil beim Zweitkontakt ausschließlich rote Blutkörperchen aktiv gegen den Erreger kämpfen.",
          "Weil der Erreger beim Zweitkontakt keine Antigene mehr besitzt."
    ],
    correctAnswer: 1,
    explanation:
      "Beim Erstkontakt müssen passende B- und T-Zellen erst aktiviert werden und sich teilen, was einige Tage dauert. Dabei entstehen auch langlebige Gedächtniszellen. Trifft der Körper erneut auf denselben Erreger, erkennen die Gedächtniszellen ihn sofort, teilen sich massenhaft und bilden innerhalb kürzester Zeit große Mengen hochwirksamer Antikörper.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","Gedächtniszellen","Immunantwort"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Lymphatisches System — Primäre vs. Sekundäre lymphatische Organe",
    difficulty: "Leicht",
    questionText:
      "Was unterscheidet primäre von sekundären lymphatischen Organen?",
    options: [
          "In primären Organen (Knochenmark, Thymus) entstehen und reifen Lymphozyten heran; in sekundären Organen (z. B. Lymphknoten, Milz) findet der Antigenkontakt und die Immunantwort statt.",
          "Primäre Organe filtern das Blut; sekundäre Organe bilden ausschließlich Erythrozyten.",
          "Primäre Organe kommen nur bei Kindern vor; sekundäre Organe bilden sich erst im Alter.",
          "Die Milz ist das wichtigste primäre lymphatische Organ des Menschen.",
          "Sekundäre lymphatische Organe enthalten keine Abwehrzellen."
    ],
    correctAnswer: 0,
    explanation:
      "Primäre lymphatische Organe (rotes Knochenmark für B-Zellen und alle Blutzellen; Thymus für T-Zell-Reifung) dienen der Bildung und Ausreifung der Abwehrzellen. Sekundäre lymphatische Organe (Lymphknoten, Milz, Mandeln, Peyer-Plaques) sind die Orte, an denen Krankheitserreger abgefangen und Immunreaktionen ausgelöst werden.",
    tags: ["BMS","Biologie","Der menschliche Körper","Lymphsystem","Thymus","Knochenmark","Milz","Lymphknoten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Lymphatisches System — Lymphdrainage und Gewebsflüssigkeit",
    difficulty: "Leicht",
    questionText:
      "Welche Hauptaufgabe hat das lymphatische System beim Flüssigkeitstransport im menschlichen Körper?",
    options: [
          "Es pumpt arterielles Blut mit hohem Druck vom Herzen zu den Organen.",
          "Es nimmt überschüssige Gewebsflüssigkeit (Interstitielle Flüssigkeit) aus dem Gewebe auf und leitet sie zurück in das venöse Blutsystem.",
          "Es transportiert den Primärharn von den Nieren direkt in die Harnblase.",
          "Es filtert Sauerstoff aus dem Blutplasma zur Versorgung des Gehirns.",
          "Es verhindert jeglichen Austritt von Wasser aus den Blutkapillaren ins Gewebe."
    ],
    correctAnswer: 1,
    explanation:
      "An den Blutkapillaren tritt ständig Flüssigkeit ins umliegende Gewebe über. Das lymphatische System nimmt diese überschüssige Gewebsflüssigkeit als Lymphe auf, reinigt sie in den zwischengeschalteten Lymphknoten und leitet sie wieder dem venösen Blutkreislauf zu.",
    tags: ["BMS","Biologie","Der menschliche Körper","Lymphsystem","Gewebsflüssigkeit","Lymphe"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Saltatorische Erregungsleitung & Ranvier-Schnürringe",
    difficulty: "Mittel",
    questionText:
      "Welchen Vorteil bietet die Myelinscheide bei myelinisierten Nervenfasern für die Weiterleitung von Nervenimpulsen (saltatorische Erregungsleitung)?",
    options: [
          "Sie verlangsamt die Reizleitung, um eine Überlastung des Gehirns zu verhindern.",
          "Sie isoliert das Axon elektrisch, sodass Aktionspotenziale von Schnürring zu Schnürring „springen“ und deutlich schneller weitergeleitet werden.",
          "Sie wandelt elektrische Impulse in mechanische Muskelkontraktionen um.",
          "Sie ersetzt das Axon vollständig durch eine Schicht aus Bindegewebe.",
          "Sie ermöglicht die Reizleitung ganz ohne Ionenströme."
    ],
    correctAnswer: 1,
    explanation:
      "Die Myelinscheide (gebildet von Schwann-Zellen im PNS bzw. Oligodendrozyten im ZNS) isoliert das Axon elektrisch. Aktionspotenziale müssen nur an den unbedeckten Ranvier-Schnürringen neu aufgebaut werden. Die Erregung springt dadurch sprunghaft (saltatorisch) von Knoten zu Knoten, was die Leitungsgeschwindigkeit drastisch erhöht und Energie spart.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Myelin","Aktionspotenzial","Ranvier-Schnürring"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Chemische Synapse & Neurotransmitter",
    difficulty: "Mittel",
    questionText:
      "Was geschieht an einer chemischen Synapse, wenn ein Aktionspotenzial das präsynaptische Endknöpfchen erreicht?",
    options: [
          "Es werden Neurotransmitter aus Vesikeln in den synaptischen Spalt freigesetzt, die an Rezeptoren der Empfängerzelle binden.",
          "Die beiden Nervenzellen verschmelzen dauerhaft zu einer gemeinsamen Zelle.",
          "Der elektrische Strom fließt ungehindert und ohne Botenstoffe direkt in die Nachbarzelle weiter.",
          "Das Endknöpfchen wird abgebaut und neu synthetisiert.",
          "Sämtliche Ionenkanäle der Postsynapse werden dauerhaft verschlossen."
    ],
    correctAnswer: 0,
    explanation:
      "Erreicht ein elektrischer Impuls das präsynaptische Endknöpfchen, führt ein Calciumeinstrom dazu, dass synaptische Bläschen (Vesikel) mit der Membran verschmelzen. Die darin enthaltenen chemischen Botenstoffe (Neurotransmitter wie z. B. Acetylcholin) diffundieren durch den synaptischen Spalt und binden an passende Rezeptoren der nachgeschalteten Zelle.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Synapse","Neurotransmitter"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Vegetatives Nervensystem (Sympathikus vs. Parasympathikus)",
    difficulty: "Leicht",
    questionText:
      "Welche Aussage beschreibt die Wirkung des vegetativen Nervensystems auf das Herz und die Verdauungsorgane korrekt?",
    options: [
          "Der Sympathikus steigert die Herzfrequenz und hemmt die Magen-Darm-Tätigkeit; der Parasympathikus senkt die Herzfrequenz und fördert die Verdauung.",
          "Der Sympathikus fördert ausschließlich die Verdauung und senkt den Blutdruck.",
          "Der Parasympathikus bereitet den Körper auf Flucht- und Kampfreaktionen vor (Fight or Flight).",
          "Sympathikus und Parasympathikus haben stets die exakt gleiche Wirkung auf alle Erfolgsorgane.",
          "Beide Systeme werden ausschließlich willkürlich über das Großhirn gesteuert."
    ],
    correctAnswer: 0,
    explanation:
      "Das vegetative Nervensystem steuert unwillkürliche Organfunktionen über zwei Gegenspieler: Der Sympathikus dominiert in Leistungs- und Stresssituationen (steigert Herzschlag, erweitert Bronchien, hemmt Verdauung). Der Parasympathikus überwiegt in Ruhe- und Erholungsphasen (senkt Herzschlag, regt Magen-Darm-Trakt und Drüsensekretion an).",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Sympathikus","Parasympathikus","Vegetativ"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane — Auge (Nahakkommodation der Linse)",
    difficulty: "Mittel",
    questionText:
      "Was geschieht im gesunden menschlichen Auge bei der Nahakkommodation (Scharfstellen auf nahe Gegenstände)?",
    options: [
          "Der Ziliarmuskel zieht sich zusammen, die Zonulafasern entspannen sich und die elastische Linse krümmt sich stärker (höhere Brechkraft).",
          "Die Linse flacht maximal ab, um die Brechkraft zu verringern.",
          "Die Hornhaut verändert aktiv ihre Krümmung durch eigene Muskeln.",
          "Die Netzhaut wird vom Glaskörper nach hinten gedrückt.",
          "Die Pupille schließt sich vollständig, um den Lichteinfall zu stoppen."
    ],
    correctAnswer: 0,
    explanation:
      "Beim Blick in die Nähe zieht sich der ringförmige Ziliarmuskel zusammen, wodurch der Zug auf die Zonulafasern nachlässt. Durch ihre Eigenelastizität nimmt die Augenlinse eine kugeligere Form an; ihre Krümmung und Brechkraft nehmen zu, sodass nahe Objekte scharf auf der Netzhaut abgebildet werden.",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Auge","Akkommodation","Linse","Ziliarmuskel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Haut — Schichten der Haut (Epidermis, Dermis, Subkutis)",
    difficulty: "Leicht",
    questionText:
      "In welcher Reihenfolge ist die menschliche Haut von außen nach innen aufgebaut?",
    options: [
          "Epidermis (Oberhaut) → Dermis (Lederhaut) → Subkutis (Unterhaut)",
          "Subkutis → Dermis → Epidermis",
          "Dermis → Epidermis → Subkutis",
          "Epidermis → Subkutis → Dermis",
          "Cutis → Subkutis → Epidermis"
    ],
    correctAnswer: 0,
    explanation:
      "Die menschliche Haut gliedert sich von außen nach innen in: (1) Epidermis (Oberhaut, mehrschichtiges verhorntes Epithel), (2) Dermis bzw. Corium (Lederhaut, kollagenreiches Bindegewebe mit Blutgefäßen, Drüsen und Sinneskörperchen) und (3) Subkutis (Unterhaut, lockeres Binde- und Fettgewebe).",
    tags: ["BMS","Biologie","Der menschliche Körper","Haut","Epidermis","Dermis","Subkutis"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Skelettsystem — Knochenzellen (Osteoblasten vs. Osteoklasten)",
    difficulty: "Leicht",
    questionText:
      "Welche Rolle spielen Osteoblasten und Osteoklasten beim ständigen Umbau des menschlichen Knochengewebes?",
    options: [
          "Osteoblasten bauen neue Knochensubstanz auf, während Osteoklasten Knochengewebe abbauen.",
          "Osteoklasten bilden neue Knochenmatrix, während Osteoblasten Knorpel abbauen.",
          "Beide Zelltypen bauen ausschließlich Knochensubstanz ab.",
          "Osteoblasten sind rote Blutzellen, die Calcium im Knochenmark speichern.",
          "Osteoklasten teilen sich mitotisch und bilden das Knochenperiost."
    ],
    correctAnswer: 0,
    explanation:
      "Knochen unterliegt einem ständigen dynamischen Umbau: Osteoblasten sind die Knochenbildner, die organische Knochenmatrix (Osteoid) herstellen und mineralisieren. Osteoklasten sind Fresszellen, die Knochensubstanz auflösen und abbauen (z. B. zur Calciumfreisetzung bei Calciummangel).",
    tags: ["BMS","Biologie","Der menschliche Körper","Knochen","Osteoblasten","Osteoklasten","Skelettsystem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Muskelsystem — Molekulare Muskelkontraktion (Aktin, Myosin, Calcium, ATP)",
    difficulty: "Mittel",
    questionText:
      "Welche Rolle spielen Calciumionen (Ca²⁺) und ATP bei der Kontraktion eines Skelettmuskels?",
    options: [
          "Calcium ermöglicht die Anlagerung der Myosinköpfe an das Aktinfilament, und ATP liefert die Energie für die Bewegung und das anschließende Lösen der Myosinköpfe.",
          "Calcium zerstört das Myosinmolekül, während ATP neues Aktin bildet.",
          "ATP und Calcium verhindern jegliche Bewegung der Muskelfasern.",
          "Calcium dient als Energieträger, während ATP die Nervenimpulse leitet.",
          "Calcium baut Milchsäure ab, damit sich der Muskel passiv dehnen kann."
    ],
    correctAnswer: 0,
    explanation:
      "Bei einer Muskelreizung wird Calcium aus dem sarkoplasmatischen Retikulum freigesetzt, wodurch die Bindungsstellen auf den Aktinfilamenten freigegeben werden. Die Myosinköpfe binden an Aktin, knicken um und verkürzen das Sarkomer. Die Bindung von frischem ATP ist nötig, damit sich der Myosinkopf wieder vom Aktin löst und für einen neuen Zyklus bereit ist.",
    tags: ["BMS","Biologie","Der menschliche Körper","Muskel","Kontraktion","Aktin","Myosin","ATP","Calcium"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem — Magen (Salzsäure & Pepsin)",
    difficulty: "Leicht",
    questionText:
      "Welche wichtige Funktion erfüllt die im Magen produzierte Salzsäure (HCl)?",
    options: [
          "Sie denaturiert Nahrungsproteine, aktiviert Pepsinogen zu Pepsin und tötet viele aufgenommene Mikroorganismen ab.",
          "Sie spaltet Fette direkt in Glycerin und Fettsäuren im basischen Milieu.",
          "Sie neutralisiert den sauren Speisebrei für den Dünndarm.",
          "Sie verhindert die Bildung von Magenschleim zum besseren Nährstofftransport.",
          "Sie dient als Hauptbaustein für die Synthese von Blutzellen."
    ],
    correctAnswer: 0,
    explanation:
      "Die Salzsäure des Magens (gebildet von den Belegzellen) schafft ein stark saures Milieu (pH 1–2). Dadurch werden Eiweiße aus der Nahrung entfaltet (denaturiert), das inaktive Enzym Pepsinogen wird in aktives Pepsin umgewandelt und mit der Nahrung aufgenommene Krankheitserreger werden größtenteils abgetötet.",
    tags: ["BMS","Biologie","Der menschliche Körper","Magen","Salzsäure","Pepsin","Verdauung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set2-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem — Leber, Galle & Fettverdauung",
    difficulty: "Leicht",
    questionText:
      "Welche Aufgabe hat die in der Leber produzierte Galle bei der Verdauung im Dünndarm?",
    options: [
          "Sie spaltet Proteine in einzelne Aminosäuren.",
          "Sie emulgiert Nahrungsfette in feinste Tröpfchen, sodass Verdauungsenzyme (Lipasen) eine größere Angriffsfläche haben.",
          "Sie wandelt Stärke direkt in Glukose um.",
          "Sie hemmt die Ausschüttung von Bauchspeicheldrüsenenzymen.",
          "Sie sorgt für einen stark sauren pH-Wert im gesamten Dünndarm."
    ],
    correctAnswer: 1,
    explanation:
      "Gallensäuren besitzen sowohl fett- als auch wasserlösliche Anteile (amphiphil). Sie zerkleinern große, wasserunlösliche Fetttropfen im wässrigen Speisebrei in eine feine Emulsion aus winzigen Fetttröpfchen. Dies vergrößert die Oberfläche für fettspaltende Enzyme (Pankreaslipase) erheblich und ermöglicht eine wirksame Fettverdauung.",
    tags: ["BMS","Biologie","Der menschliche Körper","Leber","Galle","Fettverdauung","Dünndarm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-02-set3-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Epithelgewebe: Metaplasie & mukoziliäre Clearance",
    difficulty: "Mittel",
    questionText:
      "Bei langjährigen Zigarettenrauchern wandelt sich das mehrreihige, zilientragende hochprismatische Flimmerepithel der Atemwege häufig in ein mehrschichtiges, unverhorntes Plattenepithel um (Plattenepithelmetaplasie). Welche funktionelle Beeinträchtigung der Lunge resultiert primär aus dieser strukturellen Veränderung?",
    options: [
          "Die Lungenalveolen können keinen Surfactant mehr bilden.",
          "Der Sauerstoffübertritt im Bereich der Trachea wird vollständig blockiert.",
          "Der mukoziliäre Selbstreinigungsmechanismus fällt aus, wodurch Schleim und Fremdstoffe nicht mehr nach kranial abtransportiert werden können und chronischer Husten entsteht.",
          "Die glatte Muskulatur der Bronchien verliert ihre Fähigkeit zur Kontraktion.",
          "Die Erythrozyten im Kapillarbett der Bronchien verlieren ihre Fähigkeit zur Hämoglobinbildung."
    ],
    correctAnswer: 2,
    explanation:
      "Das respiratorische Flimmerepithel besitzt Kinozilien, die eingeatmete Partikel und Staub auf einem Schleimfilm kontinuierlich in Richtung Rachen befördern (mukoziliäre Clearance). Durch die metaplastische Umwandlung in ein robusteres mehrschichtiges Plattenepithel geht dieser Zilienschlag verloren. Schleim und Fremdstoffe stauen sich in den Atemwegen an und müssen mühsam über den Hustenreflex mechanisch ausgeworfen werden.",
    tags: ["BMS","Biologie","Der menschliche Körper","Gewebe","Epithel","Flimmerepithel","Lunge"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Stützgewebe: Vaskularisation & Regeneration von Knochen vs. Knorpel",
    difficulty: "Mittel",
    questionText:
      "Warum heilt eine Fraktur eines Röhrenknochens beim gesunden Erwachsenen in der Regel innerhalb weniger Wochen durch Kallusbildung, während ein Riss im hyalinen Gelenkknorpel kaum oder nur extrem verzögert regeneriert?",
    options: [
          "Knochengewebe ist über Havers- und Volkmann-Kanäle reich vaskularisiert, während hyaliner Knorpel gefäßlos ist und seine Chondrozyten rein bradytroph über Diffusion aus der Synovia ernährt werden.",
          "Knorpelzellen besitzen keine Zellkerne und können daher keine Proteine synthetisieren.",
          "Knochengewebe besteht ausschließlich aus lebenden Osteoklasten, die sich rasch mitotisch teilen.",
          "Knorpelgewebe enthält im Gegensatz zum Knochen keine extrazelluläre Matrix.",
          "Knochengewebe wird im Gegensatz zu Knorpel nicht von einer bindegewebigen Hülle umgeben."
    ],
    correctAnswer: 0,
    explanation:
      "Knochengewebe ist ein stoffwechselaktives, hervorragend durchblutetes Gewebe: Bei einer Fraktur bildet sich rasch ein Hämatom, und über die Blutgefäße wandern Osteoprogenitorzellen und Entzündungszellen ein, die den Knochen umbauen. Hyaliner Knorpel hingegen ist vollständig gefäß- und nervenlos (bradytrophes Gewebe). Seine Chondrozyten werden ausschließlich durch langsame Diffusion von Nährstoffen aus der Synovialflüssigkeit versorgt, was die Regenerations- und Teilungsfähigkeit bei Verletzungen drastisch limitiert.",
    tags: ["BMS","Biologie","Der menschliche Körper","Knochen","Knorpel","Gewebe","Regeneration"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmung: Gasaustausch & Alveolaroberfläche",
    difficulty: "Mittel",
    questionText:
      "Bei einem Lungenemphysem werden die zarten interalveolären Trennwände fortschreitend zerstört, sodass aus vielen kleinen Alveolen wenige, stark erweiterte Blasen entstehen. Welche Auswirkung hat diese Strukturveränderung auf den Gasaustausch?",
    options: [
          "Die Diffusionsstrecke wird verdoppelt, wodurch der Kohlendioxidausstrom beschleunigt wird.",
          "Der Sauerstoffpartialdruck in der Atemluft sinkt automatisch auf null ab.",
          "Die Diffusionsrate für Gase steigt an, da größere Hohlräume weniger Strömungswiderstand bieten.",
          "Die effektive Gesamtoberfläche für den Gasaustausch wird massiv reduziert, wodurch die Diffusion von Sauerstoff ins Blut drastisch sinkt.",
          "Die Erythrozyten können die Lungenkapillaren nicht mehr passieren."
    ],
    correctAnswer: 3,
    explanation:
      "Die Geschwindigkeit der Diffusion von Atemgasen ist direkt proportional zur verfügbaren Austauschfläche. Durch die Zerstörung der Alveolarsepten schrumpft die physiologische Gesamtoberfläche der Lunge (normalerweise ca. 80–100 m²) drastisch zusammen. Trotz Belüftung der großen Emphysemblasen diffundiert pro Zeiteinheit zu wenig Sauerstoff ins Blut, was zu Sauerstoffmangel und Atemnot führt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Alveolen","Gasaustausch","Emphysem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atemmechanik: Intrapleuraler Druck & Pneumothorax",
    difficulty: "Schwer",
    questionText:
      "Infolge einer Stichverletzung der Brustwand dringt Außenluft in den Pleuraspalt einer Thoraxhälfte ein (traumatischer Pneumothorax). Welches mechanische Phänomen tritt an der betroffenen Lunge unmittelbar auf und warum?",
    options: [
          "Die Lunge bläht sich maximal auf, weil der Druck im Pleuraspalt stark negativ wird.",
          "Der physiologische Unterdruck im Pleuraspalt gleicht sich dem atmosphärischen Druck an; die Lunge kollabiert aufgrund ihrer elastischen Eigenrückstellkräfte.",
          "Das Zwerchfell krampft und drückt die Lunge aktiv in den Bauchraum.",
          "Die Lungenkapillaren verschließen sich sofort durch Thrombozytenaggregate, um Luftembolien zu verhindern.",
          "Die gegenüberliegende gesunde Lunge kollabiert reflektorisch synchron mit."
    ],
    correctAnswer: 1,
    explanation:
      "Im gesunden Zustand herrscht im flüssigkeitsgefüllten Pleuraspalt zwischen Lungenfell und Rippenfell ein ständiger Unterdruck, der die elastisch vorgespannte Lunge an der inneren Thoraxwand festhält. Dringt Luft in diesen Spalt ein (Pneumothorax), bricht der Unterdruck zusammen. Die Lunge folgt den Atembewegungen des Brustkorbs nicht mehr und zieht sich aufgrund ihrer Eigenelastizität zusammen (Lungenkollaps).",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Pleuraspalt","Pneumothorax","Atemmechanik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrine Regelkreise: Schilddrüsen-Rückkopplung & Struma",
    difficulty: "Schwer",
    questionText:
      "Bei chronischem Jodmangel können die Follikelzellen der Schilddrüse nicht genügend Schilddrüsenhormone (T₃ und T₄) synthetisieren. Welche Auswirkung hat diese Hormonverarmung auf den Hypophysenvorderlappen und welche morphologische Folge entsteht an der Schilddrüse?",
    options: [
          "TSH wird vollständig gehemmt, wodurch die Schilddrüse atrophiert.",
          "Die Hypophyse schüttet vermehrt Calcitonin aus, um Calcium in der Schilddrüse einzulagern.",
          "Die ACTH-Ausschüttung steigt an, wodurch die Nebennierenrinde zur Schilddrüse transformiert.",
          "Es kommt zu einer selektiven Erhöhung von freiem Jod im Speichel ohne Organvergrößerung.",
          "Der Mangel an T₃/T₄ schwächt die negative Rückkopplung auf die Hypophyse ab; die Hypophyse schüttet vermehrt TSH aus, was das Schilddrüsenwachstum anregt und zur Kropfbildung (Struma) führt."
    ],
    correctAnswer: 4,
    explanation:
      "Schilddrüsenhormone regulieren ihre eigene Synthese über eine negative Rückkopplungsschleife: T₃ und T₄ hemmen in der Hypophyse die Ausschüttung von TSH (Thyreoidea-stimulierendes Hormon). Fehlt Jod als Baustein, sinkt der T₃/T₄-Spiegel. Durch die verminderte negative Rückkopplung schüttet die Hypophyse dauerhaft vermehrt TSH aus, was die Schilddrüsenzellen zur Größenzunahme und Teilung anregt (Struma / Kropf).",
    tags: ["BMS","Biologie","Der menschliche Körper","Hormone","Schilddrüse","TSH","Rückkopplung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Stressachse: Nebennierenmark (Catecholamine) vs. Nebennierenrinde (Cortisol)",
    difficulty: "Mittel",
    questionText:
      "In einer akuten Gefahrensituation (\"Fight-or-Flight\") mobilisiert der Organismus innerhalb von Sekunden Energie. Welcher hormonelle Unterschied besteht zwischen der raschen sympathoneuronalen Stressantwort und der verzögerten hormonellen Antwort der Nebennierenrinde?",
    options: [
          "Das Nebennierenmark schüttet langsam Cortisol aus, während die Rinde sofort Insulin freisetzt.",
          "Das Nebennierenmark schüttet auf neuronalen Reiz blitzschnell Adrenalin/Noradrenalin aus (Steigerung von Herzfrequenz und Blutzucker); die Nebennierenrinde setzt über die Hypophysenachse verzögert Cortisol frei (langfristige Glukosebereitstellung).",
          "Die Nebennierenrinde schüttet über Gap Junctions direkt Adrenalin in den Zellkern aus.",
          "Das Nebennierenmark hemmt den Sympathikus, während die Rinde den Parasympathikus aktiviert.",
          "Cortisol senkt den Blutzuckerspiegel sofort auf null, während Adrenalin die Fettresorption blockiert."
    ],
    correctAnswer: 1,
    explanation:
      "Die Stressreaktion erfolgt über zwei Wege: (1) Das Nebennierenmark wird direkt über sympathische Nervenfasern innerviert und schüttet blitzschnell Adrenalin und Noradrenalin aus, um Herz-Kreislauf und Energieumsatz sofort hochzufahren. (2) Die Nebennierenrinde wird auf dem hormonellen Weg über ACTH der Hypophyse stimuliert und schüttet zeitlich verzögert das Steroidhormon Cortisol aus, das den Stoffwechsel längerfristig an Belastungssituationen anpasst.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nebenniere","Adrenalin","Cortisol","Stress"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Männliche Hormonachse: Negative Rückkopplung & Hodenfunktion",
    difficulty: "Schwer",
    questionText:
      "Ein Bodybuilder missbraucht über mehrere Monate hochdosierte synthetische Androgene (Testosteron-Analoga). Warum führt dieser Missbrauch typischerweise zu einer Verkleinerung der Hoden (Hodenatrophie) und zum Erliegen der körpereigenen Spermienbildung?",
    options: [
          "Exogenes Testosteron wandelt die Spermatogonien direkt in Leberzellen um.",
          "Das injizierte Testosteron zerstört die Schwellkörper des Penis mechanisch.",
          "Exogene Androgene aktivieren das Enzym Aromatase, welches ausschließlich Spermien im Nebenhoden auflöst.",
          "Die hohen Blutspiegel exogener Androgene hemmen über negative Rückkopplung die Ausschüttung von GnRH, LH und FSH aus Hypothalamus und Hypophyse, wodurch die körpereigene Hodenstimulation ausbleibt.",
          "Testosteron blockiert die Nierendurchblutung, wodurch keine Hodenproteine mehr filtriert werden."
    ],
    correctAnswer: 3,
    explanation:
      "Körpereigenes Testosteron sowie künstlich zugeführte Androgene wirken über negative Rückkopplung hemmend auf Hypothalamus (GnRH) und Hypophyse (LH und FSH). Durch die hohen Androgenspiegel stoppt die Hypophyse die Ausschüttung von LH (welches die Leydig-Zellen stimuliert) und FSH (welches die Sertoli-Zellen und Spermatogenese anregt). Ohne diese Steuerungshormone schrumpft das Hodengewebe und die körpereigene Spermienproduktion erliegt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Hoden","Testosteron","Hormone","Rückkopplung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Weiblicher Zyklus: Lutealphase, Progesteronabfall & Menstruation",
    difficulty: "Leicht",
    questionText:
      "Welches hormonelle Ereignis leitet am Ende des weiblichen Zyklus die Menstruationsblutung (Abstoßung der Gebärmutterschleimhaut) ein, wenn keine Befruchtung und Einnistung stattgefunden hat?",
    options: [
          "Die Rückbildung des Gelbkörpers (Corpus luteum) führt zu einem steilen Abfall der Progesteron- und Östrogenspiegel im Blut.",
          "Ein plötzlicher massiver Anstieg von humanem Choriongonadotropin (hCG) aus dem Ovar",
          "Eine schlagartige Verdreifachung des Follikel-stimulierenden Hormons (FSH)",
          "Die dauerhafte Aktivierung von Oxytocin-Rezeptoren im Zervixkanal",
          "Die vollständige Umwandlung des Endometriums in verhorntes Plattenepithel"
    ],
    correctAnswer: 0,
    explanation:
      "Kommt es nach dem Eisprung zu keiner Schwangerschaft, geht der Gelbkörper (Corpus luteum) nach ca. 14 Tagen zugrunde. Dadurch fallen die von ihm produzierten Hormone Progesteron und Östrogen rasch ab. Durch diesen Hormonentzug wird die aufgebaute Funktionsschicht der Gebärmutterschleimhaut (Endometrium) abgestoßen und als Menstruationsblutung ausgeschieden.",
    tags: ["BMS","Biologie","Der menschliche Körper","Zyklus","Progesteron","Menstruation","Corpus luteum"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Glomeruläre Filtration: Filtrationsbarriere & Proteinurie",
    difficulty: "Mittel",
    questionText:
      "Bei einer entzündlichen Erkrankung der Nierenkörperchen (Glomerulonephritis) wird die glomeruläre Filtrationsbarriere geschädigt. Welcher pathologische Befund im Urin ist eine typische direkte Folge dieses Schadens?",
    options: [
          "Das vollständige Fehlen von Harnstoff im Urin",
          "Eine massive Ausscheidung von unveränderten Erythrozytenkernen",
          "Das Auftreten größerer Mengen von Plasmaproteinen (z. B. Albumin) im Urin (Proteinurie)",
          "Eine dauerhafte Blockade des renalen Glukoseausstroms",
          "Die Umwandlung des Endharns in reines Blutplasma ohne Ionen"
    ],
    correctAnswer: 2,
    explanation:
      "Die Filtrationsbarriere der Nierenkörperchen (Kapillarendothel, Basalmembran, Podozyten) hält normalerweise große Plasmaproteine wie Albumin aufgrund ihrer Größe und negativen Ladung im Blut zurück. Wird dieser Filter durch Entzündungsprozesse geschädigt, treten Proteine in den Primärharn über und erscheinen im Endharn (Proteinurie).",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Glomerulus","Filtration","Proteinurie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Wasserhaushalt: Osmoregulation & ADH",
    difficulty: "Schwer",
    questionText:
      "Ein gesunder Mensch trinkt an einem heißen Sommertag über viele Stunden hinweg kein Wasser, schwitzt jedoch stark. Wie reagiert der Körper hormonell und renal auf den Wassermangel?",
    options: [
          "Die Nebennierenrinde stoppt die Aldosteronbildung, um Natrium über den Urin zu verlieren.",
          "Die Nieren steigern die glomeruläre Filtrationsrate auf das Dreifache.",
          "Die Hypophyse schüttet vermehrt Insulin aus, um Wasser in Muskelzellen zu pumpen.",
          "Die Podozyten verschließen alle Kapillarschlitze hermetisch.",
          "Der Hypothalamus veranlasst die Ausschüttung von ADH (Antidiuretischem Hormon) aus dem Hypophysenhinterlappen; ADH fördert die Wasserrückresorption in den Sammelrohren der Niere, wodurch konzentrierter Urin gebildet wird."
    ],
    correctAnswer: 4,
    explanation:
      "Bei Flüssigkeitsmangel steigt die Osmolarität des Blutes. Osmorezeptoren im Hypothalamus registrieren dies und triggern die Freisetzung von ADH (Antidiuretisches Hormon / Vasopressin) aus der Neurohypophyse. ADH veranlasst die Nieren-Sammelrohre, mehr Wasser aus dem Harn zurück ins Blut zu transportieren, wodurch der Körper Wasser spart und nur wenig, stark konzentrierten Urin ausscheidet.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","ADH","Wasserhaushalt","Osmoregulation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herzzyklus & Pathophysiologie: Aortenstenose & Hypertrophie",
    difficulty: "Schwer",
    questionText:
      "Bei einer Verengung der Aortenklappe (Aortenklappenstenose) muss die linke Herzkammer das Blut gegen einen stark erhöhten Widerstand in die Aorta pumpen. Welche morphologische Anpassung zeigt die Muskulatur der linken Kammer langfristig, und in welcher Phase des Herzzyklus muss sie dabei den erhöhten Widerstand überwinden?",
    options: [
          "Es kommt zur Atrophie der Herzwand; die Beanspruchung findet während der Füllungsphase (Diastole) statt.",
          "Der linke Ventrikel dilatiert ohne Wandverdickung während der Entspannungsphase.",
          "Der Herzmuskel der linken Kammer verdickt sich (Hypertrophie), um den erhöhten Druck während der Austreibungsphase (Systole) aufzubringen.",
          "Die Herzklappen verkalken vollständig und schließen die Herzhöhlen luftdicht ab.",
          "Der rechte Vorhof verdoppelt seine Muskelmasse, während die linke Kammer unverändert bleibt."
    ],
    correctAnswer: 2,
    explanation:
      "Gegen eine verengte Aortenklappe muss die linke Herzkammer während der Kammersystole (Austreibungsphase) einen deutlich höheren Druck aufbauen, um das Schlagvolumen auszuwerfen. Als langfristige Anpassung an diese erhöhte Druckbelastung (Nachlast) verdickt sich das Myokard der linken Kammer (konzentrische Herzhypertrophie).",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Systole","Aortenklappe","Hypertrophie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Kreislaufregulation: Blutumverteilung bei körperlicher Belastung",
    difficulty: "Leicht",
    questionText:
      "Welche koordinierte Veränderung der Organdurchblutung findet im menschlichen Körper bei Beginn eines anstrengenden Dauerlaufs statt?",
    options: [
          "Gefäßverengung in den Herzkranzgefäßen und maximale Durchblutung der Magen-Darm-Schleimhaut",
          "Gleichmäßige Verdopplung des Gefäßwiderstands in allen Organen des Körpers",
          "Vollständiger Verschluss der Lungenkapillaren zur Schonung der Alveolen",
          "Erweiterung der Blutgefäße in der arbeitenden Skelettmuskulatur und im Herzmuskel bei gleichzeitiger Drosselung der Durchblutung im Magen-Darm-Trakt",
          "Massiver Abfall der Herzfrequenz zur Vermeidung von Überlastung"
    ],
    correctAnswer: 3,
    explanation:
      "Bei körperlicher Anstrengung aktiviert der Sympathikus das Herz-Kreislauf-System: Die Blutgefäße der arbeitenden Skelettmuskeln und der Herzkranzgefäße erweitern sich (Vasodilatation), um Sauerstoff und Nährstoffe bereitzustellen. Gleichzeitig werden die Gefäße von Verdauungsorganen und Nieren verengt (Vasokonstriktion), um das Blut dorthin umzuverteilen, wo es akut benötigt wird.",
    tags: ["BMS","Biologie","Der menschliche Körper","Kreislauf","Gefäße","Sympathikus","Muskulatur"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunisierung: Aktiv vs. Passiv (Simultanimpfung)",
    difficulty: "Mittel",
    questionText:
      "Nach einer tiefen, verschmutzten Wunde erhält ein Patient mit unklarem Tetanus-Impfstatus eine Simultanimpfung (aktive Impfung mit Tetanus-Toxoid/inaktiviertem Toxin plus passive Impfung mit fertigen Antikörpern). Welcher funktionelle Unterschied besteht zwischen diesen beiden Komponenten?",
    options: [
          "Die passive Impfung bietet durch die zugeführten Antikörper einen sofortigen, aber zeitlich begrenzten Schutz; die aktive Impfung regt das körpereigene Immunsystem zur verzögerten Bildung eigener Gedächtniszellen und langanhaltender Antikörper an.",
          "Die passive Impfung aktiviert zytotoxische T-Zellen im Knochenmark; die aktive Impfung zerstört Bakterien ausschließlich mechanisch.",
          "Die aktive Impfung wirkt nur im Magen-Darm-Trakt; die passive Impfung wirkt ausschließlich in der Haut.",
          "Die passive Impfung hält lebenslang an; die aktive Impfung wird nach zwei Tagen renal ausgeschieden.",
          "Es gibt keinen funktionellen Unterschied; beide Impfstoffe enthalten identische Antikörperkonzentrate."
    ],
    correctAnswer: 0,
    explanation:
      "Die passive Immunisierung führt fertige Antikörper zu, die Krankheitserreger oder Toxine sofort abfangen (Sofortschutz), aber nach wenigen Wochen abgebaut werden. Die aktive Immunisierung verabreicht inaktiviertes Toxin (Toxoid), woraufhin der Körper mit einigen Tagen Verzögerung selbst spezifische Antikörper und langlebige Gedächtniszellen bildet, die über Jahre Schutz bieten.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","Impfung","Antikörper","Gedächtniszellen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Angeborene Immunität: Natürliche Killerzellen (NK-Zellen)",
    difficulty: "Schwer",
    questionText:
      "Manche Viren veranlassen befallene Zellen dazu, ihre normalen Oberflächenmoleküle (MHC-Klasse I) nicht mehr zu präsentieren, um T-Zellen zu entgehen. Welche Zellen der angeborenen Immunabwehr erkennen und zerstören solche veränderten Zellen anhand der fehlenden Markierung?",
    options: [
          "Neutrophile Granulozyten",
          "B-Gedächtniszellen",
          "Erythrozyten",
          "Mastzellen",
          "Natürliche Killerzellen (NK-Zellen)"
    ],
    correctAnswer: 4,
    explanation:
      "Natürliche Killerzellen (NK-Zellen) gehören zum angeborenen Immunsystem. Sie prüfen Körperzellen auf das Vorhandensein normaler Oberflächenstrukturen (MHC-I). Fehlt dieser Marker auf virusinfizierten Zellen oder Tumorzellen, entfällt das hemmende Signal und die NK-Zellen leiten die Zerstörung der Zielzelle ein.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","NK-Zellen","Angeborene Abwehr"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Lymphknoten: Immunantwort & Schwellung",
    difficulty: "Mittel",
    questionText:
      "Bei einer bakteriellen Infektion an der Hand schwellen die zuständigen Lymphknoten in der Achselhöhle nach wenigen Tagen spürbar an und schmerzen bei Berührung. Welcher Vorgang im Lymphknoten erklärt diese Größenzunahme direkt?",
    options: [
          "Das vollständige Absterben aller Bindegewebskapseln",
          "Die starke Vermehrung (klonale Proliferation) von spezifischen T- und B-Lymphozyten nach Kontakt mit den eingeschwemmten Antigenen",
          "Die dauerhafte Füllung des Lymphknotens mit roten Blutkörperchen",
          "Die Einlagerung von Calciumkristallen zur mechanischen Versteifung",
          "Die Umwandlung von Lymphknoten in exokrine Schweißdrüsen"
    ],
    correctAnswer: 1,
    explanation:
      "In den Lymphknoten treffen über die Lymphbahnen eingeschwemmte Krankheitserreger auf die dort stationierten Lymphozyten. Werden passende T- und B-Zellen durch Antigene aktiviert, teilen sie sich explosionsartig (klonale Vermehrung) und differenzieren sich zu Effektorzellen, was zur fühlbaren Schwellung des Lymphknotens führt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Lymphsystem","Lymphknoten","Lymphozyten","Immunreaktion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Milzfunktion: Blutfiltration & Immunabwehr",
    difficulty: "Schwer",
    questionText:
      "Einem Patienten muss nach einem Unfall die gesamte Milz operativ entfernt werden (Splenektomie). Welche Hauptfunktion verliert das Immunsystem durch das Fehlen dieses Organs?",
    options: [
          "Die gesamte Bildung von T-Zellen im Thymus",
          "Die Sauerstoffaufnahme in den Lungenkapillaren",
          "Die Filtration des Blutes von überalterten Erythrozyten sowie die Abwehr von über das Blut verbreiteten Bakterien",
          "Die Magensäuresekretion im Fundus",
          "Die Produktion von Galle zur Fettresorption"
    ],
    correctAnswer: 2,
    explanation:
      "Die Milz ist das größte sekundäre lymphatische Organ und direkt in den Blutkreislauf eingeschaltet. Sie erfüllt zwei Hauptaufgaben: (1) Aussortierung und Abbau alter oder beschädigter roter Blutkörperchen (rote Pulpa) und (2) Immunüberwachung und Abwehr von im Blut zirkulierenden Krankheitserregern (weiße Pulpa).",
    tags: ["BMS","Biologie","Der menschliche Körper","Milz","Lymphsystem","Erythrozyten","Blut"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Neurophysiologie: Natriumkanäle & Lokalanästhetika",
    difficulty: "Mittel",
    questionText:
      "Lokalanästhetika (wie z. B. Lidocain beim Zahnarzt) blockieren reversibel spannungsgesteuerte Natriumkanäle in der Membran peripherer Nervenfasern. Warum wird dadurch die Weiterleitung des Schmerzsignals zum Gehirn unterbunden?",
    options: [
          "Der notwendige Natriumeinstrom bleibt aus, wodurch kein Aktionspotenzial gebildet und weitergeleitet werden kann.",
          "Die Kaliumkanäle öffnen sich dauerhaft und führen zur Zerstörung der Myelinscheide.",
          "Das Ruhemembranpotenzial wird schlagartig auf null fixiert.",
          "Die Neurotransmitter wandern rückwärts in die Schmerzrezeptoren zurück.",
          "Die Ranvier-Schnürringe verschmelzen kovalent miteinander."
    ],
    correctAnswer: 0,
    explanation:
      "Für die Entstehung und Weiterleitung von Aktionspotenzialen entlang der Nervenfaser ist der rasche Einstrom von Natriumionen durch spannungsabhängige Na⁺-Kanäle zwingend erforderlich (Depolarisation). Werden diese Kanäle blockiert, kann die Reizschwelle nicht erreicht werden: Es entsteht kein Nervenimpuls, und das Schmerzsignal wird an der Injektionsstelle unterbrochen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Aktionspotenzial","Natriumkanäle","Reizleitung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Reflexbogen: Monosynaptischer Dehnungsreflex (Patellarsehnenreflex)",
    difficulty: "Schwer",
    questionText:
      "Bei der Überprüfung des Kniesehnenreflexes (Patellarsehnenreflex) führt ein leichter Schlag auf die Sehne zum Vorschnellen des Unterschenkels. Welcher Ablauf beschreibt diesen Reflexbogen im Nervensystem korrekt?",
    options: [
          "Aktivierung von Schmerzrezeptoren in der Haut → bewusste Entscheidung im Großhirn → willkürliche Muskelanspannung",
          "Erschlaffung des Muskels → Reizung der Kniescheibe → direkte Öffnung von Gap Junctions im Gelenk",
          "Reizung von Wärmekörperchen → Übertragung über den Sympathikus auf das Nebennierenmark",
          "Dehnung des Oberschenkelmuskels → Muskelspindeln registrieren Dehnung → Signal über sensorische Fasern ins Rückenmark → direkte Umschaltung auf das motorische Neuron → Kontraktion desselben Muskels",
          "Direkte Reizleitung über Knorpelzellen ohne Beteiligung des zentralen Nervensystems"
    ],
    correctAnswer: 3,
    explanation:
      "Der Patellarsehnenreflex ist ein monosynaptischer Eigenreflex: Der Schlag dehnt den vierköpfigen Oberschenkelmuskel. Die Muskelspindeln nehmen die Dehnung wahr und leiten den Impuls über sensorische Nervenfasern ins Rückenmark. Dort wird das Signal über eine einzige Synapse direkt auf das motorische Neuron übertragen, welches den Muskel zur Kontraktion bringt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Reflex","Rückenmark","Muskelspindel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Synaptische Übertragung: Acetylcholinesterase-Hemmung",
    difficulty: "Schwer",
    questionText:
      "Ein Gift hemmt das Enzym Acetylcholinesterase an chemischen Synapsen irreversibel. Welcher molekulare Zustand tritt im synaptischen Spalt auf und welche Auswirkung hat dies auf die Signalübertragung?",
    options: [
          "Der Neurotransmitter Acetylcholin kann nicht mehr synthetisiert werden.",
          "Acetylcholin wird nicht mehr abgebaut, verbleibt im synaptischen Spalt und führt zu einer dauerhaften Übererregung der nachgeschalteten Rezeptoren.",
          "Die präsynaptischen Vesikel lösen sich sofort im Zytoplasma auf.",
          "Die Synapse schaltet schlagartig auf rein elektrische Reizleitung um.",
          "Es werden ausschließlich Adrenalinmoleküle ausgeschüttet."
    ],
    correctAnswer: 1,
    explanation:
      "Die Acetylcholinesterase spaltet den Botenstoff Acetylcholin nach der Signalübertragung im synaptischen Spalt in Cholin und Acetat, um die Reizung zu beenden. Wird dieses Enzym gehemmt, akkumuliert Acetylcholin im Spalt und reizt die postsynaptischen Rezeptoren kontinuierlich weiter, was zu massiven Dauerkrämpfen und vegetativer Überstimulation führt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Synapse","Acetylcholin","Enzyme"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane: Altersweitsichtigkeit (Presbyopie)",
    difficulty: "Mittel",
    questionText:
      "Warum benötigen viele Menschen ab dem mittleren Lebensalter eine Lesebrille, um nahe Texte wieder scharf sehen zu können (Altersweitsichtigkeit / Presbyopie)?",
    options: [
          "Weil sich der Augapfel im Alter stark verlängert",
          "Weil die Sinneszellen der Netzhaut vollständig absterben",
          "Weil die Hornhaut ihre Durchsichtigkeit verliert",
          "Weil der Hörnerv die optischen Signale blockiert",
          "Weil die Augenlinse durch Elastizitätsverlust ihre Fähigkeit einbüßt, sich bei Entspannung der Zonulafasern ausreichend stark für die Nahsicht zu krümmen"
    ],
    correctAnswer: 4,
    explanation:
      "Für das Nahsehen muss sich die elastische Augenlinse stärker krümmen, um ihre Brechkraft zu steigern. Mit zunehmendem Alter verliert das Linsengewebe an Elastizität. Trotz Kontraktion des Ziliarmuskels nimmt die Linse keine ausreichend gekrümmte Form mehr an (Presbyopie), sodass nahe Objekte erst mit einer Sammellinse (Lesebrille) wieder scharf abgebildet werden.",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Auge","Linse","Akkommodation","Presbyopie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Haut & Thermoregulation: Wärmeabgabe",
    difficulty: "Leicht",
    questionText:
      "Wie reagiert die menschliche Haut physiologisch auf eine hohe Umgebungstemperatur von über 35 °C bei körperlicher Ruhe, um den Körper vor Überhitzung zu schützen?",
    options: [
          "Verengung der Hautblutgefäße und Aufrichten der Körperhaare (Gänsehaut)",
          "Vollständige Hemmung der Schweißbildung",
          "Erweiterung der oberflächlichen Blutgefäße (Wärmeabstrahlung) und Steigerung der Schweißdrüsensekretion (Verdunstungskälte)",
          "Ausschüttung von Melanin in das Unterhautfettgewebe",
          "Sofortiger Abbau der Hornschicht"
    ],
    correctAnswer: 2,
    explanation:
      "Um überschüssige Wärme abzugeben, erweitern sich die Blutgefäße der Haut (Vasodilatation), sodass mehr warmes Blut zur Körperoberfläche strömt und Wärme abstrahlt. Gleichzeitig sondern die Schweißdrüsen Schweiß ab: Bei dessen Verdunstung auf der Hautoberfläche wird dem Körper wirksam Verdunstungswärme entzogen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Haut","Thermoregulation","Schweißdrüsen","Gefäße"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Knochenumbau: Östrogeneinfluss & Osteoporose",
    difficulty: "Mittel",
    questionText:
      "Nach den Wechseljahren (Menopause) sinkt der Östrogenspiegel bei Frauen deutlich ab. Warum führt dieser Hormonabfall häufig zu einem vermehrten Verlust an Knochenmasse (Osteoporose)?",
    options: [
          "Östrogen bremst normalerweise den Knochenabbau; bei Östrogenmangel überwiegt die Aktivität der knochenabbauenden Osteoklasten gegenüber den Osteoblasten.",
          "Östrogen wandelt Knochen im Normalzustand direkt in Knorpelgewebe um.",
          "Ohne Östrogen können die Nieren kein Wasser mehr filtrieren.",
          "Östrogenmangel zerstört alle Sehnen und Bänder des Körpers.",
          "Bei Östrogenmangel scheiden die Knochenzellen reine Salzsäure in die Blutbahn aus."
    ],
    correctAnswer: 0,
    explanation:
      "Östrogene hemmen physiologisch die Aktivität und Lebensdauer der knochenabbauenden Osteoklasten. Fällt der Östrogenspiegel nach der Menopause ab, entfällt diese hemmende Wirkung: Die Osteoklasten bauen mehr Knochensubstanz ab, als die Osteoblasten neu aufbauen können, was zu porösen und bruchanfälligen Knochen (Osteoporose) führt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Knochen","Osteoklasten","Osteoblasten","Östrogen","Osteoporose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Bewegungsapparat: Sehne vs. Band (Funktion & Läsion)",
    difficulty: "Mittel",
    questionText:
      "Welcher funktionelle und anatomische Unterschied besteht zwischen dem Riss einer Sehne (z. B. der Achillessehne) und dem Riss eines Bandes (z. B. des Kreuzbandes)?",
    options: [
          "Sehnen stabilisieren Gelenke rein passiv; Bänder ziehen sich aktiv wie Muskeln zusammen.",
          "Bänder verbinden Muskeln mit Knochen; Sehnen verbinden Knochen mit Knochen.",
          "Ein Bänderriss verhindert jede Muskelkontraktion; ein Sehnenriss bleibt ohne Auswirkung.",
          "Sehnen übertragen die Zugkraft eines Muskels auf den Knochen (Sehnenriss → Verlust der aktiven Kraftübertragung); Bänder verbinden Knochen mit Knochen und stabilisieren Gelenke passiv (Bänderriss → Gelenkinstabilität).",
          "Sehnen bestehen aus Knorpel; Bänder bestehen rein aus Nervenfasern."
    ],
    correctAnswer: 3,
    explanation:
      "Sehnen (Tendines) verbinden Muskeln mit Knochen und dienen der aktiven Kraftübertragung: Reißt die Sehne, kann der Muskel zwar kontrahieren, die Kraft wird aber nicht auf das Skelett übertragen. Bänder (Ligamenta) verbinden Knochen mit Knochen und stabilisieren bzw. führen Gelenke passiv: Reißt ein Band, verliert das Gelenk seine Führung und wird instabil.",
    tags: ["BMS","Biologie","Der menschliche Körper","Skelett","Muskel","Sehne","Band","Gelenk"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauung: Cholestase, Fettemulgierung & Steatorrhoe",
    difficulty: "Mittel",
    questionText:
      "Ein Gallenstein verlegt den Hauptgallengang vollständig, sodass keine Gallenflüssigkeit in den Dünndarm abfließen kann. Welche direkte Auswirkung hat dies auf die Verdauung?",
    options: [
          "Proteine können im Magen nicht mehr denaturiert werden.",
          "Kohlenhydrate werden im Dünndarm nicht mehr gespalten.",
          "Die Schleimhaut der Speiseröhre wird sofort verätzt.",
          "Die Magensäureproduktion steigt auf das Zehnfache an.",
          "Aufgrund fehlender Gallensäuren können Fette im Dünndarm nicht mehr emulgiert werden, was zu unvollständiger Fettverdauung und fetthaltigem Stuhl (Steatorrhoe) führt."
    ],
    correctAnswer: 4,
    explanation:
      "Gallensäuren emulgieren Fette im Dünndarm in kleine Tröpfchen, damit die wasserlösliche Pankreaslipase sie spalten kann. Fehlt die Galle bei Gallengangsverschluss, bleiben die Fette ungespalten, werden unverdaut mit dem Stuhl ausgeschieden (Fettstuhl / Steatorrhoe) und die Aufnahme fettlöslicher Vitamine (E, D, K, A) wird behindert.",
    tags: ["BMS","Biologie","Der menschliche Körper","Leber","Galle","Verdauung","Fettverdauung","Dünndarm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set3-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Dünndarmarchitektur: Zottenatrophie & Malabsorption",
    difficulty: "Leicht",
    questionText:
      "Bei einer chronischen Zottenatrophie im Dünndarm (z. B. bei unbehandelter Zöliakie) flachen die Darmzotten ab. Welche physiologische Konsequenz hat dieser Strukturverlust für den Körper?",
    options: [
          "Das Lungenvolumen nimmt drastisch zu.",
          "Die für die Nährstoffaufnahme verfügbare Gesamtoberfläche des Dünndarms verringert sich massiv, was zu Mangelerscheinungen und Gewichtsverlust führt.",
          "Der Magen kann kein Pepsinogen mehr synthetisieren.",
          "Die Speiseröhre verliert ihre Peristaltik.",
          "Im Dickdarm kommt es zur Bildung von Knochengewebe."
    ],
    correctAnswer: 1,
    explanation:
      "Die Zotten und Mikrovilli des Dünndarms vergrößern die innere Oberfläche für die Nährstoffresorption um ein Vielfaches. Gehen diese Zotten bei chronischer Entzündung (Zottenatrophie) verloren, sinkt die Resorptionsfläche drastisch: Nährstoffe, Vitamine und Mineralien können nicht mehr ausreichend ins Blut aufgenommen werden (Malabsorption).",
    tags: ["BMS","Biologie","Der menschliche Körper","Dünndarm","Zotten","Resorption","Verdauung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-02-set4-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Gewebe — Übergangsepithel und Dehnungsfähigkeit",
    difficulty: "Mittel",
    questionText:
      "Ein Histologe untersucht Gewebe, das die Harnblase auskleidet und Dehnung beim Füllen aushalten muss. Welcher Gewebetyp liegt vor?",
    options: [
          "Einschichtiges Plattenepithel",
          "Übergangsepithel (Urothelium)",
          "Mehrschichtiges unverhorntes Plattenepithel",
          "Mehrreihiges Flimmerepithel",
          "Einschichtiges kubisches Epithel"
    ],
    correctAnswer: 1,
    explanation:
      "Das Übergangsepithel (Urothel) kleidet die ableitenden Harnwege (Nierenbecken, Ureter, Harnblase, Anfangsteil der Urethra) aus. Es ist durch seine Deckzellen (Crusta) speziell daran angepasst, starken Dehnungszuständen bei Füllung standzuhalten, ohne seine Barrierefunktion zu verlieren.",
    tags: ["BMS","Biologie","Der menschliche Körper","Gewebe","Epithel","Urothel","Harnblase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Gewebe — Fibroblasten und Kollagenproduktion bei der Wundheilung",
    difficulty: "Mittel",
    questionText:
      "Bei der Wundheilung bildet sich Granulationsgewebe. Welche Zellart produziert primär das Kollagen, das diesem Gewebe seine strukturelle Grundlage gibt?",
    options: [
          "Neutrophile Granulozyten",
          "Erythrozyten",
          "Chondrozyten",
          "Fibroblasten",
          "Osteoblasten"
    ],
    correctAnswer: 3,
    explanation:
      "Fibroblasten sind die wesentlichen Zellen des Bindegewebes. Während der Wundheilung wandern sie in das Wundbett ein und synthetisieren Kollagenfasern und Grundsubstanz der extrazellulären Matrix zur Stabilisierung des Granulationsgewebes.",
    tags: ["BMS","Biologie","Der menschliche Körper","Gewebe","Bindegewebe","Fibroblasten","Kollagen","Wundheilung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem — Surfactantmangel und Atemnotsyndrom",
    difficulty: "Schwer",
    questionText:
      "Ein Frühgeborenes mit unzureichender Surfactant-Produktion zeigt erschwerte Atmung. Welcher physiologische Effekt erklärt dies am direktesten?",
    options: [
          "Verminderte Oberflächenspannung in den Alveolen",
          "Erhöhte Lungencompliance",
          "Erhöhte Oberflächenspannung und Alveolarkollaps (Atelektase)",
          "Verbesserter Sauerstofftransport durch verdickte Alveolarwände",
          "Bronchokonstriktion der Bronchiolenmuskulatur"
    ],
    correctAnswer: 2,
    explanation:
      "Surfactant setzt physiologisch die Oberflächenspannung in den Alveolen herab. Fehlt Surfactant bei Frühgeborenen, führt die hohe Oberflächenspannung zum Kollaps der Lungenbläschen bei der Ausatmung (Atelektasen) und zu massiv erhöhter Atemarbeit (Atemnotsyndrom des Neugeborenen).",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Surfactant","Alveolen","Atemnotsyndrom"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem — Mechanik der ruhigen Exspiration",
    difficulty: "Leicht",
    questionText:
      "Während der ruhigen Ausatmung (Exspiration) findet primär welcher Prozess statt?",
    options: [
          "Passiver Rückstoß von Lunge und Thoraxwand aufgrund elastischer Rückstellkräfte",
          "Kontraktion des Zwerchfells",
          "Kontraktion der äußeren Interkostalmuskeln",
          "Absinken des intrapulmonalen Drucks unter den Atmosphärendruck",
          "Aktive Kontraktion der Bauchmuskulatur"
    ],
    correctAnswer: 0,
    explanation:
      "In Ruhe ist die Ausatmung ein rein passiver Prozess: Nach Erschlaffung der Inspirationsmuskeln (Zwerchfell, äußere Zwischenrippenmuskeln) ziehen sich das elastische Lungengewebe und die Thoraxwand passiv zusammen, wodurch Luft aus der Lunge gepresst wird.",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Exspiration","Atemmechanik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System — Insulin und Blutzuckersenkung",
    difficulty: "Leicht",
    questionText:
      "Nach einer kohlenhydratreichen Mahlzeit steigt der Blutzuckerspiegel. Welches Hormon wird sezerniert, um ihn wieder zu senken?",
    options: [
          "Glukagon",
          "Cortisol",
          "Wachstumshormon (STH)",
          "Insulin",
          "Schilddrüsenhormon (Thyroxin)"
    ],
    correctAnswer: 3,
    explanation:
      "Insulin (aus den β-Zellen des Pankreas) senkt als einziges Hormon den Blutzuckerspiegel, indem es den Glukosetransport in Muskel- und Fettzellen stimuliert und die Glykogen- sowie Fettspeicherung fördert.",
    tags: ["BMS","Biologie","Der menschliche Körper","Endokrines System","Insulin","Blutzucker","Pankreas"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System — Morbus Addison und Aldosteronmangel",
    difficulty: "Schwer",
    questionText:
      "Ein Patient mit Morbus Addison (Nebennierenrindeninsuffizienz) zeigt Müdigkeit, niedrigen Blutdruck und Hyperpigmentierung. Welcher Hormonmangel ist primär für den niedrigen Blutdruck verantwortlich?",
    options: [
          "Schilddrüsenhormon",
          "Aldosteron",
          "Insulin",
          "Parathormon",
          "Wachstumshormon"
    ],
    correctAnswer: 1,
    explanation:
      "Aldosteron (Mineralokortikoid der Nebennierenrinde) fördert in der Niere die Natrium- und Wasserrückresorption zur Aufrechterhaltung des Blutvolumens und Blutdrucks. Bei Nebennierenrindeninsuffizienz fehlt Aldosteron, was zu renalem Natrium-/Wasserverlust und Hypotonie führt.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nebenniere","Aldosteron","Hormone","Blutdruck"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem — Ovulation im Menstruationszyklus",
    difficulty: "Leicht",
    questionText:
      "Im regulären 28-tägigen Menstruationszyklus findet welches Ereignis typischerweise etwa 14 Tage nach Zyklusbeginn statt?",
    options: [
          "Beginn der Menstruation",
          "Progesteronspiegelmaximum",
          "Eisprung (Ovulation)",
          "Degeneration des Corpus luteum",
          "FSH-Minimum"
    ],
    correctAnswer: 2,
    explanation:
      "Bei einem 28-Tage-Zyklus erfolgt der Eisprung (Ovulation) typischerweise um den 14. Tag, getriggert durch den vorangehenden LH-Peak. Danach beginnt die Lutealphase mit Bildung des Gelbkörpers.",
    tags: ["BMS","Biologie","Der menschliche Körper","Zyklus","Ovulation","Eisprung","Fortpflanzung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem — Akrosomreaktion und Eizellpenetration",
    difficulty: "Mittel",
    questionText:
      "Ein Spermium dringt in die Zona pellucida einer Eizelle ein. Welche Struktur des Spermiums setzt hydrolytische Enzyme frei, die diesen Vorgang ermöglichen?",
    options: [
          "Akrosom (Acrosom)",
          "Flagellum (Geißel)",
          "Mitochondrienscheide (Mittelstück)",
          "Zellkern",
          "Zentriol"
    ],
    correctAnswer: 0,
    explanation:
      "Das Akrosom an der Spitze des Spermienkopfes ist ein spezialisiertes Lysosom, das hydrolytische Enzyme (z. B. Hyaluronidase, Akrosin) freisetzt (Akrosomreaktion), um die Gallerthülle und Zona pellucida der Eizelle zu durchdringen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Fortpflanzung","Spermium","Akrosom","Befruchtung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem — Glomerulus und Primärharnbildung",
    difficulty: "Leicht",
    questionText:
      "Welche Nephronstruktur ist primär für die Ultrafiltration des Blutes und die Bildung des Primärharns verantwortlich?",
    options: [
          "Proximaler Tubulus",
          "Henle-Schleife",
          "Distaler Tubulus",
          "Sammelrohr",
          "Glomerulus (Glomerulum)"
    ],
    correctAnswer: 4,
    explanation:
      "Der Glomerulus ist das kapilläre Gefäßknäuel im Nierenkörperchen, in dem das Blutplasma durch Druckfiltration (Glomeruläre Filtrationsrate ca. 180 l/Tag) als zell- und proteinfreier Primärharn in die Bowman-Kapsel filtriert wird.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Glomerulus","Filtration","Primärharn"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem — ADH und Wasserkonservierung bei Dehydratation",
    difficulty: "Schwer",
    questionText:
      "Ein Wanderer in einer heißen Wüste trinkt wenig Wasser. Welche Anpassung im Nephron fördert die Bildung von konzentriertem Urin?",
    options: [
          "Verminderte glomeruläre Filtrationsrate",
          "Erhöhte Natriumsekretion im proximalen Tubulus",
          "Verminderte Harnstoffrückresorption im Sammelrohr",
          "Erhöhte Wasserrückresorption im Sammelrohr unter ADH-Einfluss",
          "Erhöhte Kaliumsekretion im distalen Tubulus"
    ],
    correctAnswer: 3,
    explanation:
      "Bei Wassermangel schüttet die Hypophyse ADH (Vasopressin) aus, welches den Einbau von Wasserkanälen (Aquaporinen) in die Wände der Sammelrohre fördert. Dadurch wird Wasser osmotisch ins Nierenmark rückresorbiert und konzentrierter Harn gebildet.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","ADH","Sammelrohr","Harnkonzentrierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Linker Vorhof und Lungenvenen",
    difficulty: "Leicht",
    questionText:
      "Welche Herzhöhle empfängt das sauerstoffreiche Blut direkt aus den Lungen?",
    options: [
          "Rechter Vorhof",
          "Linker Vorhof (Atrium sinistrum)",
          "Rechte Herzkammer",
          "Linke Herzkammer",
          "Lungenarterie"
    ],
    correctAnswer: 1,
    explanation:
      "Das in den Lungenkapillaren mit Sauerstoff angereicherte Blut fließt über die vier Lungenvenen (Venae pulmonales) in den linken Vorhof des Herzens und von dort über die Mitralklappe in die linke Herzkammer.",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Kreislauf","Vorhof","Lungenkreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Herzklappenkonfiguration während der Systole",
    difficulty: "Mittel",
    questionText:
      "Während der Kammersystole (Austreibungsphase) sind welche Klappen geöffnet, um den Blutaustritt in die großen Schlagadern zu ermöglichen?",
    options: [
          "Mitralklappe und Trikuspidalklappe",
          "Mitralklappe und Aortenklappe",
          "Trikuspidalklappe und Pulmonalklappe",
          "Aortenklappe und Mitralklappe",
          "Aortenklappe und Pulmonalklappe"
    ],
    correctAnswer: 4,
    explanation:
      "Während der Kammersystole (Austreibungsphase) öffnen sich die Taschenklappen (Aortenklappe und Pulmonalklappe) durch den ventrikulären Druckanstieg. Gleichzeitig sind die Segelklappen (Mitralklappe und Trikuspidalklappe) geschlossen, um einen Rückstrom in die Vorhöfe zu verhindern.",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Herzklappen","Systole","Kreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System — Lungenarterie und kleiner Kreislauf",
    difficulty: "Mittel",
    questionText:
      "Welches Blutgefäß transportiert sauerstoffarmes Blut vom rechten Ventrikel zur Lunge?",
    options: [
          "Aorta",
          "Lungenvene",
          "Lungenarterie (Truncus / Arteria pulmonalis)",
          "Vena cava",
          "Koronararterie"
    ],
    correctAnswer: 2,
    explanation:
      "Arterien führen stets vom Herzen weg. Im kleinen Kreislauf (Lungenkreislauf) befördern die Lungenarterien (Truncus pulmonalis) sauerstoffarmes, venöses Blut vom rechten Ventrikel zu den Lungen zur Oxygenierung.",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Gefäße","Lungenarterie","Kreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem — B-Zellen und Antikörperproduktion",
    difficulty: "Leicht",
    questionText:
      "Welche Zellen produzieren während einer adaptiven Immunantwort spezifische Antikörper?",
    options: [
          "B-Lymphozyten (bzw. differenzierte Plasmazellen)",
          "T-Helferzellen",
          "Neutrophile Granulozyten",
          "Makrophagen",
          "Natürliche Killerzellen"
    ],
    correctAnswer: 0,
    explanation:
      "Bei Antigenkontakt differenzieren sich aktivierte B-Lymphozyten zu Plasmazellen, die als Proteinfabriken der humoralen Immunität hochspezifische Antikörper (Immunglobuline) sezernieren.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","B-Zellen","Plasmazellen","Antikörper"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem — Sekundäre Immunantwort nach Impfung",
    difficulty: "Schwer",
    questionText:
      "Eine Person wird gegen Tetanus geimpft. Einen Monat später wird sie dem Erreger Clostridium tetani ausgesetzt und erkrankt nicht. Welcher immunologische Mechanismus erklärt diesen Schutz am besten?",
    options: [
          "Sofortige Entzündungsreaktion vermittelt durch Histamin",
          "Passiver Transfer mütterlicher Antikörper",
          "Unspezifische Phagozytose durch Neutrophile",
          "Gedächtnis-B- und T-Zellen mit rascher Sekundärantwort",
          "Komplementvermittelte Lyse der Bakterien vor Infektion"
    ],
    correctAnswer: 3,
    explanation:
      "Durch die aktive Immunisierung bilden sich langlebige antigenspezifische Gedächtniszellen (Memory-Zellen). Bei erneutem Erregerkontakt reagiert das Immunsystem mit einer schnelleren, intensiveren Antikörperproduktion (Sekundärantwort), die den Erreger abfängt, bevor Symptome entstehen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","Gedächtniszellen","Impfung","Sekundärantwort"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Lymphatisches System — Thymus als primäres lymphatisches Organ",
    difficulty: "Mittel",
    questionText:
      "Welches Organ ist als primäres lymphatisches Organ einzustufen, in dem T-Lymphozyten heranreifen und selektioniert werden?",
    options: [
          "Lymphknoten",
          "Thymus",
          "Milz",
          "Gaumenmandel (Tonsilla palatina)",
          "Peyer-Plaques"
    ],
    correctAnswer: 1,
    explanation:
      "Die primären lymphatischen Organe sind das rote Knochenmark (Bildungsort aller Blutzellen/B-Zellreifung) und der Thymus (Reifungs- und Selektionsort der T-Lymphozyten). Lymphknoten, Milz, Mandeln und Peyer-Plaques sind sekundäre lymphatische Organe.",
    tags: ["BMS","Biologie","Der menschliche Körper","Lymphsystem","Thymus","T-Zellen","Organe"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Axon als Impulsleiter",
    difficulty: "Leicht",
    questionText:
      "Welcher Fortsatz eines Neurons leitet elektrische Impulse (Aktionspotenziale) vom Zellkörper weg zu anderen Neuronen oder Effektorzellen?",
    options: [
          "Dendrit",
          "Zellkörper (Soma)",
          "Axon (Neurit)",
          "Synaptisches Endknöpfchen",
          "Myelinscheide"
    ],
    correctAnswer: 2,
    explanation:
      "Das Axon (Neurit) entspringt am Axonhügel und leitet Aktionspotenziale vom Soma weg (efferente Erregungsleitung). Dendriten hingegen nehmen afferente Reize auf und leiten sie zum Soma hin.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Axon","Neuron","Reizleitung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Präsynaptischer Calciumeinstrom und Neurotransmitterfreisetzung",
    difficulty: "Schwer",
    questionText:
      "An einer chemischen Synapse tritt welches Ereignis unmittelbar ein, nachdem ein Aktionspotenzial das präsynaptische Endknöpfchen erreicht hat?",
    options: [
          "Spannungsgesteuerte Calciumkanäle öffnen sich, Calcium strömt in die Präsynapse ein",
          "Neurotransmitterrezeptoren an der präsynaptischen Membran aktivieren sich",
          "Kaliumausstrom löst die Vesikelfusion aus",
          "Die postsynaptische Membran depolarisiert sich vor dem Calciumeinstrom",
          "Natrium strömt direkt durch Gap Junctions in die postsynaptische Zelle"
    ],
    correctAnswer: 0,
    explanation:
      "Die Depolarisation der präsynaptischen Membran öffnet spannungsabhängige Ca²⁺-Kanäle. Der rasche Ca²⁺-Einstrom triggert die Fusion der synaptischen Vesikel mit der Membran und setzt Neurotransmitter in den Spalt frei.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Synapse","Calcium","Neurotransmitter"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem — Parasympathikus und Ruhephase",
    difficulty: "Leicht",
    questionText:
      "Welcher Teil des vegetativen Nervensystems dominiert in Phasen der Ruhe, Erholung und Verdauung (Rest and Digest)?",
    options: [
          "Sympathikus",
          "Somatisches Nervensystem",
          "Motorisches Nervensystem",
          "Sensorisches Nervensystem",
          "Parasympathikus"
    ],
    correctAnswer: 4,
    explanation:
      "Der Parasympathikus fördert Regeneration, Drüsensekretion und Verdauungstätigkeit bei gleichzeitiger Senkung der Herzfrequenz. Sein Gegenspieler, der Sympathikus, steuert Leistung und Notfallreaktionen (Fight or Flight).",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Parasympathikus","Vegetatives Nervensystem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane — Linsenakkommodation",
    difficulty: "Mittel",
    questionText:
      "Welche transparente Struktur des Auges ändert aktiv ihre Krümmung (Akkommodation), um Gegenstände in unterschiedlichen Entfernungen scharf auf der Netzhaut abzubilden?",
    options: [
          "Hornhaut (Cornea)",
          "Pupille",
          "Kammerwasser",
          "Augenlinse",
          "Glaskörper"
    ],
    correctAnswer: 3,
    explanation:
      "Die Augenlinse passt durch Kontraktion/Entspannung des Ziliarmuskels ihre Wölbung und Brechkraft dynamisch an (Akkommodation). Die Hornhaut hat zwar die stärkste Brechkraft, ist aber starr.",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Auge","Linse","Akkommodation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane — Corti-Organ und Schalltransduktion",
    difficulty: "Schwer",
    questionText:
      "Ein Patient erleidet eine Schädigung des Corti-Organs in der Hörschnecke, während die Bogengänge vollkommen intakt sind. Welches Defizit tritt primär auf?",
    options: [
          "Verlust des Drehsinns und des Gleichgewichts bei Kopfdrehung",
          "Unfähigkeit, mechanische Schallschwingungen in neuronale Signale umzuwandeln (Schwerhörigkeit/Taubheit)",
          "Unfähigkeit, Schallwellen über das Trommelfell ins Mittelohr zu leiten",
          "Verlust der Schmerzempfindung im Außenohr",
          "Beeinträchtigte Registrierung von Luftdruckänderungen"
    ],
    correctAnswer: 1,
    explanation:
      "Das Corti-Organ in der Cochlea (Hörschnecke) enthält die mechanosensiblen Haarzellen zur Schallwahrnehmung. Werden diese geschädigt, fällt die Transduktion von Flüssigkeitsschwingungen in Aktionspotenziale aus (sensorineuraler Hörverlust). Die Bogengänge dienen hingegen dem Drehgleichgewicht.",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Ohr","Cochlea","Corti-Organ","Hören"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Skelettsystem — Osteoklasten und Knochenresorption",
    difficulty: "Leicht",
    questionText:
      "Welche spezialisierten Zellen sind im Knochengewebe für den enzymatischen Abbau und die Resorption von mineralisierter Knochenmatrix verantwortlich?",
    options: [
          "Osteoblasten",
          "Chondrozyten",
          "Osteoklasten",
          "Fibroblasten",
          "Myoblasten"
    ],
    correctAnswer: 2,
    explanation:
      "Osteoklasten sind vielkernige Riesenzellen, die aus der Monozyten-/Makrophagen-Linie stammen. Sie geben Säuren und Enzyme (Proteinasen) ab, um mineralisierte Knochensubstanz abzubauen. Osteoblasten bauen Knochen auf.",
    tags: ["BMS","Biologie","Der menschliche Körper","Knochen","Osteoklasten","Skelettsystem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Skelettsystem — Sehnen und Zugfestigkeit",
    difficulty: "Mittel",
    questionText:
      "Eine Sehne verbindet Skelettmuskeln fest mit Knochen. Welche Eigenschaft ihres Gewebes ist für ihre physiologische Funktion am wesentlichsten?",
    options: [
          "Hohe Elastizität zur dauerhaften Dehnung bei Muskelanspannung",
          "Fähigkeit zur Sekretion von Synovialflüssigkeit",
          "Reiche Kapillarisierung für maximalen Nährstofftransport",
          "Fähigkeit zur spontanen Generierung von Aktionspotenzialen",
          "Hohe Zugfestigkeit durch parallel ausgerichtete Kollagenfaserbündel zur mechanischen Kraftübertragung"
    ],
    correctAnswer: 4,
    explanation:
      "Sehnen (Tendines) bestehen aus straffem, parallelfaserigem Bindegewebe. Ihre parallel angeordneten Kollagenfibrillen verleihen ihnen eine enorme Zugfestigkeit bei minimaler Dehnbarkeit, wodurch die Kontraktionskraft verlustarm auf das Skelett übertragen wird.",
    tags: ["BMS","Biologie","Der menschliche Körper","Skelett","Sehnen","Bindegewebe","Kollagen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem — Pankreatische Lipase und Fettabbau",
    difficulty: "Mittel",
    questionText:
      "Welches Enzym wird vom exokrinen Pankreas produziert und spaltet im Dünndarm Triglyzeride in freie Fettsäuren und Monoglyzeride?",
    options: [
          "Pankreaslipase",
          "Pepsin",
          "Speichelamylase",
          "Maltase",
          "Nuklease"
    ],
    correctAnswer: 0,
    explanation:
      "Die Pankreaslipase wird vom Pankreas in den Zwölffingerdarm abgegeben und spaltet dort emulgierte Nahrungsfette (Triglyzeride). Pepsin wirkt im sauren Magen auf Proteine; Amylase spaltet Kohlenhydrate.",
    tags: ["BMS","Biologie","Der menschliche Körper","Verdauung","Pankreas","Lipase","Enzyme"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set4-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem — Gallensalze und Fettemulgierung",
    difficulty: "Schwer",
    questionText:
      "Nach einer fettreichen Mahlzeit wird Galle in das Duodenum abgegeben. Welche ist die primäre Rolle der Gallensäuren bei der Fettverdauung?",
    options: [
          "Direkte enzymatische Hydrolyse von Triglyzeriden in Fettsäuren",
          "Aktivierung von Pepsinogen zu Pepsin",
          "Vollständige Neutralisation der Magensäure im Dickdarm",
          "Emulgierung großer Fetttropfen zu feinen Mizellen zur Oberflächenvergrößerung für die Lipase",
          "Synthese von Cholesterinestern im Magenlumen"
    ],
    correctAnswer: 3,
    explanation:
      "Gallensäuren besitzen amphiphile Eigenschaften und emulgieren große, wasserunlösliche Fetttropfen im wässrigen Speisebrei zu feinsten Mizellen. Dies vervielfacht die Angriffsfläche für das wasserlösliche Enzym Pankreaslipase.",
    tags: ["BMS","Biologie","Der menschliche Körper","Galle","Verdauung","Fettverdauung","Emulgierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-02-set5-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Gewebe: Epitheltypen, Organfunktion & mechanische Belastung",
    difficulty: "Mittel",
    questionText:
      "Welche Zuordnung von Organabschnitt, vorherrschendem Epitheltyp und funktioneller Anpassung ist vollkommen korrekt?",
    options: [
          "Magen-Darm-Trakt (Dünndarm) — mehrschichtiges verhorntes Plattenepithel — optimaler Schutz gegen Scherkräfte des Nahrungsbreis",
          "Respirationstrakt (Trachea) — einschichtiges Plattenepithel — maximaler Gasaustausch und Sauerstoffbindung an Erythrozyten",
          "Speiseröhre (Ösophagus) — mehrschichtiges unverhorntes Plattenepithel — mechanischer Gleit- und Abriebschutz beim Schlucken",
          "Harnblase — mehrreihiges Flimmerepithel — aktiver Transport von Harnsäure in Richtung Niere",
          "Lungenalveolen — Übergangsepithel — hohe Dehnbarkeit bei maximaler Vergrößerung des Totraumvolumens"
    ],
    correctAnswer: 2,
    explanation:
      "Die Speiseröhre (Ösophagus) ist starker mechanischer Reibung durch vorbeigleitende feste Nahrung ausgesetzt und wird daher von einem mehrschichtigen, unverhornten Plattenepithel geschützt. Der Dünndarm besitzt einschichtiges Zylinderepithel zur Resorption (A falsch), die Trachea mehrreihiges Flimmerepithel zum Schleimtransport (B falsch), die Harnblase Übergangsepithel/Urothel zur Dehnung (D falsch) und die Alveolen einschichtiges Plattenepithel zur Gasdiffusion (E falsch).",
    tags: ["BMS","Biologie","Der menschliche Körper","Gewebe","Epithel","Ösophagus","Histologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Gewebe: Vaskularisation & Regenerationsfähigkeit von Knochen vs. Knorpel",
    difficulty: "Mittel",
    questionText:
      "Warum heilt ein Bruch des Knochens (z. B. Femur) bei guter Ruhigstellung in der Regel innerhalb weniger Wochen durch funktionelle Gewebeneubildung, während ein Riss im hyalinen Gelenkknorpel kaum regeneriert?",
    options: [
          "Knochengewebe besteht ausschließlich aus lebenden Epithelzellen, während Knorpelgewebe rein aus totem Keratin aufgebaut ist.",
          "Knochengewebe ist über Havers- und Volkmann-Kanäle reich durchblutet und versorgt stoffwechselaktive Osteoblasten, während hyaliner Knorpel gefäßlos ist und seine Chondrozyten nur langsam per Diffusion aus der Synovia ernährt werden.",
          "Knorpelgewebe besitzt keine extrazelluläre Matrix und kann deshalb keine Kollagenfasern synthetisieren.",
          "Im Knochengewebe findet permanent Meiose statt, wodurch sich Osteozyten unbegrenzt teilen können.",
          "Knochen enthält kein Calciumphosphat, sodass der Gewebeumbau ohne mineralische Hindernisse abläuft."
    ],
    correctAnswer: 1,
    explanation:
      "Knochen ist ein hoch vaskularisiertes und stoffwechselaktives Stützgewebe. Blutgefäße in den Havers-Kanälen versorgen Osteoblasten rasch mit Nährstoffen, Sauerstoff und Mineralstoffen zur Kallusbildung. Knorpelgewebe hingegen ist beim Erwachsenen gefäß- und nervenfrei (Bradytrophie); Nährstoffe müssen mühsam durch die dichte Matrix diffundieren, weshalb Chondrozyten Knorpeldefekte kaum reparieren können.",
    tags: ["BMS","Biologie","Der menschliche Körper","Gewebe","Knochen","Knorpel","Regeneration","Blutgefäße"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem: Ficksches Diffusionsgesetz & Alveolargaswechsel",
    difficulty: "Schwer",
    questionText:
      "Die Diffusionsrate von Sauerstoff aus den Alveolen in die Lungenkapillaren hängt von physikalischen und anatomischen Faktoren ab. Welche Veränderung führt nach den Gesetzmäßigkeiten der Diffusion (Ficksches Diffusionsgesetz) zu einer Verschlechterung der Sauerstoffaufnahme ins Blut?",
    options: [
          "Eine Zunahme der Diffusionsstrecke durch Flüssigkeitseinlagerung in die Alveolarwand (Lungenödem) oder eine Abnahme der funktionellen Alveolaroberfläche",
          "Ein Anstieg des Sauerstoffpartialdruckgradienten zwischen Alveolarluft und Kapillarblut",
          "Eine Vergrößerung der respiratorischen Gesamtoberfläche durch tiefe Inspiration",
          "Eine Verdünnung der Blut-Luft-Schranke auf weniger als 0,2 Mikrometer",
          "Ein Absinken der Diffusionszeit bei gleichbleibender Austauschfläche"
    ],
    correctAnswer: 0,
    explanation:
      "Nach dem Fickschen Diffusionsgesetz ist der Gasaustausch proportional zur Austauschfläche (A) und zum Partialdruckgradienten (Delta P), jedoch umgekehrt proportional zur Diffusionsstrecke (d). Eine Verdickung der Membran (z. B. durch Ödemflüssigkeit) oder ein Verlust an Gasaustauschfläche (z. B. bei Emphysem) verringert die Diffusionsgeschwindigkeit von Sauerstoff drastisch.",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Diffusion","Alveolen","Gasaustausch"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Atmungssystem: Atemmechanik, Pleuraspalt & Druckverhältnisse",
    difficulty: "Mittel",
    questionText:
      "Welche Abfolge von biomechanischen und druckphysikalischen Ereignissen führt im Körper zur normalen Einatmung (Inspiration)?",
    options: [
          "Erschlaffung des Zwerchfells → Zunahme des intrapulmonalen Drucks über den Außendruck → Einstrom von Luft",
          "Kontraktion der Bauchmuskeln → Verkleinerung des Thoraxvolumens → passiver Unterdruck in der Trachea",
          "Öffnung der Pleurahöhle zur Außenluft → Einströmen von Luft in den Pleuraspalt → Lungenentfaltung",
          "Kontraktion und Absenkung des Zwerchfells → Vergrößerung des Thoraxinnenraums → Absinken des Drucks im Pleuraspalt und in den Alveolen unter den Atmosphärendruck → Lufteinstrom",
          "Passiver Rückstoß des Lungengewebes → Kompression der Alveolen → Gasdiffusion in den Pleuraraum"
    ],
    correctAnswer: 3,
    explanation:
      "Bei der Inspiration kontrahiert das Zwerchfell (senkt sich ab) und die äußeren Zwischenrippenmuskeln heben die Rippen an. Dadurch vergrößert sich das Thoraxvolumen. Der intrapleurale Druck sinkt weiter ab (wird negativer), die Lunge folgt der Thoraxwand elastisch, der intrapulmonale Alveolardruck sinkt unter den atmosphärischen Druck und Luft strömt entlang des Druckgradienten in die Lunge.",
    tags: ["BMS","Biologie","Der menschliche Körper","Atmung","Inspiration","Zwerchfell","Pleuraspalt","Druckgradient"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System: Hypothalamus-Hypophysen-Achse & Negative Rückkopplung",
    difficulty: "Mittel",
    questionText:
      "Ein Patient nimmt über längere Zeit hochdosierte synthetische Schilddrüsenhormone (Thyroxin/T4) ein. Wie verändern sich durch den physiologischen Regelkreis die Blutkonzentrationen von TRH (Hypothalamus) und TSH (Hypophysenvorderlappen)?",
    options: [
          "Sowohl TRH als auch TSH steigen massiv an, um die Schilddrüse weiter anzutreiben.",
          "TRH sinkt, während TSH auf das Zehnfache ansteigt.",
          "TRH und TSH bleiben unverändert, da Schilddrüsenhormone keine Rückkopplung ausüben.",
          "TSH sinkt ab, während TRH unbeeinflusst bleibt.",
          "Sowohl TRH als auch TSH sinken stark ab (negative Rückkopplung auf Hypothalamus und Hypophyse)."
    ],
    correctAnswer: 4,
    explanation:
      "Die Schilddrüsenhormone T3 und T4 unterliegen einem klassischen mehrstufigen negativen Rückkopplungsmechanismus (Hypothalamus-Hypophysen-Schilddrüsen-Achse): Hohe Konzentrationen von freiem T3/T4 im Blut hemmen sowohl die Freisetzung von TRH im Hypothalamus als auch die Ausschüttung von TSH im Hypophysenvorderlappen, um eine Überproduktion zu verhindern.",
    tags: ["BMS","Biologie","Der menschliche Körper","Endokrines System","Regelkreis","Rückkopplung","TSH","TRH","Schilddrüse"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Endokrines System: Insulin vs. Glukagon bei Fasten & Nahrungsaufnahme",
    difficulty: "Mittel",
    questionText:
      "Welche kombinierte hormonelle und metabolische Reaktion läuft im gesunden Organismus während einer 24-stündigen Fastenphase (Nahrungskarenz) ab?",
    options: [
          "Hohe Insulinsekretion → gesteigerte Glykogensynthese in der Leber → Absinken der Blutglukose auf null",
          "Gedrosselte Insulinsekretion und gesteigerte Glukagonausschüttung → Abbau von Leberglykogen (Glykogenolyse) und Neubildung von Glukose (Glukoneogenese) zur Aufrechterhaltung des Blutglukosespiegels",
          "Gleichzeitiger Maximalanstieg von Insulin und Glukagon → Umwandlung von Glukose in Knochensubstanz",
          "Vollständiger Stopp aller Stoffwechselvorgänge in Leber und Muskulatur",
          "Glukagon stimuliert die Aufnahme von Blutzucker in Fettzellen zur Fetteinlagerung"
    ],
    correctAnswer: 1,
    explanation:
      "Im Nüchternzustand/Fasten sinkt der Glukosespiegel leicht ab. Die Beta-Zellen des Pankreas drosseln die Insulinabgabe, während die Alpha-Zellen vermehrt Glukagon sezernieren. Glukagon stimuliert in der Leber den Glykogenabbau (Glykogenolyse) sowie die Glukoseneubildung (Glukoneogenese) aus Aminosäuren/Glycerin, um lebenswichtige Organe (vor allem das Gehirn) konstant mit Glukose zu versorgen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Endokrines System","Insulin","Glukagon","Pankreas","Blutzucker","Stoffwechsel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem: Hormonprofil & Endometriumphasen im Menstruationszyklus",
    difficulty: "Mittel",
    questionText:
      "Welcher Zusammenhang zwischen den Hormonkonzentrationen und den Veränderungen des Uterus (Gebärmutter) in der zweiten Zyklushälfte (Lutealphase / Sekretionsphase) ist biologisch zutreffend?",
    options: [
          "Der hohe FSH-Spiegel führt zur vollständigen Abstoßung des Endometriums am 18. Zyklustag.",
          "Das Fehlen von Östrogen verhindert die Durchblutung der Gebärmutterschleimhaut vollständig.",
          "Das vom Gelbkörper (Corpus luteum) gebildete Progesteron wandelt die zuvor durch Östrogene aufgebaute Gebärmutterschleimhaut in eine drüsenreiche, sekretorische Schicht um, die auf die Einnistung einer Blastozyste vorbereitet ist.",
          "Progesteron blockiert die Gefäßneubildung im Uterus und erzwingt den sofortigen Eisprung.",
          "Der LH-Peak erreicht am 25. Zyklustag sein Maximum und leitet die Menstruationsblutung ein."
    ],
    correctAnswer: 2,
    explanation:
      "In der ersten Zyklushälfte (Follikelphase) bewirken Östrogene den Wiederaufbau des Endometriums (Proliferationsphase). Nach der Ovulation produziert das Corpus luteum große Mengen Progesteron. Progesteron überführt das Endometrium in die Sekretionsphase: Drüsen wachsen geschlängelt, speichern Glykogen und die Schleimhaut wird optimal für die Einnistung der befruchteten Eizelle durchblutet.",
    tags: ["BMS","Biologie","Der menschliche Körper","Fortpflanzung","Zyklus","Progesteron","Östrogen","Endometrium"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Fortpflanzungssystem: Spermatogenese, Leydig- & Sertoli-Zellen",
    difficulty: "Schwer",
    questionText:
      "Welche Aussage beschreibt das funktionelle Zusammenspiel der Zellen im Hoden bei der Spermatogenese korrekt?",
    options: [
          "Leydig-Zwischenzellen produzieren unter Stimulation durch LH Testosteron, während Sertoli-Zellen unter FSH-Einfluss die heranreifenden Samenzellen ernähren und die Blut-Hoden-Schranke bilden.",
          "Sertoli-Zellen teilen sich meiotisch zu Spermien, während Leydig-Zellen ausschließlich der Knorpelbildung dienen.",
          "Leydig-Zellen sezernieren Progesteron im Nebenhoden; Sertoli-Zellen bauen Spermien vor der Ejakulation enzymatisch ab.",
          "FSH stimuliert direkt die Leydig-Zellen zur Testosteronsekretion; LH ernährt die Stammzellen.",
          "Die Spermienbildung erfolgt unabhängig von Hormonen rein durch osmotischen Druck im Hodennetz."
    ],
    correctAnswer: 0,
    explanation:
      "Im Hoden stimulieren die beiden Hypophysenhormone zwei Zelltypen: (1) LH stimuliert die interstitiellen Leydig-Zellen zur Synthese des männlichen Sexualhormons Testosteron. (2) FSH wirkt auf die Sertoli-Stützzellen in den Hodenkanälchen, welche die Keimzellen stützen, ernähren, die Blut-Hoden-Schranke aufrechterhalten und die Spermatogenese steuern.",
    tags: ["BMS","Biologie","Der menschliche Körper","Fortpflanzung","Hoden","Spermatogenese","Leydig-Zellen","Sertoli-Zellen","LH","FSH"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem: Glomeruläre Filtration vs. tubuläre Rückresorption",
    difficulty: "Leicht",
    questionText:
      "Warum enthält der Primärharn eines gesunden Menschen dieselbe Glukosekonzentration wie das Blutplasma, während im fertigen Endharn im Normalfall keine Glukose nachweisbar ist?",
    options: [
          "Glukose wird im Glomerulus vollständig abgebaut und erst in der Harnblase neu synthetisiert.",
          "Die Glukosemoleküle diffundieren im Sammelrohr passiv in die ableitenden Harnwege.",
          "Glukose kann den Podozytenfilter wegen ihrer elektrischen Ladung nicht passieren.",
          "Glukose wird aufgrund ihrer geringen Molekülgröße im Glomerulus frei in den Primärharn filtriert und im proximalen Tubulus über sekundär-aktive Transporter vollständig ins Blut rückresorbiert.",
          "Das Hormon Aldosteron zerstört alle filtrierten Glukosemoleküle in der Henle-Schleife."
    ],
    correctAnswer: 3,
    explanation:
      "Die Filtrationsmembran des Glomerulus hält nur Blutzellen und Makromoleküle (Proteine) zurück; kleine Moleküle wie Glukose, Aminosäuren und Elektrolyte treten ungehindert in den Primärharn über. Im proximalen Tubulus wird die gesamte filtrierte Glukose über spezifische Natrium-Glukose-Kotransporter (sekundär-aktiver Transport) vollständig zurück ins Kapillarblut resorbiert (solange die renale Transportschwelle nicht überschritten wird).",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Glomerulus","Proximaler Tubulus","Glukose","Resorption"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Harnsystem: Mehrstufige Osmoregulation & ADH-Wirkung",
    difficulty: "Schwer",
    questionText:
      "Eine Person verliert über mehrere Stunden hinweg durch starkes Schwitzen bei schwerer körperlicher Arbeit viel Wasser, ohne zu trinken. Welche Kombination aus Blutveränderung, Hormonausschüttung und Nierenreaktion läuft im Organismus ab?",
    options: [
          "Abfall der Plasmaosmolarität → Hemmung von ADH → verminderte Wasserrückresorption im Sammelrohr → Ausscheidung großer Mengen verdünnten Urins",
          "Anstieg der Plasmaosmolarität → Stimulation der ADH-Freisetzung aus der Neurohypophyse → gesteigerter Einbau von Wasserkanälen (Aquaporinen) in den Sammelrohren → erhöhte Wasserrückresorption → Ausscheidung eines kleinen Volumens stark konzentrierten Harns",
          "Anstieg der Plasmaosmolarität → massive Insulinausschüttung → Einlagerung von freiem Wasser in Fettzellen",
          "Abfall der Plasmaosmolarität → Anstieg von ADH → vollständige Blockade der glomerulären Filtration",
          "Anstieg der Plasmaosmolarität → Drosselung von ADH → sofortige Ausscheidung des gesamten Primärharns"
    ],
    correctAnswer: 1,
    explanation:
      "Schweiß ist hypoton; reiner Wasserverlust erhöht die Ionenkonzentration und damit die Osmolarität des Blutplasmas. Osmorezeptoren im Hypothalamus registrieren dies und triggern die Ausschüttung von ADH (Vasopressin) aus der Neurohypophyse. ADH führt zum Einbau von Aquaporinen in die Sammelrohre der Niere: Wasser wird osmotisch ins hyperosmolare Nierenmark rückresorbiert, der Körper spart Wasser und scheidet hochkonzentrierten Urin in geringer Menge aus.",
    tags: ["BMS","Biologie","Der menschliche Körper","Niere","Osmoregulation","ADH","Wasserhaushalt","Sammelrohr"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System: Vollständiger Kreislaufweg & Sauerstoffgehalt",
    difficulty: "Schwer",
    questionText:
      "Welche Route nimmt ein rotes Blutkörperchen ausgehend von den Kapillaren der Beinmuskulatur auf seinem Weg in das Gehirn unter Berücksichtigung von Klappen und Sauerstoffgehalt?",
    options: [
          "Vena cava inferior (sauerstoffarm) → linker Vorhof → Mitralklappe → linke Kammer → Aorta → Gehirn",
          "Vena cava inferior (sauerstoffreich) → rechte Kammer → Aortenklappe → Lungenarterie → Gehirn",
          "Vena cava inferior → rechter Vorhof → Mitralklappe → linke Kammer → Lungenvene → Gehirn",
          "Aorta → Vena pulmonalis → Trikuspidalklappe → Lungenarterie → Gehirn",
          "Vena cava inferior (sauerstoffarm) → rechter Vorhof → Trikuspidalklappe → rechte Kammer → Pulmonalklappe → Lungenarterie → Lungenkapillaren (Oxygenierung) → Lungenvenen (sauerstoffreich) → linker Vorhof → Mitralklappe → linke Kammer → Aortenklappe → Aorta → Gehirnarterien"
    ],
    correctAnswer: 4,
    explanation:
      "Das sauerstoffarme Blut aus der unteren Körperhälfte fließt über die Vena cava inferior in den rechten Vorhof, passiert die Trikuspidalklappe zur rechten Kammer und wird über die Pulmonalklappe in die Lungenarterie gepumpt. Nach dem Gasaustausch in den Lungenkapillaren gelangt das nun sauerstoffreiche Blut über die Lungenvenen in den linken Vorhof, über die Mitralklappe in die linke Kammer und wird durch die Aortenklappe in die Aorta und weiter in die Kopf-/Gehirnarterien ausgeworfen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Herz","Kreislauf","Herzklappen","Lungenkreislauf","Körperkreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System: Blutdruckregulation & Barorezeptorreflex",
    difficulty: "Schwer",
    questionText:
      "Beim abrupten Aufstehen aus dem Liegen sackt durch die Schwerkraft vorübergehend Blut in die unteren Extremitäten, wodurch der Blutdruck im Bereich der oberen Körperhälfte kurzzeitig abfällt. Wie stellt der Barorezeptorreflex den arteriellen Blutdruck rasch wieder ein?",
    options: [
          "Die Barorezeptoren im Karotissinus und Aortenbogen registrieren den verminderten Druck → das Kreislaufzentrum im Hirnstamm aktiviert den Sympathikus → Anstieg der Herzfrequenz, Steigerung der Kontraktionskraft des Herzens und Vasokonstriktion peripherer Gefäße zur Blutdrucknormalisierung",
          "Die Barorezeptoren schütten direkt Insulin aus, um das Blutvolumen in den Venen zu verdoppeln.",
          "Der Parasympathikus senkt die Herzfrequenz auf 30 Schläge pro Minute, um Energie zu sparen.",
          "Die Nieren stoppen sofort die Ausscheidung von Kohlenstoffdioxid über die Lunge.",
          "Die Aortenklappe schließt sich dauerhaft, bis der Patient sich wieder hinlegt."
    ],
    correctAnswer: 0,
    explanation:
      "Der Barorezeptorreflex ist der schnellste neuronale Regelkreis zur Blutdruckstabilisierung: Sinkt der arterielle Druck, sinkt die Dehnung der Barorezeptoren (im Sinus caroticus und Arcus aortae). Als Antwort drosselt das vegetative Kreislaufzentrum im Hirnstamm den Parasympathikus und aktiviert den Sympathikus: Die Herzfrequenz steigt, das Schlagvolumen nimmt zu und die Gefäße verengen sich (Vasokonstriktion), wodurch der Blutdruck sofort wieder auf das Sollniveau angehoben wird.",
    tags: ["BMS","Biologie","Der menschliche Körper","Kreislauf","Blutdruck","Barorezeptoren","Sympathikus","Reflex"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Herz-Kreislauf-System: AB0- und Rhesus-System & Transfusion",
    difficulty: "Mittel",
    questionText:
      "Ein Patient mit der Blutgruppe A Rhesus-negativ (A Rh-) benötigt nach einem Unfall dringend Erythrozytenkonzentrate. Welche Antikörper besitzt er natürlicherweise im Blutplasma und welche Erythrozytenkonzentrate darf er gefahrlos erhalten?",
    options: [
          "Er besitzt Anti-A-Antikörper im Plasma; er darf Konzentrate der Gruppen B Rh+ und AB Rh+ erhalten.",
          "Er besitzt keine Antikörper; er kann Blut jeder beliebigen Blutgruppe (Universalempfänger) erhalten.",
          "Er besitzt Anti-B-Antikörper im Plasma; er darf Erythrozytenkonzentrate der Gruppen A Rh- und 0 Rh- erhalten.",
          "Er besitzt Anti-0-Antikörper; er darf ausschließlich AB Rh- erhalten.",
          "Er besitzt Anti-D-Antikörper von Geburt an; er darf nur 0 Rh+ erhalten."
    ],
    correctAnswer: 2,
    explanation:
      "Personen mit Blutgruppe A tragen das Antigen A auf den Erythrozyten und besitzen von Natur aus reguläre Antikörper gegen das fehlende Antigen (Anti-B-Antikörper) im Plasma. Zudem darf ein Rh-negativer Patient keine Rh-positiven Erythrozyten erhalten (Gefahr der Sensibilisierung gegen das D-Antigen). Kompatibel sind daher nur Spender-Erythrozyten ohne B-Antigen und ohne Rhesusfaktor: Gruppe A Rh- sowie Gruppe 0 Rh- (Universalspender für Erythrozyten).",
    tags: ["BMS","Biologie","Der menschliche Körper","Blut","Blutgruppen","AB0-System","Rhesusfaktor","Antikörper"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem: Zusammenspiel von angeborener & adaptiver Abwehr",
    difficulty: "Mittel",
    questionText:
      "Wie arbeiten Zellen der angeborenen und der adaptiven Immunabwehr bei der ersten Begegnung mit einem bakteriellen Erreger koordiniert zusammen?",
    options: [
          "Bakterien werden ausschließlich von roten Blutkörperchen aufgelöst, die danach zu Antikörpern zerfallen.",
          "Zytotoxische T-Zellen bilden sofort Granulozyten, die das Bakterium über die Niere ausscheiden.",
          "B-Zellen zerstören Bakterien rein mechanisch durch Geißelbewegungen.",
          "Phagozyten (wie Makrophagen oder dendritische Zellen) nehmen Erreger unspezifisch auf, verdauen sie und präsentieren spezifische Antigenfragmente auf ihrer Zelloberfläche (MHC-Moleküle), um passende T-Helferzellen der adaptiven Abwehr zu aktivieren.",
          "Das adaptive Immunsystem produziert vor dem ersten Erregerkontakt bereits fertige T-Killerzellen ohne Antigenkontakt."
    ],
    correctAnswer: 3,
    explanation:
      "Die angeborene Abwehr reagiert rasch und unspezifisch: Makrophagen und dendritische Zellen phagozytieren Erreger, zerkleinern deren Proteine und präsentieren antigene Peptide gebunden an MHC-Klasse-II-Komplexe (Antigenpräsentation). Dies schlägt die Brücke zur adaptiven Abwehr: Spezifische T-Helferzellen erkennen das präsentierte Antigen, schütten Zytokine aus und aktivieren wiederum B-Lymphozyten zur Antikörperbildung sowie zytotoxische T-Zellen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","Makrophagen","T-Zellen","Antigenpräsentation","MHC"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Immunsystem: Primäre vs. Sekundäre Immunantwort & Antikörperklassen",
    difficulty: "Mittel",
    questionText:
      "Warum führt der Zweitkontakt mit demselben Krankheitserreger (z. B. nach überstandener Infektion oder Impfung) in der Regel nicht zum erneuten Krankheitsausbruch?",
    options: [
          "Weil die Erreger beim Zweitkontakt ihre Virulenzgene spontan verlieren.",
          "Weil antigenspezifische Gedächtnis-B- und Gedächtnis-T-Zellen im Körper verbleiben, die bei erneutem Antigenkontakt extrem rasch zu Effektorzellen proliferieren und in kurzer Zeit große Mengen hochaffiner Antikörper (v. a. IgG) produzieren.",
          "Weil das Knochenmark beim Zweitkontakt ausschließlich unspezifisches Histamin ausschüttet.",
          "Weil die Hautbarriere nach einer Infektion für alle Erreger luftdicht verschlossen bleibt.",
          "Weil die primäre Immunantwort erst nach mehreren Jahren einsetzt."
    ],
    correctAnswer: 1,
    explanation:
      "Bei der Primärantwort vergehen nach Erstkontakt mehrere Tage, bis naive Lymphozyten proliferieren und Antikörper (zunächst IgM, später IgG) bilden. Ein Teil der aktivierten Zellen differenziert sich zu langlebigen Gedächtniszellen (Memory-Zellen). Bei einem Zweitkontakt erkennen diese das Antigen sofort (Sekundärantwort): Es kommt ohne zeitliche Verzögerung zu einer massiven Produktion hochspezifischer IgG-Antikörper, die den Erreger neutralisieren, bevor Symptome auftreten.",
    tags: ["BMS","Biologie","Der menschliche Körper","Immunsystem","Gedächtniszellen","Antikörper","IgG","Sekundärantwort"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Lymphsystem: Flüssigkeitsdynamik, Starling-Kräfte & Lymphödem",
    difficulty: "Schwer",
    questionText:
      "Im kapillären Gefäßbett wird Flüssigkeit filtriert und rückresorbiert. Welche physiologische Aussage beschreibt den Zusammenhang zwischen Blutkapillaren, Interstitium und Lymphsystem korrekt?",
    options: [
          "Der gesamte filtrierte Flüssigkeitsanteil wird zu 100 % über die arteriellen Kapillaren aktiv zurückgepumpt.",
          "Das Lymphsystem transportiert ausschließlich roten Blutfarbstoff direkt vom Herzen in die Milz.",
          "Die Lymphgefäße besitzen keinen Anschluss an den venösen Blutkreislauf und enden blind im Magen.",
          "In den Lymphkapillaren herrscht ein höherer hydrostatischer Druck als in der Aorta.",
          "Durch den hydrostatischen Blutdruck tritt im Kapillarbett mehr Flüssigkeit ins Gewebe aus als durch den kolloidosmotischen Druck wieder rückresorbiert wird; der verbleibende Überschuss (ca. 2–3 Liter/Tag) wird als Lymphe über Lymphbahnen abtransportiert und über die großen Venen dem Blutkreislauf zurückgeführt."
    ],
    correctAnswer: 4,
    explanation:
      "An den arteriellen Kapillarschenkeln überwiegt der hydrostatische Druck (Filtration ins Interstitium), an den venösen Schenkeln der kolloidosmotische Druck der Plasmaproteine (Reabsorption). Täglich verbleibt eine Netto-Flüssigkeitsmenge von ca. 2–3 Litern im Gewebe. Diese interstitielle Flüssigkeit wird von den blind beginnenden Lymphkapillaren aufgenommen, in Lymphknoten gefiltert und über den Ductus thoracicus in den venösen Venenwinkel geleitet. Eine Blockade führt zum Lymphödem.",
    tags: ["BMS","Biologie","Der menschliche Körper","Lymphsystem","Lymphe","Kapillaren","Interstitium","Ödem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem: Aktionspotenzial, Ionenströme & Refraktärzeit",
    difficulty: "Leicht",
    questionText:
      "Welche Ionenbewegungen an der Axonmembran laufen während der Depolarisations- und Repolarisationsphase eines typischen Aktionspotenzials nacheinander ab?",
    options: [
          "Depolarisation: Rascher Einstrom von Natriumionen ($Na^+$) durch spannungsabhängige Natriumkanäle; Repolarisation: Ausstrom von Kaliumionen ($K^+$) durch verzögert öffnende Kaliumkanäle",
          "Depolarisation: Ausstrom von Chloridionen; Repolarisation: Einstrom von Proteinen",
          "Depolarisation: Massiver Ausstrom von Calcium; Repolarisation: Einstrom von Kalium",
          "Depolarisation: Einstrom von Kaliumionen; Repolarisation: Ausstrom von Natriumionen",
          "Depolarisation und Repolarisation laufen rein über die Natrium-Kalium-Pumpe ohne Beteiligung von Ionenkanälen ab"
    ],
    correctAnswer: 0,
    explanation:
      "Wird das Schwellenpotenzial erreicht, öffnen sich schlagartig spannungsgesteuerte $Na^+$-Kanäle: $Na^+$ strömt entlang des elektrochemischen Gradienten in die Zelle ein (Depolarisation bis ca. +30 mV). Danach inaktivieren die $Na^+$-Kanäle und spannungsabhängige $K^+$-Kanäle öffnen sich verzögert: $K^+$ strömt aus der Zelle aus, wodurch das Membranpotenzial wieder in den negativen Bereich zurückkehrt (Repolarisation).",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Aktionspotenzial","Natrium","Kalium","Depolarisation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem: Saltatorische Erregungsleitung & Myelinscheide",
    difficulty: "Mittel",
    questionText:
      "Warum leiten myelinisierte (markhaltige) Nervenfasern Aktionspotenziale um ein Vielfaches schneller und energetisch sparsamer weiter als unmyelinisierte (marklose) Nervenfasern?",
    options: [
          "Weil das Myelin kontinuierlich Sauerstoff an das Axoplasma abgibt.",
          "Weil in myelinisierten Fasern Aktionspotenziale mechanisch über Bindegewebsfäden übertragen werden.",
          "Weil die Myelinscheide das Axon elektrisch isoliert und Aktionspotenziale sprunghaft nur an den nicht isolierten Ranvier-Schnürringen regeneriert werden (saltatorische Erregungsleitung), wodurch die $Na^+/K^+$-Pumpe nur an den Knoten Ionen zurückpumpen muss.",
          "Weil unmyelinisierte Fasern keine Natriumkanäle besitzen.",
          "Weil bei der saltatorischen Leitung kein Membranpotenzial aufgebaut wird."
    ],
    correctAnswer: 2,
    explanation:
      "Myelinscheiden (gebildet von Schwann-Zellen im PNS bzw. Oligodendrozyten im ZNS) isolieren das Axon elektrisch. Aktionspotenziale entstehen nur an den Lücken der Myelinschicht, den Ranvier-Schnürringen, wo spannungsgesteuerte $Na^+$-Kanäle hochkonzentriert sind. Die Erregung 'springt' elektrotonisch von Schnürring zu Schnürring (saltatorische Erregungsleitung), was die Leitungsgeschwindigkeit drastisch erhöht (bis zu 120 m/s) und Energie spart.",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Myelin","Ranvier-Schnürring","Saltatorische Erregungsleitung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Nervensystem: Vegetative Organinnervation (Sympathikus vs. Parasympathikus)",
    difficulty: "Mittel",
    questionText:
      "Welche Organreaktionen werden im menschlichen Körper bei Aktivierung des Sympathikus (z. B. in einer akuten Fluchtsituation) parallel ausgelöst?",
    options: [
          "Verengung der Pupillen (Miosis), Steigerung der Magensäuresekretion und Senkung des Blutdrucks",
          "Senkung der Herzfrequenz, Verengung der Bronchien und Entleerung der Harnblase",
          "Vollständige Lähmung der Skelettmuskulatur und Verlangsamung der Atmung",
          "Erweiterung der Pupillen (Mydriasis), Steigerung der Herzfrequenz und Kontraktionskraft, Erweiterung der Bronchien (Bronchodilatation) sowie Hemmung der Magen-Darm-Motilität",
          "Verdopplung der Speichelsekretion bei gleichzeitiger Verengung der Koronararterien"
    ],
    correctAnswer: 3,
    explanation:
      "Der Sympathikus versetzt den Organismus in Leistungs- und Alarmbereitschaft (Fight or Flight): Er erweitert die Pupillen (Mydriasis für bessere Übersicht), steigert Herzfrequenz und Herzkraft, dilatiert die Bronchien zur verbesserten Sauerstoffaufnahme und drosselt energieaufwendige Verdauungs- und Ausscheidungsprozesse (Hemmung von Darmperistaltik und Drüsensekretion).",
    tags: ["BMS","Biologie","Der menschliche Körper","Nervensystem","Sympathikus","Vegetatives Nervensystem","Organinnervation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane: Netzhautarchitektur (Stäbchen vs. Zapfen)",
    difficulty: "Mittel",
    questionText:
      "Welche funktionellen und anatomischen Unterschiede bestehen zwischen den beiden Fotorezeptortypen der menschlichen Netzhaut (Retina)?",
    options: [
          "Zapfen sind rein für das Dämmerungssehen zuständig; Stäbchen vermitteln das Farbsehen bei hellem Tageslicht.",
          "Stäbchen befinden sich ausschließlich in der Fovea centralis (Sehgrube); Zapfen liegen nur am Rand der Netzhaut.",
          "Stäbchen besitzen drei verschiedene Sehpigmente für Rot, Grün und Blau; Zapfen enthalten nur Rhodopsin.",
          "Zapfen sind lichtempfindlicher als Stäbchen und ermöglichen das Sehen bei völliger Dunkelheit.",
          "Stäbchen sind extrem lichtempfindlich und ermöglichen das Hell-Dunkel- und Dämmerungssehen (skotopisches Sehen); Zapfen besitzen eine höhere Reizschwelle, sind in der Fovea centralis am dichtesten gepackt und ermöglichen scharfes Sehen sowie Farbsehen (photopisches Sehen)."
    ],
    correctAnswer: 4,
    explanation:
      "Die menschliche Netzhaut besitzt zwei Fotorezeptortypen: (1) Stäbchen (ca. 120 Mio.) enthalten den Sehfarbstoff Rhodopsin, sind extrem lichtempfindlich, können jedoch keine Farben unterscheiden (Schwarz-Weiß- und Dämmerungssehen). (2) Zapfen (ca. 6 Mio.) sind für das photopische Sehen bei Tag, hohe Sehschärfe und das Farbsehen (drei Typen: Rot-, Grün-, Blau-Opsin) zuständig; im Punkt des schärfsten Sehens (Fovea centralis) befinden sich ausschließlich Zapfen.",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Auge","Retina","Stäbchen","Zapfen","Farbsehen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Sinnesorgane: Hör- & Gleichgewichtsorgan im Innenohr",
    difficulty: "Schwer",
    questionText:
      "Welche Zuordnung beschreibt die Reizumwandlung (Transduktion) in den spezialisierten Sinnesstrukturen des menschlichen Innenohrs korrekt?",
    options: [
          "Die Bogengänge enthalten Otolithen zur Wahrnehmung von Schalldruck; das Corti-Organ misst die Körpertemperatur.",
          "In der Cochlea wandeln die Haarzellen des Corti-Organs Flüssigkeitsschwingungen der Basilarmembran in elektrische Impulse um (Hörsinn); die drei Bogengänge registrieren Drehbewegungen (Drehbeschleunigung) des Kopfes über die Auslenkung der Cupula.",
          "Die Gehörknöchelchen liegen in der Schnecke und erzeugen Aktionspotenziale durch direkte Muskelkontraktion.",
          "Das Trommelfell leitet Lichtimpulse an die Eustachische Röhre weiter.",
          "Die Maculae von Utriculus und Sacculus dienen ausschließlich der Wahrnehmung von hohen Tönen."
    ],
    correctAnswer: 1,
    explanation:
      "Im Innenohr liegen Hör- und Gleichgewichtsorgan in engem räumlichen Kontakt: (1) In der Cochlea (Hörschnecke) versetzen Schallwellen die Lymphflüssigkeit in Schwingung; die Auslenkung der Basilarmembran im Corti-Organ schert die Stereozilien der Haarzellen ab, was zur Reizweiterleitung über den Hörnerv führt. (2) Das Vestibularorgan besteht aus den drei Bogengängen (Drehbeschleunigung/Rotationssinn) sowie Utriculus und Sacculus mit ihren Otolithenorganen (Linearbeschleunigung und Gravitation).",
    tags: ["BMS","Biologie","Der menschliche Körper","Sinnesorgane","Ohr","Cochlea","Corti-Organ","Bogengänge","Gleichgewicht"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Haut: Schichtenarchitektur & Thermoregulation",
    difficulty: "Leicht",
    questionText:
      "Welche koordinierte Reaktion der Haut und ihrer Blutgefäße findet bei starker Erhöhung der Umgebungstemperatur (Hitzebelastung) statt, um eine Überhitzung des Körpers zu verhindern?",
    options: [
          "Erweiterung kutaner Blutgefäße (Vasodilatation) zur Steigerung der Wärmeabstrahlung an die Umgebung plus Aktivierung der ekkrinen Schweißdrüsen zur Verdunstungskühlung",
          "Verengung aller Hautkapillaren (Vasokonstriktion) und sofortiges Muskelzittern",
          "Verhornung der Dermis zur vollständigen Blockade der Wärmeabgabe",
          "Aufrichten der Körperhaare (Gänsehaut) durch Kontraktion der Mm. arrectores pilorum zur maximalen Wärmespeicherung",
          "Drosselung der Schweißproduktion zur Schonung des Wasserhaushalts"
    ],
    correctAnswer: 0,
    explanation:
      "Zur Thermoregulation bei Hitze steuert das thermoregulatorische Zentrum im Hypothalamus zwei Hauptmechanismen der Haut an: (1) Vasodilatation der oberflächlichen Blutgefäße in der Dermis (Hautrötung), wodurch warmes Blut vermehrt an die Körperoberfläche strömt und Wärme über Strahlung/Konvektion abgibt; (2) Stimulation der ekkrinen Schweißdrüsen: Das Verdampfen von Schweiß auf der Hautoberfläche entzieht dem Körper Verdunstungswärme (effektivste Kühlung).",
    tags: ["BMS","Biologie","Der menschliche Körper","Haut","Thermoregulation","Schweißdrüsen","Vasodilatation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Skelett- & Muskelsystem: Molekularer Querbrückenzyklus & Calcium",
    difficulty: "Schwer",
    questionText:
      "Welche molekularen Schritte führen bei der Kontraktion einer Skelettmuskelfaser zur Verkürzung des Sarkomers?",
    options: [
          "Natrium bindet an Kollagenfasern → die Z-Scheiben lösen sich vollständig auf",
          "ATP-Spaltung erzeugt neue Aktinfilamente, die durch das Sarkoplasma schwimmen",
          "Troponin zieht Myosin ohne Energieverbrauch dauerhaft zusammen",
          "Einlaufendes Aktionspotenzial → Freisetzung von Calciumionen ($Ca^{2+}$) aus dem sarkoplasmatischen Retikulum → $Ca^{2+}$ bindet an Troponin → Tropomyosin gibt Myosinbindestellen auf Aktin frei → Myosinköpfe binden an Aktin und kippen unter ATP-Spaltung (Kraftschlag)",
          "Calcium zerstört die Myosinköpfchen, sodass Aktin ungehindert gleiten kann"
    ],
    correctAnswer: 3,
    explanation:
      "Die elektromechanische Kopplung im Skelettmuskel: Das Aktionspotenzial führt zur Freisetzung von $Ca^{2+}$ aus dem sarkoplasmatischen Retikulum (SR). $Ca^{2+}$ bindet an Troponin C, was eine Konformationsänderung von Tropomyosin auslöst: Die Bindungsstellen auf den Aktinfilamenten werden frei. Myosinköpfe binden an Aktin, führen unter Freisetzung von ADP und Phosphat ihren Kraftschlag (Ruderschlag) aus und ziehen die Aktinfilamente zur Mitte des Sarkomers. Die Bindung eines neuen ATP-Moleküls löst den Myosinkopf wieder (Weichmacherwirkung von ATP).",
    tags: ["BMS","Biologie","Der menschliche Körper","Muskel","Sarkomer","Querbrückenzyklus","Aktin","Myosin","Calcium","ATP"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem: pH-Milieu & Substratspezifität der Verdauungsenzyme",
    difficulty: "Mittel",
    questionText:
      "Welche Zuordnung von Verdauungsabschnitt, optimalem pH-Milieu und dort aktivem Hauptenzym ist biologisch korrekt?",
    options: [
          "Mundhöhle — stark sauer (pH 1–2) — Pepsin spaltet Fette",
          "Magen — stark basisch (pH 9–10) — Trypsin verdaut Kohlenhydrate",
          "Duodenum / Dünndarm — schwach basisch bis neutral (pH 7–8) — Pankreasenzyme (z. B. Trypsin, Pankreaslipase, Amylase) spalten Proteine, Fette und Polysaccharide",
          "Dickdarm — stark sauer (pH 1) — Salzsäure resorbiert Vitamine",
          "Speiseröhre — pH 3 — Gallensäuren spalten Aminosäuren"
    ],
    correctAnswer: 2,
    explanation:
      "Im Magen sorgt Salzsäure ($HCl$) für ein stark saures Milieu (pH 1–2), in dem das Enzym Pepsin Proteine denaturiert und spaltet. Beim Übertritt in das Duodenum (Zwölffingerdarm) wird der saure Speisebrei durch Bikarbonat aus dem Pankreassaft neutralisiert (pH 7–8). Nur in diesem schwach alkalischen Milieu arbeiten die Enzyme des Pankreas (Trypsin/Chymotrypsin für Proteine, Pankreaslipase für Fette, Pankreasamylase für Kohlenhydrate) optimal.",
    tags: ["BMS","Biologie","Der menschliche Körper","Verdauung","Enzyme","pH-Wert","Pankreas","Magen","Duodenum"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-02-set5-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-02-koerper",
    topic: "Verdauungssystem: Dünndarmzotte & Transportwege (Pfortader vs. Lymphsystem)",
    difficulty: "Schwer",
    questionText:
      "Über welche unterschiedlichen Transportwege gelangen wasserlösliche Nährstoffe (z. B. Glukose, Aminosäuren) im Vergleich zu langkettigen Fetten aus dem Dünndarmlumen in den Blutkreislauf?",
    options: [
          "Alle Nährstoffe werden ausschließlich über die Gallenblase in die Milz gepumpt.",
          "Fette treten direkt in die Pfortader ein; Glukose wird über die Lungenarterie transportiert.",
          "Wasserlösliche Nährstoffe diffundieren in den Pleuraraum; Fette wandern durch die Speiseröhre.",
          "Aminosäuren und Glukose gelangen über Nervenfasern direkt ins Großhirn.",
          "Wasserlösliche Nährstoffe (Glukose, Aminosäuren) werden in die Blutkapillaren der Dünndarmzotten aufgenommen und über die Pfortader zur Leber geleitet; verpackte Fette (Chylomikronen) werden in das zentrale Lymphgefäß (Chylusgefäß) der Zotte aufgenommen und über das Lymphsystem unter Umgehung der Leber in den venösen Blutkreislauf eingespeist."
    ],
    correctAnswer: 4,
    explanation:
      "Die Dünndarmzotte besitzt zwei getrennte Abtransportwege: (1) Wasserlösliche Spaltprodukte (Monosaccharide, Aminosäuren, wasserlösliche Vitamine) treten direkt in das dichte Kapillarnetz der Zotte über und fließen über die Pfortader (Vena portae) zur primären Stoffwechselkontrolle in die Leber. (2) Langkettige Fettsäuren werden in den Enterozyten zu Triglyzeriden reesterifiziert, zu Chylomikronen verpackt und in die zentralen Lymphkapillaren (Chylusgefäße) abgegeben. Über den Ductus thoracicus gelangen sie am Pfortaderkreislauf vorbei direkt in den Venenwinkel.",
    tags: ["BMS","Biologie","Der menschliche Körper","Dünndarm","Zotten","Resorption","Pfortader","Lymphgefäß","Fette","Glukose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },

  /* =================================================================
     03. GRUNDLAGEN DER FRÜHENTWICKLUNG DES MENSCHEN (bio-03-fruehentwicklung)
     ================================================================= */
  {
    id: "bio-03-set1-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Ort der Befruchtung & Zygote",
    difficulty: "Leicht",
    questionText:
      "An welchem anatomischen Ort findet die Befruchtung der menschlichen Eizelle durch ein Spermium unter physiologischen Bedingungen statt?",
    options: [
          "In der Gebärmutterhöhle (Cavitas uteri)",
          "In der Vagina",
          "Im Eileiter (Tuba uterina, meist im Bereich der Ampulle)",
          "Direkt im Ovar (Eierstock)",
          "Im Gebärmutterhals (Cervix uteri)"
    ],
    correctAnswer: 2,
    explanation:
      "Die Befruchtung (Konzeption) findet normalerweise im oberen Drittel des Eileiters (Tuba uterina / Ovidukt), genauer in der Ampulla tubae uterinae statt. Von dort wandert die befruchtete Eizelle (Zygote) über mehrere Tage in Richtung Uterus.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Eileiter","Ampulle","Zygote"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Akrosom & Akrosomreaktion",
    difficulty: "Leicht",
    questionText:
      "Welche primäre Funktion hat das Akrosom am Kopf des reifen menschlichen Spermiums beim Kontakt mit der Eizelle?",
    options: [
          "Es setzt lytische Enzyme frei, um die Schutzhüllen der Eizelle (Corona radiata und Zona pellucida) zu durchdringen.",
          "Es liefert das gesamte ATP für die Geißelbewegung des Spermiums.",
          "Es enthält die mütterliche DNA für den diploiden Chromosomensatz.",
          "Es verhindert das Eindringen des Spermiums in falsche Organe.",
          "Es baut die Gebärmutterschleimhaut vor der Einnistung enzymatisch ab."
    ],
    correctAnswer: 0,
    explanation:
      "Das Akrosom ist eine kappenartige Struktur am Kopf des Spermiums, die aus dem Golgi-Apparat hervorgegangen ist. Bei der Akrosomreaktion werden gespeicherte Enzyme freigesetzt, welche die Follikelzellschicht (Corona radiata) und die Glykoproteinhülle (Zona pellucida) der Eizelle anlösen, damit das Spermium zur Eizellmembran vordringen kann.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Spermium","Akrosom","Zona pellucida"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Verhinderung der Polyspermie",
    difficulty: "Leicht",
    questionText:
      "Was verhindert im Normalfall, dass nach dem erfolgreichen Eindringen des ersten Spermiums weitere Spermien in die Eizelle eindringen (Polyspermieblock)?",
    options: [
          "Die sofortige Zerstörung aller Spermien im Eileiter durch Magensäure",
          "Der sofortige Abtransport der Eizelle in die Harnblase",
          "Die Verdopplung des mütterlichen Chromosomensatzes ohne Zellkontakt",
          "Eine Membran- und Rindenreaktion (kortikale Reaktion), die eine dauerhafte Veränderung und Verhärtung der Zona pellucida bewirkt (Zonareaktion)",
          "Das Verschließen des Muttermundes durch einen Schleimpfropf innerhalb von Sekunden"
    ],
    correctAnswer: 3,
    explanation:
      "Nach dem Eindringen des ersten Spermiums schütten kortikale Granula ihren Inhalt aus (kortikale Reaktion). Dies führt zu einer dauerhaften enzymatischen Veränderung der Zona pellucida (Zonareaktion), sodass keine weiteren Spermien mehr binden oder eindringen können (Polyspermieblock).",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Polyspermie","Kortikale Reaktion","Zonareaktion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Reihenfolge der Entwicklungsstadien",
    difficulty: "Leicht",
    questionText:
      "Welche Reihenfolge beschreibt die zeitliche Abfolge der frühen menschlichen Entwicklungsstadien in der ersten Woche nach der Befruchtung korrekt?",
    options: [
          "Blastozyste → Morula → Zygote → Furchung → Nidation",
          "Zygote → Furchungsteilungen → Morula → Blastozyste → Nidation (Einnistung)",
          "Morula → Zygote → Blastozyste → Nidation → Furchung",
          "Zygote → Nidation → Morula → Blastozyste → Furchung",
          "Blastozyste → Zygote → Nidation → Morula → Furchung"
    ],
    correctAnswer: 1,
    explanation:
      "Die Entwicklung beginnt mit der Verschmelzung von Ei- und Samenzelle zur Zygote (Tag 1). Es folgen mitotische Furchungsteilungen (Tage 1–3), das Stadium des Maulbeerkeims (Morula, ca. Tag 3–4), die Ausbildung der flüssigkeitsgefüllten Keimblase (Blastozyste, ca. Tag 4–5) und schließlich die Einnistung (Nidation/Implantation) in das Endometrium (ab Tag 5–6).",
    tags: ["BMS","Biologie","Frühentwicklung","Zygote","Morula","Blastozyste","Nidation","Reihenfolge"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Furchungsteilungen & Blastomeren",
    difficulty: "Leicht",
    questionText:
      "Was ist das charakteristische Merkmal der frühen Furchungsteilungen der Zygote während ihrer Wanderung durch den Eileiter?",
    options: [
          "Die Zellen wachsen zwischen den Teilungen auf die doppelte Größe an.",
          "Es findet ausschließlich Meiose zur Reduktion des Chromosomensatzes statt.",
          "Die Zygote verliert alle Zellkerne und teilt sich ohne DNA-Replikation.",
          "Es entstehen sofort spezialisierte Knochen- und Muskelzellen.",
          "Es handelt sich um rasche mitotische Zellteilungen ohne zwischenzeitliches Zellwachstum, sodass die Tochterzellen (Blastomeren) mit jeder Teilung kleiner werden und das Gesamtvolumen des Keims innerhalb der Zona pellucida konstant bleibt."
    ],
    correctAnswer: 4,
    explanation:
      "Bei den Furchungsteilungen teilt sich die Zygote wiederholt mitotisch in 2, 4, 8, 16 Zellen (Blastomeren). Da in dieser Phase G1- und G2-Wachstumsphasen stark verkürzt sind und die starre Zona pellucida den Keim umschließt, nimmt das Gesamtvolumen nicht zu; die einzelnen Blastomeren werden schrittweise kleiner.",
    tags: ["BMS","Biologie","Frühentwicklung","Furchung","Blastomeren","Zellteilung","Mitose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Morula",
    difficulty: "Leicht",
    questionText:
      "Wie wird das kugelige, maulbeerförmige Zellstadium bezeichnet, das etwa am 3. bis 4. Tag nach der Befruchtung aus ca. 16 bis 32 Blastomeren besteht?",
    options: [
          "Morula (Maulbeerkeim)",
          "Gastrula",
          "Fetus",
          "Neurula",
          "Trophoblast"
    ],
    correctAnswer: 0,
    explanation:
      "Das Stadium aus 16 bis 32 Zellen, das mikroskopisch an eine Maulbeere erinnert, heißt Morula (lateinisch morum = Maulbeere). In diesem Stadium beginnt die Kompaktierung der äußeren Zellen.",
    tags: ["BMS","Biologie","Frühentwicklung","Morula","Blastomeren","Entwicklungsstadien"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Blastozyste (Embryoblast vs. Trophoblast)",
    difficulty: "Leicht",
    questionText:
      "In welche zwei grundlegenden Zellpopulationen differenziert sich die Blastozyste vor der Einnistung?",
    options: [
          "In Erythrozyten und Leukozyten",
          "In Ektoderm und Endoderm",
          "In Neuronen und Gliazellen",
          "In die äußere Zellschicht (Trophoblast) und die innere Zellmasse (Embryoblast)",
          "In Plazenta und Nabelschnur"
    ],
    correctAnswer: 3,
    explanation:
      "Die Blastozyste besteht aus: (1) dem äußeren Trophoblasten (bildet die fetale Anteile der Plazenta und Eihäute) und (2) dem inneren Embryoblasten (inner cell mass, aus dem der eigentliche Embryo und zusätzliche Fruchthüllen hervorgehen). Dazwischen liegt die flüssigkeitsgefüllte Blastozystenhöhle.",
    tags: ["BMS","Biologie","Frühentwicklung","Blastozyste","Trophoblast","Embryoblast"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Zeitpunkt & Ort der Nidation",
    difficulty: "Leicht",
    questionText:
      "Wann und wo nistet sich die Blastozyste im Normalfall bei einer menschlichen Schwangerschaft ein?",
    options: [
          "Am 1. Tag nach der Befruchtung in der Scheidenwand",
          "Am 14. Tag nach der Befruchtung im Eierstock",
          "Etwa am 5. bis 6. Tag nach der Befruchtung in die Schleimhaut der Gebärmutter (Endometrium)",
          "Am 28. Tag nach der Befruchtung im Eileiter",
          "Unmittelbar nach der ersten Furchungsteilung in der Cervix"
    ],
    correctAnswer: 2,
    explanation:
      "Nach dem Schlüpfen aus der Zona pellucida (Hatching) am 5.–6. Tag post conceptionem nimmt die Blastozyste Kontakt mit der Uterusschleimhaut (Endometrium) auf und beginnt die Implantation (Nidation), die bis zum Ende der 2. Woche abgeschlossen wird.",
    tags: ["BMS","Biologie","Frühentwicklung","Nidation","Implantation","Endometrium","Uterus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Rolle des Trophoblasten",
    difficulty: "Leicht",
    questionText:
      "Welche Zellschicht der Blastozyste dringt bei der Einnistung aktiv in das mütterliche Endometrium ein und bildet später wesentliche Anteile der Plazenta?",
    options: [
          "Der Embryoblast",
          "Der Trophoblast",
          "Die Zona pellucida",
          "Das Amnionepithel",
          "Der Dottersack"
    ],
    correctAnswer: 1,
    explanation:
      "Der Trophoblast ist die äußere Zellhülle der Blastozyste. Er haftet an das Endometrium, differenziert sich in Zyto- und Synzytiotrophoblast, sezerniert Enzyme zum Eindringen in die Schleimhaut und bildet die fetale Komponente der Plazenta (Chorion frondosum).",
    tags: ["BMS","Biologie","Frühentwicklung","Trophoblast","Nidation","Plazenta"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Gastrulation & Bildung der drei Keimblätter",
    difficulty: "Leicht",
    questionText:
      "Wie nennt man den zentralen embryonalen Entwicklungsschritt in der 3. Entwicklungswoche, bei dem aus der zweiblättrigen Keimscheibe die drei primären Keimblätter (Ektoderm, Mesoderm, Endoderm) entstehen?",
    options: [
          "Furchung",
          "Kompaktierung",
          "Implantation",
          "Neurulation",
          "Gastrulation"
    ],
    correctAnswer: 4,
    explanation:
      "Die Gastrulation ist der fundamentale morphogenetische Prozess in der 3. Woche, bei dem Zellen des Epiblasten durch den Primitivstreifen einwandern und die dreiblättrige Keimscheibe formen: Ektoderm (außen), Mesoderm (Mitte) und Endoderm (innen).",
    tags: ["BMS","Biologie","Frühentwicklung","Gastrulation","Keimblätter","Ektoderm","Mesoderm","Endoderm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Ektoderm-Derivate",
    difficulty: "Leicht",
    questionText:
      "Welche Organsysteme und Gewebe gehen während der Embryonalentwicklung primär aus dem äußeren Keimblatt (Ektoderm) hervor?",
    options: [
          "Das gesamte Nervensystem (Gehirn, Rückenmark, periphere Nerven) und die Epidermis der Haut mit Hautanhangsgebilden",
          "Skelettmuskulatur, Knochen und Knorpel",
          "Die Auskleidungsepithelien des Magen-Darm-Traktes sowie Leber und Pankreas",
          "Herz, Blutgefäße, Milz und Nieren",
          "Glatte Muskulatur der inneren Organe und Blutkapillaren"
    ],
    correctAnswer: 0,
    explanation:
      "Aus dem Ektoderm entstehen: das gesamte zentrale und periphere Nervensystem (über Neuralrohr und Neuralleiste), die Sinnesorgane (z. B. Netzhaut, Linse, Innenohr) sowie die Epidermis der Haut mit Haaren, Nägeln und Hautdrüsen und der Zahnschmelz.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Ektoderm","Nervensystem","Epidermis"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Mesoderm-Derivate",
    difficulty: "Leicht",
    questionText:
      "Welche Gewebetypen und Organsysteme stammen typischerweise aus dem mittleren Keimblatt (Mesoderm)?",
    options: [
          "Ausschließlich das Gehirn und die Augenlinse",
          "Knochen, Knorpel, Skelettmuskulatur, Bindegewebe, das Herz-Kreislauf-System sowie Nieren und Keimdrüsen",
          "Die sekretorischen Zellen der Bauchspeicheldrüse und Leberzellen",
          "Das Flimmerepithel der Luftröhre und Alveolarepithel",
          "Die oberste verhornte Schicht der Oberhaut"
    ],
    correctAnswer: 1,
    explanation:
      "Das Mesoderm liefert den Großteil der Stütz- und Bewegungsorgane: Knochen, Knorpel, alle Muskelgewebearten (Skelett-, Herz- und glatte Muskulatur), Bindegewebe, Blut- und Lymphgefäße, Herz, Blutkörperchen, Nieren, Nebennierenrinde und Gonaden (Hoden/Ovarien).",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Mesoderm","Knochen","Muskeln","Herz","Nieren"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Endoderm-Derivate",
    difficulty: "Leicht",
    questionText:
      "Welche Organstrukturen entwickeln sich entwicklungsgeschichtlich aus dem inneren Keimblatt (Endoderm / Entoderm)?",
    options: [
          "Rückenmark und Spinalganglien",
          "Skelettknochen und Quergestreifte Muskulatur",
          "Erythrozyten und Thrombozyten",
          "Das Auskleidungsepithel des Magen-Darm-Traktes, das Epithel der Atemwege sowie Leber und Bauchspeicheldrüse",
          "Die Dermis und Subkutis der Haut"
    ],
    correctAnswer: 3,
    explanation:
      "Aus dem Endoderm (Entoderm) geht das epitheliale Innenfutter des Magen-Darm-Traktes und der Atemwege hervor, außerdem die großen Verdauungsdrüsen Leber und Bauchspeicheldrüse sowie das Schilddrüsenepithel.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Endoderm","Verdauungstrakt","Leber","Pankreas","Atmung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Zuordnung von Organpaaren",
    difficulty: "Mittel",
    questionText:
      "Welches der folgenden Organpaare geht vollständig aus demselben Keimblatt (dem Mesoderm) hervor?",
    options: [
          "Gehirn und Leber",
          "Epidermis und Bauchspeicheldrüse",
          "Herz und Niere",
          "Schilddrüse und Netzhaut",
          "Lungenepithel und Rückenmark"
    ],
    correctAnswer: 2,
    explanation:
      "Sowohl das Herz (und Gefäßsystem) als auch die Nieren (aus dem intermediären Mesoderm) stammen aus dem Mesoderm. Gehirn/Netzhaut/Epidermis stammen aus dem Ektoderm; Leber/Pankreas/Schilddrüse/Lungenepithel stammen aus dem Endoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Mesoderm","Herz","Niere"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryo: Embryonalperiode & Organogenese",
    difficulty: "Leicht",
    questionText:
      "Welcher Zeitraum der vorgeburtlichen Entwicklung wird als Embryonalperiode bezeichnet und was ist ihr wesentliches biologisches Merkmal?",
    options: [
          "Vom 6. Schwangerschaftsmonat bis zur Geburt — ausschließlich Längenwachstum",
          "Die ersten 24 Stunden nach der Befruchtung — Entstehung der Knochen",
          "Von der 12. bis zur 40. Entwicklungswoche — Ausbildung der Gehirnwindungen",
          "Ausschließlich die Zeit der Einnistung am 5. Entwicklungstag",
          "Von der Befruchtung bis zum Ende der 8. Entwicklungswoche (post conceptionem) — in dieser Phase findet die Organogenese (Anlage aller Hauptorgansysteme) statt."
    ],
    correctAnswer: 4,
    explanation:
      "Die Embryonalperiode umfasst die ersten 8 Entwicklungswochen (Tag 1 bis 56 post conceptionem). In dieser Zeit findet die grundlegende Formbildung (Morphogenese) und die Anlage aller Organsysteme (Organogenese) statt. In dieser Phase ist der Keim besonders empfindlich gegenüber teratogenen Schadstoffen.",
    tags: ["BMS","Biologie","Frühentwicklung","Embryonalperiode","Organogenese","Entwicklungsstadien"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryo vs. Fetus: Definition des Übergangs",
    difficulty: "Leicht",
    questionText:
      "Ab welchem Zeitpunkt der Schwangerschaft spricht man in der menschlichen Entwicklung von einem Fetus (Fötus) und nicht mehr von einem Embryo?",
    options: [
          "Unmittelbar nach der Einnistung am 7. Tag",
          "Ab der 9. Entwicklungswoche nach der Befruchtung (post conceptionem) bis zur Geburt",
          "Erst ab dem Zeitpunkt der Geburt",
          "Ab der 24. Schwangerschaftswoche nach Erreichen der Überlebensfähigkeit",
          "Bereits im Stadium der Morula am 4. Tag"
    ],
    correctAnswer: 1,
    explanation:
      "Mit Abschluss der 8. Entwicklungswoche nach der Befruchtung sind alle grundlegenden Organsysteme angelegt. Ab Beginn der 9. Entwicklungswoche bis zur Geburt spricht man vom Fetus (Fötus).",
    tags: ["BMS","Biologie","Frühentwicklung","Embryo","Fetus","Entwicklungsphasen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetus: Merkmale der Fetalperiode",
    difficulty: "Leicht",
    questionText:
      "Welcher Hauptprozess prägt die Fetalperiode (ab der 9. Entwicklungswoche bis zur Geburt)?",
    options: [
          "Massives Größen- und Gewichtswachstum sowie funktionelle Differenzierung und Reifung der bereits angelegten Organe",
          "Die erstmalige Entstehung der drei Keimblätter",
          "Die Befruchtung weiterer Eizellen im Uterus",
          "Die Reduktion des diploiden Chromosomensatzes auf einen haploiden Satz",
          "Der vollständige Abbau der Plazenta"
    ],
    correctAnswer: 0,
    explanation:
      "In der Fetalperiode (9. Woche bis Geburt) geht es primär um rapides Längen- und Gewichtswachstum, die Spezialisierung von Geweben und die funktionelle Ausreifung der Organe (z. B. Gehirn, Lunge, Nieren), damit das Kind nach der Geburt lebensfähig ist.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetalperiode","Wachstum","Organreifung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetus: Fetale Lungenfunktion vor der Geburt",
    difficulty: "Leicht",
    questionText:
      "Welche Aussage beschreibt den Zustand und die Funktion der fetalen Lunge vor der Geburt im Mutterleib korrekt?",
    options: [
          "Die Lunge atmet bereits im Uterus Außenluft ein und versorgt den Fetus mit Sauerstoff.",
          "Die Lunge ist vollständig verknöchert und bildet rote Blutkörperchen.",
          "Die fetale Lunge ist mit Flüssigkeit gefüllt und nimmt vor der Geburt noch nicht am normalen Gasaustausch teil; der Gasaustausch erfolgt über die Plazenta.",
          "Die Lunge produziert das Hormon hCG zur Aufrechterhaltung der Schwangerschaft.",
          "Die fetale Lunge scheidet giftigen Harnstoff direkt in die Fruchtblase aus."
    ],
    correctAnswer: 2,
    explanation:
      "Im Mutterleib ist die fetale Lunge mit Flüssigkeit gefüllt und noch nicht belüftet. Der lebensnotwendige Gasaustausch (Sauerstoffaufnahme und Kohlendioxidabgabe) erfolgt vor der Geburt vollständig über die Plazenta.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetus","Lunge","Gasaustausch","Plazenta"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Funktion als Austauschorgan",
    difficulty: "Leicht",
    questionText:
      "Welche der folgenden Aufgaben gehört zu den primären biologischen Funktionen der Plazenta (Mutterkuchen)?",
    options: [
          "Aktive Erzeugung von Muttermilch während der ersten Schwangerschaftswoche",
          "Bildung aller mütterlichen roten Blutkörperchen",
          "Reinigung des Fruchtwassers durch direkte Filtration über die Leber der Mutter",
          "Mechanische Befestigung des Fetus an der Bauchdecke der Mutter",
          "Austausch von Gasen (Sauerstoffaufnahme, Kohlendioxidabgabe), Nährstoffversorgung (Glukose, Aminosäuren) und Abtransport von fetalen Stoffwechselabbauprodukten sowie endokrine Hormonproduktion"
    ],
    correctAnswer: 4,
    explanation:
      "Die Plazenta ist das zentrale Stoffaustauschorgan zwischen Mutter und Fetus: Sie versorgt den Fetus mit Sauerstoff, Wasser und Nährstoffen, transportiert fetale Stoffwechselprodukte ($CO_2$, Harnstoff) ab und fungiert als wichtige Hormondrüse (z. B. Produktion von hCG, Progesteron, Östrogenen).",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Stoffaustausch","Gasaustausch","Nährstoffe"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Plazentaschranke & Kreislauftrennung",
    difficulty: "Mittel",
    questionText:
      "Wie stehen der mütterliche und der fetale Blutkreislauf in der reifen menschlichen Plazenta physiologischerweise zueinander in Beziehung?",
    options: [
          "Mütterliches und fetales Blut fließen in denselben Arterien vollständig zusammen.",
          "Fetales Blut wird direkt durch das mütterliche Herz durchgepumpt.",
          "Es gibt keinerlei Verbindung oder Stofftransport zwischen Mutter und Fetus.",
          "Sie sind durch die Plazentaschranke getrennt; mütterliches und fetales Blut vermischen sich im Normalfall nicht direkt, der Stoffaustausch erfolgt über Diffusion, erleichterten Transport und aktiven Transport über die Chorionzotten.",
          "Mütterliche rote Blutkörperchen treten ungehindert in großer Zahl in die fetalen Blutbahnen über."
    ],
    correctAnswer: 3,
    explanation:
      "Die Plazentaschranke trennt das Blut des Fetus in den fetalen Kapillaren der Chorionzotten vom mütterlichen Blut in den intervillösen Räumen. Es findet kein direkter Blutaustausch statt; Nährstoffe, Gase und Antikörper (IgG) passieren selektiv durch Diffusion und Transporter.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Plazentaschranke","Chorionzotten","Kreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Hormonfunktion (hCG & Corpus luteum)",
    difficulty: "Leicht",
    questionText:
      "Welches Hormon wird in der Frühschwangerschaft vom Trophoblasten bzw. Synzytiotrophoblasten gebildet, um die Rückbildung des Gelbkörpers (Corpus luteum) zu verhindern?",
    options: [
          "Humanes Choriongonadotropin (hCG)",
          "Adrenalin",
          "Glukagon",
          "Insulin",
          "Thyroxin (T4)"
    ],
    correctAnswer: 0,
    explanation:
      "hCG (humanes Choriongonadotropin) wird frühzeitig von den Trophoblastzellen synthetisiert. Es stimuliert das Corpus luteum im Ovar zur kontinuierlichen Produktion von Progesteron und Östrogenen, wodurch die Menstruationsblutung ausbleibt und die Schwangerschaft aufrechterhalten wird. Auf hCG basieren gängige Schwangerschaftstests.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","hCG","Corpus luteum","Progesteron"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Eihäute & Fruchthüllen: Amnion, Chorion & Fruchtwasser",
    difficulty: "Leicht",
    questionText:
      "Welche innere Fruchthülle umschließt direkt die mit Fruchtwasser gefüllte Höhle, in der der Embryo bzw. Fetus schwimmt und vor Erschütterungen sowie Austrocknung geschützt ist?",
    options: [
          "Die Zona pellucida",
          "Das Amnion (Schafhaut)",
          "Das Myometrium",
          "Der Sinus cavernosus",
          "Die Allantois"
    ],
    correctAnswer: 1,
    explanation:
      "Das Amnion bildet die innerste Fruchthülle und begrenzt die Amnionhöhle (Fruchtblase). Das darin enthaltene Fruchtwasser (Amnionflüssigkeit) bietet dem Fetus mechanischen Schutz, ermöglicht gleichmäßige Bewegungsfreiheit und verhindert Verwachsungen mit der Eihaut.",
    tags: ["BMS","Biologie","Frühentwicklung","Eihäute","Amnion","Fruchthüllen","Fruchtwasser"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Nabelschnur: Gefäße & Sauerstoffgehalt",
    difficulty: "Leicht",
    questionText:
      "Wie viele Blutgefäße verlaufen normalerweise in der menschlichen Nabelschnur und welches Blut transportieren sie?",
    options: [
          "Eine Arterie (sauerstoffreich) und zwei Venen (sauerstoffarm)",
          "Zwei Venen (sauerstoffreich) und zwei Arterien (sauerstoffarm)",
          "Eine Nabelvene (Vena umbilicalis, führt sauerstoffreiches Blut von der Plazenta zum Fetus) und zwei Nabelarterien (Arteriae umbilicales, führen sauerstoffarmes Blut vom Fetus zur Plazenta)",
          "Ausschließlich Lymphgefäße ohne Blutzellen",
          "Drei Arterien und keine Venen"
    ],
    correctAnswer: 2,
    explanation:
      "Die reife Nabelschnur enthält drei Gefäße eingebettet in die Wharton-Sulze: (1) Eine Vena umbilicalis, die sauerstoff- und nährstoffreiches Blut von der Plazenta zum Fetus leitet. (2) Zwei Arteriae umbilicales, die sauerstoffarmes und mit Stoffwechselabbauprodukten beladenes Blut vom Fetus zurück zur Plazenta transportieren.",
    tags: ["BMS","Biologie","Frühentwicklung","Nabelschnur","Vena umbilicalis","Arteria umbilicalis","Fetaler Kreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Kurzschlüsse (Foramen ovale & Ductus arteriosus)",
    difficulty: "Mittel",
    questionText:
      "Über welche anatomischen Kurzschlüsse (Shunts) wird im fetalen Kreislauf der Lungenkreislauf weitgehend umgangen?",
    options: [
          "Über die Eustachische Röhre und den Pleuraspalt",
          "Über die Pfortader und die Harnleiter",
          "Über die Aortenklappe und die Mitralklappe",
          "Über das Foramen ovale (Öffnung in der Vorhofscheidewand) und den Ductus arteriosus (Botalli, Verbindung zwischen Truncus pulmonalis und Aorta)",
          "Über die Bronchien und die Alveolargänge"
    ],
    correctAnswer: 3,
    explanation:
      "Im fetalen Kreislauf umgehen zwei physiologische Shunts den Lungenkreislauf: Das Foramen ovale leitet Blut direkt vom rechten in den linken Vorhof; der Ductus arteriosus (Botalli) leitet Blut aus der Pulmonalarterie direkt in die Aorta. Nach der Geburt verschließen sich beide Verbindungen funktionell.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetaler Kreislauf","Foramen ovale","Ductus arteriosus","Shunt"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set1-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: Gesamtablauf der Frühphasen",
    difficulty: "Leicht",
    questionText:
      "Welche Übersicht beschreibt die wichtigsten Meilensteine der frühen menschlichen Entwicklung in korrekter zeitlicher Abfolge?",
    options: [
          "Organogenese → Befruchtung → Morula → Fetalperiode → Nidation",
          "Fetalperiode → Gastrulation → Zygote → Einnistung → Furchung",
          "Einnistung → Zygote → Furchung → Organogenese → Gastrulation",
          "Gastrulation → Befruchtung → Furchung → Fetalperiode → Morula",
          "Befruchtung im Eileiter (Tag 1) → Furchungsteilungen zur Morula (Tage 1–4) → Blastozystenbildung & Nidation (Tage 5–7) → Gastrulation zur dreiblättrigen Keimscheibe (3. Woche) → Organogenese in der Embryonalperiode (bis 8. Woche) → Fetalperiode mit Reifung & Wachstum (ab 9. Woche bis Geburt)"
    ],
    correctAnswer: 4,
    explanation:
      "Diese Sequenz fasst die gesamte Frühentwicklung zusammen: Von der Befruchtung (Zygote) über Furchung (Morula), Blastozyste und Nidation (1.–2. Woche), Gastrulation (3. Woche), Organanlagen in der Embryonalperiode (bis 8. Woche) bis hin zur Fetalperiode (ab 9. Woche) mit Organreifung und Größenwachstum bis zur Geburt.",
    tags: ["BMS","Biologie","Frühentwicklung","Entwicklungsstadien","Gastrulation","Embryo","Fetus","Schwangerschaft"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-03-set2-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Chromosomensatz & Meiose-Abschluss",
    difficulty: "Mittel",
    questionText:
      "Welche fundamentale genetische und zellbiologische Konsequenz hat die Verschmelzung von Ei- und Samenzelle bei der Befruchtung?",
    options: [
          "Sie führt zum sofortigen Verlust aller mütterlichen Mitochondrien.",
          "Sie vollendet die zweite Reifeteilung (Meiose II) der Eizelle und stellt durch Vereinigung zweier haploider Gametenkerne den artspezifischen diploiden Chromosomensatz (2n = 46) wieder her.",
          "Sie verdoppelt den Chromosomensatz der Zygote auf einen tetraploiden Zustand (4n).",
          "Sie induziert eine Meiose in den Furchungszellen zur Reduktion der Erbinformation.",
          "Sie schaltet alle mütterlichen Gene irreversibel ab, sodass nur väterliche Gene exprimiert werden."
    ],
    correctAnswer: 1,
    explanation:
      "Die menschliche Eizelle ist zum Zeitpunkt des Eisprungs in der Metaphase II der Meiose arretiert. Erst das Eindringen des Spermiums führt zum Abschluss der Meiose II. Die Verschmelzung der beiden haploiden Vorkerne (je n = 23) bildet die Zygote mit vollständigem diploiden Chromosomensatz (2n = 46).",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Meiose","Zygote","Chromosomensatz"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Hüllen der Eizelle (Corona radiata & Zona pellucida)",
    difficulty: "Mittel",
    questionText:
      "Durch welche morphologischen Schichten muss ein menschliches Spermium nacheinander dringen, um die Plasmamembran der Eizelle (Oolemm) zu erreichen?",
    options: [
          "Zuerst durch die Plazentaschranke, danach durch die Amnionmembran",
          "Zuerst durch das Endometrium, danach durch das Myometrium",
          "Direkt durch die nackte Plasmamembran ohne jegliche umgebende Hüllschichten",
          "Zuerst durch die Follikelzellschicht (Corona radiata) und anschließend durch die azelluläre Glykoproteinhülle (Zona pellucida)",
          "Zuerst durch das Zytoplasma des Polkörperchens und dann durch die Kernmembran"
    ],
    correctAnswer: 3,
    explanation:
      "Die ovulierte Eizelle ist von zwei Hüllschichten umgeben: (1) der äußeren Corona radiata (mehrere Schichten von Follikelzellen) und (2) der inneren Zona pellucida (einer dicken, azellulären Glykoproteinschicht). Das Spermium durchdringt die Corona radiata durch Eigenbewegung und bindet an die Zona pellucida, wo die Akrosomreaktion ausgelöst wird.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Corona radiata","Zona pellucida","Akrosomreaktion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Bedeutung des Polyspermieblocks",
    difficulty: "Mittel",
    questionText:
      "Warum ist die Verhinderung der Polyspermie (Eindringen von mehr als einem Spermium in die Eizelle) für eine erfolgreiche Embryonalentwicklung zwingend notwendig?",
    options: [
          "Weil das Eindringen mehrerer Spermien zu einem überzähligen Chromosomensatz (Polyploidie) führt, was einen raschen Entwicklungsabbruch zur Folge hat.",
          "Weil überzählige Spermien das gesamte Zytoplasma der Eizelle enzymatisch auflösen würden.",
          "Weil dadurch das Geschlecht des Kindes zu einem Zwitter verändert werden würde.",
          "Weil Spermien fremde Bakterien in den Zellkern der Eizelle einbringen.",
          "Weil die Eizelle bei mehr als einem Spermium sofort in den Eierstock zurückwandern würde."
    ],
    correctAnswer: 0,
    explanation:
      "Dringen mehrere Spermien ein (Polyspermie), entstünde eine triploide oder polyploide Zygote mit gestörter Chromosomenzahl. Dies führt zu schweren Teilungsfehlern und zum frühen Fruchttod.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Polyspermie","Polyploidie","Kortikale Reaktion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Furchung & Volumenkonstanz",
    difficulty: "Leicht",
    questionText:
      "Warum nimmt das Gesamtvolumen des menschlichen Keims während der ersten Furchungsteilungen (von der 2-Zell- bis zur 16-Zell-Morula) trotz rascher Zellteilungen nicht zu?",
    options: [
          "Weil die Zellen bei jeder Teilung ihre gesamte DNA verlieren.",
          "Weil die Blastomeren kontinuierlich Wasser an die Gebärmutterhöhle abgeben.",
          "Weil die starre Zona pellucida das äußere Volumen begrenzt und zwischen den raschen mitotischen Teilungen keine zellulären Wachstumsphasen (G1/G2) stattfinden.",
          "Weil die Zellen sofort absterben und durch Bindegewebe ersetzt werden.",
          "Weil die Zellteilung erst nach der vollständigen Einnistung im Uterus einsetzt."
    ],
    correctAnswer: 2,
    explanation:
      "Die Zygote ist von der stabilen Zona pellucida umschlossen. Die frühen Furchungszyklen bestehen im Wesentlichen aus Teilungsschritten ohne zwischenzeitliches Zellwachstum. Dadurch wird das Zytoplasma auf immer kleinere Blastomeren aufgeteilt, während das Gesamtvolumen konstant bleibt.",
    tags: ["BMS","Biologie","Frühentwicklung","Furchung","Blastomeren","Zona pellucida","Zellzyklus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Zellkompaktierung",
    difficulty: "Mittel",
    questionText:
      "Was versteht man unter dem Prozess der „Kompaktierung“ im Stadium der späten Morula (ca. Tag 3–4)?",
    options: [
          "Den vollständigen Zerfall der Morula in Einzelzellen vor dem Eintritt in den Uterus",
          "Das irreversible Verkleben der Morula mit der Eileiterwand",
          "Die Verdopplung des Chromosomensatzes aller Blastomeren",
          "Das Ausstoßen des Zellkerns aus allen inneren Zellen zur Vorbereitung auf den Hämoglobintransport",
          "Die enge zelluläre Anlagerung und Verdichtung der äußeren Blastomeren, wodurch erstmals eine äußere Zellschicht und eine innere Zellmasse abgegrenzt werden"
    ],
    correctAnswer: 4,
    explanation:
      "Bis zum 8-Zell-Stadium liegen die Blastomeren locker nebeneinander. Bei der Kompaktierung legen sich die äußeren Zellen eng aneinander und schließen die Zellzwischenräume. Dadurch entsteht erstmals eine äußere Zellschicht (Vorläufer des Trophoblasten) und eine innere Zellgruppe (Vorläufer des Embryoblasten).",
    tags: ["BMS","Biologie","Frühentwicklung","Morula","Kompaktierung","Blastozyste"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Blastozystenaufbau",
    difficulty: "Mittel",
    questionText:
      "Welche funktionelle Bedeutung hat die Entstehung der flüssigkeitsgefüllten Blastozystenhöhle (Blastocoel) für den Keim?",
    options: [
          "Sie schafft einen räumlich getrennten Hohlraum, der die Differenzierung und Trennung zwischen der äußeren Zellschicht (Trophoblast) und der inneren Zellmasse (Embryoblast) ermöglicht.",
          "Sie dient als temporäre Harnblase zur Speicherung mütterlicher Abfallstoffe.",
          "Sie versorgt den Keim über Blutgefäße mit Erythrozyten.",
          "Sie ermöglicht der Blastozyste das aktive Schwimmen gegen den Flüssigkeitsstrom im Eileiter.",
          "Sie füllt sich mit Magensaft zur Auflösung der Zona pellucida."
    ],
    correctAnswer: 0,
    explanation:
      "Durch Flüssigkeitsansammlung im Inneren entsteht die Blastozystenhöhle. Sie drängt die innere Zellmasse (Embryoblast) an einen Pol und trennt sie räumlich und funktionell vom umgebenden Trophoblasten.",
    tags: ["BMS","Biologie","Frühentwicklung","Blastozyste","Blastozystenhöhle","Embryoblast","Trophoblast"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Schicksal der Blastozystenzellen",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage beschreibt die funktionelle Aufteilung der Zellpopulationen in der menschlichen Blastozyste korrekt?",
    options: [
          "Der Trophoblast bildet das gesamte Nervensystem, während der Embryoblast die Plazenta bildet.",
          "Aus dem Embryoblasten (innere Zellmasse) entsteht der eigentliche Körper des Embryos, während der Trophoblast (äußere Zellschicht) die fetalen Anteile der Plazenta und Eihäute bildet.",
          "Beide Zellschichten haben dieselbe Funktion und bilden ausschließlich Skelettmuskulatur.",
          "Der Embryoblast löst sich vor der Einnistung vollständig auf.",
          "Der Trophoblast wandelt sich nach der Einnistung in das Gehirn des Embryos um."
    ],
    correctAnswer: 1,
    explanation:
      "In der Blastozyste findet die erste fundamentale Weichenstellung statt: Der Embryoblast (inner cell mass) liefert die Zellen für den eigentlichen Embryo und die Keimblätter. Der Trophoblast bildet die äußere Umhüllung, vermittelt die Einnistung in das Endometrium und formt den fetalen Anteil der Plazenta.",
    tags: ["BMS","Biologie","Frühentwicklung","Blastozyste","Embryoblast","Trophoblast","Differenzierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Hatching der Blastozyste",
    difficulty: "Mittel",
    questionText:
      "Welcher Vorgang ist eine zwingende Voraussetzung dafür, dass die Blastozyste am 5. bis 6. Entwicklungstag Kontakt mit dem mütterlichen Endometrium aufnehmen und sich einnisten kann?",
    options: [
          "Die Verknöcherung der inneren Zellmasse",
          "Die vollständige Entleerung der Blastozystenhöhle in den Eileiter",
          "Die Verdopplung der Zona pellucida zum Schutz vor dem Uterusmilieu",
          "Das „Hatching“ (Schlüpfen), bei dem die Blastozyste die umgebende Zona pellucida enzymatisch anlöst und verlässt",
          "Die spontane Teilung der Blastozyste in zwei getrennte Keime"
    ],
    correctAnswer: 3,
    explanation:
      "Die Zona pellucida verhindert während der Wanderung durch den Eileiter eine vorzeitige Einnistung. Erst im Uterus löst die Blastozyste die Hülle enzymatisch an und schlüpft aus (Hatching). Nur so können die Trophoblastzellen direkten Kontakt mit der Uterusschleimhaut aufnehmen.",
    tags: ["BMS","Biologie","Frühentwicklung","Hatching","Blastozyste","Zona pellucida","Nidation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Trophoblast-Differenzierung",
    difficulty: "Mittel",
    questionText:
      "Wie vollzieht der Trophoblast nach dem ersten Schleimhautkontakt das invasive Eindringen in das mütterliche Endometrium?",
    options: [
          "Er bildet Zilien aus, die sich wie Anker in den Gebärmuttermuskel bohren.",
          "Er stirbt sofort ab und überlässt die Einnistung vollständig dem Embryoblasten.",
          "Er differenziert sich in einen inneren Zytotrophoblasten und einen äußeren Synzytiotrophoblasten (ein vielkerniges Synzytium), der proteolytische Enzyme zur Auflösung des mütterlichen Gewebes abgibt.",
          "Er schrumpft zusammen, um durch die Poren der Uteruswand in die Bauchhöhle zu wandern.",
          "Er wandelt sich in Knorpelgewebe um, das die Schleimhaut mechanisch verdrängt."
    ],
    correctAnswer: 2,
    explanation:
      "Beim Kontakt mit dem Endometrium bildet der Trophoblast zwei Schichten: den inneren, zellulären Zytotrophoblasten und den äußeren Synzytiotrophoblasten. Letzterer gibt lytische Enzyme ab, dringt in die Gebärmutterschleimhaut ein und bildet das Schwangerschaftshormon hCG.",
    tags: ["BMS","Biologie","Frühentwicklung","Trophoblast","Zytotrophoblast","Synzytiotrophoblast","Nidation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Gastrulation",
    difficulty: "Mittel",
    questionText:
      "Was ist das wesentliche morphogenetische Ergebnis der Gastrulation in der 3. Entwicklungswoche?",
    options: [
          "Die Entstehung der ersten reifen Knochen und Zähne",
          "Die Ausbildung der Lungenbläschen für die spätere Atmung",
          "Die Umwandlung der Morula in eine einkammrige Blastozyste",
          "Die Bildung der Gliedmaßenknospen (Arme und Beine)",
          "Die Umwandlung der zweiblättrigen Keimscheibe in die dreiblättrige Keimscheibe aus Ektoderm, Mesoderm und Endoderm"
    ],
    correctAnswer: 4,
    explanation:
      "Bei der Gastrulation wandern Zellen über den Primitivstreifen ein und formen die drei primären Keimblätter: Ektoderm (außen), Mesoderm (Mitte) und Endoderm (innen). Aus diesen drei Schichten gehen alle Gewebe des Körpers hervor.",
    tags: ["BMS","Biologie","Frühentwicklung","Gastrulation","Keimblätter","Mesoderm","Endoderm","Ektoderm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Gewebeursprung der Haut",
    difficulty: "Mittel",
    questionText:
      "Aus welchen embryonalen Keimblättern stammen die beiden Hauptschichten der menschlichen Haut (Epidermis und Dermis) primär ab?",
    options: [
          "Die Epidermis (Oberhaut) stammt aus dem Ektoderm, während die darunterliegende Dermis (Lederhaut) aus dem Mesoderm hervorgeht.",
          "Beide Hautschichten stammen ausschließlich aus dem Endoderm.",
          "Die Epidermis stammt aus dem Mesoderm; die Dermis aus dem Ektoderm.",
          "Die Epidermis stammt aus dem Endoderm; die Dermis aus dem Ektoderm.",
          "Beide Hautschichten stammen ausschließlich aus dem Ektoderm."
    ],
    correctAnswer: 0,
    explanation:
      "Die Haut entsteht aus zwei Keimblättern: Die oberflächliche Epithelschicht (Epidermis mit Haaren, Nägeln und Hautdrüsen) geht aus dem Ektoderm hervor. Das darunterliegende Bindegewebe der Lederhaut (Dermis) stammt aus dem Mesoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Haut","Epidermis","Dermis","Ektoderm","Mesoderm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Wandschichten des Magendarmtrakts",
    difficulty: "Mittel",
    questionText:
      "Die Wand des menschlichen Magen-Darm-Trakts besteht aus Epithel, Bindegewebe und glatter Muskulatur. Welcher embryonale Ursprung trifft auf diese Komponenten zu?",
    options: [
          "Epithel und Muskulatur stammen beide aus dem Ektoderm.",
          "Das innere Auskleidungsepithel stammt aus dem Endoderm; das umgebende Bindegewebe und die glatte Muskulatur stammen aus dem Mesoderm.",
          "Das gesamte Verdauungssystem inklusive aller Wandschichten stammt ausschließlich aus dem Endoderm.",
          "Das Epithel stammt aus dem Mesoderm, die Muskulatur aus dem Ektoderm.",
          "Die Muskulatur stammt aus dem Endoderm, das Epithel aus dem Ektoderm."
    ],
    correctAnswer: 1,
    explanation:
      "Das Endoderm liefert das funktionelle Auskleidungsepithel des Verdauungskanals und die Drüsen. Alle umgebenden bindegewebigen Schichten, Blutgefäße und die glatte Muskulatur der Wand entstehen aus dem Mesoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Endoderm","Mesoderm","Verdauungstrakt","Muskulatur"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Ektodermale Derivate",
    difficulty: "Mittel",
    questionText:
      "Welche der folgenden Strukturen leiten sich entwicklungsgeschichtlich primär aus dem Ektoderm ab?",
    options: [
          "Herzmuskel, Nieren und Knochenmark",
          "Bauchspeicheldrüse, Leber und Schilddrüsenepithel",
          "Zentrales Nervensystem (Gehirn und Rückenmark), Epidermis, Augenlinse und Zahnschmelz",
          "Skelettmuskulatur der Extremitäten und Milz",
          "Glatte Muskulatur der Harnblase und Hodenkanälchen"
    ],
    correctAnswer: 2,
    explanation:
      "Aus dem Ektoderm gehen hervor: das gesamte Nervensystem (Gehirn, Rückenmark, Nerven), Sinnesorgane (Netzhaut, Innenohr), die Augenlinse, die Oberhaut (Epidermis) und der Zahnschmelz.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Ektoderm","Nervensystem","Zahnschmelz","Sinnesorgane"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Teratogene Phase",
    difficulty: "Mittel",
    questionText:
      "Warum gilt die Embryonalperiode (insbesondere die 3. bis 8. Entwicklungswoche) als die empfindlichste Phase für schwere angeborene Fehlbildungen (Teratogenese)?",
    options: [
          "Weil in dieser Phase noch keine Zellteilungen stattfinden.",
          "Weil die Plazenta in dieser Phase alle Giftstoffe aktiv anreichert.",
          "Weil der Embryo in dieser Zeit keinen Zugang zu Nährstoffen hat.",
          "Weil in diesem Zeitraum die Organogenese (Anlage und Differenzierung aller Hauptorgansysteme) stattfindet und Störungen zu irreversiblen Fehlbildungen führen.",
          "Weil der Fetus in dieser Zeit bereits Außenluft atmet."
    ],
    correctAnswer: 3,
    explanation:
      "In der 3. bis 8. Woche (Embryonalperiode) werden die Grundstrukturen aller lebenswichtigen Organsysteme gebildet (Organogenese). Schädliche Substanzen (Teratogene wie Alkohol, bestimmte Medikamente oder Infektionen) führen in dieser sensiblen Phase zu schwersten anatomischen Fehlbildungen.",
    tags: ["BMS","Biologie","Frühentwicklung","Embryonalperiode","Organogenese","Teratogenese","Fehlbildungen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Morphogenese vs. Organogenese",
    difficulty: "Leicht",
    questionText:
      "Welche Aussage beschreibt den Unterschied zwischen Morphogenese und Organogenese in der Embryonalperiode am zutreffendsten?",
    options: [
          "Morphogenese bezeichnet die Reifung der Lunge, Organogenese die Entstehung der Zygote.",
          "Morphogenese findet nur nach der Geburt statt, Organogenese ausschließlich im Eileiter.",
          "Beide Begriffe bezeichnen identische Vorgänge bei der Meiose.",
          "Morphogenese ist die Bildung von roten Blutkörperchen, Organogenese der Abbau des Gelbkörpers.",
          "Morphogenese beschreibt die Ausbildung der äußeren Gestalt und Körperform des Keims, während Organogenese die spezifische Entstehung und Differenzierung der inneren Organe aus den Keimblättern bezeichnet."
    ],
    correctAnswer: 4,
    explanation:
      "Die Morphogenese formt die äußere dreidimensionale Gestalt des Embryos (Abfaltung, Krümmung, Extremitätenknospen). Die Organogenese bezeichnet die gezielte Anlage der einzelnen inneren Organe aus den drei Keimblättern.",
    tags: ["BMS","Biologie","Frühentwicklung","Morphogenese","Organogenese","Embryonalentwicklung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Organanlage vs. Organreifung",
    difficulty: "Leicht",
    questionText:
      "Was unterscheidet die Fetalperiode (ab der 9. Entwicklungswoche) biologisch grundlegend von der vorangehenden Embryonalperiode?",
    options: [
          "In der Fetalperiode sind die Organe im Grundriss bereits angelegt; der Schwerpunkt verlagert sich auf rasches Größen- und Massenwachstum sowie die funktionelle Ausreifung der Gewebe.",
          "In der Fetalperiode entstehen erstmals die drei Keimblätter.",
          "In der Fetalperiode stellt der Keim jegliches Zellwachstum ein.",
          "In der Fetalperiode wandert der Keim vom Eileiter in die Gebärmutter.",
          "In der Fetalperiode wird die Plazenta wieder abgebaut."
    ],
    correctAnswer: 0,
    explanation:
      "Mit dem Ende der 8. Entwicklungswoche sind alle Hauptorgane im Grundriss angelegt. Die anschließende Fetalperiode (ab Woche 9 bis zur Geburt) ist geprägt durch massives Größen- und Gewichtswachstum sowie die funktionelle Ausreifung der Organe.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetalperiode","Organreifung","Wachstum"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Surfactant & Lungenreife",
    difficulty: "Mittel",
    questionText:
      "Welche Substanz wird in der späten Fetalperiode von Zellen der Lunge gebildet, um die Oberflächenspannung der Alveolen herabzusetzen und so die Entfaltung der Lunge bei der Geburt zu ermöglichen?",
    options: [
          "Hämoglobin",
          "Kollagen",
          "Surfactant",
          "Melanin",
          "Myoglobin"
    ],
    correctAnswer: 2,
    explanation:
      "Surfactant wird von speziellen Alveolarzellen (Typ-II-Pneumozyten) gebildet. Es senkt die Oberflächenspannung der Alveolen stark ab und verhindert, dass die Lungenbläschen nach der Geburt beim Ausatmen zusammenfallen.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetus","Lunge","Surfactant","Alveolen","Lungenreife"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Stoffaustausch an der Plazentaschranke",
    difficulty: "Mittel",
    questionText:
      "Welche Aussage beschreibt den Stoffaustausch zwischen Mutter und Fetus über die Plazentaschranke zutreffend?",
    options: [
          "Mütterliches und fetales Blut vermischen sich in gemeinsamen Gefäßen vollständig.",
          "Gase (Sauerstoff, Kohlendioxid), Nährstoffe (wie Glukose und Aminosäuren) sowie mütterliche IgG-Antikörper passieren die Schranke selektiv, während sich die Blutströme im Normalfall nicht direkt vermischen.",
          "Über die Plazenta können ausschließlich Gase, aber keine Nährstoffe übertragen werden.",
          "Die Plazenta verhindert jeglichen Durchtritt von Nährstoffen zum Schutz des Kindes.",
          "Große mütterliche Blutzellen wie Erythrozyten fließen ungehindert in den Fetus über."
    ],
    correctAnswer: 1,
    explanation:
      "Die Plazentaschranke trennt das mütterliche und das fetale Blut. Der Stoffaustausch erfolgt selektiv: Sauerstoff, Nährstoffe und schützende IgG-Antikörper gelangen zum Fetus, während Kohlendioxid und Stoffwechselabbauprodukte an das mütterliche Blut abgegeben werden.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Plazentaschranke","Stoffaustausch","IgG"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Funktion von hCG in der Frühschwangerschaft",
    difficulty: "Leicht",
    questionText:
      "Welche zentrale hormonelle Funktion erfüllt das humane Choriongonadotropin (hCG) in den ersten Wochen der Schwangerschaft?",
    options: [
          "Es leitet sofort die Wehen und die Geburt ein.",
          "Es baut die Gebärmutterschleimhaut ab, um Platz für den Keim zu schaffen.",
          "Es senkt den Blutzuckerspiegel des Fetus.",
          "Es erhält den Gelbkörper (Corpus luteum) im Eierstock aufrecht, sodass dieser weiterhin Progesteron produziert und die Gebärmutterschleimhaut nicht abgestoßen wird.",
          "Es verhindert die Reifung der fetalen Knochen."
    ],
    correctAnswer: 3,
    explanation:
      "In der frühen Schwangerschaft verhindert das vom Trophoblasten gebildete hCG die Rückbildung des Gelbkörpers (Corpus luteum). Dadurch bleibt die Progesteronproduktion bestehen, die Gebärmutterschleimhaut bleibt erhalten und die Menstruationsblutung bleibt aus.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","hCG","Corpus luteum","Progesteron","Hormone"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Gasaustausch & HbF",
    difficulty: "Mittel",
    questionText:
      "Warum kann der Fetus über die Plazentaschranke effizient Sauerstoff aus dem mütterlichen Blut aufnehmen?",
    options: [
          "Weil der Fetus keine roten Blutkörperchen besitzt.",
          "Weil das mütterliche Blut den Sauerstoff aktiv in die fetale Lunge pumpt.",
          "Weil im Fetus kein Sauerstoff verbraucht wird.",
          "Weil das Fruchtwasser aktiv Sauerstoff aus der Außenluft filtert.",
          "Weil fetales Hämoglobin (HbF) eine höhere Sauerstoffaffinität besitzt als adultes mütterliches Hämoglobin (HbA) und Sauerstoff daher effektiv an den Fetus gebunden wird."
    ],
    correctAnswer: 4,
    explanation:
      "Fetales Hämoglobin (HbF) bindet Sauerstoff fester als das adulte Hämoglobin (HbA) der Mutter. Dieser Affinitätsunterschied ermöglicht den effektiven Sauerstoffübertritt vom mütterlichen Blut in den fetalen Kreislauf an der Plazentaschranke.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Gasaustausch","Sauerstoff","HbF","Hämoglobin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Eihäute & Fruchthüllen: Amnion vs. Chorion",
    difficulty: "Mittel",
    questionText:
      "Welcher Unterschied besteht zwischen dem Amnion und dem Chorion hinsichtlich ihrer Lage und Funktion?",
    options: [
          "Das Amnion ist die innere Fruchthülle, die direkt die Fruchtwasserhöhle begrenzt; das Chorion ist die äußere Fruchthülle, deren Zottenanteil die fetale Plazenta bildet.",
          "Das Amnion bildet die knöcherne Schädelkapsel des Embryos, das Chorion die Muskulatur.",
          "Das Chorion liegt innen und ist mit Fruchtwasser gefüllt; das Amnion bildet die Nabelschnurarterien.",
          "Beide Begriffe bezeichnen dieselbe Schicht ohne anatomischen Unterschied.",
          "Das Amnion ist eine mütterliche Schleimhautschicht, das Chorion ein Teil des mütterlichen Herzens."
    ],
    correctAnswer: 0,
    explanation:
      "Das Amnion (Schafhaut) kleidet die Fruchtblase von innen aus und umschließt das schützende Fruchtwasser. Das außen liegende Chorion (Zottenhaut) bildet mit seinen Zotten den fetalen Anteil der Plazenta.",
    tags: ["BMS","Biologie","Frühentwicklung","Eihäute","Amnion","Chorion","Fruchthüllen","Plazenta"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Umgehung der Lunge",
    difficulty: "Mittel",
    questionText:
      "Warum wird der Lungenkreislauf des Fetus vor der Geburt über Kurzschlussverbindungen (wie Foramen ovale und Ductus arteriosus) weitgehend umgangen?",
    options: [
          "Weil das fetale Herz vor der Geburt noch kein Blut pumpen kann.",
          "Weil die fetale Lunge noch mit Flüssigkeit gefüllt ist und nicht der Atmung dient; der Gasaustausch findet vor der Geburt vollständig über die Plazenta statt.",
          "Weil das Blut im Fetus ausschließlich durch die Nieren fließt.",
          "Weil der Fetus vor der Geburt keinen Sauerstoff benötigt.",
          "Weil die Lunge erst im Erwachsenenalter angelegt wird."
    ],
    correctAnswer: 1,
    explanation:
      "Im Mutterleib ist die fetale Lunge nicht belüftet und hat einen hohen Gefäßwiderstand. Der Gasaustausch erfolgt über die Plazenta. Über das Foramen ovale und den Ductus arteriosus wird das Blut daher weitgehend am Lungenkreislauf vorbeigeleitet.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetaler Kreislauf","Foramen ovale","Ductus arteriosus","Shunt","Lunge"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Nabelschnur: Gefäße & Blutfluss",
    difficulty: "Mittel",
    questionText:
      "Welcher Blutfluss und Sauerstoffstatus herrscht in den Gefäßen der menschlichen Nabelschnur vor der Geburt?",
    options: [
          "Beide Nabelarterien führen sauerstoffreiches Blut zum Fetus hin; die Nabelvene führt sauerstoffarmes Blut ab.",
          "Alle drei Gefäße transportieren ausschließlich sauerstofffreies Lymphwasser.",
          "Die unpaare Vena umbilicalis transportiert sauerstoff- und nährstoffreiches Blut von der Plazenta zum Fetus; die paarigen Arteriae umbilicales transportieren sauerstoffarmes, metabolitbeladenes Blut vom Fetus zurück zur Plazenta.",
          "Die Nabelvene transportiert venöses Mischblut in den Magen des Fetus.",
          "Es existiert nur eine einzige Nabelarterie und keine Nabelvene."
    ],
    correctAnswer: 2,
    explanation:
      "Die Vena umbilicalis (Nabelvene) führt sauerstoff- und nährstoffreiches Blut von der Plazenta zum Fetus. Die zwei Arteriae umbilicales (Nabelarterien) leiten sauerstoffarmes Blut mit Abfallstoffen vom Fetus zurück zur Plazenta.",
    tags: ["BMS","Biologie","Frühentwicklung","Nabelschnur","Vena umbilicalis","Arteria umbilicalis","Blutfluss"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: Chronologie von Konzeption bis hCG",
    difficulty: "Leicht",
    questionText:
      "In welcher zeitlichen Reihenfolge laufen die entscheidenden Schritte von der Ovulation bis zum Nachweis einer Schwangerschaft im Urin über hCG typischerweise ab?",
    options: [
          "Nidation → Ovulation → Befruchtung → Furchung → hCG-Anstieg",
          "hCG-Anstieg → Furchung → Nidation → Ovulation → Befruchtung",
          "Befruchtung → Ovulation → Nidation → Furchung → hCG-Anstieg",
          "Ovulation im Ovar (Tag 0) → Befruchtung im Eileiter (Tag 1) → Furchungsteilungen während Tubenpassage (Tage 1–4) → Einnistung der Blastozyste (ab Tag 5–6) → Trophoblast sezerniert hCG, das ab Ende der 2. Woche im Urin nachweisbar wird",
          "Furchung → Nidation → Ovulation → Befruchtung → hCG-Anstieg"
    ],
    correctAnswer: 3,
    explanation:
      "Nach dem Eisprung erfolgt die Befruchtung im Eileiter. Der Keim furcht sich auf dem Weg zum Uterus. Nach dem Schlüpfen nistet sich die Blastozyste ab Tag 5–6 ein. Der Trophoblast bildet hCG, das nach ca. zwei Wochen im Urin nachgewiesen werden kann.",
    tags: ["BMS","Biologie","Frühentwicklung","Schwangerschaft","Ovulation","Befruchtung","Nidation","hCG"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set2-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: Schutzfunktion & Nestschutz",
    difficulty: "Leicht",
    questionText:
      "Welche Schutzfunktion überträgt die Mutter während der Schwangerschaft über die Plazenta auf den heranwachsenden Fetus?",
    options: [
          "Die Mutter überträgt ihre eigenen roten Blutkörperchen zur dauerhaften Besiedlung des Fetus.",
          "Alle mütterlichen Immunzellen wandern ungehindert in das fetale Gehirn ein.",
          "Die Mutter überträgt Magensäure zur Desinfektion des Fruchtwassers.",
          "Es findet überhaupt kein Schutztransport statt; der Fetus muss alle Abwehrstoffe selbst bilden.",
          "Mütterliche Antikörper der Klasse IgG können die Plazentaschranke passieren und verleihen dem Neugeborenen einen passiven Nestschutz gegen Infektionen in den ersten Lebensmonaten."
    ],
    correctAnswer: 4,
    explanation:
      "Mütterliche Immunglobuline der Klasse G (IgG) können als einzige Antikörperklasse die Plazentaschranke passieren. Sie versorgen den Fetus und das Neugeborene in den ersten Lebensmonaten mit einem passiven Immunschutz (Nestschutz).",
    tags: ["BMS","Biologie","Frühentwicklung","Plazentaschranke","Nestschutz","IgG","Immunsystem"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-03-set3-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Akrosomreaktion & Zona-Penetration",
    difficulty: "Mittel",
    questionText:
      "Ein Spermium erreicht die Eizelle im Eileiter, kann jedoch aufgrund eines genetischen Defekts keine lytischen Enzyme aus dem Akrosom freisetzen. Welche unmittelbare Konsequenz hat dies für den Befruchtungsvorgang?",
    options: [
          "Die Eizelle beendet sofort ihre zweite Reifeteilung (Meiose II).",
          "Das Spermium dringt direkt in den Zellkern der Eizelle ein, ohne die Hüllen zu passieren.",
          "Das Spermium kann die Zona pellucida nicht durchdringen und die Plasmamembran der Eizelle nicht erreichen; eine Befruchtung bleibt aus.",
          "Es kommt zur Polyspermie mit mehr als zwei Vorkernen.",
          "Die Zygote beginnt vorzeitig mit Furchungsteilungen ohne väterliche DNA."
    ],
    correctAnswer: 2,
    explanation:
      "Die Akrosomreaktion ist für die Penetration der Schutzhüllen der Eizelle unerlässlich: Nur durch die enzymatische Auflösung der Glykoproteinmatrix der Zona pellucida kann das Spermium zur Plasmamembran der Eizelle vordringen und mit ihr verschmelzen. Fehlen die Enzyme, bleibt das Spermium an der Zona pellucida hängen.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Akrosomreaktion","Zona pellucida","Infertilität"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Polyspermieblock & Polyploidie",
    difficulty: "Mittel",
    questionText:
      "In einem experimentellen Ansatz wird die kortikale Reaktion (Ausschüttung der kortikalen Granula) einer befruchteten menschlichen Eizelle gezielt blockiert. Welche Folge ist bei Anwesenheit zahlreicher beweglicher Spermien am wahrscheinlichsten?",
    options: [
          "Die Zona pellucida verhärtet sich nicht, wodurch weitere Spermien eindringen können (Polyspermie), was zu einer polyploiden, nicht lebensfähigen Zygote führt.",
          "Die Eizelle teilt sich sofort in eineiige Zwillinge.",
          "Die Eizelle stößt alle Zellkerne aus und bildet ausschließlich eine Plazenta ohne Embryo.",
          "Die Eizelle verhärtet sich spontan und blockiert auch das erste Spermium.",
          "Das Spermium verliert seine Geißel und wandert zurück in die Vagina."
    ],
    correctAnswer: 0,
    explanation:
      "Die kortikale Reaktion bewirkt die enzymatische Veränderung der Zona pellucida (Zonareaktion), sodass keine weiteren Spermien mehr binden können. Fällt dieser Mechanismus aus, kommt es zur Polyspermie (Eindringen mehrerer Spermien), was zu überzähligen Chromosomensätzen (z. B. Triploidie) und zum frühen Entwicklungsstillstand führt.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Kortikale Reaktion","Polyspermie","Zonareaktion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Morula-Identifikation",
    difficulty: "Mittel",
    questionText:
      "Ein mikroskopischer Schnitt zeigt einen kugeligen, maulbeerförmigen Zellhaufen aus etwa 16 bis 32 eng aneinanderliegenden Blastomeren, der noch von der Zona pellucida umhüllt ist und noch keinen inneren Flüssigkeitshohlraum (Blastozystenhöhle) aufweist. Welches Entwicklungsstadium liegt vor?",
    options: [
          "Zweizellstadium kurz nach der Befruchtung",
          "Dreikeimblättrige Gastrula",
          "Reife Blastozyste mit Trophoblast und Embryoblast",
          "Morula (Maulbeerkeim)",
          "Neurula mit geschlossenem Neuralrohr"
    ],
    correctAnswer: 3,
    explanation:
      "Das kugelige Stadium aus ca. 16 bis 32 dicht gepackten Blastomeren vor Entstehung der inneren Höhle wird als Morula (Maulbeerkeim) bezeichnet. Erst durch anschließende Flüssigkeitsaufnahme wandelt sich die Morula in die Blastozyste um.",
    tags: ["BMS","Biologie","Frühentwicklung","Morula","Blastomeren","Entwicklungsstadien"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Furchungsmechanik",
    difficulty: "Leicht",
    questionText:
      "Ein Biologe misst den Durchmesser und das Gesamtvolumen eines Keims während der ersten drei Furchungsteilungen (vom 1-Zell- zum 8-Zell-Stadium). Welche Beobachtung wird er machen?",
    options: [
          "Das Gesamtvolumen des Keims verachtfacht sich proportional zur Zellzahl.",
          "Das Gesamtvolumen des Keims bleibt nahezu unverändert, während das Zytoplasma-Volumen der einzelnen Tochterzellen (Blastomeren) mit jeder Teilung um etwa die Hälfte abnimmt.",
          "Die Blastomeren verlieren mit jeder Teilung die Hälfte ihrer Chromosomen.",
          "Die Zona pellucida wächst mit jeder Teilung auf die doppelte Dicke an.",
          "Die Zellen differenzieren sich bereits im 4-Zell-Stadium in reife Nerven- und Muskelzellen."
    ],
    correctAnswer: 1,
    explanation:
      "Während der Furchungsteilung teilt sich die Zygote mitotisch, ohne dass ein zelluläres Wachstum stattfindet. Umschlossen von der Zona pellucida bleibt das Gesamtvolumen des Keims konstant; die entstehenden Blastomeren werden mit jeder Teilung schrittweise kleiner.",
    tags: ["BMS","Biologie","Frühentwicklung","Furchung","Blastomeren","Zellvolumen","Zona pellucida"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Funktion des Trophoblasten",
    difficulty: "Mittel",
    questionText:
      "Ein genetischer Defekt führt dazu, dass sich in der Blastozyste zwar die innere Zellmasse (Embryoblast) normal entwickelt, die äußere Zellschicht (Trophoblast) jedoch keine Enzyme bilden und nicht an die Uterusschleimhaut anheften kann. Welche Folge resultiert daraus unmittelbar?",
    options: [
          "Der Embryo wächst ohne Plazenta direkt in der freien Bauchhöhle heran.",
          "Es entstehen sofort vier getrennte Keimblätter.",
          "Die Furchungsteilungen laufen rückwärts ab.",
          "Der Embryoblast wandelt sich spontan in Fruchthüllen um.",
          "Die Einnistung (Nidation) in das Endometrium und die Bildung der fetalen Plazentaanteile schlagen fehl, sodass sich die Schwangerschaft nicht etablieren kann."
    ],
    correctAnswer: 4,
    explanation:
      "Der Trophoblast ist zwingend für die Adhäsion und das invasive Eindringen in das mütterliche Endometrium erforderlich. Ohne funktionellen Trophoblasten kann keine Implantation (Nidation) und keine Plazentabildung stattfinden; der Keim kann sich nicht in der Gebärmutter verankern.",
    tags: ["BMS","Biologie","Frühentwicklung","Blastozyste","Trophoblast","Nidation","Implantation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Hatching & Implantation",
    difficulty: "Mittel",
    questionText:
      "Eine menschliche Blastozyste erreicht am 5. Tag nach der Befruchtung das Uteruscavum. Durch eine pathologische Verhärtung der Zona pellucida bleibt das „Hatching“ (Schlüpfen der Blastozyste) jedoch vollständig aus. Welche Konsequenz ist zu erwarten?",
    options: [
          "Die Blastozyste kann keinen direkten Kontakt mit dem Endometrium herstellen; eine Implantation bleibt aus und der Keim geht zugrunde oder wird ausgestoßen.",
          "Die Blastozyste nistet sich stattdessen sofort in der Harnblase ein.",
          "Der Keim teilt sich innerhalb der Zona pellucida in einen fertigen Fetus.",
          "Die Gastrulation wird vorzeitig innerhalb des Eileiters abgeschlossen.",
          "Die Zona pellucida wandelt sich in die Nabelschnur um."
    ],
    correctAnswer: 0,
    explanation:
      "Das Schlüpfen aus der Zona pellucida (Hatching) ist die unabdingbare Voraussetzung für die Einnistung. Die Zona pellucida schirmt die Trophoblastzellen ab. Kann die Blastozyste nicht schlüpfen, können ihre Oberflächenmoleküle nicht an das Uterusepithel binden; eine Implantation ist unmöglich.",
    tags: ["BMS","Biologie","Frühentwicklung","Hatching","Zona pellucida","Nidation","Blastozyste"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Verzögerter Transport & Eileiterschwangerschaft",
    difficulty: "Mittel",
    questionText:
      "Bei einer Patientin ist der Transport der befruchteten Eizelle durch den Eileiter stark verlangsamt. Die Blastozyste schlüpft („Hatching“) am 6. Tag noch während des Verweilens im Eileiter (Tuba uterina). Welches Ereignis tritt infolgedessen mit hoher Wahrscheinlichkeit auf?",
    options: [
          "Eine sofortige Umkehr des Keims zurück in den Eierstock",
          "Die Bildung von drei getrennten Plazenten in der Gebärmutterhöhle",
          "Eine Eileiterschwangerschaft (Tubargravidität), da die geschlüpfte Blastozyste direkt in die Schleimhaut der Eileiterwand einwandert und dort implantiert",
          "Das Ausbleiben jeglicher Hormonproduktion und sofortiges Verschwinden des Keims",
          "Die Wanderung des Keims in die Harnblase"
    ],
    correctAnswer: 2,
    explanation:
      "Sobald die Blastozyste schlüpft, wird ihr Trophoblast adhäsiv und invasiv. Befindet sich der Keim durch eine Transportverzögerung noch im Eileiter, nistet er sich in der Eileiterschleimhaut ein. Dies führt zu einer Eileiterschwangerschaft (Tubargravidität).",
    tags: ["BMS","Biologie","Frühentwicklung","Tubargravidität","Extrauteringravidität","Nidation","Eileiter"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Hormonelle Unterstützung durch Progesteron",
    difficulty: "Leicht",
    questionText:
      "Wenn in der zweiten Zyklushälfte unmittelbar nach der Befruchtung die Progesteronkonzentration der Mutter drastisch abfällt (z. B. durch vorzeitige Gelbkörperinsuffizienz), welche Konsequenz hat dies für das Endometrium und die beginnende Schwangerschaft?",
    options: [
          "Das Endometrium wächst übermäßig an und verschließt die Eileiter.",
          "Die sekretorische Umwandlung des Endometriums bricht zusammen, die Schleimhaut wird im Rahmen einer Regelblutung abgestoßen und die Einnistung der Blastozyste wird verhindert.",
          "Die Blastozyste verwandelt sich sofort in Knochengewebe.",
          "Die Plazenta beginnt sofort mit der Produktion von Milch.",
          "Der Fetus beschleunigt seine Entwicklung auf wenige Tage."
    ],
    correctAnswer: 1,
    explanation:
      "Progesteron ist das entscheidende Schwangerschaftserhaltungshormon: Es wandelt das Endometrium in eine sekretionsbereite Schleimhaut um und verhindert die Menstruationsblutung. Fällt Progesteron frühzeitig ab, wird die Gebärmutterschleimhaut abgestoßen und der Keim geht verloren.",
    tags: ["BMS","Biologie","Frühentwicklung","Progesteron","Endometrium","Corpus luteum","Nidation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Ausfall des Mesoderms",
    difficulty: "Mittel",
    questionText:
      "In einem experimentellen Modell wird während der Gastrulation gezielt die Ausbildung des mittleren Keimblatts (Mesoderms) unterbunden. Welcher der folgenden Ausfälle ist in der weiteren Entwicklung dieses Keims primär zu erwarten?",
    options: [
          "Das Gehirn und das Rückenmark können nicht angelegt werden.",
          "Das Innenepithel des Magens und der Lunge kann nicht gebildet werden.",
          "Die Epidermis der Haut und der Zahnschmelz fehlen vollständig.",
          "Das Herz-Kreislauf-System, die Skelettmuskulatur und das knöcherne Skelett können nicht angelegt werden.",
          "Die Augenlinse und die Sinneszellen des Innenohrs fehlen vollständig."
    ],
    correctAnswer: 3,
    explanation:
      "Das Mesoderm liefert die Vorläufer für das gesamte Herz-Kreislauf-System (Herz, Gefäße, Blutzellen), das Skelettsystem (Knochen, Knorpel), alle Muskelarten sowie Nieren und Keimdrüsen. Fällt das Mesoderm aus, können diese Organsysteme nicht entstehen.",
    tags: ["BMS","Biologie","Frühentwicklung","Gastrulation","Keimblätter","Mesoderm","Organogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Mesoderm-Zuordnung",
    difficulty: "Mittel",
    questionText:
      "Ein Histologe analysiert drei verschiedene Gewebeproben eines menschlichen Körpers: (1) Nierengewebe mit Glomeruli, (2) Herzmuskelgewebe und (3) Knochengewebe mit Osteozyten. Aus welchem gemeinsamen embryonalen Keimblatt leiten sich alle drei untersuchten Gewebetypen primär ab?",
    options: [
          "Ausschließlich aus dem Ektoderm",
          "Ausschließlich aus dem Endoderm",
          "Aus dem Amnionepithel",
          "Aus dem Dottersackendoderm",
          "Aus dem Mesoderm"
    ],
    correctAnswer: 4,
    explanation:
      "Nierengewebe, Herzmuskulatur und Knochengewebe leiten sich alle aus dem mittleren Keimblatt (Mesoderm) ab.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Mesoderm","Niere","Herz","Knochen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Ursprung der Zahngewebe",
    difficulty: "Schwer",
    questionText:
      "Welche Zuordnung beschreibt den embryologischen Ursprung der Gewebe des menschlichen Zahns (Zahnschmelz vs. Dentin und Zahnpulpa) korrekt?",
    options: [
          "Zahnschmelz und Dentin stammen beide ausschließlich aus dem Endoderm.",
          "Zahnschmelz stammt aus dem Mesoderm; Dentin und Pulpa aus dem Endoderm.",
          "Der Zahnschmelz stammt aus dem Ektoderm; Dentin und Zahnpulpa entstehen aus dem von der Neuralleiste abstammenden Ektomesenchym.",
          "Alle Zahngewebe stammen ausschließlich aus dem Trophoblasten.",
          "Zahnschmelz und Zahnpulpa stammen beide direkt aus dem Amnionepithel."
    ],
    correctAnswer: 2,
    explanation:
      "Der äußere Zahnschmelz entsteht aus dem Epithel der Mundbucht (Ektoderm). Das darunterliegende Dentin (Zahnbein) sowie die vaskularisierte und innervierte Zahnpulpa gehen aus dem Ektomesenchym (Mesenchym mit Neuralleistenzellen) hervor.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Ektoderm","Neuralleiste","Zahnschmelz","Dentin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Gewebeschichten des Respirationstrakts",
    difficulty: "Schwer",
    questionText:
      "Die Luftröhre (Trachea) besteht innen aus einem respiratorischen Flimmerepithel mit Becherzellen und außen aus hyalinen Knorpelspangen sowie glatter Muskulatur. Welcher embryonale Ursprung trifft auf diese Komponenten zu?",
    options: [
          "Das Innenepithel der Luftröhre stammt aus dem Endoderm; die Knorpelspangen und die glatte Muskulatur stammen aus dem Mesoderm.",
          "Das Innenepithel stammt aus dem Ektoderm; Knorpel und Muskeln stammen aus dem Endoderm.",
          "Alle Schichten der Trachea stammen vollständig aus dem Ektoderm.",
          "Das Innenepithel stammt aus dem Mesoderm; Knorpel und Muskeln stammen aus dem Ektoderm.",
          "Knorpel und Epithel stammen beide aus dem Trophoblasten."
    ],
    correctAnswer: 0,
    explanation:
      "Der gesamte Respirationstrakt sprosst als Lungenknospe aus dem embryonalen Vorderdarm (Endoderm) aus. Daher stammt das epitheliale Innenfutter aus dem Endoderm. Die bindegewebigen Knorpelspangen, Blutgefäße und die glatte Muskulatur der Trachealwand entstehen aus dem umhüllenden Mesoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Endoderm","Mesoderm","Trachea","Respirationstrakt"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Teratogene Phase vs. Fetalperiode",
    difficulty: "Mittel",
    questionText:
      "Welche Auswirkung ist bei der Einnahme eines stark teratogenen Medikaments in der 4. bis 5. Entwicklungswoche im Vergleich zu einer Einnahme in der 30. Schwangerschaftswoche typischerweise zu erwarten?",
    options: [
          "In der 4. Woche entstehen ausschließlich kleine Verfärbungen der Fingernägel, in der 30. Woche fehlen alle vier Extremitäten.",
          "In der 4. bis 5. Woche (Phase der Organogenese) drohen schwere anatomische Fehlbildungen (z. B. Fehlbildungen von Extremitäten und Herz); in der 30. Woche (Fetalperiode) betrifft die Schädigung primär das Wachstum oder die funktionelle Reifung bereits angelegter Organe.",
          "In der 4. Woche hat das Medikament keinerlei Wirkung, da der Embryo noch keine DNA besitzt.",
          "In beiden Entwicklungsphasen entstehen exakt dieselben strukturellen Fehlbildungen an Armen und Beinen.",
          "In der 4. Woche wird die Schwangerschaft automatisch in eine Zwillingsschwangerschaft umgewandelt."
    ],
    correctAnswer: 1,
    explanation:
      "In der Embryonalperiode (Woche 3–8) werden die Organe neu angelegt (Organogenese); Teratogene führen hier zu schweren morphologischen Fehlbildungen (Dysmorphien wie Amelie/Phokomelie oder Herzseptumdefekte). In der Fetalperiode (ab Woche 9) sind die Organe bereits vorhanden; Schädigungen führen vor allem zu Wachstumsretardierungen oder funktionellen Defiziten (z. B. ZNS-Reifungsstörungen).",
    tags: ["BMS","Biologie","Frühentwicklung","Teratogenese","Embryonalperiode","Fetalperiode","Organogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Alles-oder-Nichts-Prinzip",
    difficulty: "Mittel",
    questionText:
      "In der Frühphase der Schwangerschaft (1. bis 2. Entwicklungswoche nach der Befruchtung, vor Abschluss der Implantation) gilt für schädliche äußere Einflüsse häufig das sogenannte „Alles-oder-Nichts-Prinzip“. Was bedeutet dieses biologische Prinzip?",
    options: [
          "Alle Organe werden gleichzeitig verdoppelt oder keines.",
          "Entweder wird der Embryo männlich oder er wird weiblich.",
          "Der Keim entwickelt sich entweder zu einem Fetus oder zu einer Plazenta.",
          "Entweder ist der Schaden so schwerwiegend, dass der Keim abstirbt und unbemerkt ausgestoßen wird, oder geschädigte Zellen werden durch noch undifferenzierte Nachbarzellen vollständig ersetzt und die Entwicklung verläuft regulär.",
          "Alle Chromosomen gehen verloren oder verdoppeln sich auf das Vierfache."
    ],
    correctAnswer: 3,
    explanation:
      "In der Präimplantationsphase und frühen Furchung sind die Blastomeren hochgradig regulativ. Werden einzelne Zellen zerstört, können die verbleibenden Zellen den Verlust kompensieren ('Nichts'). Ist die Schädigung zu massiv, stirbt der Keim ab ('Alles'). Strukturelle Organfehlbildungen entstehen erst bei Teratogen-Exposition während der Organogenese ab Woche 3.",
    tags: ["BMS","Biologie","Frühentwicklung","Alles-oder-Nichts","Präimplantationsphase","Teratogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Gesamte Chronologie",
    difficulty: "Leicht",
    questionText:
      "Welche der folgenden embryologischen Ereignisketten stellt die Entwicklungsereignisse in der biologisch korrekten chronologischen Reihenfolge dar?",
    options: [
          "Lungenreife mit Surfactant → Gastrulation → Befruchtung → Furchung",
          "Fetalperiode → Einnistung → Organogenese → Zygote",
          "Gastrulation → Furchung → Blastozyste → Fetalperiode",
          "Organogenese → Zygote → Morula → Nidation",
          "Befruchtung → Furchung zur Morula → Nidation der Blastozyste → Gastrulation (3 Keimblätter) → Organogenese (Embryonalperiode bis W8) → Fetalperiode (Reifung & Wachstum ab W9)"
    ],
    correctAnswer: 4,
    explanation:
      "Die biologische Reihenfolge lautet: Konzeption (Tag 1) → Furchung (Tage 1–3) → Morula (Tag 3–4) → Blastozyste & Nidation (Tag 5–7) → Gastrulation (3. Woche) → Organogenese in der Embryonalperiode (Wochen 4–8) → Fetalperiode mit Organreifung und Wachstum (Woche 9 bis Geburt).",
    tags: ["BMS","Biologie","Frühentwicklung","Entwicklungsstadien","Gastrulation","Embryo","Fetus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Surfactant-Mangel & Atemnotsyndrom",
    difficulty: "Mittel",
    questionText:
      "Ein Frühgeborenes kommt vor der ausreichenden Ausbildung von Surfactant in der Lunge zur Welt. Welche pathophysiologische Folge tritt unmittelbar nach dem ersten Atemversuch auf?",
    options: [
          "Die Lungenbläschen blähen sich irreversibel auf und platzen durch Unterdruck.",
          "Das Neugeborene scheidet übermäßig viel Urin über die Lunge aus.",
          "Aufgrund der hohen Oberflächenspannung kollabieren die Alveolen bei der Ausatmung (Atelektasen) und das Kind entwickelt ein schweres Atemnotsyndrom.",
          "Die Luftröhre verknöchert innerhalb von Minuten.",
          "Der Gasaustausch verlagert sich spontan wieder zurück in den Darm."
    ],
    correctAnswer: 2,
    explanation:
      "Surfactant setzt die Oberflächenspannung des Flüssigkeitsfilms in den Alveolen herab. Fehlt Surfactant bei Frühgeborenen, ist der Kollapsdruck beim Ausatmen so hoch, dass die Alveolen zusammenfallen (Atelektasen). Das Kind leidet am neonatalen Atemnotsyndrom (IRDS) und benötigt Atemunterstützung.",
    tags: ["BMS","Biologie","Frühentwicklung","Lunge","Surfactant","Frühgeburt","Atemnotsyndrom"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Hämatopoese-Verlagerung",
    difficulty: "Mittel",
    questionText:
      "Im Verlauf der menschlichen Pränatalentwicklung verlagert sich die Bildung der Blutzellen (Hämatopoese) über verschiedene embryonale und fetale Organe. Welche Reihenfolge beschreibt diese funktionelle Reifung korrekt?",
    options: [
          "Dottersack (embryonal) → Leber und Milz (fetal) → Rotes Knochenmark (späte Fetalperiode und postnatal)",
          "Zuerst im Gehirn, danach im Herzen und ab Geburt in der Lunge",
          "Ausschließlich in der Plazenta während der gesamten Schwangerschaft",
          "Zuerst in den Nieren, danach im Magen und nach der Geburt im Skelett",
          "Ausschließlich in den Haarfollikeln der Epidermis"
    ],
    correctAnswer: 0,
    explanation:
      "Die pränatale Blutbildung verläuft in drei aufeinanderfolgenden Phasen: (1) Mesodermale/Dottersack-Phase (frühe Embryonalphase), (2) Hepato-lienale Phase (Leber und Milz im Fetalstadium) und (3) Medulläre Phase (Übernahme durch das rote Knochenmark vor und nach der Geburt).",
    tags: ["BMS","Biologie","Frühentwicklung","Hämatopoese","Blutbildung","Leber","Knochenmark","Dottersack"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Plazentainsuffizienz & intrauterine Wachstumsretardierung",
    difficulty: "Mittel",
    questionText:
      "Bei einer Schwangeren liegt eine schwere Plazentainsuffizienz vor (die Durchblutung der intervillösen Räume und der Chorionzotten ist stark vermindert). Welche typische Kombination von Auswirkungen auf den Fetus ist infolgedessen zu erwarten?",
    options: [
          "Übermäßiges Riesenwachstum des Fetus und vorzeitige Verknöcherung aller Gelenke",
          "Mangelhafte Versorgung mit Sauerstoff (intrauterine Hypoxie), verminderte Nährstoffzufuhr und daraus resultierende intrauterine Wachstumsretardierung (geringes Geburtsgewicht)",
          "Sofortige Umwandlung des fetalen Blutes in mütterliches Blut",
          "Vorzeitige Ausstossung aller Zähne des Fetus im Mutterleib",
          "Vollständiger Stillstand der Herzaktionen der Mutter bei normalem Fetuswachstum"
    ],
    correctAnswer: 1,
    explanation:
      "Da die Plazenta das einzige Organ für die Sauerstoff- und Nährstoffversorgung (Glukose, Aminosäuren) des Fetus ist, führt eine Mangeldurchblutung (Plazentainsuffizienz) direkt zu fetalem Sauerstoffmangel (Hypoxie) und verlangsamtem Fetalwachstum (intrauterine Wachstumsretardierung / IUGR).",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Plazentainsuffizienz","Wachstumsretardierung","Hypoxie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: hCG, Corpus luteum & Schwangerschaftserhalt",
    difficulty: "Schwer",
    questionText:
      "Welche biologische Konsequenz tritt ein, wenn der Trophoblast in den ersten Schwangerschaftswochen kein oder zu wenig hCG produziert?",
    options: [
          "Die Plazenta verdoppelt sofort ihre Größe und übernimmt die Lungenfunktion der Mutter.",
          "Der Fetus produziert sofort eigenes hCG über die Nieren.",
          "Die Hirnanhangsdrüse der Mutter schüttet massiv Wachstumshormon aus.",
          "Der Gelbkörper (Corpus luteum) bildet sich mangels Stimulation vorzeitig zurück, die Progesteronproduktion bricht ein und die Gebärmutterschleimhaut wird mit dem Keim abgestoßen.",
          "Die Eizelle kehrt in den Eileiter zurück und wartet auf eine neue Befruchtung."
    ],
    correctAnswer: 3,
    explanation:
      "In den ersten Wochen hängt die Aufrechterhaltung des Endometriums vollständig von der Progesteronbildung des Corpus luteum im Eierstock ab. Fällt das trophoblastäre hCG weg, atrophiert der Gelbkörper, der Progesteronspiegel sinkt ab und die Gebärmutterschleimhaut wird abgestoßen.",
    tags: ["BMS","Biologie","Frühentwicklung","hCG","Corpus luteum","Progesteron","Abort","Plazenta"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Selektiver Antikörpertransfer (IgG vs. IgM)",
    difficulty: "Mittel",
    questionText:
      "Warum können mütterliche Antikörper der Klasse IgG die Plazentaschranke zum Fetus passieren, während Antikörper der Klasse IgM dies im Normalfall nicht können?",
    options: [
          "Weil IgM-Antikörper im Fruchtwasser sofort aufgelöst werden.",
          "Weil IgG-Antikörper kleiner sind als Sauerstoffmoleküle.",
          "Weil IgG-Antikörper ausschließlich über die Nabelschnurarterien fließen.",
          "Weil die Plazenta nur Antikörper aus dem Magen-Darm-Trakt aufnimmt.",
          "Weil mütterliche IgG-Antikörper als kleinere Monomere spezifisch über plazentare Transporter transportiert werden, während IgM-Antikörper als große Pentamere die Schranke nicht durchdringen."
    ],
    correctAnswer: 4,
    explanation:
      "Die Plazentaschranke besitzt spezifische Rezeptoren für IgG-Antikörper (Monomere), die den diaplazentaren Transport zum Fetus vermitteln (Nestschutz). IgM-Antikörper sind hochmolekulare Pentamere und können die intakte Plazentaschranke nicht überwinden.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","IgG","IgM","Rhesus-Inkompatibilität","Nestschutz"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Eihäute & Fruchthüllen: Schutzfunktion des Fruchtwassers",
    difficulty: "Schwer",
    questionText:
      "Welche wesentlichen biologischen Schutz- und Entwicklungsfunktionen erfüllt das Fruchtwasser (Amnionflüssigkeit) für den heranwachsenden Fetus?",
    options: [
          "Es liefert alle roten Blutkörperchen für den fetalen Kreislauf.",
          "Es schützt vor mechanischen Stößen, verhindert ein Abklemmen der Nabelschnur, ermöglicht symmetrische Bewegungsfreiheit und verhindert Verwachsungen des Keims mit der Eihaut.",
          "Es ersetzt vollständig die Verdauungsfunktion des fetalen Magens.",
          "Es dient als Speicherort für das Hormon hCG.",
          "Es verknöchert in der späten Schwangerschaft zum Schutz des Schädels."
    ],
    correctAnswer: 1,
    explanation:
      "Das Fruchtwasser erfüllt vitale Schutzfunktionen: Es wirkt als mechanischer Stoßdämpfer, verhindert das Abklemmen der Nabelschnur, ermöglicht ungehinderte Bewegungsfreiheit für die Muskel- und Gelenkentwicklung und verhindert das Verkleben der fetalen Haut mit dem Amnion.",
    tags: ["BMS","Biologie","Frühentwicklung","Fruchtwasser","Amnion","Fruchthüllen","Schutzfunktion"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Postpartale Kreislaufumstellung & Shuntverschluss",
    difficulty: "Schwer",
    questionText:
      "Unmittelbar nach der Geburt nimmt das Neugeborene seinen ersten Atemzug. Welche hämodynamischen Veränderungen führen zum funktionellen Verschluss der fetalen Kurzschlüsse (Foramen ovale und Ductus arteriosus)?",
    options: [
          "Der Blutdruck im rechten Vorhof steigt über den des linken Vorhofs, wodurch das Foramen ovale aufgerissen wird.",
          "Die Plazenta zieht sich zusammen und pumpt das gesamte Blut in die Milz.",
          "Die Belüftung der Lunge senkt den Gefäßwiderstand im Lungenkreislauf drastisch, der Druck im linken Vorhof übersteigt den im rechten Vorhof (Verschluss der Foramen-ovale-Klappe), und der steigende arterielle Sauerstoffgehalt induziert den Verschluss des Ductus arteriosus.",
          "Das fetale Hämoglobin wandelt sich schlagartig in Myoglobin um.",
          "Die Nabelschnurarterien öffnen sich weit und leiten Blut in die Bauchhöhle ab."
    ],
    correctAnswer: 2,
    explanation:
      "Mit der Lungenentfaltung sinkt der Gefäßwiderstand in der Lunge schlagartig. Dadurch fließt viel Blut über die Lungenvenen in den linken Vorhof; der Linksvorhofdruck übersteigt den Rechtsvorhofdruck, was die Klappe des Foramen ovale zudrückt. Gleichzeitig führt der Anstieg des Sauerstoffpartialdrucks zur Kontraktion und Verödung des Ductus arteriosus (Botalli).",
    tags: ["BMS","Biologie","Frühentwicklung","Fetaler Kreislauf","Foramen ovale","Ductus arteriosus","Geburt"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Gefäße der Nabelschnur",
    difficulty: "Mittel",
    questionText:
      "Bei einer pränatalen Ultraschalluntersuchung der Nabelschnur werden im Querschnitt nur zwei statt der normalen drei Blutgefäße dargestellt (Singuläre Umbilikalarterie: eine Arterie und eine Vene). Welches Gefäß führt in dieser Nabelschnur weiterhin das sauerstoffreiche Blut zum Fetus?",
    options: [
          "Die Vena umbilicalis",
          "Die verbleibende Arteria umbilicalis",
          "Der Ductus arteriosus",
          "Die Vena cava superior",
          "Die Aorta thoracica"
    ],
    correctAnswer: 0,
    explanation:
      "In der Nabelschnur führt ausnahmslos die Vena umbilicalis das sauerstoff- und nährstoffreiche Blut von der Plazenta zum Fetus hin (Venen führen zum fetalen Herzen). Die Nabelarterien (normalerweise zwei, bei einer Aplasie nur eine) führen sauerstoffarmes Blut vom Fetus zurück zur Plazenta.",
    tags: ["BMS","Biologie","Frühentwicklung","Nabelschnur","Vena umbilicalis","Arteria umbilicalis","Fetaler Kreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: hCG-Kinetik & Nidation",
    difficulty: "Leicht",
    questionText:
      "Eine Frau führt 2 Tage nach der Befruchtung (Tag 3 des Keims) einen handelsüblichen hCG-Urinschwangerschaftstest durch. Das Ergebnis ist negativ. Warum kann zu diesem Zeitpunkt noch kein hCG im Urin nachgewiesen werden?",
    options: [
          "Weil hCG ausschließlich vom männlichen Spermium gebildet wird.",
          "Weil die Zygote im Eileiter ausschließlich Progesteron und kein hCG ausscheidet.",
          "Weil hCG erst nach der Geburt des Kindes synthetisiert wird.",
          "Weil sich der Keim noch im Furchungsstadium (Morula) im Eileiter befindet, die Einnistung der Blastozyste noch nicht stattgefunden hat und der Synzytiotrophoblast erst nach Kontakt mit dem Endometrium nennenswerte Mengen hCG in das mütterliche Blut abgibt.",
          "Weil das Fruchtwasser jegliches hCG zersetzt."
    ],
    correctAnswer: 3,
    explanation:
      "hCG wird in nachweisbaren Mengen erst nach Beginn der Nidation (ab Tag 5–7) durch den Synzytiotrophoblasten gebildet und ins mütterliche Blut abgegeben. An Tag 2–3 wandert die Morula noch frei im Eileiter; es besteht noch keine Gefäßverbindung zur Mutter, sodass ein Test negativ sein muss.",
    tags: ["BMS","Biologie","Frühentwicklung","Schwangerschaftstest","hCG","Nidation","Morula"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set3-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: Zeitfenster der Teratogenese",
    difficulty: "Mittel",
    questionText:
      "Eine schwangere Patientin fragt ihren Arzt nach den Risiken von Umweltgiften und Medikamenten. Welche ärztliche Erklärung fasst die biologischen Gesetzmäßigkeiten der Pränatalentwicklung korrekt zusammen?",
    options: [
          "Das Risiko für Fehlbildungen ist im 9. Schwangerschaftsmonat am höchsten, weil der Fetus dann am größten ist.",
          "Vor der 12. Woche kann kein Giftstoff den Keim schädigen, da die Plazentaschranke absolut undurchdringlich ist.",
          "In der Fetalperiode führt jede Schädigung zum Fehlen ganzer Gliedmaßen.",
          "Umweltgifte können niemals die Plazenta passieren, da diese nur reine Nährstoffe filtert.",
          "In der Embryonalperiode (3.–8. Woche) führen teratogene Einflüsse vor allem zu schweren morphologischen Organfehlbildungen (gestörte Organogenese), während in der Fetalperiode (ab 9. Woche) funktionelle Defizite, Wachstumsretardierungen oder ZNS-Reifungsstörungen im Vordergrund stehen."
    ],
    correctAnswer: 4,
    explanation:
      "Die Empfindlichkeit gegenüber Teratogenen hängt vom Entwicklungsstadium ab: In den ersten 2 Wochen gilt das 'Alles-oder-Nichts-Prinzip'. In der Embryonalperiode (Woche 3–8) findet die Organogenese statt, wodurch das Risiko für schwere anatomische Fehlbildungen (Strukturdefekte) maximal ist. In der Fetalperiode (ab Woche 9) stehen funktionelle Reifungs- und Wachstumsstörungen im Vordergrund.",
    tags: ["BMS","Biologie","Frühentwicklung","Teratogenese","Embryonalperiode","Fetalperiode","Organogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-03-set4-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Akrosomfunktion",
    difficulty: "Mittel",
    questionText:
      "Ein Spermium bindet an die Corona radiata einer Eizelle, kann diese und die darunterliegende Zona pellucida jedoch nicht durchdringen. Welcher Defekt am Spermium liegt am ehesten vor?",
    options: [
          "Verlust des Mittelstücks mit Mitochondrienmangel",
          "Fehlen des Y-Chromosoms",
          "Unvollständige Ausbildung des Zellkerns",
          "Funktionsausfall des Akrosoms (Fehlen lytischer Enzyme)",
          "Mangelhafte Geißelbeweglichkeit im Uterus"
    ],
    correctAnswer: 3,
    explanation:
      "Das Akrosom an der Spitze des Spermienkopfes enthält lytische Enzyme, die bei der Akrosomreaktion freigesetzt werden, um die Corona radiata und die Zona pellucida zu durchdringen. Fehlen diese Enzyme, kann das Spermium die Eizellmembran nicht erreichen.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Akrosom","Zona pellucida","Spermium"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Polyspermie & Triploidie",
    difficulty: "Mittel",
    questionText:
      "Wenn zwei Spermien gleichzeitig in das Ooplasma einer Eizelle eindringen und mit deren Zellkern verschmelzen, wie viele Chromosomen enthält die resultierende Zygote im Normalfall?",
    options: [
          "23 Chromosomen (1n)",
          "69 Chromosomen (3n)",
          "46 Chromosomen (2n)",
          "92 Chromosomen (4n)",
          "47 Chromosomen (2n+1)"
    ],
    correctAnswer: 1,
    explanation:
      "Jedes Spermium liefert einen haploiden Chromosomensatz (n = 23), ebenso wie die Eizelle (n = 23). Verschmelzen zwei Spermien mit einer Eizelle (Dispermie / Polyspermie), entsteht ein triploider Chromosomensatz von 3n = 69 Chromosomen, was lethal ist.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Polyspermie","Triploidie","Chromosomensatz"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Furchungsmerkmale",
    difficulty: "Schwer",
    questionText:
      "Welche Aussage über die Furchungsteilungen der menschlichen Zygote bis zum Morula-Stadium ist FALSCH?",
    options: [
          "Die Furchungsteilungen laufen als Mitosen ab.",
          "Das Gesamtvolumen des Keims bleibt durch die umgebende Zona pellucida weitgehend konstant.",
          "Die einzelnen Tochterzellen (Blastomeren) werden mit jeder Teilung kleiner.",
          "Die frühen Furchungsschritte finden während des Transports durch den Eileiter statt.",
          "Die Zellen verdoppeln zwischen den Teilungen ihre Größe durch ausgeprägte G1- und G2-Wachstumsphasen."
    ],
    correctAnswer: 4,
    explanation:
      "Während der Furchungsteilung fehlen ausgeprägte Wachstumsphasen (G1 und G2 sind stark verkürzt). Daher nehmen die Zellen zwischen den mitotischen Teilungen nicht an Größe zu; das Gesamtvolumen bleibt konstant, während die Blastomeren kleiner werden.",
    tags: ["BMS","Biologie","Frühentwicklung","Furchung","Blastomeren","Zellzyklus","Morula"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Chronologie der Stadien",
    difficulty: "Leicht",
    questionText:
      "Welche Sequenz gibt die chronologische Reihenfolge der Entwicklungsstadien der ersten Schwangerschaftswoche korrekt wieder?",
    options: [
          "Zygote → Furchungsstadien → Morula → Blastozyste → Beginn der Nidation",
          "Blastozyste → Morula → Zygote → Gastrula",
          "Morula → Blastozyste → Zygote → Furchung",
          "Zygote → Gastrula → Morula → Blastozyste",
          "Blastozyste → Zygote → Nidation → Morula"
    ],
    correctAnswer: 0,
    explanation:
      "Die zeitliche Abfolge in Woche 1 lautet: Zygote (Tag 1) → 2-, 4-, 8-Zell-Furchungsstadien (Tage 1–3) → Morula (Tag 3–4) → Blastozyste (Tag 4–5) → Beginn der Einnistung/Nidation (Tag 5–6).",
    tags: ["BMS","Biologie","Frühentwicklung","Zygote","Morula","Blastozyste","Nidation","Chronologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Blastozystenstruktur",
    difficulty: "Mittel",
    questionText:
      "Was unterscheidet die Blastozyste (ca. Tag 4–5) morphologisch grundlegend von der vorangehenden Morula (Tag 3–4)?",
    options: [
          "Die Blastozyste besitzt drei Keimblätter, die Morula zwei.",
          "Die Morula ist von Eihäuten umgeben, die Blastozyste von Knochen.",
          "Die Blastozyste besitzt einen flüssigkeitsgefüllten Hohlraum (Blastozystenhöhle) und eine klare Trennung in Trophoblast und Embryoblast.",
          "Die Morula besteht aus haploiden Zellen, die Blastozyste aus diploiden Zellen.",
          "Die Blastozyste hat bereits ein funktionierendes schlagendes Herz."
    ],
    correctAnswer: 2,
    explanation:
      "Die Morula ist ein kompakter, solider Zellhaufen aus 16–32 Blastomeren. Durch Flüssigkeitseinstrom entsteht die Blastozyste mit ihrer zentralen Höhle (Blastocoel), dem äußeren Trophoblasten und der inneren Zellmasse (Embryoblast).",
    tags: ["BMS","Biologie","Frühentwicklung","Morula","Blastozyste","Trophoblast","Embryoblast"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Hatching & Implantation",
    difficulty: "Mittel",
    questionText:
      "Eine Blastozyste erreicht am 5. Tag nach der Befruchtung das Uteruscavum, kann jedoch ihre Zona pellucida nicht verlassen („Hatching bleibt aus“). Welcher Prozess wird dadurch unmittelbar verhindert?",
    options: [
          "Die Vollendung der Meiose I",
          "Die Ausbildung des diploiden Chromosomensatzes",
          "Der Übergang von der Zygote zur Morula",
          "Die Anheftung und Implantation (Nidation) der Trophoblastzellen an das Endometrium",
          "Die Entwicklung der fetalen Herztätigkeit in der 6. Woche"
    ],
    correctAnswer: 3,
    explanation:
      "Die Zona pellucida verhindert den direkten Zellkontakt zwischen Trophoblast und Uterusepithel. Erst nach dem Schlüpfen (Hatching) können die Trophoblastzellen an das Endometrium binden und die Implantation einleiten.",
    tags: ["BMS","Biologie","Frühentwicklung","Hatching","Zona pellucida","Nidation","Implantation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Synzytiotrophoblast",
    difficulty: "Mittel",
    questionText:
      "Welche Zellpopulation der Blastozyste bildet bei der Nidation ein vielkerniges, enzymatisch aktives Synzytium, das invasiv in die Gebärmutterschleimhaut einwächst?",
    options: [
          "Der Embryoblast",
          "Der Synzytiotrophoblast",
          "Das intraembryonale Mesoderm",
          "Das Amnionepithel",
          "Das viszerale Endoderm"
    ],
    correctAnswer: 1,
    explanation:
      "Der Trophoblast differenziert sich beim Kontakt mit dem Endometrium in den zellulären Zytotrophoblasten und den äußeren Synzytiotrophoblasten. Dieser verschmilzt zu einem vielkernigen Synzytium, sondert lytische Enzyme ab und dringt in das mütterliche Gewebe ein.",
    tags: ["BMS","Biologie","Frühentwicklung","Trophoblast","Synzytiotrophoblast","Nidation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Neuroektoderm",
    difficulty: "Leicht",
    questionText:
      "Aus welchem primären Keimblatt geht das menschliche Zentralnervensystem (Gehirn und Rückenmark) während der Embryonalentwicklung hervor?",
    options: [
          "Mesoderm",
          "Endoderm",
          "Trophoblast",
          "Hypoblast",
          "Ektoderm"
    ],
    correctAnswer: 4,
    explanation:
      "Das gesamte Nervensystem leitet sich aus dem Ektoderm ab: Durch Einstülpung des Neuroektoderms entsteht das Neuralrohr (ZNS: Gehirn und Rückenmark) sowie die Neuralleiste (PNS und weitere Strukturen).",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Ektoderm","Neuralrohr","ZNS"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Mesodermale Zuordnung",
    difficulty: "Mittel",
    questionText:
      "Eine Gewebeprobe enthält Knochengewebe (mit Osteoblasten) und Herzmuskelzellen. Aus welchem gemeinsamen Keimblatt stammen beide Strukturen primär ab?",
    options: [
          "Mesoderm",
          "Ektoderm",
          "Endoderm",
          "Trophoblast",
          "Neuroektoderm"
    ],
    correctAnswer: 0,
    explanation:
      "Sowohl Knochengewebe (Skelettsystem) als auch Herzmuskelgewebe (kardiovaskuläres System) leiten sich entwicklungsgeschichtlich aus dem mittleren Keimblatt (Mesoderm) ab.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Mesoderm","Knochen","Herz"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Endodermale Derivate",
    difficulty: "Mittel",
    questionText:
      "Aus welchem Keimblatt stammen das Auskleidungsepithel des Dünndarms sowie die funktionellen Drüsenzellen (Parenchym) von Leber und Bauchspeicheldrüse?",
    options: [
          "Ausschließlich aus dem Ektoderm",
          "Ausschließlich aus dem Mesoderm",
          "Aus dem Endoderm (Entoderm)",
          "Aus der Neuralleiste",
          "Aus dem Amnionmesoderm"
    ],
    correctAnswer: 2,
    explanation:
      "Das innere Keimblatt (Endoderm / Entoderm) kleidet den primitiven Darmkanal aus und bildet die epithelialen Drüsenkörper der großen Verdauungsorgane wie Leber und Pankreas.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Endoderm","Leber","Pankreas","Darm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Zuordnung Struktur und Keimblatt",
    difficulty: "Mittel",
    questionText:
      "Welche Zuordnung von Gewebestruktur und embryonalem Keimblatt ist KORREKT?",
    options: [
          "Lederhaut (Dermis) → Ektoderm",
          "Zentralnervensystem (Gehirn und Rückenmark) → Ektoderm",
          "Herzmuskel → Endoderm",
          "Auskleidungsepithel des Dünndarms → Ektoderm",
          "Knochengewebe → Endoderm"
    ],
    correctAnswer: 1,
    explanation:
      "Das Zentralnervensystem entsteht aus dem Neuroektoderm (Ektoderm). Dermis, Herzmuskel und Knochengewebe stammen aus dem Mesoderm, während das Darmepithel aus dem Endoderm hervorgeht.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Ektoderm","ZNS","Mesoderm","Endoderm"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Wandschichten des Magens",
    difficulty: "Schwer",
    questionText:
      "Bei einer histologischen Untersuchung der Magenwand werden (1) das sekretorische Schleimhautepithel und (2) die glatte Ring- und Längsmuskulatur analysiert. Welcher embryonale Ursprung trifft auf diese beiden Schichten zu?",
    options: [
          "Beide Schichten stammen vollständig aus dem Ektoderm.",
          "Beide Schichten stammen vollständig aus dem Mesoderm.",
          "Das Epithel stammt aus dem Mesoderm; die Muskulatur aus dem Endoderm.",
          "Das Epithel stammt aus dem Endoderm; die Muskulatur aus dem Mesoderm.",
          "Das Epithel stammt aus dem Ektoderm; die Muskulatur aus dem Endoderm."
    ],
    correctAnswer: 3,
    explanation:
      "Das innere Epithel des Magens entsteht aus dem Endoderm. Das umgebende Bindegewebe und die glatte Muskulatur der Magenwand stammen aus dem viszeralen Mesoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Endoderm","Mesoderm","Magen","Muskulatur"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Definition der Embryonalperiode",
    difficulty: "Mittel",
    questionText:
      "Bis zu welchem Zeitpunkt nach der Befruchtung (post conceptionem) spricht man von der Embryonalperiode und was charakterisiert diese Phase primär?",
    options: [
          "Bis zum Ende der 2. Woche — ausschließlich Furchungsteilungen",
          "Bis zur 24. Woche — funktionelle Lungenreife",
          "Bis zur Geburt — reines Längenwachstum",
          "Bis zur 16. Woche — Ausbildung der Knochenkerne",
          "Bis zum Ende der 8. Woche — Ausbildung der Organanlagen (Organogenese) und Körperformung"
    ],
    correctAnswer: 4,
    explanation:
      "Die Embryonalperiode reicht von der Befruchtung bis zum Ende der 8. Entwicklungswoche. In dieser Phase findet die Organogenese (Anlage aller Hauptorgane) statt. Ab der 9. Woche beginnt die Fetalperiode.",
    tags: ["BMS","Biologie","Frühentwicklung","Embryonalperiode","Organogenese","Fetalperiode"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Teratogenitätsfenster",
    difficulty: "Leicht",
    questionText:
      "In welchem Entwicklungszeitraum führt die Einwirkung schädigender Umweltstoffe (Teratogene wie Alkohol oder Medikamente) am ehesten zu schweren anatomischen Organfehlbildungen?",
    options: [
          "In der Embryonalperiode (3. bis 8. Entwicklungswoche während der Organogenese)",
          "Erst in den letzten 2 Wochen vor der Geburt",
          "Ausschließlich während der Meiose im Ovar vor der Befruchtung",
          "Erst nach Beginn der Fetalperiode ab der 30. Woche",
          "Ausschließlich nach dem ersten Atemzug des Neugeborenen"
    ],
    correctAnswer: 0,
    explanation:
      "Die 3. bis 8. Entwicklungswoche ist die empfindlichste Phase der Pränatalentwicklung, da hier die Organe neu angelegt werden. Teratogene führen in diesem Fenster zu schweren strukturellen Fehlbildungen.",
    tags: ["BMS","Biologie","Frühentwicklung","Teratogenese","Embryonalperiode","Organogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Surfactant & Oberflächenspannung",
    difficulty: "Mittel",
    questionText:
      "Ein Frühgeborenes besitzt in der Lunge noch zu wenig Surfactant. Warum führt dieser Mangel unmittelbar nach der Geburt zu schwerer Atemnot?",
    options: [
          "Weil die Luftröhre durch Schleim irreversibel verschlossen wird.",
          "Weil das Hämoglobin keinen Sauerstoff mehr binden kann.",
          "Weil die Oberflächenspannung in den Alveolen zu hoch ist und diese bei der Ausatmung kollabieren.",
          "Weil das Zwerchfell vollständig gelähmt ist.",
          "Weil das Blut nicht mehr durch das Herz gepumpt werden kann."
    ],
    correctAnswer: 2,
    explanation:
      "Surfactant senkt die Oberflächenspannung in den Alveolen. Fehlt Surfactant, kollabieren die Lungenbläschen beim Ausatmen aufgrund der hohen Oberflächenspannung, was zum Atemnotsyndrom führt.",
    tags: ["BMS","Biologie","Frühentwicklung","Lunge","Surfactant","Alveolen","Atemnotsyndrom"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Kennzeichen der Fetalperiode",
    difficulty: "Mittel",
    questionText:
      "Welcher biologische Prozess steht in der Fetalperiode (ab der 9. Entwicklungswoche bis zur Geburt) im Vordergrund?",
    options: [
          "Die erstmalige Bildung der drei Keimblätter",
          "Das massive Längen- und Massenwachstum sowie die funktionelle Ausreifung und Differenzierung der bereits angelegten Organe",
          "Die Rückbildung der Organanlagen zur Vorbereitung auf die Geburt",
          "Die Einnistung der Blastozyste in das Myometrium",
          "Die Entstehung der ersten Furchungsteilungen"
    ],
    correctAnswer: 1,
    explanation:
      "In der Fetalperiode sind alle Organe bereits topographisch vorhanden. Die verbleibende Pränatalzeit dient dem Größenwachstum, der Gewichtszunahme und der histologischen/funktionellen Ausreifung der Organe.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetalperiode","Organreifung","Wachstum"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Fetomaternaler Sauerstoffgradient & HbF",
    difficulty: "Schwer",
    questionText:
      "Warum kann an der Plazentaschranke Sauerstoff effektiv vom mütterlichen Blut auf das fetale Blut übertreten, obwohl das Blut im intervillösen Raum einen niedrigeren pO2 als in mütterlichen Arterien aufweist?",
    options: [
          "Weil die Plazentaschranke aktiv Sauerstoffmoleküle unter ATP-Verbrauch ins fetale Blut pumpt.",
          "Weil das mütterliche Blut keine Erythrozyten enthält.",
          "Weil der Fetus ausschließlich Kohlendioxid verbraucht.",
          "Weil das Fruchtwasser den Sauerstoffgehalt im Fetus verzehnfacht.",
          "Weil das fetale Hämoglobin (HbF) eine höhere Bindungsaffinität zu Sauerstoff besitzt als das adulte Hämoglobin (HbA) der Mutter."
    ],
    correctAnswer: 4,
    explanation:
      "Fetales Hämoglobin (HbF) besitzt eine höhere Affinität zu Sauerstoff als adultes Hämoglobin (HbA). Dadurch kann der Fetus Sauerstoff auch bei geringerem partiellem Druckgradienten effektiv an der Plazenta binden.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","HbF","Sauerstoff","Gasaustausch"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Diaplazentarer Antikörpertransfer",
    difficulty: "Mittel",
    questionText:
      "Welche Klasse mütterlicher Antikörper kann als einzige physiologischerweise die Plazentaschranke passieren und dem Neugeborenen Nestschutz verleihen?",
    options: [
          "Immunglobulin G (IgG)",
          "Immunglobulin M (IgM)",
          "Immunglobulin E (IgE)",
          "Immunglobulin D (IgD)",
          "Immunglobulin A (IgA als Dimer)"
    ],
    correctAnswer: 0,
    explanation:
      "Ausschließlich Immunglobuline der Klasse G (IgG) passieren rezeptorvermittelt die Plazentaschranke und bilden den humoralen Nestschutz des Säuglings für die ersten Lebensmonate.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","IgG","Nestschutz","Antikörper"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Endokrine Achse (hCG & Progesteron)",
    difficulty: "Schwer",
    questionText:
      "Welche hormonelle Signalkette sichert in den ersten Wochen der Schwangerschaft den Erhalt des Endometriums?",
    options: [
          "Östrogen aus der Hypophyse → Progesteronabfall → Ovulation",
          "FSH aus der Plazenta → Menstruationsblutung → Einnistung",
          "Oxytocin aus dem Ovar → Wehentätigkeit → Endometriumsaufbau",
          "hCG aus dem Trophoblasten → Stimulation des Corpus luteum → kontinuierliche Progesteronbildung",
          "Prolaktin aus dem Fetus → Abbau des Gelbkörpers → Schleimhauterhalt"
    ],
    correctAnswer: 3,
    explanation:
      "Das trophoblastäre hCG stimuliert den Gelbkörper (Corpus luteum) zur kontinuierlichen Progesteronsynthese. Progesteron verhindert die Abstoßung des Endometriums und erhält die frühe Schwangerschaft.",
    tags: ["BMS","Biologie","Frühentwicklung","hCG","Corpus luteum","Progesteron","Plazenta"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Eihäute: Amnion vs. Chorion",
    difficulty: "Mittel",
    questionText:
      "Welche Zuordnung beschreibt die Fruchthüllen der menschlichen Fruchtblase korrekt?",
    options: [
          "Das Amnion liegt außen und bildet die knöcherne Plazentaschale; das Chorion liegt innen.",
          "Beide Hüllen stammen ausschließlich aus dem mütterlichen Myometrium.",
          "Das Amnion (innere Eihaut) umschließt direkt die Fruchtwasserhöhle; das Chorion (äußere Eihaut) bildet mit seinen Zotten den fetalen Anteil der Plazenta.",
          "Das Chorion bildet das Gehirn des Embryos; das Amnion die Nabelschnurarterien.",
          "Das Amnion ist gasgefüllt, das Chorion flüssigkeitsgefüllt."
    ],
    correctAnswer: 2,
    explanation:
      "Die Fruchtblase besteht aus dem innen liegenden Amnion (Schafhaut), das die Amnionhöhle mit Fruchtwasser auskleidet, und dem außen liegenden Chorion (Zottenhaut), das die Zotten der Plazenta bildet.",
    tags: ["BMS","Biologie","Frühentwicklung","Amnion","Chorion","Fruchthüllen","Fruchtblase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Nabelschnurgefäße",
    difficulty: "Schwer",
    questionText:
      "Welche Aussage über die Blutgefäße der menschlichen Nabelschnur vor der Geburt ist KORREKT?",
    options: [
          "Die zwei Nabelvenen führen sauerstoffreiches Blut; die eine Nabelarterie führt sauerstoffarmes Blut.",
          "Die unpaare Vena umbilicalis führt sauerstoffreiches Blut zum Fetus; die paarigen Arteriae umbilicales führen sauerstoffarmes Blut zur Plazenta.",
          "Alle drei Gefäße führen sauerstoffreiches arterielles Mischblut.",
          "Die Arteriae umbilicales entspringen direkt aus dem linken Vorhof des Fetus.",
          "Die Nabelschnur enthält ausschließlich ein einzelnes Lymphgefäß."
    ],
    correctAnswer: 1,
    explanation:
      "Die normale Nabelschnur enthält drei Gefäße: Eine Vena umbilicalis, die sauerstoff- und nährstoffreiches Blut zum Fetus leitet, und zwei Arteriae umbilicales, die sauerstoffarmes Blut vom Fetus zur Plazenta zurückführen.",
    tags: ["BMS","Biologie","Frühentwicklung","Nabelschnur","Vena umbilicalis","Arteria umbilicalis","Fetaler Kreislauf"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Shunts",
    difficulty: "Schwer",
    questionText:
      "Über welche beiden fetalen Kurzschlüsse wird das Blut weitgehend am noch nicht belüfteten Lungenkreislauf vorbeigeleitet?",
    options: [
          "Foramen ovale (zwischen rechtem und linkem Vorhof) und Ductus arteriosus (zwischen Truncus pulmonalis und Aorta)",
          "Sinusknoten und AV-Knoten",
          "Eustachische Röhre und Pleuraspalt",
          "Vena portae und Ductus choledochus",
          "Aortenklappe und Pulmonalklappe"
    ],
    correctAnswer: 0,
    explanation:
      "Das Foramen ovale leitet Blut direkt von Vorhof zu Vorhof um. Der Ductus arteriosus (Botalli) verbindet die Pulmonalarterie mit der Aorta. Beide Kurzschlüsse umgehen die noch nicht belüftete Lunge.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetaler Kreislauf","Foramen ovale","Ductus arteriosus","Shunts"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Verschluss des Foramen ovale",
    difficulty: "Schwer",
    questionText:
      "Was geschieht unmittelbar nach dem ersten Atemzug des Neugeborenen mit dem Blutdruck im linken Vorhof und welche Auswirkung hat dies auf das Foramen ovale?",
    options: [
          "Der Druck im linken Vorhof fällt auf Null ab, wodurch das Foramen ovale weit aufgerissen wird.",
          "Der Druck im rechten Vorhof steigt massiv an und drückt die Vorhofwand ein.",
          "Der Druck im linken Vorhof übersteigt den im rechten Vorhof, wodurch die Klappe des Foramen ovale funktionell an das Septum gepresst und verschlossen wird.",
          "Beide Vorhöfe stellen ihre Pumptätigkeit dauerhaft ein.",
          "Das Foramen ovale wandelt sich in eine zusätzliche Herzkammer um."
    ],
    correctAnswer: 2,
    explanation:
      "Durch die Entfaltung der Lunge strömt vermehrt Blut über die Lungenvenen in das linke Atrium. Der dadurch ansteigende Druck im linken Vorhof drückt das Septum primum gegen das Septum secundum und verschließt das Foramen ovale funktionell.",
    tags: ["BMS","Biologie","Frühentwicklung","Foramen ovale","Fetaler Kreislauf","Geburt","Hämodynamik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: hCG-Nachweis & Nidation",
    difficulty: "Leicht",
    questionText:
      "Warum ist ein handelsüblicher Schwangerschaftstest im Urin 2 Tage nach der Befruchtung (vor der Einnistung) noch negativ?",
    options: [
          "Weil hCG im Urin erst nach der Menopause vorkommt.",
          "Weil hCG ausschließlich von der mütterlichen Leber synthetisiert wird.",
          "Weil der Test nur auf väterliche Hormone reagiert.",
          "Weil das Spermium jegliches hCG neutralisiert.",
          "Weil hCG erst nach der Nidation der Blastozyste durch den Synzytiotrophoblasten in ausreichender Menge gebildet und an das mütterliche Blut abgegeben wird."
    ],
    correctAnswer: 4,
    explanation:
      "In den ersten Tagen wandert der Keim frei im Eileiter. Erst nach der Implantation der Blastozyste (ab Tag 5–7) sezerniert der Synzytiotrophoblast hCG in das mütterliche Blut, das nach etwa 14 Tagen im Urin nachweisbar wird.",
    tags: ["BMS","Biologie","Frühentwicklung","Schwangerschaftstest","hCG","Nidation","Synzytiotrophoblast"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set4-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: Alles-oder-Nichts-Prinzip",
    difficulty: "Mittel",
    questionText:
      "Eine Frau ist in der 2. Entwicklungswoche nach der Befruchtung (Präimplantationsphase) einer Noxe ausgesetzt. Welches biologische Prinzip beschreibt die typische Reaktion des Keims in dieser Phase?",
    options: [
          "Es entstehen immer spezifische Herzseptumdefekte.",
          "Die Geschlechtschromosomen werden grundsätzlich verdoppelt.",
          "Alle Furchungszellen teilen sich in Vierlinge auf.",
          "„Alles-oder-Nichts-Prinzip“: Bei schwerer Schädigung kann der Keim absterben; bei geringerer Schädigung kann sich die Entwicklung aufgrund der hohen Regulationsfähigkeit des frühen Keims normal fortsetzen.",
          "Der Keim überspringt die Embryonalperiode und wird direkt zum Fetus."
    ],
    correctAnswer: 3,
    explanation:
      "In der sehr frühen Entwicklungsphase (Präimplantationsperiode, Wochen 1–2) können leichte Schädigungen durch die hohe Regulationsfähigkeit des Keims kompensiert werden. Bei schwerer Schädigung geht die Schwangerschaft dagegen meist unbemerkt verloren ('Alles-oder-Nichts-Prinzip'). Strukturelle Organfehlbildungen entstehen erst bei Teratogen-Exposition während der Organogenese ab Woche 3.",
    tags: ["BMS","Biologie","Frühentwicklung","Alles-oder-Nichts","Teratogenese","Präimplantationsphase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-03-set5-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Gesamte Signalkaskade",
    difficulty: "Mittel",
    questionText:
      "Ein Spermium bindet an die Zona pellucida einer Oozyte. Welche Reaktionskette beschreibt die physiologischen Schritte bis zur ersten mitotischen Teilung der Zygote in der richtigen Reihenfolge?",
    options: [
          "Meiose II der Eizelle → Akrosomreaktion → Gastrulation → Zygote",
          "Akrosomreaktion → Penetration der Zona pellucida → Membranfusion → kortikale Reaktion (Polyspermieblock) → Vollendung der Meiose II der Oozyte → Bildung und Verschmelzung der Vorkerne → Zygote",
          "Kortikale Reaktion → Akrosomreaktion → Meiose I → Bildung des Trophoblasten",
          "Verschmelzung der Vorkerne → Akrosomreaktion → Polyspermie → Zygote",
          "Nidation → Membranfusion → Meiose II → Morula"
    ],
    correctAnswer: 1,
    explanation:
      "Die Befruchtungskaskade verläuft streng geordnet: (1) Akrosomreaktion zur enzymatischen Penetration der Zona pellucida, (2) Membranfusion von Spermium und Eizelle, (3) kortikale Reaktion als Schutz vor Polyspermie, (4) Beendigung der Meiose II der Oozyte mit Ausstoß des 2. Polkörperchens und (5) Vorkernverschmelzung (Karyogamie) zur diploiden Zygote.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Akrosomreaktion","Kortikale Reaktion","Meiose","Zygote"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Befruchtung: Polyspermie & Triploidie",
    difficulty: "Mittel",
    questionText:
      "Wenn bei einer Fehlfunktion der Zonareaktion zwei Spermien gleichzeitig in dieselbe Eizelle eindringen und mit deren Zellkern verschmelzen (Dispermie / Polyspermie), welche genetische Konsequenz resultiert daraus für die Zygote?",
    options: [
          "Die Zygote bleibt haploid (1n = 23).",
          "Die Zygote teilt sich in zwei gesunde eineiige Zwillinge.",
          "Es entsteht eine Monosomie mit 45 Chromosomen.",
          "Es entsteht ein triploider Chromosomensatz (3n = 69), der beim Menschen nicht lebensfähig ist.",
          "Die Zygote verliert alle paternalen Chromosomen."
    ],
    correctAnswer: 3,
    explanation:
      "Jedes Spermium bringt einen haploiden Chromosomensatz (n = 23) mit. Verschmelzen zwei Spermien mit der haploiden Eizelle (Dispermie), entsteht ein triploider Chromosomensatz von 3n = 69 Chromosomen. Eine solche Triploidie führt zu schweren Entwicklungsstörungen und ist beim Menschen lethal.",
    tags: ["BMS","Biologie","Frühentwicklung","Befruchtung","Polyspermie","Triploidie","Chromosomensatz"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Blastozysten-Schicksal & Lokalisation",
    difficulty: "Schwer",
    questionText:
      "Ein Keim wird 5 Tage nach der Befruchtung untersucht: Er besteht aus einer äußeren Zellschicht (Trophoblast), einer inneren Zellansammlung (Embryoblast) und einem zentralen flüssigkeitsgefüllten Hohlraum. Die Zona pellucida beginnt sich gerade aufzulösen. Welche Aussage über diesen Keim und seine weitere Entwicklung ist KORREKT?",
    options: [
          "Es handelt sich um eine schlüpfende Blastozyste im Uteruscavum; der Embryoblast wird die drei Keimblätter des Embryos bilden, während der Trophoblast die fetalen Plazentaanteile liefert.",
          "Es handelt sich um eine Morula im Eierstock, deren Zellen bereits vollständig in fertige Organe ausdifferenziert sind.",
          "Es handelt sich um eine Gastrula in der Vagina, die keine Eihäute mehr bilden kann.",
          "Aus dem Trophoblasten entsteht das Gehirn, während der Embryoblast ausschließlich Fruchtwasser absondert.",
          "Der Keim hat bereits die Fetalperiode erreicht und besitzt funktionierende Lungenalveolen."
    ],
    correctAnswer: 0,
    explanation:
      "Am Tag 5–6 liegt die Blastozyste frei im Cavum uteri und schlüpft aus der Zona pellucida (Hatching). Der Embryoblast liefert den eigentlichen Embryonalkörper und alle Keimblätter; der Trophoblast bildet die fetalen Anteile der Plazenta und Fruchthüllen.",
    tags: ["BMS","Biologie","Frühentwicklung","Blastozyste","Trophoblast","Embryoblast","Hatching"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Furchungsmechanik & Zona-Restriktion",
    difficulty: "Leicht",
    questionText:
      "Warum führt die Zunahme der Zellzahl von 1 auf 32 Blastomeren während der ersten Furchungsteilungen zu KEINER wesentlichen Vergrößerung des Gesamtdurchmessers des Keims?",
    options: [
          "Weil die Zellen sofort ihr gesamtes Zytoplasma an das Blut der Mutter abgeben.",
          "Weil die Blastomeren während der Furchung keine DNA replizieren.",
          "Weil der Keim von der starren Zona pellucida umschlossen bleibt und die Zellteilungen ohne zwischengeschaltete zelluläre Wachstumsphasen (G1/G2) ablaufen.",
          "Weil die Zellen durch ständige Apoptose wieder abgebaut werden.",
          "Weil sich der Keim im Eileiter durch Dehydrierung zusammenzieht."
    ],
    correctAnswer: 2,
    explanation:
      "Während der Furchungsteilung werden die Mitosen ohne zwischengeschaltetes Zellwachstum (G1-/G2-Phasen sind extrem verkürzt) durchlaufen. Zudem begrenzt die starre Zona pellucida das maximale Volumen. Das Zytoplasma der Zygote wird lediglich auf immer kleinere Zellen aufgeteilt.",
    tags: ["BMS","Biologie","Frühentwicklung","Furchung","Blastomeren","Zona pellucida","Zellwachstum"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Kompaktierung",
    difficulty: "Mittel",
    questionText:
      "Im 8- bis 16-Zell-Stadium tritt das Phänomen der „Kompaktierung“ auf. Welche strukturelle und funktionelle Veränderung ist für diesen Schritt der Frühentwicklung charakteristisch?",
    options: [
          "Alle Zellen stoßen ihren Zellkern aus und werden zu Erythrozyten.",
          "Die Blastomeren trennen sich vollständig voneinander und schwimmen frei im Follikel.",
          "Die Zona pellucida verknöchert und bildet das embryonale Skelett.",
          "Die Zellen beginnen mit der Produktion von fetalem Hämoglobin.",
          "Die zuvor lockeren kugelförmigen Blastomeren flachen sich gegeneinander ab, bilden enge Zell-Zell-Kontakte und grenzen erstmals eine äußere Zellpopulation von einer inneren Zellmasse ab."
    ],
    correctAnswer: 4,
    explanation:
      "Bei der Kompaktierung (Tag 3) maximieren die Blastomeren ihren Kontakt zueinander durch Ausbildung von Zell-Zell-Verbindungen (Tight Junctions, Gap Junctions). Dadurch entsteht eine dichte Kugel, die erstmals zwischen äußeren Zellen (künftiger Trophoblast) und inneren Zellen (künftiger Embryoblast) unterscheidet.",
    tags: ["BMS","Biologie","Frühentwicklung","Kompaktierung","Morula","Blastomeren","Zelldifferenzierung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Frühe Embryonalentwicklung: Chronotopische Zuordnung",
    difficulty: "Mittel",
    questionText:
      "Welche Zuordnung verbindet das Entwicklungsstadium, den physiologischen Aufenthaltsort im weiblichen Genitaltrakt und den ungefähren Zeitpunkt nach der Befruchtung (post conceptionem) KORREKT?",
    options: [
          "Morula → Ampulle des Eileiters → Tag 14",
          "Blastozyste (frei vor Implantation) → Cavum uteri (Gebärmutterhöhle) → Tag 5–6",
          "Zweizellstadium → Gebärmuttermund (Zervix) → Tag 10",
          "Dreikeimblättrige Gastrula → Fimbrientrichter des Eileiters → Tag 1",
          "Fetus mit Organanlagen → Ovar (Eierstock) → Tag 4"
    ],
    correctAnswer: 1,
    explanation:
      "Am Tag 1 erfolgt die Befruchtung in der Ampulle der Tuba uterina; Tage 1–3 Furchung im Eileiter; Tag 3–4 Morula am Tuben-Uterus-Übergang; Tage 5–6 Blastozyste im Cavum uteri kurz vor der Implantation.",
    tags: ["BMS","Biologie","Frühentwicklung","Blastozyste","Uterus","Eileiter","Chronotopie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Nidationskaskade",
    difficulty: "Schwer",
    questionText:
      "Welche Abfolge von Ereignissen beschreibt den normalen Ablauf der Implantation (Nidation) der menschlichen Blastozyste in das Endometrium?",
    options: [
          "Bildung der Organanlagen → Schlüpfen aus dem Amnion → Implantation im Eileiter",
          "Gastrulation im Uterus → Ausstoßung der Blastozyste → Menstruation",
          "Ausbildung von Surfactant → Verankerung des Embryoblasten → Rückbildung des Endometriums",
          "Schlüpfen (Hatching) aus der Zona pellucida → Adhäsion des Trophoblasten an das Uterusepithel → Differenzierung in Synzytio- und Zytotrophoblast → enzymatische Invasion in das mütterliche Stroma → Einbettung des Keims",
          "Vollständige Verknöcherung des Trophoblasten → Verbindung mit der Harnblasenwand"
    ],
    correctAnswer: 3,
    explanation:
      "Die Implantation beginnt mit dem Schlüpfen (Hatching) aus der Zona pellucida. Es folgt die Anheftung (Adhäsion) an das Endometrium und die Differenzierung des Trophoblasten in Zyto- und Synzytiotrophoblast. Letzterer sezerniert lytische Enzyme und dringt invasiv in das Stroma ein, bis der Keim vollständig eingebettet ist.",
    tags: ["BMS","Biologie","Frühentwicklung","Nidation","Implantation","Hatching","Synzytiotrophoblast"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Einnistung: Zyklusphase & Endometrium",
    difficulty: "Leicht",
    questionText:
      "In welcher Phase des weiblichen Menstruationszyklus befindet sich das Endometrium zum Zeitpunkt der normalen Einnistung (ca. Tag 20–22 des Zyklus) und welches Hormon dominiert diese Phase?",
    options: [
          "Sekretionsphase (Lutealphase) — dominiert durch Progesteron aus dem Corpus luteum",
          "Proliferationsphase (Follikelphase) — dominiert durch FSH aus der Hypophyse",
          "Desquamationsphase (Menstruation) — dominiert durch Oxytocin",
          "Ischämiephase — dominiert durch Prolaktin",
          "Regenerationsphase — dominiert durch Testosteron"
    ],
    correctAnswer: 0,
    explanation:
      "Die Nidation erfolgt ca. 6–8 Tage nach der Ovulation, also an Tag 20–22 eines 28-tägigen Zyklus. Das Endometrium befindet sich in der mittleren Sekretionsphase mit maximaler Glykogen- und Schleimsekretion der Drüsen, gesteuert durch Progesteron aus dem Corpus luteum.",
    tags: ["BMS","Biologie","Frühentwicklung","Menstruationszyklus","Sekretionsphase","Progesteron","Nidation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Schichten des Magen-Darm-Trakts",
    difficulty: "Mittel",
    questionText:
      "Ein Pathologe untersucht einen Gewebeschnitt des Dünndarms. Welche Zuordnung der verschiedenen Wandschichten zu ihren embryonalen Keimblättern ist KORREKT?",
    options: [
          "Schleimhautepithel → Ektoderm; Glatte Muskulatur → Endoderm",
          "Schleimhautepithel → Mesoderm; Glatte Muskulatur → Ektoderm",
          "Schleimhautepithel (resorptive Enterozyten) → Endoderm; Lamina propria, Submukosa und Tunica muscularis (glatte Muskulatur) → Mesoderm",
          "Alle Schichten der Darmwand stammen ausschließlich aus dem Ektoderm.",
          "Schleimhautepithel → Amnion; Muskulatur → Dottersack"
    ],
    correctAnswer: 2,
    explanation:
      "Das Epithel des gesamten Gastrointestinaltrakts (außer Mundbucht und unterster Analkanal) leitet sich aus dem Endoderm ab. Alle bindegewebigen Schichten, Blutgefäße und die glatte Muskulatur (Ring- und Längsmuskulatur) entstehen aus dem viszeralen/splanchnischen Mesoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Endoderm","Mesoderm","Darmwand","Gewebe"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Differenzierung des Auges",
    difficulty: "Mittel",
    questionText:
      "Welche Zuordnung beschreibt die embryonale Herkunft der verschiedenen Augenstrukturen korrekt?",
    options: [
          "Hornhaut und Linse stammen aus dem Endoderm; die Netzhaut aus dem Mesoderm.",
          "Das gesamte Auge entsteht ausschließlich aus dem Dottersack.",
          "Die Augenlinse stammt aus dem Mesoderm; die Netzhaut aus dem Endoderm.",
          "Alle Augenstrukturen stammen aus dem Trophoblasten.",
          "Die Augenlinse und die Hornhautoberfläche stammen aus dem Oberflächenektoderm; die Retina (Netzhaut) und der Sehnerv aus einer Ausstülpung des Neuroektoderms (Zwischenhirn)."
    ],
    correctAnswer: 4,
    explanation:
      "Das Auge hat einen komplexen ektodermalen Ursprung: Die Linse und das Hornhautepithel entstehen aus dem Oberflächenektoderm (Linsenplakode). Die Retina (inkl. Photorezeptoren) und der N. opticus entstehen als Augenbecher direkt aus dem Neuroektoderm des Dienzephalons.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Ektoderm","Neuroektoderm","Auge","Linse","Retina"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Respirationstrakt",
    difficulty: "Schwer",
    questionText:
      "Bei einer Analyse der Trachea und der Bronchien werden drei Gewebekomponenten unterschieden: (1) das respiratorische Flimmerepithel mit Becherzellen, (2) die hyalinen Knorpelspangen und (3) die glatte Bronchialmuskulatur. Welcher embryonale Ursprung trifft auf diese Komponenten zu?",
    options: [
          "Komponente 1 (Epithel) stammt aus dem Endoderm; Komponenten 2 und 3 (Knorpel und glatte Muskulatur) stammen aus dem Mesoderm.",
          "Alle drei Komponenten stammen vollständig aus dem Ektoderm.",
          "Komponente 1 stammt aus dem Mesoderm; Komponenten 2 und 3 stammen aus dem Endoderm.",
          "Komponente 1 stammt aus dem Ektoderm; Komponente 2 aus dem Endoderm; Komponente 3 aus dem Trophoblasten.",
          "Komponenten 1 und 2 stammen aus dem Mesoderm; Komponente 3 aus dem Neuroektoderm."
    ],
    correctAnswer: 0,
    explanation:
      "Die Lungenknospe sprosst ventral aus dem Vorderdarm (Endoderm) aus, wodurch das gesamte Innenepithel endodermal ist. Knorpel, Bindegewebe und glatte Muskulatur des Respirationstrakts entwickeln sich aus dem umgebenden Mesoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Endoderm","Mesoderm","Trachea","Lunge"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Keimblätter: Haut und Anhangsgebilde",
    difficulty: "Schwer",
    questionText:
      "Welche Aussage über den embryologischen Ursprung der Hauptschichten und Anhangsgebilde der menschlichen Haut ist KORREKT?",
    options: [
          "Epidermis, Dermis und Subkutis stammen ausnahmslos aus dem Endoderm.",
          "Die Epidermis (Oberhaut) sowie ihre Anhangsgebilde (Haare, Nägel, Drüsen) stammen überwiegend aus dem Oberflächenektoderm, während die Dermis (Lederhaut) überwiegend aus dem Mesoderm hervorgeht.",
          "Die Epidermis stammt aus dem Mesoderm; die Dermis stammt aus dem Ektoderm.",
          "Haare und Nägel entstehen aus dem Dottersackendoderm.",
          "Talg- und Schweißdrüsen stammen ausschließlich aus dem Trophoblasten."
    ],
    correctAnswer: 1,
    explanation:
      "Die Epidermis und die Hautanhangsgebilde (Haare, Nägel, Talg- und Schweißdrüsen) gehen im Wesentlichen aus dem Oberflächenektoderm hervor. Die darunterliegende bindegewebige Dermis (Lederhaut) stammt überwiegend aus dem Mesoderm.",
    tags: ["BMS","Biologie","Frühentwicklung","Keimblätter","Ektoderm","Mesoderm","Haut","Epidermis","Dermis"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Sensibilitätsfenster der Organogenese",
    difficulty: "Mittel",
    questionText:
      "Warum führt eine teratogene Exposition in der 4. bis 5. Entwicklungswoche häufig zu schweren strukturellen Fehlbildungen (z. B. Herzfehler, Gliedmaßenfehlbildungen), während dieselbe Exposition in der 32. Schwangerschaftswoche meist keine morphologischen Organfehlbildungen mehr auslöst?",
    options: [
          "Weil der Keim in der 4. Woche noch keine Plazenta besitzt, ab der 30. Woche jedoch absolut geschützt ist.",
          "Weil in der 4. Woche die Meiose abläuft und in der 32. Woche die Mitose.",
          "Weil in der 32. Woche das fetale Immunsystem alle Umweltgifte neutralisiert.",
          "Weil in der 4. bis 5. Woche (Embryonalperiode) die Organanlagen grundlegend geformt werden (Organogenese), während in der 32. Woche (Fetalperiode) die Organe bereits topographisch angelegt sind und primär an Masse zunehmen bzw. funktionell reifen.",
          "Weil Gifte in der 4. Woche direkt über das Fruchtwasser getrunken werden."
    ],
    correctAnswer: 3,
    explanation:
      "Die Embryonalperiode (Wochen 3–8) ist das kritische Zeitfenster der Organogenese: Hier finden Zellwanderung, Gewebefaltung und die morphologische Grundanlage der Organsysteme statt. In der Fetalperiode (ab Woche 9) sind alle Organe bereits angelegt; Störungen führen hier vor allem zu Wachstumsdefiziten oder funktionellen Reifungsstörungen.",
    tags: ["BMS","Biologie","Frühentwicklung","Embryonalperiode","Organogenese","Fetalperiode","Teratogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Meilensteine der Embryonalperiode",
    difficulty: "Schwer",
    questionText:
      "Welche der folgenden morphologischen Entwicklungen wird typischerweise NOCH INNERHALB der Embryonalperiode (bis zum Ende der 8. Entwicklungswoche) abgeschlossen bzw. grundlegend angelegt?",
    options: [
          "Die funktionelle Reife der Typ-II-Pneumozyten mit maximaler Surfactantbildung",
          "Das Erreichen eines Geburtsgewichts von ca. 3000 g",
          "Die Abfaltung des Embryos, die Entstehung der Neuralrinne/des Neuralrohrs, die Bildung der Extremitätenknospen und die frühe Anlage der vier Herzkammern",
          "Das Absinken der Hoden in den Hodensack (Descensus testis)",
          "Die vollständige Myelinisierung der Großhirnrinde"
    ],
    correctAnswer: 2,
    explanation:
      "Bis zum Ende der 8. Woche (Embryonalperiode) werden alle Grundstrukturen des menschlichen Körpers angelegt: Kraniokaudale und laterale Abfaltung, Neurulation (Neuralrohrschluss), Somitenbildung, Knospung der Gliedmaßen und Septierung der Herzkammern. Surfactantbildung, Hodenabstieg und Myelinisierung sind Vorgänge der späten Fetalperiode bzw. Postnatalzeit.",
    tags: ["BMS","Biologie","Frühentwicklung","Embryonalperiode","Organogenese","Neurulation","Morphogenese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Embryonalentwicklung: Alles-oder-Nichts vs. Organogeneseschaden",
    difficulty: "Mittel",
    questionText:
      "Ein Embryologe vergleicht die Wirkung einer schädigenden Dosis Röntgenstrahlung in Woche 1 (Präimplantationsphase) mit einer Exposition in Woche 5 (Embryonalperiode). Welcher Unterschied in den biologischen Konsequenzen ist zu erwarten?",
    options: [
          "In Woche 1 entstehen stets Herzklappenfehler; in Woche 5 stirbt der Keim zwingend ab.",
          "In beiden Wochen sind die Auswirkungen völlig identisch.",
          "In Woche 1 verdoppelt sich die Chromosomenzahl; in Woche 5 entstehen eineiige Zwillinge.",
          "In Woche 1 entstehen Lippen-Kiefer-Gaumenspalten; in Woche 5 fehlen die Zehennägel.",
          "In Woche 1 gilt das Alles-oder-Nichts-Prinzip (Überleben ohne Organfehlbildung durch Regulation oder früher Keimtod); in Woche 5 führt die Schädigung zu schweren morphologischen Fehlbildungen betroffener Organanlagen."
    ],
    correctAnswer: 4,
    explanation:
      "In den ersten 2 Wochen nach Befruchtung gilt das 'Alles-oder-Nichts-Prinzip', da die Zellen noch undifferenziert und regulativ sind (vollständige Kompensation oder Abort). In Woche 5 (Organogenese) sind die Zellschicksale bereits determiniert; Zellschäden führen zu irreversiblen anatomischen Fehlbildungen (z. B. Herz- oder Extremitätendefekte).",
    tags: ["BMS","Biologie","Frühentwicklung","Alles-oder-Nichts","Organogenese","Teratogenese","Röntgenstrahlung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Surfactant & Alveolarstabilität",
    difficulty: "Mittel",
    questionText:
      "Welche biochemische und biophysikalische Veränderung ermöglicht dem reifen Neugeborenen bei der Geburt die dauerhafte Belüftung der Lunge?",
    options: [
          "Die Umwandlung von Knochengewebe in Knorpelspangen",
          "Die Bildung eines Phospholipid-Protein-Gemisches (Surfactant) durch Typ-II-Pneumozyten, das die Oberflächenspannung in den Alveolen drastisch senkt und deren Kollaps beim Ausatmen verhindert",
          "Das dauerhafte Verkleben der Alveolarwände durch Schleim",
          "Die Einwanderung von Trophoblastzellen in die Bronchien",
          "Der vollständige Verschluss der Trachea zur Erzeugung eines Unterdrucks"
    ],
    correctAnswer: 1,
    explanation:
      "Surfactant (Surface Active Agent) wird ab dem späten 2. Trimenon von Typ-II-Alveolarepithelzellen synthetisiert. Es reduziert die Oberflächenspannung an der Grenzfläche zwischen Alveolarflüssigkeit und Luft drastisch, sodass die Lungenbläschen beim Ausatmen nicht kollabieren.",
    tags: ["BMS","Biologie","Frühentwicklung","Lunge","Surfactant","Typ-II-Pneumozyten","Geburt"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetalentwicklung: Fetales Hämoglobin (HbF)",
    difficulty: "Schwer",
    questionText:
      "Welche Eigenschaft des fetalen Hämoglobins (HbF) im Vergleich zum adulten Hämoglobin (HbA) der Mutter sichert den transplazentaren Sauerstoffübertritt zum Fetus?",
    options: [
          "HbF kann Sauerstoff überhaupt nicht binden und transportiert nur CO2.",
          "HbF ist ein Enzym, das Sauerstoff aus Fruchtwasser synthetisiert.",
          "HbF bindet Sauerstoff irreversibel und gibt ihn im fetalen Gewebe nicht mehr ab.",
          "HbF besitzt eine höhere Sauerstoffaffinität (die Sauerstoffbindungskurve ist nach links verschoben), sodass es bei gleichem Sauerstoffpartialdruck mehr Sauerstoff bindet als das mütterliche HbA.",
          "HbF kommt ausschließlich im mütterlichen Blut vor."
    ],
    correctAnswer: 3,
    explanation:
      "Fetales Hämoglobin (HbF) bindet 2,3-BPG schwächer als adultes Hämoglobin (HbA). Dadurch besitzt HbF eine höhere Sauerstoffaffinität (Linksverschiebung der Sauerstoffbindungskurve) und kann Sauerstoff im intervillösen Raum der Plazenta effektiv vom mütterlichen HbA übernehmen.",
    tags: ["BMS","Biologie","Frühentwicklung","HbF","HbA","Sauerstoffaffinität","Plazenta","Gasaustausch"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Fetaler vs. mütterlicher Anteil",
    difficulty: "Mittel",
    questionText:
      "Aus welchen beiden Hauptkomponenten setzt sich die reife menschliche Plazenta zusammen?",
    options: [
          "Einem fetalen Anteil (Chorion frondosum mit gefäßführenden Zotten) und einem mütterlichen Anteil (Decidua basalis des modifizierten Endometriums)",
          "Ausschließlich aus mütterlichem Myometrium und Perimetrium",
          "Aus dem Amnionepithel und dem Eierstockgewebe",
          "Aus dem Dottersack und der fetalen Leber",
          "Ausschließlich aus dem Gallertgewebe der Nabelschnur"
    ],
    correctAnswer: 0,
    explanation:
      "Die Plazenta ist ein chimäres Organ aus zwei genetisch unterschiedlichen Anteilen: Der fetale Anteil entsteht aus dem gefäßreichen Zottenchorion (Chorion frondosum), während der mütterliche Anteil aus der modifizierten Gebärmutterschleimhaut (Decidua basalis) gebildet wird.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Chorion","Decidua","Chorionzotten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Permeabilität der Plazentaschranke",
    difficulty: "Schwer",
    questionText:
      "Welche der folgenden Stoffgruppen bzw. Moleküle können die intakte menschliche Plazentaschranke NICHT durch einfache Diffusion oder rezeptorvermittelten Transport passieren?",
    options: [
          "Sauerstoff (O2) und Kohlendioxid (CO2)",
          "Glukose und freie Aminosäuren",
          "Mütterliche Erythrozyten und hochmolekulare IgM-Pentamere",
          "Immunglobuline der Klasse G (mütterliches IgG)",
          "Lipophile fettlösliche Hormone und Narkosegase"
    ],
    correctAnswer: 2,
    explanation:
      "Die intakte Plazentaschranke trennt mütterliches und fetales Blut strikt. Intakte Blutzellen (wie mütterliche Erythrozyten) und sehr große Eiweißkomplexe (wie IgM-Pentamere) können die Schranke nicht passieren. Gase, Glukose, Aminosäuren und IgG-Antikörper treten selektiv über.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Plazentaschranke","IgM","Erythrozyten","Stoffaustausch"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Plazenta: Endokrine Funktion der Plazenta",
    difficulty: "Mittel",
    questionText:
      "Welche wesentliche endokrine Funktion übernimmt die Plazenta im Verlauf der Schwangerschaft zunehmend für den Erhalt der Schwangerschaft?",
    options: [
          "Sie baut mütterliches Progesteron ab, um Wehen auszulösen.",
          "Sie produziert ausschließlich Schilddrüsenhormone für das fetale Gehirn.",
          "Sie übernimmt die Produktion von Insulin zur Regulierung des mütterlichen Blutzuckers.",
          "Sie hemmt die Entwicklung des fetalen Nebennierenmarks.",
          "Sie übernimmt im weiteren Verlauf der Schwangerschaft schrittweise die Hauptproduktion von Progesteron und Östrogenen, um das Endometrium und die Schwangerschaft unabhängig vom Gelbkörper aufrechtzuerhalten."
    ],
    correctAnswer: 4,
    explanation:
      "Während in den ersten Schwangerschaftswochen das Corpus luteum (stimuliert durch hCG) für die Progesteronbildung zuständig ist, übernimmt im weiteren Schwangerschaftsverlauf die Plazenta (Synzytiotrophoblast) selbst die großangelegte Synthese von Progesteron und Östrogenen.",
    tags: ["BMS","Biologie","Frühentwicklung","Plazenta","Progesteron","Östrogen","Corpus luteum","Endokrinologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Eihäute & Fruchthüllen: Amnion & Fruchtwasserdynamik",
    difficulty: "Schwer",
    questionText:
      "Welche Aussage über die Eihäute und das Fruchtwasser (Amnionflüssigkeit) in der zweiten Schwangerschaftshälfte ist KORREKT?",
    options: [
          "Das Amnion bildet die innerste Eihaut, die die Fruchtwasserhöhle begrenzt; das Fruchtwasser wird vom Fetus geschluckt, über den Gastrointestinaltrakt resorbiert und primär über die fetalen Nieren wieder als Urin in die Fruchthöhle ausgeschieden.",
          "Das Fruchtwasser besteht zu 99 % aus mütterlichem Vollblut.",
          "Das Chorion liegt innen und umschließt direkt das Fruchtwasser.",
          "Das Fruchtwasser wird ausschließlich von der fetalen Lunge gebildet und niemals resorbiert.",
          "Die Eihäute verhindern jegliche Bewegung des Fetus, um die Knochen zu schonen."
    ],
    correctAnswer: 0,
    explanation:
      "Das Amnion (innere Eihaut) umkleidet die Amnionhöhle. In der 2. Schwangerschaftshälfte wird das Fruchtwasser durch ein dynamisches Gleichgewicht reguliert: Der Fetus schluckt täglich hunderte Milliliter Fruchtwasser, resorbiert es im Darm und scheidet es über die fetalen Nieren als Urin wieder aus.",
    tags: ["BMS","Biologie","Frühentwicklung","Amnion","Fruchtwasser","Fruchthüllen","Fetalentwicklung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Ductus venosus",
    difficulty: "Mittel",
    questionText:
      "Welcher fetale Gefäßkurzschluss leitet einen Großteil des sauerstoff- und nährstoffreichen Blutes aus der Vena umbilicalis unter Umgehung des Leberkapillarnetzes direkt in die Vena cava inferior?",
    options: [
          "Ductus arteriosus (Botalli)",
          "Foramen ovale",
          "Ductus venosus (Arantii)",
          "Sinus caroticus",
          "Truncus coeliacus"
    ],
    correctAnswer: 2,
    explanation:
      "Der Ductus venosus (Arantii) verbindet die Vena umbilicalis direkt mit der Vena cava inferior. Dadurch wird sauerstoff- und nährstoffreiches Blut aus der Plazenta an der fetalen Leber vorbeigeleitet und gelangt rasch zum fetalen Herzen.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetaler Kreislauf","Ductus venosus","Vena umbilicalis","Leber"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Fetaler Kreislauf: Postpartale Kreislaufumstellung",
    difficulty: "Schwer",
    questionText:
      "Welche funktionellen und anatomischen Veränderungen ereignen sich im Kreislaufsystem des Neugeborenen unmittelbar nach dem Abnabeln und der ersten Lungenbelüftung?",
    options: [
          "Der Lungenwiderstand steigt an, das Foramen ovale öffnet sich weiter und die Nabelarterien erweitern sich.",
          "Der Widerstand im Lungenkreislauf fällt massiv ab → der Druck im linken Vorhof steigt über den des rechten Vorhofs → die Klappe des Foramen ovale schließt → der Ductus arteriosus kontrahiert durch den steigenden arteriellen pO2 → der Lungenkreislauf wird vollständig durchblutet.",
          "Das gesamte Blut wird dauerhaft in den Ductus venosus umgeleitet.",
          "Die Aorta verschließt sich und die Lungenarterie übernimmt die Körperversorgung.",
          "Das Herz schlägt vorübergehend nur noch mit einer einzigen Kammer."
    ],
    correctAnswer: 1,
    explanation:
      "Mit dem ersten Atemzug entfalten sich die Alveolen, der pulmonale Gefäßwiderstand sinkt drastisch und der Blutrückfluss zum linken Vorhof steigt an. Der höhere Druck im linken Atrium verschließt das Foramen ovale funktionell. Gleichzeitig führt der Anstieg des arteriellen Sauerstoffpartialdrucks zum spasmischen Verschluss des Ductus arteriosus.",
    tags: ["BMS","Biologie","Frühentwicklung","Fetaler Kreislauf","Foramen ovale","Ductus arteriosus","Kreislaufumstellung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: Phasenidentifikation durch Merkmalskombination",
    difficulty: "Mittel",
    questionText:
      "Ein früher menschlicher Keim hat die Implantation im Endometrium abgeschlossen, besitzt bereits drei differenzierte Keimblätter (Ektoderm, Mesoderm, Endoderm) und beginnt mit der Ausformung der ersten Organanlagen (Organogenese), während die Organreifung und das massive Größenwachstum noch bevorstehen. In welcher Entwicklungsphase befindet sich der Keim?",
    options: [
          "In der Präimplantationsphase (Tag 1–4)",
          "Im freien Morulastadium vor dem Schlüpfen",
          "In der späten Fetalperiode kurz vor der Geburt",
          "Im Zygotenstadium vor der ersten Furchung",
          "In der Embryonalperiode (Woche 3–8)"
    ],
    correctAnswer: 4,
    explanation:
      "Die Phase zwischen der Gastrulation (3 Keimblätter) und dem Abschluss der Organanlage bis zum Ende der 8. Entwicklungswoche ist die Embryonalperiode. Ab der 9. Woche (Fetalperiode) stehen Organreifung und Größenwachstum im Vordergrund.",
    tags: ["BMS","Biologie","Frühentwicklung","Embryonalperiode","Gastrulation","Organogenese","Fetalperiode"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-03-set5-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-03-fruehentwicklung",
    topic: "Schwangerschaft: Befundbasierte Stadienzuordnung",
    difficulty: "Mittel",
    questionText:
      "Bei einer histologischen Untersuchung eines frühen menschlichen Keims werden folgende Befunde erhoben: (1) Eine dreiblättrige Keimscheibe ist bereits etabliert, (2) das Neuralrohr beginnt sich einzufalten, (3) erste Somitenpaare sind sichtbar, (4) es liegt noch kein voll ausgebildeter vierkammeriger Herzschlauch vor. In welcher Entwicklungsphase befindet sich dieser Keim?",
    options: [
          "In den ersten 24 Stunden nach der Befruchtung (Zygotenstadium)",
          "Im freien Morulastadium im Eileiter (Tag 3–4)",
          "In der Fetalperiode (20. Entwicklungswoche)",
          "In der frühen Embryonalperiode während der Gastrulation und frühen Neurulation (ca. 3. bis 4. Entwicklungswoche)",
          "Kurz vor der Geburt im 9. Schwangerschaftsmonat"
    ],
    correctAnswer: 3,
    explanation:
      "Das Vorhandensein der drei Keimblätter (Gastrulation abgeschlossen), die beginnende Neurulation (Neuralrohrbildung) und das Auftreten der ersten Somiten kennzeichnen die frühe Embryonalperiode in der 3. bis 4. Entwicklungswoche.",
    tags: ["BMS","Biologie","Frühentwicklung","Embryonalperiode","Gastrulation","Neurulation","Somiten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },

  /* =================================================================
     bio-04-genetik
     ================================================================= */
  {
    id: "bio-04-set1-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Grundlagen der Genetik: Gen vs. Allel",
    difficulty: "Leicht",
    questionText:
      "Was versteht man in der klassischen Genetik unter dem Begriff „Allel“?",
    options: [
          "Die Gesamtheit aller Gene auf einem Chromosom",
          "Ein spezifisches Protein, das an die DNA bindet",
          "Eine von mehreren verschiedenen Zustandsformen oder Varianten eines Gens auf einem bestimmten Genort (Locus)",
          "Ein Chromosom, das ausschließlich in Keimzellen vorkommt",
          "Ein Enzym, das für die DNA-Verdopplung in der Interphase verantwortlich ist"
    ],
    correctAnswer: 2,
    explanation:
      "Ein Allel ist eine von mehreren alternativen Varianten eines bestimmten Gens, die auf demselben Genort (Locus) homologer Chromosomen liegen. Ein Gen codiert z. B. für ein Merkmal (wie Blütenfarbe), während die Allele die konkrete Ausprägung bestimmen (z. B. rot oder weiß).",
    tags: ["BMS","Biologie","Genetik","Gen","Allel","Locus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen: Karyotyp & Ploidie des Menschen",
    difficulty: "Leicht",
    questionText:
      "Wie viele Chromosomen enthält der normale Karyotyp einer menschlichen Körperzelle (somatische Zelle) und wie teilen sich diese auf?",
    options: [
          "46 Chromosomen: 44 Autosomen (22 homologe Paare) und 2 Gonosomen (Geschlechtschromosomen)",
          "23 Chromosomen: 22 Autosomen und 1 Gonosom",
          "48 Chromosomen: 24 homologe Paare",
          "46 Chromosomen: 46 Autosomen und keine Gonosomen",
          "92 Chromosomen: 44 Autosomenpaare und 4 Geschlechtschromosomen"
    ],
    correctAnswer: 0,
    explanation:
      "Der normale diploide Karyotyp des Menschen umfasst 46 Chromosomen (2n = 46). Davon sind 44 Autosomen (22 homologe Chromosomenpaare) und 2 Gonosomen (beim Mann XY, bei der Frau XX).",
    tags: ["BMS","Biologie","Genetik","Chromosomensatz","Autosomen","Gonosomen","Karyotyp"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Grundlagen der Genetik: Genotyp vs. Phänotyp",
    difficulty: "Leicht",
    questionText:
      "Welcher Unterschied besteht zwischen dem „Genotyp“ und dem „Phänotyp“ eines Organismus?",
    options: [
          "Der Genotyp ändert sich im Laufe des Lebens ständig, der Phänotyp bleibt unveränderlich.",
          "Der Genotyp beschreibt ausschließlich die RNA, während der Phänotyp die DNA beschreibt.",
          "Der Phänotyp bezeichnet die Gesamtheit aller Gene, der Genotyp das äußere Erscheinungsbild.",
          "Der Genotyp ist die Gesamtheit der genetischen Erbinformation (die Allelkombination), während der Phänotyp das tatsächliche, beobachtbare Erscheinungsbild eines Merkmals darstellt.",
          "Der Phänotyp kommt nur bei Pflanzen vor, der Genotyp nur bei Tieren und Menschen."
    ],
    correctAnswer: 3,
    explanation:
      "Der Genotyp bezeichnet die genetische Ausstattung (Kombination der Allele) eines Organismus. Der Phänotyp ist das messbare oder sichtbare Erscheinungsbild eines Organismus, welches durch das Zusammenspiel von Genotyp und Umweltfaktoren entsteht.",
    tags: ["BMS","Biologie","Genetik","Genotyp","Phänotyp","Merkmalsausprägung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Phasen des Zellzyklus",
    difficulty: "Leicht",
    questionText:
      "Welche Sequenz beschreibt die zeitliche Reihenfolge der klassischen Phasen der Mitose korrekt?",
    options: [
          "Anaphase → Telophase → Prophase → Metaphase",
          "Prophase → Metaphase → Anaphase → Telophase",
          "Metaphase → Prophase → Telophase → Anaphase",
          "Telophase → Anaphase → Metaphase → Prophase",
          "Interphase → Cytokinese → Prophase → Anaphase"
    ],
    correctAnswer: 1,
    explanation:
      "Die Mitose gliedert sich in vier aufeinanderfolgende Phasen: Prophase (Kondensation der Chromosomen, Kernhüllenzerfall) → Metaphase (Anordnung in der Äquatorialebene) → Anaphase (Trennung der Schwesterchromatiden) → Telophase (Entspiralisierung, Neubildung der Kernhüllen). Darauf folgt die Cytokinese.",
    tags: ["BMS","Biologie","Genetik","Mitose","Zellzyklus","Prophase","Metaphase","Anaphase","Telophase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Metaphase",
    difficulty: "Leicht",
    questionText:
      "Was geschieht charakteristischerweise in der Metaphase der Mitose?",
    options: [
          "Die Kernmembran bildet sich um die beiden neuen Tochterkerne neu.",
          "Die DNA wird durch Replikation verdoppelt.",
          "Die Schwesterchromatiden werden zu den entgegengesetzten Zellpolen gezogen.",
          "Das Zytoplasma teilt sich durch eine Einschnürung in zwei getrennte Zellen.",
          "Die maximal kondensierten Chromosomen ordnen sich einzeln in der Äquatorialebene (Metaphaseplatte) der Zelle an."
    ],
    correctAnswer: 4,
    explanation:
      "In der Metaphase erreichen die Chromosomen ihren höchsten Kondensationsgrad. Die Spindelfasern des Spindelapparats setzen an den Kinetochoren der Zentromere an und richten die Chromosomen in der Äquatorialebene (Zellmitte) aus.",
    tags: ["BMS","Biologie","Genetik","Mitose","Metaphase","Metaphaseplatte","Kinetochor"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Anaphase",
    difficulty: "Leicht",
    questionText:
      "Welche Strukturen werden in der Anaphase der Mitose durch die Spindelfasern voneinander getrennt?",
    options: [
          "Homologe Chromosomenpaare",
          "Die beiden Stränge der DNA-Doppelhelix",
          "Die beiden Schwesterchromatiden jedes Chromosoms",
          "Die Ribosomen vom endoplasmatischen Retikulum",
          "Die Mitochondrien vom Zellkern"
    ],
    correctAnswer: 2,
    explanation:
      "In der Anaphase der Mitose teilt sich das Zentromer jedes Chromosoms. Die beiden genetisch identischen Schwesterchromatiden werden getrennt und als eigenständige Ein-Chromatid-Chromosomen zu den entgegengesetzten Spindelpolen gezogen.",
    tags: ["BMS","Biologie","Genetik","Mitose","Anaphase","Schwesterchromatiden","Zentromer"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Meiose I vs. Meiose II",
    difficulty: "Leicht",
    questionText:
      "Warum wird die erste Reifeteilung der Meiose (Meiose I) auch als „Reduktionsteilung“ bezeichnet?",
    options: [
          "Weil die homologen Chromosomenpaare voneinander getrennt werden und sich der Chromosomensatz von diploid (2n) auf haploid (1n) halbiert",
          "Weil die Zellen an Gesamtvolumen verlieren",
          "Weil die Mitochondrienzahl in der Zelle um die Hälfte reduziert wird",
          "Weil alle Mutationen im Genom enzymatisch gelöscht werden",
          "Weil keine Zellkerne mehr gebildet werden können"
    ],
    correctAnswer: 0,
    explanation:
      "In der Meiose I paaren sich die homologen Chromosomen und werden in der Anaphase I getrennt. Dadurch entstehen zwei Tochterzellen, die jeweils nur noch einen einfachen, haploiden Chromosomensatz (1n) besitzen, weshalb dieser Schritt Reduktionsteilung heißt.",
    tags: ["BMS","Biologie","Genetik","Meiose","Reduktionsteilung","Meiose I","Haploidie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Prophase I & Crossing-over",
    difficulty: "Mittel",
    questionText:
      "In welcher Phase der Meiose findet das Phänomen des Crossing-over (interchromosomale/intrachromosomale Rekombination) statt und worin besteht seine biologische Bedeutung?",
    options: [
          "In der Telophase II; es dient der Verdopplung des Erbmaterials.",
          "In der Metaphase II; es repariert Schäden an den Spindelfasern.",
          "In der Anaphase I; es trennt die Geschlechtschromosomen von den Autosomen.",
          "In der Prophase I; durch den Stückaustausch zwischen Nicht-Schwesterchromatiden homologer Chromosomen entsteht neue genetische Vielfalt.",
          "In der Interphase; es leitet die DNA-Synthese ein."
    ],
    correctAnswer: 3,
    explanation:
      "Das Crossing-over findet während der Prophase I (speziell im Pachytän) der Meiose statt: Homologe Chromosomen lagern sich eng aneinander (Synapsis) und tauschen homologe Abschnitte aus. Dies führt zu neuen Allelkombinationen und erhöht die genetische Variabilität der Nachkommen.",
    tags: ["BMS","Biologie","Genetik","Meiose","Crossing-over","Prophase I","Rekombination"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Endprodukte der Meiose",
    difficulty: "Leicht",
    questionText:
      "Welches Ergebnis entsteht aus einer primären Spermatozyte (Spermatozyte I) nach vollständiger Durchführung beider meiotischer Teilungen (Meiose I und II)?",
    options: [
          "Zwei genetisch identische diploide Körperzellen",
          "Vier genetisch unterschiedliche haploide Keimzellen (Spermatiden bzw. Spermien)",
          "Eine einzige diploide Zygote",
          "Acht polyploide Zellen ohne Zellkern",
          "Zwei haploide und zwei diploide Zellen"
    ],
    correctAnswer: 1,
    explanation:
      "Aus einer primären Spermatozyte (diploid, 2n) entstehen durch Meiose I zwei sekundäre Spermatozyten (haploid, 1n) und durch Meiose II insgesamt vier haploide Keimzellen (Spermatiden, die zu funktionellen Spermien heranreifen). Bei der Oogenese entsteht dagegen nur eine reife Eizelle sowie Polkörperchen.",
    tags: ["BMS","Biologie","Genetik","Meiose","Gametogenese","Spermatogenese","Haploidie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Zellteilung: Mitose vs. Meiose",
    difficulty: "Mittel",
    questionText:
      "Welcher Vergleich zwischen Mitose und Meiose ist KORREKT?",
    options: [
          "Die Mitose dient der geschlechtlichen Fortpflanzung, die Meiose dem Körperwachstum.",
          "Bei der Mitose halbiert sich die Chromosomenzahl, bei der Meiose bleibt sie unverändert.",
          "In der Mitose gibt es zwei aufeinanderfolgende Teilungsschritte, in der Meiose nur einen.",
          "Ein Crossing-over findet typischerweise in jeder mitotischen Prophase statt.",
          "Die Mitose liefert zwei genetisch identische diploide Tochterzellen; die Meiose liefert vier genetisch unterschiedliche haploide Keimzellen."
    ],
    correctAnswer: 4,
    explanation:
      "Die Mitose dient der Vermehrung von Körperzellen (zwei identische diploide Tochterzellen für Wachstum und Geweberegeneration). Die Meiose erzeugt in zwei Reifeteilungen haploide, genetisch rekombinierte Keimzellen (Gameten) für die sexuelle Fortpflanzung.",
    tags: ["BMS","Biologie","Genetik","Mitose","Meiose","Vergleich"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Uniformitätsregel",
    difficulty: "Leicht",
    questionText:
      "Was besagt die 1. Mendelsche Regel (Uniformitätsregel)?",
    options: [
          "In der F2-Generation spalten sich die Merkmale immer im Verhältnis 3:1 auf.",
          "Kreuzt man zwei reinerbige (homozygote) Individuen einer Art, die sich in einem Merkmal unterscheiden, so sind alle Nachkommen der ersten Tochtergeneration (F1) in Bezug auf dieses Merkmal phänotypisch und genotypisch gleich (uniform).",
          "Gene auf demselben Chromosom werden immer gemeinsam vererbt.",
          "Alle Nachkommen erhalten ausschließlich das mütterliche Allel.",
          "Die Nachkommen besitzen stets doppelt so viele Chromosomen wie die Elterngeneration."
    ],
    correctAnswer: 1,
    explanation:
      "Die 1. Mendelsche Regel (Uniformitätsregel) besagt: Kreuzt man zwei homozygote Eltern (P-Generation), die sich in einem Merkmal unterscheiden (z. B. AA × aa), so sind alle Nachkommen der F1-Generation uniform (heterozygot Aa und im Phänotyp gleich).",
    tags: ["BMS","Biologie","Genetik","Mendel","Uniformitätsregel","F1-Generation","Homozygot"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Spaltungsregel",
    difficulty: "Leicht",
    questionText:
      "Welches phänotypische Aufspaltungsverhältnis ist in der F2-Generation bei einem monohybriden Erbgang mit vollständiger Dominanz (dominant-rezessiv) gemäß der 2. Mendelschen Regel (Spaltungsregel) zu erwarten?",
    options: [
          "3 : 1 (drei Individuen mit dominantem Phänotyp zu einem Individuum mit rezessivem Phänotyp)",
          "1 : 1 (zu gleichen Teilen dominant und rezessiv)",
          "9 : 3 : 3 : 1",
          "1 : 2 : 1 ausschließlich im Phänotyp",
          "Alle Individuen zeigen ausschließlich den rezessiven Phänotyp"
    ],
    correctAnswer: 0,
    explanation:
      "Kreuzt man die heterozygoten Individuen der F1-Generation (Aa × Aa) untereinander, treten in der F2-Generation die Genotypen 1 AA : 2 Aa : 1 aa auf. Bei vollständiger Dominanz zeigen AA und Aa denselben Phänotyp, sodass das phänotypische Verhältnis 3 dominant : 1 rezessiv lautet.",
    tags: ["BMS","Biologie","Genetik","Mendel","Spaltungsregel","F2-Generation","Monohybrid"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Unabhängigkeitsregel",
    difficulty: "Mittel",
    questionText:
      "Unter welcher grundlegenden Voraussetzung werden zwei verschiedene Gene nach der 3. Mendelschen Regel (Unabhängigkeitsregel) unabhängig voneinander vererbt?",
    options: [
          "Nur wenn alle Gene auf dem X-Chromosom liegen",
          "Nur wenn die Gene auf mitochondrialer DNA liegen",
          "Nur wenn die Elternpflanzen keine Meiose durchführen",
          "Wenn die beiden betrachteten Gene auf unterschiedlichen (nicht-homologen) Chromosomen liegen.",
          "Nur wenn es sich um unvollständige Dominanz handelt"
    ],
    correctAnswer: 3,
    explanation:
      "Die 3. Mendelsche Regel (Unabhängigkeitsregel / Neukombinationsregel) setzt voraus, dass die beteiligten Gene auf verschiedenen Chromosomen liegen. Dadurch werden sie während der Meiose I unabhängig voneinander auf die Keimzellen verteilt und frei miteinander kombiniert.",
    tags: ["BMS","Biologie","Genetik","Mendel","Unabhängigkeitsregel","Dihybrid","Genkopplung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Testkreuzung",
    difficulty: "Leicht",
    questionText:
      "Ein Organismus mit dominantem Phänotyp (Allel A dominant, Allel a rezessiv) wird mit einem homozygot rezessiven Partner (aa) gekreuzt (Rückkreuzung/Testkreuzung). Welche Genotypen entstehen bei den Nachkommen, wenn der Merkmalsträger heterozygot (Aa) war?",
    options: [
          "Ausschließlich der Genotyp AA",
          "Ausschließlich der Genotyp Aa",
          "50 % heterozygote (Aa) und 50 % homozygot rezessive (aa) Nachkommen",
          "75 % heterozygote (Aa) und 25 % homozygot dominante (AA) Nachkommen",
          "Ausschließlich homozygot rezessive Nachkommen (aa)"
    ],
    correctAnswer: 2,
    explanation:
      "Kreuzung: Aa × aa. Der heterozygote Partner bildet zu 50 % Gameten mit A und zu 50 % mit a; der rezessive Partner bildet nur Gameten mit a. Die Nachkommen sind daher zu 50 % Aa (dominant) und zu 50 % aa (rezessiv). Verhältnis 1:1.",
    tags: ["BMS","Biologie","Genetik","Testkreuzung","Rückkreuzung","Punnett-Quadrat"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomentheorie: Genkopplung",
    difficulty: "Mittel",
    questionText:
      "Was besagt das Phänomen der „Genkopplung“ im Rahmen der Chromosomentheorie der Vererbung?",
    options: [
          "Alle Gene eines Organismus verschmelzen bei der Befruchtung zu einem einzigen Protein.",
          "Gene binden bei der Transkription direkt an Ribosomen.",
          "Zwei beliebige Gene werden immer unabhängig voneinander verteilt, egal wo sie liegen.",
          "Gene können ausschließlich über das Y-Chromosom vererbt werden.",
          "Gene, die auf demselben Chromosom räumlich nahe beieinander liegen, neigen dazu, gemeinsam vererbt zu werden, da sie bei der Meiose nicht regelmäßig durch Crossing-over getrennt werden."
    ],
    correctAnswer: 4,
    explanation:
      "Gene, die auf demselben Chromosom lokalisiert sind, bilden eine Kopplungsgruppe. Sie werden bei der Keimzellbildung gemeinsam weitergegeben, es sei denn, ein Crossing-over trennt sie. Dadurch wird die 3. Mendelsche Regel der freien Kombinierbarkeit modifiziert.",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Chromosomentheorie","Kopplungsgruppe"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomentheorie: Genabstand & Crossing-over",
    difficulty: "Mittel",
    questionText:
      "Welcher Zusammenhang besteht zwischen dem Abstand zweier gekoppelter Gene auf einem Chromosom und ihrer Rekombinationswahrscheinlichkeit durch Crossing-over?",
    options: [
          "Je größer der Abstand zweier gekoppelter Gene auf einem Chromosom ist, desto höher ist im Allgemeinen die Wahrscheinlichkeit, dass ein Crossing-over zwischen ihnen stattfindet.",
          "Je weiter zwei Gene entfernt sind, desto seltener findet ein Crossing-over statt.",
          "Der Abstand zweier Gene hat absolut keinen Einfluss auf die Rekombinationshäufigkeit.",
          "Gekoppelte Gene können unter keinen Umständen jemals getrennt werden.",
          "Nur Gene auf unterschiedlichen Chromosomen können durch Crossing-over entkoppelt werden."
    ],
    correctAnswer: 0,
    explanation:
      "Mit zunehmendem physischem Abstand zweier Gene auf einem Chromosom steigt die Zahl möglicher Bruch- und Austauschstellen, sodass im Allgemeinen häufiger ein Crossing-over zwischen ihnen stattfindet (wobei die Rekombinationsfrequenz bei freier Entkopplung ein Maximum von ca. 50 % annähert).",
    tags: ["BMS","Biologie","Genetik","Genabstand","Rekombinationsfrequenz","Crossing-over"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Nichtchromosomale Vererbung: Mitochondriale DNA",
    difficulty: "Leicht",
    questionText:
      "Über welchen Elternteil wird die mitochondriale DNA (mtDNA) beim Menschen im Normalfall an die Nachkommen vererbt und warum?",
    options: [
          "Ausschließlich über den Vater, da Spermien die Mitochondrien in die Zygote einbringen.",
          "Zu gleichen Teilen (50 % Vater, 50 % Mutter) durch Verschmelzung der Vorkerne.",
          "Ausschließlich maternal (über die Mutter), da die Eizelle das gesamte Zytoplasma mit allen Mitochondrien bereitstellt, während die Mitochondrien des Spermiums bei der Befruchtung zugrunde gehen.",
          "Über das Y-Chromosom des Vaters.",
          "Mitochondrien besitzen keine eigene DNA und werden daher nicht vererbt."
    ],
    correctAnswer: 2,
    explanation:
      "Mitochondrien besitzen eine eigene zirkuläre DNA (mtDNA). Beim Menschen wird diese maternal (mütterlich) vererbt, da die reife Eizelle viele tausend Mitochondrien im Ooplasma enthält, während die wenigen Mitochondrien des Spermiums (im Mittelstück) bei der Befruchtung nicht in die Zygote gelangen bzw. abgebaut werden.",
    tags: ["BMS","Biologie","Genetik","Mitochondrien","mtDNA","Maternale Vererbung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Histone & Nukleosomen",
    difficulty: "Leicht",
    questionText:
      "Aus welchen Komponenten besteht die grundlegende Struktureinheit des Chromatins in eukaryotischen Zellen, das sogenannte „Nukleosom“?",
    options: [
          "Aus einem Ribosom, das an mRNA gebunden ist",
          "Aus einem Histon-Oktamer (Kern aus 8 Histonproteinen), um das der DNA-Doppelstrang gewickelt ist",
          "Aus einer tRNA, die mit einer Aminosäure beladen ist",
          "Aus reinem Cholesterin in der Zellmembran",
          "Aus zwei Centriolen, die das Zentrosom bilden"
    ],
    correctAnswer: 1,
    explanation:
      "Ein Nukleosom ist die elementare Verpackungseinheit des Chromatins: Ein Histon-Oktamer (je zwei Moleküle H2A, H2B, H3 und H4) wird von etwa 146 Basenpaaren DNA in knapp zwei Windungen umschlungen. Dies ermöglicht eine dichte Kompaktierung der Kern-DNA.",
    tags: ["BMS","Biologie","Genetik","Genom","Nukleosom","Histone","Chromatin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Codierende vs. nicht-codierende DNA",
    difficulty: "Leicht",
    questionText:
      "Welche Abschnitte eines eukaryotischen Gens bleiben beim Spleißen der Prä-mRNA erhalten und bilden die reife mRNA?",
    options: [
          "Introns",
          "Telomere",
          "Centromere",
          "Promotoren",
          "Exons"
    ],
    correctAnswer: 4,
    explanation:
      "Eukaryotische Mosaikgene bestehen aus Exons und Introns. Beim Prozess des Spleißens werden die nicht-codierenden Introns herausgeschnitten, während die Exons miteinander verknüpft werden und in der reifen mRNA erhalten bleiben.",
    tags: ["BMS","Biologie","Genetik","Exon","Intron","Genom","Spleißen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Einteilung der Mutationstypen",
    difficulty: "Leicht",
    questionText:
      "In welche drei grundlegenden Kategorien werden Mutationen nach dem Ausmaß der genetischen Veränderung klassischerweise eingeteilt?",
    options: [
          "Gute Mutationen, schlechte Mutationen und neutrale Mutationen",
          "Männliche, weibliche und neutrale Mutationen",
          "Bakterielle, virale und menschliche Mutationen",
          "Genmutationen (Punktmutationen einzelner Gene), Chromosomenmutationen (Strukturveränderungen) und Genommutationen (Veränderung der Chromosomenzahl)",
          "Ribosomale, mitochondriale und zytoplasmatische Mutationen"
    ],
    correctAnswer: 3,
    explanation:
      "Mutationen werden hierarchisch nach ihrer Größenordnung klassifiziert: (1) Genmutationen betreffen einzelne Basenpaare innerhalb eines Gens, (2) Chromosomenmutationen verändern die Struktur einzelner Chromosomen (z. B. Deletion, Inversion), (3) Genommutationen verändern die Gesamtzahl der Chromosomen (Aneuploidie, Polyploidie).",
    tags: ["BMS","Biologie","Genetik","Mutationen","Genmutation","Chromosomenmutation","Genommutation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Basenaustausch vs. Leserasterverschiebung",
    difficulty: "Mittel",
    questionText:
      "Was ist der Unterschied zwischen einer Punktmutation durch einfachen Basenaustausch (Substitution) und einer Leserastermutation (Frameshift) durch Deletion oder Insertion einer einzelnen Base?",
    options: [
          "Eine Substitution führt immer zum sofortigen Zelltod, eine Deletion hat nie Folgen.",
          "Ein Basenaustausch betrifft primär ein einzelnes Codon und kann eine einzelne Aminosäure verändern (oder stumm bleiben); das Einfügen oder Entfernen einer nicht durch drei teilbaren Basenzahl verschiebt hingegen das gesamte nachfolgende Triplett-Leseraster.",
          "Eine Leserastermutation betrifft ausschließlich die tRNA, nicht die DNA.",
          "Basenaustausche kommen nur bei Viren vor, Insertionen nur bei Säugetieren.",
          "Eine Substitution fügt stets zehn neue Aminosäuren in das Protein ein."
    ],
    correctAnswer: 1,
    explanation:
      "Eine Basensubstitution betrifft ein bestimmtes Codon und kann stumm bleiben, eine andere Aminosäure codieren (Missense) oder ein vorzeitiges Stoppcodon erzeugen (Nonsense). Eine Insertion oder Deletion von nicht durch 3 teilbaren Basen verschiebt dagegen das gesamte nachfolgende Leseraster (Frameshift), wodurch die gesamte stromabwärts liegende Aminosäuresequenz verändert wird.",
    tags: ["BMS","Biologie","Genetik","Genmutation","Frameshift","Substitution","Leseraster"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Aneuploidie (Genommutation)",
    difficulty: "Leicht",
    questionText:
      "Welche Art von Mutation liegt beim Down-Syndrom (Trisomie 21) vor und wie viele Chromosomen enthält der Karyotyp eines betroffenen Individuums?",
    options: [
          "Eine Genommutation (Aneuploidie mit 47 Chromosomen, da Chromosom 21 dreifach vorliegt)",
          "Eine Genmutation auf dem Y-Chromosom mit 46 Chromosomen",
          "Eine Chromosomenmutation (Inversion von Chromosom 1)",
          "Eine Polyploidie mit 92 Chromosomen",
          "Eine Monosomie mit 45 Chromosomen"
    ],
    correctAnswer: 0,
    explanation:
      "Die Trisomie 21 ist eine Genommutation (Aneuploidie). Durch eine fehlerhafte Trennung (Nondisjunction) während der Meiose liegt das Chromosom 21 dreifach vor, sodass der Karyotyp insgesamt 47 Chromosomen umfasst.",
    tags: ["BMS","Biologie","Genetik","Genommutation","Trisomie 21","Aneuploidie","Nondisjunction"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Vererbung des Geschlechts: SRY & Y-Chromosom",
    difficulty: "Leicht",
    questionText:
      "Welches Gen auf dem menschlichen Y-Chromosom ist der primäre molekulare Auslöser für die Differenzierung der Keimdrüsen zu Hoden (männliche Geschlechtsentwicklung)?",
    options: [
          "p53-Gen",
          "BRCA1-Gen",
          "SRY-Gen (Sex-determining Region of Y)",
          "Insulin-Gen",
          "Hämoglobin-Gen"
    ],
    correctAnswer: 2,
    explanation:
      "Das SRY-Gen (Sex-determining Region of Y) liegt auf dem kurzen Arm des Y-Chromosoms. Es codiert für den Hoden-determinierenden Faktor (TDF), der in der frühen Embryonalentwicklung die Umwandlung der bipotenten Gonadenanlagen in Hoden initiiert.",
    tags: ["BMS","Biologie","Genetik","Gonosomen","SRY","Y-Chromosom","Geschlechtsdetermination"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Krebsentstehung: Protoonkogene & Tumorsuppressoren",
    difficulty: "Mittel",
    questionText:
      "Welche funktionelle Rolle spielen Protoonkogene und Tumorsuppressorgene bei der Regulation des Zellzyklus und der Entstehung von Tumoren?",
    options: [
          "Protoonkogene hemmen das Zellwachstum; Tumorsuppressorgene regen die Zellteilung an.",
          "Beide Gengruppen kommen ausschließlich in bösartigen Krebszellen vor.",
          "Protoonkogene reparieren beschädigte Mitochondrien; Tumorsuppressoren steuern die Meiose.",
          "Beide Gengruppen codieren ausschließlich für Verdauungsenzyme im Magen.",
          "Protoonkogene fördern physiologischerweise das Zellwachstum und die Zellteilung (werden durch aktivierende Mutationen zu krebsfördernden Onkogenen); Tumorsuppressorgene bremsen die Zellteilung oder leiten bei irreparablen Schäden die Apoptose ein (Inaktivierung begünstigt Krebs)."
    ],
    correctAnswer: 4,
    explanation:
      "Die Zellzykluskontrolle beruht auf einem Gleichgewicht: Protoonkogene wirken als 'Gaspedal' der Zellteilung (Mutation $\\rightarrow$ Onkogen mit dauerhafter Aktivierung). Tumorsuppressorgene (wie p53) wirken als 'Bremse', überwachen DNA-Schäden und induzieren Reparatur oder Apoptose (Verlust beider Allele $\\rightarrow$ unkontrollierte Teilung).",
    tags: ["BMS","Biologie","Genetik","Onkologie","Protoonkogen","Tumorsuppressor","p53","Zellzyklus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set1-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Krebsentstehung: Benigne vs. maligne Tumoren",
    difficulty: "Leicht",
    questionText:
      "Was unterscheidet einen bösartigen (malignen) Tumor grundlegend von einem gutartigen (benignen) Tumor?",
    options: [
          "Gutartige Tumoren wachsen immer schneller als bösartige Tumoren.",
          "Gutartige Tumoren bilden stets Metastasen im Gehirn.",
          "Bösartige Tumoren bestehen ausschließlich aus körperfremden Bakterienzellen.",
          "Bösartige Tumoren wachsen invasiv und destruierend in umgebendes Gewebe ein und besitzen die Fähigkeit zur Metastasierung (Absiedlung von Tochtergeschwülsten über Blut- oder Lymphbahnen).",
          "Nur gutartige Tumoren entstehen durch Mutationen in der DNA."
    ],
    correctAnswer: 3,
    explanation:
      "Ein gutartiger (benigner) Tumor wächst verdrängend, ist meist kapselartig begrenzt und bildet keine Metastasen. Ein bösartiger (maligner) Tumor infiltriert und zerstört Nachbargewebe, bricht in Blut- und Lymphgefäße ein und bildet Tochtergeschwülste (Metastasen) in entfernten Organen.",
    tags: ["BMS","Biologie","Genetik","Onkologie","Malignität","Metastasen","Tumor"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-04-set2-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Heterozygotie & Phänotyp",
    difficulty: "Leicht",
    questionText:
      "Ein Individuum besitzt für ein einfach mendelndes Gen den Genotyp Aa. Das Allel A bedingt braune Augen und verhält sich vollständig dominant gegenüber dem rezessiven Allel a für blaue Augen. Welche Aussage über das Individuum ist KORREKT?",
    options: [
          "Das Individuum ist homozygot und hat blaue Augen.",
          "Das Individuum ist heterozygot und hat phänotypisch braune Augen, kann das Allel a jedoch an 50 % seiner Keimzellen weitergeben.",
          "Das Individuum bildet ausschließlich Gameten mit dem Allel A.",
          "Das Individuum hat intermediäre, gemischte Augenfarben (ein blaues und ein braunes Auge).",
          "Das Allel a wurde durch das Allel A dauerhaft aus der DNA gelöscht."
    ],
    correctAnswer: 1,
    explanation:
      "Bei einem heterozygoten Genotyp (Aa) und vollständiger Dominanz setzt sich das dominante Allel (A) im Phänotyp vollständig durch (braune Augen). Da sich die homologen Chromosomen in der Meiose trennen, erhalten 50 % der Gameten das Allel A und 50 % das Allel a.",
    tags: ["BMS","Biologie","Genetik","Heterozygotie","Dominanz","Genotyp","Phänotyp"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Phänotypische Plastizität & Umwelt",
    difficulty: "Mittel",
    questionText:
      "Zwei genetisch identische Stecklinge einer Hortensienpflanze (gleicher Genotyp) werden in unterschiedliche Böden gepflanzt: Pflanze 1 bildet auf saurem Boden blaue Blüten, Pflanze 2 auf alkalischem Boden rosa Blüten. Welcher genetische Grundsatz wird durch diese Beobachtung veranschaulicht?",
    options: [
          "Der pH-Wert des Bodens hat in Pflanze 1 zu einer gezielten Genommutation geführt.",
          "Der Genotyp ändert sich im Laufe des Wachstums durch Umweltgifte vollständig.",
          "Die Blütenfarbe wird ausschließlich durch die mitochondriale DNA bestimmt.",
          "Der Phänotyp ist das Resultat des Zusammenspiels aus genetischer Veranlagung (Genotyp) und modifizierenden Umweltfaktoren (Reaktionsnorm / phänotypische Plastizität).",
          "Es handelt sich um einen Nachweis der 1. Mendelschen Uniformitätsregel."
    ],
    correctAnswer: 3,
    explanation:
      "Der Phänotyp eines Organismus wird nicht allein durch den Genotyp festgelegt, sondern ergibt sich aus der Ausprägung der Gene unter bestimmten Umweltbedingungen. Die Bandbreite an Phänotypen, die ein gegebener Genotyp hervorbringen kann, nennt man Reaktionsnorm.",
    tags: ["BMS","Biologie","Genetik","Reaktionsnorm","Phänotyp","Umweltfaktoren","Genotyp"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen: Homologe vs. Schwesterchromatiden",
    difficulty: "Mittel",
    questionText:
      "Welcher grundlegende Unterschied besteht zwischen zwei „Schwesterchromatiden“ und zwei „homologen Chromosomen“ in einer diploiden Körperzelle nach der S-Phase?",
    options: [
          "Schwesterchromatiden sind durch DNA-Replikation entstandene, genetisch identische Kopien desselben Chromosoms; homologe Chromosomen stammen jeweils eines vom Vater und eines von der Mutter und tragen dieselben Genorte, aber möglicherweise unterschiedliche Allele.",
          "Homologe Chromosomen sind über ein gemeinsames Zentromer fest verbunden, Schwesterchromatiden nicht.",
          "Schwesterchromatiden kommen nur in haploiden Keimzellen vor, homologe Chromosomen nur in der Zygote.",
          "Homologe Chromosomen sind stets genetisch vollkommen identisch, Schwesterchromatiden völlig verschieden.",
          "Schwesterchromatiden trennen sich in der Meiose I, homologe Chromosomen in der Mitose."
    ],
    correctAnswer: 0,
    explanation:
      "Schwesterchromatiden entstehen durch semikonservative Replikation in der S-Phase, sind genetisch identisch und hängen am Zentromer zusammen. Homologe Chromosomenpaare bestehen aus einem mütterlichen und einem väterlichen Chromosom: Sie besitzen dieselben Gene in gleicher Reihenfolge, können sich aber in ihren Allelen unterscheiden.",
    tags: ["BMS","Biologie","Genetik","Schwesterchromatiden","Homologe Chromosomen","Zentromer"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen & Zellzyklus: Ploidie und DNA-Gehalt (n und c)",
    difficulty: "Mittel",
    questionText:
      "Eine menschliche somatische Zelle befindet sich unmittelbar vor Beginn der Mitose in der späten G2-Phase der Interphase. Wie viele Chromosomen und wie viele Chromatiden (DNA-Doppelhelices) liegen in diesem Zellkern vor?",
    options: [
          "23 Chromosomen und 23 Chromatiden (1n, 1c)",
          "23 Chromosomen und 46 Chromatiden (1n, 2c)",
          "46 Chromosomen und 92 Chromatiden (2n, 4c)",
          "92 Chromosomen und 92 Chromatiden (4n, 4c)",
          "46 Chromosomen und 46 Chromatiden (2n, 2c)"
    ],
    correctAnswer: 2,
    explanation:
      "Die Zelle ist diploid ($2n = 46$ Chromosomen). Da in der vorangegangenen S-Phase die gesamte DNA verdoppelt wurde, besteht jedes der 46 Chromosomen aus zwei identischen Chromatiden. Die Zelle enthält somit 92 Chromatiden (entspricht einem DNA-Gehalt von 4c).",
    tags: ["BMS","Biologie","Genetik","Chromosomen","Chromatiden","G2-Phase","Zellzyklus","Ploidie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen: Karyogramm-Interpretation",
    difficulty: "Leicht",
    questionText:
      "In einem zytogenetischen Labor wird ein Karyogramm einer fetalen Zelle erstellt. Es werden 45 Autosomen (darunter drei Exemplare des Chromosoms 21) sowie ein X- und ein Y-Chromosom gezählt. Wie lautet die korrekte zytogenetische Bezeichnung für diesen Befund?",
    options: [
          "46,XY (gesunder männlicher Karyotyp)",
          "45,X0 (Turner-Syndrom)",
          "47,XXY (Klinefelter-Syndrom)",
          "47,XX,+18 (Edwards-Syndrom)",
          "47,XY,+21 (männlicher Karyotyp mit freier Trisomie 21)"
    ],
    correctAnswer: 4,
    explanation:
      "Die Gesamtchromosomenzahl beträgt 47 (45 Autosomen + 2 Gonosomen). Das Gonosomenpaar XY weist auf ein männliches Individuum hin. Das überzählige Autosom 21 wird durch '+21' angegeben, somit lautet die Nomenklatur 47,XY,+21 (Down-Syndrom).",
    tags: ["BMS","Biologie","Genetik","Karyogramm","Trisomie 21","Down-Syndrom","Aneuploidie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Chromatidentrennung & Chromosomenzahl im Verlauf",
    difficulty: "Schwer",
    questionText:
      "Wie viele eigenständige Ein-Chromatid-Chromosomen befinden sich vorübergehend in einer menschlichen Zelle während der Anaphase der Mitose, nachdem sich die Zentromere getrennt haben, aber bevor die Cytokinese abgeschlossen ist?",
    options: [
          "23",
          "92",
          "46",
          "184",
          "Null, da Chromosomen in der Anaphase aufgelöst werden"
    ],
    correctAnswer: 1,
    explanation:
      "In der Metaphase liegen 46 Zwei-Chromatiden-Chromosomen vor. Sobald sich in der Anaphase die Zentromere spalten und die Schwesterchromatiden getrennt werden, zählt jede Chromatide als eigenständiges Ein-Chromatid-Chromosom. Vorübergehend befinden sich daher 92 Chromosomen in der noch ungeteilten Zelle.",
    tags: ["BMS","Biologie","Genetik","Mitose","Anaphase","Chromosomenzahl","Chromatiden"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Mitotische Nondisjunction & Mosaizismus",
    difficulty: "Schwer",
    questionText:
      "Was geschieht, wenn während einer Furchungsteilung in der frühen Embryonalentwicklung die beiden Schwesterchromatiden eines Chromosoms in der Anaphase der Mitose NICHT getrennt werden und beide zu demselben Zellpol wandern (mitotische Nondisjunction)?",
    options: [
          "Beide entstehenden Tochterzellen sterben zwingend innerhalb von Sekunden ab.",
          "Alle Zellen des künftigen Fetus erhalten automatisch einen haploiden Chromosomensatz.",
          "Es entstehen zwei völlig normale Zellen mit jeweils 46 Chromosomen.",
          "Es entstehen zwei genetisch ungleiche Tochterzelllinien: eine Zelle mit 47 Chromosomen (Trisomie) und eine Zelle mit 45 Chromosomen (Monosomie), was zu einem genetischen Mosaik führen kann.",
          "Die Zelle wandelt sich unmittelbar in ein Spermium um."
    ],
    correctAnswer: 3,
    explanation:
      "Eine mitotische Nondisjunction nach der Zygotenbildung führt dazu, dass eine Tochterzelle ein zusätzliches Chromosom erhält (47 Chromosomen), während der anderen eines fehlt (45 Chromosomen). Teilen sich diese Zellen weiter, entsteht ein chromosomal mutes Mosaik (verschiedene Zelllinien im selben Organismus).",
    tags: ["BMS","Biologie","Genetik","Mitose","Nondisjunction","Aneuploidie","Mosaik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Chromosomensatz nach Meiose I",
    difficulty: "Mittel",
    questionText:
      "Welchen Chromosomensatz und welchen DNA-Gehalt weist eine menschliche Zelle nach erfolgreichem Abschluss der Telophase I der Meiose (vor Beginn der Meiose II) auf?",
    options: [
          "Haploid: 23 Chromosomen, wobei jedes Chromosom noch aus zwei Chromatiden besteht (1n, 2c)",
          "Diploid: 46 Chromosomen mit jeweils zwei Chromatiden (2n, 4c)",
          "Haploid: 23 Chromosomen mit jeweils einer einzelnen Chromatide (1n, 1c)",
          "Tetraploid: 92 Chromosomen (4n, 4c)",
          "Diploid: 46 Chromosomen mit jeweils einer Chromatide (2n, 2c)"
    ],
    correctAnswer: 0,
    explanation:
      "In der Meiose I wurden die homologen Chromosomenpaare getrennt (Reduktion von 2n auf 1n = 23 Chromosomen). Da die Schwesterchromatiden jedoch noch nicht getrennt wurden, liegt jedes Chromosom als Zwei-Chromatiden-Chromosom vor (DNA-Gehalt 2c).",
    tags: ["BMS","Biologie","Genetik","Meiose","Meiose I","Haploidie","Zwei-Chromatiden-Chromosom"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Interchromosomale vs. intrachromosomale Rekombination",
    difficulty: "Mittel",
    questionText:
      "Worin besteht der funktionelle Unterschied zwischen der interchromosomalen und der intrachromosomalen Rekombination während der Meiose?",
    options: [
          "Interchromosomale Rekombination findet nur bei Bakterien statt, intrachromosomale nur bei Menschen.",
          "Intrachromosomale Rekombination trennt Schwesterchromatiden in Meiose II; interchromosomale Rekombination verdoppelt die DNA in der S-Phase.",
          "Die interchromosomale Rekombination beruht auf der zufälligen Verteilung der väterlichen und mütterlichen homologen Chromosomen in der Anaphase I; die intrachromosomale Rekombination beruht auf dem Stückaustausch (Crossing-over) zwischen Nicht-Schwesterchromatiden in der Prophase I.",
          "Beide Begriffe bezeichnen exakt denselben Vorgang an den Ribosomen.",
          "Interchromosomale Rekombination betrifft nur Mitochondrien; intrachromosomale betrifft nur Gonosomen."
    ],
    correctAnswer: 2,
    explanation:
      "Interchromosomale Rekombination bezeichnet die freie, zufällige Ausrichtung und Verteilung ganzer homologer mütterlicher und väterlicher Chromosomen in der Metaphase I / Anaphase I ($2^{23}$ Möglichkeiten). Intrachromosomale Rekombination entsteht durch Bruch- und Wiedervereinigungsvorgänge (Crossing-over) innerhalb gepaarter homologer Chromosomen in der Prophase I.",
    tags: ["BMS","Biologie","Genetik","Meiose","Rekombination","Crossing-over","Interchromosomal"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Nondisjunction in Meiose I vs. Meiose II",
    difficulty: "Schwer",
    questionText:
      "Welche Konsequenz hat eine meiotische Nondisjunction (Fehlverteilung), wenn sie bereits in der MEIOSE I stattfindet, für die vier resultierenden Keimzellen (Gameten)?",
    options: [
          "Alle vier Gameten besitzen einen normalen haploiden Chromosomensatz (n).",
          "Zwei Gameten sind normal (n), eine Gamete ist disom (n+1) und eine ist nullisom (n-1).",
          "Alle vier Gameten erhalten einen doppelten diploiden Chromosomensatz (2n).",
          "Es entstehen ausschließlich Keimzellen ohne Zellkern.",
          "Alle vier resultierenden Gameten sind aneuploid: Zwei Gameten besitzen ein überzähliges Chromosom (n+1) und zwei Gameten fehlt dieses Chromosom (n-1)."
    ],
    correctAnswer: 4,
    explanation:
      "Trennt sich ein homologes Chromosomenpaar in Meiose I nicht (Nondisjunction I), wandern beide Chromosomen in eine Tochterzelle ($n+1$), während die andere leer ausgeht ($n-1$). Nach normaler Trennung der Schwesterchromatiden in Meiose II sind 100 % der Gameten fehlerhaft: zwei mit $n+1$ und zwei mit $n-1$. (Bei Nondisjunction in Meiose II wären dagegen 50 % normal).",
    tags: ["BMS","Biologie","Genetik","Meiose","Nondisjunction","Aneuploidie","Trisomie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Dihybrider Erbgang (9:3:3:1)",
    difficulty: "Mittel",
    questionText:
      "Zwei Erbsenpflanzen, die für zwei unabhängig vererbte Merkmale heterozygot sind (Genotyp AaBb, wobei A für gelbe Samenfarbe dominant über a für grün ist und B für runde Samenform dominant über b für runzlig ist), werden miteinander gekreuzt. Welches phänotypische Spaltungsverhältnis wird unter den Nachkommen erwartet?",
    options: [
          "9 gelb/rund : 3 gelb/runzlig : 3 grün/rund : 1 grün/runzlig",
          "3 gelb/rund : 1 grün/runzlig",
          "1 gelb/rund : 1 gelb/runzlig : 1 grün/rund : 1 grün/runzlig",
          "12 gelb/rund : 4 grün/runzlig",
          "Alle Nachkommen sind phänotypisch uniform gelb und rund"
    ],
    correctAnswer: 0,
    explanation:
      "Bei einem dihybriden Erbgang mit zwei ungebundenen Genen und vollständiger Dominanz spaltet sich die Nachkommenschaft bei Kreuzung zweier Heterozygoter ($AaBb \\times AaBb$) phänotypisch im klassischen Mendel-Verhältnis 9:3:3:1 auf.",
    tags: ["BMS","Biologie","Genetik","Mendel","Dihybrid","Punnett-Quadrat","Spaltungsverhältnis"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Intermediäre Vererbung",
    difficulty: "Mittel",
    questionText:
      "Bei der Pflanze Wunderblume (Mirabilis jalapa) führt das Allel cR zu roten Blüten und das Allel cW zu weißen Blüten. Heterozygote Pflanzen (cR cW) bilden rosa Blüten aus (unvollständige Dominanz / intermediärer Erbgang). Zwei rosa blühende Pflanzen werden miteinander gekreuzt. Welches Phänotypverhältnis tritt bei den Nachkommen auf?",
    options: [
          "Ausschließlich 100 % rosa blühende Pflanzen",
          "3 rot : 1 weiß",
          "9 rot : 3 rosa : 4 weiß",
          "1 rot : 2 rosa : 1 weiß",
          "1 rot : 1 weiß"
    ],
    correctAnswer: 3,
    explanation:
      "Bei unvollständiger Dominanz (intermediärer Vererbung) spiegelt der Phänotyp direkt den Genotyp wider: Aus $c^R c^W \\times c^R c^W$ entstehen die Genotypen $1 c^R c^R$ (rot) : $2 c^R c^W$ (rosa) : $1 c^W c^W$ (weiß). Das Phänotypverhältnis lautet somit 1 : 2 : 1.",
    tags: ["BMS","Biologie","Genetik","Intermediär","Unvollständige Dominanz","Phänotyp"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Wahrscheinlichkeitsrechnung bei Monohybridem Erbgang",
    difficulty: "Mittel",
    questionText:
      "Ein Paar plant ein Kind. Beide Elternteile sind phänotypisch gesund, tragen aber als heterozygote Anlagenträger (Genotyp Aa) jeweils ein rezessives Allel (a) für eine schwere autosomal-rezessive Stoffwechselkrankheit. Mit welcher Wahrscheinlichkeit wird ihr erstes Kind phänotypisch gesund sein UND gleichzeitig heterozygoter Träger (Aa) der Anlage sein?",
    options: [
          "25 % (1/4)",
          "50 % (2/4 bzw. 1/2)",
          "75 % (3/4)",
          "100 %",
          "0 %"
    ],
    correctAnswer: 1,
    explanation:
      "Kreuzung: Aa × Aa. Die möglichen Genotypen der Nachkommen verteilen sich nach Mendel: 1/4 AA (gesund, nicht Anlagenträger), 2/4 = 1/2 Aa (gesund, heterozygoter Anlagenträger) und 1/4 aa (erkrankt). Die Wahrscheinlichkeit, dass das Kind den Genotyp Aa besitzt (und damit phänotypisch gesund ist), beträgt 50 % (1/2).",
    tags: ["BMS","Biologie","Genetik","Wahrscheinlichkeit","Autosomal-rezessiv","Heterozygotie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Testkreuzung zur Genotypbestimmung",
    difficulty: "Leicht",
    questionText:
      "Eine schwarze Maus (schwarzes Fell B ist dominant über braunes Fell b) wird zur Genotypbestimmung mit einer braunen Maus (bb) gekreuzt (Testkreuzung). Unter den 12 Nachkommen befinden sich 6 schwarze und 6 braune Mäuse. Welcher Genotyp lag bei der schwarzen Elternmaus vor?",
    options: [
          "Homozygot dominant (BB)",
          "Hemizygot (B0)",
          "Heterozygot (Bb)",
          "Homozygot rezessiv (bb)",
          "Der Genotyp kann aus dieser Kreuzung prinzipiell nicht abgeleitet werden."
    ],
    correctAnswer: 2,
    explanation:
      "Wäre die schwarze Elternmaus homozygot dominant (BB), wären nach der Uniformitätsregel alle Nachkommen aus $BB \\times bb$ schwarz (Bb). Das Auftreten brauner Nachkommen (bb) beweist zwingend, dass die schwarze Elternmaus das rezessive Allel b weitergegeben hat und somit heterozygot (Bb) war.",
    tags: ["BMS","Biologie","Genetik","Testkreuzung","Genotypbestimmung","Rückkreuzung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung: Abweichung von den Mendelschen Spaltungsverhältnissen",
    difficulty: "Mittel",
    questionText:
      "Warum weicht eine Kreuzung zweier dihybrider Gene bei einer echten Genkopplung signifikant vom klassischen Mendelschen Phänotypverhältnis (z. B. 1:1:1:1 bei einer Testkreuzung) ab?",
    options: [
          "Weil gekoppelte Gene während der Meiose nicht repliziert werden.",
          "Weil gekoppelte Gene stets auf verschiedenen Chromosomen liegen.",
          "Weil gekoppelte Gene ausschließlich über die Mutter vererbt werden.",
          "Weil gekoppelte Gene keine Proteine synthetisieren können.",
          "Weil Gene, die auf demselben Chromosom liegen, bei der Meiose bevorzugt gemeinsam vererbt werden, sodass die elterlichen Allelkombinationen (Parentaltypen) in deutlich höherer Zahl auftreten als rekombinante Typen."
    ],
    correctAnswer: 4,
    explanation:
      "Liegen zwei Gene auf demselben Chromosom, werden sie bei der meiotischen Verteilung nicht unabhängig voneinander sortiert, sondern als feste Kopplungsgruppe weitergegeben. Rekombinante Phänotypen entstehen nur durch seltene Crossing-over-Ereignisse, weshalb die elterlichen Kombinationen zahlenmäßig dominieren.",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Kopplungsgruppe","Mendel-Abweichung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung: Berechnung der Rekombinationsfrequenz",
    difficulty: "Mittel",
    questionText:
      "Bei einer dihybriden Testkreuzung an Taufliegen (Drosophila melanogaster) zur Untersuchung zweier gekoppelter Gene werden unter 1.000 Nachkommen folgende Anzahlen gezählt: 460 mit elterlicher Merkmalskombination 1, 460 mit elterlicher Kombination 2, 40 rekombinante Nachkommen vom Typ A und 40 rekombinante Nachkommen vom Typ B. Wie groß ist die Rekombinationsfrequenz und welcher genetische Abstand (in centiMorgan, cM) resultiert daraus?",
    options: [
          "4 % bzw. 4 cM",
          "8 % bzw. 8 cM",
          "80 % bzw. 80 cM",
          "16 % bzw. 16 cM",
          "0,8 % bzw. 0,8 cM"
    ],
    correctAnswer: 1,
    explanation:
      "Die Gesamtzahl der Rekombinanten beträgt $40 + 40 = 80$. Bei einer Gesamtzahl von 1.000 Nachkommen errechnet sich die Rekombinationsfrequenz als $80 / 1000 = 0,08 = 8\\,\\%$. Eine Rekombinationsfrequenz von 1 % entspricht per Definition einem Kartenabstand von 1 centiMorgan (cM). Der Abstand beträgt daher 8 cM.",
    tags: ["BMS","Biologie","Genetik","Rekombinationsfrequenz","centiMorgan","Genkartierung","Drosophila"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitochondriale Vererbung: Stammbaumanalyse",
    difficulty: "Mittel",
    questionText:
      "Ein Humangenetiker analysiert den Stammbaum einer Familie mit einer mitochondrial vererbten Stoffwechselerkrankung (Mutation der mtDNA). Welches Vererbungsmuster ist für eine solche mitochondriale Erkrankung typisch?",
    options: [
          "Eine erkrankte Mutter vererbt das Merkmal an alle ihre Kinder (Söhne und Töchter); ein erkrankter Vater vererbt das Merkmal an keines seiner Kinder.",
          "Ein erkrankter Vater vererbt das Merkmal an alle seine Töchter, aber an keinen seiner Söhne.",
          "Ausschließlich männliche Nachkommen können erkranken, da Frauen keine Mitochondrien besitzen.",
          "Das Merkmal folgt exakt den Mendelschen Spaltungsverhältnissen eines autosomal-rezessiven Erbgangs.",
          "Erkrankte Eltern haben stets ausschließlich gesunde Kinder."
    ],
    correctAnswer: 0,
    explanation:
      "Da die Eizelle das Zytoplasma mitsamt allen Mitochondrien für die Zygote beisteuert, wird mitochondriale DNA strikt maternal weitergegeben. Eine betroffene Frau vererbt die Mutation an alle Nachkommen beiderlei Geschlechts. Männer geben ihre Mitochondrien nicht weiter, weshalb Kinder eines betroffenen Vaters das Merkmal nicht erben.",
    tags: ["BMS","Biologie","Genetik","Mitochondrien","Maternale Vererbung","Stammbaum","mtDNA"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Euchromatin vs. Heterochromatin",
    difficulty: "Leicht",
    questionText:
      "Im Zellkern eukaryotischer Zellen liegt das Chromatin in zwei unterschiedlichen funktionellen Zustandsformen vor: Euchromatin und Heterochromatin. Welche Aussage charakterisiert das „Euchromatin“ im Vergleich zum „Heterochromatin“ zutreffend?",
    options: [
          "Euchromatin ist maximal verdichtet, enthält keine Gene und wird niemals transkribiert.",
          "Euchromatin enthält ausschließlich RNA und keine Histonproteine.",
          "Euchromatin ist weniger stark kondensiert (aufgelockert), für Transkriptionsfaktoren und RNA-Polymerasen gut zugänglich und stellt die transkriptionsaktive Form des Chromatins dar.",
          "Euchromatin kommt ausschließlich in den Telomeren und Zentromeren vor.",
          "Heterochromatin wird während der Interphase vollständig aus dem Kern exportiert."
    ],
    correctAnswer: 2,
    explanation:
      "Euchromatin ist aufgelockert verpackt, sodass die DNA für Transkriptionsenzyme erreichbar ist (aktive Genexpression). Heterochromatin dagegen ist dicht gepackt und weitgehend transkriptionell inaktiv (z. B. Zentromere, Telomere oder das inaktivierte X-Chromosom/Barr-Körperchen).",
    tags: ["BMS","Biologie","Genetik","Euchromatin","Heterochromatin","Transkription","Chromatin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Promotorfunktion",
    difficulty: "Leicht",
    questionText:
      "Welche grundlegende biologische Funktion erfüllt der „Promotor“ im Aufbau eines eukaryotischen Gens?",
    options: [
          "Er codiert für die Aminosäuresequenz des fertigen Proteins.",
          "Er bindet Ribosomen im Zytoplasma zur Translation.",
          "Er schneidet die Introns aus der Prä-mRNA heraus.",
          "Er schützt die Enden der Chromosomen vor Abbau.",
          "Er ist eine regulatorische DNA-Sequenz stromaufwärts der codierenden Region, die als Bindungsstelle für Transkriptionsfaktoren und die RNA-Polymerase dient und den Startpunkt sowie die Richtung der Transkription festlegt."
    ],
    correctAnswer: 4,
    explanation:
      "Der Promotor ist der regulatorische Steuerbereich eines Gens (oft mit TATA-Box). Hier binden basale Transkriptionsfaktoren und die RNA-Polymerase, um den Transkriptionsstartpunkt präzise zu definieren. Er wird selbst nicht in Protein translatiert.",
    tags: ["BMS","Biologie","Genetik","Promotor","Transkription","Genaufbau","RNA-Polymerase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Stille, Missense- und Nonsense-Mutationen",
    difficulty: "Mittel",
    questionText:
      "Welche Auswirkung hat eine punktförmige Basensubstitution, die zu einer sogenannten „Nonsense-Mutation“ im codierenden Bereich eines Gens führt?",
    options: [
          "Sie codiert durch die Degeneriertheit des Codes für dieselbe Aminosäure wie zuvor.",
          "Sie verdoppelt die gesamte Chromosomenanzahl in der Zelle.",
          "Sie führt zum Einbau einer chemisch ähnlichen Aminosäure ohne Funktionsverlust.",
          "Sie wandelt ein Aminosäure-codierendes Basentriplett in ein Stoppcodon (z. B. UAA, UAG, UGA) um, was zu einem vorzeitigen Abbruch der Translation und einem verkürzten, meist funktionslosen Protein führt.",
          "Sie verhindert den Abbau der mRNA durch das Spleißosom."
    ],
    correctAnswer: 3,
    explanation:
      "Eine Nonsense-Mutation verwandelt ein Sinncodon (Sense-Codon) in ein Stoppcodon. Bei der Translation bricht das Ribosom an dieser Stelle vorzeitig ab, sodass ein verkürztes Truncated Protein entsteht, das meist seine biologische Aktivität verliert.",
    tags: ["BMS","Biologie","Genetik","Punktmutation","Nonsense-Mutation","Stoppcodon","Translation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Somatische vs. Keimbahnmutationen",
    difficulty: "Leicht",
    questionText:
      "In einer Hautzelle (Keratinozyt) eines Erwachsenen entsteht durch UV-Strahlung eine Mutation in einem Tumorsuppressorgen. Welche Aussage über die Vererbbarkeit dieser Mutation ist KORREKT?",
    options: [
          "Die Mutation wird zwingend an 50 % aller künftigen Kinder vererbt.",
          "Die Mutation wird über das X-Chromosom an alle Töchter weitergegeben.",
          "Es handelt sich um eine somatische Mutation; sie kann zur lokalen Tumorentstehung im betroffenen Gewebe beitragen, wird aber NICHT an die Nachkommen vererbt, da sie nicht in den Keimzellen vorliegt.",
          "Somatische Mutationen wandern über die Blutbahn in die Keimdrüsen und verändern dort alle Spermien.",
          "Die Mutation repariert automatisch alle Schäden im gesamten Organismus."
    ],
    correctAnswer: 2,
    explanation:
      "Somatische Mutationen treten in Körperzellen auf und betreffen nur das Individuum selbst (z. B. Entstehung eines Melanoms). An die Nachkommen können ausschließlich Keimbahnmutationen (in Spermien oder Eizellen bzw. deren direkten Vorläufern) weitergegeben werden.",
    tags: ["BMS","Biologie","Genetik","Somatische Mutation","Keimbahnmutation","Vererbung","UV-Strahlung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Strukturelle Chromosomenmutationen",
    difficulty: "Mittel",
    questionText:
      "Welche strukturelle Chromosomenmutation liegt vor, wenn ein abgebrochenes Chromosomenstück um 180° gedreht und an derselben Stelle wieder in das Chromosom eingefügt wird?",
    options: [
          "Inversion",
          "Deletion",
          "Duplikation",
          "Reziproke Translokation",
          "Aneuploidie"
    ],
    correctAnswer: 0,
    explanation:
      "Bei einer Inversion bricht ein Abschnitt eines Chromosoms an zwei Stellen heraus, dreht sich um 180° und heilt in umgekehrter Orientierung wieder ein. Liegt das Zentromer im invertierten Bereich, spricht man von perizentrischer Inversion, liegt es außerhalb, von parazentrischer Inversion.",
    tags: ["BMS","Biologie","Genetik","Chromosomenmutation","Inversion","Deletion","Translokation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Geschlechtsbestimmung & Gonosomale Vererbung: X-chromosomal rezessiv",
    difficulty: "Mittel",
    questionText:
      "Warum treten X-chromosomal-rezessiv vererbte Merkmale und Erkrankungen (wie z. B. die Rot-Grün-Sehschwäche oder die Hämophilie A) beim Menschen bei Männern phänotypisch wesentlich häufiger auf als bei Frauen?",
    options: [
          "Weil Männer zwei X-Chromosomen besitzen und das Merkmal doppelt exprimieren.",
          "Weil Männer hemizygot sind (sie besitzen nur ein X-Chromosom); ein einzelnes rezessives Allel auf ihrem X-Chromosom kommt daher phänotypisch immer zur Ausprägung, während Frauen durch ein zweites, gesundes X-Chromosom meist kompensiert sind.",
          "Weil das Y-Chromosom alle rezessiven Gene auf dem X-Chromosom zerstört.",
          "Weil Frauen keine X-Chromosomen von ihren Vätern erben können.",
          "Weil das SRY-Gen auf dem Y-Chromosom die Blutgerinnung direkt hemmt."
    ],
    correctAnswer: 1,
    explanation:
      "Männer haben das Gonosomenpaar XY und sind bezüglich der Gene auf dem X-Chromosom hemizygot (kein homologer Partner vorhanden). Ein einzelnes mutiertes Allel reicht aus, um das Merkmal auszuprägen. Frauen (XX) erkranken nur, wenn beide X-Chromosomen die Mutation tragen; sind sie heterozygot, sind sie gesunde Überträgerinnen (Konduktorinnen).",
    tags: ["BMS","Biologie","Genetik","X-chromosomal","Hemizygotie","Konduktorin","Hämophilie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Krebsentstehung: Knudson-Hypothese & Tumorsuppressorgene",
    difficulty: "Schwer",
    questionText:
      "Worin besteht der wesentliche genetische Unterschied im Wirkungsmechanismus zwischen einer krebsfördernden Mutation in einem Protoonkogen und einer Mutation in einem Tumorsuppressorgen?",
    options: [
          "Protoonkogene erfordern den Ausfall beider Allele; Tumorsuppressorgene werden dominant vererbt.",
          "Protoonkogene hemmen die Gefäßneubildung; Tumorsuppressorgene fördern die Metastasierung.",
          "Tumorsuppressorgene kommen nur in Viren vor; Protoonkogene nur in Bakterien.",
          "Mutationen in Tumorsuppressorgenen führen stets zur sofortigen Apoptose.",
          "Protoonkogene wirken zellteilungsfördernd und führen meist schon durch eine aktivierende Mutation in einem einzigen Allel (Gain-of-Function, dominant auf Zellebene) zu unkontrolliertem Wachstum; Tumorsuppressorgene wirken wachstumshemmend und erfordern in der Regel den Funktionsverlust beider Allele (Loss-of-Function, rezessiv auf Zellebene), damit die Schutzfunktion entfällt."
    ],
    correctAnswer: 4,
    explanation:
      "Protoonkogene codieren für wachstumsfördernde Proteine. Eine aktivierende Mutation in einer Kopie (Gain-of-Function) reicht aus, um die Zelle permanent zur Teilung anzutreiben. Tumorsuppressorgene sind die 'Notbremse' des Zellzyklus; nach der Knudson-Two-Hit-Hypothese müssen in der Regel beide Allele inaktiviert werden (Loss-of-Function), damit die Tumorsuppression vollständig versagt.",
    tags: ["BMS","Biologie","Genetik","Onkologie","Protoonkogen","Tumorsuppressor","Gain-of-Function","Loss-of-Function"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set2-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Krebsentstehung: Zellzyklus-Checkpoint & Apoptose",
    difficulty: "Mittel",
    questionText:
      "Welche zentrale Rolle spielt das Tumorsuppressorprotein p53 („Wächter des Genoms“) bei der zellulären Qualitätskontrolle nach dem Auftreten schwerer DNA-Schäden?",
    options: [
          "Es beschleunigt die Mitose, damit mutierte Zellen schneller aus dem Körper gespült werden.",
          "Es baut die Zellmembran ab, um Nährstoffe für Nachbarzellen freizusetzen.",
          "Es wandelt normale Zellen in Metastasen um.",
          "Es hält den Zellzyklus am G1/S-Kontrollpunkt an, um Reparaturenzymen Zeit zur DNA-Reparatur zu geben; gelingt die Reparatur nicht, leitet es den programmierten Zelltod (Apoptose) ein, um die Weitergabe von Mutationen zu verhindern.",
          "Es verhindert die Transkription aller mitochondrialen Gene."
    ],
    correctAnswer: 3,
    explanation:
      "p53 ist ein Transkriptionsfaktor, der bei DNA-Doppelstrangbrüchen oder UV-Schäden aktiviert wird. Er induziert den Cyclin-abhängigen Kinaseinhibitor p21, der den Zellzyklus in der G1-Phase arretiert. Ist der Schaden irreparabel, aktiviert p53 pro-apoptotische Faktoren (z. B. BAX) und löst den programmierten Zelltod (Apoptose) aus.",
    tags: ["BMS","Biologie","Genetik","p53","Apoptose","Zellzyklus-Kontrollpunkt","Tumorsuppressor"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
  },
  {
    id: "bio-04-set3-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Genotypableitung aus Phänotyp",
    difficulty: "Leicht",
    questionText:
      "Bei Meerschweinchen ist schwarzes Fell (B) vollständig dominant über weißes Fell (b). Ein schwarzes Meerschweinchen wird mit einem weißen Meerschweinchen gekreuzt. Unter den Nachkommen befinden sich sowohl schwarze als auch weiße Tiere. Welcher Genotyp lag beim schwarzen Elterntier vor?",
    options: [
          "Homozygot dominant (BB)",
          "Homozygot rezessiv (bb)",
          "Heterozygot (Bb)",
          "Hemizygot (B0)",
          "Das Elterntier besitzt überhaupt keine Allele für die Fellfarbe."
    ],
    correctAnswer: 2,
    explanation:
      "Das weiße Jungtier besitzt zwingend den homozygot rezessiven Genotyp bb. Es muss daher von jedem Elternteil ein rezessives Allel b geerbt haben. Da das schwarze Elterntier phänotypisch schwarz ist, muss es mindestens ein Allel B tragen. Daraus folgt zwingend der heterozygote Genotyp Bb.",
    tags: ["BMS","Biologie","Genetik","Genotyp","Phänotyp","Heterozygotie","Rückkreuzung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Phänotypische Vorhersage bei vollständiger Dominanz",
    difficulty: "Mittel",
    questionText:
      "Ein phänotypisch dominantes Merkmal (braune Augenfarbe A) liegt bei einer Person vor. Welche Aussage über ihren möglichen Genotyp und ihre Nachkommen bei Verpaarung mit einer blauäugigen Person (Genotyp aa) ist KORREKT?",
    options: [
          "Die Person muss zwingend den Genotyp AA besitzen, da rezessive Allele bei dominantem Phänotyp abgebaut werden.",
          "Alle Nachkommen werden unabhängig vom Genotyp der Eltern stets zu 100 % blauäugig sein.",
          "Die Person kann nur den Genotyp Aa besitzen; ein Genotyp AA ist biologisch unmöglich.",
          "Die braunäugige Person kann keine Gameten mit dem Allel a bilden.",
          "Die braunäugige Person kann den Genotyp AA oder Aa besitzen; ist sie AA, sind 100 % der Nachkommen braunäugig, ist sie Aa, sind 50 % braunäugig und 50 % blauäugig."
    ],
    correctAnswer: 4,
    explanation:
      "Bei vollständiger Dominanz zeigen Individuen mit Genotyp AA und Aa denselben Phänotyp. Kreuzt man AA mit aa, sind alle Nachkommen heterozygot Aa (100 % braunäugig). Kreuzt man Aa mit aa, spalten sich die Nachkommen zu 50 % Aa (braun) und 50 % aa (blau) auf.",
    tags: ["BMS","Biologie","Genetik","Dominanz","Phänotyp","Genotyp","Mendel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen & Zellzyklus: DNA-Gehalt nach S-Phase",
    difficulty: "Mittel",
    questionText:
      "Eine ruhende menschliche Körperzelle in der G1-Phase besitzt 46 Ein-Chromatid-Chromosomen (diploid 2n, DNA-Gehalt 2c). Wie verändert sich dieser Zustand nach vollständiger Durchführung der S-Phase bezüglich Chromosomenzahl, Chromatidenzahl und Ploidie?",
    options: [
          "Die Chromosomenzahl bleibt bei 46 (weiterhin diploid, 2n), aber die Chromatidenzahl verdoppelt sich auf 92 Zwei-Chromatiden-Chromosomen (DNA-Gehalt 4c).",
          "Die Zelle wird tetraploid mit 92 Chromosomen und 92 Chromatiden (4n, 4c).",
          "Die Chromosomenzahl halbiert sich auf 23 haploide Chromosomen (1n, 1c).",
          "Die Chromatidenzahl bleibt bei 46, aber die Ploidie steigt auf 4n.",
          "Die Zelle verliert ihren Zellkern und wird polyploid."
    ],
    correctAnswer: 0,
    explanation:
      "In der S-Phase wird die DNA semikonservativ verdoppelt. Aus jedem Ein-Chromatid-Chromosom entsteht ein Zwei-Chromatiden-Chromosom. Die Ploidie (2n) und die Chromosomenzahl (46) ändern sich dadurch nicht, aber die Zahl der Chromatiden verdoppelt sich von 46 auf 92 (DNA-Menge verdoppelt sich von 2c auf 4c).",
    tags: ["BMS","Biologie","Genetik","S-Phase","Chromatiden","Ploidie","Zellzyklus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen & Zellzyklus: Karyogramm-Interpretation",
    difficulty: "Leicht",
    questionText:
      "Ein zytogenetischer Befund lautet 47,XXY. Alle 22 Autosomenpaare liegen zweifach und morphologisch unauffällig vor. Welche Schlussfolgerung über das Geschlecht und das vorliegende Syndrom ist KORREKT?",
    options: [
          "Es handelt sich um eine phänotypische Frau mit Down-Syndrom.",
          "Es handelt sich um ein Individuum ohne Geschlechtschromosomen mit Turner-Syndrom.",
          "Es handelt sich um einen gesunden Mann ohne jegliche genetische Besonderheit.",
          "Es handelt sich um ein phänotypisch männliches Individuum mit Klinefelter-Syndrom, bedingt durch eine Gonosomen-Aneuploidie.",
          "Es handelt sich um eine Triploidie des gesamten Genoms mit 69 Chromosomen."
    ],
    correctAnswer: 3,
    explanation:
      "Das Karyogramm 47,XXY kennzeichnet das Klinefelter-Syndrom. Da das Y-Chromosom mit dem SRY-Gen vorhanden ist, erfolgt die Differenzierung der Keimdrüsen in männliche Richtung. Es liegt eine Aneuploidie der Geschlechtschromosomen (Gonosomen) vor.",
    tags: ["BMS","Biologie","Genetik","Klinefelter-Syndrom","Gonosomen","Karyotyp","Aneuploidie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Mosaizismus durch Chromatidfehlverteilung",
    difficulty: "Schwer",
    questionText:
      "Während einer frühen mitotischen Furchungsteilung einer normalen diploiden Zygote (46,XY) geht in einer einzigen Zelle ein Chromosom 21 verloren, weil es in der Anaphase nicht rechtzeitig zum Zellpol wandert (Anaphase-Lag). Welche Folge hat dies für den heranwachsenden Organismus?",
    options: [
          "Alle Zellen des künftigen Körpers erhalten automatisch 45 Chromosomen.",
          "Es entsteht ein chromosomales Mosaik, bei dem ein Teil der Körperzellen den normalen Karyotyp (46,XY) besitzt und eine zweite Zelllinie eine Monosomie 21 (45,XY,-21) aufweist.",
          "Die Zygote teilt sich sofort in zwei eineiige Zwillinge mit jeweils 47 Chromosomen.",
          "Es entsteht eine vollständige Polyploidie in allen Organen.",
          "Der Chromosomenverlust wird durch die Ribosomen innerhalb von Sekunden spurlos repariert."
    ],
    correctAnswer: 1,
    explanation:
      "Tritt eine mitotische Fehlverteilung (z. B. Anaphase-Lag oder Nondisjunction) nach der Befruchtung in einer embryonalen Zelle auf, teilen sich sowohl die normale als auch die mutierte Zelllinie weiter. Dies führt zu einem genetischen Mosaik mit nebeneinander existierenden Zelllinien unterschiedlicher Chromosomenzahl.",
    tags: ["BMS","Biologie","Genetik","Mitose","Mosaizismus","Anaphase-Lag","Chromosomenfehler"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Genetische Identität der Tochterzellen",
    difficulty: "Leicht",
    questionText:
      "Eine Basalzellschicht der menschlichen Epidermis regeneriert sich kontinuierlich durch Mitosen. Welcher Mechanismus stellt auf zellulärer Ebene sicher, dass beide Tochterzellen nach der Mitose denselben genetischen Informationsgehalt wie die Ausgangszelle besitzen?",
    options: [
          "Homologe Chromosomen tauschen in jeder Mitose großflächig Gene aus.",
          "Die Zelle halbiert bei jeder Teilung ihre DNA-Menge dauerhaft.",
          "Die mRNA wird vor der Teilung in DNA zurückübersetzt.",
          "Die Mitochondrien übernehmen vorübergehend die Funktion des Zellkerns.",
          "Die semikonservative DNA-Replikation in der S-Phase erzeugt exakte Schwesterchromatiden, die in der mitotischen Anaphase durch den Spindelapparat gleichmäßig und symmetrisch auf die beiden Zellpole verteilt werden."
    ],
    correctAnswer: 4,
    explanation:
      "Die genetische Gleichheit der mitotischen Tochterzellen wird durch zwei Schritte garantiert: (1) die fehlerfreie semikonservative Verdopplung der DNA in der S-Phase zu zwei identischen Schwesterchromatiden und (2) deren exakte Trennung in der Anaphase, sodass jede Tochterzelle einen vollständigen Satz an Ein-Chromatid-Chromosomen erhält.",
    tags: ["BMS","Biologie","Genetik","Mitose","Genetische Identität","Replikation","Spindelapparat"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Nondisjunction in Meiose II",
    difficulty: "Schwer",
    questionText:
      "Bei der Bildung von Eizellen verläuft die Meiose I für Chromosom 21 normal. In der MEIOSE II trennen sich die beiden Schwesterchromatiden des Chromosoms 21 in einer der beiden Tochterzellen jedoch NICHT (Nondisjunction II). Welche Chromosomenzahlen bezüglich Chromosom 21 sind in den vier resultierenden Keimzellen (Eizelle und Polkörperchen) zu erwarten?",
    options: [
          "50 % normal (je 1 Chromosom 21), 25 % mit überzähligem Chromosom (n+1) und 25 % mit fehlendem Chromosom (n-1)",
          "100 % aller Zellen besitzen ein überzähliges Chromosom 21 (n+1)",
          "Alle vier Zellen besitzen exakt die normale Chromosomenzahl",
          "100 % aller Zellen weisen eine Nullisomie auf (n-1)",
          "75 % der Zellen sind diploid und 25 % sind tetraploid"
    ],
    correctAnswer: 0,
    explanation:
      "Bei Nondisjunction in Meiose II verläuft die andere Zelle der Meiose II regulär (ergibt zwei normale haploide Zellen = 50 %). Die betroffene Zelle liefert eine Zelle mit zwei Chromatiden des Chromosoms 21 (n+1 = 25 %) und eine Zelle ganz ohne Chromosom 21 (n-1 = 25 %).",
    tags: ["BMS","Biologie","Genetik","Meiose","Nondisjunction","Meiose II","Aneuploidie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Gametenvielfalt durch unabhängige Verteilung",
    difficulty: "Mittel",
    questionText:
      "Ein Organismus mit dem Genotyp AaBbCc bildet Keimzellen. Alle drei Genorte liegen auf unterschiedlichen, nicht-homologen Autosomen. Wie viele genetisch unterschiedliche Gametenkombinationen kann dieses Individuum allein durch die freie, unabhängige Verteilung der Chromosomen in der Meiose I bilden?",
    options: [
          "3",
          "6",
          "8",
          "16",
          "64"
    ],
    correctAnswer: 2,
    explanation:
      "Die Zahl der möglichen Gametenkombinationen bei freier Verteilung berechnet sich nach der Formel 2^n, wobei n die Anzahl der heterozygoten Genpaare auf verschiedenen Chromosomen ist. Bei drei heterozygoten Paaren (Aa, Bb, Cc) gilt: 2^3 = 8 verschiedene Gameten (ABC, ABc, AbC, Abc, aBC, aBc, abC, abc).",
    tags: ["BMS","Biologie","Genetik","Meiose","Gameten","Kombinatorik","Unabhängige Verteilung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Intrachromosomale Rekombination & Kopplungsauflösung",
    difficulty: "Mittel",
    questionText:
      "Auf einem maternalen Chromosom liegen die gekoppelten Allele A und B (Kopplungsphase AB), auf dem väterlichen homologen Chromosom liegen die Allele a und b (ab). Durch welchen meiotischen Prozess können Gameten mit den neuen Allelkombinationen Ab und aB gebildet werden?",
    options: [
          "Durch die DNA-Polymerase-Aktivität in der G2-Phase",
          "Durch die Translation an den freien Ribosomen",
          "Ausschließlich durch zufällige Punktmutationen in der Anaphase II",
          "Durch ein Crossing-over (reziproker Stückaustausch zwischen Nicht-Schwesterchromatiden homologer Chromosomen) während der Prophase I der Meiose",
          "Durch das Zusammenziehen des kontraktilen Rings bei der Cytokinese"
    ],
    correctAnswer: 3,
    explanation:
      "Gekoppelte Gene auf demselben Chromosom können durch intrachromosomale Rekombination (Crossing-over) getrennt werden. Während der Prophase I (Pachytän) paaren sich die homologen Chromosomen; bei einem Bruch und reziproken Austausch entstehen die rekombinanten Chromatiden Ab und aB.",
    tags: ["BMS","Biologie","Genetik","Meiose","Crossing-over","Prophase I","Kopplung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Autosomal-rezessive Stammbaumanalyse",
    difficulty: "Schwer",
    questionText:
      "Zwei phänotypisch gesunde Eltern bekommen ein Kind mit zystischer Fibrose (Mukoviszidose, eine autosomal-rezessiv vererbte Stoffwechselerkrankung). Das Paar erwartet nun ein zweites Kind. Mit welcher Wahrscheinlichkeit wird dieses zweite Kind phänotypisch gesund sein UND gleichzeitig heterozygoter Anlagenträger (Konduktor, Genotyp Aa) sein?",
    options: [
          "25 % (1/4)",
          "50 % (2/4 bzw. 1/2)",
          "75 % (3/4)",
          "66,7 % (2/3)",
          "100 %"
    ],
    correctAnswer: 1,
    explanation:
      "Da das erste Kind erkrankt ist (aa), müssen beide Eltern gesichert heterozygot (Aa) sein. Bei einer Kreuzung Aa × Aa entstehen die Genotypen 1/4 AA (gesund), 2/4 = 1/2 Aa (gesund, Konduktor) und 1/4 aa (erkrankt). Die Wahrscheinlichkeit für ein Kind mit Genotyp Aa beträgt daher exakt 50 % (1/2).",
    tags: ["BMS","Biologie","Genetik","Mukoviszidose","Autosomal-rezessiv","Wahrscheinlichkeit","Mendel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Dihybride Wahrscheinlichkeitsrechnung",
    difficulty: "Mittel",
    questionText:
      "Zwei Individuen mit dem Genotyp AaBb werden miteinander gekreuzt. Beide Gene vererben unabhängig voneinander (liegen auf verschiedenen Chromosomen) und zeigen vollständige Dominanz. Mit welcher Wahrscheinlichkeit besitzt ein Nachkomme den doppelt homozygot rezessiven Genotyp (aabb)?",
    options: [
          "1/16 (ca. 6,25 %)",
          "3/16 (ca. 18,75 %)",
          "9/16 (ca. 56,25 %)",
          "1/4 (25 %)",
          "1/2 (50 %)"
    ],
    correctAnswer: 0,
    explanation:
      "Da beide Gene unabhängig voneinander vererbt werden, können die Wahrscheinlichkeiten multipliziert werden: P(aa) bei Aa × Aa = 1/4; P(bb) bei Bb × Bb = 1/4. Die Gesamtwahrscheinlichkeit für aabb beträgt daher 1/4 × 1/4 = 1/16 (entspricht der '1' im klassischen 9:3:3:1-Verhältnis).",
    tags: ["BMS","Biologie","Genetik","Dihybrid","Wahrscheinlichkeit","Mendel","Multiplikationsregel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Rekonstruktion elterlicher Genotypen",
    difficulty: "Schwer",
    questionText:
      "Bei einer Kreuzung zweier Fruchtfliegen mit langen Flügeln und roten Augen treten unter den zahlreichen Nachkommen phänotypisch 75 % langflügelige Tiere mit roten Augen und 25 % kurzflügelige Tiere mit roten Augen auf. Es traten KEINE Tiere mit anderen Augenfarben auf. (Lange Flügel L dominant über kurze l; Rote Augen R dominant über braune r). Welche Genotypkombination der Eltern erklärt dieses Ergebnis schlüssig?",
    options: [
          "LLRR × llrr",
          "Llrr × Llrr",
          "LlRR × LlRR",
          "llRr × LLRR",
          "LlRr × LlRr"
    ],
    correctAnswer: 2,
    explanation:
      "Flügellänge: 75 % lang zu 25 % kurz entspricht 3:1 $\\rightarrow$ beide Eltern müssen heterozygot Ll sein (Ll × Ll). Augenfarbe: 100 % rot $\\rightarrow$ kein Tier zeigt braune Augen (rr). Dies erfordert, dass mindestens ein Elternteil (oder beide wie bei LlRR × LlRR) reinerbig dominant RR ist. Bei LlRR × LlRR entstehen 3 L-RR : 1 llRR (alle rotäugig).",
    tags: ["BMS","Biologie","Genetik","Dihybrid","Genotypbestimmung","Drosophila","Spaltungsverhältnis"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Phänotypverhältnis bei intermediärem Dihybrid",
    difficulty: "Schwer",
    questionText:
      "Ein Organismus vererbt Merkmal 1 dominant-rezessiv (Genotyp Aa, Allel A dominant über a) und Merkmal 2 intermediär / unvollständig dominant (Genotyp cR cW, rot/weiß ergibt rosa). Beide Gene liegen auf verschiedenen Chromosomen. Wie viele verschiedene Phänotypen treten bei einer Kreuzung zweier doppelt heterozygoter Eltern (Aa cR cW × Aa cR cW) unter den Nachkommen auf?",
    options: [
          "2 Phänotypen",
          "4 Phänotypen",
          "3 Phänotypen",
          "16 Phänotypen",
          "6 Phänotypen (im Verhältnis 3 : 6 : 3 : 1 : 2 : 1)"
    ],
    correctAnswer: 4,
    explanation:
      "Merkmal 1 liefert bei Aa × Aa 2 Phänotypen (dominant und rezessiv im Verhältnis 3:1). Merkmal 2 liefert bei cR cW × cR cW 3 Phänotypen (rot, rosa, weiß im Verhältnis 1:2:1). Kombiniert ergeben sich 2 × 3 = 6 verschiedene Phänotypen mit dem Zahlenverhältnis (3:1) × (1:2:1) = 3:6:3:1:2:1.",
    tags: ["BMS","Biologie","Genetik","Intermediär","Dihybrid","Kombinatorik","Phänotypen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung: Rekombinationsfrequenz berechnen",
    difficulty: "Mittel",
    questionText:
      "In einem genetischen Kreuzungsexperiment werden 500 Nachkommen einer Testkreuzung untersucht. 225 Tiere zeigen die elterliche Merkmalskombination 1 und 225 Tiere die elterliche Kombination 2. 25 Tiere zeigen den Rekombinationstyp A und 25 Tiere den Rekombinationstyp B. Wie groß ist die Rekombinationsfrequenz und welcher genetische Abstand in centiMorgan (cM) liegt zwischen den beiden Genen vor?",
    options: [
          "5 % bzw. 5 cM",
          "10 % bzw. 10 cM",
          "50 % bzw. 50 cM",
          "20 % bzw. 20 cM",
          "1 % bzw. 1 cM"
    ],
    correctAnswer: 1,
    explanation:
      "Anzahl der Rekombinanten = 25 + 25 = 50. Gesamtzahl der Nachkommen = 225 + 225 + 25 + 25 = 500. Rekombinationsfrequenz = 50 / 500 = 0,10 = 10 %. Da 1 % Rekombinationsfrequenz per Definition 1 cM entspricht, beträgt der genetische Abstand 10 cM.",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Rekombinationsfrequenz","centiMorgan","Genabstand"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung: Identifikation gekoppelter Gene aus Testkreuzungsdaten",
    difficulty: "Mittel",
    questionText:
      "Ein Forscher führt eine Testkreuzung (AaBb × aabb) durch. Bei unabhängiger Vererbung nach der 3. Mendelschen Regel würde er ein Spaltungsverhältnis von 1 : 1 : 1 : 1 (je 25 %) erwarten. Tatsächlich zählt er unter den Nachkommen: 44 % AB, 44 % ab, 6 % Ab und 6 % aB. Welche biologische Schlussfolgerung ist KORREKT?",
    options: [
          "Die Allele A und B liegen auf mitochondrialer DNA.",
          "Es liegt eine Trisomie der beteiligten Chromosomen vor.",
          "Die 3. Mendelsche Regel gilt hier uneingeschränkt ohne jegliche Kopplung.",
          "Die Gene A und B liegen gekoppelt auf demselben Chromosom; AB und ab stellen die nicht-rekombinierten Parentaltypen dar, während Ab und aB durch Crossing-over (Rekombinationsfrequenz 12 %) entstanden sind.",
          "Alle Nachkommen sind steril."
    ],
    correctAnswer: 3,
    explanation:
      "Das deutliche Überwiegen der elterlichen Kombinationen (44 % + 44 % = 88 %) gegenüber den neuen Kombinationen (6 % + 6 % = 12 %) beweist, dass die Gene auf demselben Chromosom gekoppelt vererbt werden. Die Rekombinanten (12 %) entstehen durch gelegentliches Crossing-over.",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Testkreuzung","Parentaltypen","Crossing-over"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitochondriale Vererbung: Stammbaum-Transfer",
    difficulty: "Mittel",
    questionText:
      "In einer Familie leidet die Großmutter an einer mitochondrial vererbten Myopathie (mtDNA-Mutation). Sie hat einen Sohn und eine Tochter. Der Sohn heiratet eine gesunde Frau und bekommt zwei Kinder; die Tochter heiratet einen gesunden Mann und bekommt drei Kinder. Welche Personen dieser dritten Generation (Enkelgeneration) erben die mitochondriale Mutation?",
    options: [
          "Alle drei Kinder der Tochter, aber keines der beiden Kinder des Sohnes",
          "Alle fünf Enkelkinder gleichermaßen",
          "Nur die männlichen Kinder des Sohnes",
          "Keines der Enkelkinder, da mitochondriale Merkmale eine Generation überspringen",
          "Ausschließlich die erstgeborene Enkelin"
    ],
    correctAnswer: 0,
    explanation:
      "Mitochondriale DNA wird ausschließlich maternal vererbt. Die Tochter erhält die mutierten Mitochondrien von ihrer Mutter und gibt sie an 100 % ihrer eigenen Kinder (Söhne und Töchter) weiter. Der Sohn gibt sein Zytoplasma/Mitochondrien bei der Befruchtung nicht weiter, weshalb seine Kinder gesund bleiben.",
    tags: ["BMS","Biologie","Genetik","Mitochondrien","Maternale Vererbung","Stammbaum","Myopathie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitochondriale Vererbung: Abgrenzung im Stammbaum",
    difficulty: "Mittel",
    questionText:
      "Welcher Stammbaumbefund schließt einen mitochondrialen Erbgang eines Merkmals eindeutig AUS?",
    options: [
          "Eine betroffene Mutter überträgt das Merkmal auf ihren Sohn.",
          "Eine betroffene Mutter überträgt das Merkmal auf ihre Tochter.",
          "Ein betroffener Vater überträgt das Merkmal an seine Nachkommen, während die Mutter gesund und nicht Trägerin ist (Vater-Kind-Transmission).",
          "In einer Generation sind sowohl Jungen als auch Mädchen betroffen.",
          "Das Merkmal tritt bei mehreren Geschwistern gleichzeitig auf."
    ],
    correctAnswer: 2,
    explanation:
      "Da Spermien keine Mitochondrien in die Zygote einbringen, kann ein Mann mitochondriale Merkmale niemals an seine Nachkommen vererben. Eine Übertragung vom Vater auf seine Kinder schließt eine rein maternale (mitochondriale) Vererbung zwingend aus.",
    tags: ["BMS","Biologie","Genetik","Mitochondrien","Stammbaumanalyse","Ausschlusskriterium"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Chromatinstruktur & Transkription",
    difficulty: "Mittel",
    questionText:
      "Bei einer molekularbiologischen Untersuchung wird festgestellt, dass eine bestimmte Genregion im Zellkern dicht gepackt vorliegt, die Histone deazetyliert sind und die DNA stark methyliert ist. Welcher funktionelle Zustand trifft auf diese Genregion zu?",
    options: [
          "Es handelt sich um Euchromatin mit maximaler Transkriptionsaktivität.",
          "Die Gene dieser Region werden mit extrem hoher Rate in mRNA transkribiert.",
          "Die Region befindet sich im Zustand der Meiose I.",
          "Es handelt sich um Heterochromatin; die dichte Kondensation verhindert den Zugang der RNA-Polymerase, sodass die dortigen Gene transkriptionell inaktiv (stillgelegt) sind.",
          "Die DNA dieser Region wurde vollständig abgebaut."
    ],
    correctAnswer: 3,
    explanation:
      "Histondeazetylierung und DNA-Methylierung sind klassische Kennzeichen von dicht komprimiertem Heterochromatin. Die DNA ist für Transkriptionsfaktoren und RNA-Polymerasen unzugänglich, was zur Stilllegung der Genexpression (Gen-Silencing) führt.",
    tags: ["BMS","Biologie","Genetik","Heterochromatin","DNA-Methylierung","Histone","Genexpression"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Auswirkung einer Promotormutation",
    difficulty: "Schwer",
    questionText:
      "Eine Punktmutation verändert die TATA-Box im Promotorbereich eines Gens so, dass basale Transkriptionsfaktoren nicht mehr daran binden können. Die Exons und Introns des Gens sind vollkommen intakt. Welche Auswirkung hat diese Mutation?",
    options: [
          "Das Gen wird vermehrt transkribiert und führt zu einer Protein-Überproduktion.",
          "Die Translation am Ribosom bricht vorzeitig ab.",
          "Die tRNA kann keine Aminosäuren mehr binden.",
          "Das Protein wird synthetisiert, hat aber eine falsche Aminosäuresequenz.",
          "Die RNA-Polymerase kann die Transkription nicht oder nur stark vermindert initiieren, wodurch kaum oder keine mRNA gebildet wird (starker Expressionsverlust)."
    ],
    correctAnswer: 4,
    explanation:
      "Der Promotor (mit der TATA-Box) ist die essenzielle Erkennungs- und Bindestelle für Transkriptionsfaktoren und die RNA-Polymerase. Ist er mutiert, schlägt die Transkriptionsinitiation fehl: Es wird keine Prä-mRNA synthetisiert, obwohl die codierende Gensequenz selbst unbeschädigt ist.",
    tags: ["BMS","Biologie","Genetik","Promotor","TATA-Box","Transkription","Genregulation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Leserasterverschiebung durch 2-Basen-Deletion",
    difficulty: "Mittel",
    questionText:
      "Im zweiten Exon eines Gens werden durch eine fehlerhafte Reparatur genau zwei benachbarte Basenpaare entfernt (Deletion von 2 bp). Warum führt diese Veränderung meist zu einem vollständigen Funktionsverlust des codierten Proteins?",
    options: [
          "Weil dadurch genau eine Aminosäure fehlt, der Rest des Proteins aber völlig intakt bleibt.",
          "Weil die DNA-Polymerase an dieser Stelle die Replikation des gesamten Chromosoms abbricht.",
          "Weil eine Deletion von 2 Basen das Triplett-Leseraster stromabwärts verschiebt (Frameshift), wodurch ab dieser Stelle völlig falsche Aminosäuren eingebaut werden und meist ein verfrühtes Stoppcodon entsteht.",
          "Weil dadurch alle Introns in Exons umgewandelt werden.",
          "Weil das Gen dadurch sofort auf ein anderes Chromosom springt."
    ],
    correctAnswer: 2,
    explanation:
      "Da der genetische Code aus aufeinanderfolgenden Tripletts (3 Basen) besteht, führt jede Insertion oder Deletion, deren Basenzahl nicht durch 3 teilbar ist (wie 2 bp), zu einer Leserasterverschiebung (Frameshift). Alle nachfolgenden Codons werden falsch abgelesen, und meist entsteht rasch ein vorzeitiges Stoppcodon.",
    tags: ["BMS","Biologie","Genetik","Mutation","Frameshift","Deletion","Leseraster"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Translokation (Philadelphia-Chromosom)",
    difficulty: "Leicht",
    questionText:
      "Bei einem Patienten mit chronischer myeloischer Leukämie (CML) wird zytogenetisch das Philadelphia-Chromosom nachgewiesen. Hierbei ist ein Stück des Chromosoms 9 auf das Chromosom 22 und umgekehrt verlagert worden. Welcher übergeordnete Mutationstyp liegt vor?",
    options: [
          "Eine Genommutation (Aneuploidie)",
          "Eine reziproke Translokation (strukturelle Chromosomenmutation)",
          "Eine Punktmutation durch Basensubstitution",
          "Eine Monosomie des Chromosoms 9",
          "Eine Polyploidie mit 92 Chromosomen"
    ],
    correctAnswer: 1,
    explanation:
      "Die Verlagerung von Chromosomenstücken zwischen zwei nicht-homologen Chromosomen (hier Chromosom 9 und 22) ist eine reziproke Translokation. Sie gehört zu den strukturellen Chromosomenmutationen (Chromosomenaberrationen).",
    tags: ["BMS","Biologie","Genetik","Translokation","Chromosomenmutation","Philadelphia-Chromosom","Leukämie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Ursache von Genommutationen",
    difficulty: "Leicht",
    questionText:
      "Welcher zelluläre Fehlermechanismus während der Meiose ist die Hauptursache für das Auftreten numerischer Chromosomenaberrationen (Aneuploidien wie Trisomie 21 oder Monosomie X)?",
    options: [
          "Ein fehlerhaftes Spleißen der prä-mRNA im Zytoplasma",
          "Das Überkreuzen von Nicht-Schwesterchromatiden beim regulären Crossing-over",
          "Der Ausfall der DNA-Helikase bei der Transkription",
          "Eine Nondisjunction (Fehlverteilung durch Nicht-Trennung) von homologen Chromosomen in Meiose I oder von Schwesterchromatiden in Meiose II",
          "Die vorzeitige Apoptose von Erythrozyten"
    ],
    correctAnswer: 3,
    explanation:
      "Aneuploidien (Veränderungen der Zahl einzelner Chromosomen) entstehen primär durch meiotische Nondisjunction: Werden homologe Chromosomen in Meiose I oder Schwesterchromatiden in Meiose II nicht getrennt, entstehen Keimzellen mit einem überzähligen (n+1) oder fehlenden (n-1) Chromosom.",
    tags: ["BMS","Biologie","Genetik","Nondisjunction","Aneuploidie","Genommutation","Meiose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Geschlechtsvererbung: X-chromosomal-rezessive Stammbaumanalyse",
    difficulty: "Schwer",
    questionText:
      "Eine phänotypisch gesunde Frau, deren Vater an der Bluterkrankheit (Hämophilie A, X-chromosomal-rezessiv) litt, bekommt mit einem gesunden Mann ein Kind. Mit welcher Wahrscheinlichkeit wird ein SOHN dieses Paares an Hämophilie A erkranken?",
    options: [
          "0 %",
          "50 % (1/2)",
          "25 % (1/4)",
          "100 %",
          "75 % (3/4)"
    ],
    correctAnswer: 1,
    explanation:
      "Da der Vater der Frau bluterkrank war (XhY), hat sie von ihm zwingend das mutierte Xh-Chromosom geerbt und ist gesicherte Konduktorin (XHXh). Ein Sohn erhält vom gesunden Vater immer das Y-Chromosom. Ob der Sohn erkrankt, hängt allein vom mütterlichen X-Chromosom ab: Zu 50 % erbt er XH (gesund), zu 50 % Xh (erkrankt).",
    tags: ["BMS","Biologie","Genetik","Hämophilie","X-chromosomal","Konduktorin","Wahrscheinlichkeit"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Geschlechtsvererbung: SRY-Translokation (XX-Mann)",
    difficulty: "Schwer",
    questionText:
      "Bei einer humangenetischen Abklärung eines unfruchtbaren Mannes wird der Karyotyp 46,XX festgestellt. Die molekulargenetische Untersuchung zeigt jedoch, dass auf einem seiner beiden X-Chromosomen das SRY-Gen vorhanden ist. Wie ist dieser Befund mechanistisch zu erklären?",
    options: [
          "Während der Spermatogenese des Vaters kam es zu einem fehlerhaften Crossing-over zwischen den Enden von X- und Y-Chromosom, wodurch das SRY-Gen auf das X-Chromosom transloziert wurde.",
          "Die Mutter hat zwei Y-Chromosomen besessen.",
          "Das Individuum hat alle Autosomen verloren.",
          "Die Eizelle hat spontan ein Y-Chromosom synthetisiert.",
          "Es handelt sich um eine gewöhnliche Trisomie 21."
    ],
    correctAnswer: 0,
    explanation:
      "Beim XX-Mann-Syndrom (de-la-Chapelle-Syndrom) findet in der väterlichen Meiose ein aberrantes Crossing-over außerhalb der pseudoautosomalen Region zwischen X- und Y-Chromosom statt. Dabei wird das SRY-Gen auf das X-Chromosom übertragen. Befruchtet dieses X-Chromosom eine normale Eizelle, entsteht ein phänotypisch männliches Individuum mit 46,XX-Karyotyp.",
    tags: ["BMS","Biologie","Genetik","SRY","Translokation","Geschlechtsdetermination","XX-Mann"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set3-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Krebsentstehung: Mehrschritt-Hypothese der Karzinogenese",
    difficulty: "Mittel",
    questionText:
      "Warum steigt das Risiko für die Entstehung von Karzinomen mit zunehmendem Lebensalter exponentiell an, obwohl sich Körperzellen in jedem Lebensalter mitotisch teilen?",
    options: [
          "Weil ältere Menschen keine DNA-Polymerasen mehr besitzen.",
          "Weil die Meiose im Alter in allen Körperzellen einsetzt.",
          "Weil Viren im Alter grundsätzlich alle Tumorsuppressorgene fressen.",
          "Weil Protoonkogene im Alter spontan zu Ribosomen werden.",
          "Weil die maligne Entartung eine schrittweise Akkumulation mehrerer unabhängiger Mutationen in Protoonkogenen und Tumorsuppressorgenen erfordert (Mehrschritt-Hypothese), was typischerweise viele Zellgenerationen und Jahrzehnte dauert."
    ],
    correctAnswer: 4,
    explanation:
      "Die Entstehung von Krebs ist ein mehrstufiger Prozess (Multi-Hit-Modell / Mehrschritt-Hypothese). Eine einzelne Mutation führt noch nicht zu Krebs. Erst wenn sich über Jahrzehnte hinweg Mutationen in mehreren Kontrollgenen (Aktivierung von Onkogenen, Inaktivierung von Tumorsuppressoren wie p53, Umgehung der Apoptose) in einer Zelllinie anhäufen, entsteht ein bösartiger Tumor.",
    tags: ["BMS","Biologie","Genetik","Onkologie","Karzinogenese","Mehrschritt-Hypothese","Mutationen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
  },
  {
    id: "bio-04-set4-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Genotyp-Identifikation",
    difficulty: "Mittel",
    questionText:
      "Zwei Eltern mit dominantem Phänotyp (Allel A dominant über a) bekommen ein Kind mit dem rezessiven Phänotyp (Genotyp aa). Welche Genotypen MÜSSEN die beiden Elternteile besitzen?",
    options: [
          "AA × aa",
          "AA × Aa",
          "Aa × Aa",
          "aa × aa",
          "AA × AA"
    ],
    correctAnswer: 2,
    explanation:
      "Da das Kind reinerbig rezessiv (aa) ist, muss es von jedem Elternteil je ein Allel a geerbt haben. Da beide Eltern phänotypisch dominant sind, müssen sie jeweils mindestens ein Allel A tragen. Daraus folgt zwingend der heterozygote Genotyp Aa für beide Elternteile.",
    tags: ["BMS","Biologie","Genetik","Genotyp","Heterozygotie","Mendel","Spaltung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Heterozygotie bei vollständiger Dominanz",
    difficulty: "Leicht",
    questionText:
      "Ein Merkmal wird einfach dominant-rezessiv vererbt. Ein Organismus zeigt den dominanten Phänotyp. Welche Aussage über seinen Genotyp ist stets ZUTREFFEND?",
    options: [
          "Er kann ausschließlich homozygot dominant (AA) sein.",
          "Er kann entweder homozygot dominant (AA) oder heterozygot (Aa) sein.",
          "Er muss zwingend heterozygot (Aa) sein.",
          "Er besitzt keinerlei rezessive Allele in seinem Genom.",
          "Er ist hemizygot für das betrachtete Gen."
    ],
    correctAnswer: 1,
    explanation:
      "Bei vollständiger Dominanz maskiert das dominante Allel A das rezessive Allel a vollständig. Sowohl der homozygote Genotyp AA als auch der heterozygote Genotyp Aa bringen daher denselben dominanten Phänotyp hervor.",
    tags: ["BMS","Biologie","Genetik","Dominanz","Genotyp","Phänotyp"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen & Zellzyklus: Zustand nach S-Phase",
    difficulty: "Mittel",
    questionText:
      "Eine normale menschliche Körperzelle hat die S-Phase der Interphase vollständig abgeschlossen und befindet sich in der G2-Phase. Welche Kombination aus Chromosomenzahl und Chromatidenzahl liegt im Zellkern vor?",
    options: [
          "23 Chromosomen und 46 Chromatiden",
          "46 Chromosomen und 46 Chromatiden",
          "92 Chromosomen und 92 Chromatiden",
          "46 Chromosomen und 92 Chromatiden",
          "23 Chromosomen und 23 Chromatiden"
    ],
    correctAnswer: 3,
    explanation:
      "Durch die DNA-Replikation in der S-Phase verdoppelt sich die DNA-Menge (von 2c auf 4c). Jedes der 46 Chromosomen besteht nun aus zwei identischen Schwesterchromatiden, sodass 92 Chromatiden bei weiterhin 46 Chromosomen (2n) vorliegen.",
    tags: ["BMS","Biologie","Genetik","S-Phase","Chromatiden","Chromosomenzahl","Zellzyklus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen: Karyotyp Turner-Syndrom",
    difficulty: "Leicht",
    questionText:
      "Ein Karyogramm einer Patientin zeigt insgesamt 45 Chromosomen. Bei den Geschlechtschromosomen ist lediglich ein einzelnes X-Chromosom nachweisbar (45,X0). Welche Aussage ist KORREKT?",
    options: [
          "Es handelt sich um eine Gonosomen-Monosomie (Turner-Syndrom).",
          "Es handelt sich um eine Autosomen-Trisomie (Down-Syndrom).",
          "Es handelt sich um einen gesunden männlichen Karyotyp.",
          "Es liegt eine Polyploidie des gesamten Genoms vor.",
          "Die Patientin besitzt zwei aktive Barr-Körperchen in jeder Zelle."
    ],
    correctAnswer: 0,
    explanation:
      "Der Karyotyp 45,X0 (auch 45,X) kennzeichnet das Turner-Syndrom. Es ist die einzige beim Menschen lebensfähige Monosomie und betrifft die Geschlechtschromosomen (Gonosomen-Monosomie).",
    tags: ["BMS","Biologie","Genetik","Turner-Syndrom","Monosomie","Aneuploidie","Gonosomen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen: Zentromeranzahl in der Metaphase",
    difficulty: "Mittel",
    questionText:
      "Wie viele funktionelle Zentromere befinden sich in einer normalen menschlichen Körperzelle während der Metaphase der Mitose?",
    options: [
          "23",
          "92",
          "184",
          "Null",
          "46"
    ],
    correctAnswer: 4,
    explanation:
      "In der Metaphase liegen 46 Zwei-Chromatiden-Chromosomen vor. Jedes Chromosom besitzt genau ein Zentromer, an dem die beiden Schwesterchromatiden zusammenhängen und die Kinetochore für die Spindelfasern sitzen. Es sind daher genau 46 Zentromere vorhanden (erst in der Anaphase teilen sich die Zentromere auf 92).",
    tags: ["BMS","Biologie","Genetik","Zentromer","Metaphase","Mitose","Chromosomen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Trennungsvorgang in der Anaphase",
    difficulty: "Leicht",
    questionText:
      "Was wird in der Anaphase der Mitose durch die Verkürzung der Spindelfasern zu den entgegengesetzten Zellpolen transportiert?",
    options: [
          "Ganze homologe Chromosomenpaare",
          "Die beiden getrennten Schwesterchromatiden jedes Chromosoms (nun als eigenständige Ein-Chromatid-Chromosomen)",
          "Ausschließlich die Kernkörperchen (Nukleoli)",
          "Die replizierten Zentrosomen",
          "Die ungeteilten Zwei-Chromatiden-Chromosomen"
    ],
    correctAnswer: 1,
    explanation:
      "In der mitotischen Anaphase teilen sich die Zentromere, wodurch die Schwesterchromatiden getrennt und als eigenständige Ein-Chromatid-Chromosomen zu den entgegengesetzten Polen gezogen werden. (Homologe Chromosomenpaare trennen sich dagegen erst in Meiose I).",
    tags: ["BMS","Biologie","Genetik","Mitose","Anaphase","Schwesterchromatiden"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Folgen einer Fehlverteilung",
    difficulty: "Schwer",
    questionText:
      "In einer somatischen Zelle mit 46 Chromosomen trennen sich während einer Mitose die beiden Schwesterchromatiden eines einzigen Chromosoms nicht (mitotische Nondisjunction). Wie viele Chromosomen besitzen die beiden unmittelbar daraus hervorgehenden Tochterzellen?",
    options: [
          "23 und 23",
          "46 und 46",
          "47 und 45",
          "48 und 44",
          "92 und 0"
    ],
    correctAnswer: 2,
    explanation:
      "Wandern beide Chromatiden eines Chromosoms zu einem Zellpol und keine zum anderen, erhält die eine Tochterzelle 46 + 1 = 47 Chromosomen (Trisomie) und die andere 46 - 1 = 45 Chromosomen (Monosomie).",
    tags: ["BMS","Biologie","Genetik","Mitose","Nondisjunction","Aneuploidie","Chromosomenzahl"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Meiose I Trennung",
    difficulty: "Mittel",
    questionText:
      "Welche Strukturtrennung ist für die Halbierung des Ploidiegrades von diploid (2n) auf haploid (1n) in der Anaphase I der Meiose verantwortlich?",
    options: [
          "Die Trennung der homologen Chromosomen voneinander",
          "Die Spaltung der Zentromere und Trennung der Schwesterchromatiden",
          "Die Auflösung der Kernhülle",
          "Die Replikation der Telomere",
          "Die Trennung der Mitochondrien"
    ],
    correctAnswer: 0,
    explanation:
      "In der Anaphase I werden die gepaarten homologen Chromosomen getrennt und auf die beiden Tochterzellen verteilt. Dies halbiert den Chromosomensatz von 2n auf 1n (Reduktionsteilung). Die Zentromere bleiben intakt; Schwesterchromatiden trennen sich erst in der Meiose II.",
    tags: ["BMS","Biologie","Genetik","Meiose","Meiose I","Reduktionsteilung","Homologe Chromosomen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Schnelle Gametendiskrimination bei Nondisjunction",
    difficulty: "Schwer",
    questionText:
      "Bei der Spermatogenese tritt bei einem Chromosomenpaar eine Nondisjunction in MEIOSE I auf. Die Meiose II verläuft in beiden Tochterzellen fehlerfrei. Welcher Anteil der vier entstehenden Spermien weist eine abnorme Chromosomenzahl auf?",
    options: [
          "0 % (alle normal)",
          "25 %",
          "50 %",
          "100 % (zwei Gameten mit n+1, zwei Gameten mit n-1)",
          "75 %"
    ],
    correctAnswer: 3,
    explanation:
      "Trennt sich ein Homologenpaar in Meiose I nicht, erhält eine Tochterzelle beide Chromosomen (n+1) und die andere keines (n-1). Nach der Meiose II entstehen daraus zwei Gameten mit n+1 und zwei Gameten mit n-1. 100 % der Keimzellen sind aneuploid.",
    tags: ["BMS","Biologie","Genetik","Meiose","Nondisjunction","Aneuploidie","Gameten"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Prophase I Stadien",
    difficulty: "Leicht",
    questionText:
      "In welcher Phase der Meiose erfolgt die Paarung der homologen Chromosomen (Synapsis) und der reziproke Austausch von DNA-Abschnitten (Crossing-over)?",
    options: [
          "Anaphase I",
          "Metaphase II",
          "Telophase I",
          "Anaphase II",
          "Prophase I"
    ],
    correctAnswer: 4,
    explanation:
      "Das Crossing-over findet ausschließlich in der Prophase der 1. meiotischen Teilung (Prophase I, speziell im Pachytän) statt, wenn die homologen Chromosomen synaptisch gepaart als Tetraden vorliegen.",
    tags: ["BMS","Biologie","Genetik","Meiose","Prophase I","Crossing-over","Synapsis"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Autosomal-rezessive Wahrscheinlichkeit",
    difficulty: "Schwer",
    questionText:
      "Beide Eltern sind phänotypisch gesund und haben bereits ein Kind mit einer autosomal-rezessiven Erkrankung. Wie groß ist die Wahrscheinlichkeit, dass ihr nächstes Kind phänotypisch gesund ist UND gleichzeitig heterozygoter Träger (Aa) der Krankheitsanlage ist?",
    options: [
          "25 % (1/4)",
          "50 % (1/2)",
          "75 % (3/4)",
          "66,7 % (2/3)",
          "100 %"
    ],
    correctAnswer: 1,
    explanation:
      "Da bereits ein krankes Kind (aa) geboren wurde, sind beide Eltern gesichert heterozygot (Aa × Aa). Nach Mendel spalten die Genotypen im Verhältnis 1 AA : 2 Aa : 1 aa auf. Die Wahrscheinlichkeit für ein gesundes Kind mit heterozygotem Trägerstatus (Aa) beträgt 2 von 4, also 50 % (1/2).",
    tags: ["BMS","Biologie","Genetik","Mendel","Autosomal-rezessiv","Wahrscheinlichkeit","Heterozygotie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Phänotypverhältnis 9:3:3:1",
    difficulty: "Schwer",
    questionText:
      "Zwei für zwei Merkmale heterozygote Erbsenpflanzen (AaBb × AaBb) werden gekreuzt (beide Gene ungekoppelt, vollständige Dominanz). Welcher Anteil der Nachkommen zeigt phänotypisch das erste Merkmal dominant und das zweite Merkmal rezessiv (Phänotyp A_bb)?",
    options: [
          "3/16 (18,75 %)",
          "9/16 (56,25 %)",
          "1/16 (6,25 %)",
          "1/4 (25 %)",
          "6/16 (37,5 %)"
    ],
    correctAnswer: 0,
    explanation:
      "Beim klassischen 9:3:3:1-Verhältnis eines dihybriden Erbgangs entfallen 9/16 auf dominant/dominant (A_B_), 3/16 auf dominant/rezessiv (A_bb), 3/16 auf rezessiv/dominant (aaB_) und 1/16 auf doppelt rezessiv (aabb).",
    tags: ["BMS","Biologie","Genetik","Dihybrid","Mendel","Spaltungsverhältnis","Punnett-Quadrat"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Intermediäre Vererbung",
    difficulty: "Mittel",
    questionText:
      "Eine rote Blume wird mit einer weißen Blume derselben Art gekreuzt. Alle F1-Nachkommen haben rosa Blüten. Welche Phänotypen und welches Zahlenverhältnis treten bei Selbstbestäubung der rosa F1-Pflanzen in der F2-Generation auf?",
    options: [
          "3 rot : 1 weiß",
          "100 % rosa",
          "1 rot : 1 weiß",
          "1 rot : 2 rosa : 1 weiß",
          "9 rot : 3 rosa : 4 weiß"
    ],
    correctAnswer: 3,
    explanation:
      "Bei intermediärer Vererbung (unvollständiger Dominanz) entspricht das Phänotypverhältnis in der F2-Generation direkt dem Genotypverhältnis: 1 homozygot rot (cR cR) : 2 heterozygot rosa (cR cW) : 1 homozygot weiß (cW cW).",
    tags: ["BMS","Biologie","Genetik","Intermediär","Unvollständige Dominanz","F2-Generation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Dihybride Testkreuzung",
    difficulty: "Mittel",
    questionText:
      "Welche Phänotypenverteilung entsteht bei einer Testkreuzung eines dihybriden Individuums (AaBb) mit einem doppelt homozygot rezessiven Partner (aabb), wenn beide Gene auf verschiedenen Chromosomen liegen?",
    options: [
          "9 : 3 : 3 : 1",
          "3 : 1",
          "1 : 1 : 1 : 1 (zu je 25 %)",
          "1 : 2 : 1",
          "100 % uniform"
    ],
    correctAnswer: 2,
    explanation:
      "Das Individuum AaBb bildet vier Gametensorten zu gleichen Teilen (25 % AB, 25 % Ab, 25 % aB, 25 % ab). Der Partner aabb steuert nur ab bei. Dadurch entstehen die vier Phänotypen im Verhältnis 1 : 1 : 1 : 1.",
    tags: ["BMS","Biologie","Genetik","Testkreuzung","Dihybrid","Mendel","Kombination"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung: Rekombinationsfrequenz im Kopf berechnen",
    difficulty: "Mittel",
    questionText:
      "Bei einer Kopplungsanalyse an 1.000 Nachkommen einer Testkreuzung werden genau 120 rekombinante Nachkommen gezählt. Wie groß ist der genetische Abstand zwischen den beiden Genen auf dem Chromosom?",
    options: [
          "1,2 cM",
          "6 cM",
          "24 cM",
          "50 cM",
          "12 cM"
    ],
    correctAnswer: 4,
    explanation:
      "Rekombinationsfrequenz = 120 / 1.000 = 0,12 = 12 %. Da 1 % Rekombinationshäufigkeit definitionsgemäß 1 centiMorgan (cM) entspricht, beträgt der genetische Abstand genau 12 cM.",
    tags: ["BMS","Biologie","Genetik","centiMorgan","Rekombinationsfrequenz","Genabstand"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung: Kopplung vs. freie Entkopplung",
    difficulty: "Schwer",
    questionText:
      "Eine dihybride Testkreuzung (AaBb × aabb) ergibt 450 Nachkommen mit AB, 450 mit ab, 50 mit Ab und 50 mit aB. Welche Aussage ist KORREKT?",
    options: [
          "Die Gene A und B liegen auf demselben Chromosom mit einem Abstand von 10 cM gekoppelt vor.",
          "Die Gene liegen auf verschiedenen Chromosomen und spalten unabhängig 1:1:1:1 auf.",
          "Es handelt sich um ein mitochondriales Merkmal.",
          "Alle Nachkommen weisen eine Aneuploidie auf.",
          "Die Rekombinationsfrequenz beträgt 50 %."
    ],
    correctAnswer: 0,
    explanation:
      "Die elterlichen Kombinationen überwiegen massiv (450 + 450 = 900 von 1.000 = 90 %). Die Rekombinanten betragen 50 + 50 = 100 von 1.000 = 10 %. Die Gene sind also auf demselben Chromosom gekoppelt mit einem Abstand von 10 cM.",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Testkreuzung","Rekombinanten","Genabstand"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitochondriale Vererbung: Ausschlusskriterium",
    difficulty: "Mittel",
    questionText:
      "Ein Stammbaum zeigt, dass ein betroffener Vater ein erbliches Merkmal an seinen Sohn und seine Tochter weitergibt, während die Mutter gesund ist. Welcher Erbgang kann dadurch EINDEUTIG AUSGESCHLOSSEN werden?",
    options: [
          "Autosomal-dominant",
          "Autosomal-rezessiv",
          "Mitochondrialer Erbgang",
          "X-chromosomal-dominant",
          "Kodominanter Erbgang"
    ],
    correctAnswer: 2,
    explanation:
      "Mitochondriale DNA wird beim Menschen ausschließlich maternal (über die Eizelle) vererbt. Ein Vater kann mitochondriale Mutationen niemals an seine Nachkommen weitergeben. Eine Vater-Kind-Transmission schließt mitochondriale Vererbung sicher aus.",
    tags: ["BMS","Biologie","Genetik","Mitochondrien","Maternale Vererbung","Stammbaum","Ausschluss"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Nukleosom-Komponenten",
    difficulty: "Mittel",
    questionText:
      "Welche Proteine bilden den zylindrischen Kern des Nukleosoms, um den sich der DNA-Doppelstrang im eukaryotischen Chromatin wickelt?",
    options: [
          "DNA-Polymerasen",
          "Aktin und Myosin",
          "Keratine",
          "Ein Oktamer aus basischen Histonproteinen (je zwei Moleküle H2A, H2B, H3 und H4)",
          "Ribosomale Untereinheiten"
    ],
    correctAnswer: 3,
    explanation:
      "Das Nukleosom besteht aus einem Histon-Oktamer (je zwei Exemplare von H2A, H2B, H3 und H4), um das etwa 146 Basenpaare DNA gewickelt sind. Histon H1 fungiert als Verbindungshiston (Linker-Histon) außerhalb des Kerns.",
    tags: ["BMS","Biologie","Genetik","Nukleosom","Histone","Chromatin","DNA-Verpackung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Chromatindiskrimination",
    difficulty: "Mittel",
    questionText:
      "Welche Eigenschaft unterscheidet Euchromatin funktionell von Heterochromatin im Zellkern?",
    options: [
          "Euchromatin enthält keine DNA, sondern nur RNA.",
          "Euchromatin ist aufgelockert verpackt und transkriptionsaktiv, während Heterochromatin stark kondensiert und transkriptionsinaktiv ist.",
          "Euchromatin kommt nur in toten Zellen vor.",
          "Euchromatin kann von der DNA-Polymerase nicht repliziert werden.",
          "Heterochromatin wird während der Mitose vollständig aufgelöst."
    ],
    correctAnswer: 1,
    explanation:
      "Euchromatin ist die weniger dicht gepackte Form des Chromatins und beherbergt aktive Gene, die für Transkriptionsfaktoren zugänglich sind. Heterochromatin ist hochkondensiert und transkriptionell stillgelegt.",
    tags: ["BMS","Biologie","Genetik","Euchromatin","Heterochromatin","Transkription","Chromatin"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Klassifikation",
    difficulty: "Mittel",
    questionText:
      "Das Down-Syndrom (Trisomie 21) und das Turner-Syndrom (Monosomie X) gehören zu welcher übergeordneten Mutationsklasse?",
    options: [
          "Genmutationen (Punktmutationen)",
          "Strukturelle Chromosomenmutationen",
          "Keimbahn-unabhängige somatische Mutationen",
          "Genommutationen (numerische Chromosomenaberrationen / Aneuploidien)",
          "Leserastermutationen"
    ],
    correctAnswer: 3,
    explanation:
      "Mutationen, die die Anzahl ganzer Chromosomen verändern (Aneuploidien wie Trisomien oder Monosomien), werden als Genommutationen (numerische Chromosomenaberrationen) klassifiziert.",
    tags: ["BMS","Biologie","Genetik","Genommutation","Aneuploidie","Trisomie 21","Turner-Syndrom"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Nonsense-Mutation",
    difficulty: "Schwer",
    questionText:
      "Ein punktförmiger Basenaustausch im codierenden Bereich einer mRNA verwandelt das Triplett UAC (codiert für Tyrosin) in das Triplett UAA (Stoppcodon). Um welche Art von Mutation handelt es sich?",
    options: [
          "Stille Mutation (Silent Mutation)",
          "Nonsense-Mutation",
          "Frameshift-Mutation (Leserastermutation)",
          "Inversion",
          "Chromosomentranslokation"
    ],
    correctAnswer: 1,
    explanation:
      "Eine Punktmutation, die ein Aminosäure-codierendes Triplett in eines der drei Stoppcodons (UAA, UAG, UGA) umwandelt, heißt Nonsense-Mutation. Sie bricht die Translation vorzeitig ab und führt zu einem verkürzten Protein.",
    tags: ["BMS","Biologie","Genetik","Punktmutation","Nonsense-Mutation","Stoppcodon","Translation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Frameshift durch Insertion",
    difficulty: "Mittel",
    questionText:
      "Was ist die typische biologische Folge einer Insertion von genau einer einzelnen Base mitten im proteincodierenden Exon eines funktionellen Gens?",
    options: [
          "Keine Auswirkung, da der genetische Code degeneriert ist.",
          "Der Einbau von genau einer zusätzlichen Aminosäure bei sonst unverändertem Protein.",
          "Die sofortige Verdopplung der gesamten DNA im Zellkern.",
          "Die Umwandlung des Gens in ein tRNA-Molekül.",
          "Eine Verschiebung des Triplett-Leserasters (Frameshift), wodurch ab der Mutationsstelle alle nachfolgenden Aminosäuren verändert werden und meist rasch ein vorzeitiges Stoppcodon entsteht."
    ],
    correctAnswer: 4,
    explanation:
      "Da der genetische Code in Dreiergruppen (Tripletts) abgelesen wird, verschiebt das Einfügen von 1 Base (nicht durch 3 teilbar) das gesamte Leseraster stromabwärts (Frameshift). Alle nachfolgenden Codons werden fehlerhaft translatiert.",
    tags: ["BMS","Biologie","Genetik","Frameshift","Insertion","Genmutation","Leseraster"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Geschlechtsvererbung: Hemizygotie des Mannes",
    difficulty: "Mittel",
    questionText:
      "Warum bezeichnet man Männer bezüglich der Gene auf dem X-Chromosom als „hemizygot“?",
    options: [
          "Weil Männer zwei identische X-Chromosomen besitzen.",
          "Weil Männer gar kein X-Chromosom besitzen.",
          "Weil Männer nur ein einziges X-Chromosom besitzen (Karyotyp XY) und ihnen für diesen Chromosomenabschnitt das homologe Gegenstück fehlt.",
          "Weil alle Gene auf dem X-Chromosom des Mannes methyliert und inaktiviert sind.",
          "Weil Männer ihre X-Chromosomen ausschließlich an ihre Söhne vererben."
    ],
    correctAnswer: 2,
    explanation:
      "Männer besitzen den Gonosomensatz XY. Für die meisten Gene auf dem X-Chromosom gibt es kein entsprechendes Allel auf dem Y-Chromosom. Ein Zustand mit nur einem Allel eines Gens statt des üblichen Paares heißt Hemizygotie.",
    tags: ["BMS","Biologie","Genetik","Hemizygotie","Gonosomen","X-Chromosom","Y-Chromosom"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Geschlechtsvererbung: SRY-Gen",
    difficulty: "Mittel",
    questionText:
      "Welche primäre physiologische Entwicklungsentscheidung wird in der frühen Embryonalentwicklung durch das SRY-Gen auf dem Y-Chromosom ausgelöst?",
    options: [
          "Die Differenzierung der indifferenten embryonalen Gonadenanlage zu Hoden",
          "Die Hemmung des Wachstums aller Autosomen",
          "Die Einleitung der Meiose in allen Körperzellen",
          "Die Bildung von Fruchtwasser",
          "Die Festlegung der Blutgruppe"
    ],
    correctAnswer: 0,
    explanation:
      "Das SRY-Gen (Sex-determining Region of Y) codiert für den Hoden-determinierenden Faktor (TDF). Seine Expression lenkt die Entwicklung der bis dahin bipotenten Gonadenanlagen in Richtung Hodenbildung (männlicher Phänotyp).",
    tags: ["BMS","Biologie","Genetik","SRY","Y-Chromosom","Geschlechtsdetermination","Gonaden"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set4-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Krebsentstehung: Gain-of-Function vs. Loss-of-Function",
    difficulty: "Schwer",
    questionText:
      "Eine aktivierende Mutation in einem einzelnen Allel eines Gens führt zu einem dauerhaft überaktiven Teilungssignal und unkontrollierter Zellproliferation (Gain-of-Function). Zu welcher Gengruppe gehörte dieses Gen vor der Mutation?",
    options: [
          "Tumorsuppressorgen",
          "Histon-Gen",
          "Mitochondriales rRNA-Gen",
          "Telomerase-Inhibitor-Gen",
          "Protoonkogen (wird durch aktivierende Mutation zum Onkogen)"
    ],
    correctAnswer: 4,
    explanation:
      "Protoonkogene stimulieren physiologischerweise das Zellwachstum. Werden sie durch eine Gain-of-Function-Mutation überaktiviert, verwandeln sie sich in Onkogene und treiben das Tumorwachstum dominant an. Tumorsuppressorgene dagegen erfordern meist den Funktionsverlust (Loss-of-Function) beider Allele.",
    tags: ["BMS","Biologie","Genetik","Onkologie","Protoonkogen","Onkogen","Gain-of-Function"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
  },
  {
    id: "bio-04-set5-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Bedingte Wahrscheinlichkeit bei autosomal-rezessivem Erbgang",
    difficulty: "Schwer",
    questionText:
      "Zwei phänotypisch unauffällige Eltern haben zwei leibliche Kinder: Kind 1 leidet an Albinismus (vollständig penetrantes autosomal-rezessives Merkmal, Genotyp aa). Kind 2 ist phänotypisch normal pigmentiert. Mit welcher Wahrscheinlichkeit ist dieses zweite, phänotypisch gesunde Kind ein heterozygoter Anlagenträger (Genotyp Aa)?",
    options: [
          "25 % (1/4)",
          "66,7 % (2/3)",
          "50 % (1/2)",
          "75 % (3/4)",
          "100 %"
    ],
    correctAnswer: 1,
    explanation:
      "Da Kind 1 erkrankt ist (aa), müssen beide Eltern gesichert heterozygot sein (Aa × Aa). Unter den Nachkommen entstehen die Genotypen 1 AA : 2 Aa : 1 aa. Da Kind 2 bereits phänotypisch gesund ist, scheidet der Genotyp aa sicher aus. Es verbleiben 3 gleich wahrscheinliche Genotypen (1 AA und 2 Aa). Die bedingte Wahrscheinlichkeit für Aa beträgt daher 2 von 3, also 2/3 (ca. 66,7 %).",
    tags: ["BMS","Biologie","Genetik","Bedingte Wahrscheinlichkeit","Autosomal-rezessiv","Heterozygotie","Albinismus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genetische Grundlagen: Dihybride Genotyp-Inferenz",
    difficulty: "Mittel",
    questionText:
      "Ein Züchter kreuzt ein Tier mit unbekanntem Genotyp, das für zwei Merkmale den dominanten Phänotyp zeigt (schwarzes Fell B dominant über braun b; kurze Ohren A dominant über lange a), mit einem doppelt homozygot rezessiven Tier (braunes Fell, lange Ohren: aabb). Die Nachkommen spalten sich zu 50 % in schwarz/kurzohrig und zu 50 % in braun/kurzohrig auf. Keines der Jungtiere hat lange Ohren. Welche Genotypkombination lag beim dominanten Elterntier vor?",
    options: [
          "AABB",
          "AaBb",
          "AAbb",
          "AABb",
          "aaBb"
    ],
    correctAnswer: 3,
    explanation:
      "Fellfarbe: schwarz : braun spaltet 1:1 auf $\\rightarrow$ Elterntier muss heterozygot Bb sein (Bb × bb $\\rightarrow$ 50 % Bb, 50 % bb). Ohrlänge: 100 % kurzohrig (kein langohriges Tier aa) $\\rightarrow$ Elterntier muss homozygot dominant AA sein (AA × aa $\\rightarrow$ 100 % Aa). Der Gesamtgenotyp lautet daher AABb.",
    tags: ["BMS","Biologie","Genetik","Dihybrid","Testkreuzung","Genotyp-Inferenz","Dominanz"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen & Zellzyklus: Dynamik von Ploidie und DNA-Menge",
    difficulty: "Mittel",
    questionText:
      "Welche Kombination beschreibt den Zustand (Chromosomenzahl, Chromatidenzahl, Ploidie und DNA-Gehalt) in jedem der beiden neu entstehenden Zellkerne unmittelbar nach Abschluss der mitotischen Telophase einer menschlichen Körperzelle?",
    options: [
          "46 Ein-Chromatid-Chromosomen, 46 Chromatiden, diploid (2n), DNA-Gehalt 2c",
          "23 Zwei-Chromatiden-Chromosomen, 46 Chromatiden, haploid (1n), DNA-Gehalt 2c",
          "46 Zwei-Chromatiden-Chromosomen, 92 Chromatiden, diploid (2n), DNA-Gehalt 4c",
          "92 Ein-Chromatid-Chromosomen, 92 Chromatiden, tetraploid (4n), DNA-Gehalt 4c",
          "23 Ein-Chromatid-Chromosomen, 23 Chromatiden, haploid (1n), DNA-Gehalt 1c"
    ],
    correctAnswer: 0,
    explanation:
      "Nach der mitotischen Anaphase wurden die 92 Schwesterchromatiden symmetrisch getrennt. In der Telophase dekondensieren die Chromosomen und neue Kernhüllen bilden sich. Jeder Tochterkern enthält exakt 46 Ein-Chromatid-Chromosomen (46 DNA-Moleküle), ist vollkommen diploid (2n) und besitzt den Ausgangs-DNA-Gehalt von 2c.",
    tags: ["BMS","Biologie","Genetik","Mitose","Telophase","Ploidie","DNA-Gehalt","Chromatiden"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Chromosomen & Zellzyklus: Karyotyp nach meiotischer Fehlverteilung",
    difficulty: "Leicht",
    questionText:
      "Eine menschliche Eizelle, die infolge einer meiotischen Nondisjunction ein überzähliges Chromosom 21 enthält (Karyotyp 24,X,+21), wird von einem normalen Spermium mit Y-Chromosom (23,Y) befruchtet. Welcher Karyotyp und welcher Phänotyp liegen bei der resultierenden Zygote vor?",
    options: [
          "46,XY (gesunder Knabe)",
          "47,XX,+21 (weibliches Individuum mit Down-Syndrom)",
          "47,XY,+21 (männliches Individuum mit freier Trisomie 21 / Down-Syndrom)",
          "45,X0 (weibliches Individuum mit Turner-Syndrom)",
          "48,XXYY (männliches Individuum mit doppelter Aneuploidie)"
    ],
    correctAnswer: 2,
    explanation:
      "Die Addition der Chromosomen ergibt: 24 (maternal) + 23 (paternal) = 47 Chromosomen. Da die Eizelle ein X-Chromosom und das Spermium ein Y-Chromosom beisteuert, liegt das Gonosomenpaar XY vor. Zusammen mit dem dreifachen Chromosom 21 lautet die Formel 47,XY,+21 (männlicher Fetus mit Down-Syndrom).",
    tags: ["BMS","Biologie","Genetik","Down-Syndrom","Trisomie 21","Karyotyp","Befruchtung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Timing mitotischer Nondisjunction und Mosaikanteil",
    difficulty: "Schwer",
    questionText:
      "Ein früher Embryo entsteht aus einer normalen Zygote (46,XX). Welche zelluläre Zusammensetzung ist zu erwarten, wenn eine mitotische Nondisjunction bereits bei der ALLERERSTEN Furchungsteilung (Übergang vom 1-Zell- zum 2-Zell-Stadium) auftritt, im Vergleich zu einem identischen Fehler, der erst im 16-Zell-Stadium stattfindet?",
    options: [
          "Im 1-Zell-Stadium bleibt der Embryo normal 46,XX; im 16-Zell-Stadium stirbt er sofort ab.",
          "In beiden Fällen entsteht exakt dasselbe klinische Bild ohne jeglichen Unterschied im Mosaikanteil.",
          "Eine Fehlverteilung bei der 1. Teilung führt immer zur sofortigen Entstehung eineiiger Zwillinge.",
          "Im 16-Zell-Stadium sind grundsätzlich alle Organe gleichmäßig betroffen.",
          "Tritt der Fehler bei der 1. Teilung auf, gehen theoretisch alle Folgezellen aus den beiden primär mutierten Tochterzelllinien hervor (etwa 47,XX und 45,XX, ohne ursprüngliche 46,XX-Linie); tritt der Fehler erst im 16-Zell-Stadium auf, verbleibt ein überwiegender Anteil normaler Zellen (46,XX), sodass ein Mosaik mit dominierender Wildtyplinie resultiert."
    ],
    correctAnswer: 4,
    explanation:
      "Je früher in der Embryogenese eine mitotische Nondisjunction auftritt, desto größer ist der Anteil betroffener Zellen im Gesamtorganismus: Bei der 1. Teilung entstehen nur zwei Tochterzellen, die den gesamten Embryo aufbauen (theoretisch beide Linien mutiert). Im 16-Zell-Stadium betrifft der Fehler primär nur 1/16 der Zellmasse, während die restlichen 15/16 normalen 46,XX-Zellen das Gewebe dominieren.",
    tags: ["BMS","Biologie","Genetik","Mitose","Mosaizismus","Nondisjunction","Furchung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitose: Chromosomenfehlverteilung & Aneuploidie",
    difficulty: "Mittel",
    questionText:
      "Was ist die typische zelluläre Konsequenz, wenn während der Mitose einzelne Chromosomen nicht ordnungsgemäß an den Spindelapparat gebunden oder in der Anaphase ungleich auf die beiden entstehenden Tochterzellen verteilt werden?",
    options: [
          "Beide Tochterzellen verdoppeln sofort ihren gesamten Chromosomensatz auf 92 Chromosomen.",
          "Es entstehen numerisch ungleiche, aneuploide Tochterzellen (eine Zelle mit überzähligem, die andere mit fehlendem Chromosom).",
          "Die Zelle führt unverzüglich eine meiotische Rekombination durch.",
          "Alle Gene der Tochterzellen werden unmittelbar in mitochondriale DNA umgewandelt.",
          "Es entstehen immer zwei genetisch vollkommen fehlerfreie Tochterzellen."
    ],
    correctAnswer: 1,
    explanation:
      "Werden Chromatiden in der mitotischen Anaphase ungleich verteilt (z. B. durch Nondisjunction oder Anaphase-Lag), entstehen Tochterzellen mit fehlerhafter Chromosomenzahl (Aneuploidie, z. B. 47 bzw. 45 Chromosomen).",
    tags: ["BMS","Biologie","Genetik","Mitose","Fehlverteilung","Aneuploidie","Zellzyklus"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Nondisjunction I und Oogenese-Produkte",
    difficulty: "Schwer",
    questionText:
      "Bei der meiotischen Entstehung einer weiblichen Keimzelle kommt es beim Chromosom 18 zu einer Nondisjunction in MEIOSE I. Die Meiose II verläuft mechanisch fehlerfrei. Welche Chromosomenverteilungen bezüglich Chromosom 18 sind unter den vier meiotischen Produkten (der künftigen Eizelle und den Polkörperchen) zu erwarten?",
    options: [
          "50 % der Produkte besitzen ein überzähliges Chromosom 18 (n+1=24), und 50 % fehlt dieses Chromosom (n-1=22).",
          "Alle vier Produkte besitzen den normalen Chromosomensatz von 23 Chromosomen.",
          "25 % der Produkte besitzen n+1, 50 % sind normal (n) und 25 % besitzen n-1.",
          "Alle vier Produkte weisen eine vollständige Triploidie auf.",
          "75 % der Produkte sind diploid und 25 % haploid."
    ],
    correctAnswer: 0,
    explanation:
      "Bei einer Nondisjunction in Meiose I werden die homologen Chromosomen 18 nicht getrennt. Eine Tochterzelle erhält beide Chromosomen (n+1), die andere keines (n-1). Nach normaler Meiose II teilen sich diese Fehler auf alle vier meiotischen Produkte auf: Zwei Produkte (z. B. Eizelle oder Polkörperchen) haben n+1=24, die beiden anderen n-1=22.",
    tags: ["BMS","Biologie","Genetik","Meiose","Nondisjunction","Trisomie 18","Oogenese","Polkörperchen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Crossing-over & Gametenfrequenz bei Genkopplung",
    difficulty: "Schwer",
    questionText:
      "Eine Zelle besitzt den Genotyp AB/ab (Gene A und B liegen gekoppelt auf demselben Chromosom). Bei 20 % aller meiotischen Teilungen findet zwischen den beiden Genorten genau ein Crossing-over statt, während bei 80 % kein Crossing-over auftritt. Mit welcher Gesamthäufigkeit treten rekombinante Gameten (Ab und aB) unter allen gebildeten Keimzellen auf?",
    options: [
          "20 %",
          "40 %",
          "10 % (je 5 % Ab und 5 % aB)",
          "50 %",
          "2 %"
    ],
    correctAnswer: 2,
    explanation:
      "In den 80 % der Meiosen ohne Crossing-over entstehen zu 100 % parentale Gameten (AB und ab). In den 20 % der Meiosen mit Crossing-over werden von den 4 Chromatiden einer Tetrade genau 2 rekombiniert (Ab und aB) und 2 bleiben parental (AB und ab) $\\rightarrow$ innerhalb dieser Meiosen sind 50 % rekombinant. Die Gesamthäufigkeit rekombinanter Gameten beträgt daher: 20 % × 50 % = 10 % (entspricht einer Rekombinationsfrequenz von 10 % bzw. 10 cM).",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Crossing-over","Rekombinationsfrequenz","Meiose"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Meiose: Quellen der genetischen Variabilität",
    difficulty: "Mittel",
    questionText:
      "Welche zwei voneinander unabhängigen meiotischen Mechanismen sind primär dafür verantwortlich, dass leibliche Geschwister (abgesehen von eineiigen Zwillingen) trotz derselben Eltern genetisch vollkommen einzigartig sind?",
    options: [
          "Die DNA-Replikation in der G1-Phase und die Zytokinese",
          "Das Herausschneiden von Exons und der Abbau von Telomeren",
          "Die Translation an den Ribosomen und die Apoptose",
          "Die intrachromosomale Rekombination durch Crossing-over in der Prophase I sowie die interchromosomale Rekombination durch die zufällige Verteilung väterlicher und mütterlicher homologer Chromosomen in der Anaphase I",
          "Die kontinuierliche Aufnahme bakterieller Plasmide in die Keimbahn"
    ],
    correctAnswer: 3,
    explanation:
      "Die enorme genetische Vielfalt beruht auf zwei Säulen der Meiose: (1) Intrachromosomale Rekombination: Stückaustausch zwischen Nicht-Schwesterchromatiden in der Prophase I (Crossing-over). (2) Interchromosomale Rekombination: Zufällige Ausrichtung und Verteilung der 23 homologen Chromosomenpaare in der Anaphase I, was bereits 2^23 = ca. 8,4 Millionen verschiedene Chromosomenkombinationen pro Elternteil ermöglicht.",
    tags: ["BMS","Biologie","Genetik","Meiose","Variabilität","Rekombination","Crossing-over"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Stammbaum & bedingte Wahrscheinlichkeit",
    difficulty: "Schwer",
    questionText:
      "Eine phänotypisch gesunde Frau hat einen Bruder, der an Phenylketonurie (PKU, autosomal-rezessiv vererbte Stoffwechselstörung) leidet. Beide Eltern der Frau sind gesund. Die Frau heiratet einen Mann, von dem sicher bekannt ist, dass er heterozygoter Träger (Genotyp Aa) für PKU ist. Mit welcher Wahrscheinlichkeit wird das erste gemeinsame Kind dieses Paares an PKU erkranken?",
    options: [
          "50 % (1/2)",
          "25 % (1/4)",
          "33,3 % (1/3)",
          "8,3 % (1/12)",
          "16,7 % (1/6)"
    ],
    correctAnswer: 4,
    explanation:
      "Schritt 1: Da der Bruder erkrankt ist (aa), sind die gesunden Eltern gesichert heterozygot (Aa × Aa). Schritt 2: Die gesunde Frau ist zu 2/3 heterozygot (Aa). Schritt 3: Der Partner ist sicher Aa (Wahrscheinlichkeit 1). Schritt 4: Sind beide Aa, erkrankt ein Kind (aa) mit der Wahrscheinlichkeit 1/4. Gesamtwahrscheinlichkeit = P(Mutter Aa) × P(Vater Aa) × P(Kind aa) = 2/3 × 1 × 1/4 = 2/12 = 1/6 (ca. 16,7 %).",
    tags: ["BMS","Biologie","Genetik","Mendel","Stammbaum","Bedingte Wahrscheinlichkeit","PKU"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Dihybride Kreuzung mit intermediärem Phänotyp",
    difficulty: "Schwer",
    questionText:
      "Zwei Organismen mit dem Genotyp AaBb werden gekreuzt (beide Gene liegen auf unterschiedlichen Chromosomen). Gen A vererbt dominant-rezessiv (A schwarz dominant über a weiß). Gen B vererbt intermediär (BB groß, Bb mittelgroß, bb klein). Welcher Bruchteil der Nachkommen zeigt phänotypisch die Merkmalskombination „schwarz und mittelgroß“?",
    options: [
          "6/16 (3/8 bzw. 37,5 %)",
          "3/16 (18,75 %)",
          "9/16 (56,25 %)",
          "1/16 (6,25 %)",
          "1/4 (25 %)"
    ],
    correctAnswer: 0,
    explanation:
      "Merkmal 1 (Fellfarbe): Kreuzung Aa × Aa ergibt mit einer Wahrscheinlichkeit von 3/4 den dominanten Phänotyp schwarz (1 AA + 2 Aa). Merkmal 2 (Größe): Kreuzung Bb × Bb ergibt mit einer Wahrscheinlichkeit von 2/4 = 1/2 den heterozygoten Phänotyp mittelgroß (Bb). Da beide Gene unabhängig spalten, gilt: 3/4 × 1/2 = 3/8 = 6/16 (37,5 %).",
    tags: ["BMS","Biologie","Genetik","Dihybrid","Intermediär","Wahrscheinlichkeit","Mendel"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: AB0-Blutgruppenvererbung",
    difficulty: "Mittel",
    questionText:
      "Eine Mutter mit Blutgruppe A bringt ein Kind mit Blutgruppe 0 zur Welt. Der Vater des Kindes hat Blutgruppe B. Welche Genotypen müssen die beiden Elternteile besitzen und mit welcher Wahrscheinlichkeit wird ein weiteres Kind dieses Paares die Blutgruppe AB haben?",
    options: [
          "Mutter AA, Vater BB; Wahrscheinlichkeit für AB beträgt 100 %",
          "Mutter A0, Vater B0; Wahrscheinlichkeit für AB beträgt 50 %",
          "Mutter A0, Vater B0; Wahrscheinlichkeit für AB beträgt 25 % (1/4)",
          "Mutter AA, Vater B0; Wahrscheinlichkeit für AB beträgt 0 %",
          "Mutter 00, Vater AB; Wahrscheinlichkeit für AB beträgt 25 %"
    ],
    correctAnswer: 2,
    explanation:
      "Da das Kind Blutgruppe 0 (Genotyp 00) hat, muss es von jedem Elternteil das rezessive Allel 0 geerbt haben. Die Mutter (Blutgruppe A) hat somit den Genotyp A0, der Vater (Blutgruppe B) den Genotyp B0. Kreuzung A0 × B0 ergibt zu gleichen Teilen (je 25 %): AB, A0 (Blutgruppe A), B0 (Blutgruppe B) und 00 (Blutgruppe 0). Die Wahrscheinlichkeit für Blutgruppe AB beträgt 25 %.",
    tags: ["BMS","Biologie","Genetik","AB0-System","Blutgruppen","Kodominanz","Genotyp"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln: Kopplungsphase bestimmen",
    difficulty: "Mittel",
    questionText:
      "Eine Testkreuzung eines dihybriden Tieres mit einem homozygot rezessiven Tester (aabb) ergibt folgende Nachkommenzahlen: 45 % AaBb, 45 % aabb, 5 % Aabb und 5 % aaBb. Welche Allelanordnung (Kopplungsphase) lag auf den homologen Chromosomen des dihybriden Elterntiers vor?",
    options: [
          "Trans-Kopplung: Ab auf einem Chromosom, aB auf dem homologen Partner",
          "Cis-Kopplung: Die dominanten Allele A und B lagen gemeinsam auf einem Chromosom (Kopplungsphase AB/ab)",
          "Beide Gene liegen auf unterschiedlichen Chromosomen völlig ungebunden vor",
          "Die Allele liegen ausschließlich auf der mitochondrialen DNA",
          "Das Elterntier war homozygot für alle Genorte"
    ],
    correctAnswer: 1,
    explanation:
      "Die beiden häufigsten Nachkommenklassen (je 45 %) repräsentieren die nicht-rekombinierten Parentaltypen (AB und ab). Dies beweist, dass die dominanten Allele A und B zusammen auf einem Chromosom lagen und die rezessiven Allele a und b auf dem homologen Chromosom (Cis-Konfiguration: AB/ab). Die Klassen Ab und aB (je 5 %) entstanden durch Crossing-over.",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Kopplungsphase","Cis-Trans","Parentaltypen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung & Rekombination: Genkartierung und Genreihenfolge",
    difficulty: "Mittel",
    questionText:
      "Drei Gene (A, B und C) liegen auf demselben Chromosom einer Taufliege. Durch Kreuzungsexperimente werden folgende Rekombinationsfrequenzen ermittelt: Abstand zwischen A und B = 8 cM, Abstand zwischen B und C = 5 cM, Abstand zwischen A und C = 13 cM. Welche lineare Genreihenfolge liegt auf dem Chromosom vor?",
    options: [
          "B – A – C",
          "A – C – B",
          "C – A – B",
          "A – B – C (bzw. C – B – A)",
          "Die Gene können unmöglich auf demselben Chromosom liegen"
    ],
    correctAnswer: 3,
    explanation:
      "Genabstände auf einer Chromosomenkarte verhalten sich additiv. Da der größte Abstand zwischen A und C genau 13 cM beträgt und der Summe der Teilabstände entspricht (A-B = 8 cM + B-C = 5 cM = 13 cM), muss Gen B zwingend in der Mitte zwischen A und C liegen. Die Reihenfolge lautet A – B – C.",
    tags: ["BMS","Biologie","Genetik","Genkartierung","centiMorgan","Genreihenfolge","Drosophila"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung & Rekombination: Maximale Rekombinationsfrequenz",
    difficulty: "Schwer",
    questionText:
      "Zwei Gene befinden sich auf demselben Chromosom und weisen einen genetischen Kartenabstand von 120 cM auf. Welcher maximale Prozentsatz an rekombinanten Nachkommen kann bei einer experimentellen Testkreuzung dieser beiden Genorte beobachtet werden und warum?",
    options: [
          "100 %, da bei jedem Crossing-over alle Allele vertauscht werden",
          "0 %, weil Gene auf demselben Chromosom grundsätzlich niemals rekombiniert werden",
          "120 %, proportional zum gemessenen Abstand in cM",
          "75 %, gemäß dem Mendelschen Spaltungsverhältnis 3:1",
          "Maximal 50 %, da bei multiplen Crossover-Ereignissen im Durchschnitt die Hälfte der resultierenden Chromatiden rekombinant und die Hälfte parental ist (sie verhalten sich phänotypisch wie ungekoppelte Gene)."
    ],
    correctAnswer: 4,
    explanation:
      "Obwohl der additive Kartenabstand auf einer Genkarte 50 cM weit überschreiten kann (hier 120 cM), nähert sich die experimentell messbare Rekombinationsfrequenz bei Testkreuzungen asymptotisch einem Maximum von 50 % an. Bei weit entfernten Genen tritt praktisch in jeder Meiose mindestens ein Crossover auf, wodurch die Allele statistisch frei entkoppelt werden.",
    tags: ["BMS","Biologie","Genetik","Genkopplung","Rekombinationsmaximum","Entkopplung","Meiose","centiMorgan"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Genkopplung & Rekombination: Quantitative Berechnung aus Nachkommen",
    difficulty: "Leicht",
    questionText:
      "Bei einer dihybriden Testkreuzung werden folgende Nachkommenzahlen gezählt: 410 Tiere mit Phänotyp AB, 430 Tiere mit ab, 80 Tiere mit Ab und 80 Tiere mit aB. Wie groß ist die Rekombinationsfrequenz und welcher genetische Abstand in centiMorgan (cM) resultiert daraus?",
    options: [
          "16 % bzw. 16 cM",
          "8 % bzw. 8 cM",
          "32 % bzw. 32 cM",
          "1,6 % bzw. 1,6 cM",
          "50 % bzw. 50 cM"
    ],
    correctAnswer: 0,
    explanation:
      "Gesamtzahl der Nachkommen: 410 + 430 + 80 + 80 = 1.000. Rekombinante Nachkommen: 80 + 80 = 160. Rekombinationsfrequenz: 160 / 1.000 = 0,16 = 16 %. Ein Rekombinationswert von 1 % entspricht definitionsgemäß 1 cM, der Abstand beträgt somit genau 16 cM.",
    tags: ["BMS","Biologie","Genetik","Rekombinationsfrequenz","centiMorgan","Genkopplung","Testkreuzung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitochondriale Vererbung: Stammbaumsynthese & Heteroplasmie",
    difficulty: "Mittel",
    questionText:
      "Eine Frau leidet an einer mitochondrialen Enzephalomyopathie (Mutation der mtDNA). Sie bekommt drei Kinder: Kind 1 zeigt schwere neurologische Symptome, Kind 2 hat nur milde Muskelschwäche und Kind 3 ist klinisch vollkommen symptomfrei. Welches biologische Phänomen liefert die schlüssige Erklärung für diese unterschiedliche phänotypische Ausprägung bei mitochondrialer Vererbung?",
    options: [
          "Die Mendelschen Regeln der Aufspaltung im Verhältnis 3:1",
          "Ein fehlerhaftes Crossing-over zwischen den X- und Y-Chromosomen",
          "Die Inaktivierung eines X-Chromosoms (Lyonisierung)",
          "Heteroplasmie (das variable Mengenverhältnis von mutierter zu gesunder mtDNA in den einzelnen Eizellen und Geweben durch ungleiche Verteilung der Mitochondrien bei der Zellteilung)",
          "Eine somatische Rückmutation aller Mitochondrien im Kindesalter"
    ],
    correctAnswer: 3,
    explanation:
      "In einer Zelle koexistieren oft normale und mutierte Mitochondrien (Heteroplasmie). Bei der Oogenese und den embryonalen Zellteilungen werden die Mitochondrien stochastisch auf die Tochterzellen verteilt (mitochondrialer Flaschenhals). Übersteigt der Anteil mutierter mtDNA einen gewissen Schwellenwert (Threshold-Effekt), bricht die ATP-Synthese zusammen und Symptome treten auf.",
    tags: ["BMS","Biologie","Genetik","Mitochondrien","Heteroplasmie","Schwellenwerteffekt","mtDNA"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mitochondriale Vererbung: Unterscheidung von X-chromosomaler Vererbung",
    difficulty: "Schwer",
    questionText:
      "Ein erbliches Merkmal wird in einer Familie über Generationen weitergegeben. Ein betroffener Mann bekommt mit einer gesunden Partnerin vier Kinder: zwei Söhne und zwei Töchter. KEINES der vier Kinder weist das Merkmal auf. Welcher Erbgang wird durch diesen Befund EINDEUTIG WIDERLEGT, während er mit einer mitochondrialen Vererbung vollständig vereinbar ist?",
    options: [
          "Autosomal-rezessiver Erbgang",
          "Y-chromosomaler Erbgang",
          "X-chromosomal-dominanter Erbgang",
          "Autosomal-kodominanter Erbgang",
          "Polygener Erbgang"
    ],
    correctAnswer: 2,
    explanation:
      "Bei einem X-chromosomal-dominanten Erbgang vererbt ein betroffener Vater (XDY) sein mutiertes X-Chromosom an ausnahmslos alle seine Töchter (100 % der Töchter müssen erkranken). Dass beide Töchter gesund sind, schließt X-chromosomal dominant zwingend aus. Bei mitochondrialer Vererbung gibt der Vater seine mtDNA an keines seiner Kinder weiter, sodass alle 4 Kinder gesund bleiben.",
    tags: ["BMS","Biologie","Genetik","Stammbaumanalyse","Mitochondrien","X-chromosomal-dominant","Ausschluss"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Chromatinstruktur & Transkriptionsaktivität",
    difficulty: "Mittel",
    questionText:
      "Ein Bereich des eukaryotischen Chromatins liegt im Zellkern stark kondensiert als Heterochromatin vor, sodass Promotoren für regulatorische Proteine und Transkriptionsfaktoren sterisch schlecht zugänglich sind. Welche funktionelle Konsequenz ist für die in diesem Bereich liegenden Gene am wahrscheinlichsten?",
    options: [
          "Eine massive Überproduktion der von diesen Genen codierten Proteine",
          "Eine stark verminderte oder vollständig unterdrückte Transkription (Gen-Silencing)",
          "Die sofortige Umwandlung der DNA in freie Aminosäuren",
          "Eine Verdopplung der Chromosomenzahl in der betroffenen Zelle",
          "Eine spontane Deletion aller benachbarten Autosomen"
    ],
    correctAnswer: 1,
    explanation:
      "Dicht gepacktes Heterochromatin verhindert den physischen Zugang der RNA-Polymerase und basaler Transkriptionsfaktoren zur Promotorregion. Die Transkription der dortigen Gene ist daher stark gedrosselt oder vollständig stillgelegt (Gen-Silencing).",
    tags: ["BMS","Biologie","Genetik","Heterochromatin","Transkription","Genexpression","Promotor"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Eukaryotisches Genom: Spleißstellenmutation & Intronretention",
    difficulty: "Mittel",
    questionText:
      "Eine Punktmutation zerstört die konservierte 5'-Spleißstelle (Donor-Splice-Site) am Beginn von Intron 1 eines Gens. Die Exons sind intakt. Welche molekulare Konsequenz hat dieser Fehler bei der Prozessierung der mRNA und der Translation des Proteins?",
    options: [
          "Das Gen wird überhaupt nicht mehr durch die RNA-Polymerase transkribiert.",
          "Die fertige mRNA enthält ausschließlich Introns und keine Exons mehr.",
          "Die Translation verläuft fehlerfrei, da Introns immer identische Proteine codieren.",
          "Das Spleißosom wandelt die mRNA sofort in doppelsträngige DNA um.",
          "Intron 1 wird nicht herausgeschnitten und verbleibt in der reifen mRNA (Intron-Retention), was meist zu einer Verschiebung des Leserasters und einem vorzeitigen Translationsabbruch führt."
    ],
    correctAnswer: 4,
    explanation:
      "Kann das Spleißosom die mutierte Spleißstelle nicht erkennen, wird das Intron nicht herausgespleißt, sondern verbleibt in der reifen mRNA (Intron-Retention). Da Introns selten ein Vielfaches von 3 Basen lang sind und oft Stoppcodons enthalten, resultiert daraus eine Verschiebung des Leserasters oder ein vorzeitiges Stoppcodon mit Proteinverkürzung.",
    tags: ["BMS","Biologie","Genetik","Spleißen","Spleißstellenmutation","Intron","Translation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Vergleich von Punktmutationstypen",
    difficulty: "Mittel",
    questionText:
      "Drei verschiedene Punktmutationen im codierenden Bereich eines Gens werden verglichen: Mutation 1 (UAU $\\rightarrow$ UAC, beide codieren für Tyrosin), Mutation 2 (UAU $\\rightarrow$ UAA, UAA ist ein Stoppcodon), Mutation 3 (Insertion von genau 1 Base Cytosin). Welche funktionellen Auswirkungen auf das Polypeptid treten jeweils auf?",
    options: [
          "Mutation 1 führt zum Kettenabbruch; Mutation 2 ist stumm; Mutation 3 verändert eine einzige Aminosäure.",
          "Mutation 1 verdoppelt das Protein; Mutation 2 ist eine Missense-Mutation; Mutation 3 repariert das Gen.",
          "Alle drei Mutationen führen ausnahmslos zum selben Phänotyp.",
          "Mutation 1 ist eine stille Mutation (gleiche Aminosäure); Mutation 2 ist eine Nonsense-Mutation (vorzeitiger Translationsabbruch); Mutation 3 ist eine Frameshift-Mutation (vollständige Verschiebung des Leserasters stromabwärts).",
          "Mutation 1 und 2 sind Genommutationen; Mutation 3 ist eine Chromosomenmutation."
    ],
    correctAnswer: 3,
    explanation:
      "Mutation 1 ist 'stumm' (silent), da UAU und UAC durch die Degeneriertheit des genetischen Codes dieselbe Aminosäure codieren. Mutation 2 erzeugt ein Stoppcodon ('Nonsense') und führt zum vorzeitigen Kettenabbruch. Mutation 3 verändert durch das Einfügen einer einzelnen Base das gesamte Leseraster ('Frameshift'), sodass alle nachfolgenden Codons falsch abgelesen werden.",
    tags: ["BMS","Biologie","Genetik","Punktmutation","Stille Mutation","Nonsense-Mutation","Frameshift"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Balancierte Robertson-Translokation",
    difficulty: "Schwer",
    questionText:
      "Eine phänotypisch völlig unauffällige Frau besitzt 45 Chromosomen. Zytogenetisch wird eine balancierte Robertson-Translokation nachgewiesen, bei der die langen Arme der Chromosomen 14 und 21 zu einem einzigen Chromosom fusioniert sind (45,XX,rob(14;21)). Warum ist diese Frau selbst gesund, trägt jedoch ein stark erhöhtes Risiko, ein Kind mit Down-Syndrom zur Welt zu bringen?",
    options: [
          "Weil ihr alle Gene des Chromosoms 21 fehlen und sie diese von ihrem Partner übernehmen muss.",
          "Weil Frauen mit 45 Chromosomen grundsätzlich nur lebensunfähige Zygoten bilden können.",
          "Weil das Fusionschromosom bei der Meiose immer zerstört wird.",
          "Weil sie keine Eizellen bilden kann und künstliche Befruchtung benötigt.",
          "Weil ihr gesamtes Erbgut balanciert vorhanden ist (zwei Kopien von 21, eine frei und eine fusioniert); bei der meiotischen Segregation kann sie jedoch sowohl das normale Chromosom 21 als auch das Fusionschromosom 14;21 in dieselbe Eizelle abgeben, was nach Befruchtung zu einer Translokations-Trisomie 21 führt."
    ],
    correctAnswer: 4,
    explanation:
      "Bei der balancierten Robertson-Translokation ging kein wesentliches Erbmaterial verloren (die kurzen Arme enthalten nur redundante rRNA-Gene), sodass die Trägerin gesund ist. In der Meiose können jedoch das freie Chromosom 21 und das Fusionschromosom 14;21 gemeinsam in eine Eizelle segregieren. Nach Befruchtung mit einem normalen Spermium liegt das genetische Material von Chromosom 21 dreifach vor (Translokations-Down-Syndrom).",
    tags: ["BMS","Biologie","Genetik","Translokation","Robertson-Translokation","Trisomie 21","Down-Syndrom"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mutationen: Vererbbarkeit somatischer Mutationen",
    difficulty: "Leicht",
    questionText:
      "In einer Epithelzelle der Lunge eines Rauchers entsteht durch krebserregende Teerstoffe eine Deletion beider Allele des Tumorsuppressorgens p53, was zur Entstehung eines Lungenkarzinoms führt. Mit welcher Wahrscheinlichkeit wird diese spezifische p53-Deletion an die leiblichen Kinder dieses Patienten vererbt?",
    options: [
          "0 % (wird überhaupt nicht vererbt)",
          "50 % (1/2)",
          "25 % (1/4)",
          "100 % (an alle Kinder)",
          "Nur an die Söhne über das Y-Chromosom"
    ],
    correctAnswer: 0,
    explanation:
      "Es handelt sich um eine somatische Mutation, die ausschließlich in Körperzellen (Lungenepithel) erworben wurde. An die nächste Generation können ausschließlich Mutationen weitergegeben werden, die in der Keimbahn (Keimzellen / Gameten bzw. deren Vorläuferzellen in den Gonaden) vorliegen. Die Vererbungswahrscheinlichkeit beträgt daher exakt 0 %.",
    tags: ["BMS","Biologie","Genetik","Somatische Mutation","Keimbahn","Vererbbarkeit","Onkologie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Geschlechtsvererbung: Mehrgenerationen-Stammbaum bei X-chromosomalem Erbgang",
    difficulty: "Mittel",
    questionText:
      "Ein Mann mit Rot-Grün-Sehschwäche (X-chromosomal-rezessives Merkmal, Karyotyp XrY) bekommt mit einer homozygot gesunden Frau (XRXR) eine Tochter. Diese Tochter heiratet später einen normalsichtigen Mann (XRY) und erwartet ein Kind. Mit welcher Wahrscheinlichkeit wird ein SOHN dieser Tochter (Enkelsohn des ursprünglichen Mannes) rot-grün-sehschwach sein?",
    options: [
          "0 %",
          "50 % (1/2)",
          "25 % (1/4)",
          "100 %",
          "75 % (3/4)"
    ],
    correctAnswer: 1,
    explanation:
      "Der betroffene Großvater vererbt sein einziges X-Chromosom (Xr) zwingend an seine Tochter, die somit obligate Konduktorin (XRXr) ist. Bei der Zeugung eines Sohnes steuert der Vater das Y-Chromosom bei; die Mutter gibt mit 50 % Wahrscheinlichkeit ihr gesundes XR und mit 50 % Wahrscheinlichkeit ihr mutiertes Xr weiter. Da Männer hemizygot sind, erkrankt ein Sohn, der Xr erbt, mit Sicherheit. Die Wahrscheinlichkeit für einen betroffenen Sohn beträgt 50 %.",
    tags: ["BMS","Biologie","Genetik","X-chromosomal","Rot-Grün-Sehschwäche","Konduktorin","Hemizygotie"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },
  {
    id: "bio-04-set5-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Krebsentstehung: Zusammenspiel von Onkogenen und Tumorsuppressoren",
    difficulty: "Schwer",
    questionText:
      "In einer Darmepithelzelle entsteht zunächst eine aktivierende Mutation in einem Protoonkogen (K-Ras wird zum permanent aktiven Onkogen). Später verliert dieselbe Zelllinie durch zwei aufeinanderfolgende Mutationen beide funktionellen Allele des Tumorsuppressorgens p53. Warum führt erst die Kombination beider molekularer Ereignisse zur malignen Transformation?",
    options: [
          "Weil Protoonkogene und Tumorsuppressorgene exakt dieselben Proteine codieren.",
          "Weil p53 ausschließlich das Spleißen der mRNA von K-Ras verhindert.",
          "Weil das aktive Onkogen die Zelle permanent zur Proliferation antreibt (Gaspedal), während der Verlust des Tumorsuppressors p53 die Schutzbremsen (Zellzyklusarrest und Apoptoseeinleitung bei DNA-Schäden) vollständig lahmlegt.",
          "Weil K-Ras die Apoptose anregt und p53 sie hemmt.",
          "Weil erst durch p53-Verlust neue Mitochondrien gebildet werden können."
    ],
    correctAnswer: 2,
    explanation:
      "Die Entstehung von Krebs erfordert typischerweise das Zusammenspiel von proliferationsfördernden und kontrollverlierenden Mutationen: Ein Onkogen treibt die Zellteilung unkontrolliert an (dauerhaftes mitogenes Signal). Eine intakte Zelle würde diesen Onkogen-Stress durch p53 erkennen und Apoptose einleiten. Erst wenn auch der Tumorsuppressor p53 inaktiviert wird, kann die geschädigte Zelle ungehindert proliferieren, weitere Mutationen akkumulieren und maligne entarten.",
    tags: ["BMS","Biologie","Genetik","Onkologie","K-Ras","p53","Mehrschritt-Hypothese","Zellzykluskontrolle"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 5,
  },

  /* =================================================================
     bio-05-molgen
     ================================================================= */
  {
    id: "bio-05-set1-q001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA: Aufbau eines Nukleotids",
    difficulty: "Leicht",
    questionText:
      "Aus welchen drei chemischen Grundbausteinen setzt sich ein einzelnes Nukleotid der DNA zusammen?",
    options: [
          "Ribose, Aminosäure und Fettsäure",
          "Glukose, Phosphatgruppe und stickstoffhaltige Base",
          "Desoxyribose (Pentosezucker), Phosphatgruppe und eine stickstoffhaltige organische Base",
          "Glycerin, Phosphatgruppe und Cholesterin",
          "Desoxyribose, Schwefelrest und Peptidkette"
    ],
    correctAnswer: 2,
    explanation:
      "Jedes DNA-Nukleotid besteht aus einem Pentosezucker (2'-Desoxyribose), einem Phosphatrest (verknüpft am 5'-C-Atom der Desoxyribose) und einer von vier stickstoffhaltigen Basen (Adenin, Thymin, Guanin oder Cytosin, gebunden am 1'-C-Atom).",
    tags: ["BMS","Biologie","Molekulare Genetik","DNA","Nukleotid","Desoxyribose","Basen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA: Komplementäre Basenpaarung & Wasserstoffbrücken",
    difficulty: "Leicht",
    questionText:
      "Welche Basen bilden in der DNA-Doppelhelix komplementäre Paare und wie viele Wasserstoffbrückenbindungen werden jeweils zwischen ihnen ausgebildet?",
    options: [
          "Adenin paart mit Thymin über zwei Wasserstoffbrücken; Guanin paart mit Cytosin über drei Wasserstoffbrücken.",
          "Adenin paart mit Guanin über drei Wasserstoffbrücken; Thymin paart mit Cytosin über zwei Wasserstoffbrücken.",
          "Adenin paart mit Uracil über zwei Wasserstoffbrücken; Guanin paart mit Thymin über drei Wasserstoffbrücken.",
          "Cytosin paart mit Adenin über eine Wasserstoffbrücke; Guanin paart mit Thymin über vier Wasserstoffbrücken.",
          "Alle Basen paaren sich beliebig mit jeweils genau einer kovalenten Peptidbindung."
    ],
    correctAnswer: 0,
    explanation:
      "In der B-DNA paart die Purinbase Adenin stets spezifisch mit der Pyrimidinbase Thymin (über 2 Wasserstoffbrückenbindungen), während die Purinbase Guanin mit der Pyrimidinbase Cytosin über 3 Wasserstoffbrückenbindungen paart (Chargaff-Regeln: A=T und G≡C).",
    tags: ["BMS","Biologie","Molekulare Genetik","DNA","Basenpaarung","Wasserstoffbrücken","Chargaff"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA: Antiparallelität & 5'-/3'-Enden",
    difficulty: "Mittel",
    questionText:
      "Was bedeutet der Begriff „antiparallel“ bezüglich der beiden Einzelstränge der DNA-Doppelhelix?",
    options: [
          "Dass beide Stränge parallel in exakt derselben chemischen Richtung von 5' nach 3' verlaufen.",
          "Dass ein Strang nur aus Purinen und der Gegenstrang nur aus Pyrimidinen besteht.",
          "Dass die Stränge keine Wasserstoffbrücken untereinander ausbilden können.",
          "Dass ein DNA-Strang in 5' $\\rightarrow$ 3'-Richtung verläuft, während der komplementäre Gegenstrang in entgegengesetzter 3' $\\rightarrow$ 5'-Richtung orientiert ist.",
          "Dass beide Stränge an ihren Enden kovalent miteinander zu einem Kreis verschmolzen sind."
    ],
    correctAnswer: 3,
    explanation:
      "Die beiden Stränge der DNA-Doppelhelix verlaufen gegenläufig (antiparallel): Dem 5'-Phosphat-Ende des einen Strangs liegt das 3'-OH-Ende des Gegenstrangs gegenüber. Dies ist für die Ausbildung der spezifischen Basenpaarung und für Replikations- und Transkriptionsenzyme essenziell.",
    tags: ["BMS","Biologie","Molekulare Genetik","DNA","Doppelhelix","Antiparallel","5-Ende","3-Ende"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q004",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "RNA: Strukturelle Unterschiede zur DNA",
    difficulty: "Leicht",
    questionText:
      "Durch welche zwei wesentlichen chemischen Bausteine unterscheidet sich ein typisches RNA-Molekül von einem DNA-Molekül?",
    options: [
          "RNA enthält Desoxyribose statt Ribose und Thymin statt Uracil.",
          "RNA enthält den Zucker Ribose anstelle von Desoxyribose und die Pyrimidinbase Uracil anstelle von Thymin.",
          "RNA enthält keine Phosphatgruppen und anstelle von Guanin stets Glycin.",
          "RNA besteht aus Fettsäuren und verwendet Guanin anstelle von Adenin.",
          "RNA enthält keine stickstoffhaltigen Basen, sondern nur Aminosäuren."
    ],
    correctAnswer: 1,
    explanation:
      "RNA unterscheidet sich chemisch von der DNA durch zwei Hauptmerkmale: (1) Als Pentosezucker enthält RNA Ribose (mit einer OH-Gruppe am 2'-C-Atom, während Desoxyribose dort nur ein H trägt), und (2) anstelle der Base Thymin enthält RNA die Base Uracil, die mit Adenin paart. Zudem liegt RNA in der Zelle meist einzelsträngig vor.",
    tags: ["BMS","Biologie","Molekulare Genetik","RNA","Ribose","Uracil","DNA-Vergleich"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q005",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA-Replikation: Semikonservatives Prinzip",
    difficulty: "Leicht",
    questionText:
      "Was bedeutet das Prinzip der „semikonservativen Replikation“ der DNA?",
    options: [
          "Der ursprüngliche elterliche DNA-Doppelstrang bleibt vollkommen intakt und eine völlig neue DNA-Doppelhelix wird synthetisiert.",
          "Die DNA wird in kleine Stücke zerschnitten und zufällig mit neuer RNA vermischt.",
          "Nur die Introns der DNA werden repliziert, während die Exons unverändert bleiben.",
          "Beide neu entstehenden DNA-Stränge werden ausschließlich aus ribosomalen Proteinen aufgebaut.",
          "Jeder der beiden neu entstandenen DNA-Doppelstränge besteht aus einem alten (elterlichen) Matrizenstrang und einem neu synthetisierten Tochterstrang."
    ],
    correctAnswer: 4,
    explanation:
      "Bei der semikonservativen Replikation (bewiesen durch das Meselson-Stahl-Experiment) trennen sich die beiden Stränge der elterlichen DNA-Doppelhelix. Jeder Strang dient als Matrize für die Synthese eines neuen komplementären Strangs. In den beiden Tochter-Doppelhelices ist somit je ein Elternstrang konserviert und ein neuer Strang hinzugekommen.",
    tags: ["BMS","Biologie","Molekulare Genetik","Replikation","Semikonservativ","Meselson-Stahl"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q006",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA-Replikation: Syntheserichtung der DNA-Polymerase",
    difficulty: "Mittel",
    questionText:
      "In welcher Richtung synthetisiert die DNA-Polymerase einen neuen DNA-Strang während der Replikation?",
    options: [
          "Ausschließlich von 3' nach 5'",
          "Gleichzeitig in beide Richtungen ohne feste Orientierung",
          "Ausschließlich von 5' nach 3' (durch Anknüpfen an das freie 3'-OH-Ende)",
          "Vom C-Terminus zum N-Terminus",
          "Vom Zentromer direkt zum Telomer ohne Beachtung der Polarität"
    ],
    correctAnswer: 2,
    explanation:
      "Alle bekannten zellulären DNA-Polymerasen können neue Nukleotide ausschließlich an das freie 3'-OH-Ende eines bestehenden Nukleotids knüpfen (Bildung einer Phosphodiesterbindung). Die Syntheserichtung des neuen Strangs verläuft daher zwingend immer von 5' nach 3' (der Matrizenstrang wird dabei von 3' nach 5' abgelesen).",
    tags: ["BMS","Biologie","Molekulare Genetik","DNA-Polymerase","Syntheserichtung","5-3-Richtung","Replikation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q007",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA-Replikation: Leitstrang, Folgestrang & Okazaki-Fragmente",
    difficulty: "Mittel",
    questionText:
      "Warum wird der Folgestrang an der Replikationsgabel diskontinuierlich in Form von Okazaki-Fragmenten synthetisiert?",
    options: [
          "Weil die DNA-Polymerase am Folgestrang keine Desoxyribose verwenden kann.",
          "Weil die DNA-Polymerase nur in 5' $\\rightarrow$ 3'-Richtung synthetisieren kann, der Folgestrang aber in Gegenrichtung zur wandernden Replikationsgabel wachsen muss.",
          "Weil am Folgestrang ausschließlich tRNA und keine DNA gebildet wird.",
          "Weil der Folgestrang keine Phosphodiesterbindungen besitzt.",
          "Weil der Folgestrang erst nach der Zellteilung synthetisiert wird."
    ],
    correctAnswer: 1,
    explanation:
      "Da die DNA-Doppelhelix antiparallel ist und die DNA-Polymerase nur in 5' $\\rightarrow$ 3'-Richtung verknüpfen kann, kann nur der Leitstrang kontinuierlich in Richtung der wandernden Replikationsgabel synthetisiert werden. Am Folgestrang verläuft das Wachstum weg von der Gabel, sodass die Synthese stückweise in kurzen Abschnitten (Okazaki-Fragmente) erfolgt, die später durch die DNA-Ligase verknüpft werden.",
    tags: ["BMS","Biologie","Molekulare Genetik","Okazaki-Fragmente","Folgestrang","Leitstrang","DNA-Ligase"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q008",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Transkription: Definition & Grundprinzip",
    difficulty: "Leicht",
    questionText:
      "Welche Aussage beschreibt den Prozess der Transkription in einer eukaryotischen Zelle KORREKT?",
    options: [
          "Ein spezifischer DNA-Abschnitt (Gen) dient als Vorlage für die Synthese einer dazu komplementären RNA durch die RNA-Polymerase.",
          "Eine mRNA wird an den Ribosomen direkt in eine Kette aus Fettsäuren übersetzt.",
          "Die gesamte zelluläre DNA wird verdoppelt, um zwei Tochterzellen zu erzeugen.",
          "Proteine werden im Zellkern zerlegt, um daraus freie DNA-Nukleotide zu gewinnen.",
          "Ein RNA-Strang wird enzymatisch in doppelsträngige DNA umgewandelt."
    ],
    correctAnswer: 0,
    explanation:
      "Die Transkription ist der erste Schritt der Genexpression. Hierbei wird die genetische Information eines DNA-Gens durch das Enzym RNA-Polymerase in ein einzelsträngiges RNA-Molekül (z. B. mRNA) umgeschrieben.",
    tags: ["BMS","Biologie","Molekulare Genetik","Transkription","RNA-Polymerase","mRNA","Genexpression"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q009",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Transkription: Funktion des Promotors",
    difficulty: "Leicht",
    questionText:
      "Welche grundlegende Rolle spielt die Promotorregion eines Gens bei der Transkription?",
    options: [
          "Sie codiert für das Stoppsignal bei der Translation am Ribosom.",
          "Sie schneidet die Introns aus der reifen mRNA heraus.",
          "Sie transportiert die fertigen Proteine durch die Kernporen ins Zytoplasma.",
          "Sie dient als spezifische Erkennungs- und Bindestelle für Transkriptionsfaktoren und die RNA-Polymerase zur Festlegung des Transkriptionsstarts.",
          "Sie verdoppelt die DNA-Menge vor der Mitose."
    ],
    correctAnswer: 3,
    explanation:
      "Der Promotor ist ein nicht-codierender regulatorischer DNA-Abschnitt stromaufwärts eines Gens. Er enthält Erkennungssequenzen (wie die TATA-Box bei Eukaryoten), an die Transkriptionsfaktoren und die RNA-Polymerase binden, um den genauen Startpunkt und die Richtung der Transkription zu bestimmen.",
    tags: ["BMS","Biologie","Molekulare Genetik","Promotor","Transkription","RNA-Polymerase","Initiation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q010",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Transkription: Matrizenstrang & komplementäre Basenpaarung",
    difficulty: "Leicht",
    questionText:
      "Welcher DNA-Strang dient der RNA-Polymerase als Vorlage und welche RNA-Base wird gegenüber einem Adenin der DNA eingebaut?",
    options: [
          "Der codierende Nicht-Matrizenstrang; es wird Thymin eingebaut.",
          "Der Folgestrang; es wird Guanin eingebaut.",
          "Beide DNA-Stränge gleichzeitig; es wird Cytosin eingebaut.",
          "Ausschließlich das Zentromer; es wird Desoxyuracil eingebaut.",
          "Der Matrizenstrang (codogene Strang); es wird die komplementäre Base Uracil in die RNA eingebaut."
    ],
    correctAnswer: 4,
    explanation:
      "Die RNA-Polymerase liest den Matrizenstrang (auch codogener Strang oder Antisense-Strang genannt) in 3' $\\rightarrow$ 5'-Richtung ab und synthetisiert die RNA komplementär in 5' $\\rightarrow$ 3'-Richtung. Da RNA kein Thymin besitzt, wird gegenüber von Adenin der DNA die Base Uracil in die RNA eingebaut.",
    tags: ["BMS","Biologie","Molekulare Genetik","Matrizenstrang","Codogener Strang","Uracil","Transkription"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q011",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "RNA-Prozessierung: Reifungsschritte der eukaryotischen mRNA",
    difficulty: "Leicht",
    questionText:
      "Welche drei wesentlichen Prozessierungsschritte wandeln bei Eukaryoten die primäre Prä-mRNA im Zellkern in die transportfähige, reife mRNA um?",
    options: [
          "Replikation, Kondensation und Zentromerbildung",
          "Translation, Phosphorylierung und Peptidbindung",
          "Anheften einer 5'-Cap-Struktur, Anfügen eines Poly-A-Schwanzes am 3'-Ende und das Spleißen (Herausschneiden der Introns)",
          "Verdopplung der Basenzahl, Methylierung aller Histone und Abbau der Ribosomen",
          "Bindung an tRNA, Ausbildung von Wasserstoffbrücken und Zellkernzerfall"
    ],
    correctAnswer: 2,
    explanation:
      "Die eukaryotische Prä-mRNA wird im Zellkern durch drei Schritte modifiziert: (1) Capping (modifiziertes Guanin am 5'-Ende für Schutz und Ribosomenbindung), (2) Polyadenylierung (Poly-A-Schwanz am 3'-Ende zur Stabilitätserhöhung) und (3) Spleißen (Entfernung der nicht-codierenden Introns und Verknüpfung der Exons).",
    tags: ["BMS","Biologie","Molekulare Genetik","RNA-Prozessierung","5-Cap","Poly-A-Schwanz","Spleißen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q012",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "RNA-Prozessierung: Introns vs. Exons",
    difficulty: "Leicht",
    questionText:
      "Was geschieht beim Vorgang des Spleißens mit den Introns und Exons der eukaryotischen Prä-mRNA?",
    options: [
          "Introns werden enzymatisch herausgeschnitten und abgebaut; die Exons werden miteinander verknüpft und verbleiben in der reifen mRNA.",
          "Exons werden herausgeschnitten und verworfen; nur die Introns werden in Proteine translatiert.",
          "Introns und Exons werden verdoppelt und bilden zusammen die tRNA.",
          "Alle Exons werden in Desoxyribose umgewandelt und bleiben im Zellkern.",
          "Introns wandern direkt an die Ribosomen, während Exons abgebaut werden."
    ],
    correctAnswer: 0,
    explanation:
      "Die eukaryotische Prä-mRNA enthält mosaikartig codierende Abschnitte (Exons) und nicht-codierende Zwischenabschnitte (Introns). Das Spleißosom schneidet die Introns präzise heraus und ligiert die Exons zu einem durchgehenden Leseraster zusammen, das als reife mRNA ins Zytoplasma exportiert wird.",
    tags: ["BMS","Biologie","Molekulare Genetik","Spleißen","Introns","Exons","mRNA"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q013",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Translation: Definition & Ort",
    difficulty: "Leicht",
    questionText:
      "Was versteht man unter Translation und an welchem zellulären Ort findet dieser Prozess statt?",
    options: [
          "Die Umschreibung von DNA in mRNA im Zellkern",
          "Die Übersetzung der Basensequenz einer mRNA in die Aminosäuresequenz eines Polypeptids (Proteins) an den Ribosomen im Zytoplasma",
          "Die Replikation der Mitochondrien in der G1-Phase",
          "Der Abbau von Proteinen im Lysosom zur Energiegewinnung",
          "Die Paarung homologer Chromosomen während der Meiose I"
    ],
    correctAnswer: 1,
    explanation:
      "Die Translation ist der zweite Hauptschritt der Genexpression. An den Ribosomen im Zytoplasma (oder am rauen endoplasmatischen Retikulum) wird die in der mRNA codierte Basenabfolge durch tRNA-Moleküle in eine Kette aus kovalent verknüpften Aminosäuren (Protein) übersetzt.",
    tags: ["BMS","Biologie","Molekulare Genetik","Translation","Ribosomen","Zytoplasma","Proteinbiosynthese"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q014",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Translation: Rolle der Transfer-RNA (tRNA)",
    difficulty: "Leicht",
    questionText:
      "Welche entscheidende Adapterfunktion übt die Transfer-RNA (tRNA) während der Translation aus?",
    options: [
          "Sie bindet die RNA-Polymerase an den Promotor der DNA.",
          "Sie zerschneidet fremde virale DNA im Zellkern.",
          "Sie bildet das passive Schutzgerüst der Zellmembran.",
          "Sie trägt an ihrem 3'-Ende eine spezifische Aminosäure und bindet mit ihrem Basentriplett (Anticodon) komplementär an das passende Codon der mRNA.",
          "Sie repliziert die Telomere am Ende der Chromosomen."
    ],
    correctAnswer: 3,
    explanation:
      "Die tRNA fungiert als molekularer Adapter: Jede tRNA wird durch spezifische Aminoacyl-tRNA-Synthetasen mit der zugehörigen Aminosäure beladen und besitzt eine Schleife mit einem Anticodon-Triplett, das spezifisch an das passende Codon auf der mRNA bindet.",
    tags: ["BMS","Biologie","Molekulare Genetik","tRNA","Anticodon","Codon","Aminosäure","Translation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q015",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Translation: Codon-Anticodon-Paarung",
    difficulty: "Mittel",
    questionText:
      "Ein mRNA-Codon lautet in 5' $\\rightarrow$ 3'-Richtung gelesen: 5'-AUG-3'. Welches Anticodon auf der entsprechenden tRNA paart komplementär und antiparallel dazu?",
    options: [
          "5'-AUG-3'",
          "3'-TAC-5'",
          "5'-UAA-3'",
          "3'-CGA-5'",
          "3'-UAC-5'"
    ],
    correctAnswer: 4,
    explanation:
      "Die Basenpaarung zwischen mRNA-Codon und tRNA-Anticodon ist komplementär und antiparallel. Gegenüber von A steht U, gegenüber von U steht A, und gegenüber von G steht C. Zum Codon 5'-AUG-3' passt somit das Anticodon 3'-UAC-5' (in 5' $\\rightarrow$ 3'-Richtung geschrieben: 5'-CAU-3').",
    tags: ["BMS","Biologie","Molekulare Genetik","Anticodon","Codon","Basenpaarung","Translation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q016",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Translation: Peptidbindung & Polypeptidkette",
    difficulty: "Leicht",
    questionText:
      "Welche chemische Bindung wird am Ribosom zwischen zwei aufeinanderfolgenden Aminosäuren geknüpft, um die wachsende Polypeptidkette aufzubauen?",
    options: [
          "Phosphodiesterbindung",
          "Glykosidische Bindung",
          "Peptidbindung (kovalente Bindung zwischen der Carboxylgruppe der einen und der Aminogruppe der nächsten Aminosäure)",
          "Wasserstoffbrücke zwischen Thymin und Uracil",
          "Disulfidbrücke zwischen zwei Lipiden"
    ],
    correctAnswer: 2,
    explanation:
      "Die Peptidyltransferase-Aktivität der ribosomalen rRNA katalysiert die Ausbildung einer kovalenten Peptidbindung zwischen der Carboxylgruppe (-COOH) der wachsenden Kette und der freien Aminogruppe (-NH2) der neu herangeführten Aminosäure unter Wasserabspaltung.",
    tags: ["BMS","Biologie","Molekulare Genetik","Peptidbindung","Ribosom","Polypeptid","Translation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q017",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Genetischer Code: Degeneration / Redundanz",
    difficulty: "Leicht",
    questionText:
      "Was bedeutet die Aussage, dass der genetische Code „degeneriert“ (redundant) ist?",
    options: [
          "Dass für fast alle Aminosäuren mehrere verschiedene Basentripletts (Codons) codieren können.",
          "Dass der genetische Code mit zunehmendem Alter der Zelle seine Funktion verliert.",
          "Dass ein einzelnes Basentriplett für viele völlig verschiedene Aminosäuren gleichzeitig codiert.",
          "Dass nur 4 verschiedene Aminosäuren in der Natur existieren.",
          "Dass Bakterien und Menschen völlig unterschiedliche genetische Codes besitzen."
    ],
    correctAnswer: 0,
    explanation:
      "Es gibt 64 mögliche Codons ($4^3 = 64$), aber nur 20 kanonische proteinogene Aminosäuren sowie 3 Stoppcodons. Die Degeneration des Codes bedeutet, dass fast jede Aminosäure durch mehr als ein Codon verschlüsselt wird (z. B. 6 verschiedene Codons für Leucin). Der Code ist jedoch nicht mehrdeutig: Ein bestimmtes Triplett codiert stets nur für eine eindeutige Aminosäure.",
    tags: ["BMS","Biologie","Molekulare Genetik","Genetischer Code","Degeneration","Redundanz","Triplett"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q018",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Genetischer Code: Start- und Stoppcodons",
    difficulty: "Leicht",
    questionText:
      "Welches Basentriplett fungiert als universelles Startcodon der Translation und für welche Aminosäure codiert es?",
    options: [
          "UAA (codiert für Alanin)",
          "AUG (codiert für Methionin)",
          "UGA (codiert für Glycin)",
          "UAG (codiert für Tryptophan)",
          "CCC (codiert für Prolin)"
    ],
    correctAnswer: 1,
    explanation:
      "Das Codon 5'-AUG-3' dient bei Eukaryoten als universelles Startcodon, an dem die Translation initiiert wird, und codiert für die Aminosäure Methionin. Die drei Tripletts UAA, UAG und UGA codieren für keine Aminosäure, sondern sind Stoppcodons, an denen die Synthese abbricht.",
    tags: ["BMS","Biologie","Molekulare Genetik","Startcodon","AUG","Methionin","Stoppcodon"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q019",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Genexpression: Zelltypspezifische Genregulation",
    difficulty: "Leicht",
    questionText:
      "Eine menschliche Muskelzelle und eine Nervenzelle desselben Individuums besitzen eine identische genomische DNA-Sequenz. Warum weisen diese beiden Zelltypen dennoch völlig unterschiedliche Strukturen und Funktionen auf?",
    options: [
          "Weil die Nervenzelle alle Gene verloren hat, die für Muskelproteine codieren.",
          "Weil Muskelzellen keine Ribosomen besitzen und keine Proteine herstellen können.",
          "Weil Muskelzellen ausschließlich virale DNA zur Proteinherstellung nutzen.",
          "Weil durch zelltypspezifische Genregulation in jedem Zelltyp jeweils nur eine ausgewählte Untergruppe an Genen aktiv in RNA und Proteine exprimiert wird.",
          "Weil Nervenzellen keine DNA-Polymerasen besitzen."
    ],
    correctAnswer: 3,
    explanation:
      "Nahezu alle Körperzellen eines Menschen besitzen das gleiche Erbgut. Die zelluläre Differenzierung und Spezialisierung beruht auf differenzieller Genexpression: Nur diejenigen Gene, deren Genprodukte für die jeweilige Zellfunktion benötigt werden, werden aktiv transkribiert und translatiert.",
    tags: ["BMS","Biologie","Molekulare Genetik","Genexpression","Differenzierung","Genregulation","Zelltypen"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q020",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Genregulation: Grundfunktion von Transkriptionsfaktoren",
    difficulty: "Mittel",
    questionText:
      "Welche grundlegende Funktion üben Transkriptionsfaktoren in einer Zelle aus?",
    options: [
          "Sie verknüpfen Aminosäuren am Ribosom während der Translation.",
          "Sie transportieren Lipide durch die Plasmamembran.",
          "Sie zersetzen toxische Stoffe in den Peroxisomen.",
          "Sie replizieren die zelluläre RNA vor jeder Mitose.",
          "Sie binden an spezifische regulatorische DNA-Sequenzen (wie Promotoren oder Enhancer) und steuern dadurch die Aktivität der RNA-Polymerase (Aktivierung oder Drosselung der Transkription)."
    ],
    correctAnswer: 4,
    explanation:
      "Transkriptionsfaktoren sind regulatorische Proteine, die an spezifische DNA-Motive binden. Sie rekrutieren oder blockieren die RNA-Polymerase und kontrollieren damit, wann, wo und in welchem Ausmaß ein Gen in mRNA umgeschrieben wird.",
    tags: ["BMS","Biologie","Molekulare Genetik","Transkriptionsfaktoren","Genregulation","Promotor","Enhancer"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q021",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA-Schäden & Reparatur: Ursachen & biologische Bedeutung",
    difficulty: "Leicht",
    questionText:
      "Welche Aussage über DNA-Schäden und zelluläre DNA-Reparaturmechanismen ist KORREKT?",
    options: [
          "DNA-Schäden treten in gesunden Zellen grundsätzlich niemals auf.",
          "UV-Strahlung kann in der DNA keine chemischen Veränderungen hervorrufen.",
          "Umwelteinflüsse wie UV-Licht und chemische Substanzen schädigen die DNA fortlaufend; funktionierende zelluläre Reparatursysteme sind essenziell, um dauerhafte Mutationen und maligne Entartung (Krebs) zu verhindern.",
          "DNA-Schäden werden in Eukaryoten ausschließlich durch den vollständigen Abbau des gesamten Zellkerns behoben.",
          "Fehlgeschlagene DNA-Reparaturen führen immer zur sofortigen Verdopplung der Lebenserwartung der Zelle."
    ],
    correctAnswer: 2,
    explanation:
      "DNA ist ständig schädigenden Einflüssen ausgesetzt (z. B. Bildung von Thymin-Dimeren durch UV-Strahlung oder Strangbrüche durch Radikale). Zellen besitzen hochspezifische Reparatursysteme (wie die Nukleotidexzisionsreparatur). Versagen diese Systeme, akkumulieren Mutationen, was zu Funktionsverlust von Genen und zur Entstehung von Tumoren führen kann.",
    tags: ["BMS","Biologie","Molekulare Genetik","DNA-Schäden","DNA-Reparatur","UV-Strahlung","Mutation","Krebs"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q022",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Molekulare Mutationen: Missense-Mutation",
    difficulty: "Leicht",
    questionText:
      "Ein punktförmiger Basenaustausch (Substitution) in einem proteincodierenden Exon führt dazu, dass an der betreffenden Stelle ein Codon für eine andere Aminosäure entsteht. Wie bezeichnet man diesen Mutationstyp?",
    options: [
          "Stille Mutation (Silent Mutation)",
          "Missense-Mutation (Fehlsinnmutation)",
          "Nonsense-Mutation",
          "Chromosomentranslokation",
          "Frameshift-Mutation durch Basenverlust"
    ],
    correctAnswer: 1,
    explanation:
      "Führt ein Basenaustausch zum Einbau einer anderen Aminosäure in das Polypeptid, spricht man von einer Missense-Mutation. Führt der Austausch zu einem Stoppcodon, ist es eine Nonsense-Mutation; bleibt die Aminosäure trotz Basenaustausch dieselbe, ist es eine stille Mutation.",
    tags: ["BMS","Biologie","Molekulare Genetik","Mutation","Missense","Punktmutation","Aminosäure"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q023",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Molekulare Mutationen: Frameshift durch Deletion",
    difficulty: "Mittel",
    questionText:
      "Warum hat der Verlust (Deletion) von genau einer einzigen Base mitten in einem Exon meist gravierendere Folgen für das Protein als der Austausch einer einzelnen Base (Substitution)?",
    options: [
          "Weil eine Basendeletion sofort alle Ribosomen der Zelle zerstört.",
          "Weil dadurch das gesamte Genom in tRNA umgewandelt wird.",
          "Weil eine Basendeletion ausschließlich die Mitochondrien betrifft.",
          "Weil der Ausfall einer Base das gesamte Triplett-Leseraster stromabwärts verschiebt (Frameshift), wodurch ab der Mutationsstelle alle nachfolgenden Aminosäuren fehlerhaft sind und meist ein verfrühtes Stoppcodon entsteht.",
          "Weil bei einer Basendeletion keine mRNA mehr transkribiert werden kann."
    ],
    correctAnswer: 3,
    explanation:
      "Da der genetische Code kommafrei in Dreiergruppen (Tripletts) abgelesen wird, verschiebt jede Insertion oder Deletion, deren Basenanzahl nicht durch 3 teilbar ist, das gesamte Leseraster (Frameshift-Mutation). Ab der Mutationsstelle stimmt kein Codon mehr, und meist bricht die Translation durch ein verfrühtes Stoppcodon rasch ab.",
    tags: ["BMS","Biologie","Molekulare Genetik","Frameshift","Deletion","Leseraster","Mutation"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q024",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Gentechnik & Methoden: Polymerase-Kettenreaktion (PCR)",
    difficulty: "Leicht",
    questionText:
      "Welches ist der primäre Zweck der Polymerase-Kettenreaktion (PCR) in der biologischen und medizinischen Laborpraxis?",
    options: [
          "Die millionenfache, gezielte Vervielfältigung (Amplifikation) eines spezifischen DNA-Abschnitts in vitro",
          "Die mikroskopische Färbung lebender Zellkerne",
          "Die dauerhafte Zerstörung von Bakterienwänden durch Ultraschall",
          "Die Bestimmung der Blutgruppe durch Antikörper-Agglutination",
          "Die Umwandlung von Glucose in ATP ohne Enzyme"
    ],
    correctAnswer: 0,
    explanation:
      "Die Polymerase-Kettenreaktion (PCR) ist ein zyklisches Verfahren zur gezielten In-vitro-Vervielfältigung (Amplifikation) definierter DNA-Abschnitte mithilfe einer hitzestabilen DNA-Polymerase (z. B. Taq-Polymerase) und spezifischer Primer.",
    tags: ["BMS","Biologie","Molekulare Genetik","PCR","Gentechnik","Amplifikation","DNA-Vervielfältigung"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },
  {
    id: "bio-05-set1-q025",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Gentechnik & Methoden: Restriktionsenzyme und Plasmide",
    difficulty: "Mittel",
    questionText:
      "Welche Funktion erfüllen Restriktionsenzyme und Plasmide bei der klassischen Erzeugung von rekombinanter DNA (molekulares Klonieren)?",
    options: [
          "Restriktionsenzyme bauen alle Proteine ab, während Plasmide als Ribosomen dienen.",
          "Restriktionsenzyme dienen als Impfstoffe, während Plasmide DNA zerstören.",
          "Plasmide schneiden Chromosomen, während Restriktionsenzyme als Zellkerne fungieren.",
          "Beide Moleküle verhindern jegliche Rekombination im Labor.",
          "Restriktionsenzyme schneiden DNA-Moleküle sequenzspezifisch wie molekulare Scheren; Plasmide dienen als ringförmige Vektoren (Genfähren), um die Fremd-DNA in Wirtszellen einzuschleusen."
    ],
    correctAnswer: 4,
    explanation:
      "In der rekombinanten Gentechnik schneiden Restriktionsendonukleasen DNA an palindromischen Erkennungssequenzen gezielt durch. Plasmide (kleine ringförmige bakterielle DNA-Moleküle) dienen als Klonierungsvektoren, in die das geschnittene DNA-Fragment mithilfe der DNA-Ligase eingefügt und anschließend in Bakterien transformiert wird.",
    tags: ["BMS","Biologie","Molekulare Genetik","Restriktionsenzyme","Plasmide","Vektor","Klonierung","Gentechnik"],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
  },

  /* =================================================================
     04. GENETIK (bio-04-genetik)
     ================================================================= */
  {
    id: "bio-04-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Mendelsche Regeln & Spaltungsgesetz",
    difficulty: "Mittel",
    questionText:
      "Bei einem autosomal-rezessiven Erbgang sind beide Elternteile phänotypisch gesund, aber heterozygote Konduktoren (Aa). Wie hoch ist die Wahrscheinlichkeit, dass ein Kind phänotypisch erkrankt (aa)?",
    options: ["0 %", "25 %", "50 %", "75 %", "100 %"],
    correctAnswer: 1,
    explanation:
      "Aus der Kreuzung Aa Ã— Aa entstehen die Genotypen: 1 AA : 2 Aa : 1 aa. Nur der Genotyp aa führt zur phänotypischen Erkrankung, die Wahrscheinlichkeit beträgt somit 1/4 = 25 %.",
    tags: ["BMS", "Biologie", "Genetik", "Mendel"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-04-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "Blutgruppenvererbung (AB0-System)",
    difficulty: "Mittel",
    questionText:
      "Eine Mutter hat die Blutgruppe A (heterozygot A0) und der Vater hat die Blutgruppe B (heterozygot B0). Welche Blutgruppen können bei ihren leiblichen Kindern auftreten?",
    options: [
      "Nur die Blutgruppe AB",
      "Nur die Blutgruppen A und B",
      "Alle vier Blutgruppen (A, B, AB und 0) mit jeweils 25 % Wahrscheinlichkeit",
      "Ausschließlich Blutgruppe 0",
      "Nur AB und 0",
    ],
    correctAnswer: 2,
    explanation:
      "Die Kreuzung von A0 Ã— B0 ergibt: AB (25%), A0 (25%), B0 (25%) und 00 (25%). Alle vier Phänotypen sind mit gleicher Wahrscheinlichkeit möglich.",
    tags: ["BMS", "Biologie", "Genetik", "Blutgruppen"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-04-003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-04-genetik",
    topic: "X-chromosomaler Erbgang",
    difficulty: "Schwer",
    questionText:
      "Ein gesunder Mann (X Y) zeugt mit einer heterozygoten Überträgerin (X Xa) für die X-chromosomal-rezessive Hämophilie A Kinder. Wie hoch ist das Erkrankungsrisiko für einen Sohn?",
    options: ["0 %", "25 %", "50 %", "75 %", "100 %"],
    correctAnswer: 2,
    explanation:
      "Söhne erhalten vom Vater immer das Y-Chromosom. Von der Mutter erhalten sie mit 50 % Wahrscheinlichkeit das gesunde X und mit 50 % Wahrscheinlichkeit das mutierte Xa. Söhne erkranken daher mit 50 % Wahrscheinlichkeit (Hemizygotie).",
    tags: ["BMS", "Biologie", "Genetik", "Hämophilie", "Gonosomen"],
    source: "medat-original",
    version: "2026.1",
  },

  /* =================================================================
     05. MOLEKULARE GENETIK (bio-05-molgen)
     ================================================================= */
  {
    id: "bio-05-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Chargaff-Regeln & DNA-Aufbau",
    difficulty: "Leicht",
    questionText:
      "In einer doppelsträngigen DNA-Molekülprobe beträgt der Anteil an Guanin 28 %. Wie hoch ist der prozentuale Anteil an Adenin?",
    options: ["22 %", "28 %", "44 %", "56 %", "14 %"],
    correctAnswer: 0,
    explanation:
      "Nach den Chargaff-Regeln ist %G = %C = 28 %, somit G + C = 56 %. Der Rest von 44 % entfällt auf A + T. Da %A = %T, ist der Adenin-Anteil 44 % / 2 = 22 %.",
    tags: ["BMS", "Biologie", "Genetik", "DNA"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-05-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "Proteinbiosynthese & Translation",
    difficulty: "Schwer",
    questionText:
      "Welches Startcodon leitet im genetischen Code der Eukaryoten die Translation ein und für welche Aminosäure kodiert es?",
    options: [
      "UAA — Stoppcodon",
      "AUG — Methionin",
      "UAG — Tryptophan",
      "UGA — Glycin",
      "CCG — Prolin",
    ],
    correctAnswer: 1,
    explanation:
      "AUG ist das universelle Startcodon für die Translation und kodiert für die Aminosäure Methionin (bzw. Formylmethionin bei Prokaryoten). UAA, UAG und UGA sind Stoppcodons.",
    tags: ["BMS", "Biologie", "Genetik", "Translation"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-05-003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-05-molgen",
    topic: "DNA-Replikation & Okazaki-Fragmente",
    difficulty: "Mittel",
    questionText:
      "Welches Enzym verknüpft während der semikonservativen Replikation die Okazaki-Fragmente des diskontinuierlich synthetisierten Folgestrangs kovalent miteinander?",
    options: [
      "DNA-Helikase",
      "DNA-Topoisomerase (Gyrase)",
      "DNA-Ligase",
      "RNA-Primase",
      "Telomerase",
    ],
    correctAnswer: 2,
    explanation:
      "Die DNA-Ligase katalysiert die Bildung von Phosphodiesterbindungen zwischen benachbarten Okazaki-Fragmenten und schließt so die Lücken im Zucker-Phosphat-Rückgrat des Folgestrangs.",
    tags: ["BMS", "Biologie", "Replikation", "DNA-Ligase"],
    source: "medat-original",
    version: "2026.1",
  },

  /* =================================================================
     06. HUMANGENETIK (bio-06-humangen)
     ================================================================= */
  {
    id: "bio-06-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-06-humangen",
    topic: "Numerische Chromosomenaberrationen",
    difficulty: "Leicht",
    questionText:
      "Welche Gonosomen-Konstellation und welcher Karyotyp liegt typischerweise beim Klinefelter-Syndrom vor?",
    options: [
      "45, X0 (Monosomie X)",
      "47, XXY (Trisomie der Geschlechtschromosomen)",
      "47, XYY",
      "47, XXX (Triplo-X)",
      "46, XX (männlicher Phänotyp)",
    ],
    correctAnswer: 1,
    explanation:
      "Das Klinefelter-Syndrom ist durch das Vorhandensein mindestens eines überzähligen X-Chromosoms bei männlichem Karyotyp (47, XXY) charakterisiert. Es entsteht meist durch Non-Disjunction während der elterlichen Meiose.",
    tags: ["BMS", "Biologie", "Humangenetik", "Klinefelter", "Karyotyp"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-06-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-06-humangen",
    topic: "Monogene Erbkrankheiten (CFTR-Gen)",
    difficulty: "Mittel",
    questionText:
      "Welche der folgenden Erkrankungen wird autosomal-rezessiv vererbt und beruht auf einem Defekt des CFTR-Chloridkanals?",
    options: [
      "Chorea Huntington",
      "Zystische Fibrose (Mukoviszidose)",
      "Marfan-Syndrom",
      "Hämophilie A",
      "Duchenne-Muskeldystrophie",
    ],
    correctAnswer: 1,
    explanation:
      "Mukoviszidose (Zystische Fibrose) beruht auf Mutationen im CFTR-Gen auf Chromosom 7 und wird autosomal-rezessiv vererbt. Sie führt zu zähem Schleim in Lunge, Pankreas und Darm.",
    tags: ["BMS", "Biologie", "Humangenetik", "Mukoviszidose"],
    source: "medat-original",
    version: "2026.1",
  },

  /* =================================================================
     07. EVOLUTION (bio-07-evolution)
     ================================================================= */
  {
    id: "bio-07-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-07-evolution",
    topic: "Homologie vs. Analogie",
    difficulty: "Mittel",
    questionText:
      "Die Grabbeine des Maulwurfs (Säugetier) und die der Maulwurfsgrille (Insekt) erfüllen denselben Zweck, besitzen aber einen völlig unterschiedlichen Bauplan. Wie bezeichnet man solche Merkmale?",
    options: [
      "Homologe Organe (Divergenz)",
      "Analoge Organe (Konvergenz)",
      "Rudimentäre Organe",
      "Atavismen",
      "Polyphyletische Merkmale",
    ],
    correctAnswer: 1,
    explanation:
      "Analoge Organe entstehen durch konvergente Evolution als Anpassung an ähnliche Umweltbedingungen, weisen jedoch keinen gemeinsamen evolutionären Ursprung oder Grundbauplan auf.",
    tags: ["BMS", "Biologie", "Evolution", "Analogie", "Konvergenz"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-07-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-07-evolution",
    topic: "Evolutionsfaktoren & Gendrift",
    difficulty: "Mittel",
    questionText:
      "Wie nennt man die zufällige, nicht durch Selektion bedingte Veränderung der Allelhäufigkeiten in kleinen Populationen (z. B. nach einer Naturkatastrophe)?",
    options: [
      "Gendrift (Flaschenhalseffekt)",
      "Adaptive Radiation",
      "Allopatrische Artbildung",
      "Disruptive Selektion",
      "Polyploidisierung",
    ],
    correctAnswer: 0,
    explanation:
      "Gendrift bezeichnet die stochastische Veränderung des Genpools. Der Flaschenhalseffekt tritt auf, wenn eine Population durch Umweltkatastrophen drastisch dezimiert wird und sich die Allelfrequenzen der Überlebenden rein zufällig verschieben.",
    tags: ["BMS", "Biologie", "Evolution", "Gendrift"],
    source: "medat-original",
    version: "2026.1",
  },

  /* =================================================================
     08. ÖKOLOGIE (bio-08-oekologie)
     ================================================================= */
  {
    id: "bio-08-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-08-oekologie",
    topic: "Lotka-Volterra-Regeln",
    difficulty: "Mittel",
    questionText:
      "Was besagt die 1. Lotka-Volterra-Regel (Regel der periodischen Zyklen) bezüglich Räuber- und Beutepopulationen?",
    options: [
      "Beide Populationsgrößen schwanken periodisch, wobei die Phasen der Räuber denen der Beute zeitverzögert folgen.",
      "Die Mittelwerte beider Populationen bleiben bei gleichen Umweltbedingungen konstant.",
      "Werden Räuber und Beute gleichermaßen dezimiert, erholt sich die Räuberpopulation schneller.",
      "Die Räuberpopulation stirbt nach Erreichen der Kapazitätsgrenze immer vollständig aus.",
      "Es gibt keine mathematische Korrelation zwischen Beute- und Räuberanzahl.",
    ],
    correctAnswer: 0,
    explanation:
      "Die 1. Lotka-Volterra-Regel besagt: Die Individuenzahlen von Räuber und Beute schwanken periodisch. Die Maxima der Räuberpopulation folgen phasenverschoben hinter den Maxima der Beutepopulation.",
    tags: ["BMS", "Biologie", "Ökologie", "Lotka-Volterra", "Räuber-Beute"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-08-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-08-oekologie",
    topic: "Toleranzkurven & Potenz",
    difficulty: "Leicht",
    questionText:
      "Wie bezeichnet man Organismen, die nur eine sehr geringe Schwankung eines Umweltfaktors (z. B. Temperatur) tolerieren und somit eine enge ökologische Potenz besitzen?",
    options: ["Euryök", "Stenök", "Poikilotherm", "Homoiotherm", "Autotroph"],
    correctAnswer: 1,
    explanation:
      "Stenöke Organismen haben einen engen Toleranzbereich bezüglich eines Umweltfaktors (z. B. stenotherm = enger Temperaturbereich). Euryöke Organismen weisen dagegen eine breite Toleranzspanne auf.",
    tags: ["BMS", "Biologie", "Ökologie", "Toleranz"],
    source: "medat-original",
    version: "2026.1",
  },

  /* =================================================================
     09. IMMUNBIOLOGIE (bio-09-immun)
     ================================================================= */
  {
    id: "bio-09-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-09-immun",
    topic: "Antikörperklassen & Plazentagängigkeit",
    difficulty: "Mittel",
    questionText:
      "Welche Immunglobulin-Klasse (Antikörper) kann als einzige die menschliche Plazentaschranke überwinden und verleiht dem Fetus den passiven Nestschutz?",
    options: ["IgM", "IgG", "IgA", "IgE", "IgD"],
    correctAnswer: 1,
    explanation:
      "IgG ist das häufigste Immunglobulin im Blutserum (ca. 75–80%) und als einziges plazentagängig (mittels FcRn-Rezeptor-vermitteltem Transport), was dem Neugeborenen maternalen Nestschutz bietet.",
    tags: ["BMS", "Biologie", "Immunbiologie", "Antikörper", "IgG"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-09-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-09-immun",
    topic: "Zelluläre Immunität & T-Lymphozyten",
    difficulty: "Schwer",
    questionText:
      "Welche T-Zell-Subpopulation erkennt Antigene über den T-Zell-Rezeptor im Komplex mit MHC-I-Molekülen und leitet über Perforine und Granzyme die Apoptose infizierter Körperzellen ein?",
    options: [
      "CD4+ T-Helferzellen (Th1/Th2)",
      "CD8+ zytotoxische T-Lymphozyten (CTL)",
      "Regulatorische T-Zellen (Treg)",
      "Plasmazellen",
      "B-Gedächtniszellen",
    ],
    correctAnswer: 1,
    explanation:
      "Zytotoxische CD8+ T-Zellen erkennen fremde Peptidantigene, die auf körpereigenen Zellen über MHC-I präsentiert werden, und induzieren zielgerichtet Apoptose über Perforin und Granzym B.",
    tags: ["BMS", "Biologie", "Immunbiologie", "T-Zellen", "MHC"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "bio-09-003",
    exam: "BOTH",
    section: "BMS",
    subjectId: "bio",
    chapterId: "bio-09-immun",
    topic: "Aktive vs. Passive Immunisierung",
    difficulty: "Leicht",
    questionText:
      "Was wird bei einer aktiven Immunisierung (Schutzimpfung) verabreicht, um einen langanhaltenden immunologischen Schutz aufzubauen?",
    options: [
      "Reine Antikörper aus Spenderplasma für sofortigen Abbau",
      "Abgeschwächte, inaktivierte Erreger oder Erreger-Antigene (z. B. mRNA/Protein)",
      "Breitband-Antibiotika",
      "Antihistaminika",
      "Immunglobulin E Konzentrate",
    ],
    correctAnswer: 1,
    explanation:
      "Bei der aktiven Impfung werden Antigene (abgeschwächte/abgetötete Erreger, Toxine oder mRNA) verabreicht, sodass der Körper selbst spezifische Antikörper und langlebige B- und T-Gedächtniszellen bildet.",
    tags: ["BMS", "Biologie", "Immunbiologie", "Impfung"],
    source: "medat-original",
    version: "2026.1",
  },
];

