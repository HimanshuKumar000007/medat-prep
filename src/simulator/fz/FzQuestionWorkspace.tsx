import React from "react";
import type { FzOptionKey, FzQuestionData } from "../../data/questions/fz/types";
import { FzPiecesCanvas } from "./FzPiecesCanvas";
import { FzOptionFigure } from "./FzOptionFigure";

interface FzQuestionWorkspaceProps {
  fzData: FzQuestionData;
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

const OPTION_KEYS: FzOptionKey[] = ["A", "B", "C", "D", "E"];

export const FzQuestionWorkspace: React.FC<FzQuestionWorkspaceProps> = ({
  fzData,
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
    if (target?.tagName === "BUTTON" || target?.closest?.("button")) {
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
              Figuren zusammensetzen (FZ)
            </span>

            <span
              className={`text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-xl border shadow-2xs ${
                fzData.difficulty === "Schwer"
                  ? "bg-red-50 text-red-700 border-red-200/70"
                  : fzData.difficulty === "Mittel"
                  ? "bg-amber-50 text-amber-800 border-amber-200/70"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200/70"
              }`}
            >
              {fzData.difficulty} · {fzData.metadata.pieceCount} Teile
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

        {/* ─── 1. GIVEN PIECES CONTAINER (STATIC VECTOR DIAGRAM) ─── */}
        <FzPiecesCanvas pieces={fzData.pieces} viewBox={fzData.canvasViewBox} />

        {/* ─── 2. QUESTION PROMPT ─── */}
        <div className="text-center py-1">
          <h2 className="text-[17px] sm:text-[19px] font-black text-slate-900 tracking-tight">
            {fzData.questionText || "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?"}
          </h2>
          <p className="text-[12px] text-slate-500 mt-1">
            Wähle eine Zielfigur (A–D) oder E, falls keine der Figuren exakt aus den Teilen zusammengesetzt werden kann.
          </p>
        </div>

        {/* ─── 3. CANDIDATE OPTIONS GRID (A–E) ─── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-3.5"
          role="radiogroup"
          aria-label="Antwortoptionen Figuren zusammensetzen"
        >
          {OPTION_KEYS.map((key, idx) => {
            const opt = fzData.options[key];
            const isSelected = selectedOption === idx;

            return (
              <FzOptionFigure
                key={key}
                optionKey={key}
                option={opt}
                isSelected={isSelected}
                disabled={isLocked}
                onSelect={() => onSelectOption(idx)}
              />
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
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {!hidePrevButton && (
              <button
                type="button"
                onClick={onPrev}
                disabled={isFirst}
                className={`flex-1 sm:flex-initial min-h-[44px] rounded-xl px-4 py-2.5 text-[13px] font-bold border transition-all active:scale-98 cursor-pointer ${
                  isFirst
                    ? "border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs"
                }`}
              >
                ← Vorherige
              </button>
            )}

            {isLast ? (
              <button
                type="button"
                onClick={onRequestSubmit}
                className="flex-1 sm:flex-initial min-h-[44px] rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-[13px] font-black shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Simulation abgeben ✓
              </button>
            ) : (
              <button
                type="button"
                onClick={onNext}
                className="flex-1 sm:flex-initial min-h-[44px] rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-[13px] font-black shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Nächste Aufgabe →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
