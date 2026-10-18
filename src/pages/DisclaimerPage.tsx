/**
 * src/pages/DisclaimerPage.tsx
 *
 * Dedicated, comprehensive Disclaimer & Independence Statement page (#/disclaimer, #/haftungsausschluss).
 * Clarifies non-affiliation with the Austrian Medical Universities (MedUni Wien, Graz, Innsbruck, JKU Linz),
 * fair use of descriptive trademarks according to § 10 Abs. 3 Markenschutzgesetz (MSchG),
 * authorship of proprietary questions, and absence of admissions guarantees.
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconShield,
  IconCheck,
  IconSend,
  IconBrain,
  IconTarget,
} from "../lib/icons";
import { toast, track } from "../lib/core";

export default function DisclaimerPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    document.title = "Haftungsausschluss & Unabhängigkeit (MedUni) — MedAT Prep";
    window.scrollTo(0, 0);
    track("page_view", { page: "disclaimer_meduni" });
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
            <span className="hidden rounded-full border border-amber-500/20 bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 md:inline-flex items-center gap-1">
              <span>⚠️ Unabhängiges Angebot</span>
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
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-900 shadow-sm">
              <span>Rechtlicher Transparenz-Hinweis & Abgrenzungserklärung</span>
            </div>

            <h1 className="display mt-5 text-[32px] xs:text-[38px] sm:text-[48px] leading-[1.08] text-ink">
              Unabhängig. Transparent.
              <br />
              <span className="text-primary">Haftungsausschluss & Unabhängigkeit.</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
              Rechtliche Abgrenzungserklärung & Markenschutz
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-ink-2">
              Zur Vermeidung jeglicher Verwechslung stellen wir klar: MedAT Prep ist eine eigenständige,
              private digitale Bildungsplattform. Wir stehen in keiner organisatorischen oder wirtschaftlichen
              Verbindung zu den Medizinischen Universitäten in Österreich.
            </p>

            {/* Core Pillars */}
            <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5 text-left">
              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🏛️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Keine Uni-Trägerschaft</p>
                <p className="text-[11.5px] text-ink-3">Vollkommen freies Vorbereitungstool</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">📚</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Eigene Fragen</p>
                <p className="text-[11.5px] text-ink-3">Didaktisch selbst verfasste Aufgaben</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">⚖️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Zulässige Kennzeichennutzung</p>
                <p className="text-[11.5px] text-ink-3">Beschreibende Nennung nach MSchG</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🎯</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Kein Scheinversprechen</p>
                <p className="text-[11.5px] text-ink-3">Ehrliche Vorbereitung ohne Platzgarantie</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- HIGHLIGHT ALERT CARD ---------------- */}
        <section className="py-8 bg-paper-warm/30 border-b border-line">
          <div className="wrap max-w-4xl">
            <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-50/50 p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-paper text-sm font-bold">
                  !
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-amber-950">
                  Offizielle Testanmeldung & Informationsquelle
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-amber-900">
                Die offizielle Anmeldung zum Aufnahmetest für das Medizinstudium (MedAT-H und MedAT-Z),
                die Entrichtung der offiziellen Testgebühr (110 €) sowie die Vergabe der tatsächlichen Studienplätze
                erfolgt <strong>ausschließlich über die offiziellen Portale der Universitäten</strong> unter:{" "}
                <a
                  href="https://www.medizinstudieren.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-amber-950 hover:text-primary"
                >
                  www.medizinstudieren.at
                </a>
                . MedAT Prep vermittelt keine Testplätze und nimmt keine offiziellen Prüfungsanmeldungen entgegen.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- MAIN SECTIONS ---------------- */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap max-w-4xl space-y-12">
            {/* Abschnitt 1: Unabhängigkeitserklärung & institutionelle Abgrenzung */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Klarstellung zur institutionellen Unabhängigkeit
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                MedAT Prep ist ein vollkommen <strong>eigenständiges, privates Bildungsprojekt</strong>.
                Es besteht keinerlei organisatorische, vertragliche, personelle oder wirtschaftliche Verbindung,
                Zusammenarbeit oder offizielle Autorisierung mit den Trägeruniversitäten des MedAT:
              </p>

              <div className="grid gap-3 sm:grid-cols-2 pt-1 text-xs sm:text-sm">
                <div className="rounded-xl border border-line bg-paper-warm/40 p-4 space-y-1">
                  <p className="font-bold text-ink">Medizinische Universität Wien</p>
                  <p className="text-ink-3">Spitalgasse 23, 1090 Wien · Keine Kooperation oder Verbindung</p>
                </div>

                <div className="rounded-xl border border-line bg-paper-warm/40 p-4 space-y-1">
                  <p className="font-bold text-ink">Medizinische Universität Innsbruck</p>
                  <p className="text-ink-3">Innrain 52, 6020 Innsbruck · Keine Kooperation oder Verbindung</p>
                </div>

                <div className="rounded-xl border border-line bg-paper-warm/40 p-4 space-y-1">
                  <p className="font-bold text-ink">Medizinische Universität Graz</p>
                  <p className="text-ink-3">Neue Stiftingtalstraße 6, 8010 Graz · Keine Kooperation oder Verbindung</p>
                </div>

                <div className="rounded-xl border border-line bg-paper-warm/40 p-4 space-y-1">
                  <p className="font-bold text-ink">Johannes Kepler Universität Linz (JKU)</p>
                  <p className="text-ink-3">Altenberger Straße 69, 4040 Linz · Keine Kooperation oder Verbindung</p>
                </div>
              </div>

              <p className="text-xs text-ink-3 pt-2">
                Keine dieser Universitäten hat die Inhalte, Übungsaufgaben, KI-Lernsysteme oder Probetests von
                MedAT Prep begutachtet, mitentwickelt, zertifiziert oder autorisiert.
              </p>
            </div>

            {/* Abschnitt 2: Markenschutz & Kennzeichennutzung */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 2
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Schutz von Marken & beschreibende Kennzeichennutzung
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) Die Bezeichnungen <strong>„MedAT“</strong>, <strong>„MedAT-H“</strong>, <strong>„MedAT-Z“</strong> sowie
                zugehörige Universitätsbezeichnungen sind geschützte Marken, Unternehmenskennzeichen oder geistiges Eigentum
                der jeweiligen Universitäten bzw. des Bundesministeriums für Bildung, Wissenschaft und Forschung (BMBWF).
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) Die Nennung dieser Bezeichnungen auf unserer Website und in den Übungsmaterialien erfolgt
                ausschließlich zu <strong>beschreibenden Zwecken (Referenznutzung nach österreichischem Markenrecht)</strong> im Sinne des § 10 Abs. 3 des
                österreichischen Markenschutzgesetzes (MSchG) sowie Art. 14 der Unionsmarkenverordnung (UMDV).
                Sie dient lediglich dazu, den Zweck und das didaktische Anwendungsgebiet unserer Software klar und
                eindeutig für Studieninteressierte zu benennen.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (3) MedAT Prep erhebt keinerlei Anspruch auf Inhaberschaft dieser Marken oder Kennzeichen. Aus der
                Verwendung kann zu keinem Zeitpunkt abgeleitet werden, dass ein Sponsoring, eine offizielle Unterstützung
                oder eine Lizenzpartnerschaft zwischen uns und den Markeninhaberinnen vorliegt.
              </p>
            </div>

            {/* Section 3: Authorship of learning material */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Eigenständige Erstellung der Übungsaufgaben (Keine Original-Testunterlagen)
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) Sämtliche in unserer Datenbank enthaltenen Aufgaben, Multiple-Choice-Fragen, didaktischen Rechenwege,
                Gedächtnis-Profile, Textverständnis-Absätze und Probetests wurden <strong>vollständig eigenständig</strong> von
                unserem Autorenteam (bestehend aus Ärzt:innen, MedAT-Spitzenplatzierten und Didaktiker:innen) verfasst.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) Wir orientieren uns methodisch an den öffentlich zugänglichen Vorgaben des offiziellen
                <strong>VMC-Stichwortkatalogs</strong> (Virtueller Medizinischer Campus / medizinstudieren.at).
              </p>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-50/60 p-4 text-xs sm:text-sm text-ink-2 space-y-1">
                <p className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <IconCheck className="h-4 w-4 text-emerald-600" />
                  <span>Schutz des Prüfungsgeheimnisses & Legalität</span>
                </p>
                <p>
                  Auf MedAT Prep werden <strong>keine echten, vertraulichen oder gestohlenen Prüfungsfragen</strong> aus den
                  abgeschlossenen Testtagen der Universitäten veröffentlicht oder getauscht. Wir distanzieren uns
                  ausdrücklich von unlauteren Methoden oder Versuchen, offizielle Prüfungsunterlagen illegal zu beschaffen.
                </p>
              </div>
            </div>

            {/* Section 4: Realistic Success Expectations */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Keine Erfolgs- oder Platzierungsgarantie (Aufklärung zum Ranking)
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) Der MedAT ist ein relatives <strong>Rangordnungs- und Auswahlverfahren</strong>. Die Aufnahme in das
                Human- oder Zahnmedizinstudium hängt ausschließlich davon ab, wie deine individuelle Testleistung im
                Vergleich zu allen anderen teilnehmenden Bewerber:innen desselben Jahres im jeweiligen Kontingent
                (Österreicher-Quote 75 %, EU-Quote 20 %, Drittstaaten-Quote 5 %) abschneidet.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) Obwohl unsere Vorbereitungsmethodik auf wissenschaftlich fundierter Lernpsychologie (Spaced Repetition,
                Active Recall) basiert und unsere Nutzer:innen nachweislich signifikante Punktgewinne erzielen,
                kann <strong>keine rechtliche Garantie oder Zusage für die Zuteilung eines Studienplatzes</strong> oder das
                Erreichen einer bestimmten Mindestprozentzahl übernommen werden.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (3) Das Prüfungsergebnis liegt letztlich stets in der persönlichen Lerndisziplin, der Tagesverfassung und
                der eigenverantwortlichen Vorbereitung der Testteilnehmer:innen.
              </p>
            </div>

            {/* Section 5: Medical disclaimer */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 5
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Didaktischer Charakter & Ausschluss medizinischer Beratung
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Alle auf dieser Website vermittelten Inhalte in den naturwissenschaftlichen Disziplinen
                (Biologie, Chemie, Physik, Mathematik) sowie im sozial-emotionalen Kompetenzbereich (SEK) dienen
                ausschließlich der theoretischen Vorbereitung auf Multiple-Choice-Prüfungen. Sie stellen
                <strong>keine medizinische Fachberatung, Diagnostik oder Therapieempfehlung</strong> dar.
              </p>
            </div>

            {/* Contact Support Box */}
            <div className="rounded-2xl border-2 border-primary/20 bg-paper-warm p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-ink">
                Hast du rechtliche Fragen zu unseren Hinweisen oder Inhalten?
              </h3>
              <p className="mx-auto max-w-lg text-sm text-ink-2">
                Wir legen höchsten Wert auf Rechtssicherheit, wissenschaftliche Redlichkeit und transparente Kommunikation.
                Schreibe unserem Team gerne direkt eine Nachricht.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:medatprep@gmail.com?subject=Rechtliche%20Anfrage%20%2F%20Haftungsausschluss"
                  className="btn btn-primary btn-sm px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                >
                  <IconSend className="h-4 w-4" />
                  <span>Rechtliche Anfrage stellen</span>
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
