import React, { useState, useMemo, useEffect } from "react";
import type { GeneralprobeResult, GeneralprobeDataset } from "../../data/generalprobe/types";
import { usePractice } from "../../dashboard/practiceContext";
import {
  IconCheck,
  IconClose,
  IconClock,
  IconTarget,
  IconArrowRight,
  IconBrain,
  IconHeart,
  IconPuzzle,
  IconChart,
} from "../../lib/icons";
import { DIconDna, DIconBook, DIconRefresh } from "../../dashboard/icons";

export interface FullMockResultsViewProps {
  result: GeneralprobeResult;
  dataset: GeneralprobeDataset;
  onReturnToOverview: () => void;
  onRepeatOrRestart: () => void;
  onStartReview?: (subtestOrSectionFilter?: string) => void;
}

export const FullMockResultsView: React.FC<FullMockResultsViewProps> = ({
  result,
  dataset,
  onReturnToOverview,
  onRepeatOrRestart,
  onStartReview,
}) => {
  const { setIsResultPage } = usePractice();
  useEffect(() => {
    setIsResultPage(true);
    return () => {
      setIsResultPage(false);
    };
  }, [setIsResultPage]);

  const [activeTab, setActiveTab] = useState<"overview" | "subtests" | "analysis">("overview");

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
      return `${hours} Std. ${minutes} Min. ${seconds} Sek.`;
    }
    return `${minutes} Min. ${seconds} Sek.`;
  };

  const getScoreColor = (pct: number) => {
    if (pct >= 80) return "text-emerald-600";
    if (pct >= 65) return "text-blue-600";
    if (pct >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const getProgressBg = (pct: number) => {
    if (pct >= 80) return "bg-emerald-500";
    if (pct >= 65) return "bg-blue-500";
    if (pct >= 50) return "bg-amber-500";
    return "bg-red-500";
  };

  const totalRawCorrect = useMemo(() => {
    return (
      result.bms.rawCorrect +
      result.tv.rawCorrect +
      result.kff.rawCorrect +
      Math.round(result.sek.rawCorrect)
    );
  }, [result]);

  const totalErrors = 221 - totalRawCorrect;

  // Psychometric rank breakdown & sorting for analysis
  const sortedSubtests = useMemo(() => {
    return Object.values(result.subtests).sort((a, b) => b.percentage - a.percentage);
  }, [result.subtests]);

  const strongestSubtest = sortedSubtests[0];
  const weakestSubtest = sortedSubtests[sortedSubtests.length - 1];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-6 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-slate-500">
            <button
              onClick={onReturnToOverview}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Mock Exam Center
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold">{result.examTitle}</span>
            <span>/</span>
            <span className="text-slate-500">Auswertung</span>
          </div>

          <div className="flex items-center gap-2">
            {onStartReview && (
              <button
                type="button"
                onClick={() => onStartReview()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[12px] font-black shadow-2xs transition-colors cursor-pointer"
              >
                <span>Aufgabenanalyse (Review)</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="button"
              onClick={onReturnToOverview}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-[12px] font-bold shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              ← Zurück zur Übersicht
            </button>
          </div>
        </div>

        {/* Hero Score Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-50 border border-red-200/70 text-red-700 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <IconTarget className="w-3.5 h-3.5" />
                Offizielles Testtag-Ergebnis · {result.dateStr}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                GENERALPROBE ABGESCHLOSSEN
              </h1>
              <p className="text-[14px] sm:text-[15px] font-medium text-slate-600 max-w-2xl leading-relaxed">
                Gewichtetes Gesamtergebnis über alle 221 Aufgaben nach dem offiziellen 4-Säulen-Modell der österreichischen Medizin-Universitäten (BMS 40%, TV 10%, KFF 40%, SEK 10%).
              </p>

              {/* Review CTAs inside Hero */}
              {onStartReview && (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onStartReview()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-[13px] font-black shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Detaillierte Aufgabenanalyse (Alle 221 Aufgaben)</span>
                    <IconArrowRight className="w-4 h-4" />
                  </button>

                  {totalErrors > 0 && (
                    <button
                      type="button"
                      onClick={() => onStartReview("incorrect")}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-[12.5px] font-bold transition-all cursor-pointer"
                    >
                      <IconClose className="w-3.5 h-3.5 text-rose-600" />
                      <span>{totalErrors} Fehler gezielt analysieren</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Main Weighted Score Card */}
            <div className="rounded-3xl border-2 border-red-500/20 bg-gradient-to-br from-red-50/60 to-rose-50/40 p-6 sm:p-7 flex flex-col items-center justify-center shrink-0 min-w-[220px] text-center shadow-xs">
              <span className="text-[11px] font-black uppercase tracking-wider text-red-700">
                GESAMTLEISTUNG
              </span>
              <div className="flex items-baseline gap-1 my-1.5">
                <span className="font-mono text-4xl sm:text-5xl font-black text-slate-900">
                  {result.weightedScore.toFixed(1)}
                </span>
                <span className="font-mono text-lg font-bold text-slate-500">/ 100</span>
              </div>
              <span className="text-[12px] font-bold text-slate-600">
                Gewichteter Übungswert
              </span>
              <span className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                result.passed
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-slate-100 text-slate-700"
              }`}>
                {result.passed ? "Über Referenz-Benchmark (≥75)" : "Unter Referenz-Benchmark"}
              </span>
            </div>
          </div>

          {/* Quick Metrics Line */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-8 text-[12px] sm:text-[13px] text-slate-600 font-semibold">
            <div className="flex items-center gap-1.5">
              <IconClock className="w-4 h-4 text-slate-400" />
              <span>Gesamtdauer: </span>
              <span className="text-slate-900 font-bold">{formatTime(result.totalTimeSpentSeconds)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconCheck className="w-4 h-4 text-emerald-600" />
              <span>Aufgaben: </span>
              <span className="text-slate-900 font-bold">
                {totalRawCorrect} / 221 richtig ({totalErrors} Fehler)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconBrain className="w-4 h-4 text-violet-500" />
              <span>Gedächtnis: </span>
              <span className="text-slate-900 font-bold">8 Allergieausweise (Merkphase)</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[13px] font-black transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            <IconTarget className="w-4 h-4" />
            <span>4 Säulen Übersicht</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("subtests")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[13px] font-black transition-all cursor-pointer ${
              activeTab === "subtests"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            <IconPuzzle className="w-4 h-4" />
            <span>10 Subtests Detailanalyse</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("analysis")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[13px] font-black transition-all cursor-pointer ${
              activeTab === "analysis"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            <IconChart className="w-4 h-4" />
            <span>Stärken & Hebelpotenziale</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* 4 Official Sections Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* BMS Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4 flex flex-col justify-between hover:border-blue-300 transition-colors">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-wider border border-blue-200/60">
                      <DIconDna className="w-3 h-3" />
                      BMS · 40%
                    </span>
                    <span className="font-mono text-[13px] font-bold text-slate-500">
                      {result.bms.rawCorrect} / 94
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-[15px]">Basiskenntnisse</h3>
                  <p className="text-[12px] text-slate-500">Bio 40 · Chem 24 · Phys 18 · Math 12</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-2xl font-black ${getScoreColor(result.bms.percentage)}`}>
                      {result.bms.percentage.toFixed(1)}%
                    </span>
                    <span className="font-mono text-[12px] font-bold text-slate-600">
                      +{result.bms.weightedScore.toFixed(1)} Pkt.
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getProgressBg(result.bms.percentage)}`}
                      style={{ width: `${Math.min(100, result.bms.percentage)}%` }}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11.5px] border-t border-slate-100">
                    <span className="text-slate-400 font-medium">{94 - result.bms.rawCorrect} Fehler</span>
                    {onStartReview && (
                      <button
                        type="button"
                        onClick={() => onStartReview("BMS")}
                        className="font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                      >
                        BMS Review →
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* TV Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4 flex flex-col justify-between hover:border-emerald-300 transition-colors">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider border border-emerald-200/60">
                      <DIconBook className="w-3 h-3" />
                      TV · 10%
                    </span>
                    <span className="font-mono text-[13px] font-bold text-slate-500">
                      {result.tv.rawCorrect} / 12
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-[15px]">Textverständnis</h3>
                  <p className="text-[12px] text-slate-500">Medizinische Fachtexte</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-2xl font-black ${getScoreColor(result.tv.percentage)}`}>
                      {result.tv.percentage.toFixed(1)}%
                    </span>
                    <span className="font-mono text-[12px] font-bold text-slate-600">
                      +{result.tv.weightedScore.toFixed(1)} Pkt.
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getProgressBg(result.tv.percentage)}`}
                      style={{ width: `${Math.min(100, result.tv.percentage)}%` }}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11.5px] border-t border-slate-100">
                    <span className="text-slate-400 font-medium">{12 - result.tv.rawCorrect} Fehler</span>
                    {onStartReview && (
                      <button
                        type="button"
                        onClick={() => onStartReview("TV")}
                        className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
                      >
                        TV Review →
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* KFF Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4 flex flex-col justify-between hover:border-violet-300 transition-colors">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-violet-50 text-violet-700 text-[10px] font-black uppercase tracking-wider border border-violet-200/60">
                      <IconPuzzle className="w-3 h-3" />
                      KFF · 40%
                    </span>
                    <span className="font-mono text-[13px] font-bold text-slate-500">
                      {result.kff.rawCorrect} / 75
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-[15px]">Kognitive Fähigkeiten</h3>
                  <p className="text-[12px] text-slate-500">FZ, GM, ZF, WF & IE</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-2xl font-black ${getScoreColor(result.kff.percentage)}`}>
                      {result.kff.percentage.toFixed(1)}%
                    </span>
                    <span className="font-mono text-[12px] font-bold text-slate-600">
                      +{result.kff.weightedScore.toFixed(1)} Pkt.
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getProgressBg(result.kff.percentage)}`}
                      style={{ width: `${Math.min(100, result.kff.percentage)}%` }}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11.5px] border-t border-slate-100">
                    <span className="text-slate-400 font-medium">{75 - result.kff.rawCorrect} Fehler</span>
                    {onStartReview && (
                      <button
                        type="button"
                        onClick={() => onStartReview("KFF")}
                        className="font-bold text-violet-600 hover:text-violet-700 hover:underline cursor-pointer"
                      >
                        KFF Review →
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* SEK Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4 flex flex-col justify-between hover:border-rose-300 transition-colors">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-rose-50 text-rose-700 text-[10px] font-black uppercase tracking-wider border border-rose-200/60">
                      <IconHeart className="w-3 h-3" />
                      SEK · 10%
                    </span>
                    <span className="font-mono text-[13px] font-bold text-slate-500">
                      {result.sek.rawCorrect} / 40
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-[15px]">Soz.-Emotionale Komp.</h3>
                  <p className="text-[12px] text-slate-500">ER (12), EE (14) & SE (14)</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-2xl font-black ${getScoreColor(result.sek.percentage)}`}>
                      {result.sek.percentage.toFixed(1)}%
                    </span>
                    <span className="font-mono text-[12px] font-bold text-slate-600">
                      +{result.sek.weightedScore.toFixed(1)} Pkt.
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getProgressBg(result.sek.percentage)}`}
                      style={{ width: `${Math.min(100, result.sek.percentage)}%` }}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11.5px] border-t border-slate-100">
                    <span className="text-slate-400 font-medium">
                      {Math.max(0, 40 - Math.round(result.sek.rawCorrect))} Fehler
                    </span>
                    {onStartReview && (
                      <button
                        type="button"
                        onClick={() => onStartReview("SEK")}
                        className="font-bold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
                      >
                        SEK Review →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Official Weighting Formula Visualizer */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="text-[15px] font-bold text-slate-900">
                Offizielle MedAT-H Gewichtungsberechnung
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-bold text-slate-500 block">BMS (40%)</span>
                  <span className="font-mono text-lg font-black text-slate-900">
                    {result.bms.weightedScore.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-400 block">von 40.00 Pkt.</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-bold text-slate-500 block">TV (10%)</span>
                  <span className="font-mono text-lg font-black text-slate-900">
                    {result.tv.weightedScore.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-400 block">von 10.00 Pkt.</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-bold text-slate-500 block">KFF (40%)</span>
                  <span className="font-mono text-lg font-black text-slate-900">
                    {result.kff.weightedScore.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-400 block">von 40.00 Pkt.</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-bold text-slate-500 block">SEK (10%)</span>
                  <span className="font-mono text-lg font-black text-slate-900">
                    {result.sek.weightedScore.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-400 block">von 10.00 Pkt.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SUBTESTS (10 SUBTESTS) */}
        {activeTab === "subtests" && (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Detailanalyse aller 10 Subtests
                </h2>
                <p className="text-[13px] text-slate-500 mt-0.5">
                  Exakte Rohpunkte, Fehler und Quoten. Klicken Sie auf einen Subtest, um direkt die Aufgaben zu prüfen.
                </p>
              </div>
              <span className="rounded-xl bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">
                10 Subtests
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.values(result.subtests).map((sub) => {
                const subErrors = sub.maxScore - sub.rawCorrect;
                return (
                  <div
                    key={sub.id}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 text-[14.5px] truncate">{sub.name}</h4>
                        <p className="text-[11.5px] text-slate-500">
                          {sub.detail || `${sub.maxScore} Aufgaben im Testlauf`}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span
                          className={`font-mono text-lg font-black block ${getScoreColor(
                            sub.percentage
                          )}`}
                        >
                          {sub.percentage}%
                        </span>
                        <span className="font-mono text-[11.5px] font-bold text-slate-500">
                          {sub.rawCorrect} / {sub.maxScore}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${getProgressBg(sub.percentage)}`}
                          style={{ width: `${Math.min(100, sub.percentage)}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11.5px] pt-1">
                        <span className={`font-semibold ${subErrors > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                          {subErrors > 0 ? `${subErrors} Fehler` : "✓ Fehlerfrei"}
                        </span>

                        {onStartReview && (
                          <button
                            type="button"
                            onClick={() => onStartReview(sub.name)}
                            className="font-bold text-slate-700 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            Aufgaben ansehen →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: PSYCHOMETRIC ANALYSIS */}
        {activeTab === "analysis" && (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                Stärken & Hebelpotenziale
              </h2>
              <p className="text-[13px] text-slate-500 mt-0.5">
                Didaktische Analyse basierend auf Ihren realen Testergebnissen und dem MedAT-Gewichtungsmodell.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Strength Card */}
              {strongestSubtest && (
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                      Top-Stärke
                    </span>
                    <span className="font-mono text-emerald-700 font-black text-[14px]">
                      {strongestSubtest.percentage}%
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px]">{strongestSubtest.name}</h4>
                  <p className="text-[12.5px] text-slate-600 leading-relaxed">
                    Hervorragende Leistung mit {strongestSubtest.rawCorrect} von {strongestSubtest.maxScore} Punkten.
                    Dieses Niveau am Testtag stabil halten, um wertvolle Zeitpuffer zu sichern.
                  </p>
                </div>
              )}

              {/* Weakness Card */}
              {weakestSubtest && (
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase">
                      Größter Hebel
                    </span>
                    <span className="font-mono text-rose-700 font-black text-[14px]">
                      {weakestSubtest.percentage}%
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px]">{weakestSubtest.name}</h4>
                  <p className="text-[12.5px] text-slate-600 leading-relaxed">
                    Hier liegen {weakestSubtest.maxScore - weakestSubtest.rawCorrect} ungenutzte Punkte.
                    Gezieltes Training in diesem Subtest bringt die schnellste Verbesserung im Gesamtranking.
                  </p>
                </div>
              )}
            </div>

            {/* Strategic Advice */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-[13px] text-slate-700 space-y-2">
              <p className="font-bold text-slate-900">
                🎯 Strategische Gewichtungs-Empfehlung für den MedAT:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>
                  <strong>BMS (40%) und KFF (40%)</strong> machen zusammen <strong>80% des gesamten MedAT</strong> aus.
                  Investieren Sie 80% Ihrer Vorbereitungszeit in diese beiden Säulen.
                </li>
                <li>
                  <strong>Textverständnis (10%)</strong> erfordert hohes Lesetempo unter Zeitdruck (35 Min für 12 Aufgaben).
                </li>
                <li>
                  <strong>Emotionen erkennen (EE):</strong> Beachten Sie die strikte 5/5-Alles-oder-Nichts-Regel. Alle 5 Urteile müssen stimmen für 1 Punkt.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Factual Disclaimer Card (No Fake Rank) */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 text-slate-600 text-[12px] sm:text-[13px] space-y-1">
          <p className="font-bold text-slate-800">
            ℹ️ Hinweis zur Interpretation des Ergebnisses
          </p>
          <p>
            Dieser gewichtete Übungswert spiegelt Ihre reale Testleistung auf dem Niveau der offiziellen MedAT-H Aufgabenstellung wider.
            Auf unzuverlässige automatische Rangplatz- oder Zulassungsprognosen wird bewusst verzichtet, da die tatsächliche Notengrenze jährlich je nach Kohorte und Studienort variiert.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={onReturnToOverview}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-slate-300 text-slate-700 text-[13px] font-bold hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Zurück zur Übersicht
          </button>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            {onStartReview && (
              <button
                type="button"
                onClick={() => onStartReview()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold transition-all cursor-pointer"
              >
                <span>Aufgabenanalyse →</span>
              </button>
            )}

            <button
              type="button"
              onClick={onRepeatOrRestart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-[13px] font-black shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <DIconRefresh className="w-4 h-4" />
              <span>Generalprobe wiederholen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
