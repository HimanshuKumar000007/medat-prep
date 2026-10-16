import { useEffect, useRef, useState } from "react";
import { Reveal, reducedMotion, scrollToId, track, useCountUp } from "../lib/core";
import { IconArrowRight, IconChart, IconFlame, IconHeart, IconSpark, IconTarget } from "../lib/icons";

const STEPS = [
  {
    n: "01",
    title: "Einstufung",
    text: "24 Fragen, 8 Minuten, ein ehrliches Bild: Wo stehst du in BMS, KFF, TV und SEK — relativ zu allen anderen Kandidat:innen?",
  },
  {
    n: "02",
    title: "KI-Lernplan",
    text: "Der Plan wird wöchentlich neu berechnet: Schwächen bekommen Fokuszeit, Stärken nur Erhaltung. Keine Stunde verschwendet.",
  },
  {
    n: "03",
    title: "Adaptives Training",
    text: "5.000+ Fragen mit Erklärungen. Der Algorithmus serviert dir genau die Frage, die du jetzt brauchst — im richtigen Schwierigkeitsgrad.",
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
    <div ref={ref} className="flex h-40 gap-3">
      {data.map((b, i) => (
        <div key={b.d} className="flex flex-1 flex-col items-center justify-end gap-1.5">
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
      <div ref={ref} className="flex h-44 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${i === 7 ? "bg-primary" : "bg-slate-700"}`}
            style={{ height: on ? `${h}%` : "3%", transition: `height 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 50}ms` }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between border-t border-night-2 pt-2">
        <span className="num text-[11px] font-semibold text-slate-500">40 %</span>
        <span className="num text-[11px] font-bold text-primary">← Grenzwert Wien 2025: ~74 %</span>
        <span className="num text-[11px] font-semibold text-slate-500">95 %</span>
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
            <h2 className="display mt-4 text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Präzision statt Panik.
              <br />
              <span className="text-ink-3">Vier Schritte zum Testtag.</span>
            </h2>
          </Reveal>
        </div>

        {/* Timeline steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="card-lift group relative h-full rounded-2xl border border-line bg-paper p-7">
                <span className="pointer-events-none absolute right-5 top-4 num text-[52px] font-extrabold leading-none text-slate-100 transition-colors duration-300 group-hover:text-primary-subtle" aria-hidden="true">
                  {s.n}
                </span>
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                  {i === 0 && <IconTarget className="h-5 w-5" />}
                  {i === 1 && <IconSpark className="h-5 w-5" />}
                  {i === 2 && <IconChart className="h-5 w-5" />}
                  {i === 3 && <IconFlame className="h-5 w-5" />}
                </span>
                <h3 className="relative mt-5 text-[17px] font-bold text-ink">
                  <span className="num mr-2 text-primary">{s.n}</span>
                  {s.title}
                </h3>
                <p className="relative mt-2.5 text-[14px] leading-relaxed text-ink-2">{s.text}</p>
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
        <Reveal className="mt-16" id="probetests">
          <div className="relative overflow-hidden rounded-[24px] bg-night p-8 text-paper lg:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{ background: "radial-gradient(ellipse 60% 80% at 85% 20%, rgba(220,38,38,0.18), transparent)" }}
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow text-[#F87171]">Probetests</span>
                <h2 className="mt-4 text-[clamp(1.6rem,2.6vw+0.5rem,2.25rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
                  Testtag-Gefühl,
                  <br />
                  bevor es zählt.
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-400">
                  Am 2. Juli 2027 darfst du nicht zum ersten Mal unter Zeitdruck sitzen. Unsere Simulationen bilden den
                  MedAT 1:1 ab — inklusive Pausenlogik und Auswertung nach Originalschlüssel.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "4 vollständige Simulationen in Originalzeit (~4,5 h)",
                    "Live-Ranking gegen alle aktiven Nutzer:innen",
                    "Grenzwert-Prognose für Wien, Innsbruck, Graz & Linz",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn mt-9 bg-paper px-7 py-3.5 text-[15px] font-semibold text-night hover:-translate-y-0.5 hover:bg-slate-200 hover:shadow-xl"
                  onClick={() => {
                    track("cta_probetest", { location: "probetests_panel" });
                    scrollToId("preise");
                  }}
                >
                  Probetest ansehen
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="rounded-2xl border border-night-2 bg-night-2/40 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400">Score-Verteilung · Simulation 3</p>
                  <span className="num rounded-md bg-primary/15 px-2 py-1 text-[11px] font-bold text-[#F87171]">n = 1.204</span>
                </div>
                <div className="mt-6">
                  <ScoreBars />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-night-2 pt-5 text-center">
                  <div>
                    <p className="num text-xl font-extrabold">61,4 %</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Ø beim 1. Test</p>
                  </div>
                  <div>
                    <p className="num text-xl font-extrabold text-primary">74,2 %</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Ø nach 12 Wochen</p>
                  </div>
                  <div>
                    <p className="num text-xl font-extrabold">+12,8</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Prozentpunkte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bento features */}
        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card-lift h-full rounded-2xl border border-line bg-paper p-7 lg:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[19px] font-bold tracking-[-0.01em] text-ink">Analytics, die dein Training steuern</h3>
                <span className="num rounded-md bg-success-subtle px-2 py-1 text-[11px] font-bold text-success">+12 % vs. Vorwoche</span>
              </div>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-ink-2">
                Jede Session fließt in dein Profil: Themen-Scores, Antwortzeiten, Fehlertypen. Du siehst exakt, wo deine
                nächsten Punkte liegen.
              </p>
              <div className="mt-6 rounded-xl border border-line bg-paper-2 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">Trainingsminuten · KW 08</p>
                  <p className="num text-[12px] font-bold text-ink">390 Min</p>
                </div>
                <MiniBars data={WEEK} />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="card-lift flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-7 lg:p-8">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                  <IconFlame className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[19px] font-bold tracking-[-0.01em] text-ink">Drankleiben, ohne dich zu quälen</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                  25-Minuten-Einheiten, Streaks und smarte Erinnerungen. Der Plan weiß, wann Pause produktiver ist als eine
                  weitere Stunde.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-night px-5 py-4 text-paper">
                <IconFlame className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="num text-lg font-extrabold leading-tight">Ø 47 Tage Streak</p>
                  <p className="text-[12px] text-slate-400">bei aktiven Premium-Nutzer:innen</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={60}>
            <div className="card-lift flex h-full flex-col rounded-2xl border border-line bg-paper p-7 lg:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-subtle text-violet">
                <IconHeart className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[19px] font-bold tracking-[-0.01em] text-ink">SEK-Training, das wirkt</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                400+ Gesichtsausdrücke, soziale Dilemmata und Entscheidungsszenarien — trainiert in kurzen täglichen
                Runden, bis Mustererkennung zur Routine wird.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Emotionen erkennen", "Soziales Entscheiden", "Drahtbiegen-Checklisten", "Formen spiegeln"].map((t) => (
                  <span key={t} className="rounded-full border border-violet/25 bg-violet-subtle px-3 py-1 text-[12px] font-semibold text-violet">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={140}>
            <div className="card-lift flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-7 lg:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-[19px] font-bold tracking-[-0.01em] text-ink">Eine Fragenbank, kein Fragefriedhof</h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-2">
                    Jede Frage kommt mit Erklärung, Schwierigkeitsgrad und typischem Fehlertyp. Veraltete oder doppelte
                    Items fliegen raus — kuratiert von MedAT-Erfahrenen.
                  </p>
                </div>
                <p className="num text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-none text-ink" aria-label="Über 5.000 Übungsfragen">
                  <span ref={qRef}>{qDisplay}</span>
                  <span className="text-primary">+</span>
                </p>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { t: "Biologie", v: "1.420" },
                  { t: "Chemie", v: "980" },
                  { t: "Physik", v: "860" },
                  { t: "Mathematik", v: "740" },
                ].map((m) => (
                  <div key={m.t} className="rounded-xl border border-line bg-paper-2 px-4 py-3">
                    <p className="num text-lg font-extrabold text-ink">{m.v}</p>
                    <p className="text-[12px] font-medium text-ink-3">{m.t} · BMS</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
