/**
 * MedAT SEK — Emotionen regulieren (ER) — Generalprobe #1
 * Exactly 12 Questions · 18 Minutes Exam Time (1080 seconds, 90s / task)
 * 
 * IDs: SEK-ER-001 through SEK-ER-012 (aliased to legacy er-sim1-q01 .. q12)
 * 
 * Specifications:
 * - Exactly 12 Questions assessing situational emotion regulation under goal-directed constraints
 * - Authentic, high-validity German scenarios across medical training, exams, clinics, and academic life
 * - Explicit, clearly defined goal for each scenario
 * - Exactly 4 distinct alternative strategy options per question (A–D)
 * - Exactly one best strategy per question evaluated strictly against the stated goal
 * - Difficulty distribution: Exactly 3 Leicht (25.0%), 6 Mittel (50.0%), 3 Schwer (25.0%)
 * - Balanced answer key distribution: Exactly 3 A (25.0%), 3 B (25.0%), 3 C (25.0%), 3 D (25.0%)
 * - Structured distractor analysis: Dedicated rationales for every option (rationalesByOption) & explicit distractor explanations (explanationsIncorrect)
 */

import type { StoredQuestion } from "../questions/types";
import type { ErOptionKey, ErQuestionData, ErSimulationData } from "../questions/er/types";
import { erQuestionToStoredQuestion } from "../questions/er/types";

export const RAW_GENERALPROBE_1_ER_QUESTIONS: ErQuestionData[] = [
  // ─── Q01 (Leicht · pause_and_prioritize) ─── Key: B
  {
    id: "SEK-ER-001",
    legacyId: "er-sim1-q01",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 1,
    difficulty: "Leicht",
    strategyType: "pause_and_prioritize",
    emotion: "Ärger und akuter Zeitdruck",
    scenario:
      "Zwanzig Minuten vor Beginn einer wichtigen Universitätspräsentation teilt dir ein Kommilitone mit, dass drei deiner Folien erhebliche inhaltliche Fehler aufweisen. Du spürst sofortigen Ärger über die späte Rückmeldung und eine stark ansteigende innere Unruhe.",
    goal: "Die Präsentation in der verbleibenden Zeit sachlich und konzentriert vorbereiten.",
    options: {
      A: "Dem Kommilitonen verärgert vorhalten, warum er sich erst im letzten Moment meldet, um die Verantwortung für eventuelle Mängel im Vorfeld zuzuweisen.",
      B: "Einmal tief durchatmen, den Ärger über das Timing bewusst beiseitestellen und die zwei kritischsten Fehler auf den Folien zügig korrigieren.",
      C: "Die Rückmeldung vollständig ignorieren und den Vortrag unverändert halten, um die eigene Nervosität vor dem Auftritt nicht noch weiter zu steigern.",
      D: "Die Präsentation beim Dozenten kurzfristig absagen, da unter diesen emotionalen Bedingungen kein einwandfreier Vortrag mehr garantiert werden kann.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Ein affektiver Vorwurf bindet kognitive Ressourcen an einen zwischenmenschlichen Streit, statt die knappe Vorbereitungszeit auf die Folienkorrektur zu verwenden.",
      B: "Durch kurzes physiologisches Regulieren (Durchatmen) wird der Ärger gedämpft und die begrenzte Zeit pragmatisch genutzt, um die folgenschwersten Mängel zu beheben.",
      C: "Das Verdrängen der Kritik schützt zwar kurzfristig vor Aufregung, führt jedoch zu einem nachweislich fehlerhaften Vortrag und verfehlt das Qualitätsziel.",
      D: "Eine kurzfristige Absage stellt eine dysfunktionale Fluchtreaktion dar, die das Präsentationsziel vollständig aufgibt und akademische Nachteile nach sich zieht.",
    },
    explanationsIncorrect: {
      A: "Eskaliert den zwischenmenschlichen Konflikt und vergeudet die verbleibenden 20 Minuten mit fruchtlosen Schuldzuweisungen.",
      B: "", // Korrekte Antwort
      C: "Ignoriert sachliche Mängel aus Bequemlichkeit und gefährdet die wissenschaftliche Qualität des Vortrags.",
      D: "Bedeutet eine überreaktive Kapitulation und vereitelt die Zielerreichung vollkommen.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Unter akutem Zeitdruck ist die kognitive Entkopplung vom Ärger entscheidend. Ein tiefes Durchatmen reguliert die vegetative Erregung, sodass der Fokus unmittelbar auf die pragmatische Behebung der schwerwiegendsten Fehler gerichtet werden kann.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Verschwendet wertvolle Minuten im Affekt und eskaliert die Situation unnötig.\n- **Option C:** Ist passive Vermeidung, die gravierende Folienfehler im Vortrag belässt.\n- **Option D:** Ist eine destruktive Fluchtreaktion mit Zielaufgabe.",
  },

  // ─── Q02 (Leicht · constructive_communication) ─── Key: A
  {
    id: "SEK-ER-002",
    legacyId: "er-sim1-q02",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 2,
    difficulty: "Leicht",
    strategyType: "constructive_communication",
    emotion: "Kränkung und Vergeltungsimpuls",
    scenario:
      "In einem studentischen Projektseminar kritisiert ein Gruppenmitglied deinen Textentwurf vor versammelter Runde in scharfem, abwertendem Ton. Du fühlst dich bloßgestellt und merkst, wie in dir der Impuls aufsteigt, sofort lautstark zurückzuschlagen.",
    goal: "Einen konstruktiven Arbeitsmodus im Team sichern, ohne die persönliche Kränkung eskalieren zu lassen.",
    options: {
      A: "Den eigenen Redeimpuls kurz zurückhalten, die inhaltlichen Kritikpunkte sachlich von der Tonlage trennen und einen konkreten Vorschlag zur Textüberarbeitung machen.",
      B: "Die Kritik vor allen Anwesenden mit einer ironischen Bemerkung über die bisherigen Unzulänglichkeiten des Gruppenmitglieds kontern.",
      C: "Die Sitzung schweigend absitzen, sich innerlich aus dem Projekt zurückziehen und künftige Beiträge auf das absolute Minimum beschränken.",
      D: "Sofort die Seminarleitung hinzuziehen und verlangen, dass das Gruppenmitglied wegen unkollegialen Verhaltens offiziell gerügt wird.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Das bewusste Hemmen des Vergeltungsimpulses ermöglicht die Differenzierung zwischen Sachkritik und Tonfall, wodurch die Teamarbeit sachbezogen fortgeführt werden kann.",
      B: "Ein sarkastischer Gegenangriff befriedigt kurzfristig das Rachebedürfnis, entfacht jedoch einen offenen Machtkampf und vergiftet das Arbeitsklima.",
      C: "Innerer Rückzug stellt passive Verweigerung dar, die den Teamerfolg untergräbt und das Problem ungelöst im Raum stehen lässt.",
      D: "Die sofortige Einschaltung der Leitung wirkt hilflos und eskaliert einen Konflikt auf hierarchischer Ebene, bevor eine sachliche Klärung versucht wurde.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Provoziert einen destruktiven Schlagabtausch und zerstört die für das Projektseminar erforderliche Kooperation.",
      C: "Verhindert die aktive Mitarbeit und bestraft letztlich die gesamte Arbeitsgruppe einschließlich der eigenen Note.",
      D: "Delegiert die Konfliktlösung vorschnell nach oben und erschwert die zukünftige Zusammenarbeit im Team erheblich.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Die bewusste Trennung der Sachebene von der emotionalen Kränkung dämpft die affektive Eskalation. Indem ein konstruktiver Überarbeitungsvorschlag eingebracht wird, bleibt die Gruppe handlungsfähig und das gemeinsame Projektziel gewahrt.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Verwandelt eine Fachdiskussion in eine persönliche Fehde.\n- **Option C:** Ist passiv-aggressives Vermeidungsverhalten, das die Zielerreichung gefährdet.\n- **Option D:** Ist eine unverhältnismäßige Überreaktion im ersten Klärungsschritt.",
  },

  // ─── Q03 (Leicht · emotional_reappraisal) ─── Key: D
  {
    id: "SEK-ER-003",
    legacyId: "er-sim1-q03",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 3,
    difficulty: "Leicht",
    strategyType: "emotional_reappraisal",
    emotion: "Körperliche Stresssymptome und Leistungsangst",
    scenario:
      "Unmittelbar vor Beginn einer mehrstündigen Probeklausur unter realen Testbedingungen bemerkst du starkes Herzklopfen, feuchte Hände und den Gedanken, dass du dem Druck des Tests nicht gewachsen bist.",
    goal: "Die körperliche Anspannung regulieren und fokussiert mit der ersten Aufgabe beginnen.",
    options: {
      A: "Sich krampfhaft befehlen, absolut ruhig zu sein, und die Augen fest verschließen, bis das Herzklopfen vollständig verschwunden ist.",
      B: "Den Prüfungsraum verlassen und nach Hause gehen, um sich zu schonen und den Test an einem Tag mit besserer Tagesform nachzuholen.",
      C: "Andere Teilnehmende im Raum ansprechen, ob sie dieselben Symptome spüren, um sich durch gemeinsamen Austausch über Ängste zu beruhigen.",
      D: "Die körperliche Erregung als natürliche, mobilisierende Energie des Körpers für die bevorstehende Konzentration begreifen und mit der ersten Aufgabe starten.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Der Versuch, autonome physiologische Reaktionen krampfhaft zu unterdrücken, verstärkt durch den Rebound-Effekt den wahrgenommenen Stress und verzögert den Start.",
      B: "Die Flucht vor der Anspannung verhindert den Testdurchlauf und beraubt einen der Möglichkeit, Prüfungskompetenz unter Druck zu trainieren.",
      C: "Das Thematisieren von Angstsymptomen kurz vor Beginn stört die Konzentration im Raum und kann durch gegenseitige Ansteckung (Co-Rumination) die Panik schüren.",
      D: "Kognitive Neubewertung (Reappraisal) transformiert die Erregung von einer Bedrohung in eine funktionale Mobilisierung von Aufmerksamkeit und ermöglicht sofortiges Handeln.",
    },
    explanationsIncorrect: {
      A: "Emotionale Unterdrückung führt paradoxerweise zu höherem physiologischen Arousal und blockiert die mentale Handlungsfähigkeit.",
      B: "Kapituliert vor dem Stressor und verfehlt das Ziel, die Prüfungssimulation erfolgreich zu durchlaufen.",
      C: "Verstößt gegen die Prüfungsruhe und lenkt die Aufmerksamkeit weg von den Aufgaben hin zu gemeinsamen Sorgen.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Die kognitive Umdeutung physiologischer Erregungssymptome als adaptive Vorbereitung des Körpers auf Höchstleistung (Challenge State statt Threat State) senkt die subjektive Angst und kanalisiert die Energie direkt in die Aufgabenbearbeitung.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Führt zu dysfunktionaler Verkrampfung und verstärkt den Herzschlag.\n- **Option B:** Verhindert das Absolvieren des Tests durch vollständige Vermeidung.\n- **Option C:** Schaukelt die Nervosität im Prüfungsraum unnötig auf.",
  },

  // ─── Q04 (Mittel · problem_focused_coping) ─── Key: C
  {
    id: "SEK-ER-004",
    legacyId: "er-sim1-q04",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 4,
    difficulty: "Mittel",
    strategyType: "problem_focused_coping",
    emotion: "Frustration und Erschöpfung nach Stunden vergeblicher Arbeit",
    scenario:
      "Nach einem vierstündigen biochemischen Praktikumsversuch liefert deine Messreihe völlig unbrauchbare Werte. Alle anderen Gruppen haben bereits korrekte Ergebnisse und bauen ab. Du bist erschöpft und verspürst intensive Frustration über die verlorene Zeit.",
    goal: "Die Fehlerquelle methodisch erfassen und den Versuch zeitnah und korrekt abschließen.",
    options: {
      A: "Die Messwerte einer Nachbargruppe in das eigene Protokoll übernehmen, um sich die zeitraubende Fehlersuche und Wiederholung zu ersparen.",
      B: "Dem Laborassistenten vorwerfen, dass die Chemikalien oder Messgeräte defekt gewesen seien, um die Verantwortung von sich zu weisen.",
      C: "Fünf Minuten an die frische Luft gehen, um die akute Frustration abklingen zu lassen, und danach das Pipettierschema systematisch Schritt für Schritt rekapitulieren.",
      D: "Den Arbeitsplatz sofort aufräumen und beschließen, den gesamten Versuch erst im Nachholtermin am Semesterende nachzuholen.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Das Fälschen bzw. Plagiieren von Messwerten ist wissenschaftliches Fehlverhalten und sabotiert das eigene Methodenverständnis.",
      B: "Affektives Abwälzen der Schuld auf Material oder Personal schädigt das professionelle Verhältnis und klärt den methodischen Fehler nicht auf.",
      C: "Eine kurze räumliche Distanzierung baut die vegetative Frustration ab, sodass die anschließende kognitive Fehleranalyse konzentriert und lösungsorientiert gelingt.",
      D: "Das Verschieben auf das Semesterende verlagert das Problem in eine ohnehin dichte Prüfungsphase, statt die noch frischen Versuchsdetails sofort zu nutzen.",
    },
    explanationsIncorrect: {
      A: "Verstößt gegen wissenschaftliche Integrität und birgt das Risiko der Praktikumsdisqualifikation.",
      B: "Ist destruktive Externalisierung, die weder den Fehler identifiziert noch den Versuch abschließt.",
      C: "", // Korrekte Antwort
      D: "Bedeutet unnötigen Aufschub und erhöht den Termindruck in der späteren Klausurenzeit erheblich.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Nach vier Stunden Frustration verhindert mentale Erschöpfung eine rationale Problemlösung. Eine fünfminütige Pause schafft die nötige emotionale Distanz, um anschließend das Protokoll analytisch auf Pipettier- oder Berechnungsfehler zu überprüfen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Ist akademischer Betrug und verfehlt das Ausbildungsziel.\n- **Option B:** Vergiftet das Verhältnis zur Laborleitung ohne praktischen Nutzen.\n- **Option D:** Schiebt den Arbeitsaufwand lediglich in die Klausurenphase auf.",
  },

  // ─── Q05 (Mittel · impulse_control) ─── Key: B
  {
    id: "SEK-ER-005",
    legacyId: "er-sim1-q05",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 5,
    difficulty: "Mittel",
    strategyType: "impulse_control",
    emotion: "Scham, Demütigung und Verunsicherung",
    scenario:
      "Während der Morgenvisite auf der chirurgischen Station weist dich der Oberarzt vor Patientinnen und Pflegekräften in barschem Ton auf einen Formfehler in der Kurvendokumentation hin. Du fühlst brennende Scham und Verunsicherung.",
    goal: "Professionell handlungsfähig bleiben und den Eintrag vorschriftsmäßig korrigieren.",
    options: {
      A: "Sofort lautstark erklären, dass die Stationsärztin den Eintrag zuvor so vorgegeben habe, um die eigene Schuld vor den Anwesenden zu entkräften.",
      B: "Die Rüge ohne impulsive Rechtfertigung zur Kenntnis nehmen, die Visite aufmerksam begleiten und die Kurve direkt im Anschluss an die Visite vorschriftsmäßig korrigieren.",
      C: "Sich für den restlichen Tag unpässlich melden und die Station verlassen, um sich vor weiteren Bloßstellungen vor dem Team zu schützen.",
      D: "Den Oberarzt nach der Visite im Arztzimmer aufsuchen und ihm eröffnen, dass man eine solche Ansprache nicht dulde und die Famulatur andernfalls abbreche.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Eine defensive Rechtfertigung am Krankenbett stört den Visitenablauf, untergräbt das Patientenvertrauen und wirkt unprofessionell.",
      B: "Die bewusste Dämpfung des Schamaffekts sichert die Fortführung der Visite; die unverzügliche Fehlerbehebung stellt die klinische Sorgfalt unter Beweis.",
      C: "Die Flucht von der Station vertieft das Schamerleben, bricht den Ausbildungstag ab und signalisiert mangelnde professionelle Belastbarkeit.",
      D: "Eine affektive Drohung nach der Visite ist unverhältnismäßig, beschädigt die Ausbildungsperspektive nachhaltig und verfehlt die Fehlerkorrektur.",
    },
    explanationsIncorrect: {
      A: "Stört die Patientenversorgung und wirkt im klinischen Kontext unreif und unkollegial.",
      B: "", // Korrekte Antwort
      C: "Stellt eine dysfunktionale Vermeidung dar, die das Erlernen professioneller Haltung verhindert.",
      D: "Eskaliert die Situation durch Erpressung und gefährdet den erfolgreichen Abschluss der Famulatur.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Die Regulation von Scham im klinischen Umfeld verlangt Rollenbewusstsein. Indem der Affekt zurückgehalten und die Korrektur nach der Visite umgehend umgesetzt wird, demonstriert man Handlungskompetenz und Fehlerkultur ohne den Stationsbetrieb zu beeinträchtigen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Verunsichert Patienten und wirkt unprofessionell defensiv.\n- **Option C:** Ist Flucht vor Kritik und sabotiert das Ausbildungsziel.\n- **Option D:** Ist eine impulsive Selbstüberschätzung mit dauerhaftem Reputationsschaden.",
  },

  // ─── Q06 (Mittel · constructive_communication) ─── Key: A
  {
    id: "SEK-ER-006",
    legacyId: "er-sim1-q06",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 6,
    difficulty: "Mittel",
    strategyType: "constructive_communication",
    emotion: "Verärgerung über wiederholte Unzuverlässigkeit",
    scenario:
      "Deine Prüfungspartnerin hat zum wiederholten Mal kurzfristig ein vereinbartes Repetitorium abgesagt, an dem ihr ein schwieriges Themengebiet erarbeiten wolltet. Du fühlst dich im Stich gelassen und verspürst großen Ärger.",
    goal: "Den eigenen Lernfortschritt für heute sichern und für die Zukunft verbindliche Arbeitsregeln vereinbaren.",
    options: {
      A: "Den heutigen Lerntag umgehend eigenständig strukturieren und der Partnerin sachlich mitteilen, dass Termine künftig nur noch mit 24 Stunden Vorlauf verbindlich sind.",
      B: "Der Partnerin eine erzürnte Nachricht senden, in der man ihr fehlende Motivation vorwirft und die Zusammenarbeit sofort beendet.",
      C: "Aus Verärgerung den Lerntag ebenfalls streichen, um der Partnerin zu signalisieren, dass man sich nicht allein anstrengt.",
      D: "Beschwichtigend antworten, dass die Absage kein Problem sei, um jeglichen Konflikt zu vermeiden.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Die sofortige Umstellung auf Einzellernen rettet den Prüfungstag, während die sachliche Grenzziehung klare Rahmenbedingungen für künftige Treffen definiert.",
      B: "Ein impulsiver Abbruch aus Wut zerstört die Vorbereitungspartnerschaft vorzeitig und beraubt beide einer wertvollen Ressource für spätere Stoffgebiete.",
      C: "Aus Trotz den eigenen Lerntag zu opfern, schadet ausschließlich dem eigenen Wissensstand und stellt passiv-destruktives Handeln dar.",
      D: "Konfliktvermeidendes Beschwichtigen verharmlost das Problem und lädt zu wiederholter Unzuverlässigkeit auf Kosten der eigenen Zeit ein.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Bricht die Zusammenarbeit im Zorn ab und hinterlässt ein Trümmerfeld in der Prüfungsvorbereitung.",
      C: "Ist selbstschädigender Trotz, der den eigenen Lernplan torpediert.",
      D: "Vermeidet Grenzziehung und führt zwangsläufig zu erneutem Frust bei der nächsten Absage.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Die Strategie entkoppelt die unmittelbare Aufgabenbewältigung (heute eigenständig lernen) von der zwischenmenschlichen Klärung (Regel mit Vorlaufzeit etablieren). Sie sichert das Ziel ohne Affekthandlungen ab.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Beendet im Affekt eine potenziell nützliche Lernpartnerschaft.\n- **Option C:** Ist irrationaler Trotz auf Kosten des eigenen Prüfungserfolgs.\n- **Option D:** Zementiert unzuverlässiges Verhalten durch falsche Nachsicht.",
  },

  // ─── Q07 (Mittel · acceptance) ─── Key: C
  {
    id: "SEK-ER-007",
    legacyId: "er-sim1-q07",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 7,
    difficulty: "Mittel",
    strategyType: "acceptance",
    emotion: "Quälende Ungewissheit, post-exam anxiety und Grübelschleifen",
    scenario:
      "Du hast gestern eine entscheidende Modulprüfung abgelegt. Das Ergebnis wird erst in zwei Wochen bekanntgegeben. Du ertappst dich ständig dabei, frühere Klausurfragen im Kopf durchzugehen, mögliche Fehler panisch in Lehrbüchern nachzuschlagen und dir das Schlimmste auszumalen.",
    goal: "Das dysfunktionale Grübeln beenden und die freie Zeit zur mentalen Regeneration vor dem nächsten Studienblock nutzen.",
    options: {
      A: "Sämtliche erinnerte Fragen in einem Studierendenforum posten und mit anderen abgleichen, um eine statistische Bestehenswahrscheinlichkeit zu errechnen.",
      B: "Das Prüfungssekretariat per E-Mail kontaktieren, um eine vorzeitige Auskunft über den Korrekturstand zu erbitten.",
      C: "Akzeptieren, dass die Prüfung unwiderruflich vorbei ist und außerhalb der eigenen Kontrolle liegt, die Bücher wegräumen und geplanten Freizeitaktivitäten nachgehen.",
      D: "Aus Sorge vor einem Fehlversuch sofort mit dem Lernen für den Wiederholungstermin im nächsten Semester beginnen.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Das permanente Vergleichen in Online-Foren befeuert die Grübelschleife (Rumination), schürt selektive Fehlersorgen und verhindert jede Entspannung.",
      B: "Das Drängen im Sekretariat zeigt mangelnde Impulskontrolle, ändert die Korrekturzeit nicht und hinterlässt einen unprofessionellen Eindruck.",
      C: "Die radikale Akzeptanz des Unabänderlichen trennt den Einflussbereich von unkontrollierbaren Variablen; das Wegräumen der Unterlagen ermöglicht Erholung.",
      D: "Ein vorzeitiger Neustart ohne Gewissheit basiert auf Katastrophisieren und raubt die dringend benötigte Regenerationsphase vor dem nächsten Semester.",
    },
    explanationsIncorrect: {
      A: "Vertieft die kognitive Fixierung auf hypothetische Fehler und verstärkt den Distress.",
      B: "Ist wirkungsloser Aktionismus, der die Ungeduld nicht heilt und bürokratische Abläufe ignoriert.",
      C: "", // Korrekte Antwort
      D: "Erschöpft die mentalen Kraftreserven durch unbegründetes Paniklernen vor Bekanntgabe der Noten.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Das Akzeptieren unbeeinflussbarer Gegebenheiten ist der wirksamste Schutz gegen post-examinatorische Rumination. Durch physisches Distanzieren von den Lernmaterialien und Hinwendung zu Hobbys wird das Ziel der Erholung erreicht.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Verstärkt die Grübelschleife durch ungesunden sozialen Vergleich.\n- **Option B:** Versucht eine Kontrollillusion aufrechtzuerhalten.\n- **Option D:** Führt zu Burnout durch voreiliges, unbegründetes Paniklernen.",
  },

  // ─── Q08 (Mittel · goal_preservation) ─── Key: D
  {
    id: "SEK-ER-008",
    legacyId: "er-sim1-q08",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 8,
    difficulty: "Mittel",
    strategyType: "goal_preservation",
    emotion: "Überlastung, Ärger und Groll über ungleiche Lastenverteilung",
    scenario:
      "Für ein medizinisches Seminar muss bis morgen früh ein wissenschaftliches Poster eingereicht werden. Dein Teampartner liefert seinen Abschnitt kurz vor Fristende nur rudimentär ab und reagiert nicht mehr auf Anrufe. Du empfindest massiven Groll über die unfaire Arbeitslast.",
    goal: "Das Poster fristgerecht und in solider Qualität einreichen, ohne die eigene Gesundheit durch eine panische Nachtschicht zu gefährden.",
    options: {
      A: "Aus Protest nur den eigenen fertigen Teil einsenden, damit der Dozent sieht, wer seine Pflichten versäumt hat.",
      B: "Den fehlerhaften Part des Partners löschen und bis zum Morgengrauen ein perfektes neues Layout erarbeiten, um den eigenen Perfektionsanspruch zu beweisen.",
      C: "Eine Beschwerde über den Partner im Chat des gesamten Seminars teilen, um sich öffentlich Gehör und Entlastung zu verschaffen.",
      D: "Den Groll vorübergehend zurückstellen, den fehlenden Abschnitt pragmatisch auf ein solides Grundniveau bringen und die ungleiche Arbeitsaufteilung nach der Abgabe mit dem Dozenten besprechen.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Das unvollständige Einreichen riskiert das Durchfallen beider Studierender und verfehlt das formale Abgabeziel.",
      B: "Ein nächtlicher Perfektionismusakt aus gekränktem Stolz führt zu massiver Erschöpfung und gefährdet die Leistungsfähigkeit am Folgetag.",
      C: "Öffentliches Anschwärzen im Seminar-Chat ist unprofessionell, beschädigt das persönliche Ansehen und löst das drängende Fristproblem keineswegs.",
      D: "Pragmatische Fehlerbehebung sichert die fristgerechte Abgabe bei vertretbarem Zeitaufwand; die Klärung der Arbeitsverteilung wird sachlich auf die Zeit nach der Abgabe vertagt.",
    },
    explanationsIncorrect: {
      A: "Opfert die Prüfungsleistung für einen demonstrativen Protestakt mit hohem Durchfallrisiko.",
      B: "Verbrennt die eigenen Kräfte in einer nächtlichen Überarbeitung aus gekränkter Eitelkeit.",
      C: "Ist ein unbedachter Affektausbruch im öffentlichen Raum ohne Beitrag zur Lösung.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Die Fristwahrung besitzt oberste Priorität. Indem man den fehlenden Teil pragmatisch auf ein passables Niveau anhebt, wird die Note gesichert, ohne sich gesundheitlich aufzureiben. Die Aufarbeitung der Unfairness folgt wohlüberlegt im Nachgang.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Gefährdet das Bestehen durch eine unvollständige Einreichung.\n- **Option B:** Führt zu selbstschädigendem Raubbau an der eigenen Gesundheit.\n- **Option C:** Diskreditiert einen selbst vor dem gesamten Jahrgang.",
  },

  // ─── Q09 (Schwer · pause_and_prioritize) ─── Key: D
  {
    id: "SEK-ER-009",
    legacyId: "er-sim1-q09",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 9,
    difficulty: "Schwer",
    strategyType: "pause_and_prioritize",
    emotion: "Plötzlicher Blackout, Panik und Schockstarre",
    scenario:
      "In einer mündlichen Prüfung stellt der Prüfer eine unerwartet detaillierte Detailfrage zur Innervation eines Organs. Dir fällt der Fachbegriff nicht ein; dein Kopf fühlt sich leer an und der Prüfer blickt dich schweigend an.",
    goal: "Die akute Panikblockade überwinden und dem Prüfer strukturiert dein vorhandenes Faktenwissen demonstrieren.",
    options: {
      A: "Den erstbesten anatomischen Begriff raten, um eine peinliche Stille zu vermeiden.",
      B: "Den Prüfer darauf hinweisen, dass diese Detailtiefe unfair sei, und um eine andere Frage bitten.",
      C: "Schweigend zu Boden blicken, bis der Prüfer von sich aus weiterfragt, um keine falschen Aussagen zu tätigen.",
      D: "Ruhig um einen kurzen Moment zum Nachdenken bitten, tief ausatmen und den Nervenverlauf anhand der anatomischen Leitstrukturen schrittweise herleiten.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Impulsives Raten signalisiert mangelnde Fachkompetenz und erhöht das Risiko, grob falsche Fakten zu äußern.",
      B: "Die Kritik an der Prüfungsfrage wirkt defensiv, provokant und ist im asymmetrischen Prüfungskontext taktisch verheerend.",
      C: "Passives Schweigen wird von Prüfenden meist als vollständiges Nichtwissen interpretiert und verstärkt die mentale Lähmung.",
      D: "Metakommunikatives Erbitten von Bedenkzeit bricht den Zeitdruck, das Ausatmen beruhigt das Nervensystem, und die strukturierte Herleitung demonstriert methodisches Verständnis.",
    },
    explanationsIncorrect: {
      A: "Erzeugt den Eindruck von Ratlosigkeit und vermittelt fachliche Unsicherheit.",
      B: "Konfrontiert den Prüfer auf unkluge Weise und verschlechtert die Prüfungsatmosphäre massiv.",
      C: "Manifestiert die Blockade und überlässt die Beurteilung dem schlechtesten Eindruck.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Die aktive Bitte um einen Denksekunde stoppt die Schockstarre und nimmt den sozialen Druck. Die physiologische Beruhigung ermöglicht den Zugriff auf das Arbeitsgedächtnis, sodass über Nachbarstrukturen das Wissen logisch rekonstruiert werden kann.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Schadet der Glaubwürdigkeit durch willkürliches Raten.\n- **Option B:** Wirkt trotzig und greift die Prüfungskompetenz des Dozenten an.\n- **Option C:** Zementiert die Hilflosigkeit und signalisiert Inkompetenz.",
  },

  // ─── Q10 (Mittel · emotional_reappraisal) ─── Key: B
  {
    id: "SEK-ER-010",
    legacyId: "er-sim1-q10",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 10,
    difficulty: "Mittel",
    strategyType: "emotional_reappraisal",
    emotion: "Fassungslose Empörung und Wut über unbegründeten Vorwurf",
    scenario:
      "In einer Vollversammlung unterstellt dir ein Mitglied öffentlich, du hättest bei der Organisation einer Großveranstaltung Budgetmittel eigenmächtig und intransparent eingesetzt. Du bist über die haltlose Unterstellung fassungslos und empört.",
    goal: "Die Unterstellung vor der Versammlung sachlich und überzeugend entkräften, ohne selbst die Beherrschung zu verlieren.",
    options: {
      A: "Dem Redner lautstark ins Wort fallen und eine sofortige Entschuldigung für diese unverschämte Verleumdung einfordern.",
      B: "Die Empörung als Energie für präzise Sachlichkeit nutzen, ruhig bleiben und den geprüften Kassenbericht mit den Quittungen vorlegen.",
      C: "Den Saal wortlos und demonstrativ verlassen, um zu zeigen, dass man sich auf ein solches Niveau nicht herablässt.",
      D: "Das anklagende Mitglied vor allen Anwesenden ebenfalls mit fragwürdigen Aktivitäten der Vergangenheit konfrontieren.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Ein wütender Zwischenruf wirkt unkontrolliert und kann im Plenum fälschlicherweise als Anzeichen von Getroffenheit oder Schuld gedeutet werden.",
      B: "Die Umwandlung der Wut in sachliche Klarheit erlaubt eine souveräne Verteidigung; belegbare Finanzdaten entkräften die Anschuldigung vor Zeugen unwiderruflich.",
      C: "Ein demonstrativer Auszug wirkt wie eine Flucht, überlässt dem Gerücht die Bühne und schwächt die eigene Position entscheidend.",
      D: "Vergeltungsangriffe („Whataboutism“) lenken vom Kern ab, wirken unsachlich und ziehen das Verfahren auf ein Schlammschlacht-Niveau herunter.",
    },
    explanationsIncorrect: {
      A: "Erweckt den Verdacht defensiver Panik und schadet der eigenen Glaubwürdigkeit im Gremium.",
      B: "", // Korrekte Antwort
      C: "Überlässt den Falschbehauptungen kampflos das Feld und hinterlässt Zweifel im Raum.",
      D: "Ist ein Ausweichmanöver, das Zweifel an der eigenen Rechtschaffenheit nährt.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Die kognitive Neubewertung wandelt den Kränkungsimpuls in konstruktive Entschlossenheit um. Die Vorlage harter, überprüfbarer Fakten (Kassenbericht) demonstriert vollkommene Transparenz und entkräftet die Anschuldigung rational.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Wirkt emotional überfordert und lässt Zweifel an der Souveränität aufkommen.\n- **Option C:** Wirkt wie ein Schuldeingeständnis durch Flucht.\n- **Option D:** Eröffnet eine Schlammschlacht und lenkt von der eigenen Entlastung ab.",
  },

  // ─── Q11 (Schwer · perspective_taking) ─── Key: C
  {
    id: "SEK-ER-011",
    legacyId: "er-sim1-q11",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 11,
    difficulty: "Schwer",
    strategyType: "perspective_taking",
    emotion: "Brennender Neid, Minderwertigkeitsgefühle und Groll",
    scenario:
      "Nach einer harten Klausur erfährst du, dass dein enger Freund mit scheinbar minimalem Lernaufwand eine Eins erzielt hat, während du trotz wochenlanger Vorbereitung nur knapp bestanden hast. Du empfindest brennenden Neid und eigene Unzulänglichkeit.",
    goal: "Das quälende Neidgefühl regulieren, die wertvolle Freundschaft bewahren und die eigene Lernstrategie realistisch hinterfragen.",
    options: {
      A: "Den Kontakt zum Freund für die nächsten Wochen meiden, um nicht ständig an das eigene schlechtere Ergebnis erinnert zu werden.",
      B: "Vor gemeinsamen Freunden andeuten, dass der Freund unverschämtes Prüfungsglück hatte oder Altklausuren kannte.",
      C: "Den Neid als verständliche emotionale Reaktion akzeptieren, dem Freund ehrlich gratulieren und ihn im vertraulichen Gespräch fragen, wie er die Lerninhalte strukturiert hat.",
      D: "Sich einreden, dass Klausurnoten in der Praxis ohnehin bedeutungslos seien und Fleiß mehr wiege als theoretische Begabung.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Rückzug schützt zwar kurz vor schmerzhaftem Vergleich, beschädigt jedoch die Freundschaft und isoliert einen emotional.",
      B: "Den Freund hinter seinem Rücken abzuwerten ist Ausdruck destruktiver Missgunst, vergiftet den Freundeskreis und behindert die eigene Weiterentwicklung.",
      C: "Die Akzeptanz der Emotion nimmt ihr das Giftige; der Perspektivenwechsel ehrt die Freundschaft und transformiert Neid in adaptive Lernneugier.",
      D: "Kognitive Abwertung der Prüfungsrelevanz ist eine bequeme Scheinlösung (Rationalisierung), die verhindert, dass ineffektive Lernmethoden korrigiert werden.",
    },
    explanationsIncorrect: {
      A: "Zerstört die Nähe in der Freundschaft durch Vermeidung und belässt die eigenen Zweifel ungelöst.",
      B: "Ist ein schädlicher Versuch der Schmerzreduktion durch Diskreditierung des Erfolgs anderer.",
      C: "", // Korrekte Antwort
      D: "Verharmlost die eigene Lernschwäche durch Selbsttäuschung und blockiert Fortschritt.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Neid ist eine schmerzhafte, aber universelle Emotion. Durch Akzeptanz verliert sie ihre zerstörerische Wucht. Die aufrichtige Gratulation schützt die Bindung, und das gezielte Nachfragen nach der Lernstrategie nutzt den Erfolg des Freundes als Lernchance.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Führt zu Entfremdung und verfestigt das Gefühl von Minderwertigkeit.\n- **Option B:** Zerstört Vertrauen durch bösartige Verleumdung im Freundeskreis.\n- **Option D:** Verhindert durch Scheintrost die notwendige Optimierung der eigenen Lerntechnik.",
  },

  // ─── Q12 (Schwer · goal_preservation) ─── Key: A
  {
    id: "SEK-ER-012",
    legacyId: "er-sim1-q12",
    simulationId: "generalprobe-1",
    subtest: "ER",
    questionNumber: 12,
    difficulty: "Schwer",
    strategyType: "goal_preservation",
    emotion: "Akute Überwältigung, Handlungsunfähigkeit und Panik",
    scenario:
      "Innerhalb der nächsten 48 Stunden stehen die Abgabe eines Praktikumsberichts, eine mündliche Testatprüfung und der Beginn einer Pflichtfamulatur an. Angesichts der Aufgabenmenge fühlst du dich völlig überfordert und verharrst gelähmt am Schreibtisch.",
    goal: "Die lähmende Panik überwinden und strukturiert in einen fokussierten, schrittweisen Arbeitsmodus finden.",
    options: {
      A: "Die verbleibende Zeit in überschaubare 45-Minuten-Intervalle aufteilen, mit dem einfachsten Entwurfsteil des Berichts beginnen und den Gesamtberg vorerst ausblenden.",
      B: "Die Pflichtfamulatur und das Testat sofort absagen, um den gesamten Fokus ohne Zeitdruck auf den Bericht zu legen.",
      C: "Den Nachmittag mit Entspannungsübungen und Serien verbringen, um erst wieder innere Ruhe zu finden, bevor man lernt.",
      D: "Sich in Gedanken immer wieder vorhalten, wie fahrlässig die eigene Zeitplanung war, um sich durch Schuldgefühle zum Arbeiten anzutreiben.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Das Aufteilen in machbare Sequenzen (Chunking) reduziert die kognitive Bedrohlichkeit; der Beginn mit einer leichten Aufgabe stellt sofortige Selbstwirksamkeit her.",
      B: "Eine panische Zielstreichung zieht gravierende Verzögerungen im Studienablauf nach sich und löst die kurzfristige Blockade nicht konstruktiv.",
      C: "Vermeidungsverhalten unter dem Deckmantel von Entspannung verschärft die verbleibende Zeitnot drastisch und vergrößert die Panik am Abend.",
      D: "Selbstbeschuldigungen erzeugen zusätzlichen Distress, der das sympathische Nervensystem überreizt und die kognitive Erstarrung neurobiologisch vertieft.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Bedeutet eine überstürzte Kapitulation vor organisatorischen Verpflichtungen mit gravierenden Folgen.",
      C: "Ist Prokrastination, die den Druck vor der Frist exponentiell ansteigen lässt.",
      D: "Erhöht die Scham und blockiert die exekutiven Funktionen des Gehirns noch weiter.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Bei akuter Überwältigung bricht das exekutive Kontrollsystem unter der Last unstrukturierter Reize zusammen. Die Methode des 'Slicing' (kleine, überschaubare Intervalle) und der Fokus auf einen machbaren Einstieg durchbrechen die Lähmung effektiv.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Verursacht erhebliche akademische Nachteile durch unnötiges Schieben von Prüfungen.\n- **Option C:** Ist trügerische Flucht, die den Termindruck weiter eskaliert.\n- **Option D:** Vertieft die Erstarrung durch destruktive Selbstabwertung.",
  },
];

export const GENERALPROBE_1_ER_SIMULATION_DATA: ErSimulationData = {
  simulationId: "generalprobe-1",
  simNumber: 1,
  title: "MedAT-H Generalprobe #1 — Emotionen regulieren",
  subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (1080s) · Situative Zielerreichung & Emotionsregulation",
  timeLimitSeconds: 18 * 60,
  questions: RAW_GENERALPROBE_1_ER_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #1 runtime and review engine
 */
export const GENERALPROBE_1_ER_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_ER_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = erQuestionToStoredQuestion(q, GENERALPROBE_1_ER_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-ER-${numStr}`,
      legacyId: `er-sim1-q${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "ER", "Emotionen regulieren", "Generalprobe #1", `SEK-ER-${numStr}`],
      erData: {
        ...q,
        id: `SEK-ER-${numStr}`,
        legacyId: `er-sim1-q${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
