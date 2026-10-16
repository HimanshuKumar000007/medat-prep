import React, { useState, useEffect, useRef } from "react";
import { IconArrowRight, IconClock, IconBrain, IconCheck } from "../../lib/icons";

export interface GmTransitionScreenProps {
  simTitle?: string;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onStartRecall: () => void;
  onAbort?: () => void;
}

export const GmTransitionScreen: React.FC<GmTransitionScreenProps> = ({
  simTitle = "Gedächtnis & Merkfähigkeit",
  isFullscreen = false,
  onToggleFullscreen,
  onStartRecall,
  onAbort,
}) => {
  const [breakSeconds, setBreakSeconds] = useState(0);
  const startTimestampRef = useRef<number>(Date.now());

  // Mental break stopwatch (wall-clock timestamp based)
  useEffect(() => {
    const tick = () => {
      setBreakSeconds(Math.max(0, Math.floor((Date.now() - startTimestampRef.current) / 1000)));
    };
    tick();
    const timer = setInterval(tick, 250);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(breakSeconds / 60);
  const secs = breakSeconds % 60;
  const breakFormatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="h-full w-full bg-[#0F172A] text-slate-100 flex flex-col items-center justify-center p-3 sm:p-6 lg:p-8 select-none font-sans overflow-y-auto">
      {/* Top action bar */}
      <div className="w-full max-w-xl flex items-center justify-end mb-2 sm:mb-3 gap-2">
        {onToggleFullscreen && (
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-300 hover:text-white text-[12px] font-bold transition-all"
            title="Vollbild umschalten"
          >
            <span className="sm:hidden">{isFullscreen ? "🗗" : "⛶"}</span>
            <span className="hidden sm:inline">{isFullscreen ? "🗗 Fenster" : "⛶ Vollbild"}</span>
          </button>
        )}
      </div>

      <div className="max-w-xl w-full bg-[#1E293B] border border-slate-700/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl space-y-4 sm:space-y-6 text-center">
        {/* Memory Lock Icon Badge */}
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-inner">
          <IconBrain className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        {/* Phase Header */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-xl bg-purple-950/80 text-purple-300 border border-purple-500/40 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            MERKPHASE ABGESCHLOSSEN
          </div>
          <h2 className="text-[22px] sm:text-[32px] font-black text-white tracking-tight">
            Ausweise sind verdeckt
          </h2>
          <p className="text-[13px] sm:text-[14px] text-slate-300 leading-relaxed max-w-md mx-auto">
            Die 8 Allergieausweise wurden sicher im Gedächtnis verankert und sind nun für die Prüfung gesperrt.
          </p>
        </div>

        {/* Real MedAT Exam Context Note */}
        <div className="rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-700/70 p-3.5 sm:p-4 text-left space-y-2 text-[12px] sm:text-[12.5px] text-slate-300">
          <div className="flex items-center gap-1.5 font-bold text-amber-300 text-[12px]">
            <span>ℹ️ MedAT-Ablauf & Phasen-Kontext:</span>
          </div>

          <div className="space-y-1 text-[11.5px] sm:text-[12px] leading-relaxed">
            <p>
              <strong className="text-white">Fokussiertes Modultraining:</strong> Du startest direkt im Anschluss in die 25 Abfragefragen, um Merk- und Abruftechniken konzentriert zu trainieren.
            </p>
            <p className="text-slate-400 hidden sm:block">
              <strong className="text-slate-300">Reale MedAT-Gesamtsimulation:</strong> Am Testtag liegt zwischen Merkphase und Abfragephase eine ca. 35–40-minütige Interferenzphase (ZF & WF).
            </p>
          </div>

          <div className="flex items-center justify-between pt-1 font-mono text-[11px] text-slate-400 border-t border-slate-800">
            <span>Mentale Pause:</span>
            <span className="font-bold text-purple-300">{breakFormatted}</span>
          </div>
        </div>

        {/* Recall Phase Overview Card */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-left">
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">
              Prüfungsfragen
            </span>
            <span className="font-mono text-[18px] sm:text-[20px] font-black text-white block">
              25 Aufgaben
            </span>
            <span className="text-[10.5px] sm:text-[11px] text-slate-400">
              A–E Abfrage
            </span>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">
              Prüfungszeit
            </span>
            <span className="font-mono text-[18px] sm:text-[20px] font-black text-white block">
              15:00 Min.
            </span>
            <span className="text-[10.5px] sm:text-[11px] text-slate-400">
              ~36s pro Aufgabe
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="pt-1 sm:pt-2 space-y-2.5 sm:space-y-3">
          <button
            onClick={onStartRecall}
            className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-purple-600 hover:bg-purple-500 active:scale-[0.99] text-white font-black text-[14px] sm:text-[15px] tracking-wide transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Abfragephase starten (15 Min.) →</span>
          </button>

          {onAbort && (
            <button
              onClick={onAbort}
              className="text-[11.5px] sm:text-[12px] font-semibold text-slate-500 hover:text-slate-300 transition-colors"
            >
              Simulation abbrechen & zurück
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
