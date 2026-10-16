/**
 * MedAT SEK — Soziales Entscheiden (SE) — Generalprobe #1
 * Exactly 14 Questions · 21 Minutes Exam Time (1260 seconds, 90s / task)
 * 
 * IDs: SEK-SE-001 through SEK-SE-014 (aliased to legacy se-sim1-01 .. 14)
 * 
 * Specifications:
 * - Exactly 14 ethical/social dilemmas assessing prioritization of considerations (Kohlberg / Beauchamp & Childress)
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

export const RAW_GENERALPROBE_1_SE_QUESTIONS: SeQuestionData[] = [
  // ─── Q01 (Leicht · Patientensicherheit vs. Hierarchie) ───
  {
    id: "SEK-SE-001",
    legacyId: "se-sim1-01",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 1,
    difficulty: "Leicht",
    scenario:
      "Eine Assistenzärztin bemerkt kurz vor Beginn einer planmäßigen Operation, dass der erfahrene Facharzt, der den Eingriff leiten soll, stark nach Alkohol riecht und auffallend verlangsamt reagiert. Sie muss entscheiden, wie sie mit der Situation umgeht.",
    decisionContext: "Klinischer Ernstfall: Patientensicherheit vs. Hierarchie und Karriere",
    considerations: [
      {
        id: "A",
        text: "Welche berufs- und haftungsrechtlichen Meldepflichten existieren für akute Dienstunfähigkeit im OP-Bereich?",
      },
      {
        id: "B",
        text: "Wie wirkt sich mein Einschreiten auf das zukünftige Arbeitsklima im chirurgischen Team aus?",
      },
      {
        id: "C",
        text: "Welche unmittelbaren Gefahren drohen dem Patienten für Leib und Leben, wenn der Eingriff unter Alkoholeinfluss durchgeführt wird?",
      },
      {
        id: "D",
        text: "Könnte meine Intervention negative Auswirkungen auf meine persönliche Weiterbildungsbeurteilung haben?",
      },
      {
        id: "E",
        text: "Wie kann die Situation geklärt werden, ohne dass eine ungerechtfertigte Vorverurteilung des Facharztes vor dem Team erfolgt?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 4,
      C: 1,
      D: 5,
      E: 3,
    },
    competencyTags: ["patient_welfare", "professional_duty", "safety", "hierarchy"],
    explanation:
      "Die Abwendung akuter Lebensgefahr für den Patienten (C = Rang 1) steht in der medizinischen Ethik an oberster Stelle. Unmittelbar darauf folgen die formale Sorgfalts- und Meldepflicht (A = Rang 2) zur institutionellen Gefahrenabwehr. Verhältnismäßigkeit und sachliche Klärung ohne vorschnelle Diffamierung (E = Rang 3) sichern ein faires Vorgehen. Das abteilungsinterne Arbeitsklima (B = Rang 4) und eigene Karrierefolgen (D = Rang 5) sind dem Patientenschutz ethisch untergeordnet.",
    rationaleByRank: {
      C: "Rang 1: Unmittelbarer Schutz von Leben und körperlicher Unversehrtheit des Patienten hat absolute Priorität.",
      A: "Rang 2: Verbindliche berufsrechtliche Schutzstandards gewährleisten institutionalisierte Patientensicherheit.",
      E: "Rang 3: Verhältnismäßigkeit und sachliche Abklärung schützen vor voreiliger Diskreditierung von Kollegen.",
      B: "Rang 4: Soziale Teambefindlichkeiten dürfen notwendige Sicherheitsmaßnahmen niemals verhindern.",
      D: "Rang 5: Eigeninteressen und persönliche Karriereüberlegungen müssen hinter vitalen Schutzpflichten zurückstehen.",
    },
  },

  // ─── Q02 (Leicht · Schweigepflicht & Datenschutz vs. sozialer Druck) ───
  {
    id: "SEK-SE-002",
    legacyId: "se-sim1-02",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 2,
    difficulty: "Leicht",
    scenario:
      "Ein Medizinstudent erfährt während seines Pflegepraktikums im Pausenraum zufällig vertrauliche Gesundheitsdaten eines prominenten Lokalpolitikers von einem Pfleger. Später fragt ein befreundeter Kommilitone neugierig nach, was an den Gerüchten über die schwere Erkrankung des Politikers dran sei.",
    decisionContext: "Ärztliche Schweigepflicht & Datenschutz vs. sozialer Druck im Freundeskreis",
    considerations: [
      {
        id: "A",
        text: "Wie kann ich mein Insiderwissen nutzen, um mich vor dem Kommilitonen als besonders gut informiert darzustellen?",
      },
      {
        id: "B",
        text: "Welche moralische und gesetzliche Schweigepflicht besteht ausnahmslos bezüglich aller im Krankenhaus gehörten Patientendaten?",
      },
      {
        id: "C",
        text: "Welcher Schaden für das Vertrauen der Öffentlichkeit in die ärztliche Verschwiegenheit entstünde bei einer Weitergabe?",
      },
      {
        id: "D",
        text: "Wie kann ich dem Pfleger diskret rückmelden, dass das Teilen privater Patientendaten im Pausenraum unzulässig ist?",
      },
      {
        id: "E",
        text: "Wie erkläre ich dem befreundeten Kommilitonen meine Weigerung, ohne die private Freundschaft zu belasten?",
      },
    ],
    referenceRanking: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
    },
    competencyTags: ["confidentiality", "autonomy", "integrity", "communication"],
    explanation:
      "Die ärztliche Schweigepflicht und das Recht des Patienten auf informationelle Selbstbestimmung (B = Rang 1) sind fundamentale Grundsätze. Das Vertrauen der Allgemeinheit in die Diskretion medizinischer Einrichtungen (C = Rang 2) wiegt schwer. Das konstruktive Unterbinden von Datenschutzverstößen auf Station (D = Rang 3) dient dem Normerhalt. Die Schonung privater Freundschaften (E = Rang 4) ist nachrangig; Selbstdarstellung durch Indiskretion (A = Rang 5) ist ethisch gänzlich illegitim.",
    rationaleByRank: {
      B: "Rang 1: Die unbedingte Wahrung des Berufsgeheimnisses schützt die Würde und Privatsphäre des Patienten.",
      C: "Rang 2: Das Vertrauen der Gesamtgesellschaft in das Gesundheitswesen hängt von verlässlicher Verschwiegenheit ab.",
      D: "Rang 3: Kollegiale Intervention verhindert künftige Datenschutzverletzungen an der Wurzel.",
      E: "Rang 4: Soziale Höflichkeit im Freundeskreis darf niemals zur Verletzung professioneller Pflichten führen.",
      A: "Rang 5: Selbstdarstellung auf Kosten vertraulicher Patientendaten widerspricht jedem ethischen Grundsatz.",
    },
  },

  // ─── Q03 (Leicht · Wissenschaftliche Redlichkeit vs. Gruppenleistung) ───
  {
    id: "SEK-SE-003",
    legacyId: "se-sim1-03",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 3,
    difficulty: "Leicht",
    scenario:
      "In einer studentischen Forschungsgruppe entdeckt eine Studentin einen gravierenden Rechenfehler in den Auswertungen für eine bereits eingereichte Publikation. Die Korrektur würde die Veröffentlichung um Monate verzögern und eine angestrebte Auszeichnung der Gruppe gefährden.",
    decisionContext: "Wissenschaftliche Redlichkeit vs. Gruppenleistung und Zeitdruck",
    considerations: [
      {
        id: "A",
        text: "Wie kann der Rechenfehler sachlich kommuniziert werden, ohne den Fehlerverursacher persönlich im Team bloßzustellen?",
      },
      {
        id: "B",
        text: "Welche universitären Leitlinien zur guten wissenschaftlichen Praxis verpflichten alle Autoren zur unverzüglichen Korrektur?",
      },
      {
        id: "C",
        text: "Wie wirkt sich ein formeller Rückzug des Manuskripts auf mein eigenes Ansehen beim Lehrstuhlinhaber aus?",
      },
      {
        id: "D",
        text: "Welchen Schaden erleidet die wissenschaftliche Wahrheit und spätere Patienten, falls falsche Daten publiziert werden?",
      },
      {
        id: "E",
        text: "Welche Frustrationen und Terminprobleme entstehen für die beteiligten Co-Autoren durch die Verzögerung?",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 2,
      C: 5,
      D: 1,
      E: 4,
    },
    competencyTags: ["scientific_integrity", "honesty", "responsibility", "fairness"],
    explanation:
      "Falsche Forschungsergebnisse können fatale Fehlentscheidungen in Folgestudien und klinischen Therapien nach sich ziehen (D = Rang 1). Die formale Pflicht zur guten wissenschaftlichen Praxis (B = Rang 2) verbietet das Verschweigen von Fehlern. Eine respektvolle Fehlerkultur im Team (A = Rang 3) schützt die Zusammenarbeit. Frust über Verzögerungen (E = Rang 4) und eigene Reputationssorgen (C = Rang 5) sind im Vergleich zur wissenschaftlichen Wahrheit vollkommen nachrangig.",
    rationaleByRank: {
      D: "Rang 1: Wissenschaftliche Wahrhaftigkeit schützt die Allgemeinheit und Folgearbeiten vor fatalen Irrtümern.",
      B: "Rang 2: Deontologische Kodizes guter wissenschaftlicher Praxis dulden keine wissentliche Falschpublikation.",
      A: "Rang 3: Konstruktive Fehleranalyse wahrt den Teamzusammenhalt ohne Vertuschung.",
      E: "Rang 4: Arbeitsaufwand und Terminverzögerungen sind notwendige Begleiterscheinungen von Qualitätskorrekturen.",
      C: "Rang 5: Die Sorge um das persönliche Ansehen darf niemals zu akademischer Unredlichkeit verleiten.",
    },
  },

  // ─── Q04 (Leicht · Ressourcenschutz & Gerechtigkeit vs. Kumpanei) ───
  {
    id: "SEK-SE-004",
    legacyId: "se-sim1-04",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 4,
    difficulty: "Leicht",
    scenario:
      "Ein Krankenpfleger bemerkt, wie ein langjähriger Kollege regelmäßig teure Verbandsmaterialien und Desinfektionsmittel für den privaten Gebrauch entwendet. Als er ihn darauf anspricht, bittet der Kollege darum, nichts zu melden, da er private Schulden habe und die Familie versorgen müsse.",
    decisionContext: "Ressourcenschutz & Gerechtigkeit vs. Mitleid und Kumpanei",
    considerations: [
      {
        id: "A",
        text: "Welche arbeitsrechtlichen Konsequenzen bis hin zur fristlosen Kündigung drohen dem Kollegen bei einer Meldung?",
      },
      {
        id: "B",
        text: "Welche Loyalitätspflicht habe ich gegenüber dem Kollegen als langjährigem Weggefährten auf Station?",
      },
      {
        id: "C",
        text: "Welche Verantwortung trage ich für die Integrität der Station und den rechtmäßigen Einsatz von Patientenressourcen?",
      },
      {
        id: "D",
        text: "Gibt es für den Kollegen betriebliche oder soziale Hilfsangebote zur legalen Bewältigung seiner Notlage?",
      },
      {
        id: "E",
        text: "Welche Vorbild- und Signalwirkung hätte ein toleriertes Dulden des Diebstahls auf andere Mitarbeiter?",
      },
    ],
    referenceRanking: {
      A: 4,
      B: 5,
      C: 1,
      D: 3,
      E: 2,
    },
    competencyTags: ["resource_integrity", "justice", "duty", "social_responsibility"],
    explanation:
      "Die institutionelle Verantwortung für Klinikressourcen und Stationsintegrität (C = Rang 1) steht an erster Stelle, da fehlendes Material direkt die Patientenversorgung gefährden kann. Die Signalwirkung auf das Team und der Erhalt ethischer Standards (E = Rang 2) folgen direkt. Das Aufzeigen regulärer Hilfsangebote (D = Rang 3) verbindet Grenzziehung mit menschlicher Fürsorge. Die Furcht vor Strafen für den Täter (A = Rang 4) und falsch verstandene Kumpanei (B = Rang 5) dürfen Pflichtverletzungen nicht legitimieren.",
    rationaleByRank: {
      C: "Rang 1: Der rechtmäßige Einsatz von medizinischen Gütern garantiert die lückenlose Versorgung der Patienten.",
      E: "Rang 2: Duldung von Diebstahl untergräbt das Gerechtigkeitsempfinden und die Integrität der gesamten Abteilung.",
      D: "Rang 3: Unterstützung bei legaler Problemlösung bietet einen Ausweg ohne Aufweichung der Regeln.",
      A: "Rang 4: Rechtliche Konsequenzen sind die Folge des Fehlverhaltens und entbinden nicht von der Meldepflicht.",
      B: "Rang 5: Persönliche Verbundenheit darf nicht zur Komplizenschaft bei Straftaten führen.",
    },
  },

  // ─── Q05 (Mittel · Patientenautonomie vs. Angehörigendruck) ───
  {
    id: "SEK-SE-005",
    legacyId: "se-sim1-05",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 5,
    difficulty: "Mittel",
    scenario:
      "Eine geistig voll orientierte, 82-jährige Patientin lehnt eine medizinisch dringend indizierte Bluttransfusion aus tiefster religiöser Überzeugung ab. Ihre erwachsenen Kinder bedrängen die Stationsärztin massiv, die Transfusion gegen den Willen der Mutter durchzuführen, da das Überleben an oberster Stelle stehe.",
    decisionContext: "Patientenautonomie vs. Angehörigendruck und Lebensverlängerung",
    considerations: [
      {
        id: "A",
        text: "Wie kann den verständlichen Ängsten und dem Leidensdruck der besorgten Angehörigen respektvoll begegnet werden?",
      },
      {
        id: "B",
        text: "Wie lautet der frei gebildete, aufgeklärte Wille der einwilligungsfähigen Patientin bezüglich ihres eigenen Körpers?",
      },
      {
        id: "C",
        text: "Inwieweit die religiöse Überzeugung der Patientin aus meiner persönlichen weltanschaulichen Sicht vernünftig ist.",
      },
      {
        id: "D",
        text: "Welche medizinischen Risiken und vitalen Gefahren resultieren unmittelbar aus dem Verzicht auf die Transfusion?",
      },
      {
        id: "E",
        text: "Wie kann sich das Behandlungsteam rechtlich gegen eventuelle spätere Klagen der Angehörigen absichern?",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 1,
      C: 5,
      D: 2,
      E: 4,
    },
    competencyTags: ["patient_autonomy", "medical_ethics", "family_conflict", "communication"],
    explanation:
      "Das Selbstbestimmungsrecht (Autonomie) einer einwilligungsfähigen Patientin (B = Rang 1) bindet das ärztliche Handeln absolut, selbst wenn die Entscheidung medizinisch unvernünftig erscheint. Die ärztliche Aufklärung über vitale Gefahren (D = Rang 2) ist zwingend erforderlich, um sicherzustellen, dass die Entscheidung fundiert ist. Die empathische Begleitung der Familie (A = Rang 3) ist geboten. Juristische Selbstabsicherung (E = Rang 4) ist zweitrangig. Eine persönliche weltanschauliche Bewertung (C = Rang 5) ist ärztlich unzulässig.",
    rationaleByRank: {
      B: "Rang 1: Der freie Wille eines urteilsfähigen Patienten ist die oberste Schranke jeder medizinischen Maßnahme.",
      D: "Rang 2: Umfassende Risikoaufklärung ist die Voraussetzung für eine rechtsgültige Willensbildung.",
      A: "Rang 3: Angehörige verdienen seelischen Beistand, besitzen jedoch kein Verfügungsrecht über urteilsfähige Patienten.",
      E: "Rang 4: Juristische Dokumentation dient der Rechtssicherheit, begründet aber keine Behandlung gegen den Willen.",
      C: "Rang 5: Eigene weltanschauliche Maßstäbe dürfen dem Patienten niemals paternalistisch übergestülpt werden.",
    },
  },

  // ─── Q06 (Mittel · Allokation knapper Ressourcen / Triage-Ethik) ───
  {
    id: "SEK-SE-006",
    legacyId: "se-sim1-06",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 6,
    difficulty: "Mittel",
    scenario:
      "In der Notaufnahme treffen nach einem schweren Verkehrsunfall zwei lebensgefährlich verletzte Personen ein. Es steht jedoch im Moment nur ein einziger Not-OP-Saal zur Verfügung. Patient X ist 29 Jahre alt, Vater zweier Kleinkinder; Patient Y ist 76 Jahre alt, Rentner. Beide haben bei sofortiger OP eine realistische Überlebenschance.",
    decisionContext: "Allokation knapper Ressourcen: Triage-Ethik vs. Diskriminierung",
    considerations: [
      {
        id: "A",
        text: "Bei welchem der beiden Patienten ist die medizinische Dringlichkeit und Reversibilität des Schockzustands am kritischsten?",
      },
      {
        id: "B",
        text: "Wie schnell kann durch Alarmierung von Rufbereitschaften oder Verlegung ein zweiter OP-Saal einsatzbereit gemacht werden?",
      },
      {
        id: "C",
        text: "Welche soziale Verantwortung und familiäre Fürsorgepflichten tragen die beiden Patienten im Alltag?",
      },
      {
        id: "D",
        text: "Welcher der beiden Patienten hat statistisch gesehen eine höhere verbleibende Lebenserwartung?",
      },
      {
        id: "E",
        text: "Welche objektiven Erfolgsaussichten bestehen für das Überleben der Akutphase durch die sofortige Operation?",
      },
    ],
    referenceRanking: {
      A: 1,
      B: 2,
      C: 4,
      D: 5,
      E: 3,
    },
    competencyTags: ["triage", "justice", "non_discrimination", "resource_allocation"],
    explanation:
      "Triage-Entscheidungen dürfen ausschließlich nach medizinischer Dringlichkeit (A = Rang 1) und Erfolgsaussicht der Akutintervention (E = Rang 3) getroffen werden. Parallel muss alles getan werden, um weitere Kapazitäten zu schaffen (B = Rang 2). Soziale Rollen (C = Rang 4) und das kalendarische Alter bzw. statistische Restlebenserwartung (D = Rang 5) sind ethisch und verfassungsrechtlich diskriminierend und dürfen nicht zur Selektion herangezogen werden.",
    rationaleByRank: {
      A: "Rang 1: Die akute medizinische Bedürftigkeit und Zeitkritikalität ist das einzig legitime Primärkriterium.",
      B: "Rang 2: Maximale Ausschöpfung organisatorischer Reserven minimiert den Zwang zur harten Ausschlussentscheidung.",
      E: "Rang 3: Die Wahrscheinlichkeit, die unmittelbare Vitalbedrohung abzuwenden, steuert die Ressourcenzuteilung.",
      C: "Rang 4: Soziale Nützlichkeitserwägungen widersprechen dem Prinzip der gleichen Menschenwürde aller Patienten.",
      D: "Rang 5: Altersdiskriminierung ist ethisch verwerflich; jedes Menschenleben besitzt denselben intrinsischen Wert.",
    },
  },

  // ─── Q07 (Mittel · Forschung an Nicht-Einwilligungsfähigen) ───
  {
    id: "SEK-SE-007",
    legacyId: "se-sim1-07",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 7,
    difficulty: "Mittel",
    scenario:
      "Ein Assistenzarzt bemerkt, dass sein Klinikdirektor bei einer dementen, nicht ansprechbaren Patientin eine schmerzhafte diagnostische Lumbalpunktion plant, die für die aktuelle Therapie keinerlei Nutzen bringt, aber wertvolle Vergleichsdaten für ein drittmittelgefördertes Forschungsprojekt des Chefs liefern würde. Eine Einwilligung liegt nicht vor.",
    decisionContext: "Forschung an Nicht-Einwilligungsfähigen: Schutz wehrloser Patienten vs. Hierarchie",
    considerations: [
      {
        id: "A",
        text: "Welchen allgemeinen Erkenntnisgewinn könnte die wissenschaftliche Studie für die Behandlung künftiger Patienten bringen?",
      },
      {
        id: "B",
        text: "Welchem physischen Schaden und Schmerz wird die wehrlose Patientin durch den invasiven Eingriff ohne Eigennutzen ausgesetzt?",
      },
      {
        id: "C",
        text: "Welche strikten gesetzlichen und ethischen Verbote gelten für Forschung an einwilligungsunfähigen Personen ohne direkten Nutzen?",
      },
      {
        id: "D",
        text: "Wie kann der Klinikdirektor sachlich auf die fehlende Indikation und Rechtslage angesprochen werden?",
      },
      {
        id: "E",
        text: "Ob meine Weigerung, die Punktion zu unterstützen, meine angestrebte Facharztstelle an der Klinik gefährdet.",
      },
    ],
    referenceRanking: {
      A: 4,
      B: 1,
      C: 2,
      D: 3,
      E: 5,
    },
    competencyTags: ["patient_protection", "research_ethics", "vulnerability", "hierarchy"],
    explanation:
      "Das Verbot, schutzlose Patienten ohne Nutzen und ohne Einwilligung zu instrumentalisieren (B = Rang 1: Nicht-Schadens-Prinzip), steht unumstößlich an der Spitze. Die Deklaration von Helsinki und gesetzliche Schutzbestimmungen (C = Rang 2) untersagen dies ausnahmslos. Die professionelle Konfrontation des Vorgesetzten (D = Rang 3) ist der notwendige Handlungsschritt. Allgemeiner Erkenntnisgewinn (A = Rang 4) rechtfertigt niemals die Verletzung der Würde. Eigene Karriereangst (E = Rang 5) ist irrelevant.",
    rationaleByRank: {
      B: "Rang 1: Wehrlose Menschen dürfen niemals als bloßes Forschungsobjekt instrumentalisiert und geschädigt werden.",
      C: "Rang 2: Internationale ethische Kodizes schützen Nichteinwilligungsfähige vor fremdnützigem Missbrauch.",
      D: "Rang 3: Sachliche, entschiedene Kommunikation im Team ist das wirksame Mittel zur Schadensabwendung.",
      A: "Rang 4: Wissenschaftlicher Fortschritt verliert jede Legitimation, wenn er elementare Menschenrechte verletzt.",
      E: "Rang 5: Die Angst vor persönlichen Karrierenachteilen wiegt im Vergleich zum Schutz der Patientin nichts.",
    },
  },

  // ─── Q08 (Mittel · Fehlerkultur & Beinahe-Schäden) ───
  {
    id: "SEK-SE-008",
    legacyId: "se-sim1-08",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 8,
    difficulty: "Mittel",
    scenario:
      "Eine junge Ärztin hat versehentlich die fünffache Dosis eines starken Herzmedikaments verordnet. Die Stationsapotheke bemerkt den Fehler vor der Verabreichung und korrigiert ihn; der Patient blieb unversehrt. Der Oberarzt meint: 'Es ist nichts passiert, wir melden das nicht im Fehlermeldesystem (CIRS), sonst gibt es nur unnötigen Papierkram.'",
    decisionContext: "Fehlerkultur & Beinahe-Schäden vs. Vertuschung und Bequemlichkeit",
    considerations: [
      {
        id: "A",
        text: "Welche Qualitätsrichtlinien schreiben die anonyme Meldung von Beinahe-Ereignissen zur Fehlerprävention verbindlich vor?",
      },
      {
        id: "B",
        text: "Welche organisatorische Mehrarbeit und Rechtfertigungspflichten entstehen für das Stationsteam durch die Meldung?",
      },
      {
        id: "C",
        text: "Wie kann das Krankenhaussystem aus dem Beinahe-Fehler lernen, um künftige tödliche Verwechslungen bei anderen Patienten zu verhindern?",
      },
      {
        id: "D",
        text: "Ob die Meldung einen negativen Eindruck auf meine persönliche Zuverlässigkeit im Team hinterlassen könnte.",
      },
      {
        id: "E",
        text: "Wie transparent sollte der Vorfall intern mit der Pflege besprochen werden, um das Vier-Augen-Prinzip zu stärken?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 4,
      C: 1,
      D: 5,
      E: 3,
    },
    competencyTags: ["error_culture", "patient_safety", "prevention", "learning_systems"],
    explanation:
      "Die Erfassung von Beinahe-Fehlern (CIRS) schützt zukünftige Patienten vor gravierenden Schäden durch Aufdeckung systemischer Schwachstellen (C = Rang 1). Qualitäts- und Sicherheitsrichtlinien (A = Rang 2) verpflichten zu dieser Kultur. Interdisziplinäre Wachsamkeit auf Station (E = Rang 3) stärkt Sicherheitsnetze. Administrativer Mehraufwand (B = Rang 4) und Furcht vor Gesichtsverlust (D = Rang 5) sind klassische Barrieren, die im Sinne der Patientensicherheit überwunden werden müssen.",
    rationaleByRank: {
      C: "Rang 1: Systemisches Lernen aus Beinahe-Fehlern rettet zukünftigen Patienten das Leben.",
      A: "Rang 2: Institutionalisierte CIRS-Standards sind Pfeiler eines modernen, fehlerverzeihenden Sicherheitssystems.",
      E: "Rang 3: Offener Austausch zwischen Ärzteschaft und Pflege schärft die Aufmerksamkeit im Alltag.",
      B: "Rang 4: Bürokratischer Dokumentationsaufwand ist dem Schutz vor tödlichen Irrtümern stets untergeordnet.",
      D: "Rang 5: Eigene Scham oder Furcht vor Kritik darf Sicherheitsmeldungen niemals blockieren.",
    },
  },

  // ─── Q09 (Mittel · Gefahr für Dritte vs. Schweigepflicht) ───
  {
    id: "SEK-SE-009",
    legacyId: "se-sim1-09",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 9,
    difficulty: "Mittel",
    scenario:
      "Ein Hausarzt stellt bei einem 79-jährigen Patienten, der täglich mit dem PKW fährt, eine fortgeschrittene vaskuläre Demenz mit massiven Reaktions- und Orientierungsstörungen fest. Der Patient lehnt es energisch ab, das Autofahren aufzugeben, da er auf dem Land wohne und sonst seine Selbstständigkeit verliere.",
    decisionContext: "Gefahr im Verzug für Dritte vs. ärztliche Schweigepflicht und Patientenautonomie",
    considerations: [
      {
        id: "A",
        text: "Wie kann im Gespräch mit dem Patienten und seinen Angehörigen nach einvernehmlichen Mobilitätsalternativen gesucht werden?",
      },
      {
        id: "B",
        text: "Welche akute Lebensgefahr droht unbeteiligten Dritten im Straßenverkehr, wenn der Patient weiterhin fahruntauglich ein Fahrzeug führt?",
      },
      {
        id: "C",
        text: "Ob der Patient aus Verärgerung die Hausarztpraxis verlässt und ich dadurch ein langjähriges Behandlungsverhältnis verliere.",
      },
      {
        id: "D",
        text: "Wie schwer wiegt der Verlust an Lebensqualität und sozialer Teilhabe für den Patienten durch die Aufgabe des Führerscheins?",
      },
      {
        id: "E",
        text: "Unter welchen strengen juristischen Voraussetzungen (rechtfertigender Notstand) darf die ärztliche Schweigepflicht durchbrochen werden?",
      },
    ],
    referenceRanking: {
      A: 3,
      B: 1,
      C: 5,
      D: 4,
      E: 2,
    },
    competencyTags: ["public_safety", "confidentiality_exception", "autonomy", "proportionality"],
    explanation:
      "Die Abwendung lebensbedrohlicher Gefahren für unbeteiligte Dritte im Straßenverkehr (B = Rang 1) überwiegt individuelle Freiheitsrechte, wenn schwere kognitive Defizite vorliegen. Die Prüfung der engen rechtlichen Grenzen für das Durchbrechen des Arztgeheimnisses (E = Rang 2) sichert das rechtsstaatliche Vorgehen. Das Bemühen um eine einvernehmliche Lösung mit Angehörigen (A = Rang 3) ist das primäre Mittel der Wahl. Der persönliche Mobilitätsverlust (D = Rang 4) ist schmerzhaft, aber nachrangig. Wirtschaftliche Praxissorgen (C = Rang 5) sind moralisch irrelevant.",
    rationaleByRank: {
      B: "Rang 1: Der Schutz des Lebens und der körperlichen Unversehrtheit unbeteiligter Dritter bricht das individuelle Beharren.",
      E: "Rang 2: Eine Weitergabe an Behörden ist Ultima Ratio und bedarf exakter rechtlicher und ethischer Prüfung.",
      A: "Rang 3: Deeskalierende Beratung und Einbindung der Familie sollten die behördliche Meldung möglichst abwenden.",
      D: "Rang 4: Einschränkungen persönlicher Bequemlichkeit müssen zum Schutz von Menschenleben hingenommen werden.",
      C: "Rang 5: Patientenerhalt und finanzielle Interessen des Arztes spielen bei akuter Gefahrenabwehr keine Rolle.",
    },
  },

  // ─── Q10 (Mittel · Verteilungsgerechtigkeit & Regelintegrität) ───
  {
    id: "SEK-SE-010",
    legacyId: "se-sim1-10",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 10,
    difficulty: "Mittel",
    scenario:
      "Eine studentische Hilfskraft führt bei einer wichtigen universitären Abschlussklausur Aufsicht. Sie bemerkt eindeutig, dass eine Studentin Spickzettel unter der Klausur versteckt hat. Die Studentin ist alleinerziehend, befindet sich im letzten Prüfungsversuch und würde bei Aberkennung der Prüfung ihren Studienplatz und die Wohnung verlieren.",
    decisionContext: "Verteilungsgerechtigkeit & Regelintegrität vs. existenzielle Härtefälle",
    considerations: [
      {
        id: "A",
        text: "Welche existenziellen sozialen und wirtschaftlichen Härten drohen der Studentin durch die Annullierung der Prüfung?",
      },
      {
        id: "B",
        text: "Wie kann der fundamentale Grundsatz der Chancengleichheit und Gerechtigkeit gegenüber allen ehrlich prüfenden Studierenden gewahrt werden?",
      },
      {
        id: "C",
        text: "Welche universitären Prüfungsordnungen regeln das Vorgehen bei Täuschungsversuchen zwingend und verbindlich?",
      },
      {
        id: "D",
        text: "Ob mir durch das Wegsehen der bürokratische Aufwand und eine unangenehme Zeugenaussage erspart bliebe.",
      },
      {
        id: "E",
        text: "Wie kann die Beweissicherung diskret erfolgen, ohne den laufenden Prüfungsbetrieb im gesamten Hörsaal zu stören?",
      },
    ],
    referenceRanking: {
      A: 4,
      B: 1,
      C: 2,
      D: 5,
      E: 3,
    },
    competencyTags: ["justice", "fairness", "rule_of_law", "empathy_boundaries"],
    explanation:
      "Chancengleichheit ist das tragende ethische Fundament jeder akademischen Prüfung: Das Duldung von Täuschung benachteiligt unmittelbar alle ehrlichen Kandidaten (B = Rang 1). Die Bindung an die Prüfungsordnung (C = Rang 2) garantiert rechtsgleiche Behandlung. Eine ruhige, störungsfreie Beweissicherung (E = Rang 3) schützt die Rechte aller anderen Prüflinge im Saal. Soziale Härten der Täuschenden (A = Rang 4) begründen großes menschliches Mitgefühl, dürfen aber nicht zur Aushebelung von Fairness führen. Eigene Bequemlichkeit (D = Rang 5) ist unzulässig.",
    rationaleByRank: {
      B: "Rang 1: Gerechtigkeit gegenüber der Gesamtheit aller ehrlichen Teilnehmer ist das unverzichtbare Gut bei Leistungsnachweisen.",
      C: "Rang 2: Rechtsstaatliche Verfahrensregeln verhindern Willkür und persönliche Bevorzugung im Prüfungswesen.",
      E: "Rang 3: Verhältnismäßiges Einschreiten sichert die Beweise, ohne unbeteiligte Prüflinge zu irritieren.",
      A: "Rang 4: Subjektive Lebenskrisen erklären Verzweiflungstat, heben aber die Pflicht zur Chancengleichheit nicht auf.",
      D: "Rang 5: Die Vermeidung von eigener Arbeit oder unangenehmen Gesprächen ist moralisch wertlos.",
    },
  },

  // ─── Q11 (Schwer · Genetische Schweigepflicht vs. Lebensrettung) ───
  {
    id: "SEK-SE-011",
    legacyId: "se-sim1-11",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 11,
    difficulty: "Schwer",
    scenario:
      "Ein 45-jähriger Patient wird positiv auf eine erbliche Genmutation getestet, die mit hoher Wahrscheinlichkeit zu einem tödlichen Herzstillstand im mittleren Alter führt, jedoch durch vorsorgliche Schrittmacherimplantation vollständig behandelbar ist. Der Patient untersagt dem Arzt ausdrücklich, seine erwachsenen Geschwister zu informieren, da er seit 15 Jahren tief mit ihnen verfeindet ist.",
    decisionContext: "Genetische Schweigepflicht vs. Lebensrettung bedrohter Angehöriger",
    considerations: [
      {
        id: "A",
        text: "Wie schwer wiegt das verfassungsmäßig geschützte Recht des Patienten auf informationelle Selbstbestimmung und ärztliche Schweigepflicht?",
      },
      {
        id: "B",
        text: "Welches konkrete, unmittelbare Lebens- und Mortalitätsrisiko besteht für die unwissenden Geschwister des Patienten?",
      },
      {
        id: "C",
        text: "Ob die Geschwister dem Arzt später mangelnde Aufklärung vorwerfen könnten, falls sie unvorbereitet erkranken.",
      },
      {
        id: "D",
        text: "Wie kann im wiederholten vertrauensvollen Dialog versucht werden, den Patienten zur freiwilligen familiären Weitergabe zu bewegen?",
      },
      {
        id: "E",
        text: "Welche juristischen Notstandstatbestände und ethischen Leitlinien erlauben oder fordern die Information genetisch bedrohter Angehöriger?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3,
    },
    competencyTags: ["genetic_ethics", "life_preservation", "confidentiality", "autonomy"],
    explanation:
      "Die Abwendung eines drohenden, vermeidbaren plötzlichen Herztodes bei unwissenden Dritten (B = Rang 1) stellt das gewichtigste Schutzgut dar. Das Selbstbestimmungsrecht und das Vertrauensverhältnis zum Patienten (A = Rang 2) sind von enormem Rang und erzeugen ein echtes ethisches Hochspannungsfeld. Rechtliche und bioethische Notstandskriterien (E = Rang 3) bilden den Rahmen für eine eventuelle Durchbrechung. Vor jedem Zwangsschritt muss der Versuch einer konsensualen Lösung (D = Rang 4) ausgeschöpft werden. Die Furcht vor persönlicher Kritik (C = Rang 5) ist irrelevant.",
    rationaleByRank: {
      B: "Rang 1: Das Rechtsgut Leben steht an der Spitze der Werteordnung und erfordert höchste Priorität bei der Abwägung.",
      A: "Rang 2: Das Arztgeheimnis ist die unverzichtbare Basis des medizinischen Vertrauens und darf nur unter extremen Umständen weichen.",
      E: "Rang 3: Kodizes der Humangenetik liefern die Richtschnur zur verhältnismäßigen Güterabwägung im Notstand.",
      D: "Rang 4: Geduldige ärztliche Überzeugungsarbeit ist die ethisch schonendste Methode zur Auflösung des Konflikts.",
      C: "Rang 5: Eigene Absicherungsängste dürfen die Gewissensentscheidung zwischen Schweigepflicht und Lebensrettung nicht trüben.",
    },
  },

  // ─── Q12 (Mittel · Forschungsintegrität vs. Arbeitsplatzverlust) ───
  {
    id: "SEK-SE-012",
    legacyId: "se-sim1-12",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 12,
    difficulty: "Mittel",
    scenario:
      "In einem biomedizinischen Forschungsinstitut fordert der Projektleiter einen jungen Postdoc auf, statistische 'Ausreißer', die die Wirksamkeit eines neuen Onkologie-Wirkstoffs schmälern, ohne wissenschaftliche Begründung aus der Publikation zu löschen. Nur so könne eine überlebensnotwendige millionenschwere Verlängerung des Labors gesichert werden.",
    decisionContext: "Forschungsintegrität & Patientensicherheit vs. Arbeitsplatzverlust im Team",
    considerations: [
      {
        id: "A",
        text: "Welche existenziellen Sorgen und drohenden Arbeitsplatzverluste treffen die unbeteiligten Mitarbeiter des Forschungsteams?",
      },
      {
        id: "B",
        text: "Welche klaren Richtlinien wissenschaftlicher Redlichkeit und strafrechtlichen Betrugstatbestände werden durch Datenmanipulation verletzt?",
      },
      {
        id: "C",
        text: "Welche schweren Gefahren für Krebspatienten in späteren klinischen Studien entstehen durch gefälschte Wirksamkeits- und Toxizitätsdaten?",
      },
      {
        id: "D",
        text: "Ob meine Weigerung, die Daten zu schönen, meine eigene akademische Anschlussfinanzierung und Promotion vernichtet.",
      },
      {
        id: "E",
        text: "Wie können fachlich saubere statistische Methoden (z.B. Sensitivitätsanalysen) als Ausweg gegenüber dem Laborleiter vertreten werden?",
      },
    ],
    referenceRanking: {
      A: 4,
      B: 2,
      C: 1,
      D: 5,
      E: 3,
    },
    competencyTags: ["scientific_fraud", "patient_safety", "institutional_pressure", "integrity"],
    explanation:
      "Datenfälschung in der vorklinischen Krebsforschung gefährdet direkt das Leben zukünftiger Patienten, denen unwirksame oder toxische Stoffe verabreicht werden (C = Rang 1). Die Missachtung fundamentaler wissenschaftlicher und rechtlicher Standards (B = Rang 2) untergräbt das Fundament der Medizin. Konstruktive wissenschaftliche Alternativen (E = Rang 3) bieten eine redliche Handlungsoption. Die Sorge um Arbeitsplätze im Labor (A = Rang 4) ist real, darf aber niemals durch Betrug erkauft werden. Das eigene Karriereüberleben (D = Rang 5) ist dem Schutz von Menschenleben untergeordnet.",
    rationaleByRank: {
      C: "Rang 1: Manipulierte Wirkstoffdaten führen zu lebensbedrohlichen Fehldosierungen oder wirkungslosen Therapien am Krankenbett.",
      B: "Rang 2: Wissenschaftliche Redlichkeit ist die unabdingbare Voraussetzung für den gesellschaftlichen Nutzen der Forschung.",
      E: "Rang 3: Fachliche Argumentation mit korrekter Methodik ermöglicht Deeskalation auf wissenschaftlicher Ebene.",
      A: "Rang 4: Soziale Verantwortung für Mitarbeiter ist legitim, kann aber Verbrechen an der Patientensicherheit nicht rechtfertigen.",
      D: "Rang 5: Eigene Zukunftsängste wiegen nichts im Vergleich zu vorsätzlich manipulierten Therapiedaten.",
    },
  },

  // ─── Q13 (Schwer · Schutz intensivpflichtiger Patienten vs. Partnerschaft) ───
  {
    id: "SEK-SE-013",
    legacyId: "se-sim1-13",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 13,
    difficulty: "Schwer",
    scenario:
      "Eine Assistenzärztin erfährt, dass ihr Verlobter, der auf derselben Intensivstation als Facharzt arbeitet, seit Wochen unter Überlastung leidet und wiederholt gravierende Medikationsfehler begangen hat, die nur durch Zufall von der Pflege bemerkt wurden. Er fleht sie an, ihm noch zehn Tage Zeit zu geben, die Situation selbst mit dem Chefarzt zu klären.",
    decisionContext: "Schutz intensivpflichtiger Patienten vs. private Paarbeziehung und Loyalität",
    considerations: [
      {
        id: "A",
        text: "Welche ethische und berufliche Garantenstellung für die Sicherheit der Patienten überwiegt jede private Loyalität?",
      },
      {
        id: "B",
        text: "Welche schwere Zerrüttung und welcher Vertrauensbruch droht der privaten Partnerschaft durch ein unangekündigtes Eingreifen?",
      },
      {
        id: "C",
        text: "Welches akute Risiko lebensbedrohlicher Medikationsfehler besteht für die beatmeten Intensivpatienten während der nächsten zehn Tage?",
      },
      {
        id: "D",
        text: "Ob die Klinikleitung mir bei einer Meldung vorwerfen könnte, die Situation nicht schon früher erkannt zu haben.",
      },
      {
        id: "E",
        text: "Wie kann der Verlobte verbindlich dabei begleitet werden, seine Überlastung unverzüglich heute noch eigeninitiativ offenzulegen?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 4,
      C: 1,
      D: 5,
      E: 3,
    },
    competencyTags: ["patient_safety", "conflict_of_interest", "loyalty", "whistleblowing"],
    explanation:
      "Auf einer Intensivstation führen Dosierungsfehler bei instabilen Patienten unmittelbar zum Tod: Die Beseitigung dieses Risikos hat absolute Priorität (C = Rang 1). Die ärztliche Garantenstellung (A = Rang 2) verpflichtet zur Handlung und verbietet das Zurückstellen von Patientensicherheit hinter Partnerschaftsinteressen. Den Partner zur sofortigen Selbstanzeige zu bewegen (E = Rang 3), verbindet Schutzpflicht mit Unterstützung. Private Beziehungskonflikte (B = Rang 4) sind schmerzhaft, dürfen aber kein Patientenleben kosten. Eigenschutz vor Vorwürfen (D = Rang 5) ist irrelevant.",
    rationaleByRank: {
      C: "Rang 1: Das akute Lebensrisiko für schutzlose Intensivpatienten duldet keinen einzigen Tag Aufschub.",
      A: "Rang 2: Die rechtliche und moralische Garantenpflicht für Kranke bricht jede private Loyalitätsbindung.",
      E: "Rang 3: Unverzügliche Begleitung zur Selbsterkenntnis schützt Patienten und wahrt die Würde des Betroffenen.",
      B: "Rang 4: Das Risiko einer privaten Trennung wiegt im ethischen Vergleich weniger als der Verlust von Menschenleben.",
      D: "Rang 5: Sorgen vor bürokratischer Kritik an der eigenen Wachsamkeit sind ein unethisches Handlungsmotiv.",
    },
  },

  // ─── Q14 (Schwer · Linderung unerträglichen Leidens vs. Lebenszeitverkürzung) ───
  {
    id: "SEK-SE-014",
    legacyId: "se-sim1-14",
    simulationId: "generalprobe-1",
    subtest: "SE",
    questionNumber: 14,
    difficulty: "Schwer",
    scenario:
      "Ein unheilbar an ALS erkrankter, geistig völlig klarer Patient im Endstadium leidet unter quälender, panikartiger Erstickungsnot. Er bittet den Palliativarzt inständig um eine Dosiserhöhung des Morphins und der Sedierung. Dem Arzt ist bewusst, dass dies das Leiden zuverlässig lindert, jedoch als unvermeidbare Nebenwirkung das ohnehin schwache Atemzentrum dämpfen und das Lebensende um wenige Stunden vorverlegen kann (indirekte Sterbehilfe).",
    decisionContext: "Linderung unerträglichen Leidens vs. unbeabsichtigte Lebenszeitverkürzung am Lebensende",
    considerations: [
      {
        id: "A",
        text: "Welche ethischen und rechtlichen Grundsätze (Prinzip der Doppelwirkung / Palliative Sedierung) legitimieren die Linderung trotz möglicher Lebenszeitverkürzung?",
      },
      {
        id: "B",
        text: "Wie kann die quälende Erstickungsnot und das schwere Leid des sterbenden Patienten im Einklang mit seinem Willen bestmöglich gelindert werden?",
      },
      {
        id: "C",
        text: "Ob die Entscheidung von Außenstehenden oder Kollegen fälschlicherweise als gezielte Tötung missverstanden werden könnte.",
      },
      {
        id: "D",
        text: "Wie ist das Verhältnis zwischen dem Schutz der verbleibenden Lebensstunden und der Vermeidung von unerträglicher Qual in der Terminalphase zu gewichten?",
      },
      {
        id: "E",
        text: "Wie können die am Krankenbett anwesenden Angehörigen über das Ziel der reinen Symptomkontrolle transparent aufgeklärt werden?",
      },
    ],
    referenceRanking: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4,
    },
    competencyTags: ["palliative_care", "double_effect", "suffering_relief", "terminal_ethics"],
    explanation:
      "Im finalen Sterbestadium ist die wirksame Linderung von unerträglicher Erstickungsnot und Angst der höchste Auftrag ärztlicher Fürsorge im Einklang mit dem Patientenwillen (B = Rang 1). Das Prinzip der Doppelwirkung und anerkannte palliativmedizinische Standards (A = Rang 2) rechtfertigen eine Dosissteigerung zur Symptomkontrolle, selbst wenn der Tod als unbeabsichtigte Nebenwirkung früher eintritt. Eine tiefgehende Güterabwägung (D = Rang 3) verdeutlicht, dass bloße Lebensverlängerung unter unstillbarer Qual dem Wohl des Sterbenden widerspricht. Transparente Angehörigenaufklärung (E = Rang 4) beugt Missverständnissen vor. Furcht vor ungerechtfertigter Nachrede Dritter (C = Rang 5) darf den Patienten nicht leiden lassen.",
    rationaleByRank: {
      B: "Rang 1: Die Befreiung von quälendem Erstickungsleiden am Lebensende ist die primäre Pflicht der Palliativmedizin.",
      A: "Rang 2: Das ethische Prinzip der Doppelwirkung trennt beabsichtigte Schmerzlinderung klar von aktiver Tötung.",
      D: "Rang 3: Die Qualität des Sterbens und die Menschenwürde überwiegen das bloße Herauszögern um wenige qualvolle Stunden.",
      E: "Rang 4: Einfühlsame Aufklärung der Angehörigen schafft Vertrauen und nimmt die Angst vor dem Sterbeprozess.",
      C: "Rang 5: Die Sorge vor juristischer oder kollegialer Fehlinterpretation darf das Recht auf Schmerzlinderung nicht behindern.",
    },
  },
];

export const GENERALPROBE_1_SE_SIMULATION_DATA: SeSimulationData = {
  simulationId: "generalprobe-1",
  simNumber: 1,
  title: "MedAT-H Generalprobe #1 — Soziales Entscheiden",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (1260s) · Ethische Reihung von Handlungsprioritäten (1 bis 5)",
  timeLimitSeconds: 21 * 60,
  questions: RAW_GENERALPROBE_1_SE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #1 runtime and review engine
 */
export const GENERALPROBE_1_SE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_SE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");
    const sq = toStoredQuestion(q, GENERALPROBE_1_SE_SIMULATION_DATA);

    return {
      ...sq,
      id: `SEK-SE-${numStr}`,
      legacyId: `se-sim1-${String(idx + 1).padStart(2, "0")}`,
      tags: ["SEK", "SE", "Soziales Entscheiden", "Generalprobe #1", `SEK-SE-${numStr}`],
      seData: {
        ...q,
        id: `SEK-SE-${numStr}`,
        legacyId: `se-sim1-${String(idx + 1).padStart(2, "0")}`,
      },
    };
  }
);
