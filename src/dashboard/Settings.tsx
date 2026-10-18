import { useEffect, useState } from "react";
import { toast } from "../lib/core";
import { IconShield, IconCheck, IconArrowRight } from "../lib/icons";
import {
  UNIVERSITIES,
  type PreparationStage,
  type SectionCode,
  type TargetUniversity,
} from "../content/medat/config";
import { DIconCard, DIconDownload, DIconTrash, DIconLogout } from "./icons";
import { usePractice } from "./practiceContext";
import { syncUserProfileToSupabase, checkUserEntitlement } from "../lib/dbSync";
import { openCheckout, PADDLE_CONFIG } from "../lib/paddle";
import { triggerPremiumSuccessModal } from "../components/PremiumSuccessModal";

const TABS = [
  "Profil & MedAT-Ausrichtung",
  "Mitgliedschaft & Tarif",
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
  const [isSyncingEntitlement, setIsSyncingEntitlement] = useState(false);
  const [isOpeningCheckout, setIsOpeningCheckout] = useState(false);

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

  const handleSyncEntitlement = async () => {
    setIsSyncingEntitlement(true);
    try {
      const res = await checkUserEntitlement(userProfile.userId);
      if (res.isPro) {
        updateUserProfile({ isPro: true, subscriptionTier: "premium", subscriptionStatus: res.subscriptionStatus });
        toast("🎉 MedAT-Vollzugang ist aktiv und synchronisiert!", "success");
      } else {
        toast("Basis-Zugang aktiv. Keine aktive Vollzugangs-Zahlung gefunden.", "info");
      }
    } catch {
      toast("Synchronisierungsfehler. Bitte versuche es später erneut.", "error");
    } finally {
      setIsSyncingEntitlement(false);
    }
  };

  const handleUpgrade = async () => {
    const priceId =
      PADDLE_CONFIG.monthlyPriceId ||
      PADDLE_CONFIG.oncePriceId ||
      "pri_01m57vnth291kxefayhm59y3zx";

    setIsOpeningCheckout(true);
    try {
      const opened = await openCheckout({
        priceId,
        userId: userProfile.userId,
        userEmail: userProfile.email,
        customData: {
          user_id: userProfile.userId || "",
          user_name: userProfile.name,
          source: "settings_membership_tab",
        },
        onSuccess: () => {
          updateUserProfile({ isPro: true, subscriptionTier: "premium", subscriptionStatus: "active" });
          triggerPremiumSuccessModal();
          toast("🎉 Willkommen beim MedAT-Vollzugang! Alle Kapitel wurden freigeschaltet.", "success");
        },
      });

      if (!opened) {
        toast("Kasse konnte nicht geöffnet werden. Bitte versuche es erneut.", "error");
      }
    } catch (e) {
      console.error("[Settings] Upgrade error:", e);
      toast("Verbindungsfehler beim Öffnen der Kasse.", "error");
    } finally {
      setIsOpeningCheckout(false);
    }
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

          {tab === "Mitgliedschaft & Tarif" && (
            <div className="space-y-6">
              {/* Plan Status Overview Card */}
              <section className="space-y-6 rounded-3xl border border-line bg-paper p-6 sm:p-7 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-line">
                  <div className="flex items-center gap-3.5">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                      userProfile.isPro ? "bg-emerald-50 text-emerald-600" : "bg-primary-subtle text-primary"
                    }`}>
                      <DIconCard className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-[17px] font-bold text-ink">
                          {userProfile.isPro ? "MedAT-Vollzugang (Jahreszugang)" : "MedAT Basis-Zugang (Kostenlos)"}
                        </h2>
                        {userProfile.isPro ? (
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-600/20">
                            ★ Aktiv
                          </span>
                        ) : (
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-ink-4">
                            Basis
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[13px] text-ink-3">
                        {userProfile.isPro
                          ? "Alle 35 BMS-Themen, KFF-Simulationen & Generalproben freigeschaltet."
                          : "Eingeschränkter Zugang (4 BMS-Kapitel, 1 KFF-Simulation, 1 Generalprobe)."}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="text-[20px] font-extrabold text-ink">
                      {userProfile.isPro ? "39 €" : "0 €"}
                    </span>
                    <span className="text-xs text-ink-3 ml-1 font-semibold">
                      {userProfile.isPro ? "/ Jahr" : "für immer"}
                    </span>
                  </div>
                </div>

                {/* Features included */}
                <div className="space-y-3">
                  <h3 className="text-[13px] font-bold uppercase tracking-wider text-ink-4">
                    Im aktuellen Tarif enthalten:
                  </h3>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {[
                      { t: "Alle 35 BMS-Kapitel (Bio, Chem, Phys, Math)", proOnly: true },
                      { t: "5 KFF-Simulationen & Zeitdruck-Timer", proOnly: true },
                      { t: "Vollständige SEK-Szenarien & Textverständnis", proOnly: true },
                      { t: "MedAT-Generalproben #1 & #2 mit Ranglisten", proOnly: true },
                      { t: "Adaptiver KI-Tutor mit Fehleranalyse", proOnly: false },
                      { t: "Sichere Cloud-Synchronisation", proOnly: false },
                    ].map((f) => {
                      const active = userProfile.isPro || !f.proOnly;
                      return (
                        <div
                          key={f.t}
                          className={`flex items-center gap-2.5 rounded-xl border p-3 text-[13px] ${
                            active
                              ? "border-emerald-200/80 bg-emerald-50/40 text-ink font-medium"
                              : "border-line bg-paper-3 text-ink-4 line-through opacity-75"
                          }`}
                        >
                          <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                            active ? "bg-emerald-600 text-paper" : "bg-slate-200 text-slate-400"
                          }`}>
                            {active ? "✓" : "–"}
                          </span>
                          <span className="truncate">{f.t}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {userProfile.isPro ? (
                    <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Dein Vollzugang ist aktiv. Sichere EU-Abrechnung via Paddle.
                    </div>
                  ) : (
                    <button
                      onClick={handleUpgrade}
                      disabled={isOpeningCheckout}
                      className="btn btn-primary px-5 py-2.5 text-[14px] font-bold shadow-cta flex items-center justify-center gap-2"
                    >
                      {isOpeningCheckout ? "Kasse wird geöffnet …" : "Auf Vollzugang upgraden (39 € / Jahr)"}
                      <IconArrowRight className="h-4 w-4" />
                    </button>
                  )}

                  <button
                    onClick={handleSyncEntitlement}
                    disabled={isSyncingEntitlement}
                    className="btn btn-secondary px-4 py-2 text-[13px] font-semibold text-ink-2 hover:text-ink flex items-center justify-center gap-2"
                  >
                    {isSyncingEntitlement ? "Wird überprüft …" : "Status jetzt synchronisieren"}
                  </button>
                </div>
              </section>

              {/* Security & Guarantee Note */}
              <div className="rounded-2xl border border-line bg-paper-2 p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-3">
                <span>
                  🔒 Sichere Zahlungsabwicklung nach europäischen Bankstandards via <strong>Paddle Billing</strong>. 14 Tage Geld-zurück-Garantie.
                </span>
                <span className="shrink-0 font-semibold text-ink-4">Support: medatprep@gmail.com</span>
              </div>
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
