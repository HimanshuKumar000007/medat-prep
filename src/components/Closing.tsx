import { useEffect, useState, type FormEvent } from "react";
import { Reveal, nextMedAT, scrollToId, toast, track, useCountdown } from "../lib/core";
import { IconCalendar, IconCheck, IconSend, IconShield, LogoMark } from "../lib/icons";
import LegalTrustModal, { type LegalTab } from "./LegalTrustModal";

/* ---------------- Toast ---------------- */
const TOAST_STYLE: Record<string, { icon: "check" | "zap" | "alert" | "info"; chip: string }> = {
  success: { icon: "check", chip: "bg-success/20 text-success" },
  info: { icon: "info", chip: "bg-info/20 text-info" },
  error: { icon: "alert", chip: "bg-primary/20 text-[#F87171]" },
  xp: { icon: "zap", chip: "bg-warning/20 text-warning" },
};

export function Toast() {
  const [msg, setMsg] = useState<{ message: string; kind: string } | null>(null);

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent).detail;
      setMsg(typeof d === "string" ? { message: d, kind: "success" } : d);
    };
    window.addEventListener("mprep:toast", on);
    return () => window.removeEventListener("mprep:toast", on);
  }, []);

  useEffect(() => {
    if (!msg) return;
    const t = window.setTimeout(() => setMsg(null), 4200);
    return () => window.clearTimeout(t);
  }, [msg]);

  if (!msg) return null;
  const style = TOAST_STYLE[msg.kind] ?? TOAST_STYLE.success;
  return (
    <div
      role="status"
      className="animate-pop-in fixed bottom-6 left-1/2 z-[80] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-xl border border-line bg-night px-5 py-4 text-paper shadow-2xl"
    >
      <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${style.chip}`} aria-hidden="true">
        {style.icon === "check" && <IconCheck className="h-3.5 w-3.5" />}
        {style.icon === "zap" && (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M13 2.5 4.5 14H11l-1.5 7.5L18 10h-6.5z" /></svg>
        )}
        {style.icon === "alert" && (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 4 3 19.5h18z" /><path d="M12 10v4M12 17h.01" /></svg>
        )}
        {style.icon === "info" && (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
        )}
      </span>
      <p className="text-[14px] font-medium leading-snug">{msg.message}</p>
      <button className="ml-auto shrink-0 text-slate-500 transition-colors hover:text-paper" onClick={() => setMsg(null)} aria-label="Meldung schließen">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </div>
  );
}

/* ---------------- Countdown boxes ---------------- */
function TimeBox({ value, label, tick }: { value: number; label: string; tick?: boolean }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center rounded-xl border border-night-2 bg-night-2/50 px-1 py-2.5 xs:px-1.5 xs:py-3 sm:px-3 sm:py-4">
      <span key={tick ? display : undefined} className={`display-num text-[22px] xs:text-[25px] sm:text-[clamp(1.5rem,3.6vw,2.9rem)] text-paper ${tick ? "animate-pop-in" : ""}`}>
        {display}
      </span>
      <span className="mt-1 sm:mt-2 text-[9.5px] xs:text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.1em] text-slate-500">{label}</span>
    </div>
  );
}

/* ---------------- Final CTA ---------------- */
export function CountdownCTA() {
  const next = nextMedAT();
  const t = useCountdown(next.date);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein (z. B. name@matura.at).");
      return;
    }
    setError("");
    track("signup_submit", { location: "countdown_section" });
    toast("Willkommen an Bord! Du wirst weitergeleitet...", "success");
    window.location.hash = "#/onboarding";
  };

  return (
    <section id="countdown" className="relative overflow-hidden bg-night py-14 sm:py-20 text-paper lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 60% at 15% 10%, rgba(220,38,38,0.14), transparent)" }}
        aria-hidden="true"
      />
      <div className="hex-pattern pointer-events-none absolute inset-0 opacity-[0.03] invert" aria-hidden="true" />

      <div className="wrap relative grid items-center gap-8 sm:gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow text-[#F87171]">Countdown läuft</span>
            <h2 className="display mt-3.5 sm:mt-4 text-[26px] xs:text-[30px] sm:text-[clamp(1.75rem,3.4vw+0.6rem,2.9rem)]">
              Der MedAT {next.year}
              <br />
              wartet nicht auf dich.
            </h2>
            <p className="mt-3.5 sm:mt-5 max-w-lg text-[14px] xs:text-[15px] sm:text-[16px] leading-relaxed text-slate-400">
              Am Testtag treten ~13.000 Kandidat:innen an — aber nur eine Handvoll hat wirklich systematisch trainiert.
              Fang heute an, nicht im März.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 sm:mt-9 flex gap-1.5 xs:gap-2 sm:gap-3" role="timer" aria-label={`Countdown bis zum MedAT am ${next.label}`}>
              <TimeBox value={t.days} label="Tage" />
              <TimeBox value={t.hours} label="Std" />
              <TimeBox value={t.minutes} label="Min" />
              <TimeBox value={t.seconds} label="Sek" tick />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-x-4 sm:gap-x-7 gap-y-2 sm:gap-y-3 text-[12px] xs:text-[13px] sm:text-[14px]">
              <span className="flex items-center gap-2 sm:gap-2.5 text-slate-300">
                <IconCalendar className="h-4 w-4 sm:h-5 sm:w-5 text-[#F87171]" />
                <strong className="font-semibold text-paper">{next.shortLabel}</strong>&nbsp;· österreichweit
              </span>
              <span className="text-slate-500">{next.registrationLabel}</span>
              <span className="num font-semibold text-slate-300">Teilnahmegebühr: 110 €</span>
            </div>
          </Reveal>
        </div>

        {/* Signup card */}
        <Reveal delay={150}>
          <div className="rounded-2xl border border-line bg-paper p-4 xs:p-5 sm:p-7 text-ink shadow-2xl lg:p-9">
            {!sent ? (
              <>
                <h3 className="text-[17px] xs:text-[19px] sm:text-[21px] font-extrabold tracking-[-0.02em]">Sichere dir deinen kostenlosen Start.</h3>
                <p className="mt-1.5 sm:mt-2 text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Persönlicher Lernplan, 200 Übungsfragen und 5-Schritte-Setup — sofort ohne Wartezeit starten.
                </p>
                <form className="mt-5 sm:mt-6" onSubmit={submit} noValidate>
                  <label htmlFor="signup-email" className="sr-only">
                    E-Mail-Adresse
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="deine@email.at"
                    className="input-field"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "signup-error" : undefined}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                  />
                  {error && (
                    <p id="signup-error" className="animate-fade-up mt-2 text-[12.5px] sm:text-[13px] font-semibold text-primary">
                      {error}
                    </p>
                  )}
                  <button type="submit" className="btn btn-primary group mt-3.5 sm:mt-4 w-full min-h-[48px] justify-center touch-manipulation">
                    Jetzt kostenlos starten
                    <IconSend className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
                <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 border-t border-line pt-4 sm:pt-5">
                  {["Keine Kreditkarte erforderlich", "Monatlich kündbar — ohne Drama", "Komplett auf Deutsch"].map((b) => (
                    <li key={b} className="flex items-center gap-2 sm:gap-2.5 text-[12px] xs:text-[13px] font-medium text-ink-2">
                      <IconCheck className="h-3.5 w-3.5 shrink-0 text-success" />
                      {b}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="animate-pop-in py-4 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-subtle text-success">
                  <IconCheck className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-[21px] font-extrabold tracking-[-0.02em]">Konto startklar!</h3>
                <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-2">
                  Direkt starten — keine E-Mail-Bestätigung erforderlich.
                </p>
                <button
                  className="btn btn-primary btn-sm mt-5"
                  onClick={() => {
                    track("cta_dashboard", { location: "countdown_success" });
                    window.location.hash = "#/app";
                  }}
                >
                  Direkt ins Dashboard →
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
type FooterLink = {
  label: string;
  href?: string;
  legalTab?: LegalTab;
  badge?: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const FOOTER_COLS: FooterColumn[] = [
  {
    title: "Produkt",
    links: [
      { label: "Über den MedAT", href: "ueber-medat" },
      { label: "Lernplan & Methoden", href: "lernplan" },
      { label: "Übungsfragen & BMS", href: "uebungsfragen" },
      { label: "Probetests & Simulation", href: "probetests" },
      { label: "Preise & Tarife", href: "preise" },
    ],
  },
  {
    title: "Ressourcen",
    links: [
      { label: "Telegram-Gruppe 2027", href: "medat-telegram-gruppe", badge: "Community" },
      { label: "Lernplan erstellen (Gratis)", href: "uebungsfragen" },
      { label: "Blog & Wissens-Hub", href: "blog" },
      { label: "FAQ & Antworten", href: "faq" },
      { label: "Termine & Countdown", href: "countdown" },
      { label: "Quoten & Kontingente", href: "quoten" },
    ],
  },
  {
    title: "Recht & Vertrauen",
    links: [
      { label: "Über uns (Team & Mission)", href: "about", badge: "Wien" },
      { label: "Kontakt & Support", href: "contact", badge: "< 4h" },
      { label: "Datenschutz (DSGVO)", href: "privacy", badge: "100%" },
      { label: "AGB & Widerruf", href: "terms", badge: "FAGG" },
      { label: "Haftungsausschluss (MedUni)", href: "disclaimer" },
      { label: "Impressum (§ 5 ECG)", href: "impressum" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab | null>(null);

  // Listen for global legal modal open requests
  useEffect(() => {
    const handleOpenLegal = (e: Event) => {
      const detail = (e as CustomEvent<{ tab?: LegalTab }>).detail;
      if (detail && detail.tab) {
        setActiveLegalTab(detail.tab);
      } else {
        setActiveLegalTab("impressum");
      }
    };
    window.addEventListener("mprep:open-legal", handleOpenLegal);
    return () => window.removeEventListener("mprep:open-legal", handleOpenLegal);
  }, []);

  return (
    <footer className="border-t-4 border-primary bg-night text-slate-400">
      {/* Austrian tricolor hairline */}
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-paper" />
        <span className="flex-1 bg-primary" />
      </div>

      {/* Austrian Trust & Compliance Banner */}
      <div className="border-b border-night-2 bg-night-2/30">
        <div className="wrap grid grid-cols-2 gap-3.5 py-6 sm:grid-cols-4 sm:gap-6">
          <button
            type="button"
            onClick={() => setActiveLegalTab("ueber-uns")}
            className="group flex items-center gap-3 text-left transition-transform hover:-translate-y-0.5 focus:outline-none"
            title="Details zu unserem Wiener Team einsehen"
          >
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-[18px] transition-colors group-hover:border-primary/40">
              🇦🇹
            </span>
            <div>
              <p className="text-[12px] sm:text-[13px] font-bold text-paper group-hover:text-[#F87171] transition-colors">Made in Austria</p>
              <p className="text-[10.5px] sm:text-[11.5px] text-slate-400">Firmensitz Praterstraße, Wien</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveLegalTab("datenschutz")}
            className="group flex items-center gap-3 text-left transition-transform hover:-translate-y-0.5 focus:outline-none"
            title="Datenschutzerklärung nach DSGVO einsehen"
          >
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-success/20 bg-success/10 text-success transition-colors group-hover:border-success/40">
              <IconShield className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <div>
              <p className="text-[12px] sm:text-[13px] font-bold text-paper group-hover:text-success transition-colors">100% DSGVO-konform</p>
              <p className="text-[10.5px] sm:text-[11.5px] text-slate-400">EU-Server · Null Weitergabe</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveLegalTab("agb")}
            className="group flex items-center gap-3 text-left transition-transform hover:-translate-y-0.5 focus:outline-none"
            title="14 Tage Widerrufsbelehrung & AGB einsehen"
          >
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-info/20 bg-info/10 text-info transition-colors group-hover:border-info/40">
              <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </span>
            <div>
              <p className="text-[12px] sm:text-[13px] font-bold text-paper group-hover:text-info transition-colors">14 Tage Widerruf</p>
              <p className="text-[10.5px] sm:text-[11.5px] text-slate-400">Gesetzlicher Schutz nach FAGG</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveLegalTab("impressum")}
            className="group flex items-center gap-3 text-left transition-transform hover:-translate-y-0.5 focus:outline-none"
            title="Österreichisches Impressum (§ 5 ECG, § 25 Mediengesetz) einsehen"
          >
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-warning/20 bg-warning/10 text-warning transition-colors group-hover:border-warning/40">
              <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M3 7l9-4 9 4M3 7l9 4 9-4M3 7v10l9 4 9-4V7" />
              </svg>
            </span>
            <div>
              <p className="text-[12px] sm:text-[13px] font-bold text-paper group-hover:text-warning transition-colors">§ 5 ECG & KSchG</p>
              <p className="text-[10.5px] sm:text-[11.5px] text-slate-400">Geprüfte Rechtssicherheit</p>
            </div>
          </button>
        </div>
      </div>

      <div className="wrap grid gap-8 sm:gap-10 py-10 sm:py-16 lg:grid-cols-[3.8fr_2.4fr_2.4fr_2.8fr]">
        <div>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5"
            aria-label="Zurück nach oben"
          >
            <LogoMark className="h-8 w-8 sm:h-9 sm:w-9" />
            <span className="display text-[16px] sm:text-[17px] leading-none text-paper">
              MedAT <span className="font-sans font-medium normal-case tracking-normal text-slate-500">Prep</span>
            </span>
          </a>
          <p className="mt-3.5 sm:mt-5 max-w-sm text-[13px] sm:text-[14px] leading-relaxed">
            Die interaktive Vorbereitung auf den österreichischen Medizin-Aufnahmetest. Entwickelt von Wiener
            Ärzt:innen und MedAT-Top-Platzierer:innen für Wien, Innsbruck, Graz und Linz.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-6 rounded-full bg-primary" />
            <span className="h-1.5 w-6 rounded-full bg-paper" />
            <span className="h-1.5 w-6 rounded-full bg-primary" />
            <span className="ml-2 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              Praterstraße · 1020 Wien
            </span>
          </div>

          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2">
            <a
              href="#/about"
              className="inline-flex items-center gap-1.5 rounded-lg border border-night-2 bg-night-2/60 px-3 py-1.5 text-[12px] font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:text-paper"
            >
              <span>Über das Wiener Team</span>
              <span className="text-slate-500">→</span>
            </a>
            <a
              href="#/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-night-2 bg-night-2/60 px-3 py-1.5 text-[12px] font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:text-paper"
            >
              <span>Support & Hilfe</span>
              <span className="text-slate-500">→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:contents">
          {FOOTER_COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">{col.title}</p>
              <ul className="mt-3.5 sm:mt-5 space-y-2 sm:space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.legalTab ? (
                      <button
                        onClick={() => setActiveLegalTab(l.legalTab!)}
                        className="group flex items-center gap-1.5 text-left text-[13px] sm:text-[14px] font-medium text-slate-400 transition-colors duration-200 hover:text-paper"
                      >
                        <span>{l.label}</span>
                        {l.badge && (
                          <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#F87171]">
                            {l.badge}
                          </span>
                        )}
                      </button>
                    ) : (
                      <a
                        href={l.href?.startsWith("/") || l.href === "about" || l.href === "blog" || l.href === "contact" || l.href === "kontakt" || l.href === "privacy" || l.href === "datenschutz" || l.href === "terms" || l.href === "agb" || l.href === "widerruf" || l.href === "cancellation" || l.href === "disclaimer" || l.href === "haftungsausschluss" || l.href === "impressum" || l.href === "imprint" || l.href === "medat-telegram-gruppe" ? `#/${l.href?.replace(/^\//, "")}` : `#${l.href}`}
                        onClick={(e) => {
                          if (l.href === "medat-telegram-gruppe" || l.href === "/medat-telegram-gruppe") {
                            e.preventDefault();
                            window.location.hash = "#/medat-telegram-gruppe";
                          } else if (l.href === "about" || l.href === "/about") {
                            e.preventDefault();
                            window.location.hash = "#/about";
                          } else if (l.href === "blog" || l.href === "/blog") {
                            e.preventDefault();
                            window.location.hash = "#/blog";
                          } else if (l.href === "contact" || l.href === "/contact" || l.href === "kontakt" || l.href === "/kontakt") {
                            e.preventDefault();
                            window.location.hash = "#/contact";
                          } else if (l.href === "privacy" || l.href === "/privacy" || l.href === "datenschutz" || l.href === "/datenschutz") {
                            e.preventDefault();
                            window.location.hash = "#/privacy";
                          } else if (l.href === "terms" || l.href === "/terms" || l.href === "agb" || l.href === "/agb" || l.href === "widerruf" || l.href === "/widerruf" || l.href === "cancellation" || l.href === "/cancellation") {
                            e.preventDefault();
                            window.location.hash = "#/terms";
                          } else if (l.href === "disclaimer" || l.href === "/disclaimer" || l.href === "haftungsausschluss" || l.href === "/haftungsausschluss") {
                            e.preventDefault();
                            window.location.hash = "#/disclaimer";
                          } else if (l.href === "impressum" || l.href === "/impressum" || l.href === "imprint" || l.href === "/imprint") {
                            e.preventDefault();
                            window.location.hash = "#/impressum";
                          } else if (l.href) {
                            e.preventDefault();
                            scrollToId(l.href);
                          }
                        }}
                        className="group flex items-center gap-1.5 text-left text-[13px] sm:text-[14px] font-medium text-slate-400 transition-colors duration-200 hover:text-paper"
                      >
                        <span>{l.label}</span>
                        {l.badge && (
                          <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#F87171]">
                            {l.badge}
                          </span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-night-2">
        <div className="wrap flex flex-col items-start justify-between gap-3 py-5 sm:py-6 text-[11px] xs:text-[12px] text-slate-500 sm:flex-row sm:items-center">
          <div>
            <p>© {year} MedAT Prep GmbH · Alle Rechte vorbehalten. Preise inkl. 20% österr. USt.</p>
            <p className="mt-1 text-[10.5px] text-slate-500 max-w-2xl leading-relaxed">
              Rechtlicher Hinweis: MedAT Prep ist eine unabhängige E-Learning-Plattform zur Prüfungsvorbereitung und zum Selbststudium. Die Plattform trifft keinerlei Zulassungs-, Bewertungs- oder Auswahlentscheidungen über Personen. Zulassungsentscheidungen obliegen ausschließlich den zuständigen Medizinischen Universitäten.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href="#/terms"
              className="text-slate-400 hover:text-paper underline-offset-2 hover:underline text-left"
            >
              AGB & Widerruf
            </a>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <a
              href="#/privacy"
              className="text-slate-400 hover:text-paper underline-offset-2 hover:underline text-left"
            >
              Datenschutz (DSGVO)
            </a>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <a
              href="#/disclaimer"
              className="text-slate-400 hover:text-paper underline-offset-2 hover:underline text-left"
            >
              Haftungsausschluss (MedUni)
            </a>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <a
              href="#/impressum"
              className="text-slate-400 hover:text-paper underline-offset-2 hover:underline text-left"
            >
              Impressum (§ 5 ECG)
            </a>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <button
              className="font-semibold text-slate-400 transition-colors hover:text-paper"
              onClick={() => {
                track("cta_footer_top", { location: "footer" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Nach oben ↑
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Trust Interactive Modal */}
      <LegalTrustModal
        isOpen={activeLegalTab !== null}
        onClose={() => setActiveLegalTab(null)}
        initialTab={activeLegalTab ?? "impressum"}
      />
    </footer>
  );
}
