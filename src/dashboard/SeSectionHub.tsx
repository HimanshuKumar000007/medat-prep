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

export interface SeStrategyModule {
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
    considerations: { rank: number; label: string; text: string; rationale: string }[];
  };
}

export const SE_STRATEGY_MODULES: SeStrategyModule[] = [
  {
    id: "se-mod-1",
    number: 1,
    title: "Hierarchie der ethischen Schutzgüter",
    subtitle: "Das fundamentale Priorisierungsmodell im MedAT SE",
    icon: "⚖️",
    shortDesc:
      "Soziales Entscheiden prüft die Fähigkeit, in ethischen Dilemmata Handlungsmotive und Überlegungen nach ihrer normativen Relevanz zu ordnen. Schutz von Leben, Würde und Patientenrechten steht an oberster Stelle; Eigennutz, Bequemlichkeit oder Loyalität zu Fehlverhalten rangieren ganz unten.",
    focus: "Prüfe stets: Welches fundamentale Rechtsgut oder Schutzprinzip wird berührt?",
    pitfalls: [
      "Persönliche Sympathie oder Mitleid mit Fehlbaren über den Schutz unbeteiligter Patienten stellen.",
      "Kollegiale Loyalität als Rechtfertigung für das Verschweigen von Sicherheitsrisiken ansehen.",
    ],
    steps: [
      "Rang 1: Akuter Schutz von Leben, körperlicher Unversehrtheit und elementaren Patientenrechten.",
      "Rang 2: Berufsrechtliche Pflichten, Schweigepflicht, Evidenz und institutionelle Sorgfalt.",
      "Rang 3: Verhältnismäßigkeit, sachliche Klärung und konstruktive Fehlerkultur.",
      "Rang 4: Soziale Teambefindlichkeiten, Arbeitsaufwand und Beziehungsinteressen.",
      "Rang 5: Eigennutz, Vermeidung unangenehmer Gespräche oder persönliche Karriereangst.",
    ],
    example: {
      situation: "Ein erfahrener Operateur riecht vor Beginn einer Operation auffällig nach Alkohol.",
      considerations: [
        { rank: 1, label: "A", text: "Gefahr für Leib und Leben des Patienten im OP", rationale: "Abwendung akuter Lebensgefahr hat absolute Priorität." },
        { rank: 2, label: "B", text: "Berufsrechtliche Meldepflichten bei akuter Dienstunfähigkeit", rationale: "Institutionelle Garantenpflicht schützt den Behandlungsstandard." },
        { rank: 3, label: "C", text: "Sachliche Klärung ohne Vorverurteilung des Kollegen", rationale: "Verhältnismäßigkeit wahrt Würde und Fairness." },
        { rank: 4, label: "D", text: "Auswirkungen auf das Arbeitsklima im chirurgischen Team", rationale: "Teambefindlichkeiten dürfen Patientensicherheit nie gefährden." },
        { rank: 5, label: "E", text: "Mögliche Nachteile für die eigene Weiterbildungsbeurteilung", rationale: "Persönliche Karriereangst ist moralisch unbedeutend." },
      ],
    },
  },
  {
    id: "se-mod-2",
    number: 2,
    title: "Patientenautonomie vs. Wohlwollender Paternalismus",
    subtitle: "Der freie Wille des einwilligungsfähigen Menschen ist unantastbar",
    icon: "🛡️",
    shortDesc:
      "In der modernen Medizinethik ist der aufgeklärte, freie Wille eines urteilsfähigen Patienten die oberste Schranke jeder Behandlung. Selbst wenn eine Entscheidung medizinisch unvernünftig erscheint oder Angehörige protestieren: Gegen den Willen darf nicht behandelt werden.",
    focus: "Prüfe zuerst: Ist der Patient urteilsfähig? Wenn ja, bindet sein Wille die Rangfolge.",
    pitfalls: [
      "Glauben, dass Angehörige über einen geistig klaren Patienten bestimmen dürfen.",
      "Die eigene moralische oder religiöse Überzeugung dem Patienten aufdrängen.",
    ],
    steps: [
      "Schritt 1: Prüfe die Einwilligungs- und Urteilsfähigkeit des Betroffenen.",
      "Schritt 2: Liegt ein freier, aufgeklärter Wille vor? (Höchste Priorität).",
      "Schritt 3: Begleite Angehörige einfühlsam, ohne die Patientenrechte zu verletzen.",
    ],
    example: {
      situation: "Eine geistig fitte 82-jährige Patientin lehnt aus Überzeugung eine Bluttransfusion ab; die Kinder fordern die Transfusion.",
      considerations: [
        { rank: 1, label: "A", text: "Der frei gebildete, aufgeklärte Wille der Patientin", rationale: "Autonomie ist die oberste Schranke ärztlichen Handelns." },
        { rank: 2, label: "B", text: "Medizinische Risiken des Verzichts auf die Transfusion", rationale: "Sorgfältige Risikoaufklärung sichert die Willensbildung." },
        { rank: 3, label: "C", text: "Respektvoller Umgang mit den Sorgen der Kinder", rationale: "Angehörige verdienen Beistand, aber kein Verfügungsrecht." },
        { rank: 4, label: "D", text: "Rechtliche Absicherung des Teams gegen spätere Klagen", rationale: "Juristische Dokumentation legitimiert keine Zwangsbehandlung." },
        { rank: 5, label: "E", text: "Ob die Überzeugung aus eigener Sicht vernünftig ist", rationale: "Subjektive Wertung widerspricht dem Paternalismusverbot." },
      ],
    },
  },
  {
    id: "se-mod-3",
    number: 3,
    title: "Ranking-Mechanik & Einzigartigkeit (1–5)",
    subtitle: "Jeder Rang muss genau einmal vergeben werden — Teilpunkte sind möglich",
    icon: "🔢",
    shortDesc:
      "Jede SE-Aufgabe verlangt eine streng bijektive Reihung: Alle Zahlen von 1 (wichtigste) bis 5 (unwichtigste) müssen genau einmal zugeordnet werden. Doppelbelegungen oder fehlende Ränge machen die Aufgabe ungültig. Die Wertung basiert auf dem Grad der Übereinstimmung mit der Referenzreihung.",
    focus: "Vermeide ungültige Zustände: 5 Zeilen, 5 Ränge, 0 Duplikate.",
    pitfalls: [
      "Zwei Überlegungen denselben Rang geben (führt zur Ungültigkeit).",
      "Glauben, dass nur ein 100%-Treffer Punkte bringt (SE vergibt kontinuierliche Teilpunkte).",
    ],
    steps: [
      "Schritt 1: Identifiziere den eindeutigen Rang 1 (oberstes Schutzgut).",
      "Schritt 2: Identifiziere den eindeutigen Rang 5 (Eigennutz/Bequemlichkeit/Irrelevanz).",
      "Schritt 3: Differenziere die Ränge 2, 3 und 4 nach Pflichten, Verhältnismäßigkeit und Umfeld.",
    ],
    example: {
      situation: "Ein Kommilitone fragt nach vertraulichen Krankheitsdaten eines Politikers aus dem Praktikum.",
      considerations: [
        { rank: 1, label: "B", text: "Gesetzliche und moralische Schweigepflicht", rationale: "Unverhandelbares Berufsgeheimnis schützt die Privatsphäre." },
        { rank: 2, label: "C", text: "Vertrauen der Öffentlichkeit in die ärztliche Verschwiegenheit", rationale: "Institutioneller Schutz des Gesundheitssystems." },
        { rank: 3, label: "D", text: "Dem Pfleger diskret rückmelden, dass private Gespräche tabu sind", rationale: "Interprofessionelle Fehlerprävention." },
        { rank: 4, label: "E", text: "Dem Freund die Weigerung ohne Beziehungsstreit erklären", rationale: "Freundschaftspflege ist nachrangig." },
        { rank: 5, label: "A", text: "Wissen nutzen, um sich als gut informiert darzustellen", rationale: "Selbstdarstellung auf Kosten von Patientendaten ist verwerflich." },
      ],
    },
  },
  {
    id: "se-mod-4",
    number: 4,
    title: "Pacing-Management: 90 Sekunden pro Aufgabe",
    subtitle: "21 Minuten für 14 anspruchsvolle ethische Szenarien",
    icon: "⏱️",
    shortDesc:
      "Mit ca. 90 Sekunden pro Aufgabe bietet der SE-Subtest ausreichend Zeit für eine gründliche ethische Reflexion, erfordert aber einen disziplinierten Ablauf. Ein 21-Minuten-Gesamttimer steuert die Simulation.",
    focus: "40s Situation analysieren, 40s Ränge 1–5 zuordnen, 10s Konsistenzcheck.",
    pitfalls: [
      "Sich an subtilen sprachlichen Formulierungen festbeißen.",
      "Zu lange bei einer einzelnen Aufgabe zögern, statt für Review zu markieren.",
    ],
    steps: [
      "Schritt 1: Lies den Sachverhalt aufmerksam (Wer entscheidet? Was ist der Kernkonflikt?).",
      "Schritt 2: Ordne die Extreme zu (stärkste vs. schwächste Überlegung).",
      "Schritt 3: Bringe die mittleren drei Überlegungen in eine schlüssige Reihenfolge.",
    ],
    example: {
      situation: "Ein Arzt entdeckt einen gravierenden Rechenfehler in einer bereits eingereichten Veröffentlichung.",
      considerations: [
        { rank: 1, label: "A", text: "Schaden für die wissenschaftliche Wahrheit und spätere Patienten", rationale: "Wahrhaftigkeit schützt die Allgemeinheit vor Falschtherapien." },
        { rank: 2, label: "B", text: "Pflicht zur guten wissenschaftlichen Praxis zur unverzüglichen Korrektur", rationale: "Deontologische Normen verbieten Falschpublikation." },
        { rank: 3, label: "C", text: "Sachliche Kommunikation ohne Bloßstellung des Verursachers", rationale: "Konstruktive Fehlerkultur schützt das Team." },
        { rank: 4, label: "D", text: "Frustration und Terminverzögerung für die Co-Autoren", rationale: "Verzögerungen sind eine unvermeidbare Begleiterscheinung." },
        { rank: 5, label: "E", text: "Auswirkungen auf das eigene Ansehen beim Lehrstuhlinhaber", rationale: "Reputationssorgen dürfen keine Unwahrheit rechtfertigen." },
      ],
    },
  },
];

interface SeSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  wrongCount: number;
  onStartSet: (set: PracticeSet, forceUntimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes?: () => void;
}

export const SeSectionHub: React.FC<SeSectionHubProps> = ({
  sets,
  stats,
  wrongCount,
  onStartSet,
  onLockedSimulation,
  onStartMistakes,
}) => {
  const [selectedStrategyModule, setSelectedStrategyModule] = useState<SeStrategyModule | null>(null);
  const { userProfile } = usePractice();
  const hasPro = isUserPro(userProfile);

  const completedCount = sets.filter((s) => s.status === "completed").length;
  const activeSim = sets.find((s) => s.status === "active") || sets[0];
  const overallAccuracy = stats.answeredCount > 0 ? Math.round(stats.accuracy * 100) : 0;

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-24">
      {/* ─── Hero Header & Overview ─── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white p-7 sm:p-9 shadow-xl border border-teal-900/40">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-mono font-bold tracking-wider uppercase">
            <span>SEK · Soziales Entscheiden (SE)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Soziales Entscheiden (SE)
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            MedAT-orientierte Simulationen: 14 Aufgaben in 21 Minuten.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <IconClock className="w-4 h-4 text-teal-400" />
              14 Aufgaben · 21 Minuten · ca. 90 s pro Aufgabe
            </span>
            <span className="flex items-center gap-1.5">
              <IconTarget className="w-4 h-4 text-emerald-400" />
              Reihung von 5 Überlegungen (1–5) · Teilpunkte-System
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            {activeSim && (!hasPro && activeSim.order > 1 ? (
              <button
                onClick={() => (onLockedSimulation ? onLockedSimulation(activeSim) : onStartSet(activeSim, false))}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:shadow-amber-500/25 active:scale-95 cursor-pointer"
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
                  onClick={() => onStartSet(activeSim, false)}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95"
                >
                  <span>Simulation starten (21 Min)</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onStartSet(activeSim, true)}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-sm transition-all border border-slate-700"
                >
                  <span>Ohne Zeitlimit üben</span>
                </button>
              </>
            ))}

            {wrongCount > 0 && onStartMistakes && (
              <button
                onClick={onStartMistakes}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 font-bold text-sm transition-all border border-rose-800/60"
              >
                <span>Fehler-Pool ({wrongCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* ─── Quantitative Intelligence HUD ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-1">
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            Simulationen
          </span>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {completedCount} <span className="text-slate-400 text-sm font-normal">/ {sets.length}</span>
          </div>
          <span className="text-xs text-slate-500 font-medium block">
            {Math.round((completedCount / Math.max(1, sets.length)) * 100)}% absolviert
          </span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-1">
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            Ranking-Übereinstimmung
          </span>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {overallAccuracy > 0 ? `${overallAccuracy}%` : "—"}
          </div>
          <span className="text-xs text-slate-500 font-medium block">
            Ø Teilpunkte-Genauigkeit
          </span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-1">
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            Ø Bearbeitungszeit
          </span>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            ~88 s
          </div>
          <span className="text-xs text-slate-500 font-medium block">
            Richtwert: ca. 90 s / Aufgabe
          </span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-1">
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            Fehler-Pool
          </span>
          <div className={`text-2xl sm:text-3xl font-black ${wrongCount > 0 ? "text-rose-600" : "text-emerald-600"}`}>
            {wrongCount}
          </div>
          <span className="text-xs text-slate-500 font-medium block">
            {wrongCount > 0 ? "Aufgaben im Training" : "Keine offenen Fehler"}
          </span>
        </div>
      </div>

      {/* ─── 5 SE-Simulationen List ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>5 SE-Simulationen</span>
            <span className="text-xs font-mono font-bold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
              14 Aufgaben · 21 Min
            </span>
          </h2>
          <span className="text-xs font-medium text-slate-500">
            MedAT-orientierte Original-Aufgaben
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {sets.map((sim, idx) => {
            const isCompleted = sim.status === "completed";
            const simNumber = idx + 1;
            const isFreeSim = sim.order === 1;
            const isLocked = !hasPro && !isFreeSim;

            return (
              <div
                key={sim.id}
                onClick={() => {
                  if (isLocked) {
                    onLockedSimulation ? onLockedSimulation(sim) : onStartSet(sim, false);
                  }
                }}
                className={`border rounded-2xl p-4 sm:p-5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isLocked
                    ? "bg-slate-50/50 border-slate-200/90 hover:border-amber-400 hover:bg-white cursor-pointer shadow-2xs"
                    : isCompleted
                    ? "border-emerald-200 bg-emerald-50/20"
                    : sim.status === "active"
                    ? "bg-white border-teal-300 shadow-xs ring-2 ring-teal-500/10"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono font-black text-sm shrink-0 ${
                      isLocked
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : isCompleted
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {isLocked ? (
                      <svg className="h-4 w-4 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    ) : isCompleted ? (
                      <IconCheck className="w-5 h-5" />
                    ) : (
                      `0${simNumber}`
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        Simulation {simNumber}
                      </span>
                      {isFreeSim ? (
                        <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                          Gratis-Simulation
                        </span>
                      ) : isLocked ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-amber-300 border border-slate-800 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-2xs">
                          <svg className="h-3 w-3 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                          <span>Vollzugang</span>
                        </span>
                      ) : null}
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        14 Aufgaben · 21 Min
                      </span>
                      {isCompleted && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                          Abgeschlossen
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                      {sim.description || "MedAT-orientierte Prüfungssimulation mit 14 ethischen Entscheidungssituationen."}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {isLocked ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onLockedSimulation ? onLockedSimulation(sim) : onStartSet(sim, false);
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-slate-950 font-black px-4 py-2 text-xs shadow-xs transition-all cursor-pointer text-center"
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
                        onClick={() => onStartSet(sim, false)}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                          isCompleted
                            ? "bg-slate-100 hover:bg-slate-200 text-slate-800"
                            : "bg-teal-600 hover:bg-teal-700 text-white shadow-xs"
                        }`}
                      >
                        {isCompleted ? "Wiederholen" : "Starten"}
                      </button>
                      <button
                        onClick={() => onStartSet(sim, true)}
                        className="px-3 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                        title="Ohne Zeitlimit üben"
                      >
                        Üben
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Strategy Toolkit Modules ─── */}
      <div className="space-y-4 pt-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight">
            SE-Strategie & Bewertungsmodelle
          </h2>
          <p className="text-xs text-slate-500">
            Die 4 psychometrischen Leitlinien zur normativen Reihung im MedAT
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SE_STRATEGY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedStrategyModule(mod)}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-teal-400 hover:shadow-xs transition-all cursor-pointer space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{mod.icon}</span>
                <span className="text-[11px] font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60">
                  Modul 0{mod.number}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-teal-600 font-semibold">
                <span>Leitfaden öffnen</span>
                <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Strategy Module Detail Modal ─── */}
      {selectedStrategyModule && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedStrategyModule.icon}</span>
                <div>
                  <span className="text-xs font-mono font-bold text-teal-700 uppercase">
                    Modul 0{selectedStrategyModule.number} · SEK · SE
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {selectedStrategyModule.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedStrategyModule(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              >
                <IconClose className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedStrategyModule.shortDesc}
            </p>

            {/* Core Focus Rule */}
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 space-y-1">
              <span className="text-[11px] font-mono font-bold text-teal-800 uppercase tracking-wider block">
                Kernregel
              </span>
              <p className="text-sm font-semibold text-teal-950">
                {selectedStrategyModule.focus}
              </p>
            </div>

            {/* Pitfalls to Avoid */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Typische MedAT-Fallen
              </span>
              <ul className="space-y-1.5">
                {selectedStrategyModule.pitfalls.map((pitfall, i) => (
                  <li key={i} className="text-xs text-rose-800 bg-rose-50 border border-rose-100 rounded-xl p-2.5 flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Steps */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Schritt-für-Schritt Vorgehen
              </span>
              <div className="space-y-1.5">
                {selectedStrategyModule.steps.map((step, i) => (
                  <div key={i} className="text-xs text-slate-800 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 font-medium">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Concrete Medical Example */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 space-y-3">
              <span className="text-[11px] font-mono font-bold text-teal-400 uppercase tracking-wider block">
                Klinisches Praxisbeispiel
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {selectedStrategyModule.example.situation}
              </p>
              <div className="space-y-2 pt-1 border-t border-slate-800">
                {selectedStrategyModule.example.considerations.map((item, i) => (
                  <div key={i} className="bg-slate-800/80 rounded-xl p-2.5 text-xs flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <span className="font-bold text-white block">
                        {item.label}: {item.text}
                      </span>
                      <span className="text-slate-400 text-[11px] block">{item.rationale}</span>
                    </div>
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-400/40 shrink-0">
                      Rang {item.rank}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedStrategyModule(null)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Verstanden
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
