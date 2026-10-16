import React, { useMemo } from "react";
import type { SeQuestionData, SeConsiderationKey, SeRank } from "../../data/questions/se/types";
import {
  decodeSeRanking,
  encodeSeRanking,
  isSeRankingValid,
  countSeRankedConsiderations,
  SE_CONSIDERATION_KEYS,
  SE_RANKS,
} from "../../data/questions/se/types";
import { DIconBookmark, DIconBookmarkFilled } from "../../dashboard/icons";

interface SeQuestionWorkspaceProps {
  seData: SeQuestionData;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined;
  isMarked: boolean;
  isLocked?: boolean;
  lockedReason?: string;
  hidePrevButton?: boolean;
  onSelectOption: (code: number) => void;
  onClearOption?: () => void;
  onToggleMark: () => void;
  onPrev: () => void;
  onNext: () => void;
  onRequestSubmit: () => void;
}

export const SeQuestionWorkspace: React.FC<SeQuestionWorkspaceProps> = ({
  seData,
  currentIndex,
  totalQuestions,
  selectedOption,
  isMarked = false,
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
  const question = seData;
  const questionNumber = currentIndex + 1;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const currentAnswerCode = selectedOption;
  const onAnswerChange = onSelectOption;
  const onSubmit = onRequestSubmit;

  const ranking = useMemo(() => {
    return decodeSeRanking(currentAnswerCode);
  }, [currentAnswerCode]);

  const rankedCount = useMemo(() => {
    return countSeRankedConsiderations(currentAnswerCode);
  }, [currentAnswerCode]);

  const isValid = useMemo(() => {
    return isSeRankingValid(ranking);
  }, [ranking]);

  /**
   * Smart Assignment with Automatic Swapping:
   * Prevents any duplicate ranks from occurring in the state.
   * If rank R is assigned to consideration key, and another consideration already had rank R:
   * they automatically swap ranks if key already had a rank, or the previous holder is cleared.
   */
  const handleSelectRank = (targetKey: SeConsiderationKey, rank: SeRank) => {
    const currentRankOfTarget = ranking[targetKey];

    // If user clicks the rank already assigned to this item, unassign it (toggle off)
    if (currentRankOfTarget === rank) {
      const nextRanking = { ...ranking, [targetKey]: 0 };
      onAnswerChange(encodeSeRanking(nextRanking));
      return;
    }

    const nextRanking = { ...ranking };

    // Find if another consideration currently holds this rank
    const otherKeyHoldingRank = SE_CONSIDERATION_KEYS.find(
      (k) => k !== targetKey && ranking[k] === rank
    );

    if (otherKeyHoldingRank) {
      // Swap: the other consideration gets the current rank of targetKey (can be 0)
      nextRanking[otherKeyHoldingRank] = currentRankOfTarget || 0;
    }

    nextRanking[targetKey] = rank;
    onAnswerChange(encodeSeRanking(nextRanking));
  };

  const handleReset = () => {
    onAnswerChange(0);
  };

  // Touch swipe gestures for mobile navigation
  const touchStartXRef = React.useRef<number | null>(null);
  const touchStartYRef = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement)?.closest("button")) return;
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
        if (!isLastQuestion) {
          onNext();
        }
      } else {
        if (currentIndex > 0 && onPrev) {
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
      <main className="flex-1 overflow-y-auto px-3.5 sm:px-6 lg:px-8 py-3.5 sm:py-6 touch-pan-y">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 pb-6">
          {/* ─── Top Control Bar ─── */}
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-2xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-black tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-200/80 px-2.5 py-1 rounded-lg shrink-0">
                <span className="sm:hidden">SEK · SE</span>
                <span className="hidden sm:inline">SEK · Soziales Entscheiden (SE)</span>
              </span>
              <span className="text-slate-400 font-mono text-xs hidden xs:inline">|</span>
              <span className="text-slate-800 font-bold text-xs sm:text-sm shrink-0">
                Aufgabe {String(questionNumber).padStart(2, "0")} von {String(totalQuestions).padStart(2, "0")}
              </span>
              {question.decisionContext && (
                <span className="hidden md:inline-block text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md truncate max-w-[200px]">
                  {question.decisionContext}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {onToggleMark && (
                <button
                  type="button"
                  onClick={onToggleMark}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    isMarked
                      ? "bg-amber-50 text-amber-900 border-amber-300 ring-2 ring-amber-400/30"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                  title="Für spätere Durchsicht markieren"
                >
                  {isMarked ? (
                    <>
                      <DIconBookmarkFilled className="w-3.5 h-3.5 text-amber-500" />
                      <span className="hidden sm:inline">Markiert</span>
                    </>
                  ) : (
                    <>
                      <DIconBookmark className="w-3.5 h-3.5 text-slate-400" />
                      <span className="hidden sm:inline">Markieren</span>
                    </>
                  )}
                </button>
              )}

              {rankedCount > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 px-2.5 py-1.5 rounded-lg transition-colors hover:bg-slate-100 cursor-pointer"
                  title="Reihung für diese Aufgabe leeren"
                >
                  Zurücksetzen
                </button>
              )}
            </div>
          </div>

          {/* ─── Situation Card ─── */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-black tracking-widest uppercase text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/50">
                SITUATION
              </span>
              <span
                className={`text-xs font-black px-2.5 py-0.5 rounded-full border ${
                  question.difficulty === "Leicht"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : question.difficulty === "Mittel"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}
              >
                {question.difficulty}
              </span>
            </div>

            <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
              {question.scenario}
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500">
              <div className="font-semibold text-slate-700">
                Wie wichtig sollten die folgenden Überlegungen für die Entscheidungsfindung sein?
              </div>
              <div className="font-mono text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/70">
                1 = am wichtigsten · 5 = am wenigsten wichtig
              </div>
            </div>
          </div>

          {/* ─── DESKTOP VIEW: Ranking Matrix Table ─── */}
          <div className="hidden md:block bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
            <div className="bg-slate-50/80 px-6 py-3.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Überlegung (A–E)</span>
              <div className="flex items-center gap-8 pr-4">
                <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  Rang (1 = wichtigste · 5 = unwichtigste)
                </span>
                <div className="flex items-center gap-6 font-mono text-center font-black text-slate-700">
                  <span className="w-8">1</span>
                  <span className="w-8">2</span>
                  <span className="w-8">3</span>
                  <span className="w-8">4</span>
                  <span className="w-8">5</span>
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {question.considerations.map((item) => {
                const currentRank = ranking[item.id];

                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between px-6 py-4 transition-colors ${
                      currentRank > 0 ? "bg-teal-50/20" : "hover:bg-slate-50/40"
                    }`}
                  >
                    <div className="flex items-start gap-3.5 pr-6 max-w-xl">
                      <span className="font-mono text-xs font-black text-slate-700 bg-slate-100 border border-slate-200 px-2 py-1 rounded-lg shrink-0 mt-0.5">
                        {item.id}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 leading-snug">
                        {item.text}
                      </span>
                    </div>

                    <div className="flex items-center gap-6 shrink-0 pr-4">
                      {SE_RANKS.map((r) => {
                        const isSelected = currentRank === r;

                        return (
                          <button
                            key={r}
                            type="button"
                            onClick={() => handleSelectRank(item.id, r)}
                            aria-label={`Überlegung ${item.id} Rang ${r}`}
                            className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "bg-teal-600 text-white border-teal-600 ring-2 ring-teal-400/40 shadow-xs scale-105"
                                : "bg-white text-slate-600 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                            }`}
                          >
                            {isSelected ? r : ""}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── MOBILE VIEW: Consideration Cards with Ranking Selectors ─── */}
          <div className="md:hidden space-y-3">
            <div className="bg-slate-100 rounded-xl p-2.5 text-center text-xs font-semibold text-slate-600">
              1 = am wichtigsten · 5 = am wenigsten wichtig
            </div>

            {question.considerations.map((item) => {
              const currentRank = ranking[item.id];

              return (
                <div
                  key={item.id}
                  className={`bg-white border rounded-2xl p-4 space-y-3 transition-colors ${
                    currentRank > 0 ? "border-teal-300 bg-teal-50/20" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-start gap-2.5 flex-1 min-w-0">
                      <span className="font-mono text-xs font-black text-slate-700 bg-slate-100 border border-slate-200 px-2 py-1 rounded-lg shrink-0">
                        {item.id}
                      </span>
                      <p className="text-sm font-semibold text-slate-800 leading-snug">{item.text}</p>
                    </div>
                    {/* Visual Rank Pill Status */}
                    {currentRank > 0 ? (
                      <span className="shrink-0 font-mono text-[11px] font-black text-teal-800 bg-teal-100 border border-teal-300 px-2 py-0.5 rounded-lg shadow-2xs">
                        Rang {currentRank}
                      </span>
                    ) : (
                      <span className="shrink-0 font-mono text-[10.5px] font-bold text-slate-400 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-lg">
                        Offen
                      </span>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-500 shrink-0">Rang wählen:</span>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      {SE_RANKS.map((r) => {
                        const isSelected = currentRank === r;

                        return (
                          <button
                            type="button"
                            onClick={() => handleSelectRank(item.id, r)}
                            className={`w-9 h-9 xs:w-9.5 xs:h-9.5 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center font-mono text-xs font-bold transition-all cursor-pointer min-h-[38px] min-w-[38px] active:scale-95 ${
                              isSelected
                                ? "bg-teal-600 text-white border-teal-600 ring-2 ring-teal-400/40 shadow-xs scale-105"
                                : "bg-white text-slate-700 border-slate-200 active:bg-slate-100 hover:border-slate-300"
                            }`}
                          >
                            {r}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Incomplete warning tooltip if user has not ranked all 5 */}
          {!isValid && rankedCount > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-center gap-2">
              <span className="font-bold">Hinweis:</span>
              <span>Bitte ordne jeder Überlegung einen eindeutigen Rang von 1 bis 5 zu, um die Aufgabe voll zu werten.</span>
            </div>
          )}
        </div>
      </main>

      {/* ─── Sticky Bottom Action Footer (Always Anchored with Safe Area) ─── */}
      <footer className="shrink-0 border-t border-slate-200/90 bg-white/95 backdrop-blur-md px-3 sm:px-8 py-2.5 sm:py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.06)] z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          {/* Status indicator pill on left */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                isValid ? "bg-emerald-500 animate-pulse" : rankedCount > 0 ? "bg-amber-400" : "bg-slate-300"
              }`}
            />
            <span className="text-xs font-bold text-slate-700 truncate">
              {isValid ? (
                <span className="text-emerald-700">5 von 5 Rängen vollständig vergeben ✓</span>
              ) : rankedCount > 0 ? (
                <span className="text-amber-700">
                  Noch {5 - rankedCount} von 5 Rängen offen
                </span>
              ) : (
                <span className="text-slate-500">Noch keine Ränge vergeben</span>
              )}
            </span>
          </div>

          {/* Navigation Action Buttons on right */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {!hidePrevButton && (
              <button
                type="button"
                onClick={onPrev}
                disabled={currentIndex === 0}
                aria-label="Zur vorherigen Aufgabe"
                className={`min-h-[42px] px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-bold border transition-all cursor-pointer ${
                  currentIndex === 0
                    ? "border-slate-100 bg-[#F0F4F8] text-[#94A3B8] cursor-not-allowed"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:scale-98 shadow-2xs"
                }`}
              >
                ← Vorherige
              </button>
            )}

            {isLastQuestion ? (
              <button
                type="button"
                onClick={onSubmit}
                className={`min-h-[42px] px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-[13px] font-black shadow-xs transition-all cursor-pointer ${
                  isValid
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                Simulation abgeben ✓
              </button>
            ) : (
              <button
                type="button"
                onClick={onNext}
                className="min-h-[42px] px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-[13px] font-black bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all active:scale-98 cursor-pointer flex items-center gap-1.5"
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
