import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/data";
import { scrollToId, track } from "../lib/core";
import { useI18n } from "../lib/i18n";
import { LogoMark } from "../lib/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Mobile drawer: body scroll lock + Escape */
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#/")) {
      window.location.hash = href.replace("#", "");
      return;
    }
    scrollToId(href.replace("#", ""));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-paper shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          : "border-line/50 bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-3 sm:gap-6 lg:h-[72px]">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 sm:gap-2.5 transition-transform duration-200 hover:scale-[1.02] shrink-0"
          aria-label="MedAT Prep — zur Startsektion"
        >
          <LogoMark className="h-8 w-8 sm:h-9 sm:w-9 shrink-0" />
          <span className="display text-[15px] sm:text-[17px] leading-none text-ink">
            MedAT <span className="font-sans font-medium normal-case tracking-normal text-ink-3">Prep</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.href);
                  }}
                  className="link-tertiary px-3 py-2 text-sm"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <a
            href="#/login"
            onClick={(e) => {
              e.preventDefault();
              track("nav_login_click", { location: "navbar" });
              window.location.hash = "#/onboarding?mode=login";
            }}
            className="link-tertiary hidden text-sm md:block"
          >
            {t("Anmelden")}
          </a>

          <button
            className="btn btn-primary btn-sm px-2.5 py-1.5 xs:px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap min-h-[36px] sm:min-h-[40px] touch-manipulation"
            onClick={() => {
              track("nav_signup_click", { location: "navbar" });
              window.location.hash = "#/onboarding";
            }}
          >
            <span className="hidden xs:inline">{t("Kostenlos starten")}</span>
            <span className="xs:hidden">{t("Starten")}</span>
          </button>

          {/* Hamburger */}
          <button
            className="relative flex h-11 w-11 items-center justify-center rounded-lg hover:bg-paper-2 active:bg-paper-3 lg:hidden touch-manipulation"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <span
              className={`absolute h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobiles Menü"
        className={`fixed inset-y-0 right-0 z-[61] flex w-[86%] max-w-sm flex-col bg-paper shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5 sm:px-6">
          <span className="flex items-center gap-2">
            <LogoMark className="h-7 w-7 sm:h-8 sm:w-8" />
            <span className="display text-[15px] sm:text-[16px] leading-none">MedAT Prep</span>
          </span>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-2 hover:bg-paper-2 active:bg-paper-3 touch-manipulation"
            onClick={() => setMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                go(link.href);
              }}
              className={`block border-b border-paper-3 px-6 py-4 text-lg font-semibold transition-all duration-300 hover:text-primary ${
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
            >
              {t(link.label)}
            </a>
          ))}
          <a
            href="#/login"
            onClick={(e) => {
              e.preventDefault();
              track("nav_login_click", { location: "mobile_navbar" });
              setMenuOpen(false);
              window.location.hash = "#/onboarding?mode=login";
            }}
            className="block px-6 py-4 text-lg font-semibold text-ink-2 hover:text-primary"
          >
            {t("Anmelden")}
          </a>
        </nav>

        <div className="border-t border-line p-6 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
          <button
            className="btn btn-primary w-full"
            onClick={() => {
              setMenuOpen(false);
              track("nav_signup_click", { location: "mobile_navbar" });
              window.location.hash = "#/onboarding";
            }}
          >
            Kostenlos starten
          </button>
          <p className="mt-3 text-center text-xs text-ink-3">Keine Kreditkarte nötig · Basis dauerhaft gratis</p>
        </div>
      </div>
    </header>
  );
}
