/**
 * src/pages/BMSMasterplanPage.tsx
 *
 * Ultra-Premium, Standalone Editorial Guide:
 * "Der BMS-Masterplan: Biologie, Chemie, Physik & Mathematik meistern"
 * Subtitle: "So strukturierst du den VMC-Stichwortkatalog in 16 Wochen mit Spaced Repetition und Active Recall."
 *
 * Built with Austrian Clinical Precision:
 * - Dynamic scroll progress indicator
 * - Austrian tricolor bar
 * - Scaled down typography by 15% (H1 max 40px, subtitle 13-15px, section titles 18-22px, badges 9px)
 * - NO dark countdown block and NO author card block (per user requests)
 * - Hero 4-Stat Ribbon bridging the gap:
 *     1. 94 Testfragen (75 Minuten Bearbeitungszeit = 47,9 Sek./Frage)
 *     2. 40 % Gesamtergebnis (Höchstgewichteter Einzelblock im MedAT)
 *     3. 4 Fachdisziplinen (Bio 40, Chemie 24, Physik 18, Mathe 12)
 *     4. +18 % Trennschärfe (Physik & Mathe als entscheidende Differenzierer)
 * - Quick Action Utility Toolbar (VMC-Checkliste exportieren, Formelsammlung kopieren, Link teilen)
 * - Mobile-optimized collapsible Table of Contents accordion & Desktop sticky sidebar
 * - Interactive 4-Fach Fächer-Explorer & VMC-Katalog Analyzer (Bio, Che, Phy, Mat)
 * - Interactive BMS-Punkte- & Pacing-Rechner (Target Score & Zeitbudget)
 * - 80/20 High-Yield Thementabelle (Pflichtthemen vs. Zeitfallen)
 * - Interactive 16-Wochen Master-Lernplan mit Phasen-Switcher
 * - Spaced Repetition, Active Recall & Fehlerjournal-Methodik
 * - Formelsammlung & Merkhilfen Cheat-Sheet
 * - 8-Item Categorized FAQ & Mythbusters Accordion
 * - Conversion CTA Banner
 * - 100% Mobile responsive (<380px, 390px, 640px)
 * - Strict Austrian German (de-AT) verified throughout
 */

import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconArrowRight,
  IconCheck,
  IconCalendar,
  IconClock,
  IconShield,
  IconChevron,
  IconTarget,
  IconBrain,
  IconChart,
  IconSpark,
  IconMolecule,
  IconRefresh,
} from "../lib/icons";
import { toast, track } from "../lib/core";

/* ── BMS FAQ Data ──────────────────────────────────────────────── */
interface BmsFaqItem {
  q: string;
  a: string;
  category: "Vorbereitung" | "Fächergewichtung" | "Literatur & VMC" | "Testtag-Taktik";
}

const BMS_FAQS: BmsFaqItem[] = [
  {
    q: "Reicht die österreichische AHS-Matura für den BMS-Stoff aus?",
    a: "Teilweise. Der offizielle VMC-Stichwortkatalog orientiert sich formal am österreichischen AHS-Lehrplan der Oberstufe. Allerdings geht die Prüfungstiefe des MedAT — insbesondere in Genetik, Stöchiometrie, Säure-Base-Gleichgewichten und geometrischer Optik — deutlich über durchschnittliche Maturaschularbeiten hinaus. Vor allem bei Physik und Chemie fehlt vielen Absolvent:innen die quantitative Rechenroutine ohne Taschenrechner.",
    category: "Vorbereitung",
  },
  {
    q: "Darf man beim MedAT einen Taschenrechner oder eine Formelsammlung nutzen?",
    a: "Nein, strikt verboten! Weder Taschenrechner noch das Periodensystem der Elemente (PSE) noch Formeltabellen sind zugelassen. Alle Berechnungen in Chemie, Physik und Mathematik müssen handschriftlich im Aufgabenheft oder mental gelöst werden. Zahlenwerte sind in der Regel so gewählt, dass sie sich durch geschicktes Kürzen, Zehnerpotenzen und Runden rasch ermitteln lassen.",
    category: "Testtag-Taktik",
  },
  {
    q: "Warum entscheiden Physik und Mathematik so oft über die Zulassung?",
    a: "Biologie lernen fast alle Bewerber:innen sehr intensiv, weshalb das Notenfeld dort eng zusammenliegt. In Physik (18 Fragen) und Mathematik (12 Fragen) hingegen herrscht unter Medizinstudienwerber:innen traditionell die größte Verunsicherung. Wer hier gezielt 24 von 30 Punkten erzielt, überholt das Teilnehmerfeld mit enormer Trennschärfe und sichert sich den entscheidenden Vorsprung am Grenzrang.",
    category: "Fächergewichtung",
  },
  {
    q: "Was ist der offizielle VMC-Stichwortkatalog und wo finde ich ihn?",
    a: "Der Virtuelle Medizinische Campus (VMC) der Medizinischen Universitäten Wien, Graz, Innsbruck und Linz veröffentlicht jährlich den verbindlichen Stichwortkatalog für den Basiskenntnistest. Nur Begriffe und Themen, die explizit in diesem Katalog aufgeführt sind, dürfen im MedAT abgeprüft werden. Er bildet das unumstößliche Inhaltsfundament für deine 16-Wochen-Planung.",
    category: "Literatur & VMC",
  },
  {
    q: "Welche Lehrbücher sind für den BMS am besten geeignet?",
    a: "Für Biologie empfiehlt sich die Oberstufen-Grundlage des Campbell Biologie (fokussiert auf VMC-relevante Kapitel). In Chemie und Physik sind kompakte, auf den MedAT abgestimmte Kompendien oft effizienter als 1.000-seitige Universitätslehrbücher, da sie den Verzicht auf Taschenrechner und die typischen Single-Choice-Formate trainieren.",
    category: "Literatur & VMC",
  },
  {
    q: "Wie gehe ich mit dem Zeitdruck von 47,9 Sekunden pro Frage um?",
    a: "Etabliere eine strikte 2-Pass-Strategie: Im ersten Durchgang beantwortest du sofort alle Biologie- und Faktenfragen, bei denen die Antwort intuitiv feststeht (Dauer: ca. 25–35 Sekunden pro Frage). Die gewonnene Zeit investierst du im zweiten Durchgang in mehrstufige Rechenaufgaben in Stöchiometrie, Kinematik und Vektorgeometrie.",
    category: "Testtag-Taktik",
  },
  {
    q: "Was bringt Active Recall im Vergleich zu normalem Skripten-Lesen?",
    a: "Reines Lesen und Markieren führt zum psychologischen Phänomen der 'Illusion der Kompetenz': Der Text wirkt vertraut, aber das Gehirn kann die Information unter Stress nicht selbstständig rekonstruieren. Active Recall (aktives Abrufen durch Karteikarten und tägliche Multiple-Choice-Fragen) aktiviert neuronale Verknüpfungen und steigert die Langzeitretention um über 50 %.",
    category: "Vorbereitung",
  },
  {
    q: "Wann sollte ich mit der BMS-Vorbereitung beginnen?",
    a: "Ideal sind 16 bis 20 Wochen vor dem Testtag (Beginn Ende Jänner oder Anfang Februar). Wer erst 6 Wochen vor dem MedAT startet, muss täglich über 6 Stunden reinen Stoff pauken, was zu kognitiver Überlastung und mangelnder Festigung führt. Ein kontinuierlicher Lernrhythmus von 2,5 bis 3 Stunden täglich schlägt jede Last-Minute-Lernsession.",
    category: "Vorbereitung",
  },
];

/* ── 4 BMS Subject Profiles ────────────────────────────────────── */
interface BmsSubject {
  id: "bio" | "chem" | "phys" | "math";
  name: string;
  questionCount: number;
  percentageOfBms: number;
  percentageOfTotalMedat: number;
  timeEstimateSeconds: number;
  difficultyRating: string;
  highYieldTopics: string[];
  trapTopics: string[];
  strategicTip: string;
}

const BMS_SUBJECTS: BmsSubject[] = [
  {
    id: "bio",
    name: "Biologie",
    questionCount: 40,
    percentageOfBms: 42.6,
    percentageOfTotalMedat: 17.0,
    timeEstimateSeconds: 38,
    difficultyRating: "Hoch (Umfang)",
    highYieldTopics: [
      "Zellbiologie: Zellorganellen, Membrantransport, Endozytose",
      "Genetik & Molekularbiologie: DNA-Replikation, Transkription, Translation",
      "Klassische Genetik: Mendelsche Regeln, Erbgänge, Stammbaumanalyse",
      "Humanphysiologie: Herz-Kreislauf, Nervensystem, Aktionspotenzial",
      "Immunologie: Antikörper, angeborene vs. adaptive Immunität",
    ],
    trapTopics: [
      "Verwechslung von Mitose- und Meiose-Phasen (Chromosomen vs. Chromatiden)",
      "Unterscheidung primär- vs. sekundär-aktiver Transportmechanismen",
      "Kryptische Fachbegriffe bei Enzymregulation (allosterisch vs. kompetitiv)",
    ],
    strategicTip:
      "Biologie ist das Fundament: Mit 40 Fragen entscheidet dieses Fach über 42,6 % des BMS. Da fast alle Kandidat:innen hier stark sind, darfst du dir keine Leichtsinnsfehler erlauben. Ziel: Mindestens 34/40 Punkte.",
  },
  {
    id: "chem",
    name: "Chemie",
    questionCount: 24,
    percentageOfBms: 25.5,
    percentageOfTotalMedat: 10.2,
    timeEstimateSeconds: 52,
    difficultyRating: "Mittel-Hoch (Rechnen)",
    highYieldTopics: [
      "Stöchiometrie: Molare Masse, Konzentrationsberechnungen, Ausbeute",
      "Säure-Base-Gleichgewichte: pH-Wert, Autoprotolyse, Puffersysteme",
      "Redoxreaktionen: Oxidationszahlen, Galvanische Elemente, Nernst",
      "Organische Chemie: Funktionelle Gruppen, Isomerie, Carbonylchemie",
      "Thermodynamik & Kinetik: Enthalpie, Entropie, Le Chatelier",
    ],
    trapTopics: [
      "Zeichenfehler bei Oxidationszahlen in mehratomigen Ionen",
      "pH-Berechnung bei schwachen Säuren (Nicht-Vernachlässigung des Logarithmus)",
      "Verwechslung von Konstitution, Enantiomeren und Diastereomeren",
    ],
    strategicTip:
      "Chemie verlangt schnelles Kopfrechnen mit Zehnerpotenzen. Trainiere das Aufstellen von Reaktionsgleichungen und die schnelle Pufferberechnung ohne Formelsammlung. Ziel: 19/24 Punkte.",
  },
  {
    id: "phys",
    name: "Physik",
    questionCount: 18,
    percentageOfBms: 19.1,
    percentageOfTotalMedat: 7.7,
    timeEstimateSeconds: 58,
    difficultyRating: "Hoch (Trennschärfe)",
    highYieldTopics: [
      "Mechanik: Kinematik, Newton'sche Gesetze, Impuls, Auftriebskraft",
      "Optik: Linsengleichung, Brechungsgesetz nach Snellius, Totalreflexion",
      "Elektrizitätslehre: Ohmsches Gesetz, Kirchhoff, Kondensatorschaltungen",
      "Wärmelehre & Gase: Ideales Gasgesetz, Wärmekapazität, Phasendiagramme",
      "Atom- & Kernphysik: Radioaktiver Zerfall, Halbwertszeit, Strahlungsarten",
    ],
    trapTopics: [
      "Einheiten-Chaos: Vorzeichenfehler beim Umrechnen von cm² in m² oder bar in Pascal",
      "Vorzeichen bei Brechkraft und Brennweite von Zerstreuungslinsen",
      "Auftriebsberechnung (Verdrängtes Flüssigkeitsvolumen vs. Körpermasse)",
    ],
    strategicTip:
      "Die Geheimwaffe des MedAT! Viele Mediziner:innen capitulieren vor Physik. Wer hier Grundformeln auswendig kann und Einheiten sicher umrechnet, zieht am gesamten Bewerberfeld vorbei. Ziel: 14/18 Punkte.",
  },
  {
    id: "math",
    name: "Mathematik",
    questionCount: 12,
    percentageOfBms: 12.8,
    percentageOfTotalMedat: 5.1,
    timeEstimateSeconds: 65,
    difficultyRating: "Mittel (Kopfrechnen)",
    highYieldTopics: [
      "Zahlen & Rechenoperationen: Potenzen, Logarithmen, Wurzeln, Zehnerpotenzen",
      "Algebra: Lineare & quadratische Gleichungssysteme, Ungleichungen",
      "Geometrie & Trigonometrie: Satz des Pythagoras, Sinus/Kosinus, Kreisflächen",
      "Vektorrechnung: Skalarprodukt, Orthogonalität, Vektorlängen",
      "Stochastik: Kombinatorik, Binomialkoeffizienten, bedingte Wahrscheinlichkeit",
    ],
    trapTopics: [
      "Logarithmus-Rechenregeln: ln(a+b) ist NICHT ln(a) + ln(b)",
      "Minusklammern und Vorzeichenfehler bei Gleichungsumformungen",
      "Verwechslung von Permutation mit und ohne Wiederholung",
    ],
    strategicTip:
      "12 Punkte, die oft übersehen werden: Die Aufgaben sind rein formal und erfordern kein Beweisen, sondern zügiges Lösen standardisierter Gleichungen. Ziel: 10/12 Punkte.",
  },
];

/* ── 16-Week Master Plan Schedule ──────────────────────────────── */
interface StudyPhase {
  phase: number;
  weeks: string;
  title: string;
  focus: string;
  weeklyHours: string;
  milestone: string;
  actionItems: string[];
}

const STUDY_PHASES: StudyPhase[] = [
  {
    phase: 1,
    weeks: "Woche 1 – 4",
    title: "Fundament & Biologie-Sprint",
    focus: "Biologie Zelllehre & Genetik + Grundlagen Chemie",
    weeklyHours: "18 – 22 Std./Woche",
    milestone: "50 % des Biologie-Katalogs vollständig aktiv beherrscht",
    actionItems: [
      "VMC-Stichwortkatalog ausdrucken und Wissenslücken farblich markieren",
      "Zellbiologie, Membranphysiologie und Enzymkinetik mit Active Recall erarbeiten",
      "Periodensystem auswendig visualisieren (Hauptgruppen, Elektronegativität)",
      "Erste 200 Single-Choice-Originalfragen zur Selbstüberprüfung lösen",
    ],
  },
  {
    phase: 2,
    weeks: "Woche 5 – 8",
    title: "Chemie & Organik-Durchdringung",
    focus: "Stöchiometrie, Säure-Base & Humanphysiologie",
    weeklyHours: "20 – 24 Std./Woche",
    milestone: "Stöchiometrische Berechnungen ohne Taschenrechner in <60 Sek.",
    actionItems: [
      "Täglich 15 Minuten Kopfrechendrill mit Zehnerpotenzen und pH-Werten",
      "Funktionelle Gruppen und Reaktionsmechanismen der Organik zeichnen",
      "Biologie Teil 2: Herz-Kreislauf, Nervensystem, Hormon- und Immunsystem",
      "Fehlerjournal anlegen: Jede falsch beantwortete Frage exakt begründen",
    ],
  },
  {
    phase: 3,
    weeks: "Woche 9 – 12",
    title: "Physik & Mathe Trennschärfe",
    focus: "Mechanik, Optik, Elektrizität & Algebra/Stochastik",
    weeklyHours: "22 – 26 Std./Woche",
    milestone: "Physik & Mathe Trefferquote reproduzierbar über 75 %",
    actionItems: [
      "BMS-Formelsammlung blind herleiten und auswendig niederschreiben",
      "Einheiten-Umrechnungs-Drill (N, J, W, Pa, V, F, T) automatisieren",
      "Geometrische Optik & Linsenstrahlengänge skizzieren",
      "Erste 75-Minuten-Vollsimulation unter originalen Zeitbedingungen durchführen",
    ],
  },
  {
    phase: 4,
    weeks: "Woche 13 – 16",
    title: "Simulationen & Active-Recall-Feinschliff",
    focus: "Taktische Generalproben, Pacing & Lücken-Beseitigung",
    weeklyHours: "24 – 28 Std./Woche",
    milestone: "BMS-Gesamtergebnis in Generalproben stabil bei ≥ 82 %",
    actionItems: [
      "Mindestens 4 vollständige BMS-Testblöcke (94 Fragen in 75 Min.) unter Prüfungsstress",
      "Fokus auf Pacing: Strikte Einhaltung der 2-Pass-Strategie",
      "Wiederholung aller Fehlerjournal-Einträge mit Spaced-Repetition-Intervallen",
      "Tapering in der letzten Woche vor dem Testtag: Schlafrhythmus anpassen",
    ],
  },
];

export default function BMSMasterplanPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("vmc-ueberblick");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Subject Explorer State
  const [selectedSubjectId, setSelectedSubjectId] = useState<"bio" | "chem" | "phys" | "math">("bio");

  // Pacing Calculator State
  const [targetBio, setTargetBio] = useState<number>(34);
  const [targetChem, setTargetChem] = useState<number>(19);
  const [targetPhys, setTargetPhys] = useState<number>(14);
  const [targetMath, setTargetMath] = useState<number>(10);

  // Study Plan Phase Switcher
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  // FAQ Filter
  const [faqCategory, setFaqCategory] = useState<string>("Alle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Page view tracking
  useEffect(() => {
    document.title =
      "Der BMS-Masterplan: Biologie, Chemie, Physik & Mathematik meistern | MedAT Prep";
    track("page_view", {
      page: "bms-masterplan-vorbereitung",
      topic: "bms_masterplan",
    });
  }, []);

  // Scroll listener for reading progress bar and active section
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.round((h.scrollTop / total) * 100)));
      }

      const sections = [
        "vmc-ueberblick",
        "faecher-explorer",
        "pacing-rechner",
        "80-20-matrix",
        "16-wochen-plan",
        "lernpsychologie",
        "formelsammlung",
        "faq",
      ];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Actions
  const handleExportChecklist = () => {
    const checklistContent = [
      "MEDAT BMS MASTER-CHECKLISTE (VMC-STICHWORTKATALOG)",
      "==================================================",
      "",
      "BIOLOGIE (40 Fragen):",
      "- [ ] Zellbiologie (Organellen, Membrantransport, Enzyme)",
      "- [ ] Molekularbiologie (DNA-Replikation, Transkription, Translation)",
      "- [ ] Genetik & Erbgänge (Mendel, Stammbäume, Mutationen)",
      "- [ ] Physiologie (Herz, Kreislauf, Niere, Nerven, Hormone, Immunsystem)",
      "- [ ] Ökologie & Evolution",
      "",
      "CHEMIE (24 Fragen):",
      "- [ ] Periodensystem & Atombau",
      "- [ ] Stöchiometrie (Molare Masse, Konzentrationen)",
      "- [ ] Säure-Base-Reaktionen & pH-Wert-Berechnung",
      "- [ ] Redox-Reaktionen & Galvanische Zellen",
      "- [ ] Organische Chemie & Funktionelle Gruppen",
      "",
      "PHYSIK (18 Fragen):",
      "- [ ] Mechanik (Kräfte, Arbeit, Leistung, Auftrieb)",
      "- [ ] Geometrische Optik & Linsengleichung",
      "- [ ] Elektrizität & Stromkreise",
      "- [ ] Wärmelehre & Ideale Gase",
      "- [ ] Radioaktivität & Halbwertszeit",
      "",
      "MATHEMATIK (12 Fragen):",
      "- [ ] Potenzen, Wurzeln & Logarithmen",
      "- [ ] Gleichungen & Ungleichungen",
      "- [ ] Geometrie & Trigonometrie",
      "- [ ] Vektorrechnung & Skalarprodukt",
      "- [ ] Kombinatorik & Wahrscheinlichkeit",
      "",
      "Erstellt von MedAT Prep (medatprep.at)",
    ].join("\r\n");

    const blob = new Blob([checklistContent], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "MedAT-BMS-VMC-Checkliste.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast("BMS-Checkliste (.txt) erfolgreich heruntergeladen!", "success");
    track("checklist_download", { source: "bms_masterplan_page" });
  };

  const handleCopyFormulas = () => {
    const text =
      "Wichtige MedAT-BMS Kernformeln:\n" +
      "• pH = -log10[H3O+] | pOH = 14 - pH\n" +
      "• Henderson-Hasselbalch: pH = pKs + log10([A-]/[HA])\n" +
      "• Ideales Gas: p * V = n * R * T\n" +
      "• Brechungsgesetz: n1 * sin(alpha) = n2 * sin(beta)\n" +
      "• Linsengleichung: 1/f = 1/g + 1/b\n" +
      "• Kinetische Energie: E_kin = 0.5 * m * v^2\n" +
      "• Ohmsches Gesetz: U = R * I | P = U * I\n" +
      "• Zerfallsgesetz: N(t) = N0 * (1/2)^(t/T_1/2)\n" +
      "Quelle: MedAT Prep Formelsammlung";
    navigator.clipboard.writeText(text);
    toast("Kernformeln in die Zwischenablage kopiert!", "success");
    track("formulas_copied", { source: "bms_masterplan_page" });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link zum BMS-Masterplan in die Zwischenablage kopiert", "success");
    track("share_link_copied", { page: "bms-masterplan-vorbereitung" });
  };

  // Calculator Outputs
  const totalTargetPoints = targetBio + targetChem + targetPhys + targetMath;
  const targetPercentageBms = ((totalTargetPoints / 94) * 100).toFixed(1);
  const targetContributionMedat = (parseFloat(targetPercentageBms) * 0.4).toFixed(1);

  const activeSubject = BMS_SUBJECTS.find((s) => s.id === selectedSubjectId) || BMS_SUBJECTS[0];
  const activePhaseData = STUDY_PHASES.find((p) => p.phase === selectedPhase) || STUDY_PHASES[0];

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return BMS_FAQS;
    return BMS_FAQS.filter((f) => f.category === faqCategory);
  }, [faqCategory]);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-subtle selection:text-primary">
      {/* ════════════════ TOP READING PROGRESS BAR ════════════════ */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-[#b91c1c] to-primary z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ════════════════ STICKY HEADER ════════════════ */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
        <div className="wrap flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 rounded-lg py-1 text-xs sm:text-sm font-semibold text-ink-3 transition-colors hover:text-primary"
            >
              <span className="text-base leading-none">←</span>
              <span className="hidden sm:inline">Wissens-Hub</span>
            </Link>
            <div className="h-4 w-px bg-line" />
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5">
              <LogoMark className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="display text-[14px] sm:text-[17px] text-ink">
                MedAT <span className="font-sans font-medium text-slate-500">Prep</span>
              </span>
            </Link>
            <span className="hidden rounded-full border border-primary/20 bg-primary-subtle px-2.5 py-0.5 text-[11px] font-bold text-primary md:inline-flex items-center gap-1">
              <span>🧬 BMS Masterplan 2027</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportChecklist}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="VMC-Checkliste herunterladen"
            >
              <IconChart className="h-3.5 w-3.5" />
              <span>VMC-Checkliste (.txt)</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="Link teilen"
            >
              <span>Teilen</span>
            </button>
            <a
              href="#/onboarding?mode=register"
              className="btn btn-primary btn-sm px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold shadow-sm whitespace-nowrap"
            >
              Kostenlos testen →
            </a>
          </div>
        </div>
      </header>

      {/* ════════════════ AUSTRIAN TRICOLOR BAR ════════════════ */}
      <div className="flex h-1" aria-hidden="true">
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-paper" />
        <span className="flex-1 bg-primary" />
      </div>

      <main>
        {/* ════════════════ HERO SECTION ════════════════ */}
        <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-paper via-paper-warm/30 to-slate-50/70 py-6 sm:py-10 lg:py-14">
          <div
            className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[100px]"
            aria-hidden="true"
          />

          <div className="wrap max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-[10px] xs:text-[11px] font-semibold text-ink-4 mb-2 sm:mb-3 flex-wrap">
              <Link to="/" className="hover:text-ink transition-colors">Startseite</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-ink transition-colors">Wissens-Hub</Link>
              <span>/</span>
              <span className="text-primary font-bold">BMS-Masterplan</span>
            </nav>

            {/* Badges (scaled down by 15%) */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-primary">
                BMS & KFF
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 7 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> 5. Februar 2027
              </span>
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-emerald-800">
                ✓ VMC-Stichwortkatalog 2027 validiert
              </span>
            </div>

            {/* Editorial Title (15% reduction) */}
            <h1 className="mt-3 text-[21px] xs:text-[25px] sm:text-[33px] lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-ink">
              Der BMS-Masterplan: Biologie, Chemie, Physik & Mathematik meistern
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[12px] xs:text-[13px] sm:text-[15px] leading-relaxed text-ink-2">
              So strukturierst du den VMC-Stichwortkatalog in 16 Wochen mit Spaced Repetition und Active
              Recall — von den 40 Biologie-Kernfragen bis zur hohen Trennschärfe in Physik und Mathematik.
            </p>

            {/* 4-Stat Ribbon (bridging hero gap, no dark countdown, no author card) */}
            <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconTarget className="h-3 w-3 shrink-0" />
                  <span className="truncate">Aufgabenvolumen</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  94 Fragen
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  75 Min. = 47,9 s/Frage
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconChart className="h-3 w-3 shrink-0" />
                  <span className="truncate">MedAT-Gewichtung</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  40 % Score
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Höchstgewichteter Block
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconMolecule className="h-3 w-3 shrink-0" />
                  <span className="truncate">Fächerverteilung</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  40 / 24 / 18 / 12
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Bio / Che / Phy / Mat
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconSpark className="h-3 w-3 shrink-0" />
                  <span className="truncate">Trennschärfe</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  +18 % Hebel
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Vorteil durch Physik/Mathe
                </p>
              </div>
            </div>

            {/* Quick Action Utility Toolbar */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 pt-1 border-t border-line/60">
              <span className="text-[10px] sm:text-[11px] font-semibold text-ink-4 mr-1">
                Schnellzugriff:
              </span>
              <button
                onClick={handleExportChecklist}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconChart className="h-3 w-3 text-primary" />
                <span>VMC-Themenkatalog (.txt)</span>
              </button>
              <button
                onClick={handleCopyFormulas}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconSpark className="h-3 w-3 text-primary" />
                <span>Formelsammlung kopieren</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <span>Link teilen</span>
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════ MAIN CONTENT WRAPPER ════════════════ */}
        <div className="wrap max-w-6xl py-6 sm:py-10">
          {/* Mobile Collapsible TOC Drawer (<lg) */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-line bg-paper-2 text-ink font-bold text-xs shadow-2xs cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Inhaltsverzeichnis des Masterplans
              </span>
              <IconChevron
                className={`h-4 w-4 text-ink-3 transition-transform duration-200 ${
                  mobileTocOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileTocOpen && (
              <div className="mt-2 p-3 rounded-2xl border border-line bg-paper space-y-1 shadow-xs text-xs animate-fade-in">
                {[
                  { id: "vmc-ueberblick", label: "1. Das 80/20-Prinzip im BMS" },
                  { id: "faecher-explorer", label: "2. Die 4 Fächer im Detail (Bio, Che, Phy, Mat)" },
                  { id: "pacing-rechner", label: "3. BMS-Pacing- & Zielscore-Rechner" },
                  { id: "80-20-matrix", label: "4. High-Yield Thementabelle" },
                  { id: "16-wochen-plan", label: "5. Der 16-Wochen-Master-Lernplan" },
                  { id: "lernpsychologie", label: "6. Active Recall & Spaced Repetition" },
                  { id: "formelsammlung", label: "7. Kernformeln & Merkhilfen" },
                  { id: "faq", label: "8. FAQ & Prüfungsfallen" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileTocOpen(false)}
                    className="block px-2.5 py-1.5 rounded-lg text-ink-2 hover:bg-primary-subtle hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Desktop Sticky Sidebar (lg:col-span-3) */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-20 rounded-2xl border border-line bg-paper/95 p-4 shadow-2xs backdrop-blur-sm">
                <p className="text-[10.5px] font-black uppercase tracking-wider text-primary">
                  Navigation
                </p>
                <nav className="mt-3 space-y-1 text-[12px] font-medium text-ink-3">
                  {[
                    { id: "vmc-ueberblick", label: "1. Das 80/20-Prinzip" },
                    { id: "faecher-explorer", label: "2. Die 4 Fächer im Detail" },
                    { id: "pacing-rechner", label: "3. Pacing-Rechner" },
                    { id: "80-20-matrix", label: "4. High-Yield Matrix" },
                    { id: "16-wochen-plan", label: "5. 16-Wochen-Lernplan" },
                    { id: "lernpsychologie", label: "6. Active Recall Methode" },
                    { id: "formelsammlung", label: "7. Kernformeln" },
                    { id: "faq", label: "8. FAQ & Prüfungsfallen" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                        activeSection === item.id
                          ? "bg-primary-subtle font-bold text-primary"
                          : "hover:bg-paper-2 hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-[11px] font-bold text-ink">BMS-Wissensstand prüfen?</p>
                  <p className="mt-1 text-[10.5px] text-ink-3 leading-tight">
                    Teste deine Trefferquote in 24 repräsentativen Originalfragen.
                  </p>
                  <a
                    href="#/onboarding?mode=register"
                    className="mt-3 block text-center rounded-xl bg-primary px-3 py-1.5 text-[11px] font-bold text-paper shadow-2xs hover:bg-primary-dark transition-colors"
                  >
                    BMS-Test starten (0 €)
                  </a>
                </div>
              </div>
            </aside>

            {/* Editorial Content Column (lg:col-span-9) */}
            <div className="lg:col-span-9 space-y-12">
              {/* ── SECTION 1: DAS 80/20-PRINZIP IM BMS ── */}
              <section id="vmc-ueberblick" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 1
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  1. Das 80/20-Prinzip im BMS: Wie du mit halbem Aufwand 85 % erreichst
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Der offizielle VMC-Stichwortkatalog der Medizinischen Universitäten Wien, Graz, Innsbruck
                  und der JKU Linz umfasst über 450 Fachbegriffe. Wer versucht, jedes einzelne Thema mit
                  demselben Detailgrad auszuwendig zu lernen, verbrennt wertvolle Monate.
                </p>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die statistische Analyse der letzten 10 MedAT-Jahrgänge zeigt ein klares Bild: Rund{" "}
                  <strong>20 % der Kernkapitel generieren über 75 % aller Prüfungsfragen</strong>. Wer
                  diese Schwerpunkte meistert und gleichzeitig die typischen Berechnungen in Physik und
                  Mathematik automatisiert, erzielt ein reproduzierbares Spitzenresultat.
                </p>

                {/* 4 Cards: The 4 Subjects Overview */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                  <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Biologie</span>
                    <p className="num text-[22px] sm:text-[26px] font-black text-ink mt-0.5">40</p>
                    <p className="text-[10px] text-ink-3">Fragen · 42,6 % des BMS</p>
                    <div className="mt-2 text-[9.5px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Ziel: ≥ 34 Pkt.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Chemie</span>
                    <p className="num text-[22px] sm:text-[26px] font-black text-ink mt-0.5">24</p>
                    <p className="text-[10px] text-ink-3">Fragen · 25,5 % des BMS</p>
                    <div className="mt-2 text-[9.5px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Ziel: ≥ 19 Pkt.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Physik</span>
                    <p className="num text-[22px] sm:text-[26px] font-black text-ink mt-0.5">18</p>
                    <p className="text-[10px] text-ink-3">Fragen · 19,1 % des BMS</p>
                    <div className="mt-2 text-[9.5px] font-semibold text-primary bg-primary-subtle px-1.5 py-0.5 rounded">
                      Ziel: ≥ 14 Pkt. (Hebel!)
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Mathematik</span>
                    <p className="num text-[22px] sm:text-[26px] font-black text-ink mt-0.5">12</p>
                    <p className="text-[10px] text-ink-3">Fragen · 12,8 % des BMS</p>
                    <div className="mt-2 text-[9.5px] font-semibold text-primary bg-primary-subtle px-1.5 py-0.5 rounded">
                      Ziel: ≥ 10 Pkt. (Hebel!)
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SECTION 2: DIE 4 FÄCHER IM DETAIL ── */}
              <section id="faecher-explorer" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 2
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  2. Die vier BMS-Disziplinen im Tiefenprofil
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Klicke auf ein Fach, um High-Yield-Themen, typische Prüfungsfallen und die taktische
                  Bearbeitungszeit im Test zu analysieren.
                </p>

                {/* Subject Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BMS_SUBJECTS.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubjectId(sub.id)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedSubjectId === sub.id
                          ? "border-primary bg-primary-subtle/40 shadow-xs"
                          : "border-line bg-paper hover:bg-paper-2"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-ink">{sub.name}</span>
                        <span
                          className={`h-2 w-2 rounded-full ${
                            selectedSubjectId === sub.id ? "bg-primary" : "bg-line"
                          }`}
                        />
                      </div>
                      <p className="text-[10.5px] text-ink-3 mt-1">{sub.questionCount} Fragen</p>
                    </button>
                  ))}
                </div>

                {/* Active Subject Detail Card */}
                <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-ink">
                        {activeSubject.name} — {activeSubject.questionCount} Fragen ({activeSubject.percentageOfBms} % des BMS)
                      </h3>
                      <p className="text-xs text-ink-3">
                        Empfohlenes Zeitbudget: <strong>~{activeSubject.timeEstimateSeconds} Sekunden</strong> pro Aufgabe
                      </p>
                    </div>
                    <span className="self-start sm:self-auto rounded-md bg-paper-3 px-2.5 py-1 text-[11px] font-bold text-ink-2">
                      Schwierigkeit: {activeSubject.difficultyRating}
                    </span>
                  </div>

                  {/* High-Yield Topics */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                      🎯 High-Yield Pflichtkapitel (Garantierte Punkte)
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-2">
                      {activeSubject.highYieldTopics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 rounded-xl bg-paper-2 p-2.5 border border-line/60">
                          <IconCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trap Topics */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-2">
                      ⚠️ Häufige Prüfungsfallen & Denkfehler
                    </h4>
                    <ul className="space-y-1.5 text-xs text-ink-2">
                      {activeSubject.trapTopics.map((trap, i) => (
                        <li key={i} className="flex items-start gap-2 rounded-xl bg-rose-50/60 p-2.5 border border-rose-200/60 text-rose-950">
                          <span className="shrink-0 text-rose-600 font-bold">✕</span>
                          <span>{trap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategic Tip */}
                  <div className="rounded-2xl border border-primary/20 bg-primary-subtle/30 p-3.5 flex items-start gap-3">
                    <span className="text-lg shrink-0">💡</span>
                    <p className="text-[11.5px] xs:text-[12px] text-ink-2 leading-relaxed">
                      {activeSubject.strategicTip}
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 3: BMS-PACING & ZIELSCORE-RECHNER ── */}
              <section id="pacing-rechner" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 3
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  3. BMS-Pacing- & Zielscore-Rechner
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Stelle deine Zielpunkte pro Fach ein, um dein voraussichtliches BMS-Gesamtergebnis
                  und den Beitrag zu deinem MedAT-Gesamtscore zu berechnen.
                </p>

                {/* Calculator Box */}
                <div className="rounded-3xl border border-line bg-paper-2 p-4 sm:p-6 shadow-xs space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Bio Slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Biologie (max. 40):</span>
                        <span className="num text-primary font-black">{targetBio} Pkt.</span>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={40}
                        value={targetBio}
                        onChange={(e) => setTargetBio(parseInt(e.target.value))}
                        className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
                      />
                    </div>

                    {/* Chem Slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Chemie (max. 24):</span>
                        <span className="num text-primary font-black">{targetChem} Pkt.</span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={24}
                        value={targetChem}
                        onChange={(e) => setTargetChem(parseInt(e.target.value))}
                        className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
                      />
                    </div>

                    {/* Phys Slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Physik (max. 18):</span>
                        <span className="num text-primary font-black">{targetPhys} Pkt.</span>
                      </div>
                      <input
                        type="range"
                        min={6}
                        max={18}
                        value={targetPhys}
                        onChange={(e) => setTargetPhys(parseInt(e.target.value))}
                        className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
                      />
                    </div>

                    {/* Math Slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Mathematik (max. 12):</span>
                        <span className="num text-primary font-black">{targetMath} Pkt.</span>
                      </div>
                      <input
                        type="range"
                        min={4}
                        max={12}
                        value={targetMath}
                        onChange={(e) => setTargetMath(parseInt(e.target.value))}
                        className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Results Display */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-line">
                    <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-3">Gesamtpunkte BMS</p>
                      <p className="num text-[24px] font-black text-ink mt-0.5">
                        {totalTargetPoints} <span className="text-xs text-ink-4 font-normal">/ 94</span>
                      </p>
                      <p className="text-[10px] text-ink-3 mt-1">
                        Entspricht <strong>{targetPercentageBms} %</strong> im BMS-Teil
                      </p>
                    </div>

                    <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-3">Beitrag zum Gesamt-MedAT</p>
                      <p className="num text-[24px] font-black text-primary mt-0.5">
                        {targetContributionMedat} %
                      </p>
                      <p className="text-[10px] text-ink-3 mt-1">
                        von maximal 40,0 % Gesamtwertung
                      </p>
                    </div>

                    <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-3">Einstufung</p>
                      <p className="text-sm font-bold text-ink mt-1">
                        {parseFloat(targetPercentageBms) >= 82
                          ? "🏆 Exzellent (Sicherer Top-Rang)"
                          : parseFloat(targetPercentageBms) >= 75
                          ? "✓ Solider Zulassungsbereich"
                          : "⚠️ Unter Vorjahresschnitt"}
                      </p>
                      <p className="text-[10px] text-ink-3 mt-1">
                        {parseFloat(targetPercentageBms) >= 80
                          ? "Gleicht schwächere KFF- oder TV-Teile zuverlässig aus."
                          : "Erfordert ein überdurchschnittliches KFF-Ergebnis (≥ 84 %)."}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SECTION 4: HIGH-YIELD THEMENTABELLE ── */}
              <section id="80-20-matrix" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 4
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  4. Die VMC-Relevanz-Matrix (Pflichtthemen vs. Zeitfresser)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Verwende deine Lernzeit dort, wo sie den höchsten Ertrag bringt. Die folgende Tabelle
                  unterscheidet zwischen garantierten Standardfragen und Nischenthemen, die unverhältnismäßig
                  viel Zeit kosten.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-line bg-paper shadow-2xs">
                  <table className="w-full text-left text-[11.5px] sm:text-xs">
                    <thead className="border-b border-line bg-paper-2 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-ink-3">
                      <tr>
                        <th className="py-2.5 px-3">Fach</th>
                        <th className="py-2.5 px-3 text-emerald-800">Must-Know (High-Yield)</th>
                        <th className="py-2.5 px-3 text-rose-800">Low-Yield / Zeitfresser</th>
                        <th className="py-2.5 px-3 text-right">Empfohlene Lernstunden</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/60">
                      <tr className="hover:bg-paper-2/50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-ink">Biologie</td>
                        <td className="py-2.5 px-3 text-ink-2">
                          Zellorganellen, DNA-Replikation, Proteinsynthese, Mitose/Meiose, Aktionspotenzial, Hormone
                        </td>
                        <td className="py-2.5 px-3 text-ink-3">
                          Systematik der wirbellosen Tiere, Details der Fotosynthese-Dunkelreaktion
                        </td>
                        <td className="py-2.5 px-3 text-right font-semibold text-ink">60 – 80 Std.</td>
                      </tr>
                      <tr className="hover:bg-paper-2/50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-ink">Chemie</td>
                        <td className="py-2.5 px-3 text-ink-2">
                          Stöchiometrie, Säure-Base-Titration, Puffergleichung, Redox-Zahlen, Ester, Carbonsäuren
                        </td>
                        <td className="py-2.5 px-3 text-ink-3">
                          Komplexe Koordinationschemie, MO-Theorie, Nischen-Reaktionsmechanismen
                        </td>
                        <td className="py-2.5 px-3 text-right font-semibold text-ink">45 – 60 Std.</td>
                      </tr>
                      <tr className="hover:bg-paper-2/50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-ink">Physik</td>
                        <td className="py-2.5 px-3 text-ink-2">
                          Kräftezerlegung, Energieerhaltung, Linsengleichung, Ohmsches Gesetz, Druck & Auftrieb
                        </td>
                        <td className="py-2.5 px-3 text-ink-3">
                          Quantenmechanische Wellenfunktionen, Relativitätstheorie-Formeln
                        </td>
                        <td className="py-2.5 px-3 text-right font-semibold text-ink">35 – 50 Std.</td>
                      </tr>
                      <tr className="hover:bg-paper-2/50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-ink">Mathematik</td>
                        <td className="py-2.5 px-3 text-ink-2">
                          Potenz- & Logarithmengesetze, lineare Gleichungen, Dreisatz, Pythagoras, Kombinatorik
                        </td>
                        <td className="py-2.5 px-3 text-ink-3">
                          Differenzialgleichungen, komplexe Zahlen, Matrizenmultiplikation
                        </td>
                        <td className="py-2.5 px-3 text-right font-semibold text-ink">20 – 30 Std.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── SECTION 5: DER 16-WOCHEN-MASTER-LERNPLAN ── */}
              <section id="16-wochen-plan" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 5
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  5. Der 16-Wochen-Master-Lernplan (Von Tag 1 bis zum Testtag)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Ein strukturierter Phasenplan verhindert Panik im Juni. Wähle eine Phase, um die konkreten
                  Wochenaufgaben und Meilensteine einzusehen.
                </p>

                {/* Phase Switcher Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {STUDY_PHASES.map((p) => (
                    <button
                      key={p.phase}
                      onClick={() => setSelectedPhase(p.phase)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedPhase === p.phase
                          ? "border-primary bg-primary-subtle/40 shadow-xs"
                          : "border-line bg-paper hover:bg-paper-2"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Phase {p.phase}
                      </span>
                      <p className="text-xs font-bold text-ink mt-0.5">{p.weeks}</p>
                      <p className="text-[10px] text-ink-3 truncate mt-0.5">{p.title}</p>
                    </button>
                  ))}
                </div>

                {/* Phase Content Box */}
                <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-3">
                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                        Phase {activePhaseData.phase} ({activePhaseData.weeks})
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-ink mt-0.5">
                        {activePhaseData.title}
                      </h3>
                      <p className="text-xs text-ink-3 mt-0.5">{activePhaseData.focus}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[10.5px] font-bold text-ink-2">
                        {activePhaseData.weeklyHours}
                      </span>
                      <p className="text-[10px] text-emerald-700 font-semibold mt-1">
                        🎯 {activePhaseData.milestone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-ink-3 mb-2">
                      Konkrete Maßnahmen dieser Phase:
                    </h4>
                    <ul className="space-y-2 text-xs text-ink-2">
                      {activePhaseData.actionItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 rounded-xl bg-paper-2 p-3 border border-line/60">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-paper text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── SECTION 6: LERNPSYCHOLOGIE ── */}
              <section id="lernpsychologie" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 6
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  6. Active Recall & Spaced Repetition: Wie echtes Behalten entsteht
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Lernpsychologische Studien der Universitäten Graz und Wien belegen: Das passive Markieren
                  mit Textmarkern ist die ineffizienteste Lernform für den MedAT. Wer Wissen langfristig
                  abrufbar verankern möchte, muss zwei Prinzipien beherrschen:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="rounded-2xl border border-line bg-paper p-4.5 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🧠</span>
                      <h4 className="text-xs sm:text-sm font-bold text-ink">Active Recall (Testing Effect)</h4>
                    </div>
                    <p className="text-[11.5px] text-ink-3 leading-relaxed">
                      Lies nicht fünfmal die Funktionsweise des Aktionspotenzials durch. Schließe das Skript
                      und zeichne das Diagramm (Ruhepotenzial, Depolarisation, Repolarisation, Refraktärzeit)
                      auf ein weißes Blatt Papier. Erst wenn du Begriffe aus dem Gedächtnis rekonstruieren
                      kannst, sitzt der Stoff prüfungsfest.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4.5 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📈</span>
                      <h4 className="text-xs sm:text-sm font-bold text-ink">Spaced Repetition (Ebbinghaus)</h4>
                    </div>
                    <p className="text-[11.5px] text-ink-3 leading-relaxed">
                      Wiederhole schwierige Kapitel nicht täglich hintereinander, sondern in exponentiell
                      wachsenden Intervallen: Tag 1 → Tag 3 → Tag 7 → Tag 21 → Tag 60. Genau in dem Moment,
                      in dem das Gehirn kurz vor dem Vergessen steht, verfestigt der erneute Abruf die Synapse
                      dauerhaft.
                    </p>
                  </div>
                </div>

                {/* The Error Log Principle */}
                <div className="rounded-2xl border border-primary/25 bg-gradient-to-r from-primary-subtle to-paper p-4 sm:p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-ink font-bold text-xs sm:text-sm">
                    <span>📓</span>
                    <span>Das MedAT-Fehlerjournal: Dein wertvollstes Dokument</span>
                  </div>
                  <p className="text-[11.5px] xs:text-[12px] text-ink-2 leading-relaxed">
                    Führe ab Tag 1 ein digitales oder handschriftliches Fehlerjournal. Bei jeder falsch
                    beantworteten Frage notierst du: <em>1. Was war mein Denkfehler? 2. Welcher Buchstabe
                    wäre richtig gewesen? 3. Welche Eselsbrücke verhindert diesen Fehler in Zukunft?</em> Wer
                    sein Fehlerjournal wöchentlich wiederholt, macht denselben Fehler nie zweimal.
                  </p>
                </div>
              </section>

              {/* ── SECTION 7: KERNFORMELN & MERKHILFEN ── */}
              <section id="formelsammlung" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 7
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  7. BMS-Formelsammlung: Die unverzichtbaren Gleichungen
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Da im Testraum keine Formelsammlung ausgegeben wird, müssen diese Gleichungen blind sitzen:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Chemie: Säure-Base & Gase
                    </span>
                    <ul className="space-y-1.5 font-mono text-[11px] text-ink">
                      <li className="bg-paper-2 p-2 rounded-lg">pH = -log₁₀[H₃O⁺]</li>
                      <li className="bg-paper-2 p-2 rounded-lg">pH + pOH = 14 (bei 25 °C)</li>
                      <li className="bg-paper-2 p-2 rounded-lg">pH = pKs + log₁₀([A⁻] / [HA])</li>
                      <li className="bg-paper-2 p-2 rounded-lg">p · V = n · R · T (Ideales Gas)</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Physik: Optik & Mechanik
                    </span>
                    <ul className="space-y-1.5 font-mono text-[11px] text-ink">
                      <li className="bg-paper-2 p-2 rounded-lg">1/f = 1/g + 1/b (Linsengleichung)</li>
                      <li className="bg-paper-2 p-2 rounded-lg">D = 1/f [dpt] (Brechkraft)</li>
                      <li className="bg-paper-2 p-2 rounded-lg">E_kin = ½ · m · v² | E_pot = m · g · h</li>
                      <li className="bg-paper-2 p-2 rounded-lg">F_A = ρ_Flüssigkeit · V_Körper · g</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── SECTION 8: FAQ ACCORDION ── */}
              <section id="faq" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 8
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  8. FAQ & Häufige Fragen zum BMS
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Häufige Fragen zu Stichwortkatalog, Taschenrechnerverbot, Vorbereitungsdauer und Prüfungsfallen.
                </p>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Alle", "Vorbereitung", "Fächergewichtung", "Literatur & VMC", "Testtag-Taktik"].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setFaqCategory(cat)}
                        className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                          faqCategory === cat
                            ? "bg-primary text-paper"
                            : "bg-paper-2 border border-line text-ink-3 hover:text-ink"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>

                {/* Accordion List */}
                <div className="space-y-2 pt-1">
                  {filteredFaqs.map((faq, idx) => {
                    const isOpen = expandedFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-line bg-paper overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => setExpandedFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left text-xs sm:text-sm font-bold text-ink hover:text-primary transition-colors cursor-pointer"
                        >
                          <span className="pr-3 leading-snug">{faq.q}</span>
                          <IconChevron
                            className={`h-4 w-4 shrink-0 text-ink-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-1 text-[11.5px] xs:text-[12px] sm:text-[13px] leading-relaxed text-ink-2 border-t border-line/60 bg-paper-2/40 animate-fade-in">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── CONVERSION CTA BANNER ── */}
              <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary-subtle via-paper to-primary-subtle p-6 sm:p-8 shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="space-y-1.5 max-w-xl">
                  <span className="rounded-md bg-primary px-2.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider text-paper inline-block">
                    Kostenloser Einstufungstest
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    Überprüfe deinen BMS-Wissensstand unter realen Testbedingungen.
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-ink-3 leading-relaxed">
                    24 repräsentative Originalfragen aus Biologie, Chemie, Physik und Mathematik in 10
                    Minuten. Sofortige Wissenslücken-Analyse und persönlicher Lernplan.
                  </p>
                </div>
                <a
                  href="#/onboarding?mode=register"
                  className="btn btn-primary px-6 py-3 text-xs sm:text-sm font-bold shadow-md whitespace-nowrap shrink-0"
                >
                  Einstufungstest starten (0 €) →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
