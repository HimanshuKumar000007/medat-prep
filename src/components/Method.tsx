import { useEffect, useRef, useState } from "react";
import { Reveal, reducedMotion, scrollToId, track, useCountUp } from "../lib/core";
import { IconArrowRight, IconChart, IconFlame, IconHeart, IconSpark, IconTarget } from "../lib/icons";

const STEPS = [
  {
    n: "01",
    title: "Setup & Analyse",
    text: "In unter 2 Minuten zu deinem persönlichen Fahrplan: Wähle Ziel-Uni, Zeitbudget und Fokusfächer für deine maßgeschneiderte Vorbereitung.",
  },
  {
    n: "02",
    title: "KI-Lernplan & Tutor",
    text: "Der Plan wird wöchentlich neu berechnet: Schwächen bekommen Fokuszeit, Stärken nur Erhaltung — mit 24/7 KI-Tutor für jeden Rechenweg.",
  },
  {
    n: "03",
    title: "Adaptives Training",
    text: "5.000+ Fragen mit Erklärungen & gezieltem Schwachstellen-Drill. Der Algorithmus serviert dir genau die Frage, die du jetzt brauchst.",
  },
  {
    n: "04",
    title: "Simulation",
    text: "4 vollständige Probetests unter Echtbedingungen: Zeitdruck, Pausenlogik, Ranking — bis sich der Testtag wie eine Wiederholung anfühlt.",
  },
];

const WEEK = [
  { d: "Mo", v: 45 },
  { d: "Di", v: 60 },
  { d: "Mi", v: 30 },
  { d: "Do", v: 75 },
  { d: "Fr", v: 50 },
  { d: "Sa", v: 90 },
  { d: "So", v: 40 },
];

function MiniBars({ data, highlight = 5 }: { data: { d: string; v: number }[]; highlight?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex h-36 sm:h-40 gap-1.5 sm:gap-3">
      {data.map((b, i) => (
        <div key={b.d} className="flex flex-1 flex-col items-center justify-end gap-1 sm:gap-1.5">
          <span className="num text-[10px] font-bold text-slate-400">{b.v}</span>
          <div
            className={`w-full rounded-t-md ${i === highlight ? "bg-primary" : "bg-slate-700"}`}
            style={{
              height: on ? `${(b.v / 100) * 68}%` : "3%",
              transition: `height 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 70}ms`,
            }}
          />
          <span className="num text-[10px] font-semibold text-slate-500">{b.d}</span>
        </div>
      ))}
    </div>
  );
}

function ScoreBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* score distribution buckets */
  const bars = [12, 20, 34, 55, 78, 92, 100, 84, 58, 32, 16, 8];
  return (
    <div>
      <div ref={ref} className="flex h-36 sm:h-44 items-end gap-1 sm:gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${i === 7 ? "bg-primary" : "bg-slate-700"}`}
            style={{ height: on ? `${h}%` : "3%", transition: `height 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 50}ms` }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-night-2 pt-2 text-[10px] sm:text-[11px]">
        <span className="num font-semibold text-slate-500">40 %</span>
        <span className="num font-bold text-primary truncate px-1">← Grenzwert Wien ~74 %</span>
        <span className="num font-semibold text-slate-500">95 %</span>
      </div>
    </div>
  );
}

export default function Method() {
  const { ref: qRef, display: qDisplay } = useCountUp(5000, 1600);

  return (
    <section id="lernplan" className="bg-paper py-20 lg:py-28">
      <div className="wrap">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">Die Methode</span>
            <h2 className="display mt-4 text-[26px] xs:text-[30px] sm:text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Präzision statt Panik.
              <br />
              <span className="text-ink-3">Vier Schritte zum Testtag.</span>
            </h2>
          </Reveal>
        </div>

        {/* Timeline steps */}
        <div className="mt-8 sm:mt-14 grid gap-3.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="card-lift group relative h-full rounded-2xl border border-line bg-paper p-4 xs:p-5 sm:p-7">
                <span className="pointer-events-none absolute right-3 top-2 sm:right-5 sm:top-4 num text-[34px] xs:text-[40px] sm:text-[52px] font-extrabold leading-none text-slate-100/80 transition-colors duration-300 group-hover:text-primary-subtle" aria-hidden="true">
                  {s.n}
                </span>
                <span className="relative inline-flex h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                  {i === 0 && <IconTarget className="h-4 w-4 sm:h-5 sm:w-5" />}
                  {i === 1 && <IconSpark className="h-4 w-4 sm:h-5 sm:w-5" />}
                  {i === 2 && <IconChart className="h-4 w-4 sm:h-5 sm:w-5" />}
                  {i === 3 && <IconFlame className="h-4 w-4 sm:h-5 sm:w-5" />}
                </span>
                <h3 className="relative mt-3.5 sm:mt-5 text-[15px] sm:text-[17px] font-bold text-ink">
                  <span className="num mr-2 text-primary">{s.n}</span>
                  {s.title}
                </h3>
                <p className="relative mt-1.5 sm:mt-2.5 text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">{s.text}</p>
                {i < 3 && (
                  <span className="absolute -right-[22px] top-1/2 z-10 hidden -translate-y-1/2 text-line-2 lg:block" aria-hidden="true">
                    <IconArrowRight className="h-5 w-5" />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Probetests dark panel */}
        <Reveal className="mt-10 sm:mt-16" id="probetests">
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-night p-4 xs:p-5 sm:p-8 text-paper lg:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{ background: "radial-gradient(ellipse 60% 80% at 85% 20%, rgba(220,38,38,0.18), transparent)" }}
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-6 sm:gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow text-[#F87171]">Probetests</span>
                <h2 className="mt-3.5 sm:mt-4 text-[22px] xs:text-[25px] sm:text-[clamp(1.5rem,2.6vw+0.5rem,2.25rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
                  Testtag-Gefühl,
                  <br />
                  bevor es zählt.
                </h2>
                <p className="mt-3.5 sm:mt-5 max-w-md text-[13.5px] sm:text-[15px] leading-relaxed text-slate-400">
                  Am 2. Juli 2027 darfst du nicht zum ersten Mal unter Zeitdruck sitzen. Unsere Simulationen bilden den
                  MedAT 1:1 ab — inklusive Pausenlogik und Auswertung nach Originalschlüssel.
                </p>
                <ul className="mt-4 sm:mt-7 space-y-2 sm:space-y-3">
                  {[
                    "4 vollständige Simulationen in Originalzeit (~4,5 h)",
                    "Live-Ranking gegen alle aktiven Nutzer:innen",
                    "Grenzwert-Prognose für Wien, Innsbruck, Graz & Linz",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-[14px] text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn mt-6 sm:mt-9 w-full sm:w-auto min-h-[46px] justify-center bg-paper px-6 py-3 sm:px-7 sm:py-3.5 text-[14px] sm:text-[15px] font-semibold text-night hover:-translate-y-0.5 hover:bg-slate-200 hover:shadow-xl touch-manipulation"
                  onClick={() => {
                    track("cta_probetest", { location: "probetests_panel" });
                    scrollToId("preise");
                  }}
                >
                  Probetest ansehen
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="rounded-2xl border border-night-2 bg-night-2/40 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400">Score-Verteilung · Simulation 3</p>
                  <span className="num rounded-md bg-primary/15 px-2 py-0.5 sm:py-1 text-[10.5px] sm:text-[11px] font-bold text-[#F87171]">n = 1.204</span>
                </div>
                <div className="mt-5 sm:mt-6">
                  <ScoreBars />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3 border-t border-night-2 pt-4 sm:pt-5 text-center">
                  <div>
                    <p className="num text-base sm:text-xl font-extrabold">61,4 %</p>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-slate-500">Ø beim 1. Test</p>
                  </div>
                  <div>
                    <p className="num text-base sm:text-xl font-extrabold text-primary">74,2 %</p>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-slate-500">Ø nach 12 Wo.</p>
                  </div>
                  <div>
                    <p className="num text-base sm:text-xl font-extrabold">+12,8</p>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-slate-500">Punkte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bento features */}
        <div className="mt-10 sm:mt-16 grid gap-3.5 sm:gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card-lift h-full rounded-2xl border border-line bg-paper p-4 xs:p-5 sm:p-7 lg:p-8">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[16px] xs:text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] text-ink">Analytics, die dein Training steuern</h3>
                <span className="num rounded-md bg-success-subtle px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold text-success shrink-0">+12 % vs. Vorwoche</span>
              </div>
              <p className="mt-2 max-w-lg text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                Jede Session fließt in dein Profil: Themen-Scores, Antwortzeiten, Fehlertypen. Du siehst exakt, wo deine
                nächsten Punkte liegen.
              </p>
              <div className="mt-4 sm:mt-6 rounded-xl border border-line bg-paper-2 p-3 sm:p-5">
                <div className="mb-2.5 sm:mb-3 flex items-center justify-between">
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">Trainingsminuten · KW 08</p>
                  <p className="num text-[11px] sm:text-[12px] font-bold text-ink">390 Min</p>
                </div>
                <MiniBars data={WEEK} />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="card-lift flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-4 xs:p-5 sm:p-7 lg:p-8">
              <div>
                <span className="inline-flex h-9 w-9 xs:h-10 xs:w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                  <IconFlame className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </span>
                <h3 className="mt-3.5 sm:mt-5 text-[16px] xs:text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] text-ink">Drankleiben, ohne dich zu quälen</h3>
                <p className="mt-1.5 sm:mt-2 text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  25-Minuten-Einheiten, Streaks und smarte Erinnerungen. Der Plan weiß, wann Pause produktiver ist als eine
                  weitere Stunde.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex items-center gap-3 rounded-xl bg-night px-3.5 py-3 sm:px-5 sm:py-4 text-paper">
                <IconFlame className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-primary" />
                <div>
                  <p className="num text-base sm:text-lg font-extrabold leading-tight">Ø 47 Tage Streak</p>
                  <p className="text-[11px] sm:text-[12px] text-slate-400">bei aktiven Premium-Nutzer:innen</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={60}>
            <div className="card-lift flex h-full flex-col rounded-2xl border border-line bg-paper p-4 xs:p-5 sm:p-7 lg:p-8">
              <span className="inline-flex h-9 w-9 xs:h-10 xs:w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-violet-subtle text-violet">
                <IconHeart className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </span>
              <h3 className="mt-3.5 sm:mt-5 text-[16px] xs:text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] text-ink">SEK-Training, das wirkt</h3>
              <p className="mt-1.5 sm:mt-2 text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                400+ Gesichtsausdrücke, soziale Dilemmata und Entscheidungsszenarien — trainiert in kurzen täglichen
                Runden, bis Mustererkennung zur Routine wird.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {["Emotionen erkennen", "Soziales Entscheiden", "Drahtbiegen-Checklisten", "Formen spiegeln"].map((t) => (
                  <span key={t} className="rounded-full border border-violet/25 bg-violet-subtle px-2.5 py-0.5 sm:py-1 text-[10.5px] xs:text-[11px] sm:text-[12px] font-semibold text-violet">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={140}>
            <div className="card-lift flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-4 xs:p-5 sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-[16px] xs:text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] text-ink">Eine Fragenbank, kein Fragefriedhof</h3>
                  <p className="mt-1.5 sm:mt-2 max-w-md text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                    Jede Frage kommt mit Erklärung, Schwierigkeitsgrad und typischem Fehlertyp. Veraltete oder doppelte
                    Items fliegen raus — kuratiert von MedAT-Erfahrenen.
                  </p>
                </div>
                <p className="num text-[32px] xs:text-[36px] sm:text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-none text-ink" aria-label="Über 5.000 Übungsfragen">
                  <span ref={qRef}>{qDisplay}</span>
                  <span className="text-primary">+</span>
                </p>
              </div>
              <div className="mt-4 sm:mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  { t: "Biologie", v: "1.420", sec: "BMS" },
                  { t: "Chemie", v: "980", sec: "BMS" },
                  { t: "Physik", v: "860", sec: "BMS" },
                  { t: "Mathematik", v: "740", sec: "BMS" },
                  { t: "KFF-Module", v: "800+", sec: "KFF" },
                  { t: "TV & SEK", v: "400+", sec: "TV/SEK" },
                ].map((m) => (
                  <div key={m.t} className="rounded-xl border border-line bg-paper-2 px-2.5 py-2 sm:px-3 sm:py-2.5 text-center sm:text-left">
                    <p className="num text-[14px] sm:text-lg font-extrabold text-ink">{m.v}</p>
                    <p className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-medium text-ink-3 truncate">{m.t} · {m.sec}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3.5 sm:mt-4 flex items-start xs:items-center gap-2 text-[10.5px] xs:text-[11px] sm:text-[12px] font-semibold text-emerald-800 bg-emerald-50/80 border border-emerald-200/60 rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span className="leading-snug">100% am offiziellen österreichischen MedAT-Stichwortkatalog orientiert mit didaktischen Lösungswegen</span>
              </div>
            </div>
          </Reveal>

          {/* Bento 5: 24/7 MedAT KI-Tutor */}
          <Reveal className="lg:col-span-6" delay={160}>
            <div className="card-lift flex h-full flex-col justify-between rounded-2xl border border-line bg-gradient-to-br from-emerald-950/5 via-paper to-emerald-950/10 p-4 xs:p-5 sm:p-7 lg:p-8">
              <div>
                <span className="inline-flex h-9 w-9 xs:h-10 xs:w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <IconSpark className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </span>
                <div className="mt-3.5 sm:mt-5 flex items-center justify-between gap-2">
                  <h3 className="text-[16px] xs:text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] text-ink">MedAT KI-Tutor 24/7</h3>
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-600/20 shrink-0">Im Dashboard</span>
                </div>
                <p className="mt-1.5 sm:mt-2 text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Verstehe jede Aufgabe sofort: Schritt-für-Schritt-Rechenwege in Physik & Mathe, didaktische Erklärungen in Bio & Chemie sowie erprobte KFF-Gedächtnispalast-Techniken.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 rounded-xl border border-emerald-200/60 bg-paper p-3 sm:p-4 text-[11.5px] xs:text-[12px] sm:text-[13px] text-ink shadow-2xs">
                <p className="font-semibold text-emerald-800">💬 Schnelle Hilfe direkt am Bildschirm:</p>
                <p className="mt-1 text-[11px] xs:text-[11.5px] sm:text-[12px] text-ink-3 italic">„Erkläre mir den Unterschied zwischen Mitose und Meiose mit den typischen MedAT-Prüfungsfallen.“</p>
              </div>
            </div>
          </Reveal>

          {/* Bento 6: Mistakes Hub / Schwachstellen-Drill */}
          <Reveal className="lg:col-span-6" delay={180}>
            <div className="card-lift flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-4 xs:p-5 sm:p-7 lg:p-8">
              <div>
                <span className="inline-flex h-9 w-9 xs:h-10 xs:w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                  <IconTarget className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </span>
                <div className="mt-3.5 sm:mt-5 flex items-center justify-between gap-2">
                  <h3 className="text-[16px] xs:text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] text-ink">Automatischer Schwachstellen-Drill</h3>
                  <span className="num rounded-md bg-rose-50 px-2 py-0.5 text-[10px] xs:text-[10.5px] sm:text-[11px] font-bold text-primary shrink-0">Fehler-Hub</span>
                </div>
                <p className="mt-1.5 sm:mt-2 text-[13px] xs:text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Falsch gelöste Fragen landen automatisch in deinem persönlichen Fehler-Hub. Der Drill serviert sie dir im gezielten Spaced-Repetition-Intervall, bis kein Punkt mehr verloren geht.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex items-center justify-between rounded-xl bg-paper-2 border border-line px-3.5 py-3 sm:px-5 sm:py-3.5">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs sm:text-sm">↺</span>
                  <div>
                    <p className="text-[12px] sm:text-[13px] font-bold text-ink">Spaced Repetition Drill</p>
                    <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] text-ink-3">Verwandelt Wissenslücken systematisch in Stärken</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
