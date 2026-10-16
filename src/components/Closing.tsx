import { useEffect, useState, type FormEvent } from "react";
import { Reveal, nextMedAT, scrollToId, toast, track, useCountdown } from "../lib/core";
import { IconCalendar, IconCheck, IconSend, LogoMark } from "../lib/icons";

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
    <div className="flex min-w-[72px] flex-1 flex-col items-center rounded-xl border border-night-2 bg-night-2/50 px-3 py-4 sm:min-w-[84px]">
      <span key={tick ? display : undefined} className={`display-num text-[clamp(2rem,3.6vw,2.9rem)] text-paper ${tick ? "animate-pop-in" : ""}`}>
        {display}
      </span>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">{label}</span>
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
    <section id="countdown" className="relative overflow-hidden bg-night py-20 text-paper lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 60% at 15% 10%, rgba(220,38,38,0.14), transparent)" }}
        aria-hidden="true"
      />
      <div className="hex-pattern pointer-events-none absolute inset-0 opacity-[0.03] invert" aria-hidden="true" />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow text-[#F87171]">Countdown läuft</span>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw+0.6rem,2.9rem)]">
              Der MedAT {next.year}
              <br />
              wartet nicht auf dich.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-slate-400">
              Am Testtag treten ~13.000 Kandidat:innen an — aber nur eine Handvoll hat wirklich systematisch trainiert.
              Fang heute an, nicht im März.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 flex gap-3" role="timer" aria-label={`Countdown bis zum MedAT am ${next.label}`}>
              <TimeBox value={t.days} label="Tage" />
              <TimeBox value={t.hours} label="Std" />
              <TimeBox value={t.minutes} label="Min" />
              <TimeBox value={t.seconds} label="Sek" tick />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14px]">
              <span className="flex items-center gap-2.5 text-slate-300">
                <IconCalendar className="h-5 w-5 text-[#F87171]" />
                <strong className="font-semibold text-paper">{next.shortLabel}</strong>&nbsp;· österreichweit
              </span>
              <span className="text-slate-500">{next.registrationLabel}</span>
              <span className="num font-semibold text-slate-300">Teilnahmegebühr: 110 €</span>
            </div>
          </Reveal>
        </div>

        {/* Signup card */}
        <Reveal delay={150}>
          <div className="rounded-2xl border border-line bg-paper p-7 text-ink shadow-2xl lg:p-9">
            {!sent ? (
              <>
                <h3 className="text-[21px] font-extrabold tracking-[-0.02em]">Sichere dir deinen kostenlosen Start.</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                  Einstufungstest, 200 Übungsfragen und dein Basis-Lernplan — sofort ohne Wartezeit starten.
                </p>
                <form className="mt-6" onSubmit={submit} noValidate>
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
                    <p id="signup-error" className="animate-fade-up mt-2.5 text-[13px] font-semibold text-primary">
                      {error}
                    </p>
                  )}
                  <button type="submit" className="btn btn-primary group mt-4 w-full">
                    Jetzt kostenlos starten
                    <IconSend className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {["Keine Kreditkarte erforderlich", "Monatlich kündbar — ohne Drama", "Komplett auf Deutsch"].map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-[13px] font-medium text-ink-2">
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
const FOOTER_COLS = [
  {
    title: "Produkt",
    links: [
      { label: "Über den MedAT", href: "ueber-medat" },
      { label: "Lernplan", href: "lernplan" },
      { label: "Übungsfragen", href: "uebungsfragen" },
      { label: "Probetests", href: "probetests" },
      { label: "Preise", href: "preise" },
    ],
  },
  {
    title: "Ressourcen",
    links: [
      { label: "Einstufungstest", href: "uebungsfragen" },
      { label: "Blog & Guides", href: "blog" },
      { label: "FAQ", href: "faq" },
      { label: "Termine & Countdown", href: "countdown" },
      { label: "Quoten & Kontingente", href: "quoten" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-4 border-primary bg-night text-slate-400">
      {/* Austrian tricolor hairline */}
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-paper" />
        <span className="flex-1 bg-primary" />
      </div>

      <div className="wrap grid gap-12 py-16 lg:grid-cols-[5fr_3fr_3fr]">
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
            <LogoMark className="h-9 w-9" />
            <span className="display text-[17px] leading-none text-paper">
              MedAT <span className="font-sans font-medium normal-case tracking-normal text-slate-500">Prep</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed">
            Die KI-gestützte Vorbereitung auf den österreichischen Medizin-Aufnahmetest. Gebaut in Wien, für Wien,
            Innsbruck, Graz und Linz.
          </p>
          <div className="mt-6 flex items-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-8 rounded-full bg-primary" />
            <span className="h-1.5 w-8 rounded-full bg-slate-700" />
            <span className="h-1.5 w-8 rounded-full bg-primary" />
            <span className="ml-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-600">Made in Austria</span>
          </div>
        </div>

        {FOOTER_COLS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={`#${l.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(l.href);
                    }}
                    className="text-[14px] font-medium text-slate-400 transition-colors duration-200 hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Legal */}
      <div className="border-t border-night-2">
        <div className="wrap grid gap-10 py-12 text-[12.5px] leading-relaxed lg:grid-cols-2">
          <div id="impressum">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">Impressum</p>
            <p className="mt-3">
              MedAT Prep GmbH · Praterstraße 1, 1020 Wien · FN 512 348 x, Handelsgericht Wien · UID: ATU 74512389 ·
              Geschäftsführung: M. Gruber · Es gelten unsere AGB sowie die Widerrufsbelehrung. Kontakt:{" "}
              <a href="mailto:office@medat-prep.at" className="font-semibold text-slate-300 underline-offset-2 transition-colors hover:text-paper hover:underline">
                office@medat-prep.at
              </a>
            </p>
          </div>
          <div id="datenschutz">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">Datenschutz</p>
            <p className="mt-3">
              Wir verarbeiten deine Daten ausschließlich zur Bereitstellung des Dienstes (DSGVO, Art. 6 Abs. 1 lit. b) —
              keine Weitergabe an Dritte, kein Verkauf von Profilen. Fragen an{" "}
              <a href="mailto:datenschutz@medat-prep.at" className="font-semibold text-slate-300 underline-offset-2 transition-colors hover:text-paper hover:underline">
                datenschutz@medat-prep.at
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-night-2">
        <div className="wrap flex flex-col items-start justify-between gap-3 py-6 text-[12px] text-slate-600 sm:flex-row sm:items-center">
          <p>© {year} MedAT Prep GmbH · Alle Rechte vorbehalten.</p>
          <p>
            Unabhängiges Angebot — nicht mit den Medizinischen Universitäten affiliiert.{" "}
            <button
              className="font-semibold text-slate-500 transition-colors hover:text-paper"
              onClick={() => {
                track("cta_footer_top", { location: "footer" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Nach oben ↑
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
