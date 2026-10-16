import React, { useState } from "react";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFlame,
  IconPuzzle,
  IconTarget,
  IconBrain,
  IconClose,
} from "../lib/icons";
import type { PracticeSet } from "./practiceData";
import { usePractice, type SetWithStatus, type ChapterStats } from "./practiceContext";
import { isUserPro } from "../lib/bmsAccessControl";

export interface FzStrategyModule {
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
    problem: string;
    question: string;
    correctOption: string;
    analysis: string;
  };
}

export const FZ_STRATEGY_MODULES: FzStrategyModule[] = [
  {
    id: "fz-mod-1",
    number: 1,
    title: "Kanten- & Längenabgleich",
    subtitle: "Das Ausschlussprinzip nach extremen Kantenlängen",
    icon: "📏",
    shortDesc: "Die längste und kürzeste Kante der Teilfiguren identifizieren und sofort mit den Außenkanten der Zielfiguren abgleichen.",
    focus: "Schnelle Elimination von 2 bis 3 falschen Optionen innerhalb der ersten 20 Sekunden.",
    pitfalls: [
      "Versuch, alle Teile gleichzeitig im Kopf zusammenzusetzen, anstatt systematisch nach Kantenlängen auszuschließen.",
      "Übersehen von Kanten, die im Inneren der Zielfigur verschwinden und daher außen gar nicht sichtbar sein müssen.",
      "Verwechslung von Katheten und Hypotenusen bei rechtwinkligen Dreiecken.",
    ],
    steps: [
      "Schritt 1: Das auffälligste Teilstück mit der längsten Außenkante oder Hypotenuse fixieren.",
      "Schritt 2: Die Optionen A bis E scannen: Besitzt die Zielfigur überhaupt eine Kante dieser Länge?",
      "Schritt 3: Alle Optionen sofort streichen, deren Außenmaße kürzer sind als die längste ungeteilte Kante.",
      "Schritt 4: Restliche 2 Optionen über Innenkanten und Anschlusswinkel verifizieren.",
    ],
    example: {
      problem: "Teilstücke: 1 rechtwinkliges Dreieck mit Katheten 3 cm und 4 cm (Hypotenuse 5 cm) und 1 Trapez mit Basisseite 8 cm.",
      question: "Welche Zielfigur scheidet sofort aus?",
      correctOption: "Ein Quadrat mit einer Kantenlänge von 4 cm.",
      analysis: "Die ungeteilte Basisseite des Trapezes beträgt 8 cm. Ein Quadrat mit Kantenlänge 4 cm kann dieses Teilstück unmöglich aufnehmen, da keine Kante oder Diagonale lang genug ist.",
    },
  },
  {
    id: "fz-mod-2",
    number: 2,
    title: "Winkelanalyse & Eckpunkte",
    subtitle: "90°-, 45°- und 60°-Winkel als Orientierungsanker",
    icon: "📐",
    shortDesc: "Prägnante Innenwinkel der Teilfiguren zählen und prüfen, ob sie die Eckwinkel der Zielfigur bilden können.",
    focus: "Ausschluss über Winkel-Inkompatibilität (z.B. spitze Winkel in rechtwinkligen Ecken).",
    pitfalls: [
      "Übersehen, dass zwei spitze 45°-Winkel zusammen einen 90°-Winkel an einer Ecke der Zielfigur bilden können.",
      "Ignorieren von stumpfen Winkeln (> 90°), die in Quadraten oder Rechtecken nur durch passende Gegenwinkel ausgeglichen werden können.",
    ],
    steps: [
      "Schritt 1: Zähle alle 90°-Winkel der Teilstücke.",
      "Schritt 2: Prüfe die Ecken der Zielfigur: Benötigt ein Rechteck vier 90°-Ecken, müssen diese entweder direkt aus 90°-Winkeln oder aus Summenwinkeln (z.B. 45° + 45° oder 30° + 60°) bestehen.",
      "Schritt 3: Scheidet eine Option aus, weil an einer Ecke kein passender Winkel anliegt, sofort eliminieren.",
    ],
    example: {
      problem: "Vorgegeben sind drei Dreiecke: Alle drei Dreiecke besitzen ausschließlich Winkel von 30°, 60° und 90°.",
      question: "Kann hieraus ein regelmäßiges Achteck (Innenwinkel je 135°) gebildet werden?",
      correctOption: "Nein, da kein 135°-Winkel aus Kombinationen von 30°, 60° und 90° darstellbar ist.",
      analysis: "Die Summe zweier beliebiger dieser Winkel ergibt 90°, 120° oder 150°, aber niemals 135°. Die Option scheidet sofort aus.",
    },
  },
  {
    id: "fz-mod-3",
    number: 3,
    title: "Mentale 2D-Rotation & Leitkanten",
    subtitle: "Feste Referenzachse statt diffusem Drehen im Raum",
    icon: "🔄",
    shortDesc: "Wähle eine markante 'Leitkante' des Hauptteils und drehe nur diese gedanklich in die Ausrichtung der Zielfigur.",
    focus: "Präzise 90°- und 180°-Drehungen ohne Verlust der relativen Lage anderer Kanten.",
    pitfalls: [
      "Unerlaubtes räumliches Umklappen (Spiegeln): Im MedAT darf nur in der 2D-Ebene rotiert werden!",
      "Verlust der Orientierung durch gleichzeitiges Rotieren mehrerer Teilstücke im Kopf.",
    ],
    steps: [
      "Schritt 1: Das flächengrößte Teilstück als 'Ankerteil' auswählen.",
      "Schritt 2: Eine auffällige Kante (z.B. die längste gerade Kante) als 'Leitkante' definieren.",
      "Schritt 3: Das Ankerteil gedanklich so rotieren, dass die Leitkante an einer Außenbegrenzung der Zielfigur anliegt.",
      "Schritt 4: Prüfen, ob der verbleibende Hohlraum exakt der Form der übrigen Teilstücke entspricht.",
    ],
    example: {
      problem: "Ein rechtwinkliges Dreieck mit der rechten Ecke unten links soll in ein Rechteck eingepasst werden.",
      question: "Welche Rotation ist nötig, wenn die Hypotenuse die Diagonale von links unten nach rechts oben bilden soll?",
      correctOption: "Keine Drehung erforderlich, das Dreieck liegt bereits in der Standardausrichtung.",
      analysis: "Durch Verankerung der Hypotenuse als Leitkante entfällt überflüssiges mentales Drehen und spart bis zu 40 Sekunden.",
    },
  },
  {
    id: "fz-mod-4",
    number: 4,
    title: "Flächeninhalt & Proportionen",
    subtitle: "Flächenerhaltung als schneller Plausibilitäts-Check",
    icon: "⚖️",
    shortDesc: "Die Summe der Teilflächen muss exakt dem Flächeninhalt der Zielfigur entsprechen.",
    focus: "Ausschluss offensichtlich zu kleiner oder zu großer Zielfiguren.",
    pitfalls: [
      "Optische Täuschung: Lange, schmale Streifen wirken oft flächenmäßig kleiner als kompakte Quadrate gleicher Fläche.",
      "Vergessen, dass Flächeninhalt beim Zerlegen und Drehen immer invariant bleibt.",
    ],
    steps: [
      "Schritt 1: Schnelle Schätzung der Gesamtfläche der Teilstücke (z.B. in gedachten Rastereinheiten).",
      "Schritt 2: Vergleich mit dem Flächeninhalt der Optionen A bis E.",
      "Schritt 3: Optionen streichen, deren Fläche deutlich (> 20%) von der Summe der Teile abweicht.",
    ],
    example: {
      problem: "Teile: 2 Quadrate à 4 cm² und 2 Dreiecke à 2 cm² (Gesamtfläche = 12 cm²).",
      question: "Kann hieraus ein Quadrat mit Kantenlänge 4 cm gebildet werden?",
      correctOption: "Nein, da ein Quadrat mit Kantenlänge 4 cm eine Fläche von 16 cm² erfordert (12 ≠ 16).",
      analysis: "Der Flächenabgleich entlarvt die Unmöglichkeit in 5 Sekunden ohne mühsames Puzzeln.",
    },
  },
  {
    id: "fz-mod-5",
    number: 5,
    title: "80-Sekunden-Ausschluss-Heuristik",
    subtitle: "Das Zeitmanagement-System für 15 Aufgaben in 20 Minuten",
    icon: "⏱️",
    shortDesc: "20 Minuten für 15 Aufgaben bedeuten exakt 80 Sekunden pro Aufgabe. Nach 45 Sekunden müssen mind. 3 Optionen eliminiert sein.",
    focus: "Konsequentes Timeboxing und Vermeidung von Festbeißen an einer einzelnen Aufgabe.",
    pitfalls: [
      "Länger als 90 Sekunden an einer schwierigen Figur basteln – das kostet am Ende 2 bis 3 leichte Punkte.",
      "Verharren im 'Konstruktionsmodus' statt sofort auf Ausschluss falscher Optionen umzuschalten.",
    ],
    steps: [
      "Sekunde 0–20: Schneller Scan nach längster Kante & Extremwinkeln -> 2 Optionen streichen.",
      "Sekunde 20–50: Ankerteil mental anlegen -> 3. Option streichen.",
      "Sekunde 50–70: Letzten 2 Optionen anhand der Passung des kleinsten Teils abgleichen.",
      "Sekunde 80: Markierung setzen und unverzüglich zur nächsten Aufgabe weitergehen!",
    ],
    example: {
      problem: "Du hast nach 60 Sekunden noch zwei Optionen C und D übrig und bist unsicher.",
      question: "Was ist die strategisch richtige Entscheidung?",
      correctOption: "Das markanteste Detailmerkmal zwischen C und D vergleichen, Entscheidung treffen und weitergehen.",
      analysis: "Lieber eine 50:50-Entscheidung treffen als 60 weitere Sekunden verlieren und zwei nachfolgende Aufgaben gar nicht mehr sehen.",
    },
  },
  {
    id: "fz-mod-6",
    number: 6,
    title: "Schnittmuster & Zerlegungen",
    subtitle: "Klassische Zerlegungsgeometrien im MedAT erkennen",
    icon: "🧩",
    shortDesc: "MedAT-Aufgaben nutzen wiederkehrende Schnittmuster: Diagonalschnitte, Parallelschnitte und Dreieckskombinationen.",
    focus: "Mustererkennung: Zerlegung eines Quadrats in 2 Trapeze + 2 Dreiecke oder 4 Dreiecke.",
    pitfalls: [
      "Glauben, dass jedes Teilstück eine völlig unregelmäßige Fantasieform hat – meist stecken elementare Standardformen dahinter.",
    ],
    steps: [
      "Schritt 1: Prüfe, ob Teilstücke paarweise kongruent sind (z.B. zwei gleiche Dreiecke).",
      "Schritt 2: Kongruente Teile gedanklich zu einer Standardform (Quadrat, Rechteck, Parallelogramm) verschmelzen.",
      "Schritt 3: Den zusammengesetzten Block mit den übrigen Teilen verbinden.",
    ],
    example: {
      problem: "Gegeben sind 2 kongruente rechtwinklige Dreiecke und 1 Rechteck.",
      question: "Welche Grundfigur lässt sich durch Aneinanderlegen der Hypotenusen der beiden Dreiecke bilden?",
      correctOption: "Ein zweites Rechteck oder ein Parallelogramm.",
      analysis: "Zwei kongruente rechtwinklige Dreiecke an der Hypotenuse ergeben stets ein Rechteck. Zusammen mit dem ersten Rechteck entsteht sofort ein größeres Rechteck oder Quadrat.",
    },
  },
];

export const FZ_SIMULATION_THEMES: Record<number, { title: string; topic: string; focus: string }> = {
  1: {
    title: "Simulation 1 — Figuren zusammensetzen",
    topic: "Grundlagen, Schnittmuster & Kantenabgleich",
    focus: "Elementare Zerlegungen von Quadraten und Rechtecken, Hypotenusen-Filter & Längenkontrolle.",
  },
  2: {
    title: "Simulation 2 — Figuren zusammensetzen",
    topic: "Rechtwinklige & schiefe Dreiecke",
    focus: "Kombinationen aus mehreren Dreiecken, Winkelanalyse (90°, 45°, 60°) und mentale 2D-Rotation.",
  },
  3: {
    title: "Simulation 3 — Figuren zusammensetzen",
    topic: "Trapeze, Vierecke & Parallelogramme",
    focus: "Schiefe Schnittkanten, symmetrische Trapeze und Erhaltung der Gesamtfläche unter Zeitdruck.",
  },
  4: {
    title: "Simulation 4 — Figuren zusammensetzen",
    topic: "Mehrteilige Polygone & Ausschluss-Heuristik",
    focus: "Komplexe Zerlegungen aus 4–5 Teilstücken, schnelle Elimination falscher Optionen im 80s-Budget.",
  },
  5: {
    title: "Simulation 5 — Figuren zusammensetzen",
    topic: "Finale MedAT-Generalprobe (Höchste Pacing-Stufe)",
    focus: "Authentische Prüfungsbedingungen: 15 Aufgaben in exakt 20 Minuten (Ziel: ≥80% Cutoff-Sicherheit).",
  },
  6: {
    title: "Simulation 6 — Figuren zusammensetzen",
    topic: "Meister-Simulation: Extrem-Geometrien & Fangfragen",
    focus: "Asymmetrische Polygone, 6-Teile-Verbünde, subtile Winkelfallen & echte Option-E-Ausschlüsse.",
  },
  7: {
    title: "Simulation 7 — Figuren zusammensetzen",
    topic: "Elite-Simulation: Nicht-konvexe Polygone & Feinkanten",
    focus: "Scheren-Schnitte, zinnenartige Heptagone, Stufenmonumente & komplexe Feinkanten-Diskrimination.",
  },
  8: {
    title: "Simulation 8 — Figuren zusammensetzen",
    topic: "Grandmaster-Simulation: Diagonalschnitte & Schräganker",
    focus: "Kerb-Heptagone, überhängende Krag-Trapeze, dreistufige Zikkurats & asymmetrische Bruchlinien.",
  },
  9: {
    title: "Simulation 9 — Figuren zusammensetzen",
    topic: "Championship-Simulation: Komplexe Verbundfiguren & Rotationsfallen",
    focus: "Scherbenschnitte, Asymmetrie-Türme, Doppelspitz-Hexagone & echte Option-E-Fallen im 80s-Budget.",
  },
  10: {
    title: "Simulation 10 — Figuren zusammensetzen",
    topic: "Apex-Simulation: Kristalline Schnitte & Tangram-Polygone",
    focus: "Doppelgiebel, Schwalbenschwanz-Heptagone, 45°-Scherbenschnitte & subtile Steigungsfallen im 80s-Budget.",
  },
  11: {
    title: "Simulation 11 — Figuren zusammensetzen",
    topic: "Titan-Simulation: Polykristalline Schnitte & Symmetrie-Illusionen",
    focus: "Meißel-Pfeile, Burg-Monumente, Pultdach-Kathedralen & komplexe Flankensteigungs-Ausschlüsse im 80s-Budget.",
  },
};

interface FzSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  wrongCount: number;
  onStartSimulation: (set: PracticeSet, forceUntimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
}

export function FzSectionHub({
  sets,
  stats,
  wrongCount,
  onStartSimulation,
  onLockedSimulation,
  onStartMistakes,
}: FzSectionHubProps) {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<FzStrategyModule | null>(null);
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
      {/* ─── 1. FZ HERO & OFFICIAL METRICS BANNER ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-red-50 text-red-700 border border-red-200/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                FZ · KFF (MedAT-H & MedAT-Z)
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                15 Aufgaben pro Simulation
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                20 Min. Prüfungszeit (~80 s / Aufgabe)
              </span>
              <span className="rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 text-[11px] font-bold">
                100% visuell & kognitiv — Keine Formelsammlung
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
              Figuren zusammensetzen (FZ)
            </h1>
            <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-slate-600 max-w-3xl">
              Mentale Rotation, Kantenanalyse und geometrischer Abgleich im MedAT-orientierten Format.
              Finde durch systematisches Ausschließen in Rekordzeit heraus, welche Zielfigur aus den vorgegebenen
              Teilstücken lückenlos und ohne Überlappung zusammengesetzt werden kann.
            </p>
          </div>
        </div>

        {/* 4 FZ Metrics Cards Grid */}
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
              {completedCount === sets.length ? "Alle FZ absolviert" : `${sets.length - completedCount} verbleibend`}
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

          {/* Card 3: Zeitmanagement vs. 80s Benchmark */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">ZEIT</span>
              <span className="font-mono text-slate-600">≤ 80s</span>
            </div>
            <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
              {avgSecondsPerQ > 0 ? (
                <>
                  {avgSecondsPerQ} <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 font-sans">s/Aufg.</span>
                </>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </p>
            <div className="text-[10px] xs:text-[11px] font-bold truncate">
              {avgSecondsPerQ > 0 ? (
                avgSecondsPerQ <= 80 ? (
                  <span className="text-emerald-700">✓ {80 - avgSecondsPerQ}s Puffer</span>
                ) : (
                  <span className="text-amber-700">⚠ +{avgSecondsPerQ - 80}s</span>
                )
              ) : (
                <span className="text-slate-400">Noch keine Daten</span>
              )}
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400">20 Min. / 15 Aufgaben</p>
          </div>

          {/* Card 4: Offene FZ-Schwachstellen */}
          <div
            onClick={() => {
              if (wrongCount > 0) {
                onStartMistakes();
              }
            }}
            className={`rounded-xl sm:rounded-2xl border p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2 transition-all ${
              wrongCount > 0
                ? "border-red-200 bg-red-50/40 hover:border-red-300 cursor-pointer"
                : "border-slate-200/80 bg-slate-50/70"
            }`}
          >
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
              {wrongCount} <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 font-sans">Aufgaben</span>
            </p>
            <div className="text-[10px] xs:text-[11px] font-bold truncate">
              {wrongCount > 0 ? (
                <span className="text-red-700 underline">Üben →</span>
              ) : (
                <span className="text-emerald-700">Fehlerfrei</span>
              )}
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400">Gezieltes Training</p>
          </div>
        </div>
      </div>

      {/* ─── 2. NÄCHSTER SCHRITT (PRIMARY ACTION BANNER - JUST START) ─── */}
      {nextActiveSet && (
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 rounded-3xl border border-red-200 bg-red-50/40 p-6 sm:p-8 shadow-sm">
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className={`flex h-2 w-2 rounded-full ${!hasPro && nextActiveSet.order > 1 ? "bg-amber-500" : "bg-red-600 animate-pulse"}`} />
              <p className={`text-[11px] font-black uppercase tracking-widest ${!hasPro && nextActiveSet.order > 1 ? "text-amber-800" : "text-red-700"}`}>
                {!hasPro && nextActiveSet.order > 1
                  ? "🔒 Vollzugang erforderlich · Prüfungssimulation " + nextActiveSet.order
                  : "Nächster Schritt · Offizielle Prüfungssimulation"}
              </p>
            </div>
            <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 tracking-tight leading-snug">
              {nextActiveSet.title} — {FZ_SIMULATION_THEMES[nextActiveSet.order]?.topic || nextActiveSet.subtitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] font-medium text-slate-600">
              15 geometrische Aufgaben · 20 Minuten Prüfungszeit (~80 s pro Aufgabe) · Mentale Rotation & Kantenabgleich
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {!hasPro && nextActiveSet.order > 1 ? (
              <button
                onClick={() => (onLockedSimulation ? onLockedSimulation(nextActiveSet) : onStartSimulation(nextActiveSet, false))}
                className="rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] px-7 py-3.5 text-[14px] font-black text-slate-950 shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
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
                  className="rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] px-5 py-3.5 text-[13.5px] font-bold text-slate-700 shadow-2xs transition-all text-center cursor-pointer"
                >
                  Ohne Zeitlimit üben
                </button>
                <button
                  onClick={() => onStartSimulation(nextActiveSet, false)}
                  className="rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] px-7 py-3.5 text-[14px] font-black text-white shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{nextActiveSet.status === "completed" ? "Simulation wiederholen" : "Simulation starten (20 Min)"}</span>
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ─── 3. LERNEN & TRAINIEREN — STRATEGIE & METHODIK (6 MODULES) ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-900">
              Lernen & Trainieren
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              6 essenzielle Lösungsstrategien & Denkmuster für Figuren zusammensetzen im MedAT
            </p>
          </div>
          <span className="text-[11.5px] font-bold text-slate-400">Klicke eine Strategie für Details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FZ_STRATEGY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedStrategyModal(mod)}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-[18px]">
                    {mod.icon}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-black text-slate-600">
                    Modul {mod.number}
                  </span>
                </div>
                <h3 className="text-[15px] font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {mod.title}
                </h3>
                <p className="text-[12.5px] font-medium text-slate-500 line-clamp-2 leading-relaxed">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px] font-bold text-red-600 group-hover:underline">
                <span>Strategie ansehen</span>
                <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 4. 5 OFFIZIELLE FZ-PRÜFUNGSSIMULATIONEN (AUTHENTISCHES MEDAT-FORMAT) ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-900">
              {sets.length} Offizielle FZ-Prüfungssimulationen
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              Exakt 15 Aufgaben in 20 Minuten unter authentischen MedAT-Testbedingungen (~80 s pro Aufgabe).
            </p>
          </div>
          <span className="text-[11.5px] font-bold text-slate-400">Authentische Prüfungsbedingungen</span>
        </div>

        <div className="space-y-4">
          {sets.map((set) => {
            const isCompleted = set.status === "completed";
            const theme = FZ_SIMULATION_THEMES[set.order];

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
                          Entwurf ({draftCount}/15 beantwortet)
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] font-medium text-slate-500 line-clamp-1">
                      {theme?.focus || set.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-[11.5px] font-semibold text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <IconClock className="h-3.5 w-3.5" />
                        20 Minuten
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <IconTarget className="h-3.5 w-3.5" />
                        15 Aufgaben
                      </span>
                      <span>·</span>
                      <span>Richtzeit: 80 s / Aufgabe</span>
                      {set.bestAttempt && (
                        <>
                          <span>·</span>
                          <span className="text-emerald-700 font-bold">
                            Bestzeit: {Math.floor(set.bestAttempt.timeSpentSeconds / 60)}m {set.bestAttempt.timeSpentSeconds % 60}s
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
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
                      <span>→</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => onStartSimulation(set, true)}
                        className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] px-3.5 sm:px-4 py-2.5 text-[12px] sm:text-[12.5px] font-bold text-slate-700 shadow-2xs transition-all cursor-pointer text-center"
                      >
                        Ohne Zeitlimit
                      </button>
                      <button
                        onClick={() => onStartSimulation(set, false)}
                        className={`w-full sm:w-auto rounded-xl px-4 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-[0.98] text-center ${
                          isCompleted
                            ? "bg-slate-900 hover:bg-slate-800 text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        <span>{isCompleted ? "Wiederholen" : "Simulation starten"}</span>
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

      {/* ─── 5. STRATEGY DETAIL MODAL ─── */}
      {selectedStrategyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-100">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 text-[14px]">
                    {selectedStrategyModal.icon}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10.5px] font-black text-slate-600">
                    FZ Modul {selectedStrategyModal.number}
                  </span>
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight">
                  {selectedStrategyModal.title}
                </h3>
                <p className="text-[13px] font-bold text-red-600">
                  {selectedStrategyModal.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            {/* Strategic Focus */}
            <div className="rounded-2xl bg-red-50/50 border border-red-200/80 p-4 space-y-1">
              <p className="text-[11px] font-black uppercase tracking-wider text-red-700">Strategischer Fokus</p>
              <p className="text-[13.5px] font-medium text-slate-800 leading-relaxed">
                {selectedStrategyModal.focus}
              </p>
            </div>

            {/* Practical Step-by-Step Guide */}
            <div className="space-y-3">
              <h4 className="text-[14px] font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-[10px]">✓</span>
                Konkrete Vorgehensweise (4 Schritte)
              </h4>
              <div className="space-y-2.5">
                {selectedStrategyModal.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/60 p-3 text-[13px] text-slate-700">
                    <span className="font-mono text-red-600 font-bold shrink-0">{idx + 1}.</span>
                    <p className="leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Pitfalls (Fallen) */}
            <div className="space-y-3">
              <h4 className="text-[14px] font-black uppercase tracking-wider text-amber-800 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-white text-[10px]">!</span>
                Typische MedAT-Fallen
              </h4>
              <ul className="space-y-2 text-[13px] text-slate-600">
                {selectedStrategyModal.pitfalls.map((pitfall, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-500 font-bold mt-0.5">✕</span>
                    <span className="leading-snug">{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real MedAT Example & Solution Analysis */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 space-y-3">
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">Praxis-Beispiel & Analyse</p>
              <div className="space-y-2 text-[13px]">
                <p className="font-semibold text-slate-900 italic">
                  „{selectedStrategyModal.example.problem}“
                </p>
                <p className="font-bold text-slate-800">
                  Frage: {selectedStrategyModal.example.question}
                </p>
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-emerald-900 font-medium">
                  <span className="font-bold">Lösung: </span>
                  {selectedStrategyModal.example.correctOption}
                </div>
                <p className="text-slate-600 text-[12.5px] leading-relaxed pt-1">
                  <strong className="text-slate-800">Strategie-Analyse: </strong>
                  {selectedStrategyModal.example.analysis}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="rounded-xl bg-slate-900 hover:bg-slate-800 px-6 py-2.5 text-[13px] font-bold text-white transition-colors"
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
