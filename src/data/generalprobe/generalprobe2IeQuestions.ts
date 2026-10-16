/**
 * MedAT-H KFF — Implikationen erkennen (IE) — Generalprobe #2
 * Exactly 10 Original, Formally Verified Logical Deduction Questions
 * 
 * IDs: KFF-IE-GP2-001 through KFF-IE-GP2-010 (aliased to ie-sim2-q01 .. q10)
 * 
 * Specifications:
 * - Exactly 10 Questions, 10 Minutes (600 seconds)
 * - Strict MedAT-H formal syllogism format: Two explicit premises and 5 conclusion categories:
 *     A: Alle X sind Y.
 *     B: Alle X sind keine Y.
 *     C: Einige X sind Y.
 *     D: Einige X sind keine Y.
 *     E: Keine der Schlussfolgerungen A–D ist richtig.
 * - Perfectly balanced answer distribution: exactly 2 A, 2 B, 2 C, 2 D, 2 E (A-B-C-D-E block structure)
 * - Rigorous difficulty calibration: exactly 3 Leicht, 5 Mittel, 2 Schwer
 * - Formal validity: Each question verified across all model assignments using set inclusion, disjunction, and existential models
 * - Complete explanations: Formal deduction, set relation / syllogistic mood, and exhaustive distractor analysis for all 5 options (A–E)
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { IeQuestionData, IeSimulationData } from "../questions/ie/types";

export const RAW_GENERALPROBE_2_IE_QUESTIONS: IeQuestionData[] = [
  {
    id: "KFF-IE-GP2-001",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 1,
    difficulty: "Leicht",
    ruleType: "modus_barbara",
    premises: [
      "Alle Phagozyten sind Leukozyten.",
      "Alle Leukozyten sind immunkompetente Zellen.",
    ],
    options: {
      A: "Alle Phagozyten sind immunkompetente Zellen.",
      B: "Alle Phagozyten sind keine immunkompetenten Zellen.",
      C: "Einige Phagozyten sind immunkompetente Zellen.",
      D: "Einige Phagozyten sind keine immunkompetenten Zellen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Phagozyten (P) sind Leukozyten (L) [P ⊆ L].\n• Prämisse 2: Alle Leukozyten (L) sind immunkompetente Zellen (I) [L ⊆ I].\n• Logische Struktur: Klassischer Kettenschluss (Modus Barbara, 1. Figur: A-A-A).\n• Deduktion: Da die Menge P vollständig in L enthalten ist und L wiederum eine Teilmenge von I darstellt, folgt durch die Transitivität der Teilmengenrelation zwingend: P ⊆ I. Ausnahmslos jeder Phagozyt ist somit eine immunkompetente Zelle.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig, da die universelle Inklusion P ⊆ I unmittelbar aus den Prämissen folgt.\n• Option B ('Alle Phagozyten sind keine immunkompetenten Zellen') behauptet die Disjunktheit von P und I (P ∩ I = ∅), was der bewiesenen Inklusion P ⊆ I direkt widerspricht.\n• Option C ('Einige Phagozyten sind immunkompetente Zellen') formuliert eine partikuläre Aussage (Existenzquantor). Im MedAT-Standardformat ist bei zwei universell bejahenden Prämissen die universelle Aussage 'Alle X sind Y' (Option A) die formal stärkere und primär zwingende Schlussfolgerung.\n• Option D ('Einige Phagozyten sind keine immunkompetenten Zellen') behauptet die Existenz von Elementen in P \\ I, was mit P ⊆ I logisch unvereinbar ist.\n• Option E ist falsch, da mit Option A eine zwingend richtige Konklusion vorliegt.",
  },
  {
    id: "KFF-IE-GP2-002",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 2,
    difficulty: "Leicht",
    ruleType: "modus_celarent",
    premises: [
      "Alle Prionen sind infektiöse Proteine.",
      "Alle infektiösen Proteine sind keine Nukleinsäure-haltigen Erreger.",
    ],
    options: {
      A: "Alle Prionen sind Nukleinsäure-haltige Erreger.",
      B: "Alle Prionen sind keine Nukleinsäure-haltigen Erreger.",
      C: "Einige Prionen sind Nukleinsäure-haltige Erreger.",
      D: "Einige Prionen sind keine Nukleinsäure-haltigen Erreger.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Prionen (P) sind infektiöse Proteine (I) [P ⊆ I].\n• Prämisse 2: Alle infektiösen Proteine (I) sind keine Nukleinsäure-haltigen Erreger (N) [I ∩ N = ∅].\n• Logische Struktur: Universell verneinender Syllogismus (Modus Celarent, 1. Figur: E-A-E).\n• Deduktion: Die Menge P liegt vollständig in I. Da I und N disjunkt sind (keine gemeinsamen Schnittpunkte besitzen), kann auch kein Element von P in N liegen (P ∩ N = ∅). Folglich gilt zwingend: Alle Prionen sind keine Nukleinsäure-haltigen Erreger.\n\nDistraktoren-Analyse:\n• Option A ('Alle Prionen sind Nukleinsäure-haltige Erreger') behauptet das Gegenteil der bewiesenen Disjunktheit.\n• Option B ist zwingend richtig, da aus P ⊆ I und I ∩ N = ∅ zwingend P ∩ N = ∅ folgt.\n• Option C ('Einige Prionen sind Nukleinsäure-haltige Erreger') behauptet eine nicht-leere Schnittmenge (P ∩ N ≠ ∅), was Prämisse 2 widerspricht.\n• Option D ('Einige Prionen sind keine Nukleinsäure-haltigen Erreger') ist die schwächere partikuläre Negation; im MedAT-Format ist die vollständige universelle Negation (Option B) die geforderte exakte Konklusion.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-GP2-003",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 3,
    difficulty: "Leicht",
    ruleType: "modus_darii",
    premises: [
      "Einige Neurotransmitter sind Katecholamine.",
      "Alle Katecholamine sind Tyrosinderivate.",
    ],
    options: {
      A: "Alle Neurotransmitter sind Tyrosinderivate.",
      B: "Alle Neurotransmitter sind keine Tyrosinderivate.",
      C: "Einige Neurotransmitter sind Tyrosinderivate.",
      D: "Einige Neurotransmitter sind keine Tyrosinderivate.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige Neurotransmitter (N) sind Katecholamine (K) [N ∩ K ≠ ∅].\n• Prämisse 2: Alle Katecholamine (K) sind Tyrosinderivate (T) [K ⊆ T].\n• Logische Struktur: Partikulär bejahender Syllogismus (Modus Darii, 1. Figur: A-I-I).\n• Deduktion: Prämisse 1 garantiert die Existenz mindestens eines Elements x mit x ∈ N und x ∈ K. Da nach Prämisse 2 jedes Element von K auch in T liegt (K ⊆ T), gehört dieses x zwingend auch zu T (x ∈ N ∧ x ∈ T). Somit ist die Schnittmenge N ∩ T garantiert nicht leer: Einige Neurotransmitter sind Tyrosinderivate.\n\nDistraktoren-Analyse:\n• Option A ('Alle Neurotransmitter sind Tyrosinderivate') verallgemeinert unzulässig: Prämisse 1 betrifft nur 'einige' Neurotransmitter (z. B. Acetylcholin oder GABA sind keine Tyrosinderivate).\n• Option B ('Alle Neurotransmitter sind keine Tyrosinderivate') widerspricht der nachgewiesenen Existenz von Neurotransmittern, die als Katecholamine Tyrosinderivate sind.\n• Option C ist zwingend richtig, da die Schnittmenge N ∩ T durch die Prämissen zweifelsfrei bewiesen ist.\n• Option D ('Einige Neurotransmitter sind keine Tyrosinderivate') folgt nicht zwingend: Die Prämissen schließen nicht aus, dass in einem logischen Modell alle Neurotransmitter Tyrosinderivate sind ('Einige' bedeutet 'mindestens einer', schließt 'alle' aber formal nicht aus).\n• Option E ist falsch, da Option C zwingend folgt.",
  },
  {
    id: "KFF-IE-GP2-004",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 4,
    difficulty: "Mittel",
    ruleType: "modus_ferio",
    premises: [
      "Alle Steroidhormone sind keine Peptidketten.",
      "Einige Hormone sind Steroidhormone.",
    ],
    options: {
      A: "Alle Hormone sind Peptidketten.",
      B: "Alle Hormone sind keine Peptidketten.",
      C: "Einige Hormone sind Peptidketten.",
      D: "Einige Hormone sind keine Peptidketten.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Steroidhormone (S) sind keine Peptidketten (P) [S ∩ P = ∅].\n• Prämisse 2: Einige Hormone (H) sind Steroidhormone (S) [H ∩ S ≠ ∅].\n• Logische Struktur: Partikulär verneinender Syllogismus (Modus Ferio, 1. Figur: E-I-O).\n• Deduktion: Nach Prämisse 2 existiert mindestens ein Hormon x, das ein Steroidhormon ist (x ∈ H ∧ x ∈ S). Da nach Prämisse 1 kein Steroidhormon eine Peptidkette sein kann (S ∩ P = ∅), kann dieses x unter keinen Umständen zu P gehören (x ∉ P). Daraus folgt zwingend: Es gibt mindestens ein Hormon, das keine Peptidkette ist (∃x (x ∈ H ∧ x ∉ P)). Die Aussage 'Einige Hormone sind keine Peptidketten' ist zwingend wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle Hormone sind Peptidketten') widerspricht direkt der Tatsache, dass jene Hormone, die Steroide sind, keine Peptidketten sein können.\n• Option B ('Alle Hormone sind keine Peptidketten') ist nicht zwingend: Es ist logisch vereinbar, dass alle anderen Hormone Peptidketten sind.\n• Option C ('Einige Hormone sind Peptidketten') ist zwar biologisch wahr, formallogisch aber aus den Prämissen nicht ableitbar, da die Prämissen nicht ausschließen, dass alle Hormone Steroide sind.\n• Option D ist zwingend richtig, da jener Teil der Hormone, der aus Steroidhormonen besteht, garantiert peptidfrei ist.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
  {
    id: "KFF-IE-GP2-005",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 5,
    difficulty: "Mittel",
    ruleType: "fallacy_undistributed_middle",
    premises: [
      "Alle Neurone sind erregbare Zellen.",
      "Alle Myozyten sind erregbare Zellen.",
    ],
    options: {
      A: "Alle Neurone sind Myozyten.",
      B: "Alle Neurone sind keine Myozyten.",
      C: "Einige Neurone sind Myozyten.",
      D: "Einige Neurone sind keine Myozyten.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Neurone (N) sind erregbare Zellen (E) [N ⊆ E].\n• Prämisse 2: Alle Myozyten (M) sind erregbare Zellen (E) [M ⊆ E].\n• Logische Struktur: Fehlschluss des unverteilten Mittelbegriffs (Fallacy of the Undistributed Middle).\n• Deduktion: Der Mittelbegriff E fungiert in beiden Prämissen als Prädikat einer universell bejahenden Aussage und ist in keiner Prämisse distribuiert. Sowohl N als auch M sind Teilmengen von E. Daraus lässt sich über das Verhältnis zwischen N und M keine zwingende Aussage treffen:\n  - Modell 1: N ∩ M = ∅ (Neurone und Myozyten sind disjunkt).\n  - Modell 2: N ⊆ M (alle Neurone wären Myozyten).\n  - Modell 3: N ∩ M ≠ ∅ und N \\ M ≠ ∅ (teilweiser Überlapp).\nDa jedes dieser Modelle mit beiden Prämissen vollständig widerspruchsfrei vereinbar ist, lässt sich keine der Aussagen A bis D als zwingend beweisen.\n\nDistraktoren-Analyse:\n• Option A ('Alle Neurone sind Myozyten') ist in Modell 1 falsch.\n• Option B ('Alle Neurone sind keine Myozyten') ist in Modell 2 falsch.\n• Option C ('Einige Neurone sind Myozyten') ist in Modell 1 falsch.\n• Option D ('Einige Neurone sind keine Myozyten') ist in Modell 2 falsch.\n• Option E ist zwingend richtig, da keine der Schlussfolgerungen A bis D in allen gültigen Modellen gilt.",
  },
  {
    id: "KFF-IE-GP2-006",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 6,
    difficulty: "Mittel",
    ruleType: "modus_barbara",
    premises: [
      "Alle basischen Kernproteine sind DNA-bindende Proteine.",
      "Alle Histone sind basische Kernproteine.",
    ],
    options: {
      A: "Alle Histone sind DNA-bindende Proteine.",
      B: "Alle Histone sind keine DNA-bindenden Proteine.",
      C: "Einige Histone sind DNA-bindende Proteine.",
      D: "Einige Histone sind keine DNA-bindenden Proteine.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle basischen Kernproteine (B) sind DNA-bindende Proteine (D) [B ⊆ D].\n• Prämisse 2: Alle Histone (H) sind basische Kernproteine (B) [H ⊆ B].\n• Logische Struktur: Kettenschluss (Modus Barbara, 1. Figur: A-A-A).\n• Deduktion: Aus H ⊆ B und B ⊆ D folgt unmittelbar H ⊆ D. Alle Histone sind folglich ausnahmslos DNA-bindende Proteine.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig: Die Teilmengenbeziehung H ⊆ D folgt mathematisch direkt aus der Transitivität der Inklusion.\n• Option B ('Alle Histone sind keine DNA-bindenden Proteine') behauptet die Disjunktheit H ∩ D = ∅, was H ⊆ D direkt widerspricht.\n• Option C ('Einige Histone sind DNA-bindende Proteine') ist partikulär; im MedAT-Format ist bei zwei universellen Prämissen die universelle Konklusion (Option A) die formal stärkere und primäre Antwort.\n• Option D ('Einige Histone sind keine DNA-bindenden Proteine') behauptet H \\ D ≠ ∅, was mit H ⊆ D unvereinbar ist.\n• Option E ist falsch, da Option A zwingend folgt.",
  },
  {
    id: "KFF-IE-GP2-007",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 7,
    difficulty: "Mittel",
    ruleType: "modus_camestres",
    premises: [
      "Alle Hepatozyten sind Zellen mit Mitochondrien.",
      "Alle reifen Erythrozyten sind keine Zellen mit Mitochondrien.",
    ],
    options: {
      A: "Alle reifen Erythrozyten sind Hepatozyten.",
      B: "Alle reifen Erythrozyten sind keine Hepatozyten.",
      C: "Einige reife Erythrozyten sind Hepatozyten.",
      D: "Einige reife Erythrozyten sind keine Hepatozyten.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Hepatozyten (H) sind Zellen mit Mitochondrien (M) [H ⊆ M].\n• Prämisse 2: Alle reifen Erythrozyten (E) sind keine Zellen mit Mitochondrien (M) [E ∩ M = ∅].\n• Logische Struktur: Modus Camestres (2. Figur: A-E-E).\n• Deduktion: Da die gesamte Menge H innerhalb von M liegt und E vollständig disjunkt zu M ist, kann kein Element von E jemals in H liegen (E ∩ H = ∅). Folglich gilt zwingend: Alle reifen Erythrozyten sind keine Hepatozyten.\n\nDistraktoren-Analyse:\n• Option A ('Alle reifen Erythrozyten sind Hepatozyten') behauptet E ⊆ H, was der Disjunktheit E ∩ H = ∅ diametral widerspricht.\n• Option B ist zwingend richtig: Aus H ⊆ M und E ∩ M = ∅ folgt unweigerlich E ∩ H = ∅.\n• Option C ('Einige reife Erythrozyten sind Hepatozyten') behauptet eine nicht-leere Schnittmenge E ∩ H ≠ ∅, was logisch unmöglich ist.\n• Option D ('Einige reife Erythrozyten sind keine Hepatozyten') ist die schwächere partikuläre Negation; Option B ist die vollständige und stärkere universelle Negation.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-GP2-008",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 8,
    difficulty: "Mittel",
    ruleType: "modus_disamis",
    premises: [
      "Einige Alkaloide sind ZNS-gängige Substanzen.",
      "Alle Alkaloide sind pflanzliche Sekundärmetabolite.",
    ],
    options: {
      A: "Alle pflanzlichen Sekundärmetabolite sind ZNS-gängige Substanzen.",
      B: "Alle pflanzlichen Sekundärmetabolite sind keine ZNS-gängigen Substanzen.",
      C: "Einige pflanzliche Sekundärmetabolite sind ZNS-gängige Substanzen.",
      D: "Einige pflanzliche Sekundärmetabolite sind keine ZNS-gängigen Substanzen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige Alkaloide (A) sind ZNS-gängige Substanzen (Z) [A ∩ Z ≠ ∅].\n• Prämisse 2: Alle Alkaloide (A) sind pflanzliche Sekundärmetabolite (P) [A ⊆ P].\n• Logische Struktur: Modus Disamis (3. Figur: I-A-I).\n• Deduktion: Prämisse 1 sichert die Existenz mindestens eines Alkaloids x, das ZNS-gängig ist (x ∈ A ∧ x ∈ Z). Da nach Prämisse 2 alle Alkaloide pflanzliche Sekundärmetabolite sind (A ⊆ P), muss dieses x auch zu P gehören (x ∈ P). Damit gehört x sowohl zu P als auch zu Z (x ∈ P ∧ x ∈ Z). Die Schnittmenge P ∩ Z ist folglich garantiert nicht leer: Einige pflanzliche Sekundärmetabolite sind ZNS-gängige Substanzen.\n\nDistraktoren-Analyse:\n• Option A ('Alle pflanzlichen Sekundärmetabolite sind ZNS-gängige Substanzen') verallgemeinert unzulässig: Es kann pflanzliche Sekundärmetabolite geben, die nicht ZNS-gängig sind (z. B. Gerbstoffe).\n• Option B ('Alle pflanzlichen Sekundärmetabolite sind keine ...') widerspricht der nachgewiesenen Schnittmenge P ∩ Z ≠ ∅.\n• Option C ist zwingend richtig, da jene pflanzlichen Sekundärmetabolite, die Alkaloide sind, garantiert ZNS-gängig sind.\n• Option D ('Einige pflanzliche Sekundärmetabolite sind keine ...') folgt nicht zwingend: Es ist logisch denkbar, dass zufällig alle pflanzlichen Sekundärmetabolite ZNS-gängig sind.\n• Option E ist falsch, da Option C zwingend folgt.",
  },
  {
    id: "KFF-IE-GP2-009",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 9,
    difficulty: "Schwer",
    ruleType: "modus_baroco",
    premises: [
      "Alle Antikörper-produzierenden Plasmazellen sind Zellen mit erweitertem endoplasmatischem Retikulum.",
      "Einige zirkulierende Leukozyten sind keine Zellen mit erweitertem endoplasmatischem Retikulum.",
    ],
    options: {
      A: "Alle zirkulierenden Leukozyten sind Antikörper-produzierende Plasmazellen.",
      B: "Alle zirkulierenden Leukozyten sind keine Antikörper-produzierenden Plasmazellen.",
      C: "Einige zirkulierende Leukozyten sind Antikörper-produzierende Plasmazellen.",
      D: "Einige zirkulierende Leukozyten sind keine Antikörper-produzierenden Plasmazellen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Antikörper-produzierenden Plasmazellen (P) sind Zellen mit erweitertem endoplasmatischem Retikulum (E) [P ⊆ E].\n• Prämisse 2: Einige zirkulierende Leukozyten (L) sind keine Zellen mit erweitertem endoplasmatischem Retikulum (E) [L \\ E ≠ ∅].\n• Logische Struktur: Modus Baroco (2. Figur: A-O-O).\n• Deduktion: Prämisse 2 garantiert die Existenz mindestens eines Leukozyten x, der kein erweitertes ER besitzt (x ∈ L ∧ x ∉ E). Da nach Prämisse 1 alle Antikörper-produzierenden Plasmazellen zwingend ein erweitertes ER besitzen müssen (P ⊆ E), kann kein Element außerhalb von E zu P gehören (x ∉ E ⇒ x ∉ P). Da dieses Element x jedoch in L liegt, existiert mindestens ein zirkulierender Leukozyt, der keine Antikörper-produzierende Plasmazelle ist (x ∈ L ∧ x ∉ P). Daraus folgt zwingend: Einige zirkulierende Leukozyten sind keine Antikörper-produzierenden Plasmazellen.\n\nDistraktoren-Analyse:\n• Option A ('Alle zirkulierenden Leukozyten sind Antikörper-produzierende Plasmazellen') steht im direkten Widerspruch zu der Existenz von Leukozyten ohne erweitertes ER, die damit außerhalb von P liegen.\n• Option B ('Alle zirkulierenden Leukozyten sind keine ...') ist nicht zwingend: Es ist logisch möglich, dass andere zirkulierende Leukozyten (mit erweitertem ER) sehr wohl Plasmazellen sind.\n• Option C ('Einige zirkulierende Leukozyten sind ...') folgt nicht zwingend: Es ist mit den Prämissen vereinbar, dass gar keine zirkulierenden Leukozyten Plasmazellen sind.\n• Option D ist zwingend richtig, da jene Leukozyten ohne erweitertes ER unmöglich Antikörper-produzierende Plasmazellen sein können.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
  {
    id: "KFF-IE-GP2-010",
    simulationId: "generalprobe-2",
    subtest: "IE",
    questionNumber: 10,
    difficulty: "Schwer",
    ruleType: "fallacy_negative_premises",
    premises: [
      "Alle Plasmide sind keine chromosomalen DNA-Moleküle.",
      "Alle mitochondrialen DNA-Moleküle sind keine chromosomalen DNA-Moleküle.",
    ],
    options: {
      A: "Alle Plasmide sind mitochondriale DNA-Moleküle.",
      B: "Alle Plasmide sind keine mitochondrialen DNA-Moleküle.",
      C: "Einige Plasmide sind mitochondriale DNA-Moleküle.",
      D: "Einige Plasmide sind keine mitochondrialen DNA-Moleküle.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Plasmide (P) sind keine chromosomalen DNA-Moleküle (C) [P ∩ C = ∅].\n• Prämisse 2: Alle mitochondrialen DNA-Moleküle (M) sind keine chromosomalen DNA-Moleküle (C) [M ∩ C = ∅].\n• Logische Struktur: Fehlschluss zweier verneinender Prämissen (Fallacy of Exclusive Premises / Negative Syllogism Fallacy).\n• Deduktion: Aus zwei negativen Prämissen lässt sich im Syllogismus niemals eine zwingende Beziehung zwischen den Außenbegriffen P (Plasmide) und M (mitochondriale DNA) ableiten. Beide Mengen P und M sind disjunkt zu C, können aber zueinander in beliebigen mengentheoretischen Relationen stehen:\n  - Modell 1: P ∩ M = ∅ (Plasmide und mitochondriale DNA sind disjunkt; Option B wäre wahr, A/C falsch).\n  - Modell 2: P ⊆ M (Plasmide liegen hypothetisch vollständig innerhalb von M; Option A wäre wahr, B/D falsch).\n  - Modell 3: P und M überschneiden sich teilweise (Option C und D wären wahr, A und B falsch).\nDa jedes dieser Modelle mit beiden Prämissen vollständig widerspruchsfrei vereinbar ist, lässt sich keine der Aussagen A bis D als zwingend beweisen.\n\nDistraktoren-Analyse:\n• Option A ('Alle Plasmide sind mitochondriale DNA-Moleküle') ist in Modell 1 falsch.\n• Option B ('Alle Plasmide sind keine mitochondrialen DNA-Moleküle') ist in Modell 2 falsch.\n• Option C ('Einige Plasmide sind mitochondriale DNA-Moleküle') ist in Modell 1 falsch.\n• Option D ('Einige Plasmide sind keine mitochondrialen DNA-Moleküle') ist in Modell 2 falsch.\n• Option E ist zwingend richtig, da aus zwei negativen Prämissen keine der Konklusionen A bis D allgemeingültig folgt.",
  },
];

export const GENERALPROBE_2_IE_SIMULATION_DATA: IeSimulationData = {
  simulationId: "generalprobe-2",
  simNumber: 2,
  title: "MedAT-H Generalprobe #2 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Formale Logik & Syllogismen",
  timeLimitSeconds: 10 * 60,
  questions: RAW_GENERALPROBE_2_IE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #2 runtime and review engine
 */
export const GENERALPROBE_2_IE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_2_IE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");

    return {
      id: `KFF-IE-GP2-${numStr}`,
      legacyId: `ie-sim2-q${String(idx + 1).padStart(2, "0")}`,
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
      tags: ["KFF", "IE", "Implikationen erkennen", "Logik", "Generalprobe #2", `KFF-IE-GP2-${numStr}`],
      source: "medat-original",
      version: "2026.1",
      setOrder: 2,
      ieData: {
        ...q,
        id: `KFF-IE-GP2-${numStr}`,
        legacyId: `ie-sim2-q${String(idx + 1).padStart(2, "0")}`,
      },
    } as StoredQuestion & { ieData: IeQuestionData };
  }
);
