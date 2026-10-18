import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import ImpressumPage from "./pages/ImpressumPage";
import MedAT2027TerminePage from "./pages/MedAT2027TerminePage";
import KFFStrategiePage from "./pages/KFFStrategiePage";
import QuotenAnalysePage from "./pages/QuotenAnalysePage";
import BMSMasterplanPage from "./pages/BMSMasterplanPage";
import TVSEKPage from "./pages/TVSEKPage";
import TesttagProtokollPage from "./pages/TesttagProtokollPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { PracticeProvider, usePractice } from "./dashboard/practiceContext";
import { isUserLoggedIn, track } from "./lib/core";
import { LangBanner, LangProvider } from "./lib/i18n";

function Homepage() {
  const { isLoggedIn } = usePractice();
  const loggedIn = isLoggedIn || isUserLoggedIn();

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

export default function App() {
  return (
    <LangProvider>
      <PracticeProvider>
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<BlogPage />} />
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
            <Route path="/login" element={<Navigate to="/onboarding?mode=login" replace />} />
            <Route path="/onboarding" element={<PreLoginOnboarding />} />
            <Route path="/app" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toast />
          <LangBanner />
        </HashRouter>
      </PracticeProvider>
    </LangProvider>
  );
}
