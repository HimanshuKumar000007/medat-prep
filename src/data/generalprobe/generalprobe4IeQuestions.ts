/**
 * MedAT-H KFF — Implikationen erkennen (IE) — Generalprobe #4
 * Exactly 10 Original, Formally Verified Logical Deduction Questions
 * 
 * IDs: KFF-IE-GP4-001 through KFF-IE-GP4-010 (aliased to ie-sim4-q01 .. q10)
 * 
 * Specifications:
 * - Exactly 10 Questions, 10 Minutes (600 seconds)
 * - Neutral, formal categorical logic scenarios (Optics, horology, mineralogy, archaeology, marine biology, acoustics, entomology, meteorology, dendrology, glaciology)
 * - Strict MedAT-H formal syllogism format: Two explicit premises and 5 conclusion categories:
 *     A: Alle X sind Y.
 *     B: Alle X sind keine Y.
 *     C: Einige X sind Y.
 *     D: Einige X sind keine Y.
 *     E: Keine der Schlussfolgerungen A–D ist richtig.
 * - Perfectly balanced answer distribution: exactly 2 A, 2 B, 2 C, 2 D, 2 E
 *     Sequence: C, A, B, D, E, A, C, B, D, E (0 consecutive identical keys)
 * - Rigorous difficulty calibration: exactly 3 Leicht, 5 Mittel, 2 Schwer
 * - Formal validity: Each question verified across all 256 Venn model assignments using set inclusion, disjunction, and existential models
 * - Complete explanations: Formal deduction, set relation / syllogistic mood, and exhaustive distractor analysis for all 5 options (A–E)
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { IeQuestionData, IeSimulationData } from "../questions/ie/types";

export const RAW_GENERALPROBE_4_IE_QUESTIONS: IeQuestionData[] = [
  {
    id: "KFF-IE-GP4-001",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 1,
    difficulty: "Leicht",
    ruleType: "modus_darii",
    premises: [
      "Einige Spiegelteleskope sind Parabolspiegel-Systeme.",
      "Alle Parabolspiegel-Systeme sind reflexionsoptische Instrumente.",
    ],
    options: {
      A: "Alle Spiegelteleskope sind reflexionsoptische Instrumente.",
      B: "Alle Spiegelteleskope sind keine reflexionsoptischen Instrumente.",
      C: "Einige Spiegelteleskope sind reflexionsoptische Instrumente.",
      D: "Einige Spiegelteleskope sind keine reflexionsoptischen Instrumente.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige Spiegelteleskope (S) sind Parabolspiegel-Systeme (P) [S ∩ P ≠ ∅].\n• Prämisse 2: Alle Parabolspiegel-Systeme (P) sind reflexionsoptische Instrumente (R) [P ⊆ R].\n• Logische Struktur: Partikulär bejahender Syllogismus (Modus Darii, 1. Figur: A-I-I). Der Mittelbegriff ist P (Parabolspiegel-Systeme).\n• Deduktion: Prämisse 1 garantiert die Existenz mindestens eines Spiegelteleskops x, das ein Parabolspiegel-System ist (x ∈ S ∧ x ∈ P). Da nach Prämisse 2 ausnahmslos jedes Parabolspiegel-System ein reflexionsoptisches Instrument ist (P ⊆ R), muss dieses Element x zwingend auch zu R gehören (x ∈ R). Folglich gehört x sowohl zu S als auch zu R (x ∈ S ∧ x ∈ R). Die Schnittmenge S ∩ R ist damit nachweislich nicht leer: Einige Spiegelteleskope sind reflexionsoptische Instrumente.\n\nDistraktoren-Analyse:\n• Option A ('Alle Spiegelteleskope sind reflexionsoptische Instrumente') verallgemeinert unzulässig: Prämisse 1 betrifft nur 'einige' Spiegelteleskope. Andere Spiegelteleskope könnten andere optische Konstruktionen aufweisen; die universelle Inklusion S ⊆ R ist aus den Prämissen nicht ableitbar.\n• Option B ('Alle Spiegelteleskope sind keine reflexionsoptischen Instrumente') behauptet die Disjunktheit S ∩ R = ∅ und widerspricht damit direkt der bewiesenen Existenz von Spiegelteleskopen in S ∩ R.\n• Option C ist zwingend richtig: Aus S ∩ P ≠ ∅ und P ⊆ R folgt unweigerlich S ∩ R ≠ ∅ in jedem konsistenten Modell.\n• Option D ('Einige Spiegelteleskope sind keine reflexionsoptischen Instrumente') folgt nicht zwingend: In einem logischen Modell, in dem zufällig alle Spiegelteleskope Parabolspiegel-Systeme sind, wäre S \\ R leer ('Einige' bedeutet 'mindestens eins', schließt aber 'alle' logisch nicht aus).\n• Option E ist falsch, da mit Option C eine zwingend richtige Konklusion vorliegt.",
  },
  {
    id: "KFF-IE-GP4-002",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 2,
    difficulty: "Leicht",
    ruleType: "modus_barbara",
    premises: [
      "Alle Marinechronometer sind Hemmungsuhrwerke.",
      "Alle Hemmungsuhrwerke sind zeitmessende Präzisionsinstrumente.",
    ],
    options: {
      A: "Alle Marinechronometer sind zeitmessende Präzisionsinstrumente.",
      B: "Alle Marinechronometer sind keine zeitmessenden Präzisionsinstrumente.",
      C: "Einige Marinechronometer sind zeitmessende Präzisionsinstrumente.",
      D: "Einige Marinechronometer sind keine zeitmessenden Präzisionsinstrumente.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Marinechronometer (M) sind Hemmungsuhrwerke (H) [M ⊆ H].\n• Prämisse 2: Alle Hemmungsuhrwerke (H) sind zeitmessende Präzisionsinstrumente (P) [H ⊆ P].\n• Syllogistische Struktur: Klassischer Kettenschluss (Modus Barbara, 1. Figur, A-A-A). Der Mittelbegriff H (Hemmungsuhrwerke) verbindet das Subjekt M mit dem Prädikat P.\n• Deduktion: Da die Klasse M vollständig in H enthalten ist (M ⊆ H) und H wiederum eine echte oder unechte Teilmenge von P darstellt (H ⊆ P), folgt unmittelbar aus der Transitivität der mengentheoretischen Inklusion: M ⊆ P. Ausnahmslos jedes Marinechronometer ist folglich ein zeitmessendes Präzisionsinstrument.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig: Die universelle Aussage M ⊆ P folgt unmittelbar und ausnahmslos aus den beiden Prämissen.\n• Option B ('Alle Marinechronometer sind keine zeitmessenden Präzisionsinstrumente') behauptet die vollständige Disjunktheit M ∩ P = ∅. In jedem Modell mit existierenden Marinechronometern (M ≠ ∅) wird diese Behauptung durch die bewiesene Inklusion M ⊆ P unmittelbar widerlegt.\n• Option C ('Einige Marinechronometer sind zeitmessende Präzisionsinstrumente') formuliert eine partikuläre Aussage (∃x (M(x) ∧ P(x))). Im MedAT-Standardformat ist bei zwei universell bejahenden Prämissen die universelle Aussage 'Alle X sind Y' (Option A) die formal stärkere und primäre Schlussfolgerung.\n• Option D ('Einige Marinechronometer sind keine zeitmessenden Präzisionsinstrumente') behauptet die Existenz von Elementen in M \\ P, was im direkten Widerspruch zu M ⊆ P steht.\n• Option E ist falsch, da mit Option A eine zwingend richtige Konklusion vorliegt.",
  },
  {
    id: "KFF-IE-GP4-003",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 3,
    difficulty: "Leicht",
    ruleType: "modus_celarent",
    premises: [
      "Alle Obsidiansteine sind vulkanische Gläser.",
      "Alle vulkanischen Gläser sind keine kristallinen Mineralgefüge.",
    ],
    options: {
      A: "Alle Obsidiansteine sind kristalline Mineralgefüge.",
      B: "Alle Obsidiansteine sind keine kristallinen Mineralgefüge.",
      C: "Einige Obsidiansteine sind kristalline Mineralgefüge.",
      D: "Einige Obsidiansteine sind keine kristallinen Mineralgefüge.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Obsidiansteine (O) sind vulkanische Gläser (G) [O ⊆ G].\n• Prämisse 2: Alle vulkanischen Gläser (G) sind keine kristallinen Mineralgefüge (K) [G ∩ K = ∅].\n• Syllogistische Struktur: Universell verneinender Syllogismus (Modus Celarent, 1. Figur, E-A-E). Der Mittelbegriff ist G (vulkanische Gläser).\n• Deduktion: Die Menge O ist vollständig in G enthalten. Da G und K disjunkt sind (keine gemeinsamen Elemente teilen), kann auch kein Element von O in K liegen (O ∩ K = ∅). Folglich gilt zwingend: Alle Obsidiansteine sind keine kristallinen Mineralgefüge.\n\nDistraktoren-Analyse:\n• Option A ('Alle Obsidiansteine sind kristalline Mineralgefüge') behauptet O ⊆ K, was der bewiesenen Disjunktheit O ∩ K = ∅ diametral widerspricht.\n• Option B ist zwingend richtig: Aus O ⊆ G und G ∩ K = ∅ folgt mathematisch unweigerlich O ∩ K = ∅ in jedem Modell.\n• Option C ('Einige Obsidiansteine sind kristalline Mineralgefüge') behauptet eine nicht-leere Schnittmenge O ∩ K ≠ ∅, was durch Prämisse 2 logisch ausgeschlossen ist.\n• Option D ('Einige Obsidiansteine sind keine kristallinen Mineralgefüge') formuliert die schwächere partikuläre Negation und setzt O ≠ ∅ voraus; im MedAT-Format ist die vollständige universelle Negation (Option B) die geforderte exakte Konklusion.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-GP4-004",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 4,
    difficulty: "Mittel",
    ruleType: "modus_ferio",
    premises: [
      "Alle antiken Münzprägungen sind keine korrosionsanfälligen Eisenobjekte.",
      "Einige archäologische Grabungsfunde sind antike Münzprägungen.",
    ],
    options: {
      A: "Alle archäologischen Grabungsfunde sind korrosionsanfällige Eisenobjekte.",
      B: "Alle archäologischen Grabungsfunde sind keine korrosionsanfälligen Eisenobjekte.",
      C: "Einige archäologische Grabungsfunde sind korrosionsanfällige Eisenobjekte.",
      D: "Einige archäologische Grabungsfunde sind keine korrosionsanfälligen Eisenobjekte.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle antiken Münzprägungen (M) sind keine korrosionsanfälligen Eisenobjekte (E) [M ∩ E = ∅].\n• Prämisse 2: Einige archäologische Grabungsfunde (G) sind antike Münzprägungen (M) [G ∩ M ≠ ∅].\n• Logische Struktur: Partikulär verneinender Syllogismus (Modus Ferio, 1. Figur: E-I-O). Der Mittelbegriff ist M.\n• Deduktion: Nach Prämisse 2 existiert mindestens ein Grabungsfund x, der eine antike Münzprägung ist (x ∈ G ∧ x ∈ M). Da nach Prämisse 1 keine antike Münzprägung ein korrosionsanfälliges Eisenobjekt sein kann (M ∩ E = ∅), kann dieses x keinesfalls zu E gehören (x ∉ E). Daraus folgt unumstößlich: Es gibt mindestens einen archäologischen Grabungsfund, der kein korrosionsanfälliges Eisenobjekt ist (∃x (x ∈ G ∧ x ∉ E)). Die Aussage 'Einige archäologische Grabungsfunde sind keine korrosionsanfälligen Eisenobjekte' ist zwingend wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle archäologischen Grabungsfunde sind korrosionsanfällige Eisenobjekte') widerspricht direkt der Tatsache, dass jene Grabungsfunde, die antike Münzprägungen sind, garantiert nicht zu E gehören.\n• Option B ('Alle archäologischen Grabungsfunde sind keine korrosionsanfälligen Eisenobjekte') ist nicht zwingend: Andere archäologische Grabungsfunde (z. B. eiserne Nägel oder Lanzenspitzen) können durchaus korrosionsanfällige Eisenobjekte sein.\n• Option C ('Einige archäologische Grabungsfunde sind korrosionsanfällige Eisenobjekte') ist aus den Prämissen nicht ableitbar, da die Prämissen nicht ausschließen, dass alle Grabungsfunde aus Bronze oder Keramik bestehen.\n• Option D ist zwingend richtig, da jene Grabungsfunde, die Münzprägungen sind, garantiert eisenfrei sind.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
  {
    id: "KFF-IE-GP4-005",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 5,
    difficulty: "Mittel",
    ruleType: "fallacy_undistributed_middle",
    premises: [
      "Alle Tiefsee-Radiolarien sind Organismen mit amorphen Kieselgehäusen.",
      "Alle benthischen Kieselalgen sind Organismen mit amorphen Kieselgehäusen.",
    ],
    options: {
      A: "Alle Tiefsee-Radiolarien sind benthische Kieselalgen.",
      B: "Alle Tiefsee-Radiolarien sind keine benthischen Kieselalgen.",
      C: "Einige Tiefsee-Radiolarien sind benthische Kieselalgen.",
      D: "Einige Tiefsee-Radiolarien sind keine benthischen Kieselalgen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Tiefsee-Radiolarien (R) sind Organismen mit amorphen Kieselgehäusen (K) [R ⊆ K].\n• Prämisse 2: Alle benthischen Kieselalgen (A) sind Organismen mit amorphen Kieselgehäusen (K) [A ⊆ K].\n• Logische Struktur: Fehlschluss des unverteilten Mittelbegriffs (Fallacy of the Undistributed Middle, 2. Figur: A-A). Der Mittelbegriff K fungiert in beiden Prämissen als Prädikat einer universell bejahenden Aussage und ist in keiner Prämisse distribuiert.\n• Modelltheoretische Analyse (Gegenmodelle):\nSowohl R als auch A sind Teilmengen der Oberklasse K. Über die wechselseitige Beziehung zwischen R und A lässt sich formallogisch keine zwingende Aussage treffen:\n  - Modell 1 (Disjunktion: R ∩ A = ∅): R und A liegen getrennt innerhalb von K. Hier gilt Option B (R ∩ A = ∅) und Option D (R \\ A ≠ ∅), während Option A und C falsch sind.\n  - Modell 2 (Inklusion: R ⊆ A mit R ≠ ∅): R ist eine Teilmenge von A. Hier gilt Option A (R ⊆ A) und Option C (R ∩ A ≠ ∅), während Option B und D falsch sind.\n  - Modell 3 (Partieller Überlapp: R ∩ A ≠ ∅ und R \\ A ≠ ∅): Hier gelten Option C und D, während Option A und B falsch sind.\nDa Option A und C in Modell 1 widerlegt werden und Option B und D in Modell 2 widerlegt werden, ist keine der Aussagen A bis D in allen gültigen Modellen wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle Tiefsee-Radiolarien sind benthische Kieselalgen') ist in Modell 1 falsch.\n• Option B ('Alle Tiefsee-Radiolarien sind keine benthischen Kieselalgen') ist in Modell 2 falsch.\n• Option C ('Einige Tiefsee-Radiolarien sind benthische Kieselalgen') ist in Modell 1 falsch.\n• Option D ('Einige Tiefsee-Radiolarien sind keine benthischen Kieselalgen') ist in Modell 2 falsch.\n• Option E ist zwingend richtig, da keine der Konklusionen A–D allgemeingültig aus den Prämissen folgt.",
  },
  {
    id: "KFF-IE-GP4-006",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 6,
    difficulty: "Mittel",
    ruleType: "modus_barbara",
    premises: [
      "Alle akustischen Schwingungshohlräume sind frequenzselektive Schalldämpfer.",
      "Alle Helmholtz-Resonatoren sind akustische Schwingungshohlräume.",
    ],
    options: {
      A: "Alle Helmholtz-Resonatoren sind frequenzselektive Schalldämpfer.",
      B: "Alle Helmholtz-Resonatoren sind keine frequenzselektiven Schalldämpfer.",
      C: "Einige Helmholtz-Resonatoren sind frequenzselektive Schalldämpfer.",
      D: "Einige Helmholtz-Resonatoren sind keine frequenzselektiven Schalldämpfer.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle akustischen Schwingungshohlräume (S) sind frequenzselektive Schalldämpfer (F) [S ⊆ F].\n• Prämisse 2: Alle Helmholtz-Resonatoren (H) sind akustische Schwingungshohlräume (S) [H ⊆ S].\n• Syllogistische Struktur: Kettenschluss (Modus Barbara, 1. Figur, A-A-A). In klassischer Formulierung ist Prämisse 1 der Obersatz (M ⊆ P, mit M = akustische Schwingungshohlräume, P = frequenzselektive Schalldämpfer) und Prämisse 2 der Untersatz (S' ⊆ M, mit S' = Helmholtz-Resonatoren).\n• Deduktion: Aus H ⊆ S und S ⊆ F folgt durch die Transitivität der Teilmengenrelation unmittelbar H ⊆ F. Alle Helmholtz-Resonatoren sind folglich ausnahmslos frequenzselektive Schalldämpfer.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig: Die universelle Teilmengenbeziehung H ⊆ F folgt formal direkt aus beiden Prämissen.\n• Option B ('Alle Helmholtz-Resonatoren sind keine frequenzselektiven Schalldämpfer') behauptet H ∩ F = ∅, was bei existierenden Resonatoren (H ≠ ∅) der bewiesenen Inklusion H ⊆ F widerspricht.\n• Option C ('Einige Helmholtz-Resonatoren sind frequenzselektive Schalldämpfer') formuliert die partikuläre Existenzaussage; im MedAT-Format ist bei zwei universellen Prämissen die universelle Aussage 'Alle X sind Y' (Option A) die formal stärkere und primäre Antwort.\n• Option D ('Einige Helmholtz-Resonatoren sind keine frequenzselektiven Schalldämpfer') behauptet H \\ F ≠ ∅, was durch H ⊆ F logisch unmöglich ist.\n• Option E ist falsch, da mit Option A eine zwingend richtige Konklusion vorliegt.",
  },
  {
    id: "KFF-IE-GP4-007",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 7,
    difficulty: "Mittel",
    ruleType: "modus_disamis",
    premises: [
      "Einige biolumineszente Leuchtkäfer sind luciferinproduzierende Organismen.",
      "Alle biolumineszenten Leuchtkäfer sind nachtaktive Waldtiere.",
    ],
    options: {
      A: "Alle nachtaktiven Waldtiere sind luciferinproduzierende Organismen.",
      B: "Alle nachtaktiven Waldtiere sind keine luciferinproduzierenden Organismen.",
      C: "Einige nachtaktive Waldtiere sind luciferinproduzierende Organismen.",
      D: "Einige nachtaktive Waldtiere sind keine luciferinproduzierenden Organismen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige biolumineszente Leuchtkäfer (L) sind luciferinproduzierende Organismen (O) [L ∩ O ≠ ∅].\n• Prämisse 2: Alle biolumineszenten Leuchtkäfer (L) sind nachtaktive Waldtiere (W) [L ⊆ W].\n• Logische Struktur: Modus Disamis (3. Figur: I-A-I). Der Mittelbegriff ist L (biolumineszente Leuchtkäfer).\n• Deduktion: Prämisse 1 sichert die Existenz mindestens eines Leuchtkäfers x, der ein luciferinproduzierender Organismus ist (x ∈ L ∧ x ∈ O). Da nach Prämisse 2 alle Leuchtkäfer nachtaktive Waldtiere sind (L ⊆ W), muss dieses x auch zu W gehören (x ∈ W). Damit gehört x sowohl zu W als auch zu O (x ∈ W ∧ x ∈ O). Die Schnittmenge W ∩ O ist somit garantiert nicht leer: Einige nachtaktive Waldtiere sind luciferinproduzierende Organismen.\n\nDistraktoren-Analyse:\n• Option A ('Alle nachtaktiven Waldtiere sind luciferinproduzierende Organismen') verallgemeinert unzulässig: Es gibt viele nachtaktive Waldtiere (z. B. Eulen, Fledermäuse), die kein Luciferin produzieren.\n• Option B ('Alle nachtaktiven Waldtiere sind keine luciferinproduzierenden Organismen') widerspricht der nachgewiesenen Schnittmenge W ∩ O ≠ ∅.\n• Option C ist zwingend richtig, da jene Waldtiere, die als Leuchtkäfer Luciferin erzeugen, garantiert existieren.\n• Option D ('Einige nachtaktive Waldtiere sind keine luciferinproduzierenden Organismen') folgt nicht zwingend: In einem logischen Modell, in dem die gesamte Tierwelt der Domäne nur aus luciferinproduzierenden Leuchtkäfern bestünde, wäre W \\ O leer.\n• Option E ist falsch, da Option C zwingend folgt.",
  },
  {
    id: "KFF-IE-GP4-008",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 8,
    difficulty: "Mittel",
    ruleType: "modus_camestres",
    premises: [
      "Alle polaren Stratosphärenwolken sind eispartikelhaltige Hochatmosphärenwolken.",
      "Alle troposphärischen Wärmegewitter sind keine eispartikelhaltigen Hochatmosphärenwolken.",
    ],
    options: {
      A: "Alle troposphärischen Wärmegewitter sind polare Stratosphärenwolken.",
      B: "Alle troposphärischen Wärmegewitter sind keine polaren Stratosphärenwolken.",
      C: "Einige troposphärische Wärmegewitter sind polare Stratosphärenwolken.",
      D: "Einige troposphärische Wärmegewitter sind keine polaren Stratosphärenwolken.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle polaren Stratosphärenwolken (P) sind eispartikelhaltige Hochatmosphärenwolken (H) [P ⊆ H].\n• Prämisse 2: Alle troposphärischen Wärmegewitter (W) sind keine eispartikelhaltigen Hochatmosphärenwolken (H) [W ∩ H = ∅].\n• Syllogistische Struktur: Modus Camestres (2. Figur, A-E-E). Der Mittelbegriff H fungiert in beiden Prämissen als Prädikat (P ⊆ H und W ∩ H = ∅).\n• Deduktion: Da die gesamte Menge P innerhalb von H liegt und W vollständig disjunkt zu H ist, kann kein Element von W jemals in P liegen (W ∩ P = ∅). Folglich gilt zwingend: Alle troposphärischen Wärmegewitter sind keine polaren Stratosphärenwolken.\n\nDistraktoren-Analyse:\n• Option A ('Alle troposphärischen Wärmegewitter sind polare Stratosphärenwolken') behauptet W ⊆ P, was der bewiesenen Disjunktheit W ∩ P = ∅ direkt widerspricht.\n• Option B ist zwingend richtig: Aus P ⊆ H und W ∩ H = ∅ folgt unweigerlich W ∩ P = ∅ für jedes beliebige Modell.\n• Option C ('Einige troposphärische Wärmegewitter sind polare Stratosphärenwolken') behauptet eine nicht-leere Schnittmenge W ∩ P ≠ ∅, was mit der bewiesenen Disjunktheit in allen Modellen unvereinbar ist.\n• Option D ('Einige troposphärische Wärmegewitter sind keine polaren Stratosphärenwolken') ist die schwächere partikuläre Negation und setzt W ≠ ∅ voraus; Option B ist die vollständige, stärkere universelle Negation.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-GP4-009",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 9,
    difficulty: "Schwer",
    ruleType: "modus_baroco",
    premises: [
      "Alle sommergrünen Auenbäume sind laubabwerfende Hartholzgewächse.",
      "Einige Gebirgswald-Koniferen sind keine laubabwerfenden Hartholzgewächse.",
    ],
    options: {
      A: "Alle Gebirgswald-Koniferen sind sommergrüne Auenbäume.",
      B: "Alle Gebirgswald-Koniferen sind keine sommergrünen Auenbäume.",
      C: "Einige Gebirgswald-Koniferen sind sommergrüne Auenbäume.",
      D: "Einige Gebirgswald-Koniferen sind keine sommergrünen Auenbäume.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle sommergrünen Auenbäume (A) sind laubabwerfende Hartholzgewächse (H) [A ⊆ H].\n• Prämisse 2: Einige Gebirgswald-Koniferen (K) sind keine laubabwerfenden Hartholzgewächse (H) [K \\ H ≠ ∅].\n• Logische Struktur: Modus Baroco (2. Figur: A-O-O). Der Mittelbegriff ist H.\n• Deduktion: Prämisse 2 garantiert die Existenz mindestens einer Gebirgswald-Konifere x, die kein laubabwerfendes Hartholzgewächs ist (x ∈ K ∧ x ∉ H). Da nach Prämisse 1 ausnahmslos alle sommergrünen Auenbäume zu den Hartholzgewächsen gehören müssen (A ⊆ H), kann kein Element außerhalb von H zu A gehören (x ∉ H ⇒ x ∉ A). Da dieses Element x jedoch in K liegt, existiert mindestens eine Gebirgswald-Konifere, die kein sommergrüner Auenbaum ist (x ∈ K ∧ x ∉ A). Daraus folgt zwingend: Einige Gebirgswald-Koniferen sind keine sommergrünen Auenbäume.\n\nDistraktoren-Analyse:\n• Option A ('Alle Gebirgswald-Koniferen sind sommergrüne Auenbäume') steht im unmittelbaren Widerspruch zu der Existenz von Koniferen außerhalb von H (und damit außerhalb von A).\n• Option B ('Alle Gebirgswald-Koniferen sind keine sommergrünen Auenbäume') ist nicht zwingend: Es ist logisch denkbar, dass andere Koniferen, die innerhalb von H liegen, durchaus mit A überlappen.\n• Option C ('Einige Gebirgswald-Koniferen sind sommergrüne Auenbäume') folgt nicht zwingend: Es ist mit den Prämissen vereinbar, dass gar keine Konifere ein Auenbaum ist.\n• Option D ist zwingend richtig, da jene Koniferen ohne Hartholzmerkmale unmöglich sommergrüne Auenbäume sein können.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
  {
    id: "KFF-IE-GP4-010",
    simulationId: "generalprobe-4",
    subtest: "IE",
    questionNumber: 10,
    difficulty: "Schwer",
    ruleType: "no_valid_conclusion",
    premises: [
      "Einige Gezeiten-Schelfeise sind keine festverankerten Küstenbarriereneise.",
      "Einige Gezeiten-Schelfeise sind driftende Eisfelder.",
    ],
    options: {
      A: "Alle driftenden Eisfelder sind festverankerte Küstenbarriereneise.",
      B: "Alle driftenden Eisfelder sind keine festverankerten Küstenbarriereneise.",
      C: "Einige driftende Eisfelder sind festverankerte Küstenbarriereneise.",
      D: "Einige driftende Eisfelder sind keine festverankerten Küstenbarriereneise.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige Gezeiten-Schelfeise (G) sind keine festverankerten Küstenbarriereneise (K) [∃x (G(x) ∧ ¬K(x)), d. h. G \\ K ≠ ∅].\n• Prämisse 2: Einige Gezeiten-Schelfeise (G) sind driftende Eisfelder (D) [∃y (G(y) ∧ D(y)), d. h. G ∩ D ≠ ∅].\n• Syllogistische Struktur: Fehlschluss zweier partikulärer Prämissen (Fallacy of Two Particular Premises / Undistributed Middle, O-I). Der Mittelbegriff G ist in keiner Prämisse distribuiert.\n• Modelltheoretischer Beweis der Nicht-Folgerichtigkeit (Gegenmodell-Analyse):\nAus zwei partikulären Aussagen lässt sich im Syllogismus niemals eine logisch zwingende Beziehung zwischen den Außenbegriffen D (Subjekt: driftende Eisfelder) und K (Prädikat: festverankerte Küstenbarriereneise) ableiten. Die Elemente, die Prämisse 1 erfüllen (in G \\ K), müssen nicht identisch sein mit den Elementen, die Prämisse 2 erfüllen (in G ∩ D). Wir konstruieren zwei konkrete Modelle, die beide Prämissen erfüllen, aber komplementäre Aussagen widerlegen:\n  - Modell 1 (Disjunktes Modell: D ∩ K = ∅):\n    Sei Domäne = {1, 2}. Eisfeld 1 ist Gezeiten-Schelfeis, driftendes Eisfeld und kein Barriere-Eis (1 ∈ G ∧ 1 ∈ D ∧ 1 ∉ K). Eisfeld 2 ist Küstenbarriereneis (2 ∈ K, 2 ∉ G, 2 ∉ D). Hier gilt Prämisse 1 (1 ∈ G \\ K) und Prämisse 2 (1 ∈ G ∩ D). In diesem Modell gilt D = {1} und K = {2}, also D ∩ K = ∅. Damit sind Option B (D ∩ K = ∅) und Option D (1 ∈ D \\ K) wahr. Jedoch sind Option A (D ⊆ K) und Option C (D ∩ K ≠ ∅) beide FALSCH! Folglich sind weder Option A noch Option C logisch zwingend.\n  - Modell 2 (Inklusives Modell: D ⊆ K mit D ∩ K ≠ ∅):\n    Sei Domäne = {1, 2}. Eisfeld 1 ist Gezeiten-Schelfeis, kein Barriere-Eis und kein driftendes Eisfeld (1 ∈ G ∧ 1 ∉ K ∧ 1 ∉ D; erfüllt Prämisse 1). Eisfeld 2 ist Gezeiten-Schelfeis, ein driftendes Eisfeld und ein Barriere-Eis (2 ∈ G ∧ 2 ∈ D ∧ 2 ∈ K; erfüllt Prämisse 2). Hier gilt D = {2} und K = {2}, also D ⊆ K und D ∩ K = {2} ≠ ∅. In diesem Modell sind Option A (D ⊆ K) und Option C (D ∩ K ≠ ∅) beide WAHR. Jedoch sind Option B (D ∩ K = ∅) und Option D (D \\ K ≠ ∅) beide FALSCH! Folglich sind weder Option B noch Option D logisch zwingend.\n  - Modell 3 (Partieller Überlapp: D ∩ K ≠ ∅ und D \\ K ≠ ∅):\n    Ergänzt man Modell 2 um ein weiteres driftendes Eisfeld außerhalb von K, so sind Option C und D wahr, während Option A und B beide falsch sind.\nSynthese: Da Option A und C in Modell 1 falsch sind, und Option B und D in Modell 2 falsch sind, ist KEINE der Aussagen A, B, C oder D in allen gültigen Modellen wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle driftenden Eisfelder sind festverankerte Küstenbarriereneise') folgt nicht zwingend: In Modell 1 (D ∩ K = ∅) ist Option A falsifiziert.\n• Option B ('Alle driftenden Eisfelder sind keine festverankerten Küstenbarriereneise') folgt nicht zwingend: In Modell 2 (D ⊆ K) ist Option B falsifiziert.\n• Option C ('Einige driftende Eisfelder sind festverankerte Küstenbarriereneise') folgt nicht zwingend: In Modell 1 (D ∩ K = ∅) ist Option C falsifiziert (während sie in Modell 2 wahr ist).\n• Option D ('Einige driftende Eisfelder sind keine festverankerten Küstenbarriereneise') folgt nicht zwingend: In Modell 2 (D ⊆ K) ist Option D falsifiziert (während sie in Modell 1 wahr ist).\n• Option E ist zwingend richtig: Da keine der Aussagen A bis D aus den Prämissen allgemeingültig folgt, ist Option E die einzig logisch korrekte Antwort.",
  },
];

export const GENERALPROBE_4_IE_SIMULATION_DATA: IeSimulationData = {
  simulationId: "generalprobe-4",
  simNumber: 4,
  title: "MedAT-H Generalprobe #4 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Formale Logik & Syllogismen",
  timeLimitSeconds: 10 * 60,
  questions: RAW_GENERALPROBE_4_IE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #4 runtime and review engine
 */
export const GENERALPROBE_4_IE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_IE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");

    return {
      id: `KFF-IE-GP4-${numStr}`,
      legacyId: `ie-sim4-q${String(idx + 1).padStart(2, "0")}`,
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
      tags: ["KFF", "IE", "Implikationen erkennen", "Logik", "Generalprobe #4", `KFF-IE-GP4-${numStr}`],
      source: "medat-original",
      version: "2026.1",
      setOrder: 4,
      ieData: {
        ...q,
        id: `KFF-IE-GP4-${numStr}`,
        legacyId: `ie-sim4-q${String(idx + 1).padStart(2, "0")}`,
      },
    } as StoredQuestion & { ieData: IeQuestionData };
  }
);
