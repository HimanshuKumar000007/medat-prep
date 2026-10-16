import type { EeSimulationData } from "./types";

export const EE_SIMULATION_5: EeSimulationData = {
  simulationId: "ee-sim5",
  simNumber: 5,
  title: "Simulation 5 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s pro Aufgabe)",
  timeLimitSeconds: 1260,
  questions: [
    {
      id: "ee-sim5-q01",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 1,
      person: { name: "Maria", context: "Studentin bei der Notenverkündung" },
      scenario:
        "Maria hat ihre letzte mündliche Staatsexamensprüfung bestanden. Nach sechs Jahren Studium ist sie nun approbierte Ärztin. Draußen warten ihre Eltern mit Blumen und Sekt.",
      emotions: [
        { id: "A", label: "Freude", correctProbability: "likely" },
        { id: "B", label: "Erleichterung", correctProbability: "likely" },
        { id: "C", label: "Stolz", correctProbability: "likely" },
        { id: "D", label: "Neid", correctProbability: "unlikely" },
        { id: "E", label: "Verbitterung", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der Studienabschluss nach 6 Jahren löst grenzenlose Freude, Erleichterung und Stolz aus. Neid und Verbitterung sind unzutreffend.",
    },
    {
      id: "ee-sim5-q02",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 2,
      person: { name: "Christoph", context: "Bahnreisender am Gleis" },
      scenario:
        "Christophs Zug zum Vorstellungsgespräch fällt 5 Minuten vor Abfahrt ersatzlos aus. Es gibt keine Alternative, die ihn rechtzeitig zum Termin bringen könnte.",
      emotions: [
        { id: "A", label: "Wut", correctProbability: "likely" },
        { id: "B", label: "Hilflosigkeit", correctProbability: "likely" },
        { id: "C", label: "Frustration", correctProbability: "likely" },
        { id: "D", label: "Dankbarkeit", correctProbability: "unlikely" },
        { id: "E", label: "Gelassenheit", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der plötzliche Zugausfall kurz vor dem wichtigen Vorstellungsgespräch führt zu Wut, Hilflosigkeit und Frustration. Dankbarkeit und Gelassenheit sind unpassend.",
    },
    {
      id: "ee-sim5-q03",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 3,
      person: { name: "Julia", context: "Wanderin bei Gewittereinbruch" },
      scenario:
        "Julia wird auf einem exponierten Grat von einem plötzlichen Gewitter mit Hagel und Blitzschlägen überrascht. Bis zur nächsten Schutzhütte sind es noch 20 Minuten steiler Abstieg.",
      emotions: [
        { id: "A", label: "Angst", correctProbability: "likely" },
        { id: "B", label: "Panik", correctProbability: "likely" },
        { id: "C", label: "Anspannung", correctProbability: "likely" },
        { id: "D", label: "Langeweile", correctProbability: "unlikely" },
        { id: "E", label: "Übermut", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die lebensbedrohliche Situation auf dem Grat löst akute Angst, Panik und extreme Anspannung aus. Langeweile oder Übermut sind abwegig.",
    },
    {
      id: "ee-sim5-q04",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 4,
      person: { name: "Sven", context: "Tierhalter beim Tierarzt" },
      scenario:
        "Svens Hund, der nach einem Autounfall operiert wurde, erwacht aus der Narkose, steht wackelig auf und wedelt vorsichtig mit dem Schwanz, als er Svens Stimme hört.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Rührung", correctProbability: "likely" },
        { id: "C", label: "Freude", correctProbability: "likely" },
        { id: "D", label: "Ärger", correctProbability: "unlikely" },
        { id: "E", label: "Scham", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Das Erwachen und die Reaktion des Hundes erzeugen Erleichterung, Rührung und Freude. Ärger und Scham sind verfehlt.",
    },
    {
      id: "ee-sim5-q05",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 5,
      person: { name: "Theresa", context: "Schauspielerin bei der Premiere" },
      scenario:
        "Theresa hat ihre erste Hauptrolle an einem großen Stadttheater gespielt. Während des Schlussapplauses fordert das Publikum drei Zugaben und spendet stehende Ovationen.",
      emotions: [
        { id: "A", label: "Glück", correctProbability: "likely" },
        { id: "B", label: "Stolz", correctProbability: "likely" },
        { id: "C", label: "Erschöpfung", correctProbability: "likely" },
        { id: "D", label: "Verbitterung", correctProbability: "unlikely" },
        { id: "E", label: "Groll", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die Ovationen bringen großes Glück, Stolz auf die Leistung und gleichzeitig körperliche Erschöpfung nach der Premiere. Verbitterung und Groll sind abwegig.",
    },
    {
      id: "ee-sim5-q06",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 6,
      person: { name: "Moritz", context: "Student bei der Wohnungsübergabe" },
      scenario:
        "Der Vermieter verweigert Moritz die Rückzahlung der Kaution in voller Höhe mit dem Vorwand, die Wände seien nicht fachgerecht gestrichen, obwohl Moritz Vorher-Nachher-Fotos vorweisen kann.",
      emotions: [
        { id: "A", label: "Ärger", correctProbability: "likely" },
        { id: "B", label: "Ungerechtigkeitsempfinden", correctProbability: "likely" },
        { id: "C", label: "Empörung", correctProbability: "likely" },
        { id: "D", label: "Dankbarkeit", correctProbability: "unlikely" },
        { id: "E", label: "Heiterkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die ungerechtfertigte Einbehaltung der Kaution erzeugt Ärger, Empörung und ein starkes Ungerechtigkeitsempfinden. Dankbarkeit und Heiterkeit sind deplatziert.",
    },
    {
      id: "ee-sim5-q07",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 7,
      person: { name: "Ines", context: "Pflegedienstleiterin im Notfallstab" },
      scenario:
        "Wegen eines Norovirus-Ausbruchs fallen auf einen Schlag 40% des Pflegepersonals aus. Ines muss binnen einer Stunde einen Notdienstplan aufstellen und Schichten zwangsweise verlängern.",
      emotions: [
        { id: "A", label: "Anspannung", correctProbability: "likely" },
        { id: "B", label: "Belastung", correctProbability: "likely" },
        { id: "C", label: "Verantwortungsdruck", correctProbability: "likely" },
        { id: "D", label: "Leichtsinn", correctProbability: "unlikely" },
        { id: "E", label: "Schadenfreude", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der Personalnotstand erzeugt hohe Anspannung, seelische Belastung und starken Verantwortungsdruck. Leichtsinn und Schadenfreude scheiden aus.",
    },
    {
      id: "ee-sim5-q08",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 8,
      person: { name: "Klaus", context: "Pensionär am letzten Arbeitstag" },
      scenario:
        "Nach 42 Jahren im selben Betrieb räumt Klaus seinen Schreibtisch aus. Seine Kollegen überraschen ihn mit einer Abschiedsfeier und einem Fotobuch aus vier Jahrzehnten.",
      emotions: [
        { id: "A", label: "Wehmut", correctProbability: "likely" },
        { id: "B", label: "Rührung", correctProbability: "likely" },
        { id: "C", label: "Dankbarkeit", correctProbability: "likely" },
        { id: "D", label: "Groll", correctProbability: "unlikely" },
        { id: "E", label: "Hass", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der Abschied in den Ruhestand nach 42 Jahren ist geprägt von Wehmut, Rührung und Dankbarkeit. Groll oder Hass sind nicht vorhanden.",
    },
    {
      id: "ee-sim5-q09",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 9,
      person: { name: "Saskia", context: "Studentin bei der Laborpartnerwahl" },
      scenario:
        "Saskias langjährige Lernpartnerin wählt für das Hauptpraktikum überraschend einen anderen Kommilitonen, ohne Saskia vorher zu informieren. Saskia erfährt es erst aus der offiziellen Einteilungsliste.",
      emotions: [
        { id: "A", label: "Kränkung", correctProbability: "likely" },
        { id: "B", label: "Enttäuschung", correctProbability: "likely" },
        { id: "C", label: "Verunsicherung", correctProbability: "likely" },
        { id: "D", label: "Schadenfreude", correctProbability: "unlikely" },
        { id: "E", label: "Gleichmut", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Die heimliche Abkehr der Lernpartnerin führt zu Kränkung, Enttäuschung und Verunsicherung über die Beziehung. Schadenfreude und Gleichmut treffen nicht zu.",
    },
    {
      id: "ee-sim5-q10",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 10,
      person: { name: "Prof. Dr. Hartmann", context: "Leiter einer Universitätsklinik" },
      scenario:
        "Prof. Hartmann erfährt aus den Medien, dass ein Oberarzt seiner Abteilung über Monate hinweg Daten in klinischen Medikamentenstudien manipuliert hat. Eine offizielle Untersuchung der Ethikkommission wurde soeben eingeleitet.",
      emotions: [
        { id: "A", label: "Bestürzung", correctProbability: "likely" },
        { id: "B", label: "Wut", correctProbability: "likely" },
        { id: "C", label: "Sorge", correctProbability: "likely" },
        { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Triumph", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Der Forschungsskandal erzeugt Bestürzung über den Betrug, Wut auf den Täter und Sorge um den Ruf der Klinik. Gleichgültigkeit und Triumph sind ausgeschlossen.",
    },
    {
      id: "ee-sim5-q11",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 11,
      person: { name: "Constanze", context: "Richterin bei der Urteilsverkündung" },
      scenario:
        "Constanze muss einen Angeklagten wegen mangelnder Beweise freisprechen, obwohl sie aus den Akten und Vernehmungen persönlich von dessen Schuld überzeugt ist. Die Rechtslage zwingt sie zum Grundsatz 'in dubio pro reo'.",
      emotions: [
        { id: "A", label: "Zerrissenheit", correctProbability: "likely" },
        { id: "B", label: "Frustration", correctProbability: "likely" },
        { id: "C", label: "Pflichtbewusstsein", correctProbability: "likely" },
        { id: "D", label: "Genugtuung", correctProbability: "unlikely" },
        { id: "E", label: "Schadenfreude", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Der Konflikt zwischen juristischer Pflicht und persönlicher Überzeugung erzeugt Zerrissenheit, Frustration und klares Pflichtbewusstsein. Genugtuung und Schadenfreude sind verfehlt.",
    },
    {
      id: "ee-sim5-q12",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 12,
      person: { name: "Fabienne", context: "Assistenzärztin in der Notaufnahme" },
      scenario:
        "Fabienne hat einen aggressiven, betrunkenen Patienten behandelt, der sie während der Wundversorgung wüst beschimpft und bespuckt hat. Sie hat die Behandlung dennoch ruhig und fachgerecht abgeschlossen.",
      emotions: [
        { id: "A", label: "Ekel", correctProbability: "likely" },
        { id: "B", label: "Empörung", correctProbability: "likely" },
        { id: "C", label: "Erleichterung", correctProbability: "likely" },
        { id: "D", label: "Scham", correctProbability: "unlikely" },
        { id: "E", label: "Freude", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Das Bespucken löst Ekel und Empörung aus, während das Ende der Behandlung Erleichterung bringt. Scham und Freude sind unbegründet.",
    },
    {
      id: "ee-sim5-q13",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 13,
      person: { name: "Georg", context: "Leiter einer Rettungswache" },
      scenario:
        "Georg hat ein neues Deeskalationstraining für seine Notfallsanitäter eingeführt. Zwei Monate später belegen die Zahlen einen Rückgang der Übergriffe auf Rettungskräfte um 60%. Das Innenministerium zeichnet die Wache als Vorzeigeprojekt aus.",
      emotions: [
        { id: "A", label: "Stolz", correctProbability: "likely" },
        { id: "B", label: "Genugtuung", correctProbability: "likely" },
        { id: "C", label: "Erleichterung", correctProbability: "likely" },
        { id: "D", label: "Bitterkeit", correctProbability: "unlikely" },
        { id: "E", label: "Überdruss", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Der messbare Erfolg des Projekts bringt Stolz, Genugtuung und Erleichterung über den besseren Schutz der Kollegen. Bitterkeit und Überdruss sind abwegig.",
    },
    {
      id: "ee-sim5-q14",
      simulationId: "ee-sim5",
      subtest: "EE",
      questionNumber: 14,
      person: { name: "Dr. Althaus", context: "Palliativmedizinerin" },
      scenario:
        "Dr. Althaus begleitet einen schwerkranken Patienten in seinen letzten Stunden. Als der Patient schmerzfrei im Beisein seiner Familie stirbt, bedankt sich die Tochter unter Tränen bei Frau Dr. Althaus mit den Worten: 'Sie haben ihm die Angst vor dem Sterben genommen.'",
      emotions: [
        { id: "A", label: "Ergriffenheit", correctProbability: "likely" },
        { id: "B", label: "Dankbarkeit", correctProbability: "likely" },
        { id: "C", label: "Sinnstiftung", correctProbability: "likely" },
        { id: "D", label: "Gleichgültigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Verzweiflung", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Dieser Moment tiefer menschlicher Würde erzeugt Ergriffenheit, Dankbarkeit und ein tiefes Gefühl von Sinnstiftung in der ärztlichen Arbeit. Gleichgültigkeit und Verzweiflung sind abwegig.",
    },
  ],
};
