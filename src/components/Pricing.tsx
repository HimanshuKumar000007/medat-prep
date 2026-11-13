import { useState, useEffect } from "react";
import { PRICING } from "../lib/data";
import { Reveal, toast, track } from "../lib/core";
import { IconArrowRight, IconCheck, IconShield, IconSpark } from "../lib/icons";
import { getPaddle, openCheckout, PADDLE_CONFIG } from "../lib/paddle";

const COMPARISON_ROWS = [
  {
    feature: "Fragenkatalog (BMS, KFF, TV, SEK)",
    basis: "200 Fragen (4 Kapitel)",
    premium: "Alle 5.000+ Fragen (35 Kapitel)",
    highlight: true,
  },
  {
    feature: "Schritt-für-Schritt-Lösungswege & Rechenmethoden",
    basis: "Grundlegende Erklärungen",
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

export default function Pricing() {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);

  useEffect(() => {
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
      "pri_01m57vnth291kxefayhm59y3zx";

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
            window.location.hash = "#/app?upgraded=true";
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

    toast("Super Wahl — dein Premium-Zugang wartet im Onboarding auf dich.");
    window.location.hash = "#/onboarding";
  };

  return (
    <section id="preise" className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(220,38,38,0.06), transparent)" }}
        aria-hidden="true"
      />
      <div className="wrap relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="eyebrow justify-center">Faire Preise · Maximale Chancengleichheit</span>
            <h2 className="display mt-4 text-[26px] xs:text-[30px] sm:text-[clamp(2rem,3.5vw+0.5rem,2.75rem)] text-ink">
              Warum 1.500 € für einen Wochenendkurs zahlen?
            </h2>
            <p className="mt-3.5 sm:mt-4 text-[14px] xs:text-[15px] sm:text-[16px] leading-relaxed text-ink-2 max-w-2xl mx-auto">
              Kommerzielle Institute verlangen vierstellige Summen für frontalen Unterricht. Bei MedAT Prep bekommst du
              alle 5.000+ Fragen, 4 Generalproben und adaptive didaktische Lernhilfen für <strong>nur 39 € im ganzen Jahr</strong> —
              das sind effektiv gerade einmal <strong>3,25 € pro Monat</strong>.
            </p>
          </Reveal>
        </div>

        {/* American-Style Anchoring / Contrast Strip */}
        <Reveal delay={60} className="mt-8 sm:mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-line bg-paper-2 p-4 sm:p-5 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-line text-center">
              <div className="p-2 sm:p-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-3">Traditioneller Präsenzkurs</span>
                <p className="mt-1 text-xl sm:text-2xl font-black text-ink-3 line-through">~1.500 €</p>
                <p className="mt-1 text-xs text-ink-4">Starre Termine · Voller Hörsaal</p>
              </div>
              <div className="pt-3 md:pt-2 md:p-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-3">Private Nachhilfe</span>
                <p className="mt-1 text-xl sm:text-2xl font-black text-ink-3 line-through">~45 € / Std.</p>
                <p className="mt-1 text-xs text-ink-4">Schnell 500 €+ pro Monat</p>
              </div>
              <div className="pt-3 md:pt-2 md:p-3 bg-red-50/50 rounded-xl md:rounded-none">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  <IconSpark className="h-3 w-3" /> MedAT Prep Komplett
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-black text-primary">39 € / Jahr</p>
                <p className="mt-1 text-xs font-semibold text-emerald-700">Effektiv nur 3,25 € / Monat · 97 % Ersparnis</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pricing Cards Grid (2-Column High Contrast Layout) */}
        <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
          {PRICING.map((tier, i) => {
            const isFeatured = tier.featured;
            const price = tier.id === "premium" ? 39 : tier.once;
            const unitLabel = tier.unit === "free" ? "dauerhaft kostenlos" : "/ Jahr";

            return (
              <Reveal key={tier.id} delay={i * 100} className="h-full">
                <article
                  className={`card-lift relative flex h-full flex-col rounded-3xl border bg-paper p-5 xs:p-6 sm:p-8 transition-all duration-200 ${
                    isFeatured
                      ? "border-primary/80 shadow-2xl ring-2 ring-primary/20 bg-gradient-to-b from-red-50/30 via-paper to-paper"
                      : "border-line shadow-xs hover:border-slate-300 hover:shadow-md"
                  }`}
                  aria-label={`Tarif ${tier.name}`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="rounded-full bg-primary px-4 py-1 text-[11px] font-extrabold text-paper shadow-md shadow-primary/25 tracking-wide uppercase">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold text-ink">{tier.name}</h3>
                      {tier.anchorPrice && (
                        <span className="text-xs font-bold text-ink-4 line-through">
                          {tier.anchorPrice}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-ink-3 min-h-[36px]">{tier.tagline}</p>

                    <div className="mt-5 flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="display-num text-4xl sm:text-5xl font-black text-ink">
                          {price === 0 ? "0 €" : `${price} €`}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-ink-3">
                          {unitLabel}
                        </span>
                      </div>
                      {tier.subtext && (
                        <span className={`inline-block w-fit text-[11.5px] font-bold px-2.5 py-0.5 rounded-md ${
                          isFeatured ? "bg-emerald-50 text-emerald-700" : "bg-paper-2 text-ink-3"
                        }`}>
                          {tier.subtext}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Benefit Bullets */}
                  <ul className="mt-6 flex-1 space-y-3 border-t border-line/80 pt-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-[14px] leading-snug text-ink-2">
                        <span
                          className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                            isFeatured ? "bg-primary-subtle text-primary" : "bg-success-subtle text-success"
                          }`}
                          aria-hidden="true"
                        >
                          <IconCheck className="h-3 w-3" />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Action Button */}
                  <div className="mt-8 pt-2">
                    <button
                      className={`btn w-full min-h-[50px] justify-center text-sm sm:text-base font-bold touch-manipulation cursor-pointer ${
                        isFeatured
                          ? "btn-primary shadow-lg shadow-primary/25 hover:shadow-xl"
                          : "btn-secondary hover:bg-paper-2"
                      }`}
                      onClick={() => choose(tier.id)}
                      disabled={loadingTier === tier.id}
                    >
                      {loadingTier === tier.id ? "Wird geladen..." : tier.cta}
                      <IconArrowRight className="h-4 w-4" />
                    </button>
                    {isFeatured ? (
                      <p className="mt-2 text-center text-[11px] font-semibold text-ink-4">
                        ⚡ Sofortiger Zugriff in 30 Sek. · 14 Tage Geld-zurück-Garantie
                      </p>
                    ) : (
                      <p className="mt-2 text-center text-[11px] font-medium text-ink-4">
                        100 % gratis · Keine Kreditkarte · Sofort loslegen
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Feature Comparison Table Toggle */}
        <Reveal delay={120} className="mt-10 max-w-4xl mx-auto text-center">
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
        </Reveal>

        {/* American-Style "Ironclad" 14-Day Money-Back Guarantee Box */}
        <Reveal delay={140} className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50/50 via-paper to-emerald-50/30 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
              <IconShield className="h-8 w-8" />
            </div>
            <div className="text-center sm:text-left space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-ink">
                14 Tage 100 % Geld-zurück-Garantie — Null Risiko für dich
              </h4>
              <p className="text-xs sm:text-[13px] leading-relaxed text-ink-2">
                Wir sind überzeugt davon, dass MedAT Prep die effektivste und fairste Vorbereitung auf den MedAT in Österreich ist.
                Teste Premium volle 14 Tage. Solltest du nicht absolut begeistert sein, genügt eine kurze formlose E-Mail an{" "}
                <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary underline">medatprep@gmail.com</a>{" "}
                und du erhältst jeden Cent ohne Wenn und Aber zurück. Keine Fragen, kein Risiko.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ROI / Reality Check Strip */}
        <Reveal delay={160} className="mt-8 max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-line bg-paper-2 p-5 text-xs sm:text-[13px] text-ink-2 space-y-2">
            <p className="font-semibold text-ink">
              💡 Was kostet dich ein verlorenes Jahr?
            </p>
            <p className="text-ink-3 leading-relaxed">
              Ein knapp verpasster MedAT-Platz bedeutet 1 ganzes Jahr Wartezeit, erneute Bewerbungsgebühr (110 €) und
              tausende Euro Lebenshaltungskosten. Mit 39 € investierst du weniger als 11 Cent am Tag in deinen Traum vom Medizinstudium.
            </p>
          </div>
        </Reveal>

        {/* Payment & Security Trust Strip */}
        <Reveal delay={180}>
          <div className="mt-8 pt-6 border-t border-line text-center space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-ink-3">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Apple Pay & Google Pay
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Visa & Mastercard
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> PayPal & EPS (Österreich)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 256-Bit SSL-Verschlüsselung
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Inkl. 20 % österr. USt.
              </span>
            </div>
            <p className="text-[11px] text-ink-4 max-w-xl mx-auto px-2">
              Reine E-Learning-Plattform zur selbstständigen Prüfungsvorbereitung. Keine automatischen Zulassungs- oder Auswahlentscheidungen über Personen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}