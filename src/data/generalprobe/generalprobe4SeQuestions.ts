/**
 * MedAT SEK — Soziales Entscheiden (SE) — Generalprobe #4
 * Exactly 14 Questions · 21 Minutes Exam Time (1260 seconds, 90s / task)
 * 
 * IDs: SEK-SE-GP4-001 through SEK-SE-GP4-014 (aliased to legacy se-sim4-01 .. 14)
 * 
 * Specifications:
 * - Exactly 14 ethical/social dilemmas assessing prioritization of considerations (Beauchamp & Childress / Kohlberg)
 * - 5 distinct considerations per situation (A–E)
 * - Full ranking task from Rank 1 (highest importance) to Rank 5 (lowest importance)
 * - Every rank 1..5 used exactly once in each question (bijective permutation)
 * - Non-trivial reference permutations across all questions (no monotonic 1-2-3-4-5 guessing patterns)
 * - Difficulty distribution: Exactly 4 Leicht (28.6%), 7 Mittel (50.0%), 3 Schwer (21.4%)
 * - Scored via quadratic distance D = sum (r_user - r_ref)^2 (max D=40, normalized score 1 - D/40)
 * - Complete didactic rationale for each rank and comprehensive explanation
 */

import type { StoredQuestion } from "../questions/types";
import type { SeQuestionData, SeSimulationData } from "../questions/se/types";
import { toStoredQuestion } from "../questions/se/types";

export const RAW_GENERALPROBE_4_SE_QUESTIONS: SeQuestionData[] = [
  // ─── Q01 (Leicht · Patientendatenschutz & Social Media) ───
  {
    id: "SEK-SE-GP4-001",
    legacyId: "se-sim4-01",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 1,
    difficulty: "Leicht",
    scenario:
      "Ein Assistenzarzt fotografiert auf der urologischen Station eine extrem seltene dermatologische Genitalläsion eines 35-jährigen Patienten mit seinem privaten Smartphone und postet das Bild ohne schriftliche Einwilligung in eine unverschlüsselte universitäre Messenger-Gruppe („Lern-Chat“ mit 80 Studierenden). Zwar ist das Gesicht nicht abgebildet, doch am Oberschenkel ist ein auffälliges, individuelles Tattoo klar erkennbar. Ein Medizinstudent in der Gruppe bemerkt sofort die Gefahr, dass der Patient im privaten Umfeld zweifelsfrei identifiziert werden kann.",
    decisionContext: "Schutz der Privatsphäre und Schweigepflicht vs. Lehreifer, Bequemlichkeit und kollegiale Scheu",
    considerations: [
      {
        id: "A",
        text: "Welche Bequemlichkeit der schnelle Bildaustausch über private Messenger für die studentische Lehre und Fallbesprechung bietet.",
      },
      {
        id: "B",
        text: "Wie der Assistenzarzt kollegial und diskret darauf hingewiesen werden kann, das Bild sofort aus dem Chat zu löschen, ohne seine berufliche Autorität vor den Studierenden zu untergraben.",
      },
      {
        id: "C",
        text: "Welche dienstrechtlichen und strafrechtlichen Konsequenzen dem Assistenzarzt bei Bekanntwerden der Datenschutzverletzung drohen.",
      },
      {
        id: "D",
        text: "Wie ein institutionelles Bewusstsein für Datenschutz in Messenger-Gruppen durch offizielle Schulungen in der Klinik gestärkt werden kann.",
      },
      {
        id: "E",
        text: "Welches fundamentale Recht der Patient auf informationelle Selbstbestimmung und Schutz seiner intimsten Privatsphäre vor De-Anonymisierung hat.",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1,
    },
    competencyTags: ["confidentiality", "data_privacy", "patient_autonomy", "professionalism"],
    explanation:
      "Der Schutz der Intimsphäre und die Abwendung einer akuten De-Anonymisierung des Patienten stehen ethisch und rechtlich an oberster Stelle (E = Rang 1). Die unmittelbare Schadensbegrenzung durch sofortige Löschung des Bildes aus dem Chat muss unverzüglich eingeleitet werden (B = Rang 2). Rechtliche Konsequenzen für den Verursacher sichern die Verbindlichkeit der Schweigepflicht ab (C = Rang 3). Präventive Schulungen schaffen langfristige Strukturen, lösen aber nicht die akute Krise (D = Rang 4). Bequemlichkeit beim Medienkonsum ist moralisch völlig irrelevant und darf niemals als Rechtfertigung dienen (A = Rang 5).",
    rationaleByRank: {
      E: "Rang 1: Der Schutz der Intimsphäre und die Abwendung einer akuten De-Anonymisierung des Patienten stehen ethisch und rechtlich an oberster Stelle.",
      B: "Rang 2: Die unmittelbare Schadensbegrenzung durch sofortige Löschung des Bildes aus dem Chat muss unverzüglich eingeleitet werden.",
      C: "Rang 3: Gesetzliche und disziplinarische Konsequenzen sichern die Verbindlichkeit der Schweigepflicht ab.",
      D: "Rang 4: Präventive Schulungen schaffen langfristige Strukturen, lösen aber nicht die akute Gefährdung.",
      A: "Rang 5: Bequemlichkeit beim Medienkonsum ist moralisch völlig irrelevant und darf niemals als Rechtfertigung für Rechtsbrüche dienen.",
    },
  },

  // ─── Q02 (Leicht · Wissenschaftliche Redlichkeit bei Projektarbeit) ───
  {
    id: "SEK-SE-GP4-002",
    legacyId: "se-sim4-02",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 2,
    difficulty: "Leicht",
    scenario:
      "Drei Medizinstudierende müssen für ein benotetes Forschungsmodul gemeinsam eine wissenschaftliche Übersichtsarbeit einreichen. Wenige Stunden vor dem elektronischen Abgabetermin stellt ein Gruppenmitglied fest, dass der dritte Kommilitone wesentliche Abschnitte seines Kapitels wortwörtlich aus einer fremden, unveröffentlichten Habilitationsschrift kopiert hat – ohne Zitat oder Quellenangabe. Als sie ihn konfrontieren, bittet er weinend darum, die Arbeit so abzugeben: Er habe Prüfungsangst gehabt, und bei einem Plagiatsverfahren drohe ihm die Exmatrikulation.",
    decisionContext: "Wissenschaftliche Integrität, Fairness und Täuschungsverbot vs. falsches Gruppenmitleid und Loyalitätsdruck",
    considerations: [
      {
        id: "A",
        text: "Wie die beiden ehrlichen Gruppenmitglieder ihre eigene Prüfungsleistung vor der drohenden Aberkennung und Sanktionierung wegen Mittäterschaft schützen können.",
      },
      {
        id: "B",
        text: "Welche fundamentale Pflicht zur wissenschaftlichen Redlichkeit und zum Täuschungsverbot gegenüber der universitären Prüfungsordnung und der Wissenschaftsgemeinschaft besteht.",
      },
      {
        id: "C",
        text: "Welche Möglichkeiten einer fairen Fristverlängerung oder Nachbesserung bestehen, um dem Kommilitonen eine Chance auf eigene redliche Leistungserbringung zu geben.",
      },
      {
        id: "D",
        text: "Ob ein offener Konflikt kurz vor Abgabe das freundschaftliche Verhältnis der Studierenden im selben Studienjahrgang dauerhaft belastet.",
      },
      {
        id: "E",
        text: "Welche gravierenden existentiellen Folgen (Exmatrikulation, Studienplatzverlust) dem fehlbaren Kommilitonen bei einer offiziellen Meldung drohen.",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4,
    },
    competencyTags: ["scientific_integrity", "justice", "academic_ethics", "fairness"],
    explanation:
      "Wissenschaftliche Integrität und Wahrheit sind das unverhandelbare Fundament jeder akademischen Forschung (B = Rang 1). Die Abwendung ungerechtfertigter Sanktionen von unschuldigen Gruppenmitgliedern ist eine direkte Pflicht der Gerechtigkeit (A = Rang 2). Das Suchen nach konstruktiver Nachbesserung oder Fristverlängerung verbindet Konsequenz mit Verhältnismäßigkeit (C = Rang 3). Persönliche Härte für den Plagiator ist die absehbare Folge eigenen Fehlverhaltens und wiegt weniger als die Aufrechterhaltung wissenschaftlicher Standards (E = Rang 4). Angst vor Streit im Freundeskreis ist eine opportunistische Erwägung von geringstem moralischen Gewicht (D = Rang 5).",
    rationaleByRank: {
      B: "Rang 1: Wissenschaftliche Integrität und Wahrheit sind das unverhandelbare Fundament jeder akademischen Forschung.",
      A: "Rang 2: Die Abwendung ungerechtfertigter Sanktionen von unschuldigen Gruppenmitgliedern ist eine direkte Pflicht der Gerechtigkeit.",
      C: "Rang 3: Das Suchen nach konstruktiver Nachbesserung oder Fristverlängerung verbindet Konsequenz mit Verhältnismäßigkeit.",
      E: "Rang 4: Persönliche Härte für den Täter ist die Folge eigenen Fehlverhaltens und wiegt weniger als Prüfungsstandards.",
      D: "Rang 5: Angst vor Streit im Freundeskreis ist eine opportunistische Erwägung von geringstem moralischen Wert.",
    },
  },

  // ─── Q03 (Leicht · Fahreignung & Schutz der Allgemeinheit) ───
  {
    id: "SEK-SE-GP4-003",
    legacyId: "se-sim4-03",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 3,
    difficulty: "Leicht",
    scenario:
      "Ein 48-jähriger LKW-Fernfahrer erleidet nach einem Schädel-Hirn-Trauma wiederholt epileptische Anfälle mit plötzlichem Bewusstseinsverlust. Der Facharzt für Neurologie stellt leitliniengerecht ein absolutes Fahrverbot für mindestens zwölf Monate fest. Der Patient gerät in Rage und kündigt unmissverständlich an: „Ich fahre am Montag wieder meinen 40-Tonner auf der Autobahn! Wenn ich mich krankmelde, verliere ich meinen Job und meine Familie sitzt auf der Straße. Sie wagen es nicht, der Führerscheinbehörde auch nur ein Wort zu sagen!“",
    decisionContext: "Abwendung akuter Lebensgefahr für unbeteiligte Verkehrsteilnehmer vs. ärztliche Schweigepflicht und soziale Existenzangst",
    considerations: [
      {
        id: "A",
        text: "Welche akute, lebensbedrohliche Gefahr für unschuldige Verkehrsteilnehmer entsteht, wenn ein 40-Tonnen-LKW bei voller Fahrt durch einen epileptischen Anfall führerlos wird.",
      },
      {
        id: "B",
        text: "Wie dem Patienten sozialmedizinische Hilfen (z. B. Umschulung, Krankengeld, betrieblicher Innendienst) vermittelt werden können, um seine existenzielle Notlage abzufedern.",
      },
      {
        id: "C",
        text: "Ob der Patient nach einer behördlichen Meldung verärgert ist und den Neurologen auf Online-Portalen negativ bewertet.",
      },
      {
        id: "D",
        text: "Welche rechtlichen Voraussetzungen für das Durchbrechen der ärztlichen Schweigepflicht im Rahmen des rechtfertigenden Notstands vorliegen müssen.",
      },
      {
        id: "E",
        text: "Welche sozioökonomische Härte der Verlust des Arbeitsplatzes für den Patienten und seine unterhaltsberechtigte Familie bedeutet.",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 3,
      C: 5,
      D: 2,
      E: 4,
    },
    competencyTags: ["public_safety", "confidentiality", "duty_to_protect", "social_medicine"],
    explanation:
      "Der Schutz von Leib und Leben unbeteiligter Dritter vor tödlichen Verkehrsunfällen hat absolute Priorität vor allen anderen Belangen (A = Rang 1). Die formale juristische Abwägung zur rechtmäßigen Durchbrechung der Schweigepflicht bei Gefahr im Verzug sichert die Rechtssicherheit des Handelns (D = Rang 2). Das Angebot sozialmedizinischer Unterstützung lindert die wirtschaftliche Notlage des Betroffenen auf legitime Weise (B = Rang 3). Die wirtschaftliche Härte ist real, kann aber ein tödliches Risiko für die Allgemeinheit niemals rechtfertigen (E = Rang 4). Angst vor Reputationsverlust oder Online-Kritik ist egoistisch und ethisch völlig nachrangig (C = Rang 5).",
    rationaleByRank: {
      A: "Rang 1: Der Schutz von Leib und Leben unbeteiligter Dritter vor tödlichen Verkehrsunfällen hat absolute Priorität vor allen anderen Belangen.",
      D: "Rang 2: Die formale juristische Abwägung zur rechtmäßigen Durchbrechung der Schweigepflicht sichert das ärztliche Handeln ab.",
      B: "Rang 3: Das Angebot sozialmedizinischer Unterstützung lindert die wirtschaftliche Notlage des Betroffenen auf legitime Weise.",
      E: "Rang 4: Die wirtschaftliche Härte ist real, kann aber ein tödliches Risiko für die Allgemeinheit niemals rechtfertigen.",
      C: "Rang 5: Angst vor Reputationsverlust oder Online-Kritik ist egoistisch und ethisch völlig nachrangig.",
    },
  },

  // ─── Q04 (Leicht · Vorteilsannahme & Unabhängigkeit der Therapie) ───
  {
    id: "SEK-SE-GP4-004",
    legacyId: "se-sim4-04",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 4,
    difficulty: "Leicht",
    scenario:
      "Die Chefärztin einer orthopädischen Klinik erhält von einem führenden Implantathersteller eine persönliche Einladung zu einem viertägigen Fortbildungskongress in ein Fünf-Sterne-Luxusresort nach Dubai – inklusive Übernahme aller Kosten für Flug (Business Class), Hotel und Rahmenprogramm für sie und ihre Begleitperson. Im Begleitschreiben wird subtil darauf hingewiesen, dass das Unternehmen davon ausgehe, die Klinik werde bei der anstehenden Ausschreibung für Kniegelenk-Endoprothesen künftig primär auf ihre Produkte setzen, obwohl neutrale Registerdaten für diese Prothesen eine höhere Revisionsrate belegen.",
    decisionContext: "Evidenzbasierte Patientensicherheit und Unabhängigkeit der Indikationsstellung vs. persönliche Vorteilsnahme und Luxussponsoring",
    considerations: [
      {
        id: "A",
        text: "Welche dienstrechtlichen und strafrechtlichen Tatbestände der Vorteilsannahme und Bestechlichkeit im Gesundheitswesen berührt werden.",
      },
      {
        id: "B",
        text: "Welchen persönlichen Erholungs- und Netzwerkwert die Luxusreise für die Chefärztin und ihre Begleitung darstellt.",
      },
      {
        id: "C",
        text: "Wie das Vertrauen der Öffentlichkeit und der Patientenschaft in die Unbestechlichkeit medizinischer Entscheidungen gewahrt bleibt.",
      },
      {
        id: "D",
        text: "Welche fundamentale Pflicht zur Auswahl des qualitativ sichersten und evidenzbasierten Implantats zum Wohl der Patienten besteht.",
      },
      {
        id: "E",
        text: "Ob der Hersteller bei einer Ablehnung der Reise künftig weniger Sponsorengelder für universitäre Fortbildungsveranstaltungen der Abteilung bereitstellt.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 5,
      C: 2,
      D: 1,
      E: 4,
    },
    competencyTags: ["anti_corruption", "patient_safety", "evidence_based_medicine", "independence"],
    explanation:
      "Die Patientensicherheit und die Wahl des Implantats mit den geringsten Revisionsraten sind das oberste Gebot ärztlicher Ethik (D = Rang 1). Das Vertrauen der Bevölkerung in die Integrität ärztlicher Verordnungen ist essenziell für das gesamte Gesundheitssystem (C = Rang 2). Das strafrechtliche Verbot der Korruption setzt verbindliche Grenzen gegen unlautere Einflussnahme (A = Rang 3). Mögliche Sponsoringverluste für Kongresse sind von geringem Rang gegenüber Qualitätsstandards (E = Rang 4). Privater Luxus und Urlaubsfreuden sind als Entscheidungskriterium im medizinischen Kontext moralisch verwerflich (B = Rang 5).",
    rationaleByRank: {
      D: "Rang 1: Die Patientensicherheit und die Wahl des Implantats mit den geringsten Revisionsraten sind das oberste Gebot ärztlicher Ethik.",
      C: "Rang 2: Das Vertrauen der Bevölkerung in die Integrität ärztlicher Verordnungen ist essenziell für das gesamte Gesundheitssystem.",
      A: "Rang 3: Das strafrechtliche Verbot der Korruption setzt verbindliche Grenzen gegen unlautere Einflussnahme.",
      E: "Rang 4: Mögliche Sponsoringverluste für Kongresse sind von geringem Rang gegenüber Qualitätsstandards.",
      B: "Rang 5: Privater Luxus und Urlaubsfreuden sind als Entscheidungskriterium im medizinischen Kontext moralisch verwerflich.",
    },
  },

  // ─── Q05 (Mittel · Behandlungsverweigerung bei reifem Minderjährigen) ───
  {
    id: "SEK-SE-GP4-005",
    legacyId: "se-sim4-05",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 5,
    difficulty: "Mittel",
    scenario:
      "Ein 15-jähriger Jugendlicher mit akuter lymphatischer Leukämie (Heilungschance unter Chemotherapie ca. 85 %, ohne Behandlung innerhalb weniger Monate sicher tödlich) bricht nach zwei Zyklen die Therapie ab. Er leidet unter quälender Übelkeit, Schmerzen und Isolationsstress und erklärt bestimmt, keine weitere Infusion mehr zu dulden. Seine Eltern verlangen verzweifelt von der Oberärztin, die Behandlung gegen den Willen des Jungen mit richterlicher Genehmigung und Zwangsmitteln durchzusetzen. In einer psychiatrischen Begutachtung zeigt sich der Jugendliche voll urteilsfähig bezüglich der fatalen Konsequenzen seiner Verweigerung.",
    decisionContext: "Lebensrettung und Elternverantwortung bei heilbarer Erkrankung vs. wachsende Selbstbestimmung und Leidensbegrenzung des Jugendlichen",
    considerations: [
      {
        id: "A",
        text: "Wie die supportive Begleittherapie (z. B. modernste Antiemetika, Schmerztherapie, psychologische Unterstützung) optimiert werden kann, um das Leiden des Jugendlichen erträglich zu machen.",
      },
      {
        id: "B",
        text: "Wie der zeitliche und bürokratische Aufwand für das Einholen einer familiengerichtlichen Genehmigung für das Stationsteam minimiert werden kann.",
      },
      {
        id: "C",
        text: "Welche übergeordnete Garantenpflicht zur Erhaltung des Lebens eines noch minderjährigen Patienten bei exzellenter kurativer Prognose besteht.",
      },
      {
        id: "D",
        text: "Welche psychische Traumatisierung die zwangsweise Verabreichung einer monatelangen Chemotherapie für den Heranwachsenden bedeutet.",
      },
      {
        id: "E",
        text: "In welchem Umfang der einwilligungsfähige Jugendliche ein grundlegendes Recht auf körperliche Integrität und Verweigerung invasiver Maßnahmen besitzt.",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 5,
      C: 1,
      D: 4,
      E: 3,
    },
    competencyTags: ["pediatric_ethics", "patient_autonomy", "beneficence", "forced_treatment"],
    explanation:
      "Bei einem Minderjährigen mit einer heilbaren Erkrankung überwiegt die staatliche und ärztliche Schutzpflicht für das Leben vorübergehende Verzweiflungsentscheidungen (C = Rang 1). Die sofortige Optimierung der supportiven Therapie entzieht der Verweigerung die quälende Schmerzgrundlage und ermöglicht Kooperation ohne Zwang (A = Rang 2). Das wachsende Selbstbestimmungsrecht des Reifenden verlangt intensive Einbindung statt bloßer Bevormundung (E = Rang 3). Die Traumatisierung durch Zwangsmaßnahmen muss sorgsam gegen den definitiven Tod abgewogen werden (D = Rang 4). Bürokratischer Aufwand des Gerichtsverfahrens ist ethisch irrelevant (B = Rang 5).",
    rationaleByRank: {
      C: "Rang 1: Bei einem Minderjährigen mit einer heilbaren Erkrankung überwiegt die staatliche und ärztliche Schutzpflicht für das Leben vorübergehende Verzweiflungsentscheidungen.",
      A: "Rang 2: Die sofortige Optimierung der supportiven Therapie entzieht der Verweigerung die quälende Schmerzgrundlage und ermöglicht Kooperation ohne Zwang.",
      E: "Rang 3: Das wachsende Selbstbestimmungsrecht des Reifenden verlangt intensive Einbindung statt bloßer Bevormundung.",
      D: "Rang 4: Die Traumatisierung durch Zwangsmaßnahmen muss sorgsam gegen den definitiven Tod abgewogen werden.",
      B: "Rang 5: Bürokratischer Aufwand des Gerichtsverfahrens ist ethisch irrelevant.",
    },
  },

  // ─── Q06 (Mittel · Recht auf Kenntnis der genetischen Abstammung) ───
  {
    id: "SEK-SE-GP4-006",
    legacyId: "se-sim4-06",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 6,
    difficulty: "Mittel",
    scenario:
      "Eine 22-jährige Frau leidet an einer progredienten Kardiomyopathie unklarer Genese, die eine zielgerichtete medikamentöse Therapie erfordert. Sie wurde durch heterologe Samenspende gezeugt. Die Leiterin der Reproduktionsklinik verfügt über die Spenderakte aus dem Jahr 2002. Damals wurde dem Samenspender vertraglich absolute lebenslange Anonymität zugesichert. Der Spender, heute Familienvater, weigert sich auf diskrete Voranfrage strikt, seine Identität oder medizinische Daten preiszugeben, da er um den Frieden seiner jetzigen Familie fürchtet.",
    decisionContext: "Recht auf Kenntnis der biologischen Abstammung und lebenswichtige medizinische Diagnostik vs. Vertrauensschutz und Privatsphäre des Spenders",
    considerations: [
      {
        id: "A",
        text: "Welches verfassungsrechtliche Persönlichkeitsrecht die junge Frau auf Kenntnis ihrer biologischen Herkunft und relevanter genetischer Krankheitsrisiken hat.",
      },
      {
        id: "B",
        text: "Wie die lebensnotwendigen genetischen Befunde an die behandelnden Kardiologen übermittelt werden können, ohne die persönliche Identität des Spenders unnötig offenzulegen.",
      },
      {
        id: "C",
        text: "Welchen legitimen Vertrauensschutz der Spender auf die damals rechtmäßig vereinbarte Anonymitätsgarantie besitzt.",
      },
      {
        id: "D",
        text: "Welche wirtschaftlichen Haftungsrisiken der Samenbank bei einem Bruch historischer Verträge drohen.",
      },
      {
        id: "E",
        text: "Welche emotionale Verunsicherung und Konflikte die Kontaktaufnahme für die jetzige Familie des Spenders bedeuten könnte.",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4,
    },
    competencyTags: ["genetic_ancestry", "donor_conception", "patient_rights", "confidentiality"],
    explanation:
      "Das Grundrecht auf Kenntnis der eigenen Abstammung und die Abklärung existenzieller Herzerkrankungen wiegen ethisch und rechtlich schwerer als formale Verträge der Vergangenheit (A = Rang 1). Eine gestufte Datenweitergabe (anonymisierte medizinische Fakten vor persönlicher Identität) schützt beide Seiten optimal (B = Rang 2). Der historische Vertrauensschutz des Spenders ist ein beachtliches Rechtsgut, das nicht mutwillig ignoriert werden darf (C = Rang 3). Familiäre Irritationen beim Spender sind bedauerlich, können aber die Lebensrettung der Nachfahrin nicht sperren (E = Rang 4). Wirtschaftliche Haftungsrisiken der Klinik rangieren ganz unten (D = Rang 5).",
    rationaleByRank: {
      A: "Rang 1: Das Grundrecht auf Kenntnis der eigenen Abstammung und die Abklärung existenzieller Herzerkrankungen wiegen schwerer als formale Verträge der Vergangenheit.",
      B: "Rang 2: Eine gestufte Datenweitergabe schützt beide Seiten optimal und sichert die medizinische Therapie.",
      C: "Rang 3: Der historische Vertrauensschutz des Spenders ist ein beachtliches Rechtsgut, das nicht leichtfertig ignoriert werden darf.",
      E: "Rang 4: Familiäre Irritationen beim Spender können die gesundheitliche Abklärung der Nachfahrin nicht sperren.",
      D: "Rang 5: Wirtschaftliche Haftungsrisiken der Klinik rangieren ganz unten.",
    },
  },

  // ─── Q07 (Mittel · Therapeutisches Missverständnis in Phase-I-Studien) ───
  {
    id: "SEK-SE-GP4-007",
    legacyId: "se-sim4-07",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 7,
    difficulty: "Mittel",
    scenario:
      "Eine Onkologin rekrutiert Probanden für eine Phase-I-Studie („First-in-Human“) mit einem neuartigen Antikörperkonstrukt bei austherapiertem metastasiertem Pankreaskarzinom. Ein 58-jähriger Patient, der keine regulären Behandlungsoptionen mehr hat, äußert im Aufklärungsgespräch freudig: „Gott sei Dank bin ich in der Studie! Dieses Wundermittel wird meinen Tumor besiegen und mich heilen.“ Die Ärztin weiß, dass Phase-I-Studien primär der Dosis- und Toxizitätsfindung dienen und ein therapeutischer Eigennutzen extrem unwahrscheinlich ist. Klärt sie den Patienten schonungslos auf, droht er die Teilnahme zu verweigern, wodurch die dringend benötigte Studienkohorte nicht zustande käme.",
    decisionContext: "Wahrhaftige Aufklärung (Informed Consent) und Schutz vor Instrumentalisierung vs. wissenschaftlicher Rekrutierungsdruck",
    considerations: [
      {
        id: "A",
        text: "Wie dem Patienten trotz realistischer Dämpfung seiner falschen Heilungshoffnung eine professionelle palliative Weiterbetreuung und Beistand zugesichert werden können.",
      },
      {
        id: "B",
        text: "Welcher wissenschaftliche Erkenntnisgewinn durch die rechtzeitige Fertigstellung der Phase-I-Studie für künftige Generationen von Krebspatienten erzielt wird.",
      },
      {
        id: "C",
        text: "Ob die Prüfärztin bei Nichterreichen der Rekrutierungsquote Nachteile für ihre eigene akademische Habilitation und Drittmittelförderung erleidet.",
      },
      {
        id: "D",
        text: "Welche schweren, potenziell tödlichen Toxizitäten und Nebenwirkungen dem Patienten durch die experimentelle Substanz ohne garantierten Nutzen drohen.",
      },
      {
        id: "E",
        text: "Welche unbedingte Pflicht zur Beseitigung des therapeutischen Missverständnisses („Therapeutic Misconception“) besteht, um die freie und informierte Einwilligung des Patienten zu sichern.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 4,
      C: 5,
      D: 2,
      E: 1,
    },
    competencyTags: ["informed_consent", "clinical_trials", "therapeutic_misconception", "non_maleficence"],
    explanation:
      "Das Verbot der Instrumentalisierung eines sterbenden Patienten verlangt die lückenlose Beseitigung falscher Heilungshoffnungen zur Wahrung der Einwilligungsfähigkeit (E = Rang 1). Die Aufklärung über toxische Risiken schützt vor unnötigem Schaden am Lebensende (D = Rang 2). Das gleichzeitige Angebot palliativer Begleitung verhindert, dass der Patient in Hoffnungslosigkeit stürzt (A = Rang 3). Zukünftiger Nutzen für die Allgemeinheit darf niemals durch Täuschung des Einzelnen erzwungen werden (B = Rang 4). Eigene akademische Karriereinteressen der Prüfärztin sind moralisch völlig nachrangig (C = Rang 5).",
    rationaleByRank: {
      E: "Rang 1: Das Verbot der Instrumentalisierung eines sterbenden Patienten verlangt die lückenlose Beseitigung falscher Heilungshoffnungen zur Wahrung der Einwilligungsfähigkeit.",
      D: "Rang 2: Die Aufklärung über toxische Risiken schützt vor unnötigem Schaden am Lebensende.",
      A: "Rang 3: Das gleichzeitige Angebot palliativer Begleitung verhindert, dass der Patient in Hoffnungslosigkeit stürzt.",
      B: "Rang 4: Zukünftiger Nutzen für die Allgemeinheit darf niemals durch Täuschung des Einzelnen erzwungen werden.",
      C: "Rang 5: Eigene akademische Karriereinteressen der Prüfärztin sind moralisch völlig nachrangig.",
    },
  },

  // ─── Q08 (Mittel · Allokation knapper Arzneimittel & Off-Label-Use) ───
  {
    id: "SEK-SE-GP4-008",
    legacyId: "se-sim4-08",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 8,
    difficulty: "Mittel",
    scenario:
      "Aufgrund globaler Lieferengpässe steht in einer großen Gemeinschaftspraxis nur noch ein minimales Restkontingent an GLP-1-Rezeptoragonisten (Semaglutid) zur Verfügung. Das Medikament ist für mehrere betreute Patienten mit instabilem Typ-2-Diabetes und fortgeschrittener diabetischer Nephropathie zwingend indiziert, um ein drohendes Nierenversagen zu verhindern. Ein prominenter, wohlhabender Privatpatient ohne Diabetes (BMI 27) verlangt vom Praxisinhaber vehement ein Privatrezept für das Präparat als Lifestyle-Gewichtsreduktionsmittel („Abnehmspritze“) und bietet an, die Behandlung mit dem dreifachen GOÄ-Satz bar zu honorieren und der Praxis ein teures Ultraschallgerät zu stiften.",
    decisionContext: "Medizinische Indikation und Bedarfsverteilungsgerechtigkeit vs. Patientenautonomie und finanzielle Vorteilsangebote",
    considerations: [
      {
        id: "A",
        text: "Welche erheblichen finanziellen Vorteile und Stiftungsgelder der Praxis durch die Annahme des lukrativen Privatangebots zufließen würden.",
      },
      {
        id: "B",
        text: "Welche medizinische Schadensabwendung bei den schwer kranken Typ-2-Diabetikern durch die Sicherstellung der lebensnotwendigen Erhaltungstherapie geboten ist.",
      },
      {
        id: "C",
        text: "Wie dem übergewichtigen Privatpatienten evidenzbasierte, alternative Lebensstil- und Ernährungskonzepte zur Gewichtsreduktion vermittelt werden können.",
      },
      {
        id: "D",
        text: "Welche ethischen und arzneimittelrechtlichen Grundsätze der Priorisierung nach objektivem medizinischem Bedarf bei akuten Mangelressourcen gelten.",
      },
      {
        id: "E",
        text: "Ob der vermögende Patient die Praxis verlässt und seinen einflussreichen Bekanntenkreis von einem Besuch der Gemeinschaftspraxis abrät.",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 1,
      C: 3,
      D: 2,
      E: 4,
    },
    competencyTags: ["resource_allocation", "distributive_justice", "off_label", "medical_ethics"],
    explanation:
      "Die Abwendung schwerer Organschäden (Nierenversagen) bei Diabetikern durch kontinuierliche Arzneimittelversorgung hat absoluten Vorrang (B = Rang 1). Verteilungsgerechtigkeit im Mangel verlangt zwingend die Allokation nach medizinischer Dringlichkeit statt Zahlungskraft (D = Rang 2). Das Angebot adäquater Alternativberatung für den Abnehmwilligen wahrt die professionelle Arzt-Patienten-Beziehung (C = Rang 3). Mögliche Verstimmungen des Privatpatienten wiegen weniger als medizinische Notwendigkeiten (E = Rang 4). Das Annehmen von Sonderzahlungen zur Bevorzugung Wohlhabender ist korrupt und moralisch unzulässig (A = Rang 5).",
    rationaleByRank: {
      B: "Rang 1: Die Abwendung schwerer Organschäden bei Diabetikern durch kontinuierliche Arzneimittelversorgung hat absoluten Vorrang.",
      D: "Rang 2: Verteilungsgerechtigkeit im Mangel verlangt zwingend die Allokation nach medizinischer Dringlichkeit statt Zahlungskraft.",
      C: "Rang 3: Das Angebot adäquater Alternativberatung für den Abnehmwilligen wahrt die professionelle Arzt-Patienten-Beziehung.",
      E: "Rang 4: Mögliche Verstimmungen des Privatpatienten wiegen weniger als medizinische Notwendigkeiten.",
      A: "Rang 5: Das Annehmen von Sonderzahlungen zur Bevorzugung Wohlhabender ist korrupt und moralisch unzulässig.",
    },
  },

  // ─── Q09 (Mittel · Whistleblowing bei Hygiene- und Sicherheitsmängeln) ───
  {
    id: "SEK-SE-GP4-009",
    legacyId: "se-sim4-09",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 9,
    difficulty: "Mittel",
    scenario:
      "Ein Fachkrankenpfleger auf einer interdisziplinären Intensivstation beobachtet seit Wochen, dass der leitende Oberarzt bei der Anlage zentraler Venenkatheter (ZVK) routinemäßig auf sterile Abdecktücher und chirurgische Händedesinfektion verzichtet, um Zeit zu sparen. Auf der Station ist es in den letzten zwei Monaten zu einer auffälligen Häufung schwerer ZVK-Sepsisfälle mit multiresistenten Keimen gekommen, an denen bereits zwei Patienten verstorben sind. Ein vorsichtiger Hinweis des Pflegers unter vier Augen wurde vom Oberarzt mit massiven Einschüchterungen („Wenn Sie hier noch einmal Vorwürfe erheben, sorge ich für Ihre fristlose Entlassung“) abgewürgt.",
    decisionContext: "Garantenstellung für das Leben intensivpflichtiger Patienten vs. Hierarchiehörigkeit, Angst vor Mobbing und Arbeitsplatzverlust",
    considerations: [
      {
        id: "A",
        text: "Wie die internen Meldekanäle (z. B. Krankenhaushygiene, klinisches Risikomanagement/CIRS, ärztlicher Direktor) strukturiert genutzt werden können, um eine lückenlose Aufklärung zu erzwingen.",
      },
      {
        id: "B",
        text: "Wie der Pfleger seinen eigenen Arbeitsplatz und seine Familie vor ungerechtfertigten disziplinarischen Racheakten des Oberarztes arbeitsrechtlich absichern kann.",
      },
      {
        id: "C",
        text: "Welche disziplinarischen Maßnahmen und Reputationsschäden dem Oberarzt und der gesamten Abteilung bei Bekanntwerden der Missstände drohen.",
      },
      {
        id: "D",
        text: "Welche vitale Pflicht zur sofortigen Abwendung lebensbedrohlicher nosokomialer Infektionen von den wehrlosen Intensivpatienten besteht.",
      },
      {
        id: "E",
        text: "Ob ein offener Konflikt die informelle Arbeitsatmosphäre und den Zusammenhalt im Pflegeteam kurzfristig belasten könnte.",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 3,
      C: 4,
      D: 1,
      E: 5,
    },
    competencyTags: ["patient_safety", "whistleblowing", "infection_control", "hierarchy"],
    explanation:
      "Die Garantenpflicht für das Leben wehrloser Patienten gebietet das sofortige Unterbinden lebensgefährlicher Hygieneverstöße (D = Rang 1). Die strukturierte Meldung an übergeordnete Stellen (Hygiene, Direktion) ist der wirksamste institutionelle Weg zur Behebung (A = Rang 2). Die arbeitsrechtliche Absicherung des Whistleblowers schützt das Recht auf Zivilcourage (B = Rang 3). Reputationsschäden des Vorgesetzten sind die gerechte Folge seiner groben Fahrlässigkeit (C = Rang 4). Sorge vor getrübter Arbeitsatmosphäre ist gegenüber tödlichen Sepsisfällen moralisch bedeutungslos (E = Rang 5).",
    rationaleByRank: {
      D: "Rang 1: Die Garantenpflicht für das Leben wehrloser Patienten gebietet das sofortige Unterbinden lebensgefährlicher Hygieneverstöße.",
      A: "Rang 2: Die strukturierte Meldung an übergeordnete Stellen ist der wirksamste institutionelle Weg zur Behebung.",
      B: "Rang 3: Die arbeitsrechtliche Absicherung des Whistleblowers schützt das Recht auf Zivilcourage.",
      C: "Rang 4: Reputationsschäden des Vorgesetzten sind die gerechte Folge seiner groben Fahrlässigkeit.",
      E: "Rang 5: Sorge vor getrübter Arbeitsatmosphäre ist gegenüber tödlichen Sepsisfällen moralisch bedeutungslos.",
    },
  },

  // ─── Q10 (Mittel · Verbindliche Patientenverfügung vs. Angehörigenwunsch) ───
  {
    id: "SEK-SE-GP4-010",
    legacyId: "se-sim4-10",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 10,
    difficulty: "Mittel",
    scenario:
      "Ein 32-jähriger Patient erleidet bei einem Autounfall ein massives Polytrauma mit hypovolämischem Schock. Im Schockraum ist zur Abwendung des Herz-Kreislauf-Stillstands die sofortige Gabe von Erythrozytenkonzentraten zwingend erforderlich. In der Brieftasche des Patienten befindet sich ein eindeutiger, notariell beglaubigter Ausweis der Zeugen Jehovas mit einer aktuellen Patientenverfügung, in der er jede Gabe von Fremdblut selbst bei unmittelbarer Lebensgefahr unmissverständlich untersagt. Seine nicht-gläubige Ehefrau bricht im Flur weinend zusammen und fleht das Team an: „Transfundieren Sie ihn bitte, retten Sie sein Leben! Wir haben ein einjähriges Kind, er kann uns doch nicht einfach verlassen!“",
    decisionContext: "Verbindlichkeit des antizipierten Patientenwillens vs. ärztliche Lebensrettungspflicht und Verzweiflung der Familie",
    considerations: [
      {
        id: "A",
        text: "Wie alle intensivmedizinischen Alternativen (z. B. Zell-Saver, Volumenexpander, Hyperoxie, Gerinnungsfaktoren) bis an die Grenze des Möglichen ausgeschöpft werden können.",
      },
      {
        id: "B",
        text: "Welche verfassungsrechtlich garantierte Verbindlichkeit der eindeutige, schriftlich dokumentierte Wille des einwilligungsfähigen Erwachsenen gegen fremde Eingriffe besitzt.",
      },
      {
        id: "C",
        text: "Welche ethische Pflicht zur Erhaltung des Lebens und zur Unterstützung der Familie mit einem kleinen Kind im Notfall empfunden wird.",
      },
      {
        id: "D",
        text: "Wie die verzweifelte Ehefrau durch Seelsorge und Krisenintervention im Schockraum menschlich aufgefangen werden kann.",
      },
      {
        id: "E",
        text: "Ob das Behandlungsteam bei Befolgung des Patientenwillens juristische Klagen der Ehefrau wegen unterlassener Hilfeleistung befürchten muss.",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 1,
      C: 4,
      D: 3,
      E: 5,
    },
    competencyTags: ["advance_directives", "patient_autonomy", "blood_transfusion", "emergency_ethics"],
    explanation:
      "Das Selbstbestimmungsrecht eines urteilsfähigen Menschen verbietet medizinische Behandlungen gegen seinen erklärten Willen, selbst wenn dies zum Tode führt (B = Rang 1). Die Maximaltherapie mit allen zulässigen blutfreien Alternativen ist die Pflicht gewissenhafter Nothilfe (A = Rang 2). Die empathische Betreuung der traumatisierten Ehefrau lindert menschliches Leid (D = Rang 3). Der Wunsch der Angehörigen auf Lebenserhaltung ist verständlich, kann aber den Willen des Patienten nicht brechen (C = Rang 4). Eigene Haftungsängste vor unbegründeten Klagen sind rechtlich geklärt und ethisch nachrangig (E = Rang 5).",
    rationaleByRank: {
      B: "Rang 1: Das Selbstbestimmungsrecht verbietet medizinische Behandlungen gegen den erklärten Willen, selbst wenn dies den Tod bedeutet.",
      A: "Rang 2: Die Maximaltherapie mit allen zulässigen blutfreien Alternativen ist die Pflicht gewissenhafter Nothilfe.",
      D: "Rang 3: Die empathische Betreuung der traumatisierten Ehefrau lindert menschliches Leid in der Akutkrise.",
      C: "Rang 4: Der Wunsch der Angehörigen auf Lebenserhaltung ist verständlich, kann aber den Willen des Patienten nicht brechen.",
      E: "Rang 5: Eigene Haftungsängste vor unbegründeten Klagen sind rechtlich geklärt und ethisch nachrangig.",
    },
  },

  // ─── Q11 (Mittel · Recht auf Nichtwissen bei genetischem Zufallsbefund) ───
  {
    id: "SEK-SE-GP4-011",
    legacyId: "se-sim4-11",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 11,
    difficulty: "Mittel",
    scenario:
      "Im Rahmen einer neurobiologischen MRT- und Sequenzierungsstudie an gesunden Probanden wird bei einer 23-jährigen Studentin zufällig eine eindeutig pathogene BRCA1-Mutation nachgewiesen, die ihr Lebenszeitrisiko für Mamma- und Ovarialkarzinome auf über 70 % steigert. Bei Studienbeginn hatte die Probandin in der Einwilligungserklärung explizit die Option gewählt: „Ich wünsche ausdrücklich keine Mitteilung über medizinische Zufallsbefunde.“ Die Studienleiterin weiß, dass engmaschige Früherkennung und prophylaktische Maßnahmen das Krebsrisiko drastisch senken und das Leben der jungen Frau retten könnten.",
    decisionContext: "Recht auf Nichtwissen und informationelle Selbstbestimmung vs. ärztliche Fürsorge und Lebensrettungspotenzial",
    considerations: [
      {
        id: "A",
        text: "Welche therapeutischen und präventiven Optionen (z. B. MRT-Screening, operative Prophylaxe) der Probandin bei Kenntnis des Befundes das Überleben sichern würden.",
      },
      {
        id: "B",
        text: "Wie ein behutsames Angebot eines vertraulichen Beratungsgesprächs formuliert werden kann, ohne die Probandin mit dem konkreten Mutationsbefund zu überfahren.",
      },
      {
        id: "C",
        text: "Welches fundamentale Grundrecht auf Nichtwissen („Recht auf Unwissenheit“) als Bestandteil der menschlichen Autonomie strikt zu achten ist.",
      },
      {
        id: "D",
        text: "Welche psychische Belastung, Krebsangst und Beeinträchtigung der Lebensqualität die ungebetene Aufdeckung einer fatalen Genmutation auslösen kann.",
      },
      {
        id: "E",
        text: "Wie die Studienleitung künftige Einwilligungserklärungen präziser gestalten kann, um solche ethischen Zwickmühlen von vornherein zu vermeiden.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 2,
      C: 1,
      D: 4,
      E: 5,
    },
    competencyTags: ["right_not_to_know", "genetics", "incidental_findings", "autonomy"],
    explanation:
      "Das Recht auf Nichtwissen ist ein Kernbereich des Persönlichkeitsrechts; Menschen dürfen nicht zur Konfrontation mit genetischen Risiken gezwungen werden (C = Rang 1). Ein ergebnisoffenes, vorsichtiges Gesprächsangebot zur Überprüfung des damaligen Willens wahrt Autonomie und Fürsorge zugleich (B = Rang 2). Das konkrete Präventionspotenzial rechtfertigt die Reflexion, darf aber die Willensentscheidung nicht brechen (A = Rang 3). Die Antizipation von Lebensangst begründet den hohen Wert des Nichtwissens (D = Rang 4). Formales Überarbeiten von Formularen dient der Verwaltung, löst aber nicht das akute Dilemma (E = Rang 5).",
    rationaleByRank: {
      C: "Rang 1: Das Recht auf Nichtwissen ist ein Kernbereich des Persönlichkeitsrechts; Menschen dürfen nicht zur Kenntnis genetischer Risiken gezwungen werden.",
      B: "Rang 2: Ein vorsichtiges Angebot zur Überprüfung des damaligen Willens wahrt Autonomie und Fürsorge zugleich.",
      A: "Rang 3: Das konkrete Präventionspotenzial rechtfertigt die Reflexion, darf aber die Willensentscheidung nicht brechen.",
      D: "Rang 4: Die Antizipation von Lebensangst begründet den hohen ethischen Wert des Nichtwissens.",
      E: "Rang 5: Formales Überarbeiten von Formularen dient der Verwaltung, löst aber nicht das akute Dilemma.",
    },
  },

  // ─── Q12 (Schwer · Kognitive Einschränkung & Patientengefährdung bei Landarzt) ───
  {
    id: "SEK-SE-GP4-012",
    legacyId: "se-sim4-12",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 12,
    difficulty: "Schwer",
    scenario:
      "Eine erfahrene Medizinische Fachangestellte arbeitet seit 25 Jahren in der einzigen Hausarztpraxis eines abgelegenen Alpentals. Ihr Chef, ein hochangesehener 71-jähriger Allgemeinmediziner, zeigt im letzten halben Jahr unübersehbare Zeichen einer beginnenden vaskulären Demenz: Er verwechselt Patientendosierungen gravierend (z. B. Insulin statt Antihypertensivum), vergisst Notfallbesuche und kann Laborwerte nicht mehr kohärent interpretieren. Mehrere Beinahe-Katastrophen konnten nur durch die Aufmerksamkeit der Praxisassistentin in letzter Sekunde verhindert werden. Ein vertrauliches Gespräch wies der Arzt zornig ab. Wenn sie die Ärztekammer informiert, droht der Entzug der Approbation, die Schließung der Praxis und der vollständige Zusammenbruch der hausärztlichen Versorgung des gesamten Tals.",
    decisionContext: "Unmittelbare Gefahrenabwehr für Patienten vor Behandlungsfehlern vs. regionale Unterversorgung und Lebenswerk des Arztes",
    considerations: [
      {
        id: "A",
        text: "Welche zwingende Garantenpflicht zur Abwendung irreversibler Behandlungsfehler und tödlicher Medikationsverwechslungen von den Patienten der Praxis besteht.",
      },
      {
        id: "B",
        text: "Welche existenzielle Zerstörung des Lebenswerks und welcher gesellschaftliche Ansehensverlust dem Arzt bei einem behördlichen Eingriff drohen.",
      },
      {
        id: "C",
        text: "Wie über die Kassenärztliche Vereinigung und die Gemeinde eine geordnete Praxisnachfolge oder Übergangsvertretung organisiert werden kann, um den Versorgungsnotstand abzuwenden.",
      },
      {
        id: "D",
        text: "Ob die Angestellte im Dorf als Verräterin geächtet wird, wenn sie behördliche Schritte einleitet.",
      },
      {
        id: "E",
        text: "Welche familiäre und kollegiale Unterstützung mobilisiert werden kann, um den Arzt zu einem freiwilligen, würdevollen Eintritt in den Ruhestand zu bewegen.",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 4,
      C: 2,
      D: 5,
      E: 3,
    },
    competencyTags: ["patient_safety", "impaired_physician", "duty_to_protect", "rural_healthcare"],
    explanation:
      "Der Schutz von Leib und Leben der Patienten vor tödlichen Fehldosierungen eines kognitiv beeinträchtigten Arztes steht über allem anderen (A = Rang 1). Die strukturierte Einbindung von Standesvertretung und Gemeinde sichert die kontinuierliche medizinische Versorgung des Tals (C = Rang 2). Ein letzter Versuch zur würdevollen freiwilligen Übergabe schont die menschliche Würde des Arztes (E = Rang 3). Mitleid mit dem Lebenswerk des Arztes darf niemals das Risiko von Patiententodesfällen rechtfertigen (B = Rang 4). Angst vor Dorfklatsch oder persönlicher Anfeindung ist moralisch völlig unbedeutend (D = Rang 5).",
    rationaleByRank: {
      A: "Rang 1: Der Schutz von Leib und Leben der Patienten vor tödlichen Fehldosierungen steht über allem anderen.",
      C: "Rang 2: Die strukturierte Einbindung von Standesvertretung und Gemeinde sichert die kontinuierliche medizinische Versorgung des Tals.",
      E: "Rang 3: Ein letzter Versuch zur würdevollen freiwilligen Übergabe schont die menschliche Würde des Arztes.",
      B: "Rang 4: Mitleid mit dem Lebenswerk des Arztes darf niemals das Risiko von Patiententodesfällen rechtfertigen.",
      D: "Rang 5: Angst vor Dorfklatsch oder persönlicher Anfeindung ist moralisch völlig unbedeutend.",
    },
  },

  // ─── Q13 (Schwer · Allokation teurer Gentherapeutika & Spendendruck) ───
  {
    id: "SEK-SE-GP4-013",
    legacyId: "se-sim4-13",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 13,
    difficulty: "Schwer",
    scenario:
      "An einer Universitätskinderklinik steht für zwei Säuglinge mit spinaler Muskelatrophie (SMA Typ 1) nur eine einzige sofort verfügbare Dosis eines ultra-teuren Gentherapeutikums (Onasemnogen-Abeparvovec) zur Verfügung, bevor die Charge verfällt. Säugling A (3 Monate alt) ist präsymptomatisch diagnostiziert worden; bei sofortiger Gabe hat das Kind eine über 90%ige Chance auf ein fast völlig normales motorisches Leben ohne Beatmung. Säugling B (9 Monate alt) ist bereits beatmungspflichtig mit ausgeprägter Tetraparese; die Therapie würde bei ihm lediglich das Fortschreiten verlangsamen, aber keine verlorenen motorischen Meilensteine wiederherstellen. Die Familie von Säugling B hat über soziale Medien Millionen gesammelt und droht mit einem verheerenden Shitstorm und Klagen, falls ihr Kind nicht sofort behandelt wird.",
    decisionContext: "Maximierung des langfristigen Überlebens- und Entwicklungspotenzials vs. mediale Erpressung und Spendendruck",
    considerations: [
      {
        id: "A",
        text: "Wie für Säugling B umgehend alternative medikamentöse Erhaltungstherapien (z. B. Nusinersen/Risdiplam) und maximale Palliation gesichert werden können.",
      },
      {
        id: "B",
        text: "Welche transparenten und justiziablen klinischen Vergabekriterien (Outcome-Chance, Indikationsschärfe) für die unanfechtbare Allokationsentscheidung dokumentiert werden müssen.",
      },
      {
        id: "C",
        text: "Welcher dramatisch höhere Zugewinn an gesunden Lebensjahren und motorischer Selbstständigkeit bei Säugling A durch die frühzeitige Gabe im präsymptomatischen Stadium erreicht werden kann.",
      },
      {
        id: "D",
        text: "Welcher massive Reputationsverlust und mediale Skandalisierungsdruck der Klinik droht, wenn die spendenstarke Familie von Kind B öffentlich protestiert.",
      },
      {
        id: "E",
        text: "Welche Verpflichtung zur Gleichbehandlung beider todkranker Kinder ohne Ansehen von sozialem Status oder Medienpräsenz der Eltern besteht.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 2,
      C: 1,
      D: 5,
      E: 4,
    },
    competencyTags: ["triage", "gene_therapy", "pediatric_ethics", "distributive_justice"],
    explanation:
      "In der Allokation knapper Hochleistungsmedizin gebietet das Prinzip des maximalen Nutzens (Rescue of Life Potential) die Zuteilung an das Kind mit der Aussicht auf ein gesundes, unbeeinträchtigtes Leben (C = Rang 1). Transparente, evidenzbasierte Allokationskriterien sichern das Vorgehen gegen Willkür und Erpressbarkeit ab (B = Rang 2). Das nicht-priorisierte Kind muss unverzüglich die bestmögliche alternative Versorgung erhalten (A = Rang 3). Reine Gleichbehandlung ohne Berücksichtigung der Erfolgsaussichten würde zu fatalen Fehlallokationen führen (E = Rang 4). Angst vor Medienkampagnen oder Shitstorms darf niemals medizinische Verteilungsentscheidungen steuern (D = Rang 5).",
    rationaleByRank: {
      C: "Rang 1: Das Prinzip des maximalen Nutzens gebietet die Zuteilung an das Kind mit der Aussicht auf ein gesundes, unbeeinträchtigtes Leben.",
      B: "Rang 2: Transparente, evidenzbasierte Allokationskriterien sichern das Vorgehen gegen Willkür und Erpressbarkeit ab.",
      A: "Rang 3: Das nicht-priorisierte Kind muss unverzüglich die bestmögliche alternative Versorgung erhalten.",
      E: "Rang 4: Reine formale Gleichbehandlung ohne Berücksichtigung der Erfolgsaussichten führt zu fatalen Fehlallokationen.",
      D: "Rang 5: Angst vor Medienkampagnen oder Shitstorms darf niemals medizinische Verteilungsentscheidungen steuern.",
    },
  },

  // ─── Q14 (Schwer · Katastrophenmedizin: Evakuierungs-Triage bei Klinikbrand) ───
  {
    id: "SEK-SE-GP4-014",
    legacyId: "se-sim4-14",
    simulationId: "generalprobe-4",
    subtest: "SE",
    questionNumber: 14,
    difficulty: "Schwer",
    scenario:
      "Bei einem verheerenden Großbrand in einem Schwerpunktkrankenhaus dringt dichter toxischer Brandrauch in die Neugeborenen-Intensivstation ein. Das Notfall-Evakuierungsteam kann im ersten, lebensrettenden Durchgang über das verrauchte Nottreppenhaus nur fünf von acht Inkubatoren transportieren, bevor der Fluchtweg unpassierbar wird. Unter den verbleibenden Patienten befinden sich: zwei stabile Frühgeborene mit exzellenter Überlebensprognose, drei beatmete Frühgeborene mit akutem Sauerstoffmangel sowie ein reifes Neugeborenes mit bekannter letaler Trisomie 18, das sich bereits im irreversiblen Multiorganversagen befindet. Der leitende Notarzt muss in Sekundenschnelle die Transportreihenfolge der Inkubatoren unwiderruflich anordnen.",
    decisionContext: "Utilitaristische Katastrophen-Triage zur Rettung der maximalen Zahl von Menschenleben vs. Bevorzugung der am schwersten Leidenden",
    considerations: [
      {
        id: "A",
        text: "Wie für die im ersten Schritt nicht transportierbaren Säuglinge im Brandabschnitt eine maximale Barrikadierung gegen Rauch und palliative Betreuung gesichert werden kann.",
      },
      {
        id: "B",
        text: "Welche zwingende Pflicht zur Priorisierung derjenigen Frühgeborenen besteht, die mit höchster Wahrscheinlichkeit den schwierigen Rettungstransport überleben und die beste Langzeitprognose haben.",
      },
      {
        id: "C",
        text: "Welcher logistische Zeitaufwand für den Transport technisch hochkomplexer Beatmungsinkubatoren gegenüber einfacheren Transporteinheiten erforderlich ist.",
      },
      {
        id: "D",
        text: "Ob der Säugling mit infauster Prognose (Trisomie 18) vor den gesunden Frühgeborenen transportiert werden sollte, um dem Vorwurf der Diskriminierung behinderter Kinder vorzubeugen.",
      },
      {
        id: "E",
        text: "Welche materiellen Sachschäden an den zurückgelassenen intensivmedizinischen Geräten für die Klinikversicherung entstehen.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 1,
      C: 2,
      D: 4,
      E: 5,
    },
    competencyTags: ["disaster_triage", "emergency_medicine", "allocation_of_care", "utilitarianism"],
    explanation:
      "In der extremen Katastrophentriage gilt das Prinzip der Rettung der maximalen Zahl überlebensfähiger Leben („Save the most lives“) anhand der realen Transport- und Überlebenswahrscheinlichkeit (B = Rang 1). Die logistische Transportzeit entscheidet über das Überleben aller Kinder im verrauchten Treppenhaus (C = Rang 2). Für zurückbleibende Patienten müssen alle Maßnahmen zur Schadensminderung und Palliation ergriffen werden (A = Rang 3). Ein Bevorzugen von Patienten mit infauster Prognose aus Angst vor Diskriminierungsvorwürfen opfert gesunde Leben und ist katastrophenethisch verfehlt (D = Rang 4). Sachschäden an Geräten sind bei Lebensgefahr vollkommen irrelevant (E = Rang 5).",
    rationaleByRank: {
      B: "Rang 1: In der extremen Katastrophentriage gilt das Prinzip der Rettung der maximalen Zahl überlebensfähiger Leben anhand der realen Überlebenswahrscheinlichkeit.",
      C: "Rang 2: Die logistische Transportzeit entscheidet über das Überleben aller Kinder im verrauchten Treppenhaus.",
      A: "Rang 3: Für zurückbleibende Patienten müssen alle Maßnahmen zur Schadensminderung und Palliation ergriffen werden.",
      D: "Rang 4: Ein Bevorzugen von Patienten mit infauster Prognose aus Angst vor Vorwürfen opfert gesunde Leben und ist katastrophenethisch verfehlt.",
      E: "Rang 5: Sachschäden an Geräten sind bei Lebensgefahr vollkommen irrelevant.",
    },
  },
];

export const GENERALPROBE_4_SE_SIMULATION_DATA: SeSimulationData = {
  simulationId: "generalprobe-4",
  simNumber: 4,
  title: "MedAT-H Generalprobe #4 — Soziales Entscheiden",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (1260s) · Ethische Reihung von Handlungsprioritäten (1 bis 5)",
  timeLimitSeconds: 21 * 60,
  questions: RAW_GENERALPROBE_4_SE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #4 runtime and review engine
 */
export const GENERALPROBE_4_SE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_SE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = toStoredQuestion(q, GENERALPROBE_4_SE_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-SE-GP4-${numStr}`,
      legacyId: `se-sim4-${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "SE", "Soziales Entscheiden", "Generalprobe #4", `SEK-SE-GP4-${numStr}`],
      seData: {
        ...q,
        id: `SEK-SE-GP4-${numStr}`,
        legacyId: `se-sim4-${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
