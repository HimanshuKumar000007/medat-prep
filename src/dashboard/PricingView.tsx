/**
 * src/dashboard/PricingView.tsx
 *
 * Dedicated Dashboard Pricing & Upgrade view matching the Austrian MedAT
 * clinical precision design system, connected directly to Paddle Billing.
 */

import { useState } from "react";
import { PRICING, type PricingTier } from "../lib/data";
import { IconArrowRight, IconCheck } from "../lib/icons";
import { toast } from "../lib/core";
import { openCheckout, PADDLE_CONFIG } from "../lib/paddle";
import { usePractice } from "./practiceContext";
import type { Screen } from "./Shell";

export default function PricingView({ onNav }: { onNav?: (s: Screen) => void }) {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const { userProfile } = usePractice();

  const handleSelect = async (tier: PricingTier) => {
    if (tier.id === "free") {
      toast("Du nutzt bereits den Basis-Zugang.");
      return;
    }

    if (tier.id === "intensiv") {
      toast("Anfrage für Intensiv-Coaching erhalten — wir melden uns in Kürze per E-Mail.");
      return;
    }

    // Premium tier with Paddle (Annual 39 €)
    const priceId =
      PADDLE_CONFIG.monthlyPriceId ||
      PADDLE_CONFIG.oncePriceId ||
      "pri_01m4sv454dth7gc5fm52tvhht5";

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
          toast("Zahlung erfolgreich abgeschlossen! Premium-Zugang wird aktiviert...", "info");
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
          alle 5.000+ Fragen, Simulationen und den adaptiven KI-Lernplan für nur 39 € / Jahr.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-6 lg:grid-cols-3 items-stretch">
        {PRICING.map((tier) => {
          const price = tier.id === "premium" ? 39 : tier.once;
          const unitLabel =
            tier.unit === "free"
              ? "für immer"
              : tier.id === "premium"
              ? "/ Jahr"
              : "einmalig";

          const isFeatured = tier.featured;

          return (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-200 ${
                isFeatured
                  ? "border-primary bg-gradient-to-b from-red-50/50 via-paper to-paper shadow-xl ring-2 ring-primary/20"
                  : "border-line bg-paper shadow-xs hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3.5 py-1 text-[11.5px] font-extrabold text-paper shadow-sm uppercase tracking-wide">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-ink">{tier.name}</h3>
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
                    <span className="text-[11.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block w-fit">
                      Nur 3,25 € / Monat · Jederzeit kündbar
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
                        isFeatured
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
                  disabled={loadingTier === tier.id || tier.id === "free"}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-bold transition-all duration-150 cursor-pointer ${
                    tier.id === "free"
                      ? "bg-paper-3 text-ink-4 cursor-default border border-line"
                      : isFeatured
                      ? "bg-primary text-paper hover:bg-primary/90 shadow-md shadow-primary/20 active:scale-[0.98]"
                      : "bg-night text-paper hover:bg-night/90 active:scale-[0.98]"
                  }`}
                >
                  {loadingTier === tier.id
                    ? "Wird geladen..."
                    : tier.id === "free"
                    ? "Aktueller Basis-Tarif"
                    : tier.cta}
                  {tier.id !== "free" && <IconArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="rounded-2xl border border-line bg-paper-2 p-6 text-center space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] font-semibold text-ink-2">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600">✓</span> 14 Tage Geld-zurück-Garantie
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600">✓</span> Jederzeit mit 1 Klick kündbar (keine Bindung)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600">✓</span> Sichere EU-Zahlungsabwicklung via Paddle
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-600">✓</span> Inkl. 20 % österr. USt. & Sofort-Rechnung
          </span>
        </div>

        <p className="text-xs text-ink-4">
          Zahlungsarten: Apple Pay, Google Pay, Kreditkarte (Visa & Mastercard), PayPal & SEPA-Lastschrift · Sofortige Freischaltung direkt nach Kauf.
        </p>
      </div>
    </div>
  );
}
