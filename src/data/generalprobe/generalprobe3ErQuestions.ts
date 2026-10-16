/**
 * MedAT SEK — Emotionen regulieren (ER) — Generalprobe #3
 * Exactly 12 Questions · 18 Minutes Exam Time (1080 seconds, 90s / task)
 * 
 * IDs: SEK-ER-GP3-001 through SEK-ER-GP3-012 (aliased to legacy er-sim3-q01 .. q12)
 * 
 * Specifications:
 * - Exactly 12 Questions assessing situational emotion regulation under goal-directed constraints
 * - Authentic, high-validity German scenarios across medical training, exams, clinics, and academic life
 * - Explicit, clearly defined goal for each scenario
 * - Exactly 4 distinct alternative strategy options per question (A–D), strictly written in the first person ("Ich ...")
 * - Exactly one best strategy per question evaluated strictly against the stated goal
 * - Difficulty distribution: Exactly 3 Leicht (25.0%), 6 Mittel (50.0%), 3 Schwer (25.0%)
 * - Balanced answer key distribution: Exactly 3 A, 3 B, 3 C, 3 D (non-repeating balanced sequence: B, D, A, C, B, A, D, C, A, B, D, C)
 * - Structured distractor analysis: Dedicated rationales for every option (rationalesByOption) & explicit distractor explanations (explanationsIncorrect)
 */

import type { StoredQuestion } from "../questions/types";
import type { ErOptionKey, ErQuestionData, ErSimulationData } from "../questions/er/types";
import { erQuestionToStoredQuestion } from "../questions/er/types";

export const RAW_GENERALPROBE_3_ER_QUESTIONS: ErQuestionData[] = [
  // ─── Q01 (Leicht · pause_and_prioritize) ─── Key: B
  {
    id: "SEK-ER-GP3-001",
    legacyId: "er-sim3-q01",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 1,
    difficulty: "Leicht",
    strategyType: "pause_and_prioritize",
    emotion: "Akute Überforderung und Hektik unter multiplen Anforderungen",
    scenario:
      "Mitten in einer hektischen Famulatur auf der Notaufnahme drängen zwei Pflegekräfte gleichzeitig mit dringlichen Blutentnahmen und Dokumentationsanforderungen auf dich ein, während ein Patient lautstark nach Schmerzmitteln verlangt. Du merkst, wie deine Atmung flach wird, deine Gedanken rasen und eine Welle von Überforderung in dir aufsteigt.",
    goal: "Die vegetative Übererregung rasch beruhigen, die Aufgaben nach Dringlichkeit ordnen und die eigene Handlungsfähigkeit sichern.",
    options: {
      A: "Ich weise das Pflegepersonal verärgert darauf hin, dass ich nur Famulant bin und sie mich nicht mit mehreren Anfragen gleichzeitig überrumpeln dürfen.",
      B: "Ich halte für zwanzig Sekunden inne, atme bewusst tief aus, trenne das akute Patientenanliegen von den administrativen Aufgaben und bitte die erfahrene Pflegekraft um eine kurze Priorisierung nach medizinischer Dringlichkeit.",
      C: "Ich versuche, alle Anforderungen parallel in doppelter Geschwindigkeit abzuarbeiten, um niemanden warten zu lassen und meine Belastbarkeit zu beweisen.",
      D: "Ich verlasse die Notaufnahme für eine unbestimmte Kaffeepause, bis sich der Patientenansturm gelegt hat und wieder Ruhe auf der Station einkehrt.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Ein aggressiver Vorwurf bindet emotionale Energie an einen zwischenmenschlichen Streit, statt die Aufgaben sachlich zu strukturieren, und beschädigt das Teamklima.",
      B: "Ein kurzes Innehalten mit vertiefter Ausatmung dämpft den Sympathikustonus; das Einholen einer fachlichen Priorisierung schafft sofortige Handlungsstruktur ohne Fehlerrisiko.",
      C: "Hektisches Multitasking unter akuter Erregung potenziert das Risiko gravierender Verwechslungen bei Blutproben und gefährdet die Patientensicherheit.",
      D: "Flucht von der Notaufnahme stellt eine dysfunktionale Problemvermeidung dar, die die Kollegen im Stich lässt und die Patientenversorgung verzögert.",
    },
    explanationsIncorrect: {
      A: "Eskaliert den Teamkonflikt im Affekt und löst die anstehenden medizinischen Aufgaben in keiner Weise.",
      B: "", // Korrekte Antwort
      C: "Steigert die Fehleranfälligkeit drastisch und führt durch unkontrollierte Hektik zu kognitiver Erschöpfung.",
      D: "Bedeutet unentschuldigte Arbeitsverweigerung und vereitelt das Ziel, handlungsfähig zu bleiben, vollständig.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Unter akuter Reizüberflutung bricht die exekutive Handlungsplanung zusammen. Das bewusste Innehalten für wenige Sekunden reguliert die vegetative Erregung herunter. Die strukturierte Priorisierung mit dem Team stellt die Handlungsfähigkeit sofort wieder her.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Reagiert impulsiv mit Vorwürfen und vergiftet die Zusammenarbeit.\n- **Option C:** Ist blinder Aktionismus mit hoher Gefahr von Behandlungsfehlern.\n- **Option D:** Ist eine unprofessionelle Fluchtreaktion mit Gefährdung der Patientenversorgung.",
  },

  // ─── Q02 (Leicht · constructive_communication) ─── Key: D
  {
    id: "SEK-ER-GP3-002",
    legacyId: "er-sim3-q02",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 2,
    difficulty: "Leicht",
    strategyType: "constructive_communication",
    emotion: "Kränkung und Verärgerung über öffentliche Rüge",
    scenario:
      "Bei der wöchentlichen Stationsvisite korrigiert dich der Oberarzt vor Patienten und Pflegepersonal in schneidendem, herablassendem Tonfall bezüglich einer Medikamentendosierung, obwohl du exakt nach der internen Leitlinie gehandelt hast. Du spürst eine heiße Welle der Scham und des Ärgers über die öffentliche Bloßstellung.",
    goal: "Den akuten Affekt kontrollieren, die Patientensicherheit gewährleisten und den Sachverhalt professionell ohne Gesichtsverlust klären.",
    options: {
      A: "Ich unterbreche den Oberarzt lautstark vor versammelter Runde und halte ihm vor, dass seine Leitlinie veraltet sei und er mich zu Unrecht demütigt.",
      B: "Ich schlucke die Demütigung wortlos herunter, ziehe mich innerlich völlig zurück und vermeide in den nächsten Wochen jeden freiwilligen Redebeitrag.",
      C: "Ich beschwere mich unmittelbar nach der Visite bei der Pflegedienstleitung über den unkollegialen Führungsstil des Oberarztes.",
      D: "Ich reguliere meinen Atem, nehme die Korrektur während der Visite sachlich zur Kenntnis, überprüfe im Anschluss die Leitlinie und bitte den Oberarzt unter vier Augen um ein kurzes fachliches Klärungsgespräch.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Ein offener Machtkampf vor Patienten untergräbt das Patientenvertrauen in die gesamte Station und eskaliert die Situation disziplinarisch.",
      B: "Innerer Rückzug zementiert die Opferhaltung, verhindert die sachliche Richtigstellung und schadet dem eigenen Lernerfolg nachhaltig.",
      C: "Die Beschwerde bei einer fachfremden Stelle ohne vorheriges Vier-Augen-Gespräch wirkt unprofessionell und löst die Fachfrage nicht.",
      D: "Das Zurückstellen des Affekts wahrt die professionelle Fassade vor Patienten; das anschließende Vier-Augen-Gespräch ermöglicht eine sachbezogene Klärung auf Augenhöhe.",
    },
    explanationsIncorrect: {
      A: "Zerstört das Vertrauensverhältnis vor Patienten und provoziert schwere disziplinarische Konsequenzen.",
      B: "Ist passive Resignation, die das Problem ungelöst lässt und die eigene Ausbildungsqualität untergräbt.",
      C: "Delegiert den Konflikt unsachgemäß an Dritte, statt die Differenz direkt und kollegial zu klären.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Das Wohl der Patienten verlangt während der Visite absolute Ruhe und Geschlossenheit des Behandlungsteams. Indem die emotionale Reaktion aufgeschoben und im geschützten Vier-Augen-Setting sachlich adressiert wird, bleiben Würde, Fachlichkeit und Kooperation gewahrt.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Eskaliert den Konflikt vor Patienten und schädigt das Ansehen der Klinik.\n- **Option B:** Verdrängt den Ärger und führt zu Resignation und Frustration.\n- **Option C:** Ist ein unkollegialer Umweg über Unbeteiligte.",
  },

  // ─── Q03 (Leicht · emotional_reappraisal) ─── Key: A
  {
    id: "SEK-ER-GP3-003",
    legacyId: "er-sim3-q03",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 3,
    difficulty: "Leicht",
    strategyType: "emotional_reappraisal",
    emotion: "Versagensangst und Panik vor der Aufnahmeprüfung",
    scenario:
      "Eine Woche vor der schriftlichen MedAT-Prüfung erreichst du im Übungstest für das Fach Biologie statt der erhofften 90 % lediglich 62 %. Du spürst Panik aufsteigen und den katastrophisierenden Gedanken: „Ich habe monatelang umsonst gelernt, ich werde den MedAT niemals bestehen.“",
    goal: "Die katastrophisierende Bewertung stoppen, die Emotion normalisieren und die verbleibende Vorbereitungszeit fokussiert nutzen.",
    options: {
      A: "Ich mache mir bewusst, dass ein Übungstest gezielt schwierige Grenzfragen abprüft und die 62 % eine wertvolle Diagnose meiner letzten Wissenslücken sind, die ich nun strukturiert schließen kann.",
      B: "Ich versuche, die Angst vollständig zu ignorieren, und lerne die nächsten drei Nächte ohne Schlaf durch, um die Prozentzahl gewaltsam auszugleichen.",
      C: "Ich melde mich sofort vom MedAT ab, da ein solches Testergebnis beweist, dass meine Begabung für ein Medizinstudium nicht ausreicht.",
      D: "Ich beruhige mich damit, dass die Testfragen fehlerhaft und unrealistisch gestellt waren und der echte MedAT viel leichter ausfallen wird.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Kognitive Umbewertung (Reappraisal) wandelt das bedrohliche Testergebnis in ein konstruktives diagnostisches Instrument um und setzt Lernmotivation frei.",
      B: "Schlafentzug und krampfhaftes Dauerlernen führen zu kognitiver Erschöpfung und erhöhen das Blackout-Risiko am Prüfungstag massiv.",
      C: "Die sofortige Abmeldung ist eine fatale Fluchtreaktion infolge einer kognitiven Verzerrung (Übergeneralisierung).",
      D: "Die Entwertung des Tests ist eine defensive Verleugnung, die verhindert, dass reale Wissenslücken vor dem Testtag geschlossen werden.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Führt durch physiologische Überlastung und Schlafentzug geradewegs in die Leistungsunfähigkeit.",
      C: "Kapituliert vorübergehend vor einer Fehlbewertung und zerstört monatelange Vorbereitung.",
      D: "Verharmlost reale Schwachstellen durch bequeme Illusionen statt zielgerichteter Vorbereitung.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Die kognitive Umbewertung neutralisiert die Panik, indem der Misserfolg nicht als Urteil über die eigene Intelligenz interpretiert wird, sondern als präziser Fahrplan für den finalen Lernspurt. So bleibt die Motivation intakt.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Schlafentzug sabotiert die Gedächtniskonsolidierung kurz vor dem Test.\n- **Option C:** Ist voreilige Kapitulation vor einer lösbaren Hürde.\n- **Option D:** Untergräbt durch Schönfärberei die notwendige Nacharbeit.",
  },

  // ─── Q04 (Mittel · impulse_control) ─── Key: C
  {
    id: "SEK-ER-GP3-004",
    legacyId: "er-sim3-q04",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 4,
    difficulty: "Mittel",
    strategyType: "impulse_control",
    emotion: "Gereiztheit und aggressiver Impuls bei Übermüdung",
    scenario:
      "Nach einem anstrengenden Nachtdienst wirft dir ein Angehöriger auf dem Stationsflur wütend vor, dass du seine Mutter vernachlässigt hättest, weil ihr Tee kalt serviert wurde. Übermüdet und emotional gereizt merkst du, wie in dir der Impuls aufsteigt, den Angehörigen anzuschreien und ihm die reale Belastungsgrenze des Personals vorzuhalten.",
    goal: "Den aggressiven Impuls sicher beherrschen, deeskalierend reagieren und das Vertrauensverhältnis zum Angehörigen wahren.",
    options: {
      A: "Ich gebe meinem Ärger nach und erkläre dem Angehörigen in scharfem Ton, dass wir hier Menschenleben retten und uns nicht um luxuriöse Teetemperaturen kümmern können.",
      B: "Ich drehe mich wortlos um und gehe weiter, um meine eigene Erschöpfung nicht noch durch unnötige Diskussionen zu vergrößern.",
      C: "Ich halte den Impuls bewusst zurück, atme tief durch, spiegele das Bedürfnis des Angehörigen nach Fürsorge wider und biete sachlich an, die Pflegekraft umgehend um frischen warmen Tee zu bitten.",
      D: "Ich entschuldige mich unter Tränen und erkläre wehleidig, wie furchtbar überlastet das System und wie erschöpft ich persönlich bin.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Ein aggressiver Gegenangriff eskaliert den Konflikt sofort, führt zu offiziellen Beschwerden und verletzt die ärztliche Professionalität.",
      B: "Wortloses Stehenlassen signalisiert Geringschätzung und verstärkt das Gefühl des Angehörigen, ignoriert zu werden.",
      C: "Impulskontrolle gepaart mit Validierung der Angehörigen-Sorge deeskaliert die Situation sofort und löst das pragmatische Problem ohne Gesichtsverlust.",
      D: "Emotionales Zusammenbrechen vor Angehörigen untergräbt das Vertrauen in die Station und verlagert die emotionale Last auf den Hilfesuchenden.",
    },
    explanationsIncorrect: {
      A: "Provoziert eine schwere Eskalation und gefährdet das Ansehen der gesamten Abteilung.",
      B: "Wirkt arrogant und verletzend, wodurch die Wut des Angehörigen weiter angeheizt wird.",
      C: "", // Korrekte Antwort
      D: "Verletzt die professionelle Rollengrenze und belastet den Angehörigen mit eigenen Problemen.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Hinter Vorwürfen über Bagatellen wie kalten Tee verbirgt sich bei Angehörigen oft tiefe Angst um den geliebten Menschen. Indem der eigene Impuls gehemmt und das Fürsorgebedürfnis anerkannt wird, wandelt sich die Konfrontation in eine konstruktive Lösung.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Reagiert gereizt und treibt den Streit auf die Spitze.\n- **Option B:** Brüskiert den Angehörigen durch kalte Ablehnung.\n- **Option D:** Gibt die professionelle Haltung auf und verunsichert den Angehörigen.",
  },

  // ─── Q05 (Mittel · perspective_taking) ─── Key: B
  {
    id: "SEK-ER-GP3-005",
    legacyId: "er-sim3-q05",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 5,
    difficulty: "Mittel",
    strategyType: "perspective_taking",
    emotion: "Persönliche Kränkung und Enttäuschung über mangelnde Kooperation",
    scenario:
      "Im Mikroskopie-Praktikum weigert sich deine Laborpartnerin beharrlich, das gemeinsame Protokoll gegenzulesen, und reagiert auf deine Nachfragen kurz angebunden und gereizt. Du fühlst dich im Stich gelassen, persönlich gekränkt und bist versucht, das Protokoll alleine einzureichen und sie bei der Kursleitung anzuschwärzen.",
    goal: "Die Kränkung überwinden, die Motive der Partnerin verstehen und das gemeinsame Praktikumsprotokoll fristgerecht fertigstellen.",
    options: {
      A: "Ich reiche das Protokoll sofort ohne ihren Namen ein und schreibe der Kursleitung eine Beschwerde über ihre unkollegiale Arbeitsverweigerung.",
      B: "Ich trete innerlich einen Schritt zurück, frage mich, welche Belastungen oder Überforderungen hinter ihrem Verhalten stecken könnten, und spreche sie ruhig darauf an, ob sie Unterstützung benötigt oder wir die Aufgaben anders aufteilen sollten.",
      C: "Ich ignoriere sie völlig, erledige den gesamten Rest stillschweigend selbst und meide jeden weiteren Kontakt mit ihr.",
      D: "Ich konfrontiere sie vor der gesamten Praktikumsgruppe lautstark mit ihrer Unzuverlässigkeit, um sie zum Einlenken zu zwingen.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Ein einseitiger Ausschluss ohne vorheriges klärendes Gespräch führt zu Streitigkeiten vor der Kursleitung und zerstört die künftige Zusammenarbeit.",
      B: "Perspektivenübernahme entlastet von der Kränkung; das empathische Nachfragen deckt oft verborgene Überlastung auf und rettet das Projektziel.",
      C: "Stummes Schmollen schürt Bitterkeit und belohnt unkooperatives Verhalten durch stillschweigende Übernahme der Gesamtarbeit.",
      D: "Öffentliches Anprangern demütigt die Partnerin und verwandelt eine Kooperationskrise in eine feindselige Konfrontation.",
    },
    explanationsIncorrect: {
      A: "Eskaliert administrativ, bevor ein persönliches Klärungsgespräch stattgefunden hat.",
      B: "", // Korrekte Antwort
      C: "Ist passive Vermeidung, die eigene Überlastung provoziert und den Konflikt verschleppt.",
      D: "Zerstört die Vertrauensbasis durch aggressive öffentliche Demütigung.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Ungewohntes Blockadeverhalten ist im studentischen Alltag häufig Ausdruck akuter Überforderung oder privater Notlagen. Die kognitive Perspektivenübernahme schützt vor impulsiver Rache und eröffnet den Weg zu einer fairen, gemeinsamen Fertigstellung.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Zieht voreilig Dritte hinein und schließt die Partnerin unkollegial aus.\n- **Option C:** Führt zu eigener Überlastung und unausgesprochenem Groll.\n- **Option D:** Ist ein aggressiver Vergeltungsakt vor Zeugen.",
  },

  // ─── Q06 (Mittel · problem_focused_coping) ─── Key: A
  {
    id: "SEK-ER-GP3-006",
    legacyId: "er-sim3-q06",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 6,
    difficulty: "Mittel",
    strategyType: "problem_focused_coping",
    emotion: "Verzweiflung und Schuldgefühl nach schwerem Laborfehler",
    scenario:
      "Bei der Vorbereitung deiner medizinischen Diplomarbeit stellst du fest, dass eine Messreihe von 50 Laborproben durch einen Pipettierfehler kontaminiert wurde und nicht ausgewertet werden kann. Du fühlst tiefe Verzweiflung über den Verlust von drei Wochen Arbeit und Angst vor der Reaktion deines Betreuers.",
    goal: "Die Lähmung durch Verzweiflung überwinden, den Fehler transparent aufarbeiten und einen gangbaren Zeitplan zur Wiederholung erstellen.",
    options: {
      A: "Ich akzeptiere den Misserfolg als Teil des wissenschaftlichen Lernprozesses, dokumentiere die genaue Fehlerursache schriftlich, erarbeite einen optimierten Zeitplan für den Nachholversuch und stelle diesen meinem Betreuer proaktiv vor.",
      B: "Ich versuche, die fehlerhaften Werte rechnerisch so zu glätten und anzupassen, dass der Betreuer die Kontamination nicht bemerkt.",
      C: "Ich breche die Diplomarbeit sofort ab und suche mir ein komplett neues Institut, um der unangenehmen Situation mit dem Betreuer zu entgehen.",
      D: "Ich mache mir tagelang schwere Vorwürfe über meine angebliche Unfähigkeit und traue mich nicht mehr ins Labor.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Problemfokussierte Bewältigung wandelt die lähmende Verzweiflung in konkrete Handlungsschritte um; proaktive Transparenz stärkt das Vertrauen der Betreuungsperson.",
      B: "Fälschung oder Manipulation von Messdaten ist schweres wissenschaftliches Fehlverhalten und führt zur Aberkennung akademischer Leistungen.",
      C: "Flucht aus dem Projekt wegen eines Laborunfalls wirft die akademische Laufbahn um Monate zurück und löst kein grundlegendes Lernproblem.",
      D: "Unproduktive Selbstabwertung (Rumination) lähmt die Handlungsfähigkeit und verlängert den Zeitverlust unnötig.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Begeht vorsätzlichen Wissenschaftsbetrug und zerstört die akademische Integrität.",
      C: "Ist eine radikale Überreaktion, die immense zeitliche und persönliche Nachteile bringt.",
      D: "Vertieft die depressive Lähmung ohne jeden Beitrag zur Fehlerbehebung.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Fehler passieren in der experimentellen Forschung unvermeidlich. Der professionelle Umgang besteht darin, den Fehler lückenlos zu analysieren, ein Präventionsprotokoll zu schreiben und die Lösung vorzustellen, bevor man passiv zur Rede gestellt wird.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Verletzt fundamentale Regeln guter wissenschaftlicher Praxis.\n- **Option C:** Vernichtet monatelange Arbeit aus reiner Angst vor Kritik.\n- **Option D:** Ergeht sich in fruchtloser Selbstgeißelung.",
  },

  // ─── Q07 (Mittel · emotional_expression) ─── Key: D
  {
    id: "SEK-ER-GP3-007",
    legacyId: "er-sim3-q07",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 7,
    difficulty: "Mittel",
    strategyType: "emotional_expression",
    emotion: "Tiefe Trauer, Scham und Angst vor Stigmatisierung",
    scenario:
      "Während deines Pflegepraktikums verstirbt plötzlich eine Patientin, die du über Wochen täglich betreut und ins Herz geschlossen hast. Zurück im Stationszimmer spürst du eine bleierne Trauer und Tränen aufsteigen, schämst dich aber vor den abgeklärt wirkenden Kollegen und befürchtest, als „zu weich“ für den Arztberuf abgestempelt zu werden.",
    goal: "Das eigene Trauergefühl konstruktiv verarbeiten, ohne sich selbst abzuwerten oder die professionelle Rolle aufzugeben.",
    options: {
      A: "Ich unterdrücke die Tränen mit aller Kraft, rede mir ein, dass der Tod im Krankenhaus reine Routine ist, und zwinge mich zu zynischen Witzen.",
      B: "Ich verlasse sofort den Dienst, gehe nach Hause und ziehe ernsthaft in Betracht, das Medizinstudium aufzugeben.",
      C: "Ich ziehe mich in eine leere Patiententoilette zurück und verbleibe dort für Stunden in stummer Isolation.",
      D: "Ich gestehe mir ein, dass Betroffenheit über den Verlust eine gesunde menschliche Reaktion ist, ziehe mich kurz für einen Moment des Innehaltens zurück und suche danach das vertrauliche Gespräch mit einer erfahrenen Pflegefachkraft zur Reflexion.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Chronische emotionale Unterdrückung und Zynismus sind Hauptrisikofaktoren für emotionales Abstumpfen und Burnout in Heilberufen.",
      B: "Das Verlassen der Station und die Infragestellung des gesamten Berufs ist eine Überreaktion auf eine schmerzhafte, aber normale Berufserfahrung.",
      C: "Stundenlanges Isolieren blockiert die Stationsarbeit und verstärkt depressive Grübelschleifen.",
      D: "Das Akzeptieren der eigenen Trauer gepaart mit kollegialer Reflexion ermöglicht gesundes Coping und schützt die eigene Empathiefähigkeit.",
    },
    explanationsIncorrect: {
      A: "Fördert gefühllose Abstumpfung und zynische Bewältigungsmuster auf Kosten der seelischen Gesundheit.",
      B: "Wirft den Berufstraum impulsiv über Bord, statt professionelle Trauerkompetenz aufzubauen.",
      C: "Zementiert Scham und Hilflosigkeit in sozialer Isolation.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Menschliche Anteilnahme ist keine Schwäche, sondern die Basis ärztlicher Empathie. Die gesunde Verarbeitung verlangt, Trauer nicht wegzudrücken, sondern sie in einem geschützten Rahmen zuzulassen und durch kollegialen Austausch professionell einzuordnen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Verdrängt Schmerz durch Zynismus, was langfristig abstumpft.\n- **Option B:** Reagiert überidentifizierend mit vollständiger Berufsaufgabe.\n- **Option C:** Versteckt sich in passiver Lähmung.",
  },

  // ─── Q08 (Mittel · goal_preservation) ─── Key: C
  {
    id: "SEK-ER-GP3-008",
    legacyId: "er-sim3-q08",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 8,
    difficulty: "Mittel",
    strategyType: "goal_preservation",
    emotion: "Verunsicherung und aufkeimende Wut bei spöttischer Bemerkung",
    scenario:
      "Im Präpariersaal fordert dich der Prüfer auf, den Verlauf der Arteria meningea media an der Schädelbasis zu demonstrieren. Als du ansetzt, zittert deine Pinzette stark, und der Prüfer bemerkt spöttisch: „Na, wenn die Hände schon beim Präparieren so zittern, wird das wohl nichts mit der Chirurgie.“ Du spürst eine Welle von Wut und tiefer Verunsicherung.",
    goal: "Die persönliche Kränkung mental isolieren, die Konzentration auf die anatomische Struktur halten und die Demonstration fehlerfrei zu Ende führen.",
    options: {
      A: "Ich lege die Instrumente verärgert auf den Tisch und fordere den Prüfer auf, solche unfairen Kommentare zu unterlassen.",
      B: "Ich lasse mich von dem Kommentar verunsichern, ziehe mich hastig zurück und sage dem Prüfer, dass ich die Frage leider nicht beantworten kann.",
      C: "Ich stütze meine Handkante ruhig am Knochenrand ab, um das Zittern mechanisch zu stabilisieren, blende die spöttische Bemerkung innerlich als unerheblich aus und führe die Nadel ruhig an die gesuchte Arterie.",
      D: "Ich beginne eine hitzige Debatte darüber, dass Zittern bei Kälte im Präpariersaal eine normale physiologische Reaktion sei.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Konfrontation im Prüfungsgespräch sabotiert die Prüfungssituation und führt unweigerlich zu einer negativen Benotung.",
      B: "Das vorzeitige Aufgeben bestätigt das spöttische Vorurteil des Prüfers und verschenkt die Prüfungsleistung leichtfertig.",
      C: "Die pragmatische Handabstützung bricht den tremorverstärkenden Teufelskreis; das mentale Ausblenden sichert den Prüfungserfolg.",
      D: "Rechtfertigungen während der praktischen Prüfung wirken defensiv, kosten wertvolle Prüfungszeit und lenken vom anatomischen Nachweis ab.",
    },
    explanationsIncorrect: {
      A: "Eskaliert gegen den Prüfer und gefährdet das Bestehen der Testatsprüfung massiv.",
      B: "Kapituliert unnötig vor einer Stichelei und verschenkt verdiente Prüfungspunkte.",
      C: "", // Korrekte Antwort
      D: "Verzettelt sich in unwichtigen Diskussionen, statt die geforderte Präparation zu zeigen.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** In mündlich-praktischen Prüfungen ist Provokationstoleranz essenziell. Indem man das physiologische Zittern durch mechanisches Abstützen neutralisiert und den Spott ignoriert, beweist man genau jene Nervenstärke, die in der Chirurgie gefordert ist.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Zettelt einen Konflikt an, den man im Prüfungssetting nur verlieren kann.\n- **Option B:** Gibt die Demonstration kampflos auf.\n- **Option D:** Führt Scheindiskussionen statt Leistung zu zeigen.",
  },

  // ─── Q09 (Mittel · acceptance) ─── Key: A
  {
    id: "SEK-ER-GP3-009",
    legacyId: "er-sim3-q09",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 9,
    difficulty: "Mittel",
    strategyType: "acceptance",
    emotion: "Bitterkeit und Frustration über unverschuldete Absage",
    scenario:
      "Du erfährst, dass dein Antrag auf ein begehrtes Auslandsstipendium für dein PJ-Tertial an einer renommierten Uniklinik in den USA trotz hervorragender Noten im letzten Auswahlverfahren knapp abgelehnt wurde. Du fühlst tiefe Bitterkeit und Enttäuschung darüber, dass all deine monatelange Zusatzarbeit nun scheinbar vergeblich war.",
    goal: "Die unumstößliche Tatsache akzeptieren, Bitterkeit abbauen und eine attraktive Alternative für das Praktische Jahr planen.",
    options: {
      A: "Ich akzeptiere, dass das Auswahlverfahren abgeschlossen ist und externe Faktoren mitgespielt haben, trauere kurz über die verpasste Chance und fokussiere mich dann energisch auf erstklassige PJ-Alternativen im Inland.",
      B: "Ich schreibe einen wütenden Beschwerdebrief an die Stiftung, in dem ich den Gutachtern Inkompetenz und Willkür vorwerfe.",
      C: "Ich rede mir ein, dass Auslandserfahrung ohnehin völlig überbewertet ist und das Stipendium reine Zeitverschwendung gewesen wäre.",
      D: "Ich resigniere, gebe meine akademischen Ambitionen auf und melde mich für das erstbeste beliebige Lehrkrankenhaus an.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Radikale Akzeptanz unkontrollierbarer Tatsachen schützt vor chronischer Verbitterung; der proaktive Blick auf Alternativen sichert den Ausbildungsfortschritt.",
      B: "Aggressive Vorwürfe an Vergabegremien verbrennen wertvolle Brücken und ändern nichts am finalen Wahlergebnis.",
      C: "Nachträgliche Abwertung (sogenannte „saure Trauben“) ist eine unehrliche Abwehr, die keine echten Zukunftspläne stiftet.",
      D: "Trotzige Resignation bestraft nur einen selbst, indem man die eigene Karriere mutwillig schlechter stellt.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Wirkt destruktiv und querulatorisch, ohne jegliche Chance auf eine Stipendienvergabe.",
      C: "Schützt das Selbstwertgefühl durch Selbsttäuschung statt konstruktiver Neuorientierung.",
      D: "Gibt aus verletztem Stolz die eigenen Karriereziele kampflos auf.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Selektionsentscheidungen bei Stipendien unterliegen oft Zufällen und Kontingenten, die außerhalb der eigenen Kontrolle liegen. Das Akzeptieren der Realität beendet das fruchtlose Hadern und lenkt die Energie auf die Gestaltung neuer, gleichwertiger Chancen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Reagiert mit haltloser Bitterkeit gegen die Gutachter.\n- **Option C:** Redet sich die Chance schönrednerisch schlecht.\n- **Option D:** Zerstört aus Frust die eigenen Ausbildungsstandards.",
  },

  // ─── Q10 (Schwer · social_support) ─── Key: B
  {
    id: "SEK-ER-GP3-010",
    legacyId: "er-sim3-q10",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 10,
    difficulty: "Schwer",
    strategyType: "social_support",
    emotion: "Erschöpfung, Überlastung und falsche Scham vor Hilflosigkeit",
    scenario:
      "Du steckst mitten in den anstrengenden Vorbereitungen auf das Zweite Staatsexamen und pflegst gleichzeitig seit zwei Wochen einen schwer erkrankten Angehörigen. Du schläfst kaum noch, bist körperlich erschöpft, weinst grundlos und hast das Gefühl, dass dir alles über den Kopf wächst. Dennoch verbietest du dir jede Hilfe, weil du glaubst, alles alleine schaffen zu müssen.",
    goal: "Die eigene Belastungsgrenze anerkennen, falsche Scham ablegen und wirksame Unterstützung zur Entlastung mobilisieren.",
    options: {
      A: "Ich zwinge mich mit extremen Mengen Koffein wachzuhalten und halte an meinem Vorsatz fest, unter keinen Umständen Schwäche zu zeigen.",
      B: "Ich erkenne an, dass eine doppelte Maximalbelastung allein nicht bewältigbar ist, überwinde meine Scham und organisiere Unterstützung durch andere Familienmitglieder sowie eine professionelle Pflegeberatung.",
      C: "Ich sage die Examensprüfung um ein ganzes Jahr ab und ziehe mich von allen Freunden und Kommilitonen vollständig zurück.",
      D: "Ich klage täglich in sozialen Netzwerken über mein schweres Schicksal, ohne jedoch konkrete Entlastungsmaßnahmen im Alltag umzusetzen.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Substanzgestütztes Übergehen körperlicher Warnsignale führt unweigerlich zu einem schweren somatischen und psychischen Kollaps.",
      B: "Das Eingeständnis eigener Leistungsgrenzen und die Inanspruchnahme sozialer und professioneller Hilfe ist das reifste Coping bei Doppelbelastung.",
      C: "Der vollständige Rückzug und die jahrelange Prüfungsverzögerung verstärken Einsamkeit und das Gefühl des Scheiterns.",
      D: "Öffentliches Jammern ohne Handlungsbereitschaft bindet Aufmerksamkeit an das Leid, ändert aber nichts an der akuten Überlastung.",
    },
    explanationsIncorrect: {
      A: "Treibt den Körper in den Zusammenbruch und gefährdet Gesundheit und Examen gleichermaßen.",
      B: "", // Korrekte Antwort
      C: "Ist ein destruktiver Rückzug in die soziale Isolation mit drastischem Zeitverlust.",
      D: "Verharrt in passiver Hilflosigkeit, statt reale Hilfe zu organisieren.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Die Pflege von Angehörigen bei gleichzeitiger Examensvorbereitung übersteigt die Kapazität eines Einzelnen. Echte emotionale Reife zeigt sich darin, den Mythos der absoluten Autonomie zu verwerfen und Unterstützung als notwendige Fürsorge für alle Beteiligten zu aktivieren.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Zwingt den Körper mit Stimulanzien in den Zusammenbruch.\n- **Option C:** Wirft das gesamte Studium aus Scham zurück.\n- **Option D:** Ergeht sich in passivem Klagen ohne Lösungsansatz.",
  },

  // ─── Q11 (Schwer · impulse_control) ─── Key: D
  {
    id: "SEK-ER-GP3-011",
    legacyId: "er-sim3-q11",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 11,
    difficulty: "Schwer",
    strategyType: "impulse_control",
    emotion: "Panische Wut und akuter Alarm bei drohendem Behandlungsfehler",
    scenario:
      "Bei einer Reanimation im Schockraum gerät ein Kollege in Panik, verabreicht ein Medikament in falscher Verdünnung und reagiert auf deinen vorsichtigen Hinweis mit aggressiver Abwehr: „Misch dich nicht ein, ich weiß genau, was ich tue!“ In dir flammt panische Wut auf, da die Gesundheit des Patienten unmittelbar auf dem Spiel steht.",
    goal: "Die akute Wut dämpfen, die Patientensicherheit mit unmissverständlicher, aber professioneller Klarheit sofort herstellen.",
    options: {
      A: "Ich remple den Kollegen zur Seite, beschimpfe ihn lautstark als Gefahr für die Patienten und ziehe die Spritze gewaltsam aus seinen Händen.",
      B: "Ich halte mich zurück, sage nichts weiter und denke mir, dass er im Schadensfall rechtlich die alleinige Verantwortung tragen wird.",
      C: "Ich laufe aus dem Schockraum, um den Chefarzt auf Station zu suchen und den Vorfall zu melden.",
      D: "Ich fokussiere meinen Blick ruhig auf die Spritze, sage mit fester, klarer Stimme den Leitlinien-Befehl („Stopp, wir verabreichen dieses Medikament jetzt 1:10 verdünnt zur Patientensicherheit“) und halte den Schockraumleiter mit direktem Blickkontakt im Prozess.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Körperliche Handgreiflichkeiten im Schockraum gefährden das Reanimationsteam und führen zum völligen Kontrollverlust in einer vitalen Notlage.",
      B: "Passives Schweigen bei erkannter Patientengefahr verletzt die Garantenpflicht und gefährdet das Leben des reanimationspflichtigen Patienten.",
      C: "Das Verlassen des Raumes verschwendet überlebenswichtige Sekunden und lässt den Fehler ungehindert geschehen.",
      D: "Standardisierte, hierarchiefreie Sicherheitsansprache (Speaking Up / Closed-Loop) schützt den Patienten sofort, ohne das Team durch physische Kämpfe zu sprengen.",
    },
    explanationsIncorrect: {
      A: "Löst einen chaotischen Handgemenge-Konflikt am Patientenbett aus und gefährdet die Reanimation.",
      B: "Nimmt den Tod oder die Schädigung des Patienten aus Bequemlichkeit und Feigheit billigend in Kauf.",
      C: "Verlässt den Notfallort und verhindert die fatale Injektion in der entscheidenden Sekunde nicht.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** In der Notfallmedizin ist „Speaking Up“ der Goldstandard: Man kanalisiert die Wut in eine unmissverständliche, fachliche Intervention („Stopp!“ + Begründung + Handlungsanweisung), bindet den Teamleiter ein und verhindert den letalen Fehler, ohne eine Schlägerei anzuzetteln.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Führt zu physischer Eskalation im sensiblen Schockraum.\n- **Option B:** Begeht unterlassene Hilfeleistung aus Konfliktscheu.\n- **Option C:** Flieht vom Ort des Geschehens in kritischen Sekunden.",
  },

  // ─── Q12 (Schwer · emotional_reappraisal) ─── Key: C
  {
    id: "SEK-ER-GP3-012",
    legacyId: "er-sim3-q12",
    simulationId: "generalprobe-3",
    subtest: "ER",
    questionNumber: 12,
    difficulty: "Schwer",
    strategyType: "emotional_reappraisal",
    emotion: "Zermürbende Schuldgefühle und Selbstzweifel nach Komplikation",
    scenario:
      "Nach einem schwierigen operativen Eingriff, bei dem du als Assistenzarzt am Haken gehalten hast, kommt es postoperativ zu einer Blutungskomplikation beim Patienten. Obwohl die Chefärztin dir versichert, dass du anatomisch korrekt assistiert hast, leidest du unter zermürbenden Schuldgefühlen und dem Gedanken: „Ich hätte das verhindern müssen, ich bin eine Gefahr für meine Patienten.“",
    goal: "Das irrationale Schuldgefühl durch sachliche Reflexion überwinden und professionelle Selbstwirksamkeit zurückgewinnen.",
    options: {
      A: "Ich meide ab sofort den Operationssaal und bitte darum, nur noch für Stationsarbeit und Büroorganisation eingeteilt zu werden.",
      B: "Ich versuche, die quälenden Gedanken durch Ablenkung und Freizeitkonsum zu verdrängen, ohne den Fall noch einmal anzurühren.",
      C: "Ich differenziere rational zwischen persönlicher Verantwortung und dem inhärenten Komplikationsrisiko komplexer Eingriffe, rekapituliere den Verlauf anhand des OP-Berichts und nutze die Erfahrung zur Schärfung meiner Wachsamkeit für Frühsymptome.",
      D: "Ich gehe täglich zu dem Patienten ans Krankenbett und entschuldige mich wiederholt für mein vermeintliches Versagen, um mein Gewissen zu beruhigen.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Operative Vermeidungshaltung beendet die chirurgische Weiterbildung vorzeitig und festigt die Versagensangst als Trauma.",
      B: "Bloße Ablenkung verdrängt die Schuldgefühle nur oberflächlich; bei der nächsten Operation kehrt die Blockade verstärkt zurück.",
      C: "Kognitive Differenzierung trennt reale Sorgfaltspflicht von Schicksalshaftigkeit und verwandelt lähmende Selbstvorwürfe in klinische Kompetenz.",
      D: "Unbegründete Schuldgeständnisse verunsichern den Patienten zutiefst und schaffen unberechtigte juristische Haftungsrisiken für die Klinik.",
    },
    explanationsIncorrect: {
      A: "Zerstört die eigene fachliche Entwicklung aus Angst vor statistisch unvermeidbaren Komplikationen.",
      B: "Verschleppt das Problem durch Verdrängung und blockiert die künftige Leistungsfähigkeit.",
      C: "", // Korrekte Antwort
      D: "Belastet den rekonvaleszenten Patienten und erzeugt fatale haftungsrechtliche Verwirrung.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Die chirurgische Reifung erfordert das Verstehen, dass Komplikationen trotz fehlerfreier Technik auftreten können („Second Victim“-Phänomen). Indem man sachlich analysiert und lernt, statt sich in unberechtigten Selbstvorwürfen zu verzehren, gewinnt man Handlungsstärke zurück.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Ist eine Flucht, die die chirurgische Karriere beendet.\n- **Option B:** Verdrängt das Problem, statt es kognitiv zu verarbeiten.\n- **Option D:** Bürdet dem Patienten eigene Schuldgefühle auf und gefährdet die Klinik rechtlich.",
  },
];

export const GENERALPROBE_3_ER_SIMULATION_DATA: ErSimulationData = {
  simulationId: "generalprobe-3",
  simNumber: 3,
  title: "MedAT-H Generalprobe #3 — Emotionen regulieren",
  subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (1080s) · Situative Zielerreichung & Emotionsregulation",
  timeLimitSeconds: 18 * 60,
  questions: RAW_GENERALPROBE_3_ER_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #3 runtime and review engine
 */
export const GENERALPROBE_3_ER_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_ER_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = erQuestionToStoredQuestion(q, GENERALPROBE_3_ER_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-ER-GP3-${numStr}`,
      legacyId: `er-sim3-q${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "ER", "Emotionen regulieren", "Generalprobe #3", `SEK-ER-GP3-${numStr}`],
      erData: {
        ...q,
        id: `SEK-ER-GP3-${numStr}`,
        legacyId: `er-sim3-q${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
