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
      localStorage.setItem("mprep-lang", "de");
    } catch {}
    return "de";
  });

  const setLang = (_l: Lang) => {
    setLangState("de");
    try {
      localStorage.setItem("mprep-lang", "de");
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = "de-AT";
    currentLang = "de";
  }, []);

  const t = (s: string) => s;

  return <Ctx.Provider value={{ lang: "de", setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}

export function useT() {
  return useContext(Ctx).t;
}

/* Non-reactive variant for spots without hook access */
let currentLang: Lang = "de";
export function tt(s: string): string {
  return s;
}

/* LangBanner disabled since Austrian German is the sole language */
export function LangBanner() {
  return null;
}
