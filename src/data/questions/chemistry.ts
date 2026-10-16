import type { StoredQuestion } from "./types";

export const CHEMISTRY_QUESTIONS: StoredQuestion[] = [
  // --- Atombau & PSE (chem-atom) ---
  {
    id: "chem-atom-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "chem",
    chapterId: "chem-atom",
    topic: "Elementarteilchen & Ionen",
    difficulty: "Leicht",
    questionText:
      "Ein einfach positiv geladenes Natrium-Ion (23_11 Na⁺) besitzt wie viele Protonen, Neutronen und Elektronen?",
    options: [
      "11 Protonen, 12 Neutronen, 10 Elektronen",
      "11 Protonen, 11 Neutronen, 11 Elektronen",
      "12 Protonen, 11 Neutronen, 10 Elektronen",
      "11 Protonen, 12 Neutronen, 11 Elektronen",
      "10 Protonen, 12 Neutronen, 10 Elektronen",
    ],
    correctAnswer: 0,
    explanation:
      "Die Ordnungszahl 11 gibt die Protonenzahl an (11). Massenzahl 23 − Protonenzahl 11 = 12 Neutronen. Durch die positive Ladung Na⁺ fehlt 1 Elektron gegenüber den Protonen: 11 − 1 = 10 Elektronen.",
    tags: ["BMS", "Chemie", "Atombau", "Ionen"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "chem-atom-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "chem",
    chapterId: "chem-atom",
    topic: "Periodensystem & Elektronegativität",
    difficulty: "Mittel",
    questionText:
      "Wie verhält sich die Elektronegativität der Elemente innerhalb einer Hauptgruppe von oben nach unten bzw. innerhalb einer Periode von links nach rechts?",
    options: [
      "Nimmt in der Gruppe nach unten zu und in der Periode nach rechts ab.",
      "Nimmt in der Gruppe nach unten ab und in der Periode nach rechts zu.",
      "Nimmt sowohl in der Gruppe nach unten als auch in der Periode nach rechts zu.",
      "Nimmt sowohl in der Gruppe nach unten als auch in der Periode nach rechts ab.",
      "Bleibt in Hauptgruppen konstant und schwankt unregelmäßig in Perioden.",
    ],
    correctAnswer: 1,
    explanation:
      "Die Elektronegativität nimmt in einer Periode von links nach rechts zu (höhere Kernladung zieht Elektronen stärker an) und in einer Hauptgruppe von oben nach unten ab (größerer Atomradius, stärkere Abschirmung durch Innenschalen). Fluor ist das elektronegativste Element (EN = 4,0).",
    tags: ["BMS", "Chemie", "PSE", "Elektronegativität"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Bindungslehre (chem-bonds) ---
  {
    id: "chem-bonds-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "chem",
    chapterId: "chem-bonds",
    topic: "Zwischenmolekulare Kräfte & Wasserstoffbrücken",
    difficulty: "Mittel",
    questionText:
      "Zwischen welchen Molekülen können sich intermolekulare Wasserstoffbrückenbindungen ausbilden?",
    options: [
      "Nur zwischen unpolaren Kohlenwasserstoffen wie Methan (CH4)",
      "Zwischen Molekülen, in denen Wasserstoff an stark elektronegative Atome (F, O, N) gebunden ist",
      "Ausschließlich zwischen Edelgasatomen bei tiefen Temperaturen",
      "Nur zwischen Ionen im Kristallgitter von Salzen",
      "Zwischen allen Molekülen, die Kohlenstoff enthalten",
    ],
    correctAnswer: 1,
    explanation:
      "Wasserstoffbrückenbindungen entstehen, wenn Wasserstoff an ein stark elektronegatives Atom (Fluor, Sauerstoff oder Stickstoff) kovalent gebunden ist und mit einem freien Elektronenpaar eines benachbarten F-, O- oder N-Atoms wechselwirkt.",
    tags: ["BMS", "Chemie", "Bindungen", "Wasserstoffbrücken"],
    source: "medat-original",
    version: "2026.1",
  },

  // --- Säure-Base-Gleichgewichte (chem-acids) ---
  {
    id: "chem-acids-001",
    exam: "BOTH",
    section: "BMS",
    subjectId: "chem",
    chapterId: "chem-acids",
    topic: "pH-Wert & Verdünnung",
    difficulty: "Mittel",
    questionText:
      "Wie ändert sich der pH-Wert einer wässrigen Salzsäurelösung (HCl), wenn sie mit destilliertem Wasser im Verhältnis 1:100 verdünnt wird?",
    options: [
      "Der pH-Wert sinkt um 2 Einheiten.",
      "Der pH-Wert steigt um 2 Einheiten.",
      "Der pH-Wert steigt um 100 Einheiten.",
      "Der pH-Wert sinkt um 100 Einheiten.",
      "Der pH-Wert bleibt unverändert.",
    ],
    correctAnswer: 1,
    explanation:
      "pH = −log10[H3O⁺]. Eine Verdünnung um den Faktor 100 (10^2) verringert die Konzentration der Oxonium-Ionen um zwei Zehnerpotenzen, wodurch der pH-Wert um 2 Einheiten ansteigt.",
    tags: ["BMS", "Chemie", "Säure-Base", "pH-Wert"],
    source: "medat-original",
    version: "2026.1",
  },
  {
    id: "chem-acids-002",
    exam: "BOTH",
    section: "BMS",
    subjectId: "chem",
    chapterId: "chem-acids",
    topic: "Puffersysteme & Henderson-Hasselbalch",
    difficulty: "Schwer",
    questionText:
      "Aus welchen Komponenten besteht ein effektives chemisches Puffersystem?",
    options: [
      "Aus einer starken Säure und einer starken Base im Verhältnis 1:1",
      "Aus einer schwachen Säure und ihrer korrespondierenden schwachen Base (oder umgekehrt)",
      "Ausschließlich aus reinem Wasser mit Natriumchlorid",
      "Aus einem Gemisch zweier starker Säuren",
      "Aus festen unlöslichen Salzen",
    ],
    correctAnswer: 1,
    explanation:
      "Ein Puffersystem besteht aus einer schwachen Säure und ihrer korrespondierenden Base (z. B. H2CO3 / HCO3⁻). Bei Zugabe von Säure oder Base fangen die Pufferkomponenten die Protonen bzw. Hydroxid-Ionen ab, sodass der pH-Wert weitgehend konstant bleibt.",
    tags: ["BMS", "Chemie", "Puffer", "Säure-Base"],
    source: "medat-original",
    version: "2026.1",
  },
];
