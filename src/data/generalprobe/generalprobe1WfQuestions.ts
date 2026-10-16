/**
 * MedAT KFF — Wortflüssigkeit (WF) — Generalprobe #1
 * Exactly 15 Deterministic, Lexically Verified German Word-Anagram Questions
 * 
 * IDs: KFF-WF-001 through KFF-WF-015 (aliased to wf-sim1-q01 .. q15)
 * 
 * Specifications:
 * - Exactly 15 Questions, 20 Minutes (~80s / question)
 * - Authentic, common German standard nouns (Nominativ Singular)
 * - Varied vocabulary across everyday, academic, scientific, natural, and cultural domains
 * - Standard German spelling using only A–Z (no Umlauts Ä, Ö, Ü, and no ß)
 * - Exact letter multiset matching: multiset(letters) === multiset(scrambledLetters) === multiset(targetWord)
 * - Mathematically & lexically verified: no ambiguous anagram collisions with conflicting initial letters
 * - Five answer choices: Options A–D (distinct uppercase candidate initials), Option E ("Keine der Antwortmöglichkeiten ist richtig")
 * - Perfectly balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E (non-repeating sequence)
 * - Genuine Option E cases (Questions 4, 9, 14: true initial letter completely omitted from A–D)
 * - Difficulty distribution: exactly 4 Leicht, 7 Mittel, 4 Schwer
 * - Step-by-step derivation, letter matching, and exhaustive distractor analysis for all 15 questions
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { WfQuestionData } from "../questions/wf/types";

export const RAW_GENERALPROBE_1_WF_QUESTIONS: WfQuestionData[] = [
  {
    id: "KFF-WF-001",
    simulationId: "generalprobe-1",
    questionNumber: 1,
    subtest: "WF",
    letters: ["L", "K", "A", "O", "N", "B"],
    scrambledLetters: "L · K · A · O · N · B",
    targetWord: "BALKON",
    correctInitial: "B",
    options: {
      A: "K",
      B: "B",
      C: "L",
      D: "N",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs gegebenen Buchstaben A, B, K, L, N, O bildet sich eindeutig das deutsche Substantiv 'BALKON' (der Balkon, Nominativ Singular).\n\nBuchstaben-Verifikation (Multimenge):\n• B (1×), A (1×), L (1×), K (1×), O (1×), N (1×)\nAlle sechs Buchstaben werden exakt einmal verwendet. Es existiert im deutschen Standardwortschatz kein anderes gebräuchliches Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'B'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('K') ist falsch, da der Buchstabe K zwar im Wort enthalten ist, das Wort aber nicht mit K beginnt ('KOBALT' benötigt ein T; 'KABLO' ist kein deutsches Wort).\n• Option C ('L') ist falsch, da L der dritte Buchstabe von BALKON ist und kein deutsches Substantiv wie 'LOKAN' existiert.\n• Option D ('N') ist falsch, da N der Endbuchstabe ist.\n• Option E ist falsch, da der richtige Anfangsbuchstabe 'B' unter Option B aufgeführt ist.",
    tags: ["KFF", "Wortflüssigkeit", "Architektur", "Alltag", "Leicht", "KFF-WF-001"],
  },
  {
    id: "KFF-WF-002",
    simulationId: "generalprobe-1",
    questionNumber: 2,
    subtest: "WF",
    letters: ["N", "A", "S", "A", "N", "A"],
    scrambledLetters: "N · A · S · A · N · A",
    targetWord: "ANANAS",
    correctInitial: "A",
    options: {
      A: "A",
      B: "S",
      C: "N",
      D: "M",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs gegebenen Buchstaben A, A, A, N, N, S bildet sich eindeutig das deutsche Substantiv 'ANANAS' (die Ananas, tropische Nutzpflanze/Frucht).\n\nBuchstaben-Verifikation (Multimenge):\n• A (3×), N (2×), S (1×)\nAlle Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert kein alternatives deutsches Substantiv aus diesen Buchstaben.\n\nDer gesuchte Anfangsbuchstabe lautet 'A'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('S') ist falsch, da 'SANANA' kein deutsches Wort ist und S lediglich der Auslaut von ANANAS ist.\n• Option C ('N') ist falsch, da N im Wortinneren vorkommt, aber kein deutsches Wort 'NASANA' existiert.\n• Option D ('M') ist falsch, da der Buchstabe M in der Buchstabensammlung gar nicht vorkommt.\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'A' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Botanik", "Natur", "Leicht", "KFF-WF-002"],
  },
  {
    id: "KFF-WF-003",
    simulationId: "generalprobe-1",
    questionNumber: 3,
    subtest: "WF",
    letters: ["T", "O", "R", "K", "O", "D"],
    scrambledLetters: "T · O · R · K · O · D",
    targetWord: "DOKTOR",
    correctInitial: "D",
    options: {
      A: "R",
      B: "K",
      C: "T",
      D: "D",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben D, K, O, O, R, T bildet sich eindeutig das deutsche Substantiv 'DOKTOR' (der Doktor, akademischer Grad / Arztbezeichnung).\n\nBuchstaben-Verifikation (Multimenge):\n• D (1×), O (2×), K (1×), T (1×), R (1×)\nJeder Buchstabe wird genau einmal eingesetzt. Eine andere sinnvolle Permutation zu einem deutschen Substantiv existiert nicht.\n\nDer gesuchte Anfangsbuchstabe lautet 'D'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('R') ist falsch, da R der Schlussbuchstabe ist und kein deutsches Substantiv 'ROKDOT' existiert.\n• Option B ('K') ist falsch, da K im Wortinneren steht und kein Wort wie 'KROKOD' existiert.\n• Option C ('T') ist falsch, da T der vierte Buchstabe ist und 'TORDOK' kein deutsches Wort ist.\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'D' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Akademisch", "Medizin", "Leicht", "KFF-WF-003"],
  },
  {
    id: "KFF-WF-004",
    simulationId: "generalprobe-1",
    questionNumber: 4,
    subtest: "WF",
    letters: ["T", "E", "R", "N", "S", "E", "F"],
    scrambledLetters: "T · E · R · N · S · E · F",
    targetWord: "FENSTER",
    correctInitial: "F",
    options: {
      A: "S",
      B: "T",
      C: "R",
      D: "N",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben E, E, F, N, R, S, T bildet sich eindeutig das deutsche Alltagssubstantiv 'FENSTER' (das Fenster, Gebäudeteil).\n\nBuchstaben-Verifikation (Multimenge):\n• F (1×), E (2×), N (1×), S (1×), T (1×), R (1×)\nAlle sieben Buchstaben stimmen exakt mit dem Zielwort überein. Ein alternatives deutsches Substantiv im Nominativ Singular existiert nicht ('Sternen' hat kein F; 'Festen' hat kein R; 'fernest' ist ein Adjektiv).\n\nDer gesuchte Anfangsbuchstabe lautet 'F'.\nDa der Buchstabe 'F' nicht unter den angebotenen Optionen A bis D (S, T, R, N) enthalten ist, ist Antwort E ('Keine der Antwortmöglichkeiten ist richtig') korrekt.\n\nDistraktoren-Analyse:\n• Option A ('S') ist falsch, da 'STERFEN' oder 'STREFEN' keine deutschen Substantive sind.\n• Option B ('T') ist falsch, da 'TRENSFE' kein deutsches Wort ist.\n• Option C ('R') ist falsch, da 'RENFEST' kein deutsches Substantiv ist.\n• Option D ('N') ist falsch, da kein deutsches Substantiv mit N aus diesen Buchstaben existiert.\n• Option E ist korrekt, da der tatsächliche Anfangsbuchstabe 'F' unter A–D fehlt.",
    tags: ["KFF", "Wortflüssigkeit", "Architektur", "Alltag", "Leicht", "Option-E", "KFF-WF-004"],
  },
  {
    id: "KFF-WF-005",
    simulationId: "generalprobe-1",
    questionNumber: 5,
    subtest: "WF",
    letters: ["M", "P", "O", "T", "U", "R", "E", "C"],
    scrambledLetters: "M · P · O · T · U · R · E · C",
    targetWord: "COMPUTER",
    correctInitial: "C",
    options: {
      A: "P",
      B: "T",
      C: "C",
      D: "M",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben C, E, M, O, P, R, T, U bildet sich eindeutig das deutsche Substantiv 'COMPUTER' (der Computer, elektronische Rechenanlage).\n\nBuchstaben-Verifikation (Multimenge):\n• C (1×), O (1×), M (1×), P (1×), U (1×), T (1×), E (1×), R (1×)\nAlle acht Buchstaben sind paarweise verschieden und decken das Zielwort exakt ab. Es gibt kein anderes deutsches Substantiv mit dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'C'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('P') ist falsch, da P der vierte Buchstabe ist und kein deutsches Substantiv wie 'POMERTUC' existiert.\n• Option B ('T') ist falsch, da T der sechste Buchstabe ist und kein deutsches Wort wie 'TROMPUCE' existiert.\n• Option D ('M') ist falsch, da M der dritte Buchstabe ist.\n• Option E ist falsch, da Option C den richtigen Anfangsbuchstaben 'C' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Technik", "Informatik", "Mittel", "KFF-WF-005"],
  },
  {
    id: "KFF-WF-006",
    simulationId: "generalprobe-1",
    questionNumber: 6,
    subtest: "WF",
    letters: ["M", "A", "T", "I", "A", "N", "D"],
    scrambledLetters: "M · A · T · I · A · N · D",
    targetWord: "DIAMANT",
    correctInitial: "D",
    options: {
      A: "M",
      B: "T",
      C: "N",
      D: "D",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, A, D, I, M, N, T bildet sich eindeutig das deutsche Substantiv 'DIAMANT' (der Diamant, kristalliner Kohlenstoff / Edelstein).\n\nBuchstaben-Verifikation (Multimenge):\n• D (1×), I (1×), A (2×), M (1×), N (1×), T (1×)\nJeder Buchstabe der Multimenge stimmt präzise mit 'DIAMANT' überein. Es existiert kein alternatives deutsches Substantiv ('MANDAT' hat nur 6 Buchstaben und kein I; 'ADAMANT' benötigt 3 A's).\n\nDer gesuchte Anfangsbuchstabe lautet 'D'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('M') ist falsch, da 'MANADIT' kein deutsches Wort ist.\n• Option B ('T') ist falsch, da T der Endbuchstabe von DIAMANT ist.\n• Option C ('N') ist falsch, da N der vorletzte Buchstabe ist.\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'D' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Mineralogie", "Geologie", "Mittel", "KFF-WF-006"],
  },
  {
    id: "KFF-WF-007",
    simulationId: "generalprobe-1",
    questionNumber: 7,
    subtest: "WF",
    letters: ["L", "O", "G", "I", "E", "O", "I", "B"],
    scrambledLetters: "L · O · G · I · E · O · I · B",
    targetWord: "BIOLOGIE",
    correctInitial: "B",
    options: {
      A: "L",
      B: "B",
      C: "G",
      D: "O",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben B, E, G, I, I, L, O, O bildet sich eindeutig das deutsche Substantiv 'BIOLOGIE' (die Biologie, Lehre vom Leben / BMS-Fach).\n\nBuchstaben-Verifikation (Multimenge):\n• B (1×), I (2×), O (2×), L (1×), G (1×), E (1×)\nAlle acht Buchstaben stimmen exakt mit 'BIOLOGIE' überein. Es gibt kein alternatives deutsches Substantiv aus dieser Buchstabenauswahl ('GEOLOGE' hat andere Vokale; 'OBLIGE' ist kein deutsches Wort).\n\nDer gesuchte Anfangsbuchstabe lautet 'B'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('L') ist falsch, da 'LOGIBIE' kein deutsches Wort ist.\n• Option C ('G') ist falsch, da kein deutsches Substantiv mit G aus diesen Buchstaben existiert.\n• Option D ('O') ist falsch, da 'OBIOLOGIE' nicht existiert und O im Wortinneren steht.\n• Option E ist falsch, da Option B die korrekte Lösung 'B' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Wissenschaft", "Biologie", "Mittel", "KFF-WF-007"],
  },
  {
    id: "KFF-WF-008",
    simulationId: "generalprobe-1",
    questionNumber: 8,
    subtest: "WF",
    letters: ["P", "T", "H", "E", "K", "O", "E", "A"],
    scrambledLetters: "P · T · H · E · K · O · E · A",
    targetWord: "APOTHEKE",
    correctInitial: "A",
    options: {
      A: "A",
      B: "P",
      C: "K",
      D: "T",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, E, E, H, K, O, P, T bildet sich eindeutig das deutsche Substantiv 'APOTHEKE' (die Apotheke, Abgabestelle für Arzneimittel).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), P (1×), O (1×), T (1×), H (1×), E (2×), K (1×)\nAlle Buchstaben stimmen exakt mit 'APOTHEKE' überein. Es existiert kein alternatives deutsches Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'A'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('P') ist falsch, da P der zweite Buchstabe ist und kein deutsches Substantiv 'POTHAKE' existiert.\n• Option C ('K') ist falsch, da K der vorletzte Buchstabe ist.\n• Option D ('T') ist falsch, da 'THEKOPAE' kein deutsches Wort ist.\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'A' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Gesundheit", "Pharmazie", "Mittel", "KFF-WF-008"],
  },
  {
    id: "KFF-WF-009",
    simulationId: "generalprobe-1",
    questionNumber: 9,
    subtest: "WF",
    letters: ["Z", "R", "O", "N", "T", "I", "O", "H"],
    scrambledLetters: "Z · R · O · N · T · I · O · H",
    targetWord: "HORIZONT",
    correctInitial: "H",
    options: {
      A: "Z",
      B: "R",
      C: "T",
      D: "N",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben H, I, N, O, O, R, T, Z bildet sich eindeutig das deutsche Substantiv 'HORIZONT' (der Horizont, Grenzlinie zwischen Himmel und Erde).\n\nBuchstaben-Verifikation (Multimenge):\n• H (1×), O (2×), R (1×), I (1×), Z (1×), N (1×), T (1×)\nAlle acht Buchstaben stimmen exakt mit dem Zielwort überein. Es existiert kein alternatives deutsches Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'H'.\nDa der Buchstabe 'H' nicht unter den Optionen A bis D (Z, R, T, N) aufgeführt ist, ist Antwort E ('Keine der Antwortmöglichkeiten ist richtig') korrekt.\n\nDistraktoren-Analyse:\n• Option A ('Z') ist falsch, da 'ZORINTHO' kein deutsches Wort ist.\n• Option B ('R') ist falsch, da kein deutsches Substantiv mit R aus diesen Buchstaben gebildet werden kann.\n• Option C ('T') ist falsch, da T der Schlussbuchstabe ist.\n• Option D ('N') ist falsch, da N der vorletzte Buchstabe ist.\n• Option E ist korrekt, da der Buchstabe 'H' unter den Optionen A–D fehlt.",
    tags: ["KFF", "Wortflüssigkeit", "Geografie", "Astronomie", "Mittel", "Option-E", "KFF-WF-009"],
  },
  {
    id: "KFF-WF-010",
    simulationId: "generalprobe-1",
    questionNumber: 10,
    subtest: "WF",
    letters: ["R", "U", "G", "H", "I", "R", "C"],
    scrambledLetters: "R · U · G · H · I · R · C",
    targetWord: "CHIRURG",
    correctInitial: "C",
    options: {
      A: "R",
      B: "G",
      C: "C",
      D: "H",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben C, G, H, I, R, R, U bildet sich eindeutig das deutsche Substantiv 'CHIRURG' (der Chirurg, operativ tätiger Facharzt).\n\nBuchstaben-Verifikation (Multimenge):\n• C (1×), H (1×), I (1×), R (2×), U (1×), G (1×)\nAlle sieben Buchstaben stimmen exakt mit 'CHIRURG' überein. Es existiert kein alternatives deutsches Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'C'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('R') ist falsch, da R an vierter und sechster Stelle im Wort steht, aber kein deutsches Wort 'RUCHIRG' existiert.\n• Option B ('G') ist falsch, da G der Endbuchstabe ist.\n• Option D ('H') ist falsch, da H der zweite Buchstabe des Anfangslauts Ch ist, das Wort aber mit C beginnt.\n• Option E ist falsch, da Option C den zutreffenden Anfangsbuchstaben 'C' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Medizin", "Beruf", "Mittel", "KFF-WF-010"],
  },
  {
    id: "KFF-WF-011",
    simulationId: "generalprobe-1",
    questionNumber: 11,
    subtest: "WF",
    letters: ["T", "E", "R", "T", "I", "A", "E", "B"],
    scrambledLetters: "T · E · R · T · I · A · E · B",
    targetWord: "BATTERIE",
    correctInitial: "B",
    options: {
      A: "T",
      B: "B",
      C: "R",
      D: "E",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, B, E, E, I, R, T, T bildet sich eindeutig das deutsche Substantiv 'BATTERIE' (die Batterie, elektrochemischer Energiespeicher).\n\nBuchstaben-Verifikation (Multimenge):\n• B (1×), A (1×), T (2×), E (2×), R (1×), I (1×)\nAlle acht Buchstaben stimmen exakt mit 'BATTERIE' überein. Es existiert kein alternatives deutsches Substantiv aus dieser Buchstabenkombination ('Bettler' benötigt andere Buchstaben; 'Trabant' hat kein E).\n\nDer gesuchte Anfangsbuchstabe lautet 'B'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('T') ist falsch, da T im Wortinneren verdoppelt ist, aber kein Substantiv 'TRABITE' existiert.\n• Option C ('R') ist falsch, da R der sechste Buchstabe ist.\n• Option D ('E') ist falsch, da E der Endbuchstabe ist.\n• Option E ist falsch, da Option B den richtigen Anfangsbuchstaben 'B' anbietet.",
    tags: ["KFF", "Wortflüssigkeit", "Physik", "Technik", "Mittel", "KFF-WF-011"],
  },
  {
    id: "KFF-WF-012",
    simulationId: "generalprobe-1",
    questionNumber: 12,
    subtest: "WF",
    letters: ["M", "K", "R", "A", "T", "O", "E", "I", "E", "D"],
    scrambledLetters: "M · K · R · A · T · O · E · I · E · D",
    targetWord: "DEMOKRATIE",
    correctInitial: "D",
    options: {
      A: "K",
      B: "M",
      C: "T",
      D: "D",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den zehn Buchstaben A, D, E, E, I, K, M, O, R, T bildet sich eindeutig das deutsche Substantiv 'DEMOKRATIE' (die Demokratie, Herrschaftsform / Staatsordnung).\n\nBuchstaben-Verifikation (Multimenge):\n• D (1×), E (2×), M (1×), O (1×), K (1×), R (1×), A (1×), T (1×), I (1×)\nAlle zehn Buchstaben stimmen lückenlos und exakt mit 'DEMOKRATIE' überein. Aus dieser komplexen Buchstabenmenge existiert im deutschen Sprachgebrauch kein anderes Substantiv.\n\nDer gesuchte Anfangsbuchstabe lautet 'D'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('K') ist falsch, da kein deutsches Substantiv wie 'KOREMEDIAT' existiert.\n• Option B ('M') ist falsch, da kein deutsches Wort wie 'MOKEDRAITE' existiert.\n• Option C ('T') ist falsch, da T der achte Buchstabe ist.\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'D' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Gesellschaft", "Politik", "Schwer", "KFF-WF-012"],
  },
  {
    id: "KFF-WF-013",
    simulationId: "generalprobe-1",
    questionNumber: 13,
    subtest: "WF",
    letters: ["T", "C", "H", "K", "I", "T", "E", "R", "A"],
    scrambledLetters: "T · C · H · K · I · T · E · R · A",
    targetWord: "ARCHITEKT",
    correctInitial: "A",
    options: {
      A: "A",
      B: "T",
      C: "K",
      D: "R",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben A, C, E, H, I, K, R, T, T bildet sich eindeutig das deutsche Substantiv 'ARCHITEKT' (der Architekt, Baukünstler / Planer).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), R (1×), C (1×), H (1×), I (1×), T (2×), E (1×), K (1×)\nAlle neun Buchstaben stimmen präzise mit 'ARCHITEKT' überein. Es gibt kein alternatives deutsches Substantiv aus dieser Buchstabenkombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'A'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('T') ist falsch, da T an sechster und neunter Stelle steht, aber kein deutsches Wort 'TRAKTECHIT' existiert.\n• Option C ('K') ist falsch, da kein deutsches Substantiv mit K aus diesen Buchstaben existiert.\n• Option D ('R') ist falsch, da R der zweite Buchstabe ist.\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'A' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Architektur", "Beruf", "Schwer", "KFF-WF-013"],
  },
  {
    id: "KFF-WF-014",
    simulationId: "generalprobe-1",
    questionNumber: 14,
    subtest: "WF",
    letters: ["V", "S", "M", "N", "E", "R", "I", "U", "U"],
    scrambledLetters: "V · S · M · N · E · R · I · U · U",
    targetWord: "UNIVERSUM",
    correctInitial: "U",
    options: {
      A: "V",
      B: "S",
      C: "M",
      D: "N",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben E, I, M, N, R, S, U, U, V bildet sich eindeutig das deutsche Substantiv 'UNIVERSUM' (das Universum, Weltall / Kosmos).\n\nBuchstaben-Verifikation (Multimenge):\n• U (2×), N (1×), I (1×), V (1×), E (1×), R (1×), S (1×), M (1×)\nAlle neun Buchstaben werden vollständig und genau einmal verwendet. Ein anderes deutsches Substantiv aus dieser Buchstabenzusammenstellung existiert nicht.\n\nDer gesuchte Anfangsbuchstabe lautet 'U'.\nDa der Buchstabe 'U' nicht unter den Optionen A bis D (V, S, M, N) aufgeführt ist, ist Antwort E ('Keine der Antwortmöglichkeiten ist richtig') korrekt.\n\nDistraktoren-Analyse:\n• Option A ('V') ist falsch, da V der vierte Buchstabe ist und kein deutsches Substantiv 'VERNISUMU' existiert.\n• Option B ('S') ist falsch, da S der siebte Buchstabe ist.\n• Option C ('M') ist falsch, da M der Schlussbuchstabe ist.\n• Option D ('N') ist falsch, da N der zweite Buchstabe ist.\n• Option E ist korrekt, da der tatsächliche Anfangsbuchstabe 'U' unter A–D nicht vertreten ist.",
    tags: ["KFF", "Wortflüssigkeit", "Kosmologie", "Physik", "Schwer", "Option-E", "KFF-WF-014"],
  },
  {
    id: "KFF-WF-015",
    simulationId: "generalprobe-1",
    questionNumber: 15,
    subtest: "WF",
    letters: ["R", "K", "T", "H", "A", "R", "E", "A", "C"],
    scrambledLetters: "R · K · T · H · A · R · E · A · C",
    targetWord: "CHARAKTER",
    correctInitial: "C",
    options: {
      A: "R",
      B: "K",
      C: "C",
      D: "T",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben A, A, C, E, H, K, R, R, T bildet sich eindeutig das deutsche Substantiv 'CHARAKTER' (der Charakter, Gesamtheit der Wesenszüge / Persönlichkeit).\n\nBuchstaben-Verifikation (Multimenge):\n• C (1×), H (1×), A (2×), R (2×), K (1×), T (1×), E (1×)\nAlle neun Buchstaben stimmen präzise mit 'CHARAKTER' überein. Es existiert kein alternatives deutsches Substantiv aus dieser Buchstabenkombination ('Katharer' benötigt andere Vokale; 'Kater' hat nur 5 Buchstaben).\n\nDer gesuchte Anfangsbuchstabe lautet 'C'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('R') ist falsch, da R an vierter und neunter Position steht, aber kein deutsches Wort 'RACHKATER' existiert.\n• Option B ('K') ist falsch, da K der sechste Buchstabe ist.\n• Option D ('T') ist falsch, da T der siebte Buchstabe ist.\n• Option E ist falsch, da Option C den zutreffenden Anfangsbuchstaben 'C' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Psychologie", "Wissenschaft", "Schwer", "KFF-WF-015"],
  },
];

/**
 * Convert RAW_GENERALPROBE_1_WF_QUESTIONS into StoredQuestion format for Generalprobe #1
 */
export const GENERALPROBE_1_WF_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_WF_QUESTIONS.map((wf, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");

  const formatOption = (val: string | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine der Antwortmöglichkeiten ist richtig";
    }
    return val;
  };

  return {
    id: `KFF-WF-${numStr}`,
    legacyId: `wf-sim1-q${String(idx + 1).padStart(2, "0")}`,
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
    tags: ["KFF", "Wortflüssigkeit", "Generalprobe #1", `KFF-WF-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 1,
    wfData: {
      ...wf,
      id: `KFF-WF-${numStr}`,
      legacyId: `wf-sim1-q${String(idx + 1).padStart(2, "0")}`,
    } as any,
  };
});
