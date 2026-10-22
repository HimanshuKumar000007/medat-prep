/**
 * src/pages/MedATTelegramPage.tsx
 *
 * Dedicated SEO Landing Page for the MedATprep Telegram Community:
 * URL: https://medatprep.at/medat-telegram-gruppe
 * Target: Austrian & EU candidates preparing for MedAT-H / MedAT-Z 2027.
 *
 * Features:
 * - Dynamic SEO meta injection (Document title, meta description, canonical, OG, Twitter)
 * - Structured Data JSON-LD (WebPage, BreadcrumbList, FAQPage)
 * - Section A: Hero with clear H1 & prominent Telegram CTA
 * - Section B: 5 core community purposes (Austausch, Lerntipps, Fragen, Motivation, Testbereiche)
 * - Section C: MedAT-H vs. MedAT-Z detailed comparison & focus areas
 * - Section D: Why study in a community (Strategies, peer explanations, repeaters' insights, consistency)
 * - Section E: Complementary preparation with MedATprep (5.000+ VMC questions, KFF tools, 4 Generalproben)
 * - Section F: 5-Question interactive FAQ Accordion
 * - Section G: Final conversion section
 * - 100% Austrian German (de-AT), responsive, accessible & brand-aligned design
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconArrowRight,
  IconCheck,
  IconChevron,
  IconShield,
  IconTarget,
  IconBrain,
  IconSpark,
  IconMolecule,
  IconPuzzle,
  IconTextLines,
  IconSend,
  IconUsers,
} from "../lib/icons";
import { track } from "../lib/core";

const TELEGRAM_URL = "https://t.me/medavorbereitung";

/* ── FAQ Data ─────────────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Wo finde ich eine Telegram-Gruppe für den MedAT 2027?",
    a: "Du kannst der offiziellen MedATprep Telegram-Community direkt über den Einladungslink t.me/medavorbereitung beitreten. Die Gruppe richtet sich an alle Bewerber:innen in Österreich, die sich auf den MedAT 2027 an der MedUni Wien, MedUni Graz, MedUni Innsbruck oder JKU Linz vorbereiten.",
  },
  {
    q: "Ist die MedATprep Telegram-Community für MedAT-H und MedAT-Z geeignet?",
    a: "Ja, absolut. Die Gruppe steht sowohl Kandidat:innen für Humanmedizin (MedAT-H) als auch für Zahnmedizin (MedAT-Z) offen. Da die gemeinsamen Blöcke BMS (40 %), KFF und SEK den Großteil beider Prüfungen ausmachen, profitieren alle Teilnehmer:innen voneinander. Zudem können sich Zahnmedizin-Bewerber:innen gezielt über die Manuellen Fertigkeiten (Drahtbiegen und Formen spiegeln) austauschen.",
  },
  {
    q: "Was kann ich in der MedAT Telegram-Gruppe machen?",
    a: "In der Gruppe kannst du dich mit anderen Bewerber:innen vernetzen, Lerntipps austauschen, Verständnisfragen zu BMS- und KFF-Aufgaben diskutieren, nützliche Ressourcen teilen und dich während der intensiven Vorbereitungsmonate gegenseitig motivieren. Die Community dient als kollegiale Plattform von und für MedAT-Kandidat:innen.",
  },
  {
    q: "Wie kann ich der MedAT Telegram-Community beitreten?",
    a: "Klicke einfach auf den Beitrittslink t.me/medavorbereitung auf dieser Seite. Wenn du Telegram bereits auf deinem Smartphone, Tablet oder Desktop installiert hast, öffnet sich die Gruppe automatisch. Falls nicht, kannst du Telegram vorab kostenlos im App Store, Google Play Store oder auf desktop.telegram.org herunterladen.",
  },
  {
    q: "Wo finde ich weitere Informationen zur MedAT-Vorbereitung?",
    a: "Umfassende Leitfäden, offizielle Fristen, Quoten-Analysen und didaktisch aufbereitete Lernpläne findest du auf unserer Website medatprep.at. Dort kannst du außerdem kostenlos ein persönliches Vorbereitungsprofil anlegen und mit über 5.000 originalgetreuen Übungsfragen sowie vollständigen Testsimulationen trainieren.",
  },
];

/* ── Community Purposes Data ───────────────────────────────────── */
const COMMUNITY_PURPOSES = [
  {
    title: "Austausch mit anderen MedAT-Kandidat:innen",
    desc: "Vernetze dich mit Bewerber:innen aus ganz Österreich und dem EU-Raum, die dasselbe Ziel vor Augen haben und sich auf Wien, Graz, Innsbruck oder Linz vorbereiten.",
    icon: IconUsers,
    tag: "Networking",
  },
  {
    title: "Lerntipps und Erfahrungen zur Vorbereitung teilen",
    desc: "Tausche dich über realistische Lernpläne, effektive Tagesroutinen und bewährte Strategien zur Zeiteinteilung während Matura, Studium oder Berufstätigkeit aus.",
    icon: IconBrain,
    tag: "Lernstrategie",
  },
  {
    title: "Fragen zur Prüfungsvorbereitung besprechen",
    desc: "Diskutiere knifflige Aufgaben aus dem offiziellen VMC-Stichwortkatalog, kläre offene Rechenwege ohne Taschenrechner und finde gemeinsam verständliche Lösungsansätze.",
    icon: IconTarget,
    tag: "Fachfragen",
  },
  {
    title: "Motivation und gegenseitige Unterstützung beim Lernen",
    desc: "Ein monatelanger Vorbereitungsmarathon fordert mentale Ausdauer. In der Community findest du Rückhalt, wenn der Lernstoff überwältigt, und Motivation für die nächste Lerneinheit.",
    icon: IconSpark,
    tag: "Mindset",
  },
  {
    title: "Über verschiedene Bereiche des MedAT sprechen",
    desc: "Gezielter Diskurs über alle Testteile: BMS (Biologie, Chemie, Physik, Mathe), KFF (Figuren, Zahlenfolgen, Wortflüssigkeit, Gedächtnis, Implikationen), SEK und Textverständnis.",
    icon: IconPuzzle,
    tag: "Alle Testteile",
  },
];

/* ── Deep-Dive Community Benefits Data ─────────────────────────── */
const MOTIVATION_PILLARS = [
  {
    title: "Lernstrategien gemeinsam reflektieren",
    text: "Jede:r lernt anders. Durch den Dialog mit Mitlernenden lernst du alternative Herangehensweisen kennen — von gezielten Active-Recall-Intervallen über optimierte Skripten bis hin zu Pacing-Tricks für zeitkritische Testblöcke.",
    badge: "Effizienz",
  },
  {
    title: "Schwierige Themen verständlich aufschlüsseln",
    text: "Oft erklärt ein:e andere:r Bewerber:in eine komplexe Stoffwechselkette in Biologie oder eine Dreisatz-Variante in Physik aus einem Blickwinkel, der sofort einleuchtet — oft schneller und anschaulicher als ein Standardlehrbuch.",
    badge: "Verständnis",
  },
  {
    title: "Erfahrungen von Wiederholer:innen nutzen",
    text: "In jeder Vorbereitungsphase sind Kandidat:innen dabei, die den Test bereits einmal mitgeschrieben haben. Ihre Einblicke in Testtag-Abläufe, Hallen-Akustik, Pausengestaltung und Zeitmanagement sind unbezahlbar.",
    badge: "Praxiserfahrung",
  },
  {
    title: "Verbindlichkeit gegen Aufschieberitis",
    text: "Wer alleine lernt, neigt eher zum Prokrastinieren. Der regelmäßige Austausch in der Gruppe schafft eine positive Verbindlichkeit und erinnert dich daran, kontinuierlich am Ball zu bleiben.",
    badge: "Disziplin",
  },
];

export default function MedATTelegramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // SEO: Dynamic Meta Tags & Structured Data Injection
  useEffect(() => {
    // 1. Page Title
    const originalTitle = document.title;
    document.title = "MedAT Telegram-Gruppe 2027 | MedATprep";

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : "";
    const targetDesc =
      "Du suchst eine MedAT Telegram-Gruppe für 2027? Tausche dich über MedAT-H, MedAT-Z und deine Vorbereitung aus und werde Teil der MedATprep Community.";

    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", targetDesc);

    // 3. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const originalCanonical = canonical ? canonical.getAttribute("href") : "";
    const targetCanonical = "https://medatprep.at/medat-telegram-gruppe";

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", targetCanonical);

    // 4. Open Graph Tags
    const ogTags: Record<string, string> = {
      "og:title": "MedAT Telegram-Gruppe 2027 | MedATprep",
      "og:description": targetDesc,
      "og:url": targetCanonical,
      "og:type": "website",
      "og:locale": "de_AT",
      "og:site_name": "MedAT Prep",
      "og:image": "https://medatprep.at/og-image.png",
    };

    const ogElements: { el: HTMLMetaElement; created: boolean; originalContent: string | null }[] = [];
    Object.entries(ogTags).forEach(([property, content]) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      let created = false;
      let originalContent: string | null = null;
      if (el) {
        originalContent = el.getAttribute("content");
      } else {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
        created = true;
      }
      el.setAttribute("content", content);
      ogElements.push({ el, created, originalContent });
    });

    // 5. JSON-LD Structured Data (WebPage, BreadcrumbList, FAQPage)
    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://medatprep.at/medat-telegram-gruppe#webpage",
          "url": "https://medatprep.at/medat-telegram-gruppe",
          "name": "MedAT Telegram-Gruppe 2027 | MedATprep",
          "description": targetDesc,
          "inLanguage": "de-AT",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://medatprep.at/#website",
            "url": "https://medatprep.at/",
            "name": "MedAT Prep",
            "description": "Interaktive E-Learning-Plattform zur Vorbereitung auf den österreichischen MedAT.",
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://medatprep.at/medat-telegram-gruppe#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Startseite",
              "item": "https://medatprep.at/",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "MedAT Telegram-Gruppe 2027",
              "item": "https://medatprep.at/medat-telegram-gruppe",
            },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": "https://medatprep.at/medat-telegram-gruppe#faq",
          "mainEntity": FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a,
            },
          })),
        },
      ],
    };

    let scriptTag = document.getElementById("medat-telegram-schema") as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "medat-telegram-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);

    // Scroll to top & track page view
    window.scrollTo(0, 0);
    track("page_view", { page: "medat-telegram-gruppe", topic: "community" });

    // Scroll listener for top progress bar
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc !== null) {
        metaDesc.setAttribute("content", originalDesc);
      }
      if (canonical && originalCanonical !== null) {
        canonical.setAttribute("href", originalCanonical);
      }
      ogElements.forEach(({ el, created, originalContent }) => {
        if (created) {
          el.remove();
        } else if (originalContent !== null) {
          el.setAttribute("content", originalContent);
        }
      });
      if (scriptTag) scriptTag.remove();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTelegramClick = (locationLabel: string) => {
    track("telegram_cta_click", { location: locationLabel, url: TELEGRAM_URL });
  };

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
              to="/"
              className="inline-flex items-center gap-1 rounded-lg py-1 text-xs sm:text-sm font-semibold text-ink-3 transition-colors hover:text-primary"
            >
              <span className="text-base leading-none">←</span>
              <span className="hidden sm:inline">Startseite</span>
            </Link>
            <div className="h-4 w-px bg-line" />
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5">
              <LogoMark className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="display text-[14px] sm:text-[17px] text-ink">
                MedAT <span className="font-sans font-medium text-slate-500">Prep</span>
              </span>
            </Link>
            <span className="hidden rounded-full border border-primary/20 bg-primary-subtle px-2.5 py-0.5 text-[11px] font-bold text-primary md:inline-flex items-center gap-1">
              <span>🇦🇹 Telegram-Community 2027</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors"
            >
              <span>Wissens-Hub</span>
            </Link>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleTelegramClick("header_button")}
              className="btn btn-primary btn-sm px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold shadow-sm inline-flex items-center gap-1.5"
            >
              <IconSend className="h-3.5 w-3.5" />
              <span>Telegram beitreten →</span>
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
        {/* ════════════════ SECTION A: HERO ════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-paper to-paper-2 py-12 sm:py-20 lg:py-24 border-b border-line">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(220,38,38,0.08), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="wrap relative">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 text-xs text-ink-3 flex items-center gap-2" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Wissens-Hub</Link>
              <span>/</span>
              <span className="text-ink font-semibold">MedAT Telegram-Gruppe</span>
            </nav>

            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-bold text-primary mb-5">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>🇦🇹 MedAT Telegram Gruppe 2027 · Offene Lerngruppe</span>
              </div>

              {/* H1 */}
              <h1 className="display text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.12] text-ink tracking-tight font-extrabold">
                MedAT Telegram-Gruppe 2027 – Gemeinsam für den MedAT lernen
              </h1>

              {/* Supporting Copy */}
              <p className="mt-5 text-[15px] sm:text-[18px] leading-relaxed text-ink-2 max-w-2xl">
                Du bereitest dich auf den MedAT 2027 in Österreich vor und suchst eine Möglichkeit, dich mit anderen Kandidat:innen auszutauschen? Werde Teil der MedATprep Telegram-Community und begleite deine Vorbereitung gemeinsam mit anderen angehenden Medizin- und Zahnmedizinstudierenden.
              </p>

              {/* Primary & Secondary Action Cluster */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleTelegramClick("hero_primary_cta")}
                  className="btn btn-primary h-13 px-6 sm:px-8 text-[15px] sm:text-[16px] font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2.5 rounded-xl"
                >
                  <IconSend className="h-5 w-5" />
                  <span>Telegram-Gruppe beitreten</span>
                </a>

                <Link
                  to="/"
                  className="btn btn-secondary h-13 px-5 sm:px-6 text-[14.5px] font-semibold rounded-xl border border-line hover:border-slate-400 hover:bg-paper-2 text-ink inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>MedATprep Plattform entdecken</span>
                  <span className="text-slate-400">→</span>
                </Link>
              </div>

              {/* Key Highlights Ribbon */}
              <div className="mt-9 pt-7 border-t border-line/70 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-ink-3">
                <span className="inline-flex items-center gap-1.5 font-medium text-ink-2">
                  <IconCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Kostenlos & unkompliziert</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-ink-2">
                  <IconCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Für MedAT-H & MedAT-Z</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-ink-2">
                  <IconCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Wien · Graz · Innsbruck · Linz</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-ink-2">
                  <IconCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Gegenseitige Unterstützung</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ SECTION B: COMMUNITY PURPOSES ════════════════ */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Inhalte & Austausch</span>
              <h2 className="display mt-2 text-[24px] sm:text-[32px] lg:text-[36px] text-ink font-bold">
                Was dich in der MedAT Telegram-Community erwartet
              </h2>
              <p className="mt-3 text-[14.5px] sm:text-[16px] leading-relaxed text-ink-3">
                Die Vorbereitung auf den MedAT in Österreich erfordert monatelange Disziplin. Die MedATprep Telegram-Gruppe bietet einen offenen, sachlichen Rahmen für gegenseitigen Austausch und kollegiales Lernen.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {COMMUNITY_PURPOSES.map((purpose, idx) => {
                const IconComponent = purpose.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl border border-line bg-paper-2/60 p-6 sm:p-7 transition-all duration-200 hover:border-primary/40 hover:bg-paper hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-paper text-primary shadow-2xs group-hover:bg-primary-subtle transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </span>
                        <span className="rounded-full bg-paper px-2.5 py-0.5 text-[11px] font-bold text-ink-3 border border-line">
                          {purpose.tag}
                        </span>
                      </div>
                      <h3 className="text-[17px] font-bold text-ink group-hover:text-primary transition-colors">
                        {purpose.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-ink-3">
                        {purpose.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-ink-4">
                      <span>Zweck {idx + 1} von 5</span>
                      <span className="font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Austausch starten →
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Extra Summary Box */}
              <div className="rounded-2xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/5 to-transparent p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold mb-3">
                    Mitmachen & Vernetzen
                  </span>
                  <h3 className="text-[18px] font-bold text-ink">
                    Einfach beitreten und mitdiskutieren
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-3">
                    Stelle deine Fragen, lies mit oder teile deine eigenen Erfahrungen aus der aktuellen Lernphase. Die Community lebt vom Mitmachen.
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleTelegramClick("purpose_card_cta")}
                    className="btn btn-primary w-full text-center text-xs sm:text-sm font-bold py-2.5 rounded-xl shadow-xs inline-flex items-center justify-center gap-1.5"
                  >
                    <IconSend className="h-3.5 w-3.5" />
                    <span>Jetzt der Community beitreten</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ SECTION C: MEDAT-H & MEDAT-Z ════════════════ */}
        <section className="py-14 sm:py-20 bg-paper-2 border-y border-line">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Prüfungsformate im Vergleich</span>
              <h2 className="display mt-2 text-[24px] sm:text-[32px] lg:text-[36px] text-ink font-bold">
                Für MedAT-H und MedAT-Z
              </h2>
              <p className="mt-3 text-[14.5px] sm:text-[16px] leading-relaxed text-ink-3">
                Die MedATprep Telegram-Community richtet sich sowohl an Kandidat:innen für Humanmedizin (MedAT-H) als auch für Zahnmedizin (MedAT-Z). Da sich die Prüfungsstrukturen in entscheidenden Bereichen unterscheiden, sprechen wir beide Zielgruppen gezielt an.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* MedAT-H Card */}
              <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
                    <div>
                      <span className="inline-block rounded-md bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                        Humanmedizin
                      </span>
                      <h3 className="display text-[22px] font-bold text-ink mt-1.5">
                        MedAT-H 2027
                      </h3>
                    </div>
                    <span className="text-2xl">🩺</span>
                  </div>

                  <p className="text-[14px] leading-relaxed text-ink-3 mb-5">
                    Für angehende Humanmediziner:innen an den Medizinischen Universitäten Wien, Graz, Innsbruck sowie der JKU Linz. Der Test setzt sich aus vier Hauptblöcken zusammen:
                  </p>

                  <ul className="space-y-3 text-[13.5px] text-ink-2">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">BMS (40 %):</strong> 94 Fragen in Biologie, Chemie, Physik und Mathematik nach offiziellem VMC-Katalog.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">KFF (40 %):</strong> Kognitive Fähigkeiten (Figuren, Zahlenreihen, Wortflüssigkeit, Gedächtnis, Implikationen).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">Textverständnis / TV (10 %):</strong> Komplexe medizinisch-naturwissenschaftliche Fachtexte unter striktem Zeitlimit.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">SEK (10 %):</strong> Sozial-emotionale Kompetenzen (Emotionen erkennen & regulieren, soziales Entscheiden).
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-line text-xs text-ink-4">
                  💡 <strong className="text-ink-3">Community-Fokus:</strong> Zeitmanagement bei TV, High-Yield-BMS-Konzepte und KFF-Geschwindigkeit.
                </div>
              </div>

              {/* MedAT-Z Card */}
              <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
                    <div>
                      <span className="inline-block rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                        Zahnmedizin
                      </span>
                      <h3 className="display text-[22px] font-bold text-ink mt-1.5">
                        MedAT-Z 2027
                      </h3>
                    </div>
                    <span className="text-2xl">🦷</span>
                  </div>

                  <p className="text-[14px] leading-relaxed text-ink-3 mb-5">
                    Für Zahnmedizin-Bewerber:innen in Wien, Graz und Innsbruck. Der Test ersetzt Textverständnis durch praktische handwerkliche Aufgaben:
                  </p>

                  <ul className="space-y-3 text-[13.5px] text-ink-2">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-600 font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">BMS (40 %):</strong> Identischer Fragenkatalog und Stoffumfang wie bei MedAT-H.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-600 font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">Manuelle Fertigkeiten / MF (30 %):</strong> Drahtbiegen und Formen spiegeln — entscheidet oft über die Zulassung.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-600 font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">KFF (20 %):</strong> Kognitive Fertigkeiten mit angepasster Zeit- und Aufgabenstruktur.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-600 font-bold text-[10px]">
                        ✓
                      </span>
                      <span>
                        <strong className="text-ink">SEK (10 %):</strong> Sozial-emotionale Kompetenzen analog zum Humanmedizin-Test.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-line text-xs text-ink-4">
                  💡 <strong className="text-ink-3">Community-Fokus:</strong> Werkzeug-Tipps (Zangen & Draht), Fehlertoleranzen bei Figuren und Spiegelungs-Übungen.
                </div>
              </div>
            </div>

            {/* In-Section CTA */}
            <div className="mt-8 text-center">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleTelegramClick("tracks_section_cta")}
                className="btn btn-primary px-6 sm:px-8 py-3 text-sm font-bold rounded-xl shadow-xs inline-flex items-center gap-2"
              >
                <IconSend className="h-4 w-4" />
                <span>Jetzt der MedAT-Community beitreten →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════ SECTION D: WHY JOIN A COMMUNITY ════════════════ */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Vorbereitungsstrategie</span>
              <h2 className="display mt-2 text-[24px] sm:text-[32px] lg:text-[36px] text-ink font-bold">
                Gemeinsam motiviert durch die MedAT-Vorbereitung
              </h2>
              <p className="mt-3 text-[14.5px] sm:text-[16px] leading-relaxed text-ink-3">
                Die Vorbereitung auf den Medizin-Aufnahmetest verlangt weit mehr als das Auswendiglernen von Lehrbüchern. Eine engagierte Lerngruppe kann helfen, Hürden früher zu erkennen und über Monate fokussiert zu bleiben.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {MOTIVATION_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-paper-2/40 p-6 sm:p-7 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-[11px] font-bold">
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-ink-4">0{idx + 1}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-3">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Balanced Notice Box */}
            <div className="mt-8 rounded-2xl border border-line bg-paper-2 p-5 text-xs sm:text-sm text-ink-3 leading-relaxed flex items-start gap-3">
              <span className="text-lg shrink-0">📌</span>
              <p>
                <strong>Hinweis zur Vorbereitung:</strong> Eine Lerngruppe oder Telegram-Community bietet wertvollen Austausch und Motivation, ersetzt jedoch nicht deine eigene, kontinuierliche Auseinandersetzung mit dem Prüfungsstoff und das aktive Lösen von Testfragen.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════ SECTION E: MEDATPREP PLATFORM ════════════════ */}
        <section className="py-14 sm:py-20 bg-night text-paper relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 20% 20%, rgba(220,38,38,0.3), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="wrap relative">
            <div className="max-w-2xl">
              <span className="eyebrow text-[#F87171]">Plattform & Werkzeuge</span>
              <h2 className="display mt-2 text-[24px] sm:text-[32px] lg:text-[36px] text-paper font-bold">
                Ergänze deine Vorbereitung mit MedATprep
              </h2>
              <p className="mt-3 text-[14.5px] sm:text-[16px] leading-relaxed text-slate-300">
                Die Telegram-Gruppe ist der Ort für schnelle Fragen und gegenseitigen Austausch. Auf der MedATprep-Plattform findest du das strukturierte Trainingssystem für deinen täglichen Übungsdrill.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-night-2 bg-night-2/60 p-5 sm:p-6">
                <span className="text-2xl mb-3 block">📚</span>
                <h3 className="text-[16px] font-bold text-paper">5.000+ Übungsfragen</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Strikte Orientierung am offiziellen VMC-Stichwortkatalog mit ausführlichen Erklärungen und Rechenwegen.
                </p>
              </div>

              <div className="rounded-2xl border border-night-2 bg-night-2/60 p-5 sm:p-6">
                <span className="text-2xl mb-3 block">🧩</span>
                <h3 className="text-[16px] font-bold text-paper">KFF-Simulatoren</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Interaktive Generatoren für Zahlenfolgen, Loci-Gedächtnistrainer und Figuren zusammensetzen.
                </p>
              </div>

              <div className="rounded-2xl border border-night-2 bg-night-2/60 p-5 sm:p-6">
                <span className="text-2xl mb-3 block">⏱️</span>
                <h3 className="text-[16px] font-bold text-paper">4 Generalproben</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Vollständige 5,5-Stunden-Simulationen mit exaktem Zeitdruck und realistischer Perzentilrang-Auswertung.
                </p>
              </div>

              <div className="rounded-2xl border border-night-2 bg-night-2/60 p-5 sm:p-6">
                <span className="text-2xl mb-3 block">🎯</span>
                <h3 className="text-[16px] font-bold text-paper">Adaptiver Fehler-Hub</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Automatisches Erkennen deiner individuellen Wissenslücken für gezielte Wiederholung ohne Zeitverlust.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-night-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/onboarding"
                className="btn btn-primary h-12 px-6 text-sm font-bold shadow-md rounded-xl inline-flex items-center justify-center gap-2"
              >
                <span>Kostenlos auf MedATprep starten →</span>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center h-12 px-5 text-sm font-semibold rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-paper transition-colors"
              >
                <span>Zur MedATprep Startseite</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════ SECTION F: FAQ ACCORDION ════════════════ */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap max-w-3xl">
            <div className="text-center">
              <span className="eyebrow text-primary">Transparente Antworten</span>
              <h2 className="display mt-2 text-[24px] sm:text-[32px] lg:text-[36px] text-ink font-bold">
                Häufige Fragen zur MedAT Telegram-Gruppe
              </h2>
              <p className="mt-3 text-[14.5px] sm:text-[16px] text-ink-3">
                Wichtige Informationen zum Beitritt, den Testformaten und der Nutzung der Community.
              </p>
            </div>

            <div className="mt-10 space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-line bg-paper-2/40 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-paper-2/80 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15.5px] sm:text-[17px] font-bold text-ink pr-4">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink-3 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <IconChevron className="h-4 w-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-[14px] sm:text-[14.5px] leading-relaxed text-ink-2 border-t border-line/50 animate-fade-in">
                        <p className="pt-3">{faq.a}</p>
                        {idx === 0 || idx === 3 ? (
                          <div className="mt-3.5">
                            <a
                              href={TELEGRAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => handleTelegramClick(`faq_link_${idx}`)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                            >
                              <IconSend className="h-3 w-3" />
                              <span>Direkt zur Telegram-Gruppe (t.me/medavorbereitung) →</span>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════════ SECTION G: FINAL CONVERSION ════════════════ */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-paper-2 to-paper border-t border-line">
          <div className="wrap max-w-3xl text-center">
            <span className="eyebrow text-primary">Community 2027</span>
            <h2 className="display mt-2 text-[26px] sm:text-[34px] lg:text-[40px] text-ink font-bold">
              Bereit für deine MedAT-Vorbereitung?
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-ink-2 max-w-xl mx-auto">
              Vernetze dich mit anderen Kandidat:innen und tausche dich über deinen Weg zum MedAT aus.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleTelegramClick("final_cta_button")}
                className="btn btn-primary h-13 px-8 text-[15px] sm:text-[16px] font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 rounded-xl w-full sm:w-auto"
              >
                <IconSend className="h-5 w-5" />
                <span>Jetzt der Telegram-Community beitreten</span>
              </a>

              <Link
                to="/"
                className="btn btn-secondary h-13 px-6 text-[14.5px] font-semibold rounded-xl border border-line hover:border-slate-400 text-ink inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Zur MedATprep Startseite</span>
              </Link>
            </div>

            <p className="mt-6 text-xs text-ink-4">
              Kostenlose Lerngruppe · Keine Anmeldegebühr · Wien, Graz, Innsbruck & Linz
            </p>
          </div>
        </section>
      </main>

      {/* ════════════════ FOOTER ════════════════ */}
      <Footer />
    </div>
  );
}
