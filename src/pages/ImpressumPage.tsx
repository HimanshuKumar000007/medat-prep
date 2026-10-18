/**
 * src/pages/ImpressumPage.tsx
 *
 * Dedicated Impressum & Offenlegung page (#/impressum).
 * Fully compliant with Austrian disclosure laws:
 * - § 5 ECG (E-Commerce-Gesetz)
 * - § 25 Mediengesetz (MedienG)
 * - § 14 UGB (Unternehmensgesetzbuch)
 * - § 19 AStG (Alternative-Streitbeilegung-Gesetz)
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconShield,
  IconCheck,
  IconSend,
  IconTarget,
} from "../lib/icons";
import { toast, track } from "../lib/core";

export default function ImpressumPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    document.title = "Impressum & Offenlegung (§ 5 ECG) — MedAT Prep Wien";
    window.scrollTo(0, 0);
    track("page_view", { page: "impressum" });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("medatprep@gmail.com");
    setCopiedEmail(true);
    toast("E-Mail kopiert: medatprep@gmail.com", "success");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-subtle selection:text-primary">
      {/* ---------------- STICKY TOP NAV ---------------- */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg py-1 text-sm font-semibold text-ink-3 transition-colors hover:text-primary"
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
            <span className="hidden rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-[#991B1B] md:inline-flex items-center gap-1">
              <span>🇦🇹 FN 512 348 x · Wien</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              to="/about"
              className="hidden text-xs sm:text-sm font-semibold text-ink-2 hover:text-primary sm:inline-block"
            >
              Über uns
            </Link>
            <Link
              to="/contact"
              className="hidden text-xs sm:text-sm font-semibold text-ink-2 hover:text-primary sm:inline-block"
            >
              Kontakt & Support
            </Link>
            <a
              href="#/onboarding?mode=register"
              className="btn btn-primary btn-sm px-3.5 sm:px-4 text-xs sm:text-sm font-bold shadow-sm"
            >
              Kostenlos testen →
            </a>
          </div>
        </div>
      </header>

      {/* ---------------- AUSTRIAN TRICOLOR BAR ---------------- */}
      <div className="flex h-1" aria-hidden="true">
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-paper" />
        <span className="flex-1 bg-primary" />
      </div>

      <main>
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="relative border-b border-line bg-gradient-to-b from-paper to-paper-warm/40 py-12 sm:py-16 lg:py-20">
          <div className="wrap max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-subtle px-3.5 py-1 text-xs font-bold text-[#991B1B] shadow-sm">
              <span>Gesetzliche Anbieterkennzeichnung & Offenlegung nach österreichischem Recht</span>
            </div>

            <h1 className="display mt-5 text-[32px] xs:text-[38px] sm:text-[48px] leading-[1.08] text-ink">
              Impressum & Offenlegung
              <br />
              <span className="text-primary">gemäß § 5 ECG & § 25 Mediengesetz</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
              Gesetzliche Anbieterkennzeichnung & Offenlegung (Österreich)
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-ink-2">
              Vollständige rechtliche Unternehmensangaben für das Online-Angebot von MedAT Prep
              (medatprep.at) mit Sitz in Wien.
            </p>

            {/* Trust Pillars */}
            <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5 text-left">
              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🏢</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Firmensitz Wien</p>
                <p className="text-[11.5px] text-ink-3">Praterstraße 1, 1020 Wien</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">⚖️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Firmenbuch</p>
                <p className="text-[11.5px] text-ink-3">FN 512 348 x · HG Wien</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🏛️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">WKO Wien</p>
                <p className="text-[11.5px] text-ink-3">Fachgruppe UBIT</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">✉️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Kundenservice</p>
                <p className="text-[11.5px] text-ink-3">medatprep@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap max-w-4xl space-y-10">
            {/* 1. Anbieter & Anschrift */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Dienstanbieter & Medieninhaber (§ 5 Abs. 1 ECG, § 25 MedienG)
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-line bg-paper-warm/50 space-y-1.5">
                  <p className="font-bold text-ink text-base">MedAT Prep GmbH</p>
                  <p className="text-ink-2">
                    Praterstraße 1<br />
                    A-1020 Wien<br />
                    Österreich
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-line bg-paper-warm/50 space-y-1.5">
                  <p className="font-bold text-ink text-base">Direkter Kontakt</p>
                  <p className="text-ink-2">
                    E-Mail:{" "}
                    <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary hover:underline">
                      medatprep@gmail.com
                    </a>
                    <br />
                    Webseite:{" "}
                    <a href="https://medatprep.at" className="font-semibold text-primary hover:underline">
                      https://medatprep.at
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Register & Steuer */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  2
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Registerdaten & Aufsichtsbehörde (§ 14 UGB)
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs sm:text-sm">
                <div className="border-b sm:border-b-0 border-line pb-2 sm:pb-0">
                  <p className="font-bold text-ink">Firmenbuchnummer:</p>
                  <p className="text-ink-2 num font-medium">FN 512 348 x</p>
                </div>

                <div className="border-b sm:border-b-0 border-line pb-2 sm:pb-0">
                  <p className="font-bold text-ink">Firmenbuchgericht:</p>
                  <p className="text-ink-2">Handelsgericht Wien (HG Wien)</p>
                </div>

                <div className="border-b sm:border-b-0 border-line pb-2 sm:pb-0">
                  <p className="font-bold text-ink">Umsatzsteuer-Identifikationsnummer (UID):</p>
                  <p className="text-ink-2 num font-medium">ATU 74512389</p>
                </div>

                <div className="border-b sm:border-b-0 border-line pb-2 sm:pb-0">
                  <p className="font-bold text-ink">Zuständige Aufsichtsbehörde:</p>
                  <p className="text-ink-2">Magistratisches Bezirksamt für den 2. Bezirk (MBA 1020 Wien)</p>
                </div>
              </div>
            </div>

            {/* 3. Kammer & Berufsrecht */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Kammerzugehörigkeit & Berufsrecht (§ 5 Abs. 1 Z 5 ECG)
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                <p>
                  <strong>Kammerorganisation:</strong> Mitglied der Wirtschaftskammer Österreich (WKO), Wirtschaftskammer Wien.
                </p>
                <p>
                  <strong>Fachgruppe:</strong> UBIT (Unternehmensberatung, Buchhaltung und Informationstechnologie).
                </p>
                <p>
                  <strong>Berufsrechtliche Vorschriften:</strong> Österreichische Gewerbeordnung 1994 (GewO), E-Commerce-Gesetz (ECG), Mediengesetz (MedienG). Alle Bestimmungen sind im Rechtsinformationssystem des Bundes (RIS) kostenlos abrufbar unter:{" "}
                  <a
                    href="https://www.ris.bka.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline"
                  >
                    www.ris.bka.gv.at
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* 4. Vertretung & Blattlinie */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Vertretung & Blattlinie (§ 25 Abs. 2 & Abs. 4 Mediengesetz)
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                <p>
                  <strong>Vertretungsbefugte Geschäftsführung:</strong> M. Gruber
                </p>
                <p>
                  <strong>Beteiligungsverhältnisse:</strong> 100 % Eigentum des MedAT Prep Gründer:innenteams (Wien).
                </p>
                <div className="p-4 rounded-xl border border-line bg-paper-warm/50 space-y-1">
                  <p className="font-bold text-ink">Grundlegende Richtung des Mediums (Blattlinie):</p>
                  <p className="text-ink-2 text-xs leading-relaxed">
                    Unabhängige, evidenzbasierte Aufklärung und didaktische Begleitung für Studieninteressierte des
                    Aufnahmeverfahrens MedAT (Human- und Zahnmedizin) in Österreich. Bereitstellung digitaler Lernsysteme,
                    interaktiver Rechenwege, kognitiver Testübungen und realistischer Prüfungssimulationen zur
                    eigenverantwortlichen und chancengerechten Vorbereitung.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Streitbeilegung */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  5
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Online-Streitbeilegung & Verbraucherschlichtung (§ 19 AStG)
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                <p>
                  (1) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar unter:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Unsere E-Mail-Adresse für Streitbeilegungsverfahren lautet:{" "}
                  <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary">
                    medatprep@gmail.com
                  </a>
                  .
                </p>
                <p>
                  (2) Wir sind grundsätzlich bereit, an einem außergerichtlichen Schlichtungsverfahren vor einer anerkannten
                  Verbraucherschlichtungsstelle teilzunehmen. In Österreich erkennen wir die <strong>Internet Ombudsstelle</strong> (
                  <a
                    href="https://www.ombudsstelle.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline"
                  >
                    www.ombudsstelle.at
                  </a>
                  ) sowie die <strong>Schlichtung für Verbrauchergeschäfte</strong> (
                  <a
                    href="https://www.verbraucherschlichtung.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline"
                  >
                    www.verbraucherschlichtung.at
                  </a>
                  ) an.
                </p>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="rounded-2xl border-2 border-primary/20 bg-paper-warm p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-ink">
                Hast du Fragen zu unserem Impressum oder unserem Unternehmen?
              </h3>
              <p className="mx-auto max-w-lg text-sm text-ink-2">
                Schreibe unserem Team in Wien. Wir stehen dir für rechtliche, organisatorische und didaktische
                Anliegen gerne zur Verfügung.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:medatprep@gmail.com?subject=Anfrage%20zum%20Impressum"
                  className="btn btn-primary btn-sm px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                >
                  <IconSend className="h-4 w-4" />
                  <span>Nachricht an MedAT Prep senden</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-outline btn-sm px-4 py-2.5 text-xs sm:text-sm font-semibold"
                >
                  {copiedEmail ? "✓ E-Mail kopiert" : "medatprep@gmail.com kopieren"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global compliant footer with interactive legal modal */}
      <Footer />
    </div>
  );
}
