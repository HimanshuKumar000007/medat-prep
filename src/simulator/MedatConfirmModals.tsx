import React, { useState } from "react";
import { MathText } from "../components/MathText";

/* =================================================================
   SUBMIT CONFIRMATION MODAL
   ================================================================= */
interface SubmitModalProps {
  isOpen: boolean;
  totalCount: number;
  answeredCount: number;
  markedCount: number;
  onCancel: () => void;
  onConfirm: () => void;
}

export function MedatSubmitModal({
  isOpen,
  totalCount,
  answeredCount,
  markedCount,
  onCancel,
  onConfirm,
}: SubmitModalProps) {
  if (!isOpen) return null;

  const unansweredCount = Math.max(0, totalCount - answeredCount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fade-in">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl space-y-5 animate-pop-in">
        <div className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 text-xl border border-slate-200/80">
            📋
          </span>
          <div>
            <h3 className="text-[18px] font-black text-slate-900">
              Prüfungssitzung abgeben?
            </h3>
            <p className="text-[12.5px] text-slate-500">
              Deine Antworten werden verbindlich ausgewertet.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2.5 text-[13px]">
          <div className="flex justify-between text-slate-700">
            <span>Beantwortete Fragen:</span>
            <span className="font-bold text-slate-900">{answeredCount} von {totalCount}</span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span>Zur Überprüfung vorgemerkt:</span>
            <span className="font-bold text-amber-600">{markedCount}</span>
          </div>
          <div className="flex justify-between text-slate-700 pt-2 border-t border-slate-200">
            <span>Noch unbeantwortet:</span>
            <span className={`font-bold ${unansweredCount > 0 ? "text-red-600" : "text-slate-900"}`}>
              {unansweredCount}
            </span>
          </div>
        </div>

        {unansweredCount > 0 && (
          <div className="text-[12.5px] text-amber-900 bg-amber-50 border border-amber-200/80 rounded-2xl p-3.5 leading-relaxed">
            ⚠️ Du hast noch <strong>{unansweredCount} unbeantwortete Frage{unansweredCount > 1 ? "n" : ""}</strong>.
            Möchtest du die Prüfung trotzdem jetzt final abgeben?
          </div>
        )}

        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={onCancel}
            className="w-1/2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 py-3 text-[13.5px] font-bold transition-colors"
          >
            Weiter bearbeiten
          </button>
          <button
            onClick={onConfirm}
            className="w-1/2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-3 text-[13.5px] font-black shadow-sm transition-colors"
          >
            Prüfung abgeben
          </button>
        </div>
      </div>
    </div>
  );
}

/* =================================================================
   PAUSE MODAL (SMARTPREP TRAINING OVERLAY)
   ================================================================= */
interface PauseModalProps {
  isOpen: boolean;
  answeredCount: number;
  totalCount: number;
  onResume: () => void;
  onExitAndSave: () => void;
}

export function MedatPauseModal({
  isOpen,
  answeredCount,
  totalCount,
  onResume,
  onExitAndSave,
}: PauseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-4 animate-fade-in">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl space-y-5 text-center animate-pop-in">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 text-2xl font-black">
          ⏸
        </span>
        <div>
          <h3 className="text-[20px] font-black text-slate-900">
            Prüfung pausiert
          </h3>
          <p className="text-[13px] text-slate-500 mt-1">
            Timer angehalten · Fragen verdeckt
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-[13px] text-slate-600 text-left space-y-2">
          <p>
            Du hast bisher <strong className="text-slate-900 font-bold">{answeredCount} von {totalCount}</strong> Fragen beantwortet.
          </p>
          <p className="text-[11.5px] text-slate-400">
            💡 Hinweis: Pause ist ein <strong>SmartPrep Trainings-Feature</strong> zur flexiblen Vorbereitung. Im offiziellen MedAT läuft die Testzeit ununterbrochen.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={onResume}
            className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-3 text-[14px] font-black transition-colors shadow-sm"
          >
            Prüfung fortsetzen (Resume)
          </button>
          <button
            onClick={onExitAndSave}
            className="w-full rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 py-3 text-[13.5px] font-bold transition-colors"
          >
            Speichern & Beenden
          </button>
        </div>
      </div>
    </div>
  );
}

/* =================================================================
   SHORTCUTS MODAL
   ================================================================= */
interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MedatShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
  if (!isOpen) return null;

  const shortcuts = [
    { keys: ["1", "2", "3", "4", "5"], action: "Option A, B, C, D, E wählen" },
    { keys: ["A", "B", "C", "D", "E"], action: "Buchstabenauswahl" },
    { keys: ["←", "→"], action: "Vorherige bzw. nächste Frage" },
    { keys: ["M"], action: "Frage vormerken (Bookmark)" },
    { keys: ["Enter"], action: "Nächste Frage / Abgabe-Dialog" },
    { keys: ["?"], action: "Tastaturkürzel einblenden" },
    { keys: ["Esc"], action: "Dialoge / Tools schließen" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fade-in">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-2xl space-y-5 animate-pop-in">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">⌨</span>
            <h3 className="text-[17px] font-black text-slate-900">Tastatur-Navigation</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 p-1.5 text-slate-500 hover:bg-slate-200"
          >
            ✕
          </button>
        </div>

        <div className="space-y-2.5">
          {shortcuts.map((sc, i) => (
            <div key={i} className="flex items-center justify-between text-[13px]">
              <span className="text-slate-600 font-medium">{sc.action}</span>
              <div className="flex gap-1">
                {sc.keys.map((k) => (
                  <kbd
                    key={k}
                    className="min-w-[24px] rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-center font-mono text-[11.5px] font-bold text-slate-800 shadow-2xs"
                  >
                    {k}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full rounded-xl bg-slate-900 text-white py-3 text-[13.5px] font-bold shadow-sm"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}

/**
 * Official MedAT Compliance:
 * Neither a periodic table (PSE) nor a formula sheet is permitted in the Austrian MedAT exam.
 * These tools have been removed from the simulator to maintain 100% authentic exam conditions.
 */
export function MedatPeriodicTableModal(_props: { isOpen?: boolean; onClose?: () => void }) {
  return null;
}

export function MedatFormulaSheetModal(_props: { isOpen?: boolean; onClose?: () => void }) {
  return null;
}

/* =================================================================
   ACADEMIC TOOL: FLOATING SCRATCHPAD / NOTIZBLOCK
   ================================================================= */
interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskTitle?: string;
  ruleNotice?: string;
}

export function MedatScratchpadModal({ isOpen, onClose, taskTitle, ruleNotice }: ScratchpadModalProps) {
  const [notes, setNotes] = useState<string>(() => {
    try {
      return localStorage.getItem("medat_scratchpad_notes") || "";
    } catch (e) {
      return "";
    }
  });

  const handleNotesChange = (val: string) => {
    setNotes(val);
    try {
      localStorage.setItem("medat_scratchpad_notes", val);
    } catch (e) {}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 rounded-3xl border border-slate-300 bg-white p-5 shadow-2xl space-y-3 animate-fade-up">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
        <span className="text-[13.5px] font-extrabold text-slate-900 flex items-center gap-2">
          <span>📝</span>
          <span>Notizblock & Schmierzettel</span>
        </span>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1 cursor-pointer"
        >
          ✕
        </button>
      </div>

      {ruleNotice && (
        <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-2.5 text-[11px] font-medium text-amber-900 leading-snug">
          {ruleNotice}
        </div>
      )}

      <p className="text-[11.5px] text-slate-500">
        Berechnungen, Zwischenergebnisse oder Zahlenfolgen {taskTitle ? `für ${taskTitle}` : ""}:
      </p>
      <textarea
        value={notes}
        onChange={(e) => handleNotesChange(e.target.value)}
        placeholder="Hier Nebenrechnungen oder Merkhilfen skizzieren..."
        className="h-48 w-full rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 text-[13px] text-slate-900 focus:border-slate-400 focus:outline-hidden resize-none font-mono"
      />
    </div>
  );
}
