/**
 * src/dashboard/SyncDiagnosticWidget.tsx
 *
 * Section 21 Diagnostic Widget:
 * Real-time diagnostic output for verifying cross-device and cross-session data consistency.
 *
 * Displays:
 * 1. Authenticated Supabase User UUID
 * 2. Profile row found in Supabase (true/false)
 * 3. Profile last updated timestamp
 * 4. Cloud hydration status (idle / hydrating / hydrated / error)
 * 5. Business date used for Today's Mission (Europe/Vienna)
 * 6. Cloud mission record ID
 * 7. Local mission cache key
 * 8. Source of displayed mission (cloud record / local cache / fresh generation)
 * 9. Pending sync queue count
 * 10. Last successful write timestamp
 * 11. Computed Journey position (phase, step, active unit)
 */

import React, { useState, useEffect } from "react";
import { dataOrchestrator } from "../orchestrator";
import { usePractice } from "./practiceContext";
import { getTodayViennaString } from "../lib/dateService";
import { getDailyMissionStorageKey, findLatestSavedMission } from "./dailyMissionEngine";
import { getPendingSyncCount } from "../lib/dbSync";

export const SyncDiagnosticWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orchState, setOrchState] = useState(() => dataOrchestrator.getState());
  const { userProfile, getActiveLearningUnit } = usePractice();

  useEffect(() => {
    return dataOrchestrator.subscribe((state) => {
      setOrchState(state);
    });
  }, []);

  const businessDate = getTodayViennaString();
  const localCacheKey = getDailyMissionStorageKey(userProfile, businessDate);
  const pendingCount = getPendingSyncCount(orchState.userId);

  // Determine displayed mission source
  const savedMissionInfo = findLatestSavedMission(userProfile, businessDate);
  const todayMission = dataOrchestrator.getTodayMission();
  let missionSource = "fresh generation";
  let cloudMissionId = todayMission?.id || "None";

  if (todayMission) {
    missionSource = "cloud record";
  } else if (savedMissionInfo?.mission) {
    missionSource = savedMissionInfo.isFromEarlierDay ? "rolled-over local cache" : "local cache";
  }

  // Active Journey position
  let journeyPos = "N/A";
  try {
    const activeUnit = getActiveLearningUnit();
    if (activeUnit) {
      journeyPos = `${activeUnit.phaseId} · ${activeUnit.stepTitle} · ${activeUnit.title}`;
    }
  } catch {}

  // Check URL query param ?debug=sync or environment
  const isDebugParam = typeof window !== "undefined" && window.location.search.includes("debug=sync");
  const isDev = process.env.NODE_ENV !== "production" || isDebugParam;

  if (!isDev && !isDebugParam) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono text-[11px]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-slate-900/90 text-emerald-400 border border-slate-700 px-3 py-1.5 shadow-xl backdrop-blur-md hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-2"
          title="MedAT Sync Diagnostics"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Sync Status: {orchState.isHydrated ? "HYDRATED" : "HYDRATING"}</span>
        </button>
      ) : (
        <div className="w-96 rounded-2xl bg-slate-950/95 text-slate-200 border border-slate-800 p-4 shadow-2xl backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="font-bold text-white text-[12px]">MedAT Cloud Sync Diagnostics</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1.5 text-[11px] leading-tight">
            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">AUTHENTICATED USER UUID:</span>
              <span className="text-slate-200 truncate max-w-[180px]" title={orchState.userId || "None"}>
                {orchState.userId || "Not signed in"}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">PROFILE ROW FOUND:</span>
              <span className={orchState.userProfile?.name ? "text-emerald-400" : "text-amber-400"}>
                {orchState.userProfile?.name ? "true" : "false"}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">PROFILE LAST UPDATED:</span>
              <span className="text-slate-300">
                {orchState.lastHydratedAt ? new Date(orchState.lastHydratedAt).toLocaleTimeString("de-AT") : "N/A"}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">CLOUD HYDRATION STATUS:</span>
              <span className={orchState.isHydrated ? "text-emerald-400 font-bold" : "text-amber-400 animate-pulse"}>
                {orchState.isHydrated ? "HYDRATED" : "HYDRATING"}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">MISSION BUSINESS DATE:</span>
              <span className="text-indigo-300 font-semibold">{businessDate}</span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">CLOUD MISSION ID:</span>
              <span className="text-slate-300 truncate max-w-[170px]" title={cloudMissionId}>
                {cloudMissionId}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">CLOUD MISSION FOUND:</span>
              <span className={todayMission ? "text-emerald-400" : "text-slate-400"}>
                {todayMission ? "true" : "false"}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">LOCAL MISSION ID:</span>
              <span className="text-slate-300 truncate max-w-[170px]" title={savedMissionInfo?.mission?.id || "None"}>
                {savedMissionInfo?.mission?.id || "None"}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">MISSION SOURCE:</span>
              <span className="text-emerald-300 font-semibold">{missionSource}</span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">PENDING SYNC COUNT:</span>
              <span className={pendingCount === 0 ? "text-emerald-400" : "text-amber-400 font-bold"}>
                {pendingCount}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">LAST SUCCESSFUL CLOUD WRITE:</span>
              <span className="text-slate-300">
                {orchState.syncState.lastSyncedAt
                  ? new Date(orchState.syncState.lastSyncedAt).toLocaleTimeString("de-AT")
                  : "None"}
              </span>
            </div>

            <div className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-slate-400">LAST HYDRATION TIME:</span>
              <span className="text-slate-300">
                {orchState.lastHydratedAt ? new Date(orchState.lastHydratedAt).toLocaleTimeString("de-AT") : "None"}
              </span>
            </div>

            <div className="flex flex-col py-0.5 pt-1">
              <span className="text-slate-400">CURRENT JOURNEY POSITION:</span>
              <span className="text-rose-300 truncate font-semibold mt-0.5" title={journeyPos}>
                {journeyPos}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px]">
            <span className="text-slate-500">Auto-refreshing live state</span>
            <button
              onClick={() => dataOrchestrator.hydrateFromSupabase()}
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              Force Re-sync ↻
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
