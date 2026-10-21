/**
 * src/pages/BlogPage.tsx
 *
 * Dedicated Knowledge Hub & Strategy Guide page for MedAT Prep (#/blog).
 * Built with the Austrian medical precision design system, real-time search,
 * category filtering, and in-depth article reader.
 */

import { useState, useMemo, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BLOG_ARTICLES, type BlogArticle } from "../data/blogArticles";
import { Footer } from "../components/Closing";
import { LogoMark, IconArrowRight, IconCheck, IconClose } from "../lib/icons";
import { track } from "../lib/core";

export default function BlogPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  const categories = ["Alle", "Termine & Quoten", "Strategie", "BMS & KFF", "Testtag"];

  // Sync active article from URL query params (e.g. #/blog?article=medat-2027-termine-fristen)
  useEffect(() => {
    const slug = searchParams.get("article");
    if (slug) {
      const match = BLOG_ARTICLES.find((a) => a.slug === slug || a.id === slug);
      if (match) {
        setActiveArticle(match);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    document.title = activeArticle
      ? `${activeArticle.title} — MedAT Prep Wissens-Hub`
      : "MedAT-Ratgeber & Wissens-Hub — MedAT Prep";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeArticle]);

  // Filtered articles based on search & category
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "Alle" || article.category === selectedCategory;
      const matchesQuery =
        !searchQuery.trim() ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenArticle = (article: BlogArticle) => {
    if (article.slug === "medat-vorbereitung" || article.slug === "medat-vorbereitung-guide") {
      navigate("/medat-vorbereitung");
      return;
    }
    if (article.slug === "medat-2027-termine-fristen") {
      navigate("/medat-2027-termine-fristen");
      return;
    }
    if (article.slug === "kff-strategie-schnellste-punkte") {
      navigate("/kff-strategie-schnellste-punkte");
      return;
    }
    if (article.slug === "quoten-bewerberzahlen-analyse") {
      navigate("/quoten-bewerberzahlen-analyse");
      return;
    }
    if (article.slug === "bms-masterplan-vorbereitung") {
      navigate("/bms-masterplan-vorbereitung");
      return;
    }
    if (article.slug === "tv-sek-emotionen-textverstaendnis") {
      navigate("/tv-sek-emotionen-textverstaendnis");
      return;
    }
    if (article.slug === "testtag-protokoll-mentale-staerke") {
      navigate("/testtag-protokoll-mentale-staerke");
      return;
    }
    setActiveArticle(article);
    setSearchParams({ article: article.slug });
    track("blog_article_read", { articleId: article.id, slug: article.slug });
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-subtle selection:text-primary">
      {/* ---------------- STICKY TOP NAV ---------------- */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg py-1 text-sm font-semibold text-ink-3 transition-colors hover:text-primary"
            >
              <span className="text-base">←</span>
              <span className="hidden sm:inline">Startseite</span>
            </Link>
            <div className="h-4 w-px bg-line" />
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="display text-[15px] sm:text-[17px] text-ink">
                MedAT <span className="font-sans font-medium text-slate-500">Prep</span>
              </span>
            </Link>
            <span className="hidden rounded-full bg-primary-subtle px-2.5 py-0.5 text-[11px] font-bold text-primary md:inline-block">
              Wissens-Hub & Ratgeber
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#/onboarding?mode=register"
              className="btn btn-primary btn-sm px-3.5 sm:px-4 text-xs sm:text-sm font-bold shadow-sm"
            >
              Kostenlos registrieren →
            </a>
          </div>
        </div>
      </header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="py-10 sm:py-14 lg:py-18">
        <div className="wrap">
          {/* HEADER / HERO SECTION */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-primary-subtle px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <span>Aus dem Blog</span>
              <span>·</span>
              <span>Wissen für den MedAT 2027</span>
            </div>
            <h1 className="display mt-4 text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.1] text-ink tracking-tight">
              Wissen, das Studienplätze sichert.
            </h1>
            <p className="mt-3.5 text-[16px] sm:text-[18px] leading-relaxed text-ink-3">
              Evidenzbasierte Lernstrategien, Quotenanalysen und offizielle MedAT-Updates
              für die Medizinischen Universitäten Wien, Innsbruck, Graz und die JKU Linz.
            </p>
          </div>

          {/* SEARCH & CATEGORY FILTER BAR */}
          <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-line pb-6">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-[13px] font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-paper-2 text-ink-3 hover:bg-slate-100 hover:text-ink border border-line/60"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[240px] max-w-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Themen oder Stichworte suchen..."
                className="w-full rounded-xl border border-line bg-paper-2 py-2 pl-9 pr-4 text-[13px] text-ink placeholder:text-ink-4 focus:border-primary focus:bg-white focus:outline-hidden"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-ink-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-ink-4 hover:text-ink text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* ARTICLES GRID */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between text-xs font-semibold text-ink-4">
              <span>{filteredArticles.length} Ratgeber & Artikel</span>
              {selectedCategory !== "Alle" && (
                <button
                  onClick={() => setSelectedCategory("Alle")}
                  className="text-primary hover:underline cursor-pointer"
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>

            {filteredArticles.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-line bg-paper-2 p-12 text-center">
                <p className="text-base font-bold text-ink">Keine passenden Artikel gefunden</p>
                <p className="mt-1 text-sm text-ink-3">
                  Passe deinen Suchbegriff an oder wähle eine andere Kategorie.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("Alle");
                    setSearchQuery("");
                  }}
                  className="mt-4 btn btn-secondary text-xs font-bold"
                >
                  Alle Artikel anzeigen
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((art) => (
                  <article
                    key={art.id}
                    onClick={() => handleOpenArticle(art)}
                    className="card-lift group flex flex-col justify-between rounded-3xl border border-line bg-paper p-6 sm:p-7 shadow-xs hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      {/* Top tags */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="rounded-md bg-primary-subtle px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-primary">
                            {art.category}
                          </span>
                          {art.slug === "medat-2027-termine-fristen" && (
                            <span className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                              Sonderleitfaden
                            </span>
                          )}
                          {art.slug === "kff-strategie-schnellste-punkte" && (
                            <span className="rounded-md bg-primary-subtle text-primary border border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                              Masterclass-Guide
                            </span>
                          )}
                          {art.slug === "quoten-bewerberzahlen-analyse" && (
                            <span className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                              Analyse-Report
                            </span>
                          )}
                          {art.slug === "bms-masterplan-vorbereitung" && (
                            <span className="rounded-md bg-primary-subtle text-primary border border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                              Masterplan-Guide
                            </span>
                          )}
                          {art.slug === "tv-sek-emotionen-textverstaendnis" && (
                            <span className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                              Praxis-Guide
                            </span>
                          )}
                          {art.slug === "testtag-protokoll-mentale-staerke" && (
                            <span className="rounded-md bg-primary-subtle text-primary border border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                              Protokoll-Checkliste
                            </span>
                          )}
                        </div>
                        <span className="text-[11.5px] font-medium text-ink-4">
                          ⏱ {art.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-[19px] sm:text-[20px] font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                        {art.title}
                      </h3>

                      {/* Subtitle / Excerpt */}
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-3 line-clamp-3">
                        {art.summary}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {art.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-paper-3 px-2 py-0.5 text-[10px] font-semibold text-ink-3"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white"
                          aria-hidden="true"
                        >
                          {art.author.avatar}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[12px] font-bold text-ink truncate">{art.author.name}</p>
                          <p className="text-[10px] text-ink-4">{art.publishedDate}</p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-primary group-hover:translate-x-1 transition-transform">
                        <span>Lesen</span>
                        <IconArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* CALLOUT BANNER AT BOTTOM */}
          <div className="mt-16 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-subtle/80 via-paper to-amber-50/30 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="rounded-md bg-primary px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-paper">
                Kostenloser MedAT Einstufungstest
              </span>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-ink">
                Finde heraus, wo du im Vergleich zur Konkurrenz stehst.
              </h3>
              <p className="text-[14px] text-ink-3 leading-relaxed">
                24 repräsentative Originalfragen aus BMS, KFF, TV und SEK in 8–10 Minuten. Sofortige
                Potenzialanalyse und persönlicher Lernplanempfehlung.
              </p>
            </div>
            <a
              href="#/onboarding?mode=register"
              className="btn btn-primary px-6 py-3.5 text-sm font-bold shadow-md whitespace-nowrap shrink-0"
            >
              Einstufungstest starten (0 €) →
            </a>
          </div>
        </div>
      </main>

      {/* ---------------- FULL ARTICLE READER MODAL ---------------- */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
        >
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-paper border border-line shadow-2xl p-6 sm:p-10 animate-fade-up">
            {/* Close Button */}
            <button
              onClick={handleCloseArticle}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 flex h-9 w-9 items-center justify-center rounded-full bg-paper-2 text-ink-3 hover:bg-slate-200 hover:text-ink transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <IconClose className="h-4 w-4" />
            </button>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-md bg-primary-subtle px-2.5 py-1 text-[11px] font-bold text-primary uppercase">
                {activeArticle.category}
              </span>
              <span className="text-ink-4">·</span>
              <span className="text-ink-4">⏱ {activeArticle.readTime} Lesezeit</span>
              <span className="text-ink-4">·</span>
              <span className="text-ink-4">{activeArticle.publishedDate}</span>
            </div>

            {/* Title & Subtitle */}
            <h1 id="article-title" className="mt-4 text-[24px] sm:text-[32px] font-bold text-ink leading-tight">
              {activeArticle.title}
            </h1>
            <p className="mt-2 text-[15px] sm:text-[16px] text-ink-3 leading-relaxed">
              {activeArticle.subtitle}
            </p>

            {/* Author Attribution */}
            <div className="mt-5 flex items-center gap-3 border-y border-line py-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {activeArticle.author.avatar}
              </span>
              <div>
                <p className="text-[13px] font-bold text-ink">{activeArticle.author.name}</p>
                <p className="text-[11.5px] text-ink-3">{activeArticle.author.role}</p>
              </div>
            </div>

            {/* Dedicated full-page callout banner if art-1 */}
            {activeArticle.slug === "medat-2027-termine-fristen" && (
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary-subtle to-paper p-4 sm:p-5 shadow-xs">
                <div>
                  <p className="text-[13.5px] font-bold text-ink">
                    Ausführlicher Sonderleitfaden verfügbar
                  </p>
                  <p className="text-[12px] text-ink-3 mt-0.5">
                    Mit interaktiver Zeitachse, allen 4 Universitätsstandorten und vollständigem Tagesablauf.
                  </p>
                </div>
                <Link
                  to="/medat-2027-termine-fristen"
                  className="btn btn-primary btn-sm px-4 py-2 text-xs font-bold whitespace-nowrap self-start sm:self-auto shrink-0 shadow-xs"
                >
                  Vollständigen Leitfaden öffnen →
                </Link>
              </div>
            )}

            {/* Dedicated full-page callout banner if art-2 */}
            {activeArticle.slug === "kff-strategie-schnellste-punkte" && (
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary-subtle to-paper p-4 sm:p-5 shadow-xs">
                <div>
                  <p className="text-[13.5px] font-bold text-ink">
                    Ausführlicher KFF-Masterclass-Leitfaden verfügbar
                  </p>
                  <p className="text-[12px] text-ink-3 mt-0.5">
                    Mit interaktivem Loci-Ausweis-Simulator, Hebelrechner und den 7 Zahlenfolgen-Mustern.
                  </p>
                </div>
                <Link
                  to="/kff-strategie-schnellste-punkte"
                  className="btn btn-primary btn-sm px-4 py-2 text-xs font-bold whitespace-nowrap self-start sm:self-auto shrink-0 shadow-xs"
                >
                  Vollständigen Leitfaden öffnen →
                </Link>
              </div>
            )}

            {/* Dedicated full-page callout banner if art-3 */}
            {activeArticle.slug === "quoten-bewerberzahlen-analyse" && (
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary-subtle to-paper p-4 sm:p-5 shadow-xs">
                <div>
                  <p className="text-[13.5px] font-bold text-ink">
                    Ausführlicher Quoten- & Grenzwert-Report verfügbar
                  </p>
                  <p className="text-[12px] text-ink-3 mt-0.5">
                    Mit interaktivem Chancen-Simulator, Cut-Off-Historie 2021–2026 und Perzentilrang-Rechner.
                  </p>
                </div>
                <Link
                  to="/quoten-bewerberzahlen-analyse"
                  className="btn btn-primary btn-sm px-4 py-2 text-xs font-bold whitespace-nowrap self-start sm:self-auto shrink-0 shadow-xs"
                >
                  Vollständigen Leitfaden öffnen →
                </Link>
              </div>
            )}

            {/* Dedicated full-page callout banner if art-4 */}
            {activeArticle.slug === "bms-masterplan-vorbereitung" && (
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary-subtle to-paper p-4 sm:p-5 shadow-xs">
                <div>
                  <p className="text-[13.5px] font-bold text-ink">
                    Ausführlicher BMS-Masterplan verfügbar
                  </p>
                  <p className="text-[12px] text-ink-3 mt-0.5">
                    Mit 16-Wochen-Lernplan, Pacing-Rechner, VMC-Relevanz-Matrix und Formelsammlung.
                  </p>
                </div>
                <Link
                  to="/bms-masterplan-vorbereitung"
                  className="btn btn-primary btn-sm px-4 py-2 text-xs font-bold whitespace-nowrap self-start sm:self-auto shrink-0 shadow-xs"
                >
                  Vollständigen Leitfaden öffnen →
                </Link>
              </div>
            )}

            {/* Dedicated full-page callout banner if art-5 */}
            {activeArticle.slug === "tv-sek-emotionen-textverstaendnis" && (
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary-subtle to-paper p-4 sm:p-5 shadow-xs">
                <div>
                  <p className="text-[13.5px] font-bold text-ink">
                    Ausführlicher TV & SEK Leitfaden verfügbar
                  </p>
                  <p className="text-[12px] text-ink-3 mt-0.5">
                    Mit Signalwort-Scanning, Kohlberg-Dilemma-Simulator und Emotionen-Regulierungs-Matrix.
                  </p>
                </div>
                <Link
                  to="/tv-sek-emotionen-textverstaendnis"
                  className="btn btn-primary btn-sm px-4 py-2 text-xs font-bold whitespace-nowrap self-start sm:self-auto shrink-0 shadow-xs"
                >
                  Vollständigen Leitfaden öffnen →
                </Link>
              </div>
            )}

            {/* Dedicated full-page callout banner if art-6 */}
            {activeArticle.slug === "testtag-protokoll-mentale-staerke" && (
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary-subtle to-paper p-4 sm:p-5 shadow-xs">
                <div>
                  <p className="text-[13.5px] font-bold text-ink">
                    Ausführliches Testtag-Protokoll verfügbar
                  </p>
                  <p className="text-[12px] text-ink-3 mt-0.5">
                    Mit interaktiver Sackerl-Packliste, 4 Messehallen-Guides, Anti-Mittagstief-Ernährung und Box-Breathing.
                  </p>
                </div>
                <Link
                  to="/testtag-protokoll-mentale-staerke"
                  className="btn btn-primary btn-sm px-4 py-2 text-xs font-bold whitespace-nowrap self-start sm:self-auto shrink-0 shadow-xs"
                >
                  Vollständigen Leitfaden öffnen →
                </Link>
              </div>
            )}

            {/* Key Takeaways Box */}
            <div className="mt-6 rounded-2xl bg-paper-2 border border-line p-5 sm:p-6 space-y-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Kernerkenntnisse auf einen Blick
              </h4>
              <ul className="space-y-2 text-[13.5px] text-ink-2">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <IconCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body Sections */}
            <div className="mt-8 space-y-8 text-ink-2 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              {activeArticle.sections.map((sec, sIdx) => (
                <section key={sIdx} className="space-y-3.5">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-ink">
                    {sec.heading}
                  </h3>
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}

                  {sec.callout && (
                    <div
                      className={`rounded-2xl p-4 sm:p-5 border text-[13.5px] ${
                        sec.callout.type === "warning"
                          ? "bg-amber-50/70 border-amber-300 text-amber-950"
                          : sec.callout.type === "tip"
                          ? "bg-emerald-50/70 border-emerald-300 text-emerald-950"
                          : "bg-blue-50/70 border-blue-300 text-blue-950"
                      }`}
                    >
                      <p className="font-bold flex items-center gap-1.5 mb-1">
                        {sec.callout.type === "warning" && "⚠️ Achtung: "}
                        {sec.callout.type === "tip" && "💡 Tipp: "}
                        {sec.callout.type === "note" && "ℹ️ Hinweis: "}
                        {sec.callout.title}
                      </p>
                      <p>{sec.callout.text}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-line flex flex-wrap gap-2">
              {activeArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-paper-3 px-2.5 py-1 text-[11px] font-semibold text-ink-3"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Bottom CTA in Modal */}
            <div className="mt-8 rounded-2xl bg-night text-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-[16px] font-bold">Bereit, dein Wissen zu testen?</h4>
                <p className="text-[12.5px] text-slate-300 mt-0.5">
                  Starte jetzt mit 200 kostenlosen MedAT-Aufgaben im Basis-Zugang.
                </p>
              </div>
              <a
                href="#/onboarding?mode=register"
                className="btn btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold whitespace-nowrap"
              >
                Kostenlos loslegen →
              </a>
            </div>

            {/* Back button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleCloseArticle}
                className="text-xs font-bold text-ink-4 hover:text-ink cursor-pointer"
              >
                ← Zurück zur Artikelübersicht
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
}
