import type { EeSimulationData } from "./types";

export const EE_SIMULATION_3: EeSimulationData = {
  simulationId: "ee-sim3",
  simNumber: 3,
  title: "Simulation 3 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s pro Aufgabe)",
  timeLimitSeconds: 1260,
  questions: [
    {
      id: "ee-sim3-q01",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 1,
      person: { name: "Tobias", context: "Student bei der Wohnungsbesichtigung" },
      scenario:
        "Tobias hat nach wochenlanger vergeblicher Zimmersuche in einer fremden Universitätsstadt endlich die Zusage für ein bezahlbares, schönes Zimmer in ruhiger Lage erhalten.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Freude", correctProbability: "likely" },
        { id: "C", label: "Verbitterung", correctProbability: "unlikely" },
        { id: "D", label: "Angst", correctProbability: "unlikely" },
        { id: "E", label: "Dankbarkeit", correctProbability: "likely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die Zusage beendet die existenzielle Not und bringt Erleichterung, Freude und Dankbarkeit. Verbitterung und Angst sind unpassend.",
    },
    {
      id: "ee-sim3-q02",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 2,
      person: { name: "Melanie", context: "Verkäuferin im Einzelhandel" },
      scenario:
        "Ein Kunde wirft Melanie an der Kasse lautstark und vor anderen Kunden vor, absichtlich falsch herausgegeben zu haben. Die Kassenabrechnung belegt Minuten später auf den Cent genau, dass Melanie fehlerfrei gearbeitet hat.",
      emotions: [
        { id: "A", label: "Empörung", correctProbability: "likely" },
        { id: "B", label: "Genugtuung", correctProbability: "likely" },
        { id: "C", label: "Scham", correctProbability: "unlikely" },
        { id: "D", label: "Erleichterung", correctProbability: "likely" },
        { id: "E", label: "Reue", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die falsche Anschuldigung erzeugt Empörung, die rasche Entlastung bringt Genugtuung und Erleichterung. Scham und Reue scheiden aus, da Melanie unschuldig war.",
    },
    {
      id: "ee-sim3-q03",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 3,
      person: { name: "Florian", context: "Berufseinsteiger vor dem ersten Arbeitstag" },
      scenario:
        "Florian steht morgens vor dem Bürogebäude seines neuen Arbeitgebers. Er weiß nicht, was ihn erwartet, wer sein Betreuer ist und ob er den Anforderungen genügen wird.",
      emotions: [
        { id: "A", label: "Unsicherheit", correctProbability: "likely" },
        { id: "B", label: "Nervosität", correctProbability: "likely" },
        { id: "C", label: "Neugier", correctProbability: "likely" },
        { id: "D", label: "Gelangweiltheit", correctProbability: "unlikely" },
        { id: "E", label: "Überheblichkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der Antritt einer neuen Stelle löst Unsicherheit und Nervosität, aber auch Neugier aus. Gelangweiltheit und Überheblichkeit widersprechen der Situation.",
    },
    {
      id: "ee-sim3-q04",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 4,
      person: { name: "Carina", context: "Laborassistentin im Nachtdienst" },
      scenario:
        "Carina stellt fest, dass eine von ihr versendete Blutprobe im Transportsystem verloren gegangen ist. Der Patient muss nun erneut geweckt und punktiert werden.",
      emotions: [
        { id: "A", label: "Ärger", correctProbability: "likely" },
        { id: "B", label: "Schlechtes Gewissen", correctProbability: "likely" },
        { id: "C", label: "Erleichterung", correctProbability: "unlikely" },
        { id: "D", label: "Besorgnis", correctProbability: "likely" },
        { id: "E", label: "Freude", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der Verlust der Probe erzeugt Ärger über den Zwischenfall, ein schlechtes Gewissen gegenüber dem Patienten und Besorgnis über Zeitverzögerungen. Erleichterung und Freude sind ausgeschlossen.",
    },
    {
      id: "ee-sim3-q05",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 5,
      person: { name: "Benjamin", context: "Gymnasiallehrer am Schuljahresende" },
      scenario:
        "Benjamin verabschiedet seinen ersten Abiturjahrgang, den er vier Jahre lang eng begleitet hat. Bei der Zeugnisverleihung überreichen die Schüler ihm ein persönliches Album mit Erinnerungen und Danksagungen.",
      emotions: [
        { id: "A", label: "Rührung", correctProbability: "likely" },
        { id: "B", label: "Stolz", correctProbability: "likely" },
        { id: "C", label: "Wehmut", correctProbability: "likely" },
        { id: "D", label: "Groll", correctProbability: "unlikely" },
        { id: "E", label: "Entfremdung", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der Abschied nach vier Jahren erzeugt Rührung, Stolz auf die Absolventen und Wehmut über das Ende der gemeinsamen Zeit. Groll und Entfremdung sind unzutreffend.",
    },
    {
      id: "ee-sim3-q06",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 6,
      person: { name: "Monika", context: "Pflegerin im Seniorenheim" },
      scenario:
        "Ein dementer Bewohner, der Monika sonst oft ablehnt und schimpft, nimmt plötzlich ruhig ihre Hand, schaut sie klar an und sagt: 'Sie sind heute mein rettender Engel.'",
      emotions: [
        { id: "A", label: "Rührung", correctProbability: "likely" },
        { id: "B", label: "Verblüffung", correctProbability: "likely" },
        { id: "C", label: "Wärme", correctProbability: "likely" },
        { id: "D", label: "Ärger", correctProbability: "unlikely" },
        { id: "E", label: "Verachtung", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der unerwartete, lichte Moment löst Rührung, Verblüffung und emotionale Wärme aus. Ärger oder Verachtung sind abwegig.",
    },
    {
      id: "ee-sim3-q07",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 7,
      person: { name: "Alexander", context: "Chirurgischer Assistent" },
      scenario:
        "Alexander hat bei einer schwierigen Nahtführung im OP gezögert. Der Operateur übernimmt das Instrument wortlos, vollendet die Naht selbst und sagt anschließend sachlich: 'Das üben wir morgen am Modell.'",
      emotions: [
        { id: "A", label: "Verlegenheit", correctProbability: "likely" },
        { id: "B", label: "Erleichterung", correctProbability: "likely" },
        { id: "C", label: "Ehrgeiz", correctProbability: "likely" },
        { id: "D", label: "Wut", correctProbability: "unlikely" },
        { id: "E", label: "Triumph", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Das Zögern und die Übernahme erzeugen Verlegenheit, die sachliche Reaktion des Operateurs bringt Erleichterung und weckt neuen Ehrgeiz. Wut und Triumph passen nicht.",
    },
    {
      id: "ee-sim3-q08",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 8,
      person: { name: "Cornelia", context: "Projektleiterin im Umweltverband" },
      scenario:
        "Cornelias Förderantrag für ein Artenschutzprojekt wurde nach sechs Monaten Prüfung abgelehnt, weil das Budget des Förderprogramms vorzeitig ausgeschöpft war, obwohl ihr Antrag inhaltlich mit Bestnote bewertet wurde.",
      emotions: [
        { id: "A", label: "Frustration", correctProbability: "likely" },
        { id: "B", label: "Bestätigung", correctProbability: "likely" },
        { id: "C", label: "Ohnmacht", correctProbability: "likely" },
        { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Schadenfreude", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die formale Ablehnung trotz fachlicher Bestnote erzeugt Frustration, Ohnmacht und gleichzeitig inhaltliche Bestätigung. Gleichgültigkeit und Schadenfreude sind verfehlt.",
    },
    {
      id: "ee-sim3-q09",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 9,
      person: { name: "Manuel", context: "Student bei der Gruppenarbeit" },
      scenario:
        "Manuel erfährt, dass ein Kollege, der sich an der Ausarbeitung der Seminararbeit kaum beteiligt hatte, bei der mündlichen Präsentation die gesamte Redezeit an sich riss und vom Dozenten besonders gelobt wurde.",
      emotions: [
        { id: "A", label: "Ärger", correctProbability: "likely" },
        { id: "B", label: "Ungerechtigkeitsempfinden", correctProbability: "likely" },
        { id: "C", label: "Kränkung", correctProbability: "likely" },
        { id: "D", label: "Mitfreude", correctProbability: "unlikely" },
        { id: "E", label: "Resignation", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die unfaire Selbstinszenierung erzeugt akuten Ärger, ein starkes Ungerechtigkeitsempfinden und Kränkung. Mitfreude ist unmöglich.",
    },
    {
      id: "ee-sim3-q10",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 10,
      person: { name: "Dr. Weber", context: "Chefarzt der Neurologie" },
      scenario:
        "Dr. Weber muss nach einer missglückten Bandscheibenoperation den Angehörigen eröffnen, dass der Patient eine dauerhafte Fußheberparese davontragen wird. Ein formeller Behandlungsfehler lag nicht vor, das Risiko war aufgeklärt, dennoch war der Verlauf tragisch.",
      emotions: [
        { id: "A", label: "Schwere", correctProbability: "likely" },
        { id: "B", label: "Mitgefühl", correctProbability: "likely" },
        { id: "C", label: "Anspannung", correctProbability: "likely" },
        { id: "D", label: "Kälte", correctProbability: "unlikely" },
        { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Vor dem schweren Aufklärungsgespräch empfindet Dr. Weber seelische Schwere, Mitgefühl für den Betroffenen und Anspannung. Kälte und Gleichmut widersprechen ärztlicher Professionalität.",
    },
    {
      id: "ee-sim3-q11",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 11,
      person: { name: "Theres", context: "Mutter einer Abiturientin" },
      scenario:
        "Theres packt mit ihrer Tochter die Koffer für deren Auszug in eine 500 Kilometer entfernte Universitätsstadt. Beide lachen über alte Fotos, während das Zimmer der Tochter immer leerer wird.",
      emotions: [
        { id: "A", label: "Wehmut", correctProbability: "likely" },
        { id: "B", label: "Stolz", correctProbability: "likely" },
        { id: "C", label: "Freude", correctProbability: "likely" },
        { id: "D", label: "Verbitterung", correctProbability: "unlikely" },
        { id: "E", label: "Fremdheit", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Der Auszug des Kindes ist geprägt von Wehmut über den Abschied, Stolz auf die Selbstständigkeit und Freude über die gemeinsame Zeit. Verbitterung und Fremdheit sind fehl am Platz.",
    },
    {
      id: "ee-sim3-q12",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 12,
      person: { name: "Robert", context: "Forscher bei der Replikationsstudie" },
      scenario:
        "Robert wiederholt ein gefeiertes Experiment eines Nobelpreisträgers und kann die Effekte trotz exakter Befolgung des Protokolls dreimal in Folge nicht reproduzieren. Er muss den Befund nun veröffentlichen.",
      emotions: [
        { id: "A", label: "Verunsicherung", correctProbability: "likely" },
        { id: "B", label: "Sorge", correctProbability: "likely" },
        { id: "C", label: "Pflichterfüllung", correctProbability: "likely" },
        { id: "D", label: "Schadenfreude", correctProbability: "unlikely" },
        { id: "E", label: "Leichtsinn", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Das Nicht-Replizieren eines Nobelpreisbefunds bringt Verunsicherung, Sorge vor Gegenwind der Fachwelt und das Bewusstsein wissenschaftlicher Pflichterfüllung. Schadenfreude und Leichtsinn sind unzutreffend.",
    },
    {
      id: "ee-sim3-q13",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 13,
      person: { name: "Beate", context: "Personalratsvorsitzende" },
      scenario:
        "Beate hat in zähen Verhandlungen einen Stellenabbau von 50 auf 10 Mitarbeiter reduzieren können. Dennoch müssen zehn langjährige Kollegen entlassen werden, die Beate persönlich seit Jahren kennt.",
      emotions: [
        { id: "A", label: "Zerrissenheit", correctProbability: "likely" },
        { id: "B", label: "Teilerfolg", correctProbability: "likely" },
        { id: "C", label: "Trauer", correctProbability: "likely" },
        { id: "D", label: "Triumph", correctProbability: "unlikely" },
        { id: "E", label: "Sorglosigkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Beate erlebt Zerrissenheit und Trauer um die zehn Betroffenen bei gleichzeitigem Bewusstsein des Teilerfolgs (40 Stellen gerettet). Triumph oder Sorglosigkeit sind deplatziert.",
    },
    {
      id: "ee-sim3-q14",
      simulationId: "ee-sim3",
      subtest: "EE",
      questionNumber: 14,
      person: { name: "Christian", context: "Notarzt am Einsatzort" },
      scenario:
        "Christian gelingt es bei einem Herz-Kreislauf-Stillstand nach 35 Minuten Reanimation, einen Sinusrhythmus wiederherzustellen. Allerdings waren die Pupillen während der letzten 20 Minuten weit und lichtstarr.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Skepsis", correctProbability: "likely" },
        { id: "C", label: "Besorgnis", correctProbability: "likely" },
        { id: "D", label: "Ausgelassenheit", correctProbability: "unlikely" },
        { id: "E", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Die Rückkehr des Rhythmus bringt Erleichterung, die langen hypoxischen Zeichen jedoch ernste Skepsis und Besorgnis hinsichtlich neurologischer Schäden. Ausgelassenheit und Gleichgültigkeit sind abwegig.",
    },
  ],
};
