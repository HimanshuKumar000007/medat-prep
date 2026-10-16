import React, { useMemo, useEffect } from "react";
import { IconArrowRight, IconCheck, IconClock, IconBrain, IconRefresh, IconClose } from "../../lib/icons";
import type { QuestionReviewItem } from "../PracticeResultView";
import { usePractice } from "../../dashboard/practiceContext";

export interface GmResultViewProps {
  simulationNumber: number;
  simTitle?: string;
  correctCount: number;
  totalCount: number;
  accuracyPct: number;
  elapsedSeconds: number;
  merkphaseSeconds?: number;
  questionReviewItems?: QuestionReviewItem[];
  onOpenReview: () => void;
  onRepeat: () => void;
  onBack: () => void;
  onNextSim?: () => void;
}

const CATEGORY_NAMES: Record<string, string> = {
  name: "Name / Identität",
  birthDate: "Geburtsdatum",
  medication: "Medikamenten-Status",
  bloodGroup: "Blutgruppe (AB0 / Rhesus)",
  allergies: "Allergien & Unverträglichkeiten",
  idNumber: "5-stellige Ausweisnummer",
  country: "Herkunftsland",
  cross_card: "Kreuzabfrage / Relationen",
};

export const GmResultView: React.FC<GmResultViewProps> = ({
  simulationNumber,
  simTitle = "Gedächtnis & Merkfähigkeit",
  correctCount,
  totalCount,
  accuracyPct,
  elapsedSeconds,
  merkphaseSeconds = 8 * 60,
  questionReviewItems = [],
  onOpenReview,
  onRepeat,
  onBack,
  onNextSim,
}) => {
  const { setIsResultPage } = usePractice();
  useEffect(() => {
    setIsResultPage(true);
    return () => {
      setIsResultPage(false);
    };
  }, [setIsResultPage]);

  const isPassed = accuracyPct >= 75; // MedAT Cutoff
  const mins = Math.floor(elapsedSeconds / 60);
  const secs = elapsedSeconds % 60;
  const timeFormatted = `${mins}m ${String(secs).padStart(2, "0")}s`;
  const avgSeconds = totalCount > 0 ? Math.round(elapsedSeconds / totalCount) : 0;

  // Breakdown by the 8 memory categories
  const categoryStats = useMemo(() => {
    const stats: Record<string, { total: number; correct: number }> = {};

    questionReviewItems.forEach((item) => {
      const q = item.question as any;
      const cat = q.gmData?.testedCategory || "cross_card";
      if (!stats[cat]) {
        stats[cat] = { total: 0, correct: 0 };
      }
      stats[cat].total++;
      if (item.isCorrect) {
        stats[cat].correct++;
      }
    });

    return stats;
  }, [questionReviewItems]);

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen overflow-y-auto bg-[#0F172A] text-slate-100 flex flex-col font-sans select-none p-3 sm:p-6 lg:p-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="max-w-4xl w-full mx-auto space-y-4 sm:space-y-8 py-2 sm:py-6">
        {/* Top bar with back button */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-purple-950/80 text-purple-300 border border-purple-500/40 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-sm shrink-0">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              ERGEBNIS
            </span>
            <span className="text-[11px] sm:text-[12px] font-mono text-slate-400 font-bold truncate">
              Simulation {simulationNumber}
            </span>
          </div>

          <button
            onClick={onBack}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-300 hover:text-white text-[11px] sm:text-[12px] font-bold transition-all shrink-0"
          >
            Zurück zur Übersicht
          </button>
        </div>

        {/* Hero Score Card */}
        <div className="bg-[#1E293B] border border-slate-700/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1 sm:space-y-2">
              <span className="font-mono text-[11px] sm:text-[12px] font-bold text-purple-400 uppercase tracking-wider">
                KFF · Gedächtnis & Merkfähigkeit
              </span>
              <h1 className="text-[22px] sm:text-[34px] font-black text-white tracking-tight leading-tight">
                Gedächtnis & Merkfähigkeit — Simulation {simulationNumber}
              </h1>
              <p className="text-[12.5px] sm:text-[14px] text-slate-400 font-medium">
                {simTitle} · 8 Allergieausweise · 25 Abfragefragen
              </p>
            </div>

            {/* Score Big Display */}
            <div className="flex items-center justify-between sm:justify-start gap-3 shrink-0 bg-slate-900/80 border border-slate-700/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-right">
              <div>
                <span className="font-mono text-[36px] sm:text-[52px] font-black text-white leading-none">
                  {correctCount}
                </span>
                <span className="font-mono text-[18px] sm:text-[22px] font-bold text-slate-500"> / {totalCount}</span>
                <p className="text-[10.5px] sm:text-[12px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Richtig gelöst
                </p>
              </div>
              <div className="border-l border-slate-700 pl-3 sm:pl-4 text-left">
                <span className={`font-mono text-[32px] sm:text-[46px] font-black leading-none ${
                  isPassed ? "text-emerald-400" : "text-amber-400"
                }`}>
                  {accuracyPct}%
                </span>
                <span className={`block text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-wider mt-1 px-1.5 sm:px-2 py-0.5 rounded-md ${
                  isPassed ? "bg-emerald-950 text-emerald-300 border border-emerald-700/50" : "bg-amber-950 text-amber-300 border border-amber-700/50"
                }`}>
                  {isPassed ? "✓ Zulassungsreif" : "Im Aufbau (≥75%)"}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Core Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-700/70">
            <div className="rounded-xl sm:rounded-2xl border border-slate-700/80 bg-slate-800/60 p-2.5 sm:p-3.5 space-y-0.5 sm:space-y-1">
              <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                1. Merkphase
              </span>
              <p className="font-mono text-[14px] sm:text-[16px] font-black text-purple-300">
                {Math.floor(merkphaseSeconds / 60)}:{String(merkphaseSeconds % 60).padStart(2, "0")} Min
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-400">8 Ausweise verankert</p>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-slate-700/80 bg-slate-800/60 p-2.5 sm:p-3.5 space-y-0.5 sm:space-y-1">
              <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                2. Abfragezeit
              </span>
              <p className="font-mono text-[14px] sm:text-[16px] font-black text-white">{timeFormatted}</p>
              <p className="text-[10px] sm:text-[11px] text-slate-400">15:00 Prüfungszeit</p>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-slate-700/80 bg-slate-800/60 p-2.5 sm:p-3.5 space-y-0.5 sm:space-y-1">
              <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                3. Ø Zeit / Frage
              </span>
              <p className={`font-mono text-[14px] sm:text-[16px] font-black ${
                avgSeconds <= 36 ? "text-emerald-400" : "text-amber-400"
              }`}>
                {avgSeconds}s
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-400">Ziel: ≤ 36s</p>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-slate-700/80 bg-slate-800/60 p-2.5 sm:p-3.5 space-y-0.5 sm:space-y-1">
              <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                4. MedAT-Status
              </span>
              <p className={`font-mono text-[14px] sm:text-[16px] font-black ${
                isPassed ? "text-emerald-400" : "text-amber-400"
              }`}>
                {isPassed ? "Bestanden" : "Wiederholen"}
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-400">Cutoff: 75%</p>
            </div>
          </div>
        </div>

        {/* Category-Level Memory Performance (Section 20 of prompt) */}
        <div className="bg-[#1E293B] border border-slate-700/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl space-y-4 sm:space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[17px] sm:text-[20px] font-black text-white tracking-tight">
                Detail-Performance nach Merkmalskategorie
              </h2>
              <p className="text-[12px] sm:text-[13px] text-slate-400 font-medium">
                Präziser Abruf aller 8 Informationseinheiten der Allergieausweise
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {Object.entries(categoryStats).map(([catKey, stat]) => {
              const catName = CATEGORY_NAMES[catKey] || catKey;
              const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
              const isGood = pct >= 75;

              return (
                <div
                  key={catKey}
                  className="rounded-xl sm:rounded-2xl border border-slate-700/80 bg-slate-800/50 p-3 sm:p-4 space-y-1.5 sm:space-y-2"
                >
                  <div className="flex items-center justify-between text-[12.5px] sm:text-[13px]">
                    <span className="font-bold text-slate-200">{catName}</span>
                    <span className="font-mono font-bold text-slate-400">
                      {stat.correct} / {stat.total}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          isGood ? "bg-emerald-500" : "bg-purple-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className={`font-mono text-[11.5px] sm:text-[12px] font-black shrink-0 ${
                      isGood ? "text-emerald-400" : "text-purple-300"
                    }`}>
                      {pct}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          <button
            onClick={onRepeat}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-300 hover:text-white font-bold text-[13px] sm:text-[13.5px] transition-all cursor-pointer"
          >
            <IconRefresh className="w-4 h-4" />
            <span>Simulation wiederholen</span>
          </button>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenReview}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-purple-600 hover:bg-purple-500 active:scale-[0.99] text-white font-black text-[13.5px] sm:text-[14px] shadow-lg shadow-purple-900/30 transition-all cursor-pointer"
            >
              <span>Antworten analysieren (Review) →</span>
              <IconArrowRight className="w-4 h-4" />
            </button>

            {onNextSim && (
              <button
                onClick={onNextSim}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border border-purple-500/50 hover:border-purple-400 bg-purple-950/60 text-purple-200 font-bold text-[13.5px] sm:text-[14px] transition-all cursor-pointer"
              >
                <span>Nächste Simulation</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
