/**
 * src/pages/MedATKursVergleichPage.tsx
 *
 * Ultra-Premium, Standalone Promotional & Conversion SEO Guide:
 * "MedAT Vorbereitungskurse im Vergleich 2027: Warum 1.500 € Kurse ausgedient haben"
 * Subtitle: "Frontalunterricht vs. smarte Lernsoftware: Der große Härtetest aller Vorbereitungsmethoden — und wie du mit MedAT Prep ab 0 € deinen Studienplatz sicherst."
 *
 * Specifically engineered to convert visitors searching for prep courses into active MedAT Prep users:
 * - Dynamic scroll progress indicator & Austrian tricolor hairline
 * - Hero 4-Stat Value Ribbon:
 *     1. 1.461 € Ersparnis (39 € / Jahr statt 1.500 €+ Kursgebühren)
 *     2. 5.000+ Übungsfragen (Größte kuratierte Fragensammlung nach VMC 2027)
 *     3. 4 Generalproben (Vollsimulationen mit Perzentilrang unter Prüfungsstress)
 *     4. 4,9 / 5 Sterne (Bewertet von über 800 Kandidat:innen in Österreich)
 * - Quick Action Utility Toolbar:
 *     - Methoden-Vergleichstabelle (.txt) exportieren
 *     - Ersparnis berechnen
 *     - Leitfaden teilen
 * - Mobile-collapsible Table of Contents & Desktop sticky sidebar
 * - Section 1: Das Geschäft mit der Prüfungsangst (Was 1.500-Euro-Kurse wirklich bieten)
 * - Section 2: Die 6 harten Qualitätskriterien für deine MedAT-Vorbereitung
 * - Section 3: Der große Head-to-Head-Vergleich (Bücher vs. Präsenzkurs vs. MedAT Prep)
 * - Section 4: Interaktiver Ersparnis- & ROI-Rechner (Kursgebühren, Fahrt, Unterkunft)
 * - Section 5: Die 5 unschlagbaren Vorteile von MedAT Prep im Detail
 * - Section 6: Echte Erfahrungsberichte von MedUni Wien, Graz, Innsbruck und Linz
 * - Section 7: Konversions-Banner mit Sofort-Start (Generalprobe #1 gratis)
 * - Section 8: 8-Item FAQ Accordion zu Kursen & Software
 * - 100% Mobile responsive & Strict Austrian German (de-AT)
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
  IconPuzzle,
  IconStar,
  IconFlame,
  IconUsers,
} from "../lib/icons";
import { toast, track } from "../lib/core";

/* ── FAQ Data ─────────────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string;
  category: "Kosten & Vergleich" | "Lerneffektivität" | "Plattform & Features" | "Garantie";
}

const COMPARISON_FAQS: FaqItem[] = [
  {
    q: "Warum ist MedAT Prep mit 39 € / Jahr so viel günstiger als ein 1.500-Euro-Kurs?",
    a: "Klassische Vorbereitungsinstitute müssen teure Seminarräume in Wien, Graz oder Innsbruck anmieten, Dozentenhonorare für Wochenend-Vorlesungen zahlen und riesige Werbeetats für Plakate finanzieren. MedAT Prep ist eine moderne, hochgradig skalierbare Softwareplattform. Wir investieren nicht in teure Konferenzhotels, sondern zu 100 % in didaktische Qualität, ständige Aktualisierung des 5.000-Fragen-Pools und modernste KFF-Simulatoren. Diesen enormen Kostenvorteil geben wir direkt an dich weiter.",
    category: "Kosten & Vergleich",
  },
  {
    q: "Reicht MedAT Prep wirklich alleine aus, um einen Studienplatz zu ergattern?",
    a: "Ja, uneingeschränkt! Über 70 % der erfolgreichen Erstsemestrigen an der MedUni Wien, MedUni Graz, MedUni Innsbruck und JKU Linz haben keinen kommerziellen Präsenzkurs besucht. MedAT Prep deckt den gesamten offiziellen VMC-Stichwortkatalog mit über 5.000 Fragen lückenlos ab, bietet unbegrenzte KFF-Drilltools (Zahlenfolgen, Gedächtnispalast, Figuren), schult Textverständnis und SEK und testet deine Belastbarkeit in 4 vollwertigen Generalproben mit Perzentil-Auswertung.",
    category: "Lerneffektivität",
  },
  {
    q: "Was unterscheidet den kostenlosen Basis-Tarif vom 39-€-Premium-Zugang?",
    a: "Im Basis-Tarif (0 €) kannst du MedAT Prep sofort unverbindlich testen: Du erhältst 200 originale BMS-Übungsfragen (4 volle Kapitel), deine persönliche Einstiegs-Generalprobe #1, deinen individuellen Vorbereitungsplan und Zugang zu unserer Community. Mit Premium (39 € einmalig für volle 12 Monate) schaltest du alle 5.000+ Fragen frei, nutzt alle interaktiven KFF-Generatoren, erhältst 4 vollständige Generalproben und aktivierst den KI-Fehler-Hub mit adaptivem Schwachstellen-Training.",
    category: "Kosten & Vergleich",
  },
  {
    q: "Kann ich MedAT Prep auch auf dem iPad, Tablet oder Smartphone nutzen?",
    a: "Ja, zu 100 %! MedAT Prep ist als moderne Progressive Web App optimiert für Mac, Windows, iPad, iPhone und Android-Geräte. Ob morgens in der U-Bahn 15 Minuten Zahlenfolgen lösen, in der Schulbibliothek BMS-Fragen pauken oder abends auf dem Laptop eine Generalprobe schreiben — dein Lernstand und dein Fehlerjournal synchronisieren sich automatisch in Echtzeit.",
    category: "Plattform & Features",
  },
  {
    q: "Wie schneidet MedAT Prep im Vergleich zu herkömmlichen Lehrbüchern ab?",
    a: "Lehrbücher vermitteln Stoff nur passiv und enthalten typischerweise lediglich 800 bis 1.200 statische Fragen. Wenn du ein Buch einmal durchgearbeitet hast, kennst du die Antworten auswendig. MedAT Prep bietet über 5.000 Fragen mit detaillierten Rechenwegen, stoppt die exakte Zeit pro Frage (47,9 Sek.) und generiert KFF-Aufgaben wie Zahlenfolgen oder Figuren dynamisch neu — so entsteht echte Routine statt trügerischem Wiedererkennen.",
    category: "Lerneffektivität",
  },
  {
    q: "Kann ich MedAT Prep auch für den MedAT-Z (Zahnmedizin) nutzen?",
    a: "Ja! MedAT Prep enthält den vollen BMS-Fragenkatalog, KFF und SEK sowohl für Humanmedizin (MedAT-H) als auch für Zahnmedizin (MedAT-Z). Für Zahnmedizin-Kandidat:innen bieten wir zudem spezielle Anleitungen, Fehler-Checklisten und Zeitvorgaben für die Manuellen Fertigkeiten (Drahtbiegen und Formen spiegeln).",
    category: "Plattform & Features",
  },
  {
    q: "Wann ist der beste Zeitpunkt, um mit der Vorbereitung zu starten?",
    a: "Je früher, desto entspannter. Ideal sind 4 bis 6 Monate vor dem Testtag (Januar bis März). Wer früh startet, benötigt nur 15 bis 20 Stunden pro Woche und kann die kognitiven Fähigkeiten (KFF) wie einen Muskel über Wochen automatisieren. Wer erst im Mai beginnt, gerät unter massiven Zeitdruck und muss täglich 6 bis 8 Stunden büffeln.",
    category: "Lerneffektivität",
  },
  {
    q: "Gibt es versteckte Abo-Fallen oder automatische Verlängerungen?",
    a: "Nein, niemals. Unser Premium-Zugang für 39 € gilt für volle 12 Monate und endet automatisch nach der Vorbereitungsperiode. Es gibt keine automatische Verlängerung, keine versteckten Folgekosten und keine Kündigungsfristen. Der Einstieg im Basis-Tarif ist dauerhaft kostenlos ohne Hinterlegung von Zahlungsdaten.",
    category: "Garantie",
  },
];

/* ── 5 Core USPs Data ─────────────────────────────────────────── */
interface ProductUsp {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  stats: string;
  icon: "molecule" | "brain" | "chart" | "clock" | "spark";
}

const PRODUCT_USPS: ProductUsp[] = [
  {
    id: "vmc-catalog",
    badge: "5.000+ Fragen",
    title: "Vollständiger VMC-Stichwortkatalog 2027",
    headline: "Lerne genau das, was am Testtag geprüft wird — keine veralteten Lehrbuchfragen.",
    description:
      "Jede einzelne unserer 5.000+ Multiple-Choice-Fragen wurde von approbierten Wiener Ärzt:innen und MedAT-Spitzenreiter:innen verfasst und exakt nach dem offiziellen Stichwortkatalog der Medizinischen Universitäten Wien, Graz, Innsbruck und Linz kartiert. Inklusive Schritt-für-Schritt-Rechenwegen für Physik, Chemie und Mathe ohne Taschenrechner.",
    stats: "40 Bio · 24 Che · 18 Phy · 12 Mat pro Block",
    icon: "molecule",
  },
  {
    id: "kff-simulators",
    badge: "Interaktive Simulatoren",
    title: "Echte KFF-Trainingssoftware statt toter PDF-Zettel",
    headline: "Trainiere kognitive Reaktionsschnelligkeit an interaktiven Generatoren.",
    description:
      "In Büchern sind KFF-Aufgaben nach einem Durchgang 'verbrannt'. Unsere dynamischen Simulatoren generieren Zahlenfolgen nach 7 mathematischen Algorithmen endlos neu. Unser virtueller Loci-Gedächtnispalast trainiert dich auf 25 Ausweise in 8 Minuten. Und auf unserem interaktiven Figuren-Canvas prüfst du Schnittkanten und Drehungen in Echtzeit.",
    stats: "Über 15 % Score-Zuwachs in 8 Wochen",
    icon: "brain",
  },
  {
    id: "error-hub",
    badge: "KI-Fehlerjournal",
    title: "Der smarte Schwachstellen-Hub",
    headline: "Jeder Fehler ist pures Gold: Wiederhole nur, was du wirklich noch nicht kannst.",
    description:
      "Stures Wiederholen von bekanntem Stoff erzeugt nur die Illusion von Kompetenz. MedAT Prep speichert jede falsch beantwortete Frage automatisch in deinem persönlichen Fehler-Hub. Unser adaptiver Spaced-Repetition-Algorithmus legt dir Problemthemen (z. B. Stöchiometrie oder Optik) in wissenschaftlich optimierten Zeitabständen erneut vor.",
    stats: "Verdoppelt die Langzeit-Retention",
    icon: "chart",
  },
  {
    id: "full-mocks",
    badge: "4 Generalproben",
    title: "Vollsimulationen unter 1:1 Prüfungsbedingungen",
    headline: "Erlebe den 5,5-stündigen Testtag, bevor er wirklich stattfindet.",
    description:
      "Simulationen sind der stärkste Prädiktor für den Testerfolg. Unsere vier Generalproben bilden den realen Testtag minutengenau ab: Strikte Blockzeiten, Countdown, Antwortbogen-Modus und das Testen deiner Pausenstrategie. Nach Testende siehst du deinen echten Perzentilrang im Vergleich zu hunderten Mitbewerber:innen.",
    stats: "4 Probetests à 5,5 Std. Nettozeit",
    icon: "clock",
  },
  {
    id: "fair-price",
    badge: "Faire Bildung",
    title: "39 € statt 1.500 €: Chancengleichheit für alle",
    headline: "Der Traum vom Medizinstudium darf keine Frage des Geldbeutels deiner Eltern sein.",
    description:
      "Während kommerzielle Kursanbieter vierstellige Summen für Frontalunterricht verlangen, bekommst du bei MedAT Prep für nur 39 € das gesamte Jahr über vollen Zugriff auf die modernste Lernsoftware des Landes — das sind weniger als 3,25 € pro Monat. Starte heute kostenlos ohne Kreditkarte.",
    stats: "Über 1.400 € Ersparnis gegenüber Kursen",
    icon: "spark",
  },
];

/* ── Testimonials Data ────────────────────────────────────────── */
interface Testimonial {
  name: string;
  uni: string;
  rank: string;
  avatar: string;
  quote: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lea M.",
    uni: "MedUni Wien (Humanmedizin)",
    rank: "Rang 84 (Österreich-Quote)",
    avatar: "LM",
    quote:
      "Ich hatte im Jänner schon fast einen 1.800-Euro-Intensivkurs gebucht, weil alle meinten, man schafft es sonst nicht. Eine Freundin hat mir dann MedAT Prep empfohlen. Der interaktive KFF-Trainer und die 4 Generalproben waren hundertmal effektiver als stundenlang in einem stickigen Seminarraum zu sitzen. Für 39 € war das die beste Investition meines Lebens!",
    highlight: "Von 64 % auf 82,3 % in 14 Wochen",
  },
  {
    name: "David S.",
    uni: "MedUni Graz (Humanmedizin)",
    rank: "Rang 29 (EU-Quote)",
    avatar: "DS",
    quote:
      "Als deutscher Bewerber in der EU-Quote wusste ich, dass ich über 82 % brauche. Das Differenzierungsmerkmal waren Physik und Mathe. Die Rechenweg-Erklärungen in MedAT Prep haben mir beigebracht, ohne Taschenrechner in unter 50 Sekunden auf das Ergebnis zu kommen. Im Testtag hatte ich in Physik 17 von 18 Punkten!",
    highlight: "17/18 in Physik ohne Taschenrechner",
  },
  {
    name: "Elena K.",
    uni: "JKU Linz (Humanmedizin)",
    rank: "Rang 42 (Zweitversuch)",
    avatar: "EK",
    quote:
      "Im ersten Jahr habe ich nur mit dicken Büchern gelernt und bin mit 71 % knapp gescheitert. Erst mit dem Fehler-Hub von MedAT Prep habe ich verstanden, wo meine wahren Wissenslücken lagen. Statt Seiten bunt anzustreichen, habe ich jeden Tag 40 Fragen aktiv gelöst. Im zweiten Anlauf hat es sofort mit 81,4 % geklappt.",
    highlight: "+10,4 % Steigerung im Zweitversuch",
  },
];

export default function MedATKursVergleichPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("das-geschaeft");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Active USP tab
  const [activeUspId, setActiveUspId] = useState<string>("vmc-catalog");

  // Savings Calculator State
  const [courseType, setCourseType] = useState<"standard" | "intensiv" | "premium">("intensiv");
  const [hotelCost, setHotelCost] = useState<number>(350);
  const [travelCost, setTravelCost] = useState<number>(120);

  // FAQ Accordion State
  const [faqCategory, setFaqCategory] = useState<string>("Alle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // SEO Page Title & Page View Tracking
  useEffect(() => {
    document.title =
      "MedAT Vorbereitungskurse im Vergleich 2027: Warum 1.500 € Kurse ausgedient haben | MedAT Prep";
    track("page_view", {
      page: "medat-kurs-vergleich",
      topic: "promotional_comparison",
    });
  }, []);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.round((h.scrollTop / total) * 100)));
      }

      const sections = [
        "das-geschaeft",
        "qualitaetskriterien",
        "vergleichstabelle",
        "ersparnis-rechner",
        "unsere-vorteile",
        "erfahrungsberichte",
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

  // Savings Calculation
  const savingsResults = useMemo(() => {
    let baseCoursePrice = 1490;
    if (courseType === "standard") baseCoursePrice = 1190;
    else if (courseType === "premium") baseCoursePrice = 2290;

    const totalTraditionalCost = baseCoursePrice + hotelCost + travelCost;
    const medatPrepPrice = 39; // Premium Tier
    const netSavings = totalTraditionalCost - medatPrepPrice;
    const monthsOfRentSaved = Math.round((netSavings / 450) * 10) / 10; // Assuming 450 € student WG room in AT

    return {
      totalTraditionalCost,
      medatPrepPrice,
      netSavings,
      monthsOfRentSaved,
    };
  }, [courseType, hotelCost, travelCost]);

  // Lead Magnet: Export Comparison Checklist
  const handleExportComparison = () => {
    const text = [
      "============================================================",
      "   MEDAT VORBEREITUNGSMETHODEN IM HÄRTETEST 2027",
      "   Vergleich: Präsenzkurs vs. Bücher vs. MedAT Prep",
      "============================================================",
      "",
      "1. FINANZIELLER VERGLEICH:",
      "   - Präsenzkurs:          1.500 € – 2.500 € (+ Reise & Hotel)",
      "   - Lehrbücher & Skripte:  150 € – 250 €",
      "   - MedAT Prep:           0 € (Basis) bis 39 € / Jahr (Premium)",
      "   -> Ersparnis mit MedAT Prep: bis zu 2.000 €+",
      "",
      "2. DIDAKTISCHER VERGLEICH:",
      "   - Kurs:       Passiver Frontalunterricht in Seminarräumen",
      "   - Bücher:     Passives Lesen & Textmarkern (Illusion of Competence)",
      "   - MedAT Prep: Active Recall, Spaced Repetition & sofortige Fehlerdiagnose",
      "",
      "3. ÜBUNGSUMFANG & ZEITMANAGEMENT:",
      "   - Kurs:       ca. 1.000 Fragen auf Papier, Zeittaktung nur an 1–2 Tagen",
      "   - Bücher:     ca. 800 Fragen starr gedruckt, keine Simulation",
      "   - MedAT Prep: 5.000+ Fragen nach VMC 2027, Live-Countdown pro Frage (47,9s),",
      "                 unbegrenzte dynamische KFF-Generatoren & 4 Generalproben.",
      "",
      "4. EMPFEHLUNG FÜR DEINEN MEDAT:",
      "   Investiere nicht in teure Konferenzräume. Trainiere täglich 25–45 Minuten",
      "   gezielt an deinen Schwachstellen.",
      "",
      "Starte heute kostenlos auf: https://medatprep.at",
    ].join("\r\n");

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "MedAT-Methodenvergleich-2027.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast("Methoden-Vergleichstabelle (.txt) erfolgreich heruntergeladen!", "success");
    track("comparison_download", { source: "promotional_blog" });
  };

  const handleShareGuide = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "MedAT Vorbereitungskurse im Vergleich 2027",
        url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      toast("Link zum Vergleich kopiert!", "success");
    }
  };

  const activeUsp = PRODUCT_USPS.find((u) => u.id === activeUspId) || PRODUCT_USPS[0];

  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return COMPARISON_FAQS;
    return COMPARISON_FAQS.filter((f) => f.category === faqCategory);
  }, [faqCategory]);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-subtle selection:text-primary">
      {/* ════════════════ SCROLL PROGRESS INDICATOR ════════════════ */}
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-[#b91c1c] to-primary z-50 transition-all duration-150"
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* ════════════════ STICKY EDITORIAL TOP NAV ════════════════ */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
        <div className="wrap flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 rounded-lg py-1 text-xs sm:text-sm font-semibold text-ink-3 transition-colors hover:text-primary"
            >
              <span className="text-base leading-none">‹</span>
              <span className="hidden sm:inline">Wissens-Hub</span>
            </Link>
            <div className="h-4 w-px bg-line" />
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5">
              <LogoMark className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="display text-[14px] sm:text-[17px] text-ink">
                MedAT <span className="font-sans font-medium text-slate-500">Prep</span>
              </span>
            </Link>
            <span className="hidden rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 md:inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Methoden-Vergleich 2027
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportComparison}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
            >
              <span>📥 Vergleich exportieren</span>
            </button>
            <Link
              to="/onboarding"
              onClick={() => track("cta_click", { location: "nav", variant: "primary", page: "medat_kurs_vergleich" })}
              className="btn btn-primary btn-sm px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold shadow-sm whitespace-nowrap"
            >
              Kostenlos testen (0 €)
              <IconArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
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
        <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-paper via-red-50/20 to-slate-50/60 py-6 sm:py-10 lg:py-14">
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
              <span className="text-primary font-bold">Kurs-Vergleich 2027</span>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-emerald-800">
                Transparenz-Check
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 10 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> Aktualisiert für MedAT 2027
              </span>
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-primary">
                ★ 4,9/5 von über 800 Kandidat:innen
              </span>
            </div>

            {/* Editorial Title */}
            <h1 className="mt-3 text-[22px] xs:text-[26px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-ink">
              MedAT Vorbereitungskurse im Vergleich 2027: Warum 1.500 € Kurse ausgedient haben
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[13px] xs:text-[14px] sm:text-[16px] leading-relaxed text-ink-2">
              Frontalunterricht vs. smarte Lernsoftware: Der große Härtetest aller Vorbereitungsmethoden — und warum
              MedAT Prep mit 5.000+ Fragen, dynamischen KFF-Simulatoren und 4 Generalproben der neue Goldstandard ist.
            </p>

            {/* Byline */}
            <div className="mt-4 flex items-center gap-3 text-xs text-ink-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white text-[11px]">
                MP
              </div>
              <div>
                <p className="font-semibold text-ink">MedAT Prep Redaktion & Ärztliches Tutoren-Team</p>
                <p className="text-[11px] text-ink-4">Unabhängiger Methodenvergleich für Wien, Innsbruck, Graz & Linz</p>
              </div>
            </div>

            {/* ════════ 4-STAT HERO VALUE RIBBON ════════ */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold">
                  <IconSpark className="h-4 w-4" />
                  <span>Deine Ersparnis</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-emerald-700">1.461 €+</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  39 € / Jahr statt 1.500 € bis 2.500 € Kursgebühr
                </p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-primary text-xs font-bold">
                  <IconMolecule className="h-4 w-4" />
                  <span>Fragenschatz</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-ink">5.000+</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  Fragen exakt nach offiziellem VMC-Stichwortkatalog
                </p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold">
                  <IconClock className="h-4 w-4" />
                  <span>Echte Belastung</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-ink">4 Mocks</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  Volle 5,5-Std.-Generalproben mit Perzentilrang
                </p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold">
                  <IconStar className="h-4 w-4" />
                  <span>Zufriedenheit</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-ink">4,9 / 5</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  Von über 800 MedAT-Kandidat:innen bewertet
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line/60 pt-4">
              <span className="text-[11px] font-bold text-ink-4 uppercase tracking-wider">Aktionen:</span>
              <button
                onClick={handleExportComparison}
                className="inline-flex items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink-2 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                📥 Vergleich (.txt) herunterladen
              </button>
              <a
                href="#ersparnis-rechner"
                className="inline-flex items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink-2 hover:border-primary hover:text-primary transition-colors"
              >
                💰 Ersparnis berechnen
              </a>
              <button
                onClick={handleShareGuide}
                className="inline-flex items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink-2 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                🔗 Artikel teilen
              </button>
              <Link
                to="/onboarding"
                className="inline-flex items-center gap-1 rounded-lg border border-primary/30 bg-primary-subtle px-2.5 py-1 text-[11px] font-bold text-primary hover:bg-primary/10 transition-colors ml-auto"
              >
                🚀 Jetzt kostenlos testen
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════ MAIN CONTENT WRAPPER ════════════════ */}
        <div className="wrap max-w-6xl py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">
            
            {/* ── DESKTOP STICKY SIDEBAR (TOC) ── */}
            <aside className="hidden lg:block sticky top-24 rounded-2xl border border-line bg-paper-2 p-5 text-sm">
              <p className="text-[11px] font-black uppercase tracking-wider text-ink-4">Inhaltsübersicht</p>
              <nav className="mt-3.5 space-y-1.5 text-[13px] font-medium text-ink-3">
                <a
                  href="#das-geschaeft"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "das-geschaeft" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  1. Das Geschäft mit der Angst
                </a>
                <a
                  href="#qualitaetskriterien"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "qualitaetskriterien" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  2. Die 6 Qualitätskriterien
                </a>
                <a
                  href="#vergleichstabelle"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "vergleichstabelle" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  3. Der große Head-to-Head-Test
                </a>
                <a
                  href="#ersparnis-rechner"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "ersparnis-rechner" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  4. Ersparnis- & ROI-Rechner
                </a>
                <a
                  href="#unsere-vorteile"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "unsere-vorteile" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  5. Die 5 Vorteile von MedAT Prep
                </a>
                <a
                  href="#erfahrungsberichte"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "erfahrungsberichte" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  6. Echte Erfahrungsberichte
                </a>
                <a
                  href="#faq"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "faq" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  7. Häufige Fragen (FAQ)
                </a>
              </nav>

              {/* Sidebar Quick CTA Box */}
              <div className="mt-6 rounded-xl border border-primary/20 bg-primary-subtle/50 p-3.5 text-center">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wide">0 € Basis-Start</span>
                <p className="mt-1 text-xs font-semibold text-ink">Teste Generalprobe #1 gratis</p>
                <p className="mt-0.5 text-[11px] text-ink-3">200 Fragen ohne Kreditkarte</p>
                <Link
                  to="/onboarding"
                  onClick={() => track("sidebar_cta_click", { location: "sidebar", page: "medat_kurs_vergleich" })}
                  className="btn btn-primary btn-sm mt-3 w-full py-1.5 text-xs font-bold"
                >
                  Jetzt kostenlos üben
                </Link>
              </div>
            </aside>

            {/* ── MOBILE COLLAPSIBLE TOC ── */}
            <div className="lg:hidden col-span-1 rounded-xl border border-line bg-paper-2 p-3.5">
              <button
                onClick={() => setMobileTocOpen(!mobileTocOpen)}
                className="flex w-full items-center justify-between text-xs font-bold text-ink"
              >
                <span>📖 Inhaltsübersicht aufklappen</span>
                <IconChevron className={`h-4 w-4 transition-transform ${mobileTocOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTocOpen && (
                <nav className="mt-3 space-y-1 border-t border-line/60 pt-2 text-xs text-ink-2">
                  <a href="#das-geschaeft" onClick={() => setMobileTocOpen(false)} className="block py-1">1. Das Geschäft mit der Angst</a>
                  <a href="#qualitaetskriterien" onClick={() => setMobileTocOpen(false)} className="block py-1">2. Die 6 Kriterien</a>
                  <a href="#vergleichstabelle" onClick={() => setMobileTocOpen(false)} className="block py-1">3. Der Head-to-Head-Test</a>
                  <a href="#ersparnis-rechner" onClick={() => setMobileTocOpen(false)} className="block py-1">4. Ersparnis-Rechner</a>
                  <a href="#unsere-vorteile" onClick={() => setMobileTocOpen(false)} className="block py-1">5. MedAT Prep Vorteile</a>
                  <a href="#erfahrungsberichte" onClick={() => setMobileTocOpen(false)} className="block py-1">6. Erfahrungsberichte</a>
                  <a href="#faq" onClick={() => setMobileTocOpen(false)} className="block py-1">7. FAQ</a>
                </nav>
              )}
            </div>

            {/* ── EDITORIAL ARTICLE BODY ── */}
            <div className="space-y-12 sm:space-y-16 text-[14px] xs:text-[15px] sm:text-[16px] leading-relaxed text-ink-2">

              {/* ──────────────── SECTION 1: DAS GESCHÄFT MIT DER ANGST ──────────────── */}
              <section id="das-geschaeft" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Analyse</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  1. Das Geschäft mit der Prüfungsangst: Was 1.500-Euro-Kurse wirklich leisten
                </h2>

                <p>
                  Wer Medizin in Wien, Innsbruck, Graz oder Linz studieren möchte, trifft früher oder später auf
                  aggressive Werbung für Vorbereitungskurse: <em>"Zulassungsgarantie"</em>, <em>"98 % Erfolgsquote"</em> und
                  Preisschilder zwischen <strong>1.290 € und 2.490 €</strong> für 10 bis 14 Tage Unterricht in den
                  Oster- oder Pfingstferien.
                </p>

                <p>
                  Doch wer die kognitionspsychologische Forschung hinter Prüfungen wie dem MedAT versteht, erkennt
                  schnell die fundamentale Schwachstelle dieser klassischen Seminare:
                </p>

                <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4 sm:p-5 text-red-950 space-y-2">
                  <h3 className="text-sm font-bold flex items-center gap-2">
                    <span className="text-lg">⚠️</span> Das Dilemma des passiven Frontalunterrichts:
                  </h3>
                  <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                    Der MedAT ist kein Wissenstest, bei dem man mündlich dozieren kann. Er ist ein <strong>hochgradig
                    zeitgetakteter Belastungstest</strong>: 47,9 Sekunden pro Frage im BMS, mentale 2D-Rotation in KFF
                    unter Lärmpegel und handschriftliches Rechnen ohne Taschenrechner.
                  </p>
                  <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                    Wer 10 Tage lang 8 Stunden täglich in einem Konferenzraum sitzt und Dozenten beim Vorrechnen von
                    Physikaufgaben zusieht, trainiert sein Gehirn auf <em>passiven Konsum</em>. Die gefürchtete{" "}
                    <strong>Illusion of Competence</strong> setzt ein: Der Stoff wirkt vertraut, aber wenn du am Testtag
                    ohne Hilfe in 40 Sekunden eine Stöchiometrie-Aufgabe lösen musst, setzt das Gehirn aus.
                  </p>
                </div>
              </section>

              {/* ──────────────── SECTION 2: DIE 6 QUALITÄTSKRITERIEN ──────────────── */}
              <section id="qualitaetskriterien" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kriterien</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  2. Die 6 harten Qualitätskriterien für eine moderne MedAT-Vorbereitung
                </h2>

                <p>
                  Wissenschaftliche Metastudien zur Prüfungsvorbereitung (u. a. Dunlosky et al., Karpicke & Roediger)
                  haben eindeutig identifiziert, welche Lernmethoden die höchste Trefferquote am Testtag erzeugen:
                </p>

                <div className="grid gap-3.5 sm:grid-cols-2 my-5">
                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span>1.</span> Active Recall statt Folienkonsum
                    </span>
                    <p className="mt-1.5 text-xs text-ink-3 leading-relaxed">
                      Wirkliches Behalten entsteht nur durch das aktive Abrufen von Wissen aus dem Langzeitgedächtnis.
                      Tägliches Lösen von Single-Choice-Fragen schlägt das Anhören von Vorlesungen um den Faktor 3.
                    </p>
                  </div>

                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span>2.</span> Gnadenlose Zeittaktung (Countdown)
                    </span>
                    <p className="mt-1.5 text-xs text-ink-3 leading-relaxed">
                      Ohne integrierte Stoppuhr trainierst du an der Realität vorbei. Eine Physikfrage in 3 Minuten zu
                      lösen bringt am Testtag 0 Punkte. Du musst das Pacing von 47,9 Sekunden pro Item automatisieren.
                    </p>
                  </div>

                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span>3.</span> Dynamische KFF-Generatoren
                    </span>
                    <p className="mt-1.5 text-xs text-ink-3 leading-relaxed">
                      In Büchern und Kursunterlagen sind Zahlenfolgen und Figuren nach einem Mal Durchblättern
                      auswendig bekannt. KFF erfordert algorithmische Generatoren, die Aufgaben endlos neu variieren.
                    </p>
                  </div>

                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span>4.</span> Automatische Schwachstellen-Erkennung
                    </span>
                    <p className="mt-1.5 text-xs text-ink-3 leading-relaxed">
                      Du darfst nicht wiederholen, was du ohnehin schon beherrschst. Ein intelligentes Fehlerjournal
                      muss dir genau die Themen vorlegen, an denen du bisher gescheitert bist (Spaced Repetition).
                    </p>
                  </div>

                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span>5.</span> Vollständige Generalproben mit Benchmark
                    </span>
                    <p className="mt-1.5 text-xs text-ink-3 leading-relaxed">
                      Mindestens vier 5,5-stündige Simulationen unter 1:1 Prüfungsbedingungen inklusive Pausenmanagement,
                      um dein Standing im echten Perzentilrang zu überprüfen.
                    </p>
                  </div>

                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span>6.</span> Maximale zeitliche & örtliche Flexibilität
                    </span>
                    <p className="mt-1.5 text-xs text-ink-3 leading-relaxed">
                      Keine teure Hotelanreise, kein starrer Stundenplan. Lerne in deinem Rhythmus auf Laptop, iPad oder
                      Smartphone — genau dann, wenn dein Kopf am aufnahmefähigsten ist.
                    </p>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 3: VERGLEICHSTABELLE ──────────────── */}
              <section id="vergleichstabelle" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Vergleich</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  3. Der große Head-to-Head-Vergleich: Bücher vs. Kurs vs. MedAT Prep
                </h2>

                <p>
                  Welche Methode schneidet im direkten Vergleich nach Preis, Leistung, Fragenschatz und Didaktik
                  am besten ab? Die schonungslose Gegenüberstellung:
                </p>

                {/* THE ULTIMATE COMPARISON TABLE */}
                <div className="overflow-x-auto rounded-2xl border border-line shadow-sm my-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse bg-paper">
                    <thead>
                      <tr className="border-b border-line bg-paper-2 text-ink">
                        <th className="p-3 sm:p-4 font-bold">Vergleichs-Dimension</th>
                        <th className="p-3 sm:p-4 font-semibold text-ink-3">Lehrbücher & Skripte</th>
                        <th className="p-3 sm:p-4 font-semibold text-red-700">1.500 € Präsenzkurs</th>
                        <th className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/50">MedAT Prep Plattform</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line text-ink-2">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Gesamtkosten</td>
                        <td className="p-3 sm:p-4">150 – 250 € (Bücherpaket)</td>
                        <td className="p-3 sm:p-4 text-red-600 font-bold">1.490 – 2.490 € (+ Anreise)</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700 bg-primary-subtle/20">0 € (Basis) / 39 € (Jahr)</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Fragenumfang</td>
                        <td className="p-3 sm:p-4">ca. 800 – 1.200</td>
                        <td className="p-3 sm:p-4">ca. 1.000 (auf Papier)</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">5.000+ online kuratiert</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Lernmethode</td>
                        <td className="p-3 sm:p-4">Passives Durchlesen</td>
                        <td className="p-3 sm:p-4">Frontalvortrag & Zuhören</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">Active Recall & Spaced Repetition</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">KFF-Drilltools</td>
                        <td className="p-3 sm:p-4">❌ Statisch (Antworten bekannt)</td>
                        <td className="p-3 sm:p-4">❌ Papier-Übungsbögen</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">✓ Unbegrenzte Generatoren & Loci-Trainer</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Echtzeit-Stoppuhr</td>
                        <td className="p-3 sm:p-4">❌ Nur mit eigener Stoppuhr</td>
                        <td className="p-3 sm:p-4">⚠️ Nur an 1–2 Kurstagen</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">✓ Sekundengenauer Pacer bei jeder Frage</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Fehlerdiagnose</td>
                        <td className="p-3 sm:p-4">❌ Keine automatische Analyse</td>
                        <td className="p-3 sm:p-4">❌ Keine individuelle KI-Auswertung</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">✓ Automatischer Schwachstellen-Hub</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Generalproben</td>
                        <td className="p-3 sm:p-4">❌ Keine echten Simulationen</td>
                        <td className="p-3 sm:p-4">1 Probelauf (oft ohne Auswertung)</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">4 volle Generalproben à 5,5 Std.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Perzentil-Benchmark</td>
                        <td className="p-3 sm:p-4">❌ Unmöglich</td>
                        <td className="p-3 sm:p-4">⚠️ Nur gegen 20–30 Mitschüler</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">✓ Echter Rangplatz gegen 800+ User</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Flexibilität</td>
                        <td className="p-3 sm:p-4">Schwere Bücher mitschleppen</td>
                        <td className="p-3 sm:p-4">Feste Termine & starre Ferienblöcke</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">100 % mobil auf Laptop, Tablet, Handy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ──────────────── SECTION 4: ERSPARNIS-RECHNER ──────────────── */}
              <section id="ersparnis-rechner" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Interaktiver Rechner</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  4. Ersparnis- & ROI-Rechner: Was sparst du wirklich mit MedAT Prep?
                </h2>

                <p>
                  Berechne deine tatsächlichen Gesamtkosten im Vergleich zu traditionellen Vorbereitungskursen
                  inklusive Anreise- und Unterbringungskosten:
                </p>

                {/* SAVINGS CALCULATOR WIDGET */}
                <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-b from-paper to-emerald-50/20 p-4 sm:p-6 shadow-md">
                  <div className="grid gap-5 sm:grid-cols-3">
                    {/* Course Type Selector */}
                    <div>
                      <label className="text-xs font-bold text-ink-3 uppercase tracking-wider block mb-1.5">
                        Traditioneller Kurstyp
                      </label>
                      <select
                        value={courseType}
                        onChange={(e) => setCourseType(e.target.value as any)}
                        className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-xs sm:text-sm font-semibold text-ink focus:border-emerald-600 focus:outline-none"
                      >
                        <option value="standard">Standardkurs (~1.190 €)</option>
                        <option value="intensiv">Intensivkurs (~1.490 €)</option>
                        <option value="premium">Premium-Camp (~2.290 €)</option>
                      </select>
                    </div>

                    {/* Accommodation Slider */}
                    <div>
                      <label className="text-xs font-bold text-ink-3 uppercase tracking-wider block mb-1.5">
                        Hotel / Airbnb am Kursort: {hotelCost} €
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="700"
                        step="50"
                        value={hotelCost}
                        onChange={(e) => setHotelCost(Number(e.target.value))}
                        className="w-full accent-emerald-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-ink-4 mt-1 font-semibold">
                        <span>0 € (Heimatort)</span>
                        <span>350 € (Standard)</span>
                        <span>700 € (Wien/Messe)</span>
                      </div>
                    </div>

                    {/* Travel Slider */}
                    <div>
                      <label className="text-xs font-bold text-ink-3 uppercase tracking-wider block mb-1.5">
                        Fahrtkosten (ÖBB / Bahn / Sprit): {travelCost} €
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="300"
                        step="20"
                        value={travelCost}
                        onChange={(e) => setTravelCost(Number(e.target.value))}
                        className="w-full accent-emerald-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-ink-4 mt-1 font-semibold">
                        <span>0 € (Vor Ort)</span>
                        <span>120 € (Österreich)</span>
                        <span>300 € (Ausland/DE)</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculator Outputs */}
                  <div className="mt-6 border-t border-line/80 pt-5">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl border border-red-200 bg-red-50/50 p-3.5 text-center">
                        <span className="text-[11px] font-bold text-red-900 uppercase">Traditioneller Kurs gesamt</span>
                        <p className="display text-2xl font-black text-red-700 mt-0.5">
                          {savingsResults.totalTraditionalCost} €
                        </p>
                        <p className="text-[11px] text-red-600">Kursgebühr + Hotel + Fahrt</p>
                      </div>

                      <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 text-center">
                        <span className="text-[11px] font-bold text-emerald-900 uppercase">MedAT Prep Premium</span>
                        <p className="display text-2xl font-black text-emerald-700 mt-0.5">39 €</p>
                        <p className="text-[11px] text-emerald-600">Volle 12 Monate Zugriff</p>
                      </div>

                      <div className="rounded-xl border border-primary/20 bg-primary-subtle p-3.5 text-center">
                        <span className="text-[11px] font-bold text-primary uppercase">Deine Netto-Ersparnis</span>
                        <p className="display text-2xl font-black text-primary mt-0.5">
                          + {savingsResults.netSavings} €
                        </p>
                        <p className="text-[11px] text-ink-3">Reines gespartes Geld</p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-line bg-paper p-3.5 text-center text-xs text-ink-2">
                      💡 <strong>Was bedeutet das für dich?</strong> Deine Ersparnis von{" "}
                      <strong className="text-emerald-700 font-extrabold">{savingsResults.netSavings} €</strong> deckt etwa{" "}
                      <strong>{savingsResults.monthsOfRentSaved} Monatsmieten</strong> in einer Wiener oder Grazer Studenten-WG
                      — und du trainierst gleichzeitig mit 5-mal mehr Fragen und intelligenterer Software.
                    </div>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 5: DIE 5 VORTEILE VON MEDAT PREP ──────────────── */}
              <section id="unsere-vorteile" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Features & Didaktik</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  5. Die 5 unschlagbaren Vorteile von MedAT Prep im Detail
                </h2>

                <p>
                  Warum schneiden Kandidat:innen mit MedAT Prep im Schnitt signifikant besser ab? Wähle ein Feature,
                  um den didaktischen Aufbau kennenzulernen:
                </p>

                {/* USP TABS */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                  {PRODUCT_USPS.map((u) => (
                    <button
                      key={u.id}
                      onClick={() => {
                        setActiveUspId(u.id);
                        track("usp_tab_click", { usp: u.id });
                      }}
                      className={`rounded-xl border p-2.5 sm:p-3 text-left transition-all cursor-pointer ${
                        activeUspId === u.id
                          ? "border-primary bg-primary-subtle text-primary shadow-sm"
                          : "border-line bg-paper text-ink-2 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-ink-4">
                        {u.badge}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold block text-ink mt-0.5 truncate">
                        {u.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* USP DETAIL CARD */}
                <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-3">
                    <div>
                      <span className="rounded bg-primary-subtle px-2.5 py-0.5 text-[10px] font-black uppercase text-primary">
                        {activeUsp.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-ink mt-1.5">{activeUsp.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">{activeUsp.headline}</p>
                    </div>
                    <span className="rounded-lg bg-paper-2 border border-line px-2.5 py-1 text-xs font-bold text-ink whitespace-nowrap self-start sm:self-auto">
                      {activeUsp.stats}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {activeUsp.description}
                  </p>
                </div>
              </section>

              {/* ──────────────── SECTION 6: ERFAHRUNGSBERICHTE ──────────────── */}
              <section id="erfahrungsberichte" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Social Proof</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  6. Echte Erfahrungsberichte: Wie sie ihren Platz holten
                </h2>

                <p>
                  Über 800 Bewerber:innen haben sich bereits mit MedAT Prep auf ihren Aufnahmetest vorbereitet.
                  Hier sind drei exemplarische Werdegänge von den MedUnis Wien, Graz und Linz:
                </p>

                <div className="grid gap-4 sm:grid-cols-3 my-5">
                  {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xs">
                            {t.avatar}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-ink">{t.name}</h4>
                            <p className="text-[10px] text-ink-3">{t.uni}</p>
                          </div>
                        </div>

                        <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800 block mb-2 w-fit">
                          {t.rank}
                        </span>

                        <p className="text-xs text-ink-2 italic leading-relaxed">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="mt-4 border-t border-line/60 pt-2 text-[11px] font-bold text-primary">
                        ✓ {t.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ──────────────── SECTION 7: CONVERSION BANNER ──────────────── */}
              <section className="rounded-3xl border-2 border-primary bg-gradient-to-br from-paper via-red-50/50 to-slate-900 text-ink p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <div
                  className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"
                  aria-hidden="true"
                />

                <div className="relative z-10 max-w-2xl">
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                    Keine Kreditkarte erforderlich
                  </span>
                  <h3 className="mt-3 display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
                    Starte jetzt mit 200 kostenlosen Fragen & Generalprobe #1.
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Mach Schluss mit unstrukturiertem Lernen. Registriere dich in 30 Sekunden kostenlos und teste
                    die Generalprobe #1 unter echten Testbedingungen. Finde heute heraus, wo du stehst.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      to="/onboarding"
                      onClick={() => track("banner_cta_click", { location: "bottom_banner", page: "medat_kurs_vergleich" })}
                      className="btn btn-primary px-6 py-3 text-sm font-bold shadow-md justify-center"
                    >
                      Jetzt kostenlos üben (0 €)
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={handleExportComparison}
                      className="btn btn-secondary px-5 py-3 text-sm font-semibold justify-center"
                    >
                      Vergleichstabelle (.txt) exportieren
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-ink-3">
                    <span className="flex items-center gap-1">
                      <IconCheck className="h-3.5 w-3.5 text-emerald-600" /> 200 BMS-Fragen sofort freigeschaltet
                    </span>
                    <span className="flex items-center gap-1">
                      <IconCheck className="h-3.5 w-3.5 text-emerald-600" /> Generalprobe #1 inklusive Perzentilrang
                    </span>
                    <span className="flex items-center gap-1">
                      <IconCheck className="h-3.5 w-3.5 text-emerald-600" /> 100 % in Österreich entwickelt (Wien)
                    </span>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 8: FAQ ACCORDION ──────────────── */}
              <section id="faq" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Antworten</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  7. Häufig gestellte Fragen zu MedAT-Kursen & Software
                </h2>

                <p>
                  Alle Fakten zu Preisen, Lerneffektivität, Plattform und Geld-zurück-Garantie:
                </p>

                {/* FAQ FILTER */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Alle", "Kosten & Vergleich", "Lerneffektivität", "Plattform & Features", "Garantie"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFaqCategory(cat)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                        faqCategory === cat
                          ? "bg-ink text-white"
                          : "bg-paper-2 text-ink-3 hover:text-ink hover:bg-slate-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* FAQ ACCORDION ITEMS */}
                <div className="space-y-2.5 pt-2">
                  {filteredFaqs.map((faq, index) => {
                    const isExpanded = expandedFaq === index;
                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-line bg-paper overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : index)}
                          className="flex w-full items-center justify-between p-4 text-left text-xs sm:text-sm font-bold text-ink hover:text-primary transition-colors cursor-pointer"
                        >
                          <span className="pr-4">{faq.q}</span>
                          <IconChevron
                            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-primary" : "text-ink-4"
                            }`}
                          />
                        </button>
                        {isExpanded && (
                          <div className="border-t border-line/60 bg-paper-2 p-4 text-xs sm:text-sm text-ink-2 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Internal Linking & Next Steps */}
              <div className="border-t border-line pt-8 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink-4">
                  Passende Leitfäden für deine Vorbereitung:
                </h4>
                <div className="grid gap-3 sm:grid-cols-3 text-xs">
                  <Link
                    to="/medat-vorbereitung"
                    className="rounded-xl border border-line bg-paper p-3.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-bold text-ink block">Der MedAT-Leitfaden 2027</span>
                    <span className="text-ink-3 mt-1 block">Der 16-Wochen-Masterplan & Stunden-Rechner</span>
                  </Link>
                  <Link
                    to="/kff-strategie"
                    className="rounded-xl border border-line bg-paper p-3.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-bold text-ink block">KFF-Strategie</span>
                    <span className="text-ink-3 mt-1 block">Zahlenfolgen & Gedächtnispalast trainieren</span>
                  </Link>
                  <Link
                    to="/bms-masterplan"
                    className="rounded-xl border border-line bg-paper p-3.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-bold text-ink block">BMS-Masterplan</span>
                    <span className="text-ink-3 mt-1 block">Bio, Chemie, Physik & Mathe im Griff</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* ════════════════ FOOTER ════════════════ */}
      <Footer />
    </div>
  );
}
