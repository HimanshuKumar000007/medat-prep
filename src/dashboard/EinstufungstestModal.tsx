import { useEffect, useState } from "react";
import { toast } from "../lib/core";
import { IconArrowRight, IconCheck, IconClose, IconClock } from "../lib/icons";
import { DIconSparkles, DIconTrendUp } from "./icons";
import type { PracticeSeed, Screen } from "./Shell";

export interface DiagnosticResult {
  score: number;
  total: number;
  percentage: number;
  completedAt: number;
  breakdown: {
    bms: { correct: number; total: number };
    kff: { correct: number; total: number };
    tv: { correct: number; total: number };
    sek: { correct: number; total: number };
  };
}

interface DiagnosticQuestion {
  id: string;
  pillar: "BMS" | "KFF" | "TV" | "SEK";
  subtest: string;
  badgeColor: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "diag-1",
    pillar: "BMS",
    subtest: "Biologie",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Welches Zellorganell ist primär für die ATP-Synthese über oxidative Phosphorylierung zuständig?",
    options: [
      "Golgi-Apparat",
      "Mitochondrium",
      "Endoplasmatisches Retikulum",
      "Lysosom",
      "Ribosom",
    ],
    correct: 1,
    explanation:
      "Mitochondrien sind die Kraftwerke der Zelle; an der inneren Mitochondrienmembran findet die Atmungskette statt.",
  },
  {
    id: "diag-2",
    pillar: "BMS",
    subtest: "Chemie",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Welcher pH-Wert kennzeichnet eine neutrale wässrige Lösung bei standardmäßigen 25 °C?",
    options: ["pH 0", "pH 5", "pH 7", "pH 14", "pH 1"],
    correct: 2,
    explanation:
      "Bei 25 °C entspricht pH 7 dem Autoprotolyse-Gleichgewicht des Wassers mit [H₃O⁺] = 10⁻⁷ mol/L.",
  },
  {
    id: "diag-3",
    pillar: "BMS",
    subtest: "Physik",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Welche Einheit beschreibt die physikalische Arbeit bzw. Energie im SI-Einheitensystem?",
    options: ["Watt (W)", "Newton (N)", "Joule (J)", "Pascal (Pa)", "Volt (V)"],
    correct: 2,
    explanation:
      "Arbeit und Energie werden in Joule (J = N·m = kg·m²/s²) gemessen. Watt ist Leistung, Pascal Druck.",
  },
  {
    id: "diag-4",
    pillar: "BMS",
    subtest: "Mathematik",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Eine Lösung mit 20 % Wirkstoffkonzentration wird im Verhältnis 1:3 mit Wasser verdünnt. Wie hoch ist die neue Konzentration?",
    options: ["10 %", "6,67 %", "5 %", "2,5 %", "15 %"],
    correct: 2,
    explanation:
      "1 Teil 20%-ige Lösung + 3 Teile Wasser = 4 Teile Gesamtvolumen. 20 % / 4 = 5 %.",
  },
  {
    id: "diag-5",
    pillar: "KFF",
    subtest: "Zahlenfolgen",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "3 · 7 · 15 · 31 · 63 · … — Welche Zahl folgt als nächstes in dieser Reihe?",
    options: ["120", "127", "128", "131", "125"],
    correct: 1,
    explanation:
      "Bildungsvorschrift: x_{n+1} = 2 · x_n + 1 (oder Differenzen: +4, +8, +16, +32, +64). 63 + 64 = 127.",
  },
  {
    id: "diag-6",
    pillar: "KFF",
    subtest: "Figuren zusammensetzen",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "Zwei gleichschenklige rechtwinklige Dreiecke mit Kathetenlänge a werden an ihren Hypotenusen zusammengefügt. Welche Figur entsteht?",
    options: [
      "Ein gleichseitiges Dreieck",
      "Ein Quadrat mit Seitenlänge a",
      "Ein Rechteck mit Seitenverhältnis 1:2",
      "Ein Parallelogramm mit Höhenmaß 2a",
      "Ein Sechseck",
    ],
    correct: 1,
    explanation:
      "Die beiden Dreiecke ergänzen sich an der Hypotenuse exakt zu einem Quadrat mit der Seitenlänge a.",
  },
  {
    id: "diag-7",
    pillar: "TV",
    subtest: "Textverständnis",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    question: "Text: 'Während akute Entzündungen primär neutrophile Granulozyten rekrutieren, dominieren bei chronischen Verläufen mononukleäre Zellen wie Makrophagen und Lymphozyten.' Welche Aussage folgt zwingend?",
    options: [
      "Neutrophile Granulozyten sind die Hauptakteure bei chronischen Entzündungen.",
      "Makrophagen treten bei akuten Entzündungen niemals auf.",
      "Das vorherrschende Zellbild unterscheidet sich typischerweise zwischen akuten und chronischen Entzündungen.",
      "Lymphozyten verhindern die Entstehung von Entzündungen.",
      "Akute Entzündungen heilen stets ohne Gewebsschaden ab.",
    ],
    correct: 2,
    explanation:
      "Aus dem Text geht direkt hervor, dass bei akut Neutrophile und bei chronisch Makrophagen/Lymphozyten dominieren — das Zellbild differiert.",
  },
  {
    id: "diag-8",
    pillar: "SEK",
    subtest: "Soziales Entscheiden",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    question: "Ein besorgter Patient bittet vor einer Routine-OP um ein ausführliches Aufklärungsgespräch, obwohl der Stationsablauf zeitlich extrem getaktet ist. Welche Reaktion ist aus ärztlicher Sicht am angemessensten?",
    options: [
      "Das Gespräch auf nach der Operation vertagen.",
      "Kurz und empathisch die Hauptsorgen anhören und einen festen Termin vor Narkosebeginn zusichern.",
      "Dem Patienten mitteilen, dass Routine-OPs keinerlei Ängste rechtfertigen.",
      "Die OP ohne Gespräch absagen.",
      "Das Pflegepersonal bitten, die ärztliche Aufklärung zu übernehmen.",
    ],
    correct: 1,
    explanation:
      "Ärztliche Aufklärung und emotionale Beruhigung vor einem Eingriff sind prioritär und erfordern empathische, verlässliche Kommunikation ohne Geringschätzung.",
  },
];

interface EinstufungstestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNav: (s: Screen, seed?: PracticeSeed) => void;
  onResultSaved?: (result: DiagnosticResult) => void;
}

export default function EinstufungstestModal({
  isOpen,
  onClose,
  onNav,
  onResultSaved,
}: EinstufungstestModalProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(480); // 8 minutes = 480 seconds
  const [isFinished, setIsFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);

  // 8-minute countdown timer
  useEffect(() => {
    if (!isOpen || isFinished) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, isFinished]);

  if (!isOpen) return null;

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIdx];
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const handleSelect = (optionIdx: number) => {
    if (isFinished) return;
    setAnswers((prev) => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const handleFinish = () => {
    setIsFinished(true);

    let bmsCorrect = 0;
    let bmsTotal = 0;
    let kffCorrect = 0;
    let kffTotal = 0;
    let tvCorrect = 0;
    let tvTotal = 0;
    let sekCorrect = 0;
    let sekTotal = 0;

    DIAGNOSTIC_QUESTIONS.forEach((q, idx) => {
      const isRight = answers[idx] === q.correct;
      if (q.pillar === "BMS") {
        bmsTotal++;
        if (isRight) bmsCorrect++;
      } else if (q.pillar === "KFF") {
        kffTotal++;
        if (isRight) kffCorrect++;
      } else if (q.pillar === "TV") {
        tvTotal++;
        if (isRight) tvCorrect++;
      } else if (q.pillar === "SEK") {
        sekTotal++;
        if (isRight) sekCorrect++;
      }
    });

    const totalScore = bmsCorrect + kffCorrect + tvCorrect + sekCorrect;
    const totalQuestions = DIAGNOSTIC_QUESTIONS.length;
    const pct = Math.round((totalScore / totalQuestions) * 100);

    const result: DiagnosticResult = {
      score: totalScore,
      total: totalQuestions,
      percentage: pct,
      completedAt: Date.now(),
      breakdown: {
        bms: { correct: bmsCorrect, total: bmsTotal },
        kff: { correct: kffCorrect, total: kffTotal },
        tv: { correct: tvCorrect, total: tvTotal },
        sek: { correct: sekCorrect, total: sekTotal },
      },
    };

    localStorage.setItem("medat_einstufungstest_result", JSON.stringify(result));
    if (onResultSaved) onResultSaved(result);
    toast(`Einstufungstest beendet: ${pct}% Trefferquote!`, "success");
  };

  const restartTest = () => {
    setCurrentIdx(0);
    setAnswers({});
    setSecondsLeft(480);
    setIsFinished(false);
    setShowReview(false);
  };

  const totalAnswered = Object.keys(answers).length;
  const currentAnswer = answers[currentIdx];

  // Calculation for result view
  let totalCorrect = 0;
  DIAGNOSTIC_QUESTIONS.forEach((q, idx) => {
    if (answers[idx] === q.correct) totalCorrect++;
  });
  const finalPercentage = Math.round((totalCorrect / DIAGNOSTIC_QUESTIONS.length) * 100);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-night/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="einstufung-modal-title"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-line bg-paper shadow-2xl animate-pop-in flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line bg-paper-2 px-6 py-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-subtle text-primary">
              <DIconSparkles className="h-5 w-5" />
            </span>
            <div>
              <h3 id="einstufung-modal-title" className="text-base font-bold text-ink">
                MedAT 8-Minuten-Einstufungstest
              </h3>
              <p className="text-xs text-ink-3">BMS · KFF · TV · SEK Orientierungstest</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isFinished && (
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                  secondsLeft < 120
                    ? "bg-rose-100 text-rose-700 animate-pulse"
                    : "bg-paper-3 text-ink-2"
                }`}
              >
                <IconClock className="h-4 w-4" />
                <span className="num">{timeFormatted}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="rounded-xl p-1.5 text-ink-3 hover:bg-paper-3 hover:text-ink transition-colors"
              aria-label="Schließen"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isFinished ? (
            <div className="space-y-6">
              {/* Stepper Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-ink-3">
                  <span>
                    Frage {currentIdx + 1} von {DIAGNOSTIC_QUESTIONS.length}
                  </span>
                  <span>
                    {totalAnswered} / {DIAGNOSTIC_QUESTIONS.length} beantwortet
                  </span>
                </div>
                <div className="grid grid-cols-8 gap-1.5">
                  {DIAGNOSTIC_QUESTIONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIdx
                          ? "bg-primary ring-2 ring-primary/30"
                          : answers[i] !== undefined
                          ? "bg-emerald-500"
                          : "bg-slate-200"
                      }`}
                      aria-label={`Gehe zu Frage ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Card */}
              <div className="rounded-2xl border border-line bg-paper-2 p-5 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${currentQ.badgeColor}`}
                  >
                    {currentQ.pillar} · {currentQ.subtest}
                  </span>
                  <span className="text-[11px] font-semibold text-ink-4">
                    Orientierungsfrage #{currentIdx + 1}
                  </span>
                </div>

                <p className="text-[15px] font-semibold leading-relaxed text-ink">
                  {currentQ.question}
                </p>

                {/* Options */}
                <div className="space-y-2.5 pt-2">
                  {currentQ.options.map((opt, optIdx) => {
                    const selected = currentAnswer === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(optIdx)}
                        className={`flex w-full items-center gap-3.5 rounded-xl border p-3.5 text-left text-sm transition-all ${
                          selected
                            ? "border-primary bg-primary-subtle/50 text-ink shadow-xs"
                            : "border-line bg-paper hover:border-slate-300 hover:bg-paper-2 text-ink-2"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            selected
                              ? "bg-primary text-white"
                              : "border border-line bg-paper-2 text-ink-3"
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="font-medium text-ink">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="text-center py-4 space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700">
                  <IconCheck className="h-4 w-4" /> Einstufung abgeschlossen
                </div>
                <h4 className="text-2xl font-bold text-ink">Dein Orientierungsergebnis</h4>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <span className="display text-4xl font-black text-primary num">
                    {finalPercentage}%
                  </span>
                  <span className="text-sm font-semibold text-ink-3 text-left">
                    {totalCorrect} von {DIAGNOSTIC_QUESTIONS.length} richtig
                    <br />
                    <span className="text-xs text-ink-4">
                      Referenz: AT-Cutoff liegt bei ~75%
                    </span>
                  </span>
                </div>
              </div>

              {/* 4 Pillars Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                    BMS
                  </span>
                  <p className="mt-2 text-lg font-bold text-ink num">
                    {DIAGNOSTIC_QUESTIONS.filter(
                      (q, i) => q.pillar === "BMS" && answers[i] === q.correct
                    ).length}{" "}
                    / 4
                  </p>
                  <p className="text-[11px] text-ink-3">Basiswissen</p>
                </div>
                <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    KFF
                  </span>
                  <p className="mt-2 text-lg font-bold text-ink num">
                    {DIAGNOSTIC_QUESTIONS.filter(
                      (q, i) => q.pillar === "KFF" && answers[i] === q.correct
                    ).length}{" "}
                    / 2
                  </p>
                  <p className="text-[11px] text-ink-3">Kognitiv (40%)</p>
                </div>
                <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    TV
                  </span>
                  <p className="mt-2 text-lg font-bold text-ink num">
                    {DIAGNOSTIC_QUESTIONS.filter(
                      (q, i) => q.pillar === "TV" && answers[i] === q.correct
                    ).length}{" "}
                    / 1
                  </p>
                  <p className="text-[11px] text-ink-3">Textverständnis</p>
                </div>
                <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    SEK
                  </span>
                  <p className="mt-2 text-lg font-bold text-ink num">
                    {DIAGNOSTIC_QUESTIONS.filter(
                      (q, i) => q.pillar === "SEK" && answers[i] === q.correct
                    ).length}{" "}
                    / 1
                  </p>
                  <p className="text-[11px] text-ink-3">Sozial-emotional</p>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="rounded-2xl border border-line bg-paper-2 p-4 flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <DIconTrendUp className="h-5 w-5" />
                </span>
                <div>
                  <h5 className="text-sm font-bold text-ink">Empfohlene nächste Schritte</h5>
                  <p className="mt-1 text-xs text-ink-2 leading-relaxed">
                    {finalPercentage >= 75
                      ? "Hervorragende Basis! Vertiefe gezielt anspruchsvolle KFF-Pacing-Strategien und starte deine erste vollständige Generalprobe."
                      : "Guter Einstieg! KFF und BMS machen zusammen 80% des MedAT aus. Starte mit dem strukturierten Lernplan und schließe Wissenslücken in Biologie und Chemie."}
                  </p>
                </div>
              </div>

              {/* Toggle Review */}
              {showReview && (
                <div className="space-y-3 pt-2">
                  <h5 className="text-sm font-bold text-ink">Erklärungen im Detail</h5>
                  {DIAGNOSTIC_QUESTIONS.map((q, idx) => {
                    const isRight = answers[idx] === q.correct;
                    return (
                      <div
                        key={q.id}
                        className={`rounded-xl border p-3.5 text-xs space-y-1.5 ${
                          isRight ? "border-emerald-200 bg-emerald-50/40" : "border-rose-200 bg-rose-50/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-ink">
                            #{idx + 1} {q.pillar} · {q.subtest}
                          </span>
                          <span
                            className={`font-bold ${
                              isRight ? "text-emerald-700" : "text-rose-700"
                            }`}
                          >
                            {isRight ? "Richtig" : "Falsch"}
                          </span>
                        </div>
                        <p className="text-ink-2 font-medium">{q.question}</p>
                        <p className="text-ink-3 text-[11px] leading-relaxed">
                          <span className="font-semibold text-ink">Erklärung:</span> {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between border-t border-line bg-paper-2 px-6 py-4 shrink-0">
          {!isFinished ? (
            <>
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                className="btn btn-secondary btn-sm"
              >
                Zurück
              </button>

              <div className="flex items-center gap-2">
                {currentIdx < DIAGNOSTIC_QUESTIONS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIdx((i) => i + 1)}
                    className="btn btn-primary btn-sm flex items-center gap-1.5"
                  >
                    Weiter <IconArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinish}
                    className="btn btn-primary btn-sm flex items-center gap-1.5"
                  >
                    Auswerten & Abschließen
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowReview((prev) => !prev)}
                className="btn btn-secondary btn-sm"
              >
                {showReview ? "Erklärungen verbergen" : "Erklärungen anzeigen"}
              </button>

              <div className="flex items-center gap-2">
                <button type="button" onClick={restartTest} className="btn btn-secondary btn-sm">
                  Test wiederholen
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNav("plan");
                  }}
                  className="btn btn-primary btn-sm flex items-center gap-1.5"
                >
                  Zum Lernplan <IconArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
