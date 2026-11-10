import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn, toast } from "../lib/core";
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
  // --- BMS (10 questions: 3 Bio, 3 Chem, 2 Phys, 2 Math) ---
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
      "Mitochondrien sind die Kraftwerke der Zelle; an der inneren Mitochondrienmembran findet die Atmungskette zur ATP-Synthese statt.",
  },
  {
    id: "diag-2",
    pillar: "BMS",
    subtest: "Biologie",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Welche Aussage zur Meiose im Vergleich zur Mitose beim Menschen trifft zu?",
    options: [
      "Aus einer diploiden Urkeimzelle entstehen zwei identische diploide Tochterzellen.",
      "Die Reduktionsteilung findet in der zweiten meiotischen Teilung statt.",
      "In der Anaphase I werden homologe Chromosomenpaare getrennt, wodurch haploide Zellen entstehen.",
      "Ein Crossing-Over tritt ausschließlich in der Metaphase II auf.",
      "Das Endprodukt der Meiose sind stets vier funktionelle Eizellen bei der Frau.",
    ],
    correct: 2,
    explanation:
      "In der Anaphase I der Meiose werden die homologen Chromosomenpaare getrennt (Reduktion von 2n auf 1n).",
  },
  {
    id: "diag-3",
    pillar: "BMS",
    subtest: "Biologie",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Zwei phänotypisch gesunde Eltern bekommen ein Kind mit einer autosomal-rezessiv vererbten Stoffwechselerkrankung. Mit welcher Wahrscheinlichkeit ist das nächste Kind heterozygoter Anlageträger?",
    options: ["25 %", "33 %", "50 %", "66 %", "75 %"],
    correct: 2,
    explanation:
      "Beide Eltern sind Konduktoren (Aa). Die Nachkommen spalten nach der 2. Mendelschen Regel auf: 1 AA : 2 Aa : 1 aa. Die Wahrscheinlichkeit für Aa beträgt 50 %.",
  },
  {
    id: "diag-4",
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
    id: "diag-5",
    pillar: "BMS",
    subtest: "Chemie",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Welche Oxidationszahl besitzt Schwefel im Sulfat-Ion (SO₄²⁻)?",
    options: ["-2", "+2", "+4", "+6", "+8"],
    correct: 3,
    explanation:
      "Sauerstoff hat in Oxiden die Oxidationszahl -2. Bei 4 Sauerstoffatomen (-8) und einer Gesamtladung von -2 gilt: x + 4*(-2) = -2 => x = +6.",
  },
  {
    id: "diag-6",
    pillar: "BMS",
    subtest: "Chemie",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Wie reagiert ein chemisches Gleichgewicht einer exothermen Gasreaktion nach dem Prinzip von Le Chatelier auf eine Temperaturerhöhung?",
    options: [
      "Das Gleichgewicht verschiebt sich zugunsten der Produkte.",
      "Das Gleichgewicht verschiebt sich zugunsten der Edukte.",
      "Die Gleichgewichtskonstante K bleibt exakt unverändert.",
      "Die Reaktionsgeschwindigkeit sinkt auf null.",
      "Der Gesamtdruck halbiert sich automatisch.",
    ],
    correct: 1,
    explanation:
      "Bei einer exothermen Reaktion wird Wärme freigesetzt. Eine Temperaturerhöhung verschiebt das Gleichgewicht nach links (zu den Edukten), um dem Zwang auszuweichen.",
  },
  {
    id: "diag-7",
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
    id: "diag-8",
    pillar: "BMS",
    subtest: "Physik",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Ein Körper mit einem Volumen von 2 Litern und einer Masse von 3 kg befindet sich vollständig unter Wasser (Dichte 1 kg/L, g ≈ 10 m/s²). Wie groß ist die statische Auftriebskraft?",
    options: ["10 N", "20 N", "30 N", "50 N", "60 N"],
    correct: 1,
    explanation:
      "Nach dem Archimedischen Prinzip entspricht die Auftriebskraft dem Gewicht des verdrängten Flüssigkeitsvolumens: F_A = rho * V * g = 1000 kg/m³ * 0,002 m³ * 10 m/s² = 20 N.",
  },
  {
    id: "diag-9",
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
    id: "diag-10",
    pillar: "BMS",
    subtest: "Mathematik",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "Wie lautet das Ergebnis von (3 · 10⁴) · (4 · 10⁻⁷) geteilt durch (6 · 10⁻²)?",
    options: ["0,02", "0,2", "2", "20", "200"],
    correct: 1,
    explanation:
      "Zähler: 3 * 4 = 12, Zehnerpotenzen: 10^(4 + (-7)) = 10⁻³. Zähler = 12 · 10⁻³. Teilen durch 6 · 10⁻²: (12 / 6) · 10^(-3 - (-2)) = 2 · 10⁻¹ = 0,2.",
  },

  // --- KFF (8 questions: 2 ZF, 2 FZ, 2 GM, 2 IE) ---
  {
    id: "diag-11",
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
    id: "diag-12",
    pillar: "KFF",
    subtest: "Zahlenfolgen",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "4 · 8 · 5 · 10 · 7 · 14 · … — Welche Zahl folgt als nächstes?",
    options: ["9", "11", "15", "18", "21"],
    correct: 1,
    explanation:
      "Alternierende Operation: *2, -3, *2, -3, *2, -3. Nach 14 folgt 14 - 3 = 11.",
  },
  {
    id: "diag-13",
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
    id: "diag-14",
    pillar: "KFF",
    subtest: "Figuren zusammensetzen",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "Ein Quadrat wird durch eine Diagonale geteilt, und eine der Hälften nochmals durch die Höhe auf die Hypotenuse halbiert. Aus welchen Teilfiguren besteht das Quadrat nun?",
    options: [
      "Drei gleich große Dreiecke",
      "Ein großes rechtwinkliges Dreieck und zwei kleinere kongruente rechtwinklige Dreiecke",
      "Zwei Trapeze und ein Quadrat",
      "Vier ungleichförmige Dreiecke",
      "Zwei Rechtecke",
    ],
    correct: 1,
    explanation:
      "Das Quadrat zerfällt in ein halbes Quadrat (großes rechtwinkliges Dreieck) und zwei geviertelte Dreiecke (kleinere kongruente rechtwinklige Dreiecke).",
  },
  {
    id: "diag-15",
    pillar: "KFF",
    subtest: "Gedächtnis & Merkfähigkeit",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "Allergieausweis: 'Stefan Gruber, Blutgruppe A+, allergisch gegen Penicillin, Ausweisnr. 4821'. Welche Ausweisnummer und Blutgruppe gehören zu Stefan Gruber?",
    options: [
      "4821 · A+",
      "4812 · 0-",
      "4821 · B+",
      "4281 · A+",
      "4821 · AB+",
    ],
    correct: 0,
    explanation:
      "Typische MedAT-Gedächtnisabfrage: Name, Blutgruppe (A+) und die vierstellige Ausweisnummer (4821) müssen exakt verknüpft erinnert werden.",
  },
  {
    id: "diag-16",
    pillar: "KFF",
    subtest: "Gedächtnis & Merkfähigkeit",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "Allergieausweis: 'Maria Huber, 28 Jahre, Medikament: Cetirizin, Symptom: Urtikaria'. Welches Medikament nimmt Maria Huber ein?",
    options: [
      "Ibuprofen",
      "Cetirizin",
      "Amoxicillin",
      "Loratadin",
      "Prednisolon",
    ],
    correct: 1,
    explanation:
      "Die Zuordnung von Medikament (Cetirizin) zur Patientin Maria Huber ist das korrekte Gedächtniselement.",
  },
  {
    id: "diag-17",
    pillar: "KFF",
    subtest: "Implikationen erkennen",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "Prämissen: 'Alle Säugetiere sind Wirbeltiere.' und 'Einige Wirbeltiere legen Eier.' Welche Schlussfolgerung ist zwingend logisch wahr?",
    options: [
      "Alle Säugetiere legen Eier.",
      "Es gibt Wirbeltiere, die keine Säugetiere sind.",
      "Einige Tiere, die Eier legen, sind Wirbeltiere.",
      "Kein Säugetier legt jemals Eier.",
      "Alle eierlegenden Tiere sind Säugetiere.",
    ],
    correct: 2,
    explanation:
      "Aus 'Einige A sind B' folgt formal-logisch durch einfache Konversion stets 'Einige B sind A': Wenn einige Wirbeltiere Eier legen, dann sind einige eierlegende Tiere Wirbeltiere.",
  },
  {
    id: "diag-18",
    pillar: "KFF",
    subtest: "Implikationen erkennen",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "Aussage: 'Wenn ein Patient Fieber hat, ist der CRP-Wert erhöht.' Welche logisch äquivalente Kontraposition folgt daraus?",
    options: [
      "Wenn der CRP-Wert erhöht ist, hat der Patient Fieber.",
      "Wenn der CRP-Wert nicht erhöht ist, hat der Patient kein Fieber.",
      "Wenn der Patient kein Fieber hat, ist der CRP-Wert nicht erhöht.",
      "Ein erhöhter CRP-Wert tritt nur bei Fieber auf.",
      "Keine der Aussagen ist äquivalent.",
    ],
    correct: 1,
    explanation:
      "Die Kontraposition von (A => B) lautet formal (nicht B => nicht A): 'Wenn der CRP-Wert nicht erhöht ist, hat der Patient kein Fieber.'",
  },

  // --- TV (3 questions) ---
  {
    id: "diag-19",
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
    id: "diag-20",
    pillar: "TV",
    subtest: "Textverständnis",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    question: "Text: 'Die Blut-Hirn-Schranke schützt das ZNS vor zirkulierenden Pathogenen, erschwert jedoch die Passage hydrophiler Pharmaka, weshalb lipidlösliche Moleküle pharmakokinetisch im Vorteil sind.' Welche Schlussfolgerung wird gestützt?",
    options: [
      "Lipidlösliche Arzneistoffe können die Blut-Hirn-Schranke generell leichter überwinden als hydrophile Moleküle.",
      "Die Blut-Hirn-Schranke ist für pathogene Viren stets vollständig permeabel.",
      "Hydrophile Wirkstoffe erreichen im Gehirn prinzipiell höhere Konzentrationen als im Blutplasma.",
      "Alle ZNS-Erkrankungen können ohne Arzneipassage geheilt werden.",
      "Lipophile Moleküle werden an der Blut-Hirn-Schranke komplett abgebaut.",
    ],
    correct: 0,
    explanation:
      "Der Text stellt explizit dar, dass hydrophile Substanzen erschwert passieren und lipidlösliche Moleküle im Vorteil sind.",
  },
  {
    id: "diag-21",
    pillar: "TV",
    subtest: "Textverständnis",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    question: "Text: 'In einer randomisierten Doppelblindstudie senkte Wirkstoff X den systolischen Blutdruck um 12 mmHg (p < 0,01), während die Placebogruppe eine Senkung um 2 mmHg zeigte. Nebenwirkungen waren in beiden Gruppen gleich verteilt.' Welche Aussage ist korrekt?",
    options: [
      "Placebo hatte absolut keinen messbaren Effekt auf den Blutdruck.",
      "Wirkstoff X senkte den Blutdruck statistisch signifikant stärker als das Placebo.",
      "Wirkstoff X verursachte signifikant mehr Nebenwirkungen als das Placebo.",
      "Der Blutdruck sank in der Verumgruppe um exakt 2 mmHg.",
      "Die Studie lässt wegen ungleicher Nebenwirkungen keine Schlüsse zu.",
    ],
    correct: 1,
    explanation:
      "Mit p < 0,01 ist der Unterschied zwischen der Senkung um 12 mmHg (Verum) und 2 mmHg (Placebo) statistisch signifikant.",
  },

  // --- SEK (3 questions: 1 EE, 1 ER, 1 SE) ---
  {
    id: "diag-22",
    pillar: "SEK",
    subtest: "Emotionen erkennen",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    question: "Ein Patient zieht während der Schilderung eines bevorstehenden Eingriffs die Augenbrauen zusammen und nach oben, die Augen weit geöffnet, während die Lippen horizontal angespannt sind. Welche primäre Emotion drückt sich hier vorrangig aus?",
    options: ["Wut", "Furcht / Angst", "Ekel", "Freude", "Verachtung"],
    correct: 1,
    explanation:
      "Nach Paul Ekman sind hochgezogene und zusammengezogene Brauen mit geweiteten Augen und horizontal gespannten Lippen die universellen Merkmale von Angst/Furcht.",
  },
  {
    id: "diag-23",
    pillar: "SEK",
    subtest: "Emotionen regulieren",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    question: "Ein Angehöriger reagiert nach einer Verzögerung im Notfallbereich lautstark und gereizt gegenüber dem medizinischen Personal. Welche Handlungsweise ist emotional regulierend und professionell deeskalierend?",
    options: [
      "Sofort mit Hausverbot drohen, um Autorität zu demonstrieren.",
      "Die eigene Frustration zurückstellen, dem Angehörigen aktiv zuhören und den Grund der Verzögerung transparent erklären.",
      "Den Angehörigen komplett ignorieren und sich anderen Patienten zuwenden.",
      "Gereizt zurückweisen, dass Notfälle nun einmal unvorhersehbar sind.",
      "Den Sicherheitsdienst rufen, ohne zuvor ein klärendes Gespräch zu suchen.",
    ],
    correct: 1,
    explanation:
      "Emotionsregulation im medizinischen Kontext erfordert Selbstkontrolle, aktives Zuhören und transparente Kommunikation zur Deeskalation.",
  },
  {
    id: "diag-24",
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
  onNav?: (s: Screen, seed?: PracticeSeed) => void;
  onResultSaved?: (result: DiagnosticResult) => void;
}

export default function EinstufungstestModal({
  isOpen,
  onClose,
  onNav,
  onResultSaved,
}: EinstufungstestModalProps) {
  const navigate = useNavigate();
  const loggedIn = isUserLoggedIn();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(600); // 10 minutes = 600 seconds
  const [isFinished, setIsFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);

  // 10-minute countdown timer
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
    setSecondsLeft(600);
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

  const bmsQuestionCount = DIAGNOSTIC_QUESTIONS.filter((q) => q.pillar === "BMS").length;
  const kffQuestionCount = DIAGNOSTIC_QUESTIONS.filter((q) => q.pillar === "KFF").length;
  const tvQuestionCount = DIAGNOSTIC_QUESTIONS.filter((q) => q.pillar === "TV").length;
  const sekQuestionCount = DIAGNOSTIC_QUESTIONS.filter((q) => q.pillar === "SEK").length;

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
                MedAT 24-Fragen-Einstufungstest
              </h3>
              <p className="text-xs text-ink-3">BMS (10) · KFF (8) · TV (3) · SEK (3) Orientierungsanalyse</p>
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
                <div className="grid grid-cols-12 sm:grid-cols-24 gap-1">
                  {DIAGNOSTIC_QUESTIONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        i === currentIdx
                          ? "bg-primary ring-2 ring-primary/30"
                          : answers[i] !== undefined
                          ? "bg-emerald-500"
                          : "bg-slate-200"
                      }`}
                      aria-label={`Gehe zu Frage ${i + 1}`}
                      title={`Frage ${i + 1}: ${DIAGNOSTIC_QUESTIONS[i].pillar} · ${DIAGNOSTIC_QUESTIONS[i].subtest}`}
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
                    Orientierungsfrage #{currentIdx + 1} von {DIAGNOSTIC_QUESTIONS.length}
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
                        className={`flex w-full items-center gap-3.5 rounded-xl border p-3.5 text-left text-sm transition-all cursor-pointer ${
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
                    / {bmsQuestionCount}
                  </p>
                  <p className="text-[11px] text-ink-3">Basiswissen (40%)</p>
                </div>
                <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    KFF
                  </span>
                  <p className="mt-2 text-lg font-bold text-ink num">
                    {DIAGNOSTIC_QUESTIONS.filter(
                      (q, i) => q.pillar === "KFF" && answers[i] === q.correct
                    ).length}{" "}
                    / {kffQuestionCount}
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
                    / {tvQuestionCount}
                  </p>
                  <p className="text-[11px] text-ink-3">Textverständnis (10%)</p>
                </div>
                <div className="rounded-xl border border-line bg-paper-2 p-3 text-center">
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    SEK
                  </span>
                  <p className="mt-2 text-lg font-bold text-ink num">
                    {DIAGNOSTIC_QUESTIONS.filter(
                      (q, i) => q.pillar === "SEK" && answers[i] === q.correct
                    ).length}{" "}
                    / {sekQuestionCount}
                  </p>
                  <p className="text-[11px] text-ink-3">Sozial-emotional (10%)</p>
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

              {/* Account Gate after result preview (only for visitors without account) */}
              {!loggedIn && (
                <div className="rounded-2xl border-2 border-primary/25 bg-gradient-to-br from-primary-subtle/50 to-amber-50/40 p-5 text-center space-y-2.5">
                  <span className="inline-block rounded-full bg-primary px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-paper">
                    Ergebnis speichern
                  </span>
                  <h5 className="text-base font-bold text-ink">
                    Sichere deine Auswertung & schalte deinen Lernplan frei
                  </h5>
                  <p className="text-xs text-ink-2 max-w-md mx-auto leading-relaxed">
                    Erstelle jetzt deinen kostenlosen MedAT-Account. Dein Testergebnis wird automatisch übernommen und bildet das Fundament deiner persönlichen Lernempfehlungen.
                  </p>
                  <div className="pt-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        navigate("/onboarding?mode=register");
                      }}
                      className="btn btn-primary px-5 py-2.5 text-xs font-bold shadow-md hover:scale-[1.01] transition-all"
                    >
                      Kostenlosen Account anlegen & Lernplan freischalten →
                    </button>
                  </div>
                </div>
              )}

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
                {loggedIn ? (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      if (onNav) {
                        onNav("plan");
                      } else {
                        navigate("/app");
                      }
                    }}
                    className="btn btn-primary btn-sm flex items-center gap-1.5"
                  >
                    Zum Lernplan <IconArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      navigate("/onboarding?mode=register");
                    }}
                    className="btn btn-primary btn-sm flex items-center gap-1.5"
                  >
                    Ergebnis speichern & registrieren <IconArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
