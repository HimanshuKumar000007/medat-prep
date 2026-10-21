import {
  MedatExamHeader,
  MedatQuestionWorkspace,
  MedatQuestionPalette,
  MedatSubmitModal,
  MedatPauseModal,
  MedatShortcutsModal,
  MedatScratchpadModal,
  MedatResultsView,
  MedatReviewView,
  getTaskRules,
  FullMockExamRunner,
  FullMockPreTestChecklistModal,
} from "../simulator";
import {
  GENERALPROBE_1_DATASET,
  GENERALPROBE_2_DATASET,
  getGeneralprobeDataset,
  useMockExamData,
  type GeneralprobeDataset,
  type MockAttemptRecord,
} from "../data/generalprobe";
import {
  canAccessGeneralprobe,
  isGeneralprobeFree,
  isUserPro,
} from "../lib/bmsAccessControl";
import { BmsProUpgradeModal } from "../components/BmsProUpgradeModal";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "../lib/core";
import {
  IconArrowRight,
  IconBrain,
  IconChart,
  IconCheck,
  IconClock,
  IconFlame,
  IconHeart,
  IconPuzzle,
  IconTarget,
  IconClose,
} from "../lib/icons";
import {
  UNIVERSITIES,
  getSectionsForExam,
  type ExamType,
  type SectionCode,
} from "../content/medat/config";
import {
  ALL_FRONTEND_QUESTIONS,
  getQuestionsBySection,
  getQuestionsForExam,
  type StoredQuestion,
} from "../data/questions";
import {
  DIconBookmark,
  DIconBookmarkFilled,
  DIconBook,
  DIconCheckCircle,
  DIconDna,
  DIconLock,
  DIconRefresh,
  DIconTrendDown,
  DIconTrendUp,
} from "./icons";
import { usePractice } from "./practiceContext";
import type { NormalizedQuestion } from "./practiceData";
import type { PracticeSeed, Screen } from "./Shell";

/* =================================================================
   TYPES & MOCK DEFINITIONS (AUSTRIAN MEDAT EXAM ENGINE)
   ================================================================= */
export type MockCategory = "all" | "full" | "bms" | "quick" | "kff" | "pyq";

export interface MockExamDefinition {
  id: string;
  exam: "MEDAT-H" | "MEDAT-Z" | "BOTH";
  category: "full" | "bms" | "quick" | "kff" | "pyq";
  title: string;
  subtitle: string;
  durationMinutes: number;
  durationText: string;
  sectionsText: string;
  questionCount: number;
  difficulty: "Einstieg" | "Mittel" | "Original MedAT-Niveau" | "Schwer (Speed)";
  bestFor: string;
  potentialBoost: string;
  tags: string[];
  premium?: boolean;
  sectionFilter?: SectionCode;
  subjectFilter?: string;
}

export type { MockAttemptRecord };

export const OFFICIAL_MOCKS: MockExamDefinition[] = [
  /* Flagship Generalproben */
  {
    id: "mock-full-medat-h-1",
    exam: "MEDAT-H",
    category: "full",
    title: "MedAT-H Generalprobe #1",
    subtitle: "Vollständige MedAT-H-Simulation mit allen 4 Testteilen",
    durationMinutes: 258,
    durationText: "4 Std. 18 Min. reine Aufgabenzeit + 60 Min. Pause",
    sectionsText: "BMS (94) · TV (12) · KFF (75) · SEK (40)",
    questionCount: 221,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Realistische Gesamtsimulation unter offiziellen Testzeitbedingungen",
    potentialBoost: "Testtag-Modus",
    tags: ["GENERALPROBE", "ORIGINAL ÜBUNGSAUFGABEN", "HUMANMEDIZIN"],
    premium: false,
  },
  {
    id: "mock-full-medat-h-2",
    exam: "MEDAT-H",
    category: "full",
    title: "MedAT-H Generalprobe #2",
    subtitle: "Vollständige MedAT-H-Simulation mit alternativen Aufgabensets",
    durationMinutes: 258,
    durationText: "4 Std. 18 Min. reine Aufgabenzeit + 60 Min. Pause",
    sectionsText: "BMS (94) · TV (12) · KFF (75) · SEK (40)",
    questionCount: 221,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Zweiter vollständiger Prüfungsdurchlauf zur Leistungsüberprüfung",
    potentialBoost: "Testtag-Modus",
    tags: ["GENERALPROBE", "ORIGINAL ÜBUNGSAUFGABEN", "HUMANMEDIZIN"],
    premium: true,
  },
  {
    id: "mock-full-medat-h-3",
    exam: "MEDAT-H",
    category: "full",
    title: "MedAT-H Generalprobe #3",
    subtitle: "Vollständige MedAT-H-Simulation mit originalgetreuen Aufgabensets",
    durationMinutes: 258,
    durationText: "4 Std. 18 Min. reine Aufgabenzeit + 60 Min. Pause",
    sectionsText: "BMS (94) · TV (12) · KFF (75) · SEK (40)",
    questionCount: 221,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Dritter vollständiger Prüfungsdurchlauf zur Festigung der Teststrategie",
    potentialBoost: "Testtag-Modus",
    tags: ["GENERALPROBE", "ORIGINAL ÜBUNGSAUFGABEN", "HUMANMEDIZIN"],
    premium: true,
  },
  {
    id: "mock-full-medat-h-4",
    exam: "MEDAT-H",
    category: "full",
    title: "MedAT-H Generalprobe #4",
    subtitle: "Vollständige MedAT-H-Simulation mit höchster Trennschärfe",
    durationMinutes: 258,
    durationText: "4 Std. 18 Min. reine Aufgabenzeit + 60 Min. Pause",
    sectionsText: "BMS (94) · TV (12) · KFF (75) · SEK (40)",
    questionCount: 221,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Finale Generalprobe unter realistischen Testzeitbedingungen",
    potentialBoost: "Testtag-Modus",
    tags: ["GENERALPROBE", "ORIGINAL ÜBUNGSAUFGABEN", "HUMANMEDIZIN"],
    premium: true,
  },
  {
    id: "mock-full-medat-h-5",
    exam: "MEDAT-H",
    category: "full",
    title: "MedAT-H Generalprobe #5",
    subtitle: "Vollständige MedAT-H-Simulation mit originalgetreuen Aufgabensets",
    durationMinutes: 258,
    durationText: "4 Std. 18 Min. reine Aufgabenzeit + 60 Min. Pause",
    sectionsText: "BMS (94) · TV (12) · KFF (75) · SEK (40)",
    questionCount: 221,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Fünfter vollständiger Prüfungsdurchlauf zur Festigung der Teststrategie",
    potentialBoost: "Testtag-Modus",
    tags: ["GENERALPROBE", "ORIGINAL ÜBUNGSAUFGABEN", "HUMANMEDIZIN"],
    premium: true,
  },
  {
    id: "mock-full-medat-z-1",
    exam: "MEDAT-Z",
    category: "full",
    title: "MedAT-Z Generalprobe Zahnmedizin",
    subtitle: "Inklusive Manueller Fertigkeiten & KFF-Module",
    durationMinutes: 258,
    durationText: "4 Std. 18 Min. reine Aufgabenzeit + 60 Min. Pause",
    sectionsText: "BMS (94) · Manuelle Fertigkeiten (17) · KFF (65) · SEK (40)",
    questionCount: 216,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Exakte Zahnmedizin-Prüfungssimulation mit Drahtbiegen & Formen",
    potentialBoost: "Testtag-Modus",
    tags: ["GENERALPROBE", "ZAHNMEDIZIN"],
    premium: true,
  },
  {
    id: "mock-bms-diagnostic",
    exam: "BOTH",
    category: "bms",
    title: "BMS Gesamtdiagnosetest (94 Fragen)",
    subtitle: "Basiskenntnistest für Biologie, Chemie, Physik & Mathematik",
    durationMinutes: 94,
    durationText: "94 Minuten",
    sectionsText: "Biologie (40), Chemie (24), Physik (18), Mathematik (12)",
    questionCount: 94,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Umfassender BMS-Stresstest mit exakt 1 Min/Frage",
    potentialBoost: "+4% BMS-Readiness",
    tags: ["BMS", "DIAGNOSE", "40% GEWICHTUNG"],
    premium: true,
    sectionFilter: "BMS",
  },
  {
    id: "mock-kff-full",
    exam: "BOTH",
    category: "kff",
    title: "KFF Kognitive Fähigkeiten Kompletttest",
    subtitle: "Figuren zusammensetzen, Gedächtnis, Zahlenfolgen, Wortflüssigkeit & Implikationen",
    durationMinutes: 88,
    durationText: "88 Minuten",
    sectionsText: "FZ (15) · GM (25) · ZF (10) · WF (15) · IE (10)",
    questionCount: 75,
    difficulty: "Schwer (Speed)",
    bestFor: "Maximales KFF-Geschwindigkeitstraining unter Prüfungsstress (inkl. GM Merkphase)",
    potentialBoost: "KFF Testtag-Format",
    tags: ["KFF", "75 AUFGABEN", "40% GEWICHTUNG"],
    premium: true,
    sectionFilter: "KFF",
  },
  {
    id: "mock-tv-sek-full",
    exam: "BOTH",
    category: "bms",
    title: "Textverständnis & SEK Intensivtest",
    subtitle: "Medizinische Fachtexte & Situationsurteile im Doppelpack",
    durationMinutes: 95,
    durationText: "95 Minuten",
    sectionsText: "TV (12) · SEK (40 Aufgaben: ER 12 · EE 14 · SE 14)",
    questionCount: 52,
    difficulty: "Mittel",
    bestFor: "Gezieltes Training für Textanalyse und sozial-emotionale Kompetenzen",
    potentialBoost: "TV + SEK Format",
    tags: ["TV & SEK", "52 AUFGABEN", "20% GEWICHTUNG"],
    premium: true,
  },

  /* Previous Year Archetype Mocks */
  {
    id: "mock-pyq-2025",
    exam: "BOTH",
    category: "pyq",
    title: "MedAT 2025 Generalprobe (Archetyp)",
    subtitle: "Originalgetreuer Referenz-Testlauf der Prüfungsperiode",
    durationMinutes: 94,
    durationText: "94 Minuten",
    sectionsText: "BMS Kernfragen aller 4 Naturwissenschaften",
    questionCount: 94,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Prüfungsnahe Generalprobe mit den neuesten Fragenmustern",
    potentialBoost: "Übungs-Archetyp",
    tags: ["ARCHETYP", "REFERENZFORMAT", "BMS"],
    premium: true,
    sectionFilter: "BMS",
  },
  {
    id: "mock-pyq-2024",
    exam: "BOTH",
    category: "pyq",
    title: "MedAT 2024 Generalprobe (Archetyp)",
    subtitle: "Klassischer Prüfungsjahrgang mit erhöhtem Chemie- & Physik-Schwerpunkt",
    durationMinutes: 94,
    durationText: "94 Minuten",
    sectionsText: "BMS Gesamtüberblick (94 Fragen)",
    questionCount: 94,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Echttest-Vergleich mit den Notengrenzen des Vorjahres",
    potentialBoost: "Übungs-Archetyp",
    tags: ["ARCHETYP", "REFERENZFORMAT", "BMS"],
    premium: true,
    sectionFilter: "BMS",
  },
];

/* Quick Mocks (Speed Sprints) */
export const QUICK_MOCKS: MockExamDefinition[] = [
  {
    id: "qm-bms-bio",
    exam: "BOTH",
    category: "quick",
    title: "BMS Biologie Sprint",
    subtitle: "Zellbiologie, Genetik & Anatomie",
    durationMinutes: 15,
    durationText: "15 Minuten",
    sectionsText: "15 Biologie Fragen",
    questionCount: 15,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Schneller Bio-Check zwischendurch",
    potentialBoost: "+3% Bio-Sicherheit",
    tags: ["QUICK", "BIOLOGIE"],
    sectionFilter: "BMS",
    subjectFilter: "sub-bio",
  },
  {
    id: "qm-bms-chem",
    exam: "BOTH",
    category: "quick",
    title: "BMS Chemie Sprint",
    subtitle: "Atombau, Bindungen & Stöchiometrie",
    durationMinutes: 15,
    durationText: "15 Minuten",
    sectionsText: "15 Chemie Fragen",
    questionCount: 15,
    difficulty: "Original MedAT-Niveau",
    bestFor: "Reaktions- & Formeltraining",
    potentialBoost: "+4% Chemie-Score",
    tags: ["QUICK", "CHEMIE"],
    premium: true,
    sectionFilter: "BMS",
    subjectFilter: "sub-chem",
  },
  {
    id: "qm-bms-phys-math",
    exam: "BOTH",
    category: "quick",
    title: "BMS Physik & Mathe Sprint",
    subtitle: "Mechanik, Optik, Dreisatz & Vektoren",
    durationMinutes: 15,
    durationText: "15 Minuten",
    sectionsText: "15 Physik/Mathe Fragen",
    questionCount: 15,
    difficulty: "Schwer (Speed)",
    bestFor: "Rechnen ohne Taschenrechner",
    potentialBoost: "+5% Rechenschnelligkeit",
    tags: ["QUICK", "PHYSIK & MATHE"],
    premium: true,
    sectionFilter: "BMS",
    subjectFilter: "sub-phys",
  },
  {
    id: "qm-kff-speed",
    exam: "BOTH",
    category: "quick",
    title: "KFF Speed Sprint",
    subtitle: "Zahlenfolgen & Figuren zusammensetzen",
    durationMinutes: 15,
    durationText: "15 Minuten",
    sectionsText: "15 Kognitive Fragen",
    questionCount: 15,
    difficulty: "Schwer (Speed)",
    bestFor: "Mustererkennung unter Zeitdruck",
    potentialBoost: "+4% KFF Speed",
    tags: ["QUICK", "KFF SPEED"],
    premium: true,
    sectionFilter: "KFF",
  },
];



/* Confetti particles for high score celebrations */
const CONFETTI_COLORS = ["#DC2626", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#06B6D4"];

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        cx: (Math.random() - 0.5) * 240,
        cy: 120 + Math.random() * 180,
        cr: (Math.random() - 0.5) * 800,
        delay: Math.random() * 0.3,
        size: 7 + Math.random() * 7,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        round: Math.random() > 0.4,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="animate-confetti absolute top-6 block"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.round ? p.size : p.size * 0.45,
              background: p.color,
              borderRadius: p.round ? "9999px" : "2px",
              animationDelay: `${p.delay}s`,
              "--cx": `${p.cx}px`,
              "--cy": `${p.cy}px`,
              "--cr": `${p.cr}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* =================================================================
   MAIN COMPONENT: MOCKS & NEST/IISER CBT SIMULATION CENTER
   ================================================================= */
export default function Mocks({
  onNav,
  seed,
}: {
  onNav: (s: Screen, seed?: PracticeSeed) => void;
  seed?: PracticeSeed;
}) {
  const { userProfile, answers, bookmarks, toggleBookmark, recordBatchAnswers, setIsResultPage } = usePractice();

  // Navigation State
  const [activeTab, setActiveTab] = useState<"catalog" | "analytics" | "history">("catalog");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<MockCategory>("all");

  // Pre-Test Modal State
  const [selectedMockForLaunch, setSelectedMockForLaunch] = useState<MockExamDefinition | null>(
    null
  );
  const [lockedModalMock, setLockedModalMock] = useState<MockExamDefinition | null>(null);
  const [isPreTestModalOpen, setIsPreTestModalOpen] = useState<boolean>(false);
  const [isFullMockChecklistOpen, setIsFullMockChecklistOpen] = useState<boolean>(false);
  const [activeFullMockDataset, setActiveFullMockDataset] = useState<GeneralprobeDataset | null>(null);
  const hasPro = isUserPro(userProfile);

  // Active Live CBT Simulation State (IISER / NEST NTA Engine)
  const [activeSimulation, setActiveSimulation] = useState<MockExamDefinition | null>(null);
  const [simulationQuestions, setSimulationQuestions] = useState<StoredQuestion[] | null>(null);
  const [currentSimQIndex, setCurrentSimQIndex] = useState<number>(0);
  const [simAnswers, setSimAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [visitedQuestions, setVisitedQuestions] = useState<Set<string>>(new Set());
  const [activeSubjectTab, setActiveSubjectTab] = useState<string>("ALL");
  const [fontSizeOffset, setFontSizeOffset] = useState<number>(0); // -1, 0, 1

  // Modals inside CBT
  const [showQuestionPaperModal, setShowQuestionPaperModal] = useState<boolean>(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState<boolean>(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [scratchpadNote, setScratchpadNote] = useState<string>("");
  const [showSimSubmitConfirm, setShowSimSubmitConfirm] = useState<boolean>(false);
  const [isSimPaused, setIsSimPaused] = useState<boolean>(false);
  const [mobileSimOverviewOpen, setMobileSimOverviewOpen] = useState<boolean>(false);
  const [showSimShortcutsModal, setShowSimShortcutsModal] = useState<boolean>(false);
  const [showSimScratchpadModal, setShowSimScratchpadModal] = useState<boolean>(false);

  // Timer
  const [simRemainingSeconds, setSimRemainingSeconds] = useState<number>(0);
  const [simTotalDurationSeconds, setSimTotalDurationSeconds] = useState<number>(0);

  // Post-Simulation Result & Review Screen States
  const [simResultData, setSimResultData] = useState<MockAttemptRecord | null>(null);
  const [showSimReview, setShowSimReview] = useState<boolean>(false);
  const [simReviewFilter, setSimReviewFilter] = useState<
    "all" | "correct" | "incorrect" | "flagged"
  >("all");
  const [simReviewQIndex, setSimReviewQIndex] = useState<number>(0);

  // Dynamic Real Data from useMockExamData Hook (Single Source of Truth)
  const {
    stats,
    history: mockHistory,
    isLoading: isHistoryLoading,
    clearActiveSession,
    saveMockAttempt,
    refresh: refreshMockData,
  } = useMockExamData();

  // Recharts Performance Trend Chart Data (Real user attempts only, no fabricated points)
  const chartData = useMemo(() => {
    if (stats.completedFullMocks.length === 0) {
      return [];
    }
    return [...stats.completedFullMocks].reverse().map((m, idx) => ({
      name: `Mock #${idx + 1}`,
      score: m.weightedScore ?? m.score,
      title: m.examTitle,
      date: m.date,
    }));
  }, [stats.completedFullMocks]);

  // Filter available full mocks for candidate's track (MEDAT-H vs MEDAT-Z)
  const availableFullMocks = useMemo(() => {
    return OFFICIAL_MOCKS.filter((m) => {
      if (m.exam === "BOTH") return true;
      return m.exam === userProfile.examType;
    });
  }, [userProfile.examType]);

  // Filtered mock lists based on category pill
  const filteredMocks = useMemo(() => {
    if (activeCategoryFilter === "all") return availableFullMocks;
    if (activeCategoryFilter === "quick") return QUICK_MOCKS;
    return availableFullMocks.filter((m) => m.category === activeCategoryFilter);
  }, [availableFullMocks, activeCategoryFilter]);

  // Recommended Hero Mock
  const recommendedHeroMock = useMemo(() => {
    if (userProfile.examType === "MEDAT-Z") {
      return OFFICIAL_MOCKS.find((m) => m.id === "mock-full-medat-z-1") || OFFICIAL_MOCKS[0];
    }
    return OFFICIAL_MOCKS.find((m) => m.id === "mock-full-medat-h-1") || OFFICIAL_MOCKS[0];
  }, [userProfile.examType]);

  // Handle direct navigation seed action (e.g. from Home Generalprobe hero card)
  useEffect(() => {
    if (!seed?.mockAction) return;
    if (seed.mockAction === "start-generalprobe") {
      const access = canAccessGeneralprobe(userProfile, recommendedHeroMock.id);
      if (!access.allowed) {
        onNav("pricing");
        return;
      }
      setSelectedMockForLaunch(recommendedHeroMock);
      setIsFullMockChecklistOpen(true);
    } else if (seed.mockAction === "view-generalprobe-results") {
      setActiveTab("history");
    }
  }, [seed, recommendedHeroMock, userProfile, onNav]);

  // Sync result, review, or active full mock exam with Shell header visibility
  useEffect(() => {
    const isResultOrReview = !!simResultData || showSimReview || !!activeFullMockDataset;
    setIsResultPage(isResultOrReview);
    return () => {
      setIsResultPage(false);
    };
  }, [simResultData, showSimReview, activeFullMockDataset, setIsResultPage]);

  // Track visited questions in live exam
  useEffect(() => {
    if (!activeSimulation || !simulationQuestions) return;
    const curQ = simulationQuestions[currentSimQIndex];
    if (curQ) {
      setVisitedQuestions((prev) => {
        const next = new Set(prev);
        next.add(curQ.id);
        return next;
      });
    }
  }, [currentSimQIndex, activeSimulation, simulationQuestions]);

  // Live Timer for CBT Simulation
  useEffect(() => {
    if (!activeSimulation || simResultData || isSimPaused) return;
    const interval = window.setInterval(() => {
      setSimRemainingSeconds((prev) => {
        if (prev <= 1) {
          handleAutoSubmitSimulation();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [activeSimulation, simResultData, isSimPaused]);

  // Scroll lock and escape key for Quick/Section pre-test modal
  useEffect(() => {
    if (!isPreTestModalOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPreTestModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isPreTestModalOpen]);

  // Keyboard shortcuts during CBT simulation (1..5, A..E, Arrow keys)
  useEffect(() => {
    if (
      !simulationQuestions ||
      !activeSimulation ||
      simResultData ||
      showSimSubmitConfirm ||
      showQuestionPaperModal ||
      showInstructionsModal ||
      isSimPaused ||
      isScratchpadOpen
    )
      return;
    const onKey = (e: KeyboardEvent) => {
      const curQ = simulationQuestions[currentSimQIndex];
      if (!curQ) return;

      if (["1", "a", "A"].includes(e.key)) {
        handleSelectSimOption(curQ.id, 0);
      } else if (["2", "b", "B"].includes(e.key)) {
        handleSelectSimOption(curQ.id, 1);
      } else if (["3", "c", "C"].includes(e.key)) {
        handleSelectSimOption(curQ.id, 2);
      } else if (["4", "d", "D"].includes(e.key)) {
        handleSelectSimOption(curQ.id, 3);
      } else if (["5", "e", "E"].includes(e.key)) {
        handleSelectSimOption(curQ.id, 4);
      } else if (e.key === "ArrowRight") {
        if (currentSimQIndex + 1 < simulationQuestions.length) {
          setCurrentSimQIndex((i) => i + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentSimQIndex > 0) {
          setCurrentSimQIndex((i) => i - 1);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [
    simulationQuestions,
    currentSimQIndex,
    activeSimulation,
    simResultData,
    showSimSubmitConfirm,
    showQuestionPaperModal,
    showInstructionsModal,
    isSimPaused,
    isScratchpadOpen,
  ]);

  /* =================================================================
     SIMULATION HANDLERS
     ================================================================= */
  const openPreTestModal = (mock: MockExamDefinition) => {
    const access = canAccessGeneralprobe(userProfile, mock.id);
    if (!access.allowed) {
      onNav("pricing");
      return;
    }
    setSelectedMockForLaunch(mock);
    if (mock.category === "full" || mock.id.startsWith("mock-full-medat-h")) {
      setIsFullMockChecklistOpen(true);
    } else {
      setIsPreTestModalOpen(true);
    }
  };

  const handleConfirmAndStartSimulation = () => {
    if (!selectedMockForLaunch) return;
    const mock = selectedMockForLaunch;
    const access = canAccessGeneralprobe(userProfile, mock.id);
    if (!access.allowed) {
      setIsPreTestModalOpen(false);
      onNav("pricing");
      return;
    }
    setIsPreTestModalOpen(false);

    let prepared: StoredQuestion[] = [];

    // BMS Mocks & Quick Sprints: Serve the newly created, calibrated questions deterministically
    if (mock.id === "mock-bms-diagnostic" || mock.id === "mock-pyq-2025" || mock.id === "mock-pyq-2024") {
      prepared = [...GENERALPROBE_1_DATASET.bmsQuestions];
    } else if (mock.id === "qm-bms-bio") {
      prepared = GENERALPROBE_1_DATASET.bmsQuestions.filter((q) => q.subjectId === "bio").slice(0, 15);
    } else if (mock.id === "qm-bms-chem") {
      prepared = GENERALPROBE_1_DATASET.bmsQuestions.filter((q) => q.subjectId === "chem").slice(0, 15);
    } else if (mock.id === "qm-bms-phys") {
      prepared = GENERALPROBE_1_DATASET.bmsQuestions.filter((q) => q.subjectId === "phys").slice(0, 15);
    } else if (mock.id === "qm-bms-math") {
      prepared = GENERALPROBE_1_DATASET.bmsQuestions.filter((q) => q.subjectId === "math").slice(0, 12);
    } else if (mock.id === "mock-tv-sek-full") {
      prepared = [
        ...GENERALPROBE_1_DATASET.tvQuestions,
        ...GENERALPROBE_1_DATASET.erQuestions,
        ...GENERALPROBE_1_DATASET.eeQuestions,
        ...GENERALPROBE_1_DATASET.seQuestions,
      ];
    } else {
      // Build question set from master store
      let pool: StoredQuestion[] = [];
      if (mock.sectionFilter) {
        pool = getQuestionsBySection(mock.sectionFilter, userProfile.examType);
      } else {
        pool = getQuestionsForExam(userProfile.examType);
      }

      if (pool.length === 0) {
        pool = ALL_FRONTEND_QUESTIONS;
      }

      // Shuffle deterministically & pick question count
      prepared = [...pool]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(mock.questionCount, pool.length));
    }

    const totalSecs = mock.durationMinutes * 60;

    setActiveSimulation(mock);
    setSimulationQuestions(prepared);
    setCurrentSimQIndex(0);
    setSimAnswers({});
    setMarkedForReview(new Set());
    setVisitedQuestions(new Set([prepared[0]?.id || ""]));
    setActiveSubjectTab("ALL");
    setSimRemainingSeconds(totalSecs);
    setSimTotalDurationSeconds(totalSecs);
    setIsSimPaused(false);
    setIsScratchpadOpen(false);
    setScratchpadNote("");
    setShowSimSubmitConfirm(false);
    setShowQuestionPaperModal(false);
    setShowInstructionsModal(false);
    setSimResultData(null);
    setShowSimReview(false);

    toast(`${mock.title} Prüfungssimulation gestartet! ⏱`, "info");
  };

  const handleSelectSimOption = (questionId: string, optionIdx: number) => {
    setSimAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleClearSimOption = (questionId: string) => {
    setSimAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const handleSaveAndNext = () => {
    if (!simulationQuestions) return;
    if (currentSimQIndex + 1 < simulationQuestions.length) {
      setCurrentSimQIndex((i) => i + 1);
    } else {
      setShowSimSubmitConfirm(true);
    }
  };

  const handleSaveAndMarkForReview = (questionId: string) => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      next.add(questionId);
      return next;
    });
    handleSaveAndNext();
  };

  const handleMarkForReviewAndNext = (questionId: string) => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      next.add(questionId);
      return next;
    });
    if (!simulationQuestions) return;
    if (currentSimQIndex + 1 < simulationQuestions.length) {
      setCurrentSimQIndex((i) => i + 1);
    }
  };

  const handleAutoSubmitSimulation = () => {
    toast("Die Prüfungszeit ist abgelaufen! Test wird automatisch abgegeben.", "info");
    handleFinalSubmitSimulation();
  };

  const handleFinalSubmitSimulation = () => {
    if (!activeSimulation || !simulationQuestions) return;

    setShowSimSubmitConfirm(false);

    // Evaluate answers
    const batchToRecord: { questionId: string; selected: number }[] = [];
    let correctCount = 0;
    const sectionBreakdown: Record<string, { total: number; correct: number; percentage: number }> =
      {};

    simulationQuestions.forEach((q) => {
      const selected = simAnswers[q.id];
      const isAns = selected !== undefined;
      const isRight = isAns && selected === q.correctAnswer;

      if (isAns) {
        batchToRecord.push({ questionId: q.id, selected });
      }

      if (isRight) correctCount++;

      const secName = q.topic || q.section || "BMS";
      if (!sectionBreakdown[secName]) {
        sectionBreakdown[secName] = { total: 0, correct: 0, percentage: 0 };
      }
      sectionBreakdown[secName].total++;
      if (isRight) sectionBreakdown[secName].correct++;
    });

    Object.keys(sectionBreakdown).forEach((k) => {
      const b = sectionBreakdown[k];
      b.percentage = Math.round((b.correct / Math.max(b.total, 1)) * 100);
    });

    const totalQ = simulationQuestions.length;
    const scorePct = Math.round((correctCount / Math.max(totalQ, 1)) * 100);
    const timeSpent = Math.max(1, simTotalDurationSeconds - simRemainingSeconds);

    // Record question attempts into global Practice Context
    recordBatchAnswers(batchToRecord);

    const newRecord: MockAttemptRecord = {
      id: `attempt-${Date.now()}`,
      mockId: activeSimulation.id,
      examTitle: activeSimulation.title,
      category: activeSimulation.category,
      date: "Heute",
      timestamp: Date.now(),
      score: scorePct,
      correctCount,
      totalQuestions: totalQ,
      timeSpentSeconds: timeSpent,
      passed: scorePct >= 65,
      sectionBreakdown,
    };

    saveMockAttempt(newRecord);
    setSimResultData(newRecord);
  };

  /* =================================================================
     RENDER: QUESTION REVIEW SCREEN (Post-Simulation Deep Dive)
     ================================================================= */
  if (showSimReview && simResultData && simulationQuestions && activeSimulation) {
    const reviewItems = simulationQuestions.map((q) => {
      const selected = simAnswers[q.id];
      const isCorrect = selected !== undefined && selected === q.correctAnswer;
      return {
        question: q,
        selected,
        isCorrect,
      };
    });

    return (
      <MedatReviewView
        title={activeSimulation.title}
        items={reviewItems}
        bookmarks={bookmarks}
        onToggleBookmark={toggleBookmark}
        onBackToResults={() => setShowSimReview(false)}
      />
    );
  }

  /* =================================================================
     RENDER: POST-SIMULATION OFFICIAL RESULTS REPORT
     ================================================================= */
  if (simResultData && activeSimulation && simulationQuestions) {
    const topicStats: Record<string, { total: number; correct: number }> = {};
    const sectionStats: Record<string, { name: string; total: number; correct: number; percentage: number; weight?: string }> = {};

    Object.entries(simResultData.sectionBreakdown || {}).forEach(([k, v]) => {
      topicStats[k] = { total: v.total, correct: v.correct };
      sectionStats[k] = {
        name: k,
        total: v.total,
        correct: v.correct,
        percentage: v.percentage,
        weight: k.includes("BMS") ? "40% MedAT" : k.includes("KFF") ? "40% MedAT" : k.includes("TV") ? "10% MedAT" : "10% MedAT",
      };
    });

    return (
      <MedatResultsView
        title={activeSimulation.title}
        subtitle={activeSimulation.subtitle}
        stats={{
          total: simResultData.totalQuestions,
          correct: simResultData.correctCount,
          incorrect: simResultData.totalQuestions - simResultData.correctCount,
          answered: Object.keys(simAnswers).length,
          accuracy: simResultData.score,
          elapsedSeconds: simResultData.timeSpentSeconds,
          topicStats,
          sectionStats,
          examType: userProfile.examType,
        }}
        onOpenReview={() => setShowSimReview(true)}
        onReturnToOverview={() => {
          setActiveSimulation(null);
          setSimResultData(null);
          setShowSimReview(false);
        }}
        onRepeatOrNext={() => handleConfirmAndStartSimulation()}
        repeatButtonText="Mock Test wiederholen"
      />
    );
  }

  /* =================================================================
     RENDER: MEDAT-H FULL MOCK EXAM / GENERALPROBE RUNNER
     ================================================================= */
  if (activeFullMockDataset) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen flex flex-col overflow-hidden bg-[#F8FAFC]">
        <FullMockExamRunner
          dataset={activeFullMockDataset}
          onExit={() => {
            setActiveFullMockDataset(null);
            refreshMockData();
          }}
          onSaveResult={() => {
            refreshMockData();
          }}
        />
      </div>
    );
  }

  /* =================================================================
     RENDER: AUSTRIAN MEDAT EXAM SIMULATION ENGINE
     ================================================================= */
  if (activeSimulation && simulationQuestions) {
    const curQ = simulationQuestions[currentSimQIndex];
    if (!curQ) return null;

    const totalCount = simulationQuestions.length;
    const answeredCount = Object.keys(simAnswers).length;
    const markedCount = markedForReview.size;
    const isCurBookmarked = bookmarks.has(curQ.id) || markedForReview.has(curQ.id);

    const minsLeft = Math.floor(simRemainingSeconds / 60);
    const secsLeft = simRemainingSeconds % 60;
    const hoursLeft = Math.floor(minsLeft / 60);
    const displayMins = minsLeft % 60;
    const timeFormatted = `${hoursLeft > 0 ? `${hoursLeft}:` : ""}${String(displayMins).padStart(2, "0")}:${String(secsLeft).padStart(2, "0")}`;

    const isTimeWarning = simRemainingSeconds <= 120; // 2 mins
    const isTimeCritical = simRemainingSeconds <= 30; // 30 secs

    return (
      <div className="fixed inset-0 z-50 bg-[#F8FAFC] text-slate-900 flex flex-col font-sans select-none overflow-hidden">
        <MedatExamHeader
          examType={userProfile.examType}
          sectionCode={curQ.section}
          subjectTitle={activeSimulation.title}
          topicTitle={curQ.topic}
          examTitle={activeSimulation.title}
          currentIndex={currentSimQIndex}
          totalQuestions={totalCount}
          isBookmarked={isCurBookmarked}
          timeDisplay={timeFormatted}
          isTimeWarning={isTimeWarning}
          isTimeCritical={isTimeCritical}
          isCountUp={false}
          taskRules={getTaskRules(curQ.section, curQ.topic, "standard", false)}
          onToggleBookmark={() => toggleBookmark(curQ.id)}
          onPause={() => setIsSimPaused(true)}
          onOpenShortcuts={() => setShowSimShortcutsModal(true)}
          onOpenMobileOverview={() => setMobileSimOverviewOpen(true)}
          onOpenScratchpad={() => setShowSimScratchpadModal(true)}
          onRequestSubmit={() => setShowSimSubmitConfirm(true)}
        />

        <div className="flex-1 flex overflow-hidden">
          <MedatQuestionWorkspace
            question={curQ}
            currentIndex={currentSimQIndex}
            totalQuestions={totalCount}
            answeredCount={Object.keys(simAnswers).length}
            selectedOption={simAnswers[curQ.id]}
            isMarked={markedForReview.has(curQ.id)}
            sectionCode={curQ.section}
            subjectTitle={curQ.topic}
            onSelectOption={(optIdx) => handleSelectSimOption(curQ.id, optIdx)}
            onClearOption={() => handleClearSimOption(curQ.id)}
            onToggleMark={() => {
              setMarkedForReview((prev) => {
                const next = new Set(prev);
                if (next.has(curQ.id)) next.delete(curQ.id);
                else next.add(curQ.id);
                return next;
              });
              toggleBookmark(curQ.id);
            }}
            onPrev={() => setCurrentSimQIndex((i) => Math.max(0, i - 1))}
            onNext={handleSaveAndNext}
            onRequestSubmit={() => setShowSimSubmitConfirm(true)}
            onOpenMobileOverview={() => setMobileSimOverviewOpen(true)}
            onOpenScratchpad={() => setShowSimScratchpadModal(true)}
          />

          <MedatQuestionPalette
            questions={simulationQuestions as any}
            currentIndex={currentSimQIndex}
            answers={simAnswers}
            marked={markedForReview}
            isOpenMobile={mobileSimOverviewOpen}
            onCloseMobile={() => setMobileSimOverviewOpen(false)}
            onSelectQuestion={(idx) => setCurrentSimQIndex(idx)}
            onRequestSubmit={() => setShowSimSubmitConfirm(true)}
          />
        </div>

        <MedatSubmitModal
          isOpen={showSimSubmitConfirm}
          totalCount={totalCount}
          answeredCount={answeredCount}
          markedCount={markedCount}
          onCancel={() => setShowSimSubmitConfirm(false)}
          onConfirm={handleFinalSubmitSimulation}
        />

        <MedatPauseModal
          isOpen={isSimPaused}
          answeredCount={answeredCount}
          totalCount={totalCount}
          onResume={() => setIsSimPaused(false)}
          onExitAndSave={() => {
            setActiveSimulation(null);
            setSimulationQuestions(null);
            setIsSimPaused(false);
          }}
        />

        <MedatShortcutsModal
          isOpen={showSimShortcutsModal}
          onClose={() => setShowSimShortcutsModal(false)}
        />

        <MedatScratchpadModal
          isOpen={showSimScratchpadModal}
          onClose={() => setShowSimScratchpadModal(false)}
        />
      </div>
    );
  }

  /* =================================================================
     RENDER: DEFAULT MOCK EXAM CENTER (Overview, Tabs & Catalog)
     ================================================================= */
  return (
    <div className="animate-screen-in space-y-8 pb-28 pt-2">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-md bg-primary-subtle px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-primary">
              {userProfile.examType} Simulationszentrum
            </span>
            <span className="text-[12px] font-semibold text-ink-4">
              Offizielle MedAT Testformate & Simulationen
            </span>
          </div>
          <h1 className="display text-[32px] text-ink">Generalproben-Zentrum</h1>
          <p className="mt-0.5 max-w-2xl text-[14.5px] text-ink-3">
            Trainiere unter echten Prüfungsbedingungen nach den Richtlinien von{" "}
            <a
              href="https://www.medizinstudieren.at"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold underline"
            >
              medizinstudieren.at
            </a>
            .
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex rounded-2xl bg-slate-100 p-1.5 shadow-inner" role="tablist">
          {(
            [
              { id: "catalog", label: "Simulationen" },
              { id: "analytics", label: "Leistungs-Trends" },
              { id: "history", label: `Historie (${stats.historyCount})` },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xl px-5 py-2 text-[13.5px] font-bold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-paper text-ink shadow-md"
                  : "text-ink-3 hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Sleek KPI Metric Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {/* Card 1: Absolvierte Simulationen */}
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">
            Tests Attempted
          </p>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="num text-[32px] font-black leading-none text-ink">
              {stats.totalFullMocks}
            </span>
            <span className="rounded-lg bg-paper-3 px-2 py-1 text-[11px] font-semibold text-ink-3">
              Tests
            </span>
          </div>
          <p className="mt-2 text-[12px] text-ink-4">
            {stats.totalFullMocks > 0 ? "Generalproben absolviert" : "Noch kein Mock absolviert"}
          </p>
        </div>

        {/* Card 2: Durchschnittswert */}
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">
            Average Score
          </p>
          <div className="mt-2.5 flex items-baseline gap-1.5">
            <span className="num text-[32px] font-black leading-none text-ink">
              {stats.averageScore !== null ? `${stats.averageScore}%` : "—"}
            </span>
            {stats.averageScore !== null && (
              <span className="num text-[17px] font-bold text-ink-4">/ 100</span>
            )}
          </div>
          <p className="mt-2 text-[12px] text-ink-4">
            {stats.totalFullMocks > 0 ? "Gewichteter Gesamtdurchschnitt" : "Basisdaten nach 1. Test"}
          </p>
        </div>

        {/* Card 3: Bestwert */}
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-ink-4">Best Score</p>
          <div className="mt-2.5 flex items-baseline gap-1.5">
            <span className="num text-[32px] font-black leading-none text-primary">
              {stats.bestScore !== null ? `${stats.bestScore}%` : "—"}
            </span>
            {stats.bestScore !== null && (
              <span className="num text-[17px] font-bold text-ink-4">/ 100</span>
            )}
          </div>
          <p className="mt-2 text-[12px] text-ink-4">
            {stats.totalFullMocks > 0 ? "Höchste erreichte Gesamtpunktzahl" : "Keine Daten"}
          </p>
        </div>

        {/* Card 4: Leistungssteigerung */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/20 p-5 shadow-xs transition-all duration-300 hover:shadow-md">
          <p className="text-[11.5px] font-bold uppercase tracking-wider text-emerald-800">
            Improvement Trend
          </p>
          <div className="mt-2.5 flex items-baseline gap-1.5">
            <span className="num text-[32px] font-black leading-none text-emerald-600">
              {stats.improvementText}
            </span>
          </div>
          <p className="mt-2 text-[12px] text-emerald-700">
            {stats.totalFullMocks >= 2 ? "pp seit 1. Generalprobe" : "Basisdaten nach 2. Test"}
          </p>
        </div>
      </div>

      {/* TAB 1: CATALOG & HERO */}
      {activeTab === "catalog" && (
        <div className="space-y-8">
          {/* RESUME ACTIVE GENERALPROBE BANNER */}
          {stats.inProgressExamId && (
            <div className="rounded-3xl border-2 border-red-500/40 bg-gradient-to-r from-red-50/90 via-rose-50/80 to-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm animate-in fade-in">
              <div className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white font-black text-lg shadow-md shadow-red-600/30">
                  ▶
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">
                      Laufende Sitzung
                    </span>
                    <span className="text-[12px] font-bold text-red-700">Fortschritt gespeichert</span>
                  </div>
                  <h4 className="font-black text-slate-900 text-[16px] sm:text-[17px] mt-1">
                    MedAT-H Generalprobe fortsetzen
                  </h4>
                  <p className="text-[13px] text-slate-600 mt-0.5">
                    Sie haben eine unvollendete Generalprobe im Testtag-Modus. Ihre Antworten, Allergiepässe und Timer sind gesichert.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => {
                    clearActiveSession();
                    toast("Laufende Simulation zurückgesetzt.", "info");
                  }}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-[12.5px] font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Verwerfen
                </button>
                <button
                  onClick={() => {
                    const examId = stats.inProgressExamId || "mock-full-medat-h-1";
                    const access = canAccessGeneralprobe(userProfile, examId);
                    if (!access.allowed) {
                      onNav("pricing");
                      return;
                    }
                    setActiveFullMockDataset(getGeneralprobeDataset(examId));
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[13px] font-black shadow-md shadow-red-600/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Generalprobe fortsetzen</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* HERO RECOMMENDED NEXT TEST BANNER */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary-subtle/70 via-paper to-blue-50/40 p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-primary px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-paper shadow-sm">
                    {recommendedHeroMock.category === "full" ? "GENERALPROBE" : "Empfohlene Simulation"}
                  </span>
                  {isGeneralprobeFree(recommendedHeroMock.id) ? (
                    <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider">
                      Gratis-Generalprobe
                    </span>
                  ) : !canAccessGeneralprobe(userProfile, recommendedHeroMock.id).allowed ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-amber-300 border border-slate-800 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                      <DIconLock className="h-3 w-3 text-amber-400 shrink-0" />
                      <span>Vollzugang</span>
                    </span>
                  ) : null}
                  <span className="rounded-md bg-emerald-100 text-emerald-800 px-2.5 py-1 text-[11px] font-black">
                    {recommendedHeroMock.potentialBoost}
                  </span>
                  <span className="rounded-md bg-slate-100 text-slate-800 px-2.5 py-1 text-[11px] font-black">
                    ORIGINAL ÜBUNGSAUFGABEN
                  </span>
                </div>

                <h2 className="display text-[28px] sm:text-[34px] text-ink">
                  {recommendedHeroMock.title}
                </h2>
                <p className="text-[14.5px] leading-relaxed text-ink-3">
                  {recommendedHeroMock.subtitle} · {recommendedHeroMock.sectionsText}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[13px] text-ink-3">
                  <span className="flex items-center gap-1.5 rounded-lg bg-paper px-3 py-1.5 font-bold shadow-xs border border-line">
                    <IconTarget className="h-4 w-4 text-primary" /> {recommendedHeroMock.questionCount} Aufgaben
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg bg-paper px-3 py-1.5 font-bold shadow-xs border border-line">
                    <IconClock className="h-4 w-4 text-amber-600" /> {recommendedHeroMock.durationText}
                  </span>
                  {recommendedHeroMock.category === "full" && (
                    <span className="flex items-center gap-1.5 rounded-lg bg-paper px-3 py-1.5 font-bold shadow-xs border border-line">
                      <IconClock className="h-4 w-4 text-emerald-600" /> 60 Min. Pause
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 rounded-lg bg-paper px-3 py-1.5 font-bold shadow-xs border border-line">
                    <IconBrain className="h-4 w-4 text-indigo-600" /> Testtag-Modus
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {(() => {
                    const heroAccess = canAccessGeneralprobe(userProfile, recommendedHeroMock.id);
                    const heroIsLocked = !heroAccess.allowed;

                    if (heroIsLocked) {
                      return (
                        <>
                          <button
                            onClick={() => onNav("pricing")}
                            className="inline-flex items-center gap-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-slate-950 font-black px-8 py-3.5 text-[14.5px] shadow-lg hover:shadow-amber-500/25 transition-all cursor-pointer"
                          >
                            <DIconLock className="h-4 w-4 text-slate-950" />
                            <span>Vollzugang freischalten (39 €) →</span>
                          </button>
                          <button
                            onClick={() => onNav("pricing")}
                            className="btn btn-secondary px-6 py-3.5 text-[14px] font-bold cursor-pointer"
                          >
                            Pre-Test Checkliste
                          </button>
                        </>
                      );
                    }

                    return (
                      <>
                        <button
                          onClick={() => {
                            if (stats.inProgressExamId === recommendedHeroMock.id) {
                              setActiveFullMockDataset(getGeneralprobeDataset(recommendedHeroMock.id));
                            } else {
                              openPreTestModal(recommendedHeroMock);
                            }
                          }}
                          className="btn btn-primary px-8 py-3.5 text-[14.5px] font-bold shadow-lg hover:scale-[1.03] transition-all cursor-pointer"
                        >
                          {stats.inProgressExamId === recommendedHeroMock.id
                            ? "Generalprobe fortsetzen →"
                            : stats.completedFullMocks.some((m) => m.mockId === recommendedHeroMock.id)
                            ? "Generalprobe wiederholen →"
                            : "Generalprobe starten →"}
                        </button>
                        <button
                          onClick={() => openPreTestModal(recommendedHeroMock)}
                          className="btn btn-secondary px-6 py-3.5 text-[14px] font-bold cursor-pointer"
                        >
                          Pre-Test Checkliste
                        </button>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* AI Guidance Sidecard (Real, dynamically generated didactic recommendations) */}
              <div className="w-full lg:w-80 rounded-2xl border border-indigo-100 bg-paper/90 p-5 shadow-md backdrop-blur-xs space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 text-paper text-[11px] font-bold">
                    💡
                  </span>
                  <h4 className="text-[13.5px] font-black uppercase tracking-wider text-indigo-950">
                    Didaktische Empfehlung
                  </h4>
                </div>
                <div className="text-[13px] font-bold text-slate-900 leading-snug">
                  {stats.recommendations.primary}
                </div>
                <ul className="space-y-2 text-[12px] text-slate-600 pt-1 border-t border-slate-100">
                  {stats.recommendations.supporting.map((sup, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold shrink-0">●</span>
                      <span>{sup}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FULL MOCKS CATALOG */}
          <section className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-[20px] font-bold tracking-tight text-ink flex items-center gap-2">
                  <IconTarget className="h-5 w-5 text-primary" />
                  MedAT-H Generalproben & Diagnosetests
                </h2>
                <p className="text-[13px] text-ink-3 mt-0.5">
                  Vollständige Prüfungssimulationen mit 221 Aufgaben und exakter Testzeitverteilung.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap rounded-xl bg-slate-100 p-1 text-[12px] font-bold">
                {[
                  { id: "all", label: "Alle Formate" },
                  { id: "full", label: "Full Generalproben" },
                  { id: "bms", label: "BMS Mocks" },
                  { id: "kff", label: "KFF Speed" },
                  { id: "pyq", label: "Altfragen-Archetypen" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveCategoryFilter(f.id as MockCategory)}
                    className={`rounded-lg px-3 py-1.5 transition-all ${
                      activeCategoryFilter === f.id
                        ? "bg-paper text-ink shadow-xs"
                        : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {filteredMocks.map((exam) => {
                const isExamInProgress = stats.inProgressExamId === exam.id;
                const pastAttempt =
                  stats.completedFullMocks.find((h) => h.mockId === exam.id || h.mockId === exam.id.replace("mock-full-medat-h-", "generalprobe-")) ||
                  mockHistory.find((h) => h.mockId === exam.id || h.mockId === exam.id.replace("mock-full-medat-h-", "generalprobe-"));
                const access = canAccessGeneralprobe(userProfile, exam.id);
                const isFree = isGeneralprobeFree(exam.id);
                const isLocked = !access.allowed;
                const cardDuration = exam.durationText
                  .replace(" reine Aufgabenzeit + 60 Min. Pause", "")
                  .replace(" + 60 Min. Pause", "");

                return (
                  <div
                    key={exam.id}
                    onClick={() => {
                      if (isLocked) {
                        onNav("pricing");
                      }
                    }}
                    className={`card-lift flex flex-col justify-between rounded-3xl border p-6 sm:p-7 shadow-xs transition-all duration-300 ${
                      isLocked
                        ? "border-slate-200/90 bg-slate-50/50 hover:border-amber-400 hover:bg-white hover:shadow-xl cursor-pointer"
                        : "border-line bg-paper hover:border-primary/50 hover:shadow-xl"
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {exam.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className={`rounded-md px-2 py-0.5 text-[10px] font-black tracking-wider uppercase ${
                                idx === 0
                                  ? "bg-primary-subtle text-primary"
                                  : "bg-paper-3 text-ink-3"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                          {isFree ? (
                            <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                              Gratis-Generalprobe
                            </span>
                          ) : isLocked ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-amber-300 border border-slate-800 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-2xs">
                              <DIconLock className="h-3 w-3 text-amber-400 shrink-0" />
                              <span>Vollzugang</span>
                            </span>
                          ) : null}
                        </div>

                        {isExamInProgress ? (
                          <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 text-[10.5px] font-black animate-pulse flex items-center gap-1">
                            <span>⏳</span>
                            <span>In Bearbeitung</span>
                          </span>
                        ) : pastAttempt ? (
                          <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[10.5px] font-bold">
                            ✓ Abgeschlossen ({pastAttempt.score}%)
                          </span>
                        ) : (
                          <span className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-0.5 text-[10.5px] font-medium">
                            Nicht absolviert
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-[18px] sm:text-[19px] font-bold text-ink">{exam.title}</h3>
                      <p className="mt-1 text-[13px] text-ink-3">{exam.subtitle}</p>

                      <div className="mt-4 rounded-xl bg-paper-3/60 p-3 text-[12px] text-ink-3 space-y-1">
                        <p className="font-semibold text-ink">{exam.sectionsText}</p>
                        <p className="text-ink-4">Fokus: {exam.bestFor}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 border-t border-line pt-4">
                      <div className="flex items-center gap-2 text-[12px] font-semibold text-ink-4 min-w-0">
                        <span className="truncate">⏱ {cardDuration}</span>
                        <span>·</span>
                        <span className="shrink-0">{exam.questionCount} Aufgaben</span>
                      </div>

                      {isLocked ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onNav("pricing");
                          }}
                          className="shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:scale-[0.98] text-slate-950 font-bold px-4 sm:px-5 py-2.5 text-[13px] shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                          <DIconLock className="h-4 w-4 shrink-0 text-slate-950" />
                          <span className="leading-none">Vollzugang freischalten</span>
                        </button>
                      ) : isExamInProgress ? (
                        <button
                          onClick={() => {
                            setActiveFullMockDataset(getGeneralprobeDataset(exam.id));
                          }}
                          className="shrink-0 whitespace-nowrap btn btn-primary bg-amber-600 hover:bg-amber-700 px-6 py-2.5 text-[13.5px] font-bold shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                        >
                          Fortsetzen →
                        </button>
                      ) : (
                        <button
                          onClick={() => openPreTestModal(exam)}
                          className="shrink-0 whitespace-nowrap btn btn-primary px-6 py-2.5 text-[13.5px] font-bold shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                        >
                          {pastAttempt ? "Wiederholen →" : "Starten →"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: ANALYTICS & RECHARTS */}
      {activeTab === "analytics" && (
        <div className="space-y-8 animate-fade-up">
          {/* Performance Trend Chart */}
          <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-[19px] font-bold tracking-tight text-ink">
                  Performance & Score-Entwicklung
                </h2>
                <p className="text-[13.5px] text-ink-3 mt-0.5">
                  Verlauf deiner Gesamtpunktzahlen über alle absolvierten Testläufe.
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-paper-3 px-5 py-2.5 border border-line">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-4">
                    Latest Score
                  </p>
                  <p className="num text-[20px] font-black text-ink">
                    {stats.latestScore !== null ? `${stats.latestScore}%` : "—"}
                  </p>
                </div>
                <div className="h-7 w-px bg-line" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    Trend
                  </p>
                  <p className="num text-[20px] font-black text-emerald-600">
                    {stats.improvementText}
                  </p>
                </div>
              </div>
            </div>

            {/* Recharts Area Chart or Clean Empty State */}
            {chartData.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-8 sm:p-12 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl text-slate-500">
                  📊
                </div>
                <div className="space-y-1">
                  <h4 className="text-[15px] font-bold text-slate-800">Noch keine historischen Trenddaten</h4>
                  <p className="text-[13px] text-slate-500 max-w-md mx-auto">
                    Absolviere mindestens eine Generalprobe im Testtag-Modus, um deinen Punkteverlauf und deine Leistungsentwicklung grafisch darzustellen.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-64 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="scoreColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#DC2626" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748B", fontSize: 12, fontWeight: 600 }}
                    />
                    <YAxis
                      domain={[0, 100]}
                      ticks={[0, 25, 50, 75, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748B", fontSize: 12, fontWeight: 600 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F172A",
                        borderRadius: "14px",
                        border: "none",
                        color: "#FFFFFF",
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                      formatter={(val: any) => [`${val}% Score`, "Ergebnis"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#DC2626"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#scoreColor)"
                      activeDot={{ r: 6, fill: "#DC2626", stroke: "#FFFFFF", strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* Section Breakdown Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* MedUni Target Readiness */}
            <div className="rounded-3xl border border-line bg-paper p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="text-[17px] font-bold text-ink">Ziel-Readiness & Zulassungschance</h3>
              <p className="text-[13px] text-ink-3">
                Referenzwert basierend auf den Aufnahmegrenzen für{" "}
                <strong className="text-ink font-semibold">
                  {UNIVERSITIES[userProfile.targetUniversity]?.name || "MedUni Wien"}
                </strong>
                .
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[13px] font-bold">
                  <span className="text-ink">Aktuelle Simulation Readiness</span>
                  <span className="num text-primary">
                    {stats.averageScore !== null ? `${stats.averageScore}%` : "—"}
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[#991B1B]"
                    style={{ width: `${Math.min(100, stats.averageScore ?? 0)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11.5px] text-ink-4 pt-1">
                  <span>Start (0%)</span>
                  <span>Zielquote: ≥78%</span>
                </div>
              </div>
            </div>

            {/* 4-Säulen Durchschnittsleistung */}
            <div className="rounded-3xl border border-line bg-paper p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="text-[17px] font-bold text-ink">4-Säulen Durchschnittsleistung</h3>
              <div className="space-y-2.5 text-[13px]">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-paper-3">
                  <span className="font-semibold text-ink">🧬 BMS (40% Gewichtung)</span>
                  <span className="font-bold text-slate-900">
                    {stats.sectionAverages.bms !== null ? `${stats.sectionAverages.bms}%` : "—"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-paper-3">
                  <span className="font-semibold text-ink">🧩 KFF (40% Gewichtung)</span>
                  <span className="font-bold text-slate-900">
                    {stats.sectionAverages.kff !== null ? `${stats.sectionAverages.kff}%` : "—"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-paper-3">
                  <span className="font-semibold text-ink">📖 Textverständnis (10% Gewichtung)</span>
                  <span className="font-bold text-slate-900">
                    {stats.sectionAverages.tv !== null ? `${stats.sectionAverages.tv}%` : "—"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-paper-3">
                  <span className="font-semibold text-ink">❤️ SEK (10% Gewichtung)</span>
                  <span className="font-bold text-slate-900">
                    {stats.sectionAverages.sek !== null ? `${stats.sectionAverages.sek}%` : "—"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: HISTORIE */}
      {activeTab === "history" && (
        <div className="space-y-4 animate-fade-up">
          <div className="flex items-center justify-between">
            <h2 className="text-[19px] font-bold tracking-tight text-ink">Bisherige Probetests</h2>
            <span className="text-[12.5px] font-semibold text-ink-4">
              {stats.historyCount} Einträge
            </span>
          </div>

          {mockHistory.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 sm:p-14 text-center space-y-4 shadow-xs">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
                📋
              </div>
              <div className="space-y-1.5 max-w-md mx-auto">
                <h3 className="text-[17px] font-bold text-slate-900">
                  Noch keine Generalprobe abgeschlossen.
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Starte deine erste Generalprobe im Testtag-Modus, um hier deine detaillierten Versuchsergebnisse, Säulenbewertungen und Zeitaufwände zu archivieren.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openPreTestModal(recommendedHeroMock)}
                  className="btn btn-primary px-6 py-2.5 text-[13.5px] font-bold shadow-md cursor-pointer"
                >
                  Erste Generalprobe starten →
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {mockHistory.map((m) => {
                const bmsBreakdown = m.sectionBreakdown?.BMS;
                const tvBreakdown = m.sectionBreakdown?.TV;
                const kffBreakdown = m.sectionBreakdown?.KFF;
                const sekBreakdown = m.sectionBreakdown?.SEK;

                return (
                  <div
                    key={m.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[16px] font-bold text-ink">{m.examTitle}</h4>
                        <span className="rounded-md bg-paper-3 px-2 py-0.5 text-[10.5px] font-bold text-ink-3 uppercase">
                          {m.category === "full" ? "Generalprobe" : m.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-4">
                        <span>{m.date}</span>
                        <span>·</span>
                        <span>{m.totalQuestions} Aufgaben</span>
                        <span>·</span>
                        <span>{Math.round(m.timeSpentSeconds / 60)} Min</span>
                      </div>

                      {/* 4 Pillars Mini-Badges if Full Mock */}
                      {(bmsBreakdown || tvBreakdown || kffBreakdown || sekBreakdown) && (
                        <div className="flex flex-wrap gap-2 pt-1 text-[11.5px] font-medium text-slate-600">
                          {bmsBreakdown && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/60">
                              BMS: <strong>{bmsBreakdown.percentage}%</strong> ({bmsBreakdown.correct}/{bmsBreakdown.total})
                            </span>
                          )}
                          {tvBreakdown && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/60">
                              TV: <strong>{tvBreakdown.percentage}%</strong> ({tvBreakdown.correct}/{tvBreakdown.total})
                            </span>
                          )}
                          {kffBreakdown && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/60">
                              KFF: <strong>{kffBreakdown.percentage}%</strong> ({kffBreakdown.correct}/{kffBreakdown.total})
                            </span>
                          )}
                          {sekBreakdown && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/60">
                              SEK: <strong>{sekBreakdown.percentage}%</strong> ({sekBreakdown.correct}/{sekBreakdown.total})
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-line">
                      <div className="text-right">
                        <span
                          className={`num text-[24px] font-black ${
                            m.score >= 75
                              ? "text-success"
                              : m.score >= 60
                              ? "text-primary"
                              : "text-ink"
                          }`}
                        >
                          {m.score}%
                        </span>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                          Gesamtergebnis
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const matchedMock =
                            OFFICIAL_MOCKS.find(
                              (om) =>
                                om.id === m.mockId ||
                                om.id.replace("mock-full-medat-h-", "generalprobe-") === m.mockId
                            ) ||
                            QUICK_MOCKS.find((qm) => qm.id === m.mockId) ||
                            OFFICIAL_MOCKS[0];
                          openPreTestModal(matchedMock);
                        }}
                        className="btn btn-secondary px-4 py-2 text-[12.5px] font-bold cursor-pointer"
                      >
                        Wiederholen
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* PRE-TEST CHECKLIST MODAL */}
      {isPreTestModalOpen && selectedMockForLaunch && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedMockForLaunch.title}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/65 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPreTestModalOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl shadow-slate-950/25 border border-slate-100 overflow-hidden flex flex-col max-h-[88vh] min-h-0 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Precision Red Accent Line */}
            <div className="h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 w-full shrink-0" />

            {/* Header */}
            <div className="p-5 sm:p-6 pb-4 bg-white border-b border-slate-100 shrink-0">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200/80 text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    CBT Simulation
                  </span>
                  <span className="text-[11.5px] font-semibold text-slate-400">
                    Pre-Test Modus
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPreTestModalOpen(false)}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Schließen"
                >
                  <IconClose className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2.5">
                {selectedMockForLaunch.title}
              </h3>
              <p className="text-slate-500 text-[12.5px] sm:text-[13px] mt-1 font-normal leading-relaxed">
                Prüfungsbedingungen & Checkliste vor Beginn des Tests.
              </p>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-4 bg-slate-50/30">
              {/* Test Details Grid */}
              <div className="grid grid-cols-3 gap-2.5 rounded-2xl border border-slate-200/80 bg-white p-3.5 text-center shadow-2xs">
                <div>
                  <p className="num text-[20px] font-black text-slate-900">
                    {selectedMockForLaunch.questionCount}
                  </p>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Fragen</p>
                </div>
                <div className="border-x border-slate-100">
                  <p className="num text-[20px] font-black text-slate-900">
                    {selectedMockForLaunch.durationText}
                  </p>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Zeitlimit</p>
                </div>
                <div>
                  <p className="num text-[20px] font-black text-red-600">CBT</p>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Modus</p>
                </div>
              </div>

              {/* Checkpoints */}
              <div className="space-y-2.5">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Prüfungs-Checkliste vor dem Start:
                </h4>
                <div className="space-y-2">
                  {[
                    {
                      label: "Reale Prüfungsbedingungen",
                      desc: "Ruhige Umgebung ohne Ablenkung einrichten.",
                    },
                    {
                      label: "Keine Zwischenpausen",
                      desc: "Die Uhr läuft kontinuierlich während der Sektion weiter.",
                    },
                    {
                      label: "Schmierzettel & Stift",
                      desc: "Für KFF (Zahlenfolgen) und BMS Physik/Mathe bereitlegen.",
                    },
                    {
                      label: "Vollbildmodus empfohlen",
                      desc: "Für maximale Konzentration und optimale Übersicht.",
                    },
                  ].map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
                    >
                      <span className="w-5 h-5 rounded-md bg-red-50 text-red-600 border border-red-200/70 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </span>
                      <div className="text-[12.5px] sm:text-[13px]">
                        <strong className="text-slate-900 font-bold">{pt.label}: </strong>
                        <span className="text-slate-500">{pt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-white flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsPreTestModalOpen(false)}
                className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-[13px] font-bold transition-colors cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleConfirmAndStartSimulation}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13.5px] font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Test starten ⚡</span>
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* FULL MOCK PRE-TEST CHECKLIST MODAL */}
      <FullMockPreTestChecklistModal
        isOpen={isFullMockChecklistOpen}
        onClose={() => setIsFullMockChecklistOpen(false)}
        onStart={() => {
          setIsFullMockChecklistOpen(false);
          const targetMock = selectedMockForLaunch || recommendedHeroMock;
          const access = canAccessGeneralprobe(userProfile, targetMock.id);
          if (!access.allowed) {
            onNav("pricing");
            return;
          }
          try {
            const saved = localStorage.getItem("medat_active_generalprobe_v1");
            if (saved) {
              const parsed = JSON.parse(saved);
              if (parsed?.stage === "RESULTS" || parsed?.stage === "CHECKLIST") {
                localStorage.removeItem("medat_active_generalprobe_v1");
              }
            }
          } catch (e) {}
          const datasetToLaunch = selectedMockForLaunch
            ? getGeneralprobeDataset(selectedMockForLaunch.id)
            : GENERALPROBE_1_DATASET;
          setActiveFullMockDataset(datasetToLaunch);
        }}
      />

      {/* GENERALPROBE / BMS UPGRADE MODAL */}
      <BmsProUpgradeModal
        isOpen={!!lockedModalMock}
        onClose={() => setLockedModalMock(null)}
        chapter={
          lockedModalMock
            ? {
                id: lockedModalMock.id,
                title: lockedModalMock.title,
                subjectId: "generalprobe",
                section: "GENERALPROBE",
              }
            : null
        }
        onNav={onNav}
      />
    </div>
  );
}
