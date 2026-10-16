import { useState } from "react";
import { QUIZ_QUESTIONS } from "../lib/data";
import { Reveal, scrollToId, toast, track } from "../lib/core";
import { IconArrowRight, IconCheck, IconClose } from "../lib/icons";

const BENEFITS = [
  "24 Fragen durch alle 4 Testteile — BMS, KFF, TV, SEK",
  "Sofort-Auswertung mit Stärken-Schwächen-Profil",
  "Basis für deinen persönlichen KI-Lernplan",
  "Kostenlos. Keine Kreditkarte, kein Kleingedrucktes.",
];

export default function Quiz() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const q = QUIZ_QUESTIONS[idx];
  const score = answers.filter(Boolean).length;
  const isLast = idx === QUIZ_QUESTIONS.length - 1;

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    setAnswers((a) => [...a, i === q.correct]);
  };

  const nextQ = () => {
    if (isLast) {
      const finalScore = answers.filter(Boolean).length;
      track("quiz_demo_complete", { score: finalScore, total: QUIZ_QUESTIONS.length });
      setDone(true);
    } else {
      setIdx((v) => v + 1);
      setPicked(null);
    }
  };

  const reset = () => {
    setIdx(0);
    setPicked(null);
    setAnswers([]);
    setDone(false);
  };

  const startFull = () => {
    track("cta_einstufung", { location: "quiz_section" });
    toast("Fast geschafft — sichere dir unten deinen kostenlosen Zugang.");
    scrollToId("countdown");
  };

  return (
    <section id="uebungsfragen" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="hex-pattern pointer-events-none absolute inset-0 opacity-[0.015]" aria-hidden="true" />
      <div className="wrap relative grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        {/* Sticky pitch */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow">Einstufungstest</span>
            <h2 className="display mt-4 text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Weißt du, wo du stehst?
              <br />
              Finde es in <span className="text-primary">8 Minuten</span> heraus.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
              9 von 10 Kandidat:innen überschätzen ihren BMS-Stand und unterschätzen KFF. Der Einstufungstest liefert dir
              ein ehrliches Bild — und die Grundlage für einen Lernplan, der deine Zeit nicht verschwendet.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 space-y-3.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-ink-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-subtle text-success" aria-hidden="true">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <button className="btn btn-primary mt-9" onClick={startFull}>
              Kostenloser Einstufungstest
              <IconArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-4 text-[13px] font-medium text-ink-3">
              Ø starten Nutzer:innen mit <span className="num font-bold text-ink">41 %</span> — nach 12 Wochen:{" "}
              <span className="num font-bold text-primary">67 %</span>
            </p>
          </Reveal>
        </div>

        {/* Interactive demo */}
        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-lg">
            <div className="flex items-center justify-between border-b border-line bg-paper-2 px-6 py-4">
              <p className="num text-[12px] font-bold uppercase tracking-[0.12em] text-ink-3">
                Live-Demo · 3 Original-Fragen
              </p>
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i < idx || done ? "w-6 bg-primary" : i === idx ? "w-4 bg-primary/50" : "w-2 bg-line-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            {!done ? (
              <div key={idx} className="animate-fade-up p-6 lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
                    style={{ background: q.moduleBg, color: q.moduleColor }}
                  >
                    {q.module}
                  </span>
                  <span className="num text-[11px] font-semibold text-ink-4">Frage {idx + 1}/{QUIZ_QUESTIONS.length}</span>
                </div>

                <h3 className="mt-5 text-[19px] font-bold leading-snug tracking-[-0.01em] text-ink">{q.question}</h3>

                <div className="mt-6 space-y-3" role="group" aria-label="Antwortmöglichkeiten">
                  {q.options.map((opt, i) => {
                    const isCorrect = i === q.correct;
                    const isPicked = i === picked;
                    const answered = picked !== null;
                    return (
                      <button
                        key={opt}
                        onClick={() => pick(i)}
                        disabled={answered}
                        aria-pressed={isPicked}
                        className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-200 ${
                          !answered
                            ? "border-line bg-paper hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-subtle/60 hover:shadow-sm"
                            : isCorrect
                              ? "border-success/60 bg-success-subtle text-ink"
                              : isPicked
                                ? "animate-shake border-primary/60 bg-primary-subtle text-ink"
                                : "border-line opacity-50"
                        }`}
                      >
                        <span>
                          <span className="num mr-3 text-[12px] font-bold text-ink-4">{String.fromCharCode(65 + i)}</span>
                          {opt}
                        </span>
                        {answered && isCorrect && <IconCheck className="h-5 w-5 text-success" />}
                        {answered && isPicked && !isCorrect && <IconClose className="h-5 w-5 text-primary" />}
                      </button>
                    );
                  })}
                </div>

                {picked !== null && (
                  <div className="animate-fade-up mt-6">
                    <div
                      className={`rounded-xl border p-4 text-[14px] leading-relaxed ${
                        picked === q.correct
                          ? "border-success/40 bg-success-subtle text-ink"
                          : "border-primary/25 bg-primary-subtle text-ink"
                      }`}
                    >
                      <p className="mb-1 text-[12px] font-bold uppercase tracking-wide">
                        {picked === q.correct ? "✓ Richtig" : "✗ Leider nein"}
                      </p>
                      {q.explanation}
                    </div>
                    <button className="btn btn-secondary btn-sm mt-5 border-night bg-night text-paper hover:bg-night-2" onClick={nextQ}>
                      {isLast ? "Auswertung ansehen" : "Nächste Frage"}
                      <IconArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-pop-in p-6 text-center lg:p-10">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary/15 bg-primary-subtle">
                  <span className="num text-3xl font-extrabold text-ink">
                    {score}<span className="text-lg text-ink-3">/{QUIZ_QUESTIONS.length}</span>
                  </span>
                </div>
                <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.02em] text-ink">
                  {score === 3
                    ? "Starker Start — aber der MedAT ist härter."
                    : score === 2
                      ? "Solide. Jetzt kommt die Präzision."
                      : "Gut, dass du es jetzt weißt — nicht am Testtag."}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-2">
                  Der vollständige Einstufungstest analysiert 24 Fragen über alle Testteile und erstellt dein persönliches
                  Stärken-Schwächen-Profil — die Basis deines KI-Lernplans.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <button className="btn btn-primary" onClick={startFull}>
                    Vollen Einstufungstest starten
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                  <button className="link-tertiary text-sm" onClick={reset}>
                    Demo wiederholen
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
