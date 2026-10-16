/**
 * MedAT SEK — Emotionen erkennen (EE) — Generalprobe #3
 * Exactly 14 Original Scenarios, 70 Independent Emotion Classifications
 * 
 * IDs: SEK-EE-GP3-001 through SEK-EE-GP3-014 (aliased to ee-sim3-q01 .. q14)
 * 
 * Specifications:
 * - Exactly 14 Scenarios, 21 Minutes (1260 seconds, 90s / task)
 * - Authentic, high-validity German-language interpersonal & medical scenarios
 * - 5 distinct proposed emotions per situation (A–E)
 * - Independent binary classification: "Eher wahrscheinlich" (likely) vs. "Eher unwahrscheinlich" (unlikely)
 * - MedAT scoring rule: Exactly 1 point if all 5 emotions match the key, 0 points otherwise (strict all-or-nothing, no partial credit)
 * - Difficulty distribution: Exactly 4 Leicht, 7 Mittel, 3 Schwer
 * - Balanced judgment distribution: Exactly 35 likely (50.0%), 35 unlikely (50.0%) across all 70 judgments
 * - Exhaustive explanations & individual rationales for every single emotion (rationaleByEmotion)
 */

import type { StoredQuestion } from "../questions/types";
import type { EeQuestionData, EeSimulationData } from "../questions/ee/types";
import { eeQuestionToStoredQuestion } from "../questions/ee/types";

export const RAW_GENERALPROBE_3_EE_QUESTIONS: EeQuestionData[] = [
  // ─── Q01 (Leicht) ───
  {
    id: "SEK-EE-GP3-001",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 1,
    person: {
      name: "Niklas",
      context: "Doktorand der Biochemie beim Zwischengespräch",
    },
    scenario:
      "Niklas präsentiert seinem Betreuer die ersten Resultate seiner monatelangen Messreihe, von denen er selbst besorgt annahm, sie seien unzureichend und fehlerbehaftet. Der Betreuer ist jedoch voll des Lobes, hebt die außergewöhnliche methodische Präzision hervor und schlägt vor, die Daten direkt für eine internationale Fachpublikation vorzubereiten.",
    emotions: [
      { id: "A", label: "Freude", correctProbability: "likely" },
      { id: "B", label: "Erleichterung", correctProbability: "likely" },
      { id: "C", label: "Arroganz", correctProbability: "unlikely" },
      { id: "D", label: "Neid", correctProbability: "unlikely" },
      { id: "E", label: "Niedergeschlagenheit", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Das überraschend positive Feedback des Betreuers und das Angebot einer internationalen Publikation lösen nach monatelanger Anspannung unmittelbare Freude und tiefe Erleichterung aus. Arroganz ist nach Phasen quälender Selbstzweifel unplausibel, Neid entbehrt mangels Vergleichsperson jeder Grundlage, und Niedergeschlagenheit verkehrt die situative Stimmungslage ins Gegenteil.",
    rationaleByEmotion: {
      A: "Freude über das unerwartete Lob und die Publikationsaussicht ist unmittelbar plausibel.",
      B: "Erleichterung tritt ein, da die quälende Sorge vor mangelhaften Daten schlagartig abfällt.",
      C: "Arroganz ist unbegründet, da die überraschende Bestätigung nach Selbstzweifeln eher dankbar stimmt als überheblich.",
      D: "Neid ist unbegründet, da Niklas selbst die Anerkennung erhält und kein Konkurrent geschildert wird.",
      E: "Niedergeschlagenheit widerspricht dem herausragenden persönlichen Erfolg diametral.",
    },
  },

  // ─── Q02 (Leicht) ───
  {
    id: "SEK-EE-GP3-002",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 2,
    person: {
      name: "Sophia",
      context: "Erstsemestrige Medizinstudentin am Universitätscampus",
    },
    scenario:
      "Sophia ist für ihr Medizinstudium in eine fremde Großstadt gezogen, in der sie noch niemanden kennt. Am ersten Tag der Einführungswoche verliert sie in den weitläufigen, verwinkelten Gängen des Universitätsklinikums die Orientierung, verpasst den Beginn des Orientierungstutoriums und steht ratlos vor verschlossenen Hörsaaltüren, während ihr Handyakku leer ist.",
    emotions: [
      { id: "A", label: "Gelassenheit", correctProbability: "unlikely" },
      { id: "B", label: "Verunsicherung", correctProbability: "likely" },
      { id: "C", label: "Hilflosigkeit", correctProbability: "likely" },
      { id: "D", label: "Überlegenheit", correctProbability: "unlikely" },
      { id: "E", label: "Anspannung", correctProbability: "likely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Die Desorientierung am ersten Studientag in einer fremden Stadt ohne Kommunikationsmittel löst verständliche Verunsicherung, Hilflosigkeit und akute Anspannung aus. Gelassenheit widerspricht der stressbeladenen Notlage, während Überlegenheit in einer Phase des Verlorenseins völlig deplatziert ist.",
    rationaleByEmotion: {
      A: "Gelassenheit ist angesichts verschlossener Türen, verpasster Termine und leerem Akku unplausibel.",
      B: "Verunsicherung ist sehr wahrscheinlich, da sie neu in der Stadt ist und der Studienstart missglückt.",
      C: "Hilflosigkeit entsteht direkt aus der Unfähigkeit, Hilfe zu rufen oder den richtigen Ort zu finden.",
      D: "Überlegenheit entbehrt jeder situativen Grundlage; Sophia befindet sich in einer unterlegenen Stresslage.",
      E: "Anspannung resultiert aus dem akuten Zeitverlust und der Ungewissheit über das weitere Vorgehen.",
    },
  },

  // ─── Q03 (Leicht) ───
  {
    id: "SEK-EE-GP3-003",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 3,
    person: {
      name: "Fabian",
      context: "Leichtathlet und Medizinstudent",
    },
    scenario:
      "Fabian hat ein ganzes Jahr lang diszipliniert täglich vor den morgendlichen Vorlesungen trainiert, um sich für die Universitätsmeisterschaften im Zehnkampf zu qualifizieren. Im entscheidenden Qualifikationslauf verfehlt er die geforderte Normzeit um lediglich zwei Hundertstelsekunden, womit seine Teilnahme an den Meisterschaften endgültig verwehrt ist.",
    emotions: [
      { id: "A", label: "Enttäuschung", correctProbability: "likely" },
      { id: "B", label: "Niedergeschlagenheit", correctProbability: "likely" },
      { id: "C", label: "Schadenfreude", correctProbability: "unlikely" },
      { id: "D", label: "Frustration", correctProbability: "likely" },
      { id: "E", label: "Gleichgültigkeit", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Nach einem Jahr intensiven Trainings um nur zwei Hundertstelsekunden an der Qualifikationsnorm zu scheitern, führt unweigerlich zu tiefer Enttäuschung, Frustration und Niedergeschlagenheit. Schadenfreude und Gleichgültigkeit stehen in absolutem Widerspruch zu Fabians hohem persönlichem Engagement.",
    rationaleByEmotion: {
      A: "Enttäuschung über das knappe Verfehlen des Jahresziels ist unmittelbar nachvollziehbar.",
      B: "Niedergeschlagenheit ist wahrscheinlich, da der Traum von den Meisterschaften abrupt geplatzt ist.",
      C: "Schadenfreude ist unpassend, da Fabian selbst gescheitert ist und kein Missgeschick Dritter vorliegt.",
      D: "Frustration ist naheliegend, da der minimale Rückstand von zwei Hundertsteln besonders schmerzt.",
      E: "Gleichgültigkeit widerspricht dem monatelangen, harten täglichen Training vollkommen.",
    },
  },

  // ─── Q04 (Leicht) ───
  {
    id: "SEK-EE-GP3-004",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 4,
    person: {
      name: "Teresa",
      context: "Pflegefachkraft auf der onkologischen Station",
    },
    scenario:
      "Teresa betreut seit Monaten mit viel Hingabe schwer kranke Patienten. Bei der jährlichen Klinikversammlung wird sie ohne Vorwarnung auf die Bühne gerufen und erhält vor der gesamten Klinikleitung und den Kollegen den internen Fürsorgepreis, der auf Vorschlag dankbarer Angehöriger ehemaliger Patienten vergeben wurde.",
    emotions: [
      { id: "A", label: "Rührung", correctProbability: "likely" },
      { id: "B", label: "Freude", correctProbability: "likely" },
      { id: "C", label: "Arroganz", correctProbability: "unlikely" },
      { id: "D", label: "Verbitterung", correctProbability: "unlikely" },
      { id: "E", label: "Verlegenheit", correctProbability: "likely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Die unerwartete Ehrung vor der gesamten Klinik löst bei Teresa tiefe Rührung, aufrichtige Freude, aber auch eine spontane Verlegenheit durch das plötzliche Scheinwerferlicht aus. Arroganz und Verbitterung widersprechen dem Charakter einer warmherzigen Anerkennung vollkommen.",
    rationaleByEmotion: {
      A: "Rührung über die persönliche Nominierung durch dankbare Angehörige ist sehr wahrscheinlich.",
      B: "Freude über die offizielle Würdigung ihrer anstrengenden Pflegearbeit ist unmittelbar plausibel.",
      C: "Arroganz steht im scharfen Gegensatz zu Teresas hingebungsvollem und überraschtem Auftreten.",
      D: "Verbitterung ist abwegig, da ihr Respekt und Dankbarkeit entgegengebracht werden.",
      E: "Verlegenheit ist plausibel, da der überraschende Bühnenauftritt vor der gesamten Klinikleitung befangen macht.",
    },
  },

  // ─── Q05 (Mittel) ───
  {
    id: "SEK-EE-GP3-005",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 5,
    person: {
      name: "Moritz",
      context: "Tutor im physiologischen Praktikum",
    },
    scenario:
      "Moritz sendet an seine Praktikumsgruppe eine Nachricht mit Hinweisen zur Verbesserung ihrer Versuchsprotokolle. Ein Student interpretiert die sachlichen Formulierungen fälschlich als persönlichen Angriff und wirft Moritz in einer hitzigen E-Mail mit Weiterleitung an den Studiendekan schikanöses Verhalten vor. Moritz hatte die Hinweise rein unterstützend gemeint.",
    emotions: [
      { id: "A", label: "Bestürzung", correctProbability: "likely" },
      { id: "B", label: "Schadenfreude", correctProbability: "unlikely" },
      { id: "C", label: "Unbehagen", correctProbability: "likely" },
      { id: "D", label: "Gleichmut", correctProbability: "unlikely" },
      { id: "E", label: "Triumph", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die ungerechtfertigte Eskalation einer gut gemeinten Rückmeldung an die Fakultätsleitung löst bei Moritz Bestürzung und ernstes Unbehagen aus. Schadenfreude, Triumph oder unberührter Gleichmut verbieten sich angesichts der drohenden institutionellen Anschuldigung.",
    rationaleByEmotion: {
      A: "Bestürzung über die maßlose Fehlinterpretation und die Einschaltung des Dekans ist sehr wahrscheinlich.",
      B: "Schadenfreude ist unpassend, da Moritz selbst das Ziel eines gravierenden Vorwurfs ist.",
      C: "Unbehagen entsteht verständlicherweise durch die drohende offizielle Auseinandersetzung.",
      D: "Gleichmut ist unwahrscheinlich, da die Beschwerde seine Tutorentätigkeit und Reputation bedroht.",
      E: "Triumph entbehrt jeder Logik, da es sich um eine belastende Eskalation und keinen Sieg handelt.",
    },
  },

  // ─── Q06 (Mittel) ───
  {
    id: "SEK-EE-GP3-006",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 6,
    person: {
      name: "Amelie",
      context: "PJ-Studentin auf der chirurgischen Station",
    },
    scenario:
      "Amelies enge Studienfreundin, die zeitgleich mit ihr auf der Chirurgie eingeteilt ist, bricht nach einer Notfalloperation in der Umkleidekabine in Tränen aus, da sie von der Oberärztin wegen einer zögerlichen Assistenz scharf gemaßregelt wurde und nun verzweifelt an ihrer ärztlichen Eignung zweifelt. Amelie nimmt sie in den Arm und hört ihr aufmerksam zu.",
    emotions: [
      { id: "A", label: "Mitgefühl", correctProbability: "likely" },
      { id: "B", label: "Sorge", correctProbability: "likely" },
      { id: "C", label: "Selbstgefälligkeit", correctProbability: "unlikely" },
      { id: "D", label: "Neid", correctProbability: "unlikely" },
      { id: "E", label: "Teilnahmslosigkeit", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Das Trösten der verzweifelten Freundin ist von tiefem Mitgefühl und ehrlicher Sorge um deren Stabilität geprägt. Selbstgefälligkeit, Neid oder kalte Teilnahmslosigkeit sind mit der gelebten partnerschaftlichen Solidarität unvereinbar.",
    rationaleByEmotion: {
      A: "Mitgefühl ist evident, da Amelie den Schmerz und die Selbstzweifel der Freundin unmittelbar teilt.",
      B: "Sorge um die psychische Verfassung und die berufliche Zuversicht der Freundin ist hochgradig plausibel.",
      C: "Selbstgefälligkeit widerspricht der empathischen und uneigennützigen Zuwendung vollkommen.",
      D: "Neid ist abwegig, da die Freundin eine schmerzhafte Kränkung und keinen Erfolg erlebt.",
      E: "Teilnahmslosigkeit wird durch die körperliche und emotionale Unterstützung direkt widerlegt.",
    },
  },

  // ─── Q07 (Mittel) ───
  {
    id: "SEK-EE-GP3-007",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 7,
    person: {
      name: "Sebastian",
      context: "Assistenzarzt in der Notaufnahme",
    },
    scenario:
      "Sebastian übergibt nach einer anstrengenden Schicht einen Patienten stabil an die Bettenstation. Wenig später beschuldigt ihn die Stationsärztin am Telefon vor Zeugen lautstark, einen dringenden Laborbefund verschwiegen und damit den Patienten gefährdet zu haben. Sebastian kann anhand des elektronischen Zeitstempels im System sofort nachweisen, dass er den Befund ordnungsgemäß und rechtzeitig eingepflegt hatte.",
    emotions: [
      { id: "A", label: "Empörung", correctProbability: "likely" },
      { id: "B", label: "Verärgerung", correctProbability: "likely" },
      { id: "C", label: "Schuldgefühl", correctProbability: "unlikely" },
      { id: "D", label: "Scham", correctProbability: "unlikely" },
      { id: "E", label: "Dankbarkeit", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die falsche öffentliche Anschuldigung trotz lückenlos nachweisbarer Sorgfalt weckt bei Sebastian berechtigte Empörung und akute Verärgerung. Schuldgefühle oder Scham sind abwegig, da er sich keiner Verfehlung schuldig gemacht hat; Dankbarkeit entbehrt jeder Logik.",
    rationaleByEmotion: {
      A: "Empörung über den haltlosen und rufschädigenden Vorwurf vor Kollegen ist unmittelbar plausibel.",
      B: "Verärgerung über die aggressive und unkollegiale Art der Stationsärztin ist naheliegend.",
      C: "Schuldgefühl ist ausgeschlossen, da Sebastian den eindeutigen Beweis seiner korrekten Arbeit vorliegen hat.",
      D: "Scham setzt ein Fehlverhalten voraus; da Sebastian fehlerfrei gehandelt hat, empfindet er keine Scham.",
      E: "Dankbarkeit für eine unberechtigte Anschuldigung zu empfinden, entbehrt jeder psychologischen Realität.",
    },
  },

  // ─── Q08 (Mittel) ───
  {
    id: "SEK-EE-GP3-008",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 8,
    person: {
      name: "Johanna",
      context: "Mitglied einer studentischen Forschungsgruppe",
    },
    scenario:
      "Johannas Forschungsgruppe trifft sich zur Finalisierung eines Kongressbeitrags. Zwei Gruppenmitglieder beschließen hinter vorgehaltener Hand, eine dritte, zurückhaltende Kommilitonin von der Autorenliste zu streichen und sie über die Einreichung im Unklaren zu lassen, obwohl Johanna genau weiß, wie viele Nächte diese an der statistischen Auswertung gearbeitet hat.",
    emotions: [
      { id: "A", label: "Unbehagen", correctProbability: "likely" },
      { id: "B", label: "Entrüstung", correctProbability: "likely" },
      { id: "C", label: "Schadenfreude", correctProbability: "unlikely" },
      { id: "D", label: "Genugtuung", correctProbability: "unlikely" },
      { id: "E", label: "Gleichgültigkeit", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Das unfaire Ausbooten einer verdienten Kollegin ruft bei Johanna tiefes moralisches Unbehagen und Entrüstung hervor. Schadenfreude, Genugtuung oder Gleichgültigkeit widersprechen ihrem Gerechtigkeitssinn und ihrem Wissen um den wahren Arbeitsbeitrag.",
    rationaleByEmotion: {
      A: "Unbehagen über die unethische Absprache hinter dem Rücken der Kollegin ist sehr wahrscheinlich.",
      B: "Entrüstung über die Missachtung des enormen Arbeitsaufwands der Kommilitonin ist plausibel.",
      C: "Schadenfreude ist unpassend, da Johanna die Kollegin schätzt und kein Konkurrenzverhältnis besteht.",
      D: "Genugtuung ist abwegig, da kein gerechter Zustand hergestellt, sondern ein Unrecht begangen wird.",
      E: "Gleichgültigkeit widerspricht Johannas detailliertem Wissen und moralischer Betroffenheit.",
    },
  },

  // ─── Q09 (Mittel) ───
  {
    id: "SEK-EE-GP3-009",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 9,
    person: {
      name: "Philipp",
      context: "Leiter eines studentischen Kongress-Organisationsteams",
    },
    scenario:
      "Philipps Team steht zwei Tage vor der Eröffnung eines großen medizinischen Symposiums, bei dem noch zentrale logistische Fragen offen sind. Gleichzeitig erhält Philipp die Einladung zu einem kurzfristig angesetzten Auswahlgespräch für ein prestigeträchtiges Promotionsstipendium im Ausland, das exakt zeitgleich zur Kongresseröffnung stattfindet und seine persönliche Anwesenheit in einer anderen Stadt erzwingt.",
    emotions: [
      { id: "A", label: "Zerrissenheit", correctProbability: "likely" },
      { id: "B", label: "Anspannung", correctProbability: "likely" },
      { id: "C", label: "Sorglosigkeit", correctProbability: "unlikely" },
      { id: "D", label: "Belastung", correctProbability: "likely" },
      { id: "E", label: "Übermut", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die Kollision von Gruppenverantwortung beim Kongress und einmaliger persönlicher Karrierechance führt zu starker Zerrissenheit, psychischer Belastung und hoher Anspannung. Sorglosigkeit und Übermut sind angesichts des Dilemmas vollkommen realitätsfern.",
    rationaleByEmotion: {
      A: "Zerrissenheit zwischen der Loyalität zum Kongressteam und der eigenen Zukunftschance ist unausweichlich.",
      B: "Anspannung resultiert aus dem akuten Zeitdruck und der Notwendigkeit einer sofortigen Entscheidung.",
      C: "Sorglosigkeit ist bei zwei derart weitreichenden und kollidierenden Verpflichtungen unmöglich.",
      D: "Belastung entsteht durch den Druck, niemanden enttäuschen zu wollen und die eigene Karriere abzuwägen.",
      E: "Übermut verbietet sich, da Philipp vor einem ernsten, potenziell folgenschweren Konflikt steht.",
    },
  },

  // ─── Q10 (Mittel) ───
  {
    id: "SEK-EE-GP3-010",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 10,
    person: {
      name: "Marlene",
      context: "Famulantin auf der pädiatrischen Kardiologie",
    },
    scenario:
      "Marlene hat sich seit Wochen darauf gefreut, heute bei einer komplexen Katheterintervention am Kinderherzen direkt am Tisch zu assistieren. Unmittelbar vor Beginn wird der Eingriff wegen eines Notfalls auf die Folgewoche verschoben, in der Marlenes Famulatur bereits beendet ist. Stattdessen wird sie gebeten, den Vormittag im Archiv mit dem Einsortieren von Akten zu verbringen.",
    emotions: [
      { id: "A", label: "Enttäuschung", correctProbability: "likely" },
      { id: "B", label: "Frustration", correctProbability: "likely" },
      { id: "C", label: "Begeisterung", correctProbability: "unlikely" },
      { id: "D", label: "Schadenfreude", correctProbability: "unlikely" },
      { id: "E", label: "Hochstimmung", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Der plötzliche Verlust der ersehnten OP-Teilnahme und die Zuweisung banaler Archivarbeiten lösen Enttäuschung und Frustration aus. Begeisterung, Hochstimmung oder Schadenfreude sind in Anbetracht dieser Abstufung unvereinbar.",
    rationaleByEmotion: {
      A: "Enttäuschung darüber, die ersehnte Intervention vor dem Famulaturende nicht mehr zu erleben, ist sehr groß.",
      B: "Frustration über die ersatzweise Zuweisung monotoner Archivarbeiten ist naheliegend.",
      C: "Begeisterung für das Einsortieren alter Akten im Keller ist abwegig.",
      D: "Schadenfreude entbehrt jeder Grundlage, da Marlene selbst die Leidtragende der Verschiebung ist.",
      E: "Hochstimmung widerspricht dem jähen Dämpfer ihrer Vorfreude vollkommen.",
    },
  },

  // ─── Q11 (Mittel) ───
  {
    id: "SEK-EE-GP3-011",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 11,
    person: {
      name: "Kilian",
      context: "Schichtleitender Krankenpfleger auf der Stroke Unit",
    },
    scenario:
      "Kilian hat während eines schweren Unwetters die Schichtleitung auf der Stroke Unit inne, als zwei Notfallpatienten mit akutem ischämischem Schlaganfall gleichzeitig eingeliefert werden. Auf der Überwachungsstation ist jedoch nur noch ein einziges Bett frei. Kilian muss unter extremem Zeitdruck und drängenden Nachfragen der Notärzte entscheiden, wer das Monitorbett erhält und wer auf die Normalstation verlegt werden muss.",
    emotions: [
      { id: "A", label: "Anspannung", correctProbability: "likely" },
      { id: "B", label: "Sorge", correctProbability: "likely" },
      { id: "C", label: "Leichtsinn", correctProbability: "unlikely" },
      { id: "D", label: "Belastung", correctProbability: "likely" },
      { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die akute Triage zweier schwerstkranker Patienten bei Bettenmangel fordert Kilian unter extremer Anspannung, seelischer Belastung und aufrichtiger Sorge um beide Schicksale. Leichtsinn und Gleichmut stehen im direkten Widerspruch zu pflegerischer Pflichtethik.",
    rationaleByEmotion: {
      A: "Anspannung ist durch den akuten Zeitnotstand und die lebenswichtige Dringlichkeit unausweichlich.",
      B: "Sorge um den Patienten, der ohne Intensivüberwachung auskommen muss, ist ärztlich-pflegerisch geboten.",
      C: "Leichtsinn ist bei einer existentiellen Triage-Entscheidung ausgeschlossen.",
      D: "Belastung durch die Verantwortung über Leben und Gesundheit zweier Patienten wiegt extrem schwer.",
      E: "Gleichmut ist unpassend, da die Situation von hoher Dringlichkeit und Tragweite geprägt ist.",
    },
  },

  // ─── Q12 (Schwer) ───
  {
    id: "SEK-EE-GP3-012",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 12,
    person: {
      name: "Rebecca",
      context: "Assistenzärztin im 4. Weiterbildungsjahr",
    },
    scenario:
      "Rebecca erhält das prestigeträchtige Angebot, als Fellow an ein international führendes Krebsforschungszentrum in Boston zu wechseln, was ihren lang gehegten Lebenstraum erfüllen würde. Gleichzeitig erfährt sie, dass ihre alleinerziehende Mutter an einer rasch fortschreitenden neurodegenerativen Erkrankung leidet und im Alltag zunehmend auf Rebeccas direkte Unterstützung angewiesen sein wird.",
    emotions: [
      { id: "A", label: "Zerrissenheit", correctProbability: "likely" },
      { id: "B", label: "Beklemmung", correctProbability: "likely" },
      { id: "C", label: "Leichtigkeit", correctProbability: "unlikely" },
      { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      { id: "E", label: "Schadenfreude", correctProbability: "unlikely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Die Konfrontation des beruflichen Lebenstraums mit der schweren Erkrankung der Mutter stürzt Rebecca in eine fundamentale Zerrissenheit und tiefe Beklemmung. Leichtigkeit, Gleichgültigkeit oder Schadenfreude sind angesichts dieses existenziellen Loyalitätskonflikts psychologisch unmöglich.",
    rationaleByEmotion: {
      A: "Zerrissenheit zwischen der einmaligen Karrierechance und der familiären Pflicht ist der Kern dieses Dilemmas.",
      B: "Beklemmung entsteht durch die unausweichliche Schwere der mütterlichen Diagnose und die unlösbare Entscheidung.",
      C: "Leichtigkeit ist angesichts der existentiellen Tragweite beider Wege völlig ausgeschlossen.",
      D: "Gleichgültigkeit widerspricht Rebeccas tiefer Verbundenheit mit ihrer Mutter und ihren beruflichen Ambitionen.",
      E: "Schadenfreude entbehrt jeder Grundlage; das Schicksal der Mutter ist eine familiäre Tragödie.",
    },
  },

  // ─── Q13 (Schwer) ───
  {
    id: "SEK-EE-GP3-013",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 13,
    person: {
      name: "Vincent",
      context: "Wissenschaftlicher Mitarbeiter im Forschungslabor",
    },
    scenario:
      "Vincent teilt seiner langjährigen Laborpartnerin im Vertrauen ein innovatives Konzept und noch unpublizierte Pilotdaten für einen hoch dotierten Forschungspreis mit, an denen er monatelang allein getüftelt hat. Drei Wochen später entdeckt er im Rundschreiben der Fakultät, dass seine Kollegin exakt diesen Antrag wortgleich unter ihrem alleinigen Namen eingereicht und als ihre exklusive Idee deklariert hat.",
    emotions: [
      { id: "A", label: "Kränkung", correctProbability: "likely" },
      { id: "B", label: "Verbitterung", correctProbability: "likely" },
      { id: "C", label: "Empörung", correctProbability: "likely" },
      { id: "D", label: "Dankbarkeit", correctProbability: "unlikely" },
      { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Der skrupellose Ideenklau durch eine Vertrauensperson führt zu massiver Kränkung, tiefer Verbitterung und lautstarker Empörung. Dankbarkeit und gleichmütige Gelassenheit sind nach einem derartigen Verrat vollkommen ausgeschlossen.",
    rationaleByEmotion: {
      A: "Kränkung über den schweren Vertrauensbruch einer engen Kollegin ist psychologisch unausweichlich.",
      B: "Verbitterung über die Entwendung monatelanger Vorarbeit und den drohenden Reputationsverlust ist sehr plausibel.",
      C: "Empörung über das dreiste und unethische Plagiat ist die unmittelbare emotionale Reaktion.",
      D: "Dankbarkeit gegenüber der Plagiatorin zu empfinden, ist absurd.",
      E: "Gleichmut ist unpassend, da die eigene wissenschaftliche Existenz und Urheberschaft verletzt wurden.",
    },
  },

  // ─── Q14 (Schwer) ───
  {
    id: "SEK-EE-GP3-014",
    simulationId: "generalprobe-3",
    subtest: "EE",
    questionNumber: 14,
    person: {
      name: "Anja",
      context: "Oberärztin und Mutter zweier Schulkinder",
    },
    scenario:
      "Anja hat ihren Kindern fest versprochen, am heutigen Freitag pünktlich um 16 Uhr zu Hause zu sein, um den zehnten Geburtstag ihrer Tochter zu feiern. Um 15:45 Uhr wird ein schwer polytraumatisierter Patient nach einem Verkehrsunfall eingeliefert. Da der diensthabende Hintergrundarzt im Stau feststeckt und kein anderer Facharzt verfügbar ist, bittet der Chefarzt Anja eindringlich, die lebensrettende Not-Laparotomie sofort selbst zu leiten.",
    emotions: [
      { id: "A", label: "Zerrissenheit", correctProbability: "likely" },
      { id: "B", label: "Hilflosigkeit", correctProbability: "unlikely" },
      { id: "C", label: "Anspannung", correctProbability: "likely" },
      { id: "D", label: "Belastung", correctProbability: "likely" },
      { id: "E", label: "Überlegenheit", correctProbability: "unlikely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Der Zusammenprall des Versprechens an ihr Kind mit einer unaufschiebbaren lebensrettenden OP-Indikation stürzt Anja in quälende Zerrissenheit, enorme Anspannung und schwere emotionale Belastung. Hilflosigkeit ist bei einer handlungskompetenten Operateurin fehl am Platz; Überlegenheit verbietet sich im Angesicht menschlicher Not.",
    rationaleByEmotion: {
      A: "Zerrissenheit zwischen dem feierlichen Mutterversprechen und der ärztlichen Pflicht ist akut greifbar.",
      B: "Hilflosigkeit ist unzutreffend; Anja ist eine hochkompetente Operateurin, die sofort fachlich agiert.",
      C: "Anspannung resultiert aus dem akuten Notfalleingriff und dem drohenden häuslichen Konflikt.",
      D: "Belastung durch das Wissen, die Tochter am Geburtstag traurig zurückzulassen, wiegt schwer.",
      E: "Überlegenheit ist abwegig, da ein Schicksalsschlag und ein ethisches Dilemma vorliegen.",
    },
  },
];

export const GENERALPROBE_3_EE_SIMULATION_DATA: EeSimulationData = {
  simulationId: "generalprobe-3",
  simNumber: 3,
  title: "MedAT-H Generalprobe #3 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (1260s) · Situative Emotionsanalyse",
  timeLimitSeconds: 21 * 60,
  questions: RAW_GENERALPROBE_3_EE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #3 runtime and review engine
 */
export const GENERALPROBE_3_EE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_EE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = eeQuestionToStoredQuestion(q, GENERALPROBE_3_EE_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-EE-GP3-${numStr}`,
      legacyId: `ee-sim3-q${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "EE", "Emotionen erkennen", "Generalprobe #3", `SEK-EE-GP3-${numStr}`],
      eeData: {
        ...q,
        id: `SEK-EE-GP3-${numStr}`,
        legacyId: `ee-sim3-q${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
