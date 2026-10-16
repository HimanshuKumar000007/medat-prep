import type { EeSimulationData } from "./types";

export const EE_SIMULATION_4: EeSimulationData = {
  simulationId: "ee-sim4",
  simNumber: 4,
  title: "Simulation 4 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s pro Aufgabe)",
  timeLimitSeconds: 1260,
  questions: [
    {
      id: "ee-sim4-q01",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 1,
      person: { name: "Laura", context: "Fahrschülerin bei der Führerscheinprüfung" },
      scenario:
        "Nach einer fehlerfreien Prüfungsfahrt durch dichten Stadtverkehr schaltet Laura den Motor ab. Der Prüfer dreht sich lächelnd zu ihr um, gratuliert und überreicht ihr die vorläufige Fahrerlaubnis.",
      emotions: [
        { id: "A", label: "Freude", correctProbability: "likely" },
        { id: "B", label: "Erleichterung", correctProbability: "likely" },
        { id: "C", label: "Stolz", correctProbability: "likely" },
        { id: "D", label: "Trauer", correctProbability: "unlikely" },
        { id: "E", label: "Bitterkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Das Bestehen der Fahrprüfung erzeugt Freude, Erleichterung und Stolz. Trauer und Bitterkeit sind unzutreffend.",
    },
    {
      id: "ee-sim4-q02",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 2,
      person: { name: "Daniel", context: "WG-Mitbewohner beim Frühstücken" },
      scenario:
        "Daniel stellt fest, dass sein Mitbewohner ohne zu fragen Daniels teuren, eigens für ein Date gekauften Kaffee aufgebraucht und die leere Packung im Schrank stehen gelassen hat.",
      emotions: [
        { id: "A", label: "Ärger", correctProbability: "likely" },
        { id: "B", label: "Frustration", correctProbability: "likely" },
        { id: "C", label: "Dankbarkeit", correctProbability: "unlikely" },
        { id: "D", label: "Verstimmung", correctProbability: "likely" },
        { id: "E", label: "Scham", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die Entdeckung des Diebstahls und der Dreistigkeit erzeugt Ärger, Frustration und Verstimmung. Dankbarkeit und Scham sind unpassend.",
    },
    {
      id: "ee-sim4-q03",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 3,
      person: { name: "Sabine", context: "Bewerberin nach dem Vorstellungsgespräch" },
      scenario:
        "Sabine wartet seit vier Wochen auf eine Rückmeldung nach ihrem Traum-Jobinterview. Als sie eine E-Mail erhält, steht darin, dass die Stelle intern vergeben wurde und externe Bewerbungen nicht mehr berücksichtigt werden.",
      emotions: [
        { id: "A", label: "Enttäuschung", correctProbability: "likely" },
        { id: "B", label: "Frustration", correctProbability: "likely" },
        { id: "C", label: "Ernüchterung", correctProbability: "likely" },
        { id: "D", label: "Begeisterung", correctProbability: "unlikely" },
        { id: "E", label: "Erleichterung", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die Absage nach vier Wochen Warten erzeugt Enttäuschung, Frustration und Ernüchterung. Begeisterung und Erleichterung sind verfehlt.",
    },
    {
      id: "ee-sim4-q04",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 4,
      person: { name: "Paul", context: "Kletterer in der Steilwand" },
      scenario:
        "Beim Aufstieg bricht plötzlich ein Griff aus der Wand, und Paul rutscht zwei Meter ins Seil ab. Das Seil hält ihn sicher, aber er baumelt 40 Meter über dem Boden.",
      emotions: [
        { id: "A", label: "Schreck", correctProbability: "likely" },
        { id: "B", label: "Angst", correctProbability: "likely" },
        { id: "C", label: "Erleichterung", correctProbability: "likely" },
        { id: "D", label: "Langeweile", correctProbability: "unlikely" },
        { id: "E", label: "Übermut", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der unerwartete Sturz löst akuten Schreck und Angst aus, gefolgt von Erleichterung, dass das Sicherungsseil gehalten hat. Langeweile und Übermut sind abwegig.",
    },
    {
      id: "ee-sim4-q05",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 5,
      person: { name: "Eva", context: "Hebamme bei der Hausgeburt" },
      scenario:
        "Nach einer langwierigen und anstrengenden Hausgeburt kommt ein gesundes Mädchen zur Welt. Die Eltern weinen vor Glück und danken Eva innig für ihre ruhige Führung.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Rührung", correctProbability: "likely" },
        { id: "C", label: "Zufriedenheit", correctProbability: "likely" },
        { id: "D", label: "Bitterkeit", correctProbability: "unlikely" },
        { id: "E", label: "Resignation", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die glückliche Geburt nach langer Anstrengung bringt Erleichterung, Rührung und berufliche Zufriedenheit. Bitterkeit oder Resignation sind unpassend.",
    },
    {
      id: "ee-sim4-q06",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 6,
      person: { name: "Stefan", context: "Assistenzarzt auf der chirurgischen Station" },
      scenario:
        "Stefan entdeckt bei einer Routinekontrolle frühzeitig ein beginnendes Kompartmentsyndrom am Unterschenkel eines Patienten und alarmiert sofort den Operateur, der innerhalb von 15 Minuten notfallmäßig spaltet und das Bein rettet.",
      emotions: [
        { id: "A", label: "Stolz", correctProbability: "likely" },
        { id: "B", label: "Erleichterung", correctProbability: "likely" },
        { id: "C", label: "Wachsamkeit", correctProbability: "likely" },
        { id: "D", label: "Scham", correctProbability: "unlikely" },
        { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die lebensrettende Diagnose bringt Stolz auf die eigene klinische Wachsamkeit und Erleichterung über die gelungene Rettung. Scham und Gleichmut sind deplatziert.",
    },
    {
      id: "ee-sim4-q07",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 7,
      person: { name: "Johanna", context: "Freundin und Trauzeugin" },
      scenario:
        "Johanna hat monatelang einen Junggesellinnenabschied organisiert. Vor Ort beschwert sich die Braut wiederholt über die Location und das Essen, während die anderen Freundinnen die Stimmung retten wollen.",
      emotions: [
        { id: "A", label: "Enttäuschung", correctProbability: "likely" },
        { id: "B", label: "Kränkung", correctProbability: "likely" },
        { id: "C", label: "Anspannung", correctProbability: "likely" },
        { id: "D", label: "Schadenfreude", correctProbability: "unlikely" },
        { id: "E", label: "Zufriedenheit", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die ständige Kritik an der liebevoll geplanten Feier erzeugt Enttäuschung, Kränkung und Anspannung. Schadenfreude und Zufriedenheit sind ausgeschlossen.",
    },
    {
      id: "ee-sim4-q08",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 8,
      person: { name: "Matthias", context: "Student im Praktikum" },
      scenario:
        "Matthias hat einen Fehler in der Berechnung einer Brückenstatik entdeckt, die sein Vorgesetzter erstellt hatte. Er muss entscheiden, wie er den Fehler vorsichtig ansprechen kann, ohne den Vorgesetzten vor dem Kunden zu brüskieren.",
      emotions: [
        { id: "A", label: "Unsicherheit", correctProbability: "likely" },
        { id: "B", label: "Verantwortungsgefühl", correctProbability: "likely" },
        { id: "C", label: "Nervosität", correctProbability: "likely" },
        { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Übermut", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die heikle Situation erfordert Taktgefühl und löst Unsicherheit, Nervosität und ein starkes Verantwortungsgefühl aus. Gleichgültigkeit und Übermut treffen nicht zu.",
    },
    {
      id: "ee-sim4-q09",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 9,
      person: { name: "Petra", context: "Leitende OP-Pflegekraft" },
      scenario:
        "Petra muss kurz vor Feierabend einen Saal für eine Notfall-Laparotomie vorbereiten, weil ein Polytrauma eingeliefert wird. Eigentlich hatte sie versprochen, rechtzeitig zum Geburtstag ihres Sohnes zu Hause zu sein.",
      emotions: [
        { id: "A", label: "Zerrissenheit", correctProbability: "likely" },
        { id: "B", label: "Bedauern", correctProbability: "likely" },
        { id: "C", label: "Pflichtbewusstsein", correctProbability: "likely" },
        { id: "D", label: "Schadenfreude", correctProbability: "unlikely" },
        { id: "E", label: "Heiterkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der Konflikt zwischen Notdienst und Familienversprechen erzeugt Zerrissenheit, Bedauern und Pflichtbewusstsein. Schadenfreude und Heiterkeit sind deplatziert.",
    },
    {
      id: "ee-sim4-q10",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 10,
      person: { name: "Gregor", context: "Chefarzt der Kardiologie" },
      scenario:
        "Gregor erfährt, dass ein Kollege, den er jahrelang gefördert und für eine Professur empfohlen hat, hinter Gregors Rücken bei der Klinikleitung gegen Gregor intrigiert hat, um dessen Posten vorzeitig zu übernehmen.",
      emotions: [
        { id: "A", label: "Verratsempfinden", correctProbability: "likely" },
        { id: "B", label: "Enttäuschung", correctProbability: "likely" },
        { id: "C", label: "Bitterkeit", correctProbability: "likely" },
        { id: "D", label: "Mitleid", correctProbability: "unlikely" },
        { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Der Vertrauensbruch eines engen Schützlings erzeugt tiefes Verratsempfinden, Enttäuschung und Bitterkeit. Mitleid oder Gleichmut sind ausgeschlossen.",
    },
    {
      id: "ee-sim4-q11",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 11,
      person: { name: "Claudia", context: "Psychotherapeutin in eigener Praxis" },
      scenario:
        "Claudia erfährt, dass ein langjähriger Patient mit chronischer Depression unerwartet Suizid begangen hat. Sie prüft ihre Akten und stellt fest, dass alle Krisenpläne vereinbart und eingehalten wurden.",
      emotions: [
        { id: "A", label: "Bestürzung", correctProbability: "likely" },
        { id: "B", label: "Trauer", correctProbability: "likely" },
        { id: "C", label: "Hilflosigkeit", correctProbability: "likely" },
        { id: "D", label: "Teilnahmslosigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Der Suizid trotz korrekter Betreuung führt zu Bestürzung, Trauer und existenzieller Hilflosigkeit. Teilnahmslosigkeit oder Gleichgültigkeit widersprechen der Situation.",
    },
    {
      id: "ee-sim4-q12",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 12,
      person: { name: "Leon", context: "Student im Biochemie-Praktikum" },
      scenario:
        "Leon hat versehentlich ein teures Spektralphotometer durch falsche Handhabung beschädigt. Niemand hat es gesehen, doch die Reparatur wird mehrere tausend Euro kosten.",
      emotions: [
        { id: "A", label: "Scham", correctProbability: "likely" },
        { id: "B", label: "Angst", correctProbability: "likely" },
        { id: "C", label: "Gewissensbisse", correctProbability: "likely" },
        { id: "D", label: "Gelassenheit", correctProbability: "unlikely" },
        { id: "E", label: "Stolz", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Der Schaden und die Versuchung des Verschweigens erzeugen Scham, Angst vor Konsequenzen und Gewissensbisse. Gelassenheit und Stolz sind unzutreffend.",
    },
    {
      id: "ee-sim4-q13",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 13,
      person: { name: "Annette", context: "Onkologin im Aufklärungsgespräch" },
      scenario:
        "Annette muss einer 35-jährigen Mutter zweier kleiner Kinder mitteilen, dass ihr Mammakarzinom trotz Chemotherapie in Knochen und Leber metastasiert hat und eine Heilung ausgeschlossen ist.",
      emotions: [
        { id: "A", label: "Mitgefühl", correctProbability: "likely" },
        { id: "B", label: "Schwere", correctProbability: "likely" },
        { id: "C", label: "Anspannung", correctProbability: "likely" },
        { id: "D", label: "Kälte", correctProbability: "unlikely" },
        { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Das Überbringen dieser existenziellen Nachricht erfordert höchste Empathie und löst Mitgefühl, seelische Schwere und Anspannung aus. Kälte und Gleichmut sind ausgeschlossen.",
    },
    {
      id: "ee-sim4-q14",
      simulationId: "ee-sim4",
      subtest: "EE",
      questionNumber: 14,
      person: { name: "Valentin", context: "Arzt im Katastrophenschutz" },
      scenario:
        "Valentin hat nach einem Erdbeben 72 Stunden fast ununterbrochen im Feldlazarett operiert. Als die Ablösung eintrifft, bricht er auf einer Trage zusammen und kann weder sprechen noch aufstehen.",
      emotions: [
        { id: "A", label: "Erschöpfung", correctProbability: "likely" },
        { id: "B", label: "Überwältigung", correctProbability: "likely" },
        { id: "C", label: "Erleichterung", correctProbability: "likely" },
        { id: "D", label: "Übermut", correctProbability: "unlikely" },
        { id: "E", label: "Triumph", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Nach dem 72-Stunden-Einsatz dominieren extreme Erschöpfung, Überwältigung durch die Erlebnisse und Erleichterung über das Eintreffen der Ablösung. Übermut oder Triumph sind unpassend.",
    },
  ],
};
