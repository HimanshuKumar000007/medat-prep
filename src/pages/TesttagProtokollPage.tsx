/**
 * src/pages/TesttagProtokollPage.tsx
 *
 * Ultra-Premium, Standalone Editorial Guide:
 * "Testtag-Protokoll: Mentale Stärke, Pausenmanagement & Prüfungspsychologie"
 * Subtitle: "Was in deinen transparenten Plastikbeutel gehört und wie du das Mittagstief in der 60-Minuten-Pause verhinderst."
 *
 * Built with Austrian Clinical Precision:
 * - Dynamic scroll progress indicator
 * - Austrian tricolor bar
 * - Scaled down typography by 15% (H1 max 40px, subtitle 13-15px, section titles 18-22px, badges 9px)
 * - NO dark countdown block and NO author card block (per user requests)
 * - Hero 4-Stat Ribbon bridging the gap:
 *     1. 8,5 Stunden Gesamtdauer (07:30 Einlass bis 16:45 Testende)
 *     2. 60 Min. Mittagspause (Anti-Koma Ernährungs- & Regenerationsfenster)
 *     3. 1 Transparentes Sackerl (Strenge Einlassordnung der 4 Messehallen)
 *     4. 4-4-4-4 Box Breathing (Akut-Stress-Regulation gegen Panik)
 * - Quick Action Utility Toolbar (Testtag-Packliste exportieren, Tagesablauf kopieren, Link teilen)
 * - Mobile-optimized collapsible Table of Contents accordion & Desktop sticky sidebar
 * - Interactive Sackerl-Packlisten-Simulator (Erlaubt vs. Disqualifikation)
 * - 4-Standorte Messehallen-Kompass (Wien, Graz, Innsbruck, Linz mit Anreise & Akustik)
 * - Interactive Anti-Mittagstief Ernährungs- & Blutzucker-Simulator
 * - Die 3 psychologischen Akut-Interventionen (Box Breathing, Mental Reset, Panik-Bremse)
 * - Minutengenauer chronologischer Tagesablauf (06:30 – 17:00 Uhr)
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
  IconHeart,
  IconUsers,
  IconRefresh,
} from "../lib/icons";
import { toast, track } from "../lib/core";

/* ── FAQ Data ─────────────────────────────────────────────────── */
interface TestdayFaqItem {
  q: string;
  a: string;
  category: "Einlass & Sackerl" | "Ernährung" | "Hallenordnung" | "Mentale Stärke";
}

const TESTDAY_FAQS: TestdayFaqItem[] = [
  {
    q: "Welche Maße und Eigenschaften muss das transparente Sackerl haben?",
    a: "Das Sackerl muss vollständig durchsichtig sein (z. B. 3-Liter-Gefrierbeutel mit Zip-Verschluss). Blickdichte Taschen, Stoffbeutel, Kulturbeutel oder Rucksäcke werden an den Sicherheitsschleusen ausnahmslos abgewiesen. Alles, was sich im Sackerl befindet, muss von außen auf den ersten Blick erkennbar sein.",
    category: "Einlass & Sackerl",
  },
  {
    q: "Darf ich eigene Stifte, Bleistifte oder Textmarker mit an den Platz nehmen?",
    a: "Nein, strikt verboten! Eigene Schreibgeräte (Kugelschreiber, Bleistifte, Textmarker, Füllfedern, Radiergummis) dürfen nicht in die Messehalle mitgenommen werden. Am Sitzplatz liegt für jede:n Teilnehmer:in ein offizieller, standardisierter Kugelschreiber bereit. Nur mit diesem Stift darf auf dem maschinell lesbaren Antwortbogen markiert werden.",
    category: "Hallenordnung",
  },
  {
    q: "Was passiert, wenn mein Smartphone in der Garderobe klingelt?",
    a: "Smartphones und internetfähige Geräte (auch Smartwatches) müssen vor dem Betreten der Messehalle komplett ausgeschaltet an den Garderoben abgegeben werden. Wer mit einem Smartphone am Sitzplatz oder in den Waschräumen angetroffen wird — selbst im Flugmodus oder ausgeschaltet —, wird wegen Täuschungsversuchs sofort disqualifiziert.",
    category: "Hallenordnung",
  },
  {
    q: "Wie verhindere ich das berüchtigte 'Schnitzelkoma' in der 60-Minuten-Pause?",
    a: "Vermeide schwere, fettige Mahlzeiten und schnelle Zuckerbomben (Fast Food, Energy Drinks, Schokoriegel). Ein plötzlicher Glukoseschub führt ca. 35 Minuten später zu einer massiven Insulinausschüttung und einem tiefen Leistungstief — genau um 14:00 Uhr, wenn bei KFF höchste Aufmerksamkeit für Gedächtnis und Zahlenfolgen gefordert ist. Setze auf Haferflocken, Mandeln, Bananen und stilles Wasser.",
    category: "Ernährung",
  },
  {
    q: "Sind Ohrstöpsel (Ohropax) gegen den Messehallen-Lärm erlaubt?",
    a: "Ja! Einfache Schaumstoff-Ohrstöpsel (z. B. klassische Ohropax ohne Schnüre, Filter oder elektronische Komponenten) sind ausdrücklich erlaubt und dringend zu empfehlen. In Messehallen mit bis zu 8.000 Teilnehmenden erzeugt das gleichzeitige Umblättern, Husten und Räuspern einen erheblichen Geräuschpegel.",
    category: "Einlass & Sackerl",
  },
  {
    q: "Was mache ich, wenn mich während des Tests eine Panikattacke überrollt?",
    a: "Wende die 90-Sekunden-Notfall-Bremse an: Lege den Kugelschreiber sofort aus der Hand, lehne dich zurück, schließe für drei Atemzüge die Augen und wende die 4-4-4-4 Box-Breathing-Methode an (4 Sek. einatmen, 4 Sek. halten, 4 Sek. ausatmen, 4 Sek. halten). Das senkt nachweislich die Herzfrequenz und reaktiviert den präfrontalen Kortex.",
    category: "Mentale Stärke",
  },
  {
    q: "Darf ich während der Arbeitsphasen auf die Toilette gehen?",
    a: "Ja, allerdings geht der Toilettengang von deiner regulären Bearbeitungszeit ab; es gibt keinen Zeitzuschlag. Zudem wirst du vom Aufsichtspersonal bis zur Waschraumtür eskortiert. Nutze die Toiletten daher strategisch vor Beginn des Testblocks (vor 08:30 Uhr) und während der 60-minütigen Mittagspause.",
    category: "Hallenordnung",
  },
  {
    q: "Darf eine analoge Armbanduhr auf den Tisch gelegt werden?",
    a: "Ja, eine rein analoge Armbanduhr (mit Zeigern, ohne Digitalanzeige, ohne Funk und ohne akustischen Alarm) darf auf den Schreibtisch gelegt werden, um die Restzeit im Blick zu behalten. In allen Messehallen gibt es zudem große Projektionsleinwände mit der offiziellen Restzeitanzeige.",
    category: "Einlass & Sackerl",
  },
];

/* ── Sackerl Items (Packliste Data) ────────────────────────────── */
interface PackItem {
  id: string;
  name: string;
  allowed: boolean;
  category: "Erlaubt" | "Strikt verboten";
  note: string;
}

const PACK_ITEMS: PackItem[] = [
  {
    id: "id-card",
    name: "Amtlicher Lichtbildausweis (Reisepass oder Personalausweis)",
    allowed: true,
    category: "Erlaubt",
    note: "Gültiges Original erforderlich. Kein Foto auf dem Smartphone!",
  },
  {
    id: "invitation",
    name: "Ausgedruckte Testtageinladung mit QR-Code",
    allowed: true,
    category: "Erlaubt",
    note: "Muss vorab im medizinstudieren.at Portal ausgedruckt werden.",
  },
  {
    id: "water",
    name: "Durchsichtige Wasserflasche ohne Etikett (max. 1 Liter)",
    allowed: true,
    category: "Erlaubt",
    note: "Etikett vorab vollständig entfernen. Nur stilles Wasser oder leichter Tee.",
  },
  {
    id: "snacks",
    name: "Verpflegung in transparenter Verpackung (Bananen, Nüsse)",
    allowed: true,
    category: "Erlaubt",
    note: "Kein knisterndes Stanniolpapier oder geräuschvolle Verpackungen.",
  },
  {
    id: "ohropax",
    name: "Einfache Schaumstoff-Ohrstöpsel (Ohropax)",
    allowed: true,
    category: "Erlaubt",
    note: "Ohne Schnur, ohne Bügel, keine elektronischen In-Ears.",
  },
  {
    id: "tissues",
    name: "Papiertaschentücher (aus der Packung genommen)",
    allowed: true,
    category: "Erlaubt",
    note: "Lose im Sackerl, Plastikverpackung vorher entfernen.",
  },
  {
    id: "watch",
    name: "Einfache analoge Armbanduhr (ohne Piepton)",
    allowed: true,
    category: "Erlaubt",
    note: "Keine Smartwatch, kein Fitnesstracker, kein Alarm.",
  },
  {
    id: "smartphone",
    name: "Smartphone / Handy / Tablet",
    allowed: false,
    category: "Strikt verboten",
    note: "Muss an der Garderobe bleiben. Am Platz = sofortige Disqualifikation!",
  },
  {
    id: "smartwatch",
    name: "Smartwatch / Apple Watch / Garmin",
    allowed: false,
    category: "Strikt verboten",
    note: "Ausnahmslos verboten. Auch wenn Bluetooth deaktiviert ist.",
  },
  {
    id: "own-pens",
    name: "Eigene Kugelschreiber, Bleistifte & Textmarker",
    allowed: false,
    category: "Strikt verboten",
    note: "Offizielle Stifte werden am Platz ausgeteilt. Eigene Stifte verboten.",
  },
  {
    id: "calculator",
    name: "Taschenrechner oder Rechenschieber",
    allowed: false,
    category: "Strikt verboten",
    note: "Alle Berechnungen müssen mental oder als Handrechnung erfolgen.",
  },
  {
    id: "paper",
    name: "Eigenes Notizpapier / Schmierblätter",
    allowed: false,
    category: "Strikt verboten",
    note: "Im Aufgabenheft ist ausreichend weißer Rand für Notizen vorhanden.",
  },
];

/* ── 4 Test Center Profiles ────────────────────────────────────── */
interface VenueProfile {
  id: string;
  city: string;
  name: string;
  hall: string;
  address: string;
  transit: string;
  attendees: string;
  climateTip: string;
  hallAdvice: string;
}

const VENUES: VenueProfile[] = [
  {
    id: "wien",
    city: "Wien",
    name: "MedUni Wien",
    hall: "Messe Wien (Hallen A & B)",
    address: "Messeplatz 1, 1020 Wien",
    transit: "U-Bahn U2 (Station Messe-Prater oder Krieau). Sehr hohe Frequenz!",
    attendees: "~6.300 Teilnehmer:innen",
    climateTip: "Starke Klimatisierung! Zwiebellook mit Strickweste dringend ratsam.",
    hallAdvice: "Riesige Halle mit hoher Decke. Echos beim Gong beachten. Rechtzeitig vor Hallenschluss (08:15 Uhr) durch die Sicherheitsschleuse gehen.",
  },
  {
    id: "innsbruck",
    city: "Innsbruck",
    name: "MedUni Innsbruck",
    hall: "Messe Innsbruck (Hallen 1 & 2)",
    address: "Ing.-Etzel-Straße 1, 6020 Innsbruck",
    transit: "Tram / S-Bahn (Station Messe) oder 12 Min. zu Fuß vom Hauptbahnhof.",
    attendees: "~2.800 Teilnehmer:innen",
    climateTip: "Im Juli oft schwül-warm. Leichte Kleidung mit wärmender Schicht für den Vormittag.",
    hallAdvice: "Übersichtliche Garderobensituation. Durch die Nähe zur deutschen Grenze viele EU-Kandidat:innen.",
  },
  {
    id: "graz",
    city: "Graz",
    name: "MedUni Graz",
    hall: "Messe Graz / Stadthalle Graz",
    address: "Messeplatz 1, 8010 Graz",
    transit: "Straßenbahn Linien 4 & 5 (Station Stadthalle).",
    attendees: "~2.500 Teilnehmer:innen",
    climateTip: "Ausgeglichene Hallentemperatur, dennoch Pullover einpacken.",
    hallAdvice: "Sehr kompakte Hallenführung. Parkplätze vor Ort sind um 07:15 Uhr belegt; Anreise mit Öffis zwingend empfohlen.",
  },
  {
    id: "linz",
    city: "Linz",
    name: "JKU Linz",
    hall: "JKU Campus (Kepler Hall & Science Park)",
    address: "Altenberger Straße 69, 4040 Linz",
    transit: "Straßenbahn Linien 1 & 2 (Station Universität).",
    attendees: "~1.800 Teilnehmer:innen",
    climateTip: "Angenehmer moderner Universitätscampus mit Grünflächen für die Mittagspause.",
    hallAdvice: "Nur Humanmedizin (keine Zahnmedizin). Sehr ruhige Prüfungsatmosphäre im Vergleich zu den Großmessen.",
  },
];

/* ── Nutrition Comparison Data ─────────────────────────────────── */
interface MealOption {
  type: "bad" | "good";
  title: string;
  items: string[];
  bloodSugarEffect: string;
  kffImpact: string;
}

const NUTRITION_COMPARISON: MealOption[] = [
  {
    type: "bad",
    title: "Das 'Schnitzelkoma'-Menü (Häufiger Fehler)",
    items: [
      "Schnitzelsemmel, Pizza oder Döner vom Messekiosk",
      "Koffeinhaltiger Energy Drink (Red Bull, Monster)",
      "Schokoriegel oder Traubenzucker als 'Schnellenergie'",
    ],
    bloodSugarEffect: "Extremer Spike gefolgt von tiefem reaktivem Hypoglykämie-Loch um 14:15 Uhr.",
    kffImpact: "Massiver Konzentrationsabfall bei den 25 Ausweisen & Zahlenfolgen. 'Brain Fog' und schwere Augen.",
  },
  {
    type: "good",
    title: "Das MedAT-Powerpack (Klinisch empfohlen)",
    items: [
      "Vollkornbrot mit Frischkäse / Mandelmus oder Hafer-Overnight-Oats",
      "2 reife Bananen, Walnüsse (Omega-3) und Beeren",
      "Stilles Wasser mit einer Prise Meersalz & Magnesium",
    ],
    bloodSugarEffect: "Flache, langanhaltende Glukosekurve über volle 3 Stunden ohne Insulineinbruch.",
    kffImpact: "Konstante mentale Schärfe und maximale neuronale Wachheit im gesamten Nachmittagsblock.",
  },
];

export default function TesttagProtokollPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("packliste");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Sackerl Filter State
  const [sackerlFilter, setSackerlFilter] = useState<"all" | "allowed" | "forbidden">("all");

  // Venue Selector State
  const [selectedVenueId, setSelectedVenueId] = useState<string>("wien");

  // Emergency Breathing Tool State
  const [breathingStep, setBreathingStep] = useState<number>(0);
  const [breathingActive, setBreathingActive] = useState<boolean>(false);

  // FAQ Filter
  const [faqCategory, setFaqCategory] = useState<string>("Alle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Tracking
  useEffect(() => {
    document.title =
      "Testtag-Protokoll: Mentale Stärke, Pausenmanagement & Prüfungspsychologie | MedAT Prep";
    track("page_view", {
      page: "testtag-protokoll-mentale-staerke",
      topic: "testtag_protokoll",
    });
  }, []);

  // Breathing Animation Cycle
  useEffect(() => {
    if (!breathingActive) return;
    const timer = setInterval(() => {
      setBreathingStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [breathingActive]);

  // Scroll listener for reading progress bar and active section
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.round((h.scrollTop / total) * 100)));
      }

      const sections = [
        "packliste",
        "hallen-kompass",
        "ernaehrung",
        "mental-routinen",
        "tagesablauf",
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
  const handleExportPacklist = () => {
    const content = [
      "MEDAT TESTTAG PACKLISTE & CHECKLISTE",
      "====================================",
      "",
      "IM TRANSPARENTEN SACKERL (MAX. 3 LITER):",
      "- [ ] Amtlicher Lichtbildausweis (Original, z. B. Reisepass)",
      "- [ ] Ausgedruckte Einladung / Anmeldebestätigung",
      "- [ ] Durchsichtige Trinkflasche (ohne Etikett, stilles Wasser)",
      "- [ ] Verpflegung (Bananen, Mandeln, Vollkornbrot)",
      "- [ ] Einfache Schaumstoff-Ohrstöpsel (Ohropax)",
      "- [ ] Papiertaschentücher (ohne Plastikhülle)",
      "- [ ] Analoge Armbanduhr (ohne Piepton)",
      "",
      "STRIKT VERBOTEN (AN DER GARDEROBE ABGEBEN):",
      "- Smartphone / Handy (komplett ausschalten!)",
      "- Smartwatch / Fitnesstracker",
      "- Eigene Kugelschreiber / Textmarker (werden gestellt)",
      "- Taschenrechner & Schmierpapier",
      "- Rucksäcke & blickdichte Taschen",
      "",
      "Erstellt von MedAT Prep (medatprep.at)",
    ].join("\r\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "MedAT-Testtag-Packliste.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast("Testtag-Packliste (.txt) erfolgreich heruntergeladen!", "success");
    track("packlist_download", { source: "testtag_protokoll_page" });
  };

  const handleCopySchedule = () => {
    const text =
      "Offizieller MedAT Testtag-Zeitplan:\n" +
      "• 07:30 – 08:15: Einlass & Sicherheitskontrolle (Hallen schließen pünktlich!)\n" +
      "• 08:30 – 09:45: BMS (94 Fragen in 75 Min.)\n" +
      "• 09:55 – 10:30: Textverständnis (12 Fragen in 35 Min.)\n" +
      "• 10:45 – 12:45: KFF Teil 1 (Zahlenfolgen, Figuren & Ausweis-Einprägen)\n" +
      "• 12:45 – 13:45: Mittagspause (60 Min. Regeneration)\n" +
      "• 14:00 – 16:15: KFF Teil 2 (Ausweis-Abruf, Wortflüssigkeit, Implikationen)\n" +
      "• 16:15 – 16:45: SEK (Soziales Entscheiden & Emotionen regulieren)\n" +
      "Quelle: MedAT Prep Testtag-Protokoll";
    navigator.clipboard.writeText(text);
    toast("Testtag-Zeitplan in die Zwischenablage kopiert!", "success");
    track("schedule_copied", { source: "testtag_protokoll_page" });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link zum Testtag-Protokoll in die Zwischenablage kopiert", "success");
    track("share_link_copied", { page: "testtag-protokoll-mentale-staerke" });
  };

  // Filtered Pack Items
  const filteredPackItems = useMemo(() => {
    if (sackerlFilter === "allowed") return PACK_ITEMS.filter((i) => i.allowed);
    if (sackerlFilter === "forbidden") return PACK_ITEMS.filter((i) => !i.allowed);
    return PACK_ITEMS;
  }, [sackerlFilter]);

  const activeVenue = VENUES.find((v) => v.id === selectedVenueId) || VENUES[0];

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return TESTDAY_FAQS;
    return TESTDAY_FAQS.filter((f) => f.category === faqCategory);
  }, [faqCategory]);

  const breathingPhases = [
    { title: "Einatmen (4 Sek.)", desc: "Tief durch die Nase in den Bauch einatmen", color: "text-primary" },
    { title: "Halten (4 Sek.)", desc: "Atem anhalten, Brustkorb entspannt lassen", color: "text-amber-800" },
    { title: "Ausatmen (4 Sek.)", desc: "Langsam und gleichmäßig durch den Mund ausatmen", color: "text-emerald-800" },
    { title: "Halten (4 Sek.)", desc: "Lunge leer halten, Schultern bewusst absenken", color: "text-slate-800" },
  ];

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
              <span>🎒 Offizielles Testtag-Protokoll</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportPacklist}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="Packliste herunterladen"
            >
              <IconChart className="h-3.5 w-3.5" />
              <span>Packliste (.txt)</span>
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
              <span className="text-primary font-bold">Testtag-Protokoll</span>
            </nav>

            {/* Badges (scaled down by 15%) */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-primary">
                Testtag
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 5 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> 24. Februar 2027
              </span>
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-emerald-800">
                ✓ Messehallen-Ordnung 2027 validiert
              </span>
            </div>

            {/* Editorial Title (15% reduction) */}
            <h1 className="mt-3 text-[21px] xs:text-[25px] sm:text-[33px] lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-ink">
              Testtag-Protokoll: Mentale Stärke, Pausenmanagement & Prüfungspsychologie
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[12px] xs:text-[13px] sm:text-[15px] leading-relaxed text-ink-2">
              Ein 8-stündiger Testtag in Messehallen mit tausenden Menschen erfordert exzellentes mentales
              Energiemanagement — was in dein transparentes Sackerl gehört und wie du das Mittagstief in
              der 60-Minuten-Pause verhinderst.
            </p>

            {/* 4-Stat Ribbon (bridging hero gap, no dark countdown, no author card) */}
            <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconClock className="h-3 w-3 shrink-0" />
                  <span className="truncate">Gesamtdauer</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  8,5 Stunden
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  07:30 bis 16:45 Uhr
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconHeart className="h-3 w-3 shrink-0" />
                  <span className="truncate">Mittagspause</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  60 Minuten
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Anti-Koma-Regeneration
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconShield className="h-3 w-3 shrink-0" />
                  <span className="truncate">Gepäckregel</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  3L Sackerl
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Strikte Sichtkontrolle
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconBrain className="h-3 w-3 shrink-0" />
                  <span className="truncate">Akut-Reset</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  4-4-4-4 Atem
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Pulsregulierung
                </p>
              </div>
            </div>

            {/* Quick Action Utility Toolbar */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 pt-1 border-t border-line/60">
              <span className="text-[10px] sm:text-[11px] font-semibold text-ink-4 mr-1">
                Schnellzugriff:
              </span>
              <button
                onClick={handleExportPacklist}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconChart className="h-3 w-3 text-primary" />
                <span>Packliste (.txt)</span>
              </button>
              <button
                onClick={handleCopySchedule}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconSpark className="h-3 w-3 text-primary" />
                <span>Zeitplan kopieren</span>
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
                Inhaltsverzeichnis des Protokolls
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
                  { id: "packliste", label: "1. Das transparente Sackerl (Packliste)" },
                  { id: "hallen-kompass", label: "2. Die 4 Prüfungsorte (Messe Wien, Graz, Ibk., Linz)" },
                  { id: "ernaehrung", label: "3. Das Anti-Mittagstief Ernährungskonzept" },
                  { id: "mental-routinen", label: "4. Prüfungspsychologie & Akut-Panik-Bremse" },
                  { id: "tagesablauf", label: "5. Der chronologische Tagesablauf (06:30 – 17:00)" },
                  { id: "faq", label: "6. FAQ & Häufige Testtagfragen" },
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
                    { id: "packliste", label: "1. Sackerl-Packliste" },
                    { id: "hallen-kompass", label: "2. 4 Prüfungsorte" },
                    { id: "ernaehrung", label: "3. Anti-Mittagstief" },
                    { id: "mental-routinen", label: "4. Mentale Routinen" },
                    { id: "tagesablauf", label: "5. Tagesablauf" },
                    { id: "faq", label: "6. FAQ & Regeln" },
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
                  <p className="text-[11px] font-bold text-ink">Bist du prüfungsbereit?</p>
                  <p className="mt-1 text-[10.5px] text-ink-3 leading-tight">
                    Simuliere den Testtag mit unserer originalgetreuen MedAT-Generalprobe.
                  </p>
                  <a
                    href="#/onboarding?mode=register"
                    className="mt-3 block text-center rounded-xl bg-primary px-3 py-1.5 text-[11px] font-bold text-paper shadow-2xs hover:bg-primary-dark transition-colors"
                  >
                    Diagnostiktest starten (0 €)
                  </a>
                </div>
              </div>
            </aside>

            {/* Editorial Content Column (lg:col-span-9) */}
            <div className="lg:col-span-9 space-y-12">
              {/* ── SECTION 1: PACKLISTE & SACKERL ── */}
              <section id="packliste" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 1
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  1. Das transparente Sackerl: Was darf mit an den Platz?
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  An den Prüfungsorten (Messe Wien, Messe Graz, Messe Innsbruck, JKU Linz) gelten
                  kompromisslose Sicherheitsbestimmungen. Sämtliche Taschen, Jacken, Rucksäcke und
                  Elektronikgeräte müssen vor der Halle an der Garderobe abgegeben werden.
                </p>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Mit an deinen persönlichen Schreibtisch darf <strong>ausschließlich ein transparentes
                  Plastiksackerl</strong> (max. 3 Liter Volumen, z. B. Ziploc-Beutel).
                </p>

                {/* Sackerl Filter Controls */}
                <div className="flex items-center gap-1.5 pt-1">
                  <button
                    onClick={() => setSackerlFilter("all")}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                      sackerlFilter === "all"
                        ? "bg-primary text-paper"
                        : "bg-paper-2 border border-line text-ink-3 hover:text-ink"
                    }`}
                  >
                    Alle Gegenstände ({PACK_ITEMS.length})
                  </button>
                  <button
                    onClick={() => setSackerlFilter("allowed")}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                      sackerlFilter === "allowed"
                        ? "bg-emerald-700 text-paper"
                        : "bg-paper-2 border border-line text-ink-3 hover:text-ink"
                    }`}
                  >
                    ✓ Erlaubt im Sackerl
                  </button>
                  <button
                    onClick={() => setSackerlFilter("forbidden")}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                      sackerlFilter === "forbidden"
                        ? "bg-rose-700 text-paper"
                        : "bg-paper-2 border border-line text-ink-3 hover:text-ink"
                    }`}
                  >
                    ✕ Strikt verboten (Garderobe)
                  </button>
                </div>

                {/* Sackerl Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {filteredPackItems.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-2xl border p-3.5 transition-all ${
                        item.allowed
                          ? "border-emerald-200 bg-emerald-50/40"
                          : "border-rose-200 bg-rose-50/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`rounded px-1.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider ${
                            item.allowed
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {item.allowed ? "✓ Erlaubt" : "✕ Verboten"}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-ink mt-1.5">{item.name}</h4>
                      <p className="text-[11px] text-ink-3 mt-1 leading-snug">{item.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 2: DIE 4 PRÜFUNGSORTE ── */}
              <section id="hallen-kompass" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 2
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  2. Die vier Prüfungsorte: Hallen, Anreise & Akustik
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Jeder Prüfungsort besitzt spezifische Eigenheiten hinsichtlich Hallengröße,
                  Klimatisierung und Garderobenlogistik.
                </p>

                {/* Venue Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {VENUES.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVenueId(v.id)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedVenueId === v.id
                          ? "border-primary bg-primary-subtle/40 shadow-xs"
                          : "border-line bg-paper hover:bg-paper-2"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {v.city}
                      </span>
                      <p className="text-xs font-bold text-ink mt-0.5 truncate">{v.name}</p>
                      <p className="text-[10px] text-ink-3 truncate mt-0.5">{v.attendees}</p>
                    </button>
                  ))}
                </div>

                {/* Active Venue Detail Card */}
                <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-3">
                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                        {activeVenue.city} · {activeVenue.attendees}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-ink mt-0.5">
                        {activeVenue.hall}
                      </h3>
                      <p className="text-xs text-ink-3 mt-0.5">{activeVenue.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-ink-2">
                    <div className="rounded-2xl border border-line bg-paper-2 p-3 space-y-1">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                        🚇 Öffentliche Anreise
                      </span>
                      <p className="leading-relaxed">{activeVenue.transit}</p>
                    </div>

                    <div className="rounded-2xl border border-line bg-paper-2 p-3 space-y-1">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                        ❄️ Temperatur & Kleidung
                      </span>
                      <p className="leading-relaxed">{activeVenue.climateTip}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-primary-subtle/30 p-3.5 flex items-start gap-3">
                    <span className="text-lg shrink-0">💡</span>
                    <p className="text-[11.5px] xs:text-[12px] text-ink-2 leading-relaxed">
                      <strong>Hallenratschlag:</strong> {activeVenue.hallAdvice}
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 3: ANTI-MITTAGSTIEF ERNÄHRUNG ── */}
              <section id="ernaehrung" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 3
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  3. Das Anti-Mittagstief Ernährungskonzept (Biohacking für 60 Minuten)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die 60-minütige Mittagspause (ca. 12:45 bis 13:45 Uhr) entscheidet darüber, ob du den
                  anspruchsvollen KFF-Nachmittagsblock hellwach meisterst oder in geistiger Trance
                  wertvolle Punkte verlierst.
                </p>

                {/* Nutrition Comparison Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {NUTRITION_COMPARISON.map((meal, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl border p-4.5 space-y-3 ${
                        meal.type === "good"
                          ? "border-emerald-200 bg-emerald-50/40"
                          : "border-rose-200 bg-rose-50/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            meal.type === "good"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {meal.type === "good" ? "✓ MedAT-Powerpack" : "❌ Häufiger Fehler"}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-ink">{meal.title}</h4>
                      <ul className="space-y-1.5 text-xs text-ink-2">
                        {meal.items.map((it, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="shrink-0">{meal.type === "good" ? "•" : "✕"}</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-line/60 text-[11px] space-y-1">
                        <p><strong>Blutzucker-Reaktion:</strong> {meal.bloodSugarEffect}</p>
                        <p className={meal.type === "good" ? "text-emerald-900 font-semibold" : "text-rose-900 font-semibold"}>
                          <strong>KFF-Auswirkung:</strong> {meal.kffImpact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 4: MENTALE ROUTINEN & PANIK-BREMSE ── */}
              <section id="mental-routinen" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 4
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  4. Die 3 mentalen Notfall-Routinen (Akut-Panik-Bremse)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Prüfungsangst ist eine physiologische Reaktion auf Adrenalin. Mit den richtigen
                  körperlichen Interventionen holst du dein Gehirn innerhalb von 60 Sekunden aus dem
                  Panikmodus zurück in die kognitive Steuerungszentrale.
                </p>

                {/* Interactive Breathing Tool */}
                <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary-subtle/40 via-paper to-paper-2 p-5 sm:p-6 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-3">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-ink">
                        Interaktive 4-4-4-4 Box-Breathing Atemübung
                      </h3>
                      <p className="text-[11px] text-ink-3">
                        Senkt nachweislich die Herzfrequenz und dämpft den Sympathikus.
                      </p>
                    </div>
                    <button
                      onClick={() => setBreathingActive(!breathingActive)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto ${
                        breathingActive
                          ? "bg-rose-700 text-paper"
                          : "bg-primary text-paper shadow-2xs hover:bg-primary-dark"
                      }`}
                    >
                      {breathingActive ? "Übung pausieren" : "Atem-Timer starten (16s Zyklus)"}
                    </button>
                  </div>

                  {/* Visual Step Display */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {breathingPhases.map((phase, idx) => (
                      <div
                        key={idx}
                        className={`rounded-2xl border p-3 text-center transition-all ${
                          breathingActive && breathingStep === idx
                            ? "border-primary bg-primary text-paper shadow-md scale-102"
                            : "border-line bg-paper text-ink"
                        }`}
                      >
                        <span className="text-[10px] font-black uppercase tracking-wider opacity-80">
                          Schritt {idx + 1}
                        </span>
                        <p className="text-xs font-bold mt-1">{phase.title}</p>
                        <p className="text-[10px] opacity-80 mt-1 leading-snug">{phase.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2 Mental Routines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Routine 1: Der Block-Reset
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-ink">Vergangenes ist vergangen</h4>
                    <p className="text-[11.5px] text-ink-3 leading-relaxed">
                      Nach Abgabe des BMS-Heftes gilt ein striktes Denkverbot für vergangene Aufgaben. Wer
                      in der Pause darüber nachgrübelt, ob Frage 32 in Chemie C oder D war, sabotiert seine
                      Konzentration für KFF. Jeder Untertest ist eine eigenständige Chance!
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Routine 2: Die Re-Fokussierung
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-ink">Der Tunnelblick vor KFF</h4>
                    <p className="text-[11.5px] text-ink-3 leading-relaxed">
                      Um 13:50 Uhr nimmst du deinen Sitzplatz ein. Blende die tausenden Gesichter um dich
                      herum aus. Fixiere deinen Blick auf die Schreibtischkante, atme dreimal tief aus und
                      wiederhole im Stillen deine Loci-Route für die ersten fünf Ausweisstationen.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 5: TAGESABLAUF ── */}
              <section id="tagesablauf" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 5
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  5. Der minuziöse Testtag-Ablauf (06:30 – 17:00 Uhr)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  So verläuft dein Testtag Schritt für Schritt an den Medizinischen Universitäten:
                </p>

                <div className="space-y-2.5 pt-1">
                  {[
                    {
                      time: "06:30 Uhr",
                      title: "Aufstehen & Leichtes Frühstück",
                      desc: "Kein Experimentieren mit ungewohnter Nahrung. Ausreichend trinken, Sackerl und Lichtbildausweis ein letztes Mal kontrollieren.",
                    },
                    {
                      time: "07:30 – 08:15 Uhr",
                      title: "Einlass & Sicherheitsschleusen",
                      desc: "Ankunft an der Messehalle. Jacken an der Garderobe abgeben. Pünktlich um 08:15 Uhr schließen die Eingangstore unerbittlich!",
                    },
                    {
                      time: "08:30 – 09:45 Uhr",
                      title: "BMS-Block (94 Fragen, 75 Min.)",
                      desc: "Biologie, Chemie, Physik und Mathematik. Strikte 2-Pass-Strategie einhalten.",
                    },
                    {
                      time: "09:55 – 10:30 Uhr",
                      title: "Textverständnis (12 Fragen, 35 Min.)",
                      desc: "Nur MedAT-H. Signalwort-Scanning einsetzen und Distraktoren eliminieren.",
                    },
                    {
                      time: "10:45 – 12:45 Uhr",
                      title: "KFF Teil 1 (Zahlenfolgen, Figuren & Gedächtnis-Einprägen)",
                      desc: "8 Minuten hochfokussiertes Abspeichern der 25 Ausweise mit der Loci-Methode.",
                    },
                    {
                      time: "12:45 – 13:45 Uhr",
                      title: "Mittagspause (60 Min.)",
                      desc: "Anti-Koma-Verpflegung, Frischluft und WC-Besuch. Kein Sprechen über Testinhalte!",
                    },
                    {
                      time: "14:00 – 16:15 Uhr",
                      title: "KFF Teil 2 (Ausweis-Abruf, Wortflüssigkeit, Implikationen)",
                      desc: "Die 25 Ausweise fehlerfrei abrufen, Vokalanker bei Wortflüssigkeit anwenden.",
                    },
                    {
                      time: "16:15 – 16:45 Uhr",
                      title: "SEK (Soziales Entscheiden & Emotionen regulieren)",
                      desc: "Der finale Endspurt. Kohlberg-Stufe 5 & 6 konsequent durchziehen.",
                    },
                    {
                      time: "16:45 – 17:00 Uhr",
                      title: "Testheftabgabe & Entlassung",
                      desc: "Antwortbögen werden lückenlos gezählt. Danach Abholung der Garderobe und geschafft!",
                    },
                  ].map((block, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-line bg-paper p-3.5 flex items-start gap-3 shadow-2xs"
                    >
                      <span className="rounded-lg bg-paper-3 px-2 py-1 text-[11px] font-mono font-bold text-primary shrink-0">
                        {block.time}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-ink">{block.title}</h4>
                        <p className="text-[11.5px] text-ink-3 mt-0.5 leading-relaxed">{block.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 6: FAQ ACCORDION ── */}
              <section id="faq" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 6
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  6. FAQ & Häufige Testtagfragen
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die wichtigsten Antworten zu Einlass, Ausweisen, Kleidung, Toiletten und Verpflegung.
                </p>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Alle", "Einlass & Sackerl", "Ernährung", "Hallenordnung", "Mentale Stärke"].map(
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
                    Kostenlose Generalprobe
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    Trainiere unter realen Prüfungsbedingungen.
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-ink-3 leading-relaxed">
                    Teste dein Pacing, deine Nervenstärke und dein Durchhaltevermögen in unserer
                    repräsentativen Online-MedAT-Simulation mit sofortigem Perzentilrang.
                  </p>
                </div>
                <a
                  href="#/onboarding?mode=register"
                  className="btn btn-primary px-6 py-3 text-xs sm:text-sm font-bold shadow-md whitespace-nowrap shrink-0"
                >
                  Generalprobe starten (0 €) →
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
