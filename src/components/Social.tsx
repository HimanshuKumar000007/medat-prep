import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLES } from "../lib/data";
import { Reveal, toast, track } from "../lib/core";
import { IconArrowRight } from "../lib/icons";

export default function Social() {
  const navigate = useNavigate();
  const [openArticle, setOpenArticle] = useState<number | null>(0);

  return (
    <section className="bg-paper-2 py-16 sm:py-20 lg:py-28">
      <div className="wrap">
        {/* ---------- What the platform offers (honest features) ---------- */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <span className="eyebrow">Plattform-Überblick</span>
            <h2 className="display mt-4 max-w-xl text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Gezielte Vorbereitung. <span className="text-primary">Ohne leere Versprechen.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <button
              onClick={() => {
                track("einstufungstest_open", { location: "social_header" });
                window.dispatchEvent(new CustomEvent("mprep:open-einstufungstest"));
              }}
              className="btn btn-primary btn-sm inline-flex items-center gap-1.5"
            >
              <span>Kostenlosen Einstufungstest starten</span>
              <IconArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-7 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="card-lift h-full rounded-2xl border border-line bg-paper p-5 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="rounded-md bg-rose-50 border border-rose-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rose-700">
                  Fachwissen
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink">BMS-Übungsfragen mit Erklärungen</h3>
                <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Systematisches Training für Biologie, Chemie, Physik und Mathematik auf Matura-Niveau. Jede Aufgabe enthält detaillierte Lösungswege und Rechenschritte.
                </p>
              </div>
              <div className="mt-6 border-t border-line pt-3.5 flex items-center justify-between text-xs text-ink-3">
                <span className="font-semibold text-primary">✓ 40 % Gesamtwichtung</span>
                <span>Bio · Chem · Phys · Math</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-lift h-full rounded-2xl border border-line bg-paper p-5 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                  Standortbestimmung
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink">Kostenloser 24-Fragen-Einstufungstest</h3>
                <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Finde in 8–10 Minuten heraus, wo du im Stoff stehst. Du erhältst eine sofortige Auswertung über BMS, KFF, Textverständnis und SEK.
                </p>
              </div>
              <div className="mt-6 border-t border-line pt-3.5">
                <button
                  onClick={() => {
                    track("einstufungstest_open", { location: "social_card" });
                    window.dispatchEvent(new CustomEvent("mprep:open-einstufungstest"));
                  }}
                  className="btn btn-primary btn-sm w-full justify-center"
                >
                  Jetzt kostenlos testen →
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="card-lift h-full rounded-2xl border border-line bg-paper p-5 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                  Community
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink">MedAT 2027 Telegram-Gruppe</h3>
                <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-ink-2">
                  Tausche dich mit Mitbewerber:innen für Wien, Innsbruck, Graz und Linz aus. Finde Lernpartner:innen, kläre Fragen zu Fristen und bleibe motiviert.
                </p>
              </div>
              <div className="mt-6 border-t border-line pt-3.5">
                <a
                  href="/medat-telegram-gruppe"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/medat-telegram-gruppe");
                  }}
                  className="btn btn-secondary btn-sm w-full justify-center"
                >
                  Zur Telegram-Gruppe →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Blog / Insights ---------- */}
        <div id="blog" className="mt-14 sm:mt-24 scroll-mt-28">
          <Reveal>
            <div className="flex flex-col xs:flex-row xs:items-end justify-between gap-3 sm:gap-6">
              <div>
                <span className="eyebrow">Aus dem Blog</span>
                <h2 className="display mt-3.5 sm:mt-4 text-[24px] xs:text-[28px] sm:text-[clamp(1.6rem,2.6vw+0.5rem,2.25rem)] text-ink">
                  Wissen, das Punkte bringt.
                </h2>
              </div>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  track("blog_all_click", { location: "blog_header" });
                  navigate("/blog");
                }}
                className="link-tertiary whitespace-nowrap text-xs xs:text-sm inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary transition-colors py-1 touch-manipulation"
              >
                <span>Alle Artikel ansehen</span>
                <span>→</span>
              </a>
            </div>
          </Reveal>

          <div className="mt-6 sm:mt-10 border-t border-line">
            {ARTICLES.map((a, i) => {
              const open = openArticle === i;
              return (
                <Reveal key={a.index} delay={i * 80}>
                  <div className="border-b border-line">
                    <button
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 xs:gap-4 sm:gap-5 py-3.5 sm:py-6 text-left lg:gap-8 touch-manipulation"
                      onClick={() => {
                        setOpenArticle(open ? null : i);
                        track("article_expand", { article: a.index });
                      }}
                      aria-expanded={open}
                      aria-controls={`article-${a.index}`}
                    >
                      <span className="display-num text-[19px] xs:text-[22px] sm:text-[26px] text-line-2 transition-colors duration-300 group-hover:text-primary lg:text-[32px]">
                        {a.index}
                      </span>
                      <span className="min-w-0">
                        <span className="mb-0.5 sm:mb-1.5 inline-block rounded-md bg-primary-muted px-2 py-0.5 text-[10px] xs:text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wide text-primary">
                          {a.category}
                        </span>
                        <span className="block text-[14px] xs:text-[15px] sm:text-[17px] font-bold leading-snug tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-primary lg:text-[19px]">
                          {a.title}
                        </span>
                        <span className="mt-0.5 sm:mt-1 block text-[11px] xs:text-[11.5px] sm:text-[12px] font-medium text-ink-3">{a.meta}</span>
                      </span>
                      <span
                        className={`flex h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          open ? "rotate-45 border-primary bg-primary text-paper" : "border-line text-ink-2 group-hover:border-primary group-hover:text-primary"
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div id={`article-${a.index}`} className={`acc-body ${open ? "open" : ""}`}>
                      <div className="acc-inner">
                        <p className="max-w-3xl pb-4 xs:pb-5 sm:pb-7 pl-0 xs:pl-8 sm:pl-[52px] pr-2 sm:pr-4 text-[13px] xs:text-[14px] sm:text-[15px] leading-relaxed text-ink-2 lg:pl-[64px]">
                          {a.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150}>
            <div className="mt-6 sm:mt-8">
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  track("blog_footer_cta_click", { location: "social_footer" });
                  navigate("/blog");
                }}
                className="group inline-flex flex-wrap items-center gap-1.5 xs:gap-2 text-[12.5px] xs:text-[13.5px] font-medium text-ink-3 hover:text-primary transition-colors cursor-pointer touch-manipulation"
              >
                <IconArrowRight className="h-3.5 w-3.5 xs:h-4 xs:w-4 text-primary transition-transform group-hover:translate-x-1 shrink-0" />
                <span>Neue Guides erscheinen wöchentlich —</span>
                <span className="font-bold text-primary underline underline-offset-4 decoration-primary/40 group-hover:decoration-primary">
                  kostenlos im Basis-Zugang lesen →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
