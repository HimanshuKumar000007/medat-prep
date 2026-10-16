import React, { useMemo, useState } from "react";
import { DIconBookmark, DIconBookmarkFilled } from "../dashboard/icons";
import { LogoMark } from "../lib/icons";
import type { SectionCode, ExamType } from "../content/medat/config";
import type { TaskRules } from "./taskRules";

interface MedatExamHeaderProps {
  examType?: ExamType;
  sectionCode?: SectionCode | string;
  subjectTitle?: string;
  topicTitle?: string;
  examTitle?: string;
  currentIndex: number;
  totalQuestions: number;
  isBookmarked: boolean;
  timeDisplay: string; // e.g. "00:57"
  isTimeWarning?: boolean;
  isTimeCritical?: boolean;
  isCountUp?: boolean;
  isSyncing?: boolean;
  lastSavedSecondsAgo?: number;
  taskRules?: TaskRules;
  onToggleBookmark: () => void;
  onPause: () => void;
  onOpenShortcuts: () => void;
  onOpenMobileOverview?: () => void;
  onOpenScratchpad?: () => void;
  onOpenPeriodicTable?: () => void;
  onOpenFormulas?: () => void;
  onRequestSubmit?: () => void;
}

export function MedatExamHeader({
  examType = "MEDAT-H",
  sectionCode = "BMS",
  subjectTitle,
  topicTitle,
  examTitle,
  currentIndex,
  totalQuestions,
  isBookmarked,
  timeDisplay,
  isTimeWarning = false,
  isTimeCritical = false,
  isCountUp = false,
  isSyncing = false,
  lastSavedSecondsAgo = 0,
  taskRules,
  onToggleBookmark,
  onPause,
  onOpenShortcuts,
  onOpenMobileOverview,
  onOpenScratchpad,
  onOpenPeriodicTable,
  onOpenFormulas,
  onRequestSubmit,
}: MedatExamHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const progressPercent = useMemo(() => {
    if (totalQuestions <= 1) return 100;
    return Math.min(100, Math.max(0, ((currentIndex + 1) / totalQuestions) * 100));
  }, [currentIndex, totalQuestions]);

  const formattedSavedText = useMemo(() => {
    if (isSyncing) return "Synchronisiere...";
    if (lastSavedSecondsAgo === 0 || lastSavedSecondsAgo === undefined) {
      return "Stand synchronisiert";
    }
    if (lastSavedSecondsAgo < 60) {
      return `Stand synchronisiert`;
    }
    const mins = Math.floor(lastSavedSecondsAgo / 60);
    return `Vor ${mins}m gesichert`;
  }, [isSyncing, lastSavedSecondsAgo]);

  const allowPause = taskRules ? taskRules.allow_pause : true;

  const displayExamType = examType === "MEDAT-Z" ? "DENTAL MEDICINE" : "HUMAN MEDICINE";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md select-none transition-colors shadow-2xs antialiased pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex w-full items-center justify-between px-2 sm:px-4 lg:px-6 h-12 sm:h-14 gap-1.5 sm:gap-4 overflow-hidden">
          {/* =================================================================
             LEFT: Homescreen Logo, Exam Type, Section & Question Counter
             ================================================================= */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3.5 lg:gap-5 min-w-0 shrink">
            {/* Homescreen App Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <LogoMark className="h-7 w-7 sm:h-8.5 sm:w-8.5 shrink-0 rounded-xl shadow-xs transition-transform hover:scale-105" />
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[13.5px] font-black tracking-tight text-slate-900">
                  MedAT Prep
                </span>
                <span className="hidden md:inline-block rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 px-1.5 py-0.5 text-[8.5px] font-black uppercase tracking-wider">
                  {displayExamType}
                </span>
              </div>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden lg:block" />

            {/* Section / Chapter Pill (hidden on small mobile) */}
            <div className="hidden md:flex items-center gap-1.5 rounded-xl bg-slate-100/90 border border-slate-200/70 px-2.5 py-1 min-w-0 shadow-2xs">
              <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-700 bg-white px-1.5 py-0.5 rounded-md shadow-2xs">
                {sectionCode}
              </span>
              <span className="text-[11.5px] font-bold text-slate-700 truncate max-w-[120px] lg:max-w-[200px]">
                {subjectTitle || examTitle || "Biologie"}
                {topicTitle ? ` · ${topicTitle}` : ""}
              </span>
            </div>

            {/* Mobile Subject / Section Indicator (hidden on screens < 380px to protect question counter & timer) */}
            <div className="hidden xs:flex md:hidden items-center shrink-0">
              <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200/80 px-1.5 py-0.5 rounded-md shadow-2xs truncate max-w-[70px]">
                {subjectTitle || sectionCode || "BMS"}
              </span>
            </div>

            {/* Question Counter Pill + Progress Track */}
            <div
              key={`q-counter-${currentIndex}`}
              translate="no"
              className="notranslate flex flex-col min-w-[68px] xs:min-w-[76px] sm:min-w-[110px]"
            >
              <button
                type="button"
                onClick={() => onOpenMobileOverview && onOpenMobileOverview()}
                disabled={!onOpenMobileOverview}
                title={onOpenMobileOverview ? "Fragenübersicht öffnen" : undefined}
                className={`flex items-center gap-1 sm:gap-1.5 rounded-xl bg-slate-100/90 border border-slate-200/70 px-1.5 xs:px-2 sm:px-3 py-1 font-mono text-[11px] sm:text-[12.5px] font-black text-slate-800 shadow-2xs transition-all text-left ${
                  onOpenMobileOverview ? "cursor-pointer hover:bg-slate-200/80 active:scale-95" : "cursor-default"
                }`}
              >
                <span className="text-slate-900 font-black">
                  <span className="hidden sm:inline">Frage </span>
                  <span className="sm:hidden">F </span>
                  {currentIndex + 1}
                </span>
                <span className="text-slate-400 font-normal">/ {totalQuestions}</span>
                {onOpenMobileOverview && (
                  <span className="lg:hidden text-[9px] text-slate-500 font-sans ml-0.5">▼</span>
                )}
              </button>
              <div className="w-full h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-slate-900 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* =================================================================
             RIGHT: Sync Status, Tools, Timer, Bookmark, Pause, Submit
             ================================================================= */}
          <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 shrink-0">
            {/* Sync Status Pill (Desktop only) */}
            <div
              className="hidden xl:flex items-center gap-1.5 text-[11px] font-bold text-slate-600 bg-emerald-50/90 border border-emerald-200/80 rounded-full px-3 py-1 shadow-2xs"
              title="Autosave aktiv: Antworten werden verschlüsselt synchronisiert"
            >
              <span className={`h-1.5 w-1.5 rounded-full bg-emerald-500 ${isSyncing ? "animate-pulse" : ""}`} />
              <span>{formattedSavedText}</span>
            </div>

            {/* Live Timer Pill */}
            <div
              className={`flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3 py-1 rounded-xl font-mono text-[11.5px] xs:text-[12px] sm:text-[13px] font-black border transition-all shadow-2xs ${
                isTimeCritical
                  ? "bg-red-50 text-red-700 border-red-300 animate-pulse"
                  : isTimeWarning
                    ? "bg-amber-50 text-amber-800 border-amber-300"
                    : "bg-slate-50 text-slate-900 border-slate-200/90"
              }`}
              title="Verbleibende Prüfungszeit"
            >
              <span className="text-[10px] sm:text-[11px]">⏱</span>
              <span>{timeDisplay}</span>
            </div>

            {/* Bookmark Button */}
            <button
              onClick={onToggleBookmark}
              aria-label={isBookmarked ? "Markierung aufheben" : "Frage zur Überprüfung vormerken"}
              title={isBookmarked ? "Vorgemerkt für Review" : "Frage merken"}
              className={`flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-xl border transition-all active:scale-95 cursor-pointer ${
                isBookmarked
                  ? "border-amber-400 bg-amber-50 text-amber-600 shadow-2xs"
                  : "border-slate-200 bg-white text-slate-400 hover:text-slate-700 hover:border-slate-300 shadow-2xs"
              }`}
            >
              {isBookmarked ? (
                <DIconBookmarkFilled className="h-4 w-4 text-amber-500" />
              ) : (
                <DIconBookmark className="h-4 w-4" />
              )}
            </button>

            {/* Pause Button (Desktop & Tablet) */}
            {allowPause && (
              <button
                onClick={onPause}
                aria-label="Übungssitzung pausieren"
                title="Sitzung pausieren (SmartPrep Trainingsfunktion)"
                className="hidden md:flex items-center gap-1 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 px-2.5 py-1 text-[11.5px] font-bold text-slate-700 transition-all shadow-2xs cursor-pointer"
              >
                <span>⏸</span>
                <span className="hidden lg:inline">Pause</span>
              </button>
            )}

            {/* Shortcuts Button (Desktop only) */}
            <button
              onClick={onOpenShortcuts}
              aria-label="Tastenkombinationen anzeigen"
              title="Tastenkombinationen (?)"
              className="hidden lg:flex h-8.5 w-8.5 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-2xs cursor-pointer"
            >
              <span className="text-[12px] font-bold">⌨</span>
            </button>

            {/* Mobile / Tablet Menu & Tools Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menü & Werkzeuge öffnen"
              title="Menü & Werkzeuge"
              className="lg:hidden flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-2xs active:scale-95 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </button>

            {/* Hand Over / Submit Button (hidden on screens < 360px as it is always inside the tools sheet) */}
            {onRequestSubmit && (
              <button
                onClick={onRequestSubmit}
                className="hidden xs:inline-flex rounded-xl border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-900 px-2.5 sm:px-4 py-1 text-[11px] sm:text-[12px] font-black transition-all shadow-2xs shrink-0 whitespace-nowrap active:scale-95 cursor-pointer"
              >
                <span>Abgeben</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* =================================================================
         MOBILE TOOLS ACTION SHEET
         ================================================================= */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="max-h-[85vh] rounded-t-3xl border-t border-slate-200 bg-white p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-4 shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto -mt-2 mb-2 shrink-0" />

            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-[15px] font-black text-slate-900">
                  Prüfungswerkzeuge & Aktionen
                </h3>
                <p className="text-[11.5px] text-slate-500">
                  {sectionCode} · Frage {currentIndex + 1} von {totalQuestions}
                </p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Overview Palette */}
              {onOpenMobileOverview && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenMobileOverview();
                  }}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 text-left font-bold text-[13px] text-slate-800 hover:bg-white hover:border-slate-300"
                >
                  <span className="text-lg">📋</span>
                  <span>Fragenübersicht</span>
                </button>
              )}



              {/* Scratchpad (Notizblatt) */}
              {onOpenScratchpad && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenScratchpad();
                  }}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 text-left font-bold text-[13px] text-slate-800 hover:bg-white hover:border-slate-300"
                >
                  <span className="text-lg">📝</span>
                  <span>Notizblatt</span>
                </button>
              )}

              {/* Pause */}
              {allowPause && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onPause();
                  }}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 text-left font-bold text-[13px] text-slate-800 hover:bg-white hover:border-slate-300"
                >
                  <span className="text-lg">⏸</span>
                  <span>Test pausieren</span>
                </button>
              )}
            </div>

            {/* Final Hand Over Button */}
            {onRequestSubmit && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestSubmit();
                }}
                className="w-full rounded-2xl bg-slate-900 text-white py-3.5 font-bold text-[13.5px] shadow-sm mt-2 active:scale-[0.98]"
              >
                Prüfung jetzt abgeben (Submit)
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
