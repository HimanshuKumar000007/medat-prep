import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "../lib/core";
import { IconArrowRight, IconCheck, IconClose } from "../lib/icons";
import {
  UNIVERSITIES,
  type DailyStudyTime,
  type ExamType,
  type PreparationStage,
  type SectionCode,
  type TargetUniversity,
} from "../content/medat/config";
import type { UserProfile } from "./practiceContext";

export interface PlanSetupWizardModalProps {
  userProfile: UserProfile;
  onSave: (updated: Partial<UserProfile>) => void;
  onClose: () => void;
  onGoToDashboard?: () => void;
}

export default function PlanSetupWizardModal({
  userProfile,
  onSave,
  onClose,
  onGoToDashboard,
}: PlanSetupWizardModalProps) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [examType, setExamType] = useState<ExamType>(userProfile.examType || "MEDAT-H");
  const [targetYear, setTargetYear] = useState<number>(userProfile.targetYear || 2027);
  const [targetUniversity, setTargetUniversity] = useState<TargetUniversity>(
    userProfile.targetUniversity || "undecided"
  );
  const [preparationStage, setPreparationStage] = useState<PreparationStage>(
    userProfile.preparationStage || "just_starting"
  );
  const [dailyMinutes, setDailyMinutes] = useState<number>(userProfile.dailyMinutes || 60);
  const [studyDaysPerWeek, setStudyDaysPerWeek] = useState<number>(
    userProfile.studyDaysPerWeek || 5
  );
  const [focusArea, setFocusArea] = useState<"BMS" | "KFF" | "ALL">(
    userProfile.focusAreas?.includes("KFF") && userProfile.focusAreas?.includes("BMS")
      ? "ALL"
      : userProfile.focusAreas?.includes("KFF")
      ? "KFF"
      : "BMS"
  );
  const [isDone, setIsDone] = useState(false);

  // Portal mount & body scroll lock
  useEffect(() => {
    setMounted(true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  const handleFinish = () => {
    const dailyStudyTime: DailyStudyTime =
      dailyMinutes <= 30
        ? "under_1h"
        : dailyMinutes <= 60
        ? "1_2h"
        : dailyMinutes <= 90
        ? "2_4h"
        : "4h_plus";

    const focusAreas: SectionCode[] =
      focusArea === "KFF"
        ? ["KFF"]
        : focusArea === "ALL"
        ? ["BMS", "KFF"]
        : ["BMS"];

    onSave({
      examType,
      targetYear,
      targetUniversity,
      preparationStage,
      dailyMinutes,
      studyDaysPerWeek,
      dailyStudyTime,
      focusAreas,
      planConfigured: true,
    });
    setIsDone(true);
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isDone) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh] animate-pop-in text-slate-900 my-auto">
        {/* =================================================================
           HEADER BANNER (EXACT LAYOUT FROM SCREENSHOT)
           ================================================================= */}
        <div className="p-6 sm:p-7 border-b border-slate-100 shrink-0 bg-white">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-red-600 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white">
              Dein Weg zum MedAT
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold text-slate-400">
                {isDone ? "Aktiviert 🚀" : `Schritt ${step} von 2`}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <IconClose className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isDone ? (
            <>
              <h2 className="mt-3 font-heading text-[22px] sm:text-[25px] font-extrabold tracking-tight text-slate-900 leading-snug">
                {step === 1
                  ? "Wähle deine Studienrichtung & Ziel-Uni"
                  : "Wie möchtest du deine Vorbereitung takten?"}
              </h2>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-slate-500">
                {step === 1
                  ? "Wir passen alle Fachgewichte, Fragentypen und den Prüfungs-Countdown exakt auf deinen Antritt an."
                  : "Dein persönlicher Lernrhythmus bestimmt den Umfang deiner täglichen Aufgaben ohne Überforderung."}
              </p>
            </>
          ) : (
            <>
              <h2 className="mt-3 font-heading text-[22px] sm:text-[25px] font-extrabold tracking-tight text-slate-900 leading-snug">
                Dein persönlicher Erfolgsplan ist aktiv! 🚀
              </h2>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-slate-500">
                Dein Vorbereitungsfahrplan wurde erfolgreich für{" "}
                {UNIVERSITIES[targetUniversity]?.name || "MedUni Wien"} generiert.
              </p>
            </>
          )}
        </div>

        {/* =================================================================
           MODAL BODY (EXACT VISUALS & PILLS FROM SCREENSHOT)
           ================================================================= */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-6 nice-scroll">
          {isDone ? (
            /* Confirmation Screen */
            <div className="space-y-5 py-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-[12px]">
                    ✓
                  </span>
                  <h4 className="text-[15px] font-bold text-slate-900">
                    Lernplan erfolgreich eingerichtet
                  </h4>
                </div>
                <ul className="text-[13px] text-slate-700 space-y-1 pl-8">
                  <li>
                    <strong>Studienrichtung:</strong> {examType} ({targetYear})
                  </li>
                  <li>
                    <strong>Universität:</strong> {UNIVERSITIES[targetUniversity]?.name} (
                    {UNIVERSITIES[targetUniversity]?.city})
                  </li>
                  <li>
                    <strong>Pensum:</strong> {dailyMinutes} Min/Tag · {studyDaysPerWeek} Tage/Woche
                  </li>
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onGoToDashboard) onGoToDashboard();
                  }}
                  className="btn btn-primary w-full py-3.5 text-[14px] font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer bg-red-600 text-white rounded-xl hover:bg-red-700"
                >
                  <span>Zum Dashboard & Mission starten →</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-secondary w-full py-3.5 text-[14px] font-bold cursor-pointer rounded-xl border border-slate-200 hover:bg-slate-50"
                >
                  <span>Meinen Lernpfad ansehen</span>
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* =============================================================
               STEP 1: EXACT MATCH TO USER'S SCREENSHOT
               ============================================================= */
            <div className="space-y-5">
              {/* 1. STUDY PROGRAM IN AUSTRIA */}
              <div>
                <label className="block text-[11.5px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  1. Studienrichtung in Österreich
                </label>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {/* Option 1: MedAT-H */}
                  <button
                    type="button"
                    onClick={() => setExamType("MEDAT-H")}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                      examType === "MEDAT-H"
                        ? "border-2 border-red-600 bg-white shadow-xs"
                        : "border border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all ${
                        examType === "MEDAT-H"
                          ? "bg-red-600 text-white"
                          : "border-2 border-slate-300 text-transparent"
                      }`}
                    >
                      <IconCheck className="h-3 w-3" />
                    </span>
                    <div>
                      <p className="text-[13.5px] font-bold text-slate-900 leading-tight">
                        MedAT-H · Humanmedizin
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        BMS (40%), KFF (40%), TV (10%), SEK (10%)
                      </p>
                    </div>
                  </button>

                  {/* Option 2: MedAT-Z (Coming soon / Demnächst verfügbar) */}
                  <div
                    role="button"
                    tabIndex={-1}
                    aria-disabled="true"
                    onClick={() => {
                      toast("MedAT-Z ist demnächst verfügbar. Wähle bitte aktuell MedAT-H für deinen Lernplan.", "info");
                    }}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-left opacity-75 cursor-not-allowed select-none transition-all"
                    title="MedAT-Z — Demnächst verfügbar"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-100 text-transparent"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[13.5px] font-bold text-slate-600 leading-tight">
                          MedAT-Z · Zahnmedizin
                        </p>
                        <span className="rounded-md bg-amber-500/10 text-amber-700 border border-amber-500/20 px-2 py-0.5 text-[10.5px] font-bold">
                          Demnächst verfügbar
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        Inkl. Manuelle Fertigkeiten MF (30%) · Folgt in Kürze
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. PLANNED YEAR OF COMMENCEMENT */}
              <div>
                <label className="block text-[11.5px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  2. Geplantes Antrittsjahr
                </label>
                <div>
                  <button
                    type="button"
                    onClick={() => setTargetYear(2027)}
                    className="w-full rounded-2xl py-3 text-[14px] font-bold transition-all cursor-pointer text-center bg-red-600 text-white shadow-xs"
                  >
                    MedAT 2027
                  </button>
                </div>
              </div>

              {/* 3. PREFERRED UNIVERSITY */}
              <div>
                <label className="block text-[11.5px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  3. Wunsch-Universität
                </label>
                <div className="space-y-2">
                  {(Object.keys(UNIVERSITIES) as TargetUniversity[])
                    .filter((u) => examType === "MEDAT-H" || u !== "linz")
                    .map((uid) => {
                      const uni = UNIVERSITIES[uid];
                      const isSelected = targetUniversity === uid;
                      return (
                        <button
                          key={uid}
                          type="button"
                          onClick={() => setTargetUniversity(uid)}
                          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all cursor-pointer ${
                            isSelected
                              ? "border-2 border-red-600 bg-white font-bold text-slate-900 shadow-xs"
                              : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50"
                          }`}
                        >
                          <span className="text-[13.5px]">{uni.name}</span>
                          <span className="text-[11.5px] font-semibold text-slate-400">
                            {uni.city}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            /* =============================================================
               STEP 2: STUDY RHYTHM & FOCUS
               ============================================================= */
            <div className="space-y-5">
              {/* Preparation Stage */}
              <div>
                <label className="block text-[11.5px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  1. Aktueller Wissensstand & Vorkenntnisse
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: "just_starting", label: "🌱 Einstiegsphase", desc: "Grundlagen von 0 aufbauen" },
                    { id: "started_studying", label: "📖 Basisaufbau", desc: "Erste BMS-Themen bereits gelernt" },
                    { id: "preparing_while", label: "⚡ Vertiefungsphase", desc: "KFF & BMS vertiefen, Tempo steigern" },
                    { id: "doing_mocks", label: "🎯 Simulation", desc: "Generalproben & Feinschliff" },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setPreparationStage(st.id as PreparationStage)}
                      className={`flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all cursor-pointer ${
                        preparationStage === st.id
                          ? "border-2 border-red-600 bg-red-50/30 shadow-xs"
                          : "border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <span className="text-[13px] font-bold text-slate-900">{st.label}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5">{st.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Daily Study Time */}
              <div>
                <label className="block text-[11.5px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  2. Tägliche Lernzeit (Missionen-Umfang)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { mins: 30, tag: "Fokus", desc: "~15 Aufgaben" },
                    { mins: 60, tag: "Empfohlen", desc: "~35 Aufgaben" },
                    { mins: 90, tag: "Intensiv", desc: "~50 Aufgaben" },
                    { mins: 120, tag: "Maximal", desc: "~70+ Aufgaben" },
                  ].map((opt) => (
                    <button
                      key={opt.mins}
                      type="button"
                      onClick={() => setDailyMinutes(opt.mins)}
                      className={`flex flex-col items-center justify-center rounded-2xl border p-2.5 text-center transition-all cursor-pointer ${
                        dailyMinutes === opt.mins
                          ? "bg-red-600 text-white shadow-xs border-red-600"
                          : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-[14px] font-bold">{opt.mins} Min</span>
                      <span
                        className={`text-[10px] font-medium mt-0.5 ${
                          dailyMinutes === opt.mins ? "text-red-100" : "text-slate-400"
                        }`}
                      >
                        {opt.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Study Days Per Week */}
              <div>
                <label className="block text-[11.5px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  3. Wie viele Tage pro Woche möchtest du lernen?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 5, 6, 7].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setStudyDaysPerWeek(days)}
                      className={`rounded-2xl border py-2.5 text-center text-[13px] font-bold transition-all cursor-pointer ${
                        studyDaysPerWeek === days
                          ? "bg-red-600 text-white shadow-xs border-red-600"
                          : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {days} Tage{days === 5 ? " ★" : ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority / Focus */}
              <div>
                <label className="block text-[11.5px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  4. Schwerpunkt zu Beginn
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "BMS", label: "BMS Fundament (40%)" },
                    { id: "KFF", label: "Kognitiv KFF (40%)" },
                    { id: "ALL", label: "Ausgewogen" },
                  ].map((fc) => (
                    <button
                      key={fc.id}
                      type="button"
                      onClick={() => setFocusArea(fc.id as any)}
                      className={`rounded-2xl border p-2.5 text-center text-[12px] font-bold transition-all cursor-pointer ${
                        focusArea === fc.id
                          ? "border-2 border-red-600 bg-red-50/40 text-slate-900"
                          : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {fc.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* =================================================================
           STICKY FOOTER
           ================================================================= */}
        {!isDone && (
          <div className="border-t border-slate-200 bg-slate-50/90 px-6 py-4 sm:px-7 flex items-center justify-between shrink-0">
            {step === 2 ? (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[13px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                ← Zurück
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="text-[13px] font-medium text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Später einrichten
              </button>
            )}

            {step === 1 ? (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn btn-primary px-7 py-2.5 text-[14px] font-bold shadow-sm hover:shadow-md cursor-pointer bg-red-600 text-white rounded-xl hover:bg-red-700 flex items-center gap-1.5"
              >
                <span>Weiter zu Lernrhythmus</span>
                <IconArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="btn btn-primary px-8 py-2.5 text-[14px] font-bold shadow-md hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Lernplan jetzt aktivieren 🚀
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
