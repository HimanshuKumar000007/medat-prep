/**
 * MedAT-H KFF — Implikationen erkennen (IE) — Generalprobe #3
 * Exactly 10 Original, Formally Verified Logical Deduction Questions
 * 
 * IDs: KFF-IE-GP3-001 through KFF-IE-GP3-010 (aliased to ie-sim3-q01 .. q10)
 * 
 * Specifications:
 * - Exactly 10 Questions, 10 Minutes (600 seconds)
 * - Neutral, formal categorical logic scenarios (Archival manuscripts, flora, instruments, minerals, submersibles, etc.)
 * - Strict MedAT-H formal syllogism format: Two explicit premises and 5 conclusion categories:
 *     A: Alle X sind Y.
 *     B: Alle X sind keine Y.
 *     C: Einige X sind Y.
 *     D: Einige X sind keine Y.
 *     E: Keine der Schlussfolgerungen A–D ist richtig.
 * - Perfectly balanced answer distribution: exactly 2 A, 2 B, 2 C, 2 D, 2 E
 *     Sequence: B, C, A, D, E, C, B, A, E, D (0 consecutive identical keys)
 * - Rigorous difficulty calibration: exactly 3 Leicht, 5 Mittel, 2 Schwer
 * - Formal validity: Each question verified across all model assignments using set inclusion, disjunction, and existential models
 * - Complete explanations: Formal deduction, set relation / syllogistic mood, and exhaustive distractor analysis for all 5 options (A–E)
 */

import type { StoredQuestion } from "../questions/types";
import { optionKeyToIndex } from "../questions/types";
import type { IeQuestionData, IeSimulationData } from "../questions/ie/types";

export const RAW_GENERALPROBE_3_IE_QUESTIONS: IeQuestionData[] = [
  {
    id: "KFF-IE-GP3-001",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 1,
    difficulty: "Leicht",
    ruleType: "modus_celarent",
    premises: [
      "Alle Inkunabeln sind handgebundene Schriftstücke.",
      "Alle handgebundenen Schriftstücke sind keine Digitalisate.",
    ],
    options: {
      A: "Alle Inkunabeln sind Digitalisate.",
      B: "Alle Inkunabeln sind keine Digitalisate.",
      C: "Einige Inkunabeln sind Digitalisate.",
      D: "Einige Inkunabeln sind keine Digitalisate.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Inkunabeln (I) sind handgebundene Schriftstücke (H) [I ⊆ H].\n• Prämisse 2: Alle handgebundenen Schriftstücke (H) sind keine Digitalisate (D) [H ∩ D = ∅].\n• Syllogistische Struktur: Modus Celarent (1. Figur, E-A-E). In der Aufgabenstellung wird der Untersatz mit dem Subjektbegriff I als Prämisse 1 und der Obersatz mit dem Prädikatsbegriff D als Prämisse 2 präsentiert. In der klassischen logischen Standardanordnung (Obersatz zuerst: 'Kein H ist D' [E], dann Untersatz: 'Alle I sind H' [A]) ergibt sich der direkte Schluss: 'Kein I ist D' [E].\n• Deduktion: Die Menge I liegt vollständig in H. Da H und D disjunkt sind (keine gemeinsamen Elemente besitzen), kann auch kein Element von I in D liegen (I ∩ D = ∅). Folglich gilt zwingend: Alle Inkunabeln sind keine Digitalisate.\n\nDistraktoren-Analyse:\n• Option A ('Alle Inkunabeln sind Digitalisate') folgt nicht zwingend: In jedem Modell mit mindestens einer Inkunabel (z. B. I = {1}, H = {1}, D = ∅) sind beide Prämissen erfüllt, Option A ist jedoch falsifiziert (1 ∈ I ∧ 1 ∉ D). Sie gilt lediglich im formalen Grenzfall einer leeren Inkunabel-Klasse (I = ∅) vakat-wahr, ist aber keineswegs allgemeingültig aus den Prämissen ableitbar.\n• Option B ist zwingend richtig: Aus I ⊆ H und H ∩ D = ∅ folgt unweigerlich I ∩ D = ∅ für jedes Modell.\n• Option C ('Einige Inkunabeln sind Digitalisate') behauptet eine nicht-leere Schnittmenge (I ∩ D ≠ ∅). Da aus den Prämissen zwingend I ∩ D = ∅ folgt, ist Option C in jedem Modell, das die Prämissen erfüllt, falsch.\n• Option D ('Einige Inkunabeln sind keine Digitalisate') formuliert die partikuläre Existenzaussage ∃x (I(x) ∧ x ∉ D). Sie setzt voraus, dass tatsächlich Inkunabeln existieren (I ≠ ∅). Unter formaler Prädikatenlogik ohne Existenzannahme ist sie bei I = ∅ falsch; im MedAT-Format ist die vollständige universelle Negation (Option B) die geforderte exakte Konklusion.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-GP3-002",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 2,
    difficulty: "Leicht",
    ruleType: "modus_darii",
    premises: [
      "Einige Nadelbäume sind Zapfenträger.",
      "Alle Zapfenträger sind immergrüne Pflanzen.",
    ],
    options: {
      A: "Alle Nadelbäume sind immergrüne Pflanzen.",
      B: "Alle Nadelbäume sind keine immergrünen Pflanzen.",
      C: "Einige Nadelbäume sind immergrüne Pflanzen.",
      D: "Einige Nadelbäume sind keine immergrünen Pflanzen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige Nadelbäume (N) sind Zapfenträger (Z) [N ∩ Z ≠ ∅].\n• Prämisse 2: Alle Zapfenträger (Z) sind immergrüne Pflanzen (I) [Z ⊆ I].\n• Logische Struktur: Partikulär bejahender Syllogismus (Modus Darii, 1. Figur: A-I-I).\n• Deduktion: Prämisse 1 garantiert die Existenz mindestens eines Nadelbaums x, der ein Zapfenträger ist (x ∈ N ∧ x ∈ Z). Da nach Prämisse 2 jedes Element von Z auch in I liegt (Z ⊆ I), gehört dieses x zwingend auch zu I (x ∈ N ∧ x ∈ I). Somit ist die Schnittmenge N ∩ I garantiert nicht leer: Einige Nadelbäume sind immergrüne Pflanzen.\n\nDistraktoren-Analyse:\n• Option A ('Alle Nadelbäume sind immergrüne Pflanzen') verallgemeinert unzulässig: Prämisse 1 betrifft nur 'einige' Nadelbäume. Andere Nadelbäume könnten sommergrün sein (z. B. Lärchen).\n• Option B ('Alle Nadelbäume sind keine immergrünen Pflanzen') widerspricht der nachgewiesenen Existenz von Nadelbäumen, die als Zapfenträger immergrün sind.\n• Option C ist zwingend richtig, da die Schnittmenge N ∩ I durch die Prämissen zweifelsfrei bewiesen ist.\n• Option D ('Einige Nadelbäume sind keine immergrünen Pflanzen') folgt nicht zwingend: Die Prämissen schließen nicht aus, dass in einem logischen Modell alle Nadelbäume immergrün sind ('Einige' bedeutet formal 'mindestens einer', schließt 'alle' aber nicht aus).\n• Option E ist falsch, da Option C zwingend folgt.",
  },
  {
    id: "KFF-IE-GP3-003",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 3,
    difficulty: "Leicht",
    ruleType: "modus_barbara",
    premises: [
      "Alle Lauten sind Saiteninstrumente.",
      "Alle Saiteninstrumente sind Schwingungserzeuger.",
    ],
    options: {
      A: "Alle Lauten sind Schwingungserzeuger.",
      B: "Alle Lauten sind keine Schwingungserzeuger.",
      C: "Einige Lauten sind Schwingungserzeuger.",
      D: "Einige Lauten sind keine Schwingungserzeuger.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Lauten (L) sind Saiteninstrumente (S) [L ⊆ S].\n• Prämisse 2: Alle Saiteninstrumente (S) sind Schwingungserzeuger (E) [S ⊆ E].\n• Syllogistische Struktur: Klassischer Kettenschluss (Modus Barbara, 1. Figur, A-A-A). In der klassischen syllogistischen Ordnung ist Prämisse 2 der Obersatz (M ⊆ P, mit M = Saiteninstrumente, P = Schwingungserzeuger) und Prämisse 1 der Untersatz (S ⊆ M, mit S = Lauten). Durch die Kettung ergibt sich zwingend der Schlusssatz: 'Alle Lauten sind Schwingungserzeuger' (S ⊆ P) [A].\n• Deduktion: Da die Menge L vollständig in S enthalten ist und S wiederum eine Teilmenge von E darstellt, folgt durch die Transitivität der Teilmengenrelation zwingend: L ⊆ E. Ausnahmslos jede Laute ist somit ein Schwingungserzeuger.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig: Die universelle Inklusion L ⊆ E folgt unmittelbar und ausnahmslos aus den Prämissen.\n• Option B ('Alle Lauten sind keine Schwingungserzeuger') folgt nicht aus den Prämissen: Unter rein prädikatenlogischer Semantik ohne Existenzannahme wäre die universelle Negation bei leerer Subjektklasse (L = ∅) zwar zusammen mit Option A vakat-wahr (kein Widerspruch im formal leeren Grenzfall); in jedem Modell mit mindestens einer existierenden Laute (z. B. L = {1}, S = {1}, E = {1}) sind beide Prämissen erfüllt (L ⊆ S ⊆ E), während Option B durch 1 ∈ L ∩ E widerlegt wird (L ∩ E ≠ ∅). Option B ist somit keineswegs allgemeingültig ableitbar.\n• Option C ('Einige Lauten sind Schwingungserzeuger') formuliert die partikuläre Aussage ∃x (L(x) ∧ E(x)). Sie setzt die Existenz von Lauten voraus (L ≠ ∅); im MedAT-Standardformat ist bei zwei universell bejahenden Prämissen die universelle Aussage 'Alle X sind Y' (Option A) die formal stärkere und primäre Schlussfolgerung.\n• Option D ('Einige Lauten sind keine Schwingungserzeuger') behauptet ∃x (L(x) ∧ x ∉ E). Da aus den Prämissen zwingend L ⊆ E folgt, existiert in keinem konsistenten Modell ein solches Element; Option D ist in allen Modellen falsch.\n• Option E ist falsch, da mit Option A eine zwingend richtige Konklusion vorliegt.",
  },
  {
    id: "KFF-IE-GP3-004",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 4,
    difficulty: "Mittel",
    ruleType: "modus_ferio",
    premises: [
      "Alle Silikatmineralien sind keine reinen Kohlenstoffgitter.",
      "Einige Schmucksteine sind Silikatmineralien.",
    ],
    options: {
      A: "Alle Schmucksteine sind reine Kohlenstoffgitter.",
      B: "Alle Schmucksteine sind keine reinen Kohlenstoffgitter.",
      C: "Einige Schmucksteine sind reine Kohlenstoffgitter.",
      D: "Einige Schmucksteine sind keine reinen Kohlenstoffgitter.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Silikatmineralien (S) sind keine reinen Kohlenstoffgitter (K) [S ∩ K = ∅].\n• Prämisse 2: Einige Schmucksteine (M) sind Silikatmineralien (S) [M ∩ S ≠ ∅].\n• Logische Struktur: Partikulär verneinender Syllogismus (Modus Ferio, 1. Figur: E-I-O).\n• Deduktion: Nach Prämisse 2 existiert mindestens ein Schmuckstein x, der ein Silikatmineral ist (x ∈ M ∧ x ∈ S). Da nach Prämisse 1 kein Silikatmineral ein reines Kohlenstoffgitter sein kann (S ∩ K = ∅), kann dieses x unter keinen Umständen zu K gehören (x ∉ K). Daraus folgt zwingend: Es gibt mindestens einen Schmuckstein, der kein reines Kohlenstoffgitter ist (∃x (x ∈ M ∧ x ∉ K)). Die Aussage 'Einige Schmucksteine sind keine reinen Kohlenstoffgitter' ist zwingend wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle Schmucksteine sind reine Kohlenstoffgitter') widerspricht direkt der Tatsache, dass jene Schmucksteine, die Silikate sind, keine Kohlenstoffgitter sein können.\n• Option B ('Alle Schmucksteine sind keine reinen Kohlenstoffgitter') ist nicht zwingend: Es ist logisch vereinbar, dass andere Schmucksteine (wie Diamanten) reine Kohlenstoffgitter sind.\n• Option C ('Einige Schmucksteine sind reine Kohlenstoffgitter') ist aus den Prämissen formallogisch nicht ableitbar, da die Prämissen nicht ausschließen, dass alle Schmucksteine Silikate sind.\n• Option D ist zwingend richtig, da jener Teil der Schmucksteine, der aus Silikatmineralien besteht, garantiert kohlenstoffgitterfrei ist.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
  {
    id: "KFF-IE-GP3-005",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 5,
    difficulty: "Mittel",
    ruleType: "fallacy_undistributed_middle",
    premises: [
      "Alle bemannten Tauchkapseln sind druckfeste Tiefseegefährte.",
      "Alle autonomen Unterwasserdrohnen sind druckfeste Tiefseegefährte.",
    ],
    options: {
      A: "Alle bemannten Tauchkapseln sind autonome Unterwasserdrohnen.",
      B: "Alle bemannten Tauchkapseln sind keine autonomen Unterwasserdrohnen.",
      C: "Einige bemannte Tauchkapseln sind autonome Unterwasserdrohnen.",
      D: "Einige bemannte Tauchkapseln sind keine autonomen Unterwasserdrohnen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle bemannten Tauchkapseln (B) sind druckfeste Tiefseegefährte (D) [B ⊆ D].\n• Prämisse 2: Alle autonomen Unterwasserdrohnen (A) sind druckfeste Tiefseegefährte (D) [A ⊆ D].\n• Logische Struktur: Fehlschluss des unverteilten Mittelbegriffs (Fallacy of the Undistributed Middle, 2. Figur: A-A).\n• Deduktion: Der Mittelbegriff D fungiert in beiden Prämissen als Prädikat einer universell bejahenden Aussage und ist in keiner Prämisse distribuiert. Sowohl B als auch A sind Teilmengen von D. Daraus lässt sich über das Verhältnis zwischen B und A keine zwingende Aussage treffen:\n  - Modell 1: B ∩ A = ∅ (bemannte Kapseln und Drohnen sind disjunkt; Option B wahr, A/C falsch).\n  - Modell 2: B ⊆ A (alle Kapseln wären hypothetisch auch Drohnen; Option A wahr, B/D falsch).\n  - Modell 3: B ∩ A ≠ ∅ und B \\ A ≠ ∅ (teilweiser Überlapp; Option C und D wahr, A/B falsch).\nDa jedes dieser Modelle mit beiden Prämissen vollständig widerspruchsfrei vereinbar ist, lässt sich keine der Aussagen A bis D als zwingend beweisen.\n\nDistraktoren-Analyse:\n• Option A ('Alle bemannten Tauchkapseln sind autonome Unterwasserdrohnen') ist in Modell 1 falsch.\n• Option B ('Alle bemannten Tauchkapseln sind keine autonomen Unterwasserdrohnen') ist in Modell 2 falsch.\n• Option C ('Einige bemannte Tauchkapseln sind autonome Unterwasserdrohnen') ist in Modell 1 falsch.\n• Option D ('Einige bemannte Tauchkapseln sind keine autonomen Unterwasserdrohnen') ist in Modell 2 falsch.\n• Option E ist zwingend richtig, da keine der Schlussfolgerungen A bis D in allen gültigen Modellen gilt.",
  },
  {
    id: "KFF-IE-GP3-006",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 6,
    difficulty: "Mittel",
    ruleType: "modus_disamis",
    premises: [
      "Einige Holzblasinstrumente sind Rohrblattinstrumente.",
      "Alle Holzblasinstrumente sind akustische Tongeneratoren.",
    ],
    options: {
      A: "Alle akustischen Tongeneratoren sind Rohrblattinstrumente.",
      B: "Alle akustischen Tongeneratoren sind keine Rohrblattinstrumente.",
      C: "Einige akustische Tongeneratoren sind Rohrblattinstrumente.",
      D: "Einige akustische Tongeneratoren sind keine Rohrblattinstrumente.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "C",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige Holzblasinstrumente (H) sind Rohrblattinstrumente (R) [H ∩ R ≠ ∅].\n• Prämisse 2: Alle Holzblasinstrumente (H) sind akustische Tongeneratoren (A) [H ⊆ A].\n• Logische Struktur: Modus Disamis (3. Figur: I-A-I).\n• Deduktion: Prämisse 1 sichert die Existenz mindestens eines Holzblasinstruments x, das ein Rohrblattinstrument ist (x ∈ H ∧ x ∈ R). Da nach Prämisse 2 alle Holzblasinstrumente akustische Tongeneratoren sind (H ⊆ A), muss dieses x auch zu A gehören (x ∈ A). Damit gehört x sowohl zu A als auch zu R (x ∈ A ∧ x ∈ R). Die Schnittmenge A ∩ R ist folglich garantiert nicht leer: Einige akustische Tongeneratoren sind Rohrblattinstrumente.\n\nDistraktoren-Analyse:\n• Option A ('Alle akustischen Tongeneratoren sind Rohrblattinstrumente') verallgemeinert unzulässig: Es gibt akustische Tongeneratoren, die keine Rohrblattinstrumente sind (z. B. Lauten, Glocken, Flöten).\n• Option B ('Alle akustischen Tongeneratoren sind keine Rohrblattinstrumente') widerspricht der nachgewiesenen Schnittmenge A ∩ R ≠ ∅.\n• Option C ist zwingend richtig, da jene akustischen Tongeneratoren, die Holzblasinstrumente mit Rohrblatt sind, garantiert existieren.\n• Option D ('Einige akustische Tongeneratoren sind keine Rohrblattinstrumente') folgt nicht zwingend: Es ist logisch denkbar, dass in einem abstrakten Modell alle akustischen Tongeneratoren Rohrblattinstrumente sind.\n• Option E ist falsch, da Option C zwingend folgt.",
  },
  {
    id: "KFF-IE-GP3-007",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 7,
    difficulty: "Mittel",
    ruleType: "modus_camestres",
    premises: [
      "Alle Kometen sind Himmelskörper mit stark elliptischer Bahn.",
      "Alle geostationären Satelliten sind keine Himmelskörper mit stark elliptischer Bahn.",
    ],
    options: {
      A: "Alle geostationären Satelliten sind Kometen.",
      B: "Alle geostationären Satelliten sind keine Kometen.",
      C: "Einige geostationäre Satelliten sind Kometen.",
      D: "Einige geostationäre Satelliten sind keine Kometen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "B",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Kometen (K) sind Himmelskörper mit stark elliptischer Bahn (B) [K ⊆ B].\n• Prämisse 2: Alle geostationären Satelliten (G) sind keine Himmelskörper mit stark elliptischer Bahn (B) [G ∩ B = ∅].\n• Syllogistische Struktur: Modus Camestres (2. Figur, A-E-E). Hier ist der Mittelbegriff B das Prädikat in beiden Prämissen (P-M, S-M). Der Obersatz mit dem Prädikatsbegriff K (Kometen) steht als Prämisse 1 (K ⊆ B [A]), der Untersatz mit dem Subjektbegriff G (Satelliten) steht als Prämisse 2 (G ∩ B = ∅ [E]). Der logische Schluss lautet zwingend: 'Kein G ist K' (G ∩ K = ∅) [E].\n• Deduktion: Da die gesamte Menge K innerhalb von B liegt und G vollständig disjunkt zu B ist, kann kein Element von G jemals in K liegen (G ∩ K = ∅). Folglich gilt zwingend: Alle geostationären Satelliten sind keine Kometen.\n\nDistraktoren-Analyse:\n• Option A ('Alle geostationären Satelliten sind Kometen') folgt nicht aus den Prämissen: Bei einer leeren Subjektklasse (G = ∅) wären zwar universelle Aussagen vakat-wahr (kein Widerspruch im leeren Grenzfall); in jedem Modell mit mindestens einem existierenden Satelliten (z. B. G = {1}, K = {2}, B = {2} mit 1 ∈ G, 1 ∉ B, 2 ∈ K ⊆ B) sind beide Prämissen wahr (K ⊆ B und G ∩ B = ∅), Option A (G ⊆ K) wird jedoch durch 1 ∈ G \\ K eindeutig falsifiziert. Option A ist folglich nicht allgemeingültig deduzierbar.\n• Option B ist zwingend richtig: Aus K ⊆ B und G ∩ B = ∅ folgt unweigerlich G ∩ K = ∅ für jedes beliebige Modell.\n• Option C ('Einige geostationäre Satelliten sind Kometen') behauptet eine nicht-leere Schnittmenge G ∩ K ≠ ∅, was mit der bewiesenen Disjunktheit G ∩ K = ∅ in jedem Modell unvereinbar ist.\n• Option D ('Einige geostationäre Satelliten sind keine Kometen') ist die schwächere partikuläre Negation und setzt G ≠ ∅ voraus; Option B ist die vollständige, stärkere universelle Negation.\n• Option E ist falsch, da Option B zwingend folgt.",
  },
  {
    id: "KFF-IE-GP3-008",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 8,
    difficulty: "Mittel",
    ruleType: "modus_barbara",
    premises: [
      "Alle Kragträger sind lastabtragende Bauelemente.",
      "Alle Auskragungen sind Kragträger.",
    ],
    options: {
      A: "Alle Auskragungen sind lastabtragende Bauelemente.",
      B: "Alle Auskragungen sind keine lastabtragenden Bauelemente.",
      C: "Einige Auskragungen sind lastabtragende Bauelemente.",
      D: "Einige Auskragungen sind keine lastabtragenden Bauelemente.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "A",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle Kragträger (K) sind lastabtragende Bauelemente (L) [K ⊆ L].\n• Prämisse 2: Alle Auskragungen (A) sind Kragträger (K) [A ⊆ K].\n• Syllogistische Struktur: Kettenschluss (Modus Barbara, 1. Figur, A-A-A). Prämisse 1 bildet den Obersatz (M ⊆ P, mit M = Kragträger, P = lastabtragende Bauelemente) und Prämisse 2 den Untersatz (S ⊆ M, mit S = Auskragungen). Dies entspricht exakt der klassischen kanonischen Anordnung und ergibt zwingend den Schlusssatz: 'Alle Auskragungen sind lastabtragende Bauelemente' (S ⊆ P) [A].\n• Deduktion: Aus A ⊆ K und K ⊆ L folgt unmittelbar A ⊆ L. Alle Auskragungen sind folglich ausnahmslos lastabtragende Bauelemente.\n\nDistraktoren-Analyse:\n• Option A ist zwingend richtig: Die Teilmengenbeziehung A ⊆ L folgt mathematisch direkt aus der Transitivität der Inklusion.\n• Option B ('Alle Auskragungen sind keine lastabtragenden Bauelemente') folgt nicht aus den Prämissen: Unter rein prädikatenlogischer Semantik ohne Existenzannahme wäre die universelle Negation bei leerer Subjektklasse (A = ∅) gemeinsam mit Option A vakat-wahr; in jedem Modell mit existierenden Auskragungen (z. B. A = {1}, K = {1}, L = {1}) sind beide Prämissen (A ⊆ K ⊆ L) erfüllt, während Option B durch 1 ∈ A ∩ L widerlegt wird (A ∩ L ≠ ∅). Option B ist somit nicht allgemeingültig ableitbar.\n• Option C ('Einige Auskragungen sind lastabtragende Bauelemente') formuliert die partikuläre Aussage ∃x (A(x) ∧ L(x)) und setzt A ≠ ∅ voraus; im MedAT-Format ist bei zwei universellen Prämissen die universelle Konklusion (Option A) die formal stärkere und primäre Antwort.\n• Option D ('Einige Auskragungen sind keine lastabtragenden Bauelemente') behauptet ∃x (A(x) ∧ x ∉ L). Da A ⊆ L bewiesen ist, ist Option D in jedem Modell falsch.\n• Option E ist falsch, da Option A zwingend folgt.",
  },
  {
    id: "KFF-IE-GP3-009",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 9,
    difficulty: "Schwer",
    ruleType: "no_valid_conclusion",
    premises: [
      "Einige nachtaktive Wüstentiere sind keine Höhlenbrüter.",
      "Einige nachtaktive Wüstentiere sind Reptilien.",
    ],
    options: {
      A: "Alle Reptilien sind Höhlenbrüter.",
      B: "Alle Reptilien sind keine Höhlenbrüter.",
      C: "Einige Reptilien sind Höhlenbrüter.",
      D: "Einige Reptilien sind keine Höhlenbrüter.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "E",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Einige nachtaktive Wüstentiere (N) sind keine Höhlenbrüter (H) [∃x (N(x) ∧ ¬H(x)), d. h. N \\ H ≠ ∅].\n• Prämisse 2: Einige nachtaktive Wüstentiere (N) sind Reptilien (R) [∃y (N(y) ∧ R(y)), d. h. N ∩ R ≠ ∅].\n• Syllogistische Struktur: Fehlschluss zweier partikulärer Prämissen (Fallacy of Two Particular Premises / Undistributed Middle, O-I). Der Mittelbegriff N ist in keiner Prämisse distribuiert.\n• Modelltheoretischer Beweis der Nicht-Folgerichtigkeit (Gegenmodell-Analyse):\nAus zwei partikulären Aussagen lässt sich im Syllogismus niemals eine logisch zwingende Relation zwischen den Außenbegriffen R (Subjekt: Reptilien) und H (Prädikat: Höhlenbrüter) herleiten. Die Elemente, die Prämisse 1 belegen (in N \\ H), müssen keineswegs mit den Elementen übereinstimmen, die Prämisse 2 belegen (in N ∩ R). Wir konstruieren zwei konkrete Modelle, die beide Prämissen erfüllen, aber komplementäre Aussagen falsifizieren:\n  - Modell 1 (Disjunktes Modell: R ∩ H = ∅):\n    Sei Domäne = {1, 2}. Tier 1 ist nachtaktiv, ein Reptil und kein Höhlenbrüter (1 ∈ N ∧ 1 ∈ R ∧ 1 ∉ H). Tier 2 ist Höhlenbrüter (2 ∈ H, 2 ∉ N, 2 ∉ R). Hier gilt Prämisse 1 (1 ∈ N \\ H) und Prämisse 2 (1 ∈ N ∩ R). In diesem Modell gilt R = {1} und H = {2}, also R ∩ H = ∅. Damit sind Option B (R ∩ H = ∅) und Option D (1 ∈ R \\ H) wahr. Jedoch sind Option A (R ⊆ H) und Option C (R ∩ H ≠ ∅) beide FALSCH! Folglich sind weder Option A noch Option C logisch zwingend.\n  - Modell 2 (Inklusives Modell: R ⊆ H mit R ∩ H ≠ ∅):\n    Sei Domäne = {1, 2}. Tier 1 ist nachtaktiv, kein Höhlenbrüter und kein Reptil (1 ∈ N ∧ 1 ∉ H ∧ 1 ∉ R; erfüllt Prämisse 1). Tier 2 ist nachtaktiv, ein Reptil und ein Höhlenbrüter (2 ∈ N ∧ 2 ∈ R ∧ 2 ∈ H; erfüllt Prämisse 2). Hier gilt R = {2} und H = {2}, also R ⊆ H und R ∩ H = {2} ≠ ∅. In diesem Modell sind Option A (R ⊆ H) und Option C (R ∩ H ≠ ∅) beide WAHR. Jedoch sind Option B (R ∩ H = ∅) und Option D (R \\ H ≠ ∅) beide FALSCH! Folglich sind weder Option B noch Option D logisch zwingend.\n  - Modell 3 (Partieller Überlapp: R ∩ H ≠ ∅ und R \\ H ≠ ∅):\n    Ergänzt man Modell 2 um ein weiteres Reptil außerhalb von H, so sind Option C und D wahr, während Option A und B beide falsch sind.\nSynthese: Da Option A und C in Modell 1 falsch sind, und Option B und D in Modell 2 falsch sind, ist KEINE der Aussagen A, B, C oder D in allen gültigen Modellen wahr.\n\nDistraktoren-Analyse:\n• Option A ('Alle Reptilien sind Höhlenbrüter') folgt nicht zwingend: In Modell 1 (R ∩ H = ∅) ist Option A falsifiziert.\n• Option B ('Alle Reptilien sind keine Höhlenbrüter') folgt nicht zwingend: In Modell 2 (R ⊆ H) ist Option B falsifiziert.\n• Option C ('Einige Reptilien sind Höhlenbrüter') folgt nicht zwingend: In Modell 1 (R ∩ H = ∅) ist Option C falsifiziert (während sie in Modell 2 wahr ist).\n• Option D ('Einige Reptilien sind keine Höhlenbrüter') folgt nicht zwingend: In Modell 2 (R ⊆ H) ist Option D falsifiziert (während sie in Modell 1 wahr ist).\n• Option E ist zwingend richtig: Da keine der Aussagen A bis D aus den Prämissen allgemeingültig folgt, ist Option E die einzig logisch korrekte Antwort.",
  },
  {
    id: "KFF-IE-GP3-010",
    simulationId: "generalprobe-3",
    subtest: "IE",
    questionNumber: 10,
    difficulty: "Schwer",
    ruleType: "modus_baroco",
    premises: [
      "Alle echten Polsterpflanzen sind extrem trockenheitsresistente Gewächse.",
      "Einige alpine Gebirgsblumen sind keine extrem trockenheitsresistenten Gewächse.",
    ],
    options: {
      A: "Alle alpinen Gebirgsblumen sind echte Polsterpflanzen.",
      B: "Alle alpinen Gebirgsblumen sind keine echten Polsterpflanzen.",
      C: "Einige alpine Gebirgsblumen sind echte Polsterpflanzen.",
      D: "Einige alpine Gebirgsblumen sind keine echten Polsterpflanzen.",
      E: "Keine der Schlussfolgerungen A–D ist richtig.",
    },
    correctAnswer: "D",
    explanation:
      "Formale Analyse & Mengentheoretische Herleitung:\n• Prämisse 1: Alle echten Polsterpflanzen (P) sind extrem trockenheitsresistente Gewächse (T) [P ⊆ T].\n• Prämisse 2: Einige alpine Gebirgsblumen (A) sind keine extrem trockenheitsresistenten Gewächse (T) [A \\ T ≠ ∅].\n• Logische Struktur: Modus Baroco (2. Figur: A-O-O).\n• Deduktion: Prämisse 2 garantiert die Existenz mindestens einer alpinen Gebirgsblume x, die kein extrem trockenheitsresistentes Gewächs ist (x ∈ A ∧ x ∉ T). Da nach Prämisse 1 alle echten Polsterpflanzen extrem trockenheitsresistent sein müssen (P ⊆ T), kann kein Element außerhalb von T zu P gehören (x ∉ T ⇒ x ∉ P). Da dieses Element x jedoch in A liegt, existiert mindestens eine alpine Gebirgsblume, die keine echte Polsterpflanze ist (x ∈ A ∧ x ∉ P). Daraus folgt zwingend: Einige alpine Gebirgsblumen sind keine echten Polsterpflanzen.\n\nDistraktoren-Analyse:\n• Option A ('Alle alpinen Gebirgsblumen sind echte Polsterpflanzen') steht im direkten Widerspruch zu der Existenz von Gebirgsblumen ohne extreme Trockenheitsresistenz, die damit außerhalb von P liegen.\n• Option B ('Alle alpinen Gebirgsblumen sind keine echten Polsterpflanzen') ist nicht zwingend: Es ist logisch möglich, dass andere alpine Gebirgsblumen (mit Trockenheitsresistenz) sehr wohl Polsterpflanzen sind.\n• Option C ('Einige alpine Gebirgsblumen sind echte Polsterpflanzen') folgt nicht zwingend: Es ist mit den Prämissen vereinbar, dass gar keine alpine Gebirgsblume eine Polsterpflanze ist.\n• Option D ist zwingend richtig, da jene Gebirgsblumen ohne extreme Trockenheitsresistenz unmöglich echte Polsterpflanzen sein können.\n• Option E ist falsch, da Option D zwingend folgt.",
  },
];

export const GENERALPROBE_3_IE_SIMULATION_DATA: IeSimulationData = {
  simulationId: "generalprobe-3",
  simNumber: 3,
  title: "MedAT-H Generalprobe #3 — Implikationen erkennen",
  subtitle: "10 Aufgaben in 10 Minuten · Formale Logik & Syllogismen",
  timeLimitSeconds: 10 * 60,
  questions: RAW_GENERALPROBE_3_IE_QUESTIONS,
};

/**
 * Converted StoredQuestion array for Generalprobe #3 runtime and review engine
 */
export const GENERALPROBE_3_IE_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_3_IE_QUESTIONS.map(
  (q, idx) => {
    const numStr = String(idx + 1).padStart(3, "0");

    return {
      id: `KFF-IE-GP3-${numStr}`,
      legacyId: `ie-sim3-q${String(idx + 1).padStart(2, "0")}`,
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
      tags: ["KFF", "IE", "Implikationen erkennen", "Logik", "Generalprobe #3", `KFF-IE-GP3-${numStr}`],
      source: "medat-original",
      version: "2026.1",
      setOrder: 3,
      ieData: {
        ...q,
        id: `KFF-IE-GP3-${numStr}`,
        legacyId: `ie-sim3-q${String(idx + 1).padStart(2, "0")}`,
      },
    } as StoredQuestion & { ieData: IeQuestionData };
  }
);
