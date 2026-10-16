/**
 * MedAT SEK — Emotionen erkennen (EE) — Generalprobe #4
 * Exactly 14 Original Scenarios, 70 Independent Emotion Classifications
 * 
 * IDs: SEK-EE-GP4-001 through SEK-EE-GP4-014 (aliased to ee-sim4-q01 .. q14)
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

export const RAW_GENERALPROBE_4_EE_QUESTIONS: EeQuestionData[] = [
  // ─── Q01 (Leicht) ───
  {
    id: "SEK-EE-GP4-001",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 1,
    person: {
      name: "Felix",
      context: "Physiotherapeut in einer neurologischen Rehabilitationsklinik",
    },
    scenario:
      "Felix betreut seit sechs Monaten einen Patienten nach einem schweren Schlaganfall, der zu Beginn auf den Rollstuhl angewiesen war und erhebliche Sprachstörungen hatte. Heute gelingt es dem Patienten erstmals, ohne fremde Hilfe und ohne Gehhilfe eine Strecke von zwanzig Metern durch den Therapieraum zu gehen und Felix mit einem Lächeln für seine Geduld zu danken.",
    emotions: [
      { id: "A", label: "Freude", correctProbability: "likely" },
      { id: "B", label: "Stolz", correctProbability: "likely" },
      { id: "C", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      { id: "D", label: "Verbitterung", correctProbability: "unlikely" },
      { id: "E", label: "Angst", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Der sichtbare Durchbruch des Patienten nach sechsmonatiger harter Arbeit und dessen persönlicher Dank lösen bei Felix berechtigte Freude und professionellen Stolz aus. Gleichgültigkeit, Verbitterung oder Angst entbehren in diesem Moment des gemeinsamen Erfolgs jeder Grundlage.",
    rationaleByEmotion: {
      A: "Freude über die wiedergewonnene Gehfähigkeit des Patienten ist unmittelbar nachvollziehbar.",
      B: "Stolz auf den erreichten Meilenstein nach monatelanger therapeutischer Begleitung ist vollkommen plausibel.",
      C: "Gleichgültigkeit widerspricht Felix' monatelangem Engagement für den Patienten diametral.",
      D: "Verbitterung ist unbegründet, da ein großer Heilerfolg erzielt und Dank ausgesprochen wurde.",
      E: "Angst ist unzutreffend, da die Situation stabil und positiv verläuft.",
    },
  },

  // ─── Q02 (Leicht) ───
  {
    id: "SEK-EE-GP4-002",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 2,
    person: {
      name: "Laura",
      context: "Medizinstudentin im ersten klinischen Praktikum",
    },
    scenario:
      "Laura soll auf der chirurgischen Station unter Aufsicht der Stationsärztin ihre allererste Venenpunktion bei einem Patienten durchführen. Da der Patient über sehr dünne, rollende Venen klagt und die Ärztin währenddessen jeden Handgriff schweigend mit prüfendem Blick protokolliert, zittern Lauras Hände leicht beim Anlegen des Stauschlauchs.",
    emotions: [
      { id: "A", label: "Anspannung", correctProbability: "likely" },
      { id: "B", label: "Verunsicherung", correctProbability: "likely" },
      { id: "C", label: "Sorge", correctProbability: "likely" },
      { id: "D", label: "Überheblichkeit", correctProbability: "unlikely" },
      { id: "E", label: "Gelassenheit", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Die erste invasive Maßnahme am Patienten unter kritischer Beobachtung und mit zittrigen Händen erzeugt akute Anspannung, Verunsicherung und Sorge vor Fehlern. Überheblichkeit oder Gelassenheit sind angesichts der spürbaren Nervosität ausgeschlossen.",
    rationaleByEmotion: {
      A: "Anspannung resultiert unmittelbar aus der Prüfungssituation und der Premiere am Patienten.",
      B: "Verunsicherung ist plausibel, da schwierige Venenverhältnisse die Aufgabe zusätzlich erschweren.",
      C: "Sorge, den Patienten zu verletzen oder vor der Ärztin zu scheitern, ist naheliegend.",
      D: "Überheblichkeit ist angesichts der zitternden Hände und der Unerfahrenheit völlig deplatziert.",
      E: "Gelassenheit steht im direkten Widerspruch zu den physiologischen Stressanzeichen.",
    },
  },

  // ─── Q03 (Leicht) ───
  {
    id: "SEK-EE-GP4-003",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 3,
    person: {
      name: "Benjamin",
      context: "Assistenzarzt in der Pädiatrie",
    },
    scenario:
      "Benjamin hat nach einer anstrengenden Nachtschicht die Entlassungsbriefe für drei Kinder vorbereitet. Als er am Nachmittag zu Hause zur Ruhe kommt, bemerkt er plötzlich mit Schrecken, dass er bei einem der Briefe eine zehnfach überdosierte Dosis für ein Notfall-Asthmaspray eingetragen hat. Das Telefon der betroffenen Eltern ist besetzt, als er sofort versucht, sie zu warnen.",
    emotions: [
      { id: "A", label: "Schuldgefühl", correctProbability: "likely" },
      { id: "B", label: "Panik", correctProbability: "likely" },
      { id: "C", label: "Sorge", correctProbability: "likely" },
      { id: "D", label: "Selbstzufriedenheit", correctProbability: "unlikely" },
      { id: "E", label: "Schadenfreude", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Das Erkennen eines potenziell lebensbedrohlichen Dosierungsfehlers in Kombination mit der Nichterreichbarkeit der Familie versetzt Benjamin in akute Panik, Sorge um das Kind und schwere Schuldgefühle. Selbstzufriedenheit oder Schadenfreude sind völlig abwegig.",
    rationaleByEmotion: {
      A: "Schuldgefühl ist unvermeidlich, da er die fehlerhafte Dosis eigenhändig freigegeben hat.",
      B: "Panik entsteht durch die Unmöglichkeit, die Familie in diesem kritischen Moment telefonisch zu erreichen.",
      C: "Sorge um die gesundheitliche Unversehrtheit des Kindes bestimmt sein Handeln.",
      D: "Selbstzufriedenheit widerspricht dem Bewusstsein eines gravierenden Behandlungsfehlers diametral.",
      E: "Schadenfreude ist angesichts der Notlage eines anvertrauten Kindes absurd.",
    },
  },

  // ─── Q04 (Leicht) ───
  {
    id: "SEK-EE-GP4-004",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 4,
    person: {
      name: "Lisa",
      context: "Rettungssanitäterin im Notfalleinsatz",
    },
    scenario:
      "Lisa wird nachts zu einem gemeldeten Treppensturz alarmiert. Vor Ort stellt sich heraus, dass der leicht verletzte Bewohner stark alkoholisiert ist, jegliche Hilfe ablehnt, Lisa plötzlich wüst persönlich beschimpft und sie an der Schulter so heftig wegschubst, dass ihr Notfallkoffer zu Boden fällt und medizinisches Verbrauchsmaterial verstreut wird.",
    emotions: [
      { id: "A", label: "Empörung", correctProbability: "likely" },
      { id: "B", label: "Verärgerung", correctProbability: "likely" },
      { id: "C", label: "Begeisterung", correctProbability: "unlikely" },
      { id: "D", label: "Dankbarkeit", correctProbability: "unlikely" },
      { id: "E", label: "Leichtsinn", correctProbability: "unlikely" },
    ],
    difficulty: "Leicht",
    explanation:
      "Unerwartete verbale Entgleisungen und tätliche Angriffe im Hilfseinsatz rufen verständliche Empörung und akute Verärgerung hervor. Begeisterung, Dankbarkeit oder Leichtsinn stehen in starkem Widerspruch zur Bedrohungslage.",
    rationaleByEmotion: {
      A: "Empörung über den unprovozierten tätlichen Angriff auf Rettungskräfte ist unmittelbar plausibel.",
      B: "Verärgerung über die Zerstörung von Material und die Behinderung der Rettungsarbeit ist naheliegend.",
      C: "Begeisterung ist angesichts der feindseligen Aggression grotesk.",
      D: "Dankbarkeit für Schläge und Beleidigungen zu empfinden, ist ausgeschlossen.",
      E: "Leichtsinn ist unzutreffend, da die Situation sofortige Wachsamkeit und Eigensicherung erfordert.",
    },
  },

  // ─── Q05 (Mittel) ───
  {
    id: "SEK-EE-GP4-005",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 5,
    person: {
      name: "Oliver",
      context: "Biomedizin-Forscher an einem Universitätsinstitut",
    },
    scenario:
      "Oliver hat über zwei Jahre hinweg mit großem persönlichem Einsatz an einem neuartigen Syntheseweg für einen antiviralen Wirkstoff geforscht und sein Manuskript vor zwei Wochen eingereicht. Heute liest er in einer internationalen Fachzeitschrift, dass eine konkurrierende Arbeitsgruppe aus den USA exakt denselben Mechanismus vor drei Tagen vorab publiziert hat, wodurch seine eigene Erstautorenschaft wertlos wird.",
    emotions: [
      { id: "A", label: "Enttäuschung", correctProbability: "likely" },
      { id: "B", label: "Frustration", correctProbability: "likely" },
      { id: "C", label: "Niedergeschlagenheit", correctProbability: "likely" },
      { id: "D", label: "Mitfreude", correctProbability: "unlikely" },
      { id: "E", label: "Selbstsicherheit", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Nach zweijähriger Forschungsarbeit um wenige Tage geschlagen zu werden ('scooped'), löst massive Enttäuschung, Frustration und Niedergeschlagenheit aus. Mitfreude mit der Konkurrenz oder gesteigerte Selbstsicherheit sind psychologisch unvereinbar mit diesem akademischen Rückschlag.",
    rationaleByEmotion: {
      A: "Enttäuschung darüber, dass der jahrelange Einsatz nicht mit der Erstpublikation belohnt wird, ist tiefgreifend.",
      B: "Frustration ist unvermeidlich, da der zeitliche Rückstand von drei Tagen unglücklich und irreversibel ist.",
      C: "Niedergeschlagenheit resultiert aus der herben Entwertung des eigenen Projekts.",
      D: "Mitfreude für die konkurrierende Gruppe, die seinen Erfolg zunichtegemacht hat, ist unplausibel.",
      E: "Selbstsicherheit ist erschüttert, da die wissenschaftliche Zukunftsplanung einen schweren Dämpfer erhält.",
    },
  },

  // ─── Q06 (Mittel) ───
  {
    id: "SEK-EE-GP4-006",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 6,
    person: {
      name: "Maya",
      context: "Krankenpflegerin auf einer internistischen Intensivstation",
    },
    scenario:
      "Maya übernimmt nach einer hektischen Schichtübergabe die Betreuung eines instabilen Patienten. Bei der Routinekontrolle bemerkt sie sofort, dass die Infusionspumpe für ein hochwirksames Katecholamin auf eine falsche Förderrate programmiert war. Sie korrigiert die Dosierung geistesgegenwärtig und bringt den Blutdruck des Patienten wieder in den sicheren Zielbereich, bevor klinische Komplikationen auftreten.",
    emotions: [
      { id: "A", label: "Erleichterung", correctProbability: "likely" },
      { id: "B", label: "Bestätigung", correctProbability: "likely" },
      { id: "C", label: "Panik", correctProbability: "unlikely" },
      { id: "D", label: "Neid", correctProbability: "unlikely" },
      { id: "E", label: "Groll", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Durch Mayas rasche Wachsamkeit wurde ein potenziell verheerender Fehler abgewendet. Dies führt zu Erleichterung über den stabilen Zustand und beruflicher Bestätigung. Panik ist nach gelungener Stabilisierung vorbei, Neid oder Groll spielen keine Rolle.",
    rationaleByEmotion: {
      A: "Erleichterung über die rechtzeitige Abwendung einer vitalen Gefährdung dominiert die Situation.",
      B: "Bestätigung in der eigenen Fachkompetenz und Beobachtungsgabe stellt sich ein.",
      C: "Panik ist unzutreffend, da Maya die Situation kontrolliert und erfolgreich gemeistert hat.",
      D: "Neid entbehrt in dieser Akutsituation jeder Grundlage.",
      E: "Groll ist unbegründet, da im Moment der erfolgreichen Rettung die Patientenstabilität im Mittelpunkt steht.",
    },
  },

  // ─── Q07 (Mittel) ───
  {
    id: "SEK-EE-GP4-007",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 7,
    person: {
      name: "Dominik",
      context: "Medizinstudent in der Examensvorbereitung",
    },
    scenario:
      "Dominik hat sich monatelang mit zwei langjährigen Studienfreunden in einer gemeinsamen Lerngruppe auf das Staatsexamen vorbereitet. Zwei Wochen vor dem Prüfungstermin erfährt er zufällig, dass sich die beiden anderen seit Wochen heimlich ohne ihn mit einem Prüfungsassistenten treffen, der ihnen exklusive Altklausuren und Prüfungsschwerpunkte zuspielt, die sie vor Dominik verheimlichten.",
    emotions: [
      { id: "A", label: "Kränkung", correctProbability: "likely" },
      { id: "B", label: "Enttäuschung", correctProbability: "likely" },
      { id: "C", label: "Bitterkeit", correctProbability: "likely" },
      { id: "D", label: "Scham", correctProbability: "unlikely" },
      { id: "E", label: "Gelassenheit", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Der heimliche Ausschluss aus der Lerngruppe und der Verrat enger Freunde kurz vor dem Examen führen zu tiefer Kränkung, Enttäuschung und Bitterkeit. Scham ist unbegründet, da Dominik sich loyal verhielt, und Gelassenheit schließt sich emotional aus.",
    rationaleByEmotion: {
      A: "Kränkung durch den gezielten Ausschluss und den Vertrauensbruch ist unvermeidlich.",
      B: "Enttäuschung über das unfaire und unsolidarische Verhalten der Freunde ist tief.",
      C: "Bitterkeit über den ungerechten Wettbewerbsvorteil der anderen stellt sich ein.",
      D: "Scham ist unpassend, da Dominik das Opfer eines unfairen Verhaltens ist und nicht der Täter.",
      E: "Gelassenheit ist angesichts des doppelten Stresses durch Verrat und Examensdruck unmöglich.",
    },
  },

  // ─── Q08 (Mittel) ───
  {
    id: "SEK-EE-GP4-008",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 8,
    person: {
      name: "Sarah",
      context: "Hebamme in einem städtischen Perinatalzentrum",
    },
    scenario:
      "Sarah begleitet eine Erstgebärende durch eine extrem anstrengende, 18-stündige Geburt mit protrahiertem Verlauf und drohendem Geburtsstillstand. Durch Sarahs unermüdliche Geduld, kontinuierliche Atemführung und beruhigendes Zuspruch gelingt es schließlich, die Geburt ohne Kaiserschnitt zu beenden. Das neugeborene Mädchen liegt gesund und kräftig schreiend auf der Brust der überglücklichen Eltern.",
    emotions: [
      { id: "A", label: "Erleichterung", correctProbability: "likely" },
      { id: "B", label: "Rührung", correctProbability: "likely" },
      { id: "C", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      { id: "D", label: "Überdruss", correctProbability: "unlikely" },
      { id: "E", label: "Verbitterung", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Nach 18 Stunden Hochleistung und Anspannung löst die Geburt eines gesunden Kindes bei Sarah tiefe Erleichterung und Rührung aus. Gleichgültigkeit, Überdruss oder Verbitterung stehen im vollkommenen Widerspruch zu diesem bewegenden Moment.",
    rationaleByEmotion: {
      A: "Erleichterung, dass die kräftezehrende Geburt ohne Notoperation glücklich endete, ist überwältigend.",
      B: "Rührung beim Anblick der glücklichen Familie nach schweren Stunden ist naheliegend.",
      C: "Gleichgültigkeit widerspricht Sarahs empathischem Einsatz für die Gebärende völlig.",
      D: "Überdruss weicht der positiven Erschöpfung und Freude über den geglückten Ausgang.",
      E: "Verbitterung entbehrt angesichts des gesunden Neugeborenen jeder Grundlage.",
    },
  },

  // ─── Q09 (Mittel) ───
  {
    id: "SEK-EE-GP4-009",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 9,
    person: {
      name: "Paul",
      context: "Assistenzarzt in der interdisziplinären Notaufnahme",
    },
    scenario:
      "Paul wird in der morgendlichen Chefarztvisite vor dem gesamten Ärztekollegium scharf gemaßregelt, weil er nachts bei einem Patienten mit unklaren Unterbauchschmerzen eine Computertomographie veranlasst hatte, die zunächst keine eindeutige Appendizitis zeigte. Wenige Stunden später stellt sich bei der laparoskopischen Revision heraus, dass eine seltene Dünndarmperforation vorlag, die ohne das CT übersehen worden wäre und den Patienten das Leben gekostet hätte.",
    emotions: [
      { id: "A", label: "Genugtuung", correctProbability: "likely" },
      { id: "B", label: "Erleichterung", correctProbability: "likely" },
      { id: "C", label: "Verärgerung", correctProbability: "likely" },
      { id: "D", label: "Schuldgefühl", correctProbability: "unlikely" },
      { id: "E", label: "Selbstzweifel", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die Bestätigung seiner lebensrettenden diagnostischen Intuition verschafft Paul Genugtuung und Erleichterung über das Überleben des Patienten, während die vorangegangene Bloßstellung weiterhin Ärger erzeugt. Schuldgefühle oder Selbstzweifel sind durch den OP-Befund vollständig widerlegt.",
    rationaleByEmotion: {
      A: "Genugtuung über die glänzende Bestätigung seiner Entscheidung gegenüber dem Chef ist plausibel.",
      B: "Erleichterung darüber, dass der Patient dank des CTs rechtzeitig gerettet werden konnte, ist groß.",
      C: "Verärgerung über die ungerechtfertigte und demütigende öffentliche Rüge bleibt bestehen.",
      D: "Schuldgefühl ist unbegründet, da seine Wachsamkeit dem Patienten das Leben gerettet hat.",
      E: "Selbstzweifel weichen der Gewissheit, fachlich vollkommen korrekt gehandelt zu haben.",
    },
  },

  // ─── Q10 (Mittel) ───
  {
    id: "SEK-EE-GP4-010",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 10,
    person: {
      name: "Nina",
      context: "Medizinstudentin im Wahlfach Palliativmedizin",
    },
    scenario:
      "Nina hat in den vergangenen drei Wochen eine ältere, schwerkranke Krebspatientin auf der Palliativstation täglich begleitet, ihr aus Büchern vorgelesen und viele persönliche Gespräche über das Leben geführt. Als Nina heute ihren Dienst antritt, erfährt sie von der Stationsleiterin, dass die Patientin in den frühen Morgenstunden friedlich und völlig schmerzfrei im Beisein ihrer Familie eingeschlafen ist.",
    emotions: [
      { id: "A", label: "Trauer", correctProbability: "likely" },
      { id: "B", label: "Wehmut", correctProbability: "likely" },
      { id: "C", label: "Wut", correctProbability: "unlikely" },
      { id: "D", label: "Empörung", correctProbability: "unlikely" },
      { id: "E", label: "Schadenfreude", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Der Tod der vertrauten Patientin berührt Nina mit Trauer und Wehmut über den Abschied, obgleich der friedliche Verlauf tröstlich ist. Wut, Empörung oder Schadenfreude sind bei einem erwarteten, würdevollen Lebensende völlig unpassend.",
    rationaleByEmotion: {
      A: "Trauer über den endgültigen Verlust eines ans Herz gewachsenen Menschen ist natürlich.",
      B: "Wehmut beim Gedenken an die gemeinsamen tiefgründigen Gespräche stellt sich ein.",
      C: "Wut ist unbegründet, da kein Fehlverhalten vorliegt und das Sterben friedlich verlief.",
      D: "Empörung entbehrt bei einem begleiteten, unaufhaltsamen Krankheitsverlauf jeder Grundlage.",
      E: "Schadenfreude verbietet sich im Angesicht des Todes eines Mitmenschen vollständig.",
    },
  },

  // ─── Q11 (Mittel) ───
  {
    id: "SEK-EE-GP4-011",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 11,
    person: {
      name: "Daniel",
      context: "Facharzt für Innere Medizin am Universitätsklinikum",
    },
    scenario:
      "Daniel hat sich auf die Leitung der kardiologischen Ambulanz beworben, für die er als langjähriger Stellvertreter mit herausragender klinischer Beurteilung und exzellenten Forschungsergebnissen als Favorit galt. In der Besetzungskonferenz wird überraschend verkündet, dass der Posten an den Sohn eines einflussreichen Kuratoriumsmitglieds vergeben wurde, der über keinerlei Leitungserfahrung und deutlich weniger Fachpublikationen verfügt.",
    emotions: [
      { id: "A", label: "Entrüstung", correctProbability: "likely" },
      { id: "B", label: "Frustration", correctProbability: "likely" },
      { id: "C", label: "Kränkung", correctProbability: "likely" },
      { id: "D", label: "Begeisterung", correctProbability: "unlikely" },
      { id: "E", label: "Schuldgefühl", correctProbability: "unlikely" },
    ],
    difficulty: "Mittel",
    explanation:
      "Die offensichtliche Bevorzugung eines unqualifizierten Bewerbers aus Vetternwirtschaft erzeugt bei Daniel Entrüstung, Frustration und tiefe Kränkung. Begeisterung ist ausgeschlossen, und Schuldgefühle sind unbegründet, da seine fachliche Eignung überragend war.",
    rationaleByEmotion: {
      A: "Entrüstung über die sachfremde und unfaire Bevorzugung durch Nepotismus ist vollkommen gerechtfertigt.",
      B: "Frustration darüber, dass Leistung und Loyalität hinter Beziehungen zurückstehen, wiegt schwer.",
      C: "Kränkung über die Geringschätzung seiner langjährigen Führungsarbeit ist unmittelbar nachvollziehbar.",
      D: "Begeisterung über den Verlust der verdienten Position ist absurd.",
      E: "Schuldgefühl ist unpassend, da nicht eigenes Unvermögen, sondern unlautere Umstände zur Absage führten.",
    },
  },

  // ─── Q12 (Schwer) ───
  {
    id: "SEK-EE-GP4-012",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 12,
    person: {
      name: "Luisa",
      context: "Oberärztin in der pädiatrischen Onkologie",
    },
    scenario:
      "Luisa muss den Eltern eines siebenjährigen Jungen mitteilen, dass die intensive Zweitlinien-Chemotherapie erfolglos geblieben ist und keine kurative Behandlungsoption mehr zur Verfügung steht. Als Luisa das schwere Gespräch im Stillen beendet, bricht die Mutter in Tränen aus, nimmt überraschend Luisas Hand und bedankt sich unter Schluchzen dafür, dass Luisa in den vergangenen Monaten für die Familie wie ein rettender Anker war und immer ehrlich geblieben ist.",
    emotions: [
      { id: "A", label: "Beklemmung", correctProbability: "likely" },
      { id: "B", label: "Mitgefühl", correctProbability: "likely" },
      { id: "C", label: "Triumph", correctProbability: "unlikely" },
      { id: "D", label: "Abgebrühtheit", correctProbability: "unlikely" },
      { id: "E", label: "Selbstgefälligkeit", correctProbability: "unlikely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Das Überbringen einer infausten Prognose für ein Kind bei gleichzeitiger tiefer Dankbarkeit der weinenden Eltern erzeugt erdrückende Beklemmung und tiefes Mitgefühl. Triumph, Abgebrühtheit oder Selbstgefälligkeit verbieten sich im Angesicht dieser menschlichen Tragödie von selbst.",
    rationaleByEmotion: {
      A: "Beklemmung angesichts des unausweichlichen Todes eines Kindes schnürt ihr die Kehle zu.",
      B: "Mitgefühl mit der unendlichen Trauer der verzweifelten Eltern ist tief und authentisch.",
      C: "Triumph ist zynisch und steht im absoluten Widerspruch zum Scheitern der Therapie.",
      D: "Abgebrühtheit widerspricht Luisas offenkundiger emotionaler Anteilnahme und Zugewandtheit.",
      E: "Selbstgefälligkeit über das Lob der Eltern ist in diesem niederschmetternden Moment völlig ausgeschlossen.",
    },
  },

  // ─── Q13 (Schwer) ───
  {
    id: "SEK-EE-GP4-013",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 13,
    person: {
      name: "Tim",
      context: "Assistenzarzt im dritten Weiterbildungsjahr der Orthopädie",
    },
    scenario:
      "Tim assistiert bei einer hochkomplexen Hüft-Endoprothesen-Wechseloperation. Er bemerkt kurz vor dem Einsetzen der Pfanne, dass die OP-Pflegekraft versehentlich eine Inlay-Komponente angereicht hat, deren Chargennummer nicht mit dem Konus des Schafts kompatibel ist. Als Tim den leitenden Operateur leise darauf hinweist, herrscht dieser ihn vor dem gesamten OP-Team an, er solle gefälligst den Mund halten und keine unqualifizierten Unterbrechungen wagen. Tim weiß sicher, dass die falsche Paarung in kürzester Zeit zu einer schweren Luxation führen wird.",
    emotions: [
      { id: "A", label: "Zerrissenheit", correctProbability: "likely" },
      { id: "B", label: "Anspannung", correctProbability: "likely" },
      { id: "C", label: "Unbehagen", correctProbability: "likely" },
      { id: "D", label: "Sorglosigkeit", correctProbability: "unlikely" },
      { id: "E", label: "Hochstimmung", correctProbability: "unlikely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Tim gerät in einen quälenden Loyalitäts- und Sicherheitskonflikt: Der Schutz des Patienten vor Schädigung kollidiert mit der autoritären Maßregelung und der Angst vor beruflicher Vergeltung. Dies führt zu Zerrissenheit, massiver Anspannung und tiefem Unbehagen. Sorglosigkeit oder Hochstimmung sind unvereinbar mit der OP-Krise.",
    rationaleByEmotion: {
      A: "Zerrissenheit zwischen der Pflicht zur Verhinderung eines Kunstfehlers und der Einschüchterung durch den Chef ist akut.",
      B: "Anspannung erreicht ihren Höhepunkt, da in Sekundenschnelle über das Schicksal des Patienten entschieden wird.",
      C: "Unbehagen über das feindselige Arbeitsklima und den drohenden Schaden für den Patienten ist greifbar.",
      D: "Sorglosigkeit widerspricht dem Wissen um die drohende Prothesenlockerung vollkommen.",
      E: "Hochstimmung ist angesichts der aggressiven Demütigung und der Bedrohungslage absurd.",
    },
  },

  // ─── Q14 (Schwer) ───
  {
    id: "SEK-EE-GP4-014",
    simulationId: "generalprobe-4",
    subtest: "EE",
    questionNumber: 14,
    person: {
      name: "Corinna",
      context: "Hausärztin in einer ländlichen Praxis",
    },
    scenario:
      "Corinna betreut seit über zehn Jahren einen 65-jährigen Landwirt mit fortgeschrittener Herzinsuffizienz und Diabetes, zwischen denen ein enges Vertrauensverhältnis besteht. Heute erscheint der Patient in der Sprechstunde und erklärt ruhig, er habe beschlossen, sämtliche Herz- und Diabetesmedikamente ab sofort abzusetzen, da er sich für eine energetische Geistheilung entschieden habe. Auf Corinnas eindringliche Warnungen vor Lungenödem und Koma lächelt er nur milde und bittet sie, seinen freien Willen zu respektieren.",
    emotions: [
      { id: "A", label: "Sorge", correctProbability: "likely" },
      { id: "B", label: "Hilflosigkeit", correctProbability: "likely" },
      { id: "C", label: "Schadenfreude", correctProbability: "unlikely" },
      { id: "D", label: "Gleichmut", correctProbability: "unlikely" },
      { id: "E", label: "Selbstsicherheit", correctProbability: "unlikely" },
    ],
    difficulty: "Schwer",
    explanation:
      "Die akute Lebensgefahr für den langjährigen Patienten durch das Absetzen vitaler Medikamente löst bei Corinna große Sorge und das schmerzhafte Gefühl therapeutischer Hilflosigkeit aus. Schadenfreude, Gleichmut oder Selbstsicherheit sind angesichts des drohenden Todesfalls unzutreffend.",
    rationaleByEmotion: {
      A: "Sorge um das Überleben des Patienten bei drohender kardialer Dekompensation ist akut und begründet.",
      B: "Hilflosigkeit angesichts der rational nicht erreichbaren Haltung des Patienten quält sie.",
      C: "Schadenfreude über die gesundheitliche Selbstgefährdung eines Patienten verbietet sich völlig.",
      D: "Gleichmut ist unpassend, da ihr das Schicksal des langjährigen Patienten am Herzen liegt.",
      E: "Selbstsicherheit ist erschüttert, da ihre ärztliche Überzeugungskraft versagt hat.",
    },
  },
];

export const GENERALPROBE_4_EE_SIMULATION_DATA: EeSimulationData = {
  simulationId: "generalprobe-4",
  simNumber: 4,
  title: "MedAT-H Generalprobe #4 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (1260s) · Situative Emotionsanalyse",
  timeLimitSeconds: 21 * 60,
  questions: RAW_GENERALPROBE_4_EE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #4 runtime and review engine
 */
export const GENERALPROBE_4_EE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_EE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = eeQuestionToStoredQuestion(q, GENERALPROBE_4_EE_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-EE-GP4-${numStr}`,
      legacyId: `ee-sim4-q${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "EE", "Emotionen erkennen", "Generalprobe #4", `SEK-EE-GP4-${numStr}`],
      eeData: {
        ...q,
        id: `SEK-EE-GP4-${numStr}`,
        legacyId: `ee-sim4-q${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
