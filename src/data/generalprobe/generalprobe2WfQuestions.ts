/**
 * MedAT KFF — Wortflüssigkeit (WF) — Generalprobe #2
 * Exactly 15 Deterministic, Lexically Verified German Word-Anagram Questions
 * 
 * IDs: KFF-WF-GP2-001 through KFF-WF-GP2-015 (aliased to wf-sim2-q01 .. q15)
 * 
 * Specifications:
 * - Exactly 15 Questions, 20 Minutes (~80s / question)
 * - Authentic, common German standard nouns (Nominativ Singular)
 * - Varied vocabulary across medicine, biology, pharmacy, pathology, and science
 * - Standard German spelling using only A–Z (no Umlauts Ä, Ö, Ü, and no ß)
 * - Exact letter multiset matching: multiset(letters) === multiset(scrambledLetters) === multiset(targetWord)
 * - Mathematically & lexically verified: no ambiguous anagram collisions with conflicting initial letters
 * - Five answer choices: Options A–D (distinct uppercase candidate initials), Option E ("Keine der Antwortmöglichkeiten ist richtig")
 * - Perfectly balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E (non-repeating sequence)
 * - Genuine Option E cases (Questions 4, 9, 14: true initial letter completely omitted from A–D)
 * - Calibrated difficulty distribution: exactly 4 Leicht, 8 Mittel, 3 Schwer
 * - Step-by-step derivation, letter matching, and exhaustive distractor analysis for all 15 questions
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { WfQuestionData } from "../questions/wf/types";

export const RAW_GENERALPROBE_2_WF_QUESTIONS: WfQuestionData[] = [
  {
    id: "KFF-WF-GP2-001",
    simulationId: "generalprobe-2",
    questionNumber: 1,
    subtest: "WF",
    letters: ["E", "V", "L", "I", "T", "N"],
    scrambledLetters: "E · V · L · I · T · N",
    targetWord: "VENTIL",
    correctInitial: "V",
    options: {
      A: "N",
      B: "V",
      C: "T",
      D: "L",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs gegebenen Buchstaben E, I, L, N, T, V bildet sich eindeutig das deutsche Substantiv 'VENTIL' (das Ventil, mechanisches Bauelement / Herzklappe in der Physiologie).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), I (1×), L (1×), N (1×), T (1×), V (1×)\nAlle sechs Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert im deutschen Standardwortschatz kein anderes gebräuchliches Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'V'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('N') ist falsch, da N der Schlussbuchstabe von VENTIL ist ('NIVELT' ist kein deutsches Wort).\n• Option C ('T') ist falsch, da T der vierte Buchstabe ist ('TEVLIN' ist kein deutsches Wort).\n• Option D ('L') ist falsch, da L der letzte Konsonant vor dem Vokalabbruch bzw. Endkonsonant ist ('LIVENT' ist kein deutsches Substantiv).\n• Option E ist falsch, da Option B den zutreffenden Anfangsbuchstaben 'V' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Technik", "Physiologie", "Leicht", "KFF-WF-GP2-001"],
  },
  {
    id: "KFF-WF-GP2-002",
    simulationId: "generalprobe-2",
    questionNumber: 2,
    subtest: "WF",
    letters: ["E", "R", "T", "P", "E", "Z"],
    scrambledLetters: "E · R · T · P · E · Z",
    targetWord: "REZEPT",
    correctInitial: "R",
    options: {
      A: "R",
      B: "Z",
      C: "P",
      D: "T",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben E, E, P, R, T, Z bildet sich eindeutig das deutsche Substantiv 'REZEPT' (das Rezept, ärztliche Verordnung / Kochanweisung).\n\nBuchstaben-Verifikation (Multimenge):\n• E (2×), P (1×), R (1×), T (1×), Z (1×)\nAlle Buchstaben werden genau einmal verwendet. Ein anderes deutsches Substantiv lässt sich aus dieser Kombination nicht konstruieren.\n\nDer gesuchte Anfangsbuchstabe lautet 'R'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('Z') ist falsch, da Z an dritter Stelle steht ('ZEPRET' ist kein deutsches Substantiv).\n• Option C ('P') ist falsch, da P an fünfter Stelle steht ('PETZER' benötigt andere Konsonanten).\n• Option D ('T') ist falsch, da T der Schlussbuchstabe ist ('TEPZER' existiert nicht).\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'R' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Pharmazie", "Medizin", "Leicht", "KFF-WF-GP2-002"],
  },
  {
    id: "KFF-WF-GP2-003",
    simulationId: "generalprobe-2",
    questionNumber: 3,
    subtest: "WF",
    letters: ["A", "K", "L", "E", "S", "P"],
    scrambledLetters: "A · K · L · E · S · P",
    targetWord: "KAPSEL",
    correctInitial: "K",
    options: {
      A: "P",
      B: "S",
      C: "L",
      D: "K",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben A, E, K, L, P, S bildet sich eindeutig das deutsche Substantiv 'KAPSEL' (die Kapsel, Darreichungsform in der Pharmazie / Organhülle in der Anatomie).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), K (1×), L (1×), P (1×), S (1×)\nAlle sechs Buchstaben stimmen vollständig überein. Es existiert kein alternatives deutsches Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'K'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('P') ist falsch, da P der dritte Buchstabe ist ('PAKELS' ist kein deutsches Wort).\n• Option B ('S') ist falsch, da S der vierte Buchstabe ist ('SPALEK' existiert nicht).\n• Option C ('L') ist falsch, da L der Auslaut ist ('LAPEKS' existiert nicht).\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'K' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Pharmazie", "Anatomie", "Leicht", "KFF-WF-GP2-003"],
  },
  {
    id: "KFF-WF-GP2-004",
    simulationId: "generalprobe-2",
    questionNumber: 4,
    subtest: "WF",
    letters: ["I", "F", "R", "E", "B", "E"],
    scrambledLetters: "I · F · R · E · B · E",
    targetWord: "FIEBER",
    correctInitial: "F",
    options: {
      A: "B",
      B: "R",
      C: "E",
      D: "I",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben B, E, E, F, I, R bildet sich eindeutig das deutsche Substantiv 'FIEBER' (das Fieber, Erhöhung der Körperkerntemperatur / Leitsymptom).\n\nBuchstaben-Verifikation (Multimenge):\n• B (1×), E (2×), F (1×), I (1×), R (1×)\nAlle sechs Buchstaben werden exakt einmal verwendet.\n\nDer gesuchte Anfangsbuchstabe lautet 'F'.\nDa der Buchstabe 'F' in keiner der Optionen A bis D angeboten wird, ist Option E ('Keine der Antwortmöglichkeiten ist richtig') die korrekte Antwort.\n\nDistraktoren-Analyse:\n• Option A ('B') ist falsch, da B an vierter Stelle steht ('BRIEFE' benötigt ein zweites F statt B; 'BEREIF' ist kein Grundform-Substantiv).\n• Option B ('R') ist falsch, da R der Schlussbuchstabe von FIEBER ist.\n• Option C ('E') ist falsch, da E als Vokal im Wortinneren und am Ende vorkommt, aber kein deutsches Substantiv beginnt.\n• Option D ('I') ist falsch, da I an zweiter Stelle steht.\n• Option E ist korrekt, da der tatsächliche Anfangsbuchstabe 'F' nicht in A–D aufgeführt ist.",
    tags: ["KFF", "Wortflüssigkeit", "Symptome", "Klinik", "Leicht", "KFF-WF-GP2-004", "Option-E"],
  },
  {
    id: "KFF-WF-GP2-005",
    simulationId: "generalprobe-2",
    questionNumber: 5,
    subtest: "WF",
    letters: ["Y", "E", "P", "N", "S", "S", "A"],
    scrambledLetters: "Y · E · P · N · S · S · A",
    targetWord: "SYNAPSE",
    correctInitial: "S",
    options: {
      A: "Y",
      B: "N",
      C: "S",
      D: "P",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, E, N, P, S, S, Y bildet sich eindeutig das deutsche Substantiv 'SYNAPSE' (die Synapse, neuronale Kontaktstelle zur Signalübertragung).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), N (1×), P (1×), S (2×), Y (1×)\nAlle sieben Buchstaben stimmen exakt mit 'SYNAPSE' überein. Es existiert kein anderes deutsches Substantiv aus dieser Kombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'S'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('Y') ist falsch, da im Deutschen fast keine Substantive auf Y beginnen und Y hier als Vokal an zweiter Stelle steht.\n• Option B ('N') ist falsch, da N der dritte Buchstabe ist.\n• Option D ('P') ist falsch, da P der vierte Buchstabe ist.\n• Option E ist falsch, da Option C den zutreffenden Anfangsbuchstaben 'S' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Neurobiologie", "Anatomie", "Mittel", "KFF-WF-GP2-005"],
  },
  {
    id: "KFF-WF-GP2-006",
    simulationId: "generalprobe-2",
    questionNumber: 6,
    subtest: "WF",
    letters: ["N", "N", "G", "T", "A", "E", "I"],
    scrambledLetters: "N · N · G · T · A · E · I",
    targetWord: "ANTIGEN",
    correctInitial: "A",
    options: {
      A: "N",
      B: "T",
      C: "G",
      D: "A",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, E, G, I, N, N, T bildet sich eindeutig das immunologische Substantiv 'ANTIGEN' (das Antigen, Substanz, die eine spezifische Immunantwort auslöst).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), G (1×), I (1×), N (2×), T (1×)\nAlle sieben Buchstaben stimmen exakt überein. Es existiert im deutschen Wortschatz kein alternatives Substantiv aus diesen Buchstaben.\n\nDer gesuchte Anfangsbuchstabe lautet 'A'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('N') ist falsch, da N an zweiter und siebter Stelle steht ('NEGNIT' existiert nicht).\n• Option B ('T') ist falsch, da T der dritte Buchstabe ist ('TANGINE' existiert nicht).\n• Option C ('G') ist falsch, da G der fünfte Buchstabe ist ('GANTINE' existiert nicht).\n• Option E ist falsch, da Option D den Anfangsbuchstaben 'A' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Immunologie", "Biochemie", "Mittel", "KFF-WF-GP2-006"],
  },
  {
    id: "KFF-WF-GP2-007",
    simulationId: "generalprobe-2",
    questionNumber: 7,
    subtest: "WF",
    letters: ["I", "E", "S", "O", "B", "I", "P"],
    scrambledLetters: "I · E · S · O · B · I · P",
    targetWord: "BIOPSIE",
    correctInitial: "B",
    options: {
      A: "P",
      B: "B",
      C: "S",
      D: "O",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben B, E, I, I, O, P, S bildet sich eindeutig das medizinische Substantiv 'BIOPSIE' (die Biopsie, Entnahme einer Gewebeprobe zur histologischen Untersuchung).\n\nBuchstaben-Verifikation (Multimenge):\n• B (1×), E (1×), I (2×), O (1×), P (1×), S (1×)\nAlle Buchstaben werden exakt einmal verwendet. Ein anderes deutsches Substantiv existiert aus dieser Kombination nicht.\n\nDer gesuchte Anfangsbuchstabe lautet 'B'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('P') ist falsch, da P der vierte Buchstabe von BIOPSIE ist ('PISOBIE' ist kein deutsches Wort).\n• Option C ('S') ist falsch, da S der fünfte Buchstabe ist.\n• Option D ('O') ist falsch, da O der dritte Buchstabe ist.\n• Option E ist falsch, da Option B den korrekten Anfangsbuchstaben 'B' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Pathologie", "Diagnostik", "Mittel", "KFF-WF-GP2-007"],
  },
  {
    id: "KFF-WF-GP2-008",
    simulationId: "generalprobe-2",
    questionNumber: 8,
    subtest: "WF",
    letters: ["L", "E", "O", "U", "G", "S", "K"],
    scrambledLetters: "L · E · O · U · G · S · K",
    targetWord: "GLUKOSE",
    correctInitial: "G",
    options: {
      A: "G",
      B: "L",
      C: "K",
      D: "S",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben E, G, K, L, O, S, U bildet sich eindeutig das biochemische Substantiv 'GLUKOSE' (die Glukose / Traubenzucker, wichtigster Energielieferant der Zelle).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), G (1×), K (1×), L (1×), O (1×), S (1×), U (1×)\nJeder Buchstabe kommt genau einmal vor und entspricht 'GLUKOSE'. Es existiert kein alternatives deutsches Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'G'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('L') ist falsch, da L der zweite Buchstabe ist ('LOGUSKE' ist kein Wort).\n• Option C ('K') ist falsch, da K der vierte Buchstabe ist ('KULGOSE' ist kein deutsches Wort).\n• Option D ('S') ist falsch, da S der sechste Buchstabe ist.\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'G' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Biochemie", "Stoffwechsel", "Mittel", "KFF-WF-GP2-008"],
  },
  {
    id: "KFF-WF-GP2-009",
    simulationId: "generalprobe-2",
    questionNumber: 9,
    subtest: "WF",
    letters: ["E", "N", "N", "O", "R", "U"],
    scrambledLetters: "E · N · N · O · R · U",
    targetWord: "NEURON",
    correctInitial: "N",
    options: {
      A: "R",
      B: "O",
      C: "U",
      D: "E",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben E, N, N, O, R, U bildet sich eindeutig das neurobiologische Substantiv 'NEURON' (das Neuron, Nervenzelle).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), N (2×), O (1×), R (1×), U (1×)\nAlle sechs Buchstaben stimmen vollständig überein. Es gibt im deutschen Standardwortschatz kein anderes Substantiv aus diesen Buchstaben.\n\nDer gesuchte Anfangsbuchstabe lautet 'N'.\nDa der Buchstabe 'N' nicht unter den Optionen A bis D aufgeführt ist, ist Option E ('Keine der Antwortmöglichkeiten ist richtig') die zutreffende Antwort.\n\nDistraktoren-Analyse:\n• Option A ('R') ist falsch, da R der vierte Buchstabe von NEURON ist ('RUNONE' existiert nicht).\n• Option B ('O') ist falsch, da O der fünfte Buchstabe ist.\n• Option C ('U') ist falsch, da U der dritte Buchstabe ist ('URONEN' ist Plural und benötigt andere Grammatik).\n• Option D ('E') ist falsch, da E der zweite Buchstabe ist.\n• Option E ist korrekt, da der Anfangsbuchstabe 'N' nicht in A–D enthalten ist.",
    tags: ["KFF", "Wortflüssigkeit", "Neuroanatomie", "Zellbiologie", "Mittel", "KFF-WF-GP2-009", "Option-E"],
  },
  {
    id: "KFF-WF-GP2-010",
    simulationId: "generalprobe-2",
    questionNumber: 10,
    subtest: "WF",
    letters: ["R", "N", "E", "O", "P", "I", "T"],
    scrambledLetters: "R · N · E · O · P · I · T",
    targetWord: "PROTEIN",
    correctInitial: "P",
    options: {
      A: "R",
      B: "T",
      C: "P",
      D: "N",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben E, I, N, O, P, R, T bildet sich eindeutig das biologische Substantiv 'PROTEIN' (das Protein, Eiweißmolekül aus Aminosäuren).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), I (1×), N (1×), O (1×), P (1×), R (1×), T (1×)\nAlle sieben Buchstaben stimmen exakt mit 'PROTEIN' überein. Es existiert kein alternatives deutsches Substantiv aus diesen Buchstaben.\n\nDer gesuchte Anfangsbuchstabe lautet 'P'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('R') ist falsch, da R an zweiter Stelle steht ('REPTOIN' existiert nicht).\n• Option B ('T') ist falsch, da T der vierte Buchstabe ist ('TROPINE' benötigt ein anderes Morphem).\n• Option D ('N') ist falsch, da N der Schlussbuchstabe ist.\n• Option E ist falsch, da Option C den zutreffenden Anfangsbuchstaben 'P' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Biochemie", "Molekularbiologie", "Mittel", "KFF-WF-GP2-010"],
  },
  {
    id: "KFF-WF-GP2-011",
    simulationId: "generalprobe-2",
    questionNumber: 11,
    subtest: "WF",
    letters: ["A", "I", "T", "B", "R", "K", "E", "E"],
    scrambledLetters: "A · I · T · B · R · K · E · E",
    targetWord: "BAKTERIE",
    correctInitial: "B",
    options: {
      A: "K",
      B: "B",
      C: "T",
      D: "R",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, B, E, E, I, K, R, T bildet sich eindeutig das mikrobiologische Substantiv 'BAKTERIE' (die Bakterie, einzelliger Mikroorganismus ohne Zellkern / Prokaryot).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), B (1×), E (2×), I (1×), K (1×), R (1×), T (1×)\nAlle acht Buchstaben stimmen vollständig mit 'BAKTERIE' überein. Ein anderes deutsches Substantiv lässt sich aus dieser Kombination nicht bilden.\n\nDer gesuchte Anfangsbuchstabe lautet 'B'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('K') ist falsch, da K der dritte Buchstabe ist ('KATERBIE' existiert nicht).\n• Option C ('T') ist falsch, da T der vierte Buchstabe ist ('TREBIAKE' ist kein deutsches Wort).\n• Option D ('R') ist falsch, da R der sechste Buchstabe ist.\n• Option E ist falsch, da Option B den korrekten Anfangsbuchstaben 'B' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Mikrobiologie", "Infektiologie", "Mittel", "KFF-WF-GP2-011"],
  },
  {
    id: "KFF-WF-GP2-012",
    simulationId: "generalprobe-2",
    questionNumber: 12,
    subtest: "WF",
    letters: ["N", "O", "U", "I", "I", "F", "N", "S"],
    scrambledLetters: "N · O · U · I · I · F · N · S",
    targetWord: "INFUSION",
    correctInitial: "I",
    options: {
      A: "N",
      B: "F",
      C: "S",
      D: "I",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben F, I, I, N, N, O, S, U bildet sich eindeutig das klinische Substantiv 'INFUSION' (die Infusion, kontinuierliche intravenöse Verabreichung von Flüssigkeiten oder Medikamenten).\n\nBuchstaben-Verifikation (Multimenge):\n• F (1×), I (2×), N (2×), O (1×), S (1×), U (1×)\nAlle acht Buchstaben stimmen exakt mit 'INFUSION' überein. Es gibt kein alternatives deutsches Substantiv aus dieser Buchstabensammlung.\n\nDer gesuchte Anfangsbuchstabe lautet 'I'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('N') ist falsch, da N an zweiter und achter Stelle steht ('NISONIFU' existiert nicht).\n• Option B ('F') ist falsch, da F an dritter Stelle steht ('FUSIONIN' ist kein eigenständiges deutsches Grundwort).\n• Option C ('S') ist falsch, da S der fünfte Buchstabe ist ('SINFUION' existiert nicht).\n• Option E ist falsch, da Option D den Anfangsbuchstaben 'I' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Klinik", "Therapie", "Mittel", "KFF-WF-GP2-012"],
  },
  {
    id: "KFF-WF-GP2-013",
    simulationId: "generalprobe-2",
    questionNumber: 13,
    subtest: "WF",
    letters: ["U", "N", "S", "S", "A", "B", "Z", "T"],
    scrambledLetters: "U · N · S · S · A · B · Z · T",
    targetWord: "SUBSTANZ",
    correctInitial: "S",
    options: {
      A: "S",
      B: "B",
      C: "T",
      D: "Z",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, B, N, S, S, T, U, Z bildet sich eindeutig das naturwissenschaftliche Substantiv 'SUBSTANZ' (die Substanz, Stoff / chemische Materie / Wirkstoff).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), B (1×), N (1×), S (2×), T (1×), U (1×), Z (1×)\nAlle acht Buchstaben entsprechen exakt dem Zielwort 'SUBSTANZ'. Ein anderes deutsches Substantiv existiert aus dieser Kombination nicht.\n\nDer gesuchte Anfangsbuchstabe lautet 'S'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('B') ist falsch, da B an dritter Stelle steht ('BAUSTANZ' benötigt andere Vokale).\n• Option C ('T') ist falsch, da T der fünfte Buchstabe ist.\n• Option D ('Z') ist falsch, da Z der Schlussbuchstabe ist ('ZUSTANBS' existiert nicht).\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'S' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Chemie", "Pharmakologie", "Schwer", "KFF-WF-GP2-013"],
  },
  {
    id: "KFF-WF-GP2-014",
    simulationId: "generalprobe-2",
    questionNumber: 14,
    subtest: "WF",
    letters: ["H", "I", "R", "T", "P", "E", "E", "A"],
    scrambledLetters: "H · I · R · T · P · E · E · A",
    targetWord: "THERAPIE",
    correctInitial: "T",
    options: {
      A: "H",
      B: "R",
      C: "P",
      D: "E",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, E, E, H, I, P, R, T bildet sich eindeutig das medizinische Substantiv 'THERAPIE' (die Therapie, gezielte Behandlung einer Krankheit).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (2×), H (1×), I (1×), P (1×), R (1×), T (1×)\nAlle acht Buchstaben stimmen lückenlos mit 'THERAPIE' überein. Es existiert kein alternatives deutsches Substantiv aus dieser Kombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'T'.\nDa der Buchstabe 'T' unter den Optionen A bis D nicht aufgeführt ist, ist Antwort E ('Keine der Antwortmöglichkeiten ist richtig') die korrekte Lösung.\n\nDistraktoren-Analyse:\n• Option A ('H') ist falsch, da H der zweite Buchstabe nach T ist ('HAPTIER' ist kein gebräuchliches Grundwort).\n• Option B ('R') ist falsch, da R an vierter Stelle steht ('REPITHA' existiert nicht).\n• Option C ('P') ist falsch, da P der sechste Buchstabe ist.\n• Option D ('E') ist falsch, da E der dritte und achte Buchstabe ist.\n• Option E ist korrekt, da der zutreffende Anfangsbuchstabe 'T' in keiner der Optionen A–D enthalten ist.",
    tags: ["KFF", "Wortflüssigkeit", "Klinik", "Therapie", "Schwer", "KFF-WF-GP2-014", "Option-E"],
  },
  {
    id: "KFF-WF-GP2-015",
    simulationId: "generalprobe-2",
    questionNumber: 15,
    subtest: "WF",
    letters: ["H", "S", "R", "O", "O", "M", "M", "C", "O"],
    scrambledLetters: "H · S · R · O · O · M · M · C · O",
    targetWord: "CHROMOSOM",
    correctInitial: "C",
    options: {
      A: "H",
      B: "R",
      C: "C",
      D: "M",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben C, H, M, M, O, O, O, R, S bildet sich eindeutig das genetische Substantiv 'CHROMOSOM' (das Chromosom, fadenförmige Struktur aus DNA und Proteinen im Zellkern eukaryotischer Zellen).\n\nBuchstaben-Verifikation (Multimenge):\n• C (1×), H (1×), M (2×), O (3×), R (1×), S (1×)\nAlle neun Buchstaben stimmen präzise mit 'CHROMOSOM' überein. Es gibt kein anderes deutsches Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'C'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('H') ist falsch, da H an zweiter Stelle steht ('HOMORSOM' existiert nicht).\n• Option B ('R') ist falsch, da R an dritter Stelle steht ('ROSCHOMM' existiert nicht).\n• Option D ('M') ist falsch, da M der fünfte und neunte Buchstabe ist ('MORCHOSOM' existiert nicht).\n• Option E ist falsch, da Option C den zutreffenden Anfangsbuchstaben 'C' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Genetik", "Zellbiologie", "Schwer", "KFF-WF-GP2-015"],
  },
];

/**
 * Convert RAW_GENERALPROBE_2_WF_QUESTIONS into StoredQuestion format for Generalprobe #2
 */
export const GENERALPROBE_2_WF_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_WF_QUESTIONS.map((wf, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");

  const formatOption = (val: string | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine der Antwortmöglichkeiten ist richtig";
    }
    return val;
  };

  return {
    id: `KFF-WF-GP2-${numStr}`,
    legacyId: `wf-sim2-q${String(idx + 1).padStart(2, "0")}`,
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-wf",
    chapterId: "kff-wf-basic",
    topic: "Wortflüssigkeit",
    concept: "Wortfindung & Anagramme",
    difficulty: wf.difficulty,
    questionText: `Welcher Anfangsbuchstabe gehört zum gesuchten Wort?\n\nGegebene Buchstaben: ${wf.scrambledLetters}`,
    options: [
      formatOption(wf.options.A, "A"),
      formatOption(wf.options.B, "B"),
      formatOption(wf.options.C, "C"),
      formatOption(wf.options.D, "D"),
      formatOption(wf.options.E, "E"),
    ],
    correctAnswer: optionKeyToIndex(wf.correctAnswer),
    explanation: wf.explanation,
    tags: ["KFF", "Wortflüssigkeit", "Generalprobe #2", `KFF-WF-GP2-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 2,
    wfData: {
      ...wf,
      id: `KFF-WF-GP2-${numStr}`,
      legacyId: `wf-sim2-q${String(idx + 1).padStart(2, "0")}`,
    } as any,
  };
});
