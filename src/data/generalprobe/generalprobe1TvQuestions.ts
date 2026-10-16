/**
 * MedAT-H Textverständnis (TV) — 12-Aufgaben-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #1 (TV-Testteil, exakt 12 Aufgaben).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - Gesamt-Testtag: 221 gewertete Aufgaben (BMS 94, TV 12, KFF 75, SEK 40) + 8 GM-Gedächtniskarten.
 * - TV Testdauer: 35 Minuten Bearbeitungszeit (~175 Sekunden pro Aufgabe).
 * - 4 wissenschaftliche Lesepassagen mit je 3 zugeordneten, textgebundenen Multiple-Choice-Fragen.
 * - 5 Antwortoptionen je Aufgabe (A–E), exakt eine wissenschaftlich und textlogisch zutreffende Antwort.
 * 
 * Alle Aufgaben sind strikt aus dem jeweiligen Textauszug heraus lösbar (reine Lesekompetenz,
 * kein biomedizinisches oder ökologisches Fach-Vorwissen erforderlich).
 * 
 * Fragetypen & Formate:
 * - Direktes Textdetail / Begriffsdefinition
 * - Kausalanalyse & experimentelle Befunddissoziation
 * - Logische Inferenz & Kernaussage / Autorenurteil
 * - Negativ-Identifikation ("widerspricht den Darlegungen des Textes")
 * - Aussagenkombination mit römischen Ziffern (I, II, III, IV)
 * 
 * Schwierigkeitsverteilung (präzise kalibriert):
 * - 3 Leicht / Grundlagen (Foundational) (25,0 %): Q001, Q007, Q010
 * - 6 Mittel / Fortgeschritten (Intermediate) (50,0 %): Q002, Q003, Q004, Q006, Q008, Q011
 * - 3 Schwer / Komplex (Advanced) (25,0 %): Q005, Q009, Q012
 * 
 * Antwortschlüssel (natürlich randomisiert & unvorhersehbar ausbalanciert, keine Repetition):
 * - A: 2 (Q003, Q007)
 * - B: 3 (Q001, Q006, Q011)
 * - C: 2 (Q005, Q010)
 * - D: 3 (Q004, Q008, Q012)
 * - E: 2 (Q002, Q009)
 * Sequenz: B - E - A - D - C - B - A - D - E - C - B - D
 */

import type { StoredQuestion } from "../questions/types";

export interface QcTvPassage {
  id: string;
  title: string;
  topic: string;
  text: string;
  paragraphs: string[];
  questionIds: string[];
}

export interface QcTvQuestionRaw {
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
// DIE 4 WISSENSCHAFTLICHEN LESEPASSAGEN
// ─────────────────────────────────────────────────────────────────────────────

const PASSAGE_1_TEXT = `Lange Zeit galt Schlaf in den Neurowissenschaften als rein passiver Erholungszustand des Gehirns. Moderne bildgebende und elektrophysiologische Untersuchungen belegen jedoch, dass während der verschiedenen Schlafphasen hochgradig organisierte neuronale Prozesse ablaufen, die für das Lernen unverzichtbar sind. Insbesondere bei der Überführung von Informationen aus dem kurzzeitigen Zwischenspeicher in das dauerhafte Langzeitgedächtnis – der sogenannten Gedächtniskonsolidierung – kommt der zyklischen Abfolge von Slow-Wave-Schlaf (Tiefschlaf mit langsamen Delta-Wellen) und REM-Schlaf (Rapid Eye Movement) eine komplementäre Rolle zu.

Nach der von Giulio Tononi formulierten „Synaptischen Homöostase-Hypothese“ führt das Wachleben durch ständige Reizaufnahme zu einer fortschreitenden Netto-Verstärkung (Potenzierung) synaptischer Verbindungen im Kortex. Dieser Zustand verbraucht unverhältnismäßig viel metabolische Energie und begrenzt den verfügbaren zellulären Raum für Neuverschaltungen. Während des Slow-Wave-Schlafs findet daher eine globale, synaptische Abwärtsregulierung („Synaptic Downscaling“) statt: Schwächere synaptische Kontakte werden gezielt eliminiert, während besonders häufig aktivierte, robuste Verknüpfungen erhalten bleiben. Dadurch sinkt der neuronale Energieverbrauch, und das Grundrauschen im Netzwerk wird reduziert, was das Signal-Rausch-Verhältnis für wesentliche Gedächtnisspuren schärft.

Eine experimentelle Studie an einem Kognitionszentrum verglich zwei Gruppen von Probanden, die tagsüber komplexe deklarative Faktenfolgen sowie motorische Sequenzen einübten. Gruppe A schlief anschließend regulär acht Stunden, während Gruppe B während der ersten vier Stunden durch sanfte akustische Reize selektiv am Eintritt in den Tiefschlaf gehindert wurde; die Gesamtschlafdauer und der REM-Anteil blieben jedoch identisch. Beim anschließenden morgendlichen Abruf zeigte Gruppe B bei den motorischen Sequenzen keinerlei Einbußen, wies jedoch bei den deklarativen Fakten eine um 32 Prozent geringere Reproduktionsleistung auf als Gruppe A.

Die Autorinnen und Autoren schlossen daraus, dass der Tiefschlaf primär für die Konsolidierung deklarativer Inhalte – vermittelt über synchrone Oszillationen zwischen Hippocampus und Neokortex – erforderlich ist. Demgegenüber wird die Festigung prozeduraler und motorischer Fertigkeiten vorwiegend mit phasischen Aktivitätsmustern des späteren REM-Schlafs assoziiert. Interessanterweise zeigte sich bei einer zweiten Messung nach 48 Stunden, dass Gruppe B das Leistungsdefizit bei den Fakten auch nach einer ungestörten Folgenacht nicht vollständig kompensieren konnte, was auf ein zeitkritisches Konsolidierungsfenster in den ersten Stunden nach dem initialen Enkodieren hinweist.

Diese Befunde unterstreichen, dass Schlafdauer allein kein hinreichender Parameter für regenerative kognitive Prozesse ist. Vielmehr bestimmt die ungestörte architektonische Sequenz der Schlafstadien, welche Gedächtnissysteme stabilisiert werden. Schlafentzug entfaltet seine schädliche Wirkung somit nicht primär durch unspezifische Erschöpfung, sondern durch die gezielte Störung neurokognitiver Phasensynchronisationen.`;

const PASSAGE_2_TEXT = `Mit dem fortschreitenden Klimawandel verschieben sich im Frühjahr die jahreszeitlichen Entwicklungsphasen (Phänologie) vieler mitteleuropäischer Pflanzen- und Tierarten. Da sich einzelne Organismengruppen jedoch mit unterschiedlicher Geschwindigkeit an die steigenden Durchschnittstemperaturen anpassen, droht eine funktionelle Entkopplung eng aufeinander abgestimmter ökologischer Interaktionen. Dieses Phänomen wird in der Waldökologie als phänologische Asynchronie bezeichnet.

Besonders prägnant zeigt sich diese Entkopplung im Nahrungsnetz von Rotbuchen (Fagus sylvatica), den Raupen des Kleinen Frostspanners (Operophtera brumata) und standorttreuen Brutvögeln wie der Blaumeise (Cyanistes caeruleus). Der Blattaustrieb der Buchen wird maßgeblich durch zwei Faktoren gesteuert: die winterliche Kälteperiode (Chilling-Bedarf) und die Photoperiode (Tageslänge). Demgegenüber reagiert der Schlupf der Frostspannerlarven nahezu linear auf die akkumulierte Frühjahrswärme der bodennahen Luftschichten. Erwärmt sich das Frühjahr vorzeitig, schlüpfen die Raupen, noch bevor die Buchenknospen aufbrechen; die Junglarven verhungern mangels zarter Blattnahrung. Alternativ schlüpfen die Raupen zeitgleich mit dem verfrühten Austrieb, während die Blaumeisen ihren Brutbeginn an der Tageslänge ausrichten und ihre Jungen erst aufziehen, wenn das Maximum der Raupenbiomasse bereits überschritten ist.

Lange wurde angenommen, dass derartige phänologische Verschiebungen unausweichlich zu drastischen Vitalitätsverlusten der Baumbestände führen. Neuere Freilandmessungen im Rahmen eines forstökologischen Langzeitprojekts zeigen jedoch ein differenzierteres Bild: Buchenbestände, die durch Frühjahrsfröste nach vorzeitigem Blattaustrieb geschädigt wurden, konnten ihren Kohlenhydratverlust überraschend rasch ausgleichen, sofern sie an ein intaktes, artenreiches Ektomykorrhiza-Pilznetzwerk im Boden angebunden waren. Über diese unterirdischen Hyphenstränge transferierten ältere, ungeschädigte Nachbarbäume aktiv gelöste Kohlenhydrate zu den defolierten Jungbäumen.

Dieser Pufferungsmechanismus greift allerdings nur unter spezifischen Bedingungen. In strukturarmen forstlichen Reinbeständen oder bei Böden mit starker Versauerung und Stickstoffüberlastung bricht die Diversität der Mykorrhizagemeinschaften zusammen. Unter solchen Bedingungen führt die Kombination aus phänologischem Fehlanpassungsstress und sommerlichen Trockenperioden zu irreversiblen Kronenverlichtungen und sekundärem Borkenkäferbefall.

Die ökologische Resilienz von Wäldern gegenüber phänologischer Asynchronie hängt somit nicht allein von der genetischen Plastizität einzelner Baumarten ab, sondern in hohem Maße von der unterirdischen Biodiversität und der Bestandesstruktur. Ein reines Vertrauen auf evolutive Anpassung der Arten greift zu kurz, wenn gleichzeitig die mikrobiellen Netzwerke zerstört werden, die als funktionale Puffer im System dienen.`;

const PASSAGE_3_TEXT = `Das sogenannte Automatisierungs-Paradoxon beschreibt ein Phänomen in hochtechnisierten Arbeitsumgebungen: Je zuverlässiger und leistungsfähiger ein automatisiertes Steuerungssystem arbeitet, desto anspruchsvoller und fehleranfälliger wird die Rolle des menschlichen Bedieners in jenen seltenen Momenten, in denen die Maschine versagt. Während Automatisierung primär implementiert wird, um menschliche Irrtümer und Routineüberlastungen zu minimieren, transformiert sie das Anforderungsprofil des Menschen von einer aktiven Steuerungsinstanz zu einem passiven Überwacher.

Zwei wesentliche psychologische Effekte begründen dieses Problem: das Vigilanzdekrement und das „Out-of-the-Loop“-Phänomen. Das menschliche Gehirn ist evolutionsbiologisch schlecht dafür gerüstet, über längere Zeiträume monotone Monitordaten ohne eigene Interaktion aufmerksam zu verfolgen; bereits nach zwanzig Minuten sinkt die Entdeckungsrate für seltene Unregelmäßigkeiten drastisch. Gleichzeitig führt die passive Beobachtung dazu, dass Operateure das mentale Modell des aktuellen Systemzustands verlieren. Tritt eine plötzliche Störung auf, benötigt der Mensch unverhältnismäßig viel Zeit, um die Prozessparameter zu rekonstruieren, adäquate Hypothesen zu bilden und manuelle Gegenmaßnahmen einzuleiten.

In modernen intensivmedizinischen Überwachungs- und Narkosesystemen hat dies handfeste Konsequenzen. Hochentwickelte Closed-Loop-Systeme regeln Medikamentendosierungen, Beatmungsvolumina und Vitalparameter weitgehend autonom und hochpräzise. Eine Simulationsstudie an einer Universitätsklinik zeigte jedoch: Bei einem simulierten Sensorartefakt, das zu einer fehlerhaften automatischen Dosisanpassung führte, erkannten Ärztinnen und Ärzte mit hoher Routine im manuellen Narkosemanagement die Fehlregulation im Schnitt nach 45 Sekunden. Kolleginnen und Kollegen, die ausschließlich an vollautomatisierten Stationen ausgebildet worden waren, benötigten dafür durchschnittlich über drei Minuten und leiteten in 28 Prozent der Fälle zunächst kontraproduktive Korrekturen ein.

Experten für Systemergonomie fordern daher eine Abkehr von der „Vollautomatisierung um jeden Preis“. Statt Menschen vollständig aus dem Regelkreis auszuschließen, plädieren sie für „kooperative Automatisierung“. Hierbei übernimmt das System die Routineberechnungen, zwingt den Bediener jedoch durch intermittierende Abfragen, strategische Bestätigungsschritte und gezielte Mikrotätigkeiten („Human-in-the-Loop“) dazu, ein kontinuierliches Situationsbewusstsein aufrechtzuerhalten.

Das Paradoxon belegt, dass technologische Perfektion die Notwendigkeit menschlicher Fachkompetenz nicht obsolet macht, sondern paradoxerweise verschärft. In vollautomatisierten Systemen muss der Mensch nicht mehr die alltägliche Norm beherrschen, sondern hochkomplexe, unvorhersehbare Extremsituationen unter extremem Zeitdruck bewältigen – eine Fähigkeit, die durch die Automatisierung im Alltag jedoch systematisch verlernt wird.`;

const PASSAGE_4_TEXT = `In den vergangenen zwei Jahrzehnten geriet die empirische Wissenschaft zunehmend unter Legitimationsdruck. Großangelegte Initiativen, etwa das „Reproducibility Project“ in der Psychologie oder analoge Überprüfungen in der Krebsbiologie, offenbarten eine alarmierende Diskrepanz: Ein beträchtlicher Teil publizierter, scheinbar gesicherter Studienergebnisse ließ sich in unabhängigen Wiederholungsversuchen nicht reproduzieren. Während anfänglich methodische Unachtsamkeiten oder gar vorsätzliche Datenfälschungen als Hauptursachen diskutiert wurden, richtet sich der wissenschaftssoziologische Fokus heute verstärkt auf die strukturellen Anreizsysteme des akademischen Betriebs.

Das vorherrschende Paradigma „Publish or Perish“ belohnt primär neuartige, statistisch signifikante und spektakuläre Ergebnisse. Neutrale Befunde (Nullresultate) oder erfolgreiche Replikationen bereits bekannter Zusammenhänge gelten in führenden Fachjournalen als wenig attraktiv und werden selten abgedruckt (der sogenannte Publication Bias). Dies erzeugt einen systematischen Selektionsdruck auf Forschende: Um ihre Karrierechancen zu wahren, greifen Wissenschaftler – oft unbewusst – zu Praktiken wie dem „P-Hacking“ (nachträgliches Anpassen von Analysemethoden, bis ein statistisch signifikantes Ergebnis erreicht wird) oder dem „HARKing“ (Hypothesizing After Results are Known).

Dieser institutionelle Mechanismus steht in einem tiefen Spannungsverhältnis zur ursprünglichen epistemischen Haltung der Wissenschaft. Ursprünglich basiert Forschung auf ergebnisoffener Exploration und dem systematischen Versuch, eigene Annahmen kritisch zu falsifizieren. Unter dem aktuellen Druck wandelt sich diese Haltung jedoch nicht selten zu einem Bestätigungsbias: Forschende entwickeln ein ökonomisches Interesse daran, dass ihre postulierten Effekte bestehen bleiben, anstatt sie rigorosen Stresstests zu unterziehen. Eine Replikation einer fremden Studie bietet kaum akademisches Renommee, birgt aber das Risiko persönlicher Anfeindungen, falls das Originalergebnis widerlegt wird.

Als vielversprechendes Gegenmodell etablieren immer mehr Fachgesellschaften das Format der „Registered Reports“. Bei diesem Begutachtungsverfahren reichen Forschende ihre Hypothesen, Versuchspläne und statistischen Analyseprotokolle ein, bevor auch nur ein einziger Datensatz erhoben wird. Wird das Studiendesign nach Begutachtung als methodisch stringent bewertet, garantiert die Zeitschrift die Publikation unabhängig davon, ob das spätere Resultat statistisch signifikant, neutral oder widersprüchlich ausfällt. Erste vergleichende Meta-Analysen zeigen: Bei Registered Reports liegt der Anteil publizierter Nullresultate bei über 60 Prozent, während er im traditionellen Publikationsmodell unter 10 Prozent beträgt.

Die Replikationskrise ist folglich weniger ein moralisches Versagen einzelner Individuen als vielmehr das Resultat einer institutionellen Fehlsteuerung. Nur wenn Begutachtungs- und Fördersysteme die methodische Strenge höher gewichten als die Oberflächenattraktivität spektakulärer Einzelergebnisse, kann die Wissenschaft ihre selbstkorrigierende Funktion zurückgewinnen.`;

export const GENERALPROBE_1_TV_PASSAGES: QcTvPassage[] = [
  {
    id: "tv-passage-01",
    title: "Schlafarchitektur, synaptische Homöostase und Gedächtniskonsolidierung",
    topic: "Schlafarchitektur & Gedächtniskonsolidierung",
    text: PASSAGE_1_TEXT,
    paragraphs: PASSAGE_1_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-MEDAT-001", "TV-MEDAT-002", "TV-MEDAT-003"],
  },
  {
    id: "tv-passage-02",
    title: "Phänologische Asynchronie und Anpassungsdynamik mitteleuropäischer Mischwälder",
    topic: "Phänologische Asynchronie & Ökologie",
    text: PASSAGE_2_TEXT,
    paragraphs: PASSAGE_2_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-MEDAT-004", "TV-MEDAT-005", "TV-MEDAT-006"],
  },
  {
    id: "tv-passage-03",
    title: "Das Automatisierungs-Paradoxon in kritischen Kontrollumgebungen",
    topic: "Automatisierungs-Paradoxon & Ergonomie",
    text: PASSAGE_3_TEXT,
    paragraphs: PASSAGE_3_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-MEDAT-007", "TV-MEDAT-008", "TV-MEDAT-009"],
  },
  {
    id: "tv-passage-04",
    title: "Epistemische Neugier, Replikationskrise und institutionelle Anreizstrukturen",
    topic: "Wissenschaftstheorie & Replikationskrise",
    text: PASSAGE_4_TEXT,
    paragraphs: PASSAGE_4_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-MEDAT-010", "TV-MEDAT-011", "TV-MEDAT-012"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DIE 12 QUALITÄTSKONTROLLIERTEN TV-AUFGABEN
// ─────────────────────────────────────────────────────────────────────────────

export const RAW_GENERALPROBE_1_TV_QUESTIONS: QcTvQuestionRaw[] = [
  // ─── PASSAGE 1: SCHLAFARCHITEKTUR (TV-MEDAT-001 bis 003) ───
  {
    id: "TV-MEDAT-001",
    passageId: "tv-passage-01",
    passageTitle: "Schlafarchitektur, synaptische Homöostase und Gedächtniskonsolidierung",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Schlafarchitektur & Gedächtniskonsolidierung",
    subtopic: "Synaptic Downscaling & Homöostase",
    difficulty: "foundational",
    concept: "Explizites Detail / Begriffsdefinition",
    evidenceLocation: "Absatz 2",
    stem: "Welche primäre Funktion wird dem Slow-Wave-Schlaf gemäß der im Text erwähnten „Synaptischen Homöostase-Hypothese“ zugeschrieben?",
    options: {
      A: "Eine selektive Verstärkung schwacher synaptischer Kontakte zur Erhöhung des zellulären Speicherplatzes.",
      B: "Eine globale synaptische Abwärtsregulierung, bei der schwächere Kontakte abgebaut und robuste Verknüpfungen bewahrt werden.",
      C: "Eine kontinuierliche Netto-Verstärkung synaptischer Verbindungen zur Steigerung des metabolischen Energieverbrauchs.",
      D: "Die ausschließliche Stabilisierung prozeduraler und motorischer Fähigkeiten im Neokortex.",
      E: "Eine vollständige Unterdrückung von Delta-Wellen zur Optimierung des Signal-Rausch-Verhältnisses.",
    },
    correct_answer: "B",
    explanation_correct:
      "Der Text beschreibt in Absatz 2 wörtlich: „Während des Slow-Wave-Schlafs findet daher eine globale, synaptische Abwärtsregulierung („Synaptic Downscaling“) statt: Schwächere synaptische Kontakte werden gezielt eliminiert, während besonders häufig aktivierte, robuste Verknüpfungen erhalten bleiben.“ Dies entspricht exakt Option B: Schwächere Kontakte werden abgebaut und robuste Verknüpfungen erhalten, wodurch Energieverbrauch und neuronales Grundrauschen sinken.",
    explanations_incorrect: {
      A: "Option A ist falsch, da der Text ausdrücklich von einer gezielten Eliminierung (Abbau) schwächerer Kontakte spricht und keineswegs von deren selektiver Verstärkung.",
      C: "Option C ist falsch, da die Netto-Verstärkung synaptischer Kontakte laut Absatz 2 im Wachzustand stattfindet; das Downscaling im Schlaf senkt den metabolischen Energiebedarf und steigert ihn nicht.",
      D: "Option D ist falsch, da die Konsolidierung motorischer und prozeduraler Fähigkeiten im Text (Absatz 4) dem späteren REM-Schlaf zugeschrieben wird, während der Slow-Wave-Schlaf primär mit deklarativen Inhalten verknüpft ist.",
      E: "Option E ist falsch, da der Slow-Wave-Schlaf in Absatz 1 explizit als Tiefschlaf mit langsamen Delta-Wellen definiert wird; Delta-Wellen werden nicht unterdrückt, sondern kennzeichnen dieses Stadium.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-002",
    passageId: "tv-passage-01",
    passageTitle: "Schlafarchitektur, synaptische Homöostase und Gedächtniskonsolidierung",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Schlafarchitektur & Gedächtniskonsolidierung",
    subtopic: "Studiendesign & Phasendissoziation",
    difficulty: "intermediate",
    concept: "Experimentelle Befundanalyse / Kausale Zuordnung",
    evidenceLocation: "Absatz 3 und Absatz 4",
    stem: "Welcher Befund der im Text geschilderten Untersuchung stützt die funktionelle Differenzierung zwischen Tiefschlaf und REM-Schlaf?",
    options: {
      A: "Gruppe B erzielte nach einer ungestörten Folgenacht bei den deklarativen Fakten eine signifikant höhere Reproduktionsleistung als Gruppe A.",
      B: "Die akustische Reizung in den ersten vier Stunden unterdrückte in Gruppe B den REM-Schlaf, ließ den Tiefschlaf jedoch unberührt.",
      C: "Gruppe A erbrachte bei den motorischen Sequenzen schlechtere Leistungen als Gruppe B, da Gruppe A keinen REM-Schlaf erreichte.",
      D: "Gruppe B glich das Gedächtnisdefizit bei den Fakten vollständig durch eine automatische Verlängerung der Slow-Wave-Phasen in den zweiten vier Stunden aus.",
      E: "Das selektive Verhindern des Tiefschlafs bei Gruppe B beeinträchtigte den Abruf deklarativer Fakten, ließ die motorischen Leistungen jedoch unbeeinflusst.",
    },
    correct_answer: "E",
    explanation_correct:
      "In Absatz 3 und 4 wird dargelegt, dass Gruppe B bei unberührtem REM-Schlaf, aber selektiv gestörtem Tiefschlaf bei den motorischen Sequenzen keinerlei Einbußen zeigte, jedoch bei den deklarativen Fakten eine um 32 Prozent geringere Reproduktionsleistung aufwies als Gruppe A. Dies stützt die funktionelle Dissoziation in Option E: Der Tiefschlaf ist spezifisch für deklarative Inhalte erforderlich, während motorische Fertigkeiten durch den intakten REM-Schlaf stabilisiert wurden.",
    explanations_incorrect: {
      A: "Option A ist falsch, da Gruppe B beim Faktenabruf eine um 32 % geringere (nicht höhere) Reproduktionsleistung zeigte und dieses Defizit auch nach einer ungestörten Folgenacht nicht vollständig kompensieren konnte.",
      B: "Option B ist falsch, da das Experiment die Versuchsbedingungen umkehrte: Die Störung unterband den Tiefschlaf in den ersten vier Stunden, während der REM-Schlaf-Anteil laut Absatz 3 identisch gehalten wurde.",
      C: "Option C ist falsch, da Gruppe A regulär acht Stunden schlief und beide Gruppen bei den motorischen Sequenzen gleichauf lagen („keinerlei Einbußen“).",
      D: "Option D ist falsch, da eine automatische Verlängerung der Slow-Wave-Phasen im Text nirgends erwähnt wird; zudem blieb das Leistungsdefizit auch nach 48 Stunden nachweisbar.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-003",
    passageId: "tv-passage-01",
    passageTitle: "Schlafarchitektur, synaptische Homöostase und Gedächtniskonsolidierung",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Schlafarchitektur & Gedächtniskonsolidierung",
    subtopic: "Logische Schlussfolgerung & Schlafsequenz",
    difficulty: "intermediate",
    concept: "Logische Inferenz / Schlussfolgerung",
    evidenceLocation: "Absatz 4 und Absatz 5",
    stem: "Welche Schlussfolgerung lässt sich aus den Ausführungen des Autors im letzten Absatz („Fazit und Ausblick“) und den Studienergebnissen ableiten?",
    options: {
      A: "Eine ausreichende Gesamtschlafdauer garantiert für sich allein keine optimale kognitive Konsolidierung, wenn wesentliche Schlafphasen selektiv unterdrückt werden.",
      B: "Prozedurale Fertigkeiten sind grundsätzlich anfälliger für zeitkritische Konsolidierungsfenster als deklarative Fakten.",
      C: "Die synaptische Potenzierung im Wachzustand führt zu einer dauerhaften Reduktion des metabolischen Energiebedarfs im Kortex.",
      D: "Jegliche kognitive Leistungseinbuße nach fragmentiertem Schlaf lässt sich durch eine einzige ungestörte Folgenacht vollständig ausgleichen.",
      E: "Slow-Wave-Schlaf und REM-Schlaf erfüllen im Gehirn identische biologische Aufgaben bei der deklarativen Informationsverarbeitung.",
    },
    correct_answer: "A",
    explanation_correct:
      "In Absatz 5 formuliert der Autor explizit: „Diese Befunde unterstreichen, dass Schlafdauer allein kein hinreichender Parameter für regenerative kognitive Prozesse ist. Vielmehr bestimmt die ungestörte architektonische Sequenz der Schlafstadien, welche Gedächtnissysteme stabilisiert werden.“ Da Gruppe B bei identischer Gesamtschlafdauer deutliche Defizite aufwies, folgt Option A zwingend: Schlafdauer garantiert keine Konsolidierung, wenn spezifische Schlafstadien unterdrückt werden.",
    explanations_incorrect: {
      B: "Option B ist falsch, da der Text das Gegenteil belegt: Die motorisch-prozeduralen Leistungen blieben vollkommen intakt, während gerade für deklarative Fakten ein zeitkritisches Konsolidierungsfenster beschrieben wird.",
      C: "Option C ist falsch, da die synaptische Potenzierung im Wachzustand den metabolischen Energiebedarf laut Absatz 2 steigert; erst das Downscaling im Tiefschlaf senkt ihn wieder.",
      D: "Option D ist falsch, da dies eine unzulässige Verallgemeinerung darstellt („jegliche... vollständig“); Absatz 4 belegt ausdrücklich, dass Gruppe B das Defizit auch nach einer ungestörten Folgenacht nach 48 Stunden nicht vollständig kompensieren konnte.",
      E: "Option E ist falsch, da Slow-Wave-Schlaf und REM-Schlaf laut Absatz 1 und 4 komplementäre und funktionell getrennte Aufgaben erfüllen (Tiefschlaf für Fakten, REM-Schlaf für motorische Sequenzen).",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },

  // ─── PASSAGE 2: PHÄNOLOGISCHE ASYNCHRONIE (TV-MEDAT-004 bis 006) ───
  {
    id: "TV-MEDAT-004",
    passageId: "tv-passage-02",
    passageTitle: "Phänologische Asynchronie und Anpassungsdynamik mitteleuropäischer Mischwälder",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Phänologische Asynchronie & Ökologie",
    subtopic: "Klimawandel & Trophic Mismatch",
    difficulty: "intermediate",
    concept: "Ursache-Wirkung / Kausalanalyse",
    evidenceLocation: "Absatz 2",
    stem: "Welche Ursache führt laut Text dazu, dass die Entwicklungszeitpunkte von Frostspannerraupen und Blaumeisennachwuchs im Frühjahr auseinanderfallen können?",
    options: {
      A: "Blaumeisen richten ihren Brutbeginn ausschließlich nach der Härte der austreibenden Buchenknospen aus.",
      B: "Der Blattaustrieb der Rotbuche hängt primär von der sommerlichen Stickstoffanreicherung ab.",
      C: "Ektomykorrhiza-Pilze verzögern die Eiablage der Frostspanner durch biochemische Botenstoffe im Waldboden.",
      D: "Die Raupen reagieren vorwiegend auf die Frühjahrstemperatur, während sich die Blaumeisen bei ihrem Brutbeginn an der Tageslänge orientieren.",
      E: "Frostspannerlarven schlüpfen grundsätzlich erst nach dem vollständigen Abschluss der sommerlichen Trockenperiode.",
    },
    correct_answer: "D",
    explanation_correct:
      "In Absatz 2 wird die Ursache der Entkopplung detailliert erläutert: Der Schlupf der Frostspannerlarven reagiert nahezu linear auf die akkumulierte Frühjahrswärme, während Blaumeisen ihren Brutbeginn an der Tageslänge (Photoperiode) ausrichten. Erwärmt sich das Frühjahr vorzeitig, schlüpfen die Raupen früher, während die Vögel an die astronomische Tageslänge gebunden bleiben und ihre Jungen erst aufziehen, wenn das Raupenmaximum bereits vorüber ist. Genau dies besagt Option D.",
    explanations_incorrect: {
      A: "Option A ist falsch, da Blaumeisen ihren Brutbeginn laut Absatz 2 an der Tageslänge ausrichten, nicht an der Knospenhärte.",
      B: "Option B ist falsch, da der Blattaustrieb laut Absatz 2 durch winterliche Kälte (Chilling) und Photoperiode gesteuert wird; Stickstoff wird erst in Absatz 4 im Zusammenhang mit Mykorrhizen erwähnt.",
      C: "Option C ist falsch, da Mykorrhizapilze unterirdische Partner der Bäume sind und laut Text keinen Einfluss auf die Eiablage der Falter nehmen.",
      E: "Option E ist falsch, da Frostspannerlarven im zeitigen Frühjahr schlüpfen; die sommerliche Trockenperiode betrifft spätere Stressfaktoren der Bäume (Absatz 4).",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-005",
    passageId: "tv-passage-02",
    passageTitle: "Phänologische Asynchronie und Anpassungsdynamik mitteleuropäischer Mischwälder",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Phänologische Asynchronie & Ökologie",
    subtopic: "Mykorrhiza-Pufferung & Resilienz",
    difficulty: "advanced",
    concept: "Konditionale Schlussfolgerung / Bedingungsanalyse",
    evidenceLocation: "Absatz 3 und Absatz 4",
    stem: "Unter welchen im Text genannten Bedingungen ist ein geschädigter Buchenbestand am ehesten in der Lage, Verluste durch Frostschäden nach vorzeitigem Blattaustrieb zu kompensieren?",
    options: {
      A: "Wenn die Bestände als reine forstliche Monokulturen ohne Nachbarbaumkonkurrenz angelegt sind.",
      B: "Wenn eine starke Stickstoffanreicherung im Boden das Auftreten sekundärer Forstschädlinge hemmt.",
      C: "Wenn intakte Ektomykorrhiza-Netzwerke vorliegen, über die ungeschädigte Nachbarbäume aktiv Kohlenhydrate an betroffene Bäume übertragen.",
      D: "Wenn der Schlupf der Frostspannerlarven systematisch vor dem Aufbrechen der Buchenknospen erfolgt.",
      E: "Wenn der Blattaustrieb der Bäume ausschließlich durch die akkumulierte Frühjahrswärme reguliert wird.",
    },
    correct_answer: "C",
    explanation_correct:
      "Absatz 3 knüpft die Fähigkeit zur raschen Kompensation an eine explizite Bedingung („sofern...“): Buchenbestände konnten ihren Kohlenhydratverlust ausgleichen, sofern sie an ein intaktes, artenreiches Ektomykorrhiza-Pilznetzwerk angebunden waren, über dessen Hyphenstränge ungeschädigte Altbäume aktiv gelöste Kohlenhydrate zu den defolierten Jungbäumen transferierten. Dies entspricht exakt Option C.",
    explanations_incorrect: {
      A: "Option A ist falsch, da Absatz 4 betont, dass in strukturarmen Reinbeständen (Monokulturen) die Diversität der Pilzgemeinschaften zusammenbricht und Schäden irreversibel werden.",
      B: "Option B ist falsch, da Stickstoffüberlastung laut Absatz 4 die Mykorrhizadiversität zerstört und Borkenkäferbefall begünstigt, anstatt Schädlinge zu hemmen.",
      D: "Option D ist falsch, da ein vorzeitiger Raupenschlupf zwar zum Verhungern der Raupen führt, dies jedoch keine Bedingung für die Kompensation von Frostschäden durch die Bäume darstellt.",
      E: "Option E ist falsch, da die Frühjahrswärme den Raupenschlupf steuert, während der Blattaustrieb laut Absatz 2 durch Chilling-Bedarf und Photoperiode reguliert wird.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-006",
    passageId: "tv-passage-02",
    passageTitle: "Phänologische Asynchronie und Anpassungsdynamik mitteleuropäischer Mischwälder",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Phänologische Asynchronie & Ökologie",
    subtopic: "Textwiderspruch & Waldbiodiversität",
    difficulty: "intermediate",
    concept: "Negativ-Identifikation / Textwiderspruch",
    evidenceLocation: "Absatz 4 und Absatz 5",
    stem: "Welche der folgenden Aussagen widerspricht den Darlegungen des Textes?",
    options: {
      A: "Phänologische Asynchronie bezeichnet eine funktionelle Entkopplung evolutiv aufeinander abgestimmter ökologischer Interaktionen.",
      B: "Eine irreversible Kronenverlichtung tritt in Buchenwäldern völlig unabhängig von der Artenvielfalt der Mykorrhizagemeinschaften im Boden auf.",
      C: "Der Schlupf der Frostspannerlarven kann bei verfrühter Erwärmung vor dem Aufbrechen der schützenden Buchenknospen stattfinden.",
      D: "Der Blattaustrieb der Rotbuche wird sowohl durch eine winterliche Kälteperiode als auch durch die Tageslänge gesteuert.",
      E: "Die forstökologische Widerstandskraft eines Waldes hängt nicht allein von der genetischen Plastizität der einzelnen Baumarten ab.",
    },
    correct_answer: "B",
    explanation_correct:
      "Option B widerspricht dem Text unmittelbar: Absatz 4 und 5 belegen ausführlich, dass irreversible Kronenverlichtungen gerade dann auftreten, wenn die Diversität der Mykorrhizagemeinschaften zusammengebrochen ist. Intakte Netzwerke puffern den Schaden ab. Die Behauptung, Kronenverlichtung trete „völlig unabhängig von der Artenvielfalt der Mykorrhizagemeinschaften“ auf, verkehrt die zentrale Aussage des Textes in ihr Gegenteil.",
    explanations_incorrect: {
      A: "Option A widerspricht dem Text nicht, sondern gibt die wörtliche Definition aus Absatz 1 exakt wieder.",
      C: "Option C widerspricht dem Text nicht, da dieses Phänomen in Absatz 2 ausdrücklich als Folge verfrühter Frühjahrserwärmung beschrieben wird.",
      D: "Option D widerspricht dem Text nicht, da Absatz 2 explizit Chilling-Bedarf und Photoperiode als steuernde Faktoren des Buchenaustriebs anführt.",
      E: "Option E widerspricht dem Text nicht, sondern entspricht der zusammenfassenden Kernaussage in Absatz 5.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },

  // ─── PASSAGE 3: AUTOMATISIERUNGS-PARADOXON (TV-MEDAT-007 bis 009) ───
  {
    id: "TV-MEDAT-007",
    passageId: "tv-passage-03",
    passageTitle: "Das Automatisierungs-Paradoxon in kritischen Kontrollumgebungen",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Automatisierungs-Paradoxon & Ergonomie",
    subtopic: "Begriffsdefinition & Out-of-the-Loop",
    difficulty: "foundational",
    concept: "Explizites Detail / Begriffsdefinition",
    evidenceLocation: "Absatz 1",
    stem: "Was ist der Kern des im Text beschriebenen „Automatisierungs-Paradoxons“?",
    options: {
      A: "Je verlässlicher und fehlerfreier ein System arbeitet, desto schwieriger wird für den Bediener das Beherrschen unvorhergesehener Störungen.",
      B: "Automatisierte Steuerungssysteme versagen umso häufiger, je mehr manuelle Kontrollschritte das Personal vornimmt.",
      C: "Menschliche Fehlerquoten bei einfachen Routinetätigkeiten steigen durch den Einsatz automatisierter Narkosegeräte kontinuierlich an.",
      D: "Vollautomatisierte Systeme machen jegliche klinische Ausbildung und menschliche Intervention in Notfällen überflüssig.",
      E: "Eine Erhöhung der Anzahl visueller Monitoranzeigen führt zu einer dauerhaften Steigerung der menschlichen Daueraufmerksamkeit.",
    },
    correct_answer: "A",
    explanation_correct:
      "Absatz 1 definiert das Paradoxon wörtlich: „Je zuverlässiger und leistungsfähiger ein automatisiertes Steuerungssystem arbeitet, desto anspruchsvoller und fehleranfälliger wird die Rolle des menschlichen Bedieners in jenen seltenen Momenten, in denen die Maschine versagt.“ Dies wird in Option A präzise wiedergegeben.",
    explanations_incorrect: {
      B: "Option B ist falsch, da der Text nicht besagt, dass Maschinen durch manuelle Kontrollen häufiger versagen, sondern das Scheitern des Menschen bei Maschinenausfällen thematisiert.",
      C: "Option C ist falsch, da Automatisierung laut Absatz 1 primär implementiert wird, um menschliche Irrtümer und Überlastungen bei Routinearbeiten zu verringern, nicht zu steigern.",
      D: "Option D ist falsch, da Absatz 5 betont, dass menschliche Fachkompetenz keineswegs überflüssig wird, sondern für extreme Ausnahmesituationen unverzichtbar bleibt.",
      E: "Option E ist falsch, da Absatz 2 darlegt, dass passive Bildschirmüberwachung bereits nach zwanzig Minuten zu einem drastischen Absinken der Wachsamkeit (Vigilanzdekrement) führt.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-008",
    passageId: "tv-passage-03",
    passageTitle: "Das Automatisierungs-Paradoxon in kritischen Kontrollumgebungen",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Automatisierungs-Paradoxon & Ergonomie",
    subtopic: "Simulationsstudie & Reaktionszeiten",
    difficulty: "intermediate",
    concept: "Gruppenvergleich / Evidenzanalyse",
    evidenceLocation: "Absatz 3",
    stem: "Welcher Unterschied zeigte sich in der im Text beschriebenen Simulationsstudie zwischen den beiden Gruppen von medizinischem Personal?",
    options: {
      A: "Das an vollautomatisierten Stationen geschulte Personal identifizierte die Störung zwar schneller, wählte jedoch höhere Medikamentendosen.",
      B: "Beide Gruppen benötigten gleich lang zur Identifikation der Störung, trafen jedoch gegensätzliche Therapieentscheidungen.",
      C: "Die Gruppe mit manueller Routine leitete in fast einem Drittel der Fälle zunächst kontraproduktive Korrekturmaßnahmen ein.",
      D: "Fachkräfte mit manueller Routine erkannten die durch das Sensorartefakt ausgelöste Fehlregulation deutlich schneller als rein vollautomatisiert ausgebildetes Personal.",
      E: "Die vollautomatisiert geschulten Ärztinnen und Ärzte behoben das Sensorartefakt im Durchschnitt bereits nach 45 Sekunden.",
    },
    correct_answer: "D",
    explanation_correct:
      "In Absatz 3 belegt die Simulationsstudie eine deutliche Differenz: Ärztinnen und Ärzte mit manueller Routine im Narkosemanagement erkannten die Fehlregulation im Schnitt nach 45 Sekunden. Kolleginnen und Kollegen, die ausschließlich an vollautomatisierten Stationen geschult worden waren, benötigten durchschnittlich über drei Minuten (>180 s) und leiteten in 28 % kontraproduktive Korrekturen ein. Option D formuliert diesen Unterschied („deutlich schneller“) vollkommen sachgerecht und textgetreu, ohne unzulässig auf statistische Signifikanztests zu extrapolieren.",
    explanations_incorrect: {
      A: "Option A ist falsch, da das vollautomatisiert geschulte Personal die Störung nicht schneller, sondern wesentlich langsamer erkannte (>3 Minuten vs. 45 Sekunden).",
      B: "Option B ist falsch, da die Erkennungszeiten massiv differierten (45 s vs. >180 s).",
      C: "Option C ist falsch, da die kontraproduktiven Korrekturen (28 %) von der vollautomatisierten Gruppe eingeleitet wurden, nicht von der Gruppe mit manueller Routine.",
      E: "Option E ist falsch, da der Wert von 45 Sekunden für die manuell erfahrene Gruppe galt; die vollautomatisiert geschulte Gruppe brauchte über drei Minuten.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-009",
    passageId: "tv-passage-03",
    passageTitle: "Das Automatisierungs-Paradoxon in kritischen Kontrollumgebungen",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Automatisierungs-Paradoxon & Ergonomie",
    subtopic: "Kooperative Automatisierung & Human-in-the-Loop",
    difficulty: "advanced",
    concept: "Aussagenkombination I–IV / Systemergonomie",
    evidenceLocation: "Absatz 2, Absatz 4 und Absatz 5",
    stem: `Welche der folgenden Aussagen zur ergonomischen Gestaltung automatisierter Systeme sind laut Text richtig?

I. Bei der monotonen Beobachtung von Monitordaten ohne eigene Interaktion sinkt die Entdeckungsrate für seltene Unregelmäßigkeiten bereits nach etwa zwanzig Minuten drastisch.
II. Das Konzept der „kooperativen Automatisierung“ zielt darauf ab, menschliche Operateure vollständig aus dem Regelkreis auszuschließen.
III. Intermittierende Abfragen und Bestätigungsschritte sollen verhindern, dass Operateure das mentale Modell des Systemzustands verlieren.
IV. Eine perfekte Alltagsautomatisierung verbessert automatisch die menschliche Handlungsfähigkeit bei seltenen Extremsituationen unter Zeitdruck.`,
    options: {
      A: "Nur Aussage I ist richtig.",
      B: "Nur Aussagen II und IV sind richtig.",
      C: "Nur Aussagen I, III und IV sind richtig.",
      D: "Alle vier Aussagen sind richtig.",
      E: "Nur Aussagen I und III sind richtig.",
    },
    correct_answer: "E",
    explanation_correct:
      "Aussage I ist richtig: Absatz 2 belegt wörtlich, dass bei der monotonen Beobachtung von Monitordaten ohne eigene Interaktion bereits nach zwanzig Minuten die Entdeckungsrate für seltene Unregelmäßigkeiten drastisch sinkt.\nAussage II ist falsch: Absatz 4 betont das Gegenteil: „Statt Menschen vollständig aus dem Regelkreis auszuschließen, plädieren sie für ‚kooperative Automatisierung‘.“\nAussage III ist richtig: Absatz 4 führt aus, dass intermittierende Abfragen, strategische Bestätigungsschritte und gezielte Mikrotätigkeiten („Human-in-the-Loop“) den Bediener zwingen, ein kontinuierliches Situationsbewusstsein und mentales Modell aufrechtzuerhalten.\nAussage IV ist falsch: Absatz 5 stellt fest, dass die Fähigkeit, Extremsituationen unter Zeitdruck zu bewältigen, durch die Automatisierung im Alltag „systematisch verlernt wird“.\nSomit sind ausschließlich die Aussagen I und III richtig (Option E).",
    explanations_incorrect: {
      A: "Option A ist falsch, da sie unvollständig ist: Aussage III wird durch Absatz 4 ebenso unzweifelhaft gestützt.",
      B: "Option B ist falsch, da beide Aussagen II und IV im direkten Widerspruch zu den Ausführungen in Absatz 4 und 5 stehen.",
      C: "Option C ist falsch, da Aussage IV falsch ist; Automatisierung im Alltag fördert die Bewältigung von Extremsituationen nicht, sondern lässt sie verkümmern.",
      D: "Option D ist falsch, da die Aussagen II und IV dem Text diametral widersprechen.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },

  // ─── PASSAGE 4: REPLIKATIONSKRISE (TV-MEDAT-010 bis 012) ───
  {
    id: "TV-MEDAT-010",
    passageId: "tv-passage-04",
    passageTitle: "Epistemische Neugier, Replikationskrise und institutionelle Anreizstrukturen",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Wissenschaftstheorie & Replikationskrise",
    subtopic: "Publication Bias & P-Hacking",
    difficulty: "foundational",
    concept: "Explizites Detail / Begriffsdefinition",
    evidenceLocation: "Absatz 2",
    stem: "Was versteht der Text unter dem Begriff „Publication Bias“?",
    options: {
      A: "Das gezielte Fälschen von Rohdatensätzen durch Forschende vor der Manuskripteinreichung.",
      B: "Eine gesetzliche Verpflichtung wissenschaftlicher Institute, vorrangig Replikationsstudien zu publizieren.",
      C: "Die redaktionelle Bevorzugung neuartiger, statistisch signifikanter Befunde gegenüber Nullresultaten und Replikationen.",
      D: "Das nachträgliche Formulieren von Hypothesen nach Kenntnis der statistischen Auswertung.",
      E: "Die automatische Ablehnung von Projektanträgen durch staatliche Forschungsförderer.",
    },
    correct_answer: "C",
    explanation_correct:
      "In Absatz 2 definiert der Text den Publication Bias eindeutig: Fachzeitschriften belohnen primär neuartige, spektakuläre und statistisch signifikante Resultate. Neutrale Befunde (Nullresultate) oder Replikationen gelten als wenig attraktiv und werden selten abgedruckt. Option C fasst dies prägnant zusammen.",
    explanations_incorrect: {
      A: "Option A ist falsch, da dies vorsätzliche Datenfälschung beschreibt, die in Absatz 1 erwähnt, aber klar vom Publikationsbias getrennt wird.",
      B: "Option B ist falsch, da eine Pflicht zur Replikation laut Text nicht existiert; Replikationen bieten im akademischen Betrieb derzeit kaum Renommee (Absatz 3).",
      D: "Option D ist falsch, da das nachträgliche Anpassen von Hypothesen an die Daten im Text als „HARKing“ bezeichnet wird (Absatz 2), nicht als Publication Bias.",
      E: "Option E ist falsch, da sich der Publication Bias auf die Veröffentlichungspraxis von Fachjournalen bezieht, nicht auf Projektanträge bei Förderinstitutionen.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-011",
    passageId: "tv-passage-04",
    passageTitle: "Epistemische Neugier, Replikationskrise und institutionelle Anreizstrukturen",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Wissenschaftstheorie & Replikationskrise",
    subtopic: "Registered Reports & Studienprotokolle",
    difficulty: "intermediate",
    concept: "Verfahrensvergleich / Funktionsanalyse",
    evidenceLocation: "Absatz 4",
    stem: "Inwiefern unterscheidet sich das Begutachtungsverfahren der „Registered Reports“ vom traditionellen Publikationsprozess?",
    options: {
      A: "Die Datenerhebung erfolgt vorab, die methodische Begutachtung durch Fachgutachter entfällt jedoch vollständig.",
      B: "Die Publikationszusage wird auf Basis des methodischen Versuchsplans bereits vor der eigentlichen Datenerhebung erteilt.",
      C: "Registered Reports garantieren eine Veröffentlichung ausschließlich für Studien mit hochgradig signifikanten Effekten.",
      D: "Forschende sind verpflichtet, vor der Erstpublikation mindestens drei unabhängige Replikationen vorzulegen.",
      E: "Durch Registered Reports sinkt der Anteil publizierter Nullresultate im Vergleich zum Standardverfahren auf unter 10 Prozent.",
    },
    correct_answer: "B",
    explanation_correct:
      "Absatz 4 beschreibt das Alleinstellungsmerkmal von Registered Reports: Forschende reichen Hypothesen, Versuchspläne und Analysemethoden ein, bevor auch nur ein einziger Datensatz erhoben wird. Wird das Design positiv bewertet, garantiert die Zeitschrift die Publikation unabhängig davon, wie das spätere Ergebnis ausfällt. Option B formuliert diesen fundamentalen Unterschied exakt.",
    explanations_incorrect: {
      A: "Option A ist falsch, da die methodische Begutachtung keineswegs entfällt; sie wird vielmehr vorverlagert und ist das entscheidende Qualitätskriterium.",
      C: "Option C ist falsch, da Registered Reports die Publikation gerade unabhängig von Signifikanzen garantieren; der Anteil publizierter Nullresultate steigt dadurch massiv.",
      D: "Option D ist falsch, da eine Pflicht zu drei Replikationen eine freie Erfindung ohne Stütze im Text ist.",
      E: "Option E ist falsch, da dies die Zahlenwerte vertauscht: Bei Registered Reports steigt der Anteil publizierter Nullresultate auf über 60 %; der Wert von unter 10 % beschreibt das traditionelle Modell.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
  {
    id: "TV-MEDAT-012",
    passageId: "tv-passage-04",
    passageTitle: "Epistemische Neugier, Replikationskrise und institutionelle Anreizstrukturen",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Wissenschaftstheorie & Replikationskrise",
    subtopic: "Institutionelle Fehlsteuerung & Reform",
    difficulty: "advanced",
    concept: "Kernaussage / Autorenurteil",
    evidenceLocation: "Absatz 5",
    stem: "Welche Kernaussage vertritt der Autor im abschließenden Absatz bezüglich der Ursache und Überwindung der Replikationskrise?",
    options: {
      A: "Die Krise beruht primär auf vorsätzlichem Fehlverhalten Einzelner und erfordert verschärfte strafrechtliche Sanktionen.",
      B: "Empirische Wissenschaften sollten auf quantitative und statistische Signifikanzprüfungen künftig vollkommen verzichten.",
      C: "Die mangelnde Reproduzierbarkeit belegt, dass kontrollierte Experimente in der Biomedizin grundsätzlich unzuverlässig sind.",
      D: "Die Krise ist das Produkt fehlerhafter institutioneller Anreize und verlangt eine Honorierung methodischer Strenge statt spektakulärer Einzelergebnisse.",
      E: "Da Forschende ein persönliches Interesse an ihren Thesen haben, besitzen Replikationsstudien für den wissenschaftlichen Fortschritt keinen Wert.",
    },
    correct_answer: "D",
    explanation_correct:
      "In Absatz 5 resümiert der Autor: Die Replikationskrise ist „weniger ein moralisches Versagen einzelner Individuen als vielmehr das Resultat einer institutionellen Fehlsteuerung. Nur wenn Begutachtungs- und Fördersysteme die methodische Strenge höher gewichten als die Oberflächenattraktivität spektakulärer Einzelergebnisse, kann die Wissenschaft ihre selbstkorrigierende Funktion zurückgewinnen.“ Dies entspricht genau Option D.",
    explanations_incorrect: {
      A: "Option A ist falsch, da der Text die Krise explizit nicht als moralisches Versagen Einzelner einstuft und keine strafrechtlichen Maßnahmen fordert.",
      B: "Option B ist falsch, da ein Verzicht auf Signifikanzprüfungen nirgends gefordert wird; kritisiert werden lediglich methodische Fehlanreize (P-Hacking).",
      C: "Option C ist falsch, da der Autor die wissenschaftliche Methode nicht verwirft, sondern deren Selbstkorrektur durch methodische Strenge stärken will.",
      E: "Option E ist falsch, da Replikationsstudien als unverzichtbar für die wissenschaftliche Selbstkorrektur beschrieben werden; kritisiert wird nur, dass sie zu selten honoriert werden.",
    },
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "2.0_12_items_medat_spec",
    },
  },
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
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #1 Runtime-Engine
 */
export const GENERALPROBE_1_TV_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_TV_QUESTIONS.map(
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
      tags: ["TV", "Textverständnis", "Generalprobe #1", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_12_items_medat_spec",
      setOrder: 1, // Deterministic simulation set 1
    };
  }
);
