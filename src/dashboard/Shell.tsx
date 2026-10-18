import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { LogoMark } from "../lib/icons";
import { toast } from "../lib/core";
import { IconBrain, IconChart, IconFlame, IconClose } from "../lib/icons";
import {
  DIconBell,
  DIconCard,
  DIconChat,
  DIconClipboard,
  DIconGear,
  DIconHelp,
  DIconHome,
  DIconLogout,
  DIconPanel,
  DIconSearch,
  DIconUser,
  DIconZap,
  DIconSparkles,
} from "./icons";
import { UNIVERSITIES, type ExamType, type SectionCode } from "../content/medat/config";
import { usePractice } from "./practiceContext";
import { tt, useT } from "../lib/i18n";

export type Screen =
  | "home"
  | "plan"
  | "practice"
  | "ai"
  | "mocks"
  | "stats"
  | "community"
  | "pricing"
  | "settings"
  | "help";

export interface PracticeSeed {
  section?: SectionCode;
  subjectId?: string;
  chapterId?: string;
  topic?: string;
  mode?: "overview" | "subject" | "chapter" | "set" | "mistakes" | "mastery";
  statusFilter?: "neu" | "falsch" | "lesezeichen" | "alle";
  mockAction?: "start-generalprobe" | "view-generalprobe-results";
  mockId?: string;
  openOnboarding?: boolean;
}

/* ---------------- Nav config ---------------- */
const NAV_MAIN: { id: Screen; label: string; icon: ReactNode; badge?: string }[] = [
  { id: "home", label: "Dashboard", icon: <DIconHome /> },
  { id: "plan", label: "Lernplan", icon: <DIconClipboard /> },
  { id: "practice", label: "Übungsfragen", icon: <IconBrain /> },
  { id: "ai", label: "KI-Tutor", icon: <DIconSparkles className="h-5 w-5 text-emerald-600" />, badge: "PLUS" },
  { id: "mocks", label: "Generalproben", icon: <DIconClipboard /> },
  { id: "stats", label: "Statistiken", icon: <IconChart /> },
  { id: "community", label: "Community", icon: <DIconChat /> },
];

const NAV_SECONDARY: { id: Screen; label: string; icon: ReactNode; badge?: string }[] = [
  { id: "pricing", label: "Tarife & Vollzugang", icon: <DIconCard className="h-5 w-5" />, badge: "NEU" },
  { id: "settings", label: "Einstellungen", icon: <DIconGear /> },
  { id: "help", label: "Hilfe & FAQ", icon: <DIconHelp /> },
];

function NavItem({
  item,
  active,
  collapsed,
  isMobile,
  onClick,
}: {
  item: { id: Screen; label: string; icon: ReactNode; badge?: string };
  active: boolean;
  collapsed: boolean;
  isMobile?: boolean;
  onClick: () => void;
}) {
  const t = useT();
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative flex w-full items-center rounded-xl transition-all duration-150 select-none cursor-pointer ${
        collapsed
          ? "justify-center px-0 py-2.5 text-[14px]"
          : isMobile
          ? "gap-3.5 px-3.5 py-3 text-[14.5px] min-h-[46px] active:scale-[0.98]"
          : "gap-3 px-3 py-2.5 text-[14px] active:scale-[0.99]"
      } ${
        active
          ? "bg-red-50/80 text-primary font-bold shadow-2xs ring-1 ring-red-100/80"
          : "text-ink-2 hover:bg-paper-3 hover:text-ink active:bg-paper-3"
      }`}
    >
      {active && (
        <span
          className="absolute left-0 top-1/2 h-5 w-[3.5px] -translate-y-1/2 rounded-r-full bg-primary"
          aria-hidden="true"
        />
      )}
      <span className={`shrink-0 transition-colors ${active ? "text-primary" : "text-ink-3 group-hover:text-ink"}`}>
        {item.icon}
      </span>
      {!collapsed && <span className="flex-1 text-left">{t(item.label)}</span>}
      {!collapsed && item.badge && (
        <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-600/20">
          {item.badge}
        </span>
      )}
      {collapsed && (
        <span
          className="pointer-events-none absolute left-full z-50 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-night px-2.5 py-1.5 text-[12px] font-medium text-paper opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 lg:block"
          style={{ top: "50%" }}
        >
          {t(item.label)}
        </span>
      )}
    </button>
  );
}

function SidebarContent({
  screen,
  onNav,
  collapsed,
  isMobile = false,
  onClose,
}: {
  screen: Screen;
  onNav: (s: Screen) => void;
  collapsed: boolean;
  isMobile?: boolean;
  onClose?: () => void;
}) {
  const { userProfile, setExamType, currentStreak, answers } = usePractice();
  const answeredCount = Object.keys(answers).length;

  return (
    <div
      className={`flex flex-col min-h-full ${
        isMobile ? "p-3.5 pb-8 space-y-4" : "h-full p-3 justify-between"
      }`}
    >
      {/* Mobile Top Header: Student Profile & Track Selector */}
      {isMobile && (
        <div className="rounded-2xl border border-line bg-paper-2 p-3 space-y-2.5 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-[12.5px] font-black text-paper shadow-2xs">
                {userProfile.name ? userProfile.name.slice(0, 2).toUpperCase() : "ST"}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13.5px] font-bold text-ink leading-tight">
                  {userProfile.name || "Student:in"}
                </p>
                <p className="truncate text-[11px] text-ink-3 mt-0.5">
                  {userProfile.examType === "MEDAT-H" ? "Humanmedizin" : "Zahnmedizin"}
                </p>
              </div>
            </div>

            {/* Quick Track Switcher */}
            <div className="flex rounded-xl bg-paper border border-line p-0.5 shadow-2xs shrink-0">
              <button
                type="button"
                onClick={() => setExamType("MEDAT-H")}
                className={`rounded-lg px-2 py-1 text-[11px] font-black uppercase transition-all cursor-pointer ${
                  userProfile.examType === "MEDAT-H"
                    ? "bg-primary text-white shadow-2xs"
                    : "text-ink-4 hover:text-ink"
                }`}
                title="Humanmedizin"
              >
                H
              </button>
              <button
                type="button"
                onClick={() => toast("MedAT-Z ist demnächst verfügbar. Aktuell steht MedAT-H bereit.", "info")}
                className="rounded-lg px-2 py-1 text-[11px] font-black uppercase text-ink-4/60 hover:text-ink-4 opacity-60 cursor-not-allowed transition-all"
                title="MedAT-Z — Demnächst verfügbar"
              >
                Z
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation List */}
      <nav aria-label="Hauptnavigation" className="space-y-1">
        {!collapsed && (
          <p className="px-3 pb-1.5 pt-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-4">
            Navigation
          </p>
        )}
        {NAV_MAIN.map((i) => (
          <NavItem
            key={i.id}
            item={i}
            active={screen === i.id}
            collapsed={collapsed}
            isMobile={isMobile}
            onClick={() => onNav(i.id)}
          />
        ))}

        <div className="my-2.5 border-t border-line" />

        {!collapsed && (
          <p className="px-3 pb-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-4">
            Allgemein
          </p>
        )}
        {NAV_SECONDARY.map((i) => (
          <NavItem
            key={i.id}
            item={i}
            active={screen === i.id}
            collapsed={collapsed}
            isMobile={isMobile}
            onClick={() => onNav(i.id)}
          />
        ))}
      </nav>

      {/* Flex spacer to position streak widget */}
      <div className="flex-1 min-h-3" />

      {/* Premium Upgrade Widget in Sidebar */}
      {!userProfile.isPro && (
        !collapsed ? (
          <div className="mb-2.5 rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/60 via-paper to-paper p-3 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary-subtle text-primary text-xs font-bold">
                ★
              </span>
              <span className="text-[12.5px] font-bold text-ink">MedAT-Vollzugang</span>
              <span className="ml-auto rounded-md bg-primary-subtle px-1.5 py-0.5 text-[10px] font-black text-primary ring-1 ring-primary/20">
                −38 %
              </span>
            </div>
            <p className="mt-1.5 text-[11px] leading-tight text-ink-3">
              Alle 5.000+ Fragen, KFF-Trainer & Simulationen freischalten.
            </p>
            <button
              onClick={() => onNav("pricing")}
              className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-night py-1.5 text-[12px] font-bold text-paper shadow-2xs transition-all duration-200 hover:bg-night/90 active:scale-[0.98] cursor-pointer"
            >
              Vollzugang freischalten →
            </button>
          </div>
        ) : (
          <button
            onClick={() => onNav("pricing")}
            title="MedAT-Vollzugang freischalten"
            className="mb-2.5 flex h-9 w-9 mx-auto items-center justify-center rounded-xl bg-primary-subtle text-primary hover:bg-red-100 transition-colors cursor-pointer"
          >
            ★
          </button>
        )
      )}

      {/* Streak & Activity widget */}
      <div
        className={`rounded-2xl border border-line bg-paper-3 p-3.5 shadow-2xs ${
          collapsed ? "text-center" : ""
        }`}
      >
        <div className={`flex items-center gap-2.5 ${collapsed ? "justify-center" : ""}`}>
          <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary shadow-2xs">
            <IconFlame className="h-5 w-5" />
          </span>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="num text-[13.5px] font-extrabold leading-tight text-ink">
                {currentStreak > 0 ? `${currentStreak} Tage Streak` : "0 Tage Streak"}
              </p>
              <p className="text-[11px] text-ink-4 mt-0.5">
                {answeredCount > 0 ? `${answeredCount} Fragen geübt` : "Noch keine Übung"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Search ---------------- */
const SEARCH_SCREENS: { label: string; screen: Screen }[] = [
  { label: "Dashboard öffnen", screen: "home" },
  { label: "Lernplan ansehen", screen: "plan" },
  { label: "Übungsfragen starten", screen: "practice" },
  { label: "MedAT KI-Tutor öffnen", screen: "ai" },
  { label: "Generalproben ansehen", screen: "mocks" },
  { label: "Statistiken öffnen", screen: "stats" },
  { label: "Preise & Tarife ansehen", screen: "pricing" },
];

function GlobalSearch({ onNav }: { onNav: (s: Screen, seed?: PracticeSeed) => void }) {
  const t = useT();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const ql = q.trim().toLowerCase();
  const screens = SEARCH_SCREENS.filter((s) => !ql || s.label.toLowerCase().includes(ql)).slice(
    0,
    4
  );

  const go = (s: Screen, seed?: PracticeSeed) => {
    onNav(s, seed);
    setQ("");
    setOpen(false);
  };

  return (
    <div ref={boxRef} className="relative hidden w-full max-w-[360px] md:block">
      <DIconSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-4" />
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder={t("Fragen, Kapitel oder Mocks suchen...")}
        aria-label="Globale Suche"
        className="h-10 w-full rounded-xl border border-line bg-paper-3 pl-10 pr-4 text-[13.5px] text-ink transition-all duration-200 placeholder:text-ink-4 focus:border-primary focus:bg-paper focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)] focus:outline-none"
      />
      {open && (
        <div className="animate-pop-in absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-2xl border border-line bg-paper shadow-xl">
          <div className="border-b border-line px-4 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-4">
              Direktnavigation
            </p>
          </div>
          <div className="px-2 py-2">
            {screens.map((s) => (
              <button
                key={s.label}
                onClick={() => go(s.screen)}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] font-medium text-ink-2 transition-colors hover:bg-paper-3 hover:text-primary"
              >
                <DIconSearch className="h-3.5 w-3.5 text-ink-4" />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Shell ---------------- */
export function DashboardShell({
  screen,
  onNav,
  collapsed,
  onToggleCollapsed,
  offline,
  onToggleOffline,
  children,
}: {
  screen: Screen;
  onNav: (s: Screen, seed?: PracticeSeed) => void;
  collapsed: boolean;
  onToggleCollapsed: () => void;
  offline: boolean;
  onToggleOffline: () => void;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<"user" | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchCurrentXRef = useRef<number | null>(null);

  const { userProfile, setExamType, logout, isResultPage, setIsResultPage } = usePractice();

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchCurrentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      touchCurrentXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchCurrentXRef.current !== null) {
      const deltaX = touchCurrentXRef.current - touchStartXRef.current;
      // If dragged/swiped left by > 45px, smoothly close
      if (deltaX < -45) {
        setMobileOpen(false);
      }
    }
    touchStartXRef.current = null;
    touchCurrentXRef.current = null;
  };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const nav = (s: Screen, seed?: PracticeSeed) => {
    setIsResultPage(false);
    onNav(s, seed);
    setMobileOpen(false);
  };

  return (
    <div className="flex h-dvh overflow-hidden bg-paper-2 font-sans text-ink">
      {/* Desktop sidebar */}
      <aside
        className={`hidden shrink-0 border-r border-line bg-paper transition-all duration-300 lg:block ${
          collapsed ? "w-[72px]" : "w-60"
        }`}
        aria-label="Seitenleiste"
      >
        <SidebarContent screen={screen} onNav={nav} collapsed={collapsed} />
      </aside>

      {/* Mobile drawer with smooth enter/exit transitions and swipe gestures */}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
              mobileOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            {/* Backdrop with smooth opacity transition */}
            <div
              className={`absolute inset-0 bg-night/50 backdrop-blur-xs transition-opacity duration-300 ease-out ${
                mobileOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setMobileOpen(false)}
              aria-label="Menü schließen"
            />

            {/* Drawer panel with smooth sliding transform and swipe gesture */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`absolute left-0 top-0 flex h-dvh w-[285px] max-w-[85vw] flex-col bg-paper shadow-2xl transition-transform duration-300 cubic-bezier(0.16,1,0.3,1) border-r border-line will-change-transform ${
                mobileOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Mobile Drawer Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-line px-4 py-3.5 bg-paper">
                <span className="flex items-center gap-2.5">
                  <LogoMark className="h-7 w-7 shrink-0" />
                  <span className="display text-[16px] leading-none text-ink">
                    MedAT{" "}
                    <span className="font-sans font-medium normal-case tracking-normal text-ink-3">
                      Prep
                    </span>
                  </span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-xl text-ink-2 transition-colors hover:bg-paper-3 hover:text-ink active:scale-95 cursor-pointer"
                  aria-label="Menü schließen"
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain pb-[max(1rem,env(safe-area-inset-bottom))]">
                <SidebarContent
                  screen={screen}
                  onNav={nav}
                  collapsed={false}
                  isMobile={true}
                  onClose={() => setMobileOpen(false)}
                />
              </div>
            </div>
          </div>,
          document.body
        )}

      <div className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
        {/* Top bar (hidden in any result page) */}
        {!isResultPage && (
          <header className="z-40 flex h-16 shrink-0 items-center justify-between gap-2 sm:gap-3 border-b border-line bg-paper px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-ink-2 transition-colors hover:bg-paper-3 hover:text-ink active:scale-95 lg:hidden cursor-pointer"
              aria-label="Navigation öffnen"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 6.5h16M4 12h16M4 17.5h16" />
              </svg>
            </button>
            <button
              onClick={onToggleCollapsed}
              className="hidden rounded-lg p-2 text-ink-2 transition-colors hover:bg-paper-3 hover:text-ink lg:block"
              aria-label={collapsed ? "Seitenleiste erweitern" : "Seitenleiste einklappen"}
            >
              <DIconPanel className="h-5 w-5" />
            </button>

            <button onClick={() => nav("home")} className="flex items-center gap-2" aria-label="Zum Dashboard">
              <LogoMark className="h-7 w-7" />
              <span className="display hidden text-[16px] leading-none text-ink sm:block">
                MedAT{" "}
                <span className="font-sans font-medium normal-case tracking-normal text-ink-3">
                  Prep
                </span>
              </span>
            </button>
          </div>

          <div className="flex flex-1 justify-center px-1 sm:px-2 min-w-0">
            <GlobalSearch onNav={nav} />
          </div>

          {/* Right Header Actions */}
          <div ref={menuRef} className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Exam Mode Toggle Switch (MedAT-H vs MedAT-Z) */}
            <div className="flex rounded-xl bg-slate-100 p-0.5 sm:p-1 shadow-inner shrink-0" role="group" aria-label="MedAT Studienrichtung">
              <button
                type="button"
                onClick={() => setExamType("MEDAT-H")}
                className={`rounded-lg px-2 sm:px-2.5 py-1 text-[11px] sm:text-[11.5px] font-black uppercase transition-all ${
                  userProfile.examType === "MEDAT-H"
                    ? "bg-paper text-primary shadow-xs"
                    : "text-ink-4 hover:text-ink"
                }`}
                title="Humanmedizin (BMS, TV, KFF, SEK)"
              >
                <span className="hidden xs:inline">MedAT-</span>H
              </button>
              <button
                type="button"
                onClick={() => toast("MedAT-Z ist demnächst verfügbar. Aktuell steht MedAT-H bereit.", "info")}
                className="rounded-lg px-2 sm:px-2.5 py-1 text-[11px] sm:text-[11.5px] font-black uppercase text-ink-4/60 hover:text-ink-4 opacity-60 cursor-not-allowed transition-all"
                title="MedAT-Z — Demnächst verfügbar"
              >
                <span className="hidden xs:inline">MedAT-</span>Z
              </button>
            </div>

            {/* User Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setMenu(menu === "user" ? null : "user")}
                className="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-paper-3"
                aria-label="Profilmenü öffnen"
              >
                <span className="flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary text-[11px] sm:text-[12px] font-bold text-paper">
                  {(userProfile?.name || "Student").slice(0, 2).toUpperCase()}
                </span>
              </button>
              {menu === "user" && (
                <div className="animate-pop-in absolute right-0 top-12 z-50 w-60 overflow-hidden rounded-2xl border border-line bg-paper py-2 shadow-xl">
                  <div className="border-b border-line px-4 py-2.5">
                    <p className="text-[13.5px] font-bold text-ink">{userProfile?.name || "Student:in"}</p>
                    <p className="text-[11.5px] text-ink-3 mt-0.5">
                      {userProfile?.examType || "MEDAT-H"} · {UNIVERSITIES[userProfile?.targetUniversity || "undecided"]?.name || "MedUni Wien"}
                    </p>
                  </div>
                  <div className="py-1 text-[13px]">
                    <button
                      onClick={() => {
                        nav("settings");
                        setMenu(null);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-ink-2 hover:bg-paper-3 hover:text-ink"
                    >
                      <DIconGear className="h-4 w-4 text-ink-4" />
                      Einstellungen
                    </button>
                    <button
                      onClick={() => {
                        nav("help");
                        setMenu(null);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-ink-2 hover:bg-paper-3 hover:text-ink"
                    >
                      <DIconHelp className="h-4 w-4 text-ink-4" />
                      Hilfe & FAQ
                    </button>
                    <div className="my-1 border-t border-line" />
                    <button
                      onClick={async () => {
                        setMenu(null);
                        await logout();
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer"
                    >
                      <DIconLogout className="h-4 w-4 text-red-500" />
                      Abmelden
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden px-3 xs:px-4 py-4 sm:py-6 lg:px-8">
          <div className="mx-auto max-w-6xl w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
