/**
 * MedAT SEK — Emotionen erkennen (EE) — Generalprobe #2
 * Exactly 14 Situations, 70 Independent Emotion Classifications
 * 
 * IDs: SEK-EE-GP2-001 through SEK-EE-GP2-014 (aliased to ee-sim2-q01 .. q14)
 * 
 * Specifications:
 * - Exactly 14 Scenarios, 21 Minutes (1260 seconds, 90s / task)
 * - Authentic, high-validity German-language interpersonal scenarios
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

export const RAW_GENERALPROBE_2_EE_QUESTIONS: EeQuestionData[] = [
  // ─── Q01 (Leicht) ───
  {
    id: "SEK-EE-GP2-001",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 1,
    person: {
      name: "Julian",
      context: "Medizinstudent im 2. Studienjahr",
    },
    scenario:
      "Julian bewirbt sich seit Monaten um einen der begehrten Plätze für eine Sommerfamulatur auf der kardiologischen Intensivstation, für die es dreimal mehr Bewerber als freie Plätze gibt. Bei der Zuteilung erfährt er, dass seine Bewerbung erfolgreich war und er ab Juli dort starten kann.",
    emotions: [
      { id: "A", label: "Freude", correctProbability: "likely" },
      { id: "B", label: "Erleichterung", correctProbability: "likely" },
      { id: "C", label: "Verbitterung", correctProbability: "unlikely" },
      { id: "D", label: "Überlegenheit", correctProbability: "unlikely" },
      { id: "E", label: "Zuversicht", correctProbability: "likely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Die erfolgreiche Zusage für den heiß begehrten Famulaturplatz nach Monaten des Bangens löst unmittelbar Freude und Erleichterung aus; Zuversicht hinsichtlich der anstehenden klinischen Ausbildung ist naheliegend. Verbitterung setzt Enttäuschung oder Ungerechtigkeit voraus, was hier nicht zutrifft. Überlegenheit ist unbegründet, da Julian sich lediglich beworben und keinen Sieg über Konkurrenten angestrebt hat.",
    rationaleByEmotion: {
      A: "Freude über den ersehnten Platz auf der kardiologischen Intensivstation ist unmittelbar plausibel.",
      B: "Erleichterung tritt ein, da das monatelange Bangen vor einer drohenden Absage schlagartig endet.",
      C: "Verbitterung ist unbegründet, da Julian den gewünschten Platz erhalten hat.",
      D: "Überlegenheit ist abwegig; die Vergabe reflektiert eine Zuteilung und keinen herablassenden Triumph.",
      E: "Zuversicht ist wahrscheinlich, da er sich optimistisch auf die praktische Ausbildung vorbereitet.",
    },
  },

  // ─── Q02 (Leicht) ───
  {
    id: "SEK-EE-GP2-002",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 2,
    person: {
      name: "Elena",
      context: "Assistenzärztin für Pädiatrie",
    },
    scenario:
      "Elena betreut seit zwei Wochen ein frühgeborenes Mädchen, dessen kardiorespiratorischer Zustand lange kritisch war. Heute zeigen die Laborwerte und die Echokardiografie erstmals eine deutliche, anhaltende Stabilisierung. Als sie den besorgten Eltern die Nachricht überbringt, brechen diese vor Erleichterung in Tränen aus.",
    emotions: [
      { id: "A", label: "Mitfreude", correctProbability: "likely" },
      { id: "B", label: "Zufriedenheit", correctProbability: "likely" },
      { id: "C", label: "Schadenfreude", correctProbability: "unlikely" },
      { id: "D", label: "Überdruss", correctProbability: "unlikely" },
      { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Die nachhaltige Stabilisierung des Frühgeborenen und die bewegte Erleichterung der Eltern wecken bei der engagierten Ärztin tiefe Mitfreude und professionelle Zufriedenheit. Schadenfreude, Überdruss oder unbeteiligter Gleichmut stehen in direktem Widerspruch zur emotionalen Dynamik dieses Behandlungserfolgs.",
    rationaleByEmotion: {
      A: "Mitfreude über die Tränen der Erleichterung und das Überleben des Kindes ist bei einer Kinderärztin hochgradig plausibel.",
      B: "Zufriedenheit über das Gelingen der intensiven medizinischen Therapie ist naheliegend.",
      C: "Schadenfreude ist mit der Situation und ärztlicher Fürsorge vollkommen unvereinbar.",
      D: "Überdruss widerspricht dem emotional bedeutsamen Meilenstein der Behandlung.",
      E: "Gleichmut ist unwahrscheinlich, da Elena die Familie seit zwei Wochen eng begleitet und die Szene berührend ist.",
    },
  },

  // ─── Q03 (Leicht) ───
  {
    id: "SEK-EE-GP2-003",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 3,
    person: {
      name: "David",
      context: "Rettungssanitäter am Steuer",
    },
    scenario:
      "David fährt mit Blaulicht und Martinshorn zu einem gemeldeten Kindernotfall mit akuter Atemnot. An einer verkehrsreichen Kreuzung bildet der Querverkehr keine Rettungsgasse, und ein Pkw-Fahrer blockiert trotz mehrfachen Hupens über zwei Minuten die Weiterfahrt, während die Leitstelle über Funk die Dringlichkeit der Lage wiederholt.",
    emotions: [
      { id: "A", label: "Dankbarkeit", correctProbability: "unlikely" },
      { id: "B", label: "Verärgerung", correctProbability: "likely" },
      { id: "C", label: "Anspannung", correctProbability: "likely" },
      { id: "D", label: "Hilflosigkeit", correctProbability: "likely" },
      { id: "E", label: "Heiterkeit", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Die rücksichtslose Blockade bei einem lebensbedrohlichen Kindernotfall ruft massive Verärgerung über den Autofahrer, akute Anspannung sowie Gefühle von Hilflosigkeit hervor, da David die Straße physisch nicht freimachen kann. Dankbarkeit und Heiterkeit sind in dieser Notfallsituation völlig deplatziert.",
    rationaleByEmotion: {
      A: "Dankbarkeit entbehrt bei einer lebensgefährdenden Verzögerung jeglicher Grundlage.",
      B: "Verärgerung über die Ignoranz des Autofahrers und den Zeitverlust ist unmittelbar nachvollziehbar.",
      C: "Anspannung resultiert aus dem extremen Zeitdruck und der Verantwortung für das kranke Kind.",
      D: "Hilflosigkeit ist wahrscheinlich, da David im Einsatzfahrzeug festsitzt und tatenlos warten muss.",
      E: "Heiterkeit ist angesichts der potenziellen Lebensgefahr für den Patienten ausgeschlossen.",
    },
  },

  // ─── Q04 (Leicht) ───
  {
    id: "SEK-EE-GP2-004",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 4,
    person: {
      name: "Miriam",
      context: "Biomedizinische Analytikerin in der Pathologie",
    },
    scenario:
      "Miriam bereitet Gewebeproben für die histologische Tumordiagnostik vor. Durch ein kurzes Versehen vertauscht sie zwei Beschriftungsetiketten auf den Objektträgern. Sie bemerkt ihren Fehler erst, als die Proben bereits zur mikroskopischen Befundung an den Chefarzt weitergeleitet wurden.",
    emotions: [
      { id: "A", label: "Leichtsinn", correctProbability: "unlikely" },
      { id: "B", label: "Erschrecken", correctProbability: "likely" },
      { id: "C", label: "Schuldgefühl", correctProbability: "likely" },
      { id: "D", label: "Triumph", correctProbability: "unlikely" },
      { id: "E", label: "Sorge", correctProbability: "likely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Das Erkennen einer Probenverwechslung in der Onkologie löst akutes Erschrecken, quälende Schuldgefühle wegen der potenziellen Fehldiagnose und tiefe Sorge um die Patienten und die Konsequenzen aus. Leichtsinn und Triumph stehen der ernsten Fehlerrealisierung diametral entgegen.",
    rationaleByEmotion: {
      A: "Leichtsinn beschreibt kein Gefühl, und Miriam erkennt die folgenschwere Tragweite ihres Fehlers.",
      B: "Erschrecken über das plötzliche Gewahrwerden der folgenreichen Verwechslung ist unmittelbar plausibel.",
      C: "Schuldgefühl entsteht durch das Bewusstsein, durch eigene Unachtsamkeit Patienten zu gefährden.",
      D: "Triumph ist bei einem schwerwiegenden diagnostischen Fehler unmöglich.",
      E: "Sorge um das Wohl der Patienten sowie arbeitsrechtliche Konsequenzen ist hochgradig wahrscheinlich.",
    },
  },

  // ─── Q05 (Mittel) ───
  {
    id: "SEK-EE-GP2-005",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 5,
    person: {
      name: "Florian",
      context: "Promotionsstudent in der Neurobiologie",
    },
    scenario:
      "Florian hat über ein Jahr lang an einer Versuchsreihe zur synaptischen Plastizität gearbeitet. In der Laborbesprechung lobt die Gruppenleiterin die Daten zwar als exzellent, teilt ihm jedoch mit, dass der Postdoc der Arbeitsgruppe Erstautor des Manuskripts wird, da dieser den Text final überarbeitet habe.",
    emotions: [
      { id: "A", label: "Kränkung", correctProbability: "likely" },
      { id: "B", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      { id: "C", label: "Enttäuschung", correctProbability: "likely" },
      { id: "D", label: "Begeisterung", correctProbability: "unlikely" },
      { id: "E", label: "Frustration", correctProbability: "likely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Florians monatelange intensive Arbeit wird in den Ergebnissen anerkannt, doch die Verweigerung der verdienten Erstautorenschaft erzeugt verständliche Kränkung, Enttäuschung und Frustration über akademische Hierarchien. Gleichgültigkeit und Begeisterung widersprechen der Bedeutung der Erstautorenschaft für die wissenschaftliche Laufbahn.",
    rationaleByEmotion: {
      A: "Kränkung über die Zurückstufung trotz des Hauptanteils an der experimentellen Arbeit ist plausibel.",
      B: "Gleichgültigkeit ist abwegig, da Erstautorenschaften für die akademische Karriere essenziell sind.",
      C: "Enttäuschung darüber, dass das Versprechen auf eigene Urheberschaft nicht eingelöst wird, ist unvermeidlich.",
      D: "Begeisterung ist angesichts der Benachteiligung ausgeschlossen.",
      E: "Frustration über die ohnmächtige Akzeptanz der hierarchischen Gruppenentscheidung ist sehr wahrscheinlich.",
    },
  },

  // ─── Q06 (Mittel) ───
  {
    id: "SEK-EE-GP2-006",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 6,
    person: {
      name: "Hannah",
      context: "Ergotherapeutin in einer Rehabilitationsklinik",
    },
    scenario:
      "Hannah verabschiedet heute einen 68-jährigen Schlaganfallpatienten, den sie über vier Monate intensiv therapiert hat. Der Patient hat seine Feinmotorik weitgehend wiedererlangt und kann nun selbstständig leben. Zum Abschied überreicht er ihr ein persönliches Dankesschreiben und eine Zeichnung seiner Enkelin.",
    emotions: [
      { id: "A", label: "Missgunst", correctProbability: "unlikely" },
      { id: "B", label: "Freude", correctProbability: "likely" },
      { id: "C", label: "Rührung", correctProbability: "likely" },
      { id: "D", label: "Beklemmung", correctProbability: "unlikely" },
      { id: "E", label: "Groll", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Der bewegende Therapieabschluss mit persönlicher Dankbarkeit weckt bei Hannah echte Freude über die wiedererlangte Selbstständigkeit des Patienten sowie Rührung über die Zeichnung. Missgunst, Beklemmung oder Groll sind in diesem harmonischen Abschiedskontext völlig unbegründet.",
    rationaleByEmotion: {
      A: "Missgunst gegenüber dem gesunden Patienten ist abwegig und widerspricht dem therapeutischen Ethos.",
      B: "Freude über den meisterhaften Reha-Erfolg und die wiedergewonnene Lebensqualität ist hochgradig plausibel.",
      C: "Rührung über das handgeschriebene Schreiben und die Zeichnung der Enkelin ist sehr wahrscheinlich.",
      D: "Beklemmung ist unpassend, da kein bedrohlicher oder beengender Aspekt vorliegt.",
      E: "Groll entbehrt in dieser von Zuneigung und Respekt geprägten Abschiedssituation jeder Grundlage.",
    },
  },

  // ─── Q07 (Mittel) ───
  {
    id: "SEK-EE-GP2-007",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 7,
    person: {
      name: "Tobias",
      context: "Physiotherapeut eines Handballvereins",
    },
    scenario:
      "Tobias hat den Mannschaftskapitän nach einem Kreuzbandriss monatelang akribisch aufgebaut. Im Meisterschaftsfinale knickt der Spieler nach einem harten Zweikampf erneut weg und reißt sich das Transplantat. In der Kabine herrscht nach der Niederlage lähmende Stille; der Spieler sitzt weinend auf der Bank.",
    emotions: [
      { id: "A", label: "Schadenfreude", correctProbability: "unlikely" },
      { id: "B", label: "Mitgefühl", correctProbability: "likely" },
      { id: "C", label: "Niedergeschlagenheit", correctProbability: "likely" },
      { id: "D", label: "Leichtigkeit", correctProbability: "unlikely" },
      { id: "E", label: "Resignation", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die Re-Ruptur des Spielers und die bittere Finalniederlage erzeugen bei Tobias tiefes Mitgefühl und Niedergeschlagenheit über den herben Rückschlag. Schadenfreude und Leichtigkeit sind absurd. Resignation ist für einen professionellen Sportphysiotherapeuten unwahrscheinlich, da die Reha-Perspektive und Betreuungspflicht bestehen bleiben.",
    rationaleByEmotion: {
      A: "Schadenfreude gegenüber dem eigenen, intensiv betreuten Sportler ist ausgeschlossen.",
      B: "Mitgefühl mit dem verzweifelten, weinenden Athleten ist für den Therapeuten unmittelbar naheliegend.",
      C: "Niedergeschlagenheit über das Scheitern des Meisterschaftsziels und den schweren Rückfall ist plausibel.",
      D: "Leichtigkeit widerspricht der bedrückten Atmosphäre in der Kabine völlig.",
      E: "Resignation ist unwahrscheinlich, da Therapeuten medizinisch handlungsorientiert bleiben und nicht aufgeben.",
    },
  },

  // ─── Q08 (Mittel) ───
  {
    id: "SEK-EE-GP2-008",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 8,
    person: {
      name: "Clara",
      context: "Medizinstudentin im praktischen Jahr",
    },
    scenario:
      "Clara wird während der Chefarztvisite vor dem versammelten Team unerwartet zu einer seltenen Differentialdiagnose befragt. Sie zögert kurz, nennt dann aber ruhig die zutreffende autoimmune Erkrankung und begründet sie schlüssig. Der Chefarzt nickt anerkennend und lobt ihr profundes Wissen vor den Oberärzten.",
    emotions: [
      { id: "A", label: "Entrüstung", correctProbability: "unlikely" },
      { id: "B", label: "Stolz", correctProbability: "likely" },
      { id: "C", label: "Überheblichkeit", correctProbability: "unlikely" },
      { id: "D", label: "Erleichterung", correctProbability: "likely" },
      { id: "E", label: "Verzweiflung", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Das unerwartete Lob in der Chefarztvisite nach anfänglicher Nervosität weckt berechtigten Stolz und spürbare Erleichterung. Entrüstung und Verzweiflung sind dem Erfolg völlig fremd. Überheblichkeit ist für eine PJ-Studentin im Beisein der Oberärzte und des Chefarztes unangebracht und psychologisch unwahrscheinlich.",
    rationaleByEmotion: {
      A: "Entrüstung ist unbegründet, da die Befragung fair verlief und mit einem Lob endete.",
      B: "Stolz auf die gelungene Beantwortung einer schweren Frage vor dem Chefarzt ist unmittelbar verständlich.",
      C: "Überheblichkeit ist unwahrscheinlich; eine Studentin bleibt im hierarchischen Rahmen der Visite respektvoll.",
      D: "Erleichterung stellt sich ein, nachdem die bedrohliche Prüfungssituation positiv gemeistert wurde.",
      E: "Verzweiflung steht in klarem Widerspruch zur gelungenen klinischen Bewährung.",
    },
  },

  // ─── Q09 (Mittel) ───
  {
    id: "SEK-EE-GP2-009",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 9,
    person: {
      name: "Simon",
      context: "Gesundheits- und Krankenpfleger auf der Geriatrie",
    },
    scenario:
      "Simon hat während einer personell unterbesetzten Nachtschicht alle Patienten gewissenhaft versorgt, zwei sturzgefährdete Senioren engmaschig überwacht und Notfallmedikamente pünktlich verabreicht. Bei der Morgenübergabe rügt ihn die Stationsleitung vor versammelter Mannschaft lautstark, weil er vergessen hat, ein Formular zur Wäschebestellung abzuheften.",
    emotions: [
      { id: "A", label: "Kränkung", correctProbability: "likely" },
      { id: "B", label: "Selbstgefälligkeit", correctProbability: "unlikely" },
      { id: "C", label: "Ehrfurcht", correctProbability: "unlikely" },
      { id: "D", label: "Verbitterung", correctProbability: "likely" },
      { id: "E", label: "Freude", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die öffentliche Rüge wegen einer bürokratischen Nichtigkeit nach einer aufopferungsvollen Nachtschicht erzeugt schwere Kränkung und Verbitterung über die fehlende Wertschätzung. Selbstgefälligkeit, Ehrfurcht und Freude sind durch die ungerechte Behandlung ausgeschlossen.",
    rationaleByEmotion: {
      A: "Kränkung über die Bloßstellung vor den Kollegen trotz herausragender Patientenversorgung ist plausibel.",
      B: "Selbstgefälligkeit ist nach einem öffentlichen Tadel unvereinbar mit der Situation.",
      C: "Ehrfurcht vor der Stationsleitung wird durch die unfaire Schikane eher zerstört als gefördert.",
      D: "Verbitterung über die Diskrepanz zwischen immenser Arbeitsleistung und Schikane ist sehr wahrscheinlich.",
      E: "Freude ist im Kontext einer unberechtigten Zurechtweisung ausgeschlossen.",
    },
  },

  // ─── Q10 (Mittel) ───
  {
    id: "SEK-EE-GP2-010",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 10,
    person: {
      name: "Beatrice",
      context: "Landärztin für Allgemeinmedizin",
    },
    scenario:
      "Beatrice erhält kurz vor Praxisschluss den Anruf eines 82-jährigen Patienten, den sie seit dreißig Jahren betreut. Seine schwerkranke Ehefrau ist am Vormittag zu Hause friedlich eingeschlafen. Der Witwer bedankt sich mit brüchiger Stimme dafür, dass Beatrice seiner Frau die letzten Wochen schmerzfrei im eigenen Heim ermöglicht hat.",
    emotions: [
      { id: "A", label: "Genugtuung", correctProbability: "unlikely" },
      { id: "B", label: "Wehmut", correctProbability: "likely" },
      { id: "C", label: "Mitgefühl", correctProbability: "likely" },
      { id: "D", label: "Dankbarkeit", correctProbability: "likely" },
      { id: "E", label: "Panik", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Der Tod einer langjährigen Patientin und der intime Anruf des Witwers lösen Wehmut und Mitgefühl aus; zugleich empfindet Beatrice Dankbarkeit für das tiefe Vertrauen der Familie. Genugtuung (Rechtbehalten/Triumph) wäre zynisch und deplatziert; Panik entbehrt bei einem friedlichen Sterbeprozess jeder Grundlage.",
    rationaleByEmotion: {
      A: "Genugtuung impliziert Selbstgerechtigkeit oder Triumph, was beim Tod einer Patientin deplatziert ist.",
      B: "Wehmut über den Verlust eines vertrauten Menschen nach Jahrzehnten der Betreuung ist natürlich.",
      C: "Mitgefühl mit dem trauernden, allein zurückbleibenden Ehemann ist hochgradig plausibel.",
      D: "Dankbarkeit für die berührende Rückmeldung und das geschenkte Vertrauen ist naheliegend.",
      E: "Panik ist unbegründet, da die Situation ruhig, gefasst und medizinisch abgeschlossen ist.",
    },
  },

  // ─── Q11 (Mittel) ───
  {
    id: "SEK-EE-GP2-011",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 11,
    person: {
      name: "Maximilian",
      context: "Assistenzarzt für Unfallchirurgie",
    },
    scenario:
      "Maximilian leitet zum ersten Mal eigenverantwortlich ein chirurgisches Nahttraining für Studienanfänger. Die Studierenden arbeiten konzentriert mit, bedanken sich am Ende mit Applaus für seine geduldige Didaktik und bitten ihn, auch den Fortgeschrittenenkurs im nächsten Semester zu übernehmen.",
    emotions: [
      { id: "A", label: "Minderwertigkeitsgefühl", correctProbability: "unlikely" },
      { id: "B", label: "Zufriedenheit", correctProbability: "likely" },
      { id: "C", label: "Überforderung", correctProbability: "unlikely" },
      { id: "D", label: "Bestätigung", correctProbability: "likely" },
      { id: "E", label: "Argwohn", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die gelungene Lehrpremiere und das begeisterte Feedback verschaffen Maximilian aufrichtige Zufriedenheit und berufliche Bestätigung. Minderwertigkeitsgefühle, Überforderung und Argwohn stehen im Widerspruch zum ungeteilten didaktischen Erfolg.",
    rationaleByEmotion: {
      A: "Minderwertigkeitsgefühl wird durch das Lob und die Wertschätzung der Studierenden widerlegt.",
      B: "Zufriedenheit über den reibungslosen Ablauf und die Lernerfolge des Kurses ist sehr wahrscheinlich.",
      C: "Überforderung liegt nicht vor, da der Kurs souverän gemeistert wurde.",
      D: "Bestätigung eigener Lehreignung durch den Applaus und den Folgewunsch ist naheliegend.",
      E: "Argwohn gegenüber den ehrlichen Reaktionen der Nachwuchsmediziner entbehrt jeder Plausibilität.",
    },
  },

  // ─── Q12 (Schwer) ───
  {
    id: "SEK-EE-GP2-012",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 12,
    person: {
      name: "Valerie",
      context: "Leitende Anästhesistin im Notfall-OP",
    },
    scenario:
      "Während eines Notkaiserschnitts kommt es bei der Mutter zu einer fulminanten Fruchtwasserembolie mit kardiopulmonalem Kollaps. Valerie muss unter extremem Zeitdruck Intubation, Massentransfusion und Reanimationsmaßnahmen koordinieren, während die Fetalherztöne des Kindes einbrechen. Nach zwanzig dramatischen Minuten sind Mutter und Neugeborenes stabil auf die Intensivstation verlegt.",
    emotions: [
      { id: "A", label: "Anspannung", correctProbability: "likely" },
      { id: "B", label: "Leichtsinn", correctProbability: "unlikely" },
      { id: "C", label: "Erleichterung", correctProbability: "likely" },
      { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      { id: "E", label: "Erschöpfung", correctProbability: "likely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Die akute Lebensgefahr zweier Patienten erfordert maximale Anspannung; nach geglückter Lebensrettung weicht das Adrenalin tiefer Erleichterung und schwerer körperlich-mentaler Erschöpfung. Leichtsinn und Gleichgültigkeit sind in dieser hochkritischen Notfallmedizin undenkbar.",
    rationaleByEmotion: {
      A: "Anspannung während der hochriskanten Notfallreanimation ist unausweichlich.",
      B: "Leichtsinn ist mit der professionellen Verantwortung in der Notfallanästhesie unvereinbar.",
      C: "Erleichterung über das Überleben von Mutter und Kind nach Abwendung des Todes ist tiefgreifend.",
      D: "Gleichgültigkeit widerspricht dem existenziellen Einsatz für zwei bedrohte Leben.",
      E: "Erschöpfung setzt nach dem abrupten Abfall des extremen Stresspegels unweigerlich ein.",
    },
  },

  // ─── Q13 (Schwer) ───
  {
    id: "SEK-EE-GP2-013",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 13,
    person: {
      name: "Jonas",
      context: "Assistenzarzt in der Onkologie",
    },
    scenario:
      "Jonas muss einem 42-jährigen Familienvater mitteilen, dass sein Pankreaskarzinom trotz aggressiver Chemotherapie progredient ist und multiple Lebermetastasen aufgetreten sind. Eine kurative Therapie ist ausgeschlossen. Der Patient blickt Jonas mit tränenerstickter Stimme an und fragt, wie er das seinen beiden kleinen Töchtern beibringen soll.",
    emotions: [
      { id: "A", label: "Abgebrühtheit", correctProbability: "unlikely" },
      { id: "B", label: "Mitgefühl", correctProbability: "likely" },
      { id: "C", label: "Beklemmung", correctProbability: "likely" },
      { id: "D", label: "Entlastung", correctProbability: "unlikely" },
      { id: "E", label: "Sorge", correctProbability: "likely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Die Überbringung der infausten Diagnose an einen jungen Familienvater löst tiefes Mitgefühl, emotionale Beklemmung angesichts des Leids und Sorge um die Familie aus. Abgebrühtheit widerspricht der berührenden Situation; Entlastung ist bei einer existentiellen Hiobsbotschaft unmöglich.",
    rationaleByEmotion: {
      A: "Abgebrühtheit liegt fern, da die existenzielle Tragödie des jungen Vaters Jonas emotional berührt.",
      B: "Mitgefühl mit dem Patienten und seinen hilflosen Töchtern ist unmittelbar verständlich.",
      C: "Beklemmung entsteht durch die unausweichliche Konfrontation mit der therapeutischen Machtlosigkeit.",
      D: "Entlastung ist ausgeschlossen; das Gespräch ist eine erhebliche psychische Bürde.",
      E: "Sorge über den bevorstehenden schweren Krankheitsverlauf und das Schicksal der Kinder ist naheliegend.",
    },
  },

  // ─── Q14 (Schwer) ───
  {
    id: "SEK-EE-GP2-014",
    simulationId: "generalprobe-2",
    subtest: "EE",
    questionNumber: 14,
    person: {
      name: "Katrin",
      context: "Oberärztin und Ethikkommissionsleiterin",
    },
    scenario:
      "Katrin leitet eine kontroverse interdisziplinäre Fallkonferenz über einen 88-jährigen Patienten mit hypoxischer Enzephalopathie nach prolongierter Reanimation. Das Intensivteam empfiehlt die Umstellung auf ein rein palliatives Therapieziel, während ein weit angereister Sohn unter Androhung rechtlicher Schritte die Fortführung aller invasiven Maximalmaßnahmen fordert.",
    emotions: [
      { id: "A", label: "Teilnahmslosigkeit", correctProbability: "unlikely" },
      { id: "B", label: "Zerrissenheit", correctProbability: "likely" },
      { id: "C", label: "Übermut", correctProbability: "unlikely" },
      { id: "D", label: "Belastung", correctProbability: "likely" },
      { id: "E", label: "Selbstsicherheit", correctProbability: "unlikely" },
    ],
    difficulty: "Schwer",
    explanation:
      "In diesem ethischen und juristischen Dilemma erlebt Katrin innere Zerrissenheit zwischen ärztlicher Indikation und Angehörigenwillen sowie erhebliche psychische Belastung. Teilnahmslosigkeit und Übermut verbieten sich bei existenziellen Entscheidungen; unreflektierte Selbstsicherheit ist in einem unlösbaren Wertekonflikt unangemessen.",
    rationaleByEmotion: {
      A: "Teilnahmslosigkeit widerspricht der hohen Verantwortung und der moderierenden Rolle Katrins.",
      B: "Zerrissenheit zwischen Patientenwohl, juristischem Risiko und dem Schmerz des Sohnes ist evident.",
      C: "Übermut ist angesichts eines drohenden Rechtsstreits und des bevorstehenden Sterbens ausgeschlossen.",
      D: "Belastung durch den emotionalen Druck und den eskalierenden Konflikt ist sehr wahrscheinlich.",
      E: "Selbstsicherheit ist unpassend, da ethische Grenzfalle keine einfachen, triumphalen Wahrheiten kennen.",
    },
  },
];

export const GENERALPROBE_2_EE_SIMULATION_DATA: EeSimulationData = {
  simulationId: "generalprobe-2",
  simNumber: 2,
  title: "MedAT-H Generalprobe #2 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (1260s) · Situative Emotionsanalyse",
  timeLimitSeconds: 21 * 60,
  questions: RAW_GENERALPROBE_2_EE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #2 runtime and review engine
 */
export const GENERALPROBE_2_EE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_EE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = eeQuestionToStoredQuestion(q, GENERALPROBE_2_EE_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-EE-GP2-${numStr}`,
      legacyId: `ee-sim2-q${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "EE", "Emotionen erkennen", "Generalprobe #2", `SEK-EE-GP2-${numStr}`],
      eeData: {
        ...q,
        id: `SEK-EE-GP2-${numStr}`,
        legacyId: `ee-sim2-q${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
