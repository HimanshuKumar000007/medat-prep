import { useState } from "react";
import { ARTICLES, TESTIMONIALS } from "../lib/data";
import { Reveal, toast, track } from "../lib/core";
import { IconArrowRight, IconQuote } from "../lib/icons";

export default function Social() {
  const [openArticle, setOpenArticle] = useState<number | null>(0);

  return (
    <section className="bg-paper-2 py-20 lg:py-28">
      <div className="wrap">
        {/* ---------- Testimonials ---------- */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <span className="eyebrow">Erfahrungen</span>
            <h2 className="display mt-4 max-w-xl text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Sie haben es geschafft. <span className="text-primary">Mit System.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center gap-3">
              <div className="flex text-warning" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.5L12 17.4l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8z" />
                  </svg>
                ))}
              </div>
              <p className="num text-sm font-bold text-ink">4,9/5 · 812 Bewertungen</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure
                className={`card-lift h-full rounded-2xl border border-line bg-paper p-7 shadow-sm hover:rotate-0 hover:-translate-y-2 md:hover:rotate-0 md:hover:-translate-y-2 ${t.rotate}`}
              >
                <IconQuote className="h-7 w-7 text-primary/25" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-2">{t.quote}</blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-paper"
                    style={{ background: ["#0F172A", "#DC2626", "#8B5CF6"][i] }}
                    aria-hidden="true"
                  >
                    {t.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <div className="min-w-0">
                    <cite className="block text-[14px] font-bold not-italic text-ink">{t.name}</cite>
                    <span className="block truncate text-[12px] text-ink-3">{t.detail}</span>
                  </div>
                </figcaption>
                <p className="num mt-4 inline-block rounded-md bg-primary-subtle px-2.5 py-1 text-[12px] font-extrabold text-primary">
                  {t.metric}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* ---------- Blog / Insights ---------- */}
        <div id="blog" className="mt-24 scroll-mt-28">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Aus dem Blog</span>
                <h2 className="display mt-4 text-[clamp(1.6rem,2.6vw+0.5rem,2.25rem)] text-ink">
                  Wissen, das Punkte bringt.
                </h2>
              </div>
              <button
                onClick={() => {
                  track("blog_all_click", { location: "blog_header" });
                  toast("Der vollständige Blog startet zum Launch — die Guides oben sind schon jetzt ausklappbar.");
                }}
                className="link-tertiary hidden whitespace-nowrap text-sm sm:block"
              >
                Alle Artikel →
              </button>
            </div>
          </Reveal>

          <div className="mt-10 border-t border-line">
            {ARTICLES.map((a, i) => {
              const open = openArticle === i;
              return (
                <Reveal key={a.index} delay={i * 80}>
                  <div className="border-b border-line">
                    <button
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-6 text-left lg:gap-8"
                      onClick={() => {
                        setOpenArticle(open ? null : i);
                        track("article_expand", { article: a.index });
                      }}
                      aria-expanded={open}
                      aria-controls={`article-${a.index}`}
                    >
                      <span className="display-num text-[26px] text-line-2 transition-colors duration-300 group-hover:text-primary lg:text-[32px]">
                        {a.index}
                      </span>
                      <span className="min-w-0">
                        <span className="mb-1.5 inline-block rounded-md bg-primary-muted px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-primary">
                          {a.category}
                        </span>
                        <span className="block text-[17px] font-bold leading-snug tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-primary lg:text-[19px]">
                          {a.title}
                        </span>
                        <span className="mt-1 block text-[12px] font-medium text-ink-3">{a.meta}</span>
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          open ? "rotate-45 border-primary bg-primary text-paper" : "border-line text-ink-2 group-hover:border-primary group-hover:text-primary"
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div id={`article-${a.index}`} className={`acc-body ${open ? "open" : ""}`}>
                      <div className="acc-inner">
                        <p className="max-w-3xl pb-7 pl-[52px] pr-4 text-[15px] leading-relaxed text-ink-2 lg:pl-[64px]">
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
            <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-ink-3">
              <IconArrowRight className="h-4 w-4 text-primary" />
              Neue Guides erscheinen wöchentlich — kostenlos im Basis-Zugang.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
