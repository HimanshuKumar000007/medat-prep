import React from "react";
import type { WfOptionKey, WfQuestionData } from "../../data/questions/wf/types";

interface WfQuestionWorkspaceProps {
  wfData: WfQuestionData;
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

const OPTION_KEYS: WfOptionKey[] = ["A", "B", "C", "D", "E"];

export const WfQuestionWorkspace: React.FC<WfQuestionWorkspaceProps> = ({
  wfData,
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

  // Letter tap scratchpad tracking (helps students mentally solve anagrams on mobile)
  const [usedLetterIndices, setUsedLetterIndices] = React.useState<Set<number>>(new Set());

  React.useEffect(() => {
    setUsedLetterIndices(new Set());
  }, [wfData.id, currentIndex]);

  const toggleLetterUsed = (idx: number) => {
    setUsedLetterIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

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

  // Extract letters list
  const letters = wfData.letters && wfData.letters.length > 0
    ? wfData.letters
    : wfData.scrambledLetters.split(/\s*·\s*|\s+/).filter(Boolean);

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

            <span className="text-[12px] font-bold text-slate-700 bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-xl shadow-2xs">
              KFF · Wortflüssigkeit (WF)
            </span>

            <span
              className={`text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-xl border shadow-2xs ${
                wfData.difficulty === "Schwer"
                  ? "bg-red-50 text-red-700 border-red-200/70"
                  : wfData.difficulty === "Mittel"
                  ? "bg-amber-50 text-amber-800 border-amber-200/70"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200/70"
              }`}
            >
              {wfData.difficulty}
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

        {/* ─── 1. SCRAMBLED LETTERS DISPLAY (PROMINENT LETTER TILES) ─── */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center justify-between text-[11.5px] font-bold text-slate-400 uppercase tracking-wider">
            <span>GEGEBENE BUCHSTABEN</span>
            <span className="font-mono text-slate-500 font-semibold">{letters.length} Buchstaben</span>
          </div>

          {/* Letter Tiles in High-Contrast Grid with Mental Scratchpad Tap */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 py-3 sm:py-6">
            {letters.map((letter, idx) => {
              const isUsed = usedLetterIndices.has(idx);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleLetterUsed(idx)}
                  title={isUsed ? "Buchstabe wieder freigeben" : "Tippen zum mentalen Durchstreichen"}
                  className={`w-11 h-13 sm:w-16 sm:h-18 rounded-2xl border-2 shadow-xs flex items-center justify-center font-mono font-black text-[20px] sm:text-[28px] select-none transition-all cursor-pointer active:scale-95 ${
                    isUsed
                      ? "bg-slate-100 text-slate-300 border-slate-200 line-through scale-95 opacity-60"
                      : "bg-gradient-to-b from-white to-slate-50/80 border-slate-200 text-slate-900 hover:border-slate-300"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-[11.5px] text-slate-400 font-medium">
            <span>Tippe auf Buchstaben zum Durchstreichen/Merken</span>
            {usedLetterIndices.size > 0 ? (
              <button
                type="button"
                onClick={() => setUsedLetterIndices(new Set())}
                className="text-slate-500 hover:text-slate-900 font-bold underline cursor-pointer"
              >
                Zurücksetzen
              </button>
            ) : (
              <span className="font-mono text-slate-500">KFF · MedAT-Standard</span>
            )}
          </div>
        </div>

        {/* ─── 2. QUESTION PROMPT ─── */}
        <div className="space-y-1.5 px-1">
          <h2 className="text-[17px] sm:text-[19px] font-black text-slate-900 tracking-tight">
            Welcher Anfangsbuchstabe gehört zum gesuchten Wort?
          </h2>
          <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
            Wähle den richtigen Anfangsbuchstaben (A–D) oder Option E, falls der Anfangsbuchstabe nicht unter den Optionen A bis D aufgeführt ist.
          </p>
        </div>

        {/* ─── 3. ANSWER OPTIONS (A–E) ─── */}
        <div className="space-y-2.5">
          {OPTION_KEYS.map((key, optIdx) => {
            const isSelected = selectedOption === optIdx;
            const letterVal = wfData.options[key];
            const isOptionE = key === "E";

            return (
              <button
                key={key}
                type="button"
                disabled={isLocked}
                onClick={() => {
                  if (isSelected && onClearOption) {
                    onClearOption();
                  } else {
                    onSelectOption(optIdx);
                  }
                }}
                className={`w-full text-left rounded-2xl border-2 p-4 transition-all flex items-center justify-between gap-4 group ${
                  isSelected
                    ? "border-red-600 bg-red-50/50 shadow-xs ring-2 ring-red-600/10"
                    : isLocked
                    ? "border-slate-200/80 bg-slate-50/50 opacity-80 cursor-not-allowed"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/40 shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div
                    className={`h-9 w-9 rounded-xl font-mono font-black text-[14px] flex items-center justify-center transition-colors shrink-0 ${
                      isSelected
                        ? "bg-red-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                    }`}
                  >
                    {key}
                  </div>

                  <div className="flex items-center gap-3">
                    {isOptionE ? (
                      <span className="text-[14px] sm:text-[15px] font-bold text-slate-800">
                        {letterVal || "Keine Antwort ist richtig"}
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-[18px] sm:text-[20px] text-slate-900">
                          {letterVal}
                        </span>
                        <span className="text-[12px] font-semibold text-slate-400">
                          (Anfangsbuchstabe: {letterVal})
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                    isSelected
                      ? "border-red-600 bg-red-600"
                      : "border-slate-300 bg-white group-hover:border-slate-400"
                  }`}
                >
                  {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* ─── 4. BOTTOM NAVIGATION & SUBMISSION BAR ─── */}
        <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div>
            {!hidePrevButton && !isFirst && (
              <button
                onClick={onPrev}
                type="button"
                className="min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-[13px] font-bold transition-all shadow-2xs active:scale-98 cursor-pointer"
              >
                ← Vorherige
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {isLast ? (
              <button
                onClick={onRequestSubmit}
                type="button"
                className="min-h-[44px] px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[13px] font-black transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                Test abgeben ({totalQuestions} / {totalQuestions}) ✓
              </button>
            ) : (
              <button
                onClick={onNext}
                type="button"
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold transition-all shadow-xs active:scale-98 cursor-pointer"
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
