import React, { useMemo, useState } from "react";
import type { NormalizedQuestion } from "../dashboard/practiceData";
import { CHAPTERS, SUBJECTS, generateSetsForChapter } from "../dashboard/practiceData";
import type { AttemptRecord } from "../dashboard/practiceContext";
import { DIconBookmark, DIconBookmarkFilled } from "../dashboard/icons";

interface MistakesHubViewProps {
  wrongQuestions: NormalizedQuestion[];
  attemptHistory: Record<string, AttemptRecord>;
  bookmarks: Set<string>;
  onToggleBookmark: (questionId: string) => void;
  onStartAllMistakes: () => void;
  onStartChapterMistakes: (chapterId: string) => void;
  onStartSingleQuestion: (question: NormalizedQuestion) => void;
  onBack: () => void;
}

/* ─── Difficulty styling helper ─── */
function diffLabel(d?: string) {
  if (!d) return null;
  const map: Record<string, string> = {
    easy: "Leicht", leicht: "Leicht",
    medium: "Mittel", mittel: "Mittel",
    hard: "Schwer", schwer: "Schwer",
  };
  return map[d.toLowerCase()] ?? d;
}

function diffPillStyle(d?: string) {
  if (!d) return "bg-slate-100 text-slate-500 border-slate-200";
  const key = d.toLowerCase();
  if (key === "easy" || key === "leicht") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (key === "medium" || key === "mittel") return "bg-amber-50 text-amber-700 border-amber-200";
  if (key === "hard" || key === "schwer") return "bg-red-50 text-red-700 border-red-200";
  return "bg-slate-100 text-slate-500 border-slate-200";
}

/* ─── Subject name helper ─── */
function getSubjectTitle(subjectId: string): string {
  const sid = subjectId.toLowerCase();
  const map: Record<string, string> = {
    bio: "Biologie",
    chem: "Chemie",
    phys: "Physik",
    math: "Mathematik",
    "kff-fig": "Figuren zusammensetzen",
    "kff-num": "Zahlenfolgen",
    "kff-wf": "Wortflüssigkeit",
    "kff-mem": "Gedächtnis & Merkfähigkeit",
    "kff-imp": "Implikationen",
    "tv-main": "Textverständnis",
    "sek-emo-rec": "Emotionen erkennen",
    "sek-emo-reg": "Emotionen regulieren",
    "sek-soc-dec": "Soziales Entscheiden",
    "sek-dec": "Soziales Entscheiden",
    "sek-reg": "Emotionen regulieren",
    "sek-rec": "Emotionen erkennen",
  };
  if (map[sid]) return map[sid];
  const s = SUBJECTS.find((sub) => sub.id === subjectId);
  return s ? s.title.split("(")[0].trim() : subjectId.toUpperCase();
}


/* ─── Set name helper ─── */
function getQuestionSetName(q: NormalizedQuestion): string {
  if (q.practiceSetId) {
    if (q.practiceSetId.includes("sek-emo-reg") || q.practiceSetId.includes("sek-reg")) {
      const match = q.practiceSetId.match(/-set-(\d+)$/);
      if (match) return `Simulation ${match[1]}`;
    }
    if (q.practiceSetId.endsWith("-set-1")) return "Set 1 — Grundlagen";
    if (q.practiceSetId.endsWith("-set-2")) return "Set 2 — Core Practice";
    if (q.practiceSetId.endsWith("-set-3")) return "Set 3 — Anwendung & Transfer";
    if (q.practiceSetId.endsWith("-set-4")) return "Set 4 — Timed Practice";
    if (q.practiceSetId.endsWith("-set-5")) return "Set 5 — Meisterprüfung";
  }
  return "Übungs-Set";
}

export function MistakesHubView({
  wrongQuestions,
  attemptHistory,
  bookmarks,
  onToggleBookmark,
  onStartAllMistakes,
  onStartChapterMistakes,
  onStartSingleQuestion,
  onBack,
}: MistakesHubViewProps) {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>("all");
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Group wrong questions by chapter with detailed set-level breakdown
  const chapterGroups = useMemo(() => {
    const map: Record<
      string,
      {
        chapterId: string;
        chapterTitle: string;
        section: string;
        subjectId: string;
        subjectTitle: string;
        questions: NormalizedQuestion[];
        setDistribution: Record<string, number>;
      }
    > = {};

    wrongQuestions.forEach((q) => {
      const cid = q.chapterId || "unknown";
      if (!map[cid]) {
        const chapter = CHAPTERS[cid];
        map[cid] = {
          chapterId: cid,
          chapterTitle: chapter?.title || q.topic || "Kapitel",
          section: chapter?.section || q.section || "BMS",
          subjectId: q.subjectId || "bio",
          subjectTitle: getSubjectTitle(q.subjectId || "bio"),
          questions: [],
          setDistribution: {},
        };
      }
      map[cid].questions.push(q);

      const setName = getQuestionSetName(q);
      map[cid].setDistribution[setName] = (map[cid].setDistribution[setName] || 0) + 1;
    });

    return Object.values(map).sort((a, b) => b.questions.length - a.questions.length);
  }, [wrongQuestions]);

  // Group by subjects for filter buttons
  const availableSubjectFilters = useMemo(() => {
    const subjectCounts: Record<string, { id: string; label: string; count: number }> = {};

    wrongQuestions.forEach((q) => {
      const sid = q.subjectId || q.section || "other";
      if (!subjectCounts[sid]) {
        subjectCounts[sid] = {
          id: sid,
          label: getSubjectTitle(sid),
          count: 0,
        };
      }
      subjectCounts[sid].count += 1;
    });

    return Object.values(subjectCounts);
  }, [wrongQuestions]);

  // Filter questions by subject, chapter, and search query
  const filteredQuestions = useMemo(() => {
    return wrongQuestions.filter((q) => {
      // Subject filter
      if (selectedSubjectFilter !== "all") {
        if (q.subjectId !== selectedSubjectFilter && q.section !== selectedSubjectFilter) {
          return false;
        }
      }
      // Chapter filter
      if (selectedChapterFilter !== "all") {
        if (q.chapterId !== selectedChapterFilter) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const text = (q.question || "").toLowerCase();
        const topic = (q.topic || "").toLowerCase();
        const ch = (CHAPTERS[q.chapterId]?.title || "").toLowerCase();
        if (!text.includes(query) && !topic.includes(query) && !ch.includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [wrongQuestions, selectedSubjectFilter, selectedChapterFilter, searchQuery]);

  return (
    <div className="mx-auto max-w-5xl space-y-7 pb-28 pt-3 px-4 sm:px-6 lg:px-8 animate-screen-in select-none antialiased text-slate-900 font-sans">
      
      {/* ─── 1. TOP NAV BAR ───────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-[13.5px] font-bold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Zurück zur Übersicht</span>
        </button>

        <span className="rounded-full bg-red-50 border border-red-200/80 px-3.5 py-1 text-[11.5px] font-black uppercase tracking-wider text-red-700">
          Fehler-Zentrale & Schwachstellen-Analyse
        </span>
      </div>

      {/* ─── 2. HERO DIAGNOSTIC BANNER ────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl border border-red-200/90 bg-gradient-to-br from-red-50/60 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 flex-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
              <p className="text-[11px] font-black uppercase tracking-widest text-red-700">
                SCHWACHSTELLEN-ÜBERSICHT · {wrongQuestions.length} OFFENE FEHLER IN {chapterGroups.length} {chapterGroups.length === 1 ? "KAPITEL" : "KAPITELN"}
              </p>
            </div>

            <h1 className="text-[26px] sm:text-[32px] font-black tracking-tight text-slate-900 leading-tight">
              Fehler gezielt beseitigen
            </h1>

            <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
              Hier siehst du alle falschen Antworten aus verschiedenen <strong>Kapiteln & Sets</strong> auf einen Blick. Trainiere entweder alle Fehler im Gesamtlauf oder gezielt nach Thema.
            </p>
          </div>

          {/* Quick Action Button */}
          {wrongQuestions.length > 0 && (
            <div className="flex flex-col items-stretch sm:items-end gap-2.5 shrink-0 w-full sm:w-auto">
              <button
                onClick={onStartAllMistakes}
                className="rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] px-8 py-4 text-[14.5px] font-black text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
              >
                <span>⚡</span>
                <span>Alle {wrongQuestions.length} Fehler jetzt trainieren</span>
                <span>→</span>
              </button>
              <span className="text-[11.5px] font-semibold text-slate-500 text-center sm:text-right">
                {chapterGroups.length} {chapterGroups.length === 1 ? "Themenbereich" : "Themenbereiche"} im Gesamttraining
              </span>
            </div>
          )}
        </div>

        {/* 3 Quick KPI Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-6 mt-6 border-t border-slate-200/70">
          <div className="rounded-2xl border border-red-200/80 bg-white p-4">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Offene Fehler</p>
            <p className="font-mono text-[24px] font-black text-red-600 mt-0.5">{wrongQuestions.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Betroffene Kapitel</p>
            <p className="font-mono text-[24px] font-black text-slate-900 mt-0.5">{chapterGroups.length}</p>
          </div>
          <div className="col-span-2 sm:col-span-1 rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Größte Schwachstelle</p>
            <p className="text-[14px] font-black text-slate-900 mt-1 truncate">
              {chapterGroups[0] ? `${chapterGroups[0].chapterTitle} (${chapterGroups[0].questions.length})` : "Keine Fehler"}
            </p>
          </div>
        </div>
      </div>

      {/* ─── 3. GROUPED BY CHAPTER & SET SECTION ───────────────────────── */}
      {chapterGroups.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-[18px] sm:text-[20px] font-black tracking-tight text-slate-900">
                Fehler nach Kapiteln & Sets ({chapterGroups.length})
              </h2>
              <p className="text-[12px] text-slate-500 font-medium mt-0.5">
                Klicke auf ein Kapitel, um die Fehlerliste zu filtern oder sofort ein gezieltes Kapitel-Training zu starten.
              </p>
            </div>
            {selectedChapterFilter !== "all" && (
              <button
                onClick={() => setSelectedChapterFilter("all")}
                className="text-[12px] font-bold text-red-600 hover:text-red-800 underline"
              >
                Kapitelfilter zurücksetzen ✕
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapterGroups.map((grp) => {
              const isSelected = selectedChapterFilter === grp.chapterId;
              const setKeys = Object.entries(grp.setDistribution);

              return (
                <div
                  key={grp.chapterId}
                  className={`rounded-2xl border p-5 shadow-xs transition-all flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? "border-red-500 bg-red-50/20 ring-2 ring-red-500/20 shadow-md"
                      : "border-slate-200/90 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-slate-600">
                        {grp.section} · {grp.subjectTitle}
                      </span>
                      <span className="rounded-full bg-red-100 text-red-800 font-mono text-[11px] font-black px-2.5 py-0.5">
                        {grp.questions.length} {grp.questions.length === 1 ? "Fehler" : "Fehler"}
                      </span>
                    </div>

                    <h3 className="font-black text-[16px] text-slate-900 tracking-tight leading-snug line-clamp-2">
                      {grp.chapterTitle}
                    </h3>

                    {/* Set-Level Breakdown Pills */}
                    <div className="space-y-1 pt-1 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Aufgetreten in:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {setKeys.map(([setName, count]) => (
                          <span
                            key={setName}
                            className="rounded-md bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10.5px] font-semibold text-slate-600"
                          >
                            {setName}: <strong className="text-red-600 font-bold">{count}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onStartChapterMistakes(grp.chapterId)}
                      className="flex-1 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white py-2.5 px-3.5 font-black text-[12px] transition-all flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <span>Kapitel üben ({grp.questions.length})</span>
                      <span>→</span>
                    </button>

                    <button
                      onClick={() => setSelectedChapterFilter(isSelected ? "all" : grp.chapterId)}
                      className={`rounded-xl border px-3 py-2.5 text-[12px] font-bold transition-all ${
                        isSelected
                          ? "border-red-300 bg-red-100 text-red-800"
                          : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                      }`}
                      title={isSelected ? "Filter aufheben" : "Unten anzeigen"}
                    >
                      {isSelected ? "✓ Gewählt" : "Filtern"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── 4. FILTER BAR & SEARCH ───────────────────────────────────── */}
      <div className="space-y-3 pt-2">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <h2 className="text-[18px] sm:text-[20px] font-black tracking-tight text-slate-900">
            Detaillierte Fehler-Liste ({filteredQuestions.length})
          </h2>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Frage oder Stichwort suchen..."
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

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedSubjectFilter("all")}
            className={`rounded-xl px-3.5 py-1.5 text-[12px] font-black shrink-0 transition-all ${
              selectedSubjectFilter === "all"
                ? "bg-slate-900 text-white shadow-2xs"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
            }`}
          >
            Alle Fächer ({wrongQuestions.length})
          </button>

          {availableSubjectFilters.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubjectFilter(sub.id)}
              className={`rounded-xl px-3.5 py-1.5 text-[12px] font-black shrink-0 transition-all ${
                selectedSubjectFilter === sub.id
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
              }`}
            >
              {sub.label} ({sub.count})
            </button>
          ))}
        </div>
      </div>

      {/* ─── 5. QUESTION-BY-QUESTION LIST WITH SOLUTIONS ──────────────── */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-12 text-center shadow-sm space-y-2">
            <p className="text-[15px] font-black text-slate-800">
              {wrongQuestions.length === 0
                ? "🎉 Keine offenen Fehler vorhanden!"
                : "Keine Fragen entsprechen deinen Filterkriterien."}
            </p>
            <p className="text-[13px] text-slate-500">
              {wrongQuestions.length === 0
                ? "Du hast alle bisherigen Fragen fehlerfrei gemeistert."
                : "Versuche, die Suchbegriffe oder Fächerfilter zurückzusetzen."}
            </p>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const attempt = attemptHistory[q.id];
            const studentChoice = attempt?.selected;
            const correctChoice = q.correct;
            const chapter = CHAPTERS[q.chapterId];
            const setName = getQuestionSetName(q);
            const isBookmarked = bookmarks.has(q.id);

            return (
              <div
                key={q.id}
                className="rounded-3xl border border-slate-200/90 bg-white shadow-sm overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-red-50/30 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-[11px] font-black text-white">
                      #{idx + 1}
                    </span>

                    <span className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-slate-700">
                      {q.section || "BMS"}
                    </span>

                    {q.difficulty && (
                      <span className={`rounded-lg border px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider ${diffPillStyle(q.difficulty)}`}>
                        {diffLabel(q.difficulty)}
                      </span>
                    )}

                    <span className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                      {chapter?.title || q.topic || "Thema"} · {setName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-red-700 shadow-2xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Falsch beantwortet
                    </span>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-[11.5px] font-semibold transition-all ${
                        isBookmarked
                          ? "border-amber-300 bg-amber-50 text-amber-700 shadow-2xs"
                          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700"
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

                {/* Question Body */}
                <div className="px-6 py-6 space-y-5">
                  <p className="text-[16px] sm:text-[17px] font-semibold leading-[1.8] text-slate-900 whitespace-pre-line">
                    {q.question}
                  </p>

                  {/* 2-Column Answer Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((optText, optIdx) => {
                      const isCorrect = correctChoice === optIdx;
                      const isStudentSelected = studentChoice === optIdx;

                      let rowCls = "border-slate-200/80 bg-slate-50/60 text-slate-500 opacity-70";
                      let labelCls = "border-slate-200 bg-slate-100 text-slate-500";
                      let badge = null;

                      if (isCorrect) {
                        rowCls = "border-emerald-300 bg-emerald-50/60 text-emerald-950 opacity-100 ring-1 ring-emerald-200/60 font-semibold";
                        labelCls = "border-transparent bg-emerald-600 text-white";
                        badge = <span className="text-[11px] font-black text-emerald-700">✓ Richtige Lösung</span>;
                      } else if (isStudentSelected && !isCorrect) {
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

                  {/* Explanation Box */}
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

                  {/* Bottom Single-Question Practice CTA */}
                  <div className="flex items-center justify-end pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onStartSingleQuestion(q)}
                      className="rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2 text-[12px] font-black transition-all flex items-center gap-1.5 shadow-2xs active:scale-[0.98]"
                    >
                      <span>Diese Frage jetzt wiederholen</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ─── 6. FIXED BOTTOM ACTION BAR ───────────────────────────────── */}
      {wrongQuestions.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-xs">
          <div className="mx-auto max-w-5xl flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5">
            <span className="text-[12.5px] text-slate-600 font-semibold">
              <strong className="font-black text-slate-900">{filteredQuestions.length}</strong> von {wrongQuestions.length} Fehlern angezeigt
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="hidden sm:inline-block rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2.5 text-[12.5px] font-bold text-slate-700 transition-all"
              >
                Zurück zur Übersicht
              </button>

              <button
                onClick={onStartAllMistakes}
                className="rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white py-2.5 px-6 font-black text-[13px] transition-all shadow-sm flex items-center gap-2"
              >
                <span>⚡ Alle {wrongQuestions.length} Fehler trainieren</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
