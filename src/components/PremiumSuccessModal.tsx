/**
 * src/components/PremiumSuccessModal.tsx
 *
 * Celebratory Premium Success Modal in authentic Austrian German.
 * Displays when a user upgrades to MedAT Prep Vollzugang / Premium.
 *
 * Requirements:
 * - Authentic Austrian phrasing ("Servus", "Leiwand", Austrian Uni references)
 * - Auto-dismisses after 5 seconds with a smooth visual progress bar & countdown
 * - Includes a prominent "X" close button and an instant "Jetzt durchstarten" CTA
 * - Global event dispatch (`triggerPremiumSuccessModal()`) so any checkout triggers it
 */

import React, { useEffect, useState, useRef } from "react";
import { IconCheck, IconStar } from "../lib/icons";

export function triggerPremiumSuccessModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("medat:premium_success"));
  }
}

export interface PremiumSuccessModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const PremiumSuccessModal: React.FC<PremiumSuccessModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [progressWidth, setProgressWidth] = useState(100);

  const isVisible = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
  };

  // Listen to global trigger event
  useEffect(() => {
    const onTrigger = () => {
      setSecondsLeft(5);
      setProgressWidth(100);
      setInternalOpen(true);
    };

    window.addEventListener("medat:premium_success", onTrigger);
    return () => window.removeEventListener("medat:premium_success", onTrigger);
  }, []);

  // 5-second countdown & progress bar when visible
  useEffect(() => {
    if (!isVisible) return;

    setSecondsLeft(5);
    setProgressWidth(100);

    const startTime = Date.now();
    const duration = 5000; // 5 seconds

    const animFrame = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, duration - elapsed);
      const remainingSec = Math.ceil(remaining / 1000);
      
      setSecondsLeft(remainingSec);
      setProgressWidth((remaining / duration) * 100);

      if (remaining <= 0) {
        clearInterval(animFrame);
        handleClose();
      }
    }, 50);

    return () => clearInterval(animFrame);
  }, [isVisible]);

  // Handle Escape key
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="premium-success-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-emerald-200/80 z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        {/* Top 5-second countdown progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-primary transition-all duration-75 ease-linear"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        {/* Close Button 'X' */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute right-4 top-4 p-2.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer group"
          aria-label="Popup schließen"
          title="Schließen"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Austrian Flag + Medical Precision Header */}
        <div className="flex flex-col items-center text-center">
          {/* Animated Celebration Icon Badge */}
          <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 border border-emerald-200 shadow-md">
            <span className="text-3xl animate-bounce">🎉</span>
            <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-[11px] font-bold shadow-xs border border-white">
              🇦🇹
            </span>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-center mb-1.5">
            <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200/80 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
              <IconStar className="h-3 w-3 fill-emerald-600 text-emerald-600" />
              Vollzugang Aktiv
            </span>
            <span className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-[11px] font-bold">
              MedUni Wien · Graz · Innsbruck · Linz
            </span>
          </div>

          {/* Title in Austrian German */}
          <h2
            id="premium-success-title"
            className="text-[23px] sm:text-[26px] font-black text-slate-900 tracking-tight leading-snug mt-1"
          >
            Servus! Willkommen beim Premium-Vollzugang!
          </h2>

          <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600 max-w-md">
            Leiwand, dass du dabei bist! Deine Zahlung war erfolgreich. Ab sofort stehen dir sämtliche Inhalte uneingeschränkt zur Verfügung:
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 p-4 sm:p-5 space-y-2.5">
          <div className="flex items-start gap-2.5 text-[13.5px] text-slate-800 font-semibold">
            <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <IconCheck className="h-3 w-3" />
            </span>
            <span>Alle 35 BMS-Kapitel (Bio, Chemie, Physik, Mathe) freigeschaltet</span>
          </div>

          <div className="flex items-start gap-2.5 text-[13.5px] text-slate-800 font-semibold">
            <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <IconCheck className="h-3 w-3" />
            </span>
            <span>Unbegrenzte KFF-, TV- & SEK-Prüfungssimulationen</span>
          </div>

          <div className="flex items-start gap-2.5 text-[13.5px] text-slate-800 font-semibold">
            <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <IconCheck className="h-3 w-3" />
            </span>
            <span>Adaptiver Lernplan mit gezielter Schwachstellen-Analyse</span>
          </div>

          <div className="flex items-start gap-2.5 text-[13.5px] text-slate-800 font-semibold">
            <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <IconCheck className="h-3 w-3" />
            </span>
            <span>Vollwertige Testtag-Generalprobe unter Echtzeitbedingungen</span>
          </div>
        </div>

        {/* Action Button & Auto-close timer indicator */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleClose}
            type="button"
            className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-[15px] shadow-lg shadow-emerald-600/25 transition-all active:scale-[0.98] cursor-pointer text-center"
          >
            Jetzt durchstarten →
          </button>
        </div>

        {/* Auto-Dismiss Notice with live seconds countdown */}
        <div className="mt-3.5 flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <svg className="h-3.5 w-3.5 animate-spin text-slate-400" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          <span>Schließt automatisch in <strong className="text-slate-600 font-bold">{secondsLeft}s</strong> (oder auf ✕ klicken)</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumSuccessModal;
