/**
 * MedAT-H KFF — Implikationen erkennen (IE) — Generalprobe #1
 * Exactly 10 Original, Formally Verified Logical Deduction Questions
 * 
 * IDs: KFF-IE-001 through KFF-IE-010 (aliased to ie-sim1-q01 .. q10)
 * 
 * Specifications:
 * - Exactly 10 Questions, 10 Minutes (600 seconds)
 * - Strict MedAT-H formal syllogism format: Two explicit premises and 5 conclusion categories:
 *     A: Alle X sind Y.
 *     B: Alle X sind keine Y.
 *     C: Einige X sind Y.
 *     D: Einige X sind keine Y.
 *     E: Keine der Schlussfolgerungen A–D ist zwingend richtig.
 * - Perfectly balanced answer distribution: exactly 2 A, 2 B, 2 C, 2 D, 2 E (A-B-C-D-E block structure)
 * - Rigorous difficulty calibration: exactly 3 Leicht, 5 Mittel, 2 Schwer
 * - Formal validity: Each question verified across all model assignments using set inclusion, disjunction, and existential models
 * - Complete explanations: Formal deduction, set relation / syllogistic mood, and exhaustive distractor analysis for all 5 options (A–E)
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { IeQuestionData, IeSimulationData } from "../questions/ie/types";

export const RAW_GENERALPROBE_1_IE_QUESTIONS: IeQuestionData[] = [
  {
    id: "KFF-IE-001",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 1,
    difficulty: "Leicht",
    ruleType: "modus_barbara",
    premises: [
      "Alle Kardiomyozyten sind Muskelzellen.",
      "Alle Muskelzellen sind kontraktile Zellen.",
    ],
    options: {
      A: "Alle Kardiomyozyten sind kontraktile Zellen.",
      B: "Alle Kardiomyozyten sind keine kontraktilen Zellen.",
      C: "Einige Kardiomyozyten sind kontraktile Zellen.",
      D: "Einige Kardiomyozyten sind keine kontraktilen Zellen.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Kardiomyozyten (K) sind Muskelzellen (M) [K ⊆ M].\n• Prämisse 2: Alle Muskelzellen (M) sind kontraktile Zellen (Z) [M ⊆ Z].\n• Logische Struktur: Klassischer Kettenschluss (Modus Barbara, 1. Figur: A-A-A).\n• Deduktion: Da die Menge der Kardiomyozyten vollständig in der Menge der Muskelzellen enthalten ist und die Muskelzellen wiederum vollständig in der Menge der kontraktilen Zellen liegen, folgt durch die Transitivität der Teilmengenrelation zwingend: K ⊆ Z. Jeder Kardiomyozyt ist ausnahmslos eine kontraktile Zelle.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig, da die universelle Inklusion K ⊆ Z formallogisch unmittelbar aus den Prämissen folgt.\n• Option B ('Alle Kardiomyozyten sind keine kontraktilen Zellen') behauptet die Disjunktheit von K und Z, was der bewiesenen Inklusion K ⊆ Z direkt widerspricht.\n• Option C ('Einige Kardiomyozyten sind kontraktile Zellen') formuliert eine partikuläre Aussage (Existenzquantor ∃x). Im MedAT-Standardformat ist bei universell gültigen Prämissen die universelle Konklusion 'Alle K sind Z' (Option A) die formal stärkere und primär zwingende Aussage.\n• Option D ('Einige Kardiomyozyten sind keine kontraktilen Zellen') behauptet die Existenz von Elementen in K \\ Z, was der universellen Aussage K ⊆ Z widerspricht.\n• Option E ist falsch, da mit Option A eine zwingend richtige Schlussfolgerung vorliegt.",
  },
  {
    id: "KFF-IE-002",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 2,
    difficulty: "Leicht",
    ruleType: "modus_celarent",
    premises: [
      "Alle Erythrozyten sind kernlose Zellen.",
      "Alle kernlosen Zellen sind keine Zellen mit eigenem Zellkern.",
    ],
    options: {
      A: "Alle Erythrozyten sind Zellen mit eigenem Zellkern.",
      B: "Alle Erythrozyten sind keine Zellen mit eigenem Zellkern.",
      C: "Einige Erythrozyten sind Zellen mit eigenem Zellkern.",
      D: "Einige Erythrozyten sind keine Zellen mit eigenem Zellkern.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Erythrozyten (E) sind kernlose Zellen (K) [E ⊆ K].\n• Prämisse 2: Alle kernlosen Zellen (K) sind keine Zellen mit eigenem Zellkern (Z) [K ∩ Z = ∅].\n• Logische Struktur: Universell verneinender Syllogismus (Modus Celarent, 1. Figur: E-A-E).\n• Deduktion: Die Menge E liegt vollständig in K. Da K und Z disjunkt sind (keine gemeinsamen Elemente besitzen), kann auch kein Element von E in Z liegen (E ∩ Z = ∅). Folglich gilt zwingend: Alle Erythrozyten sind keine Zellen mit eigenem Zellkern.\n\nDistraktoren-Analyse:\n• Option A ('Alle Erythrozyten sind Zellen mit eigenem Zellkern') behauptet das genaue Gegenteil der bewiesenen Disjunktheit.\n• Option B ist zwingend richtig, da aus E ⊆ K und K ∩ Z = ∅ zwingend E ∩ Z = ∅ folgt.\n• Option C ('Einige Erythrozyten sind Zellen mit eigenem Zellkern') behauptet eine nicht-leere Schnittmenge (E ∩ Z ≠ ∅), was durch Prämisse 2 logisch ausgeschlossen ist.\n• Option D ('Einige Erythrozyten sind keine Zellen mit eigenem Zellkern') ist die schwächere partikuläre Verneinung; im MedAT-Format ist die vollständige universelle Negation (Option B) die geforderte exakte Konklusion.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-003",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 3,
    difficulty: "Leicht",
    ruleType: "modus_darii",
    premises: [
      "Einige Rezeptoren sind Ionenkanäle.",
      "Alle Ionenkanäle sind Transmembranproteine.",
    ],
    options: {
      A: "Alle Rezeptoren sind Transmembranproteine.",
      B: "Alle Rezeptoren sind keine Transmembranproteine.",
      C: "Einige Rezeptoren sind Transmembranproteine.",
      D: "Einige Rezeptoren sind keine Transmembranproteine.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige Rezeptoren (R) sind Ionenkanäle (I) [R ∩ I ≠ ∅].\n• Prämisse 2: Alle Ionenkanäle (I) sind Transmembranproteine (T) [I ⊆ T].\n• Logische Struktur: Partikulär bejahender Syllogismus (Modus Darii, 1. Figur: A-I-I).\n• Deduktion: Prämisse 1 sichert die Existenz mindestens eines Elements x mit x ∈ R und x ∈ I. Da nach Prämisse 2 jedes Element von I auch in T liegt, gehört dieses x zwingend auch zu T (x ∈ R ∧ x ∈ T). Somit ist die Schnittmenge R ∩ T garantiert nicht leer: Einige Rezeptoren sind Transmembranproteine.\n\nDistraktoren-Analyse:\n• Option A ('Alle Rezeptoren sind Transmembranproteine') verallgemeinert unzulässig: Prämisse 1 betrifft nur 'einige' Rezeptoren. Es ist logisch möglich, dass intrazelluläre Rezeptoren keine Transmembranproteine sind.\n• Option B ('Alle Rezeptoren sind keine Transmembranproteine') widerspricht der nachgewiesenen Existenz von Rezeptoren, die als Ionenkanäle Transmembranproteine sind.\n• Option C ist zwingend richtig, da die Schnittmenge R ∩ T durch die Prämissen zweifelsfrei nachgewiesen ist.\n• Option D ('Einige Rezeptoren sind keine Transmembranproteine') folgt nicht zwingend: Die Prämissen schließen nicht aus, dass zufällig alle Rezeptoren Transmembranproteine sind ('Einige' bedeutet 'mindestens einer', schließt aber 'alle' formal nicht aus).\n• Option E ist falsch, da Option C zwingend folgt.",
  },
  {
    id: "KFF-IE-004",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 4,
    difficulty: "Mittel",
    ruleType: "modus_ferio",
    premises: [
      "Alle Ribozyme sind keine Proteine.",
      "Einige Enzyme sind Ribozyme.",
    ],
    options: {
      A: "Alle Enzyme sind Proteine.",
      B: "Alle Enzyme sind keine Proteine.",
      C: "Einige Enzyme sind Proteine.",
      D: "Einige Enzyme sind keine Proteine.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Ribozyme (R) sind keine Proteine (P) [R ∩ P = ∅].\n• Prämisse 2: Einige Enzyme (E) sind Ribozyme (R) [E ∩ R ≠ ∅].\n• Logische Struktur: Partikulär verneinender Syllogismus (Modus Ferio, 1. Figur: E-I-O).\n• Deduktion: Es existiert mindestens ein Enzym x, das ein Ribozym ist (x ∈ E ∧ x ∈ R). Da kein Ribozym ein Protein sein kann (R ∩ P = ∅), kann dieses x unter keinen Umständen ein Protein sein (x ∉ P). Daraus folgt zwingend: Es gibt mindestens ein Enzym, das kein Protein ist (∃x (x ∈ E ∧ x ∉ P)). Die Aussage 'Einige Enzyme sind keine Proteine' ist zwingend wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle Enzyme sind Proteine') widerspricht direkt der Tatsache, dass die Ribozym-Enzyme keine Proteine sein können.\n• Option B ('Alle Enzyme sind keine Proteine') ist nicht zwingend: Es ist logisch denkbar, dass alle anderen Enzyme sehr wohl Proteine sind.\n• Option C ('Einige Enzyme sind Proteine') ist empirisch wahr, aber formallogisch aus den zwei Prämissen nicht ableitbar: Die Prämissen verbieten nicht, dass alle Enzyme Ribozyme sind.\n• Option D ist zwingend richtig, da jener Teil der Enzyme, der aus Ribozymen besteht, garantiert proteinfrei ist.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
  {
    id: "KFF-IE-005",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 5,
    difficulty: "Mittel",
    ruleType: "fallacy_undistributed_middle",
    premises: [
      "Alle Lipide sind hydrophobe Moleküle.",
      "Alle Kohlenwasserstoffe sind hydrophobe Moleküle.",
    ],
    options: {
      A: "Alle Lipide sind Kohlenwasserstoffe.",
      B: "Alle Lipide sind keine Kohlenwasserstoffe.",
      C: "Einige Lipide sind Kohlenwasserstoffe.",
      D: "Einige Lipide sind keine Kohlenwasserstoffe.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Lipide (L) sind hydrophobe Moleküle (H) [L ⊆ H].\n• Prämisse 2: Alle Kohlenwasserstoffe (K) sind hydrophobe Moleküle (H) [K ⊆ H].\n• Logische Struktur: Fehlschluss des unverteilten Mittelbegriffs (Fallacy of the Undistributed Middle).\n• Deduktion: Der Mittelbegriff H fungiert in beiden Prämissen als Prädikat einer universell bejahenden Aussage und ist in keiner Prämisse distribuiert. Sowohl L als auch K sind Teilmengen von H. Daraus lässt sich über das Verhältnis zwischen L und K keine zwingende Aussage treffen:\n  - Modell 1: L ∩ K = ∅ (L und K sind disjunkt).\n  - Modell 2: L ⊆ K (alle Lipide sind Kohlenwasserstoffe).\n  - Modell 3: L ∩ K ≠ ∅ und L \\ K ≠ ∅ (teilweiser Überlapp).\nDa alle diese mengentheoretischen Konstellationen die Prämissen simultan erfüllen, ist keine spezifische Beziehung zwischen L und K zwingend wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle Lipide sind Kohlenwasserstoffe') ist in Modell 1 falsch.\n• Option B ('Alle Lipide sind keine Kohlenwasserstoffe') ist in Modell 2 falsch.\n• Option C ('Einige Lipide sind Kohlenwasserstoffe') ist in Modell 1 falsch.\n• Option D ('Einige Lipide sind keine Kohlenwasserstoffe') ist in Modell 2 falsch.\n• Option E ist zwingend richtig, da keine der Schlussfolgerungen A bis D in allen gültigen Modellen gilt.",
  },
  {
    id: "KFF-IE-006",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 6,
    difficulty: "Mittel",
    ruleType: "modus_barbara",
    premises: [
      "Alle Organismen ohne Zellwand sind gegenüber osmotischer Lyse empfindliche Zellen.",
      "Alle Mykoplasmen sind Organismen ohne Zellwand.",
    ],
    options: {
      A: "Alle Mykoplasmen sind gegenüber osmotischer Lyse empfindliche Zellen.",
      B: "Alle Mykoplasmen sind keine gegenüber osmotischer Lyse empfindlichen Zellen.",
      C: "Einige Mykoplasmen sind gegenüber osmotischer Lyse empfindliche Zellen.",
      D: "Einige Mykoplasmen sind keine gegenüber osmotischer Lyse empfindlichen Zellen.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Organismen ohne Zellwand (O) sind gegenüber osmotischer Lyse empfindliche Zellen (E) [O ⊆ E].\n• Prämisse 2: Alle Mykoplasmen (M) sind Organismen ohne Zellwand (O) [M ⊆ O].\n• Logische Struktur: Kettenschluss (Modus Barbara, 1. Figur: A-A-A).\n• Deduktion: Aus M ⊆ O und O ⊆ E folgt unmittelbar M ⊆ E. Alle Mykoplasmen sind folglich ausnahmslos gegenüber osmotischer Lyse empfindliche Zellen.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig: Die Teilmengenbeziehung M ⊆ E folgt mathematisch direkt aus der Transitivität der Inklusion.\n• Option B ('Alle Mykoplasmen sind keine ... Zellen') behauptet die Disjunktheit M ∩ E = ∅, was M ⊆ E direkt widerspricht.\n• Option C ('Einige Mykoplasmen sind ...') ist partikulär; im MedAT-Format ist bei zwei universellen Prämissen die universelle Konklusion (Option A) die formal stärkere und primäre Antwort.\n• Option D ('Einige Mykoplasmen sind keine ...') behauptet M \\ E ≠ ∅, was mit M ⊆ E unvereinbar ist.\n• Option E ist falsch, da Option A zwingend folgt.",
  },
  {
    id: "KFF-IE-007",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 7,
    difficulty: "Mittel",
    ruleType: "modus_camestres",
    premises: [
      "Alle Eukaryoten sind Organismen mit membranumhüllten Organellen.",
      "Alle Prokaryoten sind keine Organismen mit membranumhüllten Organellen.",
    ],
    options: {
      A: "Alle Prokaryoten sind Eukaryoten.",
      B: "Alle Prokaryoten sind keine Eukaryoten.",
      C: "Einige Prokaryoten sind Eukaryoten.",
      D: "Einige Prokaryoten sind keine Eukaryoten.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Eukaryoten (E) sind Organismen mit membranumhüllten Organellen (M) [E ⊆ M].\n• Prämisse 2: Alle Prokaryoten (P) sind keine Organismen mit membranumhüllten Organellen (M) [P ∩ M = ∅].\n• Logische Struktur: Modus Camestres (2. Figur: A-E-E).\n• Deduktion: Da die gesamte Menge E innerhalb von M liegt und P vollständig disjunkt zu M ist, kann kein Element von P jemals in E liegen (P ∩ E = ∅). Folglich gilt zwingend: Alle Prokaryoten sind keine Eukaryoten.\n\nDistraktoren-Analyse:\n• Option A ('Alle Prokaryoten sind Eukaryoten') behauptet P ⊆ E, was der Disjunktheit P ∩ E = ∅ diametral widerspricht.\n• Option B ist zwingend richtig: Aus E ⊆ M und P ∩ M = ∅ folgt unweigerlich P ∩ E = ∅.\n• Option C ('Einige Prokaryoten sind Eukaryoten') behauptet eine nicht-leere Schnittmenge P ∩ E ≠ ∅, was logisch unmöglich ist.\n• Option D ('Einige Prokaryoten sind keine Eukaryoten') ist die schwächere partikuläre Negation; Option B ist die vollständige und stärkere universelle Negation.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-008",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 8,
    difficulty: "Mittel",
    ruleType: "modus_datisi",
    premises: [
      "Alle allosterischen Enzyme sind Moleküle mit quartärer Raumstruktur.",
      "Einige allosterische Enzyme sind regulatorische Proteine.",
    ],
    options: {
      A: "Alle regulatorischen Proteine sind Moleküle mit quartärer Raumstruktur.",
      B: "Alle regulatorischen Proteine sind keine Moleküle mit quartärer Raumstruktur.",
      C: "Einige regulatorische Proteine sind Moleküle mit quartärer Raumstruktur.",
      D: "Einige regulatorische Proteine sind keine Moleküle mit quartärer Raumstruktur.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle allosterischen Enzyme (A) sind Moleküle mit quartärer Raumstruktur (Q) [A ⊆ Q].\n• Prämisse 2: Einige allosterische Enzyme (A) sind regulatorische Proteine (R) [A ∩ R ≠ ∅].\n• Logische Struktur: Modus Datisi (3. Figur: A-I-I).\n• Deduktion: Prämisse 2 stellt fest, dass es mindestens ein Element x gibt, das sowohl zu A als auch zu R gehört (x ∈ A ∧ x ∈ R). Da nach Prämisse 1 ausnahmslos alle Elemente von A auch in Q liegen (A ⊆ Q), muss dieses x ebenfalls in Q liegen (x ∈ Q). Damit gehört x sowohl zu R als auch zu Q (x ∈ R ∧ x ∈ Q). Die Schnittmenge R ∩ Q ist folglich garantiert nicht leer: Einige regulatorische Proteine sind Moleküle mit quartärer Raumstruktur.\n\nDistraktoren-Analyse:\n• Option A ('Alle regulatorischen Proteine sind Moleküle mit quartärer Raumstruktur') verallgemeinert unzulässig: Es kann regulatorische Proteine geben, die keine allosterischen Enzyme sind und keine Quartärstruktur aufweisen (z. B. monomere Proteine).\n• Option B ('Alle regulatorischen Proteine sind keine ...') widerspricht der nachgewiesenen Schnittmenge R ∩ Q ≠ ∅.\n• Option C ist zwingend richtig, da mindestens jene regulatorischen Proteine, die allosterische Enzyme sind, eine Quartärstruktur besitzen.\n• Option D ('Einige regulatorische Proteine sind keine ...') folgt nicht zwingend: Es ist logisch denkbar, dass zufällig alle regulatorischen Proteine Quartärstrukturen besitzen.\n• Option E ist falsch, da Option C zwingend folgt.",
  },
  {
    id: "KFF-IE-009",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 9,
    difficulty: "Schwer",
    ruleType: "modus_baroco",
    premises: [
      "Alle thermoresistenten Mikroorganismen sind Sporenbildner.",
      "Einige pathogene Bakterien sind keine Sporenbildner.",
    ],
    options: {
      A: "Alle pathogenen Bakterien sind thermoresistente Mikroorganismen.",
      B: "Alle pathogenen Bakterien sind keine thermoresistenten Mikroorganismen.",
      C: "Einige pathogene Bakterien sind thermoresistente Mikroorganismen.",
      D: "Einige pathogene Bakterien sind keine thermoresistenten Mikroorganismen.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle thermoresistenten Mikroorganismen (T) sind Sporenbildner (S) [T ⊆ S].\n• Prämisse 2: Einige pathogene Bakterien (B) sind keine Sporenbildner (S) [B \\ S ≠ ∅].\n• Logische Struktur: Modus Baroco (2. Figur: A-O-O).\n• Deduktion: Prämisse 2 garantiert die Existenz mindestens eines pathogenen Bakteriums x, das kein Sporenbildner ist (x ∈ B ∧ x ∉ S). Da nach Prämisse 1 alle thermoresistenten Mikroorganismen Sporenbildner sein müssen (T ⊆ S), kann kein Element außerhalb von S zu T gehören (x ∉ S ⇒ x ∉ T). Da dieses Element x jedoch in B liegt, existiert mindestens ein pathogenes Bakterium, das kein thermoresistenter Mikroorganismus ist (x ∈ B ∧ x ∉ T). Daraus folgt zwingend: Einige pathogene Bakterien sind keine thermoresistenten Mikroorganismen.\n\nDistraktoren-Analyse:\n• Option A ('Alle pathogenen Bakterien sind thermoresistente Mikroorganismen') steht im direkten Widerspruch zu der Existenz von pathogenen Bakterien, die außerhalb von S und damit außerhalb von T liegen.\n• Option B ('Alle pathogenen Bakterien sind keine ...') ist nicht zwingend: Es ist logisch möglich, dass andere pathogene Bakterien (die Sporen bilden) thermoresistent sind.\n• Option C ('Einige pathogene Bakterien sind ...') folgt nicht zwingend: Es ist mit den Prämissen vereinbar, dass gar kein pathogenes Bakterium thermoresistent ist.\n• Option D ist zwingend richtig, da jene Bakterien ohne Sporenbildung unmöglich thermoresistent sein können.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
  {
    id: "KFF-IE-010",
    simulationId: "generalprobe-1",
    subtest: "IE",
    questionNumber: 10,
    difficulty: "Schwer",
    ruleType: "no_valid_conclusion",
    premises: [
      "Einige infektiöse Partikel sind keine Partikel mit Proteinhülle.",
      "Einige infektiöse Partikel sind Viroide.",
    ],
    options: {
      A: "Alle Viroide sind Partikel mit Proteinhülle.",
      B: "Alle Viroide sind keine Partikel mit Proteinhülle.",
      C: "Einige Viroide sind Partikel mit Proteinhülle.",
      D: "Einige Viroide sind keine Partikel mit Proteinhülle.",
      E: "Keine der Schlussfolgerungen A–D ist zwingend richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige infektiöse Partikel (I) sind keine Partikel mit Proteinhülle (H) [I \\ H ≠ ∅].\n• Prämisse 2: Einige infektiöse Partikel (I) sind Viroide (V) [I ∩ V ≠ ∅].\n• Logische Struktur: Fehlschluss zweier partikulärer Prämissen (Fallacy of Two Particular Premises / Undistributed Middle).\n• Deduktion: Aus zwei partikulären Aussagen ('Einige...') lässt sich im Syllogismus niemals eine logisch zwingende Verknüpfung der Außenbegriffe V (Viroide) und H (Partikel mit Proteinhülle) herleiten. Der Mittelbegriff I ist in keiner Prämisse distribuiert.\n  - Modell 1: V ⊆ H (Die Viroide in I liegen vollständig innerhalb von H, während andere Partikel in I \\ H liegen). In diesem Modell ist A wahr, B, C und D können falsch oder wahr sein.\n  - Modell 2: V ∩ H = ∅ (Die Viroide in I fallen genau in den Bereich I \\ H). Hier ist B wahr, A und C sind falsch.\n  - Modell 3: V überschneidet sich nur teilweise mit H. Hier ist C und D wahr, A und B sind falsch.\nDa jedes dieser Modelle mit beiden Prämissen vollständig widerspruchsfrei vereinbar ist, lässt sich keine der Aussagen A bis D als zwingend wahr beweisen.\n\nDistraktoren-Analyse:\n• Option A ('Alle Viroide sind Partikel mit Proteinhülle') ist in Modell 2 falsch.\n• Option B ('Alle Viroide sind keine Partikel mit Proteinhülle') ist in Modell 1 falsch.\n• Option C ('Einige Viroide sind Partikel mit Proteinhülle') ist in Modell 2 falsch.\n• Option D ('Einige Viroide sind keine Partikel mit Proteinhülle') ist in Modell 1 falsch.\n• Option E ist zwingend richtig, da aus zwei partikulären Prämissen keine der Konklusionen A bis D allgemeingültig folgt.",
  },
];

export const GENERALPROBE_1_IE_SIMULATION_DATA: IeSimulationData = {
  simulationId: "generalprobe-1",
  simNumber: 1,
  title: "MedAT-H Generalprobe #1 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Formale Logik & Syllogismen",
  timeLimitSeconds: 10 * 60,
  questions: RAW_GENERALPROBE_1_IE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #1 runtime and review engine
 */
export const GENERALPROBE_1_IE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_1_IE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");

    return {
      id: `KFF-IE-${numStr}`,
      legacyId: `ie-sim1-q${String(idx + 1).padStart(2, "0")}`,
      exam: "MEDAT-H",
      section: "KFF",
      subjectId: "kff-imp",
      chapterId: "kff-imp-syll",
      topic: "Implikationen erkennen (IE)",
      concept: q.ruleType,
      difficulty: q.difficulty,
      questionText: `Prämisse 1: ${q.premises[0]}\nPrämisse 2: ${q.premises[1]}\n\nWelche Schlussfolgerung ist zwingend richtig?`,
      options: [
        q.options.A,
        q.options.B,
        q.options.C,
        q.options.D,
        q.options.E,
      ],
      correctAnswer: optionKeyToIndex(q.correctAnswer),
      explanation: q.explanation,
      tags: ["KFF", "IE", "Implikationen erkennen", "Logik", "Generalprobe #1", `KFF-IE-${numStr}`],
      source: "medat-original",
      version: "2026.1",
      setOrder: 1,
      ieData: {
        ...q,
        id: `KFF-IE-${numStr}`,
        legacyId: `ie-sim1-q${String(idx + 1).padStart(2, "0")}`,
      },
    } as StoredQuestion & { ieData: IeQuestionData };
  }
);
