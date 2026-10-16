import { useEffect, useState } from "react";
import { toast } from "../lib/core";
import { IconShield } from "../lib/icons";
import {
  UNIVERSITIES,
  type PreparationStage,
  type SectionCode,
  type TargetUniversity,
} from "../content/medat/config";
import { DIconCard, DIconDownload, DIconTrash, DIconLogout } from "./icons";
import { usePractice } from "./practiceContext";
import { syncUserProfileToSupabase } from "../lib/dbSync";

const TABS = [
  "Profil & MedAT-Ausrichtung",
  "Datenschutz & Verlauf",
] as const;
type Tab = (typeof TABS)[number];

export default function Settings() {
  const { userProfile, updateUserProfile, resetAnswers, logout } = usePractice();

  const [tab, setTab] = useState<Tab>("Profil & MedAT-Ausrichtung");
  const [name, setName] = useState(userProfile.name || "Student:in");
  const [targetYear, setTargetYear] = useState<number>(userProfile.targetYear ?? 2027);
  const [uni, setUni] = useState<TargetUniversity>(userProfile.targetUniversity || "undecided");
  const [stage, setStage] = useState<PreparationStage>(userProfile.preparationStage || "just_starting");
  const [dailyMinutes, setDailyMinutes] = useState<number>(userProfile.dailyMinutes || 60);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(userProfile.studyDaysPerWeek || 5);
  const [isSaving, setIsSaving] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  // Keep form in sync when userProfile updates or hydrates from Supabase
  useEffect(() => {
    if (userProfile.name) setName(userProfile.name);
    if (userProfile.targetYear !== undefined) setTargetYear(userProfile.targetYear);
    if (userProfile.targetUniversity) setUni(userProfile.targetUniversity);
    if (userProfile.preparationStage) setStage(userProfile.preparationStage);
    if (userProfile.dailyMinutes) setDailyMinutes(userProfile.dailyMinutes);
    if (userProfile.studyDaysPerWeek) setDaysPerWeek(userProfile.studyDaysPerWeek);
  }, [userProfile]);

  const handleSaveProfile = async () => {
    const trimmedName = name.trim() || userProfile.name || "Student:in";
    setIsSaving(true);
    try {
      const updatedProfile = {
        name: trimmedName,
        targetYear: Number(targetYear) || 2027,
        targetUniversity: uni,
        preparationStage: stage,
        dailyMinutes: Number(dailyMinutes) || 60,
        studyDaysPerWeek: Number(daysPerWeek) || 5,
      };

      updateUserProfile(updatedProfile);

      // Explicit direct sync to database for guaranteed persistence
      await syncUserProfileToSupabase({
        ...userProfile,
        ...updatedProfile,
      });
      toast("Profil & Einstellungen erfolgreich in der Datenbank gespeichert! ✓", "success");
    } catch {
      toast("Einstellungen lokal gesichert.", "info");
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetProgress = () => {
    resetAnswers();
    setConfirmReset(false);
  };

  return (
    <div className="animate-screen-in space-y-7 pb-24 pt-2">
      <div>
        <h1 className="display text-[30px] text-ink">Einstellungen</h1>
        <p className="mt-1 text-[15px] text-ink-3">
          Verwalte deine MedAT-Studienrichtung, Ziel-Universität und deinen Lernfortschritt.
        </p>
      </div>

      <div className="mt-7 grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Tab rail */}
        <nav className="flex gap-1 overflow-x-auto lg:flex-col" aria-label="Einstellungsbereiche">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              aria-current={tab === t}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-left text-[13.5px] font-bold transition-colors duration-150 ${
                tab === t
                  ? "bg-primary-subtle font-bold text-primary shadow-xs"
                  : "text-ink-3 hover:bg-paper-3 hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </nav>

        <div key={tab} className="animate-fade-up min-w-0">
          {tab === "Profil & MedAT-Ausrichtung" && (
            <div className="space-y-6">
              <section className="rounded-3xl border border-line bg-paper p-6 sm:p-7 shadow-xs space-y-6">
                <h2 className="text-[17px] font-bold text-ink">MedAT-Ausrichtung & Studienplatz</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="set-name" className="text-[13px] font-bold text-ink">
                      Dein Name
                    </label>
                    <input
                      id="set-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field mt-1.5 text-[14px]"
                      placeholder="Dein Vor- oder Nachname"
                    />
                  </div>

                  <div>
                    <label htmlFor="set-uni" className="text-[13px] font-bold text-ink">
                      Wunsch-Universität
                    </label>
                    <select
                      id="set-uni"
                      value={uni}
                      onChange={(e) => setUni(e.target.value as TargetUniversity)}
                      className="input-field mt-1.5 text-[14px]"
                    >
                      {Object.keys(UNIVERSITIES)
                        .filter((u) => userProfile.examType === "MEDAT-H" || u !== "linz")
                        .map((u) => (
                          <option key={u} value={u}>
                            {UNIVERSITIES[u as TargetUniversity].name} ({UNIVERSITIES[u as TargetUniversity].city})
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="set-year" className="text-[13px] font-bold text-ink">
                      Antrittsjahr
                    </label>
                    <select
                      id="set-year"
                      value={targetYear}
                      onChange={(e) => setTargetYear(Number(e.target.value))}
                      className="input-field mt-1.5 text-[14px]"
                    >
                      <option value={2026}>Sommer 2026</option>
                      <option value={2027}>Sommer 2027</option>
                      <option value={2028}>Sommer 2028</option>
                      <option value={0}>Noch nicht sicher</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="set-stage" className="text-[13px] font-bold text-ink">
                      Vorbereitungsstand
                    </label>
                    <select
                      id="set-stage"
                      value={stage}
                      onChange={(e) => setStage(e.target.value as PreparationStage)}
                      className="input-field mt-1.5 text-[14px]"
                    >
                      <option value="just_starting">Gerade erst gestartet</option>
                      <option value="started_studying">Bereite mich seit Kurzem vor</option>
                      <option value="preparing_while">Lerne schon seit einiger Zeit</option>
                      <option value="doing_mocks">Schreibe bereits Mocks</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="set-minutes" className="text-[13px] font-bold text-ink">
                      Tägliche Lernzeit
                    </label>
                    <select
                      id="set-minutes"
                      value={dailyMinutes}
                      onChange={(e) => setDailyMinutes(Number(e.target.value))}
                      className="input-field mt-1.5 text-[14px]"
                    >
                      <option value={30}>30 Minuten (Fokus & Wiederholung)</option>
                      <option value={45}>45 Minuten</option>
                      <option value={60}>60 Minuten (Empfohlen)</option>
                      <option value={90}>90 Minuten (Intensiv)</option>
                      <option value={120}>120 Minuten (Volles Pensum)</option>
                      <option value={180}>180 Minuten (Sprint-Phase)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="set-days" className="text-[13px] font-bold text-ink">
                      Lerntage pro Woche
                    </label>
                    <select
                      id="set-days"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                      className="input-field mt-1.5 text-[14px]"
                    >
                      <option value={3}>3 Tage pro Woche (Gemächlich)</option>
                      <option value={4}>4 Tage pro Woche</option>
                      <option value={5}>5 Tage pro Woche (Empfohlen)</option>
                      <option value={6}>6 Tage pro Woche</option>
                      <option value={7}>7 Tage pro Woche (Täglich)</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-line pt-5 flex items-center justify-between">
                  <span className="text-[12.5px] text-ink-4">
                    Deine Profildaten werden sicher mit der MedAT Prep-Datenbank synchronisiert.
                  </span>
                  <button
                    onClick={handleSaveProfile}
                    disabled={isSaving}
                    className="btn btn-primary px-6 py-2.5 font-bold text-[13.5px] flex items-center gap-2"
                  >
                    {isSaving ? "Wird gespeichert …" : "Einstellungen speichern"}
                  </button>
                </div>
              </section>
            </div>
          )}

          {tab === "Datenschutz & Verlauf" && (
            <section className="space-y-6 rounded-3xl border border-line bg-paper p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-info-subtle text-info">
                  <IconShield className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-ink">Lokale Datenhoheit & DSGVO</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-3">
                    Alle deine Übungsergebnisse und Lesezeichen werden sicher in deinem Browser
                    und über die synchronisierte MedAT Prep-Datenbank gespeichert.
                  </p>
                </div>
              </div>

              <div className="border-t border-line pt-5 space-y-4">
                <h3 className="text-[14px] font-bold text-ink">Übungsverlauf zurücksetzen</h3>
                <p className="text-[13px] text-ink-3">
                  Setzt alle deine beantworteten Fragen, Fehlerlisten und Set-Fortschritte auf 0 zurück.
                </p>

                {!confirmReset ? (
                  <button
                    onClick={() => setConfirmReset(true)}
                    className="btn btn-secondary text-[13px] font-bold border-primary/40 text-primary hover:bg-primary-subtle"
                  >
                    <DIconTrash className="h-4 w-4" /> Verlauf zurücksetzen
                  </button>
                ) : (
                  <div className="flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary-subtle/50 p-4">
                    <span className="text-[13px] font-bold text-primary">
                      Bist du sicher? Alle Antworten und Streaks werden gelöscht.
                    </span>
                    <button
                      onClick={handleResetProgress}
                      className="btn btn-primary btn-sm text-[12px] font-bold"
                    >
                      Ja, alles löschen
                    </button>
                    <button
                      onClick={() => setConfirmReset(false)}
                      className="text-[12px] font-bold text-ink-3 hover:text-ink underline"
                    >
                      Abbrechen
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t border-line pt-5 space-y-4">
                <h3 className="text-[14px] font-bold text-ink">Konto-Sitzung</h3>
                <p className="text-[13px] text-ink-3">
                  Melde dich von diesem Gerät ab. Deine Lernfortschritte bleiben sicher in der Cloud gespeichert.
                </p>
                <button
                  onClick={logout}
                  className="btn btn-secondary text-[13px] font-bold border-red-200 text-red-600 hover:bg-red-50"
                >
                  <DIconLogout className="h-4 w-4 text-red-500" /> Von MedAT Prep abmelden
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
