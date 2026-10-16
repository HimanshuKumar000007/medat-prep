/**
 * MedAT KFF — Wortflüssigkeit (WF) — Generalprobe #4
 * Exactly 15 Deterministic, Lexically Verified German Word-Anagram Questions
 * 
 * IDs: KFF-WF-GP4-001 through KFF-WF-GP4-015 (aliased to wf-sim4-q01 .. q15)
 * 
 * Specifications:
 * - Exactly 15 Questions, 20 Minutes (~80s / question)
 * - Authentic, common German standard nouns (Nominativ Singular)
 * - Varied vocabulary across medicine, anatomy, physiology, biochemistry, physics, and medical pathology
 * - Standard German spelling using only A–Z (no Umlauts Ä, Ö, Ü, and no ß)
 * - Exact letter multiset matching: multiset(letters) === multiset(scrambledLetters) === multiset(targetWord)
 * - Mathematically & lexically verified: no ambiguous anagram collisions with conflicting initial letters
 * - Five answer choices: Options A–D (distinct uppercase candidate initials), Option E ("Keine der Antwortmöglichkeiten ist richtig")
 * - Perfectly balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - Max streak = 1 (no two consecutive questions share the same correct key)
 * - Genuine Option E cases (Questions 3, 8, 14: true initial letter completely omitted from A–D)
 * - Calibrated difficulty distribution: exactly 4 Leicht, 8 Mittel, 3 Schwer
 * - Step-by-step derivation, letter matching, and precise distractor analysis for all 15 questions
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { WfQuestionData } from "../questions/wf/types";

export const RAW_GENERALPROBE_4_WF_QUESTIONS: WfQuestionData[] = [
  {
    id: "KFF-WF-GP4-001",
    simulationId: "generalprobe-4",
    questionNumber: 1,
    subtest: "WF",
    letters: ["D", "S", "A", "U", "I", "R"],
    scrambledLetters: "D · S · A · U · I · R",
    targetWord: "RADIUS",
    correctInitial: "R",
    options: {
      A: "A",
      B: "D",
      C: "S",
      D: "R",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs gegebenen Buchstaben A, D, I, R, S, U bildet sich eindeutig das deutsche Substantiv 'RADIUS' (der Radius, anatomisch: die Speiche des Unterarms; geometrisch: halber Kreisdurchmesser).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), D (1×), I (1×), R (1×), S (1×), U (1×)\nAlle sechs Buchstaben werden exakt einmal eingesetzt. Im deutschen Standardwortschatz existiert kein anderes gebräuchliches Substantiv aus dieser Kombination.\n\nDer gesuchte Anfangsbuchstabe lautet 'R'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('A') ist falsch, da A an Position 2 von RADIUS steht, nicht am Wortanfang.\n• Option B ('D') ist falsch, da D an Position 3 von RADIUS steht.\n• Option C ('S') ist falsch, da S den Auslaut (Position 6) von RADIUS bildet.\n• Option E ist falsch, da der richtige Anfangsbuchstabe 'R' unter Option D aufgeführt ist.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "Osteologie", "Leicht", "KFF-WF-GP4-001"],
  },
  {
    id: "KFF-WF-GP4-002",
    simulationId: "generalprobe-4",
    questionNumber: 2,
    subtest: "WF",
    letters: ["O", "X", "E", "T", "R", "C"],
    scrambledLetters: "O · X · E · T · R · C",
    targetWord: "CORTEX",
    correctInitial: "C",
    options: {
      A: "R",
      B: "C",
      C: "T",
      D: "X",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben C, E, O, R, T, X bildet sich eindeutig das anatomische Substantiv 'CORTEX' (der Cortex, Organkapsel bzw. Rindenschicht, z. B. Cortex cerebri / Großhirnrinde oder Cortex renalis).\n\nBuchstaben-Verifikation (Multimenge):\n• C (1×), E (1×), O (1×), R (1×), T (1×), X (1×)\nJeder Buchstabe wird genau einmal verwendet. Ein anderes deutsches Substantiv lässt sich aus dieser Buchstabenfolge nicht bilden.\n\nDer gesuchte Anfangsbuchstabe lautet 'C'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('R') ist falsch, da R an Position 3 von CORTEX steht, nicht am Wortanfang.\n• Option C ('T') ist falsch, da T an Position 4 von CORTEX steht.\n• Option D ('X') ist falsch, da X der letzte Buchstabe (Position 6) von CORTEX ist.\n• Option E ist falsch, da Option B den zutreffenden Anfangsbuchstaben 'C' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "Neurologie", "Leicht", "KFF-WF-GP4-002"],
  },
  {
    id: "KFF-WF-GP4-003",
    simulationId: "generalprobe-4",
    questionNumber: 3,
    subtest: "WF",
    letters: ["L", "R", "A", "U", "E", "P"],
    scrambledLetters: "L · R · A · U · E · P",
    targetWord: "PLEURA",
    correctInitial: "P",
    options: {
      A: "L",
      B: "R",
      C: "E",
      D: "U",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben A, E, L, P, R, U setzt sich eindeutig das medizinische Substantiv 'PLEURA' (die Pleura, das zweiblättrige Brustfell aus Pleura visceralis und Pleura parietalis) zusammen.\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), L (1×), P (1×), R (1×), U (1×)\nAlle sechs Buchstaben stimmen exakt mit dem Zielwort überein.\n\nDer gesuchte Anfangsbuchstabe lautet 'P'.\nDa der Buchstabe 'P' in keiner der vorgegebenen Optionen A bis D vorkommt, ist Antwort E ('Keine der Antwortmöglichkeiten ist richtig') korrekt.\n\nDistraktoren-Analyse:\n• Option A ('L') ist falsch, da L an Position 2 von PLEURA steht.\n• Option B ('R') ist falsch, da R an Position 5 von PLEURA steht.\n• Option C ('E') ist falsch, da E an Position 3 von PLEURA steht.\n• Option D ('U') ist falsch, da U an Position 4 von PLEURA steht.\n• Option E ist richtig, da der Buchstabe 'P' unter A–D vollständig fehlt.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "Pulmologie", "Leicht", "KFF-WF-GP4-003"],
  },
  {
    id: "KFF-WF-GP4-004",
    simulationId: "generalprobe-4",
    questionNumber: 4,
    subtest: "WF",
    letters: ["T", "P", "O", "S", "O", "I"],
    scrambledLetters: "T · P · O · S · O · I",
    targetWord: "ISOTOP",
    correctInitial: "I",
    options: {
      A: "I",
      B: "O",
      C: "S",
      D: "T",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Leicht",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sechs Buchstaben I, O, O, P, S, T bildet sich eindeutig das physikalisch-chemische Substantiv 'ISOTOP' (das Isotop, Atomkernvariante gleicher Ordnungszahl, aber verschiedener Neutronenzahl).\n\nBuchstaben-Verifikation (Multimenge):\n• I (1×), O (2×), P (1×), S (1×), T (1×)\nAlle Buchstaben werden vollständig und ohne Rest abgedeckt.\n\nDer gesuchte Anfangsbuchstabe lautet 'I'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('O') ist falsch, da O an den Positionen 3 und 5 von ISOTOP steht, nicht am Wortanfang.\n• Option C ('S') ist falsch, da S an Position 2 von ISOTOP steht.\n• Option D ('T') ist falsch, da T an Position 4 von ISOTOP steht.\n• Option E ist falsch, da der richtige Anfangsbuchstabe 'I' als Option A vorhanden ist.",
    tags: ["KFF", "Wortflüssigkeit", "Physik", "Atomphysik", "Leicht", "KFF-WF-GP4-004"],
  },
  {
    id: "KFF-WF-GP4-005",
    simulationId: "generalprobe-4",
    questionNumber: 5,
    subtest: "WF",
    letters: ["N", "R", "T", "A", "F", "K", "I"],
    scrambledLetters: "N · R · T · A · F · K · I",
    targetWord: "INFARKT",
    correctInitial: "I",
    options: {
      A: "F",
      B: "N",
      C: "I",
      D: "K",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, F, I, K, N, R, T bildet sich eindeutig das klinisch-medizinische Substantiv 'INFARKT' (der Infarkt, irreversibler Gewebsuntergang durch ischämische Minderperfusion, z. B. Myokardinfarkt oder Hirninfarkt).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), F (1×), I (1×), K (1×), N (1×), R (1×), T (1×)\nAlle sieben Buchstaben stimmen exakt mit dem Zielwort überein.\n\nDer gesuchte Anfangsbuchstabe lautet 'I'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('F') ist falsch, da F an Position 3 von INFARKT steht.\n• Option B ('N') ist falsch, da N an Position 2 von INFARKT steht.\n• Option D ('K') ist falsch, da K an Position 6 von INFARKT steht.\n• Option E ist falsch, da Option C den korrekten Anfangsbuchstaben 'I' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Medizin", "Kardiologie", "Mittel", "KFF-WF-GP4-005"],
  },
  {
    id: "KFF-WF-GP4-006",
    simulationId: "generalprobe-4",
    questionNumber: 6,
    subtest: "WF",
    letters: ["N", "T", "I", "R", "D", "E", "D"],
    scrambledLetters: "N · T · I · R · D · E · D",
    targetWord: "DENDRIT",
    correctInitial: "D",
    options: {
      A: "R",
      B: "D",
      C: "T",
      D: "N",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben D, D, E, I, N, R, T bildet sich eindeutig das neurobiologische Substantiv 'DENDRIT' (der Dendrit, baumartig verzweigter plasmatischer Nervenzellfortsatz zur Rezeption synaptischer Impulse).\n\nBuchstaben-Verifikation (Multimenge):\n• D (2×), E (1×), I (1×), N (1×), R (1×), T (1×)\nBeide 'D' sowie alle übrigen Buchstaben werden exakt zugeordnet.\n\nDer gesuchte Anfangsbuchstabe lautet 'D'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('R') ist falsch, da R an Position 5 von DENDRIT steht.\n• Option C ('T') ist falsch, da T den Auslaut (Position 7) von DENDRIT bildet.\n• Option D ('N') ist falsch, da N an Position 3 von DENDRIT steht.\n• Option E ist falsch, da Option B den zutreffenden Anfangsbuchstaben 'D' aufführt.",
    tags: ["KFF", "Wortflüssigkeit", "Biologie", "Neurobiologie", "Mittel", "KFF-WF-GP4-006"],
  },
  {
    id: "KFF-WF-GP4-007",
    simulationId: "generalprobe-4",
    questionNumber: 7,
    subtest: "WF",
    letters: ["T", "N", "U", "M", "E", "R", "S"],
    scrambledLetters: "T · N · U · M · E · R · S",
    targetWord: "STERNUM",
    correctInitial: "S",
    options: {
      A: "T",
      B: "M",
      C: "R",
      D: "S",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben E, M, N, R, S, T, U bildet sich eindeutig das anatomische Substantiv 'STERNUM' (das Sternum, das ventrale Brustbein des Menschen, Gelenkpartner der Rippenknorpel und Claviculae).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), M (1×), N (1×), R (1×), S (1×), T (1×), U (1×)\nAlle sieben Buchstaben stimmen exakt mit dem Zielwort überein.\n\nDer gesuchte Anfangsbuchstabe lautet 'S'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('T') ist falsch, da T an Position 2 von STERNUM steht.\n• Option B ('M') ist falsch, da M am Wortende (Position 7) von STERNUM steht.\n• Option C ('R') ist falsch, da R an Position 4 von STERNUM steht.\n• Option E ist falsch, da Option D den richtigen Anfangsbuchstaben 'S' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "Skelettsystem", "Mittel", "KFF-WF-GP4-007"],
  },
  {
    id: "KFF-WF-GP4-008",
    simulationId: "generalprobe-4",
    questionNumber: 8,
    subtest: "WF",
    letters: ["A", "L", "T", "L", "E", "A", "P"],
    scrambledLetters: "A · L · T · L · E · A · P",
    targetWord: "PATELLA",
    correctInitial: "P",
    options: {
      A: "L",
      B: "T",
      C: "E",
      D: "A",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, A, E, L, L, P, T bildet sich eindeutig das anatomische Substantiv 'PATELLA' (die Patella, die Kniescheibe, größtes Sesambein des Bewegungsapparats in der Sehne des Musculus quadriceps femoris).\n\nBuchstaben-Verifikation (Multimenge):\n• A (2×), E (1×), L (2×), P (1×), T (1×)\nAlle sieben Buchstaben werden vollständig verbraucht.\n\nDer gesuchte Anfangsbuchstabe lautet 'P'.\nDa der Buchstabe 'P' nicht unter den Antwortoptionen A bis D zu finden ist, ist Option E ('Keine der Antwortmöglichkeiten ist richtig') die korrekte Wahl.\n\nDistraktoren-Analyse:\n• Option A ('L') ist falsch, da L an den Positionen 5 und 6 von PATELLA steht.\n• Option B ('T') ist falsch, da T an Position 3 von PATELLA steht.\n• Option C ('E') ist falsch, da E an Position 4 von PATELLA steht.\n• Option D ('A') ist falsch, da A an den Positionen 2 und 7 von PATELLA steht.\n• Option E ist richtig, da der korrekte Anfangsbuchstabe 'P' in A–D nicht vertreten ist.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "Orthopädie", "Mittel", "KFF-WF-GP4-008"],
  },
  {
    id: "KFF-WF-GP4-009",
    simulationId: "generalprobe-4",
    questionNumber: 9,
    subtest: "WF",
    letters: ["Y", "T", "I", "N", "E", "S", "C"],
    scrambledLetters: "Y · T · I · N · E · S · C",
    targetWord: "CYSTEIN",
    correctInitial: "C",
    options: {
      A: "C",
      B: "Y",
      C: "S",
      D: "T",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben C, E, I, N, S, T, Y bildet sich eindeutig das biochemische Substantiv 'CYSTEIN' (das Cystein / Zystein, proteinogene Schwefelaminosäure mit Thiol- bzw. Sulfhydrylgruppe (-SH), essenziell für kovalente Disulfidbrücken in Proteinstrukturen).\n\nBuchstaben-Verifikation (Multimenge):\n• C (1×), E (1×), I (1×), N (1×), S (1×), T (1×), Y (1×)\nAlle sieben Buchstaben werden genau einmal verwendet.\n\nDer gesuchte Anfangsbuchstabe lautet 'C'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('Y') ist falsch, da Y an Position 2 von CYSTEIN steht, nicht am Wortanfang.\n• Option C ('S') ist falsch, da S an Position 3 von CYSTEIN steht.\n• Option D ('T') ist falsch, da T an Position 4 von CYSTEIN steht.\n• Option E ist falsch, da Option A den korrekten Anfangsbuchstaben 'C' liefert.",
    tags: ["KFF", "Wortflüssigkeit", "Biochemie", "Aminosäuren", "Mittel", "KFF-WF-GP4-009"],
  },
  {
    id: "KFF-WF-GP4-010",
    simulationId: "generalprobe-4",
    questionNumber: 10,
    subtest: "WF",
    letters: ["U", "R", "S", "E", "M", "U", "H"],
    scrambledLetters: "U · R · S · E · M · U · H",
    targetWord: "HUMERUS",
    correctInitial: "H",
    options: {
      A: "M",
      B: "U",
      C: "H",
      D: "R",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben E, H, M, R, S, U, U bildet sich eindeutig das anatomische Substantiv 'HUMERUS' (der Humerus, der Oberarmknochen, größter Röhrenknochen der oberen Extremität mit proximalem Caput humeri und distalem Condylus humeri).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), H (1×), M (1×), R (1×), S (1×), U (2×)\nBeide 'U' sowie alle Konsonanten stimmen präzise überein.\n\nDer gesuchte Anfangsbuchstabe lautet 'H'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('M') ist falsch, da M an Position 3 von HUMERUS steht.\n• Option B ('U') ist falsch, da U an den Positionen 2 und 6 von HUMERUS steht.\n• Option D ('R') ist falsch, da R an Position 5 von HUMERUS steht.\n• Option E ist falsch, da der richtige Anfangsbuchstabe 'H' unter Option C gewählt werden kann.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "Osteologie", "Mittel", "KFF-WF-GP4-010"],
  },
  {
    id: "KFF-WF-GP4-011",
    simulationId: "generalprobe-4",
    questionNumber: 11,
    subtest: "WF",
    letters: ["Y", "V", "A", "T", "R", "U", "P"],
    scrambledLetters: "Y · V · A · T · R · U · P",
    targetWord: "PYRUVAT",
    correctInitial: "P",
    options: {
      A: "V",
      B: "P",
      C: "Y",
      D: "R",
      E: null,
    },
    correctAnswer: "B",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den sieben Buchstaben A, P, R, T, U, V, Y setzt sich eindeutig das physiologisch-biochemische Substantiv 'PYRUVAT' (das Pyruvat, Salz bzw. deprotonierte Form der Brenztraubensäure, Schlüsselmetabolit am Schnittpunkt von Glykolyse, Citratzyklus und Gluconeogenese) zusammen.\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), P (1×), R (1×), T (1×), U (1×), V (1×), Y (1×)\nAlle sieben Buchstaben stimmen exakt mit dem Zielwort überein.\n\nDer gesuchte Anfangsbuchstabe lautet 'P'. Antwort B ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('V') ist falsch, da V an Position 5 von PYRUVAT steht.\n• Option C ('Y') ist falsch, da Y an Position 2 von PYRUVAT steht.\n• Option D ('R') ist falsch, da R an Position 3 von PYRUVAT steht.\n• Option E ist falsch, da der korrekte Anfangsbuchstabe 'P' unter Option B aufgeführt ist.",
    tags: ["KFF", "Wortflüssigkeit", "Biochemie", "Stoffwechsel", "Mittel", "KFF-WF-GP4-011"],
  },
  {
    id: "KFF-WF-GP4-012",
    simulationId: "generalprobe-4",
    questionNumber: 12,
    subtest: "WF",
    letters: ["E", "N", "Z", "A", "S", "O", "N", "R"],
    scrambledLetters: "E · N · Z · A · S · O · N · R",
    targetWord: "RESONANZ",
    correctInitial: "R",
    options: {
      A: "S",
      B: "Z",
      C: "N",
      D: "R",
      E: null,
    },
    correctAnswer: "D",
    difficulty: "Mittel",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den acht Buchstaben A, E, N, N, O, R, S, Z bildet sich eindeutig das physikalische Substantiv 'RESONANZ' (die Resonanz, das Phänomen des überproportionalen Mitschwingens eines oszillierenden Systems bei Anregung nahe der Eigenfrequenz, z. B. akustische Resonanz oder Kernspinresonanz/MRT).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), E (1×), N (2×), O (1×), R (1×), S (1×), Z (1×)\nAlle acht Buchstaben stimmen exakt mit dem Zielwort überein.\n\nDer gesuchte Anfangsbuchstabe lautet 'R'. Antwort D ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('S') ist falsch, da S an Position 3 von RESONANZ steht.\n• Option B ('Z') ist falsch, da Z den Auslaut (Position 8) von RESONANZ bildet.\n• Option C ('N') ist falsch, da N an den Positionen 5 und 7 von RESONANZ steht.\n• Option E ist falsch, da Option D den zutreffenden Anfangsbuchstaben 'R' bereitstellt.",
    tags: ["KFF", "Wortflüssigkeit", "Physik", "Schwingungslehre", "Mittel", "KFF-WF-GP4-012"],
  },
  {
    id: "KFF-WF-GP4-013",
    simulationId: "generalprobe-4",
    questionNumber: 13,
    subtest: "WF",
    letters: ["N", "R", "Y", "M", "S", "U", "E", "A", "A"],
    scrambledLetters: "N · R · Y · M · S · U · E · A · A",
    targetWord: "ANEURYSMA",
    correctInitial: "A",
    options: {
      A: "A",
      B: "N",
      C: "R",
      D: "M",
      E: null,
    },
    correctAnswer: "A",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben A, A, E, M, N, R, S, U, Y bildet sich eindeutig das pathologisch-klinische Substantiv 'ANEURYSMA' (das Aneurysma, lokalisierte abnorme Aussackung einer arteriellen Gefäßwand, z. B. Aortenaneurysma oder zerebrales Beerenaneurysma mit Subarachnoidalblutungsrisiko).\n\nBuchstaben-Verifikation (Multimenge):\n• A (2×), E (1×), M (1×), N (1×), R (1×), S (1×), U (1×), Y (1×)\nAlle neun Buchstaben gehen vollständig im Zielwort auf.\n\nDer gesuchte Anfangsbuchstabe lautet 'A'. Antwort A ist korrekt.\n\nDistraktoren-Analyse:\n• Option B ('N') ist falsch, da N an Position 2 von ANEURYSMA steht, nicht am Wortanfang.\n• Option C ('R') ist falsch, da R an Position 5 von ANEURYSMA steht.\n• Option D ('M') ist falsch, da M an Position 8 von ANEURYSMA steht.\n• Option E ist falsch, da der gesuchte Buchstabe 'A' als Option A vorhanden ist.",
    tags: ["KFF", "Wortflüssigkeit", "Medizin", "Angiologie", "Pathologie", "Schwer", "KFF-WF-GP4-013"],
  },
  {
    id: "KFF-WF-GP4-014",
    simulationId: "generalprobe-4",
    questionNumber: 14,
    subtest: "WF",
    letters: ["B", "H", "Y", "N", "T", "R", "I", "A", "L"],
    scrambledLetters: "B · H · Y · N · T · R · I · A · L",
    targetWord: "LABYRINTH",
    correctInitial: "L",
    options: {
      A: "B",
      B: "R",
      C: "T",
      D: "H",
      E: null,
    },
    correctAnswer: "E",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben A, B, H, I, L, N, R, T, Y bildet sich eindeutig das anatomische Substantiv 'LABYRINTH' (das Labyrinth, komplexes Hohlraumsystem des Innenohrs im Felsenbein, unterteilt in knöchernes und häutiges Labyrinth für Gehörschnecke / Cochlea und Gleichgewichtsorgan / Vestibularorgan).\n\nBuchstaben-Verifikation (Multimenge):\n• A (1×), B (1×), H (1×), I (1×), L (1×), N (1×), R (1×), T (1×), Y (1×)\nAlle neun Buchstaben stimmen exakt mit dem Zielwort überein.\n\nDer gesuchte Anfangsbuchstabe lautet 'L'.\nDa der Buchstabe 'L' in keiner der vorgegebenen Optionen A bis D vorkommt, ist Antwort E ('Keine der Antwortmöglichkeiten ist richtig') die zutreffende Antwort.\n\nDistraktoren-Analyse:\n• Option A ('B') ist falsch, da B an Position 3 von LABYRINTH steht.\n• Option B ('R') ist falsch, da R an Position 5 von LABYRINTH steht.\n• Option C ('T') ist falsch, da T an Position 8 von LABYRINTH steht.\n• Option D ('H') ist falsch, da H den Auslaut (Position 9) von LABYRINTH bildet.\n• Option E ist korrekt, da der Buchstabe 'L' in den Optionen A–D fehlt.",
    tags: ["KFF", "Wortflüssigkeit", "Anatomie", "HNO", "Schwer", "KFF-WF-GP4-014"],
  },
  {
    id: "KFF-WF-GP4-015",
    simulationId: "generalprobe-4",
    questionNumber: 15,
    subtest: "WF",
    letters: ["E", "N", "I", "T", "H", "N", "O", "I", "M"],
    scrambledLetters: "E · N · I · T · H · N · O · I · M",
    targetWord: "METHIONIN",
    correctInitial: "M",
    options: {
      A: "T",
      B: "N",
      C: "M",
      D: "H",
      E: null,
    },
    correctAnswer: "C",
    difficulty: "Schwer",
    estimatedTime: 80,
    explanation:
      "Wortfindung & Herleitung:\nAus den neun Buchstaben E, H, I, I, M, N, N, O, T bildet sich eindeutig das biochemische Substantiv 'METHIONIN' (das Methionin, essenzielle schwefelhaltige Aminosäure mit Thioetherbindung, fungiert bei der eukaryotischen Translation als Startaminosäure kodiert durch das Startcodon AUG sowie als Methylgruppen-Donator in Form von S-Adenosylmethionin / SAM).\n\nBuchstaben-Verifikation (Multimenge):\n• E (1×), H (1×), I (2×), M (1×), N (2×), O (1×), T (1×)\nAlle neun Buchstaben werden lückenlos und exakt verwendet.\n\nDer gesuchte Anfangsbuchstabe lautet 'M'. Antwort C ist korrekt.\n\nDistraktoren-Analyse:\n• Option A ('T') ist falsch, da T an Position 3 von METHIONIN steht.\n• Option B ('N') ist falsch, da N an den Positionen 7 und 9 von METHIONIN steht.\n• Option D ('H') ist falsch, da H an Position 4 von METHIONIN steht.\n• Option E ist falsch, da Option C den zutreffenden Anfangsbuchstaben 'M' enthält.",
    tags: ["KFF", "Wortflüssigkeit", "Biochemie", "Translation", "Schwer", "KFF-WF-GP4-015"],
  },
];

/**
 * Convert RAW_GENERALPROBE_4_WF_QUESTIONS into StoredQuestion format for Generalprobe #4
 */
export const GENERALPROBE_4_WF_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_WF_QUESTIONS.map((wf, idx) => {
  const numStr = String(idx + 1).padStart(3, "0");

  const formatOption = (val: string | null, key: string): string => {
    if (key === "E" || val === null) {
      return "Keine der Antwortmöglichkeiten ist richtig";
    }
    return val;
  };

  return {
    id: `KFF-WF-GP4-${numStr}`,
    legacyId: `wf-sim4-q${String(idx + 1).padStart(2, "0")}`,
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
    tags: ["KFF", "Wortflüssigkeit", "Generalprobe #4", `KFF-WF-GP4-${numStr}`],
    source: "medat-original",
    version: "2026.1",
    setOrder: 4,
    wfData: {
      ...wf,
      id: `KFF-WF-GP4-${numStr}`,
      legacyId: `wf-sim4-q${String(idx + 1).padStart(2, "0")}`,
    } as any,
  };
});
