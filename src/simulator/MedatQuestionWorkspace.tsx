import React, { useMemo, useState, useRef, useEffect } from "react";
import type { SectionCode } from "../content/medat/config";
import { DIconBookmark, DIconBookmarkFilled } from "../dashboard/icons";
import { MathText } from "../components/MathText";
import type { FzQuestionData } from "../data/questions/fz/types";
import { ALL_FZ_QUESTIONS } from "../data/questions/fz";
import { FzQuestionWorkspace } from "./fz/FzQuestionWorkspace";
import type { ZfQuestionData } from "../data/questions/zf/types";
import { ALL_ZF_QUESTIONS } from "../data/questions/zf";
import { ZfQuestionWorkspace } from "./zf/ZfQuestionWorkspace";
import type { WfQuestionData } from "../data/questions/wf/types";
import { ALL_WF_QUESTIONS } from "../data/questions/wf";
import { WfQuestionWorkspace } from "./wf/WfQuestionWorkspace";
import type { IeQuestionData } from "../data/questions/ie/types";
import { ALL_IE_QUESTIONS } from "../data/questions/ie";
import { IeQuestionWorkspace } from "./ie/IeQuestionWorkspace";
import type { ErQuestionData } from "../data/questions/er/types";
import { ALL_ER_QUESTIONS } from "../data/questions/er";
import { ErQuestionWorkspace } from "./er/ErQuestionWorkspace";
import type { EeQuestionData } from "../data/questions/ee/types";
import { ALL_EE_QUESTIONS } from "../data/questions/ee";
import { EeQuestionWorkspace } from "./ee/EeQuestionWorkspace";
import type { SeQuestionData } from "../data/questions/se/types";
import { ALL_SE_QUESTIONS } from "../data/questions/se";
import { SeQuestionWorkspace } from "./se/SeQuestionWorkspace";

export interface SimulatorQuestionProp {
  id: string;
  chapterId?: string;
  question?: string;
  questionText?: string;
  options: string[] | [string, string, string, string, string];
  correct?: number;
  correctAnswer?: number;
  explanation?: string;
  topic?: string;
  concept?: string;
  passage?: string;
  difficulty?: string;
  section?: string;
  subjectId?: string;
  tags?: string[];
  fzData?: FzQuestionData;
  zfData?: ZfQuestionData;
  wfData?: WfQuestionData;
  ieData?: IeQuestionData;
  erData?: ErQuestionData;
  eeData?: EeQuestionData;
  seData?: SeQuestionData;
  gmCardData?: any;
}

interface MedatQuestionWorkspaceProps {
  question: SimulatorQuestionProp;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined;
  isMarked: boolean;
  answeredCount?: number;
  sectionCode?: SectionCode;
  subjectTitle?: string;
  isLocked?: boolean;
  lockedReason?: string;
  hidePrevButton?: boolean;
  onSelectOption: (index: number) => void;
  onClearOption?: () => void;
  onToggleMark: () => void;
  onPrev: () => void;
  onNext: () => void;
  onRequestSubmit: () => void;
  onOpenMobileOverview?: () => void;
  onOpenScratchpad?: () => void;
  onOpenFormulas?: () => void;
  onOpenPeriodicTable?: () => void;
}

export function MedatQuestionWorkspace({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isMarked,
  answeredCount,
  sectionCode,
  subjectTitle,
  isLocked = false,
  lockedReason,
  hidePrevButton = false,
  onSelectOption,
  onClearOption,
  onToggleMark,
  onPrev,
  onNext,
  onRequestSubmit,
  onOpenMobileOverview,
  onOpenScratchpad,
  onOpenFormulas,
  onOpenPeriodicTable,
}: MedatQuestionWorkspaceProps) {
  const fzData =
    question.fzData ||
    ALL_FZ_QUESTIONS.find((q) => q.id === question.id);

  if (fzData) {
    return (
      <FzQuestionWorkspace
        fzData={fzData}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        selectedOption={selectedOption}
        isMarked={isMarked}
        isLocked={isLocked}
        lockedReason={lockedReason}
        hidePrevButton={hidePrevButton}
        onSelectOption={onSelectOption}
        onClearOption={onClearOption}
        onToggleMark={onToggleMark}
        onPrev={onPrev}
        onNext={onNext}
        onRequestSubmit={onRequestSubmit}
      />
    );
  }

  const zfData =
    question.zfData ||
    ALL_ZF_QUESTIONS.find((q) => q.id === question.id);

  if (zfData) {
    return (
      <ZfQuestionWorkspace
        zfData={zfData}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        selectedOption={selectedOption}
        isMarked={isMarked}
        isLocked={isLocked}
        lockedReason={lockedReason}
        hidePrevButton={hidePrevButton}
        onSelectOption={onSelectOption}
        onClearOption={onClearOption}
        onToggleMark={onToggleMark}
        onPrev={onPrev}
        onNext={onNext}
        onRequestSubmit={onRequestSubmit}
      />
    );
  }

  const wfData =
    question.wfData ||
    ALL_WF_QUESTIONS.find((q) => q.id === question.id);

  if (wfData) {
    return (
      <WfQuestionWorkspace
        wfData={wfData}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        selectedOption={selectedOption}
        isMarked={isMarked}
        isLocked={isLocked}
        lockedReason={lockedReason}
        hidePrevButton={hidePrevButton}
        onSelectOption={onSelectOption}
        onClearOption={onClearOption}
        onToggleMark={onToggleMark}
        onPrev={onPrev}
        onNext={onNext}
        onRequestSubmit={onRequestSubmit}
      />
    );
  }

  const ieData =
    question.ieData ||
    ALL_IE_QUESTIONS.find((q) => q.id === question.id);

  if (ieData) {
    return (
      <IeQuestionWorkspace
        ieData={ieData}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        selectedOption={selectedOption}
        isMarked={isMarked}
        isLocked={isLocked}
        lockedReason={lockedReason}
        hidePrevButton={hidePrevButton}
        onSelectOption={onSelectOption}
        onClearOption={onClearOption}
        onToggleMark={onToggleMark}
        onPrev={onPrev}
        onNext={onNext}
        onRequestSubmit={onRequestSubmit}
      />
    );
  }

  const erData =
    question.erData ||
    ALL_ER_QUESTIONS.find((q) => q.id === question.id);

  if (erData) {
    return (
      <ErQuestionWorkspace
        erData={erData}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        selectedOption={selectedOption}
        isMarked={isMarked}
        isLocked={isLocked}
        lockedReason={lockedReason}
        hidePrevButton={hidePrevButton}
        onSelectOption={onSelectOption}
        onClearOption={onClearOption}
        onToggleMark={onToggleMark}
        onPrev={onPrev}
        onNext={onNext}
        onRequestSubmit={onRequestSubmit}
      />
    );
  }

  const eeData =
    question.eeData ||
    ALL_EE_QUESTIONS.find((q) => q.id === question.id);

  if (eeData) {
    return (
      <EeQuestionWorkspace
        eeData={eeData}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        selectedOption={selectedOption}
        isMarked={isMarked}
        isLocked={isLocked}
        lockedReason={lockedReason}
        hidePrevButton={hidePrevButton}
        onSelectOption={onSelectOption}
        onClearOption={onClearOption}
        onToggleMark={onToggleMark}
        onPrev={onPrev}
        onNext={onNext}
        onRequestSubmit={onRequestSubmit}
      />
    );
  }

  const seData =
    question.seData ||
    ALL_SE_QUESTIONS.find((q) => q.id === question.id);

  if (seData) {
    return (
      <SeQuestionWorkspace
        seData={seData}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        selectedOption={selectedOption}
        isMarked={isMarked}
        isLocked={isLocked}
        lockedReason={lockedReason}
        hidePrevButton={hidePrevButton}
        onSelectOption={onSelectOption}
        onClearOption={onClearOption}
        onToggleMark={onToggleMark}
        onPrev={onPrev}
        onNext={onNext}
        onRequestSubmit={onRequestSubmit}
      />
    );
  }

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;
  const qText = question.question || question.questionText || "";
  const unansweredCount = Math.max(
    0,
    totalQuestions - (answeredCount ?? (selectedOption !== undefined ? 1 : 0))
  );

  // TV Mobile layout mode: "split" (both text and question stacked) vs "tabs" (flip between views)
  const [tvMobileLayout, setTvMobileLayout] = useState<"split" | "tabs">(() => {
    try {
      return (localStorage.getItem("medat_tv_mobile_layout") as "split" | "tabs") || "split";
    } catch {
      return "split";
    }
  });

  // Split-view text card height on mobile: "compact" (220px) | "balanced" (330px) | "expanded" (480px)
  const [tvSplitHeight, setTvSplitHeight] = useState<"compact" | "balanced" | "expanded">("balanced");

  // Reading passage typography settings
  const [tvFontSize, setTvFontSize] = useState<"compact" | "normal" | "large">("normal");
  const [tvFontFamily, setTvFontFamily] = useState<"serif" | "sans">("serif");

  // Mobile TV tab switcher (Reading passage vs Question) when in "tabs" mode
  const [tvMobileTab, setTvMobileTab] = useState<"passage" | "question">("question");

  // Slide-up Peek Sheet for quick passage review
  const [isTvPeekSheetOpen, setIsTvPeekSheetOpen] = useState<boolean>(false);

  // In-text Search State
  const [isTvSearchOpen, setIsTvSearchOpen] = useState<boolean>(false);
  const [tvSearchQuery, setTvSearchQuery] = useState<string>("");

  // Highlighted Paragraph tracking
  const [highlightedParagraph, setHighlightedParagraph] = useState<number | null>(null);
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);
  const peekParagraphRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect if question has a distinct text passage (TV or long scientific text)
  const isTextVerstaendnis = useMemo(() => {
    if (Boolean(question.passage)) return true;
    if (sectionCode === "TV" || question.section === "TV") return true;
    if (question.tags?.includes("TV") || question.tags?.includes("Textverständnis")) return true;
    return qText.includes("Textauszug:") || qText.includes("Text:");
  }, [question.passage, sectionCode, question.section, question.tags, qText]);

  // Parse text passage if present for TV split-view
  const parsedPassage = useMemo(() => {
    if (question.passage) {
      return {
        passage: question.passage.trim(),
        prompt: qText.trim(),
      };
    }
    if (!isTextVerstaendnis) return null;
    const textMatch = qText.match(/(?:Textauszug:|Text:)\s*[„"']([\s\S]*?)[“"']\s*\n\n([\s\S]*)/i);
    if (textMatch) {
      return {
        passage: textMatch[1].trim(),
        prompt: textMatch[2].trim(),
      };
    }
    const parts = qText.split("\n\n");
    if (parts.length >= 2 && parts[0].length > 100) {
      return {
        passage: parts[0].trim(),
        prompt: parts.slice(1).join("\n\n").trim(),
      };
    }
    return null;
  }, [question.passage, isTextVerstaendnis, qText]);

  // Paragraph splitting for TV reading pane
  const passageParagraphs = useMemo(() => {
    if (!parsedPassage?.passage) return [];
    return parsedPassage.passage.split("\n\n").filter(Boolean);
  }, [parsedPassage]);

  // Target paragraph hint detection (e.g. "gemäß Absatz 2" or "in Absatz 3")
  const detectedTargetParagraph = useMemo(() => {
    const combined = `${qText} ${question.concept || ""} ${question.explanation || ""} ${(question as any).evidenceLocation || ""}`.toLowerCase();
    const match = combined.match(/absatz\s*(\d+)/i) || combined.match(/¶\s*(\d+)/i);
    if (match && match[1]) {
      const pNum = parseInt(match[1], 10);
      if (pNum >= 1 && pNum <= passageParagraphs.length) {
        return pNum;
      }
    }
    return null;
  }, [qText, question.concept, question.explanation, (question as any).evidenceLocation, passageParagraphs.length]);

  // In-text Search occurrences counter
  const searchMatchCount = useMemo(() => {
    if (!tvSearchQuery.trim() || !parsedPassage?.passage) return 0;
    try {
      const escaped = tvSearchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escaped, "gi");
      const matches = parsedPassage.passage.match(regex);
      return matches ? matches.length : 0;
    } catch {
      return 0;
    }
  }, [tvSearchQuery, parsedPassage?.passage]);

  // Scroll to paragraph function with highlight animation
  const scrollToParagraph = (idx: number, isPeek: boolean = false) => {
    setHighlightedParagraph(idx);
    const targetRef = isPeek ? peekParagraphRefs.current[idx] : paragraphRefs.current[idx];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      setHighlightedParagraph(null);
    }, 2400);
  };

  // Helper to highlight search matches inside paragraphs
  const renderHighlightedText = (text: string, query: string) => {
    if (!query || !query.trim()) return text;
    try {
      const trimmed = query.trim();
      const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${escaped})`, "gi");
      const parts = text.split(regex);
      if (parts.length <= 1) return text;

      return parts.map((part, i) =>
        part.toLowerCase() === trimmed.toLowerCase() ? (
          <mark
            key={i}
            className="bg-amber-300 text-amber-950 font-black rounded px-1 py-0.5 shadow-2xs"
          >
            {part}
          </mark>
        ) : (
          part
        )
      );
    } catch {
      return text;
    }
  };

  // Typography class based on user settings
  const fontTypographyClass = useMemo(() => {
    const size =
      tvFontSize === "compact"
        ? "text-[13px] sm:text-[13.5px] leading-[1.7]"
        : tvFontSize === "large"
        ? "text-[16px] sm:text-[17px] leading-[1.95]"
        : "text-[14.5px] sm:text-[15px] leading-[1.85]";
    const font = tvFontFamily === "sans" ? "font-sans" : "font-serif";
    return `${size} ${font}`;
  }, [tvFontSize, tvFontFamily]);

  // Split-view max height class for mobile
  const splitHeightClass = useMemo(() => {
    switch (tvSplitHeight) {
      case "compact":
        return "max-h-[200px] sm:max-h-[240px]";
      case "expanded":
        return "max-h-[460px] sm:max-h-[520px]";
      case "balanced":
      default:
        return "max-h-[300px] sm:max-h-[350px]";
    }
  }, [tvSplitHeight]);

  // Specific layout: KFF number sequence
  const isNumberSequence = useMemo(() => {
    return (
      (sectionCode === "KFF" || question.section === "KFF" || question.subjectId?.includes("num")) &&
      qText.includes("·") &&
      qText.includes("?")
    );
  }, [sectionCode, question.section, question.subjectId, qText]);

  // BMS Text Zoom Scale for Mobile & Small Screens
  const [bmsFontSize, setBmsFontSize] = useState<"normal" | "large">("normal");

  // BMS Discipline Detection (Biologie, Chemie, Physik, Mathematik)
  const bmsDiscipline = useMemo(() => {
    const s = (question.subjectId || "").toLowerCase();
    const c = (question.chapterId || "").toLowerCase();
    const t = (question.topic || "").toLowerCase();
    if (s === "bio" || c.startsWith("bio") || t.includes("biologie")) {
      return { label: "Biologie", short: "BIO", badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200/80" };
    }
    if (s === "chem" || c.startsWith("chem") || t.includes("chemie")) {
      return { label: "Chemie", short: "CHEM", badgeBg: "bg-sky-50 text-sky-800 border-sky-200/80" };
    }
    if (s === "phys" || c.startsWith("phys") || t.includes("physik")) {
      return { label: "Physik", short: "PHYS", badgeBg: "bg-violet-50 text-violet-800 border-violet-200/80" };
    }
    if (s === "math" || c.startsWith("math") || t.includes("mathe")) {
      return { label: "Mathematik", short: "MATH", badgeBg: "bg-amber-50 text-amber-800 border-amber-200/80" };
    }
    return null;
  }, [question.subjectId, question.chapterId, question.topic]);

  // Touch Swipe Gesture for Fluid Mobile Question Navigation
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    // Prevent accidental swipe when user is interacting with text passage or form elements
    const target = e.target as HTMLElement | null;
    if (
      target?.closest?.(".passage-scroll-area") ||
      target?.tagName === "INPUT" ||
      target?.tagName === "BUTTON"
    ) {
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

    // Horizontal swipe threshold: at least 65px and predominantly horizontal
    if (Math.abs(deltaX) > 65 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        if (!isLast) onNext();
      } else {
        if (!isFirst && !hidePrevButton) onPrev();
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F8FAFC] overflow-hidden antialiased select-none">
      {/* =================================================================
         MAIN SCROLLABLE QUESTION WORKSPACE
         ================================================================= */}
      <main
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 overflow-y-auto px-3.5 sm:px-6 lg:px-8 py-3.5 sm:py-7"
      >
        {/* MODE 1: SPLIT SCREEN FOR TEXTVERSTÄNDNIS (TV) */}
        {isTextVerstaendnis && parsedPassage ? (
          <div className="mx-auto w-full max-w-[1700px] pb-6">
            {/* ── MOBILE CONTROL BAR (< md) ── */}
            <div className="md:hidden flex flex-col gap-2.5 mb-3.5">
              {/* Layout Mode Selector (Split vs Tabs) + Status */}
              <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      setTvMobileLayout("split");
                      try {
                        localStorage.setItem("medat_tv_mobile_layout", "split");
                      } catch {}
                    }}
                    className={`px-3 py-1.5 rounded-xl text-[11.5px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      tvMobileLayout === "split"
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <span>📑</span>
                    <span>Geteilt (Beides)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTvMobileLayout("tabs");
                      try {
                        localStorage.setItem("medat_tv_mobile_layout", "tabs");
                      } catch {}
                    }}
                    className={`px-3 py-1.5 rounded-xl text-[11.5px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      tvMobileLayout === "tabs"
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <span>🗂️</span>
                    <span>Reiter</span>
                  </button>
                </div>

                {/* Selection status chip */}
                <div className="pr-1.5">
                  {selectedOption !== undefined ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10.5px] font-black">
                      <span>✓</span>
                      <span>[{String.fromCharCode(65 + selectedOption)}]</span>
                    </span>
                  ) : (
                    <span className="text-[10.5px] font-mono text-slate-400">
                      Noch offen
                    </span>
                  )}
                </div>
              </div>

              {/* In Tabs mode: Tab Switcher (Textauszug vs Frage) */}
              {tvMobileLayout === "tabs" && (
                <div className="flex items-center p-1 bg-slate-200/70 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setTvMobileTab("passage")}
                    className={`flex-1 py-2 px-3 text-[12px] font-black rounded-xl transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                      tvMobileTab === "passage"
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>📖</span>
                    <span>Textauszug</span>
                    <span className="text-[10px] text-slate-400 font-mono font-normal">
                      ({passageParagraphs.length} Abs.)
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTvMobileTab("question")}
                    className={`flex-1 py-2 px-3 text-[12px] font-black rounded-xl transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                      tvMobileTab === "question"
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>❓</span>
                    <span>Frage {currentIndex + 1} / {totalQuestions}</span>
                    {selectedOption !== undefined && (
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    )}
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-start">
              {/* LEFT PANE: Reading Passage */}
              <div
                className={`md:col-span-6 xl:col-span-6 rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm flex flex-col space-y-3.5 transition-all ${
                  tvMobileLayout === "tabs" && tvMobileTab === "question"
                    ? "hidden md:flex"
                    : "flex"
                }`}
              >
                {/* Passage Toolbar */}
                <div className="flex flex-col gap-2.5 border-b border-slate-100 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky-50 text-sky-700 text-[12px] font-bold border border-sky-200/80 shrink-0">
                        📖
                      </span>
                      <div className="min-w-0">
                        <div className="text-[12px] font-black uppercase tracking-wider text-slate-800 leading-tight">
                          Textauszug
                        </div>
                        {question.topic && (
                          <div className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 truncate max-w-[130px] sm:max-w-[220px]">
                            {question.topic}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Toolbar Action Buttons */}
                    <div className="flex items-center gap-1">
                      {/* Search Toggle */}
                      <button
                        type="button"
                        onClick={() => setIsTvSearchOpen((prev) => !prev)}
                        className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                          isTvSearchOpen || tvSearchQuery
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                        title="Suchbegriff im Text hervorheben"
                      >
                        <span>🔍</span>
                        <span className="hidden sm:inline">Suche</span>
                      </button>

                      {/* Split Height Toggle (Only on mobile in split mode) */}
                      {tvMobileLayout === "split" && (
                        <button
                          type="button"
                          onClick={() => {
                            setTvSplitHeight((curr) =>
                              curr === "compact"
                                ? "balanced"
                                : curr === "balanced"
                                ? "expanded"
                                : "compact"
                            );
                          }}
                          className="md:hidden px-2 py-1 text-[11px] font-bold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all cursor-pointer"
                          title="Höhe des Textbereichs anpassen"
                        >
                          ↕ {tvSplitHeight === "compact" ? "Klein" : tvSplitHeight === "balanced" ? "Mittel" : "Groß"}
                        </button>
                      )}

                      {/* Font Family Toggle */}
                      <button
                        type="button"
                        onClick={() =>
                          setTvFontFamily((f) => (f === "serif" ? "sans" : "serif"))
                        }
                        className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                          tvFontFamily === "serif"
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                        title="Zwischen Buchdruck-Serifen & serifenloser UI-Schrift wechseln"
                      >
                        {tvFontFamily === "serif" ? "Serif" : "Sans"}
                      </button>

                      {/* Font Size Selector */}
                      <div className="flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200/80">
                        <button
                          type="button"
                          onClick={() => setTvFontSize("compact")}
                          className={`px-1.5 py-0.5 text-[10.5px] font-bold rounded-md transition-all cursor-pointer ${
                            tvFontSize === "compact"
                              ? "bg-white text-slate-900 shadow-2xs"
                              : "text-slate-500 hover:text-slate-900"
                          }`}
                          title="Kompakte Schrift"
                        >
                          A-
                        </button>
                        <button
                          type="button"
                          onClick={() => setTvFontSize("normal")}
                          className={`px-1.5 py-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                            tvFontSize === "normal"
                              ? "bg-white text-slate-900 shadow-2xs"
                              : "text-slate-500 hover:text-slate-900"
                          }`}
                          title="Standard-Schrift"
                        >
                          A
                        </button>
                        <button
                          type="button"
                          onClick={() => setTvFontSize("large")}
                          className={`px-1.5 py-0.5 text-[11.5px] font-bold rounded-md transition-all cursor-pointer ${
                            tvFontSize === "large"
                              ? "bg-white text-slate-900 shadow-2xs"
                              : "text-slate-500 hover:text-slate-900"
                          }`}
                          title="Große Schrift"
                        >
                          A+
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Paragraph Quick-Jump Chips (¶1, ¶2, ...) */}
                  {passageParagraphs.length > 0 && (
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none pt-0.5">
                      <span className="text-[10.5px] font-bold uppercase text-slate-400 shrink-0 mr-0.5">
                        Absatz:
                      </span>
                      {passageParagraphs.map((_, pIdx) => {
                        const isTarget = detectedTargetParagraph === pIdx + 1;
                        const isFocused = highlightedParagraph === pIdx;
                        return (
                          <button
                            key={`p-chip-${pIdx}`}
                            type="button"
                            onClick={() => scrollToParagraph(pIdx)}
                            className={`px-2 py-0.5 rounded-lg text-[11px] font-mono font-bold transition-all shrink-0 cursor-pointer ${
                              isFocused
                                ? "bg-amber-400 text-amber-950 shadow-2xs ring-2 ring-amber-300"
                                : isTarget
                                ? "bg-red-50 text-red-700 border border-red-200 ring-1 ring-red-300 font-black"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                            title={`Zu Absatz ${pIdx + 1} springen${isTarget ? " (In Frage referenziert)" : ""}`}
                          >
                            ¶{pIdx + 1}
                            {isTarget && " 🎯"}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Collapsible In-Text Search Box */}
                  {isTvSearchOpen && (
                    <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-50 border border-slate-200 animate-in fade-in duration-150">
                      <span className="text-slate-400 text-[12px] pl-1">🔍</span>
                      <input
                        type="text"
                        value={tvSearchQuery}
                        onChange={(e) => setTvSearchQuery(e.target.value)}
                        placeholder="Begriff suchen (z.B. REM, Hypothese)..."
                        className="flex-1 bg-transparent text-[12px] text-slate-900 placeholder:text-slate-400 outline-none"
                      />
                      {tvSearchQuery && (
                        <span className="text-[10.5px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-900 shrink-0">
                          {searchMatchCount} Treffer
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setTvSearchQuery("");
                          setIsTvSearchOpen(false);
                        }}
                        className="h-5 w-5 rounded-md text-slate-400 hover:text-slate-700 flex items-center justify-center text-[11px] font-bold cursor-pointer"
                        title="Suche schließen"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>

                {/* Scrollable Passage Body */}
                <div
                  className={`passage-scroll-area space-y-4 text-slate-800 overflow-y-auto pr-2 select-text transition-all ${fontTypographyClass} ${
                    tvMobileLayout === "split"
                      ? `${splitHeightClass} md:max-h-[calc(100vh-250px)]`
                      : "max-h-[calc(100vh-260px)]"
                  }`}
                >
                  {passageParagraphs.length > 0 ? (
                    passageParagraphs.map((paragraph, pIdx) => {
                      const isFocused = highlightedParagraph === pIdx;
                      return (
                        <div
                          key={pIdx}
                          ref={(el) => (paragraphRefs.current[pIdx] = el)}
                          className={`flex gap-2.5 sm:gap-3 items-start p-2 rounded-2xl transition-all duration-300 ${
                            isFocused
                              ? "bg-amber-100/70 border border-amber-300 shadow-xs ring-2 ring-amber-300/40"
                              : ""
                          }`}
                        >
                          <span className="text-[11px] sm:text-[11.5px] font-mono text-slate-400 select-none pt-0.5 shrink-0 font-bold">
                            ¶{pIdx + 1}
                          </span>
                          <p className="m-0 text-left sm:text-justify hyphens-auto break-words leading-[1.85]">
                            {renderHighlightedText(paragraph, tvSearchQuery)}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-left sm:text-justify hyphens-auto break-words leading-relaxed">
                      {renderHighlightedText(parsedPassage.passage, tvSearchQuery)}
                    </p>
                  )}
                </div>

                {/* Mobile Jump to Question CTA (Only in Tabs mode) */}
                {tvMobileLayout === "tabs" && (
                  <div className="md:hidden pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setTvMobileTab("question")}
                      className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-[12.5px] font-black shadow-sm flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                    >
                      <span>Zur Frage {currentIndex + 1} springen</span>
                      <span>→</span>
                    </button>
                  </div>
                )}
              </div>

              {/* RIGHT PANE: Question Statement & Answer Options */}
              <div
                key={question.id || `split-q-${currentIndex}`}
                className={`md:col-span-6 xl:col-span-6 space-y-3.5 transition-all ${
                  tvMobileLayout === "tabs" && tvMobileTab === "passage"
                    ? "hidden md:block"
                    : "block"
                }`}
              >
                {/* Mobile Quick Peek Sheet Trigger (When in Tabs mode) */}
                {tvMobileLayout === "tabs" && (
                  <div className="md:hidden flex items-center justify-between bg-sky-50/90 border border-sky-200/90 rounded-2xl p-2.5 text-[12px] shadow-2xs">
                    <div className="flex items-center gap-2 text-sky-950 font-bold min-w-0">
                      <span className="text-[14px] shrink-0">📖</span>
                      <span className="truncate">
                        {detectedTargetParagraph
                          ? `Bezug: Absatz ¶${detectedTargetParagraph}`
                          : "Textpassage nachlesen"}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsTvPeekSheetOpen(true);
                        if (detectedTargetParagraph) {
                          setTimeout(() => scrollToParagraph(detectedTargetParagraph - 1, true), 120);
                        }
                      }}
                      className="rounded-xl bg-white border border-sky-300 text-sky-800 px-3 py-1 text-[11px] font-black shadow-2xs active:scale-95 cursor-pointer hover:bg-sky-50 shrink-0"
                    >
                      {detectedTargetParagraph ? `Absatz ¶${detectedTargetParagraph} öffnen` : "Text-Spicker öffnen"}
                    </button>
                  </div>
                )}

                {/* Question Statement Card */}
                <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        translate="no"
                        className="notranslate text-[11px] sm:text-[11.5px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-xl font-mono"
                      >
                        Frage {currentIndex + 1} von {totalQuestions}
                      </span>
                      {(question.concept || (question as any).questionType) && (
                        <span className="rounded-xl bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-[10.5px] font-bold text-amber-900 shadow-2xs">
                          {question.concept || (question as any).questionType}
                        </span>
                      )}
                    </div>

                    {/* Direct Quick Jump to Target Paragraph or Reading Peek */}
                    {detectedTargetParagraph ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (tvMobileLayout === "tabs") {
                            setIsTvPeekSheetOpen(true);
                            setTimeout(() => scrollToParagraph(detectedTargetParagraph - 1, true), 120);
                          } else {
                            scrollToParagraph(detectedTargetParagraph - 1, false);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-[11.5px] font-mono font-bold shadow-2xs active:scale-95 cursor-pointer"
                        title={`Zu Absatz ${detectedTargetParagraph} springen`}
                      >
                        <span>🎯</span>
                        <span>Absatz ¶{detectedTargetParagraph} nachlesen</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          if (tvMobileLayout === "tabs") {
                            setIsTvPeekSheetOpen(true);
                          } else {
                            paragraphRefs.current[0]?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="md:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 text-[11.5px] font-bold shadow-2xs active:scale-95 cursor-pointer"
                        title="Textauszug öffnen"
                      >
                        <span>📖</span>
                        <span>Text nachschlagen</span>
                      </button>
                    )}
                  </div>
                  <MathText
                    as="h2"
                    className="text-[15.5px] sm:text-[18px] font-bold leading-snug text-slate-900 tracking-tight"
                    text={parsedPassage.prompt}
                  />
                </div>

                {/* Answer Choices */}
                <div className="space-y-2 sm:space-y-3" role="radiogroup" aria-label="Antwortoptionen">
                  {question.options.map((optText, idx) => {
                    const isSelected = selectedOption === idx;
                    const letterKey = String.fromCharCode(65 + idx);

                    return (
                      <div
                        key={idx}
                        onClick={() => onSelectOption(idx)}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            onSelectOption(idx);
                          }
                        }}
                        className={`group flex items-start sm:items-center justify-between gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl border transition-all duration-150 cursor-pointer active:scale-[0.995] select-none min-h-[50px] sm:min-h-[56px] ${
                          isSelected
                            ? "border-red-600 bg-red-50/40 ring-2 ring-red-500/25 shadow-xs"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 hover:shadow-xs"
                        }`}
                      >
                        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                          <span
                            className={`flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl text-[12px] sm:text-[13.5px] font-mono font-black uppercase transition-all mt-0.5 sm:mt-0 ${
                              isSelected
                                ? "bg-red-600 text-white shadow-xs"
                                : "border border-slate-200 bg-slate-100 text-slate-700 group-hover:bg-slate-200/90"
                            }`}
                          >
                            {letterKey}
                          </span>
                          <span
                            className={`text-[13.5px] sm:text-[15px] leading-[1.6] transition-colors py-0.5 ${
                              isSelected ? "font-bold text-slate-900" : "font-normal text-slate-800"
                            }`}
                          >
                            <MathText text={optText} />
                          </span>
                        </div>

                        <span
                          className={`h-5 w-5 shrink-0 rounded-full border flex items-center justify-center transition-all ${
                            isSelected ? "border-red-600 bg-red-600 text-white shadow-2xs" : "border-slate-300 bg-white group-hover:border-slate-400"
                          }`}
                        >
                          {isSelected && <span className="h-2 w-2 rounded-full bg-white animate-scale-in" />}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Optional Unselect / Clear Answer on Mobile Practice in TV */}
                {selectedOption !== undefined && !isLocked && onClearOption && (
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={onClearOption}
                      className="text-[11px] sm:text-[11.5px] font-medium text-slate-400 hover:text-slate-700 transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-slate-100 active:scale-95 flex items-center gap-1"
                    >
                      <span>✕</span>
                      <span>Auswahl aufheben</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* ── MOBILE SLIDE-UP PEEK SHEET (TEXT-SPICKER) ── */}
            {isTvPeekSheetOpen && (
              <div
                className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex flex-col justify-end md:hidden animate-in fade-in duration-200"
                onClick={() => setIsTvPeekSheetOpen(false)}
              >
                <div
                  className="w-full max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden border-t border-slate-200 animate-in slide-in-from-bottom duration-250"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Drag handle */}
                  <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2 shrink-0" />

                  {/* Sheet Header */}
                  <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[15px] shrink-0">📖</span>
                      <div className="min-w-0">
                        <div className="text-[13px] font-black text-slate-900 leading-tight">
                          Textauszug (Spicker)
                        </div>
                        {question.topic && (
                          <div className="text-[10px] font-bold text-slate-500 truncate max-w-[170px]">
                            {question.topic}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* In-Sheet Font Size Selector */}
                      <div className="flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200/80">
                        <button
                          type="button"
                          onClick={() => setTvFontSize("compact")}
                          className={`px-1.5 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                            tvFontSize === "compact"
                              ? "bg-white text-slate-900 shadow-2xs"
                              : "text-slate-500 hover:text-slate-900"
                          }`}
                          title="Kompakte Schrift"
                        >
                          A-
                        </button>
                        <button
                          type="button"
                          onClick={() => setTvFontSize("normal")}
                          className={`px-1.5 py-0.5 text-[10.5px] font-bold rounded-md transition-all cursor-pointer ${
                            tvFontSize === "normal"
                              ? "bg-white text-slate-900 shadow-2xs"
                              : "text-slate-500 hover:text-slate-900"
                          }`}
                          title="Standard-Schrift"
                        >
                          A
                        </button>
                        <button
                          type="button"
                          onClick={() => setTvFontSize("large")}
                          className={`px-1.5 py-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                            tvFontSize === "large"
                              ? "bg-white text-slate-900 shadow-2xs"
                              : "text-slate-500 hover:text-slate-900"
                          }`}
                          title="Große Schrift"
                        >
                          A+
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsTvPeekSheetOpen(false)}
                        className="h-8 w-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center text-[13px] font-bold cursor-pointer"
                        title="Schließen"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Paragraph Jump Chips inside Sheet */}
                  {passageParagraphs.length > 0 && (
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                      <span className="text-[10px] font-bold uppercase text-slate-400 shrink-0">
                        Gehe zu:
                      </span>
                      {passageParagraphs.map((_, pIdx) => {
                        const isTarget = detectedTargetParagraph === pIdx + 1;
                        return (
                          <button
                            key={`peek-chip-${pIdx}`}
                            type="button"
                            onClick={() => scrollToParagraph(pIdx, true)}
                            className={`px-2.5 py-1.5 rounded-xl text-[11px] font-mono font-bold shrink-0 min-h-[30px] cursor-pointer ${
                              isTarget
                                ? "bg-amber-100 text-amber-950 border border-amber-300 ring-2 ring-amber-300/40 font-black"
                                : "bg-white border border-slate-200 text-slate-700 active:bg-slate-100"
                            }`}
                          >
                            ¶{pIdx + 1}
                            {isTarget && " 🎯"}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Scrollable Text inside Sheet */}
                  <div
                    className={`passage-scroll-area p-4 overflow-y-auto space-y-3.5 select-text ${fontTypographyClass}`}
                    style={{ maxHeight: "calc(85vh - 140px)" }}
                  >
                    {passageParagraphs.map((paragraph, pIdx) => {
                      const isFocused = highlightedParagraph === pIdx;
                      return (
                        <div
                          key={`peek-par-${pIdx}`}
                          ref={(el) => (peekParagraphRefs.current[pIdx] = el)}
                          className={`flex gap-2.5 items-start p-2 rounded-2xl transition-all duration-300 ${
                            isFocused
                              ? "bg-amber-100/70 border border-amber-300 shadow-xs ring-2 ring-amber-300/40"
                              : ""
                          }`}
                        >
                          <span className="text-[11px] font-mono font-bold text-slate-400 pt-0.5 shrink-0">
                            ¶{pIdx + 1}
                          </span>
                          <p className="m-0 text-left sm:text-justify hyphens-auto break-words leading-[1.85]">
                            {renderHighlightedText(paragraph, tvSearchQuery)}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Sheet Footer */}
                  <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                    <span className="text-[11px] font-bold text-slate-600 truncate">
                      {selectedOption !== undefined
                        ? `✓ Antwort [${String.fromCharCode(65 + selectedOption)}] gewählt`
                        : "Wähle gleich deine Antwort"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsTvPeekSheetOpen(false)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-[12px] font-bold active:scale-95 cursor-pointer shrink-0"
                    >
                      Zur Frage
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ── STICKY FLOATING QUICK-PEEK BUTTON ON MOBILE (< md) ── */}
            <button
              type="button"
              onClick={() => {
                setIsTvPeekSheetOpen(true);
                if (detectedTargetParagraph) {
                  setTimeout(() => scrollToParagraph(detectedTargetParagraph - 1, true), 120);
                }
              }}
              className="md:hidden fixed bottom-18 right-3.5 z-30 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-900/95 hover:bg-slate-900 text-white shadow-xl active:scale-95 border border-slate-700/60 backdrop-blur-md cursor-pointer transition-all"
              aria-label="Textauszug als Spicker aufklappen"
            >
              <span className="text-[14px]">📖</span>
              <span className="text-[12px] font-black tracking-wide">Text lesen</span>
              {detectedTargetParagraph && (
                <span className="px-1.5 py-0.5 rounded-md bg-amber-400 text-amber-950 text-[10px] font-mono font-black shadow-2xs">
                  ¶{detectedTargetParagraph}
                </span>
              )}
            </button>
          </div>
        ) : (
          /* MODE 2: STANDARD AUSTRIAN ASSESSMENT COLUMN (~780px MAX WIDTH) */
          <div className="mx-auto max-w-3xl space-y-3.5 sm:space-y-5 pb-6">
            {/* Question Card */}
            <div
              key={question.id || `standard-q-${currentIndex}`}
              className="rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-7 lg:p-8 shadow-sm space-y-3 sm:space-y-4"
            >
              {/* Metadata Breadcrumbs & Action Tools */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 pb-2.5 sm:pb-3 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
                  <span
                    translate="no"
                    className="notranslate text-[11px] sm:text-[11.5px] font-black text-slate-800 bg-slate-100 border border-slate-200/70 px-2.5 sm:px-3 py-1 rounded-xl font-mono shadow-2xs shrink-0"
                  >
                    Frage {currentIndex + 1} / {totalQuestions}
                  </span>

                  {/* BMS Discipline Badge (Biologie, Chemie, Physik, Mathematik) */}
                  {bmsDiscipline && (
                    <span className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl border shadow-2xs shrink-0 ${bmsDiscipline.badgeBg}`}>
                      {bmsDiscipline.short}
                    </span>
                  )}

                  {question.topic && (
                    <span className="text-[11px] sm:text-[12px] font-bold text-slate-700 bg-slate-50 border border-slate-200/70 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl shadow-2xs max-w-[180px] sm:max-w-none truncate">
                      {question.topic}
                    </span>
                  )}

                  {question.difficulty && (
                    <span
                      className={`text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl border shadow-2xs shrink-0 ${
                        question.difficulty === "Schwer"
                          ? "bg-red-50 text-red-700 border-red-200/70"
                          : question.difficulty === "Mittel"
                          ? "bg-amber-50 text-amber-800 border-amber-200/70"
                          : "bg-emerald-50 text-emerald-800 border-emerald-200/70"
                      }`}
                    >
                      {question.difficulty}
                    </span>
                  )}
                </div>

                {/* Right Tools in Card Header */}
                <div className="flex items-center gap-1 sm:gap-1.5 ml-auto">
                  {isMarked && (
                    <span className="inline-flex items-center gap-1 text-[10.5px] sm:text-[11.5px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl shadow-2xs animate-fade-in shrink-0">
                      <span>★</span>
                      <span className="hidden sm:inline">Vorgemerkt</span>
                    </span>
                  )}

                  {/* Font Size Toggle (A- / A+) for comfortable reading on small screens */}
                  <button
                    type="button"
                    onClick={() => setBmsFontSize((f) => (f === "normal" ? "large" : "normal"))}
                    className={`inline-flex items-center px-2 py-0.5 sm:py-1 rounded-xl border text-[11px] font-mono font-bold transition-all shadow-2xs cursor-pointer active:scale-95 ${
                      bmsFontSize === "large"
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border-slate-200/80"
                    }`}
                    title={bmsFontSize === "large" ? "Standardschrift" : "Größere Schrift für Formeln & Text"}
                  >
                    <span>{bmsFontSize === "large" ? "A-" : "A+"}</span>
                  </button>

                  {/* Scratchpad Notizblatt Tool */}
                  {onOpenScratchpad && (
                    <button
                      onClick={onOpenScratchpad}
                      type="button"
                      title="Notizblatt öffnen"
                      className="inline-flex items-center gap-1 text-[11px] sm:text-[11.5px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl transition-colors shadow-2xs cursor-pointer active:scale-95"
                    >
                      <span>📝</span>
                      <span className="hidden sm:inline">Notizen</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Question Text with Dynamic Font Scale */}
              <div className="overflow-x-auto scrollbar-none py-0.5">
                <MathText
                  as="h2"
                  className={`font-bold leading-[1.65] text-slate-900 tracking-tight transition-all ${
                    bmsFontSize === "large"
                      ? "text-[17.5px] sm:text-[20.5px]"
                      : "text-[15.5px] sm:text-[18.5px]"
                  }`}
                  text={qText}
                />
              </div>

              {/* Locked Question Notice (e.g. Timed Out in Timed Practice) */}
              {isLocked && (
                <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-900 text-[12px] sm:text-[13px] font-bold shadow-2xs animate-fade-in">
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-xl bg-rose-200/70 text-sm sm:text-base">
                    ⏱️
                  </span>
                  <span>
                    {lockedReason || "Zeit abgelaufen: Diese Frage ist fixiert und kann nicht mehr verändert werden."}
                  </span>
                </div>
              )}

              {/* Cognitive Number Sequence Box (for KFF) */}
              {isNumberSequence && (
                <div className="mt-3 rounded-2xl bg-slate-50 border border-slate-200/90 p-3 sm:p-5 text-center shadow-2xs overflow-x-auto">
                  <span className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    Mustersequenz
                  </span>
                  <p className="font-mono text-[17px] sm:text-[22px] font-black tracking-widest text-slate-900">
                    {qText.split("\n")[0]}
                  </p>
                </div>
              )}
            </div>

            {/* Option Cards A..E (Touch-Optimized for Mobile) */}
            <div className="space-y-2 sm:space-y-2.5" role="radiogroup" aria-label="Antwortoptionen">
              {question.options.map((optText, idx) => {
                const isSelected = selectedOption === idx;
                const letterKey = String.fromCharCode(65 + idx);

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!isLocked) onSelectOption(idx);
                    }}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={isLocked ? -1 : 0}
                    onKeyDown={(e) => {
                      if (!isLocked && (e.key === " " || e.key === "Enter")) {
                        e.preventDefault();
                        onSelectOption(idx);
                      }
                    }}
                    className={`group flex items-start sm:items-center justify-between gap-2.5 sm:gap-4 p-3 sm:p-4.5 rounded-2xl border transition-all duration-150 select-none min-h-[48px] sm:min-h-[58px] ${
                      isLocked
                        ? "cursor-not-allowed opacity-75"
                        : "cursor-pointer active:scale-[0.99] active:bg-slate-50"
                    } ${
                      isSelected
                        ? "border-red-600 bg-red-50/45 ring-2 ring-red-500/25 shadow-xs"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 hover:shadow-2xs"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                      <span
                        className={`flex h-7 w-7 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-xl text-[12px] sm:text-[13px] font-mono font-black uppercase transition-all mt-0.5 sm:mt-0 ${
                          isSelected
                            ? "bg-red-600 text-white shadow-xs"
                            : "border border-slate-200 bg-slate-100 text-slate-700 group-hover:bg-slate-200/90"
                        }`}
                      >
                        {letterKey}
                      </span>
                      <span
                        className={`leading-[1.6] transition-colors py-0.5 break-words min-w-0 ${
                          bmsFontSize === "large" ? "text-[15.5px] sm:text-[17px]" : "text-[14px] sm:text-[15.5px]"
                        } ${
                          isSelected ? "font-bold text-slate-900" : "font-normal text-slate-800"
                        }`}
                      >
                        <MathText text={optText} />
                      </span>
                    </div>

                    {/* Radio Indicator & Shortcut Badge */}
                    <div className="flex items-center gap-1.5 shrink-0 ml-1">
                      <span className="hidden lg:inline-block font-mono text-[10px] text-slate-400 border border-slate-200 bg-slate-100/70 rounded-md px-1.5 py-0.5 group-hover:text-slate-600 transition-colors">
                        [{idx + 1}]
                      </span>

                      <span
                        className={`h-4.5 w-4.5 sm:h-5 sm:w-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-red-600 bg-red-600 text-white shadow-2xs"
                            : "border-slate-300 bg-white group-hover:border-slate-400"
                        }`}
                      >
                        {isSelected && <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-scale-in" />}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional Unselect / Clear Answer on Mobile Practice */}
            {selectedOption !== undefined && !isLocked && onClearOption && (
              <div className="flex justify-end pt-0.5">
                <button
                  type="button"
                  onClick={onClearOption}
                  className="text-[11px] sm:text-[11.5px] font-medium text-slate-400 hover:text-slate-700 transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-slate-100 active:scale-95 flex items-center gap-1"
                >
                  <span>✕</span>
                  <span>Auswahl aufheben</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* =================================================================
         STICKY 4K BOTTOM ACTION FOOTER (ALWAYS ANCHORED WITH SAFE AREA)
         ================================================================= */}
      <footer className="sticky bottom-0 z-30 border-t border-slate-200/90 bg-white/95 backdrop-blur-md px-3 sm:px-8 py-2 sm:py-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between sm:justify-center gap-2 sm:gap-3 w-full max-w-3xl mx-auto">
          {/* Previous Question */}
          {!hidePrevButton ? (
            <button
              onClick={onPrev}
              disabled={isFirst}
              aria-label="Zur vorherigen Frage zurückkehren"
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl border px-3 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] font-semibold transition-all min-h-[44px] ${
                isFirst
                  ? "border-slate-100 bg-[#F0F4F8] text-[#94A3B8] cursor-not-allowed"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] shadow-2xs"
              }`}
            >
              <span>←</span>
              <span className="hidden sm:inline">Vorherige</span>
              <span className="sm:hidden">Zurück</span>
            </button>
          ) : (
            <div className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50/80 px-2.5 sm:px-3 py-2 text-[11px] sm:text-[11.5px] font-bold text-amber-900 shadow-2xs select-none min-h-[44px]">
              <span>⏱️</span>
              <span className="hidden sm:inline">Timed Sprint</span>
              <span className="sm:hidden">Timed</span>
            </div>
          )}

          {/* Bookmark */}
          <button
            onClick={onToggleMark}
            aria-label={isMarked ? "Markierung aufheben" : "Frage zur Überprüfung vormerken"}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl border px-3 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] font-semibold transition-all shadow-2xs active:scale-[0.98] min-h-[44px] ${
              isMarked
                ? "border-amber-400 bg-amber-50 text-amber-800"
                : "border-slate-200 bg-white text-[#475569] hover:bg-slate-50"
            }`}
          >
            {isMarked ? (
              <DIconBookmarkFilled className="h-4 w-4 text-amber-600 shrink-0" />
            ) : (
              <DIconBookmark className="h-4 w-4 text-slate-400 shrink-0" />
            )}
            <span className="hidden sm:inline">{isMarked ? "Vorgemerkt" : "Vormerken"}</span>
            <span className="sm:hidden">{isMarked ? "Markiert" : "Merken"}</span>
          </button>

          {/* Next Question / Abgeben if last */}
          {!isLast ? (
            <button
              onClick={onNext}
              aria-label="Zur nächsten Frage vorrücken"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 active:scale-[0.98] px-4 sm:px-7 py-2.5 text-[12.5px] sm:text-[13.5px] font-bold text-white shadow-sm transition-all min-h-[44px]"
            >
              <span className="hidden sm:inline">Nächste Frage</span>
              <span className="sm:hidden">Weiter</span>
              <span>→</span>
            </button>
          ) : (
            <button
              onClick={onRequestSubmit}
              aria-label="Simulation abschließen und abgeben"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.98] px-4 sm:px-7 py-2.5 text-[12.5px] sm:text-[13.5px] font-black text-white shadow-sm transition-all min-h-[44px]"
            >
              <span>Abgeben</span>
              <span>✓</span>
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
