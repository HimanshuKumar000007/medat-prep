import React, { useState } from "react";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFlame,
  IconTarget,
  IconBrain,
  IconClose,
} from "../lib/icons";
import type { PracticeSet } from "./practiceData";
import type { SetWithStatus, ChapterStats } from "./practiceContext";
import { usePractice } from "./practiceContext";
import { isUserPro } from "../lib/bmsAccessControl";

export interface WfStrategyModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  shortDesc: string;
  focus: string;
  pitfalls: string[];
  steps: string[];
  example: {
    scrambled: string;
    targetWord: string;
    correctInitial: string;
    options: string[];
    analysis: string;
  };
}

export const WF_STRATEGY_MODULES: WfStrategyModule[] = [
  {
    id: "wf-mod-1",
    number: 1,
    title: "Vokal-Konsonant-Isolierung & Häufigkeitsanalyse",
    subtitle: "Das fundamentale Basiswerkzeug für ungeordnete Buchstaben",
    icon: "🔤",
    shortDesc: "Trenne mental sofort die Vokale (A, E, I, O, U, Ä, Ö, Ü) von den Konsonanten. Die Vokale bilden das Silbengerüst des Wortes.",
    focus: "Schnelles Erfassen der Silbenanzahl und der Vokalverteilung innerhalb der ersten 15 Sekunden.",
    pitfalls: [
      "Versuch, willkürlich Buchstaben im Kopf hin und her zu schieben ohne Silbenstruktur.",
      "Übersehen von Doppelvokalen (z.B. EE, IE, AU, EI) oder Umlauten.",
      "Vergessen, dass jedes deutsche Wort mindestens einen Vokal bzw. Diphthong pro Silbe benötigt.",
    ],
    steps: [
      "Schritt 1: Zähle die Vokale: 2 Vokale deuten meist auf ein 2-silbiges Wort hin.",
      "Schritt 2: Prüfe auf typische Diphthonge wie EI, EU, AU oder IE.",
      "Schritt 3: Bilde um jeden Vokal eine Silbe mit den verfügbaren Konsonanten.",
      "Schritt 4: Vergleiche die möglichen Anfangskonsonanten mit den Antwortoptionen A–D.",
    ],
    example: {
      scrambled: "E · G · L · N · K · R · A · T",
      targetWord: "GELENKART",
      correctInitial: "G",
      options: ["A. G", "B. K", "C. L", "D. R", "E. Keine Antwort ist richtig"],
      analysis: "Vokale: E, E, A (3 Silben: GE - LENK - ART). Konsonanten G, L, N, K, R, T. Der anatomische Begriff 'GELENKART' beginnt mit G (Option A).",
    },
  },
  {
    id: "wf-mod-2",
    number: 2,
    title: "Präfix- & Suffix-Heuristik",
    subtitle: "Morphologische Wortbausteine blitzschnell identifizieren",
    icon: "🧩",
    shortDesc: "Viele deutsche Substantive enden auf standardisierte Suffixe (-UNG, -HEIT, -KEIT, -SCHAFT, -TÄT, -MUS) oder beginnen mit Präfixen (VER-, GE-, BE-, ENT-).",
    focus: "Sofortiges Auslagern bekannter Endungen, um den verbleibenden Wortstamm dramatisch zu vereinfachen.",
    pitfalls: [
      "Festbeißen an der Endung -UNG als Wortanfang.",
      "Buchstaben aus dem Suffix doppelt im Wortstamm verwenden.",
    ],
    steps: [
      "Schritt 1: Scanne nach den Buchstaben U, N, G oder H, E, I, T. Sind sie vorhanden? -> Probiere das Suffix am Wortende.",
      "Schritt 2: Ziehe die Suffix-Buchstaben mental ab. Aus 9 Buchstaben werden plötzlich nur noch 5 bis 6 Stammbuchstaben.",
      "Schritt 3: Rekonstruiere den kurzen Wortstamm.",
      "Schritt 4: Ermittle den Anfangsbuchstaben des Gesamtwortes.",
    ],
    example: {
      scrambled: "A · T · G · M · U · N",
      targetWord: "ATMUNG",
      correctInitial: "A",
      options: ["A. M", "B. T", "C. A", "D. G", "E. Keine Antwort ist richtig"],
      analysis: "Die Buchstaben U, N, G bilden das Suffix '-UNG'. Verbleibend: A, T, M -> Stamm 'ATM-'. Gesamtwort: 'ATMUNG', Anfangsbuchstabe A (Option C).",
    },
  },
  {
    id: "wf-mod-3",
    number: 3,
    title: "Konsonanten-Cluster & Orthographie",
    subtitle: "Typische deutsche Lautverbindungen (SCH, CH, ST, TR, KL)",
    icon: "⚡",
    shortDesc: "Bestimmte Konsonanten treten im Deutschen fast immer im Verbund auf: SCH, CH, ST, SP, PF, TR, BL, PR.",
    focus: "Kopplung von Konsonantenpaaren zur Reduktion der kombinatorischen Möglichkeiten.",
    pitfalls: [
      "Trennen von Lautkombinationen wie 'SCH' auf verschiedene Wortteile.",
      "Ignorieren von Dehnungs-H oder Doppelkonsonanten.",
    ],
    steps: [
      "Schritt 1: Entdeckst du S, C, H? Binde sie sofort zu 'SCH'.",
      "Schritt 2: Prüfe, ob 'SCH' am Anfang steht oder im Wortinneren (z.B. -TSCH-).",
      "Schritt 3: Kombiniere Konsonanten-Cluster mit den vorhandenen Vokalen.",
      "Schritt 4: Suche in den Antwortoptionen nach dem Cluster-Start oder dem Vokal-Start.",
    ],
    example: {
      scrambled: "C · E · H · I · L · N · S · Z · E",
      targetWord: "SCHMELZE",
      correctInitial: "S",
      options: ["A. M", "B. S", "C. L", "D. Z", "E. Keine Antwort ist richtig"],
      analysis: "S, C, H bilden 'SCH-'. Verbleibend: M, E, L, Z, E. Das Wort 'SCHMELZE' beginnt mit S (Option B).",
    },
  },
  {
    id: "wf-mod-4",
    number: 4,
    title: "Ausschluss-Strategie & Option-E-Sicherheit",
    subtitle: "Wann ist Option E ('Keine Antwort ist richtig') zwingend?",
    icon: "🛡️",
    shortDesc: "Wenn das gefundene Wort mit einem Buchstaben beginnt, der NICHT unter den Optionen A–D aufgelistet ist, ist Option E zwingend richtig.",
    focus: "Sicherheit beim Wählen von Option E ohne Zweifel am eigenen Lösungswort.",
    pitfalls: [
      "Krampfhaftes Suchen nach einem anderen Wort, nur weil der gefundene Anfangsbuchstabe nicht in A–D steht.",
      "Verwechseln des Anfangsbuchstabens mit dem Endbuchstaben.",
      "Raten bei Zeitnot statt gezieltem Ausschluss unmöglicher Anfangsbuchstaben.",
    ],
    steps: [
      "Schritt 1: Rekonstruiere das eindeutige deutsche Substantiv.",
      "Schritt 2: Bestimme präzise den 1. Buchstaben.",
      "Schritt 3: Steht dieser Buchstabe in Option A, B, C oder D? Wenn JA -> sofort wählen!",
      "Schritt 4: Steht der Anfangsbuchstabe definitiv NICHT in A–D? -> Option E ('Keine Antwort ist richtig') wählen!",
    ],
    example: {
      scrambled: "D · E · I · I · M · N · Z",
      targetWord: "MEDIZIN",
      correctInitial: "M",
      options: ["A. D", "B. Z", "C. I", "D. N", "E. Keine Antwort ist richtig"],
      analysis: "Das Wort 'MEDIZIN' beginnt mit M. Die Optionen A–D bieten nur D, Z, I, N. Folglich ist Antwort E zwingend korrekt.",
    },
  },
];

export const WF_SIMULATION_THEMES: Record<
  number,
  {
    title: string;
    subtitle: string;
    topic: string;
    focus: string;
  }
> = {
  1: {
    title: "Simulation 1 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Basis-Wortschatz, Vokal-Konsonant-Isolierung & direkte Anfangsbuchstaben",
    focus: "Einstiegs-Pacing (~80 s / Aufgabe), 2-silbige Wörter & Morphemzerlegung.",
  },
  2: {
    title: "Simulation 2 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Medizinisch-biologische Nomen & morphologische Präfixe (PRO-, TRANS-, ANTI-)",
    focus: "Medizinisch relevanter Wortschatz, Präfixerkennung & Konsonantenverbindungen.",
  },
  3: {
    title: "Simulation 3 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Abstrakte Substantive & Suffix-Ketten (-UNG, -HEIT, -KEIT, -SCHAFT)",
    focus: "Suffix-Auslagerung, Wortstamm-Isolierung & 3-silbige Substantive.",
  },
  4: {
    title: "Simulation 4 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Konsonantenhäufung, Doppelbuchstaben & Pacing unter hohem Zeitdruck",
    focus: "Cluster-Erkennung (SCH, CH, PF, ST), Doppelkonsonanten & Geschwindigkeitsoptimierung.",
  },
  5: {
    title: "Simulation 5 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Finale MedAT-Generalprobe: Höchste Pacing-Stufe & Option-E-Fallen",
    focus: "Realistische MedAT-Testsimulation, gezielte Option-E-Distraktoren & Spitzen-Pacing.",
  },
  6: {
    title: "Simulation 6 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Organsysteme, Histologie, Zytologie & Vokal-Konsonant-Isolierung",
    focus: "Gewebelehre, Zytologie, Organstrukturen & blitzschnelle Silbenzerlegung.",
  },
  7: {
    title: "Simulation 7 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Biochemische Prozesse, Moleküle, Stoffwechsel & Kinetik",
    focus: "Enzym- und Stoffwechselterminologie, Morphem-Isolierung unter Prüfungsstress.",
  },
  8: {
    title: "Simulation 8 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Klinische Diagnostik, Symptome, Labormedizin & gezielter Option-E-Ausschluss",
    focus: "Symptomenlehre, Laborwerte, Infektionskrankheiten & präzise Option-E-Erkennung.",
  },
  9: {
    title: "Simulation 9 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Pharmakologie, Notfallmedizin, chirurgische Instrumente & Pacing-Präzision",
    focus: "Wirkstoff- und Eingriffsbegriffe, Pacing-Optimierung (~80 s) unter Zeitlimit.",
  },
  10: {
    title: "Simulation 10 — Wortflüssigkeit",
    subtitle: "15 Aufgaben · 20 Min. Prüfungszeit",
    topic: "Apex-Simulation: Genetik, Evolution, Zellphysiologie & Höchststufe",
    focus: "Zytogenetik, Evolutionsbiologie, anspruchsvolle Buchstabenketten & finale Meisterschaft.",
  },
};

interface WfSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  wrongCount: number;
  onStartSimulation: (set: PracticeSet, forceUntimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
}

export function WfSectionHub({
  sets,
  stats,
  wrongCount,
  onStartSimulation,
  onLockedSimulation,
  onStartMistakes,
}: WfSectionHubProps) {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<WfStrategyModule | null>(null);
  const { userProfile } = usePractice();
  const hasPro = isUserPro(userProfile);

  // Active or next simulation
  const nextActiveSet = sets.find((s) => s.status !== "completed") || sets[0];
  const completedCount = sets.filter((s) => s.status === "completed").length;
  const progressPct = Math.round((completedCount / Math.max(sets.length, 1)) * 100);

  // Average time calculation (Benchmark: 80s per question)
  const totalElapsedSeconds = sets.reduce((acc, s) => acc + (s.bestAttempt?.timeSpentSeconds || 0), 0);
  const totalCompletedQuestions = completedCount * 15;
  const avgSecondsPerQ =
    totalCompletedQuestions > 0 ? Math.round(totalElapsedSeconds / totalCompletedQuestions) : 0;

  return (
    <div className="space-y-8 pb-24 pt-2">
      {/* ─── 1. WF HERO & METRICS BANNER ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-red-50 text-red-700 border border-red-200/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                WF · KFF (MedAT-H & MedAT-Z)
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                15 Aufgaben pro Simulation
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                20 Min. Prüfungszeit (~80 s / Aufgabe)
              </span>
              <span className="rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 text-[11px] font-bold">
                MedAT-orientierte WF-Simulationen
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
              Wortflüssigkeit (WF)
            </h1>
            <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-slate-600 max-w-3xl">
              MedAT-orientierte Simulationen: 15 Aufgaben in 20 Minuten unter realistischen Prüfungsbedingungen.
              Rekonstruiere mental aus den ungeordneten Buchstaben das gesuchte deutsche Substantiv und bestimme dessen
              Anfangsbuchstaben. Trainiere das strikte Zeitmanagement von ~80 Sekunden pro Aufgabe.
            </p>
          </div>
        </div>

        {/* 4 WF Metrics Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
          {/* Card 1: Simulationen-Fortschritt */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">FORTSCHRITT</span>
              <span className="font-mono text-slate-700">{progressPct}%</span>
            </div>
            <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
              {completedCount} <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 font-sans">/ {sets.length}</span>
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400 truncate">
              {completedCount === sets.length ? "Alle WF absolviert" : `${sets.length - completedCount} verbleibend`}
            </p>
          </div>

          {/* Card 2: Durchschnitts-Genauigkeit */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">GENAUIGKEIT</span>
              <span className={`px-1.5 py-0.5 rounded text-[9px] xs:text-[10px] font-black uppercase ${
                stats.accuracy >= 75 ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
              }`}>
                {stats.accuracy >= 75 ? "Bereit" : "Aufbau"}
              </span>
            </div>
            <p className={`font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black leading-none ${
              stats.accuracy >= 75 ? "text-emerald-600" : stats.answeredCount > 0 ? "text-slate-900" : "text-slate-400"
            }`}>
              {stats.answeredCount > 0 ? `${stats.accuracy}%` : "—"}
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  stats.accuracy >= 75 ? "bg-emerald-500" : "bg-amber-500"
                }`}
                style={{ width: `${Math.min(100, (stats.accuracy / 75) * 100)}%` }}
              />
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400">Ziel: ≥ 75% Cutoff</p>
          </div>

          {/* Card 3: Durchschnittliche Bearbeitungszeit */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">ZEIT</span>
              <span className="font-mono text-slate-600">≤ 80s</span>
            </div>
            <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
              {avgSecondsPerQ > 0 ? `${avgSecondsPerQ}s` : "—"}
            </p>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400 truncate">
              Budget: 80s / Aufgabe
            </p>
          </div>

          {/* Card 4: Fehler-Pool */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">FEHLER</span>
              {wrongCount > 0 && (
                <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] xs:text-[10px] font-black">
                  Review
                </span>
              )}
            </div>
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
                {wrongCount}
              </p>
              {wrongCount > 0 && (
                <button
                  onClick={onStartMistakes}
                  className="text-[10.5px] xs:text-[11px] font-bold text-red-600 hover:text-red-700 hover:underline transition-colors truncate"
                >
                  Trainieren →
                </button>
              )}
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400 truncate">
              {wrongCount === 0 ? "Keine WF-Fehler" : "Wörter wiederholen"}
            </p>
          </div>
        </div>

        {/* ─── ACTION BANNER: PRIMARY SIMULATION LAUNCHER ─── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-2xl flex items-center justify-center shadow-2xs shrink-0 ${
              !hasPro && nextActiveSet && nextActiveSet.order > 1
                ? "bg-amber-50 border border-amber-200 text-amber-700"
                : "bg-red-50 border border-red-200/80 text-red-600"
            }`}>
              {!hasPro && nextActiveSet && nextActiveSet.order > 1 ? (
                <svg className="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              ) : (
                <IconClock className="h-5 w-5" />
              )}
            </div>
            <div>
              <p className="text-[13px] font-black text-slate-900">
                {!hasPro && nextActiveSet && nextActiveSet.order > 1
                  ? `🔒 Vollzugang erforderlich · ${nextActiveSet.title}`
                  : `Nächste empfohlene Simulation: ${nextActiveSet ? nextActiveSet.title : "Simulation 1"}`}
              </p>
              <p className="text-[11.5px] font-medium text-slate-500">
                15 Aufgaben · 20 Minuten kontinuierlicher Gesamttimer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {nextActiveSet && (!hasPro && nextActiveSet.order > 1 ? (
              <button
                onClick={() => (onLockedSimulation ? onLockedSimulation(nextActiveSet) : onStartSimulation(nextActiveSet, false))}
                className="rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] px-6 py-2.5 text-[13px] font-black text-slate-950 shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="h-4 w-4 text-slate-950 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>Vollzugang freischalten (39 €) →</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => onStartSimulation(nextActiveSet, true)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-[12.5px] font-bold transition-all shadow-2xs hover:border-slate-300"
                >
                  Ohne Zeitlimit üben
                </button>
                <button
                  onClick={() => onStartSimulation(nextActiveSet, false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[13px] font-black transition-all shadow-xs hover:shadow-sm"
                >
                  <span>Simulation starten (20 Min)</span>
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. STRATEGY & ANAGRAM METHODOLOGY CARDS ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Wortfindungs- & Entschlüsselungsstrategien</span>
              <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-lg">
                MedAT-Methodik
              </span>
            </h2>
            <p className="text-[12.5px] text-slate-500 font-medium">
              Vier systematische Lösungsheuristiken für maximale Trefferquote in unter 80 Sekunden.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {WF_STRATEGY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedStrategyModal(mod)}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-2xl select-none">{mod.icon}</span>
                  <span className="text-[10.5px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                    Modul {mod.number}
                  </span>
                </div>
                <h3 className="text-[14px] font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {mod.title}
                </h3>
                <p className="text-[11.5px] text-slate-500 line-clamp-2 leading-relaxed">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-red-600">
                <span>Strategie öffnen</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. SIMULATIONEN-LISTE (5 VOLLSTÄNDIGE SIMULATIONEN) ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>5 WF-Simulationen</span>
              <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-lg">
                15 Aufgaben · 20 Min
              </span>
            </h2>
            <p className="text-[12.5px] text-slate-500 font-medium">
              Vollständige, realitätsnahe Testläufe unter originalgetreuen MedAT-Bedingungen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {sets.map((set, idx) => {
            const simNum = idx + 1;
            const theme = WF_SIMULATION_THEMES[simNum] || {
              title: set.title,
              subtitle: set.subtitle,
              topic: set.focus || "MedAT-orientierte Wortflüssigkeit",
              focus: set.description,
            };

            const isCompleted = set.status === "completed";
            const isFreeSim = set.order === 1;
            const isLocked = !hasPro && !isFreeSim;
            const accuracy = set.bestScore !== undefined ? set.bestScore : (set.bestAttempt?.score !== undefined ? Math.round((set.bestAttempt.score / 15) * 100) : 0);
            const timeSpent = set.bestAttempt?.timeSpentSeconds || 0;
            const timeMinutes = Math.floor(timeSpent / 60);
            const timeSecs = timeSpent % 60;

            return (
              <div
                key={set.id}
                onClick={() => {
                  if (isLocked) {
                    onLockedSimulation ? onLockedSimulation(set) : onStartSimulation(set, false);
                  }
                }}
                className={`rounded-2xl border transition-all p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  isLocked
                    ? "border-slate-200/90 bg-slate-50/50 hover:border-amber-400 hover:bg-white cursor-pointer"
                    : isCompleted
                      ? "border-emerald-200 bg-emerald-50/20"
                      : "border-slate-200 bg-white hover:border-slate-300 shadow-2xs hover:shadow-xs"
                }`}
              >
                <div className="flex items-start sm:items-center gap-4 flex-1">
                  <div
                    className={`h-11 w-11 rounded-2xl flex items-center justify-center font-mono font-black text-[15px] shrink-0 ${
                      isLocked
                        ? "border border-amber-200/80 bg-amber-50 text-amber-700"
                        : isCompleted
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-slate-100 text-slate-800 border border-slate-200"
                    }`}
                  >
                    {isLocked ? (
                      <svg className="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    ) : isCompleted ? (
                      <IconCheck className="h-5 w-5" />
                    ) : (
                      `0${simNum}`
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[15px] font-black text-slate-900 tracking-tight">
                        {theme.title}
                      </h3>

                      {isFreeSim ? (
                        <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider">
                          Gratis-Simulation
                        </span>
                      ) : isLocked ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-amber-300 border border-slate-800 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-2xs">
                          <svg className="h-3 w-3 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                          <span>Vollzugang</span>
                        </span>
                      ) : null}

                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md">
                        15 Aufgaben · 20 Min
                      </span>

                      {isCompleted && (
                        <span className="text-[11px] font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <IconCheck className="h-3 w-3" />
                          <span>Absolviert ({accuracy}%)</span>
                        </span>
                      )}
                    </div>

                    <p className="text-[12.5px] font-semibold text-slate-700">
                      {theme.topic}
                    </p>
                    <p className="text-[11.5px] text-slate-500 font-medium line-clamp-1">
                      {theme.focus}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  {isCompleted && (
                    <div className="text-left sm:text-right mr-0 sm:mr-2">
                      <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Bestleistung</p>
                      <p className="font-mono text-[12px] sm:text-[13px] font-black text-emerald-700">
                        {accuracy}% · {timeMinutes}:{timeSecs < 10 ? `0${timeSecs}` : timeSecs} Min.
                      </p>
                    </div>
                  )}

                  {isLocked ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLockedSimulation ? onLockedSimulation(set) : onStartSimulation(set, false);
                      }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-slate-950 font-black px-4 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] shadow-xs transition-all cursor-pointer text-center"
                    >
                      <svg className="h-3.5 w-3.5 text-slate-950 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <span>Vollzugang freischalten</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => onStartSimulation(set, true)}
                        className="w-full sm:w-auto px-3.5 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-[12px] font-bold transition-all text-center border border-slate-200 sm:border-transparent"
                      >
                        Ohne Zeitlimit
                      </button>

                      <button
                        onClick={() => onStartSimulation(set, false)}
                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[12.5px] font-black transition-all text-center ${
                          isCompleted
                            ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                            : "bg-red-600 hover:bg-red-700 text-white shadow-xs"
                        }`}
                      >
                        <span>{isCompleted ? "Wiederholen" : "Starten"}</span>
                        <IconArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── 4. STRATEGY MODAL DIALOG ─── */}
      {selectedStrategyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedStrategyModal.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-red-600 uppercase bg-red-50 border border-red-200/80 px-2 py-0.5 rounded">
                      Modul {selectedStrategyModal.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      MedAT-Lösungsstrategie
                    </span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight">
                    {selectedStrategyModal.title}
                  </h3>
                  <p className="text-[12px] font-medium text-slate-500">
                    {selectedStrategyModal.subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>

            {/* Core Focus */}
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/70 space-y-1">
              <p className="text-[11px] font-black uppercase text-slate-400 tracking-wider">Kernfokus</p>
              <p className="text-[13px] font-medium text-slate-700 leading-relaxed">
                {selectedStrategyModal.focus}
              </p>
            </div>

            {/* Step-by-Step Guide */}
            <div className="space-y-3">
              <p className="text-[12px] font-black uppercase text-slate-900 tracking-wider">
                Vorgehensweise in 4 Schritten
              </p>
              <div className="space-y-2">
                {selectedStrategyModal.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-white"
                  >
                    <span className="h-6 w-6 rounded-lg bg-red-50 text-red-600 font-mono text-[11px] font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-[12.5px] font-medium text-slate-700 leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pitfalls to Avoid */}
            <div className="space-y-2.5">
              <p className="text-[12px] font-black uppercase text-amber-900 tracking-wider flex items-center gap-1.5">
                <span>⚠️ Typische MedAT-Fallen</span>
              </p>
              <ul className="space-y-1.5">
                {selectedStrategyModal.pitfalls.map((pitfall, idx) => (
                  <li
                    key={idx}
                    className="text-[12px] text-slate-600 flex items-start gap-2 bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/60"
                  >
                    <span className="text-amber-600 font-bold shrink-0">✕</span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concrete Example */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase text-slate-400">Beispielaufgabe</span>
                <span className="font-mono text-[11px] font-bold text-emerald-700">
                  Lösung: {selectedStrategyModal.example.correctInitial}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center font-mono font-black text-[18px] tracking-widest text-slate-900">
                {selectedStrategyModal.example.scrambled}
              </div>

              <div className="text-[12px] space-y-1">
                <p className="font-bold text-slate-700">
                  Gesuchtes Wort: <span className="font-mono text-slate-900">{selectedStrategyModal.example.targetWord}</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-700">Analyse: </span>
                  {selectedStrategyModal.example.analysis}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[12.5px] font-bold transition-all shadow-xs"
              >
                Verstanden & Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
