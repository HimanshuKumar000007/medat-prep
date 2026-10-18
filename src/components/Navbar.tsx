import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "../lib/data";
import { scrollToId, track } from "../lib/core";
import { useI18n } from "../lib/i18n";
import { LogoMark } from "../lib/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  const touchStartXRef = useRef<number | null>(null);
  const touchCurrentXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchCurrentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      touchCurrentXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchCurrentXRef.current !== null) {
      const deltaX = touchCurrentXRef.current - touchStartXRef.current;
      // If user swipes right by > 45px, smoothly close drawer
      if (deltaX > 45) {
        setMenuOpen(false);
      }
    }
    touchStartXRef.current = null;
    touchCurrentXRef.current = null;
  };

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
    <>
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
              className="relative flex h-11 w-11 items-center justify-center rounded-lg hover:bg-paper-2 active:bg-paper-3 lg:hidden touch-manipulation cursor-pointer"
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
      </header>

      {/* Mobile drawer: portal to document.body to avoid backdrop-blur/containing block clipping */}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
              menuOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobiles Menü"
          >
            {/* Backdrop */}
            <div
              className={`absolute inset-0 bg-night/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setMenuOpen(false)}
              aria-label="Menü schließen"
            />

            {/* Drawer Panel */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`absolute right-0 top-0 flex h-dvh w-[86%] max-w-sm flex-col bg-paper shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-line will-change-transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Drawer Header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5 sm:px-6 bg-paper">
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-2.5"
                >
                  <LogoMark className="h-7 w-7 sm:h-8 sm:w-8 shrink-0" />
                  <span className="display text-[16px] leading-none text-ink">
                    MedAT{" "}
                    <span className="font-sans font-medium normal-case tracking-normal text-ink-3">
                      Prep
                    </span>
                  </span>
                </a>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-ink-2 hover:bg-paper-2 active:bg-paper-3 active:scale-95 transition-all touch-manipulation cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Menü schließen"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Nav Content */}
              <nav
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-4 space-y-1"
                aria-label="Mobile Navigation"
              >
                <p className="px-3 pb-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-4">
                  {t("Navigation")}
                </p>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.href);
                    }}
                    className="flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-semibold text-ink-2 transition-colors hover:bg-paper-2 hover:text-primary active:bg-paper-3 cursor-pointer"
                  >
                    <span>{t(link.label)}</span>
                    <svg
                      className="h-4 w-4 text-ink-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}

                <div className="my-3 border-t border-line/70" />

                <p className="px-3 pb-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-4">
                  {t("Account")}
                </p>
                <a
                  href="#/login"
                  onClick={(e) => {
                    e.preventDefault();
                    track("nav_login_click", { location: "mobile_navbar" });
                    setMenuOpen(false);
                    window.location.hash = "#/onboarding?mode=login";
                  }}
                  className="flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-semibold text-ink-2 transition-colors hover:bg-paper-2 hover:text-primary active:bg-paper-3 cursor-pointer"
                >
                  <span>{t("Anmelden")}</span>
                  <span className="text-xs font-bold text-primary">{t("Login")} →</span>
                </a>
              </nav>

              {/* Drawer Footer CTA */}
              <div className="shrink-0 border-t border-line p-5 bg-paper space-y-2.5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
                <button
                  className="btn btn-primary w-full min-h-[48px] justify-center text-[15px] font-bold shadow-cta cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false);
                    track("nav_signup_click", { location: "mobile_navbar" });
                    window.location.hash = "#/onboarding";
                  }}
                >
                  {t("Kostenlos starten")}
                </button>
                <p className="text-center text-[11px] font-medium text-ink-3">
                  {t("Keine Kreditkarte nötig · Basis dauerhaft gratis")}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
