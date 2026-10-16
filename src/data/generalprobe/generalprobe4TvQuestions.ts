/**
 * MedAT-H Textverständnis (TV) — 12-Aufgaben-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #4 (TV-Testteil, exakt 12 Aufgaben).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - Gesamt-Testtag: 221 gewertete Aufgaben (BMS 94, TV 12, KFF 75, SEK 40) + 8 GM-Gedächtniskarten.
 * - TV Testdauer: 35 Minuten Bearbeitungszeit (~175 Sekunden pro Aufgabe).
 * - 4 wissenschaftliche Lesepassagen mit je 3 zugeordneten, textgebundenen Multiple-Choice-Fragen.
 * - 5 Antwortoptionen je Aufgabe (A–E), exakt eine wissenschaftlich und textlogisch zutreffende Antwort.
 * 
 * Alle Aufgaben sind strikt aus dem jeweiligen Textauszug heraus lösbar (reine Lesekompetenz,
 * kein medizinisches oder physikalisches Fach-Vorwissen erforderlich).
 * 
 * Fragetypen & Formate:
 * - Begriffsdefinition & Konzeptabgrenzung (Homöostase vs. Allostase)
 * - Kausalanalyse & neurobiologische / zelluläre Mechanismen
 * - Klinische Inferenz & multisystemische Risikobewertung
 * - Molekulare Wirkprinzipien & Barriereimmunität (BAM-Modell)
 * - Experimentelle Befunddissoziation (Herpesvirus & Listerienresistenz)
 * - Systemische Dysregulation & Risikobedingungen
 * - Biometeorologische Kausalketten & vegetative Belastung
 * - Paradoxe Zusammenhänge & Strömungsmechanik (Urban Canyons)
 * - Städtebauliche Voraussetzungen & Kaltluftkorridore
 * - Kognitive Heuristiken & Urteilsverzerrungen unter Zeitdruck
 * - Phänomenologische Begriffsdefinition (Algorithm Aversion)
 * - Kooperative Systemoptimierung & Interaktionsmodelle (Centaur-Systeme)
 * 
 * Schwierigkeitsverteilung (präzise kalibriert):
 * - 3 Leicht / Grundlagen (Foundational) (25,0 %): Q001, Q005, Q009
 * - 6 Mittel / Fortgeschritten (Intermediate) (50,0 %): Q002, Q004, Q006, Q007, Q010, Q011
 * - 3 Schwer / Komplex (Advanced) (25,0 %): Q003, Q008, Q012
 * 
 * Antwortschlüssel (vollständig ausbalanciert & azyklisch, Max-Streak = 1):
 * - A: 3 (Q002, Q006, Q011)
 * - B: 3 (Q004, Q009, Q012)
 * - C: 2 (Q001, Q008)
 * - D: 2 (Q003, Q007)
 * - E: 2 (Q005, Q010)
 * Gesamt: 12 Aufgaben
 * Sequenz: C - A - D - B - E - A - D - C - B - E - A - B
 */

import type { StoredQuestion } from "../questions/types";

export interface QcTvGp4Passage {
  id: string;
  title: string;
  topic: string;
  text: string;
  paragraphs: string[];
  questionIds: string[];
}

export interface QcTvGp4QuestionRaw {
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
// DIE 4 WISSENSCHAFTLICHEN LESEPASSAGEN (GENERALPROBE #4)
// ─────────────────────────────────────────────────────────────────────────────

const PASSAGE_1_TEXT = `In der klassischen Physiologie wurde die Aufrechterhaltung des inneren Milieus seit Walter Cannon über das Konzept der Homöostase definiert. Dieses Modell postuliert, dass lebensnotwendige Kernparameter – wie der arterielle pH-Wert, die Sauerstoffsättigung oder die Körperkerntemperatur – durch rigide negative Rückkopplungsschleifen auf konstanten, invarianten Sollwerten gehalten werden müssen. Zur Beschreibung der Anpassung an variable Umweltanforderungen führten die Neurobiologen Peter Sterling und Joseph Eyer jedoch das komplementäre Konzept der „Allostase“ ein. Allostase bedeutet wörtlich „Stabilität durch Veränderung“: Um das Überleben in dynamischen, bedrohlichen oder unvorhersehbaren Situationen zu sichern, moduliert der Organismus physiologische Parameter wie Blutdruck, Herzfrequenz, Glukosefreisetzung und Entzündungsmediatoren flexibel über weite physiologische Spannbreiten hinweg.

Während eine kurzfristige allostatische Reaktion adaptiv und lebenserhaltend ist, birgt ihre chronische Aufrechterhaltung erhebliche Gefahren. Der Stressforscher Bruce McEwen prägte hierfür den Begriff der „allostatischen Last“ (Allostatic Load). Wird das Stressreaktionssystem – insbesondere die Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA-Achse) und das sympathische Nervensystem – kontinuierlich aktiviert, ohne dass adäquate Erholungsphasen eintreten, kommt es zu einer kumulativen biologischen Abnutzung. Die dauerhafte Überflutung des Gewebes mit Glukokortikoiden und Katecholaminen schädigt die Gefäßintima, induziert endotheliale Dysfunktionen und triggert eine systemische niedriggradige Entzündung („Low-Grade Inflammation“). Im zentralen Nervensystem führt chronisch erhöhtes Cortisol zudem zu einem Rückgang dendritischer Verzweigungen im Hippocampus, was die körpereigene negative Feedback-Hemmung der Stressachse weiter schwächt.

Klinisch-epidemiologische Studien belegen die diagnostische Überlegenheit dieses systemischen Konzepts gegenüber traditionellen Risikofaktoren. Ein validierter Allostatic-Load-Index fasst Biomarker aus mehreren physiologischen Regelkreisen – darunter Cortisol, DHEA-S, Interleukin-6, systolischer Blutdruck, glykiertes Hämoglobin (HbA1c) und das Taillen-Hüft-Verhältnis – zu einem kumulativen Summenwert zusammen. Längsschnittdaten zeigen, dass dieser multisystemische Index das Risiko für kardiovaskuläre Ereignisse, kognitiven Abbau und Gesamtmortalität signifikant präziser prognostiziert als isolierte Einzelbefunde wie ein punktuell erhöhter Cholesterinspiegel oder ein einzelner diastolischer Blutdruckwert. Das pathologische Gesamtrisiko resultiert demnach nicht aus dem dramatischen Entgleisen eines einzelnen Parameters, sondern aus der gleichzeitigen, subklinischen Dysregulation vieler vernetzter Regelkreise.

Die Ausprägung allostatischer Last ist jedoch kein deterministisches Schicksal, sondern wird maßgeblich durch neuronale Plastizität und kognitive Bewertungsprozesse moduliert. Bildgebende Untersuchungen zeigen, dass Personen mit ausgeprägter psychologischer Resilienz bei Stressinduktion eine stärkere funktionelle Konnektivität zwischen dem ventromedialen präfrontalen Kortex und der Amygdala aufweisen. Durch diese top-down gesteuerte kognitive Neubewertung (Cognitive Reappraisal) kann die Reaktivität des limbischen Systems gedämpft werden. Dies verhindert eine inadäquate Verlängerung der hormonellen Stressantwort nach Wegfall des Stressors. In Kombination mit strukturierten Erholungsintervallen und sozialer Einbindung ermöglicht dies eine effektive allostatische Entlastung, sodass selbst nach phasenweiser Überlastung eine Reversibilität der physiologischen Dysfunktionen erreicht werden kann.`;

const PASSAGE_2_TEXT = `In der historischen Entwicklung der Infektionsbiologie wurden Viren über mehr als ein Jahrhundert hinweg nahezu ausnahmslos als zellzerstörende Krankheitserreger wahrgenommen. Erst die Etablierung hochdurchsatzfähiger metagenomischer Sequenziertechnologien korrigierte diesen Blickwinkel grundlegend: Der gesunde menschliche Organismus wird dauerhaft von einer gigantischen Zahl verschiedenartiger Viren besiedelt, die in ihrer Gesamtheit als humanes Virom bezeichnet werden. Dieses Konsortium übertrifft die Anzahl der körpereigenen menschlichen Zellen um ein Vielfaches und umfasst nicht nur prokaryotenspezifische Bakteriophagen, sondern auch permanente eukaryotische Viren sowie endogene Retroviren. Anstatt unausweichlich Krankheiten zu induzieren, gehen viele dieser Viren mutualistische oder kommensale Symbiosen mit dem Wirtsorganismus ein.

Eine herausragende Schutzfunktion üben Bakteriophagen an den Schleimhäuten des Gastrointestinaltrakts und der Atemwege aus. Nach dem von Jeremy Barr formulierten „BAM-Modell“ (Bacteriophage Adherence to Mucus) besitzen viele Schleimhaut-Phagen an ihren Kapsid- und Schwanzproteinen spezialisierte Immunglobulin-ähnliche Domänen. Diese Strukturen binden mit hoher Affinität an Glykoproteine der Mucin-Schicht, die das Epithel wie ein zähflüssiger Schutzfilm überzieht. An dieser Barriere angereichert, bilden die Phagen ein dynamisches, zellfreies Abwehrsystem: Treffen invasive pathogene Bakterien auf den Schleimfilm, werden sie von den sesshaften Phagen abgefangen, infiziert und lysiert, noch bevor sie die epitheliale Zellschicht erreichen und Entzündungskaskaden auslösen können.

Doch auch eukaryotische Viren, die traditionell als potenzielle Krankheitsauslöser gelten, können dem Wirt entscheidende Überlebensvorteile verschaffen. Experimentelle Infektionsstudien an keimfreien Labormäusen zeigten, dass eine persistierende, latente Infektion mit dem murinen Gamma-Herpesvirus 68 das Immunsystem der Tiere grundlegend umprogrammiert. Durch die kontinuierliche subklinische Präsenz des Virus kommt es zu einer basalen Hochregulierung des Botenstoffs Interferon-gamma und zu einer anhaltenden Aktivierung von Makrophagen im retikuloendothelialen System. In der Folge waren die latent infizierten Mäuse gegenüber tödlichen Dosen des hochvirulenten bakteriellen Pathogens Listeria monocytogenes sowie des Pesterregers Yersinia pestis signifikant resistenter als viralfreie Kontrolltiere. Die chronische Viruspersistenz fungiert hierbei als endogener Immun-Verstärker, der die unspezifische Erregerabwehr in ständiger Alarmbereitschaft hält.

Diese nützlichen symbiotischen Beziehungen sind jedoch an ein fragiles ökologisches Gleichgewicht gebunden. Das Virom ist kein statisch geschütztes Refugium, sondern reagiert hochsensibel auf Störungen der Wirtsphysiologie. Bei ausgeprägter medikamentöser Immunsuppression, chronischer Fehlernährung oder aggressiven zytostatischen Therapien kann die immunologische Kontrolle versagen: Kommensale eukaryotische Viren treten aus ihrer Latenzphase in einen lytischen Replikationszyklus über und verursachen schwere opportunistische Organinfektionen. Ebenso können unkontrollierte Vermehrungsschübe von Phagen lebenswichtige, gesundheitsfördernde Darmbakterien dezimieren und eine mikrobielle Dysbiose auslösen. Das humane Virom stellt somit ein biologisches Januskopf-Phänomen dar, dessen physiologischer Nutzen untrennbar mit der Integrität des umgebenden Immunsystems verwoben ist.`;

const PASSAGE_3_TEXT = `Die fortschreitende Urbanisierung und die bauliche Verdichtung moderner Ballungsräume verändern die Strahlungsbilanz und den thermischen Haushalt der bodennahen Atmosphäre grundlegend. Dieses Phänomen wird in der Stadtklimatologie als städtischer Hitzeinseleffekt (Urban Heat Island, UHI) bezeichnet: Dicht bebaute Stadtkerne weisen im Vergleich zum ländlichen Umland signifikant höhere Luft- und Oberflächentemperaturen auf. Die primäre physikalische Ursache liegt in den veränderten Materialeigenschaften versiegelter Flächen. Konventionelle Baustoffe wie Asphalt, Beton und Dachziegel besitzen eine hohe Wärmekapazität und eine geringe Albedo (Rückstrahlvermögen). Sie absorbieren tagsüber große Mengen kurzwelliger Sonneneinstrahlung, speichern die Wärmeenergie im Baukörper und geben diese während der Nachtstunden nur stark verzögert als langwellige Wärmestrahlung wieder an die Umgebung ab.

Aus humanmedizinischer Sicht sind nicht primär die Tageshöchstwerte problematisch, sondern das Ausbleiben der nächtlichen Abkühlung. Sinken die Temperaturen in den Nachtstunden nicht unter die Schwelle von 20 °C – sogenannte „Tropennächte“ –, wird der physiologische Erholungsschlaf empfindlich gestört. Das vegetative Nervensystem verharrt in einer sympathikotonen Aktivierung; der physiologische nächtliche Blutdruckabfall („Nocturnal Dipping“) bleibt aus. Längsschnittliche epidemiologische Mortalitätsanalysen belegen, dass Serien aufeinanderfolgender Tropennächte mit einem steilen Anstieg von Krankenhauseinweisungen und einer signifikanten Übersterblichkeit korrelieren, wobei geriatrische Patienten sowie Personen mit vorbestehenden Herz-Kreislauf- oder respiratorischen Erkrankungen die Hauptlast tragen.

Als Gegenmaßnahme propagiert die Stadtplanung häufig die Begrünung des Straßenraums und die Schaffung innerstädtischer Grünanlagen. Vegetationsflächen kühlen ihre Umgebung über zwei physikalische Mechanismen: durch direkte Beschattung und durch Verdunstungskälte infolge pflanzlicher Evapotranspiration. Neuere biometeorologische Strömungssimulationen und Feldmessungen deckten jedoch ein überraschendes Paradoxon auf: In tief eingeschnittenen, engen Straßenschluchten („Urban Canyons“) mit hohem Gebäudebestand können dicht belaubte Baumkronen den nächtlichen Luftaustausch empfindlich behindern. Wenn die Kronendächer zusammengewachsen sind, wirken sie wie eine aerodynamische Barriere, die das Entweichen der tagsüber im Asphalt gespeicherten Wärme nach oben bremst und gleichzeitig bodennahe Windgeschwindigkeiten drastisch herabsetzt.

Eine nachhaltige stadtklimatische Thermoregulation erfordert daher die Überwindung isolierter punktueller Einzelmaßnahmen zugunsten eines übergeordneten bioklimatischen Gesamtkonzepts. Entscheidend ist die Erhaltung und Freihaltung übergeordneter Kaltluftentstehungsgebiete im Umland – etwa unzerschnittener Hänge, Wiesen und Wälder – sowie deren Anbindung an das Stadtzentrum über breite, unbebaute Ventilationsschneisen. Kaltluft besitzt eine höhere Dichte als Warmluft und strömt als bodennaher Flurwind schwerkraftgetrieben in die überhitzten Stadtquartiere ein. Nur wenn diese Ventilationskorridore strömungsmechanisch offen gehalten werden, können innerstädtische Grünzüge ihr volles Kühlpotenzial entfalten und nächtliche Temperaturabsenkungen von bis zu 3 bis 4 Kelvin im Quartier erzielen.`;

const PASSAGE_4_TEXT = `In komplexen, zeitkritischen Entscheidungssituationen – wie der notfallmedizinischen Triage oder der differenzialdiagnostischen Abklärung unklarer Symptome – stößt die menschliche Informationsverarbeitung rasch an ihre neurobiologischen Kapazitätsgrenzen. Um dieses Defizit der „begrenzten Rationalität“ (Bounded Rationality) zu kompensieren, greift das Gehirn auf Daumenregeln und intuitive Abkürzungen zurück, die in der Kognitionspsychologie als Heuristiken bezeichnet werden. Heuristiken wie die Repräsentativitäts- oder die Verfügbarkeitsheuristik ermöglichen extrem schnelle Urteile unter minimalem kognitivem Aufwand. Der Preis für diese Effizienz sind jedoch systematische Urteilsfehler (kognitive Biases): So neigen Behandelnde unter Zeitdruck dazu, seltene, aber lebensbedrohliche Erkrankungen zu übersehen, wenn ein kürzlich behandelter, ähnlich gelagerter Fall die diagnostische Hypothesenbildung dominiert.

Zur Minimierung dieser menschlichen Fehlbarkeit werden zunehmend statistische Vorhersagemodelle und algorithmenbasierte Entscheidungshilfen implementiert. Bereits in den 1950er-Jahren wies der Psychologe Paul Meehl in bahnbrechenden Vergleichsstudien nach, dass mechanische und formale statistische Algorithmen der klinischen Intuition von Fachexperten in einer Vielzahl von Vorhersageszenarien überlegen sind. Während menschliche Urteile durch situative Ermüdung, emotionale Befindlichkeiten, Ablenkungen und willkürliche Gewichtungswechsel verzerrt werden, verarbeiten algorithmische Modelle Eingangsdaten vollkommen konsistent nach unveränderlichen logischen Regeln. Moderne, auf maschinellem Lernen basierende Risikoscores können komplexe Labor- und Vitalparameterkonstellationen mit einer prognostischen Trennschärfe analysieren, die selbst erfahrene Spezialisten im klinischen Alltag nicht erreichen.

Trotz dieser nachgewiesenen Überlegenheit scheitert die praktische Implementierung künstlicher Prognosesysteme häufig an einem hartnäckigen psychologischen Phänomen: der sogenannten „algorithmischen Aversion“ (Algorithm Aversion). Verhaltensökonomische Experimente zeigen ein paradoxes Asymmetrieverhalten bei der Bewertung von Fehlern: Macht ein menschlicher Experte eine Fehldiagnose, wird ihm dies von Kollegium und Öffentlichkeit meist als tragische, aber unvermeidliche Fehlbarkeit nachgesehen („Irren ist menschlich“). Begeht ein algorithmisches System hingegen exakt denselben prognostischen Fehler, bricht das Vertrauen der Anwender schlagartig und nachhaltig ein. Selbst wenn Probanden vorab statistisch belegt wurde, dass der Algorithmus signifikant weniger Fehler produziert als der menschliche Arzt, kehren Anwender nach dem Miterleben eines einzelnen Computerfehlers bereitwillig zum fehleranfälligeren menschlichen Urteil zurück.

Um diese Blockade zu überwinden, plädiert die moderne Entscheidungsforschung für die Gestaltung hybrider Interaktionsmodelle („Centaur-Systeme“). Anstatt Algorithmen als autonome, unantastbare Instanzen zu konzipieren, müssen Entscheidungshilfen transparent und partizipativ angelegt sein. Experimente belegen: Dürfen menschliche Fachexperten den Vorschlag eines Algorithmus nachvollziehen und ihn bei Vorliegen atypischer, nicht-standardisierter Kontextfaktoren modifizieren oder gezielt überstimmen, sinkt die algorithmische Aversion drastisch. Entscheidend ist, dass bereits die minimale Möglichkeit, den Algorithmus geringfügig anzupassen (selbst um nur wenige Prozentpunkte), das Vertrauen und die Nutzungsbereitschaft massiv steigert. Durch die Kombination algorithmischer Rechenpräzision mit menschlicher Kontextsensitivität erzielen solche kooperativen Systeme diagnostische Genauigkeiten, die sowohl reine Expertenurteile als auch rein autonome Algorithmen übertreffen.`;

export const GENERALPROBE_4_TV_PASSAGES: QcTvGp4Passage[] = [
  {
    id: "tv-gp4-p1",
    title: "Allostase, allostatische Last und neuroendokrine Stressregulation",
    topic: "Physiologische Sollwertdynamik, HPA-Achsen-Abnutzung und kognitive Resilienz",
    text: PASSAGE_1_TEXT,
    paragraphs: PASSAGE_1_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP4-001", "TV-GP4-002", "TV-GP4-003"],
  },
  {
    id: "tv-gp4-p2",
    title: "Das humane Virom, mukosale Phagen-Barrieren und kommensale Immunmodulation",
    topic: "Eukaryotische Viren und Phagen als symbiotische Regulatoren der Immunhomöostase",
    text: PASSAGE_2_TEXT,
    paragraphs: PASSAGE_2_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP4-004", "TV-GP4-005", "TV-GP4-006"],
  },
  {
    id: "tv-gp4-p3",
    title: "Mikroklima in Verdichtungsräumen, städtische Hitzeinseln und bioklimatische Ventilation",
    topic: "Oberflächen-Albedo, nächtliche Tropennächte und aerodynamische Kaltluftkorridore",
    text: PASSAGE_3_TEXT,
    paragraphs: PASSAGE_3_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP4-007", "TV-GP4-008", "TV-GP4-009"],
  },
  {
    id: "tv-gp4-p4",
    title: "Heuristische Urteilsbildung, algorithmische Vorhersagen und das Dilemma der Fehlertoleranz",
    topic: "Kognitive Biases, statistische Überlegenheit und Überwindung der Algorithm Aversion",
    text: PASSAGE_4_TEXT,
    paragraphs: PASSAGE_4_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP4-010", "TV-GP4-011", "TV-GP4-012"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DIE 12 QUALITÄTSGESICHERTEN FRAGEN (GENERALPROBE #4)
// ─────────────────────────────────────────────────────────────────────────────

export const RAW_GENERALPROBE_4_TV_QUESTIONS: QcTvGp4QuestionRaw[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 1: Allostase & Allostatic Load (Fragen 1–3)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP4-001",
    passageId: "tv-gp4-p1",
    passageTitle: "Allostase, allostatische Last und neuroendokrine Stressregulation",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Allostase vs. Homöostase",
    subtopic: "Konzeptabgrenzung & Begriffsdefinition",
    difficulty: "foundational",
    concept: "Unterscheidung zwischen rigider Sollwertkonstanz (Homöostase) und dynamischer Anpassung (Allostase)",
    stem: "Worin besteht laut Text der wesentliche Unterschied zwischen dem klassischen Konzept der Homöostase und dem Modell der Allostase?",
    options: {
      A: "Homöostase beschreibt die flexible Anpassung an Umweltanforderungen, während Allostase ausschließlich im zentralen Nervensystem abläuft.",
      B: "Homöostase wird ausschließlich durch das sympathische Nervensystem vermittelt, während Allostase rein auf Glukokortikoiden basiert.",
      C: "Homöostase strebt nach der Konstanthaltung lebensnotwendiger Kernparameter auf invarianten Sollwerten, während Allostase Stabilität durch flexible, adaptive Veränderung physiologischer Parameter über weite Spannbreiten hinweg beschreibt.",
      D: "Homöostase führt bei jeder Aktivierung zu Gewebeschäden, während Allostase stets vollkommen frei von biologischer Abnutzung bleibt.",
      E: "Homöostase betrifft nur das Immunsystem, während Allostase den Blutdruck auf einem invarianten Minimalwert fixiert."
    },
    correct_answer: "C",
    explanation_correct: "In Absatz 1 wird explizit ausgeführt: Homöostase postuliert, dass lebensnotwendige Kernparameter (wie pH-Wert oder Körperkerntemperatur) durch Rückkopplungsschleifen auf konstanten, invarianten Sollwerten gehalten werden müssen. Allostase bedeutet demgegenüber wörtlich „Stabilität durch Veränderung“, bei der Parameter wie Blutdruck, Herzfrequenz und Glukosefreisetzung flexibel über weite physiologische Spannbreiten moduliert werden, um das Überleben in dynamischen Situationen zu sichern.",
    explanations_incorrect: {
      A: "Verkehrt die Definitionen ins Gegenteil: Die flexible Anpassung an Umweltanforderungen definiert Allostase, nicht Homöostase. Zudem beschränkt sich Allostase nicht auf das ZNS.",
      B: "Widerspricht dem Text; der Text nennt für Allostase eine Vielzahl mediatorischer Systeme (Blutdruck, Herzfrequenz, Glukose, Entzündungsmediatoren), nicht nur Glukokortikoide.",
      D: "Falsch: Homöostase erhält lebensnotwendige Parameter aufrecht und schädigt Gewebe nicht per se, während Allostase bei chronischer Aktivierung zur schädigenden „allostatischen Last“ führt.",
      E: "Frei erfunden: Homöostase betrifft nicht nur das Immunsystem, und Allostase fixiert den Blutdruck keineswegs auf einem invarianten Wert, sondern variiert ihn adaptiv."
    },
    evidenceLocation: "Absatz 1",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-002",
    passageId: "tv-gp4-p1",
    passageTitle: "Allostase, allostatische Last und neuroendokrine Stressregulation",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Neuroendokrine Pathophysiologie",
    subtopic: "Hippocampus & Feedback-Hemmung",
    difficulty: "intermediate",
    concept: "Folgen chronischer Glukokortikoid-Überflutung auf die hippocampale Zytoarchitektur",
    stem: "Welche neurobiologische Folge einer chronischen Glukokortikoid-Überflutung wird im zweiten Absatz für den Hippocampus beschrieben, und welche funktionelle Konsequenz resultiert daraus?",
    options: {
      A: "Ein Rückgang dendritischer Verzweigungen im Hippocampus, was die körpereigene negative Feedback-Hemmung der Stressachse schwächt.",
      B: "Eine dauerhafte Hypertrophie der hippocampalen Neuronen, was zu einer irreversiblen Blockade der Hypophyse führt.",
      C: "Ein vollständiger Verlust aller Glukokortikoid-Rezeptoren im präfrontalen Kortex ohne Auswirkung auf die HPA-Achse.",
      D: "Eine sofortige Auslöschung aller Gedächtnisinhalte bei gleichzeitiger Zunahme des Gefäßtonus im gesamten Gehirn.",
      E: "Eine unkontrollierte Vermehrung von dendritischen Synapsen, die zu einer Überstimulation der Nebennierenrinde führt."
    },
    correct_answer: "A",
    explanation_correct: "In Absatz 2 führt der Text aus: Im zentralen Nervensystem führt chronisch erhöhtes Cortisol zu einem Rückgang dendritischer Verzweigungen im Hippocampus. Dies schwächt die körpereigene negative Feedback-Hemmung der Stressachse weiter, wodurch die Stressreaktion prolongiert wird.",
    explanations_incorrect: {
      B: "Widerspricht dem Text: Es kommt zu einem Rückgang von Verzweigungen (Atrophie/Degeneration), nicht zu einer Hypertrophie oder Hypophysenblockade.",
      C: "Wird im Text nicht beschrieben; der Text thematisiert dendritische Verzweigungen im Hippocampus und deren Feedback-Wirkung auf die HPA-Achse.",
      D: "Übertriebene, im Text nicht vorkommende Behauptung einer sofortigen Auslöschung aller Gedächtnisinhalte.",
      E: "Kehrt den zellulären Befund um: Der Text beschreibt einen Rückgang (Reduktion) dendritischer Verzweigungen, keine unkontrollierte Vermehrung."
    },
    evidenceLocation: "Absatz 2",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-003",
    passageId: "tv-gp4-p1",
    passageTitle: "Allostase, allostatische Last und neuroendokrine Stressregulation",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Klinische Diagnostik & Biomarker",
    subtopic: "Allostatic-Load-Index vs. Einzelparameter",
    difficulty: "advanced",
    concept: "Multisystemische Risikoakkumulation versus isolierte Einzelbiomarker",
    stem: "Welche Schlussfolgerung über die Aussagekraft des Allostatic-Load-Index im Vergleich zu traditionellen klinischen Einzelbefunden wird im dritten Absatz begründet?",
    options: {
      A: "Einzelne Biomarker wie der Cholesterinspiegel sind im klinischen Alltag vollkommen wertlos und müssen ausnahmslos durch genetische Profile ersetzt werden.",
      B: "Der Index ist nur dann prognostisch valide, wenn mindestens ein einzelner Parameter extrem pathologisch entgleist ist.",
      C: "Längsschnittdaten belegen, dass der Allostatic-Load-Index kardiovaskuläre Ereignisse zwar vorhersagen kann, für kognitiven Abbau jedoch unbrauchbar ist.",
      D: "Das Gesamtrisiko für Morbidität und Mortalität wird durch die gleichzeitige, subklinische Dysregulation mehrerer vernetzter Regelkreise präziser erfasst als durch isolierte Einzelparameter wie Cholesterin oder Blutdruck.",
      E: "Der Summenwert misst ausschließlich die Schädigung der Gefäßintima und vernachlässigt metabolische Regelkreise wie den HbA1c-Wert vollständig."
    },
    correct_answer: "D",
    explanation_correct: "In Absatz 3 schließt der Text: Der multisystemische Allostatic-Load-Index prognostiziert kardiovaskuläre Ereignisse, kognitiven Abbau und Gesamtmortalität signifikant präziser als isolierte Einzelbefunde. Das pathologische Gesamtrisiko resultiert demnach nicht aus dem dramatischen Entgleisen eines einzelnen Parameters, sondern aus der gleichzeitigen, subklinischen Dysregulation vieler vernetzter Regelkreise.",
    explanations_incorrect: {
      A: "Extreme Verallgemeinerung, die der Text nicht stützt: Einzelbiomarker werden nicht als völlig wertlos deklariert, und von genetischen Profilen ist keine Rede.",
      B: "Widerspricht direkt dem Text: Das pathologische Risiko entsteht gerade nicht durch ein extremes Entgleisen eines Einzelwerts, sondern durch subtile, gleichzeitige Dysregulationen vieler Systeme.",
      C: "Falsch: Der Text nennt explizit sowohl kardiovaskuläre Ereignisse als auch kognitiven Abbau und Gesamtmortalität als präzise prognostizierbare Endpunkte.",
      E: "Sachlich unzutreffend: Der Text listet HbA1c, Taillen-Hüft-Verhältnis und Entzündungsmarker ausdrücklich als integrale Bestandteile des Index auf."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 2: Das humane Virom (Fragen 4–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP4-004",
    passageId: "tv-gp4-p2",
    passageTitle: "Das humane Virom, mukosale Phagen-Barrieren und kommensale Immunmodulation",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Schleimhautimmunität & Mikrobiologie",
    subtopic: "BAM-Modell der Bakteriophagen",
    difficulty: "intermediate",
    concept: "Wirkmechanismus mukosaler Phagen über Mucin-Interaktion",
    stem: "Über welchen molekularen Mechanismus schützen Bakteriophagen laut dem im Text beschriebenen BAM-Modell die menschlichen Schleimhäute?",
    options: {
      A: "Sie sekretieren Antikörper direkt in den Blutkreislauf und zerstören dort fremde Viren durch Komplementaktivierung.",
      B: "Sie binden über Immunglobulin-ähnliche Proteindomänen an Mucin-Glykoproteine der Schleimschicht und fangen invasive pathogene Bakterien durch Lyse ab, bevor diese das Epithel erreichen.",
      C: "Sie dringen in die Zellkerne der Epithelzellen ein und blockieren dort dauerhaft die bakterielle DNA-Replikation.",
      D: "Sie wandeln Mucin enzymatisch in toxische Säuren um, wodurch sämtliche Mikroorganismen im Darmlumen abgetötet werden.",
      E: "Sie ersetzen die körpereigenen Makrophagen und verdauen fremde Proteine durch Phagozytose."
    },
    correct_answer: "B",
    explanation_correct: "In Absatz 2 wird das BAM-Modell (Bacteriophage Adherence to Mucus) dargelegt: Phagen binden über Immunglobulin-ähnliche Domänen an Mucin-Glykoproteine der Schleimschicht. Dort angereichert bilden sie ein zellfreies Abwehrsystem, das invasive pathogene Bakterien abfängt, infiziert und lysiert, noch bevor diese das Epithel erreichen.",
    explanations_incorrect: {
      A: "Phagen sind Viren und sezernieren keine Antikörper; Antikörper werden von Plasmazellen des Wirts gebildet.",
      C: "Phagen infizieren Bakterien (Prokaryoten), dringen aber beim BAM-Modell nicht in die Zellkerne menschlicher Epithelzellen ein.",
      D: "Frei erfunden: Phagen wandeln Mucin nicht in Säuren um; eine totale Abtötung aller Darmlumen-Mikroben widerspräche der Symbiose.",
      E: "Biologisch unsinnig: Viren können keine Phagozytose betreiben und ersetzen keine Immunzellen des Wirts."
    },
    evidenceLocation: "Absatz 2",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-005",
    passageId: "tv-gp4-p2",
    passageTitle: "Das humane Virom, mukosale Phagen-Barrieren und kommensale Immunmodulation",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Symbiotische Viren & Infektionsschutz",
    subtopic: "Gamma-Herpesvirus 68 Experiment",
    difficulty: "foundational",
    concept: "Experimentelle Befunde zur herpesinduzierten Erregerresistenz",
    stem: "Welcher experimentelle Befund ergab sich bei den mit dem murinen Gamma-Herpesvirus 68 infizierten Mäusen im Vergleich zu viralfreien Kontrolltieren?",
    options: {
      A: "Sie starben innerhalb weniger Tage an einer fulminanten Leberentzündung infolge einer Überlastung des Retikuloendothels.",
      B: "Sie verloren die Fähigkeit zur Zytokinbildung vollständig und wurden anfällig für opportunistische Mykosen.",
      C: "Ihre Darmflora wurde durch das Herpesvirus vollständig lysiert, was zu irreversiblem Nährstoffmangel führte.",
      D: "Sie bildeten keine Schleimhaut-Mucine mehr und wiesen eine dauerhafte Zerstörung der Atemwegsepithelien auf.",
      E: "Sie zeigten eine basale Hochregulierung von Interferon-gamma und eine Makrophagenaktivierung, wodurch sie signifikant resistenter gegen tödliche Dosen von Listeria monocytogenes waren."
    },
    correct_answer: "E",
    explanation_correct: "In Absatz 3 wird die experimentelle Studie geschildert: Mäuse mit einer latenten Infektion durch Gamma-Herpesvirus 68 wiesen eine basale Hochregulierung von Interferon-gamma und eine anhaltende Aktivierung von Makrophagen auf. Dadurch waren sie gegenüber tödlichen Dosen von Listeria monocytogenes und Yersinia pestis signifikant resistenter als viralfreie Kontrolltiere.",
    explanations_incorrect: {
      A: "Widerspricht dem Text diametral: Die Mäuse starben nicht, sondern überlebten selbst tödliche bakterielle Dosen dank gesteigerter Erregerabwehr.",
      B: "Falsch: Die Zytokinbildung wurde nicht gehemmt, sondern Interferon-gamma wurde gezielt hochreguliert.",
      C: "Herpesviren sind eukaryotische Viren und lysieren keine Bakterien; die Darmflora wurde nicht vernichtet.",
      D: "Reine Erfindung ohne Textbezug: Die Mucinbildung der Schleimhäute blieb unbeeinträchtigt."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-006",
    passageId: "tv-gp4-p2",
    passageTitle: "Das humane Virom, mukosale Phagen-Barrieren und kommensale Immunmodulation",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Virom-Dynamik & Pathogenität",
    subtopic: "Bedingungen für Dysbiose & Infektion",
    difficulty: "intermediate",
    concept: "Kippen des kommensalen Gleichgewichts unter Immunsuppression",
    stem: "Unter welchen spezifischen Bedingungen kann das an sich protektive humane Virom laut dem vierten Absatz zu einem gesundheitlichen Risiko für den Organismus werden?",
    options: {
      A: "Bei ausgeprägter Immunsuppression, Fehlernährung oder Zytostatikatherapie, da kommensale Viren aus der Latenz treten und Phagen gesundheitsfördernde Darmbakterien dezimieren können.",
      B: "Sobald der Wirt eine rein pflanzliche Ernährung aufnimmt, da pflanzliche Ballaststoffe die Mucin-Schicht im Magen chemisch auflösen.",
      C: "Ausschließlich dann, wenn der Organismus zuvor unter vollkommen sterilen Laborbedingungen aufgezogen wurde.",
      D: "Wenn die Gesamtzahl der Phagen im Körper die Anzahl der körpereigenen menschlichen Zellen unterschreitet.",
      E: "Durch intensive körperliche Betätigung, welche die Immunglobulin-Domänen der Schleimhaut-Phagen irreversibel denaturiert."
    },
    correct_answer: "A",
    explanation_correct: "In Absatz 4 beschreibt der Text das Scheitern der immunologischen Kontrolle: Bei Immunsuppression, Fehlernährung oder aggressiven zytostatischen Therapien können kommensale eukaryotische Viren aus der Latenzphase in einen lytischen Zyklus übertreten und opportunistische Organinfektionen verursachen. Gleichzeitig können Phagenschübe nützliche Darmbakterien dezimieren und mikrobielle Dysbiose auslösen.",
    explanations_incorrect: {
      B: "Pflanzliche Ernährung wird im Text nirgends erwähnt oder als Schädigungsmechanismus für Mucin aufgeführt.",
      C: "Falsch: Die Gefahr betrifft den realen menschlichen Wirt bei Immunstörungen, nicht nur sterile Labortiere.",
      D: "Widerspricht Absatz 1 und 4: Das Verhältnis der Partikelzahlen zueinander ist nicht die genannte Ursache für das pathologische Kippen.",
      E: "Völlig frei erfunden: Körperliche Betätigung und Denaturierung von Phagendomänen werden im Text nicht thematisiert."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 3: Urbanes Mikroklima & Hitzeinseln (Fragen 7–9)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP4-007",
    passageId: "tv-gp4-p3",
    passageTitle: "Mikroklima in Verdichtungsräumen, städtische Hitzeinseln und bioklimatische Ventilation",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Stadtklimatologie & Humanmedizin",
    subtopic: "Tropennächte & Nocturnal Dipping",
    difficulty: "intermediate",
    concept: "Pathophysiologische Belastung durch fehlende nächtliche Abkühlung",
    stem: "Warum sind laut zweitem Absatz insbesondere sogenannte Tropennächte mit Nachttemperaturen von über 20 °C aus kardiovaskulärer Sicht hochgradig belastend?",
    options: {
      A: "Weil bei 20 °C die Sauerstoffsättigung der städtischen Atemluft schlagartig auf die Hälfte abfällt.",
      B: "Weil der menschliche Körper nachts vermehrt kurzwellige Sonnenstrahlung absorbiert und speichert.",
      C: "Weil geriatrische Patienten in Tropennächten keine Albedo mehr aufweisen und überhitzen.",
      D: "Weil das vegetative Nervensystem in sympathikotoner Daueraktivierung verbleibt und der physiologische nächtliche Blutdruckabfall (Nocturnal Dipping) ausbleibt.",
      E: "Weil die Evapotranspiration der menschlichen Haut bei 20 °C vollständig zum Stillstand kommt."
    },
    correct_answer: "D",
    explanation_correct: "In Absatz 2 wird detailliert begründet: Wenn die Temperaturen nachts nicht unter 20 °C sinken, wird der physiologische Erholungsschlaf gestört. Das vegetative Nervensystem verharrt in einer sympathikotonen Aktivierung, und der physiologische nächtliche Blutdruckabfall (Nocturnal Dipping) bleibt aus, was zu kardiovaskulärer Überlastung und Übersterblichkeit führt.",
    explanations_incorrect: {
      A: "Völlig absurd: Die Sauerstoffsättigung der Luft halbiert sich bei 20 °C keineswegs.",
      B: "Nachts gibt es keine Sonneneinstrahlung; der Text spricht von langwelliger Wärmeabgabe durch Baukörper, nicht von nächtlicher Sonnenstrahlungsaufnahme des Körpers.",
      C: "Verwechselt Begriffe: Albedo ist das Rückstrahlvermögen von Oberflächen (Baustoffen), keine Eigenschaft geriatrischer Patienten.",
      E: "Falsch: Schwitzen und Verdunstung stoppen bei 20 °C nicht; der Text nennt die sympathische vegetative Aktivierung und fehlende Blutdrucksenkung als Ursache."
    },
    evidenceLocation: "Absatz 2",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-008",
    passageId: "tv-gp4-p3",
    passageTitle: "Mikroklima in Verdichtungsräumen, städtische Hitzeinseln und bioklimatische Ventilation",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Biometeorologie & Straßenschluchten",
    subtopic: "Paradoxon von Baumkronen in Urban Canyons",
    difficulty: "advanced",
    concept: "Aerodynamische Barrierewirkung dichter Baumkronen in engen Straßenschluchten",
    stem: "Welches stadtklimatische Paradoxon bezüglich Straßenbäumen in engen Straßenschluchten („Urban Canyons“) wird im dritten Absatz beschrieben?",
    options: {
      A: "Straßenbäume heizen ihre Umgebung tagsüber auf, da ihre Blätter die Albedo von Asphalt künstlich herabsetzen.",
      B: "In Straßenschluchten entfällt die Evapotranspiration vollständig, da Bäume dort bauartbedingt keinen Schatten werfen können.",
      C: "Dicht zusammengewachsene Baumkronen können wie eine aerodynamische Barriere wirken, die das vertikale Entweichen gespeicherter Wärme behindert und bodennahe Windgeschwindigkeiten drastisch herabsetzt.",
      D: "Bäume entziehen der bodennahen Luft die Feuchtigkeit und erhöhen dadurch die nächtlichen Temperaturen um 3 bis 4 Kelvin.",
      E: "Die Wurzeln von Straßenbäumen erzeugen im Sommer mechanische Reibungshitze, die das Grundwasser erwärmt."
    },
    correct_answer: "C",
    explanation_correct: "In Absatz 3 legt der Text das Paradoxon dar: In tief eingeschnittenen, engen Straßenschluchten können dicht belaubte, zusammengewachsene Baumkronen eine aerodynamische Barriere bilden. Diese bremst das Entweichen der im Asphalt gespeicherten Wärme nach oben und reduziert gleichzeitig bodennahe Windgeschwindigkeiten drastisch, wodurch der nächtliche Luftaustausch behindert wird.",
    explanations_incorrect: {
      A: "Falsch: Der Text betont, dass Bäume tagsüber kühlen (Schatten und Verdunstung); sie senken nicht die Albedo von Asphalt.",
      B: "Widerspricht dem Text: Schattenwurf und Evapotranspiration sind die beiden Grundwirkprinzipien von Bäumen; das Paradoxon betrifft den nächtlichen Luftaustausch.",
      D: "Verdrehung: Pflanzen verdunsten Wasser (Evapotranspiration), statt Feuchtigkeit zu entziehen; die 3 bis 4 Kelvin Kühlung beziehen sich auf funktionierende Kaltluftsysteme in Absatz 4.",
      E: "Frei erfunden und physikalisch sinnlos: Wurzeln erzeugen keine thermisch relevante Reibungshitze."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-009",
    passageId: "tv-gp4-p3",
    passageTitle: "Mikroklima in Verdichtungsräumen, städtische Hitzeinseln und bioklimatische Ventilation",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Bioklimatische Stadtplanung",
    subtopic: "Kaltluftkorridore & Ventilationsschneisen",
    difficulty: "foundational",
    concept: "Strömungsmechanische Anbindung von Kaltluftentstehungsgebieten",
    stem: "Welche landschaftsplanerische Voraussetzung muss laut viertem Absatz erfüllt sein, damit Kaltluft effektiv in überhitzte Stadtzentren vordringen kann?",
    options: {
      A: "Alle Freiflächen im Umland müssen vollständig mit Beton versiegelt werden, um die thermische Albedo zu maximieren.",
      B: "Breite, unbebaute Ventilationsschneisen müssen die Kaltluftentstehungsgebiete im Umland strömungsmechanisch offen mit dem Stadtzentrum verbinden.",
      C: "Straßenzüge müssen möglichst tief und eng gebaut werden, damit die einströmende Kaltluft nicht vorzeitig nach oben entweicht.",
      D: "In Innenstädten müssen künstliche Absaugventilatoren installiert werden, da Kaltluft leichter als Warmluft ist und spontan aufsteigt.",
      E: "Es genügt, vereinzelte Topfpflanzen auf privaten Dächern aufzustellen, ohne Anbindung an Kaltluftgebiete im Umland."
    },
    correct_answer: "B",
    explanation_correct: "In Absatz 4 wird als zentrale Voraussetzung formuliert: Kaltluftentstehungsgebiete im Umland (Hänge, Wiesen, Wälder) müssen erhalten und über breite, unbebaute Ventilationsschneisen an das Stadtzentrum angebunden werden, damit die dichtere Kaltluft schwerkraftgetrieben als Flurwind ungehindert einströmen kann.",
    explanations_incorrect: {
      A: "Widerspricht dem Text vollständig: Versiegelung mit Beton erzeugt Wärmeinseln; Kaltluft entsteht auf unzerschnittenen Wiesen, Hängen und Wäldern.",
      C: "Widerspricht Absatz 3: Enge Straßenschluchten behindern die Durchlüftung und wirken als Wärmefallen.",
      D: "Physikalisch falsch und im Text widerlegt: Kaltluft besitzt eine höhere Dichte als Warmluft und strömt bodennah ein, anstatt aufzusteigen.",
      E: "Widerspricht der Kernaussage von Absatz 4, der punktuelle isolierte Einzelmaßnahmen ausdrücklich als unzureichend ablehnt."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PASSAGE 4: Heuristiken & Algorithm Aversion (Fragen 10–12)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "TV-GP4-010",
    passageId: "tv-gp4-p4",
    passageTitle: "Heuristische Urteilsbildung, algorithmische Vorhersagen und das Dilemma der Fehlertoleranz",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Kognitive Entscheidungspsychologie",
    subtopic: "Heuristiken & Kognitive Biases",
    difficulty: "intermediate",
    concept: "Effizienz versus Verzerrung bei intuitiven Urteilsheuristiken unter Zeitdruck",
    stem: "Worin besteht laut erstem Absatz das wesentliche Problem beim Einsatz von Urteilsheuristiken unter akutem Zeitdruck?",
    options: {
      A: "Sie verlangsamen die klinische Entscheidungsfindung derart massiv, dass Patienten im Notfall überhaupt nicht mehr versorgt werden können.",
      B: "Sie schalten das logische Denkvermögen dauerhaft aus und induzieren akute Gefäßschäden im präfrontalen Kortex.",
      C: "Sie zwingen Behandelnde dazu, zeitraubende statistische Wahrscheinlichkeitsberechnungen im Kopf durchzuführen.",
      D: "Sie dürfen laut medizinischen Leitlinien nur dann eingesetzt werden, wenn ein computergestützter Risikoscore zuvor ausgefallen ist.",
      E: "Sie ermöglichen zwar eine rasche Orientierung bei minimalem kognitivem Aufwand, führen jedoch zu systematischen Urteilsfehlern wie dem Übersehen seltener Differenzialdiagnosen durch dominante Vorerfahrungen."
    },
    correct_answer: "E",
    explanation_correct: "In Absatz 1 beschreibt der Text das zweischneidige Wesen von Heuristiken: Sie ermöglichen extrem schnelle Urteile unter minimalem kognitivem Aufwand, haben jedoch systematische Urteilsfehler (kognitive Biases) zur Folge. So neigen Behandelnde unter Zeitdruck dazu, seltene, aber lebensbedrohliche Erkrankungen zu übersehen, wenn ein kürzlich erlebter Fall die Hypothesenbildung dominiert.",
    explanations_incorrect: {
      A: "Widerspricht dem Text diametral: Heuristiken ermöglichen extrem schnelle Urteile, anstatt die Entscheidungsfindung zu verlangsamen.",
      B: "Völlig haltlose Behauptung: Heuristiken schalten das Denken nicht dauerhaft aus und verursachen keine Gefäßschäden.",
      C: "Falsch: Heuristiken sind Daumenregeln, die gerade zeitraubende mathematische Berechnungen vermeiden sollen.",
      D: "Reine Erfindung: Leitlinienrestriktionen dieser Art werden im Text nirgends erwähnt."
    },
    evidenceLocation: "Absatz 1",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-011",
    passageId: "tv-gp4-p4",
    passageTitle: "Heuristische Urteilsbildung, algorithmische Vorhersagen und das Dilemma der Fehlertoleranz",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Verhaltensökonomie & Fehlerasymmetrie",
    subtopic: "Phänomen der Algorithm Aversion",
    difficulty: "intermediate",
    concept: "Asymmetrische Bewertung von Fehlern zwischen Mensch und Algorithmus",
    stem: "Was beschreibt der Begriff der „algorithmischen Aversion“ (Algorithm Aversion) im dritten Absatz?",
    options: {
      A: "Das psychologische Phänomen, dass das Vertrauen in ein algorithmisches System nach einem einzigen Fehler schlagartig einbricht, während identische Fehler menschlicher Experten viel eher als verzeihlich toleriert werden.",
      B: "Die Weigerung moderner Computerprogramme, unvollständige oder fehlerhafte Patientendaten zu verarbeiten.",
      C: "Die Forderung von Patientenverbänden, künstliche Intelligenz ausnahmslos in allen Bereichen der Notfallmedizin einzusetzen.",
      D: "Die Neigung von Klinikern, statistischen Modellen selbst dann blind zu vertrauen, wenn diese offensichtlich fehlerhafte Ergebnisse liefern.",
      E: "Eine angeborene neurologische Aversion von Medizinstudierenden gegenüber formalen mathematischen Logikregeln."
    },
    correct_answer: "A",
    explanation_correct: "In Absatz 3 wird die Algorithm Aversion als Fehlertoleranz-Asymmetrie definiert: Macht ein menschlicher Experte eine Fehlprognose, wird dies als verzeihliche menschliche Fehlbarkeit nachgesehen. Begeht ein Algorithmus exakt denselben Fehler, bricht das Vertrauen schlagartig ein, und Anwender kehren selbst bei statistisch nachgewiesener Überlegenheit des Algorithmus zum fehleranfälligeren menschlichen Urteil zurück.",
    explanations_incorrect: {
      B: "Verwechselt das menschliche Verhalten mit einer technischen Softwareeigenschaft.",
      C: "Stellt das genaue Gegenteil dar: Bei algorithmischer Aversion lehnen Anwender den Algorithmus ab, anstatt seinen ausnahmslosen Einsatz zu fordern.",
      D: "Kehrt die Bedeutung um: Algorithm Aversion beschreibt übertriebenes Misstrauen nach Fehlern, nicht blindes Vertrauen.",
      E: "Erfundene Behauptung ohne Bezug zum psychologischen Phänomen der asymmetrischen Fehlerbewertung."
    },
    evidenceLocation: "Absatz 3",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
    }
  },
  {
    id: "TV-GP4-012",
    passageId: "tv-gp4-p4",
    passageTitle: "Heuristische Urteilsbildung, algorithmische Vorhersagen und das Dilemma der Fehlertoleranz",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Hybride Mensch-Maschine-Interaktion",
    subtopic: "Centaur-Systeme & Partizipative Steuerung",
    difficulty: "advanced",
    concept: "Kombination algorithmischer Präzision mit menschlicher Modifikationskompetenz",
    stem: "Welche Interaktionsgestaltung erhöht laut dem vierten Absatz die Akzeptanz algorithmischer Entscheidungshilfen und führt zu den besten prognostischen Gesamtergebnissen?",
    options: {
      A: "Der vollständige Ausschluss des menschlichen Ermessens, um emotionale Schwankungen und situative Müdigkeit vollkommen zu eliminieren.",
      B: "Die Gestaltung hybrider Systeme („Centaur-Modelle“), bei denen Experten den Algorithmus-Vorschlag nachvollziehen und ihn bei Vorliegen atypischer Kontextfaktoren gezielt modifizieren oder überstimmen dürfen.",
      C: "Die strikte Geheimhaltung aller Fehler des Algorithmus vor dem Anwender, damit dessen Vertrauen niemals erschüttert wird.",
      D: "Der generelle Verzicht auf algorithmische Risikoscores zugunsten rein unstrukturierter intuitiver Bauchentscheidungen.",
      E: "Ein gesetzliches Verbot für medizinisches Personal, von der algorithmisch berechneten Risikoziffer auch nur geringfügig abzuweichen."
    },
    correct_answer: "B",
    explanation_correct: "In Absatz 4 wird das Centaur-Modell als Lösung dargelegt: Wenn Algorithmen transparent als partizipative Assistenzsysteme fungieren und menschliche Experten die Empfehlung bei atypischen Kontextfaktoren modifizieren oder begründet überstimmen dürfen, sinkt die Aversion drastisch. Bereits die minimale Möglichkeit zur Anpassung steigert die Nutzungsbereitschaft, und das kooperative Gesamtsystem übertrifft sowohl reine Experten als auch reine Algorithmen.",
    explanations_incorrect: {
      A: "Widerspricht dem Centaur-Ansatz direkt: Vollständiger Ausschluss des Menschen löst die Aversion aus und eliminiert wertvolle menschliche Kontextsensitivität.",
      C: "Falsch: Der Text fordert Transparenz und Partizipation, keine Täuschung oder Geheimhaltung von Fehlern.",
      D: "Steht im Widerspruch zu den Absätzen 2 und 4, die den hohen Wert der algorithmischen Rechenpräzision betonen.",
      E: "Kehrt den Text um: Gerade die Erlaubnis zur Modifikation und individuellen Anpassung führt zur Akzeptanz und Spitzenleistung."
    },
    evidenceLocation: "Absatz 4",
    metadata: {
      author: "MedAT Textverständnis Fachkommission",
      status: "reviewed_deterministic",
      version: "4.0_12_items_medat_spec"
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
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #4 Runtime-Engine
 */
export const GENERALPROBE_4_TV_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_TV_QUESTIONS.map(
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
      tags: ["TV", "Textverständnis", "Generalprobe #4", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "4.0_12_items_medat_spec",
      setOrder: 4,
    };
  }
);
