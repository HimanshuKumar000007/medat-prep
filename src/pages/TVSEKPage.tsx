/**
 * src/pages/TVSEKPage.tsx
 *
 * Ultra-Premium, Standalone Editorial Guide:
 * "Textverständnis & SEK: Die unterschätzten 20 % für deinen Studienplatz"
 * Subtitle: "So nutzt du die Scanning-Methode und das Konsistenz-Prinzip im sozialen Entscheiden."
 *
 * Built with Austrian Clinical Precision:
 * - Dynamic scroll progress indicator
 * - Austrian tricolor bar
 * - Scaled down typography by 15% (H1 max 40px, subtitle 13-15px, section titles 18-22px, badges 9px)
 * - NO dark countdown block and NO author card block (per user requests)
 * - Hero 4-Stat Ribbon bridging the gap:
 *     1. 20 % Gesamtergebnis (Jeweils 10 % Textverständnis & 10 % SEK)
 *     2. 12 TV-Fragen in 35 Min. (~175 Sekunden pro Textblock)
 *     3. 2 SEK-Disziplinen (Soziales Entscheiden & Emotionen regulieren)
 *     4. Kohlberg-Prinzip (Postkonventionelle Ethik & Konsistenz)
 * - Quick Action Utility Toolbar (Scanning-Cheat-Sheet exportieren, SEK-Matrix kopieren, Link teilen)
 * - Mobile-optimized collapsible Table of Contents accordion & Desktop sticky sidebar
 * - Interactive TV Scanning vs. Romanlesen Simulator (Signalwörter & Textbeweise)
 * - Interactive SEK-Dilemma-Simulator (Kohlberg-Stufen-Decoder für moralische Rechtfertigungen)
 * - Emotionen regulieren (ER) Strategie-Explorer (Reappraisal vs. Suppression)
 * - Der 4-Stufen TV-Distraktor-Detektor (Verallgemeinerung, Vorwissen, Kausalität, Teilwahrheit)
 * - Pacing-Matrix & Zeitmanagement für den Vormittag/Nachmittag
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
  IconTextLines,
  IconHeart,
  IconRefresh,
} from "../lib/icons";
import { toast, track } from "../lib/core";

/* ── FAQ Data ─────────────────────────────────────────────────── */
interface TvSekFaqItem {
  q: string;
  a: string;
  category: "Textverständnis" | "SEK" | "Moralstufen" | "Testtag-Taktik";
}

const TV_SEK_FAQS: TvSekFaqItem[] = [
  {
    q: "Wird Textverständnis auch im MedAT-Z (Zahnmedizin) geprüft?",
    a: "Nein! Textverständnis (TV) ist ausschließlich Teil des MedAT-H (Humanmedizin, 10 % der Gesamtwertung). Im MedAT-Z wird dieser Block durch den Untertest 'Manuelle Fertigkeiten' (Draht biegen und Formen spiegeln) ersetzt, der dort 30 % des Gesamtscores ausmacht. Die Sozial-emotionalen Kompetenzen (SEK) mit 10 % werden hingegen in beiden Testversionen geprüft.",
    category: "Textverständnis",
  },
  {
    q: "Darf ich mein eigenes medizinisches Vorwissen im Textverständnis nutzen?",
    a: "Auf gar keinen Fall! Dies ist die häufigste und gefährlichste Falle im gesamten MedAT. Die Aufgabenstellung verlangt strikt: 'Beurteilen Sie die Aussagen ausschließlich anhand der im Text gegebenen Informationen.' Häufig baut die Prüfungskommission Antwortoptionen ein, die medizinisch absolut korrekt sind, aber im vorliegenden Text schlicht nicht erwähnt werden. Kreuzt du eine solche Option an, erhältst du 0 Punkte.",
    category: "Textverständnis",
  },
  {
    q: "Wie funktioniert die Punktevergabe beim Untertest 'Soziales Entscheiden'?",
    a: "Im Sozialen Entscheiden liest du ein Fallbeispiel mit einem moralischen Dilemma. Anschließend musst du fünf verschiedene Handlungsbegründungen danach bewerten, wie angemessen sie sind (von 1 = völlig unbedeutend bis 6 = von entscheidender Bedeutung). Gewertet wird deine Übereinstimmung mit einem Expertenpanel aus Medizinethiker:innen und Psycholog:innen. Wer konsistent auf postkonventioneller Ebene (Kohlberg Stufe 5 & 6) argumentiert, erzielt Maximalpunkte.",
    category: "SEK",
  },
  {
    q: "Was besagt das Stufenmodell von Lawrence Kohlberg im MedAT-Kontext?",
    a: "Kohlberg unterscheidet drei Hauptebenen der Moralentwicklung: 1. Präkonventionell (Handeln aus Angst vor Strafe oder egoistischem Nutzen). 2. Konventionell (Handeln, um gesellschaftlichen Normen, Gesetzen oder Erwartungen Dritter zu entsprechen). 3. Postkonventionell (Handeln nach universellen ethischen Prinzipien wie Menschenwürde, Gerechtigkeit und Patientenautonomie). Der MedAT honoriert systematisch postkonventionelle Begründungen.",
    category: "Moralstufen",
  },
  {
    q: "Wie läuft der Untertest 'Emotionen regulieren' genau ab?",
    a: "Dir wird eine emotionale Ausgangssituation geschildert (z. B. extreme Frustration, Wut, Trauer oder Angst im klinischen oder privaten Alltag) mit einem vorgegebenen Ziel (z. B. 'Ziel: Gelassenheit bewahren'). Du musst vier verschiedene mentale Strategien bewerten, wie effektiv sie das vorgegebene Ziel erreichen. Strategien der kognitiven Neubewertung (Reappraisal) schneiden nach wissenschaftlicher Emotionsforschung fast immer am besten ab.",
    category: "SEK",
  },
  {
    q: "Reicht es aus, den Text im TV-Teil nur zu überfliegen?",
    a: "Nicht 'nur' überfliegen, sondern strukturiert scannen! Die erfolgreichste Methode ist das Signalwort-Scanning: Lies zuerst die Frage und die Antwortoptionen, markiere Schlüsselbegriffe (z. B. Zahlen, Fachbegriffe, Eigennamen) und springe dann gezielt in den Textabsatz, in dem diese Signalwörter auftauchen. Dadurch sparst du bis zu 10 Minuten Lesezeit.",
    category: "Textverständnis",
  },
  {
    q: "Wann finden TV und SEK am Testtag statt?",
    a: "Textverständnis findet im Vormittagsblock unmittelbar nach dem BMS-Teil statt (ca. 09:55 – 10:30 Uhr, 35 Minuten). Die Sozial-emotionalen Kompetenzen (SEK) bilden den allerletzten Block des Testtages am späten Nachmittag (ca. 16:15 – 16:45 Uhr). Genau hier entscheidet mentale Ausdauer: Wer nach 7 Stunden Test noch fokussiert moralische Dilemmata differenzieren kann, holt den entscheidenden Grenzrang-Vorteil.",
    category: "Testtag-Taktik",
  },
  {
    q: "Kann man Empathie und soziales Verhalten überhaupt trainieren?",
    a: "Man kann Empathie nicht 'vorspielen', aber man kann die testpsychologische Struktur von Bewertungsrastern exzellent trainieren. Wer lernt, typische Fallen (z. B. Opportunismus, Autoritätshörigkeit, bloße Gesetzesbefolgung ohne ethische Reflexion) zu identifizieren, vermeidet Minuspunkte und stimmt sein Antwortverhalten konsistent mit den Kriterien der Prüfungskommission ab.",
    category: "SEK",
  },
];

/* ── Kohlberg Moral Dilemma Simulator Data ─────────────────────── */
interface DilemmaOption {
  id: string;
  statement: string;
  kohlbergLevel: "präkonventionell" | "konventionell" | "postkonventionell";
  levelName: string;
  pointsRating: "Ideal (Maximalpunkte)" | "Mittelmäßig" | "Fehlerhaft (0 Pkt.)";
  explanation: string;
}

const DILEMMA_SCENARIO = {
  title: "Fallbeispiel: Das Triage- und Schweigepflicht-Dilemma",
  context:
    "Dr. Weber behandelt in der Notaufnahme eine schwer verletzte Patientin nach einem Autounfall. Die Patientin bittet den Arzt flehentlich, ihrer Familie nicht zu erzählen, dass sie unter Alkoholeinfluss stand, da sie um das Sorgerecht für ihr Kind fürchtet. Wenig später erscheint die Polizei und verlangt Auskunft zum Unfallhergang.",
  question: "Wie sollte Dr. Weber die Verweigerung der Aussage begründen?",
};

const DILEMMA_OPTIONS: DilemmaOption[] = [
  {
    id: "opt-1",
    statement:
      "Er sollte schweigen, weil ihm andernfalls disziplinarische Konsequenzen und eine Geldstrafe der Ärztekammer drohen.",
    kohlbergLevel: "präkonventionell",
    levelName: "Stufe 1 (Gehorsam & Strafvermeidung)",
    pointsRating: "Fehlerhaft (0 Pkt.)",
    explanation:
      "Reine Strafvermeidung ist die unterste moralische Stufe. Die Begründung basiert auf Egoismus statt ethischer Einsicht in das Arzt-Patienten-Verhältnis.",
  },
  {
    id: "opt-2",
    statement:
      "Er sollte schweigen, weil Kolleginnen und Kollegen im Spital von einem verlässlichen Arzt erwarten, dass er den Ruf der Abteilung schützt.",
    kohlbergLevel: "konventionell",
    levelName: "Stufe 3 (Good Boy / Konformität)",
    pointsRating: "Mittelmäßig",
    explanation:
      "Orientierung an sozialer Anerkennung und Gruppenkonformität. Zeigt mangelnde autonome moralische Urteilskraft.",
  },
  {
    id: "opt-3",
    statement:
      "Er sollte schweigen, weil das österreichische Ärztegesetz § 54 die ärztliche Schweigepflicht ausdrücklich vorschreibt und Gesetze ausnahmslos befolgt werden müssen.",
    kohlbergLevel: "konventionell",
    levelName: "Stufe 4 (Gesetz & soziale Ordnung)",
    pointsRating: "Mittelmäßig",
    explanation:
      "Reines Beharren auf Gesetzesbuchstaben ohne Abwägung kollidierender Rechtsgüter (z. B. drohende Fremdgefährdung vs. Schweigepflicht).",
  },
  {
    id: "opt-4",
    statement:
      "Er sollte schweigen, weil das Vertrauensverhältnis zwischen Arzt und Patient ein fundamentales Grundrecht ist, ohne das Kranke aus Angst vor Strafverfolgung keine lebensnotwendige medizinische Hilfe mehr suchen würden.",
    kohlbergLevel: "postkonventionell",
    levelName: "Stufe 5 (Sozialvertrag & Patientenautonomie)",
    pointsRating: "Ideal (Maximalpunkte)",
    explanation:
      "Exzellente postkonventionelle Begründung: Schützt die institutionelle Schutzfunktion der Medizin und das Wohl aller zukünftigen Patient:innen.",
  },
  {
    id: "opt-5",
    statement:
      "Er sollte die Information weitergeben, damit die Versicherung den Schaden rasch bezahlt und das Spital keine finanziellen Einbußen erleidet.",
    kohlbergLevel: "präkonventionell",
    levelName: "Stufe 2 (Instrumentell-relativistisch)",
    pointsRating: "Fehlerhaft (0 Pkt.)",
    explanation:
      "Reine Kosten-Nutzen-Rechnung auf Kosten der verletzlichen Patientin. Im MedAT führt diese Antwort zu massivem Punktabzug.",
  },
];

/* ── Emotion Regulation Strategies ─────────────────────────────── */
interface EmotionStrategy {
  id: string;
  name: string;
  mechanism: string;
  medatScoreEffect: "Maximal wirksam" | "Bedingt wirksam" | "Kontraproduktiv";
  clinicalExample: string;
}

const EMOTION_STRATEGIES: EmotionStrategy[] = [
  {
    id: "reappraisal",
    name: "Kognitive Neubewertung (Reappraisal)",
    mechanism: "Die Situation gedanklich in einen neuen, sachlichen Kontext setzen, um die emotionale Reaktion an der Wurzel zu verändern.",
    medatScoreEffect: "Maximal wirksam",
    clinicalExample: "Ein aufgebrachter Patient schreit den Arzt an. Statt es als persönlichen Angriff zu werten, denkt der Arzt: 'Er hat unerträgliche Schmerzen und Todesangst, seine Wut ist ein Hilferuf.'",
  },
  {
    id: "problem-solving",
    name: "Problemorientiertes Handeln",
    mechanism: "Die Ursache des emotionalen Stresses durch gezielte, konkrete Handlungsschritte aktiv beseitigen.",
    medatScoreEffect: "Maximal wirksam",
    clinicalExample: "Überforderung auf der Intensivstation: Sofortige Priorisierung der vital gefährdeten Patient:innen und Herbeirufen des Oberarztes zur Entlastung.",
  },
  {
    id: "suppression",
    name: "Gefühlsunterdrückung (Suppression)",
    mechanism: "Den äußeren Ausdruck von Emotionen mit Gewalt unterdrücken, während der innere physiologische Stressor unverändert bleibt.",
    medatScoreEffect: "Kontraproduktiv",
    clinicalExample: "Die Zähne zusammenbeißen und Trauer oder Wut herunterschlucken. Führt testpsychologisch zu schlechten Bewertungen, da es Burnout und Empathieverlust fördert.",
  },
  {
    id: "distraction",
    name: "Ablenkung & Aufmerksamkeitsverlagerung",
    mechanism: "Den Fokus kurzfristig auf neutrale oder positive Umweltreize lenken, um akute Panikspitzen abzufedern.",
    medatScoreEffect: "Bedingt wirksam",
    clinicalExample: "Kurzes Durchatmen am Fenster vor dem Reanimationseinsatz. Als Akutmaßnahme hilfreich, löst aber nicht das zugrundeliegende emotionale Dilemma.",
  },
];

export default function TVSEKPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("tv-ueberblick");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Dilemma Simulator State
  const [selectedOptionId, setSelectedOptionId] = useState<string>("opt-4");

  // Emotion Strategy Explorer State
  const [selectedEmotionId, setSelectedEmotionId] = useState<string>("reappraisal");

  // TV Distractor Interactive Simulator State
  const [activeDistractorTab, setActiveDistractorTab] = useState<"vorwissen" | "verallgemeinerung" | "kausalitaet" | "teilwahrheit">("vorwissen");

  // FAQ Filter
  const [faqCategory, setFaqCategory] = useState<string>("Alle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Tracking
  useEffect(() => {
    document.title =
      "Textverständnis & SEK: Die unterschätzten 20 % für deinen Studienplatz | MedAT Prep";
    track("page_view", {
      page: "tv-sek-emotionen-textverstaendnis",
      topic: "tv_und_sek",
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
        "tv-ueberblick",
        "scanning-methode",
        "distraktor-detektor",
        "sek-ueberblick",
        "kohlberg-simulator",
        "emotionen-regulieren",
        "pacing-zeitmanagement",
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
  const handleExportCheatSheet = () => {
    const content = [
      "MEDAT TV & SEK MASTER-GUIDE (SCHNELLÜBERSICHT)",
      "==============================================",
      "",
      "TEXTVERSTÄNDNIS (TV, 10 %):",
      "1. Signalwort-Scanning: Zuerst Fragen & Optionen lesen, Signalbegriffe markieren.",
      "2. Nur der Text zählt: Medizinisches Vorwissen rigoros ausblenden!",
      "3. 4-Pass-Distraktor-Filter: Vorsicht bei 'immer', 'alle', 'ausschließlich'.",
      "4. Zeitbudget: Exakt ~175 Sekunden pro Frage inklusive Quervergleich.",
      "",
      "SOZIAL-EMOTIONALE KOMPETENZEN (SEK, 10 %):",
      "1. Kohlberg-Prinzip: Immer Stufe 5 & 6 (Patientenautonomie, Würde, Vertrauensschutz).",
      "2. Opportunismus vermeiden: Keine Antworten wählen, die rein auf Strafe/Lob basieren.",
      "3. Emotionen regulieren: Kognitive Neubewertung (Reappraisal) schlägt Gefühlsunterdrückung.",
      "4. Konsistenz bewahren: Bewertungsraster über alle 10 Fälle synchron halten.",
      "",
      "Erstellt von MedAT Prep (medatprep.at)",
    ].join("\r\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "MedAT-TV-SEK-Master-Guide.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast("TV & SEK Leitfaden (.txt) erfolgreich heruntergeladen!", "success");
    track("cheat_sheet_download", { source: "tv_sek_page" });
  };

  const handleCopyMatrix = () => {
    const text =
      "MedAT SEK Bewertungsmatrix:\n" +
      "• Postkonventionell (Stufe 5 & 6): Maximalpunkte (Universelle Rechte, Patientenautonomie)\n" +
      "• Konventionell (Stufe 3 & 4): Teilleistung (Gesetze, soziale Erwartungen)\n" +
      "• Präkonventionell (Stufe 1 & 2): 0 Punkte (Strafvermeidung, Egoismus)\n" +
      "• Emotionen regulieren: Reappraisal (Neubewertung) = Top-Score | Suppression = Abzug\n" +
      "Quelle: MedAT Prep SEK-Training";
    navigator.clipboard.writeText(text);
    toast("SEK-Entscheidungsmatrix in die Zwischenablage kopiert!", "success");
    track("matrix_copied", { source: "tv_sek_page" });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link zum TV & SEK Leitfaden in die Zwischenablage kopiert", "success");
    track("share_link_copied", { page: "tv-sek-emotionen-textverstaendnis" });
  };

  const activeDilemmaOption =
    DILEMMA_OPTIONS.find((o) => o.id === selectedOptionId) || DILEMMA_OPTIONS[3];

  const activeEmotionStrategy =
    EMOTION_STRATEGIES.find((s) => s.id === selectedEmotionId) || EMOTION_STRATEGIES[0];

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return TV_SEK_FAQS;
    return TV_SEK_FAQS.filter((f) => f.category === faqCategory);
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
              <span>📖 TV & SEK Master-Guide</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportCheatSheet}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="Leitfaden herunterladen"
            >
              <IconChart className="h-3.5 w-3.5" />
              <span>Scanning-Guide (.txt)</span>
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
              <span className="text-primary font-bold">Textverständnis & SEK</span>
            </nav>

            {/* Badges (scaled down by 15%) */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-primary">
                Strategie & Methodik
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 6 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> 12. Februar 2027
              </span>
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-emerald-800">
                ✓ Validierte MedAT-Teststrategie
              </span>
            </div>

            {/* Editorial Title (15% reduction) */}
            <h1 className="mt-3 text-[21px] xs:text-[25px] sm:text-[33px] lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-ink">
              Textverständnis & SEK: Die unterschätzten 20 % für deinen Studienplatz
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[12px] xs:text-[13px] sm:text-[15px] leading-relaxed text-ink-2">
              Mit jeweils 10 % Gewichtung entscheiden Textverständnis (TV) und Sozial-emotionale
              Kompetenzen (SEK) oft über die Vergabe der letzten Grenzplätze — so meisterst du die
              Scanning-Methode und das Kohlberg-Konsistenz-Prinzip.
            </p>

            {/* 4-Stat Ribbon (bridging hero gap, no dark countdown, no author card) */}
            <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconChart className="h-3 w-3 shrink-0" />
                  <span className="truncate">Gesamtgewichtung</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  20 % Score
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  10 % TV + 10 % SEK
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconTextLines className="h-3 w-3 shrink-0" />
                  <span className="truncate">Textverständnis</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  12 Fragen / 35 Min.
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  ~175 s pro Frage
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconHeart className="h-3 w-3 shrink-0" />
                  <span className="truncate">SEK-Aufbau</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  2 Teildisziplinen
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Entscheiden & Regulieren
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconBrain className="h-3 w-3 shrink-0" />
                  <span className="truncate">Kohlberg-Prinzip</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  Stufe 5 & 6
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Postkonventionelle Moral
                </p>
              </div>
            </div>

            {/* Quick Action Utility Toolbar */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 pt-1 border-t border-line/60">
              <span className="text-[10px] sm:text-[11px] font-semibold text-ink-4 mr-1">
                Schnellzugriff:
              </span>
              <button
                onClick={handleExportCheatSheet}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconTextLines className="h-3 w-3 text-primary" />
                <span>Scanning-Cheat-Sheet (.txt)</span>
              </button>
              <button
                onClick={handleCopyMatrix}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconSpark className="h-3 w-3 text-primary" />
                <span>SEK-Entscheidungsmatrix kopieren</span>
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
                Inhaltsverzeichnis des TV & SEK Guides
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
                  { id: "tv-ueberblick", label: "1. Warum TV & SEK den Grenzrang entscheiden" },
                  { id: "scanning-methode", label: "2. Die Signalwort-Scanning-Methode" },
                  { id: "distraktor-detektor", label: "3. Der 4-Stufen Distraktor-Detektor" },
                  { id: "sek-ueberblick", label: "4. SEK: Was wirklich bewertet wird" },
                  { id: "kohlberg-simulator", label: "5. Der Kohlberg-Dilemma-Simulator" },
                  { id: "emotionen-regulieren", label: "6. Emotionen regulieren (ER-Matrix)" },
                  { id: "pacing-zeitmanagement", label: "7. Pacing & Testtag-Zeitmanagement" },
                  { id: "faq", label: "8. FAQ & Häufige Bewertungsfragen" },
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
                    { id: "tv-ueberblick", label: "1. Die unterschätzten 20 %" },
                    { id: "scanning-methode", label: "2. Scanning-Methode" },
                    { id: "distraktor-detektor", label: "3. Distraktor-Detektor" },
                    { id: "sek-ueberblick", label: "4. SEK Grundlagen" },
                    { id: "kohlberg-simulator", label: "5. Kohlberg-Simulator" },
                    { id: "emotionen-regulieren", label: "6. Emotionen regulieren" },
                    { id: "pacing-zeitmanagement", label: "7. Pacing & Zeitbudget" },
                    { id: "faq", label: "8. FAQ & Bewertungsregeln" },
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
                  <p className="text-[11px] font-bold text-ink">TV & SEK Leistungscheck?</p>
                  <p className="mt-1 text-[10.5px] text-ink-3 leading-tight">
                    Finde heraus, wie viele Punkte du im Textverständnis und im moralischen Urteil holst.
                  </p>
                  <a
                    href="#/onboarding?mode=register"
                    className="mt-3 block text-center rounded-xl bg-primary px-3 py-1.5 text-[11px] font-bold text-paper shadow-2xs hover:bg-primary-dark transition-colors"
                  >
                    Einstufungstest starten (0 €)
                  </a>
                </div>
              </div>
            </aside>

            {/* Editorial Content Column (lg:col-span-9) */}
            <div className="lg:col-span-9 space-y-12">
              {/* ── SECTION 1: DIE UNTERSCHÄTZTEN 20 % ── */}
              <section id="tv-ueberblick" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 1
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  1. Warum TV & SEK den Grenzrang entscheiden
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die meisten Kandidat:innen investieren 90 % ihrer Vorbereitungszeit in BMS und KFF.
                  Textverständnis (TV) und die Sozial-emotionalen Kompetenzen (SEK) werden oft als
                  „Selbstläufer“ oder „reine Bauchsache“ abgetan. Das ist ein strategischer Kardinalfehler.
                </p>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Mit zusammen <strong>20 % der Gesamtpunkte</strong> wiegen TV und SEK genauso schwer
                  wie die gesamte Biologie oder Chemie und Physik zusammen! Da an der Cut-off-Grenze
                  oft Zehntelprozentpunkte über Zulassung oder Warteliste entscheiden, sichern dir 10 von 12
                  Punkten im TV und ein hoher SEK-Wert das Ticket zum Medizinstudium.
                </p>

                {/* 2 Comparison Cards: TV vs SEK */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Textverständnis (TV)
                      </span>
                      <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[10px] font-bold text-ink-3">
                        Nur MedAT-H
                      </span>
                    </div>
                    <p className="num text-[24px] font-black text-ink">10 % Wertung</p>
                    <p className="text-[11.5px] text-ink-2 leading-relaxed">
                      12 Aufgaben zu komplexen medizinischen Fachtexten in 35 Minuten. Prüft logische
                      Textanalyse, Implikationen und rigorose Distraktorenerkennung ohne Vorwissenseinfluss.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        Sozial-emotionale Kompetenzen (SEK)
                      </span>
                      <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[10px] font-bold text-ink-3">
                        MedAT-H & MedAT-Z
                      </span>
                    </div>
                    <p className="num text-[24px] font-black text-ink">10 % Wertung</p>
                    <p className="text-[11.5px] text-ink-2 leading-relaxed">
                      Unterteilt in <em>Soziales Entscheiden</em> (moralische Handlungsrechtfertigung nach
                      Kohlberg) und <em>Emotionen regulieren / erkennen</em> (kognitive Neubewertung von Belastungssituationen).
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 2: SIGNALWORT-SCANNING-METHODE ── */}
              <section id="scanning-methode" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 2
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  2. Die Signalwort-Scanning-Methode (Lesestrategie)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Im Textverständnis scheitert man fast nie am mangelnden Vokabular, sondern am
                  Zeitmangel. Wer den Text wie ein Buch von vorne bis hinten durchliest, verbraucht 18
                  Minuten allein für die Lektüre und muss danach für jede Frage erneut suchen.
                </p>

                {/* Interactive Workflow: Romanlesen vs Scanning */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-4 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-rose-900 font-bold text-xs sm:text-sm">
                      <span>❌</span>
                      <span>Die Verlierer-Methode: „Roman-Lesen“</span>
                    </div>
                    <ol className="space-y-1.5 text-xs text-rose-950 list-decimal list-inside leading-relaxed">
                      <li>Text komplett von Anfang bis Ende durchlesen (verbraucht 15–18 Min.).</li>
                      <li>Frage 1 lesen und merken, dass man die Details vergessen hat.</li>
                      <li>Hektisch im gesamten Fließtext nach der Textstelle suchen.</li>
                      <li>Zeitnot ab Frage 7 → am Ende müssen 4 Fragen geraten werden.</li>
                    </ol>
                    <p className="text-[10.5px] text-rose-800 font-semibold pt-1">
                      Typisches Resultat: 5–7 von 12 Punkten.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm">
                      <span>✓</span>
                      <span>Die Sieger-Methode: „Signalwort-Scanning“</span>
                    </div>
                    <ol className="space-y-1.5 text-xs text-emerald-950 list-decimal list-inside leading-relaxed">
                      <li>Frage & alle 5 Optionen überfliegen, bevor der Text gelesen wird.</li>
                      <li>Spezifische Signalwörter (Zahlen, Eigennamen, Enzyme, Verben) markieren.</li>
                      <li>Gezielter Absatz-Scan: Den Text nur nach diesen Ankern durchsuchen.</li>
                      <li>Ausschließlich den belegten Satz analysieren und Distraktoren eliminieren.</li>
                    </ol>
                    <p className="text-[10.5px] text-emerald-800 font-semibold pt-1">
                      Typisches Resultat: 10–12 von 12 Punkten in &lt; 28 Minuten.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 3: DER DISTRAKTOR-DETEKTOR ── */}
              <section id="distraktor-detektor" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 3
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  3. Der 4-Stufen Distraktor-Detektor
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die falschen Antwortoptionen (Distraktoren) im MedAT entstehen nicht zufällig. Sie
                  folgen vier festen psychologischen Mustern, die darauf ausgelegt sind, flüchtiges
                  Lesen zu bestrafen.
                </p>

                {/* Distractor Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "vorwissen", label: "1. Vorwissensfalle" },
                    { id: "verallgemeinerung", label: "2. Verallgemeinerung" },
                    { id: "kausalitaet", label: "3. Kausalitätsumkehr" },
                    { id: "teilwahrheit", label: "4. Teilwahrheitsfalle" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDistractorTab(tab.id as any)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-colors cursor-pointer ${
                        activeDistractorTab === tab.id
                          ? "border-primary bg-primary text-paper shadow-2xs"
                          : "border-line bg-paper-2 text-ink-3 hover:text-ink"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Distractor Interactive Explanation */}
                <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 shadow-xs space-y-3">
                  {activeDistractorTab === "vorwissen" && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                        <span>🧬</span>
                        <span>Muster 1: Die Vorwissensfalle (Medizinisch richtig, aber im Text nicht belegt)</span>
                      </div>
                      <p className="text-xs text-ink-2 leading-relaxed">
                        Die Option lautet z. B.: <em>„Das Hormon Insulin senkt den Blutzuckerspiegel durch
                        Glukoseaufnahme in Muskel- und Fettgewebe.“</em> Jeder Biologie-Lernende weiß,
                        dass dieser Satz wahr ist. Wenn der Text jedoch nur über Glukagon und
                        Leberglykogen berichtet, ist diese Antwort im MedAT <strong>falsch</strong>!
                      </p>
                      <p className="text-[11px] font-bold text-rose-800 bg-rose-50 p-2 rounded-lg">
                        Gegenmittel: Frage dich stets: „Steht dieser Satz wortwörtlich oder sinngemäß im
                        Text, oder weiß ich das nur aus meinem eigenen BMS-Wissen?“
                      </p>
                    </div>
                  )}

                  {activeDistractorTab === "verallgemeinerung" && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                        <span>🔍</span>
                        <span>Muster 2: Die Verallgemeinerungsfalle (Quantoren-Verschiebung)</span>
                      </div>
                      <p className="text-xs text-ink-2 leading-relaxed">
                        Im Text steht: <em>„Einige Patient:innen entwickelten unter Therapie leichte
                        Übelkeit.“</em> Die Antwortoption formuliert um: <em>„Die Therapie führt
                        ausnahmslos bei allen Probanden zu Magen-Darm-Beschwerden.“</em>
                      </p>
                      <p className="text-[11px] font-bold text-amber-900 bg-amber-50 p-2 rounded-lg">
                        Gegenmittel: Achte penibel auf Signalwörter wie <strong>„alle“, „immer“,
                        „keineswegs“, „ausschließlich“, „überwiegend“</strong> vs. <strong>„einige“,
                        „gelegentlich“, „kann auftreten“</strong>.
                      </p>
                    </div>
                  )}

                  {activeDistractorTab === "kausalitaet" && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                        <span>🔄</span>
                        <span>Muster 3: Die Kausalitätsumkehr (Ursache & Wirkung vertauscht)</span>
                      </div>
                      <p className="text-xs text-ink-2 leading-relaxed">
                        Im Text steht: <em>„Die Erhöhung des intrazellulären Kalziumspiegels löst die
                        Kontraktion der Myofibrillen aus.“</em> Die Fangoption kehrt die Logik um:{" "}
                        <em>„Die Kontraktion der Myofibrillen ist die primäre Ursache für den Anstieg des
                        Kalziumspiegels.“</em>
                      </p>
                      <p className="text-[11px] font-bold text-primary bg-primary-subtle p-2 rounded-lg">
                        Gegenmittel: Zeichne dir bei Ursache-Wirkungs-Sätzen gedanklich immer einen Pfeil:
                        A → B. Prüfe, ob die Antwort B → A behauptet.
                      </p>
                    </div>
                  )}

                  {activeDistractorTab === "teilwahrheit" && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                        <span>✂️</span>
                        <span>Muster 4: Die Teilwahrheitsfalle (90 % richtig, 10 % erfunden)</span>
                      </div>
                      <p className="text-xs text-ink-2 leading-relaxed">
                        Die ersten drei Teilsätze stimmen buchstabengetreu mit dem Fachtext überein.
                        Erst im letzten Nebensatz wird ein winziges Detail (z. B. ein Zeitraum von
                        „zwei Wochen“ statt „zwei Monaten“ oder ein anderer Rezeptorsubtyp) verdreht.
                      </p>
                      <p className="text-[11px] font-bold text-emerald-800 bg-emerald-50 p-2 rounded-lg">
                        Gegenmittel: Lies Antwortoptionen bis zum allerletzten Punkt. Niemals nach den
                        ersten fünf Wörtern begeistert das Kreuz setzen!
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {/* ── SECTION 4: SEK GRUNDLAGEN ── */}
              <section id="sek-ueberblick" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 4
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  4. Sozial-emotionale Kompetenzen (SEK): Was wirklich bewertet wird
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Viele Bewerber:innen glauben fälschlicherweise, in SEK gehe es darum, sich als „besonders
                  lieber, aufopferungsvoller Mensch“ darzustellen. Das Gegenteil ist der Fall:
                  Die Medizinischen Universitäten suchen angehende Ärztinnen und Ärzte mit{" "}
                  <strong>reflektierter moralischer Reife, professioneller Distanz und emotionaler Stabilität</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      1. Ebene
                    </p>
                    <h4 className="text-xs font-bold text-ink">Präkonventionell</h4>
                    <p className="text-[10.5px] text-ink-3">
                      Orientierung an Strafe, Belohnung oder egoistischem Nutzen. Im MedAT strikt mit 0
                      Punkten bewertet.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-2">
                      2. Ebene
                    </p>
                    <h4 className="text-xs font-bold text-ink">Konventionell</h4>
                    <p className="text-[10.5px] text-ink-3">
                      Orientierung an Gesetzen, gesellschaftlichen Erwartungen und der Meinung von Kolleg:innen.
                      Mittlerer Score.
                    </p>
                  </div>

                  <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/40 p-3.5 shadow-2xs space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      3. Ebene (Ziel!)
                    </p>
                    <h4 className="text-xs font-bold text-emerald-950">Postkonventionell</h4>
                    <p className="text-[10.5px] text-emerald-900">
                      Orientierung an universellen Rechten, Patientenautonomie, Vertrauensschutz und
                      Menschenwürde. Höchste Punktzahl!
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 5: KOHLBERG-SIMULATOR ── */}
              <section id="kohlberg-simulator" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 5
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  5. Der interaktive Kohlberg-Dilemma-Simulator
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Lies das Fallbeispiel und klicke auf die verschiedenen Handlungsbegründungen, um zu sehen,
                  welche moralische Stufe vorliegt und wie die MedAT-Prüfungskommission die Antwort bewertet.
                </p>

                {/* Simulator Card */}
                <div className="rounded-3xl border border-line bg-paper-2 p-4 sm:p-6 shadow-xs space-y-4">
                  {/* Scenario Box */}
                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {DILEMMA_SCENARIO.title}
                    </span>
                    <p className="text-xs text-ink leading-relaxed">{DILEMMA_SCENARIO.context}</p>
                    <p className="text-xs font-bold text-primary pt-1">{DILEMMA_SCENARIO.question}</p>
                  </div>

                  {/* Option Selector Buttons */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink-3">
                      Wähle eine Begründung zur Analyse:
                    </p>
                    {DILEMMA_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                          selectedOptionId === opt.id
                            ? "border-primary bg-paper shadow-xs"
                            : "border-line bg-paper/60 hover:bg-paper"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-ink line-clamp-1">{opt.statement}</span>
                          <span
                            className={`shrink-0 ml-2 rounded px-2 py-0.5 text-[10px] font-bold ${
                              opt.kohlbergLevel === "postkonventionell"
                                ? "bg-emerald-100 text-emerald-800"
                                : opt.kohlbergLevel === "konventionell"
                                ? "bg-amber-100 text-amber-900"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {opt.kohlbergLevel}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Active Analysis Result Box */}
                  <div className="rounded-2xl border border-primary/30 bg-paper p-4.5 shadow-2xs space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-line pb-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-primary">
                          Kohlberg-Einstufung:
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-ink">
                          {activeDilemmaOption.levelName}
                        </h4>
                      </div>
                      <span
                        className={`self-start sm:self-auto rounded-md px-2 py-0.5 text-[10.5px] font-bold ${
                          activeDilemmaOption.pointsRating.includes("Ideal")
                            ? "bg-emerald-100 text-emerald-800"
                            : activeDilemmaOption.pointsRating.includes("Mittel")
                            ? "bg-amber-100 text-amber-900"
                            : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {activeDilemmaOption.pointsRating}
                      </span>
                    </div>
                    <p className="text-xs text-ink-2 leading-relaxed">
                      {activeDilemmaOption.explanation}
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 6: EMOTIONEN REGULIEREN ── */}
              <section id="emotionen-regulieren" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 6
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  6. Emotionen regulieren: Die 4 wissenschaftlichen Strategien
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Im Untertest <em>Emotionen regulieren (ER)</em> musst du vorgegebene Bewältigungsstrategien
                  für belastende Situationen im klinischen Alltag bewerten. Wähle eine Strategie, um
                  ihren Wirkungsmechanismus und den MedAT-Scoring-Effekt kennenzulernen.
                </p>

                {/* Strategy Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {EMOTION_STRATEGIES.map((strat) => (
                    <button
                      key={strat.id}
                      onClick={() => setSelectedEmotionId(strat.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedEmotionId === strat.id
                          ? "border-primary bg-primary text-paper shadow-2xs"
                          : "border-line bg-paper-2 text-ink-3 hover:text-ink"
                      }`}
                    >
                      <p className="text-[11px] font-bold truncate">{strat.name}</p>
                    </button>
                  ))}
                </div>

                {/* Active Strategy Detail Box */}
                <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-line pb-2.5">
                    <h3 className="text-xs sm:text-sm font-bold text-ink">
                      {activeEmotionStrategy.name}
                    </h3>
                    <span
                      className={`self-start sm:self-auto rounded px-2 py-0.5 text-[10px] font-bold ${
                        activeEmotionStrategy.medatScoreEffect === "Maximal wirksam"
                          ? "bg-emerald-100 text-emerald-800"
                          : activeEmotionStrategy.medatScoreEffect === "Bedingt wirksam"
                          ? "bg-amber-100 text-amber-900"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      MedAT-Bewertung: {activeEmotionStrategy.medatScoreEffect}
                    </span>
                  </div>

                  <p className="text-xs text-ink-2 leading-relaxed">
                    <strong>Mechanismus:</strong> {activeEmotionStrategy.mechanism}
                  </p>

                  <div className="rounded-2xl border border-line bg-paper-2 p-3 text-xs text-ink-2 leading-relaxed">
                    <strong>Klinisches Praxisbeispiel:</strong> {activeEmotionStrategy.clinicalExample}
                  </div>
                </div>
              </section>

              {/* ── SECTION 7: PACING & ZEITMANAGEMENT ── */}
              <section id="pacing-zeitmanagement" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 7
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  7. Pacing & Testtag-Zeitmanagement für TV und SEK
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Textverständnis und SEK finden zu völlig unterschiedlichen Tageszeiten statt. Entsprechend
                  unterscheidet sich die mentale Beanspruchung:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Vormittagsblock: Textverständnis
                    </span>
                    <p className="text-xs font-bold text-ink">09:55 – 10:30 Uhr (35 Min.)</p>
                    <p className="text-[11.5px] text-ink-3 leading-relaxed">
                      Direkt nach dem anstrengenden BMS-Block. Gefahr von Augenmüdigkeit und Hektik.
                      Pacing-Regel: Exakt 11 Minuten pro Text (inklusive aller zugehörigen 4 Fragen).
                      Verbleibende 2 Minuten zur Endkontrolle auf dem Antwortbogen.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      Nachmittagsblock: SEK
                    </span>
                    <p className="text-xs font-bold text-ink">16:15 – 16:45 Uhr (30 Min.)</p>
                    <p className="text-[11.5px] text-ink-3 leading-relaxed">
                      Der allerletzte Testblock nach über 7 Stunden Dauerkonzentration. Hier entscheidet
                      mentale Frische: Vor dem SEK-Start tief durchatmen, Schultern lockern und das
                      Kohlberg-Postkonventions-Raster strikt bis zur letzten Aufgabe durchziehen.
                    </p>
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
                  8. FAQ & Häufige Bewertungsfragen zu TV und SEK
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die wichtigsten Antworten zu Lesetechniken, moralischen Stufen, Bewertungsrastern und
                  Unterschieden zwischen Human- und Zahnmedizin.
                </p>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Alle", "Textverständnis", "SEK", "Moralstufen", "Testtag-Taktik"].map((cat) => (
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
                  ))}
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
                    Kostenlose Potenzialanalyse
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    Trainiere TV & SEK mit originalgetreuen MedAT-Fallbeispielen.
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-ink-3 leading-relaxed">
                    Prüfe dein Scanning-Tempo und dein moralisches Urteilsvermögen in unserem 8-Minuten
                    Einstufungstest mit sofortiger psychologischer Auswertung.
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
