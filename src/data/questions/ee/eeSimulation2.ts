import type { EeSimulationData } from "./types";

export const EE_SIMULATION_2: EeSimulationData = {
  simulationId: "ee-sim2",
  simNumber: 2,
  title: "Simulation 2 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s pro Aufgabe)",
  timeLimitSeconds: 1260,
  questions: [
    {
      id: "ee-sim2-q01",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 1,
      person: { name: "Lisa", context: "Schülerin nach der Matura" },
      scenario:
        "Lisa hat monatelang gebangt, ob ihr Notendurchschnitt für die Zulassung zum Wunschstudiengang reichen wird. Beim Öffnen des Zulassungsbescheids liest sie die Zusage für ihren Erstwunsch.",
      emotions: [
        { id: "A", label: "Freude", correctProbability: "likely" },
        { id: "B", label: "Erleichterung", correctProbability: "likely" },
        { id: "C", label: "Neid", correctProbability: "unlikely" },
        { id: "D", label: "Verbitterung", correctProbability: "unlikely" },
        { id: "E", label: "Zuversicht", correctProbability: "likely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die Zusage löst unmittelbar Freude, Erleichterung und Zuversicht für die Zukunft aus. Neid und Verbitterung sind abwegig.",
    },
    {
      id: "ee-sim2-q02",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 2,
      person: { name: "Markus", context: "Büroangestellter im Teammeeting" },
      scenario:
        "Markus stellt im Meeting eine neue Idee vor. Ein Kollege unterbricht ihn mehrfach schroff und bezeichnet den Vorschlag vor versammelter Runde als naiv und unbrauchbar.",
      emotions: [
        { id: "A", label: "Ärger", correctProbability: "likely" },
        { id: "B", label: "Verlegenheit", correctProbability: "likely" },
        { id: "C", label: "Kränkung", correctProbability: "likely" },
        { id: "D", label: "Heiterkeit", correctProbability: "unlikely" },
        { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der schroffe persönliche Angriff im Meeting erzeugt Ärger, Verlegenheit und Kränkung. Heiterkeit und Gleichmut sind ausgeschlossen.",
    },
    {
      id: "ee-sim2-q03",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 3,
      person: { name: "Sandra", context: "Sportlerin vor dem Wettkampf" },
      scenario:
        "Sandra hat sich ein Jahr lang auf einen Marathon vorbereitet. Am Morgen des Wettkampfs wacht sie mit starkem Fieber und Gliederschmerzen auf und muss ihren Start schweren Herzens absagen.",
      emotions: [
        { id: "A", label: "Enttäuschung", correctProbability: "likely" },
        { id: "B", label: "Frustration", correctProbability: "likely" },
        { id: "C", label: "Schadenfreude", correctProbability: "unlikely" },
        { id: "D", label: "Trauer", correctProbability: "likely" },
        { id: "E", label: "Zufriedenheit", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Das plötzliche krankheitsbedingte Scheitern nach einem Jahr Vorbereitung führt zu Enttäuschung, Frustration und Trauer. Schadenfreude und Zufriedenheit sind gänzlich unpassend.",
    },
    {
      id: "ee-sim2-q04",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 4,
      person: { name: "Tim", context: "Fahrradkurier im Stadtverkehr" },
      scenario:
        "Tim wird an einer Kreuzung von einem rechtsabbiegenden Auto übersehen und kann nur durch eine Vollbremsung einen schweren Zusammenstoß um Zentimeter verhindern. Der Autofahrer fährt ohne anzuhalten weiter.",
      emotions: [
        { id: "A", label: "Schreck", correctProbability: "likely" },
        { id: "B", label: "Wut", correctProbability: "likely" },
        { id: "C", label: "Erleichterung", correctProbability: "likely" },
        { id: "D", label: "Gelassenheit", correctProbability: "unlikely" },
        { id: "E", label: "Scham", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der Beinahe-Unfall löst akuten Schreck und Wut über die Fahrerflucht aus, gefolgt von Erleichterung über das eigene Überleben. Gelassenheit und Scham sind unzutreffend.",
    },
    {
      id: "ee-sim2-q05",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 5,
      person: { name: "Nadine", context: "Architekturstudentin bei der Abschlussausstellung" },
      scenario:
        "Nadines Entwurf wird von der Fachjury mit dem ersten Preis ausgezeichnet. Allerdings lobt der Juryvorsitzende in der Begründung vor allem ein Detail, das Nadines Projektpartner gegen ihren Willen eingefügt hatte.",
      emotions: [
        { id: "A", label: "Freude", correctProbability: "likely" },
        { id: "B", label: "Stolz", correctProbability: "likely" },
        { id: "C", label: "Verstimmung", correctProbability: "likely" },
        { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Furcht", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der erste Preis bringt Freude und Stolz, während das Lob für das ungeliebte Fremddetail eine spürbare Verstimmung hervorruft. Gleichgültigkeit und Furcht sind unwahrscheinlich.",
    },
    {
      id: "ee-sim2-q06",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 6,
      person: { name: "Oliver", context: "Oberarzt auf der Kinderstation" },
      scenario:
        "Oliver behandelt einen kleinen Jungen mit akutem Asthmaanfall. Nach Gabe der Notfallinhalation stabilisiert sich die Sauerstoffsättigung rasch, das Kind atmet wieder ruhig und lächelt seine weinende Mutter an.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Zufriedenheit", correctProbability: "likely" },
        { id: "C", label: "Mitgefühl", correctProbability: "likely" },
        { id: "D", label: "Resignation", correctProbability: "unlikely" },
        { id: "E", label: "Überdruss", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die erfolgreiche Akuttherapie bringt Erleichterung und Zufriedenheit über das Gelingen, sowie Mitgefühl für die Familie. Resignation und Überdruss widersprechen dem Erfolg.",
    },
    {
      id: "ee-sim2-q07",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 7,
      person: { name: "Sarah", context: "Freundin bei einer Verabredung" },
      scenario:
        "Sarah wartet seit 45 Minuten im Café auf ihre Verabredung. Als sie anruft, erfährt sie beiläufig, dass die Person den Termin schlicht vergessen hat und nun lieber zu Hause bleibt.",
      emotions: [
        { id: "A", label: "Ärger", correctProbability: "likely" },
        { id: "B", label: "Enttäuschung", correctProbability: "likely" },
        { id: "C", label: "Kränkung", correctProbability: "likely" },
        { id: "D", label: "Mitleid", correctProbability: "unlikely" },
        { id: "E", label: "Heiterkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Das Versetzen und die Gleichgültigkeit der Verabredung erzeugen Ärger, Enttäuschung und Kränkung. Mitleid oder Heiterkeit sind deplatziert.",
    },
    {
      id: "ee-sim2-q08",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 8,
      person: { name: "Patrick", context: "Teamleiter in der Softwareentwicklung" },
      scenario:
        "Patrick hat für sein Team flexible Arbeitszeiten durchgesetzt. Kurz darauf stellt er fest, dass zwei Mitarbeiter das System ausnutzen und wiederholt Deadlines nicht einhalten, während der Rest des Teams die Mehrarbeit auffangen muss.",
      emotions: [
        { id: "A", label: "Enttäuschung", correctProbability: "likely" },
        { id: "B", label: "Verärgerung", correctProbability: "likely" },
        { id: "C", label: "Sorge", correctProbability: "likely" },
        { id: "D", label: "Schadenfreude", correctProbability: "unlikely" },
        { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der Vertrauensbruch führt zu Enttäuschung, Verärgerung und Sorge um den Teamfrieden. Schadenfreude und Gleichmut sind ausgeschlossen.",
    },
    {
      id: "ee-sim2-q09",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 9,
      person: { name: "Katja", context: "Musikerin vor dem Solokonzert" },
      scenario:
        "Katja sitzt in der Künstlergarderobe, in zehn Minuten beginnt ihr erstes Violinsolo in einem großen Konzerthaus. Ihre Hände fühlen sich feucht an, ihr Puls ist beschleunigt, aber sie hat das Stück tausendfach geübt.",
      emotions: [
        { id: "A", label: "Lampenfieber", correctProbability: "likely" },
        { id: "B", label: "Anspannung", correctProbability: "likely" },
        { id: "C", label: "Vorfreude", correctProbability: "likely" },
        { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Verzweiflung", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Unmittelbar vor dem Solo treten Lampenfieber und körperliche Anspannung auf, kombiniert mit Vorfreude auf den Auftritt. Gleichgültigkeit und Verzweiflung sind unzutreffend.",
    },
    {
      id: "ee-sim2-q10",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 10,
      person: { name: "Martin", context: "Facharzt für Innere Medizin" },
      scenario:
        "Martin hat einen Patienten wochenlang auf ein Magengeschwür behandelt. Als die Beschwerden nicht weichen, veranlasst er eine CT-Untersuchung und entdeckt ein weit fortgeschrittenes Pankreaskarzinom, das in früheren Ultraschallbildern schwer erkennbar war.",
      emotions: [
        { id: "A", label: "Bestürzung", correctProbability: "likely" },
        { id: "B", label: "Selbstzweifel", correctProbability: "likely" },
        { id: "C", label: "Schuldgefühl", correctProbability: "likely" },
        { id: "D", label: "Triumph", correctProbability: "unlikely" },
        { id: "E", label: "Teilnahmslosigkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Die späte Diagnose löst bei Martin Bestürzung, Selbstzweifel an seiner diagnostischen Sorgfalt und Schuldgefühle aus. Triumph und Teilnahmslosigkeit sind ausgeschlossen.",
    },
    {
      id: "ee-sim2-q11",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 11,
      person: { name: "Anja", context: "Schwester der Braut" },
      scenario:
        "Anjas jüngere Schwester heiratet den Mann, in den Anja vor Jahren selbst unglücklich verliebt war. Während der feierlichen Trauung sieht Anja, wie glücklich die beiden miteinander sind, und hält eine rührende Rede.",
      emotions: [
        { id: "A", label: "Wehmut", correctProbability: "likely" },
        { id: "B", label: "Mitfreude", correctProbability: "likely" },
        { id: "C", label: "Rührung", correctProbability: "likely" },
        { id: "D", label: "Hass", correctProbability: "unlikely" },
        { id: "E", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Anja empfindet Wehmut über die alte Sehnsucht, gleichzeitig aber echte Mitfreude für die Schwester und Rührung während der Feier. Hass und Gleichgültigkeit sind nicht vorhanden.",
    },
    {
      id: "ee-sim2-q12",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 12,
      person: { name: "Felix", context: "Nachwuchsforscher" },
      scenario:
        "Felix hat seine Dissertation eingereicht. Bei der Disputation übt ein externer Gutachter scharfe methodische Kritik, bewertet die Arbeit am Ende aber dennoch mit 'magna cum laude'.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Verunsicherung", correctProbability: "likely" },
        { id: "C", label: "Stolz", correctProbability: "likely" },
        { id: "D", label: "Verzweiflung", correctProbability: "unlikely" },
        { id: "E", label: "Wut", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Die Auszeichnung bringt Erleichterung und Stolz, während die scharfe Kritik eine gewisse Verunsicherung hinterlässt. Verzweiflung und Wut sind nach dem guten Abschluss abwegig.",
    },
    {
      id: "ee-sim2-q13",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 13,
      person: { name: "Kerstin", context: "Krankenhausärztin" },
      scenario:
        "Kerstin hat ihren ersten Bereitschaftsdienst allein auf der Intensivstation überstanden. Es gab zwei kritische Zwischenfälle, die sie ohne Hilfe des Hintergrunddienstes leitliniengerecht stabilisieren konnte. Am Morgen fühlt sie sich wie benommen.",
      emotions: [
        { id: "A", label: "Erschöpfung", correctProbability: "likely" },
        { id: "B", label: "Stolz", correctProbability: "likely" },
        { id: "C", label: "Erleichterung", correctProbability: "likely" },
        { id: "D", label: "Langeweile", correctProbability: "unlikely" },
        { id: "E", label: "Panik", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Nach dem überstandenen Alleindienst dominieren Erschöpfung, Stolz auf die Bewährung und Erleichterung. Langeweile und Panik treffen nicht zu.",
    },
    {
      id: "ee-sim2-q14",
      simulationId: "ee-sim2",
      subtest: "EE",
      questionNumber: 14,
      person: { name: "Jan", context: "Leitender Notfallsanitäter" },
      scenario:
        "Jan muss entscheiden, welcher von zwei Schwerverletzten nach einem Busunglück zuerst mit dem einzigen verfügbaren Rettungshubschrauber abtransportiert wird. Beide Patienten sind instabil; die bodengebundene Verstärkung ist noch 25 Minuten entfernt.",
      emotions: [
        { id: "A", label: "Anspannung", correctProbability: "likely" },
        { id: "B", label: "Zerrissenheit", correctProbability: "likely" },
        { id: "C", label: "Verantwortungsdruck", correctProbability: "likely" },
        { id: "D", label: "Leichtfertigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Schadenfreude", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "In dieser Triage-Dilemmasituation erlebt Jan extreme Anspannung, Zerrissenheit und immensen Verantwortungsdruck. Leichtfertigkeit und Schadenfreude sind völlig ausgeschlossen.",
    },
  ],
};
