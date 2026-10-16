import React from "react";
import type { ZfOptionKey, ZfQuestionData } from "../../data/questions/zf/types";

interface ZfQuestionWorkspaceProps {
  zfData: ZfQuestionData;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined; // 0=A, 1=B, 2=C, 3=D, 4=E
  isMarked: boolean;
  isLocked?: boolean;
  lockedReason?: string;
  hidePrevButton?: boolean;
  onSelectOption: (index: number) => void;
  onClearOption?: () => void;
  onToggleMark: () => void;
  onPrev: () => void;
  onNext: () => void;
  onRequestSubmit: () => void;
}

const OPTION_KEYS: ZfOptionKey[] = ["A", "B", "C", "D", "E"];

export const ZfQuestionWorkspace: React.FC<ZfQuestionWorkspaceProps> = ({
  zfData,
  currentIndex,
  totalQuestions,
  selectedOption,
  isMarked,
  isLocked = false,
  lockedReason,
  hidePrevButton = false,
  onSelectOption,
  onClearOption,
  onToggleMark,
  onPrev,
  onNext,
  onRequestSubmit,
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  // Touch Swipe Gesture for Fluid Mobile Navigation
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement | null;
    if (
      target?.tagName === "BUTTON" ||
      target?.closest?.("button") ||
      target?.closest?.(".zf-sequence-scroll")
    ) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) > 65 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        if (!isLast) onNext();
      } else {
        if (!isFirst && !hidePrevButton) onPrev();
      }
    }
  };

  // Derive sequence
  const numbers = zfData.sequence || [];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="flex-1 flex flex-col overflow-y-auto bg-[#F8FAFC]"
    >
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8 space-y-6">
        {/* ─── Top Metadata & Rules Bar ─── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2">
            <span
              translate="no"
              className="notranslate text-[11.5px] font-black text-slate-800 bg-slate-100 border border-slate-200/70 px-3 py-1 rounded-xl font-mono shadow-2xs"
            >
              Aufgabe {currentIndex + 1} von {totalQuestions}
            </span>

            <span className="text-[12px] font-bold text-slate-700 bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-xl shadow-2xs">
              KFF · Zahlenfolgen (ZF)
            </span>

            <span
              className={`text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-xl border shadow-2xs ${
                zfData.difficulty === "Schwer"
                  ? "bg-red-50 text-red-700 border-red-200/70"
                  : zfData.difficulty === "Mittel"
                  ? "bg-amber-50 text-amber-800 border-amber-200/70"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200/70"
              }`}
            >
              {zfData.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isMarked && (
              <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-xl shadow-2xs animate-fade-in">
                <span>★</span>
                <span>Zur Überprüfung</span>
              </span>
            )}
            <button
              onClick={onToggleMark}
              type="button"
              className={`text-[12px] font-bold px-3 py-1 rounded-xl border transition-all ${
                isMarked
                  ? "border-amber-300 bg-amber-50 text-amber-800"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {isMarked ? "★ Markiert" : "☆ Für Review markieren"}
            </button>
          </div>
        </div>

        {/* ─── 1. NUMBER SEQUENCE VISUAL PIPELINE (7 GIVEN NUMBERS + 2 TARGETS) ─── */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center justify-between text-[11.5px] font-bold text-slate-400 uppercase tracking-wider">
            <span>Gegebene Zahlenreihe (7 Zahlen)</span>
            <span className="font-mono text-red-600">Gesucht: 8. & 9. Zahl</span>
          </div>

          <div className="zf-sequence-scroll overflow-x-auto pb-2 pt-1 scrollbar-thin">
            <div className="flex items-center justify-start sm:justify-center min-w-max gap-1.5 sm:gap-2.5 lg:gap-3 px-1">
              {numbers.map((num, idx) => (
                <React.Fragment key={`num-${idx}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-13 sm:w-14 sm:h-16 lg:w-16 lg:h-20 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-2xs flex items-center justify-center font-mono font-black text-[17px] sm:text-[22px] lg:text-[26px] text-slate-900 transition-all">
                      {num}
                    </div>
                    <span className="mt-1 text-[10px] font-bold text-slate-400 font-mono">
                      {idx + 1}.
                    </span>
                  </div>

                  {idx < numbers.length - 1 && (
                    <span className="text-slate-300 font-bold text-[13px] sm:text-[16px] select-none">
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}

              {/* Separator before target slots */}
              <span className="text-red-300 font-black text-[15px] sm:text-[18px] select-none mx-0.5">
                →
              </span>

              {/* Target Slot 1 (8th number) */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-13 sm:w-14 sm:h-16 lg:w-16 lg:h-20 rounded-2xl border-2 border-dashed border-red-300 bg-red-50/50 shadow-2xs flex items-center justify-center font-mono font-black text-[18px] sm:text-[24px] lg:text-[28px] text-red-600 animate-pulse">
                  ?
                </div>
                <span className="mt-1 text-[10px] font-black text-red-600 font-mono">
                  8.
                </span>
              </div>

              <span className="text-red-300 font-bold text-[13px] sm:text-[16px] select-none">
                |
              </span>

              {/* Target Slot 2 (9th number) */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-13 sm:w-14 sm:h-16 lg:w-16 lg:h-20 rounded-2xl border-2 border-dashed border-red-300 bg-red-50/50 shadow-2xs flex items-center justify-center font-mono font-black text-[18px] sm:text-[24px] lg:text-[28px] text-red-600 animate-pulse">
                  ?
                </div>
                <span className="mt-1 text-[10px] font-black text-red-600 font-mono">
                  9.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. QUESTION PROMPT ─── */}
        <div className="text-center py-1">
          <h2 className="text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight">
            Welche zwei Zahlen folgen?
          </h2>
          <p className="text-[12.5px] text-slate-500 mt-1">
            Wähle das Zahlenpaar (A–D) für die 8. und 9. Zahl oder E, falls keine der Optionen richtig ist.
          </p>
        </div>

        {/* ─── 3. CANDIDATE OPTIONS (A–E) ─── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5"
          role="radiogroup"
          aria-label="Antwortoptionen Zahlenfolgen"
        >
          {OPTION_KEYS.map((key, idx) => {
            const pair = zfData.options[key];
            const isNone = key === "E" || pair === null;
            const isSelected = selectedOption === idx;

            return (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={isLocked}
                onClick={() => onSelectOption(idx)}
                className={`group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                  isNone ? "sm:col-span-2 lg:col-span-3 justify-center" : ""
                } ${
                  isSelected
                    ? "border-red-600 bg-red-50/60 ring-2 ring-red-500/20 shadow-xs"
                    : isLocked
                    ? "border-slate-200 bg-slate-50/50 opacity-60 cursor-not-allowed"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 shadow-2xs"
                }`}
              >
                {/* Option Letter Badge */}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[15px] font-mono font-black transition-all ${
                    isSelected
                      ? "bg-red-600 text-white shadow-2xs scale-105"
                      : "border border-slate-200 bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                  }`}
                >
                  {key}
                </span>

                {/* Option Content */}
                <div className="flex-1 min-w-0">
                  {isNone ? (
                    <p className="text-[14px] sm:text-[15px] font-bold text-slate-800 tracking-tight text-center">
                      Keine Antwort ist richtig
                    </p>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight">
                        {pair ? `${pair[0]}  /  ${pair[1]}` : "—"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Selection Indicator Dot */}
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${
                    isSelected
                      ? "border-red-600 bg-red-600"
                      : "border-slate-300 bg-transparent group-hover:border-slate-400"
                  }`}
                >
                  {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* ─── Bottom Action & Navigation Bar ─── */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-2">
            {selectedOption !== undefined && onClearOption && !isLocked && (
              <button
                type="button"
                onClick={onClearOption}
                className="text-[12px] font-bold text-slate-500 hover:text-red-600 transition-colors px-2 py-1 min-h-[40px] flex items-center gap-1 active:scale-95 cursor-pointer"
              >
                <span>✕</span>
                <span>Auswahl aufheben</span>
              </button>
            )}
            {isLocked && lockedReason && (
              <span className="text-[12px] font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-xl">
                {lockedReason}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {!hidePrevButton && !isFirst && (
              <button
                type="button"
                onClick={onPrev}
                className="flex-1 sm:flex-initial min-h-[44px] px-4 py-2 text-[13px] font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-2xs active:scale-98 cursor-pointer"
              >
                ← Vorherige
              </button>
            )}

            {!isLast ? (
              <button
                type="button"
                onClick={onNext}
                className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2 text-[13px] font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                Nächste Aufgabe →
              </button>
            ) : (
              <button
                type="button"
                onClick={onRequestSubmit}
                className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2 text-[13px] font-black text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                Prüfung beenden & abgeben ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
