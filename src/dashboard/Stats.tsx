import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import {
  calculateMedATReadiness,
  getSectionsForExam,
  UNIVERSITIES,
  type SectionCode,
} from "../content/medat/config";
import { useMockExamData, type MockAttemptRecord } from "../data/generalprobe";
import {
  IconArrowRight,
  IconBrain,
  IconChart,
  IconCheck,
  IconClock,
  IconFlame,
  IconHeart,
  IconMolecule,
  IconPuzzle,
  IconTarget,
  IconTextLines,
} from "../lib/icons";
import {
  DIconAlert,
  DIconBook,
  DIconBookmark,
  DIconCheckCircle,
  DIconSparkles,
  DIconTrendDown,
  DIconTrendFlat,
  DIconTrendUp,
  DIconZap,
} from "./icons";
import { usePractice } from "./practiceContext";
import {
  CHAPTERS,
  SUBJECTS,
  resolveChapterId,
  type PracticeSection,
  type SubjectGroup,
} from "./practiceData";
import type { PracticeSeed, Screen } from "./Shell";

export type StatsTab = "overview" | "subtests" | "chapters" | "mocks" | "weaknesses";
export type TimeFilter = "all" | "30d" | "7d" | "today";

/* Official MedAT subtest question targets for reference */
const SUBTEST_MEDAT_COUNTS: Record<string, number> = {
  bio: 40,
  chem: 24,
  phys: 18,
  math: 12,
  "kff-fig": 15,
  "kff-num": 10,
  "kff-wf": 15,
  "kff-mem": 25,
  "kff-imp": 10,
  "tv-main": 12,
  "sek-emo-rec": 14,
  "sek-emo-reg": 12,
  "sek-soc-dec": 14,
};

/* ---------------- 1. Chapter & Set Breakdown Component ---------------- */
function ChapterBreakdown({ onNav }: { onNav: (s: Screen, seed?: PracticeSeed) => void }) {
  const { userProfile, getSubjectStats, getChapterStats, getChapterSetsWithStatus } = usePractice();
  const availableSections = useMemo(
    () => getSectionsForExam(userProfile.examType),
    [userProfile.examType]
  );

  const [selectedSec, setSelectedSec] = useState<SectionCode>(
    availableSections[0]?.code || "BMS"
  );
  const availableSubjects = SUBJECTS.filter((s) => s.section === selectedSec);
  const [selectedSubId, setSelectedSubId] = useState<string>(
    availableSubjects[0]?.id || "bio"
  );
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  const activeSub =
    availableSubjects.find((s) => s.id === selectedSubId) || availableSubjects[0];
  const subStats = activeSub ? getSubjectStats(activeSub.id) : null;

  return (
    <section className="rounded-3xl border border-line bg-paper p-5 sm:p-7 shadow-xs" aria-label="Kapitel-Analyse">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-[18px] font-bold text-ink">Kapitel- & 5-Set Meisterschaft</h2>
          <p className="mt-0.5 text-[13px] text-ink-3">
            Genauigkeit und Meisterschaftsgrad aller 5 Sets pro Kapitel aus dem MedAT-Stichwortkatalog.
          </p>
        </div>

        {/* Section Pills */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Sektion wählen">
          {availableSections.map((s) => (
            <button
              key={s.code}
              type="button"
              onClick={() => {
                setSelectedSec(s.code);
                const firstSub = SUBJECTS.find((sub) => sub.section === s.code);
                if (firstSub) setSelectedSubId(firstSub.id);
              }}
              className={`rounded-xl px-3 py-1.5 text-[12px] font-bold transition-all cursor-pointer ${
                selectedSec === s.code
                  ? "bg-primary text-paper shadow-sm"
                  : "border border-line bg-paper text-ink-3 hover:border-primary/40 hover:text-ink"
              }`}
            >
              {s.code}
            </button>
          ))}
        </div>
      </div>

      {/* Subject Selector Buttons */}
      {availableSubjects.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2 border-b border-line pb-3">
          {availableSubjects.map((sub) => (
            <button
              key={sub.id}
              type="button"
              onClick={() => setSelectedSubId(sub.id)}
              className={`rounded-lg px-3 py-1 text-[12px] font-bold transition-all cursor-pointer ${
                activeSub?.id === sub.id
                  ? "bg-paper-3 text-ink font-bold border border-line shadow-2xs"
                  : "text-ink-4 hover:text-ink"
              }`}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}

      {/* Active Subject Summary Banner */}
      {subStats && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper-3/50 p-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-bold text-ink">{subStats.subject.title}</p>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                {subStats.totalQuestions} Fragen im Pool
              </span>
            </div>
            <p className="text-[12px] text-ink-3 mt-0.5">
              {subStats.completedChapters} von {subStats.totalChapters} Kapiteln gemeistert ·{" "}
              {subStats.answeredCount} beantwortet
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="num text-[22px] font-extrabold text-ink">
                {subStats.answeredCount > 0 ? `${subStats.accuracy}%` : "—"}
              </span>
              <p className="text-[10.5px] font-bold text-ink-4 uppercase">Trefferquote</p>
            </div>
            <button
              type="button"
              onClick={() =>
                onNav("practice", { section: selectedSec, subjectId: subStats.subject.id })
              }
              className="btn btn-primary btn-sm text-[12px] font-bold cursor-pointer"
            >
              Fach öffnen →
            </button>
          </div>
        </div>
      )}

      {/* Chapters & 5-Set Expansion List */}
      {activeSub && (
        <div className="mt-4 space-y-3">
          {activeSub.chapterIds.map((cid) => {
            const ch = CHAPTERS[cid];
            if (!ch) return null;
            const stats = getChapterStats(cid);
            const sets = getChapterSetsWithStatus(cid);
            const isExpanded = expandedChapterId === cid;

            return (
              <div
                key={cid}
                className="rounded-2xl border border-line bg-paper overflow-hidden transition-all shadow-xs"
              >
                <div
                  onClick={() => setExpandedChapterId(isExpanded ? null : cid)}
                  className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 cursor-pointer hover:bg-paper-3/40 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-[15px] font-bold text-ink">{ch.title}</p>
                      {stats.status === "mastered" && (
                        <span className="rounded-full bg-success-subtle px-2 py-0.5 text-[10.5px] font-bold text-[#166534]">
                          ✓ Gemeistert
                        </span>
                      )}
                      {stats.status === "needs_review" && (
                        <span className="rounded-full bg-warning-subtle px-2 py-0.5 text-[10.5px] font-bold text-[#92400E]">
                          Wiederholen
                        </span>
                      )}
                    </div>
                    <p className="truncate text-[12.5px] text-ink-3 mt-0.5">
                      {stats.completedSetsCount} / 5 Sets abgeschlossen · {ch.subtitle || ch.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="num text-[16px] font-extrabold text-ink">
                      {stats.answeredCount > 0 ? `${stats.accuracy}%` : "Keine Daten"}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNav("practice", { chapterId: cid });
                      }}
                      className="shrink-0 rounded-xl border border-line bg-paper px-3 py-1.5 text-[12px] font-bold text-ink-2 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                    >
                      Üben →
                    </button>
                  </div>
                </div>

                {/* Expanded 5 Sets Table */}
                {isExpanded && (
                  <div className="border-t border-line bg-paper-3/30 p-4 sm:p-5">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[12.5px]">
                        <thead>
                          <tr className="border-b border-line text-[11px] font-bold uppercase tracking-wider text-ink-4">
                            <th className="pb-2">Set</th>
                            <th className="pb-2">Fokus / Modus</th>
                            <th className="pb-2">Bestleistung</th>
                            <th className="pb-2">Status</th>
                            <th className="pb-2 text-right">Aktion</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-line/60">
                          {sets.map((s) => (
                            <tr key={s.id} className="py-2.5">
                              <td className="py-2 font-bold text-ink">{s.title}</td>
                              <td className="py-2 text-ink-3">
                                {s.focus} · <span className="capitalize">{s.mode}</span>
                              </td>
                              <td className="py-2 num font-bold text-ink">
                                {s.bestScore !== undefined ? `${s.bestScore}%` : "—"}
                              </td>
                              <td className="py-2">
                                <span
                                  className={`rounded-full px-2 py-0.5 text-[10.5px] font-bold ${
                                    s.status === "completed"
                                      ? "bg-success-subtle text-[#166534]"
                                      : s.status === "active"
                                        ? "bg-primary-subtle text-primary"
                                        : s.status === "needs_review"
                                          ? "bg-warning-subtle text-[#92400E]"
                                          : "bg-paper-3 text-ink-4"
                                  }`}
                                >
                                  {s.status === "completed"
                                    ? "Abgeschlossen"
                                    : s.status === "active"
                                      ? "Aktiv"
                                      : s.status === "needs_review"
                                        ? "Wiederholen"
                                        : "Gesperrt"}
                                </span>
                              </td>
                              <td className="py-2 text-right">
                                <button
                                  type="button"
                                  onClick={() => onNav("practice", { chapterId: cid })}
                                  disabled={s.status === "locked"}
                                  className="text-[12px] font-bold text-primary hover:underline disabled:opacity-40 disabled:no-underline cursor-pointer"
                                >
                                  {s.status === "completed"
                                    ? "Wiederholen"
                                    : s.status === "locked"
                                      ? "Gesperrt"
                                      : "Starten →"}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

/* ---------------- 2. Main Stats Page Component ---------------- */
export default function Stats({
  onNav,
}: {
  onNav: (s: Screen, seed?: PracticeSeed) => void;
}) {
  const {
    userProfile,
    answers,
    wrong,
    attemptHistory,
    setAttempts,
    currentStreak,
    getSectionStats,
    getSubjectStats,
    getWeakAreas,
  } = usePractice();

  const mockData = useMockExamData();
  const mockStats = mockData.stats;

  const [activeTab, setActiveTab] = useState<StatsTab>("overview");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [subtestSectionFilter, setSubtestSectionFilter] = useState<string>("ALL");

  const availableSections = useMemo(
    () => getSectionsForExam(userProfile.examType),
    [userProfile.examType]
  );

  // Time filter helper
  const now = Date.now();
  const startOfToday = new Date().setHours(0, 0, 0, 0);

  const isWithinTimeFilter = (timestamp: number) => {
    if (timeFilter === "all") return true;
    if (timeFilter === "today") return timestamp >= startOfToday;
    if (timeFilter === "7d") return timestamp >= now - 7 * 86400000;
    if (timeFilter === "30d") return timestamp >= now - 30 * 86400000;
    return true;
  };

  // Filtered Question Counts & Correct Answers from Real Attempt History
  const filteredMetrics = useMemo(() => {
    const attemptEntries = Object.entries(attemptHistory);

    if (timeFilter === "all") {
      const totalAnswered = Object.keys(answers).length;
      const totalCorrect = Math.max(0, totalAnswered - wrong.size);
      const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
      return { totalAnswered, totalCorrect, accuracy };
    }

    const filtered = attemptEntries.filter(([, att]) => isWithinTimeFilter(att.timestamp));
    const totalAnswered = filtered.length;
    const totalCorrect = filtered.filter(([, att]) => att.correct).length;
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    return { totalAnswered, totalCorrect, accuracy };
  }, [attemptHistory, answers, wrong, timeFilter]);

  // Total Study Minutes from real set attempts and mock attempts
  const totalStudyMinutes = useMemo(() => {
    let seconds = 0;
    // Set attempts
    Object.values(setAttempts).forEach((list) => {
      list.forEach((att) => {
        if (isWithinTimeFilter(att.completedAt)) {
          seconds += att.timeSpentSeconds || 0;
        }
      });
    });
    // Mock exams
    mockStats.allCompletedMocks.forEach((m) => {
      if (isWithinTimeFilter(m.timestamp)) {
        seconds += m.timeSpentSeconds || 0;
      }
    });
    return Math.round(seconds / 60);
  }, [setAttempts, mockStats.allCompletedMocks, timeFilter]);

  // Section-by-section real performance
  const sectionStatsList = useMemo(() => {
    return availableSections.map((sec) => ({
      meta: sec,
      stats: getSectionStats(sec.code),
    }));
  }, [availableSections, getSectionStats]);

  // Calculate official weighted MedAT predicted score
  const projectedMedATScore = useMemo(() => {
    let weightedSum = 0;
    let activeWeights = 0;

    availableSections.forEach((s) => {
      const st = getSectionStats(s.code);
      const weight =
        userProfile.examType === "MEDAT-Z"
          ? s.code === "BMS"
            ? 40
            : s.code === "KFF"
            ? 40
            : 20
          : s.code === "BMS"
          ? 40
          : s.code === "KFF"
          ? 40
          : s.code === "TV"
          ? 10
          : 10;

      if (st.answeredCount > 0) {
        weightedSum += st.accuracy * weight;
        activeWeights += weight;
      }
    });

    if (activeWeights === 0) return null;
    return Math.round((weightedSum / activeWeights) * 10) / 10;
  }, [availableSections, getSectionStats, userProfile.examType]);

  // Admission Quota Benchmarks
  const austrianQuotaCutoff = 75.0;
  const euQuotaCutoff = 79.0;
  const targetUniMeta = UNIVERSITIES[userProfile.targetUniversity] || UNIVERSITIES.undecided;

  // Strongest and Weakest Section
  const activeWithData = sectionStatsList.filter((s) => s.stats.answeredCount > 0);
  const sortedByAcc = [...activeWithData].sort((a, b) => b.stats.accuracy - a.stats.accuracy);
  const strongest = sortedByAcc.length > 0 ? sortedByAcc[0] : null;
  const weakest = sortedByAcc.length > 1 ? sortedByAcc[sortedByAcc.length - 1] : null;

  // Performance progression chart data from real chronological set attempts & mock tests
  const timelineChartData = useMemo(() => {
    const rawPoints: {
      date: string;
      fullDate: string;
      time: string;
      timestamp: number;
      score: number;
      correctCount: number;
      totalQuestions: number;
      title: string;
      type: string;
    }[] = [];

    // Add set attempts
    Object.entries(setAttempts).forEach(([key, attempts]) => {
      attempts.forEach((att) => {
        const resolvedChId = resolveChapterId(att.chapterId || key.replace(/-set-\d+$/, ""));
        const ch = CHAPTERS[resolvedChId];
        const sub = SUBJECTS.find((s) => s.id === ch?.subjectId);
        const d = new Date(att.completedAt);
        const setNum = att.setId.includes("-set-") ? att.setId.split("-set-")[1] : "1";
        const isSim =
          resolvedChId.startsWith("kff-") ||
          resolvedChId.startsWith("tv-") ||
          resolvedChId.startsWith("sek-") ||
          resolvedChId.startsWith("mf-");
        const setLabel = isSim ? `Sim ${setNum}` : `Set ${setNum}`;
        const cleanTitle = ch ? (sub && sub.title !== ch.title ? `${sub.title} · ${ch.title}` : ch.title) : resolvedChId;

        rawPoints.push({
          date: d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit" }),
          fullDate: d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" }),
          time: d.toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit" }),
          timestamp: att.completedAt,
          score: att.score,
          correctCount: att.correctCount,
          totalQuestions: att.totalQuestions,
          title: `${cleanTitle} · ${setLabel}`,
          type: isSim ? "Simulation" : "Übungsset",
        });
      });
    });

    // Add mock exams
    mockStats.allCompletedMocks.forEach((m) => {
      const d = new Date(m.timestamp);
      rawPoints.push({
        date: d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit" }),
        fullDate: d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" }),
        time: d.toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit" }),
        timestamp: m.timestamp,
        score: Math.round(m.weightedScore ?? m.score),
        correctCount: m.correctCount,
        totalQuestions: m.totalQuestions,
        title: m.examTitle,
        type: "Generalprobe",
      });
    });

    // Sort chronologically
    rawPoints.sort((a, b) => a.timestamp - b.timestamp);

    // Limit to last 15 points for clear presentation
    const sliced = rawPoints.slice(-15);

    let cumulativeCorrect = 0;
    let cumulativeTotal = 0;

    return sliced.map((p, idx, arr) => {
      cumulativeCorrect += p.correctCount;
      cumulativeTotal += p.totalQuestions;
      const rollingScore =
        cumulativeTotal > 0 ? Math.round((cumulativeCorrect / cumulativeTotal) * 100) : p.score;

      // Smart X-Axis label formatting:
      // If date is the same as previous point, show "#2", "#3" etc. so the axis doesn't repeat "10.10." 6 times
      const isFirstOnDate = idx === 0 || arr[idx - 1].date !== p.date;
      const displayLabel = isFirstOnDate ? p.date : `#${idx + 1}`;

      return {
        ...p,
        attemptIndex: idx + 1,
        rollingScore,
        displayLabel,
      };
    });
  }, [setAttempts, mockStats.allCompletedMocks]);

  // 13 Subtests Data Matrix
  const subtestMatrix = useMemo(() => {
    return SUBJECTS.map((sub) => {
      const st = getSubjectStats(sub.id);
      const officialCount = SUBTEST_MEDAT_COUNTS[sub.id] || 15;
      const mastery =
        st.answeredCount >= 10 && st.accuracy >= 80
          ? "mastered"
          : st.answeredCount > 0
          ? "in_progress"
          : "not_started";

      return {
        ...sub,
        stats: st,
        officialCount,
        mastery,
      };
    });
  }, [getSubjectStats]);

  const filteredSubtests = useMemo(() => {
    if (subtestSectionFilter === "ALL") return subtestMatrix;
    return subtestMatrix.filter((s) => s.section === subtestSectionFilter);
  }, [subtestMatrix, subtestSectionFilter]);

  // Weak areas
  const weakAreas = useMemo(() => {
    return getWeakAreas();
  }, [getWeakAreas]);

  return (
    <div className="animate-screen-in space-y-7 pb-24 pt-2">
      {/* ─── Top Header & Controls ─── */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="rounded-md bg-primary-subtle px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-primary">
              {userProfile.examType}
            </span>
            <span className="rounded-md bg-paper-3 px-2.5 py-0.5 text-[11px] font-bold text-ink-3">
              Ziel: {targetUniMeta.shortName}
            </span>
          </div>
          <h1 className="display text-[30px] sm:text-[34px] text-ink">Statistiken & Fortschritt</h1>
          <p className="mt-0.5 text-[14.5px] text-ink-3">
            Echtzeit-Leistungsanalyse, Meisterschaftsgrade und offizielle MedAT-Zulassungsprognose.
          </p>
        </div>

        {/* Time Filter Buttons */}
        <div className="flex items-center gap-1 rounded-2xl border border-line bg-paper p-1 shadow-2xs">
          {(
            [
              { id: "all", label: "Gesamt" },
              { id: "30d", label: "30 Tage" },
              { id: "7d", label: "7 Tage" },
              { id: "today", label: "Heute" },
            ] as const
          ).map((tf) => (
            <button
              key={tf.id}
              type="button"
              onClick={() => setTimeFilter(tf.id)}
              className={`rounded-xl px-3 py-1.5 text-[12px] font-bold transition-all cursor-pointer ${
                timeFilter === tf.id
                  ? "bg-primary text-white shadow-xs"
                  : "text-ink-4 hover:text-ink"
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Top 5 KPI Metrics Grid (100% Real Data) ─── */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {/* Metric 1: Total Answered */}
        <div className="card-lift rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-xs">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">Übungsfragen</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="num text-[28px] font-black leading-none text-ink">
              {filteredMetrics.totalAnswered}
            </span>
            <span className="text-[11px] font-semibold text-ink-3">
              ({filteredMetrics.totalCorrect} richtig)
            </span>
          </div>
          <p className="mt-2 text-[11.5px] text-ink-4">
            {timeFilter === "all" ? "Alle Übungen bisher" : `Im Zeitraum (${timeFilter})`}
          </p>
        </div>

        {/* Metric 2: Average Accuracy */}
        <div className="card-lift rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-xs">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">Ø Trefferquote</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="num text-[28px] font-black leading-none text-ink">
              {filteredMetrics.totalAnswered > 0 ? `${filteredMetrics.accuracy} %` : "—"}
            </span>
            {filteredMetrics.totalAnswered > 0 && (
              <span
                className={`flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                  filteredMetrics.accuracy >= 75
                    ? "bg-success-subtle text-[#166534]"
                    : filteredMetrics.accuracy >= 60
                    ? "bg-warning-subtle text-[#92400E]"
                    : "bg-primary-subtle text-primary"
                }`}
              >
                {filteredMetrics.accuracy >= 75 ? (
                  <DIconTrendUp className="h-3 w-3" />
                ) : (
                  <DIconTrendFlat className="h-3 w-3" />
                )}
                {filteredMetrics.accuracy >= 75 ? "Stark" : "Ausbaufähig"}
              </span>
            )}
          </div>
          <p className="mt-2 text-[11.5px] text-ink-4">Ziel: &ge; 75–80 %</p>
        </div>

        {/* Metric 3: Projected MedAT Score */}
        <div className="card-lift rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-xs">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">Prognose MedAT</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="num text-[28px] font-black leading-none text-primary">
              {projectedMedATScore !== null ? `${projectedMedATScore} %` : "—"}
            </span>
            {projectedMedATScore !== null && (
              <span
                className={`rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                  projectedMedATScore >= austrianQuotaCutoff
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {projectedMedATScore >= austrianQuotaCutoff ? "Im Cutoff" : "Unter Cutoff"}
              </span>
            )}
          </div>
          <p className="mt-2 text-[11px] text-ink-4 leading-tight">
            Offizielle MedAT-Gewichtung (40/40/10/10)
          </p>
        </div>

        {/* Metric 4: Open Mistakes */}
        <div className="card-lift rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-xs">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">Offene Fehler</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="num text-[28px] font-black leading-none text-amber-600">
              {wrong.size}
            </span>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
              Fehlerheft
            </span>
          </div>
          <p className="mt-2 text-[11.5px] text-ink-4">Bereit für Review-Drill</p>
        </div>

        {/* Metric 5: Study Time & Streak */}
        <div className="card-lift rounded-2xl border border-line bg-paper p-4 sm:p-5 shadow-xs col-span-2 sm:col-span-1">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">Lernzeit & Streak</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="num text-[28px] font-black leading-none text-ink">
              {totalStudyMinutes >= 60
                ? `${(totalStudyMinutes / 60).toFixed(1)} h`
                : `${totalStudyMinutes} m`}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-primary bg-primary-subtle px-1.5 py-0.5 rounded">
              <IconFlame className="h-3 w-3" />
              {currentStreak} d
            </span>
          </div>
          <p className="mt-2 text-[11.5px] text-ink-4">Aktive Übungsdauer</p>
        </div>
      </div>

      {/* ─── Navigation Tabs Bar ─── */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-line pb-2 scrollbar-none">
        {[
          { id: "overview", label: "Übersicht & MedAT-Prognose", count: undefined },
          { id: "subtests", label: "Alle 13 Subtests", count: 13 },
          { id: "chapters", label: "Kapitel & 5-Sets", count: undefined },
          { id: "mocks", label: "Generalproben & Mocks", count: mockStats.totalFullMocks },
          { id: "weaknesses", label: "Fehler & Schwachstellen", count: wrong.size },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as StatsTab)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-[13px] font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-slate-900 text-white shadow-xs"
                : "border border-line bg-paper text-ink-3 hover:bg-slate-50 hover:text-ink"
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10.5px] font-black ${
                  activeTab === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-paper-3 text-ink-3"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* =================================================================
          TAB 1: ÜBERSICHT & MEDAT-PROGNOSE
          ================================================================= */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* MedAT Quota Benchmark & University Cutoff Card */}
          <div className="rounded-3xl border border-line bg-gradient-to-br from-paper via-paper to-red-50/20 p-6 sm:p-7 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary-subtle px-2.5 py-1 rounded-lg">
                  Österreichischer Zulassungs-Index
                </span>
                <h2 className="mt-2 text-[20px] font-bold text-ink">
                  MedAT-Zulassungschance & Quoten-Analyse
                </h2>
                <p className="mt-1 text-[13.5px] text-ink-3 max-w-2xl leading-relaxed">
                  Deine prognostizierte Gesamtpunktzahl errechnet sich aus der offiziellen Gewichtung:
                  BMS (40%), KFF (40%), TV (10%) und SEK (10%).
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-line bg-paper p-4 text-center min-w-[140px] shadow-2xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                    Dein Score
                  </span>
                  <div className="num text-[28px] font-black text-primary">
                    {projectedMedATScore !== null ? `${projectedMedATScore}%` : "—"}
                  </div>
                  <span className="text-[11px] font-semibold text-ink-3">
                    {projectedMedATScore !== null && projectedMedATScore >= austrianQuotaCutoff
                      ? "✓ Im Quotenbereich"
                      : "Training empfohlen"}
                  </span>
                </div>
              </div>
            </div>

            {/* Cutoff Reference Bars with Visual Target Markers */}
            <div className="mt-6 space-y-4 pt-6 border-t border-line/80">
              {/* Austrian Quota */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700 flex items-center gap-2">
                    <span>🇦🇹</span>
                    <span>Österreicher-Quote (75% aller Studienplätze)</span>
                  </span>
                  <span className="text-slate-900">
                    Cutoff: ~{austrianQuotaCutoff}% ·{" "}
                    {projectedMedATScore !== null ? (
                      projectedMedATScore >= austrianQuotaCutoff ? (
                        <span className="text-emerald-700 font-bold">
                          +{(projectedMedATScore - austrianQuotaCutoff).toFixed(1)} pp Vorsprung
                        </span>
                      ) : (
                        <span className="text-amber-700 font-bold">
                          -{(austrianQuotaCutoff - projectedMedATScore).toFixed(1)} pp bis zum Cutoff
                        </span>
                      )
                    ) : (
                      "Noch keine Daten"
                    )}
                  </span>
                </div>
                <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10"
                    style={{ left: `${austrianQuotaCutoff}%` }}
                    title={`Cutoff-Grenze: ${austrianQuotaCutoff}%`}
                  />
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      projectedMedATScore !== null && projectedMedATScore >= austrianQuotaCutoff
                        ? "bg-emerald-500"
                        : "bg-primary"
                    }`}
                    style={{ width: `${Math.min(100, projectedMedATScore || 0)}%` }}
                  />
                </div>
              </div>

              {/* EU Quota */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700 flex items-center gap-2">
                    <span>🇪🇺</span>
                    <span>EU-Quote (20% der Studienplätze)</span>
                  </span>
                  <span className="text-slate-900">
                    Cutoff: ~{euQuotaCutoff}% ·{" "}
                    {projectedMedATScore !== null ? (
                      projectedMedATScore >= euQuotaCutoff ? (
                        <span className="text-emerald-700 font-bold">
                          +{(projectedMedATScore - euQuotaCutoff).toFixed(1)} pp Vorsprung
                        </span>
                      ) : (
                        <span className="text-amber-700 font-bold">
                          -{(euQuotaCutoff - projectedMedATScore).toFixed(1)} pp bis zum Cutoff
                        </span>
                      )
                    ) : (
                      "Noch keine Daten"
                    )}
                  </span>
                </div>
                <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10"
                    style={{ left: `${euQuotaCutoff}%` }}
                    title={`Cutoff-Grenze: ${euQuotaCutoff}%`}
                  />
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      projectedMedATScore !== null && projectedMedATScore >= euQuotaCutoff
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                    style={{ width: `${Math.min(100, projectedMedATScore || 0)}%` }}
                  />
                </div>
              </div>

              {/* Target University Cutoff */}
              <div className="pt-2 flex items-center justify-between text-xs text-ink-3">
                <span>
                  Referenzwert für <strong>{targetUniMeta.name}</strong>:
                </span>
                <span className="font-bold text-ink">{targetUniMeta.cutoffEstimate}</span>
              </div>
            </div>
          </div>

          {/* Section Weights & Performance Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectionStatsList.map(({ meta, stats }) => {
              const weight =
                userProfile.examType === "MEDAT-Z"
                  ? meta.weightMedATZ
                  : meta.weightMedATH;

              const acc = stats.answeredCount > 0 ? stats.accuracy : 0;
              const accColor =
                acc >= 75 ? "bg-emerald-500" : acc >= 50 ? "bg-amber-500" : "bg-primary";

              return (
                <div
                  key={meta.code}
                  className="rounded-2xl border border-line bg-paper p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase text-primary bg-primary-subtle px-2 py-0.5 rounded-md">
                        {meta.code}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {weight}% Gewichtung
                      </span>
                    </div>

                    <h3 className="mt-3 text-[16px] font-bold text-ink">{meta.shortTitle}</h3>
                    <p className="text-[12px] text-ink-3 line-clamp-2 mt-0.5 leading-relaxed">{meta.description}</p>

                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="num text-[24px] font-black text-ink">
                        {stats.answeredCount > 0 ? `${stats.accuracy}%` : "—"}
                      </span>
                      <span className="text-[11.5px] font-semibold text-ink-4">
                        {stats.answeredCount} von {stats.totalQuestions} Fragen
                      </span>
                    </div>

                    {/* Progress Bar with Performance Tint */}
                    <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${accColor}`}
                        style={{ width: `${Math.min(100, stats.answeredCount > 0 ? stats.accuracy : 0)}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-ink-3">
                      {stats.completedChapters > 0
                        ? `${stats.completedChapters} / ${stats.totalChapters} gemeistert`
                        : stats.answeredCount > 0
                        ? "In Bearbeitung"
                        : "Noch offen"}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNav("practice", { section: meta.code })}
                      className="text-[12px] font-bold text-primary hover:underline cursor-pointer"
                    >
                      Trainieren →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Performance Timeline Chart */}
          <div className="rounded-3xl border border-line bg-paper p-6 sm:p-7 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-[17px] font-bold text-ink">Trefferquoten- & Lernkurven-Verlauf</h3>
                <p className="text-[12.5px] text-ink-3">
                  Ergebnisse deiner chronologisch absolvierten Fragensets und Prüfungssimulationen.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-ink-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Echtes Ergebnis
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-4 border-t-2 border-dashed border-emerald-500" />
                  AT-Cutoff (75%)
                </span>
              </div>
            </div>

            {timelineChartData.length >= 2 ? (
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timelineChartData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                    <defs>
                      <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#dc2626" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#dc2626" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="displayLabel" stroke="#94a3b8" fontSize={11} tickLine={false} interval={0} />
                    <YAxis
                      domain={[0, 100]}
                      stroke="#94a3b8"
                      fontSize={11}
                      tickLine={false}
                      unit="%"
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="rounded-xl border border-line bg-paper p-3 shadow-md text-xs space-y-1">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-bold text-ink">{data.title}</span>
                                <span className="text-[10px] font-bold text-ink-4 bg-paper-3 px-1.5 py-0.5 rounded">
                                  #{data.attemptIndex}
                                </span>
                              </div>
                              <p className="text-ink-3 text-[11px]">{data.fullDate} {data.time} · {data.type}</p>
                              <div className="pt-1 border-t border-line flex items-center justify-between gap-3 text-xs">
                                <span className="text-ink-3">Trefferquote:</span>
                                <span className="text-primary font-black">{data.score}%</span>
                              </div>
                              <div className="flex items-center justify-between gap-3 text-xs">
                                <span className="text-ink-3">Lernkurve (Gesamt):</span>
                                <span className="text-emerald-700 font-bold">{data.rollingScore}%</span>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <ReferenceLine y={75} stroke="#10b981" strokeDasharray="3 3" label={{ value: "AT Cutoff 75%", fill: "#10b981", fontSize: 10, position: "insideTopRight" }} />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#dc2626"
                      strokeWidth={2.5}
                      fill="url(#scoreGrad)"
                      dot={{ r: 3.5, fill: "#dc2626", strokeWidth: 1.5, stroke: "#ffffff" }}
                      activeDot={{ r: 5, fill: "#dc2626" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-line bg-paper-3/40 p-8 text-center space-y-3">
                <div className="mx-auto h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <IconChart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Noch nicht genügend Verlaufsdaten</h4>
                  <p className="text-xs text-ink-3 max-w-sm mx-auto mt-0.5">
                    Absolviere mindestens 2 vollständige Sets oder Prüfungssimulationen, um deine dynamische Lernkurve freizuschalten.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNav("practice")}
                  className="btn btn-primary btn-sm text-xs font-bold cursor-pointer"
                >
                  Jetzt Set starten →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 2: ALLE 13 SUBTESTS
          ================================================================= */}
      {activeTab === "subtests" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-[18px] font-bold text-ink">Die 13 offiziellen MedAT-Subtests</h2>
              <p className="text-[13px] text-ink-3">
                Detaillierte Analyse jedes Einzelmoduls mit Fragensumme, Trefferquote und Status.
              </p>
            </div>

            {/* Subtest Section Filter */}
            <div className="flex flex-wrap gap-1.5">
              {["ALL", "BMS", "KFF", "TV", "SEK"].map((sec) => (
                <button
                  key={sec}
                  type="button"
                  onClick={() => setSubtestSectionFilter(sec)}
                  className={`rounded-xl px-3 py-1.5 text-[12px] font-bold transition-all cursor-pointer ${
                    subtestSectionFilter === sec
                      ? "bg-slate-900 text-white shadow-xs"
                      : "border border-line bg-paper text-ink-3 hover:text-ink"
                  }`}
                >
                  {sec === "ALL" ? "Alle (13)" : sec}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSubtests.map((sub) => {
              const { stats, officialCount, mastery } = sub;

              return (
                <div
                  key={sub.id}
                  className="rounded-2xl border border-line bg-paper p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-black uppercase text-primary bg-primary-subtle px-2 py-0.5 rounded-md">
                        {sub.section} · {officialCount} Aufgaben
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10.5px] font-bold ${
                          mastery === "mastered"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : mastery === "in_progress"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-slate-50 text-slate-500 border border-slate-200"
                        }`}
                      >
                        {mastery === "mastered"
                          ? "✓ Gemeistert"
                          : mastery === "in_progress"
                          ? "In Bearbeitung"
                          : "Noch offen"}
                      </span>
                    </div>

                    <h3 className="mt-3 text-[16px] font-bold text-ink">{sub.title}</h3>
                    <p className="mt-1 text-[12px] text-ink-3 line-clamp-2">{sub.description}</p>

                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="num text-[24px] font-black text-ink">
                        {stats.answeredCount > 0 ? `${stats.accuracy}%` : "—"}
                      </span>
                      <span className="text-[11.5px] font-semibold text-ink-4">
                        {stats.answeredCount} beantwortet ({stats.correctCount} richtig)
                      </span>
                    </div>

                    <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          stats.accuracy >= 75
                            ? "bg-emerald-500"
                            : stats.accuracy >= 50
                            ? "bg-amber-500"
                            : "bg-primary"
                        }`}
                        style={{ width: `${Math.min(100, stats.accuracy || 0)}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-ink-4">
                      {stats.totalChapters} Kapitel
                    </span>
                    <button
                      type="button"
                      onClick={() => onNav("practice", { section: sub.section, subjectId: sub.id })}
                      className="btn btn-primary btn-sm text-[12px] font-bold cursor-pointer"
                    >
                      Jetzt üben →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 3: KAPITEL & 5-SETS
          ================================================================= */}
      {activeTab === "chapters" && <ChapterBreakdown onNav={onNav} />}

      {/* =================================================================
          TAB 4: GENERALPROBEN & MOCKS
          ================================================================= */}
      {activeTab === "mocks" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-[18px] font-bold text-ink">Prüfungssimulationen & Generalproben</h2>
              <p className="text-[13px] text-ink-3">
                Reale MedAT-Generalproben mit exakt 221 Aufgaben, Zeitlimits und Prüfungsdruck.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNav("mocks")}
              className="btn btn-primary btn-sm text-[12.5px] font-bold cursor-pointer"
            >
              Generalprobe starten →
            </button>
          </div>

          {/* Mocks Overview KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">
                Absolvierte Generalproben
              </p>
              <div className="mt-2 num text-[28px] font-black text-ink">
                {mockStats.totalFullMocks}
              </div>
              <p className="mt-1 text-[11px] text-ink-4">Vollständige 221-Fragen Läufe</p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">
                Bester Mock-Score
              </p>
              <div className="mt-2 num text-[28px] font-black text-emerald-700">
                {mockStats.bestScore !== null ? `${mockStats.bestScore}%` : "—"}
              </div>
              <p className="mt-1 text-[11px] text-ink-4">Höchste erreichte Punktzahl</p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">
                Ø Durchschnitts-Score
              </p>
              <div className="mt-2 num text-[28px] font-black text-ink">
                {mockStats.averageScore !== null ? `${mockStats.averageScore}%` : "—"}
              </div>
              <p className="mt-1 text-[11px] text-ink-4">Über alle Full Mocks</p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">
                Letzter Trend
              </p>
              <div className="mt-2 num text-[28px] font-black text-primary">
                {mockStats.improvementText}
              </div>
              <p className="mt-1 text-[11px] text-ink-4">Entwicklung zum Vorlauf</p>
            </div>
          </div>

          {/* Mock History List */}
          {mockStats.allCompletedMocks.length > 0 ? (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                Historie deiner Prüfungssimulationen
              </h3>
              <div className="divide-y divide-line rounded-2xl border border-line bg-paper overflow-hidden shadow-xs">
                {mockStats.allCompletedMocks.map((mock) => {
                  const score = Math.round(mock.weightedScore ?? mock.score);

                  return (
                    <div
                      key={mock.id}
                      className="p-5 flex flex-wrap items-center justify-between gap-4 hover:bg-paper-3/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-[15px] font-bold text-ink">{mock.examTitle}</p>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10.5px] font-bold ${
                              mock.category === "full"
                                ? "bg-primary-subtle text-primary border border-primary/20"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {mock.category === "full" ? "Full Generalprobe (221 Q)" : "Quick Simulation"}
                          </span>
                        </div>
                        <p className="text-[12px] text-ink-3 mt-0.5">
                          {mock.date} · {Math.round(mock.timeSpentSeconds / 60)} Minuten Bearbeitungszeit ·{" "}
                          {mock.correctCount} von {mock.totalQuestions} richtig
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Sub-score Pills */}
                        {mock.bmsPercent !== undefined && (
                          <div className="hidden md:flex items-center gap-1.5 text-xs font-mono">
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-bold">
                              BMS: {mock.bmsPercent}%
                            </span>
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-bold">
                              KFF: {mock.kffPercent}%
                            </span>
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-bold">
                              SEK: {mock.sekPercent}%
                            </span>
                          </div>
                        )}

                        <div className="text-right">
                          <span
                            className={`num text-[22px] font-black ${
                              score >= 75 ? "text-emerald-700" : "text-ink"
                            }`}
                          >
                            {score}%
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => onNav("mocks", { mockAction: "view-generalprobe-results", mockId: mock.mockId })}
                          className="btn btn-secondary btn-sm text-xs font-bold cursor-pointer"
                        >
                          Ansehen →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-line bg-paper-3/40 p-10 text-center space-y-4">
              <div className="mx-auto h-12 w-12 rounded-2xl bg-red-50 text-primary flex items-center justify-center">
                <IconTarget className="h-6 w-6" />
              </div>
              <div className="max-w-md mx-auto">
                <h3 className="text-base font-bold text-ink">Noch keine Generalprobe absolviert</h3>
                <p className="text-xs text-ink-3 mt-1 leading-relaxed">
                  Überprüfe dein Wissen unter echten Prüfungsbedingungen. Nach Abschluss deiner ersten
                  Generalprobe siehst du hier deinen genauen Score und die Notenaufteilung.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNav("mocks")}
                className="btn btn-primary text-xs font-bold cursor-pointer"
              >
                Erste Generalprobe starten →
              </button>
            </div>
          )}
        </div>
      )}

      {/* =================================================================
          TAB 5: FEHLER & SCHWACHSTELLEN
          ================================================================= */}
      {activeTab === "weaknesses" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-[18px] font-bold text-ink">Fehlerheft & Top-Schwachstellen</h2>
              <p className="text-[13px] text-ink-3">
                Gezieltes Training falscher Fragen und Kapitel mit dem größten Verbesserungspotenzial.
              </p>
            </div>

            {wrong.size > 0 && (
              <button
                type="button"
                onClick={() => onNav("practice", { mode: "mistakes" })}
                className="btn btn-primary btn-sm text-[12.5px] font-bold cursor-pointer"
              >
                Fehlerheft trainieren ({wrong.size} Fragen) →
              </button>
            )}
          </div>

          {/* Top 5 Weak Areas */}
          {weakAreas.length > 0 ? (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-ink uppercase tracking-wider">
                Identifizierte Schwachstellen (unter 80% Meisterschaft)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {weakAreas.map(({ chapter, stats }) => (
                  <div
                    key={chapter.id}
                    className="rounded-2xl border border-line bg-paper p-5 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          {stats.mistakesCount} Fehler
                        </span>
                        <span className="num text-sm font-bold text-ink">
                          {stats.answeredCount > 0 ? `${stats.accuracy}% Quote` : "Offen"}
                        </span>
                      </div>

                      <h4 className="mt-3 text-[15px] font-bold text-ink">{chapter.title}</h4>
                      <p className="text-[12px] text-ink-3 line-clamp-1">{chapter.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-400">
                        {stats.completedSetsCount} / 5 Sets abgeschlossen
                      </span>
                      <button
                        type="button"
                        onClick={() => onNav("practice", { chapterId: chapter.id })}
                        className="btn btn-secondary btn-sm text-xs font-bold cursor-pointer"
                      >
                        Kapitel üben →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-line bg-emerald-50/50 p-8 text-center space-y-3">
              <div className="mx-auto h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <IconCheck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-emerald-950">Keine gravierenden Schwachstellen</h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Alle bisher bearbeiteten Kapitel liegen über der Meisterschaftsschwelle. Trainiere weiter neue Sets!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
