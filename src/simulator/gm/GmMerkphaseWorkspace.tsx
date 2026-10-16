import React, { useState, useEffect, useRef } from "react";
import type { AllergyCard } from "../../data/questions/gm/types";
import { AllergyCardView } from "./AllergyCardView";
import { IconArrowRight, IconClock, IconClose } from "../../lib/icons";

export interface GmMerkphaseWorkspaceProps {
  cards: AllergyCard[];
  simTitle?: string;
  isTimed?: boolean;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onFinishMerkphase: (elapsedSeconds?: number) => void;
  onAbort?: () => void;
}

export const GmMerkphaseWorkspace: React.FC<GmMerkphaseWorkspaceProps> = ({
  cards,
  simTitle = "Gedächtnis & Merkfähigkeit",
  isTimed = true,
  isFullscreen = false,
  onToggleFullscreen,
  onFinishMerkphase,
  onAbort,
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(8 * 60); // 8 minutes = 480s
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const startTimestampRef = useRef<number>(Date.now());
  const hasFinishedRef = useRef<boolean>(false);
  const onFinishMerkphaseRef = useRef(onFinishMerkphase);

  useEffect(() => {
    onFinishMerkphaseRef.current = onFinishMerkphase;
  });

  // 8-minute countdown timer & elapsed tracker (wall-clock timestamp based: drift-free, indestructible)
  useEffect(() => {
    const totalDuration = 8 * 60; // 480 seconds

    const tick = () => {
      const now = Date.now();
      const actualElapsed = Math.max(0, Math.floor((now - startTimestampRef.current) / 1000));
      setElapsedSeconds(actualElapsed);

      if (isTimed) {
        const remaining = Math.max(0, totalDuration - actualElapsed);
        setRemainingSeconds(remaining);
        if (remaining <= 0 && !hasFinishedRef.current) {
          hasFinishedRef.current = true;
          onFinishMerkphaseRef.current(totalDuration);
        }
      }
    };

    tick();
    const timer = setInterval(tick, 250);
    return () => clearInterval(timer);
  }, [isTimed]);

  const currentCard = cards[currentCardIndex] || cards[0];
  const totalCards = cards.length;

  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const formattedCountdown = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  const elapsedMins = Math.floor(elapsedSeconds / 60);
  const elapsedSecs = elapsedSeconds % 60;
  const formattedElapsed = `${String(elapsedMins).padStart(2, "0")}:${String(elapsedSecs).padStart(2, "0")}`;

  const displayTime = isTimed ? formattedCountdown : formattedElapsed;
  const isWarning = isTimed && remainingSeconds <= 120 && remainingSeconds > 30;
  const isCritical = isTimed && remainingSeconds <= 30;

  // Keyboard navigation for exam mode (Left/Right arrows and keys 1-8)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentCardIndex > 0) setCurrentCardIndex((prev) => prev - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (currentCardIndex < totalCards - 1) setCurrentCardIndex((prev) => prev + 1);
      } else if (e.key >= "1" && e.key <= "8") {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= totalCards) {
          e.preventDefault();
          setCurrentCardIndex(num - 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentCardIndex, totalCards]);

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    }
  };

  // Touch swipe gestures for mobile
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
        // Swiped left -> next card
        if (currentCardIndex < totalCards - 1) {
          setCurrentCardIndex((prev) => prev + 1);
        }
      } else {
        // Swiped right -> prev card
        if (currentCardIndex > 0) {
          setCurrentCardIndex((prev) => prev - 1);
        }
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <div
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
      className="fixed inset-0 z-50 w-screen h-screen bg-[#0F172A] text-slate-100 flex flex-col font-sans select-none overflow-y-auto"
    >
      {/* ─── EXAM TOPBAR ─── */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0B1120]/95 backdrop-blur px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 pt-[max(0.625rem,env(safe-area-inset-top))]">
        {/* Left: Subtest & Phase Badges */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink min-w-0">
          <span className="font-bold text-[11px] sm:text-[13px] text-slate-300 truncate">
            <span className="sm:hidden">KFF · GM</span>
            <span className="hidden sm:inline">KFF · Gedächtnis & Merkfähigkeit</span>
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl bg-purple-950/80 text-purple-300 border border-purple-500/40 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-sm shrink-0">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="hidden xs:inline">MERKPHASE</span>
            <span className="xs:hidden">MERKEN</span>
          </span>
          <span className="hidden md:inline font-mono font-bold text-[12px] text-slate-400 truncate">
            {simTitle}
          </span>
        </div>

        {/* Center: Live Timer */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            translate="no"
            className={`notranslate inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl font-mono text-[13px] sm:text-[18px] font-black border tracking-wider transition-colors ${
              isCritical
                ? "bg-red-950/80 border-red-500 text-red-300 animate-pulse"
                : isWarning
                ? "bg-amber-950/70 border-amber-500 text-amber-300"
                : "bg-slate-900 border-slate-700 text-slate-100"
            }`}
          >
            <IconClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-75" />
            <span>{displayTime}</span>
            {!isTimed && (
              <span className="text-[10px] sm:text-[11px] font-sans font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Übung
              </span>
            )}
          </div>
        </div>

        {/* Right: Fullscreen / Abort / Finish Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900 text-slate-300 hover:text-white text-[12px] font-bold transition-all cursor-pointer"
              title="Vollbild umschalten"
            >
              <span className="sm:hidden">{isFullscreen ? "🗗" : "⛶"}</span>
              <span className="hidden sm:inline">{isFullscreen ? "🗗 Fenster" : "⛶ Vollbild"}</span>
            </button>
          )}
          {onAbort && (
            <button
              onClick={onAbort}
              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-700 hover:border-slate-600 bg-slate-900 text-slate-400 hover:text-slate-200 text-[11px] sm:text-[12px] font-bold transition-all cursor-pointer"
            >
              Abbrechen
            </button>
          )}
          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-[11.5px] sm:text-[12px] font-black tracking-wide transition-all shadow-md flex items-center gap-1 cursor-pointer"
          >
            <span className="hidden sm:inline">Merkphase beenden</span>
            <span className="sm:hidden">Beenden</span>
            <IconArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </header>

      {/* Strict MedAT Memorization Banner (No Notes Allowed) */}
      <div className="bg-purple-900/30 border-b border-purple-800/40 px-3 sm:px-4 py-1.5 sm:py-2 text-center text-[10.5px] sm:text-[12px] font-medium text-purple-200 flex items-center justify-center gap-1.5 shrink-0">
        <span className="font-bold">⚠️ MedAT-Regel:</span>
        <span className="hidden sm:inline">Während der 8-minütigen Merkphase sind keine Notizen oder Schreibgeräte zulässig. Reine mentale Verankerung.</span>
        <span className="sm:hidden">Keine Notizen zulässig. Reine mentale Verankerung.</span>
      </div>

      {/* ─── MAIN MEMORIZATION WORKSPACE ─── */}
      <main
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 flex flex-col items-center justify-start sm:justify-center p-2.5 xs:p-3 sm:p-6 lg:p-8 pt-2 sm:pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] max-w-4xl mx-auto w-full touch-pan-y"
      >
        {/* Subtle, Controlled Progress Strip (Visually Secondary) */}
        <div className="flex items-center justify-between w-full max-w-lg mb-2 sm:mb-3 px-1 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-mono font-bold tracking-wider text-slate-200">
              Ausweis {currentCardIndex + 1} / {totalCards}
            </span>
            <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
              (Taste {currentCardIndex + 1})
            </span>
          </div>

          {/* Minimal Exam Step Pips (Touch-friendly 36px tap target) */}
          <div className="flex items-center gap-0.5 sm:gap-1" role="tablist" aria-label="Ausweiskarten">
            {cards.map((_, idx) => (
              <button
                key={`pip-${idx}`}
                onClick={() => setCurrentCardIndex(idx)}
                aria-label={`Zu Ausweis ${idx + 1}`}
                className="min-h-[36px] min-w-[28px] sm:min-w-[22px] flex items-center justify-center p-1 cursor-pointer"
              >
                <span
                  className={`h-2.5 sm:h-2 rounded-full transition-all block ${
                    idx === currentCardIndex
                      ? "w-5 sm:w-6 bg-purple-500"
                      : idx < currentCardIndex
                      ? "w-2.5 sm:w-2 bg-slate-600 hover:bg-slate-500"
                      : "w-2.5 sm:w-2 bg-slate-800 hover:bg-slate-700"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* The Authentic Allergy Card (Primary Visual Focus) */}
        <div className="w-full flex justify-center">
          <AllergyCardView card={currentCard} size="normal" />
        </div>

        {/* Controlled Exam Navigation (Full-width thumb targets on mobile) */}
        <div className="flex items-center justify-between w-full max-w-lg mt-2.5 sm:mt-4 px-1 gap-2">
          <button
            onClick={handlePrev}
            disabled={currentCardIndex === 0}
            className={`min-h-[44px] flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 rounded-xl text-[12px] font-bold border transition-all flex items-center justify-center ${
              currentCardIndex === 0
                ? "border-slate-800/80 text-slate-600 bg-slate-900/30 cursor-not-allowed"
                : "border-slate-700 text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white cursor-pointer active:scale-95"
            }`}
          >
            ← Zurück
          </button>

          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Navigation: ← / → oder Tasten 1–8
          </span>

          {currentCardIndex < totalCards - 1 ? (
            <button
              onClick={handleNext}
              className="min-h-[44px] flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-[12.5px] font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Weiter →</span>
            </button>
          ) : (
            <button
              onClick={() => setShowConfirmModal(true)}
              className="min-h-[44px] flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-600 text-white text-[12.5px] font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Zur Abfrage</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </main>

      {/* ─── CONFIRMATION MODAL ─── */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] font-black text-white">
                Merkphase vorzeitig beenden?
              </h4>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[14px] text-slate-300 leading-relaxed">
              {isTimed ? (
                <>
                  Verbleibende Merkzeit: <span className="font-mono font-bold text-amber-300">{formattedCountdown}</span>.
                </>
              ) : (
                <>
                  Übungsmodus ohne Zeitlimit (Dauer bisher: <span className="font-mono font-bold text-amber-300">{formattedElapsed} Min</span>).
                </>
              )}
              <br /><br />
              Sobald du die Merkphase abschließt, werden alle 8 Allergieausweise verdeckt und du gelangst zur Abfragephase (25 Fragen in 15 Minuten).
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 text-[13px] font-bold hover:bg-slate-700 transition-all"
              >
                Weiter einprägen
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  const elapsed = isTimed ? Math.max(1, (8 * 60) - remainingSeconds) : Math.max(1, elapsedSeconds);
                  onFinishMerkphase(elapsed);
                }}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-[13px] font-black transition-all shadow-md"
              >
                Jetzt zur Abfrage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
