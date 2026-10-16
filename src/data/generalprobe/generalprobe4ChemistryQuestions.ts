/**
 * MedAT Chemie BMS — 24-Fragen-Qualitätskontroll- und Prüfungsaufgabenbank
 * Spezifisch kalibriert für die MedAT-H Generalprobe #4 (BMS Chemie-Testteil, exakt 24 Original-Aufgaben).
 * 
 * Fachlich und terminologisch präzise angepasst an das offizielle österreichische MedAT-Niveau
 * (VMC Stichwortkatalog & Reifeprüfung/Matura AHS-Niveau).
 * 
 * Verteilung:
 * - 6 Grundlagen/Leicht (Foundational) (25,0 %)
 * - 12 Mittel (Intermediate) (50,0 %)
 * - 6 Schwer (Advanced) (25,0 %)
 * 
 * Antwortschlüssel (ausgewogen und zyklusfrei):
 * - A: 5, B: 5, C: 5, D: 5, E: 4 (Gesamt: 24)
 */

import type { StoredQuestion } from "../questions/types";

export interface QcChemGp4QuestionRaw {
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

export const RAW_GENERALPROBE_4_CHEM_QUESTIONS: QcChemGp4QuestionRaw[] = [
  // ---------------------------------------------------------------------------------
  // 1. Atombau und Mikrokosmos (chem-01-atombau)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-001",
    chapter_id: "chem-01-atombau",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Atombau und Mikrokosmos",
    subtopic: "Quantenzahlen & Hundsche Regel",
    difficulty: "foundational",
    stem: "Welches grundlegende quantenmechanische Prinzip bestimmt, dass die drei entarteten 2p-Orbitale des neutralen Stickstoffatoms (Z = 7) im elektronischen Grundzustand von jeweils einem einzelnen Elektron mit parallelem Spin besetzt werden?",
    options: {
      A: "Das Pauli-Ausschlussprinzip, welches fordert, dass alle Elektronen eines Atoms dieselbe magnetische Quantenzahl m_l besitzen müssen.",
      B: "Die Hundsche Regel (Regel der maximalen Multiplizität), wonach energiegleiche Orbitale einer Unterschale zunächst einfach mit parallelem Spin besetzt werden, um die interelektronische Coulomb-Abstoßung zu minimieren.",
      C: "Das Heisenbergsche Unschärfeprinzip, das die gleichzeitige Besetzung desselben Orbitals durch zwei Elektronen mit identischem Impuls verbietet.",
      D: "Das Bohr-Sommerfeldsche Gesetz der minimalen Schalenradien.",
      E: "Das Le-Chatelier-Prinzip der quantenmechanischen Spin-Kompensation."
    },
    correct_answer: "B",
    explanation_correct: "Die Hundsche Regel (Regel der maximalen Multiplizität) besagt, dass entartete (energiegleiche) Orbitale einer Unterschale (wie die drei 2p-Orbitale px, py, pz) im elektronischen Grundzustand zunächst jeweils einfach mit Elektronen parallelen Spins besetzt werden. Dadurch weichen sich die Elektronen räumlich maximal aus, was die elektrostatische Coulomb-Abstoßung zwischen ihnen minimiert. Zudem führt die quantenmechanische Austauschwechselwirkung bei parallelem Spin zu einer zusätzlichen energetischen Stabilisierung. Erst ab dem Element Sauerstoff (Z = 8) beginnt die doppelte Besetzung (Spin-Paarung) der 2p-Orbitale.",
    explanations_incorrect: {
      A: "Das Pauli-Prinzip besagt im Gegenteil, dass keine zwei Elektronen in einem Atom in allen vier Quantenzahlen übereinstimmen dürfen; zwei Elektronen im selben Orbital müssen antiparallele Spins besitzen.",
      C: "Die Heisenbergsche Unschärferelation verknüpft Ort und Impuls eines Teilchens, bestimmt aber nicht primär die Spin-Multiplizität in entarteten Orbitalen.",
      D: "Ein solches Gesetz existiert im quantenmechanischen Orbitalmodell nicht.",
      E: "Das Prinzip von Le Chatelier beschreibt die thermodynamische Gleichgewichtsverschiebung bei äußerem Zwang, keine quantenmechanischen Orbitalzustände."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 2. Periodensystem & chemische Bindungen: Ionenradien (chem-04-bindungen)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-002",
    chapter_id: "chem-04-bindungen",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Periodensystem und chemische Bindungen",
    subtopic: "Periodizität: Ionenradien isoelektronischer Reihen",
    difficulty: "intermediate",
    stem: "In welcher der folgenden Reihenfolgen sind die Ionenradien der isoelektronischen Ionen O²⁻, F⁻, Na⁺, Mg²⁺ bei identischer Edelgaskonfiguration (10 Elektronen) vom GRÖSSTEN zum KLEINSTEN Radius geordnet?",
    options: {
      A: "Mg²⁺ > Na⁺ > F⁻ > O²⁻",
      B: "Na⁺ > Mg²⁺ > O²⁻ > F⁻",
      C: "O²⁻ = F⁻ = Na⁺ = Mg²⁺, da alle vier Ionen exakt dieselbe Elektronenzahl besitzen.",
      D: "O²⁻ > F⁻ > Na⁺ > Mg²⁺",
      E: "F⁻ > O²⁻ > Mg²⁺ > Na⁺"
    },
    correct_answer: "D",
    explanation_correct: "Bei einer isoelektronischen Reihe verfügen alle beteiligten Ionen über dieselbe Anzahl an Elektronen (hier 10 Elektronen mit der Neon-Konfiguration 1s² 2s² 2p⁶). Der Ionenradius wird folglich durch die Kernladungszahl Z (Protonenzahl) bestimmt: Eine höhere Kernladung zieht die identische Elektronenhülle mit größerer elektrostatischer Kraft nach innen zusammen. O²⁻ besitzt nur 8 Protonen (geringste Kernanziehung, stärkste interelektronische Aufweitung -> größter Radius), F⁻ hat 9 Protonen, Na⁺ hat 11 Protonen und Mg²⁺ hat 12 Protonen (stärkste effektive Kernladung Z_eff -> kleinster Radius). Die korrekte absteigende Reihenfolge lautet daher O²⁻ > F⁻ > Na⁺ > Mg²⁺.",
    explanations_incorrect: {
      A: "Dies ist die umgekehrte Reihenfolge vom kleinsten zum größten Radius.",
      B: "Kationen sind aufgrund der höheren Kernladungszahl wesentlich kleiner als Anionen derselben isoelektronischen Reihe.",
      C: "Trotz identischer Elektronenhülle variiert die Kernladungszahl (8 bis 12 Protonen) drastisch, was zu stark unterschiedlichen Radien führt.",
      E: "Das Oxid-Ion O²⁻ besitzt weniger Protonen als das Fluorid-Ion F⁻ und weist daher einen größeren Radius auf."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 3. Radioaktivität & Strahlung (chem-02-strahlung)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-003",
    chapter_id: "chem-02-strahlung",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Radioaktivität und Kernchemie",
    subtopic: "Alpha-Zerfall & Nuklidbilanz",
    difficulty: "intermediate",
    stem: "Welches Tochternuklid entsteht beim radioaktiven Alphazerfall eines Urankerns ²³⁸_92U, und welche fundamentale Eigenschaft charakterisiert die emittierte Alphastrahlung?",
    options: {
      A: "Thorium-234 (²³⁴_90Th); die Alphastrahlung besteht aus zweifach positiv geladenen Helium-4-Kernen mit hohem linearem Energietransfer und geringer Reichweite.",
      B: "Plutonium-238 (²³⁸_94Pu); die Alphastrahlung besteht aus ungeladenen masselosen Photonen mit extrem hoher Durchdringungsfähigkeit.",
      C: "Protactinium-234 (²³⁴_91Pa); die Alphastrahlung besteht aus negativ geladenen Hüllenelektronen.",
      D: "Blei-206 (²⁰⁶_82Pb); der Zerfall erfolgt in einem einzelnen elementaren Reaktionsschritt unter Abspaltung von 8 Protonen.",
      E: "Thorium-238 (²³⁸_90Th); beim Alphazerfall ändert sich nur die Ordnungszahl, während die Massenzahl unverändert bleibt."
    },
    correct_answer: "A",
    explanation_correct: "Beim radioaktiven Alphazerfall emittiert der instabile Mutterkern ein Alphateilchen, das aus einem vollständig ionisierten Helium-4-Kern (⁴_2He²⁺, bestehend aus 2 Protonen und 2 Neutronen) besteht. Nach den Erhaltungssätzen für Nukleonenzahl A und Kernladungszahl Z gilt: ²³⁸_92U -> ²³⁴_90Th + ⁴_2He²⁺. Die Massenzahl A verringert sich um 4 (von 238 auf 234) und die Kernladungszahl Z verringert sich um 2 (von 92 auf 90, Element Thorium, Th). Aufgrund ihrer zweifachen positiven Ladung und hohen Masse wechselwirken Alphateilchen stark mit Materie (hohe Ionisationsdichte / hoher LET) und besitzen eine sehr geringe Reichweite (in Luft wenige Zentimeter, vollständige Absorption bereits durch ein Blatt Papier).",
    explanations_incorrect: {
      B: "Ungeladene Photonen bilden Gammastrahlung, keinen Alphazerfall.",
      C: "Negativ geladene Elektronen bilden Beta-Minus-Strahlung (β⁻).",
      D: "Blei-206 ist das stabile Endnuklid der gesamten Uran-Radium-Zerfallsreihe, erfordert jedoch eine Kette von 8 Alpha- und 6 Beta-Zerfällen.",
      E: "Beim Alphazerfall sinkt die Massenzahl zwingend um 4 Einheiten; eine konstante Massenzahl kennzeichnet Beta-Zerfälle."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 4. Gasgesetze: Boyle-Mariotte (chem-03-gase)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-004",
    chapter_id: "chem-03-gase",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Gasgesetze und Aggregatzustände",
    subtopic: "Boyle-Mariotte-Gesetz & Isotherme Kompression",
    difficulty: "foundational",
    stem: "Eine ideale Gasportion befindet sich bei konstanter Temperatur T = 293 K in einem Zylinder mit beweglichem Kolben bei einem Ausgangsdruck von p₁ = 1,0 bar und nimmt ein Volumen von V₁ = 6,0 L ein. Der Kolben wird isotherm komprimiert, bis das Gasvolumen nur noch V₂ = 1,5 L beträgt. Welcher Druck p₂ stellt sich im Zylinder ein?",
    options: {
      A: "0,25 bar",
      B: "2,5 bar",
      C: "4,0 bar",
      D: "6,0 bar",
      E: "9,0 bar"
    },
    correct_answer: "C",
    explanation_correct: "Bei konstanter Temperatur (T = const, isotherme Zustandsänderung) und unveränderter Stoffmenge gilt für ein ideales Gas das Gesetz von Boyle-Mariotte: p · V = const, also p₁ · V₁ = p₂ · V₂. Durch Umstellen nach dem Enddruck p₂ erhält man: p₂ = p₁ · (V₁ / V₂) = 1,0 bar · (6,0 L / 1,5 L) = 1,0 bar · 4,0 = 4,0 bar. Eine Verringerung des Volumens auf ein Viertel führt bei isothermer Prozessführung zur exakten Vervierfachung des Gasdrucks.",
    explanations_incorrect: {
      A: "0,25 bar resultiert aus der falschen inversen Rechnung 1,0 · (1,5 / 6,0), was einer physikalisch unmöglichen Druckabnahme bei Kompression entspräche.",
      B: "2,5 bar ist ein arithmetischer Rechenfehler.",
      D: "6,0 bar ignoriert die Volumenänderung.",
      E: "9,0 bar multipliziert fehlerhaft die Volumina (6,0 · 1,5)."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 5. Gasgesetze: Reale Gase (chem-03-gase)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-005",
    chapter_id: "chem-03-gase",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Gasgesetze und Aggregatzustände",
    subtopic: "Reale Gase & Van-der-Waals-Zustandsgleichung",
    difficulty: "advanced",
    stem: "Unter welchen thermodynamischen Bedingungen weicht ein reales Gas am STÄRKSTEN vom idealen Gasverhalten ab, und welche physikalischen Ursachen beschreibt die Van-der-Waals-Gleichung hierfür?",
    options: {
      A: "Bei sehr hohem Druck und sehr hoher Temperatur, weil die kinetische Teilchenenergie unendlich wird.",
      B: "Bei extrem niedrigem Druck und hoher Temperatur, weil das Eigenvolumen der Gasteilchen vernachlässigbar klein wird.",
      C: "Bei Normalbedingungen (1 bar, 273 K), weil zwischenmolekulare Kräfte ausschließlich bei Normaldruck wirksam sind.",
      D: "Unter Schwerelosigkeit, weil die Gravitationskraft für das ideale Gasgesetz zwingend vorausgesetzt wird.",
      E: "Bei sehr hohem Druck und sehr tiefer Temperatur; Ursachen sind das nicht mehr vernachlässigbare Eigenvolumen der Moleküle (Kovolumen b) sowie die anziehenden zwischenmolekularen Kräfte (Binnendruck a/Vm²)."
    },
    correct_answer: "E",
    explanation_correct: "Das ideale Gasmodell setzt massenbehaftete Punkte ohne Eigenvolumen und vollkommen wechselwirkungsfreie Stöße voraus. Reale Gase weichen davon ab, wenn: 1. der Druck sehr hoch ist: Das freie Bewegungsvolumen wird stark reduziert, sodass das Eigenvolumen der Gasteilchen (Kovolumen b in der Van-der-Waals-Gleichung) einen wesentlichen Anteil am Gesamtvolumen einnimmt. 2. die Temperatur sehr tief ist: Die thermische kinetische Energie der Moleküle ist gering, sodass zwischenmolekulare Anziehungskräfte (Van-der-Waals-Kräfte, Dipol-Kräfte) wirksam werden und den gemessenen Wanddruck verringern (Binnendruck-Term a/Vm²). Bei hohem Druck und tiefer Temperatur (nahe dem Kondensationspunkt) sind die Abweichungen maximal.",
    explanations_incorrect: {
      A: "Hohe Temperaturen erhöhen die kinetische Energie weit über die intermolekularen Bindungsenergien und bringen reale Gase dem idealen Verhalten näher, nicht weiter weg.",
      B: "Bei sehr niedrigem Druck und hoher Temperatur verhalten sich reale Gase nahezu ideal.",
      C: "Unter Normalbedingungen ist das ideale Gasgesetz für viele Gase (wie Stickstoff oder Sauerstoff) eine hervorragende Näherung.",
      D: "Die Gravitation spielt für die mikroskopische Gaskinetik im Laborbehälter keine bestimmende Rolle."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 6. Chemische Bindungen: Metallbindung (chem-04-bindungen)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-006",
    chapter_id: "chem-04-bindungen",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Periodensystem und chemische Bindungen",
    subtopic: "Metallische Bindung & Elektronengasmodell",
    difficulty: "foundational",
    stem: "Welche Modellvorstellung erklärt die hohe elektrische Leitfähigkeit und die plastische Verformbarkeit (Duktilität) von Metallen auf atomarer Ebene zutreffend?",
    options: {
      A: "Positiv geladene Metall-Atomrümpfe bilden ein regelmäßiges Kristallgitter, das von frei beweglichen, delokalisierten Valenzelektronen („Elektronengas“) umgeben ist; bei Krafteinwirkung gleiten Gitterebenen ab, ohne dass sich gleichnamige Ladungen abstoßen.",
      B: "Metalle bestehen aus starren kovalenten Einzelmolekülen, die durch polare Wasserstoffbrückenbindungen zusammengehalten werden.",
      C: "Der elektrische Stromfluss in Metallen beruht ausschließlich auf dem gerichteten Transport von positiven Metall-Kationen durch feste Kanäle.",
      D: "Metalle besitzen eine klassische Ionenbindung; bei mechanischer Verformung stoßen sich gleichnamige Ionen sofort ab und zerspringen spröde.",
      E: "Elektronen sind fest in lokalisierten sp³-Hybridorbitalen gebunden und werden nur bei Absorption von ultraviolettem Licht mobilisiert."
    },
    correct_answer: "A",
    explanation_correct: "Nach dem Elektronengasmodell der Metallbindung geben die Metallatome ihre Valenzelektronen ab. Die resultierenden positiven Atomrümpfe (Metallkationen) ordnen sich in einem dichten Kristallgitter an, während die Valenzelektronen über den gesamten Festkörper delokalisiert sind und sich frei als 'Elektronengas' zwischen den Atomrümpfen bewegen. Dieses mobile Elektronengas bedingt die hohe elektrische Leitfähigkeit sowie die Wärmeleitfähigkeit. Bei mechanischer Krafteinwirkung können Schichten von Atomrümpfen aneinander vorbeigleiten, wobei das umgebende Elektronengas den Zusammenhalt kontinuierlich gewährleistet, ohne dass es wie bei Ionengittern zum Sprödbruch durch Abstoßung gleicher Ladungen kommt.",
    explanations_incorrect: {
      B: "Metalle bilden keine kovalenten Moleküle und besitzen keine Wasserstoffbrücken.",
      C: "Im festen Metall leiten frei bewegliche Elektronen den Strom; Ionenleitung existiert in Schmelzen oder Elektrolytlösungen.",
      D: "Sprödbruch durch Abstoßung gleichnamiger Ladungen beim Scheren ist das Kennzeichen von Ionengittern (z. B. Steinsalz NaCl), nicht von Metallen.",
      E: "Lokalisierte kovalente Bindungen kennzeichnen Isolatoren wie Diamant, nicht metallische Leiter."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 7. Chemische Bindungen: VSEPR-Modell (chem-04-bindungen)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-007",
    chapter_id: "chem-04-bindungen",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Periodensystem und chemische Bindungen",
    subtopic: "VSEPR-Modell: Molekülgeometrie von Schwefeltetrafluorid (SF4)",
    difficulty: "intermediate",
    stem: "Welche räumliche Molekülgeometrie sagt das VSEPR-Modell für das Schwefeltetrafluorid-Molekül (SF₄) voraus, und welche Position besetzt das freie Elektronenpaar des zentralen Schwefelatoms?",
    options: {
      A: "Regulär tetraedrisch mit Bindungswinkeln von exakt 109,5°, da Schwefel vier Fluoratome bindet.",
      B: "Quadratisch planar mit 90°-Bindungswinkeln, da vier kovalente Bindungen existieren.",
      C: "Wippenförmig („Seesaw“-Geometrie), basierend auf einer trigonal-bipyramidalen Elektronenpaaranordnung, wobei das freie Elektronenpaar eine äquatoriale Position besetzt.",
      D: "Linear mit zwei gegenüberliegenden F-S-F-Achsen im 180°-Winkel.",
      E: "Trigonal pyramidal mit dem Schwefelatom an der Spitze einer Dreieckspyramide."
    },
    correct_answer: "C",
    explanation_correct: "Schwefel (6. Hauptgruppe) besitzt 6 Valenzelektronen. In SF₄ bildet Schwefel 4 kovalente Einfachbindungen zu vier Fluoratomen aus und behält 2 Valenzelektronen als 1 freies Elektronenpaar (AX₄E-Typ). Die sterische Zahl beträgt 4 + 1 = 5, was einer trigonal-bipyramidalen Anordnung der fünf Elektronenpaare entspricht. Nach dem VSEPR-Modell beansprucht das freie Elektronenpaar mehr Raum als bindende Paare und besetzt bevorzugt eine äquatoriale Position, da es dort nur zwei ungünstige 90°-Wechselwirkungen zu den axialen Bindungen eingeht (in axialer Lage hätte es drei 90°-Abstoßungen). Die resultierende Molekülgestalt ist wippenförmig (engl. seesaw) mit leicht gestauchten Bindungswinkeln (< 120° äquatorial, < 180° axial).",
    explanations_incorrect: {
      A: "Ein reguläres Tetraeder erfordert sterische Zahl 4 ohne freie Elektronenpaare (wie in CH₄ oder SO₄²⁻).",
      B: "Quadratisch-planar tritt bei sterischer Zahl 6 mit zwei freien Elektronenpaaren auf (Typ AX₄E₂, wie in XeF₄).",
      D: "Lineare Geometrie erfordert Typ AX₂ (z. B. CO₂) oder AX₂E₃ (z. B. XeF₂).",
      E: "Trigonal-pyramidal kennzeichnet Moleküle vom Typ AX₃E (z. B. Ammoniak NH₃)."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 8. Chemische Bindungen: Born-Haber-Kreisprozess (chem-04-bindungen)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-008",
    chapter_id: "chem-04-bindungen",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Periodensystem und chemische Bindungen",
    subtopic: "Gitterenergie & Born-Haber-Kreisprozess",
    difficulty: "advanced",
    stem: "Wie hängt die Gitterenergie eines Ionenkristalls gemäß der Coulomb- bzw. Born-Landé-Beziehung von den Ionenladungen und Ionenradien ab, und welcher Teilschritt im Born-Haber-Kreisprozess liefert den dominanten exothermen Beitrag zur Salzbildung?",
    options: {
      A: "Die Gitterenergie sinkt mit steigender Ionenladung; der größte exotherme Beitrag stammt aus der Sublimationsenthalpie des festen Metalls.",
      B: "Die Gitterenergie ist proportional zum Produkt der Ionenladungen (|z⁺ · z⁻|) und umgekehrt proportional zum Ionenabstand (r⁺ + r⁻); die Gitterenergie selbst stellt den stärksten exothermen Teilschritt dar.",
      C: "Die Gitterenergie ist stets stark endotherm, da bei der Anordnung im Gitter Energie aus der Umgebung absorbiert werden muss.",
      D: "Kleinere Ionenradien verringern die Gitterenergie, weil sich die Atomkerne auf kurze Distanz elektrostatisch abstoßen.",
      E: "Die Elektronenaffinität der Halogene ist der einzige exotherme Schritt im gesamten Kreisprozess."
    },
    correct_answer: "B",
    explanation_correct: "Nach dem elektrostatischen Coulomb-Gesetz sowie den Gleichungen von Born-Landé und Kapustinskii ist der Betrag der Gitterenergie proportional zum Produkt der Ionenladungen und umgekehrt proportional zur Summe der Ionenradien: |U_G| ~ (|z⁺ · z⁻|) / (r⁺ + r⁻). Je höher die Ionenladungen (z. B. Mg²⁺ und O²⁻ im Vergleich zu Na⁺ und Cl⁻) und je kleiner die Ionenradien, desto mehr Energie wird bei der Gitterbildung frei. Im Born-Haber-Kreisprozess ist der Schritt der Gitterbildung aus freien gasförmigen Ionen (ΔH_Gitter << 0) der mit Abstand größte exotherme Energiegewinn, welcher die endothermen Teilschritte (Sublimation, Bindungsdissoziation, Ionisierungsenergien) thermodynamisch überkompensiert.",
    explanations_incorrect: {
      A: "Höhere Ladungen vergrößern die Gitterenergie drastisch; die Sublimationsenthalpie ist endotherm, nicht exotherm.",
      C: "Die Gitterbildung aus freien gasförmigen Ionen ist hochgradig exotherm (starke energetische Stabilisierung).",
      D: "Kleinere Ionenradien verkürzen den Ionenabstand und verstärken die elektrostatische Coulomb-Anziehung, was die Gitterenergie erhöht.",
      E: "Die Gitterenergie setzt ein Vielfaches der Energie der Elektronenaffinität frei."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 9. Stöchiometrie: Molare Masse & Stoffmenge (chem-05-stoechiometrie)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-009",
    chapter_id: "chem-05-stoechiometrie",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Stöchiometrie und chemische Reaktionen",
    subtopic: "Molare Masse, Stoffmenge & Massenberechnung",
    difficulty: "foundational",
    stem: "In einem labordiagnostischen Versuch wird eine Stoffportion von n = 0,25 mol reinem Calciumcarbonat (CaCO₃) benötigt. Welche Masse m muss auf der Analysenwaage eingewogen werden? (Molare Massen: M(Ca) = 40,0 g/mol, M(C) = 12,0 g/mol, M(O) = 16,0 g/mol)",
    options: {
      A: "12,5 g",
      B: "20,0 g",
      C: "50,0 g",
      D: "25,0 g",
      E: "100,0 g"
    },
    correct_answer: "D",
    explanation_correct: "Zunächst wird die molare Masse von Calciumcarbonat (CaCO₃) berechnet: M(CaCO₃) = 1 · 40,0 g/mol + 1 · 12,0 g/mol + 3 · 16,0 g/mol = 40,0 + 12,0 + 48,0 = 100,0 g/mol. Über die grundlegende Beziehung m = n · M ergibt sich die erforderliche Einwaage: m = 0,25 mol · 100,0 g/mol = 25,0 g.",
    explanations_incorrect: {
      A: "12,5 g entspräche einer Stoffmenge von 0,125 mol (die Hälfte von 0,25 mol).",
      B: "20,0 g ist ein Rechenfehler, der den Sauerstoffanteil unvollständig berücksichtigt.",
      C: "50,0 g entspräche 0,50 mol Calciumcarbonat.",
      E: "100,0 g ist die Masse von genau 1,0 mol Calciumcarbonat."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 10. Stöchiometrie: Verdünnungsberechnung (chem-05-stoechiometrie)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-010",
    chapter_id: "chem-05-stoechiometrie",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Stöchiometrie und chemische Reaktionen",
    subtopic: "Lösungskonzentration & Verdünnungsgesetz",
    difficulty: "intermediate",
    stem: "Für ein physiologisches Praktikum sollen V₂ = 500 mL einer Natriumchlorid-Lösung (NaCl) der Zielkonzentration c₂ = 0,20 mol/L durch Verdünnung einer konzentrierten Stammlösung (c₁ = 4,0 mol/L) mit Wasser hergestellt werden. Welches Volumen V₁ der Stammlösung muss entnommen und auf 500 mL aufgefüllt werden?",
    options: {
      A: "10 mL",
      B: "50 mL",
      C: "100 mL",
      D: "2,5 mL",
      E: "25 mL"
    },
    correct_answer: "E",
    explanation_correct: "Bei einem Verdünnungsprozess bleibt die gelöste Stoffmenge n konstant (n₁ = n₂). Es gilt das Verdünnungsgesetz: c₁ · V₁ = c₂ · V₂. Umstellen nach dem gesuchten Volumen der Stammlösung V₁ liefert: V₁ = (c₂ · V₂) / c₁ = (0,20 mol/L · 500 mL) / 4,0 mol/L = 100 mmol / 4,0 mmol/mL = 25 mL. Es müssen folglich exakt 25 mL der 4,0-molaren Stammlösung abgemessen und im Messkolben mit destilliertem Wasser auf 500 mL aufgefüllt werden.",
    explanations_incorrect: {
      A: "10 mL ergäbe eine Endkonzentration von nur 0,08 mol/L.",
      B: "50 mL ergäbe eine doppelt so hohe Konzentration von 0,40 mol/L.",
      C: "100 mL ignoriert den Konzentrationsfaktor der Stammlösung.",
      D: "2,5 mL resultiert aus einem Zehnerpotenzfehler bei der Einheitenumrechnung."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 11. Stöchiometrie: Limitierendes Reagenz & Gasbildung (chem-05-stoechiometrie)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-011",
    chapter_id: "chem-05-stoechiometrie",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Stöchiometrie und chemische Reaktionen",
    subtopic: "Limitierendes Reagenz & Ausbeuteberechnung",
    difficulty: "advanced",
    stem: "In einem geschlossenen Reaktionsgefäß werden m = 2,43 g metallisches Magnesium (M = 24,3 g/mol) mit V = 100 mL einer Salzsäurelösung der Konzentration c(HCl) = 1,5 mol/L zur Reaktion gebracht:\nMg (s) + 2 HCl (aq) ──> MgCl₂ (aq) + H₂ (g)\nWelches Reagenz begrenzt die Reaktion (limitierendes Edukt), und welche Stoffmenge Wasserstoffgas (H₂) kann theoretisch maximal entstehen?",
    options: {
      A: "Limitierendes Reagenz ist HCl; es entstehen maximal 0,075 mol H₂.",
      B: "Limitierendes Reagenz ist Mg; es entstehen maximal 0,10 mol H₂.",
      C: "Limitierendes Reagenz ist HCl; es entstehen maximal 0,15 mol H₂.",
      D: "Beide Edukte liegen im exakt stöchiometrischen Verhältnis vor; es entstehen 0,20 mol H₂.",
      E: "Limitierendes Reagenz ist Mg; es entstehen maximal 0,050 mol H₂."
    },
    correct_answer: "A",
    explanation_correct: "1. Vorhandene Stoffmengen berechnen:\nn(Mg) = m / M = 2,43 g / 24,3 g/mol = 0,10 mol.\nn(HCl) = c · V = 1,5 mol/L · 0,100 L = 0,15 mol.\n2. Stöchiometrischer Bedarf:\nGemäß der Reaktionsgleichung Mg + 2 HCl werden für 0,10 mol Mg genau 2 · 0,10 mol = 0,20 mol HCl benötigt. Da jedoch nur 0,15 mol HCl vorhanden sind, ist die Salzsäure (HCl) im Unterschuss und somit das limitierende Reagenz (Magnesium liegt im Überschuss vor; es verbleiben 0,025 mol ungelöstes Mg).\n3. Ausbeute an H₂:\nAus 2 mol HCl entsteht 1 mol H₂. Folglich entstehen aus 0,15 mol HCl maximal: n(H₂) = 0,15 mol / 2 = 0,075 mol H₂.",
    explanations_incorrect: {
      B: "Nimmt fälschlicherweise Magnesium als limitierend an und ignoriert den stöchiometrischen Faktor 2 bei der Salzsäure.",
      C: "Setzt die Stoffmenge von H₂ fälschlich 1:1 gleich der Stoffmenge von HCl, anstatt durch 2 zu dividieren.",
      D: "Übersieht, dass für 0,10 mol Mg genau 0,20 mol HCl erforderlich wären, nicht 0,15 mol.",
      E: "Rechnet fehlerhaft n(Mg)/2 = 0,050 mol, obwohl Magnesium im Überschuss vorliegt."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 12. Chemisches Gleichgewicht: Katalysatorwirkung (chem-06-gleichgewicht)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-012",
    chapter_id: "chem-06-gleichgewicht",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Chemisches Gleichgewicht und Kinetik",
    subtopic: "Katalysator & Aktivierungsenergie",
    difficulty: "foundational",
    stem: "Welche Wirkung übt der Zusatz eines Katalysators auf eine chemische Gleichgewichtsreaktion aus?",
    options: {
      A: "Er verschiebt die Gleichgewichtslage auf die Seite der Produkte und erhöht den numerischen Wert der Gleichgewichtskonstanten K.",
      B: "Er macht eine thermodynamisch unmögliche, stark endergone Reaktion (ΔG > 0) spontan freiwillig ablaufend.",
      C: "Er erhöht die Reaktionsenthalpie ΔH der Reaktion, indem er zusätzliche chemische Energie freisetzt.",
      D: "Er verlangsamt selektiv die Rückreaktion, wodurch die Ausbeute an Produkten thermodynamisch ansteigt.",
      E: "Er senkt die Aktivierungsenergie E_A durch Eröffnung eines alternativen Reaktionspfades und beschleunigt Hin- und Rückreaktion im gleichen Maße, ohne die Lage des thermodynamischen Gleichgewichts oder ΔG zu verändern."
    },
    correct_answer: "E",
    explanation_correct: "Ein Katalysator greift in das Reaktionsgeschehen ein, indem er einen alternativen Reaktionsmechanismus mit einer signifikant niedrigeren Aktivierungsenergie (E_A) bereitstellt. Dadurch steigt die Geschwindigkeit von Hinreaktion und Rückreaktion um exakt denselben Faktor an (k_hin und k_rueck werden gleichermaßen vergrößert). Da die Gleichgewichtskonstante K durch den Quotienten K = k_hin / k_rueck definiert ist und thermodynamisch ausschließlich von der freien Standardreaktionsenthalpie ΔG° abhängt, bleibt K vollkommen unverändert. Ein Katalysator beschleunigt lediglich die Einstellung des Gleichgewichtszustandes, verändert aber weder die Gleichgewichtslage noch die Enthalpie ΔH oder freie Enthalpie ΔG.",
    explanations_incorrect: {
      A: "Katalysatoren verändern die thermodynamische Gleichgewichtskonstante K niemals.",
      B: "Katalysatoren können keine thermodynamisch verbotenen Reaktionen (ΔG > 0) erzwingen.",
      C: "Die Reaktionsenthalpie ΔH ist eine thermodynamische Zustandsfunktion und bleibt unbeeinflusst.",
      D: "Eine ungleiche Beeinflussung von Hin- und Rückreaktion widerspricht dem Prinzip der mikroskopischen Reversibilität."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 13. Chemisches Gleichgewicht: Prinzip von Le Chatelier (chem-06-gleichgewicht)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-013",
    chapter_id: "chem-06-gleichgewicht",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Chemisches Gleichgewicht und Kinetik",
    subtopic: "Prinzip von Le Chatelier & Druck/Temperatureinfluss",
    difficulty: "intermediate",
    stem: "Gegeben ist die exotherme Gleichgewichtsreaktion der industriellen Schwefelsäureherstellung (Kontaktverfahren):\n2 SO₂ (g) + O₂ (g) <──> 2 SO₃ (g)    (ΔH° = -198 kJ/mol)\nWelche Maßnahme führt gemäß dem Prinzip von Le Chatelier zu einer Verschiebung der Gleichgewichtslage auf die Seite des Produkts Schwefeltrioxid (SO₃)?",
    options: {
      A: "Erniedrigung des Gesamtdrucks bei gleichzeitiger Temperaturerhöhung.",
      B: "Erhöhung des Gesamtdrucks sowie Temperaturerniedrigung.",
      C: "Kontinuierliche Entfernung von SO₂ aus dem Reaktionsraum.",
      D: "Zugabe eines Inertgases bei konstantem Volumen ohne Druckänderung der Reaktionspartner.",
      E: "Erhöhung der Temperatur bei konstantem Druck."
    },
    correct_answer: "B",
    explanation_correct: "Gemäß dem Prinzip von Le Chatelier weicht ein Gleichgewichtssystem einem äußeren Zwang aus: 1. Druckeinfluss: Auf der Eduktseite liegen 2 + 1 = 3 mol gasförmige Teilchen vor, auf der Produktseite nur 2 mol Gas. Eine Erhöhung des Gesamtdrucks verschiebt das Gleichgewicht auf die Seite mit der geringeren Molzahl an Gasteilchen (zur Produktseite SO₃). 2. Temperatureinfluss: Die Reaktion ist exotherm (ΔH° < 0, Wärme wird freigesetzt). Eine Temperaturerniedrigung (Wärmeentzug) begünstigt die wärmeliefernde Hinreaktion und verschiebt das Gleichgewicht ebenfalls nach rechts zu SO₃. Folglich maximiert die Kombination aus Druckerhöhung und Temperaturabsenkung die Ausbeute an SO₃.",
    explanations_incorrect: {
      A: "Drucksenkung begünstigt die Eduktseite (3 mol Gas); Temperaturerhöhung begünstigt die endotherme Rückreaktion.",
      C: "Das Entfernen des Edukts SO₂ entzieht dem System Ausgangsstoff und verschiebt das Gleichgewicht nach links.",
      D: "Die Zugabe eines Inertgases bei konstantem Volumen ändert die Partialdrücke der Edukte und Produkte nicht und hat keinen Einfluss auf das Gleichgewicht.",
      E: "Temperaturerhöhung verschiebt das Gleichgewicht einer exothermen Reaktion zur Eduktseite."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 14. Chemisches Gleichgewicht & Thermodynamik: Gibbs-Helmholtz (chem-06-gleichgewicht)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-014",
    chapter_id: "chem-06-gleichgewicht",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Chemisches Gleichgewicht und Kinetik",
    subtopic: "Gibbs-Helmholtz-Gleichung & Freiwilligkeit",
    difficulty: "advanced",
    stem: "Für einen chemischen Vorgang wird eine endotherme Reaktionsenthalpie von ΔH° = +40 kJ/mol und eine positive Reaktionsentropie von ΔS° = +100 J/(mol·K) gemessen. Welche Aussage über die thermodynamische Freiwilligkeit (Spontaneität) dieser Reaktion auf Basis der Gibbs-Helmholtz-Gleichung ist korrekt?",
    options: {
      A: "Die Reaktion läuft bei jeder beliebigen Temperatur freiwillig ab, weil die Entropie zunimmt.",
      B: "Die Reaktion ist bei keiner Temperatur freiwillig, da endotherme Reaktionen niemals spontan ablaufen können.",
      C: "Die Reaktion verläuft ausschließlich unterhalb einer Temperatur von T = 400 K freiwillig.",
      D: "Die Reaktion läuft oberhalb einer Schwellentemperatur von T = 400 K (ca. 127 °C) freiwillig ab (ΔG° < 0), da bei hohen Temperaturen der Entropieterm T·ΔS° den Enthalpieterm überwiegt.",
      E: "Die freie Enthalpie ΔG° ist temperaturunabhängig und beträgt stets exakt +40 kJ/mol."
    },
    correct_answer: "D",
    explanation_correct: "Nach der Gibbs-Helmholtz-Gleichung gilt: ΔG° = ΔH° - T · ΔS°. Eine Reaktion läuft thermodynamisch freiwillig (spontan/exergon) ab, wenn ΔG° < 0 ist, also: ΔH° - T · ΔS° < 0 => T · ΔS° > ΔH° => T > ΔH° / ΔS°. Einheiten angleichen: ΔH° = +40 kJ/mol = +40.000 J/mol; ΔS° = +100 J/(mol·K). Daraus folgt: T_Gleichgewicht = 40.000 J/mol / 100 J/(mol·K) = 400 K (entspricht 400 - 273,15 = ca. 127 °C). Bei Temperaturen oberhalb von 400 K überwiegt der Term T · ΔS° den positiven Enthalpieterm, wodurch ΔG° negativ wird und die Reaktion freiwillig abläuft (entropiegetriebene Reaktion).",
    explanations_incorrect: {
      A: "Bei tiefen Temperaturen (T < 400 K) überwiegt ΔH° > 0, sodass ΔG° positiv ist und die Reaktion nicht freiwillig abläuft.",
      B: "Endotherme Reaktionen können sehr wohl freiwillig ablaufen, wenn die Entropiezunahme bei ausreichender Temperatur überwiegt (z. B. Schmelzen von Eis, Lösen vieler Salze).",
      C: "Unterhalb von 400 K ist ΔG° > 0, die Reaktion verläuft dort gerade nicht freiwillig.",
      E: "ΔG° hängt über den Term -T·ΔS° direkt von der absoluten Temperatur T ab."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 15. Elemente: Stickstoffchemie & Ostwald-Verfahren (chem-07-elemente)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-015",
    chapter_id: "chem-07-elemente",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Elemente und ihre Verbindungen",
    subtopic: "Stickstoffchemie, Ostwald-Verfahren & Oxidationszahlen",
    difficulty: "intermediate",
    stem: "Bei der großtechnischen Herstellung von Salpetersäure (HNO₃) nach dem Ostwald-Verfahren wird Ammoniak (NH₃) mehrstufig oxidiert. Welche Oxidationszahlen weist das Stickstoffatom in den Schlüsselverbindungen Ammoniak (NH₃), Stickstoffmonoxid (NO) und Salpetersäure (HNO₃) in dieser Reihenfolge auf?",
    options: {
      A: "NH₃: +3 ──> NO: +2 ──> HNO₃: +5",
      B: "NH₃: -3 ──> NO: +1 ──> HNO₃: +3",
      C: "NH₃: -3 ──> NO: +2 ──> HNO₃: +5",
      D: "NH₃: 0 ──> NO: +2 ──> HNO₃: +7",
      E: "NH₃: -1 ──> NO: +2 ──> HNO₃: +6"
    },
    correct_answer: "C",
    explanation_correct: "Die formalen Oxidationszahlen von Stickstoff ergeben sich anhand der Elektronegativitäten (H = 2,2; N = 3,0; O = 3,4): 1. In Ammoniak (NH₃) ist Stickstoff elektronegativer als die drei Wasserstoffatome (+1), somit gilt: Ox(N) + 3·(+1) = 0 => Ox(N) = -3. 2. In Stickstoffmonoxid (NO) ist Sauerstoff elektronegativer (-2): Ox(N) + (-2) = 0 => Ox(N) = +2. 3. In Salpetersäure (HNO₃) bindet Stickstoff an ein H (+1) und drei O (-2): +1 + Ox(N) + 3·(-2) = 0 => Ox(N) - 5 = 0 => Ox(N) = +5. Der Stickstoff wird im Ostwald-Verfahren von -3 über +2 zur maximalen Oxidationsstufe +5 oxidiert.",
    explanations_incorrect: {
      A: "Verwechselt das Vorzeichen in NH₃ (Stickstoff ist elektronegativer als Wasserstoff, nicht umgekehrt).",
      B: "+1 entspricht Distickstoffmonoxid (Lachgas, N₂O); +3 entspricht der salpetrigen Säure (HNO₂).",
      D: "Oxidationszahl 0 liegt nur im elementaren N₂ vor; +7 existiert für Stickstoff nicht (maximal 5 Valenzelektronen).",
      E: "-1 und +6 sind keine korrekten Oxidationsstufen für NH₃ und HNO₃."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 16. Elemente: Kohlenstoffallotrope (chem-07-elemente)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-016",
    chapter_id: "chem-07-elemente",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Elemente und ihre Verbindungen",
    subtopic: "Kohlenstoffallotrope: Diamant vs. Graphit",
    difficulty: "intermediate",
    stem: "Worauf beruht der fundamentale Unterschied in der elektrischen Leitfähigkeit und mechanischen Härte zwischen den reinen Kohlenstoffallotropen Diamant und Graphit?",
    options: {
      A: "Im Diamant ist jedes Kohlenstoffatom sp³-hybridisiert und tetraedrisch mit vier Nachbarn verknüpft (Isolator); im Graphit liegen sp²-hybridisierte planare Schichten mit einem delokalisierten π-Elektronensystem vor, das entlang der Schichten elektrischen Strom leitet.",
      B: "Graphit besteht aus reinem Kohlenstoff, während Diamant beträchtliche Mengen an metallischem Eisen enthält, das kovalente Bindungen blockiert.",
      C: "Im Diamant sind die Kohlenstoffatome durch schwache Van-der-Waals-Kräfte verbunden, während Graphit ein dreidimensionales Ionengitter bildet.",
      D: "Graphit ist ein elektrischer Isolator, weil alle vier Valenzelektronen in starren σ-Bindungen lokalisiert sind.",
      E: "Diamant leitet den elektrischen Strom besser als Graphit, weil seine Atome dichter gepackt sind."
    },
    correct_answer: "A",
    explanation_correct: "Im Diamanten ist jedes Kohlenstoffatom sp³-hybridisiert und über vier kovalente σ-Bindungen tetraedrisch mit vier Nachbaratomen in einem starren dreidimensionalen Raumgitter verknüpft. Alle Valenzelektronen sind in Bindungen lokalisiert; es gibt keine frei beweglichen Elektronen, weshalb Diamant ein elektrischer Isolator und extrem hart ist. Im Graphit sind die Kohlenstoffatome sp²-hybridisiert und bilden planare Sechseckschichten. Das vierte Valenzelektron jedes C-Atoms befindet sich in einem senkrecht stehenden p_z-Orbital, die über die Schicht zu einem delokalisierten π-Elektronensystem verschmelzen. Diese freien Elektronen bedingen die hohe elektrische Leitfähigkeit parallel zu den Schichten. Zwischen den Schichten wirken nur schwache Van-der-Waals-Kräfte, was die Weichheit und Schmierfähigkeit von Graphit erklärt.",
    explanations_incorrect: {
      B: "Sowohl Diamant als auch Graphit sind reine Allotrope des chemischen Elements Kohlenstoff.",
      C: "Verdreht die Gittertypen; Diamant ist ein kovalentes 3D-Netzwerk, Graphit besitzt Schichtgitter mit Van-der-Waals-Abständen.",
      D: "Graphit ist ein guter elektrischer Leiter entlang der Schichten, kein Isolator.",
      E: "Diamant ist ein elektrischer Nichtleiter."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 17. Säuren & Basen: Brønsted-Paare (chem-08-saeuren-basen)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-017",
    chapter_id: "chem-08-saeuren-basen",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Säuren, Basen und Salze",
    subtopic: "Brønsted-Lowry & Konjugierte Säure-Base-Paare",
    difficulty: "foundational",
    stem: "Welche chemische Formel repräsentiert die korrespondierende (konjugierte) Base zum Dihydrogenphosphat-Anion (H₂PO₄⁻) gemäß der Brønsted-Lowry-Theorie?",
    options: {
      A: "Phosphorsäure (H₃PO₄)",
      B: "Hydrogenphosphat (HPO₄²⁻)",
      C: "Phosphat (PO₄³⁻)",
      D: "Phosphorige Säure (H₃PO₃)",
      E: "Dihydrogenphosphit (H₂PO₃⁻)"
    },
    correct_answer: "B",
    explanation_correct: "Nach der Brønsted-Lowry-Theorie entsteht die korrespondierende (konjugierte) Base einer Säure durch die Abgabe genau eines Protons (H⁺): Säure <──> konjugierte Base + H⁺. Für das Dihydrogenphosphat-Ion gilt: H₂PO₄⁻ <──> HPO₄²⁻ + H⁺. Bei Abgabe eines H⁺ sinkt die Wasserstoffzahl von 2 auf 1 und die negative Ladung erhöht sich von einfach negativ (-1) auf zweifach negativ (-2). Die korrespondierende Base lautet folglich Hydrogenphosphat (HPO₄²⁻).",
    explanations_incorrect: {
      A: "H₃PO₄ entsteht durch Protonenaufnahme und ist folglich die konjugierte Säure zu H₂PO₄⁻.",
      C: "PO₄³⁻ entsteht erst durch Abspaltung von zwei Protonen (ist die konjugierte Base zu HPO₄²⁻).",
      D: "H₃PO₃ ist phosphorige Säure mit Phosphor in der Oxidationsstufe +3 (statt +5).",
      E: "H₂PO₃⁻ ist das Anion der phosphorigen Säure."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 18. Säuren & Basen: pH schwacher Säuren (chem-08-saeuren-basen)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-018",
    chapter_id: "chem-08-saeuren-basen",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Säuren, Basen und Salze",
    subtopic: "pH-Wert-Berechnung schwacher Säuren",
    difficulty: "intermediate",
    stem: "Eine schwache einprotonige Säure HA liegt in wässriger Lösung mit einer Anfangskonzentration von c₀ = 0,010 mol/L (1,0 · 10⁻² mol/L) vor. Der negative dekadische Säureexponent beträgt pK_s = 4,00. Welcher pH-Wert stellt sich in dieser Lösung näherungsweise ein (unter Annahme eines geringen Dissoziationsgrades α << 1)?",
    options: {
      A: "pH = 1,00",
      B: "pH = 2,00",
      C: "pH = 2,50",
      D: "pH = 3,00",
      E: "pH = 4,00"
    },
    correct_answer: "D",
    explanation_correct: "Für eine schwache einprotonige Säure mit geringem Dissoziationsgrad gilt die Standard-Näherungsformel: pH = 1/2 · (pK_s - lg c₀). Einsetzen der gegebenen Parameter: c₀ = 1,0 · 10⁻² mol/L => lg c₀ = -2,00; pK_s = 4,00. Daraus folgt: pH = 1/2 · [4,00 - (-2,00)] = 1/2 · [4,00 + 2,00] = 1/2 · 6,00 = 3,00. Die Konzentration der Oxoniumionen beträgt [H⁺] = 10⁻³ mol/L, was einem Dissoziationsgrad von α = 10⁻³ / 10⁻² = 0,10 (10 %) entspricht und die Näherung bestätigt.",
    explanations_incorrect: {
      A: "pH = 1,00 ist ein arithmetischer Fehler.",
      B: "pH = 2,00 wäre der pH-Wert, wenn es sich um eine starke Säure mit vollständiger Dissoziation handelte (-lg 0,010 = 2).",
      C: "pH = 2,50 entsteht durch fehlerhafte Formelanwendung.",
      E: "pH = 4,00 setzt fälschlich pH = pK_s, was nur bei einem äquimolaren Puffergemisch [HA] = [A⁻] zutrifft."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 19. Säuren & Basen: Puffer & Henderson-Hasselbalch (chem-08-saeuren-basen)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-019",
    chapter_id: "chem-08-saeuren-basen",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Säuren, Basen und Salze",
    subtopic: "Pufferkapazität & Henderson-Hasselbalch-Gleichung",
    difficulty: "advanced",
    stem: "Ein Liter eines wässrigen Acetatpuffers enthält anfangs 0,20 mol Natriumacetat (CH₃COONa) und 0,10 mol Essigsäure (CH₃COOH; pK_s = 4,75). Zu dieser Pufferlösung werden ohne wesentliche Volumenänderung 0,050 mol gasförmiger Chlorwasserstoff (HCl, starke Säure) gegeben und vollständig gelöst. Welcher pH-Wert resultiert nach der Gleichgewichtseinstellung? (Hinweis: lg 2 ≈ 0,30)",
    options: {
      A: "pH = 1,30",
      B: "pH = 3,85",
      C: "pH = 4,75",
      D: "pH = 5,05",
      E: "pH = 5,35"
    },
    correct_answer: "C",
    explanation_correct: "Vor der Säurezugabe berechnet sich der pH-Wert über die Henderson-Hasselbalch-Gleichung: pH₀ = pK_s + lg([Ac⁻]/[HAc]) = 4,75 + lg(0,20 / 0,10) = 4,75 + lg 2 = 4,75 + 0,30 = 5,05. Bei Zugabe der starken Säure HCl (0,050 mol H₃O⁺) reagieren die Protonen nahezu quantitativ mit der konjugierten Base Acetat: CH₃COO⁻ + H₃O⁺ ──> CH₃COOH + H₂O. Stoffmengen nach der Neutralisation: Acetat: n(Ac⁻) = 0,20 mol - 0,050 mol = 0,15 mol. Essigsäure: n(HAc) = 0,10 mol + 0,050 mol = 0,15 mol. Das Verhältnis von konjugierter Base zu Säure beträgt nun exakt 1:1 (0,15 mol / 0,15 mol = 1). Somit gilt: pH_neu = pK_s + lg(1) = 4,75 + 0 = 4,75. Der pH-Wert sinkt durch das Puffervermögen lediglich moderat von 5,05 auf 4,75 ab.",
    explanations_incorrect: {
      A: "pH = 1,30 wäre der pH-Wert von 0,050 mol/L HCl in ungepuffertem Wasser (-lg 0,050 ≈ 1,30).",
      B: "pH = 3,85 entsteht bei falscher doppelter Subtraktion.",
      D: "pH = 5,05 ist der Ausgangs-pH-Wert vor der Säurezugabe.",
      E: "pH = 5,35 nähme fälschlicherweise eine Zugabe von Base anstelle von Säure an."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 20. Redox & Elektrochemie: Redox-Stöchiometrie (chem-09-redox)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-020",
    chapter_id: "chem-09-redox",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Redox-Reaktionen und Elektrochemie",
    subtopic: "Redox-Gleichungsausgleich im Sauren (Permanganometrie)",
    difficulty: "intermediate",
    stem: "In saurer wässriger Lösung oxidiert das Permanganat-Anion (MnO₄⁻) gelöste Eisen(II)-Ionen (Fe²⁺) quantitativ zu Eisen(III)-Ionen (Fe³⁺), wobei das Manganatom zu Mangan(II)-Kationen (Mn²⁺) reduziert wird. Welche stöchiometrischen Stoffmengenverhältnisse ergeben sich beim Ausgleich der Gesamt-Redoxgleichung für Fe²⁺ und H⁺ pro 1 mol MnO₄⁻?",
    options: {
      A: "1 mol Fe²⁺ und 2 mol H⁺",
      B: "2 mol Fe²⁺ und 4 mol H⁺",
      C: "3 mol Fe²⁺ und 6 mol H⁺",
      D: "4 mol Fe²⁺ und 5 mol H⁺",
      E: "5 mol Fe²⁺ und 8 mol H⁺"
    },
    correct_answer: "E",
    explanation_correct: "Aufstellen der Teilreaktionen: 1. Oxidation: Fe²⁺ ──> Fe³⁺ + e⁻ (Eisen gibt 1 Elektron ab; Faktor 5). 2. Reduktion: Mangan wird von Oxidationsstufe +7 in MnO₄⁻ zu +2 in Mn²⁺ reduziert, nimmt also 5 Elektronen auf. Der Sauerstoff wird im Sauren durch Protonen zu Wasser abgefangen: MnO₄⁻ + 8 H⁺ + 5 e⁻ ──> Mn²⁺ + 4 H₂O. 3. Gesamtreaktion nach Elektronenausgleich (5 Elektronen): 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ ──> 5 Fe³⁺ + Mn²⁺ + 4 H₂O. Pro 1 mol MnO₄⁻ werden somit genau 5 mol Fe²⁺ oxidiert und 8 mol H⁺ verbraucht.",
    explanations_incorrect: {
      A: "Ignoriert die 5-Elektronen-Änderung von Mangan (+7 nach +2).",
      B: "Setzt fälschlicherweise eine 2-Elektronenübertragung an.",
      C: "3 mol Fe²⁺ entspräche der Reduktion zu Mangandioxid (Braunstein MnO₂, Stufe +4) im neutralen/basischen Milieu.",
      D: "Vertauscht stöchiometrische Faktoren."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 21. Redox & Elektrochemie: Galvanisches Element (chem-09-redox)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-021",
    chapter_id: "chem-09-redox",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Redox-Reaktionen und Elektrochemie",
    subtopic: "Galvanische Zelle & Standard-Zellspannung",
    difficulty: "intermediate",
    stem: "Gegeben sind die Standard-Reduktionspotenziale zweier Halbzellen bei 25 °C:\nE°(Ag⁺ / Ag) = +0,80 V    und    E°(Cu²⁺ / Cu) = +0,34 V\nWelche Standard-Zellspannung ΔE° liefert die daraus aufgebaute galvanische Zelle, und welcher Prozess findet an der Kupferelektrode statt?",
    options: {
      A: "ΔE° = +1,14 V; Kupfer scheidet sich an der Kathode elementar ab.",
      B: "ΔE° = +0,46 V; die Kupferelektrode fungiert als Anode und wird oxidativ aufgelöst (Cu ──> Cu²⁺ + 2 e⁻).",
      C: "ΔE° = +0,46 V; Kupfer dient als Kathode zur Reduktion von Silberkationen.",
      D: "ΔE° = -0,46 V; die Reaktion kann nur unter Zufuhr externer elektrischer Energie als Elektrolyse ablaufen.",
      E: "ΔE° = +0,12 V; an beiden Elektroden wird elementarer Wasserstoff freigesetzt."
    },
    correct_answer: "B",
    explanation_correct: "In einer galvanischen Zelle läuft die Gesamtreaktion freiwillig ab (ΔE° > 0). Die Halbzelle mit dem positiveren Standardpotenzial erzwingt die Reduktion und bildet die Kathode (Pluspol): Ag⁺ + e⁻ ──> Ag (E° = +0,80 V). Die Halbzelle mit dem weniger positiven Potenzial wird oxidiert und bildet die Anode (Minuspol): Cu ──> Cu²⁺ + 2 e⁻ (E° = +0,34 V). Die Standard-Zellspannung berechnet sich als Differenz: ΔE° = E°(Kathode) - E°(Anode) = +0,80 V - (+0,34 V) = +0,46 V. Da metallisches Kupfer oxidiert wird, löst sich die Kupferelektrode (Anode) mit fortschreitender Stromentnahme auf.",
    explanations_incorrect: {
      A: "Addiert fälschlich beide Potenziale (0,80 + 0,34 = 1,14 V).",
      C: "Vertauscht Anode und Kathode; Kupfer ist der edlere Partner gegenüber Zink, aber unedler als Silber.",
      D: "Galvanische Elemente liefern per Definition positive Zellspannungen (ΔE° > 0, exergone Reaktion).",
      E: "Rechnet fehlerhaft mit Stöchiometriefaktoren (0,80 - 2·0,34 = 0,12 V); Standardpotenziale sind intensive Größen und dürfen nicht mit Stöchiometriekoeffizienten multipliziert werden."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 22. Organische Chemie: Nucleophile Addition an Carbonyl (chem-10-organik)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-022",
    chapter_id: "chem-10-organik",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Organische Chemie",
    subtopic: "Carbonylreaktionen: Halbacetalbildung",
    difficulty: "intermediate",
    stem: "Welches Reaktionsprodukt entsteht primär bei der säurekatalysierten Addition von genau einem Äquivalent eines Alkohols (R'-OH) an die Carbonylgruppe eines Aldehyds (R-CHO), und welche funktionellen Gruppen trägt das neu gebildete Kohlenstoffzentrum?",
    options: {
      A: "Ein Halbacetal; das zentrale Kohlenstoffatom trägt sowohl eine Hydroxygruppe (-OH) als auch eine Alkoxygruppe (-O-R').",
      B: "Ein Carbonsäureester; das zentrale Kohlenstoffatom bildet eine Doppelbindung zu einem Sauerstoffatom aus.",
      C: "Ein Keton; durch Wasserabspaltung entsteht eine neue isolierte Carbonylfunktion.",
      D: "Ein Vollacetal mit zwei freien Hydroxygruppen am selben Kohlenstoffatom.",
      E: "Ein Enol mit einer Kohlenstoff-Kohlenstoff-Dreifachbindung."
    },
    correct_answer: "A",
    explanation_correct: "Bei der säurekatalysierten nucleophilen Addition eines Alkohols an die Carbonylgruppe eines Aldehyds greift das freie Elektronenpaar des Alkoholsauerstoffs das elektrophile Carbonyl-Kohlenstoffatom an. Nach Protonenumlagerung entsteht ein Halbacetal (Hemiacetal). Das vormals planare sp²-hybridisierte Kohlenstoffatom wird sp³-hybridisiert und trägt nun vier funktionelle Einheiten: den Rest R, ein Wasserstoffatom -H, eine Hydroxygruppe -OH sowie eine Alkoxy-/Ethergruppe -O-R'. Erst bei nachfolgender Reaktion mit einem zweiten Äquivalent Alkohol unter Wasserabspaltung entsteht das Vollacetal. Diese Reaktion ist der fundamentale Mechanismus des Ringschlusses von Monosacchariden (intramolekulares Halbacetal, z. B. Glucopyranose).",
    explanations_incorrect: {
      B: "Ein Ester entsteht durch Kondensation einer Carbonsäure mit einem Alkohol unter Wasserabspaltung.",
      C: "Die Umwandlung eines Aldehyds in ein Keton durch Alkoholaddition ist chemisch nicht möglich.",
      D: "Ein Vollacetal trägt zwei Alkoxygruppen (-OR'), keine freien Hydroxygruppen (ein Gem-Diol mit zwei -OH wäre nach der Erlenmeyer-Regel instabil).",
      E: "Enole besitzen eine C=C-Doppelbindung mit benachbarter Hydroxygruppe, keine Dreifachbindung."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 23. Organische Chemie: Stereochemie & Meso-Verbindungen (chem-10-organik)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-023",
    chapter_id: "chem-10-organik",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Organische Chemie",
    subtopic: "Chiralität, Enantiomere & Meso-Verbindungen (Weinsäure)",
    difficulty: "advanced",
    stem: "Die 2,3-Dihydroxybutandisäure (Weinsäure, HOOC-CH(OH)-CH(OH)-COOH) besitzt zwei Chiralitätszentren mit identischem Substitutionsmuster. Warum existieren für Weinsäure insgesamt nur DREI Stereoisomere anstelle der nach der Formel 2ⁿ maximal möglichen vier Stereoisomere?",
    options: {
      A: "Weil eines der Chiralitätszentren aufgrund sterischer Hinderung spontan zu einer Carbonylgruppe oxidiert wird.",
      B: "Weil Weinsäure eine planare C=C-Doppelbindung besitzt, die jede freie Drehbarkeit verhindert.",
      C: "Weil die Enantiomere bei Raumtemperatur rasch racemisieren und daher nicht unterscheidbar sind.",
      D: "Weil das (2R, 3S)-Isomer eine interne Spiegelebene aufweist, mit seinem Spiegelbild deckungsgleich ist und somit als achirale, optisch inaktive meso-Form vorliegt.",
      E: "Weil Moleküle mit zwei asymmetrischen Kohlenstoffatomen grundsätzlich nur als 1:1-Racemat kristallisieren können."
    },
    correct_answer: "D",
    explanation_correct: "Bei Molekülen mit n Chiralitätszentren beträgt die theoretische Maximalzahl an Stereoisomeren 2ⁿ (für n = 2 also 2² = 4). Tragen beide Stereozentren jedoch identische Substituenten (hier jeweils -H, -OH, -COOH), tritt eine interne Symmetrie auf: 1. Das (2R, 3R)-Isomer (rechtsdrehend) und das (2S, 3S)-Isomer (linksdrehend) bilden ein Paar chiraler, optisch aktiver Enantiomere. 2. Beim (2R, 3S)-Isomer kehrt das zweite Zentrum die Konfiguration des ersten spiegelsymmetrisch um. Das Molekül besitzt eine interne Spiegelebene (oder ein Inversionszentrum). Das Spiegelbild von (2R, 3S) ist durch Drehung um 180° in der Ebene mit dem Ausgangsmolekül vollständig zur Deckung zu bringen. Das (2R, 3S)-Isomer ist folglich achiral und optisch inaktiv (interne Kompensation) = meso-Weinsäure. Da (2R, 3S) und (2S, 3R) identische Moleküle darstellen, existieren in Summe genau 3 Stereoisomere: (2R, 3R), (2S, 3S) und meso-Weinsäure.",
    explanations_incorrect: {
      A: "Die Stereozentren von Weinsäure sind chemisch stabil und oxidieren nicht spontan.",
      B: "Weinsäure ist eine gesättigte Dicarbonsäure ohne C=C-Doppelbindung.",
      C: "Die Stereoisomere sind bei Raumtemperatur konfigurationsstabil und racemisieren nicht spontan.",
      E: "Chirale Diastereomere lassen sich physikalisch trennen und existieren stabil als Reinstoffe."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
      status: "curated_medat_compliant",
      version: "4.0_gp4"
    }
  },

  // ---------------------------------------------------------------------------------
  // 24. Biochemie und Naturstoffe: Peptidbindung (chem-11-naturstoffe)
  // ---------------------------------------------------------------------------------
  {
    id: "CHEM-BMS-GP4-024",
    chapter_id: "chem-11-naturstoffe",
    subject: "CHEM",
    section: "BMS",
    primary_topic: "Biochemie und Naturstoffe",
    subtopic: "Peptidbindung: Resonanzstruktur & Planarität",
    difficulty: "intermediate",
    stem: "Welche physikalisch-chemische Eigenschaft zeichnet die Peptidbindung (-CO-NH-) zwischen zwei Aminosäuren in einem Protein aufgrund von Mesomerie (Resonanz) aus?",
    options: {
      A: "Eine freie, energetisch ungehinderte Drehbarkeit um die C-N-Bindungsachse bei physiologischer Körpertemperatur.",
      B: "Eine rein ionische Anziehung zwischen dem negativ geladenen Carboxylat-Sauerstoff und dem Ammonium-Stickstoff.",
      C: "Ein partieller Doppelbindungscharakter der C-N-Bindung von etwa 40 %, der die freie Rotation blockiert und zu einer starren, planaren Anordnung der Atome der Peptidgruppe führt.",
      D: "Eine extrem hohe Hydrolysegeschwindigkeit, die zu einem spontanen Zerfall von Proteinen in wässriger Lösung innerhalb von Millisekunden führt.",
      E: "Die ausschließliche Ausbildung einer cis-Konfiguration für sämtliche proteinogenen Aminosäuren."
    },
    correct_answer: "C",
    explanation_correct: "Das freie Elektronenpaar des Amid-Stickstoffs steht in Resonanz mit dem π-Elektronensystem der benachbarten Carbonylgruppe: R-C(=O)-NH-R' <──> R-C(O⁻)=N⁺H-R'. Diese Mesomerie verleiht der C-N-Bindung einen partiellen Doppelbindungscharakter von ca. 40 % und verkürzt die Bindungslänge auf 132 pm (im Vergleich zu 147 pm bei einer reinen C-N-Einfachbindung). Infolgedessen existiert eine hohe Rotationsbarriere (ca. 80 kJ/mol), die eine freie Drehung um die C-N-Achse bei Körpertemperatur verhindert. Die sechs Atome der Peptidgruppe (C_alpha, C, O, N, H, C_alpha) liegen in einer starren, gemeinsamen Ebene (Planarität). Aus sterischen Gründen liegt die Peptidbindung dabei nahezu ausschließlich in der trans-Konfiguration vor (Ausnahme: Peptidbindungen vor Prolin-Resten, wo bis zu 10 % cis-Anteile auftreten können).",
    explanations_incorrect: {
      A: "Die freie Rotation um die C-N-Bindung ist durch den Doppelbindungscharakter blockiert; Rotation ist nur um die N-C_alpha- und C_alpha-C-Bindungen möglich (Torsionswinkel phi und psi).",
      B: "Die Peptidbindung ist eine kovalente Carbonsäureamid-Bindung, keine Ionenbindung.",
      D: "Peptidbindungen sind kinetisch extrem stabil; ohne enzymatische Katalyse (Proteasen) beträgt ihre Halbwertszeit in Wasser mehrere hundert Jahre.",
      E: "Aufgrund sterischer Hinderung dominiert die trans-Konfiguration (über 99 % bei Nicht-Prolin-Bindungen)."
    },
    metadata: {
      author: "MedAT BMS Chemistry QC Engine",
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
 * Normalisierte 24 StoredQuestion-Objekte für die MedAT-H Generalprobe #4 Runtime-Engine
 */
export const GENERALPROBE_4_CHEM_QUESTIONS: StoredQuestion[] = RAW_GENERALPROBE_4_CHEM_QUESTIONS.map(
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
      subjectId: "chem",
      chapterId: q.chapter_id,
      topic: `${q.primary_topic} · ${q.subtopic}`,
      concept: q.subtopic,
      difficulty: mapDifficulty(q.difficulty),
      questionText: q.stem,
      options: optionsArray,
      correctAnswer: optionKeyToIndex(q.correct_answer),
      explanation: buildComprehensiveExplanation(q.explanation_correct, q.explanations_incorrect),
      tags: ["BMS", "Chemie", "Generalprobe #4", q.primary_topic, q.subtopic],
      source: "curated-practice",
      version: q.metadata.version || "4.0_gp4",
      setOrder: idx + 1,
    };
  }
);
