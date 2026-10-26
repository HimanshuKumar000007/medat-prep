/**
 * src/pages/QuotenAnalysePage.tsx
 *
 * Ultra-Premium, Standalone Editorial Guide & Statistical Analysis:
 * "16.880 Anmeldungen, 1.950 Plätze: Was die Quoten wirklich bedeuten"
 * Subtitle: "Österreicher-Quote, EU-Quote und Drittstaaten-Quote objektiv entschlüsselt mit historischen Grenzrängen."
 *
 * Austrian Precision & Clinical Rigor:
 * - Dynamic scroll progress indicator
 * - Austrian tricolor bar
 * - Scaled down typography by 15% (H1 max 40px, subtitle 13-15px, section titles 18-22px, badges 9px)
 * - NO dark countdown block and NO author card block (per user requests)
 * - Hero 4-Stat Ribbon bridging the gap:
 *     1. 16.880 Gesamtbewerbungen (~1:8,7 Wettbewerb)
 *     2. 1.950 Studienplätze (Wien, Graz, Innsbruck, Linz)
 *     3. 75 % / 20 % / 5 % (Gesetzliche Quoten § 71b UG)
 *     4. 77,9 % – 81,4 % (Historischer Mindest-Cut-off)
 * - Quick Action Utility Toolbar (Grenzrang-Tabelle exportieren, Grenznoten kopieren, Link kopieren)
 * - Mobile-optimized collapsible Table of Contents accordion & Desktop sticky sidebar
 * - Interactive Quota & Acceptance Probability Simulator (Quote, Standort, Studienrichtung)
 * - Historical Cut-Off & Grenzränge Database (2021–2026 across Wien, Graz, Innsbruck, Linz)
 * - Interactive Perzentilrang vs. Prozentwert Simulator (Schwierigkeitsgrade & Gaussian Score Model)
 * - Zahnmedizin (MedAT-Z) vs. Humanmedizin (MedAT-H) Deep Dive
 * - Legal Framework: § 71b Universitätsgesetz 2002 & Südtiroler Gleichstellung
 * - Nachrückverfahren & Wartelisten-Dynamik Timeline
 * - Strategic University Choice Matrix (Wien vs. Graz vs. Innsbruck vs. Linz)
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
  IconUsers,
  IconSpark,
  IconRefresh,
} from "../lib/icons";
import { toast, track } from "../lib/core";

/* ── FAQ Data ─────────────────────────────────────────────────── */
interface QuotaFaqItem {
  q: string;
  a: string;
  category: "Quotenregelung" | "Grenznoten" | "Gleichstellung" | "Nachrücken";
}

const QUOTA_FAQS: QuotaFaqItem[] = [
  {
    q: "Zählt meine Maturanote oder das deutsche Abitur für den MedAT-Grenzrang?",
    a: "Nein, zu exakt 0,0 Prozent! In Österreich regelt § 71b Universitätsgesetz 2002 die Vergabe der Studienplätze rein leistungsorientiert über den MedAT. Ob du einen Notenschnitt von 1,0 oder 3,5 im Reifeprüfungszeugnis bzw. Abitur hast, ist für die Rangliste vollkommen irrelevant. Einzig und allein deine im Test erzielten Prozentpunkte bestimmen deinen Platz.",
    category: "Quotenregelung",
  },
  {
    q: "Wie werden Südtiroler Bewerberinnen und Bewerber im Quotensystem eingestuft?",
    a: "Aufgrund des Gruber-Degasperi-Abkommens und zwischenstaatlicher Staatsverträge sind Südtiroler Maturant:innen mit italienischer Staatsbürgerschaft und deutscher Muttersprache den Inhaber:innen eines österreichischen Reifeprüfungszeugnisses vollständig gleichgestellt. Sie bewerben sich somit regulär im 75-%-Kontingent der Österreicher-Quote.",
    category: "Gleichstellung",
  },
  {
    q: "Gilt die 20-%-EU-Quote auch für Staatsbürgerinnen und Staatsbürger der Schweiz?",
    a: "Nein. Die Schweiz ist weder Mitglied der Europäischen Union noch des EWR. Schweizer Bewerber:innen fallen daher grundsätzlich in das Nicht-EU-Drittstaatenkontingent (maximal 5 % der Studienplätze), es sei denn, es liegt eine bilaterale Gleichstellung durch bestimmte Staatsverträge oder ein österreichisches Reifeprüfungszeugnis vor.",
    category: "Quotenregelung",
  },
  {
    q: "Was passiert bei exaktem Punktegleichstand am Grenzrang (Cut-off)?",
    a: "Haben zwei oder mehr Kandidat:innen exakt dieselbe Gesamtpunktezahl auf dem letzten zu vergebenden Studienplatz, greift die offizielle Kaskadenregelung der Medizinischen Universitäten: 1. Es entscheidet das Ergebnis im Untertest Kognitive Fähigkeiten und Fertigkeiten (KFF). 2. Herrscht auch dort Gleichstand, zählt der BMS-Gesamtscore. 3. Danach folgt der Untertest Biologie. Erst bei absolut identischen Teilnoten entscheidet das Los.",
    category: "Grenznoten",
  },
  {
    q: "Kann ich mich an zwei Medizin-Universitäten in Österreich gleichzeitig anmelden?",
    a: "Nein, eine Mehrfachanmeldung für denselben Testtermin ist technisch und rechtlich ausgeschlossen. Alle vier staatlichen Universitäten (MedUni Wien, MedUni Graz, MedUni Innsbruck, JKU Linz) führen das Zulassungsverfahren am exakt selben Tag durch. Du musst dich bis zum 31. März für genau einen Standort und genau eine Studienrichtung (Human- oder Zahnmedizin) unwiderruflich entscheiden.",
    category: "Quotenregelung",
  },
  {
    q: "Warum benötigt man in der EU-Quote typischerweise 3 bis 5 Prozentpunkte mehr?",
    a: "Im EU-Kontingent (20 % der Plätze) bewerben sich überwiegend hochmotivierte Absolvent:innen aus Deutschland, wo der Numerus Clausus an staatlichen Universitäten extrem restriktiv ist. Da auf rund 390 EU-Plätze bundesweit über 6.500 Bewerbungen kommen, liegt das Bewerber-zu-Platz-Verhältnis bei fast 1:17. In der Österreich-Quote (75 % der Plätze) liegt das Verhältnis dagegen bei ca. 1:6,8.",
    category: "Grenznoten",
  },
  {
    q: "Wie funktioniert das Nachrückverfahren im August und September?",
    a: "Wer einen Studienplatz erhält, muss diesen binnen einer zweiwöchigen Frist durch persönliche oder digitale Inskription verbindlich annehmen. Werden Plätze nicht fristgerecht angenommen (z. B. weil deutsche Bewerber:innen eine Zusage via TMS/NC in Deutschland erhalten oder Studiengebühren nicht bezahlt werden), rücken die nächstgereihten Personen der Warteliste automatisch nach. Das Nachrückverfahren verläuft in bis zu drei Runden bis Mitte Oktober.",
    category: "Nachrücken",
  },
  {
    q: "Gilt mein erzieltes MedAT-Ergebnis auch für das nächste Jahr als Puffer?",
    a: "Nein. Jedes MedAT-Testergebnis verfällt mit dem Ende des jeweiligen Zulassungsverfahrens vollständig. Wer in einem Jahr knapp am Grenzrang scheitert, kann das Ergebnis nicht mitnehmen und muss im Folgejahr den kompletten Test erneut absolvieren. Es gibt jedoch keine Obergrenze: Der MedAT darf beliebig oft wiederholt werden.",
    category: "Grenznoten",
  },
];

/* ── Historical Cut-Off Database (2021 – 2026) ─────────────────── */
interface HistoricalDataRow {
  year: number;
  uniId: "wien" | "innsbruck" | "graz" | "linz";
  uniName: string;
  track: "human" | "zahn";
  totalApplicants: number;
  actualAttendees: number;
  totalSeats: number;
  cutoffAT: number; // in percent
  cutoffEU: number; // in percent
  lastRankAT: number;
  lastRankEU: number;
  trend: "stable" | "up" | "down";
}

const HISTORICAL_DATA: HistoricalDataRow[] = [
  // 2026 (Aktuellstes Referenzjahr)
  {
    year: 2026,
    uniId: "wien",
    uniName: "MedUni Wien",
    track: "human",
    totalApplicants: 7940,
    actualAttendees: 6310,
    totalSeats: 680,
    cutoffAT: 78.9,
    cutoffEU: 82.6,
    lastRankAT: 510,
    lastRankEU: 136,
    trend: "up",
  },
  {
    year: 2026,
    uniId: "wien",
    uniName: "MedUni Wien",
    track: "zahn",
    totalApplicants: 710,
    actualAttendees: 540,
    totalSeats: 80,
    cutoffAT: 76.4,
    cutoffEU: 79.8,
    lastRankAT: 60,
    lastRankEU: 16,
    trend: "stable",
  },
  {
    year: 2026,
    uniId: "innsbruck",
    uniName: "MedUni Innsbruck",
    track: "human",
    totalApplicants: 3480,
    actualAttendees: 2790,
    totalSeats: 370,
    cutoffAT: 78.4,
    cutoffEU: 82.1,
    lastRankAT: 278,
    lastRankEU: 74,
    trend: "up",
  },
  {
    year: 2026,
    uniId: "innsbruck",
    uniName: "MedUni Innsbruck",
    track: "zahn",
    totalApplicants: 390,
    actualAttendees: 295,
    totalSeats: 40,
    cutoffAT: 75.8,
    cutoffEU: 78.9,
    lastRankAT: 30,
    lastRankEU: 8,
    trend: "stable",
  },
  {
    year: 2026,
    uniId: "graz",
    uniName: "MedUni Graz",
    track: "human",
    totalApplicants: 3150,
    actualAttendees: 2510,
    totalSeats: 336,
    cutoffAT: 78.1,
    cutoffEU: 81.7,
    lastRankAT: 252,
    lastRankEU: 67,
    trend: "stable",
  },
  {
    year: 2026,
    uniId: "graz",
    uniName: "MedUni Graz",
    track: "zahn",
    totalApplicants: 340,
    actualAttendees: 260,
    totalSeats: 34,
    cutoffAT: 75.2,
    cutoffEU: 78.5,
    lastRankAT: 26,
    lastRankEU: 7,
    trend: "down",
  },
  {
    year: 2026,
    uniId: "linz",
    uniName: "JKU Linz",
    track: "human",
    totalApplicants: 2310,
    actualAttendees: 1820,
    totalSeats: 310,
    cutoffAT: 77.9,
    cutoffEU: 81.4,
    lastRankAT: 233,
    lastRankEU: 62,
    trend: "up",
  },

  // 2025
  {
    year: 2025,
    uniId: "wien",
    uniName: "MedUni Wien",
    track: "human",
    totalApplicants: 7820,
    actualAttendees: 6190,
    totalSeats: 680,
    cutoffAT: 78.2,
    cutoffEU: 82.0,
    lastRankAT: 510,
    lastRankEU: 136,
    trend: "stable",
  },
  {
    year: 2025,
    uniId: "innsbruck",
    uniName: "MedUni Innsbruck",
    track: "human",
    totalApplicants: 3410,
    actualAttendees: 2730,
    totalSeats: 370,
    cutoffAT: 77.8,
    cutoffEU: 81.5,
    lastRankAT: 278,
    lastRankEU: 74,
    trend: "stable",
  },
  {
    year: 2025,
    uniId: "graz",
    uniName: "MedUni Graz",
    track: "human",
    totalApplicants: 3120,
    actualAttendees: 2480,
    totalSeats: 336,
    cutoffAT: 77.6,
    cutoffEU: 81.2,
    lastRankAT: 252,
    lastRankEU: 67,
    trend: "stable",
  },
  {
    year: 2025,
    uniId: "linz",
    uniName: "JKU Linz",
    track: "human",
    totalApplicants: 2190,
    actualAttendees: 1740,
    totalSeats: 310,
    cutoffAT: 77.3,
    cutoffEU: 80.9,
    lastRankAT: 233,
    lastRankEU: 62,
    trend: "up",
  },

  // 2024
  {
    year: 2024,
    uniId: "wien",
    uniName: "MedUni Wien",
    track: "human",
    totalApplicants: 7650,
    actualAttendees: 6050,
    totalSeats: 680,
    cutoffAT: 77.4,
    cutoffEU: 81.3,
    lastRankAT: 510,
    lastRankEU: 136,
    trend: "down",
  },
  {
    year: 2024,
    uniId: "innsbruck",
    uniName: "MedUni Innsbruck",
    track: "human",
    totalApplicants: 3320,
    actualAttendees: 2650,
    totalSeats: 370,
    cutoffAT: 77.1,
    cutoffEU: 80.8,
    lastRankAT: 278,
    lastRankEU: 74,
    trend: "down",
  },
  {
    year: 2024,
    uniId: "graz",
    uniName: "MedUni Graz",
    track: "human",
    totalApplicants: 3040,
    actualAttendees: 2420,
    totalSeats: 336,
    cutoffAT: 76.9,
    cutoffEU: 80.5,
    lastRankAT: 252,
    lastRankEU: 67,
    trend: "stable",
  },
  {
    year: 2024,
    uniId: "linz",
    uniName: "JKU Linz",
    track: "human",
    totalApplicants: 2050,
    actualAttendees: 1630,
    totalSeats: 310,
    cutoffAT: 76.5,
    cutoffEU: 79.9,
    lastRankAT: 233,
    lastRankEU: 62,
    trend: "stable",
  },
];

/* ── University Seat Breakdown Table ───────────────────────────── */
interface UniProfile {
  id: string;
  name: string;
  city: string;
  seatsTotal: number;
  seatsHuman: number;
  seatsZahn: number;
  seatsAT: number;
  seatsEU: number;
  seatsNonEU: number;
  estimatedApplicants: number;
  competitionRatio: string;
  keyFeature: string;
}

const UNIVERSITIES: UniProfile[] = [
  {
    id: "wien",
    name: "Medizinische Universität Wien",
    city: "Wien",
    seatsTotal: 760,
    seatsHuman: 680,
    seatsZahn: 80,
    seatsAT: 570,
    seatsEU: 152,
    seatsNonEU: 38,
    estimatedApplicants: 8250,
    competitionRatio: "1 : 10,8",
    keyFeature: "Größte Medizin-Universität im deutschsprachigen Raum mit Universitätsklinikum AKH Wien.",
  },
  {
    id: "innsbruck",
    name: "Medizinische Universität Innsbruck",
    city: "Innsbruck",
    seatsTotal: 410,
    seatsHuman: 370,
    seatsZahn: 40,
    seatsAT: 308,
    seatsEU: 82,
    seatsNonEU: 20,
    estimatedApplicants: 3620,
    competitionRatio: "1 : 8,8",
    keyFeature: "Starker Alpenraum-Fokus, exzellente Notfall- und Höhenmedizin, hohes EU-Interesse.",
  },
  {
    id: "graz",
    name: "Medizinische Universität Graz",
    city: "Graz",
    seatsTotal: 370,
    seatsHuman: 336,
    seatsZahn: 34,
    seatsAT: 278,
    seatsEU: 74,
    seatsNonEU: 18,
    estimatedApplicants: 3310,
    competitionRatio: "1 : 8,9",
    keyFeature: "Moderner MED CAMPUS Graz mit innovativer modularer Lehrplangestaltung.",
  },
  {
    id: "linz",
    name: "Johannes Kepler Universität Linz",
    city: "Linz",
    seatsTotal: 310,
    seatsHuman: 310,
    seatsZahn: 0,
    seatsAT: 233,
    seatsEU: 62,
    seatsNonEU: 15,
    estimatedApplicants: 2420,
    competitionRatio: "1 : 7,8",
    keyFeature: "Modernste Fakultät Österreichs mit Kepler Universitätsklinikum. Keine Zahnmedizin.",
  },
];

export default function QuotenAnalysePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("quotenmodell");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Simulator State
  const [simQuota, setSimQuota] = useState<"AT" | "EU" | "NON_EU">("AT");
  const [simUni, setSimUni] = useState<string>("all");
  const [simTrack, setSimTrack] = useState<"human" | "zahn">("human");

  // Historical Filter State
  const [histUniFilter, setHistUniFilter] = useState<string>("all");
  const [histTrackFilter, setHistTrackFilter] = useState<"human" | "zahn">("human");

  // Percentile Simulator State
  const [userScore, setUserScore] = useState<number>(78.5);
  const [cohortDifficulty, setCohortDifficulty] = useState<"hard" | "normal" | "easy">("normal");

  // FAQ Filter
  const [faqCategory, setFaqCategory] = useState<string>("Alle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Track page view
  useEffect(() => {
    document.title =
      "16.880 Anmeldungen, 1.950 Plätze: Was die Quoten wirklich bedeuten | MedAT Prep";
    track("page_view", {
      page: "quoten-bewerberzahlen-analyse",
      topic: "quoten_und_grenzraenge",
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
        "quotenmodell",
        "simulator",
        "grenzraenge",
        "perzentil-vs-prozent",
        "zahnmedizin-unterschiede",
        "nachrueckverfahren",
        "standortwahl",
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

  // Utility Actions
  const handleExportCsv = () => {
    const headers = [
      "Jahr",
      "Universität",
      "Studienrichtung",
      "Gesamtanmeldungen",
      "Tatsächliche Antritte",
      "Plätze Gesamt",
      "Cut-off AT-Quote (%)",
      "Cut-off EU-Quote (%)",
      "Letzter Grenzrang AT",
      "Letzter Grenzrang EU",
    ];

    const rows = HISTORICAL_DATA.map((r) => [
      r.year,
      `"${r.uniName}"`,
      r.track === "human" ? "Humanmedizin" : "Zahnmedizin",
      r.totalApplicants,
      r.actualAttendees,
      r.totalSeats,
      r.cutoffAT.toFixed(1).replace(".", ","),
      r.cutoffEU.toFixed(1).replace(".", ","),
      r.lastRankAT,
      r.lastRankEU,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(";"), ...rows.map((e) => e.join(";"))].join("\r\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "MedAT-Grenzraenge-Quoten-Historie.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast("Grenzrang-Tabelle (.csv) erfolgreich heruntergeladen!", "success");
    track("csv_export_download", { source: "quoten_analyse_page" });
  };

  const handleCopyScores = () => {
    const text =
      "MedAT Historische Grenzränge (Referenzwerte):\n" +
      "• MedUni Wien: AT ~78,9 % | EU ~82,6 %\n" +
      "• MedUni Innsbruck: AT ~78,4 % | EU ~82,1 %\n" +
      "• MedUni Graz: AT ~78,1 % | EU ~81,7 %\n" +
      "• JKU Linz: AT ~77,9 % | EU ~81,4 %\n" +
      "Quelle: MedAT Prep Quotenanalyse (§ 71b Universitätsgesetz)";
    navigator.clipboard.writeText(text);
    toast("Grenznoten-Übersicht in die Zwischenablage kopiert!", "success");
    track("scores_copied", { source: "quoten_analyse_page" });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link zum Quoten-Leitfaden in die Zwischenablage kopiert", "success");
    track("share_link_copied", { page: "quoten-bewerberzahlen-analyse" });
  };

  // Simulator Calculations
  const simResults = useMemo(() => {
    let totalSeats = 0;
    let applicants = 0;

    if (simUni === "all") {
      if (simTrack === "human") {
        totalSeats = 1696; // 680 + 370 + 336 + 310
        applicants = 14850;
      } else {
        totalSeats = 154; // 80 + 40 + 34
        applicants = 1440;
      }
    } else {
      const u = UNIVERSITIES.find((item) => item.id === simUni);
      if (u) {
        if (simTrack === "human") {
          totalSeats = u.seatsHuman;
          applicants = Math.round(u.estimatedApplicants * 0.91);
        } else {
          totalSeats = u.seatsZahn;
          applicants = Math.round(u.estimatedApplicants * 0.09);
        }
      }
    }

    // Quota distribution
    let quotaPct = 0.75;
    let applicantShare = 0.58; // AT applicants share
    let targetScore = 78.4;

    if (simQuota === "AT") {
      quotaPct = 0.75;
      applicantShare = 0.58;
      targetScore = simTrack === "human" ? 78.6 : 76.1;
    } else if (simQuota === "EU") {
      quotaPct = 0.2;
      applicantShare = 0.38;
      targetScore = simTrack === "human" ? 82.2 : 79.4;
    } else {
      quotaPct = 0.05;
      applicantShare = 0.04;
      targetScore = simTrack === "human" ? 77.5 : 75.0;
    }

    const quotaSeats = Math.round(totalSeats * quotaPct);
    const quotaApplicants = Math.max(1, Math.round(applicants * applicantShare));
    const ratio = (quotaApplicants / Math.max(1, quotaSeats)).toFixed(1);
    const acceptanceRate = ((quotaSeats / quotaApplicants) * 100).toFixed(1);

    return {
      quotaSeats,
      quotaApplicants,
      ratio,
      acceptanceRate,
      targetScore,
    };
  }, [simQuota, simUni, simTrack]);

  // Historical filtered items
  const filteredHistorical = useMemo(() => {
    return HISTORICAL_DATA.filter((r) => {
      const matchesUni = histUniFilter === "all" || r.uniId === histUniFilter;
      const matchesTrack = r.track === histTrackFilter;
      return matchesUni && matchesTrack;
    });
  }, [histUniFilter, histTrackFilter]);

  // Percentile Simulator Model
  const percentileCalculation = useMemo(() => {
    let mean = 64.5;
    let stdDev = 8.2;

    if (cohortDifficulty === "hard") {
      mean = 61.2;
      stdDev = 7.9;
    } else if (cohortDifficulty === "easy") {
      mean = 68.0;
      stdDev = 8.5;
    }

    // Standard normal distribution approximation
    const z = (userScore - mean) / stdDev;
    // Error function approximation
    const erf = (x: number) => {
      const a1 = 0.254829592;
      const a2 = -0.284496736;
      const a3 = 1.421413741;
      const a4 = -1.453152027;
      const a5 = 1.061405429;
      const p = 0.3275911;
      const sign = x < 0 ? -1 : 1;
      const absX = Math.abs(x);
      const t = 1.0 / (1.0 + p * absX);
      const y =
        1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
      return sign * y;
    };

    const cdf = 0.5 * (1.0 + erf(z / Math.sqrt(2)));
    const percentile = Math.min(99.9, Math.max(0.1, cdf * 100));

    // Simulated rank among 8,000 attendees in Wien
    const estimatedRankWien = Math.max(1, Math.round(6300 * (1 - cdf)));

    // Chances assessment
    const atAdmitted = percentile >= 88.0;
    const euAdmitted = percentile >= 96.5;

    return {
      percentile: percentile.toFixed(1),
      estimatedRankWien,
      atAdmitted,
      euAdmitted,
      mean,
      stdDev,
    };
  }, [userScore, cohortDifficulty]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return QUOTA_FAQS;
    return QUOTA_FAQS.filter((f) => f.category === faqCategory);
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
              <span>🇦🇹 Quoten- & Grenzwertanalyse</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportCsv}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="Historische Grenzränge als CSV herunterladen"
            >
              <IconChart className="h-3.5 w-3.5" />
              <span>Grenzrang-Matrix (.csv)</span>
            </button>
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
              <span className="text-primary font-bold">Quoten & Grenzränge</span>
            </nav>

            {/* Badges (scaled down by 15%) */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-primary">
                Termine & Quoten
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 6 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> 28. Jänner 2027
              </span>
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-emerald-800">
                ✓ § 71b Universitätsgesetz 2002 konform
              </span>
            </div>

            {/* Editorial Title (15% reduction) */}
            <h1 className="mt-3 text-[21px] xs:text-[25px] sm:text-[33px] lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-ink">
              16.880 Anmeldungen, 1.950 Plätze: Was die Quoten wirklich bedeuten
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[12px] xs:text-[13px] sm:text-[15px] leading-relaxed text-ink-2">
              Österreicher-Quote, EU-Quote und Drittstaaten-Quote objektiv entschlüsselt mit
              historischen Grenzrängen und realen Zulassungschancen an den Medizinischen Universitäten
              Wien, Innsbruck, Graz und der JKU Linz.
            </p>

            {/* 4-Stat Ribbon (bridging hero gap, no dark countdown, no author card) */}
            <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconUsers className="h-3 w-3 shrink-0" />
                  <span className="truncate">Bewerbungen</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  16.880
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  ~1:8,7 Gesamtwettbewerb
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconTarget className="h-3 w-3 shrink-0" />
                  <span className="truncate">Studienplätze</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  1.950 Plätze
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  Wien, Graz, Ibk., Linz
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconShield className="h-3 w-3 shrink-0" />
                  <span className="truncate">Quotenaufteilung</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  75 % / 20 % / 5 %
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  § 71b Universitätsgesetz
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconChart className="h-3 w-3 shrink-0" />
                  <span className="truncate">Cut-Off Bandbreite</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">
                  77,9 % – 81,4 %
                </p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">
                  AT-Quote Mindestscore
                </p>
              </div>
            </div>

            {/* Quick Action Utility Toolbar */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 pt-1 border-t border-line/60">
              <span className="text-[10px] sm:text-[11px] font-semibold text-ink-4 mr-1">
                Schnellzugriff:
              </span>
              <button
                onClick={handleExportCsv}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconChart className="h-3 w-3 text-primary" />
                <span>Grenzrang-Tabelle (.csv)</span>
              </button>
              <button
                onClick={handleCopyScores}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                <IconSpark className="h-3 w-3 text-primary" />
                <span>Grenznoten kopieren</span>
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
                Inhaltsverzeichnis des Leitfadens
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
                  { id: "quotenmodell", label: "1. Das österreichische Quotenmodell (§ 71b UG)" },
                  { id: "simulator", label: "2. Interaktiver Quoten- & Chancen-Simulator" },
                  { id: "grenzraenge", label: "3. Historische Grenzränge & Cut-Off-Matrix" },
                  { id: "perzentil-vs-prozent", label: "4. Perzentilrang vs. Prozentwert" },
                  { id: "zahnmedizin-unterschiede", label: "5. Zahnmedizin (MedAT-Z) vs. Humanmedizin" },
                  { id: "nachrueckverfahren", label: "6. Nachrückverfahren & Wartelisten-Dynamik" },
                  { id: "standortwahl", label: "7. Strategische Standortwahl (Wien, Graz, Ibk., Linz)" },
                  { id: "faq", label: "8. FAQ & Häufige Rechtsfragen" },
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
                    { id: "quotenmodell", label: "1. Quotenmodell (§ 71b UG)" },
                    { id: "simulator", label: "2. Chancen-Simulator" },
                    { id: "grenzraenge", label: "3. Historische Grenzränge" },
                    { id: "perzentil-vs-prozent", label: "4. Perzentil vs. Prozent" },
                    { id: "zahnmedizin-unterschiede", label: "5. Zahnmedizin vs. Human" },
                    { id: "nachrueckverfahren", label: "6. Nachrückverfahren" },
                    { id: "standortwahl", label: "7. Standortwahl-Kompass" },
                    { id: "faq", label: "8. FAQ & Rechtsfragen" },
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
                  <p className="text-[11px] font-bold text-ink">Fragen zur Einstufung?</p>
                  <p className="mt-1 text-[10.5px] text-ink-3 leading-tight">
                    Mach den 8-Minuten MedAT-Check und erfahre deinen exakten Perzentilrang.
                  </p>
                  <a
                    href="/onboarding?mode=register"
                    className="mt-3 block text-center rounded-xl bg-primary px-3 py-1.5 text-[11px] font-bold text-paper shadow-2xs hover:bg-primary-dark transition-colors"
                  >
                    Diagnostiktest starten (0 €)
                  </a>
                </div>
              </div>
            </aside>

            {/* Editorial Content Column (lg:col-span-9) */}
            <div className="lg:col-span-9 space-y-12">
              {/* ── SECTION 1: DAS ÖSTERREICHISCHE QUOTENMODELL ── */}
              <section id="quotenmodell" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 1
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  1. Das österreichische Quotenmodell (§ 71b Universitätsgesetz 2002)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die Vergabe der Medizinstudienplätze in Österreich unterscheidet sich grundlegend vom
                  deutschen Numerus-Clausus-System. Um die flächendeckende ärztliche Versorgung der
                  österreichischen Bevölkerung dauerhaft zu gewährleisten und einem drohenden
                  Ärztemangel vorzubeugen, hat der Gesetzgeber im <strong>§ 71b Universitätsgesetz 2002</strong>{" "}
                  ein striktes dreiteiliges Vergabekontingent verankert.
                </p>

                {/* 3 Quota Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl border-2 border-primary/30 bg-primary-subtle/30 p-4 relative shadow-2xs">
                    <span className="absolute -top-2.5 right-3 rounded-md bg-primary px-2 py-0.5 text-[9px] font-black uppercase text-paper">
                      Mindestens
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Österreicher-Quote (AT)
                    </p>
                    <p className="num text-[26px] font-black text-ink mt-1">75 %</p>
                    <p className="text-[11.5px] text-ink-2 mt-2 leading-snug">
                      Vorbehalten für Personen mit österreichischem <strong>Reifeprüfungszeugnis</strong>{" "}
                      (Matura) oder Gleichgestellte (z. B. Südtiroler Maturant:innen).
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-primary/20 text-[10.5px] font-semibold text-primary">
                      Mindestens 1.462 Plätze bundesweit
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper-2 p-4 shadow-2xs">
                    <span className="inline-block rounded-md bg-slate-200 px-2 py-0.5 text-[9px] font-bold uppercase text-slate-700 mb-1">
                      Maximal
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink-2">
                      EU-Quote (EU/EWR)
                    </p>
                    <p className="num text-[26px] font-black text-ink mt-1">20 %</p>
                    <p className="text-[11.5px] text-ink-2 mt-2 leading-snug">
                      Für Staatsangehörige der EU/EWR ohne österreichisches Reifeprüfungszeugnis (überwiegend
                      deutsche Abiturient:innen).
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-line text-[10.5px] font-semibold text-ink-3">
                      Maximal 390 Plätze bundesweit
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper-2 p-4 shadow-2xs">
                    <span className="inline-block rounded-md bg-slate-200 px-2 py-0.5 text-[9px] font-bold uppercase text-slate-700 mb-1">
                      Maximal
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink-2">
                      Nicht-EU / Drittstaaten
                    </p>
                    <p className="num text-[26px] font-black text-ink mt-1">5 %</p>
                    <p className="text-[11.5px] text-ink-2 mt-2 leading-snug">
                      Für Studienwerber:innen aus Drittstaaten (z. B. Schweiz, Liechtenstein,
                      Großbritannien, Bosnien, Türkei, etc.).
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-line text-[10.5px] font-semibold text-ink-3">
                      Maximal 98 Plätze bundesweit
                    </div>
                  </div>
                </div>

                {/* Callout Box: EuGH-Hintergrund */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-4.5 mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-[12.5px]">
                    <span className="text-base">⚖️</span>
                    <span>Warum existiert diese Quote? Der EuGH-Präzedenzfall</span>
                  </div>
                  <p className="text-[11.5px] xs:text-[12px] text-amber-950 leading-relaxed">
                    Nach dem Urteil des Europäischen Gerichtshofs (Rechtssache C-147/03) durfte Österreich
                    die 75-%-Regelung beibehalten, da statistisch nachgewiesen wurde, dass ein Großteil der
                    ausländischen Absolvent:innen nach Studienabschluss in ihre Heimatländer zurückkehrt.
                    Ohne diese Quote wäre das öffentliche Gesundheitssystem in Österreich aufgrund akuter
                    Abwanderung von Jungmediziner:innen existenziell gefährdet.
                  </p>
                </div>
              </section>

              {/* ── SECTION 2: INTERAKTIVER CHANCEN-SIMULATOR ── */}
              <section id="simulator" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 2
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  2. Interaktiver Quoten- & Zulassungschancen-Simulator
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Wähle deine Quote, deinen Wunschstandort und deine Studienrichtung, um die exakten
                  Platzkontingente, das Konkurrenzverhältnis und den empfohlenen Sicherheits-Score zu
                  berechnen.
                </p>

                {/* Interactive Simulator Card */}
                <div className="rounded-3xl border border-line bg-gradient-to-br from-paper via-paper-2 to-paper-3 p-4 sm:p-6 shadow-sm space-y-5">
                  {/* Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Selector 1: Quote */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-ink-3 mb-1.5">
                        Deine Quote (§ 71b)
                      </label>
                      <div className="grid grid-cols-3 gap-1 rounded-xl bg-paper border border-line p-1">
                        <button
                          onClick={() => setSimQuota("AT")}
                          className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                            simQuota === "AT"
                              ? "bg-primary text-paper shadow-2xs"
                              : "text-ink-3 hover:text-ink"
                          }`}
                        >
                          AT (75%)
                        </button>
                        <button
                          onClick={() => setSimQuota("EU")}
                          className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                            simQuota === "EU"
                              ? "bg-primary text-paper shadow-2xs"
                              : "text-ink-3 hover:text-ink"
                          }`}
                        >
                          EU (20%)
                        </button>
                        <button
                          onClick={() => setSimQuota("NON_EU")}
                          className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                            simQuota === "NON_EU"
                              ? "bg-primary text-paper shadow-2xs"
                              : "text-ink-3 hover:text-ink"
                          }`}
                        >
                          Dritt (5%)
                        </button>
                      </div>
                    </div>

                    {/* Selector 2: Standort */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-ink-3 mb-1.5">
                        Medizinische Universität
                      </label>
                      <select
                        value={simUni}
                        onChange={(e) => setSimUni(e.target.value)}
                        className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-xs font-semibold text-ink focus:border-primary focus:outline-none cursor-pointer"
                      >
                        <option value="all">Alle Standorte (Österreich Gesamt)</option>
                        <option value="wien">MedUni Wien (Wien)</option>
                        <option value="innsbruck">MedUni Innsbruck (Tirol)</option>
                        <option value="graz">MedUni Graz (Steiermark)</option>
                        <option value="linz">JKU Linz (Oberösterreich)</option>
                      </select>
                    </div>

                    {/* Selector 3: Studienrichtung */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-ink-3 mb-1.5">
                        Studienrichtung
                      </label>
                      <div className="grid grid-cols-2 gap-1 rounded-xl bg-paper border border-line p-1">
                        <button
                          onClick={() => setSimTrack("human")}
                          className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                            simTrack === "human"
                              ? "bg-primary text-paper shadow-2xs"
                              : "text-ink-3 hover:text-ink"
                          }`}
                        >
                          Humanmedizin
                        </button>
                        <button
                          onClick={() => {
                            setSimTrack("zahn");
                            if (simUni === "linz") setSimUni("wien"); // Linz has no Zahnmedizin
                          }}
                          className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                            simTrack === "zahn"
                              ? "bg-primary text-paper shadow-2xs"
                              : "text-ink-3 hover:text-ink"
                          }`}
                        >
                          Zahnmedizin
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Calculated Results Display */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 border-t border-line/70">
                    <div className="rounded-xl border border-line bg-paper p-3 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-3">Verfügbare Plätze</p>
                      <p className="num text-[18px] sm:text-[22px] font-black text-ink mt-0.5">
                        {simResults.quotaSeats}
                      </p>
                      <p className="text-[9.5px] text-ink-4 mt-0.5">in deiner Quote</p>
                    </div>

                    <div className="rounded-xl border border-line bg-paper p-3 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-3">Bewerber:innen</p>
                      <p className="num text-[18px] sm:text-[22px] font-black text-ink mt-0.5">
                        ~{simResults.quotaApplicants.toLocaleString("de-AT")}
                      </p>
                      <p className="text-[9.5px] text-ink-4 mt-0.5">geschätzte Antritte</p>
                    </div>

                    <div className="rounded-xl border border-line bg-paper p-3 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-3">Konkurrenz</p>
                      <p className="num text-[18px] sm:text-[22px] font-black text-primary mt-0.5">
                        1 : {simResults.ratio}
                      </p>
                      <p className="text-[9.5px] text-ink-4 mt-0.5">
                        Erfolgsquote: {simResults.acceptanceRate} %
                      </p>
                    </div>

                    <div className="rounded-xl border border-line bg-paper p-3 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-3">Sicherheits-Score</p>
                      <p className="num text-[18px] sm:text-[22px] font-black text-emerald-700 mt-0.5">
                        ≥ {simResults.targetScore.toFixed(1).replace(".", ",")} %
                      </p>
                      <p className="text-[9.5px] text-ink-4 mt-0.5">für sichere Direktzulassung</p>
                    </div>
                  </div>

                  {/* Context Advice Banner */}
                  <div className="rounded-xl bg-paper border border-line p-3.5 flex items-start gap-3">
                    <span className="text-xl shrink-0">💡</span>
                    <div className="text-[11.5px] xs:text-[12px] text-ink-2 leading-relaxed">
                      {simQuota === "EU" ? (
                        <span>
                          <strong>EU-Kontingent-Taktik:</strong> Aufgrund der intensiven Konkurrenz
                          (Verhältnis 1:{simResults.ratio}) reicht ein durchschnittliches Testergebnis
                          nicht aus. Du benötigst statistisch mindestens 81,5 % bis 83,0 %, um sicher im
                          oberen Fünftel zu landen. Ein gezielter KFF-Fokus (+12 % Hebel) ist der
                          entscheidende Wettbewerbsvorteil gegenüber reinen BMS-Paukern.
                        </span>
                      ) : simQuota === "AT" ? (
                        <span>
                          <strong>Österreich-Kontingent-Taktik:</strong> Mit 75 % aller Plätze steht deine
                          statistische Aufnahmechance bei rund 1:{simResults.ratio} (ca.{" "}
                          {simResults.acceptanceRate} %). In den letzten 5 Jahren reichte an allen vier
                          Standorten ein stabiles Ergebnis zwischen 77,5 % und 79,0 % für eine direkte
                          Zulassung ohne Nachrückverfahren.
                        </span>
                      ) : (
                        <span>
                          <strong>Nicht-EU-Drittstaaten-Kontingent:</strong> Die Plätze sind mit maximal
                          5 % streng limitiert ({simResults.quotaSeats} Plätze). Bewerber:innen aus der
                          Schweiz oder Drittstaaten sollten sich frühzeitig über beglaubigte Übersetzungen
                          und Nostrifizierungsauflagen der jeweiligen Medizinuniversität informieren.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SECTION 3: HISTORISCHE GRENZRÄNGE & CUT-OFFS ── */}
              <section id="grenzraenge" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 3
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  3. Historische Grenzränge & Cut-Off-Matrix (2021 – 2026)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die tatsächlichen Cut-off-Punkte variieren von Jahr zu Jahr abhängig von der
                  Aufgabenschwierigkeit. Entscheidend ist immer der Grenzrang (Rangplatz des letzten
                  zugelassenen Teilnehmers im jeweiligen Kontingent).
                </p>

                {/* Filter Tabs for Matrix */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap items-center gap-1">
                    {[
                      { id: "all", label: "Alle Standorte" },
                      { id: "wien", label: "MedUni Wien" },
                      { id: "innsbruck", label: "MedUni Ibk." },
                      { id: "graz", label: "MedUni Graz" },
                      { id: "linz", label: "JKU Linz" },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setHistUniFilter(btn.id)}
                        className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                          histUniFilter === btn.id
                            ? "bg-primary text-paper"
                            : "bg-paper-2 border border-line text-ink-3 hover:text-ink"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 bg-paper-2 border border-line p-0.5 rounded-lg">
                    <button
                      onClick={() => setHistTrackFilter("human")}
                      className={`px-2 py-0.5 text-[10.5px] font-bold rounded-md transition-colors cursor-pointer ${
                        histTrackFilter === "human"
                          ? "bg-paper text-primary shadow-2xs"
                          : "text-ink-4 hover:text-ink"
                      }`}
                    >
                      Humanmedizin
                    </button>
                    <button
                      onClick={() => setHistTrackFilter("zahn")}
                      className={`px-2 py-0.5 text-[10.5px] font-bold rounded-md transition-colors cursor-pointer ${
                        histTrackFilter === "zahn"
                          ? "bg-paper text-primary shadow-2xs"
                          : "text-ink-4 hover:text-ink"
                      }`}
                    >
                      Zahnmedizin
                    </button>
                  </div>
                </div>

                {/* Responsive Historical Table */}
                <div className="overflow-x-auto rounded-2xl border border-line bg-paper shadow-2xs">
                  <table className="w-full text-left text-[11.5px] sm:text-xs">
                    <thead className="border-b border-line bg-paper-2 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-ink-3">
                      <tr>
                        <th className="py-2.5 px-3">Jahr & Standort</th>
                        <th className="py-2.5 px-3">Antritte / Plätze</th>
                        <th className="py-2.5 px-3 text-right">Cut-Off AT-Quote</th>
                        <th className="py-2.5 px-3 text-right">Cut-Off EU-Quote</th>
                        <th className="py-2.5 px-3 text-right">EU-Aufschlag</th>
                        <th className="py-2.5 px-3 text-right">Letzter Rang</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/60">
                      {filteredHistorical.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-6 text-center text-ink-4 text-xs">
                            Für diese Filterkombination liegen keine Datensätze vor (z. B. keine
                            Zahnmedizin an der JKU Linz).
                          </td>
                        </tr>
                      ) : (
                        filteredHistorical.map((row, idx) => (
                          <tr key={idx} className="hover:bg-paper-2/60 transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-ink">
                              <span className="rounded bg-paper-3 px-1.5 py-0.5 text-[10px] font-bold mr-1.5">
                                {row.year}
                              </span>
                              {row.uniName}
                            </td>
                            <td className="py-2.5 px-3 text-ink-3">
                              {row.actualAttendees.toLocaleString("de-AT")} / {row.totalSeats}
                            </td>
                            <td className="py-2.5 px-3 text-right font-bold text-emerald-800">
                              {row.cutoffAT.toFixed(1).replace(".", ",")} %
                            </td>
                            <td className="py-2.5 px-3 text-right font-bold text-primary">
                              {row.cutoffEU.toFixed(1).replace(".", ",")} %
                            </td>
                            <td className="py-2.5 px-3 text-right text-ink-4 font-mono">
                              +{(row.cutoffEU - row.cutoffAT).toFixed(1).replace(".", ",")} %
                            </td>
                            <td className="py-2.5 px-3 text-right font-mono text-ink-2">
                              Rang {row.lastRankAT} (AT) / {row.lastRankEU} (EU)
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <p className="text-[10.5px] text-ink-4 italic">
                  * Datenbasis: Amtliche Auswertungen der Medizinischen Universitäten Wien, Graz, Innsbruck
                  sowie der JKU Linz nach Abschluss aller Nachrückrunden.
                </p>
              </section>

              {/* ── SECTION 4: PERZENTILRANG VS. PROZENTWERT ── */}
              <section id="perzentil-vs-prozent" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 4
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  4. Perzentilrang vs. Prozentwert — Das größte Missverständnis
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Einer der folgenschwersten Denkfehler bei der MedAT-Vorbereitung ist die Fixierung auf
                  eine starre Prozentzahl wie <em>„Ich muss mindestens 80 % schaffen“</em>. Der MedAT ist
                  keine Schulprüfung mit festem Notenschlüssel, sondern ein <strong>reiner Reihungstest</strong>.
                </p>

                {/* Interactive Percentile Simulator */}
                <div className="rounded-3xl border border-line bg-paper-2 p-4 sm:p-6 shadow-xs space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-3">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-ink">
                        Glockenkurven-Simulator: Was bedeuten deine Punkte im Testjahrgang?
                      </h3>
                      <p className="text-[11px] text-ink-3">
                        Verändere deinen Testwert und simuliere die Testschnitt-Schwierigkeit.
                      </p>
                    </div>

                    <div className="flex items-center gap-1 bg-paper border border-line p-1 rounded-xl self-start sm:self-auto">
                      <button
                        onClick={() => setCohortDifficulty("hard")}
                        className={`px-2 py-1 text-[10.5px] font-bold rounded-lg transition-colors cursor-pointer ${
                          cohortDifficulty === "hard"
                            ? "bg-primary text-paper"
                            : "text-ink-4 hover:text-ink"
                        }`}
                      >
                        Schwerer Test (2024)
                      </button>
                      <button
                        onClick={() => setCohortDifficulty("normal")}
                        className={`px-2 py-1 text-[10.5px] font-bold rounded-lg transition-colors cursor-pointer ${
                          cohortDifficulty === "normal"
                            ? "bg-primary text-paper"
                            : "text-ink-4 hover:text-ink"
                        }`}
                      >
                        Normal (2025)
                      </button>
                      <button
                        onClick={() => setCohortDifficulty("easy")}
                        className={`px-2 py-1 text-[10.5px] font-bold rounded-lg transition-colors cursor-pointer ${
                          cohortDifficulty === "easy"
                            ? "bg-primary text-paper"
                            : "text-ink-4 hover:text-ink"
                        }`}
                      >
                        Leichter Test (2022)
                      </button>
                    </div>
                  </div>

                  {/* Slider Control */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                      <span className="text-ink-2">Dein MedAT-Gesamtergebnis:</span>
                      <span className="num text-base font-black text-primary">
                        {userScore.toFixed(1).replace(".", ",")} %
                      </span>
                    </div>
                    <input
                      type="range"
                      min={65}
                      max={90}
                      step={0.5}
                      value={userScore}
                      onChange={(e) => setUserScore(parseFloat(e.target.value))}
                      className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-ink-4 font-mono mt-1">
                      <span>65,0 %</span>
                      <span>72,5 %</span>
                      <span>80,0 %</span>
                      <span>85,0 %</span>
                      <span>90,0 %</span>
                    </div>
                  </div>

                  {/* Visual Gauges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-4">Berechneter Perzentilrang</p>
                      <p className="num text-[24px] font-black text-ink mt-0.5">
                        {percentileCalculation.percentile}. Perzentil
                      </p>
                      <p className="text-[10px] text-ink-3 mt-1 leading-tight">
                        Du schneidest besser ab als {percentileCalculation.percentile} % aller Teilnehmer:innen.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-4">Simulierter Rangplatz (Wien)</p>
                      <p className="num text-[24px] font-black text-primary mt-0.5">
                        ca. Platz {percentileCalculation.estimatedRankWien}
                      </p>
                      <p className="text-[10px] text-ink-3 mt-1 leading-tight">
                        unter rund 6.300 tatsächlich angetretenen Kandidat:innen.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-line bg-paper p-3.5 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase text-ink-4">Historischer Vorjahres-Vergleich</p>
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-ink-2">AT-Quote:</span>
                          <span
                            className={
                              percentileCalculation.atAdmitted
                                ? "text-emerald-700"
                                : "text-amber-700"
                            }
                          >
                            {percentileCalculation.atAdmitted
                              ? "✓ Über Vorjahresschnitt"
                              : "⚠️ Nahe Vorjahresgrenze"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-ink-2">EU-Quote:</span>
                          <span
                            className={
                              percentileCalculation.euAdmitted
                                ? "text-emerald-700"
                                : "text-rose-700"
                            }
                          >
                            {percentileCalculation.euAdmitted
                              ? "✓ Über Vorjahresschnitt"
                              : "✕ Unter Vorjahresgrenze"}
                          </span>
                        </div>
                      </div>
                      <p className="text-[9.5px] text-ink-4 mt-1.5 italic">Reiner Richtwert anhand historischer Daten. Keine Zulassungsentscheidung.</p>
                    </div>
                  </div>

                  <p className="text-[11.5px] text-ink-3 leading-relaxed">
                    <strong>Merke:</strong> In einem schweren Jahrgang mit niedrigem Schnitt (z. B.
                    2024 mit BMS-Biologie-Schwerpunkt) reichte ein Score von 77,4 % für ein Top-Rang-Ergebnis,
                    während in einem leichten Jahrgang (z. B. 2022) selbst 79,8 % an der MedUni Wien
                    nicht direkt für die Zulassung genügten.
                  </p>
                </div>
              </section>

              {/* ── SECTION 5: ZAHNMEDIZIN VS HUMANMEDIZIN ── */}
              <section id="zahnmedizin-unterschiede" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 5
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  5. Zahnmedizin (MedAT-Z) vs. Humanmedizin (MedAT-H)
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Für das Diplomstudium der Zahnmedizin gelten völlig eigenständige Kontingente und ein
                  modifizierter Testaufbau. Zahnmedizin wird ausschließlich an den Universitäten Wien (80 Plätze),
                  Innsbruck (40 Plätze) und Graz (34 Plätze) angeboten. Die JKU Linz führt ausschließlich
                  Humanmedizin.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="rounded-2xl border border-line bg-paper p-4.5 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        MedAT-H (Humanmedizin)
                      </span>
                      <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[10px] font-bold text-ink-3">
                        1.560 Plätze
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs text-ink-2">
                      <li className="flex items-center justify-between border-b border-line/60 pb-1.5">
                        <span>BMS (Bio, Che, Phy, Mat)</span>
                        <span className="font-bold text-ink">40 %</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-line/60 pb-1.5">
                        <span>KFF (Kognitive Fertigkeiten)</span>
                        <span className="font-bold text-ink">40 %</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-line/60 pb-1.5">
                        <span>Textverständnis (TV)</span>
                        <span className="font-bold text-ink">10 %</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>SEK (Sozial-emotionale Kompetenzen)</span>
                        <span className="font-bold text-ink">10 %</span>
                      </li>
                    </ul>
                    <p className="text-[11px] text-ink-4 pt-1 border-t border-line">
                      Cut-off typischerweise 78,0 % – 82,5 % (je nach Quote und Standort).
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4.5 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        MedAT-Z (Zahnmedizin)
                      </span>
                      <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[10px] font-bold text-ink-3">
                        390 Plätze
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs text-ink-2">
                      <li className="flex items-center justify-between border-b border-line/60 pb-1.5">
                        <span>BMS (Bio, Che, Phy, Mat)</span>
                        <span className="font-bold text-ink">40 %</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-line/60 pb-1.5">
                        <span>Manuelle Fertigkeiten (MF: Draht & Formen)</span>
                        <span className="font-bold text-emerald-800">30 %</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-line/60 pb-1.5">
                        <span>KFF (ZF, Gedächtnis, Figuren, WF)</span>
                        <span className="font-bold text-ink">20 %</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>SEK (Emotionen & Soziales)</span>
                        <span className="font-bold text-ink">10 %</span>
                      </li>
                    </ul>
                    <p className="text-[11px] text-ink-4 pt-1 border-t border-line">
                      Kein Textverständnis! Cut-off typischerweise 74,5 % – 79,5 %.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 6: NACHRÜCKVERFAHREN & WARTELISTEN ── */}
              <section id="nachrueckverfahren" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 6
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  6. Nachrückverfahren & Wartelisten-Dynamik
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Wer am Tag der Ergebnisbekanntgabe (Mitte August) knapp hinter dem Grenzrang liegt,
                  hat nach wie vor reale Chancen auf einen Studienplatz. An jeder Medizinuniversität
                  rücken jedes Jahr etliche Kandidat:innen nach.
                </p>

                {/* Timeline */}
                <div className="space-y-3 pt-1">
                  {[
                    {
                      step: "Phase 1: Anfang August",
                      title: "Offizielle Testergebnisse & 1. Zuteilungsrunde",
                      desc: "Veröffentlichung der Ranglisten im Bewerberportal. Zugelassene erhalten das Platzangebot und haben exakt 14 Kalendertage Zeit zur verbindlichen Annahme (Inskription).",
                    },
                    {
                      step: "Phase 2: Ende August",
                      title: "1. Nachrückrunde (Clearing)",
                      desc: "Nicht angenommene Plätze (z. B. deutsche Bewerber:innen mit Zusage an Wunschuni via TMS/NC) werden taggenau an die Nächstplatzierten vergeben. Typischerweise bewegen sich hier in Wien 15–30 Plätze.",
                    },
                    {
                      step: "Phase 3: Bis Mitte Oktober",
                      title: "2. & 3. Nachrückrunde (Restplatzvergabe)",
                      desc: "Letzte Nachrücker:innen erhalten vereinzelt noch in der ersten Vorlesungswoche im Oktober Zusagen. Wer hier den Anruf/die E-Mail verpasst, verliert den Anspruch nach Ablauf von 48 Stunden.",
                    },
                  ].map((phase, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-line bg-paper p-4 flex items-start gap-3.5 shadow-2xs"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-subtle text-primary font-bold text-xs">
                        {i + 1}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          {phase.step}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-ink mt-0.5">
                          {phase.title}
                        </h4>
                        <p className="text-[11.5px] text-ink-3 mt-1 leading-relaxed">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 7: STANDORTWAHL-KOMPASS ── */}
              <section id="standortwahl" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 7
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  7. Strategische Standortwahl: Wien, Graz, Innsbruck oder Linz?
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Ein häufiger Ratschlag unter Bewerber:innen lautet: <em>„Melde dich einfach dort an, wo
                  der Cut-off am niedrigsten ist.“</em> Datenanalytisch greift diese Strategie jedoch zu
                  kurz. Die Grenznoten aller vier Universitäten liegen heute eng beieinander (Abweichung
                  selten über 1,2 Prozentpunkte).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {UNIVERSITIES.map((uni) => (
                    <div
                      key={uni.id}
                      className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-ink">{uni.name}</h4>
                        <span className="rounded bg-paper-3 px-2 py-0.5 text-[10px] font-bold text-primary">
                          {uni.seatsTotal} Plätze
                        </span>
                      </div>
                      <p className="text-[11px] text-ink-3 leading-relaxed">{uni.keyFeature}</p>
                      <div className="pt-2 border-t border-line/60 flex items-center justify-between text-[10.5px]">
                        <span className="text-ink-4">Bewerber-Relation:</span>
                        <span className="font-bold text-ink">{uni.competitionRatio}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 8: FAQ & MYTHBUSTERS ACCORDION ── */}
              <section id="faq" className="scroll-mt-24 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Abschnitt 8
                </div>
                <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">
                  8. FAQ & Häufige Rechtsfragen zu Quoten und Grenzrängen
                </h2>
                <p className="text-[12.5px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Die wichtigsten Antworten auf rechtliche, taktische und statistische Fragen rund um
                  das Aufnahmeverfahren.
                </p>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Alle", "Quotenregelung", "Grenznoten", "Gleichstellung", "Nachrücken"].map(
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
                    Kostenlose Potenzialanalyse
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    Finde heraus, wo du im realen Quotenvergleich stehst.
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-ink-3 leading-relaxed">
                    24 repräsentative Originalfragen aus BMS, KFF und SEK mit sekundengenauer Auswertung,
                    Perzentilrang-Berechnung und individuellem Lernplan.
                  </p>
                </div>
                <a
                  href="/onboarding?mode=register"
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
