/**
 * useMockExamData.ts
 * Single source of truth for the MedAT-H Mock Exam Center.
 * Reads real user data from local persistence (and Supabase sync where available),
 * strictly rejects fake/hardcoded demo metrics, and computes real weighted KPIs.
 */

import { useState, useEffect, useMemo, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { fetchMockResultsFromSupabase, saveMockResultToSupabase } from "../../lib/dbSync";

export const STORAGE_KEY_HISTORY = "medat_mock_history_v4";
export const STORAGE_KEY_ACTIVE = "medat_active_generalprobe_v1";

export interface MockAttemptRecord {
  id: string; // attemptId
  userId?: string;
  mockId: string; // simulationId
  examTitle: string; // simulationName
  category: "full" | "quick" | "bms" | "kff" | "pyq";
  date: string;
  timestamp: number;
  score: number; // weighted score (0..100) for full mocks
  weightedScore?: number;
  correctCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  passed: boolean;
  bmsRaw?: number;
  bmsPercent?: number;
  tvRaw?: number;
  tvPercent?: number;
  kffRaw?: number;
  kffPercent?: number;
  sekRaw?: number;
  sekPercent?: number;
  status?: "completed" | "abandoned" | "in_progress";
  sectionBreakdown?: Record<string, { total: number; correct: number; percentage: number }>;
}

export interface MockExamCenterStats {
  totalFullMocks: number;
  averageScore: number | null; // e.g. 69.9 or null
  bestScore: number | null; // e.g. 74.0 or null
  latestScore: number | null; // e.g. 74.0 or null
  improvement: number | null; // in percentage points (pp)
  improvementText: string; // e.g. "+4.1 pp" or "—"
  historyCount: number;
  completedFullMocks: MockAttemptRecord[];
  completedQuickMocks: MockAttemptRecord[];
  allCompletedMocks: MockAttemptRecord[];
  inProgressExamId: string | null;
  sectionAverages: {
    bms: number | null;
    tv: number | null;
    kff: number | null;
    sek: number | null;
  };
  recommendations: {
    primary: string;
    supporting: string[];
    weakestSection: "BMS" | "TV" | "KFF" | "SEK" | null;
    strongestSection: "BMS" | "TV" | "KFF" | "SEK" | null;
  };
}

/**
 * Filter out legacy dummy demo entries from earlier versions.
 * Never allows hardcoded hist-1, hist-2, hist-3 to pollute real metrics.
 */
export function sanitizeMockHistory(rawList: unknown): MockAttemptRecord[] {
  if (!Array.isArray(rawList)) return [];
  return rawList.filter((item): item is MockAttemptRecord => {
    if (!item || typeof item !== "object") return false;
    const rec = item as Record<string, any>;
    // Discard hardcoded dummy mock IDs
    if (rec.id === "hist-1" || rec.id === "hist-2" || rec.id === "hist-3") return false;
    // Discard placeholder demo record where totalQuestions was 94 for a full mock
    if (
      rec.mockId === "mock-full-medat-h-1" &&
      rec.score === 76 &&
      rec.totalQuestions === 94 &&
      rec.date === "Vor 2 Tagen"
    ) {
      return false;
    }
    // Must have at least a valid id, mockId, and score
    return typeof rec.id === "string" && typeof rec.mockId === "string" && typeof rec.score === "number";
  });
}

/**
 * Calculates all KPI statistics strictly from real completed attempts.
 */
export function calculateMockExamCenterStats(
  history: MockAttemptRecord[],
  activeExamId: string | null
): MockExamCenterStats {
  // 1. Separate Full Generalproben from Quick Mocks
  const completedFullMocks = history.filter((m) => {
    // A completed full mock has category === 'full' or 221 tasks
    const isFull = m.category === "full" || m.totalQuestions === 221 || m.mockId.startsWith("mock-full-");
    const isCompleted = m.status !== "abandoned" && m.status !== "in_progress";
    return isFull && isCompleted;
  });

  const completedQuickMocks = history.filter((m) => {
    return m.category === "quick" || m.mockId.startsWith("qm-");
  });

  const allCompletedMocks = history.filter((m) => m.status !== "abandoned" && m.status !== "in_progress");

  const totalFullMocks = completedFullMocks.length;

  // 2. Average Score (Only completed Full Mocks)
  let averageScore: number | null = null;
  if (totalFullMocks > 0) {
    const sum = completedFullMocks.reduce((acc, m) => acc + (m.weightedScore ?? m.score), 0);
    averageScore = Math.round((sum / totalFullMocks) * 10) / 10;
  }

  // 3. Best Score (Only completed Full Mocks)
  let bestScore: number | null = null;
  if (totalFullMocks > 0) {
    bestScore = Math.round(Math.max(...completedFullMocks.map((m) => m.weightedScore ?? m.score)) * 10) / 10;
  }

  // 4. Latest Score
  let latestScore: number | null = null;
  if (totalFullMocks > 0) {
    latestScore = Math.round((completedFullMocks[0].weightedScore ?? completedFullMocks[0].score) * 10) / 10;
  }

  // 5. Improvement Trend (In percentage points 'pp')
  // Requires at least 2 completed full mocks. Otherwise null.
  let improvement: number | null = null;
  let improvementText = "—";
  if (totalFullMocks >= 2) {
    // completedFullMocks is ordered newest first: index 0 is latest, last is first attempt
    const latest = completedFullMocks[0].weightedScore ?? completedFullMocks[0].score;
    const first =
      completedFullMocks[totalFullMocks - 1].weightedScore ??
      completedFullMocks[totalFullMocks - 1].score;
    improvement = Math.round((latest - first) * 10) / 10;
    const sign = improvement > 0 ? "+" : "";
    improvementText = `${sign}${improvement} pp`;
  }

  // 6. Section Performance Averages across completed full mocks
  let bmsAvg: number | null = null;
  let tvAvg: number | null = null;
  let kffAvg: number | null = null;
  let sekAvg: number | null = null;

  if (totalFullMocks > 0) {
    let bmsSum = 0;
    let tvSum = 0;
    let kffSum = 0;
    let sekSum = 0;
    let countBms = 0;
    let countTv = 0;
    let countKff = 0;
    let countSek = 0;

    completedFullMocks.forEach((m) => {
      if (m.bmsPercent !== undefined) {
        bmsSum += m.bmsPercent;
        countBms++;
      } else if (m.sectionBreakdown?.BMS) {
        bmsSum += m.sectionBreakdown.BMS.percentage;
        countBms++;
      }

      if (m.tvPercent !== undefined) {
        tvSum += m.tvPercent;
        countTv++;
      } else if (m.sectionBreakdown?.TV) {
        tvSum += m.sectionBreakdown.TV.percentage;
        countTv++;
      }

      if (m.kffPercent !== undefined) {
        kffSum += m.kffPercent;
        countKff++;
      } else if (m.sectionBreakdown?.KFF) {
        kffSum += m.sectionBreakdown.KFF.percentage;
        countKff++;
      }

      if (m.sekPercent !== undefined) {
        sekSum += m.sekPercent;
        countSek++;
      } else if (m.sectionBreakdown?.SEK) {
        sekSum += m.sectionBreakdown.SEK.percentage;
        countSek++;
      }
    });

    if (countBms > 0) bmsAvg = Math.round((bmsSum / countBms) * 10) / 10;
    if (countTv > 0) tvAvg = Math.round((tvSum / countTv) * 10) / 10;
    if (countKff > 0) kffAvg = Math.round((kffSum / countKff) * 10) / 10;
    if (countSek > 0) sekAvg = Math.round((sekSum / countSek) * 10) / 10;
  }

  // 7. Dynamic Didactic Recommendation Engine
  let primaryRecommendation = "";
  const supportingRecommendations: string[] = [];
  let weakestSection: "BMS" | "TV" | "KFF" | "SEK" | null = null;
  let strongestSection: "BMS" | "TV" | "KFF" | "SEK" | null = null;

  if (totalFullMocks === 0) {
    primaryRecommendation =
      "Starte deine erste MedAT-H Generalprobe im Testtag-Modus für eine verlässliche 4-Säulen-Standortbestimmung.";
    supportingRecommendations.push(
      "Pre-Test Checkliste durchgehen und ein unterbrechungsfreies 5h-Zeitfenster reservieren.",
      "BMS (94 Aufgaben) und KFF (75 Aufgaben) bilden mit je 40% den Kern deiner Gesamtbewertung."
    );
  } else {
    // Evaluate based on latest full mock (or averages if available)
    const latestMock = completedFullMocks[0];
    const bmsVal = latestMock.bmsPercent ?? latestMock.sectionBreakdown?.BMS?.percentage ?? bmsAvg ?? 0;
    const tvVal = latestMock.tvPercent ?? latestMock.sectionBreakdown?.TV?.percentage ?? tvAvg ?? 0;
    const kffVal = latestMock.kffPercent ?? latestMock.sectionBreakdown?.KFF?.percentage ?? kffAvg ?? 0;
    const sekVal = latestMock.sekPercent ?? latestMock.sectionBreakdown?.SEK?.percentage ?? sekAvg ?? 0;

    const sections = [
      { code: "BMS" as const, val: bmsVal, weight: 40, label: "BMS (40% Gewichtung)" },
      { code: "KFF" as const, val: kffVal, weight: 40, label: "KFF (40% Gewichtung)" },
      { code: "TV" as const, val: tvVal, weight: 10, label: "Textverständnis (10% Gewichtung)" },
      { code: "SEK" as const, val: sekVal, weight: 10, label: "SEK (10% Gewichtung)" },
    ];

    sections.sort((a, b) => a.val - b.val);
    weakestSection = sections[0].code;
    strongestSection = sections[sections.length - 1].code;

    // Highest leverage logic: BMS and KFF have 4x weight compared to TV/SEK
    if (bmsVal < 65 && kffVal < 65) {
      primaryRecommendation =
        "BMS und KFF sind aktuell die größten Hebel für deine nächste Generalprobe (je 40% Gewichtung).";
      supportingRecommendations.push(
        `BMS liegt bei ${bmsVal}%: Biologie- und Chemie-Sprints im Detail festigen.`,
        `KFF liegt bei ${kffVal}%: Zahlenfolgen und Figuren zusammensetzen gezielt unter Zeitlimit trainieren.`
      );
    } else if (weakestSection === "BMS") {
      primaryRecommendation = `BMS-Naturwissenschaften (${bmsVal}%) im Detail festigen — 40% Gesamteinfluss auf deinen MedAT-Rang.`;
      supportingRecommendations.push(
        "Fokus auf Biologie und Chemie: Diese beiden Fächer stellen 64 der 94 BMS-Aufgaben.",
        "Formeln und Naturkonstanten ohne Hilfsmittel einprägen."
      );
    } else if (weakestSection === "KFF") {
      primaryRecommendation = `KFF Zeitbudget optimieren (${kffVal}%): 75 Aufgaben in 88 Min erfordern striktes Pacing.`;
      supportingRecommendations.push(
        "Allergiepass-Merkphase: Gezielte Mnemo-Techniken für Ausweise und Blutgruppen nutzen.",
        "Zahlenfolgen: Maximal 45 Sekunden pro Aufgabe investieren, um Zeit für Wortflüssigkeit zu sichern."
      );
    } else if (weakestSection === "TV") {
      primaryRecommendation = `Textverständnis-Strategie schärfen (${tvVal}%): Strukturierte Markierungstechnik anwenden.`;
      supportingRecommendations.push(
        "Fachtext zuerst überfliegen, Fragen analysieren und gezieltes Re-Reading praktizieren.",
        "Auf Negationen und einschränkende Quantoren ('ausschließlich', 'selten') achten."
      );
    } else if (weakestSection === "SEK") {
      primaryRecommendation = `SEK-Urteilsmechaniken vertiefen (${sekVal}%): All-or-Nothing-Regel bei Emotionen erkennen beachten.`;
      supportingRecommendations.push(
        "Emotionen erkennen verlangt 5/5 korrekte Urteile für 1 Punkt (keine Teilpunkte).",
        "Soziales Entscheiden: Ethische Reihung an Handlungsfolgen und Patientenwohl ausrichten."
      );
    } else {
      primaryRecommendation =
        "Hervorragende, ausgewogene Leistung über alle 4 Säulen. Fokus auf mentale Ausdauer für den Testtag.";
      supportingRecommendations.push(
        `Stärkste Säule: ${strongestSection} mit ${sections[sections.length - 1].val}%.`,
        "Regenerationsphase und 60-Minuten-Pause im Testtag-Modus realistisch simulieren."
      );
    }

    if (strongestSection && strongestSection !== weakestSection) {
      supportingRecommendations.push(
        `Leistung in ${strongestSection} ist aktuell mit ${sections[sections.length - 1].val}% stabil.`
      );
    }
  }

  return {
    totalFullMocks,
    averageScore,
    bestScore,
    latestScore,
    improvement,
    improvementText,
    historyCount: allCompletedMocks.length,
    completedFullMocks,
    completedQuickMocks,
    allCompletedMocks,
    inProgressExamId: activeExamId,
    sectionAverages: {
      bms: bmsAvg,
      tv: tvAvg,
      kff: kffAvg,
      sek: sekAvg,
    },
    recommendations: {
      primary: primaryRecommendation,
      supporting: supportingRecommendations,
      weakestSection,
      strongestSection,
    },
  };
}

/**
 * useMockExamData Hook
 * Reactive hook delivering real application metrics to the Mock Exam Center.
 */
export function useMockExamData() {
  const [history, setHistory] = useState<MockAttemptRecord[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      if (raw) {
        return sanitizeMockHistory(JSON.parse(raw));
      }
    } catch (e) {}
    return [];
  });

  const [activeSessionExamId, setActiveSessionExamId] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.stage !== "RESULTS" && parsed.examId) {
          const normId =
            typeof parsed.examId === "string" && parsed.examId.startsWith("generalprobe-")
              ? parsed.examId.replace("generalprobe-", "mock-full-medat-h-")
              : parsed.examId;
          return normId;
        }
      }
    } catch (e) {}
    return null;
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Sync / reload history from localStorage and optionally Supabase
  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      // 1. Read LocalStorage
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      let localRecords: MockAttemptRecord[] = [];
      if (raw) {
        localRecords = sanitizeMockHistory(JSON.parse(raw));
      }

      // 2. Read Active in-progress simulation
      const savedActive = localStorage.getItem(STORAGE_KEY_ACTIVE);
      if (savedActive) {
        try {
          const parsed = JSON.parse(savedActive);
          if (parsed && parsed.stage !== "RESULTS" && parsed.examId) {
            const normId =
              typeof parsed.examId === "string" && parsed.examId.startsWith("generalprobe-")
                ? parsed.examId.replace("generalprobe-", "mock-full-medat-h-")
                : parsed.examId;
            setActiveSessionExamId(normId);
          } else {
            setActiveSessionExamId(null);
          }
        } catch (e) {
          setActiveSessionExamId(null);
        }
      } else {
        setActiveSessionExamId(null);
      }

      // 3. Supabase Integration (if user is authenticated)
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const supaMocks = await fetchMockResultsFromSupabase();
          if (Array.isArray(supaMocks)) {
            localRecords = supaMocks;
            localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(localRecords));
          }
        }
      } catch (err) {
        // Fallback gracefully to local persistence for offline/anonymous users
      }

      setHistory(localRecords);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();

    // Listen for storage events (e.g. cross-tab or test completion)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY_HISTORY || e.key === STORAGE_KEY_ACTIVE) {
        loadData();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    // Custom in-app event for immediate refetch after completion
    const handleMockCompleted = () => {
      loadData();
    };
    window.addEventListener("mprep:mock_completed", handleMockCompleted);

    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        setHistory([]);
        try {
          localStorage.removeItem(STORAGE_KEY_HISTORY);
          localStorage.removeItem(STORAGE_KEY_ACTIVE);
        } catch (e) {}
      } else if (event === "SIGNED_IN") {
        loadData();
      }
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("mprep:mock_completed", handleMockCompleted);
      authListener?.subscription.unsubscribe();
    };
  }, [loadData]);

  const clearActiveSession = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY_ACTIVE);
      setActiveSessionExamId(null);
    } catch (e) {}
  }, []);

  const saveMockAttempt = useCallback((record: MockAttemptRecord) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      let localRecords: MockAttemptRecord[] = [];
      if (raw) {
        localRecords = sanitizeMockHistory(JSON.parse(raw));
      }
      localRecords = [record, ...localRecords.filter((r) => r.id !== record.id)];
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(localRecords));
      setHistory(localRecords);

      window.dispatchEvent(new Event("mprep:mock_completed"));

      // Asynchronously sync to Supabase
      saveMockResultToSupabase(record).catch((err) => {
        console.warn("Async Supabase mock save failed:", err);
      });
    } catch (e) {
      console.error("Failed to save mock attempt:", e);
    }
  }, []);

  // Compute all metrics deterministically
  const stats = useMemo(() => {
    return calculateMockExamCenterStats(history, activeSessionExamId);
  }, [history, activeSessionExamId]);

  return {
    stats,
    history,
    isLoading,
    clearActiveSession,
    saveMockAttempt,
    refresh: loadData,
  };
}
