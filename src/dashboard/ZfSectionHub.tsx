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
import { usePractice, type SetWithStatus, type ChapterStats } from "./practiceContext";
import { isUserPro } from "../lib/bmsAccessControl";

export interface ZfStrategyModule {
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
    sequence: string;
    question: string;
    correctOption: string;
    analysis: string;
  };
}

export const ZF_STRATEGY_MODULES: ZfStrategyModule[] = [
  {
    id: "zf-mod-1",
    number: 1,
    title: "Differenzenanalyse & Schrittweiten",
    subtitle: "Das fundamentale Basiswerkzeug für lineare Zahlenreihen",
    icon: "📈",
    shortDesc: "Schreibe die Differenzen zwischen benachbarten Gliedern auf einen Schmierzettel und prüfe auf arithmetische Konstanz oder stetiges Wachstum.",
    focus: "Schnelles Erkennen konstanter (+k, -k) und linear steigender (+2, +3, +4...) Differenzen innerhalb von 20 Sekunden.",
    pitfalls: [
      "Sofortiges Suchen nach komplexen Multiplikationen, wenn eine einfache Differenzenkette vorliegt.",
      "Vorzeichenfehler beim Übergang über die Null oder bei Subtraktionen.",
      "Verwechseln der Schrittweite des 7. auf das 8. Glied mit der des 8. auf das 9. Glied.",
    ],
    steps: [
      "Schritt 1: Berechne zügig die Differenz zwischen Glied 1 & 2 sowie Glied 2 & 3.",
      "Schritt 2: Sind die Differenzen identisch? -> Konstante arithmetische Folge (+k oder -k).",
      "Schritt 3: Wachsen die Differenzen gleichmäßig (+1, +2)? -> Differenzenfolge zweiter Ordnung.",
      "Schritt 4: Wende die ermittelte Schrittweite auf das 7. Glied an, um das 8. Glied zu berechnen, und addiere die nächste Schrittweite für das 9. Glied.",
    ],
    example: {
      sequence: "2 | 5 | 9 | 14 | 20 | 27 | 35",
      question: "Welche zwei Zahlen folgen?",
      correctOption: "44 / 54 (oder Option E, falls nicht vorgegeben)",
      analysis: "Die Differenzen lauten +3, +4, +5, +6, +7, +8. Die nächsten Schritte sind +9 (35 + 9 = 44) und +10 (44 + 10 = 54).",
    },
  },
  {
    id: "zf-mod-2",
    number: 2,
    title: "Alternierende Operationen (+/×, -/÷)",
    subtitle: "Zweischritt-Zyklen mit wechselnden Rechenarten",
    icon: "🔄",
    shortDesc: "Wenn Zahlen abwechselnd stark und schwach anwachsen, liegt typischerweise ein Wechsel aus Addition und Multiplikation vor.",
    focus: "Präzises Isolieren der zwei alternierenden Operatoren (z.B. +5, danach ×2).",
    pitfalls: [
      "Fortführen des ersten Operators für beide gesuchten Zahlen (z.B. zweimal +5 addieren).",
      "Vertauschen der Reihenfolge der Operationen beim 8. und 9. Glied.",
    ],
    steps: [
      "Schritt 1: Beobachte die Abstände: Sprung klein -> Sprung groß -> Sprung klein? -> Alternierende Operation.",
      "Schritt 2: Bestimme Operator 1 von Position 1 zu 2 (z.B. +5).",
      "Schritt 3: Bestimme Operator 2 von Position 2 zu 3 (z.B. ×2).",
      "Schritt 4: Überprüfe die Regel an Position 3 zu 4 (+5) und 4 zu 5 (×2).",
      "Schritt 5: Position 7 ist ungerade. Das 8. Glied verlangt Operator 1 (+5), das 9. Glied Operator 2 (×2).",
    ],
    example: {
      sequence: "4 | 9 | 18 | 23 | 46 | 51 | 102",
      question: "Welche zwei Zahlen folgen?",
      correctOption: "107 / 214",
      analysis: "Rhythmus: +5, danach ×2. Nach 102 folgt 102 + 5 = 107 und anschließend 107 × 2 = 214.",
    },
  },
  {
    id: "zf-mod-3",
    number: 3,
    title: "Verschachtelte & Interleaved Reihen",
    subtitle: "Zwei unabhängige Folgen in einer einzigen Reihe",
    icon: "🔀",
    shortDesc: "Wenn Nachbarglieder scheinbar unlogisch steigen und fallen, teile die Folge in ungerade (1, 3, 5, 7, 9) und gerade Positionen (2, 4, 6, 8).",
    focus: "Sicheres Zuordnen der 8. Zahl zum geraden Strang und der 9. Zahl zum ungeraden Strang.",
    pitfalls: [
      "Versuch, eine direkte Beziehung zwischen Position 1 und Position 2 zu erzwingen.",
      "Verwechslung der Endpositionen: 8 ist GERADE (Strang 2), 9 ist UNGERADE (Strang 1).",
    ],
    steps: [
      "Schritt 1: Prüfe jedes zweite Glied: Bilden Pos 1, 3, 5, 7 eine eigenständige, saubere Reihe?",
      "Schritt 2: Prüfe den zweiten Strang: Bilden Pos 2, 4, 6 eine eigenständige Reihe?",
      "Schritt 3: Berechne die 8. Zahl aus Pos 6 mit der Regel des geraden Strangs.",
      "Schritt 4: Berechne die 9. Zahl aus Pos 7 mit der Regel des ungeraden Strangs.",
    ],
    example: {
      sequence: "7 | 2 | 13 | 6 | 19 | 18 | 25",
      question: "Welche zwei Zahlen folgen?",
      correctOption: "54 / 31",
      analysis: "Ungerader Strang: 7, 13, 19, 25 (+6) -> 9. Zahl: 25 + 6 = 31. Gerader Strang: 2, 6, 18 (×3) -> 8. Zahl: 18 × 3 = 54. Ergebnis: 54 / 31.",
    },
  },
  {
    id: "zf-mod-4",
    number: 4,
    title: "Rekursive Folgen (Fibonacci-Prinzip)",
    subtitle: "Zahlen entstehen aus der Verknüpfung der Vorherigen",
    icon: "🧬",
    shortDesc: "Jedes Folgelied ergibt sich als Summe oder Differenz der beiden unmittelbar vorangehenden Zahlen.",
    focus: "Erkennen, dass weder ein konstanter Summand noch ein konstanter Faktor vorliegt, sondern a_n = a_(n-1) + a_(n-2).",
    pitfalls: [
      "Rechenfehler bei mehrstelligen Additionen unter Zeitdruck.",
      "Suchen nach Faktoren, obwohl das Glied schlicht die Summe der beiden Vorläufer ist.",
    ],
    steps: [
      "Schritt 1: Prüfe: Ergibt Zahl 1 + Zahl 2 exakt Zahl 3?",
      "Schritt 2: Bestätige: Ergibt Zahl 2 + Zahl 3 exakt Zahl 4?",
      "Schritt 3: Berechne die 8. Zahl als Summe von Glied 6 und Glied 7.",
      "Schritt 4: Berechne die 9. Zahl als Summe von Glied 7 und der eben ermittelten 8. Zahl.",
    ],
    example: {
      sequence: "1 | 3 | 4 | 7 | 11 | 18 | 29",
      question: "Welche zwei Zahlen folgen?",
      correctOption: "47 / 76",
      analysis: "1+3=4, 3+4=7, 4+7=11, 7+11=18, 11+18=29. 8. Zahl: 18 + 29 = 47. 9. Zahl: 29 + 47 = 76.",
    },
  },
  {
    id: "zf-mod-5",
    number: 5,
    title: "Ausschluss-Heuristik & Option E",
    subtitle: "Wann 'Keine Antwort ist richtig' zwingend gewählt werden muss",
    icon: "🎯",
    shortDesc: "Option E ist im MedAT kein Verlegenheitsausweg, sondern eine vollwertige, statistisch relevante Lösungsmöglichkeit.",
    focus: "Schneller Abgleich des eigenen berechneten Zahlenpaars mit A–D; mutiges Wählen von E bei Abweichungen.",
    pitfalls: [
      "Annehmen, dass Option E nur extrem selten die Lösung sein darf (im MedAT ca. 15–20% Häufigkeit!).",
      "Aus Verunsicherung ein falsches Zahlenpaar aus A–D ankreuzen, obwohl die eigene Rechnung nachweislich stimmt.",
      "Übersehen von Zahlendrehern bei Distraktoren (z.B. 6 / 32 statt 32 / 6).",
    ],
    steps: [
      "Schritt 1: Berechne das exakte Zahlenpaar unabhängig auf dem Schmierzettel.",
      "Schritt 2: Scanne Optionen A bis D: Ist das exakte Paar in korrekter Reihenfolge vorhanden?",
      "Schritt 3: Falls ein ähnliches Paar mit vertauschter Reihenfolge existiert: Falle entlarvt!",
      "Schritt 4: Ist das korrekte Paar definitiv nicht unter A–D vertreten: Wähle sofort Option E.",
    ],
    example: {
      sequence: "96 | 5 | 48 | 14 | 24 | 23 | 12",
      question: "Welche zwei Zahlen folgen? (Optionen: A: 6/32, B: 32/8, C: 31/6, D: 30/6, E: Keine)",
      correctOption: "E (Keine Antwort ist richtig)",
      analysis: "Die korrekte Lösung lautet 32 / 6. Option A hat die umgekehrte Reihenfolge (6 / 32). Da keine Option zutrifft, ist E zwingend richtig.",
    },
  },
];

export const ZF_SIMULATION_THEMES: Record<
  number,
  { title: string; topic: string; focus: string }
> = {
  1: {
    title: "Simulation 1 — Zahlenfolgen",
    topic: "Grundlagen-Check: Arithmetische & geometrische Reihen",
    focus: "Direkte Differenzen, konstante Faktoren, steigende Schrittweiten & Zweischritt-Systeme (~90 s / Aufgabe).",
  },
  2: {
    title: "Simulation 2 — Zahlenfolgen",
    topic: "Aufbau & Vertiefung: Fallende Schrittweiten & Vorzeichenwechsel",
    focus: "Subtraktions-Ketten, alternierende Vorzeichen und kombinierte Rechenoperatoren.",
  },
  3: {
    title: "Simulation 3 — Zahlenfolgen",
    topic: "Transfer & Didaktik: Verschachtelte Folgen & Fibonacci",
    focus: "Zwei unabhängige Teilstränge (ungerade/gerade) sowie rekursive Summenbildung.",
  },
  4: {
    title: "Simulation 4 — Zahlenfolgen",
    topic: "Speed & Stress Sprint: Dreischritt-Zyklen & Ausschluss-Heuristik",
    focus: "Dreischritt-Zyklen (+/×/-), Quotienten-Muster und schnelles Pacing unter 90s-Limit.",
  },
  5: {
    title: "Simulation 5 — Zahlenfolgen",
    topic: "Finale MedAT-Generalprobe: Höchste Pacing-Stufe",
    focus: "Authentische Prüfungsbedingungen: 10 Aufgaben in 15 Minuten (Ziel: ≥80% Cutoff-Sicherheit).",
  },
  6: {
    title: "Simulation 6 — Zahlenfolgen",
    topic: "Meister-Simulation: Modifizierte Rekursionen & Verflechtungen",
    focus: "Multiplikative Verflechtungen, alternierende Zweierschritte und anspruchsvolle Distraktoren.",
  },
  7: {
    title: "Simulation 7 — Zahlenfolgen",
    topic: "Elite-Simulation: Vorzeichen-Rhythmen & verschachtelte Divisionen",
    focus: "Zweischritt-Systeme, modifizierte Fibonacci-Variationen und Quotienten unter Prüfungsstress.",
  },
  8: {
    title: "Simulation 8 — Zahlenfolgen",
    topic: "Meister-Klasse: Kubik- & Quadratdistanzen",
    focus: "Komplexe Differenzfolgen, Vorzeichenwechsel und geometrische Sprünge.",
  },
  9: {
    title: "Simulation 9 — Zahlenfolgen",
    topic: "Championship-Simulation: Komplexe Verbundmuster",
    focus: "Dreischritt-Zyklen mit gemischten Operatoren, Halbierungs- und Verdopplungsmuster.",
  },
  10: {
    title: "Simulation 10 — Zahlenfolgen",
    topic: "Apex-Simulation: Rekursive Verschachtelungen",
    focus: "Kombinierte Operationen, Primzahlschritte und höchste psychometrische Trennschärfe.",
  },
  11: {
    title: "Simulation 11 — Zahlenfolgen",
    topic: "Titan-Simulation: Finale Generalprobe",
    focus: "Polynomische Sprünge, verschachtelte Invers-Operationen & finale Cutoff-Prüfung.",
  },
};

interface ZfSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  wrongCount: number;
  onStartSimulation: (set: PracticeSet, forceUntimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
}

export function ZfSectionHub({
  sets,
  stats,
  wrongCount,
  onStartSimulation,
  onLockedSimulation,
  onStartMistakes,
}: ZfSectionHubProps) {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<ZfStrategyModule | null>(null);
  const { userProfile } = usePractice();
  const hasPro = isUserPro(userProfile);

  // Active or next simulation
  const nextActiveSet = sets.find((s) => s.status !== "completed") || sets[0];
  const completedCount = sets.filter((s) => s.status === "completed").length;
  const progressPct = Math.round((completedCount / Math.max(sets.length, 1)) * 100);

  // Average time calculation (Benchmark: 90s per question)
  const totalElapsedSeconds = sets.reduce((acc, s) => acc + (s.bestAttempt?.timeSpentSeconds || 0), 0);
  const totalCompletedQuestions = completedCount * 10;
  const avgSecondsPerQ =
    totalCompletedQuestions > 0 ? Math.round(totalElapsedSeconds / totalCompletedQuestions) : 0;

  return (
    <div className="space-y-8 pb-24 pt-2">
      {/* ─── 1. ZF HERO & METRICS BANNER ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-red-50 text-red-700 border border-red-200/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                ZF · KFF (MedAT-H & MedAT-Z)
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                10 Aufgaben pro Simulation
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                15 Min. Prüfungszeit (~90 s / Aufgabe)
              </span>
              <span className="rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 text-[11px] font-bold">
                100% Muster & Logik — Keine Formelsammlung
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
              Zahlenfolgen (ZF)
            </h1>
            <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-slate-600 max-w-3xl">
              MedAT-orientierte Simulationen: 10 Aufgaben in 15 Minuten unter realistischen Prüfungsbedingungen.
              Finde durch systematische Differenzen- und Operatorenanalyse heraus, welche zwei Zahlen die gegebene Reihe
              logisch und mathematisch zwingend fortsetzen.
            </p>
          </div>
        </div>

        {/* 4 ZF Metrics Cards Grid */}
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
              {completedCount === sets.length ? "Alle ZF absolviert" : `${sets.length - completedCount} verbleibend`}
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

          {/* Card 3: Zeitmanagement vs. 90s Benchmark */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">ZEIT</span>
              <span className="font-mono text-slate-600">≤ 90s</span>
            </div>
            <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
              {avgSecondsPerQ > 0 ? `${avgSecondsPerQ}s` : "—"}{" "}
              <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 font-sans">/ Aufg.</span>
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  avgSecondsPerQ > 0 && avgSecondsPerQ <= 90
                    ? "bg-emerald-500"
                    : avgSecondsPerQ > 90
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                style={{ width: `${avgSecondsPerQ > 0 ? Math.min(100, (90 / Math.max(avgSecondsPerQ, 1)) * 100) : 0}%` }}
              />
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400 truncate">
              {avgSecondsPerQ > 0
                ? avgSecondsPerQ <= 90
                  ? "✓ Top-Tempo"
                  : "Über 90s"
                : "Noch keine Daten"}
            </p>
          </div>

          {/* Card 4: ZF-Schwachstellen */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">FEHLER</span>
              {wrongCount > 0 ? (
                <span className="bg-red-100 text-red-800 px-1.5 py-0.5 rounded text-[9px] xs:text-[10px] font-black uppercase">
                  Offen
                </span>
              ) : (
                <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[9px] xs:text-[10px] font-black">
                  0
                </span>
              )}
            </div>
            <p className={`font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black leading-none ${wrongCount > 0 ? "text-red-600" : "text-emerald-600"}`}>
              {wrongCount}{" "}
              <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 font-sans">Fehler</span>
            </p>
            <div className="pt-0.5">
              {wrongCount > 0 ? (
                <button
                  onClick={onStartMistakes}
                  className="w-full text-center py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-[10.5px] xs:text-[11px] font-black transition-colors shadow-2xs truncate"
                >
                  Trainieren →
                </button>
              ) : (
                <p className="text-[10px] xs:text-[10.5px] font-medium text-emerald-700 flex items-center gap-1">
                  <span>✓</span> Fehlerfrei
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. NÄCHSTER EMPFOHLENER SCHRITT (SIMULATIONEN-STARTKARTE) ─── */}
      {nextActiveSet && (
        <div className="rounded-3xl border border-red-200/80 bg-gradient-to-r from-red-50/40 via-white to-slate-50 p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-red-600 text-white font-mono text-[12px] font-black shadow-2xs">
                  {String(nextActiveSet.order).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-red-700">
                  {nextActiveSet.status === "completed" ? "Wiederholen" : "Nächste empfohlene Simulation"}
                </span>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight">
                {nextActiveSet.title}
              </h3>
              <p className="text-[13.5px] font-medium text-slate-600 max-w-2xl">
                {ZF_SIMULATION_THEMES[nextActiveSet.order]?.focus || nextActiveSet.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[12px] font-bold text-slate-500">
                <span className="flex items-center gap-1">
                  <IconClock className="h-4 w-4 text-slate-400" />
                  15 Minuten Prüfungszeit
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <IconTarget className="h-4 w-4 text-slate-400" />
                  10 Aufgaben (7 gegeben → 8. & 9. Zahl)
                </span>
                <span>·</span>
                <span>Richtzeit: 90 s / Aufgabe</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              {!hasPro && nextActiveSet.order > 1 ? (
                <button
                  onClick={() => (onLockedSimulation ? onLockedSimulation(nextActiveSet) : onStartSimulation(nextActiveSet, false))}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-[13px] font-black transition-all shadow-xs flex items-center justify-center gap-2 text-center cursor-pointer active:scale-[0.98]"
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
                    className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-[13px] font-bold transition-all shadow-2xs text-center cursor-pointer"
                  >
                    Ohne Zeitlimit üben
                  </button>
                  <button
                    onClick={() => onStartSimulation(nextActiveSet, false)}
                    className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[13px] font-black transition-all shadow-xs flex items-center justify-center gap-2 text-center cursor-pointer"
                  >
                    <span>Simulation starten (15 Min)</span>
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── 3. LERNEN & TRAINIEREN: 5 INTERAKTIVE STRATEGIE-MODULE ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-900">
              Lernen & Trainieren: 5 ZF-Lösungsstrategien
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              Methodische Lösungsansätze und Heuristiken für den MedAT-Subtest Zahlenfolgen.
            </p>
          </div>
          <span className="text-[11.5px] font-bold text-slate-400">Interaktive Methodik</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ZF_STRATEGY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedStrategyModal(mod)}
              className="group cursor-pointer rounded-2xl border border-slate-200/90 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[26px]">{mod.icon}</span>
                  <span className="font-mono text-[11px] font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                    MODUL 0{mod.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15.5px] font-black text-slate-900 group-hover:text-red-600 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-[12px] font-bold text-slate-500 mt-0.5">{mod.subtitle}</p>
                </div>
                <p className="text-[12.5px] font-medium text-slate-600 leading-relaxed line-clamp-3">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px] font-bold text-red-600">
                <span>Strategie & Beispiel ansehen</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 4. 5 OFFIZIELLE ZF-PRÜFUNGSSIMULATIONEN ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-900">
              {sets.length} ZF-Simulationen
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              Exakt 10 Aufgaben in 15 Minuten unter realistischen Prüfungsbedingungen (~90 s pro Aufgabe).
            </p>
          </div>
          <span className="text-[11.5px] font-bold text-slate-400">Realistische Prüfungsbedingungen</span>
        </div>

        <div className="space-y-4">
          {sets.map((set) => {
            const isCompleted = set.status === "completed";
            const theme = ZF_SIMULATION_THEMES[set.order];

            // Check if draft in progress
            let draftCount = 0;
            try {
              const draftRaw = localStorage.getItem(`medat_inprogress_${set.id}`);
              if (draftRaw) {
                const p = JSON.parse(draftRaw);
                if (p.answers) draftCount = Object.keys(p.answers).length;
              }
            } catch (e) {
              // ignore
            }

            const isFreeSim = set.order === 1;
            const isLocked = !hasPro && !isFreeSim;

            return (
              <div
                key={set.id}
                onClick={() => {
                  if (isLocked) {
                    onLockedSimulation ? onLockedSimulation(set) : onStartSimulation(set, false);
                  }
                }}
                className={`flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 rounded-2xl border p-5 sm:p-6 transition-all ${
                  isLocked
                    ? "border-slate-200/90 bg-slate-50/50 hover:border-amber-400 hover:bg-white cursor-pointer"
                    : isCompleted
                      ? "border-emerald-200 bg-emerald-50/20 hover:border-emerald-300"
                      : "border-slate-200 bg-white hover:border-slate-300 shadow-2xs"
                }`}
              >
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[18px] font-black shadow-xs mt-0.5 ${
                      isLocked
                        ? "border border-amber-200/80 bg-amber-50 text-amber-700"
                        : isCompleted
                          ? "bg-emerald-600 text-white"
                          : "border border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {isLocked ? (
                      <svg className="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    ) : isCompleted ? (
                      <IconCheck className="h-6 w-6" />
                    ) : (
                      String(set.order).padStart(2, "0")
                    )}
                  </span>

                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[16px] sm:text-[18px] font-black text-slate-900 tracking-tight">
                        {set.title}
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
                      <span className="rounded-lg bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[11px] font-bold">
                        {theme?.topic || set.subtitle}
                      </span>
                      {isCompleted && (
                        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-black text-emerald-800">
                          ✓ Abgeschlossen {set.bestScore !== undefined ? `(${set.bestScore}%)` : ""}
                        </span>
                      )}
                      {draftCount > 0 && !isCompleted && (
                        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-black text-blue-800">
                          Entwurf ({draftCount}/10 beantwortet)
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                      {theme?.focus || set.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-0.5 text-[12px] font-semibold text-slate-400">
                      <span>15 Minuten</span>
                      <span>·</span>
                      <span>10 Aufgaben</span>
                      <span>·</span>
                      <span>Richtzeit: 90 s / Aufgabe</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 pt-2 lg:pt-0">
                  {isLocked ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLockedSimulation ? onLockedSimulation(set) : onStartSimulation(set, false);
                      }}
                      className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-[12.5px] sm:text-[13px] font-black transition-all shadow-xs flex items-center justify-center gap-1.5 text-center cursor-pointer active:scale-[0.98]"
                    >
                      <svg className="h-3.5 w-3.5 text-slate-950 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <span>Vollzugang freischalten</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => onStartSimulation(set, true)}
                        className="w-full sm:w-auto px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-[12px] sm:text-[13px] font-bold transition-all shadow-2xs text-center cursor-pointer"
                      >
                        Ohne Zeitlimit
                      </button>
                      <button
                        onClick={() => onStartSimulation(set, false)}
                        className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-[12.5px] sm:text-[13px] font-black transition-all shadow-xs flex items-center justify-center gap-1.5 text-center cursor-pointer active:scale-[0.98] ${
                          isCompleted
                            ? "bg-slate-900 hover:bg-slate-800 text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        <span>{isCompleted ? "Wiederholen" : "Simulation starten"}</span>
                        <IconArrowRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── MODAL: ZF STRATEGY MODULE DETAIL ─── */}
      {selectedStrategyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-[32px]">{selectedStrategyModal.icon}</span>
                <div>
                  <span className="font-mono text-[11px] font-black text-red-600 uppercase tracking-wider">
                    ZF Strategie-Modul 0{selectedStrategyModal.number}
                  </span>
                  <h3 className="text-[20px] font-black text-slate-900">
                    {selectedStrategyModal.title}
                  </h3>
                  <p className="text-[12px] font-bold text-slate-500">
                    {selectedStrategyModal.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            {/* Core Competency & Focus */}
            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-4 space-y-1">
              <p className="text-[11px] font-black uppercase tracking-wider text-red-700">
                Kernkompetenz im MedAT
              </p>
              <p className="text-[13px] font-semibold text-slate-800 leading-relaxed">
                {selectedStrategyModal.focus}
              </p>
            </div>

            {/* Typical Pitfalls */}
            <div className="space-y-2">
              <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-wider">
                Typische Prüfungsfallen
              </h4>
              <ul className="space-y-1.5">
                {selectedStrategyModal.pitfalls.map((pitfall, i) => (
                  <li
                    key={i}
                    className="text-[12.5px] font-medium text-slate-600 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step by step method */}
            <div className="space-y-2">
              <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-wider">
                Schritt-für-Schritt Methode
              </h4>
              <div className="space-y-2">
                {selectedStrategyModal.steps.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-3 text-[12.5px] font-semibold text-slate-700 leading-relaxed"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Realistic Example with Analysis */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2.5">
              <h4 className="text-[12px] font-black uppercase tracking-wider text-slate-500">
                Konkretes MedAT-Beispiel & Analyse
              </h4>
              <div className="rounded-xl bg-slate-900 text-white p-3 font-mono text-[14px] font-bold text-center tracking-wider">
                {selectedStrategyModal.example.sequence}  |  ?  |  ?
              </div>
              <p className="text-[12.5px] font-bold text-slate-800">
                {selectedStrategyModal.example.question}
              </p>
              <p className="text-[12px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                ✓ Lösung: {selectedStrategyModal.example.correctOption}
              </p>
              <p className="text-[12px] font-medium text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                {selectedStrategyModal.example.analysis}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-[13px] font-black hover:bg-slate-800 transition-colors"
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
