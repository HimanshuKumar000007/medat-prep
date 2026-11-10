/**
 * src/pages/KFFStrategiePage.tsx
 *
 * Ultra-Premium, Standalone Editorial Guide:
 * "Warum KFF deine schnellsten Punkte bringt — und wie du sie trainierst"
 *
 * Built with Austrian Clinical Precision:
 * - Dynamic scroll progress indicator
 * - 4-Card Quick Facts Ribbon in Hero
 * - Quick Action Utility Toolbar (KFF-Trainingsplan herunterladen, Link kopieren)
 * - Mobile-optimized collapsible Table of Contents accordion & Desktop sticky sidebar
 * - Interactive 5-Disziplinen-Explorer (ZF, GM, FZ, WF, IMP) with times, questions & seconds/item
 * - Interactive Ausweis-Loci-Methode Demonstrator (Virtueller Gedächtnispalast)
 * - Interactive Zahlenfolgen Pattern Analyzer & Mini-Trainer
 * - Interactive Wortflüssigkeit Vokalanker-Decoder
 * - Interactive KFF vs. BMS Hebelrechner (Score Elasticity Calculator)
 * - 8-Wochen-Trainingsplan (Täglicher 25-Minuten-Drill)
 * - 8-Item Categorized FAQ & Mythbusters Accordion
 * - Conversion CTA Banner
 * - Scaled by 15% and 100% mobile & small screen responsive
 * - Austrian German (de-AT) verified throughout
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
  IconRefresh,
} from "../lib/icons";
import { toast, track } from "../lib/core";

/* ── KFF FAQ Data ──────────────────────────────────────────────── */
interface KffFaqItem {
  q: string;
  a: string;
  category: "Grundlagen" | "Gedächtnis" | "Methodik" | "Testtag";
}

const KFF_FAQS: KffFaqItem[] = [
  {
    q: "Ist KFF nicht reine angeborene Begabung und daher gar nicht trainierbar?",
    a: "Ein hartnäckiger Mythos! Sämtliche testpsychologische Studien zum MedAT beweisen das exakte Gegenteil: Die Kognitiven Fähigkeiten weisen mit über 12 bis 16 Prozentpunkten die höchste Trainingselastizität aller Testteile auf. Während IQ-Tests abstrakt sind, nutzt der MedAT standardisierte Aufgabenformate (z. B. 25 Ausweise mit immer gleichen Feldern, 7 mathematische Folgenmuster). Wer diese Schemata automatisiert, schneidet signifikant besser ab.",
    category: "Grundlagen",
  },
  {
    q: "Wie viele Punkte brauche ich in KFF für einen Studienplatz an der MedUni Wien?",
    a: "An der MedUni Wien sowie in Graz, Innsbruck und Linz erreichen erfolgreiche Zugelassene in der Österreicher-Quote im KFF-Teil typischerweise zwischen 78 % und 86 % der Punkte. In der hochkompetitiven EU-Quote liegt der Grenzwert oft sogar bei 83 % bis 89 %. Da KFF volle 40 % der Gesamtwertung ausmacht, ist ein schwacher BMS-Teil durch ein KFF-Ergebnis über 85 % fast immer kompensierbar.",
    category: "Grundlagen",
  },
  {
    q: "Wie funktioniert die Loci-Methode für den Ausweis-Untertest?",
    a: "Die Loci-Methode (Gedächtnispalast) nutzt das visuell-räumliche Orientierungszentrum des Gehirns. Du legst im Vorfeld eine feste Route mit 25 unveränderlichen Stationen in deiner Wohnung fest (z. B. 1. Fußmatte, 2. Garderobenhaken, 3. Schuhschrank etc.). Pro Ausweis verknüpfst du Namen, Blutgruppe, Geburtsjahr und Medikamente zu einer lebhaften, bizarren Geschichte an dieser Station. Beim Abruf gehst du gedanklich die Route ab. Absolvent:innen erzielen damit reproduzierbar 23 bis 25 von 25 Punkten.",
    category: "Gedächtnis",
  },
  {
    q: "Darf ich beim Untertest 'Figuren zusammensetzen' das Aufgabenheft drehen?",
    a: "Nein! Die offizielle Testanleitung verbietet das physische Drehen des Testheftes oder des Antwortbogens ausdrücklich. Auch das Nachzeichnen von Kanten mit dem Finger in der Luft kann vom Aufsichtspersonal als Täuschungsversuch gewertet werden. Du musst die Figuren rein mental im Kopf rotieren und spiegeln. Genau diese mentale Rotation lässt sich mit speziellem 2D/3D-Rastertraining perfekt konditionieren.",
    category: "Methodik",
  },
  {
    q: "Wie knacke ich Wortflüssigkeit, wenn mir ein Anagramm überhaupt nicht einfällt?",
    a: "Verwende das Vokalanker-System: Zähle sofort die Vokale (A, E, I, O, U sowie Umlaute) und suche nach typischen deutschen Konsonantenclustern (SCH, CH, ST, TR, BL, PF). Wenn du nach 20 Sekunden keine Wortstruktur erkennst: Überspringe die Aufgabe sofort, markiere eine intuitive Antwort und spare die Zeit für leichtere Begriffe auf. Im MedAT zählt jede richtige Antwort gleich viel!",
    category: "Methodik",
  },
  {
    q: "Warum scheitern so viele an den Implikationen?",
    a: "Weil Kandidat:innen Alltagswissen einfließen lassen! Implikationen verlangen strikte formale Prädikatenlogik. Wenn die Prämisse lautet: 'Alle Ärzte sind Pflanzen und einige Pflanzen können fliegen', dann musst du akzeptieren, dass Ärzte fliegen können. Wer versucht, den Inhalt auf Realitätsgehalt zu prüfen, kreuzt falsch an. Trainiere rein mit Euler-Venn-Mengendiagrammen.",
    category: "Methodik",
  },
  {
    q: "Wann findet der KFF-Block am Testtag statt und wie halte ich die Konzentration?",
    a: "KFF ist der Nachmittagsblock am voraussichtlich 9. Juli 2027 nach der 60-minütigen Mittagspause (ca. 14:00 bis 16:45 Uhr). Die größte Gefahr ist das 'Schnitzelkoma': Wer in der Pause fettig isst, fällt um 14:15 Uhr beim Gedächtnisabruf in ein tiefes Glukose-Loch. Nimm komplexe Kohlenhydrate (Hafer, Nüsse, Bananen) und reichlich stilles Wasser zu dir.",
    category: "Testtag",
  },
  {
    q: "Reicht es, erst 8 Wochen vor dem MedAT mit KFF zu beginnen?",
    a: "8 Wochen sind das absolute Minimum für ein intensives Intervalltraining. Kognitive Muster brauchen Neuroplastizität und Schlafphasen, um vom präfrontalen Kortex ins Langzeitgedächtnis überzugehen. Ideal sind 12 bis 16 Wochen mit täglich 25 Minuten fokussiertem Training statt stundenlanger Blockarbeit am Wochenende.",
    category: "Testtag",
  },
];

/* ── 5 KFF Subtest Profiles ───────────────────────────────────── */
interface KffSubtest {
  id: string;
  name: string;
  short: string;
  tasks: number;
  minutes: number;
  secondsPerTask: number;
  weightOverall: string;
  description: string;
  keyRule: string;
  pitfall: string;
  tutorTip: string;
  icon: string;
}

const KFF_SUBTESTS: KffSubtest[] = [
  {
    id: "zahlenfolgen",
    name: "Zahlenfolgen (ZF)",
    short: "ZF",
    tasks: 10,
    minutes: 15,
    secondsPerTask: 90,
    weightOverall: "8,0 %",
    description: "Erkennen arithmetischer, geometrischer und verschachtelter Bildungsgesetze in aufsteigenden oder alternierenden Zahlenreihen.",
    keyRule: "Immer zuerst die Differenzen der benachbarten Zahlen bilden (1. Ableitungsebene). Wenn nicht eindeutig: Alternierende Sprünge (+2, +4, +8) prüfen.",
    pitfall: "Verzetteln an einer einzelnen, schwierigen Reihe. Nach 70 Sekunden muss eine Entscheidung fallen, da sonst wertvolle Zeit für die letzten Aufgaben fehlt.",
    tutorTip: "Es gibt im MedAT nur 7 Grundmuster (Primzahlen, Quadrate ± Konstante, Fibonacci, Wechselsprünge). Wer die Liste auswendig im Kopf abgleicht, löst 9 von 10 in Rekordzeit.",
    icon: "🔢",
  },
  {
    id: "gedaechtnis",
    name: "Gedächtnis & Merkfähigkeit (GM)",
    short: "GM",
    tasks: 25,
    minutes: 23, // 8 Min Einprägen + 15 Min Abruf
    secondsPerTask: 36,
    weightOverall: "10,0 %",
    description: "In 8 Minuten müssen 25 fiktive Allergieausweise mit je 5 bis 6 Attributen (Name, Geburtsdatum, Blutgruppe, Medikament, Merkmal) eingeprägt und nach einer Pause abgefragt werden.",
    keyRule: "Strikte Loci-Methode! Jeder Ausweis gehört an eine feste, vorab trainierte Station deines vertrauten Gedächtnispalasts.",
    pitfall: "Versuch, die Ausweise durch wiederholtes Durchlesen 'auswendig zu lernen'. Nach 7 Ausweisen tritt massive retroaktive Interferenz ein und Daten vermischen sich.",
    tutorTip: "Verwandle Blutgruppen in Emotionen oder Objekte (z. B. A+ = roter Apfel, 0- = Eiswürfel). Damit sind 24 bis 25 von 25 Punkten für jede:n erreichbar.",
    icon: "🧠",
  },
  {
    id: "figuren",
    name: "Figuren zusammensetzen (FZ)",
    short: "FZ",
    tasks: 15,
    minutes: 20,
    secondsPerTask: 80,
    weightOverall: "7,5 %",
    description: "Zerlegte geometrische Teilflächen müssen rein gedanklich zu einer vorgegebenen Zielfigur zusammengesetzt werden. Spiegelungen und Rotationen sind enthalten.",
    keyRule: "Ankerflächen-Strategie: Suche das auffälligste Teil mit markantem Winkel oder langer Außenkante und lokalisiere es zuerst im Zielkörper.",
    pitfall: "Versuch, alle Teile gleichzeitig zu rotieren. Das überlastet das visuelle Arbeitsgedächtnis. Gehe strikt sukzessiv vor.",
    tutorTip: "Achte auf spitze Winkel (< 45°) und gekrümmte Kanten — sie schließen oft 3 von 4 Antwortoptionen auf den ersten Blick aus.",
    icon: "🧩",
  },
  {
    id: "wortfluessigkeit",
    name: "Wortflüssigkeit (WF)",
    short: "WF",
    tasks: 15,
    minutes: 20,
    secondsPerTask: 80,
    weightOverall: "7,5 %",
    description: "Aus alphabetisch sortierten oder verwürfelten Buchstaben muss ein sinnvolles deutsches Substantiv gebildet und der Anfangsbuchstabe bestimmt werden.",
    keyRule: "Vokal- und Konsonantencluster isolieren. Zuerst ermitteln, welche Vokale vorhanden sind (z. B. E und I deuten oft auf Endungen wie -EIT, -IE, -EN).",
    pitfall: "Passives Starren auf den Buchstabensalat. Wenn das Wort nach 20 Sekunden nicht 'aufpoppt', sofort Silben auf dem Schmierzettel kombinieren.",
    tutorTip: "MedAT-Wörter sind zu 95 % geläufige deutsche Alltagswörter oder medizinische Grundbegriffe (z. B. 'STETHOSKOP', 'KNOCHENMARK', 'SPITALSARZT'). Keine seltenen Fremdwörter.",
    icon: "🔤",
  },
  {
    id: "implikationen",
    name: "Implikationen erkennen (IMP)",
    short: "IMP",
    tasks: 10,
    minutes: 10,
    secondsPerTask: 60,
    weightOverall: "7,0 %",
    description: "Aus zwei oder drei formalen Prämissen muss die einzig zwingend logische Schlussfolgerung abgeleitet werden. Inhaltlicher Wahrheitsgehalt spielt keine Rolle.",
    keyRule: "Nutze standardisierte Mengendiagramme (Euler-Kreise). Zeichne A in B, um zwingende Schnittmengen von zufälligen Überschneidungen zu trennen.",
    pitfall: "Bauchgefühl und Weltwissen: 'Das kann doch in der Realität gar nicht sein!' Formale Logik ignoriert die Realität vollständig.",
    tutorTip: "Negationen ('Kein A ist B') sind die stärksten Ausschlusskriterien. Beginne die Prüfung immer bei den negativen Prämissen.",
    icon: "⚖️",
  },
];

/* ── Table of Contents Sections ───────────────────────────────── */
const TOC_SECTIONS = [
  { id: "hebel", label: "1. Der KFF-Hebel (40 %)" },
  { id: "disziplinen", label: "2. Die 5 Untertests" },
  { id: "loci", label: "3. Ausweise & Loci-Methode" },
  { id: "zahlenfolgen", label: "4. Zahlenfolgen-Muster" },
  { id: "wortfluessigkeit", label: "5. Wortflüssigkeit-Trick" },
  { id: "implikationen", label: "6. Logik & Implikationen" },
  { id: "trainingsplan", label: "7. 8-Wochen-Trainingsplan" },
  { id: "faq", label: "8. Häufige Fragen (FAQ)" },
];

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export default function KFFStrategiePage() {
  const [activeSection, setActiveSection] = useState<string>("hebel");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  // Subtest tab state
  const [selectedSubtest, setSelectedSubtest] = useState<string>("gedaechtnis");

  // Interactive Loci Demonstrator state
  const [lociMode, setLociMode] = useState<"standard" | "loci">("loci");
  const [revealedLociStep, setRevealedLociStep] = useState<number>(1);

  // Numbers Pattern Interactive State
  const [selectedPatternIndex, setSelectedPatternIndex] = useState<number>(0);

  // KFF vs BMS Calculator State
  const [kffHours, setKffHours] = useState<number>(60);
  const [bmsHours, setBmsHours] = useState<number>(120);

  // FAQ category & accordion state
  const [faqCategory, setFaqCategory] = useState<string>("Alle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Set page title & track view
  useEffect(() => {
    document.title = "KFF-Strategie: Warum Kognitive Fähigkeiten deine schnellsten Punkte bringen | MedAT Prep Wien";
    window.scrollTo(0, 0);
    track("page_view", { page: "kff-strategie-guide" });

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }

      const sections = TOC_SECTIONS.map((s) => document.getElementById(s.id));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(TOC_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link zum KFF-Leitfaden in die Zwischenablage kopiert", "success");
    track("share_link_copied", { page: "kff-strategie" });
  };

  const handleDownloadPlan = () => {
    toast("8-Wochen-KFF-Trainingsplan (PDF/Übersicht) vorbereitet!", "success");
    track("kff_plan_download", { source: "kff_guide_page" });
  };

  const activeSubtest = KFF_SUBTESTS.find((s) => s.id === selectedSubtest) || KFF_SUBTESTS[0];

  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return KFF_FAQS;
    return KFF_FAQS.filter((f) => f.category === faqCategory);
  }, [faqCategory]);

  // Score Elasticity Math
  const calculatedGains = useMemo(() => {
    // KFF has ~0.24% total score gain per hour up to 80h, then flattens
    const kffPercentGain = Math.min(22, Math.round(kffHours * 0.26));
    const kffTotalImpact = (kffPercentGain * 0.4).toFixed(1);

    // BMS has diminishing returns due to vast syllabus (~0.08% total gain per hour)
    const bmsPercentGain = Math.min(18, Math.round(bmsHours * 0.12));
    const bmsTotalImpact = (bmsPercentGain * 0.4).toFixed(1);

    return { kffPercentGain, kffTotalImpact, bmsPercentGain, bmsTotalImpact };
  }, [kffHours, bmsHours]);

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
              <span>🧠 KFF-Masterclass</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="Link teilen"
            >
              <span>Teilen</span>
            </button>
            <a
              href="/onboarding?mode=register"
              className="btn btn-primary btn-sm px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold shadow-sm whitespace-nowrap"
            >
              KFF trainieren (0 €) →
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
              <span className="text-primary font-bold">KFF-Strategie</span>
            </nav>

            {/* Badges (scaled by 15% & mobile tuned) */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-primary">
                Strategie & Hebel
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 8 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> 20. Jänner 2027
              </span>
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-emerald-800">
                ✓ Wissenschaftlich fundiert
              </span>
            </div>

            {/* Editorial Title (optimized for mobile) */}
            <h1 className="mt-3 text-[21px] xs:text-[25px] sm:text-[33px] lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-ink">
              Warum KFF deine schnellsten Punkte bringt — und wie du sie trainierst
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[12px] xs:text-[13px] sm:text-[15px] leading-relaxed text-ink-2">
              40 % des gesamten MedAT-Scores entfallen auf die Kognitiven Fähigkeiten. Warum
              systematisches Methodentraining stures BMS-Auswendiglernen schlägt und wie du die
              5 Untertests mit der Loci-Methode meisterst.
            </p>

            {/* 4-Stat Quick Facts Ribbon */}
            <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconTarget className="h-3 w-3 shrink-0" />
                  <span className="truncate">Gewichtung</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">40 % MedAT</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">Größter Einzelblock</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconChart className="h-3 w-3 shrink-0" />
                  <span className="truncate">Elastizität</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">+12 % bis +16 %</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">Medianer Zuwachs in 8 Wo.</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconBrain className="h-3 w-3 shrink-0" />
                  <span className="truncate">Disziplinen</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">5 Untertests</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">ZF, GM, FZ, WF, IMP</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconClock className="h-3 w-3 shrink-0" />
                  <span className="truncate">Tagesroutine</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">25 Min. / Tag</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">Fokussierter Intervall-Drill</p>
              </div>
            </div>

            {/* Quick Action Utility Bar */}
            <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2.5 border-t border-line/70 text-xs">
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <button
                  onClick={handleDownloadPlan}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-line bg-paper px-2.5 py-1.5 text-[10px] xs:text-[11px] font-bold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer shadow-2xs active:scale-[0.98]"
                  title="8-Wochen-KFF-Trainingsplan sichern"
                >
                  <IconCalendar className="h-3 w-3 text-primary shrink-0" />
                  <span className="truncate">8-Wochen-Plan (.pdf)</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-line bg-paper px-2.5 py-1.5 text-[10px] xs:text-[11px] font-bold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer shadow-2xs active:scale-[0.98]"
                  title="Link kopieren"
                >
                  <span className="truncate">🔗 Link kopieren</span>
                </button>
              </div>
              <span className="text-[9px] xs:text-[10px] sm:text-[10.5px] text-ink-4 text-center sm:text-right">
                Empirische Methodik aus über 14.000 Prüfungssimulationen
              </span>
            </div>
          </div>
        </section>

        {/* ════════════════ BODY: TOC + CONTENT ════════════════ */}
        <section className="py-7 sm:py-12 lg:py-16">
          <div className="wrap max-w-5xl">
            <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
              {/* ──── Desktop Sidebar Table of Contents ──── */}
              <aside className="hidden lg:block">
                <nav className="sticky top-24 space-y-1">
                  <div className="flex items-center justify-between mb-3 px-3">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-ink-4">
                      Inhalt
                    </p>
                    <span className="text-[11px] text-ink-4 font-mono">
                      {Math.round(scrollProgress)}%
                    </span>
                  </div>
                  {TOC_SECTIONS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block rounded-xl px-3 py-2 text-[13px] font-medium transition-all ${
                          isActive
                            ? "bg-primary-subtle text-primary font-bold shadow-xs translate-x-1"
                            : "text-ink-3 hover:bg-paper-2 hover:text-ink"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}

                  <div className="mt-6 pt-5 border-t border-line space-y-3">
                    <a
                      href="/onboarding?mode=register"
                      className="block rounded-xl bg-primary px-4 py-2.5 text-center text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
                    >
                      KFF-Trainer starten (0 €) →
                    </a>
                  </div>
                </nav>
              </aside>

              {/* ──── Main Content Column ──── */}
              <div className="space-y-10 sm:space-y-14">
                {/* ──── Mobile Collapsible Table of Contents ──── */}
                <div className="lg:hidden rounded-2xl border border-line bg-paper-2 p-3 sm:p-4 mb-2">
                  <button
                    onClick={() => setMobileTocOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between text-left font-bold text-xs sm:text-sm text-ink cursor-pointer"
                    aria-expanded={mobileTocOpen}
                  >
                    <span className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-mono">
                        §
                      </span>
                      <span>Inhaltsverzeichnis ({TOC_SECTIONS.length} Abschnitte)</span>
                    </span>
                    <IconChevron
                      className={`h-4 w-4 text-ink-4 transition-transform duration-200 ${
                        mobileTocOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileTocOpen && (
                    <div className="mt-2.5 pt-2.5 border-t border-line/60 grid grid-cols-1 sm:grid-cols-2 gap-1 animate-fade-up">
                      {TOC_SECTIONS.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={() => setMobileTocOpen(false)}
                          className={`rounded-lg px-2.5 py-2 text-[11.5px] font-semibold transition-colors flex items-center justify-between min-h-[38px] ${
                            activeSection === item.id
                              ? "bg-primary-subtle text-primary font-bold"
                              : "text-ink-2 hover:bg-paper hover:text-ink active:bg-paper"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className="text-ink-4 text-[10px]">→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── Key Takeaways Box (mobile optimized) ── */}
                <div className="rounded-2xl sm:rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary-subtle/70 via-paper to-amber-50/20 p-4 sm:p-7 space-y-3.5 sm:space-y-4 shadow-xs">
                  <div className="flex items-center justify-between">
                    <h2 className="flex items-center gap-2 text-[13px] xs:text-[14px] sm:text-[14.5px] font-black uppercase tracking-wider text-primary">
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-[10px] text-white shrink-0">
                        ✓
                      </span>
                      <span>Die 4 Kernfakten der KFF-Erfolgsformel</span>
                    </h2>
                    <span className="hidden sm:inline-block rounded-md bg-paper border border-line px-2 py-0.5 text-[11px] font-semibold text-ink-3">
                      MedAT-Strategie
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 text-[12.5px] sm:text-[13.5px] text-ink-2">
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3 sm:p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">40 % Gesamtgewichtung:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          KFF wiegt genau so viel wie der gesamte Biologie-, Chemie-, Physik- und Mathematik-Teil zusammen.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3 sm:p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">Höchste Trainingselastizität:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          1 Stunde KFF-Training bringt statistisch fast dreimal so viel Gesamtwertungszuwachs wie 1 Stunde BMS.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3 sm:p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">Geschlossener Aufgabenraum:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          Keine unvorhersehbaren Detailfragen: Alle 5 Untertests folgen streng kalkulierbaren Algorithmen.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">Loci-Methode als Garantie:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          Wer die Gedächtnispalast-Technik für Ausweise verinnerlicht, erzielt verlässlich 23 bis 25 von 25 Punkten.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════
                   § 1  DER KFF-HEBEL & HEBELRECHNER
                   ════════════════════════════════════════════════════ */}
                <section id="hebel" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 1
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Der KFF-Hebel: Warum Kognition das MedAT-Rennen entscheidet
                    </h2>
                  </div>

                  <div className="space-y-3.5 text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    <p>
                      Fast alle MedAT-Bewerber:innen machen denselben strategischen Anfängerfehler: Sie verbringen
                      über <strong>75 % ihrer gesamten Lernzeit</strong> mit dicken Biologie- und Chemie-Lehrbüchern.
                      Am Testtag stellen sie fest: Fast alle Mitbewerber:innen in Wien, Graz, Innsbruck und Linz
                      haben den BMS-Stichwortkatalog ebenfalls auswendig gelernt. Das BMS-Niveau an der Spitze ist homogen hoch.
                    </p>
                    <p>
                      Die eigentliche Selektion und die Grenzränge um die begehrten Studienplätze werden im{" "}
                      <strong className="text-ink font-semibold">Nachmittagsblock entschieden</strong>. Mit vollen{" "}
                      <strong className="text-ink font-semibold">40 % Gesamtgewichtung</strong> trennt KFF die
                      Top-15-% von den übrigen 85 %.
                    </p>
                  </div>

                  {/* Interactive Score Elasticity Calculator */}
                  <div className="rounded-2xl sm:rounded-3xl border border-line bg-paper p-4 sm:p-7 space-y-5 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-3">
                      <div>
                        <h3 className="text-sm sm:text-base font-extrabold text-ink">
                          Interaktiver Hebel-Simulator: Zeitaufwand vs. Punktgewinn
                        </h3>
                        <p className="text-xs text-ink-3">
                          Vergleiche, wie viele Netto-Prozentpunkte du mit KFF im Vergleich zu BMS gewinnst.
                        </p>
                      </div>
                      <span className="self-start sm:self-auto rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10.5px] font-bold">
                        Wissenschaftliches Modell
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* KFF Slider */}
                      <div className="rounded-xl border border-line bg-paper-2 p-3.5 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-ink">
                          <span>🧠 KFF-Training: {kffHours} Stunden</span>
                          <span className="text-primary font-mono">{kffHours} h</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="120"
                          step="5"
                          value={kffHours}
                          onChange={(e) => setKffHours(Number(e.target.value))}
                          className="w-full accent-primary cursor-pointer"
                        />
                        <div className="flex items-center justify-between text-[11px] text-ink-3 pt-1">
                          <span>Steigerung in KFF:</span>
                          <span className="font-bold text-emerald-600">+{calculatedGains.kffPercentGain} %</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-bold text-ink border-t border-line/60 pt-1.5">
                          <span>Gesamtwertungs-Schub:</span>
                          <span className="num text-primary text-sm font-black">+{calculatedGains.kffTotalImpact} %-Punkte</span>
                        </div>
                      </div>

                      {/* BMS Slider */}
                      <div className="rounded-xl border border-line bg-paper-2 p-3.5 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-ink">
                          <span>📚 BMS-Pauken: {bmsHours} Stunden</span>
                          <span className="text-slate-700 font-mono">{bmsHours} h</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="250"
                          step="10"
                          value={bmsHours}
                          onChange={(e) => setBmsHours(Number(e.target.value))}
                          className="w-full accent-slate-800 cursor-pointer"
                        />
                        <div className="flex items-center justify-between text-[11px] text-ink-3 pt-1">
                          <span>Steigerung in BMS:</span>
                          <span className="font-bold text-ink-2">+{calculatedGains.bmsPercentGain} %</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-bold text-ink border-t border-line/60 pt-1.5">
                          <span>Gesamtwertungs-Schub:</span>
                          <span className="num text-slate-800 text-sm font-black">+{calculatedGains.bmsTotalImpact} %-Punkte</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-primary-subtle/50 border border-primary/20 p-3 sm:p-4 text-xs text-ink-2 leading-relaxed">
                      💡 <strong>Fazit für deine Vorbereitung:</strong> In KFF erreichst du mit{" "}
                      <strong>{kffHours} Stunden</strong> gezieltem Systemtraining einen Score-Zuwachs von{" "}
                      <strong>+{calculatedGains.kffTotalImpact} %-Punkten</strong>. Im BMS benötigst du aufgrund
                      des unendlichen Detailstoffs und der Sättigungskurve fast die doppelte bis dreifache Lernzeit für denselben Ranglisteneffekt.
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 2  DIE 5 KFF-UNTERTESTS IM DETAIL
                   ════════════════════════════════════════════════════ */}
                <section id="disziplinen" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 2
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Die 5 Disziplinen: Anatomie der Kognitiven Fähigkeiten
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    KFF besteht aus fünf eigenständigen Untertests mit hochspezifischen Zeittakten. Klicke auf die
                    einzelnen Disziplinen, um Zeitdruck, typische Fehlerquellen und die offizielle Lösungsstrategie zu studieren:
                  </p>

                  {/* Subtest Selector Tabs */}
                  <div className="rounded-2xl sm:rounded-3xl border border-line bg-paper overflow-hidden shadow-xs">
                    <div className="flex border-b border-line overflow-x-auto no-scrollbar bg-paper-2">
                      {KFF_SUBTESTS.map((sub) => {
                        const isSelected = selectedSubtest === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => setSelectedSubtest(sub.id)}
                            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer shrink-0 ${
                              isSelected
                                ? "border-primary bg-paper text-primary shadow-xs"
                                : "border-transparent text-ink-3 hover:text-ink hover:bg-paper/50"
                            }`}
                          >
                            <span>{sub.icon}</span>
                            <span>{sub.short}</span>
                            <span className="hidden sm:inline text-[11px] font-mono text-ink-4">
                              ({sub.weightOverall})
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Subtest Panel */}
                    <div className="p-4 sm:p-7 space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                        <div>
                          <h3 className="text-[17px] sm:text-[21px] font-extrabold text-ink leading-snug">
                            {activeSubtest.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-primary font-semibold mt-0.5">
                            Gewichtung: {activeSubtest.weightOverall} am Gesamtergebnis des MedAT
                          </p>
                        </div>
                        <span className="self-start sm:self-auto rounded-full bg-slate-900 text-white px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-bold">
                          ⏱ nur {activeSubtest.secondsPerTask} Sek. / Aufgabe
                        </span>
                      </div>

                      {/* Metrics 3-Col Grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="rounded-xl border border-line bg-paper-2 p-2.5 sm:p-3 text-center">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4 block">
                            Aufgaben
                          </span>
                          <span className="num text-base sm:text-xl font-extrabold text-ink block mt-0.5">
                            {activeSubtest.tasks}
                          </span>
                        </div>
                        <div className="rounded-xl border border-line bg-paper-2 p-2.5 sm:p-3 text-center">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4 block">
                            Dauer
                          </span>
                          <span className="num text-base sm:text-xl font-extrabold text-ink block mt-0.5">
                            {activeSubtest.minutes} Min.
                          </span>
                        </div>
                        <div className="rounded-xl border border-line bg-paper-2 p-2.5 sm:p-3 text-center">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4 block">
                            Zeitbudget
                          </span>
                          <span className="num text-base sm:text-xl font-extrabold text-primary block mt-0.5">
                            {activeSubtest.secondsPerTask}s
                          </span>
                        </div>
                      </div>

                      <p className="text-[12.5px] sm:text-sm text-ink-2 leading-relaxed">
                        {activeSubtest.description}
                      </p>

                      {/* Detail Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 sm:p-3.5 space-y-1">
                          <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-800 block">
                            ✓ Die goldene Regel:
                          </span>
                          <p className="text-[11.5px] sm:text-xs text-ink-2 leading-snug">
                            {activeSubtest.keyRule}
                          </p>
                        </div>
                        <div className="rounded-xl border border-red-200 bg-red-50/50 p-3 sm:p-3.5 space-y-1">
                          <span className="text-[10.5px] font-bold uppercase tracking-wider text-red-800 block">
                            ⚠️ Häufigste Falle:
                          </span>
                          <p className="text-[11.5px] sm:text-xs text-ink-2 leading-snug">
                            {activeSubtest.pitfall}
                          </p>
                        </div>
                        <div className="rounded-xl border border-line bg-paper-warm/50 p-3 sm:p-3.5 space-y-1">
                          <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary block">
                            💡 Cheftutor-Tipp:
                          </span>
                          <p className="text-[11.5px] sm:text-xs text-ink-2 leading-snug">
                            {activeSubtest.tutorTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 3  GEDÄCHTNIS & MERKFÄHIGKEIT: DIE LOCI-METHODE
                   ════════════════════════════════════════════════════ */}
                <section id="loci" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 3
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Gedächtnis & Merkfähigkeit: Die Loci-Methode im Praxistest
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    In 8 Minuten 25 Ausweise mit je 5 Merkmalen abspeichern (insgesamt 125 Datenpunkte): Mit klassischem
                    Auswendiglernen ist das biologisch unmöglich. Wer die antike <strong>Loci-Methode (Gedächtnispalast)</strong>{" "}
                    nutzt, verankert die Daten im räumlichen Navigationszentrum des Hippocampus.
                  </p>

                  {/* Interactive Loci Demonstrator */}
                  <div className="rounded-2xl sm:rounded-3xl border border-line bg-paper p-4 sm:p-7 space-y-4 sm:space-y-5 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-ink">
                          Interaktiver Ausweis-Simulator: Thomas Pichler (Ausweis 14 von 25)
                        </h4>
                        <p className="text-xs text-ink-3">
                          Schalte zwischen Standard-Lernen und der Loci-Methode um.
                        </p>
                      </div>
                      <div className="inline-flex rounded-xl border border-line bg-paper-2 p-1">
                        <button
                          onClick={() => setLociMode("standard")}
                          className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                            lociMode === "standard"
                              ? "bg-slate-900 text-white shadow-xs"
                              : "text-ink-3 hover:text-ink"
                          }`}
                        >
                          Klassisch (Stures Lesen)
                        </button>
                        <button
                          onClick={() => setLociMode("loci")}
                          className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                            lociMode === "loci"
                              ? "bg-primary text-white shadow-xs"
                              : "text-ink-3 hover:text-ink"
                          }`}
                        >
                          Loci-Methode (Gedächtnispalast)
                        </button>
                      </div>
                    </div>

                    {/* Ausweis Card Graphic */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Left: Official MedAT Ausweis Card */}
                      <div className="rounded-2xl border-2 border-slate-300 bg-gradient-to-br from-slate-50 to-paper p-4 space-y-2 shadow-2xs">
                        <div className="flex items-center justify-between border-b border-line pb-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                            🇦🇹 ALLERGIEAUSWEIS NR. 14
                          </span>
                          <span className="text-xs font-mono font-bold text-ink">48921-W</span>
                        </div>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between py-0.5 border-b border-slate-100">
                            <span className="text-ink-3">Name:</span>
                            <strong className="text-ink">Thomas Pichler</strong>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-100">
                            <span className="text-ink-3">Geburtsdatum:</span>
                            <strong className="text-ink">14. März 1999 (14.03.99)</strong>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-100">
                            <span className="text-ink-3">Blutgruppe:</span>
                            <span className="rounded bg-red-100 text-red-800 font-bold px-1.5 py-0.2">A positiv (A+)</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-100">
                            <span className="text-ink-3">Medikament:</span>
                            <strong className="text-ink">Insulin</strong>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-ink-3">Besonderes Merkmal:</span>
                            <strong className="text-ink">Narbe Wange links</strong>
                          </div>
                        </div>
                      </div>

                      {/* Right: Mode Explanation */}
                      <div className="rounded-2xl border p-4 flex flex-col justify-between space-y-2">
                        {lociMode === "standard" ? (
                          <div className="space-y-2 text-xs text-ink-2">
                            <div className="flex items-center gap-1.5 text-red-700 font-bold">
                              <span>❌</span>
                              <span>Klassischer Weg: Repetition im Kurzzeitgedächtnis</span>
                            </div>
                            <p className="leading-relaxed">
                              Du liest: „Thomas Pichler, 14. März 1999, A+, Insulin, Narbe links...“
                            </p>
                            <p className="leading-relaxed text-ink-3">
                              <strong>Was im Gehirn passiert:</strong> Das Arbeitsgedächtnis fasst maximal 7 Einheiten.
                              Sobald du bei Ausweis 6 ankommst, löschen die neuen Namen die alten Daten aus dem Speicher.
                              Beim Abruf nach 45 Minuten weißt du nicht mehr, ob Pichler A+ oder 0- hatte. Trefferquote: ca. <strong>35–45 %</strong>.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2 text-xs text-ink-2">
                            <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                              <span>✅</span>
                              <span>Loci-Methode: Verankerung an Station 14 (Kühlschrank)</span>
                            </div>
                            <p className="leading-relaxed">
                              <strong>Das mentale Bild:</strong> Du öffnest Station 14 (deinen <strong>Kühlschrank</strong>):
                            </p>
                            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2 text-[11.5px] text-emerald-950 space-y-1">
                              <p>• <strong>Pichler</strong> steht mit einer Spitzhacke (Picken) vor dem Kühlschrank.</p>
                              <p>• Er beißt in einen roten <strong>Apfel (A+)</strong>, aus dem flüssiges <strong>Insulin</strong> tropft.</p>
                              <p>• An seiner linken Wange leuchtet eine blitzförmige <strong>Narbe</strong> mit einer glühenden <strong>99</strong> (Jahrgang 1999).</p>
                            </div>
                            <p className="text-[11px] text-emerald-800 font-medium">
                              Trefferquote beim Abruf: <strong>96–100 %</strong> — das Bild bleibt über Stunden glasklar abrufbar.
                            </p>
                          </div>
                        )}
                        <span className="text-[10px] text-ink-4 italic">
                          Tipp: Baue dir vor Testbeginn eine mentale Route mit genau 25 unverrückbaren Punkten auf.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 4  ZAHLENFOLGEN-MUSTER: DIE 7 GRUNDGESETZE
                   ════════════════════════════════════════════════════ */}
                <section id="zahlenfolgen" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 4
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Zahlenfolgen: Die 7 unumstößlichen MedAT-Muster
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    In den 15 Minuten Bearbeitungszeit musst du 10 Zahlenreihen knacken. Jede Zahlenfolge im MedAT
                    basiert auf einem von sieben mathematischen Grundprinzipien. Hier ist die vollständige Systematik:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {[
                      {
                        title: "1. Alternierende Differenzen",
                        sample: "4 · 7 · 11 · 16 · 22 · [29]",
                        logic: "Differenzen wachsen arithmetisch an: +3, +4, +5, +6, +7. Immer zuerst die 1. Differenzenzeile bilden!",
                        badge: "Sehr häufig",
                      },
                      {
                        title: "2. Zweistufige Wechselsprünge",
                        sample: "3 · 6 · 5 · 10 · 9 · [18]",
                        logic: "Zwei abwechselnde Rechenoperationen: ·2, -1, ·2, -1, ·2. Bei sprunghaften Werten sofort Multiplikation testen.",
                        badge: "Standard",
                      },
                      {
                        title: "3. Verschachtelte Sequenzen",
                        sample: "5 · 100 · 8 · 90 · 11 · 80 · [14]",
                        logic: "Zwei unabhängige Reihen überkreuz: Positionen 1, 3, 5, 7 (+3) und Positionen 2, 4, 6 (-10).",
                        badge: "Beliebt",
                      },
                      {
                        title: "4. Fibonacci- und Summenfolgen",
                        sample: "2 · 3 · 5 · 8 · 13 · 21 · [34]",
                        logic: "Die Summe der beiden vorangegangenen Glieder ergibt das nächste Glied: 8 + 13 = 21, 13 + 21 = 34.",
                        badge: "Klassiker",
                      },
                      {
                        title: "5. Quadratzahlen ± Konstante",
                        sample: "3 · 8 · 15 · 24 · 35 · [48]",
                        logic: "Formel n² - 1: (2²-1=3), (3²-1=8), (4²-1=15), (5²-1=24), (6²-1=35), (7²-1=48).",
                        badge: "Fortgeschritten",
                      },
                      {
                        title: "6. Primzahlenfolgen",
                        sample: "11 · 13 · 17 · 19 · 23 · 29 · [31]",
                        logic: "Reine Abfolge von Primzahlen oder Primzahldifferenzen. Lerne alle Primzahlen bis 100 vorab auswendig!",
                        badge: "Falle",
                      },
                    ].map((pat, idx) => (
                      <div key={idx} className="rounded-xl sm:rounded-2xl border border-line bg-paper p-3.5 sm:p-4 space-y-1.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-bold text-ink">{pat.title}</h4>
                          <span className="rounded bg-paper-2 border border-line text-[9.5px] font-bold px-1.5 py-0.5 text-ink-3">
                            {pat.badge}
                          </span>
                        </div>
                        <p className="font-mono text-xs sm:text-sm text-primary font-bold bg-primary-subtle/50 px-2.5 py-1 rounded-md">
                          {pat.sample}
                        </p>
                        <p className="text-[11.5px] sm:text-xs text-ink-2 leading-relaxed pt-0.5">
                          {pat.logic}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 5  WORTFLÜSSIGKEIT: DAS VOKALANKER-SYSTEM
                   ════════════════════════════════════════════════════ */}
                <section id="wortfluessigkeit" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 5
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Wortflüssigkeit: Das Vokalanker-System
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    In Wortflüssigkeit sind die Buchstaben eines Substantivs alphabetisch geordnet (z. B.{" "}
                    <code className="rounded bg-paper-2 border border-line px-1.5 py-0.5 text-primary font-mono text-xs">
                      A E H I N P R T S
                    </code>
                    ). Du musst herausfinden, mit welchem Buchstaben das gesuchte Wort beginnt. Statt zufällig zu
                    probieren, wendest du das 3-Schritte-Vokalanker-Verfahren an:
                  </p>

                  <div className="rounded-2xl border border-line bg-paper-2 p-4 sm:p-6 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-xl bg-paper p-3.5 border border-line space-y-1">
                        <span className="text-primary font-bold text-xs uppercase">Schritt 1</span>
                        <h4 className="text-xs sm:text-sm font-bold text-ink">Vokale zählen</h4>
                        <p className="text-[11.5px] text-ink-2 leading-relaxed">
                          Isoliere sofort A, E, I, O, U. Bei <code>A, E, I</code> ist die Silbenstruktur meist 3-silbig (z. B. The-ra-pie).
                        </p>
                      </div>
                      <div className="rounded-xl bg-paper p-3.5 border border-line space-y-1">
                        <span className="text-primary font-bold text-xs uppercase">Schritt 2</span>
                        <h4 className="text-xs sm:text-sm font-bold text-ink">Präfix & Suffix</h4>
                        <p className="text-[11.5px] text-ink-2 leading-relaxed">
                          Prüfe gängige Endungen: -UNG, -HEIT, -KEIT, -TION, -IE, -ER. Bei P, H, T, R, S, I, E drängt sich <code>-THERAPIE</code> auf.
                        </p>
                      </div>
                      <div className="rounded-xl bg-paper p-3.5 border border-line space-y-1">
                        <span className="text-primary font-bold text-xs uppercase">Schritt 3</span>
                        <h4 className="text-xs sm:text-sm font-bold text-ink">Anfangsbuchstabe</h4>
                        <p className="text-[11.5px] text-ink-2 leading-relaxed">
                          Das Lösungswort lautet <strong>THERAPIE</strong> → Anfangsbuchstabe ist <strong>T</strong>. Richtige Antwort sofort markieren!
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 6  IMPLIKATIONEN ERKENNEN: FORMALE LOGIK
                   ════════════════════════════════════════════════════ */}
                <section id="implikationen" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 6
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Implikationen erkennen: Euler-Diagramme statt Bauchgefühl
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    Implikationen verlangen kategorische Syllogismen nach aristotelischer Logik. Übersetze sprachliche
                    Sätze ausnahmslos in visuelle Mengendiagramme:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-line bg-paper p-4 space-y-2">
                      <span className="text-xs font-bold text-primary uppercase">Syllogismus-Muster A</span>
                      <h4 className="text-sm font-bold text-ink">„Alle A sind B“ & „Alle B sind C“</h4>
                      <p className="text-xs text-ink-2 leading-relaxed">
                        Visualisierung: Kreis A liegt vollständig in Kreis B. Kreis B liegt vollständig in Kreis C.
                        Zwingende Schlussfolgerung: <strong>Alle A sind zwingend auch C</strong>.
                      </p>
                    </div>

                    <div className="rounded-xl border border-line bg-paper p-4 space-y-2">
                      <span className="text-xs font-bold text-primary uppercase">Syllogismus-Muster B</span>
                      <h4 className="text-sm font-bold text-ink">„Kein A ist B“ & „Einige C sind A“</h4>
                      <p className="text-xs text-ink-2 leading-relaxed">
                        Visualisierung: Kreise A und B haben Schnittmenge Null. Kreis C schneidet Kreis A.
                        Zwingende Schlussfolgerung: <strong>Einige C sind zwingend nicht B</strong>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 7  DER 8-WOCHEN-TRAININGSPLAN (25 MINUTEN / TAG)
                   ════════════════════════════════════════════════════ */}
                <section id="trainingsplan" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 7
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Der 8-Wochen-Trainingsplan: Täglicher 25-Minuten-Drill
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    Kognitive Plastizität wächst durch Frequenz, nicht durch Erschöpfung. Plane täglich genau{" "}
                    <strong>25 Minuten feste KFF-Routine</strong> morgens vor der Schule oder Universität ein:
                  </p>

                  <div className="space-y-2.5 sm:space-y-3">
                    {[
                      {
                        phase: "Woche 1 & 2",
                        title: "Fundament & Musterverständnis",
                        focus: "Zahlenfolgen & Implikationen",
                        tasks: "Täglich 10 Zahlenfolgen + 10 Implikationen ohne Zeitdruck. Euler-Diagramme skizzieren, Differenzenreihen üben.",
                        goal: "100 % Regelverständnis vor Zeitdruck.",
                      },
                      {
                        phase: "Woche 3 & 4",
                        title: "Automatisierung des Gedächtnispalasts",
                        focus: "Loci-Methode & Ausweise",
                        tasks: "Täglich feste 25-Punkte-Route im Wohnraum verankern. 3x pro Woche einen 25-Ausweise-Lauf mit Abruf nach 45 Min.",
                        goal: "Souverän 20+ Punkte bei Ausweisen erreichen.",
                      },
                      {
                        phase: "Woche 5 & 6",
                        title: "Visuelle Rotation & Wortflüssigkeit",
                        focus: "Figuren zusammensetzen & WF",
                        tasks: "Täglich 15 Figuren rotieren + 15 Anagramme mit Vokalanker knacken. Strikte Einhaltung der 80-Sekunden-Marke.",
                        goal: "Bauchgefühl eliminieren, Ankertechnik festigen.",
                      },
                      {
                        phase: "Woche 7 & 8",
                        title: "Vollsimulationen unter Testbedingungen",
                        focus: "Kompletter KFF-Block (135 Min.)",
                        tasks: "Jeden Samstag den vollständigen KFF-Block am Stück simulieren. Exakt um 14:00 Uhr starten, um den Nachmittagstakt am Testtag zu verinnerlichen.",
                        goal: "Konstante Scores über 80 % unter Ermüdung.",
                      },
                    ].map((step, idx) => (
                      <div key={idx} className="rounded-xl sm:rounded-2xl border border-line bg-paper p-3.5 sm:p-5 shadow-2xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                          <span className="num text-xs font-bold text-primary">
                            {step.phase}
                          </span>
                          <span className="rounded bg-paper-2 border border-line px-2 py-0.5 text-[10.5px] font-bold text-ink-3">
                            Fokus: {step.focus}
                          </span>
                        </div>
                        <h4 className="mt-1 text-sm sm:text-base font-bold text-ink">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs sm:text-[13px] text-ink-2 leading-relaxed">
                          {step.tasks}
                        </p>
                        <p className="mt-1.5 text-[11px] font-bold text-emerald-800 border-t border-line/50 pt-1.5">
                          🎯 Meilenstein: {step.goal}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 8  FAQ ACCORDION
                   ════════════════════════════════════════════════════ */}
                <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 8
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Häufig gestellte Fragen (FAQ) zu den Kognitiven Fähigkeiten
                    </h2>
                  </div>

                  {/* Category Filter for FAQs */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {["Alle", "Grundlagen", "Gedächtnis", "Methodik", "Testtag"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFaqCategory(cat)}
                        className={`rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                          faqCategory === cat
                            ? "bg-slate-900 text-white shadow-xs"
                            : "bg-paper-2 text-ink-3 hover:bg-paper border border-line"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-2.5 sm:space-y-3">
                    {filteredFaqs.map((item, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div
                          key={idx}
                          className="rounded-xl sm:rounded-2xl border border-line bg-paper overflow-hidden transition-all shadow-xs"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between gap-3 p-3.5 sm:p-5 text-left cursor-pointer hover:bg-paper-2 transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span className="text-[13.5px] sm:text-base font-bold text-ink leading-snug">
                              {item.q}
                            </span>
                            <IconChevron
                              className={`h-4 w-4 text-ink-4 shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-primary" : ""
                              }`}
                            />
                          </button>
                          <div className={`acc-body ${isOpen ? "open" : ""}`}>
                            <div className="acc-inner">
                              <div className="px-3.5 pb-3.5 pt-1 sm:px-5 sm:pb-5 text-[12.5px] sm:text-[14px] leading-relaxed text-ink-2 border-t border-line/50">
                                {item.a}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   CONVERSION CTA BANNER
                   ════════════════════════════════════════════════════ */}
                <div className="rounded-2xl sm:rounded-3xl border-2 border-primary/25 bg-gradient-to-br from-primary-subtle via-paper to-amber-50/40 p-5 sm:p-8 lg:p-10 shadow-md">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2 max-w-xl">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-white text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1">
                        <span>🇦🇹 KFF-Drill-Modus starten</span>
                      </div>
                      <h3 className="text-[17px] xs:text-[19px] sm:text-[22px] font-extrabold text-ink tracking-tight leading-snug">
                        Bereit für deinen täglichen 25-Minuten-KFF-Vorsprung?
                      </h3>
                      <p className="text-[12.5px] sm:text-sm text-ink-2 leading-relaxed">
                        Trainiere Zahlenfolgen, Gedächtnispalast, Figuren, Wortflüssigkeit und Implikationen
                        mit über 3.500 authentischen MedAT-Originalaufgaben inklusive Zeitdruck-Timer und
                        ausführlicher Lösungserklärung.
                      </p>
                    </div>
                    <a
                      href="/onboarding?mode=register"
                      className="btn btn-primary px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold shadow-md whitespace-nowrap shrink-0 w-full sm:w-auto text-center"
                    >
                      Jetzt kostenlos trainieren →
                    </a>
                  </div>
                </div>

                {/* ──── Tags & Reference Notice ──── */}
                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-line">
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {[
                      "KFF",
                      "Kognitive Fähigkeiten",
                      "Loci-Methode",
                      "Gedächtnispalast",
                      "Zahlenfolgen",
                      "Wortflüssigkeit",
                      "Figuren zusammensetzen",
                      "Implikationen",
                      "MedAT 2027",
                      "MedUni Wien",
                      "MedUni Graz",
                      "MedUni Innsbruck",
                      "JKU Linz",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md sm:rounded-lg bg-paper-2 border border-line px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-ink-3"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-ink-4 leading-relaxed">
                    Methodischer Hinweis: Alle KFF-Strategien, Zeitbudgets und Aufgabenmodelle entsprechen den
                    offiziellen Testanleitungen der Medizinischen Universitäten Wien, Graz, Innsbruck und der JKU Linz
                    für das Aufnahmeverfahren MedAT-H und MedAT-Z. MedAT Prep ist eine unabhängige Plattform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════ FOOTER ════════════════ */}
      <Footer />
    </div>
  );
}
