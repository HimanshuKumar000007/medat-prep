/**
 * src/orchestrator/types.ts
 *
 * Domain types, command definitions, read models, and sync state definitions
 * for the MedAT Data Orchestration Layer.
 */

import type {
  UserProfile,
  AttemptRecord,
  SetAttempt,
  SetWithStatus,
  ChapterStats,
  SubjectStats,
  SectionStats,
  LearningUnit,
  LearningPhase,
} from "../dashboard/practiceContext";
import type {
  NormalizedQuestion,
  Chapter,
  PracticeSection,
  SubjectGroup,
} from "../dashboard/practiceData";
import type {
  ExamType,
  SectionCode,
  TargetUniversity,
  PreparationStage,
  DailyStudyTime,
} from "../content/medat/config";
import type {
  PersistedDailyMission,
  EvaluatedDailyMission,
  WeeklyMissionConsistency,
} from "../dashboard/dailyMissionEngine";
import type { MockAttemptRecord } from "../data/generalprobe/useMockExamData";

// ----------------------------------------------------
// 1. Sync State Types
// ----------------------------------------------------
export type SyncStatus = "INITIALIZING" | "SYNCED" | "SAVING" | "PENDING_SYNC" | "RETRYING" | "SYNC_ERROR";

export interface SyncState {
  status: SyncStatus;
  lastSyncedAt: number | null;
  lastError: string | null;
  pendingQueueCount: number;
}

// ----------------------------------------------------
// 2. Domain Commands (Single Entry Mutations)
// ----------------------------------------------------
export type DomainCommand =
  | {
      type: "ANSWER_QUESTION";
      questionId: string;
      selected: number;
      timeSpentSeconds?: number;
      idempotencyKey?: string;
    }
  | {
      type: "RECORD_BATCH_ANSWERS";
      batch: { questionId: string; selected: number; timeSpentSeconds?: number }[];
    }
  | {
      type: "SUBMIT_SET";
      setId: string;
      chapterId: string;
      correctCount: number;
      totalQuestions: number;
      timeSpentSeconds: number;
      idempotencyKey?: string;
    }
  | {
      type: "TOGGLE_BOOKMARK";
      questionId: string;
    }
  | {
      type: "UPDATE_PROFILE";
      profile: Partial<UserProfile>;
    }
  | {
      type: "CREATE_DAILY_MISSION";
      targetMinutes?: number;
    }
  | {
      type: "RESET_DAILY_MISSION";
    }
  | {
      type: "SUBMIT_MOCK";
      record: MockAttemptRecord;
    }
  | {
      type: "RECORD_ACTIVITY_DATE";
      dateStr?: string;
    }
  | {
      type: "HYDRATE_CLOUD_STATE";
    }
  | {
      type: "FLUSH_PENDING_QUEUE";
    }
  | {
      type: "RESET_PROGRESS";
      questionIds?: string[];
    };

// ----------------------------------------------------
// 3. Command Execution Result
// ----------------------------------------------------
export interface CommandResult<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  syncStatus: SyncStatus;
}

// ----------------------------------------------------
// 4. Canonical Read Models
// ----------------------------------------------------
export interface CanonicalReadiness {
  readinessIndex: number | null;
  hasEnoughData: boolean;
  confidence: "low" | "medium" | "high";
  label: string;
  breakdown: {
    bms: number | null;
    tv: number | null;
    kff: number | null;
    sek: number | null;
  };
  trend: number | null;
  trendText: string;
}

export interface CanonicalJourneyState {
  phases: LearningPhase[];
  activeUnit: (LearningUnit & { activeSet: SetWithStatus }) | null;
  totalChapters: number;
  completedChaptersCount: number;
  overallProgressPercent: number;
  currentPhaseIndex: number;
}

export interface CanonicalMissionState {
  evaluatedMission: EvaluatedDailyMission;
  weeklyConsistency: WeeklyMissionConsistency;
}

export interface OrchestratorState {
  userId: string | null;
  userProfile: UserProfile;
  answers: Record<string, number>;
  attemptHistory: Record<string, AttemptRecord>;
  setAttempts: Record<string, SetAttempt[]>;
  completedSetIds: Set<string>;
  bookmarks: Set<string>;
  wrong: Set<string>;
  seen: Set<string>;
  activityDates: string[];
  mockHistory: MockAttemptRecord[];
  syncState: SyncState;
  isHydrated: boolean;
  lastHydratedAt: number | null;
  todayMission: PersistedDailyMission | null;
}
