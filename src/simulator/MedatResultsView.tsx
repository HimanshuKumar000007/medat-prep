import React, { useMemo, useState, useEffect } from "react";
import type { ExamType } from "../content/medat/config";
import { usePractice } from "../dashboard/practiceContext";

export interface SectionStatItem {
  name: string;
  total: number;
  correct: number;
  percentage: number;
  weight?: string;
}

export interface SimulatorResultStats {
  total: number;
  correct: number;
  incorrect: number;
  answered: number;
  accuracy: number;
  elapsedSeconds: number;
  topicStats: Record<string, { total: number; correct: number }>;
  sectionStats?: Record<string, SectionStatItem>;
  examType?: ExamType;
}

interface MedatResultsViewProps {
  title: string;
  subtitle?: string;
  stats: SimulatorResultStats;
  onOpenReview: () => void;
  onReturnToOverview: () => void;
  onRepeatOrNext?: () => void;
  repeatButtonText?: string;
}

export function MedatResultsView({
  title,
  subtitle,
  stats,
  onOpenReview,
  onReturnToOverview,
  onRepeatOrNext,
  repeatButtonText = "Test wiederholen",
}: MedatResultsViewProps) {
  const { total, correct, incorrect, answered, accuracy, elapsedSeconds, topicStats, sectionStats, examType = "MEDAT-H" } = stats;

  const { setIsResultPage } = usePractice();
  useEffect(() => {
    setIsResultPage(true);
    return () => {
      setIsResultPage(false);
    };
  }, [setIsResultPage]);

  const [activeTab, setActiveTab] = useState<"overview" | "performance" | "pace" | "progress">("overview");

  // Format Elapsed Time
  const hours = Math.floor(elapsedSeconds / 3600);
  const mins = Math.floor((elapsedSeconds % 3600) / 60);
  const secs = elapsedSeconds % 60;
  const timeFormatted = `${hours > 0 ? `${hours}h ` : ""}${mins}m ${String(secs).padStart(2, "0")}s`;

  // Speed metric
  const avgSecsPerQuestion = useMemo(() => {
    if (answered === 0) return 0;
    return Math.round(elapsedSeconds / answered);
  }, [elapsedSeconds, answered]);

  // Coverage metric
  const coveragePercent = useMemo(() => {
    if (total === 0) return 0;
    return Math.round((answered / total) * 100);
  }, [answered, total]);

  const skippedCount = Math.max(0, total - answered);

  // Formatted date
  const formattedDate = useMemo(() => {
    const d = new Date();
    return d.toLocaleDateString("de-AT", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  // Performance Tier Evaluation
  const evaluationTier = useMemo(() => {
    if (accuracy >= 85) {
      return {
        title: "Hervorragende Meisterschaft",
        subtitle: "Dein Ergebnis liegt im obersten Perzentil für einen gesicherten MedAT-Studienplatz.",
        readinessTitle: "TOP-KANDIDAT PRÜFUNGSREIFE",
        evidence: "HOCH",
        confidence: "HOCH",
        readinessScore: 94,
        milestone: "Aktives Tempo bei vollständigen Prüfungssimulationen beibehalten.",
      };
    }
    if (accuracy >= 75) {
      return {
        title: "Wettbewerbsfähige Prüfungsreife",
        subtitle: "Dein Ergebnis erfüllt die historische Aufnahmeschwelle für die österreichischen Medizin-Universitäten.",
        readinessTitle: "ZULASSUNGSREIFE ERREICHT",
        evidence: "MODERAT",
        confidence: "HOCH",
        readinessScore: 82,
        milestone: "Gezielte Schwachstellen wiederholen, um den Rang weiter abzusichern.",
      };
    }
    if (accuracy >= 60) {
      return {
        title: "Solide Ausgangsbasis",
        subtitle: "Gutes Grundverständnis in den Kernkonzepten mit gezieltem Optimierungspotenzial.",
        readinessTitle: "FUNDAMENT IM AUFBAU",
        evidence: "MODERAT",
        confidence: "MODERAT",
        readinessScore: 65,
        milestone: "Fokus auf fehlerhafte Themen legen, um die 75%+ Aufnahmegrenze zu knacken.",
      };
    }
    return {
      title: "Basis-Evaluation",
      subtitle: "Deine Antworten wurden detailliert nach dem offiziellen MedAT-Lehrplan analysiert.",
      readinessTitle: "GRUNDLAGEN-ENTWICKLUNG",
      evidence: "BASIS",
      confidence: "MODERAT",
      readinessScore: Math.max(25, accuracy),
      milestone: "Nächstes Übungs-Set starten zur Festigung der Trefferquote.",
    };
  }, [accuracy]);

  // Topics analysis
  const topicsList = useMemo(() => {
    return Object.entries(topicStats)
      .map(([topicName, data]) => {
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        return {
          name: topicName,
          total: data.total,
          correct: data.correct,
          accuracy: pct,
        };
      })
      .sort((a, b) => b.accuracy - a.accuracy);
  }, [topicStats]);

  const strongTopics = useMemo(() => topicsList.filter((t) => t.accuracy >= 75), [topicsList]);
  const weakTopics = useMemo(() => topicsList.filter((t) => t.accuracy < 70), [topicsList]);

  // Austrian Medical University Reference Cutoffs
  const uniComparisons = [
    { name: "MedUni Wien", city: "Wien", cutoff: 77, label: "~76–78 % Cutoff", seats: 660 },
    { name: "MedUni Innsbruck", city: "Innsbruck", cutoff: 75, label: "~74–76 % Cutoff", seats: 370 },
    { name: "MedUni Graz", city: "Graz", cutoff: 74, label: "~73–75 % Cutoff", seats: 335 },
    { name: "JKU Linz", city: "Linz", cutoff: 73, label: "~72–74 % Cutoff", seats: 310 },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-28 pt-4 px-4 sm:px-6 lg:px-8 animate-screen-in select-none antialiased text-slate-900 font-sans">
      
      {/* ─── 0. TOP NAVIGATION ROW ────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onReturnToOverview}
          className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Zurück zur Übersicht</span>
        </button>

        <span className="text-[11.5px] font-mono font-bold text-slate-400">
          {title} · Auswertung
        </span>
      </div>

      {/* =================================================================
         1. TOP HERO HEADER CARD (App UI/UX Design System)
         ================================================================= */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-800 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>ABGABE ERFOLGREICH</span>
              </span>
              <span className="text-[12px] text-slate-400 font-medium">
                Abgeschlossen am {formattedDate}
              </span>
            </div>

            {/* Attempted pill */}
            <div>
              <span className="inline-block rounded-full bg-sky-50 border border-sky-200/70 text-sky-800 px-3 py-0.5 text-[11px] font-bold font-mono shadow-2xs">
                {answered} von {total} bearbeitet
              </span>
            </div>

            {/* Test Title */}
            <h1 className="text-[26px] sm:text-[32px] font-black tracking-tight text-slate-900 leading-tight">
              {title}
            </h1>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed font-medium">
              Ergebnis: <strong className="text-slate-900 font-bold">{correct} / {total} Punkte</strong> ({accuracy}% Trefferquote) bei {answered} bearbeiteten Fragen.
            </p>
          </div>

          {/* 3 Top-Right KPI Cards */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto justify-between lg:justify-end">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-center min-w-[85px] sm:min-w-[95px] shadow-2xs">
              <p className="font-mono text-[19px] sm:text-[21px] font-black text-slate-900">{correct} / {total}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-0.5">PUNKTE</p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-center min-w-[85px] sm:min-w-[95px] shadow-2xs">
              <p className="font-mono text-[19px] sm:text-[21px] font-black text-slate-900">{accuracy.toFixed(1)}%</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-0.5">QUOTE</p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-center min-w-[85px] sm:min-w-[95px] shadow-2xs">
              <p className="font-mono text-[19px] sm:text-[21px] font-black text-slate-900">{coveragePercent.toFixed(1)}%</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-0.5">ABDECKUNG</p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================
         2. TAB NAVIGATION (App UI/UX Design System)
         ================================================================= */}
      <div className="flex items-center gap-6 sm:gap-8 border-b border-slate-200 px-2 overflow-x-auto">
        {[
          { id: "overview", label: "ÜBERSICHT" },
          { id: "performance", label: "LEISTUNG & THEMEN" },
          { id: "pace", label: "ZEIT-ANALYSE" },
          { id: "solutions", label: "ANTWORT-REVIEW", action: onOpenReview },
          { id: "progress", label: "ZULASSUNGSPROGNOSE" },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.action) {
                  tab.action();
                } else {
                  setActiveTab(tab.id as any);
                }
              }}
              className={`pb-3 text-[12.5px] sm:text-[13px] font-black uppercase tracking-wider transition-all relative shrink-0 ${
                isActive
                  ? "text-slate-900 font-black"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* =================================================================
         TAB CONTENT: ÜBERSICHT (OVERVIEW)
         ================================================================= */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Row 1: 2-Column Performance Evaluation & Next Recommended Action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Card: Leistungs-Evaluation */}
            <div className="lg:col-span-7 rounded-3xl border border-amber-200/80 bg-amber-50/35 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <p className="text-[10.5px] font-black uppercase tracking-wider text-amber-800">
                  LEISTUNGS-EVALUATION
                </p>
                <h2 className="text-[23px] sm:text-[26px] font-black text-amber-950 tracking-tight">
                  {evaluationTier.title}
                </h2>
                <p className="text-[13.5px] text-amber-900/90 leading-relaxed font-medium">
                  {evaluationTier.subtitle}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                  EVIDENZ-QUALITÄT
                </span>
                <span className="rounded-md bg-amber-100 text-amber-900 border border-amber-300/80 px-2 py-0.5 text-[9.5px] font-black uppercase tracking-wider">
                  {evaluationTier.evidence}
                </span>
              </div>
            </div>

            {/* Right Card: Nächste Empfohlene Aktion */}
            <div className="lg:col-span-5 rounded-3xl border border-slate-900 bg-slate-900 text-white p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-red-400 text-[11px] font-black uppercase tracking-wider">
                  <span>⚡</span>
                  <span>NÄCHSTER SCHRITT</span>
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-black text-white tracking-tight">
                  Fehlerhafte Fragen analysieren
                </h3>
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  Prüfe die detaillierten Schritt-für-Schritt Erklärungen zur Festigung deiner Schwachstellen.
                </p>
              </div>

              <button
                onClick={onOpenReview}
                className="w-full rounded-2xl bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white py-3.5 px-5 font-black text-[13.5px] shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Lösungen & Review öffnen</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Row 2: MedAT Exam Readiness Diagnostic Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-red-600 text-[11px] font-black uppercase tracking-wider">
                  <span>🇦🇹</span>
                  <span>{examType} PRÜFUNGSREIFE</span>
                </div>
                <h2 className="text-[22px] sm:text-[25px] font-black text-slate-900 tracking-tight">
                  {evaluationTier.readinessTitle}
                </h2>
                <p className="text-[13px] text-slate-500 font-medium">
                  Evaluierung abgeschlossen mit {accuracy}% Trefferquote bei {answered} bearbeiteten Fragen.
                </p>
              </div>

              {/* Readiness Score Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex flex-col items-center justify-center h-16 w-16 rounded-2xl border border-slate-200 bg-slate-50 shadow-2xs">
                  <span className="font-mono text-[22px] font-black text-slate-900">{evaluationTier.readinessScore}</span>
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400">SCORE</span>
                </div>
                <div className="text-[11px] space-y-0.5">
                  <p className="font-bold text-slate-500">
                    ZUVERLÄSSIGKEIT:{" "}
                    <span className="text-slate-900 font-black">{evaluationTier.confidence}</span>
                  </p>
                  <p className="text-[10px] text-slate-400">Basierend auf {answered} bearbeiteten Fragen.</p>
                </div>
              </div>
            </div>

            {/* Readiness Factors Evaluation: 3 Cards */}
            <div className="space-y-2">
              <p className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">
                FAKTOREN-BEWERTUNG
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                {/* Score */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">PUNKTE</span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                        accuracy >= 75
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {accuracy >= 75 ? "STARK" : "IM AUFBAU"}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 font-medium">
                    Aktuell <strong className="text-slate-900 font-bold">{correct} Punkte</strong> erreicht.
                  </p>
                </div>

                {/* Accuracy */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">GENAUIGKEIT</span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                        accuracy >= 75
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {accuracy >= 75 ? "STARK" : "IM AUFBAU"}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 font-medium">
                    <strong className="text-slate-900 font-bold">{accuracy}%</strong> Trefferquote.
                  </p>
                </div>

                {/* Pace */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">TEMPO</span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                        avgSecsPerQuestion <= 60
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {avgSecsPerQuestion <= 60 ? "STARK" : "AUSBAUFÄHIG"}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 font-medium">
                    Ø <strong className="text-slate-900 font-bold">{avgSecsPerQuestion}s</strong> pro Frage.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Next Milestone Banner */}
            <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-4 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-[10px] font-black uppercase tracking-wider text-sky-800">NÄCHSTER ZIEL-MEILENSTEIN</p>
                <p className="text-[13px] text-sky-950 font-medium">{evaluationTier.milestone}</p>
              </div>
              <span className="rounded-lg bg-sky-100 border border-sky-200 text-sky-800 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shrink-0">
                AKTIVES ZIEL
              </span>
            </div>
          </div>

          {/* Row 3: Info Banner */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 flex items-center gap-3 text-[13px] text-slate-700">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-800 font-bold text-xs">
              ℹ
            </span>
            <span>
              <strong className="text-slate-900">{correct} Punkte</strong> erreicht mit <strong className="text-slate-900">{accuracy}%</strong> Gesamtergebnis.
            </span>
          </div>

          {/* Row 4: Score & Attempt Distribution Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[12px] font-black uppercase tracking-wider text-slate-400">
                SCORE & ANTWORT-VERTEILUNG
              </h3>
              <span className="text-[11.5px] text-slate-400 font-mono">
                {total} Fragen Gesamt
              </span>
            </div>

            {/* Multi-segmented Distribution Bar */}
            <div className="h-3.5 w-full bg-slate-100 rounded-full overflow-hidden flex p-0.5 gap-0.5">
              {correct > 0 && (
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                  style={{ width: `${(correct / total) * 100}%` }}
                  title={`${correct} Richtig`}
                />
              )}
              {incorrect > 0 && (
                <div
                  className="h-full bg-red-500 rounded-full transition-all duration-700"
                  style={{ width: `${(incorrect / total) * 100}%` }}
                  title={`${incorrect} Falsch`}
                />
              )}
              {skippedCount > 0 && (
                <div
                  className="h-full bg-slate-300 rounded-full transition-all duration-700"
                  style={{ width: `${(skippedCount / total) * 100}%` }}
                  title={`${skippedCount} Offen`}
                />
              )}
            </div>

            {/* 3 Counter Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1">
              <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-4 text-center">
                <p className="font-mono text-[24px] sm:text-[28px] font-black text-emerald-700">{correct}</p>
                <p className="text-[10.5px] font-black uppercase tracking-wider text-emerald-800 mt-1">RICHTIG</p>
              </div>

              <div className="rounded-2xl border border-red-200/80 bg-red-50/40 p-4 text-center">
                <p className="font-mono text-[24px] sm:text-[28px] font-black text-red-600">{incorrect}</p>
                <p className="text-[10.5px] font-black uppercase tracking-wider text-red-700 mt-1">FALSCH</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-center">
                <p className="font-mono text-[24px] sm:text-[28px] font-black text-slate-600">{skippedCount}</p>
                <p className="text-[10.5px] font-black uppercase tracking-wider text-slate-500 mt-1">OFFEN</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
         TAB CONTENT: LEISTUNG & THEMEN (PERFORMANCE)
         ================================================================= */}
      {activeTab === "performance" && (
        <div className="space-y-6">
          {/* Section-level breakdown */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <h3 className="text-[15px] font-black text-slate-900 uppercase tracking-wider">
              Fachbereichs-Auswertung ({examType})
            </h3>
            <div className="space-y-4">
              {sectionStats && Object.keys(sectionStats).length > 0 ? (
                Object.entries(sectionStats).map(([key, sec]) => (
                  <div key={key} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4.5 space-y-2">
                    <div className="flex items-center justify-between text-[13.5px]">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{sec.name}</span>
                        {sec.weight && (
                          <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                            {sec.weight}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[13px] font-black text-slate-900">
                        {sec.correct}/{sec.total} ({sec.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          sec.percentage >= 75 ? "bg-emerald-600" : sec.percentage >= 60 ? "bg-sky-600" : "bg-red-500"
                        }`}
                        style={{ width: `${sec.percentage}%` }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                topicsList.map((topic) => (
                  <div key={topic.name} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 space-y-2">
                    <div className="flex items-center justify-between text-[13.5px]">
                      <span className="font-bold text-slate-900">{topic.name}</span>
                      <span className="font-mono text-[13px] font-black text-slate-900">
                        {topic.correct} / {topic.total} ({topic.accuracy}%)
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          topic.accuracy >= 75 ? "bg-emerald-600" : topic.accuracy >= 60 ? "bg-sky-600" : "bg-red-500"
                        }`}
                        style={{ width: `${topic.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Strengths & Weaknesses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Strengths */}
            <div className="rounded-3xl border border-emerald-200/80 bg-white p-6 space-y-4 shadow-sm">
              <h4 className="text-[13px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                <span>✓</span>
                <span>Stärken ({strongTopics.length})</span>
              </h4>
              {strongTopics.length > 0 ? (
                <div className="space-y-2.5">
                  {strongTopics.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center justify-between p-3 rounded-xl border border-emerald-100 bg-emerald-50/40 text-[13px]"
                    >
                      <span className="font-semibold text-slate-800 truncate pr-2">{t.name}</span>
                      <span className="font-mono text-[12px] font-bold text-emerald-800 shrink-0">
                        {t.accuracy}%
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[12.5px] text-slate-400">Noch keine Teilbereiche mit ≥ 75% Trefferquote.</p>
              )}
            </div>

            {/* Weaknesses */}
            <div className="rounded-3xl border border-amber-200/80 bg-white p-6 space-y-4 shadow-sm">
              <h4 className="text-[13px] font-black uppercase tracking-wider text-amber-800 flex items-center gap-2">
                <span>⚠️</span>
                <span>Wiederholungsbedarf ({weakTopics.length})</span>
              </h4>
              {weakTopics.length > 0 ? (
                <div className="space-y-2.5">
                  {weakTopics.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center justify-between p-3 rounded-xl border border-amber-100 bg-amber-50/40 text-[13px]"
                    >
                      <span className="font-semibold text-slate-800 truncate pr-2">{t.name}</span>
                      <span className="font-mono text-[12px] font-bold text-amber-800 shrink-0">
                        {t.accuracy}%
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[12.5px] text-emerald-700 font-bold">Keine kritischen Schwachstellen identifiziert!</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
         TAB CONTENT: ZEIT-ANALYSE (PACE)
         ================================================================= */}
      {activeTab === "pace" && (
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-1 border-b border-slate-100 pb-4">
            <h3 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">
              Geschwindigkeit & Zeitaufwand
            </h3>
            <p className="text-[12.5px] text-slate-500">
              Analyse deines Bearbeitungstempos im Vergleich zu den offiziellen MedAT-Empfehlungen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Gesamtdauer</p>
              <p className="font-mono text-[24px] font-black text-slate-900 mt-1">{timeFormatted}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Ø Zeit / Frage</p>
              <p className="font-mono text-[24px] font-black text-slate-900 mt-1">{avgSecsPerQuestion}s</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">MedAT Richtwert</p>
              <p className="font-mono text-[24px] font-black text-emerald-700 mt-1">60s</p>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
         TAB CONTENT: ZULASSUNGSPROGNOSE (PROGRESS)
         ================================================================= */}
      {activeTab === "progress" && (
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-5">
          <div className="space-y-1 border-b border-slate-100 pb-4">
            <h3 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">
              Universitäts-Zulassungsprognose (Österreich)
            </h3>
            <p className="text-[12.5px] text-slate-500">
              Vergleich deines Testergebnisses mit den historischen Aufnahmegrenzen (MedUni Wien, Innsbruck, Graz, Linz).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {uniComparisons.map((uni) => {
              const isPassing = accuracy >= uni.cutoff;
              const diff = accuracy - uni.cutoff;

              return (
                <div
                  key={uni.name}
                  className={`rounded-2xl border p-4.5 space-y-3 ${
                    isPassing
                      ? "border-emerald-200 bg-emerald-50/30"
                      : "border-slate-200 bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-black text-[15px] text-slate-900">{uni.name}</h4>
                      <p className="text-[12px] text-slate-500">{uni.seats} Studienplätze · {uni.city}</p>
                    </div>
                    <span
                      className={`rounded-lg px-2.5 py-1 text-[10.5px] font-black ${
                        isPassing
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {isPassing ? `✓ Erreicht (+${diff}%)` : `Noch offen (${diff}%)`}
                    </span>
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                      <span>Cutoff: {uni.cutoff}%</span>
                      <span>Dein Score: {accuracy}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isPassing ? "bg-emerald-600" : "bg-slate-500"
                        }`}
                        style={{ width: `${Math.min(100, Math.max(5, (accuracy / uni.cutoff) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================================================================
         3. BOTTOM ACTION BAR (Matching App UI/UX Design System)
         ================================================================= */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
        <button
          onClick={onOpenReview}
          className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-900 py-3.5 px-6 font-bold text-[13.5px] transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <span>📖</span>
          <span>Antworten analysieren (Review)</span>
        </button>

        {onRepeatOrNext && (
          <button
            onClick={onRepeatOrNext}
            className="w-full sm:w-auto rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white py-3.5 px-7 font-black text-[13.5px] shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>↺</span>
            <span>{repeatButtonText}</span>
          </button>
        )}

        <button
          onClick={onReturnToOverview}
          className="w-full sm:w-auto rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-600 hover:text-slate-900 py-3.5 px-6 font-semibold text-[13.5px] transition-all"
        >
          Zurück zur Übersicht
        </button>
      </div>
    </div>
  );
}
