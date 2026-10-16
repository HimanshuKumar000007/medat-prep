/**
 * MedAT-H Textverständnis (TV) — 12-Aufgaben-Qualitätskontroll- und Prüfungsaufgabenbank
 * 12 selbst erstellte MedAT-Übungsaufgaben für Generalprobe #2 (TV-Testteil).
 * 
 * Entspricht exakt der offiziellen österreichischen MedAT-H Spezifikation:
 * - Gesamt-Testtag: 221 gewertete Aufgaben (BMS 94, TV 12, KFF 75, SEK 40) + 8 GM-Gedächtniskarten.
 * - TV Testdauer: 35 Minuten Bearbeitungszeit (~175 Sekunden pro Aufgabe).
 * - 4 wissenschaftliche Lesepassagen mit je 3 zugeordneten, textgebundenen Multiple-Choice-Fragen.
 * - 5 Antwortoptionen je Aufgabe (A–E), exakt eine textlogisch zutreffende Antwort.
 * 
 * Alle Aufgaben sind strikt aus dem jeweiligen Textauszug heraus lösbar (reine Lesekompetenz,
 * kein biomedizinisches Vorwissen erforderlich).
 * 
 * Fragetypen & Formate:
 * - Kernaussage & methodische Differenzierung
 * - Begriffsdefinition & Textdetail
 * - Kausalanalyse & experimentelle Befunddissoziation
 * - Logische Inferenz & Konzeptverständnis
 * 
 * Schwierigkeitsverteilung:
 * - 3 Leicht / Grundlagen (Foundational) (25,0 %): Q002, Q004, Q007
 * - 6 Mittel / Fortgeschritten (Intermediate) (50,0 %): Q001, Q005, Q008, Q009, Q010, Q011
 * - 3 Schwer / Komplex (Advanced) (25,0 %): Q003, Q006, Q012
 * 
 * Antwortschlüssel:
 * - A: 3 (Q001, Q007, Q011)
 * - B: 2 (Q004, Q009)
 * - C: 3 (Q002, Q005, Q010)
 * - D: 2 (Q003, Q008)
 * - E: 2 (Q006, Q012)
 * Sequenz: A - C - D - B - C - E - A - D - B - C - A - E
 */

import type { StoredQuestion } from "../questions/types";

export interface QcTvGp2Passage {
  id: string;
  title: string;
  topic: string;
  text: string;
  paragraphs: string[];
  questionIds: string[];
}

export interface QcTvGp2QuestionRaw {
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
// DIE 4 WISSENSCHAFTLICHEN LESEPASSAGEN (GENERALPROBE #2)
// ─────────────────────────────────────────────────────────────────────────────

const PASSAGE_1_TEXT = `In der epidemiologischen Ernährungsforschung basieren viele öffentlichkeitswirksame Empfehlungen auf großen prospektiven Beobachtungsstudien. Probanden werden über Jahre hinweg zu ihren Ernährungsgewohnheiten befragt, woraufhin statistische Assoziationen mit chronischen Krankheiten ermittelt werden. Diese Methode leidet jedoch unter einem fundamentalen methodischen Problem: dem Einfluss von Störvariablen (Confoundern). Personen, die beispielsweise viel rotes Fleisch oder hochverarbeitete Fertigprodukte verzehren, rauchen statistisch gesehen häufiger, treiben weniger Sport und weisen im Durchschnitt einen niedrigeren sozioökonomischen Status auf.

Besonders bedeutsam ist hierbei das Phänomen des sogenannten „Healthy-User-Bias“. Individuen, die aktiv gesundheitsbewusste Ernährungsmuster wie pflanzenbasierte Kost oder vollwertige Vollkornprodukte wählen, praktizieren meist ein ganzes Bündel protektiver Verhaltensweisen: Sie nehmen regelmäßiger an medizinischen Vorsorgeuntersuchungen teil, schlafen länger und meiden chronischen Tabak- und Alkoholkonsum. Obwohl moderne statistische Regressionsmodelle versuchen, für diese Begleitvariablen zu kontrollieren, verbleibt nahezu immer eine residuale Verzerrung, die den beobachteten Schutzeffekt der Ernährung künstlich überhöht.

Die Tragweite dieser Verzerrungen verdeutlichte eine kontrollierte Interventionsstudie an einer metabolischen Forschungseinrichtung. Über 400 Probanden wurden randomisiert zwei Gruppen zugeteilt: Gruppe 1 reduzierte die Aufnahme gesättigter Fette über ein Jahr um 30 Prozent, während Gruppe 2 ihre gewohnte Mischkost beibehielt; beide Gruppen wurden engmaschig bezüglich körperlicher Aktivität und Kalorienbilanz synchronisiert. Nach 12 Monaten zeigten sich zwischen beiden Gruppen keinerlei signifikante Unterschiede bei Entzündungsmarkern oder dem kardiovaskulären Risikoprofil, obwohl vorausgegangene Kohortenstudien für eine solche Reduktion eine Risikosenkung von über 35 Prozent prognostiziert hatten.

Die Autorinnen und Autoren schlossen daraus, dass der in den reinen Beobachtungsstudien verzeichnete Schutzeffekt primär das Resultat des gesundheitsbewussten Gesamtlebensstils war und nicht auf der isolierten Einsparung gesättigter Fettsäuren beruhte. Randomisierte kontrollierte Studien (RCTs) bleiben daher unverzichtbar, um echte Kausalität von bloßer Koinzidenz zu trennen. Allerdings stoßen auch RCTs in der Ernährungsforschung an Grenzen: Ihre Laufzeit ist selten lang genug, um jahrzehntelange chronische Endpunkte wie Herzinfarkte direkt abzubilden, und strikte Ernährungsvorgaben scheitern im realen Alltag oft an nachlassender Therapietreue (Compliance).

Ernährungswissenschaftliche Leitlinien dürfen sich folglich nicht auf isolierte Korrelationen einzelner Nährstoffe stützen. Kausale Aussagen erfordern eine systematische Triangulation verschiedener Forschungsansätze, bei der epidemiologische Kohortendaten, interventionelle Stoffwechselstudien und mechanistische Grundlagenforschung zu einem widerspruchsfreien Gesamtergebnis zusammengeführt werden.`;

const PASSAGE_2_TEXT = `Seit Mitte des 20. Jahrhunderts ist in hochentwickelten Industrienationen ein dramatischer Anstieg chronisch-entzündlicher und allergischer Erkrankungen wie Asthma bronchiale, Heuschnupfen und atopischer Dermatitis zu verzeichnen. Zur Erklärung dieses Trends formulierte der Epidemiologe David Strachan 1989 die ursprüngliche „Hygiene-Hypothese“. Seine Kernannahme lautete, dass eine durch verbesserte Haushaltsreinlichkeit und geringere Familiengrößen verminderte Exposition gegenüber klassischen Infektionskrankheiten im frühen Kindesalter zu einer Fehlprägung des heranreifenden Immunsystems führe.

Neuere immunologische Forschungen führten jedoch zu einer grundlegenden Revision dieser Annahme, die heute als „Old Friends“-Hypothese von Graham Rook bekannt ist. Demnach sind es keineswegs pathogene Krankheitserreger wie Masernviren oder Tuberkulosebakterien, deren Ausbleiben die Allergieentstehung begünstigt. Entscheidend ist vielmehr der Verlust des Kontakts zu uralten, evolutionsbiologisch harmlosen Begleitern des Menschen: saprophytischen Bodenbakterien, gutartigen Darm- und Hautmikroben sowie bestimmten Parasiten, die seit Jahrmillionen mit dem Säugetierimmunsystem koevolvierten und dessen Reifung kalibrierten.

Eindrucksvoll untermauert wird diese Differenzierung durch vergleichende Studien an zwei genetisch eng verwandten ländlichen Bevölkerungsgruppen in Nordamerika: den Amischen und den Hutterern. Beide Gemeinschaften weisen ähnliche europäische Vorfahren, kinderreiche Familien und eine traditionelle Lebensweise auf. Bei den Amischen beträgt die Asthmaprävalenz jedoch nur rund 5 Prozent, während sie bei den Hutterern bei über 21 Prozent liegt. Der entscheidende Unterschied liegt in der agrarischen Praxis: Die Amischen betreiben traditionelle kleinbäuerliche Landwirtschaft mit Pferdefuhrwerken und halten ihr Milchvieh in unmittelbarer Nähe der Wohnhäuser. Die Hutterer hingegen nutzen hochgradig mechanisierte und automatisierte industrielle Großfarmen.

Analysen des Hausstaubs zeigten in amischen Haushalten eine viermal höhere Dichte an unschädlichen mikrobiellen Bestandteilen (Endotoxinen). Diese kontinuierliche Stimulation führt bei Kleinkindern zu einer anhaltenden Aktivierung regulatorischer T-Zellen (Tregs) und zur Bildung von Interleukin-10, was überschießende Th2-vermittelte Entzündungsreaktionen gegen harmlose Allergene wie Pollen oder Milben wirksam unterdrückt. Bemerkenswerterweise entfaltet sich dieser Schutzeffekt fast ausschließlich, wenn die Exposition pränatal und in den ersten beiden Lebensjahren stattfindet; eine spätere Ansiedlung auf einem traditionellen Bauernhof im Jugend- oder Erwachsenenalter induziert keine vergleichbare Immuntoleranz mehr.

Die moderne Zunahme von Allergien ist somit nicht primär das Resultat von übertriebener persönlicher Händehygiene im Alltag, sondern eine Folge des Verlusts funktioneller mikrobieller Diversität in urbanisierten Lebensräumen. Ziel moderner Präventionsstrategien sollte daher nicht die Vernachlässigung seuchenhygienischer Standards sein, sondern die gezielte Wiederherstellung von Kontaktzonen zu unserer natürlichen mikrobiellen Umwelt.`;

const PASSAGE_3_TEXT = `In der klinischen Praxis und in medialen Gesundheitsberichten bestimmt die sprachliche und statistische Präsentationsform von Risikozahlen (das sogenannte Framing) maßgeblich darüber, wie medizinische Interventionen wahrgenommen werden. Eine weitverbreitete Praxis besteht darin, den Nutzen präventiver Medikamente oder Früherkennungsuntersuchungen ausschließlich als „relative Risikoreduktion“ anzugeben. Dieser Darstellungsmodus erzeugt bei Patientinnen und Patienten – und häufig auch bei behandelnden Ärzten – eine systematische Überschätzung des tatsächlichen individuellen Profits.

Betrachtet man beispielsweise eine hypothetische, aber typische Primärpräventionsstudie: Ein neuartiges lipidsenkendes Therapeutikum senkt das Auftreten von Schlaganfällen über einen Beobachtungszeitraum von fünf Jahren um „50 Prozent“. Diese Zahl klingt spektakulär, verschleiert jedoch die absolute Basisrate der Erkrankung. In der unbehandelten Kontrollgruppe erlitten im genannten Zeitraum 20 von 1000 Personen einen Schlaganfall (2,0 Prozent). In der mit dem Medikament behandelten Gruppe waren es 10 von 1000 Personen (1,0 Prozent). Die absolute Risikoreduktion beträgt somit exakt 1,0 Prozentpunkt (oder 10 von 1000 Behandelten).

Daraus errechnet sich die sogenannte „Number Needed to Treat“ (NNT): Genau 100 Personen müssen über fünf Jahre hinweg täglich mit dem Medikament therapiert werden, damit bei einer einzigen Person ein Schlaganfall verhindert wird; 99 Personen haben keinen direkten kardiovaskulären Nutzen von der Einnahme. Treten gleichzeitig bei 2 von 100 behandelten Personen behandlungsbedürftige Nebenwirkungen wie Myopathien oder Leberwerterhöhungen auf, übersteigt das absolute Nebenwirkungsrisiko (2,0 Prozent) den absoluten Schutzgewinn (1,0 Prozent) um das Doppelte.

Kognitionspsychologische Experimente unter der Leitung von Gerd Gigerenzer demonstrierten die verheerenden Auswirkungen relativer Prozentangaben: Wurde Patientengruppen mitgeteilt, ein Medikament reduziere das Schlaganfallrisiko um 50 Prozent, glaubten über 75 Prozent der Probanden fälschlicherweise, dass von 100 Behandelten 50 vor der Erkrankung bewahrt würden. Wurden dieselben Daten hingegen in Form „natürlicher Häufigkeiten“ vermittelt („Von 1000 Personen erleiden ohne Medikament 20 ein Ereignis, mit Medikament 10“), sank der Anteil der Fehlurteile auf unter 10 Prozent.

Eine ethisch fundierte Aufklärung und ein echter partizipativer Entscheidungsprozess („Shared Decision Making“) setzen daher zwingend voraus, dass medizinische Evidenz transparent in absoluten Zahlen und natürlichen Häufigkeiten vermittelt wird. Das isolierte Bewerben relativer Risikosenkungen erfüllt de facto den Tatbestand einer statistischen Desinformation, die rationale Abwägungen zwischen therapeutischem Nutzen und potenziellen Risiken systematisch untergräbt.`;

const PASSAGE_4_TEXT = `Nahezu alle lebenden Organismen haben im Laufe der Evolution endogene biologische Oszillatoren entwickelt, um physiologische und metabolische Prozesse an den periodischen 24-Stunden-Wechsel von Tag und Nacht anzupassen. Im Zentrum dieses circadianen Systems steht bei Säugetieren der suprachiasmatische Nukleus (SCN) im anterioren Hypothalamus. Dieser fungiert als zentrale Master-Uhr und wird primär über den photischen Reiz synchronisiert, den spezialisierte melanopsinhaltige Ganglienzellen der Netzhaut bei Tageslichteinfall erfassen.

Lange Zeit ging die Chronobiologie davon aus, dass dieser zentrale Schrittmacher alle peripheren Gewebe hierarchisch und ausnahmslos steuert. Neuere molekularbiologische Forschungen belegen jedoch ein weitaus differenzierteres System: Praktisch jede Zelle peripherer Organe – insbesondere der Leber, der Skelettmuskulatur und des Fettgewebes – verfügt über eine eigene, autonome molekulare Uhrmaschinerie, bestehend aus autoregulatorischen Rückkopplungsschleifen der Gene CLOCK, BMAL1, PER und CRY. Das entscheidende Charakteristikum dieser peripheren Uhren liegt in ihrer abweichenden Synchronisationssensitivität: Sie reagieren kaum auf Licht, sondern werden maßgeblich durch metabolische Signale, vor allem durch den Zeitpunkt der Nahrungsaufnahme, synchronisiert.

Wird Nahrung zu physiologisch atypischen Zeiten aufgenommen – wie es bei Schichtarbeitern während der Nacht der Fall ist –, entsteht ein Zustand der „internen Desynchronisation“. Während der zentrale SCN über das Umgebungslicht weiterhin den zirkadianen Tag signalisiert, werden die Uhrengene in der Leber durch den nächtlichen Nährstoffeinstrom phasenverschoben. In Humanexperimenten führte eine Verlegung der Hauptmahlzeiten in die späten Abendstunden bei identischer Kalorien- und Makronährstoffzusammensetzung zu einer signifikanten Verschlechterung der Glukosetoleranz um 28 Prozent sowie zu einer verminderten Insulinsensitivität der Muskulatur.

Dieser Mechanismus bildet das biologische Fundament des therapeutischen Konzepts des „Time-Restricted Eating“ (TRE). Hierbei wird die tägliche Nahrungsaufnahme auf ein definiertes Zeitfenster von typischerweise 8 bis 10 Stunden während der biologisch aktiven Tagesphase begrenzt. Tierexperimentelle und klinische Studien zeigen übereinstimmend, dass die zeitliche Einengung der Nahrungszufuhr die Kohärenz zwischen zentralem Lichtrhythmus und peripherer Leber-Uhr wiederherstellt. In der Folge verbessern sich metabolische Parameter wie Nüchternglukose und Blutfettwerte messbar, selbst wenn die Gesamtkalorienmenge über den Tag hinweg unverändert bleibt.

Die chronobiologische Forschung belegt somit eindrücklich, dass für die metabolische Verwertung von Nährstoffen nicht allein die biochemische Zusammensetzung („Was“) und die Energiemenge („Wie viel“) ausschlaggebend sind. Das metabolische Schicksal eines Nahrungsmittels wird in gleichem Maße durch das zirkadiane Timing („Wann“) determiniert.`;

export const GENERALPROBE_2_TV_PASSAGES: QcTvGp2Passage[] = [
  {
    id: "tv-gp2-passage-01",
    title: "Kausale Inferenz und Scheinkorrelationen in der epidemiologischen Ernährungsforschung",
    topic: "Kausale Inferenz & Ernährungsepidemiologie",
    text: PASSAGE_1_TEXT,
    paragraphs: PASSAGE_1_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP2-001", "TV-GP2-002", "TV-GP2-003"],
  },
  {
    id: "tv-gp2-passage-02",
    title: "Immunologische Plastizität und die Evolution der Hygiene-Hypothese",
    topic: "Hygiene- & Old-Friends-Hypothese",
    text: PASSAGE_2_TEXT,
    paragraphs: PASSAGE_2_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP2-004", "TV-GP2-005", "TV-GP2-006"],
  },
  {
    id: "tv-gp2-passage-03",
    title: "Risikokommunikation und statistische Täuschung in der Medizin",
    topic: "Risikokommunikation & Evidenzbasierte Medizin",
    text: PASSAGE_3_TEXT,
    paragraphs: PASSAGE_3_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP2-007", "TV-GP2-008", "TV-GP2-009"],
  },
  {
    id: "tv-gp2-passage-04",
    title: "Circadiane Rhythmik, molekulare Uhrengene und metabolisches Timing",
    topic: "Chronobiologie & Metabolisches Timing",
    text: PASSAGE_4_TEXT,
    paragraphs: PASSAGE_4_TEXT.split("\n\n").filter(Boolean),
    questionIds: ["TV-GP2-010", "TV-GP2-011", "TV-GP2-012"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DIE 12 QUALITÄTSKONTROLLIERTEN TV-AUFGABEN (GENERALPROBE #2)
// ─────────────────────────────────────────────────────────────────────────────

export const RAW_GENERALPROBE_2_TV_QUESTIONS: QcTvGp2QuestionRaw[] = [
  // ─── PASSAGE 1: KAUSALE INFERENZ & ERNÄHRUNGSEPIDEMIOLOGIE (TV-GP2-001 bis 003) ───
  {
    id: "TV-GP2-001",
    passageId: "tv-gp2-passage-01",
    passageTitle: "Kausale Inferenz und Scheinkorrelationen in der epidemiologischen Ernährungsforschung",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Kausale Inferenz & Ernährungsepidemiologie",
    subtopic: "Kohortenstudien vs. Interventionsstudien",
    difficulty: "intermediate",
    concept: "Kernaussage & Kausalanalyse",
    evidenceLocation: "Absatz 3 und 4",
    stem: "Worauf führten die Forscher die Diskrepanz zwischen den prognostizierten 35 % Risikosenkung aus Kohortenstudien und dem Nullbefund der kontrollierten Interventionsstudie zurück?",
    options: {
      A: "Auf die Tatsache, dass der in den Beobachtungsstudien registrierte Nutzen vorrangig auf begleitenden gesunden Lebensstilfaktoren beruhte und nicht auf der Fettreduktion allein.",
      B: "Auf eine unzureichende statistische Fallzahl und eine zu hohe Quote mangelnder Therapietreue (Compliance) bei den Probanden der Interventionsgruppe.",
      C: "Auf die fehlerhafte Annahme, dass gesättigte Fettsäuren überhaupt metabolisch im menschlichen Körper verarbeitet werden können.",
      D: "Auf gravierende Messfehler bei der Bestimmung von Entzündungsmarkern in der randomisierten Interventionsgruppe.",
      E: "Auf den Umstand, dass die Probanden der Interventionsstudie während der 12 Monate heimlich ungesunde Fette konsumiert hatten."
    },
    correct_answer: "A",
    explanation_correct:
      "In Absatz 4 führt der Text explizit aus: „Die Autorinnen und Autoren schlossen daraus, dass der in den reinen Beobachtungsstudien verzeichnete Schutzeffekt primär das Resultat des gesundheitsbewussten Gesamtlebensstils war und nicht auf der isolierten Einsparung gesättigter Fettsäuren beruhte.“ Dies entspricht exakt Option A.",
    explanations_incorrect: {
      B: "Option B ist falsch, da der Text die fehlende Kausalität inhaltlich auf Lebensstil-Confounder zurückführt; Compliance-Probleme werden in Absatz 4 nur als allgemeine methodische Herausforderung von Ernährungs-RCTs erwähnt, nicht als Ursache für diesen konkreten Studienbefund.",
      C: "Option C ist absurd und wird im Text an keiner Stelle behauptet; der Nährstoffwechsel gesättigter Fette wird nicht bestritten.",
      D: "Option D ist unzutreffend, da der Text keinerlei Messfehler bei Entzündungsmarkern erwähnt, sondern betont, dass die Gruppen sorgfältig synchronisiert wurden.",
      E: "Option E ist eine unzulässige freie Erfindung ohne jeden Anhaltspunkt im Text."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-002",
    passageId: "tv-gp2-passage-01",
    passageTitle: "Kausale Inferenz und Scheinkorrelationen in der epidemiologischen Ernährungsforschung",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Kausale Inferenz & Ernährungsepidemiologie",
    subtopic: "Healthy-User-Bias",
    difficulty: "foundational",
    concept: "Begriffsdefinition & Textdetail",
    evidenceLocation: "Absatz 2",
    stem: "Was versteht der Text unter dem Phänomen des sogenannten „Healthy-User-Bias“?",
    options: {
      A: "Die Neigung von Studienleitern, ausschließlich gesunde Patienten für interventionelle Medikamentenstudien zu rekrutieren.",
      B: "Das gezielte Fälschen von Ernährungstagebüchern durch Probanden, um vor Studienärzten disziplinierter zu wirken.",
      C: "Das Zusammentreffen bewusster Ernährungsmuster mit weiteren protektiven Lebensstilfaktoren wie Sport, Schlafdauer und Vorsorgeverhalten.",
      D: "Die vollständige statistische Neutralisierung aller Störfaktoren durch moderne multivariate Regressionsmodelle.",
      E: "Einen genetischen Vorteil von Personen, die sich ohne Krankheitsfolgen dauerhaft von hochverarbeiteten Fertigprodukten ernähren."
    },
    correct_answer: "C",
    explanation_correct:
      "Absatz 2 definiert den Healthy-User-Bias wörtlich: „Individuen, die aktiv gesundheitsbewusste Ernährungsmuster [...] wählen, praktizieren meist ein ganzes Bündel protektiver Verhaltensweisen: Sie nehmen regelmäßiger an medizinischen Vorsorgeuntersuchungen teil, schlafen länger und meiden chronischen Tabak- und Alkoholkonsum.“ Dies entspricht direkt Option C.",
    explanations_incorrect: {
      A: "Option A beschreibt ein Selektionskriterium bei klinischen Studien, nicht jedoch den im Text definierten Healthy-User-Bias.",
      B: "Option B betrifft soziale Erwünschtheit bei Befragungen, deckt sich aber nicht mit der Definition in Absatz 2.",
      D: "Option D behauptet das genaue Gegenteil des Textes, der in Absatz 2 betont, dass statistische Modelle Confounder eben nicht vollständig herausrechnen können („residuale Verzerrung“).",
      E: "Option E ist eine freie Erfindung, die im Text nicht erwähnt wird."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-003",
    passageId: "tv-gp2-passage-01",
    passageTitle: "Kausale Inferenz und Scheinkorrelationen in der epidemiologischen Ernährungsforschung",
    passageText: PASSAGE_1_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Kausale Inferenz & Ernährungsepidemiologie",
    subtopic: "Methodische Grenzen von RCTs",
    difficulty: "advanced",
    concept: "Logische Inferenz & Limitationen",
    evidenceLocation: "Absatz 4 und 5",
    stem: "Welche Limitation randomisierter kontrollierter Studien (RCTs) im Bereich der Ernährungsforschung wird im Text ausdrücklich dargelegt?",
    options: {
      A: "RCTs sind grundsätzlich unfähig, experimentelle Kausalitätsbeziehungen zweifelsfrei nachzuweisen.",
      B: "Die statistische Auswertung von RCTs erfordert zwingend das Vorliegen unvollständiger Kohortendaten.",
      C: "Probanden in RCTs weisen aufgrund genetischer Mutationen generell abweichende Stoffwechselraten auf.",
      D: "Ihre begrenzte Laufzeit reicht selten aus, um jahrzehntelange chronische Endpunkte wie Herzinfarkte direkt abzubilden, gepaart mit nachlassender Therapietreue.",
      E: "Ernährungs-RCTs sind ethisch unzulässig, da Kontrollgruppen keine ausgewogene Kost erhalten dürfen."
    },
    correct_answer: "D",
    explanation_correct:
      "In Absatz 4 wird wörtlich argumentiert: „Ihre Laufzeit ist selten lang genug, um jahrzehntelange chronische Endpunkte wie Herzinfarkte direkt abzubilden, und strikte Ernährungsvorgaben scheitern im realen Alltag oft an nachlassender Therapietreue (Compliance).“ Dies entspricht haargenau Option D.",
    explanations_incorrect: {
      A: "Option A widerspricht dem Text: Absatz 4 bezeichnet RCTs gerade als „unverzichtbar, um echte Kausalität von bloßer Koinzidenz zu trennen“.",
      B: "Option B stellt einen methodischen Widerspruch dar; RCTs sind eigenständige Interventionsstudien und setzen keine unvollständigen Kohortendaten voraus.",
      C: "Option C wird im Text nirgends erwähnt.",
      E: "Option E ist falsch; von ethischer Unzulässigkeit ist im Text keine Rede."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },

  // ─── PASSAGE 2: HYGIENE- & OLD-FRIENDS-HYPOTHESE (TV-GP2-004 bis 006) ───
  {
    id: "TV-GP2-004",
    passageId: "tv-gp2-passage-02",
    passageTitle: "Immunologische Plastizität und die Evolution der Hygiene-Hypothese",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Hygiene- & Old-Friends-Hypothese",
    subtopic: "Strachan vs. Rook",
    difficulty: "foundational",
    concept: "Vergleichende Interpretation / Paradigmenwechsel",
    evidenceLocation: "Absatz 1 und 2",
    stem: "Worin besteht der wesentliche konzeptionelle Unterschied zwischen der ursprünglichen Hygiene-Hypothese von Strachan und der „Old Friends“-Hypothese von Rook?",
    options: {
      A: "Strachan sah den Kontakt zu Haustieren als schädlich an, während Rook Haustiere als primäre Infektionsquelle definiert.",
      B: "Rook macht nicht das Ausbleiben pathogener Infektionserreger verantwortlich, sondern den fehlenden Kontakt zu harmlosen, koevolvierten Mikroorganismen.",
      C: "Strachan postulierte eine pränatale Wirkung, wohingegen Rook jegliche Schutzwirkung ausschließlich auf das Erwachsenenalter beschränkt.",
      D: "Rook bestreitet, dass das Immunsystem durch mikrobielle Reize überhaupt moduliert werden kann.",
      E: "Strachan forderte die vollständige Abschaffung von Händehygiene, während Rook für sterile städtische Umgebungen plädiert."
    },
    correct_answer: "B",
    explanation_correct:
      "Absatz 2 stellt den Kernunterschied unmissverständlich klar: „Demnach sind es keineswegs pathogene Krankheitserreger wie Masernviren oder Tuberkulosebakterien, deren Ausbleiben die Allergieentstehung begünstigt. Entscheidend ist vielmehr der Verlust des Kontakts zu uralten, evolutionsbiologisch harmlosen Begleitern des Menschen: saprophytischen Bodenbakterien, gutartigen Darm- und Hautmikroben...“ Dies deckt sich präzise mit Option B.",
    explanations_incorrect: {
      A: "Option A wird im Text nicht erwähnt; Haustiere als Infektionsquelle bei Strachan sind eine Erfindung.",
      C: "Option C verkehrt die Aussagen des Textes ins Gegenteil: Laut Absatz 4 entfaltet sich der protektive Effekt pränatal und in den ersten zwei Lebensjahren, nicht im Erwachsenenalter.",
      D: "Option D widerspricht dem Grundgedanken beider Forscher, die beide von einer mikrobiellen Modulation des Immunsystems ausgehen.",
      E: "Option E ist eine Verzerrung; von einer solchen Forderung Strachans berichtet der Text nicht, und Rook plädiert keineswegs für sterile Städte (siehe Absatz 5)."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-005",
    passageId: "tv-gp2-passage-02",
    passageTitle: "Immunologische Plastizität und die Evolution der Hygiene-Hypothese",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Hygiene- & Old-Friends-Hypothese",
    subtopic: "Amische vs. Hutterer",
    difficulty: "intermediate",
    concept: "Experimenteller Befund & Kausalanalyse",
    evidenceLocation: "Absatz 3 und 4",
    stem: "Welcher Umweltfaktor wurde im Text als ausschlaggebend für die signifikant niedrigere Asthmarate der Amischen im Vergleich zu den Hutterern identifiziert?",
    options: {
      A: "Eine strikte vegetarische Ernährungsweise bei den Amischen ohne Verzehr von Milchprodukten.",
      B: "Ein genetischer Defekt im Interleukin-10-Gen, der ausschließlich bei den Hutterern auftritt.",
      C: "Die traditionelle Tierhaltung in unmittelbarer Nähe der Wohnhäuser mit einer viermal höheren Endotoxindichte im Hausstaub.",
      D: "Der vollständige Verzicht auf medizinische Notfallversorgung bei allergischen Erstanfällen bei den Amischen.",
      E: "Der Einsatz automatisierter Melkanlagen und industrieller Großtraktoren auf amischen Bauernhöfen."
    },
    correct_answer: "C",
    explanation_correct:
      "In Absatz 3 und 4 erläutert der Text: „Der entscheidende Unterschied liegt in der agrarischen Praxis: Die Amischen betreiben traditionelle kleinbäuerliche Landwirtschaft mit Pferdefuhrwerken und halten ihr Milchvieh in unmittelbarer Nähe der Wohnhäuser. [...] Analysen des Hausstaubs zeigten in amischen Haushalten eine viermal höhere Dichte an unschädlichen mikrobiellen Bestandteilen (Endotoxinen).“ Dies entspricht Option C.",
    explanations_incorrect: {
      A: "Option A widerspricht dem Text, der die Milchviehhaltung der Amischen betont; von vegetarischer Ernährung steht dort nichts.",
      B: "Option B widerspricht Absatz 3, wonach beide Gemeinschaften genetisch eng verwandt sind („ähnliche europäische Vorfahren“); ein genetischer Defekt wird nirgends genannt.",
      D: "Option D wird im Text nicht behauptet.",
      E: "Option E vertauscht die Gruppen: Die hochmechanisierten industriellen Großfarmen werden in Absatz 3 den Hutterern zugeschrieben, nicht den Amischen."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-006",
    passageId: "tv-gp2-passage-02",
    passageTitle: "Immunologische Plastizität und die Evolution der Hygiene-Hypothese",
    passageText: PASSAGE_2_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Hygiene- & Old-Friends-Hypothese",
    subtopic: "Kritisches Zeitfenster",
    difficulty: "advanced",
    concept: "Logische Inferenz & Zeitfenster",
    evidenceLocation: "Absatz 4",
    stem: "Welche Schlussfolgerung lässt sich aus den Darlegungen des Textes über das Zeitfenster der mikrobiellen Exposition ableiten?",
    options: {
      A: "Das Immunsystem bleibt bis ins hohe Rentenalter gleichermaßen formbar für bakterielle Toleranzinduktionen.",
      B: "Eine Exposition im Schulalter schützt zuverlässiger vor Asthma als eine Exposition während der Schwangerschaft.",
      C: "Je steriler ein Kind in den ersten zwei Lebensjahren aufwächst, desto besser bildet es regulatorische T-Zellen im Jugendalter aus.",
      D: "Die Gabe von Antibiotika nach dem 18. Lebensjahr ist die Hauptursache für die Entstehung von Heuschnupfen.",
      E: "Die epigenetische bzw. funktionelle Programmierung der Immuntoleranz ist an ein frühes Entwicklungsfenster (pränatal und erste zwei Lebensjahre) gebunden."
    },
    correct_answer: "E",
    explanation_correct:
      "Absatz 4 formuliert unmissverständlich: „Bemerkenswerterweise entfaltet sich dieser Schutzeffekt fast ausschließlich, wenn die Exposition pränatal und in den ersten beiden Lebensjahren stattfindet; eine spätere Ansiedlung auf einem traditionellen Bauernhof im Jugend- oder Erwachsenenalter induziert keine vergleichbare Immuntoleranz mehr.“ Daraus folgt zwingend Option E.",
    explanations_incorrect: {
      A: "Option A widerspricht dem Text diametral, da spätere Exposition im Jugend- oder Erwachsenenalter gerade keine Immuntoleranz mehr erzeugt.",
      B: "Option B verkehrt die zeitliche Priorität ins Gegenteil; die pränatale und frühkindliche Phase ist laut Text entscheidend.",
      C: "Option C behauptet das Gegenteil: Sterile Bedingungen verhindern laut Text die Ausbildung regulatorischer T-Zellen.",
      D: "Option D ist eine im Text nicht erwähnte Spekulation über Antibiotika bei Erwachsenen."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },

  // ─── PASSAGE 3: RISIKOKOMMUNIKATION & STATISTISCHE TÄUSCHUNG (TV-GP2-007 bis 009) ───
  {
    id: "TV-GP2-007",
    passageId: "tv-gp2-passage-03",
    passageTitle: "Risikokommunikation und statistische Täuschung in der Medizin",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Risikokommunikation & Evidenzbasierte Medizin",
    subtopic: "Absolute vs. relative Risikoreduktion & NNT",
    difficulty: "foundational",
    concept: "Textdetail & Quantitative Interpretation",
    evidenceLocation: "Absatz 2 und 3",
    stem: "Wie hoch sind im im Text geschilderten Beispiel die absolute Risikoreduktion und die daraus resultierende „Number Needed to Treat“ (NNT)?",
    options: {
      A: "Die absolute Risikoreduktion beträgt 1,0 Prozentpunkt, und die NNT liegt bei 100 Patienten über fünf Jahre.",
      B: "Die absolute Risikoreduktion beträgt 50 Prozent, und die NNT liegt bei 20 Patienten.",
      C: "Die absolute Risikoreduktion beträgt 2,0 Prozent, und die NNT liegt bei 1000 Patienten.",
      D: "Die absolute Risikoreduktion beträgt 10 Prozentpunkte, und die NNT beträgt 50 Patienten über ein Jahr.",
      E: "Die absolute Risikoreduktion liegt bei 0,5 Prozent, und eine NNT lässt sich aus den Daten nicht errechnen."
    },
    correct_answer: "A",
    explanation_correct:
      "Absatz 2 und 3 belegen diese Zahlen ausdrücklich: In der Kontrollgruppe treten 20 von 1000 Ereignissen auf (2,0 %), in der Therapiegruppe 10 von 1000 (1,0 %). „Die absolute Risikoreduktion beträgt somit exakt 1,0 Prozentpunkt (oder 10 von 1000 Behandelten). Daraus errechnet sich die sogenannte „Number Needed to Treat“ (NNT): Genau 100 Personen müssen über fünf Jahre hinweg täglich mit dem Medikament therapiert werden, damit bei einer einzigen Person ein Schlaganfall verhindert wird...“ Dies entspricht exakt Option A.",
    explanations_incorrect: {
      B: "Option B verwechselt die relative Risikoreduktion (50 %) mit der absoluten Risikoreduktion (1,0 %) und nennt eine falsche NNT.",
      C: "Option C nennt 2,0 % (die Basisrate der Kontrollgruppe) und eine fehlerhafte NNT.",
      D: "Option D nennt 10 Prozentpunkte (statt 1,0 Prozentpunkt bzw. 10 von 1000) und eine frei erfundene NNT.",
      E: "Option E nennt 0,5 Prozent und behauptet fälschlich, die NNT sei nicht berechenbar."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-008",
    passageId: "tv-gp2-passage-03",
    passageTitle: "Risikokommunikation und statistische Täuschung in der Medizin",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Risikokommunikation & Evidenzbasierte Medizin",
    subtopic: "Psychologisches Framing",
    difficulty: "intermediate",
    concept: "Kausalanalyse & Psychologisches Framing",
    evidenceLocation: "Absatz 4",
    stem: "Warum führt die Darstellung in relativen Prozentangaben laut den Experimenten von Gerd Gigerenzer zu gravierenden Fehleinschätzungen bei Patienten?",
    options: {
      A: "Weil die meisten Patienten nicht in der Lage sind, Prozentwerte in Dezimalbrüche umzurechnen.",
      B: "Weil relative Angaben generell mit unvollständigen Beipackzetteln verknüpft sind.",
      C: "Weil Probanden bei Prozentangaben grundsätzlich davon ausgehen, dass das Medikament wirkungslos ist.",
      D: "Weil Patienten die relative Reduktion (50 %) intuitiv auf die Gesamtgruppe der Behandelten beziehen und annehmen, die Hälfte aller Patienten profitiere persönlich.",
      E: "Weil Ärzte in den Experimenten absichtlich falsche absolute Zahlen nannten."
    },
    correct_answer: "D",
    explanation_correct:
      "Absatz 4 beschreibt das kognitionspsychologische Phänomen klar: „Wurde Patientengruppen mitgeteilt, ein Medikament reduziere das Schlaganfallrisiko um 50 Prozent, glaubten über 75 Prozent der Probanden fälschlicherweise, dass von 100 Behandelten 50 vor der Erkrankung bewahrt würden.“ Sie beziehen die relative Prozentzahl also fälschlich auf 100 Personen der Gesamtgruppe, was exakt Option D entspricht.",
    explanations_incorrect: {
      A: "Option A verkennt den psychologischen Kern; es geht nicht um Dezimalbruchrechnung, sondern um das Fehlen der Bezugsbasis (Framing-Effekt).",
      B: "Option B ist eine Erfindung ohne Textbezug.",
      C: "Option C behauptet das Gegenteil: Die Patienten überschätzen den Nutzen massiv, statt das Medikament für wirkungslos zu halten.",
      E: "Option E unterstellt Ärzten absichtliche Falschangaben, wovon im Text keine Rede ist."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-009",
    passageId: "tv-gp2-passage-03",
    passageTitle: "Risikokommunikation und statistische Täuschung in der Medizin",
    passageText: PASSAGE_3_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Risikokommunikation & Evidenzbasierte Medizin",
    subtopic: "Shared Decision Making & NNT",
    difficulty: "intermediate",
    concept: "Autorenposition & Ethische Schlussfolgerung",
    evidenceLocation: "Absatz 3 und 5",
    stem: "Welche zentrale Schlussfolgerung zieht der Autor im Hinblick auf das Verhältnis zwischen partizipativer Entscheidungsfindung („Shared Decision Making“) und Risikodarstellung?",
    options: {
      A: "Patienten sollten medizinische Entscheidungen prinzipiell dem Arzt überlassen, da statistische Laien niemals Nutzen und Risiko abwägen können.",
      B: "Eine echte informierte Einwilligung erfordert zwingend die transparente Kommunikation in Form absoluter Risiken und natürlicher Häufigkeiten.",
      C: "Medikamente mit einer NNT von 100 sollten gesetzlich verboten werden, da ihr Nutzen stets kleiner als das Nebenwirkungsrisiko ist.",
      D: "Relative Risikoreduktionen stellen das verlässlichste Kommunikationsmittel dar, um Patienten zu einer gesünderen Lebensweise zu motivieren.",
      E: "Nebenwirkungsrisiken dürfen in Arztgesprächen nicht genannt werden, um Nocebo-Effekte zu vermeiden."
    },
    correct_answer: "B",
    explanation_correct:
      "In Absatz 5 formuliert der Autor als Kernaussage: „Eine ethisch fundierte Aufklärung und ein echter partizipativer Entscheidungsprozess („Shared Decision Making“) setzen daher zwingend voraus, dass medizinische Evidenz transparent in absoluten Zahlen und natürlichen Häufigkeiten vermittelt wird.“ Dies entspricht wortgetreu Option B.",
    explanations_incorrect: {
      A: "Option A widerspricht dem im Text geforderten Ideal des Shared Decision Making.",
      C: "Option C fordert ein gesetzliches Verbot, das im Text an keiner Stelle erwähnt oder gefordert wird.",
      D: "Option D bezeichnet relative Risikoreduktionen als verlässlich, während der Text sie in Absatz 5 wörtlich als „Tatbestand einer statistischen Desinformation“ verurteilt.",
      E: "Option E widerspricht der Forderung nach vollständiger und transparenter Aufklärung über Nutzen und Risiken."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },

  // ─── PASSAGE 4: CHRONOBIOLOGIE & METABOLISCHES TIMING (TV-GP2-010 bis 012) ───
  {
    id: "TV-GP2-010",
    passageId: "tv-gp2-passage-04",
    passageTitle: "Circadiane Rhythmik, molekulare Uhrengene und metabolisches Timing",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Chronobiologie & Metabolisches Timing",
    subtopic: "Zentrale vs. periphere Uhren",
    difficulty: "intermediate",
    concept: "Vergleichende Analyse & Mechanismus",
    evidenceLocation: "Absatz 1 und 2",
    stem: "Durch welche Reize werden die zentrale Uhr im suprachiasmatischen Nukleus (SCN) und die peripheren Uhren (z. B. in der Leber) primär synchronisiert?",
    options: {
      A: "Der SCN synchronisiert sich primär über die Körperkerntemperatur, während die Leber ausschließlich auf Lichteinfall reagiert.",
      B: "Beide Uhrensysteme werden synchron und ausschließlich durch den Einstrom von Melatonin aus der Zirbeldrüse getaktet.",
      C: "Der SCN wird maßgeblich über photische Reize (Tageslicht auf die Netzhaut) synchronisiert, während periphere Uhren vor allem auf metabolische Reize (Nahrungsaufnahme) ansprechen.",
      D: "Die peripheren Uhren reagieren ausschließlich auf Muskelkontraktionen, während der SCN autonom ohne äußere Reize oszilliert.",
      E: "Die Synchronisation beider Systeme erfolgt ausschließlich über akustische Reize der Umwelt."
    },
    correct_answer: "C",
    explanation_correct:
      "In Absatz 1 und 2 wird diese fundamentale Dissoziation detailliert ausgeführt: Der SCN „wird primär über den photischen Reiz synchronisiert, den spezialisierte melanopsinhaltige Ganglienzellen der Netzhaut bei Tageslichteinfall erfassen.“ Die peripheren Uhren hingegen „reagieren kaum auf Licht, sondern werden maßgeblich durch metabolische Signale, vor allem durch den Zeitpunkt der Nahrungsaufnahme, synchronisiert.“ Dies entspricht exakt Option C.",
    explanations_incorrect: {
      A: "Option A vertauscht und verfälscht die Mechanismen; die Leber reagiert laut Text kaum auf Licht.",
      B: "Option B wird im Text nicht behauptet; Melatonin wird in der Passage gar nicht erwähnt.",
      D: "Option D behauptet fälschlich, der SCN oszilliere ohne äußere Reize, während Absatz 1 die Synchronisation über Licht betont.",
      E: "Option E ist frei erfunden; akustische Reize spielen im Text keine Rolle."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-011",
    passageId: "tv-gp2-passage-04",
    passageTitle: "Circadiane Rhythmik, molekulare Uhrengene und metabolisches Timing",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Chronobiologie & Metabolisches Timing",
    subtopic: "Interne Desynchronisation",
    difficulty: "intermediate",
    concept: "Experimenteller Befund & Kausalzusammenhang",
    evidenceLocation: "Absatz 3",
    stem: "Welche physiologische Auswirkung hatte die Verlegung der Mahlzeiten in die späten Nachtstunden in den im Text zitierten Humanexperimenten?",
    options: {
      A: "Eine signifikante Verschlechterung der Glukosetoleranz um 28 Prozent sowie eine verminderte Insulinsensitivität der Muskulatur bei identischer Nährstoffzusammensetzung.",
      B: "Eine vollständige Blockade der Melanopsin-Synthese in den retinalen Ganglienzellen des Auges.",
      C: "Eine irreversible Zerstörung der Uhrengene CLOCK und BMAL1 im Lebergewebe.",
      D: "Eine sofortige Steigerung des Grundumsatzes um 35 Prozent infolge erhöhter nächtlicher Thermogenese.",
      E: "Eine spontane Normalisierung gestörter Blutfettwerte trotz fortgesetzter Schichtarbeit."
    },
    correct_answer: "A",
    explanation_correct:
      "Absatz 3 belegt das experimentelle Resultat wörtlich: „In Humanexperimenten führte eine Verlegung der Hauptmahlzeiten in die späten Abendstunden bei identischer Kalorien- und Makronährstoffzusammensetzung zu einer signifikanten Verschlechterung der Glukosetoleranz um 28 Prozent sowie zu einer verminderten Insulinsensitivität der Muskulatur.“ Dies stimmt Wort für Wort mit Option A überein.",
    explanations_incorrect: {
      B: "Option B ist biologisch unsinnig und wird im Text nirgends erwähnt; Melanopsin befindet sich im Auge und reagiert auf Licht, nicht auf späte Mahlzeiten.",
      C: "Option C übertreibt maßlos; die Uhrengene werden phasenverschoben, aber keineswegs „irreversibel zerstört“.",
      D: "Option D behauptet eine Steigerung des Grundumsatzes, die im Text nicht erwähnt wird.",
      E: "Option E behauptet das Gegenteil des Textes, da nächtliches Essen den Stoffwechsel verschlechtert und nicht normalisiert."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
    }
  },
  {
    id: "TV-GP2-012",
    passageId: "tv-gp2-passage-04",
    passageTitle: "Circadiane Rhythmik, molekulare Uhrengene und metabolisches Timing",
    passageText: PASSAGE_4_TEXT,
    subject: "TV",
    section: "TV",
    primary_topic: "Chronobiologie & Metabolisches Timing",
    subtopic: "Time-Restricted Eating",
    difficulty: "advanced",
    concept: "Konzeptverständnis & Synthese",
    evidenceLocation: "Absatz 4 und 5",
    stem: "Auf welchem primären Wirkmechanismus beruhen die metabolischen Verbesserungen beim „Time-Restricted Eating“ (TRE) gemäß den Ausführungen des Textes?",
    options: {
      A: "Auf einer zwingenden drastischen Reduktion der täglichen Gesamtkalorienaufnahme um mindestens die Hälfte.",
      B: "Auf der chemischen Zerstörung von freien Fettsäuren im Blut durch verlängertes Fasten am Vormittag.",
      C: "Auf der künstlichen Verlängerung des biologischen Tages auf mehr als 28 Stunden im zentralen SCN.",
      D: "Auf der ausschließlichen Vermeidung von Kohlenhydraten bei gleichzeitiger Erhöhung tierischer Fette.",
      E: "Auf der Wiederherstellung der zeitlichen Kohärenz zwischen dem zentralen Lichtrhythmus und den peripheren metabolischen Uhren durch Begrenzung des Zeitfensters der Nahrungsaufnahme."
    },
    correct_answer: "E",
    explanation_correct:
      "In Absatz 4 und 5 legt der Text dar: „Tierexperimentelle und klinische Studien zeigen übereinstimmend, dass die zeitliche Einengung der Nahrungszufuhr die Kohärenz zwischen zentralem Lichtrhythmus und peripherer Leber-Uhr wiederherstellt. In der Folge verbessern sich metabolische Parameter wie Nüchternglukose und Blutfettwerte messbar, selbst wenn die Gesamtkalorienmenge über den Tag hinweg unverändert bleibt.“ Dies entspricht exakt Option E.",
    explanations_incorrect: {
      A: "Option A widerspricht dem Text ausdrücklich, der in Absatz 4 betont: „...selbst wenn die Gesamtkalorienmenge über den Tag hinweg unverändert bleibt.“",
      B: "Option B wird im Text nicht erwähnt.",
      C: "Option C ist frei erfunden; von einer Dehnung des Tages auf 28 Stunden spricht der Text nicht.",
      D: "Option D bezieht sich auf die Nährstoffzusammensetzung, während Absatz 5 klarstellt, dass TRE unabhängig vom „Was“ primär über das zirkadiane Timing („Wann“) wirkt."
    },
    metadata: {
      author: "MedAT Vorbereitungsteam",
      status: "curated_practice_item",
      version: "2.0_gp2"
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
 * Normalisierte 12 StoredQuestion-Objekte für die MedAT-H Generalprobe #2 Runtime-Engine
 */
export const GENERALPROBE_2_TV_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_TV_QUESTIONS.map(
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
      tags: ["TV", "Textverständnis", "Generalprobe #2", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "2.0_gp2",
      setOrder: 2,
    };
  }
);
