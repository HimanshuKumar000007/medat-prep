import { useState, useMemo, useEffect } from "react";
import { toast } from "../lib/core";
import {
  IconArrowRight,
  IconCheck,
  IconTarget,
} from "../lib/icons";
import {
  getNextMedATDate,
  UNIVERSITIES,
  type TargetUniversity,
  type PreparationStage,
  type ExamType,
  type SectionCode,
} from "../content/medat/config";
import {
  DIconLock,
  DIconZap,
} from "./icons";
import { usePractice, type SetAttempt, type UserProfile } from "./practiceContext";
import { CHAPTERS, SUBJECTS } from "./practiceData";
import { getLocalDateString } from "./dailyMissionEngine";
import type { PracticeSeed, Screen } from "./Shell";
import PlanSetupWizardModal from "./PlanSetupWizardModal";

const WEEK_LABELS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

/* ---------------- Calendar / Week View (100% Real User Data) ---------------- */
function CalendarView({
  userProfile,
  activityDates = [],
}: {
  userProfile: UserProfile;
  activityDates?: string[];
}) {
  const now = new Date();
  const monthName = now.toLocaleDateString("de-AT", { month: "long", year: "numeric" });
  const studyDays = userProfile.studyDaysPerWeek || 5;
  const dailyMins = userProfile.dailyMinutes || 60;

  const stageLabelMap: Record<string, string> = {
    just_starting: "Phase 1: Fundament & Basiswissen",
    started_studying: "Phase 2: Vertiefung & KFF-Aufbau",
    preparing_while: "Phase 3: Intensivtraining & Tempo",
    doing_mocks: "Phase 4: Simulation & Generalproben",
  };
  const phaseTitle = stageLabelMap[userProfile.preparationStage || "just_starting"];

  // Real month calculations
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const totalDays = lastDay.getDate();

  // Monday as index 0 (0: Mo, 1: Di, 2: Mi, 3: Do, 4: Fr, 5: Sa, 6: So)
  let startDayIndex = firstDay.getDay() - 1;
  if (startDayIndex < 0) startDayIndex = 6;

  // Active study days of the week based on studyDays (3, 5, 6, 7)
  const studyDayIndices = new Set(
    studyDays === 3 ? [0, 2, 4] : // Mo, Mi, Fr
    studyDays === 6 ? [0, 1, 2, 3, 4, 5] : // Mo..Sa
    studyDays === 7 ? [0, 1, 2, 3, 4, 5, 6] : // Mo..So
    [0, 1, 2, 3, 4] // default 5: Mo..Fr
  );

  const baseIntensity = dailyMins <= 30 ? 1 : dailyMins >= 90 ? 3 : 2;

  // Generate real calendar weeks
  const weeks: { day: number; isCurrentMonth: boolean; isToday: boolean; isStudyDay: boolean; isCompleted: boolean; intensity: number }[][] = [];
  let currentWeek: { day: number; isCurrentMonth: boolean; isToday: boolean; isStudyDay: boolean; isCompleted: boolean; intensity: number }[] = [];

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayIndex - 1; i >= 0; i--) {
    currentWeek.push({
      day: prevMonthLastDay - i,
      isCurrentMonth: false,
      isToday: false,
      isStudyDay: false,
      isCompleted: false,
      intensity: 0,
    });
  }

  for (let d = 1; d <= totalDays; d++) {
    const dayOfWeek = (startDayIndex + (d - 1)) % 7;
    const isStudyDay = studyDayIndices.has(dayOfWeek);
    const isToday = d === now.getDate();
    const monthStr = String(month + 1).padStart(2, "0");
    const dayStr = String(d).padStart(2, "0");
    const dateKey = `${year}-${monthStr}-${dayStr}`;
    const isCompleted = activityDates.includes(dateKey);

    currentWeek.push({
      day: d,
      isCurrentMonth: true,
      isToday,
      isStudyDay,
      isCompleted,
      intensity: isStudyDay ? (dayOfWeek === 4 ? Math.min(3, baseIntensity + 1) : baseIntensity) : 0,
    });

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    let nextD = 1;
    while (currentWeek.length < 7) {
      currentWeek.push({
        day: nextD++,
        isCurrentMonth: false,
        isToday: false,
        isStudyDay: false,
        isCompleted: false,
        intensity: 0,
      });
    }
    weeks.push(currentWeek);
  }

  return (
    <div className="rounded-3xl border border-line bg-paper p-4 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-[16px] sm:text-[17px] font-bold text-ink">{phaseTitle}</h3>
          <p className="mt-0.5 text-[12.5px] sm:text-[13.5px] text-ink-3">
            {monthName} · {studyDays} Lerneinheiten pro Woche geplant · ca. {dailyMins} Min/Einheit
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10.5px] sm:text-[11.5px] font-semibold text-ink-3">
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-500 flex items-center justify-center text-white text-[8px] font-bold">✓</span> Absolviert</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-primary/25" /> 30m</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-primary/60" /> 60m</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-primary" /> 90m+</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-paper-3 border border-line" /> Pause</span>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 grid grid-cols-7 gap-1 sm:gap-2.5">
        {WEEK_LABELS.map((d) => (
          <p key={d} className="text-center text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-ink-4">{d}</p>
        ))}
        {weeks.map((week, wi) =>
          week.map((item, di) => {
            return (
              <div
                key={`${wi}-${di}`}
                className={`flex h-11 sm:h-14 flex-col items-center justify-start rounded-xl border pt-1 sm:pt-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                  item.isToday ? "ring-2 ring-primary ring-offset-1" : ""
                } ${
                  item.isCompleted
                    ? "border-emerald-500/40 bg-emerald-500/10 shadow-xs"
                    : item.isStudyDay
                    ? "border-primary/25 shadow-xs"
                    : "border-line bg-paper-3/60"
                } ${!item.isCurrentMonth ? "opacity-30" : ""}`}
                style={
                  !item.isCompleted && item.isStudyDay
                    ? { background: `rgba(220,38,38,${0.06 + item.intensity * 0.09})` }
                    : undefined
                }
              >
                <span className={`num text-[11px] sm:text-[11.5px] font-bold ${item.isStudyDay || item.isCompleted ? "text-ink" : "text-ink-4"}`}>
                  {item.day}
                </span>
                {item.isCompleted ? (
                  <span className="mt-1 sm:mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-white text-[8px] font-black" title="Lerneinheit absolviert">
                    ✓
                  </span>
                ) : item.isStudyDay ? (
                  <span className="mt-1 sm:mt-1.5 h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-primary" aria-hidden="true" />
                ) : null}
                {item.isToday && (
                  <span className="text-[7.5px] sm:text-[8.5px] font-black uppercase text-primary -mt-0.5">Heute</span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default function Plan({
  onNav,
  seed,
}: {
  onNav?: (s: Screen, seed?: PracticeSeed) => void;
  seed?: PracticeSeed;
}) {
  const {
    userProfile,
    updateUserProfile,
    getLearningPlanPhases,
    getChapterStats,
    getChapterSetsWithStatus,
    getActiveSetForChapter,
    getActiveLearningUnit,
    getSubjectStats,
    answers,
    setAttempts,
    activityDates,
  } = usePractice();

  const [view, setView] = useState<"journey" | "kalender">("journey");

  const [showSetupWizard, setShowSetupWizard] = useState<boolean>(() => {
    return seed?.openOnboarding === true || (!userProfile.planConfigured && !userProfile.onboarded);
  });

  useEffect(() => {
    if (seed?.openOnboarding === true || (!userProfile.planConfigured && !userProfile.onboarded)) {
      setShowSetupWizard(true);
    }
  }, [seed?.openOnboarding, userProfile.planConfigured, userProfile.onboarded]);

  const initialPhaseIndex = useMemo(() => {
    switch (userProfile.preparationStage) {
      case "started_studying":
        return 1;
      case "preparing_while":
        return 2;
      case "doing_mocks":
        return 3;
      case "just_starting":
      default:
        return 0;
    }
  }, [userProfile.preparationStage]);

  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(initialPhaseIndex);

  useEffect(() => {
    setSelectedPhaseIndex(initialPhaseIndex);
  }, [initialPhaseIndex]);

  const handleSavePlan = (updated: Partial<UserProfile>) => {
    updateUserProfile(updated);

    const dateStr = getLocalDateString();
    const storageKey = `medat_daily_mission_${userProfile.name || "user"}_${updated.examType || userProfile.examType}_${dateStr}`;
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {}

    toast("Dein persönlicher Lernplan wurde erfolgreich aktiviert!", "success");
  };

  const nextExam = useMemo(() => getNextMedATDate(userProfile.targetYear), [userProfile.targetYear]);
  const uniMeta = UNIVERSITIES[userProfile.targetUniversity] || UNIVERSITIES.undecided;

  const phases = getLearningPlanPhases();
  const activeUnit = useActiveLearningUnitSafe();

  function useActiveLearningUnitSafe() {
    try {
      return getActiveLearningUnit();
    } catch {
      return null;
    }
  }

  // Calculate Overall Mastered Chapters and Stats
  const allChaptersList = Object.values(CHAPTERS);
  const totalChaptersCount = allChaptersList.length;

  const chaptersStats = allChaptersList.map((ch) => getChapterStats(ch.id));
  const masteredChaptersCount = chaptersStats.filter((st) => st.status === "mastered").length;
  const studiedChaptersCount = chaptersStats.filter((st) => st.answeredCount > 0).length;

  const totalQuestionsAnswered = Object.keys(answers).length;
  const totalSetAttemptsCount = Object.values(setAttempts).reduce(
    (acc: number, curr: SetAttempt[]) => acc + curr.length,
    0
  );

  const preparationProgress = Math.round(
    ((masteredChaptersCount * 3 + studiedChaptersCount) / Math.max(totalChaptersCount * 3, 1)) * 100
  );

  // Selected phase details
  const activePhase = phases[selectedPhaseIndex] || phases[0];
  const allUnitsInPhase = activePhase?.steps.flatMap((s) => s.units) || [];
  const doneUnitsCount = allUnitsInPhase.filter((u) => u.state === "done").length;
  const phaseProgress = Math.round((doneUnitsCount / Math.max(allUnitsInPhase.length, 1)) * 100);

  // Subject Progress calculation — dynamically filtered by focusAreas selection
  const relevantSubjects = useMemo(() => {
    const focusAreas: string[] = Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.length ? userProfile.focusAreas : ["BMS"];
    const isMedATZ = userProfile.examType === "MEDAT-Z";

    return SUBJECTS.filter((s) => {
      if (isMedATZ) {
        if (s.section === "TV" || s.id === "kff-imp") return false;
      } else {
        if (s.section === "MF") return false;
      }
      return focusAreas.includes(s.section);
    }).map((s) => s.id);
  }, [userProfile.examType, userProfile.focusAreas]);

  const subjectProgressList = relevantSubjects.map((subId) => {
    const sub = SUBJECTS.find((s) => s.id === subId) || { title: subId, description: "" };
    const stats = getSubjectStats(subId);
    return {
      id: subId,
      title: sub.title,
      accuracy: stats.accuracy,
      answeredCount: stats.answeredCount,
      totalCount: stats.totalQuestions,
      completedChapters: stats.completedChapters,
      totalChapters: stats.totalChapters,
      progressPct:
        stats.totalQuestions > 0
          ? Math.min(Math.round((stats.answeredCount / stats.totalQuestions) * 100), 100)
          : 0,
    };
  });

  const handleStartUnit = (chapterId: string) => {
    if (onNav) {
      onNav("practice", { chapterId });
    }
  };

  const stageLabelMap: Record<string, string> = {
    just_starting: "🌱 Einstieg / Basis",
    started_studying: "📖 Basisaufbau",
    preparing_while: "⚡ Vertiefungsphase",
    doing_mocks: "🎯 Simulation & Feinschliff",
  };

  return (
    <div className="animate-screen-in space-y-7 pb-24 pt-2">
      {showSetupWizard && (
        <PlanSetupWizardModal
          userProfile={userProfile}
          onSave={handleSavePlan}
          onClose={() => setShowSetupWizard(false)}
          onGoToDashboard={() => onNav && onNav("home")}
        />
      )}

      {/* Top Header & View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
            <span className="rounded-full bg-primary-subtle px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-primary whitespace-nowrap">
              MedAT Vorbereitungsplan
            </span>
            <span className="text-[11.5px] sm:text-[12px] font-semibold text-ink-4">
              5-Phasen Roadmap für {userProfile.examType}
            </span>
          </div>
          <h1 className="display text-[26px] xs:text-[30px] sm:text-[34px] text-ink leading-tight">
            Dein persönlicher Lernpfad
          </h1>
        </div>

        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center rounded-2xl border border-line bg-paper p-1 shadow-xs" role="tablist">
          <button
            role="tab"
            aria-selected={view === "journey"}
            onClick={() => setView("journey")}
            className={`rounded-xl px-3 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-bold transition-all text-center flex items-center justify-center cursor-pointer ${
              view === "journey"
                ? "bg-night text-paper shadow-sm"
                : "text-ink-3 hover:bg-paper-3 hover:text-ink"
            }`}
          >
            Journey-Karte
          </button>
          <button
            role="tab"
            aria-selected={view === "kalender"}
            onClick={() => setView("kalender")}
            className={`rounded-xl px-3 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-bold transition-all text-center flex items-center justify-center cursor-pointer ${
              view === "kalender"
                ? "bg-night text-paper shadow-sm"
                : "text-ink-3 hover:bg-paper-3 hover:text-ink"
            }`}
          >
            Wochenplan
          </button>
        </div>
      </div>

      {view === "kalender" ? (
        <CalendarView userProfile={userProfile} activityDates={activityDates} />
      ) : (
        <>
          {/* ============================================================
              1. HERO JOURNEY CARD ("My Path to MedAT")
              ============================================================ */}
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#0B132B] via-[#111D4A] to-[#0B132B] p-3.5 xs:p-5 sm:p-8 text-paper shadow-xl">
            {/* Ambient Background Glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-info/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-5 sm:gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              {/* Left Column: Heading & 2x2 Meta Grid */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                    <span><span className="hidden sm:inline">DEIN LERNPFAD · </span>DEIN WEG ZUM MEDAT</span>
                  </div>
                  <button
                    onClick={() => setShowSetupWizard(true)}
                    className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-[12px] font-bold text-paper border border-white/20 bg-white/10 hover:bg-white/20 transition-all flex items-center gap-1.5 cursor-pointer rounded-xl active:scale-95 shrink-0"
                  >
                    <span>⚙ <span className="hidden xs:inline">Lernplan </span>anpassen</span>
                  </button>
                </div>

                <h2 className="display mt-2 sm:mt-3 text-[24px] xs:text-[28px] sm:text-[36px] text-paper leading-tight">
                  Mein Weg zum <span className="text-primary">{userProfile.examType}</span>
                </h2>
                <p className="mt-1.5 max-w-xl text-[12.5px] xs:text-[13px] sm:text-[14px] leading-relaxed text-slate-300">
                  Dein persönlicher Fahrplan zur MedUni-Zulassung. Du siehst exakt, wo du stehst und was als Nächstes zu tun ist.
                </p>

                {/* 2x2 Meta Grid (Optimized for 320-360px phones without text ellipsis clipping) */}
                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 xs:p-3 sm:p-3.5 backdrop-blur-sm">
                    <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                      Ziel-Prüfung
                    </span>
                    <p className="mt-0.5 text-[13px] xs:text-[14px] sm:text-[15px] font-extrabold text-paper truncate">
                      {userProfile.examType} {userProfile.targetYear === 0 ? "" : userProfile.targetYear}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 xs:p-3 sm:p-3.5 backdrop-blur-sm">
                    <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block truncate" title="Wunsch-Universität">
                      <span className="xs:hidden">Wunsch-Uni</span>
                      <span className="hidden xs:inline">Wunsch-Universität</span>
                    </span>
                    <p className="mt-0.5 text-[13px] xs:text-[14px] sm:text-[15px] font-extrabold text-paper truncate" title={uniMeta.shortName}>
                      {uniMeta.shortName}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 xs:p-3 sm:p-3.5 backdrop-blur-sm">
                    <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                      Verbleibende Zeit
                    </span>
                    <p className="num mt-0.5 text-[12.5px] xs:text-[14px] sm:text-[15px] font-extrabold text-[#FCA5A5] leading-tight truncate">
                      {nextExam.daysRemaining} Tage bis Test
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 xs:p-3 sm:p-3.5 backdrop-blur-sm">
                    <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                      Aktuelles Level
                    </span>
                    <p className="mt-0.5 text-[12px] xs:text-[13px] sm:text-[15px] font-extrabold text-paper leading-tight break-words" title={stageLabelMap[userProfile.preparationStage || "just_starting"]}>
                      {stageLabelMap[userProfile.preparationStage || "just_starting"]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Progress Box */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-3.5 xs:p-4 sm:p-6 backdrop-blur-md">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[10px] xs:text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-slate-300">
                    <span className="xs:hidden">Fortschritt</span>
                    <span className="hidden xs:inline">Vorbereitungsfortschritt</span>
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-slate-300 font-mono shrink-0">
                    {masteredChaptersCount} / {totalChaptersCount} <span className="hidden xs:inline">Kapitel</span>
                  </span>
                </div>

                <div className="num mt-2 flex items-baseline gap-2">
                  <span className="text-[32px] xs:text-[36px] sm:text-[44px] font-black leading-none text-paper">
                    {preparationProgress}%
                  </span>
                  <span className="text-[11.5px] sm:text-[13px] font-semibold text-slate-400">abgeschlossen</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 sm:mt-4 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[#F87171] transition-all duration-700"
                    style={{ width: `${Math.max(preparationProgress, 4)}%` }}
                  />
                </div>

                <p className="mt-2.5 sm:mt-3 text-[11px] xs:text-[11.5px] sm:text-[12px] text-slate-400 leading-relaxed break-words">
                  Schließe alle 5 Sets eines Kapitels ab, um das nächste Kapitel offiziell freizuschalten.
                </p>

                {/* Current Position Compass */}
                <div className="mt-3.5 sm:mt-5 flex items-start xs:items-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-black/25 p-2.5 xs:p-3 sm:px-4 sm:py-3">
                  <span className="flex h-7.5 w-7.5 xs:h-8 xs:w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary mt-0.5 xs:mt-0">
                    <IconTarget className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Aktuelle Position
                    </span>
                    <div className="mt-0.5 text-[12px] xs:text-[13px] sm:text-[13.5px] font-bold text-paper leading-snug">
                      {activeUnit ? (
                        <>
                          <span className="block xs:inline text-paper">{activeUnit.title}</span>
                          <span className="text-slate-400 font-normal block xs:inline xs:ml-1.5 text-[11.5px]">
                            — {activeUnit.activeSet.title}
                          </span>
                        </>
                      ) : (
                        "Basiswissen etablieren"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              2. MAIN GRID (Left: Action & Journey, Right: Analytics)
              ============================================================ */}
          <div className="grid gap-7 lg:grid-cols-[1.45fr_1fr] items-start">
            {/* ---------------- LEFT COLUMN ---------------- */}
            <div className="space-y-7">
              {/* ⚡ Next Recommended Action Card */}
              <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-r from-primary-subtle/50 via-paper to-paper p-4.5 sm:p-7 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-primary">
                        <DIconZap className="h-3.5 w-3.5" />
                        Deine nächste Aktion
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-bold text-primary">
                        Hohe Priorität
                      </span>
                    </div>

                    <h3 className="mt-2 text-[18px] xs:text-[20px] sm:text-[22px] font-bold text-ink leading-snug">
                      {activeUnit
                        ? `Starte ${activeUnit.title}`
                        : (Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.includes("SEK"))
                        ? "Starte SEK — Emotionen erkennen Set 1"
                        : (Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.includes("TV"))
                        ? "Starte TV — Textverständnis Simulation 1"
                        : (Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.includes("KFF"))
                        ? "Starte KFF — Figuren zusammensetzen Set 1"
                        : "Starte BMS — Zellbiologie Set 1"}
                    </h3>
                    <p className="mt-1 text-[13px] sm:text-[13.5px] text-ink-3 leading-relaxed">
                      {activeUnit?.activeSet.description ||
                        ((Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.includes("SEK"))
                          ? "14 MedAT-orientierte Aufgaben zur Situationsanalyse und Emotionseinschätzung."
                          : "15 Grundlagenfragen zur Festigung der Schlüsselbegriffe.")}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleStartUnit(
                        activeUnit?.chapterId ||
                          ((Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.includes("SEK"))
                            ? "sek-rec-face"
                            : (Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.includes("TV"))
                            ? "tv-scipass"
                            : (Array.isArray(userProfile.focusAreas) && userProfile.focusAreas.includes("KFF"))
                            ? "kff-fig-l1"
                            : "bio-01-zelle")
                      )
                    }
                    className="btn btn-primary w-full sm:w-auto px-6 py-3 text-[14px] font-bold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all text-center justify-center shrink-0"
                  >
                    Einheit starten →
                  </button>
                </div>
              </div>

              {/* Preparation Journey Lifecycle Container */}
              <div className="rounded-3xl border border-line bg-paper p-4.5 sm:p-7 shadow-sm space-y-6">
                <div>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-ink">Vorbereitungsphasen</h3>
                  <p className="mt-0.5 text-[12.5px] sm:text-[13.5px] text-ink-3">
                    Begleitet deinen Lernfortschritt über den gesamten Vorbereitungszyklus.
                  </p>
                </div>

                {/* 5-Stage Lifecycle Tabs */}
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2">
                  {phases.map((ph, idx) => {
                    const isSelected = selectedPhaseIndex === idx;
                    const isPhaseUnlocked = !ph.locked;
                    const allUnits = ph.steps.flatMap((s) => s.units);
                    const isAllDone = allUnits.length > 0 && allUnits.every((u) => u.state === "done");
                    const hasActiveUnit = allUnits.some((u) => u.state === "active");

                    const badgeText = isAllDone
                      ? "Gemeistert"
                      : hasActiveUnit
                      ? "Aktiv"
                      : isPhaseUnlocked
                      ? "Offen"
                      : "Gesperrt";

                    const badgeClass = isAllDone
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25"
                      : hasActiveUnit
                      ? "bg-primary text-paper"
                      : isPhaseUnlocked
                      ? "bg-paper-3 text-ink-3 border border-line"
                      : "bg-paper-3 text-ink-4";

                    return (
                      <button
                        key={ph.id}
                        onClick={() => setSelectedPhaseIndex(idx)}
                        className={`flex flex-col items-start rounded-2xl border p-2.5 sm:p-3.5 text-left transition-all cursor-pointer ${
                          idx === 4 ? "col-span-2 xs:col-span-1 sm:col-span-1" : ""
                        } ${
                          isSelected
                            ? "border-primary bg-primary-subtle/30 ring-2 ring-primary/20 shadow-xs"
                            : "border-line bg-paper hover:bg-paper-3/60"
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="text-[10px] sm:text-[10.5px] font-black uppercase text-ink-4">
                            Phase {idx + 1}
                          </span>
                          <span
                            className={`rounded-md px-1.5 py-0.2 text-[9px] sm:text-[9.5px] font-bold ${badgeClass}`}
                          >
                            {badgeText}
                          </span>
                        </div>
                        <p className="mt-1 text-[12.5px] sm:text-[13px] font-bold text-ink truncate w-full">
                          {ph.title.split(" · ")[0]}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Active Phase Overview Box */}
                <div className="rounded-2xl border border-line-2/70 bg-paper-2 p-4 sm:p-5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h4 className="text-[15px] sm:text-[16px] font-bold text-ink">
                          {activePhase.title}
                        </h4>
                        <span className="rounded-md bg-paper px-2 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-ink-3 border border-line">
                          {activePhase.dates}
                        </span>
                      </div>
                      <p className="mt-1 text-[12.5px] sm:text-[13px] text-ink-3">
                        {activePhase.desc}
                      </p>
                    </div>

                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                      <span className="text-[10.5px] sm:text-[11px] font-bold uppercase text-ink-4">
                        Phase-Fortschritt
                      </span>
                      <p className="num text-[18px] sm:text-[20px] font-black text-primary">
                        {phaseProgress}%
                      </p>
                    </div>
                  </div>

                  {activePhase.locked && (
                    <div className="flex items-center gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/10 px-3.5 py-2.5 text-[12.5px] font-medium text-amber-800 dark:text-amber-200">
                      <DIconLock className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                      <span>{activePhase.unlockHint || "Wird im Laufe deiner Vorbereitung freigeschaltet."}</span>
                    </div>
                  )}

                  {/* 2-Column Evidence Cards */}
                  <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-line bg-paper p-3.5 sm:p-4">
                      <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4">
                        Prüfkriterien (Mastery)
                      </span>
                      <p className="mt-1 text-[14px] sm:text-[15px] font-bold text-ink">
                        {doneUnitsCount} / {allUnitsInPhase.length} Kapitel gemeistert
                      </p>
                      <p className="mt-0.5 text-[11.5px] sm:text-[12px] text-ink-3">
                        Ziel: Jeweils ≥ 80% im abschließenden Set 5
                      </p>
                    </div>

                    <div className="rounded-xl border border-line bg-paper p-3.5 sm:p-4">
                      <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-4">
                        Lernnachweise
                      </span>
                      <ul className="mt-1.5 space-y-1 text-[12px] sm:text-[12.5px] text-ink-2 font-medium">
                        <li className="flex items-center gap-1.5">
                          <IconCheck className="h-3.5 w-3.5 text-success shrink-0" />
                          <span>{totalSetAttemptsCount} Übungssets absolviert</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <IconCheck className="h-3.5 w-3.5 text-success shrink-0" />
                          <span>{totalQuestionsAnswered} Fragen beantwortet</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Chapter Units with 5-Set Sequential Pills */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-[14.5px] sm:text-[15px] font-bold text-ink">
                    Kapitel & 5-Set Sequenzen ({activePhase.title.split(" · ")[0]})
                  </h4>

                  {activePhase.steps.map((step) => (
                    <div key={step.id} className="space-y-3">
                      <p className="text-[11px] sm:text-[11.5px] font-black uppercase tracking-wider text-ink-4">
                        {step.title}
                      </p>

                      <div className="space-y-3">
                        {step.units.map((unit) => {
                          const isLocked = unit.state === "locked";
                          const isDone = unit.state === "done";
                          const setsWithStatus = getChapterSetsWithStatus(unit.chapterId);
                          const currentActiveSet = getActiveSetForChapter(unit.chapterId);

                          return (
                            <div
                              key={unit.id}
                              className={`rounded-2xl border transition-all ${
                                isLocked
                                  ? "border-line bg-paper-3/40 opacity-70"
                                  : isDone
                                  ? "border-success/30 bg-success-subtle/20 shadow-xs"
                                  : "border-primary/40 bg-paper ring-1 ring-primary/20 shadow-sm"
                              }`}
                            >
                              <div className="p-4 sm:p-5">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                  <div className="flex items-start gap-2.5 sm:gap-3">
                                    <span
                                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl font-bold text-[13px] ${
                                        isDone
                                          ? "bg-success text-paper"
                                          : isLocked
                                          ? "bg-paper-3 text-ink-4 border border-line"
                                          : "bg-primary text-paper"
                                      }`}
                                    >
                                      {isDone ? <IconCheck className="h-4 w-4" /> : isLocked ? <DIconLock className="h-3.5 w-3.5" /> : unit.unitNumber}
                                    </span>
                                    <div className="min-w-0">
                                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                        <h5 className="text-[15px] sm:text-[16px] font-bold text-ink leading-snug">
                                          {unit.title}
                                        </h5>
                                        {isDone && (
                                          <span className="rounded-md bg-success/15 px-1.5 py-0.2 text-[10.5px] font-black text-success">
                                            Gemeistert 🏆
                                          </span>
                                        )}
                                      </div>
                                      <p className="mt-0.5 text-[12px] sm:text-[13px] text-ink-3">
                                        {unit.stepTitle} · {unit.questionTarget} Fragen · ca. {unit.estimatedMinutes} Min
                                      </p>
                                    </div>
                                  </div>

                                  {!isLocked && (
                                    <button
                                      onClick={() => handleStartUnit(unit.chapterId)}
                                      className="btn btn-primary btn-sm w-full sm:w-auto px-4 py-2 sm:py-1.5 text-[12.5px] sm:text-[13px] font-bold text-center justify-center shrink-0"
                                    >
                                      {isDone ? "Wiederholen" : `${currentActiveSet.title} starten →`}
                                    </button>
                                  )}
                                </div>

                                {/* 5-Set Sequential Pills */}
                                <div className="mt-3.5 sm:mt-4 grid grid-cols-5 gap-1 sm:gap-1.5 border-t border-line/60 pt-3">
                                  {setsWithStatus.map((set, sIdx) => {
                                    const isSetDone = set.status === "completed";
                                    const isSetActive = set.status === "active";
                                    const isSetReview = set.status === "needs_review";

                                    return (
                                      <div
                                        key={set.id}
                                        className={`flex flex-col items-center justify-center rounded-xl border p-1 sm:p-2 text-center transition-all ${
                                          isSetDone
                                            ? "border-success/30 bg-success/10 text-success"
                                            : isSetActive
                                            ? "border-primary bg-primary text-paper shadow-xs"
                                            : isSetReview
                                            ? "border-warning/40 bg-warning/10 text-warning"
                                            : "border-line bg-paper-3/40 text-ink-4"
                                        }`}
                                      >
                                        <span className="text-[10px] sm:text-[11px] font-extrabold leading-none">
                                          Set {sIdx + 1}
                                        </span>
                                        <span className="mt-1 text-[8.5px] sm:text-[9.5px] font-medium leading-none truncate max-w-full">
                                          {isSetDone
                                            ? `${set.bestScore}%`
                                            : isSetActive
                                            ? "Aktiv"
                                            : isSetReview
                                            ? "Wdh."
                                            : "Gesperrt"}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT COLUMN ---------------- */}
            <div className="space-y-7">
              {/* Subject Progress Card */}
              <div className="rounded-3xl border border-line bg-paper p-4.5 sm:p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-ink">Sektions- & Fachfortschritt</h3>
                  <span className="text-[10.5px] sm:text-[11px] font-bold uppercase text-ink-4">MedAT-Gewichtung</span>
                </div>

                <div className="space-y-4">
                  {subjectProgressList.map((sub) => (
                    <div key={sub.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-[12.5px] sm:text-[13px]">
                        <span className="font-bold text-ink">{sub.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="num text-[11px] sm:text-[11.5px] text-ink-4">
                            {sub.completedChapters}/{sub.totalChapters} Kap.
                          </span>
                          <span className="num font-extrabold text-ink">{sub.progressPct}%</span>
                        </div>
                      </div>

                      {/* Multi-segment Progress Bar */}
                      <div className="h-2 w-full overflow-hidden rounded-full bg-paper-3 border border-line">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${sub.progressPct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Areas Card */}
              <div className="rounded-3xl border border-line bg-gradient-to-b from-paper-2 to-paper p-4.5 sm:p-6 shadow-sm space-y-3">
                <span className="text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-primary">
                  Schwerpunkte & Schwachstellen
                </span>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-ink">
                  Gezielte Schwachstellen-Analyse
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-ink-3 leading-relaxed">
                  Absolviere deine ersten Übungssets, damit MedAT Prep automatisch deine schwierigsten Themenbereiche hervorhebt.
                </p>
                <button
                  onClick={() => onNav && onNav("practice")}
                  className="btn btn-secondary w-full py-2.5 text-[13px] sm:text-[13.5px] font-bold mt-2"
                >
                  Schwerpunkte erkunden →
                </button>
              </div>

              {/* Journey Stats 2x2 Grid */}
              <div className="rounded-3xl border border-line bg-paper p-4.5 sm:p-6 shadow-sm space-y-4">
                <h3 className="text-[16px] sm:text-[17px] font-bold text-ink">Journey-Statistiken</h3>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-center">
                  <div className="rounded-2xl border border-line bg-paper-2 p-3 sm:p-4">
                    <span className="num text-[22px] sm:text-[26px] font-black text-ink">
                      {totalSetAttemptsCount}
                    </span>
                    <span className="block mt-0.5 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-ink-4">
                      Set-Versuche
                    </span>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper-2 p-3 sm:p-4">
                    <span className="num text-[22px] sm:text-[26px] font-black text-ink">
                      {totalQuestionsAnswered}
                    </span>
                    <span className="block mt-0.5 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-ink-4">
                      Fragen gelöst
                    </span>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper-2 p-3 sm:p-4">
                    <span className="num text-[22px] sm:text-[26px] font-black text-ink">
                      {studiedChaptersCount}
                    </span>
                    <span className="block mt-0.5 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-ink-4">
                      Kapitel gelernt
                    </span>
                  </div>

                  <div className="rounded-2xl border border-line bg-paper-2 p-3 sm:p-4">
                    <span className="num text-[22px] sm:text-[26px] font-black text-primary">
                      {masteredChaptersCount}
                    </span>
                    <span className="block mt-0.5 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-ink-4">
                      Gemeistert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
