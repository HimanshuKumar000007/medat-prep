/**
 * src/orchestrator/sync/syncStateMachine.ts
 *
 * Single Source of Truth for Synchronization Lifecycle States:
 * SYNCED -> SAVING -> PENDING_SYNC -> RETRYING -> SYNC_ERROR
 */

import type { SyncState, SyncStatus } from "../types";
import { getPendingSyncCount } from "../../lib/dbSync";

export class SyncStateMachine {
  private state: SyncState = {
    status: "INITIALIZING",
    lastSyncedAt: null,
    lastError: null,
    pendingQueueCount: 0,
  };

  private listeners: Set<(state: SyncState) => void> = new Set();

  constructor() {
    const initialCount = this.calculatePendingCount();
    this.state.pendingQueueCount = initialCount;
    if (initialCount > 0) {
      this.state.status = "PENDING_SYNC";
    }
  }

  public getState(): SyncState {
    return { ...this.state };
  }

  public getStatus(): SyncStatus {
    return this.state.status;
  }

  public setSaving(): void {
    this.updateState({
      status: "SAVING",
      lastError: null,
    });
  }

  public setSynced(): void {
    const pending = this.calculatePendingCount();
    if (pending > 0) {
      this.updateState({
        status: "PENDING_SYNC",
        lastSyncedAt: Date.now(),
        lastError: null,
        pendingQueueCount: pending,
      });
    } else {
      this.updateState({
        status: "SYNCED",
        lastSyncedAt: Date.now(),
        lastError: null,
        pendingQueueCount: 0,
      });
    }
  }

  public setPendingSync(error?: string): void {
    this.updateState({
      status: "PENDING_SYNC",
      lastError: error ?? this.state.lastError,
      pendingQueueCount: this.calculatePendingCount(),
    });
  }

  public setRetrying(): void {
    this.updateState({
      status: "RETRYING",
      lastError: null,
    });
  }

  public setSyncError(error: string): void {
    this.updateState({
      status: "SYNC_ERROR",
      lastError: error,
      pendingQueueCount: this.calculatePendingCount(),
    });
  }

  public refreshPendingCount(): number {
    const count = this.calculatePendingCount();
    if (count !== this.state.pendingQueueCount) {
      this.updateState({ pendingQueueCount: count });
    }
    return count;
  }

  public subscribe(listener: (state: SyncState) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private calculatePendingCount(): number {
    try {
      return getPendingSyncCount();
    } catch {
      return 0;
    }
  }

  private updateState(partial: Partial<SyncState>): void {
    this.state = {
      ...this.state,
      ...partial,
    };
    this.notify();
  }

  private notify(): void {
    const snapshot = this.getState();
    this.listeners.forEach((listener) => {
      try {
        listener(snapshot);
      } catch (err) {
        console.error("[SyncStateMachine] Error in listener:", err);
      }
    });
  }
}

export const syncStateMachine = new SyncStateMachine();
