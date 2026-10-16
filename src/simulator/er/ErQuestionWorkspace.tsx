import React from "react";
import type { ErOptionKey, ErQuestionData } from "../../data/questions/er/types";

interface ErQuestionWorkspaceProps {
  erData: ErQuestionData;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined; // 0=A, 1=B, 2=C, 3=D (ER has strictly 4 options!)
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

const OPTION_KEYS: ErOptionKey[] = ["A", "B", "C", "D"];

export const ErQuestionWorkspace: React.FC<ErQuestionWorkspaceProps> = ({
  erData,
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

  // Touch swipe gestures for mobile navigation
  const touchStartXRef = React.useRef<number | null>(null);
  const touchStartYRef = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement)?.closest("button, [role='radio']")) return;
    if (e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartXRef.current;
    const diffY = touchEndY - touchStartYRef.current;

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        if (!isLast) {
          onNext();
        }
      } else {
        if (!isFirst && !hidePrevButton) {
          onPrev();
        }
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="flex-1 flex flex-col h-full bg-[#F8FAFC] overflow-hidden select-none"
    >
      {/* ─── Scrollable Main Content Area ─── */}
      <main className="flex-1 overflow-y-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 touch-pan-y">
        <div className="mx-auto w-full max-w-4xl space-y-4 sm:space-y-6 pb-6">
        {/* ─── Top Metadata & Status Bar ─── */}
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 pb-3 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span
              translate="no"
              className="notranslate text-[11px] sm:text-[11.5px] font-black text-slate-800 bg-slate-100 border border-slate-200/70 px-2.5 sm:px-3 py-1 rounded-xl font-mono shadow-2xs shrink-0"
            >
              Aufgabe {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} von {totalQuestions}
            </span>

            <span className="text-[11px] sm:text-[12px] font-bold text-purple-900 bg-purple-50 border border-purple-200/80 px-2.5 sm:px-3 py-1 rounded-xl shadow-2xs shrink-0">
              <span className="sm:hidden">SEK · ER</span>
              <span className="hidden sm:inline">SEK · Emotionen regulieren (ER)</span>
            </span>

            <span
              className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-xl border shadow-2xs shrink-0 ${
                erData.difficulty === "Schwer"
                  ? "bg-red-50 text-red-700 border-red-200/70"
                  : erData.difficulty === "Mittel"
                  ? "bg-amber-50 text-amber-800 border-amber-200/70"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200/70"
              }`}
            >
              {erData.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {isMarked && (
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2 sm:px-2.5 py-1 rounded-xl shadow-2xs animate-fade-in">
                <span>★</span>
                <span className="hidden sm:inline">Für Review markiert</span>
              </span>
            )}
            <button
              onClick={onToggleMark}
              type="button"
              className={`text-[11.5px] sm:text-[12px] font-bold px-2.5 sm:px-3 py-1 rounded-xl border transition-all cursor-pointer ${
                isMarked
                  ? "border-amber-300 bg-amber-50 text-amber-800"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {isMarked ? (
                <>
                  <span className="sm:hidden">★</span>
                  <span className="hidden sm:inline">★ Markiert</span>
                </>
              ) : (
                <>
                  <span className="sm:hidden">☆</span>
                  <span className="hidden sm:inline">☆ Für Review markieren</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ─── Lock Warning if Locked ─── */}
        {isLocked && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-[13px] text-amber-900 font-medium">
            {lockedReason || "Dieser Test ist abgeschlossen oder gesperrt."}
          </div>
        )}

        {/* ─── SITUATION CARD ─── */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 sm:pb-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <span>📖</span>
              <span>Situation & Kontext</span>
            </span>
            <span className="text-[10.5px] sm:text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
              Ausgangslage
            </span>
          </div>

          <p className="text-[15px] sm:text-[17px] font-semibold text-slate-900 leading-relaxed">
            {erData.scenario}
          </p>
        </div>

        {/* ─── GOAL CALLOUT CARD ─── */}
        <div className="rounded-2xl border border-purple-200 bg-purple-50/60 p-3.5 sm:p-5 shadow-xs space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-purple-900">
            <span>🎯</span>
            <span>Vorgegebenes Handlungsziel</span>
          </div>
          <p className="text-[14px] sm:text-[15.5px] font-bold text-purple-950 leading-snug">
            {erData.goal}
          </p>
        </div>

        {/* ─── QUESTION PROMPT & 4 OPTIONS (A–D) ─── */}
        <div className="space-y-3 sm:space-y-4 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-[15px] sm:text-[16px] font-black text-slate-900 tracking-tight">
              Welche Vorgehensweise ist am geeignetsten?
            </h2>
            <span className="text-[11.5px] text-slate-600 font-medium">
              Wähle genau eine Antwortoption (A–D)
            </span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {OPTION_KEYS.map((key, index) => {
              const optionText = erData.options[key];
              const isSelected = selectedOption === index;

              return (
                <button
                  key={key}
                  type="button"
                  disabled={isLocked}
                  onClick={() => {
                    if (isSelected && onClearOption) {
                      onClearOption();
                    } else {
                      onSelectOption(index);
                    }
                  }}
                  className={`w-full text-left rounded-2xl border p-3.5 sm:p-5 transition-all flex items-center justify-between gap-3 sm:gap-4 cursor-pointer min-h-[50px] active:scale-[0.99] ${
                    isSelected
                      ? "border-purple-600 bg-purple-50/60 shadow-xs ring-2 ring-purple-600/30"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                  } ${isLocked ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-[13px] font-mono font-black transition-all ${
                        isSelected
                          ? "border-purple-600 bg-purple-600 text-white shadow-xs"
                          : "border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {key}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[13.5px] sm:text-[15px] leading-relaxed transition-colors ${
                          isSelected
                            ? "text-purple-950 font-bold"
                            : "text-slate-800 font-medium"
                        }`}
                      >
                        {optionText}
                      </p>
                    </div>
                  </div>

                  {/* Selection Radio Indicator */}
                  <div
                    className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-purple-600 bg-purple-600"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        </div>
      </main>

      {/* ─── Sticky Bottom Action Footer (Always Anchored with Safe Area) ─── */}
      <footer className="shrink-0 border-t border-slate-200/90 bg-white/95 backdrop-blur-md px-3 sm:px-8 py-2.5 sm:py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.06)] z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          {/* Status info on left */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                selectedOption !== undefined ? "bg-emerald-500 animate-pulse" : "bg-slate-300"
              }`}
            />
            <span className="text-xs font-bold text-slate-700 truncate">
              {selectedOption !== undefined ? (
                <span className="text-emerald-700">Strategie ausgewählt ✓</span>
              ) : (
                <span className="text-slate-500">Noch keine Strategie gewählt</span>
              )}
            </span>
          </div>

          {/* Action buttons on right */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {!hidePrevButton && (
              <button
                type="button"
                onClick={onPrev}
                disabled={isFirst}
                aria-label="Zur vorherigen Aufgabe"
                className={`min-h-[42px] px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-bold border transition-all cursor-pointer ${
                  isFirst
                    ? "border-slate-100 bg-[#F0F4F8] text-[#94A3B8] cursor-not-allowed"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:scale-98 shadow-2xs"
                }`}
              >
                ← Vorherige
              </button>
            )}

            {isLast ? (
              <button
                type="button"
                onClick={onRequestSubmit}
                className="min-h-[42px] px-4 sm:px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-[13px] shadow-xs active:scale-98 transition-all cursor-pointer"
              >
                Simulation abschließen ✓
              </button>
            ) : (
              <button
                type="button"
                onClick={onNext}
                className="min-h-[42px] px-4 sm:px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-[13px] shadow-xs active:scale-98 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Nächste Aufgabe</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};
