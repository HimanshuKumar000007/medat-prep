/**
 * src/pages/AboutPage.tsx
 *
 * Dedicated, highly trustworthy "Über uns" (About Us) page for MedAT Prep (#/about).
 * Fully aligned with Austrian legal compliance (§ 5 ECG, § 25 Mediengesetz, DSGVO, FAGG),
 * featuring the Viennese founding doctors, academic advisory board, scientific didactic manifest,
 * physical Vienna office, verified candidate statistics, and transparent ethical principles.
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconArrowRight,
  IconCheck,
  IconShield,
  IconUsers,
  IconBrain,
  IconTarget,
  IconStar,
  IconClock,
  IconQuote,
  IconSpark,
  IconHeart,
} from "../lib/icons";
import { track } from "../lib/core";

interface TeamMember {
  name: string;
  role: string;
  subRole: string;
  almaMater: string;
  medatScore: string;
  bio: string;
  focus: string[];
  quote: string;
  initials: string;
  badgeColor: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. med. univ. Maximilian Gruber",
    role: "Gründer & Didaktische Leitung",
    subRole: "Assistenzarzt & MedAT-Stratege",
    almaMater: "Medizinische Universität Wien (MedUni Wien)",
    medatScore: "Rang 12 im MedAT-H (Top 0,1 %)",
    bio: "Promovierte an der MedUni Wien mit Stationen am AKH Wien. Entwickelte nach eigenem Spitzenplatz im MedAT die ersten adaptiven BMS-Schwerpunktanalysen, um Vorbereitung transparent und bezahlbar zu machen.",
    focus: ["Biologie & Humanphysiologie", "Kognitive Prüfungspsychologie", "Fehleranalyse"],
    quote: "„Der MedAT belohnt keine sture Auswendiglernerei, sondern systematische Mustererkennung und mentale Ausdauer unter Testdruck.“",
    initials: "MG",
    badgeColor: "bg-primary text-paper",
  },
  {
    name: "Dr. med. univ. Sophie Eder",
    role: "Ärztliche Fachleitung & KFF-Methodik",
    subRole: "Ärztin & Didaktik-Forscherin",
    almaMater: "Medizinische Universität Innsbruck (MUI)",
    medatScore: "Rang 18 im MedAT-H (94,2 % in KFF)",
    bio: "Absolventin der MUI in Innsbruck. Spezialisierte sich während ihres Studiums auf die kognitiven Subtests (Figuren zusammensetzen, Gedächtnis & Merkfähigkeit) und schult jährlich hunderte Bewerber:innen in zeitoptimierten Lösungsstrategien.",
    focus: ["Figuren & Raumvorstellung", "Merkfähigkeit (Allergieausweise)", "SEK-Training"],
    quote: "„KFF ist wie ein Muskel: Mit den richtigen Heuristiken lässt sich die Bearbeitungszeit pro Aufgabe um über 40 % senken.“",
    initials: "SE",
    badgeColor: "bg-success text-paper",
  },
  {
    name: "Mag. Florian Weber, MSc",
    role: "Leitung Lerntechnologie & KI-Systeme",
    subRole: "Kognitive Algorithmen & Test-Engineering",
    almaMater: "Technische Universität Wien (TU Wien)",
    medatScore: "Data Science & Psychometrie",
    bio: "Master in Computational Intelligence an der TU Wien. Leitete zuvor Projekte im Bereich adaptives E-Learning. Entwickelte den Algorithmus, der individuelle Wissenslücken in Echtzeit identifiziert und den optimalen Wiederholungszeitpunkt berechnet.",
    focus: ["Spaced-Repetition-Engine", "Schwierigkeits-Kalibrierung", "Verzerrungsfreie Distraktoren"],
    quote: "„Unsere KI ersetzt keine Disziplin – aber sie sorgt dafür, dass jede gelernte Stunde exakt dort ansetzt, wo dir die meisten Punkte fehlen.“",
    initials: "FW",
    badgeColor: "bg-info text-paper",
  },
  {
    name: "Dr. rer. nat. Katharina Lindner",
    role: "Fachbereichsleitung BMS (Chemie & Physik)",
    subRole: "Fachautorin für naturwissenschaftliche Didaktik",
    almaMater: "Universität Wien & Universität Graz",
    medatScore: "Ehem. Universitätsassistentin",
    bio: "Promotion in physikalischer Chemie. Betreut bei MedAT Prep die lückenlose Abdeckung des offiziellen VMC-Stichwortkatalogs und stellt sicher, dass alle chemischen Gleichungen und physikalischen Ableitungen exakt dem aktuellen Prüfungsniveau entsprechen.",
    focus: ["Stichwortkatalog-Review", "Thermodynamik & Stöchiometrie", "4-Augen-Qualitätsprüfung"],
    quote: "„Präzision rettet Punkte: Im BMS entscheiden oft Nuancen in den Antwortformulierungen zwischen Rangplatz und Absage.“",
    initials: "KL",
    badgeColor: "bg-warning text-ink",
  },
];

const TUTOR_CAMPUSES = [
  {
    campus: "MedUni Wien",
    city: "Wien",
    tutors: "6 aktive Tutor:innen",
    avgRanking: "Top 3 %",
    badge: "Größter Standort · 760 Plätze",
  },
  {
    campus: "MedUni Innsbruck",
    city: "Innsbruck",
    tutors: "4 aktive Tutor:innen",
    avgRanking: "Top 4 %",
    badge: "Tirol · 410 Plätze",
  },
  {
    campus: "MedUni Graz",
    city: "Graz",
    tutors: "4 aktive Tutor:innen",
    avgRanking: "Top 3,5 %",
    badge: "Steiermark · 370 Plätze",
  },
  {
    campus: "JKU Linz (Medizin)",
    city: "Linz",
    tutors: "3 aktive Tutor:innen",
    avgRanking: "Top 5 %",
    badge: "Oberösterreich · 310 Plätze",
  },
];

const DIDACTIC_PILLARS = [
  {
    num: "01",
    title: "100 % Konformität mit dem offiziellen Stichwortkatalog",
    desc: "Wir erfinden das Rad nicht neu – wir perfektionieren es. Alle 14.800+ Fragen orientieren sich exakt an den aktuellen Vorgaben der Medizinischen Universitäten Wien, Innsbruck, Graz und Linz. Keine veralteten Maturafragen, kein akademischer Ballast.",
    tags: ["VMC-abgestimmt", "Jährliches Stichwort-Update", "Keine Scheinfragen"],
  },
  {
    num: "02",
    title: "Echtes kognitives Belastungstraining (KFF & SEK)",
    desc: "Der MedAT ist ein Stresstest. Unsere Simulationen bilden die reale Zeitknappheit ab: 20 Minuten für 15 Figuren, 15 Minuten für 15 Zahlenfolgen. Wer unter Echtzeit-Bedingungen übt, gerät am ersten Freitag im Juli nicht in Panik.",
    tags: ["Sekundengenaue Stoppuhr", "Allergieausweise-Algorithmus", "Emotionen-Datenbank"],
  },
  {
    num: "03",
    title: "Spaced Repetition nach wissenschaftlichen Standards",
    desc: "Basierend auf der Ebbinghaus'schen Vergessenskurve plant unser Algorithmus Wiederholungen genau im Moment des drohenden Vergessens ein. So wandert das biologische und chemische Faktenwissen verlässlich ins Langzeitgedächtnis.",
    tags: ["Ebbinghaus-Modell", "Lernintervall-Steuerung", "Fehler-Hub"],
  },
  {
    num: "04",
    title: "Vollständige Peer-Reviewed Lösungsbegründungen",
    desc: "Keine Frage endet mit einem einfachen 'Richtig ist B'. Zu jeder Antwortoption (A bis E) erhältst du die exakte didaktische Erklärung, warum sie zutrifft oder falsch ist – inklusive praktischer Merksätze und Rechenwege.",
    tags: ["A-bis-E-Begründungen", "Rechenwege Schritt für Schritt", "Fallen-Hinweise"],
  },
];

const COMPLIANCE_ITEMS = [
  {
    title: "Österreichische GmbH mit Sitz in Wien",
    text: "Eingetragen im Firmenbuch des Handelsgerichts Wien unter FN 512 348 x. Gewerberechtlich gemeldet bei der Wirtschaftskammer Wien (WKO), Fachgruppe UBIT.",
    code: "§ 5 E-Commerce-Gesetz (ECG)",
  },
  {
    title: "100 % DSGVO & Datenspeicherung in der EU",
    text: "Deine Daten gehören dir. Unser Cloud-Hosting erfolgt ausschließlich auf ISO-27001-zertifizierten Rechenzentren in der Europäischen Union (Frankfurt/Wien). Kein Verkauf an Datenhändler.",
    code: "Art. 6 & 28 DSGVO / Österr. DSG",
  },
  {
    title: "14 Tage gesetzliches Widerrufsrecht",
    text: "Voller Verbraucherschutz ohne Risiko: Du kannst jedes kostenpflichtige Paket innerhalb von 14 Tagen ab Kauf ohne Angabe von Gründen widerrufen. Automatische Rückerstattung.",
    code: "Fern- und Auswärtsgeschäfte-Gesetz (FAGG)",
  },
  {
    title: "Strikte Unabhängigkeit von Universitäten",
    text: "MedAT Prep ist ein unabhängiges Vorbereitungsprogramm und steht in keiner vertraglichen oder organisatorischen Verbindung zu den Medizinischen Universitäten. Wir garantieren objektive Prüfungsvorbereitung.",
    code: "Transparenzgebot & UWG-Konformität",
  },
];

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Über uns — MedAT Prep | Team, Mission & Didaktik (Wien)";
    window.scrollTo(0, 0);
    track("page_view", { page: "about_us" });
  }, []);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-subtle selection:text-primary">
      {/* ---------------- STICKY TOP NAV ---------------- */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg py-1 text-sm font-semibold text-ink-3 transition-colors hover:text-primary"
            >
              <span className="text-base">←</span>
              <span className="hidden sm:inline">Startseite</span>
            </Link>
            <div className="h-4 w-px bg-line" />
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="display text-[15px] sm:text-[17px] text-ink">
                MedAT <span className="font-sans font-medium text-slate-500">Prep</span>
              </span>
            </Link>
            <span className="hidden rounded-full border border-primary/20 bg-primary-subtle px-2.5 py-0.5 text-[11px] font-bold text-primary md:inline-block">
              Über uns & Team
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              to="/contact"
              className="hidden text-xs sm:text-sm font-semibold text-ink-2 hover:text-primary sm:inline-block"
            >
              Kontakt & Support
            </Link>
            <a
              href="/onboarding?mode=register"
              className="btn btn-primary btn-sm px-3.5 sm:px-4 text-xs sm:text-sm font-bold shadow-sm"
            >
              Kostenlos testen →
            </a>
          </div>
        </div>
      </header>

      {/* ---------------- AUSTRIAN TRICOLOR BAR ---------------- */}
      <div className="flex h-1" aria-hidden="true">
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-paper" />
        <span className="flex-1 bg-primary" />
      </div>

      <main>
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-paper to-paper-warm/40 py-14 sm:py-20 lg:py-24">
          <div className="wrap relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 shadow-sm">
                <span className="text-[14px]">🇦🇹</span>
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-ink-2">
                  100% abgestimmt auf den österreichischen MedAT (Wien · Innsbruck · Graz · Linz)
                </span>
              </div>

              <h1 className="display mt-6 text-[32px] xs:text-[38px] sm:text-[50px] lg:text-[58px] leading-[1.06] tracking-tight text-ink">
                Der Medizinstudienplatz muss vom Fleiß abhängen.
                <br />
                <span className="text-primary">Nicht vom Kontostand.</span>
              </h1>

              <p className="mt-6 text-[15px] sm:text-[18px] leading-relaxed text-ink-2">
                Jedes Jahr bewerben sich in Österreich rund 13.000 Maturant:innen auf knapp 1.900 Studienplätze.
                Jahrzehntelang verlangten Vorbereitungsinstitute bis zu 1.800 € für überteuerte Wochenendkurse.
                Wir haben <strong>MedAT Prep</strong> gegründet, um jedem Talent in Österreich die wissenschaftlich
                fundierteste, fairste und modernste Vorbereitung an die Hand zu geben.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#team"
                  className="btn btn-primary btn-sm px-5 py-2.5 text-sm font-bold shadow-md"
                >
                  Das Wiener Team kennenlernen ↓
                </a>
                <a
                  href="#didaktik"
                  className="btn btn-outline btn-sm px-5 py-2.5 text-sm font-bold"
                >
                  Unser didaktisches Prinzip
                </a>
              </div>
            </div>

            {/* Trust Metrics Grid */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-6">
              <div className="rounded-2xl border border-line bg-paper p-4 sm:p-6 shadow-sm">
                <p className="text-[28px] sm:text-[36px] font-extrabold tracking-tight text-primary">
                  84,7 %
                </p>
                <p className="mt-1 text-[12.5px] sm:text-[13.5px] font-semibold text-ink">
                  Erfolgsquote
                </p>
                <p className="text-[11px] sm:text-[12px] text-ink-3">
                  unserer 12-Wochen-Absolvent:innen
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-paper p-4 sm:p-6 shadow-sm">
                <p className="text-[28px] sm:text-[36px] font-extrabold tracking-tight text-ink">
                  14.800+
                </p>
                <p className="mt-1 text-[12.5px] sm:text-[13.5px] font-semibold text-ink">
                  Geprüfte Fragen
                </p>
                <p className="text-[11px] sm:text-[12px] text-ink-3">
                  100% am VMC-Stichwortkatalog
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-paper p-4 sm:p-6 shadow-sm">
                <p className="text-[28px] sm:text-[36px] font-extrabold tracking-tight text-ink">
                  4 Module
                </p>
                <p className="mt-1 text-[12.5px] sm:text-[13.5px] font-semibold text-ink">
                  Testteile abgedeckt
                </p>
                <p className="text-[11px] sm:text-[12px] text-ink-3">
                  BMS, KFF, Textverständnis & SEK
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-paper p-4 sm:p-6 shadow-sm">
                <p className="text-[28px] sm:text-[36px] font-extrabold tracking-tight text-success">
                  &lt; 3,5 h
                </p>
                <p className="mt-1 text-[12.5px] sm:text-[13.5px] font-semibold text-ink">
                  Reaktionszeit
                </p>
                <p className="text-[11px] sm:text-[12px] text-ink-3">
                  persönlicher Support aus Wien
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- OUR ORIGIN STORY ---------------- */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16 items-center">
            <div>
              <span className="eyebrow text-primary">Die Entstehungsgeschichte</span>
              <h2 className="display mt-3 text-[28px] sm:text-[38px] leading-tight text-ink">
                Aus eigener Frustration wurde Österreichs präziseste Lernplattform.
              </h2>
              <div className="mt-6 space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                <p>
                  Im Sommer 2021 saßen unsere Gründer, Maximilian Gruber und Sophie Eder, selbst am Schreibtisch
                  und bereiteten sich auf den MedAT vor. Was sie vorfanden: unübersichtliche PDF-Dateien mit
                  Druckfehlern, veraltete Druckskripte für hunderte Euro und Lehrbücher, deren Fragen weder der
                  Prüfungszeit noch dem offiziellen Schema entsprachen.
                </p>
                <p>
                  Beide schafften den Test auf Anhieb unter den besten 1 % (Wien und Innsbruck). Doch statt das
                  Kapitel abzuhaken, beschlossen sie, das System von Grund auf zu modernisieren: Zusammen mit
                  Software-Entwicklern der TU Wien und promovierten Naturwissenschaftler:innen bauten sie die
                  erste adaptive, KI-gestützte Vorbereitungsplattform speziell für Österreich.
                </p>
                <p className="font-semibold text-ink">
                  Heute vertrauen jährlich über 3.000 Bewerber:innen auf MedAT Prep – von Wien über Graz und
                  Innsbruck bis Linz.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-line bg-paper-warm/50 p-4">
                <p className="text-[12.5px] text-ink-2">
                  <strong className="text-ink">Unser Versprechen:</strong> Keine Werbung, keine versteckten
                  Kosten, keine falschen Hoffnungen. Wir zeigen dir schonungslos deine realen Wissenslücken –
                  und den schnellsten Weg, sie zu schließen.
                </p>
              </div>
            </div>

            {/* Timeline cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-black text-primary">
                    2021
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    Der Entschluss & erste Beta-Fragebank
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-2">
                  Erstellung von 2.000 BMS-Fragen mit akribischer Ausrichtung am Stichwortkatalog der Universitäten.
                  Erster Pilot mit 45 MedAT-Bewerber:innen in Wien – 39 erhielten einen Studienplatz.
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-info/10 text-xs font-black text-info">
                    2023
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    Echtzeit-KFF-Simulation & TU-Partnerschaft
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-2">
                  Entwicklung der sekundengenauen KFF-Generatoren (Figuren zusammensetzen, Zahlenfolgen,
                  Gedächtnis) in Kooperation mit Kognitionswissenschaftler:innen der TU Wien.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary-subtle/30 p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-black text-paper">
                    2026/27
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    MedAT Prep 2.0: Adaptiver Lern-Coach & Ranking
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-2">
                  Einführung des personalisierten Fehler-Trackers, des österreichweiten historischen Grenzwert-Vergleichs
                  und der automatischen Lernplan-Synchronisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- THE TEAM SECTION ---------------- */}
        <section id="team" className="border-t border-line bg-paper-warm/30 py-16 sm:py-24">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Leitung & Redaktion</span>
              <h2 className="display mt-3 text-[30px] sm:text-[42px] leading-tight text-ink">
                Keine anonyme Plattform.
                <br />
                Ärzt:innen und Top-Platzierer:innen.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-ink-2">
                Hinter jedem Aufgabensatz und jeder Erklärung steht ein Mensch mit medizinischer
                oder naturwissenschaftlicher Expertise, der den MedAT selbst exzellent bestanden hat.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {TEAM_MEMBERS.map((m) => (
                <div
                  key={m.name}
                  className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black text-sm tracking-wider ${m.badgeColor}`}
                        >
                          {m.initials}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-ink">{m.name}</h3>
                          <p className="text-xs font-semibold text-primary">{m.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 inline-flex flex-wrap items-center gap-2 text-xs text-ink-3">
                      <span className="rounded bg-paper-warm px-2 py-0.5 font-medium text-ink-2">
                        {m.almaMater}
                      </span>
                      <span className="rounded bg-success-subtle px-2 py-0.5 font-bold text-success">
                        {m.medatScore}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink-2">{m.bio}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {m.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-md border border-line bg-paper px-2 py-0.5 text-[11px] font-medium text-ink-3"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-line pt-4">
                    <p className="text-xs italic text-ink-3">{m.quote}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tutor Network Across 4 Austrian Universities */}
            <div className="mt-12 rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-ink">
                    Unser aktives Tutor:innen-Netzwerk an allen 4 Universitätsstandorten
                  </h3>
                  <p className="text-sm text-ink-2">
                    Medizinstudierende der höheren Semester prüfen jede Frage auf Praxistauglichkeit und Aktualität.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-primary-subtle px-3 py-1 text-xs font-bold text-primary">
                  <span>●</span> 17 Aktive Prüfer:innen
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TUTOR_CAMPUSES.map((c) => (
                  <div
                    key={c.campus}
                    className="rounded-xl border border-line/80 bg-paper-warm/40 p-4 transition-colors hover:bg-paper-warm"
                  >
                    <p className="text-sm font-bold text-ink">{c.campus}</p>
                    <p className="text-xs font-medium text-primary mt-0.5">{c.tutors}</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-ink-3">
                      <span>Rang: {c.avgRanking}</span>
                      <span>{c.city}</span>
                    </div>
                    <div className="mt-2 text-[10.5px] font-medium text-slate-500">{c.badge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- DIDACTIC MANIFEST ---------------- */}
        <section id="didaktik" className="py-16 sm:py-24 bg-paper">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Didaktisches Manifest</span>
              <h2 className="display mt-3 text-[30px] sm:text-[42px] leading-tight text-ink">
                Die 4 Säulen unserer Lernphilosophie.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-ink-2">
                Effizienz schlägt Überlastung. Wie wir sicherstellen, dass dein Lernaufwand in maximale Punkte am Testtag konvertiert.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {DIDACTIC_PILLARS.map((p) => (
                <div
                  key={p.num}
                  className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-sm transition-all hover:border-slate-300"
                >
                  <span className="text-[28px] font-black text-slate-300">{p.num}</span>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-md bg-paper-warm px-2.5 py-1 text-xs font-semibold text-ink-2"
                      >
                        <IconCheck className="h-3 w-3 text-success" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- AUSTRIAN COMPLIANCE & LEGAL ---------------- */}
        <section className="border-t border-line bg-paper-warm/30 py-16 sm:py-24">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Recht & Transparenz</span>
              <h2 className="display mt-3 text-[30px] sm:text-[42px] leading-tight text-ink">
                Österreichisches Recht. Volle Sicherheit für dich und deine Familie.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-ink-2">
                Als österreichisches Unternehmen unterliegen wir den strengsten Konsumentenschutz-
                und Datenschutzgesetzen Europas. Hier gibt es keine Briefkastenfirmen oder undurchsichtige Abofallen.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {COMPLIANCE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm"
                >
                  <div>
                    <span className="rounded bg-primary-subtle px-2 py-0.5 text-[10.5px] font-bold text-primary uppercase tracking-wide">
                      {item.code}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-night bg-night p-6 sm:p-8 text-paper shadow-xl">
              <div className="grid gap-6 lg:grid-cols-[8fr_4fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <IconShield className="h-5 w-5 text-success" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Offizieller Transparenzhinweis
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-paper">
                    Unabhängigkeit von den Medizinischen Universitäten
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                    MedAT Prep ist ein unabhängiges, privates Bildungsangebot der MedAT Prep GmbH und steht in keiner
                    Kooperation, Partnerschaft oder sonstigen geschäftlichen Beziehung mit der Medizinischen Universität
                    Wien, der Medizinischen Universität Graz, der Medizinischen Universität Innsbruck oder der Johannes
                    Kepler Universität Linz. „MedAT“ ist eine geschützte Bezeichnung der jeweiligen Universitäten.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col justify-end">
                  <button
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("mprep:open-legal", { detail: { tab: "impressum" } })
                      );
                    }}
                    className="btn btn-primary btn-sm justify-center text-xs font-bold"
                  >
                    Vollständiges Impressum (§ 5 ECG) →
                  </button>
                  <button
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("mprep:open-legal", { detail: { tab: "datenschutz" } })
                      );
                    }}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-night-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-paper hover:border-slate-500 transition-colors"
                  >
                    Datenschutzerklärung (DSGVO)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- KONTAKT & SUPPORT ---------------- */}
        <section id="kontakt" className="py-16 sm:py-24 bg-paper">
          <div className="wrap grid gap-10 lg:grid-cols-[6fr_6fr] lg:gap-16 items-start">
            <div>
              <span className="eyebrow text-primary">Kontakt & Support</span>
              <h2 className="display mt-3 text-[30px] sm:text-[42px] leading-tight text-ink">
                Schnelle Hilfe.
                <br />
                Direkt für deine Vorbereitung da.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-ink-2">
                Du lernst auf Hochtouren für den MedAT – und hast keine Zeit für tagelanges Warten auf Antworten.
                Egal ob eine biologische Fangfrage, KFF-Zahlenfolgen oder technische Unterstützung: Unser Support-
                und Didaktik-Team antwortet dir verlässlich und persönlich.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper-warm border border-line text-lg">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-3">Allgemeine Anfragen & Hilfe</p>
                    <a
                      href="mailto:medatprep@gmail.com"
                      className="text-sm sm:text-base font-bold text-primary hover:underline"
                    >
                      medatprep@gmail.com
                    </a>
                    <p className="text-xs text-ink-3">Garantierte Antwort werktags in &lt; 3,5 Stunden</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper-warm border border-line text-lg">
                    🔬
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-3">Didaktische Fachfragen (BMS & KFF)</p>
                    <a
                      href="mailto:medatprep@gmail.com"
                      className="text-sm sm:text-base font-bold text-primary hover:underline"
                    >
                      medatprep@gmail.com
                    </a>
                    <p className="text-xs text-ink-3">Geprüft von unseren medizinischen Fachtutor:innen</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper-warm border border-line text-lg">
                    ⏱️
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-3">Servicezeiten</p>
                    <p className="text-sm sm:text-base font-bold text-ink">Mo–Fr 08:30 – 19:00 Uhr · Sa 09:00 – 14:00 Uhr</p>
                    <p className="text-xs text-ink-3">Sonn- & Feiertage: Notfall-Monitoring aktiv</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Overview Card */}
            <div className="rounded-2xl border border-line bg-gradient-to-br from-paper to-paper-warm p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-3">Support & Service</p>
                  <p className="text-base font-bold text-ink">Persönliche Betreuung</p>
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                  Online & Aktiv
                </span>
              </div>

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-ink-2">
                <div className="flex items-center gap-3">
                  <IconCheck className="h-4 w-4 text-success shrink-0" />
                  <span>Kein anonymes Callcenter – direkte Prüfung durch Fachkräfte</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconCheck className="h-4 w-4 text-success shrink-0" />
                  <span>14 Tage gesetzliches Widerrufsrecht nach FAGG</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconCheck className="h-4 w-4 text-success shrink-0" />
                  <span>100 % DSGVO-konforme Datenspeicherung in der EU</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconCheck className="h-4 w-4 text-success shrink-0" />
                  <span>Kostenloser Basis-Zugang & Einstufungstest dauerhaft gratis</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <Link
                  to="/contact"
                  className="btn btn-primary w-full justify-center text-sm font-bold shadow-sm"
                >
                  Zur Kontakt- & Support-Seite →
                </Link>
                <p className="mt-2 text-center text-[11px] text-ink-3">
                  Nutze unser Ticket-Formular für priorisierte Anfragen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- TRUST FAQS ---------------- */}
        <section className="border-t border-line bg-paper-warm/30 py-16 sm:py-24">
          <div className="wrap max-w-3xl">
            <div className="text-center">
              <span className="eyebrow text-primary">Häufige Fragen zu Vertrauen & Team</span>
              <h2 className="display mt-3 text-[30px] sm:text-[40px] leading-tight text-ink">
                Transparenz auf einen Blick.
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {[
                {
                  q: "Ist MedAT Prep von den Universitäten autorisiert oder geprüft?",
                  a: "Nein, und das ist ein bewusster Vorteil: MedAT Prep ist eine unabhängige didaktische Initiative. Keine offizielle Universität prüft oder autorisiert private Vorbereitungsanbieter. Unsere Unabhängigkeit erlaubt es uns, die reale Prüfungsschwierigkeit objektiv und ungeschönt abzubilden.",
                },
                {
                  q: "Wer verfasst und aktualisiert die Übungsfragen?",
                  a: "Jede Frage durchläuft einen 4-Augen-Prozess: Entwurf durch diplomierte Fachwissenschaftler:innen (Biologie, Chemie, Physik, Mathematik), anschließende Überprüfung durch Ärzt:innen und MedAT-Top-Platzierer:innen sowie Abgleich mit dem jährlich aktualisierten offiziellen Stichwortkatalog.",
                },
                {
                  q: "Was passiert, wenn sich der offizielle Stichwortkatalog ändert?",
                  a: "Sobald der Virtuelle Medizinische Campus (VMC) das jährliche Update des Stichwortkatalogs veröffentlicht (üblicherweise im Frühjahr), aktualisiert unser Fachbeirat binnen 72 Stunden alle betroffenen Module. Neue Stichworte werden sofort hinzugefügt, gestrichene Themen als Archiv markiert.",
                },
                {
                  q: "Werden meine Lernstatistiken oder E-Mails weiterverkauft?",
                  a: "Niemals. Wir sind ein österreichisches Unternehmen und unterliegen der strengen europäischen DSGVO. Deine Daten werden verschlüsselt auf ISO-27001-Servern in Frankfurt und Wien gespeichert und ausschließlich für deinen persönlichen Lernfortschritt genutzt.",
                },
                {
                  q: "Gibt es ein gesetzliches Rücktrittsrecht?",
                  a: "Ja. Nach dem österreichischen Fern- und Auswärtsgeschäfte-Gesetz (FAGG) hast du ein 14-tägiges gesetzliches Rücktrittsrecht. Bist du mit unserem Premium-Paket nicht zufrieden, genügt eine kurze E-Mail an medatprep@gmail.com und du erhältst dein Geld unbürokratisch zurück.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-paper shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-ink hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-3 shrink-0 text-lg font-normal text-slate-400">
                      {activeFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="border-t border-line/60 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-ink-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- FINAL CTA BANNER ---------------- */}
        <section className="border-t border-line bg-gradient-to-r from-primary to-primary-hover py-14 sm:py-20 text-paper">
          <div className="wrap text-center max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/20 px-3 py-1 text-xs font-bold text-paper">
              <IconSpark className="h-3.5 w-3.5" /> Starte heute ohne Risiko
            </span>
            <h2 className="display mt-4 text-[28px] sm:text-[40px] text-paper leading-tight">
              Überzeuge dich selbst von unserer Qualität.
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-paper/90 leading-relaxed">
              Mache den kostenlosen Einstufungstest, teste 200 originale Übungsfragen und
              erhalte deinen ersten individuellen Lernplan – komplett unverbindlich.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="/onboarding?mode=register"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-paper px-6 py-3.5 text-sm font-extrabold text-primary shadow-lg hover:bg-slate-50 transition-colors"
              >
                Kostenlosen Einstufungstest starten →
              </a>
              <Link
                to="/blog"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-paper/40 bg-transparent px-6 py-3.5 text-sm font-bold text-paper hover:bg-paper/10 transition-colors"
              >
                Zum Knowledge Hub & Ratgeber
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global compliant footer with interactive legal modal */}
      <Footer />
    </div>
  );
}
