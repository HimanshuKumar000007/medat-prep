/**
 * src/components/BmsProUpgradeModal.tsx
 *
 * Dedicated MedAT Vollzugang Upgrade Modal for BMS chapter locking.
 * Phrased in authentic Austrian German matching what Austrian MedAT
 * candidates at MedUni Wien, Innsbruck, Graz & Linz expect.
 */

import React, { useEffect, useState } from "react";
import { track, toast } from "../lib/core";
import { openCheckout, PADDLE_CONFIG } from "../lib/paddle";
import { triggerPremiumSuccessModal } from "./PremiumSuccessModal";
import { usePractice } from "../dashboard/practiceContext";
import type { Screen } from "../dashboard/Shell";

export interface BmsProUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapter?: {
    id: string;
    title: string;
    subjectId?: string;
    section?: string;
  } | null;
  onNav?: (screen: Screen) => void;
}

export const BmsProUpgradeModal: React.FC<BmsProUpgradeModalProps> = ({
  isOpen,
  onClose,
  chapter,
  onNav,
}) => {
  const { userProfile, updateUserProfile } = usePractice();
  const [isOpeningCheckout, setIsOpeningCheckout] = useState(false);

  // Dispatch analytics view event when opened
  useEffect(() => {
    if (isOpen) {
      track("bms_pro_upgrade_viewed", {
        chapterId: chapter?.id || "unknown",
        subjectId: chapter?.subjectId || "bms",
      });
    }
  }, [isOpen, chapter]);

  // Handle escape key
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

  const isTv = chapter?.section === "TV" || chapter?.subjectId === "tv" || (chapter?.id ? chapter.id.startsWith("tv-") : false);
  const isKff = chapter?.section === "KFF" || (chapter?.subjectId ? chapter.subjectId.startsWith("kff-") : false) || (chapter?.id ? chapter.id.startsWith("kff-") : false);
  const isSek = chapter?.section === "SEK" || (chapter?.subjectId ? (chapter.subjectId.startsWith("sek-") || chapter.subjectId.startsWith("ee-") || chapter.subjectId.startsWith("er-") || chapter.subjectId.startsWith("se-")) : false) || (chapter?.id ? (chapter.id.startsWith("sek-") || chapter.id.startsWith("ee-") || chapter.id.startsWith("er-") || chapter.id.startsWith("se-")) : false);
  const isGeneralprobe =
    chapter?.section === "MOCK" ||
    chapter?.section === "GENERALPROBE" ||
    (chapter?.subjectId ? (chapter.subjectId === "generalprobe" || chapter.subjectId === "mock") : false) ||
    (chapter?.id ? (chapter.id.startsWith("mock-") || chapter.id.startsWith("qm-") || chapter.id.includes("generalprobe")) : false);

  const subjectNames: Record<string, string> = {
    bio: "Biologie",
    chem: "Chemie",
    phys: "Physik",
    math: "Mathematik",
    tv: "Textverständnis (TV)",
    "kff-fig": "Figuren zusammensetzen (FZ)",
    "kff-num": "Zahlenfolgen (ZF)",
    "kff-wf": "Wortflüssigkeit (WF)",
    "kff-mem": "Gedächtnis & Merkfähigkeit (GM)",
    "kff-imp": "Implikationen erkennen (IE)",
    "sek-emo-rec": "Emotionen erkennen (EE)",
    "sek-rec-face": "Emotionen erkennen (EE)",
    "sek-ee": "Emotionen erkennen (EE)",
    "sek-emo-reg": "Emotionen regulieren (ER)",
    "sek-reg-stress": "Emotionen regulieren (ER)",
    "sek-er": "Emotionen regulieren (ER)",
    "sek-soc-dec": "Soziales Entscheiden (SE)",
    "sek-dec-ethics": "Soziales Entscheiden (SE)",
    "sek-se": "Soziales Entscheiden (SE)",
  };

  const subjectTitle = isGeneralprobe
    ? "Generalprobe & Simulationen"
    : isTv
    ? "Textverständnis (TV)"
    : isKff
      ? (chapter?.subjectId && subjectNames[chapter.subjectId]) || "KFF · Kognitive Fähigkeiten"
      : isSek
        ? (chapter?.subjectId && subjectNames[chapter.subjectId]) || "SEK · Sozial-emotionale Kompetenzen"
        : chapter?.subjectId
          ? subjectNames[chapter.subjectId] || chapter.subjectId
          : "BMS";

  const handleCheckout = async () => {
    track("bms_pro_upgrade_clicked", {
      chapterId: chapter?.id || "unknown",
      subjectId: isGeneralprobe ? "generalprobe" : isTv ? "tv" : isKff ? "kff" : isSek ? "sek" : chapter?.subjectId || "bms",
      tier: "premium",
    });

    const priceId =
      PADDLE_CONFIG.monthlyPriceId ||
      PADDLE_CONFIG.oncePriceId ||
      "pri_01m4sv454dth7gc5fm52tvhht5";

    setIsOpeningCheckout(true);
    try {
      const opened = await openCheckout({
        priceId,
        userId: userProfile.userId,
        userEmail: userProfile.email,
        customData: {
          user_id: userProfile.userId || "",
          user_name: userProfile.name,
          source: isGeneralprobe
            ? "generalprobe_lock"
            : isTv
            ? "tv_simulation_lock"
            : isKff
            ? "kff_simulation_lock"
            : isSek
            ? "sek_simulation_lock"
            : "bms_chapter_lock",
          chapter_id: chapter?.id || "unknown",
          subject_id: isGeneralprobe ? "generalprobe" : isTv ? "tv" : isKff ? "kff" : isSek ? "sek" : chapter?.subjectId || "bms",
        },
        onSuccess: () => {
          updateUserProfile({ isPro: true, subscriptionTier: "premium", subscriptionStatus: "active" });
          triggerPremiumSuccessModal();
          toast("🎉 Willkommen beim MedAT-Vollzugang! Alle Kapitel wurden freigeschaltet.", "success");
          onClose();
        },
      });

      if (!opened) {
        // Fallback to dedicated PricingView
        if (onNav) {
          onClose();
          onNav("pricing");
        }
      } else {
        onClose();
      }
    } catch (err) {
      console.error("[BmsProUpgradeModal] Checkout error:", err);
      if (onNav) {
        onClose();
        onNav("pricing");
      }
    } finally {
      setIsOpeningCheckout(false);
    }
  };

  const handleViewPricing = () => {
    onClose();
    if (onNav) {
      onNav("pricing");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bms-upgrade-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Schließen"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header with Lock Icon & Badge */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-200/80 shadow-xs">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>

          <div className="min-w-0 flex-1 pr-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="rounded-full bg-red-100 text-red-700 border border-red-200 px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider">
                MedAT-Vollzugang
              </span>
              <span className="rounded-full bg-slate-100 text-slate-600 px-2 py-0.5 text-[10.5px] font-bold">
                {subjectTitle}
              </span>
            </div>
            <h2
              id="bms-upgrade-title"
              className="mt-1.5 text-[21px] sm:text-[23px] font-black text-slate-900 tracking-tight leading-snug"
            >
              {isGeneralprobe
                ? "Generalprobe im Vollzugang freischalten"
                : isTv
                ? "TV-Simulation im Vollzugang freischalten"
                : isKff
                  ? "KFF-Simulation im Vollzugang freischalten"
                  : isSek
                    ? "SEK-Simulation im Vollzugang freischalten"
                    : "Kapitel im Vollzugang freischalten"}
            </h2>
          </div>
        </div>

        {/* Locked Context Notice */}
        {chapter && (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 flex items-center justify-between gap-3 text-[13px]">
            <div className="min-w-0">
              <p className="font-semibold text-slate-700 truncate">{chapter.title}</p>
              <p className="text-[11.5px] text-slate-500">
                {isGeneralprobe
                  ? "Diese vollständige Prüfungssimulation (Echttest unter offiziellen Testzeitbedingungen) gehört zum MedAT-Vollzugang."
                  : isTv
                  ? "Diese TV-Prüfungssimulation gehört zum vollständigen Vorbereitungspaket."
                  : isKff
                    ? "Diese KFF-Prüfungssimulation gehört zum vollständigen Vorbereitungspaket."
                    : isSek
                      ? "Diese SEK-Prüfungssimulation gehört zum vollständigen Vorbereitungspaket."
                      : "Dieses BMS-Kapitel gehört zum vollständigen Vorbereitungspaket."}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-lg">
              🔒 Vollzugang
            </span>
          </div>
        )}

        {/* Free vs Vollzugang Explanation */}
        <div className="mt-5 space-y-4">
          <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
            {isGeneralprobe ? (
              <>
                In der kostenlosen Basis-Version ist die <strong>MedAT-H Generalprobe #1 frei zugänglich</strong> (vollständige 221 Original-Aufgaben in 4 Std. 18 Min.).
              </>
            ) : isTv ? (
              <>
                In der kostenlosen Basis-Version ist <strong>Simulation 1 frei zugänglich</strong> (12 Fragen über 4–5 Fachtexte in 35 Minuten).
              </>
            ) : isKff ? (
              <>
                In der kostenlosen Basis-Version ist jeweils <strong>Simulation 1 jedes KFF-Untertests frei zugänglich</strong> (FZ, ZF, WF, GM & IE).
              </>
            ) : isSek ? (
              <>
                In der kostenlosen Basis-Version ist jeweils <strong>Simulation 1 jedes SEK-Untertests frei zugänglich</strong> (EE, ER & SE).
              </>
            ) : (
              <>
                In der kostenlosen Basis-Version ist jeweils <strong>1 Kapitel pro Fach frei zugänglich</strong> (Zelle, Atombau, Größen & Einheiten, Zehnerpotenzen).
              </>
            )}
          </p>

          <div className="rounded-2xl border border-red-100 bg-red-50/40 p-4 space-y-2.5">
            <p className="text-[12px] font-black uppercase tracking-wider text-red-700">
              Was der MedAT-Vollzugang beinhaltet:
            </p>
            <ul className="space-y-2 text-[13px] text-slate-700 font-medium">
              {isGeneralprobe ? (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle weiteren Generalproben</strong> (Generalprobe #2, MedAT-Z Zahnmedizin & Vorjahres-Archetypen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Echttest-Simulation unter Realbedingungen</strong> (221 Original-Aufgaben, 4 Std. 18 Min. Prüfungszeit + 60 Min. Pause)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Offizieller MedAT-Notenschlüssel</strong> mit Prozentrang-Auswertung und detaillierter Stärken-/Schwächen-Analyse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Voller Zugriff auf alle 35 BMS-Themenbereiche</strong>, TV, alle 25 KFF- und alle SEK-Simulationen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Volle 12 Monate Zugriff</strong> für dein Vorbereitungsjahr (kein Abo, keine automatische Verlängerung)</span>
                  </li>
                </>
              ) : isTv ? (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle 5 originalen TV-Prüfungssimulationen</strong> mit 60 anspruchsvollen Fragen über 20+ wissenschaftliche Texte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Offizielles MedAT-H Zeitlimit</strong> (35 Min. für 12 Fragen) & flexibler Übungsmodus ohne Zeitlimit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Detaillierte Schritt-für-Schritt-Lösungswege</strong> zu Kernaussagen, Inferenz & Kausalanalyse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle 35 BMS-Themenbereiche</strong> des VMC-Stichwortkatalogs & 175+ sequentielle Übungs-Sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Volle 12 Monate Zugriff</strong> für dein Vorbereitungsjahr (kein Abo, keine automatische Verlängerung)</span>
                  </li>
                </>
              ) : isKff ? (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle 25 KFF-Prüfungssimulationen</strong> (FZ, ZF, WF, GM & IE) unter originalgetreuen MedAT-Bedingungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Offizielle Prüfungszeitlimits</strong> & Pacing-Training (FZ 20 Min., ZF 15 Min., WF 20 Min., GM 8+15 Min., IE 10 Min.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Detaillierte Schritt-für-Schritt-Lösungswege</strong>, Kantenabgleich & formale Schlussmuster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle 35 BMS-Themenbereiche</strong> des VMC-Stichwortkatalogs & 175+ sequentielle Übungs-Sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Volle 12 Monate Zugriff</strong> für dein Vorbereitungsjahr (kein Abo, keine automatische Verlängerung)</span>
                  </li>
                </>
              ) : isSek ? (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle SEK-Prüfungssimulationen</strong> für Emotionen erkennen (EE), Emotionen regulieren (ER) & Soziales Entscheiden (SE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Offizielle MedAT-Prüfungsformate & Zeitlimits</strong> (EE 21 Min., ER 18 Min., SE 21 Min. mit kontinuierlichem Timer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Detaillierte sozial-emotionale Begründungen</strong>, Handlungsanalysen & deontologische Bewertungsmodelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle 35 BMS-Themenbereiche</strong> des VMC-Stichwortkatalogs, TV & alle 25 KFF-Simulationen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Volle 12 Monate Zugriff</strong> für dein Vorbereitungsjahr (kein Abo, keine automatische Verlängerung)</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle 35 BMS-Themenbereiche</strong> des offiziellen VMC-Stichwortkatalogs (Biologie, Chemie, Physik & Mathematik)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Alle 175+ sequentiellen Übungs-Sets</strong> mit über 5.000 MedAT-Aufgaben</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Detaillierte Schritt-für-Schritt-Lösungswege</strong> und Fehler-Wiederholungs-Hub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Gezielte Schwachstellen-Wiederholung</strong> für alle falsch beantworteten Fragen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>Volle 12 Monate Zugriff</strong> für dein Vorbereitungsjahr (kein Abo, keine automatische Verlängerung)</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Pricing & CTA Banner */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-[28px] font-black text-slate-900">39 €</span>
              <span className="text-[13px] font-bold text-slate-500">/ Vorbereitungsjahr</span>
            </div>
            <p className="text-[11.5px] text-slate-400 font-medium">Nur ~3,25 € pro Monat · Einmalzahlung</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleCheckout}
              disabled={isOpeningCheckout}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] px-6 py-3.5 text-[14px] font-black text-white shadow-md shadow-red-600/20 transition-all cursor-pointer disabled:opacity-50 text-center"
            >
              {isOpeningCheckout ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Kasse öffnet...</span>
                </>
              ) : (
                <>
                  <span>Jetzt Vollzugang freischalten</span>
                  <span>→</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="mt-4 flex items-center justify-between text-[12px] font-bold text-slate-400">
          <button
            onClick={handleViewPricing}
            className="hover:text-slate-700 transition-colors cursor-pointer text-left"
          >
            Zur Tarifübersicht →
          </button>
          <button
            onClick={onClose}
            className="hover:text-slate-600 transition-colors cursor-pointer"
          >
            Später vielleicht
          </button>
        </div>
      </div>
    </div>
  );
};

export default BmsProUpgradeModal;
