import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IconArrowRight, IconClose, IconCheck } from "../../lib/icons";

export interface FullMockPreTestChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

interface ChecklistItemConfig {
  key: string;
  title: string;
  badge?: string;
  badgeType?: "red" | "neutral";
  subtitle: string;
}

const CHECKLIST_ITEMS: ChecklistItemConfig[] = [
  {
    key: "tasks",
    title: "221 Aufgaben insgesamt",
    badge: "Full Test",
    badgeType: "red",
    subtitle: "BMS (94) + TV (12) + KFF (75) + SEK (40). Keine Testverkürzung oder Teilmengen.",
  },
  {
    key: "bms",
    title: "BMS — 75 Min",
    badge: "40% Gewichtung",
    badgeType: "red",
    subtitle: "Biologie (40 Aufgaben / 30 Min), Chemie (24 / 18 Min), Physik (18 / 16 Min), Mathematik (12 / 11 Min).",
  },
  {
    key: "tv",
    title: "TV — 35 Min",
    badge: "10% Gewichtung",
    badgeType: "red",
    subtitle: "12 Aufgaben zu wissenschaftlich-medizinischen Lesetexten im Split-Screen.",
  },
  {
    key: "pause",
    title: "60 Min Pause",
    badge: "Mittagspause",
    badgeType: "neutral",
    subtitle: "Geplante Pause zwischen TV und KFF. Im Übungsmodus auf Wunsch verkürzbar.",
  },
  {
    key: "kff",
    title: "KFF — 88 Min (75 Aufgaben)",
    badge: "40% Gewichtung",
    badgeType: "red",
    subtitle: "Exakte Reihenfolge: FZ (20 Min) → GM Merken (8 Min) → ZF (15 Min) → WF (20 Min) → GM Abfrage (15 Min) → IE (10 Min).",
  },
  {
    key: "gm",
    title: "GM Allergiepässe verborgen",
    badge: "Gedächtnis",
    badgeType: "neutral",
    subtitle: "Die 8 eingeprägten Allergieausweise sind während ZF und WF unsichtbar und werden in der Abfragephase exakt wieder aufgerufen.",
  },
  {
    key: "sek",
    title: "SEK — 60 Min (40 Aufgaben)",
    badge: "10% Gewichtung",
    badgeType: "red",
    subtitle: "Emotionen regulieren (12 / 18 Min) → Emotionen erkennen (14 / 21 Min) → Soziales Entscheiden (14 / 21 Min).",
  },
  {
    key: "feedback",
    title: "Strenger Prüfungsmodus",
    badge: "Keine Zwischenlösung",
    badgeType: "neutral",
    subtitle: "Lösungsanzeigen, Erklärungen und Teilergebnisse sind während des Tests deaktiviert.",
  },
  {
    key: "results",
    title: "Offizielle 4-Faktor-Auswertung",
    badge: "Score Modus",
    badgeType: "red",
    subtitle: "Gesamtergebnis = (BMS × 0,40) + (TV × 0,10) + (KFF × 0,40) + (SEK × 0,10). Keine fiktiven Rangplätze.",
  },
];

export const FullMockPreTestChecklistModal: React.FC<FullMockPreTestChecklistModalProps> = ({
  isOpen,
  onClose,
  onStart,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    tasks: true,
    bms: true,
    tv: true,
    pause: true,
    kff: true,
    gm: true,
    sek: true,
    feedback: true,
    results: true,
  });

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const allChecked = checkedCount === totalCount;

  const selectAll = () => {
    setCheckedItems({
      tasks: true,
      bms: true,
      tv: true,
      pause: true,
      kff: true,
      gm: true,
      sek: true,
      feedback: true,
      results: true,
    });
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="MedAT-H Generalprobe Testtag-Checkliste"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/65 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl shadow-slate-950/25 border border-slate-100 overflow-hidden flex flex-col max-h-[88vh] min-h-0 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Precision Red Accent Line */}
        <div className="h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 w-full shrink-0" />

        {/* Clean Minimal White Header */}
        <div className="p-5 sm:p-6 pb-4 bg-white border-b border-slate-100 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200/80 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                MedAT-H Testtag
              </span>
              <span className="text-[11.5px] font-semibold text-slate-400">
                Offizielle Prüfungsbedingungen
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <IconClose className="w-4 h-4" />
            </button>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2.5">
            GENERALPROBE — TESTTAG-CHECKLISTE
          </h2>
          <p className="text-slate-500 text-[13px] sm:text-[13.5px] mt-1 font-normal leading-relaxed">
            Vollständige Prüfungssimulation über alle 4 MedAT-H Testteile unter offiziellen Bedingungen.
          </p>

          {/* Minimal Status Strip */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[12px]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">{checkedCount} von {totalCount}</span>
              <span className="text-slate-400">Kriterien bestätigt</span>
            </div>
            {allChecked ? (
              <span className="inline-flex items-center gap-1 font-bold text-red-600 text-[11.5px]">
                <IconCheck className="w-3.5 h-3.5 stroke-[3]" />
                Bereit zum Teststart
              </span>
            ) : (
              <button
                type="button"
                onClick={selectAll}
                className="text-red-600 hover:text-red-700 font-bold text-[11.5px] underline cursor-pointer"
              >
                Alle bestätigen
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Checklist Body */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-2.5 bg-slate-50/30">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = !!checkedItems[item.key];
            return (
              <div
                key={item.key}
                onClick={() => toggleCheck(item.key)}
                className={`group flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all duration-150 cursor-pointer select-none ${
                  isChecked
                    ? "bg-white border-slate-200/90 shadow-2xs hover:border-red-300 hover:shadow-xs"
                    : "bg-white/60 border-dashed border-slate-200 opacity-60 hover:opacity-100"
                }`}
              >
                {/* Custom Minimal Red Checkbox */}
                <div
                  className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-all duration-150 ${
                    isChecked
                      ? "bg-red-600 text-white shadow-xs shadow-red-600/30 scale-100"
                      : "border-2 border-slate-300 bg-white group-hover:border-red-400"
                  }`}
                >
                  {isChecked && <IconCheck className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-slate-900 text-[13.5px] sm:text-[14px]">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                          item.badgeType === "red"
                            ? "bg-red-50 text-red-600 border border-red-200/70"
                            : "bg-slate-100 text-slate-600 border border-slate-200/60"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-[12px] sm:text-[12.5px] mt-0.5 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal White Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-white flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-[13px] font-bold transition-colors cursor-pointer"
          >
            Abbrechen
          </button>

          <button
            type="button"
            onClick={onStart}
            disabled={!allChecked}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13.5px] font-bold text-white transition-all ${
              allChecked
                ? "bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-75 shadow-none"
            }`}
          >
            <span>Generalprobe starten</span>
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modalContent, document.body);
};
