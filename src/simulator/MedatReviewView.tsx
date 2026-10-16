import React, { useMemo, useState, useEffect } from "react";
import type { SimulatorQuestionProp } from "./MedatQuestionWorkspace";
import { DIconBookmark, DIconBookmarkFilled } from "../dashboard/icons";
import { usePractice } from "../dashboard/practiceContext";
import { MathText } from "../components/MathText";
import { FzPiecesCanvas } from "./fz/FzPiecesCanvas";
import { FzAssemblySolutionFigure } from "./fz/FzAssemblySolutionFigure";
import { ALL_FZ_QUESTIONS } from "../data/questions/fz";
import { ALL_ZF_QUESTIONS } from "../data/questions/zf";
import { ALL_WF_QUESTIONS } from "../data/questions/wf";
import { ALL_IE_QUESTIONS } from "../data/questions/ie";
import { ALL_ER_QUESTIONS } from "../data/questions/er";
import { ALL_EE_QUESTIONS } from "../data/questions/ee";
import { decodeEeSelections, type EeQuestionData, type EeEmotionItem } from "../data/questions/ee/types";
import { ALL_SE_QUESTIONS } from "../data/questions/se";
import { decodeSeRanking, calculateSeScore, type SeQuestionData } from "../data/questions/se/types";
import { AllergyCardView } from "./gm/AllergyCardView";

export interface ReviewItem {
  question: SimulatorQuestionProp;
  selected: number | undefined;
  isCorrect: boolean;
}

export interface MedatReviewViewProps {
  title: string;
  items: ReviewItem[];
  bookmarks: Set<string>;
  onToggleBookmark: (questionId: string) => void;
  onBackToResults: () => void;
  initialSection?: string;
}

/* ─── helpers ─── */
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
  if (key === "easy"   || key === "leicht") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (key === "medium" || key === "mittel") return "bg-amber-50 text-amber-700 border-amber-200";
  if (key === "hard"   || key === "schwer") return "bg-red-50 text-red-700 border-red-200";
  return "bg-slate-100 text-slate-500 border-slate-200";
}

/* ─── Single question card (light themed) ─── */
function QuestionCard({
  item,
  globalIndex,
  isBookmarked,
  onToggleBookmark,
}: {
  item: ReviewItem;
  globalIndex: number;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}) {
  const q = item.question;
  const qText = q.question || q.questionText || "";
  const correctIdx = q.correct !== undefined ? q.correct : q.correctAnswer ?? 0;
  const skipped = item.selected === undefined;

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white shadow-sm overflow-hidden">

      {/* ── Card header ── */}
      <div className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-100 ${
        item.isCorrect
          ? "bg-emerald-50/40"
          : skipped
            ? "bg-slate-50/60"
            : "bg-red-50/30"
      }`}>
        {/* Left: number + meta chips */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Q number */}
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-[11px] font-black text-white">
            {globalIndex + 1}
          </span>

          {/* Section */}
          {q.section && (
            <span className="rounded-lg bg-slate-100 border border-slate-200/80 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-slate-700">
              {q.section}
            </span>
          )}

          {/* Difficulty pill */}
          {q.difficulty && (
            <span className={`rounded-lg border px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider ${diffPillStyle(q.difficulty)}`}>
              {diffLabel(q.difficulty)}
            </span>
          )}

          {/* Topic chip */}
          {q.topic && (
            <span className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
              {q.topic}
            </span>
          )}
        </div>

        {/* Right: status + bookmark */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Status badge */}
          {skipped ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-500 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              Übersprungen
            </span>
          ) : item.isCorrect ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-700 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Richtig
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-red-700 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Falsch
            </span>
          )}

          {/* Bookmark toggle */}
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

      {/* ── Question body ── */}
      <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-4 sm:space-y-5">

        {/* TV Reading Passage if available */}
        {q.passage && (
          <div className="rounded-2xl border border-sky-200/90 bg-sky-50/50 p-4 sm:p-5 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-sky-800 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span>📖</span>
                <span>Zugehöriger Textauszug (MedAT Lesepassage)</span>
              </span>
            </div>
            <div className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-800 font-serif whitespace-pre-line select-text border-t border-sky-100/80 pt-2.5">
              {q.passage}
            </div>
          </div>
        )}

        {/* Question text */}
        <MathText
          as="p"
          className="text-[15.5px] sm:text-[17px] font-semibold leading-[1.75] text-slate-900"
          text={qText}
        />

        {(() => {
          const fz = q.fzData || ALL_FZ_QUESTIONS.find((f) => f.id === q.id);
          if (fz) {
            const optionKeys: ("A" | "B" | "C" | "D" | "E")[] = ["A", "B", "C", "D", "E"];
            return (
              <div className="space-y-4">
                <FzPiecesCanvas pieces={fz.pieces} viewBox={fz.canvasViewBox} />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-3.5">
                  {optionKeys.map((key, idx) => {
                    const opt = fz.options[key];
                    const isStudentChoice = item.selected === idx;
                    const isCorrectOpt = correctIdx === idx;
                    const isNone = opt.isNone || key === "E" || !opt.polygon;

                    return (
                      <div
                        key={key}
                        className={`relative rounded-xl sm:rounded-2xl border p-2 sm:p-2.5 flex flex-col items-center justify-between transition-all ${
                          isCorrectOpt
                            ? "border-emerald-400 bg-emerald-50/50 ring-2 ring-emerald-400/30"
                            : isStudentChoice
                            ? "border-red-400 bg-red-50/50 ring-2 ring-red-400/30"
                            : "border-slate-200 bg-slate-50/40 opacity-75"
                        }`}
                      >
                        <div className="w-full flex items-center justify-between mb-1 sm:mb-1.5">
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-mono font-black ${
                              isCorrectOpt
                                ? "bg-emerald-600 text-white"
                                : isStudentChoice
                                ? "bg-red-600 text-white"
                                : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {key}
                          </span>
                          {isCorrectOpt ? (
                            <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                              ✓ Richtig
                            </span>
                          ) : isStudentChoice ? (
                            <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                              ✕ Deine Wahl
                            </span>
                          ) : null}
                        </div>

                        {isNone ? (
                          <div className="w-full h-20 sm:h-24 lg:h-28 flex items-center justify-center p-2 text-center">
                            <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-slate-600 leading-snug">
                              Keine der Antwortmöglichkeiten ist richtig
                            </span>
                          </div>
                        ) : (
                          <div className="w-full h-20 sm:h-24 lg:h-28 flex items-center justify-center p-1">
                            <svg
                              viewBox={opt.viewBox || "-10 -10 120 120"}
                              preserveAspectRatio="xMidYMid meet"
                              className="w-full h-full"
                            >
                              <polygon
                                points={opt.polygon!.map(([x, y]) => `${x},${y}`).join(" ")}
                                fill="#bfdbfe"
                                stroke={isCorrectOpt ? "#059669" : "#1e40af"}
                                strokeWidth="2.2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        )}

                        <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 mt-1">
                          {isNone ? "Option E" : `Figur ${key}`}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Visual Solution Assembly / Reconstruction */}
                <FzAssemblySolutionFigure fzData={fz} />
              </div>
            );
          }

          const zf = (q as any).zfData || ALL_ZF_QUESTIONS.find((f) => f.id === q.id);
          if (zf) {
            const optionKeys: ("A" | "B" | "C" | "D" | "E")[] = ["A", "B", "C", "D", "E"];
            const numbers = zf.sequence || [];

            return (
              <div className="space-y-4">
                {/* Sequence pipeline with solution */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <span>Vollständige Zahlenfolge mit Lösung</span>
                    <span className="text-emerald-700 font-mono">Regel: {zf.rule}</span>
                  </div>
                  <div className="overflow-x-auto pb-2 scrollbar-thin">
                    <div className="flex items-center justify-start sm:justify-center min-w-max gap-2 px-1">
                      {numbers.map((num: number, idx: number) => (
                        <React.Fragment key={`rev-num-${idx}`}>
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-center justify-center font-mono font-black text-[16px] sm:text-[18px] text-slate-800">
                              {num}
                            </div>
                            <span className="mt-0.5 text-[9px] font-bold text-slate-400 font-mono">
                              {idx + 1}.
                            </span>
                          </div>
                          {idx < numbers.length - 1 && (
                            <span className="text-slate-300 font-bold select-none">|</span>
                          )}
                        </React.Fragment>
                      ))}

                      <span className="text-emerald-500 font-black select-none mx-0.5">→</span>

                      {/* 8th number */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl border-2 border-emerald-400 bg-emerald-50 shadow-2xs flex items-center justify-center font-mono font-black text-[16px] sm:text-[18px] text-emerald-800">
                          {zf.expectedNextValues[0]}
                        </div>
                        <span className="mt-0.5 text-[9px] font-black text-emerald-700 font-mono">
                          8. (Lösung)
                        </span>
                      </div>

                      <span className="text-emerald-300 font-bold select-none">|</span>

                      {/* 9th number */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl border-2 border-emerald-400 bg-emerald-50 shadow-2xs flex items-center justify-center font-mono font-black text-[16px] sm:text-[18px] text-emerald-800">
                          {zf.expectedNextValues[1]}
                        </div>
                        <span className="mt-0.5 text-[9px] font-black text-emerald-700 font-mono">
                          9. (Lösung)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Candidate options list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {optionKeys.map((key, idx) => {
                    const pair = zf.options[key];
                    const isNone = key === "E" || pair === null;
                    const isStudentChoice = item.selected === idx;
                    const isCorrectOpt = correctIdx === idx;

                    return (
                      <div
                        key={key}
                        className={`relative rounded-xl border p-3 flex items-center justify-between transition-all ${
                          isNone ? "sm:col-span-2 lg:col-span-3" : ""
                        } ${
                          isCorrectOpt
                            ? "border-emerald-400 bg-emerald-50/50 ring-2 ring-emerald-400/30"
                            : isStudentChoice
                            ? "border-red-400 bg-red-50/50 ring-2 ring-red-400/30"
                            : "border-slate-200 bg-slate-50/40 opacity-75"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-lg text-[12px] font-mono font-black ${
                              isCorrectOpt
                                ? "bg-emerald-600 text-white"
                                : isStudentChoice
                                ? "bg-red-600 text-white"
                                : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {key}
                          </span>
                          <span className={`font-mono text-[15px] font-black text-slate-900 ${isNone ? "font-sans text-[13px] font-bold text-slate-800" : ""}`}>
                            {isNone ? "Keine Antwort ist richtig" : `${pair[0]} / ${pair[1]}`}
                          </span>
                        </div>

                        {isCorrectOpt ? (
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            ✓ Richtig
                          </span>
                        ) : isStudentChoice ? (
                          <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                            ✕ Deine Wahl
                          </span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          const wf = (q as any).wfData || ALL_WF_QUESTIONS.find((f) => f.id === q.id);
          if (wf) {
            const optionKeys: ("A" | "B" | "C" | "D" | "E")[] = ["A", "B", "C", "D", "E"];
            const letters = wf.letters && wf.letters.length > 0
              ? wf.letters
              : wf.scrambledLetters.split(/\s*·\s*|\s+/).filter(Boolean);

            return (
              <div className="space-y-4">
                {/* Scrambled Letters Pipeline & Solution Box */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Gegebene Buchstaben & Gesuchtes Wort</span>
                    <span className="text-emerald-700 font-mono font-bold">
                      Anfangsbuchstabe: {wf.correctInitial}
                    </span>
                  </div>

                  {/* Letter tiles */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {letters.map((l: string, idx: number) => (
                      <div
                        key={`rev-wf-l-${idx}`}
                        className="w-10 h-12 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-center justify-center font-mono font-black text-[16px] text-slate-800"
                      >
                        {l}
                      </div>
                    ))}
                  </div>

                  {/* Target word revelation in review */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-[13px] font-bold text-slate-700">
                      Gesuchtes deutsches Wort:
                      <span className="ml-2 font-mono font-black text-slate-900 text-[16px] tracking-wide">
                        {wf.targetWord}
                      </span>
                    </div>
                    <div className="text-[12px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
                      Richtiger Anfangsbuchstabe: <span className="font-mono font-black text-[14px]">{wf.correctInitial}</span>
                    </div>
                  </div>
                </div>

                {/* Candidate options list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {optionKeys.map((key, idx) => {
                    const letterVal = wf.options[key];
                    const isNone = key === "E";
                    const isStudentChoice = item.selected === idx;
                    const isCorrectOpt = correctIdx === idx;

                    return (
                      <div
                        key={key}
                        className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          isCorrectOpt
                            ? "border-emerald-300 bg-emerald-50/70 text-emerald-950"
                            : isStudentChoice
                            ? "border-red-300 bg-red-50/70 text-red-950"
                            : "border-slate-200/80 bg-white text-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`h-6 w-6 rounded-lg font-mono font-black text-[11px] flex items-center justify-center ${
                              isCorrectOpt
                                ? "bg-emerald-600 text-white"
                                : isStudentChoice
                                ? "bg-red-600 text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {key}
                          </span>
                          <span className={`font-mono text-[16px] font-black text-slate-900 ${isNone ? "font-sans text-[13px] font-bold text-slate-800" : ""}`}>
                            {isNone ? (letterVal || "Keine Antwort ist richtig") : letterVal}
                          </span>
                        </div>

                        {isCorrectOpt ? (
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            ✓ Richtig
                          </span>
                        ) : isStudentChoice ? (
                          <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                            ✕ Deine Wahl
                          </span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          const gmData = (q as any).gmData;
          const gmCard = (q as any).gmCardData;
          if (gmData || gmCard) {
            return (
              <div className="space-y-6">
                {/* Allergy Card Display with highlighted tested category */}
                {gmCard && (
                  <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-4 sm:p-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                      <span>Zugehöriger Allergieausweis (Prüfungsreferenz)</span>
                      <span>Ausweis {gmCard.id}</span>
                    </div>
                    <div className="flex justify-center">
                      <AllergyCardView card={gmCard} highlightCategory={gmData?.testedCategory} />
                    </div>
                  </div>
                )}

                {/* Question options */}
                <div className="space-y-2.5">
                  {q.options.map((optText, idx) => {
                    const isStudentChoice = item.selected === idx;
                    const isCorrectOpt = correctIdx === idx;

                    let rowCls = "border-slate-200/80 bg-slate-50/60 text-slate-600 opacity-75";
                    let labelCls = "border-slate-200 bg-slate-100 text-slate-600";
                    let badge: React.ReactNode = null;

                    if (isCorrectOpt) {
                      rowCls = "border-emerald-300 bg-emerald-50/60 text-emerald-950 opacity-100 ring-1 ring-emerald-300/70 shadow-2xs";
                      labelCls = "border-transparent bg-emerald-600 text-white font-bold";
                      badge = (
                        <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-xl">
                          <span>✓</span>
                          <span>Richtig</span>
                        </span>
                      );
                    } else if (isStudentChoice && !isCorrectOpt) {
                      rowCls = "border-red-300 bg-red-50/60 text-red-950 opacity-100 ring-1 ring-red-300/70 shadow-2xs";
                      labelCls = "border-transparent bg-red-600 text-white font-bold";
                      badge = (
                        <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-red-800 bg-red-100/90 px-2.5 py-1 rounded-xl">
                          <span>✕</span>
                          <span>Deine Wahl</span>
                        </span>
                      );
                    }

                    return (
                      <div
                        key={idx}
                        className={`flex items-start sm:items-center justify-between gap-3.5 rounded-2xl border p-3.5 sm:p-4 transition-all min-h-[52px] ${rowCls}`}
                      >
                        <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border text-[12px] font-mono font-black mt-0.5 sm:mt-0 ${labelCls}`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-[13.5px] sm:text-[14px] leading-relaxed break-words font-medium">
                            <MathText text={optText} />
                          </span>
                        </div>
                        {badge}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          const ie = (q as any).ieData || ALL_IE_QUESTIONS.find((i) => i.id === q.id);
          if (ie) {
            return (
              <div className="space-y-4">
                {/* Premises box */}
                <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                    <span>Gegebene Prämissen (Formale Deduktion)</span>
                    <span className="font-mono bg-purple-100/80 px-2 py-0.5 rounded text-purple-800">
                      {ie.ruleType.replace(/_/g, " ").toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-purple-100">
                      <span className="text-[10px] font-mono font-black text-purple-600 block mb-1">PRÄMISSE 1</span>
                      <p className="text-[14px] font-bold text-slate-800 leading-snug">{ie.premises[0]}</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-indigo-100">
                      <span className="text-[10px] font-mono font-black text-indigo-600 block mb-1">PRÄMISSE 2</span>
                      <p className="text-[14px] font-bold text-slate-800 leading-snug">{ie.premises[1]}</p>
                    </div>
                  </div>
                </div>

                {/* Question options */}
                <div className="space-y-2.5">
                  {q.options.map((optText, idx) => {
                    const isStudentChoice = item.selected === idx;
                    const isCorrectOpt = correctIdx === idx;

                    let rowCls = "border-slate-200/80 bg-slate-50/60 text-slate-600 opacity-75";
                    let labelCls = "border-slate-200 bg-slate-100 text-slate-600";
                    let badge: React.ReactNode = null;

                    if (isCorrectOpt) {
                      rowCls = "border-emerald-300 bg-emerald-50/60 text-emerald-950 opacity-100 ring-1 ring-emerald-300/70 shadow-2xs";
                      labelCls = "border-transparent bg-emerald-600 text-white font-bold";
                      badge = (
                        <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-xl">
                          <span>✓</span>
                          <span>Richtig</span>
                        </span>
                      );
                    } else if (isStudentChoice && !isCorrectOpt) {
                      rowCls = "border-red-300 bg-red-50/60 text-red-950 opacity-100 ring-1 ring-red-300/70 shadow-2xs";
                      labelCls = "border-transparent bg-red-600 text-white font-bold";
                      badge = (
                        <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-red-800 bg-red-100/90 px-2.5 py-1 rounded-xl">
                          <span>✕</span>
                          <span>Deine Wahl</span>
                        </span>
                      );
                    }

                    return (
                      <div
                        key={idx}
                        className={`flex items-start sm:items-center justify-between gap-3.5 rounded-2xl border p-3.5 sm:p-4 transition-all min-h-[52px] ${rowCls}`}
                      >
                        <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border text-[12px] font-mono font-black mt-0.5 sm:mt-0 ${labelCls}`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-[13.5px] sm:text-[14.5px] leading-snug font-medium text-slate-900 break-words">
                            {optText}
                          </span>
                        </div>
                        {badge}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          const er = (q as any).erData || ALL_ER_QUESTIONS.find((e) => e.id === q.id);
          if (er) {
            return (
              <div className="space-y-4">
                {/* Situation & Goal Box */}
                <div className="rounded-2xl border border-purple-200 bg-purple-50/40 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                    <span>Ausgangslage & Handlungsziel (SEK · ER)</span>
                    <span className="font-mono bg-purple-100/90 px-2 py-0.5 rounded text-purple-800">
                      {er.strategyType.replace(/_/g, " ").toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded-xl border border-purple-100">
                      <span className="text-[10px] font-mono font-black text-purple-600 block mb-1">SITUATION</span>
                      <p className="text-[14px] font-semibold text-slate-800 leading-relaxed">{er.scenario}</p>
                    </div>
                    <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-200">
                      <span className="text-[10px] font-mono font-black text-purple-800 block mb-1">🎯 VORGEGEBENES ZIEL</span>
                      <p className="text-[13.5px] font-bold text-purple-950 leading-snug">{er.goal}</p>
                    </div>
                  </div>
                </div>

                {/* Question options */}
                <div className="space-y-2.5">
                  {q.options.map((optText, idx) => {
                    const isStudentChoice = item.selected === idx;
                    const isCorrectOpt = correctIdx === idx;

                    let rowCls = "border-slate-200/80 bg-slate-50/60 text-slate-600 opacity-75";
                    let labelCls = "border-slate-200 bg-slate-100 text-slate-600";
                    let badge: React.ReactNode = null;

                    if (isCorrectOpt) {
                      rowCls = "border-emerald-300 bg-emerald-50/60 text-emerald-950 opacity-100 ring-1 ring-emerald-300/70 shadow-2xs";
                      labelCls = "border-transparent bg-emerald-600 text-white font-bold";
                      badge = (
                        <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-xl">
                          <span>✓</span>
                          <span>Richtig</span>
                        </span>
                      );
                    } else if (isStudentChoice && !isCorrectOpt) {
                      rowCls = "border-red-300 bg-red-50/60 text-red-950 opacity-100 ring-1 ring-red-300/70 shadow-2xs";
                      labelCls = "border-transparent bg-red-600 text-white font-bold";
                      badge = (
                        <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-red-800 bg-red-100/90 px-2.5 py-1 rounded-xl">
                          <span>✕</span>
                          <span>Deine Wahl</span>
                        </span>
                      );
                    }

                    const optKey = String.fromCharCode(65 + idx) as "A" | "B" | "C" | "D";
                    const optRationale =
                      (er as any).rationalesByOption?.[optKey] ||
                      (!isCorrectOpt ? (er as any).explanationsIncorrect?.[optKey] : undefined);

                    return (
                      <div
                        key={idx}
                        className={`flex flex-col gap-2 rounded-2xl border p-3.5 sm:p-4 transition-all ${rowCls}`}
                      >
                        <div className="flex items-start sm:items-center justify-between gap-3.5">
                          <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border text-[12px] font-mono font-black mt-0.5 sm:mt-0 ${labelCls}`}>
                              {optKey}
                            </span>
                            <span className="text-[13.5px] sm:text-[14.5px] leading-snug font-medium text-slate-900 break-words">
                              {optText}
                            </span>
                          </div>
                          {badge}
                        </div>
                        {optRationale && (
                          <div
                            className={`text-[12px] sm:text-[12.5px] pl-10 pr-2 pt-2 border-t leading-relaxed ${
                              isCorrectOpt
                                ? "text-emerald-900 border-emerald-200/60 font-medium"
                                : "text-slate-600 border-slate-200/60"
                            }`}
                          >
                            <span className="font-bold">
                              {isCorrectOpt ? "✓ Begründung (Beste Strategie): " : "✕ Warum weniger geeignet: "}
                            </span>
                            {optRationale}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          const ee: EeQuestionData | undefined = q.eeData || ALL_EE_QUESTIONS.find((e) => e.id === q.id);
          if (ee) {
            const userSelections = decodeEeSelections(item.selected);
            return (
              <div className="space-y-4">
                {/* Situation & Person Box */}
                <div className="rounded-2xl border border-violet-200 bg-violet-50/40 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-violet-700 uppercase tracking-wider">
                    <span>Ausgangslage & Personenkontext (SEK · EE)</span>
                    <span className="font-mono bg-violet-100/90 px-2 py-0.5 rounded text-violet-800">
                      {ee.person.name} ({ee.person.context})
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-violet-100">
                    <span className="text-[10px] font-mono font-black text-violet-600 block mb-1">SITUATION</span>
                    <p className="text-[14px] font-semibold text-slate-800 leading-relaxed">{ee.scenario}</p>
                  </div>
                </div>

                {/* 5-Emotion Evaluation Table */}
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <span className="text-[12px] font-black uppercase tracking-wider text-slate-700">
                      Emotions-Bewertungstabelle
                    </span>
                    <span
                      className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                        item.isCorrect
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.isCorrect ? "Aufgabe: Richtig (+1 Punkt)" : "Aufgabe: Falsch (0 Punkte)"}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[13px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/60 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <th className="py-2.5 px-4">Emotion</th>
                          <th className="py-2.5 px-4">Deine Antwort</th>
                          <th className="py-2.5 px-4">Richtige Antwort</th>
                          <th className="py-2.5 px-4 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {ee.emotions.map((emo) => {
                          const userChoice = userSelections[emo.id];
                          const userLabel =
                            userChoice === "likely"
                              ? "eher wahrscheinlich"
                              : userChoice === "unlikely"
                              ? "eher unwahrscheinlich"
                              : "keine Angabe";
                          const correctLabel =
                            emo.correctProbability === "likely"
                              ? "eher wahrscheinlich"
                              : "eher unwahrscheinlich";
                          const isMatch = userChoice === emo.correctProbability;

                          return (
                            <tr
                              key={emo.id}
                              className={isMatch ? "bg-emerald-50/20" : "bg-red-50/20"}
                            >
                              <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                                <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                                  {emo.id}
                                </span>
                                <span>{emo.label}</span>
                              </td>
                              <td
                                className={`py-3 px-4 font-semibold ${
                                  isMatch
                                    ? "text-emerald-900"
                                    : userChoice === "unselected"
                                    ? "text-slate-400 italic"
                                    : "text-red-900 line-through"
                                }`}
                              >
                                {userLabel}
                              </td>
                              <td className="py-3 px-4 font-bold text-slate-900">
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold ${
                                    emo.correctProbability === "likely"
                                      ? "bg-emerald-100 text-emerald-800"
                                      : "bg-slate-200 text-slate-700"
                                  }`}
                                >
                                  {correctLabel}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center font-bold">
                                {isMatch ? (
                                  <span className="text-emerald-600 text-[14px]">✓</span>
                                ) : (
                                  <span className="text-red-600 text-[14px]">✕</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          const se: SeQuestionData | undefined =
            (q as any).seData || ALL_SE_QUESTIONS.find((s) => s.id === q.id);

          if (se) {
            const userRanking = decodeSeRanking(item.selected);
            const scoreResult = calculateSeScore(userRanking, se.referenceRanking);

            return (
              <div className="space-y-4">
                {/* Situation Box */}
                <div className="rounded-2xl border border-teal-200 bg-teal-50/40 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                    <span>Ausgangslage & Entscheidungskontext (SEK · SE)</span>
                    {se.decisionContext && (
                      <span className="font-mono bg-teal-100/90 px-2 py-0.5 rounded text-teal-900">
                        {se.decisionContext}
                      </span>
                    )}
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-teal-100">
                    <span className="text-[10px] font-mono font-black text-teal-600 block mb-1">SITUATION</span>
                    <p className="text-[14px] font-semibold text-slate-800 leading-relaxed">{se.scenario}</p>
                  </div>
                </div>

                {/* Ranking Comparison Table */}
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[12px] font-black uppercase tracking-wider text-slate-700">
                      Reihungsvergleich der Überlegungen (1 = wichtigste · 5 = unwichtigste)
                    </span>
                    <span
                      className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                        scoreResult.score === 1.0
                          ? "bg-emerald-100 text-emerald-800"
                          : scoreResult.score >= 0.75
                          ? "bg-teal-100 text-teal-800"
                          : scoreResult.score > 0
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      Ranking-Übereinstimmung: {scoreResult.scorePct}% (Score: {scoreResult.score.toFixed(2)})
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[13px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/60 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <th className="py-2.5 px-4">Überlegung (A–E)</th>
                          <th className="py-2.5 px-4 text-center">Deine Reihung</th>
                          <th className="py-2.5 px-4 text-center">Referenzreihung</th>
                          <th className="py-2.5 px-4 text-center">Abweichung</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {se.considerations.map((item) => {
                          const userRank = userRanking[item.id] || 0;
                          const refRank = se.referenceRanking[item.id];
                          const isMatch = userRank === refRank;
                          const delta = userRank > 0 ? userRank - refRank : null;

                          return (
                            <tr
                              key={item.id}
                              className={isMatch ? "bg-emerald-50/20" : "bg-slate-50/20"}
                            >
                              <td className="py-3 px-4 font-medium text-slate-800">
                                <div className="flex items-start gap-2">
                                  <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                                    {item.id}
                                  </span>
                                  <span>{item.text}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-center font-bold">
                                {userRank > 0 ? (
                                  <span
                                    className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-mono font-black ${
                                      isMatch
                                        ? "bg-emerald-600 text-white"
                                        : "bg-slate-100 text-slate-700 border border-slate-300"
                                    }`}
                                  >
                                    {userRank}
                                  </span>
                                ) : (
                                  <span className="text-slate-400 italic text-xs">keine</span>
                                )}
                              </td>
                              <td className="py-3 px-4 text-center font-bold">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-mono font-black bg-teal-100 text-teal-900 border border-teal-200">
                                  {refRank}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center font-bold text-xs">
                                {isMatch ? (
                                  <span className="text-emerald-600">✓ Exakt</span>
                                ) : delta !== null ? (
                                  <span className="text-amber-700 font-mono">
                                    {delta > 0 ? `+${delta}` : delta}
                                  </span>
                                ) : (
                                  <span className="text-red-600 font-mono">fehlt</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div className="space-y-2.5">
              {q.options.map((optText, idx) => {
                const isStudentChoice = item.selected === idx;
                const isCorrectOpt = correctIdx === idx;

                let rowCls = "border-slate-200/80 bg-slate-50/60 text-slate-600 opacity-75";
                let labelCls = "border-slate-200 bg-slate-100 text-slate-600";
                let badge: React.ReactNode = null;

                if (isCorrectOpt) {
                  rowCls = "border-emerald-300 bg-emerald-50/60 text-emerald-950 opacity-100 ring-1 ring-emerald-300/70 shadow-2xs";
                  labelCls = "border-transparent bg-emerald-600 text-white font-bold";
                  badge = (
                    <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-xl">
                      <span>✓</span>
                      <span>Richtig</span>
                    </span>
                  );
                } else if (isStudentChoice && !isCorrectOpt) {
                  rowCls = "border-red-300 bg-red-50/60 text-red-950 opacity-100 ring-1 ring-red-300/70 shadow-2xs";
                  labelCls = "border-transparent bg-red-600 text-white font-bold";
                  badge = (
                    <span className="shrink-0 flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-red-800 bg-red-100/90 px-2.5 py-1 rounded-xl">
                      <span>✕</span>
                      <span>Deine Wahl</span>
                    </span>
                  );
                }

                return (
                  <div
                    key={idx}
                    className={`flex items-start sm:items-center justify-between gap-3.5 rounded-2xl border p-3.5 sm:p-4 transition-all min-h-[52px] ${rowCls}`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border text-[12px] font-mono font-black mt-0.5 sm:mt-0 ${labelCls}`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-[14px] sm:text-[14.5px] leading-[1.7] flex-1 py-0.5">
                        <MathText text={optText} />
                      </span>
                    </div>
                    {badge}
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Explanation */}
        {q.explanation && (
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50/60 p-5 sm:p-7 shadow-2xs space-y-3.5">
            <div className="flex items-center justify-between gap-2 border-b border-indigo-100/70 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 text-sm font-bold shadow-2xs">
                  💡
                </span>
                <div>
                  <p className="text-[12px] font-black uppercase tracking-wider text-indigo-900">
                    Didaktischer Lösungsweg & Herleitung
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">Schritt-für-Schritt Analyse</p>
                </div>
              </div>
              <span className="rounded-xl bg-white border border-indigo-200/70 px-2.5 py-1 text-[11px] font-bold text-indigo-700 shadow-2xs">
                MedAT Standard
              </span>
            </div>
            <MathText
              as="div"
              className="text-[14.5px] sm:text-[15px] leading-[1.8] text-slate-800"
              text={q.explanation}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export function MedatReviewView({
  title,
  items,
  bookmarks,
  onToggleBookmark,
  onBackToResults,
  initialSection,
}: MedatReviewViewProps) {
  const { setIsResultPage } = usePractice();
  useEffect(() => {
    setIsResultPage(true);
    return () => {
      setIsResultPage(false);
    };
  }, [setIsResultPage]);

  const [filter, setFilter] = useState<"all" | "correct" | "incorrect" | "skipped" | "bookmarked">("all");
  const [sectionFilter, setSectionFilter] = useState<string>(initialSection || "all");

  useEffect(() => {
    if (initialSection) {
      setSectionFilter(initialSection);
    }
  }, [initialSection]);

  // Extract all available sections
  const availableSections = useMemo(() => {
    const list: string[] = [];
    items.forEach((it) => {
      const sec = it.question.section;
      if (sec && !list.includes(sec)) {
        list.push(sec);
      }
    });
    return list;
  }, [items]);

  // Items scoped to the chosen section
  const sectionScopedItems = useMemo(() => {
    if (sectionFilter === "all") return items;
    return items.filter((it) => {
      const qSec = it.question.section;
      const qSub = (it.question as any).subject || (it.question as any).topic;
      return qSec === sectionFilter || qSub === sectionFilter;
    });
  }, [items, sectionFilter]);

  const correctCount    = useMemo(() => sectionScopedItems.filter((it) => it.isCorrect).length, [sectionScopedItems]);
  const incorrectCount  = useMemo(() => sectionScopedItems.filter((it) => !it.isCorrect && it.selected !== undefined).length, [sectionScopedItems]);
  const skippedCount    = useMemo(() => sectionScopedItems.filter((it) => it.selected === undefined).length, [sectionScopedItems]);
  const bookmarkedCount = useMemo(() => sectionScopedItems.filter((it) => bookmarks.has(it.question.id)).length, [sectionScopedItems, bookmarks]);

  const filteredItems = useMemo(() => {
    return sectionScopedItems.filter((it) => {
      if (filter === "correct")    return it.isCorrect;
      if (filter === "incorrect")  return !it.isCorrect && it.selected !== undefined;
      if (filter === "skipped")    return it.selected === undefined;
      if (filter === "bookmarked") return bookmarks.has(it.question.id);
      return true;
    });
  }, [sectionScopedItems, filter, bookmarks]);

  const FILTERS = [
    { id: "all",        label: `Alle`,              count: sectionScopedItems.length, activeCls: "bg-slate-900 text-white shadow-sm",     inactiveCls: "text-slate-600 hover:text-slate-900" },
    { id: "correct",    label: `✓ Richtig`,         count: correctCount,              activeCls: "bg-emerald-600 text-white shadow-sm",   inactiveCls: "text-emerald-700 hover:text-emerald-900" },
    { id: "incorrect",  label: `✕ Falsch`,          count: incorrectCount,            activeCls: "bg-red-600 text-white shadow-sm",       inactiveCls: "text-red-600 hover:text-red-900" },
    { id: "skipped",    label: `— Übersprungen`,    count: skippedCount,              activeCls: "bg-slate-600 text-white shadow-sm",     inactiveCls: "text-slate-500 hover:text-slate-800" },
    { id: "bookmarked", label: `★ Vorgemerkt`,      count: bookmarkedCount,           activeCls: "bg-amber-500 text-white shadow-sm",     inactiveCls: "text-amber-600 hover:text-amber-900" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-900 select-none">

      {/* ── Sticky header ── */}
      <div className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-xs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Top row: back + title */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3.5">
            <button
              onClick={onBackToResults}
              className="group flex items-center gap-2 text-[13px] font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
              <span>Zurück zur Auswertung</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-[11.5px] font-semibold text-slate-600">
                {title}
              </span>
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-[11.5px] font-mono font-semibold text-slate-500">
                {filteredItems.length} / {items.length} Fragen
              </span>
            </div>
          </div>

          {/* Section filter row (if multiple sections exist, e.g. Full Mock) */}
          {availableSections.length > 1 && (
            <div className="flex items-center gap-1.5 pb-2.5 overflow-x-auto border-b border-slate-100">
              <span className="text-[11px] font-black uppercase text-slate-400 mr-1 shrink-0">Sektion:</span>
              <button
                onClick={() => setSectionFilter("all")}
                className={`px-3 py-1 rounded-xl text-[11.5px] font-bold shrink-0 transition-all ${
                  sectionFilter === "all"
                    ? "bg-slate-900 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Alle Sektionen ({items.length})
              </button>
              {availableSections.map((sec) => {
                const secCount = items.filter((it) => it.question.section === sec).length;
                return (
                  <button
                    key={sec}
                    onClick={() => setSectionFilter(sec)}
                    className={`px-3 py-1 rounded-xl text-[11.5px] font-bold shrink-0 transition-all ${
                      sectionFilter === sec
                        ? "bg-red-600 text-white shadow-2xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {sec} ({secCount})
                  </button>
                );
              })}
            </div>
          )}

          {/* Status filter row */}
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-[12.5px] font-black shrink-0 transition-all ${
                  filter === f.id ? f.activeCls : `bg-slate-100 ${f.inactiveCls}`
                }`}
              >
                <span>{f.label}</span>
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-black ${
                  filter === f.id ? "bg-white/20 text-white" : "bg-white text-slate-500"
                }`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrollable question list ── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 pb-28 space-y-5">

        {/* Summary strip */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-[12px] font-bold text-emerald-700">
            ✓ {correctCount} Richtig
          </span>
          <span className="rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-[12px] font-bold text-red-700">
            ✕ {incorrectCount} Falsch
          </span>
          {skippedCount > 0 && (
            <span className="rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-[12px] font-bold text-slate-500">
              — {skippedCount} Übersprungen
            </span>
          )}
          {bookmarkedCount > 0 && (
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-[12px] font-bold text-amber-700">
              ★ {bookmarkedCount} Vorgemerkt
            </span>
          )}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-16 text-center shadow-sm">
            <p className="text-[13.5px] text-slate-400 font-medium">
              Keine Fragen in dieser Kategorie.
            </p>
          </div>
        )}

        {/* Question cards */}
        {filteredItems.map((item) => {
          const globalIndex = items.findIndex((i) => i.question.id === item.question.id);
          return (
            <QuestionCard
              key={item.question.id}
              item={item}
              globalIndex={globalIndex}
              isBookmarked={bookmarks.has(item.question.id)}
              onToggleBookmark={onToggleBookmark}
            />
          );
        })}
      </div>

      {/* ── Fixed bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-xs">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5">
          <span className="text-[12px] text-slate-400 font-mono">
            {filteredItems.length} Fragen angezeigt
          </span>
          <button
            onClick={onBackToResults}
            className="rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white py-2.5 px-6 font-black text-[13px] transition-all shadow-sm"
          >
            Zurück zur Auswertung →
          </button>
        </div>
      </div>
    </div>
  );
}
