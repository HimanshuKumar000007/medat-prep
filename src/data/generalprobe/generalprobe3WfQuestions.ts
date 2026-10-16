/**
 * MedAT KFF — Wortflüssigkeit (WF) — Generalprobe #3
 * Exactly 15 Deterministic, Lexically Verified German Word-Anagram Questions
 * 
 * IDs: KFF-WF-GP3-001 through KFF-WF-GP3-015 (aliased to wf-sim3-q01 .. q15)
 * 
 * Specifications:
 * - Exactly 15 Questions, 20 Minutes (~80s / question)
 * - Authentic, common German standard nouns (Nominativ Singular)
 * - Varied vocabulary across medicine, natural sciences, physiology, chemistry, and scientific theory
 * - Standard German spelling using only A–Z (no Umlauts Ä, Ö, Ü, and no ß)
 * - Exact letter multiset matching: multiset(letters) === multiset(scrambledLetters) === multiset(targetWord)
 * - Mathematically & lexically verified: no ambiguous anagram collisions with conflicting initial letters
 * - Five answer choices: Options A–D (distinct uppercase candidate initials), Option E ("Keine der Antwortmöglichkeiten ist richtig")
 * - Balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - Max streak = 1 (no two consecutive questions share the same correct key)
 * - Genuine Option E cases (Questions 5, 10, 14: true initial letter completely omitted from A–D)
 * - Calibrated difficulty distribution: exactly 4 Leicht, 8 Mittel, 3 Schwer
 * - Step-by-step derivation, letter matching, and precise distractor analysis for all 15 questions
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { WfQuestionData } from "../questions/wf/types";

export const RAW_GENERALPROBE_3_WF_QUESTIONS: WfQuestionData[] = [
  {
    id: "KFF-WF-GP3-001",
    simulationId: "generalprobe-3",
    questionNumber: 1,
    subtest: "WF",
    letters: ["I", "K", "N", "L", "I", "K"],
    scrambledLetters: "I · K · N · L · I · K",
    targetWord: "KLINIK",
    correctInitial: "K",
    options: {
      A: "L",
      B: "N",
      C: "K",
      D: "I",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs gegebenen Buchstaben I, I, K, K, L, N bildet sich eindeutig das deutsche Substantiv 'KLINIK' (die Klinik, medizinisches Krankenhaus / Behandlungszentrum).\n\nBuchstaben-Verifikation (Multimenge):\n• I (2×), K (2×), L (1×), N (1×)\nAlle sechs Buchstaben werden exakt einmal verwendet. Im deutschen Standardwortschatz existiert kein anderes Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'K'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('L') ist falsch, da das gesuchte Substantiv 'KLINIK' mit 'K' beginnt. Der Buchstabe L steht an Position 2 des Zielworts, bildet jedoch nicht dessen Anfangsbuchstaben.\n• Option B ('N') ist falsch, da N an Position 4 von KLINIK steht und nicht am Wortanfang.\n• Option D ('I') ist falsch, da I ein Vokal im Wortinneren (Positionen 3 und 5) ist, nicht der Anfangsbuchstabe.\n• Option E ist falsch, da der korrekte Anfangsbuchstabe 'K' unter Option C aufgeführt ist.",
    tags: ["KFF", "Wortflüssigkeit", "Medizin", "Krankenhaus", "Leicht", "KFF-WF-GP3-001"],
  },
  {
    id: "KFF-WF-GP3-002",
    simulationId: "generalprobe-3",
    questionNumber: 2,
    subtest: "WF",
    letters: ["G", "T", "A", "M", "E", "N"],
    scrambledLetters: "G · T · A · M · E · N",
    targetWord: "MAGNET",
    correctInitial: "M",
    options: {
      A: "M",
      B: "G",
      C: "T",
      D: "N",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben A, E, G, M, N, T bildet sich eindeutig das physikalische Substantiv 'MAGNET' (der Magnet, Körper mit magnetischem Dipolfeld).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), G (1×), M (1×), N (1×), T (1×)\nJeder Buchstabe wird genau einmal eingesetzt. Eine alternative Anagrammbildung zu einem anderen gebräuchlichen deutschen Substantiv existiert nicht.\n\nDer gesuchte Anfangsbuchstabe lautet 'M'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('G') ist falsch, da das gesuchte Substantiv 'MAGNET' mit 'M' beginnt. Der Buchstabe G steht an Position 3 des Zielworts.\n• Option C ('T') ist falsch, da T den Auslaut (Position 6) von MAGNET bildet, nicht den Wortanfang.\n• Option D ('N') ist falsch, da N an Position 4 von MAGNET steht und nicht am Wortanfang.\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'M' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Physik", "Naturwissenschaft", "Leicht", "KFF-WF-GP3-002"],
  },
  {
    id: "KFF-WF-GP3-003",
    simulationId: "generalprobe-3",
    questionNumber: 3,
    subtest: "WF",
    letters: ["M", "R", "A", "S", "I", "P"],
    scrambledLetters: "M · R · A · S · I · P",
    targetWord: "PRISMA",
    correctInitial: "P",
    options: {
      A: "S",
      B: "M",
      C: "R",
      D: "P",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben A, I, M, P, R, S bildet sich eindeutig das deutsche Substantiv 'PRISMA' (das Prisma, geometrischer Körper / optisches Bauteil zur Lichtbrechung).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), I (1×), M (1×), P (1×), R (1×), S (1×)\nAlle sechs Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert kein alternatives deutsches Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'P'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('S') ist falsch, da das gesuchte Substantiv 'PRISMA' mit 'P' beginnt. Der Buchstabe S steht an Position 4 des Zielworts.\n• Option B ('M') ist falsch, da M an Position 5 von PRISMA steht und nicht am Wortanfang.\n• Option C ('R') ist falsch, da R der zweite Buchstabe von PRISMA ist.\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'P' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Optik", "Geometrie", "Leicht", "KFF-WF-GP3-003"],
  },
  {
    id: "KFF-WF-GP3-004",
    simulationId: "generalprobe-3",
    questionNumber: 4,
    subtest: "WF",
    letters: ["U", "K", "U", "M", "A", "V"],
    scrambledLetters: "U · K · U · M · A · V",
    targetWord: "VAKUUM",
    correctInitial: "V",
    options: {
      A: "K",
      B: "V",
      C: "M",
      D: "U",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben A, K, M, U, U, V bildet sich eindeutig das naturwissenschaftliche Substantiv 'VAKUUM' (das Vakuum, materiefreier Raum / Unterdruck).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), K (1×), M (1×), U (2×), V (1×)\nAlle Buchstaben werden genau einmal verwendet. Ein anderes deutsches Substantiv lässt sich aus dieser Kombination nicht bilden.\n\nDer gesuchte Anfangsbuchstabe lautet 'V'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('K') ist falsch, da das gesuchte Substantiv 'VAKUUM' mit 'V' beginnt. Der Buchstabe K steht an Position 3 des Zielworts.\n• Option C ('M') ist falsch, da M den Auslaut (Position 6) von VAKUUM bildet, nicht den Wortanfang.\n• Option D ('U') ist falsch, da U als Vokal an den Positionen 4 und 5 im Wortinneren vorkommt, nicht am Wortanfang.\n• Option E ist falsch, da Option B den korrekten Anfangsbuchstaben 'V' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Physik", "Thermodynamik", "Leicht", "KFF-WF-GP3-004"],
  },
  {
    id: "KFF-WF-GP3-005",
    simulationId: "generalprobe-3",
    questionNumber: 5,
    subtest: "WF",
    letters: ["O", "L", "H", "A", "K", "L", "O"],
    scrambledLetters: "O · L · H · A · K · L · O",
    targetWord: "ALKOHOL",
    correctInitial: "A",
    options: {
      A: "K",
      B: "L",
      C: "H",
      D: "O",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, H, K, L, L, O, O bildet sich eindeutig das chemisch-medizinische Substantiv 'ALKOHOL' (der Alkohol, Stoffklasse organischer Verbindungen mit Hydroxygruppe).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), H (1×), K (1×), L (2×), O (2×)\nAlle sieben Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert kein anderes sinnvolles deutsches Substantiv aus dieser Kombination.\n\nDer tatsächliche Anfangsbuchstabe lautet 'A'.\nDa der Buchstabe 'A' unter den Optionen A bis D (K, L, H, O) nicht aufgeführt ist, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) zwingend korrekt.\n\nDistraktoren-Analyse:\n• Option A ('K') ist falsch, da das gesuchte Substantiv 'ALKOHOL' mit 'A' beginnt. Der Buchstabe K steht an Position 3 des Zielworts.\n• Option B ('L') ist falsch, da L an den Positionen 2 und 7 (Auslaut) von ALKOHOL steht, nicht am Wortanfang.\n• Option C ('H') ist falsch, da H an Position 5 von ALKOHOL steht, nicht am Wortanfang.\n• Option D ('O') ist falsch, da O an den Positionen 4 und 6 von ALKOHOL steht, nicht am Wortanfang.\n• Option E ist korrekt, da das rekonstruierte Substantiv 'ALKOHOL' mit 'A' beginnt und dieser Buchstabe unter den Antwortmöglichkeiten A–D nicht vertreten ist.",
    tags: ["KFF", "Wortflüssigkeit", "Chemie", "Medizin", "Mittel", "KFF-WF-GP3-005"],
  },
  {
    id: "KFF-WF-GP3-006",
    simulationId: "generalprobe-3",
    questionNumber: 6,
    subtest: "WF",
    letters: ["Y", "L", "E", "S", "I", "A", "D"],
    scrambledLetters: "Y · L · E · S · I · A · D",
    targetWord: "DIALYSE",
    correctInitial: "D",
    options: {
      A: "L",
      B: "D",
      C: "S",
      D: "Y",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, D, E, I, L, S, Y bildet sich eindeutig das medizinische Fachsubstantiv 'DIALYSE' (die Dialyse, Nierenersatzverfahren zur Blutreinigung).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), D (1×), E (1×), I (1×), L (1×), S (1×), Y (1×)\nAlle sieben Buchstaben stimmen exakt mit dem Zielwort überein. Ein anderes deutsches Substantiv existiert aus dieser Kombination nicht.\n\nDer gesuchte Anfangsbuchstabe lautet 'D'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('L') ist falsch, da das gesuchte Substantiv 'DIALYSE' mit 'D' beginnt. Der Buchstabe L steht an Position 4 des Zielworts.\n• Option C ('S') ist falsch, da S an Position 6 von DIALYSE steht, nicht am Wortanfang.\n• Option D ('Y') ist falsch, da Y an Position 5 von DIALYSE steht, nicht am Wortanfang.\n• Option E ist falsch, da Option B den zutreffenden Anfangsbuchstaben 'D' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Nephrologie", "Medizin", "Mittel", "KFF-WF-GP3-006"],
  },
  {
    id: "KFF-WF-GP3-007",
    simulationId: "generalprobe-3",
    questionNumber: 7,
    subtest: "WF",
    letters: ["L", "G", "A", "O", "N", "L", "E", "K"],
    scrambledLetters: "L · G · A · O · N · L · E · K",
    targetWord: "KOLLAGEN",
    correctInitial: "K",
    options: {
      A: "L",
      B: "G",
      C: "N",
      D: "K",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, E, G, K, L, L, N, O bildet sich eindeutig das biochemische Substantiv 'KOLLAGEN' (das Kollagen, wichtigstes Strukturprotein des Bindegewebes).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), G (1×), K (1×), L (2×), N (1×), O (1×)\nAlle acht Buchstaben stimmen exakt mit dem Zielwort überein. Es gibt kein alternatives deutsches Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'K'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('L') ist falsch, da das gesuchte Substantiv 'KOLLAGEN' mit 'K' beginnt. Der Buchstabe L steht an den Positionen 3 und 4 des Zielworts.\n• Option B ('G') ist falsch, da G an Position 6 von KOLLAGEN steht, nicht am Wortanfang.\n• Option C ('N') ist falsch, da N den Auslaut (Position 8) von KOLLAGEN bildet, nicht den Wortanfang.\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'K' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Biochemie", "Anatomie", "Mittel", "KFF-WF-GP3-007"],
  },
  {
    id: "KFF-WF-GP3-008",
    simulationId: "generalprobe-3",
    questionNumber: 8,
    subtest: "WF",
    letters: ["S", "N", "O", "M", "I", "L", "U", "E"],
    scrambledLetters: "S · N · O · M · I · L · U · E",
    targetWord: "EMULSION",
    correctInitial: "E",
    options: {
      A: "M",
      B: "U",
      C: "E",
      D: "S",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben E, I, L, M, N, O, S, U bildet sich eindeutig das pharmazeutisch-chemische Substantiv 'EMULSION' (die Emulsion, fein verteiltes Gemisch zweier nicht mischbarer Flüssigkeiten).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), I (1×), L (1×), M (1×), N (1×), O (1×), S (1×), U (1×)\nJeder Buchstabe wird genau einmal eingesetzt. Eine andere sinnvolle Permutation zu einem deutschen Substantiv existiert nicht.\n\nDer gesuchte Anfangsbuchstabe lautet 'E'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('M') ist falsch, da das gesuchte Substantiv 'EMULSION' mit 'E' beginnt. Der Buchstabe M steht an Position 2 des Zielworts.\n• Option B ('U') ist falsch, da U an Position 3 von EMULSION steht, nicht am Wortanfang.\n• Option D ('S') ist falsch, da S an Position 5 von EMULSION steht, nicht am Wortanfang.\n• Option E ist falsch, da Option C den korrekten Anfangsbuchstaben 'E' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Pharmazie", "Chemie", "Mittel", "KFF-WF-GP3-008"],
  },
  {
    id: "KFF-WF-GP3-009",
    simulationId: "generalprobe-3",
    questionNumber: 9,
    subtest: "WF",
    letters: ["R", "E", "S", "O", "N", "E", "K"],
    scrambledLetters: "R · E · S · O · N · E · K",
    targetWord: "NEKROSE",
    correctInitial: "N",
    options: {
      A: "N",
      B: "K",
      C: "R",
      D: "S",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben E, E, K, N, O, R, S bildet sich eindeutig das pathologische Fachsubstantiv 'NEKROSE' (die Nekrose, lokaler Gewebsuntergang in einem lebenden Organismus).\n\nBuchstaben-Verifikation (Multimenge):\n• E (2×), K (1×), N (1×), O (1×), R (1×), S (1×)\nAlle sieben Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert kein alternatives deutsches Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'N'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('K') ist falsch, da das gesuchte Substantiv 'NEKROSE' mit 'N' beginnt. Der Buchstabe K steht an Position 3 des Zielworts.\n• Option C ('R') ist falsch, da R an Position 4 von NEKROSE steht, nicht am Wortanfang.\n• Option D ('S') ist falsch, da S an Position 6 von NEKROSE steht, nicht am Wortanfang.\n• Option E ist falsch, da Option A den zutreffenden Anfangsbuchstaben 'N' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Pathologie", "Medizin", "Mittel", "KFF-WF-GP3-009"],
  },
  {
    id: "KFF-WF-GP3-010",
    simulationId: "generalprobe-3",
    questionNumber: 10,
    subtest: "WF",
    letters: ["R", "M", "O", "N", "Y", "D", "S"],
    scrambledLetters: "R · M · O · N · Y · D · S",
    targetWord: "SYNDROM",
    correctInitial: "S",
    options: {
      A: "D",
      B: "M",
      C: "R",
      D: "Y",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben D, M, N, O, R, S, Y bildet sich eindeutig das medizinische Fachsubstantiv 'SYNDROM' (das Syndrom, charakteristischer Symptomenkomplex bei einer Erkrankung).\n\nBuchstaben-Verifikation (Multimenge):\n• D (1×), M (1×), N (1×), O (1×), R (1×), S (1×), Y (1×)\nAlle Buchstaben werden genau einmal verwendet. Ein anderes deutsches Substantiv lässt sich aus dieser Kombination nicht bilden.\n\nDer tatsächliche Anfangsbuchstabe lautet 'S'.\nDa der Buchstabe 'S' unter den Optionen A bis D (D, M, R, Y) nicht vorhanden ist, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) zwingend korrekt.\n\nDistraktoren-Analyse:\n• Option A ('D') ist falsch, da das gesuchte Substantiv 'SYNDROM' mit 'S' beginnt. Der Buchstabe D steht an Position 4 des Zielworts.\n• Option B ('M') ist falsch, da M den Auslaut (Position 7) von SYNDROM bildet, nicht den Wortanfang.\n• Option C ('R') ist falsch, da R an Position 5 von SYNDROM steht, nicht am Wortanfang.\n• Option D ('Y') ist falsch, da Y an Position 2 von SYNDROM steht, nicht am Wortanfang.\n• Option E ist korrekt, da das rekonstruierte Substantiv 'SYNDROM' mit 'S' beginnt und dieser Buchstabe unter den Optionen A–D nicht zur Auswahl steht.",
    tags: ["KFF", "Wortflüssigkeit", "Klinik", "Diagnostik", "Mittel", "KFF-WF-GP3-010"],
  },
  {
    id: "KFF-WF-GP3-011",
    simulationId: "generalprobe-3",
    questionNumber: 11,
    subtest: "WF",
    letters: ["M", "G", "T", "E", "N", "I", "A", "L"],
    scrambledLetters: "M · G · T · E · N · I · A · L",
    targetWord: "LIGAMENT",
    correctInitial: "L",
    options: {
      A: "G",
      B: "M",
      C: "T",
      D: "L",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, E, G, I, L, M, N, T bildet sich eindeutig das anatomische Substantiv 'LIGAMENT' (das Ligament, bindegewebiges Band zur Gelenkstabilisierung).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), G (1×), I (1×), L (1×), M (1×), N (1×), T (1×)\nAlle acht Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert im deutschen Wortschatz kein anderes Substantiv aus dieser Kombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'L'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('G') ist falsch, da das gesuchte Substantiv 'LIGAMENT' mit 'L' beginnt. Der Buchstabe G steht an Position 3 des Zielworts.\n• Option B ('M') ist falsch, da M an Position 5 von LIGAMENT steht, nicht am Wortanfang.\n• Option C ('T') ist falsch, da T den Auslaut (Position 8) von LIGAMENT bildet, nicht den Wortanfang.\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'L' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "Orthopädie", "Mittel", "KFF-WF-GP3-011"],
  },
  {
    id: "KFF-WF-GP3-012",
    simulationId: "generalprobe-3",
    questionNumber: 12,
    subtest: "WF",
    letters: ["Z", "E", "K", "A", "I", "N", "V"],
    scrambledLetters: "Z · E · K · A · I · N · V",
    targetWord: "VAKZINE",
    correctInitial: "V",
    options: {
      A: "K",
      B: "Z",
      C: "V",
      D: "N",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, E, I, K, N, V, Z bildet sich eindeutig das immunologische Fachsubstantiv 'VAKZINE' (die Vakzine, Impfstoff zur Induktion spezifischer Immunität).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), I (1×), K (1×), N (1×), V (1×), Z (1×)\nAlle sieben Buchstaben werden genau einmal verwendet. Ein anderes deutsches Substantiv lässt sich aus dieser Kombination nicht konstruieren.\n\nDer gesuchte Anfangsbuchstabe lautet 'V'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('K') ist falsch, da das gesuchte Substantiv 'VAKZINE' mit 'V' beginnt. Der Buchstabe K steht an Position 3 des Zielworts.\n• Option B ('Z') ist falsch, da Z an Position 4 von VAKZINE steht, nicht am Wortanfang.\n• Option D ('N') ist falsch, da N an Position 6 von VAKZINE steht, nicht am Wortanfang.\n• Option E ist falsch, da Option C den korrekten Anfangsbuchstaben 'V' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Immunologie", "Infektiologie", "Mittel", "KFF-WF-GP3-012"],
  },
  {
    id: "KFF-WF-GP3-013",
    simulationId: "generalprobe-3",
    questionNumber: 13,
    subtest: "WF",
    letters: ["T", "H", "I", "K", "O", "E", "I", "B"],
    scrambledLetters: "T · H · I · K · O · E · I · B",
    targetWord: "BIOETHIK",
    correctInitial: "B",
    options: {
      A: "T",
      B: "B",
      C: "K",
      D: "H",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben B, E, H, I, I, K, O, T bildet sich eindeutig das interdisziplinäre Substantiv 'BIOETHIK' (die Bioethik, ethische Reflexion medizinischer und biologischer Forschung und Praxis).\n\nBuchstaben-Verifikation (Multimenge):\n• B (1×), E (1×), H (1×), I (2×), K (1×), O (1×), T (1×)\nAlle acht Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert kein alternatives deutsches Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'B'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('T') ist falsch, da das gesuchte Substantiv 'BIOETHIK' mit 'B' beginnt. Der Buchstabe T steht an Position 5 des Zielworts.\n• Option C ('K') ist falsch, da K den Auslaut (Position 8) von BIOETHIK bildet, nicht den Wortanfang.\n• Option D ('H') ist falsch, da H an Position 6 von BIOETHIK steht, nicht am Wortanfang.\n• Option E ist falsch, da Option B den zutreffenden Anfangsbuchstaben 'B' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Medizinethik", "Philosophie", "Schwer", "KFF-WF-GP3-013"],
  },
  {
    id: "KFF-WF-GP3-014",
    simulationId: "generalprobe-3",
    questionNumber: 14,
    subtest: "WF",
    letters: ["P", "T", "E", "S", "Y", "E", "O", "H", "H"],
    scrambledLetters: "P · T · E · S · Y · E · O · H · H",
    targetWord: "HYPOTHESE",
    correctInitial: "H",
    options: {
      A: "T",
      B: "P",
      C: "S",
      D: "Y",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben E, E, H, H, O, P, S, T, Y bildet sich eindeutig das wissenschaftstheoretische Substantiv 'HYPOTHESE' (die Hypothese, begründete Annahme zur Erklärung naturwissenschaftlicher Phänomene).\n\nBuchstaben-Verifikation (Multimenge):\n• E (2×), H (2×), O (1×), P (1×), S (1×), T (1×), Y (1×)\nAlle neun Buchstaben werden genau einmal verwendet. Ein anderes deutsches Substantiv existiert aus dieser Kombination nicht.\n\nDer tatsächliche Anfangsbuchstabe lautet 'H'.\nDa der Buchstabe 'H' unter den Optionen A bis D (T, P, S, Y) nicht angeboten wird, ist Antwort E (Keine der Antwortmöglichkeiten ist richtig) zwingend korrekt.\n\nDistraktoren-Analyse:\n• Option A ('T') ist falsch, da das gesuchte Substantiv 'HYPOTHESE' mit 'H' beginnt. Der Buchstabe T steht an Position 5 des Zielworts.\n• Option B ('P') ist falsch, da P an Position 3 von HYPOTHESE steht, nicht am Wortanfang.\n• Option C ('S') ist falsch, da S an Position 8 von HYPOTHESE steht, nicht am Wortanfang.\n• Option D ('Y') ist falsch, da Y an Position 2 von HYPOTHESE steht, nicht am Wortanfang.\n• Option E ist korrekt, da das rekonstruierte Substantiv 'HYPOTHESE' mit 'H' beginnt und dieser Buchstabe unter den Optionen A–D nicht angeboten wird.",
    tags: ["KFF", "Wortflüssigkeit", "Wissenschaft", "Epistemologie", "Schwer", "KFF-WF-GP3-014"],
  },
  {
    id: "KFF-WF-GP3-015",
    simulationId: "generalprobe-3",
    questionNumber: 15,
    subtest: "WF",
    letters: ["O", "N", "E", "T", "M", "I", "O", "U", "A"],
    scrambledLetters: "O · N · E · T · M · I · O · U · A",
    targetWord: "AUTONOMIE",
    correctInitial: "A",
    options: {
      A: "A",
      B: "T",
      C: "M",
      D: "N",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben A, E, I, M, N, O, O, T, U bildet sich eindeutig das ethisch-medizinische Substantiv 'AUTONOMIE' (die Autonomie, Selbstbestimmung des Patienten / Unabhängigkeit).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), I (1×), M (1×), N (1×), O (2×), T (1×), U (1×)\nAlle neun Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert kein alternatives deutsches Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'A'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('T') ist falsch, da das gesuchte Substantiv 'AUTONOMIE' mit 'A' beginnt. Der Buchstabe T steht an Position 3 des Zielworts.\n• Option C ('M') ist falsch, da M an Position 7 von AUTONOMIE steht, nicht am Wortanfang.\n• Option D ('N') ist falsch, da N an Position 5 von AUTONOMIE steht, nicht am Wortanfang.\n• Option E ist falsch, da Option A den zutreffenden Anfangsbuchstaben 'A' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Medizinethik", "Recht", "Schwer", "KFF-WF-GP3-015"],
  },
];

/**
 * Convert RAW_GENERALPROBE_3_WF_QUESTIONS into StoredQuestion format for Generalprobe #3
 */
export const GENERALPROBE_3_WF_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_WF_QUESTIONS.map((wf, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");

  const formatOption = (val: string | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine der Antwortmöglichkeiten ist richtig";
    }
    return val;
  };

  return {
    id: `KFF-WF-GP3-${numStr}`,
    legacyId: `wf-sim3-q${String(idx + 1).padStart(2, "0")}`,
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
    tags: ["KFF", "Wortflüssigkeit", "Generalprobe #3", `KFF-WF-GP3-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 3,
    wfData: {
      ...wf,
      id: `KFF-WF-GP3-${numStr}`,
      legacyId: `wf-sim3-q${String(idx + 1).padStart(2, "0")}`,
    } as any,
  };
});
