import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isUserLoggedIn, toast } from "../lib/core";
import { DashboardShell, type PracticeSeed, type Screen } from "./Shell";
import Home from "./Home";
import Plan from "./Plan";
import Practice from "./Practice";
import Mocks from "./Mocks";
import Stats from "./Stats";
import Community from "./Community";
import Settings from "./Settings";
import Help from "./Help";
import AiTutor from "./AiTutor";
import PricingView from "./PricingView";
import OnboardingModal from "./OnboardingModal";
import { PracticeProvider, usePractice } from "./practiceContext";

import { dataOrchestrator, syncStateMachine } from "../orchestrator";
import { checkUserEntitlement } from "../lib/dbSync";
import { SyncDiagnosticWidget } from "./SyncDiagnosticWidget";
import { triggerPremiumSuccessModal } from "../components/PremiumSuccessModal";

const TITLES: Record<Screen, string> = {
  home: "Dashboard",
  plan: "Lernplan",
  practice: "Übungsfragen",
  ai: "MedAT KI-Tutor",
  mocks: "Generalproben",
  stats: "Statistiken",
  community: "Community",
  pricing: "Preise & Upgrade",
  settings: "Einstellungen",
  help: "Hilfe & FAQ",
};

function DashboardInner() {
  const [screen, setScreen] = useState<Screen>("home");
  const [collapsed, setCollapsed] = useState(false);
  const [offline, setOffline] = useState(false);
  const [practiceSeed, setPracticeSeed] = useState<PracticeSeed | undefined>(undefined);
  const [isHydrated, setIsHydrated] = useState(() => dataOrchestrator.isHydrated());
  const [isActivatingPremium, setIsActivatingPremium] = useState(false);
  const [activationError, setActivationError] = useState<string | null>(null);

  const { userProfile, finishOnboarding, isLoggedIn, updateUserProfile } = usePractice();
  const authenticated = isLoggedIn || isUserLoggedIn();

  const checkAndUnlockEntitlement = useCallback(async () => {
    try {
      const res = await checkUserEntitlement(userProfile.userId);
      if (res.isPro) {
        await dataOrchestrator.hydrateFromSupabase();
        updateUserProfile({ isPro: true, subscriptionTier: "premium" });
        return true;
      }
    } catch (e) {
      console.warn("[Dashboard] checkAndUnlockEntitlement error:", e);
    }
    return false;
  }, [userProfile.userId, updateUserProfile]);

  // Handle successful Paddle checkout return (#/dashboard?upgraded=true or ?upgraded=true)
  useEffect(() => {
    const searchOrHash = window.location.search + window.location.hash;
    if (searchOrHash.includes("upgraded=true")) {
      // Clean URL immediately to prevent repeated trigger
      try {
        const cleanUrl = window.location.href
          .replace(/([?&])upgraded=true(&|$)/, "$1")
          .replace(/([?&])user_id=[^&#]+(&|$)/, "$1")
          .replace(/[?&]$/, "");
        window.history.replaceState(null, "", cleanUrl);
      } catch {}

      // If user is already pro according to verified profile, show success
      if (userProfile.isPro) {
        triggerPremiumSuccessModal();
        toast("🎉 Willkommen beim MedAT-Vollzugang! Alle 35 BMS-Kapitel wurden freigeschaltet.", "success");
        return;
      }

      // Start bounded entitlement polling
      setIsActivatingPremium(true);
      setActivationError(null);
      toast("Zahlung empfangen — Premium-Zugang wird aktiviert...", "info");

      let attempts = 0;
      const maxAttempts = 20; // 20 * 1.5s = 30s
      const interval = setInterval(async () => {
        attempts++;
        const unlocked = await checkAndUnlockEntitlement();
        if (unlocked) {
          clearInterval(interval);
          setIsActivatingPremium(false);
          setActivationError(null);
          triggerPremiumSuccessModal();
          toast("🎉 Willkommen beim MedAT-Vollzugang! Alle 35 BMS-Kapitel wurden freigeschaltet.", "success");
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          setIsActivatingPremium(false);
          setActivationError(
            "Deine Zahlung ist sicher bei Paddle eingegangen, aber die Bestätigung dauert noch einen Moment. Klicke auf 'Status prüfen', um erneut zu synchronisieren."
          );
        }
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [checkAndUnlockEntitlement, userProfile.isPro]);

  useEffect(() => {
    return dataOrchestrator.subscribe((state) => {
      setIsHydrated(state.isHydrated);
    });
  }, []);

  // Prevent browser back button from navigating to homescreen once user is logged in
  useEffect(() => {
    if (isLoggedIn || isUserLoggedIn()) {
      window.history.pushState(null, "", window.location.href);

      const handlePopState = () => {
        window.history.pushState(null, "", window.location.href);
      };

      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isLoggedIn]);

  useEffect(() => {
    document.title = `${TITLES[screen]} — MedAT Prep (${userProfile.examType})`;
  }, [screen, userProfile.examType]);

  const nav = useCallback((s: Screen, seed?: PracticeSeed) => {
    if (seed) setPracticeSeed({ ...seed });
    setScreen(s);
  }, []);

  // Check if current user has valid local cached profile
  const hasLocalCache = Boolean(
    typeof window !== "undefined" &&
    (() => {
      const uid = localStorage.getItem("medat_current_user_id");
      return uid && localStorage.getItem(`medat_prep_v2_u_${uid}_profile`);
    })()
  );

  // If user is not authenticated, redirect to login
  if (!authenticated) {
    return <Navigate to="/onboarding?mode=login" replace />;
  }

  // Hydration guard: If authenticated on a fresh browser (e.g. Incognito) with NO local cache,
  // hold rendering until cloud state is hydrated (~150ms) to prevent race-condition default writes.
  if (authenticated && !isHydrated && !hasLocalCache) {
    const isSyncError = syncStateMachine.getState().status === "PENDING_SYNC" && syncStateMachine.getState().lastError;
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080E1E] text-white">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          {isSyncError ? (
            <>
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-rose-500/20 text-rose-400 font-bold text-lg">!</div>
              <h2 className="text-[17px] font-bold text-slate-100">Verbindung zur Cloud wird aufgebaut...</h2>
              <p className="text-[13px] text-slate-400 max-w-sm">
                Der Lernstand konnte nicht geladen werden. Bitte überprüfe deine Internetverbindung.
              </p>
              <button 
                onClick={() => dataOrchestrator.hydrateFromSupabase()}
                className="mt-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-sm font-medium transition cursor-pointer"
              >
                Erneut versuchen
              </button>
            </>
          ) : (
            <>
              <div className="h-10 w-10 animate-spin rounded-full border-3 border-rose-500 border-t-transparent" />
              <h2 className="text-[17px] font-bold text-slate-100">Lade deinen MedAT-Lernstand...</h2>
              <p className="text-[13px] text-slate-400 max-w-sm">
                Deine Tagesmission, Prüfungsergebnisse und Einstellungen werden mit der Cloud synchronisiert.
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {!userProfile.onboarded && (
        <OnboardingModal
          initialData={userProfile}
          onComplete={(data) => finishOnboarding(data)}
        />
      )}

      {isActivatingPremium && (
        <div className="bg-primary/10 border-b border-primary/20 px-4 py-2.5 text-center text-xs sm:text-sm font-medium text-primary flex items-center justify-center gap-2 animate-pulse">
          <span className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span>Zahlung empfangen — Premium-Zugang wird aktiviert... Bitte einen kurzen Moment warten.</span>
        </div>
      )}
      {activationError && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3 text-center text-xs sm:text-sm font-medium text-amber-900 flex flex-wrap items-center justify-center gap-3">
          <span>{activationError}</span>
          <button
            onClick={async () => {
              toast("Prüfe aktuellen Zahlungsstatus...", "info");
              const ok = await checkAndUnlockEntitlement();
              if (ok) {
                setActivationError(null);
                toast("🎉 Vollzugang erfolgreich bestätigt!", "success");
              } else {
                toast("Noch nicht bestätigt. Bitte in Kürze erneut versuchen.", "info");
              }
            }}
            className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-semibold shadow-sm transition cursor-pointer"
          >
            Status prüfen
          </button>
        </div>
      )}

      <DashboardShell
        screen={screen}
        onNav={nav}
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed((v) => !v)}
        offline={offline}
        onToggleOffline={() => setOffline((v) => !v)}
      >
        {screen === "home" && <Home onNav={nav} />}
        {screen === "plan" && <Plan onNav={nav} seed={practiceSeed} />}
        {screen === "practice" && (
          <Practice seed={practiceSeed} offline={offline} onNav={nav} />
        )}
        {screen === "ai" && <AiTutor onNav={nav} />}
        {screen === "mocks" && <Mocks onNav={nav} seed={practiceSeed} />}
        {screen === "stats" && <Stats onNav={nav} />}
        {screen === "community" && <Community />}
        {screen === "pricing" && <PricingView onNav={nav} />}
        {screen === "settings" && <Settings />}
        {screen === "help" && <Help onNav={nav} />}
      </DashboardShell>
      <SyncDiagnosticWidget />
    </>
  );
}

export default function Dashboard() {
  return <DashboardInner />;
}
