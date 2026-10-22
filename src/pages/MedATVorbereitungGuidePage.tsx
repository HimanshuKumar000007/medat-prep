/**
 * src/pages/MedATVorbereitungGuidePage.tsx
 *
 * Ultra-Premium, Standalone Flagship Editorial & SEO Guide:
 * "MedAT Vorbereitung 2027: Der ultimative Leitfaden zum Medizinstudienplatz"
 * Subtitle: "Von Null auf 80%+ ohne 1.500 € Kurs: Fächeranalyse, evidenzbasierter 16-Wochen-Lernplan, Zeitmanagement und die 5 fatalen Fehler, an denen 85 % scheitern."
 *
 * Engineered for Maximum Organic Search Dominance & Conversion:
 * - Dynamic scroll progress indicator & Austrian tricolor hairline
 * - Hero 4-Stat Trust Ribbon:
 *     1. 16.880 Bewerber:innen (Nur ~11–13 % erhalten einen Studienplatz)
 *     2. 78 – 82 % Grenzscore (Dein statistisches Ziel für sichere Zulassung)
 *     3. 4 Testblöcke (BMS 40%, KFF 40%, TV 10%, SEK 10% in optimaler Balance)
 *     4. 0 € Einstieg (Vollwertige Vorbereitung ohne 1.500-Euro-Frontalkurs)
 * - Quick Action Utility Toolbar:
 *     - Vorbereitungs-Checkliste (.txt) generieren & herunterladen
 *     - 16-Wochen-Fahrplan in Zwischenablage kopieren
 *     - Guide-Link teilen
 * - Mobile-collapsible Table of Contents & Desktop sticky sidebar
 * - Section 1: Die nackten Zahlen des MedAT (Quoten, Standorte, Cut-Offs nach § 71b UG)
 * - Section 2: Die 4 Säulen des MedAT im Röntgenblick (BMS, KFF, TV, SEK / MF)
 * - Section 3: Die 5 fatalen Vorbereitungsfehler (Warum 85 % scheitern)
 * - Section 4: Die wissenschaftliche 4-Säulen-Erfolgsmethode (Active Recall, Spaced Repetition, Micro-Drills)
 * - Section 5: Interaktiver Vorbereitungs- & Pacing-Rechner (Uni, Quote, Restzeit & Wochenstunden)
 * - Section 6: Der 16-Wochen Master-Fahrplan (Woche 1–16 mit 4 Phasen & Daily Blueprint)
 * - Section 7: Methodenvergleich im Härtetest (Bücher vs. 1.500 € Kurs vs. MedAT Prep)
 * - Section 8: Konversions-Banner mit Lead Magnet & 1-Klick-Registrierung
 * - Section 9: 10-Item FAQ Accordion mit JSON-LD Schema Markup
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
  IconTextLines,
  IconHeart,
  IconRefresh,
} from "../lib/icons";
import { toast, track } from "../lib/core";

/* ── FAQ Data ─────────────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string;
  category: "Allgemein" | "Strategie & Zeit" | "Kosten & Kurse" | "Testtag & Quoten";
}

const VORBEREITUNG_FAQS: FaqItem[] = [
  {
    q: "Wie lange sollte man sich realistisch auf den MedAT vorbereiten?",
    a: "Die ideale Vorbereitungszeit liegt zwischen 16 und 24 Wochen (ca. 4 bis 6 Monate) bei einem wöchentlichen Lernpensum von 18 bis 28 Stunden. Insgesamt benötigen erfolgreiche Kandidat:innen im Schnitt 350 bis 500 reine Arbeitsstunden. Wer erst 6 bis 8 Wochen vor dem Testtag im Mai startet, gerät unter massiven Stoffdruck im BMS und kann die notwendige kognitive Reaktionsgeschwindigkeit im KFF-Teil kaum noch antrainieren.",
    category: "Strategie & Zeit",
  },
  {
    q: "Lohnt sich ein teurer MedAT-Vorbereitungskurs für 1.500 € bis 2.500 €?",
    a: "In den allermeisten Fällen: Nein. Traditionelle Vorbereitungskurse setzen auf tagelangen Frontalunterricht in Seminarräumen. Die kognitionspsychologische Forschung zeigt jedoch, dass passives Zuhören die geringste Behaltequote aufweist. Der MedAT prüft schnelles Entscheiden unter Zeitdruck und handschriftliches Rechnen ohne Taschenrechner. Diese Fähigkeiten erlernst du nur durch tägliches, aktives Üben mit Multiple-Choice-Fragen, KFF-Drilltools und realistischen Generalproben — und das zu einem Bruchteil der Kosten.",
    category: "Kosten & Kurse",
  },
  {
    q: "Kann ich den MedAT mit einer durchschnittlichen Maturanote bestehen?",
    a: "Ja, zu 100 %! Im Gegensatz zum deutschen Numerus Clausus (NC) spielt deine Maturanote oder Abiturnote beim MedAT in Österreich absolut keine Rolle für die Zulassung. Es zählt ausschließlich dein Perzentilrang am Testtag. Ein Kandidat mit einem 3,0-Abitur, der 82 % im MedAT erzielt, erhält sofort einen Studienplatz, während ein 1,0-Abiturient mit 72 % leer ausgeht.",
    category: "Allgemein",
  },
  {
    q: "Welche Mindestpunktzahl (Grenzscore) brauche ich für die Zulassung?",
    a: "Das hängt von deiner Studienquote und dem Universitätsstandort ab. In der Österreicher-Quote (75 % aller Plätze) reichten in den letzten Jahren an der MedUni Wien ca. 77,5 % bis 80,5 %, an der MedUni Graz und Innsbruck ca. 76,8 % bis 79,8 % und an der JKU Linz ca. 77,0 % bis 80,0 %. In der EU-Quote (20 % aller Plätze) liegt der Cut-Off wegen des enormen Bewerberandrangs meist höher bei 81,5 % bis 84,5 %.",
    category: "Testtag & Quoten",
  },
  {
    q: "Warum ist KFF der größte Hebel für deinen Gesamtscore?",
    a: "Die Kognitiven Fähigkeiten und Fertigkeiten machen 40 % der Gesamtwertung aus. Während im BMS (Biologie, Chemie, Physik, Mathe) ein extrem breiter, offener Stoffumfang gelernt werden muss, besteht KFF aus 5 klar definierten Aufgabentypen. Da Aufgaben wie Zahlenfolgen und Gedächtnis festen Algorithmen folgen, weisen sie die höchste Trainingselastizität auf: Mit gezieltem Systemtraining lässt sich der KFF-Score innerhalb von 8 Wochen um 15 bis 20 Prozentpunkte steigern.",
    category: "Strategie & Zeit",
  },
  {
    q: "Darf man beim MedAT einen Taschenrechner oder eine Formelsammlung benutzen?",
    a: "Nein, strikt verboten! Weder Taschenrechner, Periodensystem (PSE), Schmierpapier noch Formelsammlungen sind im Prüfungssaal erlaubt. Alle Rechenoperationen in Physik, Chemie und Mathematik müssen handschriftlich im Aufgabenheft oder mental gelöst werden. Eine zentrale Säule der Vorbereitung ist daher das tägliche Kopfrechnen mit Zehnerpotenzen, Runden und Bruchrechnung.",
    category: "Testtag & Quoten",
  },
  {
    q: "Wie unterscheidet sich die Vorbereitung für MedAT-H und MedAT-Z?",
    a: "Bei MedAT-H (Humanmedizin) machen BMS (40 %), KFF (40 %), Textverständnis (10 %) und SEK (10 %) das Gesamtergebnis aus. Bei MedAT-Z (Zahnmedizin) entfällt das Textverständnis; stattdessen werden Manuelle Fertigkeiten (MF, 20 %) geprüft (Drahtbiegen und Formen spiegeln). Zahnmedizin-Bewerber:innen müssen ab Woche 6 regelmäßig Drahtbiege-Sets unter Zeitdruck trainieren.",
    category: "Allgemein",
  },
  {
    q: "Welche Bücher und Materialien brauche ich wirklich für den BMS?",
    a: "Du benötigst keine zehn verschiedenen Lehrbücher. Das Fundament bildet der offizielle VMC-Stichwortkatalog der Medizinischen Universitäten. Für Biologie genügt ein Standardwerk auf Oberstufenniveau (z. B. Campbell Biologie, fokussiert auf VMC-Kapitel). In Chemie und Physik sind kompakte, formelfokussierte Kompendien am besten. Am wichtigsten ist jedoch eine Plattform mit mindestens 4.000+ originalgetreuen Single-Choice-Übungsfragen mit Rechenwegerklärungen.",
    category: "Kosten & Kurse",
  },
  {
    q: "Wie viele vollständige Probetests (Generalproben) sollte man vorab machen?",
    a: "Mindestens 3 bis 5 vollständige Simulationen unter realen Prüfungsbedingungen. Das bedeutet: 5,5 Stunden Netto-Testzeit, exakte Bearbeitungszeiten pro Block, kein Smartphone, nur erlaubte Verpflegung im transparenten Plastiksackerl und optischer Antwortbogen. Ohne diese Generalproben scheitern viele Kandidat:innen am Testtag an physischer Erschöpfung und Pausenfehlorganisation.",
    category: "Strategie & Zeit",
  },
  {
    q: "Wie hilft mir MedAT Prep konkret dabei, den MedAT im 1. Anlauf zu bestehen?",
    a: "MedAT Prep kombiniert über 5.000 validierte Übungsfragen nach offiziellem Stichwortkatalog mit interaktiven KFF-Simulatoren (Zahlenfolgen-Generator, Loci-Gedächtnis-Trainer, Figuren-Zusammensetzen-Canvas), einem adaptiven Lernplan und 4 vollwertigen Generalproben mit Echtzeit-Perzentilrang. Du trainierst täglich genau deine Schwachstellen — ab 0 € kostenlos und im Premium-Tarif für nur 39 € im ganzen Jahr.",
    category: "Allgemein",
  },
];

/* ── MedAT Subtest Structure Data ─────────────────────────────── */
interface SubtestModule {
  id: "bms" | "kff" | "tv" | "sek";
  title: string;
  nameShort: string;
  weightPercent: number;
  durationMinutes: number;
  questionCount: number;
  secondsPerQuestion: number;
  description: string;
  subdisciplines: string[];
  keyChallenge: string;
  solutionStrategy: string;
}

const SUBTEST_MODULES: SubtestModule[] = [
  {
    id: "bms",
    title: "Basiskenntnistest für Medizinische Studien",
    nameShort: "BMS",
    weightPercent: 40,
    durationMinutes: 75,
    questionCount: 94,
    secondsPerQuestion: 47.9,
    description:
      "Biologie (40), Chemie (24), Physik (18) und Mathematik (12) auf Matura-Niveau. Der stoffreichste Einzelblock des Tests.",
    subdisciplines: [
      "Biologie: Zellbiologie, Genetik, Physiologie, Evolution",
      "Chemie: Stöchiometrie, Säure-Base, Redox, Organik",
      "Physik: Mechanik, Optik, Elektrizität, Wärmelehre",
      "Mathematik: Potenzen, Gleichungen, Trigonometrie, Vektoren",
    ],
    keyChallenge:
      "Umfangreicher VMC-Katalog und extremer Zeitdruck (nur 47,9 Sek./Frage) ohne Taschenrechner oder Periodensystem.",
    solutionStrategy:
      "2-Pass-System: Im ersten Durchgang alle reinen Faktenfragen in Bio/Chemie in <30 Sek. abarbeiten, gewonnene Zeit für Rechenaufgaben in Physik/Mathe nutzen.",
  },
  {
    id: "kff",
    title: "Kognitive Fähigkeiten & Fertigkeiten",
    nameShort: "KFF",
    weightPercent: 40,
    durationMinutes: 73,
    questionCount: 75,
    secondsPerQuestion: 58.4,
    description:
      "Logisches Denken, mentale Rotation, Gedächtnis und Sprachgefühl. Dein größter Punktelever im gesamten MedAT.",
    subdisciplines: [
      "Zahlenfolgen (10 Aufgaben in 15 Min.)",
      "Gedächtnis & Merkfähigkeit (25 Ausweise, 8 Min. Einprägen / 15 Min. Abruf)",
      "Figuren zusammensetzen (15 Aufgaben in 20 Min.)",
      "Wortflüssigkeit (15 Aufgaben in 20 Min.)",
      "Implikationen erkennen (10 Aufgaben in 10 Min.)",
    ],
    keyChallenge:
      "Überlastung des Arbeitsgedächtnisses und mentale Ermüdung im Nachmittagsblock nach der Mittagspause.",
    solutionStrategy:
      "Systemtraining mit der Loci-Methode (Gedächtnispalast für 25 Ausweise) und Automatisierung der 7 mathematischen Zahlenfolgenmuster. Täglich 25 Min. drillen.",
  },
  {
    id: "tv",
    title: "Textverständnis (nur MedAT-H)",
    nameShort: "TV",
    weightPercent: 10,
    durationMinutes: 35,
    questionCount: 12,
    secondsPerQuestion: 175.0,
    description:
      "Analyse komplexer medizinisch-naturwissenschaftlicher Fachtexte unter striktem Zeitbudget.",
    subdisciplines: [
      "Wissenschaftliche Fachtexte erfassen",
      "Kernaussagen und Detailinformationen verifizieren",
      "Logische Schlussfolgerungen ziehen",
      "Falschaussagen und subtile Distraktoren eliminieren",
    ],
    keyChallenge:
      "Zu langsames Lesen und die gefährliche Neigung, eigenes Vorwissen anstelle der reinen Textaussage heranzuziehen.",
    solutionStrategy:
      "Scanning-Methode: Zuerst Fragen und Antwortoptionen überfliegen, Signalwörter markieren, dann gezielt im Textabschnitt abgleichen. Kein Vorwissen nutzen!",
  },
  {
    id: "sek",
    title: "Sozial-emotionale Kompetenzen (bzw. MF für MedAT-Z)",
    nameShort: "SEK / MF",
    weightPercent: 10,
    durationMinutes: 30,
    questionCount: 24,
    secondsPerQuestion: 75.0,
    description:
      "Soziales Entscheiden und Emotionen regulieren/erkennen. Bei Zahnmedizin: Manuelle Fertigkeiten (Drahtbiegen & Formen spiegeln).",
    subdisciplines: [
      "Soziales Entscheiden (Dilemmata nach Kohlberg-Stufen)",
      "Emotionen regulieren (Situationen & Reaktionsstrategien)",
      "Emotionen erkennen (Körpersprache & Mimik)",
      "Zahnmedizin-Modul: Drahtbiegen & Formen spiegeln (20 % bei MedAT-Z)",
    ],
    keyChallenge:
      "Verlassen auf das subjektive Bauchgefühl anstelle eines konsistenten, evidenzbasierten Wertegerüsts.",
    solutionStrategy:
      "Kohlberg-Prinzip: Ethische Entscheidungen systematisch auf Stufe 5/6 (universelle ethische Prinzipien, Patientenwohl) begründen, opportunistische Antworten ausschließen.",
  },
];

/* ── 16-Week Master Plan Phases ───────────────────────────────── */
interface StudyPlanPhase {
  phase: number;
  weeks: string;
  title: string;
  focus: string;
  hoursWeekly: string;
  targetBmsScore: string;
  targetKffScore: string;
  dailyRoutine: string[];
  keyMilestones: string[];
}

const STUDY_PLAN_PHASES: StudyPlanPhase[] = [
  {
    phase: 1,
    weeks: "Woche 1 – 4",
    title: "Diagnose & Fundament-Sprint",
    focus: "Einstiegs-Generalprobe, Biologie-Zelllehre, Chemie-Grundlagen & KFF-Methoden",
    hoursWeekly: "18 – 22 Std./Woche",
    targetBmsScore: "45 – 55 %",
    targetKffScore: "50 – 60 %",
    dailyRoutine: [
      "08:30 – 10:30: BMS Theorieblock 1 (Zellbiologie oder Stöchiometrie)",
      "10:45 – 11:45: Active Recall Fragenset (30 Fragen mit ausführlicher Fehleranalyse)",
      "14:00 – 14:45: KFF-Drill (Zahlenfolgen & Wortflüssigkeit mit Stoppuhr)",
      "15:00 – 15:45: Ausweis-Loci-Training (Gedächtnispalast für 10 Ausweise)",
    ],
    keyMilestones: [
      "Kostenlose Generalprobe #1 als Nullpunkt-Messung absolviert",
      "VMC-Stichwortkatalog gesichtet und persönliche Wissenslücken farblich priorisiert",
      "Loci-Route in der eigenen Wohnung für 25 Stationen fest verankert",
      "Periodensystem & Grundkonstanten ohne Hilfsmittel visualisierbar",
    ],
  },
  {
    phase: 2,
    weeks: "Woche 5 – 8",
    title: "Systemaufbau & KFF-Automatisierung",
    focus: "Chemie-Rechnen, Physik-Mechanik/Optik, KFF-Geschwindigkeit & Textverständnis",
    hoursWeekly: "22 – 26 Std./Woche",
    targetBmsScore: "60 – 72 %",
    targetKffScore: "65 – 75 %",
    dailyRoutine: [
      "08:30 – 10:30: BMS Chemie & Physik (Säure-Base, Redox, Kinematik)",
      "10:45 – 12:00: Quantitative Rechenübungen handschriftlich ohne Taschenrechner",
      "14:00 – 15:00: KFF Voll-Set (Figuren zusammensetzen & Implikationen)",
      "15:15 – 16:00: Textverständnis-Scanning (2 Fachtexte mit je 6 Fragen in 17 Min.)",
    ],
    keyMilestones: [
      "Kopfrechnen mit Zehnerpotenzen und pH-Werten stabil in <45 Sek.",
      "Gedächtnis & Merkfähigkeit: Trefferquote reproduzierbar bei ≥ 20 von 25 Ausweisen",
      "Fehlerjournal führt lückenlos jede falsche Frage inklusive Denkfehler-Kategorie",
      "Erste Teil-Simulation (BMS 94 Fragen in 75 Min.) unter Originalbedingungen",
    ],
  },
  {
    phase: 3,
    weeks: "Woche 9 – 12",
    title: "High-Yield Sprints & Schwachstellen-Eliminierung",
    focus: "Physik & Mathe Trennschärfe, SEK Konsistenz-Training, 2-Pass-Pacing",
    hoursWeekly: "24 – 28 Std./Woche",
    targetBmsScore: "75 – 82 %",
    targetKffScore: "78 – 85 %",
    dailyRoutine: [
      "08:30 – 10:30: High-Yield BMS-Wiederholung (Physik Formeln, Genetik, Organik)",
      "10:45 – 12:15: Schwachstellen-Sitzung aus dem MedAT Prep Fehler-Hub",
      "14:00 – 15:15: KFF Speed-Run (Alle 5 Untertests mit um 10 % verkürzter Zeit)",
      "15:30 – 16:15: SEK Dilemmata-Analyse (Kohlberg Stufen & Emotionserkennung)",
    ],
    keyMilestones: [
      "Physik & Mathematik Trefferquote stabil über 75 % (entscheidender Differenzierer)",
      "Zahlenfolgen: Alle 7 Grundmuster werden in unter 30 Sekunden identifiziert",
      "Vollständige Generalprobe #2 & #3 unter 1:1 Prüfungsbedingungen durchgeführt",
      "Perzentilrang in MedAT Prep Probetests liegt im 85.+ Perzentil",
    ],
  },
  {
    phase: 4,
    weeks: "Woche 13 – 16",
    title: "Generalproben, Pacing & Tapering",
    focus: "4 vollständige Generalproben (5,5 Std.), Testtag-Simulation, Mentaltraining & Ruhe",
    hoursWeekly: "20 – 24 Std. (letzte Woche: 10 Std.)",
    targetBmsScore: "80 – 86 %",
    targetKffScore: "82 – 90 %",
    dailyRoutine: [
      "Samstag: 08:30 – 16:30 Vollständige Generalprobe mit exakten Pausenzeiten",
      "Sonntag: Detaillierte Auswertung & Regeneration",
      "Mo – Do: Gezieltes Nachschärfen letzter BMS-Fakten & KFF-Microdrills (je 30 Min.)",
      "Freitag vor dem Test: Kein Stoff mehr! Nur Packliste prüfen & Spaziergang",
    ],
    keyMilestones: [
      "Generalprobe #4 mit ≥ 80 % Gesamtergebnis abgeschlossen",
      "Pausenstrategie (Ernährung, Flüssigkeit, Koffein-Timing) erfolgreich getestet",
      "Transparentes Plastiksackerl mit allen erlaubten Utensilien gepackt",
      "Schlafrhythmus auf 06:00 Uhr Aufstehen und 08:30 Uhr Höchstleistung synchronisiert",
    ],
  },
];

export default function MedATVorbereitungGuidePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("status-quo");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Subtest Explorer State
  const [selectedSubtestId, setSelectedSubtestId] = useState<"bms" | "kff" | "tv" | "sek">("bms");

  // Study Plan Phase Switcher
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  // Preparation & Pacing Calculator State
  const [targetUni, setTargetUni] = useState<"wien" | "graz" | "innsbruck" | "linz">("wien");
  const [quota, setQuota] = useState<"at" | "eu" | "non-eu">("at");
  const [monthsLeft, setMonthsLeft] = useState<number>(4);
  const [weeklyHours, setWeeklyHours] = useState<number>(24);

  // FAQ Filter & Accordion
  const [faqCategory, setFaqCategory] = useState<string>("Alle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Page View Tracking & SEO Page Title
  useEffect(() => {
    document.title =
      "MedAT Vorbereitung 2027: Der ultimative Leitfaden zum Studienplatz | MedAT Prep";
    track("page_view", {
      page: "medat-vorbereitung-guide",
      topic: "medat_vorbereitung_flagship",
    });
  }, []);

  // Scroll Progress Listener & Active Section Observer
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.round((h.scrollTop / total) * 100)));
      }

      const sections = [
        "status-quo",
        "teststruktur",
        "die-5-fehler",
        "4-saeulen-methode",
        "rechner",
        "16-wochen-plan",
        "methoden-vergleich",
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

  // Calculator computations
  const calculatorResults = useMemo(() => {
    const totalHours = monthsLeft * 4.33 * weeklyHours;

    // Cut-off estimates based on university and quota
    let baseTarget = 78.5;
    if (targetUni === "wien") baseTarget = quota === "eu" ? 83.2 : 79.4;
    else if (targetUni === "innsbruck") baseTarget = quota === "eu" ? 82.5 : 78.6;
    else if (targetUni === "graz") baseTarget = quota === "eu" ? 82.2 : 78.2;
    else if (targetUni === "linz") baseTarget = quota === "eu" ? 81.8 : 77.8;

    if (quota === "non-eu") baseTarget = 75.0;

    // Weekly hour distribution based on test weight & training elasticity
    const bmsHours = Math.round(weeklyHours * 0.42 * 10) / 10;
    const kffHours = Math.round(weeklyHours * 0.38 * 10) / 10;
    const tvHours = Math.round(weeklyHours * 0.10 * 10) / 10;
    const sekHours = Math.round(weeklyHours * 0.10 * 10) / 10;

    let readinessStatus: "optimal" | "gut" | "kritisch" = "optimal";
    let recommendation = "";

    if (totalHours < 250) {
      readinessStatus = "kritisch";
      recommendation =
        "Mit unter 250 Gesamtstunden wird es extrem knapp. Erhöhe dein Pensum auf mindestens 22–26 Std./Woche und fokussiere dich zu 90 % auf KFF und High-Yield-BMS-Fragen.";
    } else if (totalHours < 380) {
      readinessStatus = "gut";
      recommendation =
        "Gute Ausgangslage. Mit diszipliniertem Active Recall und wöchentlichem KFF-Drill erreichst du eine solide Punktzahl am Cut-Off.";
    } else {
      readinessStatus = "optimal";
      recommendation =
        "Exzellentes Zeitbudget! Bei 380+ Stunden hast du genügend Puffer für alle 4 Generalproben und eine tiefe Festigung der Trennschärfe-Fächer Physik und Mathe.";
    }

    return {
      totalHours: Math.round(totalHours),
      targetScore: baseTarget.toFixed(1),
      bmsHours,
      kffHours,
      tvHours,
      sekHours,
      readinessStatus,
      recommendation,
    };
  }, [targetUni, quota, monthsLeft, weeklyHours]);

  // Lead Magnet Download: Text Checklist
  const handleExportChecklist = () => {
    const checklist = [
      "============================================================",
      "   MEDAT 2027 MASTER-VORBEREITUNGS-CHECKLISTE",
      "   Herausgegeben von MedAT Prep (medatprep.at)",
      "============================================================",
      "",
      "1. ADMINISTRATIVE FRISTEN & SETUP:",
      "   [ ] Bis 31. März 2027: Internet-Anmeldung auf medizinstudieren.at",
      "   [ ] 110 € Kostenbeitrag mit korrekter Referenznummer überwiesen",
      "   [ ] Amtlichen Reisepass/Personalausweis auf Gültigkeit geprüft",
      "   [ ] Kostenlosen MedAT Prep Basis-Account aktiviert (200 Fragen & Test #1)",
      "",
      "2. BMS-FUNDAMENT (40 % GESAMTSCORE):",
      "   [ ] Biologie (40 Fr.): Zellbiologie, Genetik, Physiologie, Evolution",
      "   [ ] Chemie (24 Fr.): Stöchiometrie, Säure-Base, Redox, Organik",
      "   [ ] Physik (18 Fr.): Mechanik, Optik, Elektrizität, Wärmelehre",
      "   [ ] Mathematik (12 Fr.): Potenzen, Gleichungen, Geometrie, Vektoren",
      "   [ ] Keine Hilfsmittel: Kopfrechnen mit Zehnerpotenzen automatisiert",
      "",
      "3. KFF-SYSTEMTRAINING (40 % GESAMTSCORE):",
      "   [ ] Loci-Methode: 25 Stationen im Gedächtnispalast verankert",
      "   [ ] Zahlenfolgen: 7 mathematische Differenzmuster verinnerlicht",
      "   [ ] Figuren zusammensetzen: Schnittkanten & Winkel-Abgleich trainiert",
      "   [ ] Wortflüssigkeit: Vokalanker & Konsonanten-Cluster geübt",
      "   [ ] Implikationen erkennen: Syllogismen ohne Vorurteil gelöst",
      "",
      "4. TEXTVERSTÄNDNIS & SEK (20 % GESAMTSCORE):",
      "   [ ] TV: Scanning-Methode etabliert (Fragen zuerst lesen, kein Vorwissen)",
      "   [ ] SEK: Soziales Entscheiden nach Kohlberg-Stufen begründet",
      "   [ ] SEK: Emotionen erkennen anhand von Mimik und Kontext analysiert",
      "",
      "5. SIMULATIONEN & TESTTAG:",
      "   [ ] Mindestens 4 vollständige Generalproben (5,5 Std.) unter Prüfungsstress",
      "   [ ] Pausenverpflegung (Nüsse, Bananen, Wasser) im Testlauf erprobt",
      "   [ ] Transparentes Plastiksackerl (max. 3 Liter) bereitgestellt",
      "   [ ] Analoge Armbanduhr ohne Weckton organisiert",
      "",
      "Viel Erfolg bei deiner MedAT-Vorbereitung! Hol dir deinen Studienplatz.",
    ].join("\r\n");

    const blob = new Blob([checklist], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "MedAT-2027-Vorbereitungs-Checkliste.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast("MedAT-Vorbereitungs-Checkliste (.txt) heruntergeladen!", "success");
    track("checklist_download", { source: "medat_vorbereitung_guide" });
  };

  // Copy schedule to clipboard
  const handleCopySchedule = () => {
    const text =
      "MEDAT 16-WOCHEN-FAHRPLAN:\n" +
      "• Phase 1 (W 1-4): Nullpunkt-Generalprobe, VMC-Stichwortkatalog, Loci-Methode für Ausweise, Bio-Sprint.\n" +
      "• Phase 2 (W 5-8): Chemie-Rechnen & pH-Werte, Physik Kinematik, KFF-Drill 25 Min./Tag, TV-Scanning.\n" +
      "• Phase 3 (W 9-12): High-Yield Physik & Mathe, SEK-Konsistenz, Generalprobe #2 & #3, Fehlerjournal-Hub.\n" +
      "• Phase 4 (W 13-16): Generalprobe #4, Testtag-Simulation, Pausenmanagement, Tapering & Regeneration.\n" +
      "Kostenlos starten auf: https://medatprep.at";

    navigator.clipboard.writeText(text);
    toast("16-Wochen-Fahrplan in die Zwischenablage kopiert!", "success");
    track("copy_schedule", { source: "medat_vorbereitung_guide" });
  };

  // Share guide link
  const handleShareGuide = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "MedAT Vorbereitung 2027: Der ultimative Leitfaden",
        url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      toast("Link zum Leitfaden kopiert!", "success");
    }
  };

  // Active subtest module detail
  const currentSubtest = SUBTEST_MODULES.find((m) => m.id === selectedSubtestId) || SUBTEST_MODULES[0];

  // Active study plan phase detail
  const currentPhase = STUDY_PLAN_PHASES.find((p) => p.phase === selectedPhase) || STUDY_PLAN_PHASES[0];

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (faqCategory === "Alle") return VORBEREITUNG_FAQS;
    return VORBEREITUNG_FAQS.filter((f) => f.category === faqCategory);
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
            <span className="hidden rounded-full border border-primary/20 bg-primary-subtle px-2.5 py-0.5 text-[11px] font-bold text-primary md:inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Flagship-Guide 2027
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportChecklist}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="MedAT Checkliste (.txt) herunterladen"
            >
              <span>📥 Checkliste (.txt)</span>
            </button>
            <button
              onClick={handleCopySchedule}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              title="16-Wochen-Plan kopieren"
            >
              <span>📋 Plan kopieren</span>
            </button>
            <Link
              to="/onboarding"
              onClick={() => track("cta_click", { location: "nav", variant: "primary", page: "medat_vorbereitung_guide" })}
              className="btn btn-primary btn-sm px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold shadow-sm whitespace-nowrap"
            >
              Jetzt kostenlos starten
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
              <span className="text-primary font-bold">MedAT-Vorbereitung</span>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold">
              <span className="rounded-md bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-black uppercase tracking-wider text-primary">
                Master-Leitfaden
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconClock className="h-2.5 w-2.5 shrink-0" /> 12 Min. Lesezeit
              </span>
              <span className="rounded-md bg-paper-2 border border-line px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-semibold text-ink-3 inline-flex items-center gap-1">
                <IconCalendar className="h-2.5 w-2.5 shrink-0" /> Aktualisiert für MedAT 2027
              </span>
              <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[8.5px] xs:text-[9.5px] font-bold text-emerald-800">
                ✓ Evidenzbasierte Lernpsychologie
              </span>
            </div>

            {/* Editorial Title */}
            <h1 className="mt-3 text-[22px] xs:text-[26px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-ink">
              MedAT Vorbereitung 2027: Der ultimative Leitfaden zum Medizinstudienplatz
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-2xl text-[13px] xs:text-[14px] sm:text-[16px] leading-relaxed text-ink-2">
              Von Null auf 80%+ ohne 1.500-Euro-Kurs: Fächeranalyse, evidenzbasierter 16-Wochen-Lernplan,
              Zeitmanagement und die 5 fatalen Fehler, an denen 85 % der Bewerber:innen scheitern.
            </p>

            {/* Author Byline */}
            <div className="mt-4 flex items-center gap-3 text-xs text-ink-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-bold text-white text-[11px]">
                MG
              </div>
              <div>
                <p className="font-semibold text-ink">Dr. Maximilian Gruber & Sophie Lindner, MSc</p>
                <p className="text-[11px] text-ink-4">Ärztliches Team & Kognitionswissenschaft MedAT Prep · Wien</p>
              </div>
            </div>

            {/* ════════ 4-STAT HERO RIBBON ════════ */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-primary text-xs font-bold">
                  <IconTarget className="h-4 w-4" />
                  <span>Bewerberfeld</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-ink">16.880</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  Kandidat:innen auf 1.950 Plätze (~11–13 % Erfolgsquote)
                </p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold">
                  <IconChart className="h-4 w-4" />
                  <span>Ziel-Grenzscore</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-ink">78 – 82 %</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  Reicht statistisch für die sichere Zulassung (AT/EU)
                </p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold">
                  <IconBrain className="h-4 w-4" />
                  <span>4 Prüfblöcke</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-ink">BMS & KFF</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  Machen 80 % des Gesamtscores aus (+ 20 % TV & SEK)
                </p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold">
                  <IconSpark className="h-4 w-4" />
                  <span>Faire Chance</span>
                </div>
                <p className="mt-1.5 display text-xl sm:text-2xl font-black text-ink">0 € Start</p>
                <p className="mt-0.5 text-[11px] text-ink-3 leading-tight">
                  Vollwertige Vorbereitung ohne teuren 1.500 € Kurs
                </p>
              </div>
            </div>

            {/* Quick Action Utility Toolbar */}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line/60 pt-4">
              <span className="text-[11px] font-bold text-ink-4 uppercase tracking-wider">Schnellaktionen:</span>
              <button
                onClick={handleExportChecklist}
                className="inline-flex items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink-2 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                📥 Checkliste (.txt)
              </button>
              <button
                onClick={handleCopySchedule}
                className="inline-flex items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink-2 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                📋 16-Wochen-Plan kopieren
              </button>
              <button
                onClick={handleShareGuide}
                className="inline-flex items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink-2 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                🔗 Guide teilen
              </button>
              <a
                href="#rechner"
                className="inline-flex items-center gap-1 rounded-lg border border-primary/30 bg-primary-subtle px-2.5 py-1 text-[11px] font-bold text-primary hover:bg-primary/10 transition-colors ml-auto"
              >
                ⚡ Zum Vorbereitungs-Rechner
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════ MAIN CONTENT WRAPPER ════════════════ */}
        <div className="wrap max-w-6xl py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">
            {/* ── DESKTOP STICKY SIDEBAR (TOC) ── */}
            <aside className="hidden lg:block sticky top-24 rounded-2xl border border-line bg-paper-2 p-5 text-sm">
              <p className="text-[11px] font-black uppercase tracking-wider text-ink-4">Inhaltsverzeichnis</p>
              <nav className="mt-3.5 space-y-1.5 text-[13px] font-medium text-ink-3">
                <a
                  href="#status-quo"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "status-quo" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  1. Die nackten Zahlen & Quoten
                </a>
                <a
                  href="#teststruktur"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "teststruktur" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  2. Die 4 Säulen im Röntgenblick
                </a>
                <a
                  href="#die-5-fehler"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "die-5-fehler" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  3. Die 5 fatalen Vorbereitungsfehler
                </a>
                <a
                  href="#4-saeulen-methode"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "4-saeulen-methode" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  4. Die 4-Säulen-Erfolgsmethode
                </a>
                <a
                  href="#rechner"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "rechner" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  5. Interaktiver Stunden-Rechner
                </a>
                <a
                  href="#16-wochen-plan"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "16-wochen-plan" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  6. Der 16-Wochen Master-Fahrplan
                </a>
                <a
                  href="#methoden-vergleich"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "methoden-vergleich" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  7. Methodenvergleich im Härtetest
                </a>
                <a
                  href="#faq"
                  className={`block rounded-lg px-2.5 py-1.5 transition-colors ${
                    activeSection === "faq" ? "bg-primary-subtle font-bold text-primary" : "hover:text-ink"
                  }`}
                >
                  8. Häufige Fragen (FAQ)
                </a>
              </nav>

              {/* Sidebar Quick CTA Card */}
              <div className="mt-6 rounded-xl border border-primary/20 bg-primary-subtle/50 p-3.5 text-center">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wide">Gratis Diagnostik</span>
                <p className="mt-1 text-xs font-semibold text-ink">Teste jetzt deinen Ausgangsstand</p>
                <p className="mt-0.5 text-[11px] text-ink-3">200 Fragen + Generalprobe #1</p>
                <Link
                  to="/onboarding"
                  onClick={() => track("sidebar_cta_click", { location: "sidebar", page: "medat_vorbereitung_guide" })}
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
                <span>📖 Inhaltsverzeichnis überspringen</span>
                <IconChevron className={`h-4 w-4 transition-transform ${mobileTocOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTocOpen && (
                <nav className="mt-3 space-y-1 border-t border-line/60 pt-2 text-xs text-ink-2">
                  <a href="#status-quo" onClick={() => setMobileTocOpen(false)} className="block py-1">1. Quoten & Zahlen</a>
                  <a href="#teststruktur" onClick={() => setMobileTocOpen(false)} className="block py-1">2. Die 4 Säulen</a>
                  <a href="#die-5-fehler" onClick={() => setMobileTocOpen(false)} className="block py-1">3. Die 5 Fehler</a>
                  <a href="#4-saeulen-methode" onClick={() => setMobileTocOpen(false)} className="block py-1">4. Erfolgsmethode</a>
                  <a href="#rechner" onClick={() => setMobileTocOpen(false)} className="block py-1">5. Stunden-Rechner</a>
                  <a href="#16-wochen-plan" onClick={() => setMobileTocOpen(false)} className="block py-1">6. 16-Wochen-Plan</a>
                  <a href="#methoden-vergleich" onClick={() => setMobileTocOpen(false)} className="block py-1">7. Methodenvergleich</a>
                  <a href="#faq" onClick={() => setMobileTocOpen(false)} className="block py-1">8. FAQ</a>
                </nav>
              )}
            </div>

            {/* ── EDITORIAL ARTICLE BODY ── */}
            <div className="space-y-12 sm:space-y-16 text-[14px] xs:text-[15px] sm:text-[16px] leading-relaxed text-ink-2">
              
              {/* ──────────────── SECTION 1: STATUS QUO & QUOTEN ──────────────── */}
              <section id="status-quo" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 1</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  1. Die nackten Zahlen des MedAT: Quoten, Standorte und der wahre Cut-Off
                </h2>
                
                <p>
                  Jedes Jahr im Juli treten in den Messehallen von <strong>Wien, Graz, Innsbruck und Linz</strong> rund{" "}
                  <strong>16.000 bis 17.000 Menschen</strong> zeitgleich an, um einen der begehrten Medizinstudienplätze
                  in Österreich zu ergattern. Die offizielle Aufnahmerate liegt über alle Bewerber:innen hinweg bei nur{" "}
                  <strong>ca. 11 bis 13 %</strong>. Das bedeutet: Etwa 8 bis 9 von 10 Personen scheitern am Testtag.
                </p>

                <p>
                  Doch wer die Zulassungsmechanik nach <strong>§ 71b Universitätsgesetz (UG 2002)</strong> versteht,
                  erkennt sofort: Du konkurrierst nicht mit allen 17.000 Teilnehmenden, sondern ausschließlich innerhalb
                  deines gesetzlich definierten Kontingents:
                </p>

                <div className="grid gap-3.5 sm:grid-cols-3 my-4">
                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="rounded bg-primary-subtle px-2 py-0.5 text-[10px] font-black uppercase text-primary">
                      Quote 1: 75 %
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-ink">Österreicher-Quote (AT)</h3>
                    <p className="mt-1 text-xs text-ink-3">
                      Vorbehalten für Inhaber:innen eines österreichischen Reifeprüfungszeugnisses.
                    </p>
                    <div className="mt-3 border-t border-line/60 pt-2 text-xs font-semibold text-ink">
                      <span>Erfolgsquote: ca. 13 – 15 %</span>
                      <p className="text-primary mt-0.5">Cut-Off: ~77,5 – 80,5 %</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-black uppercase text-blue-800">
                      Quote 2: 20 %
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-ink">EU-Quote (DE & EU)</h3>
                    <p className="mt-1 text-xs text-ink-3">
                      Offen für alle EU-Bürger:innen (großer Andrang aus Deutschland).
                    </p>
                    <div className="mt-3 border-t border-line/60 pt-2 text-xs font-semibold text-ink">
                      <span>Erfolgsquote: ca. 5 – 7 %</span>
                      <p className="text-blue-600 mt-0.5">Cut-Off: ~81,5 – 84,5 %</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-line bg-paper p-4">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-black uppercase text-slate-700">
                      Quote 3: 5 %
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-ink">Nicht-EU-Quote</h3>
                    <p className="mt-1 text-xs text-ink-3">
                      Für Drittstaatsangehörige ohne EU/EWR-Gleichstellung.
                    </p>
                    <div className="mt-3 border-t border-line/60 pt-2 text-xs font-semibold text-ink">
                      <span>Erfolgsquote: ca. 3 – 5 %</span>
                      <p className="text-slate-600 mt-0.5">Cut-Off: variabel (~74–77 %)</p>
                    </div>
                  </div>
                </div>

                {/* Callout Box */}
                <div className="rounded-2xl border border-amber-300/80 bg-amber-50/70 p-4 sm:p-5 text-amber-950">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <h4 className="text-sm font-bold">Der Mythos des 95-%-Scores</h4>
                      <p className="mt-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
                        Niemand muss im MedAT 95 % oder 100 % der Fragen richtig beantworten! In fast allen Jahrgängen
                        reichte in der Österreicher-Quote ein Gesamtergebnis von <strong>78 bis 80 %</strong>, und selbst in der
                        hart umkämpften EU-Quote waren <strong>82 bis 83 %</strong> regelmäßig das Ticket zum Studienplatz.
                        Deine Vorbereitung muss nicht perfekt sein — sie muss strategisch exakt die 80-%-Marke knacken.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 2: DIE 4 SÄULEN IM RÖNTGENBLICK ──────────────── */}
              <section id="teststruktur" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 2</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  2. Die 4 Säulen des MedAT im Röntgenblick: Punkte, Zeiten & Pacing
                </h2>

                <p>
                  Der MedAT (Humanmedizin) besteht aus vier getrennten Testteilen mit festen Zeitvorgaben. Wer nur den
                  Stoffumfang lernt, aber das Pacing ignoriert, scheitert an der gnadenlosen Zeittaktung:
                </p>

                {/* Interactive Subtest Tabs */}
                <div className="mt-6 rounded-2xl border border-line bg-paper p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-wrap gap-2 border-b border-line pb-4">
                    {SUBTEST_MODULES.map((mod) => (
                      <button
                        key={mod.id}
                        onClick={() => {
                          setSelectedSubtestId(mod.id);
                          track("subtest_tab_click", { subtest: mod.id });
                        }}
                        className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          selectedSubtestId === mod.id
                            ? "bg-primary text-white shadow-sm"
                            : "bg-paper-2 text-ink-3 hover:text-ink hover:bg-slate-100"
                        }`}
                      >
                        {mod.nameShort} ({mod.weightPercent} %)
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line/60 pb-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-ink">{currentSubtest.title}</h3>
                        <p className="text-xs text-ink-3">{currentSubtest.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-lg bg-primary-subtle px-2.5 py-1 text-xs font-black text-primary">
                          {currentSubtest.weightPercent} % Gewicht
                        </span>
                        <span className="rounded-lg bg-paper-2 border border-line px-2.5 py-1 text-xs font-semibold text-ink-3">
                          {currentSubtest.durationMinutes} Min.
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                        <span className="text-[11px] font-bold text-ink-4 uppercase">Aufgaben</span>
                        <p className="display text-lg sm:text-xl font-bold text-ink mt-0.5">{currentSubtest.questionCount}</p>
                      </div>
                      <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                        <span className="text-[11px] font-bold text-ink-4 uppercase">Zeit / Aufgabe</span>
                        <p className="display text-lg sm:text-xl font-bold text-primary mt-0.5">
                          {currentSubtest.secondsPerQuestion} Sek.
                        </p>
                      </div>
                      <div className="col-span-2 sm:col-span-1 rounded-xl border border-line bg-paper-2 p-3 text-center">
                        <span className="text-[11px] font-bold text-ink-4 uppercase">Hilfsmittel</span>
                        <p className="display text-lg sm:text-xl font-bold text-emerald-700 mt-0.5">0 (Nur Stift)</p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 pt-2">
                      <div className="rounded-xl border border-line bg-paper-warm/20 p-3.5">
                        <span className="text-xs font-bold text-ink flex items-center gap-1.5">
                          <span>📌</span> Prüfungsinhalte & Fächer:
                        </span>
                        <ul className="mt-2 space-y-1 text-xs text-ink-2">
                          {currentSubtest.subdisciplines.map((sub, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-primary font-bold">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl border border-primary/20 bg-primary-subtle/30 p-3.5">
                        <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                          <span>🎯</span> Strategische Lösungsregel:
                        </span>
                        <p className="mt-2 text-xs text-ink-2 leading-relaxed">
                          {currentSubtest.solutionStrategy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 3: DIE 5 FATALEN FEHLER ──────────────── */}
              <section id="die-5-fehler" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 3</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  3. Die 5 fatalen Fehler, an denen 85 % der Bewerber:innen scheitern
                </h2>

                <p>
                  Warum schneiden so viele fleißige Abiturient:innen und Maturant:innen mit 1,0-Schnitt im MedAT
                  unerwartet schwach ab? Unsere Auswertung von über 800 Kandidatenprofilen zeigt immer wieder die
                  gleichen fünf Denkfehler:
                </p>

                <div className="space-y-3.5 mt-4">
                  <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                        1
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-red-950">
                        Der 1.500-Euro-Kurs-Trugschluss (Passiver Frontalunterricht)
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-red-900 leading-relaxed pl-7">
                      Viele wiegen sich in falscher Sicherheit, weil sie 1.500 € bis 2.500 € für einen Präsenzkurs
                      ausgegeben haben. Doch zwei Wochen Frontalvorträge in den Osterferien erzeugen nur passive Vertrautheit.
                      Der MedAT verlangt Reaktionsschnelligkeit unter hohem Adrenalinspiegel — die erreichst du nicht durch
                      Zuhören, sondern durch tägliches selbstständiges Lösen von Aufgaben am Bildschirm und auf Papier.
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                        2
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-red-950">
                        Die Illusion des Verstehens (Textmarker & passives Lesen)
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-red-900 leading-relaxed pl-7">
                      Wer 1.000 Seiten im Biologie-Lehrbuch bunt markiert, fühlt sich produktiv. Psychologen nennen das
                      die <em>Illusion of Competence</em>: Das Gehirn verwechselt Wiedererkennen mit echtem Abrufen. Am
                      Testtag musst du ohne Buch die Antwort aus dem Nichts rekonstruieren. Die einzige wirksame Methode
                      heißt <strong>Active Recall</strong> (ständiges Selbstabfragen).
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                        3
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-red-950">
                        KFF bis Mai aufschieben ("Das mache ich kurz vor Schluss")
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-red-900 leading-relaxed pl-7">
                      Kognitive Fähigkeiten (Zahlenfolgen, Gedächtnis, Figuren) lassen sich nicht in 2 Wochen eintrichtern.
                      Sie verhalten sich wie physisches Muskeltraining: Das Gehirn benötigt wiederholte Reize über 12 bis 16
                      Wochen, um Mustererkennung und den mentalen Gedächtnispalast (Loci-Methode) ins Unterbewusstsein zu
                      automatisieren. Wer KFF vernachlässigt, verschenkt 40 % des Gesamtergebnisses.
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                        4
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-red-950">
                        TV & SEK als "Bauchgefühl" abtun (Die verlorenen 20 %)
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-red-900 leading-relaxed pl-7">
                      Textverständnis (10 %) und SEK (10 %) entscheiden fast immer über die letzten Grenzplätze zwischen
                      Rang 700 (Zulassung) und Rang 900 (Warteliste). Wer in SEK nach persönlichem Bauchgefühl antwortet,
                      statt das psychologische Kohlberg-Modell moralischer Urteile anzuwenden, verliert wertvolle Punkte,
                      die man nicht mehr aufholen kann.
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                        5
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-red-950">
                        Null Generalproben unter echten Prüfungsbedingungen
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-red-900 leading-relaxed pl-7">
                      Der MedAT dauert inklusive Einlass und Pausen über 7 Stunden. Der Nachmittagsblock (KFF & SEK) startet
                      genau dann, wenn die mentale Erschöpfung ihren Höchststand erreicht. Wer diesen Belastungszustand
                      vorab nie in mindestens drei 5,5-stündigen Simulationen durchgestanden hat, bricht am Testtag im
                      Mittagstief ein.
                    </p>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 4: DIE 4-SÄULEN-ERFOLGSMETHODE ──────────────── */}
              <section id="4-saeulen-methode" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 4</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  4. Die wissenschaftliche 4-Säulen-Erfolgsmethode
                </h2>

                <p>
                  Moderne Lernpsychologie (Karpicke & Roediger 2008, Ebbinghaus-Vergessenskurve) beweist, dass
                  Erfolg im MedAT kein Produkt von Genie ist, sondern von systematischer Reizwiederholung.
                  MedAT Prep basiert auf vier didaktischen Säulen:
                </p>

                <div className="grid gap-4 sm:grid-cols-2 my-5">
                  <div className="rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <IconMolecule className="h-5 w-5" />
                      <span>Säule 1: Active Recall & Spaced Repetition</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                      Jedes Stoffkapitel im BMS wird nicht gelesen, sondern sofort mit gezielten Single-Choice-Fragen
                      abgefragt. Unser Algorithmus berechnet deine individuelle Vergessenskurve und legt dir schwierige
                      Themen (z. B. Säure-Base-Rechnungen, Genetik) in optimalen Abständen erneut vor.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                      <IconBrain className="h-5 w-5" />
                      <span>Säule 2: KFF-Micro-Drills (25 Min./Tag)</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                      Statt stundenlanger Wochenend-Paukerei setzt unsere Methode auf tägliche, hochintensive 25-Minuten-Einheiten:
                      10 Zahlenfolgen, 25 Loci-Ausweise und 15 Figuren. So verankerst du Lösungsalgorithmen im motorisch-kognitiven
                      Gedächtnis.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                      <IconChart className="h-5 w-5" />
                      <span>Säule 3: Das systematische Fehlerjournal</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                      Eine falsche Übungsfrage ist zehnmal wertvoller als eine richtige — vorausgesetzt, du analysierst den
                      Grund. MedAT Prep kategorisiert deine Fehler automatisch (Wissenslücke, Rechenfehler, Flüchtigkeit)
                      und baut daraus deinen personalisierten Trainingsplan.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                      <IconClock className="h-5 w-5" />
                      <span>Säule 4: 4 Generalproben mit Perzentil-Benchmark</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                      Vier 1:1-Simulationen unter Echtzeit-Stressbedingungen. Du erfährst nicht nur deinen Prozentwert,
                      sondern deinen realen Perzentilrang im Vergleich zu tausenden anderen Kandidat:innen der MedUni Wien,
                      Graz, Innsbruck und Linz.
                    </p>
                  </div>
                </div>

                {/* Community Callout Link */}
                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl shrink-0">💬</span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">Lerne gemeinsam in der MedAT Telegram-Gruppe 2027</h4>
                      <p className="text-xs text-ink-3">Tausche dich mit Mitbewerber:innen über Lernstrategien, knifflige Fachfragen und Erfahrungen aus.</p>
                    </div>
                  </div>
                  <Link
                    to="/medat-telegram-gruppe"
                    className="btn btn-secondary btn-sm text-xs font-bold px-3.5 py-1.5 shrink-0 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all self-start sm:self-auto"
                  >
                    Zur Telegram-Gruppe →
                  </Link>
                </div>
              </section>

              {/* ──────────────── SECTION 5: INTERAKTIVER VORBEREITUNGS-RECHNER ──────────────── */}
              <section id="rechner" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 5</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  5. Interaktiver Vorbereitungs- & Pacing-Rechner
                </h2>
                
                <p>
                  Wie viele Stunden musst du bis zum Testtag investieren? Berechne sofort deine optimale
                  Wochenstundenverteilung auf BMS, KFF, TV und SEK basierend auf deinem Zielstandort und deiner Quote:
                </p>

                {/* CALCULATOR WIDGET */}
                <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-b from-paper to-slate-50 p-4 sm:p-6 shadow-md">
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Uni Selection */}
                    <div>
                      <label className="text-xs font-bold text-ink-3 uppercase tracking-wider block mb-1.5">
                        1. Zieluniversität
                      </label>
                      <select
                        value={targetUni}
                        onChange={(e) => setTargetUni(e.target.value as any)}
                        className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-xs sm:text-sm font-semibold text-ink focus:border-primary focus:outline-none"
                      >
                        <option value="wien">MedUni Wien (Messe Wien)</option>
                        <option value="innsbruck">MedUni Innsbruck (Messe Innsbruck)</option>
                        <option value="graz">MedUni Graz (Messe Graz)</option>
                        <option value="linz">JKU Linz (Campus Linz)</option>
                      </select>
                    </div>

                    {/* Quota Selection */}
                    <div>
                      <label className="text-xs font-bold text-ink-3 uppercase tracking-wider block mb-1.5">
                        2. Deine Quote
                      </label>
                      <select
                        value={quota}
                        onChange={(e) => setQuota(e.target.value as any)}
                        className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-xs sm:text-sm font-semibold text-ink focus:border-primary focus:outline-none"
                      >
                        <option value="at">Österreicher-Quote (75 %)</option>
                        <option value="eu">EU-Quote (20 %)</option>
                        <option value="non-eu">Nicht-EU-Quote (5 %)</option>
                      </select>
                    </div>

                    {/* Months Left */}
                    <div>
                      <label className="text-xs font-bold text-ink-3 uppercase tracking-wider block mb-1.5">
                        3. Restzeit: {monthsLeft} Monate
                      </label>
                      <input
                        type="range"
                        min="2"
                        max="6"
                        step="1"
                        value={monthsLeft}
                        onChange={(e) => setMonthsLeft(Number(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-ink-4 mt-1 font-semibold">
                        <span>2 Mon. (Sprint)</span>
                        <span>4 Mon. (Ideal)</span>
                        <span>6 Mon. (Langzeit)</span>
                      </div>
                    </div>

                    {/* Weekly Hours */}
                    <div>
                      <label className="text-xs font-bold text-ink-3 uppercase tracking-wider block mb-1.5">
                        4. Lernpensum: {weeklyHours} Std./Woche
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="36"
                        step="2"
                        value={weeklyHours}
                        onChange={(e) => setWeeklyHours(Number(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-ink-4 mt-1 font-semibold">
                        <span>12 Std. (Teilzeit)</span>
                        <span>24 Std. (Fokus)</span>
                        <span>36 Std. (Vollzeit)</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculator Output Results */}
                  <div className="mt-6 border-t border-line/80 pt-5">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl border border-line bg-paper p-3.5 text-center">
                        <span className="text-[11px] font-bold text-ink-4 uppercase">Gesamtes Stundenbudget</span>
                        <p className="display text-2xl font-black text-ink mt-0.5">{calculatorResults.totalHours} Std.</p>
                        <p className="text-[11px] text-ink-3">Verfügbare Netto-Lernzeit</p>
                      </div>

                      <div className="rounded-xl border border-line bg-paper p-3.5 text-center">
                        <span className="text-[11px] font-bold text-ink-4 uppercase">Erforderlicher Grenzscore</span>
                        <p className="display text-2xl font-black text-primary mt-0.5">≥ {calculatorResults.targetScore} %</p>
                        <p className="text-[11px] text-ink-3">Historischer Richtwert</p>
                      </div>

                      <div className="rounded-xl border border-line bg-paper p-3.5 text-center">
                        <span className="text-[11px] font-bold text-ink-4 uppercase">Machbarkeits-Index</span>
                        <p className={`display text-xl font-black mt-0.5 ${
                          calculatorResults.readinessStatus === "optimal"
                            ? "text-emerald-600"
                            : calculatorResults.readinessStatus === "gut"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}>
                          {calculatorResults.readinessStatus === "optimal" ? "Hervorragend" : calculatorResults.readinessStatus === "gut" ? "Solide" : "Intensiv"}
                        </p>
                        <p className="text-[11px] text-ink-3">Einschätzung Aufwand/Ertrag</p>
                      </div>
                    </div>

                    {/* Calculated Weekly Distribution */}
                    <div className="mt-4 rounded-xl border border-line/80 bg-paper p-4">
                      <span className="text-xs font-bold text-ink uppercase tracking-wider block mb-2">
                        Empfohlene Wochenstunden-Aufteilung ({weeklyHours} Std./Woche gesamt):
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="rounded-lg bg-red-50 p-2.5 border border-red-100">
                          <span className="font-bold text-red-900 block">BMS (40 %)</span>
                          <span className="text-lg font-black text-red-700">{calculatorResults.bmsHours} Std./Wo.</span>
                          <p className="text-[10px] text-red-600 mt-0.5">Bio, Che, Phy, Mat</p>
                        </div>
                        <div className="rounded-lg bg-purple-50 p-2.5 border border-purple-100">
                          <span className="font-bold text-purple-900 block">KFF (40 %)</span>
                          <span className="text-lg font-black text-purple-700">{calculatorResults.kffHours} Std./Wo.</span>
                          <p className="text-[10px] text-purple-600 mt-0.5">Zahlen, Loci, Figuren</p>
                        </div>
                        <div className="rounded-lg bg-amber-50 p-2.5 border border-amber-100">
                          <span className="font-bold text-amber-900 block">TV (10 %)</span>
                          <span className="text-lg font-black text-amber-700">{calculatorResults.tvHours} Std./Wo.</span>
                          <p className="text-[10px] text-amber-600 mt-0.5">Fachtext-Scanning</p>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-2.5 border border-blue-100">
                          <span className="font-bold text-blue-900 block">SEK (10 %)</span>
                          <span className="text-lg font-black text-blue-700">{calculatorResults.sekHours} Std./Wo.</span>
                          <p className="text-[10px] text-blue-600 mt-0.5">Soziales Entscheiden</p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-ink-3 italic border-t border-line/50 pt-2">
                        💡 <strong>Tipp von Dr. Gruber:</strong> {calculatorResults.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 6: DER 16-WOCHEN MASTER-FAHRPLAN ──────────────── */}
              <section id="16-wochen-plan" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 6</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  6. Der 16-Wochen Master-Fahrplan: Von der Diagnose zum Testtag
                </h2>

                <p>
                  Strukturiere deine Vorbereitungsmonate in vier strategische Phasen. Wähle eine Phase aus, um die
                  Wochenziele, die tägliche Routine und die Meilensteine einzusehen:
                </p>

                {/* Phase Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {STUDY_PLAN_PHASES.map((p) => (
                    <button
                      key={p.phase}
                      onClick={() => {
                        setSelectedPhase(p.phase);
                        track("study_phase_switch", { phase: p.phase });
                      }}
                      className={`rounded-xl border p-3 text-left transition-all cursor-pointer ${
                        selectedPhase === p.phase
                          ? "border-primary bg-primary-subtle text-primary shadow-sm"
                          : "border-line bg-paper text-ink-2 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-ink-4">
                        Phase {p.phase}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold block text-ink mt-0.5">{p.weeks}</span>
                      <span className="text-[11px] text-ink-3 block mt-0.5 truncate">{p.title}</span>
                    </button>
                  ))}
                </div>

                {/* Phase Detail Card */}
                <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-4">
                    <div>
                      <span className="rounded bg-primary-subtle px-2 py-0.5 text-[10px] font-black uppercase text-primary">
                        Phase {currentPhase.phase} · {currentPhase.weeks}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-ink mt-1.5">{currentPhase.title}</h3>
                      <p className="text-xs text-ink-3 mt-0.5">Schwerpunkt: {currentPhase.focus}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg bg-paper-2 border border-line px-2.5 py-1 text-xs font-bold text-ink">
                        {currentPhase.hoursWeekly}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                        <span>⏰</span> Exemplarischer Tagesablauf (Daily Blueprint):
                      </h4>
                      <ul className="mt-2 space-y-2 text-xs text-ink-2">
                        {currentPhase.dailyRoutine.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 rounded-lg bg-paper-2 p-2 border border-line/60">
                            <span className="font-bold text-primary shrink-0">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                        <span>🎯</span> Meilensteine am Ende dieser Phase:
                      </h4>
                      <ul className="mt-2 space-y-2 text-xs text-ink-2">
                        {currentPhase.keyMilestones.map((ms, idx) => (
                          <li key={idx} className="flex items-start gap-2 rounded-lg bg-emerald-50/60 p-2 border border-emerald-200">
                            <span className="font-bold text-emerald-700 shrink-0">✓</span>
                            <span>{ms}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 7: METHODENVERGLEICH ──────────────── */}
              <section id="methoden-vergleich" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 7</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  7. Methodenvergleich im Härtetest: Bücher vs. Kurs vs. MedAT Prep
                </h2>

                <p>
                  Wie investierst du dein Budget und deine Zeit am effektivsten? Der objektive Vergleich der drei
                  gängigsten Vorbereitungswege:
                </p>

                {/* COMPARISON TABLE */}
                <div className="overflow-x-auto rounded-2xl border border-line shadow-sm my-5">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse bg-paper">
                    <thead>
                      <tr className="border-b border-line bg-paper-2 text-ink">
                        <th className="p-3 sm:p-4 font-bold">Kriterium</th>
                        <th className="p-3 sm:p-4 font-semibold text-ink-3">Bücher & Skripte</th>
                        <th className="p-3 sm:p-4 font-semibold text-red-700">1.500 € Präsenzkurs</th>
                        <th className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/50">MedAT Prep Plattform</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line text-ink-2">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Kosten</td>
                        <td className="p-3 sm:p-4">ca. 150 – 250 €</td>
                        <td className="p-3 sm:p-4 text-red-600 font-bold">1.500 – 2.500 €</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700 bg-primary-subtle/20">0 € bis 39 € / Jahr</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Übungsfragen-Umfang</td>
                        <td className="p-3 sm:p-4">ca. 800 – 1.200</td>
                        <td className="p-3 sm:p-4">ca. 1.000 (auf Papier)</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">5.000+ online validiert</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Echtzeit-Zeittaktung</td>
                        <td className="p-3 sm:p-4">Nein (Stoppuhr nötig)</td>
                        <td className="p-3 sm:p-4">Nur an 1–2 Kurstagen</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">Ja, für jede einzelne Frage</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">KFF-Drill-Simulatoren</td>
                        <td className="p-3 sm:p-4">Statisch (schnell auswendig gelernt)</td>
                        <td className="p-3 sm:p-4">Statische Arbeitsblätter</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">Unendliche dynamische Generatoren</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Lernpsychologie</td>
                        <td className="p-3 sm:p-4">Passives Wiederlesen</td>
                        <td className="p-3 sm:p-4">Passiver Frontalvortrag</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">Active Recall & Spaced Repetition</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Perzentil-Vergleich</td>
                        <td className="p-3 sm:p-4">Nicht vorhanden</td>
                        <td className="p-3 sm:p-4">Nur gegen 20 Kursmitglieder</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">Gegen 800+ echte Kandidat:innen</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-ink">Orts- & Zeitunabhängig</td>
                        <td className="p-3 sm:p-4">Bücher mitschleppen</td>
                        <td className="p-3 sm:p-4">Feste Termine & Anreise</td>
                        <td className="p-3 sm:p-4 font-bold text-primary bg-primary-subtle/20">100 % mobil auf Laptop, Tablet, Handy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ──────────────── SECTION 8: CONVERSION BANNER (LEAD MAGNET) ──────────────── */}
              <section className="rounded-3xl border-2 border-primary bg-gradient-to-br from-paper via-red-50/40 to-slate-900 text-ink p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <div
                  className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"
                  aria-hidden="true"
                />

                <div className="relative z-10 max-w-2xl">
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                    Kostenlos starten
                  </span>
                  <h3 className="mt-3 display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
                    Mach heute den ersten Schritt zum Medizinstudienplatz.
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Warte nicht bis zum Frühling. Starte sofort mit deiner ersten kostenlosen Generalprobe und 200
                    originalgetreuen BMS-Fragen. Finde heraus, wo du heute stehst — komplett ohne Kreditkarte.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      to="/onboarding"
                      onClick={() => track("banner_cta_click", { location: "bottom_banner", page: "medat_vorbereitung_guide" })}
                      className="btn btn-primary px-6 py-3 text-sm font-bold shadow-md justify-center"
                    >
                      Jetzt kostenlos üben
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={handleExportChecklist}
                      className="btn btn-secondary px-5 py-3 text-sm font-semibold justify-center"
                    >
                      Checkliste (.txt) herunterladen
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-ink-3">
                    <span className="flex items-center gap-1">
                      <IconCheck className="h-3.5 w-3.5 text-emerald-600" /> 200 BMS-Fragen sofort frei
                    </span>
                    <span className="flex items-center gap-1">
                      <IconCheck className="h-3.5 w-3.5 text-emerald-600" /> Generalprobe #1 enthalten
                    </span>
                    <span className="flex items-center gap-1">
                      <IconCheck className="h-3.5 w-3.5 text-emerald-600" /> Keine Kreditkarte erforderlich
                    </span>
                  </div>
                </div>
              </section>

              {/* ──────────────── SECTION 9: HÄUFIGE FRAGEN (FAQ) ──────────────── */}
              <section id="faq" className="scroll-mt-24 space-y-4">
                <span className="eyebrow text-primary">Kapitel 8</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                  8. Häufig gestellte Fragen (FAQ) zur MedAT-Vorbereitung
                </h2>

                <p>
                  Die wichtigsten Antworten rund um Lernzeit, Kosten, Bücher, Rechner und Quoten auf einen Blick:
                </p>

                {/* FAQ Category Filter */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Alle", "Allgemein", "Strategie & Zeit", "Kosten & Kurse", "Testtag & Quoten"].map((cat) => (
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

                {/* FAQ Accordion Items */}
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
                  Weitere vertiefende Leitfäden im Wissens-Hub:
                </h4>
                <div className="grid gap-3 sm:grid-cols-3 text-xs">
                  <Link
                    to="/bms-masterplan"
                    className="rounded-xl border border-line bg-paper p-3.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-bold text-ink block">Der BMS-Masterplan</span>
                    <span className="text-ink-3 mt-1 block">Bio, Chemie, Physik & Mathe im 16-Wochen-Plan</span>
                  </Link>
                  <Link
                    to="/kff-strategie"
                    className="rounded-xl border border-line bg-paper p-3.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-bold text-ink block">KFF-Systemtraining</span>
                    <span className="text-ink-3 mt-1 block">Zahlenfolgen, Loci-Methode & Figuren</span>
                  </Link>
                  <Link
                    to="/medat-2027-termine"
                    className="rounded-xl border border-line bg-paper p-3.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-bold text-ink block">Termine & Fristen 2027</span>
                    <span className="text-ink-3 mt-1 block">Alle Deadlines und Kostenbeitrags-Details</span>
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
