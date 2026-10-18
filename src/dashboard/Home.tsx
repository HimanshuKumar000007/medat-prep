import React from "react";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFlame,
  IconPuzzle,
  IconTarget,
} from "../lib/icons";
import {
  DIconBookmark,
  DIconBook,
  DIconDna,
  DIconLock,
  DIconTrendDown,
  DIconTrendUp,
  DIconZap,
  DIconSparkles,
} from "./icons";
import { useDashboardData } from "./useDashboardData";
import { usePractice } from "./practiceContext";
import { getLocalDateString } from "./dailyMissionEngine";
import type { PracticeSeed, Screen } from "./Shell";

export default function Home({
  onNav,
}: {
  onNav: (s: Screen, seed?: PracticeSeed) => void;
}) {
  const data = useDashboardData();
  const { user, readiness, sections, activeSectionsList, today, generalprobe, nextAction, weakAreas, learningProgress, recentActivity, trend } = data;
  const { userProfile, updateUserProfile } = usePractice();

  const [showPlanModal, setShowPlanModal] = React.useState(false);
  const [selectedDuration, setSelectedDuration] = React.useState<number>(today.estimatedMinutes || 60);

  React.useEffect(() => {
    if (today.estimatedMinutes) {
      setSelectedDuration(today.estimatedMinutes);
    }
  }, [today.estimatedMinutes]);

  const recordedPartsCount = [
    readiness.breakdown.bms !== null,
    readiness.breakdown.tv !== null,
    readiness.breakdown.kff !== null,
    readiness.breakdown.sek !== null,
  ].filter(Boolean).length;

  // User configures plan explicitly via the "Dein Weg zum MedAT" callout or settings

  const handleSavePlan = (minutes: number, days: number) => {
    const dailyStudyTime =
      minutes <= 30 ? "under_1h" : minutes >= 120 ? "4h_plus" : minutes >= 90 ? "2_4h" : "1_2h";

    today.resetDailyMission();
    updateUserProfile({
      dailyMinutes: minutes,
      studyDaysPerWeek: days,
      dailyStudyTime,
      planConfigured: true,
    });
    setSelectedDuration(minutes);
    setShowPlanModal(false);
  };

  const handleDismissPlan = () => {
    updateUserProfile({
      planConfigured: true,
    });
    setShowPlanModal(false);
  };

  return (
    <div className="animate-screen-in space-y-7 pb-24 pt-2 w-full min-w-0 max-w-full">
      {/* =================================================================
          1. HEADER & QUICK STATUS BAR
          ================================================================= */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="rounded-md bg-primary-subtle px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-primary">
              {user.examType}
            </span>
            <span className="rounded-md bg-paper-3 px-2.5 py-0.5 text-[11px] font-bold text-ink-3">
              Ziel: {user.targetYear === 0 ? "Offen" : user.targetYear} · {user.targetUniversityShort}
            </span>
            <span className="rounded-md bg-paper-3 px-2.5 py-0.5 text-[11px] font-bold text-ink-3">
              {user.preparationStageLabel}
            </span>
            <span className="rounded-md bg-paper-3 px-2.5 py-0.5 text-[11px] font-bold text-ink-3">
              {user.dailyStudyTimeLabel}
            </span>
          </div>
          <h1 className="display text-[30px] sm:text-[34px] text-ink">
            Willkommen zurück, {user.name} 👋
          </h1>
          <p className="mt-0.5 text-[14.5px] text-ink-3">
            {user.todayFormatted} · Schwerpunkte: <strong className="font-semibold text-ink">{user.focusAreasText}</strong>
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <div className="num flex items-center gap-2 rounded-2xl border border-line bg-paper px-4 py-2 text-[12.5px] font-bold text-ink shadow-xs">
            <IconFlame className={`h-4 w-4 ${user.currentStreak > 0 ? "text-primary" : "text-ink-4"}`} />
            <span>{user.currentStreak > 0 ? `${user.currentStreak} Tage Streak` : "0 Tage Streak"}</span>
          </div>
          <div className="num flex items-center gap-2 rounded-2xl bg-night px-4 py-2 text-[12.5px] font-bold text-paper shadow-sm">
            <IconClock className="h-4 w-4 text-[#FCA5A5]" />
            <span>{user.daysRemaining} Tage bis MedAT</span>
          </div>
        </div>
      </div>

      {/* =================================================================
          2. TODAY'S FOCUS & TODAY'S MISSION (COMMAND CENTER HERO)
          ================================================================= */}
      <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#0B132B] via-[#111D4A] to-[#0B132B] p-6 sm:p-8 text-paper shadow-xl">
        {/* Ambient Glow Accents */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-info/15 blur-3xl"
          aria-hidden="true"
        />

        {!userProfile.planConfigured && !userProfile.onboarded ? (
          /* =================================================================
             STATE 0: NEW USER ONBOARDING CTA — DEIN WEG ZUM MEDAT
             ================================================================= */
          <div className="relative space-y-6">
            {/* Top Bar: Slogan Badge & MedUni Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#FCA5A5] backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Dein Weg zum MedAT · Path to MedAT
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold text-slate-300 border border-white/10">
                  Wien · Innsbruck · Graz · Linz
                </span>
              </div>
              <div className="text-[12px] font-medium text-slate-400">
                Lernplan noch nicht eingerichtet
              </div>
            </div>

            {/* Slogan Headline & Engaging Message */}
            <div className="max-w-3xl">
              <span className="text-[12px] font-black uppercase tracking-wider text-[#FCA5A5]">
                Erfolgsplan für dein Medizinstudium
              </span>
              <h2 className="display mt-1.5 text-[26px] sm:text-[32px] text-paper leading-tight">
                Dein persönlicher Weg zum <span className="text-primary">MedAT {user.targetYear === 0 ? "2027" : user.targetYear}</span>
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-300">
                Konfiguriere in weniger als 1 Minute deinen individuellen Vorbereitungsfahrplan. Unser System passt deine täglichen Missionen, Übungspakete und Wiederholungen exakt an deinen Zeitplan, dein Ziel und deinen aktuellen Wissensstand an.
              </p>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/30 text-primary text-[12px]">
                    🧭
                  </span>
                  <h4 className="text-[13.5px] font-bold text-paper">5-Phasen Roadmap</h4>
                </div>
                <p className="text-[12px] text-slate-300 leading-normal">
                  Vom BMS-Fundament über KFF-Mustererkennung bis zur vollen Generalprobe.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/30 text-emerald-300 text-[12px]">
                    ⏱️
                  </span>
                  <h4 className="text-[13.5px] font-bold text-paper">Adaptive Tagesmissionen</h4>
                </div>
                <p className="text-[12px] text-slate-300 leading-normal">
                  30–120 Minuten pro Tag – punktgenau getaktet, ohne Überforderung oder Stoffstau.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-info/30 text-info text-[12px]">
                    🎯
                  </span>
                  <h4 className="text-[13.5px] font-bold text-paper">Uni-Präzision</h4>
                </div>
                <p className="text-[12px] text-slate-300 leading-normal">
                  Exakt gewichtet für MedUni Wien, Graz, Innsbruck oder JKU Linz.
                </p>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNav("plan", { openOnboarding: true })}
                  className="btn btn-primary px-8 py-3.5 text-[15.5px] font-bold shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Meinen Lernpfad einrichten</span>
                  <IconArrowRight className="h-5 w-5" />
                </button>
              </div>
              <span className="text-[12px] font-medium text-slate-400">
                100% kostenlos · In 60 Sek. eingerichtet · Basis für deine tägliche Mission
              </span>
            </div>
          </div>
        ) : !today.isCreatedToday ? (
          /* =================================================================
             STATE A: MISSION NOT STARTED / NOT CREATED TODAY
             ================================================================= */
          <div className="relative space-y-6">
            {/* Top Bar: Mission Status & Weekly Consistency */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  HEUTIGE MISSION
                </span>
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-300 border border-amber-500/30">
                  Noch nicht geplant
                </span>
                <span className="hidden sm:inline-flex rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                  Wochenziel: {today.weeklyCompletedDays} / {today.weeklyTargetDays} Tage ({today.weeklyProgressPercent}%)
                </span>
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-400">
                <div className="flex items-center gap-1" title={`Wochenrhythmus: ${today.weeklyCompletedDays} von ${today.weeklyTargetDays} Tagen aktiv`}>
                  {today.weekDaysActivity?.map((w, wi) => (
                    <span
                      key={wi}
                      className={`h-5 w-5 rounded-md flex items-center justify-center text-[9px] font-bold transition-all ${
                        w.isCompleted
                          ? w.isToday
                            ? "bg-emerald-500 text-white shadow-xs ring-1 ring-white/70"
                            : "bg-emerald-500 text-white shadow-xs"
                          : w.isToday
                          ? "bg-amber-400/30 border border-amber-400 text-amber-200"
                          : w.isStudyDay
                          ? "bg-white/10 text-slate-300 border border-white/10"
                          : "bg-white/5 text-slate-500"
                      }`}
                      title={`${w.dayLabel}: ${w.isCompleted ? (w.isToday ? "Heute gelernt ✓" : "Gelernt ✓") : w.isToday ? "Heute (Noch offen)" : w.isStudyDay ? "Geplanter Lerntag" : "Pausentag"}`}
                    >
                      {w.dayLabel}
                    </span>
                  ))}
                </div>
                <span className="hidden xs:inline text-slate-500">·</span>
                <span>{user.todayFormatted}</span>
              </div>
            </div>

            {/* Explanation */}
            <div>
              <h2 className="display text-[23px] sm:text-[27px] text-paper">
                Plane deine heutige Lerneinheit
              </h2>
              <p className="mt-1 text-[14px] text-slate-300 max-w-2xl leading-relaxed">
                Personalisiert anhand deines Lernpfads und deiner aktuellen Leistung im MedAT-Training.
              </p>
            </div>

            {/* Current Focus Preview (derived from Journey Map) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FCA5A5]">
                  Aktueller Schwerpunkt · Lernpfad
                </span>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10.5px] font-bold text-slate-300">
                  Nächste Station
                </span>
              </div>
              <h3 className="display text-[18px] sm:text-[20px] text-paper leading-[1.15]">
                <span className="block sm:inline">{today.focusTitle}</span>
                <span className="hidden sm:inline text-slate-400 font-sans font-normal text-[16px] mx-2">·</span>
                <span className="inline-flex sm:inline items-center gap-1.5 mt-1.5 sm:mt-0 text-[12.5px] sm:text-[20px] font-normal text-slate-300 sm:text-paper rounded-lg sm:rounded-none bg-white/10 sm:bg-transparent px-2 sm:px-0 py-0.5 sm:py-0 border border-white/10 sm:border-none max-w-full">
                  <span className="sm:hidden h-1.5 w-1.5 rounded-full bg-[#FCA5A5] shrink-0" />
                  <span className="truncate sm:overflow-visible">{today.focusSetTitle}</span>
                </span>
              </h3>
              <p className="mt-1 text-[13px] text-slate-300">
                {today.focusSubtitle} · Fokus: <strong className="font-semibold text-paper">{today.focusFocusArea}</strong>
              </p>
            </div>

            {/* Study Duration / Intensity Selector */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">
                  Heutige Lerndauer & Intensität wählen
                </span>
                <span className="text-[11px] text-slate-400">
                  Gespeichert: {userProfile.dailyMinutes || 60} Min
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(() => {
                  const focus = Array.isArray(userProfile.focusAreas) ? userProfile.focusAreas : ["BMS"];
                  const isMedATZ = userProfile.examType === "MEDAT-Z";
                  const wantBMS = focus.includes("BMS");
                  const wantKFF = focus.includes("KFF") || (isMedATZ && focus.includes("MF"));
                  const wantSEK = !isMedATZ && focus.includes("SEK");
                  const wantTV = !isMedATZ && focus.includes("TV");

                  const getDesc = (mins: number) => {
                    if (!wantBMS && wantSEK && !wantKFF && !wantTV) {
                      return mins <= 30 ? "7 SEK · Review" : mins >= 90 ? "14 SEK · Review" : "10 SEK · Review";
                    }
                    if (!wantBMS && wantTV && !wantKFF && !wantSEK) {
                      return mins <= 30 ? "1 TV · Review" : "2 TV · Review";
                    }
                    if (!wantBMS && wantKFF && !wantTV && !wantSEK) {
                      return mins <= 30 ? (isMedATZ ? "5 MF · Review" : "5 KFF · Review") : (isMedATZ ? "10 MF · Review" : "10 KFF · Review");
                    }
                    if (wantBMS && wantSEK && !wantKFF) {
                      return mins <= 30 ? "10 BMS · 7 SEK" : mins >= 90 ? "20 BMS · 14 SEK" : "15 BMS · 10 SEK";
                    }
                    return mins <= 30
                      ? "10 BMS · 5 KFF"
                      : mins === 60
                      ? "15 BMS · 10 KFF"
                      : mins === 90
                      ? "20 BMS · 15 KFF"
                      : "25 BMS · 15 KFF";
                  };

                  return [
                    { mins: 30, tag: "Fokus", desc: getDesc(30) },
                    { mins: 60, tag: "Empfohlen", desc: getDesc(60) },
                    { mins: 90, tag: "Intensiv", desc: getDesc(90) },
                    { mins: 120, tag: "Maximal", desc: getDesc(120) },
                  ];
                })().map((opt) => (
                  <button
                    key={opt.mins}
                    type="button"
                    onClick={() => setSelectedDuration(opt.mins)}
                    className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedDuration === opt.mins
                        ? "border-primary bg-primary/20 text-paper ring-1 ring-primary shadow-lg shadow-primary/20"
                        : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[15px] font-bold text-paper">{opt.mins} Min</span>
                      <span
                        className={`text-[10px] font-black uppercase px-1.5 py-0.5 rounded ${
                          selectedDuration === opt.mins
                            ? "bg-primary text-paper"
                            : opt.mins === 60
                            ? "bg-white/10 text-[#FCA5A5]"
                            : "bg-white/5 text-slate-400"
                        }`}
                      >
                        {opt.tag}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 truncate w-full">
                      {opt.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Button & Secondary Note */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => today.createDailyMission(selectedDuration)}
                  className="btn btn-primary px-8 py-3.5 text-[15px] font-bold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Tagesmission erstellen</span>
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </div>
              <span className="text-[11.5px] font-medium text-slate-400">
                Du kannst deinen Lernplan jederzeit unter Einstellungen oder "Plan anpassen" ändern.
              </span>
            </div>
          </div>
        ) : (
          /* =================================================================
             STATE B: MISSION CREATED / ACTIVE
             ================================================================= */
          <div className="relative space-y-6">
            {/* Top Bar: Live Mission Progress & Weekly Consistency */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Heute · Aktive Mission
                </span>
                <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[11px] font-bold text-[#FCA5A5] border border-primary/30">
                  {today.estimatedMinutes || 60} Min · {today.studyDaysPerWeek || 5} Tage/Woche
                </span>
                <span className="hidden md:inline-flex rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                  Woche: {today.weeklyCompletedDays} / {today.weeklyTargetDays} Tage ({today.weeklyProgressPercent}%)
                </span>
                <button
                  type="button"
                  onClick={() => setShowPlanModal(true)}
                  className="text-[11.5px] font-semibold text-slate-300 hover:text-paper hover:underline cursor-pointer ml-1.5 transition-colors"
                >
                  ⚙ Plan anpassen
                </button>
                <button
                  type="button"
                  onClick={() => today.resetDailyMission()}
                  className="text-[11.5px] font-semibold text-slate-400 hover:text-amber-300 hover:underline cursor-pointer ml-1.5 transition-colors"
                  title="Tagesmission zurücksetzen und neu planen"
                >
                  ↺ Neu planen
                </button>
              </div>

              <div className="flex items-center gap-3 text-[12px] font-semibold text-slate-300">
                <div className="hidden sm:flex items-center gap-1" title={`Wochenrhythmus: ${today.weeklyCompletedDays} von ${today.weeklyTargetDays} Tagen aktiv`}>
                  {today.weekDaysActivity?.map((w, wi) => (
                    <span
                      key={wi}
                      className={`h-5 w-5 rounded-md flex items-center justify-center text-[9px] font-bold transition-all ${
                        w.isCompleted
                          ? w.isToday
                            ? "bg-emerald-500 text-white shadow-xs ring-1 ring-white/70"
                            : "bg-emerald-500 text-white shadow-xs"
                          : w.isToday
                          ? "bg-primary/40 border border-primary text-paper"
                          : w.isStudyDay
                          ? "bg-white/10 text-slate-300 border border-white/10"
                          : "bg-white/5 text-slate-500"
                      }`}
                      title={`${w.dayLabel}: ${w.isCompleted ? (w.isToday ? "Heute gelernt ✓" : "Gelernt ✓") : w.isToday ? "Heute (Noch offen)" : w.isStudyDay ? "Geplanter Lerntag" : "Pausentag"}`}
                    >
                      {w.dayLabel}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="num font-bold text-paper">
                    {today.completedTasks} / {today.totalTasks} erledigt
                  </span>
                  <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${today.completionPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Focus Detail & Quick Action */}
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl w-full">
                <span className="text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.08em] text-[#FCA5A5] select-none">
                  {today.focusSubtitle}
                </span>
                <h2 className="display mt-1 text-[21px] sm:text-[27px] text-paper leading-[1.14] tracking-wide">
                  <span className="block sm:inline">{today.focusTitle}</span>
                  <span className="hidden sm:inline text-slate-400 font-sans font-normal text-[18px] mx-2">·</span>
                  <span className="inline-flex sm:inline items-center gap-1.5 mt-2 sm:mt-0 text-[13.5px] sm:text-[27px] font-normal text-slate-200 sm:text-paper rounded-lg sm:rounded-none bg-white/10 sm:bg-transparent px-2.5 sm:px-0 py-0.5 sm:py-0 border border-white/15 sm:border-none backdrop-blur-xs max-w-full">
                    <span className="sm:hidden h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                    <span className="truncate sm:overflow-visible">{today.focusSetTitle}</span>
                  </span>
                </h2>
                <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300">
                  {today.focusDescription}{" "}
                  Fokus: <strong className="font-semibold text-paper">{today.focusFocusArea}</strong>
                </p>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => {
                    if (today.focusNavTarget) {
                      onNav(today.focusNavTarget.screen, today.focusNavTarget.seed);
                    } else {
                      onNav("practice", { chapterId: today.focusChapterId });
                    }
                  }}
                  className="btn btn-primary px-7 py-3 text-[14.5px] font-bold shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <span>{today.focusButtonText || "Set starten"}</span>
                  <IconArrowRight className="h-4 w-4" />
                </button>
                <span className="text-[11.5px] font-medium text-slate-400 text-center sm:text-right w-full sm:w-auto">
                  Direkt zur aktiven Einheit im Lernpfad
                </span>
              </div>
            </div>

            {/* Today's Mission Interactive Checklist */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">
                  Today's Mission Checklist · {today.estimatedMinutes || 60} Min · {today.totalTasks} Aufgaben
                </span>
                <span className="text-[11px] font-bold text-slate-400">
                  {today.completionPercent}% abgeschlossen
                </span>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-3">
                {today.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNav(item.navTarget.screen, item.navTarget.seed)}
                    className={`group flex items-start gap-3 rounded-2xl border p-3.5 text-left backdrop-blur-sm transition-all cursor-pointer ${
                      item.completed
                        ? "border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/15"
                        : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-bold text-[12px] mt-0.5 ${
                        item.completed
                          ? "bg-emerald-500 text-paper"
                          : "border border-white/20 text-slate-400 group-hover:border-white/40"
                      }`}
                    >
                      {item.completed ? "✓" : "○"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[13px] font-bold truncate ${
                          item.completed ? "text-emerald-300" : "text-paper group-hover:text-primary transition-colors"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                        {item.subLabel || (
                          item.completed
                            ? "Abgeschlossen"
                            : item.category === "bms" || item.category === "kff" || item.category === "sek" || item.category === "tv"
                            ? `${item.currentCount} / ${item.targetCount} gelöst`
                            : "Jetzt bearbeiten"
                        )}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =================================================================
          3. MEDAT READINESS & SECTIONS-LEISTUNG (PREDICTIVE CORE)
          ================================================================= */}
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-12 min-w-0">
        {/* MedAT Readiness Index / Predicted Performance (5 cols) */}
        <div className="relative overflow-hidden lg:col-span-5 rounded-3xl border border-line/80 bg-paper p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)] flex flex-col justify-between min-w-0 transition-all hover:border-line-2">
          {/* Subtle warm ambient glow */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/[0.04] blur-3xl"
            aria-hidden="true"
          />

          <div className="space-y-4">
            {/* Header: Minimal & Classy */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <IconTarget className="h-3.5 w-3.5" />
                </span>
                <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-3">
                  MedAT-Prüfungsreife
                </span>
              </div>
              {readiness.hasEnoughData ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Aktiv kalibriert
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Kalibrierung · {recordedPartsCount}/4
                </span>
              )}
            </div>

            {readiness.hasEnoughData && readiness.score !== null ? (
              /* Active Calibrated Score View */
              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="display-num text-[44px] sm:text-[50px] font-extrabold text-ink leading-none">
                      {readiness.score}
                    </span>
                    <span className="num text-[17px] font-semibold text-ink-4">/ 100</span>
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold border ${
                      readiness.score >= 78
                        ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
                        : readiness.score >= 65
                        ? "bg-blue-500/10 text-blue-700 border-blue-500/20"
                        : "bg-amber-500/10 text-amber-700 border-amber-500/20"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        readiness.score >= 78 ? "bg-emerald-500" : readiness.score >= 65 ? "bg-blue-500" : "bg-amber-500"
                      }`}
                    />
                    <span>{readiness.label}</span>
                  </div>
                </div>

                <p className="text-[12.5px] text-ink-3 leading-relaxed">
                  Gewichtete Gesamtreife nach offiziellem Zulassungsschlüssel ({user.examType})
                </p>

                {/* Precision Progress Track with Zulassungs-Zielzone */}
                <div className="space-y-1.5 pt-1">
                  <div className="relative h-2 w-full rounded-full bg-paper-3 border border-line/70 overflow-hidden">
                    <div
                      className="absolute right-0 top-0 bottom-0 bg-emerald-500/20 border-l border-emerald-500/50"
                      style={{ left: "78%" }}
                      title="Zielzone: ≥78% für MedAT-Zulassung"
                    />
                    <div
                      className="h-full rounded-full transition-all duration-700 bg-primary"
                      style={{ width: `${Math.min(100, Math.max(0, readiness.score))}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10.5px] text-ink-4 font-medium px-0.5">
                    <span>0% Basis</span>
                    <span className="text-primary font-semibold">Zielzone: ≥78%</span>
                    <span>100% Top</span>
                  </div>
                </div>

                {/* 4 Pillars Grid (Active State) */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {[
                    { code: "BMS", label: "BMS", weight: "40%", score: readiness.breakdown.bms, target: "BMS" },
                    { code: user.examType === "MEDAT-Z" ? "MF" : "TV", label: user.examType === "MEDAT-Z" ? "MF" : "TV", weight: user.examType === "MEDAT-Z" ? "30%" : "10%", score: readiness.breakdown.tv, target: user.examType === "MEDAT-Z" ? "MF" : "TV" },
                    { code: "KFF", label: "KFF", weight: user.examType === "MEDAT-Z" ? "20%" : "40%", score: readiness.breakdown.kff, target: "KFF" },
                    { code: "SEK", label: "SEK", weight: "10%", score: readiness.breakdown.sek, target: "SEK" },
                  ].map((pillar) => (
                    <button
                      key={pillar.code}
                      type="button"
                      onClick={() => onNav("practice", { section: pillar.target as any })}
                      className="group flex flex-col justify-between rounded-2xl border border-line/80 bg-paper-2/40 p-3 sm:p-3.5 text-left transition-all duration-200 hover:border-primary/40 hover:bg-paper hover:shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold uppercase tracking-wide text-ink">
                          {pillar.code}
                        </span>
                        <span className="text-[10px] font-medium text-ink-4 bg-paper-3 px-1.5 py-0.5 rounded-md border border-line/50">
                          {pillar.weight} Gew.
                        </span>
                      </div>
                      <div className="mt-2.5 flex items-baseline justify-between">
                        <span className="num text-[17px] font-bold text-ink">
                          {pillar.score !== null ? `${pillar.score}%` : "—"}
                        </span>
                        <span className="text-[11px] font-semibold text-ink-3 group-hover:text-primary transition-colors flex items-center gap-0.5">
                          Üben
                          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                        </span>
                      </div>
                      <div className="mt-2 h-1 w-full rounded-full bg-line overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: pillar.score !== null ? `${pillar.score}%` : "0%" }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Calibration / Diagnostic State (Shown in screenshot) */
              <div className="space-y-4 pt-1">
                <div>
                  <h3 className="display text-[21px] sm:text-[23px] text-ink font-bold tracking-tight">
                    Index in Kalibrierung
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-3 font-normal">
                    Löse Aufgaben in mindestens 2 Testteilen, um deinen gewichteten MedAT-Reifegrad freizuschalten.
                  </p>
                </div>

                {/* 4-Pillar Segmented Bar Indicator */}
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { key: "bms", label: "BMS", done: readiness.breakdown.bms !== null },
                      { key: "tv", label: user.examType === "MEDAT-Z" ? "MF" : "TV", done: readiness.breakdown.tv !== null },
                      { key: "kff", label: "KFF", done: readiness.breakdown.kff !== null },
                      { key: "sek", label: "SEK", done: readiness.breakdown.sek !== null },
                    ].map((seg) => (
                      <div
                        key={seg.key}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          seg.done ? "bg-primary" : "bg-line/80"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-ink-4">
                    <span>
                      {recordedPartsCount === 0
                        ? "Noch keine Testdaten"
                        : `${recordedPartsCount} von 4 Testteilen erfasst`}
                    </span>
                    <span className="font-semibold text-ink-3">
                      {recordedPartsCount >= 2 ? "Bereit zur Berechnung" : "Aktivierung ab 2 Bereichen"}
                    </span>
                  </div>
                </div>

                {/* 4 Pillars Interactive Status Tiles */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { code: "BMS", label: "BMS", weight: "40%", score: readiness.breakdown.bms, target: "BMS" },
                    { code: user.examType === "MEDAT-Z" ? "MF" : "TV", label: user.examType === "MEDAT-Z" ? "MF" : "TV", weight: user.examType === "MEDAT-Z" ? "30%" : "10%", score: readiness.breakdown.tv, target: user.examType === "MEDAT-Z" ? "MF" : "TV" },
                    { code: "KFF", label: "KFF", weight: user.examType === "MEDAT-Z" ? "20%" : "40%", score: readiness.breakdown.kff, target: "KFF" },
                    { code: "SEK", label: "SEK", weight: "10%", score: readiness.breakdown.sek, target: "SEK" },
                  ].map((pillar) => (
                    <button
                      key={pillar.code}
                      type="button"
                      onClick={() => onNav("practice", { section: pillar.target as any })}
                      className="group flex flex-col justify-between rounded-2xl border border-line/80 bg-paper-2/40 p-3 sm:p-3.5 text-left transition-all duration-200 hover:border-primary/40 hover:bg-paper hover:shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold uppercase tracking-wide text-ink">
                          {pillar.code}
                        </span>
                        <span className="text-[10px] font-medium text-ink-4 bg-paper-3 px-1.5 py-0.5 rounded-md border border-line/50">
                          {pillar.weight} Gew.
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        {pillar.score !== null ? (
                          <span className="num text-[16px] font-bold text-emerald-600">
                            {pillar.score}%
                          </span>
                        ) : (
                          <span className="text-[12px] font-medium text-ink-4 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-line-2" />
                            Ausstehend
                          </span>
                        )}
                        <span className="text-[11px] font-semibold text-ink-3 group-hover:text-primary transition-colors flex items-center gap-0.5">
                          {pillar.score !== null ? "✓ Bereit" : "Starten"}
                          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Primary CTA Button */}
                <button
                  type="button"
                  onClick={() => onNav("practice")}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-[13.5px] font-bold text-white shadow-xs transition-all duration-200 hover:bg-primary-hover hover:shadow-md active:scale-[0.99] cursor-pointer"
                >
                  <span>
                    {recordedPartsCount === 0
                      ? "Ersten Bereich trainieren"
                      : "Nächsten Bereich kalibrieren"}
                  </span>
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>

          {/* Footer Legend */}
          <div className="border-t border-line/60 pt-3 mt-4 flex items-center justify-between text-[11px] text-ink-4">
            <span>
              Schlüssel:{" "}
              {user.examType === "MEDAT-Z"
                ? "BMS 40% · MF 30% · KFF 20% · SEK 10%"
                : "BMS 40% · KFF 40% · TV 10% · SEK 10%"}
            </span>
            <span className="font-semibold text-ink-3 hidden xs:inline">Offizieller MedAT-Standard</span>
          </div>
        </div>

        {/* Section Performance Bars (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl border border-line bg-paper p-4 sm:p-6 lg:p-7 shadow-xs min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-[16px] sm:text-[17px] font-bold text-ink truncate">
              Testteile-Leistung ({user.examType})
            </h2>
            <button
              onClick={() => onNav("practice")}
              className="text-[12px] sm:text-[12.5px] font-bold text-primary hover:underline cursor-pointer shrink-0 whitespace-nowrap"
            >
              Alle Testteile →
            </button>
          </div>

          <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
            {activeSectionsList.map((sec) => (
              <div
                key={sec.code}
                onClick={() => onNav("practice", { section: sec.code })}
                className="rounded-2xl border border-line bg-paper-3/40 p-3.5 sm:p-4 transition-all hover:border-primary/40 hover:bg-paper-3/80 cursor-pointer min-w-0"
              >
                <div className="flex items-center justify-between text-[13px] gap-2 min-w-0">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[11px] font-black text-ink shrink-0">
                      {sec.code}
                    </span>
                    <span className="font-bold text-ink truncate">{sec.title}</span>
                    <span className="text-[11px] text-ink-4 shrink-0 hidden xs:inline">({sec.weight}% Gewichtung)</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {sec.trendText && (
                      <span className="text-[11px] font-bold text-emerald-600 hidden sm:inline">
                        {sec.trendText}
                      </span>
                    )}
                    <span className="num font-extrabold text-ink">
                      {sec.accuracy !== null ? `${sec.accuracy}%` : "Keine Daten"}
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-100 p-0.5">
                  <div
                    className="h-full rounded-full transition-all duration-700 bg-primary"
                    style={{
                      width: sec.accuracy !== null ? `${sec.accuracy}%` : "0%",
                    }}
                  />
                </div>

                <div className="mt-2 flex flex-wrap justify-between gap-1 text-[11px] text-ink-4">
                  <span>
                    {sec.answeredCount > 0
                      ? `${sec.answeredCount} / ${sec.totalAvailable} beantwortet`
                      : "Noch keine Aufgaben bearbeitet"}
                  </span>
                  <span>{sec.completedChapters} von {sec.totalChapters} {sec.totalChapters === 1 ? "Kapitel" : "Kapiteln"} gemeistert</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          4. MEDAT-H GENERALPROBE — PROMINENT TEST-DAY SIMULATOR HERO
          ================================================================= */}
      {!generalprobe.attempted ? (
        <div className="relative overflow-hidden rounded-3xl border border-line bg-paper p-4 sm:p-6 lg:p-7 shadow-xs transition-all hover:border-primary/40 hover:shadow-md min-w-0">
          {/* Subtle warm accent glow */}
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  {user.examType === "MEDAT-Z" ? "MEDAT-Z GENERALPROBE" : "MEDAT-H GENERALPROBE"}
                </span>
                <span className="text-[12px] font-semibold text-ink-4 hidden sm:inline">
                  Vollständige Prüfungssimulation
                </span>
              </div>

              <div>
                <h2 className="display text-[21px] sm:text-[25px] text-ink tracking-wide leading-tight">
                  Nächste vollständige Simulation
                </h2>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold text-ink-3">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-paper-3 px-3 py-1.5 border border-line text-ink">
                    <IconPuzzle className="h-4 w-4 text-primary" />
                    <span>221 Aufgaben</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-paper-3 px-3 py-1.5 border border-line">
                    <IconClock className="h-4 w-4 text-primary" />
                    <span>4 Std. 18 Min. Aufgabenzeit</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-paper-3 px-3 py-1.5 border border-line">
                    <span className="text-emerald-600 font-bold">☕</span>
                    <span>+ 60 Min. Mittagspause</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-xl bg-paper-3 px-2.5 py-1.5 border border-line text-[11.5px] text-ink-4">
                    BMS · TV · KFF · SEK
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 pt-1 md:pt-0">
              <button
                onClick={() => onNav("mocks", { mockAction: "start-generalprobe" })}
                className="btn btn-primary px-6 py-3 text-[14.5px] font-bold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
              >
                <span>Bereit für die Generalprobe →</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-3xl border border-line bg-paper p-4 sm:p-6 lg:p-7 shadow-xs transition-all hover:border-primary/40 hover:shadow-md min-w-0">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between sm:justify-start gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200/80 px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-slate-700">
                  <IconCheck className="h-3.5 w-3.5 text-emerald-600" />
                  LETZTE GENERALPROBE
                </span>
                <span className="text-[12px] font-medium text-ink-4">
                  {generalprobe.lastResult?.date}
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="display-num text-[34px] sm:text-[40px] text-ink leading-none">
                    {generalprobe.lastResult?.score}
                  </span>
                  <span className="text-[15px] sm:text-[17px] font-bold text-ink-3">
                    gewichteter Übungswert
                  </span>
                </div>

                {/* 4 Pillars Breakdown */}
                <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg">
                  <div className="rounded-2xl border border-line bg-paper-3/60 px-3.5 py-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">BMS</span>
                    <p className="num text-[17px] sm:text-[19px] font-black text-ink mt-0.5">
                      {generalprobe.lastResult?.bmsPercent}%
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-paper-3/60 px-3.5 py-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                      {user.examType === "MEDAT-Z" ? "MF" : "TV"}
                    </span>
                    <p className="num text-[17px] sm:text-[19px] font-black text-ink mt-0.5">
                      {generalprobe.lastResult?.tvPercent}%
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-paper-3/60 px-3.5 py-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">KFF</span>
                    <p className="num text-[17px] sm:text-[19px] font-black text-ink mt-0.5">
                      {generalprobe.lastResult?.kffPercent}%
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-paper-3/60 px-3.5 py-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">SEK</span>
                    <p className="num text-[17px] sm:text-[19px] font-black text-ink mt-0.5">
                      {generalprobe.lastResult?.sekPercent}%
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-[12px] text-ink-4">
                  Empfehlung: {generalprobe.nextRecommendation}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0 pt-2 lg:pt-0">
              <button
                onClick={() => onNav("mocks", { mockAction: "view-generalprobe-results" })}
                className="btn btn-secondary px-5 py-2.5 text-[13.5px] font-bold justify-center cursor-pointer"
              >
                Ergebnisse ansehen
              </button>
              <button
                onClick={() => onNav("mocks", { mockAction: "start-generalprobe" })}
                className="btn btn-primary px-6 py-2.5 text-[13.5px] font-bold shadow-md hover:scale-[1.02] transition-all flex items-center gap-2 justify-center cursor-pointer"
              >
                <span>Neue Generalprobe starten</span>
                <IconArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          5. SCHWACHSTELLEN & DEIN NÄCHSTER SCHRITT
          ================================================================= */}
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 min-w-0">
        {/* Left Card: Identifizierte Schwachstellen */}
        <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[16px] sm:text-[17px] font-bold text-ink truncate">Identifizierte Schwachstellen</h2>
              <span className="shrink-0 rounded-md bg-paper-3 px-2 py-0.5 text-[10.5px] font-bold text-ink-4">
                Automatischer Drill
              </span>
            </div>
            <p className="text-[12px] sm:text-[12.5px] text-ink-3 mt-1 leading-snug">
              Erkannte Themenbereiche mit Genauigkeit &lt;75% aus deinen tatsächlichen Versuchen.
            </p>

            <div className="mt-4 space-y-3">
              {weakAreas.length > 0 ? (
                weakAreas.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-warning/40 bg-warning-subtle/20 p-3.5 sm:p-4 min-w-0"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold text-[#92400E] uppercase truncate block">
                        {item.section} · {item.title}
                      </span>
                      <p className="text-[12px] sm:text-[12.5px] text-ink-3 mt-0.5 truncate">
                        Genauigkeit: <strong className="font-bold text-[#92400E]">{item.accuracy}%</strong> ({item.mistakesCount} Fehler bei {item.answeredCount} Versuchen)
                      </p>
                    </div>
                    <button
                      onClick={() => onNav("practice", { chapterId: item.chapterId })}
                      className="btn btn-secondary text-[12px] font-bold py-1.5 px-3 border-warning/40 hover:bg-warning-subtle cursor-pointer shrink-0"
                    >
                      Üben →
                    </button>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-line p-5 sm:p-7 text-center">
                  <p className="text-[13px] sm:text-[13.5px] font-semibold text-ink-3">
                    {data.user.currentStreak === 0 && activeSectionsList.every((s) => s.answeredCount === 0)
                      ? "Noch keine zuverlässigen Schwachstellen. Bearbeite Aufgaben, damit wir deine Leistungsbereiche genauer erkennen."
                      : "🎉 Aktuell keine kritischen Schwachstellen unter 75%!"}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-line pt-3 mt-4 text-[11px] text-ink-4">
            * Mindestens 2 Versuche erforderlich für zuverlässige Einstufung.
          </div>
        </div>

        {/* Right Card: DEIN NÄCHSTER SCHRITT */}
        <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-md min-w-0">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-primary shrink-0">
                <DIconZap className="h-3 w-3 text-primary" />
                DEIN NÄCHSTER SCHRITT
              </span>
              <span className="text-[11px] font-bold text-ink-4 uppercase">
                Priorität #1
              </span>
            </div>

            <div>
              <h3 className="display text-[21px] sm:text-[23px] text-ink">
                {nextAction.section} · {nextAction.topic}
              </h3>
              {nextAction.currentPerformance !== null ? (
                <p className="mt-1 text-[13.5px] font-semibold text-ink-2">
                  Deine aktuelle Leistung: <strong className="font-extrabold text-primary">{nextAction.currentPerformance}%</strong>
                </p>
              ) : (
                <p className="mt-1 text-[13px] font-semibold text-ink-3">
                  Status: <span className="font-bold text-ink">Startklar</span>
                </p>
              )}
            </div>

            <p className="text-[13.5px] leading-relaxed text-ink-3">
              {nextAction.reason}
            </p>

            <div className="flex items-center gap-2 text-[13px] font-bold text-ink pt-1">
              <span className="text-primary font-black">→</span>
              <span>{nextAction.recommendationText}</span>
            </div>
          </div>

          <div className="pt-5">
            <button
              onClick={() => onNav("practice", { chapterId: nextAction.chapterId })}
              className="btn btn-primary w-full py-3 text-[14px] font-bold shadow-md hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Jetzt trainieren</span>
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================
          6. AKTUELLER LERNFORTSCHRITT & LETZTE AKTIVITÄT
          ================================================================= */}
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 min-w-0">
        {/* Left: Aktueller Lernfortschritt */}
        <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[16px] sm:text-[17px] font-bold text-ink truncate">Aktueller Lernfortschritt</h2>
              <span className="shrink-0 rounded-md bg-paper-3 px-2 py-0.5 text-[10.5px] font-bold text-ink-4">
                Curriculum
              </span>
            </div>
            <p className="text-[12px] sm:text-[12.5px] text-ink-3 mt-1 leading-snug">
              Dein nächstes aktives Modul im strukturierten MedAT-Lernplan.
            </p>

            <div className="mt-4">
              {learningProgress.hasStarted || learningProgress.chapterId ? (
                <div className="rounded-2xl border border-line bg-paper-3/40 p-3.5 sm:p-5 space-y-3 sm:space-y-3.5 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4 truncate min-w-0">
                      {learningProgress.stepTitle}
                    </span>
                    <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary-subtle px-2.5 py-0.5 text-[10.5px] font-bold text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      Aktiv
                    </span>
                  </div>

                  <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-ink leading-snug break-words">
                    {learningProgress.chapterTitle}
                  </h3>

                  {/* Chapter-Level Progress Bar with Clear Metrics */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[11.5px] sm:text-[12px] font-semibold text-ink-3">
                      <span>Kapitelfortschritt</span>
                      <span className="num font-bold text-ink">
                        {learningProgress.completedSetsCount} / {learningProgress.totalSetsCount} Sets ({learningProgress.progressPercent}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, Math.max(0, learningProgress.progressPercent))}%` }}
                      />
                    </div>
                  </div>

                  {/* Dedicated Active Set Milestone Box */}
                  <div className="rounded-xl border border-line bg-paper/80 p-3 space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[10.5px] sm:text-[11px] font-bold text-ink-4">
                      <span className="uppercase tracking-wider">Nächstes Set</span>
                      <span className="text-primary font-bold">
                        {learningProgress.activeSetQuestionsCount} Aufgaben · {learningProgress.activeSetMode === "timed" ? "Zeitlimit" : "Ungetaktet"}
                      </span>
                    </div>
                    <p className="text-[13px] font-bold text-ink truncate" title={learningProgress.activeSetTitle}>
                      {learningProgress.activeSetTitle}
                    </p>
                    {learningProgress.activeSetSubtitle && (
                      <p className="text-[11.5px] text-ink-3 truncate" title={learningProgress.activeSetSubtitle}>
                        {learningProgress.activeSetSubtitle}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => onNav("practice", { chapterId: learningProgress.chapterId })}
                    className="btn btn-primary w-full py-2.5 text-[13.5px] font-bold shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Set {learningProgress.activeSetOrder} fortsetzen →</span>
                  </button>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-line p-5 sm:p-7 text-center">
                  <p className="text-[13px] sm:text-[13.5px] font-semibold text-ink-3">
                    Noch kein Lernfortschritt. Starte deine erste Einheit.
                  </p>
                  <button
                    onClick={() => onNav("plan")}
                    className="btn btn-secondary mt-3 text-[13px] font-bold px-4 py-2 cursor-pointer"
                  >
                    Lernplan öffnen →
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-line pt-3 mt-4 flex items-center justify-between gap-2 text-[12px] text-ink-4">
            <span className="truncate min-w-0">Sequenzieller Pfad</span>
            <button
              onClick={() => onNav("plan")}
              className="text-primary font-bold hover:underline cursor-pointer shrink-0 whitespace-nowrap"
            >
              Gesamter Lernplan →
            </button>
          </div>
        </div>

        {/* Right: Letzte Aktivität */}
        <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-md min-w-0">
          <div>
            <div className="flex items-center justify-between mb-3.5 sm:mb-4 gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-ink-4 truncate min-w-0">
                LETZTE AKTIVITÄT
              </span>
              <span className="text-[11.5px] font-semibold text-ink-4 shrink-0 whitespace-nowrap">
                {recentActivity.length > 0 ? `${recentActivity.length} ${recentActivity.length === 1 ? "Einheit" : "Einheiten"}` : "0 Einheiten"}
              </span>
            </div>

            {recentActivity.length > 0 ? (
              <div className="divide-y divide-line">
                {recentActivity.map((act) => {
                  const pct = Math.round(act.percentage);
                  const isHigh = pct >= 75;
                  const isMedium = pct >= 50 && pct < 75;

                  const badgeClass =
                    act.section === "BMS"
                      ? "bg-rose-50 text-rose-700 border-rose-200"
                      : act.section === "KFF"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : act.section === "TV"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : act.section === "SEK"
                      ? "bg-purple-50 text-purple-700 border-purple-200"
                      : act.section === "MF"
                      ? "bg-sky-50 text-sky-700 border-sky-200"
                      : "bg-slate-100 text-slate-700 border-slate-200";

                  const scoreClass = isHigh
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : isMedium
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-rose-50 text-rose-700 border-rose-200";

                  return (
                    <div key={act.id} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-2.5 min-w-0">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        {act.section && (
                          <span
                            className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider border ${badgeClass}`}
                          >
                            {act.section}
                          </span>
                        )}
                        <div className="min-w-0 flex-1">
                          <h4 className="text-[13px] sm:text-[13.5px] font-bold text-ink truncate leading-tight" title={act.title}>
                            {act.title}
                          </h4>
                          <p className="text-[11px] text-ink-4 truncate mt-0.5" title={`${act.timeLabel} ${act.subtitle ? `· ${act.subtitle}` : ""}`}>
                            {act.timeLabel} {act.subtitle ? `· ${act.subtitle}` : ""}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <span
                          className={`inline-flex items-center gap-1 rounded-lg border px-2 py-0.5 text-[11px] sm:text-[11.5px] font-black num whitespace-nowrap ${scoreClass}`}
                        >
                          <span>{act.scoreDisplay}</span>
                          <span className="text-[9.5px] sm:text-[10px] opacity-80">({pct}%)</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-line bg-paper-3/40 p-6 text-center space-y-1.5 my-auto">
                <span className="text-2xl">📝</span>
                <h4 className="text-[14px] font-bold text-ink">Noch keine Aktivitäten</h4>
                <p className="text-[12px] text-ink-4 max-w-xs mx-auto">
                  Schließe ein Übungsset oder eine Simulation ab, um deinen Verlauf hier zu sehen.
                </p>
              </div>
            )}
          </div>

          <div className="pt-3.5 border-t border-line mt-4 flex items-center justify-between gap-2 text-[12px] text-ink-4">
            <span className="truncate min-w-0">
              {trend.hasEnoughData ? `7-Tage-Trend: ${trend.labelText}` : trend.labelText}
            </span>
            <button
              onClick={() => onNav("stats")}
              className="text-primary font-bold hover:underline cursor-pointer shrink-0 whitespace-nowrap"
            >
              Alle Statistiken →
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================
          6b. MEDAT AI TUTOR HIGHLIGHT (MedATPrep AI)
          ================================================================= */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-gradient-to-r from-emerald-950/20 via-paper to-emerald-950/10 p-4 sm:p-6 lg:p-7 shadow-xs min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-primary text-white shadow-md">
              <DIconSparkles className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h3 className="text-[15.5px] sm:text-[17px] font-extrabold text-ink leading-snug">
                  MedAT KI-Tutor · Schnelle Hilfe beim Lernen
                </h3>
                <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] sm:text-[10.5px] font-bold tracking-wide text-emerald-800 ring-1 ring-emerald-600/20 whitespace-nowrap">
                  MedAT Tutor (Klinisch & BMS)
                </span>
              </div>
              <p className="mt-1 text-[12.5px] sm:text-[13.5px] text-ink-3 max-w-xl leading-relaxed">
                Brauchst du eine Erklärung zu einer Bio/Chemie-Frage, einen Schritt-für-Schritt-Rechenweg für Physik & Mathe oder Tricks für die KFF-Untertests?
              </p>
            </div>
          </div>
          <button
            onClick={() => onNav("ai")}
            className="btn btn-primary w-full sm:w-auto shrink-0 px-5 py-2.5 text-[13.5px] font-bold shadow-md hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>KI-Tutor öffnen</span>
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* =================================================================
          7. OFFICIAL AUSTRIAN DISCLAIMER
          ================================================================= */}
      <footer className="mt-10 rounded-2xl border border-line bg-paper-3/60 p-5 text-center text-[12px] leading-relaxed text-ink-4">
        <p className="font-semibold text-ink-3">Rechtlicher Hinweis & Unabhängigkeitserklärung:</p>
        <p className="mt-1 max-w-2xl mx-auto">
          MedAT Prep ist eine unabhängige Vorbereitungsplattform. Wir stehen in keiner rechtlichen oder organisatorischen Verbindung zu den Medizinischen Universitäten Wien, Innsbruck, Graz, der JKU Linz oder den offiziellen MedAT-Testentwicklern. Alle Markennamen dienen ausschließlich der Leistungs- und Inhaltsbeschreibung.
        </p>
      </footer>

      {/* Lightweight First-Time / On-Demand Study Plan Setup Modal */}
      <PersonalizeStudyPlanModal
        isOpen={showPlanModal}
        onClose={handleDismissPlan}
        currentMinutes={today.estimatedMinutes || userProfile.dailyMinutes || 60}
        currentDays={today.studyDaysPerWeek || userProfile.studyDaysPerWeek || 5}
        examType={user.examType}
        onSave={handleSavePlan}
      />
    </div>
  );
}

interface StudyPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMinutes: number;
  currentDays: number;
  examType: string;
  onSave: (minutes: number, days: number) => void;
}

function PersonalizeStudyPlanModal({
  isOpen,
  onClose,
  currentMinutes,
  currentDays,
  examType,
  onSave,
}: StudyPlanModalProps) {
  const [selectedMinutes, setSelectedMinutes] = React.useState<number>(currentMinutes || 60);
  const [selectedDays, setSelectedDays] = React.useState<number>(currentDays || 5);

  React.useEffect(() => {
    if (isOpen) {
      setSelectedMinutes(currentMinutes || 60);
      setSelectedDays(currentDays || 5);
    }
  }, [isOpen, currentMinutes, currentDays]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-line bg-paper p-6 sm:p-8 shadow-2xl space-y-6 text-ink">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-ink-3 hover:bg-paper-3 hover:text-ink transition-colors cursor-pointer"
          aria-label="Schließen"
        >
          ✕
        </button>

        {/* Header */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subtle px-3 py-1 text-[11px] font-black uppercase tracking-wider text-primary">
            Lernplan einrichten
          </span>
          <h2 className="display mt-2 text-[22px] sm:text-[25px] text-ink">
            Dein Lernplan einrichten
          </h2>
          <p className="mt-1 text-[13.5px] leading-relaxed text-ink-3">
            Damit wir deine tägliche Mission und Zeiteinteilung optimal auf dein MedAT-Ziel abstimmen können.
          </p>
        </div>

        {/* 1. Daily Study Time */}
        <div className="space-y-2.5">
          <label className="text-[12.5px] font-black uppercase tracking-wider text-ink-4">
            1. Wie viel Zeit hast du normalerweise pro Tag?
          </label>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              { val: 30, label: "30 Min", desc: "Kompakt" },
              { val: 60, label: "60 Min", desc: "Empfohlen" },
              { val: 90, label: "90 Min", desc: "Vertiefung" },
              { val: 120, label: "120+ Min", desc: "Intensiv" },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() => setSelectedMinutes(opt.val)}
                className={`flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all cursor-pointer ${
                  selectedMinutes === opt.val
                    ? "border-primary bg-primary-subtle text-primary shadow-xs font-bold ring-2 ring-primary/20"
                    : "border-line bg-paper-2 hover:border-ink-4 text-ink font-semibold"
                }`}
              >
                <span className="text-[15px]">{opt.label}</span>
                <span className="text-[10.5px] text-ink-3 mt-0.5">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Study Frequency */}
        <div className="space-y-2.5">
          <label className="text-[12.5px] font-black uppercase tracking-wider text-ink-4">
            2. Wie oft möchtest du pro Woche lernen?
          </label>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              { val: 3, label: "3 Tage", desc: "Gemäßigt" },
              { val: 5, label: "5 Tage", desc: "Empfohlen" },
              { val: 6, label: "6 Tage", desc: "Ambitioniert" },
              { val: 7, label: "Jeden Tag", desc: "Täglich" },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() => setSelectedDays(opt.val)}
                className={`flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all cursor-pointer ${
                  selectedDays === opt.val
                    ? "border-primary bg-primary-subtle text-primary shadow-xs font-bold ring-2 ring-primary/20"
                    : "border-line bg-paper-2 hover:border-ink-4 text-ink font-semibold"
                }`}
              >
                <span className="text-[14px]">{opt.label}</span>
                <span className="text-[10.5px] text-ink-3 mt-0.5">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Target Exam Information */}
        <div className="rounded-2xl border border-line bg-paper-3/50 p-3.5 flex items-center justify-between text-[12.5px]">
          <span className="font-semibold text-ink-3">Ziel-Prüfung:</span>
          <span className="font-bold text-ink">
            {examType} (Juli 2027) · Offizieller MedAT-Standard
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => onSave(selectedMinutes, selectedDays)}
            className="btn btn-primary flex-1 py-3 text-[14px] font-bold shadow-md hover:shadow-xl cursor-pointer"
          >
            Plan erstellen & Mission starten →
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary py-3 text-[13.5px] font-semibold text-ink-3 hover:text-ink cursor-pointer"
          >
            Später ändern
          </button>
        </div>
      </div>
    </div>
  );
}
