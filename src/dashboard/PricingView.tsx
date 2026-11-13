/**
 * src/dashboard/PricingView.tsx
 *
 * Dedicated Dashboard Pricing & Upgrade view matching the Austrian MedAT
 * clinical precision design system, connected directly to Paddle Billing.
 * Enhanced with high-converting value anchoring, feature comparison, and risk-reversal guarantee.
 */

import { useState } from "react";
import { PRICING, type PricingTier } from "../lib/data";
import { IconArrowRight, IconCheck, IconShield, IconSpark } from "../lib/icons";
import { toast } from "../lib/core";
import { openCheckout, PADDLE_CONFIG } from "../lib/paddle";
import { triggerPremiumSuccessModal } from "../components/PremiumSuccessModal";
import { usePractice } from "./practiceContext";
import type { Screen } from "./Shell";

const COMPARISON_ROWS = [
  {
    feature: "Fragenkatalog (BMS, KFF, TV, SEK)",
    basis: "200 Fragen (4 Kapitel)",
    premium: "Alle 5.000+ Fragen (35 Kapitel)",
    highlight: true,
  },
  {
    feature: "Schritt-für-Schritt-Lösungswege & Rechenmethoden",
    basis: "Basis-Erklärungen",
    premium: "Detailliert zu allen Optionen A–E",
    highlight: false,
  },
  {
    feature: "Generalproben unter Echtzeit-Prüfungsdruck",
    basis: "1 Probetest (Generalprobe #1)",
    premium: "4 komplette Test-Simulationen",
    highlight: true,
  },
  {
    feature: "KFF-Interaktivmodule (Zahlenfolgen, Figuren etc.)",
    basis: "Nur Schnupperzugang",
    premium: "Unbegrenzte Übungen & Generatoren",
    highlight: false,
  },
  {
    feature: "Intelligenter Fehler-Hub (Schwachstellen-Radar)",
    basis: "—",
    premium: "KI-gestützte gezielte Wiederholung",
    highlight: true,
  },
  {
    feature: "Historische Grenzwerte & Punkteprognose (Wien/Graz/IBK/Linz)",
    basis: "—",
    premium: "Vollständige Grenzrang-Analyse",
    highlight: false,
  },
  {
    feature: "Persönlicher Vorbereitungs- & Lernplan",
    basis: "Statischer Setup-Plan",
    premium: "Adaptiver wöchentlicher Lernplan",
    highlight: false,
  },
  {
    feature: "Laufzeit & Kosten",
    basis: "0 € dauerhaft kostenlos",
    premium: "39 € für volle 12 Monate",
    highlight: true,
  },
];

export default function PricingView({ onNav }: { onNav?: (s: Screen) => void }) {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);
  const { userProfile, updateUserProfile } = usePractice();

  const handleSelect = async (tier: PricingTier) => {
    if (tier.id === "free") {
      toast(userProfile.isPro ? "Du hast bereits den MedAT-Vollzugang aktiv." : "Du nutzt bereits den Basis-Zugang.");
      return;
    }

    // Premium tier with Paddle (Annual 39 €)
    const priceId =
      PADDLE_CONFIG.monthlyPriceId ||
      PADDLE_CONFIG.oncePriceId ||
      "pri_01m57vnth291kxefayhm59y3zx";

    if (!priceId) {
      toast("Fehler: Keine gültige Paddle Price-ID gefunden.");
      return;
    }

    setLoadingTier(tier.id);
    try {
      const opened = await openCheckout({
        priceId,
        userId: userProfile.userId,
        userEmail: userProfile.email,
        customData: {
          user_id: userProfile.userId || "",
          user_name: userProfile.name,
          exam_type: userProfile.examType,
        },
        onSuccess: () => {
          updateUserProfile({ isPro: true, subscriptionTier: "premium", subscriptionStatus: "active" });
          triggerPremiumSuccessModal();
          toast("🎉 Willkommen beim MedAT-Vollzugang! Alle Kapitel wurden freigeschaltet.", "success");
          if (onNav) {
            onNav("home");
          }
        },
      });

      if (!opened) {
        toast("Kasse konnte nicht geöffnet werden. Bitte versuche es erneut.");
      }
    } catch (err) {
      console.error("[Paddle PricingView] Error:", err);
      toast("Verbindungsfehler beim Öffnen der Kasse.");
    } finally {
      setLoadingTier(null);
    }
  };

  const isUserPro = Boolean(userProfile.isPro);

  return (
    <div className="mx-auto max-w-6xl space-y-10 py-6 px-4 sm:px-6">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="eyebrow bg-red-100 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
          Tarife & Vollzugang
        </span>
        <h1 className="display text-[clamp(1.85rem,3.5vw,2.75rem)] text-ink font-bold tracking-tight">
          Investiere in deinen MedAT-Studienplatz.
        </h1>
        <p className="text-[15px] leading-relaxed text-ink-2">
          Ein MedAT-Vorbereitungskurs kostet bis zu 1.500 €+. Mit MedAT Prep bekommst du
          alle 5.000+ Fragen, Simulationen und den adaptiven didaktischen Lernplan für nur <strong>39 € / Jahr</strong> (effektiv 3,25 € / Monat).
        </p>
      </div>

      {/* Value Anchoring Strip */}
      {!isUserPro && (
        <div className="rounded-2xl border border-line bg-paper-2 p-4 sm:p-5 shadow-xs max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-line text-center">
            <div className="p-2 sm:p-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-3">Traditioneller Präsenzkurs</span>
              <p className="mt-1 text-xl sm:text-2xl font-black text-ink-3 line-through">~1.500 €</p>
              <p className="mt-1 text-xs text-ink-4">Starre Termine · Frontalunterricht</p>
            </div>
            <div className="pt-3 md:pt-2 md:p-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-3">Private Nachhilfe</span>
              <p className="mt-1 text-xl sm:text-2xl font-black text-ink-3 line-through">~45 € / Std.</p>
              <p className="mt-1 text-xs text-ink-4">Schnell über 500 € im Monat</p>
            </div>
            <div className="pt-3 md:pt-2 md:p-3 bg-red-50/50 rounded-xl md:rounded-none">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                <IconSpark className="h-3 w-3" /> MedAT Prep Vollzugang
              </span>
              <p className="mt-1 text-xl sm:text-2xl font-black text-primary">39 € / Jahr</p>
              <p className="mt-1 text-xs font-semibold text-emerald-700">Effektiv nur 3,25 € / Monat · 97 % Ersparnis</p>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
        {PRICING.map((tier) => {
          const isCurrentActive =
            (tier.id === "premium" && isUserPro) ||
            (tier.id === "free" && !isUserPro);

          const price = tier.id === "premium" ? 39 : tier.once;
          const unitLabel = tier.unit === "free" ? "dauerhaft kostenlos" : "/ Jahr";
          const isFeatured = tier.featured;

          return (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-200 ${
                isUserPro && tier.id === "premium"
                  ? "border-emerald-500 bg-gradient-to-b from-emerald-50/40 via-paper to-paper shadow-xl ring-2 ring-emerald-500/20"
                  : isFeatured
                  ? "border-primary bg-gradient-to-b from-red-50/40 via-paper to-paper shadow-2xl ring-2 ring-primary/20"
                  : "border-line bg-paper shadow-xs hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {(isUserPro && tier.id === "premium" ? "Dein aktiver Tarif ✓" : tier.badge) && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span
                    className={`rounded-full px-3.5 py-1 text-[11.5px] font-extrabold shadow-sm uppercase tracking-wide ${
                      isUserPro && tier.id === "premium"
                        ? "bg-emerald-600 text-paper"
                        : "bg-primary text-paper"
                    }`}
                  >
                    {isUserPro && tier.id === "premium" ? "Dein aktiver Tarif ✓" : tier.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-ink">{tier.name}</h3>
                  {tier.anchorPrice && !isUserPro && (
                    <span className="text-xs font-bold text-ink-4 line-through">
                      {tier.anchorPrice}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-ink-3 min-h-[32px]">{tier.tagline}</p>

                <div className="mt-5 flex flex-col gap-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="display-num text-4xl font-extrabold text-ink">
                      {price === 0 ? "0 €" : `${price} €`}
                    </span>
                    <span className="text-xs font-semibold text-ink-3">
                      {unitLabel}
                    </span>
                  </div>
                  {tier.id === "premium" && (
                    <span className={`text-[11.5px] font-bold px-2 py-0.5 rounded-md inline-block w-fit ${
                      isUserPro
                        ? "text-emerald-700 bg-emerald-100/70"
                        : "text-emerald-700 bg-emerald-50"
                    }`}>
                      {isUserPro ? "Vollzugang aktiv · Alle 35 BMS-Kapitel freigeschaltet" : "Nur 3,25 € / Monat · Volle 12 Monate Zugriff"}
                    </span>
                  )}
                </div>
              </div>

              {/* Feature List */}
              <ul className="mt-6 flex-1 space-y-3 border-t border-line/70 pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13.5px] text-ink-2">
                    <span
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                        isUserPro && tier.id === "premium"
                          ? "bg-emerald-100 text-emerald-700"
                          : isFeatured
                          ? "bg-primary-subtle text-primary"
                          : "bg-success-subtle text-success"
                      }`}
                    >
                      <IconCheck className="h-3 w-3" />
                    </span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(tier)}
                  disabled={loadingTier === tier.id || isCurrentActive || (isUserPro && tier.id === "free")}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-bold transition-all duration-150 ${
                    isUserPro && tier.id === "premium"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-300 cursor-default"
                      : isCurrentActive || (isUserPro && tier.id === "free")
                      ? "bg-paper-3 text-ink-4 cursor-default border border-line"
                      : isFeatured
                      ? "bg-primary text-paper hover:bg-primary/90 shadow-md shadow-primary/20 active:scale-[0.98] cursor-pointer"
                      : "bg-night text-paper hover:bg-night/90 active:scale-[0.98] cursor-pointer"
                  }`}
                >
                  {loadingTier === tier.id
                    ? "Wird geladen..."
                    : isUserPro && tier.id === "premium"
                    ? "Bereits freigeschaltet ✓"
                    : isCurrentActive
                    ? "Aktueller Basis-Tarif"
                    : isUserPro && tier.id === "free"
                    ? "Basis-Tarif"
                    : tier.cta}
                  {!isCurrentActive && !(isUserPro && tier.id === "premium") && <IconArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison Table Toggle */}
      <div className="max-w-4xl mx-auto text-center">
        <button
          type="button"
          onClick={() => setShowTable(!showTable)}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer py-2 px-4 rounded-xl hover:bg-primary-subtle/50"
        >
          <span>{showTable ? "Vergleichstabelle schließen ▲" : "Alle Features im Detail vergleichen (Basis vs. Premium) ▼"}</span>
        </button>

        {showTable && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-paper shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-line bg-paper-2">
                  <th className="p-3.5 sm:p-4 font-bold text-ink">Feature</th>
                  <th className="p-3.5 sm:p-4 font-bold text-ink text-center w-1/3">Basis (0 €)</th>
                  <th className="p-3.5 sm:p-4 font-bold text-primary text-center w-1/3 bg-red-50/50">Premium (39 € / Jahr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? "bg-paper-2/60" : "bg-paper"}>
                    <td className="p-3 sm:p-4 text-xs sm:text-sm font-semibold text-ink">
                      {row.feature}
                    </td>
                    <td className="p-3 sm:p-4 text-xs sm:text-sm text-center text-ink-3">
                      {row.basis}
                    </td>
                    <td className="p-3 sm:p-4 text-xs sm:text-sm text-center font-bold text-ink bg-red-50/30">
                      {row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* American-Style 14-Day Money-Back Guarantee Box */}
      <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50/50 via-paper to-emerald-50/30 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-5 sm:gap-6 max-w-4xl mx-auto">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
          <IconShield className="h-8 w-8" />
        </div>
        <div className="text-center sm:text-left space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-ink">
            14 Tage 100 % Geld-zurück-Garantie — Null Risiko für dich
          </h4>
          <p className="text-xs sm:text-[13px] leading-relaxed text-ink-2">
            Teste Premium 14 Tage lang ohne Risiko. Wenn du merkst, dass die Plattform nicht perfekt zu deiner Vorbereitung passt,
            genügt eine kurze formlose E-Mail an{" "}
            <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary underline">medatprep@gmail.com</a>{" "}
            und du erhältst den vollen Kaufpreis anstandslos erstattet.
          </p>
        </div>
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="rounded-2xl border border-line bg-paper-2 p-6 text-center space-y-3 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] font-semibold text-ink-2">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span> 14 Tage Geld-zurück-Garantie
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span> Keine Bindung (jederzeit kündbar)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span> Sichere EU-Zahlungsabwicklung via Paddle
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span> Inkl. 20 % österr. USt. & Sofort-Rechnung
          </span>
        </div>

        <p className="text-xs text-ink-4">
          Zahlungsarten: Apple Pay, Google Pay, Kreditkarte (Visa & Mastercard), PayPal & EPS · Sofortige Freischaltung direkt nach Kauf.
        </p>
      </div>
    </div>
  );
}