import { useEffect, useState } from "react";
import { nextMedAT, track, useParallax } from "../lib/core";
import { IconArrowRight, IconCheck, IconFlame, IconSpark, IconStar } from "../lib/icons";

function ProgressRing() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const t = window.setTimeout(() => setPct(68), 700);
    return () => window.clearTimeout(t);
  }, []);
  const c = 2 * Math.PI * 30;
  return (
    <div className="relative h-[76px] w-[76px]">
      <svg viewBox="0 0 76 76" className="h-full w-full -rotate-90">
        <circle cx="38" cy="38" r="30" fill="none" stroke="#F1F5F9" strokeWidth="8" />
        <circle
          cx="38"
          cy="38"
          r="30"
          fill="none"
          stroke="#DC2626"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * pct) / 100}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="num text-[15px] font-extrabold text-ink">{pct}%</span>
      </div>
    </div>
  );
}

const AVATARS = [
  { init: "MK", bg: "#0F172A", fg: "#fff" },
  { init: "SL", bg: "#DC2626", fg: "#fff" },
  { init: "TB", bg: "#3B82F6", fg: "#fff" },
  { init: "JH", bg: "#8B5CF6", fg: "#fff" },
  { init: "AR", bg: "#10B981", fg: "#fff" },
];

import { useT } from "../lib/i18n";

export default function Hero() {
  const t = useT();
  const next = nextMedAT();
  const parBadge1 = useParallax<HTMLDivElement>(0.5);
  const parBadge2 = useParallax<HTMLDivElement>(1.2);
  const parBadge3 = useParallax<HTMLDivElement>(0.8);

  return (
    <section id="top" className="relative overflow-hidden bg-paper-2">
      {/* Layered ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(220,38,38,0.07), transparent)" }}
        aria-hidden="true"
      />
      <div className="hex-pattern pointer-events-none absolute inset-0 opacity-[0.02]" aria-hidden="true" />
      {/* Brain cortex outline, top right */}
      <svg
        className="pointer-events-none absolute -right-24 -top-20 h-[420px] w-[420px] text-primary opacity-[0.05]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M50 12c-9 0-14 6-14 11-6-1-12 3-12 10 0 3 1 5 3 7-4 2-7 7-7 12 0 8 6 13 13 13 1 5 6 9 12 9h10c6 0 11-4 12-9 7 0 13-5 13-13 0-5-3-10-7-12 2-2 3-4 3-7 0-7-6-11-12-10 0-5-5-11-14-11z" />
        <path d="M36 30c6 3 8 9 6 15M50 20v54M64 30c-6 3-8 9-6 15M30 52c7-2 13 0 17 5M70 52c-7-2-13 0-17 5" strokeWidth="0.8" />
      </svg>
      {/* DNA helix, bottom left */}
      <svg
        className="pointer-events-none absolute -bottom-24 -left-16 h-[380px] w-[380px] text-ink opacity-[0.035]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M30 5c0 18 40 18 40 36S30 59 30 77s40 18 40 36" />
        <path d="M70 5c0 18-40 18-40 36s40 18 40 36-40 18-40 36" />
        <path d="M33 14h34M30 23h40M33 32h34M30 41h40M33 50h34M30 59h40M33 68h34" strokeWidth="0.8" />
      </svg>

      <div className="wrap relative grid items-center gap-14 pb-20 pt-28 md:pt-32 lg:min-h-[calc(100dvh)] lg:grid-cols-[11fr_9fr] lg:gap-12 lg:pb-16 lg:pt-36">
        {/* ---------- Left: copy ---------- */}
        <div>
          <span
            className="hero-enter inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-muted px-3.5 py-1.5 text-[13px] font-semibold text-primary"
            style={{ animationDelay: "0ms" }}
          >
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            MedAT {next.year} · Internet-Anmeldung ab 1. März
          </span>

          <h1
            className="hero-enter display mt-6 max-w-[16ch] text-[clamp(2.25rem,5vw+1rem,3.5rem)] text-ink"
            style={{ animationDelay: "100ms" }}
          >
            {t("Bestehe den")}{" "}
            <span
              className="whitespace-nowrap"
              style={{ background: "linear-gradient(180deg, transparent 62%, rgba(220,38,38,0.16) 62%)" }}
            >
              MedAT
            </span>{" "}
            {t("— dein Ticket zur Medizin in Österreich")}
          </h1>

          <p
            className="hero-enter mt-6 max-w-[540px] text-[clamp(0.9375rem,0.5vw+0.875rem,1.125rem)] leading-relaxed text-ink-2"
            style={{ animationDelay: "200ms" }}
          >
            {t("Mit KI-gestütztem Training für")} <strong className="font-semibold text-ink">{t("BMS, KFF, Textverständnis und SEK")}</strong>.{" "}
            {t("Keine 20.000 willkürlichen Fragen — sondern die eine Übung, die du")}{" "}
            <em className="not-italic font-semibold text-primary">{t("jetzt")}</em>{" "}
            {t("brauchst. Personalisiert. Auf Deutsch. Für Wien, Innsbruck, Graz und Linz.")}
          </p>

          <div className="hero-enter mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "300ms" }}>
            <button
              className="btn btn-primary group"
              onClick={() => {
                track("hero_cta_click", { location: "hero", variant: "primary" });
                window.location.hash = "#/onboarding";
              }}
            >
              {t("Jetzt kostenlos üben")}
              <IconArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                track("hero_login_click", { location: "hero" });
                window.location.hash = "#/onboarding?mode=login";
              }}
            >
              {t("Anmelden")}
            </button>
          </div>

          {/* Social proof */}
          <div
            className="hero-enter mt-9 flex flex-wrap items-center gap-x-4 gap-y-3"
            style={{ animationDelay: "500ms" }}
          >
            <div className="flex" aria-hidden="true">
              {AVATARS.map((a, i) => (
                <span
                  key={a.init}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper text-[10px] font-bold"
                  style={{ backgroundColor: a.bg, color: a.fg, marginLeft: i === 0 ? 0 : -8, zIndex: AVATARS.length - i }}
                >
                  {a.init}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-warning" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm font-medium text-ink-3">4,9/5 von über 800 MedAT-Kandidat:innen</p>
          </div>

          {/* Trust micro-bar */}
          <p
            className="hero-enter mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-[0.05em] text-ink-4"
            style={{ animationDelay: "600ms" }}
            aria-label="Für alle vier Universitäten: MedUni Wien, Innsbruck, Graz, JKU Linz"
          >
            <span>{t("Für alle 4 Unis")}</span>
            {["MedUni Wien", "Innsbruck", "Graz", "JKU Linz"].map((u) => (
              <span key={u} className="flex items-center gap-2.5">
                <span className="text-line-2" aria-hidden="true">·</span>
                {u}
              </span>
            ))}
          </p>
        </div>

        {/* ---------- Right: AI dashboard mockup ---------- */}
        <div className="hero-visual-enter relative mx-auto w-full max-w-[540px] lg:max-w-none" style={{ perspective: "1200px" }}>
          <div
            className="relative rounded-2xl border border-line bg-paper shadow-2xl transition-transform duration-500 [transform:perspective(1100px)_rotateY(-5deg)_rotateX(2deg)] [transform-style:preserve-3d] hover:[transform:perspective(1100px)_rotateY(-2deg)_rotateX(1deg)]"
            role="img"
            aria-label="Vorschau des MedAT-Prep-Dashboards mit Übungskarte, Fortschrittsring und KI-Tutor"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" aria-hidden="true" />
              <span className="num ml-3 text-[11px] font-semibold text-ink-3">app.medat-prep.at / dashboard</span>
            </div>

            <div className="grid grid-cols-[36%_64%]">
              {/* Sidebar */}
              <div className="border-r border-line bg-paper-2 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-4">Heute</p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { t: "45 Min · KFF-Training", c: "#EF4444", done: true },
                    { t: "30 Min · Bio-Wiederholung", c: "#DC2626", done: false },
                    { t: "15 Min · SEK-Blitzrunde", c: "#8B5CF6", done: false },
                  ].map((item) => (
                    <li key={item.t} className="flex items-start gap-2">
                      <span
                        className={`mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ${item.done ? "bg-success" : "border-[1.5px] border-line-2 bg-paper"}`}
                        aria-hidden="true"
                      >
                        {item.done && <IconCheck className="h-2.5 w-2.5 text-paper" />}
                      </span>
                      <span className={`text-[11px] leading-snug ${item.done ? "text-ink-4 line-through" : "font-medium text-ink-2"}`}>
                        {item.t}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-lg border border-line bg-paper p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-ink">
                    <IconFlame className="h-4 w-4 text-primary" />
                    12 Tage Streak
                  </div>
                  <div className="mt-2 flex gap-1" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <span key={i} className={`h-5 flex-1 rounded-sm ${i < 6 ? "bg-primary/80" : "bg-primary"}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main panel */}
              <div className="p-4">
                <div className="rounded-xl border border-line p-3.5">
                  <span className="inline-block rounded-md bg-primary-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                    BMS · Biologie
                  </span>
                  <p className="mt-2 text-[13px] font-semibold leading-snug text-ink">
                    Welche Base paart in der DNA-Doppelhelix mit Adenin?
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {["Cytosin", "Thymin", "Guanin", "Uracil"].map((opt, i) => (
                      <li
                        key={opt}
                        className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-[12px] ${
                          i === 1
                            ? "border-success/50 bg-success-subtle font-semibold text-ink"
                            : "border-line text-ink-2"
                        }`}
                      >
                        <span>
                          <span className="num mr-2 text-[10px] font-bold text-ink-4">{String.fromCharCode(65 + i)}</span>
                          {opt}
                        </span>
                        {i === 1 && <IconCheck className="h-3.5 w-3.5 text-success" />}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 flex items-center gap-3.5">
                  <ProgressRing />
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-ink">BMS: 68&nbsp;% gemeistert</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-ink-3">
                      +9 Punkte seit dem Einstufungstest. Nächstes Ziel: Genetik.
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-2.5 rounded-xl rounded-tl-sm bg-night p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary" aria-hidden="true">
                    <IconSpark className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    <span className="font-semibold text-paper">KI-Tutor:</span> Gut gemacht! Morgen: aktiver Recall statt
                    Wiederlesen — ich hab dir 12 Karten vorbereitet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges (parallax) */}
          <div ref={parBadge1} className="absolute -top-7 right-0 z-10 lg:-right-8">
            <div className="animate-float rounded-xl border border-line border-l-[3px] border-l-primary bg-paper px-4 py-3 shadow-lg">
              <p className="num text-sm font-extrabold text-ink">15.668 Kandidaten</p>
              <p className="num text-[11px] font-semibold text-ink-3">1.950 Plätze · Quote 8:1</p>
            </div>
          </div>

          <div ref={parBadge3} className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 sm:block lg:-right-12">
            <div className="flex items-center gap-2 rounded-full bg-paper px-3.5 py-2 shadow-md">
              <IconFlame className="h-4 w-4 text-primary" />
              <span className="text-[12px] font-bold text-ink">12 Tage Streak</span>
            </div>
          </div>

          <div ref={parBadge2} className="absolute -bottom-6 left-0 z-10 lg:-left-8">
            <div className="animate-float-late rounded-xl border border-sek bg-primary-subtle px-4 py-3">
              <p className="text-[12px] font-bold text-[#991B1B]">Nur ein Versuch pro Jahr.</p>
              <p className="text-[11px] font-medium text-[#B91C1C]/80">Bereite dich vor, als gäbe es keinen zweiten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
