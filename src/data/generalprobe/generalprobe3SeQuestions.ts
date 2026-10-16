/**
 * MedAT SEK — Soziales Entscheiden (SE) — Generalprobe #3
 * Exactly 14 Questions · 21 Minutes Exam Time (1260 seconds, 90s / task)
 * 
 * IDs: SEK-SE-GP3-001 through SEK-SE-GP3-014 (aliased to legacy se-sim3-01 .. 14)
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

export const RAW_GENERALPROBE_3_SE_QUESTIONS: SeQuestionData[] = [
  // ─── Q01 (Leicht · Organallokation & Abstinenzkriterium) ───
  {
    id: "SEK-SE-GP3-001",
    legacyId: "se-sim3-01",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 1,
    difficulty: "Leicht",
    scenario:
      "Ein 52-jähriger Patient mit alkoholischer Leberzirrhose steht an vorderer Stelle der Eurotransplant-Warteliste für eine Spenderleber. Bei einer unangekündigten Kontrolluntersuchung weist die Ambulanzärztin im Blut einen eindeutig positiven Ethylglucuronid-Befund nach, der einen massiven Alkoholkonsum am vergangenen Wochenende belegt. Der Patient bricht in Tränen aus und fleht die Ärztin an, das Laborergebnis nicht in die Akte aufzunehmen, da ein Verstoß gegen die 6-monatige Abstinenzregel zur sofortigen Abmeldung von der Warteliste führt und seine Überlebenschance ohne Transplantation minimal ist.",
    decisionContext: "Regelintegrität & Verteilungsgerechtigkeit in der Transplantationsmedizin vs. Mitleid mit dem Einzelnen",
    considerations: [
      {
        id: "A",
        text: "Welche rechtlichen und berufsrechtlichen Konsequenzen drohen der Ärztin persönlich, wenn sie einen positiven Laborbefund wissentlich unterschlägt?",
      },
      {
        id: "B",
        text: "Wie wirkt sich die Abmeldung von der Warteliste auf die psychische Stabilität und die verbleibende Lebenserwartung des Patienten aus?",
      },
      {
        id: "C",
        text: "Welche ethische Pflicht zur Sicherung der Verteilungsgerechtigkeit besteht gegenüber allen anderen schwerstkranken Patienten auf der Warteliste, die sich an die Abstinenzregeln halten?",
      },
      {
        id: "D",
        text: "Ob der Patient der Ärztin Vorwürfe macht und das Vertrauensverhältnis zur Ambulanz dauerhaft zerstört wird.",
      },
      {
        id: "E",
        text: "Wie kann die Einhaltung der verbindlichen medizinischen Vergabekriterien gewährleistet werden, um das öffentliche Vertrauen in das gesamte Organspendesystem nicht zu gefährden?",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 4,
      C: 1,
      D: 5,
      E: 2,
    },
    competencyTags: ["justice", "allocation", "transplantation", "integrity"],
    explanation:
      "Die Verteilungsgerechtigkeit knapper Spenderorgane verlangt absolute Regeltreue, um kein Leben eines regelkonformen Patienten auf der Warteliste zu opfern (C = Rang 1). Der Schutz des öffentlichen Vertrauens in die Integrität der Organvergabe ist existenziell für die Spendenbereitschaft der gesamten Bevölkerung (E = Rang 2). Gesetzliche Dokumentationspflichten sichern das System gegen Willkür und Korruption ab (A = Rang 3). Individuelles Mitleid mit dem Patienten ist emotional verständlich, darf aber nicht auf Kosten Dritter bevorzugt werden (B = Rang 4). Vorwürfe des Patienten sind gegenüber gerechter Allokation von geringster Bedeutung (D = Rang 5).",
    rationaleByRank: {
      C: "Rang 1: Die Verteilungsgerechtigkeit knapper Spenderorgane verlangt absolute Regeltreue, um kein Leben eines regelkonformen Patienten auf der Warteliste zu opfern.",
      E: "Rang 2: Der Schutz des öffentlichen Vertrauens in die Integrität der Organvergabe ist existenziell für die Spendenbereitschaft der gesamten Bevölkerung.",
      A: "Rang 3: Gesetzliche Dokumentationspflichten sichern das System gegen Willkür und Korruption ab.",
      B: "Rang 4: Individuelles Mitleid mit dem Patienten ist emotional verständlich, darf aber nicht auf Kosten Dritter bevorzugt werden.",
      D: "Rang 5: Persönliche Kränkungen oder Vorwürfe des Patienten sind gegenüber gerechter Organallokation von geringster Bedeutung.",
    },
  },

  // ─── Q02 (Leicht · Häusliche Gewalt & Selbstbestimmung) ───
  {
    id: "SEK-SE-GP3-002",
    legacyId: "se-sim3-02",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 2,
    difficulty: "Leicht",
    scenario:
      "In der Notfallambulanz behandelt eine Assistenzärztin eine 28-jährige verheiratete Frau mit einer dislozierten Rippenfraktur, frischen Hämatomen im Gesicht und Würgemalen am Hals. Die Verletzungen sind eindeutig Folge massiver körperlicher Gewalt. Nach behutsamer Nachfrage bricht die Patientin weinend zusammen und gesteht, dass ihr Ehemann sie im Streit misshandelt habe. Sie verbietet der Ärztin jedoch unter Tränen und mit panischer Angst, die Polizei zu verständigen oder den Verdacht auf häusliche Gewalt im Arztbrief zu erwähnen, da sie fürchtet, ihr Mann werde sie sonst nach ihrer Entlassung umbringen.",
    decisionContext: "Schutz vor lebensgefährlicher häuslicher Gewalt vs. Selbstbestimmungsrecht und Schweigepflicht der mündigen Patientin",
    considerations: [
      {
        id: "A",
        text: "Welches gesetzliche Recht auf informationelle Selbstbestimmung und ärztliche Schweigepflicht hat die einwilligungsfähige, volljährige Patientin?",
      },
      {
        id: "B",
        text: "Welche innerbetrieblichen Richtlinien der Klinik existieren für den Umgang mit Opfern häuslicher Gewalt?",
      },
      {
        id: "C",
        text: "Welche akute Gefahr für Leib und Leben der Patientin besteht bei einer ungeschützten Rückkehr in die gemeinsame Wohnung mit dem Täter?",
      },
      {
        id: "D",
        text: "Wie können der Patientin professionelle Schutzangebote (Frauenhaus, Opferschutz, anonymer Sozialdienst) vermittelt werden, ohne sie gegen ihren Willen zu übergehen?",
      },
      {
        id: "E",
        text: "Ob die Polizei der Ärztin vorwerfen könnte, bei einer unterlassenen Anzeige die Strafverfolgung eines Verbrechens zu behindern.",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 4,
      C: 1,
      D: 3,
      E: 5,
    },
    competencyTags: ["domestic_violence", "patient_autonomy", "confidentiality", "safety"],
    explanation:
      "Die Abwendung tödlicher Gewalt durch Erkennen des vitalen Gefährdungspotenzials steht an oberster Stelle (C = Rang 1). Bei einwilligungsfähigen Erwachsenen gilt die ärztliche Schweigepflicht; eine Anzeige gegen den ausdrücklichen Willen des Opfers kann dessen Gefahr sogar unkalkulierbar steigern (A = Rang 2). Die Stärkung der Autonomie durch Vermittlung von Schutz- und Hilfsangeboten befähigt das Opfer zur eigenständigen Flucht aus der Gewaltspirale (D = Rang 3). Klinische Leitfäden geben sinnvolle Handlungsstrukturen vor (B = Rang 4). Befürchtungen bezüglich polizeilicher Beurteilungen sind rechtlich unbegründet (E = Rang 5).",
    rationaleByRank: {
      C: "Rang 1: Die Abwendung tödlicher Gewalt durch Erkennen des vitalen Gefährdungspotenzials steht an oberster Stelle.",
      A: "Rang 2: Bei einwilligungsfähigen Erwachsenen gilt die ärztliche Schweigepflicht; eine Anzeige gegen den ausdrücklichen Willen des Opfers kann dessen Gefahr sogar unkalkulierbar steigern.",
      D: "Rang 3: Die Stärkung der Autonomie durch Vermittlung von Schutz- und Hilfsangeboten befähigt das Opfer zur eigenständigen Flucht aus der Gewaltspirale.",
      B: "Rang 4: Klinische Leitfäden geben sinnvolle Handlungsstrukturen vor.",
      E: "Rang 5: Befürchtungen bezüglich polizeilicher Beurteilungen sind rechtlich unbegründet, da die ärztliche Schweigepflicht die Strafanzeigepflicht bei nicht-vollendeten Verbrechen überwiegt.",
    },
  },

  // ─── Q03 (Leicht · Pharma-Sponsoring & Unabhängigkeit) ───
  {
    id: "SEK-SE-GP3-003",
    legacyId: "se-sim3-03",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 3,
    difficulty: "Leicht",
    scenario:
      "Eine erfahrene Hausärztin wird von einem Pharmavertreter besucht, der für ein neu zugelassenes Antihypertensivum wirbt. Der Vertreter bietet der Ärztin eine voll finanzierte Teilnahme an einem einwöchigen Fachkongress auf Hawaii (Flug in der Business Class, 5-Sterne-Luxushotel und 2.000 Euro Honorar für eine angebliche 'Beratertätigkeit') an. Im Gegenzug verlangt er die Zusage, in den kommenden sechs Monaten mindestens 50 Patienten ihrer Praxis auf das neue, viermal so teure Präparat umzustellen, obwohl klinische Vergleichsstudien keinen therapeutischen Zusatznutzen gegenüber den bisherigen, kostengünstigen Standardmedikamenten belegen.",
    decisionContext: "Unabhängigkeit der ärztlichen Therapieentscheidung und Solidarsystem vs. Vorteilsannahme und persönliche Vergünstigungen",
    considerations: [
      {
        id: "A",
        text: "Welche attraktiven Erholungsmöglichkeiten und Fortbildungspunkte bietet die Kongressreise für die Ärztin persönlich?",
      },
      {
        id: "B",
        text: "Welche moralische und standesrechtliche Pflicht zur strikten Unabhängigkeit von kommerziellen Interessen gilt für ärztliche Verordnungsentscheidungen?",
      },
      {
        id: "C",
        text: "Welche ungerechtfertigten finanziellen Mehrkosten entstünden für die Versichertengemeinschaft durch die Verschreibung teurerer Analogpräparate ohne Zusatznutzen?",
      },
      {
        id: "D",
        text: "Welches therapeutische Risiko oder welcher Nutzen ergibt sich für die Patienten durch eine medizinisch unbegründete Medikamentenumstellung?",
      },
      {
        id: "E",
        text: "Ob der Pharmavertreter gekränkt reagiert und der Praxis künftig keine kostenlosen Verbandsmaterialmuster mehr liefert.",
      },
    ],
    referenceRanking: {
      A: 4,
      B: 1,
      C: 3,
      D: 2,
      E: 5,
    },
    competencyTags: ["professional_integrity", "corruption_prevention", "evidence_based_medicine", "justice"],
    explanation:
      "Die Unabhängigkeit der ärztlichen Entscheidung von Korruption und Bestechung ist das ethische Fundament des Arzt-Patienten-Vertrauens (B = Rang 1). Patienten dürfen niemals aus finanziellen Vorteilen des Arztes experimentellen oder unnötigen Medikamentenumstellungen mit Nebenwirkungsrisiken ausgesetzt werden (D = Rang 2). Der Schutz des Solidarsystems der Krankenversicherung vor unwirtschaftlichen Ausgaben schützt Ressourcen für tatsächlich wirksame Behandlungen (C = Rang 3). Persönliche Freizeit- und Reisevorteile des Arztes sind in Behandlungsentscheidungen ethisch strikt unzulässig (A = Rang 4). Geringfügige Praxis-Werbegeschenke sind im Vergleich zu ärztlicher Integrität völlig irrelevant (E = Rang 5).",
    rationaleByRank: {
      B: "Rang 1: Die Unabhängigkeit der ärztlichen Entscheidung von Korruption und Bestechung ist das ethische Fundament des Arzt-Patienten-Vertrauens.",
      D: "Rang 2: Patienten dürfen niemals aus finanziellen Vorteilen des Arztes experimentellen oder unnötigen Medikamentenumstellungen mit Nebenwirkungsrisiken ausgesetzt werden.",
      C: "Rang 3: Der Schutz des Solidarsystems der Krankenversicherung vor unwirtschaftlichen Ausgaben schützt Ressourcen für tatsächlich wirksame Behandlungen.",
      A: "Rang 4: Persönliche Freizeit- und Reisevorteile des Arztes sind in Behandlungsentscheidungen ethisch strikt unzulässig.",
      E: "Rang 5: Geringfügige Praxis-Werbegeschenke sind im Vergleich zu ärztlicher Integrität völlig irrelevant.",
    },
  },

  // ─── Q04 (Leicht · Fahreignung bei beginnender Demenz) ───
  {
    id: "SEK-SE-GP3-004",
    legacyId: "se-sim3-04",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 4,
    difficulty: "Leicht",
    scenario:
      "Ein 78-jähriger Patient mit beginnender Demenz vom Alzheimer-Typ zeigt bei einer testpsychologischen Untersuchung ausgeprägte Orientierungsstörungen, Gesichtsfeldausfälle und eine drastisch verlängerte Reaktionszeit. Bei der Besprechung der Ergebnisse teilt ihm die Neurologin mit, dass er aus medizinischer Sicht nicht mehr fahrtauglich sei und das Autofahren sofort einstellen müsse. Der Patient reagiert empört und uneinsichtig: Er fahre seit 60 Jahren unfallfrei, wohne allein auf dem Land und werde sich sein Auto keinesfalls wegnehmen lassen. Er verlässt wütend die Praxis und kündigt an, weiterhin täglich mit dem Wagen zur Apotheke und zum Supermarkt zu fahren.",
    decisionContext: "Schutz unschuldiger Verkehrsteilnehmer vor schweren Unfällen vs. Mobilität, Lebensqualität und Schweigepflicht",
    considerations: [
      {
        id: "A",
        text: "Welche akute, lebensgefährliche Bedrohung für unbeteiligte Dritte im Straßenverkehr geht von einem fahruntauglichen Demenzpatienten aus?",
      },
      {
        id: "B",
        text: "Wie kann in Zusammenarbeit mit Angehörigen oder sozialen Diensten eine alternative Mobilität organisiert werden, um die soziale Isolation des Patienten zu verhindern?",
      },
      {
        id: "C",
        text: "Welche gesetzlichen Voraussetzungen des rechtfertigenden Notstands müssen erfüllt sein, um die ärztliche Schweigepflicht zur Gefahrenabwehr gegenüber der Verkehrsbehörde rechtmäßig zu durchbrechen?",
      },
      {
        id: "D",
        text: "Ob die Praxisleitung Beschwerden von Angehörigen fürchtet, wenn die Behörden eingeschaltet werden.",
      },
      {
        id: "E",
        text: "Wie kann dem Patienten im erneuten Gespräch empathisch verdeutlicht werden, dass das Fahrverbot seinem eigenen Schutz und dem Schutz anderer dient?",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 3,
      C: 2,
      D: 5,
      E: 4,
    },
    competencyTags: ["public_safety", "fitness_to_drive", "dementia", "patient_autonomy"],
    explanation:
      "Die Abwendung tödlicher Gefahren für unschuldige Passanten und den Patienten selbst hat im Straßenverkehr höchste Priorität (A = Rang 1). Der rechtfertigende Notstand erlaubt die Meldung an die Führerscheinbehörde nur nach präziser Prüfung der Rechtsgüterabwägung (C = Rang 2). Die Organisation praktischer Mobilitätsalternativen sichert die Menschenwürde und lindert die Einschränkung der Autonomie (B = Rang 3). Deeskalierende Aufklärung ist wichtig, darf aber bei akuter Gefährdung Dritter notwendige Sicherheitsmeldungen nicht endlos verzögern (E = Rang 4). Reputationsbedenken der Praxis sind gegenüber vitalem Unfallschutz vollkommen unbedeutend (D = Rang 5).",
    rationaleByRank: {
      A: "Rang 1: Die Abwendung tödlicher Gefahren für unschuldige Passanten und den Patienten selbst hat im Straßenverkehr höchste Priorität.",
      C: "Rang 2: Der rechtfertigende Notstand (§ 34 StGB) erlaubt und gebietet die Meldung an die Führerscheinbehörde nur nach präziser Prüfung der Rechtsgüterabwägung.",
      B: "Rang 3: Die Organisation praktischer Mobilitätsalternativen sichert die Menschenwürde und lindert die Einschränkung der Autonomie.",
      E: "Rang 4: Deeskalierende Aufklärung ist wichtig, darf aber bei akuter Gefährdung Dritter notwendige Sicherheitsmeldungen nicht endlos verzögern.",
      D: "Rang 5: Reputationsbedenken der Praxis sind gegenüber vitalem Unfallschutz vollkommen unbedeutend.",
    },
  },

  // ─── Q05 (Mittel · Nadelstichverletzung & Testung ohne Einwilligung) ───
  {
    id: "SEK-SE-GP3-005",
    legacyId: "se-sim3-05",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 5,
    difficulty: "Mittel",
    scenario:
      "Mitten im Nachtdienst auf der Intensivstation sticht sich eine Medizinstudentin im Praktischen Jahr beim Entsorgen einer Blutentnahmekanüle tief in den Daumen. Die Kanüle wurde zuvor bei einem polytraumatisierten, bewusstlosen Patienten verwendet, der nach einem Autounfall intubiert ist und dessen Infektionsstatus völlig unbekannt ist. Die Studentin steht unter Schock, weint panisch vor Angst vor einer HIV- oder Hepatitis-C-Infektion und bittet den Diensthabenden flehentlich, das im Zentrallabor vorhandene Serum des Patienten sofort auf HIV und HCV untersuchen zu lassen, damit sie weiß, ob sie eine toxische Postexpositionsprophylaxe (PEP) einnehmen muss.",
    decisionContext: "Gesundheitsschutz & Angst der Mitarbeiterin vs. Verbot unautorisierter Diagnostik am bewusstlosen Patienten",
    considerations: [
      {
        id: "A",
        text: "Welche schweren körperlichen Nebenwirkungen und psychischen Belastungen drohen der Studentin durch die prophylaktische Einnahme von PEP-Medikamenten?",
      },
      {
        id: "B",
        text: "Welches unveräußerliche Recht auf körperliche Unversehrtheit und informationelle Selbstbestimmung verbietet medizinische Testungen an einwilligungsunfähigen Patienten ohne mutmaßlichen Patientenwillen?",
      },
      {
        id: "C",
        text: "Wie kann die Studentin durch den Betriebsarzt und D-Arzt sofort leitliniengerecht versorgt, arbeitsmedizinisch dokumentiert und psychologisch beruhigt werden?",
      },
      {
        id: "D",
        text: "Welche gesetzlichen und ethischen Notfallkriterien erlauben eine umgehende Kontaktaufnahme zu den Angehörigen oder dem Betreuungsgericht zur Einholung einer rechtswirksamen Einwilligung?",
      },
      {
        id: "E",
        text: "Ob die Studentin aus Verärgerung über die Verweigerung des Soforttests rechtliche Schritte gegen die Klinik einleitet.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 1,
      C: 4,
      D: 2,
      E: 5,
    },
    competencyTags: ["occupational_safety", "informed_consent", "autonomy", "infection_risk"],
    explanation:
      "Das Grundrecht auf informationelle Selbstbestimmung verbietet heimliche Blutuntersuchungen an wehrlosen Patienten; der Zweck heiligt nicht die Verletzung von Patientenrechten (B = Rang 1). Die schnellstmögliche Einholung einer legalen Einwilligung über Bevollmächtigte oder Betreuer ist der rechtskonforme Weg zur Klärung (D = Rang 2). Das reale Übertragungsrisiko muss sachlich evaluiert werden, da die PEP sofort als Standardmaßnahme begonnen und bei negativem Befund abgesetzt werden kann (A = Rang 3). Die leitliniengerechte D-ärztliche Erstversorgung sichert den Arbeitsschutz der Betroffenen ohne Rechtsbruch (C = Rang 4). Klagedrohungen der verängstigten Studentin sind gegenüber verfassungsrechtlichen Patientenrechten von geringster Bedeutung (E = Rang 5).",
    rationaleByRank: {
      B: "Rang 1: Das Grundrecht auf informationelle Selbstbestimmung verbietet heimliche Blutuntersuchungen an wehrlosen Patienten; der Zweck heiligt nicht die Verletzung von Patientenrechten.",
      D: "Rang 2: Die schnellstmögliche Einholung einer legalen Einwilligung über Bevollmächtigte oder Betreuer ist der rechtskonforme Weg zur Klärung.",
      A: "Rang 3: Das reale Übertragungsrisiko muss sachlich evaluiert werden, da die PEP sofort als Standardmaßnahme begonnen und bei negativem Befund abgesetzt werden kann.",
      C: "Rang 4: Die leitliniengerechte D-ärztliche Erstversorgung sichert den Arbeitsschutz der Betroffenen ohne Rechtsbruch.",
      E: "Rang 5: Klagedrohungen der verängstigten Studentin sind gegenüber verfassungsrechtlichen Patientenrechten von geringster Bedeutung.",
    },
  },

  // ─── Q06 (Mittel · Pränataldiagnostik & Geschlechtsselektion) ───
  {
    id: "SEK-SE-GP3-006",
    legacyId: "se-sim3-06",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 6,
    difficulty: "Mittel",
    scenario:
      "Ein wohlhabendes Ehepaar erscheint in einer humangenetischen Praxis zur Befundbesprechung eines nicht-invasiven Pränataltests (NIPT) in der 10. Schwangerschaftswoche. Die Trisomie-Screenings waren unauffällig. Die Eltern verlangen nun ultimativ die sofortige Nennung des kindlichen Geschlechts. Auf den Hinweis des Genetikers, dass das Gendiagnostikgesetz die Mitteilung des Geschlechts vor Ablauf der 12. Schwangerschaftswoche strikt untersagt, erklärt der Ehemann offen: Sollte es ein Mädchen sein, werde seine Frau die Schwangerschaft in einer ausländischen Grenzklinik abbrechen lassen, da in seiner Familie aus dynastischen und traditionellen Gründen nur ein männlicher Stammhalter akzeptiert werde.",
    decisionContext: "Gesetzlicher Schutz vor geschlechtsselektivem Schwangerschaftsabbruch vs. Informationsverlangen der Eltern",
    considerations: [
      {
        id: "A",
        text: "Ob die Eltern dem Arzt Diskriminierung ihrer kulturellen Traditionen vorwerfen und schlechte Bewertungen im Internet hinterlassen.",
      },
      {
        id: "B",
        text: "Welcher wirtschaftliche Honorarverlust droht der Praxis, wenn das Ehepaar die Behandlung abbricht und eine Privatklinik im Ausland aufsucht?",
      },
      {
        id: "C",
        text: "Welches strikte gesetzliche Verbot der Mitteilung des Geschlechts vor Ablauf der 12. Schwangerschaftswoche nach dem Gendiagnostikgesetz bindet den Arzt?",
      },
      {
        id: "D",
        text: "Wie kann den Eltern in einem vertiefenden Beratungsgespräch der ethische Wert des Kindes unabhängig vom Geschlecht vermittelt werden?",
      },
      {
        id: "E",
        text: "Welche gesetzliche und ethische Schutzpflicht besteht für das ungeborene Leben vor selektiven Abbrüchen aus rein geschlechtsspezifischen Gründen?",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 4,
      C: 2,
      D: 3,
      E: 1,
    },
    competencyTags: ["prenatal_diagnosis", "ethics_of_life", "legal_standards", "counseling"],
    explanation:
      "Der Schutz des Lebens vor eugenischer oder geschlechtsselektiver Selektion ist das höchste moralische Schutzgut der Pränatalethik (E = Rang 1). Das gesetzliche Mitteilungsverbot nach GenDG schützt Föten vor gezielter Abtreibung nach Geschlechterdiskriminierung (C = Rang 2). Psychologische und ethische Konfliktberatung versucht, die diskriminierenden Motive der Eltern aufzuarbeiten (D = Rang 3). Ökonomische Honorarinteressen der Praxis sind gegenüber dem Lebensschutz völlig bedeutungslos (B = Rang 4). Öffentliche Bewertungen oder Vorwürfe berühren den ethischen Kern des Lebensschutzes in keiner Weise (A = Rang 5).",
    rationaleByRank: {
      E: "Rang 1: Der Schutz des Lebens vor eugenischer oder geschlechtsselektiver Selektion ist das höchste moralische Schutzgut der Pränatalethik.",
      C: "Rang 2: Das gesetzliche Mitteilungsverbot nach GenDG schützt Föten vor gezielter Abtreibung nach Geschlechterdiskriminierung.",
      D: "Rang 3: Psychologische und ethische Konfliktberatung versucht, die diskriminierenden Motive der Eltern aufzuarbeiten.",
      B: "Rang 4: Ökonomische Honorarinteressen der Praxis sind gegenüber dem Lebensschutz völlig bedeutungslos.",
      A: "Rang 5: Öffentliche Bewertungen oder Vorwürfe berühren den ethischen Kern des Lebensschutzes in keiner Weise.",
    },
  },

  // ─── Q07 (Mittel · Behandlungsverzicht bei Schwerstverbrennung) ───
  {
    id: "SEK-SE-GP3-007",
    legacyId: "se-sim3-07",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 7,
    difficulty: "Mittel",
    scenario:
      "Ein 45-jähriger Familienvater wird nach einer Kesselexplosion in einem Chemiewerk mit drittgradigen Verbrennungen von 80 % der Körperoberfläche und schwerem Inhalationstrauma in das Schwerbrandverletztenzentrum eingeliefert. Vor der anstehenden Intubation ist er für wenige Minuten voll orientiert, leidet unter unvorstellbaren Schmerzen und begreift das Ausmaß der Verletzung. Mit schwacher, aber entschlossener Stimme fleht er das Notfallteam an: „Bitte intubieren Sie mich nicht. Lassen Sie mich sterben, geben Sie mir nur etwas gegen die Schmerzen. Ich will nicht als entstellter Krüppel und Pflegefall vegetieren.“ Die behandelnde Notärztin weiß, dass seine Überlebenschance bei maximaler intensivmedizinischer Therapie bei etwa 15 bis 20 % liegt, aber monatelange Qualen und schwerste Behinderungen bedeuten würde.",
    decisionContext: "Patientenautonomie und Recht auf Behandlungsverzicht vs. ärztliche Lebensrettungspflicht im akuten Schockzustand",
    considerations: [
      {
        id: "A",
        text: "Welche ärztliche Pflicht zur Lebensrettung und Durchführung lebenserhaltender Sofortmaßnahmen gilt bei akuten Notfallpatienten grundsätzlich?",
      },
      {
        id: "B",
        text: "Ob die Angehörigen später mit der Entscheidung des Teams einverstanden sein werden oder schwere Vorwürfe erheben.",
      },
      {
        id: "C",
        text: "Welche juristischen Haftungsrisiken für fahrlässige Tötung oder unterlassene Hilfeleistung drohen dem Behandlungsteam bei einem Therapieverzicht?",
      },
      {
        id: "D",
        text: "Inwieweit ist der Patient im Zustand eines extremen Schockgeschehens und unerträglicher Schmerzen überhaupt freiverantwortlich einwilligungs- und urteilsfähig?",
      },
      {
        id: "E",
        text: "Welche unumstößliche ethische Pflicht zur maximalen palliativen Schmerzlinderung besteht unabhängig von der Entscheidung über lebenserhaltende Maßnahmen?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 5,
      C: 4,
      D: 1,
      E: 3,
    },
    competencyTags: ["autonomy", "palliative_care", "capacity_to_consent", "end_of_life"],
    explanation:
      "Die Klärung der tatsächlichen Freiverantwortlichkeit ist der ethische Dreh- und Angelpunkt: Unter extremem Schmerz und Schock ist die Willensbildung oft affektiv verzerrt (D = Rang 1). Im Zweifel für das Leben (in dubio pro vita) muss zunächst das Überleben gesichert werden, bis der freie Wille zweifelsfrei geklärt werden kann (A = Rang 2). Die Linderung unerträglicher Schmerzen ist eine unverzügliche humanitäre Pflicht, die parallel sofort umgesetzt werden muss (E = Rang 3). Strafrechtliche Haftungsrisiken leiten sich aus der korrekten medizinisch-ethischen Güterabwägung ab (C = Rang 4). Mutmaßliche spätere Reaktionen Dritter sind gegenüber der vitalen Akutentscheidung am Notfallpatienten nachrangig (B = Rang 5).",
    rationaleByRank: {
      D: "Rang 1: Die Klärung der tatsächlichen Freiverantwortlichkeit ist der ethische Dreh- und Angelpunkt: Unter extremem Schmerz und Schock ist die Willensbildung oft affektiv verzerrt.",
      A: "Rang 2: Im Zweifel für das Leben (in dubio pro vita) muss zunächst das Überleben gesichert werden, bis der freie Wille zweifelsfrei geklärt werden kann.",
      E: "Rang 3: Die Linderung unerträglicher Schmerzen ist eine unverzügliche humanitäre Pflicht, die parallel sofort umgesetzt werden muss.",
      C: "Rang 4: Strafrechtliche Haftungsrisiken leiten sich aus der korrekten medizinisch-ethischen Güterabwägung ab.",
      B: "Rang 5: Mutmaßliche spätere Reaktionen Dritter sind gegenüber der vitalen Akutentscheidung am Notfallpatienten nachrangig.",
    },
  },

  // ─── Q08 (Mittel · Diskriminierung & Triage nach Herkunft) ───
  {
    id: "SEK-SE-GP3-008",
    legacyId: "se-sim3-08",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 8,
    difficulty: "Mittel",
    scenario:
      "In der Notaufnahme einer Großstadt herrscht am Samstagabend Überfüllung. Ein 32-jähriger Mann ausländischer Herkunft, der kein Deutsch spricht, krümmt sich vor Schmerzen im Wartezimmer. Die Triage-Pflegekraft schiebt seine Akte wiederholt nach hinten und lässt später eingetroffene einheimische Patienten mit leichten Schnittwunden und Prellungen vorziehen. Als ein PJ-Student die Pflegekraft anspricht, entgegnet diese gereizt: „Der simuliert doch nur, um Asylvorteile zu bekommen, und ohne Dolmetscher können wir den sowieso nicht gebrauchen. Der kann warten.“ Bei einer kurzen orientierenden Untersuchung stellt der Student eine brettharte Bauchdecke und Tachykardie fest – dringender Verdacht auf eine gedeckte Magenperforation mit beginnender Peritonitis.",
    decisionContext: "Diskriminierungsfreie medizinische Dringlichkeitseinstufung (Triage) vs. kollegiale Konfliktvermeidung und rassistische Vorurteile",
    considerations: [
      {
        id: "A",
        text: "Welche unmittelbare Lebensgefahr für den Patienten besteht durch eine unerkannte Magenperforation und beginnende Sepsis?",
      },
      {
        id: "B",
        text: "Welches professionelle, standesrechtliche Verbot jeglicher Diskriminierung nach ethnischer Herkunft oder Sprache gilt in der Notfallmedizin?",
      },
      {
        id: "C",
        text: "Ob die Pflegekraft beleidigt reagiert und die zukünftige Zusammenarbeit mit dem Studenten auf Station belastet wird.",
      },
      {
        id: "D",
        text: "Wie kann der Patient sofort an der Pflegekraft vorbei dem diensthabenden Chirurgen vorgestellt werden, um eine notfallmäßige Diagnostik einzuleiten?",
      },
      {
        id: "E",
        text: "Wie kann die rassistische Fehlbeurteilung der Pflegekraft im Nachgang strukturell über die Klinikleitung und das CIRS aufgearbeitet werden?",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 3,
      C: 5,
      D: 2,
      E: 4,
    },
    competencyTags: ["anti_discrimination", "triage_justice", "patient_advocacy", "equal_care"],
    explanation:
      "Das akute Abdomen ist ein lebensbedrohlicher Notfall; die unmittelbare Abwendung des septischen Schocks hat absolute Priorität (A = Rang 1). Die direkte Einleitung der chirurgischen Versorgung bricht die diskriminierende Blockade im Akutmoment (D = Rang 2). Das ethische Gebot der Gleichbehandlung nach medizinischer Dringlichkeit ist das normative Fundament jeder Notfallversorgung (B = Rang 3). Strukturelle Meldung und Aufarbeitung rassistischen Fehlverhaltens schützen künftige Patienten vor systematischer Vernachlässigung (E = Rang 4). Die Befindlichkeit einer diskriminierenden Kollegin ist gegenüber dem Überleben des Patienten vollkommen bedeutungslos (C = Rang 5).",
    rationaleByRank: {
      A: "Rang 1: Das akute Abdomen ist ein lebensbedrohlicher Notfall; die unmittelbare Abwendung des septischen Schocks hat absolute Priorität.",
      D: "Rang 2: Die direkte Einleitung der chirurgischen Versorgung bricht die diskriminierende Blockade im Akutmoment.",
      B: "Rang 3: Das ethische Gebot der Gleichbehandlung nach medizinischer Dringlichkeit ist das normative Fundament jeder Notfallversorgung.",
      E: "Rang 4: Strukturelle Meldung und Aufarbeitung rassistischen Fehlverhaltens schützen künftige Patienten vor systematischer Vernachlässigung.",
      C: "Rang 5: Die Befindlichkeit einer diskriminierenden Kollegin ist gegenüber dem Überleben des Patienten vollkommen bedeutungslos.",
    },
  },

  // ─── Q09 (Mittel · Übertherapie am Lebensende bei Privatpatienten) ───
  {
    id: "SEK-SE-GP3-009",
    legacyId: "se-sim3-09",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 9,
    difficulty: "Mittel",
    scenario:
      "Auf der Intensivstation liegt eine 89-jährige Patientin mit fortgeschrittener vaskulärer Demenz, chronischer Niereninsuffizienz und schwerer Aspirationspneumonie. Die Patientin ist komatös, hat keine Patientenverfügung und leidet unter schmerzhaften Dekubitalgeschwüren Grad 4. Das gesamte Pflegeteam und die Stationsärzte sind sich einig, dass eine palliative Therapiezieländerung (Komforttherapie statt invasiver Maßnahmen) geboten ist. Der Chefarzt ordnet jedoch auf massiven Druck der wohlhabenden Kinder, die mit Klagen drohen und den bevorstehenden Tod nicht akzeptieren, eine invasive Wiederbeatmung, Dialyse und parenterale Maximalernährung an. Eine junge Assistenzärztin muss entscheiden, wie sie mit dieser Übertherapie („Dysthanasie“) umgeht.",
    decisionContext: "Verbot quälender medizinischer Sinnlosigkeit (Non-Maleficence) vs. Angehörigendruck, Hierarchie und Klinikökonomie",
    considerations: [
      {
        id: "A",
        text: "Welches ethische Verbot der sinnlosen Verlängerung des Sterbeprozesses unter Inkaufnahme von Leiden (Übertherapie) bindet den Arzt?",
      },
      {
        id: "B",
        text: "Welche hohen Fallpauschalen und Erlöse die intensivmedizinische Beatmung und Dialyse der Privatpatientin für das Abteilungsbudget generieren.",
      },
      {
        id: "C",
        text: "Wie kann die Würde der sterbenden Patientin und ihr Recht auf eine schmerzfreie, friedliche Sterbephase gewahrt werden?",
      },
      {
        id: "D",
        text: "Wie kann in einer ethischen Fallkonferenz unter Hinzuziehung des klinischen Ethikkomitees ein Konsens zwischen Angehörigen und Behandlungsteam herbeigeführt werden?",
      },
      {
        id: "E",
        text: "Welche Furcht des Chefarztes vor juristischen Auseinandersetzungen mit den anwaltlich vertretenen Angehörigen besteht?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4,
    },
    competencyTags: ["overtreatment", "non_maleficence", "futility", "dignity"],
    explanation:
      "Die Menschenwürde und das Wohl der Sterbenden stehen über allen externen Interessen und Ängsten (C = Rang 1). Das Prinzip des Nicht-Schadens (Primum non nocere) verbietet invasive Maßnahmen ohne therapeutischen Nutzen (A = Rang 2). Eine interdisziplinäre Ethikberatung bietet den strukturierten Raum, Angehörige mit der Realität des Sterbeprozesses zu versöhnen (D = Rang 3). Juristische Drohungen von Angehörigen sind verständlich, dürfen aber nicht zu medizinischer Körperverletzung an Sterbenden führen (E = Rang 4). Ökonomische Bereicherung durch Intensivmedizin bei Sterbenden ist moralisch verwerflich und von geringstem ethischem Wert (B = Rang 5).",
    rationaleByRank: {
      C: "Rang 1: Die Menschenwürde und das Wohl der Sterbenden stehen über allen externen Interessen und Ängsten.",
      A: "Rang 2: Das Prinzip des Nicht-Schadens (Primum non nocere) verbietet invasive Maßnahmen ohne therapeutischen Nutzen.",
      D: "Rang 3: Eine interdisziplinäre Ethikberatung bietet den strukturierten Raum, Angehörige mit der Realität des Sterbeprozesses zu versöhnen.",
      E: "Rang 4: Juristische Drohungen von Angehörigen sind verständlich, dürfen aber nicht zu medizinischer Körperverletzung an Sterbenden führen.",
      B: "Rang 5: Ökonomische Bereicherung durch Intensivmedizin bei Sterbenden ist moralisch verwerflich und von geringstem ethischem Wert.",
    },
  },

  // ─── Q10 (Mittel · Zweitmeinung & fehlerhafte Voroperation) ───
  {
    id: "SEK-SE-GP3-010",
    legacyId: "se-sim3-10",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 10,
    difficulty: "Mittel",
    scenario:
      "Ein 48-jähriger Handwerker stellt sich in der Praxis eines niedergelassenen Neurochirurgen für eine Zweitmeinung vor. Der Patient leidet nach einer Bandscheibenoperation, die vor drei Monaten von einem renommierten, befreundeten Chefarzt durchgeführt wurde, unter einer irreversiblen Fußheberparese und chronischen Nervenschmerzen. Bei der genauen Analyse der prä- und postoperativen MRT-Bilder sowie des OP-Berichts stellt der Neurochirurg zweifelsfrei fest: Die Operation war medizinisch gar nicht indiziert, und es wurde grob fehlerhaft die falsche Bandscheibenetage eröffnet. Der Patient blickt den Arzt an und fragt verzweifelt: „Herr Doktor, sagen Sie mir bitte die Wahrheit: Wurde ich damals verpfuscht?“",
    decisionContext: "Wahrhaftigkeit und Aufklärungspflicht gegenüber dem geschädigten Patienten vs. kollegiale Schonung und Standesloyalität",
    considerations: [
      {
        id: "A",
        text: "Ob der befreundete Chefarzt verärgert reagiert und dem Neurochirurgen künftig keine Patienten mehr zuweist.",
      },
      {
        id: "B",
        text: "Welche langjährige persönliche Freundschaft und kollegiale Zusammenarbeit den Arzt mit dem operierenden Chefarzt verbindet.",
      },
      {
        id: "C",
        text: "Wie kann der Befund sachlich, neutral und ohne emotionale Vorverurteilung dokumentiert werden, um dem Patienten eine fundierte Entscheidungsgrundlage zu bieten?",
      },
      {
        id: "D",
        text: "Welches fundamentale Recht des Patienten auf wahrheitsgemäße, vollständige und unvoreingenommene Aufklärung über seinen Gesundheitszustand und Behandlungsfehler besteht?",
      },
      {
        id: "E",
        text: "Welche Schritte zur neurologischen Rehabilitation und Schmerztherapie müssen jetzt medizinisch prioritär für den Patienten eingeleitet werden?",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 4,
      C: 2,
      D: 1,
      E: 3,
    },
    competencyTags: ["second_opinion", "truthfulness", "collegiality", "patient_rights"],
    explanation:
      "Das Patientenrecht auf Wahrheit ist unverhandelbar; ein Verschweigen oder Verharmlosen von Behandlungsfehlern verletzt das Vertrauen in die Medizin (D = Rang 1). Sachliche, evidenzbasierte Befunddokumentation schützt die Objektivität und liefert die Basis für die Gutachterkommission (C = Rang 2). Die Linderung des aktuellen Leidens und die Wiederherstellung der Arbeitsfähigkeit des Handwerkers sind der medizinische Handlungsauftrag (E = Rang 3). Kollegiale Verbundenheit darf niemals dazu führen, Kunstfehler zum Schaden von Patienten zu vertuschen (B = Rang 4). Eigene finanzielle Einbußen durch Zuweiserverlust sind im Vergleich zur Patientenwahrheit ethisch völlig bedeutungslos (A = Rang 5).",
    rationaleByRank: {
      D: "Rang 1: Das Patientenrecht auf Wahrheit ist unverhandelbar; ein Verschweigen oder Verharmlosen von Behandlungsfehlern verletzt das Vertrauen in die Medizin.",
      C: "Rang 2: Sachliche, evidenzbasierte Befunddokumentation schützt die Objektivität und liefert die Basis für die Gutachterkommission.",
      E: "Rang 3: Die Linderung des aktuellen Leidens und die Wiederherstellung der Arbeitsfähigkeit des Handwerkers sind der medizinische Handlungsauftrag.",
      B: "Rang 4: Kollegiale Verbundenheit darf niemals dazu führen, Kunstfehler zum Schaden von Patienten zu vertuschen.",
      A: "Rang 5: Eigene finanzielle Einbußen durch Zuweiserverlust sind im Vergleich zur Patientenwahrheit ethisch völlig bedeutungslos.",
    },
  },

  // ─── Q11 (Mittel · Quarantäne-Bruch bei Alleinerziehender in Not) ───
  {
    id: "SEK-SE-GP3-011",
    legacyId: "se-sim3-11",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 11,
    difficulty: "Mittel",
    scenario:
      "Eine 31-jährige alleinerziehende Mutter wird mit einer hochkontagiösen, invasiven Meningokokken-Infektion auf der Infektionsstation isoliert. Ihr Zustand ist unter intravenöser Antibiotikatherapie stabil, doch sie ist noch hoch ansteckend. Mitten in der Nacht wird sie von der Nachtschwester dabei ertappt, wie sie mit gepackter Tasche die Station verlassen will. Weinend und verzweifelt erklärt sie: Ihr 5-jähriger Sohn sei mit hohem Fieber allein in der Wohnung, da die Nachbarin ihn nachts nicht mehr betreuen wolle. Wenn sie nicht sofort nach Hause gehe, werde das Jugendamt ihr das Kind wegnehmen. Das Verlassen der Station bedeutet eine akute Lebensgefahr für ungeschützte Dritte (Tröpfcheninfektion).",
    decisionContext: "Infektionsschutz der Bevölkerung vor tödlicher Epidemie vs. existenzielle Not der Mutter und Schutz des Kleinkindes",
    considerations: [
      {
        id: "A",
        text: "Ob die Nachtschwester durch die Diskussion mit der Patientin ihren routinemäßigen Medikamentenrundgang auf Station verzögert.",
      },
      {
        id: "B",
        text: "Wie kann das Wohl des 5-jährigen Kindes in der Wohnung durch die sofortige Entsendung eines Kindernotdienstes oder des Jugendamts gesichert werden?",
      },
      {
        id: "C",
        text: "Welche strafrechtlichen Konsequenzen nach dem Infektionsschutzgesetz drohen der Mutter bei vorsätzlicher Missachtung der Absonderungsanordnung?",
      },
      {
        id: "D",
        text: "Wie kann der Mutter durch professionelle, beruhigende Krisenintervention vermittelt werden, dass ihrem Kind sofort geholfen wird, während sie in Isolation verbleibt?",
      },
      {
        id: "E",
        text: "Welche unmittelbare Lebensgefahr für Dritte in öffentlichen Verkehrsmitteln und im Wohnumfeld durch den hochkontagiösen Meningokokken-Erreger droht?",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 3,
      C: 4,
      D: 2,
      E: 1,
    },
    competencyTags: ["public_health", "infection_control", "child_welfare", "humanitarian_support"],
    explanation:
      "Der Schutz der Allgemeinheit vor einer fulminanten, tödlichen Meningokokken-Meningitis hat absolute Priorität vor individueller Bewegungsfreiheit (E = Rang 1). Das emotionale Deeskalieren und die Zusage konkreter Hilfe für das Kind brechen den Fluchtimpuls humanitär (D = Rang 2). Die unmittelbare Fürsorge für das schutzlose, fiebernde Kind durch die Rettungskräfte löst den eigentlichen Konfliktgrund (B = Rang 3). Juristische Strafandrohungen sind gegenüber einer panischen Mutter wenig wirksam und moralisch nachrangig (C = Rang 4). Betriebliche Verzögerungen im Stationsablauf sind gegenüber Infektionsschutz und Kindeswohl marginal (A = Rang 5).",
    rationaleByRank: {
      E: "Rang 1: Der Schutz der Allgemeinheit vor einer fulminanten, tödlichen Meningokokken-Meningitis hat absolute Priorität vor individueller Bewegungsfreiheit.",
      D: "Rang 2: Das emotionale Deeskalieren und die Zusage konkreter Hilfe für das Kind brechen den Fluchtimpuls humanitär.",
      B: "Rang 3: Die unmittelbare Fürsorge für das schutzlose, fiebernde Kind durch die Rettungskräfte löst den eigentlichen Konfliktgrund.",
      C: "Rang 4: Juristische Strafandrohungen sind gegenüber einer panischen Mutter wenig wirksam und moralisch nachrangig.",
      A: "Rang 5: Betriebliche Verzögerungen im Stationsablauf sind gegenüber Infektionsschutz und Kindeswohl marginal.",
    },
  },

  // ─── Q12 (Schwer · Genomischer Zufallsbefund & Recht auf Nichtwissen) ───
  {
    id: "SEK-SE-GP3-012",
    legacyId: "se-sim3-12",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 12,
    difficulty: "Schwer",
    scenario:
      "Im Rahmen einer populationsgenetischen Studie über Stoffwechselerkrankungen an einer Uniklinik wird bei einem 34-jährigen symptomfreien Probanden zufällig eine pathogene Keimbahnmutation im CDH1-Gen identifiziert. Diese Mutation führt mit einer Wahrscheinlichkeit von über 80 % zu einem diffusen Magenkarzinom im frühen Erwachsenenalter, das fast immer tödlich verläuft, durch eine prophylaktische Gastrektomie jedoch sicher geheilt werden kann. Bei Studienbeginn hat der Proband in der formalen Einwilligungserklärung die Option angekreuzt: „Ich verzichte ausdrücklich auf die Mitteilung jeglicher Zufallsbefunde (Recht auf Nichtwissen).“ Die Studienleiterin steht vor dem ethischen Dilemma, ob sie den Probanden kontaktieren und ihm das Leben retten darf.",
    decisionContext: "Recht auf Nichtwissen und informationelle Selbstbestimmung vs. ärztliche Schutzpflicht vor sicherem Krebstod",
    considerations: [
      {
        id: "A",
        text: "Welche ärztliche Fürsorgepflicht besteht zur Rettung eines Menschenlebens vor einem hochgradig tödlichen, aber operativ sicher vermeidbaren Karzinom?",
      },
      {
        id: "B",
        text: "Welches fundamentale verfassungsrechtliche und bioethische Recht auf Nichtwissen schützt den Menschen davor, gegen seinen Willen mit genetischen Schicksalsdaten konfrontiert zu werden?",
      },
      {
        id: "C",
        text: "Welche zivilrechtlichen Haftungsrisiken für die Studienleitung drohen, wenn der Proband später erkrankt und klagt, er hätte doch informiert werden wollen?",
      },
      {
        id: "D",
        text: "Wie kann in einer ethisch sensiblen, gestuften Kontaktaufnahme geklärt werden, ob der Proband seine damalige Entscheidung im Lichte lebensbedrohlicher Prävention revidieren möchte?",
      },
      {
        id: "E",
        text: "Welche Auswirkung eine Durchbrechung des Probandenwillens auf die Glaubwürdigkeit und das Vertrauen in künftige akademische Genstudien hat?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4,
    },
    competencyTags: ["right_not_to_know", "incidental_findings", "beneficence", "genomic_ethics"],
    explanation:
      "Das Recht auf Nichtwissen ist Ausfluss der Menschenwürde; ein Zwang zur Wissensaufnahme über genetische Dispositionen verletzt die Autonomie tiefgreifend (B = Rang 1). Das Prinzip des Wohltuns (Beneficence) drängt zur Lebensrettung, stößt aber an die Grenze des ausdrücklichen Willens des Probanden (A = Rang 2). Eine behutsame, nicht-konfrontative Nachfrage, ob die damalige Abwahl auch für unmittelbar behandelbare lebensbedrohliche Risiken galt, respektiert beide Prinzipien (D = Rang 3). Der Schutz der Studienethik und des Vertrauens von Forschungsteilnehmern sichert den wissenschaftlichen Fortschritt (E = Rang 4). Juristische Haftungsängste sind gegenüber der ethischen Grundsatzfrage von geringstem Gewicht (C = Rang 5).",
    rationaleByRank: {
      B: "Rang 1: Das Recht auf Nichtwissen ist Ausfluss der Menschenwürde; ein Zwang zur Wissensaufnahme über genetische Dispositionen verletzt die Autonomie tiefgreifend.",
      A: "Rang 2: Das Prinzip des Wohltuns (Beneficence) drängt zur Lebensrettung, stößt aber an die Grenze des ausdrücklichen Willens des Probanden.",
      D: "Rang 3: Eine behutsame, nicht-konfrontative Nachfrage, ob die damalige Abwahl auch für unmittelbar behandelbare lebensbedrohliche Risiken galt, respektiert beide Prinzipien.",
      E: "Rang 4: Der Schutz der Studienethik und des Vertrauens von Forschungsteilnehmern sichert den wissenschaftlichen Fortschritt.",
      C: "Rang 5: Juristische Haftungsängste sind gegenüber der ethischen Grundsatzfrage von geringstem Gewicht.",
    },
  },

  // ─── Q13 (Schwer · Schwangere Hirntote & Organspende) ───
  {
    id: "SEK-SE-GP3-013",
    legacyId: "se-sim3-03",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 13,
    difficulty: "Schwer",
    scenario:
      "Eine 27-jährige schwangere Frau (15. Schwangerschaftswoche) erleidet infolge eines geplatzten Zerebralaneurysmas einen irreversiblen Hirnfunktionsausfall (Hirntod). Die Patientin führt einen gültigen Organspendeausweis mit sich, auf dem sie eine uneingeschränkte Bereitschaft zur Organentnahme dokumentiert hat. Die Intensivmediziner stehen vor der Frage: Soll die somatische Therapie sofort beendet und die Organe für schwer kranke Organempfänger entnommen werden, oder soll der Körper der Hirntoten über zehn Wochen apparativ am Leben erhalten werden, um dem Fötus die Chance auf Lebensfähigkeit (ca. 25. SSW) zu geben? Der Lebenspartner und die Eltern der Verstorbenen flehen das Team an, das Kind ihrer Tochter unbedingt auszutragen.",
    decisionContext: "Postmortal dokumentierter Organspendewille vs. Lebensrecht des heranreifenden Fötus und Familienwunsch",
    considerations: [
      {
        id: "A",
        text: "Welche ethische Pflicht zur Erfüllung des dokumentierten Willens der Verstorbenen bezüglich der Organrettung wartender Patienten besteht?",
      },
      {
        id: "B",
        text: "Welche immensen intensivmedizinischen Kosten und Bettenkapazitäten eine wochenlange somatische Erhaltungstherapie einer Hirntoten bindet.",
      },
      {
        id: "C",
        text: "Wie kann die Belastung und das schwere Leid der trauernden Angehörigen durch eine transparente, gemeinsame ethische Entscheidungsfindung gemindert werden?",
      },
      {
        id: "D",
        text: "Welches moralische Lebensrecht hat der lebende, ungeborene Fötus auf den Versuch des Austragens bis zur extrauterinen Überlebensfähigkeit?",
      },
      {
        id: "E",
        text: "Ob die zur Transplantation vorgesehenen Spenderorgane durch die monatelange künstliche Erhaltung der Homöostase Schaden nehmen könnten.",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 5,
      C: 2,
      D: 1,
      E: 4,
    },
    competencyTags: ["maternal_brain_death", "fetal_protection", "organ_donation", "proxy_decision"],
    explanation:
      "Der heranwachsende Fötus ist ein eigenständiges, lebendes Wesen mit vitalem Schutzanspruch; der Schutz entstehenden Lebens wiegt schwerer als die sofortige Organentnahme (D = Rang 1). Der mutmaßliche Wille der Mutter hätte im Zweifel dem Überleben ihres eigenen Wunschkindes Vorrang eingeräumt; die Einbindung der Familie wahrt die Humanität (C = Rang 2). Die postmortale Spenderverpflichtung ist ein hochrangiges Rechtsgut, tritt jedoch hinter dem Schutz des eigenen Kindes der Spenderin zurück (A = Rang 3). Die funktionelle Integrität von Spenderorganen ist eine klinische Realität, die überwacht werden muss (E = Rang 4). Ökonomische Kosten der Intensivstation dürfen bei existenziellen Entscheidungen über Leben und Tod niemals den Ausschlag geben (B = Rang 5).",
    rationaleByRank: {
      D: "Rang 1: Der heranwachsende Fötus ist ein eigenständiges, lebendes Wesen mit vitalem Schutzanspruch; der Schutz entstehenden Lebens wiegt schwerer als die sofortige Organentnahme.",
      C: "Rang 2: Der mutmaßliche Wille der Mutter hätte im Zweifel dem Überleben ihres eigenen Wunschkindes Vorrang eingeräumt; die Einbindung der Familie wahrt die Humanität.",
      A: "Rang 3: Die postmortale Spenderverpflichtung ist ein hochrangiges Rechtsgut, tritt jedoch hinter dem Schutz des eigenen Kindes der Spenderin zurück.",
      E: "Rang 4: Die funktionelle Integrität von Spenderorganen ist eine klinische Realität, die überwacht werden muss.",
      B: "Rang 5: Ökonomische Kosten der Intensivstation dürfen bei existenziellen Entscheidungen über Leben und Tod niemals den Ausschlag geben.",
    },
  },

  // ─── Q14 (Schwer · Katastrophen-Triage: Das letzte Antidot) ───
  {
    id: "SEK-SE-GP3-014",
    legacyId: "se-sim3-14",
    simulationId: "generalprobe-3",
    subtest: "SE",
    questionNumber: 14,
    difficulty: "Schwer",
    scenario:
      "Nach einem Terroranschlag mit Freisetzung von gasförmiger Blausäure (Cyanid) in einer U-Bahn-Station werden zwei Schwerstvergiftete zeitgleich in den Schockraum eingeliefert: Eine 9-jährige Schülerin mit Schnappatmung und tiefem Koma (GCS 3) sowie ein 42-jähriger Leitender Notarzt und dreifacher Vater, der sich bei der Evakuierung verletzter Passanten selbst kontaminiert hat und nun mit Lungenödem und einsetzender Bewusstseinstrübung eingeliefert wird. Im Schockraum ist nur noch eine einzige Ampulle des lebensrettenden Cyanid-Antidots (4-DMAP / Hydroxocobalamin) vorhanden; Nachschub aus der Klinikapotheke ist wegen verkehrsbedingter Straßensperren frühestens in 45 Minuten zu erwarten. Ohne das Antidot werden beide Patienten innerhalb der nächsten 15 Minuten ersticken.",
    decisionContext: "Zuteilung des letzten Antidots in der Katastrophen-Triage: Überlebenschance & Lebensalter vs. Verdienst und Rettungspotenzial des Ersthelfers",
    considerations: [
      {
        id: "A",
        text: "Welcher Patient hat nach fundierter intensivmedizinischer Einschätzung die signifikant höhere Wahrscheinlichkeit, die Vergiftung mit dem Antidot neurologisch intakt zu überleben?",
      },
      {
        id: "B",
        text: "Welches moralische Verdienst und welche besondere gesellschaftliche Dankesschuld gebührt dem Notarzt, der sein Leben für andere riskiert hat?",
      },
      {
        id: "C",
        text: "Wie kann der verbleibende zweite Patient mit maximalen supportiven Maßnahmen (Hyperventilation mit 100 % Sauerstoff, Pufferung, Kreislaufunterstützung) stabilisiert werden, bis der Nachschub eintrifft?",
      },
      {
        id: "D",
        text: "Welche Rolle spielen das junge Lebensalter und die noch ausstehende Lebensspanne der 9-jährigen Schülerin (Fair-Innings-Argument)?",
      },
      {
        id: "E",
        text: "Ob die mediale Berichterstattung die Entscheidung des Triage-Arztes skandalisieren und die Klinik öffentlich kritisieren könnte.",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 4,
      C: 2,
      D: 3,
      E: 5,
    },
    competencyTags: ["disaster_triage", "utilitarianism_vs_deontology", "resource_scarcity", "vital_prioritization"],
    explanation:
      "Das fundamentale Prinzip der medizinischen Triage gebietet die Zuteilung nach kurzfristiger Überlebenswahrscheinlichkeit (Rescue Principle / Vitalprognose), unabhängig vom sozialen Status (A = Rang 1). Für den Patienten, der das Antidot nicht erhält, muss die sofortige palliative und supportive Maximaltherapie begonnen werden, um ein Überleben bis zum Eintreffen der Reserve zu ermöglichen (C = Rang 2). Das Lebensalter und das unausgeschöpfte Lebenspotenzial sind anerkannte ethische Kriterien bei gleicher medizinischer Erfolgsaussicht (D = Rang 3). Gesellschaftlicher Verdienst oder sozialer Wert dürfen in der medizinischen Notfalltriage keine Diskriminierung begründen (B = Rang 4). Mediale Ängste oder Skandalisierungsbefürchtungen sind in vitalen Triage-Entscheidungen moralisch irrelevant (E = Rang 5).",
    rationaleByRank: {
      A: "Rang 1: Das fundamentale Prinzip der medizinischen Triage gebietet die Zuteilung nach kurzfristiger Überlebenswahrscheinlichkeit (Rescue Principle / Vitalprognose), unabhängig vom sozialen Status.",
      C: "Rang 2: Für den Patienten, der das Antidot nicht erhält, muss die sofortige palliative und supportive Maximaltherapie begonnen werden, um ein Überleben bis zum Eintreffen der Reserve zu ermöglichen.",
      D: "Rang 3: Das Lebensalter und das unausgeschöpfte Lebenspotenzial sind anerkannte ethische Kriterien bei gleicher medizinischer Erfolgsaussicht.",
      B: "Rang 4: Gesellschaftlicher Verdienst oder sozialer Wert dürfen in der medizinischen Notfalltriage keine Diskriminierung begründen.",
      E: "Rang 5: Mediale Ängste oder Skandalisierungsbefürchtungen sind in vitalen Triage-Entscheidungen moralisch irrelevant.",
    },
  },
];

export const GENERALPROBE_3_SE_SIMULATION_DATA: SeSimulationData = {
  simulationId: "generalprobe-3",
  simNumber: 3,
  title: "MedAT-H Generalprobe #3 — Soziales Entscheiden",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (1260s) · Ethische Reihung von Handlungsprioritäten (1 bis 5)",
  timeLimitSeconds: 21 * 60,
  questions: RAW_GENERALPROBE_3_SE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #3 runtime and review engine
 */
export const GENERALPROBE_3_SE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_SE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = toStoredQuestion(q, GENERALPROBE_3_SE_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-SE-GP3-${numStr}`,
      legacyId: `se-sim3-${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "SE", "Soziales Entscheiden", "Generalprobe #3", `SEK-SE-GP3-${numStr}`],
      seData: {
        ...q,
        id: `SEK-SE-GP3-${numStr}`,
        legacyId: `se-sim3-${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
