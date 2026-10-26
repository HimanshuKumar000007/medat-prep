/**
 * src/pages/MedAT2027TerminePage.tsx
 *
 * Ultra-Premium, Standalone Editorial Guide:
 * "MedAT 2027: Alle Fristen, Gebühren und Termine im Überblick"
 *
 * Built with Austrian Clinical Precision:
 * - Dynamic scroll progress indicator
 * - Live multi-target deadline countdown (Anmeldeschluss, Testtag, Anmeldestart)
 * - Single-click .ics calendar export for Apple/Google Calendar
 * - Active scroll-spy table of contents
 * - Interactive University Campus Explorer (Wien, Graz, Innsbruck, Linz)
 * - Interactive Quota & Chance Calculator (75% AT / 20% EU / 5% Nicht-EU)
 * - Granular Test Day Schedule & Time Pressure Calculator (Seconds-per-question)
 * - Interactive "Darf das ins Sackerl?" Packlisten-Inspector
 * - Official statutory grounding (§ 71b Universitätsgesetz 2002)
 * - 10-Question interactive FAQ accordion
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

/* ── FAQ Data ─────────────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string;
  category: "Fristen" | "Zahlung" | "Testtag" | "Quoten";
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Kann ich mich nach dem 31. März 2027 noch zum MedAT anmelden?",
    a: "Nein. Die Anmeldefrist ist nach § 71b Universitätsgesetz 2002 eine strikte gesetzliche Ausschlussfrist. Nach dem 31. März 2027 um 24:00 Uhr ist keinerlei Anmeldung mehr möglich — weder auf Kulanz noch gegen Verspätungszuschlag. Es gibt im gesamten österreichischen Hochschulrecht ausnahmslos keine Nachfrist.",
    category: "Fristen",
  },
  {
    q: "Was passiert, wenn meine 110 € erst nach dem 31. März bei der Universität einlangen?",
    a: "Deine Registrierung verfällt unwiderruflich und du wirst nicht zur Prüfung zugelassen. Entscheidend ist der tatsächliche Geldeingang auf dem Konto der Medizinischen Universität, nicht das Datum deines Überweisungsauftrags. Wir raten dringend zu Kreditkarte oder EPS-Sofortüberweisung am Tag der Anmeldung.",
    category: "Zahlung",
  },
  {
    q: "Was ist der Referenznummer-Fehler und warum scheitern so viele daran?",
    a: "Jede:r Bewerber:in erhält bei der Registrierung eine persönliche, 8- bis 10-stellige Bearbeitungsnummer. Bei Banküberweisungen muss diese Nummer zwingend als Zahlungsreferenz / Verwendungszweck angegeben werden. Fehlt sie oder ist sie vertippt, kann das automatisierte Bankingsystem der Universität das Geld keinem Konto zuordnen. Die Zahlung gilt als nicht fristgerecht geleistet.",
    category: "Zahlung",
  },
  {
    q: "Kann ich meinen Prüfungsstandort nach der Anmeldung noch wechseln?",
    a: "Nein. Die Wahl zwischen MedUni Wien, MedUni Graz, MedUni Innsbruck und JKU Linz ist mit dem Absenden der Online-Anmeldung endgültig und kann nachträglich nicht mehr geändert werden. Du konkurrierst ausschließlich an dem Standort, an dem du registriert bist.",
    category: "Fristen",
  },
  {
    q: "Welcher Lichtbildausweis ist am Testtag zulässig?",
    a: "Ausschließlich ein gültiger Reisepass oder Personalausweis im Original. Ein Führerschein wird an mehreren Standorten (insbesondere MedUni Wien) ausdrücklich abgelehnt, da er kein Staatsbürgerschaftsnachweis ist. Digitale Ausweise auf dem Smartphone (z. B. eAusweis) sind in den Prüfungshallen streng verboten.",
    category: "Testtag",
  },
  {
    q: "Darf ich mein Smartphone ausgeschaltet in der Hosentasche tragen?",
    a: "Nein! Das Mitführen eines Smartphones, einer Smartwatch oder jeglicher internetfähiger Hardware im Prüfungssaal führt zur sofortigen Disqualifikation wegen Täuschungsversuchs — selbst wenn das Gerät vollständig ausgeschaltet ist. Alle elektronischen Geräte müssen an der Garderobe verbleiben.",
    category: "Testtag",
  },
  {
    q: "Gilt für mich die Österreicher-Quote (75 %), wenn ich eine österreichische Matura habe?",
    a: "Ja. Maßgeblich für das 75-%-Kontingent ist primär das österreichische Reifeprüfungszeugnis (Matura) oder ein nach EU-Recht bzw. Staatsverträgen unmittelbar gleichgestellter Status (z. B. Südtiroler:innen, bestimmte Diplomatenkinder). Deutsche Abiturient:innen fallen automatisch in die 20-%-EU-Quote.",
    category: "Quoten",
  },
  {
    q: "Kann ich mich gleichzeitig für MedAT-H (Human) und MedAT-Z (Zahn) registrieren?",
    a: "Nein. Eine Doppelbewerbung ist ausgeschlossen. Beide Tests finden am selben Tag zur selben Uhrzeit statt und weisen unterschiedliche Prüfungsteile auf (Textverständnis bei MedAT-H vs. Manuelle Fertigkeiten wie Drahtbiegen & Formen spiegeln bei MedAT-Z).",
    category: "Fristen",
  },
  {
    q: "Wann und wo erhalte ich die offizielle Testtageinladung?",
    a: "Die Einladung mit deiner exakten Sitzplatznummer, Hallenzuweisung und Einlasszeit wird voraussichtlich Mitte bis Ende Mai 2027 per E-Mail versandt und steht zusätzlich im Anmeldeportal zum Download bereit. Du musst diese Einladung ausgedruckt mitbringen.",
    category: "Testtag",
  },
  {
    q: "Wann werden die MedAT-Ergebnisse 2027 veröffentlicht?",
    a: "Erfahrungsgemäß werden die Ergebnisse in der ersten Augusthälfte 2027 (meist zwischen dem 6. und 12. August) zeitgleich im Online-Portal freigeschaltet. Du erfährst dort deinen exakten Prozentwert, deinen Rangplatz und ob du einen Studienplatz erhalten hast.",
    category: "Testtag",
  },
];

/* ── University Campus Profiles ────────────────────────────────── */
interface UniversityCampus {
  id: string;
  name: string;
  city: string;
  venue: string;
  address: string;
  transit: string;
  placesTotal: number;
  placesHuman: number;
  placesZahn: number;
  applicantsEst: number;
  ratio: string;
  cutoffScorePast: string;
  tagline: string;
  hallDetails: string;
  emoji: string;
}

const UNIVERSITIES: UniversityCampus[] = [
  {
    id: "wien",
    name: "Medizinische Universität Wien",
    city: "Wien",
    venue: "Messe Wien Exhibition & Congress Center (Halle A / D)",
    address: "Trabrennstraße 7, 1020 Wien",
    transit: "U-Bahn U2 (Station Krieau oder Messe-Prater)",
    placesTotal: 760,
    placesHuman: 680,
    placesZahn: 80,
    applicantsEst: 8050,
    ratio: "1 : 10,6",
    cutoffScorePast: "79,4 % (AT) · 81,2 % (EU)",
    tagline: "Größte Medizin-Fakultät im deutschen Sprachraum",
    hallDetails: "Sehr weitläufige Messehallen mit starker Klimatisierung. Temperatur schwankt oft zwischen 19 °C morgens und 24 °C nachmittags. Zwiebellook zwingend ratsam.",
    emoji: "🏛️",
  },
  {
    id: "innsbruck",
    name: "Medizinische Universität Innsbruck",
    city: "Innsbruck",
    venue: "Messe Innsbruck (Hallen 1 & 2)",
    address: "Ing.-Etzel-Straße 1, 6020 Innsbruck",
    transit: "S-Bahn / Tram (Station Messe bzw. Hauptbahnhof 10 Min. zu Fuß)",
    placesTotal: 410,
    placesHuman: 370,
    placesZahn: 40,
    applicantsEst: 3450,
    ratio: "1 : 8,4",
    cutoffScorePast: "78,6 % (AT) · 80,8 % (EU)",
    tagline: "Spitzenmedizin im Herzen der Alpen mit hohem Praxisanteil",
    hallDetails: "Zentrale Lage direkt in Innsbruck. Ausgezeichnete öffentliche Erreichbarkeit. Traditionell stark besetztes EU-Kontingent durch geographische Nähe zu Bayern und Südtirol.",
    emoji: "⛰️",
  },
  {
    id: "graz",
    name: "Medizinische Universität Graz",
    city: "Graz",
    venue: "Messe Graz / Stadthalle Graz",
    address: "Messeplatz 1, 8010 Graz",
    transit: "Straßenbahn Linien 4 & 5 (Station Stadthalle)",
    placesTotal: 370,
    placesHuman: 336,
    placesZahn: 34,
    applicantsEst: 3180,
    ratio: "1 : 8,6",
    cutoffScorePast: "78,1 % (AT) · 80,4 % (EU)",
    tagline: "Moderner MED CAMPUS Graz mit innovativer Modularlehre",
    hallDetails: "Kompakte Durchführung in der Stadthalle Graz. Akustik ist gut verständlich. Parkmöglichkeiten vor Ort rasch erschöpft, Anreise mit Öffis empfohlen.",
    emoji: "🏔️",
  },
  {
    id: "linz",
    name: "Johannes Kepler Universität Linz",
    city: "Linz",
    venue: "JKU Campus / Science Park & Kepler Hall",
    address: "Altenberger Straße 69, 4040 Linz",
    transit: "Straßenbahn Linien 1 & 2 (Station Universität)",
    placesTotal: 310,
    placesHuman: 310,
    placesZahn: 0,
    applicantsEst: 2280,
    ratio: "1 : 7,4",
    cutoffScorePast: "77,9 % (AT) · 80,1 % (EU)",
    tagline: "Modernste Medizinische Fakultät Österreichs (nur Humanmedizin)",
    hallDetails: "Grüner Campus im Norden von Linz. Nur Humanmedizin (keine Zahnmedizin). Klinischer Teil des Studiums am Universitätsklinikum Kepler.",
    emoji: "🎓",
  },
];

/* ── Test Day Schedule Subtests & Seconds ─────────────────────── */
interface SubtestBlock {
  title: string;
  timeRange: string;
  durationMinutes: number;
  questionCount: number;
  secondsPerQuestion: number;
  category: "BMS" | "TV" | "KFF" | "SEK" | "PAUSE";
  importance: "high" | "critical" | "neutral";
  tip: string;
}

const SCHEDULE_BLOCKS: SubtestBlock[] = [
  {
    title: "Einlass, Sicherheits- & Ausweiskontrolle",
    timeRange: "07:30 – 08:15",
    durationMinutes: 45,
    questionCount: 0,
    secondsPerQuestion: 0,
    category: "PAUSE",
    importance: "neutral",
    tip: "Geduld an den Toren bewahren. Mindestens 30 Min. vor Hallenschluss vor Ort sein.",
  },
  {
    title: "BMS — Biologie, Chemie, Physik & Mathematik",
    timeRange: "08:30 – 09:45",
    durationMinutes: 75,
    questionCount: 94,
    secondsPerQuestion: 47.9,
    category: "BMS",
    importance: "critical",
    tip: "40 % des MedAT! Taktik: Biologie rasch lösen (~35 Sek.), Zeitpuffer für Physik & Mathe sichern.",
  },
  {
    title: "Textverständnis (TV) [nur MedAT-H]",
    timeRange: "09:55 – 10:30",
    durationMinutes: 35,
    questionCount: 12,
    secondsPerQuestion: 175,
    category: "TV",
    importance: "high",
    tip: "10 % des MedAT. Zuerst Fragen & Signalwörter überfliegen, dann strukturiert im Fachtext scannen.",
  },
  {
    title: "KFF Teil 1: Figuren & Gedächtnis (Einprägephase)",
    timeRange: "10:45 – 12:45",
    durationMinutes: 120,
    questionCount: 40,
    secondsPerQuestion: 90,
    category: "KFF",
    importance: "critical",
    tip: "Zahlenfolgen (15 Min.) & Figuren zusammensetzen (20 Min.). Danach 8 Min. hochkonzentrierte Ausweis-Einprägung.",
  },
  {
    title: "Regenerationspause (Mittagspause)",
    timeRange: "12:45 – 13:45",
    durationMinutes: 60,
    questionCount: 0,
    secondsPerQuestion: 0,
    category: "PAUSE",
    importance: "neutral",
    tip: "Kein Fast Food oder Energy Drink! Bananen, Nüsse, Wasser und 10 Min. Frischluft gegen das Mittagstief.",
  },
  {
    title: "KFF Teil 2: Gedächtnis (Abruf), Wortflüssigkeit & Implikationen",
    timeRange: "14:00 – 15:30",
    durationMinutes: 90,
    questionCount: 50,
    secondsPerQuestion: 72,
    category: "KFF",
    importance: "critical",
    tip: "Gedächtnis-Abruf (15 Min., 25 Fragen) erfordert maximale Ruhe. Bei Wortflüssigkeit Vokalanker nutzen.",
  },
  {
    title: "SEK — Soziales Entscheiden & Emotionen",
    timeRange: "15:40 – 16:45",
    durationMinutes: 65,
    questionCount: 28,
    secondsPerQuestion: 64,
    category: "SEK",
    importance: "high",
    tip: "10 % des MedAT. Handlungsbegründungen nach universellen ethischen Prinzipien und Patientenwohl werten.",
  },
];

/* ── "Darf das ins Sackerl?" Packlisten-Checker Items ────────── */
interface GearItem {
  id: string;
  name: string;
  allowed: boolean;
  status: "Erlaubt" | "Streng verboten" | "Bedingt";
  badgeColor: string;
  detail: string;
  icon: string;
}

const GEAR_ITEMS: GearItem[] = [
  {
    id: "passport",
    name: "Reisepass / Personalausweis (Original)",
    allowed: true,
    status: "Erlaubt",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    detail: "Zwingend vorgeschrieben! Muss am Testtag noch gültig sein. Führerschein wird nicht anerkannt.",
    icon: "🛂",
  },
  {
    id: "einladung",
    name: "Ausgedruckte Testtageinladung",
    allowed: true,
    status: "Erlaubt",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    detail: "Mit Barcode und Sitzplatznummer. Schwarzweiß oder Farbe ist egal.",
    icon: "📄",
  },
  {
    id: "water",
    name: "Durchsichtige Trinkflasche (ohne Etikett)",
    allowed: true,
    status: "Erlaubt",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    detail: "Bis zu 1,0 Liter. Sämtliche Papier- oder Plastikbanderolen müssen vorab rückstandsfrei entfernt werden.",
    icon: "💧",
  },
  {
    id: "snacks",
    name: "Snacks (Nüsse, Bananen, Riegel)",
    allowed: true,
    status: "Erlaubt",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    detail: "Ohne knisternde Aluminiumverpackungen. Am besten vorab in kleine transparente Beutel umfüllen.",
    icon: "🍌",
  },
  {
    id: "watch-analog",
    name: "Analoge Armbanduhr (ohne Rechner)",
    allowed: true,
    status: "Erlaubt",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    detail: "Einfaches Zifferblatt erlaubt. Piep- und Alarmtöne müssen vorab zwingend stummgeschaltet sein.",
    icon: "⌚",
  },
  {
    id: "smartwatch",
    name: "Smartwatch / Apple Watch / Garmin",
    allowed: false,
    status: "Streng verboten",
    badgeColor: "bg-red-50 text-red-800 border-red-200",
    detail: "Sofortige Disqualifikation beim Betreten des Saals — auch wenn ausgeschaltet oder im Flugmodus!",
    icon: "🚫",
  },
  {
    id: "smartphone",
    name: "Smartphone / Mobiltelefon",
    allowed: false,
    status: "Streng verboten",
    badgeColor: "bg-red-50 text-red-800 border-red-200",
    detail: "Muss an der Garderobe bleiben. Ein Klingeln oder Auffinden am Platz annulliert den gesamten Test.",
    icon: "📵",
  },
  {
    id: "earplugs",
    name: "Ohrstöpsel / Noise-Cancelling-Kopfhörer",
    allowed: false,
    status: "Streng verboten",
    badgeColor: "bg-red-50 text-red-800 border-red-200",
    detail: "Generell unzulässig, damit Durchsagen der Prüfungsleitung jederzeit wahrgenommen werden können.",
    icon: "🎧",
  },
  {
    id: "pencil-ruler",
    name: "Lineal / Eigene Notizblätter",
    allowed: false,
    status: "Streng verboten",
    badgeColor: "bg-red-50 text-red-800 border-red-200",
    detail: "Notizen dürfen ausschließlich auf den offiziell ausgeteilten Prüfungsheften angefertigt werden.",
    icon: "📏",
  },
  {
    id: "meds",
    name: "Notwendige Medikamente (z. B. Asthma-Spray)",
    allowed: true,
    status: "Erlaubt",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    detail: "Im transparenten Beutel erlaubt. Bei medizinischen Sonderbedarfen vorab Bescheinigung mitführen.",
    icon: "💊",
  },
  {
    id: "highlighter",
    name: "Textmarker / Farbige Filzstifte",
    allowed: false,
    status: "Streng verboten",
    badgeColor: "bg-red-50 text-red-800 border-red-200",
    detail: "Nur die bereitgestellten bzw. zugelassenen Kugelschreiber (blau/schwarz) dürfen verwendet werden.",
    icon: "🖍️",
  },
  {
    id: "tissue",
    name: "Taschentücher (lose ohne Umverpackung)",
    allowed: true,
    status: "Erlaubt",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    detail: "Erlaubt, wenn sie ohne Plastikfolie oder Kartonpackung im Beutel liegen.",
    icon: "🤧",
  },
];

/* ── Table of Contents Sections ───────────────────────────────── */
const TOC_SECTIONS = [
  { id: "anmeldung", label: "1. Anmeldefenster" },
  { id: "timeline", label: "2. Meilensteine 2027" },
  { id: "kosten", label: "3. Kosten & Bezahlung" },
  { id: "standorte", label: "4. Universitäts-Vergleich" },
  { id: "quoten", label: "5. Quoten & Chancen" },
  { id: "tagesablauf", label: "6. Detaillierter Testtag" },
  { id: "packliste", label: "7. Sackerl-Inspector" },
  { id: "tipps", label: "8. Praxistipps vor Ort" },
  { id: "faq", label: "9. Häufige Fragen" },
];

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export default function MedAT2027TerminePage() {
  // Active TOC section on scroll
  const [activeSection, setActiveSection] = useState<string>("anmeldung");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // University Tab State
  const [selectedUni, setSelectedUni] = useState<string>("wien");

  // Quota Calculator State
  const [selectedQuota, setSelectedQuota] = useState<"at" | "eu" | "non-eu">("at");

  // Sackerl Filter State
  const [sackerlFilter, setSackerlFilter] = useState<"all" | "allowed" | "forbidden">("all");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>("Alle");

  // Mobile Table of Contents State
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  // Track page view and setup scroll handler
  useEffect(() => {
    document.title = "MedAT 2027 Fristen, Termine & Gebühren — Offizieller Leitfaden | MedAT Prep Wien";
    window.scrollTo(0, 0);
    track("page_view", { page: "medat-2027-termine-premium" });

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }

      // Detect active section
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

  // Calendar .ics Export Handler
  const handleDownloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//MedAT Prep Wien//MedAT 2027 Fristen//DE",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:MedAT 2027 Offizielle Termine",
      "X-WR-TIMEZONE:Europe/Vienna",
      "BEGIN:VEVENT",
      "UID:medat-2027-opening@medatprep.at",
      "DTSTAMP:20270101T000000Z",
      "DTSTART:20270301T070000Z",
      "DTEND:20270301T080000Z",
      "SUMMARY:🇦🇹 MedAT 2027: Anmeldestart (medizinstudieren.at)",
      "DESCRIPTION:Die Online-Anmeldung für den MedAT 2027 an den Medizinischen Universitäten Wien, Graz, Innsbruck und JKU Linz öffnet heute um 08:00 Uhr.",
      "LOCATION:www.medizinstudieren.at",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "BEGIN:VEVENT",
      "UID:medat-2027-closing@medatprep.at",
      "DTSTAMP:20270101T000000Z",
      "DTSTART:20270331T210000Z",
      "DTEND:20270331T220000Z",
      "SUMMARY:🚨 MedAT 2027: Anmeldeschluss & Zahlungsfrist (110 €)",
      "DESCRIPTION:STRIKTE AUSSCHLUSSFRIST: 24:00 Uhr schließt das Portal. Bis heute müssen auch die 110 Euro Kostenbeitrag mit korrekter persönlicher Referenznummer eingegangen sein!",
      "LOCATION:www.medizinstudieren.at",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "BEGIN:VEVENT",
      "UID:medat-2027-testday@medatprep.at",
      "DTSTAMP:20270101T000000Z",
      "DTSTART:20270702T053000Z",
      "DTEND:20270702T150000Z",
      "SUMMARY:🏥 MedAT 2027 Testtag (Wien, Graz, Innsbruck, Linz)",
      "DESCRIPTION:Einlass ab 07:30 Uhr. Gültigen Reisepass/Personalausweis, ausgedruckte Einladung und transparentes Sackerl nicht vergessen!",
      "LOCATION:Messe Wien / Messe Graz / Messe Innsbruck / JKU Linz",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "MedAT-2027-Termine-Offiziell.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast("Kalenderdatei (.ics) erfolgreich heruntergeladen!", "success");
    track("calendar_export_download", { source: "medat_2027_termine_page" });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link zur Seite in die Zwischenablage kopiert", "success");
    track("share_link_copied", { page: "medat-2027-termine" });
  };

  // Filtered gear items
  const filteredGear = useMemo(() => {
    if (sackerlFilter === "allowed") return GEAR_ITEMS.filter((g) => g.allowed);
    if (sackerlFilter === "forbidden") return GEAR_ITEMS.filter((g) => !g.allowed);
    return GEAR_ITEMS;
  }, [sackerlFilter]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return FAQ_ITEMS;
    return FAQ_ITEMS.filter((f) => f.category === faqCategory);
  }, [faqCategory]);

  const activeCampus = UNIVERSITIES.find((u) => u.id === selectedUni) || UNIVERSITIES[0];

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
              <span>🇦🇹 Sonderleitfaden 2027</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownloadIcs}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="Alle Termine in deinen Kalender (.ics) importieren"
            >
              <IconCalendar className="h-3.5 w-3.5" />
              <span>Kalender-Export</span>
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
          {/* Subtle background glow */}
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
              <span className="text-primary font-bold">Termine & Quoten</span>
            </nav>

            {/* Badges (scaled by ~15% & mobile tuned) */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-primary">
                Termine & Quoten 2027
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 6 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> 15. Jänner 2027
              </span>
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-emerald-800">
                ✓ Redaktionell verifiziert
              </span>
            </div>

            {/* Editorial Title (optimized for mobile) */}
            <h1 className="mt-3 text-[21px] xs:text-[25px] sm:text-[33px] lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-ink">
              MedAT 2027: Alle Fristen, Gebühren und Termine im Überblick
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[12px] xs:text-[13px] sm:text-[15px] leading-relaxed text-ink-2">
              Von der Internet-Anmeldung bis zum Testtag an den Medizinischen Universitäten Wien,
              Innsbruck, Graz und der JKU Linz — der maßgebliche Leitfaden für deine Zulassungsplanung
              nach österreichischem Hochschulrecht.
            </p>

            {/* 4-Stat Quick Facts Ribbon (tuned for small screens) */}
            <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconCalendar className="h-3 w-3 shrink-0" />
                  <span className="truncate">Anmeldung</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">1. – 31. März</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">Ausschlussfrist 24:00</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <span className="shrink-0 text-xs">💶</span>
                  <span className="truncate">Kostenbeitrag</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">110,00 €</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">Fristgerechter Eingang</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <IconClock className="h-3 w-3 shrink-0" />
                  <span className="truncate">Testtag</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">2. Juli 2027</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">Einlass ab 07:30 Uhr</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-line bg-paper/95 p-2.5 sm:p-3.5 shadow-2xs">
                <div className="flex items-center gap-1 text-primary text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <span className="shrink-0 text-xs">🏛️</span>
                  <span className="truncate">Studienplätze</span>
                </div>
                <p className="num mt-1 text-[13.5px] xs:text-[15px] sm:text-[17px] font-bold text-ink leading-tight">~1.950</p>
                <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] text-ink-3 leading-tight mt-0.5 truncate">Wien, Graz, Ibk., Linz</p>
              </div>
            </div>

            {/* Quick Action Utility Bar */}
            <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2.5 border-t border-line/70 text-xs">
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <button
                  onClick={handleDownloadIcs}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-line bg-paper px-2.5 py-1.5 text-[10px] xs:text-[11px] font-bold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer shadow-2xs active:scale-[0.98]"
                  title="Alle Termine in deinen Kalender (.ics) importieren"
                >
                  <IconCalendar className="h-3 w-3 text-primary shrink-0" />
                  <span className="truncate">Kalender-Export (.ics)</span>
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
                Verbindliche Fristen nach § 71b Universitätsgesetz (UG 2002)
              </span>
            </div>
          </div>
        </section>

        {/* ════════════════ BODY: TOC + CONTENT ════════════════ */}
        <section className="py-7 sm:py-12 lg:py-16">
          <div className="wrap max-w-5xl">
            <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
              {/* ──── Sticky Table of Contents (Desktop Sidebar) ──── */}
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
                    <button
                      onClick={handleDownloadIcs}
                      className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-center text-xs font-bold text-ink hover:border-primary hover:text-primary transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <IconCalendar className="h-3.5 w-3.5 text-primary" />
                      <span>Termine herunterladen</span>
                    </button>
                    <a
                      href="/onboarding?mode=register"
                      className="block rounded-xl bg-primary px-4 py-2.5 text-center text-xs font-bold text-white shadow-sm hover:bg-primary-hover transition-colors"
                    >
                      Einstufungstest starten (0 €) →
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
                          className={`rounded-lg px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors flex items-center justify-between ${
                            activeSection === item.id
                              ? "bg-primary-subtle text-primary font-bold"
                              : "text-ink-2 hover:bg-paper hover:text-ink"
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
                      <span>Die 4 eisernen Regeln des MedAT 2027</span>
                    </h2>
                    <span className="hidden sm:inline-block rounded-md bg-paper border border-line px-2 py-0.5 text-[11px] font-semibold text-ink-3">
                      Prüfungsjahr 2027
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 text-[12.5px] sm:text-[13.5px] text-ink-2">
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3 sm:p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">1. bis 31. März 2027:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          Unverrückbare Ausschlussfrist. Keine Nachmeldefrist, keine Ausnahmen.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3 sm:p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">110,00 € Kostenbeitrag:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          Muss vor dem 31. März einlangen. Unbedingt sofort online per Kreditkarte/EPS zahlen.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3 sm:p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">Testtag 2. Juli 2027:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          Pünktlich am ersten Freitag im Juli. Einlass ab 07:30 Uhr, Teststart um 08:30 Uhr.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-paper p-3 sm:p-3.5 border border-line/70">
                      <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink">4 Standorte zur Wahl:</strong>
                        <p className="text-[11.5px] sm:text-[12.5px] text-ink-3 mt-0.5 leading-snug">
                          Wien, Graz, Innsbruck oder Linz. Nach der Registrierung ist der Ort nicht mehr änderbar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════
                   § 1  ANMELDEFENSTER
                   ════════════════════════════════════════════════════ */}
                <section id="anmeldung" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 1
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Das Anmeldefenster im März 2027
                    </h2>
                  </div>

                  <div className="space-y-3.5 text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    <p>
                      Die gesamte Bewerbung für alle vier staatlichen Medizin-Fakultäten in Österreich erfolgt
                      zentral über die offizielle Web-Plattform{" "}
                      <a
                        href="https://www.medizinstudieren.at"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-primary underline underline-offset-2"
                      >
                        www.medizinstudieren.at
                      </a>
                      . Es gibt keine separaten Bewerbungen bei den einzelnen Universitäten.
                    </p>
                    <p>
                      Das Registrierungsportal öffnet pünktlich am{" "}
                      <strong className="text-ink font-semibold">1. März 2027 um 08:00 Uhr MEZ</strong> und
                      schließt unwiderruflich am{" "}
                      <strong className="text-ink font-semibold">31. März 2027 um 24:00 Uhr MESZ</strong>.
                    </p>
                  </div>

                  {/* Warning Callout: Referenznummer */}
                  <div className="rounded-xl sm:rounded-2xl border border-amber-300 bg-amber-50/80 p-4 sm:p-6 text-[13px] sm:text-[14px] text-amber-950 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[14px] sm:text-[15px]">
                      <span className="text-base sm:text-lg">⚠️</span>
                      <span>Häufigster Formfehler: Die persönliche Bearbeitungsnummer</span>
                    </div>
                    <p className="leading-relaxed">
                      Jedes Jahr verlieren rund <strong>400 bis 600 Studieninteressierte</strong> ihren
                      Prüfungsanspruch, weil bei einer klassischen Banküberweisung die persönliche
                      Zahlungsreferenz vergessen oder falsch eingegeben wurde.
                    </p>
                    <p className="text-[12px] sm:text-[13px] text-amber-900 font-medium">
                      → <strong>Unsere Empfehlung:</strong> Bezahle direkt im Zuge der Online-Anmeldung mit
                      Kreditkarte (Visa/Mastercard) oder EPS-Onlineüberweisung. Du erhältst sofort eine
                      automatisierte Zahlungsbestätigung und dein Status wechselt sofort auf „Zugelassen“.
                    </p>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 2  TIMELINE 2027
                   ════════════════════════════════════════════════════ */}
                <section id="timeline" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 2
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Offizielle Meilensteine: Der Weg zum Studienplatz 2027
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    Vom Öffnen des Portals bis zur Immatrikulation im Oktober: Behalte diese sechs Schlüsseltermine
                    in deinem Kalender.
                  </p>

                  <div className="relative border-l-2 border-line ml-3 sm:ml-6 pl-4 sm:pl-8 space-y-5 sm:space-y-8">
                    {[
                      {
                        badge: "1. März 2027 · 08:00 Uhr",
                        title: "Internet-Anmeldung öffnet",
                        desc: "Registrierung auf medizinstudieren.at. Auswahl des Studienortes (Wien, Graz, Innsbruck, Linz) und des Verfahrens (MedAT-H oder MedAT-Z).",
                        action: "Konto anlegen & Stammdaten erfassen",
                        icon: "🟢",
                      },
                      {
                        badge: "31. März 2027 · 24:00 Uhr",
                        title: "Anmeldeschluss & Zahlungsfrist (110 €)",
                        desc: "Gesetzliche Ausschlussfrist. Nach 24:00 Uhr ist keine Registrierung mehr möglich. Der Kostenbeitrag muss zwingend bei der Universität eingegangen sein.",
                        action: "Ausschlussfrist nach § 71b UG",
                        icon: "🚨",
                        critical: true,
                      },
                      {
                        badge: "Mitte bis Ende Mai 2027",
                        title: "Versand der offiziellen Testtageinladung",
                        desc: "Die Einladung mit deiner persönlichen Sitzplatznummer und Einlasszeit wird per E-Mail versandt und im Portal hinterlegt.",
                        action: "Einladung ausdrucken & Anreise buchen",
                        icon: "✉️",
                      },
                      {
                        badge: "Freitag, 2. Juli 2027 · 07:30 Uhr",
                        title: "Der MedAT 2027 Testtag",
                        desc: "Bundesweit zeitgleiche Durchführung an allen vier Standorten. Einlass ab 07:30 Uhr, Prüfungsbeginn 08:30 Uhr, Ende ca. 16:45 Uhr.",
                        action: "Reisepass, Einladung & Verpflegung mitnehmen",
                        icon: "🏥",
                        critical: true,
                      },
                      {
                        badge: "Erste Augusthälfte 2027",
                        title: "Ergebnisveröffentlichung & Grenzränge",
                        desc: "Bekanntgabe der Testergebnisse im Webportal. Zuteilung der Studienplätze gemäß den gesetzlichen Quoten (AT / EU / Drittstaat).",
                        action: "Rangplatz & Zulassungsbescheid prüfen",
                        icon: "📊",
                      },
                      {
                        badge: "September / Oktober 2027",
                        title: "Persönliche Inskription & Studienbeginn",
                        desc: "Fristgerechte persönliche Vorlage von Reifeprüfungszeugnis und Zulassungsbescheid an der jeweiligen Universität. Start des Wintersemesters 2027/28.",
                        action: "Erstsemestrigen-Einführung",
                        icon: "🎓",
                      },
                    ].map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Dot indicator */}
                        <div
                          className={`absolute -left-[23px] sm:-left-[41px] top-1.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-paper border-2 ${
                            step.critical ? "border-primary text-primary" : "border-slate-400 text-slate-500"
                          } text-[10px] sm:text-xs shadow-xs`}
                        >
                          {step.icon}
                        </div>

                        <div className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-6 transition-all ${
                          step.critical
                            ? "border-primary/40 bg-primary-subtle/30 shadow-xs hover:border-primary"
                            : "border-line bg-paper hover:border-line-2"
                        }`}>
                          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-2">
                            <span className="num text-[11px] sm:text-xs font-bold text-primary">
                              {step.badge}
                            </span>
                            <span className="self-start xs:self-auto rounded-md bg-paper-3 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-ink-3 border border-line">
                              {step.action}
                            </span>
                          </div>
                          <h3 className="mt-1.5 sm:mt-2 text-[15px] sm:text-[18px] font-bold text-ink leading-snug">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-[12px] sm:text-[13.5px] leading-relaxed text-ink-2">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 3  KOSTENBEITRAG & BEZAHLUNG
                   ════════════════════════════════════════════════════ */}
                <section id="kosten" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 3
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Kostenbeitrag (110,00 €) & Bezahlverfahren
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    Der Kostenbeitrag für die Teilnahme am Zulassungsverfahren beträgt gemäß Universitätsgesetz
                    unverändert <strong className="text-ink">110,00 Euro</strong> pro Kandidat:in. Er deckt die
                    Miete der Messehallen, das Sicherheitspersonal, die Drucklegung der versiegelten
                    Aufgabenhefte und die maschinelle Bogenlesung ab.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="rounded-xl sm:rounded-2xl border-2 border-emerald-300 bg-emerald-50/60 p-4 sm:p-5 space-y-1.5 sm:space-y-2 relative">
                      <span className="absolute -top-3 right-4 rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-white uppercase tracking-wider">
                        Empfohlen
                      </span>
                      <p className="text-xl sm:text-2xl">💳</p>
                      <h4 className="font-bold text-ink text-[14px] sm:text-[15px]">Kreditkarte</h4>
                      <p className="text-[11.5px] sm:text-xs text-ink-2 leading-relaxed">
                        Visa / Mastercard / Diners. Sofortige Echtzeit-Verbuchung und direkte Freischaltung des Zulassungsstatus.
                      </p>
                      <p className="text-[10.5px] sm:text-[11px] font-bold text-emerald-800 pt-0.5 sm:pt-1">Laufzeit: 0 Sekunden</p>
                    </div>

                    <div className="rounded-xl sm:rounded-2xl border-2 border-emerald-300 bg-emerald-50/60 p-4 sm:p-5 space-y-1.5 sm:space-y-2 relative">
                      <span className="absolute -top-3 right-4 rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-white uppercase tracking-wider">
                        Empfohlen
                      </span>
                      <p className="text-xl sm:text-2xl">🏦</p>
                      <h4 className="font-bold text-ink text-[14px] sm:text-[15px]">EPS-Überweisung</h4>
                      <p className="text-[11.5px] sm:text-xs text-ink-2 leading-relaxed">
                        Österreichischer Standard für Online-Banking. Automatische Übertragung aller Referenzdaten ohne Tippfehler.
                      </p>
                      <p className="text-[10.5px] sm:text-[11px] font-bold text-emerald-800 pt-0.5 sm:pt-1">Laufzeit: 0 Sekunden</p>
                    </div>

                    <div className="rounded-xl sm:rounded-2xl border border-amber-300 bg-amber-50/50 p-4 sm:p-5 space-y-1.5 sm:space-y-2">
                      <p className="text-xl sm:text-2xl">📨</p>
                      <h4 className="font-bold text-ink text-[14px] sm:text-[15px]">Banküberweisung (SEPA)</h4>
                      <p className="text-[11.5px] sm:text-xs text-ink-2 leading-relaxed">
                        Manuelle IBAN-Überweisung. Erfordert penible Eingabe der Bearbeitungsnummer im Verwendungszweck.
                      </p>
                      <p className="text-[10.5px] sm:text-[11px] font-bold text-amber-800 pt-0.5 sm:pt-1">Laufzeit: 1 bis 3 Werktage</p>
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 4  STANDORT-VERGLEICH (INTERACTIVE TABS)
                   ════════════════════════════════════════════════════ */}
                <section id="standorte" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 4
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Standort-Vergleich: Wien, Innsbruck, Graz & Linz
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    Insgesamt stehen an den vier Universitäten rund <strong className="text-ink">1.950 Studienplätze</strong> zur
                    Verfügung. Jeder Standort hat eigene Besonderheiten bezüglich Teilnehmerfeld, Anreise und
                    Hallenbedingungen.
                  </p>

                  {/* University Campus Interactive Selector */}
                  <div className="rounded-2xl sm:rounded-3xl border border-line bg-paper overflow-hidden shadow-xs">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-line overflow-x-auto no-scrollbar bg-paper-2">
                      {UNIVERSITIES.map((uni) => {
                        const isSelected = selectedUni === uni.id;
                        return (
                          <button
                            key={uni.id}
                            onClick={() => setSelectedUni(uni.id)}
                            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer shrink-0 ${
                              isSelected
                                ? "border-primary bg-paper text-primary shadow-xs"
                                : "border-transparent text-ink-3 hover:text-ink hover:bg-paper/50"
                            }`}
                          >
                            <span>{uni.emoji}</span>
                            <span>{uni.city}</span>
                            <span className="hidden sm:inline text-[11px] font-mono text-ink-4">
                              ({uni.placesTotal} Plätze)
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Campus Panel */}
                    <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                        <div>
                          <h3 className="text-[17px] sm:text-[22px] font-extrabold text-ink leading-snug">
                            {activeCampus.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-primary font-semibold mt-0.5">
                            {activeCampus.tagline}
                          </p>
                        </div>
                        <span className="self-start sm:self-auto rounded-full bg-slate-900 text-white px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-bold">
                          Konkurrenz {activeCampus.ratio}
                        </span>
                      </div>

                      {/* Stat Metrics Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        <div className="rounded-xl border border-line bg-paper-2 p-2.5 sm:p-3.5">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4 block">
                            Gesamtplätze
                          </span>
                          <span className="num text-lg sm:text-xl font-extrabold text-ink block mt-0.5">
                            {activeCampus.placesTotal}
                          </span>
                          <span className="text-[9.5px] sm:text-[10.5px] text-ink-3 block mt-0.5 leading-tight">
                            {activeCampus.placesHuman} Human · {activeCampus.placesZahn} Zahn
                          </span>
                        </div>
                        <div className="rounded-xl border border-line bg-paper-2 p-2.5 sm:p-3.5">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4 block">
                            Bewerber:innen
                          </span>
                          <span className="num text-lg sm:text-xl font-extrabold text-ink block mt-0.5">
                            ~{activeCampus.applicantsEst}
                          </span>
                          <span className="text-[9.5px] sm:text-[10.5px] text-ink-3 block mt-0.5 leading-tight">
                            Erwartete Anmeldungen
                          </span>
                        </div>
                        <div className="rounded-xl border border-line bg-paper-2 p-2.5 sm:p-3.5">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4 block">
                            Historischer Cut-Off
                          </span>
                          <span className="num text-xs sm:text-sm font-bold text-primary block mt-0.5">
                            {activeCampus.cutoffScorePast}
                          </span>
                        </div>
                        <div className="rounded-xl border border-line bg-paper-2 p-2.5 sm:p-3.5">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4 block">
                            Öffentliche Anreise
                          </span>
                          <span className="text-[11px] sm:text-xs font-semibold text-ink line-clamp-2 mt-0.5">
                            {activeCampus.transit}
                          </span>
                        </div>
                      </div>

                      {/* Venue & Hall Insights */}
                      <div className="rounded-xl sm:rounded-2xl border border-line bg-paper-warm/40 p-3.5 sm:p-5 space-y-1.5 sm:space-y-2">
                        <p className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-ink-3">
                          📍 Veranstaltungsort & Hallenbedingungen:
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-ink">
                          {activeCampus.venue}
                        </p>
                        <p className="text-[11.5px] sm:text-xs text-ink-3">
                          Adresse: {activeCampus.address}
                        </p>
                        <p className="text-[11.5px] sm:text-xs text-ink-2 leading-relaxed pt-1 border-t border-line/60">
                          {activeCampus.hallDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 5  QUOTEN & CHANCENRECHNER
                   ════════════════════════════════════════════════════ */}
                <section id="quoten" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 5
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Das Quotenmodell nach § 71b Universitätsgesetz
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    In Österreich werden Medizinstudienplätze gesetzlich in drei getrennten Kontingenten vergeben.
                    Wähle deine Vorbildung, um deine realistische Aufnahmewahrscheinlichkeit zu berechnen.
                  </p>

                  {/* Interactive Quota Calculator */}
                  <div className="rounded-2xl sm:rounded-3xl border border-line bg-paper p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-xs">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-3">
                      Wähle deine Reifeprüfung / Herkunft:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      <button
                        onClick={() => setSelectedQuota("at")}
                        className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-4 text-left transition-all cursor-pointer ${
                          selectedQuota === "at"
                            ? "border-primary bg-primary-subtle shadow-xs"
                            : "border-line bg-paper-2 hover:bg-paper"
                        }`}
                      >
                        <span className="text-xl">🇦🇹</span>
                        <p className="mt-1.5 text-xs sm:text-sm font-bold text-ink">Österreich-Quote</p>
                        <p className="text-[11px] sm:text-xs text-ink-3 mt-0.5">Österreichische Matura / Südtirol</p>
                        <span className="mt-2.5 inline-block rounded-md bg-primary text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5">
                          Mindestens 75 % der Plätze
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedQuota("eu")}
                        className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-4 text-left transition-all cursor-pointer ${
                          selectedQuota === "eu"
                            ? "border-primary bg-primary-subtle shadow-xs"
                            : "border-line bg-paper-2 hover:bg-paper"
                        }`}
                      >
                        <span className="text-xl">🇪🇺</span>
                        <p className="mt-1.5 text-xs sm:text-sm font-bold text-ink">EU-Quote</p>
                        <p className="text-[11px] sm:text-xs text-ink-3 mt-0.5">Deutsches Abitur / EU-Staaten</p>
                        <span className="mt-2.5 inline-block rounded-md bg-slate-900 text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5">
                          Maximal 20 % der Plätze
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedQuota("non-eu")}
                        className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-4 text-left transition-all cursor-pointer ${
                          selectedQuota === "non-eu"
                            ? "border-primary bg-primary-subtle shadow-xs"
                            : "border-line bg-paper-2 hover:bg-paper"
                        }`}
                      >
                        <span className="text-xl">🌍</span>
                        <p className="mt-1.5 text-xs sm:text-sm font-bold text-ink">Nicht-EU / Drittstaat</p>
                        <p className="text-[11px] sm:text-xs text-ink-3 mt-0.5">Staatsangehörige außerhalb der EU</p>
                        <span className="mt-2.5 inline-block rounded-md bg-slate-700 text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5">
                          Maximal 5 % der Plätze
                        </span>
                      </button>
                    </div>

                    {/* Calculated Output Details */}
                    <div className="rounded-xl sm:rounded-2xl border border-primary/20 bg-gradient-to-r from-primary-subtle/50 to-paper p-4 sm:p-6 space-y-2.5 sm:space-y-3">
                      {selectedQuota === "at" && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🇦🇹</span>
                            <h5 className="font-bold text-ink text-[14.5px] sm:text-[16px]">
                              Österreicher-Quote: Deine Erfolgschancen
                            </h5>
                          </div>
                          <p className="text-[12.5px] sm:text-sm text-ink-2 leading-relaxed">
                            Von den 1.950 Plätzen sind ca. <strong>1.462 Plätze</strong> für Kandidat:innen mit
                            österreichischem Reifeprüfungszeugnis reserviert. Auf einen Platz kommen rechnerisch
                            rund <strong>6 bis 7 Mitbewerber:innen</strong>. Die historische Zulassungsquote liegt
                            bei ca. <strong>14 bis 16 %</strong>.
                          </p>
                          <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-lg bg-paper px-2.5 py-1 border border-line text-ink text-[11px] sm:text-xs">
                              Historischer Mindest-Prozentwert: ca. <strong>76,5 % – 79,4 %</strong>
                            </span>
                            <span className="rounded-lg bg-paper px-2.5 py-1 border border-line text-ink text-[11px] sm:text-xs">
                              Erforderlicher Perzentilrang: <strong>Top 15 %</strong>
                            </span>
                          </div>
                        </>
                      )}

                      {selectedQuota === "eu" && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🇪🇺</span>
                            <h5 className="font-bold text-ink text-[14.5px] sm:text-[16px]">
                              EU-Quote: Hochkompetitives Teilnehmerfeld
                            </h5>
                          </div>
                          <p className="text-[12.5px] sm:text-sm text-ink-2 leading-relaxed">
                            Für EU-Bürger:innen (insbesondere aus Deutschland) stehen maximal <strong>390 Plätze</strong> bundesweit
                            zur Verfügung. Das Bewerberfeld ist extrem gut vorbereitet. Auf einen Platz kommen
                            rund <strong>16 bis 20 Kandidat:innen</strong>. Die Zulassungsquote liegt bei nur rund{" "}
                            <strong>5 bis 6 %</strong>.
                          </p>
                          <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-lg bg-paper px-2.5 py-1 border border-line text-ink text-[11px] sm:text-xs">
                              Historischer Mindest-Prozentwert: ca. <strong>80,5 % – 82,1 %</strong>
                            </span>
                            <span className="rounded-lg bg-paper px-2.5 py-1 border border-line text-ink text-[11px] sm:text-xs">
                              Erforderlicher Perzentilrang: <strong>Top 5 % bis 6 %</strong>
                            </span>
                          </div>
                        </>
                      )}

                      {selectedQuota === "non-eu" && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🌍</span>
                            <h5 className="font-bold text-ink text-[14.5px] sm:text-[16px]">
                              Drittstaaten-Quote: Maximal 5 % Kontingent
                            </h5>
                          </div>
                          <p className="text-[12.5px] sm:text-sm text-ink-2 leading-relaxed">
                            Bundesweit entfallen rund <strong>98 Plätze</strong> auf Drittstaatsangehörige.
                            Die Vergabe erfolgt streng nach Rangliste innerhalb dieses Kontingents.
                          </p>
                          <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-lg bg-paper px-2.5 py-1 border border-line text-ink text-[11px] sm:text-xs">
                              Historischer Mindest-Prozentwert: ca. <strong>78,0 % – 81,0 %</strong>
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 6  TESTTAG: ZEITPLAN & SEKUNDEN-DRUCK
                   ════════════════════════════════════════════════════ */}
                <section id="tagesablauf" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 6
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Detaillierter Tagesablauf & Sekunden-Taktik
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    Der MedAT ist kein reiner Wissenstest — er ist ein 8-stündiger Härtetest für Konzentration,
                    Stressresistenz und Zeitmanagement. Hier siehst du die exakte Sekunden-Taktung jedes Untertests:
                  </p>

                  <div className="space-y-2.5 sm:space-y-3">
                    {SCHEDULE_BLOCKS.map((block, idx) => (
                      <div
                        key={idx}
                        className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-5 transition-all ${
                          block.importance === "critical"
                            ? "border-primary/30 bg-primary-subtle/30 shadow-xs"
                            : block.category === "PAUSE"
                            ? "border-emerald-200 bg-emerald-50/40"
                            : "border-line bg-paper"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="num font-bold text-[10.5px] sm:text-xs bg-paper px-2 py-0.5 rounded-md border border-line text-ink shrink-0">
                              {block.timeRange}
                            </span>
                            <h4 className="text-[13px] sm:text-base font-bold text-ink leading-snug">
                              {block.title}
                            </h4>
                          </div>

                          {block.secondsPerQuestion > 0 && (
                            <span className="self-start sm:self-auto rounded-full bg-slate-900 text-white px-2 py-0.5 text-[10px] sm:text-xs font-mono font-bold shrink-0">
                              ⏱ nur {Math.round(block.secondsPerQuestion)} Sek. / Aufgabe
                            </span>
                          )}
                        </div>

                        <div className="mt-2.5 sm:mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-line/60 pt-2 text-[11px] sm:text-xs">
                          <p className="text-ink-2 font-medium">
                            💡 <strong>Taktik:</strong> {block.tip}
                          </p>
                          <span className="text-ink-4 font-mono text-[10.5px] sm:text-xs shrink-0">
                            {block.durationMinutes} Min.
                            {block.questionCount > 0 ? ` · ${block.questionCount} Fragen` : ""}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 7  SACKERL-INSPECTOR (PACKLISTE & VERBOTE)
                   ════════════════════════════════════════════════════ */}
                <section id="packliste" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 7
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Interaktiver Sackerl-Inspector: Erlaubt vs. Verboten
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-ink-2">
                    In den Prüfungssaal darf ausnahmslos nur ein{" "}
                    <strong className="text-ink">vollständig durchsichtiger Plastikbeutel (max. 3 Liter)</strong>{" "}
                    mitgenommen werden. Teste hier interaktiv, ob deine Ausrüstung den Richtlinien der
                    österreichischen Testleitung entspricht.
                  </p>

                  {/* Filter Switcher (touch-friendly wrapping) */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 border-b border-line pb-3 sm:pb-4">
                    <button
                      onClick={() => setSackerlFilter("all")}
                      className={`rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                        sackerlFilter === "all"
                          ? "bg-slate-900 text-white"
                          : "bg-paper-2 text-ink-3 hover:bg-paper"
                      }`}
                    >
                      Alle ({GEAR_ITEMS.length})
                    </button>
                    <button
                      onClick={() => setSackerlFilter("allowed")}
                      className={`rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                        sackerlFilter === "allowed"
                          ? "bg-emerald-700 text-white"
                          : "bg-paper-2 text-ink-3 hover:bg-paper"
                      }`}
                    >
                      ✅ Erlaubt ({GEAR_ITEMS.filter((g) => g.allowed).length})
                    </button>
                    <button
                      onClick={() => setSackerlFilter("forbidden")}
                      className={`rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                        sackerlFilter === "forbidden"
                          ? "bg-red-700 text-white"
                          : "bg-paper-2 text-ink-3 hover:bg-paper"
                      }`}
                    >
                      🚫 Streng verboten ({GEAR_ITEMS.filter((g) => !g.allowed).length})
                    </button>
                  </div>

                  {/* Gear Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {filteredGear.map((item) => (
                      <div
                        key={item.id}
                        className={`rounded-xl sm:rounded-2xl border p-3 sm:p-4 flex items-start gap-2.5 sm:gap-3.5 transition-all ${
                          item.allowed
                            ? "border-line bg-paper hover:border-emerald-300"
                            : "border-red-200 bg-red-50/40 hover:border-red-300"
                        }`}
                      >
                        <span className="text-xl sm:text-2xl shrink-0 mt-0.5">{item.icon}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start sm:items-center justify-between gap-1.5 flex-wrap sm:flex-nowrap">
                            <h4 className="text-[13px] sm:text-sm font-bold text-ink leading-tight">{item.name}</h4>
                            <span className={`rounded-md border px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0 ${item.badgeColor}`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="mt-1 text-[11.5px] sm:text-xs text-ink-2 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 8  PRAXISTIPPS VOR ORT
                   ════════════════════════════════════════════════════ */}
                <section id="tipps" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 8
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Insider-Praxistipps von Absolvent:innen der MedUni Wien
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="rounded-xl sm:rounded-2xl border border-line bg-paper p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl">🧥</span>
                        <h4 className="font-bold text-ink text-[14px] sm:text-[15px]">Das Zwiebelprinzip</h4>
                      </div>
                      <p className="text-[11.5px] sm:text-[13px] text-ink-2 leading-relaxed">
                        Die Messehallen (insbesondere Messe Wien Halle D und Messe Innsbruck) sind klimatisiert.
                        Morgens bei Hallenöffnung ist es oft kühl (~18 °C), am Nachmittag mit 3.000 Menschen
                        kann die Raumtemperatur spürbar ansteigen. Trage Schichten (T-Shirt, dünner Pullover,
                        leichte Strickjacke), die du geräuschlos ablegen kannst.
                      </p>
                    </div>

                    <div className="rounded-xl sm:rounded-2xl border border-line bg-paper p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl">🥪</span>
                        <h4 className="font-bold text-ink text-[14px] sm:text-[15px]">Ernährung in der 60-Minuten-Pause</h4>
                      </div>
                      <p className="text-[11.5px] sm:text-[13px] text-ink-2 leading-relaxed">
                        Vermeide unbedingt Döner, Pizza oder zuckerhaltige Softdrinks. Ein rapider Glukoseschub
                        führt 40 Minuten später zu einer reaktiven Hypoglykämie — genau dann, wenn im
                        Nachmittagsblock der anspruchsvolle KFF-Teil (Gedächtnis-Abruf & Wortflüssigkeit) startet.
                        Haferkekse, Walnüsse und stille Mineralwässer garantieren stabilen Blutzucker.
                      </p>
                    </div>

                    <div className="rounded-xl sm:rounded-2xl border border-line bg-paper p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl">🧠</span>
                        <h4 className="font-bold text-ink text-[14px] sm:text-[15px]">Die 3-Sekunden-Reset-Routine</h4>
                      </div>
                      <p className="text-[11.5px] sm:text-[13px] text-ink-2 leading-relaxed">
                        Wenn im BMS eine Frage unklar ist oder eine Zahlenfolge nicht aufgeht: Rate nach
                        Ausschlussprinzip und markiere den Bogen sofort. Grüble niemals während des nächsten
                        Blocks über vergangene Aufgaben nach — jeder Testteil ist eine isolierte Punktequelle!
                      </p>
                    </div>

                    <div className="rounded-xl sm:rounded-2xl border border-line bg-paper p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl">🚊</span>
                        <h4 className="font-bold text-ink text-[14px] sm:text-[15px]">Frühe Anreise & Hotelbuchung</h4>
                      </div>
                      <p className="text-[11.5px] sm:text-[13px] text-ink-2 leading-relaxed">
                        Reist du von außerhalb an, buche dein Hotel in Messenähe (z. B. Wien Leopoldstadt oder
                        Innsbruck Saggen) spätestens im März. Am Testtag selbst sind Taxis und Straßenbahnen
                        stark ausgelastet — sei spätestens um 07:15 Uhr vor der Halle.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ════════════════════════════════════════════════════
                   § 9  FAQ ACCORDION
                   ════════════════════════════════════════════════════ */}
                <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-xs sm:text-sm font-bold text-primary num shrink-0">
                      § 9
                    </span>
                    <h2 className="text-[17px] xs:text-[18px] sm:text-[22px] font-bold text-ink leading-snug">
                      Häufig gestellte Fragen (FAQ) zu Fristen & Anmeldung
                    </h2>
                  </div>

                  {/* Category Filter for FAQs */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {["Alle", "Fristen", "Zahlung", "Testtag", "Quoten"].map((cat) => (
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
                        <span>🇦🇹 100% Kostenloser Einstufungstest</span>
                      </div>
                      <h3 className="text-[17px] xs:text-[19px] sm:text-[22px] font-extrabold text-ink tracking-tight leading-snug">
                        Weißt du, wo du heute im Vergleich zu 16.000 Bewerber:innen stehst?
                      </h3>
                      <p className="text-[12.5px] sm:text-sm text-ink-2 leading-relaxed">
                        Teste in 8–10 Minuten deinen Wissensstand in BMS, KFF und SEK mit 24 authentischen
                        Originalfragen. Du erhältst eine sofortige Perzentil-Auswertung und deinen
                        maßgeschneiderten Lernplan bis zum 2. Juli 2027.
                      </p>
                    </div>
                    <a
                      href="/onboarding?mode=register"
                      className="btn btn-primary px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold shadow-md whitespace-nowrap shrink-0 w-full sm:w-auto text-center"
                    >
                      Einstufungstest starten (0 €) →
                    </a>
                  </div>
                </div>

                {/* ──── Tags & Legal Notice ──── */}
                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-line">
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {[
                      "MedAT 2027",
                      "Fristen",
                      "Anmeldeschluss",
                      "Kostenbeitrag 110 Euro",
                      "MedUni Wien",
                      "MedUni Graz",
                      "MedUni Innsbruck",
                      "JKU Linz",
                      "Österreicher-Quote",
                      "EU-Quote",
                      "Testtag Packliste",
                      "Universitätsgesetz § 71b",
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
                    Haftungshinweis: Alle Angaben zu Fristen, Gebühren und Quoten basieren auf den offiziellen
                    Veröffentlichungen der Medizinischen Universitäten Wien, Graz, Innsbruck und der JKU Linz
                    gemäß § 71b Universitätsgesetz 2002. MedAT Prep ist eine unabhängige Vorbereitungsplattform
                    und steht in keiner gesellschaftsrechtlichen Verbindung mit den staatlichen Universitäten.
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
