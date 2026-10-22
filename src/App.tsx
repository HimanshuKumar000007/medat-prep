import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Exam, { StatsBand, TopicTicker } from "./components/Exam";
import Quiz from "./components/Quiz";
import Method from "./components/Method";
import Social from "./components/Social";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import { CountdownCTA, Footer, Toast } from "./components/Closing";
import Dashboard from "./dashboard/Dashboard";
import PreLoginOnboarding from "./components/PreLoginOnboarding";
import PremiumSuccessModal from "./components/PremiumSuccessModal";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import ImpressumPage from "./pages/ImpressumPage";
import MedAT2027TerminePage from "./pages/MedAT2027TerminePage";
import MedATVorbereitungGuidePage from "./pages/MedATVorbereitungGuidePage";
import MedATKursVergleichPage from "./pages/MedATKursVergleichPage";
import KFFStrategiePage from "./pages/KFFStrategiePage";
import QuotenAnalysePage from "./pages/QuotenAnalysePage";
import BMSMasterplanPage from "./pages/BMSMasterplanPage";
import TVSEKPage from "./pages/TVSEKPage";
import TesttagProtokollPage from "./pages/TesttagProtokollPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import MedATTelegramPage from "./pages/MedATTelegramPage";
import { PracticeProvider, usePractice } from "./dashboard/practiceContext";
import { isUserLoggedIn, track } from "./lib/core";
import { LangBanner, LangProvider } from "./lib/i18n";
import { supabase } from "./lib/supabase";

function Homepage() {
  const { isLoggedIn } = usePractice();
  const loggedIn = isLoggedIn || isUserLoggedIn();

  const isResetSuccess =
    typeof window !== "undefined" &&
    (window.location.hash.includes("reset=success") ||
      window.location.search.includes("reset=success") ||
      sessionStorage.getItem("medat_reset_success") === "true");

  // If user arrives via password recovery link, route to reset-password with query intact
  const hasToken =
    !isResetSuccess &&
    typeof window !== "undefined" &&
    (window.location.hash.includes("token=") || window.location.search.includes("token="));
  const isRecoveryArrival =
    !isResetSuccess &&
    typeof window !== "undefined" &&
    (hasToken ||
      window.location.hash.includes("type=recovery") ||
      window.location.search.includes("type=recovery") ||
      window.location.hash.includes("access_token=") ||
      window.location.search.includes("access_token="));

  if (isRecoveryArrival) {
    let tokenParam = "";
    const s = window.location.search || "";
    const h = window.location.hash || "";
    if (s.includes("token=")) {
      const tok = new URLSearchParams(s).get("token");
      if (tok) tokenParam = `?token=${encodeURIComponent(tok)}`;
    } else if (h.includes("token=")) {
      const q = h.includes("?") ? h.split("?")[1] : "";
      const tok = new URLSearchParams(q).get("token");
      if (tok) tokenParam = `?token=${encodeURIComponent(tok)}`;
    }
    return <Navigate to={`/reset-password${tokenParam}`} replace />;
  }

  // If arriving from Paddle checkout success redirect (?upgraded=true), send logged-in
  // users to their dashboard, otherwise stay on homepage (they may need to log in).
  const isUpgradeReturn =
    typeof window !== "undefined" &&
    window.location.search.includes("upgraded=true");
  if (isUpgradeReturn && loggedIn) {
    return <Navigate to="/app?upgraded=true" replace />;
  }

  useEffect(() => {
    if (!loggedIn) {
      document.title =
        "MedAT Prep — KI-gestützte Vorbereitung für den MedAT 2027 | MedUni Wien, Innsbruck, Graz, Linz";
    }
  }, [loggedIn]);

  /* Scroll-depth instrumentation: 25 / 50 / 75 / 100 % */
  useEffect(() => {
    if (loggedIn) return;
    const marks = [25, 50, 75, 100];
    const fired = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return;
      const pct = (h.scrollTop / max) * 100;
      for (const m of marks) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track("scroll_depth", { depth: m, page: "homepage" });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [loggedIn]);

  if (loggedIn) {
    return <Navigate to="/app" replace />;
  }

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("main");
          el?.scrollIntoView({ block: "start" });
          el?.focus({ preventScroll: true });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-paper"
      >
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TopicTicker />
        <StatsBand />
        <Exam />
        <Quiz />
        <Method />
        <Social />
        <Pricing />
        <Faq />
        <CountdownCTA />
      </main>
      <Footer />
    </div>
  );
}

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AuthRedirectManager() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 1. Supabase auth recovery event
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        navigate("/reset-password", { replace: true });
      }
    });

    // 2. Direct URL and session checks
    const h = window.location.hash || "";
    const s = window.location.search || "";
    const p = location.pathname || "";

    const isResetSuccess =
      h.includes("reset=success") ||
      s.includes("reset=success") ||
      sessionStorage.getItem("medat_reset_success") === "true";

    const hasToken = !isResetSuccess && (h.includes("token=") || s.includes("token="));
    const isRecovery =
      !isResetSuccess &&
      (hasToken ||
        h.includes("type=recovery") ||
        s.includes("type=recovery") ||
        p.includes("type=recovery") ||
        p.startsWith("/access_token=") ||
        p.startsWith("/error=") ||
        h.includes("error_code=otp_expired") ||
        h.includes("error=access_denied") ||
        sessionStorage.getItem("medat_recovery_pending") === "true");

    if (isRecovery && !p.startsWith("/reset-password") && !p.startsWith("/passwort-zuruecksetzen")) {
      let tokenParam = "";
      if (s.includes("token=")) {
        const token = new URLSearchParams(s).get("token");
        if (token) tokenParam = `?token=${encodeURIComponent(token)}`;
      } else if (h.includes("token=")) {
        const queryPart = h.includes("?") ? h.split("?")[1] : "";
        const token = new URLSearchParams(queryPart).get("token");
        if (token) tokenParam = `?token=${encodeURIComponent(token)}`;
      }
      navigate(`/reset-password${tokenParam}`, { replace: true });
    }

    return () => {
      authListener?.subscription?.unsubscribe?.();
    };
  }, [location, navigate]);

  return null;
}

function CatchAllRoute() {
  const location = useLocation();
  const h = window.location.hash || "";
  const s = window.location.search || "";
  const p = location.pathname || "";

  const isResetSuccess =
    h.includes("reset=success") ||
    s.includes("reset=success") ||
    sessionStorage.getItem("medat_reset_success") === "true";

  const hasToken = !isResetSuccess && (h.includes("token=") || s.includes("token="));
  if (
    !isResetSuccess &&
    (hasToken ||
      h.includes("type=recovery") ||
      s.includes("type=recovery") ||
      p.includes("type=recovery") ||
      p.startsWith("/access_token=") ||
      p.startsWith("/error=") ||
      h.includes("error_code=otp_expired") ||
      h.includes("error=access_denied") ||
      sessionStorage.getItem("medat_recovery_pending") === "true")
  ) {
    let tokenParam = "";
    if (s.includes("token=")) {
      const token = new URLSearchParams(s).get("token");
      if (token) tokenParam = `?token=${encodeURIComponent(token)}`;
    } else if (h.includes("token=")) {
      const queryPart = h.includes("?") ? h.split("?")[1] : "";
      const token = new URLSearchParams(queryPart).get("token");
      if (token) tokenParam = `?token=${encodeURIComponent(token)}`;
    }
    return <Navigate to={`/reset-password${tokenParam}`} replace />;
  }

  return <Navigate to="/" replace />;
}

export default function App() {
  return (
    <LangProvider>
      <PracticeProvider>
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollManager />
          <AuthRedirectManager />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/medat-vorbereitung" element={<MedATVorbereitungGuidePage />} />
            <Route path="/der-medat" element={<MedATVorbereitungGuidePage />} />
            <Route path="/was-ist-der-medat" element={<MedATVorbereitungGuidePage />} />
            <Route path="/medat-aufbau" element={<MedATVorbereitungGuidePage />} />
            <Route path="/medat-struktur" element={<MedATVorbereitungGuidePage />} />
            <Route path="/medat-vorbereitung-guide" element={<MedATVorbereitungGuidePage />} />
            <Route path="/medat-vorbereitung-tipps" element={<MedATVorbereitungGuidePage />} />
            <Route path="/medat-lernen" element={<MedATVorbereitungGuidePage />} />
            <Route path="/vorbereitung" element={<MedATVorbereitungGuidePage />} />
            <Route path="/medat-kurs-vergleich" element={<MedATKursVergleichPage />} />
            <Route path="/medat-vorbereitungskurs-vergleich" element={<MedATKursVergleichPage />} />
            <Route path="/beste-medat-vorbereitung" element={<MedATKursVergleichPage />} />
            <Route path="/warum-medat-prep" element={<MedATKursVergleichPage />} />
            <Route path="/kurs-vergleich" element={<MedATKursVergleichPage />} />
            <Route path="/medat-telegram-gruppe" element={<MedATTelegramPage />} />
            <Route path="/telegram" element={<MedATTelegramPage />} />
            <Route path="/telegram-gruppe" element={<MedATTelegramPage />} />
            <Route path="/medat-telegram" element={<MedATTelegramPage />} />
            <Route path="/medat-community" element={<MedATTelegramPage />} />
            <Route path="/medat-2027-termine-fristen" element={<MedAT2027TerminePage />} />
            <Route path="/medat-2027-termine" element={<MedAT2027TerminePage />} />
            <Route path="/termine-2027" element={<MedAT2027TerminePage />} />
            <Route path="/fristen" element={<MedAT2027TerminePage />} />
            <Route path="/kff-strategie-schnellste-punkte" element={<KFFStrategiePage />} />
            <Route path="/kff-strategie" element={<KFFStrategiePage />} />
            <Route path="/kff-punkte" element={<KFFStrategiePage />} />
            <Route path="/kff-training" element={<KFFStrategiePage />} />
            <Route path="/kff" element={<KFFStrategiePage />} />
            <Route path="/quoten-bewerberzahlen-analyse" element={<QuotenAnalysePage />} />
            <Route path="/quoten" element={<QuotenAnalysePage />} />
            <Route path="/bewerberzahlen" element={<QuotenAnalysePage />} />
            <Route path="/grenzraenge" element={<QuotenAnalysePage />} />
            <Route path="/bms-masterplan-vorbereitung" element={<BMSMasterplanPage />} />
            <Route path="/bms-masterplan" element={<BMSMasterplanPage />} />
            <Route path="/bms" element={<BMSMasterplanPage />} />
            <Route path="/bms-lernplan" element={<BMSMasterplanPage />} />
            <Route path="/tv-sek-emotionen-textverstaendnis" element={<TVSEKPage />} />
            <Route path="/tv-sek" element={<TVSEKPage />} />
            <Route path="/textverstaendnis" element={<TVSEKPage />} />
            <Route path="/sek" element={<TVSEKPage />} />
            <Route path="/testtag-protokoll-mentale-staerke" element={<TesttagProtokollPage />} />
            <Route path="/testtag-protokoll" element={<TesttagProtokollPage />} />
            <Route path="/testtag" element={<TesttagProtokollPage />} />
            <Route path="/packliste" element={<TesttagProtokollPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ueber-uns" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/datenschutz" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/agb" element={<TermsPage />} />
            <Route path="/widerruf" element={<TermsPage />} />
            <Route path="/cancellation" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/haftungsausschluss" element={<DisclaimerPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/imprint" element={<ImpressumPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/passwort-zuruecksetzen" element={<ResetPasswordPage />} />
            <Route path="/passwort-aendern" element={<ResetPasswordPage />} />
            <Route path="/update-password" element={<ResetPasswordPage />} />
            <Route path="/access_token=*" element={<Navigate to="/reset-password" replace />} />
            <Route path="/error=*" element={<Navigate to="/reset-password" replace />} />
            <Route path="/login" element={<Navigate to="/onboarding?mode=login" replace />} />
            <Route path="/register" element={<Navigate to="/onboarding?mode=signup" replace />} />
            <Route path="/signup" element={<Navigate to="/onboarding?mode=signup" replace />} />
            <Route path="/onboarding" element={<PreLoginOnboarding />} />
            <Route path="/dashboard" element={<Navigate to="/app" replace />} />
            <Route path="/app" element={<Dashboard />} />
            <Route path="*" element={<CatchAllRoute />} />
          </Routes>
          <PremiumSuccessModal />
          <Toast />
          <LangBanner />
        </HashRouter>
      </PracticeProvider>
    </LangProvider>
  );
}
