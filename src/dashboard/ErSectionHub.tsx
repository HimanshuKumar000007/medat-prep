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

export interface ErStrategyModule {
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
    goal: string;
    strategy: string;
    effectiveResponse: string;
  };
}

export const ER_STRATEGY_MODULES: ErStrategyModule[] = [
  {
    id: "er-mod-1",
    number: 1,
    title: "Situative Emotionsregulation & Zielorientierung",
    subtitle: "Das fundamentale MedAT-Kriterium: Emotion regulieren UND Ziel erreichen",
    icon: "🎯",
    shortDesc: "In jeder ER-Aufgabe existiert ein konkretes Handlungsziel. Eine Reaktion ist nur dann 'stark wirksam', wenn sie das Gefühl anerkennt bzw. modifiziert UND das vorgegebene Ziel optimal schützt. Reine Selbstberuhigung bei Zielaufgabe ist immer falsch!",
    focus: "Prüfe jede Antwortoption strikt gegen das explizite Ziel im Fragetext.",
    pitfalls: [
      "Optionen wählen, die sich zwar angenehm anfühlen (z. B. Pause machen, Treffen absagen), aber das Ziel sabotieren.",
      "Moralische Nettigkeit mit situativer Wirksamkeit verwechseln.",
    ],
    steps: [
      "Schritt 1: Lies das ZIEL als Erstes. Was genau muss am Ende zwingend gelingen?",
      "Schritt 2: Identifiziere den emotionalen Trigger (Ärger, Scham, Angst, Frustration).",
      "Schritt 3: Bewerte die Optionen: Welche schützt das Ziel, statt dem Impuls nachzugeben?",
    ],
    example: {
      situation: "Präsentationsfolien haben 20 Min. vor Beginn Fehler. Du bist verärgert und gestresst.",
      goal: "Die Präsentation in der verbleibenden Zeit sachlich und konzentriert vorbereiten.",
      strategy: "Pause & Priorisierung: Ärger über Timing dämpfen, die 2 kritischsten Mängel beheben.",
      effectiveResponse: "Fokus auf Schadensbegrenzung statt Schuldzuweisung oder Absage.",
    },
  },
  {
    id: "er-mod-2",
    number: 2,
    title: "Kognitive Neubewertung (Reappraisal) vs. Unterdrückung",
    subtitle: "Der Goldstandard der Emotionspsychologie im MedAT-Kontext",
    icon: "🔄",
    shortDesc: "Kognitive Neubewertung deutet die Bedeutung einer Situation um (z. B. 'Nervosität = mein Körper mobilisiert Energie'). Emotionale Unterdrückung (Suppression: 'Ich darf jetzt nichts fühlen') führt zu Rebound-Effekten und physiologischer Erschöpfung.",
    focus: "Unterscheide konstruktives Umdeuten von krampfhafter Gefühlsunterdrückung.",
    pitfalls: [
      "Glauben, 'nichts anmerken lassen' oder 'Gefühle ignorieren' sei professionell (es ist suppression).",
      "Katastrophisierende Gedanken durch bloßes Wegdrängen bekämpfen wollen.",
    ],
    steps: [
      "Schritt 1: Akzeptiere die physiologische Erregung als natürlichen Mobilisierungsversuch.",
      "Schritt 2: Wechsle den Bezugsrahmen: Ist der Fehler eine Katastrophe oder wertvolles Feedback?",
      "Schritt 3: Wähle die Handlungsoption, die aus der Umdeutung konkrete Handlungskraft zieht.",
    ],
    example: {
      situation: "Herzklopfen und zittrige Hände kurz vor Beginn einer mehrstündigen Klausur.",
      goal: "Die akute Anspannung regulieren und fokussiert mit Aufgabe 1 starten.",
      strategy: "Reappraisal: Das vegetative Signal als hohe Wachheit und Leistungsbereitschaft begreifen.",
      effectiveResponse: "Physiologie bejahen und unmittelbar mit dem ersten Aufgabenblock beginnen.",
    },
  },
  {
    id: "er-mod-3",
    number: 3,
    title: "Pause, Slicing & Impulskontrolle unter Zeitnot",
    subtitle: "Handlungsfähigkeit bei akuter Überwältigung und Blockade",
    icon: "⏸️",
    shortDesc: "Unter akutem Stress neigt das Gehirn zu 'Fight' (aggressiver Vorwurf), 'Flight' (Flucht/Klausurabbruch) oder 'Freeze' (lähmende Prokrastination). Das wirksamste Gegenmittel ist ein kurzes, bewusstes Innehalten (Pause) und Slicing (Zerlegen in 45-Min-Schritte).",
    focus: "Verhindere impulsive Kurzschlusshandlungen in den ersten 10 Sekunden.",
    pitfalls: [
      "Im ersten Affekt wütende E-Mails oder Chat-Nachrichten absenden.",
      "Vor lauter Aufgabenberg in Apathie verfallen und den Tag mit Serien 'zur Beruhigung' verschwenden.",
    ],
    steps: [
      "Schritt 1: Sofortiger Impuls-Stopp (1x tief ausatmen, keine Sofortnachricht senden).",
      "Schritt 2: Aufgabenberg in handhabbare Minischritte zerlegen (Micro-Goals).",
      "Schritt 3: Mit dem kleinsten, einfachsten Teilschritt beginnen, um Selbstwirksamkeit aufzubauen.",
    ],
    example: {
      situation: "3 Fristen innerhalb von 48 Stunden. Du fühlst dich völlig gelähmt und panisch.",
      goal: "Die Panik überwinden und schrittweise in ein geordnetes Abarbeiten kommen.",
      strategy: "Micro-Slicing: Den Berg in 45-Minuten-Blöcke teilen und mit Schritt 1 starten.",
      effectiveResponse: "Großes Ganzes vorübergehend ausblenden und erste Teilaufgabe erledigen.",
    },
  },
  {
    id: "er-mod-4",
    number: 4,
    title: "90-Sekunden-Taktik & 4-Ebenen-Ausschlussprinzip",
    subtitle: "Präzises Timing für 12 Aufgaben in 18 Minuten",
    icon: "⏱️",
    shortDesc: "Im MedAT hast du exakt 90 Sekunden pro Aufgabe. Nutze das Vier-Ebenen-Raster der Emotionsbewältigung: 1. Stark wirksam (Optimal) · 2. Mäßig wirksam (Inkomplett) · 3. Unwirksam (Vermeidung/Unterdrückung) · 4. Kontraproduktiv (Eskalation).",
    focus: "Schnelles Eliminieren der verlockenden, aber ineffektiven Distraktoren.",
    pitfalls: [
      "Hängenbleiben an einer Aufgabe über 120 Sekunden — das raubt Zeit für leichtere spätere Items.",
      "Verwechseln von 'Mäßig wirksam' mit 'Stark wirksam' bei scheinbar vernünftigen Kompromissen.",
    ],
    steps: [
      "0–25s: Situation & Ziel erfassen. Welches Gefühl dominiert? Welches Ziel steht im Mittelpunkt?",
      "25–65s: Optionen A–D scannen. Streiche Optionen mit Eskalation oder Vermeidung sofort durch.",
      "65–90s: Feinentscheidung zwischen den verbleibenden Optionen und sicheres Einloggen.",
    ],
    example: {
      situation: "Dozent übt vor versammelter Runde herbe Kritik an deiner Falldokumentation.",
      goal: "Professionell handlungsfähig bleiben und die Dokumentation korrekt vervollständigen.",
      strategy: "Scham aushalten, Visite zu Ende führen, Fehler im Anschluss sachgerecht korrigieren.",
      effectiveResponse: "Keine öffentliche Rechtfertigung (Störung) und keine Flucht (Krankmeldung).",
    },
  },
];

interface ErSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  onStartSet: (set: PracticeSet, untimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
  wrongCount: number;
}

export const ErSectionHub: React.FC<ErSectionHubProps> = ({
  sets,
  stats,
  onStartSet,
  onLockedSimulation,
  onStartMistakes,
  wrongCount,
}) => {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<ErStrategyModule | null>(null);
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
  const totalCompletedQuestions = completedCount * 12;
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-purple-50 text-purple-900 border border-purple-200">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                MedAT-H & MedAT-Z · SEK Subtest
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Gemeinsamer Prüfungsbereich
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                12 Aufgaben · 18 Minuten · ca. 90s/Aufgabe
              </span>
            </div>
            <h1 className="text-[26px] sm:text-[32px] font-black text-slate-900 tracking-tight">
              Emotionen regulieren (ER)
            </h1>
            <p className="text-[14px] text-slate-600 max-w-2xl font-medium leading-relaxed">
              MedAT-orientierte Simulationen: 12 Aufgaben in 18 Minuten. Beurteile realistische Alltags- und 
              Klinikszenarien und wähle diejenige Handlungsoption, die die aufkommende Emotion am effektivsten 
              reguliert und gleichzeitig das vorgegebene Handlungsziel schützt.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-center">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Testformat</p>
              <p className="font-mono text-[14px] font-extrabold text-slate-800">18 Min · 12 Aufgaben</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[22px] shadow-2xs">
              🧠
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
              {completedCount} <span className="text-[15px] font-bold text-slate-600">/ {totalSimCount}</span>
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-600 transition-all duration-500 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-[10.5px] font-medium text-slate-600">
              {completedCount === totalSimCount ? "Alle ER-Simulationen absolviert" : `${totalSimCount - completedCount} verbleibende Durchläufe`}
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
              stats.accuracy >= 75 ? "text-emerald-600" : stats.answeredCount > 0 ? "text-slate-900" : "text-slate-600"
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
              Prüfungsbudget: 90 s / Aufgabe (18 Min.)
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
                <span>{nextActiveSet.title} starten (18 Min) →</span>
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

      {/* ─── 2. HIGH-YIELD ER STRATEGY TOOLKIT (4 MODAL MODULES) ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight">
              ER-Strategie-Toolkit
            </h2>
            <p className="text-[13px] text-slate-500 font-medium">
              Psychologische Kernprinzipien für maximale Punktzahl in Emotionen regulieren
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
            4 Leitfäden
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {ER_STRATEGY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedStrategyModal(mod)}
              className="group rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[24px]">{mod.icon}</span>
                  <span className="font-mono text-[10.5px] font-bold text-slate-600 uppercase">
                    Modul 0{mod.number}
                  </span>
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                  {mod.title}
                </h3>
                <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px] font-bold text-purple-600">
                <span>Leitfaden öffnen</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. SIMULATION MATRIX (5 ER-SIMULATIONEN) ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] sm:text-[20px] font-black text-slate-900 tracking-tight">
              5 ER-Simulationen
            </h2>
            <p className="text-[13px] text-slate-500 font-medium">
              12 Aufgaben in 18 Minuten · Kontinuierlicher Prüfungs-Countdown · 4 Optionen (A–D)
            </p>
          </div>
          <span className="text-[12px] font-bold text-slate-500">
            {completedCount} von {totalSimCount} abgeschlossen
          </span>
        </div>

        <div className="space-y-3">
          {sets.map((simSet, idx) => {
            const isCompleted = simSet.status === "completed";
            const score = simSet.latestScore ?? simSet.bestScore;
            const accuracy = score !== undefined ? Math.round((score / 12) * 100) : null;
            const isNext = simSet.id === nextActiveSet?.id;
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
                className={`rounded-2xl border p-4 sm:p-5 transition-all ${
                  isLocked
                    ? "border-slate-200/90 bg-slate-50/50 hover:border-amber-400 hover:bg-white cursor-pointer shadow-2xs"
                    : isNext && !isCompleted
                    ? "border-purple-300 bg-purple-50/20 shadow-xs ring-1 ring-purple-300/60"
                    : isCompleted
                    ? "border-slate-200/90 bg-white"
                    : "border-slate-200/70 bg-slate-50/40"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Info */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        Simulation {idx + 1}
                      </span>
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
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                        12 Aufgaben · 18 Min
                      </span>
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <IconCheck className="w-3 h-3" />
                          <span>Abgeschlossen</span>
                        </span>
                      ) : isNext && !isLocked ? (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200">
                          Empfohlener nächster Durchlauf
                        </span>
                      ) : !isLocked ? (
                        <span className="text-[11px] font-medium text-slate-600">
                          Bereit
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900">
                      {simSet.title}
                    </h3>
                    <p className="text-[12.5px] text-slate-600 line-clamp-1">
                      {simSet.description}
                    </p>
                  </div>

                  {/* Right: Actions & Score */}
                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    {accuracy !== null && (
                      <div className="text-right mr-1">
                        <p className="font-mono text-[16px] font-black text-slate-900 leading-none">
                          {score} / 12
                        </p>
                        <p className={`text-[10.5px] font-bold ${accuracy >= 75 ? "text-emerald-600" : "text-amber-600"}`}>
                          {accuracy}% Quote
                        </p>
                      </div>
                    )}

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
                          onClick={() => handleLaunch(simSet, false)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-[13px] transition-all cursor-pointer ${
                            isCompleted
                              ? "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                              : "bg-purple-600 hover:bg-purple-700 text-white shadow-xs active:scale-[0.99]"
                          }`}
                        >
                          <span>{isCompleted ? "Wiederholen" : "Starten"}</span>
                          <IconArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleLaunch(simSet, true)}
                          title="Ohne Zeitlimit üben"
                          className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                        >
                          <IconClock className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── 4. STRATEGY MODAL DIALOG ─── */}
      {selectedStrategyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <span className="text-[28px]">{selectedStrategyModal.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10.5px] font-bold text-purple-700 uppercase">
                      Modul 0{selectedStrategyModal.number}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 uppercase">
                      ER-Leitfaden
                    </span>
                  </div>
                  <h3 className="text-[17px] sm:text-[19px] font-black text-slate-900">
                    {selectedStrategyModal.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <p className="text-[13.5px] text-slate-700 leading-relaxed font-medium">
                  {selectedStrategyModal.shortDesc}
                </p>
              </div>

              {/* Core Focus Box */}
              <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-4 space-y-1">
                <p className="text-[11px] font-bold text-purple-900 uppercase tracking-wider">
                  MedAT-Fokus
                </p>
                <p className="text-[13px] text-purple-950 font-semibold">
                  {selectedStrategyModal.focus}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                <p className="text-[12px] font-bold text-slate-900 uppercase tracking-wider">
                  Praxis-Leitfaden (3 Schritte)
                </p>
                <div className="space-y-2">
                  {selectedStrategyModal.steps.map((st, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-mono font-bold text-white mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitfalls */}
              <div className="space-y-2">
                <p className="text-[12px] font-bold text-amber-900 uppercase tracking-wider">
                  Häufige Fallen & Distraktoren
                </p>
                <div className="rounded-2xl border border-amber-200/90 bg-amber-50/40 p-4 space-y-2">
                  {selectedStrategyModal.pitfalls.map((pf, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[12.5px] text-amber-950">
                      <span className="text-amber-600 font-bold">✕</span>
                      <span>{pf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  Beispiel aus der Praxis
                </p>
                <p className="text-[12.5px] text-slate-800 italic">
                  "{selectedStrategyModal.example.situation}"
                </p>
                <div className="pt-2 border-t border-slate-200/80 space-y-1 text-[12px]">
                  <p className="text-slate-700">
                    <strong className="text-slate-900">Ziel:</strong> {selectedStrategyModal.example.goal}
                  </p>
                  <p className="text-purple-700">
                    <strong className="text-slate-900">Strategie:</strong> {selectedStrategyModal.example.strategy}
                  </p>
                  <p className="text-emerald-700 font-bold">
                    <strong className="text-slate-900">Wirksamste Reaktion:</strong> {selectedStrategyModal.example.effectiveResponse}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-[13px] cursor-pointer"
              >
                Verstanden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
