import React from "react";
import { IconBrain, IconArrowRight, IconClose, IconClock } from "../../lib/icons";

export interface GmPreStartScreenProps {
  simulationNumber: number;
  simTitle?: string;
  isTimed?: boolean;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onStartMerkphase: () => void;
  onAbort?: () => void;
}

export const GmPreStartScreen: React.FC<GmPreStartScreenProps> = ({
  simulationNumber,
  simTitle = "Gedächtnis & Merkfähigkeit",
  isTimed = true,
  isFullscreen = false,
  onToggleFullscreen,
  onStartMerkphase,
  onAbort,
}) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-3 sm:p-6 lg:p-8 select-none font-sans overflow-y-auto">
      {/* Top action bar */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-3 px-1 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink min-w-0">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl bg-purple-950/80 text-purple-300 border border-purple-500/40 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shrink-0">
            <span className="sm:hidden">KFF · GM</span>
            <span className="hidden sm:inline">KFF · GEDÄCHTNIS & MERKFÄHIGKEIT</span>
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] text-slate-400 font-bold truncate">
            SIMULATION {simulationNumber}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-300 hover:text-white text-[12px] font-bold transition-all flex items-center gap-1.5"
              title="Vollbild umschalten"
            >
              <span className="sm:hidden">{isFullscreen ? "🗗" : "⛶"}</span>
              <span className="hidden sm:inline">{isFullscreen ? "🗗 Fenster" : "⛶ Vollbild"}</span>
            </button>
          )}
          {onAbort && (
            <button
              onClick={onAbort}
              className="p-1.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-400 hover:text-slate-200 transition-all"
              title="Abbrechen"
            >
              <IconClose className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Briefing Card */}
      <div className="max-w-2xl w-full bg-[#1E293B] border border-slate-700/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl space-y-4 sm:space-y-6 text-center">
        {/* Brain Icon Badge */}
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-inner">
          <IconBrain className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        {/* Heading */}
        <div className="space-y-1 sm:space-y-2">
          <span className="font-mono text-[11px] sm:text-[12px] font-bold text-purple-400 uppercase tracking-wider">
            MedAT-H & MedAT-Z Simulation
          </span>
          <h1 className="text-[22px] sm:text-[34px] font-black text-white tracking-tight leading-tight">
            Gedächtnis & Merkfähigkeit
          </h1>
          <p className="text-[13px] sm:text-[15px] font-bold text-slate-300">
            Simulation {simulationNumber} — {simTitle}
          </p>
        </div>

        {/* 3 Structured Parameters (Section 19 of prompt) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 text-left pt-1 sm:pt-2">
          {/* Box 1 */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-700 bg-slate-800/80 p-3 sm:p-4 space-y-1">
            <span className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-purple-400">
              1. Ausweise
            </span>
            <p className="text-[16px] sm:text-[18px] font-mono font-black text-white">8 Ausweise</p>
            <p className="text-[11px] sm:text-[12px] text-slate-400 leading-snug">
              64 Informationseinheiten (8 Fakten pro Person)
            </p>
          </div>

          {/* Box 2 */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-700 bg-slate-800/80 p-3 sm:p-4 space-y-1">
            <span className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-purple-400">
              2. Merkphase
            </span>
            <p className="text-[16px] sm:text-[18px] font-mono font-black text-white">08:00 Min</p>
            <p className="text-[11px] sm:text-[12px] text-slate-400 leading-snug">
              Reine mentale Verankerung (keine Notizen erlaubt)
            </p>
          </div>

          {/* Box 3 */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-700 bg-slate-800/80 p-3 sm:p-4 space-y-1">
            <span className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-purple-400">
              3. Abfragephase
            </span>
            <p className="text-[16px] sm:text-[18px] font-mono font-black text-white">25 Fragen</p>
            <p className="text-[11px] sm:text-[12px] text-slate-400 leading-snug">
              15 Min Prüfungszeit (~36s Richtzeit / Frage)
            </p>
          </div>
        </div>

        {/* Exam Rule Notice */}
        <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-purple-950/40 border border-purple-800/60 text-[11px] sm:text-[12px] text-purple-200 text-center font-medium leading-relaxed">
          <span className="font-bold">⚠️ Strikte MedAT-Regel:</span> Während der 8-minütigen Merkphase sind keine Notizen oder Schreibgeräte zulässig. Alle 8 Ausweise werden vor der Abfragephase verdeckt.
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          {onAbort && (
            <button
              onClick={onAbort}
              className="w-full sm:w-auto px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-slate-600 bg-slate-800 text-slate-300 font-bold text-[13px] sm:text-[14px] transition-all order-2 sm:order-1"
            >
              Abbrechen
            </button>
          )}

          <button
            onClick={onStartMerkphase}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-purple-600 hover:bg-purple-500 active:scale-[0.99] text-white font-black text-[14px] sm:text-[15px] shadow-xl shadow-purple-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer order-1 sm:order-2"
          >
            <span>Merkphase starten (08:00) →</span>
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
