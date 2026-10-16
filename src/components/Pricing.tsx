import { useState, useEffect } from "react";
import { PRICING } from "../lib/data";
import { Reveal, scrollToId, toast, track } from "../lib/core";
import { IconArrowRight, IconCheck } from "../lib/icons";
import { getPaddle, openCheckout, PADDLE_CONFIG } from "../lib/paddle";

export default function Pricing() {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);

  useEffect(() => {
    // Pre-initialize Paddle.js in background for instant checkout opening
    getPaddle().catch((err) => console.error("Paddle pre-init error:", err));
  }, []);

  const choose = async (tier: string) => {
    track("pricing_select", { tier, location: "pricing_section" });
    if (tier === "free") {
      window.location.hash = "#/onboarding";
      return;
    }

    const priceId =
      PADDLE_CONFIG.monthlyPriceId ||
      PADDLE_CONFIG.oncePriceId ||
      "pri_01m4sv454dth7gc5fm52tvhht5";
    
    if (priceId) {
      setLoadingTier(tier);
      try {
        const opened = await openCheckout({
          priceId,
          customData: {
            source: "landing_pricing",
            tier,
          },
          onSuccess: () => {
            window.location.hash = "#/dashboard?upgraded=true";
          },
        });
        if (opened) {
          setLoadingTier(null);
          return;
        }
      } catch (err) {
        console.error("Failed opening Paddle checkout:", err);
      } finally {
        setLoadingTier(null);
      }
    }

    toast(`Super Wahl — dein ${tier === "premium" ? "Premium" : "Intensiv"}-Zugang wartet unten auf dich.`);
    window.location.hash = "#/onboarding";
  };

  return (
    <section id="preise" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(220,38,38,0.05), transparent)" }}
        aria-hidden="true"
      />
      <div className="wrap relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-xl">
            <span className="eyebrow">Preise</span>
            <h2 className="display mt-4 text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Billiger als ein Semester Panik.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              Ein MedAT-Vorbereitungskurs kostet schnell 1.500 €+. MedAT Prep bekommst du ab 0 € — und Premium für
              weniger, als dich ein einziger Nachhilfemonat kosten würde.
            </p>
          </Reveal>

        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING.map((tier, i) => {
            const price = tier.id === "premium" ? 39 : tier.once;
            const unitLabel =
              tier.unit === "free" ? "für immer" : tier.id === "premium" ? "/ Jahr" : "einmalig";
            return (
              <Reveal key={tier.id} delay={i * 110} className="h-full">
                <article
                  className={`card-lift card-lift-xl relative flex h-full flex-col rounded-2xl border bg-paper p-8 ${
                    tier.featured ? "border-primary/60 shadow-xl" : "border-line"
                  }`}
                  aria-label={`Tarif ${tier.name}`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-[12px] font-bold text-paper shadow-red">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="text-[19px] font-bold text-ink">{tier.name}</h3>
                  <p className="mt-1.5 text-[13px] font-medium text-ink-3">{tier.tagline}</p>

                  <p className="mt-6 flex items-baseline gap-1.5">
                    <span key={tier.id} className="display-num animate-fade-up inline-block text-[clamp(2.25rem,3vw,2.75rem)] text-ink">
                      {price === 0 ? "0 €" : `${price} €`}
                    </span>
                    <span className="text-[13px] font-semibold text-ink-3">{unitLabel}</span>
                  </p>

                  <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-7">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px] leading-snug text-ink-2">
                        <span
                          className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                            tier.featured ? "bg-primary-subtle text-primary" : "bg-success-subtle text-success"
                          }`}
                          aria-hidden="true"
                        >
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`btn mt-8 w-full ${tier.featured ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => choose(tier.id)}
                    disabled={loadingTier === tier.id}
                  >
                    {loadingTier === tier.id ? "Wird geladen..." : tier.cta}
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160}>
          <p className="mt-10 text-center text-[13px] font-medium text-ink-3">
            14 Tage Geld-zurück-Garantie · Jederzeit mit 1 Klick kündbar · Inkl. 20 % österr. USt. · Sofortige Freischaltung
          </p>
        </Reveal>
      </div>
    </section>
  );
}
