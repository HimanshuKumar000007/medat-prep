/**
 * MedAT-H Textverständnis (TV) — 12-Aufgaben-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #3 (TV-Testteil, exakt 12 Aufgaben).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - Gesamt-Testtag: 221 gewertete Aufgaben (BMS 94, TV 12, KFF 75, SEK 40) + 8 GM-Gedächtniskarten.
 * - TV Testdauer: 35 Minuten Bearbeitungszeit (~175 Sekunden pro Aufgabe).
 * - 4 wissenschaftliche Lesepassagen mit je 3 zugeordneten, textgebundenen Multiple-Choice-Fragen.
 * - 5 Antwortoptionen je Aufgabe (A–E), exakt eine textlogisch und wissenschaftlich zutreffende Antwort.
 * 
 * Alle Aufgaben sind strikt aus dem jeweiligen Textauszug heraus lösbar (reine Lesekompetenz,
 * kein biomedizinisches oder physikalisches Fach-Vorwissen erforderlich).
 * 
 * Fragetypen & Formate:
 * - Detailidentifikation & Befunddissoziation
 * - Kausalanalyse & Funktionsmechanismen
 * - Logische Inferenz & Kernaussage / Autorenurteil
 * - Methodische Limitationen & Risikobewertung
 * 
 * Schwierigkeitsverteilung (präzise kalibriert):
 * - 3 Leicht / Grundlagen (Foundational) (25,0 %): Q001, Q006, Q008
 * - 6 Mittel / Fortgeschritten (Intermediate) (50,0 %): Q002, Q004, Q005, Q007, Q010, Q011
 * - 3 Schwer / Komplex (Advanced) (25,0 %): Q003, Q009, Q012
 * 
 * Antwortschlüssel (vollständig ausbalanciert & azyklisch, Max-Streak = 1):
 * - A: 3 (Q002, Q006, Q011)
 * - B: 2 (Q004, Q010)
 * - C: 2 (Q001, Q007)
 * - D: 3 (Q005, Q009, Q012)
 * - E: 2 (Q003, Q008)
 * Gesamt: 12 Aufgaben
 * Sequenz: C - A - E - B - D - A - C - E - D - B - A - D
 */

import type { StoredQuestion } from "../questions/types";

export interface QcTvGp3Passage {
  id: string;
  title: string;
  topic: string;
  text: string;
  paragraphs: string[];
  questionIds: string[];
}

export interface QcTvGp3QuestionRaw {
  id: string;
  passageId: string;
  passageTitle: string;
  passageText: string;
  subject: string;
  section: string;
  primary_topic: string;
  subtopic: string;
  difficulty: "foundational" | "intermediate" | "advanced";
  concept: string;
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
  evidenceLocation?: string;
  metadata: {
    author: string;
    status: string;
    version: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// DIE 4 WISSENSCHAFTLICHEN LESEPASSAGEN (GENERALPROBE #3)
// ─────────────────────────────────────────────────────────────────────────────

const PASSAGE_1_TEXT = `In den letzten Kriegswintern des Zweiten Weltkriegs führte die Blockade des westlichen Teils der Niederlande durch die Besatzungsmächte zu einer extremen Hungersnot, dem sogenannten „Hongerwinter“ von 1944/1945. Die tägliche Kalorienration sank für mehrere Monate auf unter 800 Kilokalorien pro Person. Für die moderne biomedizinische Forschung bot dieses zeitlich und geografisch scharf abgegrenzte Ereignis ein außergewöhnliches natürliches Experiment zur Erforschung pränataler Einflüsse auf die langfristige Gesundheit der Nachkommen.

Epidemiologische Kohortenstudien an den damals gezeugten und geborenen Kindern offenbarten ein bemerkenswertes Phänomen: Erwachsene, deren Mütter während der ersten Monate der Schwangerschaft (dem ersten Trimenon) gehungert hatten, wiesen Jahrzehnte später bei vollwertiger Ernährung signifikant erhöhte Raten an Adipositas, Fettstoffwechselstörungen und koronaren Herzkrankheiten auf. Verblüffenderweise zeigte sich dieses Muster bei Nachkommen, deren Mütter erst im letzten Drittel der Schwangerschaft (dem dritten Trimenon) der Hungersnot ausgesetzt waren, überhaupt nicht: Diese Kinder kamen zwar mit einem deutlich verminderten Geburtsgewicht zur Welt, entwickelten im Erwachsenenalter jedoch keine erhöhte Neigung zu Fettleibigkeit oder kardiovaskulären Leiden.

Zur Erklärung dieser Dissoziation formulierten die Mediziner David Barker und Nicholas Hales die „Thrifty-Phenotype-Hypothese“ (Hypothese des sparsamen Phänotyps). Demnach nimmt der Fetus über die mütterliche Plazenta biochemische Signale über die äußere Umwelt wahr. Bei akutem Nährstoffmangel im frühen Entwicklungsstadium passt der Organismus seine physiologische Grundarchitektur adaptiv an eine antizipierte lebenslange Mangelsituation an: Organe wie Gehirn und Herz werden auf Kosten von Muskelmasse und Bauchspeicheldrüse bevorzugt versorgt, und der Stoffwechsel wird dauerhaft auf eine maximale Speicherung jedes aufgenommenen Kalorienanteils programmiert.

Auf molekularer Ebene beruht diese biologische Vorhersage jedoch nicht auf Mutationen der DNA-Sequenz, sondern auf stabilen epigenetischen Modifikationen. Molekularbiologische Reihenuntersuchungen wiesen bei Personen mit früher pränataler Mangelexposition noch sechs Jahrzehnte später eine spezifische Hypomethylierung am Gen für den insulinähnlichen Wachstumsfaktor 2 (IGF2) nach. Das eigentliche pathogenetische Problem entsteht erst durch einen sogenannten „Mismatch“: Trifft ein pränatal auf karge Notzeiten kalibrierter Stoffwechsel nach der Geburt auf den energiereichen Nahrungsmittelüberfluss moderner Gesellschaften, schlägt die ursprüngliche biologische Anpassungsstrategie in ein chronisches Krankheitsrisiko um.`;

const PASSAGE_2_TEXT = `Das menschliche Gehirn beansprucht rund 20 Prozent des Ruheenergiebedarfs des gesamten Körpers, produziert kontinuierlich erhebliche Mengen metabolischer Abfallstoffe und besitzt dennoch – im Gegensatz zu nahezu allen peripheren Organen – keine eigenen traditionellen Lymphgefäße. Über Jahrzehnte blieb es ein fundamentales physiologisches Rätsel, wie das zentrale Nervensystem hochmolekulare Proteintrümmer wie Amyloid-beta und hyperphosphoryliertes Tau abtransportiert, deren toxische Akkumulation als pathologisches Kennzeichen neurodegenerativer Demenzen gilt.

Erst im Jahr 2012 gelang einem Forschungsteam um die dänische Neurobiologin Maiken Nedergaard die Beschreibung eines makroskopischen Flüssigkeitsaustauschsystems, das in Anlehnung an die beteiligten Gliazellen und das periphere Lymphsystem als „glymphatisches System“ bezeichnet wird. Bei diesem Prozess tritt Liquor (cerebrospinale Flüssigkeit) aus den Subarachnoidalräumen entlang periarterieller Räume tief in das Hirngewebe ein. Getrieben wird diese Strömung primär durch die pulsatilen Druckwellen der arteriellen Gefäßwände, die sich synchron mit jedem Herzschlag ausbreiten.

Ein entscheidendes molekulares Scharnier bilden die Gefäßendfüße von Astrozyten, die die zerebralen Kapillaren vollständig manschettenartig umhüllen. Diese Endfüße exprimieren in extrem hoher Dichte den Wasserkanal Aquaporin-4 (AQP4). Durch diese Kanäle strömt der Liquor mit geringem Widerstand in das Interstitium ein, durchspült den Raum zwischen den Nervenzellen im Sinne eines kontinuierlichen Konvektionsstroms und nimmt gelöste Stoffwechselmetabolite mit, bevor die Flüssigkeit über perivenöse Abflusswege in das duralvenöse Blut- und Zervikallymphsystem abgeleitet wird.

Besonders faszinierend ist die dynamische Regulation dieses Drainagesystems: Während des natürlichen Schlafs weitet sich der interstitielle Raum des Kortex um rund 60 Prozent gegenüber dem Wachzustand aus, was auf eine reversible Schrumpfung astrozytärer Zellkörper zurückgeführt wird. Dadurch sinkt der hydrodynamische Gewebewiderstand drastisch ab, und die Clearance von Amyloid-beta steigt im Tiefschlaf auf mehr als das Doppelte an. Experimentelle Knockout-Mäuse, denen das AQP4-Gen gezielt entfernt wurde, zeigten hingegen eine um rund 65 Prozent verlangsamte Proteinelimination. Trotz dieser bahnbrechenden Befunde mahnen Fachgesellschaften zur Vorsicht: Die bisherigen Erkenntnisse stützen sich weitgehend auf Zwei-Photonen-Mikroskopie bei narkotisierten Kleintieren; inwieweit das System im aufrechten menschlichen Gehirn mit identischer Effizienz arbeitet, ist Gegenstand aktueller klinischer MRT-Validierungsstudien.`;

const PASSAGE_3_TEXT = `Die weltweite Ausbreitung von multiresistenten bakteriellen Krankheitserregern zählt laut Weltgesundheitsorganisation zu den gravierendsten Bedrohungen der modernen Medizin. Wenn selbst Reserveantibiotika gegen Erreger wie Carbapenem-resistente Acinetobacter baumannii oder Methicillin-resistente Staphylococcus aureus (MRSA) versagen, drohen selbst banale Wundinfektionen tödlich zu verlaufen. Vor diesem Hintergrund erlebt ein biologischer Therapieansatz eine weltweite Renaissance, der bereits zu Beginn des 20. Jahrhunderts vor der Entdeckung des Penicillins erprobt wurde: die Phagentherapie.

Bakteriophagen sind hochspezialisierte Viren, die ausschließlich Bakterienzellen befallen. Im lytischen Zyklus bindet ein Phage über spezifische Schwanzfasern an definierte Oberflächenrezeptoren der Wirtsbakterie, injiziert sein genetisches Material und programmiert den zellulären Stoffwechsel des Bakteriums zur Massenproduktion neuer Viruspartikel um. Durch die Synthese lytischer Enzyme (Endolysine) wird die bakterielle Zellwand schließlich von innen perforiert, die Bakterienzelle platzt auf (Lyse), und hunderte neugebildete Phagen werden freigesetzt, um benachbarte Zielkeime zu infizieren.

Der entscheidende pharmakologische Vorteil von Phagen gegenüber klassischen Breitbandantibiotika liegt in ihrer extremen Spezifität. Während Antibiotika oft als chemische Breitbandwaffen wirken und das physiologische menschliche Mikrobiom im Darm kollateral zerstören, eliminieren Phagen punktgenau nur den krankmachenden Stamm. Darüber hinaus nutzen moderne Behandlungsregime ein evolutionsbiologisches Prinzip, das als „bakterielles Steuern“ (Bacterial Steering) bezeichnet wird: Selektieren Bakterien unter dem Druck der Phagen Mutationen an ihren Oberflächenstrukturen, um einer Infektion zu entgehen, geschieht dies oft an Proteinen, die zugleich für bakterielle Effluxpumpen oder Virulenzfaktoren kodieren. Durch die Flucht vor dem Phagen verlieren die Bakterien somit häufig ihre ursprüngliche Antibiotikaresistenz oder büßen ihre Pathogenität ein.

Dennoch steht die breite klinische Anwendung vor erheblichen Hürden. Da Phagenstämme nur gegen eng umgrenzte Bakterienspezies wirksam sind, erfordert jede Therapie eine vorherige Isolierung des Keims und die Erstellung eines maßgeschneiderten „Phagogramms“. Zudem können phagentragende Präparate durch das menschliche Immunsystem als fremde Proteine erkannt und durch neutralisierende Antikörper inaktiviert werden. Schließlich stoßen die etablierten arzneimittelrechtlichen Zulassungsbehörden an strukturelle Grenzen: Die bestehenden Regelwerke wurden für statische chemische Moleküle geschaffen und eignen sich kaum für biologisch variable, sich selbst replizierende Phagengemische.`;

const PASSAGE_4_TEXT = `In biologischen Systemen vollbringen Kollektive von Organismen oft koordinierte Meisterleistungen, zu denen kein einzelnes Individuum der Gruppe fähig wäre. Ein Termitenvolk errichtet bis zu mehrere Meter hohe Bauten mit ausgeklügelten passiven Belüftungsschächten, Zugvögel fliegen in energiesparenden V-Formationen, und Fischschwärme vollziehen blitzschnelle Ausweichmanöver vor Fressfeinden. Das verblüffende Kennzeichen dieser sogenannten „Schwarmintelligenz“ besteht darin, dass die kollektive Koordination vollkommen ohne zentrale Lenkungsinstanz, Leittiere oder globale Baupläne zustande kommt.

Das grundlegende Organisationsprinzip beruht auf lokalen Interaktionen und einem Phänomen, das der französische Biologe Pierre-Paul Grassé als „Stigmergie“ bezeichnete: Individuen kommunizieren nicht direkt von Angesicht zu Angesicht, sondern indirekt über kontinuierliche Veränderungen ihrer unmittelbaren Umwelt. Wenn Ameisen auf Nahrungssuche gehen, markieren sie begangene Pfade mit flüchtigen Pheromonen. Kürzere Wegstrecken zwischen Nest und Futterquelle werden in derselben Zeiteinheit naturgemäß häufiger belaufen als längere Umwege. Dadurch kumuliert die Duftstoffkonzentration auf dem optimalen Pfad durch positive Rückkopplung rasant, während Pheromone auf ineffizienten Nebenrouten verdunsten. Aus simplen Reiz-Reaktions-Mustern einzelner Akteure emergiert auf Systemebene die rechnerisch optimale Wegelösung.

Dieses Prinzip dezentraler Selbstorganisation bietet herausragende Vorteile: Es ist inhärent fehlertolerant und robust. Fällt ein beträchtlicher Prozentsatz der Akteure durch Erschöpfung oder Fressfeinde aus, bricht die Funktionalität des Gesamtsystems keineswegs zusammen; andere Individuen führen die einfachen lokalen Verhaltensregeln ungestört fort.

In der modernen Nanomedizin dient dieses biologische Vorbild als Blaupause für die Entwicklung autonomer Mikrorobotersysteme. Anstatt hochkomplexe, kostspielige Miniaturmaschinen zu konstruieren, setzen Forschende auf Schwärme aus tausenden mikroskopischer Eisenoxid-Nanopartikel oder künstlich modifizierter Flagellenbakterien. Durch externe schwache Magnetfelder oder lokale chemische Konzentrationsgradienten angeregt, navigieren diese Partikelverbände kooperativ durch feinste Kapillargefäße, um solide Tumoren gezielt anzusteuern. Am Zielort können sie durch gemeinsame Aggregation die nutritive Blutversorgung des Malignoms selektiv blockieren (Tumorembolisation) oder durch hochfrequente magnetische Wechselfelder lokale Gewebeerwärmung (Hyperthermie) induzieren. Allerdings birgt die Translation in den lebenden Organismus erhebliche Risiken: Unvorhersehbare Strömungsturbulenzen in pathologisch veränderten Gefäßbetten können zur vorzeitigen Desintegration des Schwarms führen, was gefürchtete Thromboembolien in vitalen gesunden Organen provozieren kann.`;

export const GENERALPROBE_3_TV_PASSAGES: QcTvGp3Passage[] = [
  {
    id: "tv-gp3-p1",
    title: "Epigenetische Programmierung und der holländische Hungerwinter",
    topic: "Pränatale metabolische Prägung und epigenetische Mismatch-Hypothese",
    text: PASSAGE_1_TEXT,
    paragraphs: PASSAGE_1_TEXT.split("\n\n"),
    questionIds: ["TV-GP3-001", "TV-GP3-002", "TV-GP3-003"],
  },
  {
    id: "tv-gp3-p2",
    title: "Das glymphatische System und zerebrale Abfallbeseitigung",
    topic: "Liquor-Interstitium-Konvektion und schlafabhängige AQP4-Clearance",
    text: PASSAGE_2_TEXT,
    paragraphs: PASSAGE_2_TEXT.split("\n\n"),
    questionIds: ["TV-GP3-004", "TV-GP3-005", "TV-GP3-006"],
  },
  {
    id: "tv-gp3-p3",
    title: "Bakteriophagen und evolutionäre Resistenzüberwindung",
    topic: "Präzisions-Phagentherapie, lytischer Zyklus und Bacterial Steering",
    text: PASSAGE_3_TEXT,
    paragraphs: PASSAGE_3_TEXT.split("\n\n"),
    questionIds: ["TV-GP3-007", "TV-GP3-008", "TV-GP3-009"],
  },
  {
    id: "tv-gp3-p4",
    title: "Schwarmintelligenz, Stigmergie und biomedizinische Mikrorobotik",
    topic: "Dezentrale Selbstorganisation und Nanoroboter-Verbände in der Krebstherapie",
    text: PASSAGE_4_TEXT,
    paragraphs: PASSAGE_4_TEXT.split("\n\n"),
    questionIds: ["TV-GP3-010", "TV-GP3-011", "TV-GP3-012"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DIE 12 QUALITÄTSGESICHERTEN FRAGEN (GENERALPROBE #3)
// ─────────────────────────────────────────────────────────────────────────────

export const RAW_GENERALPROBE_3_TV_QUESTIONS: QcTvGp3QuestionRaw[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 1: Epigenetik & Hungerwinter (Fragen 1–3)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP3-001",
    passageId: "tv-gp3-p1",
    passageTitle: "Epigenetische Programmierung und der holländische Hungerwinter",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Pränatale Prägung",
    subtopic: "Befunddissoziation nach Trimenon",
    difficulty: "foundational",
    concept: "Vergleich der Auswirkungen mütterlicher Mangelernährung im 1. vs. 3. Trimenon",
    stem: "Welcher entscheidende Unterschied zeigte sich laut Text zwischen den Nachkommen, deren Mütter im ersten Trimenon hungerten, und jenen, deren Mütter erst im dritten Trimenon der Hungersnot ausgesetzt waren?",
    options: {
      A: "Nur die Nachkommen mit Mangelernährung im dritten Trimenon wiesen im Erwachsenenalter eine persistierende Hypomethylierung des IGF2-Gens auf.",
      B: "Kinder von Müttern mit Mangelernährung im ersten Trimenon kamen mit stark vermindertem Geburtsgewicht zur Welt, blieben aber im Alter stoffwechselgesund.",
      C: "Nachkommen aus dem ersten Trimenon entwickelten im Erwachsenenalter häufiger Fettleibigkeit und Herzerkrankungen, während jene aus dem dritten Trimenon zwar mit geringerem Geburtsgewicht geboren wurden, aber später keine erhöhte Fettleibigkeit zeigten.",
      D: "Beide Gruppen zeigten identische Raten an kardiovaskulären Spätschäden, unterschieden sich jedoch grundlegend in der Ausprägung der DNA-Basenmutationen.",
      E: "Die Nachkommen aus dem dritten Trimenon wiesen im Erwachsenenalter schwere Fettstoffwechselstörungen auf, während Nachkommen aus dem ersten Trimenon normalgewichtig blieben."
    },
    correct_answer: "C",
    explanation_correct: "In Absatz 2 wird explizit ausgeführt: Mütter, die im ersten Trimenon hungerten, hatten Kinder, die Jahrzehnte später erhöhte Raten an Adipositas und koronaren Herzkrankheiten aufwiesen. Nachkommen von Müttern aus dem dritten Trimenon kamen hingegen zwar mit vermindertem Geburtsgewicht zur Welt, entwickelten im Erwachsenenalter jedoch keine erhöhte Neigung zu Fettleibigkeit oder kardiovaskulären Leiden.",
    explanations_incorrect: {
      A: "Widerspricht Absatz 4: Die Hypomethylierung am IGF2-Gen wurde bei Personen mit früher pränataler Mangelexposition nachgewiesen, nicht beim dritten Trimenon.",
      B: "Verdreht die Befunde von Absatz 2: Das verminderte Geburtsgewicht betraf die Nachkommen aus dem dritten Trimenon, die Spätschäden (Adipositas) jene aus dem ersten Trimenon.",
      D: "Falsch, da beide Gruppen gerade keine identischen Spätschäden zeigten und der Text in Absatz 4 betont, dass keine Mutationen der DNA-Basensequenz vorlagen.",
      E: "Kehrt die im Text beschriebenen Folgen der beiden Trimena genau ins Gegenteil um."
    },
    evidenceLocation: "Absatz 2",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-002",
    passageId: "tv-gp3-p1",
    passageTitle: "Epigenetische Programmierung und der holländische Hungerwinter",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Pränatale Prägung",
    subtopic: "Mismatch-Konzept & Thrifty-Phenotype",
    difficulty: "intermediate",
    concept: "Bedeutung des biologischen Mismatch im Rahmen der Thrifty-Phenotype-Hypothese",
    stem: "Worin besteht nach den Darlegungen des Textes das eigentliche pathogenetische Problem des sogenannten „Mismatch“?",
    options: {
      A: "Darin, dass ein pränatal adaptiv auf Nahrungsknappheit eingestellter Stoffwechsel nach der Geburt auf ein dauerhaftes energetisches Überangebot trifft.",
      B: "In einem Missverhältnis zwischen ererbten Basenmutationen des Genoms und fehlerhaft abgelesenen Wachstumsfaktoren.",
      C: "In der Unfähigkeit der mütterlichen Plazenta, biochemische Signale über die äußere Umwelt an den Fetus weiterzuleiten.",
      D: "Darin, dass das kindliche Gehirn nach der Geburt mehr Kalorien verbraucht, als Muskelmasse und Bauchspeicheldrüse bereitstellen können.",
      E: "In einer irreparablen Zerstörung des IGF2-Gens durch toxische Abbauprodukte während der Hungersnot."
    },
    correct_answer: "A",
    explanation_correct: "In Absatz 4 wird das Mismatch-Konzept präzise definiert: Das pathogenetische Problem entsteht, wenn ein Organismus, dessen Stoffwechsel pränatal adaptiv auf eine prognostizierte karge Umwelt programmiert wurde, nach der Geburt auf den energiereichen Nahrungsmittelüberfluss moderner Gesellschaften trifft.",
    explanations_incorrect: {
      B: "Falsch, da der Text in Absatz 4 ausdrücklich festhält, dass keine Mutationen der DNA-Sequenz vorliegen, sondern epigenetische Modifikationen.",
      C: "Widerspricht Absatz 3: Die Plazenta leitet die biochemischen Signale über die Mangelernährung gerade zuverlässig an den Fetus weiter.",
      D: "Verzerrt die Aussage aus Absatz 3 über die fetale Organpriorisierung während der pränatalen Mangelphase.",
      E: "Widerspricht Absatz 4: Es liegt keine Zerstörung des Gens vor, sondern eine veränderte Methylierung (Hypomethylierung) bei intakter DNA-Sequenz."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-003",
    passageId: "tv-gp3-p1",
    passageTitle: "Epigenetische Programmierung und der holländische Hungerwinter",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Pränatale Prägung",
    subtopic: "Logische Inferenz & Kausalitätsgrenzen",
    difficulty: "advanced",
    concept: "Schlussfolgerung bezüglich pränataler Umweltsignale und molekularer Mechanismen",
    stem: "Welche der folgenden Schlussfolgerungen lässt sich am ehesten direkt aus den Ausführungen des gesamten Textes ableiten?",
    options: {
      A: "Pränatale Mangelernährung führt unabhängig vom Zeitpunkt der Schwangerschaft stets zu denselben metabolischen Spätfolgen im Erwachsenenalter.",
      B: "Ein niedriges Geburtsgewicht ist die primäre und hinreichende Ursache für die spätere Entstehung von Herz-Kreislauf-Erkrankungen.",
      C: "Epigenetische Markierungen wie DNA-Methylierungen sind instabile Übergangsphänomene, die sich innerhalb weniger Jahre nach Normalisierung der Ernährung vollständig zurückbilden.",
      D: "Die evolutive Programmierung auf einen sparsamen Stoffwechsel war ursprünglich als pathologische Fehlentwicklung ohne biologischen Nutzen angelegt.",
      E: "Frühe Umweltbedingungen können die Genaktivität des Organismus über Jahrzehnte hinweg stabil prägen, ohne die zugrunde liegende genetische Sequenz zu verändern."
    },
    correct_answer: "E",
    explanation_correct: "Absatz 4 belegt direkt, dass Personen mit früher Mangelexposition noch sechs Jahrzehnte später eine spezifische Hypomethylierung am IGF2-Gen aufwiesen, wobei die DNA-Sequenz selbst völlig unverändert blieb. Dies beweist die jahrzehntelange funktionelle Stabilität epigenetischer Umweltprägungen ohne Sequenzmutationen.",
    explanations_incorrect: {
      A: "Widerspricht Absatz 2, wonach die Spätfolgen extrem vom Trimenon abhängen (starke Folgen im ersten Trimenon, keine im dritten).",
      B: "Widerspricht Absatz 2: Kinder aus dem dritten Trimenon hatten ein niedriges Geburtsgewicht, entwickelten aber gerade keine erhöhte Neigung zu kardiovaskulären Leiden.",
      C: "Widerspricht Absatz 4: Die epigenetische Hypomethylierung am IGF2-Gen war noch sechs Jahrzehnte später stabil nachweisbar.",
      D: "Widerspricht Absatz 3 und 4: Die Programmierung war eine biologische Anpassungsstrategie (Adaptation) für karge Zeiten, kein primärer Defekt."
    },
    evidenceLocation: "Absatz 3 und 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 2: Das glymphatische System (Fragen 4–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP3-004",
    passageId: "tv-gp3-p2",
    passageTitle: "Das glymphatische System und zerebrale Abfallbeseitigung",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Glymphatisches System",
    subtopic: "Molekularer Mechanismus von AQP4",
    difficulty: "intermediate",
    concept: "Rolle und Lokalisation der Aquaporin-4-Wasserkanäle",
    stem: "Welche anatomische und funktionelle Rolle weisen die Ausführungen des Textes den Aquaporin-4-Kanälen (AQP4) zu?",
    options: {
      A: "Sie bilden pulsatile Muskelpumpen in den Wänden der großen Hirnarterien, um das Blut synchron mit dem Herzschlag anzutreiben.",
      B: "Sie sind in hoher Dichte an den Endfüßen von Astrozyten lokalisiert und ermöglichen den widerstandsarmen Einstrom von Liquor in das Interstitium.",
      C: "Sie transportieren Amyloid-beta aktiv unter hohem ATP-Verbrauch direkt durch die geschlossene Blut-Hirn-Schranke in das arterielle Blut.",
      D: "Sie verhindern im Wachzustand ein Anschwellen des Gehirns, indem sie den interstitiellen Raum um 60 Prozent komprimieren.",
      E: "Sie dienen als sensorische Rezeptoren, die das Gehirn über das Einsetzen des REM-Schlafs informieren."
    },
    correct_answer: "B",
    explanation_correct: "In Absatz 3 beschreibt der Text: Die Gefäßendfüße von Astrozyten umhüllen die Kapillaren und exprimieren in extrem hoher Dichte Aquaporin-4 (AQP4). Durch diese Kanäle strömt Liquor mit geringem Widerstand in das Interstitium ein, um den zellulären Zwischenraum zu durchspülen.",
    explanations_incorrect: {
      A: "Falsch: Die pulsatilen Druckwellen gehen von den arteriellen Gefäßwänden aus (Absatz 2), AQP4 ist ein Wasserkanal an Astrozytenendfüßen.",
      C: "Widerspricht Absatz 3: Der Abtransport erfolgt passiv über einen Konvektionsstrom in perivenöse Räume, nicht als ATP-abhängiger Rückwärtstransport in Arterien.",
      D: "Verdreht Absatz 4: Die Weitung des Interstitiums um 60 Prozent geschieht im Schlaf durch Schrumpfung gliaaler Zellkörper, AQP4 ist der Wasserkanal.",
      E: "Wird im Text nirgends erwähnt und entbehrt jeder textlichen Grundlage."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-005",
    passageId: "tv-gp3-p2",
    passageTitle: "Das glymphatische System und zerebrale Abfallbeseitigung",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Glymphatisches System",
    subtopic: "Schlafphysiologie & Clearance-Steigerung",
    difficulty: "intermediate",
    concept: "Mechanismus der gesteigerten Abfallclearance während des Schlafs",
    stem: "Warum ist die Beseitigung potentiell toxischer Stoffwechselmetabolite wie Amyloid-beta während des Schlafs deutlich effizienter als im Wachzustand?",
    options: {
      A: "Weil die Herzfrequenz im Schlaf stark ansteigt und dadurch die arteriellen Pulswellen beschleunigt werden.",
      B: "Weil Astrozyten im Schlaf vermehrt toxische Proteine phagozytieren und enzymatisch abbauen.",
      C: "Weil die Produktion von Amyloid-beta im Tiefschlaf vollständig eingestellt wird.",
      D: "Weil sich der interstitielle Raum durch reversible Schrumpfung gliaaler Zellkörper ausweitet, wodurch der Strömungswiderstand des Gewebes drastisch sinkt.",
      E: "Weil das zerebrale Blutvolumen im Schlaf um 60 Prozent abnimmt und der Liquor dadurch ungehindert abfließen kann."
    },
    correct_answer: "D",
    explanation_correct: "In Absatz 4 wird präzise dargelegt: Während des Schlafs weitet sich der interstitielle Raum des Kortex um rund 60 Prozent aus, bedingt durch eine reversible Schrumpfung astrozytärer Zellkörper. Dadurch sinkt der hydrodynamische Gewebewiderstand drastisch ab, was die Clearance von Amyloid-beta auf mehr als das Doppelte ansteigen lässt.",
    explanations_incorrect: {
      A: "Widerspricht allgemeinen physiologischen Tatsachen und wird im Text nicht behauptet; getrieben wird der Fluss durch normale Pulswellen (Absatz 2).",
      B: "Wird im Text nicht erwähnt; beschrieben wird eine mechanische Auswaschung (Konvektionsstrom), kein astrozytärer Phagozytoseprozess.",
      C: "Der Text beschreibt eine Verdopplung der Clearance (Abtransport), nicht ein Erliegen der Proteinproduktion.",
      E: "Falsch: Um 60 Prozent weitet sich der interstitielle Raum aus, nicht das Blutvolumen nimmt ab."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-006",
    passageId: "tv-gp3-p2",
    passageTitle: "Das glymphatische System und zerebrale Abfallbeseitigung",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Glymphatisches System",
    subtopic: "Methodische Limitation & Translation",
    difficulty: "foundational",
    concept: "Einschränkung der bisherigen tierexperimentellen Datenlage",
    stem: "Welche wesentliche methodische Einschränkung bezüglich der bisherigen Forschungsergebnisse zum glymphatischen System hebt der Text am Ende hervor?",
    options: {
      A: "Die bisherigen Daten stammen überwiegend aus Untersuchungen an narkotisierten Kleintieren, weshalb die Übertragbarkeit auf das aufrechte menschliche Gehirn noch klinisch validiert werden muss.",
      B: "Die gentechnische Ausschaltung des AQP4-Gens führte bei Mäusen zu keiner messbaren Veränderung der Proteinelimination.",
      C: "Mit der Zwei-Photonen-Mikroskopie lassen sich Flüssigkeitsströme im Gehirn grundsätzlich nicht optisch nachweisen.",
      D: "Amyloid-beta und Tau-Proteine lagern sich ausschließlich bei Nagetieren, nicht aber bei Menschen im Hirngewebe ab.",
      E: "Das glymphatische System funktioniert nachweislich nur in künstlich induzierter Narkose, nicht aber im physiologischen Schlaf."
    },
    correct_answer: "A",
    explanation_correct: "Im Schlusssatz von Absatz 4 führt der Text explizit aus: Fachgesellschaften mahnen zur Vorsicht, da sich die bisherigen Erkenntnisse weitgehend auf Zwei-Photonen-Mikroskopie bei narkotisierten Kleintieren stützen; inwieweit das System im aufrechten menschlichen Gehirn mit identischer Effizienz arbeitet, ist Gegenstand aktueller klinischer Validierungsstudien.",
    explanations_incorrect: {
      B: "Widerspricht Absatz 4: AQP4-Knockout-Mäuse zeigten eine deutliche (um 65 Prozent) verlangsamte Proteinelimination.",
      C: "Widerspricht Absatz 4: Gerade mittels Zwei-Photonen-Mikroskopie wurden die bahnbrechenden Entdeckungen an Kleintieren gemacht.",
      D: "Widerspricht Absatz 1: Die Ablagerung von Amyloid-beta und Tau ist das Kennzeichen menschlicher neurodegenerativer Demenzen.",
      E: "Widerspricht Absatz 4: Der Text hebt hervor, dass die Drainage im natürlichen Schlaf hochgradig aktiv ist."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 3: Phagentherapie (Fragen 7–9)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP3-007",
    passageId: "tv-gp3-p3",
    passageTitle: "Bakteriophagen und evolutionäre Resistenzüberwindung",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Phagentherapie",
    subtopic: "Bacterial Steering & Trade-off",
    difficulty: "intermediate",
    concept: "Mechanismus des evolutionären 'Bacterial Steering'",
    stem: "Was versteht der Text unter dem evolutionsbiologischen Prinzip des „bakteriellen Steuerns“ (Bacterial Steering)?",
    options: {
      A: "Die gentechnische Umprogrammierung von Phagen, damit diese eigenständig Antibiotika produzieren und abgeben.",
      B: "Die Fähigkeit von Bakterien, Phagen aktiv durch chemotaktische Signale von empfindlichen Geweben wegzulenken.",
      C: "Die Ausnutzung eines evolutionären Dilemmas: Weichen Bakterien durch Mutationen dem Phagenbefall aus, verlieren sie häufig zugleich Resistenzen oder Pathogenität.",
      D: "Den Einsatz von Breitbandantibiotika, um die Vermehrungsrate therapeutischer Phagen im menschlichen Darm künstlich zu beschleunigen.",
      E: "Die gezielte Zerstörung der menschlichen Immunantwort, damit Phagen ungestört intrazellulär replizieren können."
    },
    correct_answer: "C",
    explanation_correct: "In Absatz 3 erklärt der Text das Prinzip des „Bacterial Steering“: Wenn Bakterien unter Selektionsdruck Mutationen an ihren Oberflächenstrukturen entwickeln, um Phagen zu entgehen, betrifft dies oft Proteine, die zugleich für Effluxpumpen oder Virulenz kodieren. Durch die Flucht vor dem Phagen büßen die Bakterien daher oft ihre Antibiotikaresistenz oder Pathogenität ein.",
    explanations_incorrect: {
      A: "Phagen produzieren keine Antibiotika, sondern vermehren sich im Bakterium und nutzen Endolysine zur Lyse (Absatz 2).",
      B: "Verdreht die Kausalität: Nicht Bakterien lenken Phagen weg, sondern Mediziner nutzen den Selektionsdruck auf Bakterien aus.",
      D: "Widerspricht dem Text: Phagentherapie zielt darauf ab, Antibiotika zu ergänzen oder zu ersetzen, nicht Phagen durch Antibiotika anzutreiben.",
      E: "Völlig abwegig: Phagen befallen nur Bakterien, keine menschlichen Zellen (Absatz 2)."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-008",
    passageId: "tv-gp3-p3",
    passageTitle: "Bakteriophagen und evolutionäre Resistenzüberwindung",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Phagentherapie",
    subtopic: "Spezifität vs. Breitbandantibiotika",
    difficulty: "foundational",
    concept: "Vergleich der Wirkungsweise von Phagen und Breitbandantibiotika",
    stem: "Welchen primären pharmakologischen Vorteil bieten Phagen laut Text im direkten Vergleich zu konventionellen Breitbandantibiotika?",
    options: {
      A: "Phagen töten neben Bakterien auch pathogene Pilze und Parasiten vollständig ab.",
      B: "Phagen sind chemisch synthetisierte Moleküle, die ohne Kühlung jahrelang stabil gelagert werden können.",
      C: "Phagen wirken absolut unspezifisch und können gegen jede beliebige bakterielle Infektion sofort ohne Vortestung eingesetzt werden.",
      D: "Phagen werden vom menschlichen Immunsystem niemals als Fremdkörper erkannt und rufen keinerlei Antikörperbildung hervor.",
      E: "Phagen besitzen eine extreme Wirtsspezifität und eliminieren den Zielkeim punktgenau, ohne das nützliche physiologische Mikrobiom zu zerstören."
    },
    correct_answer: "E",
    explanation_correct: "In Absatz 3 hebt der Text hervor: Der entscheidende Vorteil liegt in der extremen Spezifität. Während Breitbandantibiotika unselektiv das physiologische Mikrobiom im Darm schädigen, eliminieren Phagen punktgenau nur den krankmachenden Bakterienstamm.",
    explanations_incorrect: {
      A: "Widerspricht Absatz 2: Phagen befallen ausschließlich Bakterienzellen.",
      B: "Widerspricht Absatz 4: Phagen sind biologisch variable Viren, keine statischen chemischen Moleküle.",
      C: "Widerspricht Absatz 4: Wegen ihrer engen Spezifität ist zwingend ein individuelles Phagogramm vorab erforderlich.",
      D: "Widerspricht Absatz 4: Das menschliche Immunsystem kann Phagen als Fremdantigene erkennen und neutralisierende Antikörper bilden."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-009",
    passageId: "tv-gp3-p3",
    passageTitle: "Bakteriophagen und evolutionäre Resistenzüberwindung",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Phagentherapie",
    subtopic: "Klinische & regulatorische Hürden",
    difficulty: "advanced",
    concept: "Einschränkungen und regulatorische Herausforderungen der Phagentherapie",
    stem: "Welche der folgenden Aussagen über die Herausforderungen der Phagentherapie wird durch den Text ausdrücklich gestützt?",
    options: {
      A: "Phagen sind zu groß, um die bakterielle Peptidoglykanschicht zu durchdringen, weshalb sie vorab chemisch modifiziert werden müssen.",
      B: "Die Zulassungsbehörden lehnen Phagen ab, weil sie erwiesenermaßen gesunde menschliche Gewebezellen infizieren und lysieren.",
      C: "Gegen Bakteriophagen können Bakterien prinzipiell keine Mutationen oder Abwehrmechanismen entwickeln.",
      D: "Die bestehenden arzneimittelrechtlichen Zulassungsverfahren sind auf unveränderliche chemische Wirkstoffe ausgelegt und passen kaum zu dynamischen biologischen Phagengemischen.",
      E: "Da Phagen universell gegen alle gramnegativen Keime wirken, sind patientenspezifische Erregertestungen überflüssig."
    },
    correct_answer: "D",
    explanation_correct: "In Absatz 4 führt der Text wörtlich aus: Etablierte arzneimittelrechtliche Zulassungsbehörden stoßen an Grenzen, da bestehende Regelwerke für statische chemische Moleküle geschaffen wurden und sich kaum für biologisch variable, sich selbst replizierende Phagengemische eignen.",
    explanations_incorrect: {
      A: "Widerspricht Absatz 2: Phagen injizieren ihr Erbgut von außen und lysieren die Zellwand von innen über körpereigene Endolysine.",
      B: "Widerspricht Absatz 2: Phagen befallen ausschließlich Bakterien, niemals menschliche Zellen.",
      C: "Widerspricht Absatz 3: Bakterien selektieren unter Phagendruck sehr wohl Mutationen (was beim Bacterial Steering ausgenutzt wird).",
      E: "Widerspricht Absatz 4: Ein Phagenpräparat erfordert zwingend eine Isolierung des Keims und die Erstellung eines Phagogramms."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 4: Schwarmintelligenz & Mikrorobotik (Fragen 10–12)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP3-010",
    passageId: "tv-gp3-p4",
    passageTitle: "Schwarmintelligenz, Stigmergie und biomedizinische Mikrorobotik",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Schwarmintelligenz",
    subtopic: "Stigmergie & Pheromon-Rückkopplung",
    difficulty: "intermediate",
    concept: "Funktionsprinzip der Stigmergie bei sozialen Insekten",
    stem: "Wie funktioniert nach den Erläuterungen des Textes das Prinzip der „Stigmergie“ bei der Nahrungssuche von Ameisen?",
    options: {
      A: "Einzelne Kundschafterameisen kehren zum Nest zurück und weisen anderen Tieren durch Berührungsreize den Weg.",
      B: "Die Kommunikation erfolgt indirekt über Duftstoffe in der Umwelt: Kürzere Pfade werden häufiger begangen, wodurch das Pheromonsignal dort durch positive Rückkopplung rascher anwächst.",
      C: "Die Königin überwacht die Pheromonkonzentrationen aus der Ferne und steuert die Ameisenströme über akustische Signale.",
      D: "Ameisen meiden Pheromone grundsätzlich und orientieren sich stattdessen ausschließlich am Einfallswinkel des Sonnenlichts.",
      E: "Längere Wege reichern mehr Duftstoffe an, weil die Tiere dort mehr Zeit verbringen, wodurch der Schwarm auf Umwege geleitet wird."
    },
    correct_answer: "B",
    explanation_correct: "In Absatz 2 wird Stigmergie detailliert erklärt: Die Kommunikation erfolgt indirekt über Pheromone in der Umwelt. Kürzere Wege werden in derselben Zeiteinheit häufiger begangen; durch positive Rückkopplung kumuliert dort das Signal rasch, während es auf Nebenrouten verdunstet, sodass die optimale Route emergiert.",
    explanations_incorrect: {
      A: "Widerspricht Absatz 2: Die Individuen kommunizieren gerade nicht von Angesicht zu Angesicht, sondern indirekt über die Umwelt.",
      C: "Widerspricht Absatz 1 und 2: Schwarmintelligenz kommt vollkommen ohne Leittiere oder zentrale Instanzen aus.",
      D: "Widerspricht Absatz 2: Ameisen markieren Pfade mit Pheromonen und folgen der Duftspur.",
      E: "Verdreht die Kausalität aus Absatz 2: Kürzere Strecken werden in derselben Zeiteinheit häufiger frequentiert und akkumulieren daher mehr Pheromon."
    },
    evidenceLocation: "Absatz 2",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-011",
    passageId: "tv-gp3-p4",
    passageTitle: "Schwarmintelligenz, Stigmergie und biomedizinische Mikrorobotik",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Schwarmintelligenz",
    subtopic: "Robustheit dezentraler Systeme",
    difficulty: "intermediate",
    concept: "Ursache für die Fehlertoleranz und Ausfallsicherheit von Schwärmen",
    stem: "Worauf beruht laut Text die besondere funktionelle Robustheit und Fehlertoleranz dezentraler Schwärme?",
    options: {
      A: "Darauf, dass der Ausfall einzelner Akteure das Gesamtsystem nicht gefährdet, da alle Individuen denselben einfachen lokalen Verhaltensregeln folgen.",
      B: "Auf der Anwesenheit mehrerer redundanter Leittiere, die bei Ausfall der Führung sofort einspringen.",
      C: "Auf der Unzerstörbarkeit der einzelnen Nanopartikel gegenüber jeglichen chemischen Einflüssen.",
      D: "Auf einem zentralen globalen Speicherchip, der in jedem Roboter den vollständigen Bauplan der Zielstruktur bereithält.",
      E: "Darauf, dass Schwärme ausschließlich in absolut strömungsfreien Milieus operieren können."
    },
    correct_answer: "A",
    explanation_correct: "In Absatz 3 hebt der Text hervor: Das System ist inhärent fehlertolerant und robust, weil der Ausfall eines beträchtlichen Prozentsatzes der Akteure die Funktion nicht beeinträchtigt – andere Individuen führen die einfachen lokalen Verhaltensregeln ungestört fort.",
    explanations_incorrect: {
      B: "Widerspricht Absatz 1: Es gibt weder Leittiere noch Führungshierarchien im Schwarm.",
      C: "Wird im Text nicht behauptet; die Robustheit ist eine Eigenschaft der dezentralen Organisation, nicht der Materialunzerstörbarkeit.",
      D: "Widerspricht Absatz 1 und 2: Die Steuerung erfolgt ohne globale Pläne oder zentrale Speicher, rein über lokale Interaktion.",
      E: "Widerspricht Absatz 4: Die Partikel werden gerade im Kreislaufsystem eingesetzt, wo Strömungen herrschen."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP3-012",
    passageId: "tv-gp3-p4",
    passageTitle: "Schwarmintelligenz, Stigmergie und biomedizinische Mikrorobotik",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Schwarmintelligenz",
    subtopic: "Mikrorobotik & Biomedizinisches Risiko",
    difficulty: "advanced",
    concept: "Medizinische Wirkmechanismen und Risiken beim Einsatz von Nanorobotersystemen",
    stem: "Welche therapeutischen Mechanismen und welches damit verbundene spezifische Risiko werden für den Einsatz von Mikrorobotersystemen in der Onkologie geschildert?",
    options: {
      A: "Mechanismus: Phagozytose von Tumorzellen; Risiko: Genetische Mutationen gesunder Blutzellen durch Pheromonaufnahme.",
      B: "Mechanismus: Globale Bestrahlung des Körpers; Risiko: Überhitzung des gesamten Gehirns durch Magnetfelder.",
      C: "Mechanismus: Umwandlung von Eisenoxid in Sauerstoff; Risiko: Hypoxie in gesunden Nachbargeweben.",
      D: "Mechanismus: Tumorembolisation oder Hyperthermie; Risiko: Schwarm-Desintegration durch Turbulenzen mit Gefahr von Thromboembolien in gesunden Organen.",
      E: "Mechanismus: Chemische Auflösung der Gefäßwände; Risiko: Sofortige Immunlähmung des Patienten."
    },
    correct_answer: "D",
    explanation_correct: "In Absatz 4 beschreibt der Text die Mechanismen: Selektiver Verschluss der Tumorgefäße (Tumorembolisation) oder lokale Erwärmung durch Wechselfelder (Hyperthermie). Als spezifisches Risiko wird genannt: Unvorhergesehene Strömungsturbulenzen in pathologischen Gefäßen können zur Desintegration des Schwarms führen, was Thromboembolien in gesunden Organen auslösen kann.",
    explanations_incorrect: {
      A: "Phagozytose und genetische Mutationen durch Pheromone werden nirgends erwähnt und entbehren jeder Textgrundlage.",
      B: "Der Text beschreibt lokale Hyperthermie am Tumor, keine globale Bestrahlung oder Gehirnüberhitzung.",
      C: "Eisenoxid wird nicht in Sauerstoff umgewandelt; es dient als magnetisch steuerbares Material.",
      E: "Völlig verfälscht: Die Gefäßwände werden nicht aufgelöst, sondern die Blutzufuhr wird verschlossen (Embolisation)."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "3.0_12_items_medat_spec"
    }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// HILFSFUNKTIONEN ZUR NORMALISIERUNG
// ─────────────────────────────────────────────────────────────────────────────

function optionKeyToIndex(k: "A" | "B" | "C" | "D" | "E"): number {
  switch (k) {
    case "A": return 0;
    case "B": return 1;
    case "C": return 2;
    case "D": return 3;
    case "E": return 4;
  }
}

function mapDifficulty(diff: "foundational" | "intermediate" | "advanced"): "Leicht" | "Mittel" | "Schwer" {
  switch (diff) {
    case "foundational": return "Leicht";
    case "intermediate": return "Mittel";
    case "advanced": return "Schwer";
  }
}

function buildComprehensiveExplanation(
  correct: string,
  incorrect: Record<string, string>,
  evidence?: string
): string {
  const distractorKeys = Object.keys(incorrect).sort();
  const evidenceHeader = evidence ? `**Textbeleg (${evidence}):**\n\n` : "";
  if (distractorKeys.length === 0) return `${evidenceHeader}${correct}`;

  const distractorRows = distractorKeys.map((k) => `• **Option ${k}:** ${incorrect[k]}`).join("\n\n");
  return `${evidenceHeader}${correct}\n\n**Distraktor-Analyse & Begründung der Falschantworten:**\n\n${distractorRows}`;
}

/**
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #3 Runtime-Engine
 */
export const GENERALPROBE_3_TV_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_TV_QUESTIONS.map(
  (q) => {
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
      section: "TV",
      subjectId: "tv-main",
      chapterId: "tv-scipass",
      topic: q.passageTitle,
      concept: q.concept,
      passage: q.passageText,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect, q.evidenceLocation),
      tags: ["TV", "Textverständnis", "Generalprobe #3", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "3.0_12_items_medat_spec",
      setOrder: 3,
    };
  }
);
