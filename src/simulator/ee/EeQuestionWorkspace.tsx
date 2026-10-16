import React, { useState } from "react";
import type {
  EeEmotionKey,
  EeEmotionSelection,
  EeQuestionData,
} from "../../data/questions/ee/types";
import {
  decodeEeSelections,
  encodeEeSelections,
  isEeFullyAnswered,
} from "../../data/questions/ee/types";

interface EeQuestionWorkspaceProps {
  eeData: EeQuestionData;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined; // Base-3 encoded integer
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

export const EeQuestionWorkspace: React.FC<EeQuestionWorkspaceProps> = ({
  eeData,
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

  const [validationWarning, setValidationWarning] = useState<string | null>(null);

  // Decode the current 5 selections from selectedOption integer
  const currentSelections = decodeEeSelections(selectedOption);

  // Check how many emotions are answered
  const answeredCount = eeData.emotions.filter(
    (emo) => currentSelections[emo.id] !== "unselected"
  ).length;
  const isFullyAnswered = answeredCount === 5;

  // Handle toggling probability for an emotion row
  const handleToggleProbability = (
    emotionKey: EeEmotionKey,
    probability: "likely" | "unlikely"
  ) => {
    if (isLocked) return;
    setValidationWarning(null);

    const nextSelections = {
      ...currentSelections,
      [emotionKey]: probability,
    };

    const newCode = encodeEeSelections(nextSelections);
    onSelectOption(newCode);
  };

  // Navigation handlers
  const handleNext = () => {
    setValidationWarning(null);
    onNext();
  };

  const handleSubmit = () => {
    setValidationWarning(null);
    onRequestSubmit();
  };

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
          handleNext();
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

            <span className="text-[11px] sm:text-[12px] font-bold text-violet-900 bg-violet-50 border border-violet-200/80 px-2.5 sm:px-3 py-1 rounded-xl shadow-2xs shrink-0">
              <span className="sm:hidden">SEK · EE</span>
              <span className="hidden sm:inline">SEK · Emotionen erkennen (EE)</span>
            </span>

            <span
              className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-xl border shadow-2xs shrink-0 ${
                eeData.difficulty === "Schwer"
                  ? "bg-red-50 text-red-700 border-red-200/70"
                  : eeData.difficulty === "Mittel"
                  ? "bg-amber-50 text-amber-800 border-amber-200/70"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200/70"
              }`}
            >
              {eeData.difficulty}
            </span>

            {/* Answer completion badge */}
            <span
              className={`text-[10.5px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-1 rounded-xl border transition-all shrink-0 ${
                isFullyAnswered
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : answeredCount > 0
                  ? "bg-amber-50 text-amber-800 border-amber-200"
                  : "bg-slate-50 text-slate-500 border-slate-200"
              }`}
            >
              {answeredCount}/5 bewertet {isFullyAnswered && "✓"}
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
        <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <span>📖</span>
              <span>Situation & Kontext</span>
            </span>
            <span className="text-[11px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200/60">
              Person: {eeData.person.name} ({eeData.person.context})
            </span>
          </div>

          <p className="text-[15.5px] sm:text-[17px] font-semibold text-slate-900 leading-relaxed">
            {eeData.scenario}
          </p>
        </div>

        {/* ─── QUESTION PROMPT ─── */}
        <div className="rounded-2xl border border-violet-200 bg-violet-50/60 p-4 sm:p-5 shadow-xs space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-violet-900">
            <span>🎯</span>
            <span>Aufgabenstellung (EE)</span>
          </div>
          <h2 className="text-[15px] sm:text-[16px] font-black text-violet-950 leading-snug">
            Wie wahrscheinlich sind die folgenden Emotionen für {eeData.person.name} in dieser Situation?
          </h2>
          <p className="text-[12px] text-violet-800 font-medium">
            Treffe für jede der fünf Emotionen genau eine binäre Einschätzung. Die Aufgabe gibt nur dann einen Punkt, wenn alle fünf Urteile korrekt sind.
          </p>
        </div>

        {/* ─── 5-EMOTION ANSWER MATRIX ─── */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
          {/* Desktop Table Header */}
          <div className="hidden sm:grid sm:grid-cols-12 bg-slate-50/90 border-b border-slate-200 px-6 py-3.5 text-[11px] font-black uppercase tracking-wider text-slate-500">
            <div className="sm:col-span-6">Emotion</div>
            <div className="sm:col-span-3 text-center">Eher wahrscheinlich</div>
            <div className="sm:col-span-3 text-center">Eher unwahrscheinlich</div>
          </div>

          {/* Rows A–E */}
          <div className="divide-y divide-slate-100">
            {eeData.emotions.map((emo) => {
              const currentChoice = currentSelections[emo.id];
              const isLikely = currentChoice === "likely";
              const isUnlikely = currentChoice === "unlikely";
              const isRowAnswered = isLikely || isUnlikely;

              return (
                <div
                  key={emo.id}
                  className={`p-4 sm:px-6 sm:py-4 transition-colors ${
                    isRowAnswered ? "bg-white" : "bg-slate-50/30"
                  }`}
                  role="radiogroup"
                  aria-label={`Wahrscheinlichkeit für Emotion ${emo.id}: ${emo.label}`}
                >
                  <div className="flex flex-col sm:grid sm:grid-cols-12 sm:items-center gap-3">
                    {/* Emotion Identifier & Label */}
                    <div className="sm:col-span-6 flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-[13px] font-mono font-black transition-all ${
                          isRowAnswered
                            ? "border-violet-600 bg-violet-600 text-white shadow-xs"
                            : "border-slate-200 bg-slate-100 text-slate-600"
                        }`}
                      >
                        {emo.id}
                      </span>
                      <span className="text-[15px] sm:text-[16px] font-bold text-slate-900">
                        {emo.label}
                      </span>
                    </div>

                    {/* Radio Options Container (2-col grid on mobile, inline columns on desktop) */}
                    <div className="grid grid-cols-2 gap-2 sm:contents">
                      {/* Radio Option 1: Eher wahrscheinlich */}
                      <div className="sm:col-span-3">
                        <button
                          type="button"
                          role="radio"
                          aria-checked={isLikely}
                          disabled={isLocked}
                          onClick={() => handleToggleProbability(emo.id, "likely")}
                          className={`w-full min-h-[44px] flex items-center justify-center gap-1.5 sm:gap-2.5 py-2.5 px-2 sm:px-3 rounded-xl border text-[12px] sm:text-[13px] font-bold transition-all cursor-pointer ${
                            isLikely
                              ? "border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs ring-2 ring-emerald-500/30"
                              : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-700"
                          } ${isLocked ? "opacity-60 cursor-not-allowed" : ""}`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 rounded-full border items-center justify-center transition-all ${
                              isLikely
                                ? "border-emerald-600 bg-emerald-600"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isLikely && (
                              <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            )}
                          </span>
                          <span className="truncate">
                            <span className="hidden xs:inline">Eher </span>wahrscheinlich
                          </span>
                        </button>
                      </div>

                      {/* Radio Option 2: Eher unwahrscheinlich */}
                      <div className="sm:col-span-3">
                        <button
                          type="button"
                          role="radio"
                          aria-checked={isUnlikely}
                          disabled={isLocked}
                          onClick={() => handleToggleProbability(emo.id, "unlikely")}
                          className={`w-full min-h-[44px] flex items-center justify-center gap-1.5 sm:gap-2.5 py-2.5 px-2 sm:px-3 rounded-xl border text-[12px] sm:text-[13px] font-bold transition-all cursor-pointer ${
                            isUnlikely
                              ? "border-slate-700 bg-slate-100 text-slate-900 shadow-xs ring-2 ring-slate-400/30"
                              : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-700"
                          } ${isLocked ? "opacity-60 cursor-not-allowed" : ""}`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 rounded-full border items-center justify-center transition-all ${
                              isUnlikely
                                ? "border-slate-700 bg-slate-700"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isUnlikely && (
                              <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            )}
                          </span>
                          <span className="truncate">
                            <span className="hidden xs:inline">Eher </span>unwahrscheinlich
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Validation Warning Alert */}
        {validationWarning && (
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-[13.5px] text-amber-900 font-semibold flex items-center gap-2.5 animate-shake shadow-xs">
            <span className="text-[16px]">⚠️</span>
            <span>{validationWarning}</span>
          </div>
        )}
      </div>
    </main>

    {/* ─── Sticky Bottom Action Footer (Always Anchored with Safe Area) ─── */}
    <footer className="shrink-0 border-t border-slate-200/90 bg-white/95 backdrop-blur-md px-3 sm:px-8 py-2.5 sm:py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.06)] z-30">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Answer status on left */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
              isFullyAnswered
                ? "bg-emerald-500 animate-pulse"
                : answeredCount > 0
                ? "bg-amber-400"
                : "bg-slate-300"
            }`}
          />
          <span className="text-xs font-bold text-slate-700 truncate">
            {isFullyAnswered ? (
              <span className="text-emerald-700">5 von 5 Emotionen bewertet ✓</span>
            ) : answeredCount > 0 ? (
              <span className="text-amber-700">Noch {5 - answeredCount} von 5 Emotionen offen</span>
            ) : (
              <span className="text-slate-500">Noch keine Emotionen bewertet</span>
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
              onClick={handleSubmit}
              className="min-h-[42px] px-4 sm:px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-[13px] shadow-xs active:scale-98 transition-all cursor-pointer"
            >
              Simulation abschließen ✓
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="min-h-[42px] px-4 sm:px-6 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs sm:text-[13px] shadow-xs active:scale-98 transition-all cursor-pointer flex items-center gap-1.5"
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
