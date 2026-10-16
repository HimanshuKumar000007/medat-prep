import React, { useMemo, useState } from "react";
import type { SimulatorQuestionProp } from "./MedatQuestionWorkspace";
import { isEeFullyAnswered } from "../data/questions/ee/types";
import { isSeFullyAnswered } from "../data/questions/se/types";

interface MedatQuestionPaletteProps {
  questions: SimulatorQuestionProp[];
  currentIndex: number;
  answers: Record<string, number>;
  marked: Set<string>;
  timedOutIds?: Set<string>;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  onSelectQuestion: (index: number) => void;
  onRequestSubmit: () => void;
}

export function MedatQuestionPalette({
  questions,
  currentIndex,
  answers,
  marked,
  timedOutIds,
  isOpenMobile = false,
  onCloseMobile,
  onSelectQuestion,
  onRequestSubmit,
}: MedatQuestionPaletteProps) {
  const total = questions.length;
  const answeredCount = useMemo(() => {
    return questions.filter((q) => {
      const ans = answers[q.id];
      if (ans === undefined) return false;
      const isEe = Boolean((q as any).eeData || q.subjectId === "sek-emo-rec" || q.chapterId === "sek-rec-face");
      if (isEe) return isEeFullyAnswered(ans);
      const isSe = Boolean((q as any).seData || q.subjectId === "sek-soc-dec" || q.chapterId === "sek-dec-ethics" || q.chapterId === "sek-soc-dec");
      if (isSe) return isSeFullyAnswered(ans);
      return true;
    }).length;
  }, [questions, answers]);

  const markedCount = marked.size;
  const unansweredCount = Math.max(0, total - answeredCount);
  const percentage = Math.round((answeredCount / Math.max(1, total)) * 100);

  // Discipline / Section helper for BMS and multi-part tests
  const getDiscipline = (q: SimulatorQuestionProp): string => {
    const s = (q.subjectId || "").toLowerCase();
    const c = (q.chapterId || "").toLowerCase();
    const t = (q.topic || "").toLowerCase();
    if (s === "bio" || c.startsWith("bio") || t.includes("biologie")) return "Biologie";
    if (s === "chem" || c.startsWith("chem") || t.includes("chemie")) return "Chemie";
    if (s === "phys" || c.startsWith("phys") || t.includes("physik")) return "Physik";
    if (s === "math" || c.startsWith("math") || t.includes("mathe")) return "Mathematik";
    return q.section || "BMS";
  };

  const availableFilters = useMemo(() => {
    // For TV (Textverständnis, 12 questions):
    // Do NOT show taxonomy or concept filters in the palette.
    // The palette should directly show the clean 12-question navigation grid (01..12).
    const isTvSession = questions.some((q) => q.section === "TV" || Boolean(q.passage));
    if (isTvSession) {
      return [];
    }

    // Check if questions span multiple BMS disciplines (Bio, Chem, Phys, Math)
    const discSet = new Set<string>();
    questions.forEach((q) => {
      discSet.add(getDiscipline(q));
    });
    const disciplines = Array.from(discSet);
    if (disciplines.length > 1) {
      return disciplines;
    }

    // Fallback to section codes if not multi-discipline
    const secSet = new Set<string>();
    questions.forEach((q) => {
      if (q.section && q.section !== "TV") secSet.add(q.section);
    });
    return Array.from(secSet);
  }, [questions]);

  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "UNANSWERED" | "MARKED">("ALL");

  const filteredQuestionIndices = useMemo(() => {
    return questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => {
        if (activeFilter !== "ALL") {
          const disc = getDiscipline(q);
          if (disc !== activeFilter && q.section !== activeFilter && q.topic !== activeFilter) {
            return false;
          }
        }
        if (statusFilter === "UNANSWERED") {
          if (answers[q.id] !== undefined) return false;
        } else if (statusFilter === "MARKED") {
          if (!marked.has(q.id)) return false;
        }
        return true;
      });
  }, [questions, activeFilter, statusFilter, answers, marked]);

  const nextUnansweredIndex = useMemo(() => {
    return questions.findIndex((q) => answers[q.id] === undefined);
  }, [questions, answers]);

  const isTv = questions.length <= 16 || questions[0]?.section === "TV";

  const renderGrid = () => (
    <div className={`grid ${isTv ? "grid-cols-4" : "grid-cols-5"} gap-2 p-1.5`}>
      {filteredQuestionIndices.map(({ q, idx }) => {
        const isCurrent = idx === currentIndex;
        const isEe = Boolean((q as any).eeData || q.subjectId === "sek-emo-rec" || q.chapterId === "sek-rec-face");
        const isSe = Boolean((q as any).seData || q.subjectId === "sek-soc-dec" || q.chapterId === "sek-dec-ethics" || q.chapterId === "sek-soc-dec");
        const hasAns = answers[q.id] !== undefined;
        const isFullyAns = hasAns && (!isEe || isEeFullyAnswered(answers[q.id])) && (!isSe || isSeFullyAnswered(answers[q.id]));
        const isIncomplete = (isEe || isSe) && hasAns && answers[q.id] > 0 && !isFullyAns;
        const isAnswered = isFullyAns;
        const isMarked = marked.has(q.id);
        const isTimedOut = timedOutIds?.has(q.id) && !hasAns;

        let buttonStyle =
          "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50";

        if (isTimedOut) {
          buttonStyle = "bg-rose-50/90 text-rose-800 border-rose-300/80 font-medium";
        } else if (isFullyAns) {
          buttonStyle = "bg-slate-900 text-white border-slate-900 font-bold shadow-2xs";
        } else if (isIncomplete) {
          buttonStyle = "bg-amber-50 text-amber-900 border-2 border-dashed border-amber-400 font-bold";
        }

        if (isMarked) {
          buttonStyle = isFullyAns
            ? "bg-slate-900 text-white border-amber-400 ring-2 ring-amber-400/50"
            : isIncomplete
            ? "bg-amber-100 text-amber-950 border-amber-500 ring-2 ring-amber-400/50"
            : "bg-amber-50 text-amber-950 border-amber-300 ring-1 ring-amber-400";
        }

        if (isCurrent) {
          buttonStyle = isFullyAns
            ? "bg-slate-900 text-white border-2 border-slate-900 ring-2 ring-offset-1 ring-slate-900 font-black shadow-xs"
            : isIncomplete
            ? "border-2 border-amber-600 bg-amber-50 text-amber-950 font-black ring-2 ring-offset-1 ring-amber-600 shadow-xs"
            : "border-2 border-slate-900 bg-white text-slate-900 font-black shadow-xs";
        }

        const formattedNum = String(idx + 1).padStart(2, "0");

        return (
          <button
            key={q.id}
            onClick={() => {
              onSelectQuestion(idx);
              if (onCloseMobile) onCloseMobile();
            }}
            className={`relative flex h-10.5 sm:h-10 w-full min-h-[44px] items-center justify-center rounded-xl text-[13px] sm:text-[12.5px] font-mono tabular-nums transition-all duration-150 active:scale-95 ${buttonStyle}`}
            aria-label={`Zu Frage ${idx + 1} springen`}
            title={`Frage ${idx + 1}: ${
              isTimedOut ? "Zeit abgelaufen (0 Pkt)" : isFullyAns ? "Beantwortet" : isIncomplete ? "Unvollständig (nicht alle 5 bewertet)" : "Offen"
            }${isMarked ? " (Vorgemerkt)" : ""}`}
          >
            <span>{formattedNum}</span>

            {/* Amber dot for marked questions */}
            {isMarked && (
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
            )}

            {/* Rose clock dot for timed-out questions */}
            {isTimedOut && !isMarked && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[8px] text-white ring-1 ring-white" title="Zeit abgelaufen">
                ⏱
              </span>
            )}
          </button>
        );
      })}
    </div>
  );


  return (
    <>
      {/* =================================================================
         DESKTOP SIDEBAR PANEL (4K Studio Visual Quality)
         ================================================================= */}
      <aside className="hidden lg:flex w-72 xl:w-80 flex-col justify-between border-l border-slate-200/90 bg-white p-5 space-y-6 select-none shrink-0 antialiased shadow-2xs">
        <div className="space-y-4">
          {/* Header with Title & Percentage Badge */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-[12.5px] font-black uppercase tracking-wider text-slate-900">
                Fragen-Übersicht
              </h3>
              <p className="text-[11.5px] text-slate-500 font-medium mt-0.5">
                {answeredCount} von {total} bearbeitet
              </p>
            </div>
            <span className="rounded-xl bg-slate-100 text-slate-900 border border-slate-200/80 px-2.5 py-1 text-[11.5px] font-mono font-black shadow-2xs">
              {percentage}%
            </span>
          </div>

          {/* Mini progress bar */}
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-900 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Section / Discipline Selector if multi-discipline */}
          {availableFilters.length > 1 && (
            <div className="flex flex-wrap gap-1 p-1 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] font-bold">
              <button
                onClick={() => setActiveFilter("ALL")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activeFilter === "ALL"
                    ? "bg-white text-slate-900 shadow-2xs font-black"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Alle ({total})
              </button>
              {availableFilters.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setActiveFilter(sec)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeFilter === sec
                      ? "bg-white text-slate-900 shadow-2xs font-black"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          )}

          {/* Status Legend */}
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 px-0.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
              <span>Beantwortet ({answeredCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span>Vorgemerkt ({markedCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-slate-300 bg-white" />
              <span>Offen ({unansweredCount})</span>
            </div>
          </div>

          {/* 5-Column Question Grid */}
          <div className="max-h-[calc(100vh-300px)] overflow-y-auto p-0.5">
            {renderGrid()}
          </div>

        </div>

        {/* Bottom Submission Action Card */}
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={onRequestSubmit}
            className="w-full rounded-2xl border border-slate-200 bg-white hover:bg-slate-900 text-slate-800 hover:text-white py-3.5 px-4 text-center font-black text-[13px] transition-all duration-150 shadow-2xs active:scale-[0.98]"
          >
            Prüfung abgeben {unansweredCount > 0 ? `(${unansweredCount} offen)` : "✓"}
          </button>
        </div>
      </aside>

      {/* =================================================================
         MOBILE DRAWER PALETTE
         ================================================================= */}
      {isOpenMobile && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/60 backdrop-blur-xs animate-fade-in"
          onClick={onCloseMobile}
        >
          <div
            className="max-h-[85vh] rounded-t-3xl border-t border-slate-200 bg-white p-4.5 sm:p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-3.5 shadow-2xl flex flex-col antialiased animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Drag Handle */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto -mt-2 mb-1 shrink-0" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div>
                <h3 className="text-[14px] font-black uppercase tracking-wider text-slate-900">
                  Fragen-Übersicht
                </h3>
                <p className="text-[12px] text-slate-500 font-medium">
                  {answeredCount} von {total} beantwortet ({percentage}%)
                </p>
              </div>
              <button
                onClick={onCloseMobile}
                className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 active:scale-95 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Mobile Filter Tabs (Disciplines & Status) */}
            <div className="space-y-2">
              {/* Discipline Tabs: Horizontal scrollable chips for BMS (Bio, Chem, Phys, Math) */}
              {availableFilters.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveFilter("ALL")}
                    className={`px-3 py-1.5 rounded-xl shrink-0 transition-all cursor-pointer ${
                      activeFilter === "ALL"
                        ? "bg-slate-900 text-white font-black shadow-2xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    Alle ({total})
                  </button>
                  {availableFilters.map((disc) => (
                    <button
                      key={disc}
                      type="button"
                      onClick={() => setActiveFilter(disc)}
                      className={`px-3 py-1.5 rounded-xl shrink-0 transition-all cursor-pointer ${
                        activeFilter === disc
                          ? "bg-slate-900 text-white font-black shadow-2xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {disc}
                    </button>
                  ))}
                </div>
              )}

              {/* Status Filter Tabs (Alle, Offen, Vorgemerkt) */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/70 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setStatusFilter("ALL")}
                  className={`flex-1 py-1 rounded-lg transition-all text-center cursor-pointer ${
                    statusFilter === "ALL"
                      ? "bg-white text-slate-900 font-black shadow-2xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Alle ({total})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("UNANSWERED")}
                  className={`flex-1 py-1 rounded-lg transition-all text-center cursor-pointer ${
                    statusFilter === "UNANSWERED"
                      ? "bg-white text-slate-900 font-black shadow-2xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Offen ({unansweredCount})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("MARKED")}
                  className={`flex-1 py-1 rounded-lg transition-all text-center cursor-pointer ${
                    statusFilter === "MARKED"
                      ? "bg-white text-amber-900 font-black shadow-2xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  ★ Gemerkt ({markedCount})
                </button>
              </div>
            </div>

            {/* Quick Action: Jump to next unanswered question */}
            {nextUnansweredIndex !== -1 && unansweredCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  onSelectQuestion(nextUnansweredIndex);
                  if (onCloseMobile) onCloseMobile();
                }}
                className="w-full min-h-[44px] rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/90 text-amber-900 py-2 px-3 text-[11.5px] font-bold transition-all flex items-center justify-between active:scale-98 cursor-pointer"
              >
                <span>Nächste offene Frage ansteuern:</span>
                <span className="font-mono font-black underline">Frage {nextUnansweredIndex + 1} →</span>
              </button>
            )}

            {/* Status Legend */}
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 px-0.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-900" />
                <span>Beantwortet ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Vorgemerkt ({markedCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full border border-slate-300 bg-white" />
                <span>Offen ({unansweredCount})</span>
              </div>
            </div>

            {/* Scrollable Question Grid */}
            <div className="flex-1 overflow-y-auto max-h-[46vh] p-0.5">
              {renderGrid()}
            </div>

            {/* Bottom Submission Action Button */}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  if (onCloseMobile) onCloseMobile();
                  onRequestSubmit();
                }}
                className="w-full min-h-[48px] rounded-2xl bg-slate-900 hover:bg-slate-800 text-white py-3.5 text-[13.5px] font-black shadow-md active:scale-[0.98] cursor-pointer"
              >
                Prüfung abgeben {unansweredCount > 0 ? `(${unansweredCount} offen)` : "✓"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
