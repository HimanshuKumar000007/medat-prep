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

export interface GmStrategyModule {
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
    cardInfo: string;
    strategy: string;
    recallSample: string;
  };
}

export const GM_STRATEGY_MODULES: GmStrategyModule[] = [
  {
    id: "gm-mod-1",
    number: 1,
    title: "Loci-Methode & Routentechnik für 8 Personen",
    subtitle: "Räumliche Verankerung der 8 Allergieausweise im Gedächtnis",
    icon: "🏛️",
    shortDesc: "Lege vor Beginn der 8 Minuten eine feste mentale Route mit 8 markanten Wegpunkten fest (z.B. deine Wohnung oder dein Schulweg). Jeder Ausweis bewohnt einen festen Raum.",
    focus: "Schnelle Orientierung während der Abfragephase ohne Verwechslung der 8 Ausweiskarten.",
    pitfalls: [
      "Willkürliches Einprägen ohne feste Reihenfolge führt zu Auslassungen.",
      "Zu ähnliche Wegpunkte führen zu Interferenzen zwischen den Personen.",
    ],
    steps: [
      "Schritt 1: Bestimme vor der Simulation 8 feste Stationen (z.B. 1. Eingangstür, 2. Garderobe, 3. Flur, 4. Küche, 5. Esstisch, 6. Sofa, 7. Schreibtisch, 8. Balkon).",
      "Schritt 2: Platziere jede Person visuell und interaktiv an ihrem Wegpunkt.",
      "Schritt 3: Lasse die Person eine auffällige Handlung an der Station ausführen.",
    ],
    example: {
      cardInfo: "Ausweis 1: NERIA KRAMM (14.07., Blutgruppe A, Haselnuss-Allergie, Österreich)",
      strategy: "An der Eingangstür (Station 1) empfängt dich NERIA mit einer riesigen Haselnuss in der Hand, auf der eine rot-weiß-rote Flagge steckt.",
      recallSample: "Frage nach Allergie von Neria Kramm -> Sofortiges Aufrufen von Station 1 -> Bild der Haselnuss.",
    },
  },
  {
    id: "gm-mod-2",
    number: 2,
    title: "Geschichten-Methode & Namensassoziation",
    subtitle: "Kreative Morphem-Verknüpfung von Name, Geburtstag & Medikament",
    icon: "📖",
    shortDesc: "Verbinde die fiktiven Namen und das Geburtsdatum zu einer lebendigen, bizarren Minigeschichte. Je emotionaler oder absurder das mentale Bild, desto fester haftet es.",
    focus: "Müheloser Abruf von Geburtstag und Medikamenteneinnahme.",
    pitfalls: [
      "Zu abstrakte Geschichten, die während des 15-Minuten-Zeitdrucks vergessen werden.",
      "Vergessen der binären Einnahme (Medikamente: Ja/Nein).",
    ],
    steps: [
      "Schritt 1: Zerlege den Namen in klangliche Assoziationen (z.B. KRAMM -> Krampf).",
      "Schritt 2: Integriere den Geburtstag als Datum oder Bild (14.07. = 14. Juli / Nationalfeiertag).",
      "Schritt 3: Kodierung Medikament: Ja = Pille/Spritze in der Hand, Nein = kerngesunder Apfel.",
    ],
    example: {
      cardInfo: "MILAN VOGEL (23.09., Medikament: Ja, Blutgruppe B, Penicillin-Allergie)",
      strategy: "Ein MILAN (Raubvogel) schluckt am 23. September vor der Abreise eine riesige Pille (Medikament: Ja).",
      recallSample: "Nimmt Milan Vogel Medikamente? -> Das Bild der geschluckten Pille liefert sofort: JA.",
    },
  },
  {
    id: "gm-mod-3",
    number: 3,
    title: "Ziffernkodierung für 5-stellige Ausweisnummern",
    subtitle: "Zweier- & Dreier-Blöcke (23-581) oder akustischer Rhythmus",
    icon: "🔢",
    shortDesc: "5-stellige Nummern (z.B. 58321) lassen sich am besten in 2 Blöcke zerlegen: 2-stellig (58) + 3-stellig (321) oder durch Quersummen und Countdown-Muster.",
    focus: "Sichere Zuordnung der Ausweisnummern zu den Personen ohne Zahlendreher.",
    pitfalls: [
      "Versuch, alle 5 Ziffern isoliert auswendig zu lernen.",
      "Übersehen von Zahlensymmetrien oder Stufen (z.B. 3-2-1).",
    ],
    steps: [
      "Schritt 1: Scanne die 5 Ziffern auf Muster (z.B. 58-321 -> 58 + Countdown 321).",
      "Schritt 2: Bilde einen kurzen akustischen Reim oder Sprachrhythmus.",
      "Schritt 3: Verknüpfe die markante Zahl mit dem Merkmal der Person.",
    ],
    example: {
      cardInfo: "Ausweis-Nr.: 58321 (Person: NERIA KRAMM)",
      strategy: "58-321: Neria zählt rückwärts 3, 2, 1!",
      recallSample: "Welche Ausweisnummer hatte Neria Kramm? -> Die Endung 321 schließt Distraktoren wie 58312 sofort aus.",
    },
  },
  {
    id: "gm-mod-4",
    number: 4,
    title: "Attribut-Matrix & Kreuzrelations-Sicherheit",
    subtitle: "Blutgruppen (A, B, AB, 0), Länder & Mehrfachallergien",
    icon: "🛡️",
    shortDesc: "MedAT-Fragen fragen häufig nach Schnittmengen ('Welche Person mit Blutgruppe AB hatte eine Allergie gegen Birke?'). Eine strukturierte mentale Matrix verhindert Verwechslungen.",
    focus: "Souveränes Lösen komplexer Kreuzfragen (Cross-Card Queries).",
    pitfalls: [
      "Nur Einzelmerkmale isoliert lernen ohne Beziehungsnetz.",
      "Option E ('Keine der gegebenen Antworten ist korrekt') ignorieren, wenn kein Treffer passt.",
    ],
    steps: [
      "Schritt 1: Zähle im Überblick: Wie viele Personen haben Blutgruppe 0? Welche Länder kommen doppelt vor?",
      "Schritt 2: Markiere Ausreißer mental (z.B. einzige Person ohne Allergien).",
      "Schritt 3: Prüfe bei Kreuzfragen beide Bedingungen systematisch gegen die memorierte Person.",
    ],
    example: {
      cardInfo: "Frage: 'Welche Person aus Deutschland hat Blutgruppe 0?'",
      strategy: "Filtern nach Land Deutschland -> 2 Personen -> Prüfen der Blutgruppe -> Eindeutiger Match.",
      recallSample: "Sichere Elimination falscher Antwortoptionen in unter 20 Sekunden.",
    },
  },
];

export const GM_SIMULATION_THEMES: Record<
  number,
  {
    title: string;
    subtitle: string;
    topic: string;
    focus: string;
  }
> = {
  1: {
    title: "Simulation 1 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    topic: "Grundlagen-Check: 8 Allergieausweise, Einzelmerkmale & direkte Faktenabfrage",
    focus: "Einstieg in das 8-Minuten-Pacing (~60 s / Ausweis) & Loci-Routentraining.",
  },
  2: {
    title: "Simulation 2 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    topic: "Medikamenten-Fokus, Blutgruppen-Verteilung & Zahlencodes",
    focus: "Schnelle Erfassung binärer Werte (Ja/Nein) & 5-stellige Ausweisnummern.",
  },
  3: {
    title: "Simulation 3 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    topic: "Mehrfachallergien, Kreuzabfragen & Länderzuordnung",
    focus: "Kombinatorische Abfragen zweier Merkmale & Ausschluss unpassender Distraktoren.",
  },
  4: {
    title: "Simulation 4 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    topic: "Hohe Merkmalsdichte, ähnliche Geburtsdaten & Option-E-Fallen",
    focus: "Präzises Unterscheiden ähnlicher Datumsangaben & sicheres Erkennen von Option E.",
  },
  5: {
    title: "Simulation 5 — Gedächtnis & Merkfähigkeit",
    subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
    topic: "Finale MedAT-Generalprobe: Höchste Abrufgeschwindigkeit & Interferenz-Schutz",
    focus: "Authentische MedAT-Prüfungsbedingungen, komplexe Kreuzbeziehungen & Spitzen-Pacing.",
  },
};

interface GmSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  wrongCount: number;
  onStartSimulation: (set: PracticeSet, forceUntimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
}

export function GmSectionHub({
  sets,
  stats,
  wrongCount,
  onStartSimulation,
  onLockedSimulation,
  onStartMistakes,
}: GmSectionHubProps) {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<GmStrategyModule | null>(null);
  const { userProfile } = usePractice();
  const hasPro = isUserPro(userProfile);

  // Active or next simulation
  const nextActiveSet = sets.find((s) => s.status !== "completed") || sets[0];
  const completedCount = sets.filter((s) => s.status === "completed").length;
  const progressPct = Math.round((completedCount / Math.max(sets.length, 1)) * 100);

  // Average time calculation (Benchmark: ~36s per question in recall phase)
  const totalElapsedSeconds = sets.reduce((acc, s) => acc + (s.bestAttempt?.timeSpentSeconds || 0), 0);
  const totalCompletedQuestions = completedCount * 25;
  const avgSecondsPerQ =
    totalCompletedQuestions > 0 ? Math.round(totalElapsedSeconds / totalCompletedQuestions) : 0;

  const handleLaunch = (set: PracticeSet, forceUntimed?: boolean) => {
    if (typeof document !== "undefined" && !document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    onStartSimulation(set, forceUntimed);
  };

  return (
    <div className="space-y-8 pb-24 pt-2">
      {/* ─── 1. GM HERO & METRICS BANNER ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse" />
                GM · KFF (MedAT-H & MedAT-Z)
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                8 Allergieausweise · 64 Einheiten
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                8 Min Merkphase · 25 Fragen · 15 Min Abfrage
              </span>
              <span className="rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 text-[11px] font-bold">
                MedAT-orientierte GM-Simulationen
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
              Gedächtnis & Merkfähigkeit (GM)
            </h1>
            <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-slate-600 max-w-3xl">
              MedAT-orientierte Gedächtnissimulationen mit Allergieausweisen: Präge dir in der 8-minütigen Merkphase
              8 fiktive Allergieausweise mit je 8 Informationseinheiten (64 Fakten) ein. Nach der Intervall-Phase
              beantwortest du in der 15-minütigen Abfragephase 25 gezielte Detail- und Kreuzfragen.
            </p>
          </div>
        </div>

        {/* 4 GM Metrics Cards Grid */}
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
                className="h-full bg-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400 truncate">
              {completedCount === sets.length ? "Alle GM absolviert" : `${sets.length - completedCount} verbleibend`}
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

          {/* Card 3: Durchschnittliche Abfragezeit */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">ABFRAGEZEIT</span>
              <span className="font-mono text-slate-600">≤ 36s</span>
            </div>
            <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
              {avgSecondsPerQ > 0 ? `${avgSecondsPerQ}s` : "—"}
            </p>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400 truncate">
              Budget: ~36s / Frage
            </p>
          </div>

          {/* Card 4: Fehler-Pool */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">FEHLER</span>
              {wrongCount > 0 ? (
                <span className="font-mono text-purple-700 text-[10px] font-bold">
                  {wrongCount}
                </span>
              ) : (
                <span className="text-emerald-700 text-[10px] font-bold">0</span>
              )}
            </div>
            <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
              {wrongCount}
            </p>
            {wrongCount > 0 ? (
              <button
                onClick={onStartMistakes}
                className="inline-flex items-center gap-1 text-[10.5px] xs:text-[11px] font-bold text-purple-600 hover:text-purple-700 hover:underline truncate"
              >
                Wiederholen →
              </button>
            ) : (
              <p className="text-[10px] xs:text-[10.5px] font-medium text-emerald-600 truncate">
                Keine Fehler
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
                <span>{nextActiveSet.title} starten →</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleLaunch(nextActiveSet, true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.99] text-slate-700 font-bold text-[14px] shadow-2xs transition-all cursor-pointer"
              >
                <IconClock className="w-4 h-4 text-slate-400" />
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
              Mnemotechnik & Merkstrategien (GM)
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              4 essenzielle Werkzeuge für die 8-minütige Merkphase der 8 Allergieausweise
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GM_STRATEGY_MODULES.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedStrategyModal(module)}
              className="group cursor-pointer rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[24px]">{module.icon}</span>
                  <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                    STRATEGIE {module.number}
                  </span>
                </div>
                <h3 className="font-black text-slate-900 text-[15px] group-hover:text-purple-600 transition-colors leading-snug">
                  {module.title}
                </h3>
                <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3 font-medium">
                  {module.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px] font-bold text-purple-600 group-hover:translate-x-0.5 transition-transform">
                <span>Leitfaden öffnen</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. 5 GM-SIMULATIONEN CARDS ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight">
              5 GM-Simulationen
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              Vollwertige MedAT-orientierte Prüfungsdurchläufe: 8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {sets.map((set, idx) => {
            const simNumber = idx + 1;
            const theme = GM_SIMULATION_THEMES[simNumber] || {
              title: set.title,
              subtitle: "8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage",
              topic: set.focus || "MedAT-orientierte Gedächtnissimulation",
              focus: set.description || "Umfassendes Gedächtnistraining",
            };

            const isCompleted = set.status === "completed";
            const isFreeSim = set.order === 1;
            const isLocked = !hasPro && !isFreeSim;
            const bestAcc = set.bestScore !== undefined ? set.bestScore : (set.bestAttempt?.score ?? null);
            const timeSpent = set.bestAttempt?.timeSpentSeconds ?? null;

            return (
              <div
                key={set.id}
                onClick={() => {
                  if (isLocked) {
                    onLockedSimulation ? onLockedSimulation(set) : handleLaunch(set, false);
                  }
                }}
                className={`rounded-2xl border transition-all p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 ${
                  isLocked
                    ? "border-slate-200/90 bg-slate-50/50 hover:border-amber-400 hover:bg-white cursor-pointer"
                    : isCompleted
                      ? "border-emerald-200/90 bg-emerald-50/20"
                      : "border-slate-200/90 bg-white hover:border-slate-300 shadow-2xs hover:shadow-sm"
                }`}
              >
                {/* Left: Metadata */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-black text-purple-700 bg-purple-50 border border-purple-200/80 px-2.5 py-0.5 rounded-lg">
                      SIMULATION {simNumber}
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
                    ) : null}
                    <span className="text-[11.5px] font-bold text-slate-500">
                      8 Ausweise · 8 Min Merkphase · 25 Fragen · 15 Min Abfrage
                    </span>
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 font-sans text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-lg">
                        <IconCheck className="w-3 h-3 text-emerald-700" />
                        Absolviert
                      </span>
                    )}
                  </div>

                  <h3 className="text-[17px] sm:text-[19px] font-black text-slate-900 tracking-tight">
                    {theme.title}
                  </h3>

                  <p className="text-[13px] text-slate-600 font-medium max-w-2xl leading-relaxed">
                    <span className="font-bold text-slate-700">Fokus: </span>
                    {theme.topic}. {theme.focus}
                  </p>
                </div>

                {/* Right: Performance & Action Buttons */}
                <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto pt-2.5 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  {bestAcc !== null && (
                    <div className="text-left sm:text-right px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-400 block uppercase">
                        Bestergebnis
                      </span>
                      <span className="font-mono font-black text-[14px] sm:text-[15px] text-slate-800">
                        {bestAcc}%
                        {timeSpent ? ` (${Math.round(timeSpent / 60)}m)` : ""}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 ml-auto sm:ml-0 w-full sm:w-auto justify-end">
                    {isLocked ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onLockedSimulation ? onLockedSimulation(set) : handleLaunch(set, false);
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
                          onClick={() => handleLaunch(set, false)}
                          className="px-4 sm:px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-[12.5px] sm:text-[13px] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 text-center"
                        >
                          <span>{isCompleted ? "Wiederholen" : "Starten"}</span>
                          <IconArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleLaunch(set, true)}
                          className="px-3 sm:px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-600 font-bold text-[12px] transition-all cursor-pointer active:scale-95 text-center"
                          title="Ohne Zeitlimit üben"
                        >
                          Üben
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

      {/* ─── 4. STRATEGY DETAIL MODAL ─── */}
      {selectedStrategyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-2xl w-full shadow-2xl space-y-4 sm:space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[32px]">{selectedStrategyModal.icon}</span>
                <div>
                  <span className="font-mono text-[10px] font-bold text-purple-700 uppercase bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                    STRATEGIE {selectedStrategyModal.number}
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight mt-0.5">
                    {selectedStrategyModal.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-medium">
                    {selectedStrategyModal.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <IconClose className="w-6 h-6" />
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/80 text-[13px] text-purple-950 font-medium leading-relaxed">
              <span className="font-bold">Prüfungsfokus: </span>
              {selectedStrategyModal.focus}
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-[13px] uppercase tracking-wider">
                Vorgehen Schritt für Schritt
              </h4>
              <div className="space-y-2">
                {selectedStrategyModal.steps.map((step, idx) => (
                  <div
                    key={`step-${idx}`}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[13px] text-slate-700 font-medium"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-[13px] uppercase tracking-wider">
                Häufige Fehler (Pitfalls)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-[13px] text-slate-600 font-medium">
                {selectedStrategyModal.pitfalls.map((pit, idx) => (
                  <li key={`pit-${idx}`}>{pit}</li>
                ))}
              </ul>
            </div>

            {/* Example Card Box */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5">
              <span className="text-[10.5px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                Konkretes Anwendungsbeispiel
              </span>
              <div className="text-[12.5px] font-mono text-slate-300 bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                {selectedStrategyModal.example.cardInfo}
              </div>
              <div className="text-[13px] text-slate-200 leading-relaxed font-medium">
                <span className="font-bold text-amber-300">Gedächtnisbild: </span>
                {selectedStrategyModal.example.strategy}
              </div>
              <div className="text-[12.5px] text-emerald-300 leading-relaxed font-medium">
                <span className="font-bold text-emerald-400">Abfrage-Ergebnis: </span>
                {selectedStrategyModal.example.recallSample}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold transition-all"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
