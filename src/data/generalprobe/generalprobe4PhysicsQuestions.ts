/**
 * MedAT Physik BMS — 18-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #4 (BMS Physik-Testteil, exakt 18 Original-Aufgaben).
 * 
 * Fachlich und terminologisch präzise angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung:
 * - 4 Grundlagen/Leicht (Foundational) (22,2 %)
 * - 9 Mittel (Intermediate) (50,0 %)
 * - 5 Schwer (Advanced) (27,8 %)
 * 
 * Antwortschlüssel:
 * - A: 4, B: 4, C: 4, D: 3, E: 3 (Gesamt: 18)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcPhysGp4QuestionRaw {
  id: string;
  chapter_id: string;
  subject: string;
  section: string;
  primary_topic: string;
  subtopic: string;
  difficulty: "foundational" | "intermediate" | "advanced";
  stem: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correct_answer: "A" | "B" | "C" | "D" | "E";
  explanation_correct: string;
  explanations_incorrect: Record<string, string>;
  metadata: {
    author: string;
    status: string;
    version: string;
  };
}

export const RAW_GENERALPROBE_4_PHYS_QUESTIONS: QcPhysGp4QuestionRaw[] = [
  // -------------------------------------------------------------
  // Kapitel 1: Größen und Einheiten (phys-01-groessen-einheiten) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP4-001",
    chapter_id: "phys-01-groessen-einheiten",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Größen und Einheiten",
    subtopic: "SI-Präfixe & Einheitenumrechnung",
    difficulty: "foundational",
    stem: "In der medizinischen Mikroskopie wird der Durchmesser eines menschlichen Erythrozyten mit d = 7,5 µm (Mikrometer) gemessen. Welche der folgenden Angaben gibt diese Länge sowohl in der SI-Basiseinheit Meter (m) als auch in Nanometern (nm) physikalisch korrekt an?",
    options: {
      A: "d = 7,5 · 10⁻³ m und d = 7.500.000 nm (7,5 · 10⁶ nm)",
      B: "d = 7,5 · 10⁻⁶ m und d = 7500 nm (7,5 · 10³ nm)",
      C: "d = 7,5 · 10⁻⁹ m und d = 7,5 nm",
      D: "d = 7,5 · 10⁻⁵ m und d = 75.000 nm (7,5 · 10⁴ nm)",
      E: "d = 7,5 · 10⁻⁷ m und d = 750 nm (7,5 · 10² nm)"
    },
    correct_answer: "B",
    explanation_correct: "Der SI-Präfix Mikro (µ) repräsentiert den Dezimalfaktor 10⁻⁶. Somit entspricht der gemessene Durchmesser: d = 7,5 µm = 7,5 · 10⁻⁶ m. Der SI-Präfix Nano (n) steht für 10⁻⁹. Da 1 µm = 10⁻⁶ m = 1000 · 10⁻⁹ m = 10³ nm ist, ergibt sich durch Multiplikation mit 1000: d = 7,5 · 1000 nm = 7500 nm (bzw. 7,5 · 10³ nm). Beide Angaben in Option B sind zueinander äquivalent und geben den Messwert physikalisch exakt wieder.",
    explanations_incorrect: {
      A: "7,5 · 10⁻³ m und 7,5 · 10⁶ nm sind zwar untereinander äquivalent, entsprechen jedoch Millimetern (7,5 mm); dies ist um den Faktor 1000 größer als 7,5 µm.",
      C: "7,5 · 10⁻⁹ m und 7,5 nm sind zwar untereinander äquivalent, entsprechen jedoch Nanometern (10⁻⁹ m); dies ist um den Faktor 1000 kleiner als 7,5 µm.",
      D: "7,5 · 10⁻⁵ m und 75.000 nm sind untereinander konsistent, entsprechen jedoch 75 µm und sind somit um eine Zehnerpotenz (Faktor 10) zu groß.",
      E: "7,5 · 10⁻⁷ m und 750 nm sind untereinander konsistent, entsprechen jedoch 0,75 µm und sind somit um eine Zehnerpotenz (Faktor 10) zu klein."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-002",
    chapter_id: "phys-01-groessen-einheiten",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Größen und Einheiten",
    subtopic: "SI-Basiseinheiten: Elektrische Kapazität (Farad)",
    difficulty: "intermediate",
    stem: "Die elektrische Kapazität C eines Kondensators ist definiert als Quotient aus gespeicherter Ladung Q und anliegender Spannung U (C = Q / U) und wird in der SI-Einheit Farad (F) angegeben. Wie lautet die korrekte Zerlegung der Einheit Farad in die fundamentalen SI-Basiseinheiten Kilogramm (kg), Meter (m), Sekunde (s) und Ampere (A)?",
    options: {
      A: "kg · m² · s⁻³ · A⁻¹",
      B: "kg · m² · s⁻² · A⁻²",
      C: "kg⁻¹ · m⁻² · s³ · A",
      D: "kg⁻¹ · m⁻² · s⁴ · A²",
      E: "kg · m⁻¹ · s⁻² · A²"
    },
    correct_answer: "D",
    explanation_correct: "1. Definition der Kapazität: C = Q / U => 1 F = 1 C / V. 2. Ladung: Q = I · t => 1 C = 1 A · s. 3. Elektrische Spannung: Spannung ist potentielle Energie pro Ladung (U = W / q), also 1 V = 1 J / C = (1 N · m) / (1 A · s). Da 1 N = 1 kg · m · s⁻², folgt für Volt: 1 V = (kg · m² · s⁻²) / (A · s) = kg · m² · s⁻³ · A⁻¹. 4. Einsetzen in Farad: 1 F = (1 A · s) / (kg · m² · s⁻³ · A⁻¹) = kg⁻¹ · m⁻² · s⁴ · A².",
    explanations_incorrect: {
      A: "kg · m² · s⁻³ · A⁻¹ entspricht der abgeleiteten Einheit Volt (V).",
      B: "kg · m² · s⁻² · A⁻² ist die abgeleitete Einheit Henry (H, Induktivität).",
      C: "Enthält Vorzeichenfehler in den Exponenten der Zeit und Stromstärke.",
      E: "Weist fehlerhafte Dimensionen für Masse und Länge auf."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 2: Mechanik (phys-02-mechanik) - 5 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP4-003",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Newtonsche Axiome & Kräftegleichgewicht",
    difficulty: "foundational",
    stem: "Eine U-Bahn fährt auf einer geradlinigen, horizontalen Schienenstrecke mit einer konstanten Geschwindigkeit von v = 60 km/h. Welche Aussage über die auf die U-Bahn wirkende resultierende Gesamtkraft F_res und ihren Bewegungszustand trifft gemäß dem 1. Newtonschen Axiom (Trägheitsprinzip) zu?",
    options: {
      A: "Die resultierende Gesamtkraft ist exakt gleich null (F_res = 0 N), da sich Antriebskraft und Reibungskräfte im dynamischen Kräftegleichgewicht gegenseitig vollständig aufheben.",
      B: "Die resultierende Gesamtkraft muss stets größer als null sein, da zur Aufrechterhaltung jeder Bewegung eine ständige vorwärtsgerichtete Nettokraft erforderlich ist.",
      C: "Die resultierende Kraft ist genau gleich der Masse der U-Bahn multipliziert mit ihrer Geschwindigkeit (F_res = m · v).",
      D: "Auf die U-Bahn wirken überhaupt keine physikalischen Kräfte, da sie sich gleichförmig bewegt.",
      E: "Die Schwerkraft wird durch die Vorwärtsgeschwindigkeit aufgehoben, sodass die U-Bahn schwerelos gleitet."
    },
    correct_answer: "A",
    explanation_correct: "Nach dem 1. Newtonschen Axiom (Trägheitsgesetz) verharrt ein Körper im Zustand der Ruhe oder der gleichförmigen, geradlinigen Bewegung (v = const, Beschleunigung a = 0), wenn die vektorielle Summe aller auf ihn wirkenden Kräfte gleich null ist: F_res = m · a = 0 N. Obwohl der Antriebsmotor eine Kraft aufbringt, wird diese durch die Summe aller hemmenden Widerstandskräfte (Rollreibung, Luftwiderstand) betragsmäßig exakt kompensiert.",
    explanations_incorrect: {
      B: "Dies ist die antike aristotelische Fehlvorstellung; nach Newton erfordert eine unbeschleunigte Bewegung (v = const) keine Nettokraft.",
      C: "m · v ist der Impuls p, keine Kraft.",
      D: "Es wirken sehr wohl Kräfte (Gewichtskraft, Normalkraft der Schienen, Antriebskraft, Reibung), aber ihre Vektorsumme ist null.",
      E: "Die Schwerkraft wird durch die vertikale Stützkraft der Schienen kompensiert, nicht durch die Geschwindigkeit."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-004",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Kinematik: Bremsbeschleunigung & Bremsweg",
    difficulty: "intermediate",
    stem: "Ein Notarztwagen nähert sich einer Gefahrenstelle mit einer Geschwindigkeit von v₀ = 30 m/s (entspricht 108 km/h). Der Fahrer leitet eine Vollbremsung mit einer konstanten Verzögerung von a = -5,0 m/s² bis zum vollständigen Stillstand ein. Wie lange dauert der Bremsvorgang (t_Brems), und welche Wegstrecke (s_Brems) legt das Fahrzeug während des Bremsens zurück? (Reaktionszeit wird vernachlässigt)",
    options: {
      A: "t_Brems = 3,0 s und s_Brems = 45 m",
      B: "t_Brems = 6,0 s und s_Brems = 180 m",
      C: "t_Brems = 6,0 s und s_Brems = 90 m",
      D: "t_Brems = 5,0 s und s_Brems = 75 m",
      E: "t_Brems = 6,0 s und s_Brems = 45 m"
    },
    correct_answer: "C",
    explanation_correct: "Bei einer gleichmäßig verzögerten Bewegung bis zum Stillstand (v = 0) gilt: 1. Bremszeit: v(t) = v₀ - |a| · t = 0 => t_Brems = v₀ / |a| = (30 m/s) / (5,0 m/s²) = 6,0 s. 2. Bremsweg: s_Brems = v₀ · t_Brems - 1/2 · |a| · t_Brems² = 30 m/s · 6,0 s - 1/2 · 5,0 m/s² · (6,0 s)² = 180 m - 90 m = 90 m. (Alternativ direkt über die zeitfreie Beziehung: s_Brems = v₀² / (2 · |a|) = (30 m/s)² / (2 · 5,0 m/s²) = 900 / 10 = 90 m).",
    explanations_incorrect: {
      A: "Halbiert die Bremszeit fälschlicherweise auf 3,0 s.",
      B: "180 m vergisst den Faktor 1/2 bei der Verzögerung (entspricht v₀ · t ohne Abbremsung).",
      D: "Rechnet fehlerhaft mit 5,0 s Bremszeit.",
      E: "Halbiert den korrekten Bremsweg fälschlich nochmals auf 45 m."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-005",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Drehmoment & Zweiseitiger Hebel",
    difficulty: "intermediate",
    stem: "An einer zweiseitigen starren Wippe sitzt links im Abstand von r₁ = 1,5 m vom Drehpunkt eine Person mit der Masse m₁ = 60 kg. Welche Masse m₂ muss eine zweite Person besitzen, die auf der rechten Seite im Abstand von r₂ = 2,5 m Platz nimmt, damit sich die Wippe im horizontalen Drehmomentengleichgewicht befindet? (Hebelmasse vernachlässigbar)",
    options: {
      A: "m₂ = 100 kg",
      B: "m₂ = 50 kg",
      C: "m₂ = 45 kg",
      D: "m₂ = 24 kg",
      E: "m₂ = 36 kg"
    },
    correct_answer: "E",
    explanation_correct: "Im Drehmomentengleichgewicht gilt: Summe aller Drehmomente = 0 => F₁ · r₁ = F₂ · r₂. Mit der Gewichtskraft F = m · g kürzt sich die Erdbeschleunigung g heraus: m₁ · r₁ = m₂ · r₂. Umstellen nach der gesuchten Masse m₂ liefert: m₂ = m₁ · (r₁ / r₂) = 60 kg · (1,5 m / 2,5 m) = 60 kg · (3 / 5) = 36 kg. Da der rechte Hebelarm um den Faktor 2,5 / 1,5 = 5/3 länger ist, reicht eine um denselben Faktor kleinere Masse (36 kg) für das Gleichgewicht aus.",
    explanations_incorrect: {
      A: "100 kg multipliziert fälschlicherweise mit r₂ / r₁ (2,5 / 1,5).",
      B: "50 kg ist eine falsche Schätzung.",
      C: "45 kg rechnet fehlerhaft mit dem arithmetischen Mittelwert.",
      D: "24 kg resultiert aus einem Rechenfehler (60 - 36)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-006",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Archimedisches Prinzip & Dichtebestimmung",
    difficulty: "advanced",
    stem: "Ein kompakter homogener Festkörper wird an einer Federwaage in Luft gewogen; die Waage zeigt eine Gewichtskraft von F_G = 50 N an. Anschließend wird der Körper vollständig in Wasser (ρ_Wasser = 1000 kg/m³) eingetaucht, wobei die Federwaage nun eine scheinbare Gewichtskraft von F_schein = 30 N registriert. Welche Auftriebskraft F_A wirkt auf den Körper, und welche Dichte ρ_K besitzt das Material des Körpers? (g = 10 m/s²)",
    options: {
      A: "F_A = 30 N und ρ_K = 1500 kg/m³",
      B: "F_A = 50 N und ρ_K = 3000 kg/m³",
      C: "F_A = 20 N und ρ_K = 2500 kg/m³",
      D: "F_A = 20 N und ρ_K = 1667 kg/m³",
      E: "F_A = 10 N und ρ_K = 5000 kg/m³"
    },
    correct_answer: "C",
    explanation_correct: "1. Auftriebskraft: F_A = F_G - F_schein = 50 N - 30 N = 20 N. 2. Verdrängtes Volumen nach Archimedes: F_A = ρ_Wasser · V_K · g => V_K = F_A / (ρ_Wasser · g) = 20 N / (1000 kg/m³ · 10 m/s²) = 2,0 · 10⁻³ m³ (2,0 Liter). 3. Masse des Körpers: m = F_G / g = 50 N / 10 m/s² = 5,0 kg. 4. Dichte des Körpers: ρ_K = m / V_K = 5,0 kg / (2,0 · 10⁻³ m³) = 2500 kg/m³. (Alternativ direkt über das Kräfteverhältnis: ρ_K / ρ_Wasser = F_G / F_A = 50 N / 20 N = 2,5 => ρ_K = 2,5 · 1000 kg/m³ = 2500 kg/m³).",
    explanations_incorrect: {
      A: "Verwechselt die Auftriebskraft mit der Rest-Gewichtskraft von 30 N.",
      B: "Setzt die Auftriebskraft fälschlich gleich der realen Gewichtskraft von 50 N.",
      D: "Verwendet fälschlich die scheinbare Gewichtskraft im Zähler (30 / 20 · 1000 ≈ 1667 kg/m³).",
      E: "Verwendet eine falsche Auftriebskraft von 10 N."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-007",
    chapter_id: "phys-02-mechanik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Mechanik",
    subtopic: "Hydrodynamik: Torricelli-Theorem & Volumenstrom",
    difficulty: "advanced",
    stem: "Ein oben offener, sehr großer Vorratsbehälter ist bis zu einer Füllhöhe von h = 5,0 m mit Wasser gefüllt. Am Boden des Behälters befindet sich ein kleines kreisrundes Ausflussventil mit einem Querschnitt von A = 2,0 cm² (2,0 · 10⁻⁴ m²). Welche Ausströmgeschwindigkeit v besitzt das austretende Wasser gemäß dem Torricelli-Theorem (Bernoulli-Gleichung), und welcher Volumenstrom V_punkt strömt aus? (Reibung vernachlässigbar, g = 10 m/s²)",
    options: {
      A: "v = 10 m/s und V_punkt = 2,0 L/s",
      B: "v = 5,0 m/s und V_punkt = 1,0 L/s",
      C: "v = 100 m/s und V_punkt = 20 L/s",
      D: "v = 10 m/s und V_punkt = 0,20 L/s",
      E: "v = 7,1 m/s und V_punkt = 1,4 L/s"
    },
    correct_answer: "A",
    explanation_correct: "1. Ausströmgeschwindigkeit nach Torricelli: v = sqrt(2 · g · h) = sqrt(2 · 10 m/s² · 5,0 m) = sqrt(100 m²/s²) = 10 m/s. 2. Volumenstrom: V_punkt = A · v = (2,0 · 10⁻⁴ m²) · 10 m/s = 2,0 · 10⁻³ m³/s. Da 1 m³ = 1000 Litern entspricht: V_punkt = 2,0 · 10⁻³ · 1000 L/s = 2,0 L/s.",
    explanations_incorrect: {
      B: "Halbiert fälschlicherweise die Ausströmgeschwindigkeit auf 5,0 m/s (z. B. durch Verwechslung der Endgeschwindigkeit mit einer mittleren Geschwindigkeit oder Rechenfehler bei sqrt(2gh)), wodurch sich auch der resultierende Volumenstrom fälschlich auf 1,0 L/s halbiert.",
      C: "Vergisst das Ziehen der Quadratwurzel (v = 2gh = 100 m/s, V_punkt = 20 L/s).",
      D: "Berechnet die Geschwindigkeit korrekt (10 m/s), begeht jedoch einen Zehnerpotenzfehler bei der Umrechnung von m³/s in Liter pro Sekunde (0,20 L/s statt 2,0 L/s).",
      E: "Vergisst den Faktor 2 unter der Wurzel bei Torricelli: v = sqrt(g · h) = sqrt(10 · 5) = sqrt(50) ≈ 7,1 m/s, woraus ein zu geringer Volumenstrom von V_punkt = 2,0 · 10⁻⁴ m² · 7,1 m/s ≈ 1,4 L/s resultiert."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 3: Schwingungen und Wellen (phys-03-schwingungen-wellen) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP4-008",
    chapter_id: "phys-03-schwingungen-wellen",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Wellenausbreitung: Frequenz & Wellenlänge (Ultraschall)",
    difficulty: "foundational",
    stem: "In der medizinischen Ultraschalldiagnostik breitet sich eine Schallwelle in menschlichem Weichgewebe mit einer mittleren Schallgeschwindigkeit von c = 1500 m/s aus. Der verwendete Ultraschallwandler arbeitet mit einer Frequenz von f = 3,0 MHz (3,0 · 10⁶ Hz). Welche Wellenlänge λ besitzt diese Ultraschallwelle im Gewebe?",
    options: {
      A: "λ = 5,0 m",
      B: "λ = 5,0 cm",
      C: "λ = 0,050 mm",
      D: "λ = 0,50 mm (5,0 · 10⁻⁴ m)",
      E: "λ = 2,0 mm"
    },
    correct_answer: "D",
    explanation_correct: "Nach der fundamentalen Wellengleichung gilt: c = λ · f => λ = c / f. Einsetzen der gegebenen Größen: λ = (1500 m/s) / (3,0 · 10⁶ s⁻¹) = 5,0 · 10⁻⁴ m. Umrechnung in Millimeter (1 m = 1000 mm): λ = 5,0 · 10⁻⁴ · 10³ mm = 0,50 mm.",
    explanations_incorrect: {
      A: "5,0 m ignoriert den Mega-Präfix (10⁶).",
      B: "5,0 cm ist um eine Zehnerpotenz zu groß.",
      C: "0,050 mm ist um eine Zehnerpotenz zu klein.",
      E: "2,0 mm dividiert fälschlicherweise 3,0 / 1500."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-009",
    chapter_id: "phys-03-schwingungen-wellen",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Schwingungen und Wellen",
    subtopic: "Stehende akustische Wellen in einseitig geschlossenen Röhren (gedeckte Pfeife)",
    difficulty: "advanced",
    stem: "In einem akustischen Demonstrationsexperiment wird ein einseitig geschlossenes zylindrisches Rohr (gedeckte Pfeife; am Boden starr verschlossen, am oberen Ende offen) der Länge L = 17 cm (0,17 m) mit Schallwellen angeregt. Welche Grundfrequenz f₁ (erste Eigenresonanz) besitzt dieser Resonator bei einer Schallgeschwindigkeit von c = 340 m/s in Luft?",
    options: {
      A: "f₁ = 250 Hz",
      B: "f₁ = 500 Hz",
      C: "f₁ = 1000 Hz",
      D: "f₁ = 2000 Hz",
      E: "f₁ = 170 Hz"
    },
    correct_answer: "B",
    explanation_correct: "Bei einer einseitig geschlossenen Röhre (gedeckte Pfeife) befindet sich am starren geschlossenen Ende zwingend ein Schallschnelle-Knoten (Druckbauch) und am offenen Ende ein Schallschnelle-Bauch (Druckknoten). Bei der Grundschwingung (n = 1) entspricht die Rohrlänge genau einem Viertel der Wellenlänge: L = 1/4 · λ₁ => λ₁ = 4 · L = 4 · 0,17 m = 0,68 m. Die Grundfrequenz f₁ berechnet sich aus der Wellengleichung: f₁ = c / λ₁ = (340 m/s) / (0,68 m) = 500 Hz.",
    explanations_incorrect: {
      A: "250 Hz rechnet fälschlich mit λ = 8L.",
      C: "1000 Hz gilt für eine beidseitig offene Röhre der gleichen Länge (L = λ/2 => f = c / (2L) = 340 / 0,34 = 1000 Hz).",
      D: "2000 Hz entspricht der 2. Harmonischen einer beidseitig offenen Röhre und ist um den Faktor 4 zu groß.",
      E: "170 Hz dividiert fehlerhaft 340 / 2 ohne Berücksichtigung der Wellenlänge."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 4: Wärmelehre (phys-04-waermelehre) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP4-010",
    chapter_id: "phys-04-waermelehre",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Kalorimetrie & Richmannsche Mischungsregel",
    difficulty: "intermediate",
    stem: "In einem ideal isolierten Gefäß werden m₁ = 300 g flüssiges Wasser mit einer Temperatur von T₁ = 20 °C mit m₂ = 200 g heißem Wasser einer Temperatur von T₂ = 70 °C vollständig vermischt. Welche Mischungstemperatur T_m stellt sich nach Einstellung des thermischen Gleichgewichts ein? (Wärmekapazität des Gefäßes vernachlässigbar)",
    options: {
      A: "T_m = 35 °C",
      B: "T_m = 45 °C",
      C: "T_m = 50 °C",
      D: "T_m = 30 °C",
      E: "T_m = 40 °C"
    },
    correct_answer: "E",
    explanation_correct: "Nach der Richmannschen Mischungsregel ist die abgegebene Wärme des heißen Wassers gleich der aufgenommenen Wärme des kalten Wassers: m₁ · c_W · (T_m - T₁) = m₂ · c_W · (T₂ - T_m). Da es sich um denselben Stoff handelt, kürzt sich c_W heraus: T_m = (m₁ · T₁ + m₂ · T₂) / (m₁ + m₂) = (300 g · 20 °C + 200 g · 70 °C) / (300 g + 200 g) = (6000 + 14.000) / 500 = 20.000 / 500 = 40 °C.",
    explanations_incorrect: {
      A: "35 °C ist ein Rechenfehler.",
      B: "45 °C ist das ungewichtete arithmetische Mittel (20 + 70)/2, das nur bei gleichen Massen zuträfe.",
      C: "50 °C gewichtet das heiße Wasser fälschlich höher.",
      D: "30 °C unterschätzt die Wärmemenge des heißen Wassers."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-011",
    chapter_id: "phys-04-waermelehre",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Wärmelehre",
    subtopic: "Ideale Gasgesetze: Isobare Zustandsänderung (p = const, Gay-Lussac / Charles)",
    difficulty: "intermediate",
    stem: "Eine ideale Gasportion nimmt in einem Zylinder mit reibungsfrei beweglichem Kolben bei konstantem Druck (isobare Zustandsänderung, p = const) bei einer Anfangstemperatur von T₁ = 27 °C ein Volumen von V₁ = 1,5 L ein. Das Gas wird isobar auf T₂ = 327 °C erwärmt. Welches Volumen V₂ nimmt das Gas nach der Erwärmung ein?",
    options: {
      A: "V₂ = 3,0 L",
      B: "V₂ = 18,2 L",
      C: "V₂ = 2,0 L",
      D: "V₂ = 0,75 L",
      E: "V₂ = 4,5 L"
    },
    correct_answer: "A",
    explanation_correct: "Bei einer isobaren Zustandsänderung (Druck p = const) gilt nach dem Gesetz von Gay-Lussac (in mancher Lehrbuchliteratur auch als Gesetz von Charles bezeichnet): V / T = const, somit V₁ / T₁ = V₂ / T₂ bzw. V₂ = V₁ · (T₂ / T₁). Entscheidend ist die zwingende Umrechnung der Temperaturen in absolute Kelvin-Temperaturen: T₁ = 27 °C + 273,15 K ≈ 300 K; T₂ = 327 °C + 273,15 K ≈ 600 K. Da sich die absolute Temperatur exakt verdoppelt (T₂ / T₁ = 600 K / 300 K = 2), verdoppelt sich bei konstant gehaltenem Druck auch das Volumen proportional: V₂ = 1,5 L · 2 = 3,0 L.",
    explanations_incorrect: {
      B: "18,2 L resultiert aus dem fatalen Fehler, direkt mit Celsiuswerten zu rechnen: 1,5 · (327 / 27) ≈ 18,2 L.",
      C: "2,0 L ist eine falsche Schätzung.",
      D: "0,75 L entspricht einer Halbierung statt Verdopplung.",
      E: "4,5 L multipliziert fehlerhaft mit dem Faktor 3."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 5: Elektrizitätslehre (phys-05-elektrizitaet) - 3 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP4-012",
    chapter_id: "phys-05-elektrizitaet",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Ohmsches Gesetz & Elektrische Leistung",
    difficulty: "foundational",
    stem: "Ein medizinisches Wärmegerät wird an das Stromnetz mit einer Spannung von U = 230 V angeschlossen. Im Dauerbetrieb fließt eine konstante Stromstärke von I = 2,0 A. Welche elektrische Wirkleistung P nimmt das Gerät auf, und welchen ohmschen Widerstand R besitzt das Heizelement?",
    options: {
      A: "P = 115 W und R = 460 Ω",
      B: "P = 230 W und R = 115 Ω",
      C: "P = 460 W und R = 115 Ω",
      D: "P = 920 W und R = 230 Ω",
      E: "P = 460 W und R = 230 Ω"
    },
    correct_answer: "C",
    explanation_correct: "1. Elektrische Leistung: P = U · I = 230 V · 2,0 A = 460 W. 2. Ohmscher Widerstand: R = U / I = 230 V / 2,0 A = 115 Ω.",
    explanations_incorrect: {
      A: "Vertauscht die Zahlenwerte von Leistung und Widerstand.",
      B: "Berechnet die Leistung fehlerhaft mit I = 1,0 A.",
      D: "Multipliziert die Leistung fälschlich nochmals mit 2.",
      E: "Vergisst die Division durch 2 beim Widerstand."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-013",
    chapter_id: "phys-05-elektrizitaet",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Gemischte Widerstandsschaltung & Gesamtstrom",
    difficulty: "intermediate",
    stem: "Ein elektrisches Netzwerk besteht aus zwei parallel geschalteten Widerständen R₁ = 40 Ω und R₂ = 60 Ω, zu denen ein dritter Widerstand R₃ = 16 Ω in Reihe geschaltet ist. An das gesamte Netzwerk wird eine Gleichspannung von U = 80 V angelegt. Wie groß sind der Ersatzwiderstand R_ges dieser Schaltung und der dem Netzteil entnommene Gesamtstrom I_ges?",
    options: {
      A: "R_ges = 116 Ω und I_ges = 0,69 A",
      B: "R_ges = 40 Ω und I_ges = 2,0 A",
      C: "R_ges = 24 Ω und I_ges = 3,33 A",
      D: "R_ges = 50 Ω und I_ges = 1,6 A",
      E: "R_ges = 40 Ω und I_ges = 4,0 A"
    },
    correct_answer: "B",
    explanation_correct: "1. Parallelschaltung R₁ || R₂: R_p = (R₁ · R₂) / (R₁ + R₂) = (40 · 60) / (40 + 60) = 2400 / 100 = 24 Ω. 2. Reihenschaltung mit R₃: R_ges = R_p + R₃ = 24 Ω + 16 Ω = 40 Ω. 3. Gesamtstrom nach Ohm: I_ges = U / R_ges = 80 V / 40 Ω = 2,0 A.",
    explanations_incorrect: {
      A: "Addiert alle drei Widerstände fälschlicherweise in reiner Reihenschaltung (40 Ω + 60 Ω + 16 Ω = 116 Ω), woraus I_ges = 80 V / 116 Ω ≈ 0,69 A folgt.",
      C: "Berechnet zwar den Ersatzwiderstand der Parallelschaltung korrekt (R_p = 24 Ω), vergisst aber, den Serienwiderstand R₃ = 16 Ω zu addieren (I_ges = 80 V / 24 Ω ≈ 3,33 A).",
      D: "Ersetzt die Parallelschaltung fälschlicherweise durch das arithmetische Mittel (40 Ω + 60 Ω) / 2 = 50 Ω und ignoriert dabei zusätzlich den in Reihe geschalteten Vorwiderstand R₃ = 16 Ω vollständig; aus R_ges = 50 Ω errechnet sich fälschlich I_ges = 80 V / 50 Ω = 1,6 A.",
      E: "Ermittelt zwar den korrekten Gesamtwiderstand von 40 Ω, verdoppelt jedoch den Gesamtstrom fehlerhaft auf 4,0 A (Rechenfehler bei U / R_ges)."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-014",
    chapter_id: "phys-05-elektrizitaet",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Elektrizitätslehre",
    subtopic: "Lorentzkraft & Zyklotronradius im Magnetfeld",
    difficulty: "advanced",
    stem: "Ein geladenes Teilchen (Masse m, Ladung q) bewegt sich mit der Geschwindigkeit v senkrecht zu den Feldlinien eines homogenen Magnetfeldes der Flussdichte B und wird durch die Lorentzkraft auf eine kreisförmige Bahn mit dem Radius r gezwungen. Wie verändert sich dieser Bahnradius r, wenn die Geschwindigkeit des Teilchens verdoppelt (2v) und die magnetische Flussdichte gleichzeitig auf die Hälfte (B/2) reduziert wird?",
    options: {
      A: "Der Bahnradius bleibt exakt unverändert (r' = r).",
      B: "Der Bahnradius verdoppelt sich (r' = 2r).",
      C: "Der Bahnradius halbiert sich (r' = r/2).",
      D: "Der Bahnradius verachtfacht sich (r' = 8r).",
      E: "Der Bahnradius vervierfacht sich (r' = 4r)."
    },
    correct_answer: "E",
    explanation_correct: "Die Lorentzkraft wirkt als Zentripetalkraft: F_L = F_Z => q · v · B = (m · v²) / r => r = (m · v) / (q · B). Werden v' = 2v und B' = 1/2 · B eingesetzt, ergibt sich: r' = (m · 2v) / (q · 1/2 B) = (2 / (1/2)) · (m · v) / (q · B) = 4 · r. Der Bahnradius vervierfacht sich folglich.",
    explanations_incorrect: {
      A: "Nimmt fälschlicherweise an, dass sich die Faktoren 2 und 1/2 kompensieren.",
      B: "Berücksichtigt nur die Geschwindigkeitsverdopplung und ignoriert die Feldreduktion.",
      C: "Rechnet reziprok.",
      D: "Nimmt fälschlich eine kubische Abhängigkeit an."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 6: Optik (phys-06-optik) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP4-015",
    chapter_id: "phys-06-optik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Linsengleichung & Bildkonstruktion bei Sammellinsen",
    difficulty: "intermediate",
    stem: "Ein Gegenstand befindet sich in einem Abstand von g = 30 cm vor einer dünnen Sammellinse mit einer Brennweite von f = 20 cm. In welchem Bildabstand b hinter der Linse entsteht das Bild, und welche Eigenschaften weist die Abbildung auf?",
    options: {
      A: "b = 12 cm; virtuelles, aufrechtes und verkleinertes Bild.",
      B: "b = 50 cm; reelles, umgekehrtes und verkleinertes Bild.",
      C: "b = 30 cm; reelles, gleich großes Bild.",
      D: "b = 60 cm; reelles, auf dem Kopf stehendes (umgekehrtes) und vergrößertes Bild (Abbildungsmaßstab β = 2).",
      E: "b = 60 cm; virtuelles, aufrechtes Bild mit halber Gegenstandsgröße."
    },
    correct_answer: "D",
    explanation_correct: "Aus der Linsengleichung 1/f = 1/g + 1/b folgt: 1/b = 1/f - 1/g = 1/20 cm - 1/30 cm = (3 - 2) / 60 cm = 1 / 60 cm => b = 60 cm. Da b > 0, ist das Bild reell. Der Abbildungsmaßstab beträgt β = B / G = b / g = 60 cm / 30 cm = 2,0. Das Bild ist somit reell, umgekehrt und doppelt so groß wie der Gegenstand.",
    explanations_incorrect: {
      A: "12 cm entsteht durch falsche Addition der Kehrwerte (1/20 + 1/30 = 5/60 = 1/12).",
      B: "50 cm addiert fälschlich g + f = 30 + 20.",
      C: "30 cm gilt nur bei g = 2f = 40 cm.",
      E: "Reelle Bilder einer einfachen Sammellinse sind stets umgekehrt, nicht virtuell/aufrecht."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-016",
    chapter_id: "phys-06-optik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Optik",
    subtopic: "Brechungsgesetz & Totalreflexion",
    difficulty: "advanced",
    stem: "In einem medizinischen Endoskop trifft ein Lichtstrahl innerhalb eines optischen Wellenleiters mit dem Brechungsindex n₁ = 2,00 auf die Grenzfläche zu Luft (n₂ = 1,00). Bei welchem kritischen Grenzwinkel α_c (gemessen zum Einfallslot) tritt Totalreflexion auf, und welche grundlegende Voraussetzung muss hierfür erfüllt sein?",
    options: {
      A: "α_c = 60°; Totalreflexion tritt ausschließlich beim Übergang vom optisch dünneren ins optisch dichtere Medium auf.",
      B: "α_c = 30°; Voraussetzung für echte Totalreflexion ist, dass das Licht aus dem optisch dichteren Medium kommt (n₁ > n₂) und der Einfallswinkel zum Lot strikt größer als der Grenzwinkel ist (α > α_c); beim Grenzwinkel selbst (α = α_c) verläuft der gebrochene Strahl im 90°-Winkel streifend entlang der Grenzfläche.",
      C: "α_c = 45°; Totalreflexion findet bei jedem beliebigen Einfallswinkel statt, sofern n₁ > n₂ gilt.",
      D: "α_c = 90°; Totalreflexion erfordert stets einen streifenden Lichteinfall parallel zur Grenzfläche.",
      E: "α_c = 30°; Totalreflexion tritt auch dann auf, wenn das Licht vom optisch dünneren in das optisch dichtere Medium eintritt."
    },
    correct_answer: "B",
    explanation_correct: "1. Physikalische Voraussetzung: Totalreflexion kann ausschließlich beim Übergang vom optisch dichteren Medium mit höherem Brechungsindex (n₁) in das optisch dünnere Medium mit kleinerem Brechungsindex (n₂) auftreten (n₁ > n₂), da der Brechungswinkel β zum Lot hin größer ist als der Einfallswinkel α. 2. Grenzwinkel der Totalreflexion (Snelliussches Brechungsgesetz mit maximalem Brechungswinkel β = 90°, sin 90° = 1): n₁ · sin α_c = n₂ · sin 90° => sin α_c = n₂ / n₁ = 1,00 / 2,00 = 0,50 => α_c = arcsin(0,50) = 30°. 3. Phänomenologische Unterscheidung: Beim exakten Grenzwinkel α = α_c = 30° tritt der gebrochene Lichtstrahl unter β = 90° streifend entlang der Grenzfläche aus. Erst für alle Einfallswinkel, die strikt größer als der Grenzwinkel sind (α > 30°), tritt kein Licht mehr ins optisch dünnere Medium über und das gesamte Licht wird vollständig in das optisch dichtere Medium zurückreflektiert (echte Totalreflexion).",
    explanations_incorrect: {
      A: "60° verwechselt Sinus und Kosinus bei der Grenzwinkelberechnung (sin 60° ≈ 0,866, cos 60° = 0,5); zudem ist die Richtungsbehauptung physikalisch falsch (Totalreflexion erfordert n₁ > n₂).",
      C: "45° entspräche einem Brechungsindexverhältnis von sin α_c = 1/√2 ≈ 0,707; zudem tritt Totalreflexion nicht bei jedem Winkel auf, sondern erfordert strikt α > α_c.",
      D: "90° entspricht streifendem Einfall parallel zur Grenzfläche; der Grenzwinkel zum Lot beträgt jedoch 30°.",
      E: "Behauptet fälschlich, Totalreflexion könne beim Übergang in ein dichteres Medium auftreten; dort wird das Licht jedoch zum Lot hin gebrochen (β < α), sodass Totalreflexion prinzipiell unmöglich ist."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // -------------------------------------------------------------
  // Kapitel 7: Atom- und Kernphysik (phys-07-atom-kernphysik) - 2 Aufgaben
  // -------------------------------------------------------------
  {
    id: "PHYS-BMS-GP4-017",
    chapter_id: "phys-07-atom-kernphysik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Atom- und Kernphysik",
    subtopic: "Radioaktivität: Zerfallsgesetz & Halbwertszeit",
    difficulty: "intermediate",
    stem: "In der nuklearmedizinischen Diagnostik wird das Radionuklid Technetium-99m (⁹⁹ᵐTc) mit einer Halbwertszeit von T_1/2 = 6,0 Stunden eingesetzt. Für eine diagnostische Untersuchung wird eine unbenutzte radiopharmazeutische Tc-99m-Präparation bereitgestellt, deren Aktivität um 08:00 Uhr morgens A₀ = 800 MBq beträgt. Welche Restaktivität A weist diese unbenutzte Präparation nach genau 24 Stunden (um 08:00 Uhr des Folgetages) auf?",
    options: {
      A: "A = 200 MBq",
      B: "A = 100 MBq",
      C: "A = 50 MBq",
      D: "A = 25 MBq",
      E: "A = 0 MBq"
    },
    correct_answer: "C",
    explanation_correct: "Nach dem radioaktiven Zerfallsgesetz gilt für die Aktivität: A(t) = A₀ · (1/2)^(t / T_1/2). In einem Zeitraum von t = 24 h vergehen genau n = 24 h / 6,0 h = 4 Halbwertszeiten. Die Aktivität halbiert sich somit viermal nacheinander: 800 MBq -> 400 MBq (nach 6 h) -> 200 MBq (nach 12 h) -> 100 MBq (nach 18 h) -> 50 MBq (nach 24 h). Formal: A(24 h) = 800 MBq · (1/2)⁴ = 800 MBq / 16 = 50 MBq (entspricht 6,25 % der Anfangsaktivität).",
    explanations_incorrect: {
      A: "200 MBq entspricht 2 Halbwertszeiten (12 Stunden).",
      B: "100 MBq entspricht 3 Halbwertszeiten (18 Stunden).",
      D: "25 MBq entspricht 5 Halbwertszeiten (30 Stunden).",
      E: "0 MBq unterstellt fälschlicherweise einen linearen Zerfall auf null nach 4 Halbwertszeiten."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },
  {
    id: "PHYS-BMS-GP4-018",
    chapter_id: "phys-07-atom-kernphysik",
    subject: "PHYS",
    section: "BMS",
    primary_topic: "Atom- und Kernphysik",
    subtopic: "Photoelektrischer Effekt & Quantennatur des Lichts",
    difficulty: "intermediate",
    stem: "Welches experimentelle Phänomen beim äußeren photoelektrischen Effekt (Photoeffekt) konnte durch die klassische Wellentheorie des Lichts NICHT erklärt werden und begründete Albert Einsteins Lichtquantenhypothese?",
    options: {
      A: "Für ein vorgegebenes Kathodenmaterial (feste Austrittsarbeit W_A) hängt die maximale kinetische Energie der herausgeschlagenen Photoelektronen streng linear von der Frequenz des eingestrahlten Lichts ab (E_kin,max = h · f - W_A) und ist unabhängig von der Lichtintensität; unterhalb einer materialspezifischen Grenzfrequenz (f_Grenz = W_A / h) werden selbst bei extrem hoher Lichtintensität keine Elektronen emittiert.",
      B: "Licht breitet sich im Vakuum mit der konstanten Lichtgeschwindigkeit c aus.",
      C: "Photoelektronen tragen eine negative elektrische Elementarladung und werden durch elektrische Felder abgelenkt.",
      D: "Bei sehr hoher Lichtintensität sinkt die Zahl der emittierten Elektronen auf null.",
      E: "Rotes Licht löst grundsätzlich mehr Photoelektronen mit höherer kinetischer Energie aus als ultraviolettes Licht gleicher Leistung."
    },
    correct_answer: "A",
    explanation_correct: "Nach der klassischen Wellentheorie sollte die Energieübertragung proportional zur Lichtintensität sein, sodass Licht jeder Frequenz bei genügend hoher Intensität Elektronen herausschlagen müsste. Im Experiment zeigte sich jedoch: 1. Für ein gegebenes Kathodenmaterial mit der elementspezifischen Austrittsarbeit W_A existiert eine Grenzfrequenz f_Grenz = W_A / h. Fällt Licht mit f < f_Grenz ein, werden selbst bei maximaler Bestrahlungsstärke (Intensität) keinerlei Photoelektronen ausgelöst. 2. Oberhalb der Grenzfrequenz (f > f_Grenz) hängt die maximale kinetische Energie der Photoelektronen gemäß der Einsteinschen Gleichung E_kin,max = h · f - W_A streng linear von der Frequenz f des Lichts ab und ist vollkommen unabhängig von der Intensität. 3. Eine Erhöhung der Intensität bei konstanter Frequenz f > f_Grenz führt lediglich zu einer größeren Anzahl herausgelöster Elektronen pro Zeiteinheit (höherer Photostrom), nicht aber zu energiereicheren Einzelelektronen. Dies belegte, dass Licht aus diskreten Energiequanten (Photonen) der Energie E = h · f besteht.",
    explanations_incorrect: {
      B: "Die Konstanz der Lichtgeschwindigkeit ist ein Postulat der Relativitätstheorie, nicht der Kern des Photoeffekts.",
      C: "Die negative Ladung des Elektrons war bereits bekannt und stand nicht im Widerspruch zur Wellentheorie.",
      D: "Bei höherer Intensität steigt die Zahl der Elektronen, sie sinkt nicht.",
      E: "Rotes Licht hat eine niedrigere Frequenz als UV-Licht und kann die Austrittsarbeit bei den meisten Metallen nicht überwinden."
    },
    metadata: {
      author: "MedAT BMS Physics Assessment Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  }
];

function mapDifficulty(d: "foundational" | "intermediate" | "advanced"): "Leicht" | "Mittel" | "Schwer" {
  if (d === "foundational") return "Leicht";
  if (d === "advanced") return "Schwer";
  return "Mittel";
}

function optionKeyToIndex(k: "A" | "B" | "C" | "D" | "E"): number {
  switch (k) {
    case "A": return 0;
    case "B": return 1;
    case "C": return 2;
    case "D": return 3;
    case "E": return 4;
  }
}

function buildComprehensiveExplanation(correct: string, incorrect: Record<string, string>): string {
  const distractorKeys = Object.keys(incorrect).sort();
  if (distractorKeys.length === 0) return correct;

  const distractorRows = distractorKeys.map((k) => `• **Option ${k}:** ${incorrect[k]}`).join("\n\n");
  return `${correct}\n\n**Distraktor-Analyse & Begründung der Falschantworten:**\n\n${distractorRows}`;
}

/**
 * Normalisierte 18 StoredQuestion-Objekte für die MedAT-H Generalprobe #4 Runtime-Engine
 */
export const GENERALPROBE_4_PHYS_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_PHYS_QUESTIONS.map(
  (q, idx) => {
    const optionsArray: [string, string, string, string, string] = [
      q.options.A,
      q.options.B,
      q.options.C,
      q.options.D,
      q.options.E,
    ];

    return {
      id: q.id,
      exam: "MEDAT-H",
      section: "BMS",
      subjectId: "phys",
      chapterId: q.chapter_id,
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Physik", "Generalprobe #4", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "4.0_gp4",
      setOrder: idx + 1,
    };
  }
);
