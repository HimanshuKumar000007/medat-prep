import { useEffect, useRef, useState } from "react";
import { MODULES_H, MODULES_Z, STATS, TICKER_ITEMS, type ExamModule, type Stat } from "../lib/data";
import { Reveal, nextMedAT, reducedMotion, scrollToId, track, useCountUp } from "../lib/core";
import {
  IconArrowRight,
  IconCalendar,
  IconClock,
  IconHeart,
  IconMolecule,
  IconPuzzle,
  IconTextLines,
  IconUsers,
  IconWire,
} from "../lib/icons";

const ICONS = {
  molecule: IconMolecule,
  puzzle: IconPuzzle,
  text: IconTextLines,
  heart: IconHeart,
  wire: IconWire,
};

/* ---------------- Ticker ---------------- */
export function TopicTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="marquee-paused marquee-mask overflow-hidden border-y border-night-2 bg-night py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="num text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-400">{item}</span>
            <span className="text-sm text-primary">✚</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Stats band ---------------- */
function StatItem({ value, suffix, label, aria, decimals = 0 }: Stat) {
  const { ref, display } = useCountUp(value, 1600, decimals);
  return (
    <div className="flex flex-col gap-1.5 px-6 py-8 first:pl-0 lg:px-10">
      <span ref={ref} className="display-num text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] text-ink" aria-label={aria} role="text">
        {display}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="text-[13px] font-medium text-ink-3">{label}</span>
    </div>
  );
}

export function StatsBand() {
  return (
    <section aria-label="MedAT in Zahlen" className="border-b border-line bg-paper">
      <div className="wrap">
        <Reveal>
          <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Animated weight bar ---------------- */
function WeightBar({ pct, color, delay = 0 }: { pct: number; color: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      setW(pct);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        window.setTimeout(() => setW(pct), delay);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref} className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className="h-full rounded-full"
        style={{
          width: `${w}%`,
          background: color,
          transition: "width 1.1s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  );
}

/* ---------------- Module row ---------------- */
function ModuleRow({ mod, index }: { mod: ExamModule; index: number }) {
  const Icon = ICONS[mod.icon];
  return (
    <Reveal delay={index * 80}>
      <article className="card-lift rounded-2xl border border-line bg-paper p-6 lg:p-7">
        <div className="flex items-start gap-5">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
            style={{ background: mod.accentSubtle, color: mod.accent }}
            aria-hidden="true"
          >
            <Icon className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-bold tracking-[-0.01em] text-ink">
                <span className="num mr-2.5 rounded-md px-1.5 py-0.5 text-[12px] font-extrabold" style={{ background: mod.accentSubtle, color: mod.accent }}>
                  {mod.code}
                </span>
                {mod.name}
              </h3>
              <span className="num text-2xl font-extrabold text-ink" aria-label={`${mod.weight} Prozent Gewichtung`}>
                {mod.weight}<span className="text-base text-ink-4">%</span>
              </span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{mod.desc}</p>
            <div className="mt-4">
              <WeightBar pct={mod.weight * 2.5} color={mod.barColor} delay={index * 120} />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Themen">
              {mod.topics.map((t) => (
                <li key={t} className="rounded-full border border-line bg-paper-2 px-3 py-1 text-[12px] font-semibold text-ink-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ---------------- Exam structure section ---------------- */
export default function Exam() {
  const [variant, setVariant] = useState<"H" | "Z">("H");
  const modules = variant === "H" ? MODULES_H : MODULES_Z;
  const next = nextMedAT();

  return (
    <section id="ueber-medat" className="relative bg-paper-2 py-20 lg:py-28">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Über den MedAT</span>
            <h2 className="display mt-4 text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Ein Testtag. Vier Disziplinen.
              <br />
              <span className="text-primary">Ein Versuch pro Jahr.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-2">
              Der MedAT ist kein Wissenstest, den man nebenbei besteht — er ist ein Ranking. Wer die Gewichtung kennt,
              trainiert die richtigen Dinge zuerst.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex rounded-xl border border-line bg-paper p-1.5" role="tablist" aria-label="Testvariante wählen">
              {(
                [
                  { id: "H", label: "MedAT-H", sub: "Humanmedizin" },
                  { id: "Z", label: "MedAT-Z", sub: "Zahnmedizin" },
                ] as const
              ).map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={variant === t.id}
                  onClick={() => setVariant(t.id)}
                  className={`flex-1 rounded-lg px-5 py-2.5 text-left transition-all duration-300 sm:flex-none sm:px-7 ${
                    variant === t.id ? "bg-night text-paper shadow-md" : "text-ink-2 hover:bg-paper-2"
                  }`}
                >
                  <span className="block text-sm font-bold">{t.label}</span>
                  <span className={`block text-[11px] font-medium ${variant === t.id ? "text-slate-400" : "text-ink-4"}`}>{t.sub}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-14">
          {/* Modules */}
          <div key={variant} className="animate-fade-up space-y-5">
            {modules.map((m, i) => (
              <ModuleRow key={m.id} mod={m} index={i} />
            ))}
            <Reveal delay={200}>
              <p className="flex items-center gap-2 px-1 text-[13px] font-medium text-ink-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                Gewichtung im Gesamtergebnis · Quelle: medizinstudieren.at
              </p>
            </Reveal>
          </div>

          {/* Facts + quotas rail */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-line bg-night p-7 text-paper">
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400">Testtag-Fakten</p>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3.5">
                    <IconCalendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-[15px] font-semibold">{next.label}</p>
                      <p className="text-[13px] text-slate-400">{next.registrationLabel}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-[15px] font-semibold">ca. 08:00–17:00 Uhr</p>
                      <p className="text-[13px] text-slate-400">~4,5 Stunden reine Testzeit</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <IconUsers className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-[15px] font-semibold">16.880 Anmeldungen (2026)</p>
                      <p className="text-[13px] text-slate-400">auf 1.950 Studienplätze — alle 4 Unis</p>
                    </div>
                  </li>
                </ul>
                <p className="num mt-6 border-t border-night-2 pt-5 text-[13px] text-slate-400">
                  Teilnahmegebühr <span className="font-extrabold text-paper">110 €</span> · ein Termin, österreichweit
                </p>
              </div>
            </Reveal>

            <Reveal delay={180} id="quoten">
              <div className="card-lift rounded-2xl border border-line bg-paper p-7">
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink-3">Quoten & Kontingente</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  Die Studienplätze werden fix vergeben — du konkurrierst nur innerhalb deiner Quote:
                </p>
                <div className="mt-5 flex h-3.5 overflow-hidden rounded-full" role="img" aria-label="Quoten: 75 Prozent Österreich, 20 Prozent EU, 5 Prozent Drittstaaten">
                  <span className="w-[75%] bg-primary" />
                  <span className="w-[20%] bg-[#F87171]" />
                  <span className="w-[5%] bg-line-2" />
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { pct: "75 %", label: "mit österreichischem Maturazeugnis", c: "#DC2626" },
                    { pct: "20 %", label: "EU-/EWR-Staatsangehörige", c: "#F87171" },
                    { pct: "5 %", label: "Drittstaaten", c: "#CBD5E1" },
                  ].map((q) => (
                    <li key={q.pct} className="flex items-center gap-3 text-[14px]">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: q.c }} aria-hidden="true" />
                      <span className="num font-extrabold text-ink">{q.pct}</span>
                      <span className="text-ink-2">{q.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <button
                className="btn btn-primary w-full"
                onClick={() => {
                  track("cta_einstufung", { location: "exam_section" });
                  scrollToId("uebungsfragen");
                }}
              >
                Einstufungstest starten
                <IconArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
