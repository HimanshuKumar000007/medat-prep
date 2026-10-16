import React, { useState, useEffect, useRef } from "react";
import type { GmRecallQuestion } from "../../data/questions/gm/types";
import { IconClock, IconArrowRight, IconClose, IconBrain } from "../../lib/icons";
import { MedatScratchpadModal } from "../MedatConfirmModals";

export interface GmRecallWorkspaceProps {
  questions: GmRecallQuestion[];
  simTitle?: string;
  isTimed?: boolean;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  initialAnswers?: Record<string, number>;
  onFinishRecall: (answers: Record<string, number>, elapsedSeconds: number) => void;
  onAbort?: () => void;
}

export const GmRecallWorkspace: React.FC<GmRecallWorkspaceProps> = ({
  questions,
  simTitle = "Gedächtnis & Merkfähigkeit",
  isTimed = true,
  isFullscreen = false,
  onToggleFullscreen,
  initialAnswers = {},
  onFinishRecall,
  onAbort,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>(initialAnswers);
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [remainingSeconds, setRemainingSeconds] = useState(15 * 60); // 15 minutes = 900s
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showMobilePalette, setShowMobilePalette] = useState(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);

  const startTimestampRef = useRef<number>(Date.now());
  const hasFinishedRef = useRef<boolean>(false);
  const onFinishRecallRef = useRef(onFinishRecall);
  const answersRef = useRef(answers);

  useEffect(() => {
    onFinishRecallRef.current = onFinishRecall;
  });

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // 15-minute countdown and elapsed counter (wall-clock timestamp based: drift-free, indestructible)
  useEffect(() => {
    const totalDuration = 15 * 60; // 900 seconds

    const tick = () => {
      const now = Date.now();
      const actualElapsed = Math.max(0, Math.floor((now - startTimestampRef.current) / 1000));
      setElapsedSeconds(actualElapsed);

      if (isTimed) {
        const remaining = Math.max(0, totalDuration - actualElapsed);
        setRemainingSeconds(remaining);
        if (remaining <= 0 && !hasFinishedRef.current) {
          hasFinishedRef.current = true;
          onFinishRecallRef.current(answersRef.current, totalDuration);
        }
      }
    };

    tick();
    const timer = setInterval(tick, 250);
    return () => clearInterval(timer);
  }, [isTimed]);

  const currentQ = questions[currentIndex] || questions[0];
  const totalCount = questions.length;
  const answeredCount = Object.keys(answers).length;
  const isAnswered = currentQ.id in answers;
  const isMarked = markedForReview.has(currentQ.id);

  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const formattedCountdown = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  const elapsedMins = Math.floor(elapsedSeconds / 60);
  const elapsedSecs = elapsedSeconds % 60;
  const formattedElapsed = `${String(elapsedMins).padStart(2, "0")}:${String(elapsedSecs).padStart(2, "0")}`;

  const displayTime = isTimed ? formattedCountdown : formattedElapsed;
  const isWarning = isTimed && remainingSeconds <= 300 && remainingSeconds > 60; // 5 min warning
  const isCritical = isTimed && remainingSeconds <= 60; // 1 min critical

  const handleSelectOption = (optIdx: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIdx,
    }));
  };

  const handleClearOption = () => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });
  };

  const toggleMark = () => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id);
      } else {
        next.add(currentQ.id);
      }
      return next;
    });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCount - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Touch swipe gestures for mobile navigation between questions
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
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
        if (currentIndex < totalCount - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const optionKeys: ("A" | "B" | "C" | "D" | "E")[] = ["A", "B", "C", "D", "E"];

  const getCategoryBadgeLabel = (cat: string) => {
    switch (cat) {
      case "name":
        return "Name";
      case "birthDate":
        return "Geburtstag";
      case "medication":
        return "Medikamente";
      case "bloodGroup":
        return "Blutgruppe";
      case "allergies":
        return "Allergien";
      case "idNumber":
        return "Ausweis-Nr.";
      case "country":
        return "Land";
      case "photo":
        return "Porträt / Person";
      case "cross_card":
      default:
        return "Kreuzabfrage";
    }
  };

  return (
    <div className="h-full w-full bg-[#F8FAFC] text-slate-900 flex flex-col font-sans select-none overflow-hidden">
      {/* ─── EXAM TOPBAR ─── */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 shadow-2xs">
        {/* Left: Badges */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink min-w-0">
          <span className="font-bold text-[11px] sm:text-[13px] text-slate-800 truncate">
            <span className="sm:hidden">KFF · GM</span>
            <span className="hidden sm:inline">KFF · Gedächtnis & Merkfähigkeit</span>
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl bg-purple-50 text-purple-800 border border-purple-200/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shrink-0">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="hidden xs:inline">ABFRAGEPHASE</span>
            <span className="xs:hidden">ABFRAGE</span>
          </span>
          <span className="hidden md:inline font-mono font-bold text-[12px] text-slate-600 truncate">
            {simTitle}
          </span>
        </div>

        {/* Center: Live 15:00 Timer / Elapsed Stopwatch */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            translate="no"
            className={`notranslate inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl font-mono text-[14px] sm:text-[18px] font-black border tracking-wider transition-colors ${
              isCritical
                ? "bg-red-50 border-red-300 text-red-700 animate-pulse"
                : isWarning
                ? "bg-amber-50 border-amber-300 text-amber-800"
                : "bg-slate-100 border-slate-200 text-slate-800"
            }`}
          >
            <IconClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-75" />
            <span>{displayTime}</span>
            {!isTimed && (
              <span className="text-[10px] sm:text-[11px] font-sans font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                Übung
              </span>
            )}
          </div>
        </div>

        {/* Right: Fullscreen / Review Marker / Abort / Submit */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Mobile Sheet Trigger */}
          <button
            onClick={() => setShowMobilePalette(true)}
            className="lg:hidden px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-[11px] sm:text-[12px] font-bold transition-all shadow-2xs flex items-center gap-1"
            title="Fragenübersicht öffnen"
          >
            <span className="font-mono">{currentIndex + 1}/{totalCount}</span>
            <span className="text-[10px]">▼</span>
          </button>

          <button
            onClick={toggleMark}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-[12px] font-bold border transition-all flex items-center gap-1 ${
              isMarked
                ? "bg-amber-100 border-amber-300 text-amber-900 shadow-2xs"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
            title={isMarked ? "Markierung aufheben" : "Für Review markieren"}
          >
            <span>{isMarked ? "★" : "☆"}</span>
            <span className="hidden sm:inline">{isMarked ? "Markiert" : "Review"}</span>
          </button>

          <button
            onClick={() => setIsScratchpadOpen(true)}
            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-[11px] sm:text-[12px] font-bold transition-all shadow-2xs flex items-center gap-1 cursor-pointer"
            title="Notizblatt öffnen (in der Abrufphase offiziell erlaubt)"
          >
            <span>📝</span>
            <span className="hidden sm:inline">Notizen</span>
          </button>

          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-[12px] font-bold transition-all shadow-2xs"
              title="Vollbild umschalten"
            >
              <span className="sm:hidden">{isFullscreen ? "🗗" : "⛶"}</span>
              <span className="hidden sm:inline">{isFullscreen ? "🗗 Fenster" : "⛶ Vollbild"}</span>
            </button>
          )}

          {onAbort && (
            <button
              onClick={onAbort}
              className="hidden sm:inline px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-600 hover:text-slate-900 text-[12px] font-bold transition-all"
            >
              Abbrechen
            </button>
          )}

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white text-[11.5px] sm:text-[12.5px] font-black tracking-wide transition-all shadow-sm"
          >
            <span className="hidden sm:inline">Abgeben ({answeredCount}/{totalCount})</span>
            <span className="sm:hidden">Abgeben</span>
          </button>
        </div>
      </header>

      {/* Main Container with Question Area & Palette */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Question Workspace */}
        <main
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex justify-center touch-pan-y"
        >
          <div className="max-w-2xl w-full space-y-4 sm:space-y-6">
            {/* Question Header Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 sm:pb-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-mono font-black text-slate-900 text-[13px] sm:text-[14px]">
                    Aufgabe {currentIndex + 1} von {totalCount}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[10.5px] sm:text-[11px] font-bold">
                    {getCategoryBadgeLabel(currentQ.category)}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10.5px] sm:text-[11px] font-bold">
                    {currentQ.difficulty}
                  </span>
                </div>

                <div className="text-[10.5px] sm:text-[11px] font-semibold text-slate-400">
                  ~36 s / Frage
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-[16px] sm:text-[19px] font-bold text-slate-900 leading-relaxed">
                {currentQ.questionText}
              </h2>
            </div>

            {/* Answer Options A–E */}
            <div className="space-y-2 sm:space-y-2.5">
              {optionKeys.map((key, optIdx) => {
                const optText = currentQ.options[key];
                const isSelected = answers[currentQ.id] === optIdx;

                return (
                  <button
                    key={`opt-${currentQ.id}-${key}`}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 sm:gap-3.5 shadow-2xs group min-h-[48px] cursor-pointer active:scale-[0.99] ${
                      isSelected
                        ? "border-purple-600 bg-purple-50/70 ring-2 ring-purple-200"
                        : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 flex-1 min-w-0">
                      {/* Option Letter Key */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono font-black text-[13px] sm:text-[14px] flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-purple-600 text-white shadow-2xs"
                            : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                        }`}
                      >
                        {key}
                      </div>

                      {/* Option Text */}
                      <span
                        className={`text-[13.5px] sm:text-[15px] font-semibold leading-relaxed ${
                          isSelected ? "text-purple-950 font-bold" : "text-slate-800"
                        }`}
                      >
                        {optText}
                      </span>
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

            {/* Navigation & Controls Footer */}
            <div className="flex items-center justify-between pt-2 gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-xl border text-[12px] sm:text-[13px] font-bold transition-all cursor-pointer ${
                  currentIndex === 0
                    ? "border-slate-200 text-slate-400 bg-slate-100 cursor-not-allowed"
                    : "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 active:scale-95"
                }`}
              >
                ← <span className="hidden xs:inline">Vorherige</span>
              </button>

              <div className="flex items-center gap-2">
                {/* Mobile Palette Button in Footer */}
                <button
                  onClick={() => setShowMobilePalette(true)}
                  className="lg:hidden min-h-[44px] px-2.5 sm:px-3 py-1.5 rounded-xl border border-purple-200 bg-purple-50 text-purple-800 text-[11.5px] sm:text-[12px] font-mono font-bold flex items-center gap-1 active:scale-95 cursor-pointer"
                >
                  <span>{currentIndex + 1} / {totalCount}</span>
                  <span className="text-[10px]">▲</span>
                </button>

                {isAnswered && (
                  <button
                    onClick={handleClearOption}
                    className="min-h-[44px] text-[11.5px] sm:text-[12px] font-semibold text-slate-500 hover:text-red-600 transition-colors px-1.5 py-1 cursor-pointer"
                  >
                    <span className="hidden xs:inline">Auswahl </span>aufheben
                  </button>
                )}
              </div>

              {currentIndex < totalCount - 1 ? (
                <button
                  onClick={handleNext}
                  className="min-h-[44px] px-4 sm:px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[12.5px] sm:text-[13px] font-black transition-all shadow-sm flex items-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  <span><span className="hidden xs:inline">Nächste </span>Weiter</span>
                  <IconArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="min-h-[44px] px-4 sm:px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[12.5px] sm:text-[13px] font-black transition-all shadow-sm flex items-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  <span>Abschließen</span>
                  <IconArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              )}
            </div>
          </div>
        </main>

        {/* Right Palette (25 Questions Grid for Desktop) */}
        <aside className="hidden lg:block w-72 border-l border-slate-200 bg-white p-5 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <span>Fragen-Navigator</span>
            <span className="font-mono text-purple-700">
              {answeredCount} / {totalCount}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const answered = q.id in answers;
              const isCurrent = idx === currentIndex;
              const marked = markedForReview.has(q.id);

              return (
                <button
                  key={`nav-${q.id}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-9 rounded-xl font-mono text-[12px] font-black transition-all relative ${
                    isCurrent
                      ? "ring-2 ring-purple-600 ring-offset-1 bg-purple-600 text-white shadow-2xs"
                      : answered
                      ? "bg-purple-100 text-purple-900 border border-purple-200 font-bold"
                      : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {idx + 1}
                  {marked && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-400 border-2 border-white" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="pt-3 border-t border-slate-100 space-y-2 text-[11.5px] font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-purple-600" />
              <span>Aktuelle Frage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-purple-100 border border-purple-200" />
              <span>Beantwortet</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-200" />
              <span>Offen</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Für Review markiert</span>
            </div>
          </div>
        </aside>
      </div>

      {/* ─── MOBILE QUESTION PALETTE DRAWER (MODAL / BOTTOM-SHEET) ─── */}
      {showMobilePalette && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 w-full max-w-lg p-5 sm:p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl max-h-[85vh] overflow-y-auto space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <h4 className="font-black text-slate-900 text-[16px]">
                  Fragen-Navigator
                </h4>
                <span className="font-mono text-[12px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-200">
                  {answeredCount} / {totalCount} beantwortet
                </span>
              </div>
              <button
                onClick={() => setShowMobilePalette(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[12px] text-slate-500 font-medium">
              Tippe auf eine Aufgabennummer, um direkt dorthin zu springen:
            </p>

            <div className="grid grid-cols-5 gap-2.5">
              {questions.map((q, idx) => {
                const answered = q.id in answers;
                const isCurrent = idx === currentIndex;
                const marked = markedForReview.has(q.id);

                return (
                  <button
                    key={`mob-nav-${q.id}`}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowMobilePalette(false);
                    }}
                    className={`h-11 rounded-xl font-mono text-[13px] font-black transition-all relative flex items-center justify-center cursor-pointer ${
                      isCurrent
                        ? "ring-2 ring-purple-600 ring-offset-2 bg-purple-600 text-white shadow-sm"
                        : answered
                        ? "bg-purple-100 text-purple-900 border border-purple-200 font-bold"
                        : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    {idx + 1}
                    {marked && (
                      <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-amber-400 border-2 border-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11.5px] font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-purple-600" />
                <span>Aktuelle Frage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-purple-100 border border-purple-200" />
                <span>Beantwortet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-200" />
                <span>Offen</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Für Review markiert</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowMobilePalette(false)}
                className="w-full min-h-[44px] py-2.5 rounded-xl bg-slate-900 text-white text-[13px] font-bold cursor-pointer active:scale-98"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── SUBMISSION MODAL ─── */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] font-black text-slate-900">
                Abfragephase abgeben?
              </h4>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[14px] text-slate-600 leading-relaxed">
              Du hast <span className="font-mono font-bold text-slate-900">{answeredCount}</span> von <span className="font-mono font-bold text-slate-900">{totalCount}</span> Fragen beantwortet.
              {totalCount - answeredCount > 0 && (
                <span className="block mt-2 text-amber-700 font-medium">
                  ⚠️ Es sind noch {totalCount - answeredCount} Fragen unbeantwortet!
                </span>
              )}
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all text-[13px]"
              >
                Weiter bearbeiten
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  const finalElapsed = isTimed ? Math.max(1, 15 * 60 - remainingSeconds) : Math.max(1, elapsedSeconds);
                  onFinishRecall(answers, finalElapsed);
                }}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black transition-all text-[13px] shadow-sm"
              >
                Endgültig abgeben
              </button>
            </div>
          </div>
        </div>
      )}

      <MedatScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        taskTitle="Gedächtnis & Merkfähigkeit — Abrufphase"
        ruleNotice="ℹ️ Offizielle MedAT-Regel: In der Abrufphase (15 Min.) sind handschriftliche Notizen und Gedächtnisprotokolle zu den Allergieausweisen ausdrücklich gestattet."
      />
    </div>
  );
};
