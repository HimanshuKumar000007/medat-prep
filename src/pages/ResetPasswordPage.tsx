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

  // Helper to extract custom reset token (IISER architecture)
  const getCustomResetToken = (): string | null => {
    // 1. From React Router location.search (?token=...)
    const locSearch = new URLSearchParams(location.search);
    if (locSearch.get("token")) return locSearch.get("token")!.trim();

    // 2. From window.location.search
    const winSearch = new URLSearchParams(window.location.search);
    if (winSearch.get("token")) return winSearch.get("token")!.trim();

    // 3. From window.location.hash (#/reset-password?token=...)
    const hash = window.location.hash || "";
    if (hash.includes("?")) {
      const hashQuery = hash.split("?")[1];
      const hashParams = new URLSearchParams(hashQuery);
      if (hashParams.get("token")) return hashParams.get("token")!.trim();
    }

    // 4. From sessionStorage
    const stored = sessionStorage.getItem("medat_reset_token");
    if (stored) return stored.trim();

    return null;
  };

  const initialToken = getCustomResetToken();

  // Mode: "update" (when recovery token is active) vs "request" (fallback to ask for a reset email)
  const [resetToken, setResetToken] = useState<string | null>(initialToken);
  const [mode, setMode] = useState<"update" | "request">(() => (initialToken ? "update" : "request"));
  
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

  // Helper to extract tokens from search, hash, or sessionStorage (Supabase fallback)
  const getRecoveryTokens = () => {
    const s = window.location.search || "";
    const h = window.location.hash || "";

    const sParams = new URLSearchParams(s.startsWith("?") ? s.substring(1) : s);
    let hQuery = "";
    if (h.includes("?")) {
      hQuery = h.split("?")[1];
    } else if (h.startsWith("#")) {
      hQuery = h.substring(1);
    }
    const hParams = new URLSearchParams(hQuery);

    const accessToken =
      sParams.get("access_token") ||
      hParams.get("access_token") ||
      sessionStorage.getItem("medat_recovery_access_token") ||
      "";

    const refreshToken =
      sParams.get("refresh_token") ||
      hParams.get("refresh_token") ||
      sessionStorage.getItem("medat_recovery_refresh_token") ||
      "";

    return { accessToken, refreshToken };
  };

  useEffect(() => {
    document.title = "Passwort festlegen — MedAT Prep | Sichere Kontowiederherstellung";
    window.scrollTo(0, 0);

    // 1. Check for IISER-style custom token FIRST
    const token = getCustomResetToken();
    if (token) {
      setResetToken(token);
      sessionStorage.setItem("medat_reset_token", token);
      setMode("update");
      setError(null);
      return;
    }

    // 2. Listen for Supabase PASSWORD_RECOVERY event
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY" || (event === "SIGNED_IN" && session)) {
        setMode("update");
        setError(null);
      }
    });

    // 3. Check if expired or error
    const fullUrl = window.location.href;
    if (
      fullUrl.includes("error_code=otp_expired") ||
      fullUrl.includes("otp_expired") ||
      sessionStorage.getItem("medat_recovery_error") === "otp_expired"
    ) {
      setError("Dieser Wiederherstellungs-Link ist leider abgelaufen oder wurde bereits verwendet. Bitte fordere unten einen frischen Link an.");
      setMode("request");
      return;
    }

    // 4. Initialize session from Supabase or tokens
    const initSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data?.session) {
          setMode("update");
          setError(null);
          return;
        }

        // Try setting session explicitly if tokens exist
        const { accessToken, refreshToken } = getRecoveryTokens();
        if (accessToken) {
          const { data: setRes, error: setErr } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || accessToken,
          });

          if (setRes?.session && !setErr) {
            setMode("update");
            setError(null);
            return;
          }
        }

        // If arrived with neither custom token, session, nor tokens, offer request mode
        setMode("request");
      } catch (err) {
        console.warn("Recovery init check:", err);
        setMode("request");
      }
    };

    initSession();

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
      const activeToken = resetToken || getCustomResetToken();

      // 1. IISER Architecture: Call serverless endpoint /api/reset-password if token present
      if (activeToken) {
        const response = await fetch("/api/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: activeToken, password: password.trim() }),
        });

        const resData = await response.json();
        if (!response.ok || !resData.success) {
          throw new Error(resData.error || "Fehler beim Zurücksetzen des Passworts.");
        }

        sessionStorage.removeItem("medat_reset_token");

        // Auto sign-in if email returned
        if (resData.email) {
          try {
            const { data: loginData } = await supabase.auth.signInWithPassword({
              email: resData.email,
              password: password.trim(),
            });
            if (loginData?.user?.id) {
              dataOrchestrator.setUserId(loginData.user.id);
              await dataOrchestrator.hydrateFromSupabase();
            }
          } catch (signInErr) {
            console.warn("Auto sign-in note:", signInErr);
          }
        }

        setIsSuccess(true);
        clearUserLoggedOut();
        toast("Passwort erfolgreich aktualisiert! Bitte melde dich an.", "success");

        setTimeout(() => {
          navigate("/onboarding?mode=login", { replace: true });
        }, 2200);
        return;
      }

      // 2. Fallback: Supabase Session updateUser
      const { accessToken, refreshToken } = getRecoveryTokens();
      let updateSuccessful = false;
      let userId: string | null = null;

      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session) {
        try {
          const { data, error: updateError } = await supabase.auth.updateUser({
            password: password.trim(),
          });
          if (!updateError && data?.user) {
            updateSuccessful = true;
            userId = data.user.id;
          }
        } catch (e) {
          console.warn("SDK updateUser error, trying fallback", e);
        }
      }

      // Direct REST fallback using the recovery access_token
      if (!updateSuccessful && accessToken) {
        const response = await fetch("https://vwvacbxbynwiwnnfyjht.supabase.co/auth/v1/user", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmFjYnhieW53aXdubmZ5amh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4MDQzNzMsImV4cCI6MjEwMzM4MDM3M30.bsfxsiS4EKF_HCpVYYliFo4KrJ4krIY6u3GwujEE7nY",
            "Authorization": `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ password: password.trim() }),
        });

        const resData = await response.json();
        if (response.ok && resData?.id) {
          updateSuccessful = true;
          userId = resData.id;
          if (refreshToken) {
            try {
              await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
            } catch (_) {}
          }
        } else {
          const errText = resData?.msg || resData?.message || resData?.error_description;
          if (errText) throw new Error(errText);
        }
      }

      if (!updateSuccessful) {
        throw new Error("Auth session missing!");
      }

      setIsSuccess(true);
      sessionStorage.removeItem("medat_recovery_pending");
      sessionStorage.removeItem("medat_recovery_access_token");
      sessionStorage.removeItem("medat_recovery_refresh_token");
      sessionStorage.removeItem("medat_recovery_error");
      clearUserLoggedOut();

      if (userId) {
        dataOrchestrator.setUserId(userId);
        await dataOrchestrator.hydrateFromSupabase();
      }

      toast("Passwort erfolgreich aktualisiert! Bitte melde dich an.", "success");

      // Smooth auto-redirect to login after 2.2 seconds
      setTimeout(() => {
        navigate("/onboarding?mode=login", { replace: true });
      }, 2200);
    } catch (err: unknown) {
      const rawMsg = err instanceof Error ? err.message : String(err);
      let userFriendly = "Fehler beim Aktualisieren des Passworts. Bitte fordere einen neuen Link an.";
      
      if (rawMsg.includes("Auth session missing") || rawMsg.includes("session missing")) {
        userFriendly = "Deine Wiederherstellungs-Sitzung ist abgelaufen oder ungültig. Bitte fordere unten einen neuen Link an.";
        setMode("request");
      } else if (rawMsg.includes("same_password")) {
        userFriendly = "Das neue Passwort darf nicht mit deinem alten Passwort identisch sein.";
      } else if (rawMsg) {
        userFriendly = rawMsg;
      }

      setError(userFriendly);
      toast(userFriendly, "error");
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
      // 1. IISER Architecture: Send email via /api/forgot-password with Resend
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Senden des Links.");
      }

      setRequestSent(true);
      toast("Wiederherstellungs-Link gesendet! Bitte prüfe deinen Posteingang.", "success");
    } catch (err: unknown) {
      console.warn("Forgot password endpoint error, trying Supabase fallback:", err);
      try {
        const redirectUrl = `${window.location.origin}/#/reset-password`;
        const { error: resetErr } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: redirectUrl,
        });

        if (resetErr) throw resetErr;

        setRequestSent(true);
        toast("Wiederherstellungs-Link gesendet!", "success");
      } catch (fbErr: any) {
        const msg = fbErr?.message || (err instanceof Error ? err.message : "Fehler beim Anfordern des Links.");
        setError(msg);
        toast(msg, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-subtle selection:text-primary flex flex-col justify-between">
      {/* ---------------- TOP HEADER ---------------- */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-3 sm:gap-6 lg:h-[72px]">
          {/* Logo matching Homescreen Navbar */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 transition-transform duration-200 hover:scale-[1.02] shrink-0"
            aria-label="MedAT Prep — zur Startseite"
          >
            <LogoMark className="h-8 w-8 sm:h-9 sm:w-9 shrink-0" />
            <span className="display text-[15px] sm:text-[17px] leading-none text-ink">
              MedAT <span className="font-sans font-medium normal-case tracking-normal text-ink-3">Prep</span>
            </span>
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/onboarding?mode=signup"
              className="link-tertiary text-xs sm:text-sm font-semibold text-ink-2 hover:text-ink transition-colors px-2 py-1.5"
            >
              Register
            </Link>
            <Link
              to="/"
              className="btn btn-secondary btn-sm px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl border border-line shadow-2xs hover:bg-paper-2 transition-all"
            >
              Homepage
            </Link>
          </div>
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
                  Dein neues Passwort ist ab sofort aktiv. Du wirst in wenigen Augenblicken direkt zur Anmeldung weitergeleitet.
                </p>

                <div className="pt-2">
                  <Link
                    to="/onboarding?mode=login"
                    replace
                    className="btn btn-primary w-full h-12 text-[15px] font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    Direkt zur Anmeldung →
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
