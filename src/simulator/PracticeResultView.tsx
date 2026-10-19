import React, { useMemo, useState, useEffect, useRef } from "react";
import type { SectionCode, ExamType } from "../content/medat/config";
import type { NormalizedQuestion } from "../dashboard/practiceData";
import { usePractice } from "../dashboard/practiceContext";

/* ─────────────────────────────────────────────────────────────────────────────
   Types (MedAT Version 10 Assessment Engine)
───────────────────────────────────────────────────────────────────────────── */

export interface PracticeTopicStat {
  name: string;
  total: number;
  correct: number;
  difficulty?: "Leicht" | "Mittel" | "Schwer";
}

export interface QuestionReviewItem {
  question: NormalizedQuestion;
  selected: number | undefined;
  isCorrect: boolean;
}

export interface PracticeResultStats {
  total: number;
  correct: number;
  incorrect: number;
  answered: number;
  accuracy: number;
  elapsedSeconds: number;
  topicStats: Record<string, { total: number; correct: number }>;
  section: SectionCode;
  examType?: ExamType;
  setOrder: number;       // 1–5 (0 for mistakes drill)
  setTitle: string;
  chapterTitle: string;
  isMastery: boolean;     // set 5
  passed: boolean;        // ≥ target accuracy
  targetAccuracy: number; // 0–100
  timedOutCount?: number; // count of questions that timed out (Set 4)
  questionReviewItems?: QuestionReviewItem[];
}

interface PracticeResultViewProps {
  stats: PracticeResultStats;
  onOpenReview: () => void;
  onRepeat: () => void;
  onBack: () => void;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Constants (V10 MedAT Intelligence)
───────────────────────────────────────────────────────────────────────────── */

// Per-section time benchmarks (seconds per question, official MedAT guidance)
const SECTION_BENCHMARK: Record<SectionCode, { target: number; label: string; name: string }> = {
  BMS: { target: 60,  label: "60 s/Frage (BMS-Richtwert)", name: "Basiskenntnistest (BMS)" },
  KFF: { target: 75,  label: "75 s/Frage (KFF-Richtwert)", name: "Kognitive Fähigkeiten (KFF)" },
  TV:  { target: 175, label: "175 s/Frage (35 Min / 12 Fragen)", name: "Textverständnis (TV)" },
  SEK: { target: 65,  label: "65 s/Frage (SEK-Richtwert)", name: "Sozial-emotionale Kompetenzen (SEK)" },
  MF:  { target: 60,  label: "60 s/Frage (MF-Richtwert)",  name: "Manuelle Fertigkeiten (MF)" },
};

// Historical Austrian University Cutoffs by Quota
const UNI_QUOTAS = {
  AT: [
    { name: "MedUni Wien",      city: "Wien",       cutoff: 76.5, seats: 660, desc: "Höchste historische Aufnahmeschwelle" },
    { name: "MedUni Innsbruck", city: "Innsbruck",  cutoff: 74.5, seats: 370, desc: "Beliebter Standort für Westösterreich & EU" },
    { name: "MedUni Graz",      city: "Graz",       cutoff: 73.8, seats: 335, desc: "Starker Fokus auf klinische Fertigkeiten" },
    { name: "JKU Linz",         city: "Linz",       cutoff: 72.9, seats: 310, desc: "Moderner Campus mit innovativer Lehre" },
  ],
  EU: [
    { name: "MedUni Wien",      city: "Wien",       cutoff: 79.2, seats: "20% Kontingent", desc: "Sehr hart umkämpftes EU-Kontingent" },
    { name: "MedUni Innsbruck", city: "Innsbruck",  cutoff: 78.4, seats: "20% Kontingent", desc: "Hohe Bewerberdichte aus Deutschland/Südtirol" },
    { name: "MedUni Graz",      city: "Graz",       cutoff: 77.8, seats: "20% Kontingent", desc: "Hohe Punkteanforderung" },
    { name: "JKU Linz",         city: "Linz",       cutoff: 76.9, seats: "20% Kontingent", desc: "Beliebte MedAT-Wahl" },
  ],
  NON_EU: [
    { name: "MedUni Wien",      city: "Wien",       cutoff: 82.0, seats: "5% Kontingent", desc: "Maximaler Konkurrenzdruck" },
    { name: "MedUni Innsbruck", city: "Innsbruck",  cutoff: 80.5, seats: "5% Kontingent", desc: "Strengste Auswahlkriterien" },
    { name: "MedUni Graz",      city: "Graz",       cutoff: 80.0, seats: "5% Kontingent", desc: "Top-Perzentil erforderlich" },
    { name: "JKU Linz",         city: "Linz",       cutoff: 79.5, seats: "5% Kontingent", desc: "Höchste Anforderungen" },
  ],
};

const SET_LABELS: Record<number, { emoji: string; color: string; tag: string }> = {
  1: { emoji: "🌱", color: "sky",     tag: "Grundlagen-Check" },
  2: { emoji: "🎯", color: "blue",    tag: "Aufbau & Vertiefung" },
  3: { emoji: "💡", color: "violet",  tag: "Transfer & Didaktik" },
  4: { emoji: "⚡", color: "amber",   tag: "Speed & Stress Sprint" },
  5: { emoji: "👑", color: "emerald", tag: "Mastery Prüfungssimulation" },
  6: { emoji: "🔥", color: "red",     tag: "Meister-Prüfungssimulation" },
  7: { emoji: "⚡", color: "purple",  tag: "Elite-Prüfungssimulation" },
  8: { emoji: "💎", color: "indigo",  tag: "Grandmaster-Prüfungssimulation" },
  9: { emoji: "🏆", color: "amber",   tag: "Championship-Prüfungssimulation" },
  10: { emoji: "🌟", color: "fuchsia", tag: "Apex-Prüfungssimulation" },
  11: { emoji: "⚡", color: "cyan",    tag: "Titan-Prüfungssimulation" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   V10 Animated Circular Score Arc
───────────────────────────────────────────────────────────────────────────── */
function ScoreRing({
  accuracy,
  passed,
  isMastery,
}: {
  accuracy: number;
  passed: boolean;
  isMastery: boolean;
}) {
  const [displayPct, setDisplayPct] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const end = accuracy;
    const duration = 900;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPct(Math.round(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [accuracy]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (displayPct / 100) * circumference;

  const ringColor = isMastery && passed
    ? "#059669"   // emerald-600
    : accuracy >= 75
      ? "#059669"   // emerald-600
      : accuracy >= 60
        ? "#2563eb"   // blue-600
        : accuracy > 0
          ? "#d97706"   // amber-600
          : "#dc2626";  // red-600

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: 140, height: 140 }}>
      <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: "rotate(-90deg)" }}>
        {/* Track */}
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#f1f5f9" strokeWidth="12" />
        {/* Animated Arc */}
        <circle
          cx="70" cy="70" r={radius}
          fill="none"
          stroke={ringColor}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${strokeDash} ${circumference}`}
          style={{ transition: "stroke-dasharray 0.05s linear" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-[30px] font-black text-slate-900 leading-none">
          {displayPct}%
        </span>
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1">
          TREFFERQUOTE
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   V10 Performance Tier Engine
───────────────────────────────────────────────────────────────────────────── */
function getTierV10(stats: PracticeResultStats) {
  const { accuracy, answered, isMastery, passed, setOrder, correct, total, incorrect } = stats;

  if (answered === 0) {
    return {
      title: "Keine Fragen bearbeitet",
      subtitle: "Du hast dieses Set abgegeben, ohne Antworten auszuwählen. Starte das Set erneut.",
      badge: "NICHT GESTARTET",
      badgeColor: "slate" as const,
      milestone: "Fragen sorgfältig lesen und deine Antworten einloggen.",
      readinessScore: 0,
      percentile: "—",
      admissionChance: "0%",
    };
  }
  if (setOrder === 0) {
    if (correct === total) {
      return {
        title: "🎉 Alle Fehler erfolgreich beseitigt!",
        subtitle: `Fantastisch! Du hast alle ${total} offenen Schwachstellen in diesem Durchlauf korrigiert und gemeistert.`,
        badge: "100% FEHLERFREI",
        badgeColor: "emerald" as const,
        milestone: "Alle Fragen aus diesem Fehlerblock sind nun bereinigt!",
        readinessScore: 100,
        percentile: "Fehler vollständig behoben",
        admissionChance: "> 95%",
      };
    }
    return {
      title: `⚡ ${correct} von ${total} Fehlern korrigiert`,
      subtitle: `Du hast ${correct} Schwachstellen erfolgreich behoben. ${incorrect} Fragen sind noch offen.`,
      badge: "FEHLER-TRAINING",
      badgeColor: correct >= incorrect ? "blue" as const : "amber" as const,
      milestone: `${incorrect} verbleibende Fehler im nächsten Durchlauf trainieren.`,
      readinessScore: accuracy,
      percentile: `${accuracy}% Fehlerreduktion`,
      admissionChance: `${accuracy}%`,
    };
  }
  if (isMastery && passed) {
    return {
      title: "🏆 Kapitel Gemeistert!",
      subtitle: "Herausragende Leistung! Du hast das offizielle Mastery-Ziel (≥80%) für dieses Kapitel erreicht.",
      badge: "MEISTERSCHAFT",
      badgeColor: "emerald" as const,
      milestone: "Ausgezeichnet! Das nächste Kapitel im Lernplan ist freigeschaltet.",
      readinessScore: Math.min(99, accuracy),
      percentile: "Top 3% aller MedAT-Teilnehmer",
      admissionChance: "> 95%",
    };
  }
  if (accuracy >= 85) {
    return {
      title: "Hervorragende Meisterschaft",
      subtitle: "Dein Ergebnis liegt im obersten Perzentil für einen gesicherten MedAT-Studienplatz an allen Universitäten.",
      badge: "EXZELLENT",
      badgeColor: "emerald" as const,
      milestone: "Aktives Tempo beibehalten und komplexe Transferfragen vertiefen.",
      readinessScore: Math.min(98, accuracy + 5),
      percentile: "Top 5% aller MedAT-Teilnehmer",
      admissionChance: "92%",
    };
  }
  if (accuracy >= 75) {
    return {
      title: "Wettbewerbsfähige Prüfungsreife",
      subtitle: "Dein Ergebnis erfüllt die historische Aufnahmeschwelle (Cutoff) der österreichischen Medizin-Universitäten.",
      badge: "ZULASSUNGSREIF",
      badgeColor: "blue" as const,
      milestone: "Gezielte Schwachstellen wiederholen, um den Rangplatz weiter abzusichern.",
      readinessScore: 82,
      percentile: "Top 15% aller MedAT-Teilnehmer",
      admissionChance: "80%",
    };
  }
  if (accuracy >= 60) {
    return {
      title: "Solide Ausgangsbasis",
      subtitle: "Gutes Grundverständnis der Kernkonzepte. Mit gezielter Fehleranalyse erreichst du die 75%+ Aufnahmeschwelle.",
      badge: "IM AUFBAU",
      badgeColor: "amber" as const,
      milestone: "Fokus auf die fehlerhaften Themen legen und Lösungen studieren.",
      readinessScore: 65,
      percentile: "Top 35% aller MedAT-Teilnehmer",
      admissionChance: "55%",
    };
  }
  return {
    title: "Basis-Entwicklungsphase",
    subtitle: "Wichtige Grundlagenlücken identifiziert. Wiederhole die Basisthemen und nutze die Schritt-für-Schritt Erklärungen.",
    badge: "BASIS",
    badgeColor: "red" as const,
    milestone: "Skript-Kapitel rekapitulieren und Set 1 erneut durcharbeiten.",
    readinessScore: accuracy,
    percentile: "Grundlagen-Aufbau",
    admissionChance: "< 40%",
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   Reusable Badge Pill
───────────────────────────────────────────────────────────────────────────── */
function BadgePill({
  label,
  color,
}: {
  label: string;
  color: "emerald" | "blue" | "amber" | "red" | "slate" | "sky" | "violet";
}) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    blue:    "bg-blue-50 border-blue-200 text-blue-800",
    amber:   "bg-amber-50 border-amber-200 text-amber-800",
    red:     "bg-red-50 border-red-200 text-red-700",
    slate:   "bg-slate-100 border-slate-200 text-slate-600",
    sky:     "bg-sky-50 border-sky-200 text-sky-800",
    violet:  "bg-violet-50 border-violet-200 text-violet-800",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider ${map[color] || map.slate}`}>
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT: PracticeResultView V10 High Level
───────────────────────────────────────────────────────────────────────────── */
export function PracticeResultView({
  stats,
  onOpenReview,
  onRepeat,
  onBack,
}: PracticeResultViewProps) {
  const {
    total, correct, incorrect, answered, accuracy,
    elapsedSeconds, topicStats, section, examType = "MedAT-H", setOrder,
    setTitle, chapterTitle, isMastery, passed, targetAccuracy,
    questionReviewItems = [],
  } = stats;

  type Tab = "overview" | "topics" | "time" | "questions" | "admission";
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [selectedQuota, setSelectedQuota] = useState<"AT" | "EU" | "NON_EU">("AT");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);
  const [mapFilter, setMapFilter] = useState<"ALL" | "CORRECT" | "INCORRECT" | "UNANSWERED">("ALL");

  const { setIsResultPage } = usePractice();
  useEffect(() => {
    setIsResultPage(true);
    return () => {
      setIsResultPage(false);
    };
  }, [setIsResultPage]);



  // Keyboard navigation for question detail modal
  useEffect(() => {
    if (selectedQuestionIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedQuestionIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedQuestionIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      } else if (e.key === "ArrowRight") {
        setSelectedQuestionIndex((prev) =>
          prev !== null && prev < questionReviewItems.length - 1 ? prev + 1 : prev
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedQuestionIndex, questionReviewItems.length]);


  /* ---------- V10 Derived Metrics ---------- */
  const skipped = Math.max(0, total - answered);
  const avgSecsPerQ = answered > 0 ? Math.round(elapsedSeconds / answered) : 0;
  const netAccuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  const formattedDate = useMemo(() => {
    return new Date().toLocaleDateString("de-AT", {
      month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit",
    });
  }, []);

  const timeFormatted = useMemo(() => {
    const h = Math.floor(elapsedSeconds / 3600);
    const m = Math.floor((elapsedSeconds % 3600) / 60);
    const s = elapsedSeconds % 60;
    return `${h > 0 ? `${h}h ` : ""}${m}m ${String(s).padStart(2, "0")}s`;
  }, [elapsedSeconds]);

  const tier = useMemo(() => getTierV10(stats), [stats]);
  const benchmark = SECTION_BENCHMARK[section] ?? SECTION_BENCHMARK.BMS;
  const setMeta = SET_LABELS[setOrder] ?? SET_LABELS[1];

  // Set 4 Timed Sprint & Stress Diagnostics
  const isTimedSprint = setOrder === 4;
  const sprintTarget = isTimedSprint ? 45 : benchmark.target;
  const standardLimitSeconds = total * sprintTarget;
  const savedBufferSeconds = Math.max(0, standardLimitSeconds - elapsedSeconds);
  const savedBufferFormatted = `${Math.floor(savedBufferSeconds / 60)}m ${String(savedBufferSeconds % 60).padStart(2, "0")}s`;

  // Speed-Accuracy Tradeoff Verdict for Set 4
  const sprintTradeoffVerdict = useMemo(() => {
    if (answered === 0) {
      return {
        title: "Keine Bearbeitung im Timed Sprint",
        desc: "Die Zeit ist abgelaufen, ohne dass Antworten eingeloggt wurden. Starte den Sprint erneut!",
        badge: "UNBEARBEITET",
        color: "slate" as const,
      };
    }
    if (accuracy >= 80 && avgSecsPerQ <= 45) {
      return {
        title: "⚡ Meistersprinter: Perfekte Balance aus Tempo & Präzision",
        desc: `Mit Ø ${avgSecsPerQ}s pro Frage und starken ${accuracy}% Genauigkeit meisterst du den MedAT-Zeitdruck absolut souverän.`,
        badge: "MEISTER-PACING",
        color: "emerald" as const,
      };
    }
    if (accuracy >= 75 && avgSecsPerQ > 45) {
      return {
        title: "🎯 Hohe Treffsicherheit, leicht über dem 45s-Sprint-Limit",
        desc: `Inhaltlich mit ${accuracy}% sehr stark, aber für den Extrem-Sprint leicht verzögert (${avgSecsPerQ}s). Nutze schnellere Ausschlussverfahren.`,
        badge: "PRÄZISE ABER BEDÄCHTIG",
        color: "blue" as const,
      };
    }
    if (accuracy < 60 && avgSecsPerQ <= 30) {
      return {
        title: "⚠️ Zu hastig geklickt: Flüchtigkeitsfehler-Gefahr",
        desc: `Sehr schnell (Ø ${avgSecsPerQ}s), aber die Quote (${accuracy}%) litt unter Zeithektik. Nimm dir 5-10s mehr zum genauen Lesen von Negationen.`,
        badge: "ZU HASTIG",
        color: "amber" as const,
      };
    }
    return {
      title: "⏱️ Zeitdruck-Aufbauphase",
      desc: `Solider Durchlauf unter Stress. Arbeite daran, Distraktoren zügiger zu eliminieren, um das Sprint-Limit von 45s stabil zu halten.`,
      badge: "PACING IM AUFBAU",
      color: "amber" as const,
    };
  }, [accuracy, avgSecsPerQ, answered]);

  // Pacing status calculation
  const paceDelta = sprintTarget - avgSecsPerQ;
  const paceStatus = useMemo(() => {
    if (answered === 0) return { label: "KEINE DATEN", color: "slate" as const, desc: "Keine Fragen beantwortet." };
    if (avgSecsPerQ <= sprintTarget * 0.65) {
      return { label: "SEHR SCHNELL", color: "amber" as const, desc: "Schneller als der Richtwert. Achte auf Flüchtigkeitsfehler!" };
    }
    if (avgSecsPerQ <= sprintTarget) {
      return { label: "OPTIMAL", color: "emerald" as const, desc: `Hervorragende Zeiteinteilung (${paceDelta}s Zeitpuffer pro Frage).` };
    }
    return { label: "ZEITNOT-RISIKO", color: "red" as const, desc: `${Math.abs(paceDelta)}s über dem Richtwert. Trainiere dein Tempo!` };
  }, [avgSecsPerQ, sprintTarget, answered, paceDelta]);

  // Topic mastery list
  const topicsList = useMemo(() => {
    return Object.entries(topicStats)
      .map(([name, data]) => {
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const difficulty: "Leicht" | "Mittel" | "Schwer" =
          pct >= 80 ? "Leicht" : pct >= 55 ? "Mittel" : "Schwer";
        const masteryTier = pct >= 80 ? "Gemeistert" : pct >= 60 ? "Solide" : "Wiederholen";
        return { name, total: data.total, correct: data.correct, accuracy: pct, difficulty, masteryTier };
      })
      .sort((a, b) => b.accuracy - a.accuracy);
  }, [topicStats]);

  const strongTopics = useMemo(() => topicsList.filter((t) => t.accuracy >= 75), [topicsList]);
  const weakTopics   = useMemo(() => topicsList.filter((t) => t.accuracy < 60),  [topicsList]);

  // Cognitive Fatigue Curve Analysis (First Half vs Second Half)
  const fatigueAnalysis = useMemo(() => {
    if (questionReviewItems.length < 6) return null;
    const mid = Math.floor(questionReviewItems.length / 2);
    const firstHalf = questionReviewItems.slice(0, mid);
    const secondHalf = questionReviewItems.slice(mid);

    const firstCorrect = firstHalf.filter((q) => q.isCorrect).length;
    const secondCorrect = secondHalf.filter((q) => q.isCorrect).length;

    const firstPct = Math.round((firstCorrect / firstHalf.length) * 100);
    const secondPct = Math.round((secondCorrect / secondHalf.length) * 100);
    const delta = secondPct - firstPct;

    return {
      firstPct,
      secondPct,
      delta,
      status:
        delta >= 0
          ? "Stabile Konzentration & Schlusssprint (+ Steigerung)"
          : delta >= -15
            ? "Normale kognitive Belastung (Leichter Abfall)"
            : "Hohe Ermüdung in der 2. Hälfte (Fokus-Training empfohlen)",
    };
  }, [questionReviewItems]);

  // Bloom's Cognitive Competency Breakdown
  const cognitiveTaxonomy = useMemo(() => {
    if (!questionReviewItems.length) return null;

    let recallTotal = 0, recallCorrect = 0;
    let negationTotal = 0, negationCorrect = 0;
    let multiTotal = 0, multiCorrect = 0;
    let transferTotal = 0, transferCorrect = 0;

    questionReviewItems.forEach(({ question, isCorrect }) => {
      const text = (question.question || "").toLowerCase();
      const isNegation = text.includes("nicht") || text.includes("kein") || text.includes("falsch") || text.includes("trifft nicht zu");
      const isMulti = text.includes("1 und 2") || text.includes("aussagen") || text.includes("kombination");

      if (isNegation) {
        negationTotal++;
        if (isCorrect) negationCorrect++;
      } else if (isMulti) {
        multiTotal++;
        if (isCorrect) multiCorrect++;
      } else if (text.length > 250 || text.includes("fallbeispiel") || text.includes("schlussfolgerung")) {
        transferTotal++;
        if (isCorrect) transferCorrect++;
      } else {
        recallTotal++;
        if (isCorrect) recallCorrect++;
      }
    });

    return [
      { label: "Faktenwissen & Definitionen", total: recallTotal, correct: recallCorrect, pct: recallTotal ? Math.round((recallCorrect / recallTotal) * 100) : 100 },
      { label: "Negationsfragen (NICHT / FALSCH)", total: negationTotal, correct: negationCorrect, pct: negationTotal ? Math.round((negationCorrect / negationTotal) * 100) : 100 },
      { label: "Typ-K & Mehrfachauswahl", total: multiTotal, correct: multiCorrect, pct: multiTotal ? Math.round((multiCorrect / multiTotal) * 100) : 100 },
      { label: "Transfer- & Textverständnis", total: transferTotal, correct: transferCorrect, pct: transferTotal ? Math.round((transferCorrect / transferTotal) * 100) : 100 },
    ].filter((t) => t.total > 0);
  }, [questionReviewItems]);

  const TABS: { id: Tab; label: string; icon: string }[] = [
    { id: "overview",  label: "ÜBERSICHT", icon: "📊" },
    { id: "topics",    label: "THEMEN", icon: "🎯" },
    { id: "time",      label: "ZEIT & STRESS", icon: "⏱️" },
    { id: "questions", label: `FRAGEN (${questionReviewItems.length || total})`, icon: "🔍" },
    { id: "admission", label: "ZULASSUNG 2026", icon: "🇦🇹" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-28 pt-4 px-4 sm:px-6 lg:px-8 animate-screen-in select-none antialiased text-slate-900 font-sans">
      
      {/* ─── 0. TOP NAVIGATION ROW ────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Zurück zur Übersicht</span>
        </button>

        <span className="text-[11.5px] font-mono font-bold text-slate-400">
          {setTitle} · Auswertung
        </span>
      </div>

      {/* ─── 1. TOP HERO CARD (V10) ────────────────────────────────────── */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #dc2626, transparent)" }}
        />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left info */}
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-800 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                ABGABE ERFOLGREICH · V10 ANALYTICS
              </span>
              <span className="text-[12px] text-slate-400 font-medium">
                {formattedDate}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[11px] font-black text-slate-700">
                {setMeta.emoji} {setTitle}
              </span>
              <span className="text-[12px] text-slate-300">·</span>
              <span className="text-[12px] text-slate-500 font-semibold">{chapterTitle}</span>
              <span className="text-[12px] text-slate-300">·</span>
              <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                {benchmark.name}
              </span>
            </div>

            <h1 className="text-[24px] sm:text-[30px] font-black tracking-tight text-slate-900 leading-tight">
              {tier.title}
            </h1>

            <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-medium leading-relaxed max-w-2xl">
              {tier.subtitle}
            </p>
          </div>

          {/* Right: Circular score ring */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <ScoreRing accuracy={accuracy} passed={passed} isMastery={isMastery} />
            <span className="text-[11px] font-black text-slate-500">
              {correct} von {total} Punkten
            </span>
          </div>
        </div>

        {/* 4 Bottom Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-100">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 text-center">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Richtig</p>
            <p className="font-mono text-[20px] font-black text-emerald-600 mt-0.5">{correct}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 text-center">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Falsch</p>
            <p className="font-mono text-[20px] font-black text-red-600 mt-0.5">{incorrect}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 text-center">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Ø Pacing</p>
            <p className="font-mono text-[20px] font-black text-slate-900 mt-0.5">{avgSecsPerQ}s</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 text-center">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Zulassungschance</p>
            <p className="font-mono text-[20px] font-black text-slate-900 mt-0.5">{tier.admissionChance}</p>
          </div>
        </div>
      </div>

      {/* ─── 2. V10 NAVIGATION TABS ───────────────────────────────────── */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 overflow-x-auto pb-0.5 scrollbar-none">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-3 px-4 text-[12.5px] font-black transition-all border-b-2 whitespace-nowrap -mb-[2px] ${
              activeTab === tab.id
                ? "border-red-600 text-red-600 bg-red-50/40 rounded-t-xl"
                : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TAB 1: ÜBERSICHT (V10 Executive Performance Summary)
      ═══════════════════════════════════════════════════════════════ */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          
          {/* Row A: Performance Tier & Next Smart Action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-900">
                  LEISTUNGSSTUFE & PERZENTIL
                </span>
                <BadgePill label={tier.badge} color={tier.badgeColor} />
              </div>

              <div className="space-y-1.5">
                <h2 className="text-[20px] sm:text-[23px] font-black text-amber-950 tracking-tight">
                  {tier.title}
                </h2>
                <p className="text-[13px] text-amber-900/90 leading-relaxed font-medium">
                  {tier.subtitle}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-amber-200/50">
                <div className="flex justify-between text-[11px] font-bold text-amber-900">
                  <span>PRÜFUNGSREIFE-INDEX</span>
                  <span className="font-mono font-black">{tier.readinessScore}/100</span>
                </div>
                <div className="h-2.5 w-full bg-amber-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-600 rounded-full transition-all duration-700"
                    style={{ width: `${tier.readinessScore}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10.5px] font-bold text-amber-800">
                  <span>{tier.percentile}</span>
                  <span>MedAT Cutoff: 75%</span>
                </div>
              </div>
            </div>

            {/* Smart Next Step CTA */}
            <div className="lg:col-span-5 rounded-3xl border border-slate-900 bg-slate-900 text-white p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-red-400 text-[11px] font-black uppercase tracking-wider">
                  <span>⚡</span>
                  <span>NÄCHSTE EMPFOHLENE AKTION</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-black text-white tracking-tight">
                  {passed ? "Lösungswege nachvollziehen" : "Schwachstellen analysieren"}
                </h3>
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  {tier.milestone}
                </p>
              </div>
              <button
                onClick={onOpenReview}
                className="w-full rounded-2xl bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white py-3.5 px-5 font-black text-[13.5px] shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Antworten analysieren (Review)</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Row B: 3 or 4 Diagnostic Factor Cards */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm space-y-4">
            <p className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">
              {isTimedSprint ? "TIMED SPRINT FAKTOREN-BEWERTUNG (SET 4)" : "DIAGNOSTISCHE FAKTOREN-BEWERTUNG"}
            </p>
            <div className={`grid gap-3.5 ${isTimedSprint ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>
              {/* Score factor */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">PUNKTE</span>
                  <BadgePill label={accuracy >= 75 ? "STARK" : "IM AUFBAU"} color={accuracy >= 75 ? "emerald" : "amber"} />
                </div>
                <p className="text-[12.5px] text-slate-700 font-medium">
                  <strong className="text-slate-900 font-black">{correct}</strong> von {total} Punkten erreicht.
                </p>
              </div>

              {/* Accuracy factor */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">NETTO-QUOTE</span>
                  <BadgePill label={netAccuracy >= 75 ? "STARK" : "IM AUFBAU"} color={netAccuracy >= 75 ? "emerald" : "amber"} />
                </div>
                <p className="text-[12.5px] text-slate-700 font-medium">
                  <strong className="text-slate-900 font-black">{netAccuracy}%</strong> bei bearbeiteten Fragen.
                </p>
              </div>

              {/* Pace factor */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">SPRINT-TEMPO</span>
                  <BadgePill label={paceStatus.label} color={paceStatus.color} />
                </div>
                <p className="text-[12.5px] text-slate-700 font-medium">
                  Ø <strong className="text-slate-900 font-black">{avgSecsPerQ}s</strong> / Frage (Ziel: {sprintTarget}s)
                </p>
              </div>

              {/* Set 4 Extra: Timeouts Card */}
              {isTimedSprint && (
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">TIMEOUTS (0s)</span>
                    <BadgePill
                      label={(stats.timedOutCount || 0) === 0 ? "0 TIMEOUTS" : `${stats.timedOutCount} VERPASST`}
                      color={(stats.timedOutCount || 0) === 0 ? "emerald" : "red"}
                    />
                  </div>
                  <p className="text-[12.5px] text-slate-700 font-medium">
                    {(stats.timedOutCount || 0) === 0
                      ? <span className="text-emerald-700 font-bold">Alle Fragen rechtzeitig eingeloggt.</span>
                      : <><strong className="text-red-600 font-black">{stats.timedOutCount}</strong> Fragen wegen Zeitablauf verloren.</>
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Set 4 Dedicated Speed-Accuracy Tradeoff Banner */}
          {isTimedSprint && (
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 p-6 sm:p-7 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-amber-900">
                  <span>⚡</span>
                  <span>SPEED & STRESS DIAGNOSTIK</span>
                </span>
                <BadgePill label={sprintTradeoffVerdict.badge} color={sprintTradeoffVerdict.color} />
              </div>
              <div className="space-y-1">
                <h3 className="text-[17px] sm:text-[18.5px] font-black text-slate-900">
                  {sprintTradeoffVerdict.title}
                </h3>
                <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                  {sprintTradeoffVerdict.desc}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">HERAUSGEHOLTER ZEITPUFFER</span>
                  <p className="font-mono text-[16px] font-black text-emerald-700 mt-0.5">+{savedBufferFormatted}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">SPRINT-RICHTWERT</span>
                  <p className="font-mono text-[16px] font-black text-slate-900 mt-0.5">45s <span className="text-[11px] font-normal text-slate-400">/ Frage</span></p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">PRÄZISION BEI SPRINT</span>
                  <p className="font-mono text-[16px] font-black text-slate-900 mt-0.5">{netAccuracy}% <span className="text-[11px] font-normal text-slate-400">Netto</span></p>
                </div>
              </div>
            </div>
          )}

          {/* Row C: Question Sequence Timeline */}
          {questionReviewItems.length > 0 && (
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
                <div>
                  <h3 className="text-[13px] font-black uppercase tracking-wider text-slate-900">
                    FRAGEN-VERLAUF & ERGEBNIS-MAP
                  </h3>
                  <p className="text-[12px] text-slate-500 font-medium">
                    Klicke auf eine Frage für Lösungsdetails, Antwortwahlen & didaktische Erklärungen.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    onClick={() => setMapFilter("ALL")}
                    className={`rounded-xl px-3 py-1 text-[11.5px] font-black transition-all ${
                      mapFilter === "ALL" ? "bg-slate-900 text-white shadow-2xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    Alle ({questionReviewItems.length})
                  </button>
                  <button
                    onClick={() => setMapFilter("CORRECT")}
                    className={`rounded-xl px-3 py-1 text-[11.5px] font-black transition-all ${
                      mapFilter === "CORRECT" ? "bg-emerald-600 text-white shadow-2xs" : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                    }`}
                  >
                    ✓ Richtig ({correct})
                  </button>
                  <button
                    onClick={() => setMapFilter("INCORRECT")}
                    className={`rounded-xl px-3 py-1 text-[11.5px] font-black transition-all ${
                      mapFilter === "INCORRECT" ? "bg-red-600 text-white shadow-2xs" : "bg-red-50 text-red-800 hover:bg-red-100"
                    }`}
                  >
                    ✕ Falsch ({incorrect})
                  </button>
                  {skipped > 0 && (
                    <button
                      onClick={() => setMapFilter("UNANSWERED")}
                      className={`rounded-xl px-3 py-1 text-[11.5px] font-black transition-all ${
                        mapFilter === "UNANSWERED" ? "bg-slate-700 text-white shadow-2xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      — Offen ({skipped})
                    </button>
                  )}
                </div>
              </div>

              {/* Grid of Question Pills */}
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2.5 pt-1">
                {questionReviewItems.map((item, idx) => {
                  const isRight = item.isCorrect;
                  const isAnswered = item.selected !== undefined;

                  if (mapFilter === "CORRECT" && !isRight) return null;
                  if (mapFilter === "INCORRECT" && (isRight || !isAnswered)) return null;
                  if (mapFilter === "UNANSWERED" && isAnswered) return null;

                  return (
                    <button
                      key={item.question.id}
                      onClick={() => setSelectedQuestionIndex(idx)}
                      className={`group relative flex h-14 w-full flex-col items-center justify-center rounded-2xl border transition-all duration-150 active:scale-95 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 cursor-pointer select-none ${
                        isRight
                          ? "border-emerald-200 bg-emerald-50/70 text-emerald-950 hover:bg-emerald-100 hover:border-emerald-300"
                          : isAnswered
                            ? "border-red-200 bg-red-50/70 text-red-950 hover:bg-red-100 hover:border-red-300"
                            : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100"
                      }`}
                      title={`Frage ${idx + 1}: ${isRight ? "Richtig gelöst" : isAnswered ? "Falsch beantwortet" : "Nicht beantwortet"} · Klicken für Details`}
                    >
                      <span className="font-mono text-[13px] font-black tracking-tight leading-none">
                        #{String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-1 mt-1">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isRight ? "bg-emerald-600" : isAnswered ? "bg-red-600" : "bg-slate-400"
                          }`}
                        />
                        <span className="text-[9.5px] font-black uppercase leading-none">
                          {isRight ? "✓" : isAnswered ? "✕" : "—"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}


      {/* ═══════════════════════════════════════════════════════════════
          TAB 2: THEMEN & TAXONOMIE (V10 Subdiscipline Matrix)
      ═══════════════════════════════════════════════════════════════ */}
      {activeTab === "topics" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 space-y-1">
              <h3 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">
                Themen-Kompetenzanalyse
              </h3>
              <p className="text-[12.5px] text-slate-500">
                Detailauswertung aller abgeprüften Teilthemen nach Trefferquote und Schwierigkeitsgrad.
              </p>
            </div>

            <div className="space-y-3.5">
              {topicsList.map((topic) => (
                <div
                  key={topic.name}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 space-y-2.5 transition-all hover:border-slate-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[14px] font-bold text-slate-900">{topic.name}</span>
                      <span className="rounded-lg bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                        {topic.correct} / {topic.total} Fragen
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BadgePill
                        label={topic.masteryTier}
                        color={topic.accuracy >= 80 ? "emerald" : topic.accuracy >= 60 ? "blue" : "red"}
                      />
                      <span className="font-mono text-[14px] font-black text-slate-900">
                        {topic.accuracy}%
                      </span>
                    </div>
                  </div>

                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        topic.accuracy >= 75 ? "bg-emerald-600" : topic.accuracy >= 55 ? "bg-blue-600" : "bg-red-500"
                      }`}
                      style={{ width: `${topic.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cognitive Taxonomy Analysis */}
          {cognitiveTaxonomy && (
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-[15px] font-black uppercase tracking-wider text-slate-900">
                  Kognitive Fragentyp-Kompetenz (Bloom-Taxonomie)
                </h3>
                <p className="text-[12px] text-slate-500">
                  Prüfungsspezifische Auswertung nach Negationsfallen, Typ-K Mehrfachauswahl und Faktenwissen.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {cognitiveTaxonomy.map((cog) => (
                  <div key={cog.label} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[12.5px] font-bold text-slate-800">{cog.label}</span>
                      <span className="font-mono text-[13px] font-black text-slate-900">{cog.pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cog.pct >= 75 ? "bg-emerald-500" : cog.pct >= 50 ? "bg-amber-500" : "bg-red-500"}`}
                        style={{ width: `${cog.pct}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {cog.correct} von {cog.total} Fragen dieses Typs richtig gelöst
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          TAB 3: ZEIT & STRESS (V10 Fatigue & Pacing Diagnostics)
      ═══════════════════════════════════════════════════════════════ */}
      {activeTab === "time" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 space-y-1">
              <h3 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">
                {isTimedSprint ? "⚡ Timed Sprint Zeit- & Stress-Analyse" : "Zeit-Analyse & Bearbeitungstempo"}
              </h3>
              <p className="text-[12.5px] text-slate-500">
                {isTimedSprint
                  ? "Vergleich deines Tempos mit dem 45s-Sprint-Limit und offiziellen MedAT-Richtwerten."
                  : `Vergleich deines Tempos mit dem offiziellen Richtwert (${benchmark.target}s / Frage).`
                }
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Gesamtdauer</p>
                <p className="font-mono text-[26px] font-black text-slate-900 mt-1">{timeFormatted}</p>
                <p className="text-[11px] text-slate-500 mt-1">für {answered} bearbeitete Fragen</p>
              </div>

              <div className={`rounded-2xl border p-5 text-center ${
                paceStatus.color === "emerald"
                  ? "border-emerald-200 bg-emerald-50/50"
                  : paceStatus.color === "amber"
                    ? "border-amber-200 bg-amber-50/50"
                    : "border-slate-200 bg-slate-50/50"
              }`}>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Ø Zeit / Frage</p>
                <p className={`font-mono text-[26px] font-black mt-1 ${
                  paceStatus.color === "emerald" ? "text-emerald-700" : paceStatus.color === "amber" ? "text-amber-700" : "text-slate-900"
                }`}>{avgSecsPerQ}s</p>
                <BadgePill label={paceStatus.label} color={paceStatus.color} />
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 text-center">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {isTimedSprint ? "Sprint-Vorgabe" : `${section}-Richtwert`}
                </p>
                <p className="font-mono text-[26px] font-black text-blue-700 mt-1">{sprintTarget}s</p>
                <p className="text-[11px] text-blue-700 font-semibold mt-1">
                  {isTimedSprint ? "Max. 45s pro Frage" : benchmark.label}
                </p>
              </div>
            </div>

            {/* Fatigue curve card */}
            {fatigueAnalysis && (
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    KOGNITIVE ERMÜDUNGSKURVE (1. HÄLFTE VS. 2. HÄLFTE)
                  </span>
                  <span className="text-[11px] font-bold text-slate-700">{fatigueAnalysis.status}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase">1. HÄLFTE (FRAGEN 1–{Math.floor(total / 2)})</span>
                    <p className="font-mono text-[20px] font-black text-slate-900">{fatigueAnalysis.firstPct}%</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase">2. HÄLFTE (FRAGEN {Math.floor(total / 2) + 1}–{total})</span>
                    <p className="font-mono text-[20px] font-black text-slate-900">{fatigueAnalysis.secondPct}%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          TAB 4: FRAGEN-DIAGNOSE (V10 Interactive Review Grid)
      ═══════════════════════════════════════════════════════════════ */}
      {activeTab === "questions" && (
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">
                Fragen-Diagnostik & Distraktoren-Analyse
              </h3>
              <p className="text-[12.5px] text-slate-500">
                Klicke auf eine Frage, um Lösungswege, Auswahlen und didaktische Erklärungen einzusehen.
              </p>
            </div>
            <button
              onClick={onOpenReview}
              className="rounded-xl bg-slate-900 text-white px-4 py-2 text-[12px] font-black hover:bg-slate-800 transition-all"
            >
              Vollbild-Review öffnen →
            </button>
          </div>

          <div className="space-y-3">
            {questionReviewItems.map((item, idx) => {
              const q = item.question;
              const isCorrect = item.isCorrect;
              const isAnswered = item.selected !== undefined;

              return (
                <div
                  key={q.id}
                  onClick={() => setSelectedQuestionIndex(idx)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all hover:shadow-xs active:scale-[0.995] flex items-center justify-between gap-4 ${

                    isCorrect
                      ? "border-emerald-200/80 bg-emerald-50/30 hover:bg-emerald-50/60"
                      : isAnswered
                        ? "border-red-200/80 bg-red-50/30 hover:bg-red-50/60"
                        : "border-slate-200 bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl font-mono text-[12px] font-black text-white ${
                        isCorrect ? "bg-emerald-600" : isAnswered ? "bg-red-600" : "bg-slate-400"
                      }`}
                    >
                      #{idx + 1}
                    </span>
                    <p className="text-[13.5px] font-semibold text-slate-900 truncate">
                      {q.question}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider ${
                        isCorrect
                          ? "bg-emerald-100 text-emerald-800"
                          : isAnswered
                            ? "bg-red-100 text-red-800"
                            : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {isCorrect ? "✓ Richtig" : isAnswered ? "✕ Falsch" : "— Offen"}
                    </span>
                    <span className="text-slate-400 text-xs font-bold">Details →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          TAB 5: ZULASSUNG 2026 (V10 Austrian Quota Simulator)
      ═══════════════════════════════════════════════════════════════ */}
      {activeTab === "admission" && (
        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-red-600 text-[11px] font-black uppercase tracking-wider">
                  <span>🇦🇹</span>
                  <span>{examType} HISTORISCHER GRENZWERT-VERGLEICH</span>
                </div>

                {/* Quota Switcher */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setSelectedQuota("AT")}
                    className={`rounded-lg px-3 py-1 text-[11.5px] font-black transition-all ${
                      selectedQuota === "AT" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Österreicher-Quote (75%)
                  </button>
                  <button
                    onClick={() => setSelectedQuota("EU")}
                    className={`rounded-lg px-3 py-1 text-[11.5px] font-black transition-all ${
                      selectedQuota === "EU" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    EU-Quote (20%)
                  </button>
                  <button
                    onClick={() => setSelectedQuota("NON_EU")}
                    className={`rounded-lg px-3 py-1 text-[11.5px] font-black transition-all ${
                      selectedQuota === "NON_EU" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Nicht-EU (5%)
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">
                  Universitäts-Grenzwert-Vergleich (Österreich)
                </h3>
                <p className="text-[12.5px] text-slate-500">
                  Statistischer Vergleich deines Scores ({accuracy}%) mit den historischen Cutoffs der Vorjahre. Keine offizielle Zulassungsentscheidung.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {UNI_QUOTAS[selectedQuota].map((uni) => {
                const isPassing = accuracy >= uni.cutoff;
                const diff = Math.round((accuracy - uni.cutoff) * 10) / 10;
                const pctOfCutoff = Math.min(100, Math.max(5, (accuracy / uni.cutoff) * 100));

                return (
                  <div
                    key={uni.name}
                    className={`rounded-2xl border p-5 space-y-3.5 transition-all ${
                      isPassing ? "border-emerald-200 bg-emerald-50/30" : "border-slate-200 bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-black text-[15px] text-slate-900">{uni.name}</h4>
                        <p className="text-[12px] text-slate-500">{uni.seats} · {uni.city}</p>
                      </div>
                      <span className={`rounded-lg px-2.5 py-1 text-[10.5px] font-black shrink-0 ${
                        isPassing
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}>
                        {isPassing ? `✓ Erreicht (+${diff}%)` : `Noch offen (${diff}%)`}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                        <span>Cutoff: {uni.cutoff}%</span>
                        <span>Dein Score: {accuracy}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            isPassing ? "bg-emerald-600" : "bg-slate-400"
                          }`}
                          style={{ width: `${pctOfCutoff}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── 3. BOTTOM ACTION BAR ─────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
        <button
          onClick={onOpenReview}
          className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-900 py-3.5 px-6 font-bold text-[13.5px] transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <span>📖</span>
          <span>Antworten analysieren (Review)</span>
        </button>

        <button
          onClick={onRepeat}
          className="w-full sm:w-auto rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white py-3.5 px-7 font-black text-[13.5px] shadow-sm transition-all flex items-center justify-center gap-2"
        >
          <span>↺</span>
          <span>Set wiederholen</span>
        </button>

        <button
          onClick={onBack}
          className="w-full sm:w-auto rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-600 hover:text-slate-900 py-3.5 px-6 font-semibold text-[13.5px] transition-all"
        >
          Zurück zur Kapitelübersicht
        </button>
      </div>

      {/* ─── 4. HIGH-LEVEL QUESTION INSPECTION MODAL (V10) ─────────────── */}
      {selectedQuestionIndex !== null && questionReviewItems[selectedQuestionIndex] && (() => {
        const item = questionReviewItems[selectedQuestionIndex];
        const q = item.question;
        const isRight = item.isCorrect;
        const isAnswered = item.selected !== undefined;
        const studentChoice = item.selected;
        const correctChoice = q.correct;
        const hasPrev = selectedQuestionIndex > 0;
        const hasNext = selectedQuestionIndex < questionReviewItems.length - 1;

        return (
          <div
            className="fixed inset-0 z-50 bg-slate-900/25 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all"
            onClick={() => setSelectedQuestionIndex(null)}
          >
            <div
              className="w-full max-w-3xl max-h-[86vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Fixed Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-100 shrink-0 bg-white">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-slate-900 text-[12px] font-mono font-black text-white">
                    #{selectedQuestionIndex + 1}
                  </span>
                  <span className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-slate-700">
                    {q.section || section || "BMS"}
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-0.5 text-[11.5px] font-semibold text-slate-600">
                    {q.topic || chapterTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                      isRight
                        ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                        : isAnswered
                          ? "border-red-300 bg-red-50 text-red-800"
                          : "border-slate-300 bg-slate-100 text-slate-700"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isRight ? "bg-emerald-600" : isAnswered ? "bg-red-600" : "bg-slate-400"
                      }`}
                    />
                    {isRight ? "✓ Richtig (+1 Pkt)" : isAnswered ? "✕ Falsch (0 Pkt)" : "— Unbeantwortet"}
                  </span>

                  <button
                    onClick={() => setSelectedQuestionIndex(null)}
                    aria-label="Modal schließen"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors text-sm font-black"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-5 space-y-4 sm:space-y-5">
                {/* TV Reading Passage */}
                {q.passage && (
                  <div className="rounded-2xl border border-sky-200/90 bg-sky-50/50 p-4 sm:p-5 space-y-2">
                    <p className="text-[10.5px] font-black uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                      <span>📖</span>
                      <span>TEXTAUSZUG (MEDAT LESEPASSAGE)</span>
                    </p>
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-800 font-serif whitespace-pre-line select-text border-t border-sky-100/80 pt-2">
                      {q.passage}
                    </p>
                  </div>
                )}

                {/* Question Text */}
                <div className="space-y-1">
                  <p className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">FRAGENSTELLUNG</p>
                  <p className="text-[15.5px] sm:text-[17px] font-semibold text-slate-900 leading-[1.75] whitespace-pre-line">
                    {q.question}
                  </p>
                </div>

                {/* Options Breakdown */}
                <div className="space-y-2.5">
                  <p className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">ANTWORT-OPTIONEN</p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {q.options.map((optText, optIdx) => {
                      const isOptionCorrect = correctChoice === optIdx;
                      const isOptionSelected = studentChoice === optIdx;

                      let rowCls = "border-slate-200 bg-slate-50/50 text-slate-600 opacity-75";
                      let labelCls = "border-slate-200 bg-slate-100 text-slate-500";
                      let badge = null;

                      if (isOptionCorrect) {
                        rowCls = "border-emerald-300 bg-emerald-50/70 text-emerald-950 opacity-100 ring-1 ring-emerald-200/80 font-semibold";
                        labelCls = "border-transparent bg-emerald-600 text-white";
                        badge = <span className="text-[11px] font-black text-emerald-700">✓ Richtige Lösung</span>;
                      } else if (isOptionSelected && !isOptionCorrect) {
                        rowCls = "border-red-300 bg-red-50/70 text-red-950 opacity-100 ring-1 ring-red-200/80 font-semibold";
                        labelCls = "border-transparent bg-red-600 text-white";
                        badge = <span className="text-[11px] font-black text-red-600">✕ Deine Auswahl</span>;
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`flex items-start justify-between gap-3.5 rounded-2xl border p-3.5 sm:p-4 transition-all ${rowCls}`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0 flex-1">
                            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border text-[12px] font-black ${labelCls}`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="text-[13.5px] sm:text-[14px] leading-relaxed">{optText}</span>
                          </div>
                          {badge}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Didactic Explanation */}
                {q.explanation && (
                  <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4.5 space-y-1.5">
                    <p className="text-[10.5px] font-black uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                      <span>💡</span>
                      <span>DIDAKTISCHE ERKLÄRUNG & MEDAT-PRÜFUNGSFALLE</span>
                    </p>
                    <p className="text-[13px] leading-relaxed text-slate-800 whitespace-pre-line font-medium">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Fixed Footer Navigation */}
              <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-100 shrink-0 bg-slate-50/80">
                <button
                  onClick={() => setSelectedQuestionIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
                  disabled={!hasPrev}
                  className={`flex items-center gap-1.5 rounded-xl border px-4 py-2 text-[12.5px] font-bold transition-all ${
                    !hasPrev
                      ? "border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-95 shadow-2xs"
                  }`}
                >
                  <span>← Vorherige</span>
                </button>

                <span className="font-mono text-[12px] font-bold text-slate-500">
                  {selectedQuestionIndex + 1} / {questionReviewItems.length}
                </span>

                <button
                  onClick={() =>
                    setSelectedQuestionIndex((prev) =>
                      prev !== null && prev < questionReviewItems.length - 1 ? prev + 1 : prev
                    )
                  }
                  disabled={!hasNext}
                  className={`flex items-center gap-1.5 rounded-xl border px-4 py-2 text-[12.5px] font-bold transition-all ${
                    !hasNext
                      ? "border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed"
                      : "border-slate-900 bg-slate-900 text-white hover:bg-slate-800 active:scale-95 shadow-2xs"
                  }`}
                >
                  <span>Nächste →</span>
                </button>
              </div>
            </div>
          </div>
        );
      })()}


    </div>
  );
}
