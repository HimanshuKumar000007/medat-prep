import React, { useState } from "react";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFlame,
  IconPuzzle,
  IconTarget,
  IconTextLines,
  IconBrain,
  IconClose,
} from "../lib/icons";
import type { PracticeSet } from "./practiceData";
import { usePractice, type SetWithStatus, type ChapterStats } from "./practiceContext";
import { isUserPro } from "../lib/bmsAccessControl";

export interface TvStrategyModule {
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
    passage: string;
    question: string;
    correctOption: string;
    analysis: string;
  };
}

export const TV_STRATEGY_MODULES: TvStrategyModule[] = [
  {
    id: "tv-mod-1",
    number: 1,
    title: "Grundlagen & Zeitmanagement",
    subtitle: "Das 175-Sekunden-Budget & 2-Phasen-Lesetechnik",
    icon: "⏱️",
    shortDesc: "35 Minuten für 12 Fragen bedeutet ~175 Sekunden pro Frage und ~7–8 Minuten pro Textkomplex.",
    focus: "Optimales Zeitbudget und Vermeidung von Hektik oder Festbeißen an einzelnen Detailsätzen.",
    pitfalls: [
      "Verlieren im ersten Lesen: Versuchen, jedes biochemische Fremdwort im ersten Durchgang auswendig zu lernen.",
      "Zu frühes Raten: Nicht zum Text zurückkehren und stattdessen aus dem flüchtigen Erinnerungsfragment antworten.",
      "Kein Puffer: Mehr als 3 Minuten für eine einzelne Frage aufwenden, wodurch am Ende Fragen unbeantwortet bleiben.",
    ],
    steps: [
      "Phase 1 (1,5 bis 2 Minuten): Text zügig überfliegen, um den gedanklichen roten Faden, die Struktur (Absätze) und das Thema zu erfassen.",
      "Phase 2: Fragestellung und Optionen lesen. Schlüsselwörter (Substantive, Zahlen, Eigennamen) mental markieren.",
      "Phase 3: Gezielter Rücksprung in den entsprechenden Textabschnitt und präzise Verifikation der Aussage.",
      "Phase 4: Bei Unsicherheit Ausschlussprinzip anwenden und spätestens nach 2,5 Minuten eine qualifizierte Markierung setzen.",
    ],
    example: {
      passage: "„Die mitochondriale Translation unterscheidet sich fundamental von der zytosolischen Proteinbiosynthese. Während im Zytoplasma 80S-Ribosomen aktiv sind, nutzen Mitochondrien 55S-Ribosomen, die eine ausgeprägte Sensitivität gegenüber bestimmten Antibiotika wie Chloramphenicol aufweisen.“",
      question: "Welche Vorgehensweise sichert die schnellste Beantwortung einer Detailfrage zu 55S-Ribosomen?",
      correctOption: "Direkter Scan nach der Zahl '55S' im Text anstatt des erneuten Lesens von Zeile 1 an.",
      analysis: "Zahlen und Akronyme sind optische Anker. Ein zielgerichteter Keyword-Scan spart bis zu 60 Sekunden pro Aufgabe.",
    },
  },
  {
    id: "tv-mod-2",
    number: 2,
    title: "Kernaussagen & Hauptgedanke",
    subtitle: "Zentrale Thesen von Nebensächlichkeiten trennen",
    icon: "🎯",
    shortDesc: "Die übergeordnete Absicht der Autor:innen erkennen und nicht auf schmückende Beispiele hereinfallen.",
    focus: "Erfassen der Gesamtaussage und Synthese mehrteiliger Absätze zu einer kohärenten Kernaussage.",
    pitfalls: [
      "Wahl einer Option, die zwar im Text steht, aber nur ein untergeordnetes Detailbeispiel darstellt.",
      "Übersehen der Schlussfolgerung: Oft wird die eigentliche Hauptthese erst im letzten Satz des Textes formuliert.",
      "Verwechslung von Forschungsstand (historische Sicht) und den neuen Erkenntnissen der Studie.",
    ],
    steps: [
      "Ersten und letzten Satz jedes Absatzes besonders aufmerksam lesen – dort stehen meist Behauptung und Folgerung.",
      "Signalkonjunktionen beachten: 'Jedoch', 'Dennoch', 'Überraschenderweise' markieren oft den eigentlichen Erkenntnisgewinn.",
      "Prüfen: Wenn der gesamte Text auf diese eine Aussage verzichten würde, bliebe die Argumentation dann noch stehen?",
    ],
    example: {
      passage: "„Obwohl Schlafmangel historisch als bloßes Symptom metabolischer Syndrome interpretiert wurde, belegen neue Longitudinaldaten, dass chronischer Schlafentzug eine primäre Ursache für neuronale Entzündungsprozesse darstellt.“",
      question: "Was ist die Kernaussage des Textauszugs?",
      correctOption: "Chronischer Schlafentzug fungiert als eigenständige Ursache neuronaler Entzündungen.",
      analysis: "Die historische Interpretation dient nur als Kontrastfolie. Der Kern liegt in der kausalen Neuinterpretation.",
    },
  },
  {
    id: "tv-mod-3",
    number: 3,
    title: "Detailinformationen lokalisieren",
    subtitle: "Fakten, Zahlen, Vergleichsgruppen & Bedingungen",
    icon: "🔍",
    shortDesc: "Explizit im Text genannte Sachverhalte präzise wiederfinden und 1:1 mit den Antwortoptionen abgleichen.",
    focus: "Exakte Textstellenrückbindung bei experimentellen Gruppen (z.B. Gruppe A vs. B), Dosierungen oder Prozentwerten.",
    pitfalls: [
      "Zahlendreher oder vertauschte Vergleichsgruppen (z.B. Gruppe A mit Gruppe B verwechselt).",
      "Konditionale Einschränkungen überlesen ('nur unter anaeroben Bedingungen', 'ausschließlich bei Mäusen').",
      "Antworten auf Basis von biologischem Vorwissen statt der exakten Textangabe.",
    ],
    steps: [
      "In der Frage nach signalstarken Begriffen suchen (Prozentzahlen, Versuchsbedingungen, Zeiträume).",
      "Den Fundort im Text um zwei Sätze nach oben und unten erweitern, um Relativierungen nicht zu übersehen.",
      "Optionen mit dem Text Wort für Wort abgleichen.",
    ],
    example: {
      passage: "„Während Probanden der Gruppe 1 (Dosis: 50 mg) eine Reduktion der Symptome um 30 % zeigten, stieg die Ansprechrate in Gruppe 2 (Dosis: 100 mg) auf 65 %, ging jedoch mit einer Verdopplung der gastrointestinalen Nebenwirkungen einher.“",
      question: "Welche Aussage trifft auf Gruppe 2 zu?",
      correctOption: "Sie zeigte eine höhere Ansprechrate, aber auch häufigere Nebenwirkungen als Gruppe 1.",
      analysis: "Die Frage verlangt die gleichzeitige Verifikation beider Parameter (Wirksamkeit vs. Nebenwirkung) aus dem Text.",
    },
  },
  {
    id: "tv-mod-4",
    number: 4,
    title: "Logische Schlussfolgerungen (Inferenz)",
    subtitle: "Zwingende Folgerungen vs. bloße Plausibilität",
    icon: "💡",
    shortDesc: "Aus gegebenen Prämissen gültige Schlüsse ziehen, ohne ungeprüfte Annahmen hinzuzufügen.",
    focus: "Sichere Unterscheidung zwischen logisch zwingend, möglich, unwahrscheinlich und widersprüchlich.",
    pitfalls: [
      "Korrelation mit Kausalität gleichsetzen: 'A tritt gemeinsam mit B auf' bedeutet NICHT 'A verursacht B'.",
      "Unzulässige Verallgemeinerung: Aus 'bei vielen Patienten' wird in einer falschen Option 'bei allen Patienten'.",
      "Extrapolation über den Text hinaus: Dinge für wahr halten, die zwar medizinisch stimmen, im Text aber nicht begründet sind.",
    ],
    steps: [
      "Frage genau lesen: Sucht die Frage nach 'zwingend folgend' oder 'am ehesten vereinbar'?",
      "Prüfen, ob die Schlussfolgerung ohne Zusatzannahmen direkt aus den Textaussagen konstruiert werden kann.",
      "Vorsicht bei Absolutheitswörtern: 'immer', 'nie', 'ausnahmslos' sind in 90% der Fälle falsche Distraktoren.",
    ],
    example: {
      passage: "„In Populationen mit hohem Konsum fermentierter Milchprodukte wurden signifikant niedrigere Entzündungsmarker gemessen. Bislang konnte jedoch kein molekularer Kausalmechanismus experimentell nachgewiesen werden.“",
      question: "Welche Schlussfolgerung ist durch den Text wissenschaftlich gedeckt?",
      correctOption: "Es besteht eine statistische Assoziation, ein direkter ursächlicher Zusammenhang ist jedoch noch unbewiesen.",
      analysis: "Die Option bleibt exakt im Rahmen der genannten Evidenz (Assoziation belegt, Kausalität offen).",
    },
  },
  {
    id: "tv-mod-5",
    number: 5,
    title: "Aussagen ableiten & bewerten",
    subtitle: "Gültigkeitsprüfung mehrteiliger Thesen",
    icon: "⚖️",
    shortDesc: "Prüfung komplexer Antwortoptionen auf ihre Übereinstimmung mit dem Gesamttext.",
    focus: "Dekonstruktion langer Optionen in atomare Teilaussagen.",
    pitfalls: [
      "Die 'Halb-wahr-Falle': Der erste Teil der Antwortoption stimmt perfekt mit dem Text überein, das letzte Wort verdreht jedoch die Bedeutung.",
      "Umkehrung von Bedingung und Folge: 'Wenn A, dann B' bedeutet nicht automatisch 'Wenn B, dann A'.",
    ],
    steps: [
      "Lange Optionen in Sinneinheiten zerlegen (Teil 1, Konjunktion, Teil 2).",
      "Sobald eine einzige Teilaussage textlich nicht gestützt wird, scheidet die gesamte Option sofort aus.",
      "Die verbleibende Option gegen den Gesamttenor des Autors gegenlesen.",
    ],
    example: {
      passage: "„Das Enzym Telomerase verlängert repetitive DNA-Sequenzen an Chromosomenenden. Während es in somatischen Zellen weitgehend inaktiv ist, reaktivieren über 85 % aller malignen Tumorzellen die Telomerase, um unbegrenzte Teilungsfähigkeit zu erlangen.“",
      question: "Welche Aussage lässt sich ableiten?",
      correctOption: "Die Reaktivierung der Telomerase ist ein häufiges, aber kein ausnahmslos bei jedem malignen Tumor auftretendes Merkmal.",
      analysis: "Über 85 % bedeutet eine große Mehrheit, schließt aber 100 % aus. Die Formulierung spiegelt diese Nuance exakt wider.",
    },
  },
  {
    id: "tv-mod-6",
    number: 6,
    title: "Widersprüche & Ausschlussprinzip",
    subtitle: "Distraktormuster entlarven & Eliminationsverfahren",
    icon: "🚫",
    shortDesc: "Vier falsche Optionen systematisch eliminieren ist oft sicherer und schneller als das direkte Erraten.",
    focus: "Aufdecken von Verneinungen ('nicht', 'widerspricht', 'keine') und systematischen Textwidersprüchen.",
    pitfalls: [
      "Überlesen von Negationen in der Fragestellung: 'Welche Aussage widerspricht dem Text?' wird versehentlich als 'Welche trifft zu?' beantwortet.",
      "Scheinbare Textnähe: Optionen, die viele Originalwörter enthalten, verdrehen oft subtil die Syntax.",
    ],
    steps: [
      "Bei Negativfragen ('Welche Aussage trifft NICHT zu?') die Negation visualisieren.",
      "Klassische MedAT-Distraktoren scannen: Verkehrte Kausalität, Gegenteil der Textaussage, nicht im Text erwähnte Fakten.",
      "Markiere falsche Optionen sofort mit einem mentalen Ausschluss-Kreuz.",
    ],
    example: {
      passage: "„Die Verabreichung des Wirkstoffs führte zu einer Hemmung der Angiogenese, hatte jedoch keinen messbaren Einfluss auf bereits etablierte Makrogefäße.“",
      question: "Welche Aussage steht im Widerspruch zum Text?",
      correctOption: "Der Wirkstoff führt zu einer vollständigen Rückbildung bereits bestehender Makrogefäße.",
      analysis: "Der Text sagt explizit 'keinen messbaren Einfluss'. Die Option behauptet das exakte Gegenteil und widerspricht daher.",
    },
  },
  {
    id: "tv-mod-7",
    number: 7,
    title: "Referenzen & Fachbegriffe",
    subtitle: "Pronomen auflösen & Kontextbedeutungen erschließen",
    icon: "🏷️",
    shortDesc: "Pronominale Bezüge ('diese', 'jene', 'letztere') und unbekannte Termini aus dem Satzzusammenhang dekodieren.",
    focus: "Sicheres Navigieren in komplexen medizinischen Schachtelsätzen ohne syntaktischen Bedeutungsverlust.",
    pitfalls: [
      "Falsche Zuordnung von Relativsätzen zu vorangegangenen Substantiven.",
      "Panik vor unbekannten Fachbegriffen: Die Definition steht fast immer im selben oder im Folgesatz.",
    ],
    steps: [
      "Bei rückbezüglichen Wörtern ('letztere', 'dieser Prozess') den Satz davor lesen und das grammatikalische Bezugswort ersetzen.",
      "Unbekannte Wörter wie eine mathematische Variable (x) behandeln und aus ihrer Funktion im Satz erschließen.",
    ],
    example: {
      passage: "„Bei der Apoptose kommt es zur Zellschrumpfung und Bildung apoptotischer Körperchen. Letztere werden von Makrophagen phagozytiert, ohne eine Entzündungsreaktion auszulösen.“",
      question: "Worauf bezieht sich 'Letztere'?",
      correctOption: "Auf die apoptotischen Körperchen.",
      analysis: "Das Pronomen 'Letztere' referiert im Deutschen stets auf das zuletzt genannte Element der vorangehenden Aufzählung.",
    },
  },
];

export const TV_SIMULATION_THEMES: Record<
  number,
  {
    title: string;
    topic: string;
    textCount: string;
    passages: string[];
  }
> = {
  1: {
    title: "Simulation 1 — Textverständnis",
    topic: "Biomedizin, Ökologie, Ergonomie & Wissenschaftstheorie",
    textCount: "4 Texte",
    passages: [
      "Schlafarchitektur & Gedächtniskonsolidierung (Synaptic Downscaling)",
      "Phänologische Asynchronie & Waldökologie (Mykorrhiza-Netzwerke)",
      "Automatisierungs-Paradoxon & Ergonomie (Intensivmedizin)",
      "Wissenschaftstheorie & Replikationskrise (Registered Reports)",
    ],
  },
  2: {
    title: "Simulation 2 — Textverständnis",
    topic: "Kognitionspsychologie, Bildung, Technologie & Umwelt",
    textCount: "4 Texte",
    passages: [
      "Kognitionspsychologie & Gewohnheitsbildung (Neuronale Plastizität)",
      "Digitales Lesen & Tiefenverarbeitung (Screen-Inferiority-Effekt)",
      "Algorithmische Entscheidungssysteme & Transparenz (Bias-Vermeidung)",
      "Städtische Wärmeinseln & Mikroklima (Urban Heat Islands)",
    ],
  },
  3: {
    title: "Simulation 3 — Textverständnis",
    topic: "Biomedizin, Verhaltensökonomie, Klinische Urteilskraft & Geschichte",
    textCount: "4 Texte",
    passages: [
      "Das menschliche Mikrobiom & die Darm-Hirn-Achse (SCFA-Metaboliten)",
      "Verhaltensökonomie: Nudging & Entscheidungsarchitektur (Default-Effekte)",
      "Evidenzbasierte Leitlinien versus klinische Intuition (Multimorbidität)",
      "Geschichte der Seuchenhygiene & Quarantänepraktiken (Frühe Neuzeit)",
    ],
  },
  4: {
    title: "Simulation 4 — Textverständnis",
    topic: "Medizintechnik, Meeresökologie, Kognition & Sprachwissenschaft",
    textCount: "4 Texte",
    passages: [
      "Künstliche Intelligenz in der Bilddiagnostik (Sensitivität vs. Spezifität)",
      "Ozeanversauerung & marine Ökosysteme (Karbonatsättigung)",
      "Kognitive Heuristiken & Risikowahrnehmung (Verfügbarkeitsheuristik)",
      "Spracherwerb & sensible Entwicklungsphasen (Phonemdiskrimination)",
    ],
  },
  5: {
    title: "Simulation 5 — Textverständnis",
    topic: "Chronobiologie, Bioethik, Telemedizin & Wissenschaftsphilosophie",
    textCount: "4 Texte",
    passages: [
      "Chronobiologie & gesundheitliche Folgen von Schichtarbeit (Zirkadiane Uhren)",
      "Bioethik & Genom-Editierung in Nutzpflanzen (CRISPR-Cas vs. Transgenese)",
      "Telemedizinische Versorgungsmodelle & therapeutische Allianz (Blended Care)",
      "Epistemische Wachsamkeit & Wissenschaftskommunikation (Defizit-Modell)",
    ],
  },
};

interface TvSectionHubProps {
  sets: SetWithStatus[];
  stats: ChapterStats;
  wrongCount: number;
  onStartSimulation: (set: PracticeSet, forceUntimed?: boolean) => void;
  onLockedSimulation?: (set: PracticeSet) => void;
  onStartMistakes: () => void;
}

export function TvSectionHub({
  sets,
  stats,
  wrongCount,
  onStartSimulation,
  onLockedSimulation,
  onStartMistakes,
}: TvSectionHubProps) {
  const [selectedStrategyModal, setSelectedStrategyModal] = useState<TvStrategyModule | null>(null);
  const { userProfile } = usePractice();
  const hasPro = isUserPro(userProfile);

  // Active or next simulation
  const nextActiveSet = sets.find((s) => s.status !== "completed") || sets[0];
  const completedCount = sets.filter((s) => s.status === "completed").length;
  const progressPct = Math.round((completedCount / Math.max(sets.length, 1)) * 100);

  // Average time calculation
  const totalElapsedSeconds = sets.reduce((acc, s) => acc + (s.bestAttempt?.timeSpentSeconds || 0), 0);
  const totalCompletedQuestions = completedCount * 12;
  const avgSecondsPerQ =
    totalCompletedQuestions > 0 ? Math.round(totalElapsedSeconds / totalCompletedQuestions) : 0;

  return (
    <div className="space-y-8 pb-24 pt-2">
      {/* ─── 1. TV HERO & OFFICIAL METRICS BANNER ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                TV · Nur MedAT-H
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                12 Fragen pro Simulation
              </span>
              <span className="rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold">
                35 Min. Prüfungszeit (~175 s/Frage)
              </span>
              <span className="rounded-xl bg-blue-50 text-blue-700 border border-blue-200/80 px-2.5 py-1 text-[11px] font-bold">
                100% textbasiert — Keine Wissensabfrage
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
              Textverständnis (TV)
            </h1>
            <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-slate-600 max-w-3xl">
              Lesekompetenz, Informationsverarbeitung und logische Schlussfolgerungen im authentischen MedAT-H Format.
              Alle Fragen sind ausschließlich anhand der vorgegebenen Texte zu lösen — ohne biologisches oder
              physikalisches Faktenwissen vorauszusetzen.
            </p>
          </div>
        </div>

        {/* 4 TV Metrics Cards Grid */}
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
              {completedCount === 5 ? "Alle absolviert" : `${5 - completedCount} verbleibend`}
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

          {/* Card 3: Zeitmanagement vs. 175s Benchmark */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 xs:p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-bold text-slate-500">
              <span className="truncate">ZEIT</span>
              <span className="font-mono text-slate-600">≤ 175s</span>
            </div>
            <p className="font-mono text-[20px] xs:text-[22px] sm:text-[24px] font-black text-slate-900 leading-none">
              {avgSecondsPerQ > 0 ? (
                <>
                  {avgSecondsPerQ} <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 font-sans">s/Fr.</span>
                </>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </p>
            <div className="text-[10px] xs:text-[11px] font-bold truncate">
              {avgSecondsPerQ > 0 ? (
                avgSecondsPerQ <= 175 ? (
                  <span className="text-emerald-700">✓ {175 - avgSecondsPerQ}s Puffer</span>
                ) : (
                  <span className="text-amber-700">⚠ +{avgSecondsPerQ - 175}s</span>
                )
              ) : (
                <span className="text-slate-400">Noch keine Daten</span>
              )}
            </div>
            <p className="text-[10px] xs:text-[10.5px] font-medium text-slate-400">35 Min. / 12 Fragen</p>
          </div>

          {/* Card 4: Offene TV-Schwachstellen */}
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
              {wrongCount} <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 font-sans">Fragen</span>
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

      {/* ─── 2. NÄCHSTER SCHRITT (PRIMARY ACTION BANNER) ─── */}
      {nextActiveSet && (
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 rounded-2xl sm:rounded-3xl border border-red-200 bg-red-50/40 p-4 xs:p-6 sm:p-8 shadow-sm">
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className={`flex h-2 w-2 rounded-full ${!hasPro && nextActiveSet.order > 1 ? "bg-amber-500" : "bg-red-600 animate-pulse"}`} />
              <p className={`text-[11px] font-black uppercase tracking-widest ${!hasPro && nextActiveSet.order > 1 ? "text-amber-800" : "text-red-700"}`}>
                {!hasPro && nextActiveSet.order > 1
                  ? "🔒 Vollzugang erforderlich · Prüfungssimulation " + nextActiveSet.order
                  : "Nächster Schritt · Offizielle Prüfungssimulation"}
              </p>
            </div>
            <h2 className="text-[18px] xs:text-[20px] sm:text-[24px] font-black text-slate-900 tracking-tight leading-snug">
              {nextActiveSet.title} — {TV_SIMULATION_THEMES[nextActiveSet.order]?.topic || nextActiveSet.subtitle}
            </h2>
            <p className="text-[12.5px] xs:text-[13px] sm:text-[14px] font-medium text-slate-600">
              4–5 wissenschaftliche Lesepassagen · 12 Multiple-Choice-Fragen · 35 Minuten Prüfungszeit (~175 s pro Frage)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
            {!hasPro && nextActiveSet.order > 1 ? (
              <button
                onClick={() => (onLockedSimulation ? onLockedSimulation(nextActiveSet) : onStartSimulation(nextActiveSet, false))}
                className="w-full sm:w-auto rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] px-5 sm:px-7 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] font-black text-slate-950 shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
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
                  className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] px-4 sm:px-5 py-3 sm:py-3.5 text-[13px] sm:text-[13.5px] font-bold text-slate-700 shadow-2xs transition-all text-center cursor-pointer"
                >
                  Ohne Zeitlimit üben
                </button>
                <button
                  onClick={() => onStartSimulation(nextActiveSet, false)}
                  className="w-full sm:w-auto rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] px-5 sm:px-7 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] font-black text-white shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{nextActiveSet.status === "completed" ? "Simulation wiederholen" : "Simulation starten (35 Min)"}</span>
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ─── 3. LERNEN & TRAINIEREN — STRATEGIE & METHODIK (7 MODULES) ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-900">
              Lernen & Trainieren
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              7 essenzielle Lesestrategien & Denkmuster für das MedAT-H Textverständnis
            </p>
          </div>
          <span className="text-[11.5px] font-bold text-slate-400">Klicke eine Strategie für Details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TV_STRATEGY_MODULES.map((mod) => (
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

      {/* ─── 4. 5 OFFIZIELLE TV-SIMULATIONEN (AUTHENTISCHES MEDAT-H FORMAT) ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-900">
              5 Offizielle TV-Prüfungssimulationen
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              Exakt 12 Fragen in 35 Minuten über 4–5 wissenschaftliche Lesepassagen pro Simulation.
            </p>
          </div>
          <span className="text-[11.5px] font-bold text-slate-400">Authentische Prüfungsbedingungen</span>
        </div>

        <div className="space-y-4">
          {sets.map((set) => {
            const isCompleted = set.status === "completed";
            const theme = TV_SIMULATION_THEMES[set.order];

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
                      `0${set.order}`
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
                        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-900">
                          Entwurf: {draftCount}/12 Fragen
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] font-medium text-slate-500 leading-relaxed">
                      {set.description}
                    </p>

                    {theme?.passages && (
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {theme.passages.map((p, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-block rounded-md bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                          >
                            📖 {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                  <div className="flex items-center justify-between sm:justify-start gap-2 self-stretch sm:self-auto mr-0 sm:mr-2">
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 sm:px-2.5 py-1 rounded-lg">
                      12 Fragen
                    </span>
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 sm:px-2.5 py-1 rounded-lg">
                      35 Min.
                    </span>
                  </div>

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
                        className="w-full sm:w-auto rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 sm:px-4 py-2.5 text-[12.5px] sm:text-[13px] font-bold shadow-2xs active:scale-[0.98] transition-all text-center cursor-pointer"
                      >
                        Ohne Zeitlimit
                      </button>
                      <button
                        onClick={() => onStartSimulation(set, false)}
                        className={`w-full sm:w-auto rounded-xl px-4 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] font-black transition-all text-center shadow-sm active:scale-[0.98] cursor-pointer ${
                          isCompleted
                            ? "bg-slate-900 hover:bg-slate-800 text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        {draftCount > 0 ? "Fortsetzen (35 Min)" : isCompleted ? "Wiederholen (35 Min)" : "Simulation starten (35 Min)"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── 5. INTERACTIVE STRATEGY MODAL ─── */}
      {selectedStrategyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-[22px] border border-red-100">
                  {selectedStrategyModal.icon}
                </span>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-red-600">
                    Modul {selectedStrategyModal.number} · MedAT-H Lesestrategie
                  </span>
                  <h3 className="text-[20px] font-black text-slate-900 tracking-tight">
                    {selectedStrategyModal.title}
                  </h3>
                  <p className="text-[13px] font-semibold text-slate-500">
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

            {/* Core Focus */}
            <div className="rounded-2xl border border-blue-200/80 bg-blue-50/50 p-4 space-y-1.5">
              <p className="text-[11px] font-black uppercase tracking-wider text-blue-900">
                🎯 Worum geht es im MedAT?
              </p>
              <p className="text-[13.5px] font-medium text-blue-950 leading-relaxed">
                {selectedStrategyModal.focus}
              </p>
            </div>

            {/* Typical Pitfalls */}
            <div className="space-y-2.5">
              <h4 className="text-[13px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span>⚠️ Typische MedAT-Fallen der Prüfungsautoren</span>
              </h4>
              <div className="space-y-2">
                {selectedStrategyModal.pitfalls.map((pf, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{pf}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Method */}
            <div className="space-y-2.5">
              <h4 className="text-[13px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span>⚡ Schritt-für-Schritt-Methode</span>
              </h4>
              <div className="space-y-2">
                {selectedStrategyModal.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-[13px] text-slate-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{st}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concrete Example */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-3">
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                📖 Praxis-Beispiel & Analyse
              </p>
              <p className="text-[12.5px] italic text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                {selectedStrategyModal.example.passage}
              </p>
              <p className="text-[13px] font-bold text-slate-900">
                Frage: {selectedStrategyModal.example.question}
              </p>
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 space-y-1">
                <p className="text-[12px] font-bold text-emerald-900">
                  ✓ Richtige Antwort: {selectedStrategyModal.example.correctOption}
                </p>
                <p className="text-[12px] text-emerald-800 leading-relaxed">
                  {selectedStrategyModal.example.analysis}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedStrategyModal(null)}
                className="rounded-xl bg-slate-900 px-6 py-2.5 text-[13.5px] font-black text-white hover:bg-slate-800 transition-all shadow-xs"
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
