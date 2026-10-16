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

export interface EeStrategyModule {
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
    situation: string;
    person: string;
    emotions: { label: string; prob: "likely" | "unlikely"; rationale: string }[];
  };
}

export const EE_STRATEGY_MODULES: EeStrategyModule[] = [
  {
    id: "ee-mod-1",
    number: 1,
    title: "Situative Wahrscheinlichkeit vs. Moralisches Sollen",
    subtitle: "Das psychometrische Kernkriterium: Wie fühlt die Person sich WIRKLICH?",
    icon: "🎯",
    shortDesc:
      "Im MedAT EE wird nicht gefragt, was eine Person moralisch fühlen 'sollte' oder was ein vorbildlicher Arzt fühlen 'müsste'. Gefragt ist die empirische Wahrscheinlichkeit einer emotionalen Reaktion im gegebenen situativen Kontext.",
    focus: "Trenne moralische Bewertung strikt von psychologischer Wahrscheinlichkeit.",
    pitfalls: [
      "Negative Emotionen (wie Neid, Kränkung oder Wut) als 'unwahrscheinlich' einstufen, nur weil sie sozial unerwünscht sind.",
      "Die eigene persönliche Haltung auf die beschriebene Person projizieren ('Ich würde mich nicht ärgern').",
    ],
    steps: [
      "Schritt 1: Wer ist die Person und was waren ihre Erwartungen/Ziele?",
      "Schritt 2: Welches Ereignis ist eingetreten (Bestätigung, Bruch, Ungerechtigkeit, Bedrohung)?",
      "Schritt 3: Ist die Emotion psychologisch eine typische Reaktion auf diesen Bruch?",
    ],
    example: {
      situation: "Die engste Freundin erhält das einzige Stipendium, um das sich beide beworben haben.",
      person: "Clara (Bewerberin)",
      emotions: [
        { label: "Mitfreude", prob: "likely", rationale: "Freundschaftliche Verbundenheit erzeugt ehrliche Freude für die Freundin." },
        { label: "Neid", prob: "likely", rationale: "Konkurrenz um ein knappes Gut erzeugt menschlich nachvollziehbaren Neid." },
        { label: "Gleichmut", prob: "unlikely", rationale: "Hohe persönliche Involviertheit schließt Gleichmut aus." },
      ],
    },
  },
  {
    id: "ee-mod-2",
    number: 2,
    title: "Koexistenz und Ambivalenz von Emotionen",
    subtitle: "Gefühle schließen sich nicht gegenseitig aus",
    icon: "🎭",
    shortDesc:
      "Menschen empfinden in komplexen Situationen häufig mehrere, teils gegensätzliche Emotionen gleichzeitig. Freude über einen Erfolg schließt Wehmut oder Erschöpfung keineswegs aus.",
    focus: "Bewerte jede Emotion unabhängig auf ihre relative Plausibilität.",
    pitfalls: [
      "Glauben, dass bei Vorliegen einer positiven Emotion keine negative Emotion mehr wahrscheinlich sein kann.",
      "Ein dominantes Gefühl als Ausschlussgrund für begleitende Hintergrundemotionen ansehen.",
    ],
    steps: [
      "Schritt 1: Prüfe jede der fünf Emotionen separat gegen den Situationskontext.",
      "Schritt 2: Gibt es im Text situative Anhaltspunkte für diese spezifische Emotion?",
      "Schritt 3: Wähle 'eher wahrscheinlich', wenn ein hinreichender situativer Auslöser vorliegt.",
    ],
    example: {
      situation: "Präsentationstechnik fällt aus, Vortrag wird frei und brillant gerettet; Applaus.",
      person: "Elena (Studentin)",
      emotions: [
        { label: "Erleichterung", prob: "likely", rationale: "Die akute Krisensituation wurde erfolgreich gemeistert." },
        { label: "Stolz", prob: "likely", rationale: "Freies Improvisieren und anerkennender Beifall des Auditoriums." },
        { label: "Nervosität", prob: "likely", rationale: "Vegetative Nachwirkung des Adrenalinkicks direkt nach dem Vortrag." },
      ],
    },
  },
  {
    id: "ee-mod-3",
    number: 3,
    title: "All-or-Nothing Bewertungslogik (5 von 5 Kriterium)",
    subtitle: "Präzision entscheidet: Ein einziger Fehler kostet den vollen Punkt",
    icon: "⚖️",
    shortDesc:
      "Nach den offiziellen MedAT-Kriterien gibt es im Subtest EE keine Teilpunkte. Jede der fünf Emotionen muss zwingend korrekt klassifiziert sein, damit die Aufgabe mit 1 Punkt gewertet wird.",
    focus: "Arbeite mit systematischer Checkliste für alle fünf Zeilen.",
    pitfalls: [
      "Flüchtigkeitsfehler in Zeile D oder E, weil Zeile A und B bereits klar erschienen.",
      "Eine Zeile unmarkiert lassen (führt automatisch zu 0 Punkten).",
    ],
    steps: [
      "Schritt 1: Lies den Sachverhalt aufmerksam bis zum letzten Satz.",
      "Schritt 2: Gehe die Zeilen A bis E nacheinander durch und treffe jeweils eine klare Wahl.",
      "Schritt 3: Vergewissere dich vor dem Weitergehen, dass alle 5 Radio-Schalter gesetzt sind.",
    ],
    example: {
      situation: "Aufdeckung eines Behandlungsfehlers vor der Klinikleitung; Patientin gerettet.",
      person: "Rebecca (Oberärztin)",
      emotions: [
        { label: "Erleichterung", prob: "likely", rationale: "Tödlicher Nierenschaden wurde rechtzeitig abgewendet." },
        { label: "Verlegenheit", prob: "likely", rationale: "Eigener Kunstfehler wurde vor 20 Kollegen aufgedeckt." },
        { label: "Triumph", prob: "unlikely", rationale: "Kein eigener Sieg, sondern eigener Fehler." },
      ],
    },
  },
  {
    id: "ee-mod-4",
    number: 4,
    title: "Pacing-Management: 90 Sekunden pro Aufgabe",
    subtitle: "21 Minuten für 14 komplexe Alltags- und Klinikszenarien",
    icon: "⏱️",
    shortDesc:
      "Mit ca. 90 Sekunden pro Aufgabe ist das Zeitfenster in EE fair bemessen, verlangt aber konzentriertes Lesen. Vermeide überlanges Grübeln bei einzelnen Nuancen; vertraue auf die textliche Evidenz.",
    focus: "35 Sekunden Situationsanalyse, je 10 Sekunden pro Emotionsentscheidung.",
    pitfalls: [
      "In psychologische Spekulationen über hypothetische Kindheitstraumata verfallen.",
      "Mehr als zwei Minuten an einer einzelnen Aufgabe festhängen.",
    ],
    steps: [
      "Schritt 1: Text erfassen (Wer? Was war das Ziel? Was ist passiert?).",
      "Schritt 2: Fünf Emotionen zügig einordnen.",
      "Schritt 3: Bei Unsicherheit für Review markieren und im Takt bleiben.",
    ],
    example: {
      situation: "Verkauf des eigenen Startups für Millionen, aber Abwicklung des Teams.",
      person: "Simon (Gründer)",
      emotions: [
        { label: "Genugtuung", prob: "likely", rationale: "Wirtschaftlicher Erfolg und Bestätigung des Produkts." },
        { label: "Wehmut", prob: "likely", rationale: "Verlust des eingespielten Teams nach 3 Jahren." },
        { label: "Sorglosigkeit", prob: "unlikely", rationale: "Ungewissheit und Kündigungswelle schließen Sorglosigkeit aus." },
      ],
    },
  },
];

interface EeSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  onStartSet: (set: PracticeSet, untimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
  wrongCount: number;
}

export const EeSectionHub: React.FC<EeSectionHubProps> = ({
  sets,
  stats,
  onStartSet,
  onLockedSimulation,
  onStartMistakes,
  wrongCount,
}) => {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<EeStrategyModule | null>(null);
  const { userProfile } = usePractice();
  const hasPro = isUserPro(userProfile);

  // Completed count (strictly based on completed simulations, max 5)
  const completedCount = sets.filter((s) => s.status === "completed").length;
  const totalSimCount = Math.max(sets.length, 5);
  const progressPct = totalSimCount > 0 ? Math.round((completedCount / totalSimCount) * 100) : 0;

  // Next active simulation to launch
  const nextActiveSet = sets.find((s) => s.status !== "completed") || sets[0];

  const handleLaunch = (targetSet: SetWithStatus, untimed: boolean = false) => {
    onStartSet(targetSet, untimed);
  };

  const totalElapsedSeconds = sets.reduce((acc, s) => acc + (s.bestAttempt?.timeSpentSeconds || 0), 0);
  const totalCompletedQuestions = completedCount * 14;
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-violet-50 text-violet-900 border border-violet-200">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                MedAT-H & MedAT-Z · SEK Subtest
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Gemeinsamer Prüfungsbereich
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                14 Aufgaben · 21 Minuten · ca. 90s/Aufgabe
              </span>
            </div>
            <h1 className="text-[26px] sm:text-[32px] font-black text-slate-900 tracking-tight">
              Emotionen erkennen (EE)
            </h1>
            <p className="text-[14px] text-slate-600 max-w-2xl font-medium leading-relaxed">
              MedAT-orientierte Simulationen: 14 Aufgaben in 21 Minuten. Schätze anhand realistischer Personen- 
              und Situationsbeschreibungen für jeweils fünf Emotionen ein, ob sie für die handelnde Person 
              eher wahrscheinlich oder eher unwahrscheinlich sind.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-center">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Testformat</p>
              <p className="font-mono text-[14px] font-extrabold text-slate-800">21 Min · 14 Aufgaben</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center text-[22px] shadow-2xs">
              👁️
            </div>
          </div>
        </div>

        {/* 4 Quantitative Hub Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Simulation Progress */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>SIMULATIONEN</span>
              <span className="font-mono text-violet-700 font-extrabold">{progressPct}%</span>
            </div>
            <p className="font-mono text-[24px] font-black text-slate-900 leading-none">
              {completedCount} <span className="text-[15px] font-bold text-slate-500">/ {totalSimCount}</span>
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-600 transition-all duration-500 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-[10.5px] font-medium text-slate-600">
              {completedCount === totalSimCount ? "Alle EE-Simulationen absolviert" : `${totalSimCount - completedCount} verbleibende Durchläufe`}
            </p>
          </div>

          {/* Card 2: Durchschnitts-Genauigkeit */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>GENAUIGKEIT</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-black uppercase ${
                stats.accuracy >= 75 ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
              }`}>
                {stats.accuracy >= 75 ? "Zulassungsreif" : "Im Aufbau"}
              </span>
            </div>
            <p className={`font-mono text-[24px] font-black leading-none ${
              stats.accuracy >= 75 ? "text-emerald-600" : stats.answeredCount > 0 ? "text-slate-900" : "text-slate-500"
            }`}>
              {stats.answeredCount > 0 ? `${stats.accuracy}%` : "—"}
            </p>
            <p className="text-[10.5px] font-medium text-slate-600">
              MedAT-SEK Cutoff: ≥ 75%
            </p>
          </div>

          {/* Card 3: Durchschnittliche Bearbeitungszeit */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>Ø BEARBEITUNGSZEIT</span>
              <span className="font-mono text-[10.5px] text-slate-600">Ziel: ≤ 90s</span>
            </div>
            <p className="font-mono text-[24px] font-black text-slate-900 leading-none">
              {avgSecondsPerQ > 0 ? `${avgSecondsPerQ}s` : "—"}
            </p>
            <p className="text-[10.5px] font-medium text-slate-600">
              Prüfungsbudget: 90 s / Aufgabe (21 Min.)
            </p>
          </div>

          {/* Card 4: Fehler-Pool */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
              <span>FEHLER-POOL</span>
              <span className="font-mono text-violet-700">{wrongCount} Schwachstellen</span>
            </div>
            <p className="font-mono text-[24px] font-black text-slate-900 leading-none">
              {wrongCount}
            </p>
            {wrongCount > 0 ? (
              <button
                onClick={onStartMistakes}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-600 hover:text-violet-700 hover:underline cursor-pointer"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-700 active:scale-[0.99] text-white font-black text-[14px] shadow-lg shadow-violet-900/20 transition-all cursor-pointer"
              >
                <span>{nextActiveSet.title} starten (21 Min) →</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleLaunch(nextActiveSet, true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.99] text-slate-700 font-bold text-[14px] shadow-2xs transition-all cursor-pointer"
              >
                <IconClock className="w-4 h-4 text-slate-500" />
                <span>Ohne Zeitlimit üben</span>
              </button>
            </>
          ))}
        </div>
      </div>

      {/* ─── 2. HIGH-YIELD EE STRATEGY TOOLKIT (4 MODAL MODULES) ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight">
              EE-Strategie-Toolkit
            </h2>
            <p className="text-[13px] text-slate-500 font-medium">
              Psychometrische Kernprinzipien für maximale Punktzahl in Emotionen erkennen
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-violet-50 text-violet-700 border border-violet-200">
            4 Leitfäden
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {EE_STRATEGY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedStrategyModal(mod)}
              className="group rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-violet-300 transition-all cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[24px]">{mod.icon}</span>
                  <span className="font-mono text-[11px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Modul {mod.number}
                  </span>
                </div>
                <h3 className="text-[14.5px] font-bold text-slate-900 group-hover:text-violet-600 transition-colors leading-snug">
                  {mod.title}
                </h3>
                <p className="text-[12px] text-slate-600 line-clamp-3 leading-relaxed">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px] font-bold text-violet-600 group-hover:text-violet-700">
                <span>Leitfaden öffnen</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. SIMULATIONS LIST (STRICTLY 5 EE-SIMULATIONEN) ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight">
              5 EE-Simulationen
            </h2>
            <p className="text-[13px] text-slate-500 font-medium">
              Vollständige Prüfungssimulationen: 14 Aufgaben in 21 Minuten (Originale EE-Übungsaufgaben)
            </p>
          </div>
          <span className="text-[11.5px] font-bold text-slate-500">
            {completedCount} von {totalSimCount} absolviert
          </span>
        </div>

        <div className="space-y-3">
          {sets.map((simSet, index) => {
            const isCompleted = simSet.status === "completed";
            const isNext = simSet.id === nextActiveSet?.id;
            const simNumber = index + 1;
            const isFreeSim = simSet.order === 1;
            const isLocked = !hasPro && !isFreeSim;

            return (
              <div
                key={simSet.id}
                onClick={() => {
                  if (isLocked) {
                    onLockedSimulation ? onLockedSimulation(simSet) : handleLaunch(simSet, false);
                  }
                }}
                className={`rounded-2xl border p-4 sm:p-5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isLocked
                    ? "border-slate-200/90 bg-slate-50/50 hover:border-amber-400 hover:bg-white cursor-pointer shadow-2xs"
                    : isCompleted
                    ? "border-emerald-200/90 bg-emerald-50/20 shadow-2xs"
                    : isNext
                    ? "border-violet-300 bg-white shadow-xs ring-1 ring-violet-200"
                    : "border-slate-200/90 bg-white shadow-2xs hover:border-slate-300"
                }`}
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border font-mono font-black text-[14px] ${
                      isLocked
                        ? "border-amber-200 bg-amber-50 text-amber-800"
                        : isCompleted
                        ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                        : isNext
                        ? "border-violet-300 bg-violet-100 text-violet-800"
                        : "border-slate-200 bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isLocked ? (
                      <svg className="h-4 w-4 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    ) : isCompleted ? (
                      <IconCheck className="w-5 h-5 text-emerald-700" />
                    ) : (
                      `0${simNumber}`
                    )}
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900 leading-tight">
                        Simulation {simNumber} — Emotionen erkennen
                      </h3>
                      {isFreeSim ? (
                        <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
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
                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                          <span>✓</span>
                          <span>Abgeschlossen</span>
                        </span>
                      )}
                      {isNext && !isCompleted && !isLocked && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-violet-100 text-violet-800">
                          Empfohlene nächste Simulation
                        </span>
                      )}
                    </div>
                    <p className="text-[12.5px] text-slate-500 font-medium">
                      14 Aufgaben · 21 Minuten Prüfungszeit · ca. 90 Sekunden pro Aufgabe
                    </p>
                    {simSet.bestAttempt && (
                      <p className="text-[11.5px] font-semibold text-emerald-800">
                        Bestergebnis: {simSet.bestAttempt.score} / 14 Aufgaben richtig ({Math.round((simSet.bestAttempt.score / 14) * 100)}%)
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {isLocked ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onLockedSimulation ? onLockedSimulation(simSet) : handleLaunch(simSet, false);
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-slate-950 font-black px-4 py-2.5 text-[13px] shadow-xs transition-all cursor-pointer text-center"
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
                        type="button"
                        onClick={() => handleLaunch(simSet, false)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-[13px] transition-all cursor-pointer flex items-center gap-2 ${
                          isCompleted
                            ? "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs"
                            : "bg-violet-600 hover:bg-violet-700 text-white shadow-xs"
                        }`}
                      >
                        <span>{isCompleted ? "Wiederholen" : "Starten (21 Min)"}</span>
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleLaunch(simSet, true)}
                        className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-all cursor-pointer"
                        title="Ohne Zeitlimit üben"
                      >
                        <IconClock className="w-4 h-4" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[22px]">{selectedStrategyModal.icon}</span>
                  <span className="text-[11px] font-black uppercase tracking-wider text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200">
                    Modul {selectedStrategyModal.number}
                  </span>
                </div>
                <h3 className="text-[20px] font-black text-slate-900 tracking-tight">
                  {selectedStrategyModal.title}
                </h3>
                <p className="text-[13px] text-slate-500 font-medium">
                  {selectedStrategyModal.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            {/* Explanation text */}
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
              <p className="text-[14px] text-slate-800 leading-relaxed font-medium">
                {selectedStrategyModal.shortDesc}
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-2">
              <h4 className="text-[12px] font-black uppercase tracking-wider text-slate-500">
                Schritt-für-Schritt-Vorgehen
              </h4>
              <div className="space-y-2">
                {selectedStrategyModal.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-800 font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-800 text-[11px] font-bold">
                      {i + 1}
                    </span>
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Box */}
            <div className="rounded-2xl border border-violet-200 bg-violet-50/50 p-4 space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-violet-900">
                Praxisbeispiel ({selectedStrategyModal.example.person})
              </div>
              <p className="text-[13px] font-semibold text-slate-900">
                {selectedStrategyModal.example.situation}
              </p>
              <div className="pt-2 space-y-1.5 border-t border-violet-200/60">
                {selectedStrategyModal.example.emotions.map((emo, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[12px]">
                    <span className="font-bold text-slate-800">{emo.label}:</span>
                    <span
                      className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${
                        emo.prob === "likely"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {emo.prob === "likely" ? "eher wahrscheinlich" : "eher unwahrscheinlich"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pitfalls */}
            <div className="space-y-2">
              <h4 className="text-[12px] font-black uppercase tracking-wider text-red-600">
                Typische Denkfallen vermeiden
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-[13px] text-slate-700 font-medium">
                {selectedStrategyModal.pitfalls.map((pf, i) => (
                  <li key={i}>{pf}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-[13px] hover:bg-slate-800 transition-all cursor-pointer"
              >
                Verstanden & Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
