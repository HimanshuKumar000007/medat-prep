import React, { useMemo, useState, useEffect } from "react";
import type { NormalizedQuestion } from "../dashboard/practiceData";
import { CHAPTERS, SUBJECTS } from "../dashboard/practiceData";
import { DIconBookmark, DIconBookmarkFilled } from "../dashboard/icons";
import { usePractice } from "../dashboard/practiceContext";

interface MistakeDrillResultProps {
  chapterTitle: string;
  totalErrors: number;
  fixedCount: number;
  remainingCount: number;
  elapsedSeconds: number;
  questionReviewItems: {
    question: NormalizedQuestion;
    selected: number | undefined;
    isCorrect: boolean;
  }[];
  bookmarks: Set<string>;
  onToggleBookmark: (questionId: string) => void;
  onRepeatRemaining: () => void;
  onRepeatAll: () => void;
  onOpenReview: () => void;
  onBackToMistakesHub: () => void;
}

export function MistakeDrillResultView({
  chapterTitle,
  totalErrors,
  fixedCount,
  remainingCount,
  elapsedSeconds,
  questionReviewItems,
  bookmarks,
  onToggleBookmark,
  onRepeatRemaining,
  onRepeatAll,
  onOpenReview,
  onBackToMistakesHub,
}: MistakeDrillResultProps) {
  const { setIsResultPage } = usePractice();
  useEffect(() => {
    setIsResultPage(true);
    return () => {
      setIsResultPage(false);
    };
  }, [setIsResultPage]);

  const [activeFilter, setActiveFilter] = useState<"all" | "fixed" | "remaining">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const answeredCount = useMemo(
    () => questionReviewItems.filter((item) => item.selected !== undefined).length,
    [questionReviewItems]
  );
  const isZeroAttempt = answeredCount === 0;
  const actualRemaining = Math.max(0, totalErrors - fixedCount);
  const isAllClean = !isZeroAttempt && fixedCount === totalErrors && totalErrors > 0;
  const eliminationPct = totalErrors > 0 ? Math.round((fixedCount / totalErrors) * 100) : 0;

  const mins = Math.floor(elapsedSeconds / 60);
  const secs = elapsedSeconds % 60;
  const timeFormatted = `${mins}m ${String(secs).padStart(2, "0")}s`;

  const filteredItems = useMemo(() => {
    return questionReviewItems.filter((item) => {
      if (activeFilter === "fixed" && !item.isCorrect) return false;
      if (activeFilter === "remaining" && item.isCorrect) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const text = (item.question.question || "").toLowerCase();
        const topic = (item.question.topic || "").toLowerCase();
        if (!text.includes(query) && !topic.includes(query)) return false;
      }
      return true;
    });
  }, [questionReviewItems, activeFilter, searchQuery]);

  return (
    <div className="mx-auto max-w-5xl space-y-7 pb-28 pt-3 px-4 sm:px-6 lg:px-8 animate-screen-in select-none antialiased text-slate-900 font-sans">
      
      {/* ─── 1. TOP NAV BAR ───────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBackToMistakesHub}
          className="group flex items-center gap-2 text-[13.5px] font-bold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Zurück zur Fehler-Zentrale</span>
        </button>

        <span className="rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-[11.5px] font-black uppercase tracking-wider text-red-700">
          Fehler-Eliminierungs-Ergebnis
        </span>
      </div>

      {/* ─── 2. HERO RESULT CARD ──────────────────────────────────────── */}
      <div
        className={`relative overflow-hidden rounded-3xl border p-6 sm:p-8 shadow-sm transition-all ${
          isZeroAttempt
            ? "border-amber-200 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40"
            : isAllClean
              ? "border-emerald-300 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/40"
              : "border-red-200/90 bg-gradient-to-br from-red-50/50 via-white to-amber-50/40"
        }`}
      >
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 flex-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-2.5 w-2.5 rounded-full ${
                  isZeroAttempt
                    ? "bg-amber-500"
                    : isAllClean
                      ? "bg-emerald-500"
                      : "bg-red-500 animate-pulse"
                }`}
              />
              <p
                className={`text-[11px] font-black uppercase tracking-widest ${
                  isZeroAttempt
                    ? "text-amber-800"
                    : isAllClean
                      ? "text-emerald-800"
                      : "text-red-700"
                }`}
              >
                {isZeroAttempt
                  ? "UNBEARBEITET ABGEGEBEN"
                  : isAllClean
                    ? "100% FEHLERFREI GEMEISTERT"
                    : "SCHWACHSTELLEN-REDUKTION"}
              </p>
            </div>

            <h1 className="text-[26px] sm:text-[32px] font-black tracking-tight text-slate-900 leading-tight">
              {isZeroAttempt
                ? "⚠️ Keine Fragen bearbeitet"
                : isAllClean
                  ? `🎉 Alle ${totalErrors} Fehler erfolgreich beseitigt!`
                  : `⚡ ${fixedCount} von ${totalErrors} Fehlern korrigiert`}
            </h1>

            <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
              {isZeroAttempt ? (
                <>
                  Du hast diese Einheit abgegeben, ohne Antworten einzuloggen. Alle <strong>{totalErrors} Fehler</strong> bleiben weiterhin in deiner Fehler-Zentrale gespeichert.
                </>
              ) : isAllClean ? (
                <>
                  Hervorragende Arbeit! Alle offenen Fehler in <strong>{chapterTitle}</strong> wurden in dieser Wiederholungseinheit fehlerfrei gelöst und aus deiner Fehler-Zentrale entfernt.
                </>
              ) : (
                <>
                  Du hast <strong>{fixedCount} Fragen</strong> erfolgreich gemeistert und aus deiner Fehler-Zentrale eliminiert. Es verbleiben noch <strong>{actualRemaining} offene Fehler</strong>.
                </>
              )}
            </p>
          </div>

          {/* Action CTA in Hero */}
          <div className="flex flex-col items-stretch sm:items-end gap-2.5 shrink-0 w-full sm:w-auto">
            {isZeroAttempt ? (
              <button
                onClick={onRepeatAll}
                className="rounded-2xl bg-amber-600 hover:bg-amber-700 active:scale-[0.98] px-7 py-4 text-[14px] font-black text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>⚡</span>
                <span>Fehler-Training jetzt starten</span>
                <span>→</span>
              </button>
            ) : actualRemaining > 0 ? (
              <button
                onClick={onRepeatRemaining}
                className="rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] px-7 py-4 text-[14px] font-black text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>⚡</span>
                <span>Verbleibende {actualRemaining} Fehler jetzt trainieren</span>
                <span>→</span>
              </button>
            ) : (
              <button
                onClick={onBackToMistakesHub}
                className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] px-8 py-4 text-[14.5px] font-black text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>✓</span>
                <span>Fehler-Zentrale öffnen</span>
                <span>→</span>
              </button>
            )}
            <span className="text-[11.5px] font-semibold text-slate-500 text-center sm:text-right">
              {isZeroAttempt
                ? "Fragen beantworten & Fehler reduzieren"
                : isAllClean
                  ? "Schwachstellen-Block abgeschlossen"
                  : "Schließe den Block mit 100% ab"}
            </span>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 mt-6 border-t border-slate-200/70">
          <div className="rounded-2xl border border-emerald-200 bg-white p-4">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Erfolgreich Behoben</p>
            <p className="font-mono text-[24px] font-black text-emerald-600 mt-0.5">
              {fixedCount} <span className="text-[12px] font-normal text-slate-400">Fragen</span>
            </p>
          </div>

          <div className="rounded-2xl border border-red-200 bg-white p-4">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Noch Offen</p>
            <p className="font-mono text-[24px] font-black text-red-600 mt-0.5">
              {actualRemaining} <span className="text-[12px] font-normal text-slate-400">Fragen</span>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Eliminierungs-Quote</p>
            <p className="font-mono text-[24px] font-black text-slate-900 mt-0.5">
              {eliminationPct}%
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Dauer & Tempo</p>
            <p className="font-mono text-[24px] font-black text-slate-900 mt-0.5">
              {timeFormatted}
            </p>
          </div>
        </div>
      </div>

      {/* ─── 3. BEFORE VS AFTER COMPARISON ────────────────────────────── */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-black uppercase tracking-wider text-slate-900">
            Schwachstellen-Entwicklung in dieser Einheit
          </h2>
          <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[11px] font-bold text-slate-600">
            {eliminationPct}% Fehlerreduktion
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-red-200/80 bg-red-50/40 p-4 space-y-1.5">
            <p className="text-[11px] font-bold text-red-800 uppercase tracking-wider">
              VOR DIESEM DURCHLAUF
            </p>
            <p className="font-mono text-[22px] font-black text-red-700">
              {totalErrors} offene Fehler
            </p>
            <p className="text-[12px] text-slate-600 font-medium">
              Aufgetreten in: {chapterTitle}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-4 space-y-1.5">
            <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              JETZT NACH DEM TRAINING
            </p>
            <p className="font-mono text-[22px] font-black text-emerald-700">
              {actualRemaining} offene Fehler ({fixedCount} gelöst)
            </p>
            <p className="text-[12px] text-slate-600 font-medium">
              {isZeroAttempt
                ? "Keine Fragen beantwortet"
                : isAllClean
                  ? "Vollständig sauber gereinigt 🎉"
                  : "Bereit für den finalen Durchlauf"}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5 pt-2">
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex gap-0.5">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-700"
              style={{ width: `${eliminationPct}%` }}
              title={`${fixedCount} Behoben`}
            />
            <div
              className="h-full bg-red-500 rounded-full transition-all duration-700"
              style={{ width: `${100 - eliminationPct}%` }}
              title={`${actualRemaining} Offen`}
            />
          </div>
          <div className="flex justify-between text-[11.5px] font-semibold text-slate-500">
            <span className="text-emerald-700 font-bold">{fixedCount} Fehler erfolgreich behoben</span>
            <span className="text-red-600 font-bold">{actualRemaining} Fehler noch offen</span>
          </div>
        </div>
      </div>

      {/* ─── 4. FILTER BAR & QUESTION BREAKDOWN ────────────────────────── */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <h2 className="text-[18px] sm:text-[20px] font-black tracking-tight text-slate-900">
            Ergebnis im Detail ({filteredItems.length} Fragen)
          </h2>

          <div className="relative">
            <input
              type="text"
              placeholder="Frage suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`rounded-xl px-4 py-2 text-[12px] font-black transition-all ${
              activeFilter === "all"
                ? "bg-slate-900 text-white shadow-2xs"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
            }`}
          >
            Alle ({questionReviewItems.length})
          </button>
          <button
            onClick={() => setActiveFilter("fixed")}
            className={`rounded-xl px-4 py-2 text-[12px] font-black transition-all ${
              activeFilter === "fixed"
                ? "bg-emerald-600 text-white shadow-2xs"
                : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
            }`}
          >
            ✓ Erfolgreich korrigiert ({fixedCount})
          </button>
          <button
            onClick={() => setActiveFilter("remaining")}
            className={`rounded-xl px-4 py-2 text-[12px] font-black transition-all ${
              activeFilter === "remaining"
                ? "bg-red-600 text-white shadow-2xs"
                : "bg-red-50 text-red-800 hover:bg-red-100"
            }`}
          >
            ✕ Noch offen ({actualRemaining})
          </button>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredItems.map((item, idx) => {
            const q = item.question;
            const isCorrect = item.isCorrect;
            const studentChoice = item.selected;
            const correctChoice = q.correct;
            const isBookmarked = bookmarks.has(q.id);

            return (
              <div
                key={q.id}
                className={`rounded-3xl border bg-white shadow-sm overflow-hidden transition-all ${
                  isCorrect ? "border-emerald-200/90" : "border-red-200/90"
                }`}
              >
                {/* Header */}
                <div
                  className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b ${
                    isCorrect
                      ? "bg-emerald-50/40 border-emerald-100"
                      : "bg-red-50/40 border-red-100"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-[11px] font-black text-white ${
                        isCorrect ? "bg-emerald-600" : "bg-red-600"
                      }`}
                    >
                      #{idx + 1}
                    </span>

                    <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-slate-700">
                      {q.section || "BMS"}
                    </span>

                    <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                      {q.topic || chapterTitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                        isCorrect
                          ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                          : "border-red-300 bg-red-100 text-red-800"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isCorrect ? "bg-emerald-600" : "bg-red-600"
                        }`}
                      />
                      {isCorrect
                        ? "✓ Beseitigt"
                        : studentChoice === undefined
                          ? "— Übersprungen (Noch offen)"
                          : "✕ Noch fehlerhaft"}
                    </span>

                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-[11.5px] font-semibold transition-all ${
                        isBookmarked
                          ? "border-amber-300 bg-amber-50 text-amber-700"
                          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      {isBookmarked ? (
                        <DIconBookmarkFilled className="h-3.5 w-3.5 text-amber-500" />
                      ) : (
                        <DIconBookmark className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-6 space-y-5">
                  <p className="text-[16px] sm:text-[17px] font-semibold leading-[1.8] text-slate-900 whitespace-pre-line">
                    {q.question}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((optText, optIdx) => {
                      const isOptionCorrect = correctChoice === optIdx;
                      const isOptionSelected = studentChoice === optIdx;

                      let rowCls = "border-slate-200/80 bg-slate-50/60 text-slate-500 opacity-70";
                      let labelCls = "border-slate-200 bg-slate-100 text-slate-500";
                      let badge = null;

                      if (isOptionCorrect) {
                        rowCls = "border-emerald-300 bg-emerald-50/60 text-emerald-950 opacity-100 ring-1 ring-emerald-200/60 font-semibold";
                        labelCls = "border-transparent bg-emerald-600 text-white";
                        badge = <span className="text-[11px] font-black text-emerald-700">✓ Richtige Lösung</span>;
                      } else if (isOptionSelected && !isOptionCorrect) {
                        rowCls = "border-red-300 bg-red-50/60 text-red-950 opacity-100 ring-1 ring-red-200/60 font-semibold";
                        labelCls = "border-transparent bg-red-600 text-white";
                        badge = <span className="text-[11px] font-black text-red-600">✕ Deine Antwort</span>;
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`flex items-start gap-3 rounded-2xl border p-3.5 transition-all ${rowCls}`}
                        >
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[12px] font-black ${labelCls}`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="text-[13.5px] leading-relaxed flex-1">{optText}</span>
                          {badge}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {q.explanation && (
                    <div className="rounded-2xl border border-sky-200/80 bg-sky-50/50 p-5 space-y-2">
                      <p className="text-[10.5px] font-black uppercase tracking-wider text-sky-700">
                        💡 Didaktische Erklärung & Hintergrund
                      </p>
                      <p className="text-[13.5px] leading-relaxed text-slate-700 whitespace-pre-line">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── 5. BOTTOM ACTION BAR ─────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200">
        <button
          onClick={onOpenReview}
          className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-900 py-3.5 px-6 font-bold text-[13.5px] transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <span>📖</span>
          <span>Antworten analysieren (Review)</span>
        </button>

        {isZeroAttempt || actualRemaining > 0 ? (
          <button
            onClick={isZeroAttempt ? onRepeatAll : onRepeatRemaining}
            className="w-full sm:w-auto rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white py-3.5 px-7 font-black text-[13.5px] shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>⚡</span>
            <span>{isZeroAttempt ? "Fehler-Training starten" : `Verbleibende ${actualRemaining} Fehler trainieren`}</span>
          </button>
        ) : (
          <button
            onClick={onRepeatAll}
            className="w-full sm:w-auto rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white py-3.5 px-7 font-black text-[13.5px] shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>↺</span>
            <span>Ganzen Block erneut wiederholen</span>
          </button>
        )}

        <button
          onClick={onBackToMistakesHub}
          className="w-full sm:w-auto rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-600 hover:text-slate-900 py-3.5 px-6 font-semibold text-[13.5px] transition-all"
        >
          Zurück zur Fehler-Zentrale
        </button>
      </div>
    </div>
  );
}
