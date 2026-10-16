/**
 * MedAT SEK — Soziales Entscheiden (SE) — Generalprobe #2
 * Exactly 14 Questions · 21 Minutes Exam Time (1260 seconds, 90s / task)
 * 
 * IDs: SEK-SE-GP2-001 through SEK-SE-GP2-014 (aliased to legacy se-sim2-01 .. 14)
 * 
 * Specifications:
 * - Exactly 14 ethical/social dilemmas assessing prioritization of considerations (Beauchamp & Childress / Kohlberg)
 * - 5 distinct considerations per situation (A–E)
 * - Full ranking task from Rank 1 (highest importance) to Rank 5 (lowest importance)
 * - Every rank 1..5 used exactly once in each question (bijective permutation)
 * - Non-trivial reference permutations across all questions (no monotonic 1-2-3-4-5 guessing patterns)
 * - Difficulty distribution: Exactly 4 Leicht (28.6%), 7 Mittel (50.0%), 3 Schwer (21.4%)
 * - Scored via quadratic distance D = sum (r_user - r_ref)^2 (max D=40, normalized score 1 - D/40, binary pass threshold score >= 0.75)
 * - Complete didactic rationale for each rank and comprehensive explanation
 */

import type { StoredQuestion } from "../questions/types";
import type { SeQuestionData, SeSimulationData } from "../questions/se/types";
import { toStoredQuestion } from "../questions/se/types";

export const RAW_GENERALPROBE_2_SE_QUESTIONS: SeQuestionData[] = [
  // ─── Q01 (Leicht · Aufklärung & Behandlungsfehler) ───
  {
    id: "SEK-SE-GP2-001",
    legacyId: "se-sim2-01",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 1,
    difficulty: "Leicht",
    scenario:
      "Ein junger Assistenzarzt bemerkt bei der postoperativen Visite, dass bei einem Patienten nach einer komplikationslosen Hernien-OP versehentlich ein kleiner Bauchtupfer im Operationsgebiet belassen wurde. Der Patient ist noch beschwerdefrei, doch eine rasche Re-Operation ist zwingend nötig, um eine schwere Sepsis abzuwenden. Der leitende Oberarzt schlägt vor, dem Patienten mitzuteilen, es handele sich um eine 'seltene Nachblutung', um Schadensersatzforderungen gegen die Klinik zu vermeiden.",
    decisionContext: "Ehrliche Fehleraufklärung vs. Klinikreputation und Vertuschung",
    considerations: [
      {
        id: "A",
        text: "Welche schweren rechtlichen und finanziellen Haftungsschäden drohen der Klinik bei einem offenen Eingeständnis des Kunstfehlers?",
      },
      {
        id: "B",
        text: "Welches moralische und gesetzliche Recht hat der Patient auf eine vollständige und ehrliche Aufklärung über eingetretene Behandlungsfehler?",
      },
      {
        id: "C",
        text: "Wie kann die erforderliche Re-Operation medizinisch schnellstmöglich organisiert werden, um lebensbedrohliche Infektionen abzuwenden?",
      },
      {
        id: "D",
        text: "Wie kann in einem sachlichen Vier-Augen-Gespräch mit dem Oberarzt verdeutlicht werden, dass eine Falschinformation das rechtliche Risiko für alle Beteiligten drastisch vergrößert?",
      },
      {
        id: "E",
        text: "Ob meine Weigerung, die Vertuschung mitzutragen, meine anstehende Vertragsverlängerung an der Abteilung gefährdet.",
      },
    ],
    referenceRanking: {
      A: 4,
      B: 2,
      C: 1,
      D: 3,
      E: 5,
    },
    competencyTags: ["error_disclosure", "patient_safety", "truthfulness", "integrity"],
    explanation:
      "Die unmittelbare Abwendung vitaler Gefahren durch die rasche Re-Operation (C = Rang 1) steht in der medizinischen Ethik an oberster Stelle. Dicht darauf folgt das fundamentale Recht des Patienten auf Wahrheit und Aufklärung (B = Rang 2). Ein konstruktiver, deeskalierender Dialog mit dem Vorgesetzten (D = Rang 3) ist der gebotene Weg, die Falschinformation abzuwenden. Ökonomische Klinikinteressen (A = Rang 4) und eigene Karriereängste (E = Rang 5) sind dem Patientenschutz und der Wahrhaftigkeit moralisch strikt untergeordnet.",
    rationaleByRank: {
      C: "Rang 1: Der Schutz vor lebensbedrohlicher Infektion (Sepsis) hat absolute Priorität vor allen anderen Erwägungen.",
      B: "Rang 2: Das Recht des Patienten auf informationelle Selbstbestimmung und Wahrheit ist unverhandelbar.",
      D: "Rang 3: Sachliche Intervention beim Vorgesetzten verhindert Vertuschung auf professioneller Ebene.",
      A: "Rang 4: Finanzielle Haftungsrisiken der Institution dürfen niemals durch Täuschung von Patienten abgewehrt werden.",
      E: "Rang 5: Eigene Karriereüberlegungen wiegen im Vergleich zu vitalen Rechten des Patienten nichts.",
    },
  },

  // ─── Q02 (Leicht · Suizidalität & Schweigepflicht bei Minderjährigen) ───
  {
    id: "SEK-SE-GP2-002",
    legacyId: "se-sim2-02",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 2,
    difficulty: "Leicht",
    scenario:
      "In der Notfallambulanz vertraut sich eine 16-jährige Schülerin der Diensthabenden an: Sie leide unter schweren Depressionen, habe konkrete Vorbereitungen für einen Suizidversuch am kommenden Wochenende getroffen und fleht die Ärztin an, ihren Eltern unter keinen Umständen etwas zu sagen, da diese extrem streng seien und sie vor deren Reaktion panische Angst habe.",
    decisionContext: "Akute Suizidgefahr bei Jugendlichen vs. Wunsch nach Geheimhaltung",
    considerations: [
      {
        id: "A",
        text: "Welche akute Lebensgefahr für die Jugendliche besteht durch die konkreten suizidalen Vorbereitungen für das Wochenende?",
      },
      {
        id: "B",
        text: "Wie kann im empathischen Gespräch eine therapeutische Allianz aufgebaut werden, um die Jugendliche zur freiwilligen stationären Krisenintervention zu motivieren?",
      },
      {
        id: "C",
        text: "Ob die Jugendliche sich durch das Hinzuziehen Dritter hintergangen fühlt und den Kontakt zur Notfallambulanz verweigert.",
      },
      {
        id: "D",
        text: "Welche gesetzlichen Fürsorge- und Meldepflichten bestehen für Ärzte bei akuter Suizidgefahr von Minderjährigen zur Gefahrenabwehr (Gefahr im Verzug)?",
      },
      {
        id: "E",
        text: "Welche Vorwürfe die Eltern der Klinik machen könnten, wenn sie erst im Nachhinein über die psychische Krise informiert werden.",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 3,
      C: 5,
      D: 2,
      E: 4,
    },
    competencyTags: ["suicide_prevention", "minor_protection", "duty_of_care", "confidentiality"],
    explanation:
      "Die Abwendung des drohenden Suizids und der Schutz des Lebens (A = Rang 1) bricht jede Geheimhaltung. Die gesetzliche Garantenstellung und Fürsorgepflicht bei Minderjährigen im Zustand von Gefahr im Verzug (D = Rang 2) legitimiert das Eingreifen. Eine empathische Beziehungsgestaltung zur freiwilligen Kooperation (B = Rang 3) ist die Methode der Wahl. Sorgen vor Vorwürfen der Eltern (E = Rang 4) sind nachrangig. Die Angst vor vorübergehenden Vorhaltungen der Jugendlichen (C = Rang 5) darf lebensrettende Maßnahmen niemals blockieren.",
    rationaleByRank: {
      A: "Rang 1: Der Schutz des menschlichen Lebens vor vollendeter Selbsttötung hat höchste Priorität.",
      D: "Rang 2: Gesetzliche Schutz- und Garantenpflichten bei akuter Selbstgefährdung verpflichten zur Intervention.",
      B: "Rang 3: Eine tragfähige therapeutische Allianz minimiert Traumatisierung und fördert die Behandlungsbereitschaft.",
      E: "Rang 4: Elterliche Befindlichkeiten sind gegenüber dem primären Schutzgut Leben zweitrangig.",
      C: "Rang 5: Die Sorge vor Unmut der Patientin darf eine akute Lebensrettung unter keinen Umständen verhindern.",
    },
  },

  // ─── Q03 (Leicht · Infektionsschutz vs. persönliche Bewegungsfreiheit) ───
  {
    id: "SEK-SE-GP2-003",
    legacyId: "se-sim2-03",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 3,
    difficulty: "Leicht",
    scenario:
      "Auf einer Isolierstation einer Lungenfachklinik wird ein Patient mit offener, multiresistenter Tuberkulose behandelt. Trotz mehrfacher mündlicher und schriftlicher Belehrung verlässt der Patient nachts wiederholt sein Zimmer, um im Park und in der öffentlich zugänglichen Cafeteria spazieren zu gehen, da er den Aufenthalt im Isolierzimmer psychisch nicht aushalte.",
    decisionContext: "Infektionsschutz der Allgemeinheit vs. Bewegungsfreiheit des Einzelnen",
    considerations: [
      {
        id: "A",
        text: "Ob die Durchsetzung der Zimmerisolation dem Pflegepersonal zusätzlichen Dokumentations- und Betreuungsaufwand verursacht.",
      },
      {
        id: "B",
        text: "Wie schwer wiegt das subjektive Einsamkeitsgefühl und die psychische Belastung des Patienten durch die strikte Zimmerisolation?",
      },
      {
        id: "C",
        text: "Welche gesetzlichen Befugnisse nach dem Infektionsschutzgesetz legitimieren freiheitsbeschränkende Maßnahmen als Ultima Ratio bei akuter Fremdgefährdung?",
      },
      {
        id: "D",
        text: "Welches erhebliche Infektionsrisiko mit einer potenziell tödlichen Infektionskrankheit besteht für immungeschwächte Mitpatienten und Besucher?",
      },
      {
        id: "E",
        text: "Wie kann dem Patienten durch psychologische Betreuung und Beschäftigungsangebote der Isolationsaufenthalt erträglicher gemacht werden?",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 4,
      C: 2,
      D: 1,
      E: 3,
    },
    competencyTags: ["infection_control", "public_health", "harm_prevention", "proportionality"],
    explanation:
      "Der Schutz unbeteiligter, oft immungeschwächter Dritter vor einer tödlichen Infektionskrankheit (D = Rang 1) steht über individuellen Freiheitswünschen. Die rechtliche Bindung an das Infektionsschutzgesetz zur Verhältnismäßigkeit freiheitsbeschränkender Maßnahmen (C = Rang 2) bildet den Rahmen. Eine fürsorgliche Milderung der Isolation durch psychologische Unterstützung (E = Rang 3) ist das gebotene Mittel. Die subjektive Belastung des Patienten (B = Rang 4) ist real, tritt aber zurück. Zusätzlicher Arbeitsaufwand des Personals (A = Rang 5) ist moralisch völlig unbedeutend.",
    rationaleByRank: {
      D: "Rang 1: Das Nicht-Schadens-Prinzip gebietet den strikten Schutz der Allgemeinheit vor lebensgefährlicher Ansteckung.",
      C: "Rang 2: Rechtsstaatliche Vorschriften des Infektionsschutzes legitimieren Eingriffe in Grundrechte bei Fremdgefährdung.",
      E: "Rang 3: Begleitende Fürsorge lindert die seelische Not der Quarantäne auf humanitäre Weise.",
      B: "Rang 4: Individuelle Bewegungsfreiheit muss vor der körperlichen Unversehrtheit vieler Mitmenschen zurückstehen.",
      A: "Rang 5: Dienstlicher Mehraufwand für das Personal ist kein legitimer ethischer Maßstab bei Gefahrenabwehr.",
    },
  },

  // ─── Q04 (Leicht · Sponsoring & Unabhängigkeit ärztlicher Fortbildung) ───
  {
    id: "SEK-SE-GP2-004",
    legacyId: "se-sim2-04",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 4,
    difficulty: "Leicht",
    scenario:
      "Ein Organisationsteam aus Medizinstudierenden plant eine bundesweite Fachtagung zu präventiver Kardiologie. Ein Tabakkonzern bietet über eine gemeinnützige Stiftung eine Fördersumme von 30.000 Euro an. Im Gegenzug verlangt die Stiftung, auf allen Tagungsunterlagen als 'Partner für Herzgesundheit' mit Logo genannt zu werden und ein kurzes Grußwort bei der Eröffnung zu halten.",
    decisionContext: "Wissenschaftliche Glaubwürdigkeit & Präventionsethik vs. Finanzierungsvorteile",
    considerations: [
      {
        id: "A",
        text: "Wie können über universitäre Fördertöpfe oder gemeinnützige Stiftungen saubere Ersatzmittel eingeworben werden, um die Tagung unabhängig zu finanzieren?",
      },
      {
        id: "B",
        text: "Welcher massive Schaden für die Glaubwürdigkeit präventivmedizinischer Aufklärung entsteht durch eine Kooperation mit Herstellern gesundheitsschädlicher Produkte?",
      },
      {
        id: "C",
        text: "Welche klaren ethischen Leitlinien verbieten die Annahme von Firmengeldern, die der Verharmlosung chronischer Gesundheitsrisiken dienen?",
      },
      {
        id: "D",
        text: "Welcher Komfortverlust beim Konferenz-Catering und der Abendveranstaltung entstünde durch den Wegfall der Fördersumme?",
      },
      {
        id: "E",
        text: "Ob die Ablehnung des Angebots das persönliche Verhältnis zu den Vermittlern der Stiftung für künftige Projekte belastet.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 1,
      C: 2,
      D: 4,
      E: 5,
    },
    competencyTags: ["conflict_of_interest", "integrity", "prevention_ethics", "public_trust"],
    explanation:
      "Die Integrität der Präventionsmedizin und das Vertrauen der Öffentlichkeit in gesundheitliche Aufklärung (B = Rang 1) verbieten eine Instrumentalisierung durch schädigende Industrien. Verbindliche ethische Kodizes gegen interessengeleitete Verharmlosung (C = Rang 2) stützen dies normativ. Das Erschließen integre Alternativfinanzierungen (A = Rang 3) löst das praktische Problem konstruktiv. Abstriche bei Catering und Festivitäten (D = Rang 4) sind hinnehmbar. Befindlichkeiten von Industrievertretern (E = Rang 5) sind moralisch irrelevant.",
    rationaleByRank: {
      B: "Rang 1: Glaubwürdigkeit und Unabhängigkeit sind das Fundament ärztlicher und wissenschaftlicher Präventionsarbeit.",
      C: "Rang 2: Ethische Standards untersagen die Legitimation von Produkten, die chronische Krankheiten erzeugen.",
      A: "Rang 3: Die Suche nach sauberen Finanzierungsquellen wahrt die Unabhängigkeit des akademischen Diskurses.",
      D: "Rang 4: Luxus und Bequemlichkeit im Rahmenprogramm dürfen niemals mit ethischer Unredlichkeit erkauft werden.",
      E: "Rang 5: Sorgen um persönliche Kontakte zu Wirtschaftsakteuren haben bei Grundsatzentscheidungen kein Gewicht.",
    },
  },

  // ─── Q05 (Mittel · Allokation knapper Krebsmedikamente) ───
  {
    id: "SEK-SE-GP2-005",
    legacyId: "se-sim2-05",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 5,
    difficulty: "Mittel",
    scenario:
      "Aufgrund unvorhersehbarer internationaler Produktionsstopps steht an einem onkologischen Zentrum ein lebensverlängerndes Spezialmedikament für die nächsten Wochen nur noch für drei von fünf Patientinnen mit fortgeschrittenem Tumor zur Verfügung. Zwei Patientinnen haben die Chemotherapie bereits begonnen und zeigen eine gute Tumorremission; drei weitere Patientinnen warten auf den Therapiebeginn.",
    decisionContext: "Allokation knapper Arzneimittel: Therapiekontinuität vs. Erstbehandlung",
    considerations: [
      {
        id: "A",
        text: "Welche ethischen und fachgesellschaftlichen Leitlinien zur Zuteilung knapper Ressourcen sichern ein transparentes und diskriminierungsfreies Auswahlverfahren?",
      },
      {
        id: "B",
        text: "Ob eine der wartenden Patientinnen über private Zusatzversicherungen oder persönliche Kontakte zur Klinikleitung verfügt.",
      },
      {
        id: "C",
        text: "Bei welchen Patientinnen besteht nach objektiven klinischen Parametern die höchste Wahrscheinlichkeit einer signifikanten Lebensverlängerung?",
      },
      {
        id: "D",
        text: "Wie kann über regionale Kliniknetzwerke und das Ministerium versucht werden, zusätzliche Kontingente des Wirkstoffs kurzfristig zu beschaffen?",
      },
      {
        id: "E",
        text: "Welche irreversiblen Folgeschäden und welches unmittelbare Mortalitätsrisiko entstehen durch den Abbruch einer bereits wirksam laufenden Therapie?",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 5,
      C: 2,
      D: 4,
      E: 1,
    },
    competencyTags: ["resource_allocation", "triage", "justice", "non_discrimination"],
    explanation:
      "Der Schutz vor irreversiblem Schaden durch den Abbruch einer bereits wirksamen laufenden Therapie (E = Rang 1: Nicht-Schadens-Prinzip) besitzt Vorrang, da ein Abbruch den bisherigen Behandlungserfolg vernichtet. Die objektive klinische Erfolgsaussicht für die verbleibende Dosis (C = Rang 2) steuert die weitere Verteilung. Transparente, diskriminierungsfreie Leitlinien (A = Rang 3) verhindern Willkür. Intensive Beschaffungsbemühungen (D = Rang 4) mindern den Mangel. Privatversicherungsstatus oder persönliche Beziehungen (B = Rang 5) sind bei lebensrettenden Allokationen strikt unzulässig.",
    rationaleByRank: {
      E: "Rang 1: Die Zerstörung bereits erzielter Remissionserfolge durch Therapieabbruch stellt eine schwere Schadenszufügung dar.",
      C: "Rang 2: Nachweisbarer medizinischer Nutzen und Überlebensgewinn sind das gerechte Kriterium für Neuvergaben.",
      A: "Rang 3: Fachliche Vergabekriterien schützen vor unlauteren Bevorzugungen und sichern Rechtsgleichheit.",
      D: "Rang 4: Maximale organisatorische Anstrengungen zur Mangelbeseitigung verringern die Härte von Ausschlussentscheidungen.",
      B: "Rang 5: Sozialer Status, Vermögen oder Beziehungen widersprechen dem Gleichheitsgebot im Gesundheitswesen fundamental.",
    },
  },

  // ─── Q06 (Mittel · Schutz von Whistleblowern vs. Teamdruck) ───
  {
    id: "SEK-SE-GP2-006",
    legacyId: "se-sim2-06",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 6,
    difficulty: "Mittel",
    scenario:
      "Eine Physiotherapeutin beobachtet auf einer geriatrischen Station, wie ein Stationsarzt demente, wehrlose Patientinnen bei der Frühmobilisation wiederholt grob an den Armen zerrt und laut beschimpft. Die Therapeutin meldet den Missstand der internen Beschwerdestelle. Als dies auf Station bekannt wird, wird die Therapeutin im Teamchat isoliert und von Pflegekräften als 'Kameradenschwein' diffamiert.",
    decisionContext: "Schutz wehrloser Patienten & Whistleblowing vs. informelle Gruppenloyalität",
    considerations: [
      {
        id: "A",
        text: "Welche Pflicht zur Wahrung der Menschenwürde und zum Schutz wehrloser Patienten vor körperlicher und verbaler Gewalt steht an oberster Stelle?",
      },
      {
        id: "B",
        text: "Welche Fürsorgepflicht hat die Klinikleitung, Hinweisgeber vor Schikanen, Mobbing und Ausgrenzung am Arbeitsplatz wirksam zu schützen?",
      },
      {
        id: "C",
        text: "Wie kann die Stationsleitung den Vorfall in einer Teamsitzung konstruktiv aufarbeiten, um die Fehlerkultur zu verbessern und Missstände dauerhaft zu beenden?",
      },
      {
        id: "D",
        text: "Ob die Therapeutin durch eine Entschuldigung bei den Kollegen die Wogen im Team glätten sollte, um ihre Ruhe zu haben.",
      },
      {
        id: "E",
        text: "Welche informellen Loyalitätsregeln und Überlastungsgefühle im Pflegeteam die ablehnende Reaktion der Kollegen ausgelöst haben.",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4,
    },
    competencyTags: ["vulnerable_protection", "whistleblowing", "moral_courage", "workplace_culture"],
    explanation:
      "Der Schutz wehrloser Patientinnen vor Gewalt und Demütigung (A = Rang 1) ist die elementarste Pflicht im Gesundheitswesen. Die Schutz- und Fürsorgepflicht der Institution für mutige Hinweisgeber (B = Rang 2) garantiert, dass Missstände gemeldet werden können. Professionelle Teamaufarbeitung (C = Rang 3) etabliert nachhaltige Standards. Verständnis für Belastung (E = Rang 4) erklärt Frust, rechtfertigt aber keine Übergriffe. Feige Selbstbezichtigung durch Entschuldigung beim Mobbing-Kollektiv (D = Rang 5) legitimiert Unrecht und ist ethisch verwerflich.",
    rationaleByRank: {
      A: "Rang 1: Die Würde und körperliche Unversehrtheit wehrloser Kranker steht über jedem kollegialen Wohlwollen.",
      B: "Rang 2: Institutionalisierter Whistleblower-Schutz sichert die Existenz einer wirksamen Patientenschutz-Kultur.",
      C: "Rang 3: Konstruktive Führung und Klärung im Team transformieren Missstände in professionelles Handeln.",
      E: "Rang 4: Arbeitsüberlastung ist ein Erklärungsfaktor, entbindet aber nicht von professionellem Anstand.",
      D: "Rang 5: Das Zurückrudern und Entschuldigen für Zivilcourage untergräbt fundamentale Schutzstandards.",
    },
  },

  // ─── Q07 (Mittel · Demenz, Wohlbefinden & Patientenverfügung) ───
  {
    id: "SEK-SE-GP2-007",
    legacyId: "se-sim2-07",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 7,
    difficulty: "Mittel",
    scenario:
      "Ein 76-jähriger Mann hatte vor sechs Jahren in einer Patientenverfügung festgelegt, dass bei fortgeschrittener Demenz keine lebensverlängernden Maßnahmen (wie Antibiotika bei Lungenentzündung) erfolgen sollen. Nun hat er schwere Demenz, wirkt im Pflegeheim jedoch gelöst, lacht gerne und nimmt aktiv an Singrunden teil. Er erkrankt an einer bakteriellen Pneumonie, die durch eine einfache, orale Antibiotikagabe heilbar ist, ohne Behandlung aber rasch zum Tode führen würde.",
    decisionContext: "Antizipierte Patientenverfügung vs. gegenwärtiges Wohlbefinden und Lebensfreude",
    considerations: [
      {
        id: "A",
        text: "Ob das Ableben des Patienten den Angehörigen die emotionale Belastung künftiger Pflegeheim-Besuche ersparen würde.",
      },
      {
        id: "B",
        text: "Welche akuten Qualen, Erstickungsängste und Schmerzen drohen dem Patienten beim Verzicht auf eine einfache, gut verträgliche Antibiotikatherapie?",
      },
      {
        id: "C",
        text: "Wie ist das gegenwärtige Wohlbefinden, die erkennbare Lebensfreude und der aktuelle natürliche Lebenswille des Patienten zu gewichten?",
      },
      {
        id: "D",
        text: "Welches rechtliche und ethische Gewicht kommt dem vor Jahren im Vollbesitz der Kräfte niedergelegten Willen in der Verfügung zu?",
      },
      {
        id: "E",
        text: "Wie kann im Rahmen einer interdisziplinären ethischen Fallkonferenz mit Betreuer, Angehörigen und Pflegeteam ein verantwortungsvoller Konsens gefunden werden?",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4,
    },
    competencyTags: ["advance_directive", "dementia_ethics", "current_wellbeing", "beneficence"],
    explanation:
      "Die wahrnehmbare aktuelle Lebensfreude und das unbeeinträchtigte Wohlbefinden im Hier und Jetzt (C = Rang 1) stellen bei nicht-leidenden Dementen ein gewichtiges Gut dar. Die Abwendung qualvollen Sterbens durch eine minimale, nebenwirkungsarme Therapie (B = Rang 2) folgt unmittelbar. Die frühere Verfügung (D = Rang 3) muss sorgfältig geprüft werden, ob sie auf diesen Zustand heiterer Zufriedenheit zutrifft. Eine gemeinsame Fallkonferenz (E = Rang 4) schafft ethischen Konsens. Bequemlichkeit oder Entlastungswünsche von Angehörigen (A = Rang 5) sind bei Lebensentscheidungen moralisch unzulässig.",
    rationaleByRank: {
      C: "Rang 1: Das spürbare gegenwärtige Lebensglück eines urteilsunfähigen Menschen besitzt höchsten moralischen Eigenwert.",
      B: "Rang 2: Das Verhindern von Erstickungsqualen durch harmlose Tablettengabe ist ein Grundgebot ärztlicher Fürsorge.",
      D: "Rang 3: Vorausverfügungen bedürfen der Auslegung, ob die tatsächliche Lebenssituation dem antizipierten Schreckensbild entspricht.",
      E: "Rang 4: Strukturierter interdisziplinärer Diskurs sichert eine abgewogene, verhältnismäßige Entscheidung.",
      A: "Rang 5: Die Vermeidung von Besuchsaufwand für Dritte darf niemals zur Sterbebegünstigung herangezogen werden.",
    },
  },

  // ─── Q08 (Mittel · Verdeckte Placebo-Gabe bei chronischem Schmerz) ───
  {
    id: "SEK-SE-GP2-008",
    legacyId: "se-sim2-08",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 8,
    difficulty: "Mittel",
    scenario:
      "Ein Patient mit chronischen Rückenschmerzen verlangt auf Station wiederholt höhere Dosen stark wirksamer Opioide, obwohl organisch keine Nervenkompression vorliegt. Eine Assistenzärztin schlägt vor, dem Patienten ohne sein Wissen sterile Kochsalzlösung als angebliches 'neuartiges Reserve-Schmerzmittel' intravenös zu verabreichen, um zu beweisen, dass die Schmerzen rein psychogen bedingt seien.",
    decisionContext: "Wahrhaftigkeit und Patientenvertrauen vs. verdeckte Placebo-Täuschung",
    considerations: [
      {
        id: "A",
        text: "Welcher schwere und irreparable Vertrauensbruch in der Arzt-Patient-Beziehung entstünde, wenn der Patient die verdeckte Täuschung bemerkt?",
      },
      {
        id: "B",
        text: "Welche wissenschaftlich fundierten, multimodalen schmerztherapeutischen und psychosomatischen Behandlungsansätze stehen als evidenzbasierte Alternative bereit?",
      },
      {
        id: "C",
        text: "Ob durch die Kochsalzinjektion kurzfristig teure Opiate eingespart und langwierige Diskussionen mit dem Patienten vermieden werden können.",
      },
      {
        id: "D",
        text: "Welche fundamentale Pflicht zur Wahrhaftigkeit und Aufklärung verbietet die heimliche Gabe von Scheinmedikamenten zur 'Überführung' von Patienten?",
      },
      {
        id: "E",
        text: "Welcher vermeintliche diagnostische Erkenntnisgewinn über psychogene Schmerzanteile durch den Placebo-Test erzielt werden könnte.",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 3,
      C: 5,
      D: 1,
      E: 4,
    },
    competencyTags: ["truthfulness", "autonomy", "placebo_ethics", "pain_management"],
    explanation:
      "Die Pflicht zur Wahrhaftigkeit und das Verbot der Täuschung (D = Rang 1) sind fundamentale Pfeiler des Arzt-Patienten-Verhältnisses. Der drohende Vertrauensverlust und gravierende Nocebo-Schäden bei Aufdeckung (A = Rang 2) wiegen schwer. Die Hinwendung zu multimodaler Schmerztherapie (B = Rang 3) ist der fachlich korrekte Lösungsweg. Ein diagnostischer Erkenntniswert von Placebos (E = Rang 4) ist wissenschaftlich fragwürdig. Kostenersparnis oder Bequemlichkeit durch Täuschung (C = Rang 5) sind ethisch gänzlich illegitim.",
    rationaleByRank: {
      D: "Rang 1: Ehrlichkeit gegenüber dem Kranken ist die unverzichtbare Voraussetzung jeder legitimen Heilbehandlung.",
      A: "Rang 2: Das Auffliegen einer Scheinbehandlung zerstört die therapeutische Allianz und schadet dem Patienten nachhaltig.",
      B: "Rang 3: Evidenzbasierte Schmerztherapie erfordert Psychosomatik und Physiotherapie statt Taschenspielertricks.",
      E: "Rang 4: Das Ansprechen auf Placebos beweist keineswegs die Abwesenheit realer organischer Schmerzen.",
      C: "Rang 5: Die Einsparung von Zeit und Medikamentenkosten durch Überlistung des Kranken ist unethisch.",
    },
  },

  // ─── Q09 (Mittel · Organspende & Angehörigengespräch) ───
  {
    id: "SEK-SE-GP2-009",
    legacyId: "se-sim2-09",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 9,
    difficulty: "Mittel",
    scenario:
      "Bei einem 24-jährigen Motorradfahrer wurde nach schwerem Schädel-Hirn-Trauma der irreversible Hirntod festgestellt. Ein schriftlicher Wille liegt nicht vor. Die Eltern stehen unter Schock und lehnen eine Organentnahme strikt ab. Der Transplantationsbeauftragte fordert die Stationsärztin auf, den Eltern emotionale Vorhaltungen über sterbende Kinder auf der Eurotransplant-Warteliste zu machen, um die Freigabe der Organe zu erzwingen.",
    decisionContext: "Schutz trauernder Angehöriger vs. utilitaristischer Zwang zur Organspende",
    considerations: [
      {
        id: "A",
        text: "Wie kann in einem einfühlsamen, ergebnisoffenen Gespräch der mutmaßliche Wille des Verstorbenen zu Lebzeiten behutsam rekonstruiert werden?",
      },
      {
        id: "B",
        text: "Welche strengen ethischen und berufsrechtlichen Standards verbieten es, trauernde Angehörige durch Schuldzuweisungen oder moralischen Druck zu manipulieren?",
      },
      {
        id: "C",
        text: "Welche berechtigte Hoffnung auf Rettung und Weiterleben besteht für schwerstkranke Patienten auf der Transplantations-Warteliste?",
      },
      {
        id: "D",
        text: "Welcher nachhaltige Vertrauensverlust in das gesamte Organspendesystem in der Bevölkerung entsteht, wenn Kliniken Angehörige instrumentalisieren?",
      },
      {
        id: "E",
        text: "Ob die Klinik durch eine erfolgreiche Multiorganentnahme ihre vertraglichen Zielvereinbarungen und Kennzahlen erfüllt.",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5,
    },
    competencyTags: ["organ_donation", "bereavement", "autonomy", "manipulation_prevention"],
    explanation:
      "Angehörige in akuter seelischer Schockstarre vor moralischer Nötigung und Schuldgefühlen zu schützen (B = Rang 1), ist ein unverhandelbares ärztliches Gebot. Die behutsame Ermittlung des mutmaßlichen Willens des Verstorbenen (A = Rang 2) ist das rechtmäßige Leitkriterium. Die Hoffnung von Wartelistenpatienten (C = Rang 3) ist hochgradig legitim, darf aber nicht erpresst werden. Der Schutz des gesellschaftlichen Vertrauens in die Lauterkeit der Transplantationsmedizin (D = Rang 4) folgt. Klinikziele und Kennzahlen (E = Rang 5) sind bei existenziellen Entscheidungen moralisch tabu.",
    rationaleByRank: {
      B: "Rang 1: Seelische Überwältigung und moralische Erpressung von Trauernden verletzen deren Würde fundamental.",
      A: "Rang 2: Der mutmaßliche Wille des Verstorbenen ist der einzige rechtlich und moralisch maßgebliche Maßstab.",
      C: "Rang 3: Die Rettung anderer Leben ist ein edles Ziel, darf jedoch niemals durch Nötigung erkauft werden.",
      D: "Rang 4: Manipulative Praktiken untergraben die Spendenbereitschaft der gesamten Bevölkerung nachhaltig.",
      E: "Rang 5: Ökonomische oder administrative Klinikquoten haben bei der Organspende keinerlei moralische Berechtigung.",
    },
  },

  // ─── Q10 (Mittel · Kindeswohl vs. elterliche Verweigerung von Notfalltransfusion) ───
  {
    id: "SEK-SE-GP2-010",
    legacyId: "se-sim2-10",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 10,
    difficulty: "Mittel",
    scenario:
      "Ein 5-jähriges Kind verunfallt schwer und verliert bei einer Leberruptur massiv Blut. Eine lebensrettende Not-Operation mit Bluttransfusion ist zwingend nötig. Die Eltern verweigern aus religiösen Gründen jegliche Blutprodukte und fordern, das Kind ausschließlich mit Ringer-Lösung zu behandeln, was nach fachärztlicher Einschätzung binnen 30 Minuten zum irreversiblen Kreislauf- und Hirntod führen würde.",
    decisionContext: "Garantenstellung für das Kindeswohl vs. religiöse Elternrechte im Akutnotfall",
    considerations: [
      {
        id: "A",
        text: "Welche rechtsstaatlichen Eilverfahren (Gefahr im Verzug / richterlicher Eilbeschluss) sichern das rechtmäßige Vorgehen bei Kindeswohlgefährdung ab?",
      },
      {
        id: "B",
        text: "Ob das energische Einschreiten zu negativen Bewertungen oder Beschwerden der Familie bei der Ärztekammer führt.",
      },
      {
        id: "C",
        text: "Wie kann den Eltern im Notfallgespräch einfühlsam verdeutlicht werden, dass Blutprodukte ausschließlich als lebensrettendes Notfallmittel eingesetzt werden?",
      },
      {
        id: "D",
        text: "Welches verfassungsrechtliche Gewicht besitzt das elterliche Erziehungs- und Glaubensrecht im Normalfall?",
      },
      {
        id: "E",
        text: "Welche unbedingte Garantenpflicht des ärztlichen Teams zum Schutz von Leben und Gesundheit des wehrlosen Kindes (Kindeswohl) bricht elterliche Vorgaben?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 5,
      C: 3,
      D: 4,
      E: 1,
    },
    competencyTags: ["child_welfare", "emergency_duty", "parental_rights", "legal_custody"],
    explanation:
      "Das unantastbare Grundrecht des Kindes auf Leben und körperliche Unversehrtheit (E = Rang 1: Kindeswohl als oberste Schranke) bricht elterliche Behandlungswünsche ausnahmslos. Die Bindung an rechtsstaatliche Eilverfahren bei Gefahr im Verzug (A = Rang 2) sichert das Handeln juristisch ab. Deeskalierende Aufklärung der Eltern (C = Rang 3) minimiert deren Traumatisierung. Das elterliche Erziehungsrecht (D = Rang 4) ist prinzipiell hoch, endet jedoch am Überleben des Kindes. Die Furcht vor Beschwerden (B = Rang 5) ist moralisch völlig unbedeutend.",
    rationaleByRank: {
      E: "Rang 1: Das Recht des schutzlosen Kindes auf Überleben steht absolut über allen elterlichen Glaubensentscheidungen.",
      A: "Rang 2: Rechtsstaatliche Notstandsnormen und Gerichtsentscheidungen übertragen dem Arzt die Fürsorgepflicht.",
      C: "Rang 3: Respektvolle, klare Kommunikation wahrt die Humanität gegenüber den verzweifelten Eltern.",
      D: "Rang 4: Elterliche Autonomie findet ihre unüberwindbare Grenze in der Gefährdung des kindlichen Lebens.",
      B: "Rang 5: Sorgen vor beruflichen Beschwerden oder Kritik dürfen niemals das Leben eines Kindes gefährden.",
    },
  },

  // ─── Q11 (Mittel · Medizinische Hilfe für Gewalttäter im Notfall) ───
  {
    id: "SEK-SE-GP2-011",
    legacyId: "se-sim2-11",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 11,
    difficulty: "Mittel",
    scenario:
      "Nach einem Messerangriff mit mehreren Schwerverletzten wird der mutmaßliche Täter von der Polizei mit einer lebensbedrohlichen arteriellen Blutung in den Schockraum gebracht. Ein Krankenpfleger weigert sich demonstrativ, bei der Notfallversorgung des Mannes zu assistieren, und ruft: 'Wer unschuldige Menschen niedermetzelt, hat sein Recht auf unsere Hilfe verwirkt!'",
    decisionContext: "Universalität der Nothilfe & ärztliches Gelöbnis vs. moralische Empörung über Verbrechen",
    considerations: [
      {
        id: "A",
        text: "Welche berufsrechtlichen Konsequenzen und Straftatbestände (unterlassene Hilfeleistung) drohen bei einer vorsätzlichen Behandlungsverweigerung im Notfall?",
      },
      {
        id: "B",
        text: "Wie verständlich der spontane Zorn und die seelische Erschütterung des Pflegers angesichts der schrecklichen Tat sind.",
      },
      {
        id: "C",
        text: "Welche universelle Pflicht zur Lebenserhaltung und Nothilfe bindet medizinisches Personal gegenüber jedem Menschen in akuter Lebensgefahr, völlig unabhängig von Schuld oder Tat?",
      },
      {
        id: "D",
        text: "Ob der mutmaßliche Täter überleben muss, damit er vor einem ordentlichen Gericht für seine Verbrechen zur Rechenschaft gezogen werden kann.",
      },
      {
        id: "E",
        text: "Wie kann die Schockraumleitung das Team sofort so umbesetzen, dass emotional überforderte Mitarbeiter abgelöst werden und die Versorgung nahtlos weiterläuft?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 4,
      C: 1,
      D: 5,
      E: 3,
    },
    competencyTags: ["universal_care", "emergency_ethics", "professional_duty", "human_rights"],
    explanation:
      "Das humanitäre Gebot der unparteiischen Nothilfe für jeden Menschen in Lebensgefahr ohne Ansehen der Person oder Schuld (C = Rang 1) ist das unverbrüchliche Fundament der Medizin. Die rechtliche Garantenstellung und das Verbot unterlassener Hilfeleistung (A = Rang 2) untermauern dies. Eine sofortige Umbesetzung zur Sicherung des Ablaufs (E = Rang 3) löst die akute Krise im Team. Menschliche Erschütterung (B = Rang 4) ist verständlich, darf aber nicht handlungsleitend sein. Vergeltung oder juristische Strafverfolgung (D = Rang 5) sind Sache des Staates, nicht des Schockraums.",
    rationaleByRank: {
      C: "Rang 1: Medizinische Nothilfe ist universell und darf niemals zu einem Instrument moralischer Selektion werden.",
      A: "Rang 2: Rechtsstaatliche und standesrechtliche Garantenpflichten verbieten jede Willkür bei vitaler Bedrohung.",
      E: "Rang 3: Schnelle organisatorische Entlastung überforderter Teammitglieder sichert die lückenlose Versorgung.",
      B: "Rang 4: Seelische Betroffenheit erklärt Emotionen, entbindet aber nicht von der ethischen Berufspflicht.",
      D: "Rang 5: Die Zuführung zur Bestrafung ist Aufgabe der Justiz und begründet keine ärztliche Lebensrettung.",
    },
  },

  // ─── Q12 (Schwer · Experimentelle Krebstherapie & Verzweiflung) ───
  {
    id: "SEK-SE-GP2-012",
    legacyId: "se-sim2-012",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 12,
    difficulty: "Schwer",
    scenario:
      "Ein 42-jähriger Familienvater mit rasch fortschreitendem Glioblastom hat alle Standardtherapien erfolglos durchlaufen. Er verlangt von seinem Neuroonkologen die Verabreichung einer noch völlig ungetesteten, rein experimentellen Substanz aus einer präklinischen Laborphase. Der Patient droht, sich das Mittel sonst über unregulierte Internetquellen im Ausland zu bestellen und selbst intravenös zu spritzen, da er für seine Kinder um jeden Preis um jede Woche kämpfen müsse.",
    decisionContext: "Nicht-Schaden & Evidenzbasierung vs. Verzweiflung und Patientenautonomie",
    considerations: [
      {
        id: "A",
        text: "Welche unkalkulierbaren, lebensgefährlichen Toxizitäten und qualvollen Vergiftungen drohen dem Patienten durch die Einnahme einer unüberprüften Laborsubstanz?",
      },
      {
        id: "B",
        text: "Welche strengen arzneimittelrechtlichen Schutzgesetze und Deklarationen (Deklaration von Helsinki) verbieten die Verabreichung nicht-zugelassener Stoffe außerhalb kontrollierter Studien?",
      },
      {
        id: "C",
        text: "Ob die Ablehnung des Patientenwunsches zu aggressiven Reaktionen der Angehörigen in Bewertungsportalen führt.",
      },
      {
        id: "D",
        text: "Wie kann dem Patienten in einem empathischen Gespräch verdeutlicht werden, dass das Mittel sein Leiden massiv verschlimmern könnte, und ihm eine lückenlose palliative Unterstützung zugesichert werden?",
      },
      {
        id: "E",
        text: "Welches existenzielle Recht auf Hoffnung und Autonomie besitzt ein todkranker Patient bei infauster Prognose?",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4,
    },
    competencyTags: ["non_maleficence", "experimental_therapy", "compassionate_use", "evidence_based"],
    explanation:
      "Das Nicht-Schadens-Prinzip (A = Rang 1: Schutz vor qualvoller Intoxikation durch ungeprüfte Substanzen) verbietet es dem Arzt, als Erfüllungsgehilfe unkalkulierbarer Risiken zu agieren. Arzneimittelrechtliche Schutzbestimmungen und die Deklaration von Helsinki (B = Rang 2) schützen schutzlose Kranke vor Ausbeutung und Selbstschädigung. Einfühlsame Aufklärung und verlässliche Palliative Care (D = Rang 3) fangen die Verzweiflung human auf. Das subjektive Recht auf Hoffnung (E = Rang 4) ist emotional verständlich, hebelt aber den Patientenschutz nicht aus. Sorge vor Kritik im Netz (C = Rang 5) ist belanglos.",
    rationaleByRank: {
      A: "Rang 1: Ärzte dürfen Patienten niemals Mittel verabreichen, deren Wirkung tödliche Qualen auslösen kann.",
      B: "Rang 2: Ethische Forschungskodizes verhindern den Missbrauch von Verzweiflung durch unkontrollierte Experimente.",
      D: "Rang 3: Lückenlose palliative Schmerzlinderung und Beistand bieten echten Schutz vor qualvollem Leiden.",
      E: "Rang 4: Patientenautonomie begründet keinen Anspruch auf Verabreichung potenziell toxischer Substanzen.",
      C: "Rang 5: Die Furcht vor digitalem Reputationsverlust ist ein moralisch unwürdiges Entscheidungsmotiv.",
    },
  },

  // ─── Q13 (Schwer · Schweigepflicht bei HIV & Gefährdung der Partnerin) ───
  {
    id: "SEK-SE-GP2-013",
    legacyId: "se-sim2-13",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 13,
    difficulty: "Schwer",
    scenario:
      "Ein 30-jähriger Patient wird positiv auf eine akute, hochvirämische HIV-Infektion getestet. Er weigert sich strikt, seine ahnungslose Verlobte zu informieren, mit der er in Kürze heiraten will und ungeschützten Geschlechtsverkehr praktiziert. Er verbietet dem Arzt jede Weitergabe der Information und verspricht unglaubwürdig, künftig 'etwas vorsichtiger' zu sein.",
    decisionContext: "Ärztliche Schweigepflicht vs. Schutz ahnungsloser Dritter vor unheilbarer Infektion",
    considerations: [
      {
        id: "A",
        text: "Ob die Verlobte bei einer Ansteckung später zivilrechtliche Unterhaltsansprüche gegen den Patienten geltend machen könnte.",
      },
      {
        id: "B",
        text: "Wie schwer wiegt die gesetzliche und standesrechtliche Schweigepflicht des Arztes als unverzichtbare Basis des medizinischen Vertrauensschutzes?",
      },
      {
        id: "C",
        text: "Welche engen Voraussetzungen für einen rechtfertigenden Notstand nach § 34 StGB und bioethischen Leitlinien erlauben das Durchbrechen des Arztgeheimnisses?",
      },
      {
        id: "D",
        text: "Welches akute, irreversible Risiko einer schweren, chronischen und potenziell lebensverkürzenden Infektion besteht für die ahnungslose Verlobte?",
      },
      {
        id: "E",
        text: "Wie kann in wiederholten intensiven Beratungsgesprächen versucht werden, den Patienten doch noch zur freiwilligen, eigenverantwortlichen Aufklärung der Partnerin zu bewegen?",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 3,
      C: 2,
      D: 1,
      E: 4,
    },
    competencyTags: ["confidentiality_exception", "third_party_protection", "proportionality", "harm_prevention"],
    explanation:
      "Die Abwendung einer schweren, irreversiblen und potenziell tödlichen Infektion von Leib und Leben Dritter (D = Rang 1) stellt das überragende Schutzgut dar. Die strikte Prüfung der Notstandskriterien nach Recht und Ethik (C = Rang 2) sichert das rechtsstaatliche Vorgehen vor der Durchbrechung. Die fundamentale Bedeutung der ärztlichen Schweigepflicht (B = Rang 3) erfordert größte Zurückhaltung und macht intensive Überzeugungsarbeit (E = Rang 4) als milderes Mittel zwingend. Zivilrechtliche Vermögensfolgen (A = Rang 5) sind im Vergleich zum Gesundheitsschutz völlig bedeutungslos.",
    rationaleByRank: {
      D: "Rang 1: Der Schutz unbeteiligter Dritter vor schwersten körperlichen Schäden rechtfertigt Notstandsmaßnahmen.",
      C: "Rang 2: Rechtsstaatliche Notstandsnormen definieren die strengen Ausnahmebedingungen für die Offenbarung.",
      B: "Rang 3: Das Berufsgeheimnis schützt das Vertrauen aller Patienten und darf nur als Ultima Ratio weichen.",
      E: "Rang 4: Vorrang des mildesten Mittels gebietet die beharrliche Motivation zur Selbsteröffnung.",
      A: "Rang 5: Finanzielle und materielle Scheidungs- oder Haftungsfragen spielen bei der Lebensrettung keine Rolle.",
    },
  },

  // ─── Q14 (Schwer · Palliative Sedierung & Angehörigen-Überforderung) ───
  {
    id: "SEK-SE-GP2-014",
    legacyId: "se-sim2-14",
    simulationId: "generalprobe-2",
    subtest: "SE",
    questionNumber: 14,
    difficulty: "Schwer",
    scenario:
      "Eine 88-jährige Patientin mit fortgeschrittener zerebraler Ischämie befindet sich im Sterbeprozess. Sie ist bewusstseinsgetrübt und stöhnt bei Lagewechseln leise, zeigt jedoch nach differenzierter Schmerzbeurteilung (BESD-Skala) keine Schmerzen oder vegetative Stresszeichen. Der anwesende Sohn verlangt ultimativ, die Mutter durch eine tiefe Dauer-Sedierung völlig 'schlafen zu legen', da er das Stöhnen seelisch nicht ertrage. Die Tochter widerspricht entschieden: Ihre Mutter habe immer betont, bis zum letzten Atemzug im Kreis der Familie wach bleiben zu wollen.",
    decisionContext: "Palliative Sedierung zur Leidenslinderung vs. unindizierte Ruhigstellung auf Wunsch Dritter",
    considerations: [
      {
        id: "A",
        text: "Welche professionellen Leitlinien der Palliativmedizin warnen vor einer tiefen Sedierung, die primär der Beruhigung überforderter Angehöriger statt der Linderung objektiven Leidens der Patientin dient?",
      },
      {
        id: "B",
        text: "Wie kann das tatsächliche Schmerz- und Belastungsempfinden der Patientin über standardisierte Fremdbeobachtungsinstrumente (BESD) zuverlässig evaluiert werden?",
      },
      {
        id: "C",
        text: "Wie lautet der mutmaßliche Wille der Patientin bezüglich Bewusstseinserhalt versus vollständiger Sedierung am Lebensende?",
      },
      {
        id: "D",
        text: "Ob die lautstarke Auseinandersetzung zwischen den Geschwistern die Arbeitsruhe des Pflegeteams auf Station beeinträchtigt.",
      },
      {
        id: "E",
        text: "Wie kann dem Sohn durch seelsorgerische und psychologische Unterstützung geholfen werden, seine eigene Hilflosigkeit und Trauer auszuhalten?",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 1,
      C: 2,
      D: 5,
      E: 4,
    },
    competencyTags: ["palliative_sedation", "end_of_life", "patient_will", "family_grief"],
    explanation:
      "Die objektive klinische Erfassung des tatsächlichen Leidenszustands der Sterbenden (B = Rang 1) ist die zwingende Voraussetzung für jede medikamentöse Intervention. Der mutmaßliche Wille der Patientin zum Bewusstseinserhalt (C = Rang 2) bindet das ärztliche Handeln. Das ethische Verbot, Sedativa zur Entlastung von Angehörigen statt zur Symptomkontrolle der Patientin einzusetzen (A = Rang 3), schützt vor unethischer Ruhigstellung. Empathischer Beistand für den leidenden Sohn (E = Rang 4) lindert dessen Not humanitär. Sorgen um die Stationsruhe (D = Rang 5) sind dem Sterbeprozess moralisch vollkommen untergeordnet.",
    rationaleByRank: {
      B: "Rang 1: Eine medizinische Indikation zur Sedierung erfordert den Nachweis von therapierefraktärem Leiden.",
      C: "Rang 2: Das Selbstbestimmungsrecht der Patientin über ihr Sterben gilt über ihren Tod hinaus.",
      A: "Rang 3: Die Instrumentalisierung einer Sterbenden zur Beruhigung von Angehörigen ist bioethisch unzulässig.",
      E: "Rang 4: Seelsorgerische Begleitung hilft Angehörigen, die schwere Realität des Sterbeprozesses mitzutragen.",
      D: "Rang 5: Betriebliche Stationsruhe ist gegenüber existenziellem Sterbebeistand von geringstem ethischem Gewicht.",
    },
  },
];

export const GENERALPROBE_2_SE_SIMULATION_DATA: SeSimulationData = {
  simulationId: "generalprobe-2",
  simNumber: 2,
  title: "MedAT-H Generalprobe #2 — Soziales Entscheiden",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (1260s) · Ethische Reihung von Handlungsprioritäten (1 bis 5)",
  timeLimitSeconds: 21 * 60,
  questions: RAW_GENERALPROBE_2_SE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #2 runtime and review engine
 */
export const GENERALPROBE_2_SE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_SE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = toStoredQuestion(q, GENERALPROBE_2_SE_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-SE-GP2-${numStr}`,
      legacyId: `se-sim2-${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "SE", "Soziales Entscheiden", "Generalprobe #2", `SEK-SE-GP2-${numStr}`],
      seData: {
        ...q,
        id: `SEK-SE-GP2-${numStr}`,
        legacyId: `se-sim2-${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
