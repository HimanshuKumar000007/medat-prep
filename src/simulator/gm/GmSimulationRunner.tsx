import React, { useState, useEffect, useCallback } from "react";
import type { GmSimulationData } from "../../data/questions/gm/types";
import { GmPreStartScreen } from "./GmPreStartScreen";
import { GmMerkphaseWorkspace } from "./GmMerkphaseWorkspace";
import { GmTransitionScreen } from "./GmTransitionScreen";
import { GmRecallWorkspace } from "./GmRecallWorkspace";

export type GmStage = "prestart" | "merkphase" | "transition" | "recall";

export interface GmSimulationRunnerProps {
  simulationData: GmSimulationData;
  isTimed?: boolean;
  initialAnswers?: Record<string, number>;
  onComplete: (results: {
    answers: Record<string, number>;
    elapsedSeconds: number;
    merkphaseElapsedSeconds?: number;
  }) => void;
  onAbort?: () => void;
}

export const GmSimulationRunner: React.FC<GmSimulationRunnerProps> = ({
  simulationData,
  isTimed = true,
  initialAnswers = {},
  onComplete,
  onAbort,
}) => {
  const sessionStorageKey = `medat_gm_session_${simulationData.simulationId}`;

  // Restore saved stage if user refreshes during transition or recall (prevents card re-exposure)
  const [stage, setStage] = useState<GmStage>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(`medat_gm_session_${simulationData.simulationId}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.stage === "recall" || parsed.stage === "transition" || parsed.stage === "merkphase") {
            return parsed.stage;
          }
        }
      } catch (e) {
        // fallback
      }
    }
    return "prestart";
  });

  const [merkphaseSeconds, setMerkphaseSeconds] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(
    typeof document !== "undefined" && Boolean(document.fullscreenElement)
  );

  // Sync active stage to localStorage to preserve memory concealment on refresh
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (stage === "prestart") {
        localStorage.removeItem(sessionStorageKey);
      } else {
        localStorage.setItem(
          sessionStorageKey,
          JSON.stringify({
            stage,
            simId: simulationData.simulationId,
            timestamp: Date.now(),
          })
        );
      }
    } catch (e) {
      // ignore
    }
  }, [stage, sessionStorageKey, simulationData.simulationId]);

  // Keep fullscreen state in sync with browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Attempt auto-fullscreen on simulation mount
  useEffect(() => {
    if (typeof document !== "undefined" && !document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (typeof document === "undefined") return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const handleAbort = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(sessionStorageKey);
      } catch (e) {}
    }
    if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    onAbort?.();
  }, [onAbort, sessionStorageKey]);

  const handleStartMerkphase = useCallback(() => {
    if (typeof document !== "undefined" && !document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    setStage("merkphase");
  }, []);

  const handleFinishMerkphase = useCallback((seconds?: number) => {
    setMerkphaseSeconds(seconds !== undefined ? seconds : 8 * 60);
    setStage("transition");
  }, []);

  const handleStartRecall = useCallback(() => {
    if (typeof document !== "undefined" && !document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    setStage("recall");
  }, []);

  const handleFinishRecall = useCallback((
    answers: Record<string, number>,
    recallElapsedSeconds: number
  ) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(sessionStorageKey);
      } catch (e) {}
    }
    if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    onComplete({
      answers,
      elapsedSeconds: recallElapsedSeconds,
      merkphaseElapsedSeconds: merkphaseSeconds,
    });
  }, [onComplete, merkphaseSeconds, sessionStorageKey]);

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-[#0F172A] text-slate-100 flex flex-col font-sans select-none">
      {stage === "prestart" && (
        <GmPreStartScreen
          simulationNumber={simulationData.simNumber}
          simTitle={simulationData.title}
          isTimed={isTimed}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onStartMerkphase={handleStartMerkphase}
          onAbort={handleAbort}
        />
      )}

      {stage === "merkphase" && (
        <GmMerkphaseWorkspace
          cards={simulationData.cards}
          simTitle={simulationData.title}
          isTimed={isTimed}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onFinishMerkphase={handleFinishMerkphase}
          onAbort={handleAbort}
        />
      )}

      {stage === "transition" && (
        <GmTransitionScreen
          simTitle={simulationData.title}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onStartRecall={handleStartRecall}
          onAbort={handleAbort}
        />
      )}

      {stage === "recall" && (
        <GmRecallWorkspace
          questions={simulationData.questions}
          simTitle={simulationData.title}
          isTimed={isTimed}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          initialAnswers={initialAnswers}
          onFinishRecall={handleFinishRecall}
          onAbort={handleAbort}
        />
      )}
    </div>
  );
};
