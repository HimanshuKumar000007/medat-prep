import { useState } from "react";
import { QUIZ_QUESTIONS } from "../lib/data";
import { Reveal, scrollToId, toast, track } from "../lib/core";
import { IconArrowRight, IconCheck, IconClose } from "../lib/icons";

const BENEFITS = [
  "Ziel-Uni (Wien, Graz, Ibk., Linz) & Studienrichtung (Human- vs. Zahnmedizin)",
  "Individuelles Zeitbudget & aktueller Vorbereitungsstand",
  "Maßgeschneiderte Tagesmissionen für deine persönlichen Schwachstellen",
  "100 % kostenlos — sofortiger Zugriff auf deinen Lernplan & 24/7 Lernhilfe",
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
    track("cta_onboarding", { location: "quiz_section" });
    window.location.hash = "#/onboarding";
  };

  return (
    <section id="uebungsfragen" className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-28">
      <div className="hex-pattern pointer-events-none absolute inset-0 opacity-[0.015]" aria-hidden="true" />
      <div className="wrap relative grid gap-10 sm:gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        {/* Sticky pitch */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow">Lernplan-Konfiguration</span>
            <h2 className="display mt-4 text-[24px] xs:text-[28px] sm:text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Dein persönlicher MedAT-Fahrplan
              <br />
              in <span className="text-primary">unter 2 Minuten</span>.
            </h2>
            <p className="mt-3.5 sm:mt-5 text-[14px] xs:text-[15px] sm:text-[16px] leading-relaxed text-ink-2">
              Konfiguriere deinen Lernplan exakt nach deiner Wunsch-Universität, deinem Zeitbudget und deinem aktuellen
              Vorbereitungsstand — für ein fokussiertes Training ohne Zeitverschwendung.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-5 sm:mt-8 space-y-2.5 sm:space-y-3.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 sm:gap-3 text-[13.5px] sm:text-[15px] text-ink-2">
                  <span className="mt-0.5 flex h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-success-subtle text-success" aria-hidden="true">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <button className="btn btn-primary mt-6 sm:mt-9 w-full sm:w-auto min-h-[48px] justify-center touch-manipulation cursor-pointer" onClick={startFull}>
              Persönlichen Lernplan erstellen
              <IconArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-3 sm:mt-4 text-[11.5px] xs:text-[12px] sm:text-[13px] font-medium text-ink-3">
              In 5 geführten Schritten — <span className="num font-bold text-emerald-700">100 % kostenlos</span> & sofort einsatzbereit
            </p>
          </Reveal>
        </div>

        {/* Interactive demo */}
        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-lg">
            <div className="flex items-center justify-between border-b border-line bg-paper-2 px-4 py-3 sm:px-6 sm:py-4">
              <p className="num text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em] text-ink-3">
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
              <div key={idx} className="animate-fade-up p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="rounded-md px-2.5 py-1 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wide"
                    style={{ background: q.moduleBg, color: q.moduleColor }}
                  >
                    {q.module}
                  </span>
                  <span className="num text-[11px] font-semibold text-ink-4">Frage {idx + 1}/{QUIZ_QUESTIONS.length}</span>
                </div>

                <h3 className="mt-4 sm:mt-5 text-[17px] sm:text-[19px] font-bold leading-snug tracking-[-0.01em] text-ink">{q.question}</h3>

                <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3" role="group" aria-label="Antwortmöglichkeiten">
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
                        className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3 py-3 xs:px-3.5 sm:px-4 sm:py-3.5 text-left text-[13.5px] xs:text-[14px] sm:text-[15px] font-medium transition-all duration-200 min-h-[46px] touch-manipulation ${
                          !answered
                            ? "border-line bg-paper hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-subtle/60 hover:shadow-sm"
                            : isCorrect
                              ? "border-success/60 bg-success-subtle text-ink"
                              : isPicked
                                ? "animate-shake border-primary/60 bg-primary-subtle text-ink"
                                : "border-line opacity-50"
                        }`}
                      >
                        <span className="flex items-center min-w-0 flex-1 pr-1.5">
                          <span className="num mr-2 xs:mr-2.5 sm:mr-3 text-[11px] sm:text-[12px] font-bold text-ink-4 shrink-0">{String.fromCharCode(65 + i)}</span>
                          <span className="leading-snug break-words">{opt}</span>
                        </span>
                        {answered && isCorrect && <IconCheck className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-success" />}
                        {answered && isPicked && !isCorrect && <IconClose className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-primary" />}
                      </button>
                    );
                  })}
                </div>

                {picked !== null && (
                  <div className="animate-fade-up mt-5 sm:mt-6">
                    <div
                      className={`rounded-xl border p-3.5 sm:p-4 text-[13px] sm:text-[14px] leading-relaxed ${
                        picked === q.correct
                          ? "border-success/40 bg-success-subtle text-ink"
                          : "border-primary/25 bg-primary-subtle text-ink"
                      }`}
                    >
                      <p className="mb-1 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wide">
                        {picked === q.correct ? "✓ Richtig" : "✗ Leider nein"}
                      </p>
                      {q.explanation}
                    </div>
                    <button className="btn btn-secondary btn-sm mt-4 sm:mt-5 w-full sm:w-auto min-h-[44px] justify-center border-night bg-night text-paper hover:bg-night-2 touch-manipulation" onClick={nextQ}>
                      {isLast ? "Auswertung ansehen" : "Nächste Frage"}
                      <IconArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-pop-in p-4 xs:p-5 text-center sm:p-6 lg:p-10">
                <div className="mx-auto flex h-18 w-18 xs:h-20 xs:w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-4 border-primary/15 bg-primary-subtle">
                  <span className="num text-xl xs:text-2xl sm:text-3xl font-extrabold text-ink">
                    {score}<span className="text-sm xs:text-base sm:text-lg text-ink-3">/{QUIZ_QUESTIONS.length}</span>
                  </span>
                </div>
                <h3 className="mt-4 sm:mt-6 text-[18px] xs:text-[19px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-ink">
                  {score === 3
                    ? "Starker Start — aber der MedAT verlangt Ausdauer."
                    : score === 2
                      ? "Solide Basis. Jetzt kommt das gezielte Feintuning."
                      : "Gut, dass du es jetzt weißt — nicht erst am Testtag."}
                </h3>
                <p className="mx-auto mt-2.5 sm:mt-3 max-w-md text-[13.5px] sm:text-[15px] leading-relaxed text-ink-2">
                  Konfiguriere jetzt deinen individuellen MedAT-Lernplan abgestimmt auf deinen aktuellen Wissensstand,
                  deine Ziel-Universität und deine tägliche Lernzeit.
                </p>
                <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                  <button className="btn btn-primary w-full sm:w-auto min-h-[46px] justify-center touch-manipulation cursor-pointer" onClick={startFull}>
                    Persönlichen Lernplan erstellen
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                  <button className="link-tertiary text-sm py-2 touch-manipulation cursor-pointer" onClick={reset}>
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
