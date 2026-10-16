/**
 * MedAT SEK — Emotionen regulieren (ER) — Generalprobe #2
 * Exactly 12 Questions · 18 Minutes Exam Time (1080 seconds, 90s / task)
 * 
 * IDs: SEK-ER-GP2-001 through SEK-ER-GP2-012 (aliased to legacy er-sim2-q01 .. q12)
 * 
 * Specifications:
 * - Exactly 12 Questions assessing situational emotion regulation under goal-directed constraints
 * - Authentic, high-validity German scenarios across medical training, exams, clinics, and academic life
 * - Explicit, clearly defined goal for each scenario
 * - Exactly 4 distinct alternative strategy options per question (A–D), strictly written in the first person ("Ich ...")
 * - Exactly one best strategy per question evaluated strictly against the stated goal
 * - Difficulty distribution: Exactly 3 Leicht (25.0%), 6 Mittel (50.0%), 3 Schwer (25.0%)
 * - Balanced answer key distribution: Exactly 3 A, 3 B, 3 C, 3 D (cyclical A-B-C-D pattern)
 * - Structured distractor analysis: Dedicated rationales for every option (rationalesByOption) & explicit distractor explanations (explanationsIncorrect)
 */

import type { StoredQuestion } from "../questions/types";
import type { ErOptionKey, ErQuestionData, ErSimulationData } from "../questions/er/types";
import { erQuestionToStoredQuestion } from "../questions/er/types";

export const RAW_GENERALPROBE_2_ER_QUESTIONS: ErQuestionData[] = [
  // ─── Q01 (Leicht · pause_and_prioritize) ─── Key: A
  {
    id: "SEK-ER-GP2-001",
    legacyId: "er-sim2-q01",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 1,
    difficulty: "Leicht",
    strategyType: "pause_and_prioritize",
    emotion: "Akute Nervosität, Hektik und Versagensangst vor der Prüfung",
    scenario:
      "Zehn Minuten vor dem Beginn einer mündlichen Anatomieprüfung merkst du, wie dein Herz rast, deine Hände zittern und dir plötzlich grundlegende Fachbegriffe zu den Hirnnerven entfallen. Du befürchtest, gleich ein vollständiges Blackout zu erleiden.",
    goal: "Die vegetative Erregung rasch senken und geistige Klarheit für die ersten Prüfungsfragen zurückgewinnen.",
    options: {
      A: "Ich atme mehrmals langsam und tief in den Bauch ein und aus, mache mir bewusst, dass die Nervosität eine normale Aktivierung ist, und fokussiere mich ausschließlich auf die Begrüßung und die erste Frage.",
      B: "Ich blättere hektisch den gesamten Anatomieatlas auf meinem Smartphone durch, um jede denkbare Wissenslücke in letzter Minute noch auszubessern.",
      C: "Ich versuche, die Angst mit aller Willenskraft zu unterdrücken, und zwinge mich, an überhaupt nichts mehr zu denken, bis die Prüfungskommission mich aufruft.",
      D: "Ich erkläre den wartenden Mitstudierenden ausführlich, wie unzureichend ich vorbereitet bin, um mein Gewissen für ein mögliches Scheitern im Vorfeld zu entlasten.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Durch atembasierte physiologische Beruhigung und kognitive Entdramatisierung wird der Sympathikustonus gedämpft; die Konzentration auf die unmittelbare Einstiegsaufgabe bricht die Panikspirale.",
      B: "Hektisches Überfliegen von Fachliteratur kurz vor Prüfungsbeginn überlastet das Arbeitsgedächtnis und schürt das Gefühl der Orientierungslosigkeit.",
      C: "Versuche rigoroser Gedankenunterdrückung verstärken über den Rebound-Effekt die emotionale Anspannung und blockieren den Zugriff auf das Langzeitgedächtnis.",
      D: "Katastrophisierendes Klagen vor Mitprüflingen vertieft die Hilflosigkeit und schwächt die verbleibende Selbstwirksamkeit.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Überlastet das Arbeitsgedächtnis in letzter Minute und steigert die Panik statt Klarheit zu schaffen.",
      C: "Führt durch Rebound-Effekte zu noch stärkerer kognitiver Blockade.",
      D: "Festigt Versagensängste und vergeudet die verbleibenden Minuten mit destruktiver Selbstabwertung.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Unter akutem Prüfungsstress ist eine rasche physiologische Herunterregulierung entscheidend. Eine kontrollierte Bauchatmung aktiviert den Parasympathikus, während die kognitive Reduktion auf die erste Teilaufgabe (Begrüßung und Frage 1) das Arbeitsgedächtnis entlastet.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Hektisches Nachschlagen überfordert die Kognition und befeuert das Gefühl von Wissenslücken.\n- **Option C:** Emotionale Unterdrückung blockiert den deklarativen Gedächtnisabruf.\n- **Option D:** Selbstbeschwichtigendes Jammern verstärkt die Versagensüberzeugung.",
  },

  // ─── Q02 (Leicht · problem_focused_coping) ─── Key: B
  {
    id: "SEK-ER-GP2-002",
    legacyId: "er-sim2-q02",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 2,
    difficulty: "Leicht",
    strategyType: "problem_focused_coping",
    emotion: "Frustration und Demotivation nach schlechtem Probetest-Ergebnis",
    scenario:
      "Bei einer Probeklausur im Fach Physiologie hast du unerwartet nur 45 % der Punkte erreicht, obwohl du die letzten Tage viel gelernt hast. Du fühlst dich frustriert, zweifelst an deinen Fähigkeiten und hast keine Lust mehr, die Unterlagen überhaupt noch anzusehen.",
    goal: "Die Frustration überwinden und gezielt die Wissenslücken für die Hauptklausur schließen.",
    options: {
      A: "Ich lege alle Physiologie-Bücher für die nächste Woche komplett beiseite und lerne stattdessen nur noch Fächer, in denen ich mich sicher fühle.",
      B: "Ich nehme die fehlerhaften Aufgaben sachlich zur Hand, analysiere systematisch meine Fehlertypen (Verständnis- vs. Flüchtigkeitsfehler) und erstelle einen gezielten Wiederholungsplan für die Schwachstellen.",
      C: "Ich rede mir ein, dass der Probetest unfair konzipiert war und die echte Prüfung sicherlich viel einfacher sein wird.",
      D: "Ich wiederhole den gesamten Stoff noch einmal exakt mit derselben Methode von Seite eins an, um mir zu beweisen, dass ich es kann.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Vermeidung des Problemfachs schützt kurzfristig vor Frustration, lässt die gravierenden Wissenslücken für die Hauptklausur aber unverändert bestehen.",
      B: "Die systematische Differenzierung von Fehlern wandelt Demotivation in handlungsorientierte Selbstwirksamkeit um und schließt die Lücken gezielt.",
      C: "Die Abwertung des Tests als unfair ist eine Ausweichstrategie, die keine inhaltliche Verbesserung herbeiführt.",
      D: "Das bloße Wiederholen derselben ineffizienten Lernmethode ohne Fehleranalyse birgt das Risiko eines identischen Misserfolgs in der Hauptprüfung.",
    },
    explanationsIncorrect: {
      A: "Ist passive Vermeidung, die die Wissensdefizite bis zur Hauptklausur unberührt lässt.",
      B: "", // Korrekte Antwort
      C: "Schützt das Ego durch Selbsttäuschung, verhindert aber jeglichen Lernfortschritt.",
      D: "Ignoriert die spezifischen Fehlerquellen und vergeudet wertvolle Lernzeit mit unreflektiertem Wiederholen.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Die strukturierte Fehleranalyse ist der effektivste Weg, um aus dem emotionalen Tief nach einer Fehlleistung herauszufinden. Sie entkoppelt den Misserfolg vom Selbstwert und übersetzt ihn in konkrete Handlungsschritte.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Vermeidet das Problemfach und garantiert ein Scheitern in der Hauptprüfung.\n- **Option C:** Externalisiert die Verantwortung und verhindert Korrekturen.\n- **Option D:** Wiederholt unreflektiert dieselben Fehler.",
  },

  // ─── Q03 (Leicht · constructive_communication) ─── Key: C
  {
    id: "SEK-ER-GP2-003",
    legacyId: "er-sim2-q03",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 3,
    difficulty: "Leicht",
    strategyType: "constructive_communication",
    emotion: "Ärger über unzuverlässige Teamarbeit im Praktikum",
    scenario:
      "In einem klinischen Praktikum erstellst du gemeinsam mit einer Kollegin einen Patientenfallbericht. Die Kollegin liefert ihren vereinbarten Teil kurz vor der Deadline nicht ab und reagiert nicht auf Nachrichten, sodass die termingerechte Abgabe ernsthaft gefährdet ist. Du bist extrem wütend über ihre Unzuverlässigkeit.",
    goal: "Die termingerechte Abgabe sichern und die Zusammenarbeit ohne eskalierenden Streit klären.",
    options: {
      A: "Ich verfasse eine wütende Nachricht in der gemeinsamen Praktikumsgruppe und drohe ihr öffentlich damit, sie beim Praktikumsleiter anzuschwärzen.",
      B: "Ich übernehme stillschweigend ihren gesamten Teil und breche für den Rest des Semesters jeden persönlichen Kontakt zu ihr ab.",
      C: "Ich rufe sie direkt an, schildere sachlich die Dringlichkeit der Deadline, frage nach dem aktuellen Stand ihres Teils und vereinbare eine konkrete Lösung für die Einreichung.",
      D: "Ich warte einfach ab und lasse die Frist verstreichen, um der Kollegin vor dem Dozenten die Schuld an der gemeinsamen schlechten Note zu demonstrieren.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Öffentliche Vorwürfe erzeugen Abwehr und Trotz, blockieren die Klärung und eskalieren den Konflikt vor dem Team.",
      B: "Stillschweigendes Abarbeiten schürt verdeckte Verbitterung und löst das strukturelle Problem der Arbeitsaufteilung nicht.",
      C: "Ein direktes, sachliches Telefonat fokussiert auf das übergeordnete Ziel (Fristwahrung) und ermöglicht eine pragmatische Klärung ohne Vorverurteilung.",
      D: "Das absichtliche Verstreichenlassen der Deadline schädigt die eigene akademische Leistung aus Rachsucht (destruktive Selbstschädigung).",
    },
    explanationsIncorrect: {
      A: "Eskaliert den zwischenmenschlichen Streit und sabotiert eine lösungsorientierte Einreichung.",
      B: "Bedeutet stille Überlastung und fördert unkollegiales Verhalten bei künftigen Projekten.",
      C: "", // Korrekte Antwort
      D: "Ist eine selbstschädigende Rachehandlung, die die eigene Benotung aktiv zerstört.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Konstruktive Kommunikation trennt den berechtigten Ärger vom sachlichen Handlungsdruck. Der persönliche Anruf klärt Missverständnisse oder Notfälle schnell auf und hält den Fokus auf der gemeinsamen Einreichung.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Zerstört die Kooperation durch Bloßstellung.\n- **Option B:** Belastet dich mit unbezahlter Mehrarbeit und lässt den Frust schwelen.\n- **Option D:** Schadet dir selbst am meisten durch Notenverlust.",
  },

  // ─── Q04 (Mittel · emotional_reappraisal) ─── Key: D
  {
    id: "SEK-ER-GP2-004",
    legacyId: "er-sim2-q04",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 4,
    difficulty: "Mittel",
    strategyType: "emotional_reappraisal",
    emotion: "Kränkung und Scham nach öffentlicher Zurechtweisung",
    scenario:
      "Auf der Station wirst du bei der Morgenvisite vom Oberarzt vor Patienten und Pflegepersonal barsch gerügt, weil du bei der Dokumentation eines Laborwerts die Einheit nicht angegeben hast. Du spürst brennende Scham und fühlst dich fachlich bloßgestellt.",
    goal: "Die emotionale Kränkung distanzieren und die sachliche Relevanz der Kritik für die Patientensicherheit erkennen.",
    options: {
      A: "Ich sage mir, dass der Oberarzt nur ein herrschsüchtiger Mensch ist, dessen fachliche Anmerkungen man prinzipiell ignorieren sollte.",
      B: "Ich ziehe mich beschämt für den restlichen Tag im Stationszimmer zurück und vermeide jeden weiteren Kontakt mit dem Oberarzt.",
      C: "Ich gehe in der Pause zum Oberarzt und fordere vor versammelter Runde eine formelle Entschuldigung für seinen unhöflichen Tonfall.",
      D: "Ich trenne den harschen Tonfall bewusst von der Sachebene, erkenne an, dass exakte Einheiten in der Medizin für die Patientensicherheit essenziell sind, und nehme mir vor, künftig besonders sorgfältig darauf zu achten.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Die pauschale Abwertung der Person wehrt Scham ab, blendet jedoch die reale Bedeutung des Dokumentationsfehlers aus.",
      B: "Sozialer Rückzug verstärkt die Scham und behindert die praktische Ausbildung auf der Station.",
      C: "Eine affektive Konfrontation in der Hierarchie eskaliert den Konflikt und lenkt vom eigenen Sorgfaltsfehler ab.",
      D: "Kognitives Reappraisal (Differenzierung von Form und Inhalt) entlastet den Selbstwert und nutzt die Kritik konstruktiv zur Fehlerprävention.",
    },
    explanationsIncorrect: {
      A: "Schützt das Ego durch Arroganz, verhindert aber das Erlernen lebenswichtiger klinischer Sorgfalt.",
      B: "Vertieft das Gefühl der Isolation und schwächt das professionelle Selbstvertrauen.",
      C: "Provoziert einen Machtkampf in der Krankenhaushierarchie und übersieht den eigenen Fehler.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Die kognitive Umbewertung durch Entkopplung von emotionalem Ton und sachlichem Kern ist die Kernkompetenz im klinischen Alltag. Exakte Einheiten retten Menschenleben; das Erkennen dieser Relevanz verwandelt Kränkung in professionelles Lernen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Verdrängt die Verantwortung durch Zynismus.\n- **Option B:** Ist Vermeidungsverhalten, das die klinische Weiterentwicklung lähmt.\n- **Option C:** Ist ein unüberlegter hierarchischer Affektangriff.",
  },

  // ─── Q05 (Mittel · perspective_taking) ─── Key: A
  {
    id: "SEK-ER-GP2-005",
    legacyId: "er-sim2-q05",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 5,
    difficulty: "Mittel",
    strategyType: "perspective_taking",
    emotion: "Enttäuschung und Zurückweisung durch einen guten Freund",
    scenario:
      "Ein enger Freund sagt kurzfristig eure seit Wochen geplante gemeinsame Geburtstagsfeier ab, weil er sich „erschöpft und gestresst“ fühle. Du bist tief enttäuscht und fragst dich verletzt, ob ihm eure Freundschaft überhaupt noch etwas bedeutet.",
    goal: "Die verletzte Enttäuschung verarbeiten und die Freundschaft vor voreiligen Anschuldigungen schützen.",
    options: {
      A: "Ich versetze mich in seine aktuelle Lebenslage mit Examen und familiären Sorgen, erkenne an, dass seine Absage kein Angriff auf mich ist, und biete ihm verständnisvoll an, das Treffen ohne Druck nachzuholen.",
      B: "Ich lösche seine Nummer und warte ab, ob er sich von selbst meldet, um zu testen, wie wichtig ich ihm wirklich bin.",
      C: "Ich schreibe ihm sofort eine lange Nachricht, in der ich ihm vorrechne, wie oft ich trotz Stress immer für ihn da war.",
      D: "Ich tue so, als wäre mir die Feier ohnehin völlig egal gewesen, und sage mir, dass man sich auf niemanden verlassen kann.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Empathische Perspektivenübernahme dezentriert die Kränkung, verhindert destruktive Fehlattributionen und schützt die Beziehungsbasis.",
      B: "Passive Kontaktabbrüche und Beziehungstests sind manipulativ und vergiften das Vertrauen.",
      C: "Vorwurfsvolles Aufrechnen erzeugt beim gestressten Freund Schuldgefühle und führt zu Verteidigungshaltung statt Nähe.",
      D: "Zynische Entwertung der Freundschaft schützt vorübergehend das Ego, führt aber zu dauerhafter emotionaler Verbitterung.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Manipulatives Schweigen schadet der Freundschaft und verhindert die Klärung.",
      C: "Eskaliert Vorwürfe und ignoriert den Erschöpfungszustand des Freundes.",
      D: "Festigt misstrauische Glaubenssätze und zerstört wertvolle soziale Bindungen.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Perspektivenübernahme hilft zu erkennen, dass die Absage eines überlasteten Menschen Ausdruck eigener Überforderung und kein Mangel an Zuneigung ist. Dies entlastet die eigene Kränkung und erhält die Freundschaft stabil.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Beziehungsspiele vertiefen das Missverständnis.\n- **Option C:** Erzeugt unnötigen Druck und Konflikte.\n- **Option D:** Resignativer Zynismus isoliert emotional.",
  },

  // ─── Q06 (Mittel · acceptance) ─── Key: B
  {
    id: "SEK-ER-GP2-006",
    legacyId: "er-sim2-q06",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 6,
    difficulty: "Mittel",
    strategyType: "acceptance",
    emotion: "Ohnmacht und Zermürbung durch eine unbeeinflussbare organisatorische Verzögerung",
    scenario:
      "Du wartest seit vier Wochen auf die behördliche Genehmigung deiner Diplomarbeit, ohne die du nicht mit der Datenerhebung im Spital beginnen kannst. Täglich rufst du vergeblich im Sekretariat an und fühlst dich innerlich zermürbt, nervös und wütend über den Stillstand.",
    goal: "Die innere Unruhe über die unbeeinflussbare Wartezeit abbauen und die Zeit sinnvoll nutzen.",
    options: {
      A: "Ich rufe stündlich im Dekanat an und drohe mit einer Dienstaufsichtsbeschwerde, um die Genehmigung zu erzwingen.",
      B: "Ich akzeptiere, dass die behördliche Bearbeitungsdauer außerhalb meiner Kontrolle liegt, stelle das tägliche Nachfragen ein und bereite stattdessen die Literaturübersicht und die Auswertungsskripte vor.",
      C: "Ich breche das Diplomarbeitsthema ab und suche mir kurzfristig einen neuen Betreuer, um nicht länger untätig warten zu müssen.",
      D: "Ich verbringe die Tage damit, in Online-Foren Beiträge über ineffiziente Universitätsverwaltungen zu lesen und mich dort mitzugrämen.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Aggressives Bedrängen der Verwaltung erzeugt Verhärtung und beschleunigt den formalen Prozess nicht.",
      B: "Radikale Akzeptanz des Unveränderlichen stoppt den zermürbenden Kontrollzwang und lenkt die Energie auf nützliche Vorarbeiten.",
      C: "Ein Abbruch vernichtet Monate investierter Vorarbeit und verzögert das Studium ungleich stärker.",
      D: "Gemeinsames Jammern im Internet vertieft die gefühlte Hilflosigkeit und vergeudet produktive Arbeitszeit.",
    },
    explanationsIncorrect: {
      A: "Provoziert administrative Konflikte ohne jeglichen Zeitgewinn.",
      B: "", // Korrekte Antwort
      C: "Ist eine panische Kurzschlusshandlung, die das gesamte Studium zurückwirft.",
      D: "Fördert dysfunktionales Grübeln und verstärkt die Frustration.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Die Unterscheidung zwischen Kontrollierbarem und Unkontrollierbarem ist eine tragende Säule emotionaler Reife. Das Loslassen des Kontrollwahns bei Behördenfristen schafft Raum, um andere Teile der Arbeit produktiv voranzutreiben.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Erzeugt Feindseligkeit und blockiert Beamte.\n- **Option C:** Ist ein unverhältnismäßiger, schädigender Schritt.\n- **Option D:** Bindet Energie in unfruchtbarem Frust.",
  },

  // ─── Q07 (Mittel · impulse_control) ─── Key: C
  {
    id: "SEK-ER-GP2-007",
    legacyId: "er-sim2-q07",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 7,
    difficulty: "Mittel",
    strategyType: "impulse_control",
    emotion: "Gereiztheit und Impulsivität bei provokantem Patientenverhalten",
    scenario:
      "In der Notfallambulanz beschimpft dich ein alkoholisierter Patient mit einer leichten Schnittwunde lauthals als „inkompetent“, weil er wegen schwerer Traumapatienten 30 Minuten warten musste. Du spürst eine aufsteigende Wut und den starken Drang, ihm scharf Kontra zu geben und ihn aus der Ambulanz zu verweisen.",
    goal: "Professionelle Gelassenheit bewahren, den Affekt kontrollieren und die Behandlung deeskalierend durchführen.",
    options: {
      A: "Ich mache dem Patienten im selben gereizten Ton klar, dass Betrunkene hier überhaupt kein Recht auf Sonderbehandlung haben.",
      B: "Ich verweigere die Wundversorgung und rufe die Security, damit der Patient sofort des Hauses verwiesen wird.",
      C: "Ich halte kurz inne, zähle innerlich bis drei, schreibe die Aggression der Enthemmung durch den Alkohol zu und biete mit ruhiger, bestimmter Stimme die Wundversorgung an.",
      D: "Ich verlasse wortlos den Raum und schicke eine Pflegekraft vor, um der unangenehmen Konfrontation aus dem Weg zu gehen.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Gegenaggression eskaliert verbale Beschimpfungen in unkontrollierbare körperliche Auseinandersetzungen.",
      B: "Das Verweigern der Wundversorgung verletzt die ärztliche Fürsorgepflicht, solange keine akute körperliche Gefährdung vorliegt.",
      C: "Kurze Reaktionsverzögerung (Impulskontrolle) und kognitive Attribution auf den Rauschzustand ermöglichen professionelle, deeskalierende Versorgung.",
      D: "Wortloses Verlassen delegiert den schwierigen Patienten unkollegial an das Pflegepersonal und löst das Problem nicht.",
    },
    explanationsIncorrect: {
      A: "Heizt den Streit im Wartezimmer an und gefährdet die Sicherheit aller Anwesenden.",
      B: "Verletzt die medizinische Pflicht zur Erstversorgung ohne Notfallindikation.",
      C: "", // Korrekte Antwort
      D: "Stellt unprofessionelle Flucht auf Kosten des Pflegeteams dar.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Impulskontrolle durch Innehalten bricht die affektive Reiz-Reaktions-Kette. Die Einsicht, dass Provokationen berauschter Patienten selten persönlich gemeint sind, schützt die eigene Professionalität und beruhigt die Situation.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Eskaliert Gewaltpotenzial.\n- **Option B:** Verletzt ethische und rechtliche Behandlungspflichten.\n- **Option D:** Schiebt die Verantwortung feige ab.",
  },

  // ─── Q08 (Mittel · social_support) ─── Key: D
  {
    id: "SEK-ER-GP2-008",
    legacyId: "er-sim2-q08",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 8,
    difficulty: "Mittel",
    strategyType: "social_support",
    emotion: "Belastung und emotionale Erschütterung nach dem Tod eines Patienten",
    scenario:
      "Du hast auf der Station zum ersten Mal miterlebt, wie eine Reanimation bei einem älteren Patienten nach 45 Minuten erfolglos abgebrochen werden musste. Nach Dienstende gehen dir die Bilder nicht aus dem Kopf; du fühlst dich innerlich leer, bedrückt und zweifelst an deiner Eignung für den Arztberuf.",
    goal: "Das Erlebte emotional verarbeiten und wieder seelischen Halt und Zuversicht finden.",
    options: {
      A: "Ich verbringe den Abend allein zu Hause mit Alkohol, um die belastenden Bilder im Kopf schnell zu betäuben.",
      B: "Ich verdränge das Thema vollständig und tue am nächsten Morgen so, als hätte der Vorfall überhaupt keine Spuren bei mir hinterlassen.",
      C: "Ich stelle sofort mein Medizinstudium infrage und bitte im Dekanat um eine Beurlaubung.",
      D: "Ich bitte einen erfahrenen Assistenzarzt oder Kollegen um ein vertrauliches Gespräch, um über meine Gefühle bei der ersten Reanimation offen zu sprechen.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Substanzkonsum zur Affektdämpfung birgt erhebliche Suchtrisiken und blockiert eine gesunde Trauer- und Belastungsverarbeitung.",
      B: "Emotionale Taubheit und Verdrängung kumulieren chronischen Stress und fördern spätere Traumafolgestörungen.",
      C: "Kurzschlusshandlungen im Zustand akuter Belastung zerstören den eigenen Berufswunsch voreilig.",
      D: "Strukturierte soziale Unterstützung im klinischen Kontext (kollegiales Debriefing) normalisiert Belastungsreaktionen und spendet Halt.",
    },
    explanationsIncorrect: {
      A: "Verhindert seelische Verarbeitung und erzeugt ungesunde Bewältigungsmuster.",
      B: "Führt zu emotionaler Abstumpfung und erhöhtem Burnout-Risiko.",
      C: "Überreagiert im Affekt und wirft den Ausbildungsweg voreilig weg.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Die erste erlebte Reanimation mit Todesfolge ist ein kritisches Lebensereignis in der medizinischen Biografie. Das Gespräch mit erfahrenen Kolleginnen und Kollegen vermittelt, dass Trauer und Schock normal sind und zum Beruf gehören.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Betäubung löst keine seelische Belastung.\n- **Option B:** Verdrängung schadet der mentalen Gesundheit langfristig.\n- **Option C:** Ist eine voreilige Kapitulation vor unvermeidbaren Realitäten der Medizin.",
  },

  // ─── Q09 (Mittel · emotional_reappraisal) ─── Key: A
  {
    id: "SEK-ER-GP2-009",
    legacyId: "er-sim2-q09",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 9,
    difficulty: "Mittel",
    strategyType: "emotional_reappraisal",
    emotion: "Neid und Minderwertigkeitsgefühl gegenüber erfolgreichen Kommilitonen",
    scenario:
      "Dein bester Lernpartner hat im renommierten Forschungsprojekt der Uniklinik eine hochdotierte Hilfskraftstelle erhalten, während deine Bewerbung abgelehnt wurde. Obwohl du dich für ihn freuen willst, spürst du nagenden Neid und das Gefühl, im Vergleich zu ihm zweitklassig zu sein.",
    goal: "Den quälenden Neid auflösen und die Freundschaft sowie das eigene Selbstwertgefühl schützen.",
    options: {
      A: "Ich gönne ihm den Erfolg aufrichtig, deute den Neid als Signal für eigene Ambitionen um und frage ihn, worauf es bei seiner Bewerbung ankam, um daraus für mich zu lernen.",
      B: "Ich kündige die gemeinsame Lerngruppe, um nicht ständig an den Erfolg des Freundes erinnert zu werden.",
      C: "Ich deute vor anderen Kommilitonen an, dass er die Stelle nur wegen persönlicher Protektion des Professors erhalten habe.",
      D: "Ich rede mir ein, dass universitäre Forschung ohnehin überbewertet sei und eine rein klinische Laufbahn viel erstrebenswerter ist.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Reappraisal transformiert Neid von einer destruktiven Missgunst in ein adaptives Motivationssignal zur eigenen Weiterentwicklung und bewahrt die Freundschaft.",
      B: "Der Rückzug aus der Lerngruppe zerstört ein bewährtes Unterstützungsnetzwerk aus gekränktem Stolz.",
      C: "Das Streuen von Gerüchten über Protektion ist missgünstig, unkollegial und schadet dem eigenen Ruf.",
      D: "Abwertung des erstrebten Ziels ('saure Trauben') ist defensive Selbstberuhigung, die das eigene Potenzial kleinredet.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Isoliert sozial und beendet eine fruchtbare akademische Partnerschaft.",
      C: "Zeugt von Neidmissgunst und vergiftet das soziale Klima im Semester.",
      D: "Verhindert die echte Auseinandersetzung mit den eigenen akademischen Zielen.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Konstruktives Reframing erkennt Neid als Indikator eigener Sehnsüchte an. Durch die Umwandlung von Neid in Neugier und Kooperation profitiert man vom Erfolg des Freundes und baut eigene Kompetenzen auf.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Beendet Beziehungen aus verletzter Eitelkeit.\n- **Option C:** Ist destruktive Verleumdung.\n- **Option D:** Ist Scheintrost, der den eigenen Wunsch verleugnet.",
  },

  // ─── Q10 (Schwer · goal_preservation) ─── Key: B
  {
    id: "SEK-ER-GP2-010",
    legacyId: "er-sim2-q10",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 10,
    difficulty: "Schwer",
    strategyType: "goal_preservation",
    emotion: "Entmutigung und Versagensgefühl nach wiederholtem Misserfolg bei einer manuellen Fertigkeit",
    scenario:
      "Im chirurgischen Nahtkurs reißt dir beim Knoten unter Zeitdruck zum vierten Mal der Faden ab. Andere Teilnehmende legen bereits saubere Nähte vor. Du spürst eine Mischung aus Zorn auf deine Hände und tiefer Entmutigung und möchtest das Besteck am liebsten auf den Tisch werfen und den Raum verlassen.",
    goal: "Den Frustrationsstau durchbrechen, die Hektik stoppen und die Fingerfertigkeit methodisch sauber trainieren.",
    options: {
      A: "Ich lege die Nadelzange wütend beiseite und halte dem Kursleiter vor, dass die bereitgestellten Fäden von mangelhafter Qualität sind.",
      B: "Ich lege die Instrumente kurz ab, schüttele die Hände aus, halbiere bewusst mein Tempo und wiederhole die Fingerführung für einen einzelnen Knoten ganz langsam und fehlerfrei.",
      C: "Ich schaue für den restlichen Kurs nur noch den anderen zu, um aus deren Bewegungen theoretisch zu lernen, ohne mich weiter zu blamieren.",
      D: "Ich steigere das Tempo noch weiter und versuche die Naht mit maximalem Krafteinsatz zu erzwingen, um die Zeitvorgabe doch noch einzuhalten.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Schuldabwälzung auf das Material schützt kurzzeitig die Eitelkeit, verhindert aber jede feinmotorische Verbesserung.",
      B: "Entschleunigung, körperliches Lockern und isoliertes Üben in Zeitlupe etablieren die richtige Muskelkoordination und überwinden die Frustration.",
      C: "Reines Zuschauen umgeht zwar Fehlererlebnisse, bildet jedoch keine handwerkliche Fertigkeit im motorischen Cortex aus.",
      D: "Krampfhafter Krafteinsatz führt bei feinen Fäden unweigerlich zu weiteren Rissen und vertieft den Zorn.",
    },
    explanationsIncorrect: {
      A: "Ist kindliche Abwehr, die den Trainer verärgert und keinen Lerneffekt bringt.",
      B: "", // Korrekte Antwort
      C: "Vermeidet das Üben und lässt die praktische Fertigkeit unentwickelt.",
      D: "Forciert das Scheitern durch motorische Verkrampfung noch weiter.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Feine manuelle Fertigkeiten erfordern Entspannung und Präzision statt Muskelkraft. Eine bewusste Tempohalbierung durchbricht den Frustrationskreislauf und ermöglicht den Aufbau eines fehlerfreien motorischen Programms.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Unreife Schuldzuweisung an das Besteck.\n- **Option C:** Flucht vor dem Üben.\n- **Option D:** Verstärkt die Verkrampfung mechanisch.",
  },

  // ─── Q11 (Schwer · constructive_communication) ─── Key: C
  {
    id: "SEK-ER-GP2-011",
    legacyId: "er-sim2-q11",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 11,
    difficulty: "Schwer",
    strategyType: "constructive_communication",
    emotion: "Verbitterung und Ausbeutungsgefühl bei unausgewogener Schichtverteilung",
    scenario:
      "Auf deiner Abteilung stellt die Schichtleitung bereits zum dritten Mal in Folge den Dienstplan so um, dass du am Wochenende für eine Kollegin einspringen musst, die kurzfristig privat verhindert ist. Du fühlst dich ausgenutzt, bist innerlich verbittert und überlegst, dich aus Trotz am Freitag krankzumelden.",
    goal: "Die Ausbeutung beenden und die eigenen Grenzen wahren, ohne die Patientenversorgung durch unkollegiales Verhalten zu gefährden.",
    options: {
      A: "Ich lasse mich am Freitag kurzfristig krankschreiben, damit die Stationsleitung selbst spürt, wie es ist, wenn Dienste unbesetzt bleiben.",
      B: "Ich arbeite das Wochenende zähneknirschend, verbreite aber auf Station demonstrativ schlechte Laune und tue nur das absolute Minimum.",
      C: "Ich suche das direkte Gespräch mit der Schichtleitung, zeige sachlich auf, dass ich die letzten drei Wochenenden übernommen habe, und vereinbare verbindlich zwei freie Ausgleichstage.",
      D: "Ich reiche sofort eine formelle Beschwerde beim Betriebsrat und der Klinikdirektion ein, ohne vorher mit der Schichtleitung gesprochen zu haben.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Vorgetäuschte Arbeitsunfähigkeit ist arbeitsrechtlich riskant, gefährdet die Patientenversorgung und belastet unbeteiligte Kollegen.",
      B: "Passiv-aggressives Verhalten vergiftet das Arbeitsklima und löst das strukturelle Problem ungleicher Dienste nicht.",
      C: "Selbstbehauptung mit sachlicher Dokumentation setzt klare Grenzen, wahrt die Professionalität und schafft verbindlichen Freizeitausgleich.",
      D: "Eine sofortige Vorstands- oder Betriebsratsbeschwerde ohne Klärungsversuch auf Stationsebene verletzt Dienstwege und verbrennt Brücken.",
    },
    explanationsIncorrect: {
      A: "Ist rechtswidrige Sabotage, die Patienten und andere Teammitglieder gefährdet.",
      B: "Schädigt die Arbeitsqualität und erzeugt dauerhafte Unzufriedenheit.",
      C: "", // Korrekte Antwort
      D: "Eskaliert administrativ übermäßig und verhärtet die Fronten auf der Station.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Konstruktive Grenzziehung (Assertiveness) schützt vor chronischer Ausbeutung im Gesundheitswesen. Indem man faktenbasiert auf die geleisteten Überstunden verweist und einen verbindlichen Ausgleich aushandelt, behält man die Kontrolle ohne unethische Sabotage.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Illegale Krankmeldung schädigt unschuldige Kranke.\n- **Option B:** Passiv-aggressiver Dienst schadet dem Team.\n- **Option D:** Übereilte administrative Eskalation zerstört Vertrauen.",
  },

  // ─── Q12 (Schwer · emotional_reappraisal) ─── Key: D
  {
    id: "SEK-ER-GP2-012",
    legacyId: "er-sim2-q12",
    simulationId: "generalprobe-2",
    subtest: "ER",
    questionNumber: 12,
    difficulty: "Schwer",
    strategyType: "emotional_reappraisal",
    emotion: "Selbstvorwürfe und Panik nach einem Beinahe-Fehler bei einer Medikamentenverabreichung",
    scenario:
      "Du wolltest einem Patienten ein intravenöses Schmerzmittel spritzen und bemerkst erst unmittelbar vor der Injektion, dass die Ampulle eine zehnfach höhere Dosis enthielt als verordnet. Du konntest den Fehler abwenden, doch der Schock sitzt tief: Du zitterst und machst dir schwere Vorwürfe, fast das Leben eines Menschen gefährdet zu haben.",
    goal: "Den lähmenden Schock überwinden, das Ereignis als wichtigen Lerneffekt einordnen und künftige Sicherheitssysteme stärken.",
    options: {
      A: "Ich erzähle den Vorfall niemandem, um meine Approbation nicht zu gefährden, und hoffe, dass so etwas nie wieder vorkommt.",
      B: "Ich bitte die Stationsleitung, mich von allen praktischen Tätigkeiten zu entbinden, da ich offensichtlich unaufmerksam und ungeeignet für die Patientenbehandlung bin.",
      C: "Ich gebe dem Pflegepersonal die alleinige Schuld, da sie die Ampulle im falschen Fach des Medikamentenschranks einsortiert hatten.",
      D: "Ich mache mir bewusst, dass meine finale Kontrollroutine vor der Injektion gegriffen und Schaden verhindert hat, und melde den Beinahe-Fehler im Critical Incident Reporting System (CIRS), um die Verwechslungsgefahr im Team dauerhaft zu beseitigen.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Das Verschweigen von Beinahe-Fehlern verhindert systemisches Lernen und belässt die latente Gefahrenquelle im Klinikalltag.",
      B: "Übergeneralisierende Selbstabwertung und Rückzug führen zu handlungsunfähiger Angst statt zu klinischer Reife.",
      C: "Reines Abwälzen der Verantwortung auf die Pflege blendet die eigene ärztliche Letztkontrolle vor der Injektion aus.",
      D: "Kognitives Reappraisal (Anerkennung der wirksamen Barriere) plus systemische CIRS-Meldung transformiert den Schock in aktive Sicherheitskultur.",
    },
    explanationsIncorrect: {
      A: "Gefährdet künftige Patienten durch das Verschweigen systemischer Fallen.",
      B: "Ist destruktive Resignation, die die ärztliche Identität lähmt.",
      C: "Vergiftet die interprofessionelle Zusammenarbeit durch Schuldzuweisungen.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Fehlerkultur in der Medizin basiert darauf, Beinahe-Fehler ('Near Misses') nicht mit Scham zu begraben, sondern als Beweis funktionierender Barrieren zu begreifen und strukturell über CIRS aufzuarbeiten. Das schützt künftige Patienten und stellt das seelische Gleichgewicht wieder her.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Gefährdet künftige Patienten durch Intransparenz.\n- **Option B:** Destruktive Selbstaufgabe.\n- **Option C:** Destruktive Schuldverschiebung.",
  },
];

export const GENERALPROBE_2_ER_SIMULATION_DATA: ErSimulationData = {
  simulationId: "generalprobe-2",
  simNumber: 2,
  title: "MedAT-H Generalprobe #2 — Emotionen regulieren",
  subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (1080s) · Situative Zielerreichung & Emotionsregulation",
  timeLimitSeconds: 18 * 60,
  questions: RAW_GENERALPROBE_2_ER_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #2 runtime and review engine
 */
export const GENERALPROBE_2_ER_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_ER_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = erQuestionToStoredQuestion(q, GENERALPROBE_2_ER_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-ER-GP2-${numStr}`,
      legacyId: `er-sim2-q${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "ER", "Emotionen regulieren", "Generalprobe #2", `SEK-ER-GP2-${numStr}`],
      erData: {
        ...q,
        id: `SEK-ER-GP2-${numStr}`,
        legacyId: `er-sim2-q${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
