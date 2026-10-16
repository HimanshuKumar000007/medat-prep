import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/* ============================================================
   TEMPORARY EN translation layer.
   German stays the source of truth in every component; this
   dictionary maps German strings → English where provided.
   Unmapped strings gracefully remain German ("preview" scope).
   Swap for a real i18n library later — delete this file and
   the `t(...)` wrappers to revert.
   ============================================================ */

export type Lang = "de" | "en";

const EN: Record<string, string> = {
  /* ---------- Navbar ---------- */
  "Über den MedAT": "About the MedAT",
  Lernplan: "Study plan",
  "Übungsfragen": "Practice questions",
  Probetests: "Mock exams",
  Blog: "Blog",
  Anmelden: "Log in",
  "Kostenlos starten": "Start for free",
  "Examens-Struktur": "Exam structure",
  "BMS-Themen": "BMS topics",
  "KFF-Training": "KFF training",
  "SEK-Modul": "SEK module",
  "Wichtige Termine": "Key dates",
  "Quoten & Kontingente": "Quotas & contingents",

  /* ---------- Hero ---------- */
  "Bestehe den": "Pass the",
  "— dein Ticket zur Medizin in Österreich": "— your ticket to medicine in Austria",
  "Mit KI-gestütztem Training für": "With AI-powered training for",
  "BMS, KFF, Textverständnis und SEK": "BMS, KFF, reading comprehension and SEK",
  "Keine 20.000 willkürlichen Fragen — sondern die eine Übung, die du":
    "Not 20,000 random questions — but the one exercise you need",
  jetzt: "right now.",
  "brauchst. Personalisiert. Auf Deutsch. Für Wien, Innsbruck, Graz und Linz.":
    "Personalised. In German. For Vienna, Innsbruck, Graz and Linz.",
  "Jetzt kostenlos üben": "Start practicing — free",
  "Wie funktioniert's?": "How does it work?",
  "Für alle 4 Unis": "For all 4 universities",

  /* ---------- Homepage sections ---------- */
  "Ein Testtag. Vier Disziplinen.": "One test day. Four disciplines.",
  "Ein Versuch pro Jahr.": "One attempt per year.",

  /* ---------- Dashboard shell ---------- */
  Dashboard: "Dashboard",
  "KI-Tutor": "AI Tutor",
  Generalproben: "Mock exams",
  Statistiken: "Analytics",
  Community: "Community",
  Einstellungen: "Settings",
  "Hilfe & FAQ": "Help & FAQ",
  "Heute: 3": "Today: 3",
  "Neu: 2": "New: 2",
  "Fragen, Themen oder Generalproben suchen...": "Search questions, topics or mock exams…",
  "Zuletzt gesucht": "Recent searches",
  Profil: "Profile",
  "Abo verwalten": "Manage subscription",
  Ausloggen: "Log out",
  "Demo-Dashboard": "Demo dashboard",
};

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: string) => string;
}

const Ctx = createContext<I18nCtx>({
  lang: "de",
  setLang: () => {},
  t: (s) => s,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      return localStorage.getItem("mprep-lang") === "en" ? "en" : "de";
    } catch {
      return "de";
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("mprep-lang", l);
    } catch {
      /* private mode — ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    currentLang = lang;
  }, [lang]);

  const t = (s: string) => (lang === "en" ? (EN[s] ?? s) : s);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}

export function useT() {
  return useContext(Ctx).t;
}

/* Non-reactive variant for spots without hook access (e.g. dropdown
   menus that render fresh on open). Kept in sync by the provider. */
let currentLang: Lang = "de";
export function tt(s: string): string {
  return currentLang === "en" ? (EN[s] ?? s) : s;
}

/* Small floating notice while EN is active (temporary layer). */
export function LangBanner() {
  const { lang, setLang } = useI18n();
  if (lang !== "en") return null;
  return (
    <div
      role="status"
      className="animate-pop-in fixed bottom-6 right-6 z-[85] flex w-[calc(100%-3rem)] max-w-[330px] items-start gap-3 rounded-xl border border-line bg-night px-4 py-3.5 text-paper shadow-2xl"
    >
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-info/20 text-info" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.5 12h17M12 3c2.5 2.4 3.8 5.6 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3z" />
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-bold">English preview</p>
        <p className="mt-0.5 text-[12px] leading-snug text-slate-400">
          Navigation, hero &amp; dashboard shell are translated — full content stays German for now.
        </p>
        <button
          onClick={() => setLang("de")}
          className="mt-2 text-[12px] font-bold text-[#FCA5A5] underline-offset-2 transition-colors hover:text-paper hover:underline"
        >
          Zurück zu Deutsch
        </button>
      </div>
    </div>
  );
}
