import { useState } from "react";
import { toast } from "../lib/core";
import { IconCheck } from "../lib/icons";
import {
  UNIVERSITIES,
  type DailyStudyTime,
  type ExamType,
  type PreparationStage,
  type SectionCode,
  type TargetUniversity,
} from "../content/medat/config";

export interface OnboardingData {
  examType: ExamType;
  targetYear: number;
  targetUniversity: TargetUniversity;
  name: string;
  preparationStage: PreparationStage;
  dailyStudyTime: DailyStudyTime;
  focusAreas: SectionCode[];
}

export default function OnboardingModal({
  initialData,
  onComplete,
}: {
  initialData?: Partial<OnboardingData>;
  onComplete: (data: OnboardingData) => void;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [examType, setExamType] = useState<ExamType>(initialData?.examType || "MEDAT-H");
  const [targetYear, setTargetYear] = useState<number>(initialData?.targetYear || 2027);
  const [targetUniversity, setTargetUniversity] = useState<TargetUniversity>(
    initialData?.targetUniversity || "undecided"
  );
  const [name, setName] = useState<string>(initialData?.name || "Max");

  const handleFinish = () => {
    onComplete({
      examType,
      targetYear,
      targetUniversity,
      name: name.trim() || "Student:in",
      preparationStage: initialData?.preparationStage || "just_starting",
      dailyStudyTime: initialData?.dailyStudyTime || "1_2h",
      focusAreas: initialData?.focusAreas || ["BMS"],
    });
    toast(`Willkommen bei MedAT Prep! Dein ${examType}-Vorbereitungsplan ist aktiv.`, "success");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="animate-pop-in w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-paper shadow-2xl">
        {/* Header Banner */}
        <div className="border-b border-line bg-gradient-to-r from-primary-subtle/70 to-paper p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-paper">
              Vorbereitungs-Setup
            </span>
            <span className="num text-[12px] font-bold text-ink-3">Schritt {step} von 2</span>
          </div>
          <h2 id="onboarding-title" className="mt-3 font-heading text-[22px] sm:text-[25px] font-extrabold tracking-tight text-ink leading-snug">
            {step === 1 ? "Für welchen MedAT bereitest du dich vor?" : "Zieljahr & Wunsch-Universität"}
          </h2>
          <p className="mt-1 text-[13.5px] leading-relaxed text-ink-3">
            {step === 1
              ? "Wähle deine Studienrichtung, um Fächer, Aufgaben und Gewichtungen exakt anzupassen."
              : "Wir berechnen deinen Countdown und passen deine Vorbereitungsintensität an."}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {step === 1 ? (
            <div className="space-y-3.5">
              {/* Option 1: MedAT-H */}
              <button
                type="button"
                onClick={() => setExamType("MEDAT-H")}
                className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
                  examType === "MEDAT-H"
                    ? "border-primary bg-primary-subtle/40 ring-2 ring-primary/20 shadow-sm"
                    : "border-line bg-paper hover:border-line-2 hover:bg-paper-3/40"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                    examType === "MEDAT-H"
                      ? "border-primary bg-primary text-paper"
                      : "border-line-2 text-transparent"
                  }`}
                >
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-ink">MedAT-H — Humanmedizin</h3>
                    <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[11px] font-black text-ink-4">
                      4 Sektionen
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-3">
                    BMS (40%), Textverständnis (10%), KFF inkl. Implikationen erkennen (40%), SEK (10%).
                  </p>
                </div>
              </button>

              {/* Option 2: MedAT-Z */}
              <button
                type="button"
                onClick={() => {
                  setExamType("MEDAT-Z");
                  if (targetUniversity === "linz") setTargetUniversity("wien"); // Linz has no Dentistry
                }}
                className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
                  examType === "MEDAT-Z"
                    ? "border-primary bg-primary-subtle/40 ring-2 ring-primary/20 shadow-sm"
                    : "border-line bg-paper hover:border-line-2 hover:bg-paper-3/40"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                    examType === "MEDAT-Z"
                      ? "border-primary bg-primary text-paper"
                      : "border-line-2 text-transparent"
                  }`}
                >
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-ink">MedAT-Z — Zahnmedizin</h3>
                    <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[11px] font-black text-ink-4">
                      Inkl. Drahtbiegen
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-3">
                    BMS (40%), Manuelle Fertigkeiten MF (30%), KFF (20%), SEK (10%). Kein Textverständnis / Implikationen.
                  </p>
                </div>
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="user-name" className="block text-[13px] font-bold text-ink mb-1.5">
                  Dein Vorname
                </label>
                <input
                  id="user-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="z.B. Max oder Lisa"
                  className="input-field !h-11 w-full rounded-xl text-[14px]"
                />
              </div>

              {/* Target Year */}
              <div>
                <label className="block text-[13px] font-bold text-ink mb-2">Zieljahr für deinen Antritt</label>
                <div className="grid grid-cols-1 gap-3">
                  {[2027].map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setTargetYear(yr)}
                      className={`rounded-xl border py-2.5 text-[14px] font-bold transition-all ${
                        targetYear === yr
                          ? "border-primary bg-primary text-paper shadow-sm"
                          : "border-line text-ink-2 hover:border-line-2"
                      }`}
                    >
                      Sommer {yr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target University */}
              <div>
                <label className="block text-[13px] font-bold text-ink mb-2">Wunsch-Studienort</label>
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
                          className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all ${
                            isSelected
                              ? "border-primary bg-primary-subtle/50 text-ink font-bold shadow-xs"
                              : "border-line text-ink-3 hover:border-line-2 hover:text-ink"
                          }`}
                        >
                          <span className="text-[13.5px]">{uni.name}</span>
                          <span className="num text-[11px] font-semibold text-ink-4">{uni.city}</span>
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-line bg-paper-3/50 px-6 py-4 sm:px-7 flex items-center justify-between">
          {step === 2 ? (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-[13px] font-bold text-ink-3 hover:text-ink transition-colors"
            >
              ← Zurück
            </button>
          ) : (
            <div />
          )}

          {step === 1 ? (
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn btn-primary px-7 py-2.5 text-[14px] font-bold shadow-sm hover:shadow-md"
            >
              Weiter →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="btn btn-primary px-8 py-2.5 text-[14px] font-bold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Vorbereitung starten 🚀
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
