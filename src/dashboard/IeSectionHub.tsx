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

export interface IeStrategyModule {
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
    premises: string;
    strategy: string;
    deduction: string;
  };
}

export const IE_STRATEGY_MODULES: IeStrategyModule[] = [
  {
    id: "ie-mod-1",
    number: 1,
    title: "Quantoren-Hierarchie & Mengendiagramme",
    subtitle: "Universelle vs. partikuläre Quantoren im formalen Venn-System",
    icon: "⭕",
    shortDesc: "Übersetze Prämissen sofort in Mengenbeziehungen: 'Alle A sind B' bedeutet A ⊆ B. 'Kein A ist B' bedeutet A ∩ B = ∅. 'Einige A sind B' bedeutet Schnittmenge ≠ ∅ (mindestens ein Element).",
    focus: "Ausschließen von intuitivem Weltwissen zugunsten strikt mengentheoretischer Inklusion.",
    pitfalls: [
      "Verwechseln von 'Einige' mit 'nicht alle': 'Einige' bedeutet in der Logik 'mindestens eines, möglicherweise alle'.",
      "Annahme von Umkehrbarkeit bei All-Aussagen.",
    ],
    steps: [
      "Schritt 1: Notiere oder visualisiere das Mengengefüge (A ⊆ B).",
      "Schritt 2: Prüfe die zweite Prämisse auf Schnitt- oder Disjunktionsbedingungen.",
      "Schritt 3: Verbinde Anfangs- und Endmenge über den Mittelbegriff M.",
    ],
    example: {
      premises: "P1: Alle Kardiomyozyten sind Muskelzellen. P2: Alle Muskelzellen kontrahieren.",
      strategy: "Kardiomyozyten ⊆ Muskelzellen ⊆ kontraktil (Kettenschluss Modus Barbara).",
      deduction: "Zwingende Folgerung: Alle Kardiomyozyten kontrahieren.",
    },
  },
  {
    id: "ie-mod-2",
    number: 2,
    title: "Scheinschlüsse: Konversion & Unverteilter Mittelbegriff",
    subtitle: "Die zwei häufigsten Fallen im MedAT sicher erkennen",
    icon: "⚠️",
    shortDesc: "Konversionsfehler: Aus 'Alle A sind B' folgt NIEMALS 'Alle B sind A'! Unverteilter Mittelbegriff: Wenn M in beiden Prämissen nur als Oberbegriff auftaucht (Alle A sind M, Alle B sind M), existiert keine garantierte Verbindung zwischen A und B.",
    focus: "Sofortiges Durchstreichen ungültiger Distraktoren in unter 15 Sekunden.",
    pitfalls: [
      "Glauben, dass aus 'Einige A sind B' folgt: 'Einige A sind keine B'. (Formal unzulässig!)",
      "Gleichsetzen von Korrelation im Text mit zwingender Notwendigkeit.",
    ],
    steps: [
      "Schritt 1: Identifiziere den Mittelbegriff M in beiden Prämissen.",
      "Schritt 2: Prüfe, ob M in mindestens einer Prämisse voll verteilt (allumfassend) vorkommt.",
      "Schritt 3: Ist M unverteilt oder wird eine All-Aussage unzulässig invertiert, scheidet die Option sofort aus.",
    ],
    example: {
      premises: "P1: Alle Hunde sind Säugetiere. P2: Alle Katzen sind Säugetiere.",
      strategy: "Mittelbegriff 'Säugetiere' ist in beiden Prämissen unverteilt (Hunde ⊆ Säugetiere, Katzen ⊆ Säugetiere).",
      deduction: "Weder 'Alle Hunde sind Katzen' noch 'Einige Hunde sind Katzen' folgt. Hier greift Option E!",
    },
  },
  {
    id: "ie-mod-3",
    number: 3,
    title: "Option E — Wann ist 'Keine Schlussfolgerung richtig'?",
    subtitle: "Gezieltes Erkennen von ungültigen Syllogismen ohne Zweifel",
    icon: "🎯",
    shortDesc: "Option E ist im MedAT kein Verlegenheitsausweg, sondern eine vollwertige, statistisch relevante Antwortoption! Sie ist genau dann korrekt, wenn für jede der Optionen A–D mindestens ein widerspruchsfreies Gegenbeispiel existiert.",
    focus: "Kein Zwang, krampfhaft eine der Aussagen A–D schönzureden.",
    pitfalls: [
      "Option E aus Angst vor Punktverlust zu meiden.",
      "Zwei verneinende Prämissen übersehen: Aus zwei negativen Prämissen folgt NIE ein gültiger Syllogismus!",
    ],
    steps: [
      "Schritt 1: Prüfe die Prämissen: Sind beide negativ (Kein / Einige nicht)? -> Sofort Option E!",
      "Schritt 2: Sind beide partikulär (Einige / Einige)? -> Sofort Option E!",
      "Schritt 3: Wenn Optionen A–D den Mittelbegriff nicht sauber verknüpfen -> Option E einloggen.",
    ],
    example: {
      premises: "P1: Kein Reptil hat Federn. P2: Einige Wirbeltiere sind keine Reptilien.",
      strategy: "Zwei negative Prämissen (Fallacy of Exclusive Premises). Es existiert keine zwingende Relation.",
      deduction: "Richtige Antwort ist eindeutig Option E: Keine Schlussfolgerung ist richtig.",
    },
  },
  {
    id: "ie-mod-4",
    number: 4,
    title: "60-Sekunden-Taktik & Eliminierungsalgorithmus",
    subtitle: "Striktes Zeitmanagement für 10 Aufgaben in 10 Minuten",
    icon: "⏱️",
    shortDesc: "Im MedAT hast du exakt 60 Sekunden pro Aufgabe. Nutze ein klares 3-Phasen-Schema: 1. Prämissen scannen (15s) -> 2. Mittelbegriff & Quantoren prüfen (15s) -> 3. Distraktoren eliminieren & einloggen (30s).",
    focus: "Höchste Präzision unter vollem Zeitdruck ohne Hektik.",
    pitfalls: [
      "Langes Grübeln über semantischen Sinn alberner Aussagen ('Alle Steine sind Vögel'). Die Wahrheit ist irrelevant, nur die Form zählt!",
      "Hängenbleiben an einer Aufgabe über 75 Sekunden.",
    ],
    steps: [
      "0–15s: Lies Prämisse 1 & 2. Markiere im Kopf Subjekt (S), Prädikat (P) und Mittelbegriff (M).",
      "15–30s: Bestimme die Polarität (+ / -) und Quantität (All / Einige).",
      "30–60s: Scanne Optionen A–D auf Übereinstimmung mit dem logischen Schluss. Findest du keinen -> Option E.",
    ],
    example: {
      premises: "P1: Alle Vektoren besitzen eine Richtung. P2: Einige Tensoren sind keine Vektoren.",
      strategy: "Polarität prüfen. Distraktoren mit Umkehrschluss ('Alle Tensoren...') sofort streichen.",
      deduction: "Souveränes Einloggen innerhalb des 60-Sekunden-Budgets.",
    },
  },
];

interface IeSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  onStartSet: (set: PracticeSet, untimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
  wrongCount: number;
}

export const IeSectionHub: React.FC<IeSectionHubProps> = ({
  sets,
  stats,
  onStartSet,
  onLockedSimulation,
  onStartMistakes,
  wrongCount,
}) => {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<IeStrategyModule | null>(null);
  const { userProfile } = usePractice();
  const hasPro = isUserPro(userProfile);

  // Completed count
  const completedCount = sets.filter((s) => s.status === "completed").length;
  const progressPct = sets.length > 0 ? Math.round((completedCount / sets.length) * 100) : 0;

  // Next active simulation to launch
  const nextActiveSet = sets.find((s) => s.status !== "completed") || sets[0];

  const handleLaunch = (targetSet: SetWithStatus, untimed: boolean = false) => {
    onStartSet(targetSet, untimed);
  };

  const totalElapsedSeconds = sets.reduce((acc, s) => acc + (s.bestAttempt?.timeSpentSeconds || 0), 0);
  const totalCompletedQuestions = completedCount * 10;
  const avgSecondsPerQ =
    totalCompletedQuestions > 0 ? Math.round(totalElapsedSeconds / totalCompletedQuestions) : 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-12">
      {/* ─── 1. HERO & METRIC HUD ─── */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        {/* Subtest Exclusive Badge & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Nur MedAT-H · KFF Subtest
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Nicht in MedAT-Z
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                10 Aufgaben · 10 Minuten
              </span>
            </div>
            <h1 className="text-[26px] sm:text-[32px] font-black text-slate-900 tracking-tight">
              Implikationen erkennen (IE)
            </h1>
            <p className="text-[14px] text-slate-600 max-w-2xl font-medium leading-relaxed">
              Formale Prädikatenlogik und Syllogistik unter realistischem MedAT-Zeitdruck. 
              Beurteile 2 Prämissen unabhängig von realem Vorwissen und finde den zwingenden logischen Schluss oder Option E.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-center">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Testformat</p>
              <p className="font-mono text-[14px] font-extrabold text-slate-800">10 Min · 10 Aufgaben</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[22px] shadow-2xs">
              ⚖️
            </div>
          </div>
        </div>

        {/* 4 Quantitative Hub Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Simulation Progress */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>SIMULATIONEN</span>
              <span className="font-mono text-purple-700 font-extrabold">{progressPct}%</span>
            </div>
            <p className="font-mono text-[24px] font-black text-slate-900 leading-none">
              {completedCount} <span className="text-[15px] font-bold text-slate-600">/ {sets.length}</span>
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-600 transition-all duration-500 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-[10.5px] font-medium text-slate-600">
              {completedCount === sets.length ? "Alle IE-Simulationen absolviert" : `${sets.length - completedCount} verbleibende Durchläufe`}
            </p>
          </div>

          {/* Card 2: Durchschnitts-Genauigkeit */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>GENAUIGKEIT</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-black uppercase ${
                stats.accuracy >= 80 ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
              }`}>
                {stats.accuracy >= 80 ? "Zulassungsreif" : "Im Aufbau"}
              </span>
            </div>
            <p className={`font-mono text-[24px] font-black leading-none ${
              stats.accuracy >= 80 ? "text-emerald-600" : stats.answeredCount > 0 ? "text-slate-900" : "text-slate-600"
            }`}>
              {stats.answeredCount > 0 ? `${stats.accuracy}%` : "—"}
            </p>
            <p className="text-[10.5px] font-medium text-slate-600">
              Zielmarke für Top-Quartil: ≥ 80%
            </p>
          </div>

          {/* Card 3: Durchschnittliche Bearbeitungszeit */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>Ø BEARBEITUNGSZEIT</span>
              <span className="font-mono text-[10.5px] text-slate-600">Ziel: ≤ 60s</span>
            </div>
            <p className="font-mono text-[24px] font-black text-slate-900 leading-none">
              {avgSecondsPerQ > 0 ? `${avgSecondsPerQ}s` : "—"}
            </p>
            <p className="text-[10.5px] font-medium text-slate-600">
              Prüfungsbudget: 60 s / Aufgabe (10 Min.)
            </p>
          </div>

          {/* Card 4: Fehler-Pool */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>FEHLER-POOL</span>
              <span className="font-mono text-purple-700">{wrongCount} Schwachstellen</span>
            </div>
            <p className="font-mono text-[24px] font-black text-slate-900 leading-none">
              {wrongCount}
            </p>
            {wrongCount > 0 ? (
              <button
                onClick={onStartMistakes}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 hover:text-purple-700 hover:underline cursor-pointer"
              >
                Schwachstellen wiederholen →
              </button>
            ) : (
              <p className="text-[10.5px] font-medium text-emerald-600">
                Keine offenen Fehler registriert
              </p>
            )}
          </div>
        </div>

        {/* Primary & Secondary Call to Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
          {nextActiveSet && (!hasPro && nextActiveSet.order > 1 ? (
            <button
              onClick={() => (onLockedSimulation ? onLockedSimulation(nextActiveSet) : handleLaunch(nextActiveSet, false))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-[0.99] text-slate-950 font-black text-[14px] shadow-sm transition-all cursor-pointer"
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
                onClick={() => handleLaunch(nextActiveSet, false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-black text-[14px] shadow-lg shadow-purple-900/20 transition-all cursor-pointer"
              >
                <span>{nextActiveSet.title} starten (10 Min) →</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleLaunch(nextActiveSet, true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.99] text-slate-700 font-bold text-[14px] shadow-2xs transition-all cursor-pointer"
              >
                <IconClock className="w-4 h-4 text-slate-600" />
                <span>Ohne Zeitlimit üben</span>
              </button>
            </>
          ))}
        </div>
      </div>

      {/* ─── 2. 4 STRATEGY MODULES ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight">
              Syllogistik & Lösungsstrategien (IE)
            </h2>
            <p className="text-[13px] font-medium text-slate-600">
              4 fundamentale Werkzeuge für formale Deduktion, Scheinschluss-Erkennung und Zeitmanagement
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {IE_STRATEGY_MODULES.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedStrategyModal(module)}
              className="group cursor-pointer rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[24px]">{module.icon}</span>
                  <span className="font-mono text-[10px] font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                    STRATEGIE {module.number}
                  </span>
                </div>
                <h3 className="font-black text-slate-900 text-[15px] group-hover:text-purple-600 transition-colors leading-snug">
                  {module.title}
                </h3>
                <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-3 font-medium">
                  {module.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-purple-600 group-hover:text-purple-700">
                <span>Vertiefung öffnen</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. SIMULATION CARDS GRID (1–5) ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight">
              Prüfungssimulationen (10 Aufgaben · 10 Minuten)
            </h2>
            <p className="text-[13px] font-medium text-slate-600">
              Exakt formatgetreue Durchläufe gemäß offiziellem MedAT-H Testplan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sets.map((set, idx) => {
            const isCompleted = set.status === "completed";
            const isFreeSim = set.order === 1;
            const isLocked = !hasPro && !isFreeSim;
            const scorePct = set.latestScore !== undefined ? Math.round(set.latestScore) : set.bestScore !== undefined ? Math.round(set.bestScore) : null;
            const simNum = idx + 1;

            return (
              <div
                key={set.id}
                onClick={() => {
                  if (isLocked) {
                    onLockedSimulation ? onLockedSimulation(set) : handleLaunch(set, false);
                  }
                }}
                className={`relative rounded-2xl border transition-all p-5 flex flex-col justify-between space-y-4 ${
                  isLocked
                    ? "border-slate-200/90 bg-slate-50/50 hover:border-amber-400 hover:bg-white cursor-pointer shadow-2xs"
                    : isCompleted
                      ? "border-emerald-200/90 bg-emerald-50/20 shadow-2xs"
                      : "border-slate-200/90 bg-white hover:border-purple-300 hover:shadow-md shadow-2xs"
                }`}
              >
                {/* Header info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      SIMULATION {simNum}
                    </span>

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
                    ) : isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <IconCheck className="w-3.5 h-3.5" />
                        ABSOLVIERT
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                        OFFEN
                      </span>
                    )}
                  </div>

                  <h3 className="font-black text-slate-900 text-[16px] leading-snug">
                    {set.title}
                  </h3>

                  <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
                    {set.description || "10 formal-logische Schlussfolgerungen · A–E Format · 10 Minuten Zeitlimit."}
                  </p>
                </div>

                {/* Status/Score footer & CTA Buttons */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {isCompleted && scorePct !== null && (
                    <div className="flex items-center justify-between text-[12px] font-bold">
                      <span className="text-slate-600">Ergebnis:</span>
                      <span className={scorePct >= 80 ? "text-emerald-700 font-extrabold" : "text-amber-700 font-extrabold"}>
                        {scorePct}% Genauigkeit
                      </span>
                    </div>
                  )}

                  {isLocked ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLockedSimulation ? onLockedSimulation(set) : handleLaunch(set, false);
                      }}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-slate-950 font-black px-4 py-2.5 text-[12.5px] shadow-xs transition-all cursor-pointer text-center"
                    >
                      <svg className="h-3.5 w-3.5 text-slate-950 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <span>Vollzugang freischalten</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleLaunch(set, false)}
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-black text-[12.5px] transition-all cursor-pointer ${
                          isCompleted
                            ? "bg-slate-100 hover:bg-slate-200 text-slate-700"
                            : "bg-purple-600 hover:bg-purple-700 text-white shadow-xs shadow-purple-900/10"
                        }`}
                      >
                        <span>{isCompleted ? "Wiederholen" : "Starten (10 Min)"}</span>
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleLaunch(set, true)}
                        title="Ohne Zeitlimit üben"
                        className="px-2.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 transition-all cursor-pointer"
                      >
                        <IconClock className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── 4. MODAL FOR STRATEGY MODULE DEEP-DIVE ─── */}
      {selectedStrategyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedStrategyModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-600 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <IconClose className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[26px]">{selectedStrategyModal.icon}</span>
                <span className="font-mono text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100 uppercase">
                  Strategiemodul {selectedStrategyModal.number}
                </span>
              </div>
              <h3 className="text-[22px] font-black text-slate-900 leading-snug">
                {selectedStrategyModal.title}
              </h3>
              <p className="text-[13px] font-bold text-slate-600">
                {selectedStrategyModal.subtitle}
              </p>
            </div>

            {/* Core Description */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 text-[13px] font-medium text-slate-700 leading-relaxed">
              {selectedStrategyModal.shortDesc}
            </div>

            {/* Pitfalls & Rules */}
            <div className="space-y-2">
              <h4 className="text-[12px] font-black text-slate-700 uppercase tracking-wider">
                Häufige Denkfehler & Gegenmaßnahmen
              </h4>
              <ul className="space-y-1.5">
                {selectedStrategyModal.pitfalls.map((pitfall, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-[12.5px] text-slate-600">
                    <span className="text-amber-500 font-bold shrink-0">⚠️</span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Steps */}
            <div className="space-y-2">
              <h4 className="text-[12px] font-black text-slate-700 uppercase tracking-wider">
                Schritt-für-Schritt Vorgehen im Test
              </h4>
              <div className="space-y-2">
                {selectedStrategyModal.steps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[12.5px] font-medium text-slate-700">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Example */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-purple-300 font-bold">
                <span>PRAXISBEISPIEL</span>
                <span>MEDAT DEDUKTION</span>
              </div>
              <p className="font-mono text-[12.5px] text-amber-300">
                {selectedStrategyModal.example.premises}
              </p>
              <p className="text-[12px] text-slate-300">
                <span className="font-bold text-white">Analyse: </span>
                {selectedStrategyModal.example.strategy}
              </p>
              <div className="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-[12px] text-emerald-200 font-medium">
                <span className="font-bold">Schluss: </span>
                {selectedStrategyModal.example.deduction}
              </div>
            </div>

            <button
              onClick={() => setSelectedStrategyModal(null)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-[13px] transition-colors cursor-pointer"
            >
              Schließen & Zurück zur Übersicht
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
