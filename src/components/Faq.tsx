import { useState } from "react";
import { FAQS } from "../lib/data";
import { Reveal, track } from "../lib/core";

export default function Faq() {
  const [openId, setOpenId] = useState<string>("q1");

  return (
    <section id="faq" className="bg-paper-2 py-16 sm:py-20 lg:py-28">
      <div className="wrap grid gap-8 sm:gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="display mt-4 text-[26px] xs:text-[30px] sm:text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] text-ink">
              Noch Fragen?
              <br />
              <span className="text-primary">Klären wir.</span>
            </h2>
            <p className="mt-3.5 sm:mt-5 max-w-sm text-[13.5px] xs:text-[14px] sm:text-[15px] leading-relaxed text-ink-2">
              Die sieben Fragen, die uns Kandidat:innen und Eltern am häufigsten stellen. Alles andere beantworten wir
              persönlich — meist innerhalb weniger Stunden.
            </p>
            <a href="mailto:medatprep@gmail.com" className="link-tertiary mt-4 sm:mt-6 inline-block text-sm font-semibold">
              medatprep@gmail.com
            </a>
            <div className="mt-5 sm:mt-8 flex items-center gap-2.5 sm:gap-3 rounded-xl border border-line bg-paper p-3 xs:p-3.5 sm:p-4">
              <span className="animate-pulse-dot h-2.5 w-2.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
              <p className="text-[12px] sm:text-[13px] font-medium text-ink-2">
                Ø Antwortzeit: <span className="num font-bold text-ink">3,2 h</span> — auch am Wochenende
              </p>
            </div>
          </Reveal>
        </div>

        {/* Accordion */}
        <div className="border-t border-line">
          {FAQS.map((f, i) => {
            const open = openId === f.id;
            return (
              <Reveal key={f.id} delay={i * 50}>
                <div className="border-b border-line">
                  <h3>
                    <button
                      className="flex w-full items-center justify-between gap-3 sm:gap-6 py-3.5 sm:py-6 text-left touch-manipulation"
                      aria-expanded={open}
                      aria-controls={`${f.id}-panel`}
                      id={`${f.id}-trigger`}
                      onClick={() => {
                        if (!open) track("faq_expand", { question_id: f.id });
                        setOpenId(open ? "" : f.id);
                      }}
                    >
                      <span className="flex items-baseline gap-2.5 sm:gap-4 min-w-0 flex-1 pr-2">
                        <span className="num hidden text-[13px] font-bold text-ink-4 sm:block shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <span className={`text-[14.5px] xs:text-[15.5px] sm:text-[16px] font-bold leading-snug transition-colors duration-200 lg:text-[17px] ${open ? "text-primary" : "text-ink"}`}>
                          {f.q}
                        </span>
                      </span>
                      <span
                        className={`flex h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          open ? "rotate-180 border-primary bg-primary text-paper" : "border-line text-ink-2"
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`${f.id}-panel`}
                    role="region"
                    aria-labelledby={`${f.id}-trigger`}
                    className={`acc-body ${open ? "open" : ""}`}
                  >
                    <div className="acc-inner">
                      <p className="max-w-2xl pb-4 xs:pb-5 sm:pb-7 pl-0 text-[13.5px] sm:text-[15px] leading-relaxed text-ink-2 sm:pl-[42px]">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
