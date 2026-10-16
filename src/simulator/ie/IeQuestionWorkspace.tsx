import React from "react";
import type { IeOptionKey, IeQuestionData } from "../../data/questions/ie/types";

interface IeQuestionWorkspaceProps {
  ieData: IeQuestionData;
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

const OPTION_KEYS: IeOptionKey[] = ["A", "B", "C", "D", "E"];

export const IeQuestionWorkspace: React.FC<IeQuestionWorkspaceProps> = ({
  ieData,
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
      <div className="mx-auto w-full max-w-4xl p-4 sm:p-6 lg:p-8 space-y-6">
        {/* ─── Top Metadata & Status Bar ─── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2">
            <span
              translate="no"
              className="notranslate text-[11.5px] font-black text-slate-800 bg-slate-100 border border-slate-200/70 px-3 py-1 rounded-xl font-mono shadow-2xs"
            >
              Aufgabe {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} von {totalQuestions}
            </span>

            <span className="text-[12px] font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-xl shadow-2xs">
              Nur MedAT-H · KFF Implikationen (IE)
            </span>

            <span
              className={`text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-xl border shadow-2xs ${
                ieData.difficulty === "Schwer"
                  ? "bg-red-50 text-red-700 border-red-200/70"
                  : ieData.difficulty === "Mittel"
                  ? "bg-amber-50 text-amber-800 border-amber-200/70"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200/70"
              }`}
            >
              {ieData.difficulty}
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
              className={`text-[12px] font-bold px-3 py-1 rounded-xl border transition-all cursor-pointer ${
                isMarked
                  ? "border-amber-300 bg-amber-50 text-amber-800"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {isMarked ? "★ Markiert" : "☆ Merken"}
            </button>
          </div>
        </div>

        {/* ─── Lock Warning if Locked ─── */}
        {isLocked && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-[13px] text-amber-900 font-medium">
            {lockedReason || "Dieser Test ist abgeschlossen oder gesperrt."}
          </div>
        )}

        {/* ─── PREMISES CARD ─── */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs p-5 sm:p-7 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[18px]">⚖️</span>
              <span className="text-[12px] font-black uppercase tracking-wider text-slate-500">
                Logische Prämissen (Als absolut wahr voraussetzen)
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">
              Formale Gültigkeit zählt
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Prämisse 1 */}
            <div className="rounded-xl border border-purple-100 bg-purple-50/40 p-4 space-y-1.5">
              <span className="text-[10.5px] font-black font-mono tracking-wider uppercase text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded-md inline-block">
                Prämisse 1
              </span>
              <p className="text-[15px] sm:text-[16px] font-bold text-slate-900 leading-snug">
                {ieData.premises[0]}
              </p>
            </div>

            {/* Prämisse 2 */}
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-4 space-y-1.5">
              <span className="text-[10.5px] font-black font-mono tracking-wider uppercase text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-md inline-block">
                Prämisse 2
              </span>
              <p className="text-[15px] sm:text-[16px] font-bold text-slate-900 leading-snug">
                {ieData.premises[1]}
              </p>
            </div>
          </div>

          {/* Question Prompt */}
          <div className="pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <p className="text-[13.5px] font-black text-slate-800">
                Welche Schlussfolgerung ist logisch gültig?
              </p>
              <span className="text-[11px] text-slate-500 font-medium hidden md:inline">
                A–D prüfen · wenn keine zwingend folgt → E wählen
              </span>
            </div>
          </div>
        </div>

        {/* ─── OPTIONS LIST (A–E) ─── */}
        <div className="space-y-3">
          <p className="text-[12px] font-black uppercase tracking-wider text-slate-500 px-1">
            Antwortoptionen (Wähle genau eine Option)
          </p>

          <div className="space-y-2.5">
            {OPTION_KEYS.map((key, optIdx) => {
              const text = ieData.options[key];
              const isSelected = selectedOption === optIdx;
              const isOptionE = key === "E";

              return (
                <button
                  key={key}
                  type="button"
                  disabled={isLocked}
                  onClick={() => onSelectOption(optIdx)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    isSelected
                      ? "border-purple-600 bg-purple-50/70 shadow-xs ring-1 ring-purple-600"
                      : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60 shadow-2xs"
                  } ${isLocked ? "cursor-not-allowed opacity-75" : ""}`}
                >
                  {/* Option Badge A-E */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-mono text-[13px] font-black transition-colors ${
                      isSelected
                        ? "bg-purple-600 text-white shadow-2xs"
                        : "bg-slate-100 text-slate-700 border border-slate-200/80"
                    }`}
                  >
                    {key}
                  </span>

                  {/* Option Text */}
                  <div className="flex-1">
                    <p
                      className={`text-[14px] sm:text-[14.5px] leading-snug ${
                        isSelected
                          ? "font-bold text-purple-950"
                          : "font-medium text-slate-800"
                      } ${isOptionE ? "italic text-slate-700" : ""}`}
                    >
                      {text}
                    </p>
                  </div>

                  {/* Selection Radio Dot */}
                  <div
                    className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
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

        {/* ─── BOTTOM CONTROL & NAVIGATION BAR ─── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-slate-200/80">
          <div className="flex items-center gap-2">
            {!hidePrevButton && (
              <button
                type="button"
                disabled={isFirst}
                onClick={onPrev}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-[13px] font-bold border transition-all cursor-pointer ${
                  isFirst
                    ? "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:scale-[0.98]"
                }`}
              >
                ← Zurück
              </button>
            )}

            {selectedOption !== undefined && onClearOption && (
              <button
                type="button"
                onClick={onClearOption}
                className="min-h-[44px] px-3 py-2 text-[12px] font-medium text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Auswahl aufheben
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!isLast ? (
              <button
                type="button"
                onClick={onNext}
                className="min-h-[44px] px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[13px] font-black shadow-xs shadow-purple-900/10 active:scale-[0.98] transition-all cursor-pointer"
              >
                Weiter →
              </button>
            ) : (
              <button
                type="button"
                onClick={onRequestSubmit}
                className="min-h-[44px] px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] font-black shadow-xs shadow-emerald-900/10 active:scale-[0.98] transition-all cursor-pointer"
              >
                Test einreichen ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
