/**
 * MedAT SEK — Emotionen regulieren (ER) — Generalprobe #4
 * Exactly 12 Questions · 18 Minutes Exam Time (1080 seconds, 90s / task)
 * 
 * IDs: SEK-ER-GP4-001 through SEK-ER-GP4-012 (aliased to legacy er-sim4-q01 .. q12)
 * 
 * Specifications:
 * - Exactly 12 Questions assessing situational emotion regulation under goal-directed constraints
 * - Authentic, high-validity German scenarios across medical training, clinical communication, and professional development
 * - Explicit, clearly defined goal for each scenario
 * - Exactly 4 distinct alternative strategy options per question (A–D), strictly written in the first person ("Ich ...")
 * - Exactly one best strategy per question evaluated strictly against the stated goal
 * - Difficulty distribution: Exactly 3 Leicht (25.0%), 6 Mittel (50.0%), 3 Schwer (25.0%)
 * - Balanced answer key distribution: Exactly 3 A, 3 B, 3 C, 3 D (non-repeating balanced sequence: C, A, D, B, A, C, B, D, C, A, B, D)
 * - Structured distractor analysis: Dedicated rationales for every option (rationalesByOption) & explicit distractor explanations (explanationsIncorrect)
 */

import type { StoredQuestion } from "../questions/types";
import type { ErOptionKey, ErQuestionData, ErSimulationData } from "../questions/er/types";
import { erQuestionToStoredQuestion } from "../questions/er/types";

export const RAW_GENERALPROBE_4_ER_QUESTIONS: ErQuestionData[] = [
  // ─── Q01 (Leicht · pause_and_prioritize) ─── Key: C
  {
    id: "SEK-ER-GP4-001",
    legacyId: "er-sim4-q01",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 1,
    difficulty: "Leicht",
    strategyType: "pause_and_prioritize",
    emotion: "Akute Verunsicherung, Selbstzweifel und Scham bei Erstkontakt",
    scenario:
      "Im ersten Blockpraktikum führst du auf der geriatrischen Station dein erstes eigenständiges Anamnesegespräch mit einem älteren, schwerhörigen Patienten. Als du nach seinen Vorerkrankungen fragst, reagiert er ungehalten und ruft im Mehrbettzimmer: „Sprechen Sie doch deutlicher! Sie wirken völlig planlos und wissen doch gar nicht, wonach Sie suchen!“ Du spürst eine heiße Welle der Beschämung, die Blicke der anderen Patienten im Nacken und aufkeimende Selbstzweifel an deiner Eignung.",
    goal: "Die aufkeimende Verunsicherung rasch regulieren, das Anamnesegespräch professionell strukturieren und eine tragfähige Vertrauensebene zum Patienten aufbauen.",
    options: {
      A: "Ich breche das Gespräch brüsk ab und teile dem Patienten vor dem ganzen Zimmer mit, dass unter solchen unverschämten Vorwürfen keine adäquate medizinische Betreuung möglich sei.",
      B: "Ich ziehe mich beschämt aus dem Zimmer zurück, gehe ins Dienstzimmer und bitte die Stationsärztin, das Gespräch komplett für mich zu übernehmen, da der Patient mich ablehnt.",
      C: "Ich halte kurz inne, atme ruhig durch, mache mir bewusst, dass die Frustration des Patienten aus seiner Schwerhörigkeit und der Belastung durch den Klinikaufenthalt resultiert, rücke näher an das Bett heran, spreche langsamer in tiefer Tonlage und erkläre empathisch den Zweck meiner Fragen.",
      D: "Ich versuche, meine Unsicherheit zu überspielen, indem ich meine Fragen lautstark und betont forsch in schnellem Tempo herunterbete, um sofort formale Autorität zu demonstrieren.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Ein aggressiver Abbruch im Affekt verletzt die Würde des Patienten, zerstört das Beziehungsverhältnis und missachtet die altersbedingte Hörminderung.",
      B: "Die sofortige Flucht zementiert die Versagensangst und vergibt die Chance, grundlegende klinische Kommunikationskompetenz aufzubauen.",
      C: "Kurzes Innehalten dämpft die vegetative Schamreaktion; der Perspektivenwechsel erkennt die Hörbehinderung als Auslöser und passt das Kommunikationsverhalten lösungsorientiert an.",
      D: "Hektisches, forsches Sprechen verschlechtert das Sprachverständnis bei Presbyakusis zusätzlich und verstärkt die Frustration auf beiden Seiten.",
    },
    explanationsIncorrect: {
      A: "Eskaliert den Konflikt vor Mitpatienten und lässt professionelle Empathie vermissen.",
      B: "Ist passive Vermeidung, die das Ausbildungsziel vereitelt und die Stationsärztin unnötig bindet.",
      C: "", // Korrekte Antwort
      D: "Ignoriert die akustischen Bedürfnisse des Patienten und kompensiert Unsicherheit durch dysfunktionale Härte.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Die emotionale Reaktion des Patienten ist häufig keine persönliche Ablehnung, sondern Ausdruck von Frustration über das Nichtverstehen bei Schwerhörigkeit. Durch kurzes Innehalten (Emotionsregulation), kognitiven Perspektivenwechsel und praktische Anpassung (tiefere Frequenz, Nähe, ruhiges Tempo) wird die Gesprächssituation deeskaliert und das Erhebungsziel erreicht.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Reagiert affektiv gekränkt und beschädigt das Arzt-Patienten-Verhältnis.\n- **Option B:** Ist dysfunktionale Flucht vor einer bewältigbaren Lernsituation.\n- **Option D:** Verschärft die Verständigungsprobleme durch falsche Hektik.",
  },

  // ─── Q02 (Leicht · problem_focused_coping) ─── Key: A
  {
    id: "SEK-ER-GP4-002",
    legacyId: "er-sim4-q02",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 2,
    difficulty: "Leicht",
    strategyType: "problem_focused_coping",
    emotion: "Frustration, Entmutigung und akuter Ärger über Leistungsstagnation",
    scenario:
      "Bei der gezielten MedAT-Vorbereitung auf den KFF-Untertest „Figuren zusammensetzen“ (FZ) stagnieren deine Ergebnisse seit zwei Wochen bei nur 50 % richtiger Lösungen, obwohl du täglich zwei Stunden übst. Nach einem weiteren fehlerhaften Testdurchlauf spürst du eine Welle von bitterem Frust und den zornigen Impuls, die Übungsbögen vom Schreibtisch zu fegen und die Vorbereitung aufzugeben.",
    goal: "Den akuten Frustationsstau abbauen, die Lernstrategie sachlich analysieren und mit erneuerter methodischer Klarheit weiterarbeiten.",
    options: {
      A: "Ich lege das Material für eine halbe Stunde beiseite, gehe an die frische Luft, um den emotionalen Druck zu senken, und analysiere danach systematisch meine typischen Fehlermuster, um meine Bearbeitungsstrategie gezielt anzupassen.",
      B: "Ich zwinge mich trotz der Wut dazu, sofort weitere vier Stunden ohne Pause Figuren zu bearbeiten, um den Durchbruch durch schiere Übungsmasse zu erzwingen.",
      C: "Ich streiche den Untertest Figuren zusammensetzen vollständig aus meinem Lernplan und verlasse mich darauf, den Punktverlust im biologischen Wissensbereich auszugleichen.",
      D: "Ich rede mir ein, dass dieser Testteil ohnehin reine Glückssache und praxisfern konstruiert ist, sodass eine strukturierte Vorbereitung sinnlos sei.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Eine kurze Distanzierung baut die physiologische Frustrationsspannung ab; die anschließende systematische Fehleranalyse setzt auf strategische Modifikation statt blinder Wiederholung.",
      B: "Erzwungenes Dauerüben unter hoher Frustration führt zu kognitiver Blockade, festigt Fehlroutinen und begünstigt mentale Erschöpfung.",
      C: "Das vollständige Streichen eines KFF-Untertests verschenkt wertvolle MedAT-Punkte und gefährdet den Studienplatz empfindlich.",
      D: "Die Entwertung des Untertests ist eine bequeme Rationalisierung, die reale methodische Lernpotenziale verleugnet.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Potenziert den Frust durch Übermüdung und verschlimmert die Stagnation.",
      C: "Bedeutet voreilige Kapitulation vor einer erlernbaren visuellen Fertigkeit.",
      D: "Schützt kurzfristig das Selbstwertgefühl durch Abwertung, verhindert aber jede Leistungsverbesserung.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Leistungsplateaus beim figurativen Denken entstehen oft durch ineffiziente Lösungsheuristiken. Ein kurzer Spaziergang entkoppelt den emotionalen Ärger, während die nachfolgende qualitative Fehleranalyse (z. B. Identifikation von Randstücken und Winkeln) den Lernprozess wieder in Gang bringt.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Blinder Aktionismus unter Wut führt zu kognitiver Erschöpfung.\n- **Option C:** Ist eine fatale Resignationsstrategie mit hohem Ranglistenverlust.\n- **Option D:** Ist Selbsttäuschung, die vor der eigenen Lernverantwortung flieht.",
  },

  // ─── Q03 (Leicht · impulse_control) ─── Key: D
  {
    id: "SEK-ER-GP4-003",
    legacyId: "er-sim4-q03",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 3,
    difficulty: "Leicht",
    strategyType: "impulse_control",
    emotion: "Akuter Ekel, vegetative Reizüberflutung und Angst vor Bloßstellung",
    scenario:
      "Während deines Pflegepraktikums hilfst du bei der Wundversorgung eines Patienten mit einem infizierten diabetischen Fußsyndrom. Als der Verband gelöst wird, schlägt dir ein intensiver, fauliger Wundgeruch entgegen. Du spürst sofort eine heftige Welle von Ekel, Schweißausbrüche und einen starken Würgereiz. Du hast Angst, dich vor dem Patienten und der anleitenden Pflegefachkraft unprofessionell zu übergeben.",
    goal: "Den vegetativen Würgereiz sofort beherrschen, die eigene Fassung wahren und die Wundversorgung für den Patienten respektvoll unterstützen.",
    options: {
      A: "Ich verziehe demonstrativ das Gesicht, wende mich mit einem lauten Laut des Missfallens ab und verlasse fluchtartig das Zimmer in Richtung Personaltoilette.",
      B: "Ich erkläre dem Patienten direkt, wie unerträglich der Geruch seiner Wunde sei, damit er volles Verständnis dafür hat, warum ich körperlich auf Abstand gehe.",
      C: "Ich halte krampfhaft die Luft an, bis die Wundreinigung beendet ist, und nehme dabei aufsteigenden Schwindel und drohende Ohnmacht in Kauf.",
      D: "Ich atme bewusst kontrolliert und flach durch den Mund ein und aus, fixiere meinen Blick sachlich auf die anatomischen Wundränder, konzentriere mich auf das sterile Anreichen der Kompressen und akzeptiere den Geruch als klinischen Befund.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Fluchtartiges Verlassen unter Ekelbekundung demütigt den Patienten zutiefst und beschädigt das professionelle Vertrauen.",
      B: "Das Thematisieren des Ekels vor dem ohnehin leidenden Patienten ist taktlos und psychisch verletzend.",
      C: "Atemstillstand provoziert Hyperkapnie und Vasovagalreaktionen, was das Risiko einer Synkope im Behandlungszimmer drastisch erhöht.",
      D: "Mundatmung reduziert die olfaktorische Stimulation erheblich; die sachliche Kognition und instrumentelle Fokussierung auf die Wundränder dämpfen den Ekelreflex wirksam.",
    },
    explanationsIncorrect: {
      A: "Bloßstellendes Verhalten, das den Patienten kränkt und die Versorgung unversorgt zurücklässt.",
      B: "Verletzt die ärztlich-pflegerische Fürsorgepflicht durch unbedachte emotionale Entgleisung.",
      C: "Führt durch Sauerstoffmangel zu Schwindel und akuter Sturzgefahr am Patientenbett.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Ekel ist eine biologische Schutzreaktion, die im klinischen Alltag durch physiologische Umleitung (Mundatmung) und kognitive Neubewertung (Geruch als Symptom nekrotischen Gewebes) kontrolliert werden kann. Die Konzentration auf handfeste Handgriffe sichert die Handlungsfähigkeit, ohne den Patienten zu beschämen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Demütigt den Patienten öffentlich und ist hochgradig unprofessionell.\n- **Option B:** Erzeugt Schuld- und Schamgefühle beim Patienten.\n- **Option C:** Gefährdet die eigene Kreislaufstabilität durch Apnoe.",
  },

  // ─── Q04 (Mittel · constructive_communication) ─── Key: B
  {
    id: "SEK-ER-GP4-004",
    legacyId: "er-sim4-q04",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 4,
    difficulty: "Mittel",
    strategyType: "constructive_communication",
    emotion: "Ärger über ungerechtfertigte Anschuldigungen und moralische Empörung",
    scenario:
      "In einer voll besetzten Notaufnahme wartet eine Mutter mit ihrem siebenjährigen Sohn, der eine blutende Platzwunde an der Stirn hat. Als ein bewusstloser Schlaganfallpatient auf einer Trage mit höchster Priorität am Wartebereich vorbei in den Schockraum gefahren wird, stürmt die Mutter wutentbrannt an deinen Tresen und schreit dich an: „Sie lassen mein blutendes Kind hier absichtlich sitzen! Das ist unterlassene Hilfeleistung, Sie herzloses Personal!“ Du spürst eine Welle von Ärger über die unverschämte Unterstellung.",
    goal: "Den eigenen Ärger kontrollieren, die eskalierte Situation deeskalieren und der Mutter das medizinische Triage-Vorgehen verständnisvoll und klar vermitteln.",
    options: {
      A: "Ich rufe umgehend den Sicherheitsdienst und erteile der Mutter ein Hausverbot, wenn sie nicht augenblicklich ihren Tonfall mäßigt.",
      B: "Ich atme ruhig aus, nehme eine offene Körperhaltung ein, signalisiere Verständnis für ihre verständliche Sorge um ihr blutendes Kind, erkläre sachlich das lebensrettende Triage-Prinzip bei akuter Lebensgefahr und versichere ihr, dass ihr Sohn stabil ist und als Nächstes versorgt wird.",
      C: "Ich ignoriere die Vorwürfe vollständig, starre wortlos auf meinen Monitor und lasse die Mutter solange am Tresen stehen, bis sie sich von alleine wieder beruhigt.",
      D: "Ich gebe dem Druck nach, ziehe das Kind sofort am Schockraumpatienten vorbei in den Behandlungsraum und nähe die Wunde hastig, um den Tumult im Wartezimmer schnell zu beenden.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Sofortiges Einschalten des Sicherheitsdienstes eskaliert den Konflikt unnötig und verkennt die elterliche Panik hinter der Aggression.",
      B: "Empathische Validierung der Angst gepaart mit transparenter Erklärung des medizinischen Dringlichkeitsprinzips entzieht dem Vorwurf die emotionale Angriffsfläche.",
      C: "Stummes Ignorieren wirkt arrogant, steigert das Gefühl der Hilflosigkeit und treibt die Wut der Angehörigen zur weiteren Eskalation.",
      D: "Die Verletzung des Triage-Prinzips gefährdet vital bedrohte Patienten und belohnt aggressives Durchsetzungsverhalten.",
    },
    explanationsIncorrect: {
      A: "Kriminalisiert eine verängstigte Mutter und verschärft die Unruhe in der Notaufnahme.",
      B: "", // Korrekte Antwort
      C: "Provoziert weitere Wutausbrüche durch passive Missachtung eines akuten Anliegens.",
      D: "Gefährdet die Patientensicherheit anderer Notfallpatienten durch unethische Bevorzugung.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Aggressives Verhalten von Eltern in Notaufnahmen ist primär eine Manifestation akuter Hilflosigkeit und Angst um das eigene Kind. Indem man die Sorge validiert und gleichzeitig das rationale System der Dringlichkeitsstufen (Triage) ruhig vermittelt, beruhigt man die Angehörige, ohne von medizinischen Notwendigkeiten abzuweichen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Eskaliert autoritär, statt die Ursache (Angst) zu adressieren.\n- **Option C:** Wirkt empathielos und befeuert den Zorn.\n- **Option D:** Verstößt gegen elementare Prinzipien der Notfallgerechtigkeit.",
  },

  // ─── Q05 (Mittel · constructive_communication) ─── Key: A
  {
    id: "SEK-ER-GP4-005",
    legacyId: "er-sim4-q05",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 5,
    difficulty: "Mittel",
    strategyType: "constructive_communication",
    emotion: "Gefühl der Ausbeutung, Enttäuschung und brennender Zorn über Trittbrettfahrer",
    scenario:
      "Vor der mündlichen Pharmakologie-Prüfung hat deine dreiköpfige Lerngruppe vereinbart, dass jeder zu heute eine detaillierte Zusammenfassung einer großen Wirkstoffgruppe ausarbeitet. Du hast das gesamte Wochenende durchgearbeitet und ein 35-seitiges Skript erstellt. Beim Treffen gestehen die beiden anderen lachend, dass sie „einfach keine Zeit hatten und das schöne Wetter am See genossen haben“. Sie bitten dich ganz selbstverständlich, ihnen deine Datei sofort per AirDrop zu senden. Du fühlst dich ausgenutzt und empfindest brennenden Zorn.",
    goal: "Den akuten Wutanfall beherrschen, klare persönliche Grenzen setzen und die eigene Prüfungsvorbereitung schützen, ohne destruktiv zu eskalieren.",
    options: {
      A: "Ich atme tief durch, benenne sachlich und bestimmt meine Enttäuschung über den unfairen Vertrauensbruch, behalte mein Skript vorerst für mich und kündige an, dass ich mich für die verbleibende Lernphase auf meine eigene Vorbereitung konzentriere.",
      B: "Ich schreie die beiden mitten im Universitätsgebäude an, beschimpfe sie als faule Schmarotzer und lösche die gemeinsame Studiengruppe vor ihren Augen.",
      C: "Ich schlucke die Kränkung wortlos herunter, sende ihnen lächelnd mein Skript und biete an, ihre fehlenden Themen bis morgen auch noch alleine zusammenzufassen.",
      D: "Ich übergebe ihnen eine manipulierte Version des Skripts mit absichtlich eingebauten Dosierungsfehlern, damit sie in der Prüfung die Quittung für ihre Faulheit bekommen.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Assertive Grenzziehung ohne Beleidigung schützt die eigene Leistung, adressiert das unfaire Verhalten klar und beendet die dysfunktionale Ausbeutung.",
      B: "Ein unkontrollierter Wutausbruch vergeudet emotionale Ressourcen und hinterlässt ein vergiftetes Klima ohne sachlichen Nutzen.",
      C: "Unterwürfiges Nachgeben belohnt unkollegiales Trittbrettfahrerverhalten und verstärkt die eigene Frustration und Erschöpfung.",
      D: "Böswillige Manipulation ist toxisch, gefährdet die Kollegialität fundamental und ist ethisch inakzeptabel.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Ist ein destruktiver Affektausbruch, der das Problem nicht konstruktiv löst.",
      C: "Ist passive Selbstaufgabe, die künftige Ausbeutung geradezu provoziert.",
      D: "Stellt eine böswillige Rachehandlung dar, die dem ärztlichen Grundethos widerspricht.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Emotionale Reife zeigt sich darin, berechtigten Zorn in eine klare, standhafte Grenzsetzung umzuwandeln. Indem man die Vereinbarung sachlich einfordert und die eigene Arbeit schützt, wahrt man seine Integrität und beendet die Ausnutzung, ohne sich auf Rache oder Wutausbrüche herabzulassen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Verliert die Fassung und schadet der eigenen Reputation.\n- **Option C:** Ist ungesundes Ausweichen vor notwendigem Konflikt.\n- **Option D:** Ist bösartige Sabotage, die unprofessionell und unethisch ist.",
  },

  // ─── Q06 (Mittel · emotional_reappraisal) ─── Key: C
  {
    id: "SEK-ER-GP4-006",
    legacyId: "er-sim4-q06",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 6,
    difficulty: "Mittel",
    strategyType: "emotional_reappraisal",
    emotion: "Versagensangst, Scham und Druck zur Täuschung über eigene Kompetenz",
    scenario:
      "Auf der kardiologischen Station bittet dich die Chefärztin bei der Visite am Krankenbett einer Patientin mit Dyspnoe, das Herz auszukultieren und den Befund zu beschreiben. Du hörst angestrengt hin, bist dir aber völlig unsicher, ob über der Herzspitze ein leises systolisches Geräusch vorliegt oder ob es sich lediglich um atemabhängige Nebengeräusche handelt. Du spürst eine Welle von Scham und panische Angst davor, dich vor dem gesamten Team als inkompetent zu blamieren.",
    goal: "Die Scham über die eigene Unsicherheit kognitiv überwinden, diagnostische Ehrlichkeit wahren und die Situation als professionelle Lerngelegenheit nutzen.",
    options: {
      A: "Ich rate ins Blaue hinein und behaupte selbstsicher, ein deutliches Mitralklappeninsuffizienz-Geräusch Grad III/VI gehört zu haben, um keinen schlechten Eindruck zu hinterlassen.",
      B: "Ich gebe vor, plötzlich dringende Magenschmerzen zu haben, entschuldige mich eilig und verlasse das Zimmer, um der peinlichen Frage auszuweichen.",
      C: "Ich mache mir bewusst, dass Unsicherheit in der Auskultation ein normaler Ausbildungsschritt ist, beschreibe präzise, was ich sicher wahrnehme, benenne meine Differenzierungsunsicherheit und bitte die Chefärztin offen um eine vergleichende Demonstration am Befund.",
      D: "Ich schiebe die Schuld auf das alte Stethoskop der Station und erkläre abwertend, dass mit einer solch minderwertigen Membran selbst Kardiologen nichts hören könnten.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Diagnostisches Raten gefährdet die Patientensicherheit und entwertet die klinische Zuverlässigkeit vollständig.",
      B: "Fluchtartiges Ausweichen unter Vortäuschung von Krankheit verhindert jeden Lerneffekt und wirkt unprofessionell.",
      C: "Kognitive Neubewertung enttabuisiert die Wissensgrenze; transparente Reflexion beweist diagnostische Aufrichtigkeit und ermöglicht gezielten Kompetenzerwerb.",
      D: "Schuldabwehr auf das Arbeitsgerät ist eine durchschaubare Ausrede, die unreif und kritikunfähig wirkt.",
    },
    explanationsIncorrect: {
      A: "Gefährdet die Patientensicherheit durch Vortäuschung falscher Befunde.",
      B: "Ist feige Vermeidung, die Ausbildungsfortschritte dauerhaft blockiert.",
      C: "", // Korrekte Antwort
      D: "Zeigt mangelnde Selbstreflexion und weicht der Verantwortung durch Ausreden aus.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Im Medizinstudium ist das Erkennen eigener Grenzen („Wissen, was man nicht weiß“) die wichtigste Sicherheitskompetenz. Wer Unsicherheit kognitiv nicht als Demütigung, sondern als Ausgangspunkt präziser klinischer Lehre begreift, gewinnt fachliche Sicherheit und das Vertrauen des Teams.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Ist gefährliche Scharlatanerie am Krankenbett.\n- **Option B:** Vermeidet die Herausforderung durch infantile Ausflüchte.\n- **Option D:** Sucht die Schuld feindselig bei äußeren Umständen.",
  },

  // ─── Q07 (Mittel · perspective_taking) ─── Key: B
  {
    id: "SEK-ER-GP4-007",
    legacyId: "er-sim4-q07",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 7,
    difficulty: "Mittel",
    strategyType: "perspective_taking",
    emotion: "Kränkung, Demütigung und ohnmächtiger Groll über ungerechten Tonfall",
    scenario:
      "Du bist als Famulant im chirurgischen OP steril eingewaschen und hältst seit vierzig Minuten konzentriert einen Wundhaken. Als du kurz deine Position nachjustierst, herrscht dich die instrumentierende OP-Pflegekraft vor dem Operateur und den Assistenten schneidend an: „Hände ruhig halten! Sie wackeln hier herum und gefährden das sterile Feld, Sie stehen ohnehin nur im Weg!“ Du hast die Sterilität jedoch penibel gewahrt und spürst, wie dir vor Kränkung und Demütigung das Blut in die Wangen schießt.",
    goal: "Den aufsteigenden Groll beherrschen, das sterile Feld unter allen Umständen schützen und die OP-Kooperation professionell fortführen.",
    options: {
      A: "Ich starre die Pflegekraft wütend an, widerspreche lautstark während der laufenden Operation und fordere den Operateur auf, mich vor ihren Schikanen in Schutz zu nehmen.",
      B: "Ich atme ruhig aus, halte meine Hände diszipliniert steril am Haken, führe mir vor Augen, dass das OP-Personal unter enormem Sicherheits- und Zeitdruck steht, antworte knapp und sachlich („Verstanden, Haken liegt stabil“) und konzentriere mich voll auf den operativen Fortgang.",
      C: "Ich lasse den Haken demonstrativ sinken, berühre unsterile Bereiche meiner Kleidung und verlasse beleidigt den Saal, um ein Zeichen gegen Mobbing zu setzen.",
      D: "Ich beginne unter der OP-Maske leise zu schluchzen und klage dem Operateur mein Leid über den rauen Umgangston im Saal.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Ein lauter Streit im laufenden OP-Schnitt gefährdet die Konzentration des Operateurs und setzt den Patienten akuten Risiken aus.",
      B: "Perspektivenübernahme (Verständnis für den extremen Stress im OP) verhindert die emotionale Eskalation; Disziplin wahrt die Sterilität und schützt den Patienten.",
      C: "Kontamination des Feldes und Flucht gefährden die OP unmittelbar und führen zu schweren disziplinarischen Konsequenzen.",
      D: "Emotionaler Zusammenbruch bindet das Team an Nebenschauplätze und mindert die professionelle Verlässlichkeit.",
    },
    explanationsIncorrect: {
      A: "Zerstört die OP-Ruhe und bringt den Patienten durch Ablenkung in Gefahr.",
      B: "", // Korrekte Antwort
      C: "Ist ein grob fahrlässiger Verstoß gegen die Patientensicherheit aus verletztem Stolz.",
      D: "Bürdet dem operierenden Team eigene Kränkungen während einer Operation auf.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Im Operationssaal hat die Patientensicherheit absolute Priorität vor persönlichen Empfindlichkeiten. Das kognitive Verständnis für den hohen Stresspegel der OP-Pflege ermöglicht es, die schroffe Bemerkung nicht persönlich zu nehmen, die Hände steril am Haken zu halten und das Ziel der fehlerfreien Assistenz zu sichern.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Gefährdet die sterile Ruhe des Eingriffs durch Machtkämpfe.\n- **Option C:** Ist ein schwerer Kunstfehler mit Verlassen des OP-Teams.\n- **Option D:** Ist ein unprofessioneller Kontrollverlust am OP-Tisch.",
  },

  // ─── Q08 (Mittel · emotional_reappraisal) ─── Key: D
  {
    id: "SEK-ER-GP4-008",
    legacyId: "er-sim4-q08",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 8,
    difficulty: "Mittel",
    strategyType: "emotional_reappraisal",
    emotion: "Tiefe Enttäuschung, depressive Niedergeschlagenheit und Versagensgefühl",
    scenario:
      "Über sechs Monate hinweg hast du intensiv an deiner experimentellen medizinischen Diplomarbeit geforscht und dein erstes Manuskript bei einem renommierten Fachjournal eingereicht. Heute erhältst du die Benachrichtigung: „Rejected“. Ein Gutachter kritisiert deine statistische Methodik mit harschen, herablassenden Worten und stellt die Aussagekraft deiner Ergebnisse komplett infrage. Du fühlst dich zutiefst niedergeschlagen, wertlos und denkst daran, deine wissenschaftliche Laufbahn für immer zu beenden.",
    goal: "Die akute Kränkung verarbeiten, die Kritik sachlich von der eigenen Person trennen und die wertvollen methodischen Kernhinweise für eine Neubearbeitung nutzen.",
    options: {
      A: "Ich verfasse eine zornige Replik an den Chefredakteur, in der ich dem Gutachter fachliche Inkompetenz und persönliche Voreingenommenheit vorwerfe.",
      B: "Ich lösche das Manuskript und die Daten sofort von meiner Festplatte, um mich nie wieder an diesen schmerzhaften Fehlschlag erinnern zu müssen.",
      C: "Ich tröste mich damit, dass das gesamte Peer-Review-System ohnehin willkürlich sei, und reiche die identische Arbeit unverändert bei einem anderen Journal ein.",
      D: "Ich gebe mir einen Tag Zeit, um die emotionale Enttäuschung abklingen zu lassen, lese die Review-Berichte dann mit sachlicher Distanz noch einmal durch, trenne den schroffen Ton von den berechtigten statistischen Hinweisen und erarbeite mit meinem Betreuer einen klaren Überarbeitungsplan.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Eine affektive Beschwerde an die Redaktion beschädigt das wissenschaftliche Standing nachhaltig und löst keine methodische Schwachstelle.",
      B: "Das Löschen der Arbeit ist eine irreversible Überreaktion, die Monate harter Forschung vernichtet.",
      C: "Die Verleugnung von Mängeln führt beim nächsten Journal unweigerlich zur nächsten Ablehnung.",
      D: "Zeitliche Distanzierung ermöglicht die emotionale Entkopplung; kognitive Umbewertung nutzt die Kritikpunkte als Chance zur methodischen Schärfung der Publikation.",
    },
    explanationsIncorrect: {
      A: "Reagiert impulsiv und verbrennt akademische Brücken.",
      B: "Kapituliert endgültig und vernichtet wertvolle Forschungsarbeit.",
      C: "Ignoriert berechtigte wissenschaftliche Kritik aus gekränktem Stolz.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Ablehnungen sind der reguläre Alltag in der klinischen Forschung („Reject and Resubmit“). Wer den schroffen Tonfall des Gutachters emotional aushält und die substanzielle statistische Kritik sachlich herausfiltert, macht aus einer Kränkung den entscheidenden Hebel für eine erfolgreiche Veröffentlichung.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Schadet dem eigenen wissenschaftlichen Ruf durch Unbeherrschtheit.\n- **Option B:** Ist eine destruktive Kurzschlusshandlung.\n- **Option C:** Verharmlost methodische Mängel und provoziert erneute Ablehnung.",
  },

  // ─── Q09 (Mittel · acceptance) ─── Key: C
  {
    id: "SEK-ER-GP4-009",
    legacyId: "er-sim4-q09",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 9,
    difficulty: "Mittel",
    strategyType: "acceptance",
    emotion: "Überwältigendes Mitleid, emotionale Erschütterung und Tränendrang",
    scenario:
      "In der pädiatrischen Onkologie begleitest du die Knochenmarkpunktion eines sechsjährigen Mädchens, das trotz Lokalanästhesie ängstlich weint und verzweifelt nach seiner Mutter ruft. Du spürst, wie dir Tränen in die Augen schießen, dein Hals sich zuschnürt und eine Welle erdrückenden Mitgefühls dich fast handlungsunfähig macht. Deine Aufgabe ist es jedoch, in diesem Moment die Hand des Kindes zu halten und die Vitalparameter am Monitor lückenlos zu überwachen.",
    goal: "Das eigene Mitgefühl annehmen, aber in professionelle Fürsorge kanalisieren, um die medizinische Überwachung und Zuwendung verlässlich zu sichern.",
    options: {
      A: "Ich baue eine zynische Mauer auf, rede mir ein, dass Kinder immer übertreiben, und stumpfe meine Gefühle für den Rest der Famulatur vollständig ab.",
      B: "Ich breche neben dem Behandlungsbett laut schluchzend zusammen, sodass die Ärztin den Eingriff stoppen muss, um mich aus dem Raum zu begleiten.",
      C: "Ich akzeptiere meine Rührung als gesunde menschliche Reaktion, atme bewusst tief aus, um meine Stimme zu festigen, beruhige das Mädchen mit sanftem Zuspruch und führe die Monitorüberwachung konzentriert durch.",
      D: "Ich lasse die Hand des Kindes abrupt los, renne aus dem Behandlungszimmer und weigere mich, jemals wieder eine pädiatrische Station zu betreten.",
    },
    correctAnswer: "C",
    rationalesByOption: {
      A: "Zynismus und Gefühlsabstumpfung sind Vorstufen von Depersonalisation und Burnout, die die empathische Arzt-Patienten-Beziehung zerstören.",
      B: "Ein emotionaler Zusammenbruch belastet das ohnehin verängstigte Kind zusätzlich und unterbricht den invasiven Eingriff gefährlich.",
      C: "Akzeptanz der eigenen Emotionalität verhindert Verdrängungsstress; die Fokussierung auf sanfte Beruhigung und Vitalparameter kanalisiert die Emotion in praktische Fürsorge.",
      D: "Flucht lässt das Kind und das Behandlungsteam im Stich und stellt eine dysfunktionale Vermeidung dar.",
    },
    explanationsIncorrect: {
      A: "Führt zu emotionaler Abstumpfung und zynischer Haltung gegenüber Patienten.",
      B: "Verstärkt die Panik des Kindes und gefährdet die sterile Durchführung der Punktion.",
      C: "", // Korrekte Antwort
      D: "Verlässt den Patienten in akuter Not und flieht vor professioneller Verantwortung.",
    },
    explanation:
      "**Warum C am wirksamsten ist:** Professionelle Empathie bedeutet nicht Gefühlskälte, sondern die Fähigkeit, eigene Gefühle wahrzunehmen und sie in stabilisierende Zuwendung für den Patienten umzusetzen. Indem das Weinen des Kindes nicht mit eigenem Zusammenbruch, sondern mit verlässlicher Ruhe beantwortet wird, erfährt das Kind maximalen Halt.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Verwechselt professionelle Haltung mit schädlicher Abstumpfung.\n- **Option B:** Macht den Behandelnden selbst zum hilfebedürftigen Patienten.\n- **Option D:** Ist eine unprofessionelle Fluchtreaktion.",
  },

  // ─── Q10 (Schwer · goal_preservation) ─── Key: A
  {
    id: "SEK-ER-GP4-010",
    legacyId: "er-sim4-q10",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 10,
    difficulty: "Schwer",
    strategyType: "goal_preservation",
    emotion: "Panische Angst vor Bestrafung, Schock und starker Vertuschungsimpuls",
    scenario:
      "Am Ende einer anstrengenden Zwölfstundenschicht auf der Infektionsstation stellst du fest, dass du zwei Patientenakten verwechselt hast: Du hast für einen Patienten mit bekannter schwerer Penicillin-Allergie eine Infusion mit einem Betalaktam-Antibiotikum vorbereitet und bereits auf seinen Nachttisch gestellt. Die Infusion ist noch nicht angehängt, doch der Patient greift bereits nach der Klingel. Dir schießt das Blut in den Kopf, dein Herz rast und ein panischer Vertuschungsimpuls drängt dich, den Fehler heimlich zu beseitigen, um deinen Studienplatz nicht zu riskieren.",
    goal: "Den panischen Vertuschungsimpuls rigoros stoppen, die akute Patientengefahr sofort abwenden und den Beinahe-Fehler transparent und konstruktiv im Team aufarbeiten.",
    options: {
      A: "Ich stelle die Patientensicherheit kompromisslos über meine eigene Angst, betrete sofort das Zimmer, entferne die fehlerhafte Infusion vom Nachttisch, informiere unverzüglich die Stationsärztin über den Vorfall und dokumentiere den Beinahe-Fehler im CIRS-Meldesystem.",
      B: "Ich verlasse die Station hastig zum Schichtende und hoffe darauf, dass die Kollegin des Nachtdienstes beim Anhängen der Infusion den Allergiepass noch einmal kontrolliert.",
      C: "Ich warte ab, bis der Patient eingeschlafen ist, werfe die Infusionsflasche heimlich im Entsorgungsraum in den Müll und behaupte am nächsten Tag, die Apotheke habe das Medikament nicht geliefert.",
      D: "Ich verfalle in Schockstarre, verlasse die Klinik und rufe panisch einen Rechtsanwalt für Medizinrecht an, um mich über mögliche Haftungsansprüche beraten zu lassen.",
    },
    correctAnswer: "A",
    rationalesByOption: {
      A: "Unmittelbare Intervention schützt den Patienten vor einem potenziell tödlichen anaphylaktischen Schock; offene Kommunikation wahrt die Sicherheitskultur und schützt vor gravierenden Kunstfehlern.",
      B: "Das Hoffen auf die Wachsamkeit Dritter nimmt die Lebensgefahr des Patienten feige und grob fahrlässig in Kauf.",
      C: "Heimliche Vertuschung ist ein schwerer ethischer und juristischer Vertrauensbruch, der Systemfehler verschleiert und Wiederholungen begünstigt.",
      D: "Rechtliche Grübeleien in der Akutsituation vergeuden lebenswichtige Minuten, in denen die Infusion fälschlicherweise verabreicht werden könnte.",
    },
    explanationsIncorrect: {
      A: "", // Korrekte Antwort
      B: "Nimmt eine lebensgefährliche Anaphylaxie des Patienten aus Angst vor Kritik billigend in Kauf.",
      C: "Vertuscht einen Beinahe-Fehler kriminell und verhindert notwendige Sicherheitsverbesserungen.",
      D: "Verharrt in selbstbezogener Panik, statt die unmittelbare Patientengefährdung zu stoppen.",
    },
    explanation:
      "**Warum A am wirksamsten ist:** Die höchste Stufe der emotionalen Selbstregulation in der Medizin besteht darin, eigene existenzielle Angst vor Sanktionen vollständig der Patientensicherheit unterzuordnen. Das sofortige Entfernen der Substanz und die transparente Meldung (CIRS) retten Leben und transformieren Fehler in kollektiven Schutz.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option B:** Verletzt die Garantenpflicht in unverantwortlicher Weise.\n- **Option C:** Ist betrügerische Vertuschung mit hohem Wiederholungsrisiko.\n- **Option D:** Lässt den Patienten in akuter Lebensgefahr allein.",
  },

  // ─── Q11 (Schwer · impulse_control) ─── Key: B
  {
    id: "SEK-ER-GP4-011",
    legacyId: "er-sim4-q11",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 11,
    difficulty: "Schwer",
    strategyType: "impulse_control",
    emotion: "Schreck, Bedrohung und reflexartiger Verteidigungs- oder Fluchtantrieb",
    scenario:
      "Auf der Palliativstation verstirbt ein hochbetagter Patient nach langer Krebserkrankung friedlich im Beisein des Behandlungsteams. Als du das Zimmer verlässt, stürmt der erwachsene Sohn des Verstorbenen auf dich zu, packt dich mit zitternden Händen am Kittel und schreit dich auf dem Flur verzweifelt an: „Sie Mörder! Sie haben meinen Vater mit Ihren Morphiumspritzen absichtlich getötet! Ich zeige Sie alle an!“ Du spürst den körperlichen Druck, einen massiven Adrenalinschub und den automatischen Reflex, ihn wütend wegzustoßen.",
    goal: "Den eigenen Flucht- oder Gegenangriffsreflex sicher beherrschen, körperliche Distanz deeskalierend herstellen und die Wut des Sohnes als Ausdruck akuter Trauer verstehen und auffangen.",
    options: {
      A: "Ich reiße mich mit einem kräftigen Stoß los, drücke den Sohn gegen die Wand und drohe ihm unmissverständlich mit der Polizei wegen tätlichen Angriffs auf Stationspersonal.",
      B: "Ich trete behutsam einen Schritt zurück, um mich ohne Aggression aus dem Griff zu lösen, halte ruhigen Blickkontakt, erkenne mit fester, aber sanfter Stimme seinen tiefen Schmerz an („Ich sehe, wie sehr Sie der Verlust Ihres Vaters erschüttert“) und biete ihm einen ruhigen Raum für ein Klärungsgespräch an.",
      C: "Ich beginne sofort auf dem Flur eine laute pharmakologische Verteidigungsrede, in der ich ihm anhand der Halbwertszeit von Morphin beweise, dass sein Vorwurf medizinisch unsinnig ist.",
      D: "Ich gerate in Panik, rufe laut um Hilfe, reiße mich los und renne in die Stationsküche, um mich dort einzuschließen.",
    },
    correctAnswer: "B",
    rationalesByOption: {
      A: "Physische Gewaltanwendung eskaliert die Situation zu einer Schlägerei und missachtet die Ausnahmesituation des Trauernden.",
      B: "Körperliche Entflechtung ohne Gegendruck schützt die eigene Unversehrtheit; die Validierung der Trauer hinter dem Vorwurf deeskaliert den emotionalen Ausnahmezustand wirksam.",
      C: "Rechthaberische Fachargumente verfehlen die emotionale Ebene des traumatisierten Sohnes völlig und wirken zynisch.",
      D: "Flucht unter Schreien verstärkt das Chaos auf der Station und lässt den Angehörigen in seiner Verzweiflung allein.",
    },
    explanationsIncorrect: {
      A: "Eskaliert zu körperlicher Gewalt gegen einen Angehörigen im Schockzustand.",
      B: "", // Korrekte Antwort
      C: "Antwortet auf akuten Schmerz mit deplatzierter Rechthaberei.",
      D: "Ist ein panischer Kontrollverlust, der die Stationsruhe sprengt.",
    },
    explanation:
      "**Warum B am wirksamsten ist:** Wut und Aggression bei Angehörigen unmittelbar nach dem Tod eines geliebten Menschen sind typische Schockreaktionen (Trauerphase nach Kübler-Ross). Deeskalation gelingt nur durch körperliche Beruhigung, ruhigen Blickkontakt und das Ansprechen des Schmerzes, statt sich auf inhaltliche Schulddebatten einzulassen.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Eskaliert eine Trauerkrise in einen Strafrechtsfall.\n- **Option C:** Ist empathieloser Intellektualismus im falschen Moment.\n- **Option D:** Verbreitet Panik auf einer Station, die Ruhe erfordert.",
  },

  // ─── Q12 (Schwer · social_support) ─── Key: D
  {
    id: "SEK-ER-GP4-012",
    legacyId: "er-sim4-q12",
    simulationId: "generalprobe-4",
    subtest: "ER",
    questionNumber: 12,
    difficulty: "Schwer",
    strategyType: "social_support",
    emotion: "Verzweiflung, Scham über Überlastung und Angst vor Gesichtsverlust",
    scenario:
      "Im vierten Monat deines Praktischen Jahres (PJ) in der Inneren Medizin bist du seit Wochen chronisch erschöpft: Täglich elf Stunden auf Station, permanente Unterbesetzung, unbezahlte Überstunden und kaum Zeit für eine Pause. Du bemerkst an dir eine beängstigende emotionale Kälte und zynische Gedanken gegenüber schwerstkranken Patienten. Morgens wachst du mit Magenkrämpfen und innerer Leere auf. Du schämst dich zutiefst für deinen Zynismus, hast aber panische Angst, als Versager abgestempelt zu werden, wenn du deine Belastungsgrenze eingestehst.",
    goal: "Die falsche Scham über die Belastungsgrenze überwinden, die Warnsignale des Körpers ernst nehmen und professionelle Unterstützung sowie strukturelle Entlastung einfordern.",
    options: {
      A: "Ich bekämpfe die Symptome mit hochdosierten Beruhigungsmitteln und Energy-Drinks, um die verbleibenden PJ-Monate durchzustehen, da Belastbarkeit die Grundvoraussetzung für eine Klinikkarriere ist.",
      B: "Ich breche das Medizinstudium sofort und endgültig ab, weil mein Zynismus beweist, dass ich für den Arztberuf menschlich ungeeignet und charakterlich verdorben bin.",
      C: "Ich mache einfach wie bisher weiter und lasse meinen Zynismus und meine Erschöpfung offen an den Pflegekräften und Patienten aus, um mir innerlich Luft zu machen.",
      D: "Ich mache mir bewusst, dass Zynismus ein typisches Warnsignal für ein beginnendes Burnout-Syndrom ist, überwinde die Scham und suche das vertrauliche Gespräch mit dem PJ-Beauftragten und der Betriebsärztin, um Dienstzeiten zu begrenzen und professionelle Begleitung in Anspruch zu nehmen.",
    },
    correctAnswer: "D",
    rationalesByOption: {
      A: "Substanzmissbrauch zur Aufrechterhaltung übermäßiger Leistungsfähigkeit führt geradewegs in Abhängigkeit und physischen Kollaps.",
      B: "Voreiliger Studienabbruch ist eine katastrophisierende Fehlentscheidung infolge eines behandelbaren und verbreiteten Überlastungssyndroms.",
      C: "Das Ausleben des Zynismus schädigt die Patientenfürsorge fundamental und zerstört das Arbeitsklima.",
      D: "Kognitive Entstigmatisierung des Erschöpfungszustands und Inanspruchnahme von institutioneller Hilfe (Betriebsarzt/PJ-Leitung) schützen die langfristige Gesundheit und Handlungsfähigkeit.",
    },
    explanationsIncorrect: {
      A: "Gefährdet die körperliche Gesundheit durch Drogenmissbrauch und verleugnet die Realität.",
      B: "Reagiert mit fatalistischer Selbstaufgabe auf eine strukturelle Überlastung.",
      C: "Macht hilflose Patienten zu Opfern eigener Frustration.",
      D: "", // Korrekte Antwort
    },
    explanation:
      "**Warum D am wirksamsten ist:** Depersonalisation und Zynismus gegenüber Patienten sind Kernmerkmale des klinischen Burnouts („Maslach Burnout Inventory“). Sie sind kein persönlicher Charakterfehler, sondern das Resultat chronischer Überlastung. Die professionelle Inanspruchnahme von Unterstützung und die Durchsetzung regulärer Arbeitszeiten sichern die Patientenversorgung und das eigene Überleben im Arztberuf.\n\n**Warum die anderen Optionen weniger geeignet sind:**\n- **Option A:** Führt in die Suchtfalle und den vollständigen Zusammenbruch.\n- **Option B:** Zerstört eine Ausbildung aus falscher Scham.\n- **Option C:** Ist ein schwerer Verstoß gegen das ärztliche Berufssethos.",
  },
];

export const GENERALPROBE_4_ER_SIMULATION_DATA: ErSimulationData = {
  simulationId: "generalprobe-4",
  simNumber: 4,
  title: "MedAT-H Generalprobe #4 — Emotionen regulieren",
  subtitle: "12 Aufgaben · 18 Min. Prüfungszeit (1080s) · Situative Zielerreichung & Emotionsregulation",
  timeLimitSeconds: 18 * 60,
  questions: RAW_GENERALPROBE_4_ER_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #4 runtime and review engine
 */
export const GENERALPROBE_4_ER_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_ER_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = erQuestionToStoredQuestion(q, GENERALPROBE_4_ER_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-ER-GP4-${numStr}`,
      legacyId: `er-sim4-q${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "ER", "Emotionen regulieren", "Generalprobe #4", `SEK-ER-GP4-${numStr}`],
      erData: {
        ...q,
        id: `SEK-ER-GP4-${numStr}`,
        legacyId: `er-sim4-q${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
