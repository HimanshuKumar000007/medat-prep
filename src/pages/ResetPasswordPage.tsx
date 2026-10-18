/**
 * src/pages/ResetPasswordPage.tsx
 *
 * Dedicated, ultra-premium, mobile-first & responsive Password Reset & Recovery Page for MedAT Prep.
 * Handles recovery tokens from Supabase, session updates, validation checks,
 * password visibility toggling, real-time match confirmation, and graceful fallback.
 */

import { useState, useEffect, FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { dataOrchestrator } from "../orchestrator";
import { clearUserLoggedOut, toast } from "../lib/core";
import { LogoMark } from "../lib/icons";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Mode: "update" (when recovery token is active) vs "request" (fallback to ask for a reset email)
  const [mode, setMode] = useState<"update" | "request">("update");
  
  // Inputs
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    document.title = "Passwort festlegen — MedAT Prep | Sichere Kontowiederherstellung";
    window.scrollTo(0, 0);

    // Listen for Supabase PASSWORD_RECOVERY event
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setMode("update");
        setError(null);
      }
    });

    // Check if session or recovery hash exists
    supabase.auth.getSession().then(({ data }) => {
      const hash = location.hash || window.location.hash || "";
      const search = location.search || "";
      
      const isRecovery =
        hash.includes("type=recovery") ||
        hash.includes("access_token=") ||
        search.includes("type=recovery") ||
        Boolean(data.session);

      if (!isRecovery && !data.session) {
        // If arrived with no recovery token or session, offer request mode
        setMode("request");
      } else {
        setMode("update");
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe?.();
    };
  }, [location]);

  // Real-time password validations
  const hasMinLength = password.length >= 6;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  // Handle password update submission
  const handleUpdatePassword = async (e: FormEvent) => {
    e.preventDefault();

    if (!hasMinLength) {
      setError("Das neue Passwort muss mindestens 6 Zeichen lang sein.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Die eingegebenen Passwörter stimmen nicht überein.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error: updateError } = await supabase.auth.updateUser({
        password: password.trim(),
      });

      if (updateError) {
        throw updateError;
      }

      setIsSuccess(true);
      clearUserLoggedOut();

      if (data?.user?.id) {
        dataOrchestrator.setUserId(data.user.id);
        await dataOrchestrator.hydrateFromSupabase();
      }

      toast("Passwort erfolgreich aktualisiert!", "success");

      // Smooth auto-redirect to app after 2.5 seconds
      setTimeout(() => {
        navigate("/app", { replace: true });
      }, 2500);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Fehler beim Aktualisieren des Passworts. Bitte fordere einen neuen Link an.";
      setError(msg);
      toast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  // Handle fallback link request
  const handleRequestResetLink = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Bitte gib eine gültige E-Mail-Adresse an.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const redirectUrl = `${window.location.origin}/#/reset-password`;
      const { error: resetErr } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: redirectUrl,
      });

      if (resetErr) throw resetErr;

      setRequestSent(true);
      toast("Wiederherstellungs-Link gesendet!", "success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Fehler beim Anfordern des Links.";
      setError(msg);
      toast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-subtle selection:text-primary flex flex-col justify-between">
      {/* ---------------- TOP HEADER ---------------- */}
      <header className="border-b border-line/80 bg-paper/95 backdrop-blur-md px-4 py-3.5 sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-primary"
            aria-label="MedAT Prep Startseite"
          >
            <LogoMark className="h-8 w-8 text-primary shadow-xs" />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-ink">
                MedAT<span className="text-primary">.</span>Prep
              </span>
              <span className="hidden sm:inline text-[10.5px] font-semibold text-ink-3">
                KI-Vorbereitung auf den MedAT
              </span>
            </div>
          </Link>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3 py-1 text-[11px] sm:text-[12px] font-semibold text-ink-2 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            🇦🇹 Offizieller MedAT-Dienst
          </span>
        </div>
      </header>

      {/* ---------------- MAIN CARD SECTION ---------------- */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-14">
        <div className="w-full max-w-[460px]">
          {/* Card Container */}
          <div className="rounded-3xl border border-line bg-paper p-6 sm:p-9 shadow-lg shadow-black/5 relative overflow-hidden">
            {/* Top Austrian Red Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-hover to-primary" />

            {/* Success State */}
            {isSuccess ? (
              <div className="text-center py-4 space-y-4 animate-fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm text-3xl">
                  ✓
                </div>
                <h2 className="display text-2xl font-bold text-ink">
                  Passwort erfolgreich geändert!
                </h2>
                <p className="text-[14.5px] leading-relaxed text-ink-2">
                  Dein neues Passwort ist ab sofort aktiv. Du wirst in wenigen Augenblicken direkt zu deinem Dashboard weitergeleitet.
                </p>

                <div className="pt-2">
                  <Link
                    to="/app"
                    replace
                    className="btn btn-primary w-full h-12 text-[15px] font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    Direkt zum Dashboard öffnen →
                  </Link>
                </div>
              </div>
            ) : mode === "update" ? (
              /* Update Password Form */
              <div className="space-y-6">
                <div className="text-center space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11.5px] font-bold text-primary">
                    🔑 Passwort-Wiederherstellung
                  </span>
                  <h1 className="display text-[23px] sm:text-[27px] font-bold text-ink tracking-tight">
                    Neues Passwort festlegen
                  </h1>
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-ink-3">
                    Wähle ein sicheres neues Passwort für deinen MedAT Prep Account.
                  </p>
                </div>

                {error && (
                  <div className="rounded-xl border border-primary/25 bg-primary-muted/60 p-3.5 text-center text-[13px] font-medium text-primary">
                    {error}
                  </div>
                )}

                <form onSubmit={handleUpdatePassword} className="space-y-4">
                  {/* Password 1 */}
                  <div>
                    <label className="block text-[13px] font-bold text-ink mb-1.5">
                      Neues Passwort
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="Mindestens 6 Zeichen"
                        className="input-field w-full h-12 rounded-xl text-[14.5px] pr-12"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-3 hover:text-ink cursor-pointer p-1"
                        aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                      >
                        {showPassword ? "Verbergen" : "Zeigen"}
                      </button>
                    </div>
                  </div>

                  {/* Password 2 */}
                  <div>
                    <label className="block text-[13px] font-bold text-ink mb-1.5">
                      Passwort bestätigen
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        minLength={6}
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="Passwort erneut eingeben"
                        className="input-field w-full h-12 rounded-xl text-[14.5px] pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-3 hover:text-ink cursor-pointer p-1"
                        aria-label={showConfirmPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                      >
                        {showConfirmPassword ? "Verbergen" : "Zeigen"}
                      </button>
                    </div>
                  </div>

                  {/* Real-time Checklist */}
                  <div className="rounded-xl border border-line bg-paper-2/70 p-3.5 space-y-2 text-[12.5px]">
                    <div className="flex items-center gap-2">
                      <span className={hasMinLength ? "text-emerald-600 font-bold" : "text-ink-4"}>
                        {hasMinLength ? "✓" : "○"}
                      </span>
                      <span className={hasMinLength ? "text-ink font-medium" : "text-ink-3"}>
                        Mindestens 6 Zeichen lang
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={passwordsMatch ? "text-emerald-600 font-bold" : "text-ink-4"}>
                        {passwordsMatch ? "✓" : "○"}
                      </span>
                      <span className={passwordsMatch ? "text-ink font-medium" : "text-ink-3"}>
                        Passwörter stimmen überein
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || !hasMinLength || !passwordsMatch}
                    className="btn btn-primary w-full h-12 text-[15px] font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                        Passwort wird gespeichert...
                      </span>
                    ) : (
                      "Neues Passwort speichern & anmelden →"
                    )}
                  </button>
                </form>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setMode("request")}
                    className="text-[13px] font-semibold text-ink-3 hover:text-primary transition-colors cursor-pointer"
                  >
                    Link abgelaufen? Neuen Link anfordern
                  </button>
                </div>
              </div>
            ) : (
              /* Request New Reset Link Form */
              <div className="space-y-6">
                <div className="text-center space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11.5px] font-bold text-primary">
                    ✉️ Passwort vergessen
                  </span>
                  <h1 className="display text-[23px] sm:text-[27px] font-bold text-ink tracking-tight">
                    Link anfordern
                  </h1>
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-ink-3">
                    Gib deine registrierte E-Mail-Adresse ein. Wir senden dir einen sicheren Link zum Zurücksetzen deines Passworts.
                  </p>
                </div>

                {error && (
                  <div className="rounded-xl border border-primary/25 bg-primary-muted/60 p-3.5 text-center text-[13px] font-medium text-primary">
                    {error}
                  </div>
                )}

                {requestSent ? (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-5 text-center text-[13.5px] font-medium text-emerald-800 space-y-2">
                    <div className="text-2xl">✉️</div>
                    <p className="font-bold text-[15px]">E-Mail erfolgreich versendet!</p>
                    <p className="text-xs text-emerald-700 leading-relaxed">
                      Wir haben einen sicheren Link an <strong>{email}</strong> gesendet. Bitte öffne diesen Link, um dein Passwort neu zu vergeben.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRequestResetLink} className="space-y-4">
                    <div>
                      <label className="block text-[13px] font-bold text-ink mb-1.5">
                        E-Mail-Adresse deines Accounts
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="deine.email@beispiel.at"
                        className="input-field w-full h-12 rounded-xl text-[14.5px]"
                        autoFocus
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary w-full h-12 text-[15px] font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                          Link wird generiert...
                        </span>
                      ) : (
                        "Wiederherstellungs-Link anfordern →"
                      )}
                    </button>
                  </form>
                )}

                <div className="pt-2 text-center flex flex-col gap-2 text-[13.5px]">
                  <Link
                    to="/onboarding?mode=login"
                    className="font-bold text-primary hover:underline"
                  >
                    ← Zurück zur Anmeldung
                  </Link>
                  <Link
                    to="/"
                    className="text-ink-4 hover:text-ink text-xs transition-colors"
                  >
                    Zur MedAT Prep Startseite
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ---------------- MINIMAL FOOTER ---------------- */}
      <footer className="border-t border-line/80 bg-paper py-5 px-4 text-center text-[12px] text-ink-3">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2027 MedAT Prep (medatprep.at) · Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 text-ink-3">
            <Link to="/impressum" className="hover:text-ink transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-ink transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-ink transition-colors">Support & Hilfe</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
