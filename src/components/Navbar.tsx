import { useEffect, useRef, useState } from "react";
import { DROPDOWN_ITEMS, NAV_LINKS } from "../lib/data";
import { scrollToId, track } from "../lib/core";
import { useI18n } from "../lib/i18n";
import { IconChevron, LogoMark } from "../lib/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(false);
  const { lang, setLang, t } = useI18n();
  const ddTimer = useRef<number | null>(null);
  const ddRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  const openDd = () => {
    if (ddTimer.current) window.clearTimeout(ddTimer.current);
    ddTimer.current = window.setTimeout(() => setDdOpen(true), 150);
  };
  const closeDd = () => {
    if (ddTimer.current) window.clearTimeout(ddTimer.current);
    setDdOpen(false);
  };

  const onTriggerKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDdOpen(true);
      requestAnimationFrame(() => {
        panelRef.current?.querySelector<HTMLElement>("[role=menuitem]")?.focus();
      });
    } else if (e.key === "Escape") {
      closeDd();
    }
  };

  const onMenuKey = (e: React.KeyboardEvent) => {
    const items = Array.from(panelRef.current?.querySelectorAll<HTMLElement>("[role=menuitem]") ?? []);
    const idx = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(idx + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(idx - 1 + items.length) % items.length]?.focus();
    } else if (e.key === "Escape") {
      closeDd();
      triggerRef.current?.focus();
    }
  };

  const go = (href: string) => {
    setMenuOpen(false);
    closeDd();
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
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="MedAT Prep — zur Startsektion"
        >
          <LogoMark className="h-9 w-9" />
          <span className="display text-[17px] leading-none text-ink">
            MedAT <span className="font-sans font-medium normal-case tracking-normal text-ink-3">Prep</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li
                  key={link.label}
                  ref={ddRef}
                  className="relative"
                  onMouseEnter={openDd}
                  onMouseLeave={closeDd}
                >
                  <button
                    ref={triggerRef}
                    aria-haspopup="true"
                    aria-expanded={ddOpen}
                    onClick={() => setDdOpen((v) => !v)}
                    onKeyDown={onTriggerKey}
                    className={`link-tertiary flex items-center gap-1 px-3 py-2 text-sm ${
                      ddOpen ? "text-primary" : ""
                    }`}
                  >
                    {t(link.label)}
                    <IconChevron
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${ddOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    ref={panelRef}
                    role="menu"
                    aria-label="Über den MedAT"
                    onKeyDown={onMenuKey}
                    className={`absolute left-0 top-full min-w-[260px] rounded-xl border border-line bg-paper p-2 shadow-lg transition-all duration-200 ${
                      ddOpen
                        ? "pointer-events-auto translate-y-2 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                  >
                    {DROPDOWN_ITEMS.map((item) => (
                      <a
                        key={item.label}
                        role="menuitem"
                        tabIndex={ddOpen ? 0 : -1}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          go(item.href);
                        }}
                        className="group flex flex-col rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-paper-2 focus-visible:bg-paper-2"
                      >
                        <span className="text-sm font-semibold text-ink transition-colors group-hover:text-primary">
                          {t(item.label)}
                        </span>
                        <span className="text-xs text-ink-3">{item.desc}</span>
                      </a>
                    ))}
                  </div>
                </li>
              ) : (
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
              )
            )}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3 lg:gap-4">
          <div
            className="hidden items-center gap-1 text-xs font-semibold sm:flex"
            role="group"
            aria-label="Sprache wählen"
          >
            {(["DE", "EN"] as const).map((l) => (
              <button
                key={l}
                aria-pressed={lang === l.toLowerCase()}
                onClick={() => setLang(l.toLowerCase() as "de" | "en")}
                className={`px-1 transition-colors duration-200 ${
                  lang === l.toLowerCase()
                    ? "text-ink underline decoration-primary decoration-2 underline-offset-4"
                    : "text-ink-4 hover:text-ink-2"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

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
            className="btn btn-primary btn-sm px-5"
            onClick={() => {
              track("nav_signup_click", { location: "navbar" });
              window.location.hash = "#/onboarding";
            }}
          >
            {t("Kostenlos starten")}
          </button>

          {/* Hamburger */}
          <button
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
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
        <div className="flex h-16 items-center justify-between border-b border-line px-6">
          <span className="flex items-center gap-2">
            <LogoMark className="h-8 w-8" />
            <span className="display text-[16px] leading-none">MedAT Prep</span>
          </span>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-2 hover:bg-paper-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile Navigation">
          <div className="border-b border-paper-3">
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-lg font-semibold"
              onClick={() => setMobileSub((v) => !v)}
              aria-expanded={mobileSub}
            >
              Über den MedAT
              <IconChevron className={`h-4 w-4 transition-transform duration-300 ${mobileSub ? "rotate-180" : ""}`} />
            </button>
            <div className={`acc-body ${mobileSub ? "open" : ""}`}>
              <div className="acc-inner">
                {DROPDOWN_ITEMS.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    className="block px-10 py-2.5 text-[15px] text-ink-2 transition-colors hover:text-primary"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.filter((l) => !l.dropdown).map((link, i) => (
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
              {link.label}
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
            Anmelden
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
