import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { clearUserLoggedOut, isUserLoggedIn, toast } from "../lib/core";
import { LogoMark, IconCheck, IconArrowRight } from "../lib/icons";
import {
  UNIVERSITIES,
  type DailyStudyTime,
  type ExamType,
  type PreparationStage,
  type SectionCode,
  type TargetUniversity,
} from "../content/medat/config";
import { usePractice } from "../dashboard/practiceContext";
import { syncUserProfileToSupabase, fetchUserProfileFromSupabase, saveDailyMissionToSupabase, logUserActivityToSupabase } from "../lib/dbSync";
import { generateDailyMissionTemplate, getDailyMissionStorageKey } from "../dashboard/dailyMissionEngine";
import { getViennaDateString } from "../lib/dateService";
import { dataOrchestrator } from "../orchestrator";
import { sanitizeUserProfile } from "../lib/profileUtils";
import { identifyUser, trackEvent } from "../lib/mixpanel";

const CURRENT_YEAR = new Date().getFullYear();
const NEXT_YEAR = CURRENT_YEAR + 1;
const YEAR_AFTER = CURRENT_YEAR + 2;

const YEAR_OPTIONS = [
  { value: NEXT_YEAR, label: `${NEXT_YEAR}`, desc: "Nächster regulärer MedAT-Sommertermin" },
  { value: YEAR_AFTER, label: `${YEAR_AFTER}`, desc: "Langfristige, entspannte Vorbereitung" },
  { value: 0, label: "Noch nicht sicher", desc: "Ich möchte mir erst einen Überblick verschaffen" },
];

const STAGE_OPTIONS: { value: PreparationStage; label: string; desc: string }[] = [
  {
    value: "just_starting",
    label: "Gerade erst gestartet",
    desc: "Ich fange bei null an und brauche einen klaren, geführten Fahrplan.",
  },
  {
    value: "started_studying",
    label: "Bereite mich seit Kurzem vor",
    desc: "Erste Themen gelernt, suche Struktur und realistische Übungssets.",
  },
  {
    value: "preparing_while",
    label: "Lerne schon seit einiger Zeit",
    desc: "Gute Wissensbasis vorhanden, Fokus auf Vertiefung, Fehlerrate und Tempo.",
  },
  {
    value: "doing_mocks",
    label: "Schreibe bereits Mocks / Testsimulationen",
    desc: "Intensiver Feinschliff, Prüfungsstrategie und KFF-Geschwindigkeit.",
  },
];


export default function PreLoginOnboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateUserProfile, isLoggedIn } = usePractice();

  // If user is already logged in, redirect them directly to the dashboard
  useEffect(() => {
    if (isLoggedIn || isUserLoggedIn()) {
      navigate("/app", { replace: true });
      return;
    }

    if (typeof window !== "undefined" && window.location.hash.includes("access_token")) {
      clearUserLoggedOut();
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          localStorage.setItem("medat_current_user_id", session.user.id);
          dataOrchestrator.setUserId(session.user.id);
          dataOrchestrator.hydrateFromSupabase();
          navigate("/app", { replace: true });
        }
      });
    }
  }, [isLoggedIn, navigate]);

  const checkIsDirectLogin = () => {
    if (typeof window === "undefined") return false;
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return (
      location.pathname === "/login" ||
      hash.includes("mode=login") ||
      hash.includes("/login") ||
      search.includes("mode=login")
    );
  };

  const checkIsDirectSignup = () => {
    if (typeof window === "undefined") return false;
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return (
      location.pathname === "/register" ||
      location.pathname === "/signup" ||
      hash.includes("mode=signup") ||
      hash.includes("mode=register") ||
      hash.includes("/register") ||
      hash.includes("/signup") ||
      search.includes("mode=signup") ||
      search.includes("mode=register")
    );
  };

  // Wizard state (Step 1 to 7)
  const [step, setStep] = useState<number>(() => (checkIsDirectLogin() || checkIsDirectSignup() ? 6 : 1));

  // Questionnaire responses
  const [examType, setExamType] = useState<ExamType>("MEDAT-H");
  const [targetYear, setTargetYear] = useState<number>(NEXT_YEAR);
  const [preparationStage, setPreparationStage] = useState<PreparationStage>("just_starting");
  const [dailyStudyTime, setDailyStudyTime] = useState<DailyStudyTime>("1_2h");
  const [focusAreas, setFocusAreas] = useState<SectionCode[]>(["BMS"]);
  const [targetUniversity, setTargetUniversity] = useState<TargetUniversity>("undecided");

  // Auth modal state (Screen 7)
  const [authMode, setAuthMode] = useState<"signup" | "login" | "forgot" | "update-password">(() =>
    checkIsDirectLogin() ? "login" : "signup"
  );
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetEmailSentTo, setResetEmailSentTo] = useState("");

  useEffect(() => {
    const search = location.search || "";
    const hash = location.hash || "";
    if (search.includes("mode=update-password") || hash.includes("type=recovery")) {
      setStep(6);
      setAuthMode("update-password");
    } else if (checkIsDirectSignup()) {
      setStep(6);
      setAuthMode("signup");
    } else if (checkIsDirectLogin()) {
      setStep(6);
      setAuthMode("login");
    }
  }, [location]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setStep(6);
        setAuthMode("update-password");
      }
    });
    return () => {
      authListener?.subscription?.unsubscribe?.();
    };
  }, []);

  // Focus sections tailored to Exam Type
  const availableSections: { code: SectionCode; title: string; weight: string; desc: string }[] =
    examType === "MEDAT-H"
      ? [
          { code: "BMS", title: "BMS (Basiskenntnisse)", weight: "40% Gewichtung", desc: "Biologie, Chemie, Physik, Mathematik" },
          { code: "TV", title: "Textverständnis (TV)", weight: "10% Gewichtung", desc: "Wissenschaftlich-medizinische Fachtexte" },
          { code: "KFF", title: "Kognitive Fertigkeiten (KFF)", weight: "40% Gewichtung", desc: "Figuren, Zahlenreihen, Wortflüssigkeit, Gedächtnis, Implikationen" },
          { code: "SEK", title: "Sozial-emotionale Kompetenzen", weight: "10% Gewichtung", desc: "Emotionen erkennen, regulieren & soziales Entscheiden" },
        ]
      : [
          { code: "BMS", title: "BMS (Basiskenntnisse)", weight: "40% Gewichtung", desc: "Biologie, Chemie, Physik, Mathematik" },
          { code: "MF", title: "Manuelle Fertigkeiten (MF)", weight: "30% Gewichtung", desc: "Drahtbiegen & Formen spiegeln" },
          { code: "KFF", title: "Kognitive Fertigkeiten (KFF)", weight: "20% Gewichtung", desc: "Figuren, Zahlenreihen, Wortflüssigkeit, Gedächtnis" },
          { code: "SEK", title: "Sozial-emotionale Kompetenzen", weight: "10% Gewichtung", desc: "Emotionen erkennen, regulieren & soziales Entscheiden" },
        ];

  const toggleFocus = (code: SectionCode) => {
    setFocusAreas((prev) => {
      if (prev.includes(code)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter((c) => c !== code);
      }
      return [...prev, code];
    });
  };

  const handleNext = () => {
    if (step < 6) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Build the complete profile payload
  const buildProfilePayload = (nameVal: string, emailVal?: string) =>
    sanitizeUserProfile({
      name: nameVal.trim() || "Student:in",
      email: emailVal || "",
      examType,
      targetYear: targetYear || NEXT_YEAR,
      targetUniversity,
      preparationStage,
      dailyStudyTime,
      dailyMinutes: 60,
      studyDaysPerWeek: 5,
      focusAreas,
      onboarded: true,
      planConfigured: true,
      isPro: false,
      subscriptionTier: "free",
      subscriptionStatus: "none",
    });

  // Supabase Email Sign Up / Login Handler
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    const profileData = buildProfilePayload(fullName, email);

    // Ensure any legacy un-scoped test data is cleaned up so new user starts completely fresh
    try {
      const legacyKeys = [
        "medat_is_pro",
        "medat_subscription_tier",
        "medat_subscription_status",
        "medat_prep_prod_v1_answers",
        "medat_prep_prod_v1_attempts",
        "medat_prep_prod_v1_bookmarks",
        "medat_prep_prod_v1_wrong",
        "medat_prep_prod_v1_seen",
        "medat_prep_prod_v1_completed_sets",
        "medat_prep_prod_v1_set_attempts",
        "medat_prep_prod_v1_activity_dates",
        "medat_mock_history_v4",
        "medat_active_generalprobe_v1",
        "medat_pending_sync_sets",
        "medat_pending_sync_questions",
      ];
      legacyKeys.forEach((k) => localStorage.removeItem(k));
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (k.startsWith("medat_inprogress_") || k.startsWith("medat_prep_v2_guest_"))) {
          localStorage.removeItem(k);
        }
      }
    } catch {}

    // Clear out memory state in orchestrator to prevent any cross-account leakage
    dataOrchestrator.setUserId(null);

    try {
      if (authMode === "signup") {
        localStorage.setItem("medat_pending_profile", JSON.stringify(profileData));

        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim() || "Student:in",
              exam_type: examType,
            },
          },
        });

        // Detect if user already exists in Supabase Auth
        const isAlreadyRegistered = Boolean(
          (error && (
            (error as any).code === "user_already_exists" ||
            error.status === 422 ||
            error.message?.toLowerCase().includes("already registered") ||
            error.message?.toLowerCase().includes("already in use") ||
            error.message?.toLowerCase().includes("already exists") ||
            error.message?.toLowerCase().includes("user already")
          )) ||
          (!error && data?.user && Array.isArray(data.user.identities) && data.user.identities.length === 0)
        );

        if (isAlreadyRegistered) {
          localStorage.removeItem("medat_pending_profile");
          dataOrchestrator.setUserId(null);
          const austrianError =
            "Servus! Zu dieser E-Mail-Adresse existiert bereits ein MedAT-Konto. Bitte melde dich an oder setze dein Passwort zurück.";
          setAuthError(austrianError);
          toast(austrianError, "error");
          return;
        }

        if (error) {
          throw error;
        }

        const newUid = data?.user?.id;
        if (newUid) {
          try {
            localStorage.setItem("medat_current_user_id", newUid);
          } catch {}
          dataOrchestrator.setUserId(newUid);

          // Mixpanel: Identify newly registered user and track sign_up_completed
          identifyUser(newUid, {
            name: fullName.trim() || undefined,
            email: email.trim(),
            examType: profileData.examType,
            targetUniversity: profileData.targetUniversity,
          });
          trackEvent("sign_up_completed", {
            sign_up_method: "email",
            platform: "web",
            exam_type: profileData.examType,
            target_university: profileData.targetUniversity,
          });
        }

        // Genuine new registration: persist initial profile
        updateUserProfile(profileData);

        if (data?.session) {
          await syncUserProfileToSupabase(profileData);
          localStorage.removeItem("medat_pending_profile");
        } else {
          // Attempt automatic sign-in immediately to establish session without email confirmation
          try {
            const loginRes = await supabase.auth.signInWithPassword({
              email: email.trim(),
              password,
            });
            if (loginRes.data?.session) {
              if (loginRes.data.user?.id) {
                dataOrchestrator.setUserId(loginRes.data.user.id);
              }
              await syncUserProfileToSupabase(profileData);
              localStorage.removeItem("medat_pending_profile");
            }
          } catch {
            // Proceed directly into app
          }
        }

        clearUserLoggedOut();
        await dataOrchestrator.hydrateFromSupabase();
        toast("Konto erfolgreich erstellt! Willkommen bei MedAT Prep.", "success");
        navigate("/app", { replace: true });
      } else {
        let authResult = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        // If email is unconfirmed in Supabase, auto-confirm on the fly and retry
        if (authResult.error && authResult.error.message?.toLowerCase().includes("email not confirmed")) {
          try {
            const confirmRes = await fetch("/api/confirm-user", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: email.trim() }),
            });
            if (confirmRes.ok) {
              authResult = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password,
              });
            }
          } catch (confirmErr) {
            console.warn("Auto-confirm attempt error:", confirmErr);
          }
        }

        if (authResult.error) {
          throw authResult.error;
        }

        const data = authResult.data;
        clearUserLoggedOut();
        if (data.user) {
          try {
            localStorage.setItem("medat_current_user_id", data.user.id);
          } catch {}
          dataOrchestrator.setUserId(data.user.id);

          // Mixpanel: Identify existing user on login
          identifyUser(data.user.id, {
            email: data.user.email,
          });

          // Update practiceContext profile so isLoggedIn updates immediately
          updateUserProfile({ userId: data.user.id });

          // Hydrate canonical profile, mission and progress from Supabase
          await dataOrchestrator.hydrateFromSupabase();
        }

        toast("Erfolgreich angemeldet!", "success");
        navigate("/app", { replace: true });
      }
    } catch (err: unknown) {
      let msg = err instanceof Error ? err.message : "Authentifizierungsfehler aufgetreten.";
      if (
        msg.toLowerCase().includes("already registered") ||
        msg.toLowerCase().includes("already in use") ||
        msg.toLowerCase().includes("user already") ||
        msg.toLowerCase().includes("user_already_exists")
      ) {
        msg =
          "Servus! Zu dieser E-Mail-Adresse existiert bereits ein MedAT-Konto. Bitte melde dich an oder setze dein Passwort zurück.";
      } else if (msg.toLowerCase().includes("invalid login credentials")) {
        msg = "Ungültige E-Mail-Adresse oder falsches Passwort. Bitte überprüfe deine Eingaben.";
      }
      setAuthError(msg);
      toast(msg, "error");
    } finally {
      setAuthLoading(false);
    }
  };

  // Forgot Password Trigger (IISER architecture via Resend & Serverless API)
  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setAuthError("Bitte gib eine gültige E-Mail-Adresse an.");
      return;
    }
    setAuthLoading(true);
    setAuthError(null);
    try {
      // 1. Primary: Serverless endpoint with direct Resend email containing ?token=...
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Senden des Links.");
      }
      setResetSuccess(true);
      setResetEmailSentTo(email.trim());
      toast("Link zum Zurücksetzen gesendet! Bitte prüfe deinen Posteingang.", "success");
    } catch (err: unknown) {
      console.warn("Forgot password API fallback to Supabase:", err);
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/#/reset-password`,
        });
        if (error) throw error;
        setResetSuccess(true);
        setResetEmailSentTo(email.trim());
        toast("Link zum Zurücksetzen gesendet! Bitte prüfe deinen Posteingang.", "success");
      } catch (fbErr: any) {
        const msg = fbErr?.message || (err instanceof Error ? err.message : "Fehler beim Senden des Links zum Zurücksetzen.");
        setAuthError(msg);
        toast(msg, "error");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  // Update Password Trigger (Recovery Session)
  const handleUpdatePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || password.length < 6) {
      setAuthError("Das neue Passwort muss mindestens 6 Zeichen lang sein.");
      return;
    }
    setAuthLoading(true);
    setAuthError(null);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      clearUserLoggedOut();
      await dataOrchestrator.hydrateFromSupabase();
      toast("Passwort erfolgreich aktualisiert! Willkommen zurück.", "success");
      navigate("/app", { replace: true });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Fehler beim Aktualisieren des neuen Passworts.";
      setAuthError(msg);
      toast(msg, "error");
    } finally {
      setAuthLoading(false);
    }
  };

  // Google OAuth Trigger
  const handleGoogleAuth = async () => {
    setAuthLoading(true);
    setAuthError(null);
    clearUserLoggedOut();
    try {
      const redirectUrl = `${window.location.origin}${window.location.pathname}`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
        },
      });
      if (error) throw error;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Google Login fehlgeschlagen.";
      setAuthError(msg);
      toast(msg, "error");
      setAuthLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-paper font-sans text-ink flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-line bg-paper/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
            aria-label="Zurück zur Startseite"
          >
            <LogoMark className="h-8 w-8" />
            <span className="display text-[16px] leading-none text-ink">
              MedAT <span className="font-sans font-medium text-ink-3">Prep</span>
            </span>
          </button>

          {/* Step Pill */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs font-semibold text-ink-3">
              {step <= 5 ? `Schritt ${step} von 5` : "Profilübersicht"}
            </span>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((s) => (
                <span
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === step
                      ? "w-6 bg-primary"
                      : s < step
                      ? "w-2 bg-primary/40"
                      : "w-2 bg-line-2"
                  }`}
                />
              ))}
            </div>
            {step < 6 && (
              <button
                onClick={() => {
                  setStep(6);
                  setAuthMode("login");
                }}
                className="ml-2 text-xs font-semibold text-primary hover:underline"
              >
                Anmelden
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8 sm:py-12 flex flex-col justify-center">
        <div className="animate-screen-in">
          {/* ============================================================
              SCREEN 1: Exam Track (MedAT-H vs MedAT-Z)
              ============================================================ */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full bg-primary-muted px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  1. Studienrichtung
                </span>
                <h1 className="display mt-3 text-[26px] sm:text-[32px] text-ink">
                  Für welchen MedAT bereitest du dich vor?
                </h1>
                <p className="mt-2 text-[14.5px] text-ink-3 leading-relaxed">
                  Deine Wahl passt alle Fächer, Aufgaben, Sektionen und Gewichtungen exakt an die offiziellen Prüfungsvorgaben an.
                </p>
              </div>

              <div className="space-y-4 pt-2">
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
                      <h2 className="text-[16.5px] font-bold text-ink">MedAT-H — Humanmedizin</h2>
                      <span className="rounded-md bg-paper-3 px-2.5 py-0.5 text-[11px] font-black text-ink-4">
                        4 Sektionen
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13.5px] text-ink-3 leading-relaxed">
                      BMS (40%), Textverständnis TV (10%), Kognitive Fähigkeiten KFF (40%) inkl. Implikationen erkennen, Sozial-emotionale Kompetenzen SEK (10%).
                    </p>
                  </div>
                </button>

                {/* Option 2: MedAT-Z (Coming soon / Demnächst verfügbar) */}
                <div
                  role="button"
                  tabIndex={-1}
                  aria-disabled="true"
                  onClick={() => {
                    toast("MedAT-Z ist demnächst verfügbar. Wähle bitte aktuell MedAT-H für deine Vorbereitung.", "info");
                  }}
                  className="flex w-full items-start gap-4 rounded-2xl border border-line/70 bg-paper-2/40 p-5 text-left opacity-75 cursor-not-allowed select-none transition-all"
                  title="MedAT-Z — Demnächst verfügbar"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-line-2 bg-paper-3/50 text-transparent"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h2 className="text-[16.5px] font-bold text-ink-2">MedAT-Z — Zahnmedizin</h2>
                      <span className="rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25 px-2.5 py-0.5 text-[11.5px] font-bold">
                        Demnächst verfügbar
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13.5px] text-ink-3 leading-relaxed">
                      BMS (40%), Manuelle Fertigkeiten MF (30% Drahtbiegen &amp; Formen spiegeln), KFF (20%), SEK (10%). Dieser Track folgt in Kürze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 2: Target Exam Year
              ============================================================ */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full bg-primary-muted px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  2. Prüfungsjahr
                </span>
                <h1 className="display mt-3 text-[26px] sm:text-[32px] text-ink">
                  Wann planst du, den MedAT zu schreiben?
                </h1>
                <p className="mt-2 text-[14.5px] text-ink-3 leading-relaxed">
                  Wir berechnen deinen genauen Prüfungscountdown und stimmen deinen Lernrhythmus darauf ab.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {YEAR_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTargetYear(opt.value)}
                    className={`group flex w-full items-center justify-between rounded-2xl border p-4.5 sm:p-5 text-left transition-all duration-200 ${
                      targetYear === opt.value
                        ? "border-primary bg-primary-subtle/40 ring-2 ring-primary/20 shadow-sm"
                        : "border-line bg-paper hover:border-line-2 hover:bg-paper-3/40"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                          targetYear === opt.value
                            ? "border-primary bg-primary text-paper"
                            : "border-line-2 text-transparent"
                        }`}
                      >
                        <IconCheck className="h-3 w-3" />
                      </span>
                      <div>
                        <span className="text-[16px] font-bold text-ink">{opt.label}</span>
                        <p className="text-[13px] text-ink-3">{opt.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 3: Preparation Stage
              ============================================================ */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full bg-primary-muted px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  3. Vorbereitungsstand
                </span>
                <h1 className="display mt-3 text-[26px] sm:text-[32px] text-ink">
                  Wo stehst du aktuell in deiner Vorbereitung?
                </h1>
                <p className="mt-2 text-[14.5px] text-ink-3 leading-relaxed">
                  So können wir dir den idealen Einstiegspunkt empfehlen — ohne dich zu überfordern oder zu unterfordern.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {STAGE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPreparationStage(opt.value)}
                    className={`group flex w-full items-start gap-4 rounded-2xl border p-4.5 sm:p-5 text-left transition-all duration-200 ${
                      preparationStage === opt.value
                        ? "border-primary bg-primary-subtle/40 ring-2 ring-primary/20 shadow-sm"
                        : "border-line bg-paper hover:border-line-2 hover:bg-paper-3/40"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                        preparationStage === opt.value
                          ? "border-primary bg-primary text-paper"
                          : "border-line-2 text-transparent"
                      }`}
                    >
                      <IconCheck className="h-3 w-3" />
                    </span>
                    <div>
                      <h2 className="text-[15.5px] font-bold text-ink">{opt.label}</h2>
                      <p className="mt-0.5 text-[13px] text-ink-3 leading-relaxed">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 4: Priority Focus Areas
              ============================================================ */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full bg-primary-muted px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  4. Schwerpunkte
                </span>
                <h1 className="display mt-3 text-[26px] sm:text-[32px] text-ink">
                  Worauf möchtest du dich zuerst fokussieren?
                </h1>
                <p className="mt-2 text-[14.5px] text-ink-3 leading-relaxed">
                  Wähle einen oder mehrere Bereiche für deinen optimalen Start.
                </p>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {availableSections.map((sec) => {
                  const isSelected = focusAreas.includes(sec.code);
                  return (
                    <button
                      key={sec.code}
                      type="button"
                      onClick={() => toggleFocus(sec.code)}
                      className={`group flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary-subtle/40 ring-2 ring-primary/20 shadow-sm"
                          : "border-line bg-paper hover:border-line-2 hover:bg-paper-3/40"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                          isSelected
                            ? "border-primary bg-primary text-paper"
                            : "border-line-2 text-transparent"
                        }`}
                      >
                        <IconCheck className="h-3 w-3" />
                      </span>
                      <div>
                        <div className="flex items-center justify-between">
                          <h2 className="text-[15px] font-bold text-ink">{sec.title}</h2>
                        </div>
                        <span className="inline-block mt-0.5 text-[11px] font-bold text-primary">
                          {sec.weight}
                        </span>
                        <p className="mt-1 text-[12.5px] text-ink-3 leading-snug">{sec.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 5: Target Medical University (Optional)
              ============================================================ */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full bg-primary-muted px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  5. Wunsch-Universität (Optional)
                </span>
                <h1 className="display mt-3 text-[26px] sm:text-[32px] text-ink">
                  Hast du bereits eine Wunsch-Universität?
                </h1>
                <p className="mt-2 text-[14.5px] text-ink-3 leading-relaxed">
                  Hilft uns, historische Quotenplätze und Referenzwerte für deinen Studienort einzublenden.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {(
                  [
                    "wien",
                    "innsbruck",
                    "graz",
                    ...(examType === "MEDAT-H" ? ["linz" as TargetUniversity] : []),
                    "undecided" as TargetUniversity,
                  ] as TargetUniversity[]
                ).map((uKey) => {
                  const meta = UNIVERSITIES[uKey];
                  const isSelected = targetUniversity === uKey;
                  return (
                    <button
                      key={uKey}
                      type="button"
                      onClick={() => setTargetUniversity(uKey)}
                      className={`group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary-subtle/40 ring-2 ring-primary/20 shadow-sm"
                          : "border-line bg-paper hover:border-line-2 hover:bg-paper-3/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                            isSelected
                              ? "border-primary bg-primary text-paper"
                              : "border-line-2 text-transparent"
                          }`}
                        >
                          <IconCheck className="h-3 w-3" />
                        </span>
                        <div>
                          <span className="text-[15px] font-bold text-ink">{meta.name}</span>
                          <p className="text-[12.5px] text-ink-3">{meta.cutoffEstimate}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 6: Summary Card & Authentication
              ============================================================ */}
          {step === 6 && (
            <div className="space-y-7">
              {/* Profile Summary Card */}
              <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-paper-2 to-paper p-6 sm:p-7 shadow-lg">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-paper">
                    Vorbereitungsprofil bereit 🎯
                  </span>
                  <button
                    onClick={() => setStep(1)}
                    className="text-[12.5px] font-semibold text-primary hover:underline"
                  >
                    Präferenzen anpassen
                  </button>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 text-left sm:grid-cols-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                      MedAT-Track
                    </span>
                    <p className="mt-0.5 text-[15px] font-bold text-ink">{examType}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                      Zieljahr
                    </span>
                    <p className="mt-0.5 text-[15px] font-bold text-ink">
                      {targetYear === 0 ? "Offen" : targetYear}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                      Stand
                    </span>
                    <p className="mt-0.5 text-[14px] font-semibold text-ink">
                      {STAGE_OPTIONS.find((s) => s.value === preparationStage)?.label}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                      Schwerpunkt
                    </span>
                    <p className="mt-0.5 text-[14px] font-semibold text-ink">
                      {focusAreas.join(" + ")}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                      Wunsch-Uni
                    </span>
                    <p className="mt-0.5 text-[14px] font-semibold text-ink">
                      {UNIVERSITIES[targetUniversity]?.shortName || "Noch offen"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Auth Prompt & Form */}
              <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8 shadow-sm">
                <div className="text-center">
                  <h2 className="display text-[22px] sm:text-[26px] text-ink">
                    {authMode === "signup"
                      ? "Kostenlosen Account erstellen & Plan sichern"
                      : authMode === "forgot"
                      ? "Passwort zurücksetzen"
                      : authMode === "update-password"
                      ? "Neues Passwort festlegen"
                      : "Bei deinem Account anmelden"}
                  </h2>
                  <p className="mt-1.5 text-[14px] text-ink-3">
                    {authMode === "signup"
                      ? "Speichert dein Vorbereitungsprofil und schaltet das personalisierte Dashboard frei."
                      : authMode === "forgot"
                      ? "Gib deine E-Mail-Adresse ein. Wir senden dir einen sicheren Link zum Zurücksetzen deines Passworts."
                      : authMode === "update-password"
                      ? "Wähle ein sicheres neues Passwort für deinen MedAT Prep Account (mindestens 6 Zeichen)."
                      : "Melde dich an, um deinen bestehenden Lernfortschritt fortzusetzen."}
                  </p>
                </div>

                {/* Google OAuth Button (Shown for login & signup) */}
                {(authMode === "login" || authMode === "signup") && (
                  <>
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleGoogleAuth}
                        disabled={authLoading}
                        className="flex w-full items-center justify-center gap-3 rounded-xl border border-line-2 bg-paper px-4 py-3 text-[14.5px] font-bold text-ink shadow-xs transition-colors hover:bg-paper-3 focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-60 cursor-pointer"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        Mit Google fortfahren
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="relative my-6 text-center">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-line" />
                      </div>
                      <span className="relative bg-paper px-3 text-[12px] font-bold uppercase tracking-wider text-ink-4">
                        oder mit E-Mail
                      </span>
                    </div>
                  </>
                )}

                {/* Form based on authMode */}
                {authMode === "forgot" ? (
                  <form onSubmit={handleForgotPasswordSubmit} className="space-y-4 mt-6">
                    {authError && (
                      <div className="rounded-xl border border-primary/20 bg-primary-muted/50 p-3.5 text-center text-[13px] font-medium text-primary">
                        {authError}
                      </div>
                    )}

                    {resetSuccess ? (
                      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-5 text-center text-[13.5px] font-medium text-emerald-800 space-y-2">
                        <div className="text-2xl">✉️</div>
                        <p className="font-bold text-[15px]">E-Mail zum Zurücksetzen gesendet!</p>
                        <p className="text-xs text-emerald-700 leading-relaxed">
                          Wir haben einen Link an <strong>{resetEmailSentTo}</strong> gesendet. Bitte öffne diesen Link in deiner E-Mail, um dein neues Passwort zu vergeben.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div>
                          <label className="block text-[13px] font-bold text-ink mb-1">
                            E-Mail-Adresse deines Accounts
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="deine.email@beispiel.at"
                            className="input-field w-full h-11 rounded-xl text-[14px]"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={authLoading}
                          className="btn btn-primary w-full h-12 text-[15px] font-bold mt-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                        >
                          {authLoading ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                              Link wird generiert...
                            </span>
                          ) : (
                            "Link zum Zurücksetzen anfordern →"
                          )}
                        </button>
                      </>
                    )}

                    <div className="pt-2 text-center">
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode("login");
                          setAuthError(null);
                          setResetSuccess(false);
                        }}
                        className="text-[13.5px] font-semibold text-primary hover:underline cursor-pointer"
                      >
                        ← Zurück zur Anmeldung
                      </button>
                    </div>
                  </form>
                ) : authMode === "update-password" ? (
                  <form onSubmit={handleUpdatePasswordSubmit} className="space-y-4 mt-6">
                    {authError && (
                      <div className="rounded-xl border border-primary/20 bg-primary-muted/50 p-3.5 text-center text-[13px] font-medium text-primary">
                        {authError}
                      </div>
                    )}

                    <div>
                      <label className="block text-[13px] font-bold text-ink mb-1">
                        Neues Passwort festlegen
                      </label>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mindestens 6 Zeichen"
                        className="input-field w-full h-11 rounded-xl text-[14px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={authLoading}
                      className="btn btn-primary w-full h-12 text-[15px] font-bold mt-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      {authLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                          Passwort wird gespeichert...
                        </span>
                      ) : (
                        "Neues Passwort speichern & anmelden →"
                      )}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleAuthSubmit} className="space-y-4">
                    {authError && (
                      <div className="rounded-xl border border-primary/30 bg-primary-muted/60 p-4 text-center text-[13.5px] font-medium text-primary space-y-2 shadow-xs">
                        <div>{authError}</div>
                        {authMode === "signup" && authError.includes("bereits ein MedAT-Konto") && (
                          <div className="pt-2 border-t border-primary/20 flex flex-wrap items-center justify-center gap-3 text-xs">
                            <button
                              type="button"
                              onClick={() => {
                                setAuthMode("login");
                                setAuthError(null);
                              }}
                              className="font-bold underline text-primary hover:text-ink cursor-pointer"
                            >
                              👉 Direkt zur Anmeldung wechseln
                            </button>
                            <span className="text-primary/40">·</span>
                            <button
                              type="button"
                              onClick={() => {
                                setAuthMode("forgot");
                                setAuthError(null);
                              }}
                              className="font-medium underline text-primary hover:text-ink cursor-pointer"
                            >
                              Passwort vergessen?
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {authMode === "signup" && (
                      <div>
                        <label className="block text-[13px] font-bold text-ink mb-1">
                          Dein Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="z.B. Lisa"
                          className="input-field w-full h-11 rounded-xl text-[14px]"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-[13px] font-bold text-ink mb-1">
                        E-Mail-Adresse
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="deine.email@beispiel.at"
                        className="input-field w-full h-11 rounded-xl text-[14px]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-[13px] font-bold text-ink">
                          Passwort
                        </label>
                        {authMode === "login" && (
                          <button
                            type="button"
                            onClick={() => {
                              setAuthMode("forgot");
                              setAuthError(null);
                              setResetSuccess(false);
                            }}
                            className="text-[12.5px] font-semibold text-primary hover:underline cursor-pointer"
                          >
                            Passwort vergessen?
                          </button>
                        )}
                      </div>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mindestens 6 Zeichen"
                        className="input-field w-full h-11 rounded-xl text-[14px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={authLoading}
                      className="btn btn-primary w-full h-12 text-[15px] font-bold mt-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      {authLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                          Wird gespeichert...
                        </span>
                      ) : authMode === "signup" ? (
                        "Kostenloses Konto erstellen & Plan starten →"
                      ) : (
                        "Anmelden & Dashboard öffnen →"
                      )}
                    </button>
                  </form>
                )}

                {/* Auth Mode Switcher */}
                {(authMode === "signup" || authMode === "login") && (
                  <div className="mt-5 flex flex-col items-center gap-2 pt-2 text-center text-[13.5px] text-ink-3">
                    {authMode === "signup" ? (
                      <p>
                        Bereits registriert?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setAuthMode("login");
                            setAuthError(null);
                          }}
                          className="font-bold text-primary hover:underline cursor-pointer"
                        >
                          Hier anmelden
                        </button>
                      </p>
                    ) : (
                      <p>
                        Noch kein Konto?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setAuthMode("signup");
                            setAuthError(null);
                          }}
                          className="font-bold text-primary hover:underline cursor-pointer"
                        >
                          Kostenlos registrieren
                        </button>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Action Footer (For Steps 1 to 5) */}
      {step < 6 && (
        <footer className="border-t border-line bg-paper/95 p-4 sm:p-5">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="btn btn-secondary px-5 text-[14px]"
            >
              {step === 1 ? "Abbrechen" : "← Zurück"}
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary px-6 text-[14px] font-bold shadow-md hover:shadow-lg transition-all"
            >
              {step === 5 ? "Profil anzeigen →" : "Weiter →"}
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
